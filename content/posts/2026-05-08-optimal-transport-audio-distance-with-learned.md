---
title: "Optimal Transport Audio Distance with Learned Riemannian Ground Metrics"
date: 2026-05-08
draft: false
tags: [音频质量评估, 最优传输, 模型评估, 开源工具]
categories: [论文速递]
description: "音频质量评估 | 7.0/10"
hiddenInHomeList: true
---

# 📄 Optimal Transport Audio Distance with Learned Riemannian Ground Metrics

#音频质量评估 #最优传输 #模型评估 #开源工具

✅ **7.0/10** | 前10% | #音频质量评估 | #最优传输 | #模型评估 #开源工具 | [arxiv](https://arxiv.org/abs/2605.05554v1)

学术质量 6.5/7 | 选题价值 1.8/2 | 复现加成 0.8 | 置信度 高


### 👥 作者与机构

- 第一作者：Wonwoo Jeong (Sogang University)
- 通讯作者：Wonwoo Jeong (Sogang University)
- 作者列表：Wonwoo Jeong (Sogang University)

### 💡 毒舌点评

亮点：论文构建了一个扎实的理论框架（将FAD解耦为“成本原语”和“耦合原语”两个受约束的原语），并通过系统的消融实验（2x2因子分解）和开源工具（otadtk）将理论落地，说服力较强。实验设计严谨，覆盖了从理论极限（精确OT）到实用方案（Sinkhorn），并在八个编码器上验证了结论的普适性。
短板：方法本质上是在现有冻结编码器之上学习一个轻量适配器，其上限严重受限于上游表征质量（如EnCodec案例所示，MOS相关性在每个指标下都很弱）。此外，论文的核心理论贡献（定理1）严格针对“秩-1”污染，这是一种特定的理想化故障模式；其预测的有效秩衰减效应在真实世界复杂、多模态的伪影下的表现，需要进一步验证。

### 📌 核心摘要

这篇论文旨在解决当前主导的音频生成评估指标Fréchet Audio Distance (FAD)在检测稀有但严重的质量缺陷（如尖锐噪声、重复片段）时存在的结构性缺陷。作者从最优传输理论出发，指出FAD作为2-Wasserstein距离的受限替代品，在“成本原语”（使用冻结编码器的欧氏距离，存在感知不变集）和“耦合原语”（使用高斯拟合，会通过谱相关因子稀释秩-1异常值的信号）上均存在限制。为此，论文提出了Optimal Transport Audio Distance (OTAD)，通过两个核心机制进行纠正：1）一个残差Riemannian适配器，学习局部度量以逃离编码器不变性；2）使用熵正则化的Sinkhorn最优传输作为耦合。实验证明，在八个编码器上，仅更换耦合方式（Sinkhorn）对秩-1异常值的敏感度就比FAD高1.9至3.6倍。在DCASE 2023 Task 7的人类MOS评分相关性上，OTAD（使用`g_agnostic`适配器）在系统级和逐类别粒度上均优于FAD和KAD，但在EnCodec编码器上所有指标均失效。作为离散传输计划的内在优势，OTAD还能提供AUROC ≥ 0.86的样本级诊断能力，这是标量或核聚合指标在结构上无法提供的。

### 🔗 开源详情

- 代码：
  - 仓库地址：https://github.com/wonwoo-jeong/otadtk
  - 论文明确指出，该工具包作为现有流程的“即插即用”替代品发布，并在项目托管计划中重申了GitHub地址。

- 模型权重：
  - 论文中未提及在HuggingFace、ModelScope等平台的外部链接。
  - 论文指出，发布的`otadtk`工具包捆绑了所有9个编码器的两组预训练适配器检查点（总计约43MB），随代码一同分发。安装后即可直接使用，无需额外下载。

- 数据集：
  - 训练数据集：FSD50K（200类，约37k音频片段）。论文中未提及获取链接。
  - 评估数据集：ESC-50（50类，2000个音频片段）。论文中未提及获取链接。

