'use strict';

const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');

test('Hugo search index preserves source titles, spaced scores and conference dates across generations', (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'blog-search-index-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const content = path.join(root, 'content', 'posts');
  fs.mkdirSync(content, { recursive: true });
  const config = path.join(root, 'hugo.yaml');
  fs.writeFileSync(config, [
    'baseURL: https://example.test/blog/',
    'theme: PaperMod',
    'buildFuture: true',
    'disableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]',
    'staticDir: []',
    'outputs:',
    '  home: [HTML, JSON]',
    'params:',
    '  mainSections: [posts]',
    '  homeInfoParams:',
    '    Title: Research',
    ''
  ].join('\n'));
  fs.writeFileSync(path.join(content, 'legacy-paper.md'), [
    '---', 'title: Original English title', 'date: 2026-04-29',
    'description: "语音识别 | 7.0 / 10"', 'tags: [语音识别]', '---',
    '# 📄 中文题目', '', 'A short summary.'
  ].join('\n'));
  fs.writeFileSync(path.join(content, 'workbench.md'), [
    '---', 'title: Analysis display title', 'date: 2026-09-04',
    'paper_digest_original_title: Source paper title',
    'paper_digest_reader_title: Contract reader title',
    'paper_digest_primary_task: Structured task',
    'paper_digest_score: 0',
    'paper_digest_one_sentence: Evidence from the structured contract.',
    'description: "Legacy task | 9.9/10"',
    'paper_digest_arxiv_id: "2609.12345"', '---', '# 另一个中文题目'
  ].join('\n'));
  fs.writeFileSync(path.join(content, 'icml2027-task-001.md'), [
    '---', 'title: ICML 2027 direction', 'date: 2026-09-06',
    'paper_digest_page_type: index',
    'description: "Featured paper 8.0/10"', '---', '# Conference direction',
    '', '[First included paper](https://arxiv.org/abs/2609.11111)'
  ].join('\n'));
  fs.writeFileSync(path.join(content, 'special-edition.md'), [
    '---', 'title: Special edition', 'date: 2026-09-05',
    'paper_digest_page_type: index', '---', '# Daily edition',
    '', '[First included paper](https://arxiv.org/abs/2609.22222)'
  ].join('\n'));
  fs.writeFileSync(path.join(root, 'content', 'archives.md'), '---\ntitle: Archive\nlayout: archives\n---\n');
  execFileSync('hugo', ['--source', path.resolve(__dirname, '..'), '--config', config,
    '--contentDir', path.join(root, 'content'), '--destination', path.join(root, 'public'), '--noBuildLock'], { stdio: 'pipe' });
  const records = JSON.parse(fs.readFileSync(path.join(root, 'public', 'index.json'), 'utf8'));
  const legacy = records.find((item) => item.title === 'Original English title');
  assert.equal(legacy.titleZh, '中文题目');
  assert.equal(legacy.score, '7.0');
  assert.equal(legacy.task, '语音识别');
  assert.equal(legacy.date, '2026-04-29');
  const workbench = records.find((item) => item.title === 'Analysis display title');
  assert.equal(workbench.originalTitle, 'Source paper title');
  assert.equal(workbench.titleZh, 'Contract reader title');
  assert.equal(workbench.task, 'Structured task');
  assert.equal(workbench.score, '0');
  assert.equal(workbench.summary, 'Evidence from the structured contract.');
  assert.equal(workbench.arxivId, '2609.12345');
  const conference = records.find((item) => item.title === 'ICML 2027 direction');
  assert.equal(conference.pageType, 'conference');
  assert.equal(conference.score, '');
  assert.equal(conference.date, '2026-09-06');
  assert.equal(conference.arxivId, '');
  const daily = records.find((item) => item.title === 'Special edition');
  assert.equal(daily.pageType, 'daily');
  assert.equal(daily.arxivId, '');
  const readPage = (slug) => fs.readFileSync(path.join(root, 'public', 'posts', slug, 'index.html'), 'utf8');
  const paperHtml = readPage('workbench');
  assert.match(paperHtml, /<h1>Contract reader title<\/h1>/);
  assert.match(paperHtml, /research-score[^>]*>0\/10/);
  assert.match(paperHtml, /research-paper-header__original[^>]*>Source paper title/);
  assert.match(paperHtml, /Evidence from the structured contract/);
  for (const slug of ['icml2027-task-001', 'special-edition']) {
    const html = readPage(slug);
    const header = html.match(/<header class="research-paper-header">([\s\S]*?)<\/header>/)?.[1];
    assert.ok(header);
    assert.doesNotMatch(header, /arxiv\.org|paper-tools/);
  }
  assert.match(readPage('icml2027-task-001'), /会议任务专题/);
  assert.match(readPage('special-edition'), /research-workbench--digest/);
  const home = fs.readFileSync(path.join(root, 'public', 'index.html'), 'utf8');
  assert.match(home, /最新速递 · 09-05/);
  assert.equal((home.match(/<article class="post-entry research-entry">/g) || []).length, 1);
  assert.doesNotMatch(home, /会议任务专题/);
  const archive = fs.readFileSync(path.join(root, 'public', 'archives', 'index.html'), 'utf8');
  assert.match(archive, /1 期每日速递/);
  assert.match(archive, /posts\/special-edition\//);
});
