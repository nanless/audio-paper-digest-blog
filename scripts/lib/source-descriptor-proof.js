'use strict';
// Public descriptor integrity only. The formal issuer/exporter verifies sealed
// source bytes, metadata bindings and receipts; these SHA commitments are not
// public-key signatures or a substitute for that source replay.
const crypto=require('node:crypto');
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const stableHash=x=>crypto.createHash('sha256').update(JSON.stringify(canonical(x))).digest('hex');
const hash=x=>typeof x==='string'&&/^[a-f0-9]{64}$/.test(x);
const map=x=>x!==null&&typeof x==='object'&&!Array.isArray(x);
const fail=m=>{throw new Error('历史v2来源描述拒绝：'+m);};
const exact=(x,keys)=>{if(!map(x)||Object.keys(x).sort().join('|')!==[...keys].sort().join('|'))fail('字段结构');};
function validateSourceDescriptor(s){
 if(!map(s))fail('来源必须为对象');
 if(Object.hasOwn(s,'currentPageClassificationBinding'))fail('当前页分类须走单独受限契约');
 const sumra=require('./sumra-official-source-proof');
 if((s.paperId===sumra.PAPER_ID&&s.versionRelation===sumra.RELATION)||(Array.isArray(s.sourceBindings)&&s.sourceBindings.some(b=>b?.acquisition?.sourceKind===sumra.SOURCE_KIND)))return sumra.validateSumraSourceDescriptor(s);
 if(s.kind==='arxiv-fresh-fetch'){
  const match=/^([0-9]{4}\.[0-9]{4,5})(?:v([1-9][0-9]*))?$/.exec(s.sourceId||'');
  if(!match||s.paperId!=='arxiv:'+match[1]||!Number.isSafeInteger(s.generation)||s.generation<1||!map(s.sourceBinding))fail('arXiv身份');
  const id=match[1],b=s.sourceBinding;
  if(b.contract!=='fresh-arxiv-rewrite-source-v1'||b.paperId!==s.paperId||b.arxivId!==id||b.generation!==s.generation)fail('arXiv绑定');
  for(const field of ['pdfSha256','textSha256','sourceManifestSha256'])if(!hash(s[field])||b[field]!==s[field])fail('arXiv来源hash');
  for(const field of ['sourceRunIdentitySha256','structuredArtifactsSha256'])if(!hash(s[field])||(Object.hasOwn(b,field)&&b[field]!==s[field]))fail('arXiv扩展hash');
  if(Object.hasOwn(s,'sourceBindings'))fail('arXiv不能携带会议绑定');
  let warning='';
  if(Object.hasOwn(s,'pdfVersionBinding')){
   const v=s.pdfVersionBinding;
   exact(v,['contract','paperId','sourceId','textUrl','pdfRequestedUrl','pdfSha256','sourceManifestSha256','textVersion','pdfVersion','pdfVersionAuthenticated','status']);
   if(!match[2]||Object.hasOwn(s,'sourceVersion')||v.contract!=='sealed-arxiv-pdf-version-binding-v1'||v.paperId!==s.paperId||v.sourceId!==s.sourceId||!['https://arxiv.org/html/'+s.sourceId,'https://arxiv.org/abs/'+s.sourceId].includes(v.textUrl)||!['https://arxiv.org/pdf/'+id,'https://arxiv.org/pdf/'+id+'.pdf'].includes(v.pdfRequestedUrl)||v.textVersion!==Number(match[2])||v.pdfVersion!=='unspecified'||v.pdfVersionAuthenticated!==false||v.status!=='versioned-text-unversioned-pdf-url'||v.pdfSha256!==s.pdfSha256||v.sourceManifestSha256!==s.sourceManifestSha256)fail('未指定PDF版本绑定');
   warning='封存文本来自 '+s.sourceId+'；实际 PDF 链接 '+v.pdfRequestedUrl+' 未指定版本。已确认属于同一论文，但尚未确认 PDF 对应 v'+match[2]+'。';
   if(Object.hasOwn(s,'pdfUrl')&&s.pdfUrl!==v.pdfRequestedUrl)fail('PDF URL漂移');
  }
  if(Object.hasOwn(s,'sourceVersion')){
   const v=s.sourceVersion;
   exact(v,['contract','version','canonicalArxivId','selectedSourceId','textSourceId','selectedPdfUrl','currentPdfAvailable','attemptedCurrentPdfStatus','attemptedCurrentPdfUrl','warning','identitySha256']);
   if(!match[2]||v.contract!=='arxiv-historical-version-source-v1'||v.version!==1||v.canonicalArxivId!==id||v.selectedSourceId!==s.sourceId||v.textSourceId!==s.sourceId||v.currentPdfAvailable!==false||v.attemptedCurrentPdfStatus!==404||!['https://arxiv.org/pdf/'+s.sourceId,'https://arxiv.org/pdf/'+s.sourceId+'.pdf'].includes(v.selectedPdfUrl)||!['https://arxiv.org/pdf/'+id,'https://arxiv.org/pdf/'+id+'.pdf'].includes(v.attemptedCurrentPdfUrl))fail('历史404版本来源');
   warning='arXiv 当前无版本 PDF '+v.attemptedCurrentPdfUrl+' 返回 HTTP 404，当前稿不可用；本次只封存并分析官方历史版本 '+s.sourceId+'（'+v.selectedPdfUrl+'），不得暗示当前稿仍有效。';
   const {identitySha256,...body}=v;if(v.warning!==warning||!hash(identitySha256)||stableHash(body)!==identitySha256)fail('历史版本闭合');
   if(Object.hasOwn(s,'pdfUrl')&&s.pdfUrl!==v.selectedPdfUrl)fail('历史PDF URL漂移');
  }
  if(Object.hasOwn(s,'sourceUrl')&&s.sourceUrl!=='https://arxiv.org/abs/'+s.sourceId)fail('原文URL漂移');
  if(Object.hasOwn(s,'pdfUrl')&&!Object.hasOwn(s,'pdfVersionBinding')&&!Object.hasOwn(s,'sourceVersion')&&!['https://arxiv.org/pdf/'+s.sourceId,'https://arxiv.org/pdf/'+s.sourceId+'.pdf'].includes(s.pdfUrl))fail('无版本绑定的PDF URL漂移');
  if(s.sourceVersionWarning!==undefined&&s.sourceVersionWarning!==warning)fail('无证据版本警示');
  if(warning&&s.pdfVersionBinding&&s.sourceVersionWarning!==warning)fail('版本警示缺失');
  return true;
 }
 if(s.kind!=='conference-local-pdf'||!/^conference:[^\s\x00-\x1f\x7f]+$/.test(s.paperId||''))fail('未知来源');
 let official='';
 if(/^conference:icassp:[0-9]{4}:icassp-arnumber:[1-9][0-9]*$/.test(s.paperId))official='https://ieeexplore.ieee.org/document/'+s.paperId.split(':').at(-1);
 if(/^conference:(icml|iclr):[0-9]{4}:openreview-forum-id:[A-Za-z0-9_-]{6,128}$/.test(s.paperId))official='https://openreview.net/forum?id='+s.paperId.split(':').at(-1);
 if(!official||s.sourceId!==s.paperId||s.sourceUrl!==official||s.pdfUrl!==''||typeof s.originalTitle!=='string'||!s.originalTitle.trim()||!Array.isArray(s.sourceBindings)||!s.sourceBindings.length||Object.hasOwn(s,'acquisition')||Object.hasOwn(s,'pdfVersionBinding')||Object.hasOwn(s,'sourceVersion'))fail('会议公开身份描述');
 for(const field of ['writerInputsSha256','pdfSha256','textSha256','structuredArtifactsSha256'])if(!hash(s[field]))fail('会议hash');
 const fields=['sourceSet','provenance','metadataSha256','metadataRecordIndex','metadataIdentityBindingSha256','pdfSha256','pdfBytes','pdfIdentityBindingSha256','sourceBindingSha256','acquisition','acquisitionSha256'];
 s.sourceBindings.forEach((b,i)=>{
  exact(b,fields);if(typeof b.sourceSet!=='string'||!b.sourceSet||typeof b.provenance!=='string'||!b.provenance||!Number.isSafeInteger(b.metadataRecordIndex)||b.metadataRecordIndex<0||!Number.isSafeInteger(b.pdfBytes)||b.pdfBytes<1)fail('会议绑定字段');
  for(const field of ['metadataSha256','metadataIdentityBindingSha256','pdfSha256','pdfIdentityBindingSha256','sourceBindingSha256','acquisitionSha256'])if(!hash(b[field]))fail('会议绑定hash');
  if(i===0&&b.pdfSha256!==s.pdfSha256)fail('会议PDFhash漂移');
  const a=b.acquisition,allowed=['sourceKind','receipt','sourceTitle','sourceDoi','sourceAuthors','versionRelation','provenanceStatement','openreviewResponseBytes'];
  if(!map(a)||Object.keys(a).some(k=>!allowed.includes(k))||!['retained-local-no-network-receipt','author-prior-preprint-cross-version','official-arxiv-versioned-pdf'].includes(a.sourceKind))fail('会议获取字段');
  if(a.sourceKind==='retained-local-no-network-receipt'){
   if(s.provenanceDisclosure!=='历史本地封存来源；未记录下载时网络响应，身份与PDF/metadata绑定已重放。'||a.receipt||a.versionRelation||a.sourceTitle||a.sourceDoi||a.openreviewResponseBytes||a.provenanceStatement!=='PDF bytes predate the network receipt system and are retained local crawler input.')fail('本地封存披露');
  }else{
   exact(a.receipt,['fileSha256','selfSha256']);if(!hash(a.receipt.fileSha256)||!hash(a.receipt.selfSha256)||s.provenanceDisclosure)fail('会议receipt');
  }
  if(s.versionRelation){
   let valid=false;
   if(s.paperId==='conference:icml:2026:openreview-forum-id:n1mAjfRDZ6')valid=s.versionRelation==='author-prior-preprint-with-different-title'&&s.sourceTitle==='Beyond Words: Toward Audio-First Foundation Models for Effortless Human-Computer Interaction'&&s.sourceDoi==='10.2139/ssrn.6288899'&&a.sourceKind==='author-prior-preprint-cross-version'&&a.provenanceStatement==='PDF bytes were obtained from the author prior preprint through the fixed SSRN record. Its title differs from the ICML record; it is neither the ICML camera-ready paper nor OpenReview response bytes.'&&s.sourceVersionWarning==='本次分析使用可访问的作者早期预印本，不是会议 camera-ready 定稿；标题、内容、实验结果和结论可能与会议最终版本不同。';
   if(s.paperId==='conference:icml:2026:openreview-forum-id:jfpkqjhex4')valid=s.versionRelation==='same-paper-versioned-official-preprint'&&s.sourceTitle==='Position: Towards Responsible Evaluation for Text-to-Speech'&&!s.sourceDoi&&a.sourceKind==='official-arxiv-versioned-pdf'&&a.provenanceStatement==='PDF bytes were fetched from the versioned official arXiv PDF endpoint; they are not OpenReview response bytes.'&&s.sourceVersionWarning==='封存PDF来自同标题、同作者的官方 arXiv 2510.06927v3 预印本；不是 OpenReview 下载响应，也未据此认证 ICML camera-ready 定稿。';
   if(!valid||a.openreviewResponseBytes!==false||a.versionRelation!==s.versionRelation||a.sourceTitle!==s.sourceTitle||(a.sourceDoi||'')!==(s.sourceDoi||''))fail('会议替代版本白名单');
  }else if(a.versionRelation||s.sourceVersionWarning||s.sourceTitle||s.sourceDoi||a.sourceKind!=='retained-local-no-network-receipt')fail('未批准会议版本声明');
 });
 return true;
}
module.exports={validateSourceDescriptor};
