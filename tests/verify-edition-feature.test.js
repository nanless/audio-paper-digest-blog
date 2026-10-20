'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { createHash } = require('node:crypto');
const test = require('node:test');
const { verifyEditionFeature } = require('../scripts/verify-edition-feature');
const PREFIX = '/audio-paper-digest-blog';

function fixture(t, { local = false, escaped = false } = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'verify-edition-feature-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const record = {
    date: '2026-10-20', paperPath: '/posts/2026-10-20-paper-2610-24921/', arxivId: '2610.24921',
    sourceUrl: 'https://arxiv.org/abs/2610.24921v1', imageKind: local ? 'local' : 'official',
    imagePath: local ? '/images/papers/2610.24921/figure-2-test.png' : 'https://arxiv.org/html/2610.24921v1/photo/Flowchart.png'
  };
  record.sourceImageUrl = local ? PREFIX + record.imagePath : record.imagePath;
  const imageUrl = record.sourceImageUrl, paperUrl = PREFIX + record.paperPath;
  const feature = `<div class=edition-feature data-automatic=true data-edition-date="${record.date}" data-paper-path="${record.paperPath}">
    <div class=edition-feature__heading><h3><a href="${paperUrl}">选读</a></h3></div>
    <figure><a href="${paperUrl}"><img src="${imageUrl}" alt="原图"></a><figcaption>原论文 Fig. 2</figcaption></figure>
    <div class=edition-feature__actions><a class=edition-feature__read href="${paperUrl}">读这篇完整解读</a><a class=edition-feature__original href="${imageUrl}">查看完整原图</a></div></div>`;
  const files = {
    'index.html': `<section class=edition-focus><div><time datetime=2026-10-20>2026.10.20</time></div><div><a href="${PREFIX}/posts/2026-10-20/">阅读本期完整速递 <span>↗</span></a></div>${feature}</section>`,
    'posts/2026-10-20/index.html': `<article><h2>综合排行</h2><table><tr><td><a href="${paperUrl}">第一</a></td></tr></table><h2 id=论文列表>📄 论文列表</h2><h3><a href="${paperUrl.slice(0, -1)}">1. DF-PALM</a></h3><h2>说明</h2></article>`,
    [record.paperPath.slice(1) + 'index.html']: `<article><figure><a href="${imageUrl}"><img src="${escaped ? imageUrl.replaceAll('/', '&#x2f;').replaceAll(':', '&#58;') : imageUrl}"></a></figure></article>`
  };
  const manifest = { contract: 'edition-feature-auto-v1', selection: { status: 'selected', latestDate: record.date }, editions: { [record.date]: record } };
  function write(relative, source) { const file = path.join(root, relative); fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, source); }
  function change(relative, transform) { files[relative] = transform(files[relative]); write(relative, files[relative]); }
  for (const [relative, source] of Object.entries(files)) write(relative, source);
  if (local) { const bytes = Buffer.from('real fixture image bytes'); record.imageSha256 = createHash('sha256').update(bytes).digest('hex'); write(record.imagePath.slice(1), bytes); }
  return { root, record, manifest, files, write, change, feature };
}

test('rendered automatic official selection preserves full daily entry and exact image identity', t => {
  const f = fixture(t, { escaped: true });
  assert.deepEqual(verifyEditionFeature(f.root, f.manifest), {
    status: 'selected', latestDate: '2026-10-20', featureCount: 1,
    paperPath: f.record.paperPath, imageKind: 'official', memberCount: 1
  });
});

test('real Hugo minified unquoted trailing-slash CTA, paper H3 and read links keep their text children', t => {
  const f = fixture(t);
  f.change('posts/2026-10-20/index.html', html => html.replace('href="' + PREFIX + f.record.paperPath.slice(0, -1) + '"', 'href="' + PREFIX + f.record.paperPath + '"'));
  for (const relative of Object.keys(f.files)) {
    f.change(relative, html => html.replace(/href="([^"\s]+)"/g, 'href=$1').replace(/>\s+</g, '><'));
  }
  assert.match(f.files['index.html'], /href=\/audio-paper-digest-blog\/posts\/2026-10-20\/>阅读本期完整速递/);
  assert.match(f.files['index.html'], /class=edition-feature__read href=[^>]+\/>读这篇完整解读/);
  assert.match(f.files['posts/2026-10-20/index.html'], /<h3><a href=[^>]+\/>1\. DF-PALM/);
  assert.equal(verifyEditionFeature(f.root, f.manifest).memberCount, 1);
});

