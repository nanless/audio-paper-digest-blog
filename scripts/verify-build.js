'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { CONTRACT: INDEX_CONTRACT, MAX_SHARD_BYTES, SHARD_URL_PATTERN } = require('./shard-search-index');
const {
  MANIFEST_CONTRACT: DESKTOP_MANIFEST_CONTRACT,
  SNAPSHOT_CONTRACT: DESKTOP_SNAPSHOT_CONTRACT,
  DETAIL_CONTRACT: DESKTOP_DETAIL_CONTRACT,
  MAX_MANIFEST_BYTES: MAX_DESKTOP_MANIFEST_BYTES,
  MAX_SNAPSHOT_BYTES: MAX_DESKTOP_SNAPSHOT_BYTES,
  MAX_SHARD_BYTES: MAX_DESKTOP_SHARD_BYTES,
  MAX_SHARDS: MAX_DESKTOP_SHARDS,
  MAX_TOTAL_CATALOG_BYTES: MAX_DESKTOP_TOTAL_CATALOG_BYTES,
  MAX_DETAIL_BYTES: MAX_DESKTOP_DETAIL_BYTES,
  MAX_ARTICLE_BYTES: MAX_DESKTOP_ARTICLE_BYTES,
  MAX_ASSET_BYTES: MAX_DESKTOP_ASSET_BYTES,
  MAX_ARTICLE_RESOURCES: MAX_DESKTOP_ARTICLE_RESOURCES,
  MAX_BUNDLED_ARTICLE_ASSETS_BYTES: MAX_DESKTOP_BUNDLED_ASSETS_BYTES,
  SNAPSHOT_URL_PATTERN,
  CATALOG_SHARD_URL_PATTERN,
  TOMBSTONE_SHARD_URL_PATTERN,
  DETAIL_URL_PATTERN,
  ARTICLE_URL_PATTERN,
  APPEARANCE_ID_PATTERN,
  SAFE_RELATIVE_URL_PATTERN,
  ISO_TIMESTAMP_WITH_TZ_PATTERN,
  COMMIT_OID_PATTERN,
  SHA256_PATTERN,
  assertSafeArticleHtml
} = require('./export-desktop-details');
const indexProtocols = require('../assets/js/protocol-registry');
const tagCore = require('../assets/js/tag-core');
const { verifyPageNavigation } = require('./verify-page-navigation');
const { verifyEditionFeature } = require('./verify-edition-feature');

const SITE_ORIGIN = 'https://nanless.github.io';
const SITE_PREFIX = '/audio-paper-digest-blog/';
const MAX_RSS_BYTES = 256 * 1024;
const MAX_INDEX_BYTES = 8 * 1024 * 1024;

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function readRequired(file) {
  invariant(fs.existsSync(file), `缺少构建产物：${file}`);
  return fs.readFileSync(file, 'utf8');
}

function extractHead(html) {
  const match = html.match(/<head(?:\s[^>]*)?>([\s\S]*?)<\/head>/i);
  invariant(match, '首页缺少合法的 <head>');
  return match[1];
}

function attributeValue(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return match ? (match[1] ?? match[2] ?? match[3] ?? '') : '';
}

