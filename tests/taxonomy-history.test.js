'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const repository = process.env.BLOG_REPO || path.resolve(__dirname, '..');
const draft = process.env.TAXONOMY_CONSUMER_DRAFT || repository;
const core = require(path.join(repository, 'assets/js/taxonomy-core'));
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const canonical = value => Array.isArray(value) ? value.map(canonical) : value && typeof value === 'object'
  ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;

test('historical supplement is accepted only for exact page, body, source, original version and explicit roles', t => {
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'taxonomy-history-test-'));
  t.after(() => fs.rmSync(temporary, { recursive: true, force: true }));
  for (const directory of ['content/posts', 'data', 'layouts/partials', 'layouts/_default']) {
    fs.mkdirSync(path.join(temporary, directory), { recursive: true });
  }
  // Copy real transitive proof dependencies; no test-only gate substitutes.
  fs.cpSync(path.join(repository, 'layouts/partials'), path.join(temporary, 'layouts/partials'), { recursive: true });
  const relativeFiles = ['layouts/_default/index.json', 'layouts/partials/research_metadata.html', 'layouts/partials/research_source_identity_proof.html', 'layouts/partials/research_current_page_identity_proof.html',
    'layouts/partials/taxonomy_page_proof.html', 'layouts/partials/taxonomy_snapshot.html',
    'layouts/partials/taxonomy_valid_records.html', 'layouts/partials/taxonomy_registry_index.html',
    'layouts/partials/taxonomy_concept_counts.html', 'layouts/partials/citation_source.html',
    'layouts/partials/research_identity.html', 'layouts/partials/research_historical_source_version.html'];
  for (const relative of relativeFiles) {
    const origin = fs.existsSync(path.join(draft, relative)) ? draft : repository;
    fs.copyFileSync(path.join(origin, relative), path.join(temporary, relative));
  }
  fs.writeFileSync(path.join(temporary, 'layouts/index.html'), '{{ partial "taxonomy_concept_counts.html" . | jsonify }}');
  fs.writeFileSync(path.join(temporary, 'layouts/_default/single.html'), '{{ .Title }}{{ partial "paper_taxonomy.html" . }}');
  fs.writeFileSync(path.join(temporary, 'hugo.yaml'), 'baseURL: https://example.test/\nbuildFuture: true\ndisableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\noutputs:\n  home: [HTML, JSON]\n');
  const node = (id, zh) => ({ id, facet: id.split('.')[0], zh, en: id, aliases: [], ancestorIds: [] });
  const old = { contract: 'paper-taxonomy-registry-snapshot-v1', registryVersion: 'old', registrySha256: 'a'.repeat(64),
    concepts: [node('task.read', '旧任务'), node('method.first', '旧方法'), node('artifact.dataset', '数据集')] };
  const current = { ...old, registryVersion: 'new', registrySha256: 'b'.repeat(64),
    concepts: [node('task.parent', '当前父方向'), { ...node('task.read', '新任务'), ancestorIds: ['task.parent'] }, node('method.first', '新方法'), node('artifact.dataset', '数据集')] };
  const catalog = { contract: 'paper-taxonomy-version-catalog-v1', currentSha256: current.registrySha256, snapshots: [old, current] };
  fs.writeFileSync(path.join(temporary, 'data/taxonomy-registry.json'), JSON.stringify(current));
  fs.writeFileSync(path.join(temporary, 'data/taxonomy-catalog.json'), JSON.stringify(catalog));
  const records = {};
  function article(name, mutate = () => {}, changeFile = false) {
    const key = 'content/posts/' + name + '-2609-12345.md';
    const body = '# Legacy reading\nOriginal body stays unchanged.\n';
    const raw = '---\n' + JSON.stringify({ title: name, date: '2026-09-30', tags: ['old flat label'] }) + '\n---\n' + body;
    fs.writeFileSync(path.join(temporary, key), raw + (changeFile ? 'Edited after classification.\n' : ''));
    const source = { kind: 'arxiv-fresh-fetch', paperId: 'arxiv:2609.12345', generation: 1 };
    for (const field of ['pdfSha256', 'sourceManifestSha256', 'sourceRunIdentitySha256',
      'sourceSnapshotSha256', 'structuredArtifactsSha256', 'textSha256']) source[field] = hash(field);
    source.sourceBinding = { contract: 'fresh-arxiv-rewrite-source-v1', paperId: source.paperId,
      generation: 1, pdfSha256: source.pdfSha256, textSha256: source.textSha256,
      sourceManifestSha256: source.sourceManifestSha256 };
    const stageProof = {};
    for (const field of ['stageFileSha256', 'stagingBindingSha256', 'pageManifestSha256', 'rendererImplementationSha256']) stageProof[field] = hash(field);
    const record = { pageKey: 'page:' + hash(key), pageSha256: hash(raw), bodySha256: hash(body), pageBodySha256: hash(body),
      paperId: source.paperId, registrySha256: old.registrySha256, registryVersion: old.registryVersion,
      concepts: old.concepts.map(n => ({ id: n.id, facet: n.facet, label: n.zh })),
      primaryTaskId: 'task.read', primaryTaskLabel: '旧任务', primaryMethodId: 'method.first', primaryMethodLabel: '旧方法',
      canonicalAnalysisSha256: hash('analysis'), canonicalAnalysisFileSha256: hash('file'),
      canonicalAnalysisRecordSha256: hash('record'), source, stageProof };
    mutate(record);
    record.proofSha256 = hash(JSON.stringify(canonical(record)));
    records[key] = record;
  }
  article('valid');
  article('changed', () => {}, true);
  article('bad-body', r => { r.bodySha256 = hash('different body'); });
  article('missing-primary', r => { delete r.primaryMethodId; });
  article('bad-label', r => { r.concepts[0].label = '新任务'; });
  article('unknown-registry', r => { r.registrySha256 = 'c'.repeat(64); });
  article('bad-source-binding', r => { r.source.sourceBinding.textSha256 = hash('drift'); });
  article('missing-canonical-proof', r => { delete r.canonicalAnalysisRecordSha256; });
  fs.writeFileSync(path.join(temporary, 'data/taxonomy-history.json'), JSON.stringify({ contract: 'historical-direct-taxonomy-supplement-v1', records }));
  execFileSync('hugo', ['--source', temporary, '--noBuildLock', '--panicOnWarning'], { stdio: 'pipe' });
  const index = JSON.parse(fs.readFileSync(path.join(temporary, 'public/index.json')));
  const accepted = index.filter(record => record.taxonomyEvidenceContract);
  assert.deepEqual(accepted.map(record => record.title), ['valid']);
  const full = accepted.find(record => record.title === 'valid');
  assert.equal(full.task, '旧任务');
  assert.equal(full.method, '旧方法');
  assert.equal(full.identityStatus, 'verified');
  assert.deepEqual(full.tags, ['old flat label']);
  assert.equal(full.primaryTaskId, 'task.read');
  assert.equal(full.primaryMethodId, 'method.first');
  assert.ok(index.filter(record => record.title !== 'valid').every(record => !record.primaryTaskId && !record.primaryMethodId));
  const graph = core.createRegistry(current, catalog);
  const server = JSON.parse(fs.readFileSync(path.join(temporary, 'public/index.html'))).map(r => ({ id: r.id, direct: r.direct, subtree: r.sub }));
  assert.deepEqual(server, core.counts(core.groupPapers(index, graph), graph).concepts);
  assert.equal(server.find(record => record.id === 'task.read').direct, 1);
  assert.equal(server.find(record => record.id === 'task.parent').direct, 0);
  assert.equal(server.find(record => record.id === 'task.parent').subtree, 1);
  const validHTML = fs.readFileSync(path.join(temporary, 'public/posts/valid-2609-12345/index.html'), 'utf8');
  assert.match(validHTML, /主任务/);
  assert.match(validHTML, /主方法/);
  assert.match(validHTML, /taxonomy-path-parent[^>]*href="[^\"]*concept=task.parent"[^>]*>当前父方向/);
  assert.match(validHTML, /taxonomy-path-direct[^>]*>新任务/);
  assert.match(validHTML, /taxonomy-path-direct[^>]*>新方法/);
  assert.deepEqual(graph.resolveRecord(full).concepts[0].ancestorIds, []);
  assert.equal(graph.resolveRecord(full).concepts[0].zh, '旧任务');
  for (const name of ['changed', 'bad-label', 'unknown-registry']) {
    assert.doesNotMatch(fs.readFileSync(path.join(temporary, 'public/posts', name + '-2609-12345/index.html'), 'utf8'), /taxonomy-path-parent/);
  }
  // Even an exact, otherwise valid historical supplement cannot authorize a mixed family.
  const validKey = 'content/posts/valid-2609-12345.md';
  const originalValid = fs.readFileSync(path.join(temporary, validKey), 'utf8');
  const mixedFront = JSON.parse(originalValid.split('---\n')[1]);
  mixedFront.paper_digest_tags_scope = null;
  mixedFront.paper_digest_taxonomy_scope = null;
  const mixedRaw = '---\n' + JSON.stringify(mixedFront) + '\n---\n' + originalValid.split('---\n')[2];
  fs.writeFileSync(path.join(temporary, validKey), mixedRaw);
  const mixedRecord = { ...records[validKey], pageSha256: hash(mixedRaw) };
  delete mixedRecord.proofSha256;
  mixedRecord.proofSha256 = hash(JSON.stringify(canonical(mixedRecord)));
  fs.writeFileSync(path.join(temporary, 'data/taxonomy-history.json'), JSON.stringify({
    contract: 'historical-direct-taxonomy-supplement-v1', records: { ...records, [validKey]: mixedRecord }
  }));
  assert.throws(() => execFileSync('hugo', ['--source', temporary, '--noBuildLock', '--panicOnWarning'],
    { stdio: 'pipe' }), /mixes paper_digest_tags_/);

});
