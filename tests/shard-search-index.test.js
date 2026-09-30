'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const crypto = require('node:crypto');
const { CONTRACT, MAX_SHARD_BYTES, SHARD_URL_PATTERN, shardIndex } = require('../scripts/shard-search-index');

function fixture(t, records) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'search-index-shards-'));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  const file = path.join(directory, 'index.json');
  const original = Buffer.from(JSON.stringify(records, null, 2), 'utf8');
  fs.writeFileSync(file, original);
  return { directory, file, original };
}

test('shards preserve complete records/order and declare actual bytes, SHA and counts', t => {
  const records = Array.from({ length: 5 }, (_, index) => ({ title: `论文 ${index}`, permalink: `/posts/${index}/`,
    summary: '完整中文摘要。'.repeat(18000), taxonomyConcepts: [{ id: 'task.asr', facet: 'task', label: '语音识别' }],
    extra: { empty: '', boolean: false, number: 0, value: null, array: ['unchanged'] } }));
  const { directory, file } = fixture(t, records);
  const manifest = shardIndex(directory);
  assert.deepEqual(JSON.parse(fs.readFileSync(file, 'utf8')), manifest);
  assert.equal(manifest.contract, CONTRACT);
  assert.equal(manifest.recordCount, records.length);
  assert.ok(manifest.shards.length > 1);
  let bytes = 0;
  const restored = [];
  const urls = new Set();
  for (const shard of manifest.shards) {
    assert.match(shard.url, SHARD_URL_PATTERN);
    assert.ok(!shard.url.includes('..') && !urls.has(shard.url));
    urls.add(shard.url);
    const buffer = fs.readFileSync(path.join(directory, shard.url));
    assert.equal(buffer.length, shard.bytes);
    assert.ok(buffer.length <= MAX_SHARD_BYTES);
    assert.equal(crypto.createHash('sha256').update(buffer).digest('hex'), shard.sha256);
    assert.ok(shard.url.endsWith(`-${shard.sha256.slice(0, 12)}.json`));
    const part = JSON.parse(buffer.toString('utf8'));
    assert.equal(part.length, shard.recordCount);
    restored.push(...part);
    bytes += buffer.length;
  }
  assert.equal(bytes, manifest.totalBytes);
  assert.deepEqual(restored, records);
});

test('size boundary includes brackets and record separator, without splitting records', t => {
  const overhead = Buffer.byteLength(JSON.stringify({ payload: '' })) + 2;
  const records = [{ payload: 'a'.repeat(MAX_SHARD_BYTES - overhead) }, { payload: 'next' }];
  const { directory } = fixture(t, records);
  const manifest = shardIndex(directory);
  assert.equal(manifest.shards.length, 2);
  assert.equal(manifest.shards[0].bytes, MAX_SHARD_BYTES);
  assert.equal(manifest.shards[0].recordCount, 1);
});

test('oversized single record fails before writes and preserves original index bytes', t => {
  const { directory, file, original } = fixture(t, [{ payload: 'a'.repeat(MAX_SHARD_BYTES) }]);
  assert.throws(() => shardIndex(directory), /单条记录超过/);
  assert.deepEqual(fs.readFileSync(file), original);
  assert.deepEqual(fs.readdirSync(directory), ['index.json']);
});

test('empty arrays, already processed manifests and non-record arrays fail explicitly', t => {
  for (const input of [[], { contract: CONTRACT, recordCount: 1, totalBytes: 2, shards: [] }, [null], [1], [[]]]) {
    const { directory, file, original } = fixture(t, input);
    assert.throws(() => shardIndex(directory));
    assert.deepEqual(fs.readFileSync(file), original);
  }
});

test('failed final manifest rename preserves the original index and removes its staging file', t => {
  const { directory, file, original } = fixture(t, [{ title: 'kept intact' }]);
  const rename = fs.renameSync;
  fs.renameSync = (source, destination) => {
    if (destination === file) throw new Error('simulated manifest commit failure');
    return rename(source, destination);
  };
  try { assert.throws(() => shardIndex(directory), /simulated manifest commit failure/); }
  finally { fs.renameSync = rename; }
  assert.deepEqual(fs.readFileSync(file), original);
  assert.deepEqual(fs.readdirSync(directory).sort(), ['index.json', 'search-index']);
  const manifest = shardIndex(directory);
  assert.equal(manifest.shards.length, 1, 'completed identical shards can be safely reused after failure');
});

test('a shard write failure keeps the original input and never removes unrelated files', t => {
  const { directory, file, original } = fixture(t, [{ title: 'kept intact' }]);
  const shards = path.join(directory, 'search-index');
  fs.mkdirSync(shards);
  fs.writeFileSync(path.join(shards, 'unrelated.json'), 'keep');
  const rename = fs.renameSync;
  fs.renameSync = () => { throw new Error('simulated shard write failure'); };
  try { assert.throws(() => shardIndex(directory), /simulated shard write failure/); }
  finally { fs.renameSync = rename; }
  assert.deepEqual(fs.readFileSync(file), original);
  assert.deepEqual(fs.readdirSync(shards), ['unrelated.json']);
  assert.equal(fs.readFileSync(path.join(shards, 'unrelated.json'), 'utf8'), 'keep');
});

test('content-addressed collisions fail without overwriting the occupied shard or input', t => {
  const { directory, file, original } = fixture(t, [{ title: 'original record' }]);
  const first = shardIndex(directory);
  const occupied = path.join(directory, first.shards[0].url);
  fs.writeFileSync(file, original);
  fs.writeFileSync(occupied, 'unrelated occupied bytes');
  assert.throws(() => shardIndex(directory), /不同内容占用/);
  assert.deepEqual(fs.readFileSync(file), original);
  assert.equal(fs.readFileSync(occupied, 'utf8'), 'unrelated occupied bytes');
});

test('an output directory symlink is rejected before writing outside the build root', t => {
  const { directory, file, original } = fixture(t, [{ title: 'original record' }]);
  const outside = fs.mkdtempSync(path.join(os.tmpdir(), 'search-index-outside-'));
  t.after(() => fs.rmSync(outside, { recursive: true, force: true }));
  fs.symlinkSync(outside, path.join(directory, 'search-index'), 'dir');
  assert.throws(() => shardIndex(directory), /普通目录/);
  assert.deepEqual(fs.readFileSync(file), original);
  assert.deepEqual(fs.readdirSync(outside), []);
});
