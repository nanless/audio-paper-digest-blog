'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const core = require('../assets/js/taxonomy-core');

const node = (id, zh, ancestors = [], aliases = []) => ({ id, facet: id.split('.')[0], zh,
  en: zh, ancestorIds: ancestors, aliases });
const snapshot = () => ({ contract: 'paper-taxonomy-registry-snapshot-v1', concepts: [
  node('task.separation', '音频分离'), node('task.speech', '语音分离', ['task.separation']),
  node('task.target', '目标说话人提取', ['task.separation', 'task.speech']),
  node('task.asr', '语音识别', [], ['ASR']), node('method.peft', '参数高效微调', [], ['PEFT']),
  node('method.lora', 'LoRA', ['method.peft']), node('method.adapter', 'Adapter', ['method.peft']),
  node('setting.streaming', '流式处理'),
] });
const graph = core.createRegistry(snapshot());
function paper(slug, ids, overrides = {}) {
  return { pageType: 'paper', permalink: 'https://example.com/posts/' + slug + '/',
    identityStatus: 'verified', arxivId: '2609.' + slug.padStart(5, '0'),
    taxonomyContract: core.contract,
    taxonomyConcepts: ids.map(id => ({ id, facet: graph.byId[id].facet, label: graph.byId[id].zh })),
    ...overrides };
}
const data = [
  paper('1', ['task.target', 'method.lora', 'method.adapter'], { primaryTaskId: 'task.target', primaryMethodId: 'method.lora' }),
  paper('2', ['task.asr', 'method.adapter'], { primaryTaskId: 'task.asr', primaryMethodId: 'method.adapter' }),
  paper('3', ['task.separation', 'method.peft'], { primaryTaskId: 'task.separation', primaryMethodId: 'method.peft' }),
];

test('published registry replays all paths, including roots without children', () => {
  const published = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/taxonomy-registry.json')));
  const actual = core.createRegistry(published);
  assert.equal(Object.keys(actual.byId).length, published.concepts.length);
  for (const item of published.concepts) {
    assert.deepEqual(actual.path(item.id).map(x => x.id), item.ancestorIds.concat(item.id));
  }
  assert.deepEqual(graph.children('task.separation').map(x => x.id), ['task.speech']);
  assert.deepEqual(graph.descendants('task.separation').map(x => x.id), ['task.speech', 'task.target']);
  assert.ok(graph.rootsByFacet.task.includes('task.asr'));
});

test('search uses aliases and fullwidth normalization without inventing concepts', () => {
  assert.deepEqual(graph.search('ＡＳＲ').map(x => x.id), ['task.asr']);
  assert.deepEqual(graph.search('not a concept'), []);
  assert.deepEqual(graph.path('unknown'), []);
});

test('bad graphs fail closed: duplicate ID, missing parent, cross-facet, broken chain, cycle and ambiguous alias', () => {
  const cases = [
    value => value.concepts.push(value.concepts[0]),
    value => { value.concepts[1].ancestorIds = ['task.missing']; },
    value => { value.concepts[1].ancestorIds = ['method.peft']; },
    value => { value.concepts[2].ancestorIds = ['task.speech']; },
    value => { value.concepts[0].ancestorIds = ['task.speech']; },
    value => { value.concepts[0].aliases = ['ASR']; },
    value => { value.concepts[1].parentIds = ['task.separation', 'task.asr']; },
  ];
  cases.forEach(change => { const value = snapshot(); change(value); assert.throws(() => core.createRegistry(value)); });
});

test('browser global exports work without a document or Node APIs', () => {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../assets/js/taxonomy-core.js'), 'utf8'), context);
  assert.equal(typeof context.ResearchTaxonomy.createRegistry, 'function');
  assert.equal(context.ResearchTaxonomy.contract, core.contract);
  assert.equal(typeof context.ResearchTaxonomy.readTagFields, 'function');
});

