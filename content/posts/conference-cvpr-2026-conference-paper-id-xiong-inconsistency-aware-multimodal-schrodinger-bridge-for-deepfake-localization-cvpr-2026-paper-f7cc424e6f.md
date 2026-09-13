---
title: "Inconsistency-aware Multimodal Schrodinger Bridge for Deepfake Localization"
date: 2026-09-13
draft: false
description: "针对音视频单侧与异步伪造在对称融合中互相污染边界的问题，IaMSB 用粗桥提候选、见证桥估一致性并分配步数与事件数、精炼桥做步数可调融合，在 LAV-DF 上 AP@0.95 达到 55.92、AV-Deepfake1M 上 AP@0.95 达到 23.01，代价是需要维护跨模态耦合统计与两级步数预算。"
tags: ["扩散模型", "多模态学习", "音视频", "音频深度伪造检测", "音频事件检测"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "79f01131f69da55ceefe757d564eebc7090e1cf8b10959571d59fd063184b03f"
paper_digest_api_reader_plan_sha256: "a5ee75f720949309e4ad62897dd71d8bde87530aa3dfa12983a0c075c6f01585"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "87defc30d6243eec58455ce37b33b3ad8aedfc762f895f9be1e84531385ad191"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "930799d5dee789e6047bc769629350a83beffa4a907217e4981761477d86070d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "c8058ab9afe00791d03d4e92434c1f1f55350ad45e207fff3315fa6f4410984e"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "65362754ef2685bb8ec56191a196722e458cbe1b570811188f1ccbd286ac3e36"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"},{"facet":"task","id":"task.event-detection","label":"音频事件检测"}]
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_primary_method: "扩散模型"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 不对称伪造下为何要先估一致性再分配计算：IaMSB 的三段桥

> 英文题目：*Inconsistency-aware Multimodal Schrodinger Bridge for Deepfake Localization*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf)

标签：#扩散模型 #多模态学习 #音视频 #音频深度伪造检测 #音频事件检测

评分：**6.5/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.6/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Jiayu Xiong：机构信息未能从会议 PDF 纯文本可靠映射
- Jing Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Qi Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Wanlong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jun Xue：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

音视频深度伪造定位输入为音频与视觉时序token，输出为可审计的伪造时间区间，难点在于单侧伪造与异步事件下对称均匀融合会把干净模态噪声引入伪造分支并浪费计算，损害严格边界精度。先由粗桥接收双模态token分别做模态内相干增强并输出候选区间，再将粗事件送入见证桥求解熵正则最优传输耦合以导出跨模态不一致统计量并输出选中见证索引与非对称预算，最后将选中查询与预算送入精炼桥仅对选中子集做步数可控的见证注入融合以输出起止时间与置信度并跨模态融合。粗桥每模态推进2步并以top-16见证构成瓶颈，精炼桥以目标12步按方向尺度非对称分配迭代。与均匀铺开融合层的方法不同，该链以传输残差驱动瓶颈交互与计算放置，只在可疑模态上花迭代，从而兼顾抗负迁移与高分辨率边界。在LAV-DF基准下，IaMSB的指标AP@0.95为55.92，高于UMMAFormer的指标AP@0.95 37.61。该结论适用边界受限于视觉单侧伪造下跨模态证据较弱时严格阈值增益收窄。在计算量上平均视频浮点运算为93.0G而长视频达311.2G，需特定硬件与延迟权衡。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为何要做到区间级？

这篇论文研究的输入是同一段视频的音频流与视觉流，目标是输出时间区间级的伪造定位。每个预测事件包含归一化开始时间、持续时长与置信度，再映射到绝对秒级时间轴。与只给整段视频打真伪标签相比，区间输出能提供可审计的时间证据，直接支撑内容审核与取证。研究生复述时要抓住这个判定标准：方法好不好，不仅看检出伪造，还要看起点与终点在严格重叠要求下是否准确。

