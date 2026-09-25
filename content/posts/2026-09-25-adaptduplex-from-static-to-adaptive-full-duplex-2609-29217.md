---
title: "AdaptDuplex: from static to adaptive full-duplex spoken dialogue"
date: 2026-09-25
draft: false
tags: [全双工语音交互, 课程学习, 流式处理, 实时处理, 语音]
categories: [论文速递]
description: "AdaptDuplex 针对全双工对话中时机与认知负荷逐窗变化的问题，把窗口时长与动作组合都做成显式词元决策并配三阶段课程训练，在 FDB 与 HumDial-FDBench 上取得更低响应延迟与更高终分，代价是仅覆盖中英、三档窗口与最多四路并发外部推理。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.29217"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "从固定窗口到按窗决策：AdaptDuplex 如何把每次听与说都写成显式词元"
paper_digest_original_title: "AdaptDuplex: from static to adaptive full-duplex spoken dialogue"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.29217"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.29217.pdf"
paper_digest_primary_task: "全双工语音交互"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"method","id":"method.curriculum","label":"课程学习"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"setting","id":"setting.real-time","label":"实时处理"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "课程学习"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "AdaptDuplex 针对全双工对话中时机与认知负荷逐窗变化的问题，把窗口时长与动作组合都做成显式词元决策并配三阶段课程训练，在 FDB 与 HumDial-FDBench 上取得更低响应延迟与更高终分，代价是仅覆盖中英、三档窗口与最多四路并发外部推理。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhiyang Zhou"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yingxin Shang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhou Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hongwei Cai"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Weixu Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shuran Zhou"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shuofeng Zhao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wenke Fan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qingxiang Guo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Dawei Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lin Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yang Song"}]
paper_digest_abstract_sha256: "289e7258fb1449ceb52cf314d756e235d5f06e15f7bfae8ffc4ddd7f79138d15"
paper_digest_sidecars: {"citation.bib":{"sha256":"a9d408dc0a9a7a0ca5044e8962b6ed9486d2ab30a2cd172a6d1d4dc7ccb11101","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-29217/citation.bib"},"citation.json":{"sha256":"ab63c30dc4a59c759c55ec8ef72182f6786311ceb6b52ee26c5161b444521be8","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-29217/citation.json"},"citation.ris":{"sha256":"d4b96eac4d5b2f00e9d2cd084725feec8975d337a195f7e484a14836f277fe1a","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-29217/citation.ris"},"rethink-context.json":{"sha256":"e5d75b7d0d8143d5164fad1cbe1949d6ac345354cb6b98f15172f7606db8d4e3","url":"/audio-paper-digest-blog/data/papers/2026-09-25/2609-29217/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "eac3339d79e44fb4a966b493ca49f31819b9033cf45a776a1763caa04a6fb98a"
paper_digest_api_reader_plan_sha256: "801a766963e0c17b6272295e1129ad85c28581d215c9903140171d22c9eeb993"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "49bf00172c908154701c5b28cbe31d56c6aeaaa2a2e1cdde23deb90b8bc38e61"
paper_digest_api_reader_source_table_count: 6
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "2adb691741d98ac5bf9d378df764ae976c46fafe753b9644ce320569f0b06a42"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "fd72fe703347b4d3b3261a31796511f5a7cb470d27c263d438323ba0f9070a5e"
paper_digest_api_reader_author_count: 12
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "737b626f21d02d505c496e0274d28bc964c4629d3bf46713b3fbc43d028ae390"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 从固定窗口到按窗决策：AdaptDuplex 如何把每次听与说都写成显式词元

> 英文题目：*[AdaptDuplex: from static to adaptive full-duplex spoken dialogue](https://arxiv.org/abs/2609.29217)*

> 标签：#全双工语音交互 | #课程学习 | #流式处理 | #实时处理 | #语音
>
> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.1/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Zhiyang Zhou：机构信息未在 arXiv HTML 中可靠披露
- Yingxin Shang：机构信息未在 arXiv HTML 中可靠披露
- Zhou Wang：机构信息未在 arXiv HTML 中可靠披露
- Hongwei Cai：机构信息未在 arXiv HTML 中可靠披露
- Weixu Wang：机构信息未在 arXiv HTML 中可靠披露
- Shuran Zhou：机构信息未在 arXiv HTML 中可靠披露
- Shuofeng Zhao：机构信息未在 arXiv HTML 中可靠披露
- Wenke Fan：机构信息未在 arXiv HTML 中可靠披露
- Qingxiang Guo：机构信息未在 arXiv HTML 中可靠披露
- Dawei Yang：机构信息未在 arXiv HTML 中可靠披露
- Lin Yang：机构信息未在 arXiv HTML 中可靠披露
- Yang Song：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

全双工语音交互要求模型在持续监听用户音频的同时生成语音，并在打断、附和、背景干扰下做出亚秒级轮次决策。AdaptDuplex以Qwen3-Omni-30B-A3B-Instruct为基座，将Thinker从按轮生成完整回复改为按窗口持续做交互决策，Talker则改为轮内先入先出队列条件下的声学合成。核心设计围绕显式决策令牌展开：紧凑规范序列统一听说控制、动作、文本与下一窗口预测，有界文本超前解决双流速率错位，动态窗口在0.48 s、0.64 s、0.96 s三档中选择时间粒度，分级动作在直接响应之外允许记忆巩固与最多4路外部推理非阻塞共存。训练按双工难度分三阶段课程化Thinker，再做Talker冻结训练、联合微调与GRPO增量优化。在HumDial-FDBench基准下，AdaptDuplex的Final得分为72.9，高于DuplexOmni的Final得分57.3。结论目前仅在中英文合成与脚本化实录上验证，连续窗口、多方对话与视觉输入尚未覆盖，延迟对比未做硬件对齐，训练与部署成本未披露。该结论的适用边界受限于中英文合成与脚本化实录，连续窗口与视觉多方外推尚未验证，训练使用8张NVIDIA H100 GPU，跨硬件的延迟对比仍受限。

## 🔗 开源与复现资源

- 复现相关资源：<https://adaptduplex.github.io/appendix> → <https://adaptduplex.github.io/appendix/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？要解决的实时对话难题是什么？

本文输入是连续语音对话流，目标是在对方还在说话时同时听与说，并在亚秒级完成打断、回应、等待或继续说。读者对象是刚进入语音与音乐音频领域的研究生，需要先建立的概念是全双工：不是一问一答的轮流制，而是听与说两条流在时间上重叠。白话说，模型要一边收音一边发声，还要判断此刻是该插话、附和还是闭嘴。英文对应 full-duplex spoken dialogue。

输出是两类行为：一是交互决策，何时说与何时听；二是语音本身，何时结束与说什么内容。必须保留的信息是评价围绕抢占率、行为分与响应延迟展开，且延迟与决策准确性常互相牵制。本文随后按学习依赖展开：先讲已有路线为何固定，再讲把决策词元化的方法全景，然后拆协议、窗口与动作、训练与实验，最后用结果与反证收束。

### 已有路线为何停在固定工作点？

已有专用双工模型证明了边听边说可行，强大的全模态预训练模型提供了理解与生成起点。但论文指出，DuplexOmni 与 MiniCPM-o 4.5 都固定窗口时长，前者只允许单路外部推理且无中间认知巩固，后者只提供二元交互控制。也就是说，时间粒度与可用动作在设计时写死，协议要么随决策增多而变重，要么太稀疏而装不下更丰富的策略。

另一些工作分别探索过状态词元、隐式认知与交互策略优化，但把协议依从、交互控制与语音生成 1 次性抛给预训练模型会纠缠学习目标，而仅按数据规模或可训练模块分阶段并不能对应双工行为的难度排序。因此本文选择从 Qwen3-Omni 初始化，不从零学习双工能力，重点补一个系统化的自适应决策机制。

### 自适应到底要自适应什么？

论文把自适应拆成两个运行时问题。第一是时间粒度：短窗反应快但声学上下文少，长窗看得多但回应慢，固定窗只能取一个全局折中。第二是动作组合：直接回应与外部推理的二选一忽略了中间的认知巩固操作，而外部推理本身也可能是多路并发、有成功有失败。

举例说明，例子：用户说到一半停顿，模型若用长窗会等太久，若用短窗可能误判为结束；此时理想行为是短窗先给附和，同时后台启动一路检索而不阻塞说话。例子仅用于理解，不代表论文报告了该样本的数值。问题形式化后，方法需要让窗口时长可选、动作可组合，且都能在推理时不改权重地调节。

### 三层协同的全景：协议、机制与训练如何分工？

AdaptDuplex 继承 Qwen3-Omni 的 Thinker-Talker 架构，Thinker 是思考与决策器，Talker 是语音合成器。关键改动是 Thinker 不再每轮只生成一个完整回复，而是在整个对话 episode 中逐窗做交互决策，回复文本只是可选输出；Talker 仍做合成，但条件来源改变。

3 层围绕一个原则协同：每个行为决策都是显式词元。协议层提供紧凑规范序列，把决策写成词元；机制层提供动态窗口与分层动作，让决策随上下文变化；训练层用课程把这些行为按难度引入。显式词元的好处是推理时可用对数偏置即 logits bias 直接调大或调小某决策的倾向，无需重新训练。

下图是全文的方法总览，建议先看整体再读后两节的细节拆解。图前导读已说明窗口、队列与推理后端的位置关系，重点是理解一条交织词元流如何同时承载自适应窗口、双流对齐与分层推理。

> **看图路径：** 1. 沿横轴从左到右跟踪 W_k-1 到 W_k+2 的窗口带与听说标注变化；2. 对比 Thinker 行与 Talker 行在说话开始前后何时活跃与何时暂停；3. 观察文本先进先出队列中有界前置箭头把文本推向 earlier 窗的位置；4. 查看底部 L1 记忆后端与 L2 多路请求如何以工具块回到 Thinker

[![原论文 Figure 1：AdaptDuplex overview: one interleaved token protocol carries adaptive windows, dual-stream…](https://arxiv.org/html/2609.29217v1/overview.svg)](https://arxiv.org/html/2609.29217v1/overview.svg)

*论文图 1。原论文 Figure 1:：“AdaptDuplex overview: one interleaved token protocol carries adaptive windows, dual-stream alignment, and tiered reasoning.”。*

该图示意了音频与视频输入沿时间进入，Thinker 每窗输出控制、动作与文本，文本经先进先出队列送入 Talker，Talker 在说话轮内持续生成声码词元并在轮末重置。图中窗口带、词元位置与音视频交织均为示意，真实含义是决策词元允许推理时用偏置控制。底部还画出记忆后端与多路推理后端如何以完整语义结果块返回 Thinker，这是后文分层动作的基础。

### 规范序列协议：每窗按什么固定顺序写决策？

每个窗口被组织成一个规范序列，用单元分隔符包围。Thinker 先消费因果可用的环境，然后按固定顺序输出：听或说的控制、可能为空的动作序列、可选的助手文本、下一窗口词元与边界词元。结束说话轮的窗口在块结束前先输出轮结束词元。完整文法在附录中，本文只讲可复述的动作流程。

沿一个样本走完流程：当输出说决策开启一轮说话，Talker 从环境历史经该单元做 1 次预填充，不再重新收集用户轮片段；后续单元只到 Thinker，不打断当前 Talker。预填充 1 次后，Talker 自回归生成声码词元，每步从轮内先进先出队列弹出一份文本条件，队列由 Thinker 产出时入队，空位用填充词元补齐。队列中文可跨窗携带但不跨说话轮，轮结束时入队语音结束符，待剩余语音说完 Talker 预测声码结束并清空轮内状态。

**规范序列协议 × 双流对齐：** 规范序列协议负责把每窗的听说控制、动作、文本、下窗决策按固定顺序序列化，降低结构开销并暴露可控词元；双流对齐负责协调 Thinker 文本产出速率与 Talker 声学产出速率，通过 turn 内先进先出队列与有界文本前置实现流式对齐；二者搭配是因为协议只定位置不定时钟，而对齐用队列与前置补上跨速率的缓冲，组合后文本可跨窗暂存但不跨说话轮泄漏。

协议还有三点性质。紧凑序列化是用固定顺序的紧凑词元替代每窗元数据的 JSON 式写法，减少结构解码开销。双流对齐是用队列协调两者不同词元速率，训练时再用有界文本前置把有序文本前缀移到同轮内更早的相邻窗，只改变每窗分配，不改变展平后的轮文本、控制决策、声码目标与未来环境的因果边界。运行时可控是因为决策是显式词元，加性偏置即可调行为。

**Thinker × Talker：** Thinker 负责逐窗消费因果可用的环境并输出听说决策、动作与可选回复文本；Talker 负责在说话轮内自回归生成声码词元并按队列弹出文本条件；二者搭配的理由是把交互决策与语音合成解耦，Thinker 每窗都可决策而 Talker 一轮只做 1 次预填充后持续说话，组合意义是听与说可并行且互不阻塞。

### 自适应机制：窗口时长与动作如何按需组合？

时间粒度上，模型在第 k 窗末仅用因果多模态上下文预测下一窗时长，离散三档为短中长，对应时长与帧数见下表。中间档是证据不足时的回退，也是首窗初值。弱标签按时间戳、声学与语义边界及重叠标签的优先级规则生成，阈值与平局处理在附录。

动作组合上，直接回应记为 L0，即空动作序列；另有两类可独立选择、可同窗共存的非阻塞动作。L1 输出记忆词元经记忆后端巩固状态，后续单元可见更新而不暂停当前回应。L2 用带编号的启动与取消词元管理最多 4 路在途请求，编号指运行时槽位而非请求类别，启动在空闲槽开异步请求，取消仅在该槽有请求时有效。有效结果与显式后端失败在单元边界以损失屏蔽的完整工具块重入 Thinker，取消、过期或无返回则不注入任何内容，失败与无返回都不阻塞当前回应。

**动态窗口预测 × 条件动作组合：** 动态窗口预测负责在每窗末从因果多模态上下文中选择下一窗为短中长三档之一，解决延迟与上下文的权衡；条件动作组合负责在直接回应之外按需叠加记忆巩固与外部推理请求，解决认知负荷变化；二者搭配是因为时间粒度决定看多长，而动作组合决定想多深，组合后模型可同时做到快窗快反应与慢思考不阻塞。

**记忆巩固 × 多路外部推理：** 记忆巩固即 L1 动作负责发射记忆词元经记忆后端更新状态，供后续窗可见而不暂停当前回应；多路外部推理即 L2 动作负责用带编号槽位管理最多 4 路异步大模型或工具请求，结果以工具块回注；二者搭配是因为内部状态压缩与外部知识查询是两类不同延迟来源，组合后允许同窗内共存且失败或无返回都不阻塞当前说话。

下表整理窗口 3 档的时长与帧数对应关系，阅读时注意这是运行时可选集合，不是固定配置。表前已交代预测只用因果上下文，表后将解释短窗与长窗在延迟与保持能力上的取舍。

| 窗档 | 下一窗时长 | 对应 Mimi 帧数 | 备注 |
| --- | --- | --- | --- |
| short | 0.48 s | 6 | 最快但上下文少 |
| mid | 0.64 s | 8 | 回退与首窗初值 |
| long | 0.96 s | 12 | 最慢但上下文多 |

该表说明动态策略的搜索空间很小但覆盖了延迟与上下文的两端，实验将验证动态选择能否同时接近短窗延迟与长窗保持能力，而固定任一档都会牺牲另一端。

### 训练分几步？每步冻结谁、监督谁？

为避免目标纠缠，训练沿两个正交轴组织：按数据难度训练 Thinker，按可训练模块组织 Thinker 与 Talker 堆栈。课程 Thinker 微调分 3 个阶段：第一阶段在固定中窗的轮流对话上只学规范协议，无窗口词元监督；第二阶段加入附和、短暂停与简单打断并激活动态窗口预测；第 3 阶段引入完整双工数据与记忆及带编号启动取消词元，要求组合交互与外部编排动作。训练数据由自动化多智能体管线生成。

然后 Talker 单训冻结 Thinker，在先进先出文本条件与有界文本前置下训练 Talker；最后小规模高质量双工对话上联合微调校准全部件。策略优化即 GRPO 从联合微调 checkpoint 继续，作为增量细化交互策略，不改架构，奖励设计在附录。

**课程 Thinker 微调 × 联合微调：** 课程 Thinker 微调负责按双工难度 3 阶段先学协议、再学打断与窗口预测、最后学记忆与外部编排，避免 1 次暴露全部目标；联合微调负责在 Talker 单训后用少量高质量双工对话端到端校准两器；二者搭配是因为先解耦学决策再联合学校准，组合意义是减少协议依从、交互控制与语音生成的目标纠缠。

需如实说明的缺项是原文未给出每阶段学习率、批量与冻结梯度路径的完整细节，复现时应以附录与代码为准，不从模型名推定实现。课程与混合单阶段对照的差异将在消融节用数字验证。

### 用什么数据、和谁比、在什么条件下测？

模型从 Qwen3-Omni-30B-A3B-Instruct 初始化，在 8 块 NVIDIA H100 上训练。有界文本前置用 3 种前置调度：对齐即无前瞻的强制对齐窗，固定前置即内部全部取最大前置，随机前置即有界随机游走；除特别说明默认 Talker 来自随机前置的 Talker 单训。解码遵循官方策略，Thinker 贪心，Talker 采样。

课程与混合单阶段对照用内部合成全双工语料，规模与组成见下表，混合对照在实例数与每实例曝光上与课程匹配。联合微调用 DuplexDrama 较小高质量子集继续。评价用 FDB 及其 v1.5 扩展与真人录制的中英 HumDial-FDBench，均走各自基准的打分与转写协议。序列化与窗口策略重放共享 24 条流式记录，文本前置条件共享话语、Thinker 文本与窗口调度，自然度用官方 UTMOSv2。

| 语料与训练条件 | 规模 | 说明 |
| --- | --- | --- |
| 合成全双工对话数 | 765,424 | 课程与混合对照共享 |
| 总时长 | 17,259 h | 其中助手语音 10,857 h |
| 初始化与硬件 | 8 NVIDIA H100 GPUs | 起始为 Qwen3-Omni-30B-A3B-Instruct |

该表用于核对数据量级与硬件预算，说明主结果的训练起点与对照的公平性：混合对照不是数据更少，而是单阶段无课程。局限是合成语料细节与联合子集筛选规则需查附录。

### 主结果：交互判断与响应时机是否同时变好？

比较对象包括原生全双工基线 DuplexOmni、MiniCPM-o 4.5 与带语音端点检测和打断取消的级联参考 Qwen3-Omni 加 VAD。指标方向需先明确：抢占率越低越好表示不该抢时不抢，平滑轮与打断抢占率越高越好，延迟越低越好，行为分越高越好。表前公平条件是同基准打分协议，表后将指出未胜出项。

| 协议开销条件 | 每窗词元数 | 协议占比 |
| --- | --- | --- |
| JSON 式 | 26.440 | 93.88% |
| 规范序列 | 5.867 | 68.70% |

该表显示规范序列化把每窗词元大幅压低并清零结构非法，同时解码分位延迟明显下降，支持紧凑协议降低开销的判断。但这只是效率证据，不直接证明交互更准，需结合下表看行为与延迟。

| 文本前置调度 | UTMOSv2 | 有效结束率 |
| --- | --- | --- |
| Aligned | 2.90 | 50.00% |
| Fixed Ahead | 3.55 | 84.75% |
| Random Ahead | 3.65 | 86.37% |

该表显示任何前瞻都显著优于无前瞻对齐，随机前置为默认最优，自然度、错误率与有效结束率三者一致。但需注意这是固定 Thinker 文本与窗口调度下只换 Talker 调度的对照，增益归于对齐而非决策。

主交互上论文报告：在 FDB-v1 上 AdaptDuplex 在仅需附和时更少抢轮，在 FDB-v1.5 附和与背景音重叠下更可靠恢复，且所有报告场景响应延迟亚秒并在 v1.5 各场景最低；在 FDB-v1 打断上同时更准更快。真人录制上取得相比双工模型的最高终分，中文与英文延迟均快于两个双工基线，但级联参考在打断准确上仍更高而延迟超过 8.5 秒，说明准确与延迟不可只看一端。

### 窗口、偏置与训练配方各自贡献了什么？代价是什么？

本节测 3 个可变因素。窗口策略固定为短中长任一档与动态策略对比，说话偏置通过加偏置调听说倾向，训练配方对比混合单阶段、课程默认、加联合与再加 GRPO。所有行均为端到端自由运行，行为用场景映射，放弃指打断停止延迟，保持指三非打断场景宏平均停止延迟，响应指四场景宏平均响应延迟。

| 变体 | 打断行为 | 附和行为 | 放弃延迟 | 响应延迟 |
| --- | --- | --- | --- | --- |
| Default 动态 | 0.79 | 0.55 | 1.32 s | 0.37 s |

该表显示固定短窗最快但保持与附和偏低，固定长窗保持与背景音好但最慢，动态策略以接近短窗的延迟拿到接近长窗的附和，且在与他人交谈上单项最优。把说话偏置从 0.5 调到 2.0 时打断上升而延迟缩短，但附和与他人交谈下降，证明推理时不重训即可移动听说权衡，但收益伴随明确代价。

| 训练配方 | 打断行为 | 附和行为 | 放弃延迟 | 响应延迟 |
| --- | --- | --- | --- | --- |
| Default 课程 | 0.79 | 0.55 | 1.32 s | 0.37 s |

该表显示课程相对匹配曝光的混合单阶段贡献了大部分增益，尤其延迟大幅下降且四场景行为全升；联合与 GRPO 多为单调小增，他人交谈、放弃与响应更清晰，但附和在联合后不变、背景音在 GRPO 后略降，说明并非每项都单调。分层动作上稀疏记忆 F1 与动作精确匹配等另有报告，并发至少两路时精确匹配下跌且非法率近翻倍，标出多路控制的当前边界。

### 哪些边界尚未验证？

论文在结论中明确三项局限：评价目前仅覆盖中文与英文，窗口控制器只在三档离散时长中选择而非连续 horizon，外部推理限于最多 4 路并发。未来工作提到连续窗口预测、更广多语评价、自适应并发上限、视觉输入与多方对话。

从证据看还需补的验证包括：附录中的窗口策略矩阵与分阶段结果未在正文展开，并发压力下的非法动作率升高尚未给出修复；记忆与推理的利用能力是用金上下文隔离测的，端到端错误传播的影响需另测。缺失这些不是技术错误，但在选型时不应把趋势推广到每组每步都成立，也不应承诺未测量的误判率与部署成本已改善。

### 复现先做什么？代码与附录当前可达吗？

复现建议按学习依赖排序：先用固定中窗复现规范序列的解析与非法率，再切动态三档复现延迟与保持的权衡，然后在金前缀下复现记忆与启动取消的 F1 与精确匹配，最后才跑端到端自由运行。关键超参数与信息条件是三档时长与帧数、槽位编号范围、队列跨窗不跨轮、工具块损失屏蔽与金上下文隔离，这些决定了对照是否公平。

资源状态方面，本次收到的官方附录链接状态为可用，状态码 200，可写当前可用。附录承载完整文法、弱标签优先级规则、奖励设计与分语言结束分布，正文多处将细节指向该附录，因此复现前应先拉取附录固定版本并记录提交哈希。若未来链接不可达，应明确写本次未能确认可达，不臆测内容。

### 何时值得尝试 AdaptDuplex 式做法？

当任务需要亚秒级边听边说且时机与认知负荷逐窗变化时，值得尝试把每个行为决策写成显式词元，再用偏置在推理时调听说倾向的做法。其前提是有预训练全模态起点与可构造的双工难度课程，否则 1 次性暴露全部目标易纠缠。

不值得盲目照搬的情形包括：只需轮流问答、无重叠与打断；只有单语以外的语种需求而未做多语验证；需要连续时长控制或超过 4 路并发。复述方法的最小闭环是：固定顺序的窗序列、轮内队列加有界前置、短中长三档预测、记忆与编号槽位的非阻塞组合、3 阶段课程加 Talker 单训加联合加 GRPO 增量。每步都应同时报告行为分与延迟，并保留未胜出的基线与反例。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2609.29217)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-25 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-25/)