- Demo：
  - 论文中未提及。

- 复现材料：
  - 训练配置：论文详细说明了适配器（residual MLP）的架构、训练损失（`ℒ_ctr` 和 `ℒ_native`）、训练策略（两阶段训练 `g_agnostic` 和 `g_native`）以及超参数（如dropout 0.1，Sinkhorn正则化 `ε_reg ∈ [0.05, 0.10]`）。
  - 完整附录：包含所有定理的证明（附录A）、详细的实验设置（附录B.1）、补充编码器信息（附录B.4）、以及所有主要实验的逐编码器、逐轴线的详细数值结果表格（附录B.5，对应正文的表格5-10）。
  - 复现脚本：论文在“Reproducibility”部分说明，随代码提供了用于生成图1、表1、样本诊断（5.4节）和MOS相关性（5.5节）的原始驱动脚本（`run_exp1_factorial.py` 和 `eval_dcase2023task7.py`）。
  - 验证脚本：提供了用于验证`kadtk`兼容性的脚本 `scripts/verify_kadtk_equivalence.py`。
  - 检查点完整性：在 `otadtk/checkpoints/MANIFEST.json` 中记录了所有捆绑检查点的SHA-256哈希值，用于审计和验证。

- 论文中引用的开源项目：
  - `fadtk`：用于计算FAD的基线工具包，论文中通过链接引用。链接：https://github.com/MTG/fadtk
  - `kadtk`：用于计算KAD的工具包，论文中通过链接引用。链接：https://github.com/marl/kadtk
  - PyTorch：作为主要的深度学习框架。
  - torchaudio：用于音频处理的PyTorch库。
  - einops：用于张量操作的库。
  - encodec：Meta的神经音频编解码器，作为实验中的编码器之一。链接：https://github.com/facebookresearch/encodec
  - openl3：音频-视觉对应编码器，作为补充编码器之一。链接：https://github.com/librosa/openl3
  - transformers：Hugging Face库，作为补充编码器（如AST, BEATs）的依赖。链接：https://github.com/huggingface/transformers

- 补充链接（自动提取）：
  - 代码仓库：https://github.com/wonwoo-jeong/otadtk/blob/main/figs/fig1a.png
  - 代码仓库：https://github.com/wonwoo-jeong/otadtk/blob/main/figs/fig1b.png
  - 代码仓库：https://github.com/wonwoo-jeong/otadtk/blob/main/figs/fig2.png
  - 代码仓库：https://github.com/wonwoo-jeong/otadtk/blob/main/figs/fig3.png
  - 代码仓库：https://github.com/wonwoo-jeong/otadtk/blob/main/figs/fig4.png

### 🏗️ 方法概述和架构

OTAD是一个用于音频生成评估的指标，其核心思想将评估过程建模为在学习到的度量空间上计算两个分布（参考音频集R与生成音频集T）之间的最优传输距离。整个流程是端到端的：输入是参考和生成音频文件的集合，经过一个预训练的冻结编码器提取嵌入特征，然后通过一个可学习的Riemannian适配器对特征进行变换，最后使用熵正则化的Sinkhorn算法计算离散最优传输距离作为最终得分。

该方法的架构包含两个核心组件，共同纠正FAD的两个原语缺陷：

