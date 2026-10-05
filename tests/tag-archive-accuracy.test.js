'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { execFileSync } = require('node:child_process');
const repo = path.resolve(__dirname, '..');
const samples = [
  'content/posts/2026-05-02-mambavoicecloning-efficient-and-expressive-text.md',
  'content/posts/2026-05-04-mambavoicecloning-efficient-and-expressive-text.md'
];

function fixture(t, options = {}) {
  const fixtureSamples = options.samples || samples;
  const tag = options.tag || '状态空间模型';
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'tag-archive-accuracy-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.cpSync(path.join(repo, 'layouts/partials'), path.join(root, 'layouts/partials'), { recursive: true });
  fs.mkdirSync(path.join(root, 'layouts/_default'), { recursive: true });
  fs.copyFileSync(path.join(repo, 'layouts/_default/list.html'), path.join(root, 'layouts/_default/list.html'));
  fs.writeFileSync(path.join(root, 'layouts/_default/baseof.html'), '<!doctype html><html><body>{{ block "main" . }}{{ end }}</body></html>');
  fs.writeFileSync(path.join(root, 'layouts/_default/single.html'), '{{ .Title }}');
  fs.writeFileSync(path.join(root, 'layouts/_default/terms.html'), '{{ range .Data.Terms.Alphabetical }}<a href="{{ .Page.RelPermalink }}">{{ .Page.Title }}</a>{{ end }}');
  fs.writeFileSync(path.join(root, 'layouts/index.html'), 'Fixture home');
  // Unrelated theme chrome is omitted; the real list, source proofs, metadata,
  // identity grouping and direction count helpers are exercised without stubs.
  for (const name of ['breadcrumbs', 'cover', 'post_meta']) {
    fs.writeFileSync(path.join(root, 'layouts/partials', name + '.html'), '');
  }
  fs.mkdirSync(path.join(root, 'content/posts'), { recursive: true });
  fs.mkdirSync(path.join(root, 'data'), { recursive: true });
  for (const entry of fs.readdirSync(path.join(repo, 'data'), { withFileTypes: true })) {
    if (entry.name.startsWith('fullsite-r6-') || entry.name === 'exact1028-qualified-classification.json' || entry.name.startsWith('taxonomy-history') || entry.name.startsWith('fullsite-taxonomy-') || entry.name === 'taxonomy-old-v2-publication-holds.json' || entry.name === 'current-page-taxonomy-history-v2.json') continue;
    fs.cpSync(path.join(repo, 'data', entry.name), path.join(root, 'data', entry.name), { recursive: true });
  }
  const issued = JSON.parse(fs.readFileSync(path.join(repo, 'data/taxonomy-history-v2.json')));
  const records = Object.fromEntries(fixtureSamples.map(file => {
    fs.copyFileSync(path.join(repo, file), path.join(root, file));
    assert.ok(issued.records[file], 'real formally exported sample must exist');
    return [file, issued.records[file]];
  }));
  fs.writeFileSync(path.join(root, 'data/taxonomy-history-v2.json'), JSON.stringify({ contract: issued.contract, records }));
  function article(name, params) {
    fs.writeFileSync(path.join(root, 'content/posts', name + '.md'), '---\n' + JSON.stringify({ title: name, date: '2026-09-30', draft: false, tags: [tag], ...params }) + '\n---\n# Fixture article\n');
  }
  article('unclassified', { paper_digest_arxiv_id: '2609.99998' });
  article('invalid-label', { paper_digest_arxiv_id: '2609.99997', paper_digest_taxonomy_contract: 'paper-taxonomy-flat-tags-compat-v1',
    paper_digest_taxonomy_registry_sha256: '8c89a69ffe7daba6cc9da4ea5789101d6118e326b9978ec3edae1a85e965c8e3',
    paper_digest_taxonomy_concepts: [{ id: 'method.state-space', facet: 'method', label: '未签发标签' }] });
  article('2026-09-30', {});
  fs.writeFileSync(path.join(root, 'hugo.yaml'), 'baseURL: https://example.test/audio-paper-digest-blog/\nbuildFuture: true\ntaxonomies:\n  tag: tags\nparams:\n  mainSections: [posts]\n  hideMeta: true\npagination:\n  pagerSize: 20\ndisableKinds: [RSS, sitemap, robotsTXT, "404"]\n');
  return { root, records };
}

function render(root, tag = '状态空间模型') {
  execFileSync('hugo', ['--source', root, '--noBuildLock', '--panicOnWarning'], { stdio: 'pipe' });
  const dirs = fs.readdirSync(path.join(root, 'public/tags'));
  const pages = dirs.filter(dir => fs.existsSync(path.join(root, 'public/tags', dir, 'index.html')))
    .map(dir => fs.readFileSync(path.join(root, 'public/tags', dir, 'index.html'), 'utf8'));
  const html = pages.find(text => text.includes('<h1>\n    ' + tag));
  assert.ok(html, 'precise original tag URL remains generated');
  return html;
}

