(function () {
  'use strict';

  var PAGE_SIZE = 30;

  function plainText(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function searchText(value) {
    return plainText(value).normalize('NFKC').toLocaleLowerCase();
  }

  function entryDate(value) {
    var match = plainText(value).match(/\b(20\d{2}-\d{2}-\d{2})\b/);
    if (!match) return '';
    var parsed = new Date(match[1] + 'T00:00:00Z');
    return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === match[1] ? match[1] : '';
  }

  function classify(permalink, title) {
    var match = new URL(permalink).pathname.match(/\/posts\/([^/]+)\/?$/);
    if (!match) return 'other';
    var slug = match[1];
    if (/^\d{4}-\d{2}-\d{2}$/.test(slug) || /论文速递\s+\d{4}-\d{2}-\d{2}/.test(title)) return 'daily';
    if (/^(icassp|iclr|icml)\d{4}-(summary|task-.+)$/.test(slug)) return 'conference';
    return 'paper';
  }

  function normalizeEntry(item, origin, basePath) {
    if (!item || typeof item !== 'object') return null;
    var permalink = safeSiteUrl(item.permalink, origin, basePath);
    if (!permalink) return null;
    var originalTitle = plainText(item.originalTitle || item.title);
    var title = plainText(item.titleZh || item.title) || '未命名论文';
    var summary = plainText(item.summary);
    var date = entryDate(item.date) || entryDate(permalink + ' ' + title);
    var type = ['paper', 'daily', 'conference', 'page'].includes(item.pageType)
      ? item.pageType : classify(permalink, title);
    var rawScore = item.score;
    if (rawScore === undefined || rawScore === null || rawScore === '') {
      var match = summary.match(/(?:^|[^\d.])([0-9]+(?:\.[0-9]+)?)\s*\/\s*10\b/);
      rawScore = match ? match[1] : '';
    }
    var score = rawScore !== '' && /^(?:\d+(?:\.\d+)?)$/.test(String(rawScore)) ? Number(rawScore) : -1;
    if (!Number.isFinite(score) || score < 0 || score > 10 || type !== 'paper') score = -1;
    var task = plainText(item.task);
    var arxivId = plainText(item.arxivId);
    var tags = Array.isArray(item.tags) ? item.tags.map(plainText) : [];
    var categories = Array.isArray(item.categories) ? item.categories.map(plainText) : [];
    return {
      title: title, originalTitle: originalTitle, permalink: permalink, summary: summary,
      type: type, date: date, year: date.slice(0, 4), score: score, task: task, arxivId: arxivId,
      searchText: searchText([title, originalTitle, item.title, summary, permalink, task, arxivId].concat(tags, categories).join(' '))
    };
  }

  function filterEntries(entries, state) {
    var tokens = searchText(state.query).split(/\s+/).filter(Boolean);
    return entries.filter(function (entry) {
      return (state.type === 'all' || entry.type === state.type)
        && (state.year === 'all' || entry.year === state.year)
        && tokens.every(function (token) { return entry.searchText.includes(token); });
    }).sort(function (a, b) {
      var tie = a.title.localeCompare(b.title, 'zh-CN') || a.permalink.localeCompare(b.permalink);
      if (state.sort === 'title') return tie;
      return (state.sort === 'score' ? b.score - a.score : 0) || b.date.localeCompare(a.date) || tie;
    });
  }

  function safeSiteUrl(value, origin, siteBasePath) {
    try {
      if (typeof value !== 'string' || !value.trim() || !siteBasePath || !siteBasePath.endsWith('/')) return null;
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
    module.exports = { safeSiteUrl: safeSiteUrl, normalizeEntry: normalizeEntry, filterEntries: filterEntries, entryDate: entryDate };
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

  function typeLabel(type) {
    return type === 'daily' ? '每日速递' : type === 'conference' ? '会议专题' : '论文解读';
  }

  function readState() {
    var params = new URLSearchParams(window.location.search);
    queryInput.value = params.get('q') || '';
    typeSelect.value = ['paper', 'daily', 'conference', 'all'].includes(params.get('type')) ? params.get('type') : 'paper';
    yearSelect.value = params.get('year') || 'all';
    if (!yearSelect.value) yearSelect.value = 'all';
    sortSelect.value = ['newest', 'score', 'title'].includes(params.get('sort')) ? params.get('sort') : 'newest';
    var page = Number(params.get('page'));
    visibleCount = Number.isInteger(page) && page > 0 ? Math.min(page * PAGE_SIZE, Math.max(PAGE_SIZE, allEntries.length)) : PAGE_SIZE;
  }

  function writeState() {
    var params = new URLSearchParams();
    if (queryInput.value.trim()) params.set('q', queryInput.value.trim());
    if (typeSelect.value !== 'paper') params.set('type', typeSelect.value);
    if (yearSelect.value !== 'all') params.set('year', yearSelect.value);
    if (sortSelect.value !== 'newest') params.set('sort', sortSelect.value);
    if (visibleCount > PAGE_SIZE) params.set('page', Math.ceil(visibleCount / PAGE_SIZE));
    var suffix = window.location.pathname + (params.toString() ? '?' + params.toString() : '') + window.location.hash;
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

    if (entry.originalTitle && entry.originalTitle !== entry.title) {
      var original = document.createElement('p');
      original.className = 'library-result__original-title';
      original.textContent = entry.originalTitle;
      body.appendChild(original);
    }

    if (entry.summary) {
      var summary = document.createElement('p');
      summary.textContent = entry.summary;
      body.appendChild(summary);
    }

    var meta = document.createElement('div');
    meta.className = 'library-result__meta';
    meta.textContent = [typeLabel(entry.type), entry.date, entry.task, entry.arxivId ? 'arXiv ' + entry.arxivId : ''].filter(Boolean).join(' · ');
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
      var reset = document.createElement('button');
      reset.type = 'button';
      reset.className = 'rw-action';
      reset.textContent = '清除筛选';
      reset.addEventListener('click', function () {
        queryInput.value = '';
        typeSelect.value = 'paper';
        yearSelect.value = 'all';
        sortSelect.value = 'newest';
        applyFilters();
        queryInput.focus();
      });
      empty.appendChild(reset);
      resultsNode.appendChild(empty);
    } else {
      var fragment = document.createDocumentFragment();
      visible.forEach(function (entry) { fragment.appendChild(makeResult(entry)); });
      resultsNode.appendChild(fragment);
    }
    countNode.textContent = '找到 ' + filteredEntries.length.toLocaleString('zh-CN') + ' 条，当前显示 ' + visible.length + ' 条';
    moreButton.hidden = visible.length >= filteredEntries.length;
  }

  function applyFilters(preservePage) {
    filteredEntries = filterEntries(allEntries, {
      query: queryInput.value, type: typeSelect.value, year: yearSelect.value, sort: sortSelect.value
    });
    if (preservePage !== true) visibleCount = PAGE_SIZE;
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
    writeState();
    render();
  });
  var form = document.getElementById('paper-library-filters');
  if (form) form.addEventListener('submit', function (event) { event.preventDefault(); applyFilters(); });
  window.addEventListener('popstate', function () { readState(); applyFilters(true); });

  function renderLoadError() {
    resultsNode.replaceChildren();
    var empty = document.createElement('div');
    empty.className = 'research-library__empty';
    empty.textContent = '静态索引暂时无法载入。请使用经典搜索或归档继续浏览。';
    resultsNode.appendChild(empty);
    countNode.textContent = '论文索引载入失败';
    moreButton.hidden = true;
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
      allEntries = items.map(function (item) {
        return normalizeEntry(item, window.location.origin, siteBasePath);
      }).filter(function (entry) {
        if (!entry || !['paper', 'daily', 'conference'].includes(entry.type) || seen.has(entry.permalink)) return false;
        seen.add(entry.permalink);
        return true;
      });
      populateYears();
      readState();
      applyFilters(true);
    })
    .catch(renderLoadError);
}());
