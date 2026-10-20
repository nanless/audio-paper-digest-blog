'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { execFileSync } = require('node:child_process');
const api = require('../assets/js/daily-edition');
const root = path.resolve(__dirname, '..');
const base = 'https://example.test/blog/posts/2026-10-20/';
class Element {
  constructor(tag = 'div', attrs = {}, children = []) { this.tagName = tag.toUpperCase(); this.attrs = { ...attrs }; this.parts = children; this.dataset = {}; this.events = {}; this.hidden = false; this.open = false; this.value = ''; this.className = attrs.class || ''; }
  get children() { return this.parts.filter(child => child instanceof Element); }
  get textContent() { return this.parts.map(child => typeof child === 'string' ? child : child.textContent).join(''); }
  set textContent(value) { this.parts = [String(value)]; }
  get id() { return this.attrs.id || ''; }
  set id(value) { this.attrs.id = value; }
  get classList() { return { contains: name => this.className.split(/\s+/).includes(name) }; }
  getAttribute(name) { return this.attrs[name] ?? null; }
  setAttribute(name, value) { this.attrs[name] = value; }
  appendChild(child) { this.parts.push(child); return child; }
  replaceChildren(...children) { this.parts = children; }
  querySelectorAll(selector) { const found = []; for (const child of this.children) { if (child.tagName === 'A' && (selector === 'a' || selector === 'a[href]' && child.getAttribute('href') != null)) found.push(child); found.push(...child.querySelectorAll(selector)); } return found; }
  querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
  addEventListener(name, fn) { this.events[name] = fn; }
  focus() { this.focused = true; }
  fire(name, properties = {}) { this.events[name]?.({ preventDefault() {}, ...properties }); }
}
function el(tag, attrs, ...children) { return new Element(tag, attrs, children); }
function fixture(count = 3) {
  const children = [el('p', {}, '共分析 ' + count + ' 篇论文'), el('h2', {}, '⚡ 今日概览'), el('h3', {}, '热门方向'), el('h3', {}, '论文评分排行榜'), el('h2', { id: 'papers' }, '📋 论文列表', el('a', { href: '#papers', class: 'anchor', 'aria-hidden': 'true' }, '#'))];
  for (let i = 0; i < count; i++) children.push(el('h3', { id: '论文-' + i }, '🥇 ', el('a', { href: '/blog/posts/title-' + i + '/' }, 'Paper ' + i + ' C# Audio'), el('a', { href: '#论文-' + i, class: 'anchor' }, '#')), el('p', {}, '评分：', el('strong', {}, (i % 2 ? '9.0' : '7.5') + '/10'), ' | 创新 1/2'), el('p', {}, el('a', { href: '/blog/papers/?concept=task.asr' }, '语音识别'), ' · ', el('a', { href: 'https://arxiv.org/abs/2610.' + String(10000 + i) + 'v1' }, 'arXiv 原文')), el('blockquote', {}, '英文题目： Full English title ' + i), el('p', {}, '完整原文段落，不应修改或隐藏。'));
  children.push(el('h2', { id: 'appendix' }, '其他资源'), el('h3', { id: 'not-member' }, el('a', { href: '/blog/posts/not-a-member/' }, 'Not a member')));
  return el('div', { id: 'article-body' }, ...children);
}
test('edition membership uses the bounded paper-list region, real article links and declared count', () => {
  const body = fixture(245), before = JSON.stringify(body.parts);
  const entries = api.extractEntries(body, base);
  assert.equal(entries.length, 245); assert.equal(entries.at(-1).id, '论文-244'); assert.equal(entries[0].title, 'Paper 0 C# Audio');
  assert.equal(entries[0].score, 7.5); assert.deepEqual(entries[0].tasks, ['语音识别']);
  assert.equal(JSON.stringify(body.parts), before); assert.ok(!('body' in entries[0]));
  const extra = el('h3', {}, 'An old inline subheading'); body.parts.splice(8, 0, extra);
  assert.equal(api.extractEntries(body, base).length, 245);
  body.parts[0].textContent = '共分析 246 篇论文'; assert.deepEqual(api.extractEntries(body, base), []);
});
test('ambiguous or forged members fail closed; anchors and external resources cannot count as papers', () => {
  for (const mutate of [b => { b.parts[5].id = ''; }, b => { b.parts[10].id = b.parts[5].id; }, b => { b.parts[5].children[0].attrs.href = 'https://outside.test/posts/forged/'; }, b => { b.parts[5].children[0].attrs.href = '/blog/posts/2026-10-20/'; }, b => { b.parts[5].appendChild(el('a', { href: '/blog/posts/another/' }, 'Another')); }]) {
    const body = fixture(3); mutate(body); assert.deepEqual(api.extractEntries(body, base), []);
  }
  assert.equal(api.articlePath('javascript:alert(1)', base), '');
  assert.equal(api.articlePath('https://user:pass@example.test/blog/posts/a/', base), '');
});
function numberedLegacy({ sourceOnly = false } = {}) {
  const body = fixture(3), members = body.children.filter(node => node.tagName === 'H3' && node.id.startsWith('论文-'));
  members.forEach((heading, index) => { heading.parts[0] = ['🥇 ', '🥈 ', '🥉 '][index];
    if (sourceOnly) heading.children[0].attrs.href = 'https://arxiv.org/abs/2610.' + (10000 + index) + 'v1';
  });
  body.parts.splice(10, 0, el('h2', { id: 'embedded-method' }, '方法概述和架构'));
  return body;
}
test('legacy numbered cohorts cross scientific H2s only with a complete ordered sequence and primary source metadata', () => {
  const body = numberedLegacy(), before = JSON.stringify(body.parts), entries = api.extractEntries(body, base);
  assert.equal(entries.length, 3); assert.equal(entries[2].id, '论文-2');
  assert.equal(JSON.stringify(body.parts), before);
  for (const mutate of [
    body => { body.children.find(node => node.id === '论文-1').parts[0] = '🥇 '; },
    body => { body.children.find(node => node.id === '论文-1').children[0].attrs.href = 'https://outside.test/posts/forged/'; },
    body => { body.children.find(node => node.id === '论文-1').children[0].attrs.href = '/blog/posts/2026-10-20/'; },
    body => { body.children.find(node => node.id === '论文-1').children[0].attrs.href = '/blog/posts/title-0/'; },
    body => { const metadata = body.children.find(node => node.querySelectorAll('a').some(link => link.getAttribute('href')?.includes('2610.10001'))); metadata.children[1].attrs.href = 'https://arxiv.org/abs/2610.10000'; },
    body => { body.parts.push(el('h3', { id: 'forged-fourth' }, '4. ', el('a', { href: '/blog/posts/extra/' }, 'Extra member'))); },
    body => { const heading = body.children.find(node => node.id === '论文-1'); heading.appendChild(el('a', { href: '/blog/posts/another/' }, 'Ambiguous')); },
  ]) { const invalid = numberedLegacy(); mutate(invalid); assert.deepEqual(api.extractEntries(invalid, base), []); }
});
test('source-only legacy cards preserve their actual arXiv target, reject mismatched identities and never invent article paths', () => {
  const body = numberedLegacy({ sourceOnly: true }); body.parts[0].textContent = '共分析 3 篇语音/AI 论文';
  const entries = api.extractEntries(body, base);
  assert.equal(entries.length, 3); assert.ok(entries.every(entry => entry.kind === 'source' && entry.href.startsWith('https://arxiv.org/abs/')));
  const f = browser({ body }), actions = f.nodes['daily-edition-results'].children[0].querySelectorAll('a');
  assert.equal(actions[2].textContent, '论文原文 ↗'); assert.equal(actions[2].href, 'https://arxiv.org/abs/2610.10000v1');
  assert.equal(actions[2].getAttribute('target'), '_blank'); assert.equal(actions[2].getAttribute('rel'), 'noopener noreferrer');
  for (const href of ['https://arxiv.org/abs/2610.19999', 'https://arxiv.org.evil.test/abs/2610.10000', 'https://user:pass@arxiv.org/abs/2610.10000']) {
    const invalid = numberedLegacy({ sourceOnly: true }); invalid.children.find(node => node.id === '论文-0').children[0].attrs.href = href;
    assert.deepEqual(api.extractEntries(invalid, base), []);
  }
});
test('old H2 paper cards require one unique primary source in their score metadata and the full declared set', () => {
  const body = el('div', { id: 'article-body' }, el('p', {}, '共分析 2 篇论文'), el('h2', {}, '⚡ 今日概览'));
  for (let i = 0; i < 2; i++) body.parts.push(el('h2', { id: 'old-' + i }, '📄 Source paper ' + i), el('p', {}, '#语音识别 #模型'), el('p', {}, '🔥 评分：8.5/10 | ', el('a', { href: 'https://arxiv.org/abs/2604.' + (10000 + i) }, 'arxiv')), el('h3', { id: 'science-' + i }, '模型架构'), el('p', {}, 'Original scientific text.'));
  const before = JSON.stringify(body.parts), entries = api.extractEntries(body, base);
  assert.equal(entries.length, 2); assert.equal(entries[0].title, 'Source paper 0'); assert.deepEqual(entries[0].tasks, ['语音识别', '模型']);
  assert.equal(JSON.stringify(body.parts), before);
  body.parts[9].children[0].attrs.href = 'https://arxiv.org/abs/2604.10000'; assert.deepEqual(api.extractEntries(body, base), []);
  body.parts[9].children[0].attrs.href = 'https://arxiv.org/abs/2604.10001'; body.parts[0].textContent = '共分析 3 篇论文';
  assert.deepEqual(api.extractEntries(body, base), []);
});
test('old score formats are supported without mistaking scientific numbers or missing scores for ratings', () => {
  assert.equal(api.scoreFromNodes([el('p', {}, '🔥 ', el('strong', {}, '9.2分'), ' | #语音识别')]), 9.2);
  assert.equal(api.scoreFromNodes([el('p', {}, '模型获得9.2分改善'), el('p', {}, '评分：11/10')]), null);
  assert.equal(api.scoreFromNodes([el('p', {}, '原文未披露评分')]), null);
});
test('search normalizes fullwidth text, ANDs words and direction, and sorts missing scores last with stable ties', () => {
  const entries = api.extractEntries(fixture(4), base);
  let state = { query: 'ＰＡＰＥＲ Ｃ＃', task: '语音识别', sort: 'original' };
  assert.equal(api.filterEntries(entries, state).length, 4);
  assert.equal(api.filterEntries(entries, { ...state, query: '2610.10003' })[0].order, 3);
  assert.equal(api.filterEntries(entries, { ...state, task: '音乐生成' }).length, 0);
  assert.equal(api.filterEntries(entries, { ...state, query: '<img onerror=1>' }).length, 0);
  entries[1].score = null;
  assert.deepEqual(api.filterEntries(entries, { query: '', task: '', sort: 'score' }).map(e => e.order), [3, 0, 2, 1]);
  assert.deepEqual(entries.map(e => e.order), [0, 1, 2, 3]);
});
test('dedicated URL state preserves unknown query parameters and old anchors, validates malformed values', () => {
  const state = api.stateFromParams(new URLSearchParams('edition_q=Jarvis&edition_task=语音识别&edition_sort=score&edition_show=60'));
  assert.equal(state.shown, 60);
  const next = api.urlForState(base + '?q=keep&from=old#%E5%8E%9F%E9%94%9A%E7%82%B9', state);
  const url = new URL(next, base); assert.equal(url.searchParams.get('q'), 'keep'); assert.equal(url.searchParams.get('from'), 'old'); assert.equal(url.hash, '#%E5%8E%9F%E9%94%9A%E7%82%B9');
  assert.equal(api.stateFromParams(new URLSearchParams('edition_sort=bad&edition_show=Infinity')).shown, 30);
  const cleared = new URL(api.urlForState(url.href, { query: '', task: '', sort: 'original', shown: 30 }), base);
  assert.equal(cleared.search, '?q=keep&from=old'); assert.equal(cleared.hash, url.hash);
});
function browser({ count = 65, suffix = '?other=preserved#old-anchor', kind = 'daily', body = fixture(count), withDirectory = true } = {}) {
  const nodes = { 'article-body': body };
  for (const id of ['tools', 'query', 'task', 'task-field', 'sort', 'clear', 'results', 'status', 'empty', 'more']) nodes['daily-edition-' + id] = new Element(id === 'query' ? 'input' : 'div');
  if (withDirectory) {
    const directory = nodes['daily-edition-directory'] = new Element('details');
    const summary = nodes['daily-edition-summary'] = new Element('summary');
    directory.appendChild(summary);
    for (const id of ['results', 'empty', 'more']) directory.appendChild(nodes['daily-edition-' + id]);
    nodes['daily-edition-tools'].appendChild(directory);
  }
  for (const id of ['query', 'task-field', 'sort', 'status']) nodes['daily-edition-tools'].appendChild(nodes['daily-edition-' + id]);
  nodes['daily-edition-tools'].hidden = true; nodes['daily-edition-tools'].dataset.pageType = kind;
  const document = { getElementById: id => nodes[id] || null, createElement: tag => new Element(tag) };
  const historyEntries = [new URL(base + suffix)], events = {}, timers = new Map(); let index = 0, timerId = 0;
  const window = { get location() { return historyEntries[index]; }, history: { state: { previousFeature: 'intact' }, pushState(state, _, url) { assert.deepEqual(state, this.state); historyEntries.splice(++index); historyEntries.push(new URL(url, base)); }, replaceState(state, _, url) { assert.deepEqual(state, this.state); historyEntries[index] = new URL(url, base); } }, addEventListener(name, fn) { events[name] = fn; }, setTimeout(fn) { timers.set(++timerId, fn); return timerId; }, clearTimeout(id) { timers.delete(id); } };
  const mounted = api.mount(document, window);
  return { nodes, body, mounted, window, events, historyEntries, tick() { for (const [id, fn] of timers) { timers.delete(id); fn(); } }, back() { index--; events.popstate(); }, forward() { index++; events.popstate(); } };
}
test('DOM enhancement keeps all source content intact and exposes every large-edition member through show-more', () => {
  const body = fixture(245), before = JSON.stringify(body.parts), f = browser({ count: 245, body }), n = f.nodes;
  assert.equal(n['daily-edition-tools'].hidden, false); assert.equal(n['daily-edition-results'].children.length, 30);
  for (let i = 0; i < 8; i++) n['daily-edition-more'].fire('click');
  assert.equal(n['daily-edition-results'].children.length, 245); assert.equal(n['daily-edition-more'].hidden, true);
  const last = n['daily-edition-results'].children.at(-1).querySelectorAll('a');
  assert.equal(last[0].href, '#' + encodeURIComponent('论文-244')); assert.equal(last[2].href, '/blog/posts/title-244/');
  assert.equal(JSON.stringify(body.parts), before); assert.equal(f.window.location.hash, '#old-anchor'); assert.equal(f.window.location.searchParams.get('other'), 'preserved');
});
test('directory defaults closed while search controls and true total remain visible, without touching original body', () => {
  const body = fixture(245), before = JSON.stringify(body.parts), f = browser({ count: 245, body }), n = f.nodes;
  assert.equal(n['daily-edition-directory'].open, false);
  assert.equal(n['daily-edition-summary'].textContent, '浏览本期完整目录 · 共245篇');
  for (const id of ['query', 'task-field', 'sort', 'status']) {
    assert.ok(n['daily-edition-tools'].children.includes(n['daily-edition-' + id]));
    assert.ok(!n['daily-edition-directory'].children.includes(n['daily-edition-' + id]));
    assert.equal(n['daily-edition-' + id].hidden, false);
  }
  assert.ok(n['daily-edition-directory'].children.includes(n['daily-edition-results']));
  n['daily-edition-directory'].open = true; f.mounted.render();
  assert.equal(n['daily-edition-directory'].open, true);
  n['daily-edition-directory'].open = false; f.mounted.render();
  assert.equal(n['daily-edition-directory'].open, false);
  assert.equal(JSON.stringify(body.parts), before);
});
test('search, zero matches and active URL restoration open results, while unrelated renders preserve manual closing', () => {
  const f = browser(), n = f.nodes;
  n['daily-edition-query'].value = 'not found'; n['daily-edition-query'].fire('input');
  assert.equal(n['daily-edition-directory'].open, true); assert.equal(n['daily-edition-empty'].hidden, false);
  n['daily-edition-directory'].open = false; f.mounted.render(); assert.equal(n['daily-edition-directory'].open, false);
  n['daily-edition-sort'].value = 'score'; n['daily-edition-sort'].fire('change'); assert.equal(n['daily-edition-directory'].open, true);
  for (const params of ['edition_q=Paper', 'edition_task=语音识别', 'edition_sort=score', 'edition_show=60']) {
    const restored = browser({ suffix: '?' + params + '&other=preserved#old-anchor' });
    assert.equal(restored.nodes['daily-edition-directory'].open, true, params);
    assert.equal(restored.window.location.hash, '#old-anchor');
  }
  assert.equal(browser({ suffix: '?edition_task=invalid&edition_sort=invalid' }).nodes['daily-edition-directory'].open, false);
  assert.ok(browser({ withDirectory: false }).mounted);
});
test('typing, empty-state recovery, sorting and back/forward restore the directory without overwriting other URL state', () => {
  const f = browser(), n = f.nodes, input = n['daily-edition-query'];
  input.value = 'Paper '; input.fire('input'); assert.equal(input.value, 'Paper '); f.tick();
  input.value = 'Paper 12'; input.fire('input'); f.tick(); input.fire('change');
  assert.equal(n['daily-edition-results'].children.length, 1); assert.match(n['daily-edition-status'].textContent, /1 \/ 65/);
  n['daily-edition-sort'].value = 'score'; n['daily-edition-sort'].fire('change');
  f.back(); assert.equal(n['daily-edition-sort'].value, 'original'); assert.equal(input.value, 'Paper 12');
  f.back(); assert.equal(input.value, ''); assert.equal(n['daily-edition-results'].children.length, 30);
  f.forward(); assert.equal(input.value, 'Paper 12');
  input.value = 'no result'; input.fire('input'); f.tick(); assert.equal(n['daily-edition-empty'].hidden, false);
  n['daily-edition-clear'].fire('click'); assert.equal(n['daily-edition-empty'].hidden, true); assert.equal(input.focused, true); assert.equal(n['daily-edition-results'].children.length, 30);
  assert.equal(f.window.location.searchParams.get('other'), 'preserved'); assert.equal(f.window.location.hash, '#old-anchor');
});
test('Chinese composition input waits for committed text before changing the directory or history', () => {
  const f = browser(), input = f.nodes['daily-edition-query'];
  input.value = '语'; input.fire('input', { isComposing: true }); f.tick();
  assert.equal(f.historyEntries.length, 1); assert.equal(input.value, '语');
  input.value = '语音识别'; input.fire('input', { isComposing: false }); f.tick();
  assert.equal(f.window.location.searchParams.get('edition_q'), '语音识别');
  assert.equal(f.nodes['daily-edition-results'].children.length, 30);
});
test('conference and incomplete/ambiguous editions keep their original page with enhancement hidden', () => {
  assert.equal(browser({ kind: 'conference' }).mounted, null);
  const body = fixture(3); body.parts[0].textContent = 'Unknown count'; const f = browser({ body });
  assert.equal(f.mounted, null); assert.equal(f.nodes['daily-edition-tools'].hidden, true);
});

