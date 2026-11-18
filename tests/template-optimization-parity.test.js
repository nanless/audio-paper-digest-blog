'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync, spawnSync } = require('node:child_process');

const repo = path.resolve(__dirname, '..');
const v2Proof = require('../scripts/lib/tag-v2-proof');
const fullsiteCases = require('./fixtures/fullsite-tag-public');
const fullsiteApi = require('../scripts/lib/fullsite-tag-proof');

function makeHugoFixture(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'template-opt-parity-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  fs.mkdirSync(path.join(dir, 'data'), { recursive: true });
  fs.mkdirSync(path.join(dir, 'layouts'), { recursive: true });
  fs.cpSync(path.join(repo, 'layouts/partials'), path.join(dir, 'layouts/partials'), { recursive: true });
  fs.copyFileSync(path.join(repo, 'data/paperdigest-protocols.json'), path.join(dir, 'data/paperdigest-protocols.json'));
  fs.writeFileSync(
    path.join(dir, 'hugo.yaml'),
    'baseURL: https://example.test/\ndisableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\n'
  );
  return dir;
}

function renderIndexJson(dir, template) {
  fs.writeFileSync(path.join(dir, 'layouts/index.html'), template);
  execFileSync('hugo', ['--source', dir, '--noBuildLock', '--panicOnWarning'], {
    stdio: 'pipe',
    env: { ...process.env, GOMAXPROCS: '4', HUGO_NUMWORKERMULTIPLIER: '2' },
  });
  return JSON.parse(fs.readFileSync(path.join(dir, 'public/index.html'), 'utf8'));
}

test('research_canonical_json fast-path and sentinel path match canonical JS serialization and SHA-256', (t) => {
  const dir = makeHugoFixture(t);
  const cases = [
    { name: 'ordinary ascii object', value: { z: 1, a: 'hello', nested: { b: true, a: false, c: null } } },
    { name: 'cjk and html chars without separators', value: { title: '端到端语音识别 <ASR> & "LLM" \\ path\\to\\file', score: 9.5 } },
    { name: 'real U+2028', value: { quote: 'line1\u2028line2' } },
    { name: 'real U+2029', value: { quote: 'para1\u2029para2' } },
    { name: 'literal backslash-u2028 (even slash parity)', value: { quote: 'literal \\u2028 text' } },
    { name: 'literal backslash-u2029 (even slash parity)', value: { quote: 'literal \\u2029 text' } },
    { name: 'escaped backslash before real U+2028 (odd slash parity)', value: { quote: 'slash\\\u2028real' } },
    { name: 'escaped backslash before literal u2028', value: { quote: 'slash\\\\u2028literal' } },
    { name: 'triple backslash before real U+2029', value: { quote: 'triple\\\\\\\u2029real' } },
    { name: 'nul char mixed with real and literal separators', value: { quote: 'nul\u0000lit\\u0000sep\u2028lit\\u2029end' } },
  ];
  fs.writeFileSync(path.join(dir, 'data/cases.json'), JSON.stringify(cases));
  const actual = renderIndexJson(
    dir,
    '[{{ range $i, $c := hugo.Data.cases }}{{ if $i }},{{ end }}{{ $j := partial "research_canonical_json.html" $c.value }}{{ dict "name" $c.name "json" $j "sha256" (crypto.SHA256 $j) | jsonify (dict "noHTMLEscape" true) | safeHTML }}{{ end }}]'
  );
  assert.equal(actual.length, cases.length);
  for (let i = 0; i < cases.length; i += 1) {
    assert.equal(actual[i].json, JSON.stringify(v2Proof.canonical(cases[i].value)), cases[i].name);
    assert.equal(actual[i].sha256, v2Proof.stableHash(cases[i].value), cases[i].name);
  }
  assert.notEqual(actual[2].sha256, actual[4].sha256, 'real U+2028 must differ from literal \\u2028');
  assert.notEqual(actual[3].sha256, actual[5].sha256, 'real U+2029 must differ from literal \\u2029');
});

