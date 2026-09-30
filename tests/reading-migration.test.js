'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const reading = require('../assets/js/reading-store');
function setup() {
  const values = new Map();
  const storage = { getItem: key => values.get(key) || null, setItem: (key, value) => values.set(key, value) };
  const options = { storage, origin: 'https://example.test', basePath: '/blog/' };
  return { values, storage, options, store: reading.create(options) };
}
const a = { title: 'Same title', permalink: '/blog/posts/a/', identityStatus: 'unknown', pageType: 'paper' };
const b = { ...a, permalink: '/blog/posts/b/' };
const canonical = paper => ({ ...paper, identityStatus: 'verified', arxivId: '2609.12345' });
test('verified exact article URLs migrate old page records; same titles never establish identity', () => {
  const { store } = setup();
  store.update(a, { bookmarked: true, status: 'reading', note: 'First note' });
  store.update(b, { status: 'read', note: 'Second note' });
  store.reconcileVerifiedArticles([canonical(a)]);
  assert.equal(store.get(canonical(a)).bookmarked, true);
  assert.equal(store.get('page:/blog/posts/a/'), null);
  assert.equal(store.get(b).note, 'Second note');
  store.reconcileVerifiedArticles([canonical(a), canonical(b)]);
  const merged = store.get(canonical(a));
  assert.equal(merged.bookmarked, true);
  assert.equal(merged.status, 'read');
  assert.ok([merged.note, ...merged.noteHistory.map(entry => entry.note)].includes('First note'));
  assert.ok([merged.note, ...merged.noteHistory.map(entry => entry.note)].includes('Second note'));
  assert.equal(store.all().length, 1);
});
test('offsite, aggregates, unverified and contradictory verified URL mappings cannot rewrite records', () => {
  const { store, values } = setup(); store.update(a, { note: 'Original' });
  const before = store.backup();
  assert.throws(() => store.reconcileVerifiedArticles([canonical({ ...a, permalink: 'https://evil.test/blog/posts/a/' })]));
  assert.throws(() => store.reconcileVerifiedArticles([canonical(a), { ...canonical(a), arxivId: '2609.54321' }]));
  assert.throws(() => store.reconcileVerifiedArticles([canonical({ ...a, permalink: a.permalink + '?claim=verified' })]));
  assert.equal(store.reconcileVerifiedArticles([{ ...canonical(a), pageType: 'conference' }, a]), 0);
  assert.equal(store.get(a).note, 'Original');
  assert.equal(JSON.parse(before).records.length, store.all().length);
});
test('v2 backup includes strictly scoped positions and imports v1 without deleting local progress', () => {
  const { store } = setup(); store.update(a, { note: 'Personal' });
  store.updatePosition('/blog/posts/a/', { anchor: 'method', progress: 42.5, updatedAt: '2026-09-30T11:00:00.000Z' });
  const backup = JSON.parse(store.backup());
  assert.equal(backup.contract, 'research-reading-library-v2');
  assert.equal(backup.positions.length, 1);
  assert.equal(backup.positions[0].progress, 42.5);
  const legacy = { contract: 'research-reading-library-v1', basePath: '/blog/', records: backup.records };
  store.importBackup(JSON.stringify(legacy));
  assert.equal(store.positions()['/blog/posts/a/'].progress, 42.5);
  const invalid = [
    { ...backup, origin: 'https://evil.test' },
    { ...backup, positions: [{ ...backup.positions[0], pathname: '/other/a/' }] },
    { ...backup, positions: [{ ...backup.positions[0], progress: 101 }] },
    { ...backup, positions: [{ ...backup.positions[0], updatedAt: '2026-02-30T11:00:00.000Z' }] },
    { ...backup, positions: [backup.positions[0], backup.positions[0]] },
    { ...backup, positions: Array.from({ length: 201 }, (_, i) => ({ ...backup.positions[0], pathname: '/blog/posts/' + i + '/' })) }
  ];
  const before = store.backup();
  for (const data of invalid) { assert.throws(() => store.importBackup(JSON.stringify(data))); assert.equal(store.positions()['/blog/posts/a/'].progress, 42.5); }
  assert.deepEqual(JSON.parse(before).records, JSON.parse(store.backup()).records);
});
test('quota failure before the single authoritative write leaves everything unchanged; mirror failures cannot cause partial restoration', () => {
  const { store, storage, options } = setup(); store.update(a, { note: 'Original' });
  const incoming = JSON.parse(store.backup());
  incoming.records[0].note = 'Imported'; incoming.records[0].updatedAt = '2099-01-01T00:00:00.000Z';
  incoming.positions = [{ pathname: '/blog/posts/a/', anchor: 'results', progress: 71, updatedAt: '2026-09-30T11:00:00.000Z' }];
  const write = storage.setItem;
  storage.setItem = () => { throw new Error('quota'); };
  assert.throws(() => store.importBackup(JSON.stringify(incoming)));
  assert.equal(store.get(a).note, 'Original');
  assert.equal(store.positions()['/blog/posts/a/'], undefined);
  storage.setItem = (key, value) => { if (key.startsWith('research-reading-state-v2:')) write(key, value); else throw new Error('mirror quota'); };
  store.importBackup(JSON.stringify(incoming));
  const reopened = reading.create(options);
  assert.equal(reopened.get(a).note, 'Imported');
  assert.equal(reopened.positions()['/blog/posts/a/'].progress, 71);
});
test('corrupted legacy or primary snapshots remain available in raw recovery exports', () => {
  const { values, options } = setup();
  values.set('research-reading-store-v1:/blog/', 'broken legacy bytes');
  const store = reading.create(options);
  assert.equal(store.backup(), 'broken legacy bytes');
  assert.equal(JSON.parse(store.rawBackup()).legacyRecords, 'broken legacy bytes');
  assert.throws(() => store.update(a, { note: 'No overwrite' }));
  values.set('research-reading-state-v2:/blog/', '{broken primary');
  const primary = reading.create(options);
  assert.equal(JSON.parse(primary.rawBackup()).primary, '{broken primary');
});

