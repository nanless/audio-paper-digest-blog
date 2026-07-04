---
title: "Rethinking Attention in Spiking Transformers: Overcoming Density Bias with Set Similarity"
date: 2026-07-04
draft: false
tags: [音频分类, Transformer]
categories: [icml-2026]
description: "音频分类 | 3.6/10"
hiddenInHomeList: true
---

# 📄 Rethinking Attention in Spiking Transformers: Overcoming Density Bias with Set Similarity

#音频分类 #Transformer

**3.6/10** | 创新 0.8/2 | 严谨 0.6/1.5 | 实验 0.5/1.5 | 清晰 0.6/1 | 影响 0.3/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 0.5/1.5

📝 **3.6/10** | 后50% | #音频分类 | #Transformer | [arxiv](https://openreview.net/forum?id=8clCPAImE3)


### 👥 作者与机构

- 第一作者：JinGyo Lim（首尔科学技术大学人工智能应用系）
- 通讯作者：Seong-Eun Kim（首尔科学技术大学人工智能应用系）
- 作者列表：JinGyo Lim、Seung Gyu Jeong、Seong-Eun Kim（均来自首尔科学技术大学人工智能应用系）

### 💡 毒舌点评

这篇论文的Dice系数归一化思路简洁有效，用一个集合相似度指标解决了SNN-Transformer中长期被忽视的脉冲密度偏差问题——这是论文的唯一亮点。但令人失望的是，研究者在证明这一想法的有效性上投入不足，实验设计存在多处理论与实证断裂：能量估算基于十年前的45nm工艺，对现代神经形态硬件毫无参考价值；与音频SOTA（DTF-AT 0.187 mAP）的差距（-2.6个点）在不同汇报范式和训练设置下无法公平比较，却仍然声称“narrowing the gap”；CIFAR-100上的微弱提升（+0.59pp/+0.26pp）仅有两个模型实验，既无统计检验也无ImageNet验证，远不足以声称“broader applicability”。在缺乏代码、模型和硬件验证的现状下，这是一篇有闪光想法但工程和科学严谨性均未达标的半成品。

### 📌 核心摘要

该论文针对脉冲Transformer中普遍存在的“密度偏差”问题——即现有脉冲注意力机制（点积或哈达玛积）的得分与脉冲发放率高度相关，导致高发放率神经元即使不含语义信息也能支配注意力。作者提出Spike Dice Attention (SDA)，将集合相似度指标（Dice系数）引入脉冲注意力，通过对脉冲计数的显式归一化消除密度偏差。论文进一步设计了音频专用的频率-时间解耦架构（SADA），并提出了线性化版本Lin-SDA以适配神经形态硬件。

论文在三个音频分类数据集上评估：

| 模型 | 类型 | 参数(M) | 能量(mJ) | AudioSet-20k (mAP) | ESC-50 (Acc%) | SCV2 (Acc%) |
|------|---------|---------|---------|--------------------|---------------|-------------|
| AST | ANN | 88.1 | 475.64 | 0.148 | 88.7 | 98.11 |
| SSAST-S | ANN | 23 | 176.82 | 0.165 | 85.4 | 97.70 |
| DTF-AT | ANN | 69 | 153.18 | 0.187 | 89.19 | 98.30 |
| Spikformer | SNN | 65.9 | 18.82 | 0.136 | - | - |
| Spike-driven Trans. | SNN | 65.9 | 8.15 | 0.130 | - | - |
| Spike-driven Trans. V2 | SNN | 55.0 | 14.92 | 0.138 | - | - |
| QKFormer | SNN | 64.5 | 43.43 | 0.147 | - | - |
| DiceFormer-10-S | SNN | 13.7 | 5.34 | 0.145 | 85.37 | 97.27 |
| DiceFormer-10-M | SNN | 24.2 | 9.55 | 0.157 | 85.47 | - |
| DiceFormer-10-L | SNN | 54.3 | 17.80 | 0.161 | - | - |

标注的ANN结果为预训练模型，其他均为从零训练。DiceFormer-10-L在AudioSet-20k上达到0.161 mAP（SNN SOTA），超越从头训练的AST（0.148 mAP）但远低于DTF-AT（0.187 mAP，预训练）。主要局限性包括无硬件实测、无开源承诺、视觉域验证仅限CIFAR-100、未与同期强ANN音频模型公平对比。

