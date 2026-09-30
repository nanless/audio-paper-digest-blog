'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const api = require('../assets/js/citation-source.js');
const verified = { verified: true, identityStatus: 'verified', paperKey: 'arxiv:2609.01234', title: 'Research {A} & B',
  sourceKind: 'arxiv', arxivId: '2609.01234v2', authors: ['Researcher A', 'Researcher B'], date: '2026-09-05',
  doi: '10.1234/example', pageUrl: 'https://example.test/posts/a/' };

test('version and acquisition disclosures survive citations, research packs, AI prompts and batch exports', () => {
  const disclosed = { ...verified, sourceVersionWarning: '未认证 camera-ready；来源为作者早期 {版本}',
    provenanceDisclosure: '历史本地封存；未记录下载时网络响应' };
  assert.match(api.formatCitation(disclosed, 'bib'), /note = \{.*未认证 camera-ready/);
  assert.match(api.formatCitation(disclosed, 'ris'), /N1  - 未认证 camera-ready/);
  assert.match(api.buildResearchPack(disclosed, {content:'Visible guide'}), /来源版本限制：未认证 camera-ready/);
  assert.match(api.buildPrompt(disclosed, {selection:'有待核对的结论'}), /来源记录说明：历史本地封存/);
  const exporter = require('../assets/js/reading-export');
  const entry = {title:'Paper', permalink:verified.pageUrl, citation:disclosed};
  for (const format of ['md','csv','bib','ris']) {
    const output = exporter.build([entry], format).text;
    assert.match(output, /未认证 camera-ready/); assert.match(output, /未记录下载时网络响应/);
  }
  const unknown = api.normalize({...disclosed, identityStatus:'unknown'});
  assert.equal(unknown.sourceVersionWarning, ''); assert.equal(unknown.provenanceDisclosure, '');
});

test('unversioned PDF URLs remain exact only under an explicit same-paper version disclosure binding', () => {
  const pdfUrl = 'https://arxiv.org/pdf/2609.01234.pdf';
  const binding = {contract:'sealed-arxiv-pdf-version-binding-v1', status:'versioned-text-unversioned-pdf-url',
    paperId:'arxiv:2609.01234', sourceId:'2609.01234v2', pdfRequestedUrl:pdfUrl,
    pdfVersion:'unspecified', pdfVersionAuthenticated:false};
  const raw = {...verified, pdfUrl, pdfVersionBinding:binding, sourceVersionWarning:'未确认 PDF 对应 v2'};
  const record = api.normalize(raw);
  assert.equal(record.pdfUrl, pdfUrl);
  assert.equal(api.normalize(record).pdfUrl, pdfUrl, 'double normalization preserves the source binding');
  assert.match(api.buildResearchPack(raw), /原文 PDF：https:\/\/arxiv.org\/pdf\/2609\.01234\.pdf/);
  assert.equal(api.normalize({...raw, pdfVersionBinding:{...binding, paperId:'arxiv:9999.12345'}}).pdfUrl, 'https://arxiv.org/pdf/2609.01234v2.pdf');
  assert.equal(api.normalize({...raw, pdfUrl:'https://evil.test/fake.pdf'}).pdfUrl, 'https://arxiv.org/pdf/2609.01234v2.pdf');
  assert.equal(api.normalize({...raw, sourceVersionWarning:''}).pdfVersionBinding, null);
  assert.equal(api.normalize({...verified, pdfUrl:'https://arxiv.org/pdf/2609.01234v2'}).pdfUrl, 'https://arxiv.org/pdf/2609.01234v2');
});

test('verified citation includes only available fields, safely escapes syntax and retains exact source version', () => {
  const bib = api.formatCitation(verified, 'bib');
  const ris = api.formatCitation(verified, 'ris');
  assert.match(bib, /Research \\\{A\\\} \\& B/);
  assert.match(bib, /author = \{Researcher A and Researcher B\}/);
  assert.match(bib, /date = \{2026-09-05\}/);
  assert.match(bib, /eprint = \{2609\.01234v2\}/);
  assert.match(ris, /AU  - Researcher A\nAU  - Researcher B/);
  assert.match(ris, /DO  - 10\.1234\/example/);
  const incomplete = api.formatCitation({ ...verified, authors: [], date: '', doi: '' }, 'bib');
  assert.doesNotMatch(incomplete, /\n\s*(author|year|date|doi)\s*=/);
  assert.equal(api.validDate('2026-02-30'), '');
});

test('conference uses its canonical record and never borrows a cited arXiv ID', () => {
  const conference = { ...verified, sourceKind: 'conference', paperKey: 'conference:isca:2026:paper:x',
    arxivId: '2609.99999', sourceUrl: 'https://official.test/paper.html', pdfUrl: 'https://official.test/paper.pdf', venue: 'Official proceedings' };
  const normalized = api.normalize(conference);
  assert.equal(normalized.arxivId, '');
  assert.equal(normalized.url, conference.sourceUrl);
  assert.match(api.formatCitation(conference, 'bib'), /^@inproceedings/);
  assert.doesNotMatch(api.formatCitation(conference, 'ris'), /arxiv\.org|2609\.99999/);
  assert.throws(() => api.formatCitation({ ...conference, identityStatus: 'unknown', verified: false }, 'bib'), /可验证/);
  assert.throws(() => api.formatCitation({ ...conference, sourceUrl: 'https://u:p@official.test/a' }, 'ris'), /可验证/);
});

test('all AI tasks identify source, exact version and observed section/table locators without inventing evidence', () => {
  for (const task of ['mechanism', 'verify', 'limitations']) {
    const prompt = api.buildPrompt(verified, { task, selection: 'Table 2 和图 3 报告实验结果。',
      context: { heading: '实验条件', anchor: 'https://example.test/posts/a/#conditions' } });
    assert.match(prompt, /2609\.01234v2/);
    assert.match(prompt, /#conditions/);
    assert.match(prompt, /Table 2、图 3/);
    assert.match(prompt, /未核验为原论文逐字引用/);
    assert.match(prompt, /未核验对应原图表/);
  }
  const manual = api.buildPrompt({ title: 'Unknown', pageUrl: verified.pageUrl }, { selection: '手动粘贴', source: 'original' });
  assert.match(manual, /用户声明来自原文，本站未核验/);
  assert.doesNotMatch(manual, /arxiv\.org|博客章节|图表编号/);
  assert.throws(() => api.buildPrompt(verified, { selection: 'x'.repeat(2001) }), /2000/);
  assert.throws(() => api.buildPrompt(verified, { selection: 'a\u0000b' }), /控制字符/);
});

test('research pack preserves existing guide and personal selection while separating original evidence and missing fields', () => {
  const pack = api.buildResearchPack(verified, { content: '导读中的机制解释', selection: '个人选段',
    links: [{ label: '项目', url: 'https://official.test/project' }, { label: 'unsafe', url: 'javascript:bad' }] });
  assert.match(pack, /导读中的机制解释/);
  assert.match(pack, /个人选段来源未由本站核验/);
  assert.match(pack, /不代表原论文逐字引用/);
  assert.match(pack, /https:\/\/official.test\/project/);
  assert.doesNotMatch(pack, /javascript:bad/);
  const unknown = api.buildResearchPack({ title: 'Unknown', authors: ['do not inherit'], date: '2026-01-01' }, {});
  assert.match(unknown, /作者：未提供/);
  assert.match(unknown, /出版日期：未提供/);
  assert.doesNotMatch(unknown, /```bibtex/);
});
