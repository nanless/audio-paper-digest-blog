'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { CONTRACT, stableHash, mergeSupplements } = require('../scripts/merge-taxonomy-supplements');
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
  assert.throws(() => mergeSupplements([{ contract: 'future', records: {} }]), /契约/);
  assert.throws(() => mergeSupplements([]), /至少一个/);
});
