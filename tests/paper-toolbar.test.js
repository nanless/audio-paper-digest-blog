const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join, resolve } = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const repo = resolve(__dirname, '..');

function renderFixture(frontmatter, body = '## 方法\n\n正文。') {
  const temp = mkdtempSync(join(tmpdir(), 'paper-toolbar-'));
  const content = join(temp, 'content', 'posts');
  const output = join(temp, 'public');
  mkdirSync(content, { recursive: true });
  writeFileSync(join(temp, 'hugo.yaml'), [
    'baseURL: "https://example.test/audio-paper-digest-blog/"',
    'languageCode: "zh-CN"',
    'defaultContentLanguage: "zh-cn"',
    'theme: "PaperMod"',
    'disableKinds: [home, section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]',
    'staticDir: []',
    'params:',
    '  env: production',
    '  ShowToc: false',
    '  ShowShareButtons: false',
    '  comments: false',
    '  assets:',
    '    disableFingerprinting: false',
    '',
  ].join('\n'));
  writeFileSync(join(content, 'fixture.md'), `---\n${frontmatter}\n---\n\n${body}\n`);
  try {
    execFileSync('hugo', [
      '--source', repo,
      '--config', join(temp, 'hugo.yaml'),
      '--contentDir', join(temp, 'content'),
      '--destination', output,
      '--cleanDestinationDir',
      '--minify',
    ], { stdio: 'pipe' });
    return readFileSync(join(output, 'posts', 'fixture', 'index.html'), 'utf8');
  } finally {
    rmSync(temp, { recursive: true, force: true });
  }
}

const sidecarRoot = '/audio-paper-digest-blog/data/papers/2026-09-05/2609-01234/';
const frontmatter = [
  'title: "Paper & Evidence"', 'date: 2026-09-05', 'draft: false',
  'hiddenInHomeList: true', 'paper_digest_page_type: paper',
  'paper_digest_arxiv_id: "2609.01234"',
  'paper_digest_arxiv_versioned_id: "2609.01234v2"',
].join('\n');
const workbench = frontmatter + '\npaper_digest_workbench_contract: researcher-workbench-v1\n'
  + 'paper_digest_original_title: "Paper & Evidence"\n'
  + 'paper_digest_authors: [{"name":"Researcher A","affiliations":["Institute A"]}]\n'
  + 'paper_digest_sidecars: ' + JSON.stringify(Object.fromEntries(
    ['citation.json', 'citation.bib', 'citation.ris'].map((name) =>
      [name, { url: sidecarRoot + name, sha256: 'a'.repeat(64) }])
  ));

