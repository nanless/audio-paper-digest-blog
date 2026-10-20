'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const crypto = require('node:crypto');
const { selectEditionFeature, writeEditionFeature, officialImage, OUTPUT } = require('../scripts/select-edition-feature');
const root = path.resolve(__dirname, '..');
const hash = raw => crypto.createHash('sha256').update(raw).digest('hex');
function fixture(run) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'edition-auto-'));
  fs.mkdirSync(path.join(dir, 'content/posts'), { recursive: true });
  try { return run(dir); } finally { fs.rmSync(dir, { recursive: true, force: true }); }
}
function write(dir, name, source) { const file = path.join(dir, 'content/posts', name + '.md'); fs.writeFileSync(file, source); return file; }
function paper(dir, name, { date = '2026-10-20', id = '2610.24921', score = 7.9, draft = false, source, image = 'https://arxiv.org/html/' + id + 'v1/framework.png', alt = '原论文 Fig. 2：Overview of the framework.', extra = '' } = {}) {
  return write(dir, name, `---\ntitle: "Paper ${id}"\ndate: ${date}\ndraft: ${draft}\npaper_digest_page_type: paper\npaper_digest_arxiv_id: "${id}"\npaper_digest_arxiv_versioned_id: "${id}v1"\npaper_digest_arxiv_abs_url: "${source || 'https://arxiv.org/abs/' + id + 'v1'}"\npaper_digest_score: ${score}\npaper_digest_reader_title: "真实标题"\npaper_digest_one_sentence: "真实描述"\n---\n\n# Article\n\n[![${alt}](${image})](${image})\n\n*论文图 2。原论文 Fig. 2:：“Overview of the framework.”。*\n${extra}`);
}
function daily(dir, names, { date = '2026-10-20', count = names.length, draft = false, extra = '' } = {}) {
  return write(dir, date, `---\ntitle: "日报"\ndate: ${date}\ndraft: ${draft}\npaper_digest_page_type: index\ndescription: "共分析 ${count} 篇论文"\n---\n\n共分析 **${count}** 篇论文\n\n## 论文列表\n\n${names.map((name, i) => `### ${i + 1}. [Paper](/audio-paper-digest-blog/posts/${name})\n`).join('\n')}\n${extra}`);
}
function record(dir) { const manifest = selectEditionFeature(dir); return manifest.editions[manifest.selection.latestDate]; }

test('real 10.20 selects the highest-scoring DF-PALM method flowchart without editing source files or inventing remote byte metadata', () => {
  const dailyFile = path.join(root, 'content/posts/2026-10-20.md');
  const paperFile = path.join(root, 'content/posts/2026-10-20-df-palm-dynamic-fusion-prompt-learning-for-audio-2610-24921.md');
  const before = [dailyFile, paperFile].map(file => fs.readFileSync(file));
  const manifest = fixture(dir => {
    // Pin the actual published edition, so a newer daily does not invalidate this regression.
    for (const name of fs.readdirSync(path.join(root, 'content/posts')).filter(name => /^2026-10-20(?:-|\.md$)/.test(name)))
      fs.copyFileSync(path.join(root, 'content/posts', name), path.join(dir, 'content/posts', name));
    return selectEditionFeature(dir);
  });
  const pick = manifest.editions['2026-10-20'];
  assert.equal(manifest.selection.status, 'selected');
  assert.equal(manifest.selection.memberCount, 57);
  assert.equal(pick.arxivId, '2610.24921');
  assert.equal(pick.figure, 'Fig. 2');
  assert.equal(pick.imagePath, 'https://arxiv.org/html/2610.24921v1/photo/Flowchart_Asy_New.png');
  assert.equal(pick.selectionKind, 'method-diagram');
  assert.equal(pick.score, 7.9);
  assert.match(pick.caption, /Mean Pool denotes/);
  assert.equal(pick.dailySha256, hash(before[0]));
  assert.equal(pick.paperSha256, hash(before[1]));
  assert.ok(before[1].toString().includes(pick.imageMarkdown));
  assert.equal(pick.imageMarkdownSha256, hash(pick.imageMarkdown));
  for (const key of ['width', 'height', 'imageSha256']) assert.ok(!(key in pick), key);
  [dailyFile, paperFile].forEach((file, index) => assert.deepEqual(fs.readFileSync(file), before[index]));
});

test('method diagram priority beats a higher scoring results-only figure, then score and ties are deterministic', () => fixture(dir => {
  paper(dir, 'diagram-a', { score: 7.2 });
  paper(dir, 'diagram-b', { score: 7.2 });
  paper(dir, 'results', { score: 9.5, id: '2610.24922', alt: '原论文 Fig. 1：Cross-benchmark mean accuracy and performance results.' });
  daily(dir, ['results', 'diagram-b', 'diagram-a']);
  assert.equal(record(dir).paperPath, '/posts/diagram-a/');
  assert.deepEqual(selectEditionFeature(dir), selectEditionFeature(dir));
  const file = path.join(dir, 'content/posts/diagram-b.md');
  fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('paper_digest_score: 7.2', 'paper_digest_score: 7.3'));
  assert.equal(record(dir).paperPath, '/posts/diagram-b/');
}));

