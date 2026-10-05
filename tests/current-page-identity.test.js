'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os'),crypto=require('node:crypto'),{execFileSync}=require('node:child_process');
const repository=path.resolve(__dirname,'..'),hash=x=>crypto.createHash('sha256').update(x).digest('hex');
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const stable=x=>hash(JSON.stringify(canonical(x)));
const document=JSON.parse(fs.readFileSync(path.join(repository,'data/identity-current-page-history.json'),'utf8'));
function reseal(record){
 record.sourceProofSha256=stable(record.source);record.currentPageBinding.sourceProofSha256=record.sourceProofSha256;
 record.currentPageBindingSha256=stable(record.currentPageBinding);record.pageKey='page:'+record.currentPageBindingSha256;
 const {proofSha256,...body}=record;record.proofSha256=stable(body);return record;
}
function fixture(t){
 const root=fs.mkdtempSync(path.join(fs.realpathSync(os.tmpdir()),'current-page-consumer-'));t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
 for(const dir of ['content/posts','data','layouts/_default'])fs.mkdirSync(path.join(root,dir),{recursive:true});
 fs.cpSync(path.join(repository,'layouts/partials'),path.join(root,'layouts/partials'),{recursive:true});
 fs.copyFileSync(path.join(repository,'layouts/_default/index.json'),path.join(root,'layouts/_default/index.json'));
 fs.writeFileSync(path.join(root,'layouts/index.html'),'{{ partial "tag_concept_counts.html" . | jsonify }}');
 fs.writeFileSync(path.join(root,'layouts/_default/single.html'),'{{ partial "research_metadata.html" . | jsonify }}');
 for(const name of ['taxonomy-registry.json','taxonomy-catalog.json'])fs.copyFileSync(path.join(repository,'data',name),path.join(root,'data',name));
 for(const key of Object.keys(document.records))fs.copyFileSync(path.join(repository,key),path.join(root,key));
 fs.writeFileSync(path.join(root,'hugo.yaml'),'baseURL: https://example.test/\nbuildFuture: true\ndisableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\noutputs:\n  home: [HTML, JSON]\n');return root;
}
function build(root,records){
 const file=path.join(root,'data/identity-current-page-history.json');
 if(records)fs.writeFileSync(file,JSON.stringify({contract:document.contract,records}));else fs.rmSync(file,{force:true});
 execFileSync('hugo',['--source',root,'--noBuildLock','--panicOnWarning'],{stdio:'pipe'});
 return JSON.parse(fs.readFileSync(path.join(root,'public/index.json'),'utf8'));
}
test('three actual published ICASSP pages gain only source identity and official citation URLs',t=>{
 const root=fixture(t),before=build(root),after=build(root,document.records);assert.equal(after.length,3);
 assert.ok(before.every(r=>r.identityStatus==='unknown'));
 for(const[key,proof]of Object.entries(document.records)){
  const record=after.find(r=>r.title===proof.source.originalTitle);assert.ok(record);
  assert.equal(record.identityStatus,'verified');assert.equal(record.paperId,proof.paperId);assert.equal(record.sourceKind,'conference');
  assert.equal(record.identityEvidenceContract,document.contract);assert.equal(record.tagEvidenceContract,undefined);
  assert.equal(record.citation.sourceUrl,proof.source.sourceUrl);assert.equal(record.citation.paperKey,proof.paperId);assert.equal(record.citation.title,proof.source.originalTitle);
  assert.equal(record.citation.pdfUrl,'');assert.equal(record.citation.arxivId,'');assert.equal(record.citation.doi,'');assert.equal(record.citation.date,'');assert.deepEqual(record.citation.authors,[]);assert.equal(record.citation.complete,false);
  assert.equal(record.citation.provenanceDisclosure,proof.source.provenanceDisclosure);
  const prior=before.find(r=>r.title===record.title);assert.deepEqual(record.conceptIds,prior.conceptIds);assert.equal(record.primaryTaskId,prior.primaryTaskId);assert.equal(record.primaryMethodId,prior.primaryMethodId);
  assert.equal(hash(fs.readFileSync(path.join(root,key))),proof.pageSha256,'published body bytes stay unchanged');
 }
});
test('re-signed wrong old-plan, source, role and Git bindings still fail closed',t=>{
 const root=fixture(t),key=Object.keys(document.records)[0],original=document.records[key];
 const cases=[
  ['origin plan',r=>{r.originPlanSha256=hash('wrong');r.currentPageBinding.originPlanSha256=r.originPlanSha256;}],
  ['origin plan bytes',r=>{r.originPlanFileSha256=hash('wrong');r.currentPageBinding.originPlanFileSha256=r.originPlanFileSha256;}],
  ['origin page SHA',r=>{r.currentPageBinding.originPageSha256=hash('wrong');}],
  ['origin page key',r=>{r.currentPageBinding.originPageKey='page:'+hash('wrong');}],
  ['source descriptor',r=>{r.source.sourceBindings[0].metadataSha256=hash('wrong');}],
  ['source canonical identity',r=>{r.source.paperId='conference:icassp:2026:icassp-arnumber:9999';}],
  ['source URL',r=>{r.source.sourceUrl='https://example.invalid/not-official';}],
  ['Git commit',r=>{r.currentPageBinding.gitCommit='a'.repeat(40);}],
  ['Git tree',r=>{r.currentPageBinding.gitTree='a'.repeat(40);}],
  ['Git blob',r=>{r.currentPageBinding.gitBlob='a'.repeat(40);}],
  ['Git executable mode',r=>{r.currentPageBinding.gitMode='100755';}],
  ['page path',r=>{r.currentPageBinding.pagePath='content/posts/unknown.md';}],
  ['invented primary',r=>{r.primaryTaskId='task.asr';}],
  ['invented taxonomy',r=>{r.concepts=[{id:'task.asr',facet:'task',label:'语音识别'}];}],
  ['false classification status',r=>{r.taxonomyStatus='classified';}],
 ];
 for(const[name,change]of cases){
  const records=structuredClone(document.records),record=records[key];change(record);reseal(record);
  const index=build(root,records),target=index.find(r=>r.title===original.source.originalTitle);
  assert.equal(target.identityStatus,'unknown',name);assert.equal(target.identityEvidenceContract,undefined,name);assert.equal(index.filter(r=>r.identityStatus==='verified').length,2,name);
 }
 const records=structuredClone(document.records);fs.appendFileSync(path.join(root,key),'\nChanged after proof\n');const index=build(root,records);assert.equal(index.find(r=>r.title===original.source.originalTitle).identityStatus,'unknown','actual page drift');
});
