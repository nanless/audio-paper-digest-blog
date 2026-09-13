---
title: "Cross-Modal Guided Visual Synthesis for Data-Efficient Multimodal Depression Recognition"
date: 2026-09-13
draft: false
description: "针对临床访谈数据少导致视觉编码器学不好，该工作用音频文本为条件合成视觉特征并与识别器联合优化，在 DAIC-WOZ 上 F1 达到 0.86、在 E-DAIC 上 CCC 达到 0.69，代价是依赖词级对齐与端到端联合训练的复杂度。"
tags: ["多模态学习", "变分自编码器", "低资源", "音视频", "病理语音评估"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a498f62af7efceda6c605e69571719c1c77cc8c7012908b399b63031e50809fd"
paper_digest_api_reader_plan_sha256: "669b0faa3c62150daa3fb1be9339c214835ffef336c0a1baca35de6fe262279f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "98a971e26708a8b47e1a6480c4801c6e5d8db20306878a6d4c46bc21fd3b9cff"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "3b7678e1b5174bdb29d1698cbcae4e283c425c9a4cae9799632cf1c0ea4f6c9f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "6338219d481f64a3c84e8bb38d53675298818cb7ee6707aadf501ccf98cda6e8"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "3d91a0edc235629774a3197d6c3279a5da9155ac9ca4fd8837ffd4477f6c9737"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.vae","label":"变分自编码器"},{"facet":"setting","id":"setting.low-resource","label":"低资源"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.pathological-speech","label":"病理语音评估"}]
paper_digest_primary_task: "病理语音评估"
paper_digest_primary_method: "变分自编码器"
paper_digest_score: 5.3
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 不追求更像人脸，而是生成对判别更有用的视觉特征：跨模态引导的抑郁识别训练框架

> 英文题目：*Cross-Modal Guided Visual Synthesis for Data-Efficient Multimodal Depression Recognition*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper.pdf)

标签：#多模态学习 #变分自编码器 #低资源 #音视频 #病理语音评估

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：后50% | 文档类型：方法研究

## 👥 作者与机构

- Shanliang Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoxiao Wang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该工作处理临床访谈中的多模态抑郁识别，输入为同步视频、音频与转录文本，输出为抑郁分数回归值并在DAIC-WOZ上转为二分类，难点在于临床标注规模小导致视觉编码器训练不足，且三模态采样率与时序粒度异构。方法先做特征编码与对齐，用OpenFace 2.0、COVAREP和BERT提取特征并按词级时间戳平均池化对齐到统一语言单元序列，为后续建模提供同步输入。接着以基于Transformer的条件变分自编码器由音频文本上下文建模条件分布并合成视觉特征序列，其采样输出直接作为增强视觉流进入下一步。然后层次融合Transformer以共享权重处理真实流与合成增强流并回归分数，联合优化以真实与增强路均方误差加一致性与KL损失回传合成器，使生成目标从逼真转向判别有利。区别于先独立训练生成器再冻结增强的两阶段范式，该任务引导的联合优化让识别误差直接塑造合成分布，实际意义在于用判别性合成缓解小样本下视觉表示不足并降低误报。在DAIC-WOZ分类任务下，CMG-VS的F1-Score为0.860，高于BiLSTM+BiGRU的F1-Score 0.850。其结论适用边界受限于访谈式英语抑郁语料与特征级合成验证，尚未验证对像素级视频生成、其他疾病或跨语言场景的外推。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 抑郁识别为什么卡在视觉通道上？

这篇论文研究的任务是基于临床访谈的多模态抑郁识别，输入是一段受试者与虚拟访谈官的对话，包含视频、音频和转录文本，输出是一个抑郁严重程度分数，既可用于回归也可按阈值转为是否抑郁的分类。初学者容易把多模态理解成把 3 个编码器输出拼起来就行，但原文强调的矛盾更具体：视觉通道对精神运动迟滞和情感迟钝最直接，却恰恰是数据最喂不饱的部分。临床标注数据规模小、采集成本高，深度视觉编码器在这种低数据条件下学出的表示往往次优，后续再精巧的融合也只是在融合不够好的视觉特征。

