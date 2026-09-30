'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const repository = process.env.BLOG_REPO || path.resolve(__dirname, '..');
const draft = process.env.IDENTITY_CONSUMER_DRAFT || repository;
const canonicalDraft = process.env.TAXONOMY_CONSUMER_DRAFT || repository;
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const canonical = value => Array.isArray(value) ? value.map(canonical) : value && typeof value === 'object'
  ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
const seal = record => {
  record.sourceProofSha256 = hash(JSON.stringify(canonical(record.source)));
  const body = { ...record }; delete body.proofSha256;
  record.proofSha256 = hash(JSON.stringify(canonical(body)));
  return record;
};
function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'identity-history-test-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.mkdirSync(path.join(root, 'content/posts'), { recursive: true });
  fs.mkdirSync(path.join(root, 'data'), { recursive: true });
  fs.mkdirSync(path.join(root, 'layouts/_default'), { recursive: true });
  for (const origin of [repository, canonicalDraft, draft]) {
    fs.cpSync(path.join(origin, 'layouts/partials'), path.join(root, 'layouts/partials'), { recursive: true });
  }
  fs.copyFileSync(path.join(draft, 'layouts/_default/index.json'), path.join(root, 'layouts/_default/index.json'));
  fs.writeFileSync(path.join(root, 'layouts/index.html'), '{{ partial "taxonomy_concept_counts.html" . | jsonify }}');
  fs.writeFileSync(path.join(root, 'layouts/_default/single.html'), '{{ partial "paper_taxonomy.html" . }}');
  for (const file of ['taxonomy-registry.json', 'taxonomy-catalog.json']) fs.copyFileSync(path.join(repository, 'data', file), path.join(root, 'data', file));
  fs.writeFileSync(path.join(root, 'hugo.yaml'), 'baseURL: https://example.test/\nbuildFuture: true\ndisableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\noutputs:\n  home: [HTML, JSON]\nmarkup:\n  goldmark:\n    renderer:\n      unsafe: true\n');
  return root;
}
function build(root) {
  execFileSync('hugo', ['--source', root, '--noBuildLock', '--panicOnWarning'], { stdio: 'pipe' });
  return JSON.parse(fs.readFileSync(path.join(root, 'public/index.json')));
}
test('identity-only proof binds exact page/source and never creates controlled classification', t => {
  const root = fixture(t), records = {};
  function article(name, mutate = () => {}, alterFile = false, params = {}) {
    const key = 'content/posts/' + name + '.md';
    const body = '# Reader title\nA cited work https://arxiv.org/abs/9999.12345 does not identify this paper.\n';
    const raw = '---\n' + JSON.stringify({ title: name, date: '2026-09-30', tags: ['旧标签'], ...params }) + '\n---\n' + body;
    fs.writeFileSync(path.join(root, key), raw + (alterFile ? 'changed\n' : ''));
    const source = { kind: 'arxiv-fresh-fetch', paperId: 'arxiv:2609.12345', sourceId: '2609.12345v2', generation: 1,
      sourceUrl: 'https://arxiv.org/abs/2609.12345v2', pdfUrl: 'https://arxiv.org/pdf/2609.12345v2.pdf', originalTitle: 'Official title' };
    for (const field of ['textSha256', 'pdfSha256', 'sourceManifestSha256', 'sourceRunIdentitySha256', 'structuredArtifactsSha256']) source[field] = hash(field);
    source.sourceBinding = { contract: 'fresh-arxiv-rewrite-source-v1', paperId: source.paperId, arxivId: '2609.12345', generation: 1,
      textSha256: source.textSha256, pdfSha256: source.pdfSha256, sourceManifestSha256: source.sourceManifestSha256 };
    const record = { contract: 'historical-source-identity-supplement-v1', pageKey: 'page:' + hash(key), pageSha256: hash(raw),
      bodySha256: hash(body), paperId: source.paperId, runId: '79f24bdb-ded4-49b4-a964-8fb51d4f5a04',
      planSha256: hash('plan'), planFileSha256: hash('plan-file'), source, identityStatus: 'verified',
      evidenceType: 'sealed-source-identity-only', taxonomyStatus: 'not-classified-by-identity-proof' };
    mutate(record); records[key] = seal(record);
  }
  article('valid-arxiv');
  article('valid-unspecified-pdf-version', r => {
    r.source.pdfUrl = 'https://arxiv.org/pdf/2609.12345.pdf';
    r.source.sourceVersionWarning = '元数据来自2609.12345v2；封存PDF请求https://arxiv.org/pdf/2609.12345.pdf未指定版本，未认证PDF为v2。';
    r.source.pdfVersionBinding = { contract: 'sealed-arxiv-pdf-version-binding-v1', paperId: r.paperId,
      sourceId: r.source.sourceId, textUrl: 'https://arxiv.org/html/2609.12345v2', pdfRequestedUrl: r.source.pdfUrl,
      pdfSha256: r.source.pdfSha256, sourceManifestSha256: r.source.sourceManifestSha256, textVersion: 2,
      pdfVersion: 'unspecified', pdfVersionAuthenticated: false, status: 'versioned-text-unversioned-pdf-url' };
  });
  for (const [name, mutate] of [
    ['pdf-version-warning-only', r => { delete r.source.pdfVersionBinding; }],
    ['fake-authenticated-pdf-version', r => { r.source.pdfVersionBinding.pdfVersionAuthenticated = true; }],
    ['wrong-pdf-text-version', r => { r.source.pdfVersionBinding.textVersion = 1; }],
    ['wrong-pdf-sha', r => { r.source.pdfVersionBinding.pdfSha256 = hash('wrong'); }],
    ['wrong-pdf-source-manifest', r => { r.source.pdfVersionBinding.sourceManifestSha256 = hash('wrong'); }],
    ['wrong-pdf-text-url', r => { r.source.pdfVersionBinding.textUrl = 'https://arxiv.org/html/2609.99999v2'; }],
    ['wrong-pdf-base-identity', r => { r.source.pdfUrl = 'https://arxiv.org/pdf/2609.99999.pdf'; r.source.pdfVersionBinding.pdfRequestedUrl = r.source.pdfUrl; r.source.sourceVersionWarning += r.source.pdfUrl; }],
  ]) {
    article(name, r => { r.source = structuredClone(records['content/posts/valid-unspecified-pdf-version.md'].source); mutate(r); });
  }
  article('changed', () => {}, true);
  article('bad-body', r => { r.bodySha256 = hash('different'); });
  article('bad-source-binding', r => { r.source.sourceBinding.textSha256 = hash('different'); });
  article('wrong-official-url', r => { r.source.sourceUrl = 'https://arxiv.org/abs/9999.12345'; });
  article('fake-taxonomy', r => { r.primaryTaskId = 'task.speech-recognition'; });
  article('conflicting-current-identity', () => {}, false, { paper_digest_arxiv_id: '2609.99999' });
  article('wrong-proof-hash'); records['content/posts/wrong-proof-hash.md'].proofSha256 = hash('wrong');
  article('valid-conference', r => {
    r.paperId = 'conference:icassp:2026:icassp-arnumber:11460401';
    const binding = { sourceSet: 'workspace-icassp-2026', provenance: 'retained-local-crawler', metadataRecordIndex: 0, pdfBytes: 100,
      acquisition: { sourceKind: 'retained-local-no-network-receipt', receipt: null } };
    for (const field of ['metadataSha256', 'metadataIdentityBindingSha256', 'pdfSha256', 'pdfIdentityBindingSha256', 'sourceBindingSha256']) binding[field] = hash(field);
    r.source = { kind: 'conference-local-pdf', paperId: r.paperId, sourceId: r.paperId, writerInputsSha256: hash('writer-inputs'),
      sourceBindings: [binding], originalTitle: 'Official conference title', sourceUrl: 'https://ieeexplore.ieee.org/document/11460401', pdfUrl: '', provenanceDisclosure: '历史封存来源，未记录下载时网络响应。' };
  });
  const conference = structuredClone(records['content/posts/valid-conference.md']);
  article('valid-official-version', r => {
    r.paperId = 'conference:icml:2026:openreview-forum-id:jfpkqjhex4';
    r.source = structuredClone(conference.source); r.source.paperId = r.paperId; r.source.sourceId = r.paperId;
    r.source.sourceUrl = 'https://openreview.net/forum?id=jfpkqjhex4';
    r.source.sourceTitle = 'Position: Towards Responsible Evaluation for Text-to-Speech';
    r.source.sourceDoi = null; r.source.versionRelation = 'same-paper-versioned-official-preprint';
    r.source.sourceVersionWarning = '官方 arXiv 2510.06927v3 预印本，不是 OpenReview 响应，未核 camera-ready。';
    Object.assign(r.source.sourceBindings[0].acquisition, { sourceKind: 'official-arxiv-versioned-pdf', versionRelation: r.source.versionRelation, sourceTitle: r.source.sourceTitle, sourceDoi: null });
  });
  article('wrong-version-profile', r => {
    const profile = records['content/posts/valid-official-version.md'];
    r.paperId = profile.paperId; r.source = structuredClone(profile.source); r.source.sourceTitle = 'Unreviewed source title';
    r.source.sourceBindings[0].acquisition.sourceTitle = r.source.sourceTitle;
  });
  for (const [name, mutate] of [
    ['conference-missing-pdf-binding', r => { delete r.source.sourceBindings[0].pdfIdentityBindingSha256; }],
    ['conference-no-provenance-disclosure', r => { delete r.source.provenanceDisclosure; }],
    ['conference-non-whitelisted-version', r => { r.source.versionRelation = 'alternate-preprint'; }],
  ]) {
    article(name);
    const record = records['content/posts/' + name + '.md'];
    record.paperId = conference.paperId; record.source = structuredClone(conference.source); mutate(record); seal(record);
  }
  fs.writeFileSync(path.join(root, 'data/identity-history.json'), JSON.stringify({ contract: 'historical-source-identity-supplement-v1', records }));
  const index = build(root);
  assert.deepEqual(index.filter(r => r.identityEvidenceContract).map(r => r.title).sort(), ['valid-arxiv', 'valid-conference', 'valid-official-version', 'valid-unspecified-pdf-version']);
  for (const record of index) {
    assert.equal(record.taxonomyContract, ''); assert.deepEqual(record.taxonomyConcepts, []);
    assert.ok(!record.primaryTaskId && !record.primaryMethodId); assert.deepEqual(record.tags, ['旧标签']);
  }
  const conferenceResult = index.find(r => r.title === 'valid-conference');
  assert.equal(conferenceResult.sourceKind, 'conference'); assert.equal(conferenceResult.arxivId, '');
  assert.equal(conferenceResult.paperId, 'conference:icassp:2026:icassp-arnumber:11460401');
  assert.equal(conferenceResult.identityStatus, 'verified');
  assert.equal(conferenceResult.citation.sourceUrl, 'https://ieeexplore.ieee.org/document/11460401');
  assert.equal(conferenceResult.citation.pdfUrl, '');
  assert.equal(conferenceResult.citation.title, 'Official conference title');
  assert.deepEqual(conferenceResult.citation.authors, []);
  assert.equal(conferenceResult.citation.date, ''); assert.equal(conferenceResult.citation.doi, '');
  assert.equal(conferenceResult.citation.complete, false);
  assert.equal(conferenceResult.citation.provenanceDisclosure, '历史封存来源，未记录下载时网络响应。');
  assert.match(index.find(r => r.title === 'valid-official-version').citation.sourceVersionWarning, /2510\.06927v3/);
  assert.equal(index.find(r => r.title === 'valid-arxiv').citation.sourceUrl, 'https://arxiv.org/abs/2609.12345v2');
  assert.equal(index.find(r => r.title === 'valid-arxiv').citation.arxivId, '2609.12345v2');
  const unspecified = index.find(r => r.title === 'valid-unspecified-pdf-version');
  assert.equal(unspecified.citation.pdfUrl, 'https://arxiv.org/pdf/2609.12345.pdf');
  assert.equal(unspecified.citation.pdfVersionBinding.pdfVersionAuthenticated, false);
  assert.equal(unspecified.citation.pdfVersionBinding.textVersion, 2);
  assert.equal(unspecified.citation.sourceVersionWarning, records['content/posts/valid-unspecified-pdf-version.md'].source.sourceVersionWarning);
  const explicit = index.find(r => r.title === 'conflicting-current-identity');
  assert.equal(explicit.arxivId, '2609.99999'); assert.ok(!explicit.identityEvidenceContract);
  const counts = JSON.parse(fs.readFileSync(path.join(root, 'public/index.html')));
  assert.ok(counts.every(r => r.direct === 0 && r.sub === 0));
  assert.match(fs.readFileSync(path.join(root, 'public/posts/valid-conference/index.html'), 'utf8'), /研究方向尚未完成分类/);
  assert.match(fs.readFileSync(path.join(root, 'public/posts/valid-official-version/index.html'), 'utf8'), /2510\.06927v3.*未核 camera-ready/);
});

