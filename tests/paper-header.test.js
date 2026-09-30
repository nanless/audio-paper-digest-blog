'use strict';
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const { tmpdir } = require('node:os');
const path = require('node:path');
const test = require('node:test');
const repo = path.resolve(__dirname, '..');

test('paper header removes only exact visible duplicates and preserves informative subtitles and summaries', () => {
  const cases = [
    { id: 'costa', headline: "CoSTA: TTS for Alzheimer's Dementia Detection", original: 'CoSTA: TTS for Alzheimer’s Dementia Detection', description: "CoSTA: TTS for Alzheimer's Dementia Detection", subtitle: false, intro: false },
    { id: 'typography', headline: '“Speech”   Study', original: '"speech"\u00a0study', description: 'Different evidence and limitations.', subtitle: false, intro: true },
    { id: 'chinese', headline: '认知状态条件语音合成', original: 'Cognitive State Conditioned Speech Synthesis', description: '通过状态条件控制生成语音。', subtitle: true, intro: true },
    { id: 'repeated-original', headline: '认知状态条件语音合成', original: 'Cognitive State Conditioned Speech Synthesis', description: 'cognitive state conditioned speech synthesis', subtitle: true, intro: false },
    { id: 'punctuation', headline: 'Speech - Study', original: 'Speech — Study', description: 'A different evaluation protocol.', subtitle: true, intro: true },
    { id: 'different', headline: 'Speech Study', original: 'Speech Study', description: 'Speech Study with population-level evidence.', subtitle: false, intro: true },
    { id: 'empty', headline: 'Speech Study', original: '   ', description: 'An informative description.', subtitle: false, intro: true },
    { id: 'markdown', headline: '**Speech** & Evidence', original: 'speech & evidence', oneSentence: '**SPEECH** & Evidence', subtitle: false, intro: false },
    { id: 'summary', headline: 'Speech Study', original: 'Speech Study', oneSentence: 'A distinct one-sentence research summary.', description: 'Speech Study', subtitle: false, intro: true },
  ];
  const temp = fs.mkdtempSync(path.join(tmpdir(), 'paper-header-'));
  try {
    fs.mkdirSync(path.join(temp, 'content/posts'), { recursive: true });
    fs.writeFileSync(path.join(temp, 'hugo.yaml'), 'baseURL: "https://example.test/audio-paper-digest-blog/"\nlanguageCode: "zh-CN"\ndefaultContentLanguage: "zh-cn"\ntheme: PaperMod\nbuildFuture: true\ndisableKinds: [home, section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\nstaticDir: []\nparams:\n  env: production\n  ShowToc: true\n  ShowShareButtons: false\n  comments: false\n');
    for (const item of cases) {
      const metadata = { title: item.headline, date: '2026-09-05', paper_digest_page_type: 'paper', paper_digest_reader_title: item.headline, paper_digest_original_title: item.original, description: item.description || '', paper_digest_one_sentence: item.oneSentence || '' };
      fs.writeFileSync(path.join(temp, 'content/posts', item.id + '.md'), '---\n' + Object.entries(metadata).map(([key,value]) => key + ': ' + JSON.stringify(value)).join('\n') + '\n---\n\n## 方法\n\n有区别的正文必须保留。\n');
    }
    execFileSync('hugo', ['--source', repo, '--config', path.join(temp, 'hugo.yaml'), '--contentDir', path.join(temp, 'content'), '--destination', path.join(temp, 'public'), '--minify'], { stdio: 'pipe' });
    for (const item of cases) {
      const html = fs.readFileSync(path.join(temp, 'public/posts', item.id, 'index.html'), 'utf8');
      const header = html.match(/<header class=research-paper-header>[\s\S]*?<\/header>/)?.[0];
      assert.ok(header, item.id + ' research header');
      assert.equal(header.includes('research-paper-header__original'), item.subtitle, item.id + ' subtitle visibility');
      assert.equal(header.includes('research-tldr-title'), item.intro, item.id + ' summary visibility');
      assert.ok(html.includes('有区别的正文必须保留。'), item.id + ' body retained');
      for (const id of ['reading-chapters-trigger', 'reading-chapters-panel', 'article-body']) assert.ok(html.includes('id=' + id), item.id + ' reading control ' + id);
    }
  } finally { fs.rmSync(temp, { recursive: true, force: true }); }
});
