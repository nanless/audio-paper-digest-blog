'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');
const { extractHead, verifyRss, verifySearchIndex } = require('../scripts/verify-build');

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
