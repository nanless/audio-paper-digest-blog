---
title: "OmniFocus: Query-Guided Modality-Balanced Token Compression for Omni-Modal Large Language Models"
date: 2026-07-07
draft: false
tags: [多模态模型, 模型压缩, 音视频问答]
categories: [论文速递]
description: "音视频问答 | 5.9/10"
hiddenInHomeList: true
---

# 📄 OmniFocus: Query-Guided Modality-Balanced Token Compression for Omni-Modal Large Language Models

#多模态模型 #模型压缩 #音视频问答

**5.9/10** | 创新 1/2 | 严谨 0.9/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 0.6/1.5 | 开源 0.5/1.5 | 复现 0.3/0.5 | 工程 0.8/1.5

📝 **5.9/10** | 前50% | #音视频问答 | #模型压缩 | #多模态模型 | [arxiv](https://arxiv.org/abs/2607.03050)


### 👥 作者与机构

- 第一作者：Shijie Cao（School of Advanced Interdisciplinary Sciences, University of Chinese Academy of Sciences; Chinese Information Processing Laboratory, Institute of Software, Chinese Academy of Sciences）
- 通讯作者：论文中未明确标注通讯作者，但根据邮箱模式与作者排序推断，Yaojie Lu 为 senior 作者，通常担任通讯作者。
- 作者列表：Shijie Cao（University of Chinese Academy of Sciences; Institute of Software, Chinese Academy of Sciences）、Qingyu Zhang（Institute of Software, Chinese Academy of Sciences）、Boxi Yu（University of Limerick）、Yuzhong Zhang（CUHK, Shenzhen）、Boxi Cao（Institute of Software, Chinese Academy of Sciences）、Yaojie Lu（Institute of Software, Chinese Academy of Sciences）、Hongyu Lin（Institute of Software, Chinese Academy of Sciences）、Xianpei Han（Institute of Software, Chinese Academy of Sciences）、Le Sun（Institute of Software, Chinese Academy of Sciences）

### 💡 毒舌点评

本文提出了一个思路清晰但技术深度一般的训练无关 token 压缩策略。亮点在于正确识别了单模态（音频）引导压缩会系统性地损害视觉模态性能的问题，并给出了直觉上合理的对称解决方案。然而，方法本质上是基于余弦相似度的启发式采样，缺乏理论创新，且在“前沿模型全量微调”和“关键任务精度”这两端都不讨好，其性能优势在多数 benchmark 上仅 1-2 个百分点，属于典型的边缘提升，难以在顶级会议中产生显著吸引力。提交时未提供可用的代码或复现材料，进一步削弱了其可信度。

### 📌 核心摘要

1. 要解决的问题：全模态大模型（OmniLLMs）处理长时音视频输入时会产生大量 token，导致推理成本高昂。现有单模态（如仅用音频）引导的压缩方法会引入模态偏差，损害视觉理解能力。