test('actual independently replayed arXiv and conference identity batch accepts every frozen page', { skip: !process.env.IDENTITY_HISTORY_SAMPLE }, t => {
  const root = fixture(t);
  const history = JSON.parse(fs.readFileSync(process.env.IDENTITY_HISTORY_SAMPLE));
  for (const [key] of Object.entries(history.records)) fs.copyFileSync(path.join(repository, key), path.join(root, key));
  fs.writeFileSync(path.join(root, 'data/identity-history.json'), JSON.stringify(history));
  const index = build(root);
  assert.equal(index.length, Object.keys(history.records).length);
  assert.ok(index.every(r => r.identityEvidenceContract === history.contract && r.identityStatus === 'verified'));
  assert.ok(index.every(r => !r.primaryTaskId && !r.primaryMethodId && !r.taxonomyContract && !r.taxonomyConcepts.length));
  assert.ok(index.some(r => r.sourceKind === 'arxiv') && index.some(r => r.sourceKind === 'conference'));
  for (const record of index.filter(r => r.sourceKind === 'conference')) {
    assert.equal(record.arxivId, ''); assert.match(record.citation.sourceUrl, /^https:\/\/(ieeexplore\.ieee\.org\/document\/|openreview\.net\/forum\?id=)/);
    assert.equal(record.citation.pdfUrl, ''); assert.equal(record.citation.arxivId, '');
    assert.equal(record.citation.complete, false);
  }
  for (const proof of Object.values(history.records).filter(r => r.source.pdfVersionBinding)) {
    const record = index.find(r => r.identityProofSha256 === proof.proofSha256);
    assert.deepEqual(record.citation.pdfVersionBinding, proof.source.pdfVersionBinding);
    assert.equal(record.citation.pdfUrl, proof.source.pdfUrl);
    assert.equal(record.citation.sourceVersionWarning, proof.source.sourceVersionWarning);
    assert.equal(record.citation.pdfVersionBinding.pdfVersionAuthenticated, false);
  }
  const core = require(path.join(repository, 'assets/js/taxonomy-core'));
  const graph = core.createRegistry(JSON.parse(fs.readFileSync(path.join(root, 'data/taxonomy-registry.json'))), JSON.parse(fs.readFileSync(path.join(root, 'data/taxonomy-catalog.json'))));
  assert.equal(core.groupPapers(index, graph).length, new Set(Object.values(history.records).map(r => r.paperId)).size);
  const counts = JSON.parse(fs.readFileSync(path.join(root, 'public/index.html')));
  assert.ok(counts.every(r => r.direct === 0 && r.sub === 0));
});