### 🔗 开源详情

- 代码：论文中未提及代码链接
- 模型权重：论文中未提及
- 数据集：
  - AudioSet: https://research.google.com/audioset/
  - ESC-50: https://github.com/karolpiczak/ESC-50
  - Speech Commands V2: https://arxiv.org/abs/1804.03209
  - CIFAR-100: https://www.cs.toronto.edu/~kriz/cifar.html
- Demo：论文中未提及
- 复现材料：论文附录提供了详细的模型架构配置（Table 5）、训练超参数（Table 6）、能量消耗估算方法（附录G）、训练与推理时间（附录H）、多轮运行稳定性分析（附录I）、层状密度相关分析（附录J）以及神经形态硬件实现细节（附录K）。训练环境为单张NVIDIA RTX PRO 6000 GPU（96GB显存）。但未提供训练代码、脚本或检查点，损失函数和PLIFτ初始化等关键细节缺失。
- 论文中引用的开源项目：
  - AST: https://github.com/YuanGongND/ast
  - SSAST: https://github.com/YuanGongND/ssast
  - Spikformer: https://github.com/ZhouChenLin/Spikformer
  - Spike-driven Transformer: https://github.com/zhouchenlin2096/Spike-driven-Transformer
  - Spike-driven Transformer V2: https://github.com/zhouchenlin2096/Spike-driven-Transformer-V2
  - QKFormer: https://github.com/zhouchenlin2096/QKFormer
  - PANNs: https://github.com/qiuqiangkong/audioset_tagging_cnn
  - DTF-AT: 论文中未提及代码链接
  - DCLS-Delays: https://github.com/thisisamoudgl/DCLS-Delays
  - SIDC-KWS: 论文中未提及代码链接
  - Timm: https://github.com/rwightman/pytorch-image-models
  - SpecAugment: https://github.com/DemisEom/SpecAugment
  - mixup: https://github.com/facebookresearch/mixup-cifar10

### 🏗️ 方法概述和架构

DiceFormer是一个五阶段层次化脉冲Transformer，专为音频分类设计。其核心动机来自一个实验观察：现有脉冲注意力（Spikformer的SSA、Spike-driven Transformer的SDSA）的得分与输入脉冲密度高度相关（Pearson r最高达0.86），导致语义无关的高发放率神经元支配注意力。在均匀零假设下，点积重叠的期望值 \(E[I(q,k)] = C(q)C(k)/d\) 与密度正相关，证明了这种偏差的内在性。

阶段1：Initialization Block (CNN Stem)
将输入频谱图（T×C×H×W）映射到嵌入维度E，空间分辨率降采样4倍。具体包含三个子模块：(i) Init-1：7×7 Conv+BatchNorm+MaxPool+SN；(ii) Init-2：3×3 Conv+BatchNorm+MaxPool+SN；(iii) Init-3：3×3 Conv+BatchNorm。另有一条跳跃连接（Skip），从Init-2输入处分支，含一个3×3 Conv+BatchNorm用于通道对齐，与Init-3输出逐元素相加后经SN。

阶段2：Projection Conv Block 1
过渡层，执行通道映射（E→D₁）和2倍空间降采样。包含两个子模块：Project-1（3×3 Conv+BatchNorm+MaxPool stride 2+SN）和Project-2（3×3 Conv+BatchNorm）。Project-1（SN前）与Project-2有残差连接，最终经SN输出。

阶段3：Spike Audio Dice Attention (SADA)
音频特化模块，将D₁通道拆分为两个D₁/2并行流。频率流将时间轴并入batch维，在N=H/8个频率token上执行注意力；时间流将频率轴并入batch维，在N=W/8个时间token上执行注意力。每个流独立计算Q、K、V（线性变换+BatchNorm+SN），用SDS公式 \(SDS(q_i, k_i) = 2I(q_i, k_i) / (C(q_i)+C(k_i)+\epsilon)\) 计算注意力权重，经SN二值化后与V做哈达玛积。两流输出展平后拼接，经Pointwise Conv融合，加残差连接，经SN和MLP。

阶段4：Projection Conv Block 2
再次降采样（D₁→D₂，空间减半），架构同阶段2。

