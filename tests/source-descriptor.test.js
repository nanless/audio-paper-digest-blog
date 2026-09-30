'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os'),crypto=require('node:crypto');
const {execFileSync}=require('node:child_process');
const repo=path.resolve(__dirname,'..');
const actual=JSON.parse(fs.readFileSync(path.join(__dirname,'fixtures/source-descriptors.actual.json'))).sources;
const hash=value=>crypto.createHash('sha256').update(value).digest('hex');
const canonical=value=>Array.isArray(value)?value.map(canonical):value&&typeof value==='object'?Object.fromEntries(Object.keys(value).sort().map(key=>[key,canonical(value[key])])):value;
function build(t,cases){
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'source-descriptor-test-'));t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  for(const dir of ['data','layouts/partials'])fs.mkdirSync(path.join(root,dir),{recursive:true});
  for(const name of ['research_source_descriptor','research_arxiv_pdf_version_binding','research_historical_source_version','research_conference_source_descriptor'])fs.copyFileSync(path.join(repo,'layouts/partials',name+'.html'),path.join(root,'layouts/partials',name+'.html'));
  fs.writeFileSync(path.join(root,'data/cases.json'),JSON.stringify(cases));
  fs.writeFileSync(path.join(root,'layouts/index.html'),'{{ $results := newScratch }}{{ $results.Set "items" dict }}{{ range $name, $source := hugo.Data.cases }}{{ $results.SetInMap "items" $name (partial "research_source_descriptor.html" $source) }}{{ end }}{{ $results.Get "items" | jsonify }}');
  fs.writeFileSync(path.join(root,'hugo.yaml'),'baseURL: https://example.test/\ndisableKinds: [section, taxonomy, term, RSS, sitemap, robotsTXT, "404"]\n');
  execFileSync('hugo',['--source',root,'--noBuildLock','--panicOnWarning'],{stdio:'pipe',env:{...process.env,GOMAXPROCS:'2',HUGO_NUMWORKERMULTIPLIER:'1'}});
  return JSON.parse(fs.readFileSync(path.join(root,'public/index.html')));
}
test('actual sealed source-only descriptors preserve unspecified PDF version and reject identity, URL, hash, type and fabricated 404 claims',t=>{
  const cases={};
  for(const[id,source]of Object.entries(actual).filter(([id])=>id.startsWith('arxiv:')))cases[id]=source;
  const base=actual['arxiv:2605.12987'];
  const mutations=[
    ['foreign-source-id',s=>{s.pdfVersionBinding.sourceId='2606.01009v1';}],
    ['foreign-canonical-id',s=>{s.pdfVersionBinding.paperId='arxiv:2606.01009';}],
    ['foreign-text-url',s=>{s.pdfVersionBinding.textUrl='https://arxiv.org/html/2606.01009v1';}],
    ['text-url-version-drift',s=>{s.pdfVersionBinding.textUrl='https://arxiv.org/html/2605.12987v2';}],
    ['pdf-url-foreign-id',s=>{s.pdfVersionBinding.pdfRequestedUrl='https://arxiv.org/pdf/2606.01009.pdf';}],
    ['pdf-url-selected-v1',s=>{s.pdfVersionBinding.pdfRequestedUrl='https://arxiv.org/pdf/2605.12987v1.pdf';}],
    ['pdf-url-query',s=>{s.pdfVersionBinding.pdfRequestedUrl+='?download=1';}],
    ['nested-source-run-sha-mismatch',s=>{s.sourceBinding.sourceRunIdentitySha256=hash('wrong');}],
    ['nested-structured-sha-mismatch',s=>{s.sourceBinding.structuredArtifactsSha256=hash('wrong');}],
    ['text-sha-mismatch',s=>{s.sourceBinding.textSha256=hash('wrong');}],
    ['pdf-sha-mismatch',s=>{s.pdfVersionBinding.pdfSha256=hash('wrong');}],
    ['manifest-sha-mismatch',s=>{s.pdfVersionBinding.sourceManifestSha256=hash('wrong');}],
    ['string-text-version',s=>{s.pdfVersionBinding.textVersion='1';}],
    ['wrong-text-version',s=>{s.pdfVersionBinding.textVersion=2;}],
    ['authenticated-pdf',s=>{s.pdfVersionBinding.pdfVersionAuthenticated=true;}],
    ['wrong-status',s=>{s.pdfVersionBinding.status='authenticated-version';}],
    ['warning-only-without-binding',s=>{delete s.pdfVersionBinding;}],
    ['warning-removed',s=>{delete s.sourceVersionWarning;}],
    ['false-warning',s=>{s.sourceVersionWarning='PDF 已认证为 v1，当前稿有效。';}],
    ['malformed-binding',s=>{s.pdfVersionBinding=[];}],
    ['extra-binding-field',s=>{s.pdfVersionBinding.networkReceipt=true;}],
    ['top-level-pdf-conflict',s=>{s.pdfUrl='https://arxiv.org/pdf/2605.12987v1.pdf';}],
    ['top-level-source-conflict',s=>{s.sourceUrl='https://arxiv.org/abs/2606.01009v1';}],
    ['fabricated-current-404',s=>{
      s.sourceVersion={contract:'arxiv-historical-version-source-v1',version:1,canonicalArxivId:'2605.12987',selectedSourceId:s.sourceId,textSourceId:s.sourceId,selectedPdfUrl:s.pdfVersionBinding.pdfRequestedUrl,currentPdfAvailable:false,attemptedCurrentPdfStatus:404,attemptedCurrentPdfUrl:s.pdfVersionBinding.pdfRequestedUrl,warning:s.sourceVersionWarning};
      s.sourceVersion.identitySha256=hash(JSON.stringify(canonical(s.sourceVersion)));
    }],
  ];
  for(const[name,mutate]of mutations){const source=structuredClone(base);mutate(source);cases[name]=source;}
  const legacy=structuredClone(base);delete legacy.pdfVersionBinding;delete legacy.sourceVersionWarning;cases['legacy-no-optional-binding']=legacy;
  const nestedMatch=structuredClone(base);nestedMatch.sourceBinding.sourceRunIdentitySha256=nestedMatch.sourceRunIdentitySha256;nestedMatch.sourceBinding.structuredArtifactsSha256=nestedMatch.structuredArtifactsSha256;cases['optional-nested-hashes-match']=nestedMatch;
  const result=build(t,cases);
  assert.equal(result['optional-nested-hashes-match'].valid,true);
  for(const[id,source]of Object.entries(actual).filter(([id])=>id.startsWith('arxiv:'))){assert.equal(result[id].valid,true,id+' read from actual sealed bundle');assert.equal(result[id].warning,source.sourceVersionWarning);}
  for(const[name]of mutations){assert.equal(result[name].valid,false,name);assert.equal(result[name].warning,'',name+' cannot expose rejected disclosure');}
  assert.equal(result['legacy-no-optional-binding'].valid,true);assert.equal(result['legacy-no-optional-binding'].warning,'');
});

