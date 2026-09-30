(function (root, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) {
    root.ResearchConferenceDirectory = api;
    if (root.document) {
      if (root.document.readyState === 'loading') root.document.addEventListener('DOMContentLoaded', function () { api.mount(root.document, root); });
      else api.mount(root.document, root);
    }
  }
})(typeof window !== 'undefined' ? window : null, function () {
  'use strict';
  var CONTRACT = 'conference-directory-metadata-v1';
  function text(value) { return typeof value === 'string' ? value.trim() : ''; }
  function searchable(value) { return text(value).normalize('NFKC').toLocaleLowerCase(); }
  function officialURL(value) {
    try { var url = new URL(text(value)); return url.protocol === 'https:' && !url.username && !url.password; } catch (_) { return false; }
  }
  function date(value) {
    value = text(value);
    if (!/^20\d{2}-\d{2}-\d{2}$/.test(value)) return '';
    var parsed = new Date(value + 'T00:00:00Z');
    return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value ? value : '';
  }
  function normalizeEntry(entry) {
    if (!entry || typeof entry !== 'object' || Array.isArray(entry) || !/^[a-z0-9][a-z0-9-]*$/.test(text(entry.id)) || !text(entry.name) || !/^20\d{2}$/.test(String(entry.year))) throw new Error('会议条目缺少明确名称、届年或稳定标识');
    var event = entry.event || {}, ranking = entry.ranking || {};
    var start = date(event.startDate), end = date(event.endDate || event.startDate);
    var confirmed = event.status === 'confirmed' && start && end && start <= end && officialURL(event.sourceUrl);
    var grade = ranking.scheme === 'CCF' && ['A', 'B', 'C', 'unlisted'].includes(ranking.grade) && officialURL(ranking.sourceUrl) && text(String(ranking.edition || '')) && (ranking.grade === 'unlisted' ? ranking.scope === 'not-listed' : ranking.scope === 'main-conference-full-regular-paper') ? ranking.grade : 'pending';
    var venue = text(entry.venueId) || entry.id.replace(/-20\d{2}$/, '');
    if (!/^[a-z0-9][a-z0-9-]*$/.test(venue)) throw new Error('会议名称标识无效');
    return { id: entry.id, venueId: venue, name: text(entry.name), year: String(entry.year),
      startDate: confirmed ? start : '', endDate: confirmed ? end : '',
      dateStatus: confirmed ? 'confirmed' : event.status === 'tba' && officialURL(event.sourceUrl) ? 'tba' : 'pending', grade: grade,
      search: searchable([entry.name, entry.fullName, ...(Array.isArray(entry.aliases) ? entry.aliases : [])].filter(function (value) { return typeof value === 'string'; }).join(' ')) };
  }
  function normalizeCatalog(catalog) {
    if (!catalog || catalog.contract !== CONTRACT || !Array.isArray(catalog.entries)) throw new Error('会议目录数据格式不匹配');
    var ids = new Set(), editions = new Set();
    return catalog.entries.map(function (raw) {
      var entry = normalizeEntry(raw), edition = entry.venueId + ':' + entry.year;
      if (ids.has(entry.id) || editions.has(edition)) throw new Error('同届会议必须合并为一张卡片');
      ids.add(entry.id); editions.add(edition); return entry;
    });
  }
  function stateFromParams(params) {
    return { year: /^20\d{2}$/.test(params.get('year') || '') ? params.get('year') : 'all',
      month: /^(0[1-9]|1[0-2]|unknown)$/.test(params.get('month') || '') ? params.get('month') : 'all',
      grade: /^(A|B|C|unlisted|pending)$/.test(params.get('tier') || '') ? params.get('tier') : 'all',
      venue: /^[a-z0-9][a-z0-9-]*$/.test(params.get('venue') || '') ? params.get('venue') : 'all',
      query: text(params.get('q') || '').slice(0, 120) };
  }
  function intervalMatches(entry, year, month) {
    if (!entry.startDate) return month === 'all' || month === 'unknown' ? year === 'all' || entry.year === year : false;
    if (month === 'unknown') return false;
    var firstYear = Number(entry.startDate.slice(0, 4)), lastYear = Number(entry.endDate.slice(0, 4));
    var years = year === 'all' ? Array.from({ length: lastYear - firstYear + 1 }, function (_, i) { return firstYear + i; }) : [Number(year)];
    return years.some(function (y) {
      var lower = y + '-' + (month === 'all' ? '01' : month) + '-01';
      var upper = month === 'all' ? y + '-12-31' : new Date(Date.UTC(y, Number(month), 0)).toISOString().slice(0, 10);
      return entry.startDate <= upper && entry.endDate >= lower;
    });
  }
  function filterEntries(entries, state) {
    var query = searchable(state.query);
    return entries.filter(function (entry) {
      return (state.grade === 'all' || entry.grade === state.grade) &&
        (state.venue === 'all' || entry.venueId === state.venue) &&
        (!query || entry.search.includes(query)) && intervalMatches(entry, state.year, state.month);
    });
  }
  function availableYears(entries) {
    var years = new Set();
    entries.forEach(function (entry) {
      if (!entry.startDate) years.add(entry.year);
      else for (var year = Number(entry.startDate.slice(0, 4)); year <= Number(entry.endDate.slice(0, 4)); year += 1) years.add(String(year));
    });
    return Array.from(years).sort().reverse();
  }
  function mount(document, window) {
    var root = document.getElementById('conference-directory'), data = document.getElementById('conference-directory-data');
    if (!root || !data) return;
    var status = document.getElementById('conference-count'), entries;
    try { entries = normalizeCatalog(JSON.parse(data.textContent)); } catch (_) {
      if (status) status.textContent = '筛选数据暂时不可用，可直接查看下方会议入口。'; return;
    }
    var panel = document.getElementById('conference-filter-panel');
    var form = document.getElementById('conference-filters'), controls = {
      year: document.getElementById('conference-year'), month: document.getElementById('conference-month'),
      grade: document.getElementById('conference-tier'), venue: document.getElementById('conference-venue'),
      query: document.getElementById('conference-query') };
    if (!form || Object.values(controls).some(function (node) { return !node; })) return;
    function option(select, value, label) { var node = document.createElement('option'); node.value = value; node.textContent = label; select.appendChild(node); }
    availableYears(entries).forEach(function (year) { option(controls.year, year, year + ' 年'); });
    var venues = new Map(); entries.forEach(function (entry) { if (!venues.has(entry.venueId)) venues.set(entry.venueId, entry.name); });
    Array.from(venues).sort(function (a, b) { return a[1].localeCompare(b[1]); }).forEach(function (item) { option(controls.venue, item[0], item[1]); });
    var cards = Array.from(root.querySelectorAll('[data-conference-id]'));
    var groups = Array.from(root.querySelectorAll('[data-conference-group]'));
    var empty = document.getElementById('conference-empty');
    function setControls(state) {
      Object.keys(controls).forEach(function (key) {
        controls[key].value = state[key];
        if (key !== 'query' && !controls[key].value && state[key] !== 'all') {
          option(controls[key], state[key], state[key] + '（暂无收录）'); controls[key].value = state[key];
        }
      });
    }
    function render(state) {
      var visible = filterEntries(entries, state), ids = new Set(visible.map(function (entry) { return entry.id; }));
      cards.forEach(function (card) { card.hidden = !ids.has(card.dataset.conferenceId); });
      groups.forEach(function (group) {
        var count = Array.from(group.querySelectorAll('[data-conference-id]')).filter(function (card) { return !card.hidden; }).length;
        group.hidden = count === 0;
        var label = group.querySelector('[data-conference-group-count]'); if (label) label.textContent = count + ' 届';
      });
      if (empty) empty.hidden = visible.length > 0;
      if (status) status.textContent = '显示 ' + visible.length + ' / ' + entries.length + ' 届会议';
      return visible;
    }
    function current() {
      return { year: controls.year.value || 'all', month: controls.month.value || 'all', grade: controls.grade.value || 'all', venue: controls.venue.value || 'all', query: controls.query.value.trim().slice(0, 120) };
    }
    var inputSession = false;
    function restore() { inputSession = false; var state = stateFromParams(new URLSearchParams(window.location.search)); setControls(state); render(state); }
    function update(event) {
      var typing = event && event.type === 'input';
      if (!typing) inputSession = false;
      var state = current(), url = new URL(window.location.href);
      ['year', 'month', 'tier', 'venue', 'q'].forEach(function (key) { url.searchParams.delete(key); });
      Object.entries({ year: state.year, month: state.month, tier: state.grade, venue: state.venue, q: state.query }).forEach(function (item) { if (item[1] && item[1] !== 'all') url.searchParams.set(item[0], item[1]); });
      if (url.href !== window.location.href) {
        if (typing && inputSession) window.history.replaceState(null, '', url.href);
        else window.history.pushState(null, '', url.href);
      }
      if (typing) inputSession = true;
      render(state);
    }
    form.hidden = false;
    if (panel) {
      function isMobile() { return window.matchMedia ? window.matchMedia('(max-width: 720px)').matches : (window.innerWidth || 1440) <= 720; }
      var mobile = isMobile(); panel.hidden = false; panel.open = !mobile;
      window.addEventListener('resize', function () { var next = isMobile(); if (next !== mobile) { mobile = next; panel.open = !mobile; } });
    }
    form.addEventListener('submit', function (event) { event.preventDefault(); update(); });
    Object.values(controls).forEach(function (control) { control.addEventListener('change', update); });
    controls.query.addEventListener('input', update);
    controls.query.addEventListener('blur', function () { inputSession = false; });
    document.getElementById('conference-clear').addEventListener('click', function () { setControls({ year: 'all', month: 'all', grade: 'all', venue: 'all', query: '' }); update(); });
    document.getElementById('conference-empty-clear').addEventListener('click', function () { setControls({ year: 'all', month: 'all', grade: 'all', venue: 'all', query: '' }); update(); controls.query.focus(); });
    window.addEventListener('popstate', restore); restore();
  }
  return { contract: CONTRACT, date: date, normalizeEntry: normalizeEntry, normalizeCatalog: normalizeCatalog, stateFromParams: stateFromParams, intervalMatches: intervalMatches, filterEntries: filterEntries, availableYears: availableYears, mount: mount };
});
