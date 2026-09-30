'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { createHash, webcrypto } = require('node:crypto');
const loader = require('../assets/js/search-index-loader.js');
const origin = 'https://example.test';
const basePath = '/blog/';
const indexURL = origin + basePath + 'index.json';

function response(bytes, extras = {}) {
  const buffer = Buffer.isBuffer(bytes) ? bytes : Buffer.from(JSON.stringify(bytes));
  return { ok: true, status: 200, arrayBuffer: async () => buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength), ...extras };
}
function bundle(parts) {
  const files = new Map();
  const shards = parts.map((part, index) => {
    const bytes = Buffer.from(JSON.stringify(part));
    const sha256 = createHash('sha256').update(bytes).digest('hex');
    const url = `search-index/part-${String(index + 1).padStart(4, '0')}-${sha256.slice(0, 12)}.json`;
    files.set(origin + basePath + url, bytes);
    return { url, bytes: bytes.length, sha256, recordCount: part.length };
  });
  return { files, manifest: { contract: loader.contract, recordCount: parts.reduce((sum, part) => sum + part.length, 0),
    totalBytes: shards.reduce((sum, shard) => sum + shard.bytes, 0), shards } };
}
function client(data, customFetch) {
  const requests = [];
  const fetch = async (url, options) => {
    requests.push(url);
    assert.equal(options.redirect, 'error');
    assert.equal(options.credentials, 'same-origin');
    if (customFetch) return customFetch(url, options);
    if (url === indexURL) return response(data.manifest);
    assert.ok(data.files.has(url), 'only listed files are fetched');
    return response(data.files.get(url));
  };
  return { requests, options: { origin, basePath, fetch, crypto: webcrypto } };
}

test('legacy record arrays remain compatible and do not require SHA infrastructure', async () => {
  const items = [{ title: '中文', permalink: '/blog/posts/a/' }];
  const result = await loader.load(indexURL, { origin, basePath, crypto: null, fetch: async () => response(items) });
  assert.deepEqual(result, items);
  assert.deepEqual(await loader.load(indexURL, { origin, basePath, fetch: async () => ({ ok: true, json: async () => items }) }), items);
  assert.deepEqual(await loader.load(indexURL, { origin, basePath, crypto: null, fetch: async () => response([]) }), []);
  await assert.rejects(loader.load(indexURL, { origin, basePath, fetch: async () => response([null]) }), /对象数组/);
});

test('manifest reconstructs the complete ordered record set with original UTF-8 bytes', async () => {
  const parts = [[{ title: '语音识别', id: 1 }, { title: '公式 α', id: 2 }], [{ id: 3 }]];
  const data = bundle(parts);
  const mock = client(data);
  assert.deepEqual(await loader.load(new URL(indexURL), mock.options), parts.flat());
  assert.equal(mock.requests.length, 3);
  assert.deepEqual(await loader.load('index.json', mock.options), parts.flat());
});

test('shard SHA, byte counts, record counts and JSON record shapes are all fail closed', async () => {
  const corrupted = bundle([[{ id: 1 }]]);
  const file = origin + basePath + corrupted.manifest.shards[0].url;
  corrupted.files.set(file, Buffer.from('[{"id":2}]'));
  await assert.rejects(loader.load(indexURL, client(corrupted).options), /SHA-256/);
  const wrongBytes = bundle([[{ id: 1 }]]);
  wrongBytes.manifest.shards[0].bytes += 1; wrongBytes.manifest.totalBytes += 1;
  await assert.rejects(loader.load(indexURL, client(wrongBytes).options), /字节数/);
  const wrongCount = bundle([[{ id: 1 }]]);
  wrongCount.manifest.shards[0].recordCount += 1; wrongCount.manifest.recordCount += 1;
  await assert.rejects(loader.load(indexURL, client(wrongCount).options), /记录数/);
  const wrongShape = bundle([[42]]);
  await assert.rejects(loader.load(indexURL, client(wrongShape).options), /对象数组/);
});

