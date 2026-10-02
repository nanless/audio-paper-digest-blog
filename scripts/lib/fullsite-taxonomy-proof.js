'use strict';
// Current-page fullsite audit envelopes. Hash replay is not a public-key
// signature or an independent semantic reassessment of the source manuscript.
const crypto = require('node:crypto');
const shared = require('./taxonomy-classification-v3-proof');
const { stableHash, ROLE_KEYS, CONTRACT: INNER_CONTRACT } = shared;
const PUBLIC_CONTRACT = 'fullsite-source-taxonomy-audit-supplement-v1';
const AUDIT_CONTRACT = 'fullsite-source-taxonomy-audit-v3';
const EVIDENCE_TYPE = 'source-bound-current-page-fullsite-taxonomy-v3';
const PAGE_KEYS = ['contract','evidenceType','paperId','runId','pageKey','pageSha256','bodySha256','registrySha256','registryVersion','concepts',...ROLE_KEYS,'classificationRef','auditRecordSha256','proofSha256'];
const AUDIT_KEYS = ['contract','paperId','runId','fingerprint','fingerprintInputs','planAdmission','classificationRecord','classificationRecordSha256','protectedDependencies','proofSha256'];
const FP_KEYS = ['contract','manifestSha256','scopeSha256','blogHead','blogTree','paperAuthoritySha256','nativeFingerprintInputs','protectedDependencySha256'];
const ADMISSION_KEYS = ['contract','manifestSha256','scopeSha256','blogHead','blogTree','paperId','pages','sourceAuthoritySha256'];
const sha = v => crypto.createHash('sha256').update(v).digest('hex');
const map = v => !!v && typeof v === 'object' && !Array.isArray(v) && [Object.prototype,null].includes(Object.getPrototypeOf(v));
const hash = v => typeof v === 'string' && /^[a-f0-9]{64}$/.test(v);
const oid = v => typeof v === 'string' && /^[a-f0-9]{40}$/.test(v);
const paperId = v => typeof v === 'string' && /^(?:arxiv:[0-9]{4}\.[0-9]{4,5}|conference:[^\s\x00-\x1f\x7f]+)$/.test(v);
const pagePath = v => typeof v === 'string' && /^content\/posts\/[A-Za-z0-9][A-Za-z0-9._-]*\.md$/.test(v);
const fail = m => { throw Error('Fullsite taxonomy public proof rejected: '+m); };
function exact(value,keys,name) {
  if (!map(value) || Object.keys(value).sort().join('|') !== [...keys].sort().join('|')) fail(name+' fields');
}
function proof(value,name) {
  const {proofSha256,...body} = value;
  if (!hash(proofSha256) || stableHash(body) !== proofSha256) fail(name+' whole proof');
}
function validatePages(pages,id) {
  if (!Array.isArray(pages) || !pages.length) fail('admission pages');
  const paths = new Set(), keys = new Set();
  for (const p of pages) {
    exact(p,['pagePath','pageKey','pageSha256','bodySha256'],'admitted page');
    if (!pagePath(p.pagePath) || !/^page:[a-f0-9]{64}$/.test(p.pageKey || '') || !hash(p.pageSha256) || !hash(p.bodySha256) || paths.has(p.pagePath) || keys.has(p.pageKey)) fail('admitted page identity/path/SHA');
    paths.add(p.pagePath); keys.add(p.pageKey);
  }
  if (!paperId(id)) fail('admitted paper identity');
}
// This checks transport/envelope relationships only. It never admits a page to
// UI/index, and cannot substitute for the required inner/source replay below.
function validateEnvelope(page,path,audit) {
  exact(page,PAGE_KEYS,'page'); exact(audit,AUDIT_KEYS,'audit');
  proof(page,'page'); proof(audit,'audit');
  if (!pagePath(path) || page.contract !== PUBLIC_CONTRACT || page.evidenceType !== EVIDENCE_TYPE || !paperId(page.paperId) || page.classificationRef !== page.paperId || audit.contract !== AUDIT_CONTRACT || audit.paperId !== page.paperId || audit.runId !== page.runId || stableHash(audit) !== page.auditRecordSha256) fail('page/ref/audit identity');
  if (typeof page.runId !== 'string' || !/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/.test(page.runId)) fail('run namespace');
  for (const k of ['pageSha256','bodySha256','registrySha256','auditRecordSha256']) if (!hash(page[k])) fail(k+' format');
  const a=audit.planAdmission, f=audit.fingerprintInputs, c=audit.classificationRecord;
  exact(a,ADMISSION_KEYS,'admission'); exact(f,FP_KEYS,'audit fingerprint');
  validatePages(a.pages,page.paperId);
  const own=a.pages.filter(p=>p.pagePath===path);
  if (own.length!==1 || ['pageKey','pageSha256','bodySha256'].some(k=>own[0][k]!==page[k])) fail('page outside exact admission');
  if (a.contract !== 'fullsite-current-page-plan-admission-v1' || a.paperId !== page.paperId || !oid(a.blogHead) || !oid(a.blogTree)) fail('admission contract/baseline');
  for (const k of ['manifestSha256','scopeSha256','sourceAuthoritySha256']) if (!hash(a[k])) fail('admission hash');
  if (f.contract !== AUDIT_CONTRACT || stableHash(f)!==audit.fingerprint || !hash(f.paperAuthoritySha256) || !hash(f.protectedDependencySha256) || ['manifestSha256','scopeSha256','blogHead','blogTree'].some(k=>a[k]!==f[k])) fail('audit fingerprint/admission');
  exact(audit.protectedDependencies,['contract','native','source','own'],'audit dependencies');
  if (audit.protectedDependencies.contract !== 'fullsite-taxonomy-audit-protected-dependencies-v1' || stableHash(audit.protectedDependencies)!==f.protectedDependencySha256 || !map(audit.protectedDependencies.own)) fail('outer dependency map');
  const names=['fullsite-taxonomy-audit-paths.js','fullsite-taxonomy-audit-plan.js','fullsite-taxonomy-audit-source.js','fullsite-taxonomy-audit-runner.js','fullsite-taxonomy-audit.js','fullsite-taxonomy-audit-original-extraction.js','fullsite-taxonomy-audit-original-conference-authority.js','fullsite-taxonomy-audit-title.js','fullsite-taxonomy-audit-title-association.js','fullsite-taxonomy-audit-official-title.js'];
  // Transport shape only: this exact installed whole-map commitment cannot
  // admit UI without a separately approved plan/source projection profile.
  if (f.protectedDependencySha256==='2ddcc46252f270596cbb4b533ad33237ecb4d6286ad2accc86bf4e567462ec9f') names.push('fullsite-taxonomy-audit-classification.js','fullsite-taxonomy-audit-runtime-profile.js');
  exact(audit.protectedDependencies.own,names,'outer implementation map');
  for (const value of Object.values(audit.protectedDependencies.own)) if (!hash(value)) fail('outer implementation SHA');
  const sourceDeps=audit.protectedDependencies.source;
  exact(sourceDeps,['contract','files'],'source authority dependencies');
  if(sourceDeps.contract!=='historical-taxonomy-v3-source-dependency-fingerprint-v1'||!map(sourceDeps.files)||!Object.keys(sourceDeps.files).length)fail('source authority dependency profile');
  for(const [name,h]of Object.entries(sourceDeps.files))if(!/^(?:scripts|manual\/scripts)\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_][a-zA-Z0-9_.-]*\.(?:js|py)$/.test(name)||name.split('/').includes('..')||!hash(h))fail('source authority dependency path/SHA');
  if (!map(c) || c.contract!==INNER_CONTRACT || c.paperId!==page.paperId || c.runId!==page.runId || stableHash(c)!==audit.classificationRecordSha256 || !hash(audit.classificationRecordSha256) || stableHash(c.fingerprintInputs)!==stableHash(f.nativeFingerprintInputs) || stableHash(c.protectedDependencies)!==stableHash(audit.protectedDependencies.native) || c.registrySha256!==page.registrySha256) fail('complete native classification/dependencies');
  proof(c,'native classification');
  if (!Array.isArray(c.concepts) || stableHash(c.concepts.map(({id,facet,label})=>({id,facet,label})))!==stableHash(page.concepts) || ROLE_KEYS.some(k=>stableHash(c[k])!==stableHash(page[k]))) fail('page roles/direct concept projection');
  return { admission:a, fingerprint:f, classificationRecord:c };
}
function parseSupplement(value) {
  exact(value,['contract','records','classificationRecords'],'supplement');
  if (value.contract!==PUBLIC_CONTRACT || !map(value.records) || !map(value.classificationRecords)) fail('supplement contract/maps');
  const refs=new Map(),pageKeys=new Set();
  for (const [path,page] of Object.entries(value.records)) {
    if (!pagePath(path) || !Object.hasOwn(value.classificationRecords,page.classificationRef)) fail('page/ref missing');
    validateEnvelope(page,path,value.classificationRecords[page.classificationRef]);
    if(pageKeys.has(page.pageKey))fail('duplicate current page key');pageKeys.add(page.pageKey);
    if(!refs.has(page.classificationRef))refs.set(page.classificationRef,[]);refs.get(page.classificationRef).push(path);
  }
  if (refs.size!==Object.keys(value.classificationRecords).length || Object.keys(value.classificationRecords).some(id=>!paperId(id)||!refs.has(id))) fail('orphan/shared paper records');
  for (const [id,audit] of Object.entries(value.classificationRecords)) {
    if (id!==audit.paperId) fail('classification map identity');
    const members=refs.get(id).sort();
    if (stableHash(members)!==stableHash(audit.planAdmission.pages.map(p=>p.pagePath).sort())) fail('incomplete paper page projection');
  }
  return value;
}
function approvedProfile(page,audit,profiles,context) {
  const c=audit.classificationRecord, f=audit.fingerprintInputs;
  const matches=profiles.filter(p=>p.contract===AUDIT_CONTRACT && p.registrySha256===page.registrySha256 && p.implementationSha256===c.fingerprintInputs.implementationSha256 && p.nativeDependencySha256===c.protectedDependencySha256 && p.auditDependencySha256===f.protectedDependencySha256 && p.manifestSha256===f.manifestSha256 && p.scopeSha256===f.scopeSha256 && p.blogHead===f.blogHead && p.blogTree===f.blogTree && (!context || require('./fullsite-admission-proof').matchesContext(p,context)));
  if (matches.length!==1) fail('no unique root-approved current-page audit profile');
  const profile=matches[0],projections=require('./fullsite-admission-proof').approvedContext(profile,context),member=projections.sources.members[page.paperId];
  if (!map(member) || member.paperAuthoritySha256!==f.paperAuthoritySha256 || member.sourceAuthoritySha256!==audit.planAdmission.sourceAuthoritySha256 || member.pagesSha256!==stableHash(audit.planAdmission.pages) || member.sourceDescriptorSha256!==stableHash(c.source)) fail('root-approved public authority/member binding');
  return {...profile,members:projections.sources.members};
}
function validatePublicRecord(page,path,audit,snapshot,context) {
  validateEnvelope(page,path,audit);
  const profile=approvedProfile(page,audit,require('./fullsite-taxonomy-profiles').profiles,context);
  // Added as a distinct shared replay entry only after full public authority
  // closure. Its source descriptor must not be disguised as an old source.
  return shared.validateAdmittedFullsiteRecord(page,path,audit,snapshot,profile,context);
}
module.exports={PUBLIC_CONTRACT,AUDIT_CONTRACT,EVIDENCE_TYPE,PAGE_KEYS,AUDIT_KEYS,FP_KEYS,ADMISSION_KEYS,exact,sha,validateEnvelope,parseSupplement,approvedProfile,validatePublicRecord};
