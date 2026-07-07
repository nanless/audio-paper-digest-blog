---
title: "Open-Set Source Tracing as Compositional Factors via Structured Prototypes"
date: 2026-07-07
draft: false
tags: [语音伪造检测, 可解释性]
categories: [论文速递]
description: "语音伪造检测 | 6/10"
hiddenInHomeList: true
---

# 📄 Open-Set Source Tracing as Compositional Factors via Structured Prototypes

#语音伪造检测 #可解释性

**6/10** | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 0.8/1.5 | 开源 0/1.5 | 复现 0.2/0.5 | 工程 0.5/1.5

✅ **6/10** | 前50% | #语音伪造检测 | #对比学习 | #可解释性 | [arxiv](https://arxiv.org/abs/2607.03134)


### 👥 作者与机构

- 第一作者：Santiago Rubio（University of Zaragoza, ViVoLab, Aragón Institute for Engineering Research (I3A), Spain）
- 通讯作者：未明确指定，推断为 Santiago Rubio
- 作者列表：Santiago Rubio, Antonio Almudévar, Antonio Miguel, Eduardo Lleida, Alfonso Ortega（均隶属于 University of Zaragoza, ViVoLab, I3A）

### 💡 毒舌点评

这篇文章用 “Nature vs. Nurture” 的比喻把合成语音来源拆成架构、数据和残余因子，思路漂亮且很有解释力；结构化正交原型与子空间划分也确实在少样本开集归因上稳住了泛化差距。但实验仅围绕 MLAAD 一个数据集自娱自乐，缺少与更丰富的开集溯源方法（如基于 OOD 分数的方案）的正面交锋，也没有任何代码或权重放出，让人对方法的真实鲁棒性心里没底。44 个未见源的评估听起来唬人，但未见架构和未见数据集的严重不对称性让“泛化”的成色打了折扣。

### 📌 核心摘要

1. 要解决的问题：传统合成语音溯源将"源"等同于单一架构，无法泛化到训练时未见过的架构-数据组合。本文将其重新定义为架构、训练数据、残余配置三因子的组合(`s=(a,d,h)`)，目标是在四个不同开集场景下实现组合泛化和开集溯源。
2. 方法核心：基于 ResNet18 编码器，提出三类渐进策略：1) 用冻结的正交单位向量替代可学习的分类权重，强制最大化类间分离；2) 将 128 维嵌入空间分割为架构子空间（64维）和数据子空间（64维），分别对齐正交因子原型，使共享因子的源保留非零相似度；3) 进一步划出 32 维无原型残差子空间，并通过环形损失约束其能量范数为 1，以吸收非线性交互、训练配置及未标注变异。训练使用加权交叉熵与 MSE 对齐损失。
3. 新在何处：首次将合成语音源显式建模为可分离因子的组合，并用冻结正交原型与子空间划分来支撑这一分解。因子化原型使组合泛化成为可能，残差子空间为无法标注的残余因素提供了结构化的"容身之所"。
4. 主要实验结果：在 MLAAD 上，策略 2.B（残差建模，λ=0.05）在 K=5 少样本开集溯源中取得 84.52% F1-Macro，比 ArcFace 基线（80.11%）提升 4.41 pp，且将 Seen 与 Unseen 之间的泛化差距从 13.70 pp 缩至 9.19 pp。场景分解显示架构子空间显著提升了对"Unseen Architecture"的泛化，残差子空间则恢复了在"Unseen Combination"上的表现。
5. 实际意义：为语音伪造溯源提供了一种可解释且可扩展的因子化框架，理论上能通过组合已有因子原型来应对不断涌现的新模型，无需全量重训。
6. 主要局限性：未对推理时变量（如参考说话人）进行显式建模或补偿；实验仅限 MLAAD 单一数据集，缺乏跨库泛化验证；未与除 ArcFace 外的其他开集识别方法对比；残差子空间的可解释性未经量化分析；代码与模型未开源。

### 🔗 开源详情

