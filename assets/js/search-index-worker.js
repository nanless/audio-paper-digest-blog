'use strict';
// Validate exact shard bytes before returning records to the page.
self.onmessage = async function (event) {
  var request = event.data || {};
  try {
    if (!Number.isSafeInteger(request.id) || !(request.bytes instanceof ArrayBuffer)
      || !Number.isSafeInteger(request.length) || request.length < 1 || request.length > 1024 * 1024
      || request.bytes.byteLength !== request.length || !/^[a-f0-9]{64}$/.test(request.sha256)
      || !Number.isSafeInteger(request.recordCount) || request.recordCount < 1) throw new Error('分片请求无效');
    var hash = new Uint8Array(await crypto.subtle.digest('SHA-256', request.bytes));
    var actual = Array.from(hash).map(function (value) { return value.toString(16).padStart(2, '0'); }).join('');
    if (actual !== request.sha256) throw new Error('分片 SHA-256 与清单不符');
    var records = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(request.bytes));
    if (!Array.isArray(records) || records.length !== request.recordCount || records.some(function (record) {
      return !record || typeof record !== 'object' || Array.isArray(record);
    })) throw new Error('分片记录与清单不符');
    self.postMessage({ id: request.id, records: records });
  } catch (error) { self.postMessage({ id: request.id, error: error.message }); }
};