1.  成本原语纠正：残差Riemannian适配器 (gθ)
    *   功能：该适配器旨在学习一个从冻结编码器输出的欧氏嵌入空间到新的度量空间的映射，以纠正编码器本身感知盲区（η-不变集）带来的成本度量缺陷。
    *   内部结构/实现：适配器被参数化为一个残差网络：`gθ(z) = z + fθ(z)`。其中`fθ(z)`是一个轻量级的两层瓶颈MLP（维度变换：d → d/4 → d），包含LayerNorm、GELU激活和dropout(0.1)。根据论文的命题1，这种残差设计在数学上诱导了一个局部的Riemannian度量张量`Mθ(z) = Jθ(z)ᵀ Jθ(z)`，其中`Jθ(z)`是`gθ`的雅可比矩阵。在恒等初始化附近，这个度量是对欧氏度量的微小扰动`Mθ = I + (Jfθᵀ + Jfθ) + Jfθᵀ Jfθ`，允许学习在特定区域扭曲空间几何结构，暴露原始编码器无法感知的伪影。命题2进一步指出，雅可比行列式`|det Jθ(z)|⁻¹`对概率密度进行逐点重新加权，补偿了局部体积变化，从而实现概率质量的重新分布。
    *   输入输出：输入是冻结编码器Φ输出的d维嵌入向量`z = Φ(x)`，输出是相同维度的变换后向量`gθ(z)`。
    *   训练：适配器在FSD50K数据集的训练集上训练，有两种变体：
        *   g_agnostic：使用度量无关的三元组对比损失进行训练，`L_ctr = Σ max(0, dθ(a,p) - dθ(a,n) + m)`，其中`dθ(a,b) = ||gθ(Φ(a)) - gθ(Φ(b))||²`。三元组样本按照四个感知轴（召回、语义、精度、结构）均衡采样。这确保了适配器学习的成本修正与后续使用的耦合方法（FAD或Sinkhorn）无关，用于公平的因子分解实验。
        *   g_native：在`g_agnostic`的基础上，使用Sinkhorn散度损失`L_native = Sε(...)`进行微调，旨在最大化与感知质量的相关性，但不适合公平分解，因为它会重塑嵌入空间以偏向Sinkhorn耦合。

2.  耦合原语纠正：熵正则化最优传输 (Sinkhorn OT)
    *   功能：用离散的最优传输计划替代FAD的高斯耦合，以保留对低秩（秩-1）异常值的完整敏感性，避免信息稀释。
       内部结构/实现：使用去偏Sinkhorn散度`Sε`作为耦合方法。它通过迭代求解熵正则化的最优传输问题，得到一个离散的传输计划矩阵`T`。对于每个生成样本`j`，其边际传输成本`c_j = Σ_i T_ij  ||gθ(Φ(x_i)) - gθ(Φ(̃x_j))||²`可以直接计算，这使得OTAD能够提供样本级诊断。论文定理1严格证明了，在秩-1污染下，FAD/W2²的比率受编码器频谱有效秩`reff(Σ)`控制，而离散OT（及其Sinkhorn近似）保留了与`reff`无关的Θ(εT)尺度。
    *   输入输出：输入是经过适配器变换后的参考集嵌入`{gθ(Φ(x))}_{x∈R}`和生成集嵌入`{gθ(Φ(̃x))}_{̃x∈T}`，输出是最终的标量距离值`OTAD(R, T)`以及可选的传输计划矩阵。

组件间的数据流与交互：原始音频 → 冻结编码器(Φ) → 嵌入(z) → 残差适配器(gθ) → 变换后嵌入 → Sinkhorn OT算法 → 标量距离得分(OTAD)。两个组件的解耦设计使得可以进行2x2因子实验，以分别评估成本修正和耦合修正的贡献。

关键设计选择及动机：选择残差适配器而非全新编码器，是为了保持对现有评估流水线的兼容性（作为“即插即用”替代品），并利用预训练编码器的基础表征。选择Sinkhorn OT而非精确OT，是为了在保持离散OT对异常值敏感度的同时，获得计算上的可扩展性（对于N≤2000，比FAD快一个数量级）。

### 💡 核心创新点

