'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const api=require('./lib/tag-public-proof');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
function verify(root){
 const collections=[['taxonomy-history-v2.json','historical-source-taxonomy-supplement-v2',false],['current-page-taxonomy-history-v2.json','historical-current-page-source-taxonomy-supplement-v2',true]].filter(([name])=>fs.existsSync(path.join(root,'data',name)));if(!collections.length)return {records:0,currentPageRecords:0};
 const catalog=JSON.parse(fs.readFileSync(path.join(root,'data/taxonomy-catalog.json'),'utf8'));
 const snapshots=new Map(catalog.snapshots.map(s=>[s.registrySha256,s]));
 const seen=new Set();let records=0,currentPageRecords=0;
 for(const[name,contract,controlled]of collections){const history=api.parseStrictJson(fs.readFileSync(path.join(root,'data',name),'utf8'));if(history.contract!==contract||!history.records||typeof history.records!=='object'||Array.isArray(history.records))throw new Error('历史v2补充集合契约错误');
 for(const[key,r]of Object.entries(history.records)){
  if(!/^content\/posts\/[a-zA-Z0-9][a-zA-Z0-9_./-]*\.md$/.test(key)||key.split('/').includes('..'))throw new Error('历史v2页面路径错误');
  if(seen.has(key))throw new Error('普通/受控v2页面重复');seen.add(key);
  if(controlled){const context=require('./lib/current-page-tag-v2-proof').validateProductionOuter(r);if(context.pagePath!==key)throw new Error('受控v2实际页面路径与已核计划不符');api.validateControlledCurrentPageRecord(r,snapshots.get(r.registrySha256));currentPageRecords++;}else{api.validatePublicRecord(r,snapshots.get(r.registrySha256));records++;}
  const full=path.resolve(root,key);if(!full.startsWith(path.resolve(root,'content/posts')+path.sep))throw new Error('历史v2路径越界');
  const stat=fs.lstatSync(full);if(!stat.isFile()||stat.isSymbolicLink())throw new Error('历史v2页面非普通文件');
  const bytes=fs.readFileSync(full),text=new TextDecoder('utf-8',{fatal:true}).decode(bytes),header=text.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/);
  if(!header||sha(bytes)!==r.pageSha256||sha(Buffer.from(text.slice(header[0].length)))!==r.bodySha256)throw new Error('历史v2当前页面/正文SHA漂移：'+key);
 }}
 // Qualification follows every original proof/source/MD validation above.
 const holdsFile=path.join(root,'data/taxonomy-old-v2-publication-holds.json'),ordinaryFile=path.join(root,'data/taxonomy-history-v2.json'),holds=require('./lib/tag-old-v2-publication-holds');
 if(fs.existsSync(ordinaryFile)){
  const ordinary=api.parseStrictJson(fs.readFileSync(ordinaryFile,'utf8')),hasHeld=Object.values(ordinary.records).some(r=>holds.IDS.includes(r.paperId));
  if(hasHeld||fs.existsSync(holdsFile)){const stat=fs.lstatSync(holdsFile);if(!stat.isFile()||stat.isSymbolicLink())throw Error('Old V2 hold authority must be a regular file');holds.read(fs.readFileSync(holdsFile),ordinary);}
 }
 return {records,currentPageRecords};
}
if(require.main===module){try{console.log(JSON.stringify(verify(process.cwd())));}catch(e){console.error(e.message);process.exitCode=1;}}
module.exports={verify};