为此作者把目标收窄为数据高效的多模态抑郁识别：不去爬更多病人视频，而是在训练内部增强视觉分布。具体做法是把音频和文本当作条件信息，去合成新的视觉特征序列，再让识别器同时从真实 3 模态和合成视觉替换后的增强流中学习。需要保留的关键信息是，合成发生在特征层而非像素层，生成的是 OpenFace 类特征序列，不是可观看的人脸视频；合成是否成功不由好看程度判定，而由下游识别器在真实数据上的表现是否提升来判定。

输入输出关系可以沿一个访谈样本走一遍：原始视频帧先变成动作单元与姿态注视向量，原始音频变成基频与倒谱类声学向量，转录文本变成词嵌入，三者在词时间戳下对齐成等长序列；合成器读入音频文本序列并采样隐变量，输出一条新的视觉序列；识别器分别对真实视觉版和合成视觉版做融合回归，得到两个预测分数并与真值比较。这种安排把数据增强从预处理搬进训练闭环，是全文后续所有组件与损失的前提。

### 已有路线在何处留下缺口？

第一条路线是视觉与多模态抑郁识别本身。早期用手工特征如局部二值模式和方向梯度直方图刻画面部外观与动态，后来用 3 维卷积与循环网络学时空表示，最近也有视频 Transformer 捕捉长程行为依赖。多模态一侧的主流是 Transformer 融合，用自注意力与交叉注意力学模态间关系。原文对这条路线的判断是统一受限于标注临床数据规模小，视觉通路尤其数据饥渴，即使融合结构先进，被融合的视觉特征仍可能因训练不足而质量不高。

第二条路线是计算机视觉中的生成式数据增强。传统几何变换与 Mixup、CutMix 类插值只能在训练数据的凸包内操作，难以产生语义上有意义的新视觉内容；生成对抗网络、变分自编码器与扩散模型可以拟合分布并合成新样本，在医学影像等稀缺领域用于扩类与扩量，条件生成还能按标签或文本控制属性。但原文指出的缺口是 prevailing 的 2 阶段解耦流程：先独立训练生成器追求合成质量，再把输出当静态数据训练任务模型，下游性能无法回传指导合成。

第三条相关领域是跨模态合成与翻译，例如语音驱动人脸动画追求口唇同步与表情逼真，以及文本到图像视频追求感知质量，常用指标是 Fréchet Inception Distance 与 CLIP 分数或主观评价。教学上要区分的是，本文借用了条件生成的技术形式，但目标不是产出可消费的视频，而是把合成当作数据增强手段。正因为目标不同，作者才提出任务引导的联合优化，让识别误差的梯度直接更新合成器，这是与追求逼真度的语音动画和文生图路线在监督来源上的本质差别。

### 要解决的具体问题与适用边界是什么？

论文把问题形式化为学习条件分布 P 视觉特征给音频文本特征。给定对齐后的三序列，合成器要学会从音频文本上下文出发，采样出多条合理且多样的视觉行为序列，丰富训练分布。识别器则要从真实流与增强流中回归抑郁分数。联合目标要求合成特征既与真实视觉一致，又能帮助识别器降低回归误差。

这个形式隐含 3 个适用条件。第一，音频文本与视觉确实存在可学习的关联，语音内容与发声方式隐含地联系着面部表情，否则条件引导无从谈起。第二，时间对齐必须可靠，论文依赖转录中的词级或话语级起止时间，对视觉帧与音频帧做区间内平均池化，若时间戳粗糙则细粒度对应会被抹平。第三，评价同时看分类与回归，DAIC-WOZ 侧重分类的精确率召回率与 F1，E-DAIC 侧重一致性相关系数、均方根误差与平均绝对误差，任何只看单一指标的结论都不完整。

