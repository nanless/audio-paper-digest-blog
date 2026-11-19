'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const protocols = require('../assets/js/protocol-registry');
const { shardIndex } = require('../scripts/shard-search-index');
const {
  MANIFEST_CONTRACT,
  SNAPSHOT_CONTRACT,
  DETAIL_CONTRACT,
  exportDesktopDetails,
  sanitizeArticleHtml,
  assertSafeArticleHtml
} = require('../scripts/export-desktop-details');
const { verifyDesktopDetails } = require('../scripts/verify-build');

const BLOG_ROOT = path.resolve(__dirname, '..');
const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex');

const BLOBS = {
  'citation.bib': '83a8c84121e8387c78fd9507c48b42e0ea60a331',
  'citation.json': '6f0119d01df56e5ad74e750ad2176cfd709220d3',
  'citation.ris': 'eabe5ba48f99dbe21b06f435ba19d4152ab385f9',
  'rethink-context.json': 'a08a3029ca89f4b12b08628706bc5305b81d1627'
};
const ORIGINAL_SIDECARS = Object.fromEntries(
  Object.entries(BLOBS).map(([name, oid]) => [
    name,
    execFileSync('git', ['cat-file', 'blob', oid], { cwd: BLOG_ROOT })
  ])
);

function upgradeHeader(bytes, family) {
  const parsed = JSON.parse(bytes.toString('utf8'));
  const oldHeader = protocols.recordHeader(parsed.contract, family);
  const currentHeader = protocols.recordHeader(family, family);
  let text = bytes.toString('utf8');
  for (const [key, val] of Object.entries(oldHeader)) {
    const needle = `"${key}": ${JSON.stringify(val)}`;
    const replacement = key === 'contract'
      ? `"contract": ${JSON.stringify(currentHeader.contract)}`
      : `"schemaFingerprint": ${JSON.stringify(currentHeader.schemaFingerprint)}`;
    text = text.replace(needle, replacement);
  }
  return Buffer.from(text, 'utf8');
}

// 1x1 valid PNG
const TINY_PNG = Buffer.from(
  '89504e470d0a1a0a0000000d4948445200000001000000010802000000907753de0000000c4944415408d763f8cfc000000301010018dd8db00000000049454e44ae426082',
  'hex'
);

function gitExec(cwd, args, env = {}) {
  return execFileSync('git', args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    env: {
      ...process.env,
      GIT_AUTHOR_NAME: 'Test Runner',
      GIT_AUTHOR_EMAIL: 'test@example.invalid',
      GIT_COMMITTER_NAME: 'Test Runner',
      GIT_COMMITTER_EMAIL: 'test@example.invalid',
      ...env
    }
  });
}

