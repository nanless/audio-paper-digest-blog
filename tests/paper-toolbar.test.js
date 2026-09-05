const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join, resolve } = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const repo = resolve(__dirname, '..');

function renderFixture(frontmatter, body = '## 方法\n\n正文。') {
  const temp = mkdtempSync(join(tmpdir(), 'paper-toolbar-'));
  const content = join(temp, 'content', 'posts');
  const output = join(temp, 'public');
  mkdirSync(content, { recursive: true });
  writeFileSync(join(temp, 'hugo.yaml'), [
    'baseURL: "https://example.test/audio-paper-digest-blog/"',
    'languageCode: "zh-CN"',
    'defaultContentLanguage: "zh-cn"',
    'theme: "PaperMod"',
    'disableKinds: [home, section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]',
    'staticDir: []',
    'params:',
    '  env: production',
    '  ShowToc: false',
    '  ShowShareButtons: false',
    '  comments: false',
    '  assets:',
    '    disableFingerprinting: false',
    '',
  ].join('\n'));
  writeFileSync(join(content, 'fixture.md'), `---\n${frontmatter}\n---\n\n${body}\n`);
  try {
    execFileSync('hugo', [
      '--source', repo,
      '--config', join(temp, 'hugo.yaml'),
      '--contentDir', join(temp, 'content'),
      '--destination', output,
      '--cleanDestinationDir',
      '--minify',
    ], { stdio: 'pipe' });
    return readFileSync(join(output, 'posts', 'fixture', 'index.html'), 'utf8');
  } finally {
    rmSync(temp, { recursive: true, force: true });
  }
}

function companionDataUrl(html) {
  const encoded = html.match(/data-companion-url="([^"]+)"/)?.[1]
    || html.match(/data-companion-url=([^ >]+)/)?.[1];
  assert.ok(encoded, 'selected-text button must carry a companion base URL');
  return new URL(encoded.replaceAll('&amp;', '&'));
}

function clickSelection({
  baseUrl,
  selectedText,
  popupResult,
  captureBeforeClick = false,
  outsideArticle = false,
}) {
  const source = readFileSync(join(repo, 'assets', 'js', 'paper-toolbar.js'), 'utf8');
  const status = { textContent: '' };
  let clickHandler;
  const handlers = {};
  const field = { value: captureBeforeClick ? '' : selectedText };
  const bodyNode = {};
  const content = { contains: (node) => node === bodyNode };
  const button = {
    dataset: { companionUrl: baseUrl },
    addEventListener(type, handler) {
      if (type === 'click') clickHandler = handler;
    },
  };
  const toolbar = {
    querySelector(selector) {
      if (selector === '.paper-tools__status') return status;
      if (selector === '.paper-tool--selection') return button;
      if (selector === '.paper-tools__selected-text') return field;
      return null;
    },
    querySelectorAll() { return []; },
    closest() { return { querySelector: () => content }; },
  };
  const opened = [];
  const popup = popupResult === undefined ? {
    opener: {},
    location: { replace(target) { this.targets.push(target); }, targets: [] },
    close() { this.closed = true; },
  } : popupResult;
  const window = {
    clearTimeout() {},
    setTimeout() { return 1; },
    getSelection() { return {
      toString: () => selectedText, rangeCount: 1, isCollapsed: false,
      anchorNode: outsideArticle ? {} : bodyNode,
      focusNode: bodyNode,
    }; },
    open(...args) {
      opened.push(args);
      return popup;
    },
    isSecureContext: true,
  };
  const document = {
    querySelectorAll(selector) { return selector === '.paper-tools' ? [toolbar] : []; },
    addEventListener(type, handler) { handlers[type] = handler; },
  };
  vm.runInNewContext(source, {
    document,
    navigator: {},
    window,
    URL,
    Set,
  });
  assert.equal(typeof clickHandler, 'function');
  if (captureBeforeClick) {
    handlers.selectionchange();
    selectedText = '';
    handlers.selectionchange();
  }
  clickHandler();
  return { opened, status: status.textContent, popupResult: popup };
}

