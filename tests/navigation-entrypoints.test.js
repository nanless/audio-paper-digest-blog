'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');

test('real Hugo gives separate generation destinations, accessible navigation, recovery search and paginated home titles', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'navigation-entrypoints-'));
  try {
    for (const dir of ['layouts', 'assets', 'themes']) fs.cpSync(path.join(root, dir), path.join(temp, dir), { recursive: true });
    fs.mkdirSync(path.join(temp, 'content/posts'), { recursive: true });
    fs.mkdirSync(path.join(temp, 'data'));
    // Empty signed collections keep this a layout fixture, never a synthetic classification.
    let config = fs.readFileSync(path.join(root, 'hugo.yaml'), 'utf8').replace('https://nanless.github.io/audio-paper-digest-blog/', 'https://example.test/blog/').replace('pagerSize: 20', 'pagerSize: 2').replace('enableGitInfo: true', 'enableGitInfo: false');
    config += '\nstaticDir: []\ndisableKinds: [taxonomy, term, sitemap, robotsTXT]\n';
    fs.writeFileSync(path.join(temp, 'hugo.yaml'), config);
    for (let day = 1; day <= 6; day++) {
      const date = '2026-09-' + String(day).padStart(2, '0');
      fs.writeFileSync(path.join(temp, 'content/posts', date + '.md'), '---\ntitle: Daily ' + day + '\ndate: ' + date + '\npaper_digest_page_type: index\n---\n\n# Daily ' + day + '\n\nA daily research digest.\n');
    }
    execFileSync('hugo', ['--source', temp, '--destination', path.join(temp, 'public'), '--minify'], { stdio: 'pipe' });
    const home = fs.readFileSync(path.join(temp, 'public/index.html'), 'utf8');
    for (const [id, label] of [['task.audio-generation', '音频生成'], ['task.music-generation', '音乐生成']]) {
      assert.match(home, new RegExp('href=["\']?/blog/papers/\\?concept=' + id.replaceAll('.', '\\.') + '["\']?>' + label));
    }
    assert.ok(!home.includes('音频与音乐生成'));
    assert.match(home, /placeholder="题目、arXiv \/ IEEE 编号"/);
    assert.match(home, /href=https:\/\/example\.test\/blog\/ aria-current=page/);
    assert.match(home, /aria-label=切换深浅主题/);
    assert.match(home, /AI 辅助导读 · 论文结论请以原文为准/);
    assert.equal((home.match(/<h1[ >]/g) || []).length, 1);
    for (const page of [2, 3]) {
      const html = fs.readFileSync(path.join(temp, 'public/page', String(page), 'index.html'), 'utf8');
      assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
      assert.match(html, new RegExp('每日速递 · 第 ' + page + ' 页'));
      assert.match(html, /href=\/blog\/>返回最新速递/);
      assert.match(html, /aria-current=page/);
    }
    const missing = fs.readFileSync(path.join(temp, 'public/404.html'), 'utf8');
    assert.match(missing, /搜索论文题目、arXiv 或 IEEE 编号/);
    assert.match(missing, /action=\/blog\/papers\//);
    assert.match(missing, /name=q/);
  } finally { fs.rmSync(temp, { recursive: true, force: true }); }
});
