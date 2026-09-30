'use strict';

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const CONTRACT = 'paper-search-index-manifest-v1';
const MAX_SHARD_BYTES = 1024 * 1024;
const MAX_SHARDS = 128;
const MAX_TOTAL_BYTES = 64 * 1024 * 1024;
const SHARD_URL_PATTERN = /^search-index\/part-[0-9]{4,}-[a-f0-9]{12}\.json$/;

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function atomicWrite(file, bytes) {
  const temporary = path.join(path.dirname(file), `.${path.basename(file)}.tmp-${crypto.randomUUID()}`);
  try {
    fs.writeFileSync(temporary, bytes, { flag: 'wx', mode: 0o644 });
    fs.renameSync(temporary, file);
  } finally {
    if (fs.existsSync(temporary)) fs.unlinkSync(temporary);
  }
}

function shardIndex(buildDir) {
  const root = path.resolve(buildDir);
  const indexFile = path.join(root, 'index.json');
  const original = fs.readFileSync(indexFile);
  const records = JSON.parse(original.toString('utf8'));
  invariant(Array.isArray(records) && records.length > 0,
    '待分片搜索索引必须为非空数组，不能重复处理已有清单');

  // Preflight every record and budget before writing any output. Each array's
  // brackets and comma separators count toward its actual UTF-8 byte limit.
  const buffers = [];
  let current = [];
  let currentBytes = 2;
  function finishShard() {
    if (!current.length) return;
    buffers.push(Buffer.from(`[${current.join(',')}]`, 'utf8'));
    current = [];
    currentBytes = 2;
  }
  records.forEach((record, index) => {
    invariant(record && typeof record === 'object' && !Array.isArray(record), `索引 ${index} 必须为记录对象`);
    const serialized = JSON.stringify(record);
    const bytes = Buffer.byteLength(serialized, 'utf8');
    invariant(bytes + 2 <= MAX_SHARD_BYTES, `索引 ${index} 单条记录超过分片 ${MAX_SHARD_BYTES} 字节限制`);
    if (currentBytes + bytes + (current.length ? 1 : 0) > MAX_SHARD_BYTES) finishShard();
    currentBytes += bytes + (current.length ? 1 : 0);
    current.push(serialized);
  });
  finishShard();
  const totalBytes = buffers.reduce((total, buffer) => total + buffer.length, 0);
  invariant(buffers.length <= MAX_SHARDS, `搜索索引分片超过 ${MAX_SHARDS} 个`);
  invariant(totalBytes <= MAX_TOTAL_BYTES, `搜索索引总字节超过 ${MAX_TOTAL_BYTES}`);

  const shards = buffers.map((buffer, index) => {
    const sha256 = crypto.createHash('sha256').update(buffer).digest('hex');
    const url = `search-index/part-${String(index + 1).padStart(4, '0')}-${sha256.slice(0, 12)}.json`;
    invariant(SHARD_URL_PATTERN.test(url) && !url.includes('..'), '搜索索引分片路径非法');
    return { url, bytes: buffer.length, sha256, recordCount: JSON.parse(buffer.toString('utf8')).length };
  });
  invariant(new Set(shards.map(shard => shard.url)).size === shards.length, '搜索索引分片路径必须唯一');
  const manifest = { contract: CONTRACT, recordCount: records.length, totalBytes, shards };
  const shardDirectory = path.join(root, 'search-index');
  if (fs.existsSync(shardDirectory)) {
    const stat = fs.lstatSync(shardDirectory);
    invariant(stat.isDirectory() && !stat.isSymbolicLink(), '搜索索引输出目录必须为普通目录');
  } else fs.mkdirSync(shardDirectory);

  // Content-addressed outputs are immutable. An existing identical shard can
  // be reused; a collision or unexpected file must leave the input untouched.
  shards.forEach((shard, index) => {
    const target = path.join(root, shard.url);
    if (fs.existsSync(target)) {
      const stat = fs.lstatSync(target);
      invariant(stat.isFile() && !stat.isSymbolicLink() && fs.readFileSync(target).equals(buffers[index]),
        `搜索索引分片路径已被不同内容占用：${shard.url}`);
    } else atomicWrite(target, buffers[index]);
  });
  // Readers see the original array until every referenced shard is present.
  // Never remove unrelated output files; Hugo cleans its next build itself.
  atomicWrite(indexFile, Buffer.from(JSON.stringify(manifest), 'utf8'));
  return manifest;
}

if (require.main === module) {
  try {
    const manifest = shardIndex(process.argv[2] || 'public');
    process.stdout.write(`${JSON.stringify({ recordCount: manifest.recordCount,
      totalBytes: manifest.totalBytes, shardCount: manifest.shards.length })}\n`);
  } catch (error) {
    process.stderr.write(`shard-search-index: ${error.message}\n`);
    process.exitCode = 1;
  }
}

module.exports = { CONTRACT, MAX_SHARD_BYTES, MAX_SHARDS, MAX_TOTAL_BYTES, SHARD_URL_PATTERN, shardIndex };
