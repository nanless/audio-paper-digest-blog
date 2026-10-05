'use strict';
// Portable offline protocol exercise: the three identities are published; every
// classification, source text and plan below is synthetic and never authorized.
const fs=require('node:fs'),path=require('node:path');
const base=require('./tag-v2-public'),api=require('../../scripts/lib/tag-v2-proof');
const hash=api.stableHash;
const items=['589308196f3505cf41d91e43dc266266c427786a884121b8e08e45251d303b59','49a68e1031356f03145bf33f3d8dc350c0c2d7efa4566c88c337587b190838d2','09aa923470874e5e7bf572b64151f961e00a4df9cfc01ebca5eec3f9d79a4271'];
function fixture(){
 const x=base.fixture(),c=x.record.classificationRecord;
 const document=JSON.parse(fs.readFileSync(path.resolve(__dirname,'../../data/identity-current-page-history.json')));
 const queue=Object.entries(document.records).sort((a,b)=>a[1].paperId.localeCompare(b[1].paperId)).map(([key,id],i)=>{
  const sourceDescriptor={...structuredClone(id.source),textSha256:base.digest(x.quote),pdfSha256:id.source.sourceBindings[0].pdfSha256,structuredArtifactsSha256:base.digest('SYNTHETIC extracted artifacts; no source classification issued')};
  return {paperId:id.paperId,originItemSha256:items[i],identityProofSha256:id.proofSha256,currentPageBindingSha256:id.currentPageBindingSha256,currentPageIdentityRecord:id,page:{path:key,pageKey:id.pageKey,pageSha256:id.pageSha256,bodySha256:id.bodySha256},sourceDescriptor,sourceDescriptorSha256:hash(sourceDescriptor),textSha256:sourceDescriptor.textSha256,evidenceSelectionContract:c.evidenceSelectionContract,evidenceSha256:c.evidenceSha256};
 });
 const plan={contract:'historical-current-page-taxonomy-plan-v2',originPlanSha256:'3ed0ec460c2110f6b6283851ec381930e1c20b413e0b7d29cd1811682a4644d5',originPlanFileSha256:'ae4fe814891c40d42cee2b4fa5098201418cfc9ce2506b0390c51f0e6af45dda',identityFileSha256:'3ce6dc36886956a86ba52172f5fd6ac9d9a445b62205bf4744ec935e03c3f60d',identityDocumentSha256:hash(document),gitAnchor:'3d441a02b92156f3d9a8e8ba8d2825c99910f3bb',registrySha256:x.snapshot.registrySha256,registryVersion:x.snapshot.registryVersion,projectionSha256:api.projectionHash(x.snapshot),protectedDependencies:structuredClone(c.protectedDependencies),protectedDependencySha256:c.protectedDependencySha256,queue,queueSha256:hash(queue)};
 plan.planSha256=hash(plan);const member=queue[0],id=member.currentPageIdentityRecord;
 const binding={contract:'controlled-current-page-classification-source-v2',planSha256:plan.planSha256,originItemSha256:member.originItemSha256,identityProofSha256:member.identityProofSha256,currentPageBindingSha256:member.currentPageBindingSha256,gitAnchor:plan.gitAnchor,identityDocumentSha256:plan.identityDocumentSha256,pageSha256:member.page.pageSha256,bodySha256:member.page.bodySha256};
 const r=x.record;r.paperId=member.paperId;r.pageKey=id.pageKey;r.pageSha256=id.pageSha256;r.bodySha256=id.bodySha256;r.contract='historical-current-page-source-taxonomy-supplement-v2';r.evidenceType='controlled-current-page-source-taxonomy-v2';r.currentPageTaxonomyPlan=plan;r.currentPageTaxonomyPlanSha256=plan.planSha256;r.currentPageIdentityRecord=structuredClone(id);r.currentPageIdentityRecordSha256=hash(id);r.source={...structuredClone(member.sourceDescriptor),currentPageClassificationBinding:binding};
 c.paperId=r.paperId;c.source=r.source;c.fingerprintInputs.paperId=r.paperId;c.fingerprintInputs.source=r.source;c.fingerprint=hash(c.fingerprintInputs);r.requestStageFingerprint=c.fingerprint;c.reviewProof.sourceTextSha256=r.source.textSha256;c.reviewProofSha256=hash(c.reviewProof);r.reviewProof=c.reviewProof;r.reviewProofSha256=c.reviewProofSha256;
 return {...x,record:base.seal(r),member,synthetic:true};
}
function resign(record){const p=record.currentPageTaxonomyPlan;delete p.planSha256;p.queueSha256=hash(p.queue);p.protectedDependencySha256=hash(p.protectedDependencies);p.planSha256=hash(p);record.currentPageTaxonomyPlanSha256=p.planSha256;record.source.currentPageClassificationBinding.planSha256=p.planSha256;record.classificationRecord.source=record.source;record.classificationRecord.fingerprintInputs.source=record.source;record.classificationRecord.fingerprint=hash(record.classificationRecord.fingerprintInputs);record.requestStageFingerprint=record.classificationRecord.fingerprint;return base.seal(record);}
function approvedPlanEnvelope(){
 // Actual public preparation plan, deliberately incomplete classification. This
 // exercises only approved-plan admission and must fail the inner proof gate.
 const p=JSON.parse(fs.readFileSync(path.join(__dirname,'controlled-current-page-plan-r4.json'))),m=p.queue[0],id=m.currentPageIdentityRecord;
 const source={...structuredClone(m.sourceDescriptor),currentPageClassificationBinding:{contract:'controlled-current-page-classification-source-v2',planSha256:p.planSha256,originItemSha256:m.originItemSha256,identityProofSha256:m.identityProofSha256,currentPageBindingSha256:m.currentPageBindingSha256,gitAnchor:p.gitAnchor,identityDocumentSha256:p.identityDocumentSha256,pageSha256:m.page.pageSha256,bodySha256:m.page.bodySha256}};
 const r={contract:'historical-current-page-source-taxonomy-supplement-v2',evidenceType:'controlled-current-page-source-taxonomy-v2',paperId:m.paperId,pageKey:m.page.pageKey,pageSha256:m.page.pageSha256,bodySha256:m.page.bodySha256,registrySha256:p.registrySha256,registryVersion:p.registryVersion,currentPageTaxonomyPlan:p,currentPageTaxonomyPlanSha256:p.planSha256,currentPageIdentityRecord:id,currentPageIdentityRecordSha256:hash(id),source,classificationRecord:{protectedDependencies:p.protectedDependencies,protectedDependencySha256:p.protectedDependencySha256,evidenceSha256:m.evidenceSha256,source,fingerprintInputs:{source}}};
 r.proofSha256=hash(r);return r;
}
module.exports={fixture,resign,hash,approvedPlanEnvelope};