test('rendered local selection checks actual built bytes', t => {
  const f = fixture(t, { local: true });
  assert.equal(verifyEditionFeature(f.root, f.manifest).imageKind, 'local');
  f.write(f.record.imagePath.slice(1), 'corrupted after selection');
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /SHA/);
});

test('root-relative local source, mixed-case PNG and daily heading anchor preserve exact identity', t => {
  const f = fixture(t, { local: true });
  const oldPath = f.record.imagePath, oldUrl = f.record.sourceImageUrl;
  f.record.imagePath = oldPath.replace(/\.png$/, '.PNG');
  f.record.sourceImageUrl = f.record.imagePath;
  f.write(f.record.imagePath.slice(1), fs.readFileSync(path.join(f.root, oldPath.slice(1))));
  f.change('index.html', html => html.replaceAll(oldUrl, PREFIX + f.record.imagePath));
  f.change('posts/2026-10-20/index.html', html => html.replace('<h3>', '<h3><a class="anchor" href="#df-palm" aria-label="Permalink">#</a>').replaceAll(PREFIX + f.record.paperPath.slice(0, -1), f.record.paperPath.slice(0, -1)));
  f.change(f.record.paperPath.slice(1) + 'index.html', html => html.replaceAll(oldUrl, f.record.sourceImageUrl));
  assert.equal(verifyEditionFeature(f.root, f.manifest).imageKind, 'local');
  // The article must retain its exact original reference, not a normalized alias.
  f.change(f.record.paperPath.slice(1) + 'index.html', html => html.replace('<img src="' + f.record.sourceImageUrl, '<img src="' + PREFIX + f.record.sourceImageUrl));
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /精确对应的原图引用/);
});

function mappedFixture(t, extension = 'png') {
  const f = fixture(t, { local: true });
  const oldUrl = f.record.sourceImageUrl;
  if (extension === 'svg') {
    f.record.imagePath = f.record.imagePath.replace(/\.png$/, '.svg');
    const bytes = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><path d="M0 0h640v360H0z"/></svg>');
    f.write(f.record.imagePath.slice(1), bytes);
    f.record.imageSha256 = createHash('sha256').update(bytes).digest('hex');
  }
  f.record.sourceImageUrl = 'https://arxiv.org/html/2610.24921v1/photo/Flowchart.' + extension;
  f.record.renderedImageUrl = PREFIX + f.record.imagePath;
  f.change('index.html', html => html.replaceAll(oldUrl, PREFIX + f.record.imagePath));
  f.change(f.record.paperPath.slice(1) + 'index.html', html => html.replaceAll(oldUrl, f.record.renderedImageUrl));
  return f;
}

test('official image mapped to same-paper local PNG and SVG verifies exact rendered source and bytes', t => {
  for (const extension of ['png', 'svg']) {
    const f = mappedFixture(t, extension);
    assert.equal(verifyEditionFeature(f.root, f.manifest).imageKind, 'local');
    f.record.renderedImageUrl = f.record.imagePath;
    f.change(f.record.paperPath.slice(1) + 'index.html', html => html.replaceAll(PREFIX + f.record.imagePath, f.record.imagePath));
    assert.equal(verifyEditionFeature(f.root, f.manifest).imageKind, 'local');
  }
});

test('mapped local image rejects wrong rendered mapping, source version, paper img or built bytes', t => {
  const f = mappedFixture(t, 'svg');
  const rendered = f.record.renderedImageUrl;
  f.record.renderedImageUrl = rendered.replace('2610.24921', '2610.00001');
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /映射的渲染地址/);
  f.record.renderedImageUrl = rendered;
  f.record.sourceImageUrl = f.record.sourceImageUrl.replace('v1/', 'v2/');
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /同一 arXiv 版本/);
  f.record.sourceImageUrl = f.record.sourceImageUrl.replace('v2/', 'v1/');
  f.change(f.record.paperPath.slice(1) + 'index.html', html => html.replaceAll(rendered, f.record.sourceImageUrl));
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /精确对应的原图引用/);
  f.change(f.record.paperPath.slice(1) + 'index.html', html => html.replaceAll(f.record.sourceImageUrl, rendered));
  f.write(f.record.imagePath.slice(1), '<svg>changed after selection</svg>');
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /SHA/);
});

test('selected manifest cannot silently omit the cover or use a manual cover', t => {
  const f = fixture(t);
  f.change('index.html', html => html.replace('data-automatic=true', 'data-automatic=false'));
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /自动选图标记/);
  f.change('index.html', html => html.replace('class=edition-feature ', 'class=old-feature '));
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /恰好显示一个/);
});