test('preexisting separate chapter storage is included on first v2 save; old backup recovery preserves authoritative progress', () => {
  const { values, options, storage } = setup();
  values.set('research-reading-position-v1:/blog/', JSON.stringify({ version: 1, positions: {
    '/blog/posts/a/': { anchor: 'legacy-method', progress: 39, updatedAt: '2026-09-29T12:00:00.000Z' }
  } }));
  const store = reading.create(options);
  assert.equal(store.positions()[a.permalink].anchor, 'legacy-method');
  store.update(a, { bookmarked: true });
  const snapshot = JSON.parse(store.backup());
  assert.equal(snapshot.positions[0].anchor, 'legacy-method');
  const write = storage.setItem;
  storage.setItem = (key, value) => { if (key.startsWith('research-reading-state-v2:')) write(key, value); else throw Error('quota'); };
  store.updatePosition(a.permalink, { anchor: 'newer-method', progress: 60, updatedAt: '2026-09-30T12:00:00.000Z' });
  store.recoverBackup(JSON.stringify({ contract: 'research-reading-library-v1', basePath: '/blog/', records: snapshot.records }));
  assert.equal(store.positions()[a.permalink].anchor, 'newer-method');
});

test('damage is archived byte-for-byte inside successful recovery and remains exportable after reopening', () => {
  const { values, options, store } = setup(); store.update(a, { note: 'Original' });
  const valid = store.backup();
  values.set('research-reading-state-v2:/blog/', '{ damaged primary \u4e2d\u6587 bytes');
  values.set('research-reading-position-v1:/blog/', '{ damaged progress');
  const damaged = reading.create(options);
  damaged.recoverBackup(valid);
  const reopened = reading.create(options);
  assert.equal(reopened.get(a).note, 'Original');
  const raw = JSON.parse(reopened.rawBackup());
  assert.ok(raw.recoveryArchive.some(entry => entry.source === 'primary' && entry.raw === '{ damaged primary \u4e2d\u6587 bytes'));
  assert.ok(raw.recoveryArchive.some(entry => entry.source === 'legacyPositions' && entry.raw === '{ damaged progress'));
  assert.ok(JSON.parse(reopened.backup()).recoveryArchive.length);
});

