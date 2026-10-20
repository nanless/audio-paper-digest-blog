'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');

test('real Hugo renders edition-specific returns and body shortcuts without guessing membership', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'conference-page-navigation-'));
  try {
    for (const dir of ['layouts', 'assets', 'themes']) fs.cpSync(path.join(root, dir), path.join(temp, dir), { recursive: true });
    fs.mkdirSync(path.join(temp, 'content/posts'), { recursive: true });
    fs.mkdirSync(path.join(temp, 'data'));
    fs.writeFileSync(path.join(temp, 'hugo.yaml'), 'baseURL: "https://example.test/blog/"\nlanguageCode: "zh-CN"\ndefaultContentLanguage: "zh-cn"\ntheme: PaperMod\nbuildFuture: true\nstaticDir: []\ndisableKinds: [home, RSS, sitemap, robotsTXT, "404"]\nparams:\n  env: production\n  ShowBreadCrumbs: true\n  ShowToc: true\n  ShowShareButtons: false\n  comments: false\n');
    const entries = [
      { id: 'speech-2026', name: 'Speech', year: 2026, summaryPath: '/posts/irregular-overview/', categoryPath: '/categories/speech-2026/', links: [{ path: '/posts/irregular-overview/', label: '会议总览' }, { path: '/categories/speech-2026/', label: '论文导读', scope: 'blog-guides' }, { path: '/posts/irregular-task/', label: '语音专题' }, { path: '/posts/missing-task/', label: '不存在的专题' }] },
      { id: 'missing-2026', name: 'Missing', year: 2026, summaryPath: '/posts/not-generated/' },
      { id: 'ambiguous-2026', name: 'Ambiguous', year: 2026, summaryPath: '/posts/irregular-overview/', links: [{ path: '/posts/ambiguous-task/', label: '重复成员' }] },
      { id: 'other-2026', name: 'Other', year: 2026, summaryPath: '/posts/other-overview/', links: [{ path: '/posts/ambiguous-task/', label: '重复成员' }] }
    ];
    fs.writeFileSync(path.join(temp, 'data/conference-directory.json'), JSON.stringify({ entries }));
    function post(id, metadata, body = '## 论文列表\n\n正文只保留一份。') {
      fs.writeFileSync(path.join(temp, 'content/posts', id + '.md'), '---\n' + Object.entries({ title: id, date: '2026-10-19', ...metadata }).map(([key,value]) => key + ': ' + JSON.stringify(value)).join('\n') + '\n---\n\n' + body + '\n');
    }
    post('irregular-overview', { paper_digest_page_type: 'conference' });
    post('other-overview', { paper_digest_page_type: 'conference' });
    post('irregular-task', { paper_digest_page_type: 'conference' });
    post('ambiguous-task', { paper_digest_page_type: 'conference' });
    post('paper', { paper_digest_page_type: 'paper', paper_digest_conference_id: 'speech-2026', categories: ['speech-2026'] });
    post('unknown', { paper_digest_page_type: 'paper', paper_digest_conference_id: 'speech-2027', categories: ['speech-2026'] });
    post('missing', { paper_digest_page_type: 'paper', paper_digest_conference_id: 'missing-2026' });
    post('conference-speech-2026-guess', { paper_digest_page_type: 'paper', categories: ['speech-2026'] });
    post('no-list', { paper_digest_page_type: 'conference' }, '## 研究概览\n\n没有论文列表。');
    post('2026-10-19', { paper_digest_page_type: 'index' });
    execFileSync('hugo', ['--source', temp, '--destination', path.join(temp, 'public'), '--minify', '--panicOnWarning'], { stdio: 'pipe' });
    const read = id => fs.readFileSync(path.join(temp, 'public/posts', id, 'index.html'), 'utf8');
    const nav = id => read(id).match(/<nav class="edition-navigation conference-page-navigation"[\s\S]*?<\/nav>/)?.[0] || '';
    const paper = nav('paper');
    assert.match(paper, /href=\/blog\/posts\/irregular-overview\/>Speech 2026 总览/);
    assert.match(paper, /href=\/blog\/categories\/speech-2026\/>本届论文导读/);
    assert.match(paper, /href=\/blog\/posts\/irregular-task\/>语音专题/);
    assert.match(paper, /href=\/blog\/conferences\/>全部会议/);
    assert.match(read('paper'), /class="rw-action rw-action--primary" href=#article-body>阅读解读正文 ↓/);
    assert.ok(!paper.includes('missing-task'));
    for (const id of ['unknown', 'missing', 'conference-speech-2026-guess']) assert.equal(nav(id), '', id + ' cannot borrow membership');
    assert.ok(!nav('ambiguous-task').includes('2026 总览'));
    assert.match(nav('irregular-task'), /Speech 2026 总览/);
    const shortcut = read('irregular-task').match(/href=([^ >]+)>直达本届论文列表 ↓/);
    assert.ok(shortcut); assert.equal(decodeURIComponent(shortcut[1]), '#论文列表');
    assert.ok(!read('no-list').includes('直达本届论文列表'));
    const daily = read('2026-10-19');
    assert.match(daily, /href=\/blog\/archives\/>日更归档/);
    assert.match(daily, /href=#article-body>连续阅读全文 ↓/);
    assert.match(daily, /浏览论文库/); assert.match(daily, /订阅日报/);
    assert.equal((daily.match(/id=article-body/g) || []).length, 1);
    assert.equal((read('paper').match(/<p>正文只保留一份。<\/p>/g) || []).length, 1);
  } finally { fs.rmSync(temp, { recursive: true, force: true }); }
});
