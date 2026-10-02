'use strict';
// New signed namespace only; never rewrite registry/source/proofs into old338.
const profile=Object.freeze({
  "registrySha256": "cbb157b602ea9e7a41c84fc28cdda99481aef5e8bfefd8120b1c69900a8ea638",
  "registryVersion": "paper-taxonomy-v2",
  "snapshotSha256": "59f8139108ca8e9d8c473d174e871b3aedcfb2b3844517599d466934c98bd50a",
  "projectionSha256": "d9634044703f7172a2785e1a2502120b272723fe17d871c63897a7b287f600a2",
  "classificationContract": "historical-source-taxonomy-classification-v2",
  "implementationSha256": "c68ab57cd0229925dcae019fa0683cb64e1205126aa9797cb5027692e36b2aa7",
  "protectedDependencySha256": "79c3367e4c2516631a95f8da0406405457e799672cc1fa94f9a68aaffc1dd378",
  "dependencyContract": "historical-taxonomy-v2-source-dependency-fingerprint-v1",
  "roleContract": "historical-source-taxonomy-roles-v2",
  "implementationFile": "historical-source-taxonomy-classification-v2"
});
function validatePublicRecord(record,snapshot){return require('./taxonomy-classification-v3-proof').validateDeclared371Profile(record,snapshot,profile);}
module.exports={profile,validatePublicRecord};