test('complete canonical supplement agrees with browser unique paper and subtree counts', { skip: !process.env.CANONICAL_HISTORY_SAMPLE }, t => {
  const root = fixture(t);
  const history = JSON.parse(fs.readFileSync(process.env.CANONICAL_HISTORY_SAMPLE));
  for (const [key] of Object.entries(history.records)) fs.copyFileSync(path.join(repository, key), path.join(root, key));
  fs.writeFileSync(path.join(root, 'data/taxonomy-history.json'), JSON.stringify(history));
  const index = build(root);
  assert.equal(index.length, Object.keys(history.records).length);
  assert.ok(index.every(r => r.taxonomyEvidenceContract === history.contract && r.identityStatus === 'verified'));
  assert.ok(index.every(r => r.primaryTaskId && r.primaryMethodId));
  const core = require(path.join(repository, 'assets/js/taxonomy-core'));
  const graph = core.createRegistry(JSON.parse(fs.readFileSync(path.join(root, 'data/taxonomy-registry.json'))), JSON.parse(fs.readFileSync(path.join(root, 'data/taxonomy-catalog.json'))));
  const groups = core.groupPapers(index, graph);
  const expectedPapers = new Set(Object.values(history.records).map(r => r.paperId)).size;
  assert.equal(groups.length, expectedPapers);
  const counts = JSON.parse(fs.readFileSync(path.join(root, 'public/index.html'))).map(r => ({ id: r.id, direct: r.direct, subtree: r.sub }));
  assert.deepEqual(counts, core.counts(groups, graph).concepts);
});

