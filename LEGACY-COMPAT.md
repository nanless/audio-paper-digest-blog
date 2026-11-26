# 旧域兼容部署

旧 GitHub Pages 的 HTML 跳转并不是 HTTP 重定向：v1.4.7 的 Mac / Android 工作台和 RSS 阅读器不会执行该 JavaScript。新版详情清单还声明站点前缀并校验下游文件字节与 SHA-256，不能把新站发布目录直接复制到旧址。

本工作流从门户主分支构建**独立的旧址产物**，在构建前换成旧基址，再交给门户原有的 Hugo、工作台协议导出与构建校验。不会修改门户仓库，也不在构建后替换 JSON 中的 URL。兼容产物保留旧 RSS item GUID、三条旧入口和它们引用的工件。旧站首页与未知路径仍以原来的 HTML 跳转处理；旧址上存在的文章页会提供正文供旧工作台读取。兼容产物不供搜索引擎抓取。

## 上线与验收

1. PR 的 workflow 只构建和校验，不写 Pages。确认通过后合入。当前旧站使用 **Deploy from a branch**，要上线兼容产物需在旧站仓库 Settings → Pages → Build and deployment 把 Source 改为 **GitHub Actions**。不要修改门户仓库的 Pages 设置。
2. 在旧站运行一次 Legacy RSS and Workbench compatibility。之后每三小时检查并重建一次；也可以手动运行。若构建或校验失败，不部署该产物。
3. 验证旧域 `index.xml` 是 HTTP 200 XML 并含最新一期、item GUID 仍用旧地址；验证 `client/details/manifest.json`、`client/index.json` 和 `index.json` 是 HTTP 200 JSON，并在 v1.4.7 Mac / Android 各跑一次无缓存或更新目录、打开一篇文章及引用。旧域首页仍跳转，新门户仍独立部署。
4. 回滚时将旧站 Pages Source 改回 **Deploy from a branch → main / (root)**，恢复跳转站；工作流不再能覆盖此分支部署。

这个过渡部署会重复构建门户并占用旧 Pages 的配额。旧客户端和旧订阅迁移完成后可关闭计划并退回跳转站；不要在仍需要旧订阅时移除 XML 兼容。仓库内不保存生成的站点产物。
