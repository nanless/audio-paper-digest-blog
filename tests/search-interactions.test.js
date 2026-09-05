'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

function browserFixture(kind, items, suffix = '', fail = false) {
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
  class FakeFuse {
    constructor(data) { this.data = data; }
    search(query) { return this.data.filter((entry) => JSON.stringify(entry).toLowerCase().includes(query.toLowerCase())).map((item) => ({ item })); }
  }
  let source = fs.readFileSync(path.join(__dirname, '..', 'assets', 'js', kind === 'library' ? 'paper-library.js' : 'fastsearch.js'), 'utf8');
  source = source.replace(/^import .*@params.*;\n/, '');
  vm.runInNewContext(source, {
    document, window, URL, URLSearchParams, params: {}, Fuse: FakeFuse,
    fetch(url) { requests.push(String(url)); return fail ? Promise.reject(new Error('offline')) : Promise.resolve({ ok: true, json: () => Promise.resolve(items) }); }
  });
  return { nodes, document, window, requests, parent, listeners, ready: () => new Promise((resolve) => setImmediate(resolve)) };
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
  const archiveLink = offline.nodes.searchResults.children.at(-1).children[0];
  assert.equal(archiveLink.href, 'https://nanless.github.io/audio-paper-digest-blog/archives/');
});
