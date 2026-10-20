'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
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

test('large real-world heading counts need logarithmic live geometry probes, including resized content', () => {
  let probes = 0, offset = 0;
  const headings = Array.from({ length: 1358 }, (_, index) => ({ id: String(index),
    getBoundingClientRect() { probes++; return { top: index * 100 + offset }; } }));
  assert.equal(workflow.currentHeading(headings, 100050).id, '1000');
  assert.ok(probes <= 12, 'a scroll frame must not measure every conference heading');
  offset = 1000; probes = 0;
  assert.equal(workflow.currentHeading(headings, 100050).id, '990');
  assert.ok(probes <= 12);
  assert.equal(workflow.currentHeading(headings, -100).id, '0');
  assert.equal(workflow.currentHeading(headings, Infinity).id, '1357');
});

function browserFixture({ stored = true, hash = '', disabledStorage = false, count = 2, configure } = {}) {
  function node(id) {
    const classes = new Set();
    return { id, hidden: true, dataset: {}, events: {}, children: [], attrs: {}, textContent: id, classes, mutations: 0,
      classList: { toggle(name, enabled) { if (enabled) classes.add(name); else classes.delete(name); }, add(name) { classes.add(name); }, remove(name) { classes.delete(name); } },
      addEventListener(name, fn) { this.events[name] = fn; }, appendChild(child) { this.children.push(child); },
      getAttribute(name) { return this.attrs[name] ?? null; }, hasAttribute(name) { return Object.prototype.hasOwnProperty.call(this.attrs, name); },
      setAttribute(name, value) { this.mutations++; this.attrs[name] = value; }, removeAttribute(name) { this.mutations++; delete this.attrs[name]; },
      focus() { document.activeElement = this; }, scrollIntoView() { this.scrolled = true; } };
  }
  const nodes = Object.fromEntries(['reading-resume', 'reading-resume-note', 'reading-resume-continue', 'reading-resume-dismiss',
    'reading-chapters-trigger', 'reading-chapters-panel', 'reading-chapters-close', 'reading-chapters-links',
    'reading-chapters-search-group', 'reading-chapters-search', 'reading-chapters-clear', 'reading-chapters-empty'].map(id => [id, node(id)]));
  nodes['reading-chapters-search'].value = '';
  const headings = [node('第一章'), node('第二章')];
  for (let i = 2; i < count; i++) headings.push(node('章节 ' + i));
  headings.forEach((heading, index) => { heading.tagName = 'H2'; heading.getBoundingClientRect = () => ({ top: 300 + index * 400 }); });
  const articleEvents = {};
  const article = { offsetHeight: 3000, getBoundingClientRect: () => ({ top: 200 }), querySelectorAll: () => headings,
    addEventListener(name, fn, capture) { articleEvents[name] = fn; articleEvents[name + 'Capture'] = capture; },
    setAttribute() {}, focus() { document.activeElement = article; } };
  headings.forEach(heading => { heading.parentElement = article; });
  const document = { documentElement: { clientHeight: 700 }, body: node('body'), activeElement: null,
    getElementById: id => id === 'article-body' ? article : headings.find(h => h.id === id) || nodes[id],
    querySelector: () => ({ dataset: { readingBasePath: '/blog/' } }), querySelectorAll: () => [],
    createElement: () => { const link = node('link'); Object.defineProperty(link, 'hash', { get: () => link.href }); return link; } };
  const storage = memoryStorage();
  if (stored) workflow.writePosition(storage, workflow.storageKey('/blog/'), '/blog/posts/a/', { anchor: '第二章', progress: 40, updatedAt: '2026-09-30T10:00:00Z' });
  const events = {}, mediaEvents = {};
  const window = { document, location: { pathname: '/blog/posts/a/', search: '', hash },
    localStorage: disabledStorage ? null : storage, addEventListener: (name, fn) => { events[name] = fn; },
    matchMedia: () => ({ addEventListener(name, fn) { mediaEvents[name] = fn; } }), setTimeout: () => 1, clearTimeout() {},
    requestAnimationFrame: fn => fn(), history: { state: { keep: 'reading-query' }, replaceState(state, _title, url) { this.url = url; this.method = 'replace'; this.savedState = state; }, pushState(state, _title, url) { this.url = url; this.method = 'push'; this.savedState = state; } },
    dispatchEvent() {}, CustomEvent: class {} };
  if (configure) configure({ headings, article, node, document, window });
  workflow.mount(window);
  return { nodes, headings, document, window, events, mediaEvents, articleEvents, article, storage };
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

test('generated chapter links preserve modified, canceled, targeted and download clicks while ordinary activation still jumps', () => {
  const f = browserFixture({ count: 25 }), link = f.nodes['reading-chapters-links'].children[1];
  f.nodes['reading-chapters-trigger'].events.click();
  let prevented = 0;
  function click(options = {}) { link.events.click({ button: 0, preventDefault() { prevented++; }, ...options }); }
  for (const options of [{ defaultPrevented: true }, { button: 1 }, { button: 2 }, { ctrlKey: true }, { metaKey: true }, { shiftKey: true }, { altKey: true }]) click(options);
  link.attrs.target = '_blank'; click(); link.attrs.target = 'other-window'; click(); delete link.attrs.target;
  link.attrs.download = ''; click(); delete link.attrs.download;
  assert.equal(prevented, 0); assert.equal(f.nodes['reading-chapters-panel'].hidden, false);
  assert.equal(f.headings[1].scrolled, undefined); assert.equal(f.window.history.method, undefined);
  link.attrs.target = '_self'; click();
  assert.equal(prevented, 1); assert.equal(f.nodes['reading-chapters-panel'].hidden, true);
  assert.equal(f.headings[1].scrolled, true); assert.equal(f.document.activeElement, f.headings[1]);
  assert.equal(f.window.history.method, 'replace');
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

test('searchable chapter panels stay available across desktop/mobile and short mobile-only panels close on desktop', () => {
  const f = browserFixture({ count: 1358 }), n = f.nodes;
  assert.ok(n['reading-chapters-trigger'].classes.has('reading-chapters-trigger--searchable'));
  n['reading-chapters-trigger'].events.click();
  assert.equal(f.document.activeElement, n['reading-chapters-search']);
  f.mediaEvents.change({ matches: false });
  assert.equal(n['reading-chapters-panel'].hidden, false);
  n['reading-chapters-search'].value = '章节 1357';
  n['reading-chapters-search'].events.input();
  assert.equal(n['reading-chapters-links'].children.filter(link => !link.hidden).length, 1);
  n['reading-chapters-panel'].events.keydown({ key: 'Escape', preventDefault() {} });
  assert.equal(n['reading-chapters-panel'].hidden, true);
  assert.equal(f.document.activeElement, n['reading-chapters-trigger']);
  const short = browserFixture();
  assert.ok(!short.nodes['reading-chapters-trigger'].classes.has('reading-chapters-trigger--searchable'));
  short.nodes['reading-chapters-trigger'].events.click(); short.mediaEvents.change({ matches: false });
  assert.equal(short.nodes['reading-chapters-panel'].hidden, true);
  assert.equal(short.document.activeElement, short.headings[0]);
  assert.equal(short.headings[0].attrs.tabindex, '-1');
});

test('scrolling within a chapter writes no link state and crossing updates only prior and current chapters', () => {
  const f = browserFixture({ count: 1358 }), links = f.nodes['reading-chapters-links'].children;
  assert.equal(links[0].attrs['aria-current'], 'location');
  const before = links.reduce((sum, link) => sum + link.mutations, 0);
  f.events.scroll(); f.events.scroll();
  assert.equal(links.reduce((sum, link) => sum + link.mutations, 0), before);
  f.headings.forEach((heading, index) => { heading.getBoundingClientRect = () => ({ top: (index - 1000) * 400 }); });
  f.events.scroll();
  assert.equal(links[0].attrs['aria-current'], undefined);
  assert.equal(links[1000].attrs['aria-current'], 'location');
  assert.equal(links.reduce((sum, link) => sum + link.mutations, 0) - before, 2);
  f.events.scroll();
  assert.equal(links.reduce((sum, link) => sum + link.mutations, 0) - before, 2);
});

test('real old-reader disclosure structure stays out of binary flow while all chapters remain searchable and revealable', () => {
  const source = fs.readFileSync(path.join(__dirname, '../content/posts/2026-08-27-a-training-free-proactive-defense-against-partial-2608-25285.md'), 'utf8');
  assert.match(source, /<details>[\s\S]*?### 👥 作者与机构[\s\S]*?<\/details>/);
  let details, outer, parentReads = 0, geometryReads = 0;
  const f = browserFixture({ count: 8, configure({ headings, article, node, document }) {
    document.documentElement.clientHeight = 6000;
    details = node('authors-details'); details.tagName = 'DETAILS'; details.open = false; details.parentElement = article;
    const tops = [100, 500, 900, 1300, 1700, 1900, 2100, 2500];
    headings.forEach((heading, index) => {
      const parent = index === 5 ? details : article;
      Object.defineProperty(heading, 'parentElement', { get() { parentReads++; return parent; } });
      heading.getBoundingClientRect = () => { geometryReads++; return { top: index === 5 && !details.open ? 0 : tops[index] }; };
    });
    headings[5].textContent = '👥 作者与机构';
    headings[5].scrollIntoView = function () { assert.equal(details.open, true); if (outer) assert.equal(outer.open, true); this.scrolled = true; };
  } });
  const links = f.nodes['reading-chapters-links'].children;
  assert.equal(links.length, 8); assert.equal(links[3].attrs['aria-current'], 'location');
  assert.equal(links[5].attrs['aria-current'], undefined);
  const mountedParentReads = parentReads, mountedGeometryReads = geometryReads;
  for (let i = 0; i < 20; i++) f.events.scroll();
  assert.equal(parentReads, mountedParentReads, 'scrolling must not rescan every disclosure ancestor');
  assert.ok(geometryReads - mountedGeometryReads <= 20 * 4);
  assert.equal(f.articleEvents.toggleCapture, true, 'native non-bubbling toggle must be captured');
  details.open = true; f.document.documentElement.clientHeight = 8000;
  f.articleEvents.toggle({ target: details }); assert.equal(links[5].attrs['aria-current'], 'location');
  details.open = false; f.articleEvents.toggle({ target: details });
  assert.equal(links[5].attrs['aria-current'], undefined); assert.equal(links[4].attrs['aria-current'], 'location');
  outer = { tagName: 'DETAILS', open: false, parentElement: f.article }; details.parentElement = outer;
  links[5].events.click({ preventDefault() {} });
  assert.equal(details.open, true); assert.equal(outer.open, true); assert.equal(f.headings[5].scrolled, true);
  assert.equal(f.document.activeElement, f.headings[5]);
});

test('closed disclosure summaries remain in flow, and resizing a short open panel never strands focus in hidden controls', () => {
  const f = browserFixture({ count: 3, configure({ headings, article, node }) {
    const detail = node('detail'); detail.tagName = 'DETAILS'; detail.open = false; detail.parentElement = article;
    const summary = node('summary'); summary.tagName = 'SUMMARY'; summary.parentElement = detail;
    headings[0].parentElement = summary; headings[1].parentElement = detail;
    headings[0].getBoundingClientRect = () => ({ top: 100 });
    headings[1].getBoundingClientRect = () => ({ top: 0 });
  } });
  assert.equal(f.nodes['reading-chapters-links'].children[0].attrs['aria-current'], 'location');
  f.nodes['reading-chapters-trigger'].events.click(); assert.equal(f.document.activeElement, f.nodes['reading-chapters-close']);
  f.mediaEvents.change({ matches: false });
  assert.equal(f.nodes['reading-chapters-panel'].hidden, true); assert.equal(f.document.activeElement, f.headings[0]);
  assert.notEqual(f.document.activeElement, f.nodes['reading-chapters-trigger']);
  const unchangedFocus = f.document.activeElement; f.mediaEvents.change({ matches: false });
  assert.equal(f.document.activeElement, unchangedFocus, 'a closed panel must not steal focus on resize');
  const hidden = browserFixture({ configure({ headings, article, node }) {
    const detail = node('all-hidden'); detail.tagName = 'DETAILS'; detail.open = false; detail.parentElement = article;
    headings.forEach(heading => { heading.parentElement = detail; });
  } });
  hidden.nodes['reading-chapters-trigger'].events.click(); hidden.mediaEvents.change({ matches: false });
  assert.equal(hidden.document.activeElement, hidden.article);
});

test('desktop links reveal a real legacy author disclosure, push the native fragment URL and leave ordinary links native', () => {
  const source = fs.readFileSync(path.join(__dirname, '../content/posts/2026-08-27-a-training-free-proactive-defense-against-partial-2608-25285.md'), 'utf8');
  assert.match(source, /<details>[\s\S]*?### 👥 作者与机构[\s\S]*?<\/details>/);
  let authorLink, ordinaryLink, detail, outer;
  const f = browserFixture({ count: 8, configure({ headings, article, node, document, window }) {
    outer = { tagName: 'DETAILS', open: false, parentElement: article };
    detail = { tagName: 'DETAILS', open: false, parentElement: outer };
    headings[5].id = '作者与机构'; headings[5].textContent = '👥 作者与机构'; headings[5].parentElement = detail;
    headings[5].scrollIntoView = function () { assert.equal(detail.open, true); assert.equal(outer.open, true); this.scrolled = true; };
    authorLink = node('desktop-author'); authorLink.hash = '#' + encodeURIComponent(headings[5].id);
    ordinaryLink = node('desktop-ordinary'); ordinaryLink.hash = '#' + encodeURIComponent(headings[0].id);
    document.querySelectorAll = () => [authorLink, ordinaryLink];
    window.location.search = '?edition_q=Audio&from=archive';
  } });
  const nativeState = f.window.history.state;
  function click(link, extra = {}) { let prevented = false; link.events.click({ button: 0, preventDefault() { prevented = true; }, ...extra }); return prevented; }
  assert.equal(click(authorLink, { ctrlKey: true }), false); assert.equal(detail.open, false);
  assert.equal(click(authorLink, { button: 1 }), false); assert.equal(detail.open, false);
  assert.equal(click(ordinaryLink), false); assert.equal(f.window.history.method, undefined);
  assert.equal(click(authorLink), true); assert.equal(detail.open, true); assert.equal(outer.open, true);
  assert.equal(f.headings[5].scrolled, true); assert.equal(f.document.activeElement, f.headings[5]);
  assert.equal(f.window.history.method, 'push'); assert.equal(f.window.history.savedState, nativeState);
  assert.equal(f.window.history.url, '/blog/posts/a/?edition_q=Audio&from=archive#' + encodeURIComponent('作者与机构'));
  // Once revealed, a subsequent native anchor click needs no JS intervention.
  assert.equal(click(authorLink), false);
});
