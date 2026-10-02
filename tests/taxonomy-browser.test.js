'use strict';
const assert = require('node:assert/strict');
const test = require('node:test');
const core = require('../assets/js/taxonomy-core');
const browser = require('../assets/js/taxonomy-browser');

const snapshot = { concepts: [
  { id: 'task.root', facet: 'task', zh: '任务根', en: 'Root', aliases: [], ancestorIds: [] },
  { id: 'task.branch', facet: 'task', zh: '任务分支', en: '', aliases: [], ancestorIds: ['task.root'] },
  { id: 'task.deep', facet: 'task', zh: '深层任务', en: '', aliases: [], ancestorIds: ['task.root', 'task.branch'] },
  { id: 'task.leaf', facet: 'task', zh: '叶任务', en: '', aliases: ['ASR'], ancestorIds: ['task.root', 'task.branch', 'task.deep'] },
  { id: 'method.root', facet: 'method', zh: '独立方法', en: '', aliases: ['LoRA'], ancestorIds: [] }
] };

test('alias search normalizes full-width text and displays the complete path at arbitrary depth', () => {
  const matches = browser.searchConcepts(core.createRegistry(snapshot), 'ＡＳＲ');
  assert.equal(matches.length, 1);
  assert.equal(matches[0].concept.id, 'task.leaf');
  assert.equal(matches[0].path, '任务根 › 任务分支 › 深层任务 › 叶任务');
  const method = browser.searchConcepts(core.createRegistry(snapshot), 'lora')[0];
  assert.equal(method.path, '独立方法');
  assert.equal(method.concept.facet, 'method');
});

test('direction URLs use stable identifiers and preserve the GitHub Pages subpath', () => {
  assert.equal(browser.conceptURL('/audio-paper-digest-blog/papers/', 'method.root'), '/audio-paper-digest-blog/papers/?concept=method.root');
});

class Node {
  constructor() { this.hidden = false; this.dataset = {}; this.attributes = {}; this.events = {}; this.children = []; this.classList = { add() {} }; }
  setAttribute(name, value) { this.attributes[name] = value; }
  getAttribute(name) { return this.attributes[name]; }
  addEventListener(name, callback) { this.events[name] = callback; }
  appendChild(node) { this.children.push(node); }
  replaceChildren() { this.children = []; }
}

function fixture() {
  const root = new Node(), input = new Node(), results = new Node(), status = new Node(), panel = new Node(), facets = new Node();
  const button = new Node(), children = new Node(), direction = new Node(), facetLink = new Node(), facet = new Node();
  button.dataset.expand = 'task.root'; button.setAttribute('aria-controls', 'children-task.root');
  direction.dataset.conceptInfo = 'task.leaf'; direction.href = '/papers/?concept=task.leaf';
  facetLink.hash = '#facet-method'; facet.open = false;
  root.dataset.libraryUrl = '/audio-paper-digest-blog/papers/';
  root.querySelector = () => facets;
  root.querySelectorAll = selector => ({ '[data-expand]': [button], '[data-concept-info]': [direction], '.taxonomy-facet-nav a': [facetLink] }[selector] || []);
  const nodes = { 'taxonomy-browser': root, 'taxonomy-registry-data': { textContent: JSON.stringify(snapshot) }, 'taxonomy-query': input,
    'taxonomy-search-results': results, 'taxonomy-search-status': status, 'taxonomy-concept-panel': panel,
    'children-task.root': children, 'facet-method': facet };
  const document = { getElementById: id => nodes[id], createElement: () => new Node() };
  browser.mount(document, core, { search: '' });
  return { root, input, results, status, panel, facets, button, children, direction, facetLink, facet };
}

test('only the independent arrow toggles descendants; the direction link keeps navigation', () => {
  const f = fixture();
  assert.equal(f.children.hidden, true);
  assert.equal(f.button.getAttribute('aria-expanded'), 'false');
  assert.equal(f.direction.events.click, undefined);
  f.button.events.click();
  assert.equal(f.children.hidden, false);
  assert.equal(f.button.getAttribute('aria-expanded'), 'true');
  f.button.events.click();
  assert.equal(f.children.hidden, true);
});

test('search recovery and facet navigation keep all directions reachable', () => {
  const f = fixture();
  f.input.value = 'ASR'; f.input.events.input();
  assert.equal(f.facets.hidden, true);
  assert.equal(f.results.children.length, 1);
  assert.equal(f.results.children[0].href, '/audio-paper-digest-blog/papers/?concept=task.leaf');
  assert.match(f.results.children[0].children[1].textContent, /任务根 › 任务分支 › 深层任务 › 叶任务/);
  f.input.value = 'no-match'; f.input.events.input();
  assert.match(f.status.textContent, /找到 0/);
  f.facetLink.events.click();
  assert.equal(f.input.value, '');
  assert.equal(f.facets.hidden, false);
  assert.equal(f.results.hidden, true);
  assert.equal(f.facet.open, true);
});

