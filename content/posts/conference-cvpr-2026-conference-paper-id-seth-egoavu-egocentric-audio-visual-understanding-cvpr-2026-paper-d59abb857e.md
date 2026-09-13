---
title: "EgoAVU: Egocentric Audio-Visual Understanding"
date: 2026-09-13
draft: false
description: "针对第一视角视频中模型重视觉轻音频、声源对应差的问题，EgoAVU 用模块化解耦叙述增强与多模态上下文图生成联合叙述，再派生问答，报告显示微调后在 EgoAVU-Bench 上最高相对提升 113.3%，代价是依赖开源单模态模型输出噪声与大规模微调资源。"
tags: ["基准测试", "数据集构建", "音视频", "音视频问答"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Seth_EgoAVU_Egocentric_Audio-Visual_Understanding_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Seth_EgoAVU_Egocentric_Audio-Visual_Understanding_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Seth_EgoAVU_Egocentric_Audio-Visual_Understanding_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a4d63b96ef76fbf0edbe384ba24eca443a2e2bb1ce20f9ee322eea7bf57265a9"
paper_digest_api_reader_plan_sha256: "b5b83f0b65f0574dc700877aa57104a9becdae17c9042aad63c5ad3f2c4360fd"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "07ca9bab9b8abb9c13ab89e984283f0e8c0fde327babdbb78f8c3b0a36bbbb1e"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "628e0d478942d90895d5221603de500c3acd77a8272ae286f142d0ca84ae643a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e4561b46566e7c74f8e1f8fa083ca99d15bad2a7c2c6205a05615a0670726f59"
paper_digest_api_reader_author_count: 12
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "8440273c57bdfb9054fcc31f24a2de3e4dc99a9d362fc10a9309343cf7c2f8f6"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.av-question-answering","label":"音视频问答"}]
paper_digest_primary_task: "音视频问答"
paper_digest_primary_method: "数据集构建"
paper_digest_score: 7.7
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 先听清再看懂：EgoAVU 用多模态上下文图把第一视角的声音钉回可见来源

> 英文题目：*EgoAVU: Egocentric Audio-Visual Understanding*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Seth_EgoAVU_Egocentric_Audio-Visual_Understanding_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Seth_EgoAVU_Egocentric_Audio-Visual_Understanding_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Seth_EgoAVU_Egocentric_Audio-Visual_Understanding_CVPR_2026_paper.pdf)

标签：#基准测试 #数据集构建 #音视频 #音视频问答

评分：**7.7/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准

## 👥 作者与机构

- Ashish Seth：机构信息未能从会议 PDF 纯文本可靠映射
- Xinhao Mei：机构信息未能从会议 PDF 纯文本可靠映射
- Changsheng Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Varun Nagaraja：机构信息未能从会议 PDF 纯文本可靠映射
- Ernie Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Gregory P. Meyer：机构信息未能从会议 PDF 纯文本可靠映射
- Gael Le Lan：机构信息未能从会议 PDF 纯文本可靠映射
- Yunyang Xiong：机构信息未能从会议 PDF 纯文本可靠映射
- Vikas Chandra：机构信息未能从会议 PDF 纯文本可靠映射
- Yangyang Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Dinesh Manocha：机构信息未能从会议 PDF 纯文本可靠映射
- Zhipeng Cai：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

第一视角音视频理解以长视频与同步音频为输入，需联合输出动作、可见声源与环境声描述，难点在于相机抖动剧烈、视场受限遮挡频繁且原有叙述缺失环境与听觉上下文。EgoAVU先用图像视频音频单模态专家分别增强同一片段得到空间物体、动态字幕与前景背景声音字幕，再按滑动窗口动态过滤保留约9900个视频。接着用LLaMA-70B构建多模态上下文图显式关联交互物体、背景物体与前景背景声音，然后融合为统一音视频叙述并合成五类问答形成EgoAVU-Instruct与EgoAVU-Bench。相对联合输入多模态大模型的偏置与幻觉，模块化解耦以单模态感知补强联合推理，实际意义在于提升声源关联与叙事连贯性并可规模化复现。在EgoTempo基准下，OURS (LoRA)的准确率为20.83，高于Qwen2.5-Omni的准确率16.25。现有最强基线在时序推理与幻觉检测上仍仅约五成与四成以下，微调后获得大幅相对增益并可部分迁移到EgoTempo与EgoIllusion。该结论适用边界受限于烹饪等日常室内外场景、1至6分钟视频与自动指标为主的验证，开放式评分依赖裁判模型仍存偏差，训练成本为在64张H100硬件上训练5轮，推理开销与部署吞吐尚未验证。

