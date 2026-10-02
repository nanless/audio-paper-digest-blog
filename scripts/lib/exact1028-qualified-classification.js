'use strict';
// This is a separately qualified existing primary decision, never a native
// accepted cache. Its original failed native record and predecessor stay intact.
const fs=require('node:fs'),path=require('node:path'),shared=require('./taxonomy-classification-v3-proof'),api=require('./fullsite-taxonomy-proof');
const CONTRACT='exact1028-independent-review-qualified-classification-v1';
const SHA='03beb37ae2df8f7f48850f935cb274a9b0c75eebde483e9c1d6c51a5cffaeb20';
const PAPER='conference:icassp:2026:icassp-arnumber:11461028';
const REGISTRY='910a94021b085a190abcd5fd9603af3240160f9417293d5a90158bc4ef900d30';
const fail=m=>{throw Error('Exact1028 independent qualification rejected: '+m);};
function validate(q){
 if(q.contract!==CONTRACT||q.paperId!==PAPER||q.qualificationId!=='401da13e-467e-4d40-b415-c27cffdca9b3'||q.publicationAuthorized!==true||q.publicationAuthority.rootAuthoritySha256!=='b586c2be9dd4d2d9e07f3f232fca81333cbe87b34fc0b95441c4c75c5c3f36b9')fail('exact authority');
 if(q.originalNativeStatus.accepted!==0||q.originalNativeStatus.failed!==1||q.originalNativeStatus.changed!==false||shared.stableHash(q.source)!==q.sourceDescriptorSha256||q.source.textSha256!==q.sourceTextSha256||shared.stableHash(q.originalPrimary.decision)!==q.originalPrimary.decisionSha256)fail('original decision/source/native status');
 const a=q.publicationAuthority;if(a.originalPrimaryDecisionSha256!==q.originalPrimary.decisionSha256||a.sourceDescriptorSha256!==q.sourceDescriptorSha256||a.qualificationSha256!==q.independentReview.actualQualificationFileSha256||a.rawReviewSha256!==q.independentReview.rawFileSha256||a.registryRawSha256!==REGISTRY)fail('whole authority commitments');
 require('./fullsite-source-descriptor-proof').validate(q.source,{paperId:PAPER,admission:{sourceAuthoritySha256:q.source.fullsiteSourceAuthority.authoritySha256,pages:q.pages},member:{sourceDescriptorSha256:q.sourceDescriptorSha256,sourceAuthoritySha256:q.source.fullsiteSourceAuthority.authoritySha256}});
 require('./exact1028-review-proof').validate(q,{parseStrictJson:shared.parseStrictJson});
 return true;
}
function read(root){
 const file=path.join(root,'data/exact1028-qualified-classification.json');if(!fs.existsSync(file))return null;
 const st=fs.lstatSync(file);if(!st.isFile()||st.isSymbolicLink())fail('qualification regular file');const bytes=fs.readFileSync(file);if(api.sha(bytes)!==SHA)fail('qualification whole SHA');const q=shared.parseStrictJson(bytes.toString('utf8'));validate(q);
 const original=shared.parseStrictJson(fs.readFileSync(path.join(root,'data/taxonomy-history-v2.json'),'utf8'));if(shared.stableHash(require('./taxonomy-old-v2-publication-holds').tuple(PAPER,original.records))!==shared.stableHash(q.publicationAuthority.predecessor))fail('original predecessor');
 for(const p of q.pages){const full=path.resolve(root,p.pagePath);if(!full.startsWith(path.resolve(root,'content/posts')+path.sep))fail('current page path');const st=fs.lstatSync(full);if(!st.isFile()||st.isSymbolicLink())fail('current page regular file');const b=fs.readFileSync(full),t=new TextDecoder('utf-8',{fatal:true}).decode(b),header=t.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/);if(!header||api.sha(b)!==p.pageSha256||api.sha(t.slice(header[0].length))!==p.bodySha256)fail('current whole/body');}
 const c=q.originalPrimary.decision;return{qualification:q,resolve(p){const page=q.pages.find(x=>x.pagePath===p);return page?{...c,...page,paperId:PAPER,contract:'paper-taxonomy-flat-tags-compat-v1',registrySha256:REGISTRY,registryVersion:'paper-taxonomy-v2',classificationContract:CONTRACT,evidenceContract:CONTRACT,evidenceType:'source-bound-independent-review-qualification',source:q.source,proofSha256:SHA}:null;}};
}
module.exports={read,validate,CONTRACT,SHA,PAPER,REGISTRY};
