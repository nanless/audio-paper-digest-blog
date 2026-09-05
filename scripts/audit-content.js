'use strict';

const fs = require('node:fs');
const path = require('node:path');

const SITE_POST_PREFIX = '/audio-paper-digest-blog/posts/';
const TAG_EDGE_POLLUTION = /^[\s、，。、；：！？`]|[\s、，。、；：！？`]$/u;
const ARXIV_ID_PATTERN = /^[0-9]{4}\.[0-9]{4,5}$/;

const GRANDFATHERED_DUPLICATES = Object.freeze({
  '2607.07907': [
    'content/posts/2026-07-10-multimodal-unlearning-across-vision-language-2607-07907.md',
    'content/posts/2026-07-10-multimodal-unlearning-across-vision-language.md'
  ],
  '2607.08168': [
    'content/posts/2026-07-10-muscriptor-an-open-model-for-multi-instrument-2607-08168.md',
    'content/posts/2026-07-10-muscriptor-an-open-model-for-multi-instrument.md'
  ],
  '2607.08208': [
    'content/posts/2026-07-10-diarization-guided-qwen-asr-adaptation-for-2607-08208.md',
    'content/posts/2026-07-10-diarization-guided-qwen-asr-adaptation-for.md'
  ],
  '2607.08360': [
    'content/posts/2026-07-10-inverse-designed-meta-processing-units-for-multi-2607-08360.md',
    'content/posts/2026-07-10-inverse-designed-meta-processing-units-for-multi.md'
  ],
  '2607.08586': [
    'content/posts/2026-07-10-why-do-you-say-it-like-that-a-phoneme-level-2607-08586.md',
    'content/posts/2026-07-10-why-do-you-say-it-like-that-a-phoneme-level.md'
  ]
});

function walkMarkdown(root) {
  if (!fs.existsSync(root)) return [];
  const files = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) files.push(...walkMarkdown(full));
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(full);
  }
  return files.sort();
}

function extractFrontMatter(source) {
  const lines = source.split(/\r?\n/);
  if (lines[0] !== '---') return { lines: [], startLine: 0 };
  const end = lines.indexOf('---', 1);
  if (end < 0) return { lines: [], startLine: 0 };
  return { lines: lines.slice(1, end), startLine: 2 };
}

