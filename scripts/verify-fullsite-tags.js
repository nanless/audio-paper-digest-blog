'use strict';
const fs=require('node:fs'),path=require('node:path');
const api=require('./lib/fullsite-tag-proof');
const {parseStrictJson}=require('./lib/tag-classification-v3-proof');
function verify(root) {
  const file=path.join(root,'data/fullsite-taxonomy-history.json');
  if (!fs.existsSync(file)) return {records:0,papers:0};
  const stat=fs.lstatSync(file);if (!stat.isFile() || stat.isSymbolicLink()) throw Error('Fullsite taxonomy sidecar must be a regular file');
  const manifestBytes=fs.readFileSync(file),value=parseStrictJson(manifestBytes.toString('utf8')),pack=require('./lib/fullsite-tag-pack');
  const history=value.contract===pack.CONTRACT?pack.reconstruct(value,key=>{
    const shard=path.join(root,'static',key),base=path.resolve(root,'static/fullsite-taxonomy');
    if(!path.resolve(shard).startsWith(base+path.sep))throw Error('Fullsite packed shard outside static root');
    for(const parent of [path.join(root,'static'),base])if(fs.lstatSync(parent).isSymbolicLink())throw Error('Fullsite packed static parent must not be symlink');
    const stat=fs.lstatSync(shard);if(!stat.isFile()||stat.isSymbolicLink())throw Error('Fullsite packed shard must be a regular file');
    return fs.readFileSync(shard);
  }):api.parseSupplement(value);
  if(value.contract===pack.CONTRACT&&(manifestBytes.length>pack.MAX_BYTES||manifestBytes.length+value.totalBytes>pack.MAX_TOTAL_BYTES))throw Error('Fullsite packed manifest/total byte budget');
  const catalog=parseStrictJson(fs.readFileSync(path.join(root,'data/taxonomy-catalog.json'),'utf8'));
  const snapshots=new Map(catalog.snapshots.map(s=>[s.registrySha256,s]));
  const context={};
  for(const [key,name]of [['admissionBytes','fullsite-taxonomy-admission.json'],['sourceBytes','fullsite-taxonomy-sources.json']]){
    const file=path.join(root,'data',name);
    if(fs.existsSync(file)){const stat=fs.lstatSync(file);if(!stat.isFile()||stat.isSymbolicLink())throw Error('Fullsite approved projection must be a regular file');context[key]=fs.readFileSync(file);}
  }
  if(value.contract===pack.CONTRACT&&(api.sha(context.admissionBytes||'')!==value.admissionProjectionSha256||api.sha(context.sourceBytes||'')!==value.sourceProjectionSha256))throw Error('Fullsite packed manifest approved projection whole SHA differs');
  const approvedBytes=require('./lib/fullsite-admission-proof').createContext(context.admissionBytes,context.sourceBytes);
  for (const [key,record] of Object.entries(history.records)) {
    api.validatePublicRecord(record,key,history.classificationRecords[record.classificationRef],snapshots.get(record.registrySha256),approvedBytes);
    const full=path.resolve(root,key);
    if (!full.startsWith(path.resolve(root,'content/posts')+path.sep)) throw Error('Fullsite taxonomy page outside root');
    const stat=fs.lstatSync(full);if (!stat.isFile() || stat.isSymbolicLink()) throw Error('Fullsite taxonomy page is not a regular file');
    const bytes=fs.readFileSync(full),text=new TextDecoder('utf-8',{fatal:true}).decode(bytes),header=text.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/);
    if (!header || api.sha(bytes)!==record.pageSha256 || api.sha(text.slice(header[0].length))!==record.bodySha256) throw Error('Fullsite taxonomy exact current page/body drift: '+key);
  }
  // Full validation above includes every original row, including any withheld
  // record. Eligibility partitions this verified collection without altering it.
  const selection=require('./lib/fullsite-publication-selection'),profiles=require('./lib/fullsite-tag-profiles').profiles;
  const pins={collectionSha256:api.sha(manifestBytes),admissionSha256:api.sha(context.admissionBytes||''),sourcesSha256:api.sha(context.sourceBytes||'')};
  const expected=selection.expectedFor(pins,profiles),selectorFile=path.join(root,'data/fullsite-taxonomy-publication-selection.json');
  let publication;
  if(expected){
    const stat=fs.lstatSync(selectorFile);if(!stat.isFile()||stat.isSymbolicLink())throw Error('Publication selection must be a regular file');
    publication=selection.read(fs.readFileSync(selectorFile),expected,history,pins).counts;
  }else if(fs.existsSync(selectorFile))throw Error('Unexpected selection for this approved collection');
  require('./lib/fullsite-r6-corrections').read(root,history);
  require('./lib/exact1028-qualified-classification').read(root);
  return {...{records:Object.keys(history.records).length,papers:Object.keys(history.classificationRecords).length},...(publication?{publication}: {})};
}
module.exports={verify};
if(require.main===module){try{console.log(JSON.stringify(verify(process.cwd())));}catch(e){console.error(e.message);process.exitCode=1;}}
