'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { execFileSync } = require('node:child_process');

test('Hugo recommendations exclude all current identity guides, deduplicate candidates and explain controlled or historical matches', t => {
  const source = path.resolve(__dirname, '..');
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'reading-layout-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const content = path.join(root, 'content');
  fs.mkdirSync(path.join(content, 'posts'), { recursive: true });
  const snapshot = JSON.parse(fs.readFileSync(path.join(source, 'data/taxonomy-registry.json')));
  const task = snapshot.concepts.find(n => n.id === 'task.asr');
  const method = snapshot.concepts.find(n => n.facet === 'method');
  const setting = snapshot.concepts.find(n => n.facet === 'setting');
  const records = [task, method, setting].map(n => ({ id: n.id, facet: n.facet, label: n.zh }));
  function paper(name, id, extra = {}, selected = records) {
    const front = { title: name, date: '2026-09-29', tags: ['旧共同标签'], description: 'fixture description',
      paper_digest_arxiv_id: id, paper_digest_page_type: 'paper', paper_digest_one_sentence: '核心问题速览',
      paper_digest_taxonomy_contract: 'paper-taxonomy-flat-tags-compat-v1', paper_digest_taxonomy_concepts: selected, ...extra };
    front.paper_digest_taxonomy_registry_sha256 = snapshot.registrySha256;
    front.paper_digest_taxonomy_registry_version = snapshot.registryVersion;
    fs.writeFileSync(path.join(content, 'posts', name + '.md'), '---\n' + JSON.stringify(front) + '\n---\n# ' + name + '\n## 第一节\nText\n## 第二节\nEvidence.');
  }
  paper('current', '2609.00001');
  paper('same-identity-guide', '2609.00001');
  paper('candidate-old-guide', '2609.00002');
  paper('candidate-new-guide', '2609.00002', { date: '2026-09-30' });
  paper('other-candidate', '2609.00003');
  paper('aggregate', '2609.00004', { paper_digest_page_type: 'conference' });
  paper('legacy-current', '', { paper_digest_taxonomy_contract: '' }, []);
  paper('legacy-other', '', { paper_digest_taxonomy_contract: '' }, []);
  const config = path.join(root, 'config.yaml');
  fs.writeFileSync(config, ['baseURL: https://example.test/blog/', 'theme: PaperMod', 'buildFuture: true',
    'staticDir: []', 'dataDir: ' + JSON.stringify(path.join(source, 'data')), 'params:', '  ShowToc: true',
    '  mainSections: [posts]', '  homeInfoParams:', '    Title: Research', ''].join('\n'));
  const destination = path.join(root, 'public');
  execFileSync('hugo', ['--source', source, '--config', config, '--contentDir', content,
    '--destination', destination, '--noBuildLock', '--panicOnWarning'], { stdio: 'pipe' });
  const current = fs.readFileSync(path.join(destination, 'posts/current/index.html'), 'utf8');
  const related = current.match(/<section class="related-posts[\s\S]*?<\/section>/)?.[0];
  assert.ok(related);
  assert.doesNotMatch(related, /same-identity-guide|candidate-old-guide|aggregate/);
  assert.match(related, /candidate-new-guide/);
  assert.equal((related.match(/research-related__card/g) || []).length, 2);
  assert.match(related, /共同研究任务/);
  assert.match(related, /共同研究方法/);
  assert.match(related, /相同研究条件/);
  assert.ok(current.indexOf('research-tldr-title') < current.indexOf('paper-tools-title'), 'overview precedes the complete tools');
  assert.equal((current.match(/id="research-tldr-title"/g) || []).length, 1);
  assert.match(current, /paper-taxonomy/);
  const legacy = fs.readFileSync(path.join(destination, 'posts/legacy-current/index.html'), 'utf8');
  assert.match(legacy, /共同历史标签（分类待核）/);
  const home = fs.readFileSync(path.join(destination, 'index.html'), 'utf8');
  for (const id of ['task.asr', 'task.speech-synthesis', 'task.audio-generation']) {
    assert.ok(snapshot.concepts.some(n => n.id === id));
    assert.match(home, new RegExp('/blog/papers/\\?concept=' + id.replaceAll('.', '\\.')));
  }
});