1.  两原语分析框架：将FAD和KAD等指标形式化为受约束的2-Wasserstein距离，明确指出其缺陷源于“成本原语”（编码器诱导的不变集）和“耦合原语”（高斯拟合导致的秩-1稀释）。该理论框架系统地解释了现有指标的失败模式。
2.  残差Riemannian适配器：首次为音频评估指标引入学习度量的方法。通过一个轻量级的残差MLP，动态地扭曲嵌入空间的几何结构（命题1），并重新加权概率密度（命题2），以暴露冻结编码器无法感知的伪影，直接纠正了成本原语的缺陷。
3.  Sinkhorn OT耦合与样本级诊断：用熵正则化的离散最优传输替代高斯耦合，不仅恢复了对低秩异常值的理论最优敏感性（如定理1和图1所示），还自然提供了传输计划，使得每个生成样本都能获得一个诊断成本`c_j`（如图3所示），实现了“哪个样本有问题、问题多严重”的诊断能力，这是FAD等标量指标在结构上无法提供的。
4.  系统性因子分解实验：设计了一个严谨的2x2因子实验（成本：原始 vs. 适配器；耦合：高斯 vs. Sinkhorn），使用`g_agnostic`适配器以公平地分解成本修正、耦合修正及其交互作用的贡献。结果（图2，表1）表明成本修正在低维编码器中占主导，而高维编码器中则更依赖于协同效应，且单独的耦合修正从未占主导。
5.  作为可复现实现的开源工具包：发布了`otadtk`，一个包含多个预训练适配器的Python工具包，可直接作为现有评估流水线的替代品，极大提升了方法的可用性和可复现性。

### 📊 实验结果

实验设置
所有适配器均在 FSD50K 训练集（200个类别，约37,000个片段）上进行训练，并在 ESC-50 数据集（50个类别，2,000个片段，未参与训练）上进行评估。评估遵循四个感知轴：召回（同类不同实例）、语义（跨类别替换）、精度（不同信噪比的高斯噪声）、结构（带交叉淡入淡出的时间片段洗牌）。主要评估的五个编码器为 VGGish (d=128), EnCodec (d=128), CLAP (d=512), AudioMAE (d=768), PANNs (d=2048)。补充评估了 OpenL3 (d=512), AST (d=768), BEATs (d=768)。

5.2 秩-1污染下的异常值敏感性
本节在固定成本函数（无适配器）的条件下，仅改变耦合方式，以隔离耦合原语的效果。图1显示了在ESC-50数据集上、使用原始嵌入时的结果。
*   图1 (a) ：在PANNs编码器 (d=2048) 上，每个指标的秩-1响应相对于其在 ε=0.20 时的全秩基线进行了归一化，然后取以10为底的对数。阴影区域代表现实的TTA模式崩溃区域 (ε≤0.05)。
    ![图1a: PANNs编码器上Sinkhorn与FAD在秩-1污染下的对数比值](https://github.com/wonwoo-jeong/otadtk/blob/main/figs/fig1a.png)
*   图1 (b) ：在 ε=0.05 时，所有八个编码器的秩-1敏感性比率 (R1/FR)。该比率计算为秩-1响应 (ε=0.05) 除以全秩响应 (ε=0.20)。
    ![图1b: 所有编码器的R1/FR比率对比](https://github.com/wonwoo-jeong/otadtk/blob/main/figs/fig1b.png)

关键结论： 在全秩污染下，所有OT指标（Sinkhorn, Exact OT）归一化后一致，高斯假设偏差可忽略。然而，在秩-1污染（模拟模式崩溃）下，FAD因其高斯耦合而产生严重稀释。Sinkhorn的R1/FR比率在所有编码器上均显著高于FAD（高1.9至3.6倍），且该优势随嵌入维度增加而扩大，这与定理1预测的频谱依赖性衰减一致。KAD在此条件下波动于零附近，无法检测异常。

*   Table 5: 秩-1敏感性数据 (ε=0.05)，R1/FR = (ε=0.05的秩-1响应) / (ε=0.20的全秩响应)
    | Encoder | d | FAD R1/FR | FAD/EOT (R1) | Sink R1/FR | Sink/EOT (R1) |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | VGGish | 128 | 0.9% | 23.8% | 2.4% | 41.5% |
    | EnCodec | 128 | 0.2% | 50.1% | 0.4% | 48.9% |
    | OpenL3 | 512 | 0.5% | 25.1% | 1.6% | 44.8% |
    | CLAP | 512 | 0.5% | 17.4% | 1.0% | 21.0% |
    | AudioMAE | 768 | 0.1% | 22.2% | 0.5% | 43.0% |
    | AST | 768 | 0.2% | 23.1% | 0.6% | 42.3% |
    | BEATs | 768 | 0.4% | 36.4% | 0.9% | 43.9% |
    | PANNs | 2,048 | 0.3% | 21.5% | 1.0% | 39.3% |

5.3 成本与耦合效应的2x2因子分解
本实验同时变化成本函数（原始Φ vs. 适配器 g_agnostic∘Φ）和耦合方法（高斯 vs. Sinkhorn），形成2x2设计，以分解OTAD改进的来源。图2展示了每个编码器在四个评估轴上因子幅值的平均值。表1总结了结果范围和主导因子。
*   图2：每个编码器在四个评估轴上的平均因子幅值 |Δcost|, |Δmeas|, |Δsyn|。
    ![图2: 因子幅值分解图](https://github.com/wonwoo-jeong/otadtk/blob/main/figs/fig2.png)

关键结论： 1) 在低维编码器 (d≤512) 上，成本修正（|Δcost|）是主导因素。2) 在高维编码器 (d≥768) 上，行为因编码器而异：AudioMAE和PANNs表现为协同效应（|Δsyn|）主导；AST表现为混合；BEATs仍为成本主导。3) 单独的耦合修正（|Δmeas|）在所有编码器上效果最小，从未超过0.16。这表明仅仅将FAD的高斯耦合换成Sinkhorn，而不同时修正成本，收效甚微。

