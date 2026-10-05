'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const core = require('../assets/js/taxonomy-core');
const current = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/taxonomy-registry.json')));
const catalog = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/taxonomy-catalog.json')));
// Bind the issued 228-concept fixture by identity; catalog order is not a version.
const old = catalog.snapshots.find(snapshot => snapshot.registrySha256 === '15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778');
const graph = core.createRegistry(current, catalog);
function paper(name, snapshot, ids, extra = {}) {
  return { pageType: 'paper', permalink: '/posts/' + name + '/', identityStatus: 'unknown',
    taxonomyContract: core.contract, taxonomyRegistrySha256: snapshot.registrySha256,
    taxonomyConcepts: ids.map(id => {
      const node = snapshot.concepts.find(value => value.id === id);
      return { id, facet: node.facet, label: node.zh };
    }), ...extra };
}
test('catalog binds all source definitions and preserves 228/262/330/338/371/374 while exposing formal386 current concepts', () => {
  assert.equal(Object.keys(graph.byId).length, 386);
  const previous = catalog.snapshots.find(snapshot => snapshot.registrySha256 === 'a3b75a149852076933ec2895de77c09c73667c8334bff046dde3b20b69ded03d');
  assert.equal(previous.concepts.length, 262);
  const issued330 = catalog.snapshots.find(snapshot => snapshot.registrySha256 === '68bbb2a0fb3c142ef21369320aca58f17b0ff7072e85923ec1c33dc2be98428c');
  assert.equal(issued330.concepts.length, 330);
  const issued338 = catalog.snapshots.find(snapshot => snapshot.registrySha256 === '8c89a69ffe7daba6cc9da4ea5789101d6118e326b9978ec3edae1a85e965c8e3');
  assert.equal(issued338.concepts.length,338);
  assert.deepEqual(current.concepts.slice(0,338),issued338.concepts);
  const issued374 = catalog.snapshots.find(snapshot => snapshot.registrySha256 === 'a1d982ddf009e5bf760195d269c459aa7aa39c38686710efa11ba7d9de8d99bd');
  assert.equal(issued374.concepts.length,374);
  assert.deepEqual(current.concepts.slice(0,374),issued374.concepts);
  assert.equal(current.registrySha256,'910a94021b085a190abcd5fd9603af3240160f9417293d5a90158bc4ef900d30');
  const issued371 = catalog.snapshots.find(snapshot => snapshot.registrySha256 === 'cbb157b602ea9e7a41c84fc28cdda99481aef5e8bfefd8120b1c69900a8ea638');
  assert.equal(issued371.concepts.length,371);
  assert.deepEqual(current.concepts.slice(0,371),issued371.concepts);
  assert.deepEqual(current.concepts.slice(0,330), issued330.concepts);
  assert.deepEqual(current.concepts.slice(0, 262), previous.concepts);
  assert.equal(old.concepts.length, 228);
  assert.equal(graph.byId['task.music-understanding'].zh, '音乐分析');
  const resolved = graph.resolveRecord(paper('old-music', old, ['task.music-understanding']));
  assert.equal(resolved.status, 'verified');
  assert.equal(resolved.concepts[0].zh, '音乐理解');
  assert.ok(current.concepts.every(node => node.definition && node.scopeNote));
  assert.ok(old.concepts.every(node => node.definition && node.scopeNote));
});
test('issued parent evidence stays immutable while all navigation follows the current tree', () => {
  const records = [paper('old-spoof', old, ['task.speech-spoofing']), paper('new-spoof', current, ['task.speech-spoofing']),
    paper('old-listen', old, ['method.psychoacoustic-experiment']), paper('new-listen', current, ['method.psychoacoustic-experiment'])];
  const groups = core.groupPapers(records, graph);
  assert.deepEqual(graph.resolveRecord(records[0]).concepts[0].ancestorIds, []);
  assert.deepEqual(graph.navigationConcepts(records[0])[0].ancestorIds, ['task.audio-forgery']);
  assert.deepEqual(groups[0].classifications[0].ancestorIdsByConcept['task.speech-spoofing'], []);
  assert.deepEqual(core.query(groups, { facets: { task: ['task.audio-forgery'] } }, graph).map(group => group.articles[0].permalink), ['/posts/old-spoof/', '/posts/new-spoof/']);
  assert.deepEqual(core.query(groups, { facets: { method: ['method.human-evaluation'] } }, graph), []);
  assert.equal(core.query(groups, { facets: { task: ['task.audio-forgery'] }, scope: 'direct' }, graph).length, 0);
  const counts = core.counts(groups, graph).concepts;
  assert.equal(counts.find(node => node.id === 'task.audio-forgery').subtree, 2);
  assert.equal(counts.find(node => node.id === 'method.human-evaluation').subtree, 0);
  assert.equal(counts.find(node => node.id === 'task.speech-spoofing').direct, 2);
  assert.equal(graph.resolveRecord(records[2]).concepts[0].ancestorIds.includes('method.human-evaluation'), true);
  assert.deepEqual(graph.navigationConcepts(records[2])[0].ancestorIds, []);
});
test('navigation preserves issued labels and primary identity without joining distinct readings', () => {
  const record = paper('old-music', old, ['task.music-understanding']);
  const before = JSON.stringify(record);
  const projected = graph.navigationConcepts(record)[0];
  assert.equal(projected.zh, '音乐分析');
  assert.equal(projected.issuedLabel, '音乐理解');
  const groups = core.groupPapers([
    paper('one', old, ['task.speech-spoofing'], { identityStatus: 'verified', paperId: 'conference:shared', primaryTaskId: 'task.speech-spoofing' }),
    paper('two', old, ['method.psychoacoustic-experiment'], { identityStatus: 'verified', paperId: 'conference:shared', primaryMethodId: 'method.psychoacoustic-experiment' })
  ], graph);
  assert.equal(core.query(groups, { role: 'primary', facets: { task: ['task.audio-forgery'] } }, graph).length, 1);
  assert.equal(core.query(groups, { facets: { task: ['task.audio-forgery'], method: ['method.psychoacoustic-experiment'] } }, graph).length, 0);
  assert.equal(JSON.stringify(record), before);
  const currentFields = { pageType: record.pageType, permalink: record.permalink,
    identityStatus: record.identityStatus, tagContract: record.taxonomyContract,
    tagCatalogSha256: record.taxonomyRegistrySha256, tagConcepts: record.taxonomyConcepts };
  assert.deepEqual(graph.resolveRecord(currentFields), graph.resolveRecord(record));
  assert.deepEqual(graph.navigationConcepts(currentFields), graph.navigationConcepts(record));
});
test('unknown or missing SHA and mismatched original labels do not acquire reviewed concepts', () => {
  const records = [paper('missing', old, ['task.music-understanding'], { taxonomyRegistrySha256: '' }),
    paper('unknown', old, ['task.music-understanding'], { taxonomyRegistrySha256: 'c'.repeat(64) }),
    paper('rewritten', old, ['task.music-understanding'], { taxonomyConcepts: [{ id: 'task.music-understanding', facet: 'task', label: '音乐分析' }] })];
  assert.equal(core.query(core.groupPapers(records, graph), { facets: { task: ['task.music-understanding'] } }, graph).length, 0);
  assert.equal(graph.resolveRecord(records[0]).status, 'unbound-version');
  assert.equal(graph.resolveRecord(records[1]).status, 'unknown-version');
  for (const record of records) assert.deepEqual(graph.navigationConcepts(record), []);
  assert.deepEqual(graph.navigationConcepts(paper('held', old, ['task.music-understanding'], { taxonomyPublicationStatus: 'withheld' })), []);
});
test('same current SHA cannot substitute a different catalog tree, and maintenance notes stay out of prose', () => {
  const drift = JSON.parse(JSON.stringify(catalog));
  drift.snapshots.find(snapshot => snapshot.registrySha256 === current.registrySha256).concepts[0].zh = '篡改名字';
  assert.throws(() => core.createRegistry(current, drift), /当前版本.*不一致/);
  assert.equal(core.readerScopeNote('需有专门评测。父节点缺失故成根。'), '需有专门评测。');
  assert.equal(core.readerScopeNote('保留范围；按报告指定成根。'), '');
  assert.equal(core.readerScopeNote('需要听觉证据；不是普通文本分类。'), '需要听觉证据；不是普通文本分类。');
});


