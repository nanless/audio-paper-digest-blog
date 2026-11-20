'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const { shardIndex } = require('../scripts/shard-search-index');
const { exportDesktopDetails } = require('../scripts/export-desktop-details');
const { verifyPageNavigation } = require('../scripts/verify-page-navigation');
const { verifyDesktopDetails } = require('../scripts/verify-build');

const BLOG_ROOT = path.resolve(__dirname, '..');

// Exact v1.4.6 macOS (LibraryArticleExtractor.swift:316) & Android (CatalogRepository.kt:32) 54-tag allowlist
const CLIENT_V146_ALLOWED_TAGS = new Set([
  'div', 'p', 'span', 'a',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li',
  'blockquote', 'pre', 'code',
  'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption',
  'img', 'figure', 'figcaption',
  'strong', 'b', 'em', 'i', 'u', 's', 'sup', 'sub',
  'br', 'hr',
  'details', 'summary',
  'dl', 'dt', 'dd',
  // 19 shared MathML tags (54 total with the 35 HTML tags above, or 43 HTML + MathML)
  'math', 'mrow', 'mi', 'mo', 'mn', 'msup', 'msub', 'msubsup', 'mfrac',
  'msqrt', 'mroot', 'mtext', 'mtable', 'mtr', 'mtd', 'mover', 'munder',
  'munderover', 'semantics', 'annotation'
]);

const CLIENT_FORBIDDEN_OR_DETACHED_TAGS = new Set([
  'aside', 'nav', 'header', 'footer', 'mark', 'small', 'abbr', 'kbd', 'time', 'colgroup', 'col',
  'svg', 'button', 'input', 'style', 'script', 'audio', 'video', 'picture', 'section', 'article'
]);

const CLIENT_ALLOWED_ARTICLE_ATTRS = new Set([
  'id', 'class', 'title', 'alt', 'width', 'height', 'colspan', 'rowspan', 'scope',
  'display', 'mathvariant', 'xmlns', 'encoding',
  'href', 'src', 'loading', 'decoding', 'target', 'rel',
  'hidden', 'aria-hidden', 'tabindex', 'style'
]);