*   Table 1: 使用 g_agnostic 的2x2因子分解总结。范围显示了各因子在四个评估轴上的幅值。 “Dom.” 报告最频繁的主导因子及其占优的轴数。
    | Encoder | d | |Δcost| range | |Δmeas| range | |Δsyn| range | Dom. (axes) |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | VGGish | 128 | 0.11–0.33 | 0.02–0.09 | 0.04–0.17 | COST (3/4) |
    | EnCodec | 128 | 0.22–0.69 | 0.02–0.08 | 0.03–0.17 | COST (4/4) |
    | CLAP | 512 | 0.00–0.17 | 0.00–0.08 | 0.03–0.16 | COST (3/4) |
    | OpenL3 | 512 | 0.02–0.33 | 0.00–0.10 | 0.01–0.21 | COST (3/4) |
    | AudioMAE | 768 | 0.00–0.04 | 0.00–0.03 | 0.02–0.06 | SYN (3/4) |
    | AST | 768 | 0.00–0.09 | 0.00–0.02 | 0.00–0.05 | MIXED (2C/2S) |
    | BEATs | 768 | 0.36–0.59 | 0.05–0.16 | 0.10–0.32 | COST (4/4) |
    | PANNs | 2,048 | 0.03–0.07 | 0.02–0.06 | 0.03–0.12 | SYN (4/4) |