论文强调的难点是单侧伪造与异步伪造。单侧指只有音频被合成而画面真实，或只有画面被替换而音频真实；异步指两边伪造事件的长度与位置不对齐。此时若对 2 模态做同等深度的对称融合，干净模态的特征会污染伪造模态，导致高精度定位下降。另一个现实约束是计算量：时序融合若对长序列做平方复杂度注意，就必须降采样，而降采样又损伤边界精度。理解这三点，就能理解后文为何要先估计一致性、再决定哪里多算、哪里少算。

本次解读只依据论文原文证据与收到的官方原图像素写作，不继承其他解读的评价。凡涉及代码、模型或数据是否公开，均以资源状态为准；本次未发现完成验证的可用资源，因此不声称任何代码或数据已公开。后续所有数字都回到原文表格与正文句子核对，教学用的举例会明确标为例子。

### 同输入同目标的已有路线各解决了什么？

在相同输入与相同区间定位目标下，论文梳理了 3 条路线。第一条是内容驱动的 2 阶段范式，以 BA-TFD 与 BA-TFD+ 为代表，先从音视频线索生成候选，再做轻量时序精炼，优点是召回稳定，缺点是精炼均匀分布，没有针对模态不对称的调度。第二条是融合增强路线，以 UMMAFormer 与 MMMS-BA 为代表，通过跨模态注意或自适应调制加强耦合，在松散重叠指标下表现好，但在模态不平衡时可能传播噪声。第 3 条是查询解码与话语不一致路线，以 RegQAV 与 DiMoDif 为代表，前者用寄存器增强的查询稳定解码以保高交并比精度，后者显式建模超出唇同步的语义冲突以抑制虚假区间。

表示学习路线为上述方法提供特征起点，从掩码单元预测发展到对比与掩码联合目标，再到解耦重建与对齐、细粒度同步。生成式解码路线提供方法灵感，把边界看作多步去噪查询的生成轨迹，训练目标更稳定且推理步数可控。但论文指出，已有生成式做法缺少面向多模态异步的原则性调度器，也缺少校准的、时间局部的跨模态差异度量来指导交互与计算。这正是引入 Schrödinger 桥的动机：既要传输分布，又要给出可用于分配预算的进度度量。

复述时不要把类别差异当作同条件胜负。例如唇动子网络强的模型在视觉单侧伪造上占优，不代表其跨模态调度更好；长视频上的文本代理对齐可能提升粗检出，却未必保住严格边界。只有在相同数据集、相同交并比阈值与相同候选预算下比较，才有意义。

### 单侧与异步伪造为何让对称融合失效？

沿一个样本走一遍有助于建立直觉。假设一段 8 秒视频，前 3 秒画面被换脸，后 5 秒音频被语音转换合成，两边伪造区间既不同时也不等长。若用对称融合，模型在前 3 秒会把真实音频当作证据去修正视觉判断，在后 5 秒又会把真实画面去修正音频判断，结果两边都被拉偏。更麻烦的是，融合层数太多会浪费在干净模态上，太少又让伪造模态收敛不足。论文把这归纳为 3 个问题：干净模态的负迁移、融合深度难以兼顾两边、融合开销迫使降低时间分辨率。

下图用可达性比喻把上述困难形式化，读图时注意它不是性能曲线，而是 4 种跨模态事件关系的示意。

**对称融合 × 非对称融合：** 对称融合指对音频与视觉用与顺序无关、深度相同的融合层同等处理，分工是充分交换信息；非对称融合指按模态可疑程度分配不同的迭代步数或等价层数，分工是把计算压向伪造侧。两者搭配的理由是单侧伪造时干净模态会向伪造模态注入噪声，对称融合放大这种负迁移；组合意义是 IaMSB 用一致性分数决定哪一侧多算、哪一侧少算，从而在保留时间分辨率的同时抑制噪声传递。

> **看图路径：** 1. 先看上面两块面板的时间轴：视觉侧有多个重叠伪造段，音频侧只有独立生成的两段；2. 再看下面两块面板：真实音频几乎无高置信事件，同步生成音频则出现对齐事件；3. 最后看中间箭头标注：失配事件难到达、一致事件易迁移，到达步数即后续怀疑分

