These are public source descriptors, not classification decisions or model review receipts.

`source-descriptors.actual.json` contains five sources read from existing sealed local bundles:

- `arxiv:2605.12987` and `arxiv:2606.01009`: the production source-only `loadSource()` replayed generation 1 from the historical `fetched-arxiv-sources` store. The official v1 text and unversioned PDF URL remain separately described; no PDF version is inferred.
- The two explicitly allowed ICML sources `n1mAjfRDZ6` and `jfpkqjhex4`: the producer replayed official metadata and acquisition bindings and extracted their existing sealed PDFs. Its public descriptor samples contained 73,880 and 90,368 text characters respectively.
- ICASSP `11460320`: the same producer replayed its historical metadata/PDF and extracted 31,824 text characters. Its acquisition has no network receipt, and the descriptor retains the explicit disclosure.

No model/API request was made to create these fixtures. Full text, PDF bytes, private paths and credential material are omitted. Source fields retain their actual hashes and publicly persisted metadata. Tests validate these descriptors independently; they never manufacture an accepted classification for these sources.

The consumer checks public field structure, source identity and relationships between retained hashes. It does not attempt to reconstruct the private acquisition receipt or full writer-input payload from their redacted public descriptors. Their hashes remain bound by the published page proof and the producer's sealed-source replay.