function createSyntheticRepoFixture(t, customize = null) {
  const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'desktop-details-fixture-'));
  t.after(() => fs.rmSync(workspace, { recursive: true, force: true }));

  const repo = path.join(workspace, 'repo');
  const buildDir = path.join(workspace, 'public');
  fs.mkdirSync(path.join(repo, 'content/posts'), { recursive: true });
  fs.mkdirSync(path.join(repo, 'data'), { recursive: true });
  fs.mkdirSync(path.join(repo, 'static'), { recursive: true });
  fs.mkdirSync(path.join(buildDir, 'data'), { recursive: true });

  // Copy real tag catalog pair so tag-core registry resolves real concept IDs
  for (const fn of ['tag-catalog-snapshot.json', 'tag-catalog-versions.json']) {
    fs.copyFileSync(path.join(BLOG_ROOT, 'data', fn), path.join(repo, 'data', fn));
    fs.copyFileSync(path.join(BLOG_ROOT, 'data', fn), path.join(buildDir, 'data', fn));
  }

  // Write bundled local image
  const localImgRel = 'images/papers/2610.41381/figure-1.png';
  fs.mkdirSync(path.join(buildDir, path.dirname(localImgRel)), { recursive: true });
  fs.writeFileSync(path.join(buildDir, localImgRel), TINY_PNG);
  fs.mkdirSync(path.join(repo, 'static', path.dirname(localImgRel)), { recursive: true });
  fs.writeFileSync(path.join(repo, 'static', localImgRel), TINY_PNG);

  // Sidecars for daily arXiv paper
  const sidecarPrefix = 'client/papers/2026-11-02/2610-41381/';
  const sidecarFiles = {
    ...ORIGINAL_SIDECARS,
    'citation.json': upgradeHeader(ORIGINAL_SIDECARS['citation.json'], 'researcher-sidecars'),
    'rethink-context.json': upgradeHeader(ORIGINAL_SIDECARS['rethink-context.json'], 'paper-research-context')
  };
  const citationJson = JSON.parse(sidecarFiles['citation.json'].toString('utf8'));
  const contextJson = JSON.parse(sidecarFiles['rethink-context.json'].toString('utf8'));
  const clientSidecars = {};
  for (const [name, buf] of Object.entries(sidecarFiles)) {
    const pubFile = path.join(buildDir, sidecarPrefix, name);
    const staticFile = path.join(repo, 'static', sidecarPrefix, name);
    fs.mkdirSync(path.dirname(pubFile), { recursive: true });
    fs.mkdirSync(path.dirname(staticFile), { recursive: true });
    fs.writeFileSync(pubFile, buf);
    fs.writeFileSync(staticFile, buf);
    clientSidecars[name] = {
      url: `/audio-paper-digest-blog/${sidecarPrefix}${name}`,
      sha256: sha256(buf),
      ...(name === 'rethink-context.json'
        ? { contract: contextJson.contract, schemaFingerprint: contextJson.schemaFingerprint }
        : {})
    };
  }

  const tagCatalogObj = JSON.parse(fs.readFileSync(path.join(BLOG_ROOT, 'data/tag-catalog-snapshot.json'), 'utf8'));
  const taskConcept = tagCatalogObj.concepts.find(c => c.facet === 'task' && c.status !== 'deprecated');
  const methodConcept = tagCatalogObj.concepts.find(c => c.facet === 'method' && c.status !== 'deprecated');
  const signalConcept = tagCatalogObj.concepts.find(c => c.facet === 'signal' && c.status !== 'deprecated');
  const flatHeader = protocols.recordHeader('paper-tag-flat-tags', 'paper-tag-flat-tags');

  function writePost({ slug, frontmatter, htmlBody, headExtra = '' }) {
    fs.writeFileSync(path.join(repo, 'content/posts', `${slug}.md`), frontmatter, 'utf8');
    const pageDir = path.join(buildDir, 'posts', slug);
    fs.mkdirSync(pageDir, { recursive: true });
    fs.writeFileSync(
      path.join(pageDir, 'index.html'),
      `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">${headExtra}</head><body><main>`
      + `<div class="post-content md-content research-article" id=article-body tabindex=-1>${htmlBody}</div>`
      + `<footer>页脚</footer></main><script>window.siteChrome = true;</script></body></html>`,
      'utf8'
    );
  }

  // 1. Daily arXiv paper with sidecars, math, bundled image, and onset=0.5 text
  const arxivSlug = '2026-11-02-daily-arxiv-2610-41381';
  writePost({
    slug: arxivSlug,
    headExtra: '<script id="MathJax-script" defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>',
    frontmatter: [
      '---',
      `title: ${JSON.stringify(citationJson.originalTitle)}`,
      'date: 2026-11-02',
      'lastmod: 2026-11-03T10:30:00+08:00',
      'draft: false',
      `paper_digest_page_type: paper`,
      `paper_digest_arxiv_id: ${JSON.stringify(citationJson.arxivId)}`,
      `paper_digest_original_title: ${JSON.stringify(citationJson.originalTitle)}`,
      `paper_digest_reader_title: ${JSON.stringify(contextJson.readerTitle)}`,
      `paper_digest_rank_bucket: "前25%"`,
      `paper_digest_document_type: "方法研究"`,
      '---',
      '正文'
    ].join('\n'),
    htmlBody: `<h2>导读</h2><p>公式 \\(0 < w_i < 1\\) 且二值化阈值 <code>onset=0.5</code>。</p>`
      + `<img src=/audio-paper-digest-blog/${localImgRel} alt="Figure 1">`
  });

  // 2. Duplicate appearance of the SAME arXiv paper on another day (tests paperCount deduplication!)
  const duplicateArxivSlug = '2026-11-03-revisit-2610-41381';
  writePost({
    slug: duplicateArxivSlug,
    frontmatter: [
      '---',
      `title: ${JSON.stringify(citationJson.originalTitle)}`,
      'date: 2026-11-03',
      'draft: false',
      'paper_digest_page_type: paper',
      `paper_digest_arxiv_id: ${JSON.stringify(citationJson.arxivId)}`,
      '---',
      '复盘'
    ].join('\n'),
    htmlBody: `<p>同一篇论文的第二次导读出现记录，包含外链图 <img src="https://arxiv.org/html/2610.41381v1/x1.png" alt="ext">。</p>`
  });

  // 3. Conference paper (no sidecar -> abstract must be null, never AI summary!)
  const confSlug = 'conference-interspeech-2026-a26';
  const confPaperId = 'conference:interspeech:2026:conference-paper-id:a26_interspeech';
  writePost({
    slug: confSlug,
    frontmatter: [
      '---',
      'title: "Neural Codec Language Models for Speech"',
      'date: 2026-09-15',
      'draft: false',
      'paper_digest_page_type: paper',
      'paper_digest_source_kind: conference',
      `paper_digest_paper_id: "${confPaperId}"`,
      'paper_digest_original_title: "Neural Codec Language Models for Speech"',
      'paper_digest_reader_title: "用于语音的神经编解码语言模型"',
      'paper_digest_authors: [{"name":"Alice Zhang","affiliations":["Tsinghua University"]},{"name":"Bob Li","affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"]}]',
      '---',
      '会议正文'
    ].join('\n'),
    htmlBody: `<p>会议论文正文，含缺失自定义协议图 <img src="icassp-img://missing/0.png" alt="missing">。</p>`
  });

  // 4. Historical unverified paper (inferred/unknown -> paperId: null, originalTitle: null)
  const unverifiedSlug = '2025-12-01-historical-unverified-note';
  writePost({
    slug: unverifiedSlug,
    frontmatter: [
      '---',
      'title: "早期中文历史笔记标题"',
      'date: 2025-12-01',
      'draft: false',
      'paper_digest_page_type: paper',
      '---',
      '早期笔记'
    ].join('\n'),
    htmlBody: '<p>早期未核验来源身份的历史导读。</p>'
  });

  // 5. Special source-version warning paper
  const warningSlug = '2026-08-03-version-warning-2607-28687';
  const warningText = '封存文本为 2607.28687v1，实际请求的无版本 PDF 返回未认证版本。';
  writePost({
    slug: warningSlug,
    frontmatter: [
      '---',
      'title: "Version Warning Paper"',
      'date: 2026-08-03',
      'draft: false',
      'paper_digest_page_type: paper',
      'paper_digest_arxiv_id: "2607.28687"',
      '---',
      '版本警告'
    ].join('\n'),
    htmlBody: '<p>保留来源版本警告与原字节绑定证明。</p>'
  });

  // 6. Daily summary aggregate & Conference summary aggregate + editorial chrome page
  const dailySummarySlug = '2026-11-02';
  writePost({
    slug: dailySummarySlug,
    frontmatter: [
      '---',
      'title: "语音/音乐/音频论文速递 2026-11-02"',
      'date: 2026-11-02',
      'draft: false',
      'paper_digest_page_type: index',
      '---',
      '日报汇总'
    ].join('\n'),
    htmlBody: `<p>今日共收录论文：</p><ul><li><a href=/audio-paper-digest-blog/posts/${arxivSlug}/>第一篇</a></li></ul>`
  });

  const confSummarySlug = 'interspeech2026-summary';
  writePost({
    slug: confSummarySlug,
    frontmatter: [
      '---',
      'title: "Interspeech 2026 论文总览"',
      'date: 2026-09-15',
      'draft: false',
      'paper_digest_page_type: conference',
      '---',
      '会议汇总'
    ].join('\n'),
    htmlBody: `<p>本届会议论文：</p><ul><li><a href="https://nanless.github.io/audio-paper-digest-blog/posts/${confSlug}/">会议论文 A26</a></li></ul>`
  });

  fs.mkdirSync(path.join(buildDir, 'about'), { recursive: true });
  fs.writeFileSync(path.join(buildDir, 'about/index.html'), '<html><body>关于</body></html>');

  const records = [
    {
      title: citationJson.originalTitle,
      titleZh: contextJson.readerTitle,
      originalTitle: citationJson.originalTitle,
      permalink: `/audio-paper-digest-blog/posts/${arxivSlug}/`,
      summary: 'AI 生成的网站短摘要（绝不能冒充原摘要）',
      date: '2026-11-02',
      pageType: 'paper',
      task: taskConcept.zh,
      method: methodConcept.zh,
      primaryTaskId: taskConcept.id,
      primaryMethodId: methodConcept.id,
      score: '8.4',
      arxivId: citationJson.arxivId,
      paperId: `arxiv:${citationJson.arxivId}`,
      sourceKind: 'arxiv',
      identityStatus: 'verified',
      tags: [taskConcept.zh, methodConcept.zh, signalConcept.zh],
      categories: ['论文速递'],
      tagContract: flatHeader.contract,
      tagSchemaFingerprint: flatHeader.schemaFingerprint,
      tagCatalogSha256: tagCatalogObj.registrySha256,
      tagConcepts: [
        { id: taskConcept.id, facet: 'task', label: taskConcept.zh },
        { id: methodConcept.id, facet: 'method', label: methodConcept.zh },
        { id: signalConcept.id, facet: 'signal', label: signalConcept.zh }
      ],
      clientSidecars,
      citation: protocols.record('paper-citation-source', {
        paperKey: `arxiv:${citationJson.arxivId}`,
        paperId: `arxiv:${citationJson.arxivId}`,
        identityStatus: 'verified',
        verified: true,
        complete: false,
        sourceKind: 'arxiv',
        title: citationJson.originalTitle,
        authors: citationJson.authors.map(a => a.name),
        date: '',
        doi: '',
        venue: '',
        arxivId: citationJson.arxivVersionedId || citationJson.arxivId,
        url: citationJson.absUrl,
        sourceUrl: citationJson.absUrl,
        pdfUrl: citationJson.pdfUrl,
        pageUrl: `https://nanless.github.io/audio-paper-digest-blog/posts/${arxivSlug}/`,
        pageType: 'paper'
      })
    },
    {
      title: citationJson.originalTitle,
      titleZh: '第二次专题复盘标题',
      originalTitle: citationJson.originalTitle,
      permalink: `/audio-paper-digest-blog/posts/${duplicateArxivSlug}/`,
      summary: '第二次导读短摘要',
      date: '2026-11-03',
      pageType: 'paper',
      task: taskConcept.zh,
      method: methodConcept.zh,
      score: '8.5',
      arxivId: citationJson.arxivId,
      paperId: `arxiv:${citationJson.arxivId}`,
      sourceKind: 'arxiv',
      identityStatus: 'verified',
      tags: [taskConcept.zh],
      categories: ['论文速递'],
      tagContract: '',
      tagConcepts: [],
      citation: protocols.record('paper-citation-source', {
        paperKey: `arxiv:${citationJson.arxivId}`,
        paperId: `arxiv:${citationJson.arxivId}`,
        identityStatus: 'verified',
        verified: true,
        complete: false,
        sourceKind: 'arxiv',
        title: citationJson.originalTitle,
        authors: citationJson.authors.map(a => a.name),
        date: '',
        doi: '',
        venue: '',
        arxivId: `${citationJson.arxivId}v2`,
        url: `https://arxiv.org/abs/${citationJson.arxivId}v2`,
        sourceUrl: `https://arxiv.org/abs/${citationJson.arxivId}v2`,
        pdfUrl: `https://arxiv.org/pdf/${citationJson.arxivId}v2.pdf`,
        pageUrl: `https://nanless.github.io/audio-paper-digest-blog/posts/${duplicateArxivSlug}/`,
        pageType: 'paper'
      })
    },
    {
      title: 'Neural Codec Language Models for Speech',
      titleZh: '用于语音的神经编解码语言模型',
      originalTitle: 'Neural Codec Language Models for Speech',
      permalink: `/audio-paper-digest-blog/posts/${confSlug}/`,
      summary: '会议论文一句话网站总结',
      date: '2026-09-15',
      pageType: 'paper',
      task: '语音合成',
      method: '语言模型',
      score: '7.9',
      arxivId: '',
      paperId: confPaperId,
      sourceKind: 'conference',
      identityStatus: 'verified',
      tags: ['语音合成'],
      categories: ['interspeech-2026 论文'],
      tagContract: '',
      tagConcepts: [],
      citation: protocols.record('paper-citation-source', {
        paperKey: confPaperId,
        paperId: confPaperId,
        identityStatus: 'verified',
        verified: true,
        complete: false,
        sourceKind: 'conference',
        title: 'Neural Codec Language Models for Speech',
        authors: ['Alice Zhang', 'Bob Li'],
        date: '',
        doi: '10.21437/Interspeech.2026-26',
        venue: 'Interspeech 2026',
        arxivId: '',
        url: 'https://www.isca-archive.org/interspeech_2026/a26.html',
        sourceUrl: 'https://www.isca-archive.org/interspeech_2026/a26.html',
        pdfUrl: 'https://www.isca-archive.org/interspeech_2026/a26.pdf',
        pageUrl: `https://nanless.github.io/audio-paper-digest-blog/posts/${confSlug}/`,
        pageType: 'paper'
      })
    },
    {
      title: '早期中文历史笔记标题',
      titleZh: '早期中文历史笔记标题',
      permalink: `/audio-paper-digest-blog/posts/${unverifiedSlug}/`,
      summary: '早期历史导读摘要',
      date: '2025-12-01',
      pageType: 'paper',
      task: '',
      method: '',
      score: '',
      arxivId: '',
      identityStatus: 'unknown',
      tags: [],
      categories: ['历史归档'],
      tagContract: '',
      tagConcepts: [],
      citation: protocols.record('paper-citation-source', {
        paperKey: `page:/audio-paper-digest-blog/posts/${unverifiedSlug}/`,
        paperId: '',
        identityStatus: 'unknown',
        verified: false,
        complete: false,
        sourceKind: '',
        title: '早期中文历史笔记标题',
        authors: [],
        date: '',
        doi: '',
        venue: '',
        arxivId: '',
        url: '',
        sourceUrl: '',
        pdfUrl: '',
        pageUrl: `https://nanless.github.io/audio-paper-digest-blog/posts/${unverifiedSlug}/`,
        pageType: 'paper'
      })
    },
    {
      title: 'Version Warning Paper',
      titleZh: '版本披露样本论文',
      originalTitle: 'Version Warning Paper',
      permalink: `/audio-paper-digest-blog/posts/${warningSlug}/`,
      summary: '带版本警告的样本',
      date: '2026-08-03',
      pageType: 'paper',
      task: '',
      method: '',
      score: '6.5',
      arxivId: '2607.28687',
      paperId: 'arxiv:2607.28687',
      sourceKind: 'arxiv',
      identityStatus: 'verified',
      tags: [],
      categories: ['论文速递'],
      tagContract: '',
      tagConcepts: [],
      citation: protocols.record('paper-citation-source', {
        paperKey: 'arxiv:2607.28687',
        paperId: 'arxiv:2607.28687',
        identityStatus: 'verified',
        verified: true,
        complete: false,
        sourceKind: 'arxiv',
        title: 'Version Warning Paper',
        authors: [],
        date: '',
        doi: '',
        venue: '',
        arxivId: '2607.28687v1',
        url: 'https://arxiv.org/abs/2607.28687v1',
        sourceUrl: 'https://arxiv.org/abs/2607.28687v1',
        pdfUrl: 'https://arxiv.org/pdf/2607.28687',
        pageUrl: `https://nanless.github.io/audio-paper-digest-blog/posts/${warningSlug}/`,
        pageType: 'paper',
        sourceVersionWarning: warningText,
        provenanceDisclosure: '历史补充封存来源披露',
        pdfVersionBinding: {
          contract: 'sealed-arxiv-pdf-version-binding-v1',
          status: 'versioned-text-unversioned-pdf-url',
          paperId: 'arxiv:2607.28687',
          sourceId: '2607.28687v1',
          pdfRequestedUrl: 'https://arxiv.org/pdf/2607.28687',
          pdfVersion: 'unspecified',
          pdfVersionAuthenticated: false,
          pdfSha256: 'a'.repeat(64),
          sourceManifestSha256: 'b'.repeat(64)
        }
      })
    },
    {
      title: '语音/音乐/音频论文速递 2026-11-02',
      titleZh: '语音/音乐/音频论文速递 2026-11-02',
      permalink: `/audio-paper-digest-blog/posts/${dailySummarySlug}/`,
      summary: '共分析 1 篇论文',
      date: '2026-11-02',
      pageType: 'daily',
      task: '',
      method: '',
      score: '',
      arxivId: '',
      tags: [],
      categories: ['论文速递'],
      tagContract: '',
      tagConcepts: [],
      citation: protocols.record('paper-citation-source', {
        paperKey: `page:/audio-paper-digest-blog/posts/${dailySummarySlug}/`,
        paperId: '',
        identityStatus: 'unknown',
        verified: false,
        complete: false,
        sourceKind: '',
        title: '语音/音乐/音频论文速递 2026-11-02',
        authors: [],
        date: '',
        doi: '',
        venue: '',
        arxivId: '',
        url: '',
        sourceUrl: '',
        pdfUrl: '',
        pageUrl: `https://nanless.github.io/audio-paper-digest-blog/posts/${dailySummarySlug}/`,
        pageType: 'daily'
      })
    },
    {
      title: 'Interspeech 2026 论文总览',
      titleZh: 'Interspeech 2026 论文总览',
      permalink: `/audio-paper-digest-blog/posts/${confSummarySlug}/`,
      summary: '共分析 1 篇会议论文',
      date: '2026-09-15',
      pageType: 'conference',
      task: '',
      method: '',
      score: '',
      arxivId: '',
      tags: [],
      categories: ['会议总览'],
      tagContract: '',
      tagConcepts: [],
      citation: protocols.record('paper-citation-source', {
        paperKey: `page:/audio-paper-digest-blog/posts/${confSummarySlug}/`,
        paperId: '',
        identityStatus: 'unknown',
        verified: false,
        complete: false,
        sourceKind: '',
        title: 'Interspeech 2026 论文总览',
        authors: [],
        date: '',
        doi: '',
        venue: '',
        arxivId: '',
        url: '',
        sourceUrl: '',
        pdfUrl: '',
        pageUrl: `https://nanless.github.io/audio-paper-digest-blog/posts/${confSummarySlug}/`,
        pageType: 'conference'
      })
    },
    {
      title: '关于与使用方法',
      titleZh: '关于与使用方法',
      permalink: '/audio-paper-digest-blog/about/',
      summary: '站点说明页',
      date: '2026-05-01',
      pageType: 'page',
      task: '',
      method: '',
      score: '',
      arxivId: '',
      tags: [],
      categories: [],
      tagContract: '',
      tagConcepts: [],
      citation: protocols.record('paper-citation-source', {
        paperKey: 'page:/audio-paper-digest-blog/about/',
        paperId: '',
        identityStatus: 'unknown',
        verified: false,
        complete: false,
        sourceKind: '',
        title: '关于与使用方法',
        authors: [],
        date: '',
        doi: '',
        venue: '',
        arxivId: '',
        url: '',
        sourceUrl: '',
        pdfUrl: '',
        pageUrl: 'https://nanless.github.io/audio-paper-digest-blog/about/',
        pageType: 'page'
      })
    }
  ];

  if (customize) customize({ repo, buildDir, records, writePost });

  fs.writeFileSync(path.join(buildDir, 'index.json'), JSON.stringify(records), 'utf8');
  shardIndex(buildDir);

  gitExec(repo, ['init']);
  gitExec(repo, ['add', '.']);
  gitExec(repo, ['commit', '-m', 'Initial committed publication snapshot'], {
    GIT_AUTHOR_DATE: '2026-11-18T12:00:00+08:00',
    GIT_COMMITTER_DATE: '2026-11-18T12:00:00+08:00'
  });

  return {
    workspace,
    repo,
    buildDir,
    records,
    citationJson,
    contextJson,
    slugs: {
      arxivSlug,
      duplicateArxivSlug,
      confSlug,
      unverifiedSlug,
      warningSlug,
      dailySummarySlug,
      confSummarySlug
    }
  };
}

