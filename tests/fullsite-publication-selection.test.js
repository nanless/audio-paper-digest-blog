'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os');
const root=path.resolve(__dirname,'..'),selection=require('../scripts/lib/fullsite-publication-selection'),pack=require('../scripts/lib/fullsite-tag-pack'),profiles=require('../scripts/lib/fullsite-tag-profiles').profiles;
const bytes=fs.readFileSync(root+'/data/fullsite-taxonomy-publication-selection.json'),manifestBytes=fs.readFileSync(root+'/data/fullsite-taxonomy-history.json'),manifest=JSON.parse(manifestBytes),history=pack.reconstruct(manifest,k=>fs.readFileSync(root+'/static/'+k));
const pins={collectionSha256:selection.sha(manifestBytes),admissionSha256:selection.sha(fs.readFileSync(root+'/data/fullsite-taxonomy-admission.json')),sourcesSha256:selection.sha(fs.readFileSync(root+'/data/fullsite-taxonomy-sources.json'))};
const expected=selection.expectedFor(pins,profiles),clone=x=>JSON.parse(JSON.stringify(x)),encode=x=>Buffer.from(JSON.stringify(x)+'\n');
const heldPath=Object.keys(history.records).find(p=>history.records[p].paperId===selection.HELD);
test('all original 300 records close before exact publication partition',()=>{
 const result=require('../scripts/verify-fullsite-tags').verify(root);
 assert.deepEqual(result,{records:300,papers:248,publication:{inputPapers:248,inputPages:300,eligiblePapers:247,eligiblePages:299,withheldPapers:1,withheldPages:1}});
 const gate=selection.read(bytes,expected,history,pins);let yes=0,no=0;
 for(const [p,r]of Object.entries(history.records))gate.allows(p,r)?yes++:no++;
 assert.equal(yes,299);assert.equal(no,1);assert.equal(gate.allows(heldPath,history.records[heldPath]),false);
 assert.equal(expected,'0449c97aae60c8ffc725e89ba964dcd87ecc752eb60111b9e7043954224d12bd');
});
test('wrong tuple, missing row, reorder and foreign hold fail even with test-only recomputed transport SHA',()=>{
 for(const mutate of [s=>{s.eligible[0].nativeProofSha256='0'.repeat(64);},s=>s.eligible.pop(),s=>s.eligible.reverse(),s=>{s.withheld[0].authoritySha256='0'.repeat(64);},s=>{s.counts.eligiblePages--;},s=>{s.withheld[0].tuple.pages[0].pageSha256='0'.repeat(64);}]){
  const s=clone(JSON.parse(bytes));mutate(s);const b=encode(s);assert.throws(()=>selection.read(b,selection.sha(b),history,pins),/rejected/);
 }
});
test('original collection deletion or source alteration cannot be hidden by selection',()=>{
 const h=clone(history);delete h.records[heldPath];assert.throws(()=>selection.read(bytes,expected,h,pins),/rejected/);
 const altered=clone(history);altered.classificationRecords[selection.HELD].classificationRecord.source.textSha256='0'.repeat(64);assert.throws(()=>selection.read(bytes,expected,altered,pins),/rejected/);
 const gate=selection.read(bytes,expected,history,pins);assert.throws(()=>gate.allows('content/posts/unknown.md',history.records[heldPath]),/rejected/);const row=clone(history.records[heldPath]);row.bodySha256='0'.repeat(64);assert.throws(()=>gate.allows(heldPath,row),/rejected/);
});
test('physical root pin, collection pins, duplicate JSON keys and profile requirement remain strict',()=>{
 assert.throws(()=>selection.read(Buffer.from(bytes+' '),expected,history,pins),/whole SHA/);
 assert.throws(()=>selection.read(bytes,expected,history,{...pins,collectionSha256:'0'.repeat(64)}),/unknown collection/);
 const dupe=Buffer.from(bytes.toString().replace('{','{"contract":"duplicate",'));assert.throws(()=>selection.read(dupe,selection.sha(dupe),history,pins),/duplicate JSON key/);
 assert.throws(()=>selection.expectedFor(pins,[...profiles,{...profiles[3],publicationSelectionSha256:''}]),/inconsistent/);
 const old=profiles[0];assert.equal(selection.expectedFor({...pins,admissionSha256:old.admissionProjectionSha256,sourcesSha256:old.sourceProjectionSha256},profiles),'');
});
test('withheld classification cannot fall back to old verified payload in library or downloads',()=>{
 const core=require('../assets/js/tag-core'),registry=JSON.parse(fs.readFileSync(root+'/data/taxonomy-registry.json')),catalog=JSON.parse(fs.readFileSync(root+'/data/taxonomy-catalog.json')),graph=core.createRegistry(registry,catalog);
 const r=history.records[heldPath],entry={taxonomyPublicationStatus:'withheld',identityStatus:'verified',paperId:r.paperId,pageType:'paper',arxivId:'2604.21628',permalink:'/posts/held/',title:'Held',taxonomyContract:'paper-taxonomy-flat-tags-compat-v1',taxonomyRegistrySha256:r.registrySha256,taxonomyConcepts:r.concepts,primaryTaskId:r.primaryTaskId,primaryMethodId:r.primaryMethodId,task:r.primaryTaskLabel,method:r.primaryMethodLabel,tags:['语音识别']};
 assert.equal(graph.resolveRecord(entry).status,'withheld');assert.deepEqual(graph.resolveRecord(entry).concepts,[]);
 const normalized=require('../assets/js/paper-library').normalizeEntry(entry,'https://example.test','/',registry,graph);assert.equal(normalized.tagPublicationStatus,'withheld');assert.equal(graph.resolveRecord(normalized).status,'withheld');
 const groups=core.groupPapers([normalized],graph);assert.equal(groups.length,1);assert.deepEqual(groups[0].conceptIds,[]);assert.deepEqual(groups[0].primaryTaskIds,[]);assert.equal(groups[0].classifications[0].researchType,'');
 const exporter=require('../assets/js/reading-export');const md=exporter.build([normalized],'md',{taxonomyGraph:graph}).text;assert(!md.includes('研究类型与方向已核验'));assert(!md.includes('主要研究任务：'));assert(md.includes('暂无已核验的研究类型信息'));
});