test('date advancement atomically clears the old pick, includes future editions like Hugo buildFuture, and excludes drafts', () => fixture(dir => {
  paper(dir, 'first'); daily(dir, ['first']);
  writeEditionFeature(dir);
  paper(dir, 'future', { date: '2026-10-22' }); daily(dir, ['future'], { date: '2026-10-22' });
  const next = writeEditionFeature(dir);
  assert.deepEqual(Object.keys(next.editions), ['2026-10-22']);
  assert.equal(next.editions['2026-10-22'].paperPath, '/posts/future/');
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(dir, OUTPUT), 'utf8')), next);
  const saved = fs.readFileSync(path.join(dir, OUTPUT)); writeEditionFeature(dir);
  assert.deepEqual(fs.readFileSync(path.join(dir, OUTPUT)), saved);
  daily(dir, ['future'], { date: '2026-10-23', draft: true });
  assert.equal(selectEditionFeature(dir).selection.latestDate, '2026-10-22');
  daily(dir, ['missing'], { date: '2026-10-24' });
  const empty = writeEditionFeature(dir);
  assert.deepEqual(empty.editions, {});
  assert.equal(empty.selection.reason, 'no-valid-original-figure');
  assert.ok(!fs.readFileSync(path.join(dir, OUTPUT), 'utf8').includes('/posts/future/'));
  assert.deepEqual(fs.readdirSync(path.join(dir, 'data')), ['edition-features-auto.json']);
}));

test('membership count, duplicate, nonmember, wrong day, draft, version identity and wrong source never supply a cover', () => {
  const cases = {
    'wrong count': dir => daily(dir, ['member'], { count: 2 }),
    'duplicate member': dir => daily(dir, ['member', 'member']),
    'nonmember': dir => daily(dir, ['unrelated']),
    'ranking only': dir => daily(dir, ['unrelated'], { extra: '\n## 排行榜\n### [Member](/posts/member/)\n' }),
    'wrong date': dir => paper(dir, 'member', { date: '2026-10-19' }),
    'draft article': dir => paper(dir, 'member', { draft: true }),
    'wrong source': dir => paper(dir, 'member', { source: 'https://arxiv.org/abs/2610.24922v1' }),
    'wrong image version': dir => paper(dir, 'member', { image: 'https://arxiv.org/html/2610.24921v2/framework.png' }),
    'missing image': dir => paper(dir, 'member', { image: '/images/papers/2610.24921/figure-2-0123456789abcdef.png' }),
  };
  for (const [name, mutate] of Object.entries(cases)) fixture(dir => {
    paper(dir, 'member'); daily(dir, ['member']); mutate(dir);
    assert.deepEqual(selectEditionFeature(dir).editions, {}, name);
  });
});

