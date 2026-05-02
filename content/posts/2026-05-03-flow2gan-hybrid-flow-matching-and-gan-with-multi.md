---
title: "Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution Network for Few-step High-Fidelity Audio Generation"
date: 2026-05-03
draft: false
tags: [音频生成, 流匹配, 神经声码器, 生成模型]
categories: [iclr-2026]
description: "音频生成 | 8.5/10"
hiddenInHomeList: true
---

# 📄 Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution Network for Few-step High-Fidelity Audio Generation

#音频生成 #流匹配 #神经声码器 #生成模型

🔥 **8.5/10** | 前25% | #音频生成 | #流匹配 | #神经声码器 #生成模型

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 1.0 | 置信度 高


### 👥 作者与机构

- 第一作者：Zengwei Yao（Xiaomi Corp., Beijing, China）
- 通讯作者：Daniel Povey（dpovey@xiaomi.com, Xiaomi Corp., Beijing, China）
- 作者列表：Zengwei Yao（Xiaomi Corp.），Wei Kang（Xiaomi Corp.），Han Zhu（Xiaomi Corp.），Liyong Guo（Xiaomi Corp.），Lingxuan Ye（Xiaomi Corp.），Fangjun Kuang（Xiaomi Corp.），Weiji Zhuang（Xiaomi Corp.），Zhaoqing Li（Xiaomi Corp.），Zhifeng Han（Xiaomi Corp.），Long Lin（Xiaomi Corp.），Daniel Povey（Xiaomi Corp.）

### 💡 毒舌点评

本文巧妙地将Flow Matching的“稳定训练”与GAN的“高效推理”结合，提出了一个工程上非常实用的两阶段音频生成方案，尤其是在处理音频静音段和感知损失缩放上的改进颇具巧思。然而，其最终模型（78.9M参数）相比Vocos（13.5M）等轻量级声码器在参数量上并不占优，这在部署到边缘设备时可能会成为一个考量点。

### 🔗 开源详情

- 代码：提供GitHub代码仓库链接：https://github.com/k2-fsa/Flow2GAN
- 模型权重：论文中提到源代码和预训练检查点已发布在上述仓库。
- 数据集：使用的LibriTTS等数据集为公开数据集，论文未提供新的数据集。
- Demo：提供在线演示样本链接：https://flow2gan.github.io
- 复现材料：论文在附录中提供了详细的模型配置表（Table 10），并在正文5.1节说明了优化器、训练步数、硬件等关键训练细节，复现信息充分。
- 论文中引用的开源项目：依赖Vocos的架构设计，采用了HiFi-GAN的MPD和Univnet的MRD判别器，使用了ConvNeXt网络，优化器为ScaledAdam。

### 📌 核心摘要

1.  要解决的问题：现有音频生成方法面临权衡：GAN训练不稳定但推理快，Flow Matching/扩散模型训练稳定但推理慢（需要多步采样）。本文旨在结合两者优势，实现少步（1/2/4步）高保真音频生成。
2.  方法核心：提出Flow2GAN两阶段框架。第一阶段，使用改进的Flow Matching目标（改为直接预测终点`x1`而非速度`vt`，并引入基于频谱能量的损失缩放）训练模型，学习稳健的生成能力。第二阶段，将第一阶段训练好的模型初始化为少步生成器，通过GAN微调（使用MPD和MRD判别器）进一步提升细节和实现快速推理。同时，设计了处理不同时间-频率分辨率傅里叶系数的多分支ConvNeXt网络作为骨干。
3.  与已有方法相比新在哪里：
    - 框架创新：首次将音频特定的Flow Matching改进与GAN微调系统化地结合为两阶段训练范式。
    - Flow Matching改进：针对音频的空静音段和感知特性，提出了端点估计目标和频谱能量自适应损失缩放，优于标准Flow Matching和逐帧能量缩放。
    - 网络架构：扩展了Vocos的单分辨率频谱处理到多分辨率分支架构，增强了建模能力。
    - 效果显著：经过改进的Flow Matching预训练，为后续GAN微调提供了更强的初始化，使得最终的少步生成器（尤其是1步）性能显著优于基于标准Flow Matching的微调（如PeriodWave-Turbo）。
