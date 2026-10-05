'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

function browserFixture(kind, items, suffix = '', fail = false, registry = null, catalog = null, newAssets = null) {
  const listeners = {};
  const nodes = {};
  let document;
  class Element {
    constructor(tag = 'div') {
      this.tagName = tag; this.children = []; this.dataset = {}; this.handlers = {};
      this.attributes = {}; this.hidden = false; this._text = ''; this._value = '';
      this.classList = { toggle() {}, remove() {} };
    }
    set textContent(value) { this._text = String(value); this.children = []; }
    get textContent() { return this._text + this.children.map((child) => child.textContent).join(''); }
    set value(value) {
      this._value = this.tagName === 'select' && !this.children.some((child) => child.value === value) ? '' : String(value);
    }
    get value() { return this._value; }
    get parentElement() { return this.parentNode; }
    appendChild(child) {
      if (child.tagName === 'fragment') { child.children.slice().forEach((item) => this.appendChild(item)); return child; }
      child.parentNode = this; this.children.push(child); return child;
    }
    insertBefore(child, before) { child.parentNode = this; this.children.splice(this.children.indexOf(before), 0, child); }
    replaceChildren() { this.children = []; this._text = ''; }
    setAttribute(key, value) { this.attributes[key] = String(value); }
    addEventListener(key, fn) { this.handlers[key] = fn; }
    dispatch(key, options = {}) { const event = { preventDefault() { this.defaultPrevented = true; }, ...options }; this.handlers[key]?.(event); return event; }
    focus() { document.activeElement = this; }
  }
  function add(id, tag, values) {
    const element = nodes[id] = new Element(tag);
    element.id = id;
    (values || []).forEach((value) => { const option = new Element('option'); option.value = value; element.appendChild(option); });
    return element;
  }
  const parent = new Element();
  if (kind === 'library') {
    add('paper-library').dataset.indexUrl = '/audio-paper-digest-blog/index.json';
    add('library-query', 'input');
    add('library-type', 'select', ['paper', 'daily', 'conference', 'all']);
    add('library-year', 'select', ['all']);
    add('library-sort', 'select', ['newest', 'score', 'title']);
    ['library-count', 'library-results', 'library-more', 'paper-library-filters'].forEach((id) => add(id));
  } else {
    add('searchInput', 'input');
    parent.appendChild(add('searchResults', 'ul'));
  }
  document = {
    getElementById: (id) => nodes[id] || null,
    createElement: (tag) => new Element(tag), createDocumentFragment: () => new Element('fragment'),
    querySelectorAll: () => []
  };
  const requests = [];
  const window = {
    location: new URL(`https://nanless.github.io/audio-paper-digest-blog/${kind === 'library' ? 'papers/' : 'search'}${suffix}`),
    history: { replaceState(_state, _title, target) { window.location = new URL(target, window.location); } },
    addEventListener(key, fn) { listeners[key] = fn; },
    clearTimeout() {}, setTimeout(fn) { fn(); return 1; }
  };
  if (catalog || newAssets) window.ResearchTags = require('../assets/js/tag-core');
  const fuseLoads = [];
  class FakeFuse {
    constructor(data, options) { this.data = data; fuseLoads.push({ data, options }); }
    search(query) { return this.data.filter((entry) => JSON.stringify(entry).toLowerCase().includes(query.toLowerCase())).map((item) => ({ item })); }
  }
  let source = fs.readFileSync(path.join(__dirname, '..', 'assets', 'js', kind === 'library' ? 'paper-library.js' : 'fastsearch.js'), 'utf8');
  source = source.replace(/^import .*@params.*;\n/, '');
  vm.runInNewContext(source, {
    document, window, URL, URLSearchParams, params: {}, Fuse: FakeFuse,
    fetch(url) {
      requests.push(String(url));
      if (fail) return Promise.reject(new Error('offline'));
      const filename = new URL(url).pathname.split('/').at(-1);
      if (filename.startsWith('tag-catalog-')) {
        const value = newAssets ? newAssets[filename] : undefined;
        if (value instanceof Error) return Promise.reject(value);
        if (value === undefined || typeof value === 'number') return Promise.resolve({ status: value || 404, ok: false });
        return Promise.resolve({ status: 200, ok: true, json: () => Promise.resolve(value) });
      }
      const payload = registry && String(url).endsWith('data/taxonomy-registry.json')
        ? registry : catalog && String(url).endsWith('data/taxonomy-catalog.json') ? catalog : items;
      return Promise.resolve({ status: 200, ok: true, json: () => Promise.resolve(payload) });
    }
  });
  return { nodes, document, window, requests, parent, listeners, fuseLoads, ready: () => new Promise((resolve) => setImmediate(resolve)) };
}

