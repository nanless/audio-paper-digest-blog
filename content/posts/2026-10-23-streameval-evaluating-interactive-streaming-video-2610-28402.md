---
title: "StreamEval: Evaluating Interactive Streaming Video Generation Models"
date: 2026-10-23
draft: false
tags: [视频生成, 基准设计, 基准测试, 音视频, 流式处理]
categories: [论文速递]
description: "StreamEval 用 300 个定时交互用例考查边生成边响应能力，发现好看和像本人不等于听指令，最高请求执行分也只有 36.90、25.93 和 15.00，而完整编辑还要同时付出保源和保时的代价。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.28402"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "边播边改：交互式流视频生成的统一评测"
paper_digest_original_title: "StreamEval: Evaluating Interactive Streaming Video Generation Models"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.28402"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.28402.pdf"
paper_digest_primary_task: "视频生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.video-generation","label":"视频生成"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"setting","id":"setting.streaming","label":"流式处理"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "StreamEval 用 300 个定时交互用例考查边生成边响应能力，发现好看和像本人不等于听指令，最高请求执行分也只有 36.90、25.93 和 15.00，而完整编辑还要同时付出保源和保时的代价。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"StreamEval Team"}]
paper_digest_abstract_sha256: "fbdda4cc6780b46ff43983ef1cc23d50dbcb3981db504572df93af1df84d2ca7"
paper_digest_sidecars: {"citation.bib":{"sha256":"21b1e3ffcb979cdf74406375142df19eb1e84421558b5ab1a31c7da240054572","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-28402/citation.bib"},"citation.json":{"sha256":"2d7862c7a6f2bddb57a3de64c7b21a9d391d072f0de65949748a975466a40545","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-28402/citation.json"},"citation.ris":{"sha256":"8f496642d41b4cb4426f5557192c438b2b30deffd40b9abc36fac7b6c891ecf0","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-28402/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"0530ef9142d7d7304600dbe96d2eb3821f0d9c8483ea12734dee7eff5df679b0","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-28402/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "47093bf14feb616dc46fc1261e066886134408ee3ce064795088b1006d4444e3"
paper_digest_api_reader_plan_sha256: "479c30c01972b9a7f33432fc9ef01c8011b7ac08b9c6583c55e8cc4464ebceb2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "6a9c0e3eb4f0472ef56ed22183eed0abac65a69d68af52a1dc28407ca285ed18"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "3509fee0a28cd227de49d9f9746ae74767c996c3330c0dd89c6a288d6b5b0786"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "4fc04d9219eb627ba6f092c38ba34f51d902198fde94e6acb4a34dcd84a97c0e"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "04354a609ca0df1bbb96df342a49f1c1307d2a796d9aa8967f13c10e2569d482"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 边播边改：交互式流视频生成的统一评测

> 英文题目：*[StreamEval: Evaluating Interactive Streaming Video Generation Models](https://arxiv.org/abs/2610.28402)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[视频生成](/audio-paper-digest-blog/papers/?concept=task.video-generation)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- StreamEval Team：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是边播边生成的交互视频系统，困难在于新请求在会话中途到达，系统要在规定时间改变指定内容，同时不破坏无关人物、场景和源视频运动。StreamEval为此构造300个15–300 s的脚本化会话，每个用例打包初始人像或源视频、按时间释放的语音与文本及图像输入，以及在检查点要建立、保留、取消或恢复的状态要求。评测沿一个样本推进时，调度器按会话时钟释放输入并推进编辑源，记录的输出先切成小段由评委检查缺陷与时间一致性，再按截止时间与验证窗口把结构化观察转成0–100分，最后对重复、测试用例和时长分层取平均。在60个化身表演用例的三次重复评测中，Vidu S2 Avatar的Following（跟随，规定动作按时执行的比例）为36.90，高于LiveTalk的16.59，分数越高越好。在60个文本控制世界生成用例的三次重复评测中，Krea Realtime的Following为25.93，高于Reward Forcing的23.33，分数越高越好。在3个被报告模型的参考编辑比较中，Vidu S2 Editing的Edit Success（编辑成功，完整编辑合约满足的比例）为15.00，高于JoyAI-Video-Edit的8.89，分数越高越好，说明按时执行请求仍是主要瓶颈；该结论仅适用于脚本化输入与固定截止时间和验证窗口，未验证自然对话、更长会话与开放环境的表现。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/StreamEval/StreamEval> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/datasets/StreamEval/StreamEval> — 链接可访问（HTTP 200）

- 第三方资源：<https://streameval.ai> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么要测边播边交互

这篇论文研究的不是一次生成一段视频，而是流式生成中持续接受新输入。系统一边输出视频，一边在会话时钟推进中收到语音、文字或参考图，必须在规定时间改变规定内容，同时保住不该动的人设、历史、场景和源视频运动。

对刚进入音频和视觉交叉方向的研究生，可以把任务想成直播导播：镜头不能停，耳机里不断来新指令，既要切到新画面，又不能把背景和人物关系切乱。论文把这种能力拆成 4 个评价维度：任务执行、状态一致性、视觉保真、音画协调，再按任务细化为 10 个 0 到 100 分的指标。

理解后文的关键是输入是增量到达的。测试用例会预先写好时间线，调度器按时间放出控制，编辑类任务的源视频也在同一时钟上推进。模型看不到未来，只能对已到达的输入做反应，缺输出或不支持的操作按零分记，所有计划好的机会都保留在分母里。

### 已有评测覆盖了什么

论文把相关评测分成几条线。视觉质量和时间行为有 VBench 和 EvalCrafter，组合对齐有 T2V-CompBench。世界模型的多轮控制有 WBench 和 WBench-Editing，流式音视频更新有 StreamAV-Bench，长源编辑有 LongV2VBench，会话式非语言线索有 VideoFDB。

这些工作各管一段。VBench 类更关心单段好看不好看，WBench 类关心生成世界里的连续操作，StreamAV-Bench 关心提示更新和状态复用，VideoFDB 关心对话中的感知和非语言生成。StreamEval 的定位是把化身对话、规定表演、世界生成、指令编辑和参考编辑装进同一套会话协议，每个用例都写清何时变、变什么、保什么。

论文也明确了边界。它不声称覆盖 VideoFDB 那种对实时用户视频流的感知要求，对话是编排好的语音输入，表演是规定动作。比较时长时它指出 300 秒编辑用例比 LongV2VBench 的 60 秒长，世界生成超出 StreamAV-Bench 的 180 秒滚动，但较长化身序列在 GenBench 中已有出现，它的贡献是跨任务的均衡多时长覆盖。

### 输入是什么输出是什么

每个测试用例是一次 15 到 300 秒的交互会话。它包含初始素材、按时到达的多模态请求，以及明确的状态要求。初始素材可能是人像、场景或一段源视频，请求可能是用户语音、文字控制或外观参考图，要求则写明要建立、保留、取消或恢复什么。

以编辑为例，一个用例可能先改一个目标，再引入第二个目标并保留第一个，然后更新其中一个属性，最后移除编辑回到同时刻的源画面。化身对话则要求结合事实回答、跨轮记住状态、处理打断和轮替。世界生成要求对物体、动作、相机或空间状态做连续控制，同时不破坏无关内容。

输出是一段持续生成的视频加同步音频。评分不只看好不好看，还要看每个控制点是否按时命中、非目标是否被污染、移除后是否回到推进中的源状态。所有用例共 300 个，每任务 60 个，按 15、30、60、120 和 300 秒各 12 个均衡分布，一次跑完约 525 分钟的主动流生成时长，不含搭建和响应尾巴。

### 五个任务如何分工

论文设了 5 个任务。数字人对话要求对用户语音做上下文恰当的回应，保持人设和对话史。化身表演要求按给定台词说话，并按时做出视线、表情、姿态或手势。世界生成要求按后续控制演化场景，保持无关内容和连续性。指令编辑用文字指定对推进源视频的改动，参考编辑用图像指定想要的外观，两者都要改目标、保非目标、保源运动，移除时恢复到同时刻源状态。

下图把 3 类外观放在一起，帮助建立直觉：左栏是化身的两类交互，中栏是世界场景加递进控制，右栏是共享源视频加随时间变化的编辑指定，读图时先分栏再看时间线。

> **看图路径：** 1. 先看左中右三栏分别对应化身交互、世界生成和实时编辑；2. 再看表演栏从 1.2 s 到 12.5 s 的抬手变化与世界栏 0 s 和 10 s 的递进指令；3. 最后看右侧共享源视频下文字指令与参考图如何随时间切换目标外观

[![原论文 Figure 1：StreamEval overview. Five tasks span avatar interaction, world generation, and real-time video…](https://arxiv.org/html/2610.28402v1/01_overview.png)](https://arxiv.org/html/2610.28402v1/01_overview.png)

*论文图 1。原论文 Figure 1:：“StreamEval overview. Five tasks span avatar interaction, world generation, and real-time video editing.”。*

从图中可以看到，表演任务给出抬起右手这类明确动作和前后帧时间，世界任务在 0 秒让纸船靠近码头、10 秒让相机向右跟随，编辑任务对同一源视频在 0 秒和 5 秒切换目标颜色或参考外观。这种按时间释放输入、按检查点验收的设计贯穿全部 300 个用例。

### 用例如何构造出来

构造分两大步。先由 Qwen3.8-Max 起草会话目标、定时控制、受保护属性和预期结果，再由人工编排的 oracle 写清每个检查点要建立、保留、取消或恢复什么。媒体输入再对照这些要求筛选和修改。

人像和视觉参考由 GPT-Image-2 和 Qwen-Image 合成，描绘原创合成成年人或风格化虚构角色。用户语音和规定台词由 Qwen3.5-Omni 合成，对话还配了带背景噪声和混响的录音。编辑源是连续无循环、无变速、无拼接的许可实拍、动画和基准生成场景，目标区域在计划控制时间戳上做时间定位。

下图展示了输入合成后按模态筛查的流程，右侧给了一个手部缺陷被标记后重生成的实例，重点看筛查分支和重检箭头。

> **看图路径：** 1. 沿左侧从场景编排到多模态输入再到右侧筛查看构造流水线；2. 注意语音匹配要求 WER 不超过 0.25 的标注；3. 对比下部被标记手部缺陷图与再生后保留图的方框位置

[![原论文 Figure 2：Benchmark construction and verification.](https://arxiv.org/html/2610.28402v1/03_construction.png)](https://arxiv.org/html/2610.28402v1/03_construction.png)

*论文图 2。原论文 Figure 2:：“Benchmark construction and verification.”。*

筛查包括媒体可解码和时长、文件一致性、事件与评分要求的一致性。合成语音经 Qwen3-ASR 转写，要求归一化词错误率至多 0.25。图像由 Qwen3.8-Max 检查主体清晰度和解剖渲染缺陷，编辑源检查切镜、冻结段和不合适目标，未通过者重做后走同样筛查。

**数字人对话 × 化身表演：** 数字人对话指系统听到用户语音后决定说什么并保持人设和历史，化身表演指按给定台词和动作指令渲染出视线、表情和手势，前者考查理解和回应，后者考查按时做出规定动作，两者共用化身外观但评价重点不同。

### 指标如何把执行和保持分开

10 个指标按 4 维组织。任务执行包括 Dialogue、Following、Edit Success，状态一致性包括 Stability、Continuity、Preservation，视觉保真包括 Quality、Identity、Reference，音画协调是 A-V Sync。每个任务只用其中适用的子集，适用性在看输出前固定。

Dialogue 统计满足回答、内容、会话和时序要求的计划轮次占比。表演和世界生成的 Following 统计在线控制中在指定目标上做出请求操作的占比，世界生成要求目标可见的每 1 帧都完整或部分呈现请求结果。指令编辑的 Following 只看操作和目标是否对上，Edit Success 再要求范围、激活状态、截止时间、持久性和受保护内容全部满足。参考编辑的 Reference 在参考图生效的检查点核对声明的外观属性。

Quality 对 5 秒片段按缺陷清单打 5 到 1 档再映射到 100 分制，Stability 统计无严重时间缺陷、至多一个轻微时间缺陷且 Quality 至少 3 分的时长占比，因此高 Stability 必须同时有可接受的画质。Identity 用 2 名判别模型比较初始人像与采样帧，取较低评级，允许授权的表情姿态裁剪光照变化。A-V Sync 要求必需语音事件的唇动与音频包络相关至少 0.3，并在系统级偏移的自助置信区间内判定。

**任务执行 × 状态一致性：** 任务执行指新请求是否在规定时间对规定目标生效，状态一致性指不受影响的内容和已建立的编辑是否被保留，前者看变化是否发生，后者看不该变的地方是否守住，两者组合才能判断长会话是否可控。

**Following × Edit Success：** Following 只检查这次操作和目标是否对上，允许部分外观匹配，Edit Success 检查完整编辑合同，包括范围、生效时限、持久性和受保护内容，两者搭配区分了做了动作和完整做对的区别。

### 没有训练时实际做了什么计算

这是 1 篇基准论文，没有训练新的生成模型，训练节要讲清的是用例与判分的构造计算。模型辅助编排产生时间线和 oracle 后，真正的计算量在自动化生产判分：视觉批评判分输出结构化缺陷类别、严重度和支撑帧时间戳，身份比对输出特征变化等级，固定规则再结合每个用例的截止时间和验证窗口把观察转成单次运行分数。

判分本身经过校准。用正负探针要求每类至多 5% 误接受、10% 误拒绝、10% 未决。未决判断按区间处理，对下端贡献 0 分、对上端贡献 100 分，表格报告下端。身份取 2 名判分中的较低者，以防同风格替换蒙混过关。

聚合先对每个用例做三次重复平均，再在每个时长层内对用例平均，最后对 5 个时长层平均。记单次得分为 s，时长层集合为 D，层内适用用例集合为 C，则指标聚合为先重复后用例后时长层的等权平均。

\[S_{m}=\frac{1}{|\mathcal{D}|}\sum_{d\in\mathcal{D}}\frac{1}{|\mathcal{C}_{d,m}|}\sum_{c\in\mathcal{C}_{d,m}}\frac{1}{3}\sum_{r=1}^{3}s_{c,r,m}.\]

这个顺序意味着长会话与短会话权重相等，不是按时长加权。所有计划控制机会保留在分母，包括未触发的触发器和超出供应商会话上限的控制，因此做不出和超时都会拉低分数。

### 评了哪些模型与怎么算总分

论文报告 37 个不同模型、47 个任务配置。1 个任务配置指一个模型在 1 个任务上按指定输入路线加适配器跑一次，同一模型跑多任务只计一次模型数。化身侧包括 Vidu S2 Avatar、Tavus CVI Full、LiveAvatar FULL、Runway Characters、MuseTalk 等，世界侧包括 MemFlow、Rolling Forcing、Krea Realtime 等，编辑侧报告 Vidu S2 Editing、JoyAI-Video-Edit 等。编辑表只展示 Overall 至少 5 的配置，子集在评测后选定。

任务配置数为数字人对话 15 个、化身表演 7 个、世界生成 17 个其中 12 个文本控制加 5 个图像条件、指令编辑 5 个、参考编辑 3 个。每模型每用例跑三次，世界生成文本与图像条件一起排名，同一模型有两种输入时用文本条件结果代表。

任务总分先算 Quality-Overall，即适用指标的等权平均。

\[\operatorname{QOverall}_{t,k}=\frac{1}{|\mathcal{M}_{t,k}|}\sum_{m\in\mathcal{M}_{t,k}}S_{t,k,m}.\]

化身两任务再加定制奖励：支持自定义化身加 5 分，只提供固定化身加 0 分，表中记为 Custom.，与 Q-Overall 之和记为 Overall 并用于排序，其他任务 Overall 等于 Q-Overall。

\[\operatorname{Overall}_{t,k}=\operatorname{QOverall}_{t,k}+B_{t,k},\qquad B_{t,k}=\begin{cases}5,&\text{avatar task with custom-avatar support},\\ 0,&\text{otherwise}.\end{cases}\]

因此化身排名分可达 105 分，奖励描述的是接口能力，不改变底层指标分。固定化身系统的 Identity 对其自身首帧评分并计入总分，表中名字置灰以示输入条件不同。

### 对话任务谁在什么上占优

对话的比较问题是同一管线下谁同时做到说对话、保身份、对口型和画面稳定，分数越高越好，Overall 为排序分。下表只列论文点名的头部和固定化身对照，完整 15 个配置见原文。

| 模型条件 | Quality | Dialogue | Identity | Q-Overall | Overall |
| --- | --- | --- | --- | --- | --- |
| Vidu S2 Avatar 自定义 | 96.78 | 75.29 | 90.12 | 88.98 | 93.98 |
| AVTR-1 自定义 | 82.97 | 54.97 | 88.54 | 79.14 | 84.14 |
| Tavus CVI Full 固定 | 75.04 | 73.91 | 89.89 | 86.65 | 86.65 |
| LiveAvatar FULL 固定 | 76.27 | 61.37 | 87.70 | 65.07 | 65.07 |

表中 Vidu S2 Avatar 在自定义组 Overall 最高，同时领跑 Quality、Dialogue 和 Identity。固定组中 Tavus CVI Full 的 Q-Overall 和 Identity 高于 LiveAvatar FULL，且 A-V Sync 达 94.44，对话 73.91 也仅次于 Vidu S2 Avatar。但固定组的 Identity 是对自身首帧打分，与自定义组对初始人像打分条件不同，不能直接理解为同一保身份能力，反例是 MuseTalk 1.5 空有 Quality 95.34 和 Stability 97.11，A-V Sync 只有 38.09，说明好看稳定不会自动带来对口型和会话执行。

下图以参考编辑用例 234 为例，说明记录用例如何经视觉语言模型观察再经固定规则得到单次分数，最后按重复、条件和时长层聚合，读图时先看输入再看中间观察最后看聚合。

> **看图路径：** 1. 从左栏参考图更新和源帧看到评测输入；2. 看中栏 Quality 与 Stability 三帧采样和 Reference 与 Preservation 对照；3. 沿右栏从 3 次重复到 5 个时长层再到 Overall 理解聚合顺序

[![原论文 Figure 4：Evaluation workflow. Recorded inputs and output frames from reference-editing case 234 illustrate…](https://arxiv.org/html/2610.28402v1/04_evaluation_framework.png)](https://arxiv.org/html/2610.28402v1/04_evaluation_framework.png)

*论文图 4。原论文 Figure 4:：“Evaluation workflow. Recorded inputs and output frames from reference-editing case 234 illustrate quality, stability, reference, and preservation checks.”。*

上图左侧给出参考图更新和同时刻源帧，中间用 3 帧采样做 Quality 与 Stability 检查，并对照 Reference 与 Preservation，右侧按 3 次重复、条件、5 个时长层顺序平均得到 Overall。读懂这条链，才能理解后文数字都是下端估计且长短会话等权。

### 表演与世界生成为何执行分低

表演的比较问题是在规定台词下谁能按时做出视线表情姿态手势，世界任务是谁能让场景按在线控制演化又不断裂，Following 越高越好。下表取论文强调的头部，完整 7 个表演配置见原文。

| 模型 | Quality | A-V Sync | Stability | Following | Identity | Overall |
| --- | --- | --- | --- | --- | --- | --- |
| Vidu S2 Avatar 表演 | 63.68 | 99.60 | 97.25 | 36.90 | 86.12 | 81.71 |
| LiveTalk 1.3B 表演 | 71.27 | 86.44 | 96.06 | 16.59 | 83.89 | 75.85 |

表中 Vidu S2 Avatar 领跑 A-V Sync、Stability、Identity 和 Following，LiveTalk 1.3B 的 Quality 最高但 Following 只有 16.59。7 个模型 Following 跨度为 6.37 到 36.90，即使 Identity 超 80、Stability 超 96 的系统也做不对定时动作，这是论文说的首要挑战，结论只在三次重复平均和固定截止时间下成立。

世界侧的比较问题相同，Overall 为四指标等权平均。下表取 Overall 前三加画质最高者，分数越高越好。

| 模型 | Overall | Following |
| --- | --- | --- |
| MemFlow | 33.36 | 22.59 |
| Rolling Forcing | 33.01 | 17.78 |
| Krea Realtime | 31.61 | 25.93 |
| HappyOyster 1.0 Adventure | 30.84 | 5.56 |

表中 MemFlow Overall 最高，Krea Realtime 的 Following 最高，但 HappyOyster 空有 Quality 58.34 和 Stability 56.67，Following 仅 5.56、Continuity 仅 2.78。排序随维度变化，说明视觉合成、时间连续和在线响应是 3 组不同要求，单看画质会误判可控性。

**Quality × Stability：** Quality 评价五秒片段的画面缺陷等级，Stability 统计满足无严重时间缺陷且 Quality 至少 3 分的时长占比，后者以 Quality 为门槛，两者组合把单帧好看和跨帧不闪不崩区分开。

### 指令编辑改对与保住有多难

指令编辑的比较问题是谁能在推进的源视频上按时改目标、留住首改、按要求恢复，同时不污染非目标，分数越高越好。下表取 2 名领先者。

| 模型 | Following | Edit Success | Quality | Stability | Preservation | Overall |
| --- | --- | --- | --- | --- | --- | --- |
| Vidu S2 Editing 指令 | 72.10 | 57.20 | 22.99 | 13.94 | 60.93 | 45.43 |
| JoyAI-Video-Edit 指令 | 63.89 | 43.52 | 11.63 | 9.57 | 83.33 | 42.39 |

表中 Vidu S2 Editing 领跑 Following、Edit Success、Quality 和 Stability，JoyAI-Video-Edit 领跑 Preservation。但即使最高分，Quality 仅 22.99、Stability 仅 13.94 仍然很低，说明直播改写时很难持续输出干净稳定的画面。Following 与 Edit Success 的落差说明做了操作不等于完整做对，后者还要满足时限、持久和保护内容。

参考编辑的比较问题相同，但外观指定换成图像。下表取论文报告的三系统对照，分数越高越好。

| 模型 | Quality | Stability | Reference | Edit Success | Preservation | Overall |
| --- | --- | --- | --- | --- | --- | --- |
| Vidu S2 Editing 参考 | 37.72 | 46.74 | 31.20 | 15.00 | 64.44 | 39.02 |
| JoyAI-Video-Edit 参考 | 6.54 | 3.46 | 26.11 | 8.89 | 26.67 | 14.33 |
| XMax X2.0 参考 | 8.20 | 7.51 | 20.56 | 1.11 | 10.00 | 9.47 |

表中 Vidu S2 Editing 包揽五项最高，但 Edit Success 只有 15.00。JoyAI-Video-Edit 和 XMax X2.0 的 Reference 超 20 分，却因 Preservation 和 Stability 低而 Edit Success 只有 8.89 和 1.11。这正是论文摘要强调的结论：好看和保住不等于完整做对，参考外观采纳、源内容保留和完整合同是三件事。

**Preservation × Reference：** Reference 衡量目标区域是否像当前生效的参考图，Preservation 衡量非目标内容和源视频运动是否保留，前者要求积极改变，后者要求克制不动，参考编辑必须同时满足这对矛盾要求。

### 录像实例如何暴露保留与采纳的分化

为理解参考编辑低分的原因，看一个披风用例的录像过程很有帮助。任务要求预载红色天鹅绒参考 A，10 秒切换到金色缎面 B，20 秒要求移除，观察点是 B 阶段目标是否变色、源场景是否保持。

> **看图路径：** 1. 对照顶部三阶段：预载参考 A、10 s 更新到 B、20 s 移除；2. 比较中行源帧与下行输出帧在 14.53 s 和 19.26 s 的披风区域；3. 注意放大框中保留的灰色与要求的金色缎面的差异

[![原论文 Figure 5：Reference editing under changing inputs.](https://arxiv.org/html/2610.28402v1/05_editing_case.png)](https://arxiv.org/html/2610.28402v1/05_editing_case.png)

*论文图 5。原论文 Figure 5:：“Reference editing under changing inputs.”。*

图中可见 3 阶段布局：左侧预载 A 并给出 9.10 s 的源与输出对照，中间在 10 s 更新到 B 并给出 14.53 s 和 19.26 s 两组对照，右侧在 20 s 要求移除并给出 24.03 s 对照。两路 B 阶段输出的放大框都保留了原来的灰色披风，没有换成金色缎面，但底层集市场景得以保留。这种保留源与采纳参考的分化，正好对应表中 Reference 超 20 分而 Edit Success 不足 9 分的落差，说明模型宁可不动也不愿冒险改错。

### 换一种输入条件会发生什么

论文没有做去掉某模块的消融，这里的条件变化指输入路线不同。数字人对话有配对的文本对话衍生，把音频轮次换成编排文本但保留同一源家族身份，用于对照语音带来的难度。世界生成有文本控制和图像条件两种路线，后者增加外观条件，同一模型有两种结果时排名用文本条件代表。

化身定制本身也是一种条件。支持自定义加 5 分，不支持加 0 分，固定化身的 Identity 改对自身首帧打分。这意味着跨定制条件的 Overall 差 5 分来自接口，不是画面能力，读表时要先看 Custom. 列。

编辑侧的条件是参考切换、多目标保留和遮挡后重现。论文指出后续可扩展更广身份环境、全局重置和并发编辑下的选择性恢复，说明当前用例已包含修复、多目标更新和遮挡后重现等较难交互，但尚未覆盖所有恢复语义。结论的适用范围因此限于已编排的建立、更新、切换和移除 4 类操作。

### 结论在什么条件下才成立

首先是判分依赖自动生产判分。虽然有正负探针把误接受、误拒绝和未决控制在 5%、10% 和 10% 以内，视觉批评仍可能漏检或误检，未决按区间下端报告，表格是保守估计。论文结尾也提出下一步收集人工成对判断并与任务细则对齐，说明当前还没有报告人与自动分的一致性。

其次是聚合方式。5 个时长层等权，300 秒与 15 秒权重相同，三次重复平均后再平均，未触发和超限控制仍计分母。这对长会话的漂移更敏感，但也放大了稀疏长用例的方差，不能理解为按播放时长加权的体验分。

第三是模型覆盖。编辑表只展示 Overall 至少 5 的配置，总数是报告子集，不是全市场排名。固定与自定义化身、文本与图像条件的结果不宜直接跨条件比胜负。源视频来自许可实拍、动画和基准生成场景，人像为合成成年人或风格化角色，结论不能推广到未覆盖的身份、环境和语言。

### 复现第一步做什么

复现从拿用例和时间线开始。论文给出 300 个用例、每任务 60 个、每时长 12 个、共 1347 个计划在线事件和 240 个独立源家族的构成，编辑源逐段无循环推进。需要按会话时钟释放输入，让被测系统在不知道未来的情况下持续生成，并记录输出帧与同时刻源帧的配对。

判分要复刻固定规则。Quality 按五档映射，Stability 以 Quality 为门槛，Identity 取两判分较低者，A-V Sync 在 10 毫秒步长、正负 1000 毫秒搜索内估计系统偏移并检查置信区间是否落在正负 200 毫秒内。缺输出和不支持操作记零，未决按下端记。聚合严格按重复、层内用例、时长层的顺序等权平均。

论文正文提到了排行榜、代码库和基准数据的链接，本次收到的来源信息仅能证明这些链接指向第三方页面可达，不能据此断定作者资源当前可用或已公开。复现前需要分别核对用例版本哈希、输入输出接口和每段源视频的许可归属，再谈运行效果。

### 什么时候值得尝试还缺什么验证

当场景确实是边播边改时值得尝试：需要化身边说边做规定动作，需要世界按新控制演化，需要在推进的源视频上做建立、切换和移除。这套基准的价值是把何时变和保什么写成可执行的检查点，而不是只看片段好不好看。

使用时先看执行分再看画质分。如果 Following 和 Edit Success 很低，再高的 Quality 和 Identity 也不能说明可部署。表演和世界生成重点看 Following 与 Continuity 的组合，编辑重点看 Reference 与 Preservation 是否同时达标，以及移除后是否回到同时刻源。

还缺的验证是人工对齐、延迟成本和长时稳定性。论文未报告端到端延迟、帧率和推理开销，训练资源与部署成本要分开测。下一步应补人工成对判断与自动分的一致性、不同时长层的分层表现，以及并发编辑下选择性恢复等更细的恢复语义，再谈向全模态实时交互的推广。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.28402)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-23 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-23/)