test('新显示格式使用当时保存的词表，新旧完整对象只有格式名称可以不同', () => {
  const display = { ...current, contract: 'paper-tag-catalog-snapshot-v2' };
  const versions = { ...catalog, contract: 'paper-tag-catalog-versions-v2' };
  const original = JSON.stringify(catalog);
  const currentGraph = core.createRegistry(display, versions);
  assert.notStrictEqual(currentGraph.versions[current.registrySha256], currentGraph);
  assert.deepEqual(currentGraph.resolveRecord({ pageType: 'paper', tagContract: core.contract,
    tagCatalogSha256: old.registrySha256, tagConcepts: [{ id: 'task.music-understanding', facet: 'task', label: '音乐理解' }] }),
    graph.resolveRecord(paper('old-music', old, ['task.music-understanding'])));
  assert.equal(currentGraph.navigationConcepts(paper('old-music', old, ['task.music-understanding']))[0].zh, '音乐分析');
  assert.equal(JSON.stringify(catalog), original);
  for (const change of [value => value.extra = '另一份内容', value => value.concepts[0].extra = '原图未使用的字段']) {
    const drift = structuredClone(display);
    change(drift);
    assert.throws(() => core.createRegistry(drift, versions), /当前版本.*不一致/);
  }
  const unknown = structuredClone(versions);
  unknown.snapshots[0].contract = 'unsupported-snapshot';
  assert.throws(() => core.createRegistry(display, unknown), /快照格式不受支持/);
  const savedNew = { ...current, contract: 'paper-tag-catalog-snapshot-v2' };
  const knownNew = { ...versions, snapshots: catalog.snapshots.map(value => value.registrySha256 === current.registrySha256 ? savedNew : value) };
  assert.deepEqual(core.createRegistry(display, knownNew).byId, currentGraph.byId);
});

