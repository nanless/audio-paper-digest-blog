'use strict';
// Older ordinary and controlled validators remain byte-identical.
const old=require('./taxonomy-v2-proof'),new371=require('./taxonomy-v2-371-proof');
function validatePublicRecord(record,snapshot){return record?.registrySha256===new371.profile.registrySha256?new371.validatePublicRecord(record,snapshot):old.validatePublicRecord(record,snapshot);}
module.exports={...old,validatePublicRecord};
