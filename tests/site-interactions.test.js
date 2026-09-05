'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

function loadSite({ mobile = false, query = '' } = {}) {
  const source = fs.readFileSync(path.join(__dirname, '..', 'assets', 'js', 'site.js'), 'utf8');
  const events = {};
  const input = { value: query, addEventListener(name, callback) { events[name] = callback; } };
  const items = [{ textContent: '语音识别 ASR', hidden: false }, { textContent: '音乐生成 Music', hidden: false }];
  const count = { textContent: '' };
  const empty = { hidden: true };
  const link = { addEventListener(name, callback) { this[name] = callback; } };
  const toc = { open: true, querySelectorAll: () => [link] };
  const nodes = { 'term-filter': input, 'research-term-list': { querySelectorAll: () => items }, 'term-count': count, 'term-empty': empty };
  const document = {
    readyState: 'complete', documentElement: { scrollTop: 0, clientHeight: 600, scrollHeight: 1800 },
    getElementById: (id) => nodes[id] || null,
    querySelector: (selector) => selector === '.workbench-toc details' ? toc : null,
    querySelectorAll: () => []
  };
  const window = { matchMedia: () => ({ matches: mobile }), scrollY: 0, addEventListener() {} };
  vm.runInNewContext(source, { document, window, URL });
  return { input, items, count, empty, toc, link, events };
}

test('mobile table of contents starts collapsed and closes after choosing a heading; desktop stays open', () => {
  const mobile = loadSite({ mobile: true });
  assert.equal(mobile.toc.open, false);
  mobile.toc.open = true;
  mobile.link.click();
  assert.equal(mobile.toc.open, false);
  assert.equal(loadSite().toc.open, true);
});

test('taxonomy filtering reports actual visible counts and recovers from zero results', () => {
  const site = loadSite({ query: 'ＡＳＲ' });
  site.events.input();
  assert.equal(site.items[0].hidden, false);
  assert.equal(site.items[1].hidden, true);
  assert.equal(site.count.textContent, '找到 1 / 2 项');
  assert.equal(site.empty.hidden, true);
  site.input.value = 'missing';
  site.events.input();
  assert.equal(site.empty.hidden, false);
  assert.equal(site.count.textContent, '找到 0 / 2 项');
  site.input.value = '';
  site.events.input();
  assert.equal(site.count.textContent, '共 2 项');
  assert.equal(site.empty.hidden, true);
});
