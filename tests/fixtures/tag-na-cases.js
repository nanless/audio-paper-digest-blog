'use strict';
// Synthetic full-source evidence only. Never exported as classified data.
const {fixture,seal,digest}=require('./tag-v2-public'),api=require('../../scripts/lib/tag-v2-proof');
function reseal(r){const c=r.classificationRecord;c.fingerprint=api.stableHash(c.fingerprintInputs);r.requestStageFingerprint=c.fingerprint;c.reviewProof.decisionSha256=api.stableHash({concepts:c.concepts,...Object.fromEntries(api.ROLE_KEYS.map(k=>[k,c[k]]))});c.reviewProofSha256=api.stableHash(c.reviewProof);r.reviewProofSha256=c.reviewProofSha256;return seal(r);}
function withWhitespace(){const f=fixture({researchType:'position',na:true}),r=f.record,c=r.classificationRecord,e=c.naFullSourceEvidence,q=f.quote,source='\u00a0\n'+q+' \t';
 c.source.textSha256=digest(source);c.source.sourceBinding.textSha256=digest(source);e.sourceTextSha256=digest(source);e.sourceChars=source.length;e.snippets[0].quoteStart=2;e.snippets[0].quoteEnd=2+q.length;e.whitespaceGaps=[{quoteStart:0,quoteEnd:2,quote:'\u00a0\n',quoteSha256:digest('\u00a0\n')},{quoteStart:2+q.length,quoteEnd:source.length,quote:' \t',quoteSha256:digest(' \t')}];
 const projection='[s00001; source UTF16 2:'+(2+q.length)+']\n'+q;e.evidenceSha256=digest(projection);c.evidenceSha256=e.evidenceSha256;c.fingerprintInputs.evidenceSha256=e.evidenceSha256;c.reviewProof.evidenceSha256=e.evidenceSha256;c.reviewProof.sourceTextSha256=digest(source);
 for(const s of c.quoteSelections){s.quoteStart=2;s.quoteEnd=2+q.length;}for(const v of [...c.concepts,c.typeEvidence,c.domainEvidence,c.methodNotApplicableEvidence]){v.quoteStart=2;v.evidenceQuoteStart=projection.indexOf(q);}reseal(r);return f;
}
function cases(){const positive=fixture({researchType:'position',na:true}),white=withWhitespace(),rows=[{name:'synthetic complete NA',...positive,expected:true},{name:'synthetic Unicode whitespace gaps',...white,expected:true}];
 const changes={
  'missing full proof':r=>delete r.classificationRecord.naFullSourceEvidence,
  'sampled source claim':r=>r.classificationRecord.naFullSourceEvidence.sampling='balanced-spans',
  'extra coverage field':r=>r.classificationRecord.naFullSourceEvidence.unsigned=true,
  'source SHA drift':r=>r.classificationRecord.naFullSourceEvidence.sourceTextSha256='a'.repeat(64),
  'projection SHA drift':r=>r.classificationRecord.naFullSourceEvidence.evidenceSha256='a'.repeat(64),
  'UTF16 source length drift':r=>r.classificationRecord.naFullSourceEvidence.sourceChars--,
  'evidence char drift':r=>r.classificationRecord.naFullSourceEvidence.evidenceChars++,
  'span quote tamper':r=>r.classificationRecord.naFullSourceEvidence.snippets[0].quote+='x',
  'span hash tamper':r=>r.classificationRecord.naFullSourceEvidence.snippets[0].quoteSha256='a'.repeat(64),
  'wrong offset unit':r=>r.classificationRecord.naFullSourceEvidence.snippets[0].offsetUnit='utf8-byte',
  'fractional coordinate':r=>r.classificationRecord.naFullSourceEvidence.snippets[0].quoteStart=0.5,
  'wrong numbered ID':r=>r.classificationRecord.naFullSourceEvidence.snippets[0].id='s00002',
  'uncovered prefix':r=>r.classificationRecord.naFullSourceEvidence.snippets[0].quoteStart=1,
  'duplicate overlapping span':r=>r.classificationRecord.naFullSourceEvidence.snippets.push(structuredClone(r.classificationRecord.naFullSourceEvidence.snippets[0])),
  'selected span drift':r=>r.classificationRecord.quoteSelections[0].quoteEnd--,
  'projection decision coordinate drift':r=>r.classificationRecord.typeEvidence.evidenceQuoteStart++,
 };
 for(const [name,mutate]of Object.entries(changes)){const f=fixture({researchType:'position',na:true});mutate(f.record);reseal(f.record);rows.push({name,...f,expected:false});}
 for(const [name,mutate]of Object.entries({'missing tail gap':r=>r.classificationRecord.naFullSourceEvidence.whitespaceGaps.pop(),'non-whitespace gap':r=>{const e=r.classificationRecord.naFullSourceEvidence,g=e.whitespaceGaps[1];g.quote='x\t';g.quoteSha256=digest(g.quote);r.source.textSha256=digest('\u00a0\n'+e.snippets[0].quote+g.quote);r.source.sourceBinding.textSha256=r.source.textSha256;e.sourceTextSha256=r.source.textSha256;r.classificationRecord.reviewProof.sourceTextSha256=r.source.textSha256;},'overlapping gap':r=>r.classificationRecord.naFullSourceEvidence.whitespaceGaps[1].quoteStart--})){const f=withWhitespace();mutate(f.record);reseal(f.record);rows.push({name,...f,expected:false});}
 for(const value of [undefined,{}]){const f=fixture();if(value===undefined)delete f.record.classificationRecord.naFullSourceEvidence;else f.record.classificationRecord.naFullSourceEvidence=value;reseal(f.record);rows.push({name:'normal method coverage must be explicit null '+String(value),...f,expected:false});}
 return rows;
}
module.exports={cases,withWhitespace};
