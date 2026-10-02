'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const core = require('../assets/js/taxonomy-core.js');
const library = require('../assets/js/paper-library.js');
const origin = 'https://example.test';
const base = '/blog/';
const snapshot = {
  contract: 'paper-taxonomy-registry-snapshot-v1',
  concepts: [
    { id: 'task.asr', facet: 'task', zh: '语音识别', en: 'ASR', aliases: [], ancestorIds: [], definition: '将语音转写为文字。' },
    { id: 'task.av-asr', facet: 'task', zh: '音视频识别', en: 'AVSR', aliases: [], ancestorIds: ['task.asr'] },
    { id: 'task.synthesis', facet: 'task', zh: '语音合成', en: 'TTS', aliases: [], ancestorIds: [] },
    { id: 'method.peft', facet: 'method', zh: '参数高效微调', en: 'PEFT', aliases: [], ancestorIds: [] },
    { id: 'method.lora', facet: 'method', zh: 'LoRA', en: 'Low-rank adaptation', aliases: ['低秩适配'], ancestorIds: ['method.peft'] },
    { id: 'setting.streaming', facet: 'setting', zh: '流式', en: 'Streaming', aliases: [], ancestorIds: [] },
  ]
};
const graph = core.createRegistry(snapshot);
function record(slug, ids = [], extras = {}) {
  return { title: slug, titleZh: slug, pageType: 'paper', permalink: origin + base + 'posts/' + slug + '/',
    date: '2026-09-30', summary: '可靠 evidence', score: 8,
    taxonomyContract: core.contract,
    taxonomyConcepts: ids.map((id) => ({ id, facet: graph.byId[id].facet, label: graph.byId[id].zh })), ...extras };
}
function normalize(items) { return items.map((item) => library.normalizeEntry(item, origin, base, snapshot)); }
function run(items, suffix, extraState = {}) {
  const entries = normalize(items);
  return library.libraryResults(entries, core.groupPapers(entries, graph),
    { query: '', type: 'paper', year: 'all', sort: 'newest', ...extraState },
    library.directionState(new URLSearchParams(suffix), graph), graph, core);
}

test('stable concept URLs retain same-facet OR, cross-facet AND and strict primary roles', () => {
  const items = [record('a', ['task.av-asr', 'method.lora', 'setting.streaming'], { primaryTaskId: 'task.av-asr', primaryMethodId: 'method.lora' }),
    record('b', ['task.synthesis', 'method.lora']), record('legacy', [], { tags: ['语音识别'], task: '语音识别' })];
  assert.equal(run(items, 'concept=task.asr').length, 1);
  assert.equal(run(items, 'concept=task.asr&scope=direct').length, 0);
  assert.equal(run(items, 'concept=task.asr&concept=task.synthesis&concept=method.peft').length, 2);
  assert.equal(run(items, 'concept=task.synthesis&role=primary').length, 0);
  assert.equal(run(items, 'concept=task.asr&concept=method.peft&concept=setting.streaming&role=primary').length, 1);
  assert.equal(run(items, '').length, 3);
  assert.equal(run(items, 'concept=task.unknown').length, 0);
});

test('verified paper identities collapse while retaining all safe guide links and using matching representative', () => {
  const items = [record('old', ['task.asr'], { arxivId: '2609.00001v1', identityStatus: 'verified', date: '2025-01-01' }),
    record('new', ['task.asr'], { arxivId: '2609.00001v2', identityStatus: 'verified' }),
    record('unknown', ['task.asr'], { arxivId: '2609.00001', identityStatus: 'unknown' })];
  const result = run(items, 'concept=task.asr');
  assert.equal(result.length, 2);
  const merged = result.find((entry) => entry.guides.length === 2);
  assert.equal(merged.title, 'new');
  assert.deepEqual(merged.guides.map((entry) => entry.title), ['new', 'old']);
  const historical = run(items, 'concept=task.asr', { year: '2025' });
  assert.equal(historical[0].title, 'old');
  assert.equal(historical[0].guides.length, 2);
});

test('keyword aliases remain searchable while unreviewed flat tags do not become controlled membership', () => {
  const items = [record('LoRA-guide', ['method.lora']), record('flat-only', [], { tags: ['LoRA'], primaryMethodId: 'method.lora' })];
  assert.equal(run(items, '', { query: '参数高效微调' }).length, 1);
  assert.equal(run(items, 'concept=method.peft&role=primary').length, 0);
  assert.equal(run(items, 'concept=method.peft').length, 1);
  assert.equal(run(items, '', { query: 'LoRA' }).length, 2);
  assert.equal(library.normalizeEntry(record('unsafe', [], { permalink: 'javascript:alert(1)' }), origin, base, snapshot), null);
});

