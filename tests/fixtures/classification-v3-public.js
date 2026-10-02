'use strict';
// SYNTHETIC decision/review/source. This file never writes production sidecars.
const base=require('./taxonomy-v3-public'),old=require('./taxonomy-v2-public');
const api=require('../../scripts/lib/taxonomy-classification-v3-proof');
function sync(r){
 const c=r.classificationRecord,f=c.fingerprintInputs;
 c.protectedDependencySha256=api.stableHash(c.protectedDependencies);f.protectedDependencySha256=c.protectedDependencySha256;
 Object.assign(f,{source:c.source,registrySha256:c.registrySha256,selectionContract:c.evidenceSelectionContract,evidenceSha256:c.evidenceSha256});
 c.fingerprint=api.stableHash(f);r.requestStageFingerprint=c.fingerprint;
 c.reviewProof.decisionSha256=api.stableHash({concepts:c.concepts,...Object.fromEntries(api.ROLE_KEYS.map(k=>[k,c[k]]))});
 Object.assign(c.reviewProof,{sourceTextSha256:c.source.textSha256,registrySha256:c.registrySha256,evidenceSha256:c.evidenceSha256});
 c.reviewProofSha256=api.stableHash(c.reviewProof);
 Object.assign(r,{registrySha256:c.registrySha256,source:c.source,evidenceSelectionContract:c.evidenceSelectionContract,evidence:c.concepts,quoteSelections:c.quoteSelections,reviewProof:c.reviewProof,reviewProofSha256:c.reviewProofSha256,
 concepts:c.concepts.map(({id,facet,label})=>({id,facet,label})),...Object.fromEntries(api.ROLE_KEYS.map(k=>[k,c[k]]))});
 return old.seal(r);
}
function fixture({mechanism=true,researchType='engineering',na=false}={}){
 const r=base.fixture({researchType,na}).record,c=r.classificationRecord,snapshot=base.snapshot;
 r.evidenceType='source-only-taxonomy-v3';r.classificationContract=api.CONTRACT;c.contract=api.CONTRACT;c.reviewProof.contract=api.CONTRACT+'-review';
 c.protectedDependencies.contract='historical-taxonomy-v3-source-dependency-fingerprint-v1';c.fingerprintInputs.contract=api.CONTRACT;c.fingerprintInputs.roleContract='historical-source-taxonomy-roles-v3';
 c.protectedDependencies.files['scripts/lib/historical-source-taxonomy-classification-v3.js']=old.digest('SYNTHETIC classification-v3');
 c.fingerprintInputs.implementationSha256=c.protectedDependencies.files['scripts/lib/historical-source-taxonomy-classification-v3.js'];
 const raw=JSON.parse(c.modelResponseText),injected=JSON.parse(c.responseText);
 c.primaryMechanismEvidence=null;raw.primaryMechanismEvidence=null;injected.primaryMechanismEvidence=null;
 if(mechanism){
  const core='SYNTHETIC protocol source: we introduce an attention mechanism whose query-key calculation is our core proposed contribution.';
  const cross='SYNTHETIC protocol source: the same mechanism is tested on speech recognition and sequence classification as distinct tasks.';
  const source=core+'\n'+cross,quotes=[core,cross],starts=[0,core.length+1];
  const projection=quotes.map((quote,i)=>`[s${String(i+1).padStart(5,'0')}; source UTF16 ${starts[i]}:${starts[i]+quote.length}]\n${quote}`).join('\n\n');
  const evidence=i=>({quote:quotes[i],rationale:'Synthetic numbered evidence for the explicitly isolated protocol test.',quoteStart:starts[i],evidenceQuoteStart:projection.indexOf(quotes[i]),quoteSha256:old.digest(quotes[i])});
  const choice=i=>({evidenceId:'s'+String(i+1).padStart(5,'0'),rationale:evidence(i).rationale});
  const selection=(kind,i)=>({selectionRole:kind,evidenceId:choice(i).evidenceId,id:choice(i).evidenceId,quote:quotes[i],quoteStart:starts[i],quoteEnd:starts[i]+quotes[i].length,offsetUnit:'utf16-code-unit',quoteSha256:old.digest(quotes[i])});
  const method=snapshot.concepts.find(n=>n.id==='method.attention');
  c.concepts=[{id:method.id,facet:method.facet,label:method.zh,...evidence(0)}];
  Object.assign(c,{researchType:'engineering',typeEvidence:evidence(0),domainEvidence:evidence(1),primaryResearchRole:{kind:'method',conceptId:method.id,label:method.zh},primaryTaskId:'',primaryTaskLabel:'',primaryScientificTopicId:'',primaryScientificTopicLabel:'',primaryMethodId:method.id,primaryMethodLabel:method.zh,methodNotApplicable:false,methodNotApplicableReason:'',methodNotApplicableEvidence:null,naFullSourceEvidence:null,primaryMechanismEvidence:{coreMechanism:evidence(0),crossTaskGenerality:evidence(1)}});
  c.source.textSha256=old.digest(source);c.source.sourceBinding.textSha256=c.source.textSha256;c.evidenceSha256=old.digest(projection);
  c.quoteSelections=[{...selection('concept',0),conceptId:method.id},selection('researchType',0),selection('domainScope',1),selection('primaryMechanismCore',0),selection('primaryMechanismCrossTask',1)];
  Object.assign(raw,{researchType:c.researchType,typeEvidence:choice(0),domainEvidence:choice(1),primaryResearchRole:{kind:'method',conceptId:method.id},primaryMethodId:method.id,methodNotApplicable:false,methodNotApplicableReason:'',methodNotApplicableEvidence:null,concepts:[{id:method.id,...choice(0)}],primaryMechanismEvidence:{coreMechanism:choice(0),crossTaskGenerality:choice(1)}});
  Object.assign(injected,{...raw,typeEvidence:{quote:core,rationale:evidence(0).rationale},domainEvidence:{quote:cross,rationale:evidence(1).rationale},concepts:[{id:method.id,quote:core,rationale:evidence(0).rationale}],primaryMechanismEvidence:{coreMechanism:{quote:core,rationale:evidence(0).rationale},crossTaskGenerality:{quote:cross,rationale:evidence(1).rationale}}});
 }
 c.modelResponseText=JSON.stringify(raw);c.modelResponseSha256=old.digest(c.modelResponseText);c.responseText=JSON.stringify(injected);c.responseSha256=old.digest(c.responseText);
 return {record:sync(r),snapshot};
}
function rows(){
 const out=[{name:'synthetic engineering single selected primary mechanism',...fixture(),expected:true}];
 for(const researchType of api.TYPES)out.push({name:'synthetic ordinary '+researchType,...fixture({mechanism:false,researchType,na:['position','experience'].includes(researchType)}),expected:true});
 const mutations={
  'classification extra field':c=>c.invented=true,
  'raw duplicate mechanism key':c=>{c.modelResponseText=c.modelResponseText.replace('{"evidenceId":"s00001",','{"evidenceId":"s00001","evidenceId":"s00001",');c.modelResponseSha256=old.digest(c.modelResponseText);},
  'raw escaped duplicate mechanism key':c=>{c.modelResponseText=c.modelResponseText.replace('{"evidenceId":"s00001",','{"evidenceId":"s00001","evidence\\u0049d":"s00001",');c.modelResponseSha256=old.digest(c.modelResponseText);},
  'mechanism evidence absent':c=>delete c.primaryMechanismEvidence,
  'mechanism evidence null':c=>c.primaryMechanismEvidence=null,
  'mechanism missing cross-task proof':c=>delete c.primaryMechanismEvidence.crossTaskGenerality,
  'mechanism extra field':c=>c.primaryMechanismEvidence.notReviewed=true,
  'mechanism evidence extra field':c=>c.primaryMechanismEvidence.coreMechanism.extra=true,
  'mechanism primary method differs':c=>c.primaryMethodId='method.psychoacoustic-experiment',
  'mechanism primary method label differs':c=>c.primaryMethodLabel='invented',
  'mechanism task contamination':c=>c.primaryTaskId='task.asr',
  'mechanism task label contamination':c=>c.primaryTaskLabel='自动语音识别',
  'mechanism topic contamination':c=>c.primaryScientificTopicId='scientific_topic.speech-perception',
  'mechanism NA':c=>c.methodNotApplicable=true,
  'mechanism wrong numbered ID':c=>c.quoteSelections.find(s=>s.selectionRole==='primaryMechanismCore').evidenceId='s00002',
  'mechanism missing selection':c=>c.quoteSelections.pop(),
  'mechanism extra selection':c=>c.quoteSelections.push({...c.quoteSelections.at(-1)}),
  'mechanism selection invented key':c=>c.quoteSelections.at(-1).invented=true,
  'mechanism quote SHA drift':c=>c.primaryMechanismEvidence.coreMechanism.quoteSha256='0'.repeat(64),
  'mechanism fractional quote offset':c=>c.primaryMechanismEvidence.coreMechanism.quoteStart=0.5,
  'mechanism unsafe evidence offset':c=>c.primaryMechanismEvidence.coreMechanism.evidenceQuoteStart=Number.MAX_SAFE_INTEGER+1,
  'concept evidence extra field':c=>c.concepts[0].invented=true,
  'type evidence extra field':c=>c.typeEvidence.invented=true,
  'mechanism short selected quote':c=>c.primaryMechanismEvidence.coreMechanism.quote='short',
  'mechanism formfeed':c=>c.primaryMechanismEvidence.coreMechanism.quote+='\f',
  'mechanism raw selection drift':c=>{const x=JSON.parse(c.modelResponseText);x.primaryMechanismEvidence.crossTaskGenerality.evidenceId='s99999';c.modelResponseText=JSON.stringify(x);c.modelResponseSha256=old.digest(c.modelResponseText);},
  'mechanism injected quote drift':c=>{const x=JSON.parse(c.responseText);x.primaryMechanismEvidence.crossTaskGenerality.quote+=' invented';c.responseText=JSON.stringify(x);c.responseSha256=old.digest(c.responseText);},
  'mechanism wrong review decision':c=>c.reviewProof.response.verifiedChecks.primaryResearchRole=false,
  'generic controlled binding':c=>c.source.currentPageClassificationBinding={contract:'controlled-current-page-classification-source-v2'},
  'V2 role contract':c=>c.fingerprintInputs.roleContract='historical-source-taxonomy-roles-v2',
  'V2 implementation':c=>c.fingerprintInputs.implementationSha256=c.protectedDependencies.files['scripts/lib/historical-source-taxonomy-classification-v2.js'],
  'null missing V3 implementation':c=>{delete c.protectedDependencies.files['scripts/lib/historical-source-taxonomy-classification-v3.js'];c.fingerprintInputs.implementationSha256=null;},
  'unknown snippets':c=>c.evidenceSelectionContract='sealed-source-evidence-snippets-v4',
  'source hash drift':c=>c.source.sourceBinding.textSha256='0'.repeat(64),
  'foreign dependency path':c=>c.protectedDependencies.files['scripts/../secret.js']='0'.repeat(64),
 };
 for(const[name,mutate]of Object.entries(mutations)){const f=fixture();mutate(f.record.classificationRecord);out.push({name,...f,record:sync(f.record),expected:false});}
 for(const name of ['science cannot use method-primary','ordinary engineering task cannot carry mechanism evidence']){const f=fixture({mechanism:false,researchType:name.startsWith('science')?'science':'engineering'});f.record.classificationRecord.primaryMechanismEvidence=fixture().record.primaryMechanismEvidence;out.push({name,...f,record:sync(f.record),expected:false});}
 return out;
}
module.exports={fixture,sync,rows};