test('exports all 5 sample archetypes with honest nulls, distinct paperCount vs appearanceCount, and passes verifyDesktopDetails', t => {
  const fx = createSyntheticRepoFixture(t);
  const summary = exportDesktopDetails(fx.buildDir, fx.repo);
  // 7 research appearances (5 paper pages + 1 daily summary + 1 conference summary; chrome 'page' excluded)
  assert.equal(summary.appearanceCount, 7);
  assert.equal(summary.recordCount, 7);
  // 5 paper pages, 2 of which share arxiv:2610.41381 -> 4 distinct papers!
  assert.equal(summary.paperCount, 4);
  assert.equal(summary.tombstoneCount, 0);

  const verified = verifyDesktopDetails(fx.buildDir);
  assert.equal(verified.snapshotId, summary.snapshotId);
  assert.equal(verified.paperCount, 4);
  assert.equal(verified.appearanceCount, 7);

  const manifest = JSON.parse(fs.readFileSync(path.join(fx.buildDir, 'client/details/manifest.json'), 'utf8'));
  assert.equal(protocols.isCurrentHeader(manifest, MANIFEST_CONTRACT), true);
  assert.equal(manifest.generatedAt, '2026-11-18T12:00:00+08:00');
  const snapshot = JSON.parse(fs.readFileSync(path.join(fx.buildDir, manifest.snapshot.url), 'utf8'));
  assert.equal(protocols.isCurrentHeader(snapshot, SNAPSHOT_CONTRACT), true);
  assert.deepEqual(snapshot.tombstoneShards, []);

  const rows = JSON.parse(fs.readFileSync(path.join(fx.buildDir, snapshot.catalogShards[0].url), 'utf8'));
  const byApp = new Map(rows.map(r => [r.appearanceId, r]));

  // 1. Daily arXiv paper with sidecars
  const arxivDetail = JSON.parse(fs.readFileSync(path.join(fx.buildDir, byApp.get(`posts/${fx.slugs.arxivSlug}/`).detail.url), 'utf8'));
  assert.equal(protocols.isCurrentHeader(arxivDetail, DETAIL_CONTRACT), true);
  assert.equal(arxivDetail.paperId, `arxiv:${fx.citationJson.arxivId}`);
  assert.equal(arxivDetail.sourceVersion.sourceVersionId, `arxiv:${fx.citationJson.arxivVersionedId}`);
  assert.equal(arxivDetail.titles.originalTitle, fx.citationJson.originalTitle);
  assert.equal(arxivDetail.titles.readerTitle, fx.contextJson.readerTitle);
  assert.equal(arxivDetail.abstract, fx.contextJson.abstract);
  assert.equal(arxivDetail.dates.paperPublishedAt, null);
  assert.equal(arxivDetail.dates.blogPublishedAt, '2026-11-02');
  assert.equal(arxivDetail.dates.articleUpdatedAt, '2026-11-03T10:30:00+08:00');
  assert.equal(arxivDetail.sidecars.available, true);
  const bundledImg = arxivDetail.resources.find(r => r.kind === 'image');
  assert.equal(bundledImg.availability, 'bundled');
  assert.equal(bundledImg.descriptor.bytes, TINY_PNG.length);
  assert.equal(bundledImg.descriptor.sha256, sha256(TINY_PNG));
  assert.ok(arxivDetail.resources.some(r => r.kind === 'math-renderer' && r.availability === 'external'));
  assert.ok(arxivDetail.resources.some(r => r.kind === 'pdf' && r.availability === 'external' && r.descriptor === null));
  const arxivHtml = fs.readFileSync(path.join(fx.buildDir, arxivDetail.articleRevision.articleDescriptor.url), 'utf8');
  assert.match(arxivHtml, /onset=0\.5/);
  assert.match(arxivHtml, /0 &lt; w_i &lt; 1/);
  assert.doesNotMatch(arxivHtml, /window\.siteChrome/);

  // 2. Conference paper: evidenced vs unavailable affiliation, abstract is null (never AI summary), missing resource
  const confDetail = JSON.parse(fs.readFileSync(path.join(fx.buildDir, byApp.get(`posts/${fx.slugs.confSlug}/`).detail.url), 'utf8'));
  assert.equal(confDetail.abstract, null);
  assert.equal(confDetail.authors.length, 2);
  assert.deepEqual(confDetail.authors[0].affiliations, ['Tsinghua University']);
  assert.equal(confDetail.authors[0].affiliationStatus, 'evidenced');
  assert.deepEqual(confDetail.authors[1].affiliations, []);
  assert.equal(confDetail.authors[1].affiliationStatus, 'unavailable');
  assert.ok(confDetail.authors[1].affiliationNote.includes('机构信息未能'));
  assert.equal(confDetail.authors[0].givenName, null);
  assert.equal(confDetail.authors[0].orcid, null);
  assert.ok(confDetail.citation.missingFields.includes('paperPublishedAt'));
  assert.equal(confDetail.citation.fieldStatus.doi.status, 'available');
  assert.equal(confDetail.citation.fieldStatus.paperPublishedAt.status, 'missing');
  const missingImg = confDetail.resources.find(r => r.kind === 'image');
  assert.equal(missingImg.availability, 'missing');
  assert.equal(missingImg.descriptor, null);

  // 3. Historical unverified paper: paperId null, sourceVersionId null, Chinese title not mislabeled as originalTitle
  const unverifiedDetail = JSON.parse(fs.readFileSync(path.join(fx.buildDir, byApp.get(`posts/${fx.slugs.unverifiedSlug}/`).detail.url), 'utf8'));
  assert.equal(unverifiedDetail.paperId, null);
  assert.equal(unverifiedDetail.sourceVersion.sourceVersionId, null);
  assert.equal(unverifiedDetail.identityStatus, 'unknown');
  assert.equal(unverifiedDetail.titles.originalTitle, null);
  assert.equal(unverifiedDetail.titles.readerTitle, '早期中文历史笔记标题');
  assert.equal(unverifiedDetail.citation.fieldStatus.paperId.status, 'unverified');

  // 4. Daily & conference aggregate summaries: aggregate-page, paperId null, member links populated
  const dailyDetail = JSON.parse(fs.readFileSync(path.join(fx.buildDir, byApp.get(`posts/${fx.slugs.dailySummarySlug}/`).detail.url), 'utf8'));
  assert.equal(dailyDetail.paperId, null);
  assert.equal(dailyDetail.identityStatus, 'aggregate-page');
  assert.deepEqual(dailyDetail.appearance.memberAppearanceIds, [`posts/${fx.slugs.arxivSlug}/`]);
  assert.deepEqual(dailyDetail.appearance.memberPaperIds, [`arxiv:${fx.citationJson.arxivId}`]);

  const confSumDetail = JSON.parse(fs.readFileSync(path.join(fx.buildDir, byApp.get(`posts/${fx.slugs.confSummarySlug}/`).detail.url), 'utf8'));
  assert.equal(confSumDetail.paperId, null);
  assert.equal(confSumDetail.identityStatus, 'aggregate-page');
  assert.deepEqual(confSumDetail.appearance.memberAppearanceIds, [`posts/${fx.slugs.confSlug}/`]);
  assert.deepEqual(confSumDetail.appearance.memberPaperIds, ['conference:interspeech:2026:conference-paper-id:a26_interspeech']);

  // 5. Source-version warning preserved verbatim; unauthenticated PDF URL gets sha-bound sourceVersionId, not plain v1
  const warnDetail = JSON.parse(fs.readFileSync(path.join(fx.buildDir, byApp.get(`posts/${fx.slugs.warningSlug}/`).detail.url), 'utf8'));
  assert.ok(warnDetail.sourceVersion.sourceVersionWarning.includes('2607.28687v1'));
  assert.equal(warnDetail.sourceVersion.provenanceDisclosure, '历史补充封存来源披露');
  assert.equal(warnDetail.sourceVersion.pdfSha256, 'a'.repeat(64));
  assert.equal(warnDetail.sourceVersion.sourceVersionId, `arxiv:2607.28687@sha256:${'a'.repeat(64)}`);
});

