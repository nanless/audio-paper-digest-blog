import * as params from '@params';

const input = document.getElementById('searchInput');
const results = document.getElementById('searchResults');
const indexUrl = new URL('../index.json', window.location.href);
const siteBasePath = indexUrl.pathname.replace(/index\.json$/, '');
let fuse = null;
let resultLinks = [];
let activeIndex = -1;

function safeSiteUrl(value) {
  try {
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
    const header = addText(listItem, 'header', 'entry-header', resultTitle(item));
    if (header && item.originalTitle && item.originalTitle !== resultTitle(item)) {
      addText(listItem, 'div', 'entry-content', item.originalTitle);
    }
    const metaParts = [item.date, item.task, item.score ? `${item.score}/10` : ''].filter(Boolean);
    addText(listItem, 'div', 'entry-footer', metaParts.join(' · '));
    const link = document.createElement('a');
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
  if (!query) {
    clearResults();
    return;
  }
  const limit = Number(params.fuseOpts?.limit) || 20;
  render(fuse.search(query, { limit }));
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
    fuse = new Fuse(data, options);
    search();
  })
  .catch(() => {
    clearResults();
    addText(results, 'li', 'post-entry', '搜索索引暂时无法载入，请稍后重试。');
  });

input.addEventListener('input', search);
input.addEventListener('search', search);
input.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown' && resultLinks.length) {
    event.preventDefault();
    focusResult(0);
  } else if (event.key === 'Escape') {
    clearResults();
    input.value = '';
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
    input.focus();
  }
});
