'use strict';

const fs = require('node:fs');
const path = require('node:path');

function decode(value) {
  return value.replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[\da-f]+);/gi, entity => {
    const named = { '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>' };
    if (named[entity]) return named[entity];
    const code = entity[2].toLowerCase() === 'x' ? parseInt(entity.slice(3), 16) : parseInt(entity.slice(2), 10);
    return Number.isInteger(code) && code <= 0x10ffff ? String.fromCodePoint(code) : entity;
  });
}

function attributes(tag) {
  const result = {};
  for (const match of tag.matchAll(/\s([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
    result[match[1].toLowerCase()] = decode(match[2] ?? match[3] ?? match[4] ?? '');
  }
  return result;
}

function filesUnder(root) {
  return fs.readdirSync(root, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(root, entry.name);
    return entry.isDirectory() ? filesUnder(file) : [file];
  });
}

// This checks rendered navigation, not the scientific accuracy of article text.
// Read one document at a time; retain only IDs and local fragment references.
function verifyPageNavigation(buildDir, baseUrl = 'https://nanless.github.io/audio-paper-digest-blog/') {
  const root = path.resolve(buildDir);
  const base = new URL(baseUrl);
  const files = filesUnder(root);
  const fileSet = new Set(files.map(file => path.relative(root, file).split(path.sep).join('/')));
  const pages = new Map();
  const fragments = [];
  const errors = [];
  let references = 0;
  let redirects = 0;
  const fail = (relative, message) => errors.push(`${relative}: ${message}`);
  for (const file of files.filter(item => item.endsWith('.html'))) {
    const relative = path.relative(root, file).split(path.sep).join('/');
    const documentUrl = new URL(relative.split('/').map(encodeURIComponent).join('/'), base);
    // Preserve the script opening tag for src checks, ignore JS/JSON contents.
    const html = fs.readFileSync(file, 'utf8').replace(/<!--[\s\S]*?-->/g, '')
      .replace(/(<script\b[^>]*>)[\s\S]*?<\/script>/gi, '$1</script>')
      .replace(/(<style\b[^>]*>)[\s\S]*?<\/style>/gi, '$1</style>');
    const ids = new Set();
    let h1 = 0;
    let main = 0;
    let title = 0;
    let language = '';
    let redirect = false;
    for (const match of html.matchAll(/<([a-z][\w:-]*)\b(?:"[^"]*"|'[^']*'|[^'">])*>/gi)) {
      const tag = match[1].toLowerCase();
      const attrs = attributes(match[0]);
      if (tag === 'meta' && (attrs['http-equiv'] || '').toLowerCase() === 'refresh') redirect = true;
      if (tag === 'html') language = attrs.lang || '';
      if (tag === 'h1') h1 += 1;
      if (tag === 'main') main += 1;
      if (tag === 'title') title += 1;
      if (attrs.id) {
        if (ids.has(attrs.id)) fail(relative, `重复 id ${attrs.id}`);
        ids.add(attrs.id);
      }
      if (tag === 'img' && !Object.hasOwn(attrs, 'alt')) fail(relative, '图片缺少 alt 属性');
      const href = tag === 'a' ? attrs.href : ['img', 'script'].includes(tag) ? attrs.src
        : tag === 'link' && (attrs.rel || '').split(/\s+/).includes('stylesheet') ? attrs.href : '';
      if (!href) continue;
      references += 1;
      let url;
      try { url = new URL(href, documentUrl); } catch { fail(relative, `无效链接 ${href}`); continue; }
      if (url.origin !== base.origin || !url.pathname.startsWith(base.pathname)) continue;
      let target;
      let fragment;
      try {
        target = decodeURIComponent(url.pathname.slice(base.pathname.length));
        fragment = decodeURIComponent(url.hash.slice(1));
      } catch { fail(relative, `无效 URL 编码 ${href}`); continue; }
      if (!fileSet.has(target) && fileSet.has(target.replace(/\/?$/, '/') + 'index.html')) target = target.replace(/\/?$/, '/') + 'index.html';
      if (!target) target = 'index.html';
      if (!fileSet.has(target)) { fail(relative, `站内目标不存在 ${href}`); continue; }
      if (tag === 'a' && fragment && target.endsWith('.html')) fragments.push({ relative, href, target, fragment });
    }
    if (redirect) redirects += 1;
    else {
      if (h1 !== 1) fail(relative, `页面应有一个 h1，实际 ${h1}`);
      if (main !== 1 || title !== 1 || !language) fail(relative, '页面缺少 main、title 或 lang');
    }
    pages.set(relative, ids);
  }
  for (const { relative, href, target, fragment } of fragments) {
    if (!pages.get(target)?.has(fragment)) fail(relative, `站内锚点不存在 ${href}`);
  }
  if (errors.length) throw new Error(`全站导航检查发现 ${errors.length} 项问题\n${errors.slice(0, 20).join('\n')}`);
  return { htmlPages: pages.size, redirectPages: redirects, references, fragmentLinks: fragments.length };
}

if (require.main === module) {
  try { console.log(JSON.stringify(verifyPageNavigation(process.argv[2] || 'public'), null, 2)); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}
module.exports = { verifyPageNavigation };
