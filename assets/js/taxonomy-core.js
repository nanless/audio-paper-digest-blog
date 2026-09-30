(function (root, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ResearchTaxonomy = api;
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var CONTRACT = 'paper-taxonomy-flat-tags-compat-v1';
  var facetLabels = Object.freeze({ task: '任务', method: '方法', setting: '条件', signal: '信号',
    application: '应用', research_focus: '研究重点', artifact: '研究产物',
    scientific_topic: '科学主题', model_family: '模型家族' });
  var own = function (object, key) { return Object.prototype.hasOwnProperty.call(object, key); };
  var text = function (value) { return typeof value === 'string' ? value.trim() : ''; };
  var normalized = function (value) { return text(value).normalize('NFKC').toLocaleLowerCase(); };
  var isActive = function (node) { return !!node && node.status !== 'deprecated'; };
  function readerScopeNote(value) {
    return text(value).split(/(?<=[。！？])/).filter(function (sentence) {
      return !/(?:父节点缺失故成根|按报告指定成根)/.test(sentence);
    }).join('').trim();
  }

  // The published v1 snapshot has one ordered ancestor chain. Reject broken or
  // unsupported graphs instead of interpreting an arbitrary array as a tree.
  function createRegistry(snapshot, catalog) {
    if (!snapshot || !Array.isArray(snapshot.concepts) || !snapshot.concepts.length) {
      throw new Error('分类目录缺少概念');
    }
    if (snapshot.contract && snapshot.contract !== 'paper-taxonomy-registry-snapshot-v1') {
      throw new Error('分类目录版本不受支持');
    }
    var byId = Object.create(null);
    var childrenById = Object.create(null);
    var rootsByFacet = Object.create(null);
    var descendantsById = Object.create(null);
    var labelsByFacet = Object.create(null);
    Object.keys(facetLabels).forEach(function (facet) { rootsByFacet[facet] = []; });
    snapshot.concepts.forEach(function (record) {
      if (!record || Array.isArray(record) || typeof record !== 'object') throw new Error('分类概念非法');
      var id = text(record.id);
      var facet = text(record.facet);
      var zh = text(record.zh);
      if (!id || !/^[a-z][a-z0-9_]*\.[a-z0-9][a-z0-9.-]*$/.test(id) || !own(facetLabels, facet)
        || !id.startsWith(facet + '.') || !zh || own(byId, id)) throw new Error('分类标识重复或非法');
      if (!Array.isArray(record.ancestorIds) || !Array.isArray(record.aliases)
        || record.ancestorIds.some(function (value) { return !text(value); })
        || record.aliases.some(function (value) { return !text(value); })
        || (record.status && !['active', 'deprecated'].includes(record.status))
        || (record.parentIds && (!Array.isArray(record.parentIds) || record.parentIds.length > 1))) {
        throw new Error('分类路径或别名非法');
      }
      var node = { id: id, facet: facet, zh: zh, en: text(record.en), aliases: record.aliases.slice(),
        ancestorIds: record.ancestorIds.slice(), parentId: record.ancestorIds.at(-1) || null,
        status: record.status || 'active', definition: text(record.definition || record.description),
        scopeNote: text(record.scopeNote) };
      byId[id] = node;
      childrenById[id] = [];
      descendantsById[id] = [];
      [zh, node.en].concat(node.aliases).filter(Boolean).forEach(function (label) {
        var key = facet + '\u0000' + normalized(label);
        if (own(labelsByFacet, key) && labelsByFacet[key] !== id) throw new Error('分类别名存在歧义');
        labelsByFacet[key] = id;
      });
    });
    Object.values(byId).forEach(function (node) {
      var seen = new Set([node.id]);
      var expected = [];
      var parentId = node.parentId;
      while (parentId) {
        var parent = byId[parentId];
        if (!parent || parent.facet !== node.facet || seen.has(parentId) || !isActive(parent)) {
          throw new Error('分类父级缺失、跨分面或形成循环');
        }
        seen.add(parentId);
        expected.unshift(parentId);
        parentId = parent.parentId;
      }
      if (expected.length !== node.ancestorIds.length
        || expected.some(function (id, position) { return id !== node.ancestorIds[position]; })) {
        throw new Error('分类祖先路径不闭合');
      }
      if (node.parentId) childrenById[node.parentId].push(node.id);
      else rootsByFacet[node.facet].push(node.id);
      node.ancestorIds.forEach(function (id) { descendantsById[id].push(node.id); });
    });
    function nodes(ids) { return (ids || []).map(function (id) { return byId[id]; }); }
    var graph = {
      registrySha256: text(snapshot.registrySha256), registryVersion: text(snapshot.registryVersion),
      byId: byId, childrenById: childrenById, rootsByFacet: rootsByFacet, descendantsById: descendantsById,
      facets: Object.keys(facetLabels).map(function (id) { return { id: id, label: facetLabels[id] }; }),
      path: function (id) { return byId[id] ? nodes(byId[id].ancestorIds.concat(id)) : []; },
      children: function (id) { return nodes(childrenById[id]); },
      descendants: function (id) { return nodes(descendantsById[id]); },
      search: function (query) {
        var needle = normalized(query);
        return Object.values(byId).filter(function (node) {
          return isActive(node) && [node.id, node.zh, node.en].concat(node.aliases)
            .some(function (label) { return normalized(label).includes(needle); });
        });
      }
    };
    var versions = Object.create(null);
    if (graph.registrySha256) versions[graph.registrySha256] = graph;
    graph.hasVersionCatalog = !!catalog;
    if (catalog) {
      if (catalog.contract !== 'paper-taxonomy-version-catalog-v1' || !Array.isArray(catalog.snapshots)
        || catalog.currentSha256 !== graph.registrySha256 || !catalog.snapshots.length) throw new Error('分类版本目录非法');
      var seenVersions = new Set();
      catalog.snapshots.forEach(function (version) {
        var sha = version && version.registrySha256;
        if (!/^[a-f0-9]{64}$/.test(sha || '') || seenVersions.has(sha)) throw new Error('分类版本重复或无效');
        seenVersions.add(sha);
        var historical = createRegistry(version);
        if (sha === graph.registrySha256
          && (historical.registryVersion !== graph.registryVersion
            || JSON.stringify(Object.values(historical.byId)) !== JSON.stringify(Object.values(graph.byId)))) {
          throw new Error('分类当前版本与目录快照不一致');
        }
        Object.values(historical.byId).forEach(function (node) {
          if (graph.byId[node.id] && graph.byId[node.id].facet !== node.facet) throw new Error('稳定分类标识跨版本改变分面');
        });
        versions[sha] = historical;
      });
      if (!seenVersions.has(catalog.currentSha256)) throw new Error('分类版本目录缺少当前版本');
    }
    graph.versions = versions;
    graph.resolveRecord = function (record) {
      var sha = text(record.taxonomyRegistrySha256);
      var source = sha ? versions[sha] : !catalog ? graph : null;
      var result = { status: source ? 'verified' : sha ? 'unknown-version' : 'unbound-version',
        registrySha256: sha, registryVersion: source ? source.registryVersion : '', concepts: [] };
      if (record.taxonomyContract !== CONTRACT || !Array.isArray(record.taxonomyConcepts)) {
        result.status = 'legacy'; return result;
      }
      if (!source) return result;
      result.concepts = record.taxonomyConcepts.filter(function (concept) {
        var node = concept && source.byId[concept.id];
        var current = concept && graph.byId[concept.id];
        return node && current && isActive(node) && isActive(current) && node.facet === current.facet
          && concept.facet === node.facet && concept.label === node.zh;
      }).map(function (concept) { return source.byId[concept.id]; });
      return result;
    };
    return graph;
  }

  function arxivBase(value) {
    var id = text(value);
    return /^([0-9]{4}\.[0-9]{4,5}|[a-z][a-z0-9.-]*\/[0-9]{7})(v[1-9][0-9]*)?$/.test(id)
      ? id.replace(/v[1-9][0-9]*$/, '') : '';
  }

  function identity(record) {
    // Inferred slug IDs and unknown identities never collapse unrelated pages.
    var verified = record.identityStatus === 'verified';
    var arxivId = verified ? arxivBase(record.arxivId) : '';
    var paperId = verified ? text(record.paperId) : '';
    if (arxivId) return { key: 'arxiv:' + arxivId, paperId: paperId || 'arxiv:' + arxivId,
      arxivId: arxivId, identityVerified: true };
    if (paperId && /^[a-z][a-z0-9_-]*:[^\s\u0000-\u001f\u007f]+$/.test(paperId)) {
      return { key: paperId, paperId: paperId, arxivId: '', identityVerified: true };
    }
    return { key: 'page:' + text(record.permalink), paperId: '', arxivId: '', identityVerified: false };
  }

  function groupPapers(records, graph) {
    if (!graph || !graph.byId) throw new Error('需要有效分类目录');
    if (!Array.isArray(records)) throw new Error('论文索引必须是数组');
    var groups = new Map();
    var seenUrls = new Set();
    records.forEach(function (record) {
      if (!record || record.pageType !== 'paper' || !text(record.permalink) || seenUrls.has(record.permalink)) return;
      seenUrls.add(record.permalink);
      var id = identity(record);
      var group = groups.get(id.key);
      if (!group) {
        group = Object.assign({}, id, { articles: [], classifications: [], conceptIds: [], primaryTaskIds: [], primaryMethodIds: [] });
        groups.set(id.key, group);
      }
      group.articles.push(record);
      var resolved = graph.resolveRecord(record);
      var classification = { conceptIds: [], primaryTaskIds: [], primaryMethodIds: [],
        ancestorIdsByConcept: Object.create(null), labelsByConcept: Object.create(null),
        registrySha256: resolved.registrySha256, registryVersion: resolved.registryVersion, status: resolved.status };
      group.classifications.push(classification);
      // Bare legacy tags and unchecked taxonomy payloads never become reviewed
      // semantic classifications merely by entering the search index.
      var direct = resolved.concepts.map(function (node) {
        classification.ancestorIdsByConcept[node.id] = node.ancestorIds.slice();
        classification.labelsByConcept[node.id] = node.zh;
        return node.id;
      });
      classification.conceptIds = Array.from(new Set(direct));
      direct.forEach(function (conceptId) {
        if (!group.conceptIds.includes(conceptId)) group.conceptIds.push(conceptId);
      });
      [['primaryTaskId', 'primaryTaskIds', 'task'], ['primaryMethodId', 'primaryMethodIds', 'method']]
        .forEach(function (field) {
          var primaryId = record[field[0]];
          if (direct.includes(primaryId) && graph.byId[primaryId].facet === field[2]) {
            classification[field[1]].push(primaryId);
            if (!group[field[1]].includes(primaryId)) group[field[1]].push(primaryId);
          }
        });
    });
    return Array.from(groups.values());
  }

  function selectionIds(group, facet, role, graph) {
    if (role === 'primary' && facet === 'task') return group.primaryTaskIds;
    if (role === 'primary' && facet === 'method') return group.primaryMethodIds;
    return group.conceptIds.filter(function (id) { return graph.byId[id] && graph.byId[id].facet === facet; });
  }

  function validatedFilters(filters, graph) {
    var value = filters || {};
    var scope = value.scope || 'subtree';
    var role = value.role || 'any';
    if (!['direct', 'subtree'].includes(scope) || !['primary', 'any'].includes(role)) throw new Error('分类筛选范围非法');
    var facets = value.facets || {};
    if (!facets || typeof facets !== 'object' || Array.isArray(facets)) throw new Error('分类筛选必须按分面提供');
    Object.keys(facets).forEach(function (facet) {
      if (!own(facetLabels, facet) || !Array.isArray(facets[facet])) throw new Error('分类分面非法');
      facets[facet].forEach(function (id) {
        if (!graph.byId[id] || graph.byId[id].facet !== facet || !isActive(graph.byId[id])) throw new Error('分类筛选包含未知方向');
      });
    });
    return { scope: scope, role: role, facets: facets };
  }

  function matchingClassifications(group, selection, graph) {
    // Multiple signed readings can disagree. A paper qualifies only when one
    // reading supplies the entire AND condition; never join labels across them.
    return (group.classifications || []).filter(function (classification) {
      return Object.keys(selection.facets).every(function (facet) {
        var chosen = selection.facets[facet];
        if (!chosen.length) return true;
        var ids = selectionIds(classification, facet, selection.role, graph);
        return chosen.some(function (target) {
          return ids.some(function (id) {
            return id === target || (selection.scope === 'subtree' && (classification.ancestorIdsByConcept[id] || []).includes(target));
          });
        });
      });
    });
  }

  function query(groups, filters, graph) {
    var selection = validatedFilters(filters, graph);
    return groups.filter(function (group) { return matchingClassifications(group, selection, graph).length > 0; });
  }

  function counts(groups, graph, filters) {
    var selection = validatedFilters(filters, graph);
    var selected = groups.map(function (group) { return matchingClassifications(group, selection, graph); })
      .filter(function (classifications) { return classifications.length > 0; });
    var directCounts = Object.create(null);
    var subtreeCounts = Object.create(null);
    selected.forEach(function (classifications) {
      var directIds = new Set();
      var subtreeIds = new Set();
      Object.keys(facetLabels).forEach(function (facet) {
        classifications.forEach(function (classification) {
          selectionIds(classification, facet, selection.role, graph).forEach(function (id) {
            directIds.add(id);
            subtreeIds.add(id);
            (classification.ancestorIdsByConcept[id] || []).forEach(function (ancestor) { subtreeIds.add(ancestor); });
          });
        });
      });
      directIds.forEach(function (id) { directCounts[id] = (directCounts[id] || 0) + 1; });
      subtreeIds.forEach(function (id) { subtreeCounts[id] = (subtreeCounts[id] || 0) + 1; });
    });
    return { total: selected.length, concepts: Object.values(graph.byId).filter(isActive).map(function (node) {
      return { id: node.id, direct: directCounts[node.id] || 0, subtree: subtreeCounts[node.id] || 0 };
    }) };
  }

  return { contract: CONTRACT, facetLabels: facetLabels, isActive: isActive, readerScopeNote: readerScopeNote,
    createRegistry: createRegistry, buildRegistry: createRegistry, arxivBase: arxivBase,
    identity: identity, groupPapers: groupPapers, query: query, counts: counts };
}));