test('rejects dirty uncommitted content/posts, data, or static files and draft pages', t => {
  const fx = createSyntheticRepoFixture(t);
  const dirtyPost = path.join(fx.repo, 'content/posts/uncommitted-draft.md');
  fs.writeFileSync(dirtyPost, '---\ntitle: "Dirty"\n---\n', 'utf8');
  assert.throws(() => exportDesktopDetails(fx.buildDir, fx.repo), /存在未提交改动或未跟踪文件/);
  fs.unlinkSync(dirtyPost);

  // Dirty static file
  const dirtyStatic = path.join(fx.repo, 'static/untracked.txt');
  fs.writeFileSync(dirtyStatic, 'untracked', 'utf8');
  assert.throws(() => exportDesktopDetails(fx.buildDir, fx.repo), /存在未提交改动或未跟踪文件/);
  fs.unlinkSync(dirtyStatic);

  // Dirty layouts/ or hugo.yaml must also fail closed
  fs.mkdirSync(path.join(fx.repo, 'layouts'), { recursive: true });
  const dirtyLayout = path.join(fx.repo, 'layouts/single.html');
  fs.writeFileSync(dirtyLayout, '<div>dirty</div>', 'utf8');
  assert.throws(() => exportDesktopDetails(fx.buildDir, fx.repo), /存在未提交改动或未跟踪文件/);
  fs.unlinkSync(dirtyLayout);

  const dirtyHugoCfg = path.join(fx.repo, 'hugo.yaml');
  fs.writeFileSync(dirtyHugoCfg, 'baseURL: "https://example.invalid/"\n', 'utf8');
  assert.throws(() => exportDesktopDetails(fx.buildDir, fx.repo), /存在未提交改动或未跟踪文件/);
  fs.unlinkSync(dirtyHugoCfg);

  // Full-repo porcelain check: untracked file at repo root must also fail closed
  const dirtyRootNote = path.join(fx.repo, 'uncommitted-root-scratch.json');
  fs.writeFileSync(dirtyRootNote, '{"scratch":true}\n', 'utf8');
  assert.throws(() => exportDesktopDetails(fx.buildDir, fx.repo), /存在未提交改动或未跟踪文件/);
  fs.unlinkSync(dirtyRootNote);

  // Explicit sourceCommit differing from HEAD must fail closed in production mode
  assert.throws(
    () => exportDesktopDetails(fx.buildDir, fx.repo, { sourceCommit: 'a'.repeat(40) }),
    /与当前仓库 HEAD .* 不一致/
  );
});

