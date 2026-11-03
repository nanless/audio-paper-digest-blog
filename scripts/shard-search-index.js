"use strict";

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const protocols = require('../assets/js/protocol-registry');
const CONTRACT = protocols.contract('paper-search-index-manifest');
const MAX_SHARD_BYTES = 1024 * 1024;
const MAX_SHARDS = 128;
const MAX_TOTAL_BYTES = 64 * 1024 * 1024;
const SHARD_URL_PATTERN = /^search-index\/part-[0-9]{4,}-[a-f0-9]{12}\.json$/;
const invariant = (condition, message) => { if (!condition) throw new Error(message); };

function atomicWrite(file, bytes) {
  const temporary = path.join(path.dirname(file), `.${path.basename(file)}.tmp-${crypto.randomUUID()}`);
  try {
    fs.writeFileSync(temporary, bytes, { flag: 'wx', mode: 0o644 });
    fs.renameSync(temporary, file);
  } finally { if (fs.existsSync(temporary)) fs.unlinkSync(temporary); }
}

function planShards(records, header, directory) {
  invariant(Array.isArray(records) && records.length > 0,
    '待分片搜索索引必须为非空数组，不能重复处理已有清单');
  const buffers = [];
  let current = [], currentBytes = 2;
  function finish() {
    if (current.length) buffers.push(Buffer.from(`[${current.join(',')}]`, 'utf8'));
    current = []; currentBytes = 2;
  }
  records.forEach((record, index) => {
    invariant(record && typeof record === 'object' && !Array.isArray(record), `索引 ${index} 必须为记录对象`);
    const serialized = JSON.stringify(record), bytes = Buffer.byteLength(serialized, 'utf8');
    invariant(bytes + 2 <= MAX_SHARD_BYTES, `索引 ${index} 单条记录超过分片 ${MAX_SHARD_BYTES} 字节限制`);
    if (currentBytes + bytes + (current.length ? 1 : 0) > MAX_SHARD_BYTES) finish();
    currentBytes += bytes + (current.length ? 1 : 0); current.push(serialized);
  });
  finish();
  const totalBytes = buffers.reduce((sum, buffer) => sum + buffer.length, 0);
  invariant(buffers.length <= MAX_SHARDS, `搜索索引分片超过 ${MAX_SHARDS} 个`);
  invariant(totalBytes <= MAX_TOTAL_BYTES, `搜索索引总字节超过 ${MAX_TOTAL_BYTES}`);
  const shards = buffers.map((buffer, index) => {
    const sha256 = crypto.createHash('sha256').update(buffer).digest('hex');
    const url = `search-index/part-${String(index + 1).padStart(4, '0')}-${sha256.slice(0, 12)}.json`;
    invariant(SHARD_URL_PATTERN.test(url), '搜索索引分片路径非法');
    return { url, bytes: buffer.length, sha256, recordCount: JSON.parse(buffer.toString('utf8')).length };
  });
  invariant(new Set(shards.map(shard => shard.url)).size === shards.length, '搜索索引分片路径必须唯一');
  return { directory, buffers, manifest: { ...header, recordCount: records.length, totalBytes, shards } };
}

function checkDirectory(root, relative, create = false) {
  let directory = root;
  for (const part of relative.split('/').filter(Boolean)) {
    invariant(part !== '.' && part !== '..' && !part.includes('\\'), '搜索索引输出目录非法');
    directory = path.join(directory, part);
    if (!fs.existsSync(directory)) {
      if (!create) return;
      fs.mkdirSync(directory);
    }
    const stat = fs.lstatSync(directory);
    invariant(stat.isDirectory() && !stat.isSymbolicLink(), '搜索索引输出目录必须为普通目录');
  }
}

function checkFile(filename, expectedBytes) {
  if (!fs.existsSync(filename)) return;
  const stat = fs.lstatSync(filename);
  invariant(stat.isFile() && !stat.isSymbolicLink() && stat.size === expectedBytes.length
    && fs.readFileSync(filename).equals(expectedBytes), `搜索索引分片路径已被不同内容占用：${filename}`);
}

function preflight(root, plan) {
  checkDirectory(root, [plan.directory, 'search-index'].filter(Boolean).join('/'));
  plan.manifest.shards.forEach((shard, index) => {
    checkFile(path.join(root, plan.directory, shard.url), plan.buffers[index]);
  });
  if (plan.directory) checkFile(path.join(root, plan.directory, 'index.json'), Buffer.from(JSON.stringify(plan.manifest)));
}

function writeShards(root, plan) {
  checkDirectory(root, [plan.directory, 'search-index'].filter(Boolean).join('/'), true);
  plan.manifest.shards.forEach((shard, index) => {
    const target = path.join(root, plan.directory, shard.url);
    checkFile(target, plan.buffers[index]);
    if (!fs.existsSync(target)) atomicWrite(target, plan.buffers[index]);
  });
}

function shardIndex(buildDir) {
  const requested = path.resolve(buildDir), rootStat = fs.lstatSync(requested);
  invariant(rootStat.isDirectory() && !rootStat.isSymbolicLink(), '构建输出必须为普通目录');
  const root = fs.realpathSync(requested), indexFile = path.join(root, 'index.json');
  const indexStat = fs.lstatSync(indexFile);
  invariant(indexStat.isFile() && !indexStat.isSymbolicLink() && indexStat.size <= MAX_TOTAL_BYTES,
    '待分片索引必须为限额内的普通文件');
  const original = fs.readFileSync(indexFile);
  let records;
  try { records = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(original)); }
  catch { throw new Error('待分片索引必须为有效 UTF-8 JSON'); }
  // Preflight the complete canonical input before reading or writing aliases.
  const current = planShards(records, protocols.recordHeader(CONTRACT, CONTRACT), 'client');
  const compatibility = require('./prepare-legacy-outputs').prepareLegacyOutputs(root, records);
  const legacy = planShards(compatibility.records,
    protocols.historicalHeader(CONTRACT, 'sha-bound-ordered-shards', null), '');
  preflight(root, current); preflight(root, legacy);
  invariant(fs.readFileSync(indexFile).equals(original), '待分片索引在准备期间发生变化');
  compatibility.materialize();
  writeShards(root, current); writeShards(root, legacy);
  invariant(fs.readFileSync(indexFile).equals(original), '待分片索引在保存期间发生变化');
  // Both manifests refer only to complete, independently checked shard sets.
  atomicWrite(path.join(root, 'client', 'index.json'), Buffer.from(JSON.stringify(current.manifest)));
  atomicWrite(indexFile, Buffer.from(JSON.stringify(legacy.manifest)));
  return current.manifest;
}

if (require.main === module) {
  try {
    const manifest = shardIndex(process.argv[2] || 'public');
    process.stdout.write(`${JSON.stringify({ recordCount: manifest.recordCount,
      totalBytes: manifest.totalBytes, shardCount: manifest.shards.length })}\n`);
  } catch (error) {
    process.stderr.write(`shard-search-index: ${error.message}\n`); process.exitCode = 1;
  }
}
module.exports = { CONTRACT, MAX_SHARD_BYTES, MAX_SHARDS, MAX_TOTAL_BYTES, SHARD_URL_PATTERN, planShards, shardIndex };
