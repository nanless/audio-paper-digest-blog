'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { CONTRACT, LEGACY_CONTRACT, stableHash, mergeSupplements } = require('../scripts/merge-taxonomy-supplements');
function record(overrides = {}) {
  const body = { paperId: 'arxiv:2609.12345', pageSha256: 'a'.repeat(64), bodySha256: 'b'.repeat(64),
    registrySha256: 'c'.repeat(64), ...overrides };
  return { ...body, proofSha256: stableHash(body) };
}
const document = records => ({ contract: CONTRACT, records });
test('proof union preserves unique pages and collapses only byte-identical duplicate records', () => {
  const first = document({ 'content/posts/first.md': record() });
  const second = document({ 'content/posts/second.md': record(), 'content/posts/first.md': record() });
  const merged = mergeSupplements([first, second]);
  assert.deepEqual(Object.keys(merged.records), ['content/posts/first.md', 'content/posts/second.md']);
  merged.records['content/posts/first.md'].paperId = 'arxiv:9999.12345';
  assert.equal(first.records['content/posts/first.md'].paperId, 'arxiv:2609.12345', 'input proofs never mutate');
});
test('same page with a different independently hashed proof fails closed', () => {
  assert.throws(() => mergeSupplements([document({ 'content/posts/first.md': record() }),
    document({ 'content/posts/first.md': record({ registrySha256: 'd'.repeat(64) }) })]), /冲突证明/);
});
test('tampered proof bytes, unsupported contracts and escaped paths are rejected', () => {
  const tampered = record(); tampered.paperId = 'arxiv:2609.99999';
  assert.throws(() => mergeSupplements([document({ 'content/posts/first.md': tampered })]), /SHA 不匹配/);
  for (const key of ['content/posts/../first.md', 'content/posts/sub/first.md', '/content/posts/first.md', 'content/posts/a\\b.md']) {
    assert.throws(() => mergeSupplements([document({ [key]: record() })]), /不安全页面路径/);
  }
  assert.throws(() => mergeSupplements([{ contract: 'future', records: {} }]), /格式不受支持/);
  assert.throws(() => mergeSupplements([]), /至少一个/);
});

test('known old and new collections preserve original records and reject bad new proofs before merging', () => {
  const key = 'content/posts/first.md';
  const original = { contract: LEGACY_CONTRACT, records: { [key]: record() } };
  const current = document({ [key]: structuredClone(original.records[key]) });
  const before = JSON.stringify([original, current]);
  const merged = mergeSupplements([original, current]);
  assert.equal(merged.contract, CONTRACT);
  assert.deepEqual(merged.records[key], original.records[key]);
  assert.equal(JSON.stringify([original, current]), before);
  const conflict = document({ [key]: record({ registrySha256: 'd'.repeat(64) }) });
  assert.throws(() => mergeSupplements([original, conflict]), /冲突证明/);
  const badNew = structuredClone(current); badNew.records[key].paperId = 'arxiv:2609.99999';
  assert.throws(() => mergeSupplements([original, badNew]), /SHA 不匹配/);
});

test('merging cannot relabel a new source record inside an old collection as valid current output', () => {
  const key = 'content/posts/first.md';
  const currentRecord = record({ evidenceType: 'source-only-tags',
    classificationContract: 'historical-source-tag-classification-v2' });
  const oldOuter = { contract: LEGACY_CONTRACT, records: { [key]: currentRecord } };
  const newOuter = document({ [key]: structuredClone(currentRecord) });
  const before = JSON.stringify([oldOuter, newOuter]);
  assert.throws(() => mergeSupplements([oldOuter]), /旧版历史标签补充集合不能包含新版来源分类记录/);
  assert.throws(() => mergeSupplements([oldOuter, newOuter]), /旧版历史标签补充集合不能包含新版来源分类记录/);
  const tampered = structuredClone(oldOuter); tampered.records[key].paperId = 'arxiv:2609.99999';
  assert.throws(() => mergeSupplements([tampered]), /SHA 不匹配/, 'original proof is checked before format');
  assert.equal(JSON.stringify([oldOuter, newOuter]), before);
  const oldRecord = record({ evidenceType: 'source-only-taxonomy',
    classificationContract: 'historical-source-taxonomy-classification-v1' });
  assert.deepEqual(mergeSupplements([document({ [key]: oldRecord })]).records[key], oldRecord);
});