test('frontMatterMap fails closed on missing source markdown, custom-slug/url drafts, future publishDate, and expired expiryDate', t => {
  // 1. Missing source .md file for an index record
  {
    const fx = createSyntheticRepoFixture(t);
    fs.unlinkSync(path.join(fx.repo, 'content/posts', `${fx.slugs.unverifiedSlug}.md`));
    assert.throws(() => exportDesktopDetails(fx.buildDir, fx.repo, { allowDirty: true }), /缺少对应的已提交源文章 front matter/);
  }

  // 2. Draft with custom slug matching a built post route
  {
    const fx = createSyntheticRepoFixture(t);
    fs.unlinkSync(path.join(fx.repo, 'content/posts', `${fx.slugs.unverifiedSlug}.md`));
    fs.writeFileSync(
      path.join(fx.repo, 'content/posts/internal-draft-filename.md'),
      `---\ntitle: "Draft"\ndate: 2025-12-01\ndraft: true\nslug: "${fx.slugs.unverifiedSlug}"\n---\n`,
      'utf8'
    );
    assert.throws(() => exportDesktopDetails(fx.buildDir, fx.repo, { allowDirty: true }), /草稿页面不得进入公开详情导出/);
  }

  // 3. Future publishDate and expired expiryDate
  {
    const fx = createSyntheticRepoFixture(t);
    const mdFile = path.join(fx.repo, 'content/posts', `${fx.slugs.unverifiedSlug}.md`);
    fs.writeFileSync(
      mdFile,
      `---\ntitle: "Future"\ndate: 2025-12-01\npublishDate: 2099-01-01T00:00:00+08:00\ndraft: false\n---\n`,
      'utf8'
    );
    assert.throws(() => exportDesktopDetails(fx.buildDir, fx.repo, { allowDirty: true }), /未来待发布页面/);

    fs.writeFileSync(
      mdFile,
      `---\ntitle: "Expired"\ndate: 2025-12-01\nexpiryDate: 2026-01-01T00:00:00+08:00\ndraft: false\n---\n`,
      'utf8'
    );
    assert.throws(() => exportDesktopDetails(fx.buildDir, fx.repo, { allowDirty: true }), /已过期页面/);
  }
});