4.  主要实验结果：在Mel谱和音频token条件生成上均取得优异结果。关键数据见下表：
    | 模型 (条件) | 步数 | PESQ↑ | ViSQOL↑ | FSD↓ | SMOS↑ | MOS↑ |
    | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
    | Flow2GAN (Mel, LibriTTS) | 1 | 4.189 | 4.957 | 0.028 | 4.44 | 4.39 |
    | Flow2GAN (Mel, LibriTTS) | 4 | 4.484 | 4.986 | 0.016 | 4.60 | 4.58 |
    | BigVGAN-v2 (Mel, LibriTTS) | 1 | 4.379 | 4.971 | 0.014 | 4.65 | 4.59 |
    | Flow2GAN (AudioToken 3kbps) | 2 | 2.442 | 4.049 | 0.843 | 4.19 | 4.07 |
    | PeriodWave-Turbo (AudioToken 3kbps) | 4 | 2.160 | 4.058 | 1.018 | 3.04 | 3.16 |
    消融实验证实，端点估计目标（+0.455 PESQ）、频谱能量损失缩放以及多分辨率架构均带来稳定性能提升。在TTS声码器任务中，Flow2GAN也展现出竞争力。
5.  实际意义：该方法为高质量音频生成提供了一个新的、高效的解决方案，特别适合对延迟敏感的应用场景（如实时TTS、互动媒体）。其“预训练+微调”的范式和针对音频的Flow Matching改进可能对相关领域（如音频编辑、音效生成）有启发。
6.  主要局限性：1) 模型参数量（78.9M）大于Vocos等模型，在资源受限设备上的部署需权衡；2) 1步生成的质量相比多步仍有差距，虽然已显著优于其他1步方法；3) 论文主要关注生成质量与速度的权衡，对模型在噪声、失真等条件下的鲁棒性未深入探讨。

### 🏗️ 模型架构

Flow2GAN的整体框架如图1所示，分为两个训练阶段和一个核心的多分辨率网络。

![Flow2GAN框架图](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/5eTpRIULtb-0.png)

图1：Flow2GAN总体框架图。展示了两阶段训练过程：第一阶段使用改进的Flow Matching训练生成器`gθ`；第二阶段构建少步生成器`Gθ`并通过GAN微调。

1.  第一阶段：改进的Flow Matching训练
    - 输入：噪声样本`x0`（从`pnoise`采样）、真实音频`x1`（从`pdata`采样）、插值时间步`t`（从`U[0,1]`采样）以及条件`c`（Mel谱或音频token编码）。
    - 过程：构造插值点`xt = (1-t)x0 + t x1`。网络`gθ(xt, t|c)`直接预测终点`x1`（而非速度`vt`）。
    - 损失：使用改进的损失函数`L''_FM`（公式6），该损失在频谱域计算预测误差，并根据参考频谱`x1`的能量进行自适应缩放，以强调安静区域。
    - 输出：训练好的Flow Matching模型，可用于多步采样。

2.  第二阶段：GAN微调
    - 构建少步生成器：将训练好的Flow Matching模型通过`N`步（`N=1,2,4`）前向计算，构成一个端到端的少步生成器`Gθ(x0|c)`。对于`N>1`，梯度会反向传播通过所有步，实现端到端优化。
    - 对抗训练：使用HingeGAN损失、L1特征匹配损失和多尺度L1 Mel谱重建损失，结合MPD和MRD判别器对`Gθ`进行微调，以细化音频细节并稳定少步生成。

