'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const api=require('./lib/taxonomy-classification-v3-proof');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
function verify(root){
 const collections=[['taxonomy-history-v3.json','historical-source-taxonomy-supplement-v3',false]].filter(([name])=>fs.existsSync(path.join(root,'data',name)));if(!collections.length)return {records:0,currentPageRecords:0};
 const catalog=JSON.parse(fs.readFileSync(path.join(root,'data/taxonomy-catalog.json'),'utf8'));
 const snapshots=new Map(catalog.snapshots.map(s=>[s.registrySha256,s]));
 const seen=new Set();let records=0,currentPageRecords=0;
 for(const name of ['taxonomy-history-v2.json','current-page-taxonomy-history-v2.json']){const file=path.join(root,'data',name);if(fs.existsSync(file)){const old=api.parseStrictJson(fs.readFileSync(file,'utf8'));for(const key of Object.keys(old.records||{}))seen.add(key);}}
 for(const[name,contract,controlled]of collections){const history=api.parseStrictJson(fs.readFileSync(path.join(root,'data',name),'utf8'));if(history.contract!==contract||!history.records||typeof history.records!=='object'||Array.isArray(history.records))throw new Error('历史classification-V3补充集合契约错误');
 for(const[key,r]of Object.entries(history.records)){
  if(!/^content\/posts\/[a-zA-Z0-9][a-zA-Z0-9_./-]*\.md$/.test(key)||key.split('/').includes('..'))throw new Error('历史classification-V3页面路径错误');
  if(seen.has(key))throw new Error('已typed的普通/受控页面不得与V3重复页面');seen.add(key);
  api.validatePublicRecord(r,snapshots.get(r.registrySha256));records++;
  const full=path.resolve(root,key);if(!full.startsWith(path.resolve(root,'content/posts')+path.sep))throw new Error('历史classification-V3路径越界');
  const stat=fs.lstatSync(full);if(!stat.isFile()||stat.isSymbolicLink())throw new Error('历史classification-V3页面非普通文件');
  const bytes=fs.readFileSync(full),text=new TextDecoder('utf-8',{fatal:true}).decode(bytes),header=text.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/);
  if(!header||sha(bytes)!==r.pageSha256||sha(Buffer.from(text.slice(header[0].length)))!==r.bodySha256)throw new Error('历史classification-V3当前页面/正文SHA漂移：'+key);
 }}
 return {records,currentPageRecords};
}
module.exports={verify};
if(require.main===module){try{console.log(JSON.stringify(verify(process.cwd())));}catch(error){console.error(error.message);process.exitCode=1;}}