test('determinism: two exports of the same commit produce identical snapshotId, manifest bytes, and zero self-SHA', t => {
  const fx = createSyntheticRepoFixture(t);
  const buildDir2 = path.join(fx.workspace, 'public-second');
  fs.cpSync(fx.buildDir, buildDir2, { recursive: true });

  const first = exportDesktopDetails(fx.buildDir, fx.repo);
  const second = exportDesktopDetails(buildDir2, fx.repo);
  assert.equal(first.snapshotId, second.snapshotId);

  const manifestBytes1 = fs.readFileSync(path.join(fx.buildDir, 'client/details/manifest.json'));
  const manifestBytes2 = fs.readFileSync(path.join(buildDir2, 'client/details/manifest.json'));
  assert.deepEqual(manifestBytes1, manifestBytes2);
  assert.equal(manifestBytes1.toString('utf8').includes(sha256(manifestBytes1)), false);

  const snapshotBytes1 = fs.readFileSync(path.join(fx.buildDir, `client/details/snapshots/${first.snapshotId}.json`));
  const snapshotBytes2 = fs.readFileSync(path.join(buildDir2, `client/details/snapshots/${second.snapshotId}.json`));
  assert.deepEqual(snapshotBytes1, snapshotBytes2);
  assert.equal(snapshotBytes1.toString('utf8').includes(first.snapshotId), false);
});

test('tombstone lifecycle: site-removed, retracted with evidenceUrl, replaced, and restoration exiting tombstones', t => {
  const fx = createSyntheticRepoFixture(t);
  const rebuildSearchShards = records => {
    fs.rmSync(path.join(fx.buildDir, 'client/index.json'), { force: true });
    fs.rmSync(path.join(fx.buildDir, 'client/search-index'), { recursive: true, force: true });
    fs.rmSync(path.join(fx.buildDir, 'search-index'), { recursive: true, force: true });
    fs.writeFileSync(path.join(fx.buildDir, 'index.json'), JSON.stringify(records), 'utf8');
    shardIndex(fx.buildDir);
  };

  const snap1 = exportDesktopDetails(fx.buildDir, fx.repo);
  const snap1Path = path.join(fx.buildDir, `client/details/snapshots/${snap1.snapshotId}.json`);

  // Retracted without evidenceUrl must fail closed
  const withoutUnverified = fx.records.filter(r => !r.permalink.includes(fx.slugs.unverifiedSlug));
  rebuildSearchShards(withoutUnverified);
  assert.throws(
    () => exportDesktopDetails(fx.buildDir, fx.repo, {
      allowDirty: true,
      previousSnapshotPath: snap1Path,
      removalNotices: { [`posts/${fx.slugs.unverifiedSlug}/`]: { reason: 'retracted' } }
    }),
    /evidenceUrl/
  );

  // Replaced pointing to a non-existent appearanceId must fail closed
  assert.throws(
    () => exportDesktopDetails(fx.buildDir, fx.repo, {
      allowDirty: true,
      previousSnapshotPath: snap1Path,
      removalNotices: {
        [`posts/${fx.slugs.unverifiedSlug}/`]: {
          reason: 'replaced',
          replacementAppearanceId: 'posts/nonexistent-page/'
        }
      }
    }),
    /replacementAppearanceId/
  );

  // Remove 2 pages: one replaced by active arxivSlug, one formally retracted with HTTPS evidenceUrl + note
  const remaining = fx.records.filter(
    r => !r.permalink.includes(fx.slugs.unverifiedSlug) && !r.permalink.includes(fx.slugs.duplicateArxivSlug)
  );
  rebuildSearchShards(remaining);
  const snap2 = exportDesktopDetails(fx.buildDir, fx.repo, {
    allowDirty: true,
    generatedAt: '2026-11-19T08:00:00+08:00',
    previousSnapshotPath: snap1Path,
    removalNotices: {
      [`posts/${fx.slugs.unverifiedSlug}/`]: {
        reason: 'replaced',
        replacementAppearanceId: `posts/${fx.slugs.arxivSlug}/`
      },
      [`posts/${fx.slugs.duplicateArxivSlug}/`]: {
        reason: 'retracted',
        evidenceUrl: 'https://arxiv.org/abs/2610.41381v2',
        note: '作者发布撤稿声明'
      }
    }
  });
  assert.equal(snap2.tombstoneCount, 2);
  assert.equal(snap2.appearanceCount, 5);
  verifyDesktopDetails(fx.buildDir);

  const snap2Path = path.join(fx.buildDir, `client/details/snapshots/${snap2.snapshotId}.json`);
  const snap2Obj = JSON.parse(fs.readFileSync(snap2Path, 'utf8'));
  const tombs2 = JSON.parse(fs.readFileSync(path.join(fx.buildDir, snap2Obj.tombstoneShards[0].url), 'utf8'));
  const retractedTomb = tombs2.find(x => x.appearanceId === `posts/${fx.slugs.duplicateArxivSlug}/`);
  const replacedTomb = tombs2.find(x => x.appearanceId === `posts/${fx.slugs.unverifiedSlug}/`);
  assert.equal(retractedTomb.reason, 'retracted');
  assert.equal(retractedTomb.evidenceUrl, 'https://arxiv.org/abs/2610.41381v2');
  assert.equal(replacedTomb.reason, 'replaced');
  assert.equal(replacedTomb.replacementAppearanceId, `posts/${fx.slugs.arxivSlug}/`);

  // Also test site-removed default when warningSlug is removed without explicit notice, while restoring unverifiedSlug!
  const restoredAndSiteRemoved = fx.records.filter(
    r => !r.permalink.includes(fx.slugs.duplicateArxivSlug) && !r.permalink.includes(fx.slugs.warningSlug)
  );
  rebuildSearchShards(restoredAndSiteRemoved);
  const snap3 = exportDesktopDetails(fx.buildDir, fx.repo, {
    allowDirty: true,
    generatedAt: '2026-11-20T08:00:00+08:00',
    previousSnapshotPath: snap2Path
  });
  // unverifiedSlug exited tombstones upon restoration; duplicateArxivSlug stayed tombstoned; warningSlug became site-removed!
  assert.equal(snap3.tombstoneCount, 2);
  assert.equal(snap3.appearanceCount, 5);
  verifyDesktopDetails(fx.buildDir);
  const snap3Obj = JSON.parse(fs.readFileSync(path.join(fx.buildDir, `client/details/snapshots/${snap3.snapshotId}.json`), 'utf8'));
  const tombs3 = JSON.parse(fs.readFileSync(path.join(fx.buildDir, snap3Obj.tombstoneShards[0].url), 'utf8'));
  assert.equal(tombs3.some(x => x.appearanceId === `posts/${fx.slugs.unverifiedSlug}/`), false);
  assert.equal(tombs3.find(x => x.appearanceId === `posts/${fx.slugs.warningSlug}/`).reason, 'site-removed');
  assert.equal(tombs3.find(x => x.appearanceId === `posts/${fx.slugs.duplicateArxivSlug}/`).reason, 'retracted');
});