3.  核心骨干：多分辨率网络
    该网络结构如图3所示，是Flow Matching和GAN生成器共享的骨干网络。
    ![多分辨率网络结构](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/5eTpRIULtb-2.png)
    图3：多分辨率网络结构。模型包含三个并行分支，分别处理不同时间-频率分辨率的傅里叶系数。
    - 输入处理：输入信号`xt`首先经过条件编码器（ConvNeXt）处理条件`c`，提取高层特征。
    - 多分支处理：`xt`被送入三个并行分支。每个分支先执行STFT，得到复数傅里叶系数。将实部和虚部在特征维度拼接，然后输入一个独立的ConvNeXt模块进行处理，输出处理后的复数系数。
    - 输出合成：每个分支的输出通过ISTFT转换回波形域。最终模型的输出是三个分支波形输出的求和。
    - 设计动机：不同分辨率（由STFT的窗长和跳数决定）能捕捉音频中不同时间粒度和频率精度的特征。低分辨率分支（长窗）更适合建模全局结构和低频，高分辨率分支（短窗）更适合建模瞬时细节和高频。这种设计相比单分辨率架构（如Vocos）提供了更强的建模能力。

### 💡 核心创新点

1.  两阶段“Flow-to-GAN”训练范式：
    - 局限：单独使用GAN训练收敛慢、不稳定；单独使用Flow Matching推理步数多、慢。
    - 创新：提出第一阶段用改进的Flow Matching进行预训练，学习稳健的生成分布和音频结构，为第二阶段提供高质量的初始化。第二阶段用轻量级GAN微调，快速提升细节并适配少步推理。
    - 收益：结合了Flow Matching的训练稳定性和GAN的高效推理。消融实验证明，该范式比纯GAN训练更快达到更好效果，且比基于标准Flow Matching的微调（如PeriodWave-Turbo）在1步生成上性能大幅提升（见表3）。

2.  针对音频特性的Flow Matching目标改进：
    - 局限：标准Flow Matching要求网络预测速度场`vt`，在音频的静音段（`x1≈0`）难以学习`vt≈-x0`；且MSE损失对所有区域平等对待，不符合人耳对安静区域噪声更敏感的特性。
    - 创新：a) 端点估计：将目标改为直接预测干净数据点`x1`，网络学习“从噪声`xt`恢复`x1`”，避免了速度预测难题。b) 频谱能量自适应损失缩放：在频域计算损失，并除以参考频谱能量的平方根，自适应地提高安静区域的损失权重。
    - 收益：改进后的Flow Matching模型在2步采样时质量显著提升（表3），为GAN微调奠定了更强的基础。

3.  多分辨率频谱处理骨干网络：
    - 局限：Vocos等单分辨率模型可能无法同时最优地捕捉音频的全局结构和局部细节。
    - 创新：设计多分支ConvNeXt架构，每个分支处理不同时间-频率分辨率的STFT系数，最后融合。并为不同分支分配不同的嵌入维度以平衡性能和效率。
    - 收益：在参数量相当的情况下，多分辨率模型性能优于单分辨率基线（表6），验证了该设计的有效性。

### 🔬 细节详述

- 训练数据：
    - Mel谱条件：LibriTTS数据集，585小时英文语音，24kHz采样率。
    - 音频token条件：多数据集混合，包括Common Voice 7.0（语音）、DNS Challenge 4 clean（语音）、MTG-Jamendo（音乐）、AudioSet和FSD50K（音效），统一重采样至24kHz。
    - 数据增强：未明确提及特定数据增强技术。
- 损失函数：
    - Flow Matching阶段：`L''_FM`（公式6），基于频谱的能量自适应MSE损失。
    - GAN微调阶段：HingeGAN对抗损失 + L1特征匹配损失 + 多尺度L1 Mel谱重建损失。Mel谱重建使用窗口长度{32, 64, 128, 256, 512, 1024, 2048}，Mel滤波器组数量{5, 10, 20, 40, 80, 160, 320}。
