import * as params from '@params';

const input = document.getElementById('searchInput');
const results = document.getElementById('searchResults');
// Use the search page directory even when a static host has not added its slash.
const pageUrl = new URL(window.location.href);
pageUrl.search = '';
pageUrl.hash = '';
if (!pageUrl.pathname.endsWith('/')) pageUrl.pathname += '/';
const indexUrl = new URL('../index.json', pageUrl);
const siteBasePath = indexUrl.pathname.replace(/index\.json$/, '');
const status = document.getElementById('search-status') || document.createElement('p');
status.id = 'search-status';
status.className = 'search-status';
status.setAttribute('role', 'status');
status.setAttribute('aria-live', 'polite');
if (!status.parentNode) results.parentNode.insertBefore(status, results);
input.setAttribute('aria-describedby', status.id);
input.value = new URLSearchParams(window.location.search).get('q') || input.value;
status.textContent = '正在载入搜索索引…';
let fuse = null;
let resultLinks = [];
let activeIndex = -1;

function safeSiteUrl(value) {
  try {
    if (typeof value !== 'string' || !value.trim()) return null;
    const url = new URL(value, window.location.origin);
    if (!/^https?:$/.test(url.protocol)) return null;
    if (url.origin !== window.location.origin) return null;
    if (!url.pathname.startsWith(siteBasePath)) return null;
    if (url.username || url.password) return null;
    return url.href;
  } catch (_) {
    return null;
  }
}

function clearResults() {
  results.replaceChildren();
  resultLinks = [];
  activeIndex = -1;
}

function addText(parent, tagName, className, value) {
  if (!value) return null;
  const node = document.createElement(tagName);
  if (className) node.className = className;
  node.textContent = value;
  parent.appendChild(node);
  return node;
}

function resultTitle(item) {
  return item.titleZh || item.title || item.originalTitle || '未命名论文';
}

function render(matches) {
  clearResults();
  const fragment = document.createDocumentFragment();
  matches.forEach((match) => {
    const item = match.item || {};
    const href = safeSiteUrl(item.permalink);
    if (!href) return;

    const listItem = document.createElement('li');
    listItem.className = 'post-entry';
    const header = document.createElement('header');
    header.className = 'entry-header';
    addText(header, 'h2', '', resultTitle(item));
    listItem.appendChild(header);
    const originalTitle = item.originalTitle || item.title;
    if (header && originalTitle && originalTitle !== resultTitle(item)) {
      addText(listItem, 'div', 'entry-content', originalTitle);
    }
    addText(listItem, 'p', 'entry-content', String(item.summary || '').slice(0, 220));
    const score = String(item.score ?? '');
    const validScore = /^(?:\d+(?:\.\d+)?)$/.test(score) && Number(score) <= 10;
    const metaParts = [item.date, item.task, validScore && item.pageType === 'paper' ? `${score}/10` : '', item.arxivId ? `arXiv ${item.arxivId}` : ''].filter(Boolean);
    addText(listItem, 'div', 'entry-footer', metaParts.join(' · '));
    const link = document.createElement('a');
    link.className = 'entry-link';
    link.href = href;
    link.setAttribute('aria-label', `打开：${resultTitle(item)}`);
    listItem.appendChild(link);
    fragment.appendChild(listItem);
    resultLinks.push(link);
  });
  results.appendChild(fragment);
}

function search() {
  if (!fuse) return;
  const query = input.value.trim();
  const url = new URL(window.location.href);
  if (query) url.searchParams.set('q', query);
  else url.searchParams.delete('q');
  window.history.replaceState(null, '', url.pathname + url.search + url.hash);
  if (!query) {
    clearResults();
    status.textContent = '输入中文或英文标题、研究方向或 arXiv 编号开始搜索。';
    return;
  }
  const limit = Number(params.fuseOpts?.limit) || 20;
  const matches = fuse.search(query);
  render(matches.slice(0, limit));
  status.textContent = matches.length
    ? `找到 ${matches.length.toLocaleString('zh-CN')} 条结果，显示前 ${resultLinks.length} 条。`
    : '没有找到匹配的内容。请换一个关键词，或缩短论文标题。';
}

function focusResult(index) {
  if (!resultLinks.length) return;
  activeIndex = Math.max(0, Math.min(index, resultLinks.length - 1));
  resultLinks.forEach((link, position) => link.parentElement.classList.toggle('focus', position === activeIndex));
  resultLinks[activeIndex].focus();
}

// registry 快照补出概念的 zh/en、aliases 与祖先链；经典 Fuse 搜索因此也能用
// 父概念名（参数高效微调）或别名（说话人日志）召回子概念论文。
function registryIndex(registry) {
  const byId = new Map();
  const records = registry && !Array.isArray(registry) && Array.isArray(registry.concepts)
    ? registry.concepts : null;
  for (const record of records || []) {
    if (record && typeof record === 'object' && typeof record.id === 'string' && record.id) {
      byId.set(record.id, record);
    }
  }
  return byId;
}

function taxonomyAliases(concepts, byId) {
  if (!Array.isArray(concepts)) return [];
  const terms = [];
  const push = (...values) => {
    for (const value of values) {
      if (typeof value === 'string' && value.trim()) terms.push(value.trim());
    }
  };
  for (const concept of concepts) {
    if (!concept || typeof concept !== 'object' || Array.isArray(concept)) continue;
    const record = typeof concept.id === 'string' ? byId.get(concept.id) : null;
    const source = record || concept;
    push(concept.id, concept.facet, concept.label, source.zh, source.en);
    if (Array.isArray(source.aliases)) push(...source.aliases);
    const ancestorIds = Array.isArray(concept.ancestorIds) && concept.ancestorIds.length
      ? concept.ancestorIds
      : record && Array.isArray(record.ancestorIds) ? record.ancestorIds : [];
    for (const ancestorId of ancestorIds) {
      const ancestor = byId.get(ancestorId);
      if (!ancestor) continue;
      push(ancestorId, ancestor.zh, ancestor.en);
      if (Array.isArray(ancestor.aliases)) push(...ancestor.aliases);
    }
  }
  return terms;
}

