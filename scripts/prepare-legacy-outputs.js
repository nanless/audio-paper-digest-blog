'use strict';
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const protocols=require('../assets/js/protocol-registry.js');
const projection=require('../assets/js/public-legacy-projection.js');
const tags=require('../assets/js/tag-core.js');
const sha=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
const json=value=>Buffer.from(JSON.stringify(value,null,2)+'\n','utf8');
const names=['citation.json','citation.bib','citation.ris','rethink-context.json'];
const limit=256*1024;
function need(value,message){if(!value)throw new Error(message);}
// This is the published serializer, not a bibliography synthesized by the app.
// All values come from the same actual, SHA-bound citation JSON read below.
function bibliographyBytes(citation,kind){
  function text(value){need(typeof value==='string'&&value.trim()===value&&value.length>0&&!/[\u0000-\u001f\u007f]/.test(value),'Citation contains an invalid serialized text field');return value;}
  const title=text(citation.originalTitle),id=text(citation.id);
  need(Array.isArray(citation.authors)&&citation.authors.length>0,'Citation lacks original structured authors');
  const authors=citation.authors.map(author=>{need(author&&typeof author==='object'&&!Array.isArray(author),'Citation author is not structured');return text(author.name);});
  const escapes={'\\':'{\\textbackslash{}}','{':'\\{','}':'\\}','&':'\\&','%':'\\%','$':'\\$','#':'\\#','_':'\\_','~':'{\\textasciitilde{}}','^':'{\\textasciicircum{}}'};
  const escape=value=>value.replace(/[\\{}&%$#_~^]/g,character=>escapes[character]);
  const key=kind+'_'+id.toLowerCase().replace(/[^a-z0-9]+/g,'_');
  const authorText=authors.map(author=>'{'+escape(author)+'}').join(' and ');
  let bib,url,pdf,risType;
  if(kind==='arxiv'){
    need(citation.type==='preprint','arXiv citation has the wrong publication type');
    url=text(citation.absUrl);pdf=text(citation.pdfUrl);risType='UNPB';
    bib='@misc{'+key+',\n  title = {'+escape(title)+'},\n  author = {'+authorText+'},\n  eprint = {'+escape(id)+'},\n  archivePrefix = {arXiv},\n  url = {'+escape(url)+'}\n}\n';
  }else{
    need(kind==='conference'&&citation.type==='conference-paper','Conference citation has the wrong publication type');
    url=citation.recordUrl==null?null:text(citation.recordUrl);pdf=citation.pdfUrl==null?null:text(citation.pdfUrl);risType='CONF';
    const lines=['@inproceedings{'+key+',','  title = {'+escape(title)+'},','  author = {'+authorText+'}'];
    if(url){lines[lines.length-1]+=',';lines.push('  url = {'+escape(url)+'}');}
    bib=lines.concat('}','').join('\n');
  }
  const ris=['TY  - '+risType,'TI  - '+title,...authors.map(author=>'AU  - '+author),'ID  - '+id];
  if(url)ris.push('UR  - '+url);if(pdf)ris.push('L1  - '+pdf);
  return {'citation.bib':Buffer.from(bib),'citation.ris':Buffer.from(ris.concat('ER  - ','').join('\n'))};
}
function prepareLegacyOutputs(buildDir,records){
  const root=path.resolve(buildDir),sources=new Map(),outputs=new Map();
  need(fs.lstatSync(root).isDirectory()&&!fs.lstatSync(root).isSymbolicLink(),'Build root must be a real directory');
  function target(relative,create=false){
    need(typeof relative==='string'&&/^[a-zA-Z0-9._/-]+$/.test(relative)&&!relative.startsWith('/')&&!relative.split('/').some(part=>!part||part==='.'||part==='..'),'Unsafe public compatibility path');
    let current=root;
    for(const part of relative.split('/').slice(0,-1)){
      current=path.join(current,part);
      let info;
      try{info=fs.lstatSync(current);}catch(error){if(error.code!=='ENOENT')throw error;}
      if(info)need(info.isDirectory()&&!info.isSymbolicLink(),'Compatibility parent must be a real directory');
      else if(create)fs.mkdirSync(current);
    }
    const result=path.join(root,relative);
    if(fs.existsSync(result)||(()=>{try{fs.lstatSync(result);return true;}catch(error){if(error.code==='ENOENT')return false;throw error;}})()){
      const info=fs.lstatSync(result);need(info.isFile()&&!info.isSymbolicLink()&&info.nlink===1,'Compatibility path must be a single-link file');
    }
    return result;
  }
  function read(relative,max=limit){
    const file=target(relative),info=fs.lstatSync(file);need(info.size>0&&info.size<=max,'Compatibility source exceeds its byte limit');
    const bytes=fs.readFileSync(file),after=fs.lstatSync(file);
    need(bytes.length===info.size&&after.dev===info.dev&&after.ino===info.ino&&after.size===info.size,'Compatibility source changed while reading');
    const item={relative,bytes,sha256:sha(bytes),dev:info.dev,ino:info.ino};
    if(sources.has(relative))need(sources.get(relative).sha256===item.sha256,'Conflicting compatibility source');
    else sources.set(relative,item);
    return item;
  }
  function parse(bytes){return JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(bytes));}
  function plan(relative,bytes,existingKind,originalPlainBytes=null){
    need(bytes.length>0,'Empty compatibility output');
    const file=target(relative);let before=null;
    if(fs.existsSync(file)){
      const old=fs.readFileSync(file);before=sha(old);
      if(!old.equals(bytes)){
        if(originalPlainBytes)need(old.equals(originalPlainBytes),'Existing bibliography does not match its actual original citation JSON');
        else{
          need(existingKind,'Existing compatibility target differs');
          const value=parse(old);
          need(protocols.hasValidHeader(value,existingKind),'Existing compatibility target has an unknown format');
        }
      }
    }
    if(outputs.has(relative))need(outputs.get(relative).bytes.equals(bytes),'Conflicting compatibility output');
    else outputs.set(relative,{relative,bytes,before});
  }
  function publicPath(url){
    need(typeof url==='string'&&url.startsWith('/')&&!url.startsWith('//')&&!/[?#%\\]/.test(url),'Sidecar URL must be a canonical local path');
    const marker='/client/papers/',position=url.indexOf(marker);
    need(position>=0&&url.indexOf(marker,position+1)<0,'Sidecar URL is outside the current endpoint');
    const relative=url.slice(position+1),match=relative.match(/^client\/papers\/(\d{4}-\d{2}-\d{2})\/([a-z0-9][a-z0-9-]*[a-z0-9])\/(citation\.json|citation\.bib|citation\.ris|rethink-context\.json)$/);
    need(match,'Sidecar URL has an unsupported shape');
    return {relative,date:match[1],id:match[2],name:match[3],prefix:url.slice(0,position)};
  }
  const legacyRecords=records.map(record=>{
    const legacy=projection.legacyIndexRecord(record);
    if(!Object.hasOwn(record,'clientSidecars'))return legacy;
    const descriptors=record.clientSidecars;
    need(descriptors&&typeof descriptors==='object'&&!Array.isArray(descriptors)&&Object.keys(descriptors).sort().join('|')===[...names].sort().join('|'),'Current sidecars must describe exactly four original files');
    const originals={},locations={};
    for(const name of names){
      const descriptor=descriptors[name];need(descriptor&&/^[a-f0-9]{64}$/.test(descriptor.sha256),'Sidecar descriptor lacks its original SHA');
      const location=publicPath(descriptor.url);need(location.name===name&&location.date===record.date,'Sidecar belongs to a different index member or date');
      locations[name]=location;originals[name]=read(location.relative);
      need(originals[name].sha256===descriptor.sha256,'Actual canonical sidecar SHA differs from its descriptor');
      const first=locations[names[0]];need(location.id===first.id&&location.prefix===first.prefix,'Mixed sidecar roots');
    }
    const citation=parse(originals['citation.json'].bytes),context=parse(originals['rethink-context.json'].bytes),proof=record.citation;
    need(protocols.hasValidHeader(citation,'researcher-sidecars')&&citation.contract==='researcher-sidecars'&&protocols.hasValidHeader(context,'paper-research-context')&&context.contract==='paper-research-context','Canonical sidecar format or fingerprint is invalid');
    need(protocols.hasValidHeader(proof,'paper-citation-source')&&proof.verified===true&&proof.identityStatus==='verified'&&record.pageType==='paper','Canonical sidecars lack the original public source identity');
    need(citation.originalTitle===context.originalTitle&&JSON.stringify(citation.authors)===JSON.stringify(context.authors)&&Array.isArray(citation.authors)&&citation.authors.length>0,'Citation/context authors or title differ');
    const location=locations[names[0]];
    if(proof.sourceKind==='arxiv'){
      const id=citation.arxivVersionedId||citation.arxivId;
      need(citation.arxivId&&context.arxivId===citation.arxivId&&context.arxivVersionedId===citation.arxivVersionedId&&context.arxivVersion===citation.arxivVersion&&id===proof.arxivId&&proof.paperKey==='arxiv:'+citation.arxivId&&location.id===citation.arxivId.replace(/[/.]/g,'-')&&citation.absUrl===proof.sourceUrl&&citation.pdfUrl===proof.pdfUrl&&context.absUrl===citation.absUrl&&context.pdfUrl===citation.pdfUrl,'Canonical arXiv sidecar differs from its original public source identity');
    }else{
      need(proof.sourceKind==='conference'&&citation.id===proof.paperKey&&citation.paperId===proof.paperKey&&context.paperId===citation.paperId&&citation.sourceSha256===context.sourceSha256&&/^[a-f0-9]{64}$/.test(citation.sourceSha256||'')&&location.id==='conference-'+sha(Buffer.from(citation.paperId)).slice(0,24)&&(citation.recordUrl||'')===(proof.sourceUrl||'')&&(citation.pdfUrl||'')===(proof.pdfUrl||'')&&context.recordUrl===citation.recordUrl&&context.pdfUrl===citation.pdfUrl,'Canonical conference sidecar differs from its original public source identity');
    }
    need(context.abstract===null?context.abstractSha256===null:typeof context.abstract==='string'&&sha(Buffer.from(context.abstract))===context.abstractSha256,'Original context abstract SHA is invalid');
    const bibliography=bibliographyBytes(citation,proof.sourceKind);
    for(const name of ['citation.bib','citation.ris'])need(originals[name].bytes.equals(bibliography[name]),'Canonical bibliography differs from its actual citation JSON');
    let previousBibliography=null;
    if(['citation.bib','citation.ris'].some(name=>{
      const file=target(locations[name].relative.replace(/^client\/papers\//,'data/papers/'));
      return fs.existsSync(file)&&!fs.readFileSync(file).equals(originals[name].bytes);
    })){
      const previous=read(locations['citation.json'].relative.replace(/^client\/papers\//,'data/papers/'));
      const old=parse(previous.bytes);
      need(protocols.hasValidHeader(old,'researcher-sidecars'),'Previous public citation has an unknown header');
      need(proof.sourceKind==='arxiv'?old.arxivId===citation.arxivId:old.paperId===citation.paperId,'Previous public citation belongs to another paper');
      previousBibliography=bibliographyBytes(old,proof.sourceKind);
    }
    for(const name of names){
      const location=locations[name],relative=location.relative.replace(/^client\/papers\//,'data/papers/');
      const bytes=name==='citation.json'?projection.legacySidecarBytes(originals[name].bytes,'citation'):name==='rethink-context.json'?projection.legacySidecarBytes(originals[name].bytes,'context'):originals[name].bytes;
      plan(relative,bytes,name==='citation.json'?'researcher-sidecars':name==='rethink-context.json'?'paper-research-context':null,previousBibliography&&previousBibliography[name]);
    }
    return legacy;
  });
  const catalogInputs=[['tag-catalog-snapshot.json','snapshot','paper-tag-catalog-snapshot'],['tag-catalog-versions.json','versions','paper-tag-catalog-versions']];
  const present=catalogInputs.map(([filename])=>fs.existsSync(target('data/'+filename)));
  need(present.every(Boolean)||present.every(value=>!value),'Public catalog resources must be a complete pair');
  const catalogValues=[];
  for(const [filename,kind,family]of catalogInputs){
    const relative='data/'+filename,file=target(relative);
    if(!fs.existsSync(file))continue;
    const original=read(relative,16*1024*1024),value=parse(original.bytes);
    need(protocols.hasValidHeader(value,family),'Public catalog has an unknown format');
    catalogValues.push(value);
    if(value.contract===family){plan('client/'+relative,original.bytes,family);plan(relative,json(projection.legacyCatalog(value,kind)),family);}
  }
  if(catalogValues.length){
    const graph=tags.createRegistry(catalogValues[0],catalogValues[1]);
    for(const record of records){
      if(record.tagContract==='paper-tag-flat-tags'&&record.tagPublicationStatus!=='withheld'){
        const resolved=graph.resolveRecord(record);
        need(resolved.status==='verified'&&Array.isArray(record.tagConcepts)&&record.tagConcepts.length>0&&resolved.concepts.length===record.tagConcepts.length,'Current index tags do not close over their original catalog snapshot');
      }
    }
  }else need(records.every(record=>record.tagContract!=='paper-tag-flat-tags'),'Current tag records require their actual public catalog pair');
  function materialize(){
    // Finish all source/target CAS checks before the first output mutation.
    for(const source of sources.values()){
      const file=target(source.relative),info=fs.lstatSync(file);
      need(info.dev===source.dev&&info.ino===source.ino&&sha(fs.readFileSync(file))===source.sha256,'Canonical source changed after compatibility planning');
    }
    for(const output of outputs.values()){
      const file=target(output.relative),actual=fs.existsSync(file)?sha(fs.readFileSync(file)):null;
      need(actual===output.before,'Compatibility target changed after planning');
    }
    for(const output of outputs.values()){
      const file=target(output.relative,true),temporary=path.join(path.dirname(file),'.compat-'+crypto.randomUUID());
      try{fs.writeFileSync(temporary,output.bytes,{flag:'wx',mode:0o644});fs.renameSync(temporary,file);}finally{if(fs.existsSync(temporary))fs.unlinkSync(temporary);}
    }
  }
  return {records:legacyRecords,materialize,outputPaths:[...outputs.keys()]};
}
function materializeLegacyOutputs(buildDir,records){const prepared=prepareLegacyOutputs(buildDir,records);prepared.materialize();return prepared.records;}
module.exports={prepareLegacyOutputs,materializeLegacyOutputs,bibliographyBytes};
