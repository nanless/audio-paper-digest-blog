'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const { safeSiteUrl } = require('../assets/js/paper-library');

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