function verifyHead(html, buildDir) {
  const htmlTag = html.match(/<html\b[^>]*>/i)?.[0] || '';
  const htmlLanguage = attributeValue(htmlTag, 'lang');
  invariant(htmlLanguage.toLowerCase() === 'zh-cn', '首页 html lang 必须为 zh-CN');
  const head = extractHead(html);
  invariant(/Hugo 0\.160\.1/.test(head), '构建产物必须由固定 Hugo 0.160.1 生成');
  invariant(!/<(?:div|button|main|section|article|footer)(?:\s|>)/i.test(head), 'head 中出现 body-only 节点');
  invariant(!/rel=["']manifest["']/i.test(head), '不得继续引用无效 manifest');
  invariant(!/serviceWorker|sw\.js/i.test(head), '不得继续注册无效 service worker');
  invariant(!/gc\.zgo\.at/i.test(head), '未配置 GoatCounter 时不得加载统计脚本');
  invariant(!/MathJax|medium-zoom/i.test(head), '无公式/图片的首页不得加载 MathJax 或 medium-zoom');
  invariant(/\/js\/site\.min\.[a-f0-9]+\.js/i.test(html), '缺少带指纹的 site.js');

  const iconLinks = (head.match(/<link\b[^>]*>/gi) || []).filter((tag) => attributeValue(tag, 'rel').includes('icon'));
  invariant(iconLinks.length >= 3, '图标引用数量异常');
  for (const tag of iconLinks) {
    const url = new URL(attributeValue(tag, 'href'), `${SITE_ORIGIN}${SITE_PREFIX}`);
    invariant(url.origin === SITE_ORIGIN, `图标不得跨域：${url.href}`);
    invariant(url.pathname.startsWith(SITE_PREFIX), `图标超出站点路径：${url.pathname}`);
    const relative = decodeURIComponent(url.pathname.slice(SITE_PREFIX.length));
    invariant(relative && !relative.includes('..'), `非法图标路径：${url.pathname}`);
    invariant(fs.existsSync(path.join(buildDir, relative)), `图标引用不存在：${relative}`);
  }
  return { iconCount: iconLinks.length, htmlLanguage };
}

function itemValue(item, tag) {
  const match = item.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  if (!match) return '';
  return match[1]
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

function verifyRss(xml, byteLength) {
  invariant(byteLength <= MAX_RSS_BYTES, `RSS 超过 ${MAX_RSS_BYTES} 字节：${byteLength}`);
  invariant(!/<content:encoded>/i.test(xml), 'RSS 不得嵌入全文 content:encoded');
  const items = Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/gi), (match) => match[1]);
  invariant(items.length > 0 && items.length <= 50, `RSS item 数量必须为 1–50，实际 ${items.length}`);
  const dates = [];
  for (const item of items) {
    const link = itemValue(item, 'link');
    invariant(/\/posts\/\d{4}-\d{2}-\d{2}\/$/.test(link), `RSS 混入非每日 index：${link}`);
    const pubDate = itemValue(item, 'pubDate');
    invariant(/[+-]0800$/.test(pubDate), `RSS 日期必须使用 Asia/Shanghai：${pubDate}`);
    const parsed = Date.parse(pubDate);
    invariant(Number.isFinite(parsed), `RSS pubDate 无法解析：${pubDate}`);
    dates.push(parsed);
    invariant(itemValue(item, 'description').length <= 520, 'RSS 摘要超过长度预算');
  }
  for (let index = 1; index < dates.length; index += 1) {
    invariant(dates[index - 1] >= dates[index], 'RSS 未按日期倒序排列');
  }
  return { itemCount: items.length, bytes: byteLength };
}

function verifySearchIndex(jsonText, byteLength) {
  invariant(byteLength <= MAX_INDEX_BYTES, `搜索索引超过 ${MAX_INDEX_BYTES} 字节：${byteLength}`);
  const items = JSON.parse(jsonText);
  invariant(Array.isArray(items) && items.length > 0, '搜索索引必须是非空数组');
  const allowedTypes = new Set(['paper', 'daily', 'conference', 'page']);
  for (const [index, item] of items.entries()) {
    invariant(typeof item.title === 'string' && item.title, `索引 ${index} 缺少 title`);
    invariant(typeof item.titleZh === 'string' && item.titleZh, `索引 ${index} 缺少 titleZh`);
    invariant(typeof item.summary === 'string' && item.summary.length <= 340, `索引 ${index} summary 非法`);
    invariant(!/<(?:p|h[1-6]|script|img|a)\b/i.test(item.summary), `索引 ${index} summary 含 HTML`);
    invariant(Array.isArray(item.tags), `索引 ${index} tags 必须为数组`);
    invariant(allowedTypes.has(item.pageType), `索引 ${index} pageType 非法：${item.pageType}`);
    const url = new URL(item.permalink, `${SITE_ORIGIN}${SITE_PREFIX}`);
    invariant(url.origin === SITE_ORIGIN && url.pathname.startsWith(SITE_PREFIX), `索引 ${index} URL 越界：${item.permalink}`);
  }
  return { itemCount: items.length, bytes: byteLength };
}

function verifySearchManifest(manifest, buildDir) {
  invariant(indexProtocols.hasValidHeader(manifest, INDEX_CONTRACT), '索引分片格式声明或结构指纹非法');
  const root = fs.realpathSync(buildDir);
  const directory = manifest.contract === INDEX_CONTRACT ? path.join(root, 'client') : root;
  invariant(Number.isSafeInteger(manifest.recordCount) && manifest.recordCount > 0 && manifest.recordCount <= 100000,
    '索引分片总记录数非法');
  invariant(Number.isSafeInteger(manifest.totalBytes) && manifest.totalBytes > 0 && manifest.totalBytes <= 64 * 1024 * 1024,
    '索引分片总字节数非法');
  invariant(Array.isArray(manifest.shards) && manifest.shards.length > 0 && manifest.shards.length <= 128,
    '索引分片数量非法');
  const urls = new Set();
  const records = new Set();
  let bytes = 0;
  let itemCount = 0;
  for (const shard of manifest.shards) {
    invariant(shard && typeof shard.url === 'string' && SHARD_URL_PATTERN.test(shard.url) && !urls.has(shard.url),
      '索引分片路径非法或重复');
    urls.add(shard.url);
    invariant(Number.isSafeInteger(shard.bytes) && shard.bytes > 0 && shard.bytes <= MAX_SHARD_BYTES,
      '索引分片大小非法');
    invariant(Number.isSafeInteger(shard.recordCount) && shard.recordCount > 0, '索引分片记录数非法');
    invariant(typeof shard.sha256 === 'string' && /^[a-f0-9]{64}$/.test(shard.sha256)
      && shard.url.endsWith(`-${shard.sha256.slice(0, 12)}.json`), '索引分片哈希非法');
    const file = path.join(directory, shard.url);
    invariant(fs.existsSync(file), `缺少构建产物：${file}`);
    const stat = fs.lstatSync(file);
    invariant(stat.isFile() && !stat.isSymbolicLink() && stat.size === shard.bytes && fs.realpathSync(file) === file,
      `索引分片字节数漂移或路径不是普通文件：${shard.url}`);
    const buffer = fs.readFileSync(file);
    invariant(buffer.length === shard.bytes, `索引分片字节数漂移：${shard.url}`);
    invariant(createHash('sha256').update(buffer).digest('hex') === shard.sha256, `索引分片 SHA 漂移：${shard.url}`);
    let shardText;
    try { shardText = new TextDecoder('utf-8', { fatal: true }).decode(buffer); }
    catch { throw new Error(`索引分片不是合法 UTF-8：${shard.url}`); }
    const stats = verifySearchIndex(shardText, buffer.length);
    invariant(stats.itemCount === shard.recordCount, `索引分片记录数漂移：${shard.url}`);
    for (const record of JSON.parse(shardText)) {
      invariant(!records.has(record.permalink), `索引分片含重复页面：${record.permalink}`);
      records.add(record.permalink);
    }
    bytes += buffer.length;
    itemCount += stats.itemCount;
  }
  invariant(itemCount === manifest.recordCount && bytes === manifest.totalBytes, '索引分片总量不闭合');
  return { itemCount, bytes, shards: manifest.shards.length, maxShardBytes: MAX_SHARD_BYTES,
    recordOrderSha256: createHash('sha256').update(JSON.stringify([...records])).digest('hex') };
}

function countDeclaredClientSidecarSources() {
  const posts = path.join(__dirname, '..', 'content', 'posts');
  let count = 0;
  for (const file of walkFiles(posts)) {
    if (!file.endsWith('.md')) continue;
    const text = fs.readFileSync(file, 'utf8');
    if (text.includes('paper_digest_sidecars') && text.includes('/client/papers/')) count += 1;
  }
  return count;
}

function walkFiles(root) {
  const output = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) output.push(...walkFiles(full));
    else output.push(full);
  }
  return output;
}

