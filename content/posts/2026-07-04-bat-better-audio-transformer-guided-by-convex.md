---
title: "BAT: Better Audio Transformer Guided by Convex Gated Probing"
date: 2026-07-04
draft: false
tags: [音频分类, 音频事件检测, 语音识别, 自监督学习, Transformer]
categories: [icml-2026]
description: "音频分类 | 8.6/10"
hiddenInHomeList: true
---

# 📄 BAT: Better Audio Transformer Guided by Convex Gated Probing

#音频分类 #音频事件检测 #语音识别 #自监督学习 #Transformer

**8.6/10** | 创新 1.5/2 | 严谨 1.3/1.5 | 实验 1.4/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 1/1.5 | 复现 0.4/0.5 | 工程 1.2/1.5

🔥 **8.6/10** | 前25% | #音频分类 | #自监督学习 | #音频事件检测 #语音识别 | [arxiv](https://openreview.net/forum?id=9DfsHAFE5l)


### 👥 作者与机构

- 第一作者：Houtan Ghaffari（Ghent University）、Lukas Rauch（University of Kassel，现就职于 Earth Species Project）（并列一作）
- 通讯作者：Houtan Ghaffari（Ghent University）、Lukas Rauch（University of Kassel）
- 作者列表：Houtan Ghaffari（Ghent University）、Lukas Rauch（University of Kassel，现就职于 Earth Species Project）、Christoph Scholz（University of Kassel，Fraunhofer IEE）、Paul Devos（Ghent University）
- 发表于 ICML 2026，首尔，韩国

### 💡 毒舌点评

论文以鲜明的"探测优先于微调"的评估哲学切入，提出的 CGP 和 BAT 形成了一套从评估到模型设计的闭环，实验维度相当完整且可复现性意识强。不过，其 AS-2M 的最终微调性能未能超越已报告 SOTA（Reported SSLAM 50.2 vs BAT 48.85），且性能提升的来源存在一定"调参红利"嫌疑，部分结论的泛化性仍待更严格的跨框架验证。

### 📌 核心摘要

1. 要解决的问题：音频自监督学习（SSL）依赖微调进行评估，导致性能提升常被优化技巧混淆，且现有简单探测无法忠实反映嵌入质量；同时当前 SOTA 模型（EAT、SSLAM）基于不透明的旧 fairseq 实现，可复现性差。
2. 方法核心：提出 Convex Gated Probing（CGP），一种基于原型、可学习门控聚合所有层的冻结评估方案；并以此为指导，改进预处理、引入门控注意力、更换更强解码器，构建 Better Audio Transformer（BAT）。
3. 与已有方法的新颖之处：CGP 通过凸门控利用全部层，并用 min-max 池化从原型激活中捕获空间信息，不同于仅用最后一层或简单拼接的探测（如 VQT、Head2Toe）；BAT 将大语言模型中的 sigmoid 门控引入 ViT 注意力，消除 attention sink 并解放 end-of-block 作为 SSL 目标，同时用 ViT 解码器将语义信息推向后层。
4. 主要实验结果：CGP 显著缩小了探测与微调的差距（AudioSet-20k mAP 从线性探测 17~18 提升至 34~37）；BAT 在多个任务上刷新 SOTA，例如 AS-2M 微调 mAP 48.85、ESC-50 准确率 98.81±0.9%，详见下方表格。
5. 实际意义：为音频 SSL 提供了一种可靠、高效且可复现的评估范式，并提供标准化的强基线实现，降低后续研究门槛。
6. 主要局限性：AS-2M 的微调结果未能复现已报告的最佳值（Reported SSLAM 50.2），模型的提升可能部分源于更好的超参数调整；CGP 对原型数量敏感，不同数据集下门控偏好变化较大；语义"后移"不一定对所有 SSL 范式适用。

### 主要实验结果表

Table 5 核心结果：各方法在多个基准上的性能（Finetune / CGP / PB / LP）

