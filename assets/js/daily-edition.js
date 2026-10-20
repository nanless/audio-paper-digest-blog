(function (root, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root && root.document) {
    root.ResearchDailyEdition = api;
    if (root.document.readyState === 'loading') root.document.addEventListener('DOMContentLoaded', function () { api.mount(root.document, root); });
    else api.mount(root.document, root);
  }
})(typeof window !== 'undefined' ? window : null, function () {
  'use strict';
  var PAGE_SIZE = 30;
  function clean(value) { return String(value == null ? '' : value).replace(/\s+/g, ' ').trim(); }
  function searchable(value) { return clean(value).normalize('NFKC').toLocaleLowerCase(); }
  function articlePath(href, base) {
    try {
      var url = new URL(href, base), origin = new URL(base);
      if (url.origin !== origin.origin || url.username || url.password || !/^https?:$/.test(url.protocol)) return '';
      var slug = url.pathname.match(/\/posts\/([^/]+)\/?$/);
      if (!slug || /^\d{4}-\d{2}-\d{2}$/.test(slug[1])) return '';
      return url.pathname.replace(/\/$/, '');
    } catch (_) { return ''; }
  }
  function paperLink(heading, base) {
    var links = Array.from(heading.querySelectorAll('a[href]')).filter(function (link) {
      return !link.classList.contains('anchor') && articlePath(link.getAttribute('href'), base);
    });
    return links.length === 1 ? links[0] : null;
  }
  function arxivSource(href) {
    var match = String(href || '').match(/^https:\/\/(?:www\.)?arxiv\.org\/(?:abs|pdf)\/(\d{4}\.\d{4,5})(?:v[1-9]\d*)?(?:\.pdf)?\/?(?:[?#].*)?$/i);
    return match ? { id: match[1], href: String(href) } : null;
  }
  function headingOrdinal(heading) {
    var title = clean(heading.textContent), medals = ['🥇', '🥈', '🥉'];
    for (var i = 0; i < medals.length; i++) if (title.startsWith(medals[i])) return i + 1;
    var match = title.match(/^(\d+)\.\s/); return match ? Number(match[1]) : null;
  }
  function targetLink(heading, base) {
    var links = Array.from(heading.querySelectorAll('a[href]')).filter(function (link) { return !link.classList.contains('anchor'); });
    if (links.length !== 1) return null;
    var link = links[0], href = link.getAttribute('href');
    if (articlePath(href, base)) return { link: link, kind: 'article', href: href };
    var source = arxivSource(href);
    return source ? { link: link, kind: 'source', href: source.href, sourceId: source.id } : null;
  }
  function headerSource(nodes) {
    // A paper's own metadata precedes scientific subheadings. References in its
    // analysis cannot supply a missing or ambiguous primary identity.
    var end = nodes.findIndex(function (node) { return /^H[123]$/.test(node.tagName); });
    var headers = nodes.slice(0, end < 0 ? nodes.length : end).filter(function (node) { return node.tagName === 'P'; }).slice(0, 3);
    var sources = new Map();
    headers.forEach(function (node) { Array.from(node.querySelectorAll('a[href]')).forEach(function (link) {
      var source = arxivSource(link.getAttribute('href')); if (source) sources.set(source.id, source);
    }); });
    return sources.size === 1 && scoreFromNodes(headers) !== null ? Array.from(sources.values())[0] : null;
  }
  function scoreFromNodes(nodes) {
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].tagName !== 'P') continue;
      var label = clean(nodes[i].textContent), match = label.match(/^[🔥⭐✅📝\s]*(?:评分[：:]\s*)?(\d+(?:\.\d+)?)\s*\/\s*10\b/u) || label.match(/^[🔥⭐✅📝\s]*(\d+(?:\.\d+)?)\s*分(?:\s|\||$)/u);
      if (match) { var value = Number(match[1]); return value >= 0 && value <= 10 ? value : null; }
    }
    return null;
  }
  function tasksFromNodes(nodes, base) {
    var labels = [];
    nodes.forEach(function (node) {
      Array.from(node.querySelectorAll('a[href]')).forEach(function (link) {
        try {
          var url = new URL(link.getAttribute('href'), base);
          if (url.origin === new URL(base).origin && /\/papers\/?$/.test(url.pathname) && /^task\./.test(url.searchParams.get('concept') || '')) {
            var label = clean(link.textContent); if (label && !labels.includes(label)) labels.push(label);
          }
        } catch (_) { /* An invalid resource URL cannot become a filter. */ }
      });
    });
    if (!labels.length) {
      var legacy = nodes.find(function (node) { return node.tagName === 'P' && /^[🔥⭐✅📝\s]*(?:评分[：:]\s*)?\d+(?:\.\d+)?\s*(?:分|\/\s*10)/u.test(clean(node.textContent)); });
      if (legacy) Array.from(clean(legacy.textContent).matchAll(/#([^\s#|]+)/g)).forEach(function (match) { if (!labels.includes(match[1])) labels.push(match[1]); });
      if (!labels.length) {
        var first = nodes.find(function (node) { return node.tagName === 'P'; });
        if (first && /^#[^\s#]+(?:\s+#[^\s#]+)*$/.test(clean(first.textContent))) Array.from(clean(first.textContent).matchAll(/#([^\s#]+)/g)).forEach(function (match) { if (!labels.includes(match[1])) labels.push(match[1]); });
      }
    }
    return labels;
  }
  // Prefer the bounded current format. Legacy fallbacks require the complete
  // numbered cohort or the old H2 paper-card structure, plus source metadata.
  function extractEntries(article, base) {
    if (!article) return [];
    var nodes = Array.from(article.children), listIndex = nodes.findIndex(function (node) { return node.tagName === 'H2' && /^(?:📋\s*)?论文列表\s*#?$/.test(clean(node.textContent)); });
    var firstCard = listIndex < 0 ? nodes.findIndex(function (node) { return node.tagName === 'H2' && /^📄\s+\S/.test(clean(node.textContent)); }) : -1;
    var start = listIndex >= 0 ? listIndex : firstCard;
    if (start < 0) return [];
    var nextSection = nodes.findIndex(function (node, index) { return index > listIndex && /^H[12]$/.test(node.tagName); });
    var end = nextSection < 0 ? nodes.length : nextSection;
    var countMatch = nodes.slice(0, start).map(function (node) { return clean(node.textContent); }).join(' ').match(/共分析\s*(\d+)\s*篇(?:语音\s*\/\s*AI\s*)?论文/);
    if (!countMatch || Number(countMatch[1]) < 1) return [];
    var members = [], strictSources = false;
    for (var i = listIndex + 1; listIndex >= 0 && i < end; i++) {
      if (nodes[i].tagName !== 'H3') continue;
      var link = paperLink(nodes[i], base);
      if (link) members.push({ heading: nodes[i], link: link, index: i, href: link.getAttribute('href'), kind: 'article' });
    }
    if (listIndex < 0) {
      strictSources = true; end = nodes.length;
      for (var c = firstCard; c < end; c++) if (nodes[c].tagName === 'H2' && /^📄\s+\S/.test(clean(nodes[c].textContent))) members.push({ heading: nodes[c], index: c, kind: 'source' });
    } else if (members.length !== Number(countMatch[1])) {
      members = []; strictSources = true; end = nodes.length;
      for (var h = listIndex + 1; h < end; h++) {
        if (nodes[h].tagName !== 'H3' || headingOrdinal(nodes[h]) === null) continue;
        var target = targetLink(nodes[h], base);
        if (!target || headingOrdinal(nodes[h]) !== members.length + 1) return [];
        members.push({ heading: nodes[h], link: target.link, index: h, href: target.href, kind: target.kind, sourceId: target.sourceId });
      }
    }
    if (members.length !== Number(countMatch[1])) return [];
    var ids = new Set(), paths = new Set(), sourceIdentities = new Set(), entries = [];
    for (var n = 0; n < members.length; n++) {
      var member = members[n], block = nodes.slice(member.index + 1, n + 1 < members.length ? members[n + 1].index : end);
      var source = strictSources ? headerSource(block) : null;
      if (strictSources && (!source || member.sourceId && source.id !== member.sourceId)) return [];
      if (source && sourceIdentities.has(source.id)) return [];
      if (source) sourceIdentities.add(source.id);
      if (!member.link) { member.href = source.href; member.sourceId = source.id; }
      var id = member.heading.id, path = member.kind === 'source' ? 'arxiv:' + source.id : articlePath(member.href, base), title = member.link ? clean(member.link.textContent) : clean(member.heading.textContent).replace(/^📄\s+/, '').replace(/\s*#$/, '');
      if (!id || ids.has(id) || !path || paths.has(path) || !title) return [];
      ids.add(id); paths.add(path);
      var tasks = tasksFromNodes(block, base);
      // Metadata, rather than copied article bodies, forms the small in-page search index.
      var metadata = block.filter(function (node) { return node.tagName === 'BLOCKQUOTE' && /英文题目[：:]/.test(node.textContent); }).slice(0, 1).map(function (node) { return clean(node.textContent); }).join(' ');
      var sourceIds = [];
      block.forEach(function (node) {
        Array.from(node.querySelectorAll('a[href]')).forEach(function (link) {
          var match = (link.getAttribute('href') || '').match(/^https:\/\/(?:www\.)?arxiv\.org\/(?:abs|pdf)\/(\d{4}\.\d{4,5})(?:v\d+)?(?:\.pdf)?(?:[?#]|$)/i);
          if (match && !sourceIds.includes(match[1])) sourceIds.push(match[1]);
        });
      });
      entries.push({ id: id, title: title, href: member.href, kind: member.kind, score: scoreFromNodes(block), tasks: tasks, order: n,
        search: searchable([title, metadata, tasks.join(' '), member.sourceId || '', sourceIds.join(' ')].join(' ')) });
    }
    return entries;
  }
  function stateFromParams(params) {
    var shown = Number(params.get('edition_show'));
    return { query: clean(params.get('edition_q')).slice(0, 200), task: clean(params.get('edition_task')).slice(0, 120),
      sort: params.get('edition_sort') === 'score' ? 'score' : 'original', shown: Number.isInteger(shown) && shown >= PAGE_SIZE ? Math.min(shown, 10000) : PAGE_SIZE };
  }
  function urlForState(href, state) {
    var url = new URL(href);
    [['edition_q', state.query], ['edition_task', state.task], ['edition_sort', state.sort === 'score' ? 'score' : ''], ['edition_show', state.shown > PAGE_SIZE ? String(state.shown) : '']].forEach(function (pair) {
      if (pair[1]) url.searchParams.set(pair[0], pair[1]); else url.searchParams.delete(pair[0]);
    });
    return url.pathname + url.search + url.hash;
  }
  function filterEntries(entries, state) {
    var terms = searchable(state.query).split(' ').filter(Boolean);
    var result = entries.filter(function (entry) { return (!state.task || entry.tasks.includes(state.task)) && terms.every(function (term) { return entry.search.includes(term); }); });
    if (state.sort === 'score') result.sort(function (a, b) { return (b.score == null ? -1 : b.score) - (a.score == null ? -1 : a.score) || a.order - b.order; });
    return result;
  }
  function mount(document, window) {
    var panel = document.getElementById('daily-edition-tools');
    if (!panel || panel.dataset.pageType !== 'daily' || panel.dataset.mounted === 'true') return null;
    var entries = extractEntries(document.getElementById('article-body'), window.location.href);
    if (!entries.length) return null;
    var query = document.getElementById('daily-edition-query'), task = document.getElementById('daily-edition-task'), taskField = document.getElementById('daily-edition-task-field'),
      sort = document.getElementById('daily-edition-sort'), clear = document.getElementById('daily-edition-clear'), list = document.getElementById('daily-edition-results'),
      status = document.getElementById('daily-edition-status'), empty = document.getElementById('daily-edition-empty'), more = document.getElementById('daily-edition-more'),
      directory = document.getElementById('daily-edition-directory'), summary = document.getElementById('daily-edition-summary');
    if ([query, task, taskField, sort, clear, list, status, empty, more].some(function (node) { return !node; })) return null;
    var tasks = Array.from(new Set(entries.flatMap(function (entry) { return entry.tasks; }))).sort(function (a, b) { return a.localeCompare(b, 'zh-CN'); });
    tasks.forEach(function (label) { var option = document.createElement('option'); option.value = label; option.textContent = label; task.appendChild(option); });
    taskField.hidden = !tasks.length;
    var state = stateFromParams(new URL(window.location.href).searchParams), pending = null, typed = false;
    function validState() { if (!tasks.includes(state.task)) state.task = ''; }
    if (summary) summary.textContent = '浏览本期完整目录 · 共' + entries.length + '篇';
    function revealActiveDirectory() {
      // Open for an explicit search/navigation intent, never on unrelated renders.
      // Native details owns later manual toggles and keeps keyboard focus intact.
      if (directory && (clean(state.query) || state.task || state.sort === 'score' || state.shown > PAGE_SIZE)) directory.open = true;
    }
    function link(parent, label, href, className) {
      var a = document.createElement('a'); a.textContent = label; a.href = href; a.className = className || ''; parent.appendChild(a); return a;
    }
    function render() {
      validState(); query.value = state.query; task.value = state.task; sort.value = state.sort;
      var matches = filterEntries(entries, state), visible = matches.slice(0, state.shown);
      list.replaceChildren();
      visible.forEach(function (entry) {
        var item = document.createElement('li'); item.className = 'daily-edition__item';
        var number = document.createElement('span'); number.className = 'daily-edition__number'; number.textContent = String(entry.order + 1).padStart(2, '0'); number.setAttribute('aria-hidden', 'true'); item.appendChild(number);
        var paper = document.createElement('div'); paper.className = 'daily-edition__paper';
        link(paper, entry.title, '#' + encodeURIComponent(entry.id), 'daily-edition__title');
        var meta = document.createElement('p'); meta.className = 'daily-edition__meta';
        var score = document.createElement('span'); score.className = 'daily-edition__score'; score.textContent = entry.score == null ? '本站评分未提供' : '本站评分 ' + entry.score.toFixed(1) + '/10'; meta.appendChild(score);
        if (entry.tasks.length) { var directions = document.createElement('span'); directions.textContent = entry.tasks.join(' · '); meta.appendChild(directions); }
        paper.appendChild(meta);
        var actions = document.createElement('div'); actions.className = 'daily-edition__actions';
        link(actions, '本期正文', '#' + encodeURIComponent(entry.id));
        var target = link(actions, entry.kind === 'source' ? '论文原文 ↗' : '独立全文 ↗', entry.href);
        if (entry.kind === 'source') { target.setAttribute('target', '_blank'); target.setAttribute('rel', 'noopener noreferrer'); }
        paper.appendChild(actions); item.appendChild(paper); list.appendChild(item);
      });
      status.textContent = '目录匹配 ' + matches.length + ' / ' + entries.length + ' 篇' + (visible.length < matches.length ? ' · 已显示 ' + visible.length + ' 篇' : '');
      empty.hidden = matches.length !== 0;
      more.hidden = visible.length >= matches.length;
      more.textContent = '再显示 ' + Math.min(PAGE_SIZE, matches.length - visible.length) + ' 篇（剩余 ' + Math.max(0, matches.length - visible.length) + ' 篇）';
      clear.disabled = !state.query && !state.task && state.sort === 'original' && state.shown === PAGE_SIZE;
    }
    function writeHistory(replace) {
      var next = urlForState(window.location.href, state), current = window.location.pathname + window.location.search + window.location.hash;
      if (next !== current) window.history[replace ? 'replaceState' : 'pushState'](window.history.state, '', next);
    }
    function cancelPending() { if (pending !== null) window.clearTimeout(pending); pending = null; }
    query.addEventListener('input', function (event) {
      if (event && event.isComposing) return;
      state.query = query.value.slice(0, 200); state.shown = PAGE_SIZE;
      // Keep the caret where the user is typing; don't replace the input's value on each key.
      var caret = query.selectionStart; render(); revealActiveDirectory(); if (typeof query.setSelectionRange === 'function' && caret !== null) query.setSelectionRange(caret, caret);
      cancelPending(); pending = window.setTimeout(function () { writeHistory(typed); typed = true; pending = null; }, 250);
    });
    query.addEventListener('change', function () { cancelPending(); writeHistory(typed); typed = false; });
    function change() { cancelPending(); state = { query: clean(query.value).slice(0, 200), task: task.value, sort: sort.value === 'score' ? 'score' : 'original', shown: PAGE_SIZE }; typed = false; render(); revealActiveDirectory(); writeHistory(false); }
    task.addEventListener('change', change); sort.addEventListener('change', change);
    clear.addEventListener('click', function () { cancelPending(); typed = false; state = { query: '', task: '', sort: 'original', shown: PAGE_SIZE }; render(); writeHistory(false); query.focus(); });
    more.addEventListener('click', function () {
      cancelPending(); var previousCount = list.children.length; state.shown += PAGE_SIZE; render(); revealActiveDirectory(); writeHistory(false);
      var firstAdded = list.children[previousCount]; if (firstAdded) firstAdded.querySelector('a').focus();
    });
    window.addEventListener('popstate', function () { cancelPending(); typed = false; state = stateFromParams(new URL(window.location.href).searchParams); render(); revealActiveDirectory(); });
    panel.dataset.mounted = 'true'; panel.hidden = false; render(); revealActiveDirectory();
    return { entries: entries, render: render };
  }
  return { pageSize: PAGE_SIZE, articlePath: articlePath, extractEntries: extractEntries, scoreFromNodes: scoreFromNodes, stateFromParams: stateFromParams, urlForState: urlForState, filterEntries: filterEntries, mount: mount };
});
