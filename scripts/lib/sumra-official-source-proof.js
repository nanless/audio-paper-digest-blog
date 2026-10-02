'use strict';
// One actual root-reviewed official proceedings generation. These commitments
// check public integrity; the native issuer/exporter replays the underlying files.
const crypto=require('node:crypto');
const PAPER_ID='conference:iclr:2026:openreview-forum-id:v23Pqcm6qp';
const SOURCE_KIND='authenticated-iclr-official-proceedings-pdf';
const RELATION='same-forum-official-2026-proceedings-cross-document-identity';
const IDENTITY_SHA='b110797ee9b277bbadb4e48a8e85ed4ad0ba7efe43458420574394aa3124bb14';
const PDF_SHA='fc96f7c0a771c69dcdbf5348f07950abd4bd5032c7e898e680937d8a0cfdd213';
const IDENTITY_KEYS=Object.freeze(['kind','originalTitle','paperId','pdfUrl','provenanceDisclosure','sourceBindings','sourceDoi','sourceId','sourceTitle','sourceUrl','sourceVersionWarning','versionRelation','writerInputsSha256']);
const EXTRA_KEYS=Object.freeze(['pdfSha256','textSha256','structuredArtifactsSha256']);
const map=x=>x!==null&&typeof x==='object'&&!Array.isArray(x)&&[null,Object.prototype].includes(Object.getPrototypeOf(x));
const canonical=x=>Array.isArray(x)?x.map(canonical):map(x)?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const stable=x=>crypto.createHash('sha256').update(JSON.stringify(canonical(x))).digest('hex');
const fail=m=>{throw new Error('SumRA官方论文集来源拒绝：'+m);};
function jsonTree(x){
 if(x===null||typeof x==='string'||typeof x==='boolean')return;
 if(typeof x==='number'&&Number.isFinite(x)&&!Object.is(x,-0))return;
 if(Array.isArray(x)){if(Object.getPrototypeOf(x)!==Array.prototype||Reflect.ownKeys(x).length!==x.length+1)fail('非普通JSON数组');for(let i=0;i<x.length;i++){if(!Object.hasOwn(x,i))fail('稀疏数组');jsonTree(x[i]);}return;}
 if(!map(x)||Reflect.ownKeys(x).some(k=>typeof k!=='string'))fail('非普通JSON字段');
 for(const k of Object.keys(x)){const d=Object.getOwnPropertyDescriptor(x,k);if(!Object.hasOwn(d,'value'))fail('非JSON访问器');jsonTree(d.value);}
}
function validatePublicIdentityBinding(identity){
 jsonTree(identity);
 if(!map(identity)||Object.keys(identity).sort().join('|')!==IDENTITY_KEYS.slice().sort().join('|'))fail('公开身份描述字段不符');
 // Whole actual JSON commits to the exact forum, two official URLs, ordered five
 // authors, metadata/PDF/acquisition bindings, receipt hashes and full disclosure.
 if(stable(identity)!==IDENTITY_SHA)fail('非已核官方来源generation');
 return true;
}
function validateSumraSourceDescriptor(source){
 jsonTree(source);
 if(!map(source)||Object.keys(source).sort().join('|')!==[...IDENTITY_KEYS,...EXTRA_KEYS].sort().join('|'))fail('分类来源描述字段不符');
 const identity={};for(const k of IDENTITY_KEYS)identity[k]=source[k];
 validatePublicIdentityBinding(identity);
 if(source.pdfSha256!==PDF_SHA||!['textSha256','structuredArtifactsSha256'].every(k=>typeof source[k]==='string'&&/^[a-f0-9]{64}$/.test(source[k])))fail('全文/PDF/结构来源hash不符');
 return true;
}
module.exports={PAPER_ID,SOURCE_KIND,RELATION,IDENTITY_SHA,validatePublicIdentityBinding,validateSumraSourceDescriptor};
