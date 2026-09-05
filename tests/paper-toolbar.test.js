const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join, resolve } = require('node:path');
const test = require('node:test');

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
const workbenchFrontmatter = [
  'title: "Blog analysis title"',
  'date: 2026-09-05',
  'draft: false',
  'description: "Evidence-bound analysis."',
  'tags: ["speech", "compression"]',
  'categories: ["论文速递"]',
  'hiddenInHomeList: true',
  'paper_digest_page_type: paper',
  'paper_digest_workbench_contract: researcher-workbench-v1',
  'paper_digest_original_title: "Paper & Evidence"',
  'paper_digest_arxiv_id: "2609.01234"',
  'paper_digest_arxiv_version: 2',
  'paper_digest_arxiv_versioned_id: "2609.01234v2"',
  'paper_digest_citation_date: "2026-09-03"',
  'paper_digest_authors: [{"name":"Researcher A","affiliations":["Institute A"]}]',
  `paper_digest_sidecars: {"citation.json":{"url":"${sidecarRoot}citation.json","sha256":"${'a'.repeat(64)}"},"citation.bib":{"url":"${sidecarRoot}citation.bib","sha256":"${'b'.repeat(64)}"},"citation.ris":{"url":"${sidecarRoot}citation.ris","sha256":"${'c'.repeat(64)}"},"rethink-context.json":{"url":"${sidecarRoot}rethink-context.json","sha256":"${'d'.repeat(64)}"}}`,
].join('\n');

test('workbench paper renders versioned tools, safe sidecars, companion query, and citation metadata', () => {
  const html = renderFixture(workbenchFrontmatter);
  assert.match(html, /class=(?:"paper-tools"|paper-tools)/);
  assert.match(html, /href=https:\/\/arxiv\.org\/abs\/2609\.01234v2/);
  assert.match(html, /href=https:\/\/arxiv\.org\/pdf\/2609\.01234v2\.pdf/);
  assert.match(html, /data-copy-text=2609\.01234/);
  assert.match(html, /data-copy-text=2609\.01234v2/);
  for (const filename of ['citation.json', 'citation.bib', 'citation.ris']) {
    assert.match(html, new RegExp(`${filename.replace('.', '\\.')}`));
  }

  const aiHref = html.match(/href="?(http:\/\/127\.0\.0\.1:43128\/ui\?[^" >]+)"?/)?.[1];
  assert.ok(aiHref, 'explicit localhost companion anchor must exist');
  const aiURL = new URL(aiHref.replaceAll('&amp;', '&'));
  assert.equal(aiURL.searchParams.get('title'), 'Paper & Evidence');
  assert.equal(aiURL.searchParams.get('arxivId'), '2609.01234v2');
  assert.equal(aiURL.searchParams.get('sourceUrl'), 'https://arxiv.org/abs/2609.01234v2');
  assert.equal(aiURL.searchParams.get('contextUrl'), `${sidecarRoot}rethink-context.json`);
  assert.deepEqual([...aiURL.searchParams.keys()].sort(), [
    'arxivId', 'contextUrl', 'sourceUrl', 'title',
  ]);
  assert.doesNotMatch(html, /<(?:script|link|img|iframe)[^>]+127\.0\.0\.1/i);
  assert.match(html, /npm run paper:rethink/);
  assert.match(html, /docs\/paper-rethink-companion\.md/);

  assert.match(html, /name=citation_title content="Paper (?:&|&amp;) Evidence"/);
  assert.match(html, /name=citation_author content="Researcher A"/);
  assert.match(html, /name=citation_date content="?2026\/09\/03"?/);
  assert.match(html, /name=citation_public_url content="?https:\/\/arxiv\.org\/abs\/2609\.01234v2"?/);
  assert.match(html, /name=citation_pdf_url content="?https:\/\/arxiv\.org\/pdf\/2609\.01234v2\.pdf"?/);
  const schemas = [...html.matchAll(/<script type=application\/ld\+json>(.*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]));
  const paperSchema = schemas.find((item) => item['@type'] === 'ScholarlyArticle');
  assert.ok(paperSchema);
  assert.equal(paperSchema.url, 'https://arxiv.org/abs/2609.01234v2');
  assert.deepEqual(paperSchema.author.map((author) => author.name), ['Researcher A']);
});

