'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { CONTRACT, officialImage } = require('./select-edition-feature');
const PREFIX = '/audio-paper-digest-blog';

function check(value, message) { if (!value) throw new Error(`首页论文封面检查：${message}`); }
function decode(value) {
  return String(value).replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[\da-f]+);/gi, entity => {
    const named = { '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>' };
    if (named[entity.toLowerCase()]) return named[entity.toLowerCase()];
    const code = entity[2].toLowerCase() === 'x' ? parseInt(entity.slice(3), 16) : parseInt(entity.slice(2), 10);
    return Number.isInteger(code) && code >= 0 && code <= 0x10ffff ? String.fromCodePoint(code) : entity;
  });
}
function attrs(tag) {
  const result = {};
  for (const match of tag.matchAll(/\s([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g))
    result[match[1].toLowerCase()] = decode(match[2] ?? match[3] ?? match[4] ?? '');
  return result;
}
// A small structural reader handles the nested feature wrappers and Hugo's
// minified/unquoted attributes without requiring a browser or a whole-site scan.
function documentOf(source) {
  const html = source.replace(/<!--[\s\S]*?-->/g, '').replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '');
  const root = { tag: '', children: [], start: 0, end: html.length };
  const stack = [root], nodes = [];
  const voids = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
  for (const match of html.matchAll(/<\/?([a-z][\w:-]*)\b[^>]*>/gi)) {
    const tag = match[1].toLowerCase();
    if (match[0].startsWith('</')) {
      const index = stack.findLastIndex(node => node.tag === tag);
      if (index > 0) { for (const node of stack.slice(index)) node.end = match.index + match[0].length; stack.length = index; }
      continue;
    }
    const node = { tag, attrs: attrs(match[0]), children: [], start: match.index, end: match.index + match[0].length };
    stack.at(-1).children.push(node); nodes.push(node);
    // In HTML, a slash before '>' does not close a non-void element. In
    // particular Hugo emits href=/posts/date/> with the slash in the URL.
    // Explicit closing ancestors also unwind any inline SVG descendants.
    if (!voids.has(tag)) stack.push(node);
  }
  return { root, nodes, html };
}
function hasClass(node, name) { return (node.attrs?.class || '').split(/\s+/).includes(name); }
function within(node, nodes) { return nodes.filter(child => child.start > node.start && child.end <= node.end); }
function textOf(doc, node) { return decode(doc.html.slice(node.start, node.end).replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim(); }
function requiredHtml(root, relative) {
  const file = path.join(root, relative);
  check(fs.existsSync(file), `缺少构建页面 ${relative}`);
  return documentOf(fs.readFileSync(file, 'utf8'));
}
function prefixed(route) { return PREFIX + route; }
function officialSource(record) {
  const source = String(record.sourceUrl || '').match(/^https:\/\/arxiv\.org\/abs\/([0-9]{4}\.[0-9]{4,5}v[1-9][0-9]*)$/);
  return source && source[1].replace(/v\d+$/, '') === record.arxivId && officialImage(record.sourceImageUrl, source[1]);
}

function verifyEditionFeature(buildDir, manifest) {
  check(manifest?.contract === CONTRACT, '缺少或不支持自动选图清单');
  const selection = manifest.selection;
  check(selection && ['selected', 'fallback'].includes(selection.status), '自动选图状态无效');
  const root = path.resolve(buildDir), home = requiredHtml(root, 'index.html');
  const features = home.nodes.filter(node => hasClass(node, 'edition-feature'));
  const focus = home.nodes.find(node => hasClass(node, 'edition-focus'));
  const latestDate = focus && within(focus, home.nodes).find(node => node.tag === 'time')?.attrs.datetime;
  check(selection.latestDate === '' || /^\d{4}-\d{2}-\d{2}$/.test(selection.latestDate), '最新日报日期无效');
  if (selection.latestDate) check(latestDate === selection.latestDate, '首页最新日报日期与自动清单不一致');
  else check(!latestDate, '自动清单声称没有日报，但首页仍显示最新日报日期');
  if (selection.status === 'fallback') {
    check(features.length <= 1, '回退首页出现多个选读封面');
    for (const feature of features) {
      check(selection.latestDate && feature.attrs['data-edition-date'] === selection.latestDate, '回退首页误用了其他日期的选读');
      check(feature.attrs['data-automatic'] !== 'true', '回退首页不得宣称自动选图成功');
    }
    return { status: 'fallback', latestDate: selection.latestDate, featureCount: features.length };
  }

  const record = manifest.editions?.[selection.latestDate];
  check(record && record.date === selection.latestDate, '选中记录日期与最新日报不一致');
  check(/^\/posts\/[a-z0-9][a-z0-9-]*\/$/.test(record.paperPath || ''), '选中论文路径无效');
  check(features.length === 1, '自动选图成功时首页必须恰好显示一个封面');
  const feature = features[0], descendants = within(feature, home.nodes);
  check(feature.attrs['data-automatic'] === 'true', '封面缺少自动选图标记');
  check(feature.attrs['data-edition-date'] === record.date && feature.attrs['data-paper-path'] === record.paperPath, '封面日期或论文身份不一致');
  const ctas = home.nodes.filter(node => node.tag === 'a' && textOf(home, node).replace(/\s*↗$/, '') === '阅读本期完整速递');
  check(ctas.length === 1 && ctas[0].attrs.href === prefixed(`/posts/${record.date}/`) && ctas[0].start < feature.start,
    '完整日报主入口缺失、指向错误或被放到选读之后');

  let expectedImage;
  if (record.imageKind === 'official') {
    check(officialSource(record), '官方原图不属于论文的同一 arXiv 版本');
    check(record.imagePath === record.sourceImageUrl, '官方原图地址与清单不一致');
    expectedImage = record.sourceImageUrl;
  } else {
    check(record.imageKind === 'local', '选中图片类型无效');
    const image = String(record.imagePath || '').match(/^\/images\/papers\/([0-9]{4}\.[0-9]{4,5})\/figure-[a-zA-Z0-9-]+\.(?:png|svg)$/i);
    check(image && image[1] === record.arxivId, '本地图不属于选中论文');
    expectedImage = prefixed(record.imagePath);
    if (Object.hasOwn(record, 'renderedImageUrl')) {
      check(typeof record.renderedImageUrl === 'string' && record.renderedImageUrl.replace(/^\/audio-paper-digest-blog(?=\/)/, '') === record.imagePath, '本地图映射的渲染地址与清单不一致');
      check(officialSource(record), '映射原图不属于论文的同一 arXiv 版本');
    } else check(record.sourceImageUrl === record.imagePath || record.sourceImageUrl === expectedImage, '本地图的正文来源地址不一致');
    const imageFile = path.join(root, record.imagePath.slice(1));
    check(fs.existsSync(imageFile) && fs.statSync(imageFile).isFile(), '构建产物缺少选中原图');
    const sha = createHash('sha256').update(fs.readFileSync(imageFile)).digest('hex');
    check(sha === record.imageSha256, '本地图构建字节 SHA 与清单不一致');
  }
  const image = descendants.find(node => node.tag === 'img');
  check(image?.attrs.src === expectedImage, '首页封面图片地址与选中原图不一致');
  const read = descendants.find(node => node.tag === 'a' && hasClass(node, 'edition-feature__read'));
  check(read?.attrs.href === prefixed(record.paperPath), '完整解读入口没有指向选中论文');
  const original = descendants.find(node => node.tag === 'a' && hasClass(node, 'edition-feature__original'));
  check(original?.attrs.href === expectedImage, '查看完整原图入口地址错误');

  const daily = requiredHtml(root, `posts/${record.date}/index.html`);
  let inList = false, sections = 0, members = 0;
  for (const heading of daily.nodes.filter(node => node.tag === 'h2' || node.tag === 'h3')) {
    if (heading.tag === 'h2') { inList = textOf(daily, heading).includes('论文列表'); if (inList) sections++; }
    else if (inList) {
      const links = within(heading, daily.nodes).filter(node => node.tag === 'a' && node.attrs.href && !hasClass(node, 'anchor'));
      if (links.length === 1 && [record.paperPath, prefixed(record.paperPath)].some(route => links[0].attrs.href.replace(/\/$/, '') === route.replace(/\/$/, ''))) members++;
    }
  }
  check(sections === 1 && members === 1, '日报正文论文列表 H3 没有唯一的选中论文成员（排行链接不能代替正文）');
  const paper = requiredHtml(root, `${record.paperPath.slice(1)}index.html`);
  check(paper.nodes.some(node => node.tag === 'img' && node.attrs.src === (record.renderedImageUrl ?? record.sourceImageUrl)), '论文页面缺少清单中精确对应的原图引用');
  return { status: 'selected', latestDate: record.date, featureCount: 1, paperPath: record.paperPath, imageKind: record.imageKind, memberCount: members };
}

module.exports = { verifyEditionFeature };
