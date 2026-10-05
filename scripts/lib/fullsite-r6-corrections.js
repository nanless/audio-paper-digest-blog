'use strict';
// A closed six-record publication overlay. Neither predecessor is deleted or
// relabelled. Every successor needs its exact root-approved whole tuple.
const fs=require('node:fs'),path=require('node:path');
const api=require('./fullsite-tag-proof'),shared=require('./tag-classification-v3-proof'),tuples=require('./fullsite-publication-selection');
const AUTHORITY='110d10cca5d32a0477ab5160b9dad58ab42c8122becdc8c6ab49c7474c613086';
const fail=m=>{throw Error('Exact six correction rejected: '+m);};
function read(root,oldFullsite){
 const get=n=>fs.readFileSync(path.join(root,'data/fullsite-r6-corrections-'+n+'.json'));
 if(!fs.existsSync(path.join(root,'data/fullsite-r6-corrections-history.json'))){if(['authority','admission','sources','packed'].some(n=>fs.existsSync(path.join(root,'data/fullsite-r6-corrections-'+n+'.json'))))fail('partial correction collection');return null;}
 const bytes=get('authority');if(api.sha(bytes)!==AUTHORITY)fail('authority whole');const authority=shared.parseStrictJson(bytes.toString('utf8'));
 if(authority.contract!=='fullsite-exact-six-successor-publication-authority-v1'||authority.rootAuthoritySha256!=='a93cde51642f0e387a097cec990cf6396e2b16497b2f2a5eeb2507718a294852'||authority.rows.length!==6)fail('root scope');
 const history=api.parseSupplement(shared.parseStrictJson(get('history').toString('utf8'))),context=require('./fullsite-admission-proof').createContext(get('admission'),get('sources'));
 const snapshots=new Map(shared.parseStrictJson(fs.readFileSync(path.join(root,'data/taxonomy-catalog.json'),'utf8')).snapshots.map(x=>[x.registrySha256,x]));
 const oldV2=shared.parseStrictJson(fs.readFileSync(path.join(root,'data/taxonomy-history-v2.json'),'utf8'));
 const actual=tuples.inventory(history),eligible=new Map();
 for(const t of actual){const row=authority.rows.find(x=>x.paperId===t.paperId);if(!row||shared.stableHash(t)!==shared.stableHash(row.successor)||eligible.has(t.paperId))fail('unknown/altered successor');eligible.set(t.paperId,row);}
 if(eligible.size!==authority.rows.length||eligible.has(authority.unresolvedPaperId))fail('scope');
 for(const row of authority.rows){
  if(row.predecessor.kind==='held-original-v2'){const old=require('./tag-old-v2-publication-holds').tuple(row.paperId,oldV2.records);if(shared.stableHash(old)!==shared.stableHash(row.predecessor.tuple))fail('old V2 predecessor');}
  else if(row.predecessor.kind==='held-original-native'){if(!oldFullsite||shared.stableHash(tuples.tuple(row.paperId,oldFullsite.classificationRecords[row.paperId],oldFullsite.records))!==shared.stableHash(row.predecessor.tuple))fail('old native predecessor');}
  else if(row.predecessor.kind!=='existing-flat-retrieval-labels')fail('unknown predecessor');
 }
 for(const [p,r]of Object.entries(history.records)){
  api.validatePublicRecord(r,p,history.classificationRecords[r.classificationRef],snapshots.get(r.registrySha256),context);
  const file=path.join(root,p);const bytes=fs.readFileSync(file),text=bytes.toString('utf8'),header=text.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/);if(!header||api.sha(bytes)!==r.pageSha256||api.sha(text.slice(header[0].length))!==r.bodySha256)fail('current MD/body');
 }
 return {history,counts:{papers:6,pages:6},resolve(p){return history.records[p]||null;}};
}
module.exports={AUTHORITY,read};