| Method | Model | AS-2M mAP | AS-2M F1 | AS-20k mAP | AS-20k F1 | ESC-50 Acc | ESC-50 mAP | SC-v2 Acc | SC-v2 mAP | SED frame-mAP | SED onset-F1 | HSN mAP | HSN F1 |
|--------|-------|-----------|----------|------------|-----------|------------|------------|-----------|-----------|---------------|--------------|---------|--------|
| Finetune | BAT | 48.85 | 36.62 | 41.59 | 38.20 | 98.81±0.9 | 95.95±1.2 | 99.80 | 99.09 | 99.71 | 98.20 | 47.05 | 34.07 |
| Finetune | SSLAM | 47.82 | 36.33 | 40.26 | 38.00 | 98.21±1.0 | 94.85±1.7 | 98.30 | 96.87 | 99.59 | 97.13 | 44.20 | 31.26 |
| Finetune | EAT | 47.84 | 36.38 | 40.37 | 38.03 | 98.54±1.0 | 95.05±1.4 | 97.50 | 96.43 | 99.70 | 97.25 | 42.32 | 31.98 |
| Finetune | BEATs | 47.02 | 36.02 | 36.73 | 32.18 | 98.01±1.4 | 94.35±2.3 | 99.77 | 98.85 | 99.67 | 97.34 | 18.59 | 13.00 |
| CGP | BAT | 45.03 | 37.94 | 37.70 | 35.22 | 98.13±1.2 | 94.55±1.7 | 99.80 | 98.92 | 99.15 | 94.27 | 41.53 | 29.49 |
| CGP | SSLAM | 42.75 | 34.22 | 34.53 | 32.06 | 97.25±1.5 | 92.55±2.2 | 99.51 | 98.08 | 97.97 | 90.64 | 36.14 | 25.75 |
| CGP | EAT | 42.98 | 34.48 | 35.34 | 32.81 | 97.53±1.2 | 93.10±1.8 | 99.61 | 98.19 | 98.31 | 90.03 | 37.90 | 24.53 |
| CGP | BEATs | 41.89 | 33.41 | 33.01 | 31.53 | 95.85±0.9 | 89.15±1.0 | 99.45 | 97.91 | 98.65 | 93.94 | 22.78 | 9.30 |
| PB | BAT | 42.94 | 35.94 | 35.98 | 33.88 | 98.95±0.7 | 95.75±0.7 | 99.76 | 98.68 | 98.03 | 91.52 | 36.14 | 26.28 |
| PB | SSLAM | 38.53 | 31.57 | 32.01 | 30.50 | 96.38±1.3 | 90.70±1.4 | 98.04 | 95.84 | 93.87 | 80.34 | 28.20 | 15.52 |
| PB | EAT | 39.08 | 31.81 | 32.87 | 31.11 | 96.83±1.1 | 91.45±1.7 | 98.52 | 96.50 | 95.15 | 84.77 | 26.47 | 18.63 |
| PB | BEATs | 37.73 | 30.42 | 31.62 | 28.43 | 95.31±1.4 | 88.75±1.8 | 99.27 | 97.47 | 97.95 | 90.48 | 17.32 | 3.85 |
| LP | BAT | 31.19 | 20.21 | 26.15 | 22.41 | 95.25±1.3 | 89.20±2.1 | 75.74 | 78.12 | 94.21 | 82.38 | 9.21 | 5.28 |
| LP | SSLAM | 26.96 | 17.70 | 21.14 | 17.61 | 94.10±0.9 | 87.65±1.9 | 56.28 | 70.22 | 86.33 | 66.09 | 8.52 | 3.95 |
| LP | EAT | 27.30 | 18.21 | 21.60 | 16.98 | 91.07±0.7 | 84.75±1.8 | 74.31 | 78.03 | 88.67 | 70.21 | 10.77 | 2.75 |
| LP | BEATs | 31.40 | 22.05 | 26.26 | 23.17 | 93.07±1.1 | 86.50±1.6 | 92.60 | 90.44 | 94.61 | 81.72 | 5.33 | 4.79 |

