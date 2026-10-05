'use strict';
// Synthetic protocol decisions only. Never publish these objects as accepted data.
const fs=require('node:fs'),path=require('node:path');
const api=require('../../scripts/lib/tag-v2-proof');
const old=require('./tag-v2-public');
const V3='sealed-source-evidence-snippets-v3-formfeed-split';
const SHA='8c89a69ffe7daba6cc9da4ea5789101d6118e326b9978ec3edae1a85e965c8e3';
const snapshot=old.catalog.snapshots.find(s=>s.registrySha256===SHA);
function sync(r){
 const c=r.classificationRecord,f=c.fingerprintInputs;
 c.protectedDependencySha256=api.stableHash(c.protectedDependencies);f.protectedDependencySha256=c.protectedDependencySha256;
 f.source=c.source;f.registrySha256=c.registrySha256;f.selectionContract=c.evidenceSelectionContract;f.evidenceSha256=c.evidenceSha256;
 c.fingerprint=api.stableHash(f);r.requestStageFingerprint=c.fingerprint;
 c.reviewProof.decisionSha256=api.stableHash({concepts:c.concepts,...Object.fromEntries(api.ROLE_KEYS.map(k=>[k,c[k]]))});
 c.reviewProof.sourceTextSha256=c.source.textSha256;c.reviewProof.registrySha256=c.registrySha256;c.reviewProof.evidenceSha256=c.evidenceSha256;
 c.reviewProofSha256=api.stableHash(c.reviewProof);
 Object.assign(r,{registrySha256:c.registrySha256,source:c.source,evidenceSelectionContract:c.evidenceSelectionContract,evidence:c.concepts,quoteSelections:c.quoteSelections,reviewProof:c.reviewProof,reviewProofSha256:c.reviewProofSha256,
 concepts:c.concepts.map(({id,facet,label})=>({id,facet,label})),...Object.fromEntries(api.ROLE_KEYS.map(k=>[k,c[k]]))});
 return old.seal(r);
}
function fixture({na=false,coverageTail="end",...config}={}){
 const f=old.fixture({...config,na});const r=f.record,c=r.classificationRecord;c.registrySha256=SHA;c.evidenceSelectionContract=V3;
 c.protectedDependencies.files['scripts/lib/source-evidence-snippets-v3.js']=old.digest('SYNTHETIC source-evidence-snippets-v3');
 c.fingerprintInputs.snippetImplementationSha256=c.protectedDependencies.files['scripts/lib/source-evidence-snippets-v3.js'];c.fingerprintInputs.projectionSha256=api.projectionHash(snapshot);
 if(na){
  // The page separator and short tail are coverage, not selectable role evidence.
  const quote=f.quote,tail=coverageTail,source=quote+'\f'+tail;const start=quote.length+1;
  const second={id:'s00002',quote:tail,quoteStart:start,quoteEnd:start+tail.length,offsetUnit:'utf16-code-unit',quoteSha256:old.digest(tail)};
  const e=c.naFullSourceEvidence;e.snippets.push(second);e.whitespaceGaps=[{quoteStart:quote.length,quoteEnd:start,quote:'\f',quoteSha256:old.digest('\f')}];
  e.sourceChars=source.length;e.evidenceChars=quote.length+tail.length;e.sourceTextSha256=old.digest(source);
  e.evidenceSha256=old.digest(e.snippets.map(s=>`[${s.id}; source UTF16 ${s.quoteStart}:${s.quoteEnd}]\n${s.quote}`).join('\n\n'));
  c.source.textSha256=e.sourceTextSha256;c.source.sourceBinding.textSha256=e.sourceTextSha256;c.evidenceSha256=e.evidenceSha256;
 }
 return {record:sync(r),snapshot};
}
function rows(){
 const out=[{name:'native immutable V3/338/114 normal-method public interface',record:JSON.parse(fs.readFileSync(path.join(__dirname,'taxonomy-v3-native-interface.json'))).record,snapshot,expected:true}];
 for(const researchType of api.TYPES)out.push({name:'synthetic V3 '+researchType, ...fixture({researchType,na:['position','experience'].includes(researchType)}),expected:true});
 const oldControlled=old.fixture().record;oldControlled.classificationRecord.source.currentPageClassificationBinding={contract:'controlled-current-page-classification-source-v2'};
 out.push({name:'old V2 generic rejects controlled binding',record:sync(oldControlled),snapshot:old.fixture().snapshot,expected:false});
 for(const version of ['V2','V3'])for(const [field,name]of Object.entries({implementationSha256:'historical-source-taxonomy-classification-v2',snippetImplementationSha256:version==='V3'?'source-evidence-snippets-v3':'source-evidence-snippets-v2',identityImplementationSha256:'historical-source-identity-supplement',schedulerImplementationSha256:'source-classification-scheduler',failureImplementationSha256:'source-classification-failures'})){
  const r=(version==='V3'?fixture():old.fixture()).record,c=r.classificationRecord;delete c.protectedDependencies.files['scripts/lib/'+name+'.js'];c.fingerprintInputs[field]=null;
  out.push({name:version+' missing required '+field+' with null field after complete rehash',record:sync(r),snapshot:version==='V3'?snapshot:old.fixture().snapshot,expected:false});
 }
 const mutations={
  'unknown evidence contract':c=>c.evidenceSelectionContract='sealed-source-evidence-snippets-v4',
  'V3 with330 registry':c=>{c.registrySha256=old.fixture().snapshot.registrySha256;c.fingerprintInputs.projectionSha256=api.projectionHash(old.fixture().snapshot);},
  'V2 with338 registry':c=>c.evidenceSelectionContract='sealed-source-evidence-snippets-v2',
  'V3 with V2 implementation':c=>c.fingerprintInputs.snippetImplementationSha256=c.protectedDependencies.files['scripts/lib/source-evidence-snippets-v2.js'],
  'wrong338 projection':c=>c.fingerprintInputs.projectionSha256='0'.repeat(64),
  'wrong source bound SHA':c=>c.source.sourceBinding.textSha256='0'.repeat(64),
  'unknown domain':c=>c.domainScope='audio-adjacent',
  'extra review key':c=>c.reviewProof.verified='invented',
  'missing V3 implementation':c=>delete c.protectedDependencies.files['scripts/lib/source-evidence-snippets-v3.js'],
  'generic controlled binding':c=>c.source.currentPageClassificationBinding={contract:'controlled-current-page-classification-source-v2'},
 };
 for(const [name,mutate]of Object.entries(mutations)){const r=fixture().record;mutate(r.classificationRecord);out.push({name,record:sync(r),snapshot,expected:false});}
 // Ordinary methods also forbid a selected numbered span bridging a page break.
 // Rebind every source/evidence/response/proof hash: rejection is the FF rule.
 for(const role of ['researchType','concept']){
  const r=fixture().record,c=r.classificationRecord;
  const e=role==='concept'?c.concepts[0]:c.typeEvidence;
  const quote=e.quote.slice(0,40)+'\f'+e.quote.slice(40),quoteSha256=old.digest(quote);
  const projection=`[s00002; source UTF16 0:${quote.length}]\n${quote}`;
  Object.assign(e,{quote,quoteStart:0,evidenceQuoteStart:projection.indexOf(quote),quoteSha256});
  Object.assign(c.quoteSelections.find(s=>s.selectionRole===role),{id:'s00002',evidenceId:'s00002',quote,quoteStart:0,quoteEnd:quote.length,quoteSha256});
  const raw=JSON.parse(c.modelResponseText),injected=JSON.parse(c.responseText);
  if(role==='concept'){raw.concepts[0].evidenceId='s00002';injected.concepts[0].quote=quote;}
  else{raw.typeEvidence.evidenceId='s00002';injected.typeEvidence.quote=quote;}
  c.modelResponseText=JSON.stringify(raw);c.modelResponseSha256=old.digest(c.modelResponseText);c.responseText=JSON.stringify(injected);c.responseSha256=old.digest(c.responseText);
  c.source.textSha256=quoteSha256;c.source.sourceBinding.textSha256=quoteSha256;c.evidenceSha256=old.digest(projection);
  out.push({name:'normal method '+role+' selected span bridges formfeed after complete rehash',record:sync(r),snapshot,expected:false});
 }
 for(const [name,mutate]of Object.entries({
  'NA omitted formfeed gap':e=>e.whitespaceGaps=[],
  'NA omitted short tail':e=>e.snippets.pop(),
  'NA changed gap':e=>{e.whitespaceGaps[0].quote=' ';e.whitespaceGaps[0].quoteSha256=old.digest(' ');},
  'NA overlapping short tail':e=>e.snippets[1].quoteStart--,
  'NA whitespace snippet':e=>{e.snippets[1].quote='   ';e.snippets[1].quoteSha256=old.digest('   ');},
  'NA UTF16 split':e=>e.snippets[0].quoteEnd--,
  'NA quote bridges formfeed':e=>{e.snippets[0].quote+='\f';e.snippets[0].quoteEnd++;e.snippets[0].quoteSha256=old.digest(e.snippets[0].quote);},
 })){const r=fixture({researchType:'position',na:true}).record;mutate(r.classificationRecord.naFullSourceEvidence);out.push({name,record:sync(r),snapshot,expected:false});}
 // Short coverage may not be promoted into a >=20-character role selection.
 for(const coverageTail of ['end',' '.repeat(20)+'end']){
 const r=fixture({researchType:'position',na:true,coverageTail}).record,c=r.classificationRecord,span=c.naFullSourceEvidence.snippets[1];
 const projection=c.naFullSourceEvidence.snippets.map(s=>`[${s.id}; source UTF16 ${s.quoteStart}:${s.quoteEnd}]\n${s.quote}`).join('\n\n');
 const e={...c.typeEvidence,quote:span.quote,quoteStart:span.quoteStart,quoteSha256:span.quoteSha256,evidenceQuoteStart:projection.indexOf(span.quote)};c.typeEvidence=e;
 Object.assign(c.quoteSelections.find(s=>s.selectionRole==='researchType'),span,{evidenceId:span.id});
 const raw=JSON.parse(c.modelResponseText),injected=JSON.parse(c.responseText);raw.typeEvidence.evidenceId=span.id;injected.typeEvidence.quote=span.quote;
 c.modelResponseText=JSON.stringify(raw);c.modelResponseSha256=old.digest(c.modelResponseText);c.responseText=JSON.stringify(injected);c.responseSha256=old.digest(c.responseText);
 out.push({name:coverageTail==='end'?'NA short coverage used as selected role':'NA padded short coverage used as selected role',record:sync(r),snapshot,expected:false});
 }
 return out;
}
module.exports={V3,SHA,snapshot,fixture,sync,rows};
