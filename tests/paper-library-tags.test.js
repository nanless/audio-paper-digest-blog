'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');
const { normalizeEntry, filterEntries, registryIndex, tagTerms } = require('../assets/js/paper-library');

const origin = 'https://nanless.github.io';
const siteBasePath = '/audio-paper-digest-blog/';

// data/taxonomy-registry.json 的精简快照（由 scripts/publish-to-blog.py 导出）
const registry = {
  contract: 'paper-taxonomy-registry-snapshot-v1',
  registryVersion: 'paper-taxonomy-v1',
  registrySha256: 'a'.repeat(64),
  concepts: [
    {
      id: 'method.peft', facet: 'method',
      zh: '参数高效微调', en: 'Parameter-efficient fine-tuning',
      aliases: ['PEFT'], ancestorIds: [],
    },
    {
      id: 'method.lora', facet: 'method',
      zh: 'LoRA', en: 'Low-rank adaptation',
      aliases: [], ancestorIds: ['method.peft'],
    },
    {
      id: 'task.diarization', facet: 'task',
      zh: '说话人分离标注', en: 'Speaker diarization',
      aliases: ['说话人日志', 'diarization'], ancestorIds: [],
    },
    {
      id: 'setting.long-form', facet: 'setting',
      zh: '长音频', en: 'Long-form audio',
      aliases: ['长语音'], ancestorIds: [],
    },
  ],
};

function record(index, concepts) {
  return {
    title: `Paper ${index}`,
    titleZh: `论文 ${index}`,
    originalTitle: `Paper ${index}`,
    permalink: `https://nanless.github.io/audio-paper-digest-blog/posts/paper-${index}/`,
    summary: 'Evidence from the paper.',
    date: '2026-09-04',
    pageType: 'paper',
    score: '8',
    arxivId: `2609.0000${index}`,
    tags: ['说话人分离标注'],
    categories: [],
    taxonomyContract: 'paper-taxonomy-flat-tags-compat-v1',
    taxonomyConcepts: concepts,
  };
}

function query(entries, text) {
  return filterEntries(entries, { query: text, type: 'all', year: 'all', sort: 'newest' });
}

test('historical supplement provenance survives library normalization without granting unverified tags', () => {
  const core = require('../assets/js/tag-core');
  const graph = core.createRegistry(registry, { contract: 'paper-taxonomy-version-catalog-v1', currentSha256: registry.registrySha256, snapshots: [registry] });
  const input = { ...record(1, [{ id: 'method.lora', facet: 'method', label: 'LoRA' }]),
    taxonomyEvidenceContract: 'historical-direct-taxonomy-supplement-v1', taxonomyEvidenceType: 'canonical-analysis',
    taxonomyProofSha256: 'b'.repeat(64), taxonomyPageSha256: 'c'.repeat(64) };
  const unsigned = normalizeEntry(input, origin, siteBasePath, registry, graph);
  assert.equal(unsigned.tagEvidenceContract, input.taxonomyEvidenceContract);
  assert.equal(unsigned.tagProofSha256, input.taxonomyProofSha256);
  assert.equal(unsigned.tagPageSha256, input.taxonomyPageSha256);
  assert.doesNotMatch(unsigned.searchText, /参数高效微调/);
  const signed = normalizeEntry({ ...input, taxonomyRegistrySha256: registry.registrySha256 }, origin, siteBasePath, registry, graph);
  assert.match(signed.searchText, /参数高效微调/);
});

test('current tag supplement keeps its proof and classification identity through browser normalization', () => {
  const input = { ...record(1, [{ id: 'method.lora', facet: 'method', label: 'LoRA' }]),
    taxonomyRegistrySha256: registry.registrySha256,
    taxonomyEvidenceContract: 'historical-direct-tag-supplement-v2',
    taxonomyEvidenceType: 'source-only-tags',
    taxonomyClassificationContract: 'historical-source-tag-classification-v2',
    taxonomyProofSha256: 'b'.repeat(64), taxonomyPageSha256: 'c'.repeat(64) };
  const before = JSON.stringify(input);
  const entry = normalizeEntry(input, origin, siteBasePath, registry);
  assert.equal(entry.tagEvidenceContract, input.taxonomyEvidenceContract);
  assert.equal(entry.tagEvidenceType, input.taxonomyEvidenceType);
  assert.equal(entry.tagClassificationContract, input.taxonomyClassificationContract);
  assert.equal(entry.tagProofSha256, input.taxonomyProofSha256);
  assert.equal(entry.tagPageSha256, input.taxonomyPageSha256);
  assert.equal(JSON.stringify(input), before);
});

