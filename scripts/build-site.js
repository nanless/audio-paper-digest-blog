'use strict';
const { spawnSync } = require('node:child_process');
const { shardIndex } = require('./shard-search-index');
// This check runs before Hugo or any output mutation. An invalid v2 supplement
// must fail the real build entry, not merely a separately invoked audit.
require('./verify-taxonomy-v2').verify(process.cwd());
require('./verify-taxonomy-v3').verify(process.cwd());
const result = spawnSync('hugo', ['--minify', '--noBuildLock', '--cleanDestinationDir', '--printPathWarnings', '--panicOnWarning'], {
  stdio: 'inherit',
  env: { ...process.env, GOMEMLIMIT: process.env.GOMEMLIMIT || '3GiB',
    GOMAXPROCS: process.env.GOMAXPROCS || '2', HUGO_NUMWORKERMULTIPLIER: process.env.HUGO_NUMWORKERMULTIPLIER || '1' }
});
if (result.error || result.signal || result.status !== 0) {
  if (result.error) process.stderr.write(result.error.message + '\n');
  process.exitCode = result.status || 1;
} else {
  const manifest = shardIndex('public');
  process.stdout.write(JSON.stringify({ recordCount: manifest.recordCount, totalBytes: manifest.totalBytes, shardCount: manifest.shards.length }) + '\n');
}