test('actual conference descriptors replay restricted official metadata and alternate provenance without fabricating author or network receipts',t=>{
  const cases=Object.fromEntries(Object.entries(actual).filter(([id])=>id.startsWith('conference:')));
  const n1=actual['conference:icml:2026:openreview-forum-id:n1mAjfRDZ6'];
  const jf=actual['conference:icml:2026:openreview-forum-id:jfpkqjhex4'];
  const mutations=[
    ['conference-source-id',s=>{s.sourceId='arxiv:2510.06927';}],
    ['conference-official-url',s=>{s.sourceUrl='https://arxiv.org/abs/2510.06927v3';}],
    ['conference-invented-pdf-url',s=>{s.pdfUrl='https://arxiv.org/pdf/2510.06927v3.pdf';}],
    ['conference-missing-bindings',s=>{delete s.sourceBindings;}],
    ['conference-top-level-acquisition',s=>{s.acquisition={sourceKind:'authenticated-camera-ready'};}],
    ['conference-unbound-extra-disclosure',s=>{s.provenanceDisclosure='Authenticated camera-ready source';}],
    ['conference-malformed-bindings',s=>{s.sourceBindings={};}],
    ['conference-selected-pdf-hash',s=>{s.pdfSha256=hash('different PDF');}],
    ['conference-metadata-binding-hash-type',s=>{s.sourceBindings[0].metadataIdentityBindingSha256=true;}],
    ['conference-acquisition-hash',s=>{s.sourceBindings[0].acquisitionSha256='unsigned';}],
    ['conference-metadata-index-type',s=>{s.sourceBindings[0].metadataRecordIndex='1679';}],
    ['conference-pdf-size-type',s=>{s.sourceBindings[0].pdfBytes='100';}],
    ['conference-receipt-hash-type',s=>{s.sourceBindings[0].acquisition.receipt.selfSha256=[];}],
    ['conference-provenance-camera-ready',s=>{s.sourceBindings[0].acquisition.provenanceStatement='Authenticated official camera-ready PDF.';}],
    ['conference-fractional-index',s=>{s.sourceBindings[0].metadataRecordIndex=0.5;}],
    ['conference-extra-acquisition-field',s=>{s.sourceBindings[0].acquisition.absolutePath='/private/source.pdf';}],
    ['conference-receipt-sha',s=>{s.sourceBindings[0].acquisition.receipt.fileSha256='wrong';}],
    ['conference-camera-ready-claim',s=>{s.sourceVersionWarning='已核实会议 camera-ready 正式定稿。';}],
    ['conference-unknown-relation',s=>{s.versionRelation='equivalent-camera-ready';s.sourceBindings[0].acquisition.versionRelation=s.versionRelation;}],
    ['conference-cross-title-mismatch',s=>{s.sourceTitle='Different title';s.sourceBindings[0].acquisition.sourceTitle=s.sourceTitle;}],
    ['conference-cross-doi-mismatch',s=>{s.sourceDoi='10.2139/ssrn.1111111';s.sourceBindings[0].acquisition.sourceDoi=s.sourceDoi;}],
    ['conference-acquisition-kind-mismatch',s=>{s.sourceBindings[0].acquisition.sourceKind='official-camera-ready';}],
    ['conference-openreview-response-claim',s=>{s.sourceBindings[0].acquisition.openreviewResponseBytes=true;}],
    ['conference-hidden-acquisition-relation',s=>{delete s.versionRelation;}],
  ];
  for(const[name,mutate]of mutations){const source=structuredClone(n1);mutate(source);cases[name]=source;}
  const badJf=structuredClone(jf);badJf.sourceVersionWarning=badJf.sourceVersionWarning.replace('2510.06927v3','2510.06927v4');cases['jf-wrong-official-version']=badJf;
  const noAuthorClaim=structuredClone(n1);delete noAuthorClaim.sourceBindings[0].acquisition.sourceAuthors;cases['no-unpersisted-author-requirement']=noAuthorClaim;
  const retained=Object.values(actual).find(s=>s.sourceBindings?.[0].acquisition.sourceKind==='retained-local-no-network-receipt');
  if(retained){const noDisclosure=structuredClone(retained);delete noDisclosure.provenanceDisclosure;cases['retained-no-disclosure']=noDisclosure;
    const inventedReceipt=structuredClone(retained);inventedReceipt.sourceBindings[0].acquisition.receipt={fileSha256:hash('made-up'),selfSha256:hash('made-up')};cases['retained-invented-receipt']=inventedReceipt;}
  for(const field of ['sourceVersionWarning','sourceTitle','sourceDoi','provenanceDisclosure','acquisition'])cases['unbound-'+field]={kind:'conference-local-pdf',paperId:n1.paperId,sourceId:n1.paperId,writerInputsSha256:n1.writerInputsSha256,pdfSha256:n1.pdfSha256,textSha256:n1.textSha256,structuredArtifactsSha256:n1.structuredArtifactsSha256,[field]:'Unbound alleged provenance'};
  const result=build(t,cases);
  for(const field of ['sourceVersionWarning','sourceTitle','sourceDoi','provenanceDisclosure','acquisition'])assert.equal(result['unbound-'+field].valid,false,'unbound visible '+field+' must not enter legacy compatibility');
  for(const[id,source]of Object.entries(actual).filter(([id])=>id.startsWith('conference:'))){assert.equal(result[id].valid,true,id+' actual producer descriptor');assert.equal(result[id].warning,source.sourceVersionWarning||'');}
  for(const[name]of mutations){assert.equal(result[name].valid,false,name);assert.equal(result[name].warning,'');}
  assert.equal(result['jf-wrong-official-version'].valid,false);assert.equal(result['no-unpersisted-author-requirement'].valid,true);
  if(retained){assert.equal(result['retained-no-disclosure'].valid,false);assert.equal(result['retained-invented-receipt'].valid,false);}
});
