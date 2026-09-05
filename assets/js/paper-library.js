(function () {
  'use strict';

  var PAGE_SIZE = 30;

  function safeSiteUrl(value, origin, siteBasePath) {
    try {
      var url = new URL(value, origin);
      if (!/^https?:$/.test(url.protocol)) return null;
      if (url.origin !== origin) return null;
      if (!url.pathname.startsWith(siteBasePath)) return null;
      if (url.username || url.password) return null;
      return url.href;
    } catch (_error) {
      return null;
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { safeSiteUrl: safeSiteUrl };
  }

  if (typeof document === 'undefined') return;
  var root = document.getElementById('paper-library');
  if (!root) return;

  var queryInput = document.getElementById('library-query');
  var typeSelect = document.getElementById('library-type');
  var yearSelect = document.getElementById('library-year');
  var sortSelect = document.getElementById('library-sort');
  var countNode = document.getElementById('library-count');
  var resultsNode = document.getElementById('library-results');
  var moreButton = document.getElementById('library-more');
  var quickButtons = Array.prototype.slice.call(document.querySelectorAll('[data-query]'));
  var indexUrl;
  try {
    indexUrl = new URL(root.dataset.indexUrl, window.location.href);
  } catch (_error) {
    indexUrl = null;
  }
  var siteBasePath = indexUrl ? indexUrl.pathname.replace(/index\.json$/, '') : '';
  var allEntries = [];
  var filteredEntries = [];
  var visibleCount = PAGE_SIZE;

  function plainText(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function classify(permalink, title) {
    var url = permalink || '';
    var match = url.match(/\/posts\/([^/]+)\/?$/);
    if (!match) return 'other';
    var slug = match[1];
    if (/^\d{4}-\d{2}-\d{2}$/.test(slug)) return 'daily';
    if (/^(icassp|iclr|icml)2026-summary$/.test(slug) || /^(icassp|iclr)2026-task-/.test(slug)) return 'conference';
    if (/论文速递\s+\d{4}-\d{2}-\d{2}/.test(title || '')) return 'daily';
    return 'paper';
  }

  function entryDate(permalink, title) {
    var text = (permalink || '') + ' ' + (title || '');
    var match = text.match(/(20\d{2})-(\d{2})-(\d{2})/);
    return match ? match[0] : '';
  }

  function entryScore(text) {
    var match = (text || '').match(/([0-9]+(?:\.[0-9]+)?)\s*\/\s*10/);
    return match ? Number(match[1]) : -1;
  }

  function normalizeEntry(item) {
    if (!item || typeof item !== 'object') return null;
    var permalink = safeSiteUrl(item.permalink, window.location.origin, siteBasePath);
    if (!permalink) return null;
    var title = plainText(item.title) || '未命名论文';
    var summary = plainText(item.summary);
    var date = entryDate(permalink, title);
    return {
      title: title,
      permalink: permalink,
      summary: summary,
      type: classify(permalink, title),
      date: date,
      year: date ? date.slice(0, 4) : '',
      score: entryScore(summary),
      searchText: (title + ' ' + summary + ' ' + permalink).toLocaleLowerCase()
    };
  }

  function typeLabel(type) {
    return type === 'daily' ? '每日速递' : type === 'conference' ? '会议专题' : '论文解读';
  }

  function readState() {
    var params = new URLSearchParams(window.location.search);
    queryInput.value = params.get('q') || '';
    typeSelect.value = params.get('type') || 'paper';
    yearSelect.value = params.get('year') || 'all';
    sortSelect.value = params.get('sort') || 'newest';
  }

  function writeState() {
    var params = new URLSearchParams();
    if (queryInput.value.trim()) params.set('q', queryInput.value.trim());
    if (typeSelect.value !== 'paper') params.set('type', typeSelect.value);
    if (yearSelect.value !== 'all') params.set('year', yearSelect.value);
    if (sortSelect.value !== 'newest') params.set('sort', sortSelect.value);
    var suffix = params.toString() ? '?' + params.toString() : window.location.pathname;
    window.history.replaceState(null, '', suffix);
  }

  function makeResult(entry) {
    var article = document.createElement('article');
    article.className = 'library-result';
    article.setAttribute('role', 'listitem');

    var body = document.createElement('div');
    var heading = document.createElement('h2');
    var link = document.createElement('a');
    link.href = entry.permalink;
    link.textContent = entry.title;
    heading.appendChild(link);
    body.appendChild(heading);

    if (entry.summary) {
      var summary = document.createElement('p');
      summary.textContent = entry.summary;
      body.appendChild(summary);
    }

    var meta = document.createElement('div');
    meta.className = 'library-result__meta';
    meta.textContent = typeLabel(entry.type) + (entry.date ? ' · ' + entry.date : '');
    body.appendChild(meta);
    article.appendChild(body);

    if (entry.score >= 0) {
      var score = document.createElement('span');
      score.className = 'library-result__score';
      score.textContent = entry.score.toFixed(1).replace('.0', '') + '/10';
      score.setAttribute('aria-label', '本站评分 ' + score.textContent);
      article.appendChild(score);
    }
    return article;
  }

  function render() {
    resultsNode.textContent = '';
    var visible = filteredEntries.slice(0, visibleCount);
    if (!visible.length) {
      var empty = document.createElement('div');
      empty.className = 'research-library__empty';
      empty.textContent = '没有符合条件的条目。请减少筛选条件或换一个关键词。';
      resultsNode.appendChild(empty);
    } else {
      var fragment = document.createDocumentFragment();
      visible.forEach(function (entry) { fragment.appendChild(makeResult(entry)); });
      resultsNode.appendChild(fragment);
    }
    countNode.textContent = '找到 ' + filteredEntries.length.toLocaleString('zh-CN') + ' 条，当前显示 ' + visible.length + ' 条';
    moreButton.hidden = visible.length >= filteredEntries.length;
  }

  function applyFilters() {
    var tokens = queryInput.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    var type = typeSelect.value;
    var year = yearSelect.value;
    filteredEntries = allEntries.filter(function (entry) {
      if (type !== 'all' && entry.type !== type) return false;
      if (year !== 'all' && entry.year !== year) return false;
      return tokens.every(function (token) { return entry.searchText.indexOf(token) !== -1; });
    });

    if (sortSelect.value === 'title') {
      filteredEntries.sort(function (a, b) { return a.title.localeCompare(b.title, 'zh-CN'); });
    } else if (sortSelect.value === 'score') {
      filteredEntries.sort(function (a, b) { return b.score - a.score || b.date.localeCompare(a.date); });
    } else {
      filteredEntries.sort(function (a, b) { return b.date.localeCompare(a.date) || a.title.localeCompare(b.title, 'zh-CN'); });
    }

    visibleCount = PAGE_SIZE;
    quickButtons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.query === queryInput.value.trim()));
    });
    writeState();
    render();
  }

  function populateYears() {
    var years = Array.from(new Set(allEntries.map(function (entry) { return entry.year; }).filter(Boolean))).sort().reverse();
    years.forEach(function (year) {
      var option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    });
  }

  var debounceTimer;
  queryInput.addEventListener('input', function () {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(applyFilters, 120);
  });
  [typeSelect, yearSelect, sortSelect].forEach(function (control) { control.addEventListener('change', applyFilters); });
  quickButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      queryInput.value = button.dataset.query;
      applyFilters();
    });
  });
  moreButton.addEventListener('click', function () {
    visibleCount += PAGE_SIZE;
    render();
  });

  function renderLoadError() {
    resultsNode.replaceChildren();
    var empty = document.createElement('div');
    empty.className = 'research-library__empty';
    empty.textContent = '静态索引暂时无法载入。请使用经典搜索或归档继续浏览。';
    resultsNode.appendChild(empty);
    countNode.textContent = '论文索引载入失败';
  }

  if (!indexUrl || !safeSiteUrl(indexUrl.href, window.location.origin, siteBasePath)) {
    renderLoadError();
    return;
  }

  fetch(indexUrl, { credentials: 'same-origin' })
    .then(function (response) {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.json();
    })
    .then(function (items) {
      var seen = new Set();
      if (!Array.isArray(items)) throw new Error('Index must be an array');
      allEntries = items.map(normalizeEntry).filter(function (entry) {
        if (!entry || entry.type === 'other' || seen.has(entry.permalink)) return false;
        seen.add(entry.permalink);
        return true;
      });
      populateYears();
      readState();
      applyFilters();
    })
    .catch(renderLoadError);
}());
