'use strict';
// Integrity replay only: reconstruct the supplied sealed text and numbered
// projection. This does not independently decide that a method is absent.
const crypto=require('node:crypto');
const sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const fail=m=>{throw new Error('历史v2全文NA证据拒绝：'+m);};
const map=x=>!!x&&typeof x==='object'&&!Array.isArray(x);
const exact=(x,keys)=>{if(!map(x)||Object.keys(x).sort().join('|')!==keys.slice().sort().join('|'))fail('字段不一致');};
const integer=n=>Number.isSafeInteger(n)&&n>=0;
function validateNAFullSourceEvidence(c,source){
 const v3=c.evidenceSelectionContract==='sealed-source-evidence-snippets-v3-formfeed-split';
 if(!v3&&c.evidenceSelectionContract!=='sealed-source-evidence-snippets-v2')fail('未知编号证据协议');
 if(!c.methodNotApplicable){if(!Object.hasOwn(c,'naFullSourceEvidence')||c.naFullSourceEvidence!==null)fail('普通方法必须显式null');return true;}
 const e=c.naFullSourceEvidence;exact(e,['contract','sampling','sourceTextSha256','sourceChars','offsetUnit','evidenceChars','evidenceSha256','snippets','whitespaceGaps']);
 if(e.contract!=='historical-source-taxonomy-na-full-source-evidence-v1'||e.sampling!=='full-source'||e.offsetUnit!=='utf16-code-unit'||e.sourceTextSha256!==source.textSha256||e.evidenceSha256!==c.evidenceSha256||!integer(e.sourceChars)||e.sourceChars<100||!integer(e.evidenceChars)||!Array.isArray(e.snippets)||!e.snippets.length||!Array.isArray(e.whitespaceGaps))fail('完整来源/编号契约');
 const events=[];let snippetEnd=0,evidenceChars=0;
 const span=s=>{if(typeof s.quote!=='string'||!s.quote.isWellFormed()||!integer(s.quoteStart)||!integer(s.quoteEnd)||s.quoteEnd<=s.quoteStart||s.quoteEnd>e.sourceChars||s.quote.length!==s.quoteEnd-s.quoteStart||sha(s.quote)!==s.quoteSha256)fail('逐字跨度/UTF16/SHA');};
 e.snippets.forEach((s,i)=>{exact(s,['id','quote','quoteStart','quoteEnd','offsetUnit','quoteSha256']);span(s);if(s.id!=='s'+String(i+1).padStart(5,'0')||s.offsetUnit!=='utf16-code-unit'||s.quote.trim().length<(v3?1:20)||(v3&&s.quote.includes('\f'))||s.quote.length>1000||s.quoteStart<snippetEnd)fail('编号顺序/跨度');snippetEnd=s.quoteEnd;evidenceChars+=s.quote.length;events.push(s);});
 let gapEnd=0;for(const g of e.whitespaceGaps){exact(g,['quoteStart','quoteEnd','quote','quoteSha256']);span(g);if(g.quote.trim()!==''||g.quoteStart<gapEnd)fail('非空白遗漏/顺序');gapEnd=g.quoteEnd;events.push(g);}
 events.sort((a,b)=>a.quoteStart-b.quoteStart);let end=0,text='';for(const s of events){if(s.quoteStart!==end)fail('来源覆盖有空隙或重叠');text+=s.quote;end=s.quoteEnd;}
 if(end!==e.sourceChars||text.length!==e.sourceChars||sha(text)!==source.textSha256||evidenceChars!==e.evidenceChars)fail('全文长度或SHA');
 const projection=e.snippets.map(s=>`[${s.id}; source UTF16 ${s.quoteStart}:${s.quoteEnd}]\n${s.quote}`).join('\n\n');if(sha(projection)!==e.evidenceSha256)fail('编号投影SHA');
 for(const evidence of [...c.concepts,c.typeEvidence,c.domainEvidence,c.methodNotApplicableEvidence])if(text.indexOf(evidence.quote)!==evidence.quoteStart||projection.indexOf(evidence.quote)!==evidence.evidenceQuoteStart)fail('决定证据未闭合重构来源/投影坐标');
 for(const selected of c.quoteSelections||[]){const span=e.snippets.find(s=>s.id===selected.id);if(!span||selected.evidenceId!==span.id||selected.quote!==span.quote||selected.quoteStart!==span.quoteStart||selected.quoteEnd!==span.quoteEnd||selected.offsetUnit!==span.offsetUnit||selected.quoteSha256!==span.quoteSha256)fail('选择编号与完整来源不一致');}
 return true;
}
module.exports={validateNAFullSourceEvidence};