test('keyword and year criteria cannot borrow controlled concepts from a different guide of the same paper', () => {
  const identity = { arxivId: '2609.00002', identityStatus: 'verified' };
  const items = [record('old-keyword-only', [], { ...identity, date: '2025-01-01', summary: 'unique-needle' }),
    record('new-controlled', ['task.asr'], identity)];
  assert.equal(run(items, 'concept=task.asr', { query: 'unique-needle' }).length, 0);
  assert.equal(run(items, 'concept=task.asr', { year: '2025' }).length, 0);
  const current = run(items, 'concept=task.asr', { year: '2026' });
  assert.equal(current.length, 1);
  assert.equal(current[0].guides.length, 2);
  assert.equal(current[0].paperGroup.articles.length, 1);
  const sameYear = [record('latest-unclassified', [], { ...identity, date: '2026-09-30' }),
    record('older-classified', ['task.asr'], { ...identity, date: '2026-01-01' })];
  const classified = run(sameYear, 'concept=task.asr');
  assert.equal(classified[0].title, 'older-classified');
  assert.equal(classified[0].guides.length, 2);
});

function browser(items, suffix = '', withRegistry = true, indexLoader = null) {
  const nodes = {};
  const listeners = {};
  class Element {
    constructor(tag = 'div') { this.tagName = tag; this.children = []; this.dataset = {}; this.handlers = {}; this.attributes = {}; this._text = ''; this._value = ''; this.hidden = false; this.open = false; }
    set textContent(value) { this._text = String(value); this.children = []; }
    get textContent() { return this._text + this.children.map((child) => child.textContent).join(''); }
    set value(value) { this._value = this.tagName === 'select' && !this.children.some((item) => item.value === value) ? '' : String(value); }
    get value() { return this._value; }
    appendChild(child) { if (child.tagName === 'fragment') { child.children.forEach((item) => this.appendChild(item)); return child; } this.children.push(child); return child; }
    replaceChildren() { this.textContent = ''; }
    setAttribute(key, value) { this.attributes[key] = String(value); }
    addEventListener(key, fn) { this.handlers[key] = fn; }
    dispatch(key) { const event = { preventDefault() {} }; this.handlers[key]?.(event); }
    focus() {}
  }
  function add(id, tag = 'div', values = []) {
    const node = nodes[id] = new Element(tag);
    values.forEach((value) => { const option = new Element('option'); option.value = value; node.appendChild(option); });
    return node;
  }
  add('paper-library').dataset.indexUrl = base + 'index.json';
  add('library-query', 'input'); add('library-type', 'select', ['paper', 'daily', 'conference', 'all']);
  add('library-year', 'select', ['all']); add('library-sort', 'select', ['newest', 'score', 'title']);
  add('library-scope', 'select', ['subtree', 'direct']); add('library-role', 'select', ['any', 'primary']);
  add('library-direction-search', 'input');
  add('library-export-format', 'select', ['md', 'csv', 'bib', 'ris']);
  ['library-select-visible', 'library-selection-clear', 'library-export', 'library-export-status'].forEach((id) => add(id));
  ['library-count', 'library-results', 'library-more', 'paper-library-filters', 'library-direction-panel', 'library-direction-tree',
    'library-directions', 'library-coverage', 'library-draft-status', 'library-direction-apply', 'library-direction-cancel', 'library-direction-clear'].forEach((id) => add(id));
  const window = {
    location: new URL(origin + base + 'papers/' + suffix), ResearchTaxonomy: core, ResearchSearchIndex: indexLoader,
    ResearchReading: new Proxy({}, {get() { throw new Error('Library must not access retained personal data'); }}),
    ResearchReadingExport: { build(entries, format, options) { window.exported = {entries, format, options}; return {}; }, download() {} },
    history: { pushes: [], pushState(_s, _t, target) { this.pushes.push(target); window.location = new URL(target, window.location); },
      replaceState(_s, _t, target) { window.location = new URL(target, window.location); } },
    addEventListener(key, fn) { listeners[key] = fn; }, clearTimeout() {}, setTimeout(fn) { fn(); }
  };
  const document = { getElementById: (id) => nodes[id] || null, querySelectorAll: () => [], createElement: (tag) => new Element(tag), createDocumentFragment: () => new Element('fragment') };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../assets/js/paper-library.js'), 'utf8'), {
    document, window, URL, URLSearchParams,
    fetch: (url) => Promise.resolve({ ok: true, json: () => Promise.resolve(String(url).endsWith('taxonomy-registry.json') ? (withRegistry ? snapshot : null) : items) })
  });
  function descendants(node) { return node.children.flatMap((child) => [child, ...descendants(child)]); }
  return { nodes, window, listeners, descendants, ready: () => new Promise((resolve) => setImmediate(resolve)) };
}

test('paper selection and downloads work without saved controls and never access retained personal data', async () => {
  const fixture = browser([record('a', ['task.asr']), record('b', ['task.synthesis'])], '?saved=saved&reading=read');
  await fixture.ready();
  const {nodes, descendants, window} = fixture;
  assert.match(nodes['library-count'].textContent, /找到 2 条/);
  const choices = descendants(nodes['library-results']).filter(node => node.tagName === 'input' && node.type === 'checkbox');
  assert.equal(choices.length, 2);
  assert.ok(!descendants(nodes['library-results']).some(node => node.attributes['data-reading-bookmark']));
  choices[0].checked = true; choices[0].dispatch('change');
  nodes['library-export-format'].value = 'csv'; nodes['library-export'].dispatch('click');
  assert.equal(window.exported.entries.length, 1); assert.equal(window.exported.format, 'csv');
  assert.ok(!Object.hasOwn(window.exported.entries[0], 'readingState'));
  nodes['library-select-visible'].dispatch('click'); nodes['library-export'].dispatch('click');
  assert.equal(window.exported.entries.length, 2);
  nodes['library-selection-clear'].dispatch('click'); nodes['library-export'].dispatch('click');
  assert.equal(window.exported.entries.length, 0);
});

