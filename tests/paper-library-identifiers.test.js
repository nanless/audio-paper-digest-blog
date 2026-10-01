'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const library=require('../assets/js/paper-library');
const origin='https://example.test',base='/audio-paper-digest-blog/';
const p='content/posts/2026-04-29-a-superb-style-benchmark-of-self-supervised.md';
const issued=JSON.parse(fs.readFileSync(path.join(__dirname,'../data/taxonomy-history-v2.json'))).records[p];
const entry=item=>library.normalizeEntry(item,origin,base);
const filter=(entries,query)=>library.filterEntries(entries,{query,type:'all',year:'all',sort:'newest'});
test('real IEEE canonical identity is searchable by bare number and full ID without inventing arxiv identity',()=>{
 assert.equal(issued.paperId,'conference:icassp:2026:icassp-arnumber:11460421');
 const citation={identityStatus:'verified',paperId:issued.paperId,sourceUrl:issued.source.sourceUrl};
 const paper=entry({title:'A SUPERB-Style Benchmark of Self-Supervised Models',permalink:base+'posts/'+path.basename(p,'.md')+'/',pageType:'paper',identityStatus:'verified',paperId:issued.paperId,arxivId:'',citation});
 const other=entry({title:'Different research',permalink:base+'posts/different/',pageType:'paper',paperId:'conference:icassp:2026:icassp-arnumber:11460422',arxivId:''});
 for(const q of ['11460421',issued.paperId,issued.paperId.toUpperCase()])assert.deepEqual(filter([paper,other],q),[paper]);
 assert.equal(paper.arxivId,'');assert.equal(paper.type,'paper');assert.deepEqual(paper.citation,citation);
 assert.deepEqual(filter([paper,other],'11460423'),[]);
});
test('arxiv ID, titles, existing tags and exact public slug remain searchable; absent paperId does not create an undefined match',()=>{
 const arxiv=entry({title:'语音增强方法',originalTitle:'Speech Enhancement',permalink:base+'posts/speech-enhancement-study/',pageType:'paper',paperId:'arxiv:2606.05620',arxivId:'2606.05620',tags:['SE','语音增强']});
 const legacy=entry({title:'Legacy ASR guide',permalink:base+'posts/legacy-asr/',pageType:'paper',tags:['ASR']});
 for(const q of ['2606.05620','arxiv:2606.05620','语音增强','speech enhancement','speech-enhancement-study','SE'])assert.ok(filter([arxiv,legacy],q).includes(arxiv),q);
 assert.deepEqual(filter([arxiv,legacy],'ASR'),[legacy]);assert.deepEqual(filter([arxiv,legacy],'undefined'),[]);
});
