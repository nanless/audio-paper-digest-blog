'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os');
const {execFileSync}=require('node:child_process');
const repo=path.resolve(__dirname,'..'),baseline=process.env.BLOG_REPO||repo;
const htmlText=value=>value.replace(/<[^>]*>/g,'').replace(/&#34;/g,'"').replace(/&#39;/g,"'").replace(/&#43;/g,'+').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
test('verified actual version warnings render exact HTTPS anchors and retain text; quotes and hostile HTML remain escaped',t=>{
  const actual=JSON.parse(fs.readFileSync(path.join(baseline,'data/identity-history.json'))).records;
  const cases={};
  for(const[id,paperId]of [['claricodec','arxiv:2604.14654'],['first-special','arxiv:2605.12987'],['second-special','arxiv:2606.01009']]){
    const record=Object.values(actual).find(r=>r.paperId===paperId);assert.ok(record,'actual warning source '+paperId);
    cases[id]=record.source.sourceVersionWarning||record.source.sourceVersion.warning;
  }
  Object.assign(cases,{
    'quotes-and-html':'提示 "<script>alert(1)</script>" <img src=x onerror=alert(1)> https://example.test/p?a=1&b=2。',
    'quoted-url':'引用 “https://example.test/paper.pdf”，仍是普通提示。',
    'repeated-url':'https://example.test/p.pdf 与 https://example.test/p.pdf。',
    'prefix-rejected':'javascript:https://example.test/a nothttps://example.test/b HTTP://example.test/c',
    'invalid-userinfo':'https://evil@host.test/a',
    'invalid-port':'https://example.test:99999/a',
    'invalid-percent':'https://example.test/%ZZ',
    'hostile-quote':'https://example.test/a" onclick="alert(1) <svg onload=alert(2)>',
  });
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'https-text-test-'));t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  for(const dir of ['data','layouts/partials'])fs.mkdirSync(path.join(root,dir),{recursive:true});
  fs.copyFileSync(path.join(repo,'layouts/partials/render_https_text.html'),path.join(root,'layouts/partials/render_https_text.html'));
  fs.writeFileSync(path.join(root,'data/cases.json'),JSON.stringify(cases));
  fs.writeFileSync(path.join(root,'hugo.yaml'),'baseURL: https://example.test/\ndisableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\n');
  fs.writeFileSync(path.join(root,'layouts/index.html'),'{{ range $key,$text := hugo.Data.cases }}<p id="{{ $key }}">{{ partial "render_https_text.html" $text }}</p>{{ end }}');
  execFileSync('hugo',['--source',root,'--noBuildLock','--panicOnWarning'],{stdio:'pipe',env:{...process.env,GOMAXPROCS:'2',HUGO_NUMWORKERMULTIPLIER:'1'}});
  const html=fs.readFileSync(path.join(root,'public/index.html'),'utf8');
  const fragment=id=>(html.match(new RegExp('<p id="'+id+'">([\\s\\S]*?)</p>'))||[])[1];
  for(const[id,text]of Object.entries(cases))assert.equal(htmlText(fragment(id)),text,id+' DOM text preserved');
  assert.equal((fragment('claricodec').match(/<a /g)||[]).length,2);
  for(const[id,pdf]of [['first-special','https://arxiv.org/pdf/2605.12987.pdf'],['second-special','https://arxiv.org/pdf/2606.01009.pdf']])assert.ok(fragment(id).includes('href="'+pdf+'"'));
  assert.ok(fragment('claricodec').includes('href="https://arxiv.org/pdf/2604.14654v1"'));
  assert.equal((fragment('repeated-url').match(/<a /g)||[]).length,2);
  assert.ok(fragment('quotes-and-html').includes('href="https://example.test/p?a=1&amp;b=2"'));
  for(const id of ['prefix-rejected','invalid-userinfo','invalid-port','invalid-percent'])assert.ok(!fragment(id).includes('<a '),id+' invalid URL stays text');
  assert.ok(!/<script|<img|<svg|<a[^>]*\s(?:onclick|onload|onerror)=/.test(html));
  assert.ok(fragment('hostile-quote').includes('&#34; onclick=&#34;alert(1)'));
});

test('actual verified page notes link the three sealed sources while citation warning bytes remain unchanged',t=>{
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'https-verified-page-test-'));t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  for(const dir of ['content/posts','data','layouts/_default'])fs.mkdirSync(path.join(root,dir),{recursive:true});
  fs.cpSync(path.join(baseline,'layouts/partials'),path.join(root,'layouts/partials'),{recursive:true});
  for(const name of ['render_https_text','paper_taxonomy'])fs.copyFileSync(path.join(repo,'layouts/partials',name+'.html'),path.join(root,'layouts/partials',name+'.html'));
  for(const name of ['taxonomy-registry','taxonomy-catalog','taxonomy-history','identity-history'])fs.copyFileSync(path.join(baseline,'data',name+'.json'),path.join(root,'data',name+'.json'));
  const history=JSON.parse(fs.readFileSync(path.join(baseline,'data/identity-history.json'))).records;
  const chosen=['arxiv:2604.14654','arxiv:2605.12987','arxiv:2606.01009'].map(id=>Object.entries(history).find(([,r])=>r.paperId===id));
  assert.equal(new Set(chosen.map(([,r])=>r.paperId)).size,3);
  for(const[key]of chosen)fs.copyFileSync(path.join(baseline,key),path.join(root,key));
  fs.writeFileSync(path.join(root,'hugo.yaml'),'baseURL: https://example.test/\nbuildFuture: true\ndisableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\n');
  fs.writeFileSync(path.join(root,'layouts/index.html'),'{{ $items := newScratch }}{{ $items.Set "items" dict }}{{ range .Site.RegularPages }}{{ $citation := partial "citation_source.html" . }}{{ $items.SetInMap "items" $citation.paperId $citation }}{{ end }}{{ $items.Get "items" | jsonify }}');
  fs.writeFileSync(path.join(root,'layouts/_default/single.html'),'{{ partial "paper_taxonomy.html" . }}');
  execFileSync('hugo',['--source',root,'--noBuildLock','--panicOnWarning'],{stdio:'pipe',env:{...process.env,GOMAXPROCS:'2',HUGO_NUMWORKERMULTIPLIER:'1'}});
  const citations=JSON.parse(fs.readFileSync(path.join(root,'public/index.html')));
  for(const[key,record]of chosen){
    const expected=record.source.sourceVersionWarning||record.source.sourceVersion.warning;
    const html=fs.readFileSync(path.join(root,'public/posts',path.basename(key,'.md'),'index.html'),'utf8');
    const note=[...html.matchAll(/<p class="taxonomy-note">([\s\S]*?)<\/p>/g)].map(m=>m[1]).find(part=>htmlText(part)===expected);
    assert.ok(note,'visible exact warning '+record.paperId);assert.equal(citations[record.paperId].sourceVersionWarning,expected,'underlying export citation bytes unchanged');
    for(const url of expected.match(/https:\/\/[^\s（）]+/g)||[])assert.ok(note.includes('href="'+url+'"'),'actual linked source '+url);
  }
});