function verifyPaperToolCoverage(files, root) {
  let paperPages = 0;
  let sidecarPages = 0;
  let sourceTools = 0;
  let richArxivTools = 0;
  let richConferenceTools = 0;
  let selectionOnlyFallbacks = 0;
  for (const file of files.filter((item) => path.basename(item) === 'index.html')) {
    const html = fs.readFileSync(file, 'utf8');
    if (!html.includes('research-workbench--paper')) continue;
    paperPages += 1;
    invariant(!/(?:127\.0\.0\.1|localhost|\[::1\]):43128\b|data-companion-url|companionUrl|COMPANION_|pageExcerpt|npm run paper:rethink/.test(html),
      `论文页残留已取消的本机助手入口：${file}`);
    const opening = Array.from(html.matchAll(/<section\b[^>]*>/gi)).find(match => attributeValue(match[0], 'class').split(/\s+/).includes('paper-tools'));
    invariant(opening, `论文页缺少原文与引用工具区域：${file}`);
    const close = html.indexOf('</section>', opening.index);
    invariant(close > opening.index, `论文工具区域未闭合：${file}`);
    const tools = html.slice(opening.index, close + 10);
    invariant(tools.includes('paper-tools__copy-fallback')
      && tools.includes('<noscript>'), `论文页缺少原文与引用工具：${file}`);
    invariant(!/data-reading-bookmark|reading-controls|reading-resume|reading-backup|reading-store\.[a-f0-9]+|reading-controls\.[a-f0-9]+/.test(html),
      `论文页残留已取消的浏览器阅读资料功能：${file}`);
    sourceTools += 1;
    invariant(!/复制 AI 提问|保存到 Zotero|zotero\.org\/download\/connectors|paper-tool--selection-copy/.test(tools),
      `论文工具残留已移除的 AI/Zotero 入口：${file}`);
    const sourceTag = Array.from(tools.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi))
      .find(match => attributeValue(match[0], 'class') === 'paper-tools__citation-record');
    invariant(sourceTag, `论文工具缺少结构化引用来源：${file}`);
    // 客户端声明必须是保留 camelCase 的原始记录；Hugo 参数 map 的嵌套键会被小写化，
    // 曾把 schemaFingerprint 变成 schemafingerprint，导致已发行客户端打不开导读。
    const sidecarTag = Array.from(tools.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi))
      .find(match => attributeValue(match[0], 'class') === 'paper-tools__client-sidecars');
    if (sidecarTag) {
      let sidecars;
      try { sidecars = JSON.parse(sidecarTag[1]); } catch (_) { throw new Error(`客户端声明不是有效 JSON：${file}`); }
      const names = ['citation.json', 'citation.bib', 'citation.ris', 'rethink-context.json'];
      invariant(sidecars && Object.keys(sidecars).sort().join(',') === [...names].sort().join(','),
        `客户端声明缺少四个已发布文件：${file}`);
      sidecarPages += 1;
      const first = sidecars['citation.json'];
      invariant(first && typeof first === 'object' && typeof first.url === 'string',
        `客户端声明缺少 citation.json 地址：${file}`);
      const clientRoot = first.url.replace(/citation\.json$/, '');
      invariant(clientRoot.startsWith(SITE_PREFIX + 'client/papers/'),
        `客户端声明不在站点目录下：${file}`);
      for (const name of names) {
        const record = sidecars[name];
        invariant(record && typeof record === 'object' && typeof record.url === 'string' && record.url === clientRoot + name,
          `客户端声明地址与目录不一致：${file}`);
        invariant(typeof record.sha256 === 'string' && /^[a-f0-9]{64}$/.test(record.sha256),
          `客户端声明缺少真实 SHA：${file}`);
        const asset = path.join(root, record.url.slice(SITE_PREFIX.length));
        invariant(fs.existsSync(asset), `客户端声明指向的已发布文件不存在：${file}`);
        invariant(createHash('sha256').update(fs.readFileSync(asset)).digest('hex') === record.sha256,
          `客户端声明 SHA 与实际文件不一致：${file}`);
      }
      const context = sidecars['rethink-context.json'];
      invariant(context.contract === 'paper-research-context' && typeof context.schemaFingerprint === 'string'
        && /^[a-f0-9]{64}$/.test(context.schemaFingerprint) && !('schemafingerprint' in context),
        `上下文声明必须保留 camelCase 的 schemaFingerprint：${file}`);
    }
    let source;
    try { source = JSON.parse(sourceTag[1]); } catch (_) { throw new Error(`论文引用来源不是有效 JSON：${file}`); }
    invariant(source && source.contract === 'paper-citation-source-v1' && source.pageType === 'paper', `论文引用来源契约错误：${file}`);
    const emptyUnknown = attributeValue(opening[0], 'data-paper-has-guide') === 'false'
      && (source.identityStatus !== 'verified' || !source.url);
    if (emptyUnknown) {
      invariant(tools.includes('本页暂无导读正文') && !tools.includes('paper-tool--pack'),
        `空正文且来源待核的页面不得提供导读下载：${file}`);
    } else {
      invariant(tools.includes('paper-tools__advanced') && tools.includes('paper-tool--pack'),
        `论文页缺少原文与引用工具：${file}`);
    }
    const tags = tools.match(/<(?:a|button)\b[^>]*>/gi) || [];
    const hrefs = tags.map(tag => attributeValue(tag, 'href').replace(/&amp;/g, '&'));
    if (source.identityStatus !== 'verified' || !source.url) {
      invariant(tools.includes('paper-tools--selection-only') && !tools.includes('data-citation-format=')
        && !tools.includes('paper-tool--reference-copy')
        && !hrefs.some(href => /^https:\/\/arxiv\.org\/(?:abs|pdf)\//.test(href)),
        `身份待核页不得根据正文引用生成本篇论文工具：${file}`);
      selectionOnlyFallbacks += 1;
    } else {
      invariant(source.verified === true && /^https:\/\//.test(source.url) && hrefs.includes(source.url)
        && (!source.pdfUrl || /^https:\/\//.test(source.pdfUrl) && hrefs.includes(source.pdfUrl))
        && tools.includes('paper-tool--reference-copy'),
      `已核论文页缺少对应官方来源/PDF/引用工具：${file}`);
      if (source.sourceKind === 'arxiv') {
        const binding = source.pdfVersionBinding || {};
        const baseId = String(source.arxivId || '').replace(/v[1-9][0-9]*$/, '');
        const exactPdf = source.pdfUrl === 'https://arxiv.org/pdf/' + source.arxivId
          || source.pdfUrl === 'https://arxiv.org/pdf/' + source.arxivId + '.pdf';
        const unspecifiedPdf = binding.contract === 'sealed-arxiv-pdf-version-binding-v1'
          && binding.status === 'versioned-text-unversioned-pdf-url' && binding.paperId === 'arxiv:' + baseId
          && binding.sourceId === source.arxivId && binding.pdfRequestedUrl === source.pdfUrl
          && binding.pdfVersion === 'unspecified' && binding.pdfVersionAuthenticated === false
          && /^[a-f0-9]{64}$/.test(binding.pdfSha256 || '') && /^[a-f0-9]{64}$/.test(binding.sourceManifestSha256 || '')
          && source.sourceVersionWarning && (source.pdfUrl === 'https://arxiv.org/pdf/' + baseId
            || source.pdfUrl === 'https://arxiv.org/pdf/' + baseId + '.pdf');
        invariant(/^https:\/\/arxiv\.org\/abs\/[a-z0-9./-]+$/.test(source.url)
          && source.url === 'https://arxiv.org/abs/' + source.arxivId && (exactPdf || unspecifiedPdf), `arXiv 工具身份不一致：${file}`);
        richArxivTools += 1;
      } else {
        invariant(source.sourceKind === 'conference' && /^conference:/.test(source.paperId), `会议工具身份不一致：${file}`);
        richConferenceTools += 1;
      }
      for (const format of ['bib', 'ris']) {
        invariant(tags.some(tag => attributeValue(tag, 'href').endsWith(`/citation.${format}`)
          || attributeValue(tag, 'data-citation-format') === format),
        `已核论文页缺少 ${format} 引用下载：${file}`);
      }
    }
  }
  invariant(paperPages > 0, '构建产物没有论文页');
  invariant(sourceTools === paperPages, '论文页阅读工具覆盖不完整');
  return { paperPages, sidecarPages, sourceTools, richArxivTools, richConferenceTools, selectionOnlyFallbacks };
}

function hasExactKeys(object, expectedKeys, label) {
  invariant(object && typeof object === 'object' && !Array.isArray(object), `${label} 必须为对象`);
  const actual = Object.keys(object);
  invariant(
    actual.length === expectedKeys.length && expectedKeys.every(key => Object.prototype.hasOwnProperty.call(object, key)),
    `${label} 字段集合不匹配`
  );
}