- 训练策略：
    - 优化器：ScaledAdam（具有更快收敛性）。
    - 训练步数：Mel谱条件：Flow Matching 92k步，GAN微调110k步。音频token条件：Flow Matching 180k步，GAN微调190k步。
    - 批量大小：未明确说明。
- 关键超参数：
    - 模型参数量：78.9M（Mel谱和音频token条件模型）。
    - 网络层数：每个分支8层ConvNeXt，条件编码器4层。
    - 分支嵌入维度：768, 512, 384。
    - 条件编码器嵌入维度：512。
    - 卷积核大小：7。
- 训练硬件：NVIDIA H20 GPU。Mel谱条件模型使用2块，音频token条件模型训练Flow Matching时使用8块，GAN微调时使用2块。
- 推理细节：使用Euler方法（公式5）进行少步采样。对于1步生成器，直接从噪声预测输出。
- 正则化或稳定训练技巧：使用BiasNorm替代LayerNorm，使用PreLU激活。GAN微调阶段的损失缩放系数被钳制在0.01到100之间以保证稳定。

### 📊 实验结果

本文在Mel谱条件和音频token条件两个场景下进行了全面评估。

表1：Mel谱条件下的SOTA对比（LibriTTS测试集）
| 模型 | 参数量(M) | PESQ↑ | ViSQOL↑ | V/UV F1↑ | Periodicity↓ | FSD↓ | SMOS↑ | MOS↑ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| BigVGAN | 112.4 | 4.241 | 4.964 | 0.969 | 0.071 | 0.022 | 4.47 | 4.33 |
| BigVGAN-v2* | 112.4 | 4.379 | 4.971 | 0.978 | 0.055 | 0.014 | 4.65 | 4.59 |
| Vocos | 13.5 | 3.618 | 4.898 | 0.951 | 0.105 | 0.042 | 4.10 | 4.38 |
| RFWave (10 steps) | 18.1 | 4.220 | 4.772 | 0.957 | 0.098 | 0.412 | 4.24 | 4.29 |
| PeriodWave-Turbo (4 steps) | 70.2 | 4.434 | 4.965 | 0.958 | 0.096 | 0.020 | 4.20 | 4.38 |
| WaveFM (1 step) | 19.5 | 3.540 | 4.894 | 0.943 | 0.124 | 0.098 | 3.72 | 3.76 |
| Flow2GAN, 1-step (ours) | 78.9 | 4.189 | 4.957 | 0.975 | 0.063 | 0.028 | 4.44 | 4.39 |
| Flow2GAN, 2-step (ours) | 78.9 | 4.440 | 4.979 | 0.983 | 0.044 | 0.023 | 4.53 | 4.56 |
| Flow2GAN, 4-step (ours) | 78.9 | 4.484 | 4.986 | 0.985 | 0.037 | 0.016 | 4.60 | 4.58 |
注：BigVGAN-v2使用了更大规模数据集训练。

关键结论：Flow2GAN（4步）在PESQ、ViSQOL、V/UV F1、Periodicity上取得最优，MOS接近BigVGAN-v2。Flow2GAN（1步）显著优于其他1步方法（WaveFM）和部分多步方法（RFWave）。

