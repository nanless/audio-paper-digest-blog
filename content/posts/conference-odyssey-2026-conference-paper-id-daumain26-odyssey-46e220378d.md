---
title: "From Self-Supervised Speech Models to Mixture-of-Experts for Robust Anti-Spoofing"
date: 2026-09-12
draft: false
description: "针对未见合成方法泛化难的问题，论文把 WavLM-Large 部分高层的前馈块替换为多专家并用门控做整句选路，在 14 个评测集上把宏平均等错率从 5.46% 降到 4.81%，代价是参数增至 329M 且需全量微调。"
tags: ["混合专家模型", "自监督学习", "鲁棒性", "语音", "语音伪造检测"]
categories: ["odyssey-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:odyssey:2026:conference-paper-id:daumain26_odyssey"
paper_digest_source_kind: conference
paper_digest_conference_id: "odyssey-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "4a129d4112742fe60d9f304bac3905bbb749501646f016ac658ddbc7ee805ca9"
paper_digest_api_reader_plan_sha256: "cfabbf1e03a98a2131fc106cb6c624ac29fa3de47162ad28bc8e2f0dcefc2998"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "37d77e7b57a2630b7017c17a0df5ff7f166325c0f4280973b7eaee3fba1cf081"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "5dc98c183c0e3b5afb6e4051d789b5f2664fecfeaa0fdff192ab04ef1b4aed33"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "d060e6312f86dc007d4fd79563a8a3b16a4edd169e968ca6608d87c90a22ef92"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "c3528d996fd0d2953681ef8c770dbfda363cbb205714e73db988bc33a5007d09"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.moe","label":"混合专家模型"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.speech-spoofing","label":"语音伪造检测"}]
paper_digest_primary_task: "语音伪造检测"
paper_digest_primary_method: "混合专家模型"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把预训练语音模型改成高层专家分工：抗伪造要在保留表示的前提下做稀疏扩容

> 英文题目：*From Self-Supervised Speech Models to Mixture-of-Experts for Robust Anti-Spoofing*

> 会议身份：`conference:odyssey:2026:conference-paper-id:daumain26_odyssey`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.html) · [官方 PDF](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf)

标签：#混合专家模型 #自监督学习 #鲁棒性 #语音 #语音伪造检测

评分：**6.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Hugo Daumain：机构信息未能从会议 PDF 纯文本可靠映射
- Driss Matrouf：机构信息未能从会议 PDF 纯文本可靠映射
- Khaled Khelif：机构信息未能从会议 PDF 纯文本可靠映射
- Mickael Rouvier：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

语音伪造检测的输入为原始波形，输出为真实与伪造的二分类概率，难点在于训练时见过的合成器与测试时新出现的编解码、扩散和流匹配方法之间存在显著分布偏移。所提方法以 WavLM-Large 为自监督骨干抽取分层声学表示，将所用 13 层中后部 6 层的变换器前馈模块替换为 4 专家稠密混合专家结构并由层独立门控做整句 Top-1 硬路由，再由多头因子化注意力（Multi-Head Factorized Attention，MHFA）聚合多层表示完成分类。与冻结骨干加低秩适配器（Low-Rank Adaptation，LoRA）的做法不同，该路线允许专家、注意力与门控联合全量微调以重塑内部表示。在 14 个评测库上的宏观平均等错误率（Macro EER）由基线的 5.46% 降至 4.81%，相对改善 11.9%，微观混合等错误率（Micro EER）由 14.95% 降至 12.34%，显示跨合成器与跨语言泛化有所改善。专家激活分析表明路由分布在不同合成器间差异较小，平均成对 Jensen-Shannon 散度多在 0.08-0.29 区间，未发现面向特定攻击的清晰分工，结论不宜外推为可解释的攻击归因。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/kiwano-toolkit/kiwano> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？要判什么？为什么未见合成器最难？

这篇论文研究的是语音抗伪造，输入是一段原始波形，目标是判断它是真实人声还是合成、转换或篡改语音，输出是真伪概率。对于刚入门的同学，可以把任务理解为寻找合成器留下的残留痕迹，这些痕迹藏在信号的时间与频谱结构里，人耳往往听不出来，但神经网络可能捕捉到。必须保留的信息是细粒度的声学结构，而不是说话内容本身，因为内容相同的一句话，真假差异只在生成痕迹上。