function record(index = 0) {
  return { title: `Paper ${index}`, titleZh: `论文 ${index}`, originalTitle: `Paper ${index}`,
    permalink: `https://nanless.github.io/audio-paper-digest-blog/posts/paper-${index}/`,
    date: '2026-09-04', pageType: 'paper', task: 'speech', score: '8', arxivId: '2609.00001', summary: 'Evidence' };
}

test('library recovers invalid filters, retains pagination on article return and handles Enter without navigation', async () => {
  const browser = browserFixture('library', Array.from({ length: 65 }, (_, index) => record(index)), '?type=invalid&year=1900&sort=oops&page=2');
  await browser.ready();
  const { nodes, window } = browser;
  assert.equal(nodes['library-type'].value, 'paper');
  assert.equal(nodes['library-year'].value, 'all');
  assert.equal(nodes['library-sort'].value, 'newest');
  assert.match(nodes['library-count'].textContent, /65 条，当前显示 60 条/);
  nodes['library-more'].dispatch('click');
  assert.equal(nodes['library-more'].hidden, true);
  assert.equal(window.location.searchParams.get('page'), '3');
  assert.equal(nodes['paper-library-filters'].dispatch('submit').defaultPrevented, true);
  assert.match(nodes['library-count'].textContent, /当前显示 30 条/);
  assert.equal(window.location.searchParams.has('page'), false);
});

test('library zero-result state provides a working reset action and survives popstate', async () => {
  const browser = browserFixture('library', [record()], '?q=does-not-exist');
  await browser.ready();
  const empty = browser.nodes['library-results'].children[0];
  assert.match(empty.textContent, /没有符合条件/);
  empty.children[0].dispatch('click');
  assert.match(browser.nodes['library-count'].textContent, /找到 1 条/);
  browser.window.location = new URL('https://nanless.github.io/audio-paper-digest-blog/papers/?q=no-match');
  browser.listeners.popstate();
  assert.match(browser.nodes['library-count'].textContent, /找到 0 条/);
});

test('search reads shareable query URLs, uses the correct subpath without a trailing slash and makes keyboard-accessible cards', async () => {
  const browser = browserFixture('search', [record(), { ...record(1), permalink: 'https://evil.example/p/' }], '?q=Paper');
  await browser.ready();
  assert.equal(browser.requests[0], 'https://nanless.github.io/audio-paper-digest-blog/index.json');
  const card = browser.nodes.searchResults.children[0];
  const link = card.children.at(-1);
  assert.equal(link.className, 'entry-link');
  assert.match(card.textContent, /论文 0.*Paper 0.*Evidence/);
  assert.equal(browser.nodes.searchResults.children.length, 1);
  browser.nodes.searchInput.dispatch('keydown', { key: 'ArrowDown' });
  assert.equal(browser.document.activeElement, link);
  browser.nodes.searchResults.dispatch('keydown', { key: 'ArrowUp' });
  assert.equal(browser.document.activeElement, browser.nodes.searchInput);
  browser.nodes.searchInput.dispatch('keydown', { key: 'Escape' });
  assert.equal(browser.window.location.searchParams.has('q'), false);
});

test('search announces zero matches and exposes archive navigation after index failure', async () => {
  const browser = browserFixture('search', [record()], '?q=missing');
  await browser.ready();
  assert.match(browser.parent.children[0].textContent, /没有找到匹配/);
  const offline = browserFixture('search', [], '', true);
  await offline.ready();
  const archiveLink = offline.nodes.searchResults.children.find(node => node.children[0]?.tagName === 'a').children[0];
  assert.equal(archiveLink.href, 'https://nanless.github.io/audio-paper-digest-blog/archives/');
  const retry = offline.nodes.searchResults.children.at(-1).children[0];
  assert.equal(retry.tagName, 'button');
  retry.dispatch('click'); await offline.ready();
  assert.equal(offline.requests.filter(url => url.endsWith('index.json')).length, 2);
});