test('显示资源只在两份新版都404时读取旧资源，坏新版不能回退', async () => {
  const display = { ...current, contract: 'paper-tag-catalog-snapshot-v2' };
  const versions = { ...catalog, contract: 'paper-tag-catalog-versions-v2' };
  function fetchAssets(values, calls) {
    return async (url, options) => {
      const filename = new URL(url).pathname.split('/').at(-1);
      calls.push({ url: String(url), options });
      const value = values[filename];
      if (value instanceof Error) throw value;
      if (typeof value === 'number' || value === undefined) return { status: value || 404, ok: false };
      return { status: 200, ok: true, json: async () => value };
    };
  }
  const calls = [];
  const loaded = await core.loadDisplayAssets('https://example.test/blog/index.json', fetchAssets({
    'tag-catalog-snapshot.json': display, 'tag-catalog-versions.json': versions }, calls));
  assert.strictEqual(loaded.snapshot, display);
  assert.strictEqual(loaded.versions, versions);
  assert.ok(calls.every(value => value.url.startsWith('https://example.test/blog/data/tag-catalog-') && value.options.redirect === 'error'));
  const oldCalls = [];
  const oldLoaded = await core.loadDisplayAssets('https://example.test/blog/index.json', fetchAssets({
    'taxonomy-registry.json': current, 'taxonomy-catalog.json': catalog }, oldCalls));
  assert.strictEqual(oldLoaded.snapshot, current);
  assert.strictEqual(oldLoaded.versions, catalog);
  assert.equal(oldCalls.length, 4);
  const absent = await core.loadDisplayAssets('https://example.test/blog/index.json', fetchAssets({ 'taxonomy-registry.json': new Error('old offline') }, []));
  assert.deepEqual(absent, { snapshot: null, versions: null });
  for (const value of [404, 500, null, { ...versions, contract: 'unknown' }, { ...versions, currentSha256: 'f'.repeat(64) }, new Error('new offline')]) {
    const failedCalls = [];
    await assert.rejects(core.loadDisplayAssets('https://example.test/blog/index.json', fetchAssets({
      'tag-catalog-snapshot.json': display, 'tag-catalog-versions.json': value,
      'taxonomy-registry.json': current, 'taxonomy-catalog.json': catalog }, failedCalls)));
    assert.equal(failedCalls.length, 2);
  }
});
