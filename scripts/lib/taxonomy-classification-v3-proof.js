'use strict';
// Strict independent classification-V3 replay and declared371 V2 dispatch.
// Existing V2 validator remains byte unchanged.
// This replay does not verify scientific semantics or public-key signatures.
// Shared JSON/source/NA primitives retain the exact established contracts.
const crypto=require('node:crypto');
const old=require('./taxonomy-v2-proof');
const {TYPES,DOMAINS,FINGERPRINT_KEYS,projectionHash,parseStrictJson,canonical,stableHash}=old;
const CONTRACT='historical-source-taxonomy-classification-v3';
const FACETS={...old.FACETS,engineering:['task','method']};
const ROLE_KEYS=[...old.ROLE_KEYS,'primaryMechanismEvidence'];
const CLASSIFICATION_KEYS=['contract','paperId','runId','fingerprint','fingerprintInputs','registrySha256','source','evidenceSha256','evidenceSelectionContract','protectedDependencies','protectedDependencySha256','modelResponseText','modelResponseSha256','responseText','responseSha256','quoteSelections','reviewResponseText','reviewProof','reviewProofSha256','naFullSourceEvidence','concepts',...ROLE_KEYS,'proofSha256'];
const PAGE_KEYS=['paperId','runId','pageKey','pageSha256','bodySha256','registrySha256','registryVersion','concepts',...ROLE_KEYS,'evidenceType','classificationContract','classificationRecord','classificationRecordSha256','classificationProofSha256','source','evidence','evidenceSelectionContract','quoteSelections','requestStageFingerprint','reviewProof','reviewProofSha256','proofSha256'];
const MODEL_KEYS=['researchType','typeEvidence','domainScope','domainEvidence','primaryResearchRole','primaryMethodId','methodNotApplicable','methodNotApplicableReason','methodNotApplicableEvidence','concepts','primaryMechanismEvidence'];
const SNIPPETS_V3='sealed-source-evidence-snippets-v3-formfeed-split';
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const fail=s=>{throw new Error('历史classification-V3证明拒绝：'+s);};
const map=x=>!!x&&typeof x==='object'&&!Array.isArray(x)&&[Object.prototype,null].includes(Object.getPrototypeOf(x));
const exact=(x,keys,name)=>{if(!map(x)||Object.keys(x).sort().join('|')!==[...keys].sort().join('|'))fail(name+'字段不一致');};
const text=(s,min=1,max=1000)=>typeof s==='string'&&s.isWellFormed()&&s.trim().length>=min&&s.length<=max&&!/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/u.test(s);
const hash=s=>typeof s==='string'&&/^[a-f0-9]{64}$/.test(s);
function validateRecord(record,snapshot,profile,fullsiteAdmission=null){
 const controlled=null;
 const contract=profile.classificationContract||'historical-source-taxonomy-classification-v3';
 if(!['historical-source-taxonomy-classification-v2','historical-source-taxonomy-classification-v3'].includes(contract))fail('未知分类合同');
 const mechanismRoles=contract==='historical-source-taxonomy-classification-v3';
 const roleKeys=mechanismRoles?ROLE_KEYS:old.ROLE_KEYS,modelKeys=mechanismRoles?MODEL_KEYS:MODEL_KEYS.filter(k=>k!=='primaryMechanismEvidence'),facets=mechanismRoles?FACETS:old.FACETS;

 if(!map(record)||record.evidenceType!==(mechanismRoles?'source-only-taxonomy-v3':'source-only-taxonomy-v2')||record.classificationContract!==contract||!map(record.classificationRecord))fail('明确分类契约和完整分类记录必需');
 const c=record.classificationRecord,source=record.source;
 exact(record,mechanismRoles?PAGE_KEYS:PAGE_KEYS.filter(k=>k!=='primaryMechanismEvidence'),"页面记录");
 exact(c,mechanismRoles?CLASSIFICATION_KEYS:CLASSIFICATION_KEYS.filter(k=>k!=='primaryMechanismEvidence'),"分类记录");
 const {proofSha256:pageProof,...pageBody}=record;if(!hash(pageProof)||stableHash(pageBody)!==pageProof)fail('页面证明SHA');
 const {proofSha256:classificationProof,...classificationBody}=c;if(!hash(classificationProof)||stableHash(classificationBody)!==classificationProof||classificationProof!==record.classificationProofSha256||stableHash(c)!==record.classificationRecordSha256)fail('完整分类记录SHA');
 if(c.contract!==contract||c.paperId!==record.paperId||c.runId!==record.runId||c.fingerprint!==record.requestStageFingerprint||c.registrySha256!==record.registrySha256||stableHash(c.source)!==stableHash(source))fail('来源/运行/请求绑定');
 if(!map(snapshot)||snapshot.registrySha256!==record.registrySha256||!profile||profile.registrySha256!==snapshot.registrySha256||profile.registryVersion!==snapshot.registryVersion||profile.projectionSha256!==projectionHash(snapshot)||record.registryVersion!==snapshot.registryVersion)fail('签发词表版本');
 const v3=c.evidenceSelectionContract===SNIPPETS_V3;
 if(profile.snapshotSha256&&sha(JSON.stringify(canonical(snapshot))+'\n')!==profile.snapshotSha256)fail('固定签发词表快照内容漂移');
 if(!v3)fail('编号证据/词表/受控上下文profile');
 for(const field of ['classificationRecordSha256','classificationProofSha256','requestStageFingerprint','reviewProofSha256','pageSha256','bodySha256'])if(!hash(record[field]))fail(field+'格式');
 if(!/^page:[a-f0-9]{64}$/.test(record.pageKey||''))fail('pageKey格式');
 if(!map(source)||source.paperId!==record.paperId||!text(source.sourceId))fail('来源身份');
 if(!fullsiteAdmission&&(Object.hasOwn(source,'fullsiteSourceAuthority')||Object.hasOwn(source,'currentPageSourceIdentity')))fail('全站当前页来源只准入独立namespace');
 for(const field of ['pdfSha256','textSha256','structuredArtifactsSha256'])if(!hash(source[field]))fail('来源hash格式');
 if(fullsiteAdmission){require('./fullsite-source-descriptor-proof').validate(source,fullsiteAdmission);}
 else if(source.kind==='arxiv-fresh-fetch'){
  const b=source.sourceBinding;if(!/^arxiv:[0-9]{4}\.[0-9]{4,5}$/.test(record.paperId)||!map(b)||b.contract!=='fresh-arxiv-rewrite-source-v1'||b.paperId!==record.paperId||b.arxivId!==record.paperId.slice(6)||source.sourceId.replace(/v[1-9][0-9]*$/,'')!==b.arxivId||!Number.isSafeInteger(source.generation)||source.generation<1||b.generation!==source.generation)fail('arXiv绑定');
  for(const f of ['pdfSha256','textSha256','sourceManifestSha256'])if(!hash(source[f])||b[f]!==source[f])fail('arXiv来源hash');
  if(!hash(source.sourceRunIdentitySha256))fail('source run hash');
 }else if(source.kind==='conference-local-pdf'){if(!/^conference:[^\s\x00-\x1f\x7f]+$/.test(record.paperId)||!hash(source.writerInputsSha256))fail('会议来源绑定');}else fail('未知来源类型');
 if(!map(c.protectedDependencies)||c.protectedDependencies.contract!==(profile.dependencyContract||'historical-taxonomy-v3-source-dependency-fingerprint-v1')||!map(c.protectedDependencies.files)||!Object.keys(c.protectedDependencies.files).length||stableHash(c.protectedDependencies)!==c.protectedDependencySha256)fail('生产依赖指纹');
 for(const [name,h]of Object.entries(c.protectedDependencies.files))if(!/^(?:scripts|manual\/scripts)\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_][a-zA-Z0-9_.-]*\.(?:js|py)$/.test(name)||name.split('/').includes('..')||!hash(h))fail('生产依赖路径或SHA');
 const f=c.fingerprintInputs;exact(f,FINGERPRINT_KEYS,'完整请求指纹');
 if(stableHash(f)!==c.fingerprint||f.contract!==contract||f.selectionContract!==c.evidenceSelectionContract||f.paperId!==c.paperId||stableHash(f.source)!==stableHash(source)||f.registrySha256!==record.registrySha256||f.evidenceSha256!==c.evidenceSha256||f.protectedDependencySha256!==c.protectedDependencySha256||f.roleContract!==(profile.roleContract||'historical-source-taxonomy-roles-v3')||f.projectionContract!=='historical-taxonomy-prompt-projection-v2'||!text(f.model)||f.maxTokens!==6000||f.temperature!==0.1||f.reviewMaxTokens!==3000||f.reviewTemperature!==0.1)fail('请求指纹字段漂移');
 for(const k of ['registrySha256','projectionSha256','evidenceSha256','promptSha256','endpointSha256','accountPoolGroupSha256','protectedDependencySha256'])if(!hash(f[k]))fail('请求指纹SHA格式');
 if(f.projectionSha256!==projectionHash(snapshot))fail('正式词表提示投影漂移');
 for(const[k,name]of Object.entries({implementationSha256:profile.implementationFile||'historical-source-taxonomy-classification-v3',snippetImplementationSha256:v3?'source-evidence-snippets-v3':'source-evidence-snippets-v2',identityImplementationSha256:'historical-source-identity-supplement',schedulerImplementationSha256:'source-classification-scheduler',failureImplementationSha256:'source-classification-failures'})){let dependencyPath='scripts/lib/'+name+'.js';if(fullsiteAdmission&&k==='implementationSha256'&&Object.hasOwn(profile,'implementationFilePath')){if(profile.implementationFilePath!=='scripts/fullsite-taxonomy-r4/fullsite-taxonomy-audit-classification.js')fail('新审计实现路径未批准');dependencyPath=profile.implementationFilePath;}if(!Object.hasOwn(c.protectedDependencies.files,dependencyPath)||f[k]!==c.protectedDependencies.files[dependencyPath]||!hash(f[k]))fail('请求实现依赖漂移');}
 if(!fullsiteAdmission)require('./source-descriptor-proof').validateSourceDescriptor(controlled?controlled.sourceDescriptor:source);
 const fullDecision={concepts:c.concepts,...Object.fromEntries(roleKeys.map(k=>[k,c[k]]))};
 if(!Array.isArray(c.concepts)||!Array.isArray(record.evidence)||stableHash(c.concepts)!==stableHash(record.evidence)||stableHash(roleKeys.map(k=>c[k]))!==stableHash(roleKeys.map(k=>record[k])))fail('页面角色/证据投影');
 if(stableHash(c.concepts.map(({id,facet,label})=>({id,facet,label})))!==stableHash(record.concepts))fail('页面概念投影');
 if(!TYPES.includes(c.researchType)||!DOMAINS.includes(c.domainScope))fail('研究类型/领域');
 const byId=new Map(snapshot.concepts.map(n=>[n.id,n])),seen=new Set();
 for(const e of c.concepts){exact(e,['id','facet','label','quote','rationale','quoteStart','evidenceQuoteStart','quoteSha256'],'概念证据');const n=byId.get(e.id);if(!n||n.status==='deprecated'||e.facet!==n.facet||e.label!==n.zh||seen.has(e.id))fail('概念/首选标签');seen.add(e.id);}
 for(const e of c.concepts)if((byId.get(e.id).ancestorIds||[]).some(id=>seen.has(id)))fail('父子同时直接标注');
 exact(c.primaryResearchRole,['kind','conceptId','label'],'主角色');const r=c.primaryResearchRole,n=byId.get(r.conceptId);
 if(!n||!seen.has(n.id)||r.kind!==n.facet||r.label!==n.zh||!facets[c.researchType].includes(r.kind))fail('类型感知主角色');
 const mechanism=mechanismRoles&&c.researchType==='engineering'&&r.kind==='method';
 if(c.primaryTaskId!==(c.researchType==='engineering'&&!mechanism?r.conceptId:'')||c.primaryTaskLabel!==(c.researchType==='engineering'&&!mechanism?r.label:''))fail('工程主任务');
 if(c.primaryScientificTopicId!==(c.researchType==='science'?r.conceptId:'')||c.primaryScientificTopicLabel!==(c.researchType==='science'?r.label:''))fail('科学主主题');
 if(mechanism){
  exact(c.primaryMechanismEvidence,['coreMechanism','crossTaskGenerality'],'机制双证据');
  for(const e of Object.values(c.primaryMechanismEvidence))exact(e,['quote','rationale','quoteStart','evidenceQuoteStart','quoteSha256'],'机制原文证据');
  if(c.methodNotApplicable!==false||c.primaryMethodId!==r.conceptId||c.primaryMethodLabel!==r.label)fail('主机制与主方法必须完全相同且适用');
 }else if(mechanismRoles&&c.primaryMechanismEvidence!==null)fail('普通分支必须显式空机制证据');
 if(typeof c.methodNotApplicable!=='boolean')fail('方法NA类型');
 require('./taxonomy-na-full-source-proof').validateNAFullSourceEvidence(c,source);
 // New371/V3 issuers use the bounded full-source constructor. Legacy issuers
 // keep their original helper; evidenceChars counts quotes, not numbered text.
 if(c.methodNotApplicable){
  const e=c.naFullSourceEvidence;
  const projection=e.snippets.map(s=>`[${s.id}; source UTF16 ${s.quoteStart}:${s.quoteEnd}]\n${s.quote}`).join('\n\n');
  if(e.sourceChars>80000||projection.length>100000)fail('新发行NA完整来源/编号投影预算');
 }
 if(c.methodNotApplicable){if(!['position','experience'].includes(c.researchType)||c.primaryMethodId!==null||c.primaryMethodLabel!==''||!text(c.methodNotApplicableReason,20)||!map(c.methodNotApplicableEvidence)||c.concepts.some(e=>e.facet==='method'))fail('方法不适用窄例外');}
 else{const m=byId.get(c.primaryMethodId);if(!m||m.facet!=='method'||!seen.has(m.id)||c.primaryMethodLabel!==m.zh||c.methodNotApplicableReason!==''||c.methodNotApplicableEvidence!==null)fail('明确主方法');}
 if(c.concepts.length<(c.methodNotApplicable||mechanism?1:2)||c.concepts.length>5)fail('概念数量');
 if(record.evidenceSelectionContract!==(v3?SNIPPETS_V3:SNIPPETS_V2)||c.evidenceSelectionContract!==record.evidenceSelectionContract||!Array.isArray(record.quoteSelections)||stableHash(record.quoteSelections)!==stableHash(c.quoteSelections))fail('编号证据契约');
 const raw=parseStrictJson(c.modelResponseText);exact(raw,modelKeys,'模型选择');
 const injected=parseStrictJson(c.responseText);exact(injected,modelKeys,'注入原文响应');
 if(sha(c.modelResponseText)!==c.modelResponseSha256||sha(c.responseText)!==c.responseSha256)fail('响应原始字节SHA');
 const selections=record.quoteSelections;const wanted=c.concepts.length+2+(c.methodNotApplicable?1:0)+(mechanism?2:0);if(selections.length!==wanted)fail('概念/type/domain/NA编号数量');
 const expectedSelections=new Set();
 function verifySpan(e,kind,conceptId,choice){
  if(kind!=="concept")exact(e,["quote","rationale","quoteStart","evidenceQuoteStart","quoteSha256"],"角色逐字证据");
  if(v3&&typeof e.quote==='string'&&e.quote.includes('\f'))fail('V3所选编号不得跨换页符');
  if(!text(e.quote,20)||!text(e.rationale,5)||!Number.isSafeInteger(e.quoteStart)||e.quoteStart<0||!Number.isSafeInteger(e.evidenceQuoteStart)||e.evidenceQuoteStart<0||sha(e.quote)!==e.quoteSha256)fail('逐字证据结构');
  exact(choice,['evidenceId','rationale'],'编号选择');
  const matches=selections.filter(s=>s.selectionRole===kind&&(kind!=='concept'||s.conceptId===conceptId));if(matches.length!==1)fail('编号唯一性');const s=matches[0];
  const keys=['selectionRole','evidenceId','id','quote','quoteStart','quoteEnd','offsetUnit','quoteSha256',...(kind==='concept'?['conceptId']:[])];exact(s,keys,'编号证据');
  if(s.id!==s.evidenceId||!/^s[0-9]{5}$/.test(s.id)||s.evidenceId!==choice.evidenceId||s.offsetUnit!=='utf16-code-unit'||s.quote!==e.quote||s.quoteSha256!==e.quoteSha256||s.quoteStart!==e.quoteStart||!Number.isSafeInteger(s.quoteEnd)||s.quoteEnd-s.quoteStart!==s.quote.length||choice.rationale!==e.rationale)fail('原编号/逐字位置/理由不一致');
  expectedSelections.add(s);
 }
 for(let i=0;i<c.concepts.length;i++){const e=c.concepts[i],choice=raw.concepts?.[i];exact(choice,['id','evidenceId','rationale'],'概念选择');if(choice.id!==e.id)fail('原模型概念ID');verifySpan(e,'concept',e.id,{evidenceId:choice.evidenceId,rationale:choice.rationale});const output=injected.concepts?.[i];exact(output,['id','quote','rationale'],'注入概念');if(output.id!==e.id||output.quote!==e.quote||output.rationale!==e.rationale)fail('注入概念原文');}
 for(const [field,kind]of [['typeEvidence','researchType'],['domainEvidence','domainScope'],...(c.methodNotApplicable?[['methodNotApplicableEvidence','methodNotApplicable']]:[])]){verifySpan(c[field],kind,null,raw[field]);exact(injected[field],['quote','rationale'],'注入角色原文');if(injected[field].quote!==c[field].quote||injected[field].rationale!==c[field].rationale)fail('注入角色证据');}
 if(mechanism){
  exact(raw.primaryMechanismEvidence,['coreMechanism','crossTaskGenerality'],'原选择机制证据');
  exact(injected.primaryMechanismEvidence,['coreMechanism','crossTaskGenerality'],'注入机制证据');
  for(const [field,kind]of [['coreMechanism','primaryMechanismCore'],['crossTaskGenerality','primaryMechanismCrossTask']]){
   const e=c.primaryMechanismEvidence[field];verifySpan(e,kind,null,raw.primaryMechanismEvidence[field]);
   exact(injected.primaryMechanismEvidence[field],['quote','rationale'],'注入机制原文');
   if(injected.primaryMechanismEvidence[field].quote!==e.quote||injected.primaryMechanismEvidence[field].rationale!==e.rationale)fail('机制注入原文漂移');
  }
 }else if(mechanismRoles&&(raw.primaryMechanismEvidence!==null||injected.primaryMechanismEvidence!==null))fail('响应额外机制证据');
 if(expectedSelections.size!==selections.length||raw.concepts.length!==c.concepts.length||injected.concepts.length!==c.concepts.length)fail('额外证据');
 for(const k of ['researchType','domainScope','primaryMethodId','methodNotApplicable','methodNotApplicableReason'])if(raw[k]!==c[k]||injected[k]!==c[k])fail('响应角色字段漂移');
 exact(raw.primaryResearchRole,['kind','conceptId'],'原选择主角色');if(raw.primaryResearchRole.kind!==r.kind||raw.primaryResearchRole.conceptId!==r.conceptId||stableHash(injected.primaryResearchRole)!==stableHash(raw.primaryResearchRole))fail('响应主角色漂移');
 if(!c.methodNotApplicable&&(raw.methodNotApplicableEvidence!==null||injected.methodNotApplicableEvidence!==null))fail('多余NA证据');
 const review=c.reviewProof;exact(review,['contract','decisionSha256','sourceTextSha256','evidenceSha256','registrySha256','promptSha256','responseSha256','response','model'],'独立审核');if(review.contract!==contract+'-review'||stableHash(review)!==c.reviewProofSha256||c.reviewProofSha256!==record.reviewProofSha256||stableHash(review)!==stableHash(record.reviewProof)||review.decisionSha256!==stableHash(fullDecision)||review.sourceTextSha256!==source.textSha256||review.registrySha256!==record.registrySha256||review.evidenceSha256!==c.evidenceSha256||review.model!==f.model)fail('独立review绑定');
 for(const k of ['decisionSha256','sourceTextSha256','registrySha256','evidenceSha256','promptSha256','responseSha256'])if(!hash(review[k]))fail('review SHA格式');
 const response=parseStrictJson(c.reviewResponseText);exact(response,['accepted','issues','verifiedChecks'],'原审核响应');exact(response.verifiedChecks,['researchType','domainScope','primaryResearchRole','methodRole'],'审核四项');
 if(response.accepted!==true||!Array.isArray(response.issues)||response.issues.length||Object.values(response.verifiedChecks).some(v=>v!==true)||sha(c.reviewResponseText)!==review.responseSha256||stableHash(response)!==stableHash(review.response))fail('独立四项审核未通过');
 return true;
}

