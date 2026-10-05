'use strict';
// Exact old issued tuples remain intact. This qualifies publication, never
// assigns replacement labels or changes a source/classification proof.
const {hash,sha}=require('./fullsite-publication-selection');
const {parseStrictJson}=require('./tag-public-proof');
const AUTHORITY_SHA='c8d926668f30324779e19c47dd8844e2308a78d0687c472e4babcadef6ea3424';
const IDS=['conference:icassp:2026:icassp-arnumber:11461028','conference:icassp:2026:icassp-arnumber:11461877','conference:icassp:2026:icassp-arnumber:11461446','conference:icassp:2026:icassp-arnumber:11464546','conference:icassp:2026:icassp-arnumber:11464268'];
const fail=m=>{throw Error('Exact old V2 publication hold rejected: '+m);};
function tuple(id,records){
 const members=Object.entries(records).filter(([,r])=>r.paperId===id);if(!members.length)fail('missing original held paper');
 const r=members[0][1],c=r.classificationRecord;
 if(!c||c.paperId!==id||r.classificationContract!=='historical-source-taxonomy-classification-v2')fail('original V2 identity');
 for(const[,p]of members)if(hash(p.classificationRecord)!==hash(c))fail('conflicting same-paper classification');
 return {classificationContract:r.classificationContract,runId:c.runId,classificationRecordSha256:hash(c),classificationProofSha256:c.proofSha256,sourceDescriptorSha256:hash(c.source),reviewProofSha256:c.reviewProofSha256,issuerTuple:{contract:c.contract,registrySha256:c.registrySha256,implementationSha256:c.fingerprintInputs.implementationSha256,protectedDependencySha256:c.protectedDependencySha256},pages:members.map(([pagePath,p])=>({pagePath,pageKey:p.pageKey,pageSha256:p.pageSha256,bodySha256:p.bodySha256,recordSha256:hash(p),pageProofSha256:p.proofSha256}))};
}
// Caller first replays the ordinary V2 native/source/review and current MD gates.
function read(bytes,history){
 if(sha(bytes)!==AUTHORITY_SHA)fail('root authority whole SHA');
 const a=parseStrictJson(bytes.toString('utf8'));
 if(a.contract!=='root-source-qualified-exact-old-v2-publication-holds-v1'||a.originalClassificationsChanged!==false||a.unknownOrAlteredTuplesMustReject!==true||a.qualifiedNew1446DoesNotReleaseOldTuple!==true||a.offsite14919Excluded!==true||!Array.isArray(a.rows)||a.rows.length!==IDS.length)fail('root authority scope');
 if(history.contract!=='historical-source-taxonomy-supplement-v2'||!history.records)fail('ordinary V2 collection');
 const withheld=new Set(),seen=new Set();
 for(const row of a.rows){
  if(!IDS.includes(row.paperId)||seen.has(row.paperId)||row.oldTuplePublicationEligible!==false||row.reasonCode!=='exact-original-classification-requires-source-qualified-replacement')fail('unknown/duplicate hold');seen.add(row.paperId);
  const expected=tuple(row.paperId,history.records);if(hash(expected)!==hash(row.originalTuple))fail('unknown or altered original tuple');
  for(const p of expected.pages){const c=history.records[p.pagePath].classificationRecord;if(c.source.textSha256!==row.fullSourceSha256)fail('original full source commitment');withheld.add(p.pagePath);}
 }
 return Object.freeze({withheldPages:withheld.size,withheldPapers:seen.size,allows(pagePath,record){if(!Object.hasOwn(history.records,pagePath)||hash(record)!==hash(history.records[pagePath]))fail('unknown or changed page');return !withheld.has(pagePath);}});
}
module.exports={AUTHORITY_SHA,IDS,tuple,read};
