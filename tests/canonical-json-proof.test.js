'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os'),{execFileSync}=require('node:child_process');
const repo=process.env.BLOG_REPO||path.resolve(__dirname,'..');
const overrides=process.env.CANONICAL_JSON_PARTIALS||path.join(repo,'layouts/partials');
const api=require(path.join(repo,'scripts/lib/tag-v2-proof'));
const ordinary=JSON.parse(fs.readFileSync(path.join(repo,'data/taxonomy-history-v2.json'))).records;
const controlled=JSON.parse(fs.readFileSync(path.join(repo,'data/current-page-taxonomy-history-v2.json'))).records;
const catalog=JSON.parse(fs.readFileSync(path.join(repo,'data/taxonomy-catalog.json')));
function fixture(t){const d=fs.mkdtempSync(path.join(os.tmpdir(),'canonical-json-proof-'));t.after(()=>fs.rmSync(d,{recursive:true,force:true}));fs.mkdirSync(path.join(d,'data'));fs.mkdirSync(path.join(d,'layouts'));fs.cpSync(path.join(repo,'layouts/partials'),path.join(d,'layouts/partials'),{recursive:true});
 for(const n of ['research_canonical_json.html','tag_classification_v2_proof.html','tag_page_proof.html'])fs.copyFileSync(path.join(overrides,n),path.join(d,'layouts/partials',n));
 for(const n of ['taxonomy-catalog','taxonomy-registry'])fs.copyFileSync(path.join(repo,'data',n+'.json'),path.join(d,'data',n+'.json'));fs.writeFileSync(path.join(d,'hugo.yaml'),'baseURL: https://example.test/\ndisableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\n');return d;}