const sidecarRoot = '/audio-paper-digest-blog/data/papers/2026-09-05/2609-01234/';
const workbenchFrontmatter = [
  'title: "Blog analysis title"',
  'date: 2026-09-05',
  'draft: false',
  'description: "Evidence-bound analysis."',
  'tags: ["speech", "compression"]',
  'categories: ["论文速递"]',
  'hiddenInHomeList: true',
  'paper_digest_page_type: paper',
  'paper_digest_workbench_contract: researcher-workbench-v1',
  'paper_digest_original_title: "Paper & Evidence"',
  'paper_digest_arxiv_id: "2609.01234"',
  'paper_digest_arxiv_version: 2',
  'paper_digest_arxiv_versioned_id: "2609.01234v2"',
  'paper_digest_citation_date: "2026-09-03"',
  'paper_digest_authors: [{"name":"Researcher A","affiliations":["Institute A"]}]',
  `paper_digest_sidecars: {"citation.json":{"url":"${sidecarRoot}citation.json","sha256":"${'a'.repeat(64)}"},"citation.bib":{"url":"${sidecarRoot}citation.bib","sha256":"${'b'.repeat(64)}"},"citation.ris":{"url":"${sidecarRoot}citation.ris","sha256":"${'c'.repeat(64)}"},"rethink-context.json":{"url":"${sidecarRoot}rethink-context.json","sha256":"${'d'.repeat(64)}"}}`,
].join('\n');

test('workbench paper renders versioned tools, safe sidecars, companion query, and citation metadata', () => {
  const html = renderFixture(workbenchFrontmatter);
  assert.match(html, /class=(?:"paper-tools"|paper-tools)/);
  assert.match(html, /href=https:\/\/arxiv\.org\/abs\/2609\.01234v2/);
  assert.match(html, /href=https:\/\/arxiv\.org\/pdf\/2609\.01234v2\.pdf/);
  assert.match(html, /127\.0\.0\.1:43128\/v1\/paper\/pdf\?arxivId=2609\.01234v2/);
  assert.match(html, /data-copy-text=2609\.01234/);
  assert.match(html, /data-copy-text=2609\.01234v2/);
  for (const filename of ['citation.json', 'citation.bib', 'citation.ris']) {
    assert.match(html, new RegExp(`${filename.replace('.', '\\.')}`));
  }

  const aiHref = html.match(/href="?(http:\/\/127\.0\.0\.1:43128\/ui\?[^" >]+)"?/)?.[1];
  assert.ok(aiHref, 'explicit localhost companion anchor must exist');
  const aiURL = new URL(aiHref.replaceAll('&amp;', '&'));
  assert.equal(aiURL.searchParams.get('title'), 'Paper & Evidence');
  assert.equal(aiURL.searchParams.get('arxivId'), '2609.01234v2');
  assert.equal(aiURL.searchParams.get('sourceUrl'), 'https://arxiv.org/abs/2609.01234v2');
  assert.equal(aiURL.searchParams.get('contextUrl'), `${sidecarRoot}rethink-context.json`);
  assert.deepEqual([...aiURL.searchParams.keys()].sort(), [
    'arxivId', 'contextUrl', 'sourceUrl', 'title',
  ]);
  const selectionURL = companionDataUrl(html);
  assert.equal(selectionURL.toString(), aiURL.toString());
  assert.equal(selectionURL.searchParams.has('selectedText'), false);
  assert.match(html, /重理解选中段落/);
  assert.doesNotMatch(html, /<(?:script|link|img|iframe)[^>]+127\.0\.0\.1/i);
  assert.match(html, /npm run paper:rethink/);
  assert.match(html, /docs\/paper-rethink-companion\.md/);
  assert.match(html, /保存到 Zotero/);
  assert.match(html, /action=zotero/);
  assert.match(html, /zotero\.org\/download\/connectors/);
  assert.match(html, /网页不能代你点击浏览器扩展/);
  assert.match(html, /复制解释提问/);
  assert.match(html, /<noscript>/);
  assert.match(html, /<details class=[^>]*paper-tools__local/);

  assert.match(html, /name=citation_title content="Paper (?:&|&amp;) Evidence"/);
  assert.match(html, /name=citation_author content="Researcher A"/);
  assert.match(html, /name=citation_date content="?2026\/09\/03"?/);
  assert.match(html, /name=citation_public_url content="?https:\/\/arxiv\.org\/abs\/2609\.01234v2"?/);
  assert.match(html, /name=citation_pdf_url content="?https:\/\/arxiv\.org\/pdf\/2609\.01234v2\.pdf"?/);
  const schemas = [...html.matchAll(/<script type=application\/ld\+json>(.*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]));
  const paperSchema = schemas.find((item) => item['@type'] === 'ScholarlyArticle');
  assert.ok(paperSchema);
  assert.equal(paperSchema.url, 'https://arxiv.org/abs/2609.01234v2');
  assert.deepEqual(paperSchema.author.map((author) => author.name), ['Researcher A']);
});

