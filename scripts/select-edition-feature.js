'use strict';

// Presentation selection only: never writes article/source files, fetches images,
// or grants any scientific/publication eligibility.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { extractFrontMatter, frontMatterField } = require('./audit-content');
const CONTRACT = 'edition-feature-auto-v1';
const OUTPUT = 'data/edition-features-auto.json';
const sha = raw => crypto.createHash('sha256').update(raw).digest('hex');
const field = (front, key) => frontMatterField(front, key)?.values[0] || '';
function scalar(front, key) {
  const value = field(front, key);
  const raw = front.lines.find(line => line.startsWith(key + ':'))?.slice(key.length + 1).trim();
  if (raw?.startsWith('"')) { try { return JSON.parse(raw); } catch (_) { return ''; } }
  return value;
}
function plain(value) { return String(value || '').replace(/[\r\n\t]+/g, ' ').trim(); }
function dateOf(front) {
  const value = field(front, 'date');
  return /^\d{4}-\d{2}-\d{2}(?:$|T| )/.test(value) ? value.slice(0, 10) : '';
}
function readPage(file) {
  if (!fs.existsSync(file) || fs.lstatSync(file).isSymbolicLink()) return null;
  const raw = fs.readFileSync(file);
  const source = raw.toString('utf8');
  const front = extractFrontMatter(source);
  const end = source.indexOf('\n---', 4);
  return { raw, source, front, body: end >= 0 ? source.slice(end + 4) : '', date: dateOf(front) };
}
function postRoute(url) {
  // Exact site-local routes, without URL normalization hiding traversal.
  const match = String(url).match(/^\/(?:audio-paper-digest-blog\/)?posts\/([a-z0-9][a-z0-9-]*)\/?$/);
  return match ? `/posts/${match[1]}/` : '';
}
function membersOf(page) {
  let inList = false, sections = 0, invalid = false;
  const members = [];
  for (const line of page.body.split(/\r?\n/)) {
    if (/^##[ \t]+/.test(line)) {
      inList = line.includes('论文列表');
      if (inList) sections++;
    } else if (inList && /^###[ \t]+/.test(line)) {
      const links = [...line.matchAll(/\]\(([^\s)]+)\)/g)];
      if (links.length !== 1 || !postRoute(links[0][1])) invalid = true;
      else members.push(postRoute(links[0][1]));
    }
  }
  const counts = [scalar(page.front, 'description'), page.body.match(/共分析[^\n]*篇论文/)?.[0] || '']
    .map(text => text.match(/共分析[ \t*]*([0-9]+)[ \t*]*篇/)).filter(Boolean).map(match => Number(match[1]));
  return !invalid && sections === 1 && counts.length > 0 && counts.every(count => count === members.length)
    && members.length > 0 && new Set(members).size === members.length ? members : null;
}
function officialImage(url, versionedId) {
  if (typeof url !== 'string' || /[\\\s?#@%]/.test(url)) return false;
  const prefix = `https://arxiv.org/html/${versionedId}/`;
  if (!url.startsWith(prefix)) return false;
  const tail = url.slice(prefix.length);
  return /^(?:[A-Za-z0-9_-][A-Za-z0-9_.-]*\/)*[A-Za-z0-9_-][A-Za-z0-9_.-]*\.(?:png|jpe?g|webp|svg)$/i.test(tail)
    && tail.split('/').every(part => part !== '.' && part !== '..');
}
function crc32(raw, start, end) {
  let crc = 0xffffffff;
  for (let index = start; index < end; index++) {
    crc ^= raw[index];
    for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
  }
  return (crc ^ 0xffffffff) >>> 0;
}
function pngDimensions(raw) {
  if (raw.length < 57 || raw.length > 32 * 1024 * 1024
      || !raw.subarray(0, 8).equals(Buffer.from('89504e470d0a1a0a', 'hex'))) return null;
  let cursor = 8, dimensions = null, seenIDAT = false, finishedIDAT = false;
  while (cursor < raw.length) {
    if (raw.length - cursor < 12) return null;
    const length = raw.readUInt32BE(cursor);
    if (length > raw.length - cursor - 12) return null;
    const type = raw.toString('ascii', cursor + 4, cursor + 8);
    const end = cursor + 12 + length;
    if (!/^[A-Za-z]{4}$/.test(type) || !/[A-Z]/.test(type[2])
        || crc32(raw, cursor + 4, end - 4) !== raw.readUInt32BE(end - 4)) return null;
    if (cursor === 8) {
      if (type !== 'IHDR' || length !== 13) return null;
      const width = raw.readUInt32BE(cursor + 8), height = raw.readUInt32BE(cursor + 12);
      const depth = raw[cursor + 16], color = raw[cursor + 17];
      const depths = { 0: [1, 2, 4, 8, 16], 2: [8, 16], 3: [1, 2, 4, 8], 4: [8, 16], 6: [8, 16] };
      if (!(width > 0 && height > 0 && width <= 50000 && height <= 50000)
          || !depths[color]?.includes(depth) || raw[cursor + 18] !== 0
          || raw[cursor + 19] !== 0 || raw[cursor + 20] > 1) return null;
      dimensions = { width, height };
    } else if (type === 'IHDR') return null;
    if (type === 'IDAT') {
      if (finishedIDAT) return null;
      if (length > 0) seenIDAT = true;
    } else if (seenIDAT) finishedIDAT = true;
    if (type === 'IEND') return length === 0 && seenIDAT && end === raw.length ? dimensions : null;
    cursor = end;
  }
  return null;
}

function svgDimensions(raw) {
  if (raw.length > 32 * 1024 * 1024) return null;
  const source = raw.toString('utf8');
  if (!Buffer.from(source).equals(raw) || /<!DOCTYPE|<!ENTITY/i.test(source)) return null;
  const text = source.replace(/^\uFEFF/, '').replace(/<\?xml[\s\S]*?\?>/g, '').trim();
  const root = text.match(/^<svg\b((?:[^>"']|"[^"]*"|'[^']*')*)>/);
  if (!root || !/\sxmlns=["']http:\/\/www\.w3\.org\/2000\/svg["']/.test(root[0]) || !text.endsWith('</svg>')) return null;
  const box = root[1].match(/\bviewBox\s*=\s*(["'])([^"']+)\1/);
  if (!box) return null;
  const values = box[2].trim().split(/[\s,]+/).map(Number);
  if (values.length !== 4 || !values.every(Number.isFinite) || values[2] <= 0 || values[3] <= 0 || values[2] > 50000 || values[3] > 50000) return null;
  const stack = [];
  let cursor = 0;
  const tokens = /<(?:!--[\s\S]*?--|!\[CDATA\[[\s\S]*?\]\]|\?[\s\S]*?\?|\/?[A-Za-z_][\w:.-]*(?:[^>"']|"[^"]*"|'[^']*')*)>/g;
  for (const token of text.matchAll(tokens)) {
    if (text.slice(cursor, token.index).includes('<') || (!stack.length && text.slice(cursor, token.index).trim())) return null;
    cursor = token.index + token[0].length;
    if (/^<(?:!|\?)/.test(token[0])) continue;
    const name = token[0].match(/^<\/?([A-Za-z_][\w:.-]*)/)[1];
    if (token[0].startsWith('</')) { if (stack.pop() !== name) return null; }
    else if (!token[0].endsWith('/>')) { if (!stack.length && (token.index !== 0 || name !== 'svg')) return null; stack.push(name); }
  }
  return cursor === text.length && stack.length === 0 ? { width: values[2], height: values[3] } : null;
}
function imageMapOf(root) {
  const file = path.join(root, 'data/arxiv_image_map.json');
  if (!fs.existsSync(file)) return {};
  // A broken renderer map cannot safely establish any mapped candidate.
  if (fs.lstatSync(file).isSymbolicLink()) return null;
  try {
    const map = JSON.parse(fs.readFileSync(file, 'utf8'));
    return map && typeof map === 'object' && !Array.isArray(map) ? map : null;
  } catch (_) { return null; }
}
function localImage(root, url, arxivId, mapped = false) {
  const relative = String(url).replace(/^\/audio-paper-digest-blog(?=\/)/, '');
  const match = relative.match(/^\/images\/papers\/([0-9]{4}\.[0-9]{4,5})\/figure-([0-9]+)-([a-f0-9]{16})\.(png|svg)$/);
  if (!match || match[1] !== arxivId) return null;
  const file = path.join(root, 'static' + relative);
  let cursor = root;
  for (const part of ('static' + relative).split('/')) {
    cursor = path.join(cursor, part);
    if (!fs.existsSync(cursor) || fs.lstatSync(cursor).isSymbolicLink()) return null;
  }
  if (!fs.statSync(file).isFile()) return null;
  const raw = fs.readFileSync(file), dimensions = match[4] === 'svg' ? svgDimensions(raw) : pngDimensions(raw), digest = sha(raw);
  // Historical renderer mappings can retain a prior filename after an
  // authenticated source repair. Bind current complete bytes, not that old
  // filename; direct Markdown-local images still require their hash prefix.
  return dimensions && (mapped || digest.startsWith(match[3])) ? { imagePath: relative, imageSha256: digest, ...dimensions } : null;
}
function imagesOf(body) {
  // Ignore examples inside fenced code; preserve the exact real Markdown image.
  let fence = '';
  const visible = body.replace(/<!--[\s\S]*?(?:-->|$)/g, '').split(/\r?\n/).map(line => {
    const marker = line.match(/^ {0,3}(`{3,}|~{3,})/);
    if (marker) {
      if (!fence) fence = marker[1];
      else if (marker[1][0] === fence[0] && marker[1].length >= fence.length) fence = '';
      return '';
    }
    return fence ? '' : line.replace(/`+[^`\n]*`+/g, '');
  }).join('\n');
  const images = [];
  for (const match of visible.matchAll(/!\[((?:\\.|[^\]\\\n])*)\]\(([^\s)]+)\)/g)) {
    const after = visible.slice(match.index + match[0].length, match.index + match[0].length + 1500);
    const caption = after.match(/^[ \t]*\*论文图[^\n]*原论文[^\n]*\*[ \t]*$/m)?.[0]?.trim() || '';
    // Only a nearby caption, before the next paragraph/heading/image, belongs here.
    const captionOffset = caption ? after.indexOf(caption) : -1;
    const captionNearby = captionOffset >= 0 && /^(?:\]\([^\s)]+\))?[ \t\r\n]*$/.test(after.slice(0, captionOffset));
    const imageAlt = match[1].replace(/\\([\[\]\\])/g, '$1');
    const text = imageAlt + ' ' + (captionNearby ? caption : '');
    const figure = text.match(/原论文\s*((?:Fig(?:ure)?\.?)[ \t]*\d+[A-Za-z]?)/i)?.[1];
    if (!figure) continue;
    images.push({ sourceImageUrl: match[2], imageAlt, imageMarkdown: match[0], imageMarkdownSha256: sha(match[0]),
      figure, caption: captionNearby ? caption.replace(/^\*|\*$/g, '') : imageAlt, text });
  }
  return images;
}
function isDiagram(text) {
  const positive = /\b(?:overview|architecture|framework|pipeline|flowchart|schematic)\b|structure of|整体|架构|框架|流程|方法示意|系统结构/i.test(text);
  const result = /\b(?:accuracy|throughput|latency|ablation|heatmap|results?|performance|distribution|convergence)\b|注意力权重|消融|曲线|结果对比|性能对比|收敛/i.test(text);
  const baseline = /\b(?:baseline|vanilla|previous|prior|existing|standard)\b|基线|已有.{0,12}(?:框架|架构|结构)|原有.{0,12}(?:框架|架构|结构)/i.test(text);
  return positive && !result && !baseline;
}
function selectEditionFeature(root = process.cwd()) {
  root = path.resolve(root);
  const posts = path.join(root, 'content/posts');
  const dailies = [];
  for (const entry of fs.existsSync(posts) ? fs.readdirSync(posts, { withFileTypes: true }) : []) {
    if (!entry.isFile() || !entry.name.endsWith('.md')) continue;
    const page = readPage(path.join(posts, entry.name));
    if (!page || field(page.front, 'draft') === 'true' || !page.date) continue;
    const type = field(page.front, 'paper_digest_page_type');
    const name = entry.name.slice(0, -3);
    const conference = type === 'conference' || /^(?:icassp|iclr|icml)[0-9]{4}-(?:summary|task-.+)$/.test(name) || /^conference-[a-z0-9-]+-20[0-9]{2}(?:-task-.+)?$/.test(name);
    if (!conference && type !== 'paper' && (type === 'index' || /^\d{4}-\d{2}-\d{2}$/.test(name)))
      dailies.push({ ...page, name });
  }
  dailies.sort((a, b) => b.date.localeCompare(a.date) || a.name.localeCompare(b.name));
  const daily = dailies[0];
  const stats = { status: 'fallback', reason: 'no-published-daily', latestDate: daily?.date || '',
    memberCount: 0, eligiblePaperCount: 0, candidateCount: 0, methodDiagramCount: 0 };
  const manifest = { contract: CONTRACT, selection: stats, editions: {} };
  if (!daily) return manifest;
  // Generated editions have one date-only identity. Ambiguous timestamps or
  // duplicate editions must not pick a different page than Hugo's homepage.
  if (field(daily.front, 'date') !== daily.date || dailies.filter(page => page.date === daily.date).length !== 1) {
    stats.reason = 'ambiguous-latest-daily-date'; return manifest;
  }
  const members = membersOf(daily);
  if (!members) { stats.reason = 'invalid-or-incomplete-daily-membership'; return manifest; }
  stats.memberCount = members.length;
  const candidates = [];
  const imageMap = imageMapOf(root);
  if (!imageMap) { stats.reason = 'invalid-render-image-map'; return manifest; }
  for (const paperPath of members) {
    const paper = readPage(path.join(posts, paperPath.slice('/posts/'.length, -1) + '.md'));
    if (!paper || paper.date !== daily.date || field(paper.front, 'draft') === 'true'
      || field(paper.front, 'paper_digest_page_type') !== 'paper') continue;
    const arxivId = field(paper.front, 'paper_digest_arxiv_id');
    const versionedId = field(paper.front, 'paper_digest_arxiv_versioned_id');
    const sourceUrl = field(paper.front, 'paper_digest_arxiv_abs_url');
    const scoreText = field(paper.front, 'paper_digest_score');
    const score = /^[0-9]+(?:\.[0-9]+)?$/.test(scoreText) ? Number(scoreText) : NaN;
    if (!/^[0-9]{4}\.[0-9]{4,5}$/.test(arxivId) || !new RegExp('^' + arxivId.replace('.', '\\.') + 'v[1-9][0-9]*$').test(versionedId)
        || sourceUrl !== `https://arxiv.org/abs/${versionedId}` || !Number.isFinite(score) || score < 0 || score > 10) continue;
    stats.eligiblePaperCount++;
    for (const image of imagesOf(paper.body)) {
      const official = officialImage(image.sourceImageUrl, versionedId);
      const hasMapping = Object.hasOwn(imageMap, image.sourceImageUrl);
      const mappedUrl = hasMapping ? imageMap[image.sourceImageUrl] : '';
      // Match the renderer exactly. A malformed mapping must not silently
      // revert to a different src than the real article would render.
      const local = hasMapping ? (official && typeof mappedUrl === 'string' ? localImage(root, mappedUrl, arxivId, true) : null)
        : localImage(root, image.sourceImageUrl, arxivId);
      if (hasMapping ? !local : (!local && !official)) continue;
      const selectionKind = isDiagram(image.text) ? 'method-diagram' : 'paper-figure';
      const title = plain(scalar(paper.front, 'paper_digest_reader_title') || scalar(paper.front, 'title'));
      if (!title || !image.imageAlt) continue;
      const { text, ...proof } = image;
      candidates.push({ date: daily.date, paperPath, arxivId, sourceUrl, title,
        description: plain(scalar(paper.front, 'paper_digest_one_sentence') || scalar(paper.front, 'description')),
        imagePath: local ? local.imagePath : image.sourceImageUrl, imageKind: local ? 'local' : 'official',
        ...proof, ...(local || {}), ...(hasMapping ? { renderedImageUrl: mappedUrl } : {}), alt: image.imageAlt,
        paperSha256: sha(paper.raw), dailySha256: sha(daily.raw), score, selectionKind });
    }
  }
  candidates.sort((a, b) => Number(b.selectionKind === 'method-diagram') - Number(a.selectionKind === 'method-diagram')
    || b.score - a.score || a.paperPath.localeCompare(b.paperPath) || a.sourceImageUrl.localeCompare(b.sourceImageUrl));
  stats.candidateCount = candidates.length;
  stats.methodDiagramCount = candidates.filter(item => item.selectionKind === 'method-diagram').length;
  if (!candidates.length) { stats.reason = 'no-valid-original-figure'; return manifest; }
  stats.status = 'selected';
  stats.reason = stats.methodDiagramCount ? 'highest-scored-paper-with-method-diagram' : 'highest-scored-paper-with-original-figure';
  manifest.editions[daily.date] = candidates[0];
  return manifest;
}
function writeEditionFeature(root = process.cwd()) {
  root = path.resolve(root);
  const manifest = selectEditionFeature(root);
  const output = path.join(root, OUTPUT);
  fs.mkdirSync(path.dirname(output), { recursive: true });
  const temp = output + `.${process.pid}.${crypto.randomBytes(6).toString('hex')}.tmp`;
  try { fs.writeFileSync(temp, JSON.stringify(manifest, null, 2) + '\n'); fs.renameSync(temp, output); }
  finally { fs.rmSync(temp, { force: true }); }
  return manifest;
}
if (require.main === module) process.stdout.write(JSON.stringify(writeEditionFeature(process.argv[2]).selection) + '\n');
module.exports = { CONTRACT, OUTPUT, selectEditionFeature, writeEditionFeature, membersOf, officialImage, imagesOf, isDiagram };
