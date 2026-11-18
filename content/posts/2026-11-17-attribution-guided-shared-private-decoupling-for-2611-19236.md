---
title: "Attribution-Guided Shared-Private Decoupling for Noise-Reduced Audio-Visual Representation Learning"
date: 2026-11-17
draft: false
tags: [音频检索, 音视频发声对象分割, 知识蒸馏, 对比学习]
categories: [论文速递]
description: "针对整图聚合把无关块也拉入跨模态对齐的问题，该文用最后一层梯度注意力为每个块打分并切出高低两组子视图，再以教师锚监督学生的共享与私有令牌，在检索、分类和声音引导分割上取得提升，代价是教师预训练与归因计算只发生在训练阶段。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.19236"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "用归因挑出共享子视图：降低音频视觉对齐中语义噪声的解耦学习"
paper_digest_original_title: "Attribution-Guided Shared-Private Decoupling for Noise-Reduced Audio-Visual Representation Learning"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.19236v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.19236v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.19236v1.pdf"
paper_digest_primary_task: "音频检索"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-retrieval","label":"音频检索"},{"facet":"task","id":"task.av-sounding-object-segmentation","label":"音视频发声对象分割"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"method","id":"method.contrastive","label":"对比学习"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对整图聚合把无关块也拉入跨模态对齐的问题，该文用最后一层梯度注意力为每个块打分并切出高低两组子视图，再以教师锚监督学生的共享与私有令牌，在检索、分类和声音引导分割上取得提升，代价是教师预训练与归因计算只发生在训练阶段。"
paper_digest_authors: [{"affiliations":["Foundation Model Research Center, Institute of AutomationChinese Academy of Sciences, Beijing, China","School of Artificial Intelligence, University of Chinese Academy of SciencesBeijing, China"],"name":"Linge Wang"},{"affiliations":["Foundation Model Research Center, Institute of AutomationChinese Academy of Sciences, Beijing, China","School of Artificial Intelligence, University of Chinese Academy of SciencesBeijing, China"],"name":"Yingying Chen"},{"affiliations":["Foundation Model Research Center, Institute of AutomationChinese Academy of Sciences, Beijing, China","School of Artificial Intelligence, University of Chinese Academy of SciencesBeijing, China"],"name":"Bingke Zhu"},{"affiliations":["Foundation Model Research Center, Institute of AutomationChinese Academy of Sciences, Beijing, China","School of Artificial Intelligence, University of Chinese Academy of SciencesBeijing, China"],"name":"Lu Zhou"},{"affiliations":["Foundation Model Research Center, Institute of AutomationChinese Academy of Sciences, Beijing, China","School of Artificial Intelligence, University of Chinese Academy of SciencesBeijing, China"],"name":"Haixin Wang"},{"affiliations":["Huawei Technologies Ltd., Beijing, China"],"name":"Zhipiao Liu"},{"affiliations":["Foundation Model Research Center, Institute of AutomationChinese Academy of Sciences, Beijing, China","School of Artificial Intelligence, University of Chinese Academy of SciencesBeijing, China","Objecteye Inc., Beijing, China"],"name":"Jinqiao Wang"}]
paper_digest_abstract_sha256: "95cadbdb34293a3cc95bcf1a87c1ed9f344f0f8b039d290660cf13976e833e26"
paper_digest_sidecars: {"citation.bib":{"sha256":"cac4bc421584b649bc4d25c8f25d4763209be876ea4b1f7982ba85ebbaf5aeaf","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-19236/citation.bib"},"citation.json":{"sha256":"c4b3985e63a4f71179e319793c32593c7a796b83efe49e794c440a03c2fb3f42","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-19236/citation.json"},"citation.ris":{"sha256":"a7bdcacf0d066d7f368a985d0da94ebd90bc0ec08a459c14d8ac8c269bd25773","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-19236/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"b658afca623ac2646a2dff38ba1bad8ef75940aa15572aea2a68a4dd62b38a6b","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-19236/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "a8da458e07026164b82974f122bcedd01ae6b674409bb20d4fdb7d17cd05c8e0"
paper_digest_api_reader_plan_sha256: "630fdcb812f843c804eac13f677ee3b1754dc4714a83d7309a5fb3d48643c12d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "eeb40b85fdc9bae8f099c969da9ed6b317f48fc4c83611b014d95c7327bbe589"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "e40f0a7b516a638a6c320d8fa5cb0ba6861aed15c228b020bdbd7073200723d1"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "d0d0e2326f4f8be11b2ebdddfc14aea3b2fdb1e04a4ec8a71295d20494dcc7df"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "c67316391038bd1e46266119c0f514c3651688bc1bad92e50c1366a48797d55e"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 用归因挑出共享子视图：降低音频视觉对齐中语义噪声的解耦学习

> 英文题目：*[Attribution-Guided Shared-Private Decoupling for Noise-Reduced Audio-Visual Representation Learning](https://arxiv.org/abs/2611.19236v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频检索](/audio-paper-digest-blog/papers/?concept=task.audio-retrieval)；[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding) → [音视频发声对象分割](/audio-paper-digest-blog/papers/?concept=task.av-sounding-object-segmentation)
- **研究方法**：[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)；[对比学习](/audio-paper-digest-blog/papers/?concept=method.contrastive)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Linge Wang：Foundation Model Research Center, Institute of AutomationChinese Academy of Sciences, Beijing, China；School of Artificial Intelligence, University of Chinese Academy of SciencesBeijing, China
- Yingying Chen：Foundation Model Research Center, Institute of AutomationChinese Academy of Sciences, Beijing, China；School of Artificial Intelligence, University of Chinese Academy of SciencesBeijing, China
- Bingke Zhu：Foundation Model Research Center, Institute of AutomationChinese Academy of Sciences, Beijing, China；School of Artificial Intelligence, University of Chinese Academy of SciencesBeijing, China
- Lu Zhou：Foundation Model Research Center, Institute of AutomationChinese Academy of Sciences, Beijing, China；School of Artificial Intelligence, University of Chinese Academy of SciencesBeijing, China
- Haixin Wang：Foundation Model Research Center, Institute of AutomationChinese Academy of Sciences, Beijing, China；School of Artificial Intelligence, University of Chinese Academy of SciencesBeijing, China
- Zhipiao Liu：Huawei Technologies Ltd., Beijing, China
- Jinqiao Wang：Foundation Model Research Center, Institute of AutomationChinese Academy of Sciences, Beijing, China；School of Artificial Intelligence, University of Chinese Academy of SciencesBeijing, China；Objecteye Inc., Beijing, China

## 📌 核心摘要

真实音视频对常把可靠的跨模态对应与单模态特有残留混在一起，整段聚合后再做样本级对齐会把无关块也拉入对齐，带来语义噪声。论文把每个模态看成块序列，目标是为音频和视觉各学两个表示，一个保留跨模态共有语义用于对齐，另一个吸收单模态残留。教师先估计每个块对跨模态匹配分数的贡献，只用最后一层注意力图的梯度与权重的乘积排序，取出高相关子视图和低相关互补。再由教师对两类子视图分别前向得到停止梯度目标并送入学生，学生用余弦损失让共享表示靠近高相关目标、私有表示靠近低相关目标，对比损失只加在共享表示上，并用不同掩码比下的一致性约束稳定表示。最后训练后学生直接输出解耦表示，推理不再需要归因和子视图构造。在冻结编码器并训练轻量注意力分类头的探测评测下，VGGSound上本文方法top-1 accuracy为54.4，高于基线TG-DP的52.7；AudioSet-20K上mAP为35.2，高于TG-DP的32.0，方向均为越高越好。私有表示仍保留部分共有信息，学生共享表示未完全达到教师高相关子视图水平，结论目前只在音视频评测中验证。相同88卡NVIDIA A100硬件条件下基线需19.0小时，本方法共需27.1小时，推理无额外开销。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音频视觉表示要解决什么输入输出问题

这篇论文处理的是无标注视频中的音频视觉表示学习。输入是一个配对样本，包含一段声音和一段画面，目标是学到可迁移的表示，能直接用于跨模态检索、音频视觉分类和声音引导的语义分割。检索时冻结编码器，用音频和视觉全局表示的余弦相似度互相查找；分类时冻结编码器再训练一个轻量注意力探测头；分割时用声音表示与视觉块表示的相似度热图定位发声区域。

真实视频的配对并不干净。论文把每侧输入都看成块序列，音频是滤波器组频谱切出的频谱块，视觉是图像帧切出的图像块。有些块记录了同一事件的两侧表现，例如正在说话的人嘴部、正在被拉动的琴弦、与撞击同步的手部动作；另一些块只与单侧有关，例如画外音、静默背景、与声音无关的场景装饰。如果把所有块平均成一个全局标记再做样本级对比学习，低相关块也会参与对齐，相当于把单侧噪声送进了跨模态目标。

已有代表性路线把掩码自编码与基于 InfoNCE 的对比对齐结合起来，例如 CAV-MAE、其同步变体以及本文继承的 TG-DP 双路设计。重建分支用高遮挡恢复被掩盖的块，对比分支用低遮挡得到全局表示。问题在于对比分支仍然只监督一个全局标记，无法说明哪些块真正携带跨模态对应，细粒度的共享与私有分工没有被显式建模。

### 已有路线在相同任务上做到哪一步

在相同输入与目标下比较才有意义。音频视觉表示一侧，早期统计建模与自监督对应学习验证了声音与画面可互相监督，后来掩码建模成为主流，代表方法用随机掩码重建音频与视觉块，或做跨模态预测。结合掩码自编码与对比对齐的方法在检索、事件识别和声源定位上得到较强迁移表示，但大多仍把异质块聚合成单个全局标记，块级解耦没有被直接处理。

Transformer 归因一侧，原始注意力权重已被指出不足以作为忠实解释，滚动与流动等传播方法试图整合多层注意力，随后结合注意力与梯度或相关性传播的方法得到面向类别或目标的解释。CheferCAM 把各层注意力图与其目标梯度相乘并取正部，再做全网络传播；后续工作改进了效率与传播的原则性。本文的方法只取最后一层的同类信号做排序，不做全网络传播，这与完整归因在运行阶段和计算量上都不同，不能把两者在相同成本下直接等同。

解耦或解缠表示一侧，已有工作多在模态级或表示级做分解，没有明确回答如何在细粒度块级别分离共享与私有。本文的区别在于先用归因得到块排序，再把排序结果变成教师锚去监督两个不同分工的令牌，而不是只在全局向量上加约束。

### 为什么整图聚合会引入语义噪声

论文用部分信息分解的视角把每侧信息抽象为共享因子与私有残留。音频来自共享因子与音频私有残留，视觉来自共享因子与视觉私有残留，下游任务变量可能同时依赖三者。理想的共享表示应当保留关于共享因子的信息，同时压缩关于本模态私有残留的信息。信息瓶颈风格的目标把这一要求写成保留与压缩的权衡，权重系数控制两者相对重要性。

**共享信息 × 特有残留信息：** 共享信息指音频和视觉都能观察到的同一事件因素，例如发声的人、被演奏的乐器、与声音同步的动作；特有残留信息指只在一侧出现的内容，例如画外音、无声背景、外观细节。两者在块级别纠缠在一起，前者是跨模态对齐真正需要的，后者混入全局表示就会形成语义噪声，所以需要先区分再分别处理。

该权衡的具体形式是最大化共享令牌与共享因子之间的互信息，同时减去它与私有残留之间互信息的加权项。

\[\max_{z_{s}^{m}}\;I(z_{s}^{m};S)-\beta I(z_{s}^{m};P_{m}),\]

直接优化这个目标很困难，因为共享与私有在块级别纠缠。论文转而在输入端构造子视图：按每个块对共享信息的贡献排序，只保留前一部分块。如果保留部分已经覆盖了绝大部分共享信息，而丢掉部分在给定保留部分后仍保留较多私有残留，那么用保留部分代替全量输入更符合上述最小充分准则。附录用互信息链式法则证明了这一点，丢掉部分的私有条件信息与共享条件信息之差决定了替换是否带来增益。

这个分析也指出了关键缺口：理论需要理想的共享相关性分数，但真实数据没有块级标注。原始注意力权重只反映前向聚合模式，不一定忠实于跨模态匹配目标；块级相似度容易偏向外观层面的宽泛相关。因此需要一种以匹配目标为条件的、轻量的块排序信号，这就是后文层截断归因要承担的角色。

### 整体流程如何把一个样本变成两个分工的表示

沿一个音频视觉对走一遍流程最清楚。原始音频与视觉分别切块并送入各自模态编码器，再经过统一块得到可用于匹配的 CLS 表示。教师先计算每个块对跨模态匹配分数的贡献，按分数把每侧块分成高相关子视图与低相关互补。冻结教师分别处理这两个子视图，得到两个停止梯度锚。学生与教师主干相同，但把原来单个全局标记换成两个可学习标记：共享令牌对齐高相关锚，私有令牌对齐低相关锚，对比损失只加在共享令牌上。推理时不再需要教师、梯度与子视图构造，学生直接输出已内化解耦行为的表示。

要理解这张总览图，先看左右两路的输入如何分叉，再看中间 3 条监督分别约束哪 1 对表示，最后看右侧归因如何只用最后一层得到排序。图中为清晰省略了继承自基线的掩码自编码分支，实际训练仍包含重建损失。

> **看图路径：** 1. 先沿左侧训练管线的箭头看音频与视觉两路如何分别分出高低子视图；2. 再看教师锚与学生共享私有令牌之间三条红色损失分别连接哪两端；3. 最后看右侧归因面板中注意力与梯度如何汇合成视觉与音频相关性分数

[![原论文 Figure 1：Overall pipeline of our proposed framework.](https://arxiv.org/html/2611.19236v1/figures_pipeline.png)](https://arxiv.org/html/2611.19236v1/figures_pipeline.png)

*论文图 1。原论文 Figure 1:：“Overall pipeline of our proposed framework.”。*

总览图左侧训练管线显示音频与视觉各有随机掩码的学生分支和高低分叉的教师分支，教师分支都标有停止梯度，底部 3 条红色损失分别对应音频锚损失、对比损失和视觉锚损失；右侧归因面板显示视觉与音频编码器共用统一块权重，CLS 表示汇合计算匹配分数后，再结合最后一层 CLS 注意力与其梯度得到两路相关性分数。这种画法把排序、锚生成与令牌分工放在同一张图里，推理阶段只保留学生编码器与两个令牌。

子视图的切分方式可以形式化为排序后取前 K 个块，剩余块作为互补。保留比例是超参数，默认取 0.50。

\[A_{\mathcal{T}}=\{A_{\pi_{i}}\}_{i=1}^{K},\qquad A_{\mathcal{R}}=A\setminus A_{\mathcal{T}},\]

其中排序依据是理想共享相关性分数的估计，实际用后文的层截断归因代替。互补不是无信息，而是共享线索较弱但可能保留单侧残留，这正好对应私有令牌需要吸收的内容。

**共享覆盖子视图 × 残留互补子视图：** 共享覆盖子视图是按跨模态相关性排序后保留的前一部分块，目标是保住大部分共享信息而丢掉低相关块；残留互补子视图是剩下的低分块，共享线索较弱但仍可能保留单侧特有内容。两者互补地划分了原始输入，前者用来教共享表示，后者用来吸收私有残留，避免用全量块直接做对齐。

### 层截断归因如何只用最后一层给块排序

排序需要回答每个块在多大程度上推动了当前这对音频视觉的匹配分数。论文从 CheferCAM 的梯度注意力思想出发，写出每层的注意力图与其目标梯度逐元相乘、取正部再按头平均的形式，并加上单位阵。完整归因通常要把这种相关性逐层传播到输入，而本文认为子视图构造只需要相对排序，因此截断到最后一个 Transformer 块，只用 CLS 直接聚合块的那组注意力。

具体到实现，跨模态匹配分数是音频 CLS 与视觉 CLS 的内积。对每个模态，取最后一层每个头上 CLS 到第 i 个块的注意力权重，乘以匹配分数对该权重的梯度，取正部后再对头平均，就得到该块的相关性分数。分数高意味着稍微改变这条 CLS 到块的聚合权重就会明显影响匹配分数，因而该块更可能携带跨模态对应。

\[r_{i}^{m}=\mathbb{E}_{h}\left[\left(\frac{\partial s_{av}}{\partial A^{m,L}_{h,\mathrm{cls},i}}A^{m,L}_{h,\mathrm{cls},i}\right)^{+}\right],\]

公式中下标表示模态、层与头，期望是对注意力头平均，正部只保留正向贡献。这种做法保留了目标条件性，又避免了全网络传播的开销。论文报告完整打分过程相比一次教师前向只增加少量计算，逐对成本需要结合下表理解，表中相对量是相对一次教师前向的增量，不是总预训练时间的增量。

**层截断归因 × 跨模态匹配分数：** 跨模态匹配分数是音频 CLS 与视觉 CLS 表示的内积，用来衡量一对音频视觉是否对应；层截断归因只在最后一个 Transformer 块计算该分数对 CLS 到各块注意力权重的梯度与权重的乘积，再按注意力头平均并取正部。分数给出优化目标，归因把目标反向定位到具体块，两者组合就得到无需额外标注的块排序信号。

下表比较的是去掉数据加载与音视频预处理后，每对音频视觉的模型计算量。表头给出计算量与显存指标，数据行对比仅教师前向与加入归因后的完整打分，相对量以教师前向为基准。该对照的公平条件是同一对输入、同一硬件计量口径，指标方向是增量越小说明归因越轻。

| Component | GFLOPs | Memory (MB) | Relative FLOPs |
| --- | --- | --- | --- |
| Teacher forward | 71.78 | 746.83 | 1.00× |
| Teacher forward + LTA | 76.47 | 779.10 | 1.07× |
| LTA overhead | +4.69 | +32.27 | +6.54% |

该成本表支撑的判断是最后一层归因在训练阶段可用，增量只占教师前向的一小部分，但它没有说明推理延迟，因为推理根本不运行归因。把它与后文总时长表对照才能看到主要额外开销其实来自提前训练一个教师，而不是每次打分的浮点运算。单看相对增量会低估总训练代价，单看总时长又会掩盖归因本身很轻的事实。

### 共享与私有令牌分别被什么信号监督

学生每个模态有两个输出表示。共享令牌要靠近教师在高相关子视图上的响应，私有令牌要靠近教师在低相关互补上的响应，两组都用余弦相似度的余弦距离作为锚损失。教师响应都经过停止梯度，梯度只更新学生一侧。这种设计把块级排序蒸馏成令牌分工，而不是在推理时重新排序。

对比学习只发生在共享令牌之间，音频到视觉与视觉到音频 2 个方向平均，温度系数与基线保持一致。掩码自编码分支仍然重建被掩盖的块，与对比分支共用模态编码器与统一块，但使用不同的掩码视图。重建分支掩码率为 0.75，对比分支掩码率为 0.50，这种双路分离继承自 TG-DP。

为稳定不同可见比例下的对比表示，论文增加了一致性正则。对比分支在 0.50 掩码率下得到标准表示并做停止梯度作为目标，复用掩码自编码分支的中间特征得到 0.75 掩码率下的对应表示，两者用均方误差拉近。这样不用增加一次完整前向，就让全局表示对遮挡比例更鲁棒。最终学生目标是基线损失加上锚损失与一致性损失的加权和，锚权重与一致性权重默认都取 0.50。

**共享令牌 × 私有令牌：** 共享令牌是每个模态新增的可学习全局标记中负责跨模态对应的那一个，只用它做对比学习；私有令牌是同模态另一个可学习标记，负责吸收低相关子视图中的单侧残留。两者结构相同但监督来源不同，分工后检索用共享令牌，分类把两者平均后使用，从而在保留识别所需单侧线索的同时不污染对齐。

下游使用方式体现了分工。检索主要评估跨模态共享对应，因此只用共享令牌作为全局表示；分类需要互补的单侧线索，因此把共享与私有令牌平均成单模态标记，再按时间拼接训练注意力探测头；分割用声音表示与视觉块的相似度生成热图。平均操作保证了与基线相同的下游计算量，避免用更多参数换取提升。

### 教师如何提前停止以及学生如何被训练

教师从零开始按基线方式预训练，只用原始随机掩码，不做归因选块与令牌解耦。完整基线计划是 35 轮，教师在第 18 轮停止。选择 18 轮的依据是教师侧子视图检索诊断：冻结不同检查点的教师，用保留比例 0.50 构造子视图再做零样本检索，平均 R@1 从第 3 轮的 20.0 上升到第 18 轮的 42.0，平均 R@5 从 42.6 上升到 67.2，之后基本饱和在 42 至 43 与 67 至 68 附近波动。早停既保留了可靠的排序能力，又省去后半程教师训练。

要读懂教师动态曲线，先注意横轴是轮数而纵轴是百分比检索指标，再看 18 轮前两条曲线快速爬升而之后趋平，最后确认虚线右侧的波动确实很小，从而理解早停不是随意截断。

> **看图路径：** 1. 先看横轴训练轮数与纵轴检索百分比的范围；2. 再比较蓝色平均 R@1 与橙色平均 R@5 在 18 轮前后的斜率变化；3. 最后看 18 轮虚线之后两条曲线的波动幅度是否确实趋于饱和

[![原论文 Figure 2：Dynamics of teacher-induced subview quality during teacher pretraining.](https://arxiv.org/html/2611.19236v1/figures_teacher_subview_dynamic.png)](https://arxiv.org/html/2611.19236v1/figures_teacher_subview_dynamic.png)

*论文图 2。原论文 Figure 2:：“Dynamics of teacher-induced subview quality during teacher pretraining.”。*

曲线显示橙色平均 R@5 从早期的 42.6 经 56.3、62.8、64.9、66.2 爬到 18 轮的 67.2，之后在 68.0、67.7、67.3、67.5、68.0 附近徘徊；蓝色平均 R@1 从 20.0 经 30.0、35.5、38.8、40.2 爬到 42.0，之后在 41.7 至 43.1 之间波动。这种先快后平的形态支持用中期教师提供监督，但它只说明子视图检索质量饱和，没有直接证明排序本身完全稳定。

**教师锚 × 一致性正则：** 教师锚是冻结教师分别处理高相关子视图和低相关互补得到的停止梯度表示，用来直接拉住学生的共享和私有令牌；一致性正则要求对比分支在遮挡率 0.50 与 0.75 下的表示保持接近，复用掩码自编码分支的中间特征而不增加完整前向。锚提供细粒度方向，正则稳定不同可见比例下的全局表示，两者共同约束学生训练。

教师停止轮数的敏感性需要单独验证。下表比较用第 15、18、21 轮教师训练出的最终学生，表中默认停止轮加阴影，平均 R@1 是对两个检索方向平均，定位指标在 AVSBench 上报告。该对照的公平条件是学生配方与保留比例不变，只换教师检查点。

| Teacher stop | Retrieval | Retrieval | Retrieval | Localization | Localization |
| --- | --- | --- | --- | --- | --- |
| epoch | V→A R@1 | A→V R@1 | Avg. R@1 | mIoU | mAP |
| 15 | 35.38 | 33.62 | 34.50 | 29.6 | 37.1 |
| 18 | 35.44 | 34.27 | 34.86 | 30.6 | 38.2 |
| 21 | 35.19 | 33.81 | 34.50 | 29.5 | 36.5 |

该表支撑的判断限于饱和区附近的稳定性，最终学生平均 R@1 保持在 34.50 至 34.86 之间，任一方向波动至多 0.65，定位指标随教师轮数小幅起伏，不能推广到任意轮数都能提供同等监督。结合上一张动态曲线看，早期检查点的子视图质量明显更低，不应视为可用教师。读者复现时应先重复子视图检索诊断，再决定自己的停止点，而不是直接照抄 18 这个数字。

学生从零训练 25 轮，优化器、学习率、批量与数据增强沿用基线。预处理按 CAV-MAE Sync 流程：每视频均匀采样 16 帧，每帧缩放到 224 × 224 并切成 16 × 16 块得到 196 个视觉块；音频转成 128 维对数梅尔频谱，按帧对齐截取 128 × 416 片段并切成 16 × 16 块得到 208 个音频块；频谱标准化均值取 -5.081，标准差取 4.485。预训练每次随机取 1 帧及其对齐频谱，分类探测时用 16 步序列。

总时长需要分阶段理解。下表在相同硬件下给出基线、教师阶段与学生各组成部分的耗时，合计值在正文四舍五入引用。原文正文写 88 张 NVIDIA A100，而该时长表注写 8 张，两处 GPU 数量表述存在冲突，此处保留两种原始写法而不做统一解释。

| Training component | Time (hours) |
| --- | --- |
| TG-DP baseline (35 epochs) | 19.00 |
| Teacher pretraining (18 epochs) | 9.77 |
| Student base computation (25 epochs) | 13.57 |
| Additional consistency regularization | 2.40 |
| Teacher-anchor construction and LTA scoring | 1.39 |
| Our total pretraining time | 27.13 |

时长表说明主要额外代价来自一次性教师预训练，而不是归因本身。归因增量只占教师前向的一小部分，但教师阶段耗时无法省去。推理阶段没有额外计算，训练与推理开销需要分开讨论，不能把总时长增加理解为模型变慢。

### 数据、划分与指标在什么条件下比较

预训练用 AudioSet-2M，原始约 2,000,000 条 10 秒视频，覆盖 527 类音频事件。由于托管在视频网站，部分因下架、隐私或区域限制无法下载，约 350,000 条缺失，再去掉缺失音轨、损坏帧或解码失败后，实际得到 1,390,395 个有效音频视觉对。论文明确指出该数据集并非为对应学习设计，存在画外音、无声视觉区域或背景音等弱相关配对，这正是需要降低语义噪声的现实条件。

评测覆盖 3 类任务。检索在 AudioSet-20K 与 VGGSound 的评测子集上做零样本双向检索，冻结表示后算余弦相似度，报告 R@1、R@5、R@10，数值越大越好。分类用注意力探测，冻结编码器，在 AudioSet-20K 报告 mAP，在 VGGSound 报告 top-1 准确率，学生把共享与私有令牌平均后使用以对齐计算量。分割用声音引导的语义分割，在 AVSBench 与 ADE20K-Sound 上报告 mIoU 与 mAP，均以百分比计，数值越大定位越准。VGGSound 相对干净，每段都期望有可见发声对象；ADE20K-Sound 由 106 张图与 20 类对应声音构成，AVSBench 则提供视频级像素标注，含单源与多源两种设置。

重复运行方面，VGGSound 检索与 AVSBench 定位用 5 个不同随机种子的独立预训练，AS20K 分类用同一检查点重复 5 次探测。检索 R@1 标准差为 0.35 与 0.70，定位 mIoU 与 mAP 标准差为 0.44 与 0.57，分类 mAP 标准差为 0.13，说明在测试的训练与评测设置下波动较小。表格均值保留 1 位小数，重复实验的完整均值加减标准差形式只在附录出现。

### 主结果在哪些数据与指标上成立

检索主结果是在冻结表示与相同评测划分下与基线比较。相对采用的 TG-DP 基线，本文方法在 AudioSet-20K 上视觉到音频与音频到视觉 R@1 分别提升 3.8 与 4.0，在 VGGSound 上 2 个方向分别提升 4.0 与 3.7。绝对值上 ours 在 AudioSet 达到 41.2 与 41.1，在 VGGSound 达到 35.3 与 34.0，而基线对应为 37.4、37.1、31.3、30.3。结论依赖零样本余弦检索与共享令牌作为全局表示，如果换成私有令牌或微调编码器，数字会不同。

分类主结果是在注意力探测且编码器冻结的条件下比较。AS20K mAP 从 32.0% 提升到 35.2%，VGGSound 准确率从 52.7% 提升到 54.4%。这里学生把共享与私有平均后使用，计算量与基线一致。提升说明解耦不仅帮助对齐，也保留了识别需要的互补线索，但它不等于线性探测或全量微调下也有相同幅度，协议改变后需要重新验证。

分割主结果用声音与视觉块的相似度热图直接评价。AVSBench 上 mIoU 从 21.8 提升到 29.9，mAP 从 24.3 提升到 37.3；ADE20K-Sound 上 mIoU 从 21.5 提升到 26.1，mAP 从 22.3 提升到 24.0。前者提升幅度大，说明细粒度对应改善明显；后者数据量小且只有百余张图，结论的统计稳定性不如大库检索。

归因本身的可靠性有两组直接诊断。固定保留比例 0.50 并把子视图送回冻结教师，LTA 子视图把 VGGSound R@1 从全视图的 31.7 提升到 44.1（视觉到音频）以及从 30.5 提升到 41.2（音频到视觉），而相似度与原始注意力子视图反而低于全视图；完整 CheferCAM 虽然也优于全视图，但明显低于 LTA。这说明全量传播不一定更适合选块，最后一层排序已足够。只用低相关残留块时 R@1 跌到 8.9 与 8.4，与高相关子视图形成对照，说明检索线索确实被集中到了所选子视图。

另一组是错配诊断。把视觉输入保留而替换为不匹配音频，再用原声源标注评价定位，LTA 的 mIoU 从 44.2 降到 34.7，mAP 从 60.1 降到 45.7，而相似度与原始注意力变化至多 0.4。这支持 LTA 对音频视频是否对应敏感，而不是只反映视觉显著性。但它只在 AVSBench 上验证，且错配音频的采样方式会影响下降幅度，不能直接当成通用对应检测器。

共享与私有令牌的功能分离用检索衡量。共享令牌在 VGGSound 达到 35.4 与 34.3 R@1，私有令牌为 29.5 与 28.2，前者更高，符合解耦设计。但私有令牌仍有非平凡检索能力，说明两者没有完全分离，这与残留互补按相对低分而非无共享来划分是一致的。学生共享令牌也没有完全达到教师子视图的水平，说明蒸馏只是部分迁移。

要理解热图差异，先按行找到发声对象，再横向比较不同打分的高亮集中程度，最后注意发散热图往往对应非目标条件的聚合。

> **看图路径：** 1. 先按行看输入图像中的发声对象位置；2. 再横向比较层截断归因与完整归因的高亮区域是否集中在同一对象上；3. 最后看原始注意力与相似度热图是否更发散或偏向大面积外观相关区域

[![原论文 Figure 3：Visualization of different score type.](https://arxiv.org/html/2611.19236v1/figures_visualization.png)](https://arxiv.org/html/2611.19236v1/figures_visualization.png)

*论文图 3。原论文 Figure 3:：“Visualization of different score type.”。*

可视图中第一行为拉弦乐器的人，第二行为远景中的车辆与烟尘，第三行为弹吉他的人，第四行为哭泣婴儿。层截断归因与完整归因都把高亮集中在乐器接触处、冒烟车辆区域、吉他琴体与婴儿口部附近，而原始注意力常铺展到人脸等视觉显著但与声音关系较弱的区域，相似度热图则更发散。这种定性一致支持了定量分割中归因热图大幅优于原始相似度热图的结论，但可视化只选了 4 例，不能代表所有类别与遮挡情况。

### 哪些组件与保留比例真正带来变化

增量消融从基线逐步加入归因锚监督、一致性正则与共享私有令牌解耦，统一在 VGGSound 平均 R@1、AS20K mAP 与 AVSBench 分割 mAP 上比较。该对照的公平条件是同一预训练数据与同一评测协议，指标方向都是越高越好，平均 R@1 是对两个检索方向平均。

| Setting | Anchor | Cons. | Dec. | Avg. R@1 | AS20K mAP | Seg. mAP |
| --- | --- | --- | --- | --- | --- | --- |
| Backbone |  |  |  | 30.8 | 32.0 | 24.3 |
| + Anchor | ✓ |  |  | 33.0 | 32.2 | 28.3 |
| + Consistency | ✓ | ✓ |  | 34.3 | 32.0 | 26.3 |
| + Decoupled tokens | ✓ | ✓ | ✓ | 34.9 | 35.1 | 38.2 |

这组增量结果支撑的判断是三部分叠加后整体最优，基线平均 R@1 为 30.8，加入锚监督后变为 33.0，说明子视图锚对对齐与定位有直接帮助。进一步加入一致性后检索继续改善，但分类与定位的变化不是单调的，说明正则主要稳定全局表示。最后加入解耦令牌后达到 34.9、35.1、38.2，分类与定位跃升最大，表明把监督落到两个分工令牌上才能同时转化细粒度对应并保留私有线索。但它没有给出去掉其中某一部分后必然下降多少的独立反事实，因为每次都是在前一步基础上累加。

把它与保留比例表对照可以发现检索对子视图大小敏感而分类相对稳定，因此解耦带来的分类增益更可能来自私有信息的保留，而不是单纯检索变好。

保留比例控制每侧保留多少高分块。下表在 4 个离散比例下比较同一组检索、分类与定位指标，教师停止轮数固定，学生其他设置不变。该对照回答的是子视图过大或过小会发生什么，指标方向同样是越高越好。

| Retention | Avg. R@1 | AS20K mAP | Seg. mAP |
| --- | --- | --- | --- |
| 0.25 | 32.6 | 35.3 | 38.3 |
| 0.35 | 33.9 | 35.2 | 37.3 |
| 0.50 | 34.9 | 35.1 | 38.2 |
| 0.75 | 34.8 | 35.5 | 31.5 |

保留比例表的限制在于只在 0.25 至 0.75 4 个离散点上测试，且教师成熟度固定。比例从 0.25 升到 0.50 时平均 R@1 从 32.6 经 33.9 升到 34.9，说明过小的子视图会丢掉有用共享信息；升到 0.75 时检索基本持平，但分割 mAP 从 38.2 跌到 31.5，说明过多保留会重新引入弱相关或私有区域，尤其伤害定位。分类在 4 个比例下相对稳定，说明全局识别对该超参数不敏感。默认取 0.50 是在检索最优与定位保持高位之间折中，并考虑教师侧计算量。如果更换教师成熟度或数据集噪声水平，最优比例可能移动，读者应把该表当作起点而非定值。

### 结论在什么边界之外不再成立

第一个边界是模态范围。动机上共享私有解耦适用于一般多模态，但实验只在音频视觉上验证，受大规模预训练成本限制，没有在图像文本或音频语言等其他模态对上测试。把层截断归因直接搬到图文时，匹配分数的形式、CLS 聚合的位置与块划分都可能不同，需要重新设计，不能默认同样有效。

第二个边界是解耦程度。学生内化的解耦仍然有限，私有令牌保留了不可忽略的共享信息，共享与私有没有完全分离；学生共享令牌的检索也没有达到教师子视图的水平，说明蒸馏只部分迁移了归因行为。更有效的蒸馏目标或结构可能进一步拉开两者，但本文没有验证，现有数字不支持宣称已实现完全解耦。

第三个边界是理论保证。层截断归因是对理想共享相关性分数的启发式近似，理论假设排序反映每个块对共享因子的贡献，而实际用的是最后一层匹配目标的梯度注意力信号。实证显示该信号是有效的排序依据，但没有严格保证能恢复理论理想分数。开发更原则、更有理论根基的块级相关性估计仍是未来方向。

此外，缺失证据不等于技术缺陷。例如未测量误判率、延迟或逐类表现，就不能承诺这些方面也会改善；训练总时长增加也不能推导出推理变慢，因为推理不运行教师与归因。相关性提升也不等于因果证明，仍需对照实验排除数据划分与随机性的影响。

### 复现第一步需要准备什么

复现应从数据与基线开始。按 CAV-MAE Sync 预处理流程准备 AudioSet-2M，注意部分因原始托管失效无法下载，再过滤无音轨与坏帧后剩一百余 10000 对有效数据；VGGSound 用于分类训练与检索评测，AVSBench 与 ADE20K-Sound 用于分割评测。先跑通 TG-DP 双路基线，确认重建分支掩码率 0.75、对比分支掩码率 0.50、重建权重 1.0、对比权重 0.1、温度 0.05、批量与优化器设置与附录一致，再引入归因与解耦。

教师先按基线随机掩码训练并在中期早停，学生从零训练 25 轮，保留比例默认 0.50，锚权重与一致性权重默认 0.50。评测时严格区分 3 种用法：检索只用共享令牌，分类平均共享与私有令牌，分割用声音与视觉块相似度。重复运行时检索与定位需独立预训练取均值加减标准差，分类可在同一检查点重复探测。

来源方面，论文正文给出代码链接，但本次可验证的来源清单中没有发现归属明确且通过 HTTPS 状态验证的作者资源，因此不得声称代码、模型或数据已公开或可下载。第三方链接只证明论文提到该地址，不证明已开源；不可用只说明链接当前不可用。需要补做的验证包括在自己数据上重做教师轮数诊断、保留比例扫描与私有令牌信息量的直接度量，再报告完整均值与波动。

### 什么时候值得尝试以及还缺什么验证

当配对数据中存在明显异质块，且整图聚合可能把画外音、无声背景或装饰外观拉入对齐时，这种先排序再解耦的思路值得尝试。它的行动顺序是先验证块异质性是否存在，再用最后一层归因做子视图检索诊断，确认高分块确实集中检索线索后，再引入双令牌与锚监督，最后检查检索、分类与定位是否同时改善。如果子视图诊断没有提升，就不应继续增加解耦复杂度。

关键超参数与信息条件要保留：对比分支掩码率、重建分支掩码率、保留比例、教师早停轮数、学生训练轮数，以及音频片段与视觉输入的块划分。改变任一条件都可能移动最优保留比例与早停点，复现时应先对齐预处理与双路权重，再调归因相关超参数。

常见的误解需要澄清。最后一层归因效果好不代表全网络传播无用，它只说明对选块这个特定用途，最后一层已保留大部分定位能力；私有令牌仍有检索能力不代表解耦失败，它与按相对低分划分互补的设计是一致的；总训练时间增加不代表推理更慢，因为额外部分只在训练阶段出现。

还缺的验证包括其他模态对上的有效性、更彻底的分离度量、以及在不同噪声水平与保留比例下的系统扫描。只有补上这些，才能判断该方法在更广的多模态学习中是否同样成立。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.19236v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-17 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-17/)
