'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const { spawnSync } = require('node:child_process');
const repo = path.resolve(__dirname, '..');
const key = 'posts/conference-interspeech-2026-conference-paper-id-wu26e-interspeech-7a15fe005a.md';
const source = fs.readFileSync(path.join(repo, 'content', key), 'utf8');
const sha = value => crypto.createHash('sha256').update(value).digest('hex');

test('reader presentation preserves heading anchors and code, and repairs only the exact six coordinate links', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'reader-presentation-'));
  t.after(() => fs.rmSync(root, {recursive: true, force: true}));
  for (const dir of ['content/posts', 'layouts/partials', 'layouts/_default/_markup', 'data']) fs.mkdirSync(path.join(root, dir), {recursive:true});
  for (const file of ['partials/reader_article_content.html', 'partials/reader_table_of_contents.html', 'partials/research_normalized_title.html', '_default/_markup/render-image.html']) fs.copyFileSync(path.join(repo, 'layouts', file), path.join(root, 'layouts', file));
  fs.writeFileSync(path.join(root, 'hugo.yaml'), 'baseURL: https://example.test/\ndisableKinds: [home, taxonomy, term, RSS, sitemap]\nmarkup:\n  tableOfContents:\n    startLevel: 1\n  goldmark:\n    renderer:\n      unsafe: true\n');
  const cases = {
    [key]: source,
    'posts/other.md': source,
    'posts/drift.md': source + '\nChanged body.\n',
    'posts/headings.md': '---\ntitle: Heading fixture\n---\nBefore.\n# Top {#original-top}\n## Existing {#existing}\n# Second {#second}\n\n```html\n<h1 id="code">Literal</h1>\n```\n\n![caption](image.png)\n![](empty.png)\n[relative](1,2,3)\n',
    'posts/protected.md': '---\ntitle: Protected fixture\n---\nRaw fixture.\n',
    'posts/title-repeat.md': '---\ntitle: Repeated paper title\n---\n# Repeated paper title {#paper-title}\n\nIntro.\n# Genuine chapter {#chapter}\nText.',
    'posts/title-different.md': '---\ntitle: Actual paper title\n---\n# A genuine opening chapter {#opening}\nText.',
    'posts/raw-images.md': '---\ntitle: Raw images fixture\n---\nRaw fixture.',
    'posts/s-diverse.md': fs.readFileSync(path.join(repo, 'content/posts/2026-07-07-s-diverse-spanish-diverse-speech.md'), 'utf8'),
  };
  for (const [file, md] of Object.entries(cases)) fs.writeFileSync(path.join(root, 'content', file), md);
  const literal = '<h1 id="live">Visible</h1><pre><h1 id="pre">Keep</h1></pre><code><h1>Inline</h1></code><script>"<h1>Script</h1>"</script><textarea><h1>Text area</h1></textarea>';
  fs.writeFileSync(path.join(root, 'data/incoming.json'), JSON.stringify({ html: literal }));
  const rawImages = `<img src="missing.png"><img src='single.png' /><IMG src=upper.png><img data-alt="not alt" src="data.png"><img title="literal alt='not an attribute' >" src="quoted.png"><img alt="Actual description" src="known.png"><img ALT='' src='empty.png'><img alt src=boolean.png><img-alt src="custom.png"><pre><img src="code.png"></pre><code><img src="inline.png"></code>`;
  fs.writeFileSync(path.join(root, 'data/raw_images.json'), JSON.stringify({ html: rawImages }));
  fs.writeFileSync(path.join(root, 'data/toc_fixture.json'), JSON.stringify({ html:'<nav><a href="#one"><img src="one.png"></a><a href="#two">Text <img src="two.png"><em>chapter</em></a></nav>' }));
  fs.writeFileSync(path.join(root, 'layouts/_default/single.html'), '{{ $html := .Content }}{{ $page := . }}{{ if eq .File.BaseFileName "protected" }}{{ $html = hugo.Data.incoming.html }}{{ end }}{{ if eq .File.BaseFileName "raw-images" }}{{ $html = hugo.Data.raw_images.html }}{{ end }}{{ if eq .File.BaseFileName "drift" }}{{ $page = dict "File" (dict "Path" "'+key+'") "RawContent" .RawContent }}{{ end }}{{ dict "original" $html "displayed" (partial "reader_article_content.html" (dict "page" $page "content" $html)) "rawSHA" (crypto.SHA256 .RawContent) "toc" .TableOfContents "tocFixture" (partial "reader_table_of_contents.html" hugo.Data.toc_fixture.html) | jsonify }}');
  const result = spawnSync('hugo', ['--source', root, '--quiet'], {encoding:'utf8',timeout:30000});
  assert.equal(result.status, 0, result.stdout + result.stderr);
  const read = file => JSON.parse(fs.readFileSync(path.join(root, 'public', file.replace(/\.md$/, ''), 'index.html'), 'utf8'));
  const real = read(key);
  assert.equal(sha(source), '6103f895b3d5fce8481270e66f6d34e236ac21fd027c0e1838ee8c30434b5ded');
  assert.equal(real.rawSHA, 'eab232155baa5b678c31fc29db6ebe7c31dc7d44b8e81a889edafe64f54d9afa');
  let expected = real.original.replace(/<h1(\s[^>]*|)>/g, '<h2$1>').replaceAll('</h1>', '</h2>');
  for (const [label, coords] of [['p','0,0,0'],['d','0,4,1'],['s','4,4,0']]) {
    const anchor = `<a href="${coords}">${label}</a>`;
    assert.equal(real.original.split(anchor).length, 3);
    expected = expected.replaceAll(anchor, `[${label}](${coords})`);
  }
  assert.equal(real.displayed, expected);
  for (const file of ['posts/other.md', 'posts/drift.md']) {
    const r = read(file);
    assert.match(r.displayed, /href="0,0,0"/);
  }
  const h = read('posts/headings.md');
  assert.equal(h.tocFixture, '<nav><a href="#one">图示章节</a><a href="#two">Text <em>chapter</em></a></nav>');
  assert.match(h.displayed, /<h2 id="original-top">Top<\/h2>/);
  assert.match(h.displayed, /<h2 id="second">Second<\/h2>/);
  assert.match(h.displayed, /<h2 id="existing">Existing<\/h2>/);
  assert.match(h.toc, /href="#original-top"/);
  assert.match(h.toc, /href="#second"/);
  assert.equal(h.displayed.match(/<pre\b[\s\S]*?<\/pre>/)[0], h.original.match(/<pre\b[\s\S]*?<\/pre>/)[0]);
  assert.match(h.displayed, /<img alt=""[^>]*src="empty.png"/);
  assert.match(h.displayed, /<img alt="caption"/);
  assert.match(h.displayed, /href="1,2,3"/);
  assert.equal(read('posts/protected.md').displayed, literal.replace('<h1 id="live">Visible</h1>', '<h2 id="live">Visible</h2>'));
  const repeated = read('posts/title-repeat.md');
  assert.match(repeated.displayed, /<span id="paper-title" aria-hidden="true"><\/span>/);
  assert.doesNotMatch(repeated.displayed, /Repeated paper title/);
  assert.match(repeated.displayed, /<h2 id="chapter">Genuine chapter<\/h2>/);
  assert.match(repeated.toc, /href="#paper-title"/);
  assert.match(read('posts/title-different.md').displayed, /<h2 id="opening">A genuine opening chapter<\/h2>/);
  const images = read('posts/raw-images.md');
  assert.equal(images.displayed, rawImages.replace('<img src="missing.png">', '<img alt="" src="missing.png">')
    .replace("<img src='single.png' />", "<img alt=\"\" src='single.png' />")
    .replace('<IMG src=upper.png>', '<IMG alt="" src=upper.png>')
    .replace('<img data-alt=', '<img alt="" data-alt=')
    .replace('<img title=', '<img alt="" title='));
  const actual = read('posts/s-diverse.md');
  const actualImages = actual.displayed.match(/<img\s[^>]*>/g) || [];
  assert.equal(actualImages.length, 5);
  for (const image of actualImages) assert.match(image, /\salt=/);
  // RawContent is unchanged by a frontmatter edit; the independent whole-file
  // guard must still prevent applying the exact historical coordinate repair.
  fs.writeFileSync(path.join(root, 'content', key), source.replace(/^title:.*$/m, 'title: "Changed title"'));
  const drift = spawnSync('hugo', ['--source', root, '--quiet'], {encoding:'utf8',timeout:30000});
  assert.equal(drift.status, 0, drift.stdout + drift.stderr);
  const changed = read(key);
  assert.equal(changed.rawSHA, real.rawSHA);
  assert.match(changed.displayed, /href="0,0,0"/);
});