function readVerifiedBytes(root, relative, expectedBytes, expectedSha256, maxBytes, label) {
  invariant(typeof relative === 'string' && SAFE_RELATIVE_URL_PATTERN.test(relative), `${label} 路径非法：${relative}`);
  let cursor = root;
  const parts = relative.split('/');
  for (const part of parts.slice(0, -1)) {
    cursor = path.join(cursor, part);
    invariant(fs.existsSync(cursor), `缺少目录：${cursor}`);
    const dirStat = fs.lstatSync(cursor);
    invariant(dirStat.isDirectory() && !dirStat.isSymbolicLink(), `${label} 父路径不是普通目录：${relative}`);
  }
  const file = path.join(root, relative);
  invariant(fs.existsSync(file), `缺少构建产物：${file}`);
  const stat = fs.lstatSync(file);
  invariant(stat.isFile() && !stat.isSymbolicLink() && fs.realpathSync(file) === file, `${label} 不是普通文件：${relative}`);
  invariant(stat.size > 0 && stat.size <= maxBytes, `${label} 大小越界：${relative} (${stat.size})`);
  if (expectedBytes !== null) {
    invariant(stat.size === expectedBytes, `${label} 字节数漂移：${relative} (期望 ${expectedBytes}，实际 ${stat.size})`);
  }
  const buffer = fs.readFileSync(file);
  invariant(buffer.length === stat.size, `${label} 读取字节长度不一致：${relative}`);
  const actualSha = createHash('sha256').update(buffer).digest('hex');
  if (expectedSha256 !== null) {
    invariant(actualSha === expectedSha256, `${label} SHA-256 漂移：${relative}`);
  }
  return { buffer, sha256: actualSha };
}

function decodeUtf8Strict(buffer, label) {
  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(buffer);
  } catch {
    throw new Error(`${label} 不是合法 UTF-8`);
  }
}

function parseJsonStrict(buffer, label) {
  const text = decodeUtf8Strict(buffer, label);
  try {
    return { text, value: JSON.parse(text) };
  } catch {
    throw new Error(`${label} 不是合法 JSON`);
  }
}

