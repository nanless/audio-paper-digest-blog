---
title: "S-DiverSe: Spanish Diverse Speech"
date: 2026-09-27
draft: false
description: "针对西班牙语渐冻症、帕金森和卒中后语音识别难且缺野外基准的问题，论文构建 22 人 444 段的 S-DiverSe 只做评测集，对比 4 个 ASR 系统与微调策略，最强证据是启发式文本后处理把 Voxtral-Mini 和 Whisper 在 S-DiverSe 上的总词错率降到 23.73% 和 22.01%，而全量微调在域外反而恶化到 26.81% 甚至 125.68%，代价是性别与病种严重不均且依赖自报诊断。"
tags: ["数据集", "数据集构建", "言语障碍", "语音", "语音识别"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:lopez26b_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/lopez26b_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/lopez26b_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "28519d506a2bc5b89c94ef175e2041e34cee6539d47246b74f3c8149f64c229b"
paper_digest_api_reader_plan_sha256: "b399ee19baddc6540b949e947bd8a23edecb80e43142cfdd6c4846de24f1b870"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "178e90b02c4fe69c0f9e0af5c2bae73113a21a30f79f5430e71fdff576652d83"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "6867cf278443fe2d77a0301be7528a7f9b870bea015c77075d39189e07749a2a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "c01b0a60b0330f6d2b77e9d768a09d07ebd07f5dc69f5f0b872bed15d25a4f77"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "23d115859f162f46cf626896a3a97b81ca19d86768eae9f3b813cc5f90b50428"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"scientific_topic","id":"scientific_topic.speech-disorders","label":"言语障碍"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.asr","label":"语音识别"}]
paper_digest_primary_task: "语音识别"
paper_digest_primary_method: "数据集构建"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 野外西班牙语病理语音为何难识别：S-DiverSe 用 3.2 小时揭示微调不如文本后处理稳健

> 英文题目：*S-DiverSe: Spanish Diverse Speech*

