'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { CONTRACT: INDEX_CONTRACT, MAX_SHARD_BYTES, SHARD_URL_PATTERN } = require('./shard-search-index');

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
  invariant(manifest && manifest.contract === INDEX_CONTRACT, '索引分片合同非法');
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
    const file = path.join(buildDir, shard.url);
    invariant(fs.existsSync(file), `缺少构建产物：${file}`);
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
  return { itemCount, bytes, shards: manifest.shards.length, maxShardBytes: MAX_SHARD_BYTES };
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

function verifyPaperToolCoverage(files) {
  let paperPages = 0;
  let readingTools = 0;
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
    invariant(opening, `论文页缺少阅读与笔记工具区域：${file}`);
    const close = html.indexOf('</section>', opening.index);
    invariant(close > opening.index, `论文工具区域未闭合：${file}`);
    const tools = html.slice(opening.index, close + 10);
    invariant(tools.includes('data-reading-bookmark') && tools.includes('paper-tools__advanced')
      && tools.includes('paper-tool--pack') && tools.includes('paper-tools__copy-fallback')
      && tools.includes('<noscript>'), `论文页缺少阅读与笔记工具：${file}`);
    readingTools += 1;
    invariant(!/复制 AI 提问|保存到 Zotero|zotero\.org\/download\/connectors|paper-tool--selection-copy/.test(tools),
      `论文工具残留已移除的 AI/Zotero 入口：${file}`);
    const sourceTag = Array.from(tools.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi))
      .find(match => attributeValue(match[0], 'class') === 'paper-tools__citation-record');
    invariant(sourceTag, `论文工具缺少结构化引用来源：${file}`);
    let source;
    try { source = JSON.parse(sourceTag[1]); } catch (_) { throw new Error(`论文引用来源不是有效 JSON：${file}`); }
    invariant(source && source.contract === 'paper-citation-source-v1' && source.pageType === 'paper', `论文引用来源契约错误：${file}`);
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
  invariant(readingTools === paperPages, '论文页阅读工具覆盖不完整');
  return { paperPages, readingTools, richArxivTools, richConferenceTools, selectionOnlyFallbacks };
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
    allFiles.filter((file) => file.startsWith(`${path.join(root, 'posts')}${path.sep}`))
  );

  const stats = {
    htmlLanguage: headStats.htmlLanguage,
    icons: headStats.iconCount,
    rss: rssStats,
    searchIndex: indexStats,
    searchScripts: searchScripts.length,
    libraryScripts: libraryScripts.length,
    paperTools
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
  verifyPaperToolCoverage, verifyBuild, verifySearchManifest
};
