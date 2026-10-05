'use strict';
// Lossless value/canonical-proof reconstruction. Archive/native bytes remain
// separate evidence; this packing format does not preserve JSON indentation.
const api=require('./fullsite-tag-proof');
const {stableHash,parseStrictJson}=require('./tag-classification-v3-proof');
const CONTRACT='fullsite-source-taxonomy-audit-sharded-supplement-v1';
const PACKING='shared-dependencies-and-paper-records-v1';
const SHARD='fullsite-source-taxonomy-audit-packed-shard-v1';
const MAX_BYTES=8*1024*1024;
const MAX_TOTAL_BYTES=256*1024*1024;
const map=x=>!!x&&typeof x==='object'&&!Array.isArray(x)&&[Object.prototype,null].includes(Object.getPrototypeOf(x));
const hash=x=>typeof x==='string'&&/^[a-f0-9]{64}$/.test(x);
const fail=m=>{throw Error('Fullsite taxonomy packed proof rejected: '+m);};
function reconstruct(manifest,readShard){
 api.exact(manifest,['contract','packing','recordCount','paperCount','totalBytes','dependencyProfiles','admissionProjectionSha256','sourceProjectionSha256','shards'],'packed manifest');
 if(manifest.contract!==CONTRACT||manifest.packing!==PACKING||!hash(manifest.admissionProjectionSha256)||!hash(manifest.sourceProjectionSha256)||!Number.isSafeInteger(manifest.recordCount)||manifest.recordCount<1||!Number.isSafeInteger(manifest.paperCount)||manifest.paperCount<1||!Number.isSafeInteger(manifest.totalBytes)||manifest.totalBytes<1||manifest.totalBytes>MAX_TOTAL_BYTES||!Array.isArray(manifest.shards)||!manifest.shards.length||manifest.shards.length>128)fail('manifest contract/count/packing');
 const d=manifest.dependencyProfiles;api.exact(d,['native','source','own','issuers'],'shared dependency profiles');
 const used={native:new Set(),source:new Set(),own:new Set(),issuers:new Set()};
 for(const kind of Object.keys(used)){
  if(!map(d[kind]))fail('shared profile map');
  for(const [ref,profile]of Object.entries(d[kind]))if(!hash(ref)||!map(profile)||(kind!=='issuers'&&stableHash(profile)!==ref))fail('shared complete profile SHA');
 }
 const records=Object.create(null),classificationRecords=Object.create(null),paths=new Set();let total=0;
 for(const [index,descriptor] of manifest.shards.entries()){
  api.exact(descriptor,['path','bytes','sha256','paperCount','recordCount'],'shard descriptor');
  const match=descriptor.path?.match(/^fullsite-taxonomy\/part-\d{4}-([a-f0-9]{12})\.json$/);
  if(!match||!hash(descriptor.sha256)||descriptor.path!=='fullsite-taxonomy/part-'+String(index+1).padStart(4,'0')+'-'+descriptor.sha256.slice(0,12)+'.json'||paths.has(descriptor.path)||!Number.isSafeInteger(descriptor.bytes)||descriptor.bytes<1||descriptor.bytes>MAX_BYTES||!Number.isSafeInteger(descriptor.paperCount)||descriptor.paperCount<1||!Number.isSafeInteger(descriptor.recordCount)||descriptor.recordCount<1)fail('shard path/size/SHA');
  paths.add(descriptor.path);
  const bytes=readShard(descriptor.path);
  if(!Buffer.isBuffer(bytes)&&!(bytes instanceof Uint8Array))fail('shard reader must supply physical bytes');
  if(bytes.length!==descriptor.bytes||api.sha(bytes)!==descriptor.sha256)fail('shard actual bytes/SHA');total+=bytes.length;
  const shard=parseStrictJson(new TextDecoder('utf-8',{fatal:true}).decode(bytes));api.exact(shard,['contract','papers'],'packed shard');
  if(shard.contract!==SHARD||!Array.isArray(shard.papers)||shard.papers.length!==descriptor.paperCount)fail('shard contract/count');
  let pages=0;
  for(const p of shard.papers){
   api.exact(p,['contract','paperId','auditRecordSha256','auditRecord','classificationRecord','pages'],'packed paper');
   if(p.contract!=='fullsite-taxonomy-packed-paper-v1'||Object.hasOwn(classificationRecords,p.paperId)||!map(p.auditRecord)||!map(p.classificationRecord)||!map(p.pages)||!hash(p.auditRecordSha256))fail('packed paper identity/object');
   api.exact(p.auditRecord,api.AUDIT_KEYS.filter(k=>!['protectedDependencies','classificationRecord'].includes(k)).concat(['protectedDependenciesRef','classificationRecordRef']),'packed outer');
   const c=p.classificationRecord;
   if(Object.hasOwn(c,'protectedDependencies')||!hash(c.protectedDependenciesRef)||p.auditRecord.classificationRecordRef!==p.paperId||p.auditRecord.paperId!==p.paperId||c.paperId!==p.paperId)fail('packed inner/ref identity');
   const ref=p.auditRecord.protectedDependenciesRef,issuer=d.issuers[ref];
   if(!issuer)fail('missing issuer profile');api.exact(issuer,['contract','nativeRef','sourceRef','ownRef'],'issuer refs');
   if(issuer.contract!=='fullsite-taxonomy-audit-protected-dependencies-v1')fail('unknown shared issuer contract');
   used.issuers.add(ref);
   const dependency={contract:issuer.contract};
   for(const kind of ['native','source','own']){const r=issuer[kind+'Ref'];if(!hash(r)||!Object.hasOwn(d[kind],r))fail('missing complete dependency ref');dependency[kind]=d[kind][r];used[kind].add(r);}
   // issuerRef is the original outer dependency SHA, not the hash of its
   // compact ref object. All actual constituent maps must reconstruct it.
   if(stableHash(dependency)!==ref||c.protectedDependenciesRef!==issuer.nativeRef)fail('mixed issuer/native/source/own profile');
   const {protectedDependenciesRef:_,...innerBody}=c;
   const classificationRecord={...innerBody,protectedDependencies:dependency.native};
   const {protectedDependenciesRef:__,classificationRecordRef:___,...outerBody}=p.auditRecord;
   const audit={...outerBody,protectedDependencies:dependency,classificationRecord};
   if(stableHash(audit)!==p.auditRecordSha256)fail('reconstructed complete outer SHA');
   for(const [path,page]of Object.entries(p.pages)){
    if(Object.hasOwn(records,path))fail('duplicate page path');
    if(page.classificationRef!==p.paperId||page.auditRecordSha256!==p.auditRecordSha256)fail('page/paper ref mismatch');
    api.validateEnvelope(page,path,audit);records[path]=page;pages++;
   }
   classificationRecords[p.paperId]=audit;
  }
  if(pages!==descriptor.recordCount)fail('shard page count');
 }
 for(const kind of Object.keys(used))if(used[kind].size!==Object.keys(d[kind]).length)fail('orphan dependency profile');
 if(total!==manifest.totalBytes||Object.keys(records).length!==manifest.recordCount||Object.keys(classificationRecords).length!==manifest.paperCount)fail('complete manifest actual totals');
 return api.parseSupplement({contract:api.PUBLIC_CONTRACT,records,classificationRecords});
}
module.exports={CONTRACT,PACKING,SHARD,MAX_BYTES,MAX_TOTAL_BYTES,reconstruct};