test('index and shard URLs reject foreign origins, escaped base paths, credentials, query strings and redirects', async () => {
  for (const address of [null, '', 'https://other.test/blog/index.json', origin + '/outside/index.json',
    'https://user:pass@example.test/blog/index.json', indexURL + '?v=1', indexURL + '#index', origin + '/blog/../index.json']) {
    let called = false;
    await assert.rejects(loader.load(address, { origin, basePath, fetch: async () => { called = true; return response([]); } }), /校验失败/);
    assert.equal(called, false);
  }
  for (const url of ['https://other.test/blog/search-index/part-0001-aaaaaaaaaaaa.json', '../search-index/part-0001-aaaaaaaaaaaa.json',
    'search-index/part-0001-aaaaaaaaaaaa.json?q=x', 'search-index/part-0001-aaaaaaaaaaaa.json#x']) {
    const data = bundle([[{ id: 1 }]]); data.manifest.shards[0].url = url;
    const mock = client(data);
    await assert.rejects(loader.load(indexURL, mock.options), /分片描述/);
    assert.equal(mock.requests.length, 1);
  }
  await assert.rejects(loader.load(indexURL, { origin, basePath, fetch: async () => response([], { url: 'https://other.test/blog/index.json' }) }), /同源/);
});

test('invalid manifests reject before dispatch: totals, filenames, duplicates, shard and aggregate limits', async () => {
  const changes = [
    (manifest) => { manifest.contract = 'unsupported'; },
    (manifest) => { manifest.recordCount += 1; },
    (manifest) => { manifest.totalBytes += 1; },
    (manifest) => { manifest.shards[0].sha256 = 'a'.repeat(64); },
    (manifest) => { manifest.shards[0].bytes = loader.limits.maxShardBytes + 1; },
    (manifest) => { manifest.shards.push(manifest.shards[0]); manifest.totalBytes *= 2; manifest.recordCount *= 2; },
    (manifest) => { manifest.shards = Array.from({ length: 129 }, () => manifest.shards[0]); },
    (manifest) => { manifest.totalBytes = loader.limits.maxTotalBytes + 1; },
    (manifest) => { manifest.shards = []; manifest.totalBytes = 0; manifest.recordCount = 0; },
  ];
  for (const change of changes) {
    const data = bundle([[{ id: 1 }]]); change(data.manifest);
    const mock = client(data);
    await assert.rejects(loader.load(indexURL, mock.options), /校验失败/);
    assert.equal(mock.requests.length, 1);
  }
});

test('missing crypto and HTTP failures never return a partial corpus', async () => {
  const data = bundle([[{ id: 1 }], [{ id: 2 }]]);
  const missing = client(data); missing.options.crypto = null;
  await assert.rejects(loader.load(indexURL, missing.options), /crypto\.subtle.*HTTPS/);
  assert.equal(missing.requests.length, 1);
  const failed = client(data, async (url) => url === indexURL ? response(data.manifest) : ({ ok: false, status: 404 }));
  await assert.rejects(loader.load(indexURL, failed.options), /HTTP.*404/);
});

test('shard fetching has at most four concurrent reads and retains manifest order despite completion order', async () => {
  const parts = Array.from({ length: 12 }, (_, index) => [{ id: index }]);
  const data = bundle(parts);
  let active = 0;
  let peak = 0;
  const mock = client(data, async (url) => {
    if (url === indexURL) return response(data.manifest);
    active += 1; peak = Math.max(peak, active);
    const bytes = data.files.get(url);
    const sequence = Number(url.match(/part-(\d+)/)[1]);
    return { ok: true, arrayBuffer: async () => {
      await new Promise((resolve) => setTimeout(resolve, sequence % 3 === 0 ? 1 : 8));
      active -= 1;
      return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
    } };
  });
  assert.deepEqual(await loader.load(indexURL, mock.options), parts.flat());
  assert.equal(peak, 4);
  assert.equal(active, 0);
});

test('streamed bytes are capped before excessive payloads are retained and declared oversize is rejected before reading', async () => {
  const data = bundle([[{ id: 1 }]]);
  let cancelled = false;
  let released = false;
  const mock = client(data, async (url) => url === indexURL ? response(data.manifest) : ({ ok: true,
    body: { getReader: () => ({ read: async () => ({ done: false, value: new Uint8Array(loader.limits.maxShardBytes + 1) }),
      cancel: async () => { cancelled = true; }, releaseLock: () => { released = true; } }) } }));
  await assert.rejects(loader.load(indexURL, mock.options), /允许字节数/);
  assert.equal(cancelled, true); assert.equal(released, true);
  let read = false;
  await assert.rejects(loader.load(indexURL, { origin, basePath, fetch: async () => ({ ok: true,
    headers: { get: () => String(loader.limits.maxTotalBytes + 1) },
    arrayBuffer: async () => { read = true; return new ArrayBuffer(0); } }) }), /允许字节数/);
  assert.equal(read, false);
});