难点在于训练时只能见到有限几种合成方法，而实际攻击不断出现新的声码器、神经编解码器、流匹配和扩散模型，同一模型换了合成器、语言和信道就会遇到分布漂移。论文开场就强调，现代语音合成的自然度已经很高，靠在固定几种攻击上训练的监督模型容易过拟合到特定合成器的痕迹。为此作者把路线定为先用大规模无标注预训练得到可迁移的语音表示，再通过结构扩容增强对异构伪造痕迹的容量。

本文后续所有设计都围绕这个矛盾展开，即如何在不遗忘预训练知识的前提下，让模型对未见攻击更稳。评价看的是跨数据集的等错率，而不是只看某个库上的最低点，这决定了后文既要报告平均泛化水平，也要报告总体试次水平。

### 已有路线分了哪几支？本文站在哪一支上？

按输入、目标和监督方式可以把相关工作分成三支。第一支是直接在波形或谱图上做监督判别，从早期的正弦卷积网络和原始波形网络，到显式建模谱时依赖的图注意力网络，这类方法在已知攻击上很强，但论文指出它们对未见合成方法的泛化有限。原因是学到的表示与训练集的合成器绑定太紧，换了生成器就失效。

第二支是用自监督语音模型做主干，例如 Wav2vec2、HuBERT 和 WavLM，先在大规模无标注语音上预训练，再接分类头微调，得到更通用的声学与音素韵律表示。这类主干通常由卷积特征提取器加多层 Transformer 编码器组成，浅层保留信号细节，深层编码更抽象的信息。抗伪造更依赖浅中层的声学伪影，这一点成为后文只用前 13 层的依据。

第三支是在主干之上做混合专家。论文梳理了模型级把每个专家当完整检测器、多层表示聚合级用专家融合，以及在自监督结构内部加低秩适配专家 3 类做法。低秩做法冻结主干、只学少量适配参数，稳定高效，但每个专家只是低秩修正，重塑内部表示的能力受限。本文选择的是另一条路，把预训练模型的稠密前馈块直接替换成完整的多专家前馈网络，并联合微调，属于全量混合专家转换，而不是低秩适配。

### 问题如何形式化？成功标准和约束是什么？

形式化地说，设输入为原始波形序列，模型先经卷积特征提取得到降采样后的隐序列，再经多层 Transformer 编码，最后经分类头输出真伪概率。训练使用多个伪造语料的真伪标签做二分类，测试则要求在包含大量未见合成、编解码和真实场景的语料上都保持低等错率。举例来说，这只是一个帮助理解的例子，训练见过 A 类声码器，测试出现 B 类扩散合成器，模型不能只记住 A 的痕迹。

成功标准是论文定义的跨库宏平均等错率和微平均等错率同时下降，其中宏平均是主指标。约束是不能只靠增大某一大库的权重刷总体指标，也不能用测试时才能知道的攻击标签做路由。作者因此把研究问题限定为结构选择问题，即专家放在哪里、用几个、怎么池化做门控、每次激活几个，才能在不破坏预训练表示的前提下提升泛化。

这个限定很重要，它把论文从提出新合成器或新特征的思路中区分出来，聚焦于如何复用已有预训练权重做稀疏扩容。后文所有消融都是在相同训练数据、相同优化计划和相同评测协议下比较结构差异，而不是比较数据规模。

### 整体链路：一段语音如何走完表示到判决？

沿着一个样本走一遍最清楚。2 秒左右的波形先进入卷积编码器得到帧级隐序列，然后逐层经过 Transformer 编码，每层输出都保留不同抽象级别的信息，浅层偏信号细节，深层偏抽象内容。论文选用的分类头不是只看最后一层，而是把编码器输出和所选多层表示一起送入多头因子化注意力模块，用可学习查询做注意聚合，再经线性层和激活得到话语级嵌入和真伪概率。

混合专家改造发生在主干内部，被选中的层将其原来的单一前馈块换成多个并行前馈专家，每个专家用原前馈权重初始化，另配一个本层独有的门控网络根据整句话的表示决定用哪几个专家。这种设计让主干的自注意力部分继续走原来的信息通路，而前馈部分获得按输入切换的能力。

