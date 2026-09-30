'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const vm = require('node:vm');
const { execFileSync } = require('node:child_process');
const api = require('../assets/js/conference-directory');
const root = path.resolve(__dirname, '..');
function entry(id = 'sample-2026', extra = {}) {
  return { id, venueId: id.replace(/-20\d{2}$/, ''), name: 'Sample', fullName: 'Sample Research Conference', year: 2026,
    summaryPath: '/posts/conference-sample-2026/', categoryPath: '/categories/sample-2026/',
    event: { startDate: '2026-04-29', endDate: '2026-05-03', status: 'confirmed', sourceUrl: 'https://official.example/schedule' },
    ranking: { scheme: 'CCF', grade: 'A', edition: '2026 第七版', scope: 'main-conference-full-regular-paper', sourceUrl: 'https://ccf.example/catalog' }, ...extra };
}
function state(extra = {}) { return { year: 'all', month: 'all', grade: 'all', venue: 'all', query: '', ...extra }; }
test('event dates require real calendar dates and official bindings, never publication dates', () => {
  assert.equal(api.date('2026-02-29'), '');
  assert.equal(api.date('2024-02-29'), '2024-02-29');
  const pending = api.normalizeEntry(entry('pending-2026', { date: '2026-09-30', event: { status: 'pending' } }));
  assert.equal(pending.startDate, '');
  assert.equal(api.filterEntries([pending], state({ month: '09' })).length, 0);
  assert.equal(api.filterEntries([pending], state({ month: 'unknown', year: '2026' })).length, 1);
  for (const sourceUrl of ['http://official.example', 'https://user:secret@official.example', 'javascript:alert(1)']) {
    assert.equal(api.normalizeEntry(entry('bad-2026', { event: { status: 'confirmed', startDate: '2026-04-29', sourceUrl } })).dateStatus, 'pending');
  }
  assert.equal(api.normalizeEntry(entry('tba-2026', { event: { status: 'tba', sourceUrl: 'https://official.example/' } })).dateStatus, 'tba');
  assert.equal(api.normalizeEntry(entry('not-tba-2026', { event: { status: 'tba' } })).dateStatus, 'pending');
});
test('cross-month and cross-year interval queries include one edition exactly once', () => {
  const entries = [api.normalizeEntry(entry()), api.normalizeEntry(entry('newyear-2026', { event: { status: 'confirmed', startDate: '2026-12-30', endDate: '2027-01-02', sourceUrl: 'https://official.example/' } }))];
  assert.equal(api.filterEntries(entries, state({ year: '2026', month: '04' })).length, 1);
  assert.equal(api.filterEntries(entries, state({ year: '2026', month: '05' })).length, 1);
  assert.equal(api.filterEntries(entries, state({ year: '2026', month: '06' })).length, 0);
  assert.equal(api.filterEntries(entries, state({ year: '2027', month: '01' }))[0].id, 'newyear-2026');
  assert.deepEqual(api.availableYears(entries), ['2027', '2026']);
  assert.equal(api.filterEntries(entries, state()).length, 2);
});
test('grade, scheme, catalog version and full-paper scope close together; candidate grades remain pending', () => {
  assert.equal(api.normalizeEntry(entry()).grade, 'A');
  for (const changes of [{ sourceUrl: '' }, { scope: 'workshop' }, { edition: '' }, { scheme: 'Other' }, { grade: 'pending', candidateGrade: 'A' }]) {
    const item = entry(); item.ranking = { ...item.ranking, ...changes };
    assert.equal(api.normalizeEntry(item).grade, 'pending');
  }
  const unlisted = entry(); unlisted.ranking.grade = 'unlisted'; unlisted.ranking.scope = 'not-listed';
  assert.equal(api.normalizeEntry(unlisted).grade, 'unlisted');
});
test('a conference edition is one card regardless of its reading guide links', () => {
  const catalog = { contract: api.contract, entries: [entry('sample-2026', { links: [{ path: '/posts/new/', label: '会议总览' }, { path: '/posts/old/', label: '早期精选' }] })] };
  assert.equal(api.normalizeCatalog(catalog).length, 1);
  assert.throws(() => api.normalizeCatalog({ ...catalog, entries: [entry(), entry('sample-alternate-2026', { venueId: 'sample' })] }), /同届会议/);
  assert.throws(() => api.normalizeCatalog({ contract: 'wrong', entries: [] }), /格式/);
});
test('meeting aliases normalize safely and filters are AND across independent criteria', () => {
  const items = [api.normalizeEntry(entry('speech-2026', { name: 'Interspeech', aliases: ['国际语音会议'] })), api.normalizeEntry(entry('vision-2026', { name: 'CVPR' }))];
  assert.equal(api.filterEntries(items, state({ query: 'ＩＮＴＥＲＳＰＥＥＣＨ', grade: 'A', month: '05' }))[0].id, 'speech-2026');
  assert.equal(api.filterEntries(items, state({ query: '国际语音会议', venue: 'vision' })).length, 0);
  assert.equal(api.filterEntries(items, state({ query: '<img onerror=alert(1)>' })).length, 0);
  assert.deepEqual(api.stateFromParams(new URLSearchParams('year=2026&month=05&tier=A&venue=speech&q=国际语音会议')), state({ year: '2026', month: '05', grade: 'A', venue: 'speech', query: '国际语音会议' }));
  assert.deepEqual(api.stateFromParams(new URLSearchParams('year=1970&month=13&tier=top&venue=../')), state());
});
function browser(catalog, suffix = '', width = 1440) {
  class Node {
    constructor(tag = 'div') { this.tag = tag; this.children = []; this.handlers = {}; this.hidden = false; this.dataset = {}; this._value = ''; this.textContent = ''; }
    set value(value) { this._value = this.tag === 'select' && !this.children.some(node => node.value === value) ? '' : value; }
    get value() { return this._value; }
    set innerHTML(_) { throw Error('Unsafe HTML mutation'); }
    appendChild(node) { this.children.push(node); }
    addEventListener(event, fn) { this.handlers[event] = fn; }
    fire(event) { this.handlers[event]?.({ type: event, preventDefault() {} }); }
    focus() { this.focused = true; }
  }
  const nodes = {};
  function add(id, tag = 'div', values = []) { const node = nodes[id] = new Node(tag); for (const value of values) { const option = new Node('option'); option.value = value; node.appendChild(option); } return node; }
  const container = add('conference-directory');
  add('conference-directory-data').textContent = JSON.stringify(catalog);
  for (const id of ['conference-count', 'conference-filter-panel', 'conference-filters', 'conference-empty', 'conference-clear', 'conference-empty-clear']) add(id);
  add('conference-year', 'select', ['all']); add('conference-venue', 'select', ['all']);
  add('conference-month', 'select', ['all', 'unknown', ...Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))]);
  add('conference-tier', 'select', ['all', 'A', 'B', 'C', 'unlisted', 'pending']); add('conference-query', 'input');
  const cards = catalog.entries.map(item => { const card = new Node(); card.dataset.conferenceId = item.id; return card; });
  const label = new Node(); const group = new Node(); group.querySelectorAll = () => cards; group.querySelector = () => label;
  container.querySelectorAll = selector => selector === '[data-conference-id]' ? cards : [group];
  const listeners = {}, window = { innerWidth: width, location: new URL('https://example.test/blog/conferences/' + suffix), addEventListener(name, fn) { listeners[name] = fn; }, history: { pushes: [], replaces: [], replaceState(_s, _t, url) { this.replaces.push(url); window.location = new URL(url); }, pushState(_s, _t, url) { this.pushes.push(url); window.location = new URL(url); } } };
  const document = { readyState: 'complete', getElementById: id => nodes[id] || null, createElement: tag => new Node(tag) };
  window.document = document;
  vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/js/conference-directory.js'), 'utf8'), { window, URL, URLSearchParams });
  return { nodes, window, cards, group, label, listeners };
}
test('URL initialization, zero results, clear, history navigation and counts reflect actual visible cards', () => {
  const b = browser({ contract: api.contract, entries: [entry(), entry('cvpr-2026', { name: 'CVPR' })] }, '?q=CVPR&month=05');
  assert.deepEqual(b.cards.map(card => card.hidden), [true, false]);
  assert.equal(b.nodes['conference-count'].textContent, '显示 1 / 2 届会议');
  assert.equal(b.label.textContent, '1 届');
  b.nodes['conference-query'].value = 'missing'; b.nodes['conference-query'].fire('input');
  assert.equal(b.nodes['conference-empty'].hidden, false); assert.equal(b.group.hidden, true);
  assert.match(b.window.location.search, /q=missing/);
  b.nodes['conference-empty-clear'].fire('click');
  assert.equal(b.cards.filter(card => !card.hidden).length, 2); assert.equal(b.nodes['conference-empty'].hidden, true);
  assert.equal(b.window.location.search, '');
  b.window.location = new URL('https://example.test/blog/conferences/?year=2026&venue=cvpr'); b.listeners.popstate();
  assert.deepEqual(b.cards.map(card => card.hidden), [true, false]);
  b.window.location = new URL('https://example.test/blog/conferences/?year=2030'); b.listeners.popstate();
  assert.equal(b.nodes['conference-year'].value, '2030'); assert.equal(b.nodes['conference-empty'].hidden, false);
});
test('real Hugo renders all cards and safe deep links without JavaScript; pending stays separate', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'conference-directory-'));
  try {
    fs.mkdirSync(path.join(temp, 'content/posts'), { recursive: true }); fs.mkdirSync(path.join(temp, 'data'));
    fs.writeFileSync(path.join(temp, 'hugo.yaml'), 'baseURL: "https://example.test/blog/"\nlanguageCode: zh-CN\ntheme: PaperMod\nbuildFuture: true\ndisableKinds: [home, section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\nstaticDir: []\ndataDir: ' + JSON.stringify(path.join(temp, 'data')) + '\nparams:\n  env: production\n  ShowToc: false\n');
    fs.copyFileSync(path.join(root, 'content/conferences.md'), path.join(temp, 'content/conferences.md'));
    fs.writeFileSync(path.join(temp, 'content/posts/conference-sample-2026.md'), '---\ntitle: Sample guide\ndate: 2026-09-30\n---\n\nGuide.\n');
    const entries = [entry(), entry('pending-2026', { name: 'Pending', event: { status: 'pending' }, ranking: { grade: 'pending', candidateGrade: 'A' } }), entry('tba-2026', { name: '</script><script>alert(1)</script>', event: { status: 'tba', sourceUrl: 'https://official.example/' }, ranking: {} })];
    fs.writeFileSync(path.join(temp, 'data/conference-directory.json'), JSON.stringify({ contract: api.contract, entries }));
    execFileSync('hugo', ['--source', root, '--config', path.join(temp, 'hugo.yaml'), '--contentDir', path.join(temp, 'content'), '--destination', path.join(temp, 'public'), '--minify'], { stdio: 'pipe' });
    const html = fs.readFileSync(path.join(temp, 'public/conferences/index.html'), 'utf8');
    assert.equal((html.match(/<article class=conference-card/g) || []).length, 3);
    assert.match(html, /data-conference-group=2026[ >]/); assert.match(html, /data-conference-group=2026-unknown/);
    assert.match(html, /2026-04-29/); assert.match(html, /2026-05-03/);
    assert.match(html, /举办日期：官方待定/); assert.match(html, /举办日期：待核/); assert.match(html, /评级待核/);
    assert.match(html, /href=\/blog\/posts\/conference-sample-2026\//);
    assert.ok(!html.includes('</script><script>alert(1)</script>'));
    assert.ok(!html.includes('1970'));
    assert.ok(!/<article class=conference-card[^>]*hidden/.test(html));
  } finally { fs.rmSync(temp, { recursive: true, force: true }); }
});

