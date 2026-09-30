(function (root, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ResearchReadingStore = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  var CONTRACT = 'research-reading-library-v1';
  var STATUSES = ['unread', 'reading', 'read'];
  var MAX_IMPORT_BYTES = 5 * 1024 * 1024;
  var MAX_RECORDS = 10000;
  function fail(message) { throw new Error(message); }
  function text(value, maximum) {
    if (typeof value !== 'string' || value.length > maximum || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value)) fail('阅读资料的文字字段无效');
    return value;
  }
  function timestamp(value) {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}T/.test(value) || !Number.isFinite(Date.parse(value))) fail('阅读资料的时间无效');
    return new Date(value).toISOString();
  }
  function create(options) {
    var settings = options || {};
    var storage = settings.storage;
    var origin = settings.origin;
    var basePath = settings.basePath;
    if (!storage || typeof storage.getItem !== 'function' || typeof storage.setItem !== 'function') fail('当前浏览器不支持本机阅读资料保存');
    if (!/^https?:$/.test(new URL(origin).protocol) || new URL(origin).origin !== origin
      || typeof basePath !== 'string' || !basePath.startsWith('/') || !basePath.endsWith('/') || basePath.includes('..') || basePath.includes('\\')) fail('阅读资料的站点范围无效');
    var storageKey = 'research-reading-store-v1:' + basePath;
    function safeUrl(value) {
      var url;
      try { url = new URL(text(value, 3000), origin); } catch (_error) { fail('阅读资料链接无效'); }
      if (url.origin !== origin || !url.pathname.startsWith(basePath) || url.username || url.password || !/^https?:$/.test(url.protocol)) fail('阅读资料链接不属于本站');
      url.search = ''; url.hash = '';
      return url.pathname;
    }
    function paperKey(paper) {
      if (paper.identityStatus === 'verified' || paper.identityVerified === true) {
        var arxiv = String(paper.arxivId || '').replace(/v[1-9][0-9]*$/, '');
        if (/^(?:[0-9]{4}\.[0-9]{4,5}|[a-z][a-z0-9.-]*\/[0-9]{7})$/.test(arxiv)) return 'arxiv:' + arxiv;
        var id = paper.paperId || paper.key || '';
        if (typeof id === 'string' && /^[a-z][a-z0-9_-]*:[^\s\u0000-\u001f\u007f]+$/.test(id) && !id.startsWith('page:') && id.length <= 1000) return id;
      }
      return 'page:' + safeUrl(paper.permalink || paper.url);
    }
    function validate(record, key) {
      if (!record || typeof record !== 'object' || Array.isArray(record)) fail('阅读资料记录无效');
      var url = safeUrl(record.url);
      if (typeof key !== 'string' || key.length > 1000 || !/^(?:page:\/|[a-z][a-z0-9_-]*:)[^\s\u0000-\u001f\u007f]*$/.test(key)
        || key === '__proto__' || (key.startsWith('page:') && key !== 'page:' + url)) fail('阅读资料的论文标识无效');
      if (!STATUSES.includes(record.status) || typeof record.bookmarked !== 'boolean') fail('阅读状态无效');
      return { key: key, url: url, title: text(record.title, 2000), status: record.status, bookmarked: record.bookmarked,
        note: text(record.note || '', 2000), createdAt: timestamp(record.createdAt), updatedAt: timestamp(record.updatedAt) };
    }
    function parse(raw) {
      if (typeof raw !== 'string' || new TextEncoder().encode(raw).length > MAX_IMPORT_BYTES) fail('阅读备份超过5 MiB或格式无效');
      var data;
      try { data = JSON.parse(raw); } catch (_error) { fail('阅读备份不是有效JSON'); }
      if (!data || data.contract !== CONTRACT || data.basePath !== basePath || !Array.isArray(data.records) || data.records.length > MAX_RECORDS) fail('阅读备份版本或站点范围不匹配');
      var records = Object.create(null);
      data.records.forEach(function (record) {
        var checked = validate(record, record && record.key);
        if (Object.prototype.hasOwnProperty.call(records, checked.key)) fail('阅读备份含重复论文标识');
        records[checked.key] = checked;
      });
      return records;
    }
    var records = Object.create(null);
    var startupError = null;
    try {
      var saved = storage.getItem(storageKey);
      if (saved) records = parse(saved);
    } catch (error) { startupError = error; }
    function backup(items) {
      return JSON.stringify({ contract: CONTRACT, basePath: basePath, exportedAt: new Date().toISOString(), records: Object.values(items) }, null, 2);
    }
    function refresh() {
      try { var raw = storage.getItem(storageKey); records = raw ? parse(raw) : Object.create(null); startupError = null; return true; }
      catch (error) { startupError = error; return false; }
    }
    function persist(next) {
      if (startupError) fail('原有阅读资料无法读取，已阻止覆盖。请先导出原始备份再修复。');
      if (Object.keys(next).length > MAX_RECORDS) fail('本机阅读资料最多保存10000条');
      try { storage.setItem(storageKey, backup(next)); } catch (_error) { fail('浏览器未能保存阅读资料，请导出备份后检查可用存储空间'); }
      records = next;
      if (typeof settings.onChange === 'function') settings.onChange();
    }
    function get(paper) {
      var key = typeof paper === 'string' ? paper : paperKey(paper);
      return records[key] ? Object.assign({}, records[key]) : null;
    }
    function update(paper, patch) {
      refresh();
      var key = paperKey(paper), old = records[key], now = new Date().toISOString();
      var nextRecord = Object.assign({ key: key, url: safeUrl(paper.permalink || paper.url), title: String(paper.title || '').slice(0, 2000),
        status: 'unread', bookmarked: false, note: '', createdAt: now }, old || {}, patch || {}, { key: key, updatedAt: now });
      var next = Object.assign(Object.create(null), records);
      next[key] = validate(nextRecord, key);
      persist(next);
      return get(key);
    }
    return { key: paperKey, get: get, update: update, all: function () { return Object.values(records).map(function (record) { return Object.assign({}, record); }); },
      backup: function () { return startupError ? storage.getItem(storageKey) || '' : backup(records); },
      importBackup: function (raw) {
        refresh();
        var incoming = parse(raw), next = Object.assign(Object.create(null), records), changed = 0;
        Object.keys(incoming).forEach(function (key) {
          if (!next[key] || incoming[key].updatedAt > next[key].updatedAt) { next[key] = incoming[key]; changed++; }
        });
        persist(next); return changed;
      }, recoverBackup: function (raw) {
        var incoming = parse(raw), previousError = startupError;
        startupError = null;
        try { persist(incoming); } catch (error) { startupError = previousError; throw error; }
        return Object.keys(incoming).length;
      }, refresh: refresh, error: startupError, basePath: basePath, origin: origin };
  }
  return { create: create, contract: CONTRACT, statuses: STATUSES, limits: { importBytes: MAX_IMPORT_BYTES, records: MAX_RECORDS } };
}));
