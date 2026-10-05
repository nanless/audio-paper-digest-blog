'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const core = require('../assets/js/taxonomy-core');

// Render the real index and metadata/count partials against a tiny isolated
// content set. No production content, generated files or source registry change.
test('Hugo metadata/counts and browser queries share taxonomy and identity boundaries', t => {
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'blog-taxonomy-contract-'));
  t.after(() => fs.rmSync(temporary, { recursive: true, force: true }));
  const repository = path.resolve(__dirname, '..');
  for (const directory of ['content/posts', 'data', 'layouts/partials', 'layouts/_default']) {
    fs.mkdirSync(path.join(temporary, directory), { recursive: true });
  }
  // Copy real transitive proof dependencies; absent sidecars still fail closed.
  fs.cpSync(path.join(repository, 'layouts/partials'), path.join(temporary, 'layouts/partials'), { recursive: true });
  for (const file of ['layouts/_default/index.json', 'layouts/partials/research_metadata.html', 'layouts/partials/research_source_identity_proof.html', 'layouts/partials/research_current_page_identity_proof.html',
    'layouts/partials/taxonomy_concept_counts.html', 'layouts/partials/taxonomy_valid_records.html',
    'layouts/partials/taxonomy_registry_index.html', 'layouts/partials/taxonomy_snapshot.html', 'layouts/partials/taxonomy_page_proof.html',
    'layouts/partials/citation_source.html', 'layouts/partials/research_historical_source_version.html']) {
    fs.copyFileSync(path.join(repository, file), path.join(temporary, file));
  }
  fs.writeFileSync(path.join(temporary, 'layouts/index.html'), '{{ partial "taxonomy_concept_counts.html" . | jsonify }}');
  fs.writeFileSync(path.join(temporary, 'layouts/_default/single.html'), '{{ .Title }}');
  fs.writeFileSync(path.join(temporary, 'hugo.yaml'), [
    'baseURL: https://example.test/blog/', 'buildFuture: true',
    'disableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]',
    'outputs:', '  home: [HTML, JSON]', '',
  ].join('\n'));
  const concept = (id, zh, ancestors = [], status = 'active') => ({ id, facet: id.split('.')[0],
    zh, en: zh, aliases: [], ancestorIds: ancestors, status });
  const snapshot = { contract: 'paper-taxonomy-registry-snapshot-v1', concepts: [
    concept('task.parent', '父方向'), concept('task.left', '左子方向', ['task.parent']),
    concept('task.right', '右子方向', ['task.parent']), concept('task.other', '其他方向'),
    concept('task.old', '已弃用方向', [], 'deprecated'), concept('method.first', '第一方法'),
    concept('method.second', '第二方法'), concept('method.child', '下级方法', ['method.first']),
    concept('method.deep', '更细方法', ['method.first', 'method.child']),
  ] };
  fs.writeFileSync(path.join(temporary, 'data/taxonomy-registry.json'), JSON.stringify(snapshot));
  const graph = core.createRegistry(snapshot);
  function article(slug, ids, parameters = {}) {
    const frontmatter = { title: slug, date: '2026-09-30', paper_digest_page_type: 'paper',
      paper_digest_taxonomy_contract: core.legacyContract,
      paper_digest_taxonomy_concepts: ids.map(id => ({ id, facet: graph.byId[id].facet, label: graph.byId[id].zh })),
      ...parameters };
    fs.writeFileSync(path.join(temporary, 'content/posts', slug + '.md'),
      '---\n' + JSON.stringify(frontmatter) + '\n---\n# ' + slug + '\nA reading.\n');
  }
  article('left-reading', ['task.left', 'method.first'], { paper_digest_arxiv_id: '2609.12345',
    paper_digest_primary_task: '左子方向', paper_digest_primary_method: '第一方法' });
  article('right-reading', ['task.right', 'method.second'], { paper_digest_arxiv_id: '2609.12345v2',
    paper_digest_primary_task: '右子方向', paper_digest_primary_method: '第二方法' });
  article('conference-first', ['task.other'], { paper_digest_source_kind: 'conference',
    paper_digest_paper_id: 'conference:icml:2026:openreview-forum-id:AbC' });
  article('conference-second', ['task.other'], { paper_digest_source_kind: 'conference',
    paper_digest_paper_id: 'conference:icml:2026:openreview-forum-id:AbC' });
  article('unknown-first', ['task.other'], { title: 'Identical unknown title' });
  article('unknown-second', ['task.other'], { title: 'Identical unknown title' });
  article('bad-conference-first', ['task.other'], { paper_digest_source_kind: 'conference',
    paper_digest_paper_id: 'conference:bad id' });
  article('bad-conference-second', ['task.other'], { paper_digest_source_kind: 'conference',
    paper_digest_paper_id: 'conference:bad id' });
  article('2026-09-30', ['task.parent'], { paper_digest_page_type: 'index', paper_digest_arxiv_id: '2609.12345' });
  article('conference-cvpr-2026', ['task.parent'], { paper_digest_page_type: 'index', paper_digest_arxiv_id: '2609.12345' });
  article('legacy', ['task.parent'], { paper_digest_taxonomy_contract: '', tags: ['父方向'] });
  article('future-contract', ['task.parent'], { paper_digest_taxonomy_contract: 'future-v2' });
  article('inferred-2609-12345', ['task.other']);
  article('first-tag-is-not-primary', ['task.other'], { tags: ['其他方向'] });
  article('wrong-facet', [], { paper_digest_taxonomy_concepts: [{ id: 'task.parent', facet: 'method', label: '父方向' }],
    paper_digest_primary_task: '父方向' });
  article('wrong-label', [], { paper_digest_taxonomy_concepts: [{ id: 'task.parent', facet: 'task', label: 'obsolete alias' }],
    paper_digest_primary_task: 'obsolete alias' });
  article('deprecated', ['task.old'], { paper_digest_primary_task: '已弃用方向' });
  article('broad-and-deep', ['method.first', 'method.child', 'method.deep']);
  execFileSync('hugo', ['--source', temporary, '--noBuildLock', '--panicOnWarning'], { stdio: 'pipe' });
  const records = JSON.parse(fs.readFileSync(path.join(temporary, 'public/index.json'), 'utf8'));
  const server = JSON.parse(fs.readFileSync(path.join(temporary, 'public/index.html'), 'utf8'));
  const groups = core.groupPapers(records, graph);
  const browser = core.counts(groups, graph);
  const find = slug => records.find(record => record.title === slug);
  assert.equal(find('right-reading').arxivId, '2609.12345');
  assert.equal(find('right-reading').identityStatus, 'verified');
  assert.equal(find('inferred-2609-12345').identityStatus, 'inferred');
  assert.equal(find('bad-conference-first').identityStatus, 'unknown');
  assert.equal(find('2026-09-30').pageType, 'daily');
  assert.equal(find('conference-cvpr-2026').pageType, 'conference');
  for (const slug of ['legacy', 'future-contract', 'first-tag-is-not-primary', 'wrong-facet', 'wrong-label', 'deprecated']) {
    assert.equal(find(slug).primaryTaskId, undefined, slug + ' must not inherit a primary concept');
  }
  const activeServer = server.filter(item => core.isActive(graph.byId[item.id]));
  assert.deepEqual(activeServer.map(item => ({ id: item.id, direct: item.direct, subtree: item.sub })), browser.concepts);
  const parent = activeServer.find(item => item.id === 'task.parent');
  assert.equal(parent.direct, 0);
  assert.equal(parent.sub, 1, 'two descendant readings of one verified paper count once');
  const broadMethod = activeServer.find(item => item.id === 'method.first');
  assert.equal(broadMethod.direct, 2);
  assert.equal(broadMethod.sub, 2, 'direct broad label and multiple nested descendants share one paper increment');
  assert.equal(activeServer.find(item => item.id === 'method.child').sub, 1);
  assert.equal(core.query(groups, { facets: { task: ['task.left'], method: ['method.second'] } }, graph).length, 0);
  assert.equal(core.query(groups, { facets: { task: ['task.left'], method: ['method.first'] } }, graph).length, 1);
  assert.equal(core.query(groups, { facets: { task: ['task.parent'] } }, graph)[0].articles.length, 2);
  assert.equal(activeServer.find(item => item.id === 'task.other').sub, 7,
    'canonical conference deduplicates while unknown and inferred pages retain independent identities');
});

