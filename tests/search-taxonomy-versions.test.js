'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const taxonomy = require('../assets/js/taxonomy-core.js');
const library = require('../assets/js/paper-library.js');
test('keyword aliases and ancestors come from the exact published classification version', () => {
  const node = (id, zh, ancestorIds = []) => ({ id, zh, facet: 'method', en: id, aliases: [], ancestorIds });
  const old = { registrySha256: '1'.repeat(64), registryVersion: 'old', concepts: [node('method.a', '原先上级'), node('method.b', '新版上级'), node('method.child', '子概念', ['method.a'])] };
  const current = { ...old, registrySha256: '2'.repeat(64), registryVersion: 'current', concepts: [node('method.a', '原先上级'), node('method.b', '新版上级'), node('method.child', '子概念', ['method.b'])] };
  const graph = taxonomy.createRegistry(current, { contract: 'paper-taxonomy-version-catalog-v1', currentSha256: current.registrySha256, snapshots: [old, current] });
  const raw = { title: '论文', permalink: 'https://example.test/blog/posts/paper/', pageType: 'paper',
    taxonomyContract: 'paper-taxonomy-flat-tags-compat-v1', taxonomyRegistrySha256: old.registrySha256,
    taxonomyConcepts: [{ id: 'method.child', facet: 'method', label: '子概念' }] };
  const entry = library.normalizeEntry(raw, 'https://example.test', '/blog/', current, graph);
  assert.ok(entry.searchText.includes('原先上级'));
  assert.ok(!entry.searchText.includes('新版上级'));
  const unbound = library.normalizeEntry({ ...raw, taxonomyRegistrySha256: '3'.repeat(64) }, 'https://example.test', '/blog/', current, graph);
  assert.ok(!unbound.searchText.includes('原先上级') && !unbound.searchText.includes('新版上级'));
});