注：完整 Table 5 还包含 VQT、H2T、LCGP 方法的结果，因篇幅限制详见原文。Reported SOTA：SSLAM AS-2M 50.2，EAT AS-2M 48.6。

Table 6：LibriSpeech 100h 探测 ASR 结果（WER/CER，测试集）

| Metrics | BAT | SSLAM | EAT | BEATs |
|---------|-----|--------|-----|-------|
| CER | 7.27 | 10.06 | 9.26 | 8.12 |
| WER | 22.18 | 29.05 | 27.14 | 24.67 |

消融实验（AS-20k CGP 性能，原文 Table 2/3/4 整合）

| 配置 | SSL 目标 | 门控注意力 | 解码器类型 | mAP | F1 |
|------|----------|------------|-----------|-----|-----|
| EAT 复现前端 | MLP | ✗ | CNN | 34.86 | 24.28 |
| BAT 前端 | MLP | ✗ | CNN | 35.03 | 24.75 |
| BAT 前端 | EOB | ✗ | CNN | 34.60 | 25.00 |
| BAT 前端 | MLP | ✓ | CNN | 35.09 | 26.12 |
| BAT 前端 | EOB | ✓ | CNN | 35.42 | 27.13 |
| BAT 前端 | EOB | ✓ | ViT-6h (6头, MLP ratio 2) | 37.43 | 28.91 |
| BAT 前端 | EOB | ✓ | ViT-12h (12头, MLP ratio 4) | 37.52 | 29.11 |

附录 C：ViT-Small 消融（AudioSet）

| Method | Model | AS-2M mAP | AS-2M F1 | AS-20k mAP | AS-20k F1 |
|--------|-------|-----------|----------|------------|-----------|
| Finetune | BAT-S | 45.77 | 30.86 | 37.55 | 34.38 |
| CGP | BAT-S | 41.63 | 34.43 | 33.68 | 31.70 |
| PB | BAT-S | 40.19 | 32.26 | 32.63 | 29.27 |
| LP | BAT-S | 25.40 | 12.97 | 21.26 | 11.45 |

![图3](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/9DfsHAFE5l-p15-v5ad1bf9d.jpg)

![图4](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/9DfsHAFE5l-p6-e0bff2cb5.jpg)


### 🔗 开源详情

- 代码：https://github.com/houtan-ghaffari/BAT_ICML2026（论文第 1 页声明）
- 模型权重：论文中未提及单独的模型权重下载链接（预训练权重等可能随代码仓库提供，但未给出 HuggingFace 或 ModelScope 地址）
- 数据集：论文使用了多个公开数据集（AudioSet、ESC-50、Speech Commands V2、BirdSet 中的 HSN、DCASE 2016 Task 2、LibriSpeech），但未提供这些数据集的直接下载链接。
- Demo：论文中未提及
- 复现材料：论文附录 A（Table 7）给出了完整的预训练、微调和探测超参数配置；附录 E 声明跨设备可复现性；代码仓库提供可复现的实现。
- 论文中引用的开源项目：fairseq（https://github.com/facebookresearch/fairseq）、TorchAudio（https://pytorch.org/audio）、PyTorch（https://pytorch.org）、Audio-MAE（https://github.com/facebookresearch/AudioMAE）、BEATs（https://github.com/microsoft/unilm/tree/master/beats）等。

### 🏗️ 方法概述和架构

