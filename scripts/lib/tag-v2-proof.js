'use strict';
// Replays the public historical-v2 projection. Source bytes and semantic review
// remain the issuer's responsibility; this module never signs accepted records.
const crypto=require('node:crypto');
const CONTRACT='historical-source-taxonomy-classification-v2';
const TYPES=['engineering','science','analysis','evaluation','resource','review','experience','position'];
const DOMAINS=['in-domain','cross-domain','adjacent-domain','out-of-domain'];
const FACETS={engineering:['task'],science:['scientific_topic'],analysis:['scientific_topic','research_focus'],evaluation:['research_focus'],resource:['artifact'],review:['task','scientific_topic','research_focus'],experience:['task','scientific_topic','research_focus','artifact'],position:['scientific_topic','research_focus']};
const ROLE_KEYS=['researchType','typeEvidence','domainScope','domainEvidence','primaryResearchRole','primaryTaskId','primaryTaskLabel','primaryScientificTopicId','primaryScientificTopicLabel','primaryMethodId','primaryMethodLabel','methodNotApplicable','methodNotApplicableReason','methodNotApplicableEvidence'];
const MODEL_KEYS=['researchType','typeEvidence','domainScope','domainEvidence','primaryResearchRole','primaryMethodId','methodNotApplicable','methodNotApplicableReason','methodNotApplicableEvidence','concepts'];
const FINGERPRINT_KEYS=['contract','selectionContract','paperId','source','registrySha256','projectionSha256','evidenceSha256','promptSha256','model','endpointSha256','accountPoolGroupSha256','implementationSha256','snippetImplementationSha256','identityImplementationSha256','schedulerImplementationSha256','failureImplementationSha256','protectedDependencySha256','roleContract','projectionContract','maxTokens','temperature','reviewMaxTokens','reviewTemperature'];
const SNIPPETS_V2='sealed-source-evidence-snippets-v2',SNIPPETS_V3='sealed-source-evidence-snippets-v3-formfeed-split';
const V3_REGISTRY='8c89a69ffe7daba6cc9da4ea5789101d6118e326b9978ec3edae1a85e965c8e3';
const REGISTRIES={a3b75a149852076933ec2895de77c09c73667c8334bff046dde3b20b69ded03d:'paper-taxonomy-v1', '68bbb2a0fb3c142ef21369320aca58f17b0ff7072e85923ec1c33dc2be98428c':'paper-taxonomy-v2', [V3_REGISTRY]:'paper-taxonomy-v2'};
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const stableHash=x=>sha(JSON.stringify(canonical(x)));
const fail=s=>{throw new Error('历史v2分类证明拒绝：'+s);};
const map=x=>!!x&&typeof x==='object'&&!Array.isArray(x)&&[Object.prototype,null].includes(Object.getPrototypeOf(x));
const exact=(x,keys,name)=>{if(!map(x)||Object.keys(x).sort().join('|')!==[...keys].sort().join('|'))fail(name+'字段不一致');};
const text=(s,min=1,max=1000)=>typeof s==='string'&&s.isWellFormed()&&s.trim().length>=min&&s.length<=max&&!/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/u.test(s);
const hash=s=>typeof s==='string'&&/^[a-f0-9]{64}$/.test(s);
function projectionHash(snapshot){
 const facets=['task','method','setting','signal','application','research_focus','artifact','scientific_topic','model_family'];
 const compact=s=>String(s||'').replace(/[\r\n|]+/g,' ').replace(/\s+/g,' ').trim();
 const lines=['contract=paper-taxonomy-prompt-projection-v1','registry_version='+snapshot.registryVersion,'registry_sha256='+snapshot.registrySha256,'只允许输出下列 active 概念的中文首选标签；ID 用于消歧，不得自造标签或输出同义词。'];let facet=null;
 for(const n of snapshot.concepts.filter(n=>n.status==='active').sort((a,b)=>facets.indexOf(a.facet)-facets.indexOf(b.facet)||a.id.localeCompare(b.id))){if(n.facet!==facet){facet=n.facet;lines.push('['+facet+']');}lines.push([n.id,'#'+n.zh,compact(n.definition),compact(n.scopeNote)].join('|'));}
 return sha('historical-taxonomy-prompt-projection-v2\n'+lines.join('\n')+'\n');
}
function parseStrictJson(raw){
 if(typeof raw!=='string')fail('原始JSON必须是字符串');const s=raw.trim();let i=0;
 const space=()=>{while(i<s.length&&/\s/.test(s[i]))i++;};
 const string=()=>{const a=i++;while(i<s.length){const c=s[i++];if(c==='"')return JSON.parse(s.slice(a,i));if(c==='\\')i++;}fail('JSON字符串未闭合');};
 const value=()=>{space();const c=s[i];if(c==='"'){string();return;}if(c==='{'){i++;space();const keys=new Set();if(s[i]==='}'){i++;return;}while(i<s.length){space();if(s[i]!=='"')fail('JSON键必须是字符串');const k=string();if(keys.has(k))fail('JSON重复键');keys.add(k);space();if(s[i++]!==':')fail('JSON缺冒号');value();space();const d=s[i++];if(d==='}')return;if(d!==',')fail('JSON分隔错误');}fail('JSON对象未闭合');}if(c==='['){i++;space();if(s[i]===']'){i++;return;}while(i<s.length){value();space();const d=s[i++];if(d===']')return;if(d!==',')fail('JSON数组分隔错误');}fail('JSON数组未闭合');}const m=s.slice(i).match(/^(?:true|false|null|-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)/);if(!m)fail('无效JSON');i+=m[0].length;};
 if(!s.startsWith('{')||!s.endsWith('}'))fail('必须是无围栏JSON对象');value();space();if(i!==s.length)fail('JSON额外内容');return JSON.parse(s);
}
function validateRecord(record,snapshot,controlled){
 if(!map(record)||record.evidenceType!==(controlled?'controlled-current-page-source-taxonomy-v2':'source-only-taxonomy-v2')||record.classificationContract!==CONTRACT||!map(record.classificationRecord))fail('明确v2契约和完整分类记录必需');
 const c=record.classificationRecord,source=record.source;
 const {proofSha256:pageProof,...pageBody}=record;if(!hash(pageProof)||stableHash(pageBody)!==pageProof)fail('页面证明SHA');
 const {proofSha256:classificationProof,...classificationBody}=c;if(!hash(classificationProof)||stableHash(classificationBody)!==classificationProof||classificationProof!==record.classificationProofSha256||stableHash(c)!==record.classificationRecordSha256)fail('完整分类记录SHA');
 if(c.contract!==CONTRACT||c.paperId!==record.paperId||c.runId!==record.runId||c.fingerprint!==record.requestStageFingerprint||c.registrySha256!==record.registrySha256||stableHash(c.source)!==stableHash(source))fail('来源/运行/请求绑定');
 if(!map(snapshot)||snapshot.registrySha256!==record.registrySha256||REGISTRIES[snapshot.registrySha256]!==snapshot.registryVersion||record.registryVersion!==snapshot.registryVersion)fail('签发词表版本');
 const v3=c.evidenceSelectionContract===SNIPPETS_V3;
 if(!(v3?(!controlled&&record.registrySha256===V3_REGISTRY):(c.evidenceSelectionContract===SNIPPETS_V2&&record.registrySha256!==V3_REGISTRY)))fail('编号证据/词表/受控上下文profile');
 for(const field of ['classificationRecordSha256','classificationProofSha256','requestStageFingerprint','reviewProofSha256','pageSha256','bodySha256'])if(!hash(record[field]))fail(field+'格式');
 if(!/^page:[a-f0-9]{64}$/.test(record.pageKey||''))fail('pageKey格式');
 if(!map(source)||source.paperId!==record.paperId||!text(source.sourceId))fail('来源身份');
 for(const field of ['pdfSha256','textSha256','structuredArtifactsSha256'])if(!hash(source[field]))fail('来源hash格式');
 if(source.kind==='arxiv-fresh-fetch'){
  const b=source.sourceBinding;if(!/^arxiv:[0-9]{4}\.[0-9]{4,5}$/.test(record.paperId)||!map(b)||b.contract!=='fresh-arxiv-rewrite-source-v1'||b.paperId!==record.paperId||b.arxivId!==record.paperId.slice(6)||source.sourceId.replace(/v[1-9][0-9]*$/,'')!==b.arxivId||!Number.isSafeInteger(source.generation)||source.generation<1||b.generation!==source.generation)fail('arXiv绑定');
  for(const f of ['pdfSha256','textSha256','sourceManifestSha256'])if(!hash(source[f])||b[f]!==source[f])fail('arXiv来源hash');
  if(!hash(source.sourceRunIdentitySha256))fail('source run hash');
 }else if(source.kind==='conference-local-pdf'){if(!/^conference:[^\s\x00-\x1f\x7f]+$/.test(record.paperId)||!hash(source.writerInputsSha256))fail('会议来源绑定');}else fail('未知来源类型');
 if(!map(c.protectedDependencies)||c.protectedDependencies.contract!=='historical-taxonomy-v2-source-dependency-fingerprint-v1'||!map(c.protectedDependencies.files)||!Object.keys(c.protectedDependencies.files).length||stableHash(c.protectedDependencies)!==c.protectedDependencySha256)fail('生产依赖指纹');
 for(const [name,h]of Object.entries(c.protectedDependencies.files))if(!/^(?:scripts|manual\/scripts)\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_][a-zA-Z0-9_.-]*\.(?:js|py)$/.test(name)||name.split('/').includes('..')||!hash(h))fail('生产依赖路径或SHA');
 const f=c.fingerprintInputs;exact(f,FINGERPRINT_KEYS,'完整请求指纹');
 if(stableHash(f)!==c.fingerprint||f.contract!==CONTRACT||f.selectionContract!==c.evidenceSelectionContract||f.paperId!==c.paperId||stableHash(f.source)!==stableHash(source)||f.registrySha256!==record.registrySha256||f.evidenceSha256!==c.evidenceSha256||f.protectedDependencySha256!==c.protectedDependencySha256||f.roleContract!=='historical-source-taxonomy-roles-v2'||f.projectionContract!=='historical-taxonomy-prompt-projection-v2'||!text(f.model)||f.maxTokens!==6000||f.temperature!==0.1||f.reviewMaxTokens!==3000||f.reviewTemperature!==0.1)fail('请求指纹字段漂移');
 for(const k of ['registrySha256','projectionSha256','evidenceSha256','promptSha256','endpointSha256','accountPoolGroupSha256','protectedDependencySha256'])if(!hash(f[k]))fail('请求指纹SHA格式');
 if(f.projectionSha256!==projectionHash(snapshot))fail('正式词表提示投影漂移');
 for(const[k,name]of Object.entries({implementationSha256:'historical-source-taxonomy-classification-v2',snippetImplementationSha256:v3?'source-evidence-snippets-v3':'source-evidence-snippets-v2',identityImplementationSha256:'historical-source-identity-supplement',schedulerImplementationSha256:'source-classification-scheduler',failureImplementationSha256:'source-classification-failures'}))if(f[k]!==c.protectedDependencies.files['scripts/lib/'+name+'.js']||!hash(f[k]))fail('请求实现依赖漂移');
 require('./source-descriptor-proof').validateSourceDescriptor(controlled?controlled.sourceDescriptor:source);
 const fullDecision={concepts:c.concepts,...Object.fromEntries(ROLE_KEYS.map(k=>[k,c[k]]))};
 if(!Array.isArray(c.concepts)||!Array.isArray(record.evidence)||stableHash(c.concepts)!==stableHash(record.evidence)||stableHash(ROLE_KEYS.map(k=>c[k]))!==stableHash(ROLE_KEYS.map(k=>record[k])))fail('页面角色/证据投影');
 if(stableHash(c.concepts.map(({id,facet,label})=>({id,facet,label})))!==stableHash(record.concepts))fail('页面概念投影');
 if(!TYPES.includes(c.researchType)||!DOMAINS.includes(c.domainScope))fail('研究类型/领域');
 const byId=new Map(snapshot.concepts.map(n=>[n.id,n])),seen=new Set();
 for(const e of c.concepts){exact(e,['id','facet','label','quote','rationale','quoteStart','evidenceQuoteStart','quoteSha256'],'概念证据');const n=byId.get(e.id);if(!n||n.status==='deprecated'||e.facet!==n.facet||e.label!==n.zh||seen.has(e.id))fail('概念/首选标签');seen.add(e.id);}
 for(const e of c.concepts)if((byId.get(e.id).ancestorIds||[]).some(id=>seen.has(id)))fail('父子同时直接标注');
 exact(c.primaryResearchRole,['kind','conceptId','label'],'主角色');const r=c.primaryResearchRole,n=byId.get(r.conceptId);
 if(!n||!seen.has(n.id)||r.kind!==n.facet||r.label!==n.zh||!FACETS[c.researchType].includes(r.kind))fail('类型感知主角色');
 if(c.primaryTaskId!==(c.researchType==='engineering'?r.conceptId:'')||c.primaryTaskLabel!==(c.researchType==='engineering'?r.label:''))fail('工程主任务');
 if(c.primaryScientificTopicId!==(c.researchType==='science'?r.conceptId:'')||c.primaryScientificTopicLabel!==(c.researchType==='science'?r.label:''))fail('科学主主题');
 if(typeof c.methodNotApplicable!=='boolean')fail('方法NA类型');
 require('./tag-na-full-source-proof').validateNAFullSourceEvidence(c,source);
 if(c.methodNotApplicable){if(!['position','experience'].includes(c.researchType)||c.primaryMethodId!==null||c.primaryMethodLabel!==''||!text(c.methodNotApplicableReason,20)||!map(c.methodNotApplicableEvidence)||c.concepts.some(e=>e.facet==='method'))fail('方法不适用窄例外');}
 else{const m=byId.get(c.primaryMethodId);if(!m||m.facet!=='method'||!seen.has(m.id)||c.primaryMethodLabel!==m.zh||c.methodNotApplicableReason!==''||c.methodNotApplicableEvidence!==null)fail('明确主方法');}
 if(c.concepts.length<(c.methodNotApplicable?1:2)||c.concepts.length>5)fail('概念数量');
 if(record.evidenceSelectionContract!==(v3?SNIPPETS_V3:SNIPPETS_V2)||c.evidenceSelectionContract!==record.evidenceSelectionContract||!Array.isArray(record.quoteSelections)||stableHash(record.quoteSelections)!==stableHash(c.quoteSelections))fail('编号证据契约');
 const raw=parseStrictJson(c.modelResponseText);exact(raw,MODEL_KEYS,'模型选择');
 const injected=parseStrictJson(c.responseText);exact(injected,MODEL_KEYS,'注入原文响应');
 if(sha(c.modelResponseText)!==c.modelResponseSha256||sha(c.responseText)!==c.responseSha256)fail('响应原始字节SHA');
 const selections=record.quoteSelections;const wanted=c.concepts.length+2+(c.methodNotApplicable?1:0);if(selections.length!==wanted)fail('概念/type/domain/NA编号数量');
 const expectedSelections=new Set();
 function verifySpan(e,kind,conceptId,choice){
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
 if(expectedSelections.size!==selections.length||raw.concepts.length!==c.concepts.length||injected.concepts.length!==c.concepts.length)fail('额外证据');
 for(const k of ['researchType','domainScope','primaryMethodId','methodNotApplicable','methodNotApplicableReason'])if(raw[k]!==c[k]||injected[k]!==c[k])fail('响应角色字段漂移');
 exact(raw.primaryResearchRole,['kind','conceptId'],'原选择主角色');if(raw.primaryResearchRole.kind!==r.kind||raw.primaryResearchRole.conceptId!==r.conceptId||stableHash(injected.primaryResearchRole)!==stableHash(raw.primaryResearchRole))fail('响应主角色漂移');
 if(!c.methodNotApplicable&&(raw.methodNotApplicableEvidence!==null||injected.methodNotApplicableEvidence!==null))fail('多余NA证据');
 const review=c.reviewProof;exact(review,['contract','decisionSha256','sourceTextSha256','evidenceSha256','registrySha256','promptSha256','responseSha256','response','model'],'独立审核');if(review.contract!==CONTRACT+'-review'||stableHash(review)!==c.reviewProofSha256||c.reviewProofSha256!==record.reviewProofSha256||stableHash(review)!==stableHash(record.reviewProof)||review.decisionSha256!==stableHash(fullDecision)||review.sourceTextSha256!==source.textSha256||review.registrySha256!==record.registrySha256||review.evidenceSha256!==c.evidenceSha256||review.model!==f.model)fail('独立review绑定');
 for(const k of ['decisionSha256','sourceTextSha256','registrySha256','evidenceSha256','promptSha256','responseSha256'])if(!hash(review[k]))fail('review SHA格式');
 const response=parseStrictJson(c.reviewResponseText);exact(response,['accepted','issues','verifiedChecks'],'原审核响应');exact(response.verifiedChecks,['researchType','domainScope','primaryResearchRole','methodRole'],'审核四项');
 if(response.accepted!==true||!Array.isArray(response.issues)||response.issues.length||Object.values(response.verifiedChecks).some(v=>v!==true)||sha(c.reviewResponseText)!==review.responseSha256||stableHash(response)!==stableHash(review.response))fail('独立四项审核未通过');
 return true;
}
function validatePublicRecord(record,snapshot){return validateRecord(record,snapshot,null);}
function validateControlledCurrentPageRecord(record,snapshot){return validateRecord(record,snapshot,require('./current-page-tag-v2-proof').validateProductionOuter(record));}
module.exports={CONTRACT,TYPES,DOMAINS,FACETS,ROLE_KEYS,FINGERPRINT_KEYS,projectionHash,parseStrictJson,canonical,stableHash,validatePublicRecord,validateControlledCurrentPageRecord};
