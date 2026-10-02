'use strict';
// Original raw bytes and original four-gate proof are never edited or reissued.
const crypto=require('node:crypto'),packets=require('../../data/fullsite-r6-counterevidence.json');
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const hash=x=>sha(JSON.stringify(canonical(x)));
const OUTER='e1f0089a4cd9d3960bbf4e50dbe9911af4c9b6b51cffc565ffde4dc0eb548f96';
const IMPL='bc2e49360c7cfc38073d59d8f35382d85cf6f2b09b5f5e64173a8ea931ce1a62';
const NATIVE='b226b054b588e651c1484ad33058236ea5717ac96ca5a1cc01a4771550242592';
const PATH='scripts/fullsite-taxonomy-r6/fullsite-taxonomy-audit-classification.js';
function isProfile(p){return p?.auditDependencySha256===OUTER&&p?.nativeDependencySha256===NATIVE&&p?.implementationSha256===IMPL&&p?.implementationFilePath===PATH;}
const fail=m=>{throw Error('Exact R6 counter-evidence rejected: '+m);};
function exact(x,keys){if(!x||typeof x!=='object'||Array.isArray(x)||![Object.prototype,null].includes(Object.getPrototypeOf(x))||Object.keys(x).sort().join('|')!==keys.slice().sort().join('|'))fail('exact own keys');}
function text(x,min){if(typeof x!=='string'||!x.isWellFormed()||x.trim().length<min||/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/u.test(x))fail('literal text');}
function project(c,raw){
 if(hash(packets)!=='35d728787f7d66dbec7559316cefeb4115e1b6820c7c7a4e876c9f766c85a6dc')fail('closed packet collection');
 const p=Object.hasOwn(packets,c.paperId)?packets[c.paperId]:null;
 if(c.source.paperId!==c.paperId||sha(c.reviewResponseText)!==c.reviewProof.responseSha256)fail('raw/source');
 if(!p){exact(raw,['accepted','issues','verifiedChecks']);return raw;}
 if(c.source.textSha256!==p.sourceTextSha256)fail('packet source');
 exact(raw,['accepted','issues','verifiedChecks','counterEvidenceResolution']);const r=raw.counterEvidenceResolution;exact(r,['contract','packetSha256','items']);
 if(r.contract!=='fullsite-source-qualified-counterevidence-v1'||r.packetSha256!==hash(p)||!Array.isArray(r.items)||r.items.length!==p.windows.length)fail('packet coverage');
 const reasons=[c.typeEvidence.rationale,c.domainEvidence.rationale,...c.concepts.map(x=>x.rationale)],seen=new Set();
 for(const x of r.items){exact(x,['windowId','answered','decisionRationaleQuote','counterQuote','rationale']);const w=p.windows.find(w=>w.windowId===x.windowId);if(!w||seen.has(x.windowId)||x.answered!==true)fail('window');seen.add(x.windowId);text(x.decisionRationaleQuote,20);text(x.counterQuote,20);text(x.rationale,40);if(sha(w.quote)!==w.quoteSha256||w.utf16Length!==w.quote.length||!reasons.some(q=>q.includes(x.decisionRationaleQuote))||!w.quote.includes(x.counterQuote))fail('literal counter/decision');}
 return {accepted:raw.accepted,issues:raw.issues,verifiedChecks:raw.verifiedChecks};
}
module.exports={isProfile,project,OUTER,NATIVE,IMPL,PATH};
