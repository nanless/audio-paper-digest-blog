(function (root, factory) {
  'use strict';
  var api = factory(root);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ResearchIndexCache = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function (root) {
  'use strict';
  function create() {
    var opened = null;
    function database() {
      if (opened) return opened;
      opened = new Promise(function (resolve) {
        if (!root.indexedDB) { resolve(null); return; }
        var request;
        try { request = root.indexedDB.open('research-index-shards-v1', 1); } catch (_error) { resolve(null); return; }
        request.onupgradeneeded = function () {
          var store = request.result.createObjectStore('shards', { keyPath: 'key' });
          store.createIndex('usedAt', 'usedAt');
        };
        request.onsuccess = function () { var db = request.result; db.onversionchange = function () { db.close(); opened = null; }; resolve(db); };
        request.onerror = request.onblocked = function () { resolve(null); };
      });
      return opened;
    }
    async function get(key) {
      var db = await database(); if (!db) return null;
      return new Promise(function (resolve) {
        try {
          var request = db.transaction('shards', 'readonly').objectStore('shards').get(key);
          request.onsuccess = function () { var item = request.result; resolve(item && item.bytes instanceof ArrayBuffer && item.bytes.byteLength <= 1048576 ? new Uint8Array(item.bytes) : null); };
          request.onerror = function () { resolve(null); };
        } catch (_error) { resolve(null); }
      });
    }
    async function put(key, bytes) {
      var db = await database(); if (!db || bytes.byteLength > 1048576) return;
      return new Promise(function (resolve) {
        try {
          var transaction = db.transaction('shards', 'readwrite'), store = transaction.objectStore('shards');
          store.put({ key: key, bytes: bytes.slice().buffer, usedAt: Date.now() });
          var count = store.count();
          count.onsuccess = function () {
            var extra = count.result - 32;
            if (extra <= 0) return;
            var cursor = store.index('usedAt').openCursor();
            cursor.onsuccess = function () { if (extra > 0 && cursor.result) { cursor.result.delete(); extra--; cursor.result.continue(); } };
          };
          transaction.oncomplete = transaction.onerror = transaction.onabort = function () { resolve(); };
        } catch (_error) { resolve(); }
      });
    }
    async function remove(key) {
      var db = await database(); if (!db) return;
      try { db.transaction('shards', 'readwrite').objectStore('shards').delete(key); } catch (_error) { /* Network validation remains authoritative. */ }
    }
    return { get: get, put: put, delete: remove };
  }
  return { create: create };
}));
