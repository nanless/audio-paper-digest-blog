---
title: "研究资源指南"
layout: "reader-guide"
description: "按发现论文、核对来源、整理阅读和研究写作的顺序，选择真正能进入日常工作的工具。"
kicker: "从发现到研究"
noRating: true
reviewed: "2026-10-01"
guide_actions:
  - label: "进入论文库"
    url: "papers/"
  - label: "查看站点使用方法"
    url: "about/"
---

不用先搭建一套复杂系统。先确定研究问题，保存少量候选论文，核对原文，写下自己的判断，再把需要的材料交给 AI agent。下面只保留适合这条路线的官方入口；功能与链接于 **2026 年 10 月 1 日**核对。

## 发现值得读的论文

- **arXiv：跟踪领域新稿。** 从 [Sound · cs.SD](https://arxiv.org/list/cs.SD/recent) 和 [Audio and Speech Processing · eess.AS](https://arxiv.org/list/eess.AS/recent) 看近期题目与摘要，再打开论文页核对版本。它们是预印本分类入口，不能把出现在列表中等同于通过同行评审。
- **[Hugging Face Papers](https://huggingface.co/papers)：发现社区关注的工作。** 日、周、月视图适合补充浏览线索；社区热度与自己的问题相关性要分别判断。找到候选后仍回到作者原论文。
- **[OpenReview](https://openreview.net/)：查看会议公开记录。** 从对应 venue 或论文 forum 阅读公开稿件及可见讨论；不同会议的公开范围不同，以具体页面为准。不要把预印本、投稿稿与最终会议稿自动视为同一版本。

已经知道要找什么时，先用[本站论文库](../papers/)按研究类型、范围及任务、主题、方法与条件缩小候选；按会议查找则进入[会议目录](../conferences/)。类型或范围尚未核验的论文可单独筛选。

## 核对原文与复现材料

**从论文中的官方链接出发。** 先确认题目、作者、标识与版本，再查看作者项目页，避免用同名仓库或正文里引用的另一篇论文代替当前工作。[arXiv 版本标识说明](https://info.arxiv.org/help/arxiv_identifier.html)可以帮助区分同一论文的不同稿件。

- **GitHub：读代码，也读运行条件。** 查看作者仓库的 README、许可证、依赖、训练与评测脚本；做实验时记录 commit 和配置。可用[官方文件浏览指南](https://docs.github.com/en/repositories/working-with-files/using-files/viewing-and-understanding-files)定位文件和历史。仓库存在不代表权重、训练数据或论文全部实验都已公开。
- **Hugging Face Hub：核对模型与数据说明。** 到 [Models](https://huggingface.co/models) 或 [Datasets](https://huggingface.co/datasets) 找作者发布的资源，阅读 [Model Card](https://huggingface.co/docs/hub/model-cards) 与 [Dataset Card](https://huggingface.co/docs/hub/datasets-cards)。重点检查任务、许可证、适用范围、数据划分、评测条件与限制；缺失字段应记为待核查。

一份有用的复现记录至少包含：论文版本、代码 commit、数据版本与划分、关键配置、指标定义，以及本次没有验证的部分。

## 整理阅读资料

**把原始资料和自己的判断分开保存。** 原论文、PDF 与引用字段进入一个资料库；证据位置、自己的总结、反例与实验计划进入笔记。临时的 AI 对话和比较草稿留在工作目录，确认后再归档。用 DOI、arXiv ID 或官方链接关联，避免以相似标题合并不同论文。

- **[Zotero](https://www.zotero.org/support/adding_items_to_zotero)：可选的论文资料库。** 可从官方论文页使用 Connector，或按 DOI / arXiv ID 添加条目；也可通过“文件 → 导入”读取本站下载的 RIS / BibTeX，见[官方导入说明](https://www.zotero.org/support/kb/importing_standardized_formats)。保存后核对题目、作者和日期。[笔记功能](https://www.zotero.org/support/notes)可记录自己的观察。
- **[Obsidian](https://obsidian.md/help/Files+and+folders/How+Obsidian+stores+data)：可选的本地笔记库。** 笔记是本地文件夹中的 Markdown，普通编辑器也能读写，适合把比较、概念与实验记录积累成笔记。它的[官方 CLI](https://obsidian.md/help/cli)可搜索、读取及创建笔记，供自动化工具使用；需要符合官方说明的安装器、启用 CLI，并运行桌面应用。文件读写与 CLI 是两种接入方式，第三方插件或 MCP 的能力需分别核对。

不需要这两种软件也可以开始：把官方 PDF、引用文件与本站导出的 Markdown / CSV 论文清单放进自己的文件夹，用普通文本文件记录证据位置和下一步问题。在[论文库](../papers/)勾选候选条目即可批量下载。

**把已核验的研究线索带走。** Markdown / CSV 清单包含官方来源、版本提示，以及已有核验的研究类型、范围、主要研究任务 / 主题 / 重点 / 产物 / 机制、方法和直接多级分类路径。方法“不适用”时保留完整理由；尚未核验的研究类型会明确说明。可以把清单交给外部 agent 初筛、比较研究问题或整理阅读顺序，再让它取得对应原论文并核对证据。清单不包含原论文全文，分类也不能替代原文结论。BibTeX / RIS 只保存可核实书目信息，不把本站分类当作作者的论文元数据。

## 把笔记变成研究写作

- **使用 Word、LibreOffice 或 Google Docs：** 可按 [Zotero 官方文字处理插件指南](https://www.zotero.org/support/word_processor_integration)插入引用并生成参考文献。软件能管理引用格式，引用是否真的支持你的论点仍需自己核对。
- **使用 LaTeX：** [Overleaf 的 BibTeX 指南](https://www.overleaf.com/learn/latex/Bibliography_management_with_bibtex)说明如何接入 `.bib` 文件。把本站导出的条目与官方记录核对、补全后，再放入自己的引用库。
- **使用 Markdown：** [Pandoc 引用指南](https://pandoc.org/MANUAL.html#citations)说明如何配合引用数据与样式生成文稿。阅读笔记保留证据位置，文稿中只引用已核查的来源。

按最终文稿格式选择一种写作路线即可。引用库保存可核查的书目信息，笔记保存自己的理解；不要让一段 AI 生成的总结成为没有原文位置的引用依据。

## 一条可执行的 AI agent 研究路线

1. **定义问题。** 写下想比较的任务、指标与约束，例如“低资源语音识别中，参数高效微调是否能减少训练成本”。先选一至三篇最相关的论文。
2. **建立来源清单。** 保存官方页面、版本、可得全文和引用记录；可将本站导出的 Markdown / CSV 作为候选与分类线索交给外部 agent。让它先列出实际读取了哪些材料；没有拿到原论文全文时，不要求它总结整篇实验。
3. **生成证据对照。** 请它按“结论 / 原文位置与短句 / 数据与设置 / 局限 / 待核查项”整理。不同数据划分、训练预算或指标定义的结果，不直接合成一个排名。
4. **自己核对关键项。** 回看主结果表、消融、失败条件和代码配置，标记哪些判断成立、哪些只是假设。AI 的比较表是草稿，确认后的证据才进入长期笔记。
5. **留下下一步。** 把一条可以执行的实验或待解决问题写进自己的笔记，并保存对应原文和证据位置。下次从未解决的问题继续。

若给 agent 写入笔记的权限，先指定一个暂存目录和允许修改的文件；让它提交比较草稿供你核对，再更新已确认笔记。原论文与引用库保留原始来源，减少重复同步和相互覆盖。本站的[使用方法](../about/#与-ai-agent-一起研究)介绍原文入口、引用复制与导读资料导出。