test('research_exact_keys handles missing, extra, wrong length, duplicate keys, pipe delimiters and non-maps', (t) => {
  const dir = makeHugoFixture(t);
  const template = `[
    {{ dict "name" "exact match unordered" "actual" (partial "research_exact_keys.html" (dict "value" (dict "a" 1 "b" 2 "c" 3) "keys" (slice "c" "a" "b"))) "expected" true | jsonify | safeHTML }},
    {{ dict "name" "exact empty map and empty slice" "actual" (partial "research_exact_keys.html" (dict "value" dict "keys" slice)) "expected" true | jsonify | safeHTML }},
    {{ dict "name" "unmarshaled json key slice" "actual" (partial "research_exact_keys.html" (dict "value" (dict "x" true "y" nil) "keys" (transform.Unmarshal "{\\"k\\":[\\"y\\",\\"x\\"]}").k)) "expected" true | jsonify | safeHTML }},
    {{ dict "name" "missing key" "actual" (partial "research_exact_keys.html" (dict "value" (dict "a" 1) "keys" (slice "a" "b"))) "expected" false | jsonify | safeHTML }},
    {{ dict "name" "extra key" "actual" (partial "research_exact_keys.html" (dict "value" (dict "a" 1 "b" 2) "keys" (slice "a"))) "expected" false | jsonify | safeHTML }},
    {{ dict "name" "same length wrong key" "actual" (partial "research_exact_keys.html" (dict "value" (dict "a" 1 "d" 2) "keys" (slice "a" "b"))) "expected" false | jsonify | safeHTML }},
    {{ dict "name" "duplicate keys in .keys with 1-key map" "actual" (partial "research_exact_keys.html" (dict "value" (dict "a" 1) "keys" (slice "a" "a"))) "expected" false | jsonify | safeHTML }},
    {{ dict "name" "duplicate keys in .keys with 2-key map (same len)" "actual" (partial "research_exact_keys.html" (dict "value" (dict "a" 1 "b" 2) "keys" (slice "a" "a"))) "expected" false | jsonify | safeHTML }},
    {{ dict "name" "duplicate keys in .keys with 3-key map (same len)" "actual" (partial "research_exact_keys.html" (dict "value" (dict "a" 1 "b" 2 "c" 3) "keys" (slice "a" "b" "b"))) "expected" false | jsonify | safeHTML }},
    {{ dict "name" "pipe character exact match" "actual" (partial "research_exact_keys.html" (dict "value" (dict "a|b" 1 "c" 2) "keys" (slice "c" "a|b"))) "expected" true | jsonify | safeHTML }},
    {{ dict "name" "pipe character collision attack 1 vs 2 keys" "actual" (partial "research_exact_keys.html" (dict "value" (dict "a|b" 1) "keys" (slice "a" "b"))) "expected" false | jsonify | safeHTML }},
    {{ dict "name" "pipe character shifted delimiter attack 2 vs 2 keys" "actual" (partial "research_exact_keys.html" (dict "value" (dict "a|b" 1 "c" 2) "keys" (slice "a" "b|c"))) "expected" false | jsonify | safeHTML }},
    {{ dict "name" "non-map nil value" "actual" (partial "research_exact_keys.html" (dict "value" nil "keys" slice)) "expected" false | jsonify | safeHTML }},
    {{ dict "name" "non-map slice value" "actual" (partial "research_exact_keys.html" (dict "value" (slice "a" "b") "keys" (slice "a" "b"))) "expected" false | jsonify | safeHTML }},
    {{ dict "name" "non-map string value" "actual" (partial "research_exact_keys.html" (dict "value" "ab" "keys" (slice "a" "b"))) "expected" false | jsonify | safeHTML }},
    {{ dict "name" "non-slice keys" "actual" (partial "research_exact_keys.html" (dict "value" (dict "a" 1) "keys" "a")) "expected" false | jsonify | safeHTML }}
  ]`;
  const rows = renderIndexJson(dir, template);
  for (const row of rows) {
    assert.equal(row.actual, row.expected, row.name);
  }
});

