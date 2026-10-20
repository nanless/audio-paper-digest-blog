---
title: "CASE: Complementary Articulation-Aware Speech Encoder to Enhance Speech-Driven 3D Facial Animation"
date: 2026-10-20
draft: false
tags: [音频驱动三维对象生成, 对比学习, 语音, 音视频]
categories: [论文速递]
description: "针对通用语音编码器缺少可见发音几何约束的问题，CASE 用韩语语音-唇部网格对做短片段对比适配，再以残差交叉注意力把纯音频互补特征注入四种原有动画生成器，在英文 VOCASET 上把唇部顶点误差平均降低 2.8-6.0%，代价是增加约 132-135 MB 显存和额外端到端延迟。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.25342"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "CASE：给语音驱动 3D 人脸动画补上嘴部几何感知的语音编码器"
paper_digest_original_title: "CASE: Complementary Articulation-Aware Speech Encoder to Enhance Speech-Driven 3D Facial Animation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.25342v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.25342v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.25342v1.pdf"
paper_digest_primary_task: "音频驱动三维对象生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-driven-3d-generation","label":"音频驱动三维对象生成"},{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"}]
paper_digest_primary_method: "对比学习"
paper_digest_score: 5.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对通用语音编码器缺少可见发音几何约束的问题，CASE 用韩语语音-唇部网格对做短片段对比适配，再以残差交叉注意力把纯音频互补特征注入四种原有动画生成器，在英文 VOCASET 上把唇部顶点误差平均降低 2.8-6.0%，代价是增加约 132-135 MB 显存和额外端到端延迟。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jaehong Myung"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Seungho Eum"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Taegon Kim"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hyunjung Chung"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Unsang Park"}]
paper_digest_abstract_sha256: "4d1b2b26e22d5349f4e6d81509b0a20c73908443358f8462637dadfaa65f5a3a"
paper_digest_sidecars: {"citation.bib":{"sha256":"98faf2ec6b9aa0efe5dcaf1da4a79e877f74303b0279b6181f74add4e748e45f","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25342/citation.bib"},"citation.json":{"sha256":"ad770395b34d6942ae8d2ccc73cbe38f8d86b4e3cd59a1dc8685354f1301a82d","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25342/citation.json"},"citation.ris":{"sha256":"8799cc687770b9528b15346fac4b88d123ca25ad41632e41320efee82cf1255d","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25342/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"1d1b019205a53a33d0163246db60fdb19c467ea75f67418969fc53fe6e4fecc8","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25342/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "98c055cebfa626fa30369e6f2d1fdd329f714d62afbbca856b78c987a2385ae6"
paper_digest_api_reader_plan_sha256: "82190d8f87e6ba21e5d0b5d5f3139eb33f4cecd0dbcdef9de870b12dbcef435d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "12881dd2ea72f78c6cdaa5a40a0235cb9f84073916787240218933715a15f60e"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "2f9beb0dca46595647eb70fe4317c1b97bfdd404a2d9880d7429abe4045e8412"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "c14e73644e143475b7ff44bc6e52f9a1edf02dc8b4cceae7eff3fdfc99e9d4b5"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "fd3de76112e643eb9888e98512ade2bd151bbea5946a900529ce79a1c6294133"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 CASE：给语音驱动 3D 人脸动画补上嘴部几何感知的语音编码器

> 英文题目：*[CASE: Complementary Articulation-Aware Speech Encoder to Enhance Speech-Driven 3D Facial Animation](https://arxiv.org/abs/2610.25342v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频驱动三维对象生成](/audio-paper-digest-blog/papers/?concept=task.audio-driven-3d-generation)
- **研究方法**：[对比学习](/audio-paper-digest-blog/papers/?concept=method.contrastive)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)；[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.9/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Jaehong Myung：机构信息未能在本次解析中与作者逐人可靠绑定
- Seungho Eum：机构信息未能在本次解析中与作者逐人可靠绑定
- Taegon Kim：机构信息未能在本次解析中与作者逐人可靠绑定
- Hyunjung Chung：机构信息未能在本次解析中与作者逐人可靠绑定
- Unsang Park：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

语音驱动三维人脸动画需把输入语音映射为时间对齐的三维人脸网格，难点在于通用自监督语音编码器的预训练目标并不直接对应可见的唇部开合与唇形变化。论文提出互补构音感知语音编码器CASE，先以韩国语语音与三维唇部网格配对数据做五帧短片段对比对齐，将语音特征与连续三维唇部网格VQ-VAE隐变量拉近，适配后去掉几何分支，只保留纯音频CASE编码器。推理时基线自监督语音表示做查询，CASE特征做键和值，经残差交叉注意力融合后送入原有运动生成结构，原解码器架构与训练目标保持不变。与已有路线相比，CASE既不需要音素标注，也不替换生成器，只增加可复用的音频分支。在共同VOCASET受试者划分上三次运行取均值的评测中，四个基线系统加入CASE后相对各自基线将唇顶点误差分别降低6.0%、3.4%、4.8%和2.8%，平均全脸顶点误差分别下降6.6%、2.5%、0.4%和2.4%。在相同初始化与融合接口的VOCASET对照中，CASE在四个生成器上的平均唇顶点误差均低于未适配AV-SE流，相对基线的进一步降幅高于AV-SE，增益随模型而异。结论限于以英语预训练音视频先验为起点、从韩语三维适配向英语下游迁移的设定，尚未在BIWI等第二数据集验证；在39条VOCASET测试语音的RTX 3090在线评测中，CASE相对原基线推理延迟增加149 ms到694 ms，但总耗时仍短于输入音频时长。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音到 3D 人脸动画要解决什么输入输出问题

语音驱动的 3D 人脸动画的输入是一段语音波形，输出是随时间对齐的 3D 人脸网格序列，目标是让嘴部开合、唇形与语音内容在时间上对应，同时保持整张脸的合理形状。论文把任务拆成两段：先由预训练的自监督语音编码器把音频变成特征序列，再由运动生成器把该特征序列变成逐帧顶点位置。

关键在于第一段决定了第二段能看到什么。如果语音编码器只保留了适合语音识别的声学线索，而丢掉了嘴部可见运动的细微差别，生成器再强也难以补回嘴形。例如原文提到的例子，/p/和/b/在听觉上靠声带振动区分，但在视觉上都是双唇闭合；元音的嘴形还会随上下文协同发音而变化。通用自监督目标并没有被要求保留这类局部几何信息，这是本文要补的缺口。

初学者容易把这项任务误解为做表情或做口型分类。本文的输出不是类别标签，而是连续的顶点坐标，评价也不是分类准确率，而是逐帧顶点位置与真值的平方误差。因此后文的唇部顶点误差和全脸顶点误差都是重建误差，数值越低越好。

### 已有路线为什么没有直接对准局部 3D 唇部几何

论文梳理了 4 类相邻做法。第一类是直接沿用通用语音表征，例如 FaceFormer 和 CodeTalker 用 wav2vec 2.0，SelfTalk 用多语种 XLSR-53，UniTalker 用 WavLM，生成器各不相同但都只依赖单路基线语音表征。第二类是音视频自监督，例如 AV-SE 利用同步语音和 2D 唇部视频塑造语音表征，但目标仍不是局部连续 3D 唇部几何。

第三类是在生成器侧或监督侧加入发音相关信息，例如 FaceXHuBERT 直接用自监督语音表征条件化表情动画，PhISANet 加音素级 CTC 监督，RQTalker 用区域感知的向量量化做运动先验。第 4 类是提供可复用的音频分支或感知监督，例如 Wav2Sem 提供语义音频分支，用唇读专家做感知损失，或学习语音-网格表征做感知监督与评价。

CASE 与它们的区别在于输入、目标和运行阶段都不同：它不需要音素标签，也不替换运动解码器结构与目标，而是在已有生成器之前插入一路纯音频的互补特征。比较时要注意，只有同样保留原生成器结构和训练目标、只换语音特征接入方式的对照，才是同条件比较。

### 论文提出的中心问题与适用边界

论文的中心问题是：能否用韩语语音-网格对把一个互补语音编码器适配到局部 3D 唇部几何，再把它用于英文人脸动画，而不重新设计运动解码器结构或目标？这个问题把 3 个要素绑在一起：适配数据的语言是韩语，下游评价的语言是英文，生成器保持不变。

这个设定决定了结论的成立条件。适配用的是韩国 AI-Hub 公开发布的韩语 3D 音视频说话人数据集的训练划分，包含 10 个说话人，按 8/1/1 做说话人无关划分；评价用的是英文 VOCASET 上的公共被试划分。因此跨语言迁移的说法依赖于共享的英文预训练音视频先验，不能理解为与语言无关的发音编码。

论文也没有声称解决了全部表情或上脸运动。它监督的是 4410 个顶点的嘴部区域，评价的主要指标也是唇部顶点误差，全脸误差只是用来检查局部增益是否损害整体重建。

### CASE 两阶段流程：先对比适配再即插即用

CASE 的全过程可以沿着一个样本理解。适配阶段同时看到语音和几何：一段 5 帧网格小片段和对应的 5 段帧局部滤波器组分别走语音分支和几何分支，映射到共享空间后做对比学习。部署阶段只看到音频：几何分支、VQ-VAE 和语音活动检测都被移除，只剩纯音频的 CASE 编码器输出 512 维特征，再与基线语音编码器输出融合后送入原有运动生成堆栈。

下图把这两个阶段画在了一起，上半部分是训练时的双分支对比，下半部分是测试时的双编码器加融合加解码。读图时注意基线块可以是 wav2vec 2.0、XLSR-53 或 WavLM，原有运动生成结构和训练目标保持不变，雪花表示冻结而火焰表示可训练。

> **看图路径：** 1. 先看上半部分两条分支如何分别处理音频滤波器组和 3D 唇网格再汇入对称 InfoNCE；2. 再看下半部分输入栏的音频与模板如何分别进入语音编码器和运动编码器；3. 注意中间融合框内查询来自基线、键和值来自 CASE 以及残差加号如何回到解码器；4. 对照雪花与火焰图例区分适配阶段和集成阶段哪些模块冻结哪些可训练

[![原论文 Figure 1：Overview of Case. (a) Clip-level contrastive training aligns frame-local speech features with…](https://arxiv.org/html/2610.25342v1/ICASSP_CASE_fig1_v1.3.png)](https://arxiv.org/html/2610.25342v1/ICASSP_CASE_fig1_v1.3.png)

*论文图 1。原论文 Figure 1:：“Overview of Case. (a) Clip-level contrastive training aligns frame-local speech features with continuous 3D lip-mesh latents.”。*

从像素上看，图上半部分左端标出一个片段长度为 5 帧，音频波形进入帧局部滤波器组，3D 嘴唇网格进入唇部 VQ-VAE 编码器，两路各经过投影、多层感知与层归一化、语音活动加权池化和归一化得到语音侧和几何侧嵌入，再进入对称 InfoNCE。下半部分分为输入、特征提取与融合、运动生成三栏，基线语音编码器与 CASE 并行处理同一音频，交叉注意力融合框内明确标出查询、键、值和残差加号，模板则单独进入运动编码器。这种画法帮助区分适配了哪一小部分参数。

### 语音侧和几何侧各自处理什么对象

先看输入表示。语音侧不是整句波形，而是与 5 帧网格片段配对的 5 个帧局部 20×128 滤波器组，强调的是时间局部语音-发音对应，而不是整句语义。几何侧是从每帧网格中截出的嘴部区域，顶点数为 4410 个，送入单独训练并冻结的唇部 VQ-VAE。

几何目标值得展开。论文用的不是离散码字或词标签，而是 VQ-VAE 编码器在量化之前的 1024 维连续输出。也就是说，监督信号保留了唇部形状的连续变化，避免把相似嘴形硬归为同一个离散类别。这一步的输出是后面对比如本的几何侧起点。

**自监督语音编码器 × CASE 互补语音编码器：** 自监督语音编码器指 wav2vec 2.0、XLSR-53、WavLM 这类在大规模语音上预训练、为动画生成器提供声学和语言线索的基线编码器；CASE 互补语音编码器指从音视频语音先验 AV-SE 出发、再被 3D 唇部几何适配过的第二路语音编码器。二者分工是基线负责通用表征、CASE 负责补充局部可见发音信息，搭配后以残差方式融合，既保留原生成器又多一路几何感知的音频特征。

**AV-SE × 唇部 VQ-VAE：** AV-SE 是第一阶段在同步英文语音和 2D 唇部视频上学到的音视频语音编码器，提供英文预训练的音视频先验；唇部 VQ-VAE 是单独训练并冻结的、把 4410 个顶点的嘴部区域网格压缩为 1024 维连续隐向量的几何编码器。二者分工是 AV-SE 出语音侧特征、VQ-VAE 出几何侧目标，搭配后才能在没有音素标签的情况下建立语音片段与连续 3D 唇部形状的局部对应。

两个分支各有一个轻量投影头，把语音特征和唇部隐向量映射到共享的 512 维空间，再做语音活动检测掩码池化得到片段级嵌入。片段以语音活跃区为中心截取，且至少 3 帧为浊音才保留，这种筛选是为了让对比学习集中在真正有发音内容的短片段上。

### 对比目标如何把语音片段与唇形拉近

投影后的帧级特征要先聚合成片段级嵌入。论文用掩码加权平均再做归一化，权重是语音活动检测掩码，目的是让静音帧少参与，让浊音帧主导该片段的表示。语音侧和几何侧各得到一个归一化向量，分别代表这段约 167 ms 内听到了什么和看到了什么嘴形。

下面这条公式给出几何侧连续隐向量的定义，即唇部网格经唇部编码器得到连续隐向量，下标表示帧序号。它说明几何分支的起点是逐帧网格，而不是整段视频的全局向量。

\[\mathbf{z}_{t}=E_{\mathrm{lip}}(\mathbf{y}_{t})\]

在得到片段嵌入后，优化的是双向对称 InfoNCE 损失，包含语音到唇形和唇形到语音 2 个方向，同一小批次内其他片段都做负样本。直观理解是，模型要在批次内认出哪段唇形与当前语音真正同步，从而把语音特征往可见发音方向调整。

**片段级对比学习 × InfoNCE：** 片段级对比学习指把约 167 ms 的五帧语音小片段和对应五帧唇部网格隐向量拉近、把同批次其他不匹配片段推远的训练思路；InfoNCE 是实现该思路的双向对称损失函数，包含语音到几何和几何到语音两个方向。搭配的意义是让模型学会的是时间局部发音对应，而不是整句语义相似，温度系数控制分布的集中程度。

需要提醒的是，论文只报告了训练 12 轮、优化器为 AdamW、余弦衰减加 5% 热身，以及只更新最后一个 AV-SE Transformer 块、输出归一化和两个投影头，其余语音主干和 VQ-VAE 冻结。原文没有给出批次大小、学习率数值或温度具体值，这些缺口不能靠猜测补齐。

### 纯音频 CASE 特征如何与基线表征融合

适配完成后，CASE 作为纯音频互补编码器运行。它对每个无重叠 5 帧输出块产生一个 512 维特征，再把所得序列对齐到基线时间线。这里的对齐是必要的，因为基线编码器和 CASE 的帧率与分块方式不同，不对齐就无法做逐时刻融合。

融合采用残差交叉注意力。基线输出经层归一化与投影得到查询，对齐后的 CASE 特征经另一组层归一化与投影得到键和值，再做四头注意力。融合输出是基线本身加上缩放后的注意力输出，缩放系数初始化为 0.1，输出投影初始化为零，因此融合开始时是精确恒等映射。

**基线语音表征 × 残差交叉注意力：** 基线语音表征指原动画系统自带 SSL 编码器的输出 H_main；残差交叉注意力指以基线表征做查询、以对齐后的 CASE 特征做键和值的四头注意力融合模块，输出再乘以系数加回基线。分工是基线定时间线和主内容、CASE 只做增量补充，初始时输出投影置零使融合从恒等映射开始，避免一开始就破坏原生成器。

融合点在基线语音编码器输出之后，基线特有的投影与运动生成堆栈保留原结构和训练目标，模板条件路径与生成流程也保留。这种保留解码器的设计意味着 CASE 不需要为每个生成器重写解码器，只需在同一插入点加一个小融合模块，这也是后文能在 4 个异构系统上做控制比较的前提。

### 适配训练更新了哪些参数、冻结了哪些

本节明确训练与冻结的分工。适配阶段可训练的是 AV-SE 最后一个 Transformer 块、它的输出归一化，以及语音和唇部两个投影头；冻结的是其余语音主干和唇部 VQ-VAE。这种小范围更新的理由是保留音视频先验，只把一小部分参数适配到 3D 语料。

训练数据是韩语 3D 音视频说话人数据集的训练划分，说话人编号 M01-M08 用于训练，M09 和 M10 分别用于验证和测试，保证说话人无关。每个训练样本是一个 5 帧片段，语音与几何在时间上配对，静音过多的片段被丢弃。

论文报告的 CASE 编码器是 12 轮检查点，后文所有下游实验都用这一个检查点。原文没有披露完整的优化超参数和数据增强细节，因此复现时只能按已报告的 12 轮、AdamW、余弦衰减、5% 热身和小范围更新来执行，缺失项要如实记录而不是假设默认值。

### 下游评价的数据、基线与指标如何定义

下游评价统一在英文 VOCASET 的公共被试划分上进行，涉及 4 个系统：CodeTalker、FaceFormer、SelfTalk 和 UniTalker。它们暴露 3 种基线语音表征：CodeTalker 和 FaceFormer 用 wav2vec 2.0，SelfTalk 用 XLSR-53，UniTalker 用 WavLM。其中 UniTalker 是仅 VOCASET 单输出头的实例，保留 512 维 PCA 运动表征，音频编码器从 WavLM-base-plus 初始化。

比较的公平条件是每个系统内基线、加未适配 AV-SE、加 CASE 三者保留相同生成器结构、训练目标和下游训练计划，两个辅助条件还共享相同融合接口与插入点。主结果是三次运行的平均值，加粗表示每对基线内较低值。

**唇部顶点误差 × 全脸顶点误差：** 唇部顶点误差 LVE 是每帧在唇部顶点集合上取最大平方 l2 误差再对时间平均，是对局部嘴形最敏感的主要指标，空间平均会掩盖局部错误所以用最大值；全脸顶点误差 MVE 是每帧对全部 N 个顶点平均平方误差再对时间平均，衡量整体重建。搭配的意义是先看局部发音是否变准，再检查局部增益是否以牺牲全脸为代价，二者都是越低越好。

指标方向都是越低越好。LVE 对每帧取唇部顶点集上的最大平方误差，MVE 对每帧取全脸平均平方误差。论文还报告唇部 VQ-VAE 在留出的韩语数据上目标区域逐顶点均方误差可用且码利用充分，说明几何目标本身的重建质量处于可用范围。

### 四个生成器上的主结果：唇部误差是否都下降

要回答的核心问题是，在保留原生成器的前提下加入 CASE，唇部重建是否变准，全脸是否没有变差。下表比较每个基线与其加 CASE 版本，指标方向均为越低越好，相对变化是唇部误差的相对降低，数值为三次运行平均。

| Baseline (SSL Encoder) | Method | Lip Vertex Error (×10−5) ↓ | Mean Vertex Error (×10−6) ↓ | Relative LVE Change |
| --- | --- | --- | --- | --- |
| CodeTalker [21] wav2vec 2.0 [1] | Baseline | 3.8744 | 2.1171 | – |
| CodeTalker [21] wav2vec 2.0 [1] | +Case | 3.6424 | 1.9764 | −6.0% |
| FaceFormer [8] wav2vec 2.0 [1] | Baseline | 3.4864 | 1.9738 | – |
| FaceFormer [8] wav2vec 2.0 [1] | +Case | 3.3677 | 1.9236 | −3.4% |
| SelfTalk [17] XLSR-53 [5] | Baseline | 2.9629 | 1.7719 | – |
| SelfTalk [17] XLSR-53 [5] | +Case | 2.8213 | 1.7653 | −4.8% |
| UniTalker [7] WavLM [3] | Baseline | 3.3778 | 1.9342 | – |
| UniTalker [7] WavLM [3] | +Case | 3.2832 | 1.8875 | −2.8% |

上表显示 4 个生成器的平均唇部误差都降低，相对降幅分别为 CodeTalker 约 6.0%、FaceFormer 约 3.4%、SelfTalk 约 4.8%、UniTalker 约 2.8%。平均全脸误差也随之下降，没有出现局部变好但整体变差的情况。由于 CASE 由唇部局部几何监督，唇部降低是主要结果，伴随的全脸降低表明局部增益没有以损害整体重建为代价。这个一致性是在异构条件下的，基线覆盖 3 种语音预训练，生成器覆盖不同类型，但效果大小因模型而异，结论只在英文 VOCASET 公共划分、三次平均的条件下成立。本表数值与单位依据论文 PDF。

### 3D 几何适配是否比只加未适配先验更有效

第二个要回答的问题是，增益究竟来自 2D 音视频先验本身，还是来自韩语 3D 唇部几何适配。下表在共享初始化、融合与插入点的条件下比较未适配 AV-SE 与 CASE，前者用英文预训练的 AV-SE 编码器，后者是经过 12 轮韩语 3D 唇隐向量适配后的同一流。

| Baseline | Method | Lip Vertex Error (×10−5) ↓ | ΔLVE |
| --- | --- | --- | --- |
| CodeTalker [3] | Baseline | 3.8744 | – |
| CodeTalker [3] | +AV-SE | 3.7535 | −3.1% |
| CodeTalker [3] | +CASE (ours) | 3.6424 | −6.0% |
| FaceFormer [2] | Baseline | 3.4864 | – |
| FaceFormer [2] | +AV-SE | 3.3858 | −2.9% |
| FaceFormer [2] | +CASE (ours) | 3.3677 | −3.4% |
| SelfTalk [5] | Baseline | 2.9629 | – |
| SelfTalk [5] | +AV-SE | 2.9379 | −0.8% |
| SelfTalk [5] | +CASE (ours) | 2.8213 | −4.8% |
| UniTalker [7] | Baseline | 3.3778 | – |
| UniTalker [7] | +AV-SE | 3.2947 | −2.5% |
| UniTalker [7] | +CASE (ours) | 3.2832 | −2.8% |

相对于基线，未适配 AV-SE 已能降低平均唇部误差，CASE 在报告均值层面又进一步降低，在 4 个系统上都低于未适配 AV-SE，但差距因模型而异，FaceFormer 和 UniTalker 上的额外增益很小。由于两者共享初始化与集成方式，均值差距提供了 3D 唇几何适配的受控下游比较。但 2D 先验与 3D 适配仍交织在一起，韩语到英文的结果只能说与共享先验下的跨语言迁移一致，不能说成与语言无关的发音编码，微小差距也应视为模型相关的幅度差异。本表数值与单位依据论文 PDF。

### 在线推理要多花多少时间与显存

第 3 个要回答的问题是部署代价。论文在 RTX 3090 上对 39 条 VOCASET 测试语音做端到端在线推理，包含 CASE 特征提取，延迟取三次热身后通过的中位数再对语音取平均，显存增量相对原基线，运行时间与音频时长之比小于 1 表示处理比播放音频更快。

| Generator | Original latency (ms) | +CASE latency (ms) | Added CASE latency (ms) | Runtime / audio duration (×) | ΔVRAM (MB) | Fusion Δparams (% trainable) |
| --- | --- | --- | --- | --- | --- | --- |
| CodeTalker [3] | 1650 | 1799 | +149 | 0.47 | +132 | 1.97M (1.08%) |
| FaceFormer [2] | 230 | 405 | +175 | 0.10 | +132 | 1.97M (2.14%) |
| SelfTalk [5] | 21 | 199 | +178 | 0.05 | +135 | 3.15M (0.70%) |
| UniTalker [7] | 22 | 716 | +694 | 0.19 | +133 | 1.97M (2.16%) |

表中 CASE 给前 3 个系统增加约一百多毫秒，当前 UniTalker 实现增加更多，原因是它对每个 5 帧块在 CPU 上重复计算滤波器组。尽管如此，4 个系统的总处理时间仍短于输入音频时长，比值在 0.05 到 0.47 之间。额外显存仅 130 兆字节左右，融合模块使可训练参数增加约 0.70-2.16%。这里要分开看原始延迟、新增延迟和实时比，实时比小于 1 不等于逐帧低延迟，它只说明整句处理快于音频播放，UniTalker 的较大增量是当前实现的工程开销，不是方法固有的下限。本表数值与单位依据论文 PDF。

### 定性对比与几何目标本身说明了什么

论文用 VOCASET 选中帧做了示意性定性对比，每行展示真值与配对的基线和加 CASE 输出，红框标出用于视觉比较的嘴部区域，4 个系统分别对应不同生成器。原文对该图的文字说明是配对输出可视化了唇部开合与圆展的差异。

这类图只能看作示意，不能当作定量证据。它没有说明选帧规则、覆盖了哪些音素或口型，红框是人工选出的嘴部区域，观察到的开合变化也可能是个别帧的现象。论文自己也指出，当前发音感知的证据主要是下游更低的平均唇部误差和示意性局部嘴形变化，缺少对唇部闭合、圆展和协同发音轨迹的直接分析。

另一项特有细节是几何目标的质量。在留出的韩语数据上，唇部 VQ-VAE 重建目标区域的逐顶点均方误差较小且码利用充分，困惑度超过一百。这说明连续隐向量不是坍缩到少数码上，而是有较充分的码利用，但它只证明目标本身可用，不直接证明语音侧学到了哪些发音属性。要得到机制性解释，还需要补充闭合、圆展等可测量的发音分析。

### 哪些结论还不能下、缺了哪项验证

论文明确列出三点局限。第一，评价目前限于 VOCASET，常用的另 1 基准 BIWI 在研究期间无法公开获取，因此没有匹配的第二数据集评价。要谈跨数据集泛化，必须补第二个数据集的同条件测试。

第二，CASE 起点是英文预训练的 AV-SE 编码器，CASE 在 4 个生成器上的平均唇部误差都低于未适配 AV-SE，但差距因模型而异。由于 2D 先验与 3D 适配交织，韩语到英文的结果只能说与共享先验下的跨语言迁移一致，不是与语言无关的发音。未来需要检验多语或非英文先验以及其他语音编码器。

第三，发音感知的直接证据不足。现有支持主要是 4 个系统上更低的平均唇部误差和示意性嘴形变化，缺少唇部闭合、圆展和协同发音轨迹的直接测量。补上这些可测量的发音分析，才能说清 CASE 到底编码了哪些发音属性。

### 复现第一步做什么、需要哪些数据与代码

复现要从数据与检查点两条线起步。数据线需要韩语 3D 音视频说话人数据集的公开发布训练划分，按 M01-M08、M09、M10 做说话人无关划分，并按 30 fps 提取 4410 顶点嘴部区域；下游需要 VOCASET 公共被试划分，并在 4 个系统内保持相同的生成器结构、训练目标和下游计划。UniTalker 需按论文做仅 VOCASET 单输出头、512 维 PCA 运动表征、用 WavLM-base-plus 初始化音频编码器的实例化。

模型线需要英文预训练 AV-SE 的第一阶段语音编码器、单独训练并冻结的唇部 VQ-VAE，以及 12 轮适配后的 CASE 检查点。适配时只更新最后一个 Transformer 块、输出归一化和两个投影头，其余冻结；下游融合用四头残差交叉注意力，系数初值 0.1，输出投影置零。

关于来源，本次只确认没有完成 HTTPS 状态验证的绑定资源，不得声称代码、模型或数据已公开。论文提到 AV-SE 来自已有工作、韩语数据经 AI-Hub 分发，但这不等于作者已开源本研究的代码与权重。代码可跑、权重可下载、系统可运行是三件事，复现前要分别确认。

### 什么时候值得尝试、还需补哪项验证

如果你的系统已经有一个效果尚可的语音驱动 3D 动画生成器，但嘴部细节不够准，又不想重写解码器或引入音素标注，CASE 的思路值得尝试：保留原编码器与解码器，只加一路经 3D 唇几何适配的纯音频特征，用小融合模块做残差注入。预期是在类似 VOCASET 的英文数据上看到唇部误差的个位数百分比相对下降，且全脸误差不上升，但具体幅度与生成器有关。

复现第一步是先拿到同一插入点的基线与加未适配 AV-SE 结果，确认融合接口本身的增益，再换上经韩语 3D 适配的 CASE，隔离出几何适配的贡献。同时记录三次运行均值、延迟中位数与显存增量，避免把单次波动或工程实现开销当成方法差异。

还需要补的验证是第二数据集评价、韩语下游基准，以及唇部闭合与圆展等直接发音测量。只有补上这些，才能判断增益是跨数据集成立，还是仅在当前划分与实现下成立，也才能把下游误差降低与具体的发音机制对应起来。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.25342v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-20/)
