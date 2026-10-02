'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const exporter=require('../assets/js/reading-export'),core=require('../assets/js/taxonomy-core');
const graph=core.createRegistry(require('../data/taxonomy-registry.json'),require('../data/taxonomy-catalog.json'));
const records=Object.values(require('../data/taxonomy-history-v2.json').records);
function entry(r){return {title:r.originalTitle||r.paperId,permalink:'/blog/'+r.pageKey.replace(/^content\//,'').replace(/\.md$/,'/'),paperId:r.paperId,
 taxonomyContract:core.contract,taxonomyClassificationContract:r.classificationContract,taxonomyEvidenceContract:'historical-source-taxonomy-supplement-v2',taxonomyEvidenceType:r.evidenceType,
 taxonomyRegistrySha256:r.registrySha256,taxonomyConcepts:r.concepts,primaryResearchRole:r.primaryResearchRole,researchType:r.researchType,domainScope:r.domainScope,
 primaryTaskId:r.primaryTaskId,primaryScientificTopicId:r.primaryScientificTopicId,primaryMethodId:r.primaryMethodId,method:r.primaryMethodLabel,
 methodNotApplicable:r.methodNotApplicable,methodNotApplicableReason:r.methodNotApplicableReason};}
function exportRecord(e,format){return exporter.build([e],format,{origin:'https://example.test',taxonomyGraph:graph}).text;}
test('Markdown and CSV retain actual verified type, domain, role, issued direct paths and method; real NA keeps full reason',()=>{
 for(const type of ['science','resource','evaluation','analysis','position','engineering','review','experience']){
  const r=records.find(r=>r.researchType===type);assert.ok(r,type);const e=entry(r);assert.equal(graph.resolveRecord(e).status,'verified');
  for(const format of ['md','csv']){const text=exportRecord(e,format);assert.ok(text.includes('直接分类路径（签发版本）'));assert.ok(text.includes(core.researchTypeLabels[r.researchType]));assert.ok(text.includes(core.domainLabels[r.domainScope]));assert.ok(text.includes(core.roleLabels[r.primaryResearchRole.kind]));assert.ok(text.includes(r.primaryResearchRole.label));for(const c of r.concepts)assert.ok(text.includes(c.label));if(!r.methodNotApplicable)assert.ok(text.includes(r.primaryMethodLabel));}
 }
 const r=records.find(r=>r.paperId==='arxiv:2606.26348');assert.ok(r);for(const format of ['md','csv']){const text=exportRecord(entry(r),format);assert.match(text,/不适用/);assert.ok(text.includes(r.methodNotApplicableReason));assert.doesNotMatch(text,/PRIVATE_NOTE/);}
});
test('export retains original issued paths while navigation uses the current parent, with explicit version wording',()=>{
 const old=Object.values(graph.versions).find(version=>Object.keys(version.byId).length===228),task=old.byId['task.speech-spoofing'],method=Object.values(old.byId).find(node=>node.facet==='method'&&!node.ancestorIds.length);
 const e={title:'Historical export fixture',permalink:'/posts/old-export/',paperId:'conference:fixture',taxonomyContract:core.contract,
  taxonomyClassificationContract:core.v2Contract,taxonomyEvidenceContract:'historical-source-taxonomy-supplement-v2',taxonomyEvidenceType:'source-only-taxonomy-v2',
  taxonomyRegistrySha256:old.registrySha256,taxonomyConcepts:[task,method].map(node=>({id:node.id,facet:node.facet,label:node.zh})),
  researchType:'engineering',domainScope:'in-domain',primaryResearchRole:{kind:'task',conceptId:task.id,label:task.zh},primaryTaskId:task.id,primaryMethodId:method.id,method:method.zh,methodNotApplicable:false,methodNotApplicableReason:''};
 const before=JSON.stringify(e);assert.equal(graph.resolveRecord(e).status,'verified');
 assert.deepEqual(graph.navigationConcepts(e)[0].ancestorIds,['task.audio-forgery']);
 for(const format of ['md','csv']){const text=exportRecord(e,format);assert.ok(text.includes('直接分类路径（签发版本）'));assert.ok(text.includes(task.zh));assert.ok(!text.includes(graph.byId['task.audio-forgery'].zh));}
 assert.match(exportRecord(e,'md'),/网页方向按现行目录浏览；清单中的分类路径保留原签发版本/);
 assert.equal(JSON.stringify(e),before);
});
test('legacy, unknown snapshot and invalid roles cannot export inferred v2 metadata; CSV escaped and local bytes ignored',()=>{
 const r=records.find(r=>r.researchType==='science'),valid=entry(r);
 for(const bad of [{...valid,taxonomyClassificationContract:''},{...valid,taxonomyRegistrySha256:'f'.repeat(64)},{...valid,primaryResearchRole:{...valid.primaryResearchRole,label:'FAKE_ROLE'}},{...valid,taxonomyConcepts:valid.taxonomyConcepts.map((c,i)=>i?c:{...c,label:'FAKE_LABEL'})}]){
  for(const format of ['md','csv']){const text=exportRecord({...bad,tags:['科学研究'],note:'PRIVATE_NOTE',noteConflicts:[{note:'PRIVATE_NOTE'}]},format);assert.match(text,/暂无已核验的研究类型信息/);assert.doesNotMatch(text,/FAKE_ROLE|FAKE_LABEL|PRIVATE_NOTE/);assert.ok(!text.includes(core.researchTypeLabels[r.researchType]));}
 }
 const text=exportRecord({...valid,title:'=HYPERLINK("evil")'},'csv');assert.match(text,/"'=HYPERLINK/);
});
test('citation formats remain bibliographic-only and do not add research classifications',()=>{
 const r=records.find(r=>r.researchType==='science'),e={...entry(r),citation:{contract:'paper-citation-source-v1',identityStatus:'verified',sourceKind:'arxiv',arxivId:'2606.26360',title:'Phonetic and Semantic Analyses of Spoken Corpora',url:'https://arxiv.org/abs/2606.26360',pdfUrl:'https://arxiv.org/pdf/2606.26360',authors:[],date:''}};
 for(const format of ['bib','ris']){const text=exportRecord(e,format);assert.doesNotMatch(text,/研究类型|科学研究|研究范围|直接分类|不适用/);assert.match(text,/2606\.26360/);}
});
