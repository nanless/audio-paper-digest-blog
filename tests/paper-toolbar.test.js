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

test('paper tools keep useful original/PDF/citation controls and remove AI/Zotero detours', () => {
  const html = renderFixture(workbench);
  assert.match(html, /href=https:\/\/arxiv\.org\/abs\/2609\.01234v2/);
  assert.match(html, /href=https:\/\/arxiv\.org\/pdf\/2609\.01234v2\.pdf/);
  assert.match(html, /复制引用/);
  assert.match(html, /引用文件与研究资料/);
  for (const name of ['citation.json', 'citation.bib', 'citation.ris']) assert.ok(html.includes(sidecarRoot + name));
  assert.doesNotMatch(html, /data-citation-format|Zotero|zotero\.org|复制 AI 提问|整理选段提问|paper-selected-text|prompt-task/);
  assert.equal((html.match(/data-reading-bookmark/g) || []).length, 1);
  assert.doesNotMatch(html, /data-reading-status/); // Global controls mount the one actual status editor.
  assert.match(html, /保存在此浏览器/);
});

test('legacy verified record offers brief citation files without fabricated authors/date', () => {
  const html = renderFixture(frontmatter);
  assert.match(html, /data-citation-format=bib/); assert.match(html, /data-citation-format=ris/);
  assert.match(html, /作者与出版日期未提供/);
  assert.doesNotMatch(html, /name=citation_author|name=citation_date/);
});

test('unknown identity retains notes and research pack without inheriting cited arXiv', () => {
  const html = renderFixture('title: "Old paper"\ndate: 2020-01-01\nhiddenInHomeList: true', '[cited](https://arxiv.org/abs/2609.99999)');
  assert.match(html, /身份尚待核实/); assert.match(html, /研究资料/); assert.match(html, /data-reading-bookmark/);
  assert.doesNotMatch(html, /paper-tool--reference-copy|data-citation-format|name=citation_arxiv_id|name=citation_pdf_url|Zotero|复制 AI/);
});

test('invalid sidecar download URLs never replace safe citation generators', () => {
  const html = renderFixture(workbench.replace(sidecarRoot + 'citation.ris', 'https://evil.example/citation.ris'));
  assert.doesNotMatch(html, /evil\.example/); assert.match(html, /data-citation-format=ris/);
  assert.doesNotMatch(html, /data-citation-format=bib/);
});

const citationApi = require('../assets/js/citation-source.js');
const record = { identityStatus: 'verified', sourceKind: 'arxiv', paperKey: 'arxiv:2609.01234',
  title: 'Original paper', arxivId: '2609.01234v2', authors: ['Researcher A'], date: '2026-01-15' };

test('copied reference uses known original fields and preserves version/provenance limits', () => {
  const text = citationApi.formatReference({ ...record, sourceVersionWarning: 'PDF版本待核', provenanceDisclosure: '封存来源记录' });
  assert.match(text, /Researcher A\. \(2026-01-15\)\. Original paper/);
  assert.match(text, /arXiv:2609\.01234v2/); assert.match(text, /https:\/\/arxiv\.org\/abs\/2609\.01234v2/);
  assert.match(text, /PDF版本待核/); assert.match(text, /封存来源记录/);
  const incomplete = citationApi.formatReference({ ...record, authors: [], date: '2026-02-30' });
  assert.doesNotMatch(incomplete, /Researcher A|2026-02/);
  assert.throws(() => citationApi.formatReference({ ...record, identityStatus: 'unknown' }), /可验证/);
});

test('research pack keeps notes separate from visible guide and reliable citations', () => {
  const text = citationApi.buildResearchPack(record, { content: '导读正文', note: '个人复现计划' });
  assert.match(text, /## 本站导读内容[\s\S]*导读正文/);
  assert.match(text, /## 个人阅读笔记[\s\S]*不代表原论文事实[\s\S]*个人复现计划/);
  assert.match(text, /```bibtex/);
});

function copyUI(deny = false, legacy = false) {
  const handlers = {}, writes = [];
  const button = { hidden: true, addEventListener: (type, handler) => { handlers[type] = handler; } };
  const status = { textContent: '' }, fallback = { hidden: true, focus() {}, select() {} };
  const toolbar = { dataset: { citationRecord: JSON.stringify(record), paperTitle: 'Original paper' },
    closest: () => null, querySelector: (selector) => ({ '.paper-tools__status': status,
      '.paper-tools__copy-fallback': fallback, '.paper-tool--reference-copy': button }[selector] || null), querySelectorAll: () => [] };
  let copies = 0;
  const document = { readyState: 'complete', querySelectorAll: () => [toolbar], body: { appendChild() {} },
    createElement: () => ({ value: '', setAttribute() {}, style: {}, select() {}, remove() {} }),
    execCommand: () => { copies += 1; return legacy; } };
  vm.runInNewContext(readFileSync(join(repo, 'assets/js/paper-toolbar.js'), 'utf8'), { document, URL, Blob,
    window: { ResearchCitation: citationApi, isSecureContext: true },
    navigator: { clipboard: { writeText: async text => { if (deny) throw Error('denied'); writes.push(text); } } } });
  return { handlers, writes, status, fallback, button, copies: () => copies };
}

test('reference copy is a real clipboard action with complete selectable fallback', async () => {
  const ui = copyUI(); await ui.handlers.click(); assert.match(ui.writes[0], /Original paper/);
  assert.equal(ui.button.hidden, false);
  const denied = copyUI(true); await denied.handlers.click();
  assert.equal(denied.fallback.hidden, false); assert.equal(denied.fallback.value, citationApi.formatReference(record));
  const oldBrowser = copyUI(true, true); await oldBrowser.handlers.click(); assert.equal(oldBrowser.copies(), 1);
});

test('reading tools perform no AI or external application calls and reuse the existing note store', () => {
  const js = readFileSync(join(repo, 'assets/js/paper-toolbar.js'), 'utf8');
  assert.doesNotMatch(js, /fetch\(|XMLHttpRequest|buildPrompt\(|localStorage|zotero|selection-copy|prompt-task/);
  assert.match(js, /ResearchReading\.mount/); assert.match(js, /DOMContentLoaded/);
  assert.match(js, /note\.dispatchEvent/); assert.match(js, /note: value/);
});

test('verified conference citation exposes actual authors/date/DOI and cannot import unrelated body identifiers', () => {
  const html = renderFixture('title: "Conference Full"\ndate: 2026-09-05\npaper_digest_page_type: paper\npaper_digest_source_kind: conference\npaper_digest_paper_id: "conference:isca:2026:paper:full"\npaper_digest_conference_record_url: "https://official.test/full"\npaper_digest_conference_pdf_url: "https://official.test/full.pdf"\npaper_digest_authors: [{name: "A Researcher"}]\npaper_digest_citation_date: "2026-01-15"\npaper_digest_doi: "10.1234/full"', '[Related](https://arxiv.org/abs/2609.99999)');
  assert.match(html, /name=citation_author content="A Researcher"/);
  assert.match(html, /name=citation_date content="?2026\/01\/15/);
  assert.match(html, /name=citation_doi content="?10\.1234\/full/);
  assert.doesNotMatch(html, /name=citation_arxiv_id|data-paper-arxiv-id/);
  assert.match(html, /data-reading-bookmark/);
});

test('invalid explicit citation dates are omitted instead of borrowing the blog publication date', () => {
  const html = renderFixture(frontmatter + '\npaper_digest_citation_date: "2026-02-30"');
  assert.doesNotMatch(html, /name=citation_date/);
  assert.match(html, /作者与出版日期未提供/);
});
