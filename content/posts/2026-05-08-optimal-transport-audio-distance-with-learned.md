---
title: "Optimal Transport Audio Distance with Learned Riemannian Ground Metrics"
date: 2026-05-08
draft: false
tags: [音频质量评估, 最优传输, 模型评估, 开源工具]
categories: [论文速递]
description: "音频质量评估 | 7.5/10"
hiddenInHomeList: true
---

# 📄 Optimal Transport Audio Distance with Learned Riemannian Ground Metrics

#音频质量评估 #最优传输 #模型评估 #开源工具

✅ **7.5/10** | 前25% | #音频质量评估 | #最优传输 | #模型评估 #开源工具 | [arxiv](https://arxiv.org/abs/2605.05554v1)

学术质量 6.0/7 | 选题价值 1.0/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Wonwoo Jeong（Sogang University, jeongwonwoo@sogang.ac.kr）
- 通讯作者：未说明（论文未明确指定通讯作者）
- 作者列表：Wonwoo Jeong（Sogang University）

### 💡 毒舌点评

亮点：论文将FAD的问题巧妙分解为“代价”与“耦合”两个二维原语，并通过严谨的定理（特别是定理1）量化了FAD在秩-1污染下的性能衰减，理论分析透彻且有独创性。提出的OTAD指标不仅提升了与人类MOS的相关性，其衍生的样本级诊断能力（AUROC ≥0.86）是现有标量指标无法提供的实用增益。
短板：验证主要基于ESC-50和DCASE 2023 Foley数据集，对音乐、语音等更广泛音频类型的泛化性证据不足；尽管提供了开源工具，但适配器训练依赖于特定数据集（FSD50K），其对不同领域音频的适应性可能成为实际应用中的一个限制。

### 📌 核心摘要

1.  问题：现有音频生成评估的主流指标Fréchet Audio Distance（FAD）存在结构性缺陷：其代价函数基于冻结的编码器嵌入，存在不变性集，会忽略严重伪影；其耦合方式采用高斯拟合，会稀释低秩（如模式坍塌）污染信号。
2.  方法：提出Optimal Transport Audio Distance（OTAD），从2-Wasserstein距离的两个原语（代价函数和耦合）进行系统性修正。具体使用残差Riemannian地面度量适配器学习局部度量，以逃离编码器不变性；使用熵正则化的Sinkhorn最优传输作为耦合方式，以保持对秩-1污染的敏感性。
3.  创新：首次系统性地同时纠正Wasserstein距离的两个原语。建立了统一的理论框架，形式化了FAD和KAD作为上界受限的代理指标。提出了一个两阶段（无监督对比+Sinkhorn微调）的适配器训练范式，并提供了样本级诊断能力。
4.  结果：
    *   秩-1敏感性：在控制成本函数不变的实验中，当污染率ε=0.05时，Sinkhorn相对于FAD在8个编码器上的敏感性提升因子为1.9至3.6倍（见图1b）。
    *   因子分解：2x2因子分解实验表明，在低维嵌入（d≤512）中，成本修正（适配器）是主导因素；在高维中，成本与耦合的协同作用（synergy）更显著（见图2，表1）。
    *   诊断能力：在ε=0.05的交叉类别污染下，OTAD能通过样本传输代价$c_j$有效区分污染样本，AUROC≥0.86（见图3，表7）。
    *   人类对齐：在DCASE 2023 Task 7 Foley音效MOS评估中，OTAD的平均Spearman相关性在系统级（0.810）和每个类别级（0.602）均优于FAD（0.687, 0.496）和KAD（0.600, 0.310）（见图4，表8）。
5.  意义：为音频生成评估提供了一个更灵敏、可诊断的新指标`otadtk`，可作为现有管道的即插即用替代方案。其理论框架（二维原语分析）对理解其他FID类指标也有启发意义。
6.  局限：验证数据集限于环境音效（ESC-50）和特定Foley任务（DCASE），在音乐和语音领域的有效性未充分证明。适配器训练于FSD50K，存在领域偏见。对于如EnCodec等训练目标与音频质量相关的编码器，所有指标均表现不佳，说明距离度量修正存在上限。

### 🔗 开源详情