test('latest homepage date, selected record date and feature identity must agree', t => {
  const f = fixture(t);
  f.change('index.html', html => html.replace('datetime=2026-10-20', 'datetime=2026-10-19'));
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /最新日报日期/);
  f.change('index.html', html => html.replace('datetime=2026-10-19', 'datetime=2026-10-20').replace('data-paper-path="/posts/', 'data-paper-path="/other/'));
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /论文身份/);
});

test('a ranking link cannot substitute for a daily body H3 membership', t => {
  const f = fixture(t);
  f.change('posts/2026-10-20/index.html', html => html.replace(/<h3>[\s\S]*?<\/h3>/, ''));
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /正文论文列表 H3/);
});

test('duplicated or wrong-section H3 membership is rejected', t => {
  const f = fixture(t);
  f.change('posts/2026-10-20/index.html', html => html.replace('</h3>', '</h3><h3><a href="' + PREFIX + f.record.paperPath + '">重复</a></h3>'));
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /唯一/);
  f.change('posts/2026-10-20/index.html', html => html.replace('📄 论文列表', '其他章节'));
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /正文论文列表/);
});

test('full daily CTA must retain its date and appear ahead of the feature', t => {
  const f = fixture(t);
  f.change('index.html', html => html.replace('/posts/2026-10-20/"', '/posts/2026-10-19/"'));
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /完整日报主入口/);
  f.change('index.html', html => html.replace('/posts/2026-10-19/"', '/posts/2026-10-20/"').replace(f.feature, '').replace('</section>', f.feature + '</section>'));
  // Move the feature before the CTA while keeping all links intact.
  f.change('index.html', html => html.replace(f.feature, '').replace('<section class=edition-focus>', '<section class=edition-focus>' + f.feature));
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /完整日报主入口/);
});

test('read and original image actions cannot point to unrelated destinations', t => {
  const f = fixture(t);
  f.change('index.html', html => html.replace('class=edition-feature__read href="' + PREFIX, 'class=edition-feature__read href="/wrong'));
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /完整解读入口/);
  f.change('index.html', html => html.replace('class=edition-feature__read href="/wrong', 'class=edition-feature__read href="' + PREFIX).replace('class=edition-feature__original href="https://arxiv.org', 'class=edition-feature__original href="https://wrong.example'));
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /完整原图入口/);
});

test('official image must use the exact paper version and rendered article img source', t => {
  const f = fixture(t);
  f.record.sourceImageUrl = f.record.sourceImageUrl.replace('v1/', 'v2/');
  f.record.imagePath = f.record.sourceImageUrl;
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /同一 arXiv 版本/);
  f.record.sourceImageUrl = f.record.sourceImageUrl.replace('v2/', 'v1/'); f.record.imagePath = f.record.sourceImageUrl;
  f.change(f.record.paperPath.slice(1) + 'index.html', html => html.replace('<img src=', '<img data-src='));
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /精确对应的原图引用/);
});

test('different feature img source and duplicate feature containers fail', t => {
  const f = fixture(t);
  f.change('index.html', html => html.replace('<img src="https://arxiv.org', '<img src="https://wrong.example'));
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /封面图片地址/);
  f.change('index.html', html => html + f.feature);
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /恰好显示一个/);
});

test('fallback accepts no cover but rejects a stale manual cover or automatic success marker', t => {
  const f = fixture(t); f.manifest.selection.status = 'fallback';
  f.change('index.html', html => html.replace('data-automatic=true', 'data-automatic=false').replace('data-edition-date="2026-10-20"', 'data-edition-date="2026-10-19"'));
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /其他日期/);
  f.change('index.html', html => html.replace('data-edition-date="2026-10-19"', 'data-edition-date="2026-10-20"').replace('data-automatic=false', 'data-automatic=true'));
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /不得宣称自动选图成功/);
  f.change('index.html', html => html.replace(f.feature, ''));
  assert.deepEqual(verifyEditionFeature(f.root, f.manifest), { status: 'fallback', latestDate: '2026-10-20', featureCount: 0 });
});

test('no published edition fallback requires no selected feature', t => {
  const f = fixture(t); f.manifest.selection = { status: 'fallback', latestDate: '' };
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /声称没有日报/);
  f.change('index.html', html => html.replace(/<time\b[^>]*>[\s\S]*?<\/time>/, ''));
  assert.throws(() => verifyEditionFeature(f.root, f.manifest), /其他日期/);
  f.change('index.html', html => html.replace(f.feature, ''));
  assert.equal(verifyEditionFeature(f.root, f.manifest).featureCount, 0);
});