一个常见误解是把该方法当成缺失模态补全。原文处理的是训练时 3 模态都在、但视觉学不好的情况，合成用于训练增强；测试时仍按正常多模态输入评估，没有声称可在缺视频条件下单独用音频文本推理。若把合成特征直接当作测试时缺失视频的替代，属于超出证据的推广，需要另行验证。

### 框架如何把生成与识别连成闭环？

整体框架按 4 个阶段组织：特征编码与对齐、条件视觉合成器、多模态识别器、联合优化。编码对齐把异构异步的原始信号变成同步定长序列；合成器以音频文本为条件生成新的视觉序列；识别器用共享融合网络处理真实流与增强流两条并行数据；联合优化用复合损失同时驱动生成保真与识别准确。关键在于这不是先生成后训练的流水线，而是端到端系统，合成器与识别器在 1 次训练中互相影响。

以一个词序列为例，文本提供第几个语言单元的锚点，视觉与音频在该词起止区间内各自平均，得到第 i 个对齐向量，3 路统一投影到同一维度后进入后续模块。合成器在训练时见过真实视觉，推理合成时只需音频文本加先验采样即可产生新视觉。识别器对真实版三元组和合成替换版三元组分别前向，两个预测都与真值算均方误差，其中增强分支的梯度会回传到合成器参数，这就形成闭环：识别器在合成数据上的好坏直接修正下 1 次合成的方向。

下面这张总览图把 4 阶段的主路径与反馈路径画在同一张图上，适合先建立整体因果再进入细节。

**条件变分自编码器 × 跨模态引导：** 条件变分自编码器负责建模视觉特征的条件分布并通过采样产生多样样本，跨模态引导负责把音频和文本拼成的上下文作为键值约束生成方向，二者搭配的理由是语音内容与表情存在隐含关联，组合后合成器不再无条件想象人脸，而是沿着当前话语应有的视觉行为流形采样。

> **看图路径：** 1. 先从左到右沿文本视频音频三路看编码与对齐如何汇成等长序列；2. 再看中间合成器如何以音频文本为条件输出多条黄色合成视觉序列；3. 接着看识别器如何并行处理真实流与增强流；4. 最后看右侧联合优化如何把合成一致性与两路回归损失连回两个模块

