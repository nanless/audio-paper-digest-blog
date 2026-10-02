'use strict';
// Synthetic decisions/reviews with a retained public dependency map. No model
// acceptance or source admission is inferred from this transport-only fixture.
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os'),{execFileSync}=require('node:child_process');
const api=require('../scripts/lib/fullsite-taxonomy-proof'),shared=require('../scripts/lib/taxonomy-classification-v3-proof'),cases=require('./fixtures/fullsite-taxonomy-public'),base=require('./fixtures/classification-v3-public');
const dependencies=require('./fixtures/fullsite-r4-installed-dependencies.json');
const registrySha='10653fa103f93ff1a894c42a22c2eb91d83b7bb14e57bd92d1a337ce00a5eb72',wholeDeps='2ddcc46252f270596cbb4b533ad33237ecb4d6286ad2accc86bf4e567462ec9f',implementationPath='scripts/fullsite-taxonomy-r4/fullsite-taxonomy-audit-classification.js';
function fixture(){
 const f=cases.fixture(),a=Object.values(f.history.classificationRecords)[0],c=a.classificationRecord;
 f.snapshot=JSON.parse(fs.readFileSync(path.join(__dirname,'../data/taxonomy-catalog.json'))).snapshots.find(s=>s.registrySha256===registrySha);
 a.protectedDependencies=structuredClone(dependencies);c.protectedDependencies=a.protectedDependencies.native;
 c.registrySha256=registrySha;Object.assign(c.fingerprintInputs,{projectionSha256:shared.projectionHash(f.snapshot),implementationSha256:c.protectedDependencies.files[implementationPath]});
 for(const[key,name]of Object.entries({snippetImplementationSha256:'source-evidence-snippets-v3',identityImplementationSha256:'historical-source-identity-supplement',schedulerImplementationSha256:'source-classification-scheduler',failureImplementationSha256:'source-classification-failures'}))c.fingerprintInputs[key]=c.protectedDependencies.files['scripts/lib/'+name+'.js'];
 base.sync({classificationRecord:c});for(const p of Object.values(f.history.records)){p.registrySha256=registrySha;p.registryVersion=f.snapshot.registryVersion;}cases.reseal(f);
 Object.assign(f.profile,{registrySha256:registrySha,registryVersion:f.snapshot.registryVersion,projectionSha256:shared.projectionHash(f.snapshot),snapshotSha256:api.sha(JSON.stringify(shared.canonical(f.snapshot))+'\n'),implementationSha256:c.fingerprintInputs.implementationSha256,implementationFilePath:implementationPath,nativeDependencySha256:c.protectedDependencySha256,auditDependencySha256:wholeDeps});return f;
}
function replay(f){api.parseSupplement(f.history);for(const[key,p]of Object.entries(f.history.records))shared.validateSyntheticFullsiteFixture(p,key,f.history.classificationRecords[p.classificationRef],f.snapshot,f.profile,f.context);return true;}
function rows(){return [
 ['explicit synthetic new namespace with exact retained map',()=>{},true],
 ['new namespace missing approved implementation path',f=>delete f.profile.implementationFilePath,false],
 ['unapproved implementation path traversal',f=>f.profile.implementationFilePath='scripts/lib/../fullsite-taxonomy-r4/fullsite-taxonomy-audit-classification.js',false],
 ['unapproved other full path',f=>f.profile.implementationFilePath='scripts/fullsite-taxonomy-r5/fullsite-taxonomy-audit-classification.js',false],
 ['R4 implementation mixed with old default',f=>{const a=Object.values(f.history.classificationRecords)[0];a.classificationRecord.fingerprintInputs.implementationSha256=a.classificationRecord.protectedDependencies.files['scripts/lib/historical-source-taxonomy-classification-v3.js'];f.profile.implementationSha256=a.classificationRecord.fingerprintInputs.implementationSha256;},false],
 ['missing own runtime profile after full rehash',f=>delete Object.values(f.history.classificationRecords)[0].protectedDependencies.own['fullsite-taxonomy-audit-runtime-profile.js'],false],
 ['unknown own entry after full rehash',f=>Object.values(f.history.classificationRecords)[0].protectedDependencies.own['fullsite-taxonomy-audit-unapproved.js']=api.sha('unapproved'),false],
 ['changed own map cannot borrow approved whole digest',f=>Object.values(f.history.classificationRecords)[0].protectedDependencies.own['fullsite-taxonomy-audit-runtime-profile.js']=api.sha('changed'),false],
 ['required new implementation missing with null fingerprint',f=>{const c=Object.values(f.history.classificationRecords)[0].classificationRecord;delete c.protectedDependencies.files[implementationPath];c.fingerprintInputs.implementationSha256=null;f.profile.implementationSha256=null;},false],
 ].map(([name,mutate,expected])=>{const f=fixture();mutate(f);cases.reseal(f);return{name,f,expected};});}
