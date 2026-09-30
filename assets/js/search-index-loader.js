(function (root, factory) {
  'use strict';
  var api = factory(root);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ResearchSearchIndex = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function (root) {
  'use strict';
  var CONTRACT = 'paper-search-index-manifest-v1';
  var MAX_SHARDS = 128;
  var MAX_SHARD_BYTES = 1024 * 1024;
  var MAX_TOTAL_BYTES = 64 * 1024 * 1024;
  var CONCURRENCY = 4;
  var defaultWorkerUrl = root.document && root.document.currentScript
    ? root.document.currentScript.getAttribute('data-index-worker') : null;

  function shardParser(url, origin, basePath) {
    if (!url || typeof root.Worker !== 'function') return null;
    var worker;
    try { worker = new root.Worker(safeUrl(url, origin, basePath).href); } catch (_error) { return null; }
    var pending = new Map(), sequence = 0, stopped = false;
    function close() {
      if (stopped) return; stopped = true; worker.terminate();
      pending.forEach(function (request) { root.clearTimeout(request.timer); request.reject(new Error('后台索引解析不可用')); });
      pending.clear();
    }
    worker.onerror = close; worker.onmessageerror = close;
    worker.onmessage = function (event) {
      var value = event.data || {}, request = pending.get(value.id);
      if (!request) return;
      root.clearTimeout(request.timer); pending.delete(value.id);
      if (value.error) request.reject(failure(value.error)); else request.resolve(value.records);
    };
    return { close: close, parse: function (bytes, shard) {
      if (stopped) return Promise.reject(new Error('后台索引解析不可用'));
      return new Promise(function (resolve, reject) {
        var id = ++sequence, copy = bytes.slice().buffer;
        var timer = root.setTimeout(close, 15000);
        pending.set(id, { resolve: resolve, reject: reject, timer: timer });
        try { worker.postMessage({ id: id, bytes: copy, length: shard.bytes, sha256: shard.sha256, recordCount: shard.recordCount }, [copy]); }
        catch (error) { root.clearTimeout(timer); pending.delete(id); reject(error); }
      });
    } };
  }

  function failure(message) { return new Error('论文索引校验失败：' + message); }
  function integer(value, minimum, maximum) {
    return Number.isSafeInteger(value) && value >= minimum && value <= maximum;
  }
  function safeUrl(value, origin, basePath, relativeTo) {
    var url;
    var address = typeof value === 'string' ? value : value && typeof value.href === 'string' ? value.href : '';
    if (!address.trim()) throw failure('地址无效');
    try { url = new URL(address, relativeTo || origin); } catch (_error) { throw failure('地址无效'); }
    if (!/^https?:$/.test(url.protocol) || url.origin !== origin || url.username || url.password
      || !url.pathname.startsWith(basePath) || url.search || url.hash) throw failure('地址必须位于同源站点目录内，且不能包含凭据或额外参数');
    return url;
  }
  function records(value) {
    if (!Array.isArray(value) || value.some(function (record) {
      return !record || typeof record !== 'object' || Array.isArray(record);
    })) throw failure('记录必须是对象数组');
    return value;
  }

  async function responseBytes(response, limit) {
    var headers = response.headers;
    var declared = headers && typeof headers.get === 'function' ? headers.get('content-length') : null;
    if (declared !== null && declared !== undefined && /^\d+$/.test(String(declared)) && Number(declared) > limit) {
      throw failure('响应超过允许字节数');
    }
    if (response.body && typeof response.body.getReader === 'function') {
      var reader = response.body.getReader();
      var chunks = [];
      var size = 0;
      try {
        while (true) {
          var item = await reader.read();
          if (item.done) break;
          var chunk = new Uint8Array(item.value);
          size += chunk.byteLength;
          if (size > limit) { await reader.cancel(); throw failure('响应超过允许字节数'); }
          chunks.push(chunk);
        }
      } finally { if (typeof reader.releaseLock === 'function') reader.releaseLock(); }
      var combined = new Uint8Array(size);
      var position = 0;
      chunks.forEach(function (chunk) { combined.set(chunk, position); position += chunk.byteLength; });
      return combined;
    }
    var bytes;
    if (typeof response.arrayBuffer === 'function') bytes = new Uint8Array(await response.arrayBuffer());
    else if (typeof response.text === 'function') bytes = new TextEncoder().encode(await response.text());
    else throw failure('响应无法按原始字节读取');
    if (bytes.byteLength > limit) throw failure('响应超过允许字节数');
    return bytes;
  }

  function parse(bytes) {
    try { return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes)); }
    catch (_error) { throw failure('响应不是有效 UTF-8 JSON'); }
  }

  async function load(indexURL, options) {
    var settings = options || {};
    var cache = Object.prototype.hasOwnProperty.call(settings, 'cache') ? settings.cache
      : root.ResearchIndexCache ? root.ResearchIndexCache.create() : null;
    function progress(value) { if (typeof settings.onProgress === 'function') { try { settings.onProgress(value); } catch (_error) { /* UI callbacks cannot alter index integrity. */ } } }
    progress({ phase: 'manifest', completed: 0, total: 0, bytesCompleted: 0, totalBytes: 0 });
    var origin = settings.origin;
    var basePath = settings.basePath;
    var originUrl;
    try { originUrl = new URL(origin); } catch (_error) { throw failure('缺少可信站点来源'); }
    if (originUrl.origin !== origin || !/^https?:$/.test(originUrl.protocol)
      || typeof basePath !== 'string' || !basePath.startsWith('/') || !basePath.endsWith('/')
      || basePath.includes('\\') || /(?:^|\/)\.{1,2}(?:\/|$)/.test(basePath)) throw failure('站点来源或目录无效');
    var index = safeUrl(indexURL, origin, basePath, origin + basePath);
    var fetcher = settings.fetch || root.fetch;
    if (typeof fetcher !== 'function') throw failure('无法读取静态索引');
    async function request(url) {
      var response = await fetcher(url.href, { credentials: 'same-origin', redirect: 'error' });
      if (!response || !response.ok) throw failure('HTTP 请求失败' + (response ? ' (' + response.status + ')' : ''));
      if (response.url && safeUrl(response.url, origin, basePath).href !== url.href) throw failure('响应地址与请求不一致');
      return response;
    }
    var initialResponse = await request(index);
    var payload;
    if (!initialResponse.body && typeof initialResponse.arrayBuffer !== 'function'
      && typeof initialResponse.text !== 'function' && typeof initialResponse.json === 'function') {
      // Compatibility with old array-only clients and fixtures. Real Fetch
      // responses always provide raw bytes; shards never use this fallback.
      payload = await initialResponse.json();
      if (new TextEncoder().encode(JSON.stringify(payload)).byteLength > MAX_TOTAL_BYTES) throw failure('索引超过总字节上限');
    } else payload = parse(await responseBytes(initialResponse, MAX_TOTAL_BYTES));
    if (Array.isArray(payload)) { var legacy = records(payload); progress({ phase: 'ready', completed: 1, total: 1, recordCount: legacy.length }); return legacy; }
    if (!payload || typeof payload !== 'object' || payload.contract !== CONTRACT
      || !integer(payload.recordCount, 1, Number.MAX_SAFE_INTEGER)
      || !integer(payload.totalBytes, 1, MAX_TOTAL_BYTES) || !Array.isArray(payload.shards)
      || !integer(payload.shards.length, 1, MAX_SHARDS)) throw failure('分片清单格式或限额无效');
    var urls = new Set();
    var byteTotal = 0;
    var recordTotal = 0;
    var shards = payload.shards.map(function (shard) {
      if (!shard || typeof shard !== 'object' || Array.isArray(shard)
        || typeof shard.url !== 'string' || !/^search-index\/part-[0-9]{4}-[0-9a-f]{12}\.json$/.test(shard.url)
        || !integer(shard.bytes, 1, MAX_SHARD_BYTES) || !integer(shard.recordCount, 1, Number.MAX_SAFE_INTEGER)
        || typeof shard.sha256 !== 'string' || !/^[0-9a-f]{64}$/.test(shard.sha256)
        || !shard.url.endsWith('-' + shard.sha256.slice(0, 12) + '.json') || urls.has(shard.url)) throw failure('分片描述无效或重复');
      urls.add(shard.url);
      byteTotal += shard.bytes;
      recordTotal += shard.recordCount;
      if (!integer(byteTotal, 1, MAX_TOTAL_BYTES) || !Number.isSafeInteger(recordTotal)) throw failure('分片总量超过限额');
      return { url: safeUrl(shard.url, origin, basePath, index), bytes: shard.bytes, sha256: shard.sha256, recordCount: shard.recordCount };
    });
    if (byteTotal !== payload.totalBytes || recordTotal !== payload.recordCount) throw failure('清单总字节或记录数不闭合');
    var cryptoApi = Object.prototype.hasOwnProperty.call(settings, 'crypto') ? settings.crypto : root.crypto;
    if (!cryptoApi || !cryptoApi.subtle || typeof cryptoApi.subtle.digest !== 'function') {
      throw failure('当前浏览器无法校验 SHA-256；请使用提供 crypto.subtle 的 HTTPS 或 localhost 环境');
    }
    var results = new Array(shards.length);
    var parser = shardParser(settings.workerURL || defaultWorkerUrl, origin, basePath);
    var next = 0;
    var stopped = false;
    var completed = 0, bytesCompleted = 0;
    progress({ phase: 'shards', completed: 0, total: shards.length, bytesCompleted: 0, totalBytes: byteTotal });
    async function validatePart(bytes, shard) {
      if (bytes.byteLength !== shard.bytes) throw failure('分片字节数与清单不符');
      if (parser) {
        var activeParser = parser;
        try {
          var parsed = records(await activeParser.parse(bytes, shard));
          if (parsed.length !== shard.recordCount) throw failure('分片记录数与清单不符');
          return parsed;
        } catch (_error) {
          // Crashes and restrictions fall back to the same full SHA/JSON gate.
          activeParser.close(); parser = null;
        }
      }
      var digest = new Uint8Array(await cryptoApi.subtle.digest('SHA-256', bytes));
      var hash = Array.from(digest).map(function (value) { return value.toString(16).padStart(2, '0'); }).join('');
      if (hash !== shard.sha256) throw failure('分片 SHA-256 与清单不符');
      var part = records(parse(bytes));
      if (part.length !== shard.recordCount) throw failure('分片记录数与清单不符');
      return part;
    }
    async function worker() {
      while (!stopped && next < shards.length) {
        var position = next++;
        var shard = shards[position];
        try {
          var cacheKey = shard.url.href + '|' + shard.sha256;
          var bytes = null, part = null, fromCache = false;
          if (cache && typeof cache.get === 'function') {
            try {
              var cached = await cache.get(cacheKey);
              if (cached) { bytes = new Uint8Array(cached); part = await validatePart(bytes, shard); fromCache = true; }
            } catch (_error) { if (typeof cache.delete === 'function') { try { await cache.delete(cacheKey); } catch (_ignored) {} } }
          }
          if (!part) {
            var response = await request(shard.url);
            bytes = await responseBytes(response, MAX_SHARD_BYTES);
            part = await validatePart(bytes, shard);
            if (cache && typeof cache.put === 'function') { try { await cache.put(cacheKey, bytes); } catch (_error) { /* Cache quotas never weaken validation. */ } }
          }
          results[position] = part;
          completed++; bytesCompleted += shard.bytes;
          progress({ phase: 'shards', completed: completed, total: shards.length, bytesCompleted: bytesCompleted, totalBytes: byteTotal, fromCache: fromCache });
        } catch (error) { stopped = true; throw error; }
      }
    }
    try {
      await Promise.all(Array.from({ length: Math.min(CONCURRENCY, shards.length) }, worker));
      var all = results.flat();
      if (all.length !== payload.recordCount) throw failure('载入记录数与清单不符');
      progress({ phase: 'ready', completed: shards.length, total: shards.length, bytesCompleted: byteTotal, totalBytes: byteTotal, recordCount: all.length });
      return all;
    } finally { if (parser) parser.close(); }
  }
  return { load: load, contract: CONTRACT, limits: Object.freeze({ maxShards: MAX_SHARDS,
    maxShardBytes: MAX_SHARD_BYTES, maxTotalBytes: MAX_TOTAL_BYTES, concurrency: CONCURRENCY }) };
}));