function build(d,template){fs.writeFileSync(path.join(d,'layouts/index.html'),template);execFileSync('hugo',['--source',d,'--noBuildLock','--panicOnWarning'],{stdio:'pipe',env:{...process.env,GOMAXPROCS:'2',HUGO_NUMWORKERMULTIPLIER:'1'}});return JSON.parse(fs.readFileSync(path.join(d,'public/index.html')));}
test('canonical proof JSON preserves real separators, literal escapes and every tested backslash parity',t=>{
 const d=fixture(t),values=[];
 for(const code of [0x2028,0x2029])for(let parity=0;parity<=8;parity++){
  values.push({name:code+' real slash parity '+parity,value:{quote:'before'+'\\'.repeat(parity)+String.fromCodePoint(code)+'after'}});
  values.push({name:code+' literal slash parity '+parity,value:{quote:'before'+'\\'.repeat(parity)+'\\u'+code.toString(16)+'after'}});
 }
 values.push({name:'adjacent mixed separators',value:{quote:'\u2028\u2029\u2028\u2029'}});
 values.push({name:'escaped NUL does not collide with sentinel',value:{quote:'a\u0000b\\u0000\u2028\u2029'}});
 values.push({name:'ordinary escapes and HTML characters preserved',value:{a:['"','\\','\n','\r','\t','<>&'],nested:{z:false,a:null}}});
 fs.writeFileSync(path.join(d,'data/cases.json'),JSON.stringify(values));const result=build(d,'[{{ range $i,$c := hugo.Data.cases }}{{ if $i }},{{ end }}{{ $json := partial "research_canonical_json.html" $c.value }}{{ dict "name" $c.name "json" $json "sha256" (crypto.SHA256 $json) | jsonify (dict "noHTMLEscape" true) | safeHTML }}{{ end }}]');
 assert.equal(result.length,values.length);result.forEach((r,i)=>{assert.equal(r.json,JSON.stringify(api.canonical(values[i].value)),r.name);assert.equal(r.sha256,api.stableHash(values[i].value),r.name);});
 // Real U+2028/U+2029 must remain distinct from textual backslash-u escapes.
 for(let i=0;i<36;i+=2)assert.notEqual(result[i].sha256,result[i+1].sha256);
});
test('all actual generic and controlled records replay unchanged; rehashed source and evidence drift still reject',t=>{
 const d=fixture(t),rows=[...Object.values(ordinary).map(record=>({name:record.paperId,record,controlled:false,expected:true})),...Object.values(controlled).map(record=>({name:record.paperId,record,controlled:true,expected:true}))];
 const real=Object.values(ordinary).find(r=>r.paperId==='conference:icassp:2026:icassp-arnumber:11461756');assert.ok(real,'actual separator record required');assert.equal(api.validatePublicRecord(real,catalog.snapshots.find(s=>s.registrySha256===real.registrySha256)),true);
 const seal=r=>{const c=r.classificationRecord;c.proofSha256=api.stableHash(Object.fromEntries(Object.entries(c).filter(([k])=>k!=='proofSha256')));r.classificationProofSha256=c.proofSha256;r.classificationRecordSha256=api.stableHash(c);r.proofSha256=api.stableHash(Object.fromEntries(Object.entries(r).filter(([k])=>k!=='proofSha256')));};
 const sourceBad=structuredClone(real);sourceBad.source.sourceId='conference:icassp:2026:icassp-arnumber:99999999';seal(sourceBad);rows.push({name:'rehashed source descriptor changed',record:sourceBad,controlled:false,expected:false});
 const quoteBad=structuredClone(real),e=quoteBad.classificationRecord.concepts.find(x=>x.quote.includes('\u2028'));assert.ok(e);e.quote=e.quote.replace(/\u2028/g,'\\u2028');e.quoteSha256=require('node:crypto').createHash('sha256').update(e.quote).digest('hex');seal(quoteBad);rows.push({name:'rehashed quote separator changed to literal escape',record:quoteBad,controlled:false,expected:false});
 const rawBad=structuredClone(real);rawBad.classificationRecord.responseText=rawBad.classificationRecord.responseText.replace(/\u2028/g,'\\u2028');seal(rawBad);rows.push({name:'rehashed injected response original bytes changed',record:rawBad,controlled:false,expected:false});
 for(const r of rows.slice(-3))assert.throws(()=>api.validatePublicRecord(r.record,catalog.snapshots.find(s=>s.registrySha256===r.record.registrySha256)),r.name);
 fs.writeFileSync(path.join(d,'data/cases.json'),JSON.stringify(rows));const result=build(d,'[{{ range $i,$c := hugo.Data.cases }}{{ if $i }},{{ end }}{{ $accepted := false }}{{ if $c.controlled }}{{ $accepted = partial "tag_current_page_v2_proof.html" $c.record }}{{ else }}{{ $accepted = partial "tag_source_only_v2_proof.html" $c.record }}{{ end }}{{ dict "name" $c.name "accepted" $accepted | jsonify | safeHTML }}{{ end }}]');assert.equal(result.length,rows.length);result.forEach((r,i)=>assert.equal(r.accepted,rows[i].expected,r.name));
});
test('actual page wrapper closes unchanged full/body bytes with separator-bearing v2 proof',t=>{
 const d=fixture(t),entry=Object.entries(ordinary).find(([,r])=>r.paperId==='conference:icassp:2026:icassp-arnumber:11461756');assert.ok(entry);const[key,r]=entry;fs.mkdirSync(path.join(d,'layouts/_default'));fs.writeFileSync(path.join(d,'layouts/_default/single.html'),'{{ .Content }}');fs.mkdirSync(path.join(d,'content/posts'),{recursive:true});fs.copyFileSync(path.join(repo,key),path.join(d,key));fs.writeFileSync(path.join(d,'data/taxonomy-history-v2.json'),JSON.stringify({contract:'historical-source-taxonomy-supplement-v2',records:{[key]:r}}));
 const result=build(d,'{{ $p := index site.RegularPages 0 }}{{ $proof := partial "tag_page_proof.html" $p }}{{ dict "paperId" $proof.paperId "classificationContract" $proof.classificationContract "proofSha256" $proof.proofSha256 | jsonify | safeHTML }}');assert.equal(result.paperId,r.paperId);assert.equal(result.classificationContract,r.classificationContract);assert.equal(result.proofSha256,r.proofSha256);
});
