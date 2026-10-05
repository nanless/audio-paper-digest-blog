'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),os=require('node:os'),path=require('node:path'),{spawnSync,execFileSync}=require('node:child_process');
const api=require('../scripts/lib/fullsite-taxonomy-proof'),shared=require('../scripts/lib/taxonomy-classification-v3-proof'),cases=require('./fixtures/fullsite-taxonomy-public');
function replay(f){api.parseSupplement(f.history);for(const [key,page]of Object.entries(f.history.records))assert.equal(shared.validateSyntheticFullsiteFixture(page,key,f.history.classificationRecords[page.classificationRef],f.snapshot,f.profile,f.context),true);}
test('explicit synthetic shared paper replay preserves both exact current guides; no production approval',()=>{
 const f=cases.fixture();replay(f);
 for(const [key,page]of Object.entries(f.history.records)){const a=f.history.classificationRecords[page.classificationRef];assert.throws(()=>api.validatePublicRecord(page,key,a,f.snapshot,f.context),/root-approved/);assert.throws(()=>shared.validatePublicRecord({...page,classificationRecord:a.classificationRecord,classificationContract:shared.CONTRACT},f.snapshot));}
 assert.equal(require('../scripts/lib/fullsite-taxonomy-profiles').profiles.some(p=>p.implementationSha256===api.sha('SYNTHETIC issuer')),false);
 const old=require('./fixtures/classification-v3-public'),generic=old.fixture({mechanism:false});generic.record.classificationRecord.source.fullsiteSourceAuthority=Object.values(f.history.classificationRecords)[0].classificationRecord.source.fullsiteSourceAuthority;old.sync(generic.record);assert.throws(()=>shared.validateSyntheticFixture(generic.record,generic.snapshot),/独立namespace/);
});
test('complete rehash cannot change admitted page, source, authority, raw review or role',()=>{
 const mutations={
  'page wrong reference':f=>Object.values(f.history.records)[0].classificationRef='arxiv:2605.99999',
  'page stale full SHA':f=>Object.values(f.history.records)[0].pageSha256=api.sha('changed'),
  'page role differs':f=>Object.values(f.history.records)[0].domainScope='out-of-domain',
  'outer invented field':f=>Object.values(f.history.classificationRecords)[0].invented=true,
  'native invented field':f=>Object.values(f.history.classificationRecords)[0].classificationRecord.invented=true,
  'private authority opaque drift':f=>Object.values(f.history.classificationRecords)[0].fingerprintInputs.paperAuthoritySha256=api.sha('other paper'),
  'descriptor wrong source text SHA':f=>Object.values(f.history.classificationRecords)[0].classificationRecord.source.textSha256=api.sha('other text'),
  'descriptor wrong source PDF SHA':f=>Object.values(f.history.classificationRecords)[0].classificationRecord.source.pdfSha256=api.sha('other PDF'),
  'descriptor official URL changed':f=>Object.values(f.history.classificationRecords)[0].classificationRecord.source.sourceUrl='https://arxiv.org/abs/2605.99999',
  'descriptor current identity page missing':f=>Object.values(f.history.classificationRecords)[0].classificationRecord.source.currentPageSourceIdentity.pages.pop(),
  'descriptor private paths leaked':f=>Object.values(f.history.classificationRecords)[0].classificationRecord.source.sourceTitle='/Users/synthetic/private.txt',
  'independent review gate false':f=>Object.values(f.history.classificationRecords)[0].classificationRecord.reviewProof.response.verifiedChecks.primaryResearchRole=false,
  'mixed outer/native dependency map':f=>Object.values(f.history.classificationRecords)[0].protectedDependencies.native.files['scripts/lib/source-classification-scheduler.js']=api.sha('unapproved'),
  'source implementation removed':f=>delete Object.values(f.history.classificationRecords)[0].protectedDependencies.source,
  'original extraction authority omitted':f=>delete Object.values(f.history.classificationRecords)[0].protectedDependencies.own['fullsite-taxonomy-audit-original-extraction.js'],
 };
 for(const[name,mutate]of Object.entries(mutations)){const f=cases.fixture();mutate(f);cases.reseal(f);assert.throws(()=>replay(f),undefined,name);}
});
test('incomplete multi-guide projection, orphan shared object, duplicate member, traversal and unknown packing reject',()=>{
 for(const mutate of [f=>delete f.history.records[Object.keys(f.history.records)[0]],f=>f.history.classificationRecords['arxiv:2605.99999']=Object.values(f.history.classificationRecords)[0],f=>Object.values(f.history.classificationRecords)[0].planAdmission.pages.push(Object.values(f.history.classificationRecords)[0].planAdmission.pages[0]),f=>{const key=Object.keys(f.history.records)[0];f.history.records['content/posts/../synthetic.md']=f.history.records[key];delete f.history.records[key];},f=>f.history.dependenciesProfiles={}]){const f=cases.fixture();mutate(f);cases.reseal(f);assert.throws(()=>api.parseSupplement(f.history));}
});
test('new namespace cannot obtain approval through old issuer tuple or duplicate new tuple',()=>{
 const f=cases.fixture(),[key,page]=Object.entries(f.history.records)[0],audit=f.history.classificationRecords[page.classificationRef];
 assert.throws(()=>api.approvedProfile(page,audit,require('../scripts/lib/taxonomy-v3-profiles').profiles),/root-approved/);
 assert.throws(()=>api.approvedProfile(page,audit,[f.profile,f.profile]),/unique/);
 const wrong={...f.profile,implementationSha256:api.sha('unapproved')};assert.throws(()=>api.approvedProfile(page,audit,[wrong]));
});
test('public admission replays exact ordered whole scope and rejects duplicated or forged members',()=>{
 const f=cases.fixture(),audit=Object.values(f.history.classificationRecords)[0],a=audit.planAdmission;
 const projection={contract:'fullsite-current-page-public-admission-projection-v1',manifestSha256:a.manifestSha256,scopeSha256:a.scopeSha256,blogHead:a.blogHead,blogTree:a.blogTree,paperCount:1,pageCount:2,papers:[{paperId:a.paperId,paperAuthoritySha256:audit.fingerprintInputs.paperAuthoritySha256,sourceAuthoritySha256:a.sourceAuthoritySha256,pages:a.pages}]};
 const admission=require('../scripts/lib/fullsite-admission-proof'),serialize=v=>Buffer.from(JSON.stringify(v)+'\n');
 const bytes=serialize(projection);assert.equal(admission.parse(bytes,api.sha(bytes)).projection.pageCount,2);
 assert.throws(()=>admission.parse(bytes,api.sha('other root-approved whole bytes')),/physical whole/);
 for(const mutate of [p=>p.papers[0].pages.reverse(),p=>p.papers.push(p.papers[0]),p=>p.papers[0].privateAuthorityPath='/Users/synthetic/plan.json',p=>p.papers[0].pages[1].pageKey=p.papers[0].pages[0].pageKey,p=>p.pageCount=3]){const p=JSON.parse(JSON.stringify(projection));mutate(p);const b=serialize(p);assert.throws(()=>admission.parse(b,api.sha(b)));}
});
test('packed public reader reconstructs the complete original inner/outer/page proofs and rejects refs-only shortcuts',()=>{
 const pack=require('../scripts/lib/fullsite-taxonomy-pack'),f=cases.packed(),result=pack.reconstruct(f.manifest,()=>f.bytes);
 assert.equal(shared.stableHash(result),shared.stableHash(f.history));
 const mutations={
  'unknown packing':f=>f.manifest.packing='refs-exist-is-valid',
  'traversal':f=>f.manifest.shards[0].path='fullsite-taxonomy/../part.json',
  'original raw classification changed':f=>f.shard.papers[0].classificationRecord.modelResponseText+=' ',
  'unknown native dep ref':f=>f.shard.papers[0].classificationRecord.protectedDependenciesRef=api.sha('unknown'),
  'reinserted replaced inner deps':f=>f.shard.papers[0].classificationRecord.protectedDependencies={},
  'mixed original issuer source ref':f=>Object.values(f.manifest.dependencyProfiles.issuers)[0].sourceRef=Object.keys(f.manifest.dependencyProfiles.native)[0],
  'orphan dependency':f=>{const value={contract:'synthetic orphan',files:{}};f.manifest.dependencyProfiles.source[shared.stableHash(value)]=value;},
  'missing guide':f=>delete f.shard.papers[0].pages[Object.keys(f.shard.papers[0].pages)[0]],
  'wrong shared classification paper':f=>f.shard.papers[0].auditRecord.classificationRecordRef='arxiv:2605.99999',
  'duplicate whole paper':f=>f.shard.papers.push(f.shard.papers[0]),
 };
 for(const[name,mutate]of Object.entries(mutations)){
  const f=cases.packed();mutate(f);const bytes=Buffer.from(JSON.stringify(f.shard)+'\n'),descriptor=f.manifest.shards[0];descriptor.bytes=bytes.length;descriptor.sha256=api.sha(bytes);if(name!=='traversal')descriptor.path='fullsite-taxonomy/part-0001-'+descriptor.sha256.slice(0,12)+'.json';f.manifest.totalBytes=bytes.length;
  assert.throws(()=>pack.reconstruct(f.manifest,()=>bytes),undefined,name);
 }
 assert.throws(()=>pack.reconstruct(f.manifest,()=>Buffer.from('changed physical bytes')),/actual bytes/);
});
test('actual build entry rejects new sidecar before Hugo and leaves prior output bytes untouched',t=>{
 const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'fullsite-public-build-'));t.after(()=>fs.rmSync(tmp,{recursive:true,force:true}));fs.mkdirSync(path.join(tmp,'data'));fs.mkdirSync(path.join(tmp,'public'));fs.writeFileSync(path.join(tmp,'public/sentinel.txt'),'unchanged');
 fs.writeFileSync(path.join(tmp,'data/fullsite-taxonomy-history.json'),JSON.stringify(cases.fixture().history));fs.copyFileSync(path.join(__dirname,'../data/taxonomy-catalog.json'),path.join(tmp,'data/taxonomy-catalog.json'));
 const run=spawnSync(process.execPath,[path.join(__dirname,'../scripts/build-site.js')],{cwd:tmp,encoding:'utf8'});assert.notEqual(run.status,0);assert.match(run.stderr,/root-approved/);assert.equal(fs.readFileSync(path.join(tmp,'public/sentinel.txt'),'utf8'),'unchanged');assert.deepEqual(fs.readdirSync(path.join(tmp,'public')),['sentinel.txt']);
});
test('Hugo independently replays the shared inner gate and keeps production Page.Store closed',t=>{
 const repo=path.resolve(__dirname,'..'),tmp=fs.mkdtempSync(path.join(os.tmpdir(),'fullsite-public-hugo-'));t.after(()=>fs.rmSync(tmp,{recursive:true,force:true}));fs.mkdirSync(path.join(tmp,'data'));fs.mkdirSync(path.join(tmp,'layouts'));
 fs.cpSync(path.join(repo,'layouts/partials'),path.join(tmp,'layouts/partials'),{recursive:true});for(const name of ['taxonomy-catalog','taxonomy-registry'])fs.copyFileSync(path.join(repo,'data',name+'.json'),path.join(tmp,'data',name+'.json'));
 const rows=[];
 for(const[name,mutate,expected]of [
  ['synthetic complete source-bound audit',()=>{},true],
  ['wrong opaque private authority',f=>Object.values(f.history.classificationRecords)[0].fingerprintInputs.paperAuthoritySha256=api.sha('other authority'),false],
  ['re-signed wrong source text',f=>Object.values(f.history.classificationRecords)[0].classificationRecord.source.textSha256=api.sha('other text'),false],
  ['re-signed review false',f=>Object.values(f.history.classificationRecords)[0].classificationRecord.reviewProof.response.verifiedChecks.methodRole=false,false],
  ['wrong current source page',f=>Object.values(f.history.classificationRecords)[0].classificationRecord.source.currentPageSourceIdentity.pages.pop(),false],
  ['unknown native classification field',f=>Object.values(f.history.classificationRecords)[0].classificationRecord.invented=true,false],
 ]){const f=cases.fixture();mutate(f);cases.reseal(f);const[key,page]=Object.entries(f.history.records)[0],audit=f.history.classificationRecords[page.classificationRef];rows.push({name,expected,input:{record:page,auditRecord:audit,pagePath:key,fixtureProfile:f.profile,fixtureAdmissionBytes:f.admissionBytes,fixtureSourceBytes:f.sourceBytes,syntheticFullsiteFixture:true}});}
 fs.writeFileSync(path.join(tmp,'data/cases.json'),JSON.stringify(rows));fs.writeFileSync(path.join(tmp,'data/fullsite-taxonomy-history.json'),JSON.stringify(cases.fixture().history));
 fs.mkdirSync(path.join(tmp,'content/posts'),{recursive:true});for(const key of Object.keys(cases.fixture().history.records))fs.writeFileSync(path.join(tmp,key),cases.fixture().text);
 fs.writeFileSync(path.join(tmp,'hugo.yaml'),'baseURL: https://example.test/\ndisableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\n');
 fs.writeFileSync(path.join(tmp,'layouts/index.html'),'[{{ range $i,$case := hugo.Data.cases }}{{ if $i }},{{ end }}{{ $r := partial "tag_fullsite_projection.html" $case.input }}{{ dict "name" $case.name "fixture" (partial "tag_classification_v3_proof.html" (dict "record" $r "fullsiteEnvelope" $case.input)) "production" (partial "tag_fullsite_envelope.html" (dict "record" $case.input.record "auditRecord" $case.input.auditRecord "pagePath" $case.input.pagePath)).valid | jsonify | safeHTML }}{{ end }}]');
 fs.mkdirSync(path.join(tmp,'layouts/_default'));fs.writeFileSync(path.join(tmp,'layouts/_default/single.html'),'{{ dict "proof" (partial "tag_fullsite_page_proof.html" .) "second" (partial "tag_fullsite_page_proof.html" .) | jsonify | safeHTML }}');
 execFileSync('hugo',['--source',tmp,'--noBuildLock','--panicOnWarning'],{stdio:'pipe'});
 const result=JSON.parse(fs.readFileSync(path.join(tmp,'public/index.html')));for(let i=0;i<rows.length;i++){assert.equal(result[i].fixture,rows[i].expected,rows[i].name);assert.equal(result[i].production,false,rows[i].name);}
 for(const slug of ['synthetic-audit-1','synthetic-audit-2'])assert.deepEqual(JSON.parse(fs.readFileSync(path.join(tmp,'public/posts',slug,'index.html'))),{proof:{},second:{}});
});
test('Hugo packed loader independently reconstructs original proofs and refuses malformed complete transports',t=>{
 const repo=path.resolve(__dirname,'..'),tmp=fs.mkdtempSync(path.join(os.tmpdir(),'fullsite-packed-hugo-'));t.after(()=>fs.rmSync(tmp,{recursive:true,force:true}));
 fs.mkdirSync(path.join(tmp,'data'));fs.mkdirSync(path.join(tmp,'layouts'));fs.mkdirSync(path.join(tmp,'static/fullsite-taxonomy'),{recursive:true});
 fs.cpSync(path.join(repo,'layouts/partials'),path.join(tmp,'layouts/partials'),{recursive:true});
 fs.writeFileSync(path.join(tmp,'hugo.yaml'),'baseURL: https://example.test/\ndisableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\n');
 fs.writeFileSync(path.join(tmp,'layouts/index.html'),'{{ $h := partial "tag_fullsite_history.html" . }}{{ $h | partial "research_canonical_json.html" | safeHTML }}');
 const mutations={
  'complete original':()=>{},
  'invented inner field':f=>f.shard.papers[0].classificationRecord.invented=true,
  'wrong page role and original proof':f=>Object.values(f.shard.papers[0].pages)[0].domainScope='out-of-domain',
  'raw review changed':f=>f.shard.papers[0].classificationRecord.reviewResponseText+=' ',
  'mixed dependency tuple':f=>Object.values(f.manifest.dependencyProfiles.issuers)[0].sourceRef=Object.keys(f.manifest.dependencyProfiles.native)[0],
  'orphan dependency':f=>{const d={contract:'unapproved',files:{}};f.manifest.dependencyProfiles.source[shared.stableHash(d)]=d;},
  'missing guide':f=>delete f.shard.papers[0].pages[Object.keys(f.shard.papers[0].pages)[0]],
  'duplicate paper':f=>f.shard.papers.push(f.shard.papers[0]),
  'traversal descriptor':f=>f.manifest.shards[0].path='fullsite-taxonomy/../outside.json',
  'unknown packing':f=>f.manifest.packing='unapproved-ref-packing',
  'string count':f=>f.manifest.recordCount='2',
  'noninteger count':f=>f.manifest.paperCount=1.1,
 };
 for(const[name,mutate]of Object.entries(mutations)){
  const f=cases.packed();mutate(f);const b=Buffer.from(JSON.stringify(f.shard)+'\n'),d=f.manifest.shards[0];d.sha256=api.sha(b);d.bytes=b.length;if(name!=='traversal descriptor')d.path='fullsite-taxonomy/part-0001-'+d.sha256.slice(0,12)+'.json';f.manifest.totalBytes=b.length;
  fs.writeFileSync(path.join(tmp,'data/fullsite-taxonomy-history.json'),JSON.stringify(f.manifest));fs.writeFileSync(path.join(tmp,'static/fullsite-taxonomy','part-0001-'+d.sha256.slice(0,12)+'.json'),b);
  execFileSync('hugo',['--source',tmp,'--noBuildLock','--panicOnWarning'],{stdio:'pipe'});const result=JSON.parse(fs.readFileSync(path.join(tmp,'public/index.html')));
  if(name==='complete original'){const {admissionProjectionSha256,sourceProjectionSha256,...history}=result;assert.equal(admissionProjectionSha256,f.profile.admissionProjectionSha256);assert.equal(sourceProjectionSha256,f.profile.sourceProjectionSha256);assert.equal(shared.stableHash(history),shared.stableHash(f.history));}else assert.deepEqual(result,{},name);
 }
});
test('explicit test-only issuer fixture reaches Page.Store, typed HTML, citation and library export without rewriting guide bytes',t=>{
 const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'fullsite-typed-display-'));t.after(()=>fs.rmSync(tmp,{recursive:true,force:true}));const repo=path.resolve(__dirname,'..'),f=cases.packed();
 fs.mkdirSync(path.join(tmp,'data'));fs.mkdirSync(path.join(tmp,'layouts/_default'),{recursive:true});fs.mkdirSync(path.join(tmp,'static/fullsite-taxonomy'),{recursive:true});fs.mkdirSync(path.join(tmp,'content/posts'),{recursive:true});
 fs.cpSync(path.join(repo,'layouts/partials'),path.join(tmp,'layouts/partials'),{recursive:true});for(const name of ['taxonomy-catalog','taxonomy-registry'])fs.copyFileSync(path.join(repo,'data',name+'.json'),path.join(tmp,'data',name+'.json'));
 // This copy-only override is a visibly synthetic fixture authority. Actual
 // production profiles are still empty; no sample is installed in repo data.
 fs.writeFileSync(path.join(tmp,'layouts/partials/tag_fullsite_profiles.html'),'{{ return (slice hugo.Data.testIssuer) }}');fs.writeFileSync(path.join(tmp,'data/testIssuer.json'),JSON.stringify(f.profile));
 fs.writeFileSync(path.join(tmp,'data/fullsite-taxonomy-history.json'),JSON.stringify(f.manifest));fs.writeFileSync(path.join(tmp,'data/fullsite-taxonomy-admission.json'),f.admissionBytes);fs.writeFileSync(path.join(tmp,'data/fullsite-taxonomy-sources.json'),f.sourceBytes);fs.writeFileSync(path.join(tmp,'static',f.manifest.shards[0].path),f.bytes);
 for(const key of Object.keys(f.history.records))fs.writeFileSync(path.join(tmp,key),f.text);
 fs.copyFileSync(path.join(repo,'layouts/_default/index.json'),path.join(tmp,'layouts/_default/index.json'));
 fs.writeFileSync(path.join(tmp,'hugo.yaml'),'baseURL: https://example.test/blog/\noutputs:\n  home: [HTML, JSON]\ndisableKinds: [section,taxonomy,term,RSS,sitemap,robotsTXT,"404"]\n');fs.writeFileSync(path.join(tmp,'layouts/index.html'),'');
 fs.writeFileSync(path.join(tmp,'layouts/_default/single.html'),'<script id="data" type="application/json">{{ dict "meta" (partial "research_metadata.html" .) "citation" (partial "citation_source.html" .) "proof" (partial "tag_page_proof.html" .) "repeat" (partial "tag_fullsite_page_proof.html" .) | jsonify | safeJS }}</script>{{ partial "paper_tags.html" . }}');
 function build(){execFileSync('hugo',['--source',tmp,'--noBuildLock','--panicOnWarning'],{stdio:'pipe'});return Object.fromEntries(Object.keys(f.history.records).map(key=>{const html=fs.readFileSync(path.join(tmp,'public/posts',path.basename(key,'.md'),'index.html'),'utf8'),row=JSON.parse(html.match(/<script id="data"[^>]*>([\s\S]*?)<\/script>/)[1]);return[key,{...row,html}];}));}
 const actual=build(),graph=require('../assets/js/tag-core').createRegistry(JSON.parse(fs.readFileSync(path.join(repo,'data/taxonomy-registry.json'))),JSON.parse(fs.readFileSync(path.join(repo,'data/taxonomy-catalog.json')))),exportApi=require('../assets/js/reading-export');
 for(const[key,row]of Object.entries(actual)){
  const page=f.history.records[key],c=f.history.classificationRecords[page.classificationRef].classificationRecord;assert.deepEqual(row.proof,row.repeat);assert.equal(row.proof.evidenceContract,api.PUBLIC_CONTRACT);assert.equal(row.meta.sourceKind,'arxiv');assert.equal(row.meta.identityEvidenceContract,undefined);assert.equal(row.meta.paperId,c.paperId);assert.equal(row.meta.researchType,c.researchType);assert.deepEqual(row.meta.primaryResearchRole,c.primaryResearchRole);assert.deepEqual(row.meta.classificationProvenance,c.source);assert.equal(row.citation.url,c.source.sourceUrl);assert.equal(row.citation.pdfUrl,c.source.pdfUrl);assert.equal(row.citation.title,c.source.sourceTitle);assert(row.html.includes('研究分类'));assert(row.html.includes('导读正文未重写或重新审核'));
  const index=JSON.parse(fs.readFileSync(path.join(tmp,'public/index.json')));assert.equal(index.length,2);const entry=index.find(r=>r.permalink.endsWith('/'+path.basename(key,'.md')+'/'));assert(entry);assert.equal(entry.tagEvidenceContract,api.PUBLIC_CONTRACT);assert.equal(entry.tagEvidenceType,api.EVIDENCE_TYPE);assert.equal(entry.tagProofSha256,page.proofSha256);assert.equal(entry.tagPageSha256,page.pageSha256);assert.deepEqual(entry.tagConcepts,page.concepts);assert.deepEqual(entry.citation,row.citation);
  const resolved=graph.resolveRecord(entry);assert.equal(resolved.status,'verified');assert.equal(resolved.concepts.length,page.concepts.length);const md=exportApi.build([entry],'md',{taxonomyGraph:graph}).text,csv=exportApi.build([entry],'csv',{taxonomyGraph:graph}).text;assert(md.includes('研究类型与方向已核验'));assert(csv.includes('研究类型与方向已核验'));assert(md.includes(c.primaryResearchRole.label));assert(csv.includes(c.primaryResearchRole.label));assert.equal(api.sha(fs.readFileSync(path.join(tmp,key))),page.pageSha256);
 }
 const first=Object.keys(f.history.records)[0];fs.appendFileSync(path.join(tmp,first),'\n');const drift=build();assert.equal(drift[first].proof.evidenceContract,undefined);assert.equal(drift[first].meta.researchType,undefined);assert.equal(drift[first].meta.classificationProvenance,undefined);assert.equal(drift[Object.keys(f.history.records)[1]].proof.evidenceContract,api.PUBLIC_CONTRACT);
 assert.equal(require('../scripts/lib/fullsite-taxonomy-profiles').profiles.some(p=>p.implementationSha256===api.sha('SYNTHETIC issuer')),false);
});