表2：音频token条件下的SOTA对比（统一测试集）
| 带宽(kbps) | 模型 | PESQ↑ | ViSQOL↑ | FSD↓ | SMOS↑ | MOS↑ |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| 1.5 | PeriodWave-Turbo (4-step) | 1.260 | 3.308 | 4.055 | 1.55 | 1.47 |
| | Flow2GAN, 4-step (ours) | 1.925 | 3.662 | 1.069 | 3.17 | 3.40 |
| 3.0 | PeriodWave-Turbo (4-step) | 2.160 | 4.058 | 1.018 | 3.04 | 3.16 |
| | Flow2GAN, 4-step (ours) | 2.550 | 4.091 | 0.804 | 4.03 | 4.08 |
| 6.0 | PeriodWave-Turbo (4-step) | 3.229 | 4.424 | 0.712 | 4.00 | 4.40 |
| | Flow2GAN, 4-step (ours) | 3.089 | 4.351 | 0.678 | 4.19 | 4.38 |
| 12.0 | PeriodWave-Turbo (4-step) | 3.579 | 4.544 | 0.776 | 4.32 | 4.56 |
| | Flow2GAN, 4-step (ours) | 3.538 | 4.531 | 0.557 | 4.22 | 4.50 |
注：仅列出最佳Flow2GAN变体（4步）与主要竞争对手对比。

关键结论：在低带宽（1.5, 3.0 kbps）下，Flow2GAN全面占优。在高带宽下，PESQ/ViSQOL接近或略低于PeriodWave-Turbo，但在FSD（分布相似性）和主观SMOS/MOS上表现更优。

关键消融实验（表3，部分数据）：
| 方法 (Mel条件) | Flow Matching 2步 PESQ↑ | GAN微调 1步 PESQ↑ | GAN微调 2步 PESQ↑ |
| :--- | :---: | :---: | :---: |
| 标准Flow Matching | 2.351 | 3.730 | 4.257 |
| 预测x1，无损失缩放 | 2.806 | 4.173 | 4.332 |
| 预测x1，有逐帧损失缩放 | 3.140 | 4.201 | 4.388 |
| 预测x1，有频谱损失缩放 (最终) | 3.469 | 4.303 | 4.471 |
注：数据来自LibriTTS开发集。

关键结论：端点估计目标和频谱能量损失缩放带来了显著且一致的性能提升，且优于逐帧能量缩放。

实验结果图：图2直观展示了改进效果。从(b)噪声到(d)标准Flow Matching生成结果，静音段有明显噪声；(e)改进Flow Matching结果干净很多；(f) GAN微调后进一步丰富了细节。
![生成结果对比](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/5eTpRIULtb-1.png)
图2：不同阶段生成结果示例。展示了从噪声(b)到标准Flow Matching结果(d)、改进Flow Matching结果(e)以及最终GAN微调结果(f)的演进过程，突出了各改进点的效果。

推理速度（表7，部分数据）：
| 模型 | 参数量(M) | xRT (GPU)↑ |
| :--- | :---: | :---: |
| Vocos | 13.5 | 6440.80 |
| PeriodWave-Turbo (4-step) | 70.24 | 43.70 |
| WaveFM (1-step) | 19.5 | 226.31 |
| Flow2GAN, 1-step (ours) | 78.9 | 851.67 |
| Flow2GAN, 4-step (ours) | 78.9 | 228.48 |

关键结论：Flow2GAN（1步）在GPU上实现了极快的推理速度（851.67 xRT），远超大多数基线，体现了效率优势。

### ⚖️ 评分理由

- 学术质量 (6.0/7)：创新性体现在系统性地提出并验证了“Flow Matching预训练 + GAN微调”的两阶段范式，并在Flow Matching的目标函数和网络架构上做出了针对性的、有效的改进。技术实现正确，实验设计全面，包含了SOTA对比、多场景（Mel谱/音频token）、多指标评估以及详尽的消融实验，证据链完整可信。扣分点在于核心框架并非全新提出（PeriodWave-Turbo有类似思路），但本文的改进使其效果显著优于后者。
- 选题价值 (1.5/2)：问题明确（高质量与高效率的权衡），解决方案实用，实验结果在质量和速度上都展现了竞争力。作为音频生成的底层技术，其进步对语音合成、音乐生成等多个下游应用具有直接价值。
- 开源与复现加成 (1.0/1)：提供了可直接运行的完整代码库、预训练模型、清晰的复现步骤和详尽的配置说明，极大地降低了复现门槛，为社区研究和应用提供了便利。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