function unquote(value) {
  const trimmed = value.trim();
  if (trimmed.length >= 2) {
    const first = trimmed[0];
    const last = trimmed[trimmed.length - 1];
    if ((first === '"' && last === '"') || (first === "'" && last === "'")) return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseInlineList(value) {
  const trimmed = value.trim();
  if (!trimmed.startsWith('[') || !trimmed.endsWith(']')) return [unquote(trimmed)];
  const body = trimmed.slice(1, -1);
  if (!body.trim()) return [];
  const values = [];
  let current = '';
  let quote = '';
  let escaped = false;
  for (const character of body) {
    if (escaped) {
      current += character;
      escaped = false;
    } else if (character === '\\' && quote === '"') {
      current += character;
      escaped = true;
    } else if (quote) {
      current += character;
      if (character === quote) quote = '';
    } else if (character === '"' || character === "'") {
      quote = character;
      current += character;
    } else if (character === ',') {
      values.push(unquote(current));
      current = '';
    } else {
      current += character;
    }
  }
  values.push(unquote(current));
  return values;
}

function frontMatterField(frontMatter, key) {
  const pattern = new RegExp(`^${key}:\\s*(.*)$`);
  for (let index = 0; index < frontMatter.lines.length; index += 1) {
    const match = frontMatter.lines[index].match(pattern);
    if (!match) continue;
    const line = frontMatter.startLine + index;
    if (match[1].trim()) return { values: parseInlineList(match[1]), line };
    const values = [];
    for (let cursor = index + 1; cursor < frontMatter.lines.length; cursor += 1) {
      const child = frontMatter.lines[cursor];
      if (/^[A-Za-z0-9_-]+:\s*/.test(child)) break;
      const item = child.match(/^\s+-\s*(.*?)\s*$/);
      if (item) values.push(unquote(item[1]));
      else if (child.trim()) break;
    }
    return { values, line };
  }
  return null;
}

function normalizePostRoute(value) {
  if (!value) return '';
  let pathname;
  try {
    pathname = new URL(value, 'https://audit.invalid').pathname;
    pathname = decodeURIComponent(pathname);
  } catch (_) {
    return '';
  }
  if (pathname.startsWith(SITE_POST_PREFIX)) pathname = `/posts/${pathname.slice(SITE_POST_PREFIX.length)}`;
  if (!pathname.startsWith('/posts/')) return '';
  pathname = pathname.replace(/\/+$/, '');
  return `${pathname}/`;
}

function lineStarts(source) {
  const starts = [0];
  for (let index = 0; index < source.length; index += 1) {
    if (source[index] === '\n') starts.push(index + 1);
  }
  return starts;
}

function lineNumber(starts, offset) {
  let low = 0;
  let high = starts.length;
  while (low + 1 < high) {
    const middle = Math.floor((low + high) / 2);
    if (starts[middle] <= offset) low = middle;
    else high = middle;
  }
  return low + 1;
}

function auditContent(repoRoot, options = {}) {
  const root = path.resolve(repoRoot);
  const contentRoot = path.join(root, 'content');
  const postRoot = path.join(contentRoot, 'posts');
  const allowlist = options.duplicateAllowlist || GRANDFATHERED_DUPLICATES;
  const files = walkMarkdown(contentRoot);
  const records = [];
  const issues = [];
  const routes = new Set();
  const ids = new Map();

  for (const file of files) {
    const relative = path.relative(root, file).split(path.sep).join('/');
    const source = fs.readFileSync(file, 'utf8');
    const frontMatter = extractFrontMatter(source);
    const record = { file, relative, source, frontMatter };
    records.push(record);

    const tags = frontMatterField(frontMatter, 'tags');
    if (tags) {
      for (const tag of tags.values) {
        if (tag && TAG_EDGE_POLLUTION.test(tag)) {
          issues.push(`${relative}:${tags.line}: tags 含首尾污染字符：${JSON.stringify(tag)}`);
        }
      }
    }

    const arxiv = frontMatterField(frontMatter, 'paper_digest_arxiv_id');
    if (arxiv && arxiv.values.length === 1) {
      const id = arxiv.values[0];
      if (ARXIV_ID_PATTERN.test(id)) {
        if (!ids.has(id)) ids.set(id, []);
        ids.get(id).push({ relative, line: arxiv.line });
      }
    }

    if (file.startsWith(`${postRoot}${path.sep}`)) {
      const url = frontMatterField(frontMatter, 'url');
      const slug = frontMatterField(frontMatter, 'slug');
      let primaryRoute = '';
      if (url?.values[0]) primaryRoute = normalizePostRoute(url.values[0]);
      else if (slug?.values[0]) primaryRoute = normalizePostRoute(`/posts/${slug.values[0]}/`);
      else primaryRoute = normalizePostRoute(`/posts/${path.basename(file, '.md')}/`);
      if (primaryRoute) routes.add(primaryRoute);
      const aliases = frontMatterField(frontMatter, 'aliases');
      for (const alias of aliases?.values || []) {
        const route = normalizePostRoute(alias);
        if (route) routes.add(route);
      }
    }
  }

  for (const [id, duplicates] of ids) {
    if (duplicates.length <= 1) continue;
    const allowedPaths = new Set(allowlist[id] || []);
    const locations = duplicates.map((entry) => `${entry.relative}:${entry.line}`);
    if (!allowedPaths.size) {
      issues.push(`paper_digest_arxiv_id ${id} 出现未授权重复：${locations.join(', ')}`);
      continue;
    }
    if (duplicates.length > allowedPaths.size || duplicates.some((entry) => !allowedPaths.has(entry.relative))) {
      issues.push(`paper_digest_arxiv_id ${id} 超出 grandfather 基线：${locations.join(', ')}`);
    }
  }

  const linkPattern = /\]\(\s*<?(\/audio-paper-digest-blog\/posts\/[^\s)>?#]+\/?)(?:[?#][^\s)>]*)?>?\s*\)/g;
  let linkCount = 0;
  for (const record of records) {
    const starts = lineStarts(record.source);
    for (const match of record.source.matchAll(linkPattern)) {
      linkCount += 1;
      const route = normalizePostRoute(match[1]);
      if (!route || !routes.has(route)) {
        issues.push(`${record.relative}:${lineNumber(starts, match.index)}: 站内论文链接无法解析：${match[1]}`);
      }
    }
  }

  return {
    issues,
    stats: {
      markdownFiles: files.length,
      postRoutes: routes.size,
      internalPostLinks: linkCount,
      explicitArxivIds: Array.from(ids.values()).reduce((total, entries) => total + entries.length, 0),
      grandfatheredDuplicateIds: Object.keys(allowlist).filter((id) => (ids.get(id) || []).length > 1).length
    }
  };
}

function main() {
  const root = path.resolve(process.argv[2] || '.');
  const result = auditContent(root);
  if (result.issues.length) {
    process.stderr.write(`content-audit: ${result.issues.length} 个问题\n${result.issues.map((issue) => `- ${issue}`).join('\n')}\n`);
    process.exitCode = 1;
    return;
  }
  process.stdout.write(`content-audit: 通过\n${JSON.stringify(result.stats, null, 2)}\n`);
}

if (require.main === module) main();

module.exports = {
  GRANDFATHERED_DUPLICATES,
  TAG_EDGE_POLLUTION,
  auditContent,
  extractFrontMatter,
  frontMatterField,
  normalizePostRoute,
  parseInlineList
};
