'use strict';

// Compatibility views for already released readers. These functions do not
// certify a source, change a saved proof, or set any completion/permission flag.
const protocols=require('./protocol-registry.js');
const clone=value=>JSON.parse(JSON.stringify(value));
const families={
  citation:'researcher-sidecars',context:'paper-research-context',
  publicCitation:'paper-citation-source',flat:'paper-tag-flat-tags',
  snapshot:'paper-tag-catalog-snapshot',versions:'paper-tag-catalog-versions'
};
const variants={
  'researcher-sidecars':'source-bound-citation',
  'paper-research-context':'explicit-source-abstract',
  'paper-citation-source':'public-source-identity',
  'paper-tag-flat-tags':'selected-preferred-labels',
  'paper-tag-catalog-snapshot':'public-concept-hierarchy',
  'paper-tag-catalog-versions':'sha-keyed-snapshot-set'
};
function legacyRecord(value,name){
  if(!protocols.hasValidHeader(value,name))throw new Error('Unregistered public compatibility input: '+name);
  if(value.contract!==protocols.contract(name))return clone(value);
  const output=clone(value);
  for(const key of ['contract','schemaFingerprint','version','schemaVersion','policyVersion'])delete output[key];
  if(protocols.format(value.contract,name,value.schemaFingerprint)!==variants[name])throw new Error('No legacy projection is implemented for this semantic format');
  return Object.assign(protocols.historicalHeader(name,variants[name],null),output);
}
function legacyFlatMetadata(value){
  const output=legacyRecord(value,families.flat);
  if(value.contract===protocols.contract(families.flat)){
    const schema=protocols.declaredSchema(value.contract,families.flat,value.schemaFingerprint);
    const selection=schema.selectionFormat;
    if(!protocols.hasValidHeader(selection,'paper-tag-selection')||value.selectionContract!==selection.contract)throw new Error('Tag selection differs from this exact flat schema declaration');
    output.selectionContract=protocols.historicalHeader('paper-tag-selection','task-and-method-concept-selection',null).contract;
  }
  return output;
}
function legacySidecar(value,kind){
  const output=legacyRecord(value,families[kind]);
  if(kind==='context'&&value.contract===protocols.contract(families.context)&&output.assessment&&output.assessment.tagMetadata){
    output.assessment.tagMetadata=legacyFlatMetadata(output.assessment.tagMetadata);
  }
  return output;
}
// Rebuild only the format-bearing object containers. All scientific values keep
// their original JSON lexemes (including 7.0 rather than JS's normalized 7).
// The normal publisher uses sorted, two-space JSON with a final newline.
function legacySidecarBytes(bytes,kind){
  const text=new TextDecoder('utf-8',{fatal:true}).decode(bytes),original=JSON.parse(text);
  const projected=legacySidecar(original,kind);
  if(original.contract!==protocols.contract(families[kind]))return Buffer.from(bytes);
  let position=0;
  function space(){while(/\s/.test(text[position]||'')&&position<text.length)position++;}
  function string(){const start=position++;while(position<text.length){const char=text[position++];if(char==='\\')position++;else if(char==='"')return text.slice(start,position);}throw new Error('Unterminated sidecar string');}
  function parse(depth=0){
    if(depth>64)throw new Error('Sidecar nesting exceeds its format limit');
    space();const start=position,token=text[position];
    if(token==='{'){
      position++;space();const fields=new Map();
      while(text[position]!=='}'){
        const key=JSON.parse(string());if(fields.has(key))throw new Error('Duplicate sidecar field');
        space();if(text[position++]!==':')throw new Error('Invalid sidecar object');
        fields.set(key,parse(depth+1));space();
        if(text[position]!==',')break;position++;space();
      }
      if(text[position++]!=='}')throw new Error('Invalid sidecar object ending');
      return {start,end:position,fields};
    }
    if(token==='['){
      position++;space();while(text[position]!==']'){parse(depth+1);space();if(text[position]!==',')break;position++;space();}
      if(text[position++]!==']')throw new Error('Invalid sidecar array ending');
    }else if(token==='"')string();
    else{while(position<text.length&&!/[\s,}\]]/.test(text[position]))position++;}
    return {start,end:position};
  }
  const tree=parse();space();if(position!==text.length)throw new Error('Trailing sidecar data');
  function update(node,before,after){
    if(!node.fields)throw new Error('Format container must be an object');
    node.changes=new Map();
    for(const key of ['contract','schemaFingerprint','version','schemaVersion','policyVersion','selectionContract']){
      if(Object.hasOwn(before,key)!==Object.hasOwn(after,key)||before[key]!==after[key])node.changes.set(key,Object.hasOwn(after,key)?{literal:JSON.stringify(after[key])}:null);
    }
  }
  update(tree,original,projected);
  if(kind==='context'&&original.assessment?.tagMetadata){
    const assessment=tree.fields.get('assessment'),tags=assessment?.fields?.get('tagMetadata');
    update(tags,original.assessment.tagMetadata,projected.assessment.tagMetadata);
    assessment.rebuild=true;
  }
  function emit(node,depth){
    if(node.literal!==undefined)return node.literal;
    if(!node.changes&&!node.rebuild)return text.slice(node.start,node.end);
    const fields=new Map(node.fields);
    for(const [key,value]of node.changes||[]){if(value===null)fields.delete(key);else fields.set(key,value);}
    const keys=[...fields.keys()].sort((a,b)=>{const x=Array.from(a,c=>c.codePointAt(0)),y=Array.from(b,c=>c.codePointAt(0));for(let i=0;i<Math.min(x.length,y.length);i++)if(x[i]!==y[i])return x[i]-y[i];return x.length-y.length;});
    return '{\n'+keys.map(key=>'  '.repeat(depth+1)+JSON.stringify(key)+': '+emit(fields.get(key),depth+1)).join(',\n')+'\n'+'  '.repeat(depth)+'}';
  }
  return Buffer.from(emit(tree,0)+'\n','utf8');
}
function legacyCatalog(value,kind){
  const output=legacyRecord(value,families[kind]);
  if(kind==='versions'){
    if(!Array.isArray(value.snapshots))throw new Error('Public snapshot set is missing');
    output.snapshots=value.snapshots.map(snapshot=>legacyCatalog(snapshot,'snapshot'));
  }
  return output;
}
function legacyIndexRecord(record){
  if(!record||typeof record!=='object'||Array.isArray(record))throw new Error('Public index record must be an object');
  const output=clone(record);
  if(record.tagContract){
    const header={contract:record.tagContract};
    if(Object.hasOwn(record,'tagSchemaFingerprint'))header.schemaFingerprint=record.tagSchemaFingerprint;
    const projected=legacyRecord(header,families.flat);
    output.tagContract=projected.contract;delete output.tagSchemaFingerprint;
  }else if(Object.hasOwn(record,'tagSchemaFingerprint'))throw new Error('Unbound tag schema fingerprint');
  if(record.citation)output.citation=legacyRecord(record.citation,families.publicCitation);
  delete output.clientSidecars;
  return output;
}
module.exports={legacyRecord,legacyFlatMetadata,legacySidecar,legacySidecarBytes,legacyCatalog,legacyIndexRecord};
