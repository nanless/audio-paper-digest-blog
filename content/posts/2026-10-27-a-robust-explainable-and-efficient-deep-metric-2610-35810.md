---
title: "A Robust, Explainable, and Efficient Deep Metric for Speech and General Audio Quality"
date: 2026-10-27
draft: false
tags: [音频质量评估, 语音质量评估, 对比学习, CNN, 可解释性]
categories: [论文速递]
description: "针对人工标注少而编码失真多的问题，该工作用 PEAQ 感知前置特征接 ConvNeXt 做对比学习与微调，并用梯度回传解释失真类型和位置，代价是对非波形保持信号的评价能力受限。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.35810"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把听觉感知特征和对比学习拼起来的语音与通用音频质量指标"
paper_digest_original_title: "A Robust, Explainable, and Efficient Deep Metric for Speech and General Audio Quality"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.35810v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.35810v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.35810v1.pdf"
paper_digest_primary_task: "音频质量评估"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-quality","label":"音频质量评估"},{"facet":"task","id":"task.speech-quality","label":"语音质量评估"},{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"method","id":"method.cnn","label":"CNN"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"}]
paper_digest_primary_method: "对比学习"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对人工标注少而编码失真多的问题，该工作用 PEAQ 感知前置特征接 ConvNeXt 做对比学习与微调，并用梯度回传解释失真类型和位置，代价是对非波形保持信号的评价能力受限。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Konstantin Schmidt"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Pablo M. Delgado"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Andreas Brendel"}]
paper_digest_abstract_sha256: "0cf047670f7b2d5e385325b98809310dc21130d0da40ddf151aff75920110f97"
paper_digest_sidecars: {"citation.bib":{"sha256":"4a4ff1d9790b0a8aa0f1055e0e1a34238aa6d04c1f2c85f5665e4893690bc09f","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35810/citation.bib"},"citation.json":{"sha256":"6026008db45426c1664b1ce92375b82b781139a986c9e0cda60228172fdccdbd","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35810/citation.json"},"citation.ris":{"sha256":"461fca56ba802341af06d8fb7489b78b03015d9a2059f48c8a573bcf16aad702","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35810/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"de47d3913be13e2f5fbbe541fd625f6047142f356097690d764668c152988281","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-35810/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "930d1666ba755015bed206c80fadbdd903063c997b124a9959e3c6b13b1551e9"
paper_digest_api_reader_plan_sha256: "d746aa2fddb110456f611dfecf2e9a09ea36feddf369358b6e6ade9446710f33"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "6384e95ee273d83d7ae788fc6c303894574232dce0b605ab1b4a475ba7cd8c29"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "01152c6a4f880af3777361d4a476d9b4aabfa5f62ee865475e8235bf23e46827"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "eda4ac7a42dc86d7c745b1b9f9b543a321f11d5733a39ace486baff3c45c65e6"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "10955fd20ba4acfd0563d954328a8a3d3961f4008a05ce38540734dc519402b7"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把听觉感知特征和对比学习拼起来的语音与通用音频质量指标

> 英文题目：*[A Robust, Explainable, and Efficient Deep Metric for Speech and General Audio Quality](https://arxiv.org/abs/2610.35810v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频质量评估](/audio-paper-digest-blog/papers/?concept=task.audio-quality)；[语音质量评估](/audio-paper-digest-blog/papers/?concept=task.speech-quality)
- **研究方法**：[对比学习](/audio-paper-digest-blog/papers/?concept=method.contrastive)；[CNN](/audio-paper-digest-blog/papers/?concept=method.cnn)
- **研究重点**：[可解释性](/audio-paper-digest-blog/papers/?concept=research_focus.interpretability)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.7/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Konstantin Schmidt：机构信息未能在本次解析中与作者逐人可靠绑定
- Pablo M. Delgado：机构信息未能在本次解析中与作者逐人可靠绑定
- Andreas Brendel：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

需要评价的对象是经过编码等退化后的语音和通用音频，输入为原始信号与退化信号对，输出是一个与人耳感知一致的质量分数，难点在于人工主观标注稀缺、通用音频退化类型多、纯学习模型难以解释失真来源。方法把符合 ITU-R BS.1387 感知模型的客观评价方法（Perceptual Evaluation of Audio Quality，PEAQ）计算的逐帧听觉失真表示作为输入，称为前驱体，再用基于 ConvNeXt 的卷积神经网络（Convolutional Neural Network，CNN）把高维前驱体映射为嵌入向量，最后用线性头输出质量分数。训练先用 PEAQ-2f 伪标签和按编码器配置优劣排序的三元组做弱监督预训练，再在 NISQA 语料的人工评分上微调，使嵌入距离反映质量差异而非失真类型。解释时把偏离满分的损失对首层卷积做梯度加权，生成各前驱体在时间和频率上的显著图。与已有纯基础模型方法不同，该链路保留了可解释的听觉事件维度，同时把乘加量降到 0.039 G，远低于 SCOREQ 的 20 G。在包含语音和音乐的 13 个数据集上，所提方法在 NISQA-Val 等语音集和 IgorC96 等音乐集上皮尔逊相关系数达到 0.84 和 0.89，低于同场景最强的 DeePAQ 或 PEAQ-2f，但在两类内容上都保持可用。结论适用于波形基本保持对齐的编码质量监测，不适用于丢包错位和强非波形保持生成内容，原文披露了模型参数量和乘加量，未披露完整训练时长与硬件配置。

## 🔗 开源与复现资源

- 第三方资源：<https://www.mmsp.ece.mcgill.ca/Documents/Software/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要评价的是什么样的输入和输出？

这篇论文要解决的是编码后音频听起来有多好。输入是两段波形：一段是干净的原始信号 x，另一段是经过退化比如编码后的待测信号 y，两者长度都是 T 个采样点。目标是给出一个与人耳主观评价一致的质量分数，分数越高表示失真越小。

与无参考估计不同，这里是有参考即全参考的设定，评价时必须同时看到原始和待测信号。必须保留的信息是人耳能察觉的失真差异，包括响度变化、可闻噪声、带宽丢失、谐波结构破坏和时域调制变化等。输出是一个标量分数，用于监测编码质量。

对刚入门的读者，关键是理解主观评价很贵：让人逐条打分耗时长、数据少，而编码器配置和音乐语音内容组合极多。论文因此想用尽量少的人工标注，做出同时适用于语音和通用音频的指标。

### 已有两条路线各卡在哪里？

第一条路线是传统感知模型，代表是基于 ITU-R BS.1387 的 PEAQ。这类方法手工设计了与听觉相关的规则特征，对感知编码等特定失真相关性不错，但遇到加性噪声、混响、带宽扩展后的语音和音乐等现代复杂损伤时，可靠性下降。

第二条路线是纯数据驱动的深度神经网络质量指标，包括音频基础模型加统计距离，以及对比学习的方法。其中只计算原始和退化信号在基础模型嵌入空间的统计差异，不再训练也能与主观分有不错相关。但论文指出，这类基础模型多用 16 kHz 语音训练，对通用音频泛化有限，且对高频退化不敏感。

近期对比学习特别是 SCOREQ 的三元组回归损失表现突出，它按平均意见分即 MOS 距离组织三元组，使嵌入距离反映质量排序，而不是退化类型。但纯学习方法同样缺高质量人工标注，且常被看作黑盒，难以指出失真原因和位置。本文就是想把两条路线拼起来：用传统特征压缩参数空间，用对比学习学质量流形，再用可解释方法找回诊断能力。

### 本文要突破的具体困难是什么？

第一个困难是标注稀缺。高质量人工标注需要大量听音实验，难以覆盖语音加音乐的全部内容和编码失真。论文把主要应用限定为语音和音频编码质量监测，用 xHE-AAC 在 32 到 80 kbps 单声道、时域和频域、带或不带时域噪声整形、频带复制和智能空隙填充等多种配置生成大量无标注数据。

第二个困难是黑盒不可解释。深度指标只给一个分数，无法回答是哪类失真、在哪段时间和哪个频段拖低了分数。传统感知模型本来有逐频带逐帧的失真测量，深度模型丢失了这层对应关系。

第 3 个困难是效率与通用性。基于基础模型的系统参数多、计算大，且在语音上好、在通用音频上差，或反之。论文希望一个小模型同时在语音和通用音频上都保持较好的皮尔逊相关，同时计算量明显低于基础模型方案。

### 整体流程是如何串起来的？

拿一个样本为例：先把原始波形 x 和编码后波形 y 做时间对齐、按 92 dB 声压级播放电平归一化、重采样到 48 kHz，以匹配 PEAQ 感知模型的校准常数。然后送入 PEAQ 基本模型，比较两者的感知表示，得到逐帧逐感知频带的多方面失真测量。

这些测量就是前置特征 P，被送入卷积编码器 e 做时频模式提取，再经过时间维的最大池化和平均池化并用线性层合并，最后分两头输出：一个是用于对比学习的嵌入，另一个是直接预测质量分数的输出。完整的输入到嵌入映射记为 F，由前置计算、编码器和嵌入层串联组成。

下面的系统框图可以帮助跟随这条主路径，区分共享的编码部分和分叉的两个线性头。

先看左右两路输入如何汇成前置特征，再看池化和线性层在哪里汇合，最后看嵌入和分数两个出口各用于训练的哪个阶段。

> **看图路径：** 1. 先看左侧 ref 和 coded 两路输入如何进入 PEAQ 感知模型得到 P；2. 再看 P 经过 ConvNeXt 编码后如何分出 mean 和 max 两路池化再合并；3. 最后看 linear 之后如何分叉到嵌入输出和质量分数输出

[![原论文 Figure 1：Proposed system consisting of precursor calculation \\mathttpq(\\cdot), CNN e(\\cdot), embedding…](https://arxiv.org/html/2610.35810v1/ConvNeXt.drawio.svg)](https://arxiv.org/html/2610.35810v1/ConvNeXt.drawio.svg)

*论文图 1。原论文 Figure 1:：“Proposed system consisting of precursor calculation \mathttpq(\cdot), CNN e(\cdot), embedding layer f(\cdot) and prediction head mos(\cdot).”。*

从图中可见，左侧 ref 和 coded 同时进入 PEAQ 感知模型，输出 P 进入 ConvNeXt 编码器 e。编码器后分出 mean 和 max 两条时间池化支路，再经一个 linear 合并，然后分叉到 linear f 得到嵌入和 linear mos 得到分数。这种设计让排序约束和分数预测共享同一感知表示，但保留各自的线性映射。

### 前置特征把波形变成了什么？

前置特征是 PEAQ 基本模型输出的时间频率表示。按原文实现，它包含 11 种前置量，每种有 109 个频率分辨率，在频率维拼接后得到 1199 维特征，帧数为 F。内容包括参考和测试信号的信号响度、噪声响度与带宽，以及相关功率谱的音调误差和瞬时调制差异等，细节指向所用实现文献。

对初学者可以这样理解：它不再直接比较波形采样点，而是比较人耳模型看到的东西。每 1 帧每一频带都记录一种听觉事件的强度，例如该频带的可闻失真有多响、误差能量相对掩蔽门限有多大。因此后续网络看到的不是原始频谱，而是已经与感知相关的失真线索。

该表示的形状如下式所示，行是拼接后的频率特征维，列是信号帧。

\[\mathtt{P}:=\mathtt{pq}(\mathbf{x},\mathbf{y})\in\mathbb{R}^{1199\times F},\]

其中 P 表示前置特征矩阵，pq 表示前置计算，x 和 y 分别是原始和退化信号。这个步骤把通用音频信号的庞大参数空间大幅压缩，同时保留检测退化的能力，也为后面的可解释性打下基础，因为每个通道本来就有听觉含义。

**PEAQ 感知模型 × 前置特征：** PEAQ 感知模型指 ITU-R BS.1387 的基本模型中比较原始信号和 degraded 信号感知表示的计算；前置特征指它逐帧输出的瞬时心理声学测量。本搭配的意义是把高维波形先压缩成与听觉事件相关的时频表示，后续网络只在这个低维但保留失真线索的空间里学习质量映射。

### 卷积编码器和两个输出头各做什么？

编码器 e 采用 ConvNeXt 结构，但把 2 维卷积换成 1 维卷积，共 4 个块，维度为 517、256、256、256。为节省第一层复杂度，把 1199 个对应听觉量维度的特征通道分成 11 组，所以第一层需要 517 个通道。输入前先做批归一化，对 PEAQ 前置量做归一化。编码器后在时间维并行做最大池化和平均池化，再用线性层合并两路池化结果。

合并后的表示分别送入两个线性投影头：嵌入层 f 和预测头 mos，做法类似 SCOREQ。嵌入用于对比学习阶段计算样本间距离，预测头用于输出最终质量分。训练时还维护模型参数的指数移动平均，以稳定训练和改善泛化。

这种分工的好处是时间池化吸收了时长变化，最大池化保留最严重的瞬时失真，平均池化保留整体水平，两者结合后再分头，既能学排序流形，也能直接回归分数。

**卷积网络 × 嵌入层 × 预测头：** 卷积网络指基于 ConvNeXt 改成一维卷积的编码器 e，负责从前置特征提取时频模式；嵌入层指线性投影 f，输出用于对比学习的距离空间；预测头指线性投影 mos，输出质量分数。三者分工是共享编码、两种用途分头输出，使排序用的距离和直接预测的分数来自同一表示。

### 没有人工标注时第一种预训练怎么做？

第一种预训练用伪标签 m 作为质量分数。对训练集中的通用音频部分用 PEAQ-2f 除以 20 以匹配 MOS 量程，对语音部分用每个编码配置的平均听音结果。论文假设这些标签即使与真实主观不完全一致，大体上仍能按失真强度排序。

训练用批内全三元组损失：对批次中所有三元组下标 i、j、k，比较锚点 i 与 j 的嵌入距离和与 k 的嵌入距离，加上自适应间隔 g。间隔定义为质量差之差除以 4，即锚点与正负样本的伪标签距离之差。二值掩码 M 只保留满足锚点与 j 的质量差小于与 k 的质量差且三者互不相同的有效组合。

该损失要计算或约束的是嵌入空间的相对顺序：质量更接近的两个样本在嵌入中更近。关键符号中 F 表示输入到嵌入的完整映射，m 为感知质量标量，下标为批次内样本编号，求和范围是批次内全部三元组。

\[\mathcal{L}_{\text{triplet}}:=\sum_{i,j,k=1}^{N}M(i,j,k)\max\bigg(0,\|F(\mathbf{x}_{i},\mathbf{y}_{i})-F(\mathbf{x}_{j},\mathbf{y}_{j})\|^{2}\\ -\|F(\mathbf{x}_{i},\mathbf{y}_{i})-F(\mathbf{x}_{k},\mathbf{y}_{k})\|^{2}+g\bigg),\]

训练批次由随机裁剪的 3 秒音频片段组成，PEAQ-2f 值在训练中实时计算。直观例子是：同一句话的轻度编码版应比严重编码版离干净锚点更近，损失就是把这种相对关系压进嵌入距离里。

**三元组损失 × 自适应间隔 × 伪标签：** 伪标签指用 PEAQ-2f 或按编码配置平均的主观分代替人工逐条标注的质量值；三元组损失指让锚点与质量更接近样本的嵌入距离更小；自适应间隔指按伪标签差值设定的需要拉开的距离。三者组合后，无人工标注时也能按质量强弱组织嵌入空间的排序。

### 靠经验排序的第二种预训练和微调怎么做？

第二种预训练不使用任何分数数值，只用相对好坏假设。假设 xHE-AAC 某些配置平均上优于另一些，例如固定其他配置时明显更高的码率大多更好。为增加可对比配置数，还让编码器跑在病态配置，例如只用短块而不用手工调好的块切换判决，并假设同码率下它总是更差。

训练集由三元组构成，每个三元组中第一种编码模式的感知质量好于第二种，第二种好于第三种。损失形式与三元组损失类似，比较锚点与第二、第 3 个退化版本的嵌入距离并加间隔，促使更好配置的版本离锚点更近。

两种预训练共用约 5000 小时训练数据，其中约一半语音取自 VCTK 数据集，另一半取自流行音乐录音，共 55 种编码配置，训练 100 轮并在两种策略间随机切换。后续再用 NISQA 语料的人工标注数据微调，把损失中的评分 m 换成人工评分。该语料含 14000 多个语音样本，退化包括语音编码、丢包、背景噪声以及手机经 Zoom、Skype、WhatsApp 等的录音，每个文件经 P.800 无参考测试得到共 97000 多个人工评分。

**编码模式排序 × 病态配置：** 编码模式排序指按经验认为高码率一般优于低码率等规则构造三元组；病态配置指故意让 xHE-AAC 跑在不合理的设置如只用短块。搭配的意义是增加可对比的失真强度层级，不依赖任何分数数值，只靠相对好坏假设提供弱监督。

### 实验在什么数据和条件下测相关性？

评价用 12 个带人工评分的公开数据集。NISQA 语料的 4 个子集按 P.800 方法打分，受试者听不到参考，包括模拟、真实、通话等条件。其中 FOR 和 P501 子集含丢帧或插入帧导致分段可变延迟的丢包条目，因所用前置特征无法处理这类条目，论文排除了丢包条目并对其余文件做延迟对齐。

通用音频方面，ODAQ 含 240 个音频样本，每个由 26 人评价，覆盖低通、前回声、频谱空洞、音调失配、未掩蔽噪声和对话增强等 6 类失真。IgorC96 含 40 条以音乐为主的条目，比较 96 kbps 的 Opus、AAC、Ogg Vorbis 与 128 kbps mp3。两个 MPEG USAC 验证测试含 USAC、AMR-WB+ 和 HE-AAC v2 在不同码率的编码条目，USAC-1 为 8 到 24 kbps 单声道低码率，USAC-2 和 USAC-3 为立体声低码率和高码率。SEBASS-DB 汇集 5 个声源分离听音测试，用 MUSHRA 方法评价基本音频质量，含 SiSEC08、SASSEC、PEASS 和 SAOC 4 个子集。

比较对象包括所提系统、PEAQ-2f、SCOREQ 的无参考模式和有参考模式，以及 DeePAQ。注意 SCOREQ 有参考模式在这里取退化和干净信号嵌入的欧氏距离，这与原论文用非匹配参考的做法不同。指标是与人工评分的皮尔逊相关和斯皮尔曼相关，值越大表示排序和线性一致性越好。

### 小模型的计算代价到底低多少？

比较问题是：在完成质量预测的前提下，所提 ConvNeXt 小模型与基于基础模型的 SCOREQ 和 DeepAQ 相比，乘加运算量和网络参数量各差多少。指标方向是两者越小表示越轻量，但需结合下一节的相关性一起看，不能只看小。

|  | ConvNeXt | SCOREQ | DeepAQ |
| --- | --- | --- | --- |
| multiply-adds [giga] | 0.039 | 20 | 11 |
| DNN parameters [million] | 20 | 95 | 97 |

表中可见，所提模型的乘加运算为 0.039 G，参数为 20 M，而 SCOREQ 为 20 G 和 95 M，DeepAQ 为 11 G 和 97 M。也就是说计算量低了 2 到 3 个数量级，参数量约为对方的五分之一。这支持论文关于低复杂度的结论，但它只说明推理开销小，不直接证明质量更好。实际部署时的延迟还取决于前置 PEAQ 计算和实现优化，原文未单独测量这部分耗时，因此不能把乘加数直接等同于端到端延迟。

### 在语音和音乐上相关性各表现如何？

比较问题是：在相同数据集划分和人工评分下，所提系统与 PEAQ-2f、SCOREQ 有参考和无参考、DeePAQ 的皮尔逊和斯皮尔曼相关孰高孰低。两个相关系数都是越大越好，前者衡量线性一致，后者衡量排序一致。

|  | NISQA-Live | NISQA-Val | NISQA-FOR | NISQA-501 | USAC1 | USAC2 | USAC3 | ODAQ | IGORC96 | SiSEC08 | SASSEC | PEASS | SAOC |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| proposed | 0.71 / 0.73 | 0.84 / 0.81 | 0.71 / 0.72 | 0.75 / 0.71 | 0.73 / 0.72 | 0.71 / 0.69 | 0.84 / 0.87 | 0.77 / 0.82 | 0.89 / 0.78 | 0.9 / 0.84 | 0.87 / 0.8 | 0.79 / 0.63 | 0.88 / 0.73 |
| PEAQ-2f | 0.53 / 0.53 | 0.74 / 0.79 | 0.66 / 0.66 | 0.75 / 0.77 | 0.86 / 0.87 | 0.79 / 0.69 | 0.91 / 0.94 | 0.87 / 0.82 | 0.94 / 0.86 | 0.96 / 0.87 | 0.94 / 0.89 | 0.87 / 0.55 | 0.95 / 0.86 |
| SCOREQ-ref | 0.76 / 0.76 | 0.89 / 0.89 | 0.89 / 0.89 | 0.94 / 0.94 | 0.75 / 0.72 | 0.7 / 0.6 | 0.8 / 0.85 | 0.77 / 0.83 | 0.7 / 0.71 | 0.81 / 0.75 | 0.84 / 0.77 | 0.79 / 0.6 | 0.82 / 0.77 |
| SCOREQ-nr | 0.79 / 0.79 | 0.92 / 0.92 | 0.93 / 0.93 | 0.94 / 0.95 | 0.14 / 0.14 | 0.14 / 0.14 | 0.09 / 0.09 | 0.02 / -0.03 | 0.06 / 0.01 | 0.54 / 0.55 | 0.63 /0.7 | 0.58 / 0.52 | 0.63 / 0.59 |
| DeePAQ | 0.56 / 0.55 | 0.65 / 0.64 | 0.7 / 0.73 | 0.7 / 0.63 | 0.89 / 0.88 | 0.85 / 0.8 | 0.93 / 0.95 | 0.91 / 0.88 | 0.95 / 0.84 | 0.94 / 0.79 | 0.92 / 0.87 | 0.85 / 0.48 | 0.94 / 0.81 |

主要读数是：SCOREQ 无参考在所有纯语音即 NISQA 数据集上最好，但在通用音频上失效，例如 USAC 和 ODAQ 上相关接近零；切到有参考模式后语音和通用音频都有意义，但每个语音集都比无参考模式下降。PEAQ 标准在通用音频上强，在语音上弱。DeePAQ 在含音乐集上非常好，但在语音上有限，论文推测与其未在 NISQA 上训练有关。所提系统在语音和通用音频上都达到不错水平，例如 NISQA-Val 约 0.84，USAC3 约 0.84，IGORC96 约 0.89，但总体在含非波形保持条目的 ODAQ、USAC1、USAC2 上受限。

论文把该限制归因于 PEAQ 前置量的波形依赖本性，认为换更好的表示学习或训练策略也难以克服。而 SCOREQ 和 DeePAQ 因在计算嵌入和分数前对基础模型特征做了时间平均，不依赖波形精确形状和延迟，所以在这些集上更好。这个解释与观测一致，但仍是机制层面的推断，仍不能回答若放宽对齐要求后前置特征能恢复多少。

### 显著图如何指出失真类型和位置？

论文用 Grad-CAM 解释回归网络。它把梯度反传到指定层，评估每个神经元对网络输出的贡献。原本为图像分类设计，这里用于回归，做法是对损失 L 求对目标层的梯度。L 定义为偏离干净参考的程度，在本工作中干净对应 5 分，e 为编码器输出。目标特征图选在网络的第一卷积层，因为输入本身就是测量听觉退化的特征，这样显著图可以直接读成哪种听觉量在起作用。

\[L=\left|5-\mathrm{}e(\mathtt{pq}(\mathbf{x},\mathbf{y}))\right|.\]

其中 L 为标量损失，5 为干净参考分，pq 为前置计算。该式先形成前置特征再经编码器得到输出，最后取与 5 的绝对差，梯度沿此路径反传。

以 ODAQ 4 个文件为例：低通用于爵士乐，带谱空洞的量化用于钟琴，未掩蔽高频噪声用于小提琴，音调失配用于另一首乐曲。热图显示参考和测试总响度的前置量几乎在所有条目中最活跃，说明模型从中提取通用信息。低通条目中最活跃的是测量参考和测试带宽的前置量，符合预期。谱空洞条目最强响应在调制差异相关量，论文解释为谱成分时有时无扰动了听觉带激励的时间调制，同时部分响度和掩蔽相关量也有激活但较弱，因为缺失成分可能部分被掩蔽。

噪声条目多数前置量都有归因，可闻扰动响度突出，调制量更强可能因噪声扰动了包络。音调失配模式类似但更弱，与其 MUSHRA 分 42 高于噪声条目 26 一致，前提是两图共用同一量程，而设计用于捕捉误差谐波结构的量反而归因很少。

**Grad-CAM × 显著图：** Grad-CAM 指把损失对目标层的梯度反传以衡量各神经元贡献的方法；显著图指它在前置特征平面上得到的激活分布。这里把梯度目标选在网络输入端的第一卷积层，因为输入本身就是有听觉含义的失真测量，所以显著图可以直接读成哪类听觉事件在何时何频段影响了分数。

另外用两个 3 秒可控 AAC 失真条目验证定位：一个只在 1 到 2 秒加退化，另一个只在 1.1 到 7.5 kHz 加退化。按时间平均和按频率平均的边缘归因图都集中在故意退化区，支持时间与频率定位能力。但需注意这只是两个受控例子，不能推广到所有失真和电平下都有同样锐利的定位。

### 哪些条件下结论不成立？

首先，非波形保持和延迟未对齐是明确边界。ODAQ、USAC1、USAC2 等含这类条目的集上所提系统相关性低于 DeePAQ 和 PEAQ-2f。论文已排除 NISQA 中无法处理的丢包条目并做延迟对齐，所以现有语音侧的好结果是在剔除最难的延迟变化条目后得到的，不能直接推广到含分段可变延迟的传输场景。

其次，比较条件并不完全对等。SCOREQ 有参考在这里用匹配参考的嵌入距离，与原论文非匹配参考不同；DeePAQ 未在 NISQA 上训练，因此它在语音上的弱势 partly 来自训练数据差异，而非结构必然更差。读表时应把训练数据、参考条件和划分一起看。

第三，可解释性证据是定性的。4 种 ODAQ 失真的热图解读依赖听觉量的设计含义，没有报告定位精度的定量指标，也没有消融第一层与其他层的选择差异。两个受控定位实验样本量很小，不能说明阈值、掩蔽较强或多失真叠加时的表现。

### 要复现第一步该准备什么？

复现应从数据管线开始：准备原始和退化配对波形，按 92 dB 声压级归一化并重采样到 48 kHz，用 McGill 页面提供的 PEAQ 实现计算 11 种前置量并拼成 1199 维时频矩阵。论文脚注给出的第三方软件链接本次可达，但它只证明论文提到该链接，不证明作者已公开本工作的完整代码和权重，因此代码开源、权重可下载、系统可运行要分开确认。

模型侧按 1 维 ConvNeXt 四块 517、256、256、256 搭建，第一层按 11 组切分特征通道，输入前加批归一化，时间维并行最大和平均池化后线性合并，再接两个线性头。训练先按 55 种 xHE-AAC 配置生成约 5000 小时数据，随机裁 3 秒片段并实时算 PEAQ-2f 做伪标签，在两种弱监督策略间随机切换训练 100 轮并维护指数移动平均，再用 NISQA 训练集的人工评分微调。

评价时注意复现论文的剔除和对齐：去掉 NISQA-FOR 和 P501 中的丢包条目并做延迟对齐，否则前置计算会因延迟失配给出不可比的结果。SCOREQ 对比若要可比，需明确是有参考距离还是无参考预测，并说明参考是否匹配。

### 什么时候值得尝试还缺什么验证？

当任务是监测编码质量、同时有原始参考、内容横跨语音和音乐、且需要向用户反馈失真类型和大致时频位置时，这个方案值得尝试。它的价值在于用听觉先验压缩输入，使小模型在有限人工标注下仍保持跨内容的排序能力，并用梯度显著图把分数落回可读的听觉量。

不适合的情况是输入延迟不定、波形不保持的生成式内容，或只有单端无参考的场景。此时基于时间平均基础特征的系统更稳，而本系统的前置特征会因对齐和波形依赖失效。

还缺的验证包括：在统一训练数据下与基线的公平对比、对显著图定位精度的定量评价、多失真叠加和不同声压级下的鲁棒性，以及端到端运行时的真实延迟与内存占用。只有补上这些，才能把相关性数字转化为可部署的监测能力。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.35810v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
