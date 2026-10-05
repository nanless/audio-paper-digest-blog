'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const core = require('../assets/js/tag-core');
const library = require('../assets/js/paper-library');

test('coverage separates original direction mappings from jointly verified type and scope', () => {
  const c = (status, researchType, domainScope) => ({status, researchType, domainScope});
  const groups = [
    {conceptIds:['task.asr'], classifications:[c('verified','','')]},
    {conceptIds:['task.asr'], classifications:[c('verified','engineering','in-domain'), c('verified','engineering','in-domain')]},
    {conceptIds:[], classifications:[c('unknown-version','science','in-domain')]},
    {conceptIds:['task.asr'], classifications:[c('verified','science',''),c('verified','','cross-domain')]},
    {conceptIds:['task.asr'], classifications:[c('verified','unknown','in-domain')]}
  ];
  assert.deepEqual(library.coverageCounts(groups,core),{total:5,directions:4,typed:1});
  assert.deepEqual(library.coverageCounts(groups,null),{total:5,directions:4,typed:0});
  assert.deepEqual(library.coverageCounts([],core),{total:0,directions:0,typed:0});
});

test('identity grouping counts multiple guides once and keeps unverified identities separate', () => {
  const graph = core.createRegistry({contract:'paper-taxonomy-registry-snapshot-v1',concepts:[{id:'task.asr',facet:'task',zh:'语音识别',en:'ASR',aliases:[],ancestorIds:[]}]});
  const row=(url,status)=>({pageType:'paper',permalink:url,identityStatus:status,arxivId:'2604.12647',taxonomyContract:core.contract,taxonomyConcepts:[{id:'task.asr',facet:'task',label:'语音识别'}]});
  const groups=core.groupPapers([row('/a/','verified'),row('/b/','verified'),row('/b/','verified'),row('/c/','unknown')],graph);
  assert.equal(groups.length,2);
  assert.deepEqual(library.coverageCounts(groups,core),{total:2,directions:2,typed:0});
});
