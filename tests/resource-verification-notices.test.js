'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
const {test} = require('node:test');

const root = path.resolve(__dirname, '..');
const notices = JSON.parse(fs.readFileSync(path.join(root, 'data/resource_verification_notices.json'), 'utf8'));
const error = 'The request was rejected because it was considered high risk';
const oldParagraph = `<p>${error}</p>`;
const newParagraph = '<p class="resource-verification-notice">资源检查暂未完成，请通过原文或论文 PDF 核对资源链接。</p>';

function render(relative, source) {
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'resource-notice-test-'));
  try {
    for (const directory of ['data', 'layouts/partials', 'layouts/_default', path.dirname(`content/${relative}`)]) {
      fs.mkdirSync(path.join(temporary, directory), {recursive: true});
    }
    fs.writeFileSync(path.join(temporary, 'hugo.yaml'), 'baseURL: https://example.org/\ndisableKinds: [home, taxonomy, term, RSS, sitemap]\n');
    fs.writeFileSync(path.join(temporary, 'data/resource_verification_notices.json'), JSON.stringify(notices));
    fs.copyFileSync(path.join(root, 'layouts/partials/resource_verification_notice.html'), path.join(temporary, 'layouts/partials/resource_verification_notice.html'));
    fs.writeFileSync(path.join(temporary, 'layouts/_default/single.html'), '<div id="original">{{ .Content }}</div><div id="notice">{{ partial "resource_verification_notice.html" (dict "page" . "content" .Content) | safeHTML }}</div>');
    fs.writeFileSync(path.join(temporary, 'content', relative), source);
    const result = spawnSync('hugo', ['--source', temporary, '--quiet'], {encoding: 'utf8', timeout: 30000});
    assert.equal(result.status, 0, result.stderr || String(result.error));
    const html = fs.readFileSync(path.join(temporary, 'public', relative.replace(/\.md$/, ''), 'index.html'), 'utf8');
    const [, original, displayed] = html.match(/^<div id="original">([\s\S]*)<\/div><div id="notice">([\s\S]*)<\/div>\s*$/);
    return {original, displayed};
  } finally {
    fs.rmSync(temporary, {recursive: true, force: true});
  }
}

for (const relative of Object.keys(notices.pages)) {
  test(`known resource placeholder: ${relative}`, () => {
    const source = fs.readFileSync(path.join(root, 'content', relative), 'utf8');
    const {original, displayed} = render(relative, source);
    assert.equal(displayed, original.replace(oldParagraph, newParagraph));
    assert.ok(displayed.includes(newParagraph));
    assert.ok(!displayed.includes(error));
  });
}

const known = Object.keys(notices.pages)[0];
const source = fs.readFileSync(path.join(root, 'content', known), 'utf8');
for (const [name, relative, changed] of [
  ['unknown page', 'posts/unlisted-resource.md', source],
  ['changed source', known, source + '\nChanged source.\n'],
  ['quoted error', known, source.replace(error, `> ${error}`)],
  ['fenced code', known, source.replace(error, `\`\`\`text\n${error}\n\`\`\``)],
  ['inline code', known, source.replace(error, `\`${error}\``)],
  ['duplicate placeholder', known, source + `\n${error}\n`],
  ['unrelated service error', known, source.replace(error, 'Some other request failed')],
]) {
  test(`preserve ${name}`, () => {
    const {original, displayed} = render(relative, changed);
    assert.equal(displayed, original);
    assert.ok(!displayed.includes(newParagraph));
  });
}
