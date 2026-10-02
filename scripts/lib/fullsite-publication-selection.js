'use strict';
// This gate partitions an already fully replayed collection. It does not edit,
// repack, sign or replace any original classification or page record.
const crypto=require('node:crypto');
const CONTRACT='fullsite-exact-native-publication-selection-v1';
const HOLD='06bd936c0419efa08a6a4ce1b7e6f6f04f3e738cf31b791f817a1aec0491f2ce';
const HELD='arxiv:2604.21628';
const H=/^[a-f0-9]{64}$/;
const map=x=>!!x&&typeof x==='object'&&!Array.isArray(x)&&[Object.prototype,null].includes(Object.getPrototypeOf(x));
const canonical=x=>Array.isArray(x)?x.map(canonical):map(x)?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const hash=x=>crypto.createHash('sha256').update(JSON.stringify(canonical(x))).digest('hex');
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const fail=m=>{throw Error('Exact publication selection rejected: '+m);};
function exact(x,keys,label){if(!map(x)||Object.keys(x).sort().join('|')!==keys.slice().sort().join('|'))fail(label+' fields');}
function tuple(id,audit,records){
 if(!map(audit)||audit.paperId!==id||!map(audit.classificationRecord)||audit.classificationRecord.paperId!==id)fail('paper identity');
 const c=audit.classificationRecord;
 const pages=Object.entries(records).filter(([,p])=>p.paperId===id).map(([pagePath,p])=>({pagePath,pageKey:p.pageKey,pageSha256:p.pageSha256,bodySha256:p.bodySha256,pageProofSha256:p.proofSha256}));
 if(!pages.length||pages.length!==audit.planAdmission.pages.length||hash(pages.map(p=>p.pagePath).sort())!==hash(audit.planAdmission.pages.map(p=>p.pagePath).sort()))fail('all same-paper pages');
 const result={paperId:id,runId:audit.runId,auditRecordSha256:hash(audit),outerProofSha256:audit.proofSha256,classificationRecordSha256:hash(c),nativeProofSha256:c.proofSha256,sourceDescriptorSha256:hash(c.source),issuerDependencySha256:audit.fingerprintInputs.protectedDependencySha256,pages};
 for(const [k,v]of Object.entries(result))if(k.endsWith('Sha256')&&!H.test(v))fail('tuple SHA');
 return result;
}
function inventory(history){
 exact(history,['contract','records','classificationRecords'],'original unpacked collection');
 if(history.contract!=='fullsite-source-taxonomy-audit-supplement-v1'||!map(history.records)||!map(history.classificationRecords))fail('original contract');
 const all=Object.entries(history.classificationRecords).map(([id,a])=>tuple(id,a,history.records));
 if(all.reduce((n,t)=>n+t.pages.length,0)!==Object.keys(history.records).length)fail('orphan/unknown page');
 const paths=all.flatMap(t=>t.pages.map(p=>p.pagePath)),keys=all.flatMap(t=>t.pages.map(p=>p.pageKey));
 if(new Set(paths).size!==paths.length||new Set(keys).size!==keys.length)fail('duplicate page');
 return all;
}
function validatePins(pins){exact(pins,['collectionSha256','admissionSha256','sourcesSha256'],'collection commitments');for(const h of Object.values(pins))if(!H.test(h))fail('whole collection/projection SHA');}
// expectedSelectionSha256 is an explicit production profile/root-approved
// whole-file pin. Call only after the ORIGINAL collection's full native/source/
// admission/MD gate has passed for every row, including the withheld row.
function read(selectionBytes,expectedSelectionSha256,history,pins){
 if(!H.test(expectedSelectionSha256)||sha(selectionBytes)!==expectedSelectionSha256)fail('root-approved selection whole SHA');
 const s=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(selectionBytes));
 if(Buffer.from(selectionBytes).toString('utf8')!==JSON.stringify(s)+'\n')fail('canonical transport bytes/duplicate JSON key');
 exact(s,['contract','collectionSha256','admissionSha256','sourcesSha256','inputInventorySha256','eligible','withheld','counts'],'selection');
 validatePins(pins);if(s.contract!==CONTRACT||Object.keys(pins).some(k=>s[k]!==pins[k]))fail('unknown collection/projection');
 const all=inventory(history);if(s.inputInventorySha256!==hash(all)||!Array.isArray(s.eligible)||!Array.isArray(s.withheld)||s.withheld.length!==1)fail('complete input inventory');
 const w=s.withheld[0];exact(w,['tuple','authoritySha256','reasonCode'],'withheld entry');
 if(w.authoritySha256!==HOLD||w.reasonCode!=='source-qualified-primary-aim-review-pending'||w.tuple?.paperId!==HELD)fail('unknown/foreign hold');
 const expectedHeld=all.find(t=>t.paperId===HELD),expectedEligible=all.filter(t=>t.paperId!==HELD);
 if(!expectedHeld||hash(w.tuple)!==hash(expectedHeld)||hash(s.eligible)!==hash(expectedEligible))fail('exact tuple/ordered complete partition');
 const counts={inputPapers:all.length,inputPages:all.reduce((n,t)=>n+t.pages.length,0),eligiblePapers:expectedEligible.length,eligiblePages:expectedEligible.reduce((n,t)=>n+t.pages.length,0),withheldPapers:1,withheldPages:expectedHeld.pages.length};
 exact(s.counts,Object.keys(counts),'counts');if(hash(s.counts)!==hash(counts))fail('conservation counts');
 const eligiblePaths=new Set(expectedEligible.flatMap(t=>t.pages.map(p=>p.pagePath))),allPaths=new Set(all.flatMap(t=>t.pages.map(p=>p.pagePath)));
 return Object.freeze({counts:Object.freeze(counts),allows(pagePath,page){if(!allPaths.has(pagePath)||!Object.hasOwn(history.records,pagePath)||hash(page)!==hash(history.records[pagePath]))fail('unknown or altered page record');return eligiblePaths.has(pagePath);}});
}
// Resolve an exact installed collection context. Old approved exports remain
// usable without a selector; a context declaring selection can never omit it.
function expectedFor(pins,profiles){
 const matches=profiles.filter(p=>p.admissionProjectionSha256===pins.admissionSha256&&p.sourceProjectionSha256===pins.sourcesSha256);
 if(!matches.length)fail('unknown approved context');
 const values=new Set(matches.map(p=>p.publicationSelectionSha256||''));
 if(values.size!==1)fail('inconsistent approved selection profiles');
 const expected=[...values][0];
 if(expected&&!H.test(expected))fail('invalid approved selection pin');
 return expected;
}
module.exports={CONTRACT,HOLD,HELD,hash,sha,tuple,inventory,read,expectedFor};
