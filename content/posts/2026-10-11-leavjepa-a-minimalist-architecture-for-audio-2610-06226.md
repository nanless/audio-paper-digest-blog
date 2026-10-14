---
title: "LeAVJEPA: A Minimalist Architecture for Audio-Visual Self-Supervised Learning"
date: 2026-10-11
draft: false
tags: [音视频理解, 音频分类, 音频检索, 自监督学习, 音视频]
categories: [论文速递]
description: "LeAVJEPA 用单个早期融合 Transformer 把音频、视频和联合输入映射到同一嵌入，以模态缺失局部视图匹配联合中心加 SIGReg 防坍缩，在冻结 AudioSet-20K 上得 36.0 mAP、ESC-50 上得 91.3%、微调 VGGSound 上得 61.1%，代价是冻结与检索仍落后于带显式对齐的最强基线。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.06226"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "只用一个编码器对齐声音和画面：LeAVJEPA 的模态缺失视图学习"
paper_digest_original_title: "LeAVJEPA: A Minimalist Architecture for Audio-Visual Self-Supervised Learning"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.06226v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.06226v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.06226v1.pdf"
paper_digest_primary_task: "音视频理解"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-understanding","label":"音视频理解"},{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"task","id":"task.audio-retrieval","label":"音频检索"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"}]
paper_digest_primary_method: "自监督学习"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "LeAVJEPA 用单个早期融合 Transformer 把音频、视频和联合输入映射到同一嵌入，以模态缺失局部视图匹配联合中心加 SIGReg 防坍缩，在冻结 AudioSet-20K 上得 36.0 mAP、ESC-50 上得 91.3%、微调 VGGSound 上得 61.1%，代价是冻结与检索仍落后于带显式对齐的最强基线。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Benjamin Robson"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Santeri Mentu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wenshuai Zhao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Arno Solin"}]
paper_digest_abstract_sha256: "d642428348178d7fb83848f3abd8768a081a90b81e1ccd469bdaf7aa2bd4b868"
paper_digest_sidecars: {"citation.bib":{"sha256":"ab213be7d47d704a5dd3595afe7d759fc963d64c37713ab528fb9ac5d7270252","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-06226/citation.bib"},"citation.json":{"sha256":"dc26a12688cb2d992cbbbc8e16b36108664665f54bcbba20748785060f15685e","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-06226/citation.json"},"citation.ris":{"sha256":"7ba6d657e1bc8303422b91f2c36145ee7c7562f5a9c47da73c097b6d1a548768","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-06226/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"57cd4dd0f50d4f4a30d7d6c1abe1eb0c50c1a1b0504986fcdf459d0aab6bdb68","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-06226/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "1c6e4b0b067af94411b0b6abf4aae2b68df2e74804c350c2c41469f898a22fdc"
paper_digest_api_reader_plan_sha256: "7dd7d84b85a39d2ccf7159b9920e89498338bb4d4b827a7628fedb91bafcbba9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "42d6c206a0a1ffdc0c99ea40a656388e61dc377d51c26d5d88f124534d1aa68b"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "52e347fa3ad08cb6d958ea732f3b4a57402830616a847d71e2c4db3c3aa7f514"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "cba21722dd6ec08d73ac3f0293667996a743131bb3d0bb195adb75932090975d"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9769277ce771a64ee13bf9dc1a406136818edd801098f08ea9c9dac2b876e2d5"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 只用一个编码器对齐声音和画面：LeAVJEPA 的模态缺失视图学习

> 英文题目：*[LeAVJEPA: A Minimalist Architecture for Audio-Visual Self-Supervised Learning](https://arxiv.org/abs/2610.06226v1)*

> 标签：#音视频理解 | #音频分类 | #音频检索 | #自监督学习 | #音视频
>
> 评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 0.7/1.5


## 👥 作者与机构

- Benjamin Robson：机构信息未在 arXiv HTML 中可靠披露
- Santeri Mentu：机构信息未在 arXiv HTML 中可靠披露
- Wenshuai Zhao：机构信息未在 arXiv HTML 中可靠披露
- Arno Solin：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

视频片段同时给出画面流与声音流，二者记录同一事件却经常错位，可见物体可能静默，发声物体可能离开画面，好的表示需要利用双模态，又能在缺失一侧时继续工作。LeAVJEPA先把8秒音频重采样到16kHz转成梅尔频谱经二维卷积得到400个音频词元，把16帧224×224视频经三维卷积得到1568个管状词元，再加位置嵌入、模态类型嵌入与可学习[CLS]词元拼成输入序列。同一片段据此构造两个音视频联合全局视角和两个模态丢弃局部视角（一纯音频、一纯视频），它们仅输入词元不同而共享同一个早期融合视觉变换器与投影器编码到同一表示空间，使局部嵌入成为待对齐的偏侧观测。编码后投影得到的局部嵌入被拉向同一片段全局嵌入的均值中心，偏离中心的平方误差提供不变性约束，偏斜各向同性高斯正则化把跨片段嵌入分布拉向各向同性高斯以防止坍缩。在冻结attentive probe（注意力池化探针）下，AudioSet-20K上音视频联合输入的平均精度均值（mAP）为36.03%，低于同协议下MJEPA ViT-L的42.90%，说明简化目标可用但仍有差距。结论适用于声音事件为主的AudioSet与VGGSound类任务，对遮挡严重或声画无关片段的鲁棒性尚未验证。原文披露AudioSet-2M预训练使用8卡并持续约一百六十到一百九十二小时，未披露推理延迟与部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 声音和画面配对能提供什么免费监督

刚接触音频视频方向时，最容易困惑的是为什么视频本身就是标注。论文面对的输入是 10 秒左右的网络视频片段，一路是连续画面，一路是 16 kHz 重采样的声音，二者记录的是同一事件。目标是学到一个表示，既能在只有声音或只有画面时可用，又能在双模态都在时更好。必须保留的信息是事件的语义身份，例如是吉他演奏还是鸟叫，而不是像素或波形的细节。输出是一个定长向量，后续用探针或微调做分类与检索。

视频配对的难点在于对应并不完美，声源可能在画面外，可见物体也可能不发声，所以表示不能简单拼接两个模态的表面特征，而要保留二者共享的可预测部分。论文把这种配对看作同一事件的不完整观察，缺一个模态就是一种视角，这为后文用模态缺失构造局部视图埋下伏笔。理解这一点后，才能明白为什么作者反复强调视图决定了学习任务的难度，而不是编码器越大就越好。

### 已有路线用了哪些额外部件

在进入方法前需要把比较基准摆正，否则会把类别差异误读成同条件胜负。早期音频视频自监督用对应关系和时间同步做代理任务，后来出现对比路线，用 InfoNCE 把配对拉近、把非配对推远。另一条是掩码重建路线，把频谱图和像素块遮住再用解码器重建，多数还附加跨模态对比项。联合嵌入预测路线则不在输入空间重建，而是在隐空间预测一个视图的嵌入，代表是图像的 I-JEPA 和视频的 V-JEPA。

离本文最近的是 MJEPA，它已经共享编码器参数，但仍保留指数滑动平均目标编码器和预测器网络。单模态方面，音频有波形路线和频谱图路线，视频有 ViViT 和 TimeSformer 等 Transformer 结构，本文的标记化正是从这两条线借来。下表比较了各方法是否需要单独编码器、重建、对比负样本、解码器、教师与预测器，比较问题是极简程度，公平条件是按原文报告的部件清单对照，训练目标方向只是定性描述而非数值越高越好。

该表说明 LeAVJEPA 是唯一全部打勾的方法，MJEPA 虽已共享编码器但仍需教师与预测器，重建类方法则需要解码器与重建。解释时要注意限制，这张表只说明部件多少，不说明性能高低，部件少不等于在所有指标上更强，后文冻结与微调数字会显示它仍落后于最强基线。

| Method | No decoder | No teacher / EMA | No predictor | Training objective |
| --- | --- | --- | --- | --- |
| MJEPA (Teotia et al., 2026) | ✓ | ✗ | ✗ | Latent pred. |
| LeAVJEPA (ours) | ✓ | ✓ | ✓ | Invariance + SIGReg |

读完此表应建立的预期是，本文要回答部件能否进一步删减，特别是教师、预测器、解码器和负样本是否必要。如果删掉后跨模态对齐仍然出现，那视图构造的作用就值得单独检验，这正是第 4.1 节受控消融的动机。

### 为什么双模态都在的视图会产生捷径

论文提出的具体问题是，当每个视图都包含音频和视频时，不变性损失可以用占优模态单独满足，编码器不必建立跨模态联系。举例说，两个联合视图都同时有声音和画面，模型只要记住声音就能让二者一致，完全忽略画面也能把损失降得很低。此时损失很低、嵌入标准差接近 1，看似没有坍缩，但特征并没有融合两个模态。解决办法是让视图在模态轴上分离，使音频单独视图和视频单独视图必须映射到同一个联合嵌入。

输入处理上，作者从每段 10 秒中随机偏移裁出两个 8 秒时间窗做全局视图，再从中构造两个局部视图，偶数局部只留音频，奇数局部只留视频。这里局部不是指时间更短，而是指模态集合不完整。作用是迫使编码器从任一单模态出发推断双模态中心，代价是如果两个模态共享信息太少，例如画外音与无关画面，任务本身就不可解。论文的讨论部分也承认这一点，并把它列为未来需要在视频中心任务和更多模态上验证的边界。

### 整体流程如何从三个输入得到一个中心

LeAVJEPA 的整体流程可以用一个片段的 4 次前向来复述。同一片段先得到两个全局视图 G=2，都含音频和视频，经过共享编码器和共享 3 层投影后得到两个投影向量，平均即为该片段的联合中心。另有两个局部视图 K=2，一个纯音频，一个纯视频，同样经过同一编码器和投影，得到两个部分观察的嵌入。训练时把包括全局在内的全部 G+K 个嵌入都拉向中心，同时用 SIGReg 把跨片段的嵌入分布拉向各向同性高斯。

推理或评测时不再构造多视图，只需把待测音频标记、视频标记或二者拼接送入同一编码器，取[CLS] 输出或其投影做分类与检索。部件分工是视图定义观察到什么，中心定义要预测什么，编码器负责在同一空间实现映射，损失负责对齐与防坍缩。

**全局视图 × 局部视图：** 全局视图指同时保留音频和视频的 8 秒裁剪，其平均投影构成该片段的联合中心；局部视图指只保留单模态的部分观察。二者分工是中心提供要预测的事件表示，局部视图提供必须从不完整输入出发的预测起点，组合后不变性损失把局部拉向中心，跨模态预测成为目标的隐含性质。

下图是早期融合编码器的结构导读，读图时先分清左右两条输入支路，再看中间汇合与右侧堆叠的 Transformer 层数，不要把投影 MLP 误当成跨模态预测器，原文明确说它只是把每种视图映射到算损失的空间。

> **看图路径：** 1. 先沿左侧视频帧与梅尔频谱图两条支路看到切块嵌入与位置加模态嵌入；2. 再看中间拼接与层归一化后进入 12 层 Transformer 块的位置；3. 最后确认[CLS] 输出是唯一进入损失的 clip 表示

[![原论文 Figure A1：Figure A1: LeAVJEPA early-fusion encoder.](https://arxiv.org/html/2610.06226v1/fig_encoder.svg)](https://arxiv.org/html/2610.06226v1/fig_encoder.svg)

*论文图 5。原论文 Figure A1:：“Figure A1: LeAVJEPA early-fusion encoder.”。*

图中可见视频帧经 3 维卷积做管状嵌入，梅尔频谱图经 2 维卷积做补块嵌入，各自加上分解位置嵌入与模态类型嵌入后拼接，在[CLS] 前加层归一化与丢弃，再过 12 层含层归一化、多头自注意、残差、MLP 的 Transformer 块，最终取[CLS] 标记得到 768 维表示。局部视图缺失模态时直接不送入对应标记，序列相应变短，同一套权重无需占位符即可处理 3 种输入，这也是作者称为单一共享编码器的原因。

### 声音和画面如何变成同一序列的标记

对初学者最关键的一步是标记化，因为它决定了计算量与融合方式。音频方面，8 秒裁剪转成形状为 1×128×801 的梅尔频谱图，用核与步长均为 16×16 的 2 维卷积得到 8×50=400 个音频标记。视频方面，16 帧 224×224 的 RGB 输入用核与步长为 2×16×16 的 3 维卷积映射为 8×14×14=1568 个管状标记。两者再分别加分解位置嵌入，音频保留频率与时间，视频保留空间与时间，并加可学习的模态类型嵌入区分流。ViT-B 用 12 层、隐维度 768、12 头，ViT-L 用 24 层、隐维度 1024、16 头。

联合视图序列为[CLS] 加 1568 个视频标记加 400 个音频标记，共 1969 个标记，纯音频为 401 个，纯视频为 1569 个。早期融合的含义是只要双模态都在，Transformer 从第一层就能跨模态注意；单模态时同一权重只处理幸存标记。代价是联合序列很长，自注意计算随长度平方增长，附录给出 ViT-B 在 8 块 H200 上约 192 小时到 57 轮，ViT-L 在 8 块 B300 上约 160 小时到 66 轮。

**音频标记 × 视频标记：** 音频标记指梅尔频谱图经二维卷积切分得到的 400 个向量，视频标记指 16 帧经三维卷积切分得到的 1568 个管状向量。二者分工是把不同采样率和维度统一到同一隐维度并加上位置与模态类型嵌入，组合后可拼接在同一序列中让单个 Transformer 做早期融合，缺失模态时直接省略对应标记。

联合视图的标记拼接形式如下式所示，符号 v 表示视频管状标记，a 表示音频补块标记，CLS 是可学习的汇总标记，公式只说明拼接顺序与数量，不包含任何掩码或预测逻辑。

\[[\texttt{CLS};\,{\bm{v}}_{1},\ldots,{\bm{v}}_{1568};\,{\bm{a}}_{1},\ldots,{\bm{a}}_{400}],\]

记住这个数量关系后，就能理解为什么缺失模态能省计算但增加任务难度，省的是序列长度，难的是必须从更少的信息预测同一中心。

### 损失如何同时要求拉近与散开

损失部分要分清两个层次，片段内拉近与片段间散开。记第 i 个视图投影为 z_i，全局平均为 z_bar，G+K 个视图的均方距离平均构成不变性项，SIGReg 构成正则项，二者以 λ 加权，默认 λ=0.05。所有视图的梯度都流经共享编码器和投影，包括构成中心的全局嵌入，没有停止梯度、没有指数滑动平均教师、没有跨模态预测器。中心因此是学出来的，而不是固定目标，它会适应局部视图能表达的信息。

SIGReg 的做法是把嵌入投影到 M 个随机单位方向，比较每条投影的经验特征函数与高斯目标，靠每步重采样方向约束不同切片，计算随批量线性增长并可跨设备聚合。原文引用 LeJEPA 的分析称各向同性高斯可减小探针估计偏差，但同时声明这是在其假设下的动机，不保证对任意音频视频任务最优。三角不等式说明把音频与视频各自拉向中心也会间接拉近二者，但检索还要求比跨片段更近，目标并未直接强制这一点，只能靠 SIGReg 的散开间接帮助。

**不变性损失 × SIGReg：** 不变性损失指各视图投影与片段中心均方距离的平均，负责把同一片段的观察拉到一起；SIGReg 指把跨片段嵌入分布拉向各向同性高斯的切片特征函数正则，负责保持不同片段之间的散开。二者以权重 λ 加权组合，多了在无教师、无预测器、无负样本时既对齐又防坍缩的作用。

完整目标的符号、输入与加权关系如下式所示，invariance 下标对应片段内一致，SIGReg 对应跨片段分布约束，λ 平衡二者，读式时先看求和对象是同一片段的视图，再看正则对象是跨片段集合。

\[\mathcal{L}=(1-\lambda)\,\underbrace{\frac{1}{G+K}\sum_{i=1}^{G+K}\|\bar{{\bm{z}}}-{\bm{z}}_{i}\|^{2}}_{\text{invariance}}\;+\;\lambda\,\underbrace{\vphantom{\sum_{i=1}^{G+K}}\text{SIGReg}(\{{\bm{z}}_{i}\})}_{\text{regularization}},\]

理解该式后才能正确解释消融，去掉任一项都会失败，但失败机制不同，一项是坍缩到常数，一项是分布好看但视图不对齐，后文图 16 与图 17 会分别展示。

### 训练时梯度经过哪里与监督来自哪里

复述训练过程时要说清监督来源，否则会误以为有人工标签。监督完全来自同一片段的共现，两个全局视图提供目标中心，两个单模态局部视图提供预测起点，没有类别标签，没有重建像素或波形，没有负样本排序。优化器用 AdamW，学习率 5×10^-4，权重衰减 0.05，线性热身 15% 加余弦退火到 10^-6，梯度裁剪 5.0，bf16 混合精度，ViT-B 有效批量 320，ViT-L 有效批量 1024。投影是 3 层 MLP，ViT-B 为 768→2048→2048→128，ViT-L 为 1024→2048→2048→128，带批归一化和 GELU。训练中没有在线探针，AudioSet 预训练的探针都是事后在冻结骨干上拟合。

参数更新上，编码器与投影同时被不变性与正则两项更新，不冻结任何一部分。原文未报告梯度在某些头的细节路径，也未给出每步方向数 M 与评估点数的具体选择，复现时缺的是这些超参数的完整清单，不应从模型名称猜测实现。

**模态缺失 × 联合中心：** 模态缺失指局部视图完全丢掉一个模态的标记，只留音频或只留视频；联合中心指两个全局视图投影的平均。分工是缺失制造必须跨模态推理的困难任务，中心给出由双模态算出的目标表示，组合后音频视图和视频视图各自逼近同一中心，从而在没有直接比较音频与视频损失的情况下间接靠近。

训练的计算特点是视图数少，默认仅 2 全局加 2 局部，附录扫过 K=2 到 8 发现探针基本不敏感，说明默认已提供足够跨模态正则。λ 扫过 0.03、0.05、0.10，发现 0.03 与 0.05 几乎相同，0.10 则使不变性损失停在 0.33 附近、探针大跌，失败原因是视图不对齐而非坍缩，因为嵌入标准差仍接近目标。这提示复现第一步应先固定 λ=0.05 与 K=2，把视图构造做对，再调其他优化细节。

### 数据、划分与三种评测各测什么

实验条件必须按原文交代，否则数字无法比较。预训练用 AudioSet 约 190 万非均衡片段 527 类多标签，或 VGGSound 约 18.4 万训练片段 309 类，消融用 VGGSound 上 ViT-B 固定短预算，迁移、检索、微调用 AudioSet-2M 上 ViT-B87M 与 ViT-L304M。评测分 3 种，冻结线性探针读[CLS]，冻结注意力探针用单查询交叉注意力池化补块标记，二者都在预训练后单独训练，骨干不动；端到端微调则与骨干联合训练 20 轮，头学习率 2×10^-4，骨干为 0.1 倍，标签平滑 0.1，混合 0.2。冻结 AudioSet-20K 报告平均精度均值 mAP，数值越高越好，输入分纯音频、纯视频与音频视频三档。

ESC-50 报告准确率；VGGSound 微调报告 top-1；检索在 CAV-MAE 发布的均衡子集 1725 段中实际可用 1722 段，报告召回 R@1、R@5、R@10，越高越好。基线冻结行引自 MJEPA 同协议重评估，检索基线引自各自论文且都带显式对齐项或预测器，训练协议、初始化与数据并不完全一致，因此差距不能归因到单个部件。所有结果除注明外为单次运行，这是解释结论适用条件的重要前提。

### 冻结迁移能否证明双模态都有贡献

冻结迁移回答的比较问题是，不更新骨干时学到的特征是否可迁移且是否融合了双模态，公平条件是同一注意力探针训 40 轮，指标方向为 mAP 与准确率越高越好。ViT-B 在 AudioSet-20K 上音频 27.79、视频 14.82、联合 30.98，ESC-50 上 88.0；ViT-L 对应 31.56、18.25、36.03 与 91.3。联合优于纯音频说明视频确有增益，纯音频强于纯视频说明声音在这些声音中心基准上占优，更大骨干三档全升说明优势不限于单一输入类型。

下表完整呈现与单独编码器及 MJEPA 的对照，读表时注意参数量与预训练数据列，比较时不要忽略 IN+AS 与 AS 的差异。

|  |  |  |  | AudioSet-20K (mAP) | AudioSet-20K (mAP) | AudioSet-20K (mAP) | ESC-50 |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  | Method | Params | Pre-train data | A | V | A-V | Acc. |
| Separate encoders | CAV-MAE (Gong et al., 2023) | 170M | IN+AS | 19.38 | 18.14 | 34.59 | 77.5 |
| Separate encoders | MAViL (Huang et al., 2023) | 170M | IN+AS | 30.00 | – | – | 90.8 |
| Separate encoders | EquiAV (Kim et al., 2024) | 170M | IN+AS | 34.25 | 18.60 | 38.60 | 93.2 |
| Separate encoders | CAV-MAE Sync (Araujo et al., 2025) | 170M | IN+AS | 21.66 | 16.20 | 28.50 | 89.2 |
| Separate encoders | XKD (Sarkar & Etemad, 2024) | 170M | AS | – | – | – | 93.6 |
| Shared encoder | MJEPA ViT-B∗ (Teotia et al., 2026) | 86M | AS | 37.54 | 20.18 | 40.68 | – |
| Shared encoder | MJEPA ViT-L (Teotia et al., 2026) | 300M | AS | 38.89 | 25.38 | 42.90 | 95.2 |
| Shared encoder | LeAVJEPA ViT-B (ours) | 87M | AS | 27.79 | 14.82 | 30.98 | 88.0 |
| Shared encoder | LeAVJEPA ViT-L (ours) | 304M | AS | 31.56 | 18.25 | 36.03 | 91.3 |

表后解释是，LeAVJEPA 超过部分单独编码器方法，但两个尺寸都低于 MJEPA，ViT-L 联合 36.03 低于 MJEPA ViT-L 的 42.90，ESC-50 的 91.3 也低于 95.2。这支持更简单目标有用，但也表明去掉教师与预测器有代价。限制是基线为转引重评估，探针表达力与训练轮数会影响绝对值，且声音中心基准不能证明视觉能力，后文讨论会回到这一点。教学例子是，若把联合比纯音频高的差值误读成视频单独很强，就混淆了增量与绝对水平，应同时看视频单模态列仍明显偏低。

### 无对比训练的嵌入能否做跨模态检索

检索回答更严格的问题，分类好不等于配对音频与视频足够靠近。做法是把每段分别编码为纯音频与纯视频，用投影后[CLS] 的余弦相似度排序，不做任何检索专用训练。比较问题是共同中心目标能否涌现可检索的对应，公平条件是同一 1722 段池与同一余弦规则，指标为召回越高越好。ViT-B 音频到视频 R@1 为 10.5、R@5 为 28.9、R@10 为 36.6，反向为 11.4、28.2、36.8；ViT-L 对应 19.1、40.5、50.4 与 18.7、42.1、51.9，远高于随机且随尺寸稳定提升。

下表同时列出带显式对齐的基线与冻结特征上加 InfoNCE 头的变体，读表时分清零样本余弦与有监督头的性质差异。

|  | Audio →\to video | Audio →\to video | Audio →\to video | Video →\to audio | Video →\to audio | Video →\to audio |
| --- | --- | --- | --- | --- | --- | --- |
| Method | R@1 | R@5 | R@10 | R@1 | R@5 | R@10 |
| CAV-MAE (Gong et al., 2023) | 15.1 | 34.0 | 43.0 | 18.8 | 39.5 | 50.1 |
| CAV-MAE Sync (Araujo et al., 2025) | 27.9 | 52.4 | 62.2 | 35.2 | 58.3 | 67.6 |
| EquiAV (Kim et al., 2024) | 29.6 | 53.7 | 63.1 | 30.1 | 53.3 | 62.9 |
| MJEPA ViT-L† (Teotia et al., 2026) | 29.3 | 53.7 | 61.8 | 30.6 | 53.4 | 61.3 |
| LeAVJEPA ViT-B (ours) | 10.5 | 28.9 | 36.6 | 11.4 | 28.2 | 36.8 |
| LeAVJEPA ViT-L (ours) | 19.1 | 40.5 | 50.4 | 18.7 | 42.1 | 51.9 |
| LeAVJEPA ViT-L + InfoNCE head‡ (ours) | 24.4 | 46.9 | 57.7 | 25.6 | 48.0 | 57.1 |

表后解释是，直接余弦已能认出配对，说明单模态查询与候选虽无共享输入仍可对应，但最强显式对齐方法仍领先，例如 CAV-MAE Sync 与 EquiAV 在 R@1 约 27 到 35 之间。冻结特征上用每类 300 段训对比头可提到 24.4 与 25.6，说明表示支持更强检索，但该头不是零样本，不能当作部署即得的提升。限制是基线数字转引自各自论文，MJEPA 走的是联合训练的跨模态预测器加 L1 近邻而非直接嵌入相似，路径不同不宜只比数字大小。语义聚类图可作为辅助证据，读图说明是 t-SNE 把 11143 段 VGGSound 的[CLS] 降到 2 维，按乐器、动物、车辆、水与天气、人声、运动六色着色。

> **看图路径：** 1. 先看图例六个语义家族的颜色与右上角分布；2. 再看同色点是否聚成大团且内部有更细的子团；3. 最后看粉色人类语音与绿色动物叫声交界处的重叠

[![原论文 Figure A7：Figure A7: Semantic structure of the embedding space.](https://arxiv.org/html/2610.06226v1/fig_tsne_family_vggsound.png)](https://arxiv.org/html/2610.06226v1/fig_tsne_family_vggsound.png)

*论文图 11。原论文 Figure A7:：“Figure A7: Semantic structure of the embedding space.”。*

图中同色点聚成大团且内部有同色子团，乐器蓝色在下方成多团，运动棕色在右侧成带状，残余重叠集中在粉色人声与绿色动物叫声交界，支持空间按语义而非低层模态线索组织，但 t-SNE 距离不能读成原始余弦距离，聚类好也不等于检索 R@1 必然高。

### 端到端微调后差距如何变化

微调回答的是全量适应后是否还能保持竞争力，比较问题是同一 VGGSound 分类下预训练的价值，公平条件是单片段无自监督视图，指标为 top-1 越高越好。LeAVJEPA 线性头 ViT-B 为 58.3，注意力头为 60.4，ViT-L 对应 59.9 与 61.1，注意力头在两个尺寸都更好，说明头选择在微调后仍重要。但大模型增益在此处不如冻结与检索明显，论文据此提醒冻结与微调应分开报告，因为微调可补偿冻结暴露的表示差异。

下表列出已发表基线与本文两个尺寸两种头的对照，读表时注意参数量、初始化与预训练列的差异。

| Method | Params | Init. | Pretraining | Top-1 |
| --- | --- | --- | --- | --- |
| AV-MAE (Georgescu et al., 2023) | 172M | – | VGGS | 64.2 |
| AV-MAE (Georgescu et al., 2023) | 611M | – | VGGS | 65.0 |
| AVSiam (Lin & Bertasius, 2024) | 100M | IN-21K SL | AS-2M | 64.9 |
| AVSiam (Lin & Bertasius, 2024) | 332M | IN-21K SL | AS-2M | 67.1 |
| CAV-MAE (Gong et al., 2023) | 164M | IN-SSL | AS-2M | 65.5 |
| MAViL (Huang et al., 2023) | 172M | IN-SSL | AS-2M | 67.1 |
| EquiAV (Kim et al., 2024) | 172M | IN-SSL | AS-2M | 67.1 |
| LeAVJEPA (Linear) | 87M | – | AS-2M | 58.3 |
| LeAVJEPA (Attentive) | 87M | – | AS-2M | 60.4 |
| LeAVJEPA (Linear) | 304M | – | AS-2M | 59.9 |
| LeAVJEPA (Attentive) | 304M | – | AS-2M | 61.1 |

表后解释是，已发表基线仍占优，同块最优多为 67.1，例如 MAViL 与 EquiAV，而本文最好为 61.1。由于初始化、目标与优化不同，差距无法归因到单个部件，只能说共享编码器支持有用迁移，追平最强全适应系统仍是开放挑战。限制是基线多用 ImageNet 初始化而本文从零开始，VGGSound 本身也是声音中心，结论不能推广到视频中心任务。未胜出项要明确写出，微调 61.1 低于 64 到 67 区间，冻结 36.0 低于 42.90，检索 19.1 低于 29 左右，这些都是同一故事的不同切面。

### 视图与损失哪一项真正决定表示质量

消融是全文最关键的证据链，回答的是在同一编码器、同一目标、同一预算下，仅改局部视图构造是否足以改变质量。做法是在 VGGSound 上训 ViT-B 到 30 轮，比较无局部、联合局部、联合加掩码、随机模态缺失、每局部固定单模态等变体。左图纵轴为测试 top-1，横轴从左到右任务越来越跨模态，虚线为纯音频预训练基线。读图说明是先看联合局部是否贴近虚线，再看随机缺失的抬升，最后看模态特定视图的最高点，右图则看只留一项损失时是否跌到地板。

> **看图路径：** 1. 先看左图横轴从无局部视图到模态特定视图的探针准确率爬升；2. 再对比虚线音频预训练基线与联合局部视图的位置；3. 最后看右图只留一项损失时柱状高度跌到接近随机

[![原论文 Figure 4：Modality-specific views improve cross-modal learning in LeAVJEPA.](https://arxiv.org/html/2610.06226v1/fig_component_ablation.svg)](https://arxiv.org/html/2610.06226v1/fig_component_ablation.svg)

*论文图 4。原论文 Figure 4:：“Modality-specific views improve cross-modal learning in LeAVJEPA.”。*

图中联合局部与无局部接近基线，随机缺失明显抬升，模态特定最高，线性 43.9、注意力 47.1，而任缺一项损失都失败，这与表 A3 中联合变体不变性损失低至 0.004、标准差仍约 0.984 的现象一致，说明低损失不等于跨模态特征好，而是走了单模态捷径。去掉 SIGReg 即 λ=0 时不变性损失瞬间到 10^-7 量级、标准差跌到 10^-4 量级，属坍缩到常数；去掉不变性即 λ=1 时标准差到 1 但不变性损失高一量级不降，属从不对齐。下图展示前者四面板曲线的像素细节，读图时注意红蓝两线的量级差异而非抖动。

> **看图路径：** 1. 先对比左上不变性损失红线贴零与蓝线缓慢下降；2. 再看右下嵌入标准差红线贴零与蓝线爬向 1.0；3. 最后看右上 SIGReg 损失红线高企确认分布远离高斯目标

[![原论文 Figure A12：Figure A12: Removing SIGReg (\\lambda=0) vs.](https://arxiv.org/html/2610.06226v1/fig_ablation_inv-only.svg)](https://arxiv.org/html/2610.06226v1/fig_ablation_inv-only.svg)

*论文图 16。原论文 Figure A12:：“Figure A12: Removing SIGReg (\lambda=0) vs.”。*

该图证实 SIGReg 是防坍缩的部件，不变性是负责对齐的部件，二者缺一不可。附加证据是共享与双编码器在此单次比较中相当，作者选共享只因更简单；K 与 λ 在默认值附近不敏感，但 λ=0.10 会破坏对齐。这些都是单次运行与短预算下的结论，换数据规模与训练时长后是否成立还需更系统的统计验证。

### 结论在什么条件下才成立

论文的结论有明确的适用边界，读时不能夸大。首先是基准偏声音中心，AudioSet、VGGSound、ESC-50 都更依赖音频，编码器的广泛视觉能力未被检验，t-SNE 与注意力定性图也不能替代视频中心评测。其次是协议不一致，已发表基线在初始化、数据、优化上各不相同，性能差距难以归因，冻结用注意力探针训 40 轮的绝对值也会随探针改变。再次是方法假设局部观察含足够共享信息，声源在画面外或画面与声音无关时假设失效，论文把这列为未来要测的场景。

还有统计限制，主结果多为单次运行，消融虽有线性与注意力双探针一致，但仍是 VGGSound 短预算下的发现，AudioSet 规模下的超参数敏感性只给了训练曲线而非完整扫参。最后是检索的零样本性质，直接余弦确高于随机，但仍落后显式对齐，加 InfoNCE 头虽提升却不再是零样本，不能把 24.4 当成无代价的改进。记住这些条件后，才能正确判断何时值得尝试该方法。

### 复现第一步应先固定什么

若要复现，建议第一步先跑通 VGGSound 上的 ViT-B 受控消融，而不是直接训 AudioSet 大模型。按附录配置准备 8 秒裁剪、梅尔频谱图与 16 帧视频、400 加 1568 的标记数、2 全局加 2 模态特定局部、λ=0.05、有效批量 512、学习率 5×10^-4 的设置，监控在线线性与注意力探针、不变性损失与嵌入标准差 4 条曲线。预期现象是标准差迅速到 1 附近，SIGReg 首轮骤降后贴零，不变性稳步下降，探针稳步上升。若标准差跌多个量级，说明 SIGReg 权重或实现有误；若标准差正常但不变性不降，说明不变性项或中心计算有误；若两者都正常但探针贴近纯音频基线，说明局部视图仍含双模态，模态缺失没有真正丢掉标记。

**线性探针 × 注意力探针：** 线性探针指在冻结[CLS] 标记上加层归一化和线性分类器，只能读出被压缩到单个向量的信息；注意力探针指用一个可学习查询对全部补块标记做交叉注意力池化，能自适应挑选信息量大的音频与视频块。二者分工是分别检验全局汇总信息与细粒度块信息，组合后可判断表示改进是普适的还是只利于某类读出。

复现中易错的是把掩码联合视图当成模态缺失，或把投影 MLP 当成预测器加停止梯度，前者会复现出低损失低质量的捷径，后者会改变梯度路径。成本上，VGGSound 短预算单卡也可跑消融，但 AudioSet 的 ViT-B 与 ViT-L 需多卡数百小时，推理时联合 1969 长度的自注意开销最大，单模态则短得多。来源方面，未发现经校验的作者代码、模型或数据链接，不得声称已公开，复现应按论文文字与附录表 A1、A2 自建流程。

### 何时值得尝试与还需补哪项验证

综合来看，当任务满足 3 个条件时值得尝试该路线，输入是自然配对的音频视频且共享语义较多，部署时可能缺模态，团队希望用最少部件快速验证跨模态表示。此时可用单个 Transformer 加不变性加 SIGReg，以模态缺失为核心构造，先在小数据上验证模态特定视图是否带来探针提升，再放大到 AudioSet 规模。

还需补的验证包括视频中心基准、画面外声音的鲁棒性、多次随机种子的误差棒、以及与同初始化同预算基线的公平对比，只有补上这些，才能判断简单目标的差距是来自原理还是来自工程。论文的价值不在于刷新最高分，而在于用受控实验证明视图的信息保留方式值得显式设计，低损失需结合探针与分布统计一起读，冻结、检索、微调需分开报告。记住 61.1、36.0 与 91.3 各自的评测条件，就能在复述时不夸大也不低估这个极简基线。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.06226v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