test('strict v2 rejects unsupported fields and malformed notes, records, progress and timestamps without any writes', () => {
  const { store, values } = setup(); store.update(a, { note: 'Keep' });
  const valid = JSON.parse(store.backup());
  const invalid = [
    { ...valid, unexpected: 'do not silently drop' },
    { ...valid, records: [{ ...valid.records[0], bookmarked: 1 }] },
    { ...valid, records: [{ ...valid.records[0], note: null }] },
    { ...valid, records: [{ ...valid.records[0], noteHistory: [{ note: 'x', sourceURL: '//evil.test/x', sourceKey: 'page:/x', updatedAt: valid.exportedAt }] }] },
    { ...valid, positions: [{ pathname: '/blog/posts/a/', anchor: 'x', progress: '20', updatedAt: valid.exportedAt }] },
    { ...valid, positions: [{ pathname: '/blog/posts/a/#secret', anchor: 'x', progress: 20, updatedAt: valid.exportedAt }] },
    { ...valid, positions: [{ pathname: '/blog/posts/a/', anchor: 'x', progress: 20, updatedAt: '2026-02-30T00:00:00.000Z' }] },
    { ...valid, positions: [{ pathname: '/blog/posts/a/', anchor: 'x', progress: 20, updatedAt: valid.exportedAt, unknown: 1 }] }
  ];
  for (const data of invalid) { const before = [...values]; assert.throws(() => store.importBackup(JSON.stringify(data))); assert.deepEqual([...values], before); }
});

test('progress autosave rotates at 200 while backup import rejects overflow without dropping local positions', () => {
  const { store, values } = setup();
  const position = { anchor: 'method', progress: 20, updatedAt: '2026-09-30T12:00:00.000Z' };
  const imported = { contract: 'research-reading-library-v2', origin: 'https://example.test', basePath: '/blog/', records: [], positions: [] };
  for (let i = 0; i < 200; i++) imported.positions.push({ pathname: '/blog/posts/' + String(i).padStart(3, '0') + '/', ...position });
  store.importBackup(JSON.stringify(imported));
  const overflow = { ...imported, positions: [{ pathname: '/blog/posts/z/', ...position }] };
  const before = [...values]; assert.throws(() => store.importBackup(JSON.stringify(overflow))); assert.deepEqual([...values], before);
  store.updatePosition('/blog/posts/z/', { ...position, updatedAt: '2026-09-30T13:00:00.000Z' });
  assert.equal(Object.keys(store.positions()).length, 200);
  assert.equal(store.positions()['/blog/posts/z/'].progress, 20);
  assert.equal(store.positions()['/blog/posts/199/'], undefined);
});

test('an overflowing note conflict merge never silently discards old records; newer status and bookmark union stay exact', () => {
  const { store } = setup();
  const backup = { contract: 'research-reading-library-v1', basePath: '/blog/', records: [
    { key: 'page:' + a.permalink, url: a.permalink, title: a.title, status: 'reading', bookmarked: true, note: 'Old note', createdAt: '2026-09-01T00:00:00.000Z', updatedAt: '2026-09-20T00:00:00.000Z' },
    { key: 'page:' + b.permalink, url: b.permalink, title: b.title, status: 'read', bookmarked: false, note: 'Newest note', createdAt: '2026-09-02T00:00:00.000Z', updatedAt: '2026-09-21T00:00:00.000Z' }
  ] };
  store.importBackup(JSON.stringify(backup)); store.reconcileVerifiedArticles([canonical(b), canonical(a)]);
  const merged = store.get(canonical(a));
  assert.equal(merged.status, 'read'); assert.equal(merged.bookmarked, true); assert.equal(merged.note, 'Newest note');
  assert.equal(merged.createdAt, '2026-09-01T00:00:00.000Z'); assert.ok(merged.noteHistory.some(entry => entry.note === 'Old note' && entry.sourceURL === a.permalink));
  const incoming = JSON.parse(store.backup());
  incoming.records[0].noteHistory = Array.from({ length: 100 }, (_, i) => ({ note: 'Conflict ' + i, sourceURL: a.permalink, sourceKey: 'page:' + a.permalink, updatedAt: incoming.records[0].updatedAt }));
  incoming.records[0].note = 'Different import'; incoming.records[0].updatedAt = '2099-01-01T00:00:00.000Z';
  assert.throws(() => store.importBackup(JSON.stringify(incoming)), /100条/);
  assert.equal(store.get(canonical(a)).note, 'Newest note');
});