test('新搜索标签字段与旧记录保持同一核验范围，原值不修剪且任意跨族自有字段都拒绝', () => {
  const legacy = paper('48', ['task.asr', 'method.adapter'], {
    taxonomyRegistrySha256: '', taxonomyEvidenceContract: null, taxonomyEvidenceType: ' 原依据 ',
    taxonomyProofSha256: 'proof', taxonomyPageSha256: 'page', taxonomyClassificationContract: '',
    taxonomyPublicationStatus: undefined
  });
  const current = { pageType: legacy.pageType, permalink: legacy.permalink,
    identityStatus: legacy.identityStatus, arxivId: legacy.arxivId,
    tagContract: core.contract, tagConcepts: legacy.taxonomyConcepts, tagCatalogSha256: '',
    tagEvidenceContract: null, tagEvidenceType: ' 原依据 ', tagProofSha256: 'proof', tagPageSha256: 'page',
    tagClassificationContract: '', tagPublicationStatus: undefined };
  const original = JSON.stringify(legacy);
  assert.deepEqual(core.readTagFields(legacy), {
    tagContract: core.contract, tagConcepts: legacy.taxonomyConcepts, tagCatalogSha256: '',
    tagPublicationStatus: undefined, tagEvidenceContract: null, tagEvidenceType: ' 原依据 ',
    tagProofSha256: 'proof', tagPageSha256: 'page', tagClassificationContract: ''
  });
  assert.strictEqual(core.readTagFields(legacy).tagConcepts, legacy.taxonomyConcepts);
  assert.deepEqual(graph.resolveRecord(current), graph.resolveRecord(legacy));
  assert.deepEqual(core.groupPapers([current], graph)[0].conceptIds, core.groupPapers([legacy], graph)[0].conceptIds);
  assert.equal(JSON.stringify(legacy), original);
  assert.equal(core.primaryRoleLabel(null), '主要研究角色');
  for (const record of [
    { tagContract: core.contract, taxonomyPageSha256: null },
    { taxonomyContract: core.contract, tagEvidenceType: null },
    { ...current, taxonomyConcepts: current.tagConcepts }
  ]) {
    assert.throws(() => graph.resolveRecord(record), /标签字段不能混用/);
    assert.throws(() => core.groupPapers([{ ...record, pageType: 'paper', permalink: '/posts/mixed/' }], graph), /标签字段不能混用/);
  }
});

test('same-facet OR, cross-facet AND and scope include exactly the requested papers', () => {
  const groups = core.groupPapers(data, graph);
  assert.equal(core.query(groups, { facets: { task: ['task.speech'] } }, graph).length, 1);
  assert.equal(core.query(groups, { facets: { task: ['task.speech'] }, scope: 'direct' }, graph).length, 0);
  assert.equal(core.query(groups, { facets: { task: ['task.target', 'task.asr'] } }, graph).length, 2);
  assert.equal(core.query(groups, { facets: { task: ['task.target', 'task.asr'], method: ['method.lora'] } }, graph).length, 1);
  assert.equal(core.query(groups, { facets: { method: ['method.peft'] } }, graph).length, 3);
  assert.equal(core.query(groups, { facets: { method: ['method.lora'] } }, graph).length, 1);
});

test('primary role relies only on explicit valid IDs; supplemental methods remain any-only', () => {
  const groups = core.groupPapers(data, graph);
  assert.equal(core.query(groups, { facets: { method: ['method.adapter'] }, role: 'any' }, graph).length, 2);
  assert.equal(core.query(groups, { facets: { method: ['method.adapter'] }, role: 'primary' }, graph).length, 1);
  const missing = core.groupPapers([paper('9', ['task.asr'], { task: '语音识别', tags: ['语音识别'] })], graph);
  assert.equal(core.query(missing, { facets: { task: ['task.asr'] }, role: 'primary' }, graph).length, 0);
});

test('multiple readings of one paper never fabricate cross-record AND conditions or primary labels', () => {
  const groups = core.groupPapers([
    paper('first', ['task.target', 'method.lora'], { arxivId: '2609.12345', primaryTaskId: 'task.target', primaryMethodId: 'method.lora' }),
    paper('second', ['task.asr', 'method.adapter'], { arxivId: '2609.12345v2', primaryTaskId: 'task.asr', primaryMethodId: 'method.adapter' }),
    paper('old', ['task.asr', 'method.lora'], { arxivId: '2609.12345', taxonomyContract: '', primaryTaskId: 'task.asr', primaryMethodId: 'method.lora' }),
  ], graph);
  assert.equal(groups.length, 1);
  assert.equal(groups[0].articles.length, 3);
  assert.equal(groups[0].conceptIds.length, 4);
  for (const role of ['any', 'primary']) {
    assert.equal(core.query(groups, { facets: { task: ['task.target'], method: ['method.adapter'] }, role }, graph).length, 0);
    assert.equal(core.query(groups, { facets: { task: ['task.asr'], method: ['method.lora'] }, role }, graph).length, 0);
    assert.equal(core.query(groups, { facets: { task: ['task.target'], method: ['method.lora'] }, role }, graph).length, 1);
    const counts = core.counts(groups, graph, { facets: { task: ['task.target'] }, role });
    assert.equal(counts.concepts.find(item => item.id === 'method.lora').direct, 1);
    assert.equal(counts.concepts.find(item => item.id === 'method.adapter').direct, 0);
  }
});

