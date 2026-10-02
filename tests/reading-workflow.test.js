'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const workflow = require('../assets/js/reading-workflow');

function memoryStorage() {
  const data = new Map();
  return { getItem: key => data.get(key) || null, setItem: (key, value) => data.set(key, value) };
}
test('reading positions isolate deployment base paths and keep chapter anchors with validated progress', () => {
  const storage = memoryStorage();
  const key = workflow.storageKey('/blog/');
  const value = { anchor: '方法与实验', progress: 36.5, updatedAt: '2026-09-30T12:00:00Z' };
  assert.equal(workflow.writePosition(storage, key, '/blog/posts/a/', value), true);
  assert.deepEqual(workflow.readStore(storage, key).positions['/blog/posts/a/'], value);
  assert.equal(Object.keys(workflow.readStore(storage, workflow.storageKey('/other/')).positions).length, 0);
});
test('corrupted, oversized, missing and unavailable storage do not interrupt reading', () => {
  const storage = memoryStorage();
  storage.setItem('key', '{bad json');
  assert.equal(Object.keys(workflow.readStore(storage, 'key').positions).length, 0);
  const positions = { '/bad/': { anchor: 'x', progress: 101, updatedAt: 'bad' }, '//external/': { anchor: 'x', progress: 1, updatedAt: '2026-09-30' } };
  for (let i = 0; i < 220; i++) positions['/blog/' + i + '/'] = { anchor: 'h', progress: i % 100, updatedAt: new Date(100000 + i).toISOString() };
  const clean = workflow.normalizeStore({ version: 1, positions });
  assert.equal(Object.keys(clean.positions).length, 200);
  assert.equal(clean.positions['/bad/'], undefined);
  assert.equal(clean.positions['/blog/0/'], undefined);
  assert.ok(clean.positions['/blog/219/']);
  assert.equal(Object.keys(workflow.readStore(null, 'key').positions).length, 0);
  assert.equal(workflow.writePosition(null, 'key', '/page/', {}), false);
});
test('the current section remains the last crossed heading between sections', () => {
  const headings = [10, 400, 900].map((top, index) => ({ id: String(index), getBoundingClientRect: () => ({ top }) }));
  assert.equal(workflow.currentHeading(headings, 150).id, '0');
  assert.equal(workflow.currentHeading(headings, 500).id, '1');
  assert.equal(workflow.currentHeading([], 10), null);
});

function browserFixture({ stored = true, hash = '', disabledStorage = false, count = 2 } = {}) {
  function node(id) {
    return { id, hidden: true, dataset: {}, events: {}, children: [], attrs: {}, textContent: id,
      classList: { toggle() {}, add() {}, remove() {} },
      addEventListener(name, fn) { this.events[name] = fn; }, appendChild(child) { this.children.push(child); },
      setAttribute(name, value) { this.attrs[name] = value; }, removeAttribute(name) { delete this.attrs[name]; },
      focus() { document.activeElement = this; }, scrollIntoView() { this.scrolled = true; } };
  }
  const nodes = Object.fromEntries(['reading-resume', 'reading-resume-note', 'reading-resume-continue', 'reading-resume-dismiss',
    'reading-chapters-trigger', 'reading-chapters-panel', 'reading-chapters-close', 'reading-chapters-links',
    'reading-chapters-search-group', 'reading-chapters-search', 'reading-chapters-clear', 'reading-chapters-empty'].map(id => [id, node(id)]));
  nodes['reading-chapters-search'].value = '';
  const headings = [node('第一章'), node('第二章')];
  for (let i = 2; i < count; i++) headings.push(node('章节 ' + i));
  headings.forEach((heading, index) => { heading.tagName = 'H2'; heading.getBoundingClientRect = () => ({ top: 300 + index * 400 }); });
  const article = { offsetHeight: 3000, getBoundingClientRect: () => ({ top: 200 }), querySelectorAll: () => headings };
  const document = { documentElement: { clientHeight: 700 }, body: node('body'), activeElement: null,
    getElementById: id => id === 'article-body' ? article : headings.find(h => h.id === id) || nodes[id],
    querySelector: () => ({ dataset: { readingBasePath: '/blog/' } }), querySelectorAll: () => [],
    createElement: () => { const link = node('link'); Object.defineProperty(link, 'hash', { get: () => link.href }); return link; } };
  const storage = memoryStorage();
  if (stored) workflow.writePosition(storage, workflow.storageKey('/blog/'), '/blog/posts/a/', { anchor: '第二章', progress: 40, updatedAt: '2026-09-30T10:00:00Z' });
  const events = {};
  const window = { document, location: { pathname: '/blog/posts/a/', search: '', hash },
    localStorage: disabledStorage ? null : storage, addEventListener: (name, fn) => { events[name] = fn; },
    matchMedia: () => ({ addEventListener() {} }), setTimeout: () => 1, clearTimeout() {},
    requestAnimationFrame: fn => fn(), history: { replaceState(_state, _title, url) { this.url = url; } },
    dispatchEvent() {}, CustomEvent: class {} };
  workflow.mount(window);
  return { nodes, headings, document, window, events, storage };
}
test('chapter navigation does not access or change old browser reading records', () => {
  const f = browserFixture();
  const key = workflow.storageKey('/blog/');
  const before = f.storage.getItem(key);
  assert.equal(f.nodes['reading-resume'].hidden, true);
  assert.equal(f.headings[1].scrolled, undefined);
  Object.defineProperty(f.window, 'localStorage', { get() { throw Error('Storage must not be accessed'); } });
  workflow.mount(f.window);
  f.events.scroll();
  assert.equal(f.events.pagehide, undefined);
  assert.equal(f.storage.getItem(key), before);
});
test('mobile chapters open, constrain keyboard focus and close with Escape or a chapter choice', () => {
  const f = browserFixture({ stored: false });
  f.nodes['reading-chapters-trigger'].events.click();
  assert.equal(f.nodes['reading-chapters-panel'].hidden, false);
  assert.equal(f.document.activeElement, f.nodes['reading-chapters-close']);
  f.nodes['reading-chapters-panel'].events.keydown({ key: 'Tab', shiftKey: true, preventDefault() {} });
  const links = f.nodes['reading-chapters-links'].children;
  assert.equal(f.document.activeElement, links[1]);
  f.nodes['reading-chapters-panel'].events.keydown({ key: 'Escape', preventDefault() {} });
  assert.equal(f.nodes['reading-chapters-panel'].hidden, true);
  assert.equal(f.document.activeElement, f.nodes['reading-chapters-trigger']);
  f.nodes['reading-chapters-trigger'].events.click();
  links[1].events.click({ preventDefault() {} });
  assert.equal(f.nodes['reading-chapters-panel'].hidden, true);
  assert.equal(f.headings[1].scrolled, true);
});

