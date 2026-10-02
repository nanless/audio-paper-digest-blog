'use strict';
// Original public object/order pins; these are not new classifications.
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const B=path.resolve(__dirname,'..'),read=p=>JSON.parse(fs.readFileSync(p)),digest=v=>crypto.createHash('sha256').update(JSON.stringify(v)).digest('hex');
test('current formal native collection preserves complete original96 objects and validates every issued namespace',()=>{
 const pins=require('./fixtures/fullsite-original96-pins.json'),manifest=read(B+'/data/fullsite-taxonomy-history.json'),h=require('../scripts/lib/fullsite-taxonomy-pack').reconstruct(manifest,k=>fs.readFileSync(B+'/static/'+k));
 assert.equal(pins.classifications.length,96);assert.equal(pins.pages.length,114);
 for(const pin of pins.classifications)assert.equal(digest(h.classificationRecords[pin.paperId]),pin.serializedSha256,pin.paperId+' original whole object/key/array order');for(const pin of pins.pages)assert.equal(digest(h.records[pin.pagePath]),pin.serializedSha256,pin.pagePath+' original page object/key order');
 const cset=new Set(pins.classifications.map(p=>p.paperId)),pset=new Set(pins.pages.map(p=>p.pagePath));assert.deepEqual(Object.keys(h.classificationRecords).filter(k=>cset.has(k)),pins.classifications.map(p=>p.paperId));assert.deepEqual(Object.keys(h.records).filter(k=>pset.has(k)),pins.pages.map(p=>p.pagePath));
 const result=require('../scripts/verify-fullsite-taxonomy').verify(B);assert.equal(result.records,Object.keys(h.records).length);assert.equal(result.papers,Object.keys(h.classificationRecords).length);
 const profiles=require('../scripts/lib/fullsite-taxonomy-profiles').profiles,partial=fs.readFileSync(B+'/layouts/partials/taxonomy_fullsite_profiles.html','utf8'),raw=partial.match(/return \(`([\s\S]*)` \| transform.Unmarshal\)/)[1];assert.deepEqual(JSON.parse(raw),profiles,'JS/Hugo exact issuer tuples');
 assert.equal(crypto.createHash('sha256').update(fs.readFileSync(B+'/data/taxonomy-history-v2.json')).digest('hex'),'4a196dba96480bed5a42f69583df1ed81a9dddaaeb603e4975f969ff78efa19c');assert.equal(crypto.createHash('sha256').update(fs.readFileSync(B+'/data/current-page-taxonomy-history-v2.json')).digest('hex'),'06142aadd012fec0127d66d2cfbe81f9059edbe18d9a5f7c45be65747790e9f9');
});
