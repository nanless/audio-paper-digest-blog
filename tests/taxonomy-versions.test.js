'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const core = require('../assets/js/taxonomy-core');
const current = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/taxonomy-registry.json')));
const catalog = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/taxonomy-catalog.json')));
const old = catalog.snapshots.find(snapshot => snapshot.registrySha256 !== current.registrySha256);
const graph = core.createRegistry(current, catalog);
function paper(name, snapshot, ids, extra = {}) {
  return { pageType: 'paper', permalink: '/posts/' + name + '/', identityStatus: 'unknown',
    taxonomyContract: core.contract, taxonomyRegistrySha256: snapshot.registrySha256,
    taxonomyConcepts: ids.map(id => {
      const node = snapshot.concepts.find(value => value.id === id);
      return { id, facet: node.facet, label: node.zh };
    }), ...extra };
}
test('catalog binds all source definitions and preserves 228/262/330/338/371/374 while exposing formal378 current concepts', () => {
  assert.equal(Object.keys(graph.byId).length, 378);
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
  assert.equal(current.registrySha256,'10653fa103f93ff1a894c42a22c2eb91d83b7bb14e57bd92d1a337ce00a5eb72');
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
test('old parent chains are never silently reassigned by current registry updates', () => {
  const records = [paper('old-spoof', old, ['task.speech-spoofing']), paper('new-spoof', current, ['task.speech-spoofing']),
    paper('old-listen', old, ['method.psychoacoustic-experiment']), paper('new-listen', current, ['method.psychoacoustic-experiment'])];
  const groups = core.groupPapers(records, graph);
  assert.deepEqual(core.query(groups, { facets: { task: ['task.audio-forgery'] } }, graph).map(group => group.articles[0].permalink), ['/posts/new-spoof/']);
  assert.deepEqual(core.query(groups, { facets: { method: ['method.human-evaluation'] } }, graph).map(group => group.articles[0].permalink), ['/posts/old-listen/']);
  const counts = core.counts(groups, graph).concepts;
  assert.equal(counts.find(node => node.id === 'task.audio-forgery').subtree, 1);
  assert.equal(counts.find(node => node.id === 'method.human-evaluation').subtree, 1);
  assert.equal(counts.find(node => node.id === 'task.speech-spoofing').direct, 2);
});
test('unknown or missing SHA and mismatched original labels do not acquire reviewed concepts', () => {
  const records = [paper('missing', old, ['task.music-understanding'], { taxonomyRegistrySha256: '' }),
    paper('unknown', old, ['task.music-understanding'], { taxonomyRegistrySha256: 'c'.repeat(64) }),
    paper('rewritten', old, ['task.music-understanding'], { taxonomyConcepts: [{ id: 'task.music-understanding', facet: 'task', label: '音乐分析' }] })];
  assert.equal(core.query(core.groupPapers(records, graph), { facets: { task: ['task.music-understanding'] } }, graph).length, 0);
  assert.equal(graph.resolveRecord(records[0]).status, 'unbound-version');
  assert.equal(graph.resolveRecord(records[1]).status, 'unknown-version');
});
test('same current SHA cannot substitute a different catalog tree, and maintenance notes stay out of prose', () => {
  const drift = JSON.parse(JSON.stringify(catalog));
  drift.snapshots.find(snapshot => snapshot.registrySha256 === current.registrySha256).concepts[0].zh = '篡改名字';
  assert.throws(() => core.createRegistry(current, drift), /当前版本.*不一致/);
  assert.equal(core.readerScopeNote('需有专门评测。父节点缺失故成根。'), '需有专门评测。');
  assert.equal(core.readerScopeNote('保留范围；按报告指定成根。'), '');
  assert.equal(core.readerScopeNote('需要听觉证据；不是普通文本分类。'), '需要听觉证据；不是普通文本分类。');
});
