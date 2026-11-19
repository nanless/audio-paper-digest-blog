'use strict';

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const http = require('node:http');
const https = require('node:https');
const { execFileSync } = require('node:child_process');
const protocols = require('../assets/js/protocol-registry');
const tagCore = require('../assets/js/tag-core');
const { extractFrontMatter, frontMatterField } = require('./audit-content');

const SITE_ORIGIN = 'https://nanless.github.io';
const SITE_PREFIX = '/audio-paper-digest-blog/';

const MANIFEST_CONTRACT = protocols.contract('paper-desktop-manifest');
const SNAPSHOT_CONTRACT = protocols.contract('paper-desktop-snapshot');
const DETAIL_CONTRACT = protocols.contract('paper-desktop-detail');
const CITATION_SOURCE_CONTRACT = protocols.contract('paper-citation-source');
const SEARCH_INDEX_CONTRACT = protocols.contract('paper-search-index-manifest');

const MAX_MANIFEST_BYTES = 64 * 1024;
const MAX_SNAPSHOT_BYTES = 1024 * 1024;
const MAX_SHARD_BYTES = 1024 * 1024;
const MAX_SHARDS = 128;
const MAX_TOTAL_CATALOG_BYTES = 64 * 1024 * 1024;
const MAX_DETAIL_BYTES = 2 * 1024 * 1024;
const MAX_ARTICLE_BYTES = 16 * 1024 * 1024;
const MAX_ASSET_BYTES = 16 * 1024 * 1024;
const MAX_ARTICLE_RESOURCES = 512;
const MAX_BUNDLED_ARTICLE_ASSETS_BYTES = 64 * 1024 * 1024;
const MAX_SIDECAR_BYTES = 512 * 1024;

const SNAPSHOT_URL_PATTERN = /^client\/details\/snapshots\/([a-f0-9]{64})\.json$/;
const CATALOG_SHARD_URL_PATTERN = /^client\/details\/catalog\/([a-f0-9]{64})\.json$/;
const TOMBSTONE_SHARD_URL_PATTERN = /^client\/details\/tombstones\/([a-f0-9]{64})\.json$/;
const DETAIL_URL_PATTERN = /^client\/details\/papers\/([a-f0-9]{64})\.json$/;
const ARTICLE_URL_PATTERN = /^client\/details\/articles\/([a-f0-9]{64})\.html$/;
const APPEARANCE_ID_PATTERN = /^posts\/[a-z0-9][a-z0-9._-]*\/$/;
const SAFE_RELATIVE_URL_PATTERN = /^(?![/\\])(?!.*(?:^|\/)\.\.?(?:\/|$))(?!.*[?#%\\\u0000-\u001f\u007f])[A-Za-z0-9._/-]+$/;
const ISO_TIMESTAMP_WITH_TZ_PATTERN = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?(?:Z|[+-]\d{2}:\d{2})$/;
const COMMIT_OID_PATTERN = /^[a-f0-9]{40}$/;
const SHA256_PATTERN = /^[a-f0-9]{64}$/;

const SIDECAR_NAMES = Object.freeze(['citation.json', 'citation.bib', 'citation.ris', 'rethink-context.json']);

const EXPLICIT_UNAVAILABLE_AFFILIATIONS = new Set([
  '机构信息未能在本次解析中与作者逐人可靠绑定',
  '机构信息未在 arXiv HTML 中可靠披露',
  '机构信息未能从 arXiv PDF 文本可靠映射',
  '机构信息未能从会议 PDF 纯文本可靠映射',
  '机构信息未在会议 PDF 中可靠披露',
  '机构信息未可靠披露'
]);

const FORBIDDEN_CONTAINER_TAGS = new Set([
  'script', 'style', 'iframe', 'object', 'embed', 'applet', 'frame', 'frameset',
  'form', 'template', 'noscript', 'xmp', 'noembed', 'noframes', 'title', 'textarea',
  'svg', 'foreignobject', 'annotation-xml', 'select', 'option', 'optgroup', 'button', 'head'
]);
const STRIP_VOID_TAGS = new Set([
  'base', 'meta', 'link', 'input', 'keygen', 'param', 'track'
]);
const HTML_VOID_TAGS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'
]);
const MATHML_ALLOWED_TAGS = new Set([
  'math', 'mrow', 'mi', 'mn', 'mo', 'ms', 'mtext', 'mspace', 'msqrt', 'mroot', 'mfrac',
  'msub', 'msup', 'msubsup', 'munder', 'mover', 'munderover', 'mmultiscripts', 'mprescripts',
  'none', 'mtable', 'mtr', 'mtd', 'mpadded', 'mphantom', 'mstyle', 'menclose', 'semantics', 'annotation'
]);
const ALLOWED_HTML_TAGS = new Set([
  'div', 'section', 'article', 'aside', 'header', 'footer', 'nav',
  'p', 'blockquote', 'pre', 'hr', 'br', 'wbr',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'dl', 'dt', 'dd',
  'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption', 'colgroup', 'col',
  'figure', 'figcaption', 'details', 'summary',
  'a', 'em', 'strong', 'code', 'del', 'ins', 's', 'u', 'b', 'i', 'mark', 'small', 'sub', 'sup', 'span',
  'abbr', 'cite', 'dfn', 'kbd', 'q', 'rp', 'rt', 'ruby', 'samp', 'time', 'var',
  'img', 'picture', 'audio', 'video', 'source',
  ...MATHML_ALLOWED_TAGS
]);
const ALL_KNOWN_HTML_TAG_NAMES = new Set([
  ...FORBIDDEN_CONTAINER_TAGS,
  ...STRIP_VOID_TAGS,
  ...ALLOWED_HTML_TAGS
]);

const GLOBAL_ALLOWED_ATTRS = new Set([
  'id', 'class', 'title', 'lang', 'dir', 'role', 'tabindex', 'hidden'
]);
const BOOLEAN_ATTRS = new Set([
  'hidden', 'reversed', 'open', 'controls', 'muted', 'loop'
]);
const TAG_SPECIFIC_ALLOWED_ATTRS = Object.freeze({
  a: new Set(['href', 'target', 'rel']),
  img: new Set(['src', 'srcset', 'sizes', 'alt', 'width', 'height', 'loading', 'decoding']),
  source: new Set(['src', 'srcset', 'sizes', 'type', 'media']),
  audio: new Set(['src', 'controls', 'preload', 'muted', 'loop']),
  video: new Set(['src', 'poster', 'controls', 'preload', 'muted', 'loop', 'width', 'height']),
  td: new Set(['colspan', 'rowspan', 'scope', 'headers', 'style']),
  th: new Set(['colspan', 'rowspan', 'scope', 'headers', 'style']),
  col: new Set(['span', 'width']),
  colgroup: new Set(['span', 'width']),
  ol: new Set(['start', 'reversed', 'type']),
  li: new Set(['value']),
  details: new Set(['open']),
  blockquote: new Set(['cite']),
  q: new Set(['cite']),
  del: new Set(['cite', 'datetime']),
  ins: new Set(['cite', 'datetime']),
  time: new Set(['datetime'])
});
const MATHML_ALLOWED_ATTRS = new Set([
  'display', 'xmlns', 'encoding', 'mathvariant', 'displaystyle', 'scriptlevel',
  'stretchy', 'fence', 'separator', 'accent', 'accentunder', 'lspace', 'rspace',
  'width', 'height', 'depth', 'voffset', 'columnalign', 'rowalign', 'columnspacing',
  'rowspacing', 'columnlines', 'rowlines', 'frame', 'framespacing', 'equalrows',
  'equalcolumns', 'linethickness', 'notation', 'maxsize', 'minsize', 'movablelimits', 'symmetric'
]);
const SAFE_TABLE_CELL_STYLE_PATTERN = /^\s*text-align\s*:\s*(?:left|center|right|justify)\s*;?\s*$/i;

const ALLOWED_SVG_TAGS = new Set([
  'svg', 'g', 'defs', 'symbol', 'clippath', 'mask', 'pattern',
  'lineargradient', 'radialgradient', 'stop',
  'path', 'rect', 'circle', 'ellipse', 'line', 'polyline', 'polygon',
  'text', 'tspan', 'title', 'desc', 'marker', 'use'
]);
const SVG_FRAGMENT_REF_TAGS = new Set(['use', 'lineargradient', 'radialgradient', 'pattern']);

const MEDIA_TYPES_BY_EXT = Object.freeze({
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.avif': 'image/avif',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.flac': 'audio/flac',
  '.ogg': 'audio/ogg',
  '.m4a': 'audio/mp4',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.pdf': 'application/pdf'
});

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function sha256Hex(bytes) {
  return crypto.createHash('sha256').update(bytes).digest('hex');
}

function decodeUtf8Fatal(bytes, label) {
  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  } catch {
    throw new Error(`${label} 不是合法 UTF-8`);
  }
}

function parseJsonBytes(bytes, label) {
  const text = decodeUtf8Fatal(bytes, label);
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`${label} 不是合法 JSON`);
  }
}

function canonicalValue(value) {
  if (value === null || typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string') {
    if (typeof value === 'number') invariant(Number.isFinite(value), 'JSON 数值必须有限');
    return value;
  }
  if (Array.isArray(value)) return value.map(canonicalValue);
  if (value && typeof value === 'object') {
    const out = {};
    for (const key of Object.keys(value).sort()) {
      if (value[key] !== undefined) out[key] = canonicalValue(value[key]);
    }
    return out;
  }
  throw new Error('不支持的序列化值类型');
}

function serializeJsonBytes(value) {
  return Buffer.from(JSON.stringify(canonicalValue(value)), 'utf8');
}

function withNetworkDenied(fn) {
  const originalFetch = globalThis.fetch;
  const originalHttpRequest = http.request;
  const originalHttpGet = http.get;
  const originalHttpsRequest = https.request;
  const originalHttpsGet = https.get;
  const deny = () => {
    throw new Error('export-desktop-details 禁止任何网络或模型请求');
  };
  globalThis.fetch = deny;
  http.request = deny;
  http.get = deny;
  https.request = deny;
  https.get = deny;
  try {
    return fn();
  } finally {
    globalThis.fetch = originalFetch;
    http.request = originalHttpRequest;
    http.get = originalHttpGet;
    https.request = originalHttpsRequest;
    https.get = originalHttpsGet;
  }
}

function ensureRealDirectory(root, relative, create = false) {
  let current = root;
  for (const part of relative.split('/').filter(Boolean)) {
    invariant(part !== '.' && part !== '..' && !part.includes('\\'), `非法输出目录组件：${relative}`);
    current = path.join(current, part);
    if (!fs.existsSync(current)) {
      let brokenLink = false;
      try { fs.lstatSync(current); brokenLink = true; } catch (err) { if (err.code !== 'ENOENT') throw err; }
      invariant(!brokenLink, `输出路径存在悬空符号链接：${current}`);
      if (!create) return current;
      fs.mkdirSync(current, { mode: 0o755 });
    }
    const stat = fs.lstatSync(current);
    invariant(stat.isDirectory() && !stat.isSymbolicLink(), `输出路径必须为普通目录：${current}`);
  }
  return current;
}

function readRegularFile(root, relative, maxBytes, label) {
  invariant(typeof relative === 'string' && SAFE_RELATIVE_URL_PATTERN.test(relative), `${label} 路径非法：${relative}`);
  let cursor = root;
  const parts = relative.split('/');
  for (const part of parts.slice(0, -1)) {
    cursor = path.join(cursor, part);
    const stat = fs.lstatSync(cursor);
    invariant(stat.isDirectory() && !stat.isSymbolicLink(), `${label} 父目录必须为普通目录：${relative}`);
  }
  const full = path.join(root, relative);
  const before = fs.lstatSync(full);
  invariant(before.isFile() && !before.isSymbolicLink(), `${label} 必须为普通文件：${relative}`);
  invariant(before.size <= maxBytes, `${label} 超过大小上限 ${maxBytes} 字节：${relative} (${before.size})`);
  const bytes = fs.readFileSync(full);
  const after = fs.lstatSync(full);
  invariant(
    bytes.length === before.size && after.dev === before.dev && after.ino === before.ino && after.size === before.size,
    `${label} 在读取期间发生变化：${relative}`
  );
  return bytes;
}

function atomicWriteFile(file, bytes) {
  const dir = path.dirname(file);
  const temp = path.join(dir, `.${path.basename(file)}.tmp-${process.pid}-${crypto.randomUUID()}`);
  try {
    fs.writeFileSync(temp, bytes, { flag: 'wx', mode: 0o644 });
    fs.renameSync(temp, file);
  } finally {
    if (fs.existsSync(temp)) fs.unlinkSync(temp);
  }
}

