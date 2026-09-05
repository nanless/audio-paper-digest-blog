'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const { safeSiteUrl, normalizeEntry, filterEntries, entryDate } = require('../assets/js/paper-library');

const origin = 'https://nanless.github.io';
const siteBasePath = '/audio-paper-digest-blog/';

test('paper library accepts only same-origin URLs within the exact site base path', () => {
  assert.equal(
    safeSiteUrl('/audio-paper-digest-blog/posts/paper/', origin, siteBasePath),
    'https://nanless.github.io/audio-paper-digest-blog/posts/paper/',
  );
  assert.equal(
    safeSiteUrl('https://nanless.github.io/audio-paper-digest-blog/posts/paper/', origin, siteBasePath),
    'https://nanless.github.io/audio-paper-digest-blog/posts/paper/',
  );
  for (const value of [
    'javascript:alert(1)',
    'data:text/html,x',
    'https://evil.example/audio-paper-digest-blog/posts/x/',
    '//evil.example/audio-paper-digest-blog/posts/x/',
    'https://nanless.github.io.evil.example/audio-paper-digest-blog/posts/x/',
    'https://nanless.github.io/audio-paper-digest-blog-evil/posts/x/',
    'https://user:pass@nanless.github.io/audio-paper-digest-blog/posts/x/',
    '/posts/outside-site/',
    'not a url',
  ]) {
    assert.equal(safeSiteUrl(value, origin, siteBasePath), null, value);
  }
});

test('paper library source contains no innerHTML and builds summaries as plain text', () => {
  const source = fs.readFileSync(
    path.join(__dirname, '..', 'assets', 'js', 'paper-library.js'), 'utf8',
  );
  assert.doesNotMatch(source, /innerHTML/);
  assert.match(source, /String\(value \|\| ''\)\.replace\(\/\\s\+\/g, ' '\)\.trim\(\)/);
  assert.doesNotMatch(source, /createElement\(['"]template['"]\)/);
  assert.match(source, /resultsNode\.replaceChildren\(\)/);
  assert.match(source, /empty\.textContent/);
});

const record = {
  title: 'English paper title', titleZh: '中文标题', originalTitle: 'Original paper title',
  permalink: `${origin}${siteBasePath}posts/legacy-paper/`,
  date: '2026-05-04', pageType: 'paper', score: '8.5', summary: 'No score in this summary.',
  task: '语音识别', tags: ['streaming', '低资源'], categories: ['iclr-2026'], arxivId: '2605.12345'
};

test('structured index fields survive normalization and are searchable independently', () => {
  const entry = normalizeEntry(record, origin, siteBasePath);
  assert.equal(entry.title, '中文标题');
  assert.equal(entry.originalTitle, 'Original paper title');
  assert.equal(entry.date, '2026-05-04');
  assert.equal(entry.score, 8.5);
  for (const query of ['中文标题', 'Original', 'English', '2605.12345', '低资源', 'streaming 语音识别', 'iclr-2026', 'ＳＴＲＥＡＭＩＮＧ']) {
    assert.equal(filterEntries([entry], { query, type: 'paper', year: '2026', sort: 'newest' }).length, 1, query);
  }
});

test('conference type and date use structured fields, while legacy indexes retain fallbacks', () => {
  const conference = normalizeEntry({ ...record, pageType: 'conference' }, origin, siteBasePath);
  assert.equal(conference.type, 'conference');
  assert.equal(conference.date, '2026-05-04');
  assert.equal(conference.score, -1, 'aggregate pages must not inherit the first paper score');
  const legacy = normalizeEntry({ title: 'Legacy', permalink: `${siteBasePath}posts/2026-04-29-paper/`, summary: 'speech | 7.0/10' }, origin, siteBasePath);
  assert.equal(legacy.date, '2026-04-29');
  assert.equal(legacy.score, 7);
  assert.equal(normalizeEntry({ title: 'Conference', permalink: `${siteBasePath}posts/icml2027-task-001/` }, origin, siteBasePath).type, 'conference');
});

test('invalid dates and scores never create misleading metadata or break sorting', () => {
  assert.equal(entryDate('2026-02-31'), '');
  assert.equal(entryDate('2024-02-29'), '2024-02-29');
  for (const score of ['11', '-1', 'NaN', 'Infinity', '8e0']) {
    assert.equal(normalizeEntry({ ...record, score }, origin, siteBasePath).score, -1);
  }
  assert.equal(normalizeEntry({ ...record, score: 0 }, origin, siteBasePath).score, 0);
  const entries = [
    normalizeEntry({ ...record, titleZh: 'Low', score: '1', date: '2026-09-05' }, origin, siteBasePath),
    normalizeEntry({ ...record, titleZh: 'High', score: '9', date: '2026-04-29' }, origin, siteBasePath)
  ];
  assert.equal(filterEntries(entries, { type: 'paper', year: 'all', sort: 'score' })[0].title, 'High');
  assert.equal(filterEntries(entries, { type: 'paper', year: 'all', sort: 'newest' })[0].title, 'Low');
});

test('missing URLs and ambiguous site boundaries are rejected', () => {
  for (const value of [undefined, null, '', '   ']) assert.equal(safeSiteUrl(value, origin, siteBasePath), null);
  assert.equal(safeSiteUrl(`${siteBasePath}posts/p/`, origin, '/audio-paper-digest-blog'), null);
});
