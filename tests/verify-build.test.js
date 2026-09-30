'use strict';

const assert = require('node:assert/strict');
const { mkdtempSync, mkdirSync, rmSync, writeFileSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join } = require('node:path');
const test = require('node:test');
const {
  extractHead, verifyRss, verifySearchIndex, verifyPaperToolCoverage
} = require('../scripts/verify-build');

test('extractHead isolates head content', () => {
  const head = extractHead('<html lang="zh-CN"><head><title>测试</title></head><body><button>按钮</button></body></html>');
  assert.equal(head, '<title>测试</title>');
});

test('verifyRss accepts a sorted daily-only summary feed', () => {
  const xml = `<?xml version="1.0"?><rss><channel>
    <item><link>https://nanless.github.io/audio-paper-digest-blog/posts/2026-09-04/</link><pubDate>Fri, 04 Sep 2026 00:00:00 +0800</pubDate><description>摘要</description></item>
    <item><link>https://nanless.github.io/audio-paper-digest-blog/posts/2026-09-03/</link><pubDate>Thu, 03 Sep 2026 00:00:00 +0800</pubDate><description>摘要</description></item>
  </channel></rss>`;
  assert.deepEqual(verifyRss(xml, Buffer.byteLength(xml)), { itemCount: 2, bytes: Buffer.byteLength(xml) });
});

test('verifyRss rejects paper pages and embedded full content', () => {
  const xml = '<rss><channel><item><link>https://nanless.github.io/audio-paper-digest-blog/posts/a-paper/</link><pubDate>Fri, 04 Sep 2026 00:00:00 +0800</pubDate><description>x</description><content:encoded>full</content:encoded></item></channel></rss>';
  assert.throws(() => verifyRss(xml, Buffer.byteLength(xml)), /content:encoded/);
});

test('verifySearchIndex accepts structured same-site records', () => {
  const json = JSON.stringify([{
    title: 'Paper', titleZh: '论文', originalTitle: 'Paper',
    permalink: 'https://nanless.github.io/audio-paper-digest-blog/posts/paper/',
    summary: '纯文本摘要', date: '2026-09-04', pageType: 'paper', task: '语音识别',
    score: '8.0', arxivId: '2609.00001', tags: ['语音识别'], categories: ['论文速递']
  }]);
  assert.equal(verifySearchIndex(json, Buffer.byteLength(json)).itemCount, 1);
});

test('verifySearchIndex rejects off-site permalinks and HTML summaries', () => {
  const offsite = JSON.stringify([{ title: 'x', titleZh: 'x', summary: 'x', tags: [], pageType: 'paper', permalink: 'https://evil.example/x' }]);
  assert.throws(() => verifySearchIndex(offsite, Buffer.byteLength(offsite)), /URL 越界/);
  const html = JSON.stringify([{ title: 'x', titleZh: 'x', summary: '<script>x</script>', tags: [], pageType: 'paper', permalink: '/audio-paper-digest-blog/posts/x/' }]);
  assert.throws(() => verifySearchIndex(html, Buffer.byteLength(html)), /含 HTML/);
});