test('经典搜索用词表快照中的上级名称与别名召回论文', async () => {
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
    ],
  };
  const items = [
    {
      ...record(0),
      taxonomyConcepts: [{ id: 'method.lora', facet: 'method', label: 'LoRA', ancestorIds: ['method.peft'] }],
    },
    {
      ...record(1),
      taxonomyConcepts: [{ id: 'task.diarization', facet: 'task', label: '说话人分离标注', ancestorIds: [] }],
    },
  ];
  const browser = browserFixture('search', items, '?q=参数高效微调', false, registry);
  await browser.ready();
  assert.equal(browser.requests[0], 'https://nanless.github.io/audio-paper-digest-blog/index.json');
  assert.equal(browser.requests[1], 'https://nanless.github.io/audio-paper-digest-blog/data/taxonomy-registry.json');
  assert.equal(browser.nodes.searchResults.children.length, 1);
  assert.match(browser.nodes.searchResults.textContent, /论文 0/);
  browser.nodes.searchInput.value = '说话人日志';
  browser.nodes.searchInput.dispatch('input');
  assert.equal(browser.nodes.searchResults.children.length, 1);
  assert.match(browser.nodes.searchResults.textContent, /论文 1/);
});

test('classic search projects validated historical parents to the current directory and rejects held or mismatched labels', async () => {
  const node = (id, zh, ancestorIds = []) => ({ id, zh, facet: 'method', en: '', aliases: [], ancestorIds });
  const old = { registrySha256: '1'.repeat(64), concepts: [node('method.a', '原先上级'), node('method.b', '现行上级'), node('method.child', '原名称', ['method.a'])] };
  const current = { registrySha256: '2'.repeat(64), concepts: [node('method.a', '原先上级'), node('method.b', '现行上级'), node('method.child', '新名称', ['method.b'])] };
  const catalog = { contract: 'paper-taxonomy-version-catalog-v1', currentSha256: current.registrySha256, snapshots: [old, current] };
  const typed = { ...record(), taxonomyContract: 'paper-taxonomy-flat-tags-compat-v1', taxonomyRegistrySha256: old.registrySha256,
    taxonomyConcepts: [{ id: 'method.child', facet: 'method', label: '原名称' }] };
  const items = [typed, { ...typed, permalink: record(1).permalink, taxonomyPublicationStatus: 'withheld' },
    { ...typed, permalink: record(2).permalink, taxonomyConcepts: [{ id: 'method.child', facet: 'method', label: '新名称' }] }];
  const browser = browserFixture('search', items, '?q=现行上级', false, current, catalog);
  await browser.ready();
  assert.equal(browser.nodes.searchResults.children.length, 1);
  assert.match(browser.nodes.searchResults.textContent, /论文 0/);
  browser.nodes.searchInput.value = '原先上级'; browser.nodes.searchInput.dispatch('input');
  assert.equal(browser.nodes.searchResults.children.length, 0);
  browser.nodes.searchInput.value = '原名称'; browser.nodes.searchInput.dispatch('input');
  assert.match(browser.nodes.searchResults.textContent, /论文 0/);
});

// The core may fail to load independently. Keyword list/reset must remain usable
// without rendering unverified type-aware classification labels.
test('absent tag core preserves ordinary and typed keyword cards plus zero-match reset', async () => {
  const browser = browserFixture('library', [record(), { ...record(1), taxonomyClassificationContract: 'historical-source-taxonomy-classification-v2', researchType: 'science', primaryResearchRole: { kind: 'scientific_topic', conceptId: 'scientific_topic.phonetics', label: '语音学' } }]);
  await browser.ready();
  assert.equal(browser.window.ResearchTags, undefined);
  assert.match(browser.nodes['library-count'].textContent, /找到 2 条/);
  assert.equal(browser.nodes['library-results'].children.length, 2);
  for (const card of browser.nodes['library-results'].children) assert.equal(card.children[0].children[0].children[0].tagName, 'a');
  assert.ok(!browser.nodes['library-results'].textContent.includes('主要研究主题'));
  browser.nodes['library-query'].value = 'no-matching-evidence';
  browser.nodes['paper-library-filters'].dispatch('submit');
  assert.match(browser.nodes['library-count'].textContent, /找到 0 条/);
  browser.nodes['library-results'].children[0].children[0].dispatch('click');
  assert.match(browser.nodes['library-count'].textContent, /找到 2 条/);
  assert.equal(browser.nodes['library-results'].children.length, 2);
});


