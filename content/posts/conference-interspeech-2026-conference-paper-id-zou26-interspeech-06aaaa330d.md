---
title: "Less is More: Boosting Bimodal Music Emotion Recognition with Adaptive Audio Sequence Compression"
date: 2026-09-28
draft: false
description: "针对音频序列冗长稀释双模态融合的问题，论文用码本感知的 PoolingVQ 按局部变化强度做自适应池化，在 EMOPIA 上宏 F1 达到 0.8955、在 VGMIDI 上达到 0.6018，代价是引入码本大小与池化规则等需调参的压缩环节。"
tags: ["多模态学习", "向量量化", "音乐", "音频分类"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:zou26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/zou26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/zou26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e9a3d54e9c1190f8c6f040be734ba29ae0bd9eaf8afc6b09f40e2aaffe63f4f9"
paper_digest_api_reader_plan_sha256: "8db773be3f62a40ade88a62f4925fcbb3c473de79cfd7aca286d91cfc626e778"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "b6556cafbfabda179720af616a429bea6430a95ba58bb628b168ef634e7ffef3"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "5d3a1be58e2c3933a2b11469bc24930170c6a9aebc06d0287ccb0f9877d18efc"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "6922dd25073f18df3b1f64c632d62014083496f95d9d089d92540dfd5bc4332c"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "50f49a450e259736d349749ce53e62bd95234ce237d4bf059dfc36fd2a1a4426"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.vector-quantization","label":"向量量化"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"task","id":"task.audio-classification","label":"音频分类"}]
paper_digest_primary_task: "音频分类"
paper_digest_primary_method: "向量量化"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 音频太长反而碍事：用自适应压缩让双模态音乐情绪识别更准

> 英文题目：*Less is More: Boosting Bimodal Music Emotion Recognition with Adaptive Audio Sequence Compression*

> 会议身份：`conference:interspeech:2026:conference-paper-id:zou26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/zou26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/zou26_interspeech.pdf)

标签：#多模态学习 #向量量化 #音乐 #音频分类

评分：**7.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Dinghao Zou：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

音乐情感识别需从音频波形与符号化MIDI（Musical Instrument Digital Interface）推断效价-唤醒度四象限标签，难点在于音频经MERT（Music Understanding Model with Large-Scale Self-Supervised Training）抽取后序列过长且信息稀疏，与紧凑MIDI表征存在密度失衡而稀释融合。全局平均或最大池化对瞬态与平稳区一视同仁易丢弃情感关键变化，而低帧率分词器重训代价高昂难以复用已有预训练表征。该文提出三步流水线：先用冻结的MERT-95M与MIDIBERT（MIDI Bidirectional Encoder Representations from Transformers）分别抽取双模态特征并以60 s与130 s时长上限减少截断；再以PoolingVQ（Pooling with Vector Quantization）对音频做自适应压缩，码本量化局部帧并以滑窗内唯一码数度量变化强度，平稳区平均池化而瞬态区最大池化后降采样至约25 Hz；最后将压缩音频与MIDI经拼接或两阶段交叉注意力融合后分类。融合后终融特征送入全连接分类头输出四类预测概率，并以交叉熵与码本约束联合优化以稳定离散划分与情感判别目标。与全局池化及低帧率重训练分词器相比，该机制无需重训主干且保留情感瞬态，在EMOPIA上交叉注意力融合取得准确率0.8953与宏F1 0.8955，显著超越双模态基线BFAM。该结论仅在钢琴独奏EMOPIA与200首游戏音乐子集上验证，复杂配器与长时结构外推未经检验。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://anonymous.4open.science/r/poolingvq> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，为什么要读这篇？

本文的输入是同一首乐曲的两种表达，一种是录音波形对应的音频，另一种是记录音符与结构的 MIDI 符号。目标是把乐曲判到效价与唤醒度构成的 4 个象限，例如高唤醒高效价等 4 类情绪。研究生的可复述起点是，音频提供音色响度频谱等听感细节，MIDI 提供旋律节奏和声等结构信息，双模态融合希望兼得二者。

论文要解决的矛盾是信息密度不平衡，音频即使经过预训练模型仍很长很冗余，MIDI 则短而紧凑，直接融合会被冗长的音频拖累。本文的输出是一套可复现的压缩加融合流程，以及在两个公开数据集上的四分类准确率与宏 F1。阅读时必须保留的关键信息是冻结的骨干、压缩的窗口与步长、码本的构造方式、融合的两种对照、数据集划分与时长截断，缺少这些就无法判断收益来源。

**音频模态 × MIDI 模态：** 音频模态负责提供音色、响度、频谱包络等直接听感线索，MIDI 模态负责提供旋律、节奏、和声等结构语法，二者搭配的理由是单一模态各有缺失，组合后由融合模块同时利用听感细节与结构上下文来判别效价与唤醒度象限。

白话先行，音频模态可以理解为耳朵听到的连续信号，MIDI 模态可以理解为乐谱式的离散事件序列，前者英文为 audio modality，后者为 symbolic MIDI modality。论文沿一个样本的走向是，取一段最长 60 秒或 130 秒的乐曲，同时送入冻结的 MERT 与 MIDIBERT 得到两条特征序列，再只对音频做自适应压缩，最后把压缩后的音频与 MIDI 融合后送分类头输出 4 个象限概率。这个走向决定了后文所有组件都服务于缩短音频而不丢失情绪动态。

### 已有路线走到了哪里，还缺哪一块？

早期单模态路线各做各的，音频侧用 MFCC 与频谱质心等手工特征接支持向量机或随机森林，MIDI 侧建模旋律轮廓与和弦进行。优点是简单可解释，缺点是音频缺结构解析，MIDI 缺音色细节。深度学习之后出现 MusicBERT 处理符号，MERT 处理声音，预训练表征明显超过早期神经基线，但单模态天花板仍在。

于是主流转向双模态融合，典型做法有用卷积编码音频加循环网络编码 MIDI 再拼接，或用注意力做跨模态加权，论文引用的 BFAM 与 SCMA 即属此类。另一条相关线是序列压缩，一端是全局平均或最大池化，简单但不分平稳与瞬态，另一端是重训低帧率分词器，密度高但算力代价大。本文的定位是在不重训骨干的前提下，对现成的 75 赫兹级音频特征做局部自适应池化，缺的那块正是可解释且轻量的密度提升模块。

同输入同目标的对照应看音频加 MIDI 的融合方法，同运行阶段的对照应看冻结预训练加轻量融合的方案，不能把纯符号预训练的单模态成绩与双模态成绩混为一谈。本文后续用简单拼接与交叉注意力两种融合同时验证，正是为了把压缩收益与融合复杂度分开。

### 音频冗余到底长到什么程度？

论文把问题定义为时间冗余导致的融合稀释。60 秒片段对应数百万采样点，即使经过特征提取仍是过长的 token 序列，音乐信息密度被拉稀，而 MIDI 采用紧凑的复合词编码，同样乐段的序列短且信息集中。作者强调这不仅增大融合表示，还降低融合效率，最终限制分类性能。

教学例子是，想象钢琴长音持续 2 秒，音频每 13.5 毫秒出 1 帧，大量帧几乎重复，而 MIDI 可能只用很少事件表示音高时值与声部，融合时注意力会被大量重复帧分散。该例子只帮助理解密度差异，不代表论文实测了注意力分散程度。

下图用 2 个数据集的平均 token 长度把这种不平衡量化，阅读时先看数量级差异，再思考为何需要约三分之二的压缩比。

> **看图路径：** 1. 先看纵轴两个数据集名称与横轴平均长度刻度确认比较范围；2. 再对比同一数据集中蓝色 MIDI 条与橙色音频条的长度差距；3. 读出条旁标注的四个具体数值并估算音频约为 MIDI 的十倍以上；4. 结合右下图例确认蓝色对应 MIDI 橙色对应音频的映射关系

[![原论文 Figure 1：Average Length (Tokens) Comparison](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/b9a3cff0ee39/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/b9a3cff0ee39/figure-1.png)

*论文图 1。原论文 Figure 1：“Average Length (Tokens) Comparison”。*

该图横轴是 token 数从 0 到 10000，纵轴是 EMOPIA 与 VGMIDI 2 个数据集，蓝色为 MIDI，橙色为音频。像素显示 EMOPIA 的 MIDI 平均 248 个 token 而音频平均 3182 个 token，VGMIDI 的 MIDI 平均 709 个 token 而音频平均 8850 个 token，音频约为 MIDI 的 10 倍以上。这种直观差距支持后文把压缩对象只选音频而不压缩 MIDI，因为矛盾的主要来源在音频侧。需要说明的是，该图报告的是所用预训练提取器下的实际长度，不是原始波形采样数，换骨干则数值会变。

### 预训练加压缩加融合的三段流水线是什么？

论文提出 PoolingVQ，中文可称码本引导的局部自适应池化，全流程为预训练提取、音频压缩、多模态融合。第一步冻结 MERT-95M 与 MIDIBERT，音频重采样到 24000 赫兹以满足 MERT 要求，MIDI 分支保持预训练参数不变，并按数据集设最大时长以减少截断，EMOPIA 为 60 秒，VGMIDI 为 130 秒。

第二步只压缩音频，用 K 均值初始化的码本把每帧映射为离散索引，再用滑动窗口统计窗内独立码字数以判断变化强度，按规则选用平均、加权平均或最大池化作用于连续特征，把 75 赫兹降到约 25 赫兹。第三步融合压缩后的音频与原始 MIDI，分别测试简单拼接与 2 阶段交叉注意力，最后接全连接分类头输出 4 类。

**简单拼接融合 × 交叉注意力融合：** 简单拼接融合负责经时间对齐后直接拼接 2 模态特征以验证压缩后的全局可用性，交叉注意力融合负责以一方为查询对另一方做加权选择以实现深度交互，二者搭配是为了对照验证压缩的作用机制，组合意义在于区分压缩本身的收益与复杂交互带来的额外收益。

下图是整体结构，重点是 3 段之间的数据形态变化，而不是记忆每个方块的颜色，阅读时沿底部箭头从左向右跟踪序列长度的变化。

> **看图路径：** 1. 先沿底部蓝色箭头找到预训练提取音频池化特征融合三段主路径；2. 再看左侧码本初始化虚线如何连接到映射索引序列与策略层；3. 对比右侧对齐拼接分支与双层协同注意力分支的汇合位置差异；4. 确认图例中冻结可训练与初始化三种标记在各模块的分布情况

[![原论文 Figure 2：Architectures of our proposed model](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/b9a3cff0ee39/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/b9a3cff0ee39/figure-2.png)

*论文图 2。原论文 Figure 2：“Architectures of our proposed model”。*

从像素可见，左侧为初始码本与映射索引序列，中部为基于规则的策略层分出平均、加权平均与最大 3 路并输出压缩序列，右侧上方为两层协同注意力，下方为对齐拼接，两路统称为双融合方法后汇入融合节点，再经全连接层输出唤醒度与效价构成的 4 个象限。图例区分冻结、可训练与初始化，码本初始化用虚线表示，压缩后的时间长度记为 pool-t，原始音频长度记为 T，MIDI 长度记为 Ts。该图确认压缩只发生在音频支路，MIDI 支路不经过 PoolingVQ。

### 码本如何感知变化，窗口如何决定池化？

组件的输入是 MERT 输出的连续序列 T，每帧为 D 维向量。初始化阶段缓存 K 批数据做 K 均值聚类，得到含 p 个中心的码本 P，p 即码本大小，是后文消融的关键超参数。正式训练采用余弦相似度做最近邻分配，每帧取与之余弦最大的码中心索引，得到离散索引序列 Q。

接着用滑动窗口在 Q 上统计窗内独立索引数 U，U 小表示平稳，U 大表示瞬态。论文设定窗口 5 帧约 67.5 毫秒，理由是覆盖多数乐器 10 到 100 毫秒的起音段，步长 3 把 75 赫兹降采样到约 25 赫兹，与轻量音乐分词器的常用分辨率对齐。规则为 U 等于 1 时平均池化，U 在大于 1 且不超过 3 时加权平均池化，U 大于 3 时最大池化，前者概括平稳段，后者保留瞬态峰值。池化操作作用于连续特征而非索引，索引只做决策依据。

**VQ-VAE 量化 × 自适应池化：** VQ-VAE 量化负责把连续音频特征映射为离散码本索引以度量局部变化强度，自适应池化负责依据该强度选择平均或最大操作，二者搭配是因为仅有压缩会抹掉瞬态，仅有判据没有执行手段，组合后实现平稳段概括、变化段保留峰值的差异化压缩。

**平均池化 × 最大池化：** 平均池化负责对平稳冗余段做平滑概括以去噪并缩短序列，最大池化负责对高变化瞬态段保留显著峰值以维持情绪动态，二者搭配的理由是音乐兼有持续音与起音瞬态，组合后按窗口内独立码字数在二者间切换，避免一刀切的全局池化。

下图用同一乐段的谱图与能量包络对照码本主成分，用于检验离散量化是否保留了真实的时间动态变化。

> **看图路径：** 1. 先看上排梅尔谱图纹理与右上能量包络峰谷位置是否相互对应；2. 再看下排码本前 20 主成分热图纹理与第一主成分阶梯轨迹的跳变时刻；3. 对比上下两排在约 17 秒后能量衰减段的变化方向是否保持同步；4. 观察离散化后的第一主成分轨迹是否保留了原始包络的峰谷结构

[![原论文 Figure 4：Effectiveness of learned codebook in representing temporal features.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/b9a3cff0ee39/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/b9a3cff0ee39/figure-3.png)

*论文图 3。原论文 Figure 4：“Effectiveness of learned codebook in representing temporal features.”。*

该图为 EMOPIA 某样本的四面板，上排左为梅尔谱图，上排右为短时能量包络，下排左为码本嵌入前 20 主成分热图，下排右为第一主成分的逐帧轨迹。可见热图纹理与谱图起伏对齐，第一主成分轨迹与能量包络的峰谷同步，并在约 17 秒后随能量衰减而下沉。论文据此报告码本学到了抽象但具代表性的时间特征表达。这种可视化支持用独立码字数作为变化强度的代理变量，但它仍是相关性证据，不是压缩必然提升分类的因果证明。

### 哪些参数更新，损失由哪两部分组成？

训练职责分三块，骨干冻结，码本与融合层可训练。预训练提取器全程冻结，不更新 MERT 与 MIDIBERT。码本先用训练集 50% 数据随机采样的特征做 K 均值初始化，正式训练时用向量量化的承诺损失微调，包含特征向停止梯度的码向量靠近，以及码向量向停止梯度的特征靠近两项，sg 表示停止梯度。

分类侧用四分类交叉熵，融合特征经全连接得到每类 logit，再经 softmax 得预测概率，与真值计算交叉熵。总损失为分类损失加承诺损失之和。优化器为 Adam，1 阶矩 0.9，2 阶矩 0.99，epsilon 为 10 的负 6 次方，非码本层学习率 10 的负 4 次方、权重衰减 5 乘 10 的负 5 次方，码本参数学习率 5 乘 10 的负 5 次方、权重衰减 10 的负 5 次方，分组学习率的理由是减缓质心漂移同时让其他层更快适应。若验证性能连续 5 轮不提升则早停。

**码本 × 承诺损失：** 码本负责提供可学习的离散原型向量以量化每 1 帧音频特征，承诺损失负责约束特征与被选中码向量互相靠近以稳定量化，二者搭配是因为码本若无约束会漂移，组合后在分类交叉熵之外维持量化空间对时间动态的表达能力。

需要指出的缺项是，原文未报告加权平均池化的具体权重计算、早停监控的是准确率还是 F1、以及码本 K 均值中 K 批的具体批数，复现时应先按默认理解实现并记录这些选择。资源状态方面，论文给出的匿名代码链接本次经核对返回 200 可达，可写当前可用，但仍是匿名镜像，正式复现应以发表后的公开仓库为准。

### 在什么数据、划分与指标下比较？

实验用 EMOPIA 与 VGMIDI 2 个数据集，前者是 1087 段约 13 小时的干净钢琴独奏，后者实验用 200 首约 5 小时的多轨游戏音乐，风格与速度更多样，平均更长，建模与融合更难。VGMIDI 的效价唤醒标注被映射到与 EMOPIA 相同的四象限，划分按官方执行，EMOPIA 为训练验证测试 70 比 20 比 10，VGMIDI 为 60 比 20 比 20。指标为准确率与宏 F1，方向均为越高越好，宏 F1 更能反映 4 类间精确率与召回率的平衡。

比较的公平条件是同一数据集划分与同一四分类任务，但不同方法的骨干与输入模态并不完全一致，因此只能说在报告条件下取得最优，不能理解为所有实现细节完全对齐。下表整理数据集规模与训练配置，阅读时先确认时长截断与划分，再看优化器分组设置。

| 条件 | 指标或配置 | EMOPIA | VGMIDI | 说明 |
| --- | --- | --- | --- | --- |
| 数据规模 | 片段数与时长 | 1087 段约 13 小时 | 200 首约 5 小时 | 后者为标注子集 |
| 乐器与难度 | 记录条件 | 钢琴独奏干净 | 多轨风格多样 | 后者更难 |
| 划分 | 训练验证测试 | 70 比 20 比 10 | 60 比 20 比 20 | 按官方划分 |
| 最大时长 | 批量截断 | 60 秒 | 130 秒 | 减少截断 |
| 优化 | 学习率与衰减 | 非码本 10 的负 4 次方 | 码本 5 乘 10 的负 5 次方 | Adam 分组设置 |

上表的主要代价是 VGMIDI 样本少而时长长，容易过拟合与优化不稳，EMOPIA 干净但单一乐器也可能鼓励过拟合。未胜出项在后文主结果中专门保留，例如简单拼接在 VGMIDI 上并不占优，说明压缩并非在所有融合下都有效。表格数字由原文连续句逐字覆盖，单位与划分口径保留原文写法。

### 主结果测了什么，谁在什么条件下赢了？

主结果测量四象限分类的准确率与宏 F1，对比对象包括早期方法、预训练单模态与双模态融合，关键是作者的交叉注意力融合是否在保持可运行策略的前提下超过最强双模态基线 BFAM。论文报告其框架在 2 数据集宏 F1 上均为最优，EMOPIA 为 0.8955，VGMIDI 为 0.6018，超过 BFAM 在 EMOPIA 约 12.5 个百分点、在 VGMIDI 约 5.48 个百分点。

单看 EMOPIA，MIDIBERT 分支本身已达 0.872 左右，说明钢琴数据集上符号结构极具判别力，音频压缩更多是锦上添花，而 VGMIDI 上 MIDI 分支仅 0.459 左右，音频分支 0.364 左右，双模态交叉注意力到 0.6018，提升更依赖融合。下表在相同四分类任务下对比关键基线与本文两种可运行融合，指标方向均为越高越好。

| 方法 | 模态 | EMOPIA 准确率 | EMOPIA 宏 F1 | VGMIDI 宏 F1 |
| --- | --- | --- | --- | --- |
| 短块卷积 | 音频 | 0.670 | 0.634 | 0.219 |
| BFAM | 音频加 MIDI | 0.822 | 0.770 | 0.547 |
| MoFi | MIDI | 0.752 | 0.751 | 0.587 |
| 简单拼接本文 | 音频加 MIDI | 0.8837 | 0.8844 | 0.4522 |
| 交叉注意力本文 | 音频加 MIDI | 0.8953 | 0.8955 | 0.6018 |

上表显示预训练超越早期基线、双模态再推高上限的趋势成立，但需保留反例，简单拼接在 VGMIDI 仅 0.450 准确率与 0.4522 宏 F1，低于 BFAM 与 MoFi，说明压缩加简单融合在难集上会丢失细粒度判别细节。论文的判断是压缩需配合交叉注意力的重语境化才能稳定获益，这一点由消融进一步支撑。百分点与相对百分比含义不同，此处 12.5 应理解为 F1 差值换算的百分点幅度，复述时避免写成相对提升 12.5%。

### 压缩是否必要，自适应是否优于全局池化？

消融围绕 3 个问题，有无 PoolingVQ、池化策略选择、码本大小。先看有无压缩，在 EMOPIA 上简单拼接与注意力融合均因压缩获益，简单拼接宏 F1 从 0.8723 到 0.8844，注意力融合从 0.8718 到 0.8955，论文解释为全局速度与动态等线索在压缩后仍保留且噪声被滤除。在 VGMIDI 上简单融合加压缩反而从 0.4791 降到 0.4522，而注意力融合加压缩从 0.5218 升到 0.6018，说明难集上压缩需复杂交互才能兑现。

再看池化策略，自适应在 EMOPIA 达 0.8955，高于全局平均与全局最大的 0.8718，在 VGMIDI 达 0.6018，高于全局平均 0.5218 与全局最大 0.5479，支持平稳段概括、瞬态段保峰的机制解释。码本大小呈现先升后降，过大引入噪声或过拟合，过小则粒度不足，2 数据集各有一个最优区间。

下图集中展示上述 3 组消融，纵轴均为 F1 越高越好，阅读时重点对比同一组内柱子高低与曲线峰值位置。

> **看图路径：** 1. 先看子图 a 中同一融合方式下有压缩与无压缩两根柱子的高低关系；2. 再看子图 b 中绿色自适应柱与蓝色平均橙色最大两根基线的差距；3. 观察子图 c 中 F1 随码本尺寸增大呈现先升后降的峰形变化趋势；4. 对比 EMOPIA 与 VGMIDI 上下两行子图纵轴量级与波动幅度的差异

[![原论文 Figure 3：Impact of the proposed PoolingVQ module.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/b9a3cff0ee39/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/b9a3cff0ee39/figure-4.png)

*论文图 4。原论文 Figure 3：“Impact of the proposed PoolingVQ module. (a) Per- formance improvement via PoolingVQ in fusion; (b) Compari- son with global pooling baselines; (c) Effect of codebook size P.”。*

从像素可见，子图 a 左上 EMOPIA 两组均为蓝色有压缩柱高于橙色无压缩柱，左下 VGMIDI 简单融合出现橙色高于蓝色的反例而注意力融合蓝色显著更高。子图 b 两行均为绿色自适应柱最高，EMOPIA 为 0.8955，VGMIDI 为 0.6018。子图 c 横轴为码本尺寸，纵轴为 F1，曲线呈峰形，EMOPIA 峰值 0.8955 附近，VGMIDI 峰值 0.6018 附近，两侧波动下降。解释时需强调总体趋势不等于每步都成立，VGMIDI 简单融合的负结果正是压缩会平滑掉细节的代价。

下表把有无压缩与池化对照放在同一口径下比较，公平条件是同一数据集与同一 F1 指标，方向越高越好。

| 融合与池化条件 | 数据集 | 评估指标 | 无压缩或基线 | 本文自适应 |
| --- | --- | --- | --- | --- |
| 简单融合有无压缩 | EMOPIA | F1 | 0.8723 | 0.8844 |
| 注意力融合有无压缩 | EMOPIA | F1 | 0.8718 | 0.8955 |
| 简单融合有无压缩 | VGMIDI | F1 | 0.4791 | 0.4522 |
| 注意力融合有无压缩 | VGMIDI | F1 | 0.5218 | 0.6018 |
| 全局平均对比自适应 | VGMIDI | F1 | 0.5218 | 0.6018 |

上表未胜出项是 VGMIDI 简单融合加压缩的下降，它提醒压缩不是免费午餐。未评测边界包括不同骨干、不同窗口步长与更长乐曲的泛化，原文未报告推理延迟与显存变化，因此不能承诺压缩一定降低实际延迟，只能说序列长度约缩减三分之二为计算量下降创造了条件。

### 哪些结论还不能下，缺了什么验证？

论文直接报告的是 2 个数据集上的准确率与宏 F1 提升，以及码本可视化与池化对照，支持压缩改善信息密度与融合效果的判断。有限解释是跨模态注意力能重语境化压缩特征，这符合 VGMIDI 上只有注意力才获益的现象，但注意力权重本身未做细粒度分析。

对未验证推测应使用可能与待验证，例如更大码本可能引入噪声、平稳段平均可能滤除噪声，这些是与曲线一致的解释而非因果证明。缺失的证据不是技术错误，但复述时要明确，未测量误判率分布、逐类召回、推理延迟、训练显存与不同随机种子的方差，也未在钢琴之外的原声乐器或人声上验证。

规则阈值 1 与 3、窗口 5 步长 3 均基于起音时长与 25 赫兹目标的先验，若换乐器或换骨干帧率，最优值可能变化。总体趋势不等于每组都成立，简单融合在 VGMIDI 的下降已证明边界存在。

### 要复现应先做什么，需要哪些超参数？

复现先做数据与特征对齐，再做码本与压缩，最后做两种融合对照。第一步按官方划分准备 EMOPIA 与 VGMIDI 四象限标签，音频重采样到 24000 赫兹，批量按 60 秒与 130 秒截断，提取冻结的 MERT 与 MIDIBERT 特征并记录实际平均长度以复核图 1 量级。

第二步用训练集 50% 特征做 K 均值初始化码本，实现余弦最近邻量化与承诺损失，滑动窗口设 5 帧步长 3，按独立码字数 1、大于 1 不超过 3、大于 3 分别触发平均、加权平均与最大池化，目标是把 75 赫兹降到约 25 赫兹并缩减约三分之二长度。第三步同时实现对齐拼接与 2 阶段交叉注意力，前者把短的 MIDI 经线性插值对齐到音频时间分辨率，后者先以音频为查询对 MIDI 做注意力，再以 MIDI 为查询对融合特征做注意力，最后接分类头。

优化按分组学习率与早停 5 轮执行，指标同时记录准确率与宏 F1。代码当前可用指向匿名镜像，权重依赖 MERT 与 MIDIBERT 的公开下载，系统可运行还需补全加权池化权重、早停监控指标与 K 均值批数等缺项。还需补的验证是多种子方差、逐类性能与推理开销，否则无法判断提升是否稳定可部署。

### 何时值得尝试这套压缩，如何一句话记住它？

当双模态中音频远长于符号且融合被稀释时，值得尝试先压缩音频再融合，尤其已有冻结高帧率音频骨干而不想重训分词器时。本文可记住为用离散码字数做变化检测，用差异池化做有损但保情绪的压缩。

EMOPIA 上符号本身很强，压缩是稳健增益，VGMIDI 上必须配交叉注意力，否则压缩可能抹掉细节。实践中先在小码本区间搜索峰值，观察简单融合是否出现下降以判断是否需要更强的融合。若任务更依赖瞬态表情，可适当放宽最大池化阈值，若更依赖整体速度力度，可偏向平均。

最终仍需回到原文核对窗口、步长、损失权重与划分，任何骨干或时长截断的改动都应重做消融，而不是默认沿用最优码本。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
