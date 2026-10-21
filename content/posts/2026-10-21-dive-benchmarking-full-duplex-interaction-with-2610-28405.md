---
title: "DIVE: Benchmarking Full-Duplex Interaction with Visual Engagement in Continuous Streams"
date: 2026-10-21
draft: false
tags: [全双工语音交互, 基准设计, 基准测试, 数据集]
categories: [论文速递]
description: "DIVE 用 525 个带精确时间窗的连续音视频样本，把是否该说、何时说、说得对不对分开测，发现头部实时模型平均延迟已压到 1 秒内，但窗口命中率最高仅 53.77%，且在语音触发干预和说话中改口上最弱。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.28405"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "DIVE：在连续音视频流中测全双工视觉参与式交互"
paper_digest_original_title: "DIVE: Benchmarking Full-Duplex Interaction with Visual Engagement in Continuous Streams"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.28405v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.28405v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.28405v1.pdf"
paper_digest_primary_task: "全双工语音交互"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "DIVE 用 525 个带精确时间窗的连续音视频样本，把是否该说、何时说、说得对不对分开测，发现头部实时模型平均延迟已压到 1 秒内，但窗口命中率最高仅 53.77%，且在语音触发干预和说话中改口上最弱。"
paper_digest_authors: [{"affiliations":["Huazhong University of Science and Technology"],"name":"Yuhang Chen"},{"affiliations":["Huazhong University of Science and Technology"],"name":"Guangyue Liu"},{"affiliations":["Princeton University"],"name":"Shilong Liu"}]
paper_digest_abstract_sha256: "3d8f36a50a99e97609927ff4fa8d45ec3a25897ee0194f4962effc55b1608699"
paper_digest_sidecars: {"citation.bib":{"sha256":"2fe09cbaefb2c428c97a0378d32e2128b7f0cc77448fb4ee47cd59d2fab9639b","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-28405/citation.bib"},"citation.json":{"sha256":"29a86c004bd043af8f44dc56462bc56ea44df6bf3396712b768661bd83c4036f","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-28405/citation.json"},"citation.ris":{"sha256":"818c827f0f17e4051a9cf74ce2dbac7233c9e1bf61148540f6dacbcd3417dadf","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-28405/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"3f3dd1dbf45e0dd427b51a8a30c28511b7605735f969c9cb311e92d5597c44fd","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-28405/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "9d17061f9372b499c895843bc2d6264508677dfd5fab143a342ca18e5069d120"
paper_digest_api_reader_plan_sha256: "f450d6010ae7f74eb9a0a88cc0d6a891c7fa8986a6e986df6c8af8216e2048cc"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "27b23623e6e75a709fdb935d63056d7b2b82808ba73d3a3a34c2c31c412bafb8"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "db05afbd33377714ed0b6e671a2420f3e21abbed252abef4908f62e2100e2caf"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e0c524688c4f695d48de8efe087dc9ece32c675bca613e0005e20073ba29cf6e"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "d5b98216cb567a427bba2120ef17f6db72768a4623f1f8290eb1e3e074c31580"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 DIVE：在连续音视频流中测全双工视觉参与式交互

> 英文题目：*[DIVE: Benchmarking Full-Duplex Interaction with Visual Engagement in Continuous Streams](https://arxiv.org/abs/2610.28405v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-paper-digest-blog/papers/?concept=task.full-duplex)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)；[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Yuhang Chen：Huazhong University of Science and Technology
- Guangyue Liu：Huazhong University of Science and Technology
- Shilong Liu：Princeton University

## 📌 核心摘要

实时互动要求模型在音视频流不断到来时持续观察，判断与任务相关的视觉或语义线索是否已经充分，并在合适时机决定说话还是保持沉默，难点在于证据逐渐显现、说话与倾听可能重叠、问答交替出现。DIVE将该问题组织为主动干预、持续参与和交互协调三类场景共六个任务，覆盖及时干预、重复动作计数、重叠中改写回答与判断话语是否指向模型等要求。构建时先采集连续音视频流并保留时序，再由四名标注者合并标注最早可回应时刻与任务特定的有效回应窗口，窗口边界直接作为后一步划分回应的依据。评测时按流式输入协议送入原生音视频或视频加时间戳文本，程序先按开始时刻把模型回应分配至对应事件并划为提前、准时、迟到或缺失以计算窗口回应率与延迟，再由GPT-5.6 Terra对已分配回应做二值内容判定得到回应质量。在DIVE六任务的平均窗口回应率上，GPT-Realtime-2.1为53.77%，高于Qwen3.5-Omni-Plus-Realtime的41.43%和Gemini-3.1-Flash-Live的40.58%，居所评实时模型首位但仅略超半数。在同一DIVE六任务的平均响应延迟上，上述三者分别为0.831秒、0.735秒和0.879秒，均低于1秒并明显低于表现最好的开放模型Aero-Realtime-4B的2.567秒，说明延迟低不等于每次都能落在有效窗口内。其中语音驱动的主动干预最难，GPT-Realtime-2.1与Qwen3.5在该任务窗口回应率仅20.0%与19.8%，重叠中改写正在进行的回答也持续偏弱。作者承认未覆盖工具调用等智能体行为，样本时长有限，长程记忆与视觉输入的独立影响留待后续工作。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### DIVE 要解决的交互问题是什么

论文面对的输入是一段连续到来的音频加视频流，里面有人说话、做事、多人交谈，模型要全程在线。它要输出的不是离线看完再答一题，而是在流进行中决定是否开口、何时开口、说什么。必须保留的信息包括任务指令、随时间出现的视觉证据和对话上下文，以及每个要求回应事件的有效时间段。

已有离线视频理解只考看完后答对不对，流式问答开始考按时间戳感知，但多是在孤立窗口内答 1 次。语音全双工工作考抢话、打断等，但多只有音频。DIVE 要补的是带视觉参与的持续全双工：视觉线索直接决定何时以及如何回应，而且要在整个交互过程中多次决策。

**全双工交互 × 流式理解：** 流式理解指模型随视频音频到来持续感知并在时间戳上回答问题，重点是看懂；全双工交互指感知和生成在时间上重叠，模型要边听边看边说，还要自己决定说不说、何时说。DIVE 把两者结合：输入是连续流，输出也要在流中找时机，二者搭配才能测持续交互而不只是单次问答。

### 与离线、流式和全双工评测的关系

离线评测如 Video-MME、LVBench、MVBench 等只用视频，多为看完再答，不测并发感知与生成。流式评测如 StreamingBench、OVO-Bench、OmniMMI 等引入了视频线索和主动回应，但论文指出它们多在孤立回应窗口内考核，而不是持续交互。

纯语音全双工评测如 FD-Bench 系列、FLEXI 等多只有音频，考轮换、打断和状态跟踪。近期多模态全双工如 VideoFDB、Omni-DuplexEval、OmniInteract 开始加入视频和打断感知，但论文强调 DIVE 在任务层面补了风险干预、回应修正、重复动作计数和是否被点名要回应等显式要求。

下面这张原表比较了各评测是否支持双工、是否有视频线索决定回应时机，以及 6 个任务维度的覆盖，可见 DIVE 是唯一全覆盖的一行。表前先说明比较问题与公平条件。

### 六个任务如何分成三类场景

DIVE 把交互分成 3 类互补场景。主动干预考发现新出现的视觉或语义证据并及时出手；持续参与考长时间保持视觉上下文、跟踪重复动作并连答多个问题；交互协调考在重叠和多方说话中调整自己的说法，并判断当前话是不是说给自己。

6 个任务缩写是 VTI 视频及时干预、SPI 语音主动干预、CQI 连续问答交互、ORA 重叠回应自适应、AVAT 音视频被叫者跟踪、CAT 连续动作跟踪。VTI 看操作失误画面，SPI 听风险叙述，CAT 数重复动作，CQI 在视觉题与常识题间切换，ORA 在被打断时改口，AVAT 在多人对话中决定说或静默。

为理解规模，先看实例数与场景数的构成，ORA 和 AVAT 每个基础场景有 2 个条件变体，其余每场景一个实例。

### 评测框架把一次交互拆成哪三路

先看总体思路再看公式。每个标注交互槽位都给了期望决策是说还是静默，要求说时还给了有效回应窗口。模型输出被看成一系列带时间戳的回复，评测把每个要求回应的事件先做固定匹配，判断有没有分到回复，再看时间是否落在窗口内，最后另评内容质量。内容正确但时机错或不该说而说，都算交互不合适。

下图导读：左侧是模型输出文本与回复时刻，中间 3 路分别问答得好不好、该不该说、何时说，右侧汇成总体。请按此路径读图。

> **看图路径：** 1. 从左侧模型输出与回复时间出发，看三条支路如何分开；2. 看中间时间对齐支路的有效窗口与提前准时迟到划分；3. 看右侧三路分数如何汇成总体评分

[![原论文 Figure 4：Overview of the DIVE evaluation framework.](https://arxiv.org/html/2610.28405v1/evaluate.png)](https://arxiv.org/html/2610.28405v1/evaluate.png)

*论文图 4。原论文 Figure 4:：“Overview of the DIVE evaluation framework.”。*

该图确实可见三块：上方回答质量用多模态模型当裁判打分，中间交互决策分该说与该静默两路，下方时间对齐画了有效窗口与提前、准时、迟到。它帮助理解为何延迟低不等于窗口命中率高，因为 3 路是分开计分的。

模型输出序列记为回复文本与回复时刻的集合，有效窗口记为左闭右开区间，时间分类把每个要求事件唯一归入缺席、提前、准时、迟到，窗口响应率是准时数除以要求事件总数，回答质量是对已分配回复的二值标签做微平均。

\[R=\{r_{i}=(y_{i},\hat{t}_{i})\}_{i=1}^{N},\]

\[W_{j}=[t_{j}^{\mathrm{start}},t_{j}^{\mathrm{end}}).\]

\[z_{j}=\begin{cases}\mathrm{Missed},&m_{j}=0,\\ \mathrm{Early},&m_{j}=1\;\land\;\hat{t}_{j}<t_{j}^{\mathrm{start}},\\ \mathrm{On\mbox{-}Time},&m_{j}=1\;\land\;t_{j}^{\mathrm{start}}\leq\hat{t}_{j}<t_{j}^{\mathrm{end}},\\ \mathrm{Late},&m_{j}=1\;\land\;\hat{t}_{j}\geq t_{j}^{\mathrm{end}}.\end{cases}\]

\[\mathrm{WRR}=\frac{\sum_{j\in\mathcal{P}}[z_{j}=\mathrm{On\mbox{-}}Time]}{|\mathcal{P}|}.\]

\[S_{\mathrm{quality}}^{(\tau)}=\frac{\sum_{c\in\mathcal{C}_{\tau}}\sum_{k=1}^{n_{c}}v_{c,k}}{\sum_{c\in\mathcal{C}_{\tau}}n_{c}}.\]

**交互决策 × 时间对齐：** 交互决策指对每个标注槽位判断该说还是该静默，是否分配了一次模型回复；时间对齐指已分配的回复落在有效窗口之前、之内还是之后，分为提前、准时、迟到和缺席。决策管说不说，对齐管何时说，两者都不看内容对错，内容另由回答质量单独评。

| Offline Benchmarks |  |  |  |  |
| --- | --- | --- | --- | --- |
| MVBench Li et al. (2024) | V | ✗ | ✗ | ✗ |
| StreamingBench Lin et al. (2026b) | V, A | ✗ | ✓ | ✓ |
| OmniInteract Lu et al. (2026b) | V, A | ✓ | ✓ | ✓ |
| DIVE | V, A | ✓ | ✓ | ✓ |

该表对比了离线、在线流式和全双工 3 类评测的行，DIVE 行在双工、视频线索和 6 个任务列上均为肯定，而其他行多有缺失。限制是它只表示覆盖有无，不表示同等难度或同等数据量，不能直接读成性能胜负。

### 主动干预的输入与时机如何标注

视频及时干预用第一人称 procedural 数据集改建，包括 PIE-V、MATT、Ego-EXTRA 和 CaptainCook4D 等，模型在活动开始前收到持续指令，要在视觉证据足够时介入。人工额外标了错误最早在视觉上可辨认的时刻，作为干预计时参考，窗口是从错误发生到错误动作完成。

语音主动干预从 LLaVAShield 和 LlamaPIE 改建并加手写案例，把不安全情境转成自然口语叙述，部分配用 Wan 3.0 生成的视频。风险随音视频线索逐步揭示，窗口是说话人两句相关话语之间的间隙，从前一句结束到后一句开始。

读图说明：下面看主动干预的两行胶片示例，重点看打断与介入标记的位置与箭头方向，共 30 字以上导读已在此段给出。

> **看图路径：** 1. 先看上半做饭胶片：指令在开头，两个提醒分别指向哪段画面；2. 再看下半登山对话：打断标记与介入标记谁先谁后；3. 对比两行中模型是在说话中途插入还是在间隙回应

[![原论文 Figure 1：Examples of the tasks in Proactive Intervention.](https://arxiv.org/html/2610.28405v1/data1.png)](https://arxiv.org/html/2610.28405v1/data1.png)

*论文图 1。原论文 Figure 1:：“Examples of the tasks in Proactive Intervention.”。*

该图上半是做饭：开头有看着我做、错了就说的指令，中段提醒没洗生菜，末段提醒拿错食材；下半是母子登山咨询，问装备时被打断，模型插入年龄风险提醒，最后用户说山不高、图示问者再叮嘱照顾母亲。这说明干预不是答题，而是中途插入，且触发点由画面或话语推进决定。

**视觉及时干预 × 语音主动干预：** 视觉及时干预指从第一人称操作视频中发现 procedural 错误并在错误动作完成前提醒，触发证据主要在画面；语音主动干预指从逐步展开的口语叙述加生成视频中发现风险并警告，触发证据随话语推进。两者都是主动干预，但证据模态和窗口定义不同，正好对照视觉线索和语音语义谁更难把握。

### 持续参与为什么要反复输出

连续动作跟踪用 RepCount、Multi-RepCount 和 CPR-rac 等重复动作数据改建，把重复级标注转成时间对齐的计数交互。模型收到每完成 1 次就数 1 次的持续指令，要求在每次目标动作完成时报数，2 次之间保持静默，考持续视觉跟踪与精确报时。CAT 的最早可报时刻取 4 位标注者的算术平均。

连续问答交互从 Live-Aid 改建并加手写案例，每段交替出现视觉 grounding 问题与不依赖视频的常识问题，部分视频用 Wan 3.0 生成。模型要在看画面答题与一般推理之间动态切换，窗口从本问题结束到下一问题结束。

读图说明：下面看持续参与的计数行与问答行，注意静默与发言交替以及视觉与独立标记的切换。

> **看图路径：** 1. 看上半计数行：红色计数与灰色静默如何交替；2. 看下半问答行：视觉问题与独立问题如何交错出现；3. 注意每个问题下方是否都有一次独立回答

[![原论文 Figure 2：Examples of the tasks in Continuous Engagement.](https://arxiv.org/html/2610.28405v1/data2.png)](https://arxiv.org/html/2610.28405v1/data2.png)

*论文图 2。原论文 Figure 2:：“Examples of the tasks in Continuous Engagement. `<Visual.>` indicates visually grounded queries, while `<Independent.>` indicates general queries independent of the visual content.”。*

该图上半是举杆练习，开头要求每完成 1 次数 1 次，下方交替出现静默与报 1、2、3；下半是七连问，最高峰、右手红布、红绿灯、拳击、最富的人、最大国家、手势 2 交替出现，分别标独立或视觉。这说明模型不能只答 1 次，要全程跟踪并多次在正确时刻说话。

**主动干预 × 持续参与：** 主动干预指在错误或风险证据刚够时就打断或提醒，考的是发现苗头和把握时机；持续参与指在长时间过程中反复计数、连答多个问题，考的是保持视觉记忆和多次输出。两者分工不同：前者是一次关键时刻的判断，后者是多次事件的跟踪，合起来覆盖点状及时性和长程持续性。

### 重叠与多方时模型如何协调

重叠回应自适应从 EchoChain 和 HumDial-FDBench 的打断与状态更新改写，把打断改成有意义的纠正、新约束或上下文更新，并加入视觉相关信息再配生成视频。模型要在自己说话的同时继续感知新到上下文，并按新信息修正正在进行的回答，窗口从需要回应的信息在视频中完整可得时开始，到视频中人物自己做出反应时结束。

音视频被叫者跟踪从 Speak or Stay Silent、When2Speak 等多方对话资源改建，加手工视觉线索，并纳入 Multi-TPC 和 EasyCom 的自然多方视频。模型要结合对话上下文与注视、说话人朝向等判断当前话是否说给自己，在话语间隙决定说或静默，要求回应槽的窗口是 2 人话语之间的间隙。

读图说明：下面看交互协调的两行，重点看打断后回答如何改写，以及多方对话中模型何时静默何时接话。

> **看图路径：** 1. 看上半哑铃行：用户补充肩膀不适时模型原回答发生了什么；2. 看下半多人行：指向模型的箭头与指向他人的箭头如何区分；3. 注意底部静默段与模型发言段的切换位置

[![原论文 Figure 3：Example of each task in Interaction Coordination.](https://arxiv.org/html/2610.28405v1/data3.png)](https://arxiv.org/html/2610.28405v1/data3.png)

*论文图 3。原论文 Figure 3:：“Example of each task in Interaction Coordination. `<Silence.>` indicates that the model remains silent.”。*

该图上半是哑铃卧推，原回答讲背部稳定、慢放，到用户补充右肩不适被打断，后续改为减重减幅度、不适加重就停；下半是 David、John 与模型 Paul 的多方介绍，他人互聊时模型静默，被点名问职业时才答程序员。这说明协调包括说话中改口和判断是否被点名两件事。

### 本篇没有训练模型，数据与标注如何构造

本篇是评测论文，没有训练或微调任何被测模型，也就没有梯度更新、参数冻结或优化器设置可讲。实际执行的计算是数据构造、人工标注与裁判打分 3 类，前一步的产物直接作为后一步的输入来用。

构造上复用现有视频、对话与重复动作资源做改写与重配音，不足部分用生成模型补视频、用人工写案例补风险与问答。

具体是视频及时干预沿用第一视角操作数据集的错误定位，语音主动干预由安全对话资源转写为口语叙述并对含视觉线索的场景补配视频，连续动作计数沿用重复计数数据集的重复级标注改写为按次回应，连续问答沿用连续问答资源并区分视觉相关与视觉无关问题，重叠回应改写沿用中断与状态更新对话并补充视觉相关信息，多方指向沿用多方对话资源并补充注视与朝向等视觉线索。

生成视频部分原文明确使用 Wan 3.0，人工补写主要用于风险案例、问答场景与视觉线索，构造完成后进入标注环节。

标注上 4 位标注者独立标最早可回应点与任务窗口，连续动作计数的参考时间点取 4 人标注的算术平均，视频及时干预标错误最早可见点，其他任务按话语间隙或信息可得区间定窗口。窗口的起点与终点由各任务的交互要求确定，例如语音干预取说话人相邻两句话之间的间隙，问答取本问结束到下问结束之间，多方指向取他人话语结束到下一话语开始之间。标注产生的窗口与预期说或静默决定再进入评测，固定事件匹配先把模型回应分配到需要回应的事件，不看内容与时间，分配到的回应才进入时间对齐与内容质量判断，漏分配的事件记为缺席。

质量评用 GPT-5.6 Terra 按任务定制提示做二值判断，只评已分配回复的内容，不含时机。每个任务有各自的裁判提示，依据该事件的指令、参考要求与适用上下文判定是否完成核心纠错、风险提醒、当前问题作答、更新后作答、会话动作或计数报告，无分配回应的事件不计入该质量平均，是否缺席与是否准时由另外两个维度单独评价。

缺口是原文未报告标注一致性数值、窗口长度分布与裁判与人工的一致率，这些在复现时需要自行补测，不能从模型名猜测。

### 测了哪些模型与输入条件

原生音视频模型保留原音频与视频流，走各自流式或全双工推理，包括 DuplexOmni、Aero Realtime、MiniCPM-o 4.5、Qwen3-Omni、Qwen3.5-Omni-Plus-Realtime、Gemini 3.1 Flash Live 和 GPT-Realtime-2.1 等。无原生音频的流式视觉模型保留视频、把音频换成按原说话时间线逐步揭示的时间戳文本，包括 JoyAI-VL-Interaction、Mage-VL、MOSS-VL-Realtime 和 StreamingVLM 等，两类输入设置结果分开报告，视频、指令与时间参考保持相同。

指标方向是窗口响应率越高越好，回答质量越高越好，延迟越小越好，延迟相对最早可回应时刻测量。平均是六任务无加权平均。质量分已乘 100 便于阅读。

下面先看规模表，它说明 ORA 和 AVAT 为何实例多：每个基础场景有 2 个条件。

| 任务 | 基础场景数 | 评估实例数 |
| --- | --- | --- |
| ORA | 56 | 112 |
| AVAT | 56 | 112 |
| 全部合计 | 413 | 525 |

该表只列原文有连续原句支撑的行，VTI、SPI、CQI、CAT 的细分未列，因为缺乏逐字覆盖。它提示总样本有限且任务不均衡，跨任务平均时小任务权重被放大，解读时要注意。

### 延迟低为何不等于窗口命中率高

比较问题是同为实时模型，在连续流中能否在标注窗口内出手。公平条件是同一批视频、指令与时间参考，原生组走原生音视频，文本替代组走视频加逐步文本，两组分开比。指标是窗口响应率，越高越好。

| 模型 | 平均窗口响应率 | VTI | SPI |
| --- | --- | --- | --- |
| GPT-Realtime-2.1 | 53.77% | 100.0% | 20.0% |
| Qwen3.5-Omni-Plus-Realtime | 41.43% | 100.0% | 19.8% |

该表显示头部三家平均延迟已在 1 秒内，但平均窗口命中率最高仅 53.77%，其余在 40% 左右。反例是 VTI 上两家达 100.0%，SPI 上却只有 20.0% 和 19.8%，而 SPI 上最好的 MiniCPM-o 4.5 也只有 24.8%。这说明动得快不等于动得准，语音驱动的主动干预是特别难的设置。限制是窗口定义偏严格，提前也算未命中，文本替代组的输入条件不同，不能直接跨组排胜负。

**窗口响应率 × 响应延迟：** 窗口响应率指在要求回复的事件集合中，首次分配回复的起始时刻落在标注窗口内的比例，分母是事件数；响应延迟指该起始时刻减去窗口起点，只在有回复的窗口上报告。延迟低只说明动得快，窗口响应率高才说明动得准，两者搭配才能看出快而不准的问题。

### 回答质量与延迟的实际数字

比较问题是内容质量与快慢能否兼得。质量是已分配回复的微平均二值分，越高越好；延迟是相对最早可回应点的秒数，越小越好。条件与上一节相同。

| 模型 | 平均质量分 | 平均延迟 |
| --- | --- | --- |
| Gemini-3.1-Flash-Live | 56.38 | 低于 1 秒 |
| GPT-Realtime-2.1 | 51.93 | 低于 1 秒 |
| Qwen3.5-Omni-Plus-Realtime | 47.07 | 低于 1 秒 |
| Mage-VL | 24.23 | 7.171 秒 |
| Aero-Realtime-4B | 5.63 | 2.567 秒 |

该表显示质量上 Gemini 最高 56.38，其次 GPT 系 51.93，开源中 Mage-VL 最高 24.23，与头部差距明显。延迟上三家头部均低于 1 秒，而开源最好的 Aero 仍要 2.567 秒，不少模型超过 5 秒。Qwen3-Omni 在 VTI 上 1.155 秒而 MOSS 达 9.578 秒，说明不仅要认出事件，还要判断证据何时足够。限制是质量由模型裁判打分，未报告与人工一致性，且只评有回复的事件，缺席不计入质量而计入决策与对齐。

未胜出项是开源模型在延迟和质量上双弱，Aero 延迟相对最好但质量仅 5.63，说明实时理解本身不保证及时恰当的交互。

### 哪类任务最暴露短板

把同一模型的跨任务表现并排看，可见 ORA 普遍低于 VTI 和 SPI。原文指出得分最高的三家在 ORA 上的质量都低于各自在 VTI 和 SPI 上的质量，说明在说话过程中吸收新信息并修正说法仍然困难。这不是单纯感知问题，而是边说边听、即时改口的协调问题。

另 1 对照是 CQI 中视觉题与独立题交替，模型要在 grounding 与常识推理间切换；CAT 要求动作间静默、完成瞬间报数，任何提前、滞后或漏报都会同时影响决策、对齐与质量。3 类细节共同指向持续交互比单次问答更难，因为错误会在时间轴上传播。

尚待评测的是更长时程的记忆累积与工具调用，当前样本时长有限，不能把结论推广到数十分钟以上的持续交互。

### 结论在什么条件下才成立

第一，样本量与时长有限，共 525 实例、413 基础场景，ORA 和 AVAT 各占 112 实例，CAT 仅 37 实例左右的规模，平均数易受小任务波动影响，且不能代表长时记忆与跨长程依赖。

第二，输入条件分两组，原生音视频与视频加逐步文本不同，跨组数字不可比；生成视频与改写对话带来分布偏移，结论只在该构造分布内成立。

第三，质量依赖 LLM 裁判，提示按任务定制但未报告裁判可靠性，自动分不等于人工评价；窗口边界由人工定，提前也算未命中，对窗口严格程度敏感。论文也明确未评智能体工具调用与受控的视觉消融，这些留待后续。

### 复现第一步做什么

先按附录的流式输入协议搭两条管线：原生组透传原音频视频与时间序，文本组保留视频、按原说话时间线逐步揭示文本，不提前暴露未来话语。任务指令、时间参考保持两组一致。

再实现 3 路评分：按固定匹配把模型回复分配到要求事件，算决策与四分类时间对齐及窗口响应率，再用同一裁判模型与任务提示对已分配回复打二值质量分。关键是记录每个回复在输出通道上的可观测起始时刻，并用最早可回应点算延迟。

资源现状是本次未发现来源绑定且完成验证的资源，不得声称代码模型数据已公开。复现需自行按论文列出的数据源与窗口规则重建，缺失的标注一致性与裁判一致性要自行补测。

### 什么时候值得尝试 DIVE

当你的系统已能离线看懂视频、但要在做饭指导、运动陪练、多人会议等连续场景中边看边说时，DIVE 值得用来查漏。它把该不该说、何时说、说得对不对分开，能定位是过于沉默、抢话太早，还是窗口内但内容错。

可复述的关键步骤是：连续音视频流进、持续指令先行、证据出现后在窗口内回应、缺席与错时另计、内容另由裁判打分。六任务三场景覆盖干预、持续跟踪与协调，规模为 525 实例。

不要夸大其价值：它不测工具调用与长时记忆，窗口与裁判都带人工主观，头部模型的 sub-second 延迟只在该分布与该窗口定义下成立。下一步最需要补的是更长时程、裁判与人工对齐，以及视觉与并发感知的受控对比。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.28405v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-21 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-21/)