test('actual 19-edition catalog has verified interval filters, source scope and retained routes', () => {
  const catalog = JSON.parse(fs.readFileSync(path.join(root, 'data/conference-directory.json'), 'utf8'));
  const entries = api.normalizeCatalog(catalog);
  assert.equal(entries.length, 19);
  assert.deepEqual(api.availableYears(entries), ['2026']);
  assert.equal(entries.filter(item => item.dateStatus === 'confirmed').length, 19);
  assert.deepEqual(Object.fromEntries(['A', 'B', 'C', 'unlisted', 'pending'].map(grade => [grade, entries.filter(item => item.grade === grade).length])), { A: 5, B: 3, C: 1, unlisted: 10, pending: 0 });
  for (const [venue, months] of [['eusipco', ['08', '09']], ['interspeech', ['09', '10']]]) {
    for (const month of months) assert.equal(api.filterEntries(entries, state({ year: '2026', month, venue })).length, 1);
  }
  for (const item of catalog.entries) {
    assert.ok(fs.existsSync(path.join(root, 'content', item.summaryPath.replace(/^\//, '').replace(/\/$/, '.md'))), item.summaryPath);
    assert.ok(item.categoryPath.startsWith('/categories/'));
  }
});

test('mobile filters start collapsed and one typing focus session adds one history entry', () => {
  const b = browser({ contract: api.contract, entries: [entry()] }, '?month=05', 390);
  assert.equal(b.nodes['conference-filter-panel'].open, false);
  const query = b.nodes['conference-query'];
  for (const value of ['S', 'Sa', 'Sam']) { query.value = value; query.fire('input'); }
  assert.equal(b.window.history.pushes.length, 1);
  assert.equal(b.window.history.replaces.length, 2);
  query.fire('blur'); query.value = 'Sample'; query.fire('input');
  assert.equal(b.window.history.pushes.length, 2);
  b.nodes['conference-month'].value = '04'; b.nodes['conference-month'].fire('change');
  query.value = 'Sample Research'; query.fire('input'); assert.equal(b.window.history.pushes.length, 4);
  b.window.location = new URL('https://example.test/blog/conferences/?month=05'); b.listeners.popstate();
  assert.equal(query.value, ''); assert.equal(b.nodes['conference-month'].value, '05');
  b.window.innerWidth = 1440; b.listeners.resize(); assert.equal(b.nodes['conference-filter-panel'].open, true);
  b.window.innerWidth = 390; b.listeners.resize(); assert.equal(b.nodes['conference-filter-panel'].open, false);
});