test('legacy labels, unknown IDs and mismatched facets/labels cannot masquerade as current classification', () => {
  assert.equal(core.contract, 'paper-tag-flat-tags-v2');
  assert.equal(core.legacyContract, 'paper-taxonomy-flat-tags-compat-v1');
  const current = paper('contract', ['task.asr', 'method.adapter']);
  const legacy = { ...current, taxonomyContract: core.legacyContract };
  const originalLegacy = JSON.stringify(legacy);
  assert.equal(graph.resolveRecord(current).status, 'verified');
  assert.deepEqual(graph.resolveRecord(current).concepts.map(node => node.id), ['task.asr', 'method.adapter']);
  assert.deepEqual(graph.resolveRecord(current), graph.resolveRecord(legacy));
  assert.equal(JSON.stringify(legacy), originalLegacy);
  for (const contract of [core.contract, core.legacyContract]) {
    const held = graph.resolveRecord({ ...current, taxonomyContract: contract,
      taxonomyPublicationStatus: 'withheld' });
    assert.equal(held.status, 'withheld');
    assert.deepEqual(held.concepts, []);
  }
  for (const contract of ['paper-tag-flat-tags-v3', core.contract + '-other', null]) {
    const unknown = graph.resolveRecord({ ...current, taxonomyContract: contract });
    assert.equal(unknown.status, 'legacy');
    assert.deepEqual(unknown.concepts, []);
  }
  const records = [paper('5', ['task.asr'], { taxonomyContract: '' }),
    paper('6', ['task.asr'], { taxonomyContract: 'some-future-contract' }),
    paper('7', [], { taxonomyConcepts: [{ id: 'task.asr', facet: 'method', label: '语音识别' }] }),
    paper('8', [], { taxonomyConcepts: [{ id: 'task.asr', facet: 'task', label: 'ASR' }] })];
  const groups = core.groupPapers(records, graph);
  assert.equal(groups.length, 4);
  assert.equal(core.query(groups, { facets: { task: ['task.asr'] } }, graph).length, 0);
  assert.throws(() => core.query(groups, { facets: { task: ['method.lora'] } }, graph));
  assert.throws(() => core.query(groups, { facets: { task: ['task.unknown'] } }, graph));
});

test('verified base arXiv and canonical conference identity group multiple articles; titles do not merge', () => {
  const records = [paper('1', ['task.target']),
    paper('alternate', ['task.target'], { arxivId: '2609.00001v2' }),
    paper('c1', ['task.asr'], { arxivId: '', paperId: 'conference:icml:2026:openreview-forum-id:AbC' }),
    paper('c2', ['task.asr'], { arxivId: '', paperId: 'conference:icml:2026:openreview-forum-id:AbC' }),
    paper('unknown1', ['task.asr'], { arxivId: '2609.00001', identityStatus: 'inferred', title: 'Same title' }),
    paper('unknown2', ['task.asr'], { arxivId: '2609.00001', identityStatus: 'unknown', title: 'Same title' }),
    { ...data[0], pageType: 'daily', permalink: 'https://example.com/daily/' },
    { ...data[0], pageType: 'conference', permalink: 'https://example.com/conference/' }];
  const groups = core.groupPapers(records, graph);
  assert.equal(groups.length, 4);
  assert.equal(groups[0].articles.length, 2);
  assert.equal(groups[1].articles.length, 2);
  assert.equal(groups.filter(x => !x.identityVerified).length, 2);
});

test('parent counts use paper union, include direct broad labels, exclude aggregate pages, and match list queries', () => {
  const records = data.concat(paper('a', ['task.target'], { arxivId: '2609.00001v2' }),
    { ...data[0], pageType: 'conference', permalink: 'https://example.com/summary/' });
  const groups = core.groupPapers(records, graph);
  const result = core.counts(groups, graph);
  const byId = Object.fromEntries(result.concepts.map(x => [x.id, x]));
  assert.equal(result.total, 3);
  assert.equal(byId['task.separation'].direct, 1);
  assert.equal(byId['task.separation'].subtree, 2);
  assert.equal(byId['method.peft'].subtree, 3);
  assert.notEqual(byId['method.lora'].subtree + byId['method.adapter'].subtree + byId['method.peft'].direct,
    byId['method.peft'].subtree);
  for (const count of result.concepts) {
    const facet = graph.byId[count.id].facet;
    assert.equal(count.direct, core.query(groups, { facets: { [facet]: [count.id] }, scope: 'direct' }, graph).length);
    assert.equal(count.subtree, core.query(groups, { facets: { [facet]: [count.id] }, scope: 'subtree' }, graph).length);
  }
  const filtered = core.counts(groups, graph, { facets: { method: ['method.lora'] } });
  assert.equal(filtered.total, 1);
  assert.equal(filtered.concepts.find(x => x.id === 'task.separation').subtree, 1);
});