test('an empty paper has a real body destination and honest source-only download labels', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'reader-empty-'));
  t.after(() => fs.rmSync(root, {recursive:true, force:true}));
  for (const dir of ['content/posts', 'data']) fs.mkdirSync(path.join(root, dir), {recursive:true});
  for (const dir of ['layouts', 'assets', 'themes']) fs.cpSync(path.join(repo, dir), path.join(root, dir), {recursive:true});
  // This synthetic page is not a member of any signed publication cohort.
  fs.cpSync(path.join(repo, 'data'), path.join(root, 'data'), {recursive:true, filter: file => {
    const name = path.basename(file);
    return !name.startsWith('fullsite-r6-') && !name.startsWith('fullsite-taxonomy-')
      && !name.startsWith('taxonomy-history') && name !== 'current-page-taxonomy-history-v2.json'
      && name !== 'taxonomy-old-v2-publication-holds.json' && name !== 'exact1028-qualified-classification.json';
  }});
  fs.writeFileSync(path.join(root, 'hugo.yaml'), 'baseURL: https://example.test/\ntheme: PaperMod\nbuildFuture: true\nstaticDir: []\nparams:\n  ShowToc: true\n  mainSections: [posts]\n');
  fs.writeFileSync(path.join(root, 'content/posts/empty.md'), '---\ntitle: Empty paper\ndate: 2026-01-01\npaper_digest_page_type: paper\npaper_digest_arxiv_id: "2601.00001"\n---\n');
  fs.writeFileSync(path.join(root, 'content/posts/unknown-empty.md'), '---\ntitle: Unknown empty paper\ndate: 2026-01-01\npaper_digest_page_type: paper\n---\n');
  const actualPage = 'posts/2026-07-07-s-diverse-spanish-diverse-speech.md';
  fs.copyFileSync(path.join(repo, 'content', actualPage), path.join(root, 'content', actualPage));
  const result = spawnSync('hugo', ['--source',root,'--quiet'], {encoding:'utf8',timeout:30000});
  assert.equal(result.status, 0, result.stdout + result.stderr);
  const html = fs.readFileSync(path.join(root, 'public/posts/empty/index.html'), 'utf8');
  assert.equal((html.match(/id="article-body"/g)||[]).length, 1);
  assert.match(html, /本页暂无导读正文/);
  assert.match(html, /下载来源与引用/);
  assert.doesNotMatch(html, /id="reading-chapters-trigger"|class="workbench-toc"/);
  assert.match(html, /href="#article-body"/);
  assert.match(html, /data-paper-has-guide="false"/);
  const unknown = fs.readFileSync(path.join(root, 'public/posts/unknown-empty/index.html'), 'utf8');
  assert.match(unknown, /data-paper-identity-status="unknown"/);
  assert.match(unknown, /id="article-body"/);
  assert.doesNotMatch(unknown, /paper-tools__advanced|paper-tool--pack|下载导读/);
  // Regression: Setext image-only headings put two hook-free images into the
  // generated TOC, outside .Content. Inspect the complete minified single page.
  const minified = spawnSync('hugo', ['--source',root,'--quiet','--minify'], {encoding:'utf8',timeout:30000});
  assert.equal(minified.status, 0, minified.stdout + minified.stderr);
  const complete = fs.readFileSync(path.join(root, 'public', actualPage.replace(/\.md$/, ''), 'index.html'), 'utf8');
  const tags = Array.from(complete.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').matchAll(/<([a-z][\w:-]*)\b(?:"[^"]*"|'[^']*'|[^'">])*>/gi));
  function attributes(tag) {
    const attrs = {};
    for (const m of tag.matchAll(/\s([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) attrs[m[1].toLowerCase()] = m[2] ?? m[3] ?? m[4] ?? '';
    return attrs;
  }
  const images = tags.filter(tag => tag[1].toLowerCase() === 'img');
  assert.equal(images.length, 5, 'five real body figures; no duplicate TOC thumbnails');
  for (const image of images) assert.ok(Object.hasOwn(attributes(image[0]), 'alt'), image[0]);
  const toc = complete.match(/<aside\b[^>]*class=(?:"workbench-toc"|workbench-toc)[^>]*>[\s\S]*?<\/aside>/)?.[0];
  assert.ok(toc, 'complete single has its actual chapter navigation');
  assert.doesNotMatch(toc, /<img\b/i);
  for (const anchor of toc.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g)) assert.ok(anchor[1].replace(/<[^>]*>/g,'').trim(), 'TOC chapter label remains readable');
  const ids = new Set(tags.map(tag => attributes(tag[0]).id).filter(Boolean));
  for (const anchor of toc.matchAll(/<a\b[^>]*>/g)) {
    const href = attributes(anchor[0]).href;
    if (href?.startsWith('#')) assert.ok(ids.has(decodeURIComponent(href.slice(1))), 'preserved TOC destination: '+href);
  }
});
