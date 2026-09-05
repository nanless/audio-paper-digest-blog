'use strict';

const fs = require('node:fs');
const path = require('node:path');

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

function walkFiles(root) {
  const output = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) output.push(...walkFiles(full));
    else output.push(full);
  }
  return output;
}

function verifyBuild(buildDir) {
  const root = path.resolve(buildDir);
  const home = readRequired(path.join(root, 'index.html'));
  const headStats = verifyHead(home, root);

  const rssFile = path.join(root, 'index.xml');
  const rssStats = verifyRss(readRequired(rssFile), fs.statSync(rssFile).size);
  const nestedFeeds = walkFiles(root).filter((file) => path.basename(file) === 'index.xml' && file !== rssFile);
  invariant(nestedFeeds.length === 0, `禁止 section/taxonomy feed：${nestedFeeds.slice(0, 5).join(', ')}`);

  const indexFile = path.join(root, 'index.json');
  const indexStats = verifySearchIndex(readRequired(indexFile), fs.statSync(indexFile).size);
  const searchScripts = walkFiles(path.join(root, 'assets', 'js')).filter((file) => /search.*\.js$/i.test(path.basename(file)));
  invariant(searchScripts.length > 0, '缺少构建后的搜索脚本');
  for (const file of searchScripts) {
    const source = fs.readFileSync(file, 'utf8');
    invariant(!/\.innerHTML\s*=/.test(source), `搜索脚本禁止 innerHTML 注入：${file}`);
    invariant(/textContent/.test(source), `搜索脚本必须使用 textContent：${file}`);
  }
  const libraryScripts = walkFiles(root).filter((file) => /paper-library.*\.js$/i.test(path.basename(file)));
  invariant(libraryScripts.length > 0, '缺少构建后的论文库脚本');
  for (const file of libraryScripts) {
    const source = fs.readFileSync(file, 'utf8');
    invariant(!/\.innerHTML\s*=/.test(source), `论文库脚本禁止 innerHTML 注入：${file}`);
    invariant(/textContent/.test(source), `论文库脚本必须使用 textContent：${file}`);
    invariant(/\.origin/.test(source) && /\.pathname\.startsWith/.test(source), `论文库脚本缺少同源/base-path URL 门禁：${file}`);
    invariant(/\.username/.test(source) && /\.password/.test(source), `论文库脚本缺少 URL 凭据拒绝：${file}`);
  }

  const stats = {
    htmlLanguage: headStats.htmlLanguage,
    icons: headStats.iconCount,
    rss: rssStats,
    searchIndex: indexStats,
    searchScripts: searchScripts.length,
    libraryScripts: libraryScripts.length
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

module.exports = { extractHead, verifyHead, verifyRss, verifySearchIndex, verifyBuild };
