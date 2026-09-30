'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const CONTRACT = 'historical-direct-taxonomy-supplement-v1';
const shaPattern = /^[a-f0-9]{64}$/;
function canonical(value) {
  return Array.isArray(value) ? value.map(canonical) : value && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
}
function stableHash(value) { return crypto.createHash('sha256').update(JSON.stringify(canonical(value))).digest('hex'); }
function validateRecord(key, record) {
  if (typeof key !== 'string' || !key.startsWith('content/posts/') || key.split('/').length !== 3
    || path.posix.normalize(key) !== key || /[\\\u0000-\u001f\u007f]/.test(key) || !key.endsWith('.md')) {
    throw new Error('历史补充分类包含不安全页面路径');
  }
  if (!record || typeof record !== 'object' || Array.isArray(record)
    || !/^(?:arxiv|conference):[^\s\u0000-\u001f\u007f]+$/.test(record.paperId || '')
    || ['pageSha256', 'bodySha256', 'registrySha256', 'proofSha256'].some(field => !shaPattern.test(record[field] || ''))) {
    throw new Error('历史补充分类记录缺少完整身份或字节证明');
  }
  const { proofSha256, ...body } = record;
  if (stableHash(body) !== proofSha256) throw new Error('历史补充分类证明 SHA 不匹配');
}
function mergeSupplements(documents) {
  if (!Array.isArray(documents) || !documents.length) throw new Error('必须提供至少一个历史证明集合');
  const records = Object.create(null);
  for (const document of documents) {
    if (!document || document.contract !== CONTRACT || !document.records
      || typeof document.records !== 'object' || Array.isArray(document.records)) throw new Error('历史证明集合契约不受支持');
    for (const [key, record] of Object.entries(document.records)) {
      validateRecord(key, record);
      if (Object.hasOwn(records, key) && stableHash(records[key]) !== stableHash(record)) {
        throw new Error('同一历史页面有冲突证明：' + key);
      }
      records[key] = JSON.parse(JSON.stringify(record));
    }
  }
  return { contract: CONTRACT, records: Object.fromEntries(Object.keys(records).sort().map(key => [key, records[key]])) };
}
function mergeSupplementFiles(files) {
  return mergeSupplements(files.map(file => JSON.parse(fs.readFileSync(file, 'utf8'))));
}
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args[0] !== '--output' || args.length < 3) throw new Error('用法：merge-taxonomy-supplements.js --output FILE INPUT...');
  const output = path.resolve(args[1]);
  const merged = mergeSupplementFiles(args.slice(2));
  const temporary = output + '.tmp-' + crypto.randomUUID();
  fs.mkdirSync(path.dirname(output), { recursive: true });
  try {
    fs.writeFileSync(temporary, JSON.stringify(canonical(merged)) + '\n', { flag: 'wx', mode: 0o600 });
    fs.renameSync(temporary, output);
  } finally { fs.rmSync(temporary, { force: true }); }
  process.stdout.write(JSON.stringify({ records: Object.keys(merged.records).length,
    uniquePapers: new Set(Object.values(merged.records).map(record => record.paperId)).size }) + '\n');
}
module.exports = { CONTRACT, canonical, stableHash, mergeSupplements, mergeSupplementFiles };