test('protocol_header_valid preserves string, numeric version, fingerprint and extra header rejections', (t) => {
  const dir = makeHugoFixture(t);
  const protocols = JSON.parse(fs.readFileSync(path.join(repo, 'data/paperdigest-protocols.json'), 'utf8'));
  const currentFlat = protocols.families['paper-tag-flat-tags'].headers['paper-tag-flat-tags'];
  const currentContext = protocols.families['paper-research-context'].headers['paper-research-context'];
  const template = `[
    {{ dict "name" "current fingerprinted flat tags" "actual" (partial "tag_flat_contract.html" (dict "contract" "${currentFlat.contract}" "schemaFingerprint" "${currentFlat.schemaFingerprint}")) "expected" true | jsonify | safeHTML }},
    {{ dict "name" "legacy compat flat tags" "actual" (partial "tag_flat_contract.html" (dict "contract" "paper-taxonomy-flat-tags-compat-v1")) "expected" true | jsonify | safeHTML }},
    {{ dict "name" "empty contract" "actual" (partial "tag_flat_contract.html" (dict "contract" "")) "expected" false | jsonify | safeHTML }},
    {{ dict "name" "nil contract" "actual" (partial "tag_flat_contract.html" dict) "expected" false | jsonify | safeHTML }},
    {{ dict "name" "wrong schemaFingerprint" "actual" (partial "tag_flat_contract.html" (dict "contract" "${currentFlat.contract}" "schemaFingerprint" "${'0'.repeat(64)}")) "expected" false | jsonify | safeHTML }},
    {{ dict "name" "unexpected version field on flat tags" "actual" (partial "tag_flat_contract.html" (dict "contract" "paper-taxonomy-flat-tags-compat-v1" "version" 1)) "expected" false | jsonify | safeHTML }},
    {{ dict "name" "historical numeric schemaVersion 2 context" "actual" (partial "protocol_header_valid.html" (dict "name" "paper-research-context" "record" (dict "contract" "paper-research-context-v2" "schemaVersion" 2))) "expected" true | jsonify | safeHTML }},
    {{ dict "name" "wrong numeric schemaVersion string" "actual" (partial "protocol_header_valid.html" (dict "name" "paper-research-context" "record" (dict "contract" "paper-research-context-v2" "schemaVersion" "2"))) "expected" false | jsonify | safeHTML }},
    {{ dict "name" "current context header" "actual" (partial "protocol_header_valid.html" (dict "name" "paper-research-context" "record" (dict "contract" "${currentContext.contract}" "schemaFingerprint" "${currentContext.schemaFingerprint}"))) "expected" true | jsonify | safeHTML }}
  ]`;
  const rows = renderIndexJson(dir, template);
  for (const row of rows) {
    assert.equal(row.actual, row.expected, row.name);
  }
});