test('progress writers and resumes consume authoritative state even when compatibility mirrors cannot be written', () => {
  const workflow = require('../assets/js/reading-workflow');
  const { storage, store } = setup();
  const write = storage.setItem;
  storage.setItem = (key, value) => { if (key.startsWith('research-reading-state-v2:')) write(key, value); else throw Error('quota'); };
  const position = { anchor: 'method', progress: 42, updatedAt: '2026-09-30T12:00:00.000Z' };
  assert.equal(workflow.writePosition(storage, store.positionStorageKey, a.permalink, position, store), true);
  assert.equal(storage.getItem(store.positionStorageKey), null);
  assert.deepEqual(workflow.readStore(storage, store.positionStorageKey, store).positions[a.permalink], position);
});

test('a deferred body reader waits for footer store initialization before mounting', () => {
  const vm = require('node:vm'), fs = require('node:fs'), path = require('node:path');
  const events = {}, document = { readyState: 'interactive', addEventListener(name, callback) { events[name] = callback; } };
  const window = { document };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../assets/js/reading-workflow.js'), 'utf8'), { window });
  assert.equal(typeof events.DOMContentLoaded, 'function');
  let mounts = 0; window.ResearchReadingWorkflow.mount = () => { mounts++; };
  assert.equal(mounts, 0);
  events.DOMContentLoaded(); assert.equal(mounts, 1);
});

test('corrupted legacy progress blocks overwrite while exact original bytes remain exportable', () => {
  const { values, options } = setup();
  values.set('research-reading-position-v1:/blog/', 'bad progress raw bytes');
  const damaged = reading.create(options);
  assert.ok(damaged.error);
  assert.equal(damaged.backup(), 'bad progress raw bytes');
  assert.throws(() => damaged.update(a, { note: 'No silent reset' }), /阻止覆盖/);
  assert.equal(values.get('research-reading-position-v1:/blog/'), 'bad progress raw bytes');
  assert.equal(values.has('research-reading-state-v2:/blog/'), false);
  assert.equal(JSON.parse(damaged.rawBackup()).legacyPositions, 'bad progress raw bytes');
});

test('an old v1 tab can write a newer page record after migration and the verified saved URL alias preserves it', () => {
  const { store, values, options } = setup();
  store.update(a, { bookmarked: true, status: 'reading', note: 'Before upgrade' });
  const legacy = JSON.parse(values.get(store.legacyStorageKey));
  store.reconcileVerifiedArticles([canonical(a)]);
  assert.equal(JSON.parse(values.get(store.storageKey)).verifiedArticleURLs[0].pathname, a.permalink);
  legacy.records[0].note = 'Written in old tab after upgrade';
  legacy.records[0].status = 'read'; legacy.records[0].updatedAt = '2099-01-01T00:00:00.000Z';
  values.set(store.legacyStorageKey, JSON.stringify(legacy));
  const reopened = reading.create(options);
  assert.equal(reopened.get(canonical(a)).note, 'Written in old tab after upgrade');
  assert.equal(reopened.get(canonical(a)).status, 'read');
  assert.equal(reopened.get('page:' + a.permalink), null);
  assert.ok(reopened.get(canonical(a)).noteHistory.some(entry => entry.note === 'Before upgrade'));
  reopened.reconcileVerifiedArticles([canonical(a)]);
  assert.equal(JSON.parse(values.get(store.storageKey)).records[0].note, 'Written in old tab after upgrade');
});

