(function (global, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (global && global.document) {
    var start = function () { api.mount(global.document, global.ResearchTaxonomy, global.location); };
    if (global.document.readyState === 'loading') global.document.addEventListener('DOMContentLoaded', start, { once: true });
    else start();
  }
}(typeof window !== 'undefined' ? window : null, function () {
  'use strict';

  function normalize(value) { return String(value || '').normalize('NFKC').toLocaleLowerCase().trim(); }
  function searchConcepts(graph, query) {
    var normalized = normalize(query);
    if (!normalized) return [];
    return graph.search(normalized).map(function (concept) {
      return { concept: concept, path: graph.path(concept.id).map(function (node) { return node.zh; }).join(' › ') };
    });
  }
  function conceptURL(base, id) { return base + '?concept=' + encodeURIComponent(id); }
  function toggleChildren(button, children) {
    var open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    children.hidden = !open;
    return open;
  }
  function mount(document, core, location) {
    var root = document.getElementById('taxonomy-browser');
    var snapshotNode = document.getElementById('taxonomy-registry-data');
    if (!root || !snapshotNode || !core) return;
    var snapshot, graph;
    try {
      snapshot = JSON.parse(snapshotNode.textContent);
      var catalogNode = document.getElementById('taxonomy-catalog-data');
      var catalog = catalogNode ? JSON.parse(catalogNode.textContent) : undefined;
      graph = core.createRegistry(snapshot, catalog);
    }
    catch (_) { return; } // The server-rendered, linked tree remains available.
    var input = document.getElementById('taxonomy-query');
    var results = document.getElementById('taxonomy-search-results');
    var status = document.getElementById('taxonomy-search-status');
    var panel = document.getElementById('taxonomy-concept-panel');
    var facets = root.querySelector('.taxonomy-facets');
    var base = root.dataset.libraryUrl;
    var records = Object.create(null);
    snapshot.concepts.forEach(function (record) { records[record.id] = record; });
    function element(name, className, text) {
      var node = document.createElement(name);
      if (className) node.className = className;
      if (text != null) node.textContent = text;
      return node;
    }
    function showConcept(id) {
      var concept = graph.byId[id];
      if (!concept) return;
      panel.replaceChildren();
      panel.appendChild(element('strong', '', concept.zh));
      panel.appendChild(element('p', 'taxonomy-note', graph.path(id).map(function (node) { return node.zh; }).join(' › ')));
      if (concept.en) panel.appendChild(element('p', 'taxonomy-note', concept.en));
      if (concept.aliases.length) panel.appendChild(element('p', 'taxonomy-note', '别名：' + concept.aliases.join('、')));
      var record = records[id];
      ['definition', 'description', 'scope', 'scopeNote'].forEach(function (key) {
        var readable = core.readerScopeNote(record[key]);
        if (readable) panel.appendChild(element('p', 'taxonomy-note', readable));
      });
      var children = graph.children(id);
      if (children.length) panel.appendChild(element('p', 'taxonomy-note', '下级方向示例：' + children.map(function (child) { return child.zh; }).join('、')));
      panel.appendChild(element('p', 'taxonomy-note', '定义和范围说明来自对应的分类表。目录用于导航；旧文章保留发布时的名称和上级方向。0 条表示尚无已核分类记录，不代表此方向没有研究。'));
      var link = element('a', 'rw-action', '浏览这个方向的论文 →');
      link.href = conceptURL(base, id);
      panel.appendChild(link);
      panel.hidden = false;
    }
    root.querySelectorAll('[data-expand]').forEach(function (button) {
      var children = document.getElementById(button.getAttribute('aria-controls'));
      if (!children) return;
      button.hidden = false;
      button.setAttribute('aria-expanded', 'false');
      children.hidden = true;
      button.addEventListener('click', function () { toggleChildren(button, children); showConcept(button.dataset.expand); });
    });
    root.querySelectorAll('[data-concept-info]').forEach(function (link) {
      link.addEventListener('focus', function () { showConcept(link.dataset.conceptInfo); });
    });
    root.querySelectorAll('.taxonomy-facet-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        var facet = document.getElementById(link.hash.slice(1));
        if (facet) facet.open = true;
        input.value = '';
        results.hidden = true;
        facets.hidden = false;
        status.textContent = '选择分类视角，逐级浏览。';
      });
    });
    input.addEventListener('input', function () {
      var query = normalize(input.value);
      results.replaceChildren();
      results.hidden = !query;
      facets.hidden = Boolean(query);
      if (!query) { status.textContent = '选择分类视角，逐级浏览。'; return; }
      var matches = searchConcepts(graph, query);
      status.textContent = '找到 ' + matches.length + ' 个方向（名称、英文与别名）';
      if (!matches.length) results.appendChild(element('p', 'taxonomy-note', '没有匹配的方向。试试更短的词，或浏览下方分类视角。'));
      matches.forEach(function (match) {
        var link = element('a', 'taxonomy-search-result');
        link.href = conceptURL(base, match.concept.id);
        link.appendChild(element('strong', '', match.concept.zh));
        link.appendChild(element('span', 'taxonomy-note', (core.facetLabels[match.concept.facet] || match.concept.facet) + ' · ' + match.path));
        if (match.concept.en) link.appendChild(element('span', 'taxonomy-note', match.concept.en));
        if (match.concept.aliases.length) link.appendChild(element('span', 'taxonomy-note', '别名：' + match.concept.aliases.join('、')));
        link.addEventListener('focus', function () { showConcept(match.concept.id); });
        results.appendChild(link);
      });
    });
    var selected = new URLSearchParams(location ? location.search : '').get('concept');
    if (selected && graph.byId[selected]) showConcept(selected);
    root.classList.add('taxonomy-browser--ready');
  }
  return { mount: mount, searchConcepts: searchConcepts, conceptURL: conceptURL, toggleChildren: toggleChildren };
}));