test('real source-only classifications use source quotes and accepted independent review; failed proof stays legacy', { skip: !process.env.SOURCE_ONLY_HISTORY_SAMPLE }, t => {
  const root = fixture(t);
  const history = JSON.parse(fs.readFileSync(process.env.SOURCE_ONLY_HISTORY_SAMPLE));
  history.records = Object.fromEntries(Object.entries(history.records).filter(([, record]) => record.evidenceType === 'source-only-taxonomy'));
  assert.ok(Object.keys(history.records).length, 'sample includes independently reviewed source-only classifications');
  const records = structuredClone(history.records);
  const firstRecord = Object.values(records)[0];
  firstRecord.source.provenanceDisclosure = '封存原文来源披露在已完成分类页仍可见。';
  const firstBody = { ...firstRecord }; delete firstBody.proofSha256;
  firstRecord.proofSha256 = hash(JSON.stringify(canonical(firstBody)));
  for (const [key] of Object.entries(records)) fs.copyFileSync(path.join(repository, key), path.join(root, key));
  const [originalKey, original] = Object.entries(records)[0];
  const cases = [
    ['review-rejected', r => { r.reviewProof.response.accepted = false; r.reviewProofSha256 = hash(JSON.stringify(canonical(r.reviewProof))); }],
    ['source-binding-drift', r => { r.source.sourceBinding.pdfSha256 = hash('drift'); }],
    ['quote-drift', r => { r.evidence[0].quote += ' invented'; r.evidence[0].quoteSha256 = hash(r.evidence[0].quote); }],
    ['missing-numbered-selection', r => { delete r.quoteSelections; }],
    ['selection-source-offset-drift', r => { r.quoteSelections[0].quoteStart += 1; }],
    ['unsupported-classification-contract', r => { r.classificationContract = 'unsupported'; }],
  ];
  for (const [name, mutate] of cases) {
    const key = 'content/posts/' + name + '.md';
    fs.copyFileSync(path.join(repository, originalKey), path.join(root, key));
    const record = structuredClone(original); mutate(record);
    const body = { ...record }; delete body.proofSha256;
    record.proofSha256 = hash(JSON.stringify(canonical(body)));
    records[key] = record;
  }
  fs.writeFileSync(path.join(root, 'data/taxonomy-history.json'), JSON.stringify({ ...history, records }));
  const index = build(root);
  const accepted = index.filter(r => r.taxonomyEvidenceContract);
  assert.equal(accepted.length, Object.keys(history.records).length);
  assert.ok(accepted.every(r => r.taxonomyEvidenceType === 'source-only-taxonomy' && r.primaryTaskId && r.primaryMethodId && r.identityStatus === 'verified'));
  assert.ok(index.filter(r => !r.taxonomyEvidenceContract).every(r => !r.primaryTaskId && !r.primaryMethodId && !r.taxonomyConcepts.length));
  const core = require(path.join(repository, 'assets/js/taxonomy-core'));
  const graph = core.createRegistry(JSON.parse(fs.readFileSync(path.join(root, 'data/taxonomy-registry.json'))), JSON.parse(fs.readFileSync(path.join(root, 'data/taxonomy-catalog.json'))));
  const counts = JSON.parse(fs.readFileSync(path.join(root, 'public/index.html'))).map(r => ({ id: r.id, direct: r.direct, subtree: r.sub }));
  assert.deepEqual(counts, core.counts(core.groupPapers(index, graph), graph).concepts);
  const outputs = fs.readdirSync(path.join(root, 'public/posts'));
  assert.ok(outputs.some(name => /此次只补充研究分类/.test(fs.readFileSync(path.join(root, 'public/posts', name, 'index.html'), 'utf8'))));
  assert.ok(outputs.some(name => /封存原文来源披露在已完成分类页仍可见/.test(fs.readFileSync(path.join(root, 'public/posts', name, 'index.html'), 'utf8'))));
});