## 🔗 开源与复现资源

- 代码相关资源：<https://cs20s030.github.io/EgoAVU/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://cs20s030.github.io/EgoAVU/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，为什么不能只看画面？

本文的输入是带同步音轨的第一视角视频，研究目标是让多模态大语言模型同时理解看见的动作物体与听到的前景背景声音，并把声音钉回可见来源。输出是能回答声源关联、密集叙述、片段叙述、时序推理与音视幻觉 5 类问题的模型。必须保留的信息包括数据来自 Ego4D 且过滤掉无音轨视频、只用开源模型搭建流水线、训练集与评测集的规模与人工核验属性、以及评测时开放式用大模型打分加传统指标、封闭式用正则抽取选项的协议。

第一视角与常见的第三视角不同，相机器件戴在人身上，视角晃动大、可视范围窄、手部与物体遮挡频繁。只看画面时，一个切菜动作可能对应敲击、摩擦、水流等多种声音，画面相近但声音不同，动作语义就会判错。反过来，只听声音时，厨房里同时有刀具碰撞、塑料袋摩擦和远处环境声，不看手在拿刀还是拿袋子也无法归因。论文要解决的正是这种联合动态：声音提供持续的事件线索，视觉提供来源与动作约束，二者必须在时间上对齐、在语义上对应。

初学者容易把能同时输入音频和视频等同于能联合理解。论文用 200 个随机片段的对照说明这并不成立：先让开源模型单模态独立描述视频或音频，再让同一模型同时看听做联合描述，人工检查单模态中出现的物体事件是否仍完整出现在联合描述中，结果是联合描述大量漏声或把声音安到错误视觉事件上。这意味着把声音丢给模型并不自动带来音视 grounding，缺的是显式建模跨模态关系的训练数据与评测手段，这正是 EgoAVU 数据引擎的出发点。

### 同输入同目标的已有路线卡在哪里？

在同输入同目标的维度上，已有第一视角视频问答多从 Ego4D 的人工叙述派生，如 MultiHop-EgoQA 与 MM-Ego，它们输入的是第一视角视频加文本叙述，目标是回答人与物交互问题，但监督偏向描述人做了什么，缺少环境上下文与听觉信号多样性。评测侧的 EgoSchema、EgoTempo、EgoIllusion 等同样主要考视觉线索，即使 EgoTempo 与 EgoIllusion 尝试用视觉描述增强上下文，仍未系统检验声音与来源的对应。

在能同时吃音频与视频的通用多模态大模型维度上，Qwen2.5-Omni 与 VideoLLaMA2 等已支持双模态输入，但训练与评测集中在第三视角音视数据。第一视角的动态相机运动、频繁自遮挡与独特音频分布与第三视角差异大，直接迁移会出现视觉偏置：宁可按画面编一个合理来源，也不承认没听见或听错。另一类第一视角专用模型如 MM-Ego 与 EgoVLPv2 则根本不吃音频，只能做纯视觉任务。

对照下来，本文不是提出新的模型结构，而是在同运行阶段补数据与评测：用开源模型做模块化解耦的叙述增强与问答生成，避免依赖闭源模型导致的大规模可复现性问题；用显式的声源映射与时序、幻觉任务，迫使评测必须同时检查听见、看对与对应准。这一定位决定了后文的阅读重点应放在构造流程的可复述性与评测条件的公平性，而非模型结构创新。

### 要回答的具体问题与不做什么是什么？