test('legacy paper degrades to arXiv/PDF/ID tools without invented sidecars or authors', () => {
  const html = renderFixture([
    'title: "Legacy paper"',
    'date: 2026-09-05',
    'draft: false',
    'description: "speech | 7.0/10"',
    'tags: ["speech"]',
    'categories: ["论文速递"]',
    'hiddenInHomeList: true',
    'paper_digest_page_type: paper',
    'paper_digest_arxiv_id: "2609.09999"',
  ].join('\n'));
  assert.match(html, /class=(?:"paper-tools"|paper-tools)/);
  assert.match(html, /https:\/\/arxiv\.org\/abs\/2609\.09999/);
  assert.match(html, /https:\/\/arxiv\.org\/pdf\/2609\.09999\.pdf/);
  assert.match(html, /127\.0\.0\.1:43128\/v1\/paper\/pdf\?arxivId=2609\.09999/);
  assert.doesNotMatch(html, /citation\.(?:json|bib|ris)/);
  assert.doesNotMatch(html, /name=citation_author/);
  const aiHref = html.match(/href="?(http:\/\/127\.0\.0\.1:43128\/ui\?[^" >]+)"?/)?.[1];
  const aiURL = new URL(aiHref.replaceAll('&amp;', '&'));
  assert.equal(aiURL.searchParams.get('contextUrl'), '');
  assert.match(aiURL.searchParams.get('pageExcerpt'), /方法.*正文/s);
  const zoteroHref = html.match(/href="?(http:\/\/127\.0\.0\.1:43128\/ui\?[^" >]*action=zotero)"?/)?.[1];
  assert.ok(zoteroHref);
  assert.equal(new URL(zoteroHref.replaceAll('&amp;', '&')).searchParams.has('pageExcerpt'), false);
  const selectionURL = companionDataUrl(html);
  assert.equal(selectionURL.searchParams.get('arxivId'), '2609.09999');
  assert.equal(selectionURL.searchParams.has('selectedText'), false);
});

test('true legacy raw content and old-style versioned arXiv IDs retain basic tools', () => {
  const html = renderFixture([
    'title: "Old style legacy paper"',
    'date: 2026-09-05',
    'draft: false',
    'description: "legacy analysis"',
    'tags: ["theory"]',
    'categories: ["论文速递"]',
    'hiddenInHomeList: true',
  ].join('\n'), '## 原文\n\n[arXiv](https://arxiv.org/abs/hep-th/9901001v4)');
  assert.match(html, /class=(?:"paper-tools"|paper-tools)/);
  assert.match(html, /https:\/\/arxiv\.org\/abs\/hep-th\/9901001v4/);
  assert.match(html, /https:\/\/arxiv\.org\/pdf\/hep-th\/9901001v4\.pdf/);
  assert.match(html, /127\.0\.0\.1:43128\/v1\/paper\/pdf\?arxivId=hep-th%2F9901001v4/);
  assert.match(html, /data-copy-text=hep-th\/9901001/);
  assert.match(html, /data-copy-text=hep-th\/9901001v4/);
  assert.doesNotMatch(html, /citation\.(?:json|bib|ris)/);
  assert.doesNotMatch(html, /name=citation_author/);
  const aiHref = html.match(/href="?(http:\/\/127\.0\.0\.1:43128\/ui\?[^" >]+)"?/)?.[1];
  assert.ok(aiHref);
  const aiURL = new URL(aiHref.replaceAll('&amp;', '&'));
  assert.equal(aiURL.searchParams.get('arxivId'), 'hep-th/9901001v4');
  assert.equal(aiURL.searchParams.get('sourceUrl'), 'https://arxiv.org/abs/hep-th/9901001v4');
});

