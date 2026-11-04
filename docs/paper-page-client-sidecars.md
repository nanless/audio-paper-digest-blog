# 论文页的客户端资料声明

论文页的 `<script class="paper-tools__client-sidecars">` 是已发行客户端读取引用与导读上下文的入口。声明由 `layouts/partials/client_sidecars.html` 生成，必须保留 JSON 字段的驼峰写法，尤其是 `rethink-context.json` 记录里的 `contract` 与 `schemaFingerprint`。

## 为什么不能直接序列化页面参数

Hugo 会把 front matter 解析成参数 map，并把嵌套 map 的键递归小写。直接对 `.Params.paper_digest_sidecars` 使用 `jsonify`，`schemaFingerprint` 会变成 `schemafingerprint`，客户端按格式登记校验时找不到指纹，打开导读就报“当前上下文文件的结构声明无效”。2026-11-03 与 11-04 的页面曾经出现这个问题。

## 现在的做法

- 模板按白名单逐字段重建记录：`url`、`sha256`，上下文记录再补 `contract` 和 `schemaFingerprint`。
- 重建后用 `protocol_header_valid.html` 校验上下文头；任何一项不合法，页面不输出声明，客户端回落到旧的兄弟链接。
- `scripts/verify-build.js` 在构建后解析这段声明，检查四个文件齐全、地址同目录、SHA 为 64 位小写十六进制、上下文头含 `schemaFingerprint` 且不含小写变体。
- `tests/paper-toolbar.test.js` 用真实 Hugo 构建临时页面并解析产物，断言键名与键集合。

## 修改时的注意事项

新增字段必须先确认客户端协议登记里的字段名，再用 `dict` 或 `merge` 显式写入；不能把参数 map 整块传给 `jsonify`。`layouts/_default/index.json` 的 `clientSidecars` 使用同一份重建结果，不要单独序列化参数。