test('核心脚本缺席时，新标签字段仍可搜索且不改写原索引', async () => {
  const item = { ...record(), tagContract: 'paper-tag-flat-tags-v2',
    tagConcepts: [{ id: 'task.example', facet: 'task', label: '声音理解' }],
    tagCatalogSha256: 'a'.repeat(64), tagProofSha256: 'b'.repeat(64),
    tagClassificationContract: 'historical-source-tag-classification-v2',
    primaryResearchRole: { kind: 'scientific_topic', label: '语音学' } };
  const before = JSON.stringify(item);
  for (const kind of ['library', 'search']) {
    const browser = browserFixture(kind, [item], '?q=声音理解');
    await browser.ready();
    assert.equal(browser.window.ResearchTags, undefined);
    const results = browser.nodes[kind === 'library' ? 'library-results' : 'searchResults'];
    assert.equal(results.children.length, 1);
    assert.match(results.textContent, /论文 0/);
    assert.ok(!results.textContent.includes('主要研究主题'));
    if (kind === 'search') {
      const { data, options } = browser.fuseLoads[0];
      assert.equal(data[0].tagConcepts, item.tagConcepts);
      assert.equal(data[0].tagProofSha256, item.tagProofSha256);
      assert.ok(!Object.hasOwn(data[0], 'taxonomyConcepts'));
      assert.ok(data[0].tagAliases.includes('声音理解'));
      assert.ok(options.keys.includes('tagAliases'));
    }
    assert.equal(JSON.stringify(item), before);
  }
});

test('核心脚本缺席时，两种搜索均拒绝同值或空值的新旧字段混用', async () => {
  const concepts = [{ id: 'task.example', facet: 'task', label: '声音理解' }];
  for (const kind of ['library', 'search']) {
    for (const value of [concepts, null]) {
      const item = { ...record(), taxonomyConcepts: concepts, tagConcepts: value };
      const before = JSON.stringify(item);
      const browser = browserFixture(kind, [item], '?q=Paper');
      await browser.ready();
      if (kind === 'library') assert.equal(browser.nodes['library-count'].textContent, '论文索引载入失败');
      else {
        assert.equal(browser.fuseLoads.length, 0);
        assert.match(browser.parent.textContent, /搜索暂时不可用/);
      }
      assert.equal(JSON.stringify(item), before);
    }
  }
});


test('经典搜索使用新版资源与当前字段，部分或坏新版不回退到旧词表', async () => {
  const saved = { contract: 'paper-taxonomy-registry-snapshot-v1', registrySha256: 'a'.repeat(64), concepts: [
    { id: 'method.peft', facet: 'method', zh: '参数高效微调', en: '', aliases: ['PEFT'], ancestorIds: [] },
    { id: 'method.lora', facet: 'method', zh: 'LoRA', en: '', aliases: [], ancestorIds: ['method.peft'] }
  ] };
  const display = { ...saved, contract: 'paper-tag-catalog-snapshot-v2' };
  const versions = { contract: 'paper-tag-catalog-versions-v2', currentSha256: saved.registrySha256, snapshots: [saved] };
  const item = { ...record(), tagContract: 'paper-tag-flat-tags-v2', tagCatalogSha256: saved.registrySha256,
    tagConcepts: [{ id: 'method.lora', facet: 'method', label: 'LoRA' }] };
  const assets = { 'tag-catalog-snapshot.json': display, 'tag-catalog-versions.json': versions };
  const loaded = browserFixture('search', [item], '?q=参数高效微调', false, saved, null, assets);
  await loaded.ready();
  assert.equal(loaded.nodes.searchResults.children.length, 1);
  assert.match(loaded.nodes.searchResults.textContent, /论文 0/);
  assert.ok(loaded.requests.includes('https://nanless.github.io/audio-paper-digest-blog/data/tag-catalog-versions.json'));
  assert.ok(!loaded.requests.some(url => url.endsWith('/taxonomy-registry.json')));
  for (const value of [404, { ...versions, contract: 'unknown' }, 500]) {
    const failed = browserFixture('search', [item], '?q=Paper', false, saved, null, { ...assets, 'tag-catalog-versions.json': value });
    await failed.ready();
    assert.equal(failed.fuseLoads.length, 0);
    assert.match(failed.parent.textContent, /搜索暂时不可用/);
    assert.ok(!failed.requests.some(url => url.endsWith('/taxonomy-registry.json')));
  }
});
