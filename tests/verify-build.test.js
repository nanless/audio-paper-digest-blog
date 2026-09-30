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
  const selection = '复制 AI 提问 paper-tools__selected-text paper-tool--selection-copy paper-tools__copy-fallback <noscript>手动复制选段</noscript>';
  const source = value => '<script type="application/json" class="paper-tools__citation-record">' + JSON.stringify({ contract: 'paper-citation-source-v1', pageType: 'paper', ...value }) + '</script>';
  const arxivSource = source({ identityStatus: 'verified', verified: true, sourceKind: 'arxiv', arxivId: '2609.01234', url: 'https://arxiv.org/abs/2609.01234', pdfUrl: 'https://arxiv.org/pdf/2609.01234.pdf' });
  const unknownSource = source({ identityStatus: 'unknown', url: '', pdfUrl: '' });
  const localTools = arxivSource + '网页不能代你点击浏览器扩展 zotero.org/download/connectors <a href="https://arxiv.org/abs/2609.01234">原文</a><a href="https://arxiv.org/pdf/2609.01234.pdf">PDF</a><button data-citation-format="bib">BibTeX</button><a href="/data/papers/citation.ris" download>RIS</a>';
  writeFileSync(rich, `<article class="research-workbench--paper"><section class="paper-tools">${selection} ${localTools}</section></article>`);
  writeFileSync(fallback, `<article class="research-workbench--paper"><section class="paper-tools paper-tools--selection-only">${selection} ${unknownSource}</section><a href="https://arxiv.org/pdf/2609.09999.pdf">正文引用的其他论文</a></article>`);
  assert.deepEqual(verifyPaperToolCoverage([rich, fallback]), {
    paperPages: 2, selectedTextTools: 2, richArxivTools: 1, richConferenceTools: 0, selectionOnlyFallbacks: 1
  });
  writeFileSync(rich, `<article class="research-workbench--paper"><section class="paper-tools">${selection} ${localTools}<a href="http://127.0.0.1:43128/ui">旧入口</a></section></article>`);
  assert.throws(() => verifyPaperToolCoverage([rich]), /已取消的本机助手/);
  writeFileSync(rich, `<article class="research-workbench--paper"><section class="paper-tools">${selection} ${localTools.replace('href="https://arxiv.org/pdf/2609.01234.pdf"', '')}</section></article>`);
  assert.throws(() => verifyPaperToolCoverage([rich]), /缺少对应官方来源\/PDF\/Zotero/);
  writeFileSync(rich, `<article class="research-workbench--paper"><section class="paper-tools">${selection} ${localTools.replace('data-citation-format="bib"', '')}</section></article>`);
  assert.throws(() => verifyPaperToolCoverage([rich]), /缺少 bib 引用下载/);
  writeFileSync(rich, `<article class="research-workbench--paper"><section class="paper-tools">${selection} ${localTools}</section></article>`);
  writeFileSync(fallback, '<article class="research-workbench--paper">missing</article>');
  assert.throws(() => verifyPaperToolCoverage([rich, fallback]), /缺少选段 AI 工具/);
});

test('conference coverage uses its official source and ignores other arXiv links in the body', t => {
  const root = mkdtempSync(join(tmpdir(), 'conference-tool-coverage-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const file = join(root, 'index.html');
  const record = { contract: 'paper-citation-source-v1', pageType: 'paper', identityStatus: 'verified', verified: true,
    sourceKind: 'conference', paperId: 'conference:iclr:2026:paper:example', url: 'https://openreview.net/forum?id=example', pdfUrl: 'https://openreview.net/pdf?id=example' };
  const tools = '<section class="paper-tools">复制 AI 提问 paper-tools__selected-text paper-tool--selection-copy paper-tools__copy-fallback <noscript>手动复制</noscript>'
    + '<script class="paper-tools__citation-record">' + JSON.stringify(record) + '</script>'
    + '<a href="' + record.url + '">原文</a><a href="' + record.pdfUrl + '">PDF</a>'
    + '<button data-citation-format="bib">BibTeX</button><button data-citation-format="ris">RIS</button>'
    + 'zotero.org/download/connectors 网页不能代你点击浏览器扩展</section>';
  writeFileSync(file, '<article class="research-workbench--paper">' + tools + '<a href="https://arxiv.org/pdf/2609.09999.pdf">其他论文</a></article>');
  assert.equal(verifyPaperToolCoverage([file]).richConferenceTools, 1);
  writeFileSync(file, '<article class="research-workbench--paper">' + tools.replace('data-citation-format="ris"', '') + '<button data-citation-format="ris">正文按钮</button></article>');
  assert.throws(() => verifyPaperToolCoverage([file]), /缺少 ris/);
});
