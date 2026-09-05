'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const { auditContent, parseInlineList } = require('../scripts/audit-content');

function fixture(files) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'blog-content-audit-'));
  for (const [relative, content] of Object.entries(files)) {
    const target = path.join(root, relative);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, content);
  }
  return root;
}

function post(frontMatter, body = '') {
  return `---\n${frontMatter}\n---\n\n${body}\n`;
}

test('parseInlineList preserves quoted values and splits YAML-style arrays', () => {
  assert.deepEqual(parseInlineList('[语音识别, "music, audio", Transformer]'), ['语音识别', 'music, audio', 'Transformer']);
});

test('content audit reports polluted tags with file and line', () => {
  const root = fixture({
    'content/posts/bad.md': post('title: bad\ntags: [语音识别，, `错误]')
  });
  const result = auditContent(root, { duplicateAllowlist: {} });
  assert.equal(result.issues.length, 2);
  assert.match(result.issues[0], /content\/posts\/bad\.md:3: tags/);
});

test('grandfather duplicate baseline only permits the original paths and reductions', () => {
  const id = '2607.07907';
  const first = 'content/posts/first.md';
  const second = 'content/posts/second.md';
  const common = `title: duplicate\ntags: [语音识别]\npaper_digest_arxiv_id: "${id}"`;
  const root = fixture({ [first]: post(common), [second]: post(common) });
  const allowlist = { [id]: [first, second] };
  assert.deepEqual(auditContent(root, { duplicateAllowlist: allowlist }).issues, []);

  fs.unlinkSync(path.join(root, second));
  assert.deepEqual(auditContent(root, { duplicateAllowlist: allowlist }).issues, []);

  const replacement = 'content/posts/replacement.md';
  fs.writeFileSync(path.join(root, replacement), post(common));
  assert.match(auditContent(root, { duplicateAllowlist: allowlist }).issues[0], /超出 grandfather 基线/);
});

test('new duplicate arXiv IDs fail with both file locations', () => {
  const common = 'title: duplicate\ntags: []\npaper_digest_arxiv_id: "2609.12345"';
  const root = fixture({
    'content/posts/a.md': post(common),
    'content/posts/b.md': post(common)
  });
  const issue = auditContent(root, { duplicateAllowlist: {} }).issues[0];
  assert.match(issue, /未授权重复/);
  assert.match(issue, /a\.md:4/);
  assert.match(issue, /b\.md:4/);
});

test('internal post links resolve through primary routes and aliases', () => {
  const root = fixture({
    'content/posts/target.md': post('title: target\ntags: []\naliases: [/audio-paper-digest-blog/posts/old-target/]'),
    'content/posts/source.md': post('title: source\ntags: []', '[有效](/audio-paper-digest-blog/posts/old-target/#method)')
  });
  assert.deepEqual(auditContent(root, { duplicateAllowlist: {} }).issues, []);
});

test('broken internal post links fail at the Markdown source line', () => {
  const root = fixture({
    'content/posts/source.md': post('title: source\ntags: []', '正文\n\n[失效](/audio-paper-digest-blog/posts/missing/)')
  });
  const issue = auditContent(root, { duplicateAllowlist: {} }).issues[0];
  assert.match(issue, /content\/posts\/source\.md:8: 站内论文链接无法解析/);
});
