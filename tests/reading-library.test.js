'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const reading = require('../assets/js/reading-store');
const exporter = require('../assets/js/reading-export');
function setup() {
  const values = new Map();
  const storage = { getItem:key=>values.get(key)||null, setItem:(key,value)=>values.set(key,value) };
  const options = {storage, origin:'https://example.test', basePath:'/blog/'};
  return {values,storage,options,store:reading.create(options)};
}
const first = {title:'First', permalink:'/blog/posts/a/', arxivId:'2609.12345v2', identityStatus:'verified'};
test('one verified paper shares bookmarks, reading status and notes across guides; unknown identities remain separate',()=>{
  const {store} = setup();
  store.update(first,{bookmarked:true,status:'reading',note:'核对实验协议'});
  const other = {...first,permalink:'/blog/posts/b/',arxivId:'2609.12345v3'};
  assert.equal(store.key(first),store.key(other));
  assert.equal(store.get(other).note,'核对实验协议');
  store.update(other,{bookmarked:false});
  assert.equal(store.get(first).status,'reading');
  assert.equal(store.get(first).bookmarked,false);
  assert.notEqual(store.key({...first,identityStatus:'inferred'}),store.key({...other,identityStatus:'inferred'}));
  assert.equal(store.key({permalink:'/blog/posts/c/',paperId:'conference:cvpr:123',identityStatus:'verified'}),'conference:cvpr:123');
});
test('backup imports merge newer records atomically and reject offsite, duplicates, invalid status and oversized notes',()=>{
  const {store,values} = setup(); store.update(first,{bookmarked:true,note:'原笔记'});
  const before=values.values().next().value, backup=JSON.parse(store.backup());
  assert.equal(store.importBackup(JSON.stringify(backup)),0);
  const bads = [ {...backup,basePath:'/other/'}, {...backup,records:[{...backup.records[0],url:'https://evil.test/blog/a'}]},
    {...backup,records:[...backup.records,...backup.records]}, {...backup,records:[{...backup.records[0],status:'invented'}]},
    {...backup,records:[{...backup.records[0],note:'x'.repeat(2001)}]} ];
  for(const bad of bads) {assert.throws(()=>store.importBackup(JSON.stringify(bad)));assert.equal(values.values().next().value,before);}
  backup.records[0].note='新笔记';backup.records[0].updatedAt='2099-01-01T00:00:00.000Z';
  assert.equal(store.importBackup(JSON.stringify(backup)),1);assert.equal(store.get(first).note,'新笔记');
});
test('another tab changes are read before writing, failed persistence never reports success, corrupted data requires explicit restoration',()=>{
  const {store,options,values,storage}=setup();
  store.update(first,{bookmarked:true});
  const tab=reading.create(options);tab.update(first,{note:'另一标签页'});
  store.update(first,{status:'read'});assert.equal(store.get(first).note,'另一标签页');
  const backup=store.backup(), key=[...values.keys()][0];
  values.set(key,'broken');const corrupt=reading.create(options);assert.ok(corrupt.error);
  assert.throws(()=>corrupt.update(first,{status:'reading'}),/阻止覆盖/);assert.equal(values.get(key),'broken');
  assert.equal(corrupt.backup(),'broken');assert.equal(corrupt.recoverBackup(backup),1);assert.equal(corrupt.get(first).status,'read');
  const old=values.get(key);storage.setItem=()=>{throw new Error('quota')};assert.throws(()=>corrupt.update(first,{note:'不能保存'}),/未能保存/);assert.equal(values.get(key),old);assert.equal(corrupt.get(first).note,'另一标签页');
});
test('batch reading exports deduplicate identities, preserve notes and missing provenance, neutralize spreadsheet formulas',()=>{
  const citation={title:'Paper {A}',identityStatus:'verified',sourceKind:'arxiv',arxivId:'2609.12345v2',authors:['Author A'],date:'2026-09-30'};
  const entry={...first,citation,originalTitle:'=HYPERLINK("evil")',readingKey:'arxiv:2609.12345',readingState:{note:'个人结论',status:'reading'}};
  const md=exporter.build([entry,{...entry,permalink:'/blog/posts/b/'}],'md',{origin:'https://example.test'});assert.equal(md.exported,1);assert.match(md.text,/个人结论/);
  const csv=exporter.build([entry],'csv',{origin:'https://example.test'});assert.match(csv.text,/"'=HYPERLINK/);
  const unknown={title:'Unknown',permalink:'/blog/posts/u/',identityStatus:'unknown',citation:{title:'Unknown'}};
  const bib=exporter.build([entry,unknown],'bib');assert.equal(bib.exported,1);assert.equal(bib.skipped,1);assert.match(bib.text,/Author A/);assert.doesNotMatch(bib.text,/@misc\{.*Unknown/);
  assert.throws(()=>exporter.build([unknown],'ris'),/均缺少可验证/);
  const incomplete=exporter.build([{...entry,citation:{...citation,authors:[],date:''}}],'ris');assert.equal(incomplete.incomplete,1);assert.doesNotMatch(incomplete.text,/PY  -/);
});

test('reading list exports retain migrated note conflicts and their original guide links', () => {
  const entry = {...first, citation:{title:'Paper', identityStatus:'verified', sourceKind:'arxiv', arxivId:'2609.12345'},
    readingState:{status:'reading', note:'当前备注', noteHistory:[{note:'另一导读的备注', sourceURL:'/blog/posts/b/', sourceKey:'page:/blog/posts/b/', updatedAt:'2026-09-30T08:00:00.000Z'}]}};
  for (const format of ['md', 'csv']) {
    const result = exporter.build([entry], format, {origin:'https://example.test'});
    assert.match(result.text, /当前备注/); assert.match(result.text, /另一导读的备注/);
    assert.match(result.text, /\/blog\/posts\/b\//);
  }
});
