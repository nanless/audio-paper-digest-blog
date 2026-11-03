'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const os=require('node:os');
const crypto=require('node:crypto');
const {execFileSync}=require('node:child_process');
const protocols=require('../assets/js/protocol-registry');
const projection=require('../assets/js/public-legacy-projection');
const {prepareLegacyOutputs,bibliographyBytes}=require('../scripts/prepare-legacy-outputs');
const sha=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
const commit='c637ff8035c4f33323db5972d1345d31570bc504';
const names=['citation.json','citation.bib','citation.ris','rethink-context.json'];
// Exact original blob IDs from the published commit above. These same protected
// files remain in the current tree, so a shallow checkout still has the actual
// original Git objects without inventing a replacement historical response.
const blobs={'citation.bib':'83a8c84121e8387c78fd9507c48b42e0ea60a331','citation.json':'6f0119d01df56e5ad74e750ad2176cfd709220d3','citation.ris':'eabe5ba48f99dbe21b06f435ba19d4152ab385f9','rethink-context.json':'a08a3029ca89f4b12b08628706bc5305b81d1627'};
const original=Object.fromEntries(names.map(name=>[name,execFileSync('git',['cat-file','blob',blobs[name]],{cwd:path.resolve(__dirname,'..')})]));
function stable(bytes,family){
  const value=JSON.parse(bytes),old=protocols.recordHeader(value.contract,family),current=protocols.recordHeader(family,family);
  let text=bytes.toString('utf8');
  for(const [key,value]of Object.entries(old)){
    const needle='"'+key+'": '+JSON.stringify(value);
    const replacement=key==='contract'?'"contract": '+JSON.stringify(current.contract):'"schemaFingerprint": '+JSON.stringify(current.schemaFingerprint);
    assert.equal(text.split(needle).length,2,'exact published header occurrence');text=text.replace(needle,replacement);
  }
  return Buffer.from(text);
}
function fixture(action){
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'paperdigest-public-compat-'));
  const prefix='client/papers/2026-11-02/2610-41381/';
  const files={...original,'citation.json':stable(original['citation.json'],'researcher-sidecars'),'rethink-context.json':stable(original['rethink-context.json'],'paper-research-context')};
  const citation=JSON.parse(files['citation.json']);
  // Constructed public-index metadata for serializer tests, not an analysis/source capability.
  const proof=protocols.record('paper-citation-source',{verified:true,identityStatus:'verified',sourceKind:'arxiv',paperKey:'arxiv:'+citation.arxivId,arxivId:citation.arxivVersionedId||citation.arxivId,sourceUrl:citation.absUrl,pdfUrl:citation.pdfUrl});
  const record={date:'2026-11-02',pageType:'paper',citation:proof,clientSidecars:{}};
  for(const name of names){const file=path.join(root,prefix,name);fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,files[name]);record.clientSidecars[name]={url:'/audio-paper-digest-blog/'+prefix+name,sha256:sha(files[name])};}
  try{return action({root,record,files,prefix});}finally{fs.rmSync(root,{recursive:true,force:true});}
}
test('flat compatibility uses the exact schema-selected selection header, including a same-name historical fingerprint',()=>{
  const flat='paper-tag-flat-tags',selection='paper-tag-selection';
  const current=protocols.record(flat,{selectionContract:selection});
  assert.equal(projection.legacyFlatMetadata(current).selectionContract,protocols.historicalHeader(selection,'task-and-method-concept-selection',null).contract);
  const oldSelection=protocols.historicalHeader(selection,'task-and-method-concept-selection',null);
  assert.throws(()=>projection.legacyFlatMetadata({...current,selectionContract:oldSelection.contract}),/exact flat schema/);
  const oldFlat={...protocols.historicalHeader(flat,'selected-preferred-labels',null),selectionContract:oldSelection.contract};
  assert.deepEqual(projection.legacyFlatMetadata(oldFlat),oldFlat,'the actual original flat domain stays unchanged');

  // Complete synthetic schema evolution exercises the generated runtime itself.
  // It is not a claim that a previous stable-format publication already exists.
  const entries=JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data/paperdigest-protocols.json'),'utf8')).families;
  const family=entries[flat],oldSchema=protocols.declaredSchema(flat,flat,current.schemaFingerprint);
  const canonical=value=>Array.isArray(value)?'['+value.map(canonical).join(',')+']':value&&typeof value==='object'?'{'+Object.keys(value).sort().map(key=>JSON.stringify(key)+':'+canonical(value[key])).join(',')+'}':JSON.stringify(value);
  const fingerprint=schema=>sha(Buffer.from(canonical({name:flat,currentVariant:family.currentVariant,currentSchema:schema})));
  assert.equal(fingerprint(oldSchema),current.schemaFingerprint,'the full source schema has its real declared fingerprint');
  oldSchema.selectionFormat=oldSelection;
  const oldFingerprint=fingerprint(oldSchema),oldHeader={contract:flat,schemaFingerprint:oldFingerprint};
  family.formats.push({tag:flat,fp:oldFingerprint,variant:family.currentVariant,header:oldHeader,schema:oldSchema,historical:true});
  family.formats.push({tag:'synthetic-flat-kind-header',fp:null,variant:'legacy-kind-header',header:{contract:'synthetic-flat-kind-header',kind:'source-mode'},schema:null,historical:true});
  const registrySource=fs.readFileSync(path.resolve(__dirname,'../assets/js/protocol-registry.js'),'utf8');
  const marker='return createPublicProtocolApi(',start=registrySource.lastIndexOf(marker),end=registrySource.indexOf(');\n});',start);
  assert.ok(start>=0&&end>start);
  const module={exports:{}};new Function('module','exports',registrySource.slice(0,start)+marker+JSON.stringify(entries)+registrySource.slice(end))(module,module.exports);
  const local=module.exports,compatibility={exports:{}};
  assert.equal(local.hasValidHeader({contract:'synthetic-flat-kind-header',kind:'source-mode'},flat),true);
  assert.equal(local.hasValidHeader({contract:'synthetic-flat-kind-header',kind:'other'},flat),false);
  assert.equal(local.hasValidHeader({contract:'synthetic-flat-kind-header'},flat),false);
  new Function('require','module','exports',fs.readFileSync(path.resolve(__dirname,'../assets/js/public-legacy-projection.js'),'utf8'))(name=>{assert.equal(name,'./protocol-registry.js');return local;},compatibility,compatibility.exports);
  const input={...oldHeader,selectionContract:oldSelection.contract},before=JSON.stringify(input);
  assert.deepEqual(compatibility.exports.legacyFlatMetadata(input),oldFlat);
  assert.equal(JSON.stringify(input),before);
  assert.throws(()=>compatibility.exports.legacyFlatMetadata({...input,selectionContract:selection}),/exact flat schema/);
  assert.throws(()=>compatibility.exports.legacyFlatMetadata({...input,schemaFingerprint:'0'.repeat(64)}));
});
test('published Git originals roundtrip through stable headers without changing body/number lexemes',()=>{
  for(const [name,family,kind]of [['citation.json','researcher-sidecars','citation'],['rethink-context.json','paper-research-context','context']]){
    assert.deepEqual(projection.legacySidecarBytes(stable(original[name],family),kind),original[name]);
    assert.deepEqual(projection.legacySidecarBytes(original[name],kind),original[name]);
  }
});
test('prepare writes nothing; materialization preserves canonical bytes and produces exact original compatibility bytes',()=>fixture(({root,record,files,prefix})=>{
  const prepared=prepareLegacyOutputs(root,[record]);
  assert.equal(fs.existsSync(path.join(root,'data')),false);
  assert.equal(Object.hasOwn(prepared.records[0],'clientSidecars'),false);
  assert.equal(prepared.records[0].citation.contract,'paper-citation-source-v1');
  prepared.materialize();
  for(const name of names){assert.deepEqual(fs.readFileSync(path.join(root,prefix,name)),files[name]);assert.deepEqual(fs.readFileSync(path.join(root,'data/papers/2026-11-02/2610-41381',name)),original[name]);}
}));
test('wrong SHA, source identity, mixed roots, unknown header and forged schema cannot produce aliases',()=>{
  for(const mutate of [
    ({record})=>{record.clientSidecars['citation.json'].sha256='0'.repeat(64);},
    ({record})=>{record.citation.paperKey='arxiv:2610.00001';},
    ({record})=>{record.citation.verified=false;},
    ({record})=>{record.clientSidecars['citation.ris'].url=record.clientSidecars['citation.ris'].url.replace('2610-41381','2610-00001');},
    ({root,record,prefix})=>{const file=path.join(root,prefix,'citation.json'),value=JSON.parse(fs.readFileSync(file));value.schemaFingerprint='0'.repeat(64);const bytes=Buffer.from(JSON.stringify(value));fs.writeFileSync(file,bytes);record.clientSidecars['citation.json'].sha256=sha(bytes);},
    ({record})=>{record.clientSidecars['citation.bib'].url='/audio-paper-digest-blog/client/papers/2026-11-02/../citation.bib';}
  ])fixture(state=>{mutate(state);assert.throws(()=>prepareLegacyOutputs(state.root,[state.record]));assert.equal(fs.existsSync(path.join(state.root,'data')),false);});
});
test('existing bibliography aliases update only from their actual prior citation bytes',()=>fixture(({root,record,files,prefix})=>{
  const oldRoot=path.join(root,'data/papers/2026-11-02/2610-41381');fs.mkdirSync(oldRoot,{recursive:true});
  for(const name of names)fs.writeFileSync(path.join(oldRoot,name),original[name]);
  // Explicitly synthetic metadata correction. Original Git buffers and every
  // other context byte, including floating-point number lexemes, stay intact.
  const oldAuthor=JSON.parse(files['citation.json']).authors[0].name;
  const needle='"name": '+JSON.stringify(oldAuthor),replacement='"name": '+JSON.stringify(oldAuthor+' (synthetic revision)');
  for(const name of ['citation.json','rethink-context.json']){
    const text=files[name].toString('utf8');assert.ok(text.includes(needle));files[name]=Buffer.from(text.replace(needle,replacement));
  }
  Object.assign(files,bibliographyBytes(JSON.parse(files['citation.json']),'arxiv'));
  for(const name of names){fs.writeFileSync(path.join(root,prefix,name),files[name]);record.clientSidecars[name].sha256=sha(files[name]);}
  const prepared=prepareLegacyOutputs(root,[record]);
  for(const name of names)assert.deepEqual(fs.readFileSync(path.join(oldRoot,name)),original[name],'prepare cannot modify old aliases');
  prepared.materialize();
  for(const name of ['citation.bib','citation.ris'])assert.deepEqual(fs.readFileSync(path.join(oldRoot,name)),files[name]);
  for(const name of names)assert.deepEqual(fs.readFileSync(path.join(root,prefix,name)),files[name],'canonical sources remain original inputs');
  assert.ok(fs.readFileSync(path.join(oldRoot,'rethink-context.json')).includes(Buffer.from(replacement)));
}));
test('matching self-reported SHA cannot authorize unrelated canonical bibliography or occupied aliases',()=>{
  fixture(({root,record,prefix})=>{
    const file=path.join(root,prefix,'citation.bib'),bad=Buffer.from('@misc{foreign, title={Another paper}}\n');
    fs.writeFileSync(file,bad);record.clientSidecars['citation.bib'].sha256=sha(bad);
    assert.throws(()=>prepareLegacyOutputs(root,[record]),/Canonical bibliography/);
    assert.equal(fs.existsSync(path.join(root,'data')),false);
  });
  fixture(({root,record})=>{
    const oldRoot=path.join(root,'data/papers/2026-11-02/2610-41381');fs.mkdirSync(oldRoot,{recursive:true});
    fs.writeFileSync(path.join(oldRoot,'citation.json'),original['citation.json']);
    const occupied=Buffer.from('@misc{unrelated}\n');fs.writeFileSync(path.join(oldRoot,'citation.bib'),occupied);
    assert.throws(()=>prepareLegacyOutputs(root,[record]),/actual original citation/);
    assert.deepEqual(fs.readFileSync(path.join(oldRoot,'citation.bib')),occupied);
    assert.equal(fs.existsSync(path.join(oldRoot,'citation.ris')),false);
  });
});
test('source/target CAS and symbolic-link failures stop before any compatibility output',()=>{
  fixture(({root,record,prefix})=>{const prepared=prepareLegacyOutputs(root,[record]);fs.appendFileSync(path.join(root,prefix,'citation.ris'),'changed');assert.throws(()=>prepared.materialize(),/source changed/);assert.equal(fs.existsSync(path.join(root,'data')),false);});
  fixture(({root,record})=>{const prepared=prepareLegacyOutputs(root,[record]);const target=path.join(root,'data/papers/2026-11-02/2610-41381/citation.json');fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,'occupied');assert.throws(()=>prepared.materialize(),/target changed/);assert.equal(fs.existsSync(path.join(path.dirname(target),'citation.bib')),false);});
  fixture(({root,record})=>{fs.symlinkSync(path.join(root,'client'),path.join(root,'data'));assert.throws(()=>prepareLegacyOutputs(root,[record]),/real directory/);});
});
test('unknown sidecar contracts cannot be projected into a recognized format',()=>{
  assert.throws(()=>projection.legacySidecar({contract:'researcher-sidecars-v999'},'citation'));
  assert.throws(()=>projection.legacyIndexRecord({citation:{contract:'paper-citation-source',schemaFingerprint:'0'.repeat(64)}}));
});