test('Hugo exposes every published root and leaf, stable links and strictly validated paper paths without JS', t => {
  const fs = require('node:fs'), os = require('node:os'), path = require('node:path');
  const { execFileSync } = require('node:child_process');
  const source = path.resolve(__dirname, '..');
  const published = JSON.parse(fs.readFileSync(path.join(source, 'data/taxonomy-registry.json')));
  const graph = core.createRegistry(published);
  const task = Object.values(graph.byId).find(node => node.facet === 'task' && !node.ancestorIds.length);
  const method = Object.values(graph.byId).find(node => node.facet === 'method' && node.ancestorIds.length);
  assert.ok(task && method, 'published snapshot needs a root and a method child');
  const fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'blog-taxonomy-ui-'));
  t.after(() => fs.rmSync(fixtureRoot, { recursive: true, force: true }));
  // Synthetic pages use their own source/data root; production overlays must
  // not be evaluated against this deliberately incomplete four-page fixture.
  for (const directory of ['layouts', 'assets']) {
    fs.cpSync(path.join(source, directory), path.join(fixtureRoot, directory), { recursive: true });
  }
  fs.cpSync(path.join(source, 'themes', 'PaperMod'), path.join(fixtureRoot, 'themes', 'PaperMod'), {
    recursive: true, filter: file => path.basename(file) !== '.git'
  });
  const data = path.join(fixtureRoot, 'data');
  fs.mkdirSync(data);
  for (const name of ['taxonomy-registry.json', 'taxonomy-catalog.json']) {
    fs.copyFileSync(path.join(source, 'data', name), path.join(data, name));
  }
  const content = path.join(fixtureRoot, 'content');
  fs.mkdirSync(path.join(content, 'posts'), { recursive: true });
  const concepts = [task, method].map(node => ({ id: node.id, facet: node.facet, label: node.zh }));
  function writePaper(name, records, contract = core.contract) {
    fs.writeFileSync(path.join(content, 'posts', name + '.md'), [
      '---', 'title: "UI fixture"', 'date: 2026-09-29', 'paper_digest_page_type: paper',
      'tags: ["' + task.zh + '"]', 'paper_digest_primary_task: "' + task.zh + '"',
      'paper_digest_primary_method: "' + method.zh + '"', 'paper_digest_taxonomy_contract: ' + contract,
      'paper_digest_taxonomy_registry_sha256: "' + published.registrySha256 + '"',
      'paper_digest_taxonomy_concepts: ' + JSON.stringify(records), '---', '# UI fixture', 'Evidence.'
    ].join('\n'));
  }
  writePaper('valid', concepts);
  writePaper('invalid-facet', [{ id: task.id, facet: 'method', label: task.zh }]);
  writePaper('invalid-label', [{ id: task.id, facet: task.facet, label: 'wrong label' }]);
  writePaper('invalid-contract', concepts, 'unknown-contract');
  fs.writeFileSync(path.join(content, 'papers.md'), '---\ntitle: 论文库\nlayout: library\nurl: /papers/\n---\n');
  const config = path.join(fixtureRoot, 'config.yaml');
  fs.writeFileSync(config, ['baseURL: https://example.test/blog/', 'theme: PaperMod', 'buildFuture: true',
    'staticDir: []', 'dataDir: ' + JSON.stringify(data), 'outputs:', '  home: [HTML, JSON]',
    'params:', '  mainSections: [posts]', '  homeInfoParams:', '    Title: Research', ''].join('\n'));
  const destination = path.join(fixtureRoot, 'public');
  execFileSync('hugo', ['--source', fixtureRoot, '--config', config, '--contentDir', content,
    '--destination', destination, '--noBuildLock', '--panicOnWarning'], { stdio: 'pipe' });
  const directory = fs.readFileSync(path.join(destination, 'tags/index.html'), 'utf8');
  assert.match(directory, /\/js\/taxonomy-core\.min\.[a-f0-9]+\.js/);
  assert.match(directory, /\/js\/taxonomy-browser\.min\.[a-f0-9]+\.js/);
  assert.ok(directory.indexOf('/js/taxonomy-core.min.') < directory.indexOf('/js/taxonomy-browser.min.'),
    'the directory owns its ordered scripts instead of depending on the cached theme footer');
  const ids = [...directory.matchAll(/data-concept-id="([^"]+)"/g)].map(match => match[1]);
  const expected = Object.values(graph.byId).filter(core.isActive).map(node => node.id);
  assert.deepEqual(new Set(ids), new Set(expected));
  assert.equal(ids.length, expected.length, 'each concept rendered once, including leaf roots');
  assert.equal((directory.match(/id="facet-/g) || []).length, 9);
  assert.equal((directory.match(/class="taxonomy-node-count"/g) || []).length, expected.length, 'every concept has a cached subtree record count');
  assert.match(directory, /同一篇已核论文只计一次，身份待核时按页面保留/);
  assert.match(directory, /href="\/blog\/papers\/\?concept=method\./);
  assert.doesNotMatch(directory, /class="taxonomy-children"[^>]*hidden/);
  assert.ok(fs.existsSync(path.join(destination, 'papers/index.html')), 'every controlled link lands on the existing library route');
  const page = name => fs.readFileSync(path.join(destination, 'posts', name, 'index.html'), 'utf8');
  const valid = page('valid');
  assert.match(valid, /class="paper-taxonomy"/);
  assert.match(valid, /主任务/);
  assert.match(valid, /主方法/);
  assert.match(valid, /taxonomy-path-parent/);
  assert.ok(valid.includes('?concept=' + method.id));
  for (const name of ['invalid-facet', 'invalid-label', 'invalid-contract']) {
    const html = page(name);
    assert.doesNotMatch(html, /class="paper-taxonomy"/);
    assert.match(html, /研究分类信息暂未核验。/);
    assert.match(html, /class="post-tags"/, 'unverified original tags remain available');
  }
});
