'use strict';
// Explicitly synthetic classification/source/review/authority. Never published.
const base=require('./classification-v3-public');
const shared=require('../../scripts/lib/tag-classification-v3-proof');
const api=require('../../scripts/lib/fullsite-tag-proof');
const {stableHash}=shared,sha=api.sha;
function fixture() {
  const old=base.fixture({mechanism:false}),r=JSON.parse(JSON.stringify(old.record)),c=r.classificationRecord;
  const text='---\ntitle: Synthetic audit fixture\npaper_digest_arxiv_id: "'+c.paperId.slice(6)+'"\n---\n# Synthetic audit fixture\nBody retained exactly.\n';
  const body=text.slice(text.indexOf('---\n',4)+4),id=c.paperId,authoritySha=sha('SYNTHETIC private source authority');
  const pages=[1,2].map(i=>({pagePath:'content/posts/synthetic-audit-'+i+'.md',pageKey:'page:'+sha('SYNTHETIC guide '+i),pageSha256:sha(text),bodySha256:sha(body)}));
  c.source={kind:'fullsite-sealed-arxiv-source-v1',paperId:id,sourceId:id.slice(6),sourceTitle:'Synthetic audit fixture',sourceTitleBinding:{contract:'sealed-arxiv-title-binding-v1',normalizationContract:'fullsite-source-title-normalization-front-window-v2',basis:'sealed-runtime-metadata',runtimeMetadataTitleSha256:sha('Synthetic audit fixture'),sourceTitleSha256:sha('Synthetic audit fixture'),sourceTextSha256:c.source.textSha256,sourceOpeningLine:null},sourceVersion:null,sourceVersionWarning:null,sourceUrl:'https://arxiv.org/abs/'+id.slice(6),pdfUrl:'https://arxiv.org/pdf/'+id.slice(6),textSha256:c.source.textSha256,pdfSha256:c.source.pdfSha256,sourceManifestSha256:c.source.sourceManifestSha256,structuredArtifactsSha256:c.source.structuredArtifactsSha256,
    fullsiteSourceAuthority:{contract:'sealed-native-arxiv-source-v1',authoritySha256:authoritySha,physicalPinsSha256:sha('SYNTHETIC physical source pins')},
    currentPageSourceIdentity:{contract:'fullsite-current-page-sealed-source-identity-v1',normalizationContract:'fullsite-source-title-normalization-front-window-v2',paperId:id,sourceTitleSha256:sha('Synthetic audit fixture'),pages:pages.map(p=>({pagePath:p.pagePath,pageSha256:p.pageSha256,bodySha256:p.bodySha256,paperId:id,originalTitleSha256:sha('Synthetic audit fixture'),identityBasis:'explicit-current-page-identity'})),disclosure:'本次分类将当前页面明确论文身份与封存来源重新核对；不宣称补齐旧导读的来源审核。'}};
  base.sync(r);
  const dependencies={contract:'fullsite-taxonomy-audit-protected-dependencies-v1',native:c.protectedDependencies,source:{contract:'historical-taxonomy-v3-source-dependency-fingerprint-v1',files:{'scripts/lib/conference-source-context.js':sha('SYNTHETIC source loader')}},own:Object.fromEntries(['paths','plan','source','runner','','original-extraction','original-conference-authority','title','title-association','official-title'].map(n=>['fullsite-taxonomy-audit'+(n?'-'+n:'')+'.js',sha('SYNTHETIC outer '+n)]))};
  const admission={contract:'fullsite-current-page-plan-admission-v1',manifestSha256:sha('SYNTHETIC private plan manifest'),scopeSha256:stableHash([{paperId:id,pages}]),blogHead:'1'.repeat(40),blogTree:'2'.repeat(40),paperId:id,pages,sourceAuthoritySha256:authoritySha};
  const f={contract:api.AUDIT_CONTRACT,manifestSha256:admission.manifestSha256,scopeSha256:admission.scopeSha256,blogHead:admission.blogHead,blogTree:admission.blogTree,paperAuthoritySha256:sha('SYNTHETIC whole private paper authority'),nativeFingerprintInputs:c.fingerprintInputs,protectedDependencySha256:stableHash(dependencies)};
  const audit={contract:api.AUDIT_CONTRACT,paperId:id,runId:c.runId,fingerprint:stableHash(f),fingerprintInputs:f,planAdmission:admission,classificationRecord:c,classificationRecordSha256:stableHash(c),protectedDependencies:dependencies};audit.proofSha256=stableHash(audit);
  const history={contract:api.PUBLIC_CONTRACT,records:Object.fromEntries(pages.map(p=>{
    const page={contract:api.PUBLIC_CONTRACT,evidenceType:api.EVIDENCE_TYPE,paperId:id,runId:c.runId,pageKey:p.pageKey,pageSha256:p.pageSha256,bodySha256:p.bodySha256,registrySha256:c.registrySha256,registryVersion:old.snapshot.registryVersion,concepts:c.concepts.map(({id,facet,label})=>({id,facet,label})),...Object.fromEntries(shared.ROLE_KEYS.map(k=>[k,c[k]])),classificationRef:id,auditRecordSha256:stableHash(audit)};page.proofSha256=stableHash(page);return[p.pagePath,page];})),classificationRecords:{[id]:audit}};
  const publicAdmission={contract:'fullsite-current-page-public-admission-projection-v1',manifestSha256:f.manifestSha256,scopeSha256:f.scopeSha256,blogHead:f.blogHead,blogTree:f.blogTree,paperCount:1,pageCount:2,papers:[{paperId:id,paperAuthoritySha256:f.paperAuthoritySha256,sourceAuthoritySha256:authoritySha,pages}]};
  const admissionBytes=JSON.stringify(publicAdmission)+'\n';
  const publicSources={contract:'fullsite-current-page-public-source-projection-v1',admissionProjectionSha256:sha(admissionBytes),manifestSha256:f.manifestSha256,scopeSha256:f.scopeSha256,blogHead:f.blogHead,blogTree:f.blogTree,paperCount:1,papers:[{paperId:id,paperAuthoritySha256:f.paperAuthoritySha256,sourceAuthoritySha256:authoritySha,sourceDescriptorSha256:stableHash(c.source)}]};
  const sourceBytes=JSON.stringify(publicSources)+'\n';
  const profile={contract:api.AUDIT_CONTRACT,registrySha256:c.registrySha256,registryVersion:old.snapshot.registryVersion,projectionSha256:shared.projectionHash(old.snapshot),snapshotSha256:sha(JSON.stringify(shared.canonical(old.snapshot))+'\n'),implementationSha256:c.fingerprintInputs.implementationSha256,nativeDependencySha256:c.protectedDependencySha256,auditDependencySha256:f.protectedDependencySha256,manifestSha256:f.manifestSha256,scopeSha256:f.scopeSha256,blogHead:f.blogHead,blogTree:f.blogTree,admissionProjectionSha256:sha(admissionBytes),sourceProjectionSha256:sha(sourceBytes)};
  const context=require('../../scripts/lib/fullsite-admission-proof').createContext(admissionBytes,sourceBytes);
  return {history,snapshot:old.snapshot,profile,text,context,admissionBytes,sourceBytes};
}
function reseal(f) {
  const [id,audit]=Object.entries(f.history.classificationRecords)[0],c=audit.classificationRecord;
  c.fingerprintInputs.source=c.source;c.fingerprint=stableHash(c.fingerprintInputs);
  c.reviewProof.sourceTextSha256=c.source.textSha256;c.reviewProofSha256=stableHash(c.reviewProof);
  const {proofSha256:_,...cb}=c;c.proofSha256=stableHash(cb);
  audit.classificationRecordSha256=stableHash(c);audit.fingerprintInputs.nativeFingerprintInputs=c.fingerprintInputs;
  audit.fingerprintInputs.protectedDependencySha256=stableHash(audit.protectedDependencies);audit.fingerprint=stableHash(audit.fingerprintInputs);
  const {proofSha256:__,...ab}=audit;audit.proofSha256=stableHash(ab);
  for(const page of Object.values(f.history.records)){page.auditRecordSha256=stableHash(audit);const {proofSha256:___,...pb}=page;page.proofSha256=stableHash(pb);}
  return f;
}
function packed(f=fixture()){
 const pack=require('../../scripts/lib/fullsite-tag-pack'),[id,audit]=Object.entries(f.history.classificationRecords)[0],d=audit.protectedDependencies;
 const refs={nativeRef:stableHash(d.native),sourceRef:stableHash(d.source),ownRef:stableHash(d.own)},issuerRef=stableHash(d);
 const profiles={native:{[refs.nativeRef]:d.native},source:{[refs.sourceRef]:d.source},own:{[refs.ownRef]:d.own},issuers:{[issuerRef]:{contract:d.contract,...refs}}};
 const {protectedDependencies:_,classificationRecord:__,...outer}=audit, {protectedDependencies:___,...inner}=audit.classificationRecord;
 const paper={contract:'fullsite-taxonomy-packed-paper-v1',paperId:id,auditRecordSha256:stableHash(audit),auditRecord:{...outer,protectedDependenciesRef:issuerRef,classificationRecordRef:id},classificationRecord:{...inner,protectedDependenciesRef:refs.nativeRef},pages:f.history.records};
 const shard={contract:pack.SHARD,papers:[paper]},bytes=Buffer.from(JSON.stringify(shard)+'\n'),digest=sha(bytes),path='fullsite-taxonomy/part-0001-'+digest.slice(0,12)+'.json';
 const manifest={contract:pack.CONTRACT,packing:pack.PACKING,recordCount:2,paperCount:1,totalBytes:bytes.length,dependencyProfiles:profiles,admissionProjectionSha256:f.profile.admissionProjectionSha256,sourceProjectionSha256:f.profile.sourceProjectionSha256,shards:[{path,bytes:bytes.length,sha256:digest,paperCount:1,recordCount:2}]};
 return{...f,manifest,shard,bytes};
}
module.exports={fixture,reseal,packed};