背景：Masked Latent Regression (MLR) 框架。 BAT 基于 Data2Vec 2.0 (D2V2) 的 MLR 框架。该框架包含一个在线模型（student）\(f_\theta\) 和一个目标模型（teacher）\(f_{\bar{\theta}}\)，后者通过 EMA 更新：\(\bar{\theta}^{(t)} = \lambda\bar{\theta}^{(t-1)} + (1-\lambda)\theta^{(t)}\)。输入为音频梅尔谱图 \(x \in \mathbb{R}^{T\times F}\)，被组织为 \(N\) 个非重叠 \(k\times k\) patch 序列 \(x \in \mathbb{R}^{N\times k^2}\)。约 80% 的 patch 被随机掩码移除，得到部分视图 \(x_m \in \mathbb{R}^{n\times k^2}\)。在线模型编码 \(x_m\) 得到 patch embedding \(z_m\) 和 cls embedding \(o_m\)，然后通过 CNN 解码器 \(g_\phi\) 预测被遮 patch 的目标表示 \(\tilde{z}_m\)。目标模型编码完整输入 \(x\) 产生目标 \((z, o)\)。原始 D2V2 从目标网络所有层的 MLP 输出 \(z_c^{(l)}\) 中提取 patch embedding（丢弃 cls token），进行多层平均和序列/特征维标准化，作为回归目标。损失函数为全局 loss（cls token MSE）和局部 loss（被遮 patch MSE），即 \(\ell = \ell_{\text{global}} + \ell_{\text{local}}\)。

CGP（Convex Gated Probing）。 CGP 是一种层感知的冻结特征探测方法。给定预训练 ViT 编码器所有 \(L\) 层的 patch token embedding \(z \in \mathbb{R}^{L\times N\times D}\) 和 cls token embedding \(o \in \mathbb{R}^{L\times D}\)，CGP 首先对每层 embedding 进行 L2 归一化（\(\hat{z}_{ln} = z_{ln}/||z_{ln}||_2\), \(\hat{o}_l = o_l/||o_l||_2\)）。引入可学习的层权重向量 \(a \in \mathbb{R}^L\)，经 softmax 得到凸权重 \(\alpha = \text{softmax}(a)\)，对归一化后的跨层 embedding 加权求和：\(\bar{z} = \sum_l \alpha_l \hat{z}_l \in \mathbb{R}^{N\times D}\)，\(\bar{o} = \sum_l \alpha_l \hat{o}_l \in \mathbb{R}^D\)。同时维护 \(K\) 个原型向量 \(P \in \mathbb{R}^{K\times D}\)（同样 L2 归一化）。计算聚合表示与原型的余弦相似度：\(s_z = \bar{z}\hat{P}^\top \in [-1,1]^{N\times K}\)（patch 相似度矩阵），\(s_o = \bar{o}\hat{P}^\top \in [-1,1]^K\)（cls 相似度向量）。对 patch 相似度矩阵，沿 token 轴分别取逐通道的最小值和最大值（min-max 池化），得到两个 \(K\) 维向量，与 cls 相似度拼接为 \(s = [\min_N s_z, \max_N s_z, s_o] \in \mathbb{R}^{3K}\)，输入线性分类器。设计动机：SSL 模型的重要语义信息可能分散在不同层和不同 token 位置，传统仅用最后一层 cls token 的线性探测严重低估模型能力。CGP 以较低计算代价（约 23.5M 参数，详见附录 D）提取并整合这些分散信息。

BAT（Better Audio Transformer）。 BAT 对 D2V2 音频 SSL 流水线进行了三项关键改进：

(1) 音频预处理改进。 摒弃旧的 mel 滤波器组 + 对数压缩 + 全局标准化，改用 decibel 压缩并施加局部 min-max 归一化到 \([0,1]\)。该流程使用现代化 TorchAudio 实现，提升谱图质量（更高对比度、更少伪影），并消除对下游数据集全局统计量的依赖，便于部署。

(2) 门控注意力（Gated Attention）。 在 ViT 每一层多头自注意力中，对注意力加权后的值向量 \(\bar{V}\)（公式 \(\bar{V} = \text{softmax}(QK^\top/\sqrt{d_h})V\)）施加输入相关的 sigmoid 门控：\(\tilde{V} = \sigma(xW_G) \cdot \bar{V}\)，然后经输出投影 \(\tilde{O} = \tilde{V}W_O\)。门控权重矩阵 \(W_G \in \mathbb{R}^{D\times D}\)。该设计借鉴 LLM 中 gated attention 的思想，引入非线性和输入依赖稀疏性，消除 attention sink 现象，改善注意力分布。关键效果：门控使 end-of-block（EOB，即完整 encoder block 输出 \(z_d^{(l)}\)）能够直接作为 SSL 回归目标，而不会像原始 D2V 那样导致表示坍缩（原 D2V 需退而使用 MLP 中间输出 \(z_c^{(l)}\) 作为目标）。目标网络使用相同的门控架构，确保目标生成的一致性。