- 代码：https://github.com/wonwoo-jeong/otadtk
- 模型权重：论文中未提及模型权重的独立下载链接。根据论文描述，预训练的Riemannian适配器检查点（每个注册编码器模型一个）已捆绑在`otadtk`代码仓库中。
- 数据集：
    - FSD50K：用于训练适配器。
    - ESC-50：用于评估，未提及直接链接，为公开可用数据集。
    - DCASE 2023 Task 7 Foley Sound Synthesis：用于人类MOS评估，未提及直接链接，为公开基准测试。
- Demo：论文中未提及在线演示链接。
- 复现材料：论文中提供了详尽的复现信息。通过`otadtk` Python包提供，其中捆绑了所有9个编码器模型（共18个检查点）的预训练适配器，总大小约43MB。论文提供了安装方法、命令行用法和Python API示例，并明确指出仓库中包含用于生成论文中图表和表格的脚本（如`run_exp1_factorial.py`和`eval_dcase2023task7.py`），确保完全复现。
- 论文中引用的开源项目：
    - `kadtk`: 论文引用的Kernel Audio Distance工具包，链接为：https://github.com/sergioorozco/kadtk
    - `fadtk`: 论文提及作为参考实现的Fréchet Audio Distance工具包，但未直接提供链接。
    - 网络单纯形求解器：在实验中作为精确最优传输的参考，链接为：https://github.com/martius-lab/OT-Solver
    - 音频编码器：论文引用了以下开源编码器及其论文，但未提供其代码的直接链接：VGGish [17], EnCodec [9], CLAP [34], AudioMAE [20], PANNs [24], OpenL3 [6], AST [15], BEATs [3]。

### 🏗️ 方法概述和架构

本文核心方法是提出一个新的音频分布距离度量OTAD，其设计目标是同时改进FAD的两个核心组成部分（原语）：代价函数（Primitive 1）和耦合方式（Primitive 2）。

完整输入输出流程：
1.  输入：两组音频文件——参考集R和测试集T。
2.  编码：使用预训练且冻结的音频编码器（如PANNs, CLAP等）将每个音频转换为高维嵌入向量（如d=2048）。
3.  代价学习：在冻结的编码器后，接一个可训练的残差Riemannian适配器 $g_\theta(z) = z + f_\theta(z)$。这个适配器（一个两层MLP）将原始嵌入映射到新的空间。学习该适配器使得新的空间中，音频对之间的欧氏距离能更好地反映其感知差异（特别是对伪影敏感）。
4.  耦合计算：在由适配器变换后的嵌入空间上，计算两个点集之间的去偏Sinkhorn散度 $S_\varepsilon$，作为最终距离。这是一种熵正则化的最优传输距离，避免了高斯耦合假设，并提供了可分解的传输计划。
5.  输出：
    *   一个标量距离值OTAD(R, T)，用于分布级比较。
    *   （可选）对于每个测试样本$j$，一个诊断值$c_j$，表示其作为伪影样本的“嫌疑度”，通过其传输计划加权成本计算得到。

