'use strict';
const test = require('node:test'), assert = require('node:assert/strict');
const fs = require('node:fs'), path = require('node:path');
const workflow = fs.readFileSync(path.join(__dirname, '../.github/workflows/hugo.yaml'), 'utf8');
const headers = [...workflow.matchAll(/^  ([a-z][a-z0-9-]*):\s*$/gm)];
const jobs = Object.fromEntries(headers.map((match, index) => [match[1],
  workflow.slice(match.index, headers[index + 1]?.index ?? workflow.length)]));

test('Pages unit and full build run independently against the same default checkout and runtimes', () => {
  assert.match(jobs.unit, /run: npm test\s*$/m);
  assert.match(jobs.build, /run: npm run build:verify\s*$/m);
  for (const job of [jobs.unit, jobs.build]) {
    assert.match(job, /runs-on: ubuntu-22\.04/);
    assert.match(job, /uses: actions\/checkout@v4[\s\S]*submodules: recursive/);
    assert.match(job, /hugo-version: '0\.160\.1'/);
    assert.match(job, /node-version: '22'/);
    assert.doesNotMatch(job, /^    needs:|continue-on-error|^\s+ref:/m,
      'neither gate may depend on the other or checkout a different revision');
  }
  assert.doesNotMatch(jobs.unit, /build:verify/);
  assert.doesNotMatch(jobs.build, /run: npm test/);
});

test('deployment waits for both successful gates and never deploys pull requests or bypasses failures', () => {
  assert.match(jobs.deploy, /^    needs: \[unit, build\]\s*$/m);
  assert.match(jobs.deploy, /^    if: github\.event_name != 'pull_request' && needs\.unit\.result == 'success' && needs\.build\.result == 'success'\s*$/m);
  assert.doesNotMatch(jobs.deploy, /always\(|continue-on-error/);
  assert.match(jobs.build, /if: github\.event_name != 'pull_request'[\s\S]*uses: actions\/upload-pages-artifact@v3/);
  assert.match(jobs.deploy, /uses: actions\/deploy-pages@v4/);
  assert.match(workflow, /concurrency:\s*\n  group: "pages"\s*\n  cancel-in-progress: false/);
});

test('only the Pages build uses its measured runner allowance and reports actual resources', () => {
  assert.match(jobs.build, /^    env:\s*\n      GOMEMLIMIT: '6GiB'\s*\n      GOMAXPROCS: '4'\s*\n    steps:/m);
  assert.doesNotMatch(jobs.unit + jobs.deploy, /GOMEMLIMIT|GOMAXPROCS|HUGO_NUMWORKERMULTIPLIER/);
  assert.doesNotMatch(workflow.slice(0, workflow.indexOf('jobs:')), /^env:/m,
    'resource changes must not leak into the independent unit gate');
  assert.match(jobs.build, /name: Report build resources[\s\S]*uname -m[\s\S]*getconf _NPROCESSORS_ONLN[\s\S]*free -h/);
  for (const value of ['"$GOMEMLIMIT"', '"$GOMAXPROCS"', '"${HUGO_NUMWORKERMULTIPLIER:-1}"']) {
    assert.ok(jobs.build.includes(value), 'log the effective environment, not a hardcoded claim');
  }
  const builder = fs.readFileSync(path.join(__dirname, '../scripts/build-site.js'), 'utf8');
  assert.ok(builder.includes("GOMEMLIMIT: process.env.GOMEMLIMIT || '3GiB'"));
  assert.ok(builder.includes("GOMAXPROCS: process.env.GOMAXPROCS || '2'"));
  assert.ok(builder.includes("HUGO_NUMWORKERMULTIPLIER: process.env.HUGO_NUMWORKERMULTIPLIER || '1'"));
});
