'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os'),{execFileSync,spawnSync}=require('node:child_process');
const f=require('./fixtures/current-page-taxonomy-v2-public'),api=require('../scripts/lib/current-page-taxonomy-v2-proof'),v2=require('../scripts/lib/taxonomy-v2-proof');
const changes={
 'origin item':r=>r.currentPageTaxonomyPlan.queue[0].originItemSha256='a'.repeat(64),
 'foreign member':r=>r.currentPageTaxonomyPlan.queue[0].paperId='conference:icassp:2026:icassp-arnumber:99999999',
 'Git baseline':r=>r.currentPageTaxonomyPlan.gitAnchor='a'.repeat(40),
 'Git blob':r=>r.currentPageTaxonomyPlan.queue[0].currentPageIdentityRecord.currentPageBinding.gitBlob='a'.repeat(40),
 'page path':r=>r.currentPageTaxonomyPlan.queue[0].page.path='content/posts/other.md',
 'body SHA':r=>r.currentPageTaxonomyPlan.queue[0].page.bodySha256='a'.repeat(64),
 'identity document':r=>r.currentPageTaxonomyPlan.identityDocumentSha256='a'.repeat(64),
 'registry':r=>r.currentPageTaxonomyPlan.registrySha256='a'.repeat(64),
 'projection':r=>r.currentPageTaxonomyPlan.projectionSha256='a'.repeat(64),
 'PDF SHA':r=>{const m=r.currentPageTaxonomyPlan.queue[0];m.sourceDescriptor.pdfSha256='a'.repeat(64);m.sourceDescriptorSha256=f.hash(m.sourceDescriptor);},
 'official metadata':r=>{const m=r.currentPageTaxonomyPlan.queue[0];m.sourceDescriptor.sourceUrl='https://evil.test/same-title';m.sourceDescriptorSha256=f.hash(m.sourceDescriptor);},
 'request source':r=>r.source.currentPageClassificationBinding.originItemSha256='a'.repeat(64),
 'excess binding key':r=>r.source.currentPageClassificationBinding.selfApproved=true,
 'dependency map':r=>r.currentPageTaxonomyPlan.protectedDependencies.files['scripts/lib/historical-source-taxonomy-classification-v2.js']='a'.repeat(64),
 'selected evidence':r=>r.currentPageTaxonomyPlan.queue[0].evidenceSha256='a'.repeat(64),
};
test('offline current3 envelope retains exact identities but no draft plan is production authorized',()=>{
 const x=f.fixture();assert.equal(api.replayOuterEnvelope(x.record).pagePath,x.member.page.path);assert.deepEqual(Object.keys(api.PRODUCTION_PLAN_PINS),['e12fc74dfe549733c607110ce0067c9977e369b534f752c35baede249e6a358a']);assert.throws(()=>api.validateProductionOuter(x.record),/尚无批准的实际安装计划/);assert.throws(()=>v2.validateControlledCurrentPageRecord(x.record,x.snapshot),/尚无批准/);
 const generic=structuredClone(x.record);generic.evidenceType='source-only-taxonomy-v2';f.resign(generic);assert.throws(()=>v2.validatePublicRecord(generic,x.snapshot),/受控|来源|currentPage/);
 for(const [name,change]of Object.entries(changes)){const r=f.fixture().record;change(r);f.resign(r);assert.throws(()=>api.replayOuterEnvelope(r),undefined,name);}
});
test('exact approved installed R4 plan admits only its envelope; missing classification still rejects',()=>{
 const bytes=fs.readFileSync(path.join(__dirname,'fixtures/controlled-current-page-plan-r4.json')),digest=require('./fixtures/taxonomy-v2-public').digest;assert.equal(digest(bytes),'e1bb9db32a715f2737f55a5542e7677d81276aaa7316b790923e081537f988eb');
 const r=f.approvedPlanEnvelope(),p=r.currentPageTaxonomyPlan;assert.equal(Object.keys(p.protectedDependencies.files).length,119);assert.equal(p.protectedDependencySha256,'e847d7b1b549a1499cc85a0d77dcc864f51a4c1de9dd920aab51a11b0ba2922c');assert.equal(api.validateProductionOuter(r).planSha256,p.planSha256);assert.throws(()=>v2.validateControlledCurrentPageRecord(r,f.fixture().snapshot),/明确v2契约和完整分类记录/);
 const drift=structuredClone(r);drift.currentPageTaxonomyPlan.protectedDependencies.files['scripts/conference_extractor.py']='a'.repeat(64);f.resign(drift);assert.throws(()=>api.validateProductionOuter(drift));
});
test('Hugo independently replays offline envelopes and rejects every unauthorized current3 record',t=>{
 const repo=path.resolve(__dirname,'..'),dir=fs.mkdtempSync(path.join(os.tmpdir(),'current3-public-hugo-'));t.after(()=>fs.rmSync(dir,{recursive:true,force:true}));fs.mkdirSync(path.join(dir,'data'));fs.mkdirSync(path.join(dir,'layouts'));fs.cpSync(path.join(repo,'layouts/partials'),path.join(dir,'layouts/partials'),{recursive:true});
 for(const name of ['taxonomy-catalog','taxonomy-registry'])fs.copyFileSync(path.join(repo,'data',name+'.json'),path.join(dir,'data',name+'.json'));
 const cases=[{name:'coherent synthetic offline r3',record:f.fixture().record,expected:true},{name:'actual approved R4 plan with missing classification',record:f.approvedPlanEnvelope(),expected:true}];for(const [name,change]of Object.entries(changes)){const r=f.fixture().record;change(r);f.resign(r);cases.push({name,record:r,expected:false});}
 for(const r of Object.values(require('../data/current-page-taxonomy-history-v2.json').records))cases.push({name:'actual formal '+r.paperId,record:r,expected:true,production:true});
 fs.writeFileSync(path.join(dir,'data/cases.json'),JSON.stringify(cases));fs.writeFileSync(path.join(dir,'hugo.yaml'),'baseURL: https://example.test/\ndisableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\n');fs.writeFileSync(path.join(dir,'layouts/index.html'),'[{{ range $i,$c := hugo.Data.cases }}{{ if $i }},{{ end }}{{ dict "name" $c.name "offline" (partial "tag_current_page_v2_envelope.html" $c.record).valid "production" (partial "tag_current_page_v2_proof.html" $c.record) | jsonify | safeHTML }}{{ end }}]');execFileSync('hugo',['--source',dir,'--noBuildLock','--panicOnWarning'],{stdio:'pipe'});const result=JSON.parse(fs.readFileSync(path.join(dir,'public/index.html')));result.forEach((r,i)=>{assert.equal(r.offline,cases[i].expected,r.name);assert.equal(r.production,cases[i].production||false,r.name);});
});
test('actual build entrance rejects coherent unapproved current3 before Hugo and leaves destination intact',t=>{
 const repo=path.resolve(__dirname,'..'),dir=fs.mkdtempSync(path.join(os.tmpdir(),'current3-public-build-'));t.after(()=>fs.rmSync(dir,{recursive:true,force:true}));fs.mkdirSync(path.join(dir,'data'));fs.mkdirSync(path.join(dir,'public'));fs.copyFileSync(path.join(repo,'data/taxonomy-catalog.json'),path.join(dir,'data/taxonomy-catalog.json'));fs.writeFileSync(path.join(dir,'public/unchanged.txt'),'PRESERVE');
 const x=f.fixture();fs.writeFileSync(path.join(dir,'data/current-page-taxonomy-history-v2.json'),JSON.stringify({contract:api.CONTRACT,records:{[x.member.page.path]:x.record}}));const result=spawnSync(process.execPath,[path.join(repo,'scripts/build-site.js')],{cwd:dir,encoding:'utf8',env:{...process.env,PATH:''}});assert.notEqual(result.status,0);assert.match(result.stderr,/尚无批准的实际安装计划/);assert.doesNotMatch(result.stderr,/spawnSync hugo/);assert.equal(fs.readFileSync(path.join(dir,'public/unchanged.txt'),'utf8'),'PRESERVE');
 const bad=structuredClone(x.record);bad.evidenceType='source-only-taxonomy-v2';f.resign(bad);fs.rmSync(path.join(dir,'data/current-page-taxonomy-history-v2.json'));fs.writeFileSync(path.join(dir,'data/taxonomy-history-v2.json'),JSON.stringify({contract:'historical-source-taxonomy-supplement-v2',records:{[x.member.page.path]:bad}}));assert.throws(()=>require('../scripts/verify-taxonomy-v2').verify(dir),/受控|来源|currentPage/);
});
test('original six complete serialized records remain unchanged when formal generic increments are added',()=>{
 const crypto=require('node:crypto'),history=require('../data/taxonomy-history-v2.json'),snapshots=require('../data/taxonomy-catalog.json').snapshots,pins=require('./fixtures/formal-v2-initial-six-record-pins.json');assert.equal(pins.sourceFileSha256,'6fae9a039b533886557e912974c27e7a3713f171bc4027bf4cf7f525472ff93a');assert.equal(Object.keys(pins.records).length,6);
 for(const [key,pin]of Object.entries(pins.records)){const r=history.records[key];assert.ok(r,key);assert.equal(r.paperId,pin.paperId);assert.equal(r.proofSha256,pin.proofSha256);assert.equal(crypto.createHash('sha256').update(JSON.stringify(r)).digest('hex'),pin.jsonSha256,'Every value, array and property order remains original: '+key);assert.equal(v2.validatePublicRecord(r,snapshots.find(s=>s.registrySha256===r.registrySha256)),true);assert.equal(r.methodNotApplicable,false);assert.equal(r.classificationRecord.naFullSourceEvidence,null);if(r.researchType!=='engineering')assert.equal(r.primaryTaskId,'');}
});
test('three actual controlled classifications preserve native exporter bytes and reject rehashed drift',()=>{
 const digest=require('./fixtures/taxonomy-v2-public').digest,seal=require('./fixtures/taxonomy-v2-public').seal,bytes=fs.readFileSync(path.resolve(__dirname,'../data/current-page-taxonomy-history-v2.json'));assert.equal(digest(bytes),'06142aadd012fec0127d66d2cfbe81f9059edbe18d9a5f7c45be65747790e9f9');const h=JSON.parse(bytes),snapshot=f.fixture().snapshot;assert.equal(h.contract,api.CONTRACT);assert.equal(Object.keys(h.records).length,3);
 for(const [key,r]of Object.entries(h.records)){assert.equal(api.validateProductionOuter(r).pagePath,key);assert.equal(v2.validateControlledCurrentPageRecord(r,snapshot),true);assert.throws(()=>v2.validatePublicRecord(r,snapshot));assert.equal(r.methodNotApplicable,false);assert.equal(r.classificationRecord.naFullSourceEvidence,null);
  for(const change of [x=>x.primaryTaskId='task.asr',x=>x.classificationRecord.reviewProof.response.verifiedChecks.methodRole=false,x=>x.source.currentPageClassificationBinding.bodySha256='a'.repeat(64),x=>x.currentPageTaxonomyPlan.queue[0].sourceDescriptor.pdfSha256='a'.repeat(64)]){const x=structuredClone(r);change(x);x.classificationRecord.source=x.source;x.classificationRecord.fingerprintInputs.source=x.source;x.classificationRecord.fingerprint=f.hash(x.classificationRecord.fingerprintInputs);x.requestStageFingerprint=x.classificationRecord.fingerprint;x.classificationRecord.reviewProofSha256=f.hash(x.classificationRecord.reviewProof);x.reviewProofSha256=x.classificationRecord.reviewProofSha256;seal(x);assert.throws(()=>v2.validateControlledCurrentPageRecord(x,snapshot));}
 }
});
