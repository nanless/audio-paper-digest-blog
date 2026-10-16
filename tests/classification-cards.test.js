'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
const repo = path.resolve(__dirname, '..');

test('classification cards replay full paths, hide siblings, and preserve malformed or untrusted blocks', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'classification-cards-'));
  t.after(() => fs.rmSync(root, {recursive:true, force:true}));
  for (const dir of ['content/posts', 'layouts/partials', 'layouts/_default', 'data']) fs.mkdirSync(path.join(root, dir), {recursive:true});
  for (const name of ['tag_hierarchy_tree', 'tag_hierarchy_cards', 'tag_hierarchy_block', 'reader_article_content', 'research_normalized_title']) {
    fs.copyFileSync(path.join(repo, 'layouts/partials', name+'.html'), path.join(root, 'layouts/partials', name+'.html'));
  }
  const catalog = JSON.parse(fs.readFileSync(path.join(repo, 'data/tag-catalog-snapshot.json')));
  fs.writeFileSync(path.join(root, 'data/catalog.json'), JSON.stringify(catalog));
  fs.writeFileSync(path.join(root, 'layouts/partials/tag_display_assets.html'), '{{ return (dict "snapshot" hugo.Data.catalog) }}');
  fs.writeFileSync(path.join(root, 'layouts/partials/tag_navigation_records.html'), '{{ return (slice (dict "id" "task.tts")) }}');
  fs.writeFileSync(path.join(root, 'hugo.yaml'), 'baseURL: https://example.test/audio-paper-digest-blog/\ndisableKinds: [home, taxonomy, term, RSS, sitemap]\nmarkup:\n  goldmark:\n    renderer:\n      unsafe: true\n');
  fs.writeFileSync(path.join(root, 'layouts/_default/single.html'), '{{ partial "reader_article_content.html" (dict "page" . "content" .Content) | safeHTML }}');
  const block = '<!--paper-tag-hierarchy-v1:start-->\n\n**研究分类**\n\n- **研究任务**：[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-paper-digest-blog/papers/?concept=task.tts)\n- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [扩散模型](/audio-paper-digest-blog/papers/?concept=method.diffusion)\n\n<!--paper-tag-hierarchy-v1:end-->\n';
  const cases = {
    valid: block,
    repeated: block+block,
    forged: block.replace('[文本到语音]', '[错误名称]'),
    ancestor: block.replace('[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis)', '[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)'),
    injected: block.replace('<!--paper-tag-hierarchy-v1:end-->', '额外科学结论。\n\n<!--paper-tag-hierarchy-v1:end-->'),
    malformed: block.replace('<!--paper-tag-hierarchy-v1:end-->', ''),
    offsite: block.replaceAll('/audio-paper-digest-blog/papers/', 'https://other.test/papers/'),
    code: '```html\n'+block+'\n```',
  };
  for (const [name, body] of Object.entries(cases)) fs.writeFileSync(path.join(root, 'content/posts', name+'.md'), '---\ntitle: Fixture\npaper_digest_page_type: index\n---\n'+body);
  fs.writeFileSync(path.join(root, 'content/posts/paper.md'), '---\ntitle: Fixture\npaper_digest_page_type: paper\n---\n'+block+'\n保留正文。');
  const result = spawnSync('hugo', ['--source', root, '--quiet'], {encoding:'utf8', timeout:30000});
  assert.equal(result.status, 0, result.stdout+result.stderr);
  const read = name => fs.readFileSync(path.join(root, 'public/posts', name, 'index.html'), 'utf8');
  const html = read('valid');
  assert.equal((html.match(/data-classification-presentation="hierarchy-cards-v1"/g)||[]).length, 1);
  assert.match(html, /data-classification-concept="task.speech-synthesis"/);
  assert.match(html, /data-classification-concept="task.tts" data-direct-classification="true"/);
  assert.doesNotMatch(html, /data-classification-concept="task.speech-synthesis" data-direct/);
  assert.doesNotMatch(html, /task.voice-cloning|method.autoregressive|研究条件/);
  assert.doesNotMatch(html, /<h[1-6]\b/, 'classification labels do not become extra reading chapters');
  assert.equal((read('repeated').match(/data-classification-presentation=/g)||[]).length, 2);
  for (const name of ['forged','ancestor','injected','malformed','offsite','code']) assert.doesNotMatch(read(name), /data-classification-presentation=/, name);
  assert.match(read('injected'), /额外科学结论/);
  assert.doesNotMatch(read('paper'), /研究分类/);
  assert.match(read('paper'), /保留正文/);
});