function validatePublicRecord(record,snapshot){
 const c=record?.classificationRecord;
 const matches=require('./taxonomy-v3-profiles').profiles.filter(p=>p.registrySha256===record?.registrySha256
  &&p.classificationContract===record?.classificationContract&&p.classificationContract===CONTRACT
  &&p.implementationSha256===c?.fingerprintInputs?.implementationSha256
  &&p.protectedDependencySha256===c?.protectedDependencySha256);
 if(matches.length!==1)fail('尚无唯一根批准的production profile');
 const profile=matches[0];
 if(!profile||!hash(profile.implementationSha256)||!hash(profile.protectedDependencySha256)||!hash(profile.snapshotSha256))fail('尚无根批准的production profile');
 if(record.classificationRecord?.fingerprintInputs?.implementationSha256!==profile.implementationSha256||record.classificationRecord?.protectedDependencySha256!==profile.protectedDependencySha256)fail('根批准producer profile不符');
 return validateRecord(record,snapshot,profile);
}
// Explicit fixture-only API, never called by build-site or the production helper.
// Its synthetic label/profile cannot be obtained from a record or site config.
function validateSyntheticFixture(record,snapshot){
 const profile={registrySha256:'8c89a69ffe7daba6cc9da4ea5789101d6118e326b9978ec3edae1a85e965c8e3',registryVersion:'paper-taxonomy-v2',snapshotSha256:'91947cb14473c88009c2821336ea25bd8a2173b4fea58fc69e1ed1d571613e4f',projectionSha256:'257d5d219ddd4750a0cc5491a418753d051456d027a648c7e41f7f640e6774f0'};
 if(record?.classificationRecord?.fingerprintInputs?.model!=='synthetic-test-model')fail('合成夹具明确标记必需');
 return validateRecord(record,snapshot,profile);
}
function validateDeclared371Profile(record,snapshot,profile){
 if(stableHash(profile)!==stableHash(require('./taxonomy-v2-371-proof').profile))fail('未知371 producer profile');
 if(profile.registrySha256!=='cbb157b602ea9e7a41c84fc28cdda99481aef5e8bfefd8120b1c69900a8ea638'||profile.classificationContract!=='historical-source-taxonomy-classification-v2'||record.registrySha256!==profile.registrySha256)fail('仅根批准371/V2namespace');
 if(record.classificationRecord?.fingerprintInputs?.implementationSha256!==profile.implementationSha256||record.classificationRecord?.protectedDependencySha256!==profile.protectedDependencySha256)fail('根批准371生产者指纹');
 return validateRecord(record,snapshot,profile);
}
function replayFullsite(page,path,audit,snapshot,profile){
 const envelope=require('./fullsite-taxonomy-proof');
 envelope.validateEnvelope(page,path,audit);
 const c=audit.classificationRecord,member=profile.members?.[page.paperId];
 // This deterministic adapter is only an in-memory input to the shared inner
 // validator. It is not issued, stored or presented as historical source-only
 // evidence. The actual outer/page/inner objects keep all original bytes/SHA.
 const r={paperId:page.paperId,runId:page.runId,pageKey:page.pageKey,pageSha256:page.pageSha256,bodySha256:page.bodySha256,registrySha256:page.registrySha256,registryVersion:page.registryVersion,concepts:page.concepts,
  ...Object.fromEntries(ROLE_KEYS.map(k=>[k,page[k]])),evidenceType:'source-only-taxonomy-v3',classificationContract:CONTRACT,classificationRecord:c,classificationRecordSha256:audit.classificationRecordSha256,classificationProofSha256:c.proofSha256,
  source:c.source,evidence:c.concepts,evidenceSelectionContract:c.evidenceSelectionContract,quoteSelections:c.quoteSelections,requestStageFingerprint:c.fingerprint,reviewProof:c.reviewProof,reviewProofSha256:c.reviewProofSha256};
 r.proofSha256=stableHash(r);
 return validateRecord(r,snapshot,profile,{paperId:page.paperId,admission:audit.planAdmission,member});
}
function validateAdmittedFullsiteRecord(page,path,audit,snapshot,profile,context){
 const envelope=require('./fullsite-taxonomy-proof');
 const approved=envelope.approvedProfile(page,audit,require('./fullsite-taxonomy-profiles').profiles,context);
 if(stableHash(approved)!==stableHash(profile))fail('fullsite approval context changed');
 return replayFullsite(page,path,audit,snapshot,approved);
}
// Explicit fixture entry, unavailable to build/UI. Synthetic context cannot
// approve a real producer/plan or be loaded from a supplement/site parameter.
function validateSyntheticFullsiteFixture(page,path,audit,snapshot,profile,context){
 if(audit?.classificationRecord?.fingerprintInputs?.model!=='synthetic-test-model')fail('合成夹具明确标记必需');
 const approved=require('./fullsite-taxonomy-proof').approvedProfile(page,audit,[profile],context);
 return replayFullsite(page,path,audit,snapshot,approved);
}
module.exports={CONTRACT,TYPES,DOMAINS,FACETS,ROLE_KEYS,FINGERPRINT_KEYS,projectionHash,parseStrictJson,canonical,stableHash,validatePublicRecord,validateSyntheticFixture,validateDeclared371Profile,validateAdmittedFullsiteRecord,validateSyntheticFullsiteFixture};