(3) 强化解码器。 将原 D2V2 的轻量 6 层 CNN 解码器替换为 6 层 ViT 解码器（12 头，MLP ratio 4），将重建压力从编码器转移至解码器，使编码器深层能专注于高层语义学习。CGP 门控权重和逐层线性探测（Figure 4）证实：语义信息峰值从原始 EAT/CNN-BAT 的中间层（block 7 左右）后移至 block 10-12，最终层线性探测精度从约 25 mAP 跃升至近 30 mAP。

训练方面，BAT 使用逆块掩码策略（inverse block masking），每个样本 16 个掩码视图以复用目标表示。与 EAT/SSLAM 不同，BAT 移除了 D2V2 中 \(8\times 10^4\) 的全局 loss 启发式缩放因子，采用等权求和 \(\ell = \ell_{\text{global}} + \ell_{\text{local}}\)，提升训练稳定性。使用 bfloat16 混合精度。

![图1](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/9DfsHAFE5l-p1-v82c0fea7.jpg)

![图2](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/9DfsHAFE5l-p13-vcade7962.jpg)


### 💡 核心创新点

1. 凸门控探测 (CGP)：打破了音频 SSL 评估中"微调至上"的惯例，通过可学习的层门控和 min-max 池化原型激活，一次性提取所有层和所有 patch 的信息，将探测性能大幅拉近微调水平，为公平比较 SSL 嵌入质量提供了可靠工具。与 VQT 不同，CGP 不修改编码器内部结构，避免了 SSL 目标引入的注意力偏置。
2. 门控注意力解锁 EOB 目标：发现并解决了 D2V 中 MHSA 输出无法直接作为回归目标的问题——原始 D2V 因 MHSA 产生的 attention sink 导致 EOB 目标引发坍缩，需退而使用 MLP 中间输出。引入 sigmoid 门控抑制 attention sink，使端到端的 EOB 输出成为更好的 SSL 目标，同时提升了模型本身性能（+2.1 pp F1）。
3. 强解码器驱动的语义偏移：用 ViT 解码器替代 CNN 解码器，将重建任务从编码器卸载，使得深层编码器块能专注于高层语义学习。这一设计改变了以往 middle-heavy 的表示分布，将语义信息峰值从 block 7 后移至 block 10-12，最终层线性可分性显著提升（+2.0 pp mAP）。
4. 标准化可复现的音频 SSL 流水线：从前端处理、注意力机制到训练超参，提供了完全脱离旧 fairseq 实现的 PyTorch 原生代码，并开源了包括 EAT、SSLAM 在内的基线复现代码，显著降低了复现和公平对比的门槛。

### 📊 实验结果

论文在 AudioSet（AS-2M、AS-20k）、ESC-50、Speech Commands V2、DCASE2016 SED、BirdSet HSN 以及 LibriSpeech ASR 共 7 个数据集上进行了广泛评估，比较对象包括 EAT、SSLAM 和 BEATs（离散 token 预测基线）。除常规线性探测 (LP) 和 Linear CGP (LCGP) 外，还对比了 ProtoBin (PB)、VQT、Head2Toe (H2T) 等前沿探测方法。所有预训练仅使用 AS-2M（1,912,024 条 10 秒音频，16 kHz）。

