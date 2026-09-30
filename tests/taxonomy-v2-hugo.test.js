'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os'),{execFileSync}=require('node:child_process');
const {fixture,seal,withDependencies,digest}=require('./fixtures/taxonomy-v2-public'),api=require('../scripts/lib/taxonomy-v2-proof');
const h113=require('./fixtures/historical-v2-h113-dependencies.json');
test('Hugo independently rejects role, raw response, source and complete fingerprint drift in synthetic public v2 records',t=>{
 const repo=path.resolve(__dirname,'..'),temporary=fs.mkdtempSync(path.join(os.tmpdir(),'blog-v2-hugo-'));t.after(()=>fs.rmSync(temporary,{recursive:true,force:true}));
 fs.mkdirSync(path.join(temporary,'data'));fs.mkdirSync(path.join(temporary,'layouts'));
 fs.cpSync(path.join(repo,'layouts/partials'),path.join(temporary,'layouts/partials'),{recursive:true});
 for(const name of ['taxonomy-catalog','taxonomy-registry'])fs.copyFileSync(path.join(repo,'data',name+'.json'),path.join(temporary,'data',name+'.json'));
 const cases=[];
 for(const registryVersion of ['paper-taxonomy-v1','paper-taxonomy-v2'])for(const config of [{},{researchType:'engineering'},{researchType:'position',na:true},{researchType:'experience',na:true}])cases.push({name:registryVersion+' '+config.researchType,record:fixture({...config,registryVersion}).record,expected:true});
 for(const researchType of ['position','experience'])for(const fake of [false,true]){const r=fixture({researchType,na:true}).record;if(fake)r.classificationRecord.naFullSourceEvidence={sampling:'full-source',sourceTextSha256:'a'.repeat(64),snippets:[]};else delete r.classificationRecord.naFullSourceEvidence;seal(r);cases.push({name:'closed NA '+researchType+' guessed='+fake,record:r,expected:false});}
 cases.push({name:'actual H113 retained implementation map; synthetic decision',record:withDependencies(fixture().record,h113),expected:true});
 for(const name of ['other/source.js','/scripts/source.py','scripts/../secret.js','manual/scripts/../../secret.py','scripts/.env','scripts/secrets.json','scripts/.hidden.py','scripts/source.txt','scripts//source.js']){
  const dependencies=structuredClone(h113);dependencies.files[name]=digest('synthetic forbidden dependency');cases.push({name:'reject dependency '+name,record:withDependencies(fixture().record,dependencies),expected:false});
 }
 const badDependencies=structuredClone(h113);badDependencies.files['scripts/extra.py']='not-a-sha';cases.push({name:'reject dependency invalid SHA',record:withDependencies(fixture().record,badDependencies),expected:false});
 const negative={
  'science task contamination':r=>r.primaryTaskLabel='虚构任务',
  'raw model type drift':r=>{const c=r.classificationRecord,x=JSON.parse(c.modelResponseText);x.researchType='engineering';c.modelResponseText=JSON.stringify(x);c.modelResponseSha256=require('./fixtures/taxonomy-v2-public').digest(c.modelResponseText);},
  'injected quote drift':r=>{const c=r.classificationRecord,x=JSON.parse(c.responseText);x.typeEvidence.quote+=' invented';c.responseText=JSON.stringify(x);c.responseSha256=require('./fixtures/taxonomy-v2-public').digest(c.responseText);},
  'unapproved source warning':r=>r.source.sourceVersionWarning='Unverified current 404 claim',
  'fingerprint dependency mismatch':r=>r.classificationRecord.fingerprintInputs.identityImplementationSha256='a'.repeat(64),
  'prompt projection mismatch':r=>r.classificationRecord.fingerprintInputs.projectionSha256='a'.repeat(64),
  'review model mismatch':r=>r.classificationRecord.reviewProof.model='other-model',
  'extra review key':r=>r.classificationRecord.reviewProof.notReviewed='wrong',
  'unknown domain':r=>r.domainScope='audio-adjacent',
 };
 for(const [name,mutate]of Object.entries(negative)){const r=fixture().record;mutate(r);const c=r.classificationRecord;c.fingerprint=api.stableHash(c.fingerprintInputs);r.requestStageFingerprint=c.fingerprint;c.reviewProofSha256=api.stableHash(c.reviewProof);r.reviewProofSha256=c.reviewProofSha256;seal(r);cases.push({name,record:r,expected:false});}
 fs.writeFileSync(path.join(temporary,'data/v2-cases.json'),JSON.stringify(cases));
 fs.writeFileSync(path.join(temporary,'hugo.yaml'),'baseURL: https://example.test/\nbuildFuture: true\ndisableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\n');
 fs.writeFileSync(path.join(temporary,'layouts/index.html'),'[{{ range $i, $case := index hugo.Data "v2-cases" }}{{ if $i }},{{ end }}{{ dict "name" $case.name "accepted" (partial "taxonomy_source_only_v2_proof.html" $case.record) | jsonify | safeHTML }}{{ end }}]');
 execFileSync('hugo',['--source',temporary,'--noBuildLock','--panicOnWarning'],{stdio:'pipe'});
 const result=JSON.parse(fs.readFileSync(path.join(temporary,'public/index.html')));
 result.forEach((r,i)=>assert.equal(r.accepted,cases[i].expected,r.name));
});
