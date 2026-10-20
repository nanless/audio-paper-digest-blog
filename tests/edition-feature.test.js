'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'data/edition-features.json'), 'utf8'));
const selected = manifest.editions['2026-10-19'];
const paperFile = 'content' + selected.paperPath.replace(/\/$/, '.md');
const tracked = file => execFileSync('git', ['show', 'HEAD:' + file], { cwd: root });

function render(mutate = () => {}) {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'edition-feature-'));
  try {
    for (const dir of ['layouts/partials', 'content/posts', 'data', path.dirname('static' + selected.imagePath)]) fs.mkdirSync(path.join(temp, dir), { recursive: true });
    for (const name of ['edition_feature_auto_data.html', 'edition_feature_data.html', 'edition_feature.html']) fs.copyFileSync(path.join(root, 'layouts/partials', name), path.join(temp, 'layouts/partials', name));
    fs.writeFileSync(path.join(temp, 'hugo.toml'), 'baseURL = "https://example.test/audio-paper-digest-blog/"\ndisableKinds = ["taxonomy", "term", "RSS", "sitemap"]\n');
    fs.writeFileSync(path.join(temp, 'layouts/index.html'), '{{ $daily := site.GetPage "/posts/2026-10-19/" }}<main><a id="full-edition" href="{{ $daily.RelPermalink }}">阅读本期完整速递</a>{{ $feature := partial "edition_feature_data.html" $daily }}{{ partial "edition_feature.html" $feature }}</main>');
    fs.writeFileSync(path.join(temp, 'layouts/_default.html'), '');
    fs.mkdirSync(path.join(temp, 'layouts/_default'), { recursive: true });
    fs.writeFileSync(path.join(temp, 'layouts/_default/single.html'), '{{ .Title }}');
    fs.writeFileSync(path.join(temp, 'data/edition-features.json'), JSON.stringify(manifest));
    fs.writeFileSync(path.join(temp, 'content/posts/2026-10-19.md'), tracked('content/posts/2026-10-19.md'));
    fs.writeFileSync(path.join(temp, paperFile), tracked(paperFile));
    fs.writeFileSync(path.join(temp, 'static' + selected.imagePath), tracked('static' + selected.imagePath));
    mutate(temp);
    execFileSync('hugo', ['--source', temp, '--destination', path.join(temp, 'public'), '--noBuildLock', '--panicOnWarning'], { stdio: 'pipe' });
    return fs.readFileSync(path.join(temp, 'public/index.html'), 'utf8');
  } finally { fs.rmSync(temp, { recursive: true, force: true }); }
}

function changeRecord(temp, change) {
  const file = path.join(temp, 'data/edition-features.json');
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  change(data.editions['2026-10-19']);
  fs.writeFileSync(file, JSON.stringify(data));
}

test('the selected original figure is byte-bound to a real published daily member, and Hugo hashes binary bytes correctly', () => {
  const png = tracked('static' + selected.imagePath);
  assert.equal(crypto.createHash('sha256').update(png).digest('hex'), selected.imageSha256);
  assert.equal(png.readUInt32BE(16), selected.width);
  assert.equal(png.readUInt32BE(20), selected.height);
  const html = render();
  assert.match(html, /class="edition-feature"/);
  assert.match(html, /本期选读/);
  assert.match(html, /Jarvis · 原论文 Figure 3：系统整体架构/);
  assert.match(html, /width="659" height="219"/);
  assert.ok(html.includes('href="/audio-paper-digest-blog' + selected.paperPath + '"'));
  assert.ok(html.includes('src="/audio-paper-digest-blog' + selected.imagePath + '"'));
  assert.ok(html.indexOf('id="full-edition"') < html.indexOf('class="edition-feature"'));
  assert.match(html, /查看完整原图/);
});

test('unreviewed new editions, external links, nonmembers, wrong sources and missing or changed image bytes retain the full daily entry', () => {
  const cases = {
    'stale date': temp => changeRecord(temp, record => { record.date = '2026-10-18'; }),
    'next edition': temp => { const file = path.join(temp, 'content/posts/2026-10-19.md'); fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('date: 2026-10-19', 'date: 2026-10-20')); },
    'external paper': temp => changeRecord(temp, record => { record.paperPath = 'https://outside.test' + record.paperPath; }),
    'external image': temp => changeRecord(temp, record => { record.imagePath = 'https://outside.test/image.png'; }),
    'only ranking membership': temp => { const file = path.join(temp, 'content/posts/2026-10-19.md'); fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace(/^### .*Jarvis.*\n/gm, '### 未入选的其他论文\n')); },
    'wrong source': temp => changeRecord(temp, record => { record.sourceUrl = 'https://outside.test/abs/2610.23804v1'; }),
    'missing paper image': temp => { const file = path.join(temp, paperFile); fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replaceAll(selected.imagePath, '/images/other.png')); },
    'missing image': temp => fs.rmSync(path.join(temp, 'static' + selected.imagePath)),
    'changed bytes': temp => fs.appendFileSync(path.join(temp, 'static' + selected.imagePath), 'changed'),
    'wrong identity': temp => changeRecord(temp, record => { record.arxivId = '2610.99999'; })
  };
  for (const [name, mutate] of Object.entries(cases)) {
    const html = render(mutate);
    assert.ok(!html.includes('class="edition-feature"'), name);
    assert.match(html, /id="full-edition"/, name);
    assert.match(html, /阅读本期完整速递/, name);
  }
});
