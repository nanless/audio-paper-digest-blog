'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os'),crypto=require('node:crypto'),{execFileSync,spawnSync}=require('node:child_process');
const api=require('../scripts/lib/taxonomy-classification-v3-proof'),old=require('../scripts/lib/taxonomy-v2-proof'),cases=require('./fixtures/classification-v3-public');
const repo=path.resolve(__dirname,'..'),digest=x=>crypto.createHash('sha256').update(x).digest('hex');
test('classification V3 is separately strict; no synthetic profile enters public validation',()=>{
 for(const c of cases.rows()){if(c.expected)assert.equal(api.validateSyntheticFixture(c.record,c.snapshot),true,c.name);else assert.throws(()=>api.validateSyntheticFixture(c.record,c.snapshot),undefined,c.name);assert.throws(()=>api.validatePublicRecord(c.record,c.snapshot),/production profile/,c.name);}
});
test('old1492+3 retain exact bytes/order and their original validators; only new371 dispatches separately',()=>{
 const baseline=require('./fixtures/published1492-ordered-record-pins.json'),dispatch=require('../scripts/lib/taxonomy-public-proof');
 assert.equal(digest(fs.readFileSync(path.join(repo,'scripts/lib/taxonomy-v2-proof.js'))),baseline.oldValidatorSha256);
 assert.equal(digest(fs.readFileSync(path.join(repo,'layouts/partials/taxonomy_classification_v2_proof.html'))),baseline.oldHugoValidatorSha256);
 const bytes=fs.readFileSync(path.join(repo,'data/current-page-taxonomy-history-v2.json'));assert.equal(digest(bytes),baseline.controlledFileSha256);
 const records=JSON.parse(fs.readFileSync(path.join(repo,'data/taxonomy-history-v2.json'))).records,catalog=JSON.parse(fs.readFileSync(path.join(repo,'data/taxonomy-catalog.json'))),snapshots=new Map(catalog.snapshots.map(s=>[s.registrySha256,s]));
 assert.equal(baseline.records.length,1492);assert.deepEqual(Object.keys(records).slice(0,1492),baseline.records.map(r=>r.pagePath));
 for(const pin of baseline.records){const record=records[pin.pagePath];assert.equal(digest(JSON.stringify(record)),pin.orderedRecordSha256,pin.pagePath);assert.equal(old.validatePublicRecord(record,snapshots.get(record.registrySha256)),true,pin.pagePath);}
 const originalKeys=new Set(baseline.records.map(r=>r.pagePath));for(const[key,record]of Object.entries(records)){if(originalKeys.has(key))continue;assert.equal(record.registrySha256,require('../scripts/lib/taxonomy-v2-371-proof').profile.registrySha256);assert.equal(dispatch.validatePublicRecord(record,snapshots.get(record.registrySha256)),true,key);}
 assert.equal(Object.keys(JSON.parse(bytes).records).length,3);for(const record of Object.values(JSON.parse(bytes).records))assert.equal(old.validateControlledCurrentPageRecord(record,snapshots.get(record.registrySha256)),true);
});
test('V2 cannot upgrade an engineering method primary by merely rehashing the record',()=>{
 const f=cases.fixture(),r=f.record,c=r.classificationRecord;
 delete c.primaryMechanismEvidence;delete r.primaryMechanismEvidence;c.protectedDependencies.contract='historical-taxonomy-v2-source-dependency-fingerprint-v1';r.classificationContract=old.CONTRACT;r.evidenceType='source-only-taxonomy-v2';c.contract=old.CONTRACT;c.reviewProof.contract=old.CONTRACT+'-review';c.fingerprintInputs.contract=old.CONTRACT;c.fingerprintInputs.roleContract='historical-source-taxonomy-roles-v2';c.fingerprintInputs.implementationSha256=c.protectedDependencies.files['scripts/lib/historical-source-taxonomy-classification-v2.js'];
 const response=JSON.parse(c.responseText),model=JSON.parse(c.modelResponseText);delete response.primaryMechanismEvidence;delete model.primaryMechanismEvidence;c.responseText=JSON.stringify(response);c.responseSha256=digest(c.responseText);c.modelResponseText=JSON.stringify(model);c.modelResponseSha256=digest(c.modelResponseText);c.quoteSelections=c.quoteSelections.filter(s=>!s.selectionRole.startsWith('primaryMechanism'));
 const baseline=require('./fixtures/taxonomy-v3-public');baseline.sync(r);assert.throws(()=>old.validatePublicRecord(r,f.snapshot),/类型感知主角色/);
});
test('Hugo independently enforces the same rehashed V3 branch and default production refusal',t=>{
 const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'classification-v3-hugo-'));t.after(()=>fs.rmSync(tmp,{recursive:true,force:true}));fs.mkdirSync(path.join(tmp,'data'));fs.mkdirSync(path.join(tmp,'layouts'));
 fs.cpSync(path.join(repo,'layouts/partials'),path.join(tmp,'layouts/partials'),{recursive:true});for(const n of ['taxonomy-catalog','taxonomy-registry'])fs.copyFileSync(path.join(repo,'data',n+'.json'),path.join(tmp,'data',n+'.json'));
 const rows=cases.rows();fs.writeFileSync(path.join(tmp,'data/cases.json'),JSON.stringify(rows));fs.writeFileSync(path.join(tmp,'hugo.yaml'),'baseURL: https://example.test/\ndisableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\n');fs.writeFileSync(path.join(tmp,'layouts/index.html'),'[{{ range $i,$case := hugo.Data.cases }}{{ if $i }},{{ end }}{{ dict "name" $case.name "fixture" (partial "taxonomy_classification_v3_proof.html" (dict "record" $case.record "syntheticFixture" true)) "production" (partial "taxonomy_source_only_v3_proof.html" $case.record) | jsonify | safeHTML }}{{ end }}]');
 execFileSync('hugo',['--source',tmp,'--noBuildLock','--panicOnWarning'],{stdio:'pipe'});const result=JSON.parse(fs.readFileSync(path.join(tmp,'public/index.html')));for(let i=0;i<rows.length;i++){assert.equal(result[i].fixture,rows[i].expected,rows[i].name);assert.equal(result[i].production,false,rows[i].name);}
});
test('real build entry rejects a V3 sidecar before mutating output or invoking Hugo',t=>{
 const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'classification-v3-build-'));t.after(()=>fs.rmSync(tmp,{recursive:true,force:true}));fs.mkdirSync(path.join(tmp,'data'));fs.mkdirSync(path.join(tmp,'public'));const sentinel=path.join(tmp,'public/sentinel.txt');fs.writeFileSync(sentinel,'unchanged');fs.copyFileSync(path.join(repo,'data/taxonomy-catalog.json'),path.join(tmp,'data/taxonomy-catalog.json'));
 fs.writeFileSync(path.join(tmp,'data/taxonomy-history-v3.json'),JSON.stringify({contract:'historical-source-taxonomy-supplement-v3',records:{'content/posts/synthetic.md':cases.fixture().record}}));
 const run=spawnSync(process.execPath,[path.join(repo,'scripts/build-site.js')],{cwd:tmp,encoding:'utf8'});assert.notEqual(run.status,0);assert.match(run.stderr,/production profile/);assert.equal(fs.readFileSync(sentinel,'utf8'),'unchanged');assert.deepEqual(fs.readdirSync(path.join(tmp,'public')),['sentinel.txt']);
});
test('first V3 rollout rejects already typed ordinary and controlled page collisions',t=>{
 const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'classification-v3-collision-'));t.after(()=>fs.rmSync(tmp,{recursive:true,force:true}));fs.mkdirSync(path.join(tmp,'data'));fs.copyFileSync(path.join(repo,'data/taxonomy-catalog.json'),path.join(tmp,'data/taxonomy-catalog.json'));const key='content/posts/synthetic.md';
 for(const name of ['taxonomy-history-v2.json','current-page-taxonomy-history-v2.json']){fs.writeFileSync(path.join(tmp,'data',name),JSON.stringify({records:{[key]:{}}}));fs.writeFileSync(path.join(tmp,'data/taxonomy-history-v3.json'),JSON.stringify({contract:'historical-source-taxonomy-supplement-v3',records:{[key]:cases.fixture().record}}));assert.throws(()=>require('../scripts/verify-taxonomy-v3').verify(tmp),/重复页面/);fs.unlinkSync(path.join(tmp,'data',name));}
});
