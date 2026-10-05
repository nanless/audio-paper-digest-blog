'use strict';
// 旧分类沿用原核验规则，371概念版本使用单独的校验入口。
const old=require('./tag-v2-proof'),new371=require('./tag-v2-371-proof');
function validatePublicRecord(record,snapshot){return record?.registrySha256===new371.profile.registrySha256?new371.validatePublicRecord(record,snapshot):old.validatePublicRecord(record,snapshot);}
module.exports={...old,validatePublicRecord};