test('paper without a verifiable arXiv ID still gets selected-text AI tools only', () => {
  const html = renderFixture([
    'title: "Conference paper without arXiv"',
    'date: 2026-09-05',
    'draft: false',
    'description: "conference analysis"',
    'tags: ["music"]',
    'categories: ["conference"]',
    'hiddenInHomeList: true',
  ].join('\n'), '## 方法\n\n需要重新解释的正文段落。');
  assert.match(html, /paper-tools--ai-only/);
  assert.match(html, /重理解选中段落/);
  assert.match(html, /本页没有可验证的 arXiv 标识/);
  assert.doesNotMatch(html, /打开 arXiv|下载 PDF（本机）|导入 Zotero（本机确认）/);
  const selectionURL = companionDataUrl(html);
  assert.equal(selectionURL.searchParams.get('title'), 'Conference paper without arXiv');
  assert.equal(selectionURL.searchParams.get('arxivId'), '');
  assert.equal(selectionURL.searchParams.get('sourceUrl'), '');
  assert.equal(selectionURL.searchParams.get('contextUrl'), '');
  assert.match(selectionURL.searchParams.get('pageExcerpt'), /需要重新解释的正文段落/);
});

test('legacy AI entry sends at most 1200 existing Unicode characters, and selection replaces the excerpt', () => {
  const body = '汉字摘要'.repeat(500);
  const html = renderFixture('title: "Legacy"\ndate: 2026-09-05\nhiddenInHomeList: true', body);
  const url = companionDataUrl(html);
  assert.equal(url.searchParams.get('pageExcerpt'), body.slice(0, 1200));
  const result = clickSelection({ baseUrl: url.toString(), selectedText: '用户新选段' });
  const target = new URL(result.popupResult.location.targets[0]);
  assert.equal(target.searchParams.get('selectedText'), '用户新选段');
  assert.equal(target.searchParams.has('pageExcerpt'), false);
});

test('off-origin or noncanonical sidecar URLs are not rendered or sent to companion', () => {
  const hostile = workbenchFrontmatter
    .replace(`${sidecarRoot}citation.ris`, 'https://evil.example/citation.ris')
    .replace(`${sidecarRoot}rethink-context.json`, `${sidecarRoot}../rethink-context.json`);
  const html = renderFixture(hostile);
  assert.match(html, /citation\.json/);
  assert.match(html, /citation\.bib/);
  assert.doesNotMatch(html, /evil\.example|\.\.\/rethink-context/);
  const aiHref = html.match(/href="?(http:\/\/127\.0\.0\.1:43128\/ui\?[^" >]+)"?/)?.[1];
  const aiURL = new URL(aiHref.replaceAll('&amp;', '&'));
  assert.equal(aiURL.searchParams.get('contextUrl'), '');
});

test('toolbar JavaScript uses textContent and never contacts localhost', () => {
  const script = readFileSync(join(repo, 'assets', 'js', 'paper-toolbar.js'), 'utf8');
  assert.match(script, /textContent/);
  assert.doesNotMatch(script, /innerHTML/);
  assert.doesNotMatch(script, /\b(?:fetch|XMLHttpRequest|WebSocket|EventSource|sendBeacon)\b/);
  assert.doesNotMatch(script, /127\.0\.0\.1|localhost/);
  assert.doesNotMatch(script, /window\.location\.(?:assign|replace)|window\.location\s*=/);
});

