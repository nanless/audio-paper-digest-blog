'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const api=require('./lib/taxonomy-v2-proof');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
function verify(root){
 const file=path.join(root,'data/taxonomy-history-v2.json');if(!fs.existsSync(file))return {records:0};
 const history=api.parseStrictJson(fs.readFileSync(file,'utf8'));
 if(history.contract!=='historical-source-taxonomy-supplement-v2'||!history.records||typeof history.records!=='object'||Array.isArray(history.records))throw new Error('历史v2补充集合契约错误');
 const catalog=JSON.parse(fs.readFileSync(path.join(root,'data/taxonomy-catalog.json'),'utf8'));
 const snapshots=new Map(catalog.snapshots.map(s=>[s.registrySha256,s]));
 for(const[key,r]of Object.entries(history.records)){
  if(!/^content\/posts\/[a-zA-Z0-9][a-zA-Z0-9_./-]*\.md$/.test(key)||key.split('/').includes('..'))throw new Error('历史v2页面路径错误');
  api.validatePublicRecord(r,snapshots.get(r.registrySha256));
  const full=path.resolve(root,key);if(!full.startsWith(path.resolve(root,'content/posts')+path.sep))throw new Error('历史v2路径越界');
  const stat=fs.lstatSync(full);if(!stat.isFile()||stat.isSymbolicLink())throw new Error('历史v2页面非普通文件');
  const bytes=fs.readFileSync(full),text=new TextDecoder('utf-8',{fatal:true}).decode(bytes),header=text.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/);
  if(!header||sha(bytes)!==r.pageSha256||sha(Buffer.from(text.slice(header[0].length)))!==r.bodySha256)throw new Error('历史v2当前页面/正文SHA漂移：'+key);
 }
 return {records:Object.keys(history.records).length};
}
if(require.main===module){try{console.log(JSON.stringify(verify(process.cwd())));}catch(e){console.error(e.message);process.exitCode=1;}}
module.exports={verify};