关键发现：
- CGP 在所有探测方法中一致最优，且在冻结设定下显著缩小了与微调的性能差距。例如在 AS-20k 上，CGP 将 EAT 的 mAP 从 LP 的 21.60 提升至 35.34，BAT 则达到 37.70（微调为 41.59）。
- BAT 在多数任务上微调或 CGP 均达到或超越已报告 SOTA，如 AS-2M 微调 mAP 48.85（超越 Reported EAT 48.6，但低于 Reported SSLAM 50.2），ESC-50 准确率 98.81±0.9%，SC-v2 准确率 99.80。
- 消融实验表明：门控注意力 + EOB 目标带来 +2.1 pp F1 的提升（CNN 解码器下），而将 CNN 换为 ViT 解码器再额外提升 +2.0 pp mAP；最终 BAT 的线性探测峰值从原始 EAT 的约 25 mAP 跃升至约 30 mAP 以上。
- 在跨域泛化（HSN）和密集预测（SED onset-F1）任务上，BAT + CGP 的领先优势较为稳定，证明了方法的鲁棒性。
- ASR 探测结果中，BAT 的 WER 显著低于其他模型（22.18 vs SSLAM 29.05）。
- ViT-Small 消融（附录 C）表明，BAT 的改进在更小模型上同样有效（BAT-S AS-20k CGP mAP 33.68 vs EAT-base CGP 35.34，缩放合理）。

关键图表说明：
- Figure 1（CGP 流程图）展示了从多层 embedding 输入、层权重学习、跨层聚合、原型相似度计算到 min-max 池化和分类的完整流程。
- Figure 4 / Figure 7（语义偏移）：逐层线性探测曲线和热力图显示，BAT 的语义信息峰值从中间层后移至 block 10-12，且在各层全面超越 EAT 和 D2V2 基线。CGP 门控权重与 LP 性能高度相关，可自动识别最富含信息的层。
- Figure 5（门控注意力对比）：可视化表明门控使注意力分布更均匀，聚焦于 token 自身而非陷入单个 token（消除 attention sink）。
- Figure 6（预处理对比）：BAT 前端（decibel + 局部 min-max）产生的谱图具有更高对比度和更清晰的光谱结构，而旧前端存在模糊和伪影。
- 附录 D Table 10：CGP 计算成本（23.5M 参数，0.72ms 延迟，3.96G MAC）略高于 ProtoBin（12.95M，0.91ms），但显著低于 VQT（49.07M，10.30ms，需完整模型前向传播）。
- 附录 F Figure 6：CGP 门控权重在不同数据集上的分布，验证了 BAT 的语义后移现象在多个任务上一致。

### 🔬 细节详述

- 训练数据：预训练仅使用 AudioSet-2M（1,912,024 条 10 秒音频），重采样至 16 kHz。未使用其他预训练数据。
- 预处理：BAT 前端：mel 谱提取（TorchAudio 现代化实现）→ decibel 压缩 → 局部 min-max 归一化至 \([0,1]\)；批量变换，支持 GPU 加速。对比基线用旧版：log 滤波器组 + 全局标准化（Audio-MAE/EAT 前端）。
- 模型架构：ViT-Base（12 层，768 维，12 头），patch 大小为 \(16\times 16\)。门控注意力中，\(W_G \in \mathbb{R}^{D\times D}\)，sigmoid 逐元素乘值后经输出投影。解码器：最终用 6 层 ViT，12 头，MLP ratio 4。ViT-Small 消融使用相同配置但更小维度。
- 损失函数：全局 loss（cls token）与局部 loss（预测被遮 patch）均使用 MSE，权重相等（\(\ell = \ell_{\text{global}} + \ell_{\text{local}}\)），移除了 D2V2 中 \(8\times 10^4\) 的启发式缩放因子。
- 预训练超参数：batch size 48（4 GPU × 12 per GPU），每样本 16 个逆块掩码视图；优化器 AdamW（\(\beta_1=0.9, \beta_2=0.95\)），权重衰减 0.05；学习率线性 warmup 50k 步至 \(5\times 10^{-4}\)，余弦衰减至 \(1\times 10^{-6}\)，总步数 400k；bfloat16 混合精度；EMA 衰减率使用线性调度。
- 探测超参数：CGP 原型数 \(K=10,000\)（Figure 2 显示 10k 为性能-计算 trade-off 的较优选择）；优化器 AdamW（\(\beta_1=0.9, \beta_2=0.999\)），峰值学习率 \(1\times 10^{-3}\)，warmup 500 步，余弦衰减，batch size 48 或根据任务调整。VQT 使用 10 个查询 token；H2T 在 AudioSet 上 Lasso 权重设为 0，其他任务 \(1\times 10^{-4}\)。所有探测方法使用统一超参数框架，无 CGP 特别优势调参。
- 微调超参数：学习率 \(5\times 10^{-5}\)，层-wise 学习率衰减 0.75，batch size 96（1 GPU），200k 步优化，20k 步 warmup；mixup 概率 0.8~0.9，SpecAug（时间/频率掩码），彩色噪声（部分任务），类别加权采样（AudioSet 和 HSN）。
- 硬件与时长：大部分实验在 NVIDIA A100 GPU 上进行（多 GPU 预训练），消融和部分下游任务使用 A6000/4090。附录 E 声明可在多设备和库版本间复现至可忽略小数位差异。未提供 wall-clock 时间。
- 正则化/数据增强：预训练仅用掩码（逆块掩码，~80% 掩码率）和 target normalization。微调时加入 mixup（概率 0.8~0.9）、频率/时间 SpecAug、彩色噪声（ESC-50/SC-v2/HSN 概率 0.3），以及类别加权采样（AudioSet 200k 步，HSN 5.5k 步）。
- 损失函数（下游）：AudioSet 使用 Asymmetric BCE (A-BCE)，其他分类任务使用 BCE，ASR 使用 CTC。

