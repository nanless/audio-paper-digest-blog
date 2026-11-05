# 论文页的客户端资料声明

论文页的 `<script class="paper-tools__client-sidecars">` 是已发行客户端读取引用与导读上下文的入口。声明由 `layouts/partials/client_sidecars.html` 生成；页面还须声明当前 `paper_digest_workbench_contract: researcher-workbench` 和对应的 `paper_digest_workbench_schema_fingerprint`，否则模板不会输出这段声明，客户端回落到旧的兄弟链接。

## 现行字段集合

声明是一个以文件名为键的对象，键集合必须正好是 `citation.json`、`citation.bib`、`citation.ris`、`rethink-context.json`，不能多也不能少。四个文件放在同一个目录，地址形如 `<站点基础路径>/client/papers/<日期>/<论文标识>/<文件名>`；本站当前的基础路径是 `/audio-paper-digest-blog`。

`citation.json`、`citation.bib`、`citation.ris` 每条记录只有两个字段：

- `url`：同目录下对应文件的站内地址；
- `sha256`：该文件字节的 64 位小写十六进制 SHA-256。

`rethink-context.json` 记录在 `url` 和 `sha256` 之外，再写 `contract` 和 `schemaFingerprint`：

- `contract`：当前是 `paper-research-context`；
- `schemaFingerprint`：当前格式的 64 位小写十六进制结构指纹，取自已登记的 `paper-research-context` 格式（浏览器端见 `assets/js/protocol-registry.js`），不能手写，也不能从别的格式复制。

新页不得写 `paper-research-context-v2`。该合同名只在协议登记中作为历史格式保留，用来读取旧记录；它没有当前 `schemaFingerprint`。模板只重建 `contract` 和 `schemaFingerprint`，写 v2 的页面不会通过当前头部校验，也不会输出客户端声明。旧页面继续按原记录读取，不批量改写成新格式。

## 为什么不能直接序列化页面参数

Hugo 会把 front matter 解析成参数 map，并把嵌套 map 的键递归小写。直接对 `.Params.paper_digest_sidecars` 使用 `jsonify`，`schemaFingerprint` 会变成 `schemafingerprint`，客户端按格式登记校验时找不到指纹，打开导读就报“当前上下文文件的结构声明无效”。2026-11-03 与 11-04 的页面曾经出现这个问题。

## 现在的做法

- 模板按白名单逐字段重建记录：每个文件写 `url`、`sha256`，上下文记录再补 `contract` 和 `schemaFingerprint`。
- 重建后调用 `protocol_header_valid.html` 校验上下文头；URL、SHA、合同名或指纹任何一项不合法，页面都不输出声明。论文页按精确的 `client/papers/<日期>/<论文标识>/` 目录核对，索引模板只按站点基础路径和日期核对同一个目录。
- `layouts/_default/index.json` 的 `clientSidecars` 使用同一份重建结果，不要单独序列化参数。

## 构建时 verify-build 的检查项

`npm run build:verify` 先运行 `npm run audit:content`，再运行 `npm run build` 和 `npm run verify`。`npm run verify` 调用的 `scripts/verify-build.js` 会从 `public/` 的论文页读取声明并逐项检查：

- 键集合正好是四个文件名，没有缺失或多余字段；四个 `url` 指向同一个 `client/papers/` 下的目录，且位于站点基础路径下。
- 每条 `sha256` 是 64 位小写十六进制；它指向的文件确实存在于构建产物中，重新计算的字节 SHA-256 与声明一致。
- `rethink-context.json` 的 `contract` 必须是 `paper-research-context`，`schemaFingerprint` 必须是 64 位十六进制字符串，且记录中不能出现小写的 `schemafingerprint`。
- 构建还按源 Markdown 对账：正文包含 `paper_digest_sidecars` 和 `/client/papers/` 的页面数，必须等于实际输出客户端声明的页面数。模板整体失效时这会变成构建错误，而不是静默退回到旧链接。
- 同一个检查函数还确认论文页有 `paper-tools` 工具区域和结构化的 `paper-tools__citation-record`；论文身份、官方地址和引用文件是否齐全另按正常论文工具规则核对。

`tests/paper-toolbar.test.js` 用真实 Hugo 构建临时页面并解析产物，断言三个引用文件只有 `url`、`sha256`，上下文记录正好有四个键，并确认错误的指纹会让声明整体消失。

## 修改时的注意事项

新增字段必须先确认客户端协议登记里的字段名，再用 `dict` 或 `merge` 显式写入；不能把参数 map 整块传给 `jsonify`。旧页面可见的 `/data/papers/` 下载地址只是已发行客户端的兼容入口，不能拿来充当当前客户端声明；当前声明必须使用 `/client/papers/`。`schemaFingerprint` 由协议目录生成，不要为了通过某次构建手填一个旧值或小写变体。