![Figure 1: Illustration of the limitation of unimodal-guided audio-visual token compression. Audio-guided compression preserves audio-centric performance relatively well, but degrades more noticeably on visual and joint audio-visual understanding tasks, motivating a query-guided and modality-balanced compression strategy. The modality-type labeling protocol is described in Appendix B.](https://arxiv.org/html/2607.03050v1/x1.png)

如图1所示，该图直观展示了问题：仅使用音频引导的压缩（Audio-guided）虽然能保持音频相关任务性能，但在视觉任务（Visual）和音视频联合任务（A-V）上的性能下降比视频引导（Video-guided）和联合引导（A-V guided）更明显，从而引出了对“查询引导、模态平衡”压缩策略的需求。图中还明确了模态类型的分类（见附录B）。

2. 方法核心：OmniFocus 是一种训练无关（training-free）的查询引导 token 压缩方法。它对视频和音频独立进行查询相关的重要性估计，分配内容自适应的 token 预算，并通过“跨模态关联”和“模态内峰值”双重得分来选择保留 token。

![Figure 2: Overview of OmniFocus. Given a textual query and temporally aligned audio-video chunks, OmniFocus estimates modality-specific query relevance, allocates chunk-wise local drop ratios under calibrated global modality budgets, and selects retained tokens using inter-modal association and intra-modal peak scores before feeding the compressed sequence into the LLM backbone.](https://arxiv.org/html/2607.03050v1/x2.png)

图2提供了 OmniFocus 方法的完整流程概览。它清晰展示了三个关键步骤：1）给定文本查询和对齐的音视频块，估计各模态特定的查询相关性（模态特定查询相关性评分）；2）在校准的全局模态预算下，分配块级的本地丢弃率（块级丢弃率分配）；3）使用跨模态关联得分（Inter-modal Association Score）和模态内峰值得分（Intra-modal Peak Score）选择要保留的 token，最终输入 LLM 骨干网络。

3. 与已有方法的新对比：区别于 OmniZip 等仅用音频注意力来引导音视频压缩的方法，OmniFocus 实现了“模态对称”压缩，独立评估视觉和音频的重要性，并提出双得分选择机制来平衡跨模态对齐和模态特定显著性。
4. 主要实验结果：在 Qwen2.5-Omni 模型上的四个 benchmark 进行了评估。在 25% 的 token 保留率下，OmniFocus 在 DailyOmni 的 7B 模型上达到 59.40% 准确率，比 OmniZip 高 1.67%，并实现 1.38 倍预填充加速。大部分 benchmark 上对基线有小幅但稳定的提升。

| Method | Retained Ratio (%) | DailyOmni Avg (7B) | DailyOmni Avg (3B) | WorldSense (7B) | VideoMME Avg (7B) | OmniVideoBench (7B) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Full Tokens | 100 | 61.90 | 60.15 | 45.81 | 69.74 | 35.31 |
| OmniZip | 35 | 59.23 | 55.85 | 44.55 | 68.00 | 31.49 |
| OmniFocus | 35 | 60.32 | 57.23 | 44.77 | 69.41 | 34.10 |
| OmniZip | 25 | 57.73 | 55.52 | 43.69 | 67.96 | 32.30 |
| OmniFocus | 25 | 59.40 | 56.14 | 44.23 | 68.22 | 32.70 |

5. 实际意义：为降低全模态大模型的落地成本提供了一种即插即用、无需训练的轻量级加速手段，尤其适用于对效率敏感的长视频问答场景。
6. 主要局限性：性能提升相对微弱，高度依赖冻结的输入嵌入空间进行相似度匹配，可能无法捕捉复杂的语义关联，且只在 Qwen2.5-Omni 单个模型系列上验证了有效性，泛化性存疑。此外，方法使用 benchmark 级别的全局 budget 校准，无法针对单个样本进行动态自适应调整。

### 🔗 开源详情

- 代码：https://github.com/icip-cas/OmniFocus（论文中提供，但提交时未包含可用代码）
- 模型权重：未提及
- 数据集：未提及
- Demo：未提及
- 复现材料：未提及
- 论文中引用的开源项目：论文中使用了 Qwen2.5-Omni、OmniZip、DyCoke 等开源或现有项目，但未在文中给出这些项目的具体 URL 链接。

### 🏗️ 方法概述和架构

OmniFocus 是一个训练无关的 token 压缩 pipeline，旨在插入到 OmniLLM 的 token 化器和骨干网络之间。其核心流程分为三个阶段：

1. 查询感知的模态重要性评分：给定文本查询和按时间窗交错的音视频 token 序列，该方法首先将文本查询的 token 嵌入进行平均池化和 L2 归一化，得到一个统一的查询向量 \(\bar{q}\)。对每个时间窗内的视频和音频 token，分别计算它们与查询向量的最大余弦相似度作为该块（chunk）在该模态下的重要性得分 \(s_v^i = \max_j \hat{x}_{v_i}^j \cdot \bar{q}\) 和 \(s_a^i = \max_j \hat{x}_{a_i}^j \cdot \bar{q}\)。采用最大相似度而非平均相似度的设计动机在于：查询相关的证据在时间块内可能是稀疏的，最大值运算能更有效地捕捉到那些与查询高度相关的个别关键 token。随后通过 Softmax 将重要性得分转换为压缩得分 \(c_v^i = 1 - \text{Softmax}(\mathbf{s}_v)_i\)（高重要性对应低压缩得分）。

2. 块级丢弃率分配：将每个模态的压缩得分通过线性映射转换到预设的局部丢弃率范围 \([r_{\min}=0.35, r_{\max}=0.75]\) 内：\(r_{\min} + \frac{c_m^i - \min_j c_m^j}{\max_j c_m^j - \min_j c_m^j} \cdot (r_{\max} - r_{\min})\)。在全局模态 budget 约束下，通过二分搜索引入一个校准偏移量 \(\delta\)，使得 \(\sum_i r_m^i \cdot n_m^i = r_{\text{global}}^m \cdot N_m\)，最终通过 clamp 操作确定每个时间块、每个模态的具体 token 丢弃比例 \(r_m^i\)。此步骤实现了内容自适应压缩：查询相关性高的块保留更多 token，相关性低的块丢弃更多。全局模态 budget 是 benchmark 级别的手动校准超参数，参照了 OmniZip 的协议确定。

3. 双重得分 token 选择：在确定了每个块要保留的 token 数量后，OmniFocus 使用两种互补的得分来选择具体保留哪些 token。跨模态关联得分衡量一个模态的 token 与另一模态在相同时间块内的平均 token 表示（\(\bar{x}_{a_i}\) 或 \(\bar{x}_{v_i}\)）的余弦相似度，以保留音视频对齐的信息。模态内峰值得分衡量一个 token 与其所在模态的平均 token 表示的差异性（\(1 - \hat{x} \cdot \bar{x}\)），以保留模态内独特的显著信息。最终，保留的 token 中约一半（\(\lfloor k_m^i/2 \rfloor\)）来自最高关联得分，约一半（\(\lceil k_m^i/2 \rceil\)）来自最高峰值得分，以此平衡跨模态一致性和模态内显著性。该 1:1 的分配策略是一个简单且无需额外参数的默认选择。压缩后的序列被送入 LLM 骨干网络进行推理。

### 💡 核心创新点

1. 识别并验证了单模态引导压缩的模态偏差问题：明确指出并实验证明，仅依赖音频信号（如 OmniZip）引导音视频压缩会系统性地损害视觉理解性能，尤其是在需要音视频联合推理的任务上。
2. 提出查询引导的模态对称压缩策略：首次在全模态压缩中引入用户查询作为指导信号，并对音视频进行独立、对称的重要性估计，避免了跨模态的错误假设和单一模态的过拟合。
3. 设计了双重得分 token 选择机制：结合“跨模态关联”和“模态内峰值”两种互补信号来选择 token，而非单一使用注意力权重或相似度。这种设计理论上能同时保留需要多模态对齐的证据和仅在某单模态内显著的信息，消融实验验证了混合策略显著优于任一单一策略。

### 📊 实验结果

论文在以下四个 benchmark 上对 Qwen2.5-Omni-3B 和 7B 进行了评估：
- DailyOmni：类别包含 AV Event Alignment, Comparative, Context Understanding 等，侧重日常视频中的跨模态时序推理。
- WorldSense：评估真实世界同步全模态感知。
- OmniVideoBench：评估协同音视频推理，强调模态互补和逻辑一致性。
- VideoMME：包含不同时长（短、中、长）的视频问答。

关键结果：
- 总体性能：在 25% 和 35% 的 token 保留率下，OmniFocus 在大多数 benchmark 上取得了最佳或并列最佳的压缩性能。例如，在 DailyOmni (7B, 25%) 上，OmniFocus 达到 59.40% 准确率，比 OmniZip (57.73%) 高 1.67%。在 WorldSense 上，OmniFocus 在所有四个模型-budget 设置下均取得最佳压缩结果，在 7B 模型 25% 保留率下比 OmniZip 高 0.54 个百分点。
- 类别级分析：在 DailyOmni 上，OmniFocus 最稳定的增益来自 AV Event Alignment 类别（7B 模型 35% 保留率下比 OmniZip 高 5.04 个百分点），表明方法的主要收益集中在需要音视频对齐的敏感问题上，而非均匀分布于所有推理类型。
- 效率：在 DailyOmni (7B, 25% token) 上，OmniFocus 实现了 1.38 倍的预填充加速和 1.32 倍的端到端加速。虽然 OmniFocus 比 OmniZip 使用略多的峰值 GPU 内存，但两种压缩方法都显著降低了相对于全量推理的内存占用。

![Figure 4: Efficiency gains by video duration on WorldSense. We group QA examples into 100-second video-duration buckets and report GPU memory reduction and end-to-end time reduction relative to the same-model full-token baseline. Longer videos generally yield larger relative savings, and the stronger compression setting (25%) provides the largest gains.](https://arxiv.org/html/2607.03050v1/x4.png)

图4详细展示了 OmniFocus 带来的效率增益随视频时长的变化。结果按 100 秒的视频时长区间分组，分别报告了 GPU 内存减少和端到端时间减少的比例。图表显示，随着视频时长增加，GPU 内存减少比例和端到端时间减少比例均呈现上升趋势，尤其是在更强的压缩设置（25% 保留率）下增益最为显著（例如，在 500-600 秒区间，7B 模型 25% 设置下端到端时间减少接近 29%）。这印证了 OmniFocus 对于长视频处理的实用价值。

- 消融实验：
    - 块相关性评分：最大相似度评分优于平均相似度（DailyOmni 7B: 60.32 vs 59.73 at 35%）。
    - 丢弃率分配：得分驱动的预算分配优于随机或均匀分配。
    - 得分转换：Softmax 和 Sigmoid 性能接近，Softmax 略优。
    - 模态引导的块评分：平衡的音视频评分策略在总体平均分上优于仅用音频或仅用视频的策略。

![Table 4: Ablation study on Qwen2.5-Omni-7B. We report the effects of chunk relevance scoring, drop ratio allocation, and score transformation on DailyOmni under 35% and 25% token retention. The best result within each ablation group is highlighted in bold.](https://arxiv.org/html/2607.03050v1/table4.png)

Table 4 系统性地验证了 OmniFocus 中“块相关性评分”、“丢弃率分配”和“得分转换”三个核心组件的有效性。在 35% 保留率下，使用完整方法（Max similarity + Score-based allocation + Softmax）达到 60.32% 平均准确率，优于使用平均相似度（59.73%）、随机分配（58.81%）或均匀分配（59.82%）的变体。

![Figure 3: Impact of inter- and intra-modal token selection. We compare inter-modal only, intra-modal only, and the hybrid inter+intra strategy under 35% token retention for 3B and 7B models.](https://arxiv.org/html/2607.03050v1/x3.png)

图3对比了仅使用跨模态关联得分（Inter-modal only）、仅使用模态内峰值得分（Intra-modal only）以及混合使用两者（Inter+Intra）的策略在 3B 和 7B 模型上的表现。结果表明，在两种模型规模下，混合策略（即 OmniFocus 的默认策略）的性能都显著优于任何单一策略，强有力地证明了双重得分机制设计的合理性。仅使用模态内峰值得分的性能优于仅使用跨模态关联得分，说明模态内部显著性信息对于 token 选择尤为重要。

- 模态保留比例敏感性分析：

![Figure 5: Sensitivity to modality-specific retention ratios. We vary the audio retention ratio while fixing the video ratio (left), and vary the video retention ratio while fixing the audio ratio (right). OmniFocus is robust around moderate modality budgets, while overly aggressive compression of either modality degrades DailyOmni performance.](https://arxiv.org/html/2607.03050v1/x5.png)

图5分析了 OmniFocus 对模态特定保留率的敏感性。左图显示，在固定视频保留率的情况下，改变音频保留率时，DailyOmni 准确率先升后降；右图显示，在固定音频保留率的情况下，改变视频保留率也有类似趋势。结果表明，OmniFocus 在适中的模态预算下最为鲁棒，但过度压缩任一模态都会导致性能显著下降。

- Token 选择比例敏感性分析：

![Figure 6: Sensitivity to the inter/intra token-selection split on DailyOmni for Qwen2.5-Omni-7B. We report average accuracy under different keep-count splits between inter-modal association scores and intra-modal peak scores at 35% and 25% token retention. The default 1:1 split is highlighted, and the best point in each retention setting is marked.](https://arxiv.org/html/2607.03050v1/x6.png)

图6分析了跨模态关联得分与模态内峰值得分之间的保持数量比例的影响。图表显示，在 35% 和 25% 两种 token 保留率下，随着从完全偏向关联得分向完全偏向峰值得分调整，性能呈现倒 U 型变化。论文默认采用的 1:1 平衡比例在 35% 保留率下达到最佳，在 25% 保留率下也接近最佳配置，且比极端配置（如 3:1 或 1:3）更鲁棒。

- 附加消融实验（附录D）：
    - 参考向量估计鲁棒性（D.4）：对比了均值、修剪均值和查询加权三种参考向量估计策略，默认的均值策略在两种保留率下均取得最佳平均分。
    - 查询表示敏感性（D.5）：均值归一化查询表示与原始均值池化性能总体可比，前者在大多数设置下略优。
    - 局部丢弃率范围敏感性（D.6）：默认范围 \([0.35, 0.75]\) 在 7B 模型上最佳；过高范围会损害性能，但方法对该超参数整体具有一定鲁棒性。

### 🔬 细节详述

- 训练数据：无。OmniFocus 是训练无关方法，直接在目标任务推理时应用。
- 损失函数：无。
- 训练策略：无。
- 关键超参数：局部丢弃率范围 \(r_{\min}=0.35\), \(r_{\max}=0.75\)。token 选择时关联得分和峰值得分的比例为 1:1。文本查询向量通过平均池化和 L2 归一化获得。模态 token 保留 budget 是 benchmark 级别的校准超参数，参照 OmniZip 协议设定。
- 训练硬件：推理和评估使用 NVIDIA A100 (80GB) GPU。训练无关，故无训练时长。
- 推理细节：使用 Qwen2.5-Omni 的默认设置（如 2 秒时间窗组织音视频 token），未说明解码策略（如贪婪解码或采样）。所有压缩操作在 LLM 骨干网络之前执行，不修改模型参数。
- 正则化或稳定训练技巧：不适用。

### ⚖️ 评分理由

*   创新性 (1.0/2)：识别模态偏差并引入查询引导的对称压缩是一个清晰且合理的动机。然而，方法论上缺乏本质突破：核心算子是基于 L2 归一化嵌入的 max 余弦相似度，这属于常规操作。提出双得分选择机制（关联+峰值）是一个不错的设计点，但整体仍属启发式方法，创新程度中等。

*   技术严谨性 (0.9/1.5)：方法推导和公式定义清楚，组件间逻辑通顺。不足之处在于：基于 Softmax 进行得分归一化缺乏理论依据，可能会导致重要性区分度不够。双得分 token 选择中各占一半的分配策略虽然消融实验证明有效，但参数选择是经验性的。与强基线 FastV 等在单模态（视觉）上的压缩方法缺乏深度对比分析，只比较了为全模态设计的 OmniZip。

*   实验充分性 (1.0/1.5)：在四个公认的 benchmark 上评估了两种尺度的模型，对比了三个代表性的基线，消融实验覆盖了所有关键设计组件，并对效率和 budget 分配进行了分析，附录中还提供了对参考向量估计、查询表示和丢弃率范围的额外敏感性分析，实验设计相对完整。主要缺陷是：(1) 所有实验仅局限于 Qwen2.5-Omni 这一最近推出的模型系列，方法的泛化性未得到验证；(2) 结果缺少统计显著性检验（如多次运行的方差），性能提升普遍在 1-2 分，相对微弱，可能是噪声。

*   清晰度 (0.8/1)：论文写作流畅，结构标准，动机阐述和图表（图1, 2）有助于理解。但部分方法细节有赘述感（如公式3和4描述相似概念），token 数量符号（\(n_v^i\), \(N_v\)）在公式中定义不够清晰，前后文反复出现，容易混淆。

*   影响力 (0.6/1.5)：提出并解决了一个实际的问题（全模态 LLM 的模态偏差压缩），对降低推理成本有一定价值。但影响力有限，原因如下：(1) 性能提升幅度较小，难以在社区中树立为强标准；(2) 方法是轻量级、启发式的，对后续深度模型架构或训练方法的研究推动力弱；(3) 仅评估在一个模型系列上，且该方向（OmniLLMs）本身尚在快速发展初期，论文结论可能很快过时。对于音频和多模态社区的核心受众，其边际贡献有限。

*   开源 (0.5/1.5)：论文在摘要中提供了一个 GitHub 链接（https://github.com/icip-cas/OmniFocus），但根据 NeurIPS Checklist 的自述，提交时未提供可用的代码或复现脚本。未提供模型权重或数据集。因此仅根据承诺可获得部分分数。

*   可复现性 (0.3/0.5)：论文描述了方法的所有公式、超参数和 budget 校准协议。硬件环境亦有说明。然而，关键的 benchmark 级别全局 budget 是通过参照 OmniZip 的"协议"手动校准的，此过程的细节描述不足（附录A仅给出概述），复现者可能难以精准获得与论文相同的压缩设置，导致结果有偏差。此外，无代码发布进一步降低了可复现性。

*   工程/实践价值 (0.8/1.5)：作为一个训练无关的算法，OmniFocus 具备作为插件部署到现有模型上的工程潜力，无需额外训练是其主要卖点，适合工业界快速验证和低风险集成。但 token 选择涉及多次相似度计算和排序，其自身的计算开销（虽然很小）和纯 Python 实现的延迟未做深入探讨，批处理场景下的效率优化也未被考虑。

### 🚨 局限与问题

1. 论文明确承认的局限：
   * 方法依赖于冻结的输入嵌入空间的相似度，可能对精细事件或语义模糊的查询不准确。
   * 当前只在 Qwen2.5-Omni 模型族上评估，泛化性有待在更多 OmniLLM 架构上验证。
   * 使用 benchmark 级别的全局 budget 校准，无法根据单个样本的难度和模态需求进行动态自适应调整。
   * 训练无关的设计虽然轻量，但也限制了对下游任务目标进行直接优化的可能性。

2. 审稿人发现的潜在问题：
   * 与更强视觉压缩基线的对比缺失：仅与为全模态设计的 OmniZip 对比。FastV 等方法在视觉 token 压缩中表现优异，将它们扩展用于音视频双模态并与 OmniFocus 对比，是检验其先进性不可或缺的一环。
   * "模态对称"设计的简单性：方法仅是将音频和视频独立处理，并未对"音视频对齐"这一挑战性难题提供更深层次的建模。双得分选择中的跨模态关联得分计算也很简单（与对方均值相似），可能无法捕捉到帧级精确的对齐关系。
   * 性能提升的显著性：多个结果是"最佳压缩结果"但相比 OmniZip 提升微弱（通常 0.2-1.6 个百分点），在学术价值上缺乏说服力。极有可能这些微小提升来自于更好的超参数调节（budget 校准），而非方法本身的根本优势。
   * 全链路延迟分析不完整：只报告了注意力计算的加速比，忽略了 OmniFocus 自身引入的计算延迟（多次归一化、相似度计算、排序操作）和额外的内存 I/O，这对于真正的实时系统至关重要。
   * 对嵌入空间的过度依赖：方法完全依赖冻结的输入嵌入，但 OmniLLM 的编码器可能并非为相似度匹配任务优化，查询与音视频 token 的语义对齐质量直接影响压缩效果，然而对此缺乏深入分析。

---

[← 返回 2026-07-07 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-07/)