function writeContentAddressedFile(root, relative, bytes) {
  invariant(SAFE_RELATIVE_URL_PATTERN.test(relative), `内容寻址路径非法：${relative}`);
  const parts = relative.split('/');
  ensureRealDirectory(root, parts.slice(0, -1).join('/'), true);
  const target = path.join(root, relative);
  let exists = false;
  try {
    const stat = fs.lstatSync(target);
    invariant(stat.isFile() && !stat.isSymbolicLink(), `内容寻址目标不是普通文件：${relative}`);
    exists = true;
    const current = fs.readFileSync(target);
    invariant(current.equals(bytes), `内容寻址路径已被不同字节占用：${relative}`);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  if (!exists) atomicWriteFile(target, bytes);
}

function decodeCodePointSafe(code) {
  if (!Number.isInteger(code) || code <= 0 || (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff) {
    return '\uFFFD';
  }
  return String.fromCodePoint(code);
}

function decodeHtmlEntities(value) {
  return String(value || '')
    .replace(/&#x0*([0-9a-f]+);?/gi, (_, hex) => {
      if (hex.length > 6) return '\uFFFD';
      return decodeCodePointSafe(Number.parseInt(hex, 16));
    })
    .replace(/&#0*(\d+);?/g, (_, dec) => {
      if (dec.length > 7) return '\uFFFD';
      return decodeCodePointSafe(Number.parseInt(dec, 10));
    })
    .replace(/&(colon|tab|newline|nbsp|amp|lt|gt|quot|apos);?/gi, (full, name) => {
      switch (name.toLowerCase()) {
        case 'colon': return ':';
        case 'tab': return '\t';
        case 'newline': return '\n';
        case 'nbsp': return '\u00a0';
        case 'amp': return '&';
        case 'lt': return '<';
        case 'gt': return '>';
        case 'quot': return '"';
        case 'apos': return "'";
        default: return full;
      }
    });
}

