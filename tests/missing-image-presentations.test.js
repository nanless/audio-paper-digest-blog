'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os'),crypto=require('node:crypto');
const {spawnSync}=require('node:child_process');
const root=path.resolve(__dirname,'..'),policy=JSON.parse(fs.readFileSync(path.join(root,'data/missing_image_presentations.json'))),hash=s=>crypto.createHash('sha256').update(s).digest('hex');
const sample='posts/icassp2026-task-078.md',copy=()=>JSON.parse(JSON.stringify(policy));
function render(data=policy,{mutate=null,incoming=null,relative=sample}={}){
 const temp=fs.mkdtempSync(path.join(os.tmpdir(),'missing-image-hugo-'));
 try{
  fs.cpSync(path.join(root,'data'),path.join(temp,'data'),{recursive:true});fs.writeFileSync(path.join(temp,'data/missing_image_presentations.json'),JSON.stringify(data));
  fs.cpSync(path.join(root,'layouts/partials'),path.join(temp,'layouts/partials'),{recursive:true});fs.mkdirSync(path.join(temp,'layouts/_default/_markup'),{recursive:true});fs.copyFileSync(path.join(root,'layouts/_default/_markup/render-image.html'),path.join(temp,'layouts/_default/_markup/render-image.html'));
  const files=new Set(Object.keys(policy.pages));for(const p of Object.values(policy.pages))for(const r of p.occurrences)if(r.source)files.add(r.source.pagePath);
  for(const f of files){const dest=path.join(temp,'content',f);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.copyFileSync(path.join(root,'content',f),dest);}
  if(mutate)mutate(temp);
  if(incoming!==null)fs.writeFileSync(path.join(temp,'data/incoming.json'),JSON.stringify({html:incoming,page:relative}));
  fs.writeFileSync(path.join(temp,'layouts/_default/single.html'),'{{ $html := .Content }}{{ with hugo.Data.incoming }}{{ if eq .page $.File.Path }}{{ $html = .html }}{{ end }}{{ end }}{{ dict "original" $html "displayed" (partial "missing_image_presentations.html" (dict "page" . "content" $html)) "raw" $.RawContent | jsonify }}');
  const config=fs.readFileSync(path.join(root,'hugo.yaml'),'utf8').replace('theme: "PaperMod"','').replace('enableGitInfo: true','enableGitInfo: false');fs.writeFileSync(path.join(temp,'hugo.yaml'),config+'\ndisableKinds: [home, section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\n');
  const result=spawnSync('hugo',['--source',temp,'--quiet'],{encoding:'utf8',timeout:60000});assert.equal(result.status,0,result.stderr||String(result.error));
  const outputs={};for(const f of Object.keys(policy.pages))outputs[f]=JSON.parse(fs.readFileSync(path.join(temp,'public',f.replace(/\.md$/,''),'index.html')));return outputs;
 }finally{fs.rmSync(temp,{recursive:true,force:true});}
}
let baseline;
test('real 28-page/132-occurrence cohort becomes honest unavailable notices, never fabricated pixels',()=>{
 baseline=render();assert.equal(Object.keys(policy.pages).length,28);let total=0;
 for(const [f,p] of Object.entries(policy.pages)){const x=baseline[f];assert.equal(hash(x.raw),p.rawContentSha256);assert.equal((x.displayed.match(/class="image-unavailable-notice"/g)||[]).length,p.occurrences.length,f);assert.ok(!/<img\b[^>]*src="(?:pdf-image|placeholder_for_fig|%E6%AD%A4)/.test(x.displayed));
  let expected=x.original;for(const occurrence of p.occurrences){const start=expected.indexOf(occurrence.originalImageHTML);assert.ok(start>=0);const marker=x.displayed.match(/<span class="image-unavailable-notice"[\s\S]*?<\/span><a|<span class="image-unavailable-notice"[\s\S]*?<\/span> <a[^>]+>[^<]+<\/a><\/span>/g);assert.ok(marker);total++;}
  // All surrounding prose and neighboring real images remain exact.
  const strip=s=>s.replace(/<span class="image-unavailable-notice"[\s\S]*?<\/span> <a[^>]+>[^<]+<\/a><\/span>/g,'__UNAVAILABLE__');let old=x.original;for(const r of p.occurrences)old=old.replace(r.originalImageHTML,'__UNAVAILABLE__');assert.equal(strip(x.displayed),old,f);
 }assert.equal(total,132);
});
test('task078 repeated destination belongs to three different papers and keeps their official links distinct',()=>{
 const occurrences=policy.pages[sample].occurrences.filter(r=>r.destination==='pdf-image-page2-idx0');assert.equal(occurrences.length,3);assert.equal(new Set(occurrences.map(r=>r.source.paperId)).size,3);assert.equal(new Set(occurrences.map(r=>r.source.sourceUrl)).size,3);const x=(baseline||render())[sample];for(const r of occurrences)assert.ok(x.displayed.includes('href="'+r.source.sourceUrl+'"'));
});
test('another real verified paper with the same image token cannot replace the exact section association',()=>{const d=copy(),same=d.pages[sample].occurrences.filter(r=>r.destination==='pdf-image-page2-idx0');same[0].source=JSON.parse(JSON.stringify(same[1].source));const x=render(d)[sample];assert.ok(x.displayed.includes(policy.pages[sample].occurrences[0].originalImageHTML));assert.equal((x.displayed.match(/class="image-unavailable-notice"/g)||[]).length,9);});
test('comments use the actual GraphQL repository and category IDs while preserving lazy unauthenticated loading',()=>{const html=fs.readFileSync(path.join(root,'layouts/partials/comments.html'),'utf8');assert.match(html,/data-repo="nanless\/audio-paper-digest-blog"/);assert.match(html,/data-repo-id="R_kgDOSF_Bzg"/);assert.match(html,/data-category-id="DIC_kwDOSF_Bzs4C8prG"/);assert.match(html,/data-loading="lazy"/);assert.ok(!html.includes('data-repo-id="1214235086"'));});
for(const [name,change] of [
 ['unknown contract',d=>{d.contract='unknown';}],['wrong full SHA',d=>{d.pages[sample].committedFileSha256='0'.repeat(64);}],['wrong raw SHA',d=>{d.pages[sample].rawContentSha256='0'.repeat(64);}],['wrong HTML SHA',d=>{d.pages[sample].contentSha256='0'.repeat(64);}],['wrong image count',d=>{d.pages[sample].imageCount++;}],
])test('whole-page fail closed: '+name,()=>{const d=copy();change(d);const x=render(d)[sample];assert.equal(x.displayed,x.original);});
for(const [name,change] of [
 ['wrong occurrence SHA',r=>{r.originalImageSha256='0'.repeat(64);}],['wrong occurrence URL',r=>{r.destination='pdf-image-page9-idx9';}],['wrong source URL',r=>{r.source.sourceUrl='https://ieeexplore.ieee.org/document/99999999';}],['wrong source PDF URL',r=>{r.source.pdfUrl='https://arxiv.org/pdf/9999.99999';}],['wrong source page SHA',r=>{r.source.committedFileSha256='0'.repeat(64);}],['wrong paper identity',r=>{r.source.paperId='conference:icassp:2026:icassp-arnumber:99999999';}],['unsafe alt',r=>{r.alt='<script>alert(1)</script>'; }],
])test('one occurrence fail closed without affecting neighbors: '+name,()=>{const d=copy(),r=d.pages[sample].occurrences[0];change(r);const x=render(d)[sample];assert.ok(x.displayed.includes(policy.pages[sample].occurrences[0].originalImageHTML));assert.equal((x.displayed.match(/class="image-unavailable-notice"/g)||[]).length,9);});
test('body drift/code/altered upstream image HTML never borrows a signed presentation policy',()=>{const html=(baseline||render())[sample].original;for(const incoming of [html+'<p>Changed.</p>',html.replace('<img ','<img data-new="1" '),'<pre><code>'+html.replace(/</g,'&lt;')+'</code></pre>']){const x=render(policy,{incoming})[sample];assert.equal(x.displayed,x.original);}});
test('public policy includes no private runtime paths and cannot promise a PDF for IEEE pages lacking one',()=>{const text=JSON.stringify(policy);assert.ok(!/\/Users\/|\/private\/|data\/runtime|francis7999/.test(text));const p=policy.pages[sample];assert.ok(p.occurrences.every(r=>r.source.pdfUrl===''));const x=(baseline||render())[sample];assert.ok(!x.displayed.includes('查看官方原论文 PDF'));assert.ok(x.displayed.includes('查看官方论文页'));});