test('modern paper keeps official versioned links, existing citation downloads and Connector instructions', () => {
  const html = renderFixture(workbench);
  assert.match(html, /href=https:\/\/arxiv\.org\/abs\/2609\.01234v2/);
  assert.match(html, /href=https:\/\/arxiv\.org\/pdf\/2609\.01234v2\.pdf/);
  assert.match(html, /data-copy-text=2609\.01234/);
  assert.match(html, /data-copy-text=2609\.01234v2/);
  assert.match(html, /data-paper-title="Paper (?:&|&amp;) Evidence"/);
  assert.match(html, /data-paper-url=https:\/\/example\.test\/audio-paper-digest-blog\/posts\/fixture\//);
  for (const name of ['citation.json', 'citation.bib', 'citation.ris']) assert.ok(html.includes(sidecarRoot + name));
  assert.doesNotMatch(html, /data-citation-format/);
  assert.match(html, /zotero\.org\/download\/connectors/);
  assert.match(html, /网页不能代你点击浏览器扩展/);
  assert.match(html, /复制 AI 提问/);
  assert.match(html, /<noscript>/);
  assert.match(html, /name=citation_author content="Researcher A"/);
  assert.doesNotMatch(html, /43128|companion|pageExcerpt|contextUrl|本机|启动说明/);
});

test('legacy papers receive minimal citation download controls without fabricated author or date', () => {
  const html = renderFixture(frontmatter);
  assert.match(html, /data-citation-format=bib/);
  assert.match(html, /data-citation-format=ris/);
  assert.match(html, /data-citation-title="Paper (?:&|&amp;) Evidence"/);
  assert.match(html, /data-citation-id=2609\.01234v2/);
  assert.match(html, /作者与出版日期未提供/);
  assert.match(html, /在 arXiv 查看引用信息/);
  assert.doesNotMatch(html, /citation\.(?:json|bib|ris)|name=citation_author|43128/);
});

test('raw legacy old-style IDs retain exact versioned public tools', () => {
  const html = renderFixture('title: "Old paper"\ndate: 2020-01-01\nhiddenInHomeList: true',
    '[arXiv](https://arxiv.org/abs/hep-th/9901001v4)');
  assert.match(html, /https:\/\/arxiv\.org\/abs\/hep-th\/9901001v4/);
  assert.match(html, /data-citation-id=hep-th\/9901001v4/);
  assert.match(html, /data-copy-text=hep-th\/9901001/);
});

test('paper without a verifiable ID has only editable prompt copying and no invented reference', () => {
  const html = renderFixture('title: "Conference paper"\ndate: 2020-01-01\nhiddenInHomeList: true');
  assert.match(html, /paper-tools--selection-only/);
  assert.match(html, /本页没有可验证的 arXiv 标识/);
  assert.match(html, /复制 AI 提问/);
  assert.doesNotMatch(html, /data-citation-format|阅读 \/ 保存 PDF|保存到 Zotero|43128/);
  assert.doesNotMatch(html, /data-paper-arxiv-id/);
});

test('noncanonical sidecars are rejected and replaced with minimal reference controls', () => {
  const html = renderFixture(workbench.replace(sidecarRoot + 'citation.ris', 'https://evil.example/citation.ris'));
  assert.doesNotMatch(html, /evil\.example/);
  assert.match(html, /data-citation-format=ris/);
  assert.doesNotMatch(html, /data-citation-format=bib/);
});

function setup({ text = '正文片段。', clipboardReject = false, legacy = false, downloadFails = false, title = 'Paper & Evidence', id = '2609.01234v2' } = {}) {
  const source = readFileSync(join(repo, 'assets/js/paper-toolbar.js'), 'utf8');
  const handlers = {};
  const button = (name, dataset = {}) => ({
    hidden: true, dataset,
    addEventListener(type, handler) { handlers[name + ':' + type] = handler; },
  });
  const prompt = button('prompt');
  const quick = button('quick');
  const copy = button('copy', { copyText: id, copyLabel: 'arXiv ID' });
  const bib = button('bib', { citationId: id, citationTitle: title, citationFormat: 'bib' });
  const ris = button('ris', { citationId: id, citationTitle: title, citationFormat: 'ris' });
  const field = { value: text, focus() { this.focused = true; } };
  const fallback = { hidden: true, focus() {}, select() { this.selected = true; } };
  const status = { textContent: '' };
  const panel = { open: false, scrollIntoView() {}, addEventListener(type, handler) { handlers['panel:' + type] = handler; } };
  const bodyNode = {};
  const content = { contains: (node) => node === bodyNode };
  const toolbar = {
    dataset: { paperTitle: title, paperUrl: 'https://example.test/posts/paper/', paperArxivId: id },
    querySelector(selector) {
      return { '.paper-tools__status': status, '.paper-tools__selected-text': field,
        '.paper-tools__selection-panel': panel, '.paper-tool--selection-quick': quick,
        '.paper-tool--selection-copy': prompt, '.paper-tools__copy-fallback': fallback }[selector] || null;
    },
    querySelectorAll(selector) {
      return selector === '.paper-tool-copy' ? [copy] : selector === '.paper-tool-citation' ? [bib, ris] : [];
    },
    closest() { return { querySelector: () => content }; },
  };
  const writes = [];
  const downloads = [];
  const blobs = [];
  let removed = 0;
  let legacyCalls = 0;
  let selection = { rangeCount: 0, isCollapsed: true };
  const document = {
    querySelectorAll() { return [toolbar]; },
    addEventListener(type, handler) { handlers[type] = handler; },
    body: { appendChild() {} },
    createElement(tag) {
      return { setAttribute() {}, style: {}, select() {},
        remove() { removed += 1; },
        click() { if (tag === 'a') downloads.push({ href: this.href, filename: this.download }); } };
    },
    execCommand() { legacyCalls += 1; return legacy; },
  };
  vm.runInNewContext(source, {
    document, navigator: { clipboard: { writeText: async (value) => {
      if (clipboardReject) throw new Error('permission denied');
      writes.push(value);
    } } },
    window: { isSecureContext: true, getSelection: () => selection, setTimeout(callback) { callback(); } },
    Blob,
    URL: class extends URL { static createObjectURL(blob) { if (downloadFails) throw new Error('download blocked'); blobs.push(blob); return 'blob:test'; } static revokeObjectURL() {} },
  });
  return {
    handlers, writes, downloads, blobs, field, fallback, status, prompt, quick, panel, document,
    removed: () => removed, legacyCalls: () => legacyCalls,
    select(value, outside = false) {
      selection = { toString: () => value, rangeCount: 1, isCollapsed: !value,
        anchorNode: outside ? {} : bodyNode, focusNode: bodyNode };
      handlers.selectionchange();
    },
  };
}

test('selection cache survives collapse, stays inside the body, and opens an editable prompt panel', async () => {
  const ui = setup({ text: '' });
  ui.select('  e\u0301\r\n机制  ');
  ui.select('');
  assert.equal(ui.quick.hidden, false);
  ui.handlers['quick:click']();
  assert.equal(ui.panel.open, true);
  assert.equal(ui.field.focused, true);
  await ui.handlers['prompt:click']();
  assert.match(ui.writes[0], /é\n机制$/);
  assert.match(ui.writes[0], /未核验为原论文逐字引用/);
  assert.match(ui.writes[0], /论文 \/ 页面标题：Paper & Evidence/);
  assert.match(ui.writes[0], /博客导读：https:\/\/example\.test\/posts\/paper\//);
  assert.match(ui.writes[0], /arXiv 原文：https:\/\/arxiv\.org\/abs\/2609\.01234v2/);
  ui.select('navigation label', true);
  assert.equal(ui.field.value, '  e\u0301\r\n机制  ');
  ui.field.value = '用户编辑后的提问内容';
  await ui.handlers['prompt:click']();
  assert.match(ui.writes[1], /用户编辑后的提问内容$/);
});

test('prompt for a page without a valid ID includes its title and blog link without inventing an arXiv source', async () => {
  const ui = setup({ id: '', title: 'Conference reading' });
  await ui.handlers['prompt:click']();
  assert.match(ui.writes[0], /Conference reading/);
  assert.match(ui.writes[0], /https:\/\/example\.test\/posts\/paper\//);
  assert.doesNotMatch(ui.writes[0], /arxiv\.org/);
});

test('selection capture does not overwrite a field being edited', () => {
  const ui = setup({ text: '用户文本' });
  ui.document.activeElement = ui.field;
  ui.select('其他选段');
  assert.equal(ui.field.value, '用户文本');
});

test('prompt copying supports 2000 Chinese characters and refuses empty, long or control text', async () => {
  const exact = setup({ text: '汉'.repeat(2000) });
  await exact.handlers['prompt:click']();
  assert.ok(exact.writes[0].endsWith('汉'.repeat(2000)));
  for (const [text, message] of [['  ', /请先/], ['a\u0000b', /控制字符/], ['a'.repeat(2001), /不能超过/]]) {
    const ui = setup({ text });
    await ui.handlers['prompt:click']();
    assert.equal(ui.writes.length, 0);
    assert.match(ui.status.textContent, message);
  }
});

test('clipboard denial retries legacy copy and exposes complete selectable text on failure', async () => {
  const copied = setup({ clipboardReject: true, legacy: true });
  await copied.handlers['copy:click']();
  assert.equal(copied.legacyCalls(), 1);
  assert.equal(copied.removed(), 1);
  assert.match(copied.status.textContent, /已复制 arXiv ID/);
  const failed = setup({ clipboardReject: true });
  await failed.handlers['prompt:click']();
  assert.equal(failed.fallback.hidden, false);
  assert.equal(failed.fallback.selected, true);
  assert.match(failed.fallback.value, /初学研究者/);
  assert.match(failed.status.textContent, /手动复制/);
  await failed.handlers['copy:click']();
  assert.equal(failed.fallback.value, '2609.01234v2');
});

test('minimal citations create downloadable local files without author or year and escape title syntax', async () => {
  const ui = setup({ title: 'Paper {A} & B\\C\nAU  - forged', id: 'hep-th/9901001v4' });
  ui.handlers['bib:click']();
  ui.handlers['ris:click']();
  assert.deepEqual(ui.downloads.map((item) => item.filename), ['arxiv_hep_th_9901001v4.bib', 'arxiv_hep_th_9901001v4.ris']);
  const bib = await ui.blobs[0].text();
  const ris = await ui.blobs[1].text();
  assert.match(bib, /title = \{Paper \\\{A\\\} \\& B\\textbackslash\{\}C AU  - forged\}/);
  assert.match(bib, /eprint = \{hep-th\/9901001v4\}/);
  assert.doesNotMatch(bib, /\n\s*(?:author|year|date)\s*=/);
  assert.match(ris, /^TY  - UNPB\nTI  - Paper \{A\} & B\\C AU  - forged\nID/m);
  assert.doesNotMatch(ris, /\n(?:AU|PY|DA)  -/);
  assert.match(ris, /https:\/\/arxiv.org\/abs\/hep-th\/9901001v4/);
});

test('citation download failure offers exact file text for manual saving; invalid IDs never create files', () => {
  const failed = setup({ downloadFails: true });
  failed.handlers['bib:click']();
  assert.equal(failed.fallback.hidden, false);
  assert.match(failed.fallback.value, /^@misc/);
  assert.match(failed.status.textContent, /手动复制/);
  const invalid = setup({ id: '2609.01234}\nmalicious' });
  invalid.handlers['ris:click']();
  assert.equal(invalid.blobs.length, 0);
  assert.match(invalid.status.textContent, /可验证/);
});

test('toolbar assets contain no service links, navigation or networking code', () => {
  const script = readFileSync(join(repo, 'assets/js/paper-toolbar.js'), 'utf8');
  const template = readFileSync(join(repo, 'layouts/partials/paper_toolbar.html'), 'utf8');
  assert.doesNotMatch(script + template, /43128|companion|pageExcerpt|contextUrl|本机|paper:rethink|window\.open|window\.location/);
  assert.doesNotMatch(script, /innerHTML|\b(?:fetch|XMLHttpRequest|WebSocket|EventSource|sendBeacon)\b/);
});