*   Table 6: 使用 g_agnostic 的2x2因子分解详细数据（对数归一化后的 Δ）。
    | Encoder | Axis | Δcost | Δmeas | Δsyn | FAD% | Sink% | Dom. |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | VGGish | Recall | -0.24 | +0.05 | +0.09 | -29 | -22 | COST |
    | VGGish | Semantic | -0.33 | +0.08 | +0.16 | -41 | -26 | COST |
    | VGGish | Precision | -0.18 | +0.02 | +0.04 | -30 | -24 | COST |
    | VGGish | Structural | -0.11 | +0.09 | +0.17 | -20 | -2 | SYN |
    | EnCodec | Recall | -0.69 | +0.06 | +0.11 | -78 | -80 | COST |
    | EnCodec | Semantic | -0.65 | -0.08 | -0.17 | -57 | -77 | COST |
    | EnCodec | Precision | -0.54 | -0.02 | -0.03 | -91 | -90 | COST |
    | EnCodec | Structural | -0.22 | +0.05 | +0.09 | -27 | -19 | COST |
    | OpenL3 | Recall | -0.02 | -0.01 | -0.02 | -1 | -8 | SYN |
    | OpenL3 | Semantic | -0.05 | -0.01 | -0.02 | -4 | -9 | COST |
    | OpenL3 | Precision | -0.03 | +0.00 | +0.01 | -15 | -11 | COST |
    | OpenL3 | Structural | -0.33 | +0.10 | +0.21 | -74 | -49 | COST |
    | CLAP | Recall | +0.00 | -0.00 | +0.03 | -2 | +2 | SYN |
    | CLAP | Semantic | +0.08 | -0.03 | +0.05 | +5 | +11 | COST |
    | CLAP | Precision | -0.14 | +0.04 | +0.07 | -19 | -11 | COST |
    | CLAP | Structural | -0.17 | +0.08 | +0.16 | -25 | -8 | COST |
    | AudioMAE | Recall | +0.01 | +0.01 | -0.03 | +3 | -2 | SYN |
    | AudioMAE | Semantic | +0.00 | +0.00 | -0.04 | +2 | -2 | SYN |
    | AudioMAE | Precision | -0.04 | +0.01 | +0.02 | -20 | -11 | COST |
    | AudioMAE | Structural | -0.04 | +0.03 | +0.06 | -16 | -3 | SYN |
    | AST | Recall | +0.05 | -0.00 | +0.00 | +8 | +15 | COST |
    | AST | Semantic | +0.09 | +0.00 | -0.00 | +11 | +16 | COST |
    | AST | Precision | +0.00 | -0.00 | +0.04 | -5 | +7 | SYN |
    | AST | Structural | +0.02 | -0.02 | +0.05 | -2 | +13 | SYN |
    | BEATs | Recall | -0.36 | -0.13 | -0.27 | -23 | -52 | COST |
    | BEATs | Semantic | -0.36 | -0.16 | -0.32 | -20 | -53 | COST |
    | BEATs | Precision | -0.59 | +0.06 | +0.12 | -71 | -61 | COST |
    | BEATs | Structural | -0.56 | +0.05 | +0.10 | -63 | -56 | COST |
    | PANNs | Recall | -0.04 | +0.03 | +0.06 | -10 | -1 | SYN |
    | PANNs | Semantic | -0.03 | +0.02 | +0.03 | -5 | -2 | SYN |
    | PANNs | Precision | -0.04 | +0.02 | +0.05 | -20 | -6 | SYN |
    | PANNs | Structural | -0.07 | +0.06 | +0.12 | -28 | -4 | SYN |