test('old v1 unseen URLs remain separate until current verified article mapping confirms them; titles never map', () => {
  const { store, values, options } = setup();
  store.update(canonical(a), { bookmarked: true, note: 'Primary' });
  store.reconcileVerifiedArticles([canonical(a)]);
  const legacy = JSON.parse(values.get(store.legacyStorageKey));
  legacy.records.push({ ...legacy.records[0], key: 'page:' + b.permalink, url: b.permalink, note: 'New old-tab note', status: 'read', updatedAt: '2099-01-01T00:00:00.000Z' });
  values.set(store.legacyStorageKey, JSON.stringify(legacy));
  const reopened = reading.create(options);
  assert.equal(reopened.get(b).note, 'New old-tab note');
  assert.equal(reopened.get(canonical(a)).note, 'Primary');
  reopened.reconcileVerifiedArticles([canonical(a), canonical(b)]);
  assert.equal(reopened.get(b), null); assert.equal(reopened.get(canonical(a)).note, 'New old-tab note');
  assert.ok(reopened.get(canonical(a)).noteHistory.some(entry => entry.note === 'Primary'));
});

test('stale mirrors cannot undo explicit restoration even when their writes fail; genuinely later v1 edits still appear', () => {
  const { store, storage, values, options } = setup();
  store.update(a, { note: 'Discarded by explicit restore' });
  store.updatePosition(a.permalink, { anchor: 'old-chapter', progress: 40, updatedAt: '2026-09-30T12:00:00.000Z' });
  const oldMirror = values.get(store.legacyStorageKey);
  const write = storage.setItem;
  storage.setItem = (key, value) => { if (key === store.storageKey) write(key, value); else throw Error('mirror quota'); };
  store.recoverBackup(JSON.stringify({ contract: 'research-reading-library-v2', origin: store.origin, basePath: store.basePath, records: [], positions: [] }));
  const reopened = reading.create(options);
  assert.equal(reopened.all().length, 0); assert.equal(Object.keys(reopened.positions()).length, 0);
  assert.equal(values.get(store.legacyStorageKey), oldMirror);
  const later = JSON.parse(oldMirror);
  later.records[0].note = 'Actually newer old-tab note'; later.records[0].updatedAt = '2099-01-01T00:00:00.000Z';
  values.set(store.legacyStorageKey, JSON.stringify(later));
  assert.equal(reopened.refresh(), true); assert.equal(reopened.get(a).note, 'Actually newer old-tab note');
  values.set(store.positionStorageKey, JSON.stringify({ version: 1, positions: { [a.permalink]: { anchor: 'new-legacy-chapter', progress: 70, updatedAt: '2099-01-01T00:00:00.000Z' } } }));
  reopened.refresh(); assert.equal(reopened.positions()[a.permalink].anchor, 'new-legacy-chapter');
});

test('backups cannot assert verified aliases and a contradictory live alias never writes', () => {
  const { store, values } = setup(); store.update(a, { note: 'Keep exact association' });
  store.reconcileVerifiedArticles([canonical(a)]);
  const exported = JSON.parse(store.backup()); assert.equal(exported.verifiedArticleURLs, undefined); assert.equal(exported.legacyObserved, undefined);
  const forged = { ...exported, verifiedArticleURLs: [{ pathname: b.permalink, key: 'arxiv:2609.12345' }] };
  const before = [...values]; assert.throws(() => store.importBackup(JSON.stringify(forged))); assert.deepEqual([...values], before);
  assert.throws(() => store.reconcileVerifiedArticles([{ ...canonical(a), arxivId: '2609.54321' }]));
  assert.deepEqual([...values], before); assert.equal(store.get(canonical(a)).note, 'Keep exact association');
});
