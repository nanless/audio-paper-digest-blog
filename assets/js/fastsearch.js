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
    if (header && item.originalTitle && item.originalTitle !== resultTitle(item)) {
      addText(listItem, 'div', 'entry-content', item.originalTitle);
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

fetch(indexUrl, { credentials: 'same-origin' })
  .then((response) => {
    if (!response.ok) throw new Error(`Search index HTTP ${response.status}`);
    return response.json();
  })
  .then((data) => {
    if (!Array.isArray(data)) throw new Error('Search index must be an array');
    const options = {
      isCaseSensitive: params.fuseOpts?.iscasesensitive ?? false,
      shouldSort: params.fuseOpts?.shouldsort ?? true,
      minMatchCharLength: params.fuseOpts?.minmatchcharlength ?? 1,
      threshold: params.fuseOpts?.threshold ?? 0.4,
      distance: params.fuseOpts?.distance ?? 1000,
      ignoreLocation: true,
      keys: params.fuseOpts?.keys ?? ['title', 'titleZh', 'originalTitle', 'summary', 'tags', 'task', 'arxivId']
    };
    fuse = new Fuse(data.filter((item) => item && safeSiteUrl(item.permalink)), options);
    search();
  })
  .catch(() => {
    clearResults();
    status.textContent = '搜索暂时不可用';
    addText(results, 'li', 'post-entry', '搜索索引暂时无法载入，请稍后重试。');
    const fallback = document.createElement('li');
    const link = document.createElement('a');
    link.href = new URL('archives/', indexUrl).href;
    link.textContent = '前往归档浏览';
    fallback.appendChild(link);
    results.appendChild(fallback);
  });

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