![Figure 1: Rank-1 sensitivity on ESC-50 (raw embeddings; coupling-only). Panel (a): log10(Sinkhorn/FAD) on PANNs (d=2048) after per-metric FR normalisation at ε=0.20; shaded band, ε≤0.05; y=0 marks parity. Panel (b): R1/FR (%), rank-1 at ε=0.05 vs. full-rank at ε=0.20, paired FAD vs. Sinkhorn over eight encoders sorted by d; Sinkhorn dominates FAD everywhere, and the gap broadens with the effective rank of the encoder spectra (which generally scales with d).](https://arxiv.org/html/2605.05554v1/x1.png)

主要组件与设计选择：
1.  残差Riemannian适配器：
    *   功能：学习一个局部度量扰动，以逃离冻结编码器诱导的代价函数不变性集。
    *   结构：$g_\theta(z) = z + f_\theta(z)$，其中$f_\theta$是一个两层瓶颈MLP（d→d/4→d，LayerNorm，GELU）。残差设计确保了初始化时接近恒等映射，学习过程是对原始度量的微调。
    *   数学解释（命题1）：适配器的雅可比矩阵$J_\theta$定义了嵌入空间中点处的拉回度量张量$M_\theta = J_\theta^\top J_\theta$，实现了局部Mahalanobis距离。这相当于在原始欧氏空间上引入了空间变化的曲率。
    *   训练：分为两个变体：
        *   $g_{\text{agnostic}}$：使用度量无关的三元组对比损失训练，确保代价函数的修正不依赖于后续的耦合方式。这对于公平的因子分解分析至关重要。
        *   $g_{\text{native}}$：以$g_{\text{agnostic}}$为初始化，直接用Sinkhorn散度作为损失进行微调，使代价函数与Sinkhorn耦合达到最大匹配，用于追求最佳性能。

2.  Sinkhorn最优传输耦合：
    *   功能：替代FAD的高斯耦合，以保留对秩-1污染的谱无关敏感性（定理1）。
    *   优势：计算上比精确OT更高效，且其去偏形式提供了样本级可分解性。
    *   超参数：正则化参数ε，控制传输的熵（平滑度）。实验发现最佳范围在[0.05, 0.10]。

3.  两阶段训练范式：第一阶段用无监督对比学习获得一个感知度量良好的适配器，第二阶段用Sinkhorn散度微调使其与特定耦合方式对齐。这种设计既保证了公平分解分析，又提供了高性能选项。

### 💡 核心创新点

1.  二维原语分析框架：将FAD和KAD等指标统一建模为受限的2-Wasserstein距离，并明确指出其缺陷分别源于代价原语（编码器不变性）和耦合原语（参数化假设）。这是理解FAD失败模式的首次系统理论化。
2.  代价原语的修正——残差Riemannian适配器：提出通过学习一个残差适配器来修正代价函数。这不同于以往仅更换编码器或固定编码器的方法，而是通过学习一个局部度量扰动，主动重塑嵌入空间以暴露伪影。理论证明了其与局部黎曼度量和密度重加权的联系（命题1，2）。
3.  耦合原语的修正——样本级诊断能力：通过采用离散最优传输（Sinkhorn）替代高斯耦合，不仅解决了秩-1稀释问题（定理1），还自然衍生出样本级诊断能力（通过$c_j$）。这是FAD等聚合指标在结构上无法提供的全新功能，对于调试生成模型极具价值。
4.  系统的实验验证与因子分解：设计了严谨的2x2因子实验，量化了代价修正、耦合修正及其交互作用在不同编码器和评估轴上的相对贡献，揭示了维度依赖的规律（低维代价主导，高维协同显著）。

![Figure 2: Average factor magnitudes |Δcost|, |Δmeas|, |Δsyn| over the four evaluation axes for each of eight encoders, sorted by embedding dimension (light vertical shading delineates d≤512, d=768, and d=2048 bands). Cost dominates at d≤512 (4/4 encoders); at d=768 behaviour is encoder-dependent (AudioMAE→synergy, AST mixed, BEATs cost-dominant); PANNs at d=2048 is synergy-dominant. Measure correction alone is never dominant.](https://arxiv.org/html/2605.05554v1/x2.png)

### 🔬 细节详述

- 训练数据：适配器在FSD50K数据集的训练集上训练（约200个类别，约37k个片段）。评估在ESC-50数据集（50类，2000个片段）上进行，训练集无重叠。人类MOS验证使用DCASE 2023 Task 7数据集。
- 损失函数：
    1.  $g_{\text{agnostic}}$训练损失：三元组对比损失 $\mathcal{L}_{\text{ctr}}=\sum_{(a,p,n)}\max(0, d_\theta(a,p) - d_\theta(a,n) + m)$，其中$m$为间隔。三元组基于四个感知探针（召回、语义、精度、结构）等比例采样。
    2.  $g_{\text{native}}$训练损失：Sinkhorn散度 $\mathcal{L}_{\text{native}}=S_\varepsilon(\{g_\theta(\Phi(x))\}_{x\in B_R}, \{g_\theta(\Phi(x))\}_{\tilde{x}\in B_T})$。
- 训练策略：每个编码器独立训练一个适配器。优化器、学习率等具体训练超参数未在正文中详细说明，但承诺在附录和代码中提供。
- 关键超参数：
    - 适配器结构：两层瓶颈MLP，瓶颈维度为d/4。参数量约为$d^2/2$（如PANNs d=2048，适配器参数约2.1M）。
    - Sinkhorn正则化参数ε：扫描范围[0.01, 1.00]，最佳性能在[0.05, 0.10]。
    - 三元组损失间隔$m$：未说明。
- 训练硬件：未说明。
- 推理细节：评估时，适配器与冻结编码器串联前向传播。计算Sinkhorn散度时使用去偏形式以避免自距离偏差。

### 📊 实验结果

主要Benchmark与指标：
- 控制性评估：ESC-50数据集上的秩-1污染实验（指标：Sinkhorn/FAD比率，R1/FR%）。
- 人类相关性评估：DCASE 2023 Task 7 Foley音效数据集（指标：与音频质量MOS的Spearman相关系数$\rho$）。
- 诊断能力评估：ESC-50上的AUROC和分离比。

与基线对比：
- 秩-1敏感性（图1b）：在ε=0.05的秩-1污染下，Sinkhorn的R1/FR比率（反映相对于自身全秩响应的敏感度）在所有8个编码器上显著高于FAD。例如，在PANNs (d=2048)上，Sinkhorn的R1/FR约为1.0%，而FAD约为0.3%（图1a显示其绝对差异可达一个数量级）。KAD在此设置下表现接近噪声。
- 人类MOS相关性（图4，表8）：
    - 系统级 (n=9)：OTAD-agnostic平均$\rho$=0.810，优于FAD (0.687) 和KAD (0.600)。
    - 每个类别级 (n=63)：优势更明显，OTAD-agnostic平均$\rho$=0.602，显著高于FAD (0.496) 和KAD (0.310)。KAD在此粒度下性能崩溃。
- 诊断能力（图3，表7）：在ε=0.05的交叉类别污染（最具挑战性）下，OTAD在所有5个主要编码器上的AUROC均≥0.86，分离比（污染样本平均代价/干净样本平均代价）均大于10。例如，VGGish的AUROC为0.9969，分离比为63.82。

关键消融/分析实验：
1.  2x2因子分解（图2，表1）：使用$g_{\text{agnostic}}$解耦了代价与耦合的影响。
    - 低维 (d≤512)：代价修正（$\Delta_{\text{cost}}$）是主导��素（VGGish, EnCodec, CLAP, OpenL3共4/4编码器）。
    - 高维 (d≥768)：结果与编码器相关。PANNs (d=2048)显示协同作用（$\Delta_{\text{syn}}$）主导（4/4轴）；AudioMAE (d=768)在3/4轴显示协同主导；BEATs (d=768)则仍是代价主导。
    - 核心发现：仅修正耦合（从高斯到Sinkhorn）而未修正代价，带来的提升（$\Delta_{\text{meas}}$）在所有编码器上都是最小的，从未超过0.16。

2.  适配器变体对比（表3）：使用$g_{\text{native}}$时，所有编码器均变为代价主导，且Sinkhorn散度值大幅下降（如CLAP降至0），证实其专门优化了与Sinkhorn的匹配，不适合作为公平分解的工具。

![Figure 3: Per-sample transport costs c_j on ESC-50 under cross-class contamination (ε=0.05), normalised to the clean median per encoder (AUROC and mean separation ratios are tabulated in Appendix B.5).](https://arxiv.org/html/2605.05554v1/x3.png)

![Figure 4: Mean Spearman correlation between distributional metrics and human MOS on DCASE 2023 Task 7 (audio-quality axis), averaged over the five perceptually competent encoders (faint background lines show individual encoders; EnCodec is excluded from the means). OTAD outperforms FAD and KAD at both granularities; the margin widens at per-category granularity, where KAD’s correlation collapses below FAD.](https://arxiv.org/html/2605.05554v1/x4.png)

### ⚖️ 评分理由

- 学术质量：6.0/7 - 创新性强（二维原语框架、代价修正方法），理论推导严谨（定理1，命题1,2），实验设计全面（控制实验、因子分解、诊断能力验证、人类MOS对齐），证据链完整可信。主要扣分点在于验证场景相对单一，对不同音频领域（音乐、语音）的泛化能力未充分论证。
- 选题价值：1.0/2 - 针对音频生成评估中的一个具体但重要的痛点（对罕见伪影不敏感）提出解决方案，具有明确的应用价值和改进效果。但问题属于评估指标的方法学优化，而非开创全新任务或范式，因此潜在影响力和应用广度有一定限制。
- 开源与复现加成：0.5/1 - 提供了完整的开源工具包`otadtk`，包含预训练适配器、清晰的CLI和API，并承诺提供所有实验脚本。复现信息充分，工具设计为即插即用，极大便利了社区验证和使用。但适配器训练的具体超参数细节在正文中未完全列出。

---

[← 返回 2026-05-08 论文速递](/audio-paper-digest-blog/posts/2026-05-08/)
