(function () {
  'use strict';

  var PAGE_SIZE = 30;

  function plainText(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function searchText(value) {
    return plainText(value).normalize('NFKC').toLocaleLowerCase();
  }

  // data/taxonomy-registry.json 的精简索引：页面 frontmatter 只带 {id, facet,
  // label}，zh/en、aliases 与祖先链都要从快照补齐（对齐 tag-explorer 的做法）。
  function registryIndex(registry) {
    var byId = Object.create(null);
    var records = registry && !Array.isArray(registry) && Array.isArray(registry.concepts)
      ? registry.concepts : null;
    if (!records) return byId;
    records.forEach(function (record) {
      if (record && typeof record === 'object' && typeof record.id === 'string' && record.id) {
        byId[record.id] = record;
      }
    });
    return byId;
  }

  function conceptTerms(concept, byId) {
    if (!concept || typeof concept !== 'object' || Array.isArray(concept)) return [];
    var terms = [concept.id, concept.facet, concept.label];
    var record = typeof concept.id === 'string' && byId ? byId[concept.id] : null;
    // 父概念名（如 method.peft 的“参数高效微调”）只存在于快照，靠祖先链回查。
    var source = record || concept;
    terms.push(source.zh, source.en);
    if (Array.isArray(source.aliases)) terms = terms.concat(source.aliases);
    var ancestorIds = Array.isArray(concept.ancestorIds) && concept.ancestorIds.length
      ? concept.ancestorIds
      : record && Array.isArray(record.ancestorIds) ? record.ancestorIds : [];
    ancestorIds.forEach(function (ancestorId) {
      var ancestor = byId ? byId[ancestorId] : null;
      if (!ancestor) return;
      terms.push(ancestorId, ancestor.zh, ancestor.en);
      if (Array.isArray(ancestor.aliases)) terms = terms.concat(ancestor.aliases);
    });
    return terms;
  }

  function taxonomyTerms(value, byId) {
    if (!Array.isArray(value)) return [];
    var index = byId || Object.create(null);
    return value.flatMap(function (concept) {
      return conceptTerms(concept, index);
    }).map(plainText).filter(Boolean);
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

  function normalizeEntry(item, origin, basePath, registry, versionGraph) {
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
    var method = plainText(item.method);
    var arxivId = plainText(item.arxivId);
    var tags = Array.isArray(item.tags) ? item.tags.map(plainText) : [];
    var categories = Array.isArray(item.categories) ? item.categories.map(plainText) : [];
    var signedRegistry = versionGraph && (versionGraph.versions[item.taxonomyRegistrySha256]
      || (!versionGraph.hasVersionCatalog && !item.taxonomyRegistrySha256 ? versionGraph : null));
    var taxonomy = versionGraph ? signedRegistry
      ? taxonomyTerms(versionGraph.resolveRecord(item).concepts, signedRegistry.byId) : []
      : taxonomyTerms(item.taxonomyConcepts, registryIndex(registry));
    return {
      title: title, originalTitle: originalTitle, permalink: permalink, summary: summary,
      type: type, pageType: type, date: date, year: date.slice(0, 4), score: score, task: task, method: method, arxivId: arxivId,
      paperId: plainText(item.paperId), identityStatus: plainText(item.identityStatus), sourceKind: plainText(item.sourceKind),
      identityEvidenceContract: plainText(item.identityEvidenceContract), identityEvidenceType: plainText(item.identityEvidenceType),
      identityProofSha256: plainText(item.identityProofSha256), identityPageSha256: plainText(item.identityPageSha256),
      taxonomyContract: plainText(item.taxonomyContract), taxonomyConcepts: Array.isArray(item.taxonomyConcepts) ? item.taxonomyConcepts : [],
      taxonomyRegistrySha256: plainText(item.taxonomyRegistrySha256), citation: item.citation && typeof item.citation === 'object' ? item.citation : {},
      taxonomyEvidenceContract: plainText(item.taxonomyEvidenceContract), taxonomyEvidenceType: plainText(item.taxonomyEvidenceType),
      taxonomyProofSha256: plainText(item.taxonomyProofSha256), taxonomyPageSha256: plainText(item.taxonomyPageSha256),
      primaryTaskId: plainText(item.primaryTaskId), primaryMethodId: plainText(item.primaryMethodId),
      taxonomyClassificationContract: plainText(item.taxonomyClassificationContract),
      researchType: plainText(item.researchType), domainScope: plainText(item.domainScope),
      primaryResearchRole: item.primaryResearchRole && typeof item.primaryResearchRole === 'object' ? item.primaryResearchRole : null,
      primaryScientificTopicId: plainText(item.primaryScientificTopicId),
      methodNotApplicable: item.methodNotApplicable, methodNotApplicableReason: plainText(item.methodNotApplicableReason),
      searchText: searchText([title, originalTitle, item.title, summary, permalink, task, method, arxivId]
        .concat(tags, categories, taxonomy, item.primaryResearchRole && item.primaryResearchRole.label || '').join(' '))
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
      if (state.sort === 'relevance') {
        function relevance(entry) {
          var title = searchText(entry.title + ' ' + entry.originalTitle), query = searchText(state.query);
          return (query && searchText(entry.arxivId) === query ? 100 : 0) + (query && title.includes(query) ? 30 : 0)
            + tokens.reduce(function (score, token) { return score + (title.includes(token) ? 10 : searchText(entry.task + ' ' + entry.method).includes(token) ? 4 : 1); }, 0);
        }
        var order = relevance(b) - relevance(a); if (order) return order;
      }
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

  function directionState(params, graph) {
    var facets = Object.create(null);
    var error = '';
    params.getAll('concept').forEach(function (id) {
      var node = graph && graph.byId[id];
      if (!node || node.status === 'deprecated') { error = '链接中的研究方向无法在当前目录确认：' + id; return; }
      if (!facets[node.facet]) facets[node.facet] = [];
      if (!facets[node.facet].includes(id)) facets[node.facet].push(id);
    });
    var domainScope = params.get('domain') || 'all', researchType = params.get('researchType') || 'all';
    if (!['all', 'unclassified', 'in-domain', 'cross-domain', 'adjacent-domain', 'out-of-domain'].includes(domainScope)) error = '链接中的研究范围无法确认。';
    if (!['all', 'unclassified', 'engineering', 'science', 'analysis', 'evaluation', 'resource', 'review', 'experience', 'position'].includes(researchType)) error = '链接中的研究类型无法确认。';
    return { facets: facets, scope: params.get('scope') === 'direct' ? 'direct' : 'subtree', domainScope: domainScope, researchType: researchType,
      role: params.get('role') === 'primary' ? 'primary' : 'any', error: error,
      requestedIds: params.getAll('concept') };
  }

  function selectedIds(state) {
    return Object.keys(state.facets || {}).flatMap(function (facet) { return state.facets[facet]; });
  }

  function cloneDirections(state) {
    var facets = Object.create(null);
    Object.keys(state.facets || {}).forEach(function (facet) { facets[facet] = state.facets[facet].slice(); });
    return { facets: facets, scope: state.scope, role: state.role, domainScope: state.domainScope || 'all', researchType: state.researchType || 'all', error: state.error || '',
      requestedIds: (state.requestedIds || []).slice() };
  }

  // Group only authenticated identities. Article-level keyword/year eligibility
  // is evaluated first, but every guide for an eligible paper remains available.
  function libraryResults(entries, groups, state, directions, graph, api) {
    var eligible = filterEntries(entries, state);
    if (directions.error) return [];
    var hasDirection = selectedIds(directions).length > 0 || (directions.domainScope && directions.domainScope !== 'all') || (directions.researchType && directions.researchType !== 'all');
    if (!api || !graph) return hasDirection ? [] : eligible;
    var ranks = new Map(eligible.map(function (entry, index) { return [entry.permalink, index]; }));
    // Build query groups from eligible guides, so a keyword/year hit in one
    // article cannot borrow classifications from another guide for that paper.
    var candidates = api.groupPapers(eligible, graph);
    var originalGroups = new Map(groups.map(function (group) { return [group.key, group]; }));
    var matched = api.query(candidates, directions, graph).map(function (group) {
      var original = originalGroups.get(group.key) || group;
      var matchingArticles = hasDirection ? group.articles.filter(function (article) {
        return api.query(api.groupPapers([article], graph), directions, graph).length > 0;
      }) : group.articles;
      var representative = matchingArticles.slice().sort(function (a, b) { return ranks.get(a.permalink) - ranks.get(b.permalink); })[0];
      var guides = original.articles.slice().sort(function (a, b) {
        if (a.permalink === representative.permalink) return -1;
        if (b.permalink === representative.permalink) return 1;
        return (ranks.has(a.permalink) ? ranks.get(a.permalink) : Infinity)
          - (ranks.has(b.permalink) ? ranks.get(b.permalink) : Infinity) || b.date.localeCompare(a.date);
      });
      return Object.assign({}, representative, { guides: guides, paperGroup: group, rank: ranks.get(representative.permalink) });
    });
    if (!hasDirection) eligible.filter(function (entry) { return entry.type !== 'paper'; }).forEach(function (entry) {
      matched.push(Object.assign({}, entry, { rank: ranks.get(entry.permalink) }));
    });
    return matched.sort(function (a, b) { return a.rank - b.rank; });
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      safeSiteUrl: safeSiteUrl,
      normalizeEntry: normalizeEntry,
      filterEntries: filterEntries,
      entryDate: entryDate,
      registryIndex: registryIndex,
      taxonomyTerms: taxonomyTerms,
      directionState: directionState,
      selectedIds: selectedIds,
      libraryResults: libraryResults,
    };
  }

  if (typeof document === 'undefined') return;
  var root = document.getElementById('paper-library');
  if (!root) return;

  // Native disclosure controls keep all filters keyboard accessible and usable
  // without JavaScript, while letting small screens reach the results sooner.
  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
    var compactPanels = window.matchMedia('(max-width: 600px)');
    function syncCompactPanels() {
      ['library-filter-panel', 'library-export-panel'].forEach(function (id) {
        var detail = document.getElementById(id);
        if (detail) detail.open = !compactPanels.matches;
      });
    }
    syncCompactPanels();
    if (compactPanels.addEventListener) compactPanels.addEventListener('change', syncCompactPanels);
  }

  var queryInput = document.getElementById('library-query');
  var typeSelect = document.getElementById('library-type');
  var yearSelect = document.getElementById('library-year');
  var sortSelect = document.getElementById('library-sort');
  var exportStatus = document.getElementById('library-export-status');
  var selectedPapers = new Map();
  var countNode = document.getElementById('library-count');
  var resultsNode = document.getElementById('library-results');
  var moreButton = document.getElementById('library-more');
  var quickButtons = Array.prototype.slice.call(document.querySelectorAll('[data-query]'));
  var directionButtons = Array.prototype.slice.call(document.querySelectorAll('[data-concept]'));
  var panel = document.getElementById('library-direction-panel');
  var treeNode = document.getElementById('library-direction-tree');
  var selectedNode = document.getElementById('library-directions');
  var coverageNode = document.getElementById('library-coverage');
  var scopeSelect = document.getElementById('library-scope');
  var roleSelect = document.getElementById('library-role');
  var domainSelect = document.getElementById('library-domain-scope');
  var researchTypeSelect = document.getElementById('library-research-type');
  var directionSearch = document.getElementById('library-direction-search');
  var draftNode = document.getElementById('library-draft-status');
  var api = window.ResearchTaxonomy;
  var graph = null;
  var registryRecords = Object.create(null);
  var groups = [];
  var directions = { facets: {}, scope: 'subtree', role: 'any', error: '', requestedIds: [] };
  var draft = cloneDirections(directions);
  var expanded = new Set();
  var nodeViews = Object.create(null);
  var facetViews = Object.create(null);
  var moreFacetView = null;
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
    sortSelect.value = ['newest', 'score', 'title', 'relevance'].includes(params.get('sort')) ? params.get('sort') : 'newest';
    var page = Number(params.get('page'));
    visibleCount = Number.isInteger(page) && page > 0 ? Math.min(page * PAGE_SIZE, Math.max(PAGE_SIZE, allEntries.length)) : PAGE_SIZE;
    directions = directionState(params, graph);
    if (domainSelect) domainSelect.value = directions.domainScope;
    if (researchTypeSelect) researchTypeSelect.value = directions.researchType;
    draft = cloneDirections(directions);
    selectedIds(directions).forEach(function (id) {
      graph.path(id).forEach(function (node) { expanded.add(node.id); });
    });
  }

  function writeState(push) {
    var params = new URLSearchParams();
    if (queryInput.value.trim()) params.set('q', queryInput.value.trim());
    if (typeSelect.value !== 'paper') params.set('type', typeSelect.value);
    if (yearSelect.value !== 'all') params.set('year', yearSelect.value);
    if (sortSelect.value !== 'newest') params.set('sort', sortSelect.value);
    if (visibleCount > PAGE_SIZE) params.set('page', Math.ceil(visibleCount / PAGE_SIZE));
    (directions.error ? directions.requestedIds : selectedIds(directions)).forEach(function (id) { params.append('concept', id); });
    if (directions.scope === 'direct') params.set('scope', 'direct');
    if (directions.role === 'primary') params.set('role', 'primary');
    if (directions.domainScope && directions.domainScope !== 'all') params.set('domain', directions.domainScope);
    if (directions.researchType && directions.researchType !== 'all') params.set('researchType', directions.researchType);
    var suffix = window.location.pathname + (params.toString() ? '?' + params.toString() : '') + window.location.hash;
    var historyMethod = push && window.history.pushState ? 'pushState' : 'replaceState';
    window.history[historyMethod](null, '', suffix);
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
    meta.textContent = [typeLabel(entry.type), entry.date, entry.task, entry.method,
      entry.arxivId ? 'arXiv ' + entry.arxivId : ''].filter(Boolean).join(' · ');
    body.appendChild(meta);
    if (entry.taxonomyClassificationContract === 'historical-source-taxonomy-classification-v2' && entry.primaryResearchRole) {
      var roles = document.createElement('p'); roles.className = 'taxonomy-note';
      roles.textContent = [api.researchTypeLabels[entry.researchType], api.domainLabels[entry.domainScope],
        (api.roleLabels[entry.primaryResearchRole.kind] || '主要研究角色') + '：' + entry.primaryResearchRole.label,
        entry.methodNotApplicable === true ? '研究方法不适用' : ''].filter(Boolean).join(' · ');
      body.appendChild(roles);
    }
    if (['historical-direct-taxonomy-supplement-v1', 'historical-source-taxonomy-supplement-v2'].includes(entry.taxonomyEvidenceContract)) {
      var classificationNote = document.createElement('p'); classificationNote.className = 'taxonomy-note';
      classificationNote.textContent = '历史分类已补充核验 · 原文和原有标签保留'; body.appendChild(classificationNote);
    } else if (entry.identityEvidenceContract === 'historical-source-identity-supplement-v1' && !entry.taxonomyContract) {
      var identityNote = document.createElement('p'); identityNote.className = 'taxonomy-note';
      identityNote.textContent = '论文身份已核验 · 研究方向尚待分类'; body.appendChild(identityNote);
    }
    if (entry.type === 'paper') {
      var key = paperKey(entry);
      var chooseLabel = document.createElement('label'); chooseLabel.className = 'library-export-select';
      var choose = document.createElement('input'); choose.type = 'checkbox'; choose.checked = selectedPapers.has(key);
      choose.setAttribute('aria-label', '选择导出：' + entry.title); chooseLabel.appendChild(choose);
      var chooseText = document.createElement('span'); chooseText.textContent = '加入导出清单'; chooseLabel.appendChild(chooseText); body.appendChild(chooseLabel);
      choose.addEventListener('change', function () { if (choose.checked) selectedPapers.set(key, entry); else selectedPapers.delete(key); updateExportStatus(); });
    }
    if (entry.guides && entry.guides.length > 1) {
      var guides = document.createElement('details');
      guides.className = 'library-result__guides';
      var guideSummary = document.createElement('summary');
      guideSummary.textContent = '同一已核实论文的 ' + entry.guides.length + ' 篇解读 / 版本';
      guides.appendChild(guideSummary);
      var guideList = document.createElement('ul');
      entry.guides.forEach(function (guide) {
        var item = document.createElement('li');
        var guideLink = document.createElement('a');
        guideLink.href = guide.permalink;
        guideLink.textContent = [guide.date, guide.title].filter(Boolean).join(' · ');
        item.appendChild(guideLink);
        guideList.appendChild(item);
      });
      guides.appendChild(guideList);
      body.appendChild(guides);
    }
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
      empty.textContent = '没有符合条件的条目，当前条件需要同时满足。';
      var hints = [];
      if (queryInput.value.trim()) hints.push('关键词「' + queryInput.value.trim() + '」');
      if (yearSelect.value !== 'all') hints.push(yearSelect.value + ' 年');
      if (selectedIds(directions).length) hints.push('受控研究方向（历史未核分类不会参与匹配）');
      if (hints.length) empty.textContent += ' 当前限制：' + hints.join('、') + '。';
      if (selectedIds(directions).length) {
        var broaden = document.createElement('button');
        broaden.type = 'button'; broaden.className = 'rw-action'; broaden.textContent = '保留关键词，取消方向限制';
        broaden.addEventListener('click', function () {
          directions = { facets: {}, scope: 'subtree', role: 'any', error: '', requestedIds: [] };
          draft = cloneDirections(directions); applyFilters(false, true);
        });
        empty.appendChild(broaden);
      }
      var reset = document.createElement('button');
      reset.type = 'button';
      reset.className = 'rw-action';
      reset.textContent = '清除筛选';
      reset.addEventListener('click', function () {
        queryInput.value = '';
        typeSelect.value = 'paper';
        yearSelect.value = 'all';
        sortSelect.value = 'newest';
        directions = { facets: {}, scope: 'subtree', role: 'any', error: '', requestedIds: [] };
        draft = cloneDirections(directions);
        applyFilters(false, true);
        queryInput.focus();
      });
      empty.appendChild(reset);
      resultsNode.appendChild(empty);
    } else {
      var fragment = document.createDocumentFragment();
      visible.forEach(function (entry) { fragment.appendChild(makeResult(entry)); });
      resultsNode.appendChild(fragment);
    }
    updateExportStatus();
    countNode.textContent = '找到 ' + filteredEntries.length.toLocaleString('zh-CN') + ' 条，当前显示 ' + visible.length + ' 条';
    if (graph) {
      var paperCount = filteredEntries.filter(function (entry) { return entry.type === 'paper'; }).length;
      var guideCount = filteredEntries.reduce(function (sum, entry) { return sum + (entry.guides ? entry.guides.length : 0); }, 0);
      var unknownCount = filteredEntries.filter(function (entry) { return entry.paperGroup && !entry.paperGroup.identityVerified; }).length;
      countNode.textContent += '（' + paperCount + ' 条论文记录，' + guideCount + ' 篇解读；已核身份去重，' + unknownCount + ' 条身份待核单列）';
    }
    moreButton.hidden = visible.length >= filteredEntries.length;
    renderDirections();
  }

  function applyFilters(preservePage, push, restoring) {
    if (domainSelect) domainSelect.value = directions.domainScope || 'all';
    if (researchTypeSelect) researchTypeSelect.value = directions.researchType || 'all';
    var filterSummary = document.getElementById('library-filter-summary');
    if (filterSummary) {
      var appliedLabels = [];
      [[typeSelect, 'paper', '类型：'], [yearSelect, 'all', '年份：'],
        [sortSelect, 'newest', ''], [researchTypeSelect, 'all', '研究类型：'], [domainSelect, 'all', '研究范围：']].forEach(function (entry) {
        var control = entry[0];
        if (control && control.value !== entry[1] && control.options && control.options[control.selectedIndex]) {
          appliedLabels.push(entry[2] + control.options[control.selectedIndex].textContent);
        }
      });
      filterSummary.textContent = '筛选与排序' + (appliedLabels.length ? ' · ' + appliedLabels.join(' · ') : '');
    }
    filteredEntries = libraryResults(allEntries, groups, {
      query: queryInput.value, type: typeSelect.value, year: yearSelect.value, sort: sortSelect.value
    }, directions, graph, api);
    if (preservePage !== true) visibleCount = PAGE_SIZE;
    quickButtons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.query === queryInput.value.trim()));
    });
    directionButtons.forEach(function (button) { button.setAttribute('aria-pressed', String(selectedIds(directions).includes(button.dataset.concept))); });
    if (!restoring) writeState(push === true);
    render();
  }

  function paperKey(entry) {
    return entry.paperGroup && entry.paperGroup.key || 'page:' + new URL(entry.permalink).pathname;
  }
  function updateExportStatus() { if (exportStatus) exportStatus.textContent = '已选择 ' + selectedPapers.size + ' 条论文记录（跨筛选保留选择）'; }

  function populateYears() {
    var years = Array.from(new Set(allEntries.map(function (entry) { return entry.year; }).filter(Boolean))).sort().reverse();
    years.forEach(function (year) {
      var option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    });
  }

  function resultState() {
    return { query: queryInput.value, type: typeSelect.value, year: yearSelect.value, sort: sortSelect.value };
  }

  function updateDraft() {
    if (!draftNode) return;
    var preview = libraryResults(allEntries, groups, resultState(), draft, graph, api);
    draftNode.textContent = '待应用：' + selectedIds(draft).length + ' 个方向，预览 ' + preview.length + ' 条结果。';
    Object.keys(nodeViews).forEach(function (id) { nodeViews[id].checkbox.checked = selectedIds(draft).includes(id); });
  }

  function revealDirections() {
    if (!graph) return;
    var needle = directionSearch ? directionSearch.value.trim() : '';
    var visible = new Set();
    if (needle) graph.search(needle).forEach(function (node) {
      graph.path(node.id).forEach(function (ancestor) { visible.add(ancestor.id); });
      if (facetViews[node.facet]) facetViews[node.facet].open = true;
      if (!['task', 'method', 'setting'].includes(node.facet) && moreFacetView) moreFacetView.open = true;
    });
    Object.keys(nodeViews).forEach(function (id) {
      var view = nodeViews[id];
      view.item.hidden = !!needle && !visible.has(id);
      var open = !!needle || expanded.has(id);
      if (view.children) view.children.hidden = !open;
      if (view.toggle) view.toggle.setAttribute('aria-expanded', String(open));
    });
  }

  function renderTree() {
    if (!treeNode) return;
    treeNode.textContent = '';
    nodeViews = Object.create(null);
    facetViews = Object.create(null);
    if (!graph) { treeNode.textContent = '分类目录暂时不可用，仍可检索关键词。'; return; }
    var currentGroups = filteredEntries.filter(function (entry) { return entry.paperGroup; }).map(function (entry) { return entry.paperGroup; });
    var totals = api.counts(currentGroups, graph, directions);
    var byId = Object.create(null);
    totals.concepts.forEach(function (count) { byId[count.id] = count; });
    function treeItem(id) {
      var node = graph.byId[id];
      var item = document.createElement('li');
      var row = document.createElement('div');
      row.className = 'library-direction-row';
      var children = graph.children(id).filter(function (child) { return child.status !== 'deprecated'; });
      var toggle;
      if (children.length) {
        toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'library-tree-toggle';
        toggle.textContent = '▸';
        toggle.setAttribute('aria-label', '展开或收起 ' + node.zh + ' 的下级方向');
        toggle.addEventListener('click', function () {
          if (expanded.has(id)) expanded.delete(id); else expanded.add(id);
          revealDirections();
        });
        row.appendChild(toggle);
      } else {
        var spacer = document.createElement('span');
        spacer.className = 'library-tree-spacer';
        row.appendChild(spacer);
      }
      var label = document.createElement('label');
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = id;
      checkbox.checked = selectedIds(draft).includes(id);
      checkbox.addEventListener('change', function () {
        draft.error = '';
        draft.requestedIds = [];
        var ids = draft.facets[node.facet] || [];
        draft.facets[node.facet] = checkbox.checked ? Array.from(new Set(ids.concat(id))) : ids.filter(function (value) { return value !== id; });
        updateDraft();
      });
      label.appendChild(checkbox);
      var title = document.createElement('span');
      title.textContent = node.zh;
      label.appendChild(title);
      var count = byId[id] || { direct: 0, subtree: 0 };
      var counter = document.createElement('small');
      counter.textContent = count.direct + ' / ' + count.subtree;
      counter.setAttribute('aria-label', '当前结果中直接标注 ' + count.direct + '，含下级 ' + count.subtree);
      label.appendChild(counter);
      row.appendChild(label);
      item.appendChild(row);
      var list;
      if (children.length) {
        list = document.createElement('ul');
        children.forEach(function (child) { list.appendChild(treeItem(child.id)); });
        item.appendChild(list);
      }
      nodeViews[id] = { item: item, checkbox: checkbox, toggle: toggle, children: list };
      return item;
    }
    var more = document.createElement('details');
    moreFacetView = more;
    more.className = 'library-more-facets';
    var moreSummary = document.createElement('summary');
    moreSummary.textContent = '更多分面：信号、应用、研究重点、产物、科学主题、模型家族';
    more.appendChild(moreSummary);
    graph.facets.forEach(function (facet, position) {
      var section = document.createElement('details');
      section.className = 'library-facet';
      facetViews[facet.id] = section;
      section.open = !!(draft.facets[facet.id] && draft.facets[facet.id].length);
      var heading = document.createElement('summary');
      heading.textContent = facet.label;
      section.appendChild(heading);
      var list = document.createElement('ul');
      list.className = 'library-direction-list';
      (graph.rootsByFacet[facet.id] || []).filter(function (id) { return graph.byId[id].status !== 'deprecated'; })
        .forEach(function (id) { list.appendChild(treeItem(id)); });
      section.appendChild(list);
      if (position < 3) treeNode.appendChild(section);
      else { more.appendChild(section); if (section.open) more.open = true; }
    });
    treeNode.appendChild(more);
    revealDirections();
  }

  function renderDirections() {
    if (selectedNode) {
      selectedNode.textContent = '';
      if (directions.error) {
        var error = document.createElement('p');
        error.textContent = directions.error + '。请清除方向条件后重试。';
        selectedNode.appendChild(error);
      } else if (!selectedIds(directions).length) selectedNode.textContent = '未限定方向：关键词检索包含历史页面与新页面。';
      else {
        var currentGroups = filteredEntries.filter(function (entry) { return entry.paperGroup; }).map(function (entry) { return entry.paperGroup; });
        var counts = api.counts(currentGroups, graph, directions).concepts;
        selectedIds(directions).forEach(function (id) {
          var node = graph.byId[id];
          var summary = document.createElement('div');
          summary.className = 'library-current-direction';
          var path = document.createElement('strong');
          path.textContent = graph.path(id).map(function (part) { return part.zh; }).join(' › ');
          summary.appendChild(path);
          var definition = document.createElement('p');
          var source = registryRecords[id] || {};
          definition.textContent = plainText(source.definition || source.description) || '当前目录尚未收录该方向的定义。';
          summary.appendChild(definition);
          var scopeText = api.readerScopeNote ? api.readerScopeNote(source.scopeNote) : plainText(source.scopeNote);
          if (scopeText) {
            var scope = document.createElement('p'); scope.textContent = '适用范围：' + scopeText; summary.appendChild(scope);
          }
          var examples = currentGroups.filter(function (group) {
            return api.query([group], { facets: { [node.facet]: [id] }, scope: directions.scope, role: directions.role }, graph).length;
          }).slice(0, 2);
          if (examples.length) {
            var examplesNode = document.createElement('p'); examplesNode.textContent = '当前匹配示例：';
            examples.forEach(function (group, position) {
              if (position) { var separator = document.createElement('span'); separator.textContent = ' · '; examplesNode.appendChild(separator); }
              var article = group.articles[0], example = document.createElement('a');
              example.href = article.permalink; example.textContent = article.title; examplesNode.appendChild(example);
            });
            summary.appendChild(examplesNode);
          }
          var count = counts.find(function (value) { return value.id === id; }) || { direct: 0, subtree: 0 };
          var status = document.createElement('small');
          status.textContent = '当前结果：直接标注 ' + count.direct + ' 篇，含下级 ' + count.subtree + ' 篇。';
          summary.appendChild(status);
          var remove = document.createElement('button');
          remove.type = 'button';
          remove.className = 'rw-filter-chip';
          remove.textContent = '移除 ' + node.zh;
          remove.addEventListener('click', function () {
            directions.facets[node.facet] = directions.facets[node.facet].filter(function (value) { return value !== id; });
            draft = cloneDirections(directions);
            applyFilters(false, true);
          });
          summary.appendChild(remove);
          selectedNode.appendChild(summary);
        });
      }
    }
    if (coverageNode) {
      var covered = groups.filter(function (group) { return group.conceptIds.length; }).length;
      coverageNode.textContent = graph ? '方向标注覆盖 ' + covered + ' / ' + groups.length + ' 条论文记录（已核身份去重，身份待核单列）。选择方向后仅匹配已确认的受控标注；未标注的历史解读不会推断归类。同分面任选其一，跨分面需同时满足。方向条件仅适用于论文解读，汇总页请清除方向条件后浏览。'
        + (directions.role === 'primary' ? '仅匹配明确主要研究角色和主方法；条件等其他分面仍按相关标注匹配。科学主题、研究重点和产物不按词语推断主角色。' : '')
        + ' 研究类型与范围仅取已核v2记录；旧分类保留，不自动推断其研究类型。'
        : '分类目录暂时无法确认。关键词检索仍可使用；方向链接保留为空结果，避免推断历史分类。';
    }
    if (scopeSelect) scopeSelect.value = draft.scope;
    if (roleSelect) roleSelect.value = draft.role;
    renderTree();
    updateDraft();
  }

  if (panel) panel.addEventListener('toggle', function () {
    if (!panel.open) return;
    draft = cloneDirections(directions);
    renderTree();
    if (scopeSelect) scopeSelect.value = draft.scope;
    if (roleSelect) roleSelect.value = draft.role;
    updateDraft();
  });
  if (scopeSelect) scopeSelect.addEventListener('change', function () { draft.scope = scopeSelect.value; updateDraft(); });
  if (roleSelect) roleSelect.addEventListener('change', function () { draft.role = roleSelect.value; updateDraft(); });
  [domainSelect, researchTypeSelect].filter(Boolean).forEach(function (select) {
    select.addEventListener('change', function () {
      directions.domainScope = domainSelect ? domainSelect.value : 'all';
      directions.researchType = researchTypeSelect ? researchTypeSelect.value : 'all';
      draft = cloneDirections(directions); applyFilters(false, true);
    });
  });
  if (directionSearch) directionSearch.addEventListener('input', revealDirections);
  var applyButton = document.getElementById('library-direction-apply');
  if (applyButton) applyButton.addEventListener('click', function () {
    directions = cloneDirections(draft);
    if (panel) panel.open = false;
    applyFilters(false, true);
  });
  var cancelButton = document.getElementById('library-direction-cancel');
  if (cancelButton) cancelButton.addEventListener('click', function () {
    draft = cloneDirections(directions);
    if (panel) panel.open = false;
    renderDirections();
  });
  var clearButton = document.getElementById('library-direction-clear');
  if (clearButton) clearButton.addEventListener('click', function () {
    draft.facets = {}; draft.error = ''; draft.requestedIds = [];
    updateDraft();
  });
  directionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      if (!graph || !graph.byId[button.dataset.concept]) return;
      var node = graph.byId[button.dataset.concept];
      directions = { facets: {}, scope: 'subtree', role: 'any', error: '', requestedIds: [] };
      directions.facets[node.facet] = [node.id];
      draft = cloneDirections(directions);
      typeSelect.value = 'paper';
      applyFilters(false, true);
    });
  });

  var debounceTimer;
  queryInput.addEventListener('input', function () {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(applyFilters, 120);
  });
  [typeSelect, yearSelect, sortSelect].forEach(function (control) { control.addEventListener('change', function () { applyFilters(false, true); }); });
  quickButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      queryInput.value = button.dataset.query;
      applyFilters();
    });
  });
  moreButton.addEventListener('click', function () {
    visibleCount += PAGE_SIZE;
    writeState(true);
    render();
  });
  var form = document.getElementById('paper-library-filters');
  if (form) form.addEventListener('submit', function (event) { event.preventDefault(); applyFilters(); });
  window.addEventListener('popstate', function () { readState(); if (panel) panel.open = false; applyFilters(true, false, true); });

  var selectVisible = document.getElementById('library-select-visible');
  if (selectVisible) selectVisible.addEventListener('click', function () {
    filteredEntries.slice(0, visibleCount).filter(function (entry) { return entry.type === 'paper'; }).forEach(function (entry) { selectedPapers.set(paperKey(entry), entry); }); render();
  });
  var clearSelection = document.getElementById('library-selection-clear');
  if (clearSelection) clearSelection.addEventListener('click', function () { selectedPapers.clear(); render(); });
  var exportButton = document.getElementById('library-export');
  if (exportButton) exportButton.addEventListener('click', function () {
    try {
      if (!window.ResearchReadingExport) throw new Error('导出模块尚未就绪。');
      var entries = Array.from(selectedPapers.values());
      var result = window.ResearchReadingExport.build(entries, document.getElementById('library-export-format').value, { origin: window.location.origin, filter: window.location.href, taxonomyGraph: graph });
      window.ResearchReadingExport.download(result);
      exportStatus.textContent = '已导出 ' + result.exported + ' 条' + (result.skipped ? '；跳过 ' + result.skipped + ' 条身份未核实的引用' : '') + (result.incomplete ? '；' + result.incomplete + ' 条引用仅含可得字段' : '') + '。';
    } catch (error) { exportStatus.textContent = error.message; }
  });

  function renderLoadError(error) {
    resultsNode.replaceChildren();
    var empty = document.createElement('div');
    empty.className = 'research-library__empty';
    empty.textContent = '静态索引暂时无法载入。请使用经典搜索或归档继续浏览。';
    if (error && typeof error.message === 'string' && error.message.startsWith('论文索引校验失败：')) {
      empty.textContent += ' ' + error.message;
    }
    resultsNode.appendChild(empty);
    var retry = document.createElement('button'); retry.type = 'button'; retry.className = 'rw-action'; retry.textContent = '重新加载索引';
    retry.addEventListener('click', function () { startLoad(); }); empty.appendChild(retry);
    var fallback = document.createElement('a'); fallback.href = new URL('archives/', new URL(siteBasePath || '/', window.location.origin)).href; fallback.className = 'rw-action'; fallback.textContent = '浏览速递归档'; empty.appendChild(fallback);
    countNode.textContent = '论文索引载入失败';
    moreButton.hidden = true;
  }

  if (!indexUrl || !safeSiteUrl(indexUrl.href, window.location.origin, siteBasePath)) {
    renderLoadError();
    return;
  }

  // 快照提供概念的 zh/en、aliases 与祖先链；拿不到时退化为页面自带标签。
  var registryUrl = new URL('data/taxonomy-registry.json', indexUrl);
  var catalogUrl = new URL('data/taxonomy-catalog.json', indexUrl);
  function loadRegistry() {
    return fetch(registryUrl, { credentials: 'same-origin' })
      .then(function (response) {
        if (!response || !response.ok) return null;
        return response.json();
      })
      .then(function (payload) {
        return payload && !Array.isArray(payload) && Array.isArray(payload.concepts)
          ? payload : null;
      })
      .catch(function () { return null; });
  }
  function loadCatalog() {
    return fetch(catalogUrl, { credentials: 'same-origin', redirect: 'error' }).then(function (response) { return response && response.ok ? response.json() : null; })
      .then(function (payload) { return payload && payload.contract === 'paper-taxonomy-version-catalog-v1' ? payload : null; }).catch(function () { return null; });
  }

  function loadIndex() {
    if (window.ResearchSearchIndex && typeof window.ResearchSearchIndex.load === 'function') {
      return window.ResearchSearchIndex.load(indexUrl, { origin: window.location.origin, basePath: siteBasePath, onProgress: function (value) {
        if (value.phase === 'shards') countNode.textContent = '正在校验论文索引 ' + value.completed + ' / ' + value.total + ' 个分片' + (value.fromCache ? '（已验证本机缓存）' : '');
      } });
    }
    // Array-only compatibility for older clients; manifests require the shared
    // loader and its byte/SHA gates, never an unchecked fallback.
    return fetch(indexUrl, { credentials: 'same-origin', redirect: 'error' }).then(function (response) {
      if (!response || !response.ok) throw new Error('Index HTTP failure');
      return response.json();
    }).then(function (items) {
      if (!Array.isArray(items)) throw new Error('论文索引校验失败：分片加载模块不可用');
      return items;
    });
  }

  var loading = false;
  function startLoad() {
  if (loading) return; loading = true;
  countNode.textContent = '正在读取静态论文索引…';
  resultsNode.textContent = '正在读取并校验索引，请稍候…';
  return Promise.all([
    loadIndex(),
    loadRegistry(),
    loadCatalog(),
  ])
    .then(function (results) {
      var registry = results[1];
      return { items: results[0], registry: registry, catalog: results[2] };
    })
    .then(function (payload) {
      var items = payload.items;
      var registry = payload.registry;
      var seen = new Set();
      if (!Array.isArray(items)) throw new Error('Index must be an array');
      if (api && registry) {
        try { graph = api.createRegistry(registry, payload.catalog); }
        catch (_error) { graph = null; }
      }
      allEntries = items.map(function (item) {
        return normalizeEntry(item, window.location.origin, siteBasePath, registry, graph);
      }).filter(function (entry) {
        if (!entry || !['paper', 'daily', 'conference'].includes(entry.type) || seen.has(entry.permalink)) return false;
        seen.add(entry.permalink);
        return true;
      });
      registryRecords = registryIndex(registry);
      groups = graph ? api.groupPapers(allEntries, graph) : [];
      while (yearSelect.options && yearSelect.options.length > 1) yearSelect.remove(1);
      populateYears();
      readState();
      applyFilters(true);
      loading = false;
    })
    .catch(function (error) { loading = false; renderLoadError(error); });
  }
  startLoad();
}());
