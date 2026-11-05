# 博客生成、审查、推送与上线

本页说明页面怎样从论文速递主仓库进入本站，以及本站的构建、部署和上线核验。生成、审查和推送在 `$HOME/code/github_repos/audio-paper-digest` 执行；本站保存页面、资源和站点代码，并负责站点构建、验证与部署。来源准备、分析、Reader 写作和费用规则见主仓库的 `AGENTS.md` 与 `docs/three-workflows.md`，本页不重复。

## 三个阶段

在论文速递主仓库依次运行：

```bash
npm run blog:generate -- --date YYYY-MM-DD
npm run blog:review -- --date YYYY-MM-DD
npm run blog:push -- --date YYYY-MM-DD
```

`blog:generate` 生成页面、引用文件、研究资料和生成清单，不提交也不推送；生成入口收到 `--push` 会直接报错，要求改用三个阶段。`blog:review` 只读审查生成清单里的最终文件，保存逐页内容 SHA、审查协议、当时依据的博客 Git 提交和隔离 Hugo 构建结果，不修改已审文件。`blog:push` 只提交审查凭证允许的精确文件，推送后核对远端 `main` 的提交 ID 与本地一致。

审查按“相对路径 + 页面内容 SHA”复用已通过的记录；页面内容变了就要重新审查，不能直接修改审查凭证或把旧凭证套到新文件上。生成清单里的元数据、审查协议或 Hugo 运行时变化时，即使页面字节没变，也要重新生成本批审查凭证。

## 本站构建检查

在博客仓库运行：

```bash
npm test
npm run build:verify
```

`npm test` 运行 `tests/` 下的 Node 测试，并执行 `scripts/audit-content.js`。`npm run build:verify` 依次执行 `npm run audit:content`、`npm run build` 和 `npm run verify`：

- `build` 由 `scripts/build-site.js` 启动，先运行 `scripts/verify-tags-v2.js`、`verify-tags-v3.js` 和 `verify-fullsite-tags.js`，再选择每日选读封面，然后调用 Hugo。Hugo 成功后，`scripts/shard-search-index.js` 把搜索索引切成受限额约束的分片。
- `verify` 运行 `scripts/verify-build.js public`，检查首页、论文页、每日选读封面、搜索索引分片、页面导航和客户端资料声明等构建产物。

CI 的 `.github/workflows/hugo.yaml` 固定 Hugo 0.160.1（extended）和 Node 22。`unit` 任务运行 `npm test`，`build` 任务运行 `npm run build:verify`；非拉取请求时，构建任务才上传 Pages 产物。`deploy` 任务要等 `unit` 和 `build` 都成功后才部署。拉取请求只运行检查和构建，不上传产物，也不部署。

## 部署与逐页核验

推送到 `main` 会触发上面的 Pages 流程。部署任务成功只说明构建和部署动作完成；对用户宣告博客已上线前，还要逐页核验目标日期的汇总页和本批每篇论文页：正式地址是否正确、是否返回 HTTP 200、页面标题是否与生成清单一致。目标地址以站点基础路径 `https://nanless.github.io/audio-paper-digest-blog/` 为准，例如汇总页 `https://nanless.github.io/audio-paper-digest-blog/posts/YYYY-MM-DD/`。

在论文速递主仓库运行 `npm run digest:status -- --date YYYY-MM-DD`；其中的 `remoteOidVerified` 只证明 Git 提交已到远端，不能代替部署结果和网页核验。部署失败时先读失败任务的日志，修复后继续检查；`digest:status` 显示 complete 也不能跳过这一步。

## 失败恢复

- 生成失败：用同一日期重跑 `npm run blog:generate -- --date YYYY-MM-DD`，从已保存的生成清单和逐页状态继续。不要手改已生成页面，也不要用旧日期的生成、审查或推送证据替代当前批次。
- 审查失败：先按生成或正常修复入口改内容，再重跑 `npm run blog:review -- --date YYYY-MM-DD`。未通过的页面没有通过凭证；内容 SHA 未变的已通过页面可以复用原记录，改动过的页面必须重审。
- 推送被拒：通常是审查凭证与当前文件、当前博客 Git 提交或远端状态不一致。先重跑审查，确认远端 `main` 没有分叉，再重跑 `npm run blog:push -- --date YYYY-MM-DD`；不要强推，也不要手改推送凭证。
- 构建或验证失败：按 `npm run audit:content` 或 `verify-build:` 给出的具体文件和检查项修正来源，再重跑 `npm run build:verify`。不要直接修改 `public/`，它会在下一次构建时被清空重建。
- 部署失败：在 GitHub Actions 中查看 `unit`、`build`、`deploy` 哪个任务失败，按日志修复并重新推送；部署成功后仍要完成上面的逐页核验。

对外操作使用 `package.json` 里的 npm 入口；`package.json.scripts` 是命令是否存在的权威来源，旧的一步式发布写法或直接调用内部脚本都不能替代这些入口。
