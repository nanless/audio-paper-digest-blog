'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { execFileSync } = require('node:child_process');

test('cold concurrent page stores retain metadata, empty classifications and exact identity recommendations across mixed signatures', t => {
  const source = process.env.BLOG_PERF_SOURCE || path.resolve(__dirname, '..');
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'blog-mixed-cache-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const content = path.join(root, 'content');
  fs.mkdirSync(path.join(content, 'posts'), { recursive: true });
  const snapshot = JSON.parse(fs.readFileSync(path.join(source, 'data/taxonomy-registry.json')));
  const nodes = ['task', 'method', 'setting'].map(facet => snapshot.concepts.find(n => n.facet === facet));
  const weights = Object.fromEntries(nodes.map(n => [n.id, n.facet === 'task' ? 4 : n.facet === 'method' ? 3 : 1]));
  const groups = new Map();
  const pages = [];
  for (let i = 0; i < 120; i++) {
    const identityNumber = Math.floor(i / 2);
    const profile = identityNumber % 6;
    const unknown = identityNumber % 7 === 0;
    const conference = identityNumber % 19 === 0;
    const empty = identityNumber % 11 === 0;
    const selected = empty ? [] : profile === 0 ? nodes : profile < 4 ? [nodes[profile - 1]] : [];
    const name = 'paper-' + String(i).padStart(4, '0');
    const arxiv = '2609.' + String(identityNumber).padStart(5, '0');
    const identity = unknown ? 'page:/blog/posts/' + name + '/' : 'arxiv:' + arxiv;
    const tags = empty ? [] : [profile === 5 ? '待核旧标' : '历史共同标签'];
    const ids = selected.length ? selected.map(n => n.id) : tags.map(tag => 'legacy:' + tag);
    const metadata = { title: 'Title ' + name, date: i % 2 ? '2026-09-30' : '2026-09-29',
      paper_digest_page_type: conference ? 'conference' : 'paper', paper_digest_arxiv_id: unknown ? '' : arxiv,
      paper_digest_taxonomy_contract: 'paper-taxonomy-flat-tags-compat-v1',
      paper_digest_taxonomy_registry_sha256: profile === 5 ? '0'.repeat(64) : snapshot.registrySha256,
      paper_digest_taxonomy_concepts: selected.map(n => ({ id: n.id, facet: n.facet, label: n.zh })), tags };
    fs.writeFileSync(path.join(content, 'posts', name + '.md'), '---\n' + JSON.stringify(metadata) + '\n---\n# ' + metadata.title + '\n## Evidence\nCache fixture.');
    pages.push({ name, identity, ids, conference, unknown });
    if (!conference) {
      const previous = groups.get(identity);
      groups.set(identity, { identity, ids: new Set([...(previous?.ids || []), ...ids]), name: i % 2 || !previous ? name : previous.name });
    }
  }
  // This synthetic frontmatter cohort exercises recommendations, not signed
  // publication collections. Those collections require their original MDs,
  // so keep their unrelated authority files out of the fixture-only source.
  const dataDir = path.join(root, 'data');
  fs.cpSync(path.join(source, 'data'), dataDir, { recursive: true, filter: file => {
    const name = path.basename(file);
    return !name.startsWith('fullsite-r6-') && !name.startsWith('fullsite-taxonomy-')
      && !name.startsWith('taxonomy-history') && name !== 'current-page-taxonomy-history-v2.json'
      && name !== 'taxonomy-old-v2-publication-holds.json' && name !== 'exact1028-qualified-classification.json';
  } });
  for (const directory of ['layouts', 'assets', 'themes']) {
    fs.cpSync(path.join(source, directory), path.join(root, directory), { recursive: true });
  }
  const config = path.join(root, 'hugo.yaml');
  fs.writeFileSync(config, ['baseURL: https://example.test/blog/', 'theme: PaperMod', 'buildFuture: true',
    'staticDir: []', 'dataDir: ' + JSON.stringify(dataDir), 'outputs:', '  home: [HTML, JSON]',
    'params:', '  ShowToc: true', '  mainSections: [posts]', '  homeInfoParams:', '    Title: Research'].join('\n'));
  const destination = path.join(root, 'public');
  execFileSync('hugo', ['--source', root, '--config', config, '--contentDir', content,
    '--destination', destination, '--noBuildLock', '--panicOnWarning'],
  { stdio: 'pipe', env: { ...process.env, GOMAXPROCS: '8', HUGO_NUMWORKERMULTIPLIER: '2' } });
  const index = JSON.parse(fs.readFileSync(path.join(destination, 'index.json'), 'utf8'));
  for (const page of pages) {
    const html = fs.readFileSync(path.join(destination, 'posts', page.name, 'index.html'), 'utf8');
    assert.match(html, new RegExp('<h1>Title ' + page.name));
    const indexed = index.find(record => record.permalink.endsWith('/posts/' + page.name + '/'));
    assert.ok(indexed && indexed.titleZh, page.name + ' keeps metadata during cold parallel reads');
    assert.equal(indexed.pageType, page.conference ? 'conference' : 'paper');
    assert.equal(indexed.citation.identityStatus, page.conference || page.unknown ? 'unknown' : 'verified');
    if (page.conference) continue;
    const current = groups.get(page.identity);
    const expected = [...groups.values()].filter(candidate => candidate.identity !== page.identity)
      .map(candidate => ({ ...candidate, score: [...current.ids].reduce((score, id) => score + (candidate.ids.has(id) ? weights[id] || 1 : 0), 0) }))
      .filter(candidate => candidate.score > 0)
      .sort((a, b) => b.score - a.score || (a.identity < b.identity ? -1 : a.identity > b.identity ? 1 : 0))
      .slice(0, 3).map(candidate => candidate.name);
    const related = html.match(/<section class="related-posts[\s\S]*?<\/section>/)?.[0] || '';
    const actual = [...related.matchAll(/href="\/blog\/posts\/(paper-\d+)\/"/g)].map(match => match[1]);
    assert.deepEqual(actual, expected, page.name + ' has exact top3 with stable identity ties and self exclusion');
    if (page.ids.some(id => id.startsWith('legacy:')) && actual.length) assert.match(related, /相同关键词/);
  }
});
