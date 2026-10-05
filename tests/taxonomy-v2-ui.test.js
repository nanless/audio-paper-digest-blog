'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const core=require('../assets/js/tag-core'),library=require('../assets/js/paper-library'),{fixture,catalog}=require('./fixtures/taxonomy-v2-public');
const current=JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data/taxonomy-registry.json'))),graph=core.createRegistry(current,catalog);
function entry(f,slug){const r=f.record;return {title:'Synthetic '+slug,pageType:'paper',permalink:'https://example.test/blog/posts/'+slug+'/',identityStatus:'verified',arxivId:'2601.00001',paperId:r.paperId,
 taxonomyContract:core.contract,taxonomyRegistrySha256:r.registrySha256,taxonomyRegistryVersion:r.registryVersion,taxonomyConcepts:r.concepts,
 taxonomyClassificationContract:r.classificationContract,taxonomyEvidenceType:r.evidenceType,taxonomyEvidenceContract:'historical-source-taxonomy-supplement-v2',
 researchType:r.researchType,domainScope:r.domainScope,primaryResearchRole:r.primaryResearchRole,primaryTaskId:r.primaryTaskId,primaryScientificTopicId:r.primaryScientificTopicId,
 primaryMethodId:r.primaryMethodId,task:r.primaryTaskLabel,method:r.primaryMethodLabel,methodNotApplicable:r.methodNotApplicable,methodNotApplicableReason:r.methodNotApplicableReason};}
test('all eight v2 types filter by explicit main role and scope without inferring engineering task; 386 current concepts retain nine facets',()=>{
 assert.equal(graph.facets.length,9);assert.equal(Object.keys(graph.byId).length,386);
 for(const researchType of core.researchTypeLabels?Object.keys(core.researchTypeLabels):[]){
  const f=fixture({researchType,na:researchType==='position'||researchType==='experience',domainScope:'out-of-domain'}),e=entry(f,researchType),groups=core.groupPapers([e],graph),role=f.record.primaryResearchRole;
  assert.equal(graph.resolveRecord(e).status,'verified',researchType);
  assert.equal(core.query(groups,{facets:{[role.kind]:[role.conceptId]},role:'primary',researchType,domainScope:'out-of-domain'},graph).length,1);
  if(researchType!=='engineering')assert.equal(core.query(groups,{facets:{task:['task.asr']},role:'primary'},graph).length,0);
  if(f.record.methodNotApplicable)assert.equal(core.query(groups,{facets:{method:['method.psychoacoustic-experiment']},role:'primary'},graph).length,0);
  assert.equal(core.query(groups,{researchType,domainScope:'in-domain'},graph).length,0);
  const counts=core.counts(groups,graph,{researchType,domainScope:'out-of-domain'});assert.equal(counts.concepts.find(c=>c.id===role.conceptId).direct,1);
  assert.equal(core.counts(groups,graph,{domainScope:'in-domain'}).total,0);
 }
});
test('type/domain/role AND comes from one guide; old v1 does not acquire v2 labels or a main scientific role',()=>{
 const a=entry(fixture({researchType:'science',domainScope:'in-domain'}),'science'),b=entry(fixture({researchType:'position',na:true,domainScope:'out-of-domain'}),'position');
 const groups=core.groupPapers([a,b],graph);assert.equal(groups.length,1);
 assert.equal(core.query(groups,{researchType:'science',domainScope:'out-of-domain'},graph).length,0);
 assert.equal(core.query(groups,{researchType:'position',domainScope:'out-of-domain',facets:{scientific_topic:[b.primaryResearchRole.conceptId]},role:'primary'},graph).length,1);
 const old={...a,taxonomyClassificationContract:'',taxonomyEvidenceType:'source-only-taxonomy',taxonomyEvidenceContract:'historical-direct-taxonomy-supplement-v1'};
 assert.equal(core.query(core.groupPapers([old],graph),{researchType:'science'},graph).length,0);
 assert.equal(core.query(core.groupPapers([old],graph),{researchType:'unclassified'},graph).length,1);
 assert.equal(core.query(core.groupPapers([old],graph),{facets:{scientific_topic:[a.primaryResearchRole.conceptId]},role:'primary'},graph).length,0);
 const normalized=[a,b].map(e=>library.normalizeEntry(e,'https://example.test','/blog/',current));
 assert.equal(library.libraryResults(normalized,core.groupPapers(normalized,graph),{query:'',type:'paper',year:'all',sort:'newest'},library.directionState(new URLSearchParams('researchType=science&domain=out-of-domain'),graph),graph,core).length,0);
});
test('NA with method, duplicate concept, wrong science primary ID and task contamination fail closed in index roles',()=>{
 const mutations=[e=>e.primaryTaskId='task.asr',e=>e.primaryScientificTopicId='scientific_topic.unknown',e=>e.taxonomyConcepts.push(e.taxonomyConcepts[0]),e=>e.domainScope='audio-adjacent'];
 for(const mutate of mutations){const e=entry(fixture(),'negative');mutate(e);assert.equal(graph.resolveRecord(e).status,'invalid-roles');assert.equal(core.groupPapers([e],graph)[0].conceptIds.length,0);}
 const f=fixture({researchType:'position',na:true}),e=entry(f,'bad-na');e.taxonomyConcepts.push(fixture().record.concepts[1]);assert.equal(graph.resolveRecord(e).status,'invalid-roles');
});

test('新索引字段读取原v2角色，不给普通来源标签增加强角色资格',()=>{
 const legacy=entry(fixture(),'current-fields'),current={...legacy};
 for(const key of ['taxonomyContract','taxonomyRegistrySha256','taxonomyConcepts','taxonomyClassificationContract','taxonomyEvidenceType','taxonomyEvidenceContract'])delete current[key];
 Object.assign(current,{tagContract:legacy.taxonomyContract,tagCatalogSha256:legacy.taxonomyRegistrySha256,tagConcepts:legacy.taxonomyConcepts,tagClassificationContract:legacy.taxonomyClassificationContract,tagEvidenceType:legacy.taxonomyEvidenceType,tagEvidenceContract:legacy.taxonomyEvidenceContract});
 assert.deepEqual(graph.resolveRecord(current),graph.resolveRecord(legacy));
 assert.equal(core.query(core.groupPapers([current],graph),{researchType:current.researchType},graph).length,1);
 const simple={...current,tagClassificationContract:undefined,tagEvidenceContract:'historical-direct-tag-supplement-v2',tagEvidenceType:'source-only-tags'};
 assert.equal(core.query(core.groupPapers([simple],graph),{researchType:current.researchType},graph).length,0);
 assert.throws(()=>graph.resolveRecord({...current,taxonomyEvidenceType:null}),/标签字段不能混用/);
});