test('论文库搜索能沿祖先链用父概念召回子概念论文', () => {
  const entry = normalizeEntry(record(1, [
    { id: 'method.lora', facet: 'method', label: 'LoRA', ancestorIds: ['method.peft'] },
  ]), origin, siteBasePath, registry);
  assert.ok(entry);
  assert.match(entry.searchText, /参数高效微调/);
  assert.match(entry.searchText, /parameter-efficient fine-tuning/);
  assert.match(entry.searchText, /peft/);
  assert.equal(query([entry], '参数高效微调').length, 1);
  assert.equal(query([entry], 'PEFT').length, 1);
  // 不带祖先链的页面（旧 index.json 缓存）仍能靠快照补齐
  const legacyEntry = normalizeEntry(record(2, [
    { id: 'method.lora', facet: 'method', label: 'LoRA' },
  ]), origin, siteBasePath, registry);
  assert.equal(query([legacyEntry], '参数高效微调').length, 1);
});

test('论文库搜索能用词表别名召回对应任务论文', () => {
  const entry = normalizeEntry(record(3, [
    { id: 'task.diarization', facet: 'task', label: '说话人分离标注', ancestorIds: [] },
  ]), origin, siteBasePath, registry);
  assert.match(entry.searchText, /说话人日志/);
  assert.match(entry.searchText, /speaker diarization/);
  assert.equal(query([entry], '说话人日志').length, 1);
  assert.equal(query([entry], 'diarization').length, 1);
  // 父概念页不会被无关查询误召
  const other = normalizeEntry(record(4, [
    { id: 'setting.long-form', facet: 'setting', label: '长音频', ancestorIds: [] },
  ]), origin, siteBasePath, registry);
  assert.equal(query([entry, other], '说话人日志').length, 1);
});

test('快照缺失时论文库退化为页面自带标签，且不写入 undefined', () => {
  const entry = normalizeEntry(record(5, [
    { id: 'method.lora', facet: 'method', label: 'LoRA' },
  ]), origin, siteBasePath, null);
  assert.match(entry.searchText, /lora/);
  assert.doesNotMatch(entry.searchText, /参数高效微调/);
  assert.doesNotMatch(entry.searchText, /undefined/);
  assert.equal(query([entry], '参数高效微调').length, 0);
});

test('快照索引只接受合法概念记录并展开祖先词表', () => {
  const byId = registryIndex(registry);
  assert.deepEqual(
    tagTerms([{ id: 'method.lora', facet: 'method', label: 'LoRA', ancestorIds: ['method.peft'] }], byId),
    [
      'method.lora', 'method', 'LoRA', 'LoRA', 'Low-rank adaptation',
      'method.peft', '参数高效微调', 'Parameter-efficient fine-tuning', 'PEFT',
    ],
  );
  assert.deepEqual(registryIndex([registry.concepts]), Object.create(null));
  assert.deepEqual(tagTerms('not-an-array', byId), []);
  assert.deepEqual(tagTerms(undefined), []);
});


test('新旧索引归一化结果相同，保留原证明和输入，并拒绝混用字段', () => {
  const fields = [
    ['tagContract', 'taxonomyContract'], ['tagConcepts', 'taxonomyConcepts'],
    ['tagCatalogSha256', 'taxonomyRegistrySha256'], ['tagPublicationStatus', 'taxonomyPublicationStatus'],
    ['tagEvidenceContract', 'taxonomyEvidenceContract'], ['tagEvidenceType', 'taxonomyEvidenceType'],
    ['tagProofSha256', 'taxonomyProofSha256'], ['tagPageSha256', 'taxonomyPageSha256'],
    ['tagClassificationContract', 'taxonomyClassificationContract'],
  ];
  const legacy = { ...record(1, [{ id: 'method.lora', facet: 'method', label: 'LoRA' }]),
    taxonomyRegistrySha256: registry.registrySha256, taxonomyPublicationStatus: 'withheld',
    taxonomyEvidenceContract: 'historical-direct-tag-supplement-v2', taxonomyEvidenceType: 'source-only-tags',
    taxonomyProofSha256: 'b'.repeat(64), taxonomyPageSha256: 'c'.repeat(64),
    taxonomyClassificationContract: 'historical-source-tag-classification-v2' };
  const current = { ...legacy };
  fields.forEach(([name, oldName]) => { current[name] = current[oldName]; delete current[oldName]; });
  const before = JSON.stringify([legacy, current]);
  const oldEntry = normalizeEntry(legacy, origin, siteBasePath, registry);
  const newEntry = normalizeEntry(current, origin, siteBasePath, registry);
  assert.deepEqual(newEntry, oldEntry);
  for (const [name, oldName] of fields) {
    assert.ok(Object.hasOwn(newEntry, name));
    assert.ok(!Object.hasOwn(newEntry, oldName));
  }
  assert.equal(newEntry.tagProofSha256, legacy.taxonomyProofSha256);
  assert.equal(newEntry.tagPublicationStatus, 'withheld');
  assert.equal(newEntry.tagConcepts, legacy.taxonomyConcepts);
  assert.equal(JSON.stringify([legacy, current]), before);
  for (const value of [legacy.taxonomyConcepts, null]) {
    assert.throws(() => normalizeEntry({ ...legacy, tagConcepts: value }, origin, siteBasePath, registry),
      /标签字段不能混用新旧命名/);
  }
});
