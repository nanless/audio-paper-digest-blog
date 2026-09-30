'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const {createHash} = require('node:crypto');
const { shardIndex } = require('../scripts/shard-search-index');
const { verifySearchManifest } = require('../scripts/verify-build');

test('build verification closes every shard, record, byte and SHA against the manifest', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'verify-shards-'));
  t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  const row = {title:'Original title',titleZh:'中文标题',summary:'Evidence',date:'2026-09-30',
    pageType:'paper',tags:['语音识别'],permalink:'/audio-paper-digest-blog/posts/verified/'};
  fs.writeFileSync(path.join(root,'index.json'),JSON.stringify([row]));
  const manifest=shardIndex(root);
  assert.equal(verifySearchManifest(manifest,root).itemCount,1);
  assert.throws(()=>verifySearchManifest({...manifest,recordCount:2},root),/总量/);
  assert.throws(()=>verifySearchManifest({...manifest,totalBytes:manifest.totalBytes+1},root),/总量/);
  assert.throws(()=>verifySearchManifest({...manifest,shards:[...manifest.shards,...manifest.shards]},root),/重复/);
  assert.throws(()=>verifySearchManifest({...manifest,shards:[{...manifest.shards[0],url:'../outside.json'}]},root),/路径/);
  assert.throws(()=>verifySearchManifest({...manifest,shards:[{...manifest.shards[0],sha256:'0'.repeat(64)}]},root),/哈希/);
  const shardFile=path.join(root,manifest.shards[0].url);
  const original=fs.readFileSync(shardFile,'utf8');
  fs.writeFileSync(shardFile,original.replace('Evidence','EvidencE'));
  assert.throws(()=>verifySearchManifest(manifest,root),/SHA/);
  const invalid=Buffer.concat([Buffer.from(original.slice(0,original.indexOf('Evidence'))),
    Buffer.from([0xf0,0x9f,0x92]),Buffer.from(original.slice(original.indexOf('Evidence')+'Evidence'.length))]);
  const digest=createHash('sha256').update(invalid).digest('hex');
  const url='search-index/part-0001-'+digest.slice(0,12)+'.json';
  fs.writeFileSync(path.join(root,url),invalid);
  const invalidManifest={...manifest,totalBytes:invalid.length,
    shards:[{url,bytes:invalid.length,sha256:digest,recordCount:1}]};
  assert.throws(()=>verifySearchManifest(invalidManifest,root),/UTF-8/);
});
