'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const taxonomy = require('../assets/js/taxonomy-core.js');
const library = require('../assets/js/paper-library.js');
test('keyword navigation uses current ancestors after exact issued classification validation', () => {
  const node = (id, zh, ancestorIds = []) => ({ id, zh, facet: 'method', en: id, aliases: [], ancestorIds });
  const old = { registrySha256: '1'.repeat(64), registryVersion: 'old', concepts: [node('method.a', '原先上级'), node('method.b', '新版上级'), node('method.child', '子概念', ['method.a'])] };
  const current = { ...old, registrySha256: '2'.repeat(64), registryVersion: 'current', concepts: [node('method.a', '原先上级'), node('method.b', '新版上级'), node('method.child', '子概念', ['method.b'])] };
  const graph = taxonomy.createRegistry(current, { contract: 'paper-taxonomy-version-catalog-v1', currentSha256: current.registrySha256, snapshots: [old, current] });
  const raw = { title: '论文', permalink: 'https://example.test/blog/posts/paper/', pageType: 'paper',
    taxonomyContract: 'paper-taxonomy-flat-tags-compat-v1', taxonomyRegistrySha256: old.registrySha256,
    taxonomyConcepts: [{ id: 'method.child', facet: 'method', label: '子概念' }] };
  const entry = library.normalizeEntry(raw, 'https://example.test', '/blog/', current, graph);
  assert.ok(!entry.searchText.includes('原先上级'));
  assert.ok(entry.searchText.includes('新版上级'));
  assert.deepEqual(graph.resolveRecord(raw).concepts[0].ancestorIds, ['method.a']);
  assert.deepEqual(raw.taxonomyConcepts, [{ id: 'method.child', facet: 'method', label: '子概念' }]);
  const currentFields = { ...raw, tagContract: raw.taxonomyContract,
    tagCatalogSha256: raw.taxonomyRegistrySha256, tagConcepts: raw.taxonomyConcepts };
  delete currentFields.taxonomyContract;
  delete currentFields.taxonomyRegistrySha256;
  delete currentFields.taxonomyConcepts;
  const before = JSON.stringify(currentFields);
  assert.deepEqual(library.normalizeEntry(currentFields, 'https://example.test', '/blog/', current, graph), entry);
  assert.equal(JSON.stringify(currentFields), before);
  const unbound = library.normalizeEntry({ ...raw, taxonomyRegistrySha256: '3'.repeat(64) }, 'https://example.test', '/blog/', current, graph);
  assert.ok(!unbound.searchText.includes('原先上级') && !unbound.searchText.includes('新版上级'));
});
test('renamed direct labels remain searchable without importing obsolete parent memberships', () => {
  const node = (zh) => ({ id: 'task.example', zh, facet: 'task', en: '', aliases: [], ancestorIds: [] });
  const old = { registrySha256: '1'.repeat(64), concepts: [node('原分类名')] };
  const current = { registrySha256: '2'.repeat(64), concepts: [node('现目录名')] };
  const graph = taxonomy.createRegistry(current, { contract: 'paper-taxonomy-version-catalog-v1', currentSha256: current.registrySha256, snapshots: [old, current] });
  const raw = { title: '论文', permalink: 'https://example.test/blog/posts/paper/', pageType: 'paper', taxonomyContract: taxonomy.contract,
    taxonomyRegistrySha256: old.registrySha256, taxonomyConcepts: [{ id: 'task.example', facet: 'task', label: '原分类名' }] };
  const entry = library.normalizeEntry(raw, 'https://example.test', '/blog/', current, graph);
  assert.ok(entry.searchText.includes('原分类名') && entry.searchText.includes('现目录名'));
  const held = library.normalizeEntry({ ...raw, taxonomyPublicationStatus: 'withheld' }, 'https://example.test', '/blog/', current, graph);
  assert.ok(!held.searchText.includes('现目录名') && !held.searchText.includes('原分类名'));
});