test('selected-text action normalizes text and opens only the fixed local companion', () => {
  const baseUrl = 'http://127.0.0.1:43128/ui?title=Paper&arxivId=2609.01234&sourceUrl=https%3A%2F%2Farxiv.org%2Fabs%2F2609.01234&contextUrl=';
  const result = clickSelection({ baseUrl, selectedText: `  e\u0301\r\n机制  ` });
  assert.equal(result.opened.length, 1);
  const [blankTarget, name] = result.opened[0];
  assert.equal(blankTarget, '');
  assert.equal(name, '_blank');
  assert.equal(result.popupResult.opener, null);
  assert.equal(result.popupResult.location.targets.length, 1);
  const [target] = result.popupResult.location.targets;
  const url = new URL(target);
  assert.equal(url.origin, 'http://127.0.0.1:43128');
  assert.equal(url.pathname, '/ui');
  assert.equal(url.searchParams.get('selectedText'), 'é\n机制');
  assert.deepEqual([...url.searchParams.keys()].sort(), [
    'arxivId', 'contextUrl', 'selectedText', 'sourceUrl', 'title',
  ]);
  assert.match(result.status, /已尝试打开本机 AI 确认页/);
});

test('selected-text action enforces empty, control, character, and encoded URL limits', () => {
  const baseUrl = 'http://127.0.0.1:43128/ui?title=Paper&arxivId=2609.01234&sourceUrl=https%3A%2F%2Farxiv.org%2Fabs%2F2609.01234&contextUrl=';
  const exact = clickSelection({ baseUrl, selectedText: 'a'.repeat(2000) });
  assert.equal(exact.opened.length, 1);
  assert.equal(
    new URL(exact.popupResult.location.targets[0]).searchParams.get('selectedText').length,
    2000
  );

  for (const [selectedText, message] of [
    ['   \r\n  ', /请先/],
    ['safe\u0000unsafe', /控制字符/],
    ['a'.repeat(2001), /不能超过 2000/],
  ]) {
    const result = clickSelection({ baseUrl, selectedText });
    assert.equal(result.opened.length, 0);
    assert.match(result.status, message);
  }
});

test('2000 Chinese characters survive URI encoding and article selection survives click collapse', () => {
  const baseUrl = 'http://127.0.0.1:43128/ui?title=Paper&arxivId=2609.01234&sourceUrl=&contextUrl=';
  const result = clickSelection({ baseUrl, selectedText: '汉'.repeat(2000), captureBeforeClick: true });
  assert.equal(result.opened.length, 1);
  assert.equal(new URL(result.popupResult.location.targets[0]).searchParams.get('selectedText'), '汉'.repeat(2000));
  const outside = clickSelection({ baseUrl, selectedText: 'toolbar or navigation', captureBeforeClick: true, outsideArticle: true });
  assert.equal(outside.opened.length, 0);
  assert.match(outside.status, /请先/);
  const longUrl = clickSelection({ baseUrl: baseUrl.replace('title=Paper', `title=${'x'.repeat(33000)}`), selectedText: '正文' });
  assert.equal(longUrl.opened.length, 0);
  assert.match(longUrl.status, /编码后过长/);
});

test('selected-text action rejects altered routes, credentials, duplicate or secret parameters', () => {
  const invalidBases = [
    'https://127.0.0.1:43128/ui?title=Paper',
    'http://localhost:43128/ui?title=Paper',
    'http://user@127.0.0.1:43128/ui?title=Paper',
    'http://127.0.0.1:43128/other?title=Paper',
    'http://127.0.0.1:43128/ui?title=One&title=Two',
    'http://127.0.0.1:43128/ui?title=Paper&apiKey=secret-canary',
    'http://127.0.0.1:43128/ui?title=Paper#fragment',
  ];
  for (const baseUrl of invalidBases) {
    const result = clickSelection({ baseUrl, selectedText: 'selected evidence' });
    assert.equal(result.opened.length, 0, baseUrl);
    assert.match(result.status, /地址无效|参数无效/);
  }
});