### ⚖️ 评分理由

*   创新性 (1.5/2)：CGP 将原型探测、层门控与 min-max 池化有机组合，形成了一种与现有线性探测、VQT、Head2Toe 显著不同的评估范式，这是方法论上的明确进步。BAT 中的门控注意力和 EOB 目标虽然借鉴了 LLM 的 gating 思想，但其解决 MLR 坍缩问题并改善目标质量的 insight 具有原创性。整体属于"组合已知模块产生新洞察"的较高水准创新，但未达到范式颠覆程度，故给 1.5。
*   技术严谨性 (1.3/1.5)：方法部分对 D2V 目标生成、门控公式、CGP 聚合步骤均有清晰的数学表述；消融实验逻辑层层递进，从数据前端到注意力再到解码器，因果关系论证充分。Figure 1、Figure 5、Figure 6 等架构细节图进一步增强了方法描述的清晰度。小不足在于：未严格分析丢弃 loss scaling 的稳定性理论依据，对不同门控初始化和衰减策略等没有消融，技术细节仍有部分留白。因此给 1.3。
*   实验充分性 (1.4/1.5)：论文覆盖了分类、事件检测、跨域泛化、语音识别等多种下游任务，并与 3 种 SOTA 模型、6 种探测方法进行全方位对比（含 BEATs 离散 token 预测基线），消融实验完整且提供了标准差。Figure 2（CGP 原型数消融）、Figure 4/Figure 7（语义偏移可视化）、附录 D（计算成本对比）、附录 C（ViT-Small 消融）等结果从多个角度佐证了核心结论。唯一缺憾是 AS-2M 微调性能未能超越宣称 SOTA（Reported SSLAM 50.2 vs BAT 48.85），且未能彻底排除训练采样器和超参差异带来的混淆，稍有降低实验结论的确定性。整体仍属非常充分，给 1.4。
*   清晰度 (0.8/1)：文章结构合理，Figure 1（CGP 流程）、Figure 4（语义偏移曲线）、Figure 5（门控注意力）、Figure 6（预处理对比）和 Figure 7（层性能热力图）对方法原理和语义偏移的可视化很直观，关键表格数据清晰。但附录中的超参数表针对不同任务散落，缺统一的训练时长、内存消耗等工程指标，部分子任务的数据集划分细节需读者回溯原文，略显繁琐。给 0.8。
*   影响力 (1.0/1.5)：论文提出了一套"CGP 评估 + 模型协同设计"的方法论，为音频 SSL 社区提供了一种更透明、可复现的前进路径，具有较强的理念引领作用。但作者团队非顶级工业实验室，方法推广的势能相对有限；且 CGP 需要大量原型（\(K=10,000\)），面临部署成本，短期内可能不会在行业大规模替换线性探测。因此给 1.0。
*   开源 (1.0/1.5)：论文提供 GitHub 链接（https://github.com/houtan-ghaffari/BAT_ICML2026），承诺包含 BAT 训练和评估代码，及 EAT、SSLAM 等复现实现。截至分析时未见到模型权重和详细 README 的具体说明，属于"代码仓库已公开但资源不完整"的情况。按规则给 1.0。
*   可复现性 (0.4/0.5)：附录 A 给出了完整的预训练、微调和探测超参数表（Table 7），包括优化器、学习率调度、batch size、增强设置等，细致到足以独立复现。附录 E 声明了跨设备可复现性。缺少的仅有训练硬件型号的具体数量统计和训练耗时（wall-clock time），略影响资源预估，故给 0.4。
*   工程/实践价值 (1.2/1.5)：论文提供了端到端的原生 PyTorch 流水线，涵盖了从音频预处理、模型定义到评估的完整组件，且移除了旧框架中对 loss scaling 的魔改，显著降低了工程部署门槛。附录 D 提供了各探测方法的计算成本和延迟对比，对实际选型有参考价值。对于工业界快速构建音频 SSL 基线和评估流程具有直接参考价值。不过尚缺 ONNX/移动端等进一步的工程优化说明。给 1.2。