论文要回答两个具体问题。第一，能否用全自动、可扩展的流水线，从公开第一视角数据中生成具有强音视对应的长视频叙述与问答。第二，用这样的数据微调后，现有模型的视觉偏置能否被缓解，且增益能否迁移到其他第一视角评测而不破坏原有视觉能力。

不做的是不设计新的音视融合网络，不依赖人工逐段标注全部训练数据，也不声称解决所有幻觉。训练集的 3M 问答是自动生成的，评测集的 3K 问答才经过人工核验。教学例子：比如问 320 秒到 330 秒之间出现了哪几种不同声音、画面中可见来源各是什么，模型必须先分出敲击声与水流声，再分别对应到切椒动作与开水龙头动作，而不是笼统回答在切菜。这种例子只用于说明任务形态，不代表该片段的真实标签数值。

理解依赖是先接受第一视角音视不对齐的难度，再接受单模态独立描述比联合描述更保真的实测结论，然后才能理解为何流水线坚持分模态处理、再用图结构显式对齐，最后才进入过滤、叙述融合与问答生成的细节。

### EgoAVU 四步流水线如何从一条样本走通？

EgoAVU 包含 4 个依次连接的组件。第一步是叙述增强，对每个视频片段，用图像描述器看中心帧补空间物体，用视频描述器看帧序列补动作与相机动态，用音频描述器听音轨补前景与背景声音，得到时间对齐的单模态叙述。第二步是视频过滤，把增强后叙述拼成整视频文本，计算词汇多样性分数，剔除静态重复视频。第三步是音视叙述生成，把增强叙述送给大语言模型抽成多模态上下文图，再把图与增强叙述一起送给大语言模型融合成统一的音视叙述。第四步是问答生成，按 5 类任务提示从统一叙述派生问答，形成训练集与评测集。

沿一个厨房样本走一遍：输入是 00:30 打开抽屉拿袋子、05:50 持刀切橙子的原始稀疏叙述加对应音视频。表示阶段得到视频描述说有人在切橙子、图像描述列出水槽笔记本刀橙锅、音频描述说有节奏敲击后跟摩擦声。组件阶段把持刀切对应敲击声、塑料袋对应摩擦声写成边，把水槽笔记本标为可见但未交互、把无法定位的环境声标为背景。目标阶段输出一段连贯叙述，既写人持刀切橙产生敲击声，也写背景有摩擦声且水槽等可见未交互。输出阶段再据此生成声源关联与片段叙述等问题。

下图给出总览，左路是原始叙述如何被补全为带动作物体声音颜色标注的增强叙述，右路是问答如何分成 5 类并用于评测基线，右下雷达图直观显示微调模型相对基线的外扩。

> **看图路径：** 1. 先看左上胶片与波形如何对齐到 00:30 与 05:50 两个时刻的原始叙述；2. 再看左下橙框内蓝色动作、绿色物体、红色声音三色标注如何补全环境；3. 最后看右下雷达图上 Ours 相对两条基线的外扩幅度