阶段5：Spike Dice Attention (SDA)
展平后的(H/16)×(W/16)个token上执行统一空间注意力。输入经SN后生成Q、K、V（线性+BatchNorm+SN），SDS计算注意力，SN二值化，与V哈达玛积。输出经Pointwise Conv+BatchNorm+残差+SN+MLP。最终通过全局平均池化和线性分类头。

Lin-SDA： 通过一阶泰勒展开将SDS近似为仿射形式 \(SDS_{Lin}(q, k) = I(q,k) - \lambda(C(q)+C(k))\)，λ为可学习非负参数，完全用定点加法和乘法实现，避免除法。所有SN使用PLIF模型，τ可学习，Vth=1.0，Vreset=0。代理梯度为Sigmoid（γ=4.0）。

### 💡 核心创新点

1. Dice系数的脉冲注意力：首次将集合相似度（Dice系数）引入SNN-Transformer注意力机制。通过总脉冲活度 \(C(q)+C(k)\) 显式归一化重叠计数 \(I(q,k)\)，从数学上（零假设期望分析）和实验上（Pearson相关从0.86降至0.08）证明了密度解耦的有效性。

2. 音频专用的频率-时间解耦SNN架构：设计了SADA模块，将DTF-AT的解耦思想首次引入SNN，在脉冲域实现频率流和时间流并行注意力，验证了在听觉输入上超越统一空间注意力的必要性。

3. 神经形态友好的线性化注意力：提出Lin-SDA，用可学习仿射变换近似Dice归一化，避免浮点除法和LUT，适配资源受限的神经形态芯片。

4. 从零训练SNN取得AudioSet任务SOTA：在无预训练前提下，在AudioSet-20k上用54.3M参数达到0.161 mAP，超越所有SNN基线（QKFormer 0.147），并超越从头训练的AST（0.148 mAP）。ESC-50上达到85.47%（DiceFormer-10-M），SCV2上达到97.27%（DiceFormer-10-S）。

### 📊 实验结果

主要结果见核心摘要部分的表格。论文还报道了以下关键消融实验（均基于DiceFormer-10-L, T=4, AudioSet-20k）：

| 消融目标 | 配置 | mAP |
|---------|------|-----|
| 注意力组件 | SDSA only | 0.126 |
| | SSA only | 0.142 |
| | SADA only | 0.157 |
| | SDA only | 0.158 |
| | SADA→SDA (5:5) | 0.161 |
| | SDA→SADA | 0.157 |
| | SADA→SDA (6:4) | 0.160 |
| | SADA→SDA (4:6) | 0.155 |
| 二值化 | SDS连续值 | 0.160 |
| | SDS二值化 | 0.161 |
| Lin-SDA | S scale | 0.143 |
| | M scale | 0.154 |
| | L scale | 0.159 |
| SDA泛化(Spike-driven Trans.) | 基线 | 0.130 |
| | +SDA | 0.142 (+0.012) |
| SDA泛化(SDT V2) | 基线 | 0.138 |
| | +SDA | 0.144 (+0.006) |
| SDA泛化(QKFormer) | 基线 | 0.147 |
| | +SDA | 0.149 (+0.002) |

在CIFAR-100上（视觉域初步验证）：Spike-driven Transformer+SDA提升0.59pp（78.40→78.99），QKFormer+SDA提升0.26pp（81.15→81.41）。密度耦合分析显示DiceFormer-L的注意力-密度Pearson r均值仅0.082，而Spikformer为0.861。延迟测试中DiceFormer平均1.67ms，低于Spikformer的2.95ms。T=1的DiceFormer-10-L达到0.153 mAP。

### 🔬 细节详述