test('HTML5 parser-differential, mXSS, SVG entity, srcset/poster/ping, and TeX delimiter attacks are neutralized and rejected', () => {
  const b64EvilSvg = Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg"><a href="&#x6a;avascript:alert(1)"><text>x</text></a></svg>',
    'utf8'
  ).toString('base64');
  const b64SetSvg = Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg"><set attributeName="href" to="javascript:alert(1)"/></svg>',
    'utf8'
  ).toString('base64');
  const b64SafeSvg = Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4"/></svg>',
    'utf8'
  ).toString('base64');
  const b64CommentSvg = Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><!-- comment --><circle cx="5" cy="5" r="4"/></svg>',
    'utf8'
  ).toString('base64');
  const b64UnquotedSvg = Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox=0><circle cx="5" cy="5" r="4"/></svg>',
    'utf8'
  ).toString('base64');
  const b64Png = TINY_PNG.toString('base64');

  const dirty = [
    '<div id="article-body">',
    '<p onclick="evil()" onmouseover=\'bad()\'>安全文本 onset=0.5</p>',
    // WHATWG HTML5 abrupt and bang comment closings (§13.2.5.42–50)
    '<!--><script>alert("abrupt-1")</script><em>after-abrupt-1</em>-->',
    '<!---><script>alert("abrupt-2")</script><em>after-abrupt-2</em>-->',
    '<!-- ok --!><script>alert("bang-close")</script><em>after-bang</em>-->',
    // HTML5 unquoted attribute parser-differential vectors
    '<p data-x=a"b="><script>alert("unquoted-quote")</script>"></p>',
    '<p data-a=="><script>alert("double-eq")</script>"></p>',
    // mXSS rawtext / RCDATA / container tags
    '<xmp><img src=x onerror=alert(1)></xmp>',
    '<noscript><style></noscript><img src=x onerror=alert(1)></style></noscript>',
    '<title><img src=x onerror=alert(1)></title>',
    '<template><script>alert(1)</script></template>',
    '<svg><set attributeName="href" to="javascript:alert(1)"/><a href="x">svg</a></svg>',
    // Non-allowlisted LLM tokens escaped into literal text
    '<p>序列标记 <bos> 与 <image> 以及 (<audio>)×T</p>',
    // Entity-encoded, leading-zero, control-char, surrogate, ping, data: on <a href>, zotero://, smb://, // protocol-relative
    '<a href="&#x000006A;avascript:alert(1)">leading-zero-js</a>',
    '<a href="java&#x09;script:alert(1)">tab-js</a>',
    '<a href="&#0;javascript:alert(1)">nul-js</a>',
    '<a href="&#xD800;javascript:alert(1)">surrogate-js</a>',
    '<a href="zotero://open-pdf/library/items/ABCD1234">zotero-uri</a>',
    '<a href="smb://evil.example/share/steal">smb-uri</a>',
    '<a href="//evil.example/protocol-relative">proto-rel-link</a>',
    '<img src="//evil.example/a.png" alt="proto-rel-img">',
    '<a href="mailto:author@example.edu">valid-mailto</a>',
    `<a href="data:image/png;base64,${b64Png}" ping="https://evil.example/ping">data-anchor</a>`,
    '<img src="https://arxiv.org/html/2610.41381v1/ok.png" srcset="file:///etc/passwd 1x, https://arxiv.org/html/2610.41381v1/ok2.png 2x" alt="bad-srcset">',
    '<img src="https://arxiv.org/html/2610.41381v1/ok.png" srcset="https://arxiv.org/html/2610.41381v1/2x.png 2x" alt="good-srcset">',
    '<video controls src="https://example.com/demo.mp4" poster="file:///etc/passwd"></video>',
    '<video controls src="https://example.com/demo2.mp4" poster="https://example.com/poster.png"></video>',
    `<img src="data:image/svg+xml;base64,${b64EvilSvg}" alt="b64-evil-svg">`,
    `<img src="data:image/svg+xml;base64,${b64SetSvg}" alt="b64-set-svg">`,
    `<img src="data:image/svg+xml;base64,${b64CommentSvg}" alt="b64-comment-svg">`,
    `<img src="data:image/svg+xml;base64,${b64UnquotedSvg}" alt="b64-unquoted-svg">`,
    `<img src="data:image/svg+xml;base64,${b64SafeSvg}" alt="b64-safe-svg">`,
    // TeX delimiter ordering: must NOT turn <script>/<style> into &lt;style> or break <span>\(</span><em>x</em><span>\)</span>
    '\\(<script>evil()</script>\\)',
    '\\(<style>body{display:none}</style>\\)',
    '<span>\\(</span><em>x</em><span>\\)</span>',
    '<td style="text-align:center">ok-cell</td>',
    '<td style="background:url(javascript:alert(1))">bad-cell</td>',
    '</div>'
  ].join('');

  const clean = sanitizeArticleHtml(dirty, 'adversarial');
  assert.doesNotMatch(
    clean,
    /<!--|<script|<style|body\{display:none\}|alert\(|<xmp|<noscript|<title|<template|<svg|<set|<bos>|<image>|<audio>|onerror|onclick|onmouseover|javascript:|file:|zotero:|smb:|\/\/evil\.example|ping=|b64-evil-svg[^>]*src=|b64-set-svg[^>]*src=|b64-comment-svg[^>]*src=|b64-unquoted-svg[^>]*src=|bad-srcset[^>]*srcset=|demo\.mp4"[^>]*poster=|data-anchor[^>]*href=/i
  );
  assert.match(clean, /<em>after-abrupt-1<\/em>/);
  assert.match(clean, /<em>after-abrupt-2<\/em>/);
  assert.match(clean, /<em>after-bang<\/em>/);
  assert.match(clean, /href="mailto:author@example\.edu"/);
  assert.match(clean, /&lt;bos&gt;/);
  assert.match(clean, /&lt;image&gt;/);
  assert.match(clean, /\(&lt;audio&gt;\)×T/);
  assert.match(clean, /<span>\\\(<\/span><em>x<\/em><span>\\\)<\/span>/);
  assert.match(clean, /\\\(\\\)\\\(\\\)/);
  assert.match(clean, /<td style="text-align:center">ok-cell<\/td>/);
  assert.match(clean, /<td>bad-cell<\/td>/);
  assert.match(clean, /<img src="data:image\/svg\+xml;base64,[^"]+" alt="b64-safe-svg">/);

  const checked = assertSafeArticleHtml(clean, 'adversarial');
  // Verify good srcset 2x URL and video poster URL are tracked in mediaElements for offline resource accounting
  assert.ok(checked.mediaElements.some(m => m.src === 'https://arxiv.org/html/2610.41381v1/2x.png'));
  assert.ok(checked.mediaElements.some(m => m.src === 'https://example.com/poster.png'));

  for (const forbidden of [
    '<div><!-- any comment --></div>',
    '<div><!--><script>alert(1)</script>--></div>',
    '<div><!---><script>alert(1)</script>--></div>',
    '<div><!-- ok --!><script>alert(1)</script>--></div>',
    '<div><script>x()</script></div>',
    '<div><p onclick="x()">hi</p></div>',
    '<div><xmp>raw</xmp></div>',
    '<div><svg><set attributeName="href" to="javascript:alert(1)"/></svg></div>',
    '<div><bos>token</bos></div>',
    '<div><p data-x=a"b=">unquoted</p></div>',
    '<div><a href="https://example.com" ping="https://tracker.invalid">x</a></div>',
    `<div><a href="data:image/png;base64,${b64Png}">x</a></div>`,
    '<div><a href="zotero://open-pdf/library/items/1234">zotero</a></div>',
    '<div><a href="smb://evil.example/share">smb</a></div>',
    '<div><img src="//evil.example/a.png" alt="proto-rel"></div>',
    '<div><img src="mailto:user@example.com" alt="mailto-img"></div>',
    '<div><img src="https://example.com/a.png" srcset="file:///etc/passwd 1x" alt="x"></div>',
    '<div><video controls poster="file:///etc/passwd"></video></div>',
    `<div><img src="data:image/svg+xml;base64,${b64EvilSvg}" alt="x"></div>`,
    `<div><img src="data:image/svg+xml;base64,${b64CommentSvg}" alt="x"></div>`,
    `<div><img src="data:image/svg+xml;base64,${b64UnquotedSvg}" alt="x"></div>`,
    '<div><td style="color:red">x</td></div>'
  ]) {
    assert.throws(() => assertSafeArticleHtml(forbidden, 'bad'));
  }
});