test('Hugo preserves issued labels and ancestors while parent navigation counts follow the current tree', t => {
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'blog-taxonomy-versions-'));
  t.after(() => fs.rmSync(temporary, { recursive: true, force: true }));
  const repository = path.resolve(__dirname, '..');
  for (const directory of ['content/posts', 'data', 'layouts/partials', 'layouts/_default']) {
    fs.mkdirSync(path.join(temporary, directory), { recursive: true });
  }
  // Copy real transitive proof dependencies; absent sidecars still fail closed.
  fs.cpSync(path.join(repository, 'layouts/partials'), path.join(temporary, 'layouts/partials'), { recursive: true });
  for (const file of ['layouts/_default/index.json', 'layouts/partials/research_metadata.html', 'layouts/partials/research_source_identity_proof.html', 'layouts/partials/research_current_page_identity_proof.html',
    'layouts/partials/taxonomy_concept_counts.html', 'layouts/partials/taxonomy_valid_records.html',
    'layouts/partials/taxonomy_registry_index.html', 'layouts/partials/taxonomy_snapshot.html', 'layouts/partials/taxonomy_page_proof.html',
    'layouts/partials/citation_source.html']) {
    fs.copyFileSync(path.join(repository, file), path.join(temporary, file));
  }
  fs.writeFileSync(path.join(temporary, 'layouts/index.html'), '{{ partial "taxonomy_concept_counts.html" . | jsonify }}');
  fs.writeFileSync(path.join(temporary, 'layouts/_default/single.html'), '{{ dict "issued" (partial "taxonomy_valid_records.html" .) "navigation" (partial "taxonomy_navigation_records.html" .) | jsonify }}');
  fs.writeFileSync(path.join(temporary, 'hugo.yaml'), 'baseURL: https://example.test/\nbuildFuture: true\ndisableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\noutputs:\n  home: [HTML, JSON]\n');
  const node = (id, zh, ancestorIds = []) => ({ id, facet: 'task', zh, en: zh, aliases: [], ancestorIds });
  const old = { contract: 'paper-taxonomy-registry-snapshot-v1', registryVersion: 'old', registrySha256: 'a'.repeat(64),
    concepts: [node('task.left', '旧父'), node('task.right', '新父'), node('task.child', '旧子名', ['task.left'])] };
  const current = { ...old, registryVersion: 'new', registrySha256: 'b'.repeat(64),
    concepts: [node('task.left', '旧父'), node('task.right', '新父'), node('task.child', '新子名', ['task.right'])] };
  const catalog = { contract: 'paper-taxonomy-version-catalog-v1', currentSha256: current.registrySha256, snapshots: [old, current] };
  fs.writeFileSync(path.join(temporary, 'data/taxonomy-registry.json'), JSON.stringify(current));
  fs.writeFileSync(path.join(temporary, 'data/taxonomy-catalog.json'), JSON.stringify(catalog));
  function article(name, sha, label) {
    const front = { title: name, date: '2026-09-30', paper_digest_page_type: 'paper',
      paper_digest_taxonomy_contract: core.legacyContract, paper_digest_taxonomy_registry_sha256: sha,
      paper_digest_primary_task: label,
      paper_digest_taxonomy_concepts: [{ id: 'task.child', facet: 'task', label }] };
    fs.writeFileSync(path.join(temporary, 'content/posts/' + name + '.md'), '---\n' + JSON.stringify(front) + '\n---\n# Read\n');
  }
  article('old', old.registrySha256, '旧子名');
  article('new', current.registrySha256, '新子名');
  article('wrong-old-label', old.registrySha256, '新子名');
  article('unknown-version', 'c'.repeat(64), '新子名');
  article('missing-version', '', '新子名');
  execFileSync('hugo', ['--source', temporary, '--noBuildLock', '--panicOnWarning'], { stdio: 'pipe' });
  const records = JSON.parse(fs.readFileSync(path.join(temporary, 'public/index.json')));
  const server = JSON.parse(fs.readFileSync(path.join(temporary, 'public/index.html')));
  const graph = core.createRegistry(current, catalog);
  assert.deepEqual(server.map(item => ({ id: item.id, direct: item.direct, subtree: item.sub })),
    core.counts(core.groupPapers(records, graph), graph).concepts);
  assert.equal(server.find(item => item.id === 'task.left').sub, 0);
  assert.equal(server.find(item => item.id === 'task.right').sub, 2);
  assert.equal(server.find(item => item.id === 'task.child').direct, 2);
  const oldRecord = records.find(item => item.title === 'old');
  assert.equal(oldRecord.primaryTaskId, 'task.child');
  assert.equal(oldRecord.task, '旧子名');
  assert.equal(oldRecord.tagCatalogSha256, old.registrySha256);
  assert.deepEqual(graph.resolveRecord(oldRecord).concepts[0].ancestorIds, ['task.left']);
  assert.equal(graph.resolveRecord(oldRecord).concepts[0].zh, '旧子名');
  const paths = JSON.parse(fs.readFileSync(path.join(temporary, 'public/posts/old/index.html')));
  assert.equal(paths.issued[0].zh, '旧子名');
  assert.deepEqual(paths.issued[0].ancestorIds, ['task.left']);
  assert.equal(paths.navigation[0].zh, '新子名');
  assert.equal(paths.navigation[0].issuedLabel, '旧子名');
  assert.deepEqual(paths.navigation[0].ancestorIds, ['task.right']);
  const newPageHTML = fs.readFileSync(path.join(temporary, 'public/posts/new/index.html'), 'utf8');
  // The same page bytes apart from the field names retain their issued proof.
  const newPagePath = path.join(temporary, 'content/posts/new.md');
  const originalNewPage = fs.readFileSync(newPagePath, 'utf8');
  const newFamilyPage = originalNewPage.replaceAll('paper_digest_taxonomy_', 'paper_digest_tags_');
  fs.writeFileSync(newPagePath, newFamilyPage);
  execFileSync('hugo', ['--source', temporary, '--noBuildLock', '--panicOnWarning'], { stdio: 'pipe' });
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(temporary, 'public/index.json'))), records);
  assert.equal(fs.readFileSync(path.join(temporary, 'public/posts/new/index.html'), 'utf8'), newPageHTML);
  // The new protocol changes only its explicit contract in the full search output.
  const currentProtocolPage = newFamilyPage.replace(core.legacyContract, core.contract);
  fs.writeFileSync(newPagePath, currentProtocolPage);
  execFileSync('hugo', ['--source', temporary, '--noBuildLock', '--panicOnWarning'], { stdio: 'pipe' });
  const currentRecords = JSON.parse(fs.readFileSync(path.join(temporary, 'public/index.json')));
  assert.equal(currentRecords.find(record => record.title === 'new').tagContract, core.contract);
  assert.deepEqual(currentRecords.map(record => record.title === 'new'
    ? { ...record, tagContract: core.legacyContract } : record), records);
  assert.equal(fs.readFileSync(path.join(temporary, 'public/posts/new/index.html'), 'utf8'), newPageHTML);
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(temporary, 'public/index.html'))), server);
  for (const extra of [
    { paper_digest_taxonomy_contract: core.contract },
    { paper_digest_taxonomy_scope: null }
  ]) {
    const front = JSON.parse(newFamilyPage.split('---\n')[1]);
    Object.assign(front, extra);
    fs.writeFileSync(newPagePath, '---\n' + JSON.stringify(front) + '\n---\n# Read\n');
    assert.throws(() => execFileSync('hugo', ['--source', temporary, '--noBuildLock', '--panicOnWarning'],
      { stdio: 'pipe' }), /mixes paper_digest_tags_/);
  }
  fs.writeFileSync(newPagePath, newFamilyPage);
  const groups = core.groupPapers(records, graph);
  assert.equal(core.query(groups, { facets: { task: ['task.left'] } }, graph).length, 0);
  assert.equal(core.query(groups, { facets: { task: ['task.right'] } }, graph).length, 2);
  assert.equal(core.query(groups, { facets: { task: ['task.right'] }, scope: 'direct' }, graph).length, 0);
  for (const name of ['wrong-old-label', 'unknown-version', 'missing-version']) {
    assert.equal(records.find(item => item.title === name).primaryTaskId, undefined);
    const invalid = JSON.parse(fs.readFileSync(path.join(temporary, 'public/posts', name, 'index.html')));
    assert.deepEqual(invalid.issued, []);
    assert.deepEqual(invalid.navigation, []);
  }

  // 合成的新显示文件走真实 Hugo 读取器；原词表文件、页面与来源 SHA 保持原样。
  const oldSnapshotPath = path.join(temporary, 'data/taxonomy-registry.json');
  const oldVersionsPath = path.join(temporary, 'data/taxonomy-catalog.json');
  const originalSnapshotBytes = fs.readFileSync(oldSnapshotPath);
  const originalVersionsBytes = fs.readFileSync(oldVersionsPath);
  const display = { ...current, contract: 'paper-tag-catalog-snapshot-v2' };
  const versions = { ...catalog, contract: 'paper-tag-catalog-versions-v2' };
  const displayPath = path.join(temporary, 'data/tag-catalog-snapshot.json');
  const versionsPath = path.join(temporary, 'data/tag-catalog-versions.json');
  function writeDisplayFiles(snapshot = display, savedVersions = versions) {
    fs.writeFileSync(displayPath, JSON.stringify(snapshot));
    fs.writeFileSync(versionsPath, JSON.stringify(savedVersions));
  }
  const buildDisplay = () => execFileSync('hugo', ['--source', temporary, '--noBuildLock', '--panicOnWarning'], { stdio: 'pipe' });
  fs.writeFileSync(path.join(temporary, 'layouts/index.html'),
    '{{ dict "assets" (partial "tag_display_assets.html" .) "savedCurrent" (partial "tag_saved_snapshot.html" "' + current.registrySha256 + '") "counts" (partial "taxonomy_concept_counts.html" .) | jsonify }}');
  fs.writeFileSync(path.join(temporary, 'layouts/_default/single.html'),
    '{{ dict "saved" (partial "taxonomy_snapshot.html" .) "issued" (partial "taxonomy_valid_records.html" .) "navigation" (partial "taxonomy_navigation_records.html" .) | jsonify }}');
  writeDisplayFiles();
  buildDisplay();
  const displayed = JSON.parse(fs.readFileSync(path.join(temporary, 'public/index.html')));
  assert.equal(displayed.assets.current, true);
  assert.deepEqual(displayed.assets.snapshot, display);
  assert.deepEqual(displayed.assets.versions, versions);
  assert.deepEqual(displayed.savedCurrent, current, '同源显示副本不能替代原完整快照');
  assert.deepEqual(displayed.counts, server);
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(temporary, 'public/index.json'))), records);
  const savedPaths = JSON.parse(fs.readFileSync(path.join(temporary, 'public/posts/old/index.html')));
  assert.deepEqual(savedPaths.saved, old);
  assert.equal(savedPaths.saved.contract, 'paper-taxonomy-registry-snapshot-v1');
  assert.equal(savedPaths.saved.registrySha256, oldRecord.tagCatalogSha256);
  assert.deepEqual(savedPaths.issued, paths.issued);
  assert.deepEqual(savedPaths.navigation, paths.navigation);
  for (const [name, change, expected] of [
    ['缺显示文件', () => fs.unlinkSync(displayPath), /新版标签显示文件缺失/],
    ['缺版本目录', () => fs.unlinkSync(versionsPath), /新版标签显示文件缺失/],
    ['未知显示格式', () => writeDisplayFiles({ ...display, contract: 'unknown' }), /新版标签显示文件缺失/],
    ['未知目录格式', () => writeDisplayFiles(display, { ...versions, contract: 'unknown' }), /新版标签显示文件缺失/],
    ['完整显示内容不等', () => writeDisplayFiles({ ...display, extra: '原快照没有的字段' }), /当前显示词表与对应原快照的完整内容不一致/],
    ['同源原对象不等', () => writeDisplayFiles(display, { ...versions, snapshots: [
      { ...old, extra: '不能替换原对象' }, current
    ] }), /新旧标签版本目录为同一来源保存了不同的完整快照/],
    ['同源仅格式不同也不能替代原对象', () => writeDisplayFiles(display, { ...versions, snapshots: [
      { ...old, contract: 'paper-tag-catalog-snapshot-v2' }, current
    ] }), /新旧标签版本目录为同一来源保存了不同的完整快照/]
  ]) {
    writeDisplayFiles();
    change();
    assert.throws(buildDisplay, expected, name);
  }
  writeDisplayFiles();
  buildDisplay();
  assert.deepEqual(fs.readFileSync(oldSnapshotPath), originalSnapshotBytes);
  assert.deepEqual(fs.readFileSync(oldVersionsPath), originalVersionsBytes);

});