[![原论文 Figure 1：The proposed Cross-Modal Guided Visual Synthesis (CMG-VS) framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/fd1603003d6a/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/fd1603003d6a/figure-1.png)

*论文图 1。原论文 Figure 1：“The proposed Cross-Modal Guided Visual Synthesis (CMG-VS) framework.”。*

读完总览后应记住闭环的监督来源有三处：重构一致性要求像真，隐空间正则要求可采样，识别误差要求有用。前两者让合成器成为合格的生成器，第三者让它成为对任务有用的增强器。若去掉第 3 路梯度，系统就退化为普通的 2 阶段增强，这正是消融中要对比的变体。

### 编码对齐与条件合成器如何计算？

编码阶段为每个模态选用行为信号处理中常用的工具。视觉用 OpenFace 2.0 逐帧提取，精选 17 个关键动作单元强度、6 自由度头部姿态与眼神向量，逐帧拼接为原始视觉序列；音频用 COVAREP 以 100 赫兹采样率提取基频、嗓音质量、梅尔倒谱系数与韵律指标；文本用预训练 BERT 对话语转录编码为词嵌入序列，并以该序列为时间锚点。随后对每个语言单元按其起止时间收集落入区间的视频帧与音频帧，分别做时间平均池化，得到完全同步的三序列，再投影到统一特征维度。

合成器被实现为条件变分自编码器，编码器与解码器均为 Transformer。条件编码器以视觉序列为查询，以音频文本拼接为键值做交叉注意力，输出经时间均值池化为单向量，再经两个线性头得到隐分布的均值与对数方差；训练时用重参数化从后验采样隐向量，合成时从标准高斯先验采样以获得多样性。条件解码器把单个隐向量复制到序列长度并加位置嵌入作为查询，再次以同一音频文本上下文为键值做多层交叉注意力，逐步译为时序连贯的合成视觉序列。

**面部动作单元 × 头部姿态与眼神：** 面部动作单元分工是量化 17 个关键肌肉强度的细粒度表情信号，头部姿态与眼神分工是刻画参与度和精神运动性相关的非言语线索，二者搭配是因为抑郁既表现为表情迟钝也表现为回避与活动减少，拼接后形成每帧的原始视觉向量供后续对齐与合成使用。

下面这张合成器结构图把编码、采样、解码 3 段的查询键值关系具体化，是理解条件如何注入的直接依据。

> **看图路径：** 1. 先看左侧条件编码器中视觉作查询、音频文本拼接作键值的交叉块；2. 再看中间高斯采样如何由均值方差头经重参数化得到隐向量；3. 最后看右侧条件解码器如何把复制后的隐向量查询与同一上下文融合为合成特征

[![原论文 Figure 2：Architecture of the Conditional Visual Synthesizer (CVAE).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/fd1603003d6a/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/fd1603003d6a/figure-2.png)

*论文图 2。原论文 Figure 2：“Architecture of the Conditional Visual Synthesizer (CVAE).”。*

从计算角度看，编码器的交叉注意力让模型聚焦与当前语音文本最相关的视觉片段以推断隐变量，解码器的交叉注意力则保证输出在结构与语义上与条件对齐。隐空间的随机性是多样性的来源：同一音频文本输入采样不同噪声可得到多条合理视觉行为，构成论文所说的流形增强。原文未给出隐维度与采样条数的消融，复现时应先按默认超参数跑通，再自行补做该敏感性实验。

### 识别器如何先建模自身再做跨模态汇总？

识别器的输入是三元组，其中视觉槽可以是真实序列也可以是合成序列，其余两路不变。网络采用分层融合 Transformer，先做模态内编码，再做跨模态融合，最后回归分数。模态内阶段对每路序列各自过 Transformer 编码层，论文采用部分共享权重的方案以鼓励学到通用的时序建模能力，输出为带有上下文的 3 路序列。

融合阶段围绕一个可学习的分类令牌展开。该令牌先拼到某一模态序列前，然后在多层融合块中依次交叉注意力到视觉上下文、音频上下文与文本上下文，每次更新都经过前馈网络与残差连接。经过最后一块后，该令牌被视为整体多模态摘要，送入多层感知机头回归最终抑郁分数。这种设计让融合过程可迭代地收集互补信息，而不是 1 次性拼接。

**交叉注意力 × 分层融合 Transformer：** 交叉注意力分工是在每一步让汇总向量或视觉查询去检索另一模态的键值，分层融合 Transformer 分工是先做模态内时序建模再做多轮跨模态汇总，二者搭配的理由是先把各通道自身上下文理顺再融合可减少异步噪声，组合后分类令牌逐步聚拢 3 路互补信息再回归抑郁分数。

需要提醒的是，识别器本身并不创造新视觉信息，它的质量上限受输入视觉质量影响。当视觉编码器因数据少而欠拟合时，再强的融合也难以弥补，这正是论文要在识别器之外另设合成器的动机。理解这一点后，才能明白为什么增强分支的梯度必须回传合成器，而不是只更新识别器。

### 联合优化用哪些损失把两部分拴在一起？

训练目标由 3 类损失组成。合成器侧有重构一致性损失与隐空间正则损失：前者用 L1 衡量真实视觉序列与合成视觉序列的差异，鼓励生成逼真且上下文恰当；后者用 KL 散度约束近似后验贴近标准高斯先验，保证隐空间平滑可采样。识别器侧有真实数据损失与增强数据损失，均用均方误差衡量真实流预测与增强流预测各自与真值的差距。

任务引导的关键在于梯度路径：增强数据损失不仅更新识别器，也反向传播更新合成器参数。于是合成器同时受到一致性与识别误差的牵引，总损失为真实损失加可调权重的增强损失与变分项之和，原文按验证集性能取增强权重为 1.0、变分权重为 0.1。论文描述采用交替优化策略最小化该复合目标，使生成与识别朝统一的数据高效识别目标前进。

**一致性损失 × 增强数据损失：** 一致性损失分工是约束合成视觉序列贴近真实视觉序列以保证逼真与上下文恰当，增强数据损失分工是约束用合成视觉替换后识别器仍能预测准真实分数以保证判别有用，二者搭配是因为只逼真可能对分类无帮助、只判别可能偏离合理人脸，组合后梯度同时回传合成器形成任务引导。

从监督来源看，一致性来自真实视觉特征，KL 来自先验假设，两路回归都来自抑郁分数真值。原文明确报告了优化器为 Adam、学习率为 1 乘 10 的负 4 次方、批量为 16、合成器与识别器均为 4 层 Transformer、隐藏维度 256、注意力头 8 个、平均 4 种随机种子的结果。未明确报告的是交替的具体重置时机与是否冻结文本编码器，复现时应把 BERT 是否微调、OpenFace 与 COVAREP 是否离线提取并冻结作为首要核对项，不从模型名称推定其更新状态。

### 数据划分、特征与评价条件如何固定？

实验在两个临床访谈基准上进行。DAIC-WOZ 包含 189 个访谈会话，因官方测试标签未公开，作者从公开标注数据中构建 47 名受试者的内部测试划分；E-DAIC 扩展了 DAIC-WOZ 并提供高精度词级时间戳，用于细粒度特征对齐。论文声明严格遵循既定协议：DAIC-WOZ 做分类，E-DAIC 做回归，以展示跨任务通用性。特征提取固定为 OpenFace 2.0 做视觉、COVAREP 做音频、预训练 BERT 基础不区分大小写版本做文本嵌入，合成器与识别器结构如前所述，实现基于 PyTorch，在英伟达 A100 上训练。

评价指标按任务区分。DAIC-WOZ 分类报告精确率、召回率与 F1，F1 为主要指标；E-DAIC 回归以一致性相关系数与均方根误差为主要指标，平均绝对误差作为完整性补充。指标方向为精确率召回率 F1 与一致性相关系数越高越好，均方根误差与平均绝对误差越低越好。所有结果为 4 次不同随机种子运行的平均，混淆矩阵图注明确说明展示的是多次试验中的 1 次代表性运行，不能把该单次计数直接当作平均 F1 的来源。

资源状态需要如实说明：本次收到的证据中没有来源绑定且完成超文本传输安全协议状态验证的资源，不得声称代码模型或数据已公开。复现者应按论文描述自行搭建特征管线与训练脚本，数据集需通过官方渠道申请，划分细节以原文 47 例内部测试划分为准，若划分随机性未完全公开则应在报告中注明该不确定性。

### 主结果在什么对照下成立？

在 DAIC-WOZ 分类上，论文比较了包含多模态长短期记忆网络、MMFD、DALF、DSE-HGAT、ACMA、MDSD-FGPL、STFN 与双向长短期记忆加双向门控循环单元等近年高性能方法。比较问题是：在同一内部测试划分与同一 3 模态特征管线下，引入任务引导合成是否比只做融合更能提升 F1 并改善精确率与召回率的平衡。公平条件是各方法均在访谈级标签下评估，指标方向为三者越高越好。

**一致性相关系数 × 均方根误差：** 一致性相关系数分工是衡量预测分数序列与真值在趋势与绝对一致性上的吻合，均方根误差分工是衡量逐样本误差平方平均后的幅度，二者搭配是因为回归既要趋势对也要误差小，组合后才能判断模型在 E-DAIC 上是系统性更准而非只在个别样本上取巧。

| Method | Precision↑ | Recall↑ | F1-Score↑ |
| --- | --- | --- | --- |
| ACMA[41] | 0.790 | 0.860 | 0.820 |
| MDSD-FGPL[37] | 0.800 | 0.857 | 0.828 |
| BiLSTM+BiGRU[43] | 0.790 | 0.920 | 0.850 |
| CMG-VS (Ours) | 0.846 | 0.875 | 0.860 |

上表截取了原文分类表中的关键对照，完整方法名与数值以原表为准。可以看到完整框架的精确率为 0.846、召回率为 0.875、F1 为 0.86，超过双向长短期记忆加双向门控循环单元的 0.85 与 MDSD-FGPL 的 0.828。论文特别指出，许多高召回方法以牺牲精确率为代价，而该框架在保持高召回的同时把精确率抬高，意味着假阳性更少。为便于跨基线阅读，下表把同一实验的文本陈述整理为五列对照，数值与单位完全来自原文连续句。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| DAIC-WOZ 分类 | F1 分数 | 0.85 | 0.86 | BiLSTM 加 BiGRU 基线 |
| DAIC-WOZ 分类 | F1 分数 | 0.83 | 0.86 | MDSD-FGPL |
| DAIC-WOZ 分类 | 精确率 | 多数高召回方法偏低 | 0.846 | 多数高性能方法 |
| DAIC-WOZ 分类 | F1 分数 | 0.850 | 0.86 | BiLSTM 加 BiGRU |
| DAIC-WOZ 分类 | F1 分数 | 0.828 | 0.86 | MDSD-FGPL |

上表显示的收益是 F1 小幅领先与精确率明显更平衡，代价是召回率 0.875 略低于部分以 0.92 为代表的高召回基线，未在所有单项上全胜。混淆矩阵提供了单次运行的计数视角，适合观察假阳性从 5 降到 2 的变化，但平均性能仍以表格为准。

下面这张混淆矩阵图展示 1 次代表性运行，左为仅识别器，右为完整框架，需结合平均指标理解。

> **看图路径：** 1. 先对比左右两幅矩阵的行列含义与一次代表性运行的总数；2. 再数左侧仅识别器时非抑郁被误判为抑郁的 5 例与抑郁漏检的 1 例；3. 最后数右侧完整框架下假阳性降到 2 例而抑郁检出变为 12 例的变化

[![原论文 Figure 3：Confusion matrices on DAIC-WOZ test set.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/fd1603003d6a/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/fd1603003d6a/figure-3.png)

*论文图 3。原论文 Figure 3：“Confusion matrices on DAIC-WOZ test set. The matri- ces illustrate one representative run out of the multiple trials.”。*

对该图的解释是：左侧仅识别器正确检出 13 例抑郁但误判 5 例非抑郁，右侧完整框架正确检出 12 例抑郁而误判降至 2 例，说明决策边界更可靠且以轻微召回代价换来精确率提升。E-DAIC 回归的五列整理如下，同样只转述原文连续句中的数字。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| E-DAIC 回归 | 一致性相关系数 | 0.58 | 0.69 | CubeMLP |
| E-DAIC 回归 | 一致性相关系数 | 0.68 | 0.69 | MMFF |
| E-DAIC 回归 | 均方根误差 | 4.91 | 4.35 | MMFF |
| E-DAIC 回归 | 平均绝对误差 | 3.98 | 3.78 | MMFF |
| E-DAIC 回归 | 一致性相关系数 | 未报告 | 0.69 | FPT-Former |

该表支持的判断是框架在回归三指标上同时最优，但限制是部分基线存在未报告项，横向比较并不在每一格都完备。总体上两任务 2 数据集的一致领先支持任务引导合成的有效性与泛化性，但单次混淆矩阵与平均指标不可混用，百分点差异也不应表述为相对百分比提升。

### 哪些对照证明增益来自任务引导而非单纯多看数据？

消融围绕 3 个问题展开：合成与任务引导各自贡献多少、音频文本哪个条件更重要、合成不同视觉粒度效果是否相同。所有消融默认在 DAIC-WOZ 上进行，指标仍为精确率召回率与 F1，方向越高越好。第一个对照比较完整模型、2 阶段无任务引导变体与无合成的仅识别器基线，若完整模型明显高于 2 个阶段，则说明动态转向判别性特征比单纯生成逼真特征更重要。

| Model Variant | Precision↑ | Recall↑ | F1-Score↑ |
| --- | --- | --- | --- |
|  | 0.846 | 0.875 | 0.860 |
|  | 0.815 | 0.869 | 0.841 |
|  | 0.781 | 0.875 | 0.825 |

上表显示完整模型 F1 为 0.86，2 阶段变体为 0.841，仅识别器为 0.825，完整模型比仅识别器高约 3.5 个百分点，比 2 阶段高约 1.9 个百分点。表后解释是：引入生成增强本身带来主要增益，而任务引导在增强之上再进一步拉开差距，这与论文把任务引导称为性能关键驱动的表述一致。代价是联合训练更复杂，且 2 阶段变体的具体训练轮数与停止准则未完全展开，复现时需固定相同特征与划分再比较。

第二个对照比较音频加文本双条件、仅文本引导与仅音频引导，结果为双条件 F1 为 0.86、仅文本为 0.851、仅音频为 0.845，说明两路提供互补上下文，去掉任一路都有可察觉下降，且去掉文本影响稍大。这支持语音内容与发声方式各自携带不同视觉线索的假设，但未评测完全无条件合成，无法回答条件是否必要，只能回答双条件优于单条件。

| Conditioning | Modality Precision↑ | Recall↑ | F1-Score↑ |
| --- | --- | --- | --- |
|  | 0.846 | 0.875 | 0.860 |
| Text-only Guidance | 0.831 | 0.873 | 0.851 |
| Audio-only Guidance | 0.824 | 0.867 | 0.845 |

上表呈现条件消融的数值，表后需指出未胜出项：单模态引导并未失败，只是略低，实际部署中若缺一路转录或音频，仍可退化为单条件方案。第 3 个对照比较合成全部特征、仅合成动作单元与仅合成姿态注视，F1 分别为 0.86、0.857 与 0.837，表明富有表情语义的肌肉激活最值得合成，而姿态注视单独合成增益较小。这与跨模态引导更擅长生成语义丰富的表情线索的解释相符，但也意味着若下游更依赖头部运动，该结论可能变化。

下面这张特征可视化图用 t-SNE 展示融合后表示的组织程度，是对数值消融的定性补充。

> **看图路径：** 1. 先确认图例中红色为抑郁、蓝色为非抑郁及左右两幅的对照关系；2. 再看左侧仅识别器时两类点在中间区域交叠的程度；3. 最后看右侧完整框架下两类点各自成团且仅在边界保留少量混杂的形态

[![原论文 Figure 4：Feature visualization on DAIC-WOZ test set.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/fd1603003d6a/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/fd1603003d6a/figure-4.png)

*论文图 4。原论文 Figure 4：“Feature visualization on DAIC-WOZ test set. t-SNE comparison between Recognizer-Only (w/o synthesis) and full CMG-VS (with synthesis).”。*

对该图的解释是：左侧仅识别器时两类点在中间有明显交叠，反映仅靠有限真实数据难以学出判别空间；右侧完整框架下多数样本形成各自团块，仅在边界保留少量混入对方区域的点，与分类误差对应。这在视觉上支持任务引导合成学到更有序的语义空间，但 t-SNE 为降维投影，不可把点间距直接读作原始空间距离，也不能从该图读出精确数值。

### 证据的边界与尚未验证的推测有哪些？

首先是数据与划分的边界。DAIC-WOZ 的 47 例内部测试划分是在官方测试标签 withheld 下的自建划分，原文未给出该划分的受试者编号与随机种子细节，跨论文比较时需确认是否同一划分，否则 F1 小数点后 2 位的领先可能受划分差异影响。E-DAIC 依赖词级时间戳做细粒度对齐，若实际应用中只有自动语音识别的噪声时间戳，对齐质量与合成质量会如何下降，原文未评测。

其次是方法层面的未验证部分。合成在特征层进行，回避了像素级生成的逼真度与身份隐私问题，但也意味着无法直接可视化验证生成表情是否合理，只能通过指标与 t-SNE 间接判断。论文未报告推理开销、训练时长、参数量与输出帧率，因此不能声称该框架更快或更省，只能说它在数据高效性上给出新范式。总体趋势不等于每组都成立，例如姿态注视单独合成增益较小，说明不同视觉成分的收益并不均匀。

最后是表述上的冲突提示。原文表格中部分基线存在横线表示未报告，比较时应明确标注该缺项而非默认其为零或最差。混淆矩阵为单次代表性运行，而主表为 4 次平均，二者计数与平均指标之间存在自然波动，不应强行换算。相关性不等于因果：双条件优于单条件支持互补性，但不能证明音频文本必然因果决定表情，只能说在该数据与该编码下联合条件更有帮助。

### 复现应先固定什么再调什么？

复现的第一步是重建数据管线。用官方渠道获取 DAIC-WOZ 与 E-DAIC，按论文描述离线提取视觉、声学与文本特征：视觉侧核对 17 个动作单元加姿态注视的拼接维度，音频侧核对 100 赫兹采样与梅尔倒谱等组合，文本侧核对 BERT 基础不区分大小写版本的词嵌入与词时间戳。随后实现词级平均池化对齐，检查 3 路序列长度是否严格等于语言单元数，这是后续交叉注意力能对齐的前提。

第二步是搭建双模块网络。合成器与识别器均按 4 层 Transformer、隐藏维度 256、注意力头 8 个实现，合成器按查询为视觉或隐向量、键值为音频文本拼接的交叉块编写，识别器按先模态内编码再分类令牌多轮交叉融合编写。训练按 Adam、学习率 1 乘 10 的负 4 次方、批量 16、增强权重 1.0、变分权重 0.1 启动，先跑通完整模型，再依次关闭任务引导得到 2 阶段变体、关闭合成得到仅识别器基线，以复刻消融阶梯。

第三步是补做原文缺项的验证。记录每次运行的种子与 47 例划分，报告均值与波动；补做隐维度、采样条数与变分权重的敏感性；若需部署，还需单独测量训练资源、推理延迟与内存占用。代码与权重状态按本次证据只能写未能确认公开，不应写已开源或可下载。教学示例若需举例，应明确标为例子，例如假设某词对应 10 帧视频与 25 帧音频则分别平均得到一个向量，该数字仅为说明池化操作，不代表真实数据。

### 何时值得尝试这种任务引导的合成？

当研究满足 3 个条件时值得尝试：多模态中有明确薄弱但重要的通道，另有两路较强且与弱通道存在语义关联的上下文，以及评价允许用下游性能而非感知质量来定义生成好坏。抑郁识别恰好符合：视觉重要却数据少，音频文本丰富且隐含表情线索，成功标准是 F1 与一致性相关系数而非人眼观感。此时把合成放在特征层并让识别梯度回传，比单纯做几何增强或 2 阶段生成更直接地扩充判别相关的训练分布。

不适合的情况也要记住：若时间戳不可靠、对齐本身噪声大，条件引导可能引入错位监督；若弱通道与强通道关联很弱，合成器可能只学到平均脸式的无信息输出；若目标是产出可观看视频，则特征层合成无法交付像素结果，需另选语音动画或文生视频路线。论文的结论是该范式在两个基准上达到最优且消融支持任务引导为关键驱动，但这仍是有限解释，未来可向其他数据稀缺多模态领域迁移，或向像素级生成延伸，每一步都需要重新验证对齐质量与梯度路径是否依然成立。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 4，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 5，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 6，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 7，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper.pdf#page=6)

[![原文数学表达区域 8，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-8.png)

区域 8 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper.pdf#page=6)

[![原文数学表达区域 9，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-9.png)

区域 9 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper.pdf#page=6)

[![原文数学表达区域 10，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-10.png)

区域 10 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper.pdf#page=6)

[![原文数学表达区域 11，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9c7914033f4a/figure-11.png)

区域 11 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper.pdf#page=6)

另有 13 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
