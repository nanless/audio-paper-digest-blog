'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const footer = fs.readFileSync(path.join(__dirname, '../layouts/partials/footer.html'), 'utf8');
const script = footer.match(/<script>\s*([\s\S]*?)<\/script>/)[1];
function fixture({ id = '👥 作者与机构', href = '#' + encodeURIComponent(id), reduced = false, targetAttribute, download = false, missing = false, tabindex } = {}) {
  const order = [], callbacks = {}, attrs = new Map();
  if (tabindex !== undefined) attrs.set('tabindex', tabindex);
  const outer = { tagName: 'DETAILS', open: false, parentElement: null };
  const inner = { tagName: 'DETAILS', open: false, parentElement: outer };
  const target = { id, parentElement: inner, hasAttribute: key => attrs.has(key),
    setAttribute(key, value) { attrs.set(key, value); },
    scrollIntoView(options) { assert.equal(inner.open, true); assert.equal(outer.open, true); order.push('scroll'); this.scroll = options; },
    focus(options) { order.push('focus'); this.focusOptions = options; this.focused = true; } };
  const anchor = { getAttribute(key) { return key === 'href' ? href : key === 'target' ? targetAttribute : null; }, hasAttribute: key => key === 'download' && download,
    addEventListener(name, fn) { callbacks[name] = fn; } };
  const state = { edition: 'kept' }, history = { state, calls: [], pushState(state, _, url) { this.calls.push({ method: 'push', state, url }); }, replaceState(state, _, url) { this.calls.push({ method: 'replace', state, url }); } };
  const document = { getElementById(key) { return key === 'menu' || missing || key !== id ? null : target; }, querySelectorAll(selector) { assert.equal(selector, 'a[href^="#"]'); return [anchor]; } };
  const window = { location: { pathname: '/blog/posts/legacy/', search: '?edition_q=Audio&from=archive', hash: '#old' }, matchMedia(query) { assert.equal(query, '(prefers-reduced-motion: reduce)'); return { matches: reduced }; } };
  vm.runInNewContext(script, { document, window, history, localStorage: {} });
  return { target, inner, outer, history, state, attrs, order, click(extra = {}) { const event = { button: 0, defaultPrevented: false, preventDefault() { this.defaultPrevented = true; }, ...extra }; callbacks.click.call(anchor, event); return event; } };
}
test('the actual footer fragment handler reveals nested legacy disclosures before scrolling and focuses the heading once', () => {
  const source = fs.readFileSync(path.join(__dirname, '../content/posts/2026-08-27-a-training-free-proactive-defense-against-partial-2608-25285.md'), 'utf8');
  assert.match(source, /<details>[\s\S]*?### 👥 作者与机构[\s\S]*?<\/details>/);
  const f = fixture(); const event = f.click();
  assert.equal(event.defaultPrevented, true); assert.equal(f.inner.open, true); assert.equal(f.outer.open, true);
  assert.deepEqual(f.order, ['scroll', 'focus']); assert.equal(f.target.focused, true); assert.equal(f.target.focusOptions.preventScroll, true);
  assert.equal(f.attrs.get('tabindex'), '-1'); assert.equal(f.target.scroll.behavior, 'smooth');
  assert.equal(f.history.calls.length, 1); assert.equal(f.history.calls[0].method, 'push'); assert.equal(f.history.calls[0].state, f.state);
  assert.equal(f.history.calls[0].url, '/blog/posts/legacy/?edition_q=Audio&from=archive#' + encodeURIComponent('👥 作者与机构'));
});
test('modified, middle, canceled, targeted and download clicks retain their native actions without expansion or history writes', () => {
  for (const options of [{ metaKey: true }, { ctrlKey: true }, { shiftKey: true }, { altKey: true }, { button: 1 }, { defaultPrevented: true }]) {
    const f = fixture(); f.click(options); assert.equal(f.inner.open, false); assert.equal(f.history.calls.length, 0); assert.equal(f.target.focused, undefined);
  }
  for (const options of [{ targetAttribute: '_blank' }, { targetAttribute: 'named-window' }, { download: true }]) {
    const f = fixture(options); assert.equal(f.click().defaultPrevented, false); assert.equal(f.history.calls.length, 0); assert.equal(f.inner.open, false);
  }
  const self = fixture({ targetAttribute: '_self' }); assert.equal(self.click().defaultPrevented, true);
});
test('fragment lookup safely handles selector punctuation, invalid percent escapes and missing targets', () => {
  for (const id of ["a'b]#heading", '100%invalid', 'C# 方法']) {
    const f = fixture({ id, href: '#' + id }); assert.equal(f.click().defaultPrevented, true);
    assert.equal(f.history.calls[0].url, '/blog/posts/legacy/?edition_q=Audio&from=archive#' + encodeURIComponent(id));
  }
  const missing = fixture({ missing: true }); assert.equal(missing.click().defaultPrevented, false); assert.equal(missing.history.calls.length, 0);
});
test('top navigation replaces only the fragment, preserves query and history state, respects reduced motion and existing focusability', () => {
  const f = fixture({ id: 'top', reduced: true, tabindex: '0' }); f.click();
  assert.equal(f.target.scroll.behavior, 'auto'); assert.equal(f.attrs.get('tabindex'), '0');
  assert.equal(f.history.calls.length, 1); assert.equal(f.history.calls[0].method, 'replace');
  assert.equal(f.history.calls[0].state, f.state); assert.equal(f.history.calls[0].url, '/blog/posts/legacy/?edition_q=Audio&from=archive');
});
