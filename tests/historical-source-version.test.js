'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const {execFileSync} = require('node:child_process');
const repo = process.env.BLOG_REPO || path.resolve(__dirname, '..');
const draft = path.resolve(__dirname, '..');
const hash = text => crypto.createHash('sha256').update(text).digest('hex');
const canonical = value => Array.isArray(value) ? value.map(canonical) : value && typeof value === 'object'
  ? Object.fromEntries(Object.keys(value).sort().map(k=>[k,canonical(value[k])])) : value;
function reseal(record) {
  if (record.source.sourceVersion) {
    const version = {...record.source.sourceVersion}; delete version.identitySha256;
    record.source.sourceVersion.identitySha256 = hash(JSON.stringify(canonical(version)));
  }
  if (record.sourceProofSha256) record.sourceProofSha256 = hash(JSON.stringify(canonical(record.source)));
  const body={...record};delete body.proofSha256;record.proofSha256=hash(JSON.stringify(canonical(body)));
}
test('actual signed historical fallback is replayed in both identity and canonical classification, semantic tampering fails even when re-signed', t => {
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'historical-version-fixture-'));
  t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  for (const dir of ['content/posts','data','layouts/_default']) fs.mkdirSync(path.join(root,dir),{recursive:true});
  fs.cpSync(path.join(draft,'layouts/partials'),path.join(root,'layouts/partials'),{recursive:true});
  fs.copyFileSync(path.join(draft,'layouts/_default/index.json'),path.join(root,'layouts/_default/index.json'));
  fs.writeFileSync(path.join(root,'layouts/index.html'),'{{ partial "taxonomy_concept_counts.html" . | jsonify }}');
  fs.writeFileSync(path.join(root,'layouts/_default/single.html'),'{{ partial "paper_taxonomy.html" . }}');
  fs.writeFileSync(path.join(root,'hugo.yaml'),'baseURL: https://example.test/\nbuildFuture: true\ndisableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\noutputs:\n  home: [HTML, JSON]\n');
  for(const file of ['taxonomy-registry.json','taxonomy-catalog.json'])fs.copyFileSync(path.join(repo,'data',file),path.join(root,'data',file));
  const histories=Object.fromEntries(['identity-history','taxonomy-history'].map(name=>[name,JSON.parse(fs.readFileSync(path.join(repo,'data',name+'.json')))]));
  const all=Object.fromEntries(Object.entries(histories).map(([name,history])=>[name,{...history,records:{}}]));
  const sourcePath='content/posts/2026-04-19-claricodec-optimising-neural-speech-codes-for.md';
  const currentPath='content/posts/2026-04-19-x-vc-zero-shot-streaming-voice-conversion-in.md';
  const variants=[['valid',()=>{}],['string-version',s=>{s.sourceVersion.version='1';}],['malformed-selected',s=>{s.sourceVersion.selectedSourceId=[];}],['current-available',s=>{s.sourceVersion.currentPdfAvailable=true;}],['status200',s=>{s.sourceVersion.attemptedCurrentPdfStatus=200;}],
    ['foreign-selection',s=>{s.sourceVersion.selectedSourceId='2604.99999v1';s.sourceVersion.selectedPdfUrl='https://arxiv.org/pdf/2604.99999v1';}],
    ['extra-schema',s=>{s.sourceVersion.unverifiedOverride=true;}],['source-hash-mismatch',s=>{s.sourceBinding.pdfSha256=hash('wrong');}],
    ['wrong-warning',s=>{s.sourceVersion.warning='当前稿已认证有效';}],['current-source',()=>{}]];
  for(const [name,mutate]of variants){
    const key='content/posts/'+name+'.md',origin=name==='current-source'?currentPath:sourcePath;
    fs.copyFileSync(path.join(repo,origin),path.join(root,key));
    for(const [historyName,history]of Object.entries(histories)){
      const record=structuredClone(history.records[origin]);assert.ok(record,historyName+' actual source exists');
      record.pageKey='page:'+hash(key);mutate(record.source);reseal(record);all[historyName].records[key]=record;
    }
  }
  for(const[name,history]of Object.entries(all))fs.writeFileSync(path.join(root,'data',name+'.json'),JSON.stringify(history));
  execFileSync('hugo',['--source',root,'--noBuildLock','--panicOnWarning'],{stdio:'pipe',env:{...process.env,GOMAXPROCS:'2',HUGO_NUMWORKERMULTIPLIER:'1'}});
  const records=JSON.parse(fs.readFileSync(path.join(root,'public/index.json')));
  const get=name=>records.find(r=>r.permalink.includes('/'+name+'/'));
  const expected=histories['identity-history'].records[sourcePath].source.sourceVersion.warning;
  const valid=get('valid');assert.equal(valid.identityStatus,'verified');assert.ok(valid.identityEvidenceContract&&valid.taxonomyEvidenceContract);
  assert.equal(valid.citation.pdfUrl,'https://arxiv.org/pdf/2604.14654v1');assert.equal(valid.citation.sourceVersionWarning,expected);
  assert.match(fs.readFileSync(path.join(root,'public/posts/valid/index.html'),'utf8'),/当前无版本 PDF.*HTTP 404.*不得暗示当前稿仍有效/);
  for(const[name]of variants.filter(([name])=>!['valid','current-source'].includes(name))){
    const entry=get(name);assert.ok(!entry.identityEvidenceContract&&!entry.taxonomyEvidenceContract,name+' rejects both re-signed proofs');
    assert.equal(entry.citation.sourceVersionWarning,undefined,name+' no warning from rejected proof');
    assert.doesNotMatch(fs.readFileSync(path.join(root,'public/posts',name,'index.html'),'utf8'),/当前无版本 PDF|当前稿已认证有效/);
  }
  const current=get('current-source');assert.ok(current.identityEvidenceContract&&current.taxonomyEvidenceContract);
  assert.equal(current.citation.sourceVersionWarning,undefined);assert.doesNotMatch(fs.readFileSync(path.join(root,'public/posts/current-source/index.html'),'utf8'),/当前无版本 PDF/);
});