test('R4 transport and implementation gates agree in JS/Hugo without approving synthetic production',t=>{
 assert.equal(shared.stableHash(dependencies),wholeDeps);assert.equal(Object.keys(dependencies.native.files).length,123);assert.equal(Object.keys(dependencies.source.files).length,115);assert.equal(Object.keys(dependencies.own).length,12);
 const input=rows();for(const{name,f,expected}of input){let valid;try{valid=replay(f);}catch{valid=false;}assert.equal(valid,expected,name);const[key,p]=Object.entries(f.history.records)[0];assert.throws(()=>api.validatePublicRecord(p,key,f.history.classificationRecords[p.classificationRef],f.snapshot,f.context),undefined,'no unapproved actual profile');}
 const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'fullsite-r4-hugo-'));t.after(()=>fs.rmSync(tmp,{recursive:true,force:true}));fs.mkdirSync(path.join(tmp,'data'));fs.mkdirSync(path.join(tmp,'layouts'));
 fs.cpSync(path.join(__dirname,'../layouts/partials'),path.join(tmp,'layouts/partials'),{recursive:true});for(const n of ['taxonomy-catalog','taxonomy-registry'])fs.copyFileSync(path.join(__dirname,'../data',n+'.json'),path.join(tmp,'data',n+'.json'));
 const data=input.map(({name,f,expected})=>{const[key,p]=Object.entries(f.history.records)[0];return{name,expected,input:{record:p,auditRecord:f.history.classificationRecords[p.classificationRef],pagePath:key,fixtureProfile:f.profile,fixtureAdmissionBytes:f.admissionBytes,fixtureSourceBytes:f.sourceBytes,syntheticFullsiteFixture:true}};});
 fs.writeFileSync(path.join(tmp,'data/cases.json'),JSON.stringify(data));fs.writeFileSync(path.join(tmp,'hugo.yaml'),'baseURL: https://example.test/\ndisableKinds: [section,taxonomy,term,RSS,sitemap,robotsTXT,"404"]\n');
 fs.writeFileSync(path.join(tmp,'layouts/index.html'),'[{{ range $i,$case := hugo.Data.cases }}{{ if $i }},{{ end }}{{ $r := partial "taxonomy_fullsite_projection.html" $case.input }}{{ dict "name" $case.name "valid" (partial "taxonomy_classification_v3_proof.html" (dict "record" $r "fullsiteEnvelope" $case.input)) | jsonify | safeHTML }}{{ end }}]');
 execFileSync('hugo',['--source',tmp,'--noBuildLock','--panicOnWarning'],{stdio:'pipe'});const got=JSON.parse(fs.readFileSync(path.join(tmp,'public/index.html')));for(let i=0;i<data.length;i++)assert.equal(got[i].valid,data[i].expected,data[i].name);
 const old=cases.fixture();assert.equal(replay(old),true);const f=fixture(),[key,page]=Object.entries(f.history.records)[0];assert.throws(()=>api.approvedProfile(page,f.history.classificationRecords[page.classificationRef],require('../scripts/lib/fullsite-taxonomy-profiles').profiles,f.context),/root-approved/);
});
test('378 appends immutable definitions and presentation without replacing issued374 or canonical262',()=>{
 const data=n=>JSON.parse(fs.readFileSync(path.join(__dirname,'../data',n+'.json'))),catalog=data('taxonomy-catalog'),current=data('taxonomy-registry'),policy=data('taxonomy-presentation-policy');const previous=catalog.snapshots.find(s=>s.concepts.length===374),next=catalog.snapshots.find(s=>s.registrySha256===registrySha);
 assert.equal(current.concepts.length,378);assert.equal(next.concepts.length,378);assert.deepEqual(next.concepts.slice(0,374),previous.concepts);assert.equal(shared.projectionHash(next),'b2f9b489273a1f3f62346420f032becf681042252aef9c9ced17a0b4234043d2');assert.equal(policy.preferredRegistrySha256,registrySha);assert.equal(catalog.snapshots.find(s=>s.concepts.length===262).registryVersion,'paper-taxonomy-v1');
});