### 🚨 局限与问题

论文明确承认的局限：
- 无法完全复现先前文献报告的 AS-2M 微调性能（Reported SSLAM 50.2 vs 复现 47.69），认为可能与训练采样器差异有关（继承自 SSAST 的采样过程），并由此强调微调作为评估指标的不可靠性。
- CGP 的原型数量 \(K\) 为超参数，最佳值具有数据集依赖性，论文在 AudioSet 上展示其收益递减（Figure 2）但不给出通用选择准则。
- 语义信息"后移"是否总是更优尚无定论（Section 6），不适用于所有 SSL 范式（如对比学习或离散 token 预测），不应作为通用指标。

审稿人发现的潜在问题：
- 门控注意力带来的增益可能高度绑定于 MLR 目标，在其他 SSL 目标（如对比学习或离散 token 预测）下的适用性未有验证。BEATs（离散 token 预测）在部分任务上表现不弱（如 SC-v2 LP 92.60 vs BAT 75.74），但全文讨论未充分展开该类跨范式对比的归因分析。
- 移除 loss scaling 虽然提升了稳定性，但未定量分析该操作对不同规模模型（如 ViT-Large）的影响，直接声称"等权最优"的证据仅来自单一规模的实验。
- CGP 的 min-max 池化 + 原型度量仍依赖 \(K\) 的选择，且假设 patch 原型激活的极值足以表征空间语义，对细粒度时序属性（如 ASR 中的音素级对齐）是否充分尚缺乏深入分析。ASR 实验中 BAT 需额外添加上采样层才能处理 160ms 的粗时间分辨率，暗示该假设的局限。
- 与 BEATs 的对比中，BAT 在部分任务上优势很弱甚至不敌（如 SC-v2 LP BEATs 92.60 vs BAT 75.74，HSN LP BEATs 5.33 vs BAT 9.21），但原文主要聚焦与 EAT/SSLAM 的对比，对 BEATs 的讨论较为薄弱。这暗示 BAT 的优势可能局限于 MLR 范式内。
- CGP 虽声称是"post-hoc evaluation probe"，但其训练仍需下游标注数据，且在原型空间中的 min-max 池化操作缺乏对时序结构的显式建模，可能在某些顺序敏感任务上丢失信息。

### 📷 论文图片

![图5](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/9DfsHAFE5l-p6-e76978c91.jpg)


---

[← 返回 ICML 2026 论文速递](/audio-paper-digest-blog/posts/icml2026-summary/)
