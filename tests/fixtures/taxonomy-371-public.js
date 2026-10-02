'use strict';
// Synthetic choices/review/source, retained real producer dependency pins only.
const base=require('./taxonomy-v3-public'),api=require('../../scripts/lib/taxonomy-v2-371-proof');
const snapshot=require('../../data/taxonomy-registry.json'),deps=require('./taxonomy-371-approved-dependencies.json');
function fixture(config={}){const r=base.fixture(config).record,c=r.classificationRecord,f=c.fingerprintInputs;c.registrySha256=api.profile.registrySha256;c.protectedDependencies=structuredClone(deps);f.projectionSha256=api.profile.projectionSha256;
 for(const[k,name]of Object.entries({implementationSha256:'historical-source-taxonomy-classification-v2',snippetImplementationSha256:'source-evidence-snippets-v3',identityImplementationSha256:'historical-source-identity-supplement',schedulerImplementationSha256:'source-classification-scheduler',failureImplementationSha256:'source-classification-failures'}))f[k]=deps.files['scripts/lib/'+name+'.js'];
 return {record:base.sync(r),snapshot};}
function rows(){const rows=[];for(const researchType of require('../../scripts/lib/taxonomy-v2-proof').TYPES)rows.push({name:'synthetic371 '+researchType,...fixture({researchType,na:['position','experience'].includes(researchType)}),expected:true});
 const mutations={
 'unknown registry':c=>c.registrySha256='0'.repeat(64),
 'V2 method-primary still refused':c=>{c.primaryResearchRole={kind:'method',conceptId:c.primaryMethodId,label:c.primaryMethodLabel};c.primaryTaskId='';c.primaryTaskLabel='';},
 'wrong371 projection':c=>c.fingerprintInputs.projectionSha256='0'.repeat(64),
 'wrong371 dependency digest':c=>c.protectedDependencies.files['scripts/extra-test.js']='0'.repeat(64),
 'wrong371 implementation':c=>{c.protectedDependencies.files['scripts/lib/historical-source-taxonomy-classification-v2.js']='0'.repeat(64);c.fingerprintInputs.implementationSha256='0'.repeat(64);},
 'wrong371 snippet implementation':c=>c.fingerprintInputs.snippetImplementationSha256='0'.repeat(64),
 'wrong source descriptor':c=>c.source.sourceBinding.pdfSha256='0'.repeat(64),
 'wrong source identity':c=>c.source.paperId='arxiv:2601.99999',
 'controlled binding cannot borrow371':c=>c.source.currentPageClassificationBinding={contract:'controlled-current-page-classification-source-v2'},
 'V3 class cannot borrow V2 profile':c=>{c.contract='historical-source-taxonomy-classification-v3';c.fingerprintInputs.contract=c.contract;},
 'old snippets cannot borrow371':c=>c.evidenceSelectionContract='sealed-source-evidence-snippets-v2',
 'new role contract cannot borrow371':c=>c.fingerprintInputs.roleContract='historical-source-taxonomy-roles-v3',
 'review model differs':c=>c.reviewProof.model='other-model',
 };
 for(const[name,mutate]of Object.entries(mutations)){const f=fixture({researchType:'engineering'});mutate(f.record.classificationRecord);rows.push({name,...f,record:base.sync(f.record),expected:false});}
 for(const[name,mutate]of Object.entries({
 'extra page field':r=>r.unapprovedExtra=true,
 'extra classification field':r=>r.classificationRecord.unapprovedExtra=true,
 'V2 cannot borrow explicit null V3 mechanism field':r=>{r.primaryMechanismEvidence=null;r.classificationRecord.primaryMechanismEvidence=null;},
 })){const f=fixture();mutate(f.record);rows.push({name,...f,record:base.sync(f.record),expected:false});}
 return rows;
}
// Fully-rehashed NA coverage fixtures: source/review/coordinates remain closed.
// No evidence here is an accepted scientific classification or actual issuer.
function budgetFixture({v3=false,sourceChars,extraSpans=0}={}){
 const f=JSON.parse(JSON.stringify(v3?require('./classification-v3-public').fixture({mechanism:false,researchType:'position',na:true}):fixture({researchType:'position',na:true})));
 const r=f.record,c=r.classificationRecord,e=c.naFullSourceEvidence;
 const digest=require('./taxonomy-v2-public').digest;
 let sourceParts=[...e.snippets,...e.whitespaceGaps].sort((a,b)=>a.quoteStart-b.quoteStart),source=sourceParts.map(s=>s.quote).join('');
 if(sourceChars!==undefined){
  const pad=' '.repeat(sourceChars-source.length);source=pad+source;
  for(const s of [...e.snippets,...e.whitespaceGaps]){s.quoteStart+=pad.length;s.quoteEnd+=pad.length;}
  if(pad.length)e.whitespaceGaps.unshift({quoteStart:0,quoteEnd:pad.length,quote:pad,quoteSha256:digest(pad)});
  for(const evidence of [...c.concepts,c.typeEvidence,c.domainEvidence,c.methodNotApplicableEvidence])evidence.quoteStart+=pad.length;
  for(const selected of c.quoteSelections){selected.quoteStart+=pad.length;selected.quoteEnd+=pad.length;}
 }
 for(let i=0;i<extraSpans;i++){
  const quote='x',start=source.length;source+=quote;
  e.snippets.push({id:'s'+String(e.snippets.length+1).padStart(5,'0'),quote,quoteStart:start,quoteEnd:start+1,offsetUnit:'utf16-code-unit',quoteSha256:digest(quote)});
 }
 const projection=e.snippets.map(s=>`[${s.id}; source UTF16 ${s.quoteStart}:${s.quoteEnd}]\n${s.quote}`).join('\n\n');
 e.sourceChars=source.length;e.sourceTextSha256=digest(source);e.evidenceChars=e.snippets.reduce((n,s)=>n+s.quote.length,0);e.evidenceSha256=digest(projection);
 c.source.textSha256=c.source.sourceBinding.textSha256=e.sourceTextSha256;c.evidenceSha256=e.evidenceSha256;
 for(const evidence of [...c.concepts,c.typeEvidence,c.domainEvidence,c.methodNotApplicableEvidence])evidence.evidenceQuoteStart=projection.indexOf(evidence.quote);
 const record=v3?require('./classification-v3-public').sync(r):base.sync(r);
 return {record,snapshot:f.snapshot,sourceChars:source.length,projectionChars:projection.length};
}
module.exports={fixture,rows,snapshot,sync:base.sync,budgetFixture};