> 会议身份：`conference:interspeech:2026:conference-paper-id:lopez26b_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/lopez26b_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/lopez26b_interspeech.pdf)

标签：#数据集 #数据集构建 #言语障碍 #语音 #语音识别

评分：**6.3/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Fernando López：机构信息未能从会议 PDF 纯文本可靠映射
- Fernando Ibañez：机构信息未能从会议 PDF 纯文本可靠映射
- Ana Martínez：机构信息未能从会议 PDF 纯文本可靠映射
- Iván Alonso：机构信息未能从会议 PDF 纯文本可靠映射
- Pablo Gómez：机构信息未能从会议 PDF 纯文本可靠映射
- Santosh Kesiraju：机构信息未能从会议 PDF 纯文本可靠映射
- Jordi Luque：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

病理语音识别需将构音受损、韵律异常且混有噪声音乐的野外西班牙语访谈转写为文字，输入为可变长野外音频、输出为正字法文本与性别疾病可懂度标签，难点是声学域异构与可懂度跨度大。方法链第一步用西班牙语关键词检索YouTube访谈与纪录片候选，经自述诊断加感知筛查保留视频，第二步按说话轮次与语义连贯切分片段并交由母语标注者做保留填充词与`<unk>`的转写与交叉复核，第三步将转写结果输入基线评测与启发式后处理及微调对比，使文本层纠错与声学适配衔接验证。与医院内控的GITA和NeuroVoz相比，关键差异是保留自发访谈、背景干扰与三病因覆盖，其实测意义是暴露实验室指标向野外泛化的落差。在S-DiverSe上商用Scribe v2总体词错误率（Word Error Rate，WER）20.69%显著优于开源最优omniASR CTC 1B v2的33.56%，启发式文本后处理（Post-processing，PP）将Whisper-large-v3从36.43%降至22.01%、Voxtral-Mini从40.43%降至23.73%。结论仅适用于西班牙语野外神经病理语音评测，不可外推为临床诊断或跨语种适配规律。在S-DiverSe基准下，Scribe v2的WER为20.69%，低于omniASR CTC 1B v2的WER 33.56%。该结论适用边界受限于野外评测场景尚未验证临床诊断外推，硬件上实验在2块A100-SXM4-40GB上贪婪解码运行推理开销未计API费用。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？目标读者能带走什么？

本文解读的对象是 Interspeech 2026 论文 S-DiverSe: Spanish Diverse Speech，任务是为神经运动疾病导致的西班牙语病理语音建立可用的识别评测基准。目标读者是刚进入语音、音乐或音频领域的研究生，不需要先掌握病理语音识别，只需要会用词错率理解识别好坏，会区分训练集和测试集。读完你应能复述三件事：数据集是怎么从野外视频切段、转写和打分的，基线实验用了哪 4 个系统和哪两类适配方法，以及为什么论文说文本后处理比微调更稳健。

必须保留的关键信息是规模与构成、标注流程、评测归一化和聚合方式、模型与训练配置、主结果数字及其适用条件。论文正文给出一个 GitHub 链接称只分发标注和视频链接，本次收到的资源状态为未发现完成验证的可用资源，因此本解读不声称代码、模型或数据当前可用或已公开，复现时需自行回到原文核对链接可达性。全文按学习依赖展开，先讲任务与已有路线，再讲数据全景与组件分工，然后讲构造与训练细节，最后讲实验条件、结果反证与复现建议。

### 已有路线解决了什么？西班牙语还缺什么？

标准语音识别在干净朗读基准上已经很强，但遇到构音障碍会明显退化。白话说，构音障碍不是口音，而是神经肌肉控制受损，发音含糊、韵律异常、可懂度忽高忽低，声学模型对齐和语言模型预测都会失效。英语已有 UA-Speech、TORGO 和最近的 Speech Accessibility Project 挑战赛等资源，覆盖脑瘫等人群的孤立词、 constrained 句子和自发句。西班牙语的缺口更大。早期重要工作是智利 GITA 实验室的帕金森语料，包含元音发声、变调、交替运动速率评估、词句重复和自发语音，但录音条件单一且偏向老年人。

近期 NeuroVoz 提供了在医院受控条件下采集的卡斯蒂利亚西班牙语帕金森数据，包含持续元音、句子重复、交替运动速率评估和短独白，参与者同样偏老年且多为短促诱发话语。同输入同目标的对照是：同为西班牙语病理语音，NeuroVoz 是受控医院域，S-DiverSe 是野外域；同为神经疾病语音，TORGO 是英语脑瘫构音障碍，S-DiverSe 是西班牙语渐冻症、帕金森和卒中 3 种病因。类别差异不能直接比高低，只能说明覆盖范围不同。

论文的判断是，缺乏覆盖多病种的野外西班牙语基准，既阻碍鲁棒识别，也阻碍辅助沟通和临床评估工具的进展。

### 要解决的具体问题是什么？评测口径如何定义？

论文要回答两个可操作的问题。第一，能否得到一个多病种、野外声学、带人工转写和元数据的西班牙语评测集，用来检验现有系统在真实条件下的表现。第二，在该评测集上，文本后处理和参数微调哪类适配更能泛化。举例说明评测口径，例子不代表论文数据：若参考文本是 3 个词，系统多输出一个重复词，则插入错误计入词错率。论文的正式指标是词错率，方向是越低越好。

归一化动作很具体：转写与假设都转小写，去标点，去掉不可懂标记，将独立数字转为单词形式，保留常见的填充词如 mmm、eh、em 并计入词错率。总词错率不是各子组词错率的平均，而是把所有话语的错误加总后聚合，因此样本多的病种权重更大。划分上 S-DiverSe 只做评测，不做训练切分，理由是它横跨 3 种病理、多种可懂度和异构声学，任何训练切分在每层都会过偏，无法可靠适配。诊断依据是自报诊断加感知到的非典型语音证据，因此只适合做识别评测，不适合做临床推断。

### S-DiverSe 全景：从视频到可评测样本走一遍

跟着一个样本走完流程。输入是一段 YouTube 上的西班牙语访谈或纪录片视频，可能含背景噪声和音乐。第一步是 3 名西班牙语语言学毕业生用西班牙语查询词检索，关键词面向构音障碍、病种名、访谈和纪录片，偏好访谈等自发语境，得到候选视频。第二步按自报诊断、视频元数据和感知到的非典型语音过滤，留下确有神经疾病影响的说话人。第 3 步按说话人轮次和话语连贯性切段，时长可变以保留语义完整，不强行切成等长。

第四步单个标注员做正字法转写，标注说话人性别和病种，给出 1 到 5 的可懂度分，完全听不懂的段记为不可懂标记，填充词保留。第五步跨标注员交叉检查。在 50 个覆盖全病种和全可懂度层的分层子集上，加权 Cohen kappa 线性权重为 0.38，属于一般一致，74% 落在相邻 1 级内，分歧集中在中等偏低与中等边界，论文因此保留原始标注。最终得到 3.2 小时人工转写语音，22 个说话人，444 个音频段，附性别、病种和可懂度元数据。

语言复杂度用 Castilian 西班牙语开权重模型 salamandra-2b 估计，中位困惑度为 33，论文给出的参照是西班牙语 Common Voice v24.0 训练集的中位困惑度为 49，显示 S-DiverSe 语言上中等偏简单，难点主要在声学和发音而非词汇稀有。

下面热力图要回答的问题是：不同病种的样本是否落在不同可懂度区间，比较是否公平，指标是每格样本数，公平条件是同图同计数口径。

> **看图路径：** 1. 先确认纵轴是病理条件三行、横轴是可懂度五档的热力网格；2. 再读出 ALS 在 Medium/Low 格 137 和 Low 格 75 的集中位置；3. 对比 PD 在 High 格 82 和 Medium/Low 格 26 的双峰分布；4. 检查 STROKE 只在 Medium/Low 格 64 和 Low 格 17 有样本的稀疏性

[![原论文 Figure 2：Sample distribution of condition vs intelligibility.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/c8b676742465/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/c8b676742465/figure-2.png)

*论文图 2。原论文 Figure 2：“Sample distribution of condition vs intelligibility.”。*

该图报告显示 ALS 集中在中等偏低 137 个和低 75 个，高段为 0；帕金森在高段 82 个和中等偏低 26 个呈现双峰；卒中只在中等偏低 64 个和低 17 个有样本。这意味着按可懂度比较模型时，高档只有帕金森、中高档只有 ALS，不可直接跨病种对比。结合表 1 的时长与占比，语料男性主导、ALS 主导，论文明确说这反映野外可找到资源的分布，而非采集偏好选择。这种不均衡是后文总词错率偏向 ALS 和男性语音的原因，复现时必须保留原分布聚合，不能改为平均各组词错率。

### 数据构成与标注组件各自负责什么？

数据构成组件负责说明评测代表谁，标注组件负责说明标签可信度。构成上总量是 3.2 小时、444 段、22 人，病种为渐冻症、帕金森病和卒中后遗症。表 1 按性别和病种报告时长与占比，男性 2.80 小时占 87.4%，女性 0.41 小时占 12.6%，渐冻症 2.51 小时占 78.1%，帕金森 0.52 小时占 16.1%，卒中 0.18 小时占 5.8%。标注上可懂度 1 为低、5 为高，基于转写费力程度含不可懂片段，转写保留填充词。图 1 的性别按病种分布进一步显示每个病种内男性样本数都远高于女性，ALS 的男性柱最高，超过 200 个样本，女性在 3 个病种都只有 10 到 30 个量级。

**构音障碍 × 野外录音：** 构音障碍指渐冻症、帕金森病和卒中等神经运动疾病导致发音清晰度下降、韵律改变和可懂度波动的语音现象，它决定了识别难在哪里；野外录音指来自 YouTube 访谈和纪录片、带有背景噪声、音乐和异构采集设备的自发语音，它决定了声学条件有多杂乱；两者搭配的理由是仅有医院内朗读或重复句无法同时复现发音损伤和真实声学干扰，组合后 S-DiverSe 才能暴露标准模型在病理加野外双重偏移下的失效模式。

下表把构成数字放在一起，比较问题是 S-DiverSe 的规模与偏态有多严重，指标是小时数、段数、人数与百分比，公平条件是同为人工转写后的有效语音时长。

| 统计项 | 总量 | 男性 | 女性 | ALS | PD | STROKE |
| --- | --- | --- | --- | --- | --- | --- |
| 有效时长 | 3.2 hours | 2.80 | 0.41 | 2.51 | 0.52 | 0.18 |
| 时长占比 | 100% 口径下聚合 | 87.4% | 12.6% | 78.1% | 16.1% | 5.8% |
| 样本与说话人 | 444 段，22 人 | 男性主导 | 女性少量 | ALS 主导 | PD 次之 | STROKE 最少 |

表后解释是，总量虽小但与已有病理语料相当，偏态的代价是总词错率主要反映 ALS 男性的野外语音，女性和卒中的结论不确定性大。未胜出项是卒中仅 0.18 小时，任何按病种平均都会放大噪声，因此论文用全量聚合的总词错率而非组平均。复现时若要分析公平性，应分层报告而非改写聚合。

**可懂度 × 词错率：** 可懂度是标注员按转写费力程度给出的 1 到 5 级有序评分，1 为低可懂度、5 为高可懂度，用于分层描述样本难度；词错率是将替换、删除和插入错误加总后除以参考词数的自动指标，用于衡量识别好坏；搭配原因是只看总词错率会被样本分布主导，而按可懂度分层看词错率才能判断模型是随难度平滑退化还是在低可懂度段崩溃，论文图 4 正是用这种分层揭示了开权重模型在低可懂度段的大幅恶化。

### 模型组件与错误类型：谁容易幻觉？

基线覆盖 3 个开权重系统和一个商业系统。Whisper-large-v3 是 1,600,000,000 参数的编码器解码器，在 1,000,000 小时弱标注和 4,000,000 小时伪标注音频上预训练。Voxtral-Mini 是 4,700,000,000 参数模型，把微调过的 Whisper-large-v3 编码器经连接器接到微调过的 Ministral-3B 大语言模型，实验用 Voxtral-Mini-3B-2507 检查点。omniASR CTC 1B v2 是近 1,000,000,000 参数的 wav2vec2.0 式 Transformer 编码器，先在 4,300,000,000 小时 1600 多语言无标注数据上自监督预训练，再用 CTC 头做识别微调。ElevenLabs Scribe v2 是商业黑盒，经云端接口调用，模型名为 scribe-v2，所有测试条件设置相同，时间为 2026 年 1 月。

因成本和 NeuroVoz 许可证禁止向第三方商业传输数据，Scribe v2 只跑 S-DiverSe，不跑 TORGO 和 NeuroVoz。推理用贪婪解码，在两块 A100-SXM4-40 GB 上运行，Whisper 和 omniASR 对超长音频分别用 30 秒和 35 秒滑窗加 5 秒重叠。

**自回归生成 × CTC 帧级分类：** 自回归生成指 Whisper-large-v3 和 Voxtral-Mini 逐词依赖已生成历史产生文本的方式，它的分工是借助语言模型能力补全，但在噪声和重度构音障碍下容易在语音结束后继续编造内容；CTC 帧级分类指 omniASR CTC 1B v2 对每帧独立分配词表符号再压缩重复的方式，它的分工是把输出锚定在声学帧上；搭配比较的理由是两者幻觉倾向不同，组合观察错误类型才能解释为何前者插入错误重、后者以替换错误为主。

错误类型分解显示，自回归的 Voxtral-Mini 和 Whisper 插入错误占比高，论文解释为恶劣声学下生成在真实语音结束后继续编造；CTC 的 omniASR 以替换为主，因帧级分配天然限制幻觉；Scribe v23 类错误更均衡。这一机制直接引出后处理只清理重复类幻觉的合理性。

**域内 × 域外：** 域内指与微调训练同分布的 TORGO 英文单词句和 NeuroVoz 医院内西班牙语重复句与独白，用于验证适配是否学到训练分布；域外指与训练在语言、病种组合和声学环境都不同的 S-DiverSe 野外西班牙语，用于检验泛化；搭配的理由是病理语音研究常把域内提升误当通用进步，只有同时报告域内和域外词错率，才能看到全量微调域内变好、域外崩溃的灾难性遗忘现象。

### 没有 S-DiverSe 训练时，真正的训练与构造发生在哪里？

本研究的 S-DiverSe 部分没有训练阶段，它只做评测。真正的参数更新发生在 TORGO 加 NeuroVoz 等数据上，对象是 Whisper-large-v3 和 Voxtral-Mini，omniASR 和 Scribe v2 不参与微调。训练数据有 3 种配置：TORGO 加 NeuroVoz 合并且 NeuroVoz 过采样 3 倍以补偿语言不平衡，仅 NeuroVoz，以及 TORGO 加 NeuroVoz 加西班牙语 Common Voice，其中 Common Voice 过滤出 7.3 小时约 4900 个朗读样本再按说话人切训练验证集，用于测试干净朗读能否弥合语言失配。TORGO 保留孤立词和受限句，得到 13.68 小时约 16,600 条、15 人，含女性构音障碍 3 人、女性健康对照 3 人、男性构音障碍 5 人、男性健康对照 4 人，男性 8.66 小时、女性 5.02 小时，单词 7.85 小时、多词 5.83 小时。

NeuroVoz 保留句子重复和短独白，得到 2.31 小时 1800 条、111 人，含女性健康对照 26 人、男性健康对照 28 人、女性帕金森 20 人、男性帕金森 33 人、4 人性别未知，男性 1.28 小时、女性 0.95 小时，余量来自未知性别。两库都按说话人无泄漏切 70% 训练、10% 验证、20% 测试，每切分都含两性与病理及健康语音。微调策略有 4 种：全量微调、低秩适配作用于全部注意力和前馈层、仅音频编码器微调对 Voxtral-Mini 还含连接器、仅编码器加连接器的低秩适配。

超参数按策略区分：全量微调用保守学习率 1e-5 跑 3 轮以防灾难性遗忘，编码器微调用 2e-5 跑 5 轮，低秩方法用 3e-4 跑 10 轮，秩 8、缩放 16、丢弃 0.1，有效批量 16 经梯度累积，余弦调度加 100 步热身，按验证损失早停耐心 5。规则后处理有 3 步：超 15 字符的长词做字符级重复检测并压缩到基本单元，连续重复词合并，连续重复短语只留 1 次。

下图要回答的问题是：可变切段是否带来长尾时长，指标是每时长桶样本数，条件是保留语义完整的切段规则。

> **看图路径：** 1. 先看横轴音频时长秒数与纵轴样本数的直方图形状；2. 再找到红色虚线均值 26.0 秒与绿色点线中位数 17.0 秒的位置；3. 观察 30 秒以内柱子最高、50 秒后稀疏到 250 秒仅有个位数样本的长尾

[![原论文 Figure 3：Audio Duration Distribution.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/c8b676742465/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/c8b676742465/figure-3.png)

*论文图 3。原论文 Figure 3：“Audio Duration Distribution.”。*

该图报告显示时长直方图左偏，均值 26.0 秒、中位数 17.0 秒，多数在 30 秒内，50 秒后稀疏，约 250 秒仅有个位数样本。这支持滑窗推理的必要性，也说明长样本评测方差大。未报告的缺项是优化器类型、损失函数细节和连接器具体结构，论文未给出时不应从模型名推定。

**微调 × 规则后处理：** 微调指在 TORGO 和 NeuroVoz 等域内数据上更新编码器或全部参数以适配病理语音，它的分工是改变声学和语言表示；规则后处理指对识别文本做超长词截断、连续重复词和重复短语去重的 3 步文本修正，它的分工是不碰参数只清理幻觉式重复；搭配原因是论文要区分性能提升来自表示适应还是文本清理，组合实验显示只改文本的后处理在域外更稳健，而改参数的微调在域内有效但域外遗忘。

### 实验条件：测什么、和谁比、口径是否一致？

实验按 3 个问题组织。第一，基线在 3 个语料上的绝对表现，比较 4 个系统，条件是同一归一化和全量聚合，TORGO 分单词与多词报告，S-DiverSe 分病种报告。第二，后处理与微调在域内外的增益与代价，比较无适配、仅后处理、全量微调加后处理、全层低秩加后处理、编码器微调加后处理、编码器低秩加后处理，训练数据在合并与单库间切换。第三，语言失配与域失配哪个是瓶颈，比较 NeuroVoz 单库、NeuroVoz 加 TORGO、再加 Common Voice 三档，只用 Voxtral-Mini 的编码器低秩加后处理以控制变量。

补充细节是困惑度分析用 salamandra-2b，中位困惑度 S-DiverSe 为 33，Common Voice 训练集为 49，说明语言建模不是主要瓶颈。硬件与解码已在前节交代，商业系统因成本与许可缺席部分对比，这是明确的未评测边界，不能把 Scribe v2 在 S-DiverSe 的最好成绩推广到 TORGO 或 NeuroVoz。下表整理训练与评测的数据条件，比较问题是适配训练与目标评测的分布差距，指标是小时数、条数与人数，方向是差距越大泛化越难。

| 数据用途 | 数据集 | 规模 | 内容与说话人 | 域特征 |
| --- | --- | --- | --- | --- |
| 适配训练 | TORGO 子集 | 13.68 hours，约 16.6k 条，15 人 | 孤立词与受限句，男女构音障碍与健康对照 | 英语，脑瘫构音障碍，受控 |
| 补充训练 | Common Voice 过滤集 | 7.3 hours，约 4.9k 条 | 朗读语音训练集过滤 | 西班牙语，干净朗读 |
| 语言复杂度参照 | S-DiverSe 与 Common Voice | 中位困惑度 33 与 49 | 自发野外对比朗读 | 野外病理对比干净 |
| 目标评测 | S-DiverSe 全集 | 3.2 hours，444 段，22 人 | ALS、PD、卒中野外访谈 | 西班牙语，野外多病种 |

表后解释是，训练侧最大的是英语受控数据，目标侧是西班牙语野外多病种，语言与声学双重偏移并存。Common Voice 虽补了西班牙语，但声学仍是干净朗读，论文后文报告显示它不能弥合差距。未胜出项是 TORGO 的单词任务对 CTC 以外的模型仍难，说明任务形式本身也是变量。

### 主结果：谁在野外最好？后处理带来什么？

基线报告显示，开权重中 omniASR 在 S-DiverSe 总词错率最低，Voxtral-Mini 在 NeuroVoz 最好，Whisper 在 TORGO 最好，没有单一开权重模型通吃，说明架构与训练数据和每种病理的交互不同。Voxtral-Mini 在标准西班牙语约 3% 词错率，到 S-DiverSe 大幅恶化，论文解释为病理难度而非语言建模缺陷。Scribe v2 在 S-DiverSe 总体最好，论文归因于更广更多样的训练数据，但这是有限解释而非因果验证。按病种看，Scribe v2 的 ALS 约 20.64%、PD 约 19.51%、卒中约 31.69%、总量约 20.69%，开权重总量在 33% 到 40% 区间。后处理是最稳健的适配：它对 2 个模型都降低 S-DiverSe 词错率且不伤 TORGO 域内表现，Voxtral-Mini 从 40.43% 降到 23.73%，Whisper 从 36.43% 降到 22.01%，证实相当比例错误可在文本层纠正。

下图要回答的问题是：难度是否随可懂度单调上升，指标是分档词错率百分比，方向越低越好，公平条件是同分档同模型对比。

> **看图路径：** 1. 先确认横轴五档可懂度从 High 到 Low、纵轴词错率百分比的方向；2. 再比较前四档四个模型都在 10% 到 30% 区间缓慢上升的趋势；3. 聚焦 Low 档 Voxtral-Mini 超过 100%、Scribe v2 仅约 30% 的分化高度

[![原论文 Figure 4：WER by intelligibility level.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/c8b676742465/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/c8b676742465/figure-4.png)

*论文图 4。原论文 Figure 4：“WER by intelligibility level.”。*

该图报告显示从高到中低四档缓慢上升，低档 đột 然跃升，Voxtral-Mini 在低档超过 100%，Whisper 约 75%，omniASR 约 58%，Scribe v2 约 32%，在低可懂度保持相对稳健。但高档只有 PD 语音、中高档只有 ALS 样本，不可直接跨档比病种。总体趋势不等于每档都成立，中高档 CTC 反而偏高就是反例。下表把核心可运行策略的定性结论固定下来，比较必须保留实际可部署的无适配、仅后处理和微调加后处理，不能用事后最优代替。

| 评测对象 | 指标与条件 | 无适配基线定性 | 仅后处理效果 | 微调加后处理效果 |
| --- | --- | --- | --- | --- |
| TORGO 域内 | 单词与多词词错率 | 单词显著难于多词 | 不损伤域内 | 全量微调域内增益最强 |
| NeuroVoz 域内 | 词错率，医院域 | Voxtral-Mini 领先 | 保持 | 低秩与全量均有增益 |
| 低可懂度分层 | 分档词错率 | 开权重崩溃，商业相对稳健 | 清理插入类幻觉 | 参数更新未能挽回低档 |
| 语言瓶颈检验 | 加 Common Voice 后 S-DiverSe | 干净朗读为补充 | 不适用 | 相对 NeuroVoz 加 TORGO 反而下降 |

表后解释是，主要收益来自后处理对插入型幻觉的清理，代价是它不改变声学表示，替换和删除错误仍在。未胜出项是 omniASR 虽总量最低但单词任务高达 79.48%，Scribe v2 虽总量最好但缺失域内对比，任何单指标冠军论都是片面的。

### 反证：微调为何在域外失效？语言还是声学？

消融按适配强度组织。全量微调加后处理在 TORGO 域内增益强，但到 S-DiverSe 严重退化，Whisper 总量达 125.68%，ALS 达 147.20%、卒中达 156.23%，由插入和替换在域移下暴增驱动。低秩方法比全量泛化好，但不稳定超越仅后处理。编码器低秩对 Voxtral-Mini 迁移更可靠，对 Whisper 仍差，说明部分参数更新的收益与架构相关，总体模式符合灾难性遗忘，即丢了广泛有用的表示，对 Whisper 尤其严重。编码器微调对两者都差，Voxtral-Mini 总量达 90.59%，Whisper 达 144.68%。

语言失配检验用 Voxtral-Mini 编码器低秩加后处理：只用 NeuroVoz 训练时 PD 表现超过仅后处理基线，显示同语言病理数据虽小仍有价值；补入 Common Voice 使英西平衡后，S-DiverSe 反而比 NeuroVoz 加 TORGO 差，说明瓶颈是域失配而非语言不平衡，干净朗读声学无法桥接到野外病理，这与困惑度分析一致。

下图要回答的问题是：不同架构的错误构成是否不同，指标是替换、删除、插入 3 段堆叠的错误率，方向总高度越低越好。

> **看图路径：** 1. 先按图例区分蓝色替换、粉色删除、绿色插入三段堆叠的含义；2. 再比较 Voxtral-Mini 和 Whisper 绿色插入段明显高于 Scribe v2 的差异；3. 观察 omniASR 蓝色替换段最高而绿色插入段最矮的 CTC 特征

[![原论文 Figure 5：WER by ASR model decomposed by error type.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/c8b676742465/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/c8b676742465/figure-5.png)

*论文图 5。原论文 Figure 5：“WER by ASR model decomposed by error type.”。*

该图报告显示 Voxtral-Mini 总柱最高且绿色插入段最厚，Whisper 次之，omniASR 总柱约 33% 但蓝色替换主导、绿色最矮，Scribe v2 总柱约 21% 且 3 段最均衡。这支持后处理专治自回归插入幻觉的判断，也解释 CTC 总量低但单词任务差的原因：替换错误在短词上更致命。限制是该图只给总量构成，未按可懂度或病种拆分，不能推广到每组都成立。

### 边界与缺项：哪些结论不能推广？

论文明确列出三点限制。第一，依赖自报诊断，只做识别评测，不做临床推断，相关性不是因果。第二，不平衡反映野外可得性，女性和卒中覆盖少，卒中仅 0.18 小时，女性仅 0.41 小时，结论不确定性大。第三，规模适度，3.2 小时与已有病理语料相当，但任何切分训练都会偏斜，因此未做训练切分。未测量项包括误判率之外的延迟、实时因子、推理成本和人工转写一致性对词错率的传导，论文未声称这些量改善。

商业系统缺席 TORGO 和 NeuroVoz 对比，成本与许可是明确原因。标注一致性加权 kappa 为 0.38，虽有 74% 相邻一致，但中低边界分歧大，可懂度分层应视为有序参考而非精确标签。微调部分的缺项是优化器、损失和连接器细节未完整报告，不能从模型名推定实现。原表头、图注与正文若有冲突，应以原文为准，本解读不编造划分或聚合口径来弥合。

### 复现先做什么？按什么顺序检查？

先回到原文核对评测口径，再跑基线，最后试适配。第一步按论文实现归一化：小写、去标点、去掉不可懂标记、独立数字转单词、保留填充词并计入词错率，总词错率用全量错误聚合而非组平均。第二步用贪婪解码跑 Whisper-large-v3、Voxtral-Mini-3B-2507 和 omniASR CTC 1B v2，对超长音频用 30 秒或 35 秒滑窗加 5 秒重叠，硬件参照两块 A100-SXM4-40 GB，记录 TORGO 单词与多词、NeuroVoz、S-DiverSe 总量与分病种。第 3 步先加 3 步规则后处理：超 15 字符长词的字符级重复压缩、连续重复词合并、连续重复短语去重，确认在 S-DiverSe 下降且 TORGO 不恶化。

第四步再试微调，超参数严格用论文值：全量微调学习率 1e-5 跑 3 轮，编码器微调 2e-5 跑 5 轮，低秩学习率 3e-4 跑 10 轮秩 8 缩放 16 丢弃 0.1，有效批量 16，余弦调度 100 步热身，按验证损失早停耐心 5，训练数据先试 NeuroVoz 加 TORGO 且 NeuroVoz 过采样 3 倍，再试单库和加 Common Voice。何时值得尝试后处理：当解码文本出现长词内重复和整词整句重复，且插入错误占比高时；何时值得尝试微调：当目标域与训练同为受控医院或同任务形式且有说话人无泄漏切分时。还需补的验证是女性与卒中扩采、纵向同一说话人测试、以及延迟与成本测量。

论文正文给出仅分发标注和视频链接的地址，本次未能确认可达，复现前必须先验证链接与许可。

### 收束：记住哪条可迁移的判断？

记住一条与数据绑定的判断：在野外多病种西班牙语上，文本层清理比参数微调更稳健，因为主要可纠正错误是自回归幻觉式插入，而声学域差距不是同语言干净朗读能弥补的。S-DiverSe 的价值不在于规模，而在于同时包含渐冻症、帕金森和卒中，叠加噪声、音乐和异构设备的野外声学，以及可懂度分层，从而暴露域内冠军在域外的崩溃。全量微调域内有效域外遗忘，低秩有所缓解但不稳定，编码器微调最差且与架构相关。

社区优先级是为野外病理西班牙语策展专用基准和训练数据，并扩大卒中与女性覆盖。任何把 Scribe v2 总量最好推广为全能最好，或把总词错率下降等同于每组每步都变好的说法，都是对原文的过度推广。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