test('verifyDesktopDetails fails closed on tampered SHA, wrong byte count, mixed sourceCommit, forbidden HTML, or unknown schemaFingerprint', t => {
  const fx = createSyntheticRepoFixture(t);
  exportDesktopDetails(fx.buildDir, fx.repo);

  function withCopy(mutate) {
    const copyDir = fs.mkdtempSync(path.join(os.tmpdir(), 'desktop-verify-neg-'));
    try {
      fs.cpSync(fx.buildDir, copyDir, { recursive: true });
      mutate(copyDir);
      assert.throws(() => verifyDesktopDetails(copyDir));
    } finally {
      fs.rmSync(copyDir, { recursive: true, force: true });
    }
  }

  // 1. Tampered detail bytes without updating SHA
  withCopy(dir => {
    const papersDir = path.join(dir, 'client/details/papers');
    const first = fs.readdirSync(papersDir)[0];
    fs.appendFileSync(path.join(papersDir, first), ' ');
  });

  // 2. Wrong byte count in manifest.snapshot
  withCopy(dir => {
    const mfPath = path.join(dir, 'client/details/manifest.json');
    const mf = JSON.parse(fs.readFileSync(mfPath, 'utf8'));
    mf.snapshot.bytes += 1;
    fs.writeFileSync(mfPath, JSON.stringify(mf));
  });

  // 3. Mixed sourceCommit between manifest and snapshot
  withCopy(dir => {
    const mfPath = path.join(dir, 'client/details/manifest.json');
    const mf = JSON.parse(fs.readFileSync(mfPath, 'utf8'));
    mf.sourceCommit = 'f'.repeat(40);
    fs.writeFileSync(mfPath, JSON.stringify(mf));
  });

  // 4. Unknown schemaFingerprint on manifest
  withCopy(dir => {
    const mfPath = path.join(dir, 'client/details/manifest.json');
    const mf = JSON.parse(fs.readFileSync(mfPath, 'utf8'));
    mf.schemaFingerprint = '0'.repeat(64);
    fs.writeFileSync(mfPath, JSON.stringify(mf));
  });

  // 5. Forbidden <script> / onclick= injected into article HTML EVEN WITH recomputed SHA chain!
  withCopy(dir => {
    const mfPath = path.join(dir, 'client/details/manifest.json');
    const mf = JSON.parse(fs.readFileSync(mfPath, 'utf8'));
    const snapPath = path.join(dir, mf.snapshot.url);
    const snap = JSON.parse(fs.readFileSync(snapPath, 'utf8'));
    const shardPath = path.join(dir, snap.catalogShards[0].url);
    const rows = JSON.parse(fs.readFileSync(shardPath, 'utf8'));
    const detailOldPath = path.join(dir, rows[0].detail.url);
    const detail = JSON.parse(fs.readFileSync(detailOldPath, 'utf8'));

    const maliciousHtml = Buffer.from('<div id="article-body"><p onclick="pwn()">x</p><script>pwn()</script></div>', 'utf8');
    const maliciousArtSha = sha256(maliciousHtml);
    const maliciousArtUrl = `client/details/articles/${maliciousArtSha}.html`;
    fs.writeFileSync(path.join(dir, maliciousArtUrl), maliciousHtml);
    fs.unlinkSync(path.join(dir, detail.articleRevision.articleDescriptor.url));

    detail.articleRevision.articleDescriptor = {
      url: maliciousArtUrl,
      bytes: maliciousHtml.length,
      sha256: maliciousArtSha
    };
    const detailBytes = Buffer.from(JSON.stringify(detail), 'utf8');
    const detailSha = sha256(detailBytes);
    const detailUrl = `client/details/papers/${detailSha}.json`;
    fs.writeFileSync(path.join(dir, detailUrl), detailBytes);
    fs.unlinkSync(detailOldPath);

    rows[0].detail = { url: detailUrl, bytes: detailBytes.length, sha256: detailSha };
    const shardBytes = Buffer.from(JSON.stringify(rows), 'utf8');
    const shardSha = sha256(shardBytes);
    const shardUrl = `client/details/catalog/${shardSha}.json`;
    fs.writeFileSync(path.join(dir, shardUrl), shardBytes);
    fs.unlinkSync(shardPath);

    snap.catalogShards[0] = { url: shardUrl, bytes: shardBytes.length, sha256: shardSha, recordCount: rows.length };
    const snapBytes = Buffer.from(JSON.stringify(snap), 'utf8');
    const snapSha = sha256(snapBytes);
    const snapUrl = `client/details/snapshots/${snapSha}.json`;
    fs.writeFileSync(path.join(dir, snapUrl), snapBytes);
    fs.unlinkSync(snapPath);

    mf.snapshotId = snapSha;
    mf.snapshot = { url: snapUrl, bytes: snapBytes.length, sha256: snapSha };
    fs.writeFileSync(mfPath, JSON.stringify(mf));
  });

  // 6. Rogue unreferenced content-addressed file under client/details/articles/ (valid SHA + safe HTML, but unreferenced!)
  withCopy(dir => {
    const rogueBytes = Buffer.from('<div id="article-body"><p>Unreferenced orphan article</p></div>', 'utf8');
    const rogueSha = sha256(rogueBytes);
    fs.writeFileSync(path.join(dir, `client/details/articles/${rogueSha}.html`), rogueBytes);
  });

  // 7. Re-exporting prunes any stale unreferenced files from client/details/
  const rogueBytes = Buffer.from('<div id="article-body"><p>Stale prior file</p></div>', 'utf8');
  const rogueSha = sha256(rogueBytes);
  const roguePath = path.join(fx.buildDir, `client/details/articles/${rogueSha}.html`);
  fs.writeFileSync(roguePath, rogueBytes);
  assert.throws(() => verifyDesktopDetails(fx.buildDir), /未被当前快照引用/);
  exportDesktopDetails(fx.buildDir, fx.repo);
  assert.equal(fs.existsSync(roguePath), false);
  assert.doesNotThrow(() => verifyDesktopDetails(fx.buildDir));
});
