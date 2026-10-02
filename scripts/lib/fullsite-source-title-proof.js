'use strict';
// These public commitments describe the independently approved source-map
// descriptor. They do not authenticate an old page title or replay the private
// full-text/Atom files; the source producer performs those physical checks.
const crypto=require('node:crypto');
const N='fullsite-source-title-normalization-front-window-v2';
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const hash=x=>typeof x==='string'&&/^[a-f0-9]{64}$/u.test(x);
const text=x=>typeof x==='string'&&x.isWellFormed()&&!/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/u.test(x);
const fail=m=>{throw Error('Fullsite source title binding rejected: '+m);};
function exact(v,keys){if(!v||typeof v!=='object'||Array.isArray(v)||Object.keys(v).length!==keys.length||keys.some(k=>!Object.hasOwn(v,k)))fail('exact keys');}
function quote(q){exact(q,['quote','quoteStart','quoteEnd','offsetUnit','quoteSha256']);if(!text(q.quote)||!q.quote.trim()||!Number.isSafeInteger(q.quoteStart)||q.quoteStart<0||!Number.isSafeInteger(q.quoteEnd)||q.quoteEnd!==q.quoteStart+q.quote.length||q.offsetUnit!=='utf16-code-unit'||q.quoteSha256!==sha(q.quote))fail('literal UTF16 quote commitment');}
function fold(x){return x.replace(/-\s*[\r\n]+\s*/gu,'-').replace(/\s+/gu,' ').trim();}
function atomTitle(x){if(/[<>]/u.test(x)||/&(?!amp;|lt;|gt;|apos;|quot;#[0-9]+;|#x[0-9a-fA-F]+;)/u.test(x))fail('Atom scalar encoding');return x.replace(/&(amp|lt|gt|apos|quot|#\d+|#x[0-9a-fA-F]+);/gu,(all,k)=>{const n={amp:'&',lt:'<',gt:'>',apos:"'",quot:'"'};if(Object.hasOwn(n,k))return n[k];const c=parseInt(k.startsWith('#x')?k.slice(2):k.slice(1),k.startsWith('#x')?16:10);if(c<32||c>0x10ffff||c>=0xd800&&c<=0xdfff)fail('Atom scalar range');return String.fromCodePoint(c);}).replace(/\s+/gu,' ').trim();}
function validate(source){
 const b=source?.sourceTitleBinding;if(!b||!text(source.sourceTitle)||!source.sourceTitle.trim()||b.sourceTitleSha256!==sha(source.sourceTitle))fail('source title hash');
 if(b.contract==='sealed-conference-metadata-title-binding-v1'){
  exact(b,['contract','sourceTitleSha256','writerInputsSha256','metadataSha256']);if(!hash(b.writerInputsSha256)||!hash(b.metadataSha256)||b.writerInputsSha256!==source.writerInputsSha256)fail('conference metadata title');return true;
 }
 if(b.normalizationContract!==N||b.sourceTextSha256!==source.textSha256||!hash(b.runtimeMetadataTitleSha256))fail('normalization/runtime/text commitment');
 if(b.contract==='sealed-arxiv-title-binding-v1'){
  exact(b,['contract','normalizationContract','basis','runtimeMetadataTitleSha256','sourceTitleSha256','sourceTextSha256','sourceOpeningLine']);if(b.basis!=='sealed-runtime-metadata'||b.sourceOpeningLine!==null||b.runtimeMetadataTitleSha256!==sha(source.sourceTitle))fail('sealed metadata title');return true;
 }
 if(b.contract==='sealed-arxiv-front-title-binding-v2'){
  const foot=b.basis==='sealed-front-explicit-thanks-footnote-boundary';exact(b,['contract','normalizationContract','basis','sourceTextSha256','titleQuote','runtimeMetadataTitleSha256','sourceTitleSha256','frontWindow',...(foot?['footnoteExclusion','titleEndOffset']:[])]);if(!foot&&b.basis!=='sealed-front-complete-lines')fail('front title basis');quote(b.titleQuote);exact(b.frontWindow,['limit','boundary','boundaryOffset']);const w=b.frontWindow;
  if(w.limit!==4000||!['utf16-budget','front-matter-end'].includes(w.boundary)||!Number.isSafeInteger(w.boundaryOffset)||w.boundaryOffset<0||w.boundaryOffset>4000||b.titleQuote.quoteEnd>w.boundaryOffset)fail('complete front window');
  const lines=b.titleQuote.quote.split(/\r\n|\n|\r/u);if(lines.length>8||lines.some(x=>!x.trim()))fail('complete nonblank front lines');
  let literal=b.titleQuote.quote;if(foot){quote(b.footnoteExclusion);const f=b.footnoteExclusion;if(!Number.isSafeInteger(b.titleEndOffset)||b.titleEndOffset!==f.quoteStart||f.quoteEnd!==b.titleQuote.quoteEnd||f.quoteStart<b.titleQuote.quoteStart||literal.slice(f.quoteStart-b.titleQuote.quoteStart)!==f.quote||!/^(?:(?:†|\*)+\s*)?(?:thanks|Thanks):\s*(?:Project page:\s*https:\/\/|arXiv preprint,\s*v[1-9]\d*\s|This work\b|This research\b|The authors\b|Supported by\b|Funded by\b)/u.test(f.quote))fail('explicit footnote boundary');literal=literal.slice(0,f.quoteStart-b.titleQuote.quoteStart).trimEnd();}
  if(fold(literal)!==source.sourceTitle)fail('source-derived display title');return true;
 }
 if(b.contract==='official-arxiv-atom-title-bound-to-sealed-source-v1'){
  exact(b,['contract','normalizationContract','basis','paperId','querySourceId','entrySourceId','entryVersion','entryUpdatedAt','publishedAt','observedAt','sourceTitleSha256','sourceTextSha256','runtimeMetadataTitleSha256','sourceManifestSha256','sourceSnapshotSha256','metadataManifestSha256','metadataResponseSha256','metadataRecordSha256','atomResponseSha256','titleQuote','sourceFrontTitleStatus','disclosure']);
  if(b.basis!=='official-metadata-title-only'||b.paperId!==source.paperId||b.querySourceId!==source.sourceId||!/^arxiv:\d{4}\.\d{4,5}$/u.test(source.paperId)||!Number.isSafeInteger(b.entryVersion)||b.entryVersion<1||b.entrySourceId!==source.paperId.slice(6)+'v'+b.entryVersion||b.sourceManifestSha256!==source.sourceManifestSha256||source.sourceSnapshotSha256!==undefined&&source.sourceSnapshotSha256!==null&&b.sourceSnapshotSha256!==source.sourceSnapshotSha256)fail('official metadata source identity');
  for(const k of ['sourceManifestSha256','sourceSnapshotSha256','metadataManifestSha256','metadataResponseSha256','metadataRecordSha256','atomResponseSha256'])if(!hash(b[k]))fail('official commitment');
  for(const k of ['entryUpdatedAt','publishedAt','observedAt'])if(typeof b[k]!=='string'||!Number.isFinite(Date.parse(b[k]))||new Date(b[k]).toISOString()!==b[k])fail('official chronology');if(b.publishedAt>b.entryUpdatedAt||b.entryUpdatedAt>b.observedAt)fail('official chronology order');
  const v=b.querySourceId.match(/v([1-9]\d*)$/u);if(v&&Number(v[1])!==b.entryVersion)fail('versioned official query');quote(b.titleQuote);if(atomTitle(b.titleQuote.quote)!==source.sourceTitle||b.sourceFrontTitleStatus!=='not-required-for-official-metadata-title-basis'||b.disclosure!=='本次标签依据所列封存官方原文；来源标题取其绑定的官方元数据，导读正文未随分类改写。')fail('official quote/disclosure');return true;
 }
 fail('unknown title binding contract');
}
module.exports={validate,quote,N};
