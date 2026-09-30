'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { createHash, webcrypto } = require('node:crypto');
const workerCode = fs.readFileSync(path.join(__dirname, '../assets/js/search-index-worker.js'), 'utf8');
const loaderCode = fs.readFileSync(path.join(__dirname, '../assets/js/search-index-loader.js'), 'utf8');

async function parse(bytes, count, sha) {
  const self = { postMessage(value) { self.result = value; } };
  vm.runInNewContext(workerCode, { self, ArrayBuffer, TextDecoder, crypto: webcrypto });
  const buffer = Uint8Array.from(bytes).buffer;
  await self.onmessage({ data: { id: 1, bytes: buffer, length: bytes.length, recordCount: count,
    sha256: sha || createHash('sha256').update(bytes).digest('hex') } });
  return self.result;
}

test('background parsing rejects changed bytes, invalid UTF-8, non-records and mismatched counts', async () => {
  const bytes = Buffer.from('[{"title":"原始论文"}]');
  assert.equal((await parse(bytes, 1)).records[0].title, '原始论文');
  assert.match((await parse(bytes, 1, '0'.repeat(64))).error, /SHA-256/);
  assert.ok((await parse(Buffer.from([0xff]), 1)).error);
  assert.ok((await parse(Buffer.from('[null]'), 1)).error);
  assert.ok((await parse(bytes, 2)).error);
});

test('worker crash terminates resources and falls back to full byte validation', async () => {
  const bytes = Buffer.from('[{"title":"论文"}]');
  const sha = createHash('sha256').update(bytes).digest('hex');
  const origin = 'https://example.test', url = origin + '/blog/index.json';
  const manifest = { contract: 'paper-search-index-manifest-v1', recordCount: 1, totalBytes: bytes.length,
    shards: [{ url: 'search-index/part-0001-' + sha.slice(0, 12) + '.json', sha256: sha, bytes: bytes.length, recordCount: 1 }] };
  let terminated = 0;
  class CrashedWorker {
    postMessage() { queueMicrotask(() => this.onerror()); }
    terminate() { terminated++; }
  }
  const context = { Worker: CrashedWorker, URL, TextEncoder, TextDecoder, Uint8Array, setTimeout, clearTimeout, crypto: webcrypto };
  vm.runInNewContext(loaderCode, context);
  const load = changed => context.ResearchSearchIndex.load(url, { origin, basePath: '/blog/', workerURL: origin + '/blog/js/worker.js',
    fetch: async requested => ({ ok: true, arrayBuffer: async () => {
      const value = Buffer.from(requested === url ? JSON.stringify(manifest) : changed ? '[{"title":"更改"}]' : bytes);
      return value.buffer.slice(value.byteOffset, value.byteOffset + value.length);
    } }) });
  assert.equal((await load(false))[0].title, '论文');
  await assert.rejects(load(true), /校验失败/);
  assert.equal(terminated, 2);
});