[![原论文 Figure 1：A bridge estimates the cross-modal deepfake event set’s reachability.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/02265fe8d6cf/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/02265fe8d6cf/figure-1.png)

*论文图 1。原论文 Figure 1：“A bridge estimates the cross-modal deepfake event set’s reachability.”。*

该图上半部分并排给出视觉伪造事件与独立生成音频：视觉侧有换脸、唇同步与修复 3 类重叠区间，音频侧只有语音转换与文本转语音两段不重叠区间，两者在时间上失配，桥难以从一侧到达另一侧。下半部分给出真实音频与同步生成音频：真实音频只有低置信事件，同步生成音频则出现与视觉对齐的区间，更容易到达。中间箭头标注点明含义：失配事件很少到达，单侧情形不对称，一致事件更容易到达，而到达所需步数定义了怀疑分与预算分配的生成代价。研究生应把到达步数理解为后文传输残差与步数分配的直观来源，而不是字面上的网络层数。

### IaMSB 的三段桥如何分工与衔接？

IaMSB 的全称是不一致性感知的多模态 Schrödinger 桥，白话说就是先判断两边是否一致，再决定计算花在哪里，最后精修边界。方法全景分为 3 段。粗桥对每个模态独立做少量步推进，输出候选区间；见证桥在两组粗候选之间求静态最优传输耦合，得到残差、未匹配率、耦合熵与区间不一致率等统计，据此筛选对方证据并分配精炼步数与事件数；精炼桥用分配到的步数做步长可调的融合，把对方高置信证据作为见证注入，再输出精修区间并跨模态合并。

下图是整体架构，阅读时先走主路径，再看中间的选择与分配。

**Schrödinger 桥 × 扩散解码器：** Schrödinger 桥分工是在源分布与目标分布之间求熵正则的最优传输路径，直接给出分布差异与可达性度量；扩散解码器分工是把事件边界看作多步去噪查询生成，提供可控的推理步数。搭配理由是论文既需要校准的跨模态差异分数，又需要按步分配的精炼过程；组合意义是把一致性估计、证据筛选与步数调度统一在一个桥框架内，不再单独训练对齐网络。

> **看图路径：** 1. 先沿最上一行主路径看：音频与视觉特征进入粗桥，再经中间选择进入精炼桥合并输出；2. 再看中间菱形耦合矩阵与两侧选择箭头：粗事件如何被筛选为精炼查询与见证；3. 最后对照下方三个子框：粗桥只做残差推进，见证桥输出步数与索引，精炼桥注入见证

[![原论文 Figure 2：Overview of IaMSB. The extractors Ea and Ev produce modality–specific token sequences.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/02265fe8d6cf/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/02265fe8d6cf/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of IaMSB. The extractors Ea and Ev produce modality–specific token sequences.”。*

该图最左侧是音频编码器与视觉编码器各自输出特征序列，中间偏左是上下两个粗桥模块，分别迭代更新潜查询；中间是耦合矩阵与选择箭头，把粗事件压缩为精炼查询与跨模态见证，并输出每侧的步数；右侧是上下两个精炼桥，注入见证后迭代更新，最终合并为音频与视觉两组输出区间。下方 3 个子框分别展开粗桥的查询键值注意与残差推进、见证桥的解码耦合与步数查询分配、精炼桥的多级注意与见证注入。图中标注粗阶段产生 Nev 个潜事件，经见证筛选后降为音频侧与视觉侧各自的选中数。理解这张图的关键是记住数据只向前流动 1 次，但计算量在中间被重新切分。

### 粗桥如何低成本产生候选？

粗桥的设计目标是以线性时间代价给出足够好的初始区间。输入是模态特征库与潜查询序列，查询经交叉注意读取特征，再经层归一化与前馈网络做残差推进，固定走 Sc 步。原文默认每模态走 2 步，复杂度为候选数乘以时间长度，低于 2 模态直接做交叉注意的乘积复杂度，且不牺牲任一模态的时间分辨率。输出经任务头映射为开始时间、时长与置信度，梯度在此处截断，仅用于驱动后续交互与预算分配。

教学例子：把粗桥想象为用两笔快速勾勒出可疑段落，不要求边缘整齐，只要求不漏掉大段伪造。若第一步只看到能量突变，第二步就能把起点向突变处收缩。这种例子仅说明迭代求精的直觉，不对应论文报告的数值效果。原文的消融显示，去掉粗桥主要损伤召回，因为固定特征提取器下缺少候选；只用粗桥则放大模态不平衡误差，高交并比精度下降。这支持粗桥的定位是低成本提议者，而非最终边界决定者。

### 见证桥如何用传输统计筛选证据并分配步数？

见证桥是全文最特有的组件，它不做时序建模，只在粗事件集合上做 1 次静态传输。先定义事件间代价，包含开始时间差、时长差、一减交并比以及置信度平方差，加权求和得到代价矩阵；再把置信度归一化为边缘分布，求熵正则最优传输耦合。从耦合矩阵导出加权残差、匹配质量、未匹配率、归一化耦合熵与区间不一致率 5 个数，拼接模态表征差与乘积后经自注意与多层感知机得到 2 个方向分数，结合先验控制能量经 softmax 得到音频与视觉的权重，最后把总步数与总事件数按权重切分为整数配额。

**传输残差 × 计算预算分配：** 传输残差分工是度量一侧粗事件集合向另一侧传输的困难程度，到达步数越大越可疑；计算预算分配分工是把总精炼步数 Stgt 与总事件数 Nev 切分为音频侧与视觉侧的整数配额。搭配理由是残差大的方向更需要多步打磨；组合意义是论文用传输统计经 Softplus 与多层感知机得到方向分数，再经 softmax 得到权重，从而实现可疑模态多迭代、干净模态少迭代。

筛选证据时，每行只保留 top-k 个耦合项，形成跨模态瓶颈；按行列和计算优先级并无放回采样出选中索引，取出对应的潜查询子集与见证张量送入精炼。原文默认 top-16，若候选不足则取全部。这种窄瓶颈的理由是宽交互会引入噪声，窄瓶颈既降低见证计算，又提升选择性。

**最优传输耦合 × 见证瓶颈：** 最优传输耦合分工是在音频粗事件与视觉粗事件之间求熵正则耦合矩阵 Π，编码谁与谁在时间上对应；见证瓶颈分工是每行只保留 top-k 个对应项，把对方潜变量压缩为 witness 张量。搭配理由是全量交叉注意复杂度高且易引入噪声；组合意义是只让高置信对方证据以窄通道注入精炼，既保留跨模态校准，又把见证阶段复杂度控制为与时间无关的常数。

需要强调的是，见证桥的复杂度与时间无关，可视为常数。它不直接输出最终区间，只输出统计、配额与索引，因此后文精炼桥的步数与事件数完全由它决定。复现时若发现分配总是均分，应先检查方向分数在 softmax 前是否坍缩，而不是直接增大总预算。

### 精炼桥如何把见证注入并按步打磨边界？

精炼桥的输入是选中粗潜序列、见证张量与观测特征，初始化为选中粗潜序列，按分配到的步数迭代。每次迭代先用共享键值的注意读取本模态记忆，再做自注意增强时序连贯性；然后对每个查询用注意从其 k 个见证中提取对方高置信信息，形成见证残差；最后把见证残差与记忆融合作为漂移输入，以步长倒数为系数做残差推进。直观理解是让对方可靠证据把本侧查询向目标分布拉近，从而用更少步数缩小跨模态残差。

复杂度方面，读取记忆与融合的代价随选中事件数乘以时间长度线性增长，自注意为选中数的平方，见证提取为选中数乘以 k。总体仍随时间线性扩展，避免了对全长序列做平方注意。解码时把最终潜序列经模态任务头映射为开始时间、时长与置信度，再按绝对时长映射到秒级时间轴，最后跨模态融合得到事件预测。训练损失包含定位的匹配、负样本与覆盖项，以及排序与步数单调性正则，权重在原文中给出，但梯度细节未完全展开，复现时应以原文公式与代码为准，不从模块名推定梯度路径。

### 训练如何组织，哪些参数更新、哪些冻结？

论文报告了完整的训练配置，但部分梯度路径需要按原文谨慎复述。编码器采用双分支视觉变换器，分别从视频掩码自编码与语音自监督知识初始化，词嵌入与位置编码重新训练，视频分支插入帧级分组类别标记，其余编码器权重冻结。这意味着可训练参数主要在桥模块与任务头，论文报告总参数 70.6M、可训练 10.3M。优化器为 AdamW，精度为 bf16，学习率 2.5×10 的负 4 次方带余弦热身，共训练 40 轮，每卡批量 8，等效 128。损失由每模态定位损失加排序损失与步数正则组成，后两项系数均为 0.2。

粗阶段固定每模态 2 步，候选数与评测的召回候选数绑定；见证阶段做单次 Sinkhorn 迭代计算统计并选 top-16 见证；精炼总预算固定为 12，可选集合为 0 与 2，步粒度为 2。这些数字是复现时必须保留的预算条件，改变它们会同时改变精度与计算量，不能直接与原文数字比较。需要指出的缺项是，原文未逐层说明哪些注意权重在粗细阶段共享，也未给出排序与步数正则对每步漂移的具体反传路径，因此不应从模型名称推定实现细节，缺失证据应记为待核对，而非技术错误。

### 在哪些数据与协议下比较，指标方向是什么？

实验覆盖 3 个基准。LAV-DF 是常用短视频基准；AV-Deepfake1M 强调长视频与局部伪造；TVIL 是视觉单侧伪造，音频干净而篡改发生在视觉。TVIL 采用 216×120 视觉分辨率与 540 Hz 音频嵌入率，另两个基准采用 1282 分辨率表述与 640 Hz 音频嵌入率。

硬件分为两组：AV-Deepfake1M 用 4 卡 V100 与 16 核处理器，LAV-DF 与 TVIL 用 2 卡 RTX-4090 与 12 核处理器。复述时应保留这些条件，因为分辨率与音频嵌入率直接影响时间粒度，而时间粒度正是论文反复强调的高精度前提。

指标方面，LAV-DF 与 TVIL 报告 AP 在 0.5、0.75、0.95 阈值与 AR 在 10、20、50、100 候选数；AV-Deepfake1M 报告 AP 在 0.50、0.75、0.90、0.95 与 AR 在 50、30、20、10、5 候选数。所有 AP 与 AR 都是越高越好，但含义不同：AP@0.95 对边界误差极敏感，差几帧就可能从命中变为脱靶；AR 反映在有限候选下找回能力。论文的中心主张是稳定严格交并比下的边界精度，AP@0.95 提升 3 至 10 个百分点，因此阅读结果时应重点看高阈值列，而不是只看 AP@0.5。百分点与相对百分比不同，本文统一用百分点描述阈值精度的绝对差值。

### 主结果在相同协议下比出了什么？

比较的问题是：在相同时间定位协议与相同候选预算下，预算可分配的线性融合是否比均匀精炼更保边界。公平条件是各方法在同一数据集上按官方协议评测，LAV-DF 与 TVIL 的对比结果来自官方报告或前人汇总，AV-Deepfake1M 的对比结果来自同一篇查询基线汇总。指标方向均为越高越好，其中严格列最能反映边界质量。

| MDS [10] | 12.78 | 1.62 | 0.00 | 32.15 | 36.71 |
| --- | --- | --- | --- | --- | --- |
| UMMAFormer [40] | 98.83 | 95.54 | 37.61 | 92.10 | 92.42 |
| MMMS-BA [18] | 97.56 | 95.25 | 39.02 | 89.42 | 95.93 |
| DiMoDif [19] | 95.50 | 87.90 | 20.60 | 91.40 | 92.70 |
| RegQAV [41] | 94.10 | 88.10 | 27.60 | 91.70 | 91.80 |
| IaMSB (ours) | 99.33 | 95.62 | 55.92 | 94.68 | 95.41 |

上表聚焦 LAV-DF 与 TVIL 的中高精度对比。IaMSB 在 LAV-DF 上 AP@0.95 达到 55.92，明显高于表中融合增强与查询正则基线，同时 AR@20 为 95.41，保持在高位；在 TVIL 视觉单侧设置下仍取得 65.62 的 AP@0.95。表后需要同时看到代价与反例：TVIL 上 MMMS-BA 在 AP@0.5 达到 96.87，略高于 IaMSB 的 96.89 相近但其中间阈值与召回分布不同，说明视觉专用解码在松散重叠下仍有竞争力；论文也承认在 AR@20 处统一取 top-16 可能在瓶颈中引入冗余，从而抑制召回。这支持论文的判断：收益主要来自严格边界，而非所有指标全面压制。

**严格交并比精度 × 召回：** 严格交并比精度如 AP@0.95 分工是检验预测区间与真值在极高重叠要求下的边界准确性；召回如 AR@20 分工是检验在限定候选数下找回真事件的能力。搭配理由是两者分别回答打得准与找得全；组合意义是 IaMSB 的改进集中在严格精度而非单纯召回，说明其线性时间融合与步数倾斜主要改善边界抛光，而非增加候选数量。

| BA-TFD [3] | 37.37 | 6.34 | 0.19 | 0.02 | 45.55 | 40.37 | 35.95 | 30.66 | 26.82 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BA-TFD+ [4] | 44.42 | 13.64 | 0.48 | 0.03 | 48.86 | 44.51 | 40.37 | 34.67 | 29.88 |
| ActionFormer [39] | 36.08 | 12.01 | 1.23 | 0.16 | 27.11 | 27.08 | 27.00 | 26.60 | 25.80 |
| AVDeepfake1M UMMAFormer [40] | 51.64 | 28.07 | 7.65 | 1.58 | 44.07 | 43.93 | 43.45 | 42.09 | 40.27 |
| DiMoDif [19] | 86.93 | 75.95 | 28.72 | 5.43 | 81.57 | 80.85 | 80.25 | 78.84 | 76.64 |
| RegQAV [41] | 90.24 | 81.86 | 41.98 | 12.57 | 88.14 | 87.68 | 87.27 | 86.95 | 85.97 |
| IaMSB (ours) | 90.31 | 82.03 | 45.15 | 23.01 | 90.02 | 88.61 | 88.05 | 87.74 | 86.03 |

上表是 AV-Deepfake1M 的长视频对比，候选预算从多到少全面覆盖。IaMSB 在 AP@0.90 达到 45.15、AP@0.95 达到 23.01，高于 RegQAV 的 41.98 与 12.57，同时 AR@50 为 90.02、AR@5 为 86.03，保持领先或相当。表后解释是：面向粗定位的时序跨步、大步降采样或代理文本对齐在严格阈值下受限明显，而时间线性、可按预算分配的融合能在不爆炸计算的前提下保留细粒度时序决策。未胜出项也要指出：在 AP@0.5 上 IaMSB 的 90.31 与 RegQAV 的 90.24 几乎持平，说明粗检出能力相近，差距随阈值变严而拉开，这与论文关于时间分辨率决定高精度上限的论述一致。

### 计算代价与参数量如何随视频长度变化？

比较的问题是：在相近定位质量下，级联桥是否比融合重型基线更省计算。公平条件是按平均长度约 8.6 秒与最大 30 秒两种设置分别估算，指标为总参数、可训练参数与浮点运算量，方向为越小越好。需要区分训练资源、推理开销与实际延迟：参数量决定显存与部署体积，浮点运算量决定理论计算，论文另给的单样本 20 毫秒为特定 GPU 上的实测，不等同于所有硬件的延迟。

| Method | Total Params [M] | Trainable Params [M] | FLOPs [G] |
| --- | --- | --- | --- |
| BA-TFD | 5.5 | 5.5 | 948.1 |
| BA-TFD+ | 152.9 | 152.9 | 218.2 |
| RegQAV | 116.5 | 19 | 251.1 |
| IaMSB(ours, avg.) | 70.6 | 10.3 | 93.0 |
| IaMSB(ours, max.) | 70.6 | 10.3 | 311.2 |

上表显示 IaMSB 总参数 70.6M、可训练 10.3M，平均长度下 93.0G 浮点运算，最大长度下 311.2G，低于表中 BA-TFD 的 948.1G 与 UMMAFormer 的 1562.9G 量级。表后解释是：主干视觉变换器的平方复杂度仍不可忽略，但桥部分的每步代价为粗桥每步 0.428G、单次传输迭代约 3×10 的负 5 次方 G、精炼每步 1.01G，最大长度下对应为 0.739G 与 2.22G，总体随 duration 线性扩展。代价的另一面是预算选择敏感：总步数过大收益递减，过小则严格精度先掉，因此论文把默认总预算定为 12，并在后文建议按实例自适应预算作为未来工作。

| 来源证据 | 量化值 1 | 量化值 2 | 量化值 3 | 量化值 4 |
| --- | --- | --- | --- | --- |
| 来源句 1 | 0 | 90 | 2 | 4；6；8；10；12 |
| 来源句 2 | 1 | 10 | 2022 | 2；5；6；7；4；20371；20393；2023；16 |
| 来源句 3 | 0 | 2 | — | — |
| 来源句 4 | 1 | 0.5 | 0.75 | 0.95；10；20；50；100；4；40；3；39 |

上表整理原文连续句子给出的可复现预算：每卡批量 8 等效 128，粗阶段每模态 2 步且候选数与召回候选数绑定，见证阶段单次 Sinkhorn 并选 top-16，精炼总预算 12，可选集合为 0 与 2、步粒度为 2，学习率与训练轮数如上。表后说明，这些是复现时必须对齐的实验条件，改变任一项都会移动精度与计算的权衡点；原文未报告误判率与端到端延迟的统计分布，因此不承诺这些量同步改善，总体趋势不等于每组视频都成立。

### 去掉哪一段、改动步数与瓶颈宽度会发生什么？

消融要回答 3 个可操作问题：3 段桥是否各有分工，粗步数是否越多越好，见证宽度是否越宽越好。原文报告，去掉见证桥会消除跨模态过滤与预算分配，导致 AP 与 AR 全面明显下降；去掉精炼则保留中段精度但丢失边界抛光；只用粗桥会放大模态不平衡误差。粗步数从 1 增至 2 增益最明显，从 2 增至 3 差异在实验方差内，因此默认取 2。

见证 top-k 在 2 到 64 之间呈先升后降，默认 16 附近达到峰值，过窄暴露不足，过宽引入噪声。这些描述来自原文正文句子，结构消融表的表头在源矩阵中为空，按契约不做选择绑定，此处用计算扩展与方向分数图承担可视证据。

下图左侧给出统一预算下的步数精度权衡，右侧给出方向分数的分布形态。

> **看图路径：** 1. 先看左侧两条计算扩展曲线：横轴是精炼步数，纵轴分别是 AP@0.5 与 AP@0.95；2. 再看右侧四组直方图：横轴是 softmax 前方向分数，颜色区分真与伪音频或视频；3. 对比 LAV-DF 与 TVIL 的分布重叠程度，判断何时需要非均匀步数分配

[![原论文 Figure 3：Compute scaling and directional scales.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/02265fe8d6cf/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/02265fe8d6cf/figure-3.png)

*论文图 3。原论文 Figure 3：“Compute scaling and directional scales.”。*

该图左侧上下两块分别显示 AP@0.5 与 AP@0.95 随精炼步数变化：步数从 0 增至 12 附近快速上升，之后趋平甚至轻微回落，黑色叉号标出默认预算位置；LAV-DF 与 TVIL 两条曲线都呈现收益递减，说明额外步数主要用于高交并比的边界抛光而非粗检出。右侧四块直方图显示 softmax 前方向分数：LAV-DF 上真伪分布大幅重叠，表明 2 模态频繁近对称交互；TVIL 上音频真而视觉伪的模式更极端，视觉方向分数明显偏大，反映当音频可作可靠见证时应向视觉倾斜更多精炼。这种分布差异直接支撑非均匀分配的必要性，也解释了为何干净模态仍会被分配非零配额以辅助对齐与抑制误报。

### 哪些边界尚未评测，哪些推测仍待验证？

论文直接报告的是 3 个基准上的阈值精度与召回，以及步数与瓶颈宽度的敏感性，这些属于已验证的事实。有限解释是传输残差大处集中精炼能缓解对称融合的负迁移，这一解释得到消融与分布图的支持，但属于机制层面的归因，仍可能与其他因素交织。未验证推测包括自适应总预算能否在真视频与同步伪造之间差异化分配资源，论文仅在结论中提出方向，未给出可运行策略，因此不能当作已实现收益。

未评测边界需要明确列出：极长视频的序列平方注意主导计算时，桥的线性优势是否仍能保持严格精度；多说话人、强背景噪声与重度压缩下的误报率；不同编码器冻结策略对传输统计的影响。原文在 TVIL 上的分析也提示，当跨模态证据很弱时，预算放置主要提升召回与中段交并比，严格收紧更多依赖视觉专用解码，这意味着单侧极端情形下不应期待跨模态调度解决一切。此外，自动指标不能当作人工审核，阈值精度的提升不等于法律证据效力的提升，部署前仍需补延迟分布、阈值校准与人工复核流程的验证。

### 复现应先对齐什么，再调什么？

复现的第一步是重建数据与评测口径。按原文采用 LAV-DF、AV-Deepfake1M 与 TVIL 的官方时间定位协议，保留各自的交并比阈值与候选预算，不混用不同预算的召回数字。对齐特征条件：TVIL 用低分辨率与低音频嵌入率，另两个基准用高分辨率表述与高音频嵌入率；编码器初始化分别来自视频与语音自监督知识，仅重训嵌入与位置编码并插入帧级分组标记，其余冻结。若特征提取改变，粗候选分布会整体漂移，后续传输统计的阈值也需重调。

第二步是对齐预算与优化。固定粗步数为 2、见证 top-16、精炼总预算 12、可选步集合与步粒度，批量与学习率按原文设置，先复现 AP@0.95 附近的严格精度，再看召回是否同步。调试顺序建议为：先检查粗候选是否漏检，再看方向分数在 softmax 前是否坍缩为均分，最后才增大总预算。常见误解是把干净模态的配额直接置零，原文证据显示干净模态仍需非零配额以辅助对齐与抑制误报，均匀分配也未必最优。若要报告改进，必须保留原文实际可运行的基线与相同预算，不能用搜索最优或事后最优值代替可部署收益。

### 何时值得尝试这种先估计一致性再分配计算的思路？

当任务同时满足 3 个条件时值得尝试：输入为音视频双流且存在单侧或异步伪造，评价包含严格交并比精度而不仅是检出，以及计算预算有限但时间分辨率不能大幅降低。此时先用低成本粗候选暴露可疑段，再用与时间无关的传输统计决定哪里多算，比全程对称深融合更符合问题的非对称本质。反之，若伪造总是双侧同步且评价只看松散重叠，视觉专用解码或均匀精炼可能更简单有效。

收束全篇方法：粗桥负责低成本提议，见证桥负责以窄瓶颈筛选对方证据并切分步数与事件数，精炼桥负责按配额注入见证并打磨边界。证据链是 LAV-DF 与 AV-Deepfake1M 上的严格精度领先、TVIL 单侧设置下的保持领先、消融中去掉见证桥的大幅下降，以及计算扩展曲线的收益递减与方向分数的分布不对称。仍需补的验证是实例自适应总预算、长视频与噪声下的延迟与误报分布，以及跨编码器与跨压缩条件的稳定性。研究生若能沿单个样本复述输入到表示、到组件、到目标、到输出的完整路径，并用表格数字说明条件与代价，就算真正读懂了这篇论文。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 6，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 7，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 8，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-8.png)

区域 8 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 9，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-9.png)

区域 9 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 10，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-10.png)

区域 10 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 11，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-11.png)

区域 11 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 12，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-12.png)

区域 12 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 13，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-13.png)

区域 13 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 14，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-14.png)

区域 14 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 15，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-15.png)

区域 15 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 16，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-16.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-16.png)

区域 16 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 17，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-17.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-17.png)

区域 17 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 18，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-18.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-18.png)

区域 18 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 19，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-19.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c35081bc4f57/figure-19.png)

区域 19 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf#page=5)

另有 53 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
