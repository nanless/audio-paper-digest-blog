'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os'),{spawnSync}=require('node:child_process');
const api=require('../scripts/lib/tag-v2-proof'),fixtureApi=require('./fixtures/tag-v2-public');
const {fixture,seal,digest,catalog,withDependencies}=fixtureApi;
const h113=require('./fixtures/historical-v2-h113-dependencies.json');
test('retained H113 dependency map accepts JS and Python without allowing foreign or secret paths',()=>{
 assert.equal(Object.keys(h113.files).length,113);assert.equal(Object.keys(h113.files).filter(p=>p.endsWith('.py')).length,9);
 const positive=fixture();withDependencies(positive.record,h113);assert.equal(api.validatePublicRecord(positive.record,positive.snapshot),true);
 for(const name of ['other/source.js','/scripts/source.py','scripts/../secret.js','manual/scripts/../../secret.py','scripts/.env','scripts/secrets.json','scripts/.hidden.py','scripts/source.txt','scripts//source.js']){
  const f=fixture(),dependencies=structuredClone(h113);dependencies.files[name]=digest('synthetic forbidden dependency');withDependencies(f.record,dependencies);
  assert.throws(()=>api.validatePublicRecord(f.record,f.snapshot),/生产依赖路径或SHA/,name);
 }
 const bad=fixture(),dependencies=structuredClone(h113);dependencies.files['scripts/extra.py']='not-a-sha';withDependencies(bad.record,dependencies);assert.throws(()=>api.validatePublicRecord(bad.record,bad.snapshot),/生产依赖路径或SHA/);
 const drift=fixture();withDependencies(drift.record,h113);drift.record.classificationRecord.fingerprintInputs.identityImplementationSha256=digest('foreign implementation');drift.record.classificationRecord.fingerprint=api.stableHash(drift.record.classificationRecord.fingerprintInputs);drift.record.requestStageFingerprint=drift.record.classificationRecord.fingerprint;seal(drift.record);assert.throws(()=>api.validatePublicRecord(drift.record,drift.snapshot),/请求实现依赖漂移/);
});
test('synthetic public v2 projection replays full model, review, source and fingerprint for formal 330 and 262 snapshots',()=>{
 for(const registryVersion of ['paper-taxonomy-v1','paper-taxonomy-v2'])for(const options of [{},{researchType:'engineering'},{researchType:'position',na:true,domainScope:'out-of-domain'},{researchType:'experience',na:true,domainScope:'adjacent-domain'}]){
  const f=fixture({...options,registryVersion});assert.equal(api.validatePublicRecord(f.record,f.snapshot),true);
 }
});
test('NA missing or guessed full-source public evidence fails closed after re-hashing',()=>{
 for(const researchType of ['position','experience'])for(const naFullSourceEvidence of [undefined,{sampling:'full-source',sourceTextSha256:'a'.repeat(64),snippets:[]}]){
  const f=fixture({researchType,na:true});if(naFullSourceEvidence)f.record.classificationRecord.naFullSourceEvidence=naFullSourceEvidence;else delete f.record.classificationRecord.naFullSourceEvidence;seal(f.record);
  assert.throws(()=>api.validatePublicRecord(f.record,f.snapshot),/历史v2全文NA证据拒绝/);
 }
});
test('re-hashed protocol drift cannot gain acceptance merely by recomputing public SHA commitments',()=>{
 const mutations={
  'missing fingerprint inputs':r=>delete r.classificationRecord.fingerprintInputs,
  'modified response model':r=>r.classificationRecord.reviewProof.model='other-model',
  'unknown role':r=>r.primaryResearchRole.kind='task',
  'science pretending engineering task':r=>r.primaryTaskId='task.asr',
  'unknown domain':r=>r.domainScope='audio-adjacent',
  'v1 pretending v2':r=>r.classificationContract='historical-source-taxonomy-classification-v1',
  'source identity mismatch':r=>r.source.paperId='arxiv:2601.00002',
  'source run hash mismatch':r=>r.source.sourceBinding.sourceRunIdentitySha256='a'.repeat(64),
  'external source URL':r=>r.source.sourceUrl='https://evil.test/paper',
  'external PDF URL':r=>r.source.pdfUrl='https://evil.test/file.pdf',
  'unversioned PDF without evidence binding':r=>r.source.pdfUrl='https://arxiv.org/pdf/2601.00001',
  'source artifact hash mismatch':r=>r.source.sourceBinding.structuredArtifactsSha256='a'.repeat(64),
  'made up version warning':r=>r.source.sourceVersionWarning='Current official PDF returned HTTP 404.',
  'unknown source type':r=>r.source.kind='official-url-only',
  'dependency drift':r=>r.classificationRecord.fingerprintInputs.identityImplementationSha256='a'.repeat(64),
  'review budget drift':r=>r.classificationRecord.fingerprintInputs.reviewMaxTokens=4000,
  'projection drift':r=>r.classificationRecord.fingerprintInputs.projectionSha256='a'.repeat(64),
  'unknown fingerprint field':r=>r.classificationRecord.fingerprintInputs.unverified=true,
  'raw model duplicate key':r=>r.classificationRecord.modelResponseText=r.classificationRecord.modelResponseText.replace('"researchType":"science"','"researchType":"engineering","researchType":"science"'),
  'raw model unknown key':r=>r.classificationRecord.modelResponseText=JSON.stringify({...JSON.parse(r.classificationRecord.modelResponseText),extra:'unchecked'}),
  'unknown snippet':r=>r.quoteSelections[0].evidenceId='s99999',
  'UTF16 quote end drift':r=>r.quoteSelections[0].quoteEnd--,
  'missing type evidence':r=>delete r.typeEvidence,
  'false acknowledgement':r=>r.classificationRecord.reviewProof.response.verifiedChecks.methodRole=false,
  'extra review field':r=>r.classificationRecord.reviewProof.unsignedExtra='bad',
  'forged label':r=>r.concepts[0].label='New unsupported label',
  'inactive method':r=>r.primaryMethodId='method.unknown',
 };
 for(const [name,mutate]of Object.entries(mutations)){
  const f=fixture(),r=f.record;mutate(r);const c=r.classificationRecord;
  if(c.fingerprintInputs){c.fingerprint=api.stableHash(c.fingerprintInputs);r.requestStageFingerprint=c.fingerprint;}
  if(c.reviewProof){c.reviewProofSha256=api.stableHash(c.reviewProof);r.reviewProofSha256=c.reviewProofSha256;}
  if(c.modelResponseText)c.modelResponseSha256=digest(c.modelResponseText);
  seal(r);assert.throws(()=>api.validatePublicRecord(r,f.snapshot),undefined,name);
 }
 const f=fixture({researchType:'position',na:true});f.record.classificationRecord.concepts.push(fixture().record.evidence[1]);seal(f.record);assert.throws(()=>api.validatePublicRecord(f.record,f.snapshot));
});
test('strict public source replay preserves all actual retained v1/canonical descriptors without upgrading their classifications',()=>{
 const records=JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data/taxonomy-history.json'),'utf8')).records;
 const descriptor=require('../scripts/lib/source-descriptor-proof');
 let checked=0;
 for(const r of Object.values(records)){assert.equal(descriptor.validateSourceDescriptor(r.source),true,r.paperId);checked++;}
 assert.ok(checked>=2486);
});
test('real build entry rejects malformed v2 before Hugo or destination changes; page byte drift fails preflight',t=>{
 const temporary=fs.mkdtempSync(path.join(os.tmpdir(),'blog-v2-build-gate-'));t.after(()=>fs.rmSync(temporary,{recursive:true,force:true}));
 fs.mkdirSync(path.join(temporary,'data'));fs.mkdirSync(path.join(temporary,'content/posts'),{recursive:true});fs.mkdirSync(path.join(temporary,'public'));
 const page='---\ntitle: Synthetic public gate\n---\nSynthetic test body.\n';fs.writeFileSync(path.join(temporary,'content/posts/synthetic.md'),page);
 fs.writeFileSync(path.join(temporary,'data/taxonomy-catalog.json'),JSON.stringify(catalog));fs.writeFileSync(path.join(temporary,'public/unchanged.txt'),'DO NOT MODIFY');
 const f=fixture();f.record.pageSha256=digest(page);f.record.bodySha256=digest('Synthetic test body.\n');seal(f.record);
 fs.writeFileSync(path.join(temporary,'data/taxonomy-history-v2.json'),JSON.stringify({contract:'historical-source-taxonomy-supplement-v2',records:{'content/posts/synthetic.md':f.record}}));
 assert.equal(require('../scripts/verify-tags-v2').verify(temporary).records,1);
 f.record.classificationRecord.fingerprintInputs.reviewTemperature=0.7;f.record.classificationRecord.fingerprint=api.stableHash(f.record.classificationRecord.fingerprintInputs);f.record.requestStageFingerprint=f.record.classificationRecord.fingerprint;seal(f.record);
 fs.writeFileSync(path.join(temporary,'data/taxonomy-history-v2.json'),JSON.stringify({contract:'historical-source-taxonomy-supplement-v2',records:{'content/posts/synthetic.md':f.record}}));
 const result=spawnSync(process.execPath,[path.resolve(__dirname,'../scripts/build-site.js')],{cwd:temporary,encoding:'utf8',env:{...process.env,PATH:''}});
 assert.notEqual(result.status,0);assert.match(result.stderr,/请求指纹字段漂移/);assert.doesNotMatch(result.stderr,/spawnSync hugo/);assert.equal(fs.readFileSync(path.join(temporary,'public/unchanged.txt'),'utf8'),'DO NOT MODIFY');
 const clean=fixture();clean.record.pageSha256=digest(page);clean.record.bodySha256=digest('Synthetic test body.\n');seal(clean.record);
 fs.writeFileSync(path.join(temporary,'data/taxonomy-history-v2.json'),JSON.stringify({contract:'historical-source-taxonomy-supplement-v2',records:{'content/posts/synthetic.md':clean.record}}));
 fs.appendFileSync(path.join(temporary,'content/posts/synthetic.md'),'Changed body.\n');assert.throws(()=>require('../scripts/verify-tags-v2').verify(temporary),/当前页面\/正文SHA漂移/);
});
