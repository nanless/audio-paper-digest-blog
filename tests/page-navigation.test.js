'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { verifyPageNavigation } = require('../scripts/verify-page-navigation');

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'page-navigation-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const write = (name, body) => {
    const file = path.join(root, name);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, '<html lang="zh-CN"><head><title>Test</title></head><body id="top"><main><h1>Page</h1>' + body + '</main></body></html>');
  };
  return { root, write };
}

test('rendered navigation resolves base paths, encoded names, entities, fragments, redirects and empty image alt', t => {
  const { root, write } = fixture(t);
  write('index.html', '<a href="/blog/tags/%E8%AF%AD%E9%9F%B3-%23%E6%B5%8B%E8%AF%95/?a=1&amp;b=2#%E7%AB%A0%E8%8A%82">目录</a><a href="https://elsewhere.test/missing">External</a><a href="mailto:a@example.test">Email</a><img src="image.png" alt=""><script>"<a href=missing><h1>ignored</h1>"</script><!-- <h1>ignored</h1> -->');
  write('tags/语音-#测试/index.html', '<h2 id="章节">章节</h2><a href="#top">Top</a><a href="../../">Home</a>');
  fs.writeFileSync(path.join(root, 'image.png'), 'fixture');
  fs.writeFileSync(path.join(root, 'redirect.html'), '<html><head><meta http-equiv="refresh" content="0; url=/blog/"></head></html>');
  assert.deepEqual(verifyPageNavigation(root, 'https://example.test/blog/'), { htmlPages: 3, redirectPages: 1, references: 6, fragmentLinks: 2 });
});

test('rendered navigation rejects broken destinations and fragments instead of accepting nearby matches', t => {
  const { root, write } = fixture(t);
  write('index.html', '<a href="other/#absent">Bad anchor</a><a href="0,0,0">Bad link</a>');
  write('other/index.html', '<h2 id="present">Present</h2>');
  assert.throws(() => verifyPageNavigation(root, 'https://example.test/blog/'), /站内目标不存在 0,0,0[\s\S]*站内锚点不存在 other\/#absent/);
});

test('rendered navigation rejects inaccessible document structure and missing assets', t => {
  const { root, write } = fixture(t);
  write('index.html', '<h1>Second title</h1><h2 id="twice">A</h2><h2 id="twice">B</h2><img src="missing.png"><script src="missing.js"></script>');
  assert.throws(() => verifyPageNavigation(root, 'https://example.test/blog/'), /重复 id twice[\s\S]*图片缺少 alt[\s\S]*missing.png[\s\S]*missing.js[\s\S]*h1/);
});
