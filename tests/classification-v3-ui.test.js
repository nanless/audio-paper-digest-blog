'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const core=require('../assets/js/taxonomy-core'),exporter=require('../assets/js/reading-export'),cases=require('./fixtures/classification-v3-public');
const graph=core.createRegistry(require('../data/taxonomy-registry.json'),require('../data/taxonomy-catalog.json'));
function entry(f){const r=f.record;return {title:'Synthetic protocol example',pageType:'paper',permalink:'https://example.test/blog/posts/synthetic/',paperId:r.paperId,arxivId:'2601.00001',identityStatus:'verified',
 taxonomyContract:core.contract,taxonomyClassificationContract:r.classificationContract,taxonomyEvidenceContract:'historical-source-taxonomy-supplement-v3',taxonomyEvidenceType:r.evidenceType,taxonomyRegistrySha256:r.registrySha256,taxonomyConcepts:r.concepts,
 researchType:r.researchType,domainScope:r.domainScope,primaryResearchRole:r.primaryResearchRole,primaryTaskId:r.primaryTaskId,primaryScientificTopicId:r.primaryScientificTopicId,primaryMethodId:r.primaryMethodId,task:r.primaryTaskLabel,method:r.primaryMethodLabel,methodNotApplicable:r.methodNotApplicable,methodNotApplicableReason:r.methodNotApplicableReason,
 citation:{contract:'paper-citation-source-v1',identityStatus:'verified',sourceKind:'arxiv',arxivId:'2601.00001',title:'Synthetic citation fixture',url:'https://arxiv.org/abs/2601.00001',pdfUrl:'https://arxiv.org/pdf/2601.00001',authors:[],date:''}};}
test('V3 mechanism is a method facet and single primary count, never an inferred engineering task',()=>{
 const e=entry(cases.fixture()),groups=core.groupPapers([e],graph);assert.equal(graph.resolveRecord(e).status,'verified');assert.equal(core.primaryRoleLabel(e),'主要研究机制');
 assert.equal(groups[0].primaryTaskIds.length,0);assert.deepEqual(groups[0].primaryMethodIds,['method.attention']);assert.equal(core.query(groups,{facets:{method:['method.attention']},role:'primary'},graph).length,1);assert.equal(core.query(groups,{facets:{task:['task.asr']},role:'primary'},graph).length,0);
 const counts=core.counts(groups,graph);assert.equal(counts.concepts.find(n=>n.id==='method.attention').direct,1);assert.equal(core.query(groups,{researchType:'engineering',domainScope:'in-domain'},graph).length,1);
});
test('V3 rendered mechanism label and complete paths export once; Bib/RIS remain bibliographic',()=>{
 const e=entry(cases.fixture());for(const format of ['md','csv']){const text=exporter.build([e],format,{origin:'https://example.test',taxonomyGraph:graph}).text;assert.match(text,/主要研究机制/);assert.ok(text.includes(e.primaryResearchRole.label));assert.match(text,/研究类型与方向已核验/);assert.match(text,/方法[：:]/);if(format==='md'){assert.equal((text.match(/主要研究机制：/g)||[]).length,1);assert.doesNotMatch(text,/主要研究方法：/);}}
 for(const format of ['bib','ris']){const text=exporter.build([e],format,{origin:'https://example.test',taxonomyGraph:graph}).text;assert.match(text,/2601\.00001/);assert.doesNotMatch(text,/主要研究机制|研究类型|注意力/);}
 const current={...e};for(const key of ['taxonomyContract','taxonomyClassificationContract','taxonomyEvidenceContract','taxonomyEvidenceType','taxonomyRegistrySha256','taxonomyConcepts'])delete current[key];
 Object.assign(current,{tagContract:e.taxonomyContract,tagClassificationContract:e.taxonomyClassificationContract,tagEvidenceContract:e.taxonomyEvidenceContract,tagEvidenceType:e.taxonomyEvidenceType,tagCatalogSha256:e.taxonomyRegistrySha256,tagConcepts:e.taxonomyConcepts});
 assert.deepEqual(graph.resolveRecord(current),graph.resolveRecord(e));assert.equal(core.primaryRoleLabel(current),'主要研究机制');
 assert.match(exporter.build([current],'md',{tagGraph:graph}).text,/主要研究机制/);
});
test('V2 cannot acquire the new mechanism role via browser index; V3 contamination remains invalid',()=>{
 const e=entry(cases.fixture());for(const mutate of [r=>r.taxonomyClassificationContract=core.v2Contract,r=>r.primaryTaskId='task.asr',r=>r.primaryMethodId='method.psychoacoustic-experiment',r=>r.researchType='science',r=>r.methodNotApplicable=true]){const bad=structuredClone(e);mutate(bad);assert.equal(graph.resolveRecord(bad).status,'invalid-roles');assert.match(exporter.build([bad],'md',{origin:'https://example.test',taxonomyGraph:graph}).text,/暂无已核验的研究类型信息/);}
});
test('ordinary eight V3 role branches retain task/topic/NA/filter/export semantics',()=>{
 for(const type of Object.keys(core.researchTypeLabels)){const e=entry(cases.fixture({mechanism:false,researchType:type,na:['position','experience'].includes(type)}));assert.equal(graph.resolveRecord(e).status,'verified',type);assert.notEqual(core.primaryRoleLabel(e),'主要研究机制');const groups=core.groupPapers([e],graph);assert.equal(core.query(groups,{researchType:type},graph).length,1);if(type!=='engineering')assert.equal(groups[0].primaryTaskIds.length,0);for(const format of ['md','csv'])assert.ok(exporter.build([e],format,{origin:'https://example.test',taxonomyGraph:graph}).text.includes(core.researchTypeLabels[type]));}
});
module.exports={entry};