test('official image URLs must preserve the exact arXiv paper version and reject URL normalization tricks', () => {
  const prefix = 'https://arxiv.org/html/2610.24921v1/';
  for (const suffix of ['photo/Flowchart.png', 'figure.svg', 'images/a-b_c.2.webp', 'a.JPG']) assert.equal(officialImage(prefix + suffix, '2610.24921v1'), true, suffix);
  for (const url of [prefix + '../wrong.png', prefix + './wrong.png', prefix + '%2e%2e/wrong.png', prefix + 'a%2fb.png', prefix + 'a%252fb.png', prefix + 'a.png?redirect=evil', prefix + 'a.png#x', prefix + 'a\\b.png', prefix + '/a.png', prefix + 'x/../a.png', prefix.replace('arxiv.org', 'arxiv.org.evil') + 'a.png', prefix.replace('https:', 'http:') + 'a.png', prefix.replace('arxiv.org', 'user@arxiv.org') + 'a.png', prefix.replace('v1/', 'v2/') + 'a.png']) assert.equal(officialImage(url, '2610.24921v1'), false, url);
});

test('local original PNG assets require the same paper identity, real PNG dimensions, and the content hash in their filename', () => fixture(dir => {
  // A real tiny PNG; no image conversion or generated scientific content.
  const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR4nGP4DwQACfsD/fteaysAAAAASUVORK5CYII=', 'base64');
  const digest = hash(png);
  const image = `/images/papers/2610.24921/figure-2-${digest.slice(0, 16)}.png`;
  const file = path.join(dir, 'static' + image); fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, png);
  paper(dir, 'local', { image: '/audio-paper-digest-blog' + image }); daily(dir, ['local']);
  const pick = record(dir);
  assert.equal(pick.imageKind, 'local'); assert.equal(pick.imagePath, image);
  assert.equal(pick.imageSha256, digest); assert.equal(pick.width, 1); assert.equal(pick.height, 1);
  fs.appendFileSync(file, 'tampered'); assert.deepEqual(selectEditionFeature(dir).editions, {});
  fs.writeFileSync(file, 'not PNG'); assert.deepEqual(selectEditionFeature(dir).editions, {});
  fs.writeFileSync(file, png); fs.renameSync(file, file + '.original'); fs.symlinkSync(file + '.original', file);
  assert.deepEqual(selectEditionFeature(dir).editions, {});
}));

test('only actual Markdown images outside fenced examples are selected, and captions cannot jump across unrelated prose', () => fixture(dir => {
  const file = paper(dir, 'member'); daily(dir, ['member']);
  const initial = fs.readFileSync(file, 'utf8');
  const image = initial.slice(initial.indexOf('[!['));
  fs.writeFileSync(file, initial.slice(0, initial.indexOf('[![')) + '```markdown\n' + image + '\n```\n');
  assert.deepEqual(selectEditionFeature(dir).editions, {});
  fs.writeFileSync(file, initial.replace('原论文 Fig. 2：Overview of the framework.', 'An ordinary original figure').replace('\n\n*论文图', '\n\nUnrelated paragraph.\n\n*论文图'));
  assert.deepEqual(selectEditionFeature(dir).editions, {});
}));

test('the actual build entry recomputes the selection before Hugo and the generated manifest stays untracked', () => {
  const source = fs.readFileSync(path.join(root, 'scripts/build-site.js'), 'utf8');
  assert.ok(source.indexOf("require('./select-edition-feature').writeEditionFeature") < source.indexOf("spawnSync('hugo'"));
  assert.match(fs.readFileSync(path.join(root, '.gitignore'), 'utf8'), /^\/data\/edition-features-auto\.json$/m);
});


test('baseline architectures are not method picks and missing scores are not zero-valued qualifications', () => fixture(dir => {
  paper(dir, 'baseline', { score: 9.9, alt: '原论文 Figure 2：Vanilla SLM architecture for ASR.' });
  paper(dir, 'proposal', { score: 7.6, alt: '原论文 Figure 3：Overview of the proposed framework.' });
  daily(dir, ['baseline', 'proposal']);
  assert.equal(record(dir).paperPath, '/posts/proposal/');
  const file = path.join(dir, 'content/posts/proposal.md');
  fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('paper_digest_score: 7.6', 'paper_digest_score:'));
  const result = selectEditionFeature(dir);
  assert.equal(result.selection.eligiblePaperCount, 1);
  assert.equal(result.editions['2026-10-20'].selectionKind, 'paper-figure');
}));

