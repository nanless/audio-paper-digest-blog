---
title: "4DMemory: Benchmarking Long-Horizon Spatiotemporal Memory with Harness-Augmented Agents"
date: 2026-10-27
draft: false
tags: [音视频问答, 基准设计, 基准测试, 数据集, 检索增强]
categories: [论文速递]
description: "论文要解决跨数十到上百小时视频的细粒度时空推理问题，用与问题无关的持久记忆加按需检索和三类技能的 4DMemory Harness 把任务时长与模型原生窗口解耦，在 5214 题上最高联合成功率 77.79% 但分布式计数等仍是短板。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.32332"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "4DMemory：把上百小时视频变成可复用的长期时空记忆再推理"
paper_digest_original_title: "4DMemory: Benchmarking Long-Horizon Spatiotemporal Memory with Harness-Augmented Agents"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.32332v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.32332v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.32332v1.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.retrieval-augmented","label":"检索增强"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文要解决跨数十到上百小时视频的细粒度时空推理问题，用与问题无关的持久记忆加按需检索和三类技能的 4DMemory Harness 把任务时长与模型原生窗口解耦，在 5214 题上最高联合成功率 77.79% 但分布式计数等仍是短板。"
paper_digest_authors: [{"affiliations":["Nanyang Technological University"],"name":"Yanhao Jia"},{"affiliations":["Token Foundry, Alibaba"],"name":"Yi Zhu"},{"affiliations":["Token Foundry, Alibaba"],"name":"Yiran Zhong"},{"affiliations":["Token Foundry, Alibaba"],"name":"Weigao Sun"},{"affiliations":["Token Foundry, Alibaba"],"name":"Feida Zhu"},{"affiliations":["Token Foundry, Alibaba"],"name":"Pengkun Jiao"},{"affiliations":["The Chinese University of Hong Kong"],"name":"Sihan Yang"},{"affiliations":["Institute of Neuroscience, Chinese Academy of Sciences","University of Chinese Academy of Sciences"],"name":"Ming Ma"},{"affiliations":["Token Foundry, Alibaba"],"name":"Steven Hoi"},{"affiliations":["Nanyang Technological University"],"name":"Erik Cambria"}]
paper_digest_abstract_sha256: "2066e092a0c8aa009835d05db7da249ba6e32742f953a9213efb3f611afc5649"
paper_digest_sidecars: {"citation.bib":{"sha256":"de9463f583888fe9a69cc6d737d6ea4f15b82ba56f9e777388328e752579fc69","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32332/citation.bib"},"citation.json":{"sha256":"a0333dd2bad87b9c1ac2b86f381aba6bd18fb09a877bec505384cd0d642259bd","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32332/citation.json"},"citation.ris":{"sha256":"ae027939f12ccec3679f1c453fb40fec0a597a7575a990363d2c7352f408c358","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32332/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"d21a33ce6e96f1edf128f6dd8e69e83196f6185ee3828c97fa95eacb355b307e","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32332/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f6d13f4c6d306294a99babe256a494650860251eeea55de0f4a6d54039646a85"
paper_digest_api_reader_plan_sha256: "139aeaa0c9fd9270cdc6a9e0246ae4222b29b4ac1e80e1247bdbfbd9b5026407"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "c979ddca4c53f24678f1ddaee2cb3320209ecb93d757a480411a4fa4b0c30253"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "4d58a4a33c0955e296fe33134f15486a8c2f739a8c3900530a5025841b22b758"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "a5baf612314cbd680d44dc1660cba024ad3e485409c1da16e09c01f993f0cd57"
paper_digest_api_reader_author_count: 10
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "96c740d5da9674c14bb1e6c86b1ff083d9b21c03eb0065b9f2cf0de1b0cae355"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 4DMemory：把上百小时视频变成可复用的长期时空记忆再推理

> 英文题目：*[4DMemory: Benchmarking Long-Horizon Spatiotemporal Memory with Harness-Augmented Agents](https://arxiv.org/abs/2610.32332v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding) → [音视频问答](/audio-paper-digest-blog/papers/?concept=task.av-question-answering)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)；[检索增强](/audio-paper-digest-blog/papers/?concept=method.retrieval-augmented)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)；[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yanhao Jia：Nanyang Technological University
- Yi Zhu：Token Foundry, Alibaba
- Yiran Zhong：Token Foundry, Alibaba
- Weigao Sun：Token Foundry, Alibaba
- Feida Zhu：Token Foundry, Alibaba
- Pengkun Jiao：Token Foundry, Alibaba
- Sihan Yang：The Chinese University of Hong Kong
- Ming Ma：Institute of Neuroscience, Chinese Academy of Sciences；University of Chinese Academy of Sciences
- Steven Hoi：Token Foundry, Alibaba
- Erik Cambria：Nanyang Technological University

## 📌 核心摘要

任务要求在长达数十小时连续视频与多季电视剧上，把分散在远距离片段中的视觉、文本与时空证据联系起来作答，并满足取证与按序调用要求。难点在于原生上下文装不下密集视频证据，稀疏采样易丢细节，分散的计数、排序与状态变化需保留细粒度记忆。观察者先把长视频切成带时间戳和来源编号的结构化记录，存入与问题无关的持久记忆，形成可复用的证据库。提问时词频检索从该证据库选出12个种子单元并各扩一个同源时序邻居打包为检索文本，分数过低则改供均匀时序单元，推理者再对该检索文本发起追问并调用视觉定位与文本统计等专用工具补证据，最终只凭检索文本与工具结果作答而不读全量原始视频。与以往单视频一至两小时评测的时间跨度相比，本基准在同一时间跨度量表下单个问题最高绑定97.98小时，方向为高于既往评测，且评测以工具调用、按序执行与答对联合成功率为指标。在5214题三评判协议下独立视频时空任务联合准确率中，Muse-Spark-1.1为74.92%，Grok-4.6为74.97%，后者略高于前者。同一三评判协议下电视剧时空任务联合准确率中，GPT-5.6 Sol剧集范围为87.86%，季节范围降至38.98%，完整系列范围再降至12.50%，随范围扩大呈下降方向。结论仅适用于所用推理者加观察者加工具系统整体，不证明相对裸模型因果提升，且原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 长视频记忆要测什么：输入、目标与必须保留的信息

这篇论文研究的是长时域多模态记忆推理。输入是几十分钟到近 100 小时的有序源视频集合，包含画面帧、源音频、自动语音识别转录文本，电视剧还有场景摘要、说话人对话与话语级时间边界。目标是在给出问题与答案格式后，只看完整视频范围作答，输出可以是计数、排序、比较或趋势判断。需要保留的是实体、空间关系、状态与事件如何随时间演变，以及它们在原始时间轴上的位置，因为答案证据分散在相隔很远的时刻。

已有长视频评测多集中在 1 到 2 小时的单个视频，上下文窗口标称很长与有效视频上下文很长是两回事。密集视频会产生大量视觉标记，编码与注意力代价高，实际系统只能稀疏采样或压缩标记，细粒度证据可能在问题到来前丢失。强文本推理要转化为跨场景的视觉对齐与时间推理，还需要额外机制。这就是论文要补的缺口：单个问题可绑定超过 100 小时有序源视频，并要求多证据组合。

**LongVideo × 4DMemoryBench：** LongVideo 是约 887 小时的源视频集合，包含 1025 个独立网络视频和 402 集电视剧；4DMemoryBench 是在它之上构造的 5214 个问答对的评测集，LongVideo 提供可复用的时间线，4DMemoryBench 规定每个问题要绑定的视频范围、答案格式和私有证据，组合后才能测长时记忆与推理。

### 已有三条路线为何还不够：系统、模型与方法

原文把相关工作分成三层。系统层用检索增强、结构化时间与物体记忆、多粒度搜索或专家工具来迭代取证据；模型层靠长视频训练、每帧更紧凑的标记与显式时间编码扩大可视范围；方法层做自适应时空压缩、稀疏记忆与按查询分层计算。这些都能改善长程证据获取，但评测用的数据、接口与访问条件各有差异，基座能力、证据获取、记忆与最终推理的改进交织在一起，难以拆分。

更关键的是组件跨系统复用存在门槛。有的需要改动内部视觉标记流水线，有的工具协议是针对特定基座做后训练得到，与模型无关的插件形式不同。同时外部记忆与检索增强把瓶颈转移到存什么、压缩什么、何时更新与检索什么，视觉保真度在建记忆过程中可能受损。技能与工具的效果依赖任务与调度，工具目录变大时路由与参数 grounding 的难度上升。随任务时长与依赖深度增长，各步误差累积，长时系统的稳定性与可靠性仍在探索中。

### 任务形式：一个问题如何绑定有序视频集合

先看论文想让读者建立的直觉。顶部是一段跨越很长时间的影片示例，关键动作分散在不同时间点，问题问的是在某个锚点动作之后发生了什么。传统模型有效活动上下文有限，早先观察可能已在上下文之外，序列就不完整。4DMemory 智能体则先把观察编码存成持久记忆，提问时再检索相关证据并调用技能推理，用取回的时间戳证据支撑动作序列。

> **看图路径：** 1. 先看顶部胶片时间轴上分散的关键帧与任务问法；2. 再对比中间传统模型丢失早先证据与底部记忆加技能补齐证据的路径；3. 注意底部记忆框里保留的时间戳与技能库的三类工具

[![原论文 Figure 1：Motivation for 4DMemory Agent.](https://arxiv.org/html/2610.32332v1/fig1_motivation.png)](https://arxiv.org/html/2610.32332v1/fig1_motivation.png)

*论文图 1。原论文 Figure 1:：“Motivation for 4DMemory Agent. (a) Traditional models with limited active context may lose access to earlier observations, leaving relevant evidence unavailable for temporal…”。*

这张图可见上下两条路径的对比。上半传统模型用灰色渐隐的过去帧表示细节衰减，标注有限活动上下文与缺失证据；下半 4DMemory 智能体展示记忆框里 3 个带时间戳的缩略图、中间模型检索推理执行闭环与右侧技能库，最终给出有证据支撑的答案。它的教学作用是把长时任务的困难具体化为证据不在场，而是模型看不懂单帧之外的问题。

### 整体流程：先存与问题无关的记忆，再按问题检索推理

4DMemory Harness 遵循任务无关存储与目标导向召回。第一阶段在问题到达前进行，对长视频流做可复用的观察与存储，保留源时间戳；第二阶段问题到达，做问题条件检索与专门证据获取。推理时使用的材料为文本记忆与工具结果，完整原始视频历史留在存储侧，持久存储与原生窗口扩大、完整召回是不同概念。这种解耦让任务时长与基座模型的原生窗口脱钩。

论文用一个条目公式定义评测项，它要表达每个问题包含标识、问题、答案格式、有序源视频集合，以及私有的参考答案、支撑证据、可执行程序与任务元数据。符号下标 i 表示第 i 题，V 表示有序源视频，E 表示证据，p 表示程序，c 表示任务标签。

\[x_{i}=(d_{i},q_{i},\tau_{i},\mathcal{V}_{i};a_{i},\mathcal{E}_{i},p_{i},c_{i}),\]

每个问题归入视觉感知聚合、基于文本的理解、时空推理 3 类中的一类，标签用于报告环节的分组呈现。这里的 4D 指随时间演变的视觉与图像平面空间证据，对应原文限定的非度量级 3 维重建含义。独立问题连接同一视频内的远距离时刻，连续剧问题绑定一集、一季或整部系列的有序剧集。

### 数据如何变成可组题的证据链

在进入智能体细节前，先理解数据管线，因为它决定了题目为什么必须用多证据。流程分五步：音频文本筛选、片段构建、证据精炼、时间戳对齐与证据链、证据关联组题。小时级视频先做音频抽取、分段识别与转录规范化，过滤信息量；再按场景切分与粗划分做字幕与内容打分得到连贯片段；然后选关键帧并做视觉与文本质量过滤。

再把视觉证据、音频描述与转录按源时间戳组织成按时间排序的多模态证据链；最后从多条证据链组合出题并检查答案正确性、片段必要性与捷径。

> **看图路径：** 1. 按 1 到 5 的编号看从音频文本筛选到证据链再到组题的顺序；2. 注意第 4 步把视觉描述、波形、转录摘录与音频描述对齐到源时间；3. 看第 5 步如何要求 2 到 4 条证据链组合并做必要性与捷径检查

[![原论文 Figure 3：Overview of the LongVideo construction pipeline.](https://arxiv.org/html/2610.32332v1/fig2_dataset.png)](https://arxiv.org/html/2610.32332v1/fig2_dataset.png)

*论文图 3。原论文 Figure 3:：“Overview of the LongVideo construction pipeline.”。*

这张图以电影为例展示了上述五步。可见左侧三步如何从长片得到带时间戳的视频加转录与连贯片段，中间如何把 3 段早期、中期、结尾的视频关键帧、视觉描述、波形、转录摘录与音频描述对齐，右侧如何从 3 条链组成揭示布景与告别语的问题。它帮助理解题目是显式操作 2 到 4 条链的比较、排序、状态变化或跨模态绑定，需要多段证据合在一起作答。

独立视频每题连 2 到 4 个片段，每视频保留三到五题，共 4388 题；连续剧先用确定性程序在请求范围内算出参考答案，再改写成自然语言问题并校验语义一致，共 826 题。视觉计数指片段内跟踪身份求和，同一身份在不同片段中重复计入。当前版本剔除 15 个零时长视觉片段影响的电视题后共 5214 题。

### 智能体如何观察、存储与检索：一个行车例子

以一个 66 分 04 秒的行车视频为例，问题问从最早、中段到最后路面如何变化。左侧先检查与切分，再由多模态观察器看原生视频或时间戳帧序列，音频可用时补转录，生成带摘要、转录、屏幕文字、实体、动作、事件与空间关系的文档，含源标识与时间边界。3 个记忆卡片分别记下 02:12 铺装双车道、15:00 非铺装林道、59:30 林间铺装路，可跨问题复用。

> **看图路径：** 1. 沿左侧 66 分 04 秒行车视频的三段时间点看路面变化；2. 看左侧观察存储如何生成带时间戳的持久记忆卡片；3. 看中间基础模型两次检索与右侧技能库虚线可选调用的关系

[![原论文 Figure 4：Illustration of 4DMemory Agent framework.](https://arxiv.org/html/2610.32332v1/fig3_method.png)](https://arxiv.org/html/2610.32332v1/fig3_method.png)

*论文图 4。原论文 Figure 4:：“Illustration of 4DMemory Agent framework.”。*

这张图可见左栏观察存储与右栏检索推理的分工。中间基础模型先发查询取回带时间戳证据，再细化为核验最后一段，两次调用视频记忆查询，必要时走虚线调用技能库。右侧答案按时间列出 3 段路面并总结为铺装到非铺装再到铺装。它说明检索、推理、细化按顺序迭代，技能按需调用，最终依据文本记忆与工具输出作答。

**持久记忆 × 有界检索：** 持久记忆指在不知道问题时先把观察转成带源标识和时间戳的结构化文档存起来，可跨问题复用；有界检索指提问时只用词频逆文档频率加精确匹配选最多 12 个种子再各扩一个邻居，在预算内打包证据，持久解决存什么，有界解决一次给模型看多少，二者配合才不撑爆上下文。

3 个技能各有边界。视频处理技能负责大小检查与切分，用 FFmpeg 适配器保证区间连续覆盖；视觉定位技能面向电视剧范围，用 SAM 3.1 做单集计数与跨季序列汇总；文本统计技能做确定性计数、说话人排序与单集语义摘要。智能体在已暴露的操作与合法参数范围内选择，源路径与检查点由 Harness 统一管理，返回证据为面向作答的观察与工具结果。

**视频处理技能 × 视觉定位技能 × 文本统计技能：** 视频处理技能负责检查大小与按时间切块并保留源时间引用，视觉定位技能用 SAM 3.1 给出电视剧范围的人与物体计数和排序，文本统计技能给出对话与 ASR 的确定性计数与摘要，三者分别补切片可观察性、视觉数量证据和文本数量证据，推理时按需调用。

### 没有训练时，系统实际执行什么计算

本研究把智能体执行限定在工程流水线范围内，报告的分数用于刻画该流水线下的表现。流水线构成为：离线用 Faster-Whisper large-v3 转录、用 Qwen 系列嵌入与指令模型做文本分析、用 SAM 3.1 做视觉定位；在线用词法检索选种子加邻居扩展，用观察器生成文档，用推理模型做检索、工具调用与最终作答。参数状态、梯度路径在原文报告范围内呈现，模型名仅用于标识流水线组件。

缓存策略分混合、冷、暖三档。混合复用来源与配置匹配的产物并补缺失观察，冷走全新计算，暖要求必需操作命中缓存。缓存键绑定源与时间单元哈希、观察器身份、提示与处理配置，音频还记转录检查点。检索范围为当前题绑定的文档集，初始查询用问题与选项，分数低于阈值时切换为均匀时间采样。推理预算覆盖准备与推理轮数及工具调用次数，默认温度 0。

### 评测如何组织：模型、裁判与四个指标

评测在 5214 题全集上进行，含 4388 个独立视频题与 826 个电视题，电视题再按集、季、整部系列划分。13 个 API 模型全部走 4DMemory Harness，多数用自身作观察器，少数用 Gemini 3.1 Pro 作外部观察器，比较的是推理加观察加工具的整体系统。同一份模型回答用两套独立裁判：单个 Opus-5 与 Kimi K3、GLM 5.3、Qwen3.8-Max 3 模型多数投票，两套共享工具执行记录。

指标分四层。调用率看是否调工具，顺序约束准确率要求调用问题中按序完成全部必需组且答对，顺序放宽还计入操作成功但顺序错而答对的部分，联合成功率是后者在全部题上的占比。公式中 N 为总数，B 为调用数，C 为按序成功且答对数，D 为仅顺序错但操作与答案对的附加数。

\[A_{g,j}=100\,\frac{C_{g,j}+D_{g,j}}{N_{g}}.\]

分析用 2026 年 9 月 25 日快照，明确分母与完成度。部分模型存在未完成执行或裁判缺失，标数有限的小组如整部系列视觉仅 4 题，一题即 25 个百分点，适合按样本量理解波动。不同裁判结果并列报告，数值差异来自裁判与覆盖范围。

**调用率 × 顺序约束准确率 × 联合成功率：** 调用率是至少一次成功调用工具的问题占比，顺序约束准确率是调用问题中按规定顺序完成全部必需操作且答对的占比，放宽顺序约束后还计入顺序错但操作与答案都对的为顺序放宽准确率，联合成功率是后者在全部问题上的占比，四者把愿意调工具、按流程调对、最终答对分开。

### 同样模型在新基准上掉了多少分

先看新基准是否更难。论文对比了同一模型在 Video-MME、LVBench 与 4DMemory 上的分数，所有展示模型在 4DMemory 上都更低，虚线箭头标出百分点下降。上半 Video-MME 对比中下降约 21 到 34 个百分点，下半 LVBench 对比中下降约 9 到 23 个百分点，说明长时多证据要求带来了额外难度，而不是单模型偶然失手。

> **看图路径：** 1. 先看上半 Video-MME 与下半 LVBench 两组柱子的颜色图例；2. 再读每组紫色 4DMemory 柱顶分数与虚线箭头标注的百分点下降；3. 对比 Seed 2.1 与 Qwen3.7 等下降幅度差异

[![原论文 Figure 2：Comparison of previous Video-MME (top) and LVBench (bottom) scores with 4DMemory results for the…](https://arxiv.org/html/2610.32332v1/4dmemory_stacked.png)](https://arxiv.org/html/2610.32332v1/4dmemory_stacked.png)

*论文图 2。原论文 Figure 2:：“Comparison of previous Video-MME (top) and LVBench (bottom) scores with 4DMemory results for the same models.”。*

这张图上半 4 组、下半 6 组的柱子高度与标注可直接读出。纵轴是分数百分比，橙色与浅蓝分别是旧基准，紫色是 4DMemory，箭头数字是下降百分点。它支持更难的判断，但不能推出下降完全来自时长，因为任务操作与证据需求也变了。

**独立视频问题 × 连续剧问题：** 独立视频问题绑定单个视频内的 2 到 4 个片段，要求比较、排序、状态变化或跨模态绑定；连续剧问题绑定一集、一季或整部系列的有序剧集，要求聚合、比较与趋势判断，前者考连续时间线内的证据组合，后者考跨集角色与场景的长期累积，难度来源不同不能只看总分。

### 主结果：调工具很积极，答对并走对流程很难

比较问题是 13 个系统在同一 Harness 与同一 5214 题题集下，调用积极性与最终联合成功率的关系。调用率只计至少一次被接受的工具调用，联合成功率要求答对且必需工具组成功，是否满足顺序要求分开统计。指标方向都是越高越好，两种裁判分别报告。

|  | Invocation | Ordered | Ordered | Order-relaxed | Order-relaxed | Overall | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Model |  | 3 judges | Opus-5 | 3 judges | Opus-5 | 3 judges | Opus-5 |
| Gemini 3.1-Pro | 99.81 | 58.38 | 63.82 | 58.38 | 63.82 | 58.27 | 63.69 |
| GPT-5.6 Sol | 100.00 | 70.14 | 71.29 | 70.46 | 71.61 | 70.46 | 71.61 |
| Opus-4.8 | 98.70 | 71.96 | 73.22 | 72.76 | 74.02 | 71.81 | 73.05 |
| MiMo-V2.5 | 100.00 | 58.59 | 60.84 | 64.06 | 66.36 | 64.06 | 66.36 |
| Grok-4.6 | 100.00 | 72.04 | 74.11 | 75.55 | 77.64 | 75.55 | 77.64 |
| Muse Spark-1.1 | 99.88 | 70.89 | 71.79 | 77.88 | 78.82 | 77.79 | 78.73 |
| Seed 2.1-Pro | 99.69 | 44.61 | 45.48 | 55.41 | 56.29 | 55.24 | 56.12 |
| Gemini 3.7-Flash | 100.00 | 73.34 | 74.66 | 73.34 | 74.66 | 73.34 | 74.66 |
| GLM 5.3-Flash | 99.81 | 55.76 | 57.15 | 65.20 | 66.60 | 65.07 | 66.47 |
| Qwen3.8-Max | 99.87 | 72.69 | 73.67 | 72.69 | 73.67 | 72.59 | 73.57 |
| DeepSeek V4-Pro | 99.85 | 68.69 | 69.36 | 68.69 | 69.36 | 68.58 | 69.26 |
| Qwen3.8-Flash | 94.13 | 63.00 | 63.55 | 68.99 | 69.58 | 64.94 | 65.50 |
| Qwen3.7-Plus | 99.81 | 57.72 | 60.34 | 66.99 | 69.64 | 66.86 | 69.51 |

上表是 13 个系统在 4DMemoryBench 上的总体表现，分为调用率、顺序约束下的准确率、放宽顺序后的准确率和总体联合成功率。12 个系统调用率在 98.70% 以上，但最高总体三裁判联合成功率只有 77.79%，说明愿意调用工具不等于按流程调用成功并答对。顺序要求也会改变排序，Gemini 3.7-Flash 顺序约束下为 73.34% 居首，Muse Spark-1.1 顺序约束下为 70.89%，放宽后为 77.88%，差值对应 364 题操作成功且答对但存在顺序违规，动机是区分过程合规与结果正确。

下表聚焦独立视频 6 个时空子类的三裁判联合准确率，列为多事件排序、状态变化跟踪、分散计数、路径轨迹跟踪、跨模态推理与跨模态绑定，覆盖 2785 题。

| Model | Ordering | Counting | CM reason | CM bind |
| --- | --- | --- | --- | --- |
| GPT-5.6 Sol | 72.49 | 44.35 | 70.11 | 72.37 |
| Grok-4.6 | 83.19 | 45.70 | 78.80 | 81.58 |
| Muse Spark-1.1 | 82.02 | 47.58 | 78.80 | 78.95 |
| Gemini 3.7-Flash | 82.17 | 45.43 | 72.83 | 78.29 |

可见最高计数列也只有 47.58%，而排序列可达 83% 左右。每个系统计数都低于排序，GPT-5.6 Sol 排序 72.49% 而计数 44.35%，Gemini 3.7-Flash 排序 82.17% 而计数 45.43%。这支持跨分散事件累积数量比给事件排序更难，但仅凭总分不能区分漏检、重复计数与计算错误。

### 什么操作分化了系统：阈值聚合与序列聚合

比较问题是同样视觉计数证据下，不同聚合操作是否带来一致排名。电视视觉子类按范围汇总，条目为三裁判联合准确率。GPT-5.6 在直接比较上 100.00% 与 99.07%，但高于均值单元计数仅 5.88%；Grok-4.6 相反，直接比较仅 29.69% 与 25.93%，高于均值达 82.35%。Muse 居中且较均衡。这说明算阈值再跨时间单元应用，与直接比较取回的数量，考的是不同能力。

时间侧也一样。GPT-5.6 首现排序定位 64 题全对，但时间两半比较仅 6.25%、趋势反转仅 5.88%；Grok 与 Muse 在后两项达 75% 与 94% 左右。能找回并排序少数首次出现，不等于能对有序计数序列做聚合。原文明确这不能定位失败在检索、执行还是最终计算，因为联合成功要求 3 段全过。

下表选取同一快照 S3 原表中的 3 个系统，按 3 种电视范围展开。原表注明每格为“Opus-only / three-judge accuracy (%)”，此处逐格取斜线后的三裁判联合准确率，单位为百分数（%），越高越好；列名与样本数沿用原表范围，不把 Opus 单裁判分数混入同一列。

| Model | Episode / n=140 | Season / n=59 | Entire series / n=24 |
| --- | --- | --- | --- |
| GPT-5.6 | 87.86 | 38.98 | 12.50 |
| Grok-4.6 | 91.43 | 86.44 | 100.00 |
| Muse-1.1 | 100.00 | 86.44 | 100.00 |

跨范围不能只按时长解释，题型组成和证据需求也在变化。下表将同一 S3 原表中相同 3 个系统的独立视频结果单列，仍逐格取斜线后的三裁判联合准确率，单位为百分数（%），越高越好。Video 列为 4,039 道独立视频时空题；与电视 3 种范围的题型组成不同，不能把它直接当成相同题目随视频变长后的变化。

| Model | Video / n=4,039 |
| --- | --- |
| GPT-5.6 | 67.96 |
| Grok-4.6 | 74.97 |
| Muse-1.1 | 74.92 |

两表对应同一快照的三裁判结果。GPT 随范围扩大单调下降，Gemini 3.7-Flash 则呈 72.86%、84.75%、100.00% 的相反走向，但各范围推理操作与证据需求不同，不能单独归因于时长。独立视频占 77.46%，微平均总分主要反映该组，Muse 对 Grok 的总领先 117 题中有 125 题来自电视题，集级视觉一处就差 116 题，不能理解为全面均匀领先。

### 结论在什么条件下才成立：覆盖与评测的不确定性

这些结论只刻画所评测的推理加观察加工具整体系统在给定预算下的表现。连续剧只有两部情景喜剧，任务偏重视频衍生的时空推理；自动标注与模型裁判带来不确定性；观察质量、检索预算与工具执行都会影响分数。没有匹配的裸模型对照与组件消融，就不能度量 Harness 的因果增益，也不能确定唯一故障机制。

未胜出项要明说。分布式计数全员偏低，独立视觉最高仅 54.95%；整部系列视觉仅 4 题，100% 证据有限；Qwen3.8-Flash 与 Qwen3.7-Plus 存在裁判未完成，分别为 4506 与 5181 个有效三裁判判决；MiMo 在整部系列时空上 Opus 与三裁判差 79.17% 对 70.83%，裁判选择会影响读数。把末步或单组最优推广到全程是不当的。

### 复现第一步做什么：环境、路由与记录

复现先固定问题标识、模型与观察器路由、解码与并发设置、代码与配置哈希、缓存策略与终止状态。API 推理在远端，编排、媒体准备、缓存、检索与专家推理在 8 卡 H100 节点上跑。媒体适配目标 24 秒块与 3.4 MB bound，超限递归切分；部分模型用 3 秒间隔、每块至多 8 帧、长边 768 像素的帧序列，另补本地转录。检索取 12 个种子各扩一个邻居，单条观察限 4000 字符，合并证据限 64000 字符。

不要把代码、权重、数据混为一谈。原文未提供经校验的公开链接，不得声称代码模型数据已公开。来源未确认不是论文缺陷。重跑时用混合缓存复用来源与配置匹配的产物，记录推理加观察器双身份与工具栈版本，转录用 Faster-Whisper large-v3，文本用 Qwen 嵌入与指令模型，视觉用 SAM 3.1 多路检查点。

### 什么时候值得尝试，还缺哪项验证

当任务证据分散在数小时内、需要显式比较排序计数与跨模态绑定，且能接受工具调用与检索预算时，这套先存后检加技能的框架值得尝试。第一步应从独立视频子集与集级电视题开始，固定观察器与检索预算，先复现调用率与联合成功率的分层，再看计数与序列聚合两类短板是否在你的领域同样出现。

还需要补的验证是控制观察输入与推理预算的匹配比较，以分离记忆表示、检索策略与专家工具各自的贡献；用数量感知记忆与不确定性引导检索，并做源级人工核验以降低自动裁判不确定性。论文未来工作也指向更广领域与连续流中的记忆更新与实体持久性。在此之前，总分领先不应读成各组全面更强，长时下降也不应简单归因于时长。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.32332v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
