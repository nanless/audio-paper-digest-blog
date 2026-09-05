'use strict';

const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join, resolve } = require('node:path');
const test = require('node:test');
const vm = require('node:vm');
const repo = resolve(__dirname, '..');
const source = readFileSync(join(repo, 'assets/js/share-tools.js'), 'utf8');
const paperUrl = 'https://example.test/audio-paper-digest-blog/posts/paper/';

function setup({ clipboard, share, canShare, legacy = false, url = paperUrl, secure = true } = {}) {
  const listeners = {};
  const button = (name) => ({ hidden: true, addEventListener(type, handler) { listeners[`${name}:${type}`] = handler; } });
  const copy = button('copy');
  const native = button('native');
  const field = { hidden: true, value: '', focus() {}, select() { this.selected = true; } };
  const status = { textContent: '' };
  const section = {
    dataset: { shareUrl: url, shareTitle: '论文 & 证据' },
    querySelector(selector) {
      return { '.share-tools__copy': copy, '.share-tools__native': native,
        '.share-tools__link': field, '.paper-tools__status': status }[selector];
    },
  };
  let legacyCalls = 0;
  vm.runInNewContext(source, {
    document: {
      title: '论文', querySelectorAll() { return [section]; },
      execCommand() { legacyCalls += 1; if (legacy instanceof Error) throw legacy; return legacy; },
    },
    window: { isSecureContext: secure },
    navigator: { clipboard, share, canShare }, URL,
  });
  return { copy, native, field, status, listeners, legacyCalls: () => legacyCalls };
}

test('share controls have no automatic side effects and copy exact canonical URL', async () => {
  const writes = [];
  const ui = setup({ clipboard: { writeText: async (text) => writes.push(text) } });
  assert.deepEqual(writes, []);
  assert.equal(ui.copy.hidden, false);
  assert.equal(ui.native.hidden, true);
  await ui.listeners['copy:click']();
  assert.deepEqual(writes, [paperUrl]);
  assert.equal(ui.copy.disabled, false);
  assert.equal(ui.field.hidden, true);
  assert.match(ui.status.textContent, /已复制/);
});

test('missing clipboard or denied permission only reports success if legacy copy succeeds', async () => {
  for (const clipboard of [undefined, { writeText: async () => { throw new Error('denied'); } }]) {
    const ui = setup({ clipboard, legacy: true });
    await ui.listeners['copy:click']();
    assert.equal(ui.legacyCalls(), 1);
    assert.equal(ui.field.value, paperUrl);
    assert.match(ui.status.textContent, /已复制/);
  }
});

test('failed or throwing legacy copy leaves a selectable exact link and never claims success', async () => {
  for (const legacy of [false, new Error('unsupported')]) {
    const ui = setup({ legacy });
    await ui.listeners['copy:click']();
    assert.equal(ui.field.hidden, false);
    assert.equal(ui.field.selected, true);
    assert.equal(ui.field.value, paperUrl);
    assert.match(ui.status.textContent, /手动复制/);
    assert.doesNotMatch(ui.status.textContent, /已复制/);
  }
});

test('system share is feature-gated, user-triggered, and preserves title and URL', async () => {
  const calls = [];
  const ui = setup({ share: async (data) => calls.push(data), canShare: () => true });
  assert.equal(ui.native.hidden, false);
  assert.equal(calls.length, 0);
  await ui.listeners['native:click']();
  assert.equal(calls[0].url, paperUrl);
  assert.equal(calls[0].title, '论文 & 证据');
  assert.match(ui.status.textContent, /已交给系统/);
  assert.equal(ui.native.disabled, false);
  for (const options of [{ canShare: () => false }, { canShare: () => { throw new Error(); } }, { secure: false }]) {
    assert.equal(setup({ share() {}, ...options }).native.hidden, true);
  }
});

test('cancelled system sharing reports cancellation; other errors show the manual link', async () => {
  const cancelled = setup({ share: async () => { throw { name: 'AbortError' }; } });
  await cancelled.listeners['native:click']();
  assert.match(cancelled.status.textContent, /已取消/);
  assert.equal(cancelled.field.hidden, true);
  const failed = setup({ share: async () => { throw new Error('blocked'); } });
  await failed.listeners['native:click']();
  assert.match(failed.status.textContent, /未完成/);
  assert.equal(failed.field.value, paperUrl);
  assert.equal(failed.field.selected, true);
});

test('unsafe destinations are not exposed to interactive actions', () => {
  for (const url of ['javascript:alert(1)', 'https://user:secret@example.test/', 'bad-url']) {
    const ui = setup({ url });
    assert.equal(ui.copy.hidden, true);
    assert.deepEqual(Object.keys(ui.listeners), []);
  }
  assert.doesNotMatch(source, /innerHTML|\b(?:fetch|XMLHttpRequest|WebSocket|sendBeacon)\b/);
});

test('Hugo renders no-JS links and fingerprinted script without third-party share trackers', () => {
  const temp = mkdtempSync(join(tmpdir(), 'share-tools-'));
  const posts = join(temp, 'content/posts');
  mkdirSync(posts, { recursive: true });
  writeFileSync(join(temp, 'hugo.yaml'), 'baseURL: "https://example.test/audio-paper-digest-blog/"\ntheme: PaperMod\ndisableKinds: [home, section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\nstaticDir: []\nparams:\n  ShowShareButtons: true\n');
  writeFileSync(join(posts, 'paper.md'), '---\ntitle: "Paper & Evidence"\ndate: 2020-01-01\nhiddenInHomeList: true\npaper_digest_page_type: paper\n---\n\n论文正文。\n');
  try {
    execFileSync('hugo', ['--source', repo, '--config', join(temp, 'hugo.yaml'), '--contentDir', join(temp, 'content'), '--destination', join(temp, 'public'), '--minify'], { stdio: 'pipe' });
    const html = readFileSync(join(temp, 'public/posts/paper/index.html'), 'utf8');
    assert.match(html, /分享这篇文章/);
    assert.match(html, /复制文章链接/);
    assert.match(html, /系统分享/);
    assert.match(html, /<noscript><p[^>]*>请复制文章链接：<a href=["']?https:\/\/example\.test\/audio-paper-digest-blog\/posts\/paper\//);
    assert.match(html, /\/js\/share-tools\.min\.[a-f0-9]+\.js/);
    assert.doesNotMatch(html, /qrserver\.com|javascript:void|onclick=|weibo\.com\/share|x\.com\/intent/);
  } finally {
    rmSync(temp, { recursive: true, force: true });
  }
});