- 训练数据：AudioSet-20k（平衡子集约22k训练+20k评估）；ESC-50（2000条，5折交叉验证）；SCV2（约105k条，标准训练/验证/测试划分）；CIFAR-100（标准划分）。音频预处理：16kHz重采样，单通道，128维log-Mel Fbank，Hanning窗，帧移10ms，padding/截断到1024/512/128帧。数据增强：SpecAugment和Mixup（ESC-50与SCV2两者均用，AudioSet仅用SpecAugment，见附录F）。
- 损失函数：未明确说明，从多标签/多类分类任务推断为二值交叉熵（AudioSet）和交叉熵（ESC-50/SCV2）。
- 训练策略：优化器AdamW；调度器余弦退火；warmup 5 epochs；AudioSet batch size 12，100 epochs，lr 1e-3→1e-2→5e-5；ESC-50 batch size 24，200 epochs，lr 1e-4→1e-3→1e-6；SCV2 batch size 96，200 epochs，lr 1e-4→1e-3→1e-6。所有模型从零训练，时间步T=4（T=1仅作为缩减测试）。
- 关键超参数：PLIF神经元，τ可学习，Vth=1.0，Vreset=0；代理梯度用Sigmoid（γ=4.0）；ε=1e-6。模型缩放：S/E=96/D₁=192/D₂=384，M/E=128/D₁=256/D₂=512，L/E=192/D₁=384/D₂=768。SADA 2头，SDA 8头，SADA:SDA层数比5:5（共10层）。
- 训练硬件：单张NVIDIA RTX PRO 6000 96GB。
- 推理细节：未提及beam search或温度参数；注意力得分经SN二值化后以哈达玛积方式应用到V。
- 正则化：无dropout或权重衰减的显式说明。残差连接在SADA和SDA的输出端使用（X_fused = PWConv_out + X_in；然后经SN和MLP）。
- 能量估算：基于45nm CMOS工艺（Horowitz 2014），EMAC=4.6pJ，EAC=0.9pJ。对每层计算SOPs=FLOPs×T×R（R为层脉冲发放率），仅将脉冲驱动的AC操作计入SNN能量。

### ⚖️ 评分理由

*   创新性 (0.8/2)：将Dice系数作为脉冲相似度度量具有洞察力，从集合论视角重新审视脉冲注意力，数学推导和零假设下的偏差分析清晰。但方法层面本质上是将已知统计量替代注意力核函数，理论深度有限。音频架构的创新主要来自借鉴DTF-AT的解耦思路并在SNN中实现，非根本性的新架构范式。Lin-SDA是常规的一阶泰勒展开工程近似。

*   技术严谨性 (0.6/1.5)：密度偏差的数学分析基于强假设（均匀零假设），实际脉冲分布高度非均匀且q/k来自同一输入的不同投影时，可能存在依赖关系，此分析的稳健性未被讨论。Dice度量选择理由（附录C）主要基于工程便利性（“LUT可实现”、“泰勒近似方便”）而非深层理论必然性。Lin-SDA的泰勒展开点I₀和S₀的选取策略完全未说明，λ参数初始化和约束方式仅在公式中提及“constrained to be non-negative”。能量估算基于45nm工艺（2014年数据），在7nm/5nm已成主流的当下缺乏参考价值，且完全未与任何实测对标。对极稀疏脉冲场景下的退化行为无分析。

*   实验充分性 (0.5/1.5)：核心实验在AudioSet-20k上与多个SNN基线对比，消融覆盖组件和泛化测试，保证了主要声明的内部有效性。但存在严重不足：(i) 强ANN基线DTF-AT（0.187 mAP）采用的是预训练模型，而DiceFormer为从零训练，两者训练范式不同，性能差距（-2.6个点）无法直接归因于架构优劣，论文未在相同从零训练条件下对比DTF-AT或自我实现DTF-AT从零训练的分数；(ii) 未对比同期强ANN音频模型（PaSST、BEATs、HTSAT、MAE-AST等）；(iii) 视觉域评估仅CIFAR-100一个数据集，且+0.59pp/+0.26pp的提升缺乏统计检验（无p值或多次运行的置信区间），不足以支撑“broader applicability”声明；(iv) 能量估算只有公式计算，无FPGA/神经形态芯片实测。

*   清晰度 (0.6/1)：整体组织清晰，图示和表格完整，符号定义规范。但关键细节缺失或模糊：训练损失函数从未正式声明；PLIF的τ初始化值未说明；Initialization Block中跳跃连接的3×3 Conv stride=2仅在Table 5隐含提及；能量公式依赖附录，主文未给任何直觉解释；SADA中“合并时间/频率轴到batch维度”的描述缺乏伪代码或具体reshape操作细节。