test('chapter labels omit only hidden heading permalink anchors, retaining literal hash text', () => {
  let removed = false;
  const heading = { cloneNode: () => ({ querySelectorAll: selector => {
    assert.equal(selector, '.anchor[aria-hidden="true"]');
    return [{ remove() { removed = true; } }];
  }, get textContent() { return removed ? 'C# 方法' : 'C# 方法#'; } }) };
  assert.equal(workflow.headingLabel(heading), 'C# 方法');
});

test('long chapters filter, clear, keep a valid focus trap with no results and reopen safely', () => {
  const f = browserFixture({ count: 25 });
  const n = f.nodes, links = n['reading-chapters-links'].children;
  assert.equal(n['reading-chapters-search-group'].hidden, false);
  n['reading-chapters-trigger'].events.click();
  n['reading-chapters-search'].value = '章节 24';
  n['reading-chapters-search'].events.input();
  assert.equal(links.filter(l => !l.hidden).length, 1);
  assert.equal(n['reading-chapters-empty'].hidden, true);
  links[24].focus();
  n['reading-chapters-panel'].events.keydown({ key: 'Tab', preventDefault() {} });
  assert.equal(f.document.activeElement, n['reading-chapters-close']);
  n['reading-chapters-search'].value = '无匹配章节';
  n['reading-chapters-search'].events.input();
  assert.equal(links.filter(l => !l.hidden).length, 0);
  assert.equal(n['reading-chapters-empty'].hidden, false);
  n['reading-chapters-close'].focus();
  n['reading-chapters-panel'].events.keydown({ key: 'Tab', shiftKey: true, preventDefault() {} });
  assert.equal(f.document.activeElement, n['reading-chapters-clear']);
  n['reading-chapters-panel'].events.keydown({ key: 'Escape', preventDefault() {} });
  n['reading-chapters-trigger'].events.click();
  assert.equal(n['reading-chapters-empty'].hidden, false);
  n['reading-chapters-clear'].events.click();
  assert.equal(links.filter(l => !l.hidden).length, 25);
  assert.equal(n['reading-chapters-empty'].hidden, true);
  assert.equal(f.document.activeElement, n['reading-chapters-search']);
  links[4].events.click({ preventDefault() {} });
  assert.equal(f.headings[4].scrolled, true);
  assert.equal(n['reading-chapters-panel'].hidden, true);
  assert.equal(browserFixture({ count: 20 }).nodes['reading-chapters-search-group'].hidden, true);
});
