(function (root, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ResearchReadingStore = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  var CONTRACT = 'research-reading-library-v2';
  var LEGACY_CONTRACT = 'research-reading-library-v1';
  var STATUSES = ['unread', 'reading', 'read'];
  var MAX_IMPORT_BYTES = 5 * 1024 * 1024;
  var MAX_RECORDS = 10000;
  var MAX_POSITIONS = 200;
  var MAX_NOTE_HISTORY = 100;
  function fail(message) { throw new Error(message); }
  function object(value) { return value && typeof value === 'object' && !Array.isArray(value); }
  function fields(value, allowed) {
    if (Object.keys(value).some(function (key) { return !allowed.includes(key); })) fail('阅读资料含不支持的字段');
  }
  function text(value, maximum) {
    if (typeof value !== 'string' || value.length > maximum || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value)) fail('阅读资料的文字字段无效');
    return value;
  }
  function timestamp(value) {
    // Parsing alone accepts impossible dates such as February 30. Backups use exact UTC ISO dates.
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value)
      || !Number.isFinite(Date.parse(value)) || new Date(value).toISOString() !== value) fail('阅读资料的时间无效');
    return value;
  }
  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function create(options) {
    var settings = options || {};
    var storage = settings.storage, origin = settings.origin, basePath = settings.basePath;
    if (!storage || typeof storage.getItem !== 'function' || typeof storage.setItem !== 'function') fail('当前浏览器不支持本机阅读资料保存');
    if (!/^https?:$/.test(new URL(origin).protocol) || new URL(origin).origin !== origin
      || typeof basePath !== 'string' || !basePath.startsWith('/') || !basePath.endsWith('/') || basePath.includes('..') || basePath.includes('\\')) fail('阅读资料的站点范围无效');
    var storageKey = 'research-reading-state-v2:' + basePath;
    var legacyKey = 'research-reading-store-v1:' + basePath;
    var positionKey = 'research-reading-position-v1:' + basePath;
    // Only live, verified article records populate this map. Imported backups cannot assert URL aliases.
    var verifiedMappings = Object.create(null);
    function safeUrl(value) {
      var url;
      try { url = new URL(text(value, 3000), origin); } catch (_error) { fail('阅读资料链接无效'); }
      if (url.origin !== origin || !url.pathname.startsWith(basePath) || url.username || url.password || !/^https?:$/.test(url.protocol)) fail('阅读资料链接不属于本站');
      url.search = ''; url.hash = '';
      return url.pathname;
    }
    function scopedPath(value) {
      if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//') || value.length > 1000 || safeUrl(value) !== value) fail('阅读进度的页面范围无效');
      return value;
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
    function validKey(key, url) {
      if (typeof key !== 'string' || key.length > 1000 || !/^(?:page:\/|[a-z][a-z0-9_-]*:)[^\s\u0000-\u001f\u007f]*$/.test(key)
        || (key.startsWith('page:') && key !== 'page:' + url)) fail('阅读资料的论文标识无效');
      return key;
    }
    function validateHistory(history) {
      if (history === undefined) return [];
      if (!Array.isArray(history) || history.length > MAX_NOTE_HISTORY) fail('个人笔记历史超过100条或格式无效，请先导出完整资料');
      return history.map(function (entry) {
        if (!object(entry)) fail('个人笔记历史无效');
        fields(entry, ['note', 'sourceURL', 'sourceKey', 'updatedAt']);
        var url = safeUrl(entry.sourceURL);
        return { note: text(entry.note, 2000), sourceURL: url, sourceKey: validKey(entry.sourceKey, url), updatedAt: timestamp(entry.updatedAt) };
      });
    }
    function validate(record, key) {
      if (!object(record)) fail('阅读资料记录无效');
      fields(record, ['key', 'url', 'title', 'status', 'bookmarked', 'note', 'noteHistory', 'createdAt', 'updatedAt']);
      var url = safeUrl(record.url);
      validKey(key, url);
      if (!STATUSES.includes(record.status) || typeof record.bookmarked !== 'boolean') fail('阅读状态无效');
      var createdAt = timestamp(record.createdAt), updatedAt = timestamp(record.updatedAt);
      if (createdAt > updatedAt) fail('阅读资料的时间顺序无效');
      return { key: key, url: url, title: text(record.title, 2000), status: record.status, bookmarked: record.bookmarked,
        note: text(record.note === undefined ? '' : record.note, 2000), noteHistory: validateHistory(record.noteHistory), createdAt: createdAt, updatedAt: updatedAt };
    }
    function validatePosition(pathname, position) {
      scopedPath(pathname);
      if (!object(position) || typeof position.anchor !== 'string' || !position.anchor.length
        || position.anchor.length > 300 || /[\u0000-\u001f\u007f]/.test(position.anchor)
        || !Number.isFinite(position.progress) || position.progress < 0 || position.progress > 100) fail('阅读进度无效');
      fields(position, ['pathname', 'anchor', 'progress', 'updatedAt']);
      return { anchor: position.anchor, progress: position.progress, updatedAt: timestamp(position.updatedAt) };
    }
    function validateArchive(archive) {
      if (archive === undefined) return [];
      if (!Array.isArray(archive) || archive.length > 100) fail('原始资料恢复档案无效');
      return archive.map(function (entry) {
        if (!object(entry) || !['primary', 'legacyRecords', 'legacyPositions'].includes(entry.source) || typeof entry.raw !== 'string') fail('原始资料恢复档案无效');
        fields(entry, ['source', 'raw']);
        return { source: entry.source, raw: entry.raw };
      });
    }
    function empty() { return { records: Object.create(null), positions: Object.create(null), aliases: Object.create(null),
      legacyObserved: { records: Object.create(null), positions: Object.create(null) }, recoveryArchive: [] }; }
    function parse(raw, primary) {
      if (typeof raw !== 'string' || new TextEncoder().encode(raw).length > MAX_IMPORT_BYTES) fail('阅读备份超过5 MiB或格式无效');
      var data;
      try { data = JSON.parse(raw); } catch (_error) { fail('阅读备份不是有效JSON'); }
      if (!object(data) || ![CONTRACT, LEGACY_CONTRACT].includes(data.contract) || data.basePath !== basePath
        || !Array.isArray(data.records) || data.records.length > MAX_RECORDS) fail('阅读备份版本或站点范围不匹配');
      var result = empty();
      result.hasPositions = data.contract === CONTRACT;
      var allowed = ['contract', 'origin', 'basePath', 'exportedAt', 'records', 'positions', 'recoveryArchive'];
      if (primary) allowed.push('verifiedArticleURLs', 'legacyObserved');
      fields(data, result.hasPositions ? allowed
        : ['contract', 'basePath', 'exportedAt', 'records']);
      if (result.hasPositions && (data.origin !== origin || !Array.isArray(data.positions) || data.positions.length > MAX_POSITIONS)) fail('阅读备份版本或站点范围不匹配');
      if (data.exportedAt !== undefined) timestamp(data.exportedAt);
      data.records.forEach(function (record) {
        var checked = validate(record, record && record.key);
        if (Object.prototype.hasOwnProperty.call(result.records, checked.key)) fail('阅读备份含重复论文标识');
        result.records[checked.key] = checked;
      });
      (result.hasPositions ? data.positions : []).forEach(function (position) {
        if (!object(position)) fail('阅读进度无效');
        var pathname = scopedPath(position.pathname);
        if (Object.prototype.hasOwnProperty.call(result.positions, pathname)) fail('阅读备份含重复页面进度');
        result.positions[pathname] = validatePosition(pathname, position);
      });
      result.recoveryArchive = validateArchive(data.recoveryArchive);
      if (primary && data.verifiedArticleURLs !== undefined) {
        if (!Array.isArray(data.verifiedArticleURLs) || data.verifiedArticleURLs.length > MAX_RECORDS) fail('已核实文章映射数量或格式无效');
        data.verifiedArticleURLs.forEach(function (entry) {
          if (!object(entry)) fail('已核实文章映射无效');
          fields(entry, ['pathname', 'key']);
          var pathname = scopedPath(entry.pathname), key = validKey(entry.key, pathname);
          if (!pathname.startsWith(basePath + 'posts/') || !pathname.endsWith('/') || key.startsWith('page:')
            || Object.prototype.hasOwnProperty.call(result.aliases, pathname)) fail('已核实文章映射无效');
          result.aliases[pathname] = key;
        });
      }
      if (primary && data.legacyObserved !== undefined) {
        if (!object(data.legacyObserved) || !object(data.legacyObserved.records) || !object(data.legacyObserved.positions)) fail('旧版资料同步标记无效');
        fields(data.legacyObserved, ['records', 'positions']);
        if (Object.keys(data.legacyObserved.records).length > MAX_RECORDS * 4 || Object.keys(data.legacyObserved.positions).length > MAX_RECORDS * 4) fail('旧版资料同步标记超过上限');
        Object.keys(data.legacyObserved.records).forEach(function (key) {
          var url = key.startsWith('page:') ? scopedPath(key.slice(5)) : basePath;
          validKey(key, url); result.legacyObserved.records[key] = timestamp(data.legacyObserved.records[key]);
        });
        Object.keys(data.legacyObserved.positions).forEach(function (pathname) { result.legacyObserved.positions[scopedPath(pathname)] = timestamp(data.legacyObserved.positions[pathname]); });
      }
      return result;
    }
    function parseLegacyPositions(raw) {
      var data;
      try { data = JSON.parse(raw); } catch (_error) { fail('原有阅读进度不是有效JSON'); }
      if (!object(data) || data.version !== 1 || !object(data.positions) || Object.keys(data.positions).length > MAX_POSITIONS) fail('原有阅读进度格式无效');
      fields(data, ['version', 'positions']);
      var positions = Object.create(null);
      Object.keys(data.positions).forEach(function (pathname) { positions[scopedPath(pathname)] = validatePosition(pathname, data.positions[pathname]); });
      return positions;
    }
    function rawSources() {
      return { primary: storage.getItem(storageKey), legacyRecords: storage.getItem(legacyKey), legacyPositions: storage.getItem(positionKey) };
    }
    var state = empty(), startupError = null, compatibilityDirty = false;
    function refresh() {
      try {
        var primary = storage.getItem(storageKey), next = empty();
        if (primary !== null) {
          next = parse(primary, true);
          if (!next.hasPositions) fail('主阅读快照版本无效');
          // Preserve the valid primary view if the compatibility store is damaged, while blocking overwrite.
          state = next;
          next = copyState(next);
          var compatibility = storage.getItem(legacyKey);
          if (compatibility !== null) mergeLegacyRecords(next, parse(compatibility).records);
          var legacyProgress = storage.getItem(positionKey);
          if (legacyProgress !== null) {
            var newerPositions = parseLegacyPositions(legacyProgress);
            Object.keys(newerPositions).forEach(function (pathname) {
              if (next.legacyObserved.positions[pathname] && newerPositions[pathname].updatedAt <= next.legacyObserved.positions[pathname]) return;
              next.legacyObserved.positions[pathname] = newerPositions[pathname].updatedAt;
              if (!next.positions[pathname] || newerPositions[pathname].updatedAt > next.positions[pathname].updatedAt) next.positions[pathname] = newerPositions[pathname];
            });
            // This is a compatibility merge, so older pages can rotate progress at the documented limit.
            trimPositions(next.positions);
          }
          compatibilityDirty = JSON.stringify(next) !== JSON.stringify(state);
        }
        else {
          compatibilityDirty = false;
          var legacyRecords = storage.getItem(legacyKey), legacyPositions = storage.getItem(positionKey);
          if (legacyRecords !== null) next = parse(legacyRecords);
          if (legacyPositions !== null) next.positions = parseLegacyPositions(legacyPositions);
          Object.keys(next.records).forEach(function (key) { next.legacyObserved.records[key] = next.records[key].updatedAt; });
          Object.keys(next.positions).forEach(function (pathname) { next.legacyObserved.positions[pathname] = next.positions[pathname].updatedAt; });
        }
        state = next; startupError = null; return true;
      } catch (error) { startupError = error; return false; }
    }
    refresh();
    function encode(next, primary) {
      var backup = { contract: CONTRACT, origin: origin, basePath: basePath, exportedAt: new Date().toISOString(), records: Object.values(next.records),
        positions: Object.keys(next.positions).map(function (pathname) { return Object.assign({ pathname: pathname }, next.positions[pathname]); }) };
      if (next.recoveryArchive.length) backup.recoveryArchive = next.recoveryArchive;
      if (primary && Object.keys(next.aliases).length) backup.verifiedArticleURLs = Object.keys(next.aliases).sort().map(function (pathname) { return { pathname: pathname, key: next.aliases[pathname] }; });
      if (primary) backup.legacyObserved = next.legacyObserved;
      var raw = JSON.stringify(backup, null, 2);
      if (new TextEncoder().encode(raw).length > MAX_IMPORT_BYTES) fail('阅读备份超过5 MiB，请先导出资料');
      return raw;
    }
    function persist(next) {
      if (startupError) fail('原有阅读资料无法读取，已阻止覆盖。请先导出原始备份再修复。');
      if (Object.keys(next.records).length > MAX_RECORDS || Object.keys(next.positions).length > MAX_POSITIONS) fail('本机阅读资料数量超过上限');
      if (Object.keys(next.aliases).length > MAX_RECORDS) fail('已核实文章映射超过10000条，请先导出资料');
      // Remember consumed legacy changes and the mirrors we are about to publish. Stale mirrors must not
      // reintroduce records/progress removed by an explicit v2 restoration when a mirror write fails.
      Object.keys(next.records).forEach(function (key) {
        if (!next.legacyObserved.records[key] || next.records[key].updatedAt > next.legacyObserved.records[key]) next.legacyObserved.records[key] = next.records[key].updatedAt;
      });
      Object.keys(next.positions).forEach(function (pathname) {
        if (!next.legacyObserved.positions[pathname] || next.positions[pathname].updatedAt > next.legacyObserved.positions[pathname]) next.legacyObserved.positions[pathname] = next.positions[pathname].updatedAt;
      });
      if (Object.keys(next.legacyObserved.records).length > MAX_RECORDS * 4 || Object.keys(next.legacyObserved.positions).length > MAX_RECORDS * 4) fail('旧版资料同步标记超过上限，请先导出资料');
      var raw = encode(next, true);
      // This is the only authoritative commit. Quota failure cannot leave half-restored records/positions.
      try { storage.setItem(storageKey, raw); } catch (_error) { fail('浏览器未能保存阅读资料，请导出备份后检查可用存储空间'); }
      state = next;
      compatibilityDirty = false;
      // Older tabs can read these mirrors; updated readers always prioritize the primary.
      try { storage.setItem(legacyKey, JSON.stringify({ contract: LEGACY_CONTRACT, basePath: basePath, records: Object.values(next.records) })); } catch (_error) {}
      try { storage.setItem(positionKey, JSON.stringify({ version: 1, positions: next.positions })); } catch (_error) {}
      if (typeof settings.onChange === 'function') {
        try { settings.onChange(); } catch (_error) { /* A display callback cannot invalidate a completed commit. */ }
      }
    }
    function get(paper) {
      var key = typeof paper === 'string' ? paper : paperKey(paper);
      return state.records[key] ? clone(state.records[key]) : null;
    }
    function noteEntry(record) { return { note: record.note, sourceURL: record.url, sourceKey: record.key, updatedAt: record.updatedAt }; }
    function mergeRecord(left, right, migration) {
      if (!left) return clone(right);
      var winner = right.updatedAt > left.updatedAt || (right.updatedAt === left.updatedAt && right.url > left.url) ? right : left;
      var history = [], seen = new Set([winner.note]);
      [].concat(left.noteHistory || [], right.noteHistory || [], noteEntry(left), noteEntry(right)).forEach(function (entry) {
        if (entry.note && !seen.has(entry.note)) { seen.add(entry.note); history.push(entry); }
      });
      history.sort(function (a, b) { return a.updatedAt.localeCompare(b.updatedAt) || a.sourceURL.localeCompare(b.sourceURL) || a.note.localeCompare(b.note); });
      if (history.length > MAX_NOTE_HISTORY) fail('个人笔记历史超过100条，请先导出完整资料；原有笔记已保留');
      return Object.assign({}, winner, { bookmarked: migration ? left.bookmarked || right.bookmarked : winner.bookmarked,
        createdAt: left.createdAt < right.createdAt ? left.createdAt : right.createdAt, noteHistory: history });
    }
    function convertPage(record, key) {
      var converted = clone(record);
      if (converted.note) converted.noteHistory.push(noteEntry(record));
      converted.key = key;
      return converted;
    }
    function mergeLegacyRecords(next, incoming) {
      Object.keys(incoming).sort().forEach(function (legacyKey) {
        var record = incoming[legacyKey], mapped = legacyKey.startsWith('page:') && (next.aliases[record.url] || verifiedMappings[record.url]);
        if (next.legacyObserved.records[legacyKey] && record.updatedAt <= next.legacyObserved.records[legacyKey]) return;
        next.legacyObserved.records[legacyKey] = record.updatedAt;
        var key = mapped || legacyKey, existing = next.records[key];
        // A stale mirror can neither override a newer state nor resurrect a deliberately replaced active note.
        if (!mapped && existing && record.updatedAt <= existing.updatedAt) return;
        var merged = mergeRecord(existing, mapped ? convertPage(record, key) : record, !!mapped);
        merged.noteHistory = merged.noteHistory.filter(function (entry) { return entry.note !== merged.note; });
        next.records[key] = validate(merged, key);
        if (mapped) { next.aliases[record.url] = key; delete next.records[legacyKey]; }
      });
    }
    function copyState(snapshot) { return { records: Object.assign(Object.create(null), snapshot.records), positions: Object.assign(Object.create(null), snapshot.positions),
      aliases: Object.assign(Object.create(null), snapshot.aliases), legacyObserved: {
        records: Object.assign(Object.create(null), snapshot.legacyObserved.records), positions: Object.assign(Object.create(null), snapshot.legacyObserved.positions)
      }, recoveryArchive: snapshot.recoveryArchive.slice(), hasPositions: snapshot.hasPositions }; }
    function nextState() { return copyState(state); }
    function trimPositions(positions) {
      Object.keys(positions).sort(function (a, b) { return positions[b].updatedAt.localeCompare(positions[a].updatedAt) || a.localeCompare(b); })
        .slice(MAX_POSITIONS).forEach(function (old) { delete positions[old]; });
    }
    function archiveRaw(archive, raw) {
      var result = archive.slice();
      Object.keys(raw).forEach(function (source) {
        if (raw[source] !== null && !result.some(function (entry) { return entry.source === source && entry.raw === raw[source]; })) result.push({ source: source, raw: raw[source] });
      });
      return validateArchive(result);
    }
    function update(paper, patch) {
      refresh();
      var key = paperKey(paper), old = state.records[key], now = new Date().toISOString();
      if (old && now <= old.updatedAt) now = new Date(Date.parse(old.updatedAt) + 1).toISOString();
      var nextRecord = Object.assign({ key: key, url: safeUrl(paper.permalink || paper.url), title: String(paper.title || '').slice(0, 2000),
        status: 'unread', bookmarked: false, note: '', noteHistory: [], createdAt: now }, old || {}, patch || {}, { key: key, updatedAt: now });
      // Explicitly editing the active note replaces it; imported/migrated conflicts remain in history.
      var next = nextState(); next.records[key] = validate(nextRecord, key); persist(next); return get(key);
    }
    function importBackup(raw) {
      refresh();
      var incoming = parse(raw), next = nextState(), changed = 0;
      Object.keys(incoming.records).forEach(function (key) {
        var merged = mergeRecord(next.records[key], incoming.records[key], false);
        if (JSON.stringify(merged) !== JSON.stringify(next.records[key])) { next.records[key] = merged; changed++; }
      });
      Object.keys(incoming.positions).forEach(function (pathname) {
        if (!next.positions[pathname] || incoming.positions[pathname].updatedAt > next.positions[pathname].updatedAt) { next.positions[pathname] = incoming.positions[pathname]; changed++; }
      });
      if (Object.keys(next.positions).length > MAX_POSITIONS) fail('合并后的阅读进度超过200页，请使用明确替换恢复或先导出');
      incoming.recoveryArchive.forEach(function (entry) { if (!next.recoveryArchive.some(function (old) { return old.source === entry.source && old.raw === entry.raw; })) next.recoveryArchive.push(entry); });
      validateArchive(next.recoveryArchive);
      if (compatibilityDirty || JSON.stringify(next) !== JSON.stringify(state)) persist(next);
      return changed;
    }
    function recoverBackup(raw) {
      var incoming = parse(raw);
      refresh();
      var previousError = startupError;
      incoming.aliases = Object.assign(Object.create(null), state.aliases);
      incoming.legacyObserved = { records: Object.assign(Object.create(null), state.legacyObserved.records), positions: Object.assign(Object.create(null), state.legacyObserved.positions) };
      state.recoveryArchive.forEach(function (entry) {
        if (!incoming.recoveryArchive.some(function (old) { return old.source === entry.source && old.raw === entry.raw; })) incoming.recoveryArchive.push(entry);
      });
      // Preserve exact damaged bytes inside the same atomic write, not a fallible secondary archive write.
      if (previousError) incoming.recoveryArchive = archiveRaw(incoming.recoveryArchive, rawSources());
      if (!incoming.hasPositions) {
        if (!previousError) incoming.positions = state.positions;
        else {
          var legacyPositions = storage.getItem(positionKey);
          try { incoming.positions = legacyPositions !== null ? parseLegacyPositions(legacyPositions) : state.positions; }
          catch (_error) { incoming.positions = Object.create(null); }
        }
      }
      validateArchive(incoming.recoveryArchive);
      startupError = null;
      try { persist(incoming); } catch (error) { startupError = previousError; throw error; }
      return Object.keys(incoming.records).length;
    }
    function reconcileVerifiedArticles(articles) {
      if (!Array.isArray(articles)) fail('已核实文章映射无效');
      refresh();
      var mappings = Object.create(null);
      articles.forEach(function (paper) {
        if (!object(paper) || (paper.pageType || paper.type) !== 'paper'
          || !(paper.identityStatus === 'verified' || paper.identityVerified === true)) return;
        var articleUrl = new URL(paper.permalink || paper.url, origin);
        if (articleUrl.search || articleUrl.hash) fail('已核实文章链接必须是精确页面地址');
        var pathname = scopedPath(safeUrl(articleUrl.href));
        if (!pathname.startsWith(basePath + 'posts/') || !pathname.endsWith('/')) fail('迁移只能关联本站已核实的论文导读页');
        var canonical = paperKey(paper);
        if (canonical.startsWith('page:')) return;
        if (mappings[pathname] && mappings[pathname] !== canonical) fail('同一文章链接有冲突的已核实论文身份，已阻止迁移');
        if ((state.aliases[pathname] && state.aliases[pathname] !== canonical)
          || (verifiedMappings[pathname] && verifiedMappings[pathname] !== canonical)) fail('同一文章链接的已核实身份与原迁移记录冲突，已阻止迁移');
        mappings[pathname] = canonical;
      });
      verifiedMappings = Object.assign(Object.create(null), verifiedMappings, mappings);
      var next = nextState(), changed = 0;
      var aliasesChanged = false;
      Object.keys(mappings).sort().forEach(function (pathname) {
        var pageKey = 'page:' + pathname, old = next.records[pageKey], key = mappings[pathname];
        if ((old || next.records[key]) && next.aliases[pathname] !== key) { next.aliases[pathname] = key; aliasesChanged = true; }
        if (!old) return;
        // Capture page provenance before changing its key. Titles and backup identity claims never map URLs.
        var converted = convertPage(old, key);
        var merged = mergeRecord(next.records[key], converted, true);
        merged.noteHistory = merged.noteHistory.filter(function (entry) { return entry.note !== merged.note; });
        next.records[key] = validate(merged, key); delete next.records[pageKey]; changed++;
      });
      if (changed || aliasesChanged || compatibilityDirty) persist(next);
      return changed;
    }
    function updatePosition(pathname, position) {
      refresh();
      var next = nextState(); scopedPath(pathname);
      var checked = validatePosition(pathname, position), old = next.positions[pathname];
      if (old && checked.updatedAt <= old.updatedAt) checked.updatedAt = new Date(Date.parse(old.updatedAt) + 1).toISOString();
      next.positions[pathname] = checked;
      // Autosave rotates old positions; importing never silently drops progress.
      trimPositions(next.positions);
      persist(next); return next.positions[pathname] ? clone(next.positions[pathname]) : null;
    }
    return { key: paperKey, get: get, update: update, all: function () { return clone(Object.values(state.records)); },
      positions: function () { return clone(state.positions); }, updatePosition: updatePosition,
      reconcileVerifiedArticles: reconcileVerifiedArticles,
      backup: function () { if (!startupError) return encode(state); var raw = rawSources(); return raw.primary !== null ? raw.primary : raw.legacyRecords !== null ? raw.legacyRecords : raw.legacyPositions || ''; },
      rawBackup: function () { return JSON.stringify(Object.assign({ contract: 'research-reading-raw-recovery-v1', origin: origin, basePath: basePath, recoveryArchive: state.recoveryArchive }, rawSources()), null, 2); },
      importBackup: importBackup, recoverBackup: recoverBackup, refresh: refresh,
      get error() { return startupError; }, storageKey: storageKey, legacyStorageKey: legacyKey, positionStorageKey: positionKey, basePath: basePath, origin: origin };
  }
  return { create: create, contract: CONTRACT, legacyContract: LEGACY_CONTRACT, statuses: STATUSES,
    limits: { importBytes: MAX_IMPORT_BYTES, records: MAX_RECORDS, positions: MAX_POSITIONS, noteHistory: MAX_NOTE_HISTORY } };
}));