- 代码：论文中未提及代码链接
- 模型权重：论文中未提及
- 数据集：论文使用 MLAAD 数据集（参考文献 [18]）和 M-AILABS 数据集（参考文献 [20]），但未在论文中提供获取链接或下载地址
- Demo：论文中未提及
- 复现材料：论文中未提及（仅描述了训练配置、超参数和评估协议，未提供检查点、配置文件等补充材料）
- 论文中引用的开源项目：ArcFace（参考文献 [7]）、ResNet18（参考文献 [10]）、Ring Loss（参考文献 [27]），以及 MLAAD、STOPA、CodecFake+、ASVspoof 系列、ADD 系列等基准数据集/工具，但论文中均未提供具体链接

### 🏗️ 方法概述和架构

整体是一个端到端的编码器-原型度量学习框架。输入语音经前端处理和 ResNet18 编码器得到 128 维嵌入，再通过不同的原型策略与损失函数进行训练；推理时用余弦相似度匹配最近原型完成溯源。

前端处理：输入音频重采样至 16 kHz，提取 80 维对数梅尔谱图（n_fft=512, hop_length=160）。训练时应用功率归一化和随机静音修剪以防止响度或填充伪影带来的捷径学习。

编码器：使用 ResNet18 处理对数梅尔谱图，输出嵌入 \(z \in \mathbb{R}^M, M=128\)。所有策略共享相同编码器以公平比较。

基线 (ArcFace)：在嵌入之后接可学习权重 \(W \in \mathbb{R}^{M \times C}\)，使用加性角度边际损失（具体边际值 m 和尺度 s 未明确给出），将各类别映射到超球面上的独立中心点。此方法将每个源视为独热标签，无因子结构先验。

策略 1：正交原型。将可学习权重替换为固定的原型矩阵 \(\mathcal{P} \in \mathbb{R}^{M \times C}\)，其列向量构成一组正交基（当 \(C \le M\) 时）。损失为加权交叉熵 \(\mathcal{L}_{\text{WCE}}(z^\top \mathcal{P}, s)\) 加上 MSE 项 \(\lambda \|z - \mathbf{p}_s\|^2_2\)，迫使嵌入向其指定原型靠拢。该策略强制所有源相互正交，最大化类间分离，但也因此抹除了共享架构/数据源之间的自然相似结构。

策略 2.A：因子化原型。将 M 分为 \(M_\mathcal{A} + M_\mathcal{D}\) 两部分（均为 64 维）。在每个子空间中分别建立架构原型集 \(\mathcal{U}=\{\mathbf{u}_a\}^{C_A}_{a=1} \subseteq \mathbb{R}^{M_\mathcal{A}}\) 和数据集原型集 \(\mathcal{V}=\{\mathbf{v}_d\}^{C_D}_{d=1} \subseteq \mathbb{R}^{M_\mathcal{D}}\)，均为正交单位向量。对源 \(s=(a,d)\) 构建组合原型 \(\mathbf{p}_s = \mathbf{u}_a \oplus \mathbf{v}_d\)，嵌入同样分割为 \(z = z_\mathcal{A} \oplus z_\mathcal{D}\)。损失为加权交叉熵加上对 \(z_\mathcal{A}\) 和 \(z_\mathcal{D}\) 分别与对应因子原型的 MSE 对齐。共享同一架构（或数据集）的源在相应子空间的相似度非零，保留了因子间的边际信息，使模型可对未见过的架构-数据组合进行归因推断。

策略 2.B：残差建模。在因子化原型基础上进一步划出残差子空间 (\(M_\mathcal{A}=48, M_\mathcal{D}=48, M_\mathcal{R}=32\))。嵌入 \(z = z_\mathcal{A} \oplus z_\mathcal{D} \oplus z_\mathcal{R}\)。\(z_\mathcal{R}\) 没有固定原型，但施加环形能量约束 \(\mathcal{L}_{\text{Ring}} = \lambda(\|z_\mathcal{R}\|_2 - \mu_{\text{ref}})^2\)，其中 \(\mu_{\text{ref}}=1\)。此约束防止残差向量坍缩至零或无限膨胀，使其以固定范数专门编码未标注的残余因子 \(h\)、\(\mathcal{A} \times \mathcal{D}\) 非线性交互及推理变量 \(i\)，从而保持 \(\mathcal{Z}_\mathcal{A}\) 和 \(\mathcal{Z}_\mathcal{D}\) 子空间的纯净。