function parseOpeningAndClosingTags(html) {
  const tags = [];
  const tagPattern = /<(\/?)([A-Za-z][A-Za-z0-9:-]*)\b((?:"[^"]*"|'[^']*'|[^'">])*)>/g;
  let match;
  while ((match = tagPattern.exec(html)) !== null) {
    const isClosing = match[1] === '/';
    const name = match[2].toLowerCase();
    const rawAttrs = match[3] || '';
    const attrs = [];
    if (!isClosing) {
      for (const attrMatch of rawAttrs.matchAll(/\s([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
        attrs.push({
          name: attrMatch[1].toLowerCase(),
          value: attrMatch[2] ?? attrMatch[3] ?? attrMatch[4] ?? null
        });
      }
    }
    tags.push({ isClosing, name, attrs, raw: match[0] });
  }
  return tags;
}

function decodeHtml(value) {
  return String(value || '').replace(/&(?:amp|quot|apos|lt|gt|#(\d+)|#x([\da-f]+));/gi, (m, dec, hex) => {
    if (dec) return String.fromCodePoint(Number.parseInt(dec, 10));
    if (hex) return String.fromCodePoint(Number.parseInt(hex, 16));
    switch (m.toLowerCase()) {
      case '&amp;': return '&';
      case '&quot;': return '"';
      case '&apos;': return "'";
      case '&lt;': return '<';
      case '&gt;': return '>';
      default: return m;
    }
  });
}

function gitExec(cwd, args) {
  return execFileSync('git', args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    env: {
      ...process.env,
      GIT_AUTHOR_NAME: 'Test Runner',
      GIT_AUTHOR_EMAIL: 'test@example.invalid',
      GIT_COMMITTER_NAME: 'Test Runner',
      GIT_COMMITTER_EMAIL: 'test@example.invalid'
    }
  });
}

test('P2 Blog UI enhances executive abstract, compact authors, collapsible third-party resources, roadmap & TOC while preserving v1.4.6 client 54-tag contract', t => {
  const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'p2-blog-ui-contract-'));
  t.after(() => fs.rmSync(workspace, { recursive: true, force: true }));

  const repo = path.join(workspace, 'repo');
  for (const dir of ['content/posts', 'data', 'static']) {
    fs.mkdirSync(path.join(repo, dir), { recursive: true });
  }
  for (const dir of ['layouts', 'assets', 'themes']) {
    fs.cpSync(path.join(BLOG_ROOT, dir), path.join(repo, dir), { recursive: true });
  }
  // Copy required data files excluding fullsite cohort manifests bound to the 9,259-file repo
  fs.cpSync(path.join(BLOG_ROOT, 'data'), path.join(repo, 'data'), {
    recursive: true,
    filter: file => {
      const name = path.basename(file);
      return !name.startsWith('fullsite-r6-')
        && !name.startsWith('fullsite-taxonomy-')
        && !name.startsWith('taxonomy-history')
        && !name.startsWith('edition-features')
        && name !== 'current-page-taxonomy-history-v2.json'
        && name !== 'taxonomy-old-v2-publication-holds.json'
        && name !== 'exact1028-qualified-classification.json';
    }
  });
  const confDirData = JSON.parse(fs.readFileSync(path.join(repo, 'data/conference-directory.json'), 'utf8'));
  confDirData.entries = [];
  fs.writeFileSync(path.join(repo, 'data/conference-directory.json'), JSON.stringify(confDirData), 'utf8');
  fs.copyFileSync(path.join(BLOG_ROOT, 'hugo.yaml'), path.join(repo, 'hugo.yaml'));

  // 1. Synthetic paper with explicit frontmatter `paper_digest_reader_sections` (camelCase `roleLabel` in YAML!),
  //    inline code containing formula delimiters (`\[CLS\]`, `\(x`) & HTML chars (`<`, `>`, `&`, `"`) in `<h3>`,
  //    unbound authors (>= 2), mixed primary + third-party resources (`第三方资源：` + `论文所列链接：`), table, image, reading-path blockquote
  const readerHeader = {
    contract: 'beginner-researcher',
    schemaFingerprint: 'cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2'
  };
  // Deliberately declare 3 entries for a 4-H3 paper to exercise BOTH exact-length/heading lookup AND Markdown-stripped `$declaredByHeading` matching!
  const declaredSectionsPaper = [
    '---',
    'title: "Structured Audio Representation with Explicit Reader Sections"',
    'date: 2026-11-19',
    'draft: false',
    'tags: [语音识别, 自监督学习]',
    'categories: [论文速递]',
    'description: "带显式章节导览声明的测试论文页面。"',
    'paper_digest_page_type: paper',
    'paper_digest_arxiv_id: "2611.90001"',
    'paper_digest_original_title: "Structured Audio Representation with Explicit Reader Sections"',
    'paper_digest_reader_title: "显式章节导览：结构化音频表征解读"',
    'paper_digest_score: 8.2',
    'paper_digest_one_sentence: "用分层瓶颈解耦声学细节与语义上下文。"',
    `paper_digest_api_reader_contract: ${JSON.stringify(readerHeader.contract)}`,
    `paper_digest_api_reader_schema_fingerprint: ${JSON.stringify(readerHeader.schemaFingerprint)}`,
    'paper_digest_reader_sections:',
    '  - index: 1',
    '    kind: background',
    '    roleLabel: "背景铺垫"',
    '    heading: "为什么流式语音表征容易丢失长程语境"',
    '  - index: 2',
    '    kind: method_overview',
    '    roleLabel: "核心架构"',
    `    heading: ${JSON.stringify('门控网络如何处理 `\\[CLS\\]`、`\\(x` 与 `a < b && c > "d"` 边界')}`,
    '  - index: 3',
    '    kind: result',
    '    roleLabel: "关键实证"',
    '    heading: "在低延迟约束下识别词错率下降了多少"',
    '  - index: 4',
    '    kind: limitation',
    '    heading: "哪些噪声场景超出了当前方法的适用边界"',
    '---',
    '',
    '# 📄 显式章节导览：结构化音频表征解读',
    '',
    '> 英文题目：*[Structured Audio Representation with Explicit Reader Sections](https://arxiv.org/abs/2611.90001v1)*',
    '',
    '> 评分：**8.2/10** | 创新 1.6/2 | 技术严谨 1.3/1.5 | 实验充分 1.3/1.5 | 清晰度 0.9/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.4/0.5 | 工程/实践 0.5/1.5',
    '',
    '## 👥 作者与机构',
    '',
    '- Lin Chen：机构信息未能在本次解析中与作者逐人可靠绑定',
    '- Mei Wang：机构信息未能在本次解析中与作者逐人可靠绑定',
    '- Hao Zhou：机构信息未能在本次解析中与作者逐人可靠绑定',
    '',
    '## 📌 核心摘要',
    '',
    '**研究问题：** 流式音频编码器在短帧窗口下容易遗忘跨句语义。',
    '',
    '**核心方法与结论：** 本文提出双速率瓶颈结构，在 LibriSpeech test-other 上将词错率降至 4.8%，仅在英语洁净与轻度混响评测集上验证。',
    '',
    '## 🔗 开源与复现资源',
    '',
    '- 代码相关资源：<https://github.com/example-org/structured-audio> — 链接可访问（HTTP 200）',
    '',
    '- 演示资源：<https://example-org.github.io/structured-audio-demo/> — 链接可访问（HTTP 200）',
    '',
    '- 第三方资源：<https://github.com/pytorch/audio> — 链接可访问（HTTP 200）',
    '',
    '- 论文所列链接：<https://huggingface.co/datasets/openslr/librispeech_asr> — 链接可访问（HTTP 200）',
    '',
    '- 第三方资源：<https://github.com/espnet/espnet> — 链接可访问（HTTP 200）',
    '',
    '可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。',
    '',
    '## 🧭 深度解读',
    '',
    '### 为什么流式语音表征容易丢失长程语境',
    '',
    '流式编码器每次仅观测有限右侧上下文，长句尾部的消歧线索无法回传给早期帧。',
    '',
    '### 门控网络如何处理 `\\[CLS\\]`、`\\(x` 与 `a < b && c > "d"` 边界',
    '',
    '**快通道 × 慢通道：** 快通道保留 50 Hz 音素边界，慢通道聚合 5 Hz 语义摘要，门控权重满足 \\(0 < g_t < 1\\)，两者协同兼顾低延迟与上下文完整性。',
    '',
    '> **看图路径：** 1. 先看左侧梅尔谱输入；2. 再追踪上下两条采样率分支；3. 对照右侧融合解码输出',
    '',
    '![原论文 Figure 1：Dual-rate architecture](https://nanless.github.io/audio-paper-digest-blog/og-default.png)',
    '',
    '*论文图 1。原论文 Figure 1：“Dual-rate architecture overview.”。*',
    '',
    '### 在低延迟约束下识别词错率下降了多少',
    '',
    '下表汇总了 160 ms 流式块大小下的词错率对比（越低越好）：',
    '',
    '| 模型 | test-clean (%) | test-other (%) |',
    '| --- | ---: | ---: |',
    '| Conformer-Stream | 2.6 | 5.9 |',
    '| DualRate-Ours | 2.1 | 4.8 |',
    '',
    '### 哪些噪声场景超出了当前方法的适用边界',
    '',
    '当前实验未覆盖多人重叠对话与极低信噪比远场拾音，部署前仍需在真实会议录音上补充验证。',
    '',
    '## ⚖️ 评分明细',
    '',
    '- 创新：1.6/2',
    ''
  ].join('\n');
  fs.writeFileSync(path.join(repo, 'content/posts/2026-11-19-explicit-sections-2611-90001.md'), declaredSectionsPaper, 'utf8');

  // 1b. Partial `paper_digest_reader_sections` + source-escaped `\$100` & `\*\*` heading under `hugo --minify`!
  //     (`disableAnchoredHeadings: true` lets `mask_source_bound_title_dollars` mask the single `<h3>` `$100`,
  //      so if `.reader-section-roadmap` leaked `$100` or `**` after `hugo --minify`, `validate_hugo_rendered_html_gate` would fail!)
  const partialSectionsPaper = [
    '---',
    'title: "Partial Reader Sections Heading Match Paper"',
    'date: 2026-11-19',
    'draft: false',
    'disableAnchoredHeadings: true',
    'tags: [语音识别]',
    'categories: [论文速递]',
    'paper_digest_page_type: paper',
    'paper_digest_arxiv_id: "2611.90003"',
    'paper_digest_original_title: "Partial Reader Sections Heading Match Paper"',
    `paper_digest_api_reader_contract: ${JSON.stringify(readerHeader.contract)}`,
    `paper_digest_api_reader_schema_fingerprint: ${JSON.stringify(readerHeader.schemaFingerprint)}`,
    'paper_digest_reader_sections:',
    '  - index: 1',
    '    kind: component',
    `    roleLabel: ${JSON.stringify('边界\\与$1**机制')}`,
    `    heading: ${JSON.stringify('为什么 `\\[SEP\\]` 与 `\\(y` 标记需要单独掩码')}`,
    '---',
    '',
    '# 📄 局部章节映射与代码定界符回归测试',
    '',
    '## 📌 核心摘要',
    '',
    '验证部分声明的章节标题在含反引号公式字面量与转义美元符时仍能通过 `hugo --minify` 与门禁校验。',
    '',
    '## 🧭 深度解读',
    '',
    '### 为什么 `\\[SEP\\]` 与 `\\(y` 标记需要单独掩码',
    '',
    '模型在编码段边界时将 `\\[SEP\\]` 视为控制词符。',
    '',
    '### 在 \\$100 预算与低延迟约束下识别词错率下降了多少',
    '',
    '仅在固定分块长度与低成本推理条件下验证。',
    ''
  ].join('\n');
  fs.writeFileSync(path.join(repo, 'content/posts/2026-11-19-partial-sections-2611-90003.md'), partialSectionsPaper, 'utf8');

  // 2. Real paper with all-third-party resources (5 items, 0 primary) + mixed authors (1 bound + 1 unbound -> must NOT compact!)
  const allThirdPartyPaper = '2026-10-21-micla-mixture-to-constituent-latent-alignment-for-2610-27491.md';
  fs.copyFileSync(path.join(BLOG_ROOT, 'content/posts', allThirdPartyPaper), path.join(repo, 'content/posts', allThirdPartyPaper));
  // Strip client sidecar reference if its static blob isn't copied into this mini repo
  const miclaTxt = fs.readFileSync(path.join(repo, 'content/posts', allThirdPartyPaper), 'utf8')
    .replace(/^paper_digest_sidecars:.*\n/m, '');
  fs.writeFileSync(path.join(repo, 'content/posts', allThirdPartyPaper), miclaTxt, 'utf8');

  // 3. Paper with single third-party resource (< 2 -> must NOT fold!) and author containing escaped dollar (`Rui Gong\$` -> must NOT compact!)
  const edgeGuardPaper = [
    '---',
    'title: "Edge Guard Paper for Author Dollar and Single Third Party Link"',
    'date: 2026-11-19',
    'draft: false',
    'tags: [语音识别]',
    'categories: [论文速递]',
    'paper_digest_page_type: paper',
    'paper_digest_arxiv_id: "2611.90002"',
    'paper_digest_original_title: "Edge Guard Paper for Author Dollar and Single Third Party Link"',
    '---',
    '',
    '# 📄 边界保护测试论文',
    '',
    '## 👥 作者与机构',
    '',
    '- Rui Gong\\$：机构信息未能在本次解析中与作者逐人可靠绑定',
    '- Bob Smith：机构信息未能在本次解析中与作者逐人可靠绑定',
    '',
    '## 📌 核心摘要',
    '',
    '用于验证含美元符的作者列表与单项第三方资源不会被折叠改写。',
    '',
    '## 🔗 开源与复现资源',
    '',
    '- 第三方资源：<https://github.com/pytorch/audio> — 链接可访问（HTTP 200）',
    '',
    '## 🧭 深度解读',
    '',
    '### 核心问题是什么',
    '',
    '正文段落。',
    ''
  ].join('\n');
  fs.writeFileSync(path.join(repo, 'content/posts/2026-11-19-edge-guard-2611-90002.md'), edgeGuardPaper, 'utf8');

  // 3b. Paper with malformed raw `<h3 id="bad id">` (whitespace/quote/backslash) -> `$validH3` fails closed (no broken roadmap!)
  const badH3IdPaper = [
    '---',
    'title: "Malformed Raw H3 Id Fail Closed Paper"',
    'date: 2026-11-19',
    'draft: false',
    'tags: [语音识别]',
    'categories: [论文速递]',
    'paper_digest_page_type: paper',
    'paper_digest_arxiv_id: "2611.90004"',
    'paper_digest_original_title: "Malformed Raw H3 Id Fail Closed Paper"',
    '---',
    '',
    '# 📄 非法 H3 ID 保护测试',
    '',
    '## 🧭 深度解读',
    '',
    '<h3 id="bad space\\id">异常手写标题</h3>',
    '',
    '正文段落。',
    ''
  ].join('\n');
  fs.writeFileSync(path.join(repo, 'content/posts/2026-11-19-bad-h3-id-2611-90004.md'), badH3IdPaper, 'utf8');

  // 4. Daily summary page (`paper_digest_page_type: index`) -> must NOT receive single-paper enhancements!
  const dailySummaryMd = [
    '---',
    'title: "语音/音乐/音频论文速递（2026-11-19）"',
    'date: 2026-11-19',
    'draft: false',
    'paper_digest_page_type: index',
    '---',
    '',
    '共分析 2 篇论文',
    '',
    '## ⚡ 今日概览',
    '',
    '### 热门方向',
    '',
    '- 语音识别',
    '',
    '### 论文评分排行榜',
    '',
    '1. 显式章节导览',
    '',
    '## 📋 论文列表',
    '',
    '### 🥇 [显式章节导览：结构化音频表征解读](/audio-paper-digest-blog/posts/2026-11-19-explicit-sections-2611-90001/)',
    '',
    '评分：**8.2/10** | 创新 1.6/2',
    '',
    '### 🥈 [边界保护测试论文](/audio-paper-digest-blog/posts/2026-11-19-edge-guard-2611-90002/)',
    '',
    '评分：**7.0/10** | 创新 1.2/2',
    ''
  ].join('\n');
  fs.writeFileSync(path.join(repo, 'content/posts/2026-11-19.md'), dailySummaryMd, 'utf8');
  fs.writeFileSync(
    path.join(repo, 'content/posts/2026-10-21.md'),
    '---\ntitle: "语音/音乐/音频论文速递（2026-10-21）"\ndate: 2026-10-21\ndraft: false\npaper_digest_page_type: index\n---\n\n共分析 1 篇论文\n',
    'utf8'
  );

  // Copy static assets needed for verifyPageNavigation & exportDesktopDetails (icons, og-default.png, static/data/tag-catalog-*)
  for (const entry of fs.readdirSync(path.join(BLOG_ROOT, 'static'))) {
    const full = path.join(BLOG_ROOT, 'static', entry);
    if (fs.statSync(full).isFile()) {
      fs.copyFileSync(full, path.join(repo, 'static', entry));
    }
  }
  fs.mkdirSync(path.join(repo, 'static/data'), { recursive: true });
  for (const fn of ['tag-catalog-snapshot.json', 'tag-catalog-versions.json']) {
    fs.copyFileSync(path.join(BLOG_ROOT, 'static/data', fn), path.join(repo, 'static/data', fn));
  }
  // Copy top-level standalone pages (/papers/, /search/, /archives/, /conferences/, /about/, /links/) referenced by header menu
  for (const entry of fs.readdirSync(path.join(BLOG_ROOT, 'content'))) {
    const full = path.join(BLOG_ROOT, 'content', entry);
    if (fs.statSync(full).isFile() && entry.endsWith('.md')) {
      fs.copyFileSync(full, path.join(repo, 'content', entry));
    }
  }

  gitExec(repo, ['init']);
  gitExec(repo, ['add', '.']);
  gitExec(repo, ['commit', '-m', 'test: initialize p2 blog ui fixture']);

  const buildDir = path.join(workspace, 'public');
  execFileSync('hugo', [
    '--source', repo,
    '--destination', buildDir,
    '--minify',
    '--noBuildLock',
    '--cleanDestinationDir',
    '--panicOnWarning'
  ], { stdio: 'pipe' });

  shardIndex(buildDir);
  exportDesktopDetails(buildDir, repo);

  // Full navigation & desktop-details verification must pass 100%
  const navStats = verifyPageNavigation(buildDir);
  assert.ok(navStats.htmlPages >= 5);
  const desktopStats = verifyDesktopDetails(buildDir);
  assert.equal(desktopStats.appearanceCount, 7);

  // (a1) Verify explicit paper page: executive-abstract-card, compact-authors, mixed third-party folding, roadmap & TOC
  const explicitHtml = fs.readFileSync(path.join(buildDir, 'posts/2026-11-19-explicit-sections-2611-90001/index.html'), 'utf8');
  assert.match(explicitHtml, /class=["']?executive-abstract-card["']?/);
  assert.match(explicitHtml, /<p class=["']?compact-authors-line["']?><strong>论文作者：<\/strong>Lin Chen · Mei Wang · Hao Zhou<\/p>/);
  assert.match(explicitHtml, /<p class=["']?compact-authors-note["']?>注：原论文 HTML 未提供可逐人可靠绑定的机构上标。<\/p>/);
  assert.doesNotMatch(explicitHtml, /Lin Chen：机构信息未能在本次解析中与作者逐人可靠绑定/);

  // Inline code inside H3 is preserved inside `<code>...</code>` in `.reader-roadmap-list` (note: `hugo --minify`
  // decodes `&#92;` back to `\`, which is why preserving the `<code>` element itself is essential for `markdown_hugo_gate.py`!)
  const roadmapMatch = explicitHtml.match(/<div class=["']?reader-section-roadmap["']?>[\s\S]*?<\/div>/);
  assert.ok(roadmapMatch, 'roadmap container must exist');
  const roadmapHtml = roadmapMatch[0];
  assert.match(roadmapHtml, /<code>(?:\\\[|&#92;\[)CLS(?:\\\]|&#92;\])<\/code>/);
  assert.match(roadmapHtml, /<code>(?:\\\(|&#92;\()x<\/code>/);
  assert.match(roadmapHtml, /<code>a &lt; b (?:&amp;&amp;|&&) c (?:&gt;|>) (?:"|&#34;|&quot;)d(?:"|&#34;|&quot;)<\/code>/);
  const roadmapOutsideCode = roadmapHtml.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi, '');
  assert.ok(!roadmapOutsideCode.includes('\\('), 'unpaired formula delimiter must never leak outside <code> in roadmap HTML');
  assert.ok(!roadmapOutsideCode.includes('\\['), 'block formula delimiter must never leak outside <code> in roadmap HTML');

  // Verify partial `paper_digest_reader_sections` Markdown-stripped `$declaredByHeading` lookup + `\$100` -> `＄100` & `\*\*` -> `<span>*</span>*` under `hugo --minify`
  const partialHtml = fs.readFileSync(path.join(buildDir, 'posts/2026-11-19-partial-sections-2611-90003/index.html'), 'utf8');
  assert.match(partialHtml, /<span class=["']?reader-role-pill["']?>边界＼与＄1<span>\*<\/span>\*机制<\/span>/);
  assert.match(partialHtml, /toc-role-badge["']?>01 · 边界＼与＄1<span>\*<\/span>\*机制<\/span>/);
  assert.match(partialHtml, /<code>(?:\\\[|&#92;\[)SEP(?:\\\]|&#92;\])<\/code>/);
  assert.match(partialHtml, /<code>(?:\\\(|&#92;\()y<\/code>/);
  const partialRoadmap = partialHtml.match(/<div class=["']?reader-section-roadmap["']?>[\s\S]*?<\/div>/)?.[0] || '';
  const partialRoadmapOutsideCode = partialRoadmap.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi, '');
  assert.ok(!partialRoadmapOutsideCode.includes('$'), 'escaped title dollar must become fullwidth ＄ in roadmap link so hugo --minify never emits bare $');
  assert.ok(!partialRoadmapOutsideCode.includes('**'), 'escaped double star must split via <span>*</span>* so hugo --minify never emits **');
  assert.ok(partialRoadmapOutsideCode.includes('＄100'), 'roadmap link displays fullwidth ＄100 for source-escaped \\$100 heading');

  // Mixed resources: primary kept in .primary-resources-list, 3 third-party folded into details.third-party-resources
  assert.match(explicitHtml, /class=["']?primary-resources-list["']?/);
  assert.match(explicitHtml, /<details class=["']?third-party-resources["']?><summary>论文提及的参考基线与第三方链接（共 3 项）<\/summary>/);
  assert.doesNotMatch(explicitHtml, /<details[^>]*class=["']?third-party-resources["']?[^>]*\bopen\b/);

  // Explicit `paper_digest_reader_sections` (both camelCase `roleLabel` and `kind: limitation` fallback!)
  assert.match(explicitHtml, /class=["']?reader-section-roadmap["']?/);
  for (const expectedRole of ['背景铺垫', '核心架构', '关键实证', '适用边界']) {
    assert.match(explicitHtml, new RegExp(`<span class=["']?reader-role-pill["']?>${expectedRole}<\\/span>`));
    assert.match(explicitHtml, new RegExp(`toc-role-badge["']?>0[1-4] · ${expectedRole}<\\/span>`));
  }
  assert.equal((explicitHtml.match(/class=["']?reader-section-kicker["']?/g) || []).length, 4);
  // Heading inner text, image count, table count, and 看图路径 blockquote count are 100% preserved
  assert.equal((explicitHtml.match(/<table\b/gi) || []).length, 1);
  assert.equal((explicitHtml.match(/看图路径：/g) || []).length, 1);

  // Verify mathematical & emphasis delimiter pairing outside closed <code>/<pre> across rendered articles,
  // AND invoke main-repo `markdown_hugo_gate.py:validate_hugo_rendered_html_gate` when co-located!
  for (const html of [explicitHtml, partialHtml]) {
    const bodyMatch = html.match(/<div[^>]*id=["']?article-body["']?[^>]*>([\s\S]*?)<\/div>\s*<\/div>/);
    assert.ok(bodyMatch);
    const codeMasked = bodyMatch[1]
      .replace(/<pre\b[^>]*>[\s\S]*?<\/pre>/gi, ' ')
      .replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi, ' ');
    const inlineOpens = (codeMasked.match(/(?<!\\)(?:\\\\)*\\\(/g) || []).length;
    const inlineCloses = (codeMasked.match(/(?<!\\)(?:\\\\)*\\\)/g) || []).length;
    const blockOpens = (codeMasked.match(/(?<!\\)(?:\\\\)*\\\[/g) || []).length;
    const blockCloses = (codeMasked.match(/(?<!\\)(?:\\\\)*\\\]/g) || []).length;
    assert.equal(inlineOpens, inlineCloses, 'paired \\(...\\) delimiters outside <code>');
    assert.equal(blockOpens, blockCloses, 'paired \\[...\\] delimiters outside <code>');
    assert.ok(!codeMasked.includes('**'), 'no raw ** emphasis residue');
  }

  const siblingGateScript = path.resolve(BLOG_ROOT, '..', 'audio-paper-digest', 'scripts', 'markdown_hugo_gate.py');
  if (fs.existsSync(siblingGateScript)) {
    const pyCheck = [
      'import sys, json',
      'from pathlib import Path',
      'sys.path.insert(0, str(Path(sys.argv[1]).parent))',
      'import markdown_hugo_gate as gate',
      'build_dir = Path(sys.argv[2])',
      'artifacts = []',
      'for md_path in sys.argv[3:]:',
      '    p = Path(md_path)',
      '    fm, body = gate.load_frontmatter(p)',
      '    artifacts.append({"path": str(p), "frontmatter": fm, "body": body})',
      'issues = gate.validate_hugo_rendered_html_gate(build_dir, artifacts)',
      'print(json.dumps({"checked": len(artifacts), "issues": issues}))',
      'assert issues == [], f"markdown_hugo_gate failed: {issues}"'
    ].join('\n');
    const gateOut = JSON.parse(execFileSync('python3', [
      '-c',
      pyCheck,
      siblingGateScript,
      buildDir,
      path.join(repo, 'content/posts/2026-11-19-explicit-sections-2611-90001.md'),
      path.join(repo, 'content/posts/2026-11-19-partial-sections-2611-90003.md'),
      path.join(repo, 'content/posts', allThirdPartyPaper)
    ], { encoding: 'utf8' }));
    assert.equal(gateOut.checked, 3);
    assert.deepEqual(gateOut.issues, []);
  }

  // (a2) Verify all-third-party resources + mixed authors paper (MiCLA, legacy without `paper_digest_reader_sections`)
  const miclaSlug = allThirdPartyPaper.replace(/\.md$/, '');
  const miclaHtml = fs.readFileSync(path.join(buildDir, 'posts', miclaSlug, 'index.html'), 'utf8');
  assert.doesNotMatch(miclaHtml, /compact-authors-line/, 'mixed bound + unbound authors must keep original list');
  assert.match(miclaHtml, /<p class=["']?resource-primary-note["']?>正文中未单独标注作者自有代码仓库，以下为论文提及的参考或相关链接：<\/p>/);
  assert.match(miclaHtml, /<details class=["']?third-party-resources["']?><summary>论文提及的参考基线与第三方链接（共 5 项）<\/summary>/);
  assert.match(miclaHtml, /class=["']?reader-section-roadmap["']?/, 'legacy paper without frontmatter sections still gets auto roadmap');
  assert.match(miclaHtml, /第 1\/\d+ 节 · 背景基础/);

  // (a3) Verify edge-guard paper (`Rui Gong\$` author + only 1 third-party link) and malformed H3 id fail-closed guard
  const edgeHtml = fs.readFileSync(path.join(buildDir, 'posts/2026-11-19-edge-guard-2611-90002/index.html'), 'utf8');
  assert.doesNotMatch(edgeHtml, /compact-authors-line/, 'author list containing literal $ must stay untouched');
  assert.doesNotMatch(edgeHtml, /third-party-resources/, 'single third-party link (< 2) must stay unfolded');
  const badH3Html = fs.readFileSync(path.join(buildDir, 'posts/2026-11-19-bad-h3-id-2611-90004/index.html'), 'utf8');
  assert.doesNotMatch(badH3Html, /reader-section-roadmap|reader-section-kicker/, 'malformed H3 id with space/backslash must fail closed');

  // (a4) Verify daily summary (`index`) is 100% untouched by single-paper enhancements
  const dailyHtml = fs.readFileSync(path.join(buildDir, 'posts/2026-11-19/index.html'), 'utf8');
  for (const cls of ['executive-abstract-card', 'compact-authors-line', 'third-party-resources', 'reader-section-roadmap', 'reader-section-kicker', 'toc-role-badge']) {
    assert.doesNotMatch(dailyHtml, new RegExp(cls), `daily edition must not contain ${cls}`);
  }

  // (b) Verify EVERY exported `public/client/details/articles/*.html` strictly obeys v1.4.6 54-tag & attribute allowlist,
  //     zero comments, zero duplicate IDs, and 100% self-contained valid `#fragment` targets!
  const articlesDir = path.join(buildDir, 'client/details/articles');
  const articleFiles = fs.readdirSync(articlesDir).filter(f => f.endsWith('.html'));
  assert.equal(articleFiles.length, 7);

  for (const file of articleFiles) {
    const html = fs.readFileSync(path.join(articlesDir, file), 'utf8');
    assert.ok(!html.includes('<!--'), `${file}: must not contain HTML comments`);
    const tags = parseOpeningAndClosingTags(html);
    assert.ok(tags.length > 0, `${file}: must have parsed HTML tags`);
    const ids = new Set();
    const fragmentHrefs = [];
    for (const tag of tags) {
      assert.ok(!CLIENT_FORBIDDEN_OR_DETACHED_TAGS.has(tag.name), `${file}: forbidden/detached client tag <${tag.name}>`);
      assert.ok(CLIENT_V146_ALLOWED_TAGS.has(tag.name), `${file}: tag <${tag.name}> outside v1.4.6 54-tag allowlist`);
      for (const attr of tag.attrs) {
        assert.ok(
          CLIENT_ALLOWED_ARTICLE_ATTRS.has(attr.name),
          `${file}: unexpected attribute ${attr.name} on <${tag.name}>`
        );
        if (attr.name === 'id' && attr.value) {
          const decodedId = decodeHtml(attr.value);
          assert.ok(!ids.has(decodedId), `${file}: duplicate id "${decodedId}"`);
          ids.add(decodedId);
        }
        if (tag.name === 'a' && attr.name === 'href' && attr.value && attr.value.startsWith('#')) {
          fragmentHrefs.push(decodeURIComponent(decodeHtml(attr.value).slice(1)));
        }
      }
    }
    for (const frag of fragmentHrefs) {
      assert.ok(ids.has(frag), `${file}: broken in-article #fragment "#${frag}"`);
    }
  }

  // Verify workbench-toc CSS width upgrade (224px-232px) and dark theme (.dark) parity in zzzz-research-portal.css
  const portalCss = fs.readFileSync(path.join(BLOG_ROOT, 'assets/css/extended/zzzz-research-portal.css'), 'utf8');
  assert.match(portalCss, /\.research-layout\s*\{\s*grid-template-columns:\s*224px\b/);
  assert.match(portalCss, /:root\.dark,\s*body\.dark/);
  for (const selector of ['.executive-abstract-card', '.reader-section-roadmap', '.reader-section-kicker', '.reader-role-pill', '.compact-authors-line', 'details.third-party-resources']) {
    assert.ok(portalCss.includes(selector), `CSS missing ${selector}`);
  }
});
