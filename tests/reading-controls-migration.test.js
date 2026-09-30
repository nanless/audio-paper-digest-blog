'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const reading = require('../assets/js/reading-store');

function fixture() {
  const values = new Map();
  const storage = { getItem: key => values.get(key) || null, setItem: (key, value) => values.set(key, value) };
  const options = { storage, origin: 'https://example.test', basePath: '/blog/' };
  const seed = reading.create(options);
  const timestamp = '2026-09-30T10:00:00.000Z';
  seed.importBackup(JSON.stringify({ contract: 'research-reading-library-v1', basePath: '/blog/', records: ['a', 'b'].map((slug, index) => ({
    key: 'page:/blog/posts/' + slug + '/', url: '/blog/posts/' + slug + '/', title: 'Identical title',
    status: index ? 'read' : 'reading', bookmarked: !index, note: index ? 'Other note\n<script>alert(1)</script>' : 'Original personal note',
    createdAt: timestamp, updatedAt: '2026-09-30T10:00:0' + index + '.000Z'
  })) }));
  const allNodes = [], buttons = [];
  function node(tag) {
    const item = { tagName: tag.toUpperCase(), dataset: {}, style: {}, children: [], events: {}, attributes: {}, hidden: false, isConnected: true, textContent: '',
      classList: { add() {} },
      appendChild(child) { if (child.parentNode) child.parentNode.children = child.parentNode.children.filter(n => n !== child); this.children.push(child); child.parentNode = this; },
      insertBefore(child, before) { this.children.splice(this.children.indexOf(before), 0, child); child.parentNode = this; },
      replaceChildren() { this.children = []; },
      setAttribute(name, value) { this.attributes[name] = value; },
      addEventListener(name, callback) { this.events[name] = callback; }
    }; allNodes.push(item); return item;
  }
  ['a', 'b'].forEach(slug => {
    const host = node('section'), button = node('button');
    host.dataset = { paperUrl: '/blog/posts/' + slug + '/', paperTitle: 'Identical title', paperArxivId: '2609.12345v2', paperKey: 'arxiv:2609.12345', paperIdentityStatus: 'verified' };
    button.closest = selector => selector === '[data-paper-url]' ? host : selector === '.research-workbench--paper' ? host : null;
    host.appendChild(button); buttons.push(button);
  });
  const events = {};
  const document = { getElementById: () => ({ textContent: JSON.stringify({ basePath: '/blog/' }) }), querySelectorAll: () => buttons, createElement: node };
  class CustomEvent { constructor(type, init) { this.type = type; this.detail = init && init.detail; } }
  const window = { localStorage: storage, location: { origin: options.origin }, ResearchReadingStore: reading,
    addEventListener(name, callback) { events[name] = callback; }, dispatchEvent(event) { if (events[event.type]) events[event.type](event); } };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../assets/js/reading-controls.js'), 'utf8'), { window, document, CustomEvent });
  return { window, allNodes, buttons, events, values, options };
}

test('single-page controls migrate exact verified guides and expose preserved notes as text with original scoped links', () => {
  const f = fixture(), store = f.window.ResearchReading.store;
  assert.equal(store.all().length, 1);
  assert.equal(store.get('arxiv:2609.12345').note, 'Other note\n<script>alert(1)</script>');
  assert.equal(store.get('arxiv:2609.12345').status, 'read');
  assert.equal(store.get('arxiv:2609.12345').bookmarked, true);
  assert.ok(f.allNodes.filter(n => n.tagName === 'TEXTAREA').every(n => n.value === 'Other note\n<script>alert(1)</script>'));
  assert.ok(f.allNodes.some(n => n.tagName === 'SUMMARY' && /已保留 1 条/.test(n.textContent)));
  assert.ok(f.allNodes.some(n => n.tagName === 'P' && n.textContent === 'Original personal note'));
  assert.ok(f.allNodes.some(n => n.tagName === 'A' && n.href === '/blog/posts/a/'));
  assert.ok(f.buttons.every(button => button.attributes['aria-pressed'] === 'true'));
});

test('authoritative storage events refresh controls, while a dirty local note is not silently overwritten', () => {
  const f = fixture();
  const note = f.allNodes.find(n => n.tagName === 'TEXTAREA');
  note.value = 'Unsaved local editing'; note.events.input();
  const other = reading.create(f.options);
  other.update({ title: 'Verified', permalink: '/blog/posts/a/', identityStatus: 'verified', arxivId: '2609.12345' }, { note: 'Saved in another tab', bookmarked: false });
  f.events.storage({ key: other.storageKey });
  assert.equal(note.value, 'Unsaved local editing');
  assert.ok(f.buttons.every(button => button.attributes['aria-pressed'] === 'false'));
  assert.equal(f.allNodes.filter(n => n.tagName === 'TEXTAREA')[1].value, 'Saved in another tab');
});