test('conference identities cannot displace the daily, while ambiguous same-day pages and noncanonical timestamps safely fall back', () => fixture(dir => {
  paper(dir, 'member'); daily(dir, ['member']);
  const latest = daily(dir, ['member'], { date: '2026-10-21' });
  fs.writeFileSync(latest, fs.readFileSync(latest, 'utf8').replace('paper_digest_page_type: index', 'paper_digest_page_type: conference'));
  assert.equal(selectEditionFeature(dir).selection.latestDate, '2026-10-20');
  fs.copyFileSync(path.join(dir, 'content/posts/2026-10-20.md'), path.join(dir, 'content/posts/duplicate-index.md'));
  assert.equal(selectEditionFeature(dir).selection.reason, 'ambiguous-latest-daily-date');
  fs.rmSync(path.join(dir, 'content/posts/duplicate-index.md'));
  const file = path.join(dir, 'content/posts/2026-10-20.md');
  fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('date: 2026-10-20', 'date: 2026-10-20T12:00:00+08:00'));
  assert.equal(selectEditionFeature(dir).selection.reason, 'ambiguous-latest-daily-date');
}));

test('comment, inline-code and unclosed fenced image examples are not actual article figures', () => fixture(dir => {
  const file = paper(dir, 'member'); daily(dir, ['member']);
  const initial = fs.readFileSync(file, 'utf8');
  const split = initial.indexOf('[!['), prefix = initial.slice(0, split), image = initial.slice(split);
  for (const replacement of ['<!--\n' + image + '\n-->', '`![原论文 Fig. 2：Overview](https://arxiv.org/html/2610.24921v1/framework.png)`', '```markdown\n' + image, '~~~markdown\n' + image]) {
    fs.writeFileSync(file, prefix + replacement);
    assert.deepEqual(selectEditionFeature(dir).editions, {});
  }
}));


test('truncated, header-only, CRC-corrupted, missing-IDAT and unterminated PNG files cannot qualify under their own content hashes', () => fixture(dir => {
  const valid = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR4nGP4DwQACfsD/fteaysAAAAASUVORK5CYII=', 'base64');
  const badCRC = Buffer.from(valid); badCRC[29] ^= 1;
  const cases = {
    'header only': valid.subarray(0, 33),
    'truncated IDAT': valid.subarray(0, 43),
    'truncated IEND': valid.subarray(0, valid.length - 1),
    'bad CRC': badCRC,
    'no IDAT': Buffer.concat([valid.subarray(0, 33), valid.subarray(valid.length - 12)]),
    'bytes after IEND': Buffer.concat([valid, Buffer.from('trailing')]),
  };
  for (const [name, raw] of Object.entries(cases)) {
    const image = `/images/papers/2610.24921/figure-2-${hash(raw).slice(0, 16)}.png`;
    const file = path.join(dir, 'static' + image);
    fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, raw);
    paper(dir, 'member', { image }); daily(dir, ['member']);
    assert.deepEqual(selectEditionFeature(dir).editions, {}, name);
  }
}));

function mapFixture(dir, sourceUrl, imagePath, raw) {
  const file = path.join(dir, 'static' + imagePath);
  fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, raw);
  fs.mkdirSync(path.join(dir, 'data'), { recursive: true });
  const mapped = '/audio-paper-digest-blog' + imagePath;
  fs.writeFileSync(path.join(dir, 'data/arxiv_image_map.json'), JSON.stringify({ [sourceUrl]: mapped }));
  return mapped;
}
test('the real renderer map reuses authenticated local PNG/SVG bytes while preserving the signed article image URL', () => {
  const map = JSON.parse(fs.readFileSync(path.join(root, 'data/arxiv_image_map.json'), 'utf8'));
  for (const sourceUrl of ['https://arxiv.org/html/2609.13195v1/unlearn.png', 'https://arxiv.org/html/2609.13814v1/Realtime-Venus_system_overview.svg']) fixture(dir => {
    const id = sourceUrl.match(/html\/([^v]+)v/)[1], mapped = map[sourceUrl];
    const imagePath = mapped.replace(/^\/audio-paper-digest-blog/, '');
    const raw = fs.readFileSync(path.join(root, 'static' + imagePath));
    mapFixture(dir, sourceUrl, imagePath, raw);
    paper(dir, 'mapped', { id, image: sourceUrl }); daily(dir, ['mapped']);
    const pick = record(dir);
    assert.equal(pick.imageKind, 'local'); assert.equal(pick.imagePath, imagePath);
    assert.equal(pick.renderedImageUrl, mapped); assert.equal(pick.sourceImageUrl, sourceUrl);
    assert.equal(pick.imageSha256, hash(raw)); assert.ok(pick.width > 0 && pick.height > 0);
    // Real historical maps retain pre-repair names; current bytes remain explicitly SHA-bound.
    assert.ok(!path.basename(imagePath).includes(hash(raw).slice(0, 16)));
    assert.ok(fs.readFileSync(path.join(dir, 'content/posts/mapped.md'), 'utf8').includes(pick.imageMarkdown));
    if (imagePath.endsWith('.svg')) { assert.equal(pick.width, 1275.12); assert.equal(pick.height, 537.12); }
  });
});