function loadIndex() {
  function read() {
    if (window.ResearchSearchIndex) {
      return window.ResearchSearchIndex.load(indexUrl.href, { origin: window.location.origin, basePath: siteBasePath,
        onProgress: progress => { if (progress.phase === 'shards') status.textContent = '正在校验搜索索引：' + progress.completed + ' / ' + progress.total + ' 份'; } });
    }
    // Older cached pages and small Hugo fixtures still use the array contract.
    return fetch(indexUrl, { credentials: 'same-origin' }).then((response) => {
      if (!response.ok) throw new Error(`Search index HTTP ${response.status}`);
      return response.json();
    });
  }
  // PaperMod queues fastsearch in the head; the page-owned loader follows it.
  if (!window.ResearchSearchIndex && document.readyState === 'interactive') {
    return new Promise((resolve, reject) => document.addEventListener('DOMContentLoaded',
      () => read().then(resolve, reject), { once: true }));
  }
  return read();
}

let loadingIndex = false;
function startLoad() {
if (loadingIndex) return;
loadingIndex = true; status.textContent = '正在载入搜索索引…';
return loadIndex()
  .then((data) => {
    if (!Array.isArray(data)) throw new Error('Search index must be an array');
    return fetch(new URL('data/taxonomy-registry.json', indexUrl), { credentials: 'same-origin' })
      .then((response) => (response && response.ok ? response.json() : null))
      .catch(() => null)
      .then(registry => fetch(new URL('data/taxonomy-catalog.json', indexUrl), { credentials: 'same-origin' })
        .then(response => response && response.ok ? response.json() : null).catch(() => null)
        .then(catalog => ({ data, registry, catalog })));
  })
  .then((payload) => {
    const { data, registry, catalog } = payload;
    let graph = null;
    if (window.ResearchTaxonomy && registry) {
      try { graph = window.ResearchTaxonomy.createRegistry(registry, catalog); } catch (_) {}
    }
    const options = {
      isCaseSensitive: params.fuseOpts?.iscasesensitive ?? false,
      shouldSort: params.fuseOpts?.shouldsort ?? true,
      minMatchCharLength: params.fuseOpts?.minmatchcharlength ?? 1,
      threshold: params.fuseOpts?.threshold ?? 0.4,
      distance: params.fuseOpts?.distance ?? 1000,
      ignoreLocation: true,
      keys: params.fuseOpts?.keys ?? ['title', 'titleZh', 'originalTitle', 'summary', 'tags', 'task', 'method', 'categories', 'arxivId', 'taxonomyAliases']
    };
    const byId = registryIndex(registry);
    const entries = data.filter((item) => item && safeSiteUrl(item.permalink)).map((item) => {
      const signedRegistry = graph && (graph.versions[item.taxonomyRegistrySha256]
        || (!graph.hasVersionCatalog && !item.taxonomyRegistrySha256 ? graph : null));
      const aliases = graph ? signedRegistry ? taxonomyAliases(graph.resolveRecord(item).concepts,
        new Map(Object.entries(signedRegistry.byId))) : [] : taxonomyAliases(item.taxonomyConcepts, byId);
      return aliases.length ? { ...item, taxonomyAliases: aliases } : item;
    });
    fuse = new Fuse(entries, options);
    loadingIndex = false;
    search();
  })
  .catch(() => {
    loadingIndex = false;
    clearResults();
    status.textContent = '搜索暂时不可用';
    addText(results, 'li', 'post-entry', '搜索索引暂时无法载入，请稍后重试。');
    const fallback = document.createElement('li');
    const link = document.createElement('a');
    link.href = new URL('archives/', indexUrl).href;
    link.textContent = '前往归档浏览';
    fallback.appendChild(link);
    results.appendChild(fallback);
    const retryItem = document.createElement('li');
    const retry = document.createElement('button'); retry.type = 'button'; retry.className = 'rw-action'; retry.textContent = '重新载入搜索索引';
    retry.addEventListener('click', startLoad); retryItem.appendChild(retry); results.appendChild(retryItem);
  });
}
startLoad();

input.addEventListener('input', search);
input.addEventListener('search', search);
if (input.form) input.form.addEventListener('submit', (event) => { event.preventDefault(); search(); });
window.addEventListener('popstate', () => {
  input.value = new URLSearchParams(window.location.search).get('q') || '';
  search();
});
input.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown' && resultLinks.length) {
    event.preventDefault();
    focusResult(0);
  } else if (event.key === 'Escape') {
    clearResults();
    input.value = '';
    search();
  }
});

results.addEventListener('keydown', (event) => {
  if (!resultLinks.length) return;
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    focusResult(activeIndex + 1);
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    if (activeIndex <= 0) {
      activeIndex = -1;
      resultLinks.forEach((link) => link.parentElement.classList.remove('focus'));
      input.focus();
    } else {
      focusResult(activeIndex - 1);
    }
  } else if (event.key === 'Escape') {
    clearResults();
    input.value = '';
    search();
    input.focus();
  }
});