test('legacy paper degrades to arXiv/PDF/ID tools without invented sidecars or authors', () => {
  const html = renderFixture([
    'title: "Legacy paper"',
    'date: 2026-09-05',
    'draft: false',
    'description: "speech | 7.0/10"',
    'tags: ["speech"]',
    'categories: ["论文速递"]',
    'hiddenInHomeList: true',
    'paper_digest_page_type: paper',
    'paper_digest_arxiv_id: "2609.09999"',
  ].join('\n'));
  assert.match(html, /class=(?:"paper-tools"|paper-tools)/);
  assert.match(html, /https:\/\/arxiv\.org\/abs\/2609\.09999/);
  assert.match(html, /https:\/\/arxiv\.org\/pdf\/2609\.09999\.pdf/);
  assert.doesNotMatch(html, /citation\.(?:json|bib|ris)/);
  assert.doesNotMatch(html, /name=citation_author/);
  const aiHref = html.match(/href="?(http:\/\/127\.0\.0\.1:43128\/ui\?[^" >]+)"?/)?.[1];
  const aiURL = new URL(aiHref.replaceAll('&amp;', '&'));
  assert.equal(aiURL.searchParams.get('contextUrl'), '');
});

test('true legacy raw content and old-style versioned arXiv IDs retain basic tools', () => {
  const html = renderFixture([
    'title: "Old style legacy paper"',
    'date: 2026-09-05',
    'draft: false',
    'description: "legacy analysis"',
    'tags: ["theory"]',
    'categories: ["论文速递"]',
    'hiddenInHomeList: true',
  ].join('\n'), '## 原文\n\n[arXiv](https://arxiv.org/abs/hep-th/9901001v4)');
  assert.match(html, /class=(?:"paper-tools"|paper-tools)/);
  assert.match(html, /https:\/\/arxiv\.org\/abs\/hep-th\/9901001v4/);
  assert.match(html, /https:\/\/arxiv\.org\/pdf\/hep-th\/9901001v4\.pdf/);
  assert.match(html, /data-copy-text=hep-th\/9901001/);
  assert.match(html, /data-copy-text=hep-th\/9901001v4/);
  assert.doesNotMatch(html, /citation\.(?:json|bib|ris)/);
  assert.doesNotMatch(html, /name=citation_author/);
  const aiHref = html.match(/href="?(http:\/\/127\.0\.0\.1:43128\/ui\?[^" >]+)"?/)?.[1];
  assert.ok(aiHref);
  const aiURL = new URL(aiHref.replaceAll('&amp;', '&'));
  assert.equal(aiURL.searchParams.get('arxivId'), 'hep-th/9901001v4');
  assert.equal(aiURL.searchParams.get('sourceUrl'), 'https://arxiv.org/abs/hep-th/9901001v4');
});

test('off-origin or noncanonical sidecar URLs are not rendered or sent to companion', () => {
  const hostile = workbenchFrontmatter
    .replace(`${sidecarRoot}citation.ris`, 'https://evil.example/citation.ris')
    .replace(`${sidecarRoot}rethink-context.json`, `${sidecarRoot}../rethink-context.json`);
  const html = renderFixture(hostile);
  assert.match(html, /citation\.json/);
  assert.match(html, /citation\.bib/);
  assert.doesNotMatch(html, /evil\.example|\.\.\/rethink-context/);
  const aiHref = html.match(/href="?(http:\/\/127\.0\.0\.1:43128\/ui\?[^" >]+)"?/)?.[1];
  const aiURL = new URL(aiHref.replaceAll('&amp;', '&'));
  assert.equal(aiURL.searchParams.get('contextUrl'), '');
});

test('toolbar JavaScript uses textContent and never contacts localhost', () => {
  const script = readFileSync(join(repo, 'assets', 'js', 'paper-toolbar.js'), 'utf8');
  assert.match(script, /textContent/);
  assert.doesNotMatch(script, /innerHTML/);
  assert.doesNotMatch(script, /\b(?:fetch|XMLHttpRequest|WebSocket|EventSource|sendBeacon)\b/);
  assert.doesNotMatch(script, /127\.0\.0\.1|localhost/);
});
