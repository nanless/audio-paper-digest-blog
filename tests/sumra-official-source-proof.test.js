'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os'),cp=require('node:child_process'),crypto=require('node:crypto');
const ROOT=path.resolve(__dirname,'..');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const actual=JSON.parse(fs.readFileSync(ROOT+'/tests/fixtures/sumra-actual-proceedings-descriptor.json'));
const narrow=require(ROOT+'/scripts/lib/sumra-official-source-proof.js'),generic=require(ROOT+'/scripts/lib/source-descriptor-proof.js');
// Only three extraction commitments below are placeholders to exercise the
// public source branch. This is NOT a classification, cache or issued record.
const source={...actual,pdfSha256:actual.sourceBindings[0].pdfSha256,textSha256:'1'.repeat(64),structuredArtifactsSha256:'2'.repeat(64)};
const cases=[{name:'reviewed-public-binding-plus-synthetic-extraction-commitments',value:source,valid:true}];
function negative(name,fn){const value=structuredClone(source);fn(value);cases.push({name,value,valid:false});}
negative('foreign-forum',s=>{s.paperId='conference:iclr:2026:openreview-forum-id:other123'});
negative('old-2025-PDF',s=>{s.pdfSha256='8c60b719a28e52165ee1dbffb6ec5c1bb0347421bb3a5d0c8805ffbfc4ae5d2f';s.sourceBindings[0].pdfSha256=s.pdfSha256});
negative('other-official-URL',s=>{s.pdfUrl='https://proceedings.iclr.cc/paper_files/paper/2026/file/other.pdf'});
negative('OpenReview-response-false-claim',s=>{s.sourceBindings[0].acquisition.openreviewResponseBytes=true});
negative('missing-warning',s=>{delete s.sourceVersionWarning});
negative('private-receipt-pointer',s=>{s.sourceBindings[0].acquisition.receipt.absolutePath='/private/fake'});
negative('receipt-SHA-change',s=>{s.sourceBindings[0].acquisition.receipt.selfSha256='0'.repeat(64)});
negative('metadata-SHA-change',s=>{s.sourceBindings[0].metadataSha256='0'.repeat(64)});
negative('binding-SHA-change',s=>{s.sourceBindings[0].sourceBindingSha256='0'.repeat(64)});
negative('author-order-change',s=>{s.sourceBindings[0].acquisition.sourceAuthors.reverse()});
negative('title-change',s=>{s.sourceTitle+='x'});
negative('unknown-source-key',s=>{s.unknown=null});
negative('unknown-kind',s=>{s.sourceBindings[0].acquisition.sourceKind='authenticated-openreview-forum-pdf'});
negative('wrong-sourceSet',s=>{s.sourceBindings[0].sourceSet='official-iclr-proceedings-2025-sumra'});
negative('empty-text-SHA',s=>{s.textSha256=''});
negative('missing-structured-SHA',s=>{delete s.structuredArtifactsSha256});
negative('current-page-controlled-pollution',s=>{s.currentPageClassificationBinding={contract:'fake'}});
test('real public descriptor rawSHA and exact identity authority replay',()=>{
 assert.equal(sha(fs.readFileSync(ROOT+'/tests/fixtures/sumra-actual-proceedings-descriptor.json')),'2b3aad3e878096998942fe64883658034bf3ff105e411fa591b040fa488262dd');
 assert.equal(narrow.validatePublicIdentityBinding(actual),true);
 assert.throws(()=>generic.validateSourceDescriptor(actual)); // lacks actual extraction commitments
});
test('strict source branch positive and seventeen meaningful mutations',()=>{
 for(const c of cases)c.valid?assert.equal(generic.validateSourceDescriptor(c.value),true,c.name):assert.throws(()=>generic.validateSourceDescriptor(c.value),undefined,c.name);
});
test('non-JSON inherited maps, undefined extras and null aliases cannot collide',()=>{
 const a=structuredClone(source);a.sourceBindings[0].acquisition=Object.assign(Object.create({hidden:'not-signed'}),a.sourceBindings[0].acquisition);assert.throws(()=>generic.validateSourceDescriptor(a));
 const b=structuredClone(source);b.sourceBindings[0].acquisition.unknown=undefined;assert.throws(()=>generic.validateSourceDescriptor(b));
 const c=structuredClone(source);c.sourceDoi=NaN;assert.throws(()=>generic.validateSourceDescriptor(c));
 const d=structuredClone(source);d.sourceBindings[0].metadataRecordIndex=-0;assert.throws(()=>generic.validateSourceDescriptor(d));
});
test('all five original real source descriptors stay valid',()=>{
 const fixtures=JSON.parse(fs.readFileSync(ROOT+'/tests/fixtures/source-descriptors.actual.json'));
 assert.equal(Object.keys(fixtures.sources).length,5);for(const s of Object.values(fixtures.sources))assert.equal(generic.validateSourceDescriptor(s),true);
});
test('Hugo and JS agree on all eighteen narrow-source cases; exact V3 profile helper renders',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'sumra-public-source-hugo-'));
 fs.mkdirSync(dir+'/layouts/partials',{recursive:true});fs.mkdirSync(dir+'/data',{recursive:true});
 for(const name of ['research_conference_source_descriptor.html','research_sumra_source_descriptor.html','research_canonical_json.html'])fs.copyFileSync(ROOT+'/layouts/partials/'+name,dir+'/layouts/partials/'+name);
 fs.copyFileSync(ROOT+'/layouts/partials/tag_classification_v3_profiles.html',dir+'/layouts/partials/tag_classification_v3_profiles.html');
 fs.writeFileSync(dir+'/hugo.toml','baseURL="https://example.org/"\n');fs.writeFileSync(dir+'/data/cases.json',JSON.stringify(cases));
 fs.writeFileSync(dir+'/layouts/index.html','{{ $a := slice }}{{ range site.Data.cases }}{{ $a = $a | append (dict "name" .name "valid" (partial "research_conference_source_descriptor.html" .value)) }}{{ end }}{{ dict "cases" $a "profiles" (partial "tag_classification_v3_profiles.html" "production") | jsonify (dict "noHTMLEscape" true) | safeHTML }}');
 const result=cp.spawnSync('hugo',['--source',dir,'--destination',dir+'/public'],{encoding:'utf8'});
 fs.writeFileSync(dir+'/hugo.log',result.stdout+result.stderr);assert.equal(result.status,0,result.stderr);
 const rendered=JSON.parse(fs.readFileSync(dir+'/public/index.html'));assert.deepEqual(rendered.cases,cases.map(({name,valid})=>({name,valid})));
 const profiles=require(ROOT+'/scripts/lib/tag-v3-profiles.js').profiles;const expected=Object.fromEntries(profiles.map((profile,i)=>[i===0?profile.registrySha256:[profile.registrySha256,profile.implementationSha256,profile.protectedDependencySha256].join(':'),profile]));assert.equal(profiles.length,4);assert.deepEqual(rendered.profiles,expected);
 fs.writeFileSync(dir+'/hugo-cases-proof.json',JSON.stringify({fixtureRoot:dir,cases:rendered.cases,profile:rendered.profiles,renderedSha256:sha(fs.readFileSync(dir+'/public/index.html')),actualClassificationRecords:0,syntheticExtractionCommitmentsOnly:true},null,2)+'\n');
});
