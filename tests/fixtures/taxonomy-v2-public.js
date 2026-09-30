'use strict';
// Entire classification and review below are synthetic protocol fixtures. No
// model was called, and this module never produces an issued historical record.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const api=require('../../scripts/lib/taxonomy-v2-proof');
const digest=x=>crypto.createHash('sha256').update(x).digest('hex'),hash=api.stableHash;
const catalog=JSON.parse(fs.readFileSync(path.resolve(__dirname,'../../data/taxonomy-catalog.json')));
function fixture({researchType='science',domainScope='in-domain',na=false,registryVersion='paper-taxonomy-v2'}={}){
 const snapshot=catalog.snapshots.find(s=>s.registryVersion===registryVersion&&s.concepts.length===(registryVersion==='paper-taxonomy-v2'?330:262));
 const quote='This is a synthetic protocol fixture, not an issued research classification. It uses a controlled speech perception experiment. 🧪';
 const rationale='Synthetic evidence selected only to test the public protocol.';
 const source={kind:'arxiv-fresh-fetch',paperId:'arxiv:2601.00001',sourceId:'2601.00001v1',generation:1,
  pdfSha256:digest('SYNTHETIC PDF'),textSha256:digest(quote),sourceManifestSha256:digest('SYNTHETIC MANIFEST'),
  sourceRunIdentitySha256:digest('SYNTHETIC RUN'),structuredArtifactsSha256:digest('SYNTHETIC ARTIFACTS')};
 source.sourceBinding={contract:'fresh-arxiv-rewrite-source-v1',paperId:source.paperId,arxivId:'2601.00001',generation:1,
  textSha256:source.textSha256,pdfSha256:source.pdfSha256,sourceManifestSha256:source.sourceManifestSha256,
  sourceRunIdentitySha256:source.sourceRunIdentitySha256,structuredArtifactsSha256:source.structuredArtifactsSha256};
 const roles={engineering:'task.asr',science:'scientific_topic.speech-perception',analysis:'scientific_topic.speech-perception',evaluation:'research_focus.evaluation',resource:'artifact.dataset',review:'scientific_topic.speech-perception',experience:'scientific_topic.speech-perception',position:'scientific_topic.speech-perception'};
 const role=snapshot.concepts.find(n=>n.id===roles[researchType]),method=snapshot.concepts.find(n=>n.id==='method.psychoacoustic-experiment');
 if(!role||!method)throw new Error('Synthetic fixture references absent formal concepts');
 const evidence={quote,rationale,quoteStart:0,evidenceQuoteStart:0,quoteSha256:digest(quote)};
 const concepts=[role,...(na?[]:[method])].map(n=>({id:n.id,facet:n.facet,label:n.zh,...evidence}));
 const decision={concepts,researchType,typeEvidence:evidence,domainScope,domainEvidence:evidence,
  primaryResearchRole:{kind:role.facet,conceptId:role.id,label:role.zh},primaryTaskId:researchType==='engineering'?role.id:'',primaryTaskLabel:researchType==='engineering'?role.zh:'',
  primaryScientificTopicId:researchType==='science'?role.id:'',primaryScientificTopicLabel:researchType==='science'?role.zh:'',
  primaryMethodId:na?null:method.id,primaryMethodLabel:na?'':method.zh,methodNotApplicable:na,
  methodNotApplicableReason:na?'This synthetic position makes an argument without defining a research procedure.':'',methodNotApplicableEvidence:na?evidence:null};
 const choice={evidenceId:'s00001',rationale};
 const model={researchType,typeEvidence:choice,domainScope,domainEvidence:choice,primaryResearchRole:{kind:role.facet,conceptId:role.id},primaryMethodId:decision.primaryMethodId,
  methodNotApplicable:na,methodNotApplicableReason:decision.methodNotApplicableReason,methodNotApplicableEvidence:na?choice:null,concepts:concepts.map(e=>({id:e.id,...choice}))};
 const injected={...model,typeEvidence:{quote,rationale},domainEvidence:{quote,rationale},methodNotApplicableEvidence:na?{quote,rationale}:null,concepts:concepts.map(e=>({id:e.id,quote,rationale}))};
 const selection=kind=>({selectionRole:kind,evidenceId:'s00001',id:'s00001',quote,quoteStart:0,quoteEnd:quote.length,offsetUnit:'utf16-code-unit',quoteSha256:digest(quote)});
 const quoteSelections=[...concepts.map(e=>({...selection('concept'),conceptId:e.id})),selection('researchType'),selection('domainScope'),...(na?[selection('methodNotApplicable')]:[])];
 const protectedDependencies={contract:'historical-taxonomy-v2-source-dependency-fingerprint-v1',files:Object.fromEntries(['historical-source-taxonomy-classification-v2','source-evidence-snippets-v2','historical-source-identity-supplement','source-classification-scheduler','source-classification-failures'].map(name=>['scripts/lib/'+name+'.js',digest('SYNTHETIC '+name)]))};
 const protectedDependencySha256=hash(protectedDependencies),evidenceSha256=digest('SYNTHETIC EVIDENCE PROJECTION');
 const fingerprintInputs={contract:api.CONTRACT,selectionContract:'sealed-source-evidence-snippets-v2',paperId:source.paperId,source,registrySha256:snapshot.registrySha256,projectionSha256:api.projectionHash(snapshot),evidenceSha256,
  promptSha256:digest('SYNTHETIC CLASSIFIER PROMPT'),model:'synthetic-test-model',endpointSha256:digest('SYNTHETIC ENDPOINT'),accountPoolGroupSha256:digest('SYNTHETIC ACCOUNT POOL'),
  ...Object.fromEntries(Object.entries({implementationSha256:'historical-source-taxonomy-classification-v2',snippetImplementationSha256:'source-evidence-snippets-v2',identityImplementationSha256:'historical-source-identity-supplement',schedulerImplementationSha256:'source-classification-scheduler',failureImplementationSha256:'source-classification-failures'}).map(([k,name])=>[k,protectedDependencies.files['scripts/lib/'+name+'.js']])),
  protectedDependencySha256,roleContract:'historical-source-taxonomy-roles-v2',projectionContract:'historical-taxonomy-prompt-projection-v2',maxTokens:6000,temperature:0.1,reviewMaxTokens:3000,reviewTemperature:0.1};
 const reviewResponseText=JSON.stringify({accepted:true,issues:[],verifiedChecks:{researchType:true,domainScope:true,primaryResearchRole:true,methodRole:true}});
 const reviewProof={contract:api.CONTRACT+'-review',decisionSha256:hash(decision),sourceTextSha256:source.textSha256,evidenceSha256,registrySha256:snapshot.registrySha256,promptSha256:digest('SYNTHETIC REVIEW PROMPT'),responseSha256:digest(reviewResponseText),response:JSON.parse(reviewResponseText),model:fingerprintInputs.model};
 const c={contract:api.CONTRACT,paperId:source.paperId,runId:'00000000-0000-4000-8000-000000000001',fingerprint:hash(fingerprintInputs),fingerprintInputs,registrySha256:snapshot.registrySha256,source,evidenceSha256,evidenceSelectionContract:'sealed-source-evidence-snippets-v2',protectedDependencies,protectedDependencySha256,
  modelResponseText:JSON.stringify(model),modelResponseSha256:digest(JSON.stringify(model)),responseText:JSON.stringify(injected),responseSha256:digest(JSON.stringify(injected)),quoteSelections,reviewResponseText,reviewProof,reviewProofSha256:hash(reviewProof),...decision};
 const r={paperId:source.paperId,runId:c.runId,pageKey:'page:'+digest('SYNTHETIC PLAN PAGE'),pageSha256:digest('SYNTHETIC PAGE'),bodySha256:digest('SYNTHETIC BODY'),registrySha256:snapshot.registrySha256,registryVersion:snapshot.registryVersion,
  concepts:concepts.map(({id,facet,label})=>({id,facet,label})),...Object.fromEntries(api.ROLE_KEYS.map(k=>[k,c[k]])),evidenceType:'source-only-taxonomy-v2',classificationContract:api.CONTRACT,classificationRecord:c,source,evidence:concepts,
  evidenceSelectionContract:c.evidenceSelectionContract,quoteSelections,requestStageFingerprint:c.fingerprint,reviewProof,reviewProofSha256:c.reviewProofSha256};
 return {record:seal(r),snapshot,model,injected,quote};
}
function seal(record){const c=record.classificationRecord;delete c.proofSha256;c.proofSha256=hash(c);record.classificationRecordSha256=hash(c);record.classificationProofSha256=c.proofSha256;delete record.proofSha256;record.proofSha256=hash(record);return record;}
// Replay a retained implementation snapshot; classification/review stay synthetic.
function withDependencies(record,dependencies){
 const c=record.classificationRecord,f=c.fingerprintInputs;c.protectedDependencies=structuredClone(dependencies);c.protectedDependencySha256=hash(c.protectedDependencies);f.protectedDependencySha256=c.protectedDependencySha256;
 for(const [key,name]of Object.entries({implementationSha256:'historical-source-taxonomy-classification-v2',snippetImplementationSha256:'source-evidence-snippets-v2',identityImplementationSha256:'historical-source-identity-supplement',schedulerImplementationSha256:'source-classification-scheduler',failureImplementationSha256:'source-classification-failures'}))f[key]=c.protectedDependencies.files['scripts/lib/'+name+'.js'];
 c.fingerprint=hash(f);record.requestStageFingerprint=c.fingerprint;return seal(record);
}
module.exports={fixture,seal,digest,catalog,withDependencies};