5.4 样本级诊断能力
在 ε=0.05 的受控污染实验中，OTAD通过每个样本的传输成本 `c_j` 进行检测。图3可视化了每种污染类型下 `c_j` 的分布（清洁中位数归一化为1）。表7总结了核心指标。
*   图3：跨类别替换污染 (ε=0.05) 下每种编码器的样本级传输成本 `c_j` 分布。
    ![图3: 样本级诊断箱线图](https://github.com/wonwoo-jeong/otadtk/blob/main/figs/fig3.png)

关键结论： OTAD不仅能判断分布差异，还能指出具体哪些样本有问题。对于高斯噪声和静音插入，所有编码器的检测达到完美AUROC=1.0。对于最具挑战性的跨类别替换（真实但错误类别的音频），AUROC仍保持在0.86至1.00之间，表明其强大的细粒度诊断能力。

*   Table 7: 样本诊断数据 (ε=0.05)，AUROC 与分离比（受污染样本平均成本/清洁样本平均成本）。
    | Encoder | Gaussian AUROC | Gaussian Sep. | Cross-class AUROC | Cross-class Sep. | Silence AUROC | Silence Sep. |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | VGGish | 1.0000 | 1428.53 | 0.9969 | 63.82 | 1.0000 | 119.58 |
    | EnCodec | 1.0000 | 320575.96 | 0.9642 | 35.93 | 1.0000 | 14581.02 |
    | CLAP | 1.0000 | 450.84 | 0.9951 | 10.04 | 1.0000 | 22.16 |
    | AudioMAE | 1.0000 | 115228.23 | 0.8632 | 53.42 | 1.0000 | 59318.63 |
    | PANNs | 1.0000 | 15841.46 | 0.8966 | 43.25 | 1.0000 | 6503.23 |

5.5 与人类MOS的相关性（DCASE 2023 Task 7）
在音频质量MOS上，OTAD（使用 `g_agnostic`）在两个粒度上均优于FAD和KAD。图4展示了平均Spearman ρ的变化趋势。表8提供了详细的逐编码器数据。
*   图4：DCASE 2023 Task 7音频质量MOS上，各分布指标的平均Spearman相关系数。
    ![图4: 与MOS的Spearman相关系数对比](https://github.com/wonwoo-jeong/otadtk/blob/main/figs/fig4.png)

关键结论： OTAD-agnostic在系统级 (n=9) 和逐类别 (n=63) 粒度上均取得最高的平均相关性。尤其值得注意的是，在细粒度的逐类别评估中，KAD的相关性显著下降至FAD以下，而OTAD保持稳定，这证实了其成本侧修正带来的感知对齐优势。EnCodec是所有指标的例外，相关性都很弱或为负。

*   Table 8: 与音频质量MOS的Spearman ρ（符号翻转，越高越好）。
    | Granularity | Encoder | FAD | KAD | OTAD-raw | OTAD-agn | OTAD-nat |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | System (n=9) | VGGish | 0.367 | 0.350 | 0.450 | 0.600 | 0.250 |
    | System (n=9) | PANNs-CNN14 | 0.800 | 0.483 | 0.850 | 0.850 | 0.717 |
    | System (n=9) | PANNs-WGLM | 0.800 | 0.733 | 0.817 | 0.817 | 0.350 |
    | System (n=9) | CLAP | 0.733 | 0.750 | 0.800 | 0.917 | 0.733 |
    | System (n=9) | AudioMAE | 0.733 | 0.683 | 0.817 | 0.867 | 0.667 |
    | System (n=9) | EnCodec | -0.083 | -0.083 | -0.017 | -0.117 | -0.117 |
    | System (n=9) | mean (5 perc.) | 0.687 | 0.600 | 0.747 | 0.810 | 0.543 |
    | Per-cat (n=63) | VGGish | 0.113 | 0.075 | 0.117 | 0.266 | 0.087 |
    | Per-cat (n=63) | PANNs-CNN14 | 0.451 | 0.375 | 0.554 | 0.671 | 0.266 |
    | Per-cat (n=63) | PANNs-WGLM | 0.542 | 0.394 | 0.635 | 0.628 | 0.182 |
    | Per-cat (n=63) | CLAP | 0.677 | 0.314 | 0.705 | 0.684 | 0.518 |
    | Per-cat (n=63) | AudioMAE | 0.697 | 0.389 | 0.715 | 0.761 | 0.545 |
    | Per-cat (n=63) | EnCodec | 0.059 | -0.120 | 0.069 | 0.025 | 0.068 |
    | Per-cat (n=63) | mean (5 perc.) | 0.496 | 0.310 | 0.545 | 0.602 | 0.319 |

*   Table 9: 与类别适配MOS的Spearman ρ（符号翻转，越高越好）。
    | Granularity | FAD | KAD | OTAD-raw | OTAD-agn | OTAD-nat |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | System (n=9), mean (5 perc.) | 0.687 | 0.620 | 0.750 | 0.793 | 0.517 |
    | Per-cat (n=63), mean (5 perc.) | 0.497 | 0.296 | 0.542 | 0.622 | 0.280 |

5.6 设计与效率分析
两阶段训练验证： `g_native` (使用Sinkhorn损失微调) 会导致所有编码器变为成本主导，并使Sinkhorn发散值坍缩，表明它不适合用于公平的因子分解分析（数据见附录B.2 Table 3）。
Sinkhorn正则化扫描： 正则化参数 ε_reg 在 [0.05, 0.10] 范围内效果最佳。

*   Table 10: 在CLAP编码器上（g_agnostic，语义轴，ε=0.05），不同 ε_reg 下的Sinkhorn散度。
    | ε_reg | 0.01 | 0.05 | 0.10 | 0.50 | 1.00 |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | Sinkhorn divergence | 0.04786 | 0.03761 | 0.01652 | 0.00025 | 0.00012 |

效率说明： 对于样本量 N≤2,000 的情况，在标准GPU上，Sinkhorn的计算速度比FAD（受CPU限制的矩阵平方根运算约束）快一个数量级。

## 开源详情
- 代码：
  - 仓库地址：https://github.com/wonwoo-jeong/otadtk
  - 论文明确指出，该工具包作为现有流程的“即插即用”替代品发布，并在项目托管计划中重申了GitHub地址。

- 模型权重：
  - 论文中未提及在HuggingFace、ModelScope等平台的外部链接。
  - 论文指出，发布的`otadtk`工具包捆绑了所有9个编码器的两组预训练适配器检查点（总计约43MB），随代码一同分发。安装后即可直接使用，无需额外下载。

- 数据集：
  - 训练数据集：FSD50K（200类，约37k音频片段）。论文中未提及获取链接。
  - 评估数据集：ESC-50（50类，2000个音频片段）。论文中未提及获取链接。

- Demo：
  - 论文中未提及。

- 复现材料：
  - 训练配置：论文详细说明了适配器（residual MLP）的架构、训练损失（`ℒ_ctr` 和 `ℒ_native`）、训练策略（两阶段训练 `g_agnostic` 和 `g_native`）以及超参数（如dropout 0.1，Sinkhorn正则化 `ε_reg ∈ [0.05, 0.10]`）。
  - 完整附录：包含所有定理的证明（附录A）、详细的实验设置（附录B.1）、补充编码器信息（附录B.4）、以及所有主要实验的逐编码器、逐轴线的详细数值结果表格（附录B.5，对应正文的表格5-10）。
  - 复现脚本：论文在“Reproducibility”部分说明，随代码提供了用于生成图1、表1、样本诊断（5.4节）和MOS相关性（5.5节）的原始驱动脚本（`run_exp1_factorial.py` 和 `eval_dcase2023task7.py`）。
  - 验证脚本：提供了用于验证`kadtk`兼容性的脚本 `scripts/verify_kadtk_equivalence.py`。
  - 检查点完整性：在 `otadtk/checkpoints/MANIFEST.json` 中记录了所有捆绑检查点的SHA-256哈希值，用于审计和验证。

- 论文中引用的开源项目：
  - `fadtk`：用于计算FAD的基线工具包，论文中通过链接引用。链接：https://github.com/MTG/fadtk
  - `kadtk`：用于计算KAD的工具包，论文中通过链接引用。链接：https://github.com/marl/kadtk
  - PyTorch：作为主要的深度学习框架。
  - torchaudio：用于音频处理的PyTorch库。
  - einops：用于张量操作的库。
  - encodec：Meta的神经音频编解码器，作为实验中的编码器之一。链接：https://github.com/facebookresearch/encodec
  - openl3：音频-视觉对应编码器，作为补充编码器之一。链接：https://github.com/librosa/openl3
  - transformers：Hugging Face库，作为补充编码器（如AST, BEATs）的依赖。链接：https://github.com/huggingface/transformers

---

[← 返回 2026-05-08 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-05-08/)