训练与推理：所有策略训练 25 epoch, batch size 32, 使用 Adam 优化器和余弦退火调度（初始学习率未说明）。原型在初始化后冻结。闭集推理直接使用训练好的固定原型进行余弦相似度匹配；少样本开集推理时，对每一类使用 K 个支持样本的嵌入均值作为动态原型，再进行余弦匹配。每次实验跑 100 次少样本试验取均值±标准差。

![Figure 2: Overview of the Proposed Source Tracing Framework. Top (Strategy 1): Structured Orthonormal Prototypes constrained by ℒ_{WCE} and ℒ_{MSE}. Bottom (Strategy 2): Our proposed Subspace Partitioning Framework. The embedding is split into factors: Architecture (z_𝒜, blue), Training Data (z_𝒟, orange), and Residual Information (z_ℛ, grey).](https://arxiv.org/html/2607.03134v1/files/images/schema_paper.png)

[图像补充] Figure 2 提供了提出框架的视觉概览。顶部展示策略 1：结构化正交原型受 \(\mathcal{L}_{\text{WCE}}\) 和 \(\mathcal{L}_{\text{MSE}}\) 约束。底部展示策略 2（子空间划分框架）：嵌入被分割为架构因子 (\(z_\mathcal{A}\), 蓝色)、训练数据因子 (\(z_\mathcal{D}\), 橙色) 和残差信息 (\(z_\mathcal{R}\), 灰色)。该图直观对比了两种策略的核心架构差异。

### 💡 核心创新点

1. 源的重定义与组合分解：将合成语音的“源”从单一类别提升为 \((a, d, h)\) 三元组，使归因任务由单体分类转变为因子组合问题，为开集泛化提供了明确的结构先验。这是该工作最核心的概念贡献。

![Figure 1: Variability in synthetic speech attribution. A source 𝒮=(𝒜,𝒟,ℋ) is read as a composition of an architecture factor (𝒜, upper-right triangle), a training-data factor (𝒟, lower-left triangle) and a residual (ℋ, the grey band blurring their boundary); sources sharing a factor share the corresponding color, and the 𝒜/𝒟 boundary shifts from tile to tile as one factor dominates. Inter-source variability (across columns) is the attribution target, whereas inter-utterance variability (across rows: reference speaker or prompt, shown as a distinct per-row texture) and intra-utterance variability (within a row: phonetic content) constitute the intra-source nuisance to be compensated for attribution.](https://arxiv.org/html/2607.03134v1/x1.png)

[图像补充] Figure 1 直观阐释了合成语音源的可变性与因子分解概念。图中显示源 S 被建模为架构因子 (\(\mathcal{A}\)，右上三角)、训练数据因子 (\(\mathcal{D}\)，左下三角) 和残差因子 (\(\mathcal{H}\)，模糊边界灰色带) 的组合。共享因子的源颜色相同。图的列方向展示了作为归因目标的源间变异性，而行方向（以纹理区分）展示了作为干扰需要补偿的内源变异性（如参考说话人/提示）和行内的语音内容变异性。这为本文将源进行因子化分解的动机提供了清晰的视觉解释。

2. 结构化正交原型：冻结的正交原型替代可学习权重，强制嵌入空间等距分离的同时保持几何稳定性，避免了 Angular Margin 对不可见类的漂移，并在实验中将少样本开集性能提升 2.6 pp (K=5)。
3. 因子化子空间划分：将嵌入明确分割为架构子空间和数据子空间，分别对齐正交因子原型，使模型可捕捉跨源的共享因子，实现“组合泛化”——对新出现的架构-数据组合仍能利用因子边际信息进行归因，显著缩小了 Seen/Unseen 泛化差距。
4. 无原型残差子空间与能量约束：引入专用于吸收未被标注因素（残余配置 \(h\) 和推理变量 \(i\)）的残差子空间，并通过固定范数的环形损失约束其能量，既保持了主因子的干净表示，又为非确定性因素提供了合法存身之处，从而在“Unseen Combination”场景中恢复并超过基线表现。

### 📊 实验结果

论文在 MLAAD 数据集上进行评估，主指标为源级 F1-Macro。主要实验表格如下：

| Method | λ | Closed-Set F1 (%) | Few-Shot Open-Set All vs All (K=1 / K=3 / K=5) | Seen vs All (K=5) | Unseen vs All (K=5) | Gen. Gap (K=5) |
|---|---|---|---|---|---|---|
| Baseline (ArcFace) | – | 95.11 ± 0.18 | 68.01 ± 0.56 / 77.49 ± 0.56 / 80.11 ± 0.53 | 89.17 ± 0.86 | 75.47 ± 0.67 | 13.70 ± 1.09 |
| Strategy 1 | 0.0 | 95.20 ± 0.16 | 70.18 ± 0.80 / 80.09 ± 0.61 / 82.70 ± 0.55 | 90.68 ± 0.26 | 78.61 ± 0.82 | 12.07 ± 0.86 |
| Strategy 1 | 0.05 | 95.34 ± 0.05 | 70.35 ± 0.83 / 80.10 ± 0.51 / 82.56 ± 0.47 | 91.14 ± 0.11 | 78.17 ± 0.71 | 12.97 ± 0.72 |
| Strategy 1 | 0.1 | 95.31 ± 0.12 | 70.52 ± 0.49 / 80.15 ± 0.34 / 82.55 ± 0.29 | 91.22 ± 0.10 | 78.11 ± 0.44 | 13.11 ± 0.45 |
| Strategy 1 | 1.0 | 95.44 ± 0.05 | 69.38 ± 0.46 / 78.99 ± 0.25 / 81.44 ± 0.18 | 91.39 ± 0.18 | 76.35 ± 0.25 | 15.04 ± 0.31 |
| Strategy 2.A | 0.0 | 94.93 ± 0.08 | 70.94 ± 0.40 / 81.44 ± 0.38 / 83.97 ± 0.38 | 90.05 ± 0.20 | 80.86 ± 0.57 | 9.19 ± 0.60 |
| Strategy 2.A | 0.05 | 95.17 ± 0.13 | 71.20 ± 0.29 / 81.10 ± 0.11 / 83.67 ± 0.15 | 91.34 ± 0.14 | 79.75 ± 0.22 | 11.59 ± 0.26 |
| Strategy 2.A | 0.1 | 95.21 ± 0.09 | 71.03 ± 0.04 / 80.81 ± 0.11 / 83.33 ± 0.23 | 91.51 ± 0.04 | 79.14 ± 0.34 | 12.37 ± 0.34 |
| Strategy 2.A | 1.0 | 95.36 ± 0.18 | 68.01 ± 0.83 / 78.06 ± 0.66 / 80.81 ± 0.56 | 91.76 ± 0.08 | 75.21 ± 0.85 | 16.55 ± 0.85 |
| Strategy 2.B | 0.0 | 94.51 ± 0.09 | 69.75 ± 0.49 / 80.90 ± 0.20 / 83.64 ± 0.25 | 89.43 ± 0.12 | 80.68 ± 0.38 | 8.75 ± 0.40 |
| Strategy 2.B | 0.05 | 94.62 ± 0.34 | 72.11 ± 0.43 / 82.12 ± 0.14 / 84.52 ± 0.22 | 90.60 ± 0.28 | 81.41 ± 0.30 | 9.19 ± 0.41 |
| Strategy 2.B | 0.1 | 94.99 ± 0.13 | 71.92 ± 0.08 / 81.75 ± 0.11 / 84.21 ± 0.17 | 91.26 ± 0.06 | 80.61 ± 0.25 | 10.65 ± 0.26 |
| Strategy 2.B | 1.0 | 95.09 ± 0.29 | 69.79 ± 0.87 / 79.79 ± 0.61 / 82.45 ± 0.52 | 91.74 ± 0.26 | 77.69 ± 0.78 | 14.05 ± 0.82 |

- 各策略在不同 λ 下的灵敏度分析显示：过大的 λ 会压制 Unseen 性能，增加泛化差距，但对 Seen 来源有利。这揭示了正则化强度与开集泛化能力之间的权衡。
- 按场景分解分析（Figure 3）：
  - 策略 1 强制所有源相互正交，抹除了共享架构/数据源间的相似性，导致在“Unseen Combination”上表现退化。
  - 策略 2.A 在“Unseen Architecture”上明显优于策略 1，说明分离出的架构子空间具有更好的可迁移性；但在“Unseen Combination”和“Unseen Dataset”上与策略 1 相比变化不大。
  - 策略 2.B 的残差子空间在最具挑战性的“Unseen Combination”场景中恢复并超越了基线表现，表明 \(\mathcal{Z}_\mathcal{R}\) 有效捕获了 \(\mathcal{A} \times \mathcal{D}\) 的非线性交互。最大的绝对提升在“Unseen Dataset”场景，而最大的相对增益在“Unseen Architecture”场景。“Both Unseen”场景下的提升仍然有限。
  - 所有策略在“Unseen Dataset”与“Unseen Architecture”间表现出不对称的泛化能力，暗示架构指纹作为潜在空间的锚点比数据驱动的伪影更为鲁棒。

![Figure 3: F1-macro scores for few-shot source attribution with K= 5 support examples across five generalization settings. Best-performing configuration selected for each strategy based on validation performance. N indicates the number of test sources.](https://arxiv.org/html/2607.03134v1/x2.png)

- 文中未提供与其他开放集溯源方法（如 OOD 检测类方案）的对比，也未报告统计显著性检验。

### 🔬 细节详述

- 训练数据：MLAAD 训练集含 24 个源（19 种架构 × 11 个数据集），加 M-AILABS 真实语音作为 bonafide 类。验证集含 25 个源（括号内为 OOD 实体数量：源 17、架构 8、数据集 2），测试集含 64 个源（OOD 实体：源 43、架构 24、数据集 10）。
- 损失函数：
  - 基线：ArcFace，公式为 \(\mathcal{L}_{\text{ArcFace}} = -\log \frac{e^{s \cos(\theta_{s,s}+m)}}{e^{s \cos(\theta_{s,s}+m)} + \sum_{c \neq s} e^{s \cos \theta_{s,c}}}\)，具体边际值 \(m\) 和尺度 \(s\) 未明确给出。
  - 策略 1/2：加权交叉熵 \(\mathcal{L}_{\text{WCE}}\)（权重反比于源频率）+ MSE 项 \(\lambda \|z-\mathbf{p}\|^2\)。
  - 策略 2.B：额外环形损失 \(\lambda(\|z_\mathcal{R}\|_2 - \mu_{\text{ref}})^2\), \(\mu_{\text{ref}}=1\)。
- 训练策略：Epoch 25，batch size 32，Adam 优化器，余弦退火学习率调度（初始学习率未说明）。每次实验跑 4 个随机种子。
- 关键超参数：嵌入维度 M=128。策略 2.A：\(M_\mathcal{A}=M_\mathcal{D}=64\)。策略 2.B：\(M_\mathcal{A}=M_\mathcal{D}=48\)，\(M_\mathcal{R}=32\)。正则化强度 \(\lambda \in \{0.0, 0.05, 0.1, 1.0\}\)。
- 训练硬件：未说明。
- 推理细节：闭集用固定训练原型余弦相似度；少样本用 K 个支持样本均值成原型，再余弦匹配。每次配置在 100 次少样本试验上取均值±标准差。
- 正则化或稳定训练技巧：随机静音修剪、功率归一化；原型在初始化后冻结。文中提到可学习原型的实验性能相似，故选择计算开销更小的固定方案。
- 模型计算量或推理速度：未说明。
- 能耗：未说明。

### ⚖️ 评分理由

*   创新性 (1.5/2)：将合成语音溯源重新定义为显式因子组合问题是核心概念贡献，源于组合、子空间划分、残差约束的整套方案视角新颖且具有解释力。不足在于核心组件（原型学习、度量学习、子空间分解）本身并非新发明，属于已有技术的有机融合与特定任务适配。
*   技术严谨性 (1.2/1.5)：问题形式化清晰，对不同开集场景的定义严谨。损失函数推导合理，残差能量约束的动机充分且设定巧妙。缺陷在于：部分实现细节缺失（如 ArcFace 的 margin 和 scale、原型初始化算法）；\(C > M\) 时的正交性扩展仅一句话带过，缺乏深入讨论；\(\mu_{\text{ref}}=1\) 的选择缺乏敏感性分析或更深入的理论论证。
*   实验充分性 (1.0/1.5)：与 ArcFace 基线的对比充分，并对 \(\lambda\) 和各策略变体进行了详细的消融实验。Figure 3 的场景分解提供了有价值的分析洞察。但严重缺陷在于：仅在一个数据集（MLAAD）上评测，无跨数据集泛化验证；缺少与其他开集识别/开集溯源方法的直接比较，无法判断该框架在领域内的相对优势；未报告统计显著性检验，对结论的支撑偏弱。
*   清晰度 (0.8/1)：整体结构合理，"Nature vs. Nurture"的比喻和 Figure 1, 2 等图表对理解核心动机与框架非常有帮助。主要扣分点在于方法实现的细节较模糊（如 ArcFace 的超参、原型生成算法等），Figure 3 也缺少误差棒。
*   影响力 (0.8/1.5)：为语音伪造溯源与音频取证社区提供了一个可解释的因子化框架，对理解模型"指纹"的构成有启发意义。但由于任务相对小众，且未在更大规模或更通用的基准上验证，难以在短期内产生广泛的领域推动作用。
*   开源 (0.0/1.5)：论文中未提及任何代码、模型权重或数据集链接，也未声明后续开源计划，核心内容完全未公开。
*   可复现性 (0.2/0.5)：提供了网络架构、损失函数、主要超参数和评估协议，但缺少学习率、权重初始化细节、原型生成算法、代码实现，且未提供开源仓库，复现成本较高。
*   工程/实践价值 (0.5/1.5)：因子化原型的思路可落地为实际音频取证流水线，理论上支持通过组合已有因子原型来增量添加新模型。但无代码、无预训练模型，且仅验证于单一数据集，工程参考价值有限。

### 🚨 局限与问题

论文明确承认的局限  
- 未对推理变量（如参考说话人）进行显式建模或补偿，目前将其与训练残余一并吸收进残差子空间，并计划在未来工作中专门研究并进行补偿。
- 残差子空间的可解释性尚待量化研究，当前仅将其作为吸收未标注变异的容器。

审稿人发现的潜在问题  
- 单一数据集评测：实验仅基于 MLAAD 一个数据集，且该数据集的合成样本均源自 M-AILABS 真实语音，构建时有意最小化声学失配。这使模型的泛化能力存疑，尤其是面对真实世界中多样的编解码、信道和录音条件时。
- 基线对比严重不足：仅与 ArcFace 单一基线对比。对于"开集溯源"这一核心宣称，缺乏与开集识别领域中基于 out-of-distribution 检测、对比式或生成式方法的横向比较，方法的绝对优势完全无法判断。
- 开集评估场景的不平衡性：测试集中未见过的新源有 43 个，对于"Both Unseen"这种最具挑战性的全开集场景，文中（Figure 3）也承认所有策略的提升都比较有限（“gains in Both Unseen remain modest / limited”）。这意味着该方法的组合泛化能力主要体现在“部分已知”的场景下，对于完全未知的模型，优势并不明显，限制了其作为“开集”解决方案的普适性。
- 残差子空间的黑箱属性：残差子空间虽设计精巧，但缺乏可视化或定量分析来证实其是否真的捕获了有意义的“残余配置”因子（如特定超参、随机种子），还是仅仅作为噪声垃圾桶。文中声称的“可解释性”并未延伸到残差部分。
- 超参敏感性：\(\lambda\) 取值对泛化差距的影响非常显著（例如策略 2.A 在 \(\lambda=0.0\) 时泛化差距为 9.19 pp，\(\lambda=1.0\) 时飙升到 16.55 pp），这意味着方法性能对正则化强度高度敏感，而在面对全新数据集时，如何无监督地确定最优 \(\lambda\) 是个未解决的难题。
- 维度假定约束：正交原型要求 \(C \le M = 128\)，这只是问题被推迟了。当源的数量超过 128 时，需要转向近似正交码或增大嵌入维度，但其对性能的影响完全未知。

---

[← 返回 2026-07-07 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-07/)