test('real historical sidecar guides count once by verified identity; aggregates and unclassified pages remain distinct', t => {
  const f = fixture(t), html = render(f.root);
  assert.match(html, /共 5 页，包含 3 条论文记录及 1 页汇总或其他内容/);
  assert.match(html, /其中 1 条已有已核验的研究方向/);
  assert.match(html, /其中 2 页论文解读尚无完整的已核验方向/);
  assert.match(html, /papers\/\?concept=method.state-space/);
  assert.match(html, /全站直接 1 条 · 含下级 1 条论文记录/);
  for (const sample of samples) assert.ok(html.includes(sample.split('/').at(-1).replace(/\.md$/, '')));
  assert.doesNotMatch(html, /旧版裸|paper-taxonomy-flat-tags-compat-v1|新旧混合索引|新版受控标签/);
});

const unmappedSamples = [
  'content/posts/2026-05-02-the-deleuzian-representation-hypothesis.md',
  'content/posts/2026-05-04-the-deleuzian-representation-hypothesis.md'
];

test('unmapped name associates only the actual member papers verified concepts, once per identity and concept', t => {
  const f = fixture(t, { samples: unmappedSamples, tag: '概念提取' });
  const registry = JSON.parse(fs.readFileSync(path.join(repo, 'data/taxonomy-registry.json')));
  assert.ok(!registry.concepts.some(node => node.zh === '概念提取'), 'real sample name is not a current preferred label');
  const html = render(f.root, '概念提取');
  assert.match(html, /本索引论文的研究方向/);
  const expected = new Set(Object.values(f.records).flatMap(record => record.concepts.map(node => node.id)));
  const associated = [...html.matchAll(/data-associated-concept="([^"]+)"/g)].map(match => match[1]);
  assert.deepEqual(new Set(associated), expected);
  assert.equal(associated.length, expected.size);
  assert.equal((html.match(/本索引 1 条论文记录/g) || []).length, expected.size);
  assert.doesNotMatch(html, /本索引 2 条论文记录|按已核验方向浏览：概念提取/);
  for (const sample of unmappedSamples) assert.ok(html.includes(sample.split('/').at(-1).replace(/\.md$/, '')));
});

test('an unmapped name with no valid member proof keeps its URL and articles without inventing associated directions', t => {
  const f = fixture(t, { samples: unmappedSamples, tag: '概念提取' });
  for (const record of Object.values(f.records)) record.proofSha256 = '0'.repeat(64);
  fs.writeFileSync(path.join(f.root, 'data/taxonomy-history-v2.json'), JSON.stringify({ contract: 'historical-source-taxonomy-supplement-v2', records: f.records }));
  const html = render(f.root, '概念提取');
  assert.match(html, /其中 4 页论文解读尚无完整的已核验方向/);
  assert.doesNotMatch(html, /data-associated-concept=|本索引论文的研究方向/);
  assert.match(html, /the-deleuzian-representation-hypothesis/);
});

test('a drifted sidecar proof is not counted as a valid classification even when raw tags remain', t => {
  const f = fixture(t);
  for (const record of Object.values(f.records)) record.proofSha256 = '0'.repeat(64);
  fs.writeFileSync(path.join(f.root, 'data/taxonomy-history-v2.json'), JSON.stringify({ contract: 'historical-source-taxonomy-supplement-v2', records: f.records }));
  const html = render(f.root);
  assert.match(html, /其中 0 条已有已核验的研究方向/);
  assert.match(html, /其中 4 页论文解读尚无完整的已核验方向/);
  assert.match(html, /全站直接 0 条 · 含下级 0 条论文记录/);
});

test('ambiguous preferred labels never select an arbitrary concept or show an inferred drilldown', t => {
  const f = fixture(t), registryFile = path.join(f.root, 'data/taxonomy-registry.json');
  // 这个旧版夹具只修改原显示词表，不让复制来的新版显示文件覆盖它。
  for (const name of ['tag-catalog-snapshot.json', 'tag-catalog-versions.json']) {
    fs.rmSync(path.join(f.root, 'data', name), { force: true });
  }
  const registry = JSON.parse(fs.readFileSync(registryFile));
  registry.concepts.push({ id: 'scientific_topic.fixture-ambiguous', facet: 'scientific_topic', zh: '状态空间模型', en: 'fixture', aliases: [], ancestorIds: [], status: 'active' });
  fs.writeFileSync(registryFile, JSON.stringify(registry));
  const html = render(f.root);
  assert.match(html, /其中 1 条已有已核验的研究方向/);
  assert.doesNotMatch(html, /按已核验方向浏览：|子标签下钻|aria-label="浏览子标签"/);
});
