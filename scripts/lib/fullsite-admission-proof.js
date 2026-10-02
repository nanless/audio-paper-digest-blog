'use strict';
const api=require('./fullsite-taxonomy-proof');
const {stableHash,parseStrictJson}=require('./taxonomy-classification-v3-proof');
const hash=v=>typeof v==='string'&&/^[a-f0-9]{64}$/.test(v);
const oid=v=>typeof v==='string'&&/^[a-f0-9]{40}$/.test(v);
const fail=m=>{throw Error('Fullsite public admission rejected: '+m);};
const contexts=new WeakMap();
function freeze(value){if(value&&typeof value==='object'){Object.values(value).forEach(freeze);Object.freeze(value);}return value;}
// Copies raw public bytes before approval. Only this module's private context
// can reuse a parsed projection: callers cannot attach a trusted boolean/map.
function createContext(admissionBytes,sourceBytes){
 const context=Object.freeze({contract:'internal-fullsite-public-byte-context-v1'});
 contexts.set(context,{admissionBytes:admissionBytes&&Buffer.from(admissionBytes),sourceBytes:sourceBytes&&Buffer.from(sourceBytes),cache:new Map(),admissionSha256:admissionBytes&&api.sha(admissionBytes),sourceSha256:sourceBytes&&api.sha(sourceBytes)});return context;
}
function parse(bytes,expectedSha256) {
 if(!hash(expectedSha256)||api.sha(bytes)!==expectedSha256)fail('root-approved physical whole SHA');
 const projection=parseStrictJson(new TextDecoder('utf-8',{fatal:true}).decode(bytes));
 api.exact(projection,['contract','manifestSha256','scopeSha256','blogHead','blogTree','paperCount','pageCount','papers'],'public admission');
 if(projection.contract!=='fullsite-current-page-public-admission-projection-v1'||!hash(projection.manifestSha256)||!hash(projection.scopeSha256)||!oid(projection.blogHead)||!oid(projection.blogTree)||!Array.isArray(projection.papers)||!Number.isSafeInteger(projection.paperCount)||projection.paperCount<1||projection.papers.length!==projection.paperCount||!Number.isSafeInteger(projection.pageCount)||projection.pageCount<1)fail('public admission contract/scope');
 const members=Object.create(null),paths=new Set(),keys=new Set();let count=0;
 for(const paper of projection.papers) {
  api.exact(paper,['paperId','paperAuthoritySha256','sourceAuthoritySha256','pages'],'public member');
  if(!/^(?:arxiv:\d{4}\.\d{4,5}|conference:[^\s\x00-\x1f\x7f]+)$/.test(paper.paperId||'')||Object.hasOwn(members,paper.paperId)||!hash(paper.paperAuthoritySha256)||!hash(paper.sourceAuthoritySha256)||!Array.isArray(paper.pages)||!paper.pages.length)fail('public member identity/authority');
  for(const p of paper.pages) {
   api.exact(p,['pagePath','pageKey','pageSha256','bodySha256'],'public member page');
   if(!/^content\/posts\/[A-Za-z0-9][A-Za-z0-9._-]*\.md$/.test(p.pagePath||'')||!/^page:[a-f0-9]{64}$/.test(p.pageKey||'')||!hash(p.pageSha256)||!hash(p.bodySha256)||paths.has(p.pagePath)||keys.has(p.pageKey))fail('public unique page/SHA');
   paths.add(p.pagePath);keys.add(p.pageKey);count++;
  }
  members[paper.paperId]=paper;
 }
 if(count!==projection.pageCount||stableHash(projection.papers.map(p=>({paperId:p.paperId,pages:p.pages})))!==projection.scopeSha256)fail('complete ordered scope/count');
 return {projection,members,physicalSha256:expectedSha256};
}
function parseSources(bytes,expectedSha256,admission) {
 if(!hash(expectedSha256)||api.sha(bytes)!==expectedSha256)fail('root-approved acquired-source physical whole SHA');
 const projection=parseStrictJson(new TextDecoder('utf-8',{fatal:true}).decode(bytes));
 api.exact(projection,['contract','admissionProjectionSha256','manifestSha256','scopeSha256','blogHead','blogTree','paperCount','papers'],'public source projection');
 const a=admission.projection;
 if(projection.contract!=='fullsite-current-page-public-source-projection-v1'||projection.admissionProjectionSha256!==admission.physicalSha256||['manifestSha256','scopeSha256','blogHead','blogTree'].some(k=>projection[k]!==a[k])||!Array.isArray(projection.papers)||!Number.isSafeInteger(projection.paperCount)||projection.paperCount<0||projection.paperCount!==projection.papers.length)fail('acquired-source approved admission/scope');
 const order=new Map(a.papers.map((p,i)=>[p.paperId,i])),members=Object.create(null);let previous=-1;
 for(const paper of projection.papers) {
  api.exact(paper,['paperId','paperAuthoritySha256','sourceAuthoritySha256','sourceDescriptorSha256'],'public acquired source member');
  const member=admission.members[paper.paperId],i=order.get(paper.paperId);
  if(!member||Object.hasOwn(members,paper.paperId)||i<=previous||paper.paperAuthoritySha256!==member.paperAuthoritySha256||paper.sourceAuthoritySha256!==member.sourceAuthoritySha256||!hash(paper.sourceDescriptorSha256))fail('acquired source exact ordered member');
  members[paper.paperId]={...paper,pagesSha256:stableHash(member.pages)};previous=i;
 }
 return{projection,members,physicalSha256:expectedSha256};
}
const ADMISSION_SET='fullsite-current-page-public-admission-set-v1',SOURCE_SET='fullsite-current-page-public-source-set-v1';
const serialize=v=>Buffer.from(JSON.stringify(v)+'\n');
function matchesContext(profile,context){const owned=contexts.get(context);return !!owned&&owned.admissionSha256===profile.admissionProjectionSha256&&owned.sourceSha256===profile.sourceProjectionSha256;}
function parseSets(admissionBytes,sourceBytes,profile){
 if(!matchesBytes(admissionBytes,profile.admissionProjectionSha256)||!matchesBytes(sourceBytes,profile.sourceProjectionSha256))fail('root-approved catalog whole physical SHA');
 const aa=parseStrictJson(new TextDecoder('utf-8',{fatal:true}).decode(admissionBytes)),ss=parseStrictJson(new TextDecoder('utf-8',{fatal:true}).decode(sourceBytes));
 api.exact(aa,['contract','projections'],'admission set');api.exact(ss,['contract','admissionProjectionSha256','projections'],'source set');
 if(aa.contract!==ADMISSION_SET||ss.contract!==SOURCE_SET||ss.admissionProjectionSha256!==profile.admissionProjectionSha256||!Array.isArray(aa.projections)||!aa.projections.length||!Array.isArray(ss.projections)||!ss.projections.length)fail('projection set contract/whole admission');
 function pinSet(pins,children,name){if(!Array.isArray(pins)||pins.length!==children.length)fail(name+' exact child pins');const seen=new Set();for(let i=0;i<pins.length;i++){const pin=pins[i];api.exact(pin,['manifestSha256','physicalSha256','structuralSha256'],name+' child pin');const child=children[i];if(pin.manifestSha256!==child.manifestSha256||pin.physicalSha256!==api.sha(serialize(child))||pin.structuralSha256!==stableHash(child)||seen.has(pin.physicalSha256))fail(name+' original child physical/structural pin');seen.add(pin.physicalSha256);}}
 pinSet(profile.admissionChildPins,aa.projections,'admission');pinSet(profile.sourceChildPins,ss.projections,'source');
 const admissions=new Map(),byPlan=new Map(),ids=new Set(),paths=new Set(),keys=new Set();
 for(const child of aa.projections){const parsed=parse(serialize(child),api.sha(serialize(child)));if(admissions.has(child.manifestSha256))fail('duplicate admission manifest');for(const p of child.papers){if(ids.has(p.paperId))fail('duplicate admitted paper across plans');ids.add(p.paperId);for(const page of p.pages){if(paths.has(page.pagePath)||keys.has(page.pageKey))fail('duplicate admitted page across plans');paths.add(page.pagePath);keys.add(page.pageKey);}}admissions.set(child.manifestSha256,parsed);}
 const sourceIds=new Set(),used=new Set();for(const child of ss.projections){const admission=admissions.get(child.manifestSha256);if(!admission)fail('orphan source projection');const parsed=parseSources(serialize(child),api.sha(serialize(child)),admission);if(!child.papers.length)fail('empty source child');used.add(child.manifestSha256);if(!byPlan.has(child.manifestSha256))byPlan.set(child.manifestSha256,Object.create(null));for(const[id,member]of Object.entries(parsed.members)){if(sourceIds.has(id))fail('duplicate acquired source paper');sourceIds.add(id);byPlan.get(child.manifestSha256)[id]=member;}}
 if(used.size!==admissions.size)fail('orphan admission projection');const admission=admissions.get(profile.manifestSha256);if(!admission)fail('issuer manifest outside approved catalog');return{admission,sources:{members:byPlan.get(profile.manifestSha256)}};
}
function matchesBytes(bytes,pin){return hash(pin)&&api.sha(bytes)===pin;}
function approvedContext(profile,context) {
 const owned=contexts.get(context);
 if(!owned||!owned.admissionBytes||!owned.sourceBytes)fail('root-approved public admission and acquired source required');
 const key=stableHash(profile);
 let parsed=owned.cache.get(key);
 if(!parsed){const shape=parseStrictJson(owned.admissionBytes.toString('utf8'));if(shape.contract===ADMISSION_SET)parsed=freeze(parseSets(owned.admissionBytes,owned.sourceBytes,profile));else{const admission=parse(owned.admissionBytes,profile.admissionProjectionSha256),sources=parseSources(owned.sourceBytes,profile.sourceProjectionSha256,admission);parsed=freeze({admission,sources});}owned.cache.set(key,parsed);}
 const {admission,sources}=parsed;
 if(['manifestSha256','scopeSha256','blogHead','blogTree'].some(k=>profile[k]!==admission.projection[k]))fail('issuer/projection baseline');
 return{admission,sources};
}
module.exports={parse,parseSources,parseSets,createContext,approvedContext,matchesContext,ADMISSION_SET,SOURCE_SET};