test('verifyPaperToolCoverage requires browser-only PDF/citation tools and safe text-only fallback', (t) => {
  const root = mkdtempSync(join(tmpdir(), 'paper-tool-coverage-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const rich = join(root, 'rich', 'index.html');
  const fallback = join(root, 'fallback', 'index.html');
  mkdirSync(join(root, 'rich'), { recursive: true });
  mkdirSync(join(root, 'fallback'), { recursive: true });
  const selection = 'paper-tools__advanced paper-tool--pack paper-tools__copy-fallback <noscript>手动复制引用</noscript>';
  const source = value => '<script type="application/json" class="paper-tools__citation-record">' + JSON.stringify({ contract: 'paper-citation-source-v1', pageType: 'paper', ...value }) + '</script>';
  const arxivSource = source({ identityStatus: 'verified', verified: true, sourceKind: 'arxiv', arxivId: '2609.01234', url: 'https://arxiv.org/abs/2609.01234', pdfUrl: 'https://arxiv.org/pdf/2609.01234.pdf' });
  const unknownSource = source({ identityStatus: 'unknown', url: '', pdfUrl: '' });
  const localTools = arxivSource + 'paper-tool--reference-copy <a href="https://arxiv.org/abs/2609.01234">原文</a><a href="https://arxiv.org/pdf/2609.01234.pdf">PDF</a><button data-citation-format="bib">BibTeX</button><a href="/data/papers/citation.ris" download>RIS</a>';
  writeFileSync(rich, `<article class="research-workbench--paper"><section class="paper-tools">${selection} ${localTools}</section></article>`);
  writeFileSync(fallback, `<article class="research-workbench--paper"><section class="paper-tools paper-tools--selection-only">${selection} ${unknownSource}</section><a href="https://arxiv.org/pdf/2609.09999.pdf">正文引用的其他论文</a></article>`);
  assert.deepEqual(verifyPaperToolCoverage([rich, fallback]), {
    paperPages: 2, sourceTools: 2, richArxivTools: 1, richConferenceTools: 0, selectionOnlyFallbacks: 1
  });
  writeFileSync(rich, `<article class="research-workbench--paper"><section class="paper-tools">${selection} ${localTools}<a href="http://127.0.0.1:43128/ui">旧入口</a></section></article>`);
  assert.throws(() => verifyPaperToolCoverage([rich]), /已取消的本机助手/);
  writeFileSync(rich, `<article class="research-workbench--paper"><section class="paper-tools">${selection} ${localTools.replace('href="https://arxiv.org/pdf/2609.01234.pdf"', '')}</section></article>`);
  assert.throws(() => verifyPaperToolCoverage([rich]), /缺少对应官方来源\/PDF\/引用/);
  writeFileSync(rich, `<article class="research-workbench--paper"><section class="paper-tools">${selection} ${localTools.replace('data-citation-format="bib"', '')}</section></article>`);
  assert.throws(() => verifyPaperToolCoverage([rich]), /缺少 bib 引用下载/);
  writeFileSync(rich, `<article class="research-workbench--paper"><section class="paper-tools">${selection} ${localTools}</section></article>`);
  writeFileSync(fallback, '<article class="research-workbench--paper">missing</article>');
  assert.throws(() => verifyPaperToolCoverage([rich, fallback]), /缺少原文与引用工具/);
});

test('reading coverage rejects obsolete actions, outside-region controls and unknown reference copying', t => {
  const root = mkdtempSync(join(tmpdir(), 'reading-coverage-boundaries-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const file = join(root, 'index.html');
  const markers = 'paper-tools__advanced paper-tool--pack paper-tools__copy-fallback <noscript>下载导读</noscript>';
  const record = '<script class="paper-tools__citation-record">' + JSON.stringify({
    contract: 'paper-citation-source-v1', pageType: 'paper', identityStatus: 'unknown', url: '', pdfUrl: ''
  }) + '</script>';
  const render = (inside, outside = '') => writeFileSync(file, '<article class="research-workbench--paper"><section class="paper-tools paper-tools--selection-only">' + inside + '</section>' + outside + '</article>');
  render(markers + record);
  assert.equal(verifyPaperToolCoverage([file]).selectionOnlyFallbacks, 1);
  for (const obsolete of ['复制 AI 提问', '保存到 Zotero', 'zotero.org/download/connectors', 'paper-tool--selection-copy']) {
    render(markers + record + obsolete);
    assert.throws(() => verifyPaperToolCoverage([file]), /已移除的 AI\/Zotero/);
  }
  render(record, markers);
  assert.throws(() => verifyPaperToolCoverage([file]), /缺少原文与引用工具/);
  render(markers + record + 'paper-tool--reference-copy');
  assert.throws(() => verifyPaperToolCoverage([file]), /身份待核页不得/);
});

test('conference coverage uses its official source and ignores other arXiv links in the body', t => {
  const root = mkdtempSync(join(tmpdir(), 'conference-tool-coverage-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const file = join(root, 'index.html');
  const record = { contract: 'paper-citation-source-v1', pageType: 'paper', identityStatus: 'verified', verified: true,
    sourceKind: 'conference', paperId: 'conference:iclr:2026:paper:example', url: 'https://openreview.net/forum?id=example', pdfUrl: 'https://openreview.net/pdf?id=example' };
  const tools = '<section class="paper-tools">paper-tools__advanced paper-tool--pack paper-tools__copy-fallback <noscript>手动复制</noscript>'
    + '<script class="paper-tools__citation-record">' + JSON.stringify(record) + '</script>'
    + '<a href="' + record.url + '">原文</a><a href="' + record.pdfUrl + '">PDF</a>'
    + '<button data-citation-format="bib">BibTeX</button><button data-citation-format="ris">RIS</button>'
    + 'paper-tool--reference-copy</section>';
  writeFileSync(file, '<article class="research-workbench--paper">' + tools + '<a href="https://arxiv.org/pdf/2609.09999.pdf">其他论文</a></article>');
  assert.equal(verifyPaperToolCoverage([file]).richConferenceTools, 1);
  writeFileSync(file, '<article class="research-workbench--paper">' + tools.replace('data-citation-format="ris"', '') + '<button data-citation-format="ris">正文按钮</button></article>');
  assert.throws(() => verifyPaperToolCoverage([file]), /缺少 ris/);
});

test('arXiv coverage preserves exact official PDF URLs and requires a sealed version disclosure for mismatched versions', t => {
  const root = mkdtempSync(join(tmpdir(), 'arxiv-version-coverage-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const file = join(root, 'index.html');
  const record = { contract: 'paper-citation-source-v1', pageType: 'paper', identityStatus: 'verified', verified: true,
    sourceKind: 'arxiv', arxivId: '2605.12987v1', url: 'https://arxiv.org/abs/2605.12987v1', pdfUrl: 'https://arxiv.org/pdf/2605.12987v1' };
  const render = value => writeFileSync(file, '<article class="research-workbench--paper"><section class="paper-tools">'
    + 'paper-tools__advanced paper-tool--pack paper-tools__copy-fallback <noscript>手动复制</noscript>'
    + '<script class="paper-tools__citation-record">' + JSON.stringify(value) + '</script>'
    + '<a href="' + value.url + '">原文</a><a href="' + value.pdfUrl + '">PDF</a>'
    + '<button data-citation-format="bib">BibTeX</button><button data-citation-format="ris">RIS</button>'
    + 'paper-tool--reference-copy</section></article>');
  for (const suffix of ['', '.pdf']) {
    render({ ...record, pdfUrl: record.pdfUrl + suffix });
    assert.equal(verifyPaperToolCoverage([file]).richArxivTools, 1);
  }
  const disclosed = { ...record, pdfUrl: 'https://arxiv.org/pdf/2605.12987',
    sourceVersionWarning: '封存文本为 v1，实际 PDF 地址未指定版本。',
    pdfVersionBinding: { contract: 'sealed-arxiv-pdf-version-binding-v1', status: 'versioned-text-unversioned-pdf-url',
      paperId: 'arxiv:2605.12987', sourceId: record.arxivId, pdfRequestedUrl: 'https://arxiv.org/pdf/2605.12987',
      pdfVersion: 'unspecified', pdfVersionAuthenticated: false, pdfSha256: 'a'.repeat(64), sourceManifestSha256: 'b'.repeat(64) } };
  render(disclosed);
  assert.equal(verifyPaperToolCoverage([file]).richArxivTools, 1);
  for (const value of [
    { ...disclosed, pdfVersionBinding: undefined },
    { ...disclosed, sourceVersionWarning: '' },
    { ...disclosed, pdfVersionBinding: { ...disclosed.pdfVersionBinding, pdfVersionAuthenticated: true } },
    { ...disclosed, pdfVersionBinding: { ...disclosed.pdfVersionBinding, pdfSha256: '' } },
    { ...disclosed, pdfUrl: 'https://arxiv.org/pdf/2605.99999' },
    { ...disclosed, url: 'https://arxiv.org/abs/2605.99999v1' }
  ]) {
    render(value);
    assert.throws(() => verifyPaperToolCoverage([file]), /arXiv 工具身份不一致/);
  }
});

test('coverage rejects retired reading UI and scripts even outside the source toolbar', t => {
  const root = mkdtempSync(join(tmpdir(), 'retired-reading-ui-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const file = join(root, 'index.html');
  const source = JSON.stringify({ contract: 'paper-citation-source-v1', pageType: 'paper', identityStatus: 'unknown', url: '', pdfUrl: '' });
  const safe = '<article class="research-workbench--paper"><section class="paper-tools paper-tools--selection-only">paper-tools__advanced paper-tool--pack paper-tools__copy-fallback <noscript>下载导读</noscript><script class="paper-tools__citation-record">' + source + '</script></section>';
  for (const obsolete of ['<button data-reading-bookmark>收藏</button>', '<div id="reading-resume"></div>', '<script src="reading-controls.abc123.js"></script>', '<script src="reading-store.abc123.js"></script>']) {
    writeFileSync(file, safe + obsolete + '</article>');
    assert.throws(() => verifyPaperToolCoverage([file]), /浏览器阅读资料/);
  }
});