**自监督语音模型 × 混合专家：** 自监督语音模型负责从大规模无标注语音中保留通用的声学与语音结构表示，混合专家负责在选定编码器层把单一前馈映射拆成多个并行前馈分支并按输入选择激活，二者搭配的理由是直接全量微调容易抹掉预训练知识而冻结适配又表达受限，组合后门控选路让不同伪造痕迹走不同专家，从而在保留预训练起点的同时扩大容量。

下面这张图展示了从多层表示到注意力聚合再到预测的完整汇聚路径，理解它才能明白后文门控为何也需要类似的池化操作。

> **看图路径：** 1. 先从左侧卷积编码器向上追踪 Transformer 层堆叠的主路径；2. 再看中间紫色键流与浅黄值流如何分别加权求和后送入线性层；3. 最后看顶部可学习查询如何驱动头级注意与拼接池化到真伪预测

[![原论文 Figure 1：Representations extracted from the SSL feature ex- tractor and selected Transformer layers are…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/34d6072b182f/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/34d6072b182f/figure-1.png)

*论文图 1。原论文 Figure 1：“Representations extracted from the SSL feature ex- tractor and selected Transformer layers are routed to the MHFA module.”。*

从像素可见，左侧是卷积编码器在下、多层 Transformer 在上的自监督主干，中间用两组权重分别引出紫色键流和浅黄值流，右侧虚框内是多头因子化注意力，先对键值做线性变换，再用顶部橙色可学习查询做头级注意与注意池化，最后经拼接、线性和预测得到伪造或真实的判决。这说明分类头确实利用了多层信息，而不是只依赖顶层语义，这也为后文只用前 13 层、强调浅层声学痕迹埋下依据，复述时要先讲多层加权再讲查询聚合。

### 专家层与门控如何计算？冻结了什么又更新什么？

专家层的改动很具体。记某层自注意力加残差归一化后的帧序列为输入，门控先沿时间维池化成一个话语向量，再经线性加归一化指数函数得到每个专家的选择概率，取概率最高的 k 个专家激活，并把这 k 个概率重归一化后作为加权系数，对所选专家的前馈输出做加权求和，最后再做残差与归一化。论文试验了均值、最大、统计量和注意统计等池化方式，门控是每层独立的。

初始化是关键细节，每个专家都从原稠密前馈块的权重复制而来，目的是防止遗忘预训练知识。训练初期自监督主干参数被冻结，只优化门控、专家层和分类头，随后在前 15% 训练步内按线性计划逐步解冻其余参数。辅助损失采用开关 Transformer 风格的负载均衡项，用平均路由概率与实际被选比例的乘积求和，再乘以系数加到二分类交叉熵上。

**多头因子化注意力 × 门控网络：** 多头因子化注意力负责把卷积编码器和多个 Transformer 层的表示加权聚合成话语级真伪嵌入用于最终判别，门控网络负责把本层自注意力输出池化为话语级向量并算出专家选择概率，二者分工是分类头看多层融合而门控看本层路由，搭配原因是伪造痕迹分布在不同层，组合后分类与路由可以各自用最合适的池化与权重。

下图把标准层与专家层的差异画得很直观，是复述方法时必须核对的结构，重点看分叉位置与加权方式。

> **看图路径：** 1. 先对比左右两图确认左侧单一前馈块被右侧多专家替换；2. 再看门控分支从归一化后分出并用虚线加权各专家输出；3. 最后确认残差与归一化位置保持不变以保留预训练结构

[![原论文 Figure 2：Comparison between (a) a standard SSL model Trans- former layer and (b) a Mixture-of-Experts…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/34d6072b182f/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/34d6072b182f/figure-2.png)

*论文图 2。原论文 Figure 2：“Comparison between (a) a standard SSL model Trans- former layer and (b) a Mixture-of-Experts Transformer layer.”。*

从像素可见，左图是自上而下的单路结构，依次为多头自注意力、加和归一化、前馈网络、加和归一化。右图在第一个加和归一化后分叉，一路进入多个并行专家，另一路进入门控模块，门控用虚线分别乘到各专家输出上再汇入最后的加和归一化。这对应了正文所说的前馈块被多个稠密前馈模块替换、门控计算路由分布并选 Top-k 加权组合的描述，复现时不要把门控接到自注意力之前，也不要共用跨层的门控。

### 训练如何组织？数据增强和优化条件是什么？

训练流程按原文可以复述为固定动作。优化器用 AdamW，初始学习率设为 2 乘 10 的负 5 次方，用余弦退火降到 1 乘 10 的负 6 次方，前 10% 步做线性热身，权重衰减为 1 乘 10 的负 2 次方。共训练 80,000 步，批量为 128，每条训练音频随机裁出 2 秒窗口。损失为二分类交叉熵加系数为 1 乘 10 的负 2 次方的辅助损失。

**负载均衡辅助损失 × Top-k 选路：** Top-k 选路负责每句话只激活概率最高的 k 个专家并重归一化加权输出，负载均衡辅助损失负责用平均路由概率与实际被选比例的乘积惩罚专家坍缩，二者分工是前者做稀疏推理后者做训练约束，搭配原因是硬选路不可微但梯度可经重归一化权重回传，组合后既保持稀疏又鼓励专家被均衡使用。

数据增强在训练时在线进行，包括基于编解码的增强、用 MUSAN 加性噪声增强，以及用房间脉冲响应卷积做混响增强。参数更新策略是先冻结自监督主干，只训门控、专家和注意力分类头，再线性解冻。需要指出的缺项是原文未报告具体硬件型号与总耗时，也未给出逐步解冻时每层的确切解冻顺序，只能按前 15% 步线性解冻复现，不能从模型名称推定实现细节。

梯度路径方面，门控的 Top-k 选择本身不可微，但梯度可经重归一化后的权重回传到门控模块，因此门控仍可学习。辅助损失同时约束路由的均衡性，防止少数专家垄断所有样本。复现时要保留该损失系数，过大可能干扰主分类目标，过小则可能出现专家坍缩。

### 用什么数据训练、验证和测试？指标如何聚合？

训练用了 6 个伪造语料，覆盖多种合成方法、语言和录音条件，总量超过 1,400,000 条，具体分布见原文表 1。验证用其中几个语料的官方开发集做模型选择，包括 Codecfake、ASVspoof2019 LA、ASVspoof5 和 ADD2022 的开发划分。评测用了 14 个语料，涵盖 ASVspoof 系列、Sonar、FakeOrReal、DFADD、Codecfake、LibriSeVoc、ADD2022 与 ADD2023 中文条件以及 InTheWild 真实场景，评测协议跟随 Speech DF Arena，其中 Sonar 按相同预处理并排除 SeedTTS 合成器样本。

**宏平均等错率 × 微平均等错率：** 宏平均等错率负责把每个评测集独立算等错率再平均，给予小语种和小库同等权重，微平均等错率负责把所有试次分数混在一起算一个全局等错率，受大库主导，二者搭配的理由是单一平均会掩盖跨分布泛化或大库主导的问题，组合后可以同时看到平均泛化水平和总体试次水平。

指标是等错率，即误接受率等于误拒绝率时的工作点，数值越低越好。宏平均是各库独立算等错率再平均，微平均是把所有分数混在一起算全局等错率。工具基于 Kiwano 开源工具包实现，资源状态显示为可用，当前可用，已公开，链接可达。复现时必须同时报告两种平均，因为只看微平均会被大库主导，只看宏平均又可能放大个别困难小库的影响。

划分与采样条件也要保持一致。训练音频统一裁为 2 秒段，评测按各库原始试次打分后聚合，不在测试时做增强或重采样。Sonar 的排除项必须执行，否则跨论文比较会不一致。原文未报告显著性检验与置信区间，因此后文的差异应表述为观察到的下降，而不是统计显著的断言。

### 主干选谁？最佳专家配置带来多大改进？

先要回答主干选择是否公平。论文在相同分类头下比较了 WavLM-Large、Wav2vec2 XLSR 和 HuBERT-Large 分别用 13 层与 24 层的结果，指标方向都是越低越好。下表保留了原文的全部对照，是判断后续专家改进是否站在最强基线上的依据。

| SSL | Layer used | Macro EER (%) ↓ | Micro EER (%) ↓ |
| --- | --- | --- | --- |
|  | 24 | 5.61 | 15.61 |
|  | 13 | 5.46 | 14.95 |
|  | 24 | 6.01 | 14.89 |
|  | 13 | 6.01 | 13.71 |
|  | 24 | 6.21 | 11.97 |
|  | 13 | 6.24 | 12.91 |

上表比较了 3 种主干在 13 层与 24 层下的宏平均与微平均等错率，公平条件是分类头与训练数据相同。表后解读需要同时看到收益与代价。WavLM-Large 用 13 层时宏平均等错率为 5.46%，微平均为 14.95%，是三者中宏平均最低的，因此被选为后续试验的主干。用 24 层并未带来宏平均好处，反而参数从 178M 增至 317M，说明堆更多高层语义层对该任务无益。未胜出的对照也要保留，HuBERT 在微平均上更低，但宏平均更高，说明它在大库上好而在平均泛化上差，不能只用微平均选主干。

为把基线、可运行策略与低秩对照放在同一视野，下表整理了可复述的关键数字，单位均为百分比等错率，比较问题是全专家转换是否在相同路由下优于低秩适配。

| 条件 | 指标 | 基线 WavLM-Large13 层 | 本方法后 6 层 4 专家 Top1 统计池化 | 低秩对照趋势 |
| --- | --- | --- | --- | --- |
| 相对改进 | 百分比 | 基准 | 11.9% | 未超越本方法 |

上表显示最佳专家配置是在后 6 层放 4 个专家、每句只激活 1 个、门控用统计池化，总参数 329M。论文报告在 14 个集上把宏平均从 5.46% 降到 4.81%，相对改进 11.9%，微平均降到 12.34%。表后必须说明代价与边界。本方法的收益是明确的，但参数从 178M 增至 329M，且需要全量微调注意力层与专家，推理时虽每次只走 1 个专家，显存与训练成本仍高于低秩方案。低秩对照在秩为 8 到 64 时宏平均始终在 6.6% 以上，未能超越本方法，但论文也承认该比较没有完全隔离结构与全量微调的影响，因此不能说差距全部来自专家容量。

### 专家放在哪里？池化方式如何影响路由？

位置试验固定 4 专家、Top1 和注意池化，只改变插入位置。比较的问题是高层表示与低层特征哪一处更适合做专家分工，公平条件是都基于 13 层 WavLM-Large，指标越低越好。下表是原文的位置对照，覆盖前 6 层、后 6 层与全部 13 层。

| Type SSL | Insertion Macro | EER (%) ↓ | Micro EER (%) ↓ |
| --- | --- | --- | --- |
| first | 6 | 5.60 | 15.35 |
| last | 6 | 5.21 | 13.80 |
| all | 13 | 5.77 | 14.13 |

上表对比了不同插入位置下的宏平均与微平均等错率，表后解释显示，放在后 6 层时宏平均为 5.21%，优于前 6 层、全部 13 层和隔层插入。全部 13 层反而最差，宏平均升至 5.77%，说明无差别扩容会引入冗余并破坏浅层声学表示。未胜出的隔层方案居中，表明稀疏插入不如集中在高层，这支持高层表示更适合做互补伪造模式分工的判断，但也留下边界，即后 6 层的具体层号未在正文逐层列出，复现时只能按后 6 层理解。

池化试验进一步收窄选择。论文报告统计池化最佳，最大池化次之，均值与注意统计较差。门控池化之所以重要，是因为路由需要一句话的整体表示来决定走哪个专家，帧级表示必须先压缩。若池化带了过多可学习注意参数，可能在训练集上过拟合到特定合成条件，导致路由不稳。论文因此认为更简单的统计与最大池化反而更好，这提示路由表示的质量直接影响专家分工，门控不宜做得比分类头更复杂。

**前馈专家 × 低秩适配专家：** 前馈专家是把原始前馈块完整复制多份并全量训练的稠密分支，能大幅重塑内部表示，低秩适配专家是冻结主干只训练加在原线性层上的低秩修正，参数少而稳定但表达受限，二者搭配比较的理由是验证容量与效率的取舍，论文组合结论是全专家加注意力联合微调在该任务上更有效，但代价是训练参数显著增加。

下图是专家激活分析的核心证据，需要在讨论是否分工之前先建立读图方法，重点是均匀线与跨层变化。

> **看图路径：** 1. 先按层从 Layer8 看到 Layer13 确认每层有七组合成器分组；2. 再对比每组内四种颜色专家的高度是否偏离 0.25 均匀虚线；3. 最后纵向比较同一合成器在不同层的优势专家是否持续

[![原论文 Figure 3：Expert activation distribution p(e | s, l) per layer l and Sonar synthesizer s.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/34d6072b182f/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/34d6072b182f/figure-3.png)

*论文图 3。原论文 Figure 3：“Expert activation distribution p(e | s, l) per layer l and Sonar synthesizer s.”。*

从像素可见，该图纵向排布 Layer8 到 Layer13 共 6 个面板，横轴为 7 个 Sonar 合成器，纵轴为专家激活概率，图例区分专家 1 至专家 4，图中还有 0.25 的均匀虚线。逐面板观察可见，Layer8 中部分合成器明显偏向某个专家，例如某组蓝色柱接近 0.8，而 Layer11 中绿色柱在多个合成器上偏高，但跨合成器并未形成稳定的专家与合成器一一对应，多数情况下四色柱仍围绕均匀线分布。这为后文用散度量化差异提供了直观基础，不能仅凭个别高柱就断言专家专精于某攻击。

### 专家数量与选路稀疏度如何取舍？

这个问题测的是容量与推理代价的分离。专家数主要影响模型大小，Top-k 主要影响每次推理激活几个专家。下表固定统计池化和后 6 层，系统改变专家数与 Top-k，是复现时最直接的超参数表，指标越低越好。

| Type SSL | #Params E | k Macro | EER (%) ↓ | Micro EER (%) ↓ |
| --- | --- | --- | --- | --- |
| 227M | 2 | 1 | 4.98 | 12.81 |
| 278M | 3 | 1 | 5.13 | 13.81 |
| 278M | 3 | 2 | 5.33 | 13.07 |
| MoE WavLM-L (13) 329M | 4 | 1 | 4.81 | 12.34 |
| 329M | 4 | 2 | 5.41 | 13.99 |
| 329M | 4 | 3 | 5.40 | 14.46 |
| 378M | 5 | 1 | 5.17 | 13.60 |
| 378M | 5 | 2 | 5.00 | 13.00 |
| 378M | 5 | 3 | 5.60 | 14.23 |

上表系统比较了 2 至 5 个专家与 Top-1 至 Top-3 选路的组合，表后解读要给出可操作的取舍。4 专家 Top1 宏平均 4.81%、微平均 12.34% 为全局最优，5 专家 Top1 和 5 专家 Top2 略差，3 专家各配置更差，说明容量并非越大越好。2 专家 Top1 达到 4.98% 且参数最少，是资源受限时的备选，但推理代价与 4 专家 Top1 相同，因为都是每次激活 1 个专家，节省的是显存而非计算。负结果是 4 专家 Top2 和 Top3 都退化到 5.4% 左右，这反证了硬选路对保持专家差异的重要性，复现时不应为了平滑而增大 k。

反例同样值得保留。5 专家 Top2 尚可但 Top3 明显变差，说明增加容量必须配合硬选路，否则门控趋于平均。论文据此认为同时激活多个专家会削弱分工效应。这一判断属于有限解释，支持了稀疏路由的选择，但并未证明每个专家学到了可命名的伪影类型，还需后文的激活分布分析来检验。

### 哪些结论尚未被证明？专家真的分工了吗？

论文对专家行为做了两步分析。先算每个合成器在每层的专家激活分布，再算合成器两两之间的 Jensen-Shannon 散度均值，散度越大表示路由差异越大。报告显示 Codecfake 与 ASVspoof2024 的散度随层加深略有上升，Sonar 先降后升，但整体数值仍然较低，作者据此认为激活分布大体均衡，没有发现对特定合成伪影的清晰分工。直方图上个别合成器如 AudioGen 或 OpenAI 略有偏离，但不支持专精结论。

需要区分 3 类表述。直接报告的是等错率数字与散度趋势，有限解释是高层更适合专家、硬选路有助于保持差异，未验证推测是专家可能捕捉了难以解释的复杂声学特征。缺失的证据包括每层门控的负载均衡系数敏感性、真实场景误判率与延迟，以及专家与具体声码器痕迹的因果联系。相关性不是因果，路由差异大不等于专家理解了合成原理。

在未测量延迟与成本时，不能承诺推理更快，只能说每次激活专家数少而总参数多，训练资源与推理开销需分别讨论。总体趋势是稀疏扩容有助于跨库泛化，但这不等于每组攻击都变好，原文大表显示个别库仍有波动。记住本文的中心判断，容量要加在高层表示上，路由要保持稀疏与均衡，而专家是否真正按合成器分工仍是待验证的开放问题。

### 复现先做什么？哪些条件必须保持一致？

复现应先锁定基线。用 Kiwano 工具包搭建 WavLM-Large 加多头因子化注意力，只用前 13 层，在 6 个训练集上按 2 秒随机裁剪、在线编解码加噪混响增强训练 80,000 步，用开发集选点，确认宏平均接近 5.46% 后再做专家改造。改造时把后 6 层的前馈块复制为 4 份做专家初始化，每层配独立门控并用统计池化，Top1 选路，辅助损失系数为 1 乘 10 的负 2 次方，先冻结主干再线性解冻。

必须保持一致的条件包括训练与评测的划分、Sonar 排除 SeedTTS 的预处理、宏微两种聚合口径，以及基线与专家模型使用相同的增强与优化计划。常见误解是把低秩对照当成同等全量微调，实际上低秩只训适配器与门控而冻结其余部分，因此不能直接用它的差距证明稠密结构必然更好。代码层面工具已公开可用，但论文未给出权重下载与完整超参数脚本，复现时需自行记录随机种子与解冻时间表。

核对清单可以按样本路径组织。先确认卷积编码器与 13 层 Transformer 的输出是否被多头因子化注意力正确加权，再确认专家层是否只替换前馈块而保留自注意力与归一化位置，最后确认门控是否每层独立且只看本层表示。若宏平均明显偏高，应先检查池化方式与 Top-k 是否误设为均值或大于 1，而不是先增大专家数。

### 何时值得尝试这种改造？还需补哪项验证？

当你的抗伪造系统已用自监督主干加多层聚合达到瓶颈，且测试分布包含大量未见合成器时，值得尝试把高层前馈块做成少量专家的硬选路。优先试后 6 层、4 专家、Top1、统计池化的配置，再根据显存考虑 2 专家备选。若你的场景对参数与训练成本敏感，则应先试低秩专家，因为本文的全专家方案以 329M 参数和全量微调换取了约 11.9% 的相对改进，并非免费。

还需补的验证包括冻结主干下的稠密与低秩同结构对比、不同随机种子下的路由稳定性、以及在真实场景库上的延迟与误判分析。复现时要补测显存与单句推理耗时，不能把参数量小等同于推理快。

最终要回答的是论文特有的取舍。容量要加在高层表示上，路由要保持稀疏与均衡，而专家是否真正按合成器分工仍是待验证的开放问题。按此顺序做基线、位置、池化、数量与分工检验，就能把本文的方法复述为可执行的实验计划，而不是停留在混合专家泛泛更好的印象上。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-1.png)

区域 1 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-2.png)

区域 2 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-3.png)

区域 3 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf#page=2)

[![原文数学表达区域 4，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-4.png)

区域 4 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf#page=2)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-5.png)

区域 5 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf#page=3)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-6.png)

区域 6 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf#page=3)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-7.png)

区域 7 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf#page=3)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-8.png)

区域 8 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf#page=3)

[![原文数学表达区域 9，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-9.png)

区域 9 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf#page=6)

[![原文数学表达区域 10，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-10.png)

区域 10 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf#page=6)

[![原文数学表达区域 11，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-11.png)

区域 11 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf#page=6)

[![原文数学表达区域 12，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-12.png)

区域 12 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf#page=6)

[![原文数学表达区域 13，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-13.png)

区域 13 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf#page=6)

[![原文数学表达区域 14，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-14.png)

区域 14 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf#page=6)

[![原文数学表达区域 15，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/odyssey-2026/7b8374d747f1/figure-15.png)

区域 15 · [查看论文原页](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf#page=6)

另有 18 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://www.isca-archive.org/odyssey_2026/daumain26_odyssey.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 odyssey-2026 论文汇总](/posts/conference-odyssey-2026/)