*   影响力 (0.3/1.5)：SNN-Transformer在音频领域的首个系统工作，对SNN-听觉计算这一交叉方向有积极信号。但该交叉领域本身极窄（主要来自作者课题组），且强ANN基线的对比缺失使性能声明的实际意义打折扣。作者均来自单一机构（首尔科技大学），非顶级研究组，进一步限制了初始关注度和后续跟进可能。在开源缺失、无硬件验证的前提下，实际影响力将严重受限于复现门槛。从音频分类主流视角看，ANN方法仍远超此SOTA，该工作不可能改变主流研究者技术选型。

*   开源 (0.0/1.5)：论文完全未提及代码仓库、模型权重链接或开源计划，也未声明demo页面。根据顶会标准，这严重阻碍可复现性验证和社区采纳。附录虽有架构表（Table 5）、超参数表（Table 6）和能量公式（附录G），但无训练脚本或检查点。

*   可复现性 (0.3/0.5)：架构和训练超参数在附录中详细给出，能量计算方法有公式支撑。但多个关键细节缺失（损失函数未说明，PLIF τ初始化缺失，代理梯度仅提Sigmoid无消融对比，数据增强策略的精确参数未提供），且无公开代码/模型权重。独立复现需要较多猜测和调参工作。

*   工程/实践价值 (0.5/1.5)：Lin-SDA理论上简化了实现并适配硬件约束，能量估算框架和延迟测量为系统设计者提供了初步参考。但能量计算基于过时工艺，无任何硅基或FPGA平台的实测能耗，也无内存占用、数据传输带宽等系统级分析。从工业落地角度看，这是一个停留在理论估算阶段的学术概念验证，距离生产级神经形态部署差距显著。

### 🚨 局限与问题

论文明确承认的局限
1. 工作聚焦于从零训练，未探索大规模预训练策略（对比学习、掩码预训练等），这可能是重要性能瓶颈（§6 Future Work）。
2. 未在实际神经形态硬件上验证Lin-SDA的能效优势（§6 Future Work）。
3. 视觉域评估仅为初步探索（preliminary），CIFAR-100收益较小。

审稿人发现的潜在问题
1. SOTA声明过度且比较不公平：论文声称“narrowing the performance gap with ANN-based models”，但其对比的ANN基线中，AST（0.148 mAP）为从零训练，而DTF-AT（0.187 mAP）为预训练模型。在完全不同的训练范式下进行性能对比，不能得出“缩小差距”的严谨结论。论文未提供从零训练DTF-AT或预训练DiceFormer的结果作为公平基线。
2. 能量估算过时且无对标：45nm CMOS工艺（Horowitz 2014）的能耗常数在学术研究中已被反复诟病为脱离实际，且论文未提供任何实测数据（如FPGA/神经形态芯片上的功耗）来验证这些估算的相对准确性。这使“能量效率”这一核心卖点沦为纸面计算。
3. 密度偏差分析的局限：零假设推导假设q和k独立且k的活动位置均匀分布。实际SNN中Q和K来自同一输入的线性投影，存在结构相关性，相关性对Dice归一化效果的影响未分析。附录C中对比余弦相似度时引入的“AM-GM→Dice≤Cosine”论证不够严谨，因为注意力机制的关键是相对排序而非绝对数值大小。
4. CIFAR-100实验证据力不足：+0.59pp和+0.26pp的提升在100类任务上可能源自随机波动，论文未提供多次运行的均值和标准差（仅在附录I有完整模型的多轮数据），且无参数量或其他混杂变量的控制。仅两个模型、一个数据集，无法支持“SDA在不同模态的广泛适用性”。
5. SDS分数分布的退化行为未分析：SDS产生连续值分数需经SN二值化，若分数分布过窄（如大量token的SDS值集中在阈值附近或极端值），二值化可能退化为全1/全0，丧失注意力功能。论文未分析实际训练中SDS的分布特性。
6. 损失函数和信息增强的缺失：论文从未明确声明训练目标函数，这对于多标签（AudioSet）和多类（ESC-50/SCV2）任务的区别至关重要，影响损失加权、阈值选择等实现细节的可复现性。同样未讨论Mixup在多标签场景下的具体实现方式。
7. 完全无可比性研究：未讨论SDA与非密度归一化方法的对比（如简单地除以脉冲计数、余弦相似度等）以证明Dice特定选择的必要性。附录C虽有定性讨论，但缺乏任何实验数据支持。

---

[← 返回 ICML 2026 论文速递](/audio-paper-digest-blog/posts/icml2026-summary/)