function escapeHtmlText(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlAttr(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function isAsciiWhitespace(ch) {
  return ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r' || ch === '\f';
}

// Exact WHATWG HTML5 tag & attribute state machine (§13.2.5.6–§13.2.5.40)
function scanHtmlTag(html, ltIndex) {
  const n = html.length;
  if (ltIndex < 0 || ltIndex + 1 >= n || html[ltIndex] !== '<') return null;
  let i = ltIndex + 1;
  let isClosing = false;
  if (html[i] === '/') {
    isClosing = true;
    i += 1;
  }
  if (i >= n || !/[A-Za-z]/.test(html[i])) return null;
  const nameStart = i;
  while (i < n && /[A-Za-z0-9:-]/.test(html[i])) i += 1;
  if (i < n && !isAsciiWhitespace(html[i]) && html[i] !== '/' && html[i] !== '>') {
    return null;
  }
  const rawTagName = html.slice(nameStart, i);
  const tagName = rawTagName.toLowerCase();
  const attrs = [];
  let selfClosing = false;

  while (i < n) {
    // BEFORE_ATTR_NAME state
    while (i < n && isAsciiWhitespace(html[i])) i += 1;
    if (i >= n) return null;
    if (html[i] === '>') {
      return { tagEnd: i, isClosing, rawTagName, tagName, attrs, selfClosing };
    }
    if (html[i] === '/') {
      // SELF_CLOSING_START_TAG state
      i += 1;
      if (i >= n) return null;
      if (html[i] === '>') {
        selfClosing = true;
        return { tagEnd: i, isClosing, rawTagName, tagName, attrs, selfClosing };
      }
      continue;
    }

    // ATTR_NAME state (note: '=' at start of attr name is part of attr name in HTML5)
    const attrStart = i;
    i += 1;
    while (i < n && !isAsciiWhitespace(html[i]) && html[i] !== '/' && html[i] !== '>' && html[i] !== '=') {
      i += 1;
    }
    const rawName = html.slice(attrStart, i);
    const name = rawName.toLowerCase();

    // AFTER_ATTR_NAME state
    while (i < n && isAsciiWhitespace(html[i])) i += 1;
    if (i >= n) return null;
    if (html[i] !== '=') {
      attrs.push({ rawName, name, value: null, quote: '', unquotedUnsafe: false });
      continue;
    }

    // BEFORE_ATTR_VALUE state (consume '=')
    i += 1;
    while (i < n && isAsciiWhitespace(html[i])) i += 1;
    if (i >= n) return null;
    if (html[i] === '"' || html[i] === "'") {
      const quote = html[i];
      i += 1;
      const valStart = i;
      while (i < n && html[i] !== quote) i += 1;
      if (i >= n) return null;
      const value = html.slice(valStart, i);
      i += 1;
      attrs.push({ rawName, name, value, quote, unquotedUnsafe: false });
    } else if (html[i] === '>') {
      attrs.push({ rawName, name, value: '', quote: '', unquotedUnsafe: true });
      return { tagEnd: i, isClosing, rawTagName, tagName, attrs, selfClosing };
    } else {
      // ATTR_VALUE_UNQUOTED state: quotes '"' / "'" / '=' do NOT open strings; '>' closes tag immediately!
      const valStart = i;
      while (i < n && !isAsciiWhitespace(html[i]) && html[i] !== '>') i += 1;
      if (i >= n) return null;
      const value = html.slice(valStart, i);
      const unquotedUnsafe = value.length === 0 || /["'=`<>]/.test(value);
      attrs.push({ rawName, name, value, quote: '', unquotedUnsafe });
      if (html[i] === '>') {
        return { tagEnd: i, isClosing, rawTagName, tagName, attrs, selfClosing };
      }
    }
  }
  return null;
}

function isSafeDataImageUrl(normalizedDecodedOriginal) {
  const trimmed = normalizedDecodedOriginal.trim();
  if (trimmed.includes('\uFFFD') || trimmed.includes('\u0000')) return false;
  if (/^data:image\/(?:png|jpeg|jpg|gif|webp);base64,[A-Za-z0-9+/=\s]+$/i.test(trimmed)) {
    return true;
  }
  if (/^data:image\/svg\+xml(?:;charset=utf-8)?,/i.test(trimmed)) {
    const comma = trimmed.indexOf(',');
    let svgText = '';
    try {
      svgText = decodeURIComponent(trimmed.slice(comma + 1));
    } catch {
      return false;
    }
    return isSafeInlineSvgPayload(svgText);
  }
  if (/^data:image\/svg\+xml;base64,([A-Za-z0-9+/=\s]+)$/i.test(trimmed)) {
    const comma = trimmed.indexOf(',');
    let svgText = '';
    try {
      svgText = Buffer.from(trimmed.slice(comma + 1).replace(/\s+/g, ''), 'base64').toString('utf8');
    } catch {
      return false;
    }
    return isSafeInlineSvgPayload(svgText);
  }
  return false;
}

// Exact WHATWG HTML5 comment scanner (§13.2.5.42–§13.2.5.50): handles <!-->, <!--->, -->, --!>, and EOF
function scanHtmlCommentEnd(html, ltIndex) {
  if (!html.startsWith('<!--', ltIndex)) return -1;
  const start = ltIndex + 4;
  if (start >= html.length) return html.length;
  if (html[start] === '>') return start + 1;
  if (html.startsWith('->', start)) return start + 2;
  for (let pos = start; pos < html.length; pos += 1) {
    if (html[pos] === '-') {
      if (html.startsWith('-->', pos)) return pos + 3;
      if (html.startsWith('--!>', pos)) return pos + 4;
    }
  }
  return html.length;
}

function isSafeInlineSvgPayload(svgText) {
  if (!svgText || svgText.includes('\u0000') || svgText.includes('\uFFFD')) return false;
  if (svgText.includes('<!--') || svgText.includes('<?')) return false;
  const decodedAll = decodeHtmlEntities(svgText);
  if (
    decodedAll.includes('\uFFFD')
    || decodedAll.includes('<!--')
    || decodedAll.includes('<?')
    || /<!DOCTYPE|<!ENTITY/i.test(svgText)
    || /<!DOCTYPE|<!ENTITY/i.test(decodedAll)
  ) {
    return false;
  }
  if (/<(?:script|iframe|object|embed|applet|foreignobject|set|animate|animatetransform|animatemotion|mpath|feimage|audio|video|form|style)\b/i.test(svgText)) {
    return false;
  }
  if (/<(?:script|iframe|object|embed|applet|foreignobject|set|animate|animatetransform|animatemotion|mpath|feimage|audio|video|form|style)\b/i.test(decodedAll)) {
    return false;
  }
  let cursor = 0;
  let sawSvgRoot = false;
  while (cursor < svgText.length) {
    const lt = svgText.indexOf('<', cursor);
    if (lt < 0) break;
    const parsed = scanHtmlTag(svgText, lt);
    if (!parsed) return false;
    if (!ALLOWED_SVG_TAGS.has(parsed.tagName)) return false;
    if (parsed.tagName === 'svg') sawSvgRoot = true;
    const seenAttrs = new Set();
    for (const attr of parsed.attrs) {
      if (seenAttrs.has(attr.name)) return false;
      seenAttrs.add(attr.name);
      // Require quoted attribute values on all SVG attributes
      if (attr.value === null || (attr.quote !== '"' && attr.quote !== "'")) return false;
      if (/^on/i.test(attr.name) || attr.name === 'srcdoc') return false;
      const val = decodeHtmlEntities(attr.value);
      if (val.includes('\uFFFD') || val.includes('\u0000')) return false;
      if (attr.name === 'href' || attr.name === 'xlink:href') {
        const compact = val.trim();
        if (!SVG_FRAGMENT_REF_TAGS.has(parsed.tagName) || !/^#[A-Za-z_][\w.-]*$/.test(compact)) {
          return false;
        }
      } else if (attr.name === 'style') {
        const cleanCss = val.replace(/\/\*[\s\S]*?\*\//g, '').replace(/[\u0000-\u0020\u007f]+/g, '').toLowerCase();
        if (
          cleanCss.includes('url(')
          || cleanCss.includes('expression(')
          || cleanCss.includes('@import')
          || cleanCss.includes('javascript:')
          || cleanCss.includes('vbscript:')
          || cleanCss.includes('-moz-binding')
          || cleanCss.includes('behavior:')
        ) {
          return false;
        }
      } else {
        const compactAttrVal = val.replace(/[\u0000-\u0020\u007f]+/g, '');
        if (/^[a-z][a-z0-9+.-]*:/i.test(compactAttrVal) && !(attr.name === 'xmlns' && compactAttrVal === 'http://www.w3.org/2000/svg')) {
          return false;
        }
      }
    }
    cursor = parsed.tagEnd + 1;
  }
  return sawSvgRoot;
}

// Strict positive URL scheme allowlist (§6: blocks zotero://, smb://, file://, javascript:, //, etc.)
function isUnsafeUrlValue(rawValue, options = {}) {
  if (typeof rawValue !== 'string') return true;
  const decoded = decodeHtmlEntities(rawValue);
  if (decoded.includes('\uFFFD') || decoded.includes('\u0000')) return true;
  const compact = decoded.replace(/[\u0000-\u0020\u007f]+/g, '');
  if (!compact) return true;
  if (
    compact.startsWith('//')
    || compact.startsWith('\\\\')
    || compact.startsWith('/\\')
    || compact.startsWith('\\/')
  ) {
    return true;
  }
  const firstDelim = compact.search(/[/?#]/);
  const head = firstDelim >= 0 ? compact.slice(0, firstDelim) : compact;
  if (head.includes(':')) {
    const schemeMatch = compact.match(/^([a-z][a-z0-9+.-]*):/i);
    if (!schemeMatch) return true;
    const scheme = schemeMatch[1].toLowerCase();
    if (scheme === 'https' || scheme === 'http') {
      return !/^https?:\/\/[A-Za-z0-9]/i.test(compact);
    }
    if (scheme === 'mailto') {
      return options.allowMailto !== true;
    }
    if (scheme === 'data') {
      if (options.allowDataImage !== true) return true;
      return !isSafeDataImageUrl(decoded);
    }
    if (scheme === 'icassp-img') {
      return options.allowLegacyPlaceholderScheme !== true;
    }
    return true;
  }
  return false;
}

function parseSrcsetCandidates(rawSrcset) {
  if (typeof rawSrcset !== 'string') return { valid: false, urls: [] };
  const decoded = decodeHtmlEntities(rawSrcset);
  if (decoded.includes('\uFFFD') || decoded.includes('\u0000')) return { valid: false, urls: [] };
  const rawItems = decoded.split(',');
  const urls = [];
  for (const rawItem of rawItems) {
    const trimmed = rawItem.trim();
    if (!trimmed) return { valid: false, urls: [] };
    const tokens = trimmed.split(/[\t\n\f\r ]+/).filter(Boolean);
    if (tokens.length === 0 || tokens.length > 2) return { valid: false, urls: [] };
    const candidateUrl = tokens[0];
    if (isUnsafeUrlValue(candidateUrl, { allowDataImage: false })) {
      return { valid: false, urls: [] };
    }
    if (tokens.length === 2 && !/^\d+(?:\.\d+)?[wx]$/i.test(tokens[1])) {
      return { valid: false, urls: [] };
    }
    urls.push(candidateUrl);
  }
  return { valid: urls.length > 0, urls };
}

function isAllowedAttribute(tagName, attr) {
  const name = attr.name;
  if (!/^[a-z][a-z0-9:-]*$/.test(name)) return false;
  if (name.startsWith('on') || name === 'srcdoc' || name === 'ping') return false;

  const isGlobal = GLOBAL_ALLOWED_ATTRS.has(name)
    || /^aria-[a-z0-9-]+$/.test(name)
    || /^data-[a-z0-9-]+$/.test(name);
  const tagSpecific = TAG_SPECIFIC_ALLOWED_ATTRS[tagName]?.has(name) || false;
  const mathSpecific = MATHML_ALLOWED_TAGS.has(tagName) && MATHML_ALLOWED_ATTRS.has(name);

  if (!isGlobal && !tagSpecific && !mathSpecific) return false;

  if (attr.value === null) {
    return BOOLEAN_ATTRS.has(name);
  }
  const decodedVal = decodeHtmlEntities(attr.value);
  if (decodedVal.includes('\uFFFD') || decodedVal.includes('\u0000')) return false;

  if (name === 'href') {
    return !isUnsafeUrlValue(attr.value, { allowMailto: tagName === 'a' });
  }
  if (name === 'cite') {
    return !isUnsafeUrlValue(attr.value, {});
  }
  if (name === 'src') {
    const isImg = tagName === 'img';
    return !isUnsafeUrlValue(attr.value, {
      allowDataImage: isImg,
      allowLegacyPlaceholderScheme: isImg
    });
  }
  if (name === 'poster') {
    return !isUnsafeUrlValue(attr.value, {});
  }
  if (name === 'srcset') {
    return parseSrcsetCandidates(attr.value).valid;
  }
  if (name === 'style') {
    return (tagName === 'td' || tagName === 'th') && SAFE_TABLE_CELL_STYLE_PATTERN.test(decodedVal);
  }
  if (name === 'xmlns') {
    return tagName === 'math' && decodedVal.trim() === 'http://www.w3.org/1998/Math/MathML';
  }
  return true;
}

function formatAttribute(attr) {
  if (attr.value === null) return attr.name;
  return `${attr.name}="${escapeHtmlAttr(decodeHtmlEntities(attr.value))}"`;
}

function extractArticleContainer(html, label) {
  const openPattern = /<div(?=[\t\n\f\r />])/gi;
  let startIndex = -1;
  let openTagEnd = -1;
  let match;
  while ((match = openPattern.exec(html)) !== null) {
    const parsed = scanHtmlTag(html, match.index);
    if (!parsed || parsed.isClosing) continue;
    const idAttr = parsed.attrs.find(a => a.name === 'id');
    if (idAttr && idAttr.value === 'article-body') {
      startIndex = match.index;
      openTagEnd = parsed.tagEnd;
      break;
    }
  }
  invariant(startIndex >= 0 && openTagEnd > startIndex, `${label} 缺少 #article-body 正文容器`);
  let depth = 1;
  let cursor = openTagEnd + 1;
  while (cursor < html.length) {
    const lt = html.indexOf('<', cursor);
    if (lt < 0) break;
    if (html.startsWith('<!--', lt)) {
      cursor = scanHtmlCommentEnd(html, lt);
      continue;
    }
    const parsed = scanHtmlTag(html, lt);
    if (!parsed) {
      cursor = lt + 1;
      continue;
    }
    if (parsed.tagName === 'div') {
      if (parsed.isClosing) {
        depth -= 1;
        if (depth === 0) {
          return html.slice(startIndex, parsed.tagEnd + 1);
        }
      } else if (!parsed.selfClosing) {
        depth += 1;
      }
    }
    cursor = parsed.tagEnd + 1;
  }
  throw new Error(`${label} 的 #article-body 正文容器未闭合`);
}

function hasHtmlConstructInsideTex(inner) {
  if (inner.includes('<!--') || /<\/[A-Za-z]/.test(inner)) return true;
  for (const tagMatch of inner.matchAll(/<([A-Za-z][A-Za-z0-9:-]*)(?=[\t\n\f\r />])/g)) {
    const candidate = tagMatch[1].toLowerCase();
    if (ALL_KNOWN_HTML_TAG_NAMES.has(candidate)) return true;
  }
  return false;
}

function escapeLtInsideTexDelimiters(fragment) {
  return fragment
    .replace(/\\\(([\s\S]*?)\\\)/g, (full, inner) => {
      if (hasHtmlConstructInsideTex(inner)) return full;
      return `\\(${inner.replace(/</g, '&lt;')}\\)`;
    })
    .replace(/\\\[([\s\S]*?)\\\]/g, (full, inner) => {
      if (hasHtmlConstructInsideTex(inner)) return full;
      return `\\[${inner.replace(/</g, '&lt;')}\\]`;
    });
}

function findMatchingForbiddenEnd(fragment, tagName, searchStart) {
  // Exact HTML5 closing tag pattern: </tagName followed immediately by whitespace, '/', or '>' (NO space after '<'!)
  const escaped = tagName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const closePattern = new RegExp(`<\\/${escaped}(?=[\\t\\n\\f\\r />])`, 'gi');
  closePattern.lastIndex = searchStart;
  let match;
  while ((match = closePattern.exec(fragment)) !== null) {
    const parsedClose = scanHtmlTag(fragment, match.index);
    if (parsedClose && parsedClose.isClosing && parsedClose.tagName === tagName) {
      return parsedClose.tagEnd + 1;
    }
    const gt = fragment.indexOf('>', match.index + 2 + tagName.length);
    return gt >= 0 ? gt + 1 : fragment.length;
  }
  return fragment.length;
}

function sanitizeArticleHtml(rawFragment, label) {
  const fragment = escapeLtInsideTexDelimiters(rawFragment);
  const chunks = [];
  let cursor = 0;
  while (cursor < fragment.length) {
    const lt = fragment.indexOf('<', cursor);
    if (lt < 0) {
      chunks.push(fragment.slice(cursor));
      break;
    }
    if (lt > cursor) chunks.push(fragment.slice(cursor, lt));
    if (fragment.startsWith('<!--', lt)) {
      cursor = scanHtmlCommentEnd(fragment, lt);
      continue;
    }
    if (fragment.startsWith('<!', lt) || fragment.startsWith('<?', lt)) {
      const gt = fragment.indexOf('>', lt + 2);
      if (gt < 0) {
        chunks.push('&lt;');
        cursor = lt + 1;
      } else {
        cursor = gt + 1;
      }
      continue;
    }

    const parsed = scanHtmlTag(fragment, lt);
    if (!parsed) {
      chunks.push('&lt;');
      cursor = lt + 1;
      continue;
    }

    const { tagEnd, isClosing, tagName, attrs, selfClosing } = parsed;

    if (FORBIDDEN_CONTAINER_TAGS.has(tagName)) {
      if (isClosing || selfClosing) {
        cursor = tagEnd + 1;
      } else {
        cursor = findMatchingForbiddenEnd(fragment, tagName, tagEnd + 1);
      }
      continue;
    }

    if (STRIP_VOID_TAGS.has(tagName)) {
      cursor = tagEnd + 1;
      continue;
    }

    if (!ALLOWED_HTML_TAGS.has(tagName)) {
      // Escape non-allowlisted pseudo-tags (e.g., LLM tokens <bos>, <eos>, <speech>, <think>, <image>) into safe text
      chunks.push(escapeHtmlText(fragment.slice(lt, tagEnd + 1)));
      cursor = tagEnd + 1;
      continue;
    }

    // Bare <audio> / <video> / <source> without attributes (e.g. LLM placeholder token "(<audio>)×T") -> escape as text
    if (!isClosing && (tagName === 'audio' || tagName === 'video' || tagName === 'source') && attrs.length === 0) {
      chunks.push(escapeHtmlText(fragment.slice(lt, tagEnd + 1)));
      cursor = tagEnd + 1;
      continue;
    }

    // Guard mathematical inequalities starting with single-letter HTML tags (e.g. "0 <i + 1 >" with non-ASCII/math tokens)
    if (
      !isClosing
      && tagName.length === 1
      && attrs.length > 0
      && attrs.every(a => !isAllowedAttribute(tagName, a))
      && attrs.some(a => !/^[a-z][a-z0-9:-]*$/.test(a.name))
    ) {
      chunks.push('&lt;');
      cursor = lt + 1;
      continue;
    }

    if (isClosing) {
      if (!HTML_VOID_TAGS.has(tagName)) {
        chunks.push(`</${tagName}>`);
      }
      cursor = tagEnd + 1;
      continue;
    }

    const safeAttrs = [];
    const seenAttrNames = new Set();
    for (const attr of attrs) {
      if (seenAttrNames.has(attr.name)) continue;
      if (!isAllowedAttribute(tagName, attr)) continue;
      seenAttrNames.add(attr.name);
      safeAttrs.push(formatAttribute(attr));
    }
    const attrText = safeAttrs.length ? ' ' + safeAttrs.join(' ') : '';
    const emitSelfClosing = selfClosing && HTML_VOID_TAGS.has(tagName);
    chunks.push(`<${tagName}${attrText}${emitSelfClosing ? ' />' : '>'}`);
    cursor = tagEnd + 1;
  }
  const sanitized = chunks.join('');
  assertSafeArticleHtml(sanitized, label);
  return sanitized;
}

function assertSafeArticleHtml(html, label) {
  invariant(typeof html === 'string' && html.trim().length > 0, `${label} 正文片段不能为空`);
  invariant(
    !html.includes('\u0000') && !html.includes('<!--') && !/<!DOCTYPE|<!ENTITY/i.test(html),
    `${label} 正文片段含禁止的 NUL、HTML 注释或 DTD/实体声明`
  );
  let cursor = 0;
  const mediaElements = [];
  const anchorHrefs = [];
  while (cursor < html.length) {
    const lt = html.indexOf('<', cursor);
    if (lt < 0) break;
    const parsed = scanHtmlTag(html, lt);
    invariant(parsed !== null, `${label} 含未转义的孤立 '<'、未闭合标签或声明节点`);
    const { tagEnd, isClosing, tagName, attrs, selfClosing } = parsed;
    invariant(
      ALLOWED_HTML_TAGS.has(tagName) && !FORBIDDEN_CONTAINER_TAGS.has(tagName) && !STRIP_VOID_TAGS.has(tagName),
      `${label} 正文片段含非白名单或禁止标签 <${tagName}>`
    );
    if (isClosing) {
      invariant(attrs.length === 0 && !selfClosing && !HTML_VOID_TAGS.has(tagName),
        `${label} 闭合标签 </${tagName}> 格式非法`);
    } else {
      const seenAttrs = new Set();
      for (const attr of attrs) {
        invariant(!seenAttrs.has(attr.name), `${label} 标签 <${tagName}> 存在重复属性 ${attr.name}`);
        seenAttrs.add(attr.name);
        invariant(!attr.unquotedUnsafe, `${label} 属性 ${attr.name} 含未加引号的特殊字符`);
        invariant(isAllowedAttribute(tagName, attr),
          `${label} 标签 <${tagName}> 残留非白名单或危险属性 ${attr.name}`);
      }
      if (tagName === 'img' || tagName === 'audio' || tagName === 'video' || tagName === 'source') {
        const srcAttr = attrs.find(a => a.name === 'src');
        if (srcAttr && srcAttr.value !== null && srcAttr.value.trim()) {
          mediaElements.push({ tagName, src: decodeHtmlEntities(srcAttr.value).trim() });
        }
        const srcsetAttr = attrs.find(a => a.name === 'srcset');
        if (srcsetAttr && srcsetAttr.value !== null) {
          const srcsetParsed = parseSrcsetCandidates(srcsetAttr.value);
          invariant(srcsetParsed.valid, `${label} srcset 属性非法`);
          for (const candidateUrl of srcsetParsed.urls) {
            mediaElements.push({ tagName: 'img', src: candidateUrl });
          }
        }
        if (tagName === 'video') {
          const posterAttr = attrs.find(a => a.name === 'poster');
          if (posterAttr && posterAttr.value !== null && posterAttr.value.trim()) {
            mediaElements.push({ tagName: 'img', src: decodeHtmlEntities(posterAttr.value).trim() });
          }
        }
      } else if (tagName === 'a') {
        const hrefAttr = attrs.find(a => a.name === 'href');
        if (hrefAttr && hrefAttr.value !== null && hrefAttr.value.trim()) {
          anchorHrefs.push(decodeHtmlEntities(hrefAttr.value).trim());
        }
      }
    }
    cursor = tagEnd + 1;
  }
  return { mediaElements, anchorHrefs };
}

function stripTagsToPlainText(html) {
  return decodeHtmlEntities(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function inferMediaType(urlPath, fallbackKind) {
  const clean = String(urlPath || '').split(/[?#]/)[0].toLowerCase();
  const ext = path.posix.extname(clean);
  if (MEDIA_TYPES_BY_EXT[ext]) return MEDIA_TYPES_BY_EXT[ext];
  if (fallbackKind === 'image') return 'image/*';
  if (fallbackKind === 'audio') return 'audio/*';
  if (fallbackKind === 'video') return 'video/*';
  return 'application/octet-stream';
}

function assertNoSymlinksRecursive(dirPath) {
  if (!fs.existsSync(dirPath)) {
    let dangling = false;
    try { fs.lstatSync(dirPath); dangling = true; } catch (err) { if (err.code !== 'ENOENT') throw err; }
    invariant(!dangling, `client/details 路径含悬空符号链接：${dirPath}`);
    return;
  }
  const st = fs.lstatSync(dirPath);
  invariant(!st.isSymbolicLink(), `client/details 禁止符号链接：${dirPath}`);
  if (!st.isDirectory()) return;
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    assertNoSymlinksRecursive(path.join(dirPath, entry.name));
  }
}

function resolveGitState(repoRoot, options) {
  let sourceCommit = options.sourceCommit || null;
  let generatedAt = options.generatedAt || null;
  const allowDirty = options.allowDirty === true;

  if (!allowDirty) {
    let statusOutput;
    try {
      statusOutput = execFileSync(
        'git',
        ['status', '--porcelain', '-uall'],
        { cwd: repoRoot, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }
      );
    } catch (error) {
      throw new Error(`无法在已提交仓库中校验工作区干净状态：${error.message}`);
    }
    const dirtyLines = statusOutput.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
    invariant(
      dirtyLines.length === 0,
      `拒绝导出桌面数据包：仓库存在未提交改动或未跟踪文件（${dirtyLines.slice(0, 5).join('; ')}）`
    );

    let headOid;
    try {
      headOid = execFileSync('git', ['rev-parse', '--verify', 'HEAD'], {
        cwd: repoRoot,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe']
      }).trim();
    } catch (error) {
      throw new Error(`无法解析博客 Git HEAD OID：${error.message}`);
    }
    if (sourceCommit !== null) {
      invariant(sourceCommit === headOid, `显式传入的 sourceCommit (${sourceCommit}) 与当前仓库 HEAD (${headOid}) 不一致`);
    } else {
      sourceCommit = headOid;
    }
  } else if (!sourceCommit) {
    try {
      sourceCommit = execFileSync('git', ['rev-parse', '--verify', 'HEAD'], {
        cwd: repoRoot,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe']
      }).trim();
    } catch (error) {
      throw new Error(`无法解析博客 Git HEAD OID：${error.message}`);
    }
  }
  invariant(COMMIT_OID_PATTERN.test(sourceCommit), `sourceCommit 必须为 40 位小写十六进制 Git OID：${sourceCommit}`);

  if (!generatedAt) {
    try {
      generatedAt = execFileSync('git', ['show', '-s', '--format=%cI', 'HEAD'], {
        cwd: repoRoot,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe']
      }).trim();
    } catch (error) {
      throw new Error(`无法读取提交时间：${error.message}`);
    }
  }
  invariant(ISO_TIMESTAMP_WITH_TZ_PATTERN.test(generatedAt) && Number.isFinite(Date.parse(generatedAt)),
    `generatedAt 必须为带时区的有效 ISO-8601 时间：${generatedAt}`);

  return { sourceCommit, generatedAt };
}

function parseJsonFrontMatterLine(lines, key) {
  const prefix = `${key}:`;
  const line = lines.find(item => item.startsWith(prefix));
  if (!line) return undefined;
  const raw = line.slice(prefix.length).trim();
  if (!raw) return undefined;
  try {
    return JSON.parse(raw);
  } catch {
    return undefined;
  }
}

function scalarFrontMatter(frontMatter, key) {
  const parsedJson = parseJsonFrontMatterLine(frontMatter.lines, key);
  if (typeof parsedJson === 'string' || typeof parsedJson === 'number' || typeof parsedJson === 'boolean') {
    return parsedJson;
  }
  const field = frontMatterField(frontMatter, key);
  return field && field.values.length ? field.values[0] : undefined;
}

function loadPostFrontMatterMap(repoRoot) {
  const postsRoot = path.join(repoRoot, 'content', 'posts');
  const map = new Map();
  invariant(fs.existsSync(postsRoot), `缺少源文章目录：${postsRoot}`);
  const stack = [postsRoot];
  while (stack.length > 0) {
    const dir = stack.pop();
    const stat = fs.lstatSync(dir);
    invariant(stat.isDirectory() && !stat.isSymbolicLink(), `content/posts 目录不能为符号链接：${dir}`);
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      const entryStat = fs.lstatSync(full);
      invariant(!entryStat.isSymbolicLink(), `content/posts 不得包含符号链接：${full}`);
      if (entryStat.isDirectory()) {
        stack.push(full);
        continue;
      }
      if (!entryStat.isFile() || !entry.name.endsWith('.md')) continue;
      const source = decodeUtf8Fatal(fs.readFileSync(full), full);
      const frontMatter = extractFrontMatter(source);
      invariant(frontMatter.lines.length > 0, `源文章缺少合法 YAML front matter：${full}`);
      const draftVal = scalarFrontMatter(frontMatter, 'draft');
      const isDraft = draftVal === true || String(draftVal).toLowerCase() === 'true';

      const urlVal = scalarFrontMatter(frontMatter, 'url');
      const slugVal = scalarFrontMatter(frontMatter, 'slug');
      let appearanceId = '';
      if (typeof urlVal === 'string' && urlVal.trim()) {
        let cleaned = urlVal.trim();
        if (cleaned.startsWith(SITE_PREFIX)) cleaned = cleaned.slice(SITE_PREFIX.length);
        cleaned = cleaned.replace(/^\/+/, '').replace(/\/+$/, '') + '/';
        appearanceId = cleaned.toLowerCase();
      } else if (typeof slugVal === 'string' && slugVal.trim()) {
        appearanceId = `posts/${slugVal.trim().toLowerCase().replace(/^\/+|\/+$/g, '')}/`;
      } else {
        appearanceId = `posts/${path.basename(full, '.md').toLowerCase()}/`;
      }
      invariant(!map.has(appearanceId), `content/posts 中存在重复的页面路径映射 (${appearanceId})：${full}`);

      const publishDateRaw = scalarFrontMatter(frontMatter, 'publishDate') ?? scalarFrontMatter(frontMatter, 'publishdate');
      const expiryDateRaw = scalarFrontMatter(frontMatter, 'expiryDate') ?? scalarFrontMatter(frontMatter, 'expirydate');
      const authorsJson = parseJsonFrontMatterLine(frontMatter.lines, 'paper_digest_authors');
      const lastmodRaw = scalarFrontMatter(frontMatter, 'lastmod') ?? scalarFrontMatter(frontMatter, 'updated');
      let articleUpdatedAt = null;
      if (typeof lastmodRaw === 'string' && lastmodRaw.trim()) {
        const trimmed = lastmodRaw.trim();
        if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed) || (ISO_TIMESTAMP_WITH_TZ_PATTERN.test(trimmed) && Number.isFinite(Date.parse(trimmed)))) {
          articleUpdatedAt = trimmed;
        }
      }
      const pubStatusRaw = scalarFrontMatter(frontMatter, 'paper_digest_publication_status');
      const retractionUrl = scalarFrontMatter(frontMatter, 'paper_digest_retraction_evidence_url');
      const retractionNote = scalarFrontMatter(frontMatter, 'paper_digest_retraction_note');
      const retractedAt = scalarFrontMatter(frontMatter, 'paper_digest_retracted_at');
      map.set(appearanceId, {
        file: full,
        draft: isDraft,
        publishDate: typeof publishDateRaw === 'string' && publishDateRaw.trim() ? publishDateRaw.trim() : null,
        expiryDate: typeof expiryDateRaw === 'string' && expiryDateRaw.trim() ? expiryDateRaw.trim() : null,
        originalTitle: scalarFrontMatter(frontMatter, 'paper_digest_original_title') ?? null,
        readerTitle: scalarFrontMatter(frontMatter, 'paper_digest_reader_title') ?? null,
        oneSentence: scalarFrontMatter(frontMatter, 'paper_digest_one_sentence') ?? null,
        rankBucket: scalarFrontMatter(frontMatter, 'paper_digest_rank_bucket') ?? null,
        documentType: scalarFrontMatter(frontMatter, 'paper_digest_document_type') ?? null,
        arxivVersion: scalarFrontMatter(frontMatter, 'paper_digest_arxiv_version') ?? null,
        arxivVersionedId: scalarFrontMatter(frontMatter, 'paper_digest_arxiv_versioned_id') ?? null,
        citationDate: scalarFrontMatter(frontMatter, 'paper_digest_citation_date') ?? null,
        authors: Array.isArray(authorsJson) ? authorsJson : null,
        articleUpdatedAt,
        publicationStatus: pubStatusRaw === 'retracted' ? 'retracted' : 'active',
        retractionEvidenceUrl: typeof retractionUrl === 'string' ? retractionUrl.trim() : null,
        retractionNote: typeof retractionNote === 'string' ? retractionNote.trim() : null,
        retractedAt: typeof retractedAt === 'string' && retractedAt.trim() ? retractedAt.trim() : null
      });
    }
  }
  return map;
}

function loadTagCatalogsFromBuild(buildRoot) {
  const candidates = [
    ['client/data/tag-catalog-snapshot.json', 'client/data/tag-catalog-versions.json'],
    ['data/tag-catalog-snapshot.json', 'data/tag-catalog-versions.json']
  ];
  for (const [snapshotRel, versionsRel] of candidates) {
    if (fs.existsSync(path.join(buildRoot, snapshotRel)) && fs.existsSync(path.join(buildRoot, versionsRel))) {
      const snapshotBytes = readRegularFile(buildRoot, snapshotRel, 16 * 1024 * 1024, '标签快照目录');
      const versionsBytes = readRegularFile(buildRoot, versionsRel, 16 * 1024 * 1024, '标签版本目录');
      const snapshotObj = parseJsonBytes(snapshotBytes, snapshotRel);
      const versionsObj = parseJsonBytes(versionsBytes, versionsRel);
      invariant(protocols.hasValidHeader(snapshotObj, 'paper-tag-catalog-snapshot'), `标签快照目录头部或指纹无效：${snapshotRel}`);
      invariant(protocols.hasValidHeader(versionsObj, 'paper-tag-catalog-versions'), `标签版本目录头部或指纹无效：${versionsRel}`);
      const graph = tagCore.createRegistry(snapshotObj, versionsObj);
      return {
        graph,
        currentRegistrySha256: graph.registrySha256 || null,
        descriptors: {
          snapshot: {
            url: snapshotRel,
            bytes: snapshotBytes.length,
            sha256: sha256Hex(snapshotBytes),
            contract: snapshotObj.contract,
            schemaFingerprint: snapshotObj.schemaFingerprint ?? null,
            registryVersion: snapshotObj.registryVersion,
            registrySha256: snapshotObj.registrySha256
          },
          versions: {
            url: versionsRel,
            bytes: versionsBytes.length,
            sha256: sha256Hex(versionsBytes),
            contract: versionsObj.contract,
            schemaFingerprint: versionsObj.schemaFingerprint ?? null,
            currentSha256: versionsObj.currentSha256
          }
        }
      };
    }
  }
  throw new Error('构建产物缺少成对的公开标签词表（tag-catalog-snapshot.json 与 tag-catalog-versions.json）');
}

function loadSearchIndexRecords(buildRoot) {
  const manifestBytes = readRegularFile(buildRoot, 'client/index.json', MAX_MANIFEST_BYTES * 16, '客户端搜索索引入口');
  const manifest = parseJsonBytes(manifestBytes, 'client/index.json');
  invariant(protocols.hasValidHeader(manifest, SEARCH_INDEX_CONTRACT), 'client/index.json 协议头或指纹无效');
  invariant(Array.isArray(manifest.shards) && manifest.shards.length > 0 && manifest.shards.length <= MAX_SHARDS, 'client/index.json 分片列表非法');
  const records = [];
  for (const shard of manifest.shards) {
    const rel = `client/${shard.url}`;
    const shardBytes = readRegularFile(buildRoot, rel, MAX_SHARD_BYTES, rel);
    invariant(shardBytes.length === shard.bytes && sha256Hex(shardBytes) === shard.sha256, `搜索分片字节或 SHA 不匹配：${rel}`);
    const parsed = parseJsonBytes(shardBytes, rel);
    invariant(Array.isArray(parsed) && parsed.length === shard.recordCount, `搜索分片记录数不匹配：${rel}`);
    records.push(...parsed);
  }
  invariant(records.length === manifest.recordCount, 'client/index.json 总记录数不闭合');
  return records;
}

function buildAuthorList(structuredAuthors, fallbackNames) {
  if (Array.isArray(structuredAuthors) && structuredAuthors.length > 0) {
    return structuredAuthors.map((entry, idx) => {
      invariant(entry && typeof entry === 'object' && typeof entry.name === 'string' && entry.name.trim(),
        `结构化作者第 ${idx + 1} 项缺少姓名`);
      const rawAffiliations = Array.isArray(entry.affiliations) ? entry.affiliations : [];
      const evidenced = [];
      const unavailableNotes = [];
      for (const aff of rawAffiliations) {
        if (typeof aff !== 'string' || !aff.trim()) continue;
        const trimmed = aff.trim();
        if (EXPLICIT_UNAVAILABLE_AFFILIATIONS.has(trimmed)) unavailableNotes.push(trimmed);
        else evidenced.push(trimmed);
      }
      return {
        position: idx + 1,
        name: entry.name.trim(),
        givenName: typeof entry.givenName === 'string' && entry.givenName.trim() ? entry.givenName.trim() : null,
        familyName: typeof entry.familyName === 'string' && entry.familyName.trim() ? entry.familyName.trim() : null,
        affiliations: evidenced,
        affiliationStatus: evidenced.length > 0 ? 'evidenced' : (unavailableNotes.length > 0 ? 'unavailable' : 'unknown'),
        affiliationNote: unavailableNotes.length > 0 ? unavailableNotes[0] : null,
        orcid: typeof entry.orcid === 'string' && /^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/.test(entry.orcid.trim())
          ? entry.orcid.trim()
          : null
      };
    });
  }
  if (Array.isArray(fallbackNames) && fallbackNames.length > 0) {
    return fallbackNames
      .filter(name => typeof name === 'string' && name.trim())
      .map((name, idx) => ({
        position: idx + 1,
        name: name.trim(),
        givenName: null,
        familyName: null,
        affiliations: [],
        affiliationStatus: 'unknown',
        affiliationNote: null,
        orcid: null
      }));
  }
  return [];
}

function planJsonShards(records, prefixDir, urlPattern, label) {
  if (records.length === 0) {
    return { shards: [], buffers: [], totalBytes: 0 };
  }
  const buffers = [];
  let current = [];
  let currentBytes = 2;
  const flush = () => {
    if (current.length > 0) {
      buffers.push({ buffer: Buffer.from(`[${current.join(',')}]`, 'utf8'), count: current.length });
      current = [];
      currentBytes = 2;
    }
  };
  for (let i = 0; i < records.length; i += 1) {
    const serialized = JSON.stringify(canonicalValue(records[i]));
    const byteLen = Buffer.byteLength(serialized, 'utf8');
    invariant(byteLen + 2 <= MAX_SHARD_BYTES, `${label} 第 ${i} 条超过单分片上限 ${MAX_SHARD_BYTES} 字节`);
    if (currentBytes + byteLen + (current.length ? 1 : 0) > MAX_SHARD_BYTES) flush();
    currentBytes += byteLen + (current.length ? 1 : 0);
    current.push(serialized);
  }
  flush();
  const totalBytes = buffers.reduce((acc, item) => acc + item.buffer.length, 0);
  invariant(buffers.length <= MAX_SHARDS, `${label} 分片数超过上限 ${MAX_SHARDS}`);
  invariant(totalBytes <= MAX_TOTAL_CATALOG_BYTES, `${label} 总字节数超过上限 ${MAX_TOTAL_CATALOG_BYTES}`);
  const seenUrls = new Set();
  const shards = buffers.map(({ buffer, count }) => {
    const sha256 = sha256Hex(buffer);
    const url = `${prefixDir}/${sha256}.json`;
    invariant(urlPattern.test(url) && !seenUrls.has(url), `${label} 分片路径非法或重复：${url}`);
    seenUrls.add(url);
    return { url, bytes: buffer.length, sha256, recordCount: count };
  });
  return { shards, buffers: buffers.map(item => item.buffer), totalBytes };
}

function loadPreviousSnapshotState(previousSnapshotPath, options = {}) {
  const resolvedSnap = path.resolve(previousSnapshotPath);
  const stat = fs.lstatSync(resolvedSnap);
  invariant(stat.isFile() && !stat.isSymbolicLink() && stat.size <= MAX_SNAPSHOT_BYTES,
    `previousSnapshotPath 必须为限额内普通文件：${previousSnapshotPath}`);
  const snapBytes = fs.readFileSync(resolvedSnap);
  const snap = parseJsonBytes(snapBytes, resolvedSnap);
  invariant(protocols.hasValidHeader(snap, SNAPSHOT_CONTRACT), '旧快照协议头或结构指纹无效');
  const prevRoot = options.previousBuildDir
    ? path.resolve(options.previousBuildDir)
    : path.resolve(path.dirname(resolvedSnap), '../../..');

  const catalogRecords = [];
  for (const shard of snap.catalogShards || []) {
    invariant(shard && CATALOG_SHARD_URL_PATTERN.test(shard.url), `旧快照目录分片路径非法：${shard?.url}`);
    const bytes = readRegularFile(prevRoot, shard.url, MAX_SHARD_BYTES, `旧目录分片 ${shard.url}`);
    invariant(bytes.length === shard.bytes && sha256Hex(bytes) === shard.sha256, `旧目录分片字节或 SHA 校验失败：${shard.url}`);
    const arr = parseJsonBytes(bytes, shard.url);
    invariant(Array.isArray(arr) && arr.length === shard.recordCount, `旧目录分片条数不符：${shard.url}`);
    catalogRecords.push(...arr);
  }
  invariant(catalogRecords.length === snap.recordCount, '旧快照目录总条数不闭合');

  const tombstones = [];
  for (const shard of snap.tombstoneShards || []) {
    invariant(shard && TOMBSTONE_SHARD_URL_PATTERN.test(shard.url), `旧快照 tombstone 分片路径非法：${shard?.url}`);
    const bytes = readRegularFile(prevRoot, shard.url, MAX_SHARD_BYTES, `旧 tombstone 分片 ${shard.url}`);
    invariant(bytes.length === shard.bytes && sha256Hex(bytes) === shard.sha256, `旧 tombstone 分片字节或 SHA 校验失败：${shard.url}`);
    const arr = parseJsonBytes(bytes, shard.url);
    invariant(Array.isArray(arr) && arr.length === shard.recordCount, `旧 tombstone 分片条数不符：${shard.url}`);
    tombstones.push(...arr);
  }
  invariant(tombstones.length === snap.tombstoneCount, '旧快照 tombstone 总条数不闭合');

  const prevDetailsByAppearance = new Map();
  for (const row of catalogRecords) {
    if (row.publicationStatus === 'retracted' && row.detail && DETAIL_URL_PATTERN.test(row.detail.url)) {
      const detailBytes = readRegularFile(prevRoot, row.detail.url, MAX_DETAIL_BYTES, `旧详情 ${row.detail.url}`);
      invariant(detailBytes.length === row.detail.bytes && sha256Hex(detailBytes) === row.detail.sha256,
        `旧详情文件字节或 SHA 不匹配：${row.detail.url}`);
      prevDetailsByAppearance.set(row.appearanceId, parseJsonBytes(detailBytes, row.detail.url));
    }
  }

  return { catalogRecords, tombstones, prevDetailsByAppearance };
}

function buildTombstones({
  previousSnapshotPath,
  options,
  activeByAppearanceId,
  generatedAt,
  sourceCommit
}) {
  if (!previousSnapshotPath) {
    return [];
  }
  const prevState = loadPreviousSnapshotState(previousSnapshotPath, options);
  const notices = options.removalNotices || {};
  const byAppearance = new Map();

  for (const oldTomb of prevState.tombstones) {
    invariant(oldTomb && APPEARANCE_ID_PATTERN.test(oldTomb.appearanceId), `旧 tombstone appearanceId 非法：${oldTomb?.appearanceId}`);
    if (activeByAppearanceId.has(oldTomb.appearanceId)) {
      // Restored page automatically exits current tombstone set (§7)
      continue;
    }
    byAppearance.set(oldTomb.appearanceId, {
      appearanceId: oldTomb.appearanceId,
      paperId: oldTomb.paperId ?? null,
      previousArticleRevisionId: oldTomb.previousArticleRevisionId,
      reason: oldTomb.reason,
      effectiveAt: oldTomb.effectiveAt,
      sourceCommit: oldTomb.sourceCommit,
      replacementAppearanceId: oldTomb.replacementAppearanceId ?? null,
      evidenceUrl: oldTomb.evidenceUrl ?? null,
      note: oldTomb.note ?? null
    });
  }

  for (const prevRecord of prevState.catalogRecords) {
    if (activeByAppearanceId.has(prevRecord.appearanceId)) continue;
    const explicit = notices[prevRecord.appearanceId] || null;
    const prevDetail = prevState.prevDetailsByAppearance.get(prevRecord.appearanceId) || null;
    const prevRetraction = prevDetail?.appearance?.retraction || null;

    let reason = explicit?.reason || (prevRecord.publicationStatus === 'retracted' ? 'retracted' : 'site-removed');
    invariant(['site-removed', 'retracted', 'replaced'].includes(reason), `非法 tombstone reason：${reason}`);

    let replacementAppearanceId = explicit?.replacementAppearanceId ?? null;
    let evidenceUrl = explicit?.evidenceUrl ?? prevRetraction?.evidenceUrl ?? null;
    let note = explicit?.note ?? prevRetraction?.note ?? null;

    if (reason === 'retracted') {
      invariant(
        typeof evidenceUrl === 'string' && /^https:\/\/[^\s<>"\\]+$/.test(evidenceUrl)
        && typeof note === 'string' && note.trim().length > 0,
        `撤稿 tombstone (${prevRecord.appearanceId}) 必须提供真实 HTTPS evidenceUrl 与撤稿说明`
      );
      evidenceUrl = evidenceUrl.trim();
      note = note.trim();
    } else if (reason === 'replaced') {
      invariant(
        typeof replacementAppearanceId === 'string' && activeByAppearanceId.has(replacementAppearanceId),
        `replaced tombstone (${prevRecord.appearanceId}) 必须指向当前有效目录中的 replacementAppearanceId`
      );
    } else {
      replacementAppearanceId = null;
    }

    byAppearance.set(prevRecord.appearanceId, {
      appearanceId: prevRecord.appearanceId,
      paperId: prevRecord.paperId ?? null,
      previousArticleRevisionId: prevRecord.articleRevisionId,
      reason,
      effectiveAt: generatedAt,
      sourceCommit,
      replacementAppearanceId,
      evidenceUrl,
      note
    });
  }

  const list = [...byAppearance.values()].sort((a, b) => (a.appearanceId < b.appearanceId ? -1 : a.appearanceId > b.appearanceId ? 1 : 0));
  for (const item of list) {
    invariant(!activeByAppearanceId.has(item.appearanceId), `tombstone 与当前目录 appearanceId 冲突：${item.appearanceId}`);
  }
  return list;
}

function exportDesktopDetails(buildDir = 'public', repoRoot = process.cwd(), options = {}) {
  return withNetworkDenied(() => {
    const requestedBuild = path.resolve(buildDir);
    const buildStat = fs.lstatSync(requestedBuild);
    invariant(buildStat.isDirectory() && !buildStat.isSymbolicLink(), '构建输出目录必须为真实目录，不能为符号链接');
    const root = fs.realpathSync(requestedBuild);

    const requestedRepo = path.resolve(repoRoot);
    const repoStat = fs.lstatSync(requestedRepo);
    invariant(repoStat.isDirectory() && !repoStat.isSymbolicLink(), '仓库根目录必须为真实目录，不能为符号链接');
    const repo = fs.realpathSync(requestedRepo);

    const { sourceCommit, generatedAt } = resolveGitState(repo, options);
    const frontMatterMap = loadPostFrontMatterMap(repo);
    const { graph: tagGraph, currentRegistrySha256, descriptors: tagCatalogs } = loadTagCatalogsFromBuild(root);
    const allSearchRecords = loadSearchIndexRecords(root);

    // Filter to research appearances under /posts/ (paper, daily, conference)
    const researchRecords = allSearchRecords.filter(record => {
      if (record.pageType === 'page') return false;
      invariant(
        record.pageType === 'paper' || record.pageType === 'daily' || record.pageType === 'conference',
        `未知页面类型：${record.pageType}`
      );
      return true;
    });
    invariant(researchRecords.length > 0, '未找到可导出的研究页面记录');

    // First pass: map every research appearanceId and verified paperId so summary pages can link members accurately
    const appearanceMetaMap = new Map();
    const distinctPaperKeys = new Set();

    for (const record of researchRecords) {
      invariant(
        typeof record.permalink === 'string' && record.permalink.startsWith(SITE_PREFIX),
        `页面 permalink 越界：${record.permalink}`
      );
      const appearanceId = record.permalink.slice(SITE_PREFIX.length);
      invariant(APPEARANCE_ID_PATTERN.test(appearanceId), `appearanceId 非法：${appearanceId}`);
      invariant(!appearanceMetaMap.has(appearanceId), `重复的 appearanceId：${appearanceId}`);

      const fm = frontMatterMap.get(appearanceId);
      invariant(fm, `缺少对应的已提交源文章 front matter：${appearanceId}`);
      invariant(!fm.draft, `草稿页面不得进入公开详情导出：${appearanceId}`);
      const buildTimestampMs = Date.parse(generatedAt);
      if (fm.publishDate !== null) {
        const pubMs = Date.parse(fm.publishDate);
        invariant(Number.isFinite(pubMs) && pubMs <= buildTimestampMs,
          `未来待发布页面 (publishDate=${fm.publishDate}) 不得进入公开详情导出：${appearanceId}`);
      }
      if (fm.expiryDate !== null) {
        const expMs = Date.parse(fm.expiryDate);
        invariant(Number.isFinite(expMs) && expMs > buildTimestampMs,
          `已过期页面 (expiryDate=${fm.expiryDate}) 不得进入公开详情导出：${appearanceId}`);
      }

      let paperId = null;
      let identityStatus = 'aggregate-page';
      let sourceKind = null;
      if (record.pageType === 'paper') {
        const resolvedId = tagCore.identity(record);
        if (resolvedId.identityVerified && resolvedId.paperId) {
          paperId = resolvedId.paperId;
          identityStatus = 'verified';
          sourceKind = record.sourceKind || (paperId.startsWith('arxiv:') ? 'arxiv' : 'conference');
          distinctPaperKeys.add(paperId);
        } else {
          paperId = null;
          identityStatus = record.identityStatus && record.identityStatus !== 'verified'
            ? String(record.identityStatus)
            : 'unverified';
          sourceKind = record.sourceKind || null;
          // Unverified pages are never merged by title; each unverified paper page counts as its own paper entry
          distinctPaperKeys.add(`unverified:${appearanceId}`);
        }
      }

      appearanceMetaMap.set(appearanceId, { record, fm, paperId, identityStatus, sourceKind });
    }

    const assetDescriptorCache = new Map();
    const plannedArticles = new Map(); // url -> Buffer
    const plannedDetails = new Map(); // url -> Buffer
    const catalogRows = [];
    const activeByAppearanceId = new Map();

    function getLocalAssetDescriptor(assetRelative) {
      if (assetDescriptorCache.has(assetRelative)) return assetDescriptorCache.get(assetRelative);
      if (!SAFE_RELATIVE_URL_PATTERN.test(assetRelative)) {
        assetDescriptorCache.set(assetRelative, null);
        return null;
      }
      const full = path.join(root, assetRelative);
      if (!fs.existsSync(full)) {
        assetDescriptorCache.set(assetRelative, null);
        return null;
      }
      const bytes = readRegularFile(root, assetRelative, MAX_ASSET_BYTES, `站内资源 ${assetRelative}`);
      const descriptor = {
        url: assetRelative,
        bytes: bytes.length,
        sha256: sha256Hex(bytes)
      };
      assetDescriptorCache.set(assetRelative, descriptor);
      return descriptor;
    }

    for (const [appearanceId, meta] of appearanceMetaMap.entries()) {
      const { record, fm, paperId, identityStatus, sourceKind } = meta;
      const htmlRel = `${appearanceId}index.html`;
      const rawPageBytes = readRegularFile(root, htmlRel, MAX_ARTICLE_BYTES * 2, `构建页面 ${htmlRel}`);
      const rawPageHtml = decodeUtf8Fatal(rawPageBytes, htmlRel);

      const rawContainer = extractArticleContainer(rawPageHtml, appearanceId);
      const sanitizedHtml = sanitizeArticleHtml(rawContainer, appearanceId);
      const articleBytes = Buffer.from(sanitizedHtml, 'utf8');
      invariant(articleBytes.length > 0 && articleBytes.length <= MAX_ARTICLE_BYTES,
        `${appearanceId} 正文片段超出大小限制：${articleBytes.length}`);
      const articleSha256 = sha256Hex(articleBytes);
      const articleUrl = `client/details/articles/${articleSha256}.html`;
      invariant(ARTICLE_URL_PATTERN.test(articleUrl), `正文片段路径非法：${articleUrl}`);
      if (plannedArticles.has(articleUrl)) {
        invariant(plannedArticles.get(articleUrl).equals(articleBytes), `正文片段 SHA 冲突：${articleUrl}`);
      } else {
        plannedArticles.set(articleUrl, articleBytes);
      }
      const articleDescriptor = { url: articleUrl, bytes: articleBytes.length, sha256: articleSha256 };

      const { mediaElements, anchorHrefs } = assertSafeArticleHtml(sanitizedHtml, appearanceId);
      const plainText = stripTagsToPlainText(sanitizedHtml);
      const hasGuideContent = plainText.length > 0 && plainText !== '本页暂无导读正文。';

      // Verify and load 4-file sidecars when declared
      let citationSidecar = null;
      let contextSidecar = null;
      const sidecarDescriptors = {
        'citation.json': null,
        'citation.bib': null,
        'citation.ris': null,
        'rethink-context.json': null
      };
      let sidecarsAvailable = false;
      if (record.clientSidecars) {
        invariant(record.pageType === 'paper' && identityStatus === 'verified',
          `${appearanceId} 未核验或汇总页不得携带 clientSidecars`);
        sidecarsAvailable = true;
        for (const name of SIDECAR_NAMES) {
          const decl = record.clientSidecars[name];
          invariant(decl && typeof decl.url === 'string' && decl.url.startsWith(SITE_PREFIX + 'client/papers/')
            && SHA256_PATTERN.test(decl.sha256 || ''), `${appearanceId} sidecar 声明非法：${name}`);
          const rel = decl.url.slice(SITE_PREFIX.length);
          const bytes = readRegularFile(root, rel, MAX_SIDECAR_BYTES, `${appearanceId} ${name}`);
          const actualSha = sha256Hex(bytes);
          invariant(actualSha === decl.sha256, `${appearanceId} ${name} 实际字节 SHA 与声明不符`);
          const parsed = name.endsWith('.json') ? parseJsonBytes(bytes, rel) : null;
          if (name === 'citation.json') {
            invariant(protocols.hasValidHeader(parsed, 'researcher-sidecars'), `${appearanceId} citation.json 协议头无效`);
            citationSidecar = parsed;
          } else if (name === 'rethink-context.json') {
            invariant(protocols.hasValidHeader(parsed, 'paper-research-context'), `${appearanceId} rethink-context.json 协议头无效`);
            invariant(
              parsed.abstract === null
                ? parsed.abstractSha256 === null
                : typeof parsed.abstract === 'string' && sha256Hex(Buffer.from(parsed.abstract, 'utf8')) === parsed.abstractSha256,
              `${appearanceId} rethink-context.json 原摘要 SHA 校验失败`
            );
            contextSidecar = parsed;
          }
          sidecarDescriptors[name] = {
            url: rel,
            bytes: bytes.length,
            sha256: actualSha,
            ...(parsed ? { contract: parsed.contract, schemaFingerprint: parsed.schemaFingerprint ?? null } : {})
          };
        }
      }

      // Citation source validation
      const citationRecord = record.citation;
      invariant(citationRecord && protocols.hasValidHeader(citationRecord, CITATION_SOURCE_CONTRACT),
        `${appearanceId} citation 记录协议头或结构指纹无效`);

      // SourceVersion resolution (§4)
      let sourceVersionId = null;
      let versionLabel = null;
      let officialSourceUrl = null;
      let officialPdfUrl = null;
      let pdfSha256 = null;
      const pdfVersionBinding = citationRecord.pdfVersionBinding || null;
      const sourceVersionWarning = citationRecord.sourceVersionWarning || null;
      const provenanceDisclosure = citationRecord.provenanceDisclosure || null;

      if (record.pageType === 'paper' && identityStatus === 'verified') {
        officialSourceUrl = citationRecord.sourceUrl || citationRecord.url || null;
        officialPdfUrl = citationRecord.pdfUrl || null;
        if (pdfVersionBinding && SHA256_PATTERN.test(pdfVersionBinding.pdfSha256 || '')) {
          pdfSha256 = pdfVersionBinding.pdfSha256;
        } else if (citationSidecar && SHA256_PATTERN.test(citationSidecar.sourceSha256 || '')) {
          pdfSha256 = citationSidecar.sourceSha256;
        }
        if (sourceKind === 'arxiv') {
          const versionedCandidate = citationSidecar?.arxivVersionedId || citationRecord.arxivId || fm?.arxivVersionedId || '';
          const vMatch = String(versionedCandidate).match(/v([1-9][0-9]*)$/);
          if (vMatch && (!pdfVersionBinding || pdfVersionBinding.pdfVersionAuthenticated !== false)) {
            versionLabel = `v${vMatch[1]}`;
            sourceVersionId = `arxiv:${versionedCandidate}`;
          } else if (pdfSha256) {
            versionLabel = vMatch ? `v${vMatch[1]}-unversioned-pdf` : 'unspecified';
            sourceVersionId = `${paperId}@sha256:${pdfSha256}`;
          }
        } else if (sourceKind === 'conference' && pdfSha256) {
          sourceVersionId = `${paperId}@sha256:${pdfSha256}`;
        }
      }

      const sourceVersion = {
        sourceVersionId,
        paperId,
        versionLabel,
        sourceUrl: officialSourceUrl,
        pdfUrl: officialPdfUrl,
        pdfSha256,
        pdfVersionBinding,
        sourceVersionWarning,
        provenanceDisclosure
      };

      // Extract resources (§6)
      const resources = [];
      const seenResourceKeys = new Set();
      let bundledAssetsBytes = 0;

      for (const media of mediaElements) {
        if (media.src.startsWith('data:image/')) continue;
        const resourceKind = media.tagName === 'audio' ? 'audio' : media.tagName === 'video' ? 'video' : 'image';
        const dedupeKey = `${resourceKind}:${media.src}`;
        if (seenResourceKeys.has(dedupeKey)) continue;
        seenResourceKeys.add(dedupeKey);

        const resourceId = `res:${sha256Hex(Buffer.from(dedupeKey, 'utf8')).slice(0, 16)}`;
        const mediaType = inferMediaType(media.src, resourceKind);

        if (media.src.startsWith('https://')) {
          resources.push({
            resourceId,
            kind: resourceKind,
            mediaType,
            sourceUrl: media.src,
            availability: 'external',
            requiredForOffline: true,
            descriptor: null
          });
        } else if (media.src.startsWith('http://') || /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(media.src)) {
          // Non-HTTPS external or unresolved custom scheme (e.g. icassp-img://) -> explicitly missing, never 0 bytes
          resources.push({
            resourceId,
            kind: resourceKind,
            mediaType,
            sourceUrl: media.src,
            availability: 'missing',
            requiredForOffline: true,
            descriptor: null
          });
        } else {
          let localRel = '';
          const cleanSrc = media.src.split(/[?#]/)[0];
          if (cleanSrc.startsWith(SITE_PREFIX)) {
            localRel = cleanSrc.slice(SITE_PREFIX.length);
          } else if (cleanSrc.startsWith('/')) {
            localRel = cleanSrc.replace(/^\/+/, '');
          } else {
            localRel = path.posix.normalize(path.posix.join(appearanceId, cleanSrc));
          }
          let decodedRel = localRel;
          try { decodedRel = decodeURIComponent(localRel); } catch { decodedRel = ''; }
          const localDesc = decodedRel ? getLocalAssetDescriptor(decodedRel) : null;
          if (localDesc) {
            bundledAssetsBytes += localDesc.bytes;
            resources.push({
              resourceId,
              kind: resourceKind,
              mediaType,
              sourceUrl: media.src,
              availability: 'bundled',
              requiredForOffline: true,
              descriptor: localDesc
            });
          } else {
            resources.push({
              resourceId,
              kind: resourceKind,
              mediaType,
              sourceUrl: media.src,
              availability: 'missing',
              requiredForOffline: true,
              descriptor: null
            });
          }
        }
      }

      // Math rendering dependency (§6: 数学字体和渲染依赖同样纳入离线清单)
      const headEnd = rawPageHtml.indexOf('</head>');
      const headSlice = headEnd > 0 ? rawPageHtml.slice(0, headEnd) : '';
      const mathScriptMatch = headSlice.match(/<script\b[^>]*\bsrc=(?:"(https:\/\/[^"]*mathjax[^"]*)"|'(https:\/\/[^']*mathjax[^']*)'|(https:\/\/[^\s>]*mathjax[^\s>]*))/i);
      if (mathScriptMatch) {
        const mathSrc = mathScriptMatch[1] || mathScriptMatch[2] || mathScriptMatch[3];
        resources.push({
          resourceId: 'res:mathjax-runtime',
          kind: 'math-renderer',
          mediaType: 'application/javascript',
          sourceUrl: mathSrc,
          availability: 'external',
          requiredForOffline: true,
          descriptor: null
        });
      }

      if (officialPdfUrl && officialPdfUrl.startsWith('https://')) {
        resources.push({
          resourceId: 'res:source-pdf',
          kind: 'pdf',
          mediaType: 'application/pdf',
          sourceUrl: officialPdfUrl,
          availability: 'external',
          requiredForOffline: true,
          descriptor: null,
          expectedSha256: pdfSha256
        });
      }

      invariant(resources.length <= MAX_ARTICLE_RESOURCES,
        `${appearanceId} 资源项数量 (${resources.length}) 超过上限 ${MAX_ARTICLE_RESOURCES}`);
      invariant(bundledAssetsBytes <= MAX_BUNDLED_ARTICLE_ASSETS_BYTES,
        `${appearanceId} 站内捆绑资源总大小 (${bundledAssetsBytes}) 超过上限 ${MAX_BUNDLED_ARTICLE_ASSETS_BYTES}`);

      // Aggregate page member relationships (§3.2 & §4)
      const memberAppearanceIds = [];
      const memberPaperIds = [];
      if (record.pageType === 'daily' || record.pageType === 'conference') {
        const seenMemberApps = new Set();
        const seenMemberPapers = new Set();
        for (const href of anchorHrefs) {
          const cleanHref = href.split(/[?#]/)[0];
          let candidateApp = '';
          if (cleanHref.startsWith(SITE_PREFIX + 'posts/')) {
            candidateApp = cleanHref.slice(SITE_PREFIX.length);
          } else if (cleanHref.startsWith(`${SITE_ORIGIN}${SITE_PREFIX}posts/`)) {
            candidateApp = cleanHref.slice(`${SITE_ORIGIN}${SITE_PREFIX}`.length);
          }
          if (candidateApp && !candidateApp.endsWith('/')) candidateApp += '/';
          if (!candidateApp || candidateApp === appearanceId) continue;
          const targetMeta = appearanceMetaMap.get(candidateApp);
          if (targetMeta && targetMeta.record.pageType === 'paper' && !seenMemberApps.has(candidateApp)) {
            seenMemberApps.add(candidateApp);
            memberAppearanceIds.push(candidateApp);
            if (targetMeta.paperId && !seenMemberPapers.has(targetMeta.paperId)) {
              seenMemberPapers.add(targetMeta.paperId);
              memberPaperIds.push(targetMeta.paperId);
            }
          }
        }
      }

      // Titles (§5: originalTitle 与 readerTitle 分开；中文译题不冒充原题)
      let originalTitle = null;
      if (record.pageType === 'paper') {
        if (citationSidecar?.originalTitle) {
          originalTitle = citationSidecar.originalTitle;
        } else if (typeof fm?.originalTitle === 'string' && fm.originalTitle.trim()) {
          originalTitle = fm.originalTitle.trim();
        } else if (identityStatus === 'verified' && citationRecord.title) {
          originalTitle = citationRecord.title;
        } else if (identityStatus === 'verified' && record.originalTitle) {
          originalTitle = record.originalTitle;
        }
      }
      const readerTitle = contextSidecar?.readerTitle
        || (typeof fm?.readerTitle === 'string' && fm.readerTitle.trim() ? fm.readerTitle.trim() : null)
        || record.titleZh
        || record.title;
      const titles = {
        originalTitle,
        readerTitle,
        displayTitle: record.title
      };

      // Authors (§5)
      const structuredAuthors = record.pageType === 'paper'
        ? (citationSidecar?.authors || contextSidecar?.authors || (identityStatus === 'verified' ? fm?.authors : null))
        : null;
      const authors = record.pageType === 'paper'
        ? buildAuthorList(structuredAuthors, identityStatus === 'verified' ? citationRecord.authors : [])
        : [];

      // Dates (§5: paperPublishedAt, blogPublishedAt, articleUpdatedAt 分开；绝不用博客日期填充论文日期)
      const paperPublishedAt = record.pageType === 'paper' && identityStatus === 'verified' && citationRecord.date
        ? citationRecord.date
        : null;
      invariant(/^\d{4}-\d{2}-\d{2}$/.test(record.date || ''), `${appearanceId} 缺少有效博客发布日期`);
      const dates = {
        paperPublishedAt,
        blogPublishedAt: record.date,
        articleUpdatedAt: fm?.articleUpdatedAt ?? null
      };

      // Bibliographic (§5)
      const baseArxivId = record.pageType === 'paper' && identityStatus === 'verified' && sourceKind === 'arxiv'
        ? (citationSidecar?.arxivId || record.arxivId || String(paperId || '').replace(/^arxiv:/, '') || null)
        : null;
      const versionedArxivId = record.pageType === 'paper' && identityStatus === 'verified' && sourceKind === 'arxiv'
        ? (citationSidecar?.arxivVersionedId || (citationRecord.arxivId && /v[1-9][0-9]*$/.test(citationRecord.arxivId) ? citationRecord.arxivId : null))
        : null;
      const arxivVersionNum = typeof citationSidecar?.arxivVersion === 'number'
        ? citationSidecar.arxivVersion
        : (versionedArxivId ? Number.parseInt(versionedArxivId.match(/v([1-9][0-9]*)$/)[1], 10) : null);

      const bibliographic = {
        doi: record.pageType === 'paper' && identityStatus === 'verified' && citationRecord.doi ? citationRecord.doi : null,
        arxivId: baseArxivId,
        arxivVersionedId: versionedArxivId,
        arxivVersion: Number.isSafeInteger(arxivVersionNum) ? arxivVersionNum : null,
        venue: record.pageType === 'paper' && identityStatus === 'verified' && citationRecord.venue ? citationRecord.venue : null,
        publicationType: citationSidecar?.type
          || (record.pageType === 'paper' && identityStatus === 'verified'
            ? (sourceKind === 'arxiv' ? 'preprint' : sourceKind === 'conference' ? 'conference-paper' : null)
            : null),
        volume: null,
        issue: null,
        pages: null,
        language: null,
        license: null,
        sourceUrl: officialSourceUrl,
        pdfUrl: officialPdfUrl
      };

      // Abstract & website summary (§5: abstract 仅用已核验原摘要，绝不用 AI 总结替代)
      const abstract = contextSidecar && typeof contextSidecar.abstract === 'string' && contextSidecar.abstract.length > 0
        ? contextSidecar.abstract
        : null;
      const oneSentenceThesis = contextSidecar?.oneSentenceThesis
        || (typeof fm?.oneSentence === 'string' && fm.oneSentence.trim() ? fm.oneSentence.trim() : null);

      // Classification (§5)
      const resolvedTags = tagGraph.resolveRecord(record);
      const tagConceptIds = resolvedTags.status === 'verified'
        ? resolvedTags.concepts.map(node => node.id)
        : [];
      const classification = {
        status: resolvedTags.status,
        publicationStatus: record.tagPublicationStatus === 'withheld' ? 'withheld' : 'published',
        tagContract: record.tagContract || null,
        tagSchemaFingerprint: record.tagSchemaFingerprint ?? null,
        classificationContract: record.tagClassificationContract || null,
        registryVersion: resolvedTags.registryVersion || null,
        registrySha256: resolvedTags.registrySha256 || record.tagCatalogSha256 || null,
        currentDisplayRegistrySha256: currentRegistrySha256,
        conceptIds: tagConceptIds,
        concepts: resolvedTags.status === 'verified'
          ? resolvedTags.concepts.map(issued => ({
            id: issued.id,
            facet: issued.facet,
            issuedLabel: issued.zh,
            currentLabel: tagGraph.byId[issued.id]?.zh || issued.zh
          }))
          : [],
        primaryTask: record.tagPublicationStatus === 'withheld' ? null : (record.task || null),
        primaryTaskId: record.tagPublicationStatus === 'withheld' ? null : (record.primaryTaskId || null),
        primaryMethod: record.tagPublicationStatus === 'withheld' ? null : (record.method || null),
        primaryMethodId: record.tagPublicationStatus === 'withheld' ? null : (record.primaryMethodId || null),
        researchType: record.researchType ?? null,
        domainScope: record.domainScope ?? null,
        primaryResearchRole: record.primaryResearchRole ?? null,
        methodNotApplicable: typeof record.methodNotApplicable === 'boolean' ? record.methodNotApplicable : null,
        methodNotApplicableReason: record.methodNotApplicableReason || null,
        flatTags: record.tagPublicationStatus === 'withheld' ? [] : (Array.isArray(record.tags) ? record.tags : [])
      };

      // Assessment (§5: 保留原量表与原分数，不重评或猜测换算)
      let numericScore = null;
      let scoreText = null;
      if (record.pageType === 'paper' && record.score !== undefined && record.score !== null && String(record.score).trim() !== '') {
        scoreText = String(record.score).trim();
        const parsedScore = Number(scoreText);
        if (Number.isFinite(parsedScore) && parsedScore >= 0 && parsedScore <= 10) {
          numericScore = parsedScore;
        }
      }
      const assessment = {
        score: numericScore,
        scoreText,
        scale: numericScore !== null ? '0-10' : null,
        rankBucket: contextSidecar?.assessment?.rankBucket
          || (typeof fm?.rankBucket === 'string' && fm.rankBucket.trim() ? fm.rankBucket.trim() : null),
        documentType: contextSidecar?.assessment?.documentType
          || (typeof fm?.documentType === 'string' && fm.documentType.trim() ? fm.documentType.trim() : null),
        subscores: null,
        rationale: null
      };

      // Citation completeness & fieldStatus (§5)
      const citationFieldChecks = {
        paperId: {
          available: Boolean(paperId),
          source: paperId ? (citationSidecar ? 'citation-sidecar' : 'published-citation-source') : 'none'
        },
        originalTitle: {
          available: Boolean(identityStatus === 'verified' && originalTitle),
          source: citationSidecar?.originalTitle ? 'citation-sidecar' : (identityStatus === 'verified' && originalTitle ? 'published-citation-source' : 'none')
        },
        sourceUrl: {
          available: Boolean(officialSourceUrl),
          source: citationSidecar ? 'citation-sidecar' : (officialSourceUrl ? 'published-citation-source' : 'none')
        },
        pdfUrl: {
          available: Boolean(officialPdfUrl),
          source: citationSidecar?.pdfUrl ? 'citation-sidecar' : (officialPdfUrl ? 'published-citation-source' : 'none')
        },
        authors: {
          available: authors.length > 0,
          source: citationSidecar?.authors?.length ? 'citation-sidecar' : (authors.length > 0 ? 'published-citation-source' : 'none')
        },
        paperPublishedAt: {
          available: Boolean(paperPublishedAt),
          source: paperPublishedAt ? 'published-citation-source' : 'none'
        },
        doi: {
          available: Boolean(bibliographic.doi),
          source: bibliographic.doi ? 'published-citation-source' : 'none'
        },
        venue: {
          available: Boolean(bibliographic.venue),
          source: bibliographic.venue ? 'published-citation-source' : 'none'
        }
      };
      const fieldStatus = {};
      const missingFields = [];
      for (const [fieldName, info] of Object.entries(citationFieldChecks)) {
        const status = identityStatus !== 'verified' && record.pageType === 'paper'
          ? 'unverified'
          : (info.available ? 'available' : 'missing');
        fieldStatus[fieldName] = { status, source: info.source };
        if (!info.available && record.pageType === 'paper') {
          missingFields.push(fieldName);
        }
      }
      const citation = {
        sourceRecord: citationRecord,
        verified: Boolean(citationRecord.verified),
        complete: Boolean(citationRecord.complete),
        missingFields,
        fieldStatus
      };

      // Publication status & retraction evidence (§3.2 & §7)
      let publicationStatus = fm?.publicationStatus || 'active';
      let retraction = null;
      if (options.publicationNotices && options.publicationNotices[appearanceId]) {
        const pubNotice = options.publicationNotices[appearanceId];
        if (pubNotice.publicationStatus === 'retracted') {
          publicationStatus = 'retracted';
          retraction = {
            evidenceUrl: pubNotice.evidenceUrl,
            note: pubNotice.note,
            retractedAt: pubNotice.retractedAt ?? null
          };
        }
      } else if (publicationStatus === 'retracted') {
        retraction = {
          evidenceUrl: fm?.retractionEvidenceUrl,
          note: fm?.retractionNote,
          retractedAt: fm?.retractedAt ?? null
        };
      }
      if (publicationStatus === 'retracted') {
        invariant(
          retraction && typeof retraction.evidenceUrl === 'string' && /^https:\/\/[^\s<>"\\]+$/.test(retraction.evidenceUrl)
          && typeof retraction.note === 'string' && retraction.note.trim().length > 0,
          `${appearanceId} 标记为 retracted 时必须提供真实 HTTPS evidenceUrl 与说明`
        );
      }

      // Deterministic articleRevisionId (§4: 导读内容、来源版本、评分、标签和资源引用组成的确定性修订身份)
      const guideResources = resources.filter(r => r.kind !== 'pdf');
      const guideResourcesBundled = hasGuideContent
        && guideResources.filter(r => r.requiredForOffline).every(r => r.availability === 'bundled' && r.descriptor !== null);
      const offlinePackageBundled = hasGuideContent
        && resources.filter(r => r.requiredForOffline).every(r => r.availability === 'bundled' && r.descriptor !== null);

      const articleRevisionId = sha256Hex(serializeJsonBytes({
        appearanceId,
        sourceVersionId,
        articleSha256,
        scoreText,
        classificationConceptIds: tagConceptIds,
        classificationRegistrySha256: classification.registrySha256,
        classificationPublicationStatus: classification.publicationStatus,
        publicationStatus,
        resources: resources.map(r => ({
          resourceId: r.resourceId,
          kind: r.kind,
          sourceUrl: r.sourceUrl,
          availability: r.availability,
          sha256: r.descriptor ? r.descriptor.sha256 : null
        }))
      }));

      const articleRevision = {
        articleRevisionId,
        appearanceId,
        sourceVersionId,
        sanitizerPolicy: 'desktop-reader-html-fragment',
        articleDescriptor,
        hasGuideContent,
        resourceCount: resources.length,
        guideResourcesBundled,
        offlinePackageBundled
      };

      const appearance = {
        appearanceId,
        pageUrl: appearanceId,
        canonicalUrl: `${SITE_ORIGIN}${SITE_PREFIX}${appearanceId}`,
        pageType: record.pageType,
        publicationStatus,
        retraction,
        editionDate: record.date,
        categories: Array.isArray(record.categories) ? record.categories : [],
        summary: record.summary || '',
        articleRevisionId,
        memberAppearanceIds,
        memberPaperIds
      };

      const detailRecord = protocols.record(DETAIL_CONTRACT, {
        appearanceId,
        paperId,
        identityStatus,
        sourceKind,
        sourceVersion,
        appearance,
        articleRevision,
        titles,
        authors,
        dates,
        bibliographic,
        abstract,
        oneSentenceThesis,
        classification,
        assessment,
        citation,
        sidecars: {
          available: sidecarsAvailable,
          files: sidecarDescriptors
        },
        resources
      });

      const detailBytes = serializeJsonBytes(detailRecord);
      invariant(detailBytes.length <= MAX_DETAIL_BYTES, `${appearanceId} 详情 JSON 超过大小上限 ${MAX_DETAIL_BYTES} 字节`);
      const detailSha256 = sha256Hex(detailBytes);
      const detailUrl = `client/details/papers/${detailSha256}.json`;
      invariant(DETAIL_URL_PATTERN.test(detailUrl), `详情文件路径非法：${detailUrl}`);
      if (plannedDetails.has(detailUrl)) {
        invariant(plannedDetails.get(detailUrl).equals(detailBytes), `详情文件 SHA 冲突：${detailUrl}`);
      } else {
        plannedDetails.set(detailUrl, detailBytes);
      }

      const detailDescriptor = {
        url: detailUrl,
        bytes: detailBytes.length,
        sha256: detailSha256
      };

      const catalogRow = {
        appearanceId,
        paperId,
        identityStatus,
        sourceKind,
        sourceVersionId,
        pageType: record.pageType,
        publicationStatus,
        title: record.title,
        titleZh: record.titleZh,
        summary: record.summary || '',
        blogPublishedAt: dates.blogPublishedAt,
        articleUpdatedAt: dates.articleUpdatedAt,
        pageUrl: appearanceId,
        score: numericScore,
        tagConceptIds,
        articleRevisionId,
        detail: detailDescriptor
      };

      catalogRows.push(catalogRow);
      activeByAppearanceId.set(appearanceId, catalogRow);
    }

    const tombstones = buildTombstones({
      previousSnapshotPath: options.previousSnapshotPath || null,
      options,
      activeByAppearanceId,
      generatedAt,
      sourceCommit
    });

    const catalogPlan = planJsonShards(catalogRows, 'client/details/catalog', CATALOG_SHARD_URL_PATTERN, '桌面轻量目录');
    const tombstonePlan = planJsonShards(tombstones, 'client/details/tombstones', TOMBSTONE_SHARD_URL_PATTERN, '桌面删除记录');

    const snapshotRecord = protocols.record(SNAPSHOT_CONTRACT, {
      sourceCommit,
      catalogShards: catalogPlan.shards,
      recordCount: catalogRows.length,
      paperCount: distinctPaperKeys.size,
      appearanceCount: catalogRows.length,
      tombstoneShards: tombstonePlan.shards,
      tombstoneCount: tombstones.length,
      tagCatalogs
    });
    const snapshotBytes = serializeJsonBytes(snapshotRecord);
    invariant(snapshotBytes.length <= MAX_SNAPSHOT_BYTES, `快照 JSON 超过大小上限 ${MAX_SNAPSHOT_BYTES} 字节`);
    const snapshotId = sha256Hex(snapshotBytes);
    invariant(!snapshotBytes.toString('utf8').includes(snapshotId), '快照 JSON 禁止包含自身 SHA');
    const snapshotUrl = `client/details/snapshots/${snapshotId}.json`;
    invariant(SNAPSHOT_URL_PATTERN.test(snapshotUrl), `快照路径非法：${snapshotUrl}`);

    const manifestRecord = protocols.record(MANIFEST_CONTRACT, {
      snapshotId,
      snapshot: {
        url: snapshotUrl,
        bytes: snapshotBytes.length,
        sha256: snapshotId
      },
      generatedAt,
      sourceCommit,
      basePath: SITE_PREFIX
    });
    const manifestBytes = serializeJsonBytes(manifestRecord);
    invariant(manifestBytes.length <= MAX_MANIFEST_BYTES, `manifest.json 超过大小上限 ${MAX_MANIFEST_BYTES} 字节`);
    const manifestSelfSha = sha256Hex(manifestBytes);
    invariant(!manifestBytes.toString('utf8').includes(manifestSelfSha), 'manifest.json 禁止包含自身 SHA');

    // Prune any prior client/details tree (after verifying zero symlinks) so unreferenced stale objects never accumulate
    ensureRealDirectory(root, 'client', true);
    const detailsOutDir = path.join(root, 'client/details');
    assertNoSymlinksRecursive(detailsOutDir);
    fs.rmSync(detailsOutDir, { recursive: true, force: true });

    // Materialize immutable content-addressed objects first: articles -> papers -> tombstones -> catalog -> snapshot
    ensureRealDirectory(root, 'client/details', true);
    for (const [rel, bytes] of plannedArticles.entries()) {
      writeContentAddressedFile(root, rel, bytes);
    }
    for (const [rel, bytes] of plannedDetails.entries()) {
      writeContentAddressedFile(root, rel, bytes);
    }
    tombstonePlan.shards.forEach((shard, idx) => {
      writeContentAddressedFile(root, shard.url, tombstonePlan.buffers[idx]);
    });
    catalogPlan.shards.forEach((shard, idx) => {
      writeContentAddressedFile(root, shard.url, catalogPlan.buffers[idx]);
    });
    writeContentAddressedFile(root, snapshotUrl, snapshotBytes);

    // Final preflight check of snapshot & tagCatalogs on disk before switching mutable manifest.json
    for (const checkDesc of [
      manifestRecord.snapshot,
      tagCatalogs.snapshot,
      tagCatalogs.versions,
      ...catalogPlan.shards,
      ...tombstonePlan.shards
    ]) {
      const diskBytes = readRegularFile(root, checkDesc.url, MAX_TOTAL_CATALOG_BYTES, `预检文件 ${checkDesc.url}`);
      invariant(diskBytes.length === checkDesc.bytes && sha256Hex(diskBytes) === checkDesc.sha256,
        `预检文件字节或 SHA 不一致：${checkDesc.url}`);
    }

    // Atomically write client/details/manifest.json LAST
    atomicWriteFile(path.join(root, 'client/details/manifest.json'), manifestBytes);

    return {
      snapshotId,
      sourceCommit,
      generatedAt,
      recordCount: catalogRows.length,
      paperCount: distinctPaperKeys.size,
      appearanceCount: catalogRows.length,
      tombstoneCount: tombstones.length,
      catalogShardCount: catalogPlan.shards.length,
      tombstoneShardCount: tombstonePlan.shards.length,
      detailFileCount: plannedDetails.size,
      articleFileCount: plannedArticles.size
    };
  });
}

if (require.main === module) {
  try {
    const summary = exportDesktopDetails(process.argv[2] || 'public', process.argv[3] || process.cwd());
    process.stdout.write(`${JSON.stringify(summary)}\n`);
  } catch (error) {
    process.stderr.write(`export-desktop-details: ${error.message}\n`);
    process.exitCode = 1;
  }
}

module.exports = {
  SITE_ORIGIN,
  SITE_PREFIX,
  MANIFEST_CONTRACT,
  SNAPSHOT_CONTRACT,
  DETAIL_CONTRACT,
  MAX_MANIFEST_BYTES,
  MAX_SNAPSHOT_BYTES,
  MAX_SHARD_BYTES,
  MAX_SHARDS,
  MAX_TOTAL_CATALOG_BYTES,
  MAX_DETAIL_BYTES,
  MAX_ARTICLE_BYTES,
  MAX_ASSET_BYTES,
  MAX_ARTICLE_RESOURCES,
  MAX_BUNDLED_ARTICLE_ASSETS_BYTES,
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
  extractArticleContainer,
  sanitizeArticleHtml,
  assertSafeArticleHtml,
  exportDesktopDetails
};
