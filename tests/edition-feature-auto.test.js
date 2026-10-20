'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { selectEditionFeature } = require('../scripts/select-edition-feature');
const root = path.resolve(__dirname, '..');
const paperName = '2026-10-20-df-palm-dynamic-fusion-prompt-learning-for-audio-2610-24921';
const tracked = file => execFileSync('git', ['show', 'HEAD:' + file], { cwd: root });
function fixture(t, mutate = () => {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'edition-auto-render-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  for (const relative of ['layouts/partials', 'layouts/_default', 'content/posts', 'data']) fs.mkdirSync(path.join(dir, relative), { recursive: true });
  for (const name of ['edition_feature_auto_data.html', 'edition_feature_data.html', 'edition_feature.html']) fs.copyFileSync(path.join(root, 'layouts/partials', name), path.join(dir, 'layouts/partials', name));
  fs.writeFileSync(path.join(dir, 'hugo.toml'), 'baseURL = "https://example.test/audio-paper-digest-blog/"\ntimeZone = "Asia/Shanghai"\nbuildFuture = true\ndisableKinds = ["taxonomy", "term", "RSS", "sitemap"]\n[markup.goldmark.renderer]\nunsafe = true\n');
  fs.writeFileSync(path.join(dir, 'layouts/index.html'), '{{ $daily := site.GetPage "/posts/2026-10-20/" }}<main><time datetime="2026-10-20">今日</time><a id="full-edition" href="{{ $daily.RelPermalink }}">阅读本期完整速递</a>{{ partial "edition_feature.html" (partial "edition_feature_data.html" $daily) }}</main>');
  fs.writeFileSync(path.join(dir, 'layouts/_default/single.html'), '{{ .Content }}');
  fs.writeFileSync(path.join(dir, 'layouts/_default/list.html'), '<main>{{ .Title }}</main>');
  fs.writeFileSync(path.join(dir, 'content/posts/2026-10-20.md'), tracked('content/posts/2026-10-20.md'));
  fs.writeFileSync(path.join(dir, `content/posts/${paperName}.md`), tracked(`content/posts/${paperName}.md`));
  mutate(dir);
  const manifest = selectEditionFeature(dir);
  assert.equal(manifest.selection.status, 'selected');
  fs.writeFileSync(path.join(dir, 'data/edition-features-auto.json'), JSON.stringify(manifest));
  return { dir, manifest, record: manifest.editions['2026-10-20'] };
}
function render(dir) {
  execFileSync('hugo', ['--source', dir, '--destination', path.join(dir, 'public'), '--noBuildLock', '--panicOnWarning'], { stdio: 'pipe' });
  return fs.readFileSync(path.join(dir, 'public/index.html'), 'utf8');
}
test('actual October 20 daily renders the selected DF-PALM method figure while retaining the full edition first', t => {
  const { dir, record } = fixture(t);
  assert.equal(record.arxivId, '2610.24921');
  assert.equal(record.figure, 'Fig. 2');
  const html = render(dir);
  assert.match(html, /data-automatic="true"/);
  assert.match(html, /data-edition-date="2026-10-20"/);
  assert.match(html, /本站评分 7\.9\/10/);
  assert.ok(html.includes('src="https://arxiv.org/html/2610.24921v1/photo/Flowchart_Asy_New.png"'));
  assert.ok(html.indexOf('id="full-edition"') < html.indexOf('class="edition-feature"'));
  assert.match(html, /查看完整原图/);
  assert.doesNotMatch(html, /width="0"|height="0"/);
});
test('root-relative membership, escaped original alt and uppercase official extensions survive real Hugo rendering', t => {
  const { dir, record } = fixture(t, dir => {
    const dailyFile = path.join(dir, 'content/posts/2026-10-20.md');
    fs.writeFileSync(dailyFile, fs.readFileSync(dailyFile, 'utf8').replaceAll('/audio-paper-digest-blog/posts/', '/posts/'));
    const paperFile = path.join(dir, `content/posts/${paperName}.md`);
    fs.writeFileSync(paperFile, fs.readFileSync(paperFile, 'utf8')
      .replace('原论文 Fig. 2：Overview', '原论文 Fig. 2：\\[Main\\] Overview')
      .replaceAll('Flowchart_Asy_New.png', 'Flowchart_Asy_New.PNG'));
  });
  assert.match(record.imageMarkdown, /\\\[Main\\\]/);
  const html = render(dir);
  assert.match(html, /data-automatic="true"/);
  assert.ok(html.includes('Flowchart_Asy_New.PNG'));
});
test('source, member and image drift after selection cannot silently render a stale automatic cover', t => {
  for (const kind of ['daily', 'paper', 'wrong-version', 'wrong-image-markdown']) {
    const { dir, manifest } = fixture(t);
    if (kind === 'daily' || kind === 'paper') {
      const file = path.join(dir, kind === 'daily' ? 'content/posts/2026-10-20.md' : `content/posts/${paperName}.md`);
      fs.appendFileSync(file, '\nchanged after selection\n');
    } else {
      const record = manifest.editions['2026-10-20'];
      if (kind === 'wrong-version') record.sourceImageUrl = record.sourceImageUrl.replace('v1/', 'v2/');
      else record.imageMarkdown = 'not an image';
      fs.writeFileSync(path.join(dir, 'data/edition-features-auto.json'), JSON.stringify(manifest));
    }
    const html = render(dir);
    assert.ok(!html.includes('data-automatic="true"'), kind);
    assert.match(html, /id="full-edition"/);
  }
});
test('root-relative local original image uses the site prefix without changing the article', t => {
  const selected = JSON.parse(fs.readFileSync(path.join(root, 'data/edition-features.json'), 'utf8')).editions['2026-10-19'];
  const { dir } = fixture(t, dir => {
    const image = tracked('static' + selected.imagePath);
    const crypto = require('node:crypto');
    const digest = crypto.createHash('sha256').update(image).digest('hex');
    const imagePath = `/images/papers/2610.24921/figure-2-${digest.slice(0, 16)}.png`;
    fs.mkdirSync(path.dirname(path.join(dir, 'static' + imagePath)), { recursive: true });
    fs.writeFileSync(path.join(dir, 'static' + imagePath), image);
    const paperFile = path.join(dir, `content/posts/${paperName}.md`);
    fs.writeFileSync(paperFile, fs.readFileSync(paperFile, 'utf8').replaceAll('https://arxiv.org/html/2610.24921v1/photo/Flowchart_Asy_New.png', imagePath));
  });
  const html = render(dir);
  assert.match(html, /data-automatic="true"/);
  assert.match(html, /src="\/audio-paper-digest-blog\/images\/papers\/2610\.24921\/figure-2-/);
  assert.match(html, /width="659" height="219"/);
});
test('the actual image render hook and automatic cover agree on the existing official-to-local map', t => {
  const selected = JSON.parse(fs.readFileSync(path.join(root, 'data/edition-features.json'), 'utf8')).editions['2026-10-19'];
  const source = 'https://arxiv.org/html/2610.24921v1/photo/Flowchart_Asy_New.png';
  let mapped;
  const { dir, record } = fixture(t, dir => {
    const bytes = tracked('static' + selected.imagePath);
    const digest = require('node:crypto').createHash('sha256').update(bytes).digest('hex');
    const local = `/images/papers/2610.24921/figure-2-${digest.slice(0, 16)}.png`;
    mapped = '/audio-paper-digest-blog' + local;
    fs.mkdirSync(path.dirname(path.join(dir, 'static' + local)), { recursive: true });
    fs.writeFileSync(path.join(dir, 'static' + local), bytes);
    fs.writeFileSync(path.join(dir, 'data/arxiv_image_map.json'), JSON.stringify({ [source]: mapped }));
    fs.mkdirSync(path.join(dir, 'layouts/_default/_markup'), { recursive: true });
    fs.copyFileSync(path.join(root, 'layouts/_default/_markup/render-image.html'), path.join(dir, 'layouts/_default/_markup/render-image.html'));
  });
  assert.equal(record.sourceImageUrl, source);
  assert.equal(record.renderedImageUrl, mapped);
  assert.equal(record.imageKind, 'local');
  const html = render(dir);
  assert.match(html, /data-automatic="true"/);
  assert.ok(html.includes('src="' + mapped + '"'));
  const paper = fs.readFileSync(path.join(dir, `public/posts/${paperName}/index.html`), 'utf8');
  assert.ok(paper.includes('src="' + mapped + '"'));
  fs.writeFileSync(path.join(dir, 'data/arxiv_image_map.json'), JSON.stringify({ [source]: '/audio-paper-digest-blog/images/changed.png' }));
  assert.ok(!render(dir).includes('data-automatic="true"'));
});