test('partialCached fullsite proof singleflight still fails closed on shard, selection and per-page byte tampering', (t) => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'fullsite-singleflight-tamper-'));
  t.after(() => fs.rmSync(tmp, { recursive: true, force: true }));
  const f = fullsiteCases.packed();
  for (const sub of ['data', 'layouts/_default', 'static/fullsite-taxonomy', 'content/posts']) {
    fs.mkdirSync(path.join(tmp, sub), { recursive: true });
  }
  fs.cpSync(path.join(repo, 'layouts/partials'), path.join(tmp, 'layouts/partials'), { recursive: true });
  for (const name of ['taxonomy-catalog', 'taxonomy-registry', 'paperdigest-protocols']) {
    fs.copyFileSync(path.join(repo, 'data', `${name}.json`), path.join(tmp, 'data', `${name}.json`));
  }
  fs.writeFileSync(path.join(tmp, 'layouts/partials/tag_fullsite_profiles.html'), '{{ return (slice hugo.Data.testIssuer) }}');
  fs.writeFileSync(path.join(tmp, 'data/testIssuer.json'), JSON.stringify(f.profile));
  fs.writeFileSync(path.join(tmp, 'data/fullsite-taxonomy-history.json'), JSON.stringify(f.manifest));
  fs.writeFileSync(path.join(tmp, 'data/fullsite-taxonomy-admission.json'), f.admissionBytes);
  fs.writeFileSync(path.join(tmp, 'data/fullsite-taxonomy-sources.json'), f.sourceBytes);
  const shardFile = path.join(tmp, 'static', f.manifest.shards[0].path);
  fs.writeFileSync(shardFile, f.bytes);
  const pagePaths = Object.keys(f.history.records);
  for (const p of pagePaths) fs.writeFileSync(path.join(tmp, p), f.text);
  fs.writeFileSync(
    path.join(tmp, 'hugo.yaml'),
    'baseURL: https://example.test/blog/\ndisableKinds: [section,taxonomy,term,RSS,sitemap,robotsTXT,"404"]\n'
  );
  fs.writeFileSync(path.join(tmp, 'layouts/index.html'), '');
  fs.writeFileSync(
    path.join(tmp, 'layouts/_default/single.html'),
    '{{ partial "tag_page_proof.html" . | jsonify | safeHTML }}'
  );

  const runHugo = () =>
    spawnSync('hugo', ['--source', tmp, '--noBuildLock', '--panicOnWarning'], {
      encoding: 'utf8',
      env: { ...process.env, GOMAXPROCS: '4', HUGO_NUMWORKERMULTIPLIER: '2' },
    });

  // 1. Clean baseline passes for both pages under concurrent workers.
  let res = runHugo();
  assert.equal(res.status, 0, res.stderr);
  for (const p of pagePaths) {
    const out = JSON.parse(fs.readFileSync(path.join(tmp, 'public/posts', path.basename(p, '.md'), 'index.html'), 'utf8'));
    assert.equal(out.evidenceContract, fullsiteApi.PUBLIC_CONTRACT);
  }

  // 2. Per-page Markdown drift fails closed on the drifted page while sibling page remains valid.
  fs.writeFileSync(path.join(tmp, pagePaths[0]), `${f.text}\n<!-- tampered -->`);
  res = runHugo();
  assert.equal(res.status, 0, res.stderr);
  const driftedOut = JSON.parse(fs.readFileSync(path.join(tmp, 'public/posts', path.basename(pagePaths[0], '.md'), 'index.html'), 'utf8'));
  const cleanOut = JSON.parse(fs.readFileSync(path.join(tmp, 'public/posts', path.basename(pagePaths[1], '.md'), 'index.html'), 'utf8'));
  assert.equal(driftedOut.evidenceContract, undefined);
  assert.equal(cleanOut.evidenceContract, fullsiteApi.PUBLIC_CONTRACT);
  fs.writeFileSync(path.join(tmp, pagePaths[0]), f.text);

  // 3. Physical shard byte tampering fails closed across ALL pages in a fresh Hugo invocation.
  fs.writeFileSync(shardFile, Buffer.concat([f.bytes, Buffer.from(' ')]));
  res = runHugo();
  assert.equal(res.status, 0, res.stderr);
  for (const p of pagePaths) {
    const out = JSON.parse(fs.readFileSync(path.join(tmp, 'public/posts', path.basename(p, '.md'), 'index.html'), 'utf8'));
    assert.equal(out.evidenceContract, undefined);
  }
  fs.writeFileSync(shardFile, f.bytes);

  // 4. Unexpected / tampered publication selection file triggers errorf build failure.
  fs.writeFileSync(path.join(tmp, 'data/fullsite-taxonomy-publication-selection.json'), '{"tampered":true}\n');
  res = runHugo();
  assert.notEqual(res.status, 0);
  assert.match(res.stdout + res.stderr, /publication selection/);
});