// Real generated editions are rendered by Hugo, then parsed by the standard HTML
// parser. These are production Markdown fixtures, not hand-corrected member lists.
test('real tracked modern, large and all five legacy edition formats yield exactly their original members', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'daily-edition-real-'));
  try {
    fs.mkdirSync(path.join(temp, 'content/posts'), { recursive: true }); fs.mkdirSync(path.join(temp, 'layouts/_default'), { recursive: true });
    fs.writeFileSync(path.join(temp, 'hugo.yaml'), 'baseURL: https://example.test/blog/\ndisableKinds: [taxonomy, term, sitemap, RSS]\nmarkup:\n  goldmark:\n    renderer:\n      unsafe: true\n');
    fs.writeFileSync(path.join(temp, 'layouts/_default/single.html'), '<main id="article-body">{{ .Content }}</main>');
    const samples = [['2026-10-19', 25], ['2026-10-11', 245], ['2026-04-19', 42], ['2026-04-18', 39], ['2026-05-03', 13], ['2026-05-27', 39], ['2026-07-03', 31], ['2026-07-08', 26]];
    for (const [date] of samples) fs.copyFileSync(path.join(root, 'content/posts', date + '.md'), path.join(temp, 'content/posts', date + '.md'));
    execFileSync('hugo', ['--source', temp, '--destination', path.join(temp, 'public')], { stdio: 'pipe' });
    const parser = `import json,sys\nfrom html.parser import HTMLParser\nclass P(HTMLParser):\n def __init__(self): super().__init__();self.root={'tagName':'ROOT','attrs':{},'children':[]};self.stack=[self.root]\n def handle_starttag(self,t,a):\n  n={'tagName':t.upper(),'attrs':dict(a),'children':[]};self.stack[-1]['children'].append(n)\n  if t not in ['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']: self.stack.append(n)\n def handle_endtag(self,t):\n  for i in range(len(self.stack)-1,0,-1):\n   if self.stack[i]['tagName']==t.upper(): self.stack=self.stack[:i];break\n def handle_data(self,s):self.stack[-1]['children'].append(s)\np=P();p.feed(sys.stdin.read());print(json.dumps(p.root))`;
    function inflate(node) { return typeof node === 'string' ? node : new Element(node.tagName, node.attrs, node.children.map(inflate)); }
    for (const [date, count] of samples) {
      const html = fs.readFileSync(path.join(temp, 'public/posts', date, 'index.html'), 'utf8');
      const parsed = inflate(JSON.parse(execFileSync('python3', ['-c', parser], { input: html, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })));
      const article = parsed.children.find(node => node.id === 'article-body');
      const entries = api.extractEntries(article, 'https://nanless.github.io/audio-paper-digest-blog/posts/' + date + '/');
      if (['2026-10-19', '2026-10-11', '2026-04-19'].includes(date)) assert.equal(article.children.filter(node => node.tagName === 'H3').length, count + 2);
      assert.equal(entries.length, count, date); assert.ok(entries.every(entry => Number.isFinite(entry.score)), date + ': ' + JSON.stringify(entries.filter(e => !Number.isFinite(e.score)).slice(0, 4)));
      assert.ok(entries.every(entry => entry.id && entry.href && entry.title));
      if (['2026-04-18', '2026-05-03'].includes(date)) assert.ok(entries.every(entry => entry.kind === 'source' && /^https:\/\/arxiv.org\/abs\//.test(entry.href)), date);
      else assert.ok(entries.every(entry => entry.kind === 'article'), date);
    }
  } finally { fs.rmSync(temp, { recursive: true, force: true }); }
});
