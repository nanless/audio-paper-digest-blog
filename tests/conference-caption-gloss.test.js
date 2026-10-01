'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const crypto = require('node:crypto');
const {spawnSync} = require('node:child_process');
const {test} = require('node:test');
const root = path.resolve(__dirname, '..');
const policy = JSON.parse(fs.readFileSync(path.join(root, 'data/conference_caption_gloss.json'), 'utf8'));
const key = 'posts/conference-interspeech-2026-conference-paper-id-du26b-interspeech-88dce59ff6.md';
const source = fs.readFileSync(path.join(root, 'content', key), 'utf8');
const caption = policy.pages[key].renderedCaptionHTML;
const anchor = '<a href="%E2%80%98beat%E2%80%99">ph5P</a>';
const literal = '[ph5P](‘beat’)';
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const copyPolicy = () => JSON.parse(JSON.stringify(policy));
function render({relative=key, markdown=source, data=policy, incoming=null}={}) {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'caption-gloss-hugo-'));
  try {
    for (const dir of ['data', 'layouts/partials', 'layouts/_default', path.dirname('content/'+relative)]) fs.mkdirSync(path.join(temp, dir), {recursive:true});
    fs.writeFileSync(path.join(temp, 'hugo.yaml'), 'baseURL: https://example.invalid/\ndisableKinds: [home, taxonomy, term, RSS, sitemap]\n');
    fs.writeFileSync(path.join(temp, 'data/conference_caption_gloss.json'), JSON.stringify(data));
    if (incoming !== null) fs.writeFileSync(path.join(temp, 'data/incoming.json'), JSON.stringify({html:incoming}));
    fs.copyFileSync(path.join(root, 'layouts/partials/conference_caption_gloss.html'), path.join(temp, 'layouts/partials/conference_caption_gloss.html'));
    fs.writeFileSync(path.join(temp, 'layouts/_default/single.html'), '{{ $html := .Content }}{{ with hugo.Data.incoming }}{{ $html = .html }}{{ end }}{{ dict "original" $html "displayed" (partial "conference_caption_gloss.html" (dict "page" . "content" $html)) "rawSHA" (crypto.SHA256 .RawContent) | jsonify }}');
    fs.writeFileSync(path.join(temp, 'content', relative), markdown);
    const result = spawnSync('hugo', ['--source',temp,'--quiet'], {encoding:'utf8',timeout:30000});
    assert.equal(result.status,0,result.stderr || String(result.error));
    return JSON.parse(fs.readFileSync(path.join(temp,'public',relative.replace(/\.md$/,''),'index.html'),'utf8'));
  } finally { fs.rmSync(temp,{recursive:true,force:true}); }
}
test('real committed caption changes exactly one false anchor; all other HTML remains byte identical', () => {
  const {original,displayed,rawSHA} = render();
  assert.equal(hash(source),'0b4805ab43bc319651515685216d6fd74fb36fe975a0d8bdc1240ce17b1143e3');
  assert.equal(rawSHA,'aeffd8951fec2a9dfc115239ea06d57150740def25b7f55b2a45e240efbc6908');
  assert.equal(displayed,original.replace(caption,caption.replace(anchor,literal)));
  assert.ok(displayed.includes(caption.replace(anchor,literal)));
  assert.deepEqual(displayed.match(/<img\b[^>]*>/g),original.match(/<img\b[^>]*>/g));
  assert.deepEqual(displayed.match(/<a\b[^>]*>[\s\S]*?<\/a>/g),original.replace(anchor,literal).match(/<a\b[^>]*>[\s\S]*?<\/a>/g));
});
for (const [name,relative,markdown] of [
  ['other page','posts/other.md',source],
  ['body drift',key,source+'\nChanged.\n'],
  ['frontmatter drift',key,source.replace('date: 2026-09-25','date: 2026-09-26')],
  ['quoted caption',key,source.replace('*论文图 2。','> *论文图 2。')],
  ['inline code',key,source.replace('[ph5P](‘beat’)','`[ph5P](‘beat’)`')],
  ['math caption',key,source.replace('[ph5P](‘beat’)','$[ph5P](‘beat’)$')],
  ['different gloss',key,source.replace('[ph5P](‘beat’)','[ph5P](‘beet’)')],
  ['image alt change',key,source.replace('原论文 Figure 2：','Changed Figure 2：')],
]) test(`fail closed: ${name}`,()=>{const r=render({relative,markdown});assert.equal(r.displayed,r.original);});
for (const [name,change] of [
  ['wrong raw SHA',d=>{d.pages[key].rawContentSha256='0'.repeat(64);}],
  ['wrong full SHA',d=>{d.pages[key].committedFileSha256='0'.repeat(64);}],
  ['unknown contract',d=>{d.contract='unknown';}],
  ['extra page',d=>{d.pages['posts/other.md']=d.pages[key];}],
  ['different paragraph',d=>{d.pages[key].renderedCaptionHTML=caption.replace('τ/2','τ/3');}],
]) test(`fail closed policy: ${name}`,()=>{const d=copyPolicy();change(d);const r=render({data:d});assert.equal(r.displayed,r.original);});
for (const [name,incoming] of [
  ['duplicate caption',caption+caption],
  ['escaped code','<pre><code>'+caption.replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</code></pre>'],
  ['non-em wrapper',caption.replace('<em>','<strong>').replace('</em>','</strong>')],
  ['different HTML anchor',caption.replace('%E2%80%98beat%E2%80%99','https://example.org/beat')],
]) test(`exact paragraph guard: ${name}`,()=>{const r=render({incoming});assert.equal(r.displayed,r.original);});
test('public provenance has only public locators and SHA evidence, no private runtime paths',()=>{
  const text=JSON.stringify(policy);assert.ok(!/\/Users\/|\/private\/|data\/runtime|francis7999/.test(text));
  const s=policy.pages[key].sourceEvidence;assert.equal(s.figureOrdinal,2);assert.match(s.sourceArtifactSha256,/^[0-9a-f]{64}$/);assert.match(s.sourceCaptionSha256,/^[0-9a-f]{64}$/);
  assert.equal(s.officialSourceUrl,'https://www.isca-archive.org/interspeech_2026/du26b_interspeech.pdf');assert.ok(source.includes(s.officialImageUrl));
});