test('mobile panel stages selections, expansion does not select, cancel discards and Apply records URL history', async () => {
  const fixture = browser([record('asr', ['task.av-asr']), record('tts', ['task.synthesis'])]);
  await fixture.ready();
  const { nodes, descendants, window } = fixture;
  const panel = nodes['library-direction-panel']; panel.open = true; panel.dispatch('toggle');
  const tree = nodes['library-direction-tree'];
  const toggle = descendants(tree).find((node) => node.attributes['aria-label']?.includes('语音识别'));
  toggle.dispatch('click');
  assert.equal(window.location.searchParams.has('concept'), false);
  const checkbox = descendants(tree).find((node) => node.tagName === 'input' && node.value === 'task.asr');
  checkbox.checked = true; checkbox.dispatch('change');
  assert.match(nodes['library-draft-status'].textContent, /预览 1 条/);
  assert.match(nodes['library-count'].textContent, /找到 2 条/);
  nodes['library-direction-cancel'].dispatch('click');
  assert.equal(window.location.searchParams.has('concept'), false);
  panel.open = true; panel.dispatch('toggle');
  const newCheckbox = descendants(tree).find((node) => node.tagName === 'input' && node.value === 'task.asr');
  assert.equal(newCheckbox.checked, false);
  newCheckbox.checked = true; newCheckbox.dispatch('change'); nodes['library-direction-apply'].dispatch('click');
  assert.equal(window.location.searchParams.get('concept'), 'task.asr');
  assert.equal(window.history.pushes.length, 1);
  assert.match(nodes['library-count'].textContent, /找到 1 条/);
  assert.match(nodes['library-directions'].textContent, /语音识别.*将语音转写为文字/);
  assert.match(nodes['library-coverage'].textContent, /方向标签覆盖 2 \/ 2；研究类型与范围已核验 0 \/ 2/);
  const template = fs.readFileSync(path.join(__dirname, '../layouts/_default/library.html'), 'utf8');
  assert.match(template, /研究类型与范围仅展示已有核验记录，缺失信息不自动补填/);
  assert.match(template, /方向覆盖数量不代表所有论文都接受了逐篇原文复审/);
});

test('direction URL restores subtree, direct and primary filters on reload/back without replacing history', async () => {
  const fixture = browser([record('av', ['task.av-asr'], { primaryTaskId: 'task.av-asr' }), record('asr', ['task.asr'])], '?concept=task.asr&role=primary');
  await fixture.ready();
  assert.match(fixture.nodes['library-count'].textContent, /找到 1 条/);
  fixture.window.location = new URL(origin + base + 'papers/?concept=task.asr&scope=direct&role=primary');
  fixture.listeners.popstate();
  assert.match(fixture.nodes['library-count'].textContent, /找到 0 条/);
  assert.equal(fixture.window.location.searchParams.get('scope'), 'direct');
  assert.equal(fixture.window.history.pushes.length, 0);
  fixture.window.location = new URL(origin + base + 'papers/'); fixture.listeners.popstate();
  assert.match(fixture.nodes['library-count'].textContent, /找到 2 条/);
});

test('missing registry preserves keyword browsing and fails closed for selected concept links', async () => {
  const fixture = browser([record('legacy')], '?concept=task.asr', false);
  await fixture.ready();
  assert.match(fixture.nodes['library-count'].textContent, /找到 0 条/);
  assert.match(fixture.nodes['library-directions'].textContent, /无法在当前目录确认/);
  fixture.window.location = new URL(origin + base + 'papers/?q=legacy'); fixture.listeners.popstate();
  assert.match(fixture.nodes['library-count'].textContent, /找到 1 条/);
});

test('library delegates index loading to the shared loader and exposes integrity errors without partial results', async () => {
  const items = [record('shared-loader')];
  let calls = 0;
  const fixture = browser([], '', true, { load: async (url, options) => {
    calls += 1;
    assert.equal(String(url), origin + base + 'index.json');
    assert.equal(options.origin, origin); assert.equal(options.basePath, base);
    return items;
  } });
  await fixture.ready();
  assert.equal(calls, 1);
  assert.match(fixture.nodes['library-count'].textContent, /找到 1 条/);
  const failed = browser(items, '', true, { load: async () => { throw new Error('论文索引校验失败：分片 SHA-256 与清单不符'); } });
  await failed.ready();
  assert.equal(failed.nodes['library-count'].textContent, '论文索引载入失败');
  assert.match(failed.nodes['library-results'].textContent, /SHA-256/);
  assert.equal(failed.nodes['library-more'].hidden, true);
});