test('wrong mapped paper owners, missing or invalid bytes, malformed maps and incomplete SVGs never select a mismatched rendered image', () => {
  const sourceUrl = 'https://arxiv.org/html/2610.24921v1/framework.png';
  const svg = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><path d="M0 0L1 1"/></svg>');
  const cases = {
    'wrong owner': dir => { const local = `/images/papers/2610.24922/figure-2-${hash(svg).slice(0, 16)}.svg`; mapFixture(dir, sourceUrl, local, svg); },
    'bad mapped image bytes': dir => mapFixture(dir, sourceUrl, '/images/papers/2610.24921/figure-2-0123456789abcdef.svg', Buffer.from('not SVG')),
    'missing local file': dir => { const mapped = mapFixture(dir, sourceUrl, `/images/papers/2610.24921/figure-2-${hash(svg).slice(0, 16)}.svg`, svg); fs.rmSync(path.join(dir, 'static' + mapped.replace(/^\/audio-paper-digest-blog/, ''))); },
    'truncated SVG': dir => { const raw = svg.subarray(0, svg.length - 6); mapFixture(dir, sourceUrl, `/images/papers/2610.24921/figure-2-${hash(raw).slice(0, 16)}.svg`, raw); },
    'unbalanced SVG': dir => { const raw = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><g></svg>'); mapFixture(dir, sourceUrl, `/images/papers/2610.24921/figure-2-${hash(raw).slice(0, 16)}.svg`, raw); },
    'missing viewBox': dir => { const raw = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg"><path/></svg>'); mapFixture(dir, sourceUrl, `/images/papers/2610.24921/figure-2-${hash(raw).slice(0, 16)}.svg`, raw); },
    'wrong root': dir => { const raw = Buffer.from('<html viewBox="0 0 400 200"></html>'); mapFixture(dir, sourceUrl, `/images/papers/2610.24921/figure-2-${hash(raw).slice(0, 16)}.svg`, raw); },
    'map outside site': dir => fs.writeFileSync(path.join(dir, 'data/arxiv_image_map.json'), JSON.stringify({ [sourceUrl]: 'https://outside.test/a.png' })),
    'map nonstring': dir => fs.writeFileSync(path.join(dir, 'data/arxiv_image_map.json'), JSON.stringify({ [sourceUrl]: { source: '/images/a.png' } })),
    'map invalid JSON': dir => fs.writeFileSync(path.join(dir, 'data/arxiv_image_map.json'), '{'),
    'map array': dir => fs.writeFileSync(path.join(dir, 'data/arxiv_image_map.json'), '[]'),
  };
  for (const [name, mutate] of Object.entries(cases)) fixture(dir => {
    paper(dir, 'member', { image: sourceUrl }); daily(dir, ['member']);
    fs.mkdirSync(path.join(dir, 'data'), { recursive: true }); mutate(dir);
    assert.deepEqual(selectEditionFeature(dir).editions, {}, name);
  });
});

test('an absent renderer map preserves the official-source record schema and exact 10.20 DF-PALM pick', () => fixture(dir => {
  paper(dir, 'member'); daily(dir, ['member']);
  const original = selectEditionFeature(dir);
  fs.mkdirSync(path.join(dir, 'data'), { recursive: true }); fs.writeFileSync(path.join(dir, 'data/arxiv_image_map.json'), '{}');
  assert.deepEqual(selectEditionFeature(dir), original);
  assert.ok(!('renderedImageUrl' in original.editions['2026-10-20']));
}));