function verifyDesktopDetails(buildDir) {
  const requested = path.resolve(buildDir);
  const rootStat = fs.lstatSync(requested);
  invariant(rootStat.isDirectory() && !rootStat.isSymbolicLink(), '构建目录必须为普通目录');
  const root = fs.realpathSync(requested);

  const detailsDir = path.join(root, 'client', 'details');
  invariant(fs.existsSync(detailsDir), `缺少桌面静态数据包目录：${detailsDir}`);
  const detailsDirStat = fs.lstatSync(detailsDir);
  invariant(detailsDirStat.isDirectory() && !detailsDirStat.isSymbolicLink(), 'client/details 必须为普通目录');

  // Verify content-addressed directory hygiene (no symlinks, every content-addressed filename matches raw SHA-256)
  const allowedSubdirs = new Set(['snapshots', 'catalog', 'tombstones', 'papers', 'articles', 'assets']);
  const diskDetailsFiles = new Set();
  for (const entry of fs.readdirSync(detailsDir, { withFileTypes: true })) {
    const entryFull = path.join(detailsDir, entry.name);
    const st = fs.lstatSync(entryFull);
    invariant(!st.isSymbolicLink(), `client/details 禁止符号链接：${entryFull}`);
    if (st.isFile()) {
      invariant(entry.name === 'manifest.json', `client/details 根目录存在未知文件：${entry.name}`);
      diskDetailsFiles.add('client/details/manifest.json');
    } else if (st.isDirectory()) {
      invariant(allowedSubdirs.has(entry.name), `client/details 存在未知子目录：${entry.name}`);
      for (const child of fs.readdirSync(entryFull, { withFileTypes: true })) {
        const childFull = path.join(entryFull, child.name);
        const cst = fs.lstatSync(childFull);
        invariant(cst.isFile() && !cst.isSymbolicLink(), `client/details/${entry.name} 仅允许普通文件：${child.name}`);
        const match = entry.name === 'assets'
          ? child.name.match(/^([a-f0-9]{64})(\.[a-z0-9]+)$/)
          : child.name.match(/^([a-f0-9]{64})(\.(?:json|html))$/);
        const expectedExt = entry.name === 'articles' ? '.html' : (entry.name === 'assets' ? match?.[2] : '.json');
        invariant(match && match[2] === expectedExt, `内容寻址文件命名非法：${entry.name}/${child.name}`);
        const raw = fs.readFileSync(childFull);
        invariant(createHash('sha256').update(raw).digest('hex') === match[1],
          `内容寻址文件实际字节与文件名 SHA 不符：${entry.name}/${child.name}`);
        diskDetailsFiles.add(`client/details/${entry.name}/${child.name}`);
      }
    } else {
      throw new Error(`client/details 含非常规文件系统对象：${entryFull}`);
    }
  }

  // 1. Verify client/details/manifest.json
  const manifestRead = readVerifiedBytes(
    root,
    'client/details/manifest.json',
    null,
    null,
    MAX_DESKTOP_MANIFEST_BYTES,
    'client/details/manifest.json'
  );
  const { text: manifestText, value: manifest } = parseJsonStrict(manifestRead.buffer, 'client/details/manifest.json');
  invariant(!manifestText.includes(manifestRead.sha256), 'manifest.json 禁止包含自身 SHA');
  invariant(indexProtocols.isCurrentHeader(manifest, DESKTOP_MANIFEST_CONTRACT),
    'manifest.json 合同声明或结构指纹未登记或已失效');
  const manifestSchema = indexProtocols.declaredSchema(
    manifest.contract, DESKTOP_MANIFEST_CONTRACT, manifest.schemaFingerprint
  );
  hasExactKeys(manifest, ['contract', 'schemaFingerprint', ...manifestSchema.fields], 'manifest.json');
  invariant(manifest.basePath === SITE_PREFIX, `manifest.basePath 非法：${manifest.basePath}`);
  invariant(COMMIT_OID_PATTERN.test(manifest.sourceCommit), `manifest.sourceCommit 非法：${manifest.sourceCommit}`);
  invariant(
    ISO_TIMESTAMP_WITH_TZ_PATTERN.test(manifest.generatedAt) && Number.isFinite(Date.parse(manifest.generatedAt)),
    `manifest.generatedAt 非法：${manifest.generatedAt}`
  );
  invariant(SHA256_PATTERN.test(manifest.snapshotId), `manifest.snapshotId 非法：${manifest.snapshotId}`);
  hasExactKeys(manifest.snapshot, manifestSchema.descriptorFields, 'manifest.snapshot');
  invariant(
    manifest.snapshot.url === `client/details/snapshots/${manifest.snapshotId}.json`
    && SNAPSHOT_URL_PATTERN.test(manifest.snapshot.url)
    && manifest.snapshot.sha256 === manifest.snapshotId
    && Number.isSafeInteger(manifest.snapshot.bytes)
    && manifest.snapshot.bytes > 0
    && manifest.snapshot.bytes <= MAX_DESKTOP_SNAPSHOT_BYTES,
    'manifest.snapshot 描述符非法或与 snapshotId 不一致'
  );

  // 2. Verify snapshot JSON
  const snapshotRead = readVerifiedBytes(
    root,
    manifest.snapshot.url,
    manifest.snapshot.bytes,
    manifest.snapshot.sha256,
    MAX_DESKTOP_SNAPSHOT_BYTES,
    manifest.snapshot.url
  );
  const { text: snapshotText, value: snapshot } = parseJsonStrict(snapshotRead.buffer, manifest.snapshot.url);
  invariant(!snapshotText.includes(manifest.snapshotId), '快照 JSON 禁止包含自身 SHA');
  invariant(indexProtocols.isCurrentHeader(snapshot, DESKTOP_SNAPSHOT_CONTRACT),
    '快照 JSON 合同声明或结构指纹未登记或已失效');
  const snapshotSchema = indexProtocols.declaredSchema(
    snapshot.contract, DESKTOP_SNAPSHOT_CONTRACT, snapshot.schemaFingerprint
  );
  hasExactKeys(snapshot, ['contract', 'schemaFingerprint', ...snapshotSchema.fields], 'snapshot');
  invariant(snapshot.sourceCommit === manifest.sourceCommit, 'manifest 与 snapshot 的 sourceCommit 不一致（混入不同提交版本）');
  invariant(
    Number.isSafeInteger(snapshot.recordCount) && snapshot.recordCount > 0
    && Number.isSafeInteger(snapshot.appearanceCount) && snapshot.appearanceCount === snapshot.recordCount
    && Number.isSafeInteger(snapshot.paperCount) && snapshot.paperCount > 0 && snapshot.paperCount <= snapshot.appearanceCount
    && Number.isSafeInteger(snapshot.tombstoneCount) && snapshot.tombstoneCount >= 0,
    'snapshot 计数非法或不闭合'
  );

  // 3. Verify tagCatalogs closure
  invariant(snapshot.tagCatalogs && typeof snapshot.tagCatalogs === 'object', 'snapshot.tagCatalogs 缺失');
  const tagSnapDesc = snapshot.tagCatalogs.snapshot;
  const tagVerDesc = snapshot.tagCatalogs.versions;
  invariant(tagSnapDesc && tagVerDesc, 'snapshot.tagCatalogs 缺少成对词表描述符');
  const tagSnapRead = readVerifiedBytes(
    root, tagSnapDesc.url, tagSnapDesc.bytes, tagSnapDesc.sha256, 16 * 1024 * 1024, 'tagCatalogs.snapshot'
  );
  const tagVerRead = readVerifiedBytes(
    root, tagVerDesc.url, tagVerDesc.bytes, tagVerDesc.sha256, 16 * 1024 * 1024, 'tagCatalogs.versions'
  );
  const { value: tagSnapVal } = parseJsonStrict(tagSnapRead.buffer, tagSnapDesc.url);
  const { value: tagVerVal } = parseJsonStrict(tagVerRead.buffer, tagVerDesc.url);
  invariant(indexProtocols.hasValidHeader(tagSnapVal, 'paper-tag-catalog-snapshot'), 'tagCatalogs.snapshot 头部非法');
  invariant(indexProtocols.hasValidHeader(tagVerVal, 'paper-tag-catalog-versions'), 'tagCatalogs.versions 头部非法');
  tagCore.createRegistry(tagSnapVal, tagVerVal);

  // 4. Verify catalogShards
  invariant(
    Array.isArray(snapshot.catalogShards) && snapshot.catalogShards.length > 0 && snapshot.catalogShards.length <= MAX_DESKTOP_SHARDS,
    'snapshot.catalogShards 数量非法'
  );
  let catalogTotalBytes = 0;
  let catalogRecordCount = 0;
  const seenCatalogShardUrls = new Set();
  const activeAppearances = new Map();

  for (const shard of snapshot.catalogShards) {
    hasExactKeys(shard, snapshotSchema.shardFields, 'catalogShard');
    const urlMatch = typeof shard.url === 'string' ? shard.url.match(CATALOG_SHARD_URL_PATTERN) : null;
    invariant(
      urlMatch && urlMatch[1] === shard.sha256 && !seenCatalogShardUrls.has(shard.url),
      `目录分片路径非法或重复：${shard.url}`
    );
    seenCatalogShardUrls.add(shard.url);
    invariant(
      Number.isSafeInteger(shard.bytes) && shard.bytes > 0 && shard.bytes <= MAX_DESKTOP_SHARD_BYTES
      && Number.isSafeInteger(shard.recordCount) && shard.recordCount > 0,
      `目录分片大小或记录数非法：${shard.url}`
    );
    const shardRead = readVerifiedBytes(root, shard.url, shard.bytes, shard.sha256, MAX_DESKTOP_SHARD_BYTES, shard.url);
    const { value: rows } = parseJsonStrict(shardRead.buffer, shard.url);
    invariant(Array.isArray(rows) && rows.length === shard.recordCount, `目录分片条数漂移：${shard.url}`);
    for (const row of rows) {
      hasExactKeys(row, snapshotSchema.catalogRecordFields, `catalogRecord(${row?.appearanceId})`);
      invariant(APPEARANCE_ID_PATTERN.test(row.appearanceId) && !activeAppearances.has(row.appearanceId),
        `目录记录 appearanceId 非法或重复：${row.appearanceId}`);
      invariant(row.pageUrl === row.appearanceId, `目录记录 pageUrl 与 appearanceId 不一致：${row.appearanceId}`);
      invariant(['paper', 'daily', 'conference'].includes(row.pageType), `目录记录 pageType 非法：${row.pageType}`);
      invariant(['active', 'retracted'].includes(row.publicationStatus), `目录记录 publicationStatus 非法：${row.publicationStatus}`);
      invariant(SHA256_PATTERN.test(row.articleRevisionId), `目录记录 articleRevisionId 非法：${row.appearanceId}`);
      activeAppearances.set(row.appearanceId, row);
    }
    catalogTotalBytes += shardRead.buffer.length;
    catalogRecordCount += rows.length;
  }
  invariant(
    catalogRecordCount === snapshot.recordCount && catalogTotalBytes <= MAX_DESKTOP_TOTAL_CATALOG_BYTES,
    '目录分片总条数或总大小不闭合'
  );

  // 5. Verify tombstoneShards and strict disjointness from active catalog
  invariant(Array.isArray(snapshot.tombstoneShards) && snapshot.tombstoneShards.length <= MAX_DESKTOP_SHARDS,
    'snapshot.tombstoneShards 非法');
  if (snapshot.tombstoneCount === 0) {
    invariant(snapshot.tombstoneShards.length === 0, 'tombstoneCount 为 0 时 tombstoneShards 必须为空数组');
  } else {
    invariant(snapshot.tombstoneShards.length > 0, 'tombstoneCount > 0 时必须存在 tombstoneShards');
  }
  let actualTombstoneCount = 0;
  const seenTombstoneShardUrls = new Set();
  const seenTombstoneAppearances = new Set();
  for (const shard of snapshot.tombstoneShards) {
    hasExactKeys(shard, snapshotSchema.shardFields, 'tombstoneShard');
    const urlMatch = typeof shard.url === 'string' ? shard.url.match(TOMBSTONE_SHARD_URL_PATTERN) : null;
    invariant(
      urlMatch && urlMatch[1] === shard.sha256 && !seenTombstoneShardUrls.has(shard.url),
      `tombstone 分片路径非法或重复：${shard.url}`
    );
    seenTombstoneShardUrls.add(shard.url);
    invariant(
      Number.isSafeInteger(shard.bytes) && shard.bytes > 0 && shard.bytes <= MAX_DESKTOP_SHARD_BYTES
      && Number.isSafeInteger(shard.recordCount) && shard.recordCount > 0,
      `tombstone 分片大小或条数非法：${shard.url}`
    );
    const shardRead = readVerifiedBytes(root, shard.url, shard.bytes, shard.sha256, MAX_DESKTOP_SHARD_BYTES, shard.url);
    const { value: tombs } = parseJsonStrict(shardRead.buffer, shard.url);
    invariant(Array.isArray(tombs) && tombs.length === shard.recordCount, `tombstone 分片条数漂移：${shard.url}`);
    for (const tomb of tombs) {
      hasExactKeys(tomb, snapshotSchema.tombstoneRecordFields, `tombstone(${tomb?.appearanceId})`);
      invariant(APPEARANCE_ID_PATTERN.test(tomb.appearanceId), `tombstone appearanceId 非法：${tomb.appearanceId}`);
      invariant(!seenTombstoneAppearances.has(tomb.appearanceId), `重复的 tombstone：${tomb.appearanceId}`);
      invariant(!activeAppearances.has(tomb.appearanceId),
        `tombstone 与当前活动目录记录相交（恢复记录未退出 tombstone）：${tomb.appearanceId}`);
      seenTombstoneAppearances.add(tomb.appearanceId);
      invariant(SHA256_PATTERN.test(tomb.previousArticleRevisionId), `tombstone previousArticleRevisionId 非法：${tomb.appearanceId}`);
      invariant(['site-removed', 'retracted', 'replaced'].includes(tomb.reason), `tombstone reason 非法：${tomb.reason}`);
      invariant(COMMIT_OID_PATTERN.test(tomb.sourceCommit), `tombstone sourceCommit 非法：${tomb.sourceCommit}`);
      invariant(
        ISO_TIMESTAMP_WITH_TZ_PATTERN.test(tomb.effectiveAt) && Number.isFinite(Date.parse(tomb.effectiveAt)),
        `tombstone effectiveAt 非法：${tomb.effectiveAt}`
      );
      if (tomb.reason === 'retracted') {
        invariant(
          typeof tomb.evidenceUrl === 'string' && /^https:\/\/[^\s<>"\\]+$/.test(tomb.evidenceUrl)
          && typeof tomb.note === 'string' && tomb.note.trim().length > 0,
          `正式撤稿 tombstone 缺少 HTTPS evidenceUrl 或说明：${tomb.appearanceId}`
        );
      }
      if (tomb.reason === 'replaced') {
        invariant(
          typeof tomb.replacementAppearanceId === 'string' && activeAppearances.has(tomb.replacementAppearanceId),
          `replaced tombstone 的替换目标不在当前活动目录中：${tomb.appearanceId}`
        );
      }
    }
    actualTombstoneCount += tombs.length;
  }
  invariant(actualTombstoneCount === snapshot.tombstoneCount, 'tombstone 总条数不闭合');

  // 6. Verify ALL detail JSONs, ALL article HTML fragments, sidecars, and bundled asset descriptors
  const detailSchema = indexProtocols.declaredSchema(
    DESKTOP_DETAIL_CONTRACT, DESKTOP_DETAIL_CONTRACT, indexProtocols.schemaFingerprint(DESKTOP_DETAIL_CONTRACT)
  );
  const verifiedDetails = new Set();
  const verifiedArticles = new Map(); // url -> { bytes, sha256 }
  const verifiedBundledFiles = new Map(); // url -> { bytes, sha256 }
  const verifiedSidecarAbstracts = new Map(); // url -> string | null
  const distinctPaperKeys = new Set();

  for (const [appearanceId, row] of activeAppearances.entries()) {
    hasExactKeys(row.detail, detailSchema.descriptorFields, `catalog.detail(${appearanceId})`);
    const detailMatch = typeof row.detail.url === 'string' ? row.detail.url.match(DETAIL_URL_PATTERN) : null;
    invariant(
      detailMatch && detailMatch[1] === row.detail.sha256
      && Number.isSafeInteger(row.detail.bytes) && row.detail.bytes > 0 && row.detail.bytes <= MAX_DESKTOP_DETAIL_BYTES,
      `详情描述符非法：${appearanceId}`
    );
    verifiedDetails.add(row.detail.url);
    const detailRead = readVerifiedBytes(
      root, row.detail.url, row.detail.bytes, row.detail.sha256, MAX_DESKTOP_DETAIL_BYTES, row.detail.url
    );
    const { value: detail } = parseJsonStrict(detailRead.buffer, row.detail.url);
    invariant(indexProtocols.isCurrentHeader(detail, DESKTOP_DETAIL_CONTRACT),
      `详情 JSON 合同声明或结构指纹未登记：${row.detail.url}`);
    hasExactKeys(detail, ['contract', 'schemaFingerprint', ...detailSchema.fields], row.detail.url);

    // Prevent cross-paper / cross-snapshot mixups
    invariant(
      detail.appearanceId === appearanceId
      && detail.paperId === row.paperId
      && detail.identityStatus === row.identityStatus
      && detail.sourceKind === row.sourceKind
      && detail.sourceVersion?.sourceVersionId === row.sourceVersionId
      && detail.appearance?.appearanceId === appearanceId
      && detail.appearance?.pageType === row.pageType
      && detail.appearance?.publicationStatus === row.publicationStatus
      && detail.articleRevision?.articleRevisionId === row.articleRevisionId
      && detail.articleRevision?.appearanceId === appearanceId
      && detail.dates?.blogPublishedAt === row.blogPublishedAt
      && detail.dates?.articleUpdatedAt === row.articleUpdatedAt,
      `目录记录与详情记录字段不一致（串稿或混版本）：${appearanceId}`
    );

    if (row.pageType === 'paper') {
      if (row.identityStatus === 'verified') {
        invariant(typeof row.paperId === 'string' && row.paperId.length > 0, `已核验论文缺少 paperId：${appearanceId}`);
        distinctPaperKeys.add(row.paperId);
      } else {
        invariant(row.paperId === null && row.sourceVersionId === null, `未核验论文不得伪造 paperId 或 sourceVersionId：${appearanceId}`);
        distinctPaperKeys.add(`unverified:${appearanceId}`);
      }
      invariant(
        Array.isArray(detail.appearance.memberAppearanceIds) && detail.appearance.memberAppearanceIds.length === 0
        && Array.isArray(detail.appearance.memberPaperIds) && detail.appearance.memberPaperIds.length === 0,
        `单篇论文页不得声明汇总成员关系：${appearanceId}`
      );
    } else {
      invariant(
        row.paperId === null && row.sourceVersionId === null && row.identityStatus === 'aggregate-page'
        && detail.titles?.originalTitle === null,
        `汇总页不得伪装为单篇论文身份：${appearanceId}`
      );
      invariant(Array.isArray(detail.appearance.memberAppearanceIds) && Array.isArray(detail.appearance.memberPaperIds),
        `汇总页成员关系必须为数组：${appearanceId}`);
      for (const memberApp of detail.appearance.memberAppearanceIds) {
        const target = activeAppearances.get(memberApp);
        invariant(target && target.pageType === 'paper', `汇总页引用了不存在或非单篇的成员页面：${appearanceId} -> ${memberApp}`);
      }
    }

    if (row.publicationStatus === 'retracted') {
      invariant(
        detail.appearance.retraction
        && typeof detail.appearance.retraction.evidenceUrl === 'string'
        && /^https:\/\/[^\s<>"\\]+$/.test(detail.appearance.retraction.evidenceUrl)
        && typeof detail.appearance.retraction.note === 'string'
        && detail.appearance.retraction.note.trim().length > 0,
        `retracted 页面缺少真实 HTTPS 撤稿证据：${appearanceId}`
      );
    }

    // Citation check
    invariant(
      detail.citation && indexProtocols.hasValidHeader(detail.citation.sourceRecord, 'paper-citation-source')
      && Array.isArray(detail.citation.missingFields) && detail.citation.fieldStatus && typeof detail.citation.fieldStatus === 'object',
      `详情 citation 结构或来源头非法：${appearanceId}`
    );
    if (!detail.citation.sourceRecord.date) {
      invariant(detail.dates.paperPublishedAt === null, `不得使用博客日期伪造缺失的论文发表日期：${appearanceId}`);
    }

    // Sidecars & abstract check
    invariant(detail.sidecars && typeof detail.sidecars.available === 'boolean' && detail.sidecars.files,
      `详情 sidecars 结构非法：${appearanceId}`);
    if (detail.sidecars.available) {
      for (const sName of ['citation.json', 'citation.bib', 'citation.ris', 'rethink-context.json']) {
        const sDesc = detail.sidecars.files[sName];
        invariant(sDesc && typeof sDesc.url === 'string' && SHA256_PATTERN.test(sDesc.sha256) && sDesc.bytes > 0,
          `详情 sidecar 描述符缺失：${appearanceId} ${sName}`);
        let cached = verifiedBundledFiles.get(sDesc.url);
        if (!cached) {
          const sRead = readVerifiedBytes(root, sDesc.url, sDesc.bytes, sDesc.sha256, 512 * 1024, sDesc.url);
          cached = { bytes: sRead.buffer.length, sha256: sRead.sha256 };
          verifiedBundledFiles.set(sDesc.url, cached);
          if (sName === 'rethink-context.json') {
            const { value: ctxVal } = parseJsonStrict(sRead.buffer, sDesc.url);
            invariant(indexProtocols.hasValidHeader(ctxVal, 'paper-research-context'), `上下文协议头非法：${sDesc.url}`);
            verifiedSidecarAbstracts.set(sDesc.url, ctxVal.abstract && ctxVal.abstract.length > 0 ? ctxVal.abstract : null);
          }
        }
        invariant(cached.bytes === sDesc.bytes && cached.sha256 === sDesc.sha256, `sidecar 缓存核对不符：${sDesc.url}`);
      }
      const expectedAbstract = verifiedSidecarAbstracts.get(detail.sidecars.files['rethink-context.json'].url) ?? null;
      invariant(detail.abstract === expectedAbstract, `详情原摘要与已核验 rethink-context.json 不一致：${appearanceId}`);
    } else {
      invariant(detail.abstract === null, `无已核验上下文 sidecar 时严禁用 AI 摘要冒充原摘要：${appearanceId}`);
    }

    // Article HTML fragment check
    const artDesc = detail.articleRevision.articleDescriptor;
    hasExactKeys(artDesc, detailSchema.descriptorFields, `articleDescriptor(${appearanceId})`);
    const artMatch = typeof artDesc.url === 'string' ? artDesc.url.match(ARTICLE_URL_PATTERN) : null;
    invariant(
      artMatch && artMatch[1] === artDesc.sha256
      && Number.isSafeInteger(artDesc.bytes) && artDesc.bytes > 0 && artDesc.bytes <= MAX_DESKTOP_ARTICLE_BYTES,
      `正文描述符非法：${appearanceId}`
    );
    let cachedArticle = verifiedArticles.get(artDesc.url);
    if (!cachedArticle) {
      const artRead = readVerifiedBytes(root, artDesc.url, artDesc.bytes, artDesc.sha256, MAX_DESKTOP_ARTICLE_BYTES, artDesc.url);
      const artHtml = decodeUtf8Strict(artRead.buffer, artDesc.url);
      assertSafeArticleHtml(artHtml, artDesc.url);
      cachedArticle = { bytes: artRead.buffer.length, sha256: artRead.sha256 };
      verifiedArticles.set(artDesc.url, cachedArticle);
    }
    invariant(cachedArticle.bytes === artDesc.bytes && cachedArticle.sha256 === artDesc.sha256,
      `正文缓存大小或 SHA 不一致：${artDesc.url}`);

    // Resources check
    invariant(Array.isArray(detail.resources) && detail.resources.length <= MAX_DESKTOP_ARTICLE_RESOURCES,
      `详情资源列表非法：${appearanceId}`);
    let bundledBytesSum = 0;
    for (const res of detail.resources) {
      invariant(
        res && typeof res.resourceId === 'string' && res.resourceId
        && typeof res.kind === 'string' && res.kind
        && typeof res.mediaType === 'string' && res.mediaType
        && typeof res.sourceUrl === 'string' && res.sourceUrl
        && typeof res.requiredForOffline === 'boolean'
        && ['bundled', 'external', 'missing'].includes(res.availability),
        `资源记录字段非法：${appearanceId}`
      );
      if (res.availability === 'bundled') {
        invariant(res.descriptor && typeof res.descriptor === 'object', `bundled 资源缺少文件描述符：${appearanceId}`);
        hasExactKeys(res.descriptor, detailSchema.descriptorFields, `resource.descriptor(${appearanceId})`);
        invariant(
          Number.isSafeInteger(res.descriptor.bytes) && res.descriptor.bytes > 0 && res.descriptor.bytes <= MAX_DESKTOP_ASSET_BYTES
          && SHA256_PATTERN.test(res.descriptor.sha256),
          `bundled 资源大小或 SHA 非法：${appearanceId}`
        );
        let cachedAsset = verifiedBundledFiles.get(res.descriptor.url);
        if (!cachedAsset) {
          const assetRead = readVerifiedBytes(
            root, res.descriptor.url, res.descriptor.bytes, res.descriptor.sha256, MAX_DESKTOP_ASSET_BYTES, res.descriptor.url
          );
          cachedAsset = { bytes: assetRead.buffer.length, sha256: assetRead.sha256 };
          verifiedBundledFiles.set(res.descriptor.url, cachedAsset);
        }
        invariant(cachedAsset.bytes === res.descriptor.bytes && cachedAsset.sha256 === res.descriptor.sha256,
          `bundled 资源与实际文件不一致：${res.descriptor.url}`);
        bundledBytesSum += res.descriptor.bytes;
      } else {
        invariant(res.descriptor === null, `external/missing 资源禁止伪造 descriptor 或 0 字节 SHA：${appearanceId}`);
      }
    }
    invariant(bundledBytesSum <= MAX_DESKTOP_BUNDLED_ASSETS_BYTES, `单篇捆绑资源总字节越界：${appearanceId}`);
  }

  invariant(snapshot.paperCount === distinctPaperKeys.size,
    `snapshot.paperCount (${snapshot.paperCount}) 与实际去重论文数 (${distinctPaperKeys.size}) 不一致`);

  // Enforce 100% exact set equality between client/details files on disk and verified reachable descriptors
  const reachableDetailsFiles = new Set([
    'client/details/manifest.json',
    manifest.snapshot.url,
    ...seenCatalogShardUrls,
    ...seenTombstoneShardUrls,
    ...verifiedDetails,
    ...verifiedArticles.keys(),
    ...[...verifiedBundledFiles.keys()].filter(rel => rel.startsWith('client/details/'))
  ]);
  for (const diskFile of diskDetailsFiles) {
    invariant(reachableDetailsFiles.has(diskFile), `client/details 存在未被当前快照引用的残留或伪造文件：${diskFile}`);
  }
  invariant(diskDetailsFiles.size === reachableDetailsFiles.size,
    `client/details 磁盘文件数 (${diskDetailsFiles.size}) 与可达引用集合 (${reachableDetailsFiles.size}) 不一致`);

  return {
    snapshotId: manifest.snapshotId,
    sourceCommit: manifest.sourceCommit,
    recordCount: snapshot.recordCount,
    paperCount: snapshot.paperCount,
    appearanceCount: snapshot.appearanceCount,
    tombstoneCount: snapshot.tombstoneCount,
    catalogShards: snapshot.catalogShards.length,
    tombstoneShards: snapshot.tombstoneShards.length,
    verifiedArticles: verifiedArticles.size,
    verifiedBundledFiles: verifiedBundledFiles.size
  };
}

function verifyBuild(buildDir) {
  const root = path.resolve(buildDir);
  const allFiles = walkFiles(root);
  const home = readRequired(path.join(root, 'index.html'));
  for (const file of allFiles.filter(file => /\.(?:html|js)$/.test(file))) {
    invariant(!/(?:127\.0\.0\.1|localhost|\[::1\]):43128\b|data-companion-url|companionUrl|COMPANION_|pageExcerpt|npm run paper:rethink/.test(fs.readFileSync(file, 'utf8')),
      `构建产物残留已取消的本机助手依赖：${file}`);
  }
  const headStats = verifyHead(home, root);
  const editionFeature = verifyEditionFeature(root, JSON.parse(readRequired(path.join(__dirname, '..', 'data', 'edition-features-auto.json'))));

  const rssFile = path.join(root, 'index.xml');
  const rssStats = verifyRss(readRequired(rssFile), fs.statSync(rssFile).size);
  const nestedFeeds = allFiles.filter((file) => path.basename(file) === 'index.xml' && file !== rssFile);
  invariant(nestedFeeds.length === 0, `禁止 section/taxonomy feed：${nestedFeeds.slice(0, 5).join(', ')}`);

  const indexFile = path.join(root, 'index.json');
  const indexText = readRequired(indexFile);
  invariant(fs.statSync(indexFile).size <= MAX_INDEX_BYTES, '索引入口文件超过大小限制');
  const indexData = JSON.parse(indexText);
  const indexStats = Array.isArray(indexData)
    ? verifySearchIndex(indexText, fs.statSync(indexFile).size)
    : verifySearchManifest(indexData, root);
  const clientIndex = JSON.parse(readRequired(path.join(root, 'client', 'index.json')));
  invariant(clientIndex.contract === INDEX_CONTRACT && indexData.contract !== INDEX_CONTRACT,
    '新客户端索引与已发行客户端兼容入口必须分别使用对应格式');
  const clientIndexStats = verifySearchManifest(clientIndex, root);
  invariant(clientIndexStats.itemCount === indexStats.itemCount && clientIndexStats.recordOrderSha256 === indexStats.recordOrderSha256,
    '新旧索引的页面集合或顺序不一致');
  const searchScripts = walkFiles(path.join(root, 'assets', 'js')).filter((file) => /search.*\.js$/i.test(path.basename(file)));
  invariant(searchScripts.length > 0, '缺少构建后的搜索脚本');
  for (const file of searchScripts) {
    const source = fs.readFileSync(file, 'utf8');
    invariant(!/\.innerHTML\s*=/.test(source), `搜索脚本禁止 innerHTML 注入：${file}`);
    invariant(/textContent/.test(source), `搜索脚本必须使用 textContent：${file}`);
  }
  const libraryScripts = allFiles.filter((file) => /paper-library.*\.js$/i.test(path.basename(file)));
  invariant(libraryScripts.length > 0, '缺少构建后的论文库脚本');
  for (const file of libraryScripts) {
    const source = fs.readFileSync(file, 'utf8');
    invariant(!/\.innerHTML\s*=/.test(source), `论文库脚本禁止 innerHTML 注入：${file}`);
    invariant(/textContent/.test(source), `论文库脚本必须使用 textContent：${file}`);
    invariant(/\.origin/.test(source) && /\.pathname\.startsWith/.test(source), `论文库脚本缺少同源/base-path URL 门禁：${file}`);
    invariant(/\.username/.test(source) && /\.password/.test(source), `论文库脚本缺少 URL 凭据拒绝：${file}`);
  }
  const paperTools = verifyPaperToolCoverage(
    allFiles.filter((file) => file.startsWith(`${path.join(root, 'posts')}${path.sep}`)), root
  );
  // 模板整体失效时，声明会从所有页面一起消失，构建仍可能成功。用源 Markdown
  // 中承诺了 /client/papers/ 附属资料的页面数做数量对账，把静默降级变成构建错误。
  const declaredSidecarPages = countDeclaredClientSidecarSources();
  invariant(paperTools.sidecarPages === declaredSidecarPages,
    `客户端声明数量与源页面不一致：产物 ${paperTools.sidecarPages}，源页面 ${declaredSidecarPages}`);

  const desktopDetails = verifyDesktopDetails(root);
  // Ensure desktop catalog covers every non-chrome research page in client/index.json
  let expectedResearchRecords = 0;
  for (const shard of clientIndex.shards) {
    const arr = JSON.parse(fs.readFileSync(path.join(root, 'client', shard.url), 'utf8'));
    for (const item of arr) {
      if (item.pageType !== 'page') expectedResearchRecords += 1;
    }
  }
  invariant(desktopDetails.recordCount === expectedResearchRecords,
    `桌面详情目录条数 (${desktopDetails.recordCount}) 与搜索索引研究页条数 (${expectedResearchRecords}) 不一致`);

  const stats = {
    htmlLanguage: headStats.htmlLanguage,
    icons: headStats.iconCount,
    editionFeature,
    rss: rssStats,
    searchIndex: indexStats,
    clientSearchIndex: clientIndexStats,
    desktopDetails,
    searchScripts: searchScripts.length,
    libraryScripts: libraryScripts.length,
    paperTools,
    navigation: verifyPageNavigation(root)
  };
  process.stdout.write(`${JSON.stringify(stats, null, 2)}\n`);
  return stats;
}

if (require.main === module) {
  try {
    verifyBuild(process.argv[2] || 'public');
  } catch (error) {
    process.stderr.write(`verify-build: ${error.message}\n`);
    process.exitCode = 1;
  }
}

module.exports = {
  extractHead, verifyHead, verifyRss, verifySearchIndex,
  verifyPaperToolCoverage, verifyBuild, verifySearchManifest, verifyDesktopDetails
};