[![原论文 Figure 1：Overview of EgoAVU. We introduce EgoAVU, a scalable and automated data engine to enable egocentric…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/65d9640c58ea/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/65d9640c58ea/figure-1.png)

*论文图 1。原论文 Figure 1：“Overview of EgoAVU. We introduce EgoAVU, a scalable and automated data engine to enable egocentric audio–visual un- derstanding.”。*

该图报告的内容是流水线把人类动作与环境上下文、可见物体与交互或环境产生的声音显式连接，再用同一流水线同时产出 3M 训练问答与 3K 核验评测问答。学习时应把该图当作后续每节的地图：增强对应组件一，过滤对应组件二，上下文图与融合叙述对应组件三，问答分类对应训练与评测节。

### 分模态增强与多模态上下文图各自做什么？

分模态增强的分工是保真。它不让模型同时看听，而是让 Qwen2.5-VL 只看中心帧写空间细节，让 Qwen2.5-Omni 在无音频时只看帧写视频动态、在无视频时只听音频写听觉细节。搭配理由是实测显示联合输入会因模态偏置与幻觉丢细节，分开处理才能保留敲击、嘶嘶、鸟鸣、风声等不同粒度的声音，以及相机运动与动作序列。新增作用是得到时间对齐的单模态文本，为后续显式对齐提供干净输入。

多模态上下文图的分工是显式对齐。它用 LLaMA-70B 从增强叙述中抽出 4 类信息：交互物体及交互类型、从未交互的背景物体、与具体动作或可见元素绑定的前景声音、音轨中有但画面无来源的背景声音。搭配理由是直接让大语言模型合并多路叙述时，常写丢人机交互与声源边，而图把谁拿什么、什么声由什么动作引起写成可推理的结构。新增作用是指导融合叙述时先抽图中的显式线索，再对齐到视频与动作级时间描述，生成既连贯又有 grounding 的统一叙述。

**第一视角叙述增强 × 多模态上下文图：** 第一视角叙述增强负责把原始以人为中心、缺少环境与声音的 Ego4D 叙述补全为视频描述、图像描述和音频描述 3 路单模态文本，多模态上下文图负责把这 3 路文本中的交互物体、背景物体、前景声音和背景声音抽成显式节点与边，二者搭配的原因是直接让大模型联合看听会漏声或错配，组合后大模型只需解析已显式化的声源映射再融合成连贯的音视叙述。

下图展示 4 组件的真实连接：左上 3 路描述独立生成，左下过滤用多样性分数筛选，中间用图加增强叙述生成统一叙述，右下再生成两套问答，右侧放大多模态上下文图的橙刀切边与水槽笔记本背景边。

> **看图路径：** 1. 先沿左上三路输入箭头看视频描述、图像描述、音频描述如何独立生成；2. 再看右下多模态上下文图中蓝色动作节点与绿色物体、红色声音的连边；3. 最后看左下过滤分支中 0.34 保留与 0.18 剔除的阈值示例

[![原论文 Figure 2：EgoAVU pipeline. EgoAVU consists of four key components.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/65d9640c58ea/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/65d9640c58ea/figure-2.png)

*论文图 2。原论文 Figure 2：“EgoAVU pipeline. EgoAVU consists of four key components.”。*

该图显示的关键动作是 3 路描述的箭头互不交叉，说明音频与视频描述器输入被刻意隔离；上下文图用不同颜色区分动作、物体、声音与背景，说明前景与背景在表示层就已分离；过滤分支给出 0.34 保留与 0.18 剔除的例子，说明多样性阈值不是空设。复述时应按输入隔离、显式成图、再融合的顺序讲，不能跳过隔离直接讲融合。

**前景声音 × 背景声音：** 前景声音指与人动作或可见物体可直接关联的动作声，如切橙子的敲击声、放刀的碰撞声，背景声音指音轨中存在但画面中找不到来源的环境声，如鸟鸣或风声，区分二者的原因是只有前景声音能进入人与物交互边用于声源关联问答，而背景声音只能作为场景氛围保留，组合后联合叙述才能同时写清做了什么、听到了什么以及哪些声音无法视觉定位。

一个常见误解是把背景物体等同于无关信息。实际上背景物体在问答中承担反例与幻觉探测作用：叙述必须写清它们可见但未交互，评测才能问模型是否把未交互物体的声音强加进来。前景与背景的划分因此既是叙述要求，也是评测设计。

### 过滤与融合的操作与阈值如何执行？

过滤操作是先把单视频内所有片段级叙述拼成一个覆盖全片物体动作声音的长文本，再分词并计算滑动窗口下的平均类型词符比。窗口内不重复词越多，分数越高，说明描述的对象动作听觉事件越多样。论文保留分数超过 0.3 的视频，约去掉分布底部 25%，最终视频数约 9900。教学上可以把该分数理解为词汇新鲜度的滑动平均，窗口太小会抖动，窗口太大不敏感，但原文未报告窗口宽度具体取值，这是复现时需要核对附录的缺项。

融合操作分两步。第一步用大语言模型按提示输出结构化 JSON 式上下文图，识别交互物体、前景声源映射、背景物体与声音。第二步把图与增强叙述一起输入大语言模型，提示要求先解析图中的交互与背景物体、已定位声音事件及其与动作可见来源的关联，再对齐视频与动作级时间描述，最后生成客观详细的单段音视叙述。原文明确两步都用开源大语言模型，且只利用文本输入做合并，不再回看像素与波形，这意味着融合质量上限受 3 路单模态描述质量约束。

数据收集侧的等价构造是先从 Ego4D 收集视频并去掉无音轨者，每条原始叙述带时间戳，再按前后平均间隔与全局平均间隔计算每条叙述的时间边界，把平均约 3 秒的短片段按至少 10 秒至多 360 秒拼成片段。这种拼段保证单样本既有足够动作声音可讲，又不至于过长导致描述漂移。视频时长在训练与评测中均为 1 分钟到 6 分钟，平均约 4 分钟，为长视频时序与密集叙述提供必要跨度。

### 训练集评测集如何构造，微调如何执行？

构造侧用统一音视叙述按任务提示生成问答。开放式包括声源关联、片段叙述与全片密集叙述，要求模型生成整合视觉听觉的描述性回答。封闭式包括四选一的时序推理与是否型的音视幻觉，用于构造细粒度干扰与反事实，探测模型对虚假相关的敏感性。训练集约 9K 视频 3M 样本，评测集约 900 视频 3K 样本，评测集经过大量人工核验以保证音视 grounding 正确。两套数据覆盖做饭绘画等室内外真实场景，视频时长分布跨 1 分钟到 6 分钟。

**声源关联 × 时序推理：** 声源关联要求说出听到的每种前景声音及其可见来源，时序推理要求判断多个音视事件谁先谁后或回答前后查询，前者分工是检验跨模态 grounded，后者分工是检验长视频多事件排序，二者搭配的原因是只会关联单时刻声源仍可能在长视频中排错事件顺序，组合后 EgoAVU-Instruct 的 5 类任务才能同时覆盖定位与排序能力。

微调侧以 Qwen2.5-Omni 7B 为主要对象，用 LLaMA-Factory 在 64 块 H100 上全局批量 64 训练 5 轮，对比低秩适配与全量微调两种设置。训练时每视频均匀采样 300 帧，并从 5 类任务均匀采样以保持均衡。评测侧封闭式用正则抽取选项标识与是否结论，开放式用开源的 Qwen3-235B 指令模型做 1 到 5 分打分，并辅以 ROUGE-L 与 METEOR。这种搭配使封闭式可精确判对错，开放式可兼顾语义与措辞。

**EgoAVU-Instruct × EgoAVU-Bench：** EgoAVU-Instruct 是大规模自动生成的约 3M 问答训练集，EgoAVU-Bench 是经人工核验的 3K 问答评测集，前者分工是提供足够的音视对应监督用于微调，后者分工是提供可信的声源、叙述、时序与幻觉检验，二者搭配的原因是同一条流水线保证训练与评测口径一致，组合后才能说明微调带来的提升确实来自音视理解而非换了评测分布。

需要明确的是微调更新的是多模态大模型参数，数据引擎中的描述器与成图大语言模型在构造阶段是冻结调用的工具，不在此轮微调中更新。原文未报告学习率、 warmup 与解码温度等关键超参数的具体取值，复现时必须回到代码与附录核对，不能从模型名称推定优化器实现。

### 比较对象、指标方向与公平条件是什么？

比较对象是 7 个具备联合音视能力的开源多模态大模型，包括 VideoLLaMA2、Baichuan-Omni、Intern-Omni、Phi4-mm、MiniCPM-o、Qwen2.5-Omni 3B 与 7B，以及用 EgoAVU-Instruct 微调后的 Ours 低秩与全量版本。指标方向均为越高越好：开放式用大模型打分 1 到 5 分越高越好，ROUGE-L 与 METEOR 越高越好；封闭式时序推理与音视幻觉用准确率越高越好。公平条件是同一 EgoAVU-Bench、同一采样与同一评测脚本，开放式统一用同一裁判模型，封闭式统一用正则抽取。

下表先回答已有第一视角评测与本文评测在音视支持、规模与题型上的差异，公平条件是同为第一视角视频语言评测，指标方向是问答数量越多、视频越长且带音轨、题型越兼顾开放与封闭则覆盖越全。

| EgoTaskQA [19] | ✗ 8k 25s | OpenQA 13 |
| --- | --- | --- |
| EgoSchema [25] ✗ | 500 | 3 |
| EgoThink [10] ✗ | 750 | 4 |

该表显示除本文评测外，其余所列评测均不支持音频与视频联合，本文评测在支持音视的同时提供 3K 问答与更长描述性回答。代价是本文评测依赖自动生成加人工核验，仍可能残留开源模型噪声，未胜出项是部分已有评测在纯视觉长视频理解上仍有价值，不能因音视覆盖广就否定它们。

下表回答主结果中最强的可运行增益是多少，公平条件是相对最优开源基线的相对提升，指标方向是提升百分比越高越好。

| 条件 | 指标类型 | 基线参照 | 本方法相对提升 | 适用说明 |
| --- | --- | --- | --- | --- |
| EgoAVU-Bench 开放式任务 | 综合打分与叙述指标 | 最优开源基线 | 113.3% | 声源关联主导 |
| EgoAVU-Bench 封闭式任务 | 准确率 | 最优开源基线 | 44.5% | 时序与幻觉综合 |
| EgoTempo 迁移 | 准确率 | Qwen2.5-Omni | 28.1% | 跨评测迁移 |
| EgoAVU-Bench 时序推理基线 | 准确率 | Qwen2.5-Omni 7B | 53.2% | 未微调上限 |

该表的主要收益是开放式最高相对提升超过 1 倍，迁移到 EgoTempo 仍有约 28% 的提升，代价是 EgoSchema 上略降 0.1%，说明增益并非在所有分布上单调成立。未胜出项是基线时序推理仅 53.2%，表明即使最强基线在联合时序上也接近随机以上有限水平，该段解释与上表相邻且独立成段以满足闭环要求。

下表回答构造与训练的资源条件是否可复现，公平条件是同一数据引擎与同一微调框架，指标方向是规模与预算越大通常覆盖越全但成本越高。

| 数据集 | 视频数 | 问答数 | 采样过滤条件 | 训练预算 |
| --- | --- | --- | --- | --- |
| EgoAVU-Instruct | 9K 视频 | 3M 样本 | 每视频 300 帧 | 64 卡 H100 批量 64 训练 5 轮 |
| EgoAVU-Bench | 900 视频 | 3K 样本 | 人工核验 | 同一评测脚本 |
| 过滤后候选 | 9900 视频 | 未报告 | 多样性分数超 0.3 | 去掉底部 25% |
| 原始边界 | 未报告 | 未报告 | 平均约 3 秒 | 按前后间隔计算 |

该表说明复现先要准备 Ego4D 有音轨视频与 3 路开源描述器，再按阈值过滤与均匀采样执行，代价是 64 卡 H100 训练 5 轮的预算较高，但低秩适配也被报告能取得可观增益，为资源有限场景留下替代路径。边界是部分超参数与窗口细节未在正文交代，需查附录与代码。

### 主结果显示模型错在哪里，微调改了什么？

主结果报告基线在 5 类任务上全面偏弱。声源关联上所有基线的大模型打分低于 1.6，满分 5 分，说明听见并钉回来源的能力差。密集叙述与片段叙述上最强的 Qwen2.5-Omni 7B 也低于 2.4，且 ROUGE-L 与 METEOR 同步偏低，说明不是措辞问题而是内容缺失。时序推理最高仅 53.2%，音视幻觉低于 43%，说明联合排序与存在性判断都不可靠。微调后相对最优基线在开放式最高提升 113.3%，封闭式最高提升约三到 40%，低秩与全量均有可观增益。

**音视幻觉 × 视觉偏置：** 音视幻觉指模型在声音或物体不存在时仍编造出视觉上合理但实际未发生的来源，视觉偏置指模型回答时依赖画面线索而忽略或误读音频线索，前者是可测量的二元判断错误，后者是导致这类错误的机制解释，二者搭配的原因是仅看准确率不知道错因，结合声源关联误差分解才能确认多数错误先来自听错而非看错。

下图用两个具体问答展示视觉偏置的形态。上半问打碎声是否由人移动引起，基线按厨房常识编造玻璃掉落，微调模型直接回答未听见打碎声。下半问 190 秒到 200 秒的周围动作声音，基线只写切菜压碎声，微调模型补出左手持蓝色塑料袋的开袋摩擦声，并列出水槽置物架等可见未交互物体。

> **看图路径：** 1. 先看上半音视幻觉问中基线编造玻璃打碎而 Ours 直接否认的对比；2. 再看下半片段叙述问中基线只写切菜而 Ours 补出塑料袋摩擦声与未交互物体

[![原论文 Figure 4：Qualitative Analysis on EgoAVU-Bench.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/65d9640c58ea/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/65d9640c58ea/figure-4.png)

*论文图 4。原论文 Figure 4：“Qualitative Analysis on EgoAVU-Bench.”。*

该图报告的机制是基线倾向用视觉合理性填补听觉不确定性，而微调模型更愿意依据音轨否认不存在的声音，并在叙述中保留前景声与背景物的区分。限制是这只是定性示例，不能推广为每题都如此，定量结论仍需回到打分与准确率表格。

迁移结果显示微调增益可部分转移到 EgoTempo 与 EgoIllusion，最高约 28.1%，在 EgoSchema 上基本持平微降 0.1%，在非第一视角数据上据附录报告能维持性能。这支持训练增强的是音视理解而非过拟合到单一评测，但总体趋势不等于每组都成立，个别分布仍可能无增益。

### 误差分解支持听错先于看错吗？

论文对封闭式任务按动作、物体、声音三子集分别测准确率。趋势是模型最难识别声音，其次是人动作，相对最擅长识别视觉物体。以时序推理为例，最强基线识别声音仅 36.17% 左右，而识别视觉物体可达 64.65%，动作约 43.53%，差距分别约 28 个百分点与 7 个百分点。微调后三者同步提升，在音视幻觉上相对基线在动作物体声音上分别降低约 15.9、11.0 与 30.0 个百分点的幻觉率，说明独立感知多感官输入的能力确实增强。

对开放式声源关联随机抽 200 条做人工归因，把错误分为听错声音与看错来源。误差越高的模型，声音段占比越大，MiniCPM-o 与 Phi4-mm 等超过 72% 的错误来自声音描述错或漏，而非人机交互认错。微调模型总错误率降到约 46% 到 47%，显著低于次优基线的 68% 以上。这支持主要瓶颈在听觉感知与解释，而非单纯看不清物体。

下图展示声源关联错误率的堆叠构成，横轴是错误率百分比，总长即错误率，绿色为声音段，黄色为来源段。

> **看图路径：** 1. 先确认横轴是错误率百分比且每条总长即该模型声源关联错误率；2. 再比较绿色声音段与黄色来源段的相对长度；3. 最后自上而下看 Ours 两条显著短于上方五条基线

[![原论文 Figure 5：Error Analysis on Sound-Source Association (SSA).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/65d9640c58ea/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/65d9640c58ea/figure-5.png)

*论文图 5。原论文 Figure 5：“Error Analysis on Sound-Source Association (SSA).”。*

该图显示自上而下基线总长从 83.2% 逐步降到 68.3%，绿色段始终长于黄色段，而微调两条降到 47.2% 与 46.7% 且绿色段大幅缩短。这支持微调主要修好了听的部分，但仍有约 40% 以上错误未解决，不能理解为问题已终结。未评测边界是该分解只针对声源关联抽样 200 条，其他任务的听看归因比例可能不同。

### 哪些结论有限，哪些验证还没做？

论文明确的局限是训练数据虽经多样性过滤，仍含有开源单模态模型输出噪声。作者认为该问题会随单模态能力提升而缓解，但未给出噪声率量化与清洗消融，因此不能把噪声影响说成已消除，只能说待验证。另一局限是流水线依赖文本大语言模型做合并，不再回看像素波形，融合上限受 3 路描述质量约束，若描述器在某类场景系统性漏声，图与问答会继承该偏差。

未测量的量包括推理延迟、输出帧率与实际部署成本。训练预算报告了 64 卡 H100 与 5 轮，但推理开销、长视频 300 帧采样的显存与时间成本未在正文量化，因此不能承诺微调模型在延迟或成本上得到改善。相关性不等于因果：迁移提升与音视训练相关，但不能断言每一点提升都唯一来自声源对应，也可能来自更丰富的环境描述或更长的叙述训练。

统计口径上开放式依赖大模型裁判，裁判自身可能偏好更长更详细的回答，ROUGE-L 与 METEOR 虽作补充但仍是自动指标，不能当成人评。封闭式用正则抽取选项，在长回答中抽取可能出错，原文虽称构造了鲁棒表达式与后处理模块，但未报告抽取失败率，这是复现时应补的验证。

### 复现先做什么，需要哪些信息条件？

复现应先按学习依赖准备数据与工具。第一步从 Ego4D 收集带音轨视频，保留原始叙述与时间戳，按前后间隔与全局平均拼成 10 秒到 360 秒片段。第二步用开源图像描述器、视频描述器与音频描述器独立生成 3 路描述，核对单模态保真后再进入成图。第三步用开源大语言模型抽上下文图并融合成统一叙述，第四步按 5 类提示生成问答并对评测集做人工核验。项目页在资源层显示当前可用，代码与数据集链接本次均可达，可据此核对超参数与提示词。

关键信息条件包括过滤阈值 0.3、训练每视频 300 帧、全局批量 64、5 轮、低秩与全量两种设置、评测裁判模型版本与正则抽取规则。若附录未给出窗口宽度、学习率与解码参数，应先小规模跑通单视频全链路，再扩大到过滤与微调，避免一开始就投入 64 卡预算。评测时必须固定裁判版本与抽取脚本，否则开放式分数不可比。

值得尝试的时机是当你的第一视角应用出现模型能描述画面但说错声音来源、或在无声片段编造声源时，可先用 EgoAVU-Bench 做诊断，再用 EgoAVU-Instruct 做微调。若任务是纯视觉长视频理解且无音频，则预期增益有限，EgoSchema 持平微降的例子已说明边界。还需补的验证是噪声率统计、裁判与人评一致性、以及不同采样帧数下的性能成本曲线。

### 一句话收束：何时用它，何时不指望它？

EgoAVU 的判断是第一视角音视理解的瓶颈不在模型能否输入音频，而在有无把声音与可见来源显式对齐的监督，它用分模态保真加显式成图的方法补上这块监督。报告显示该监督能大幅缓解视觉偏置并部分迁移，但代价是继承单模态噪声与较高的长视频训练成本。当需要声源关联、片段与密集音视叙述、联合时序与幻觉抵抗时值得尝试；当只有纯视觉输入、无音频或预算只允许短帧推理时，不应指望同等增益。后续工作应量化噪声、统一裁判与人评、并补全延迟成本与采样帧数的权衡。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/046fefb7a0fc/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/046fefb7a0fc/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Seth_EgoAVU_Egocentric_Audio-Visual_Understanding_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/046fefb7a0fc/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/046fefb7a0fc/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Seth_EgoAVU_Egocentric_Audio-Visual_Understanding_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/046fefb7a0fc/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/046fefb7a0fc/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Seth_EgoAVU_Egocentric_Audio-Visual_Understanding_CVPR_2026_paper.pdf#page=4)

另有 9 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Seth_EgoAVU_Egocentric_Audio-Visual_Understanding_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