test('selected-text action reports a blocked popup without falling back to same-page navigation', () => {
  const result = clickSelection({
    baseUrl: 'http://127.0.0.1:43128/ui?title=Legacy&arxivId=hep-th%2F9901001v4&sourceUrl=https%3A%2F%2Farxiv.org%2Fabs%2Fhep-th%2F9901001v4&contextUrl=',
    selectedText: 'legacy evidence',
    popupResult: null,
  });
  assert.equal(result.opened.length, 1);
  assert.match(result.status, /阻止了新窗口/);
});

test('selected-text action closes a popup when safe navigation fails', () => {
  const popup = {
    opener: {},
    location: { replace() { throw new Error('navigation denied'); } },
    close() { this.closed = true; },
  };
  const result = clickSelection({
    baseUrl: 'http://127.0.0.1:43128/ui?title=Paper&arxivId=2609.01234&sourceUrl=https%3A%2F%2Farxiv.org%2Fabs%2F2609.01234&contextUrl=',
    selectedText: 'selected evidence',
    popupResult: popup,
  });
  assert.equal(result.opened.length, 1);
  assert.equal(popup.opener, null);
  assert.equal(popup.closed, true);
  assert.match(result.status, /无法安全打开/);
});

async function copyAction({ prompt = false, legacySuccess = false }) {
  const source = readFileSync(join(repo, 'assets/js/paper-toolbar.js'), 'utf8');
  const status = { textContent: '' };
  const selectedField = { value: '这是论文的机制说明。' };
  const fallback = { hidden: true, focus() {}, select() { this.selected = true; } };
  const handlers = {};
  const button = (name) => ({
    hidden: true, dataset: { copyText: '2609.01234', copyLabel: 'arXiv ID' },
    addEventListener(type, handler) { handlers[`${name}:${type}`] = handler; },
  });
  const idButton = button('id');
  const promptButton = button('prompt');
  const selectionButton = button('selection');
  const toolbar = {
    querySelector(selector) {
      return {
        '.paper-tools__status': status,
        '.paper-tool--selection': selectionButton,
        '.paper-tools__selected-text': selectedField,
        '.paper-tool--selection-copy': promptButton,
        '.paper-tools__copy-fallback': fallback,
      }[selector] || null;
    },
    querySelectorAll() { return [idButton]; },
    closest() { return { querySelector() { return null; } }; },
  };
  let removed = false;
  let legacyCalls = 0;
  const document = {
    querySelectorAll() { return [toolbar]; },
    addEventListener() {},
    body: { appendChild() {} },
    createElement() { return { setAttribute() {}, style: {}, select() {}, remove() { removed = true; } }; },
    execCommand() { legacyCalls += 1; return legacySuccess; },
  };
  vm.runInNewContext(source, {
    document,
    navigator: { clipboard: { writeText: async () => { throw new Error('permission denied'); } } },
    window: { isSecureContext: true },
    URL, Set,
  });
  await handlers[prompt ? 'prompt:click' : 'id:click']();
  return { status: status.textContent, fallback, legacyCalls, removed, idButton, promptButton };
}

test('clipboard permission failure retries legacy copy and removes the temporary field', async () => {
  const result = await copyAction({ legacySuccess: true });
  assert.equal(result.legacyCalls, 1);
  assert.equal(result.removed, true);
  assert.equal(result.idButton.hidden, false);
  assert.match(result.status, /已复制 arXiv ID/);
});

test('copy prompt has a selectable manual fallback when both clipboard methods fail', async () => {
  const result = await copyAction({ prompt: true });
  assert.equal(result.promptButton.hidden, false);
  assert.equal(result.removed, true);
  assert.equal(result.fallback.hidden, false);
  assert.equal(result.fallback.selected, true);
  assert.match(result.fallback.value, /初学研究者/);
  assert.match(result.fallback.value, /这是论文的机制说明/);
  assert.match(result.fallback.value, /未核验为原论文逐字引用/);
  assert.match(result.status, /手动复制/);
});
