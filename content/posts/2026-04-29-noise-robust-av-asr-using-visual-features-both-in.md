---
title: "Noise-Robust AV-ASR Using Visual Features both in the Whisper Encoder and Decoder"
date: 2026-04-29
draft: false
tags: [语音识别, 预训练, 音视频, 鲁棒性]
categories: [icassp-2026]
description: "语音识别 | 8.0/10"
hiddenInHomeList: true
---
### 👥 作者与机构

- 第一作者：Zhengyang Li（Technische Universität Braunschweig, Institute for Communications Technology）
- 通讯作者：未说明
- 作者列表：Zhengyang Li（Technische Universität Braunschweig, Institute for Communications Technology），Thomas Graave（Technische Universität Braunschweig, Institute for Communications Technology），Björn Möller（Technische Universität Braunschweig, Institute for Communications Technology），Zehang Wu（Technische Universität Braunschweig, Institute for Communications Technology），Matthias Franz（Technische Universität Braunschweig, Institute for Communications Technology），Tim Fingscheidt（Technische Universität Braunschweig, Institute for Communications Technology）
### 💡 毒舌点评

亮点：在LRS3基准的噪声测试（MUSAN babble, 0dB SNR）中，基于Whisper medium的“双用”方法相比强力的中间融合基线（Flamingo）取得了高达57%的相对错误率降低（4.07% vs. 9.53%），噪声鲁棒性提升非常显著且可复现。短板：方法的性能高度依赖于一个独立的、参数量庞大的预训练视觉编码器（AV-HuBERT large， 325M参数），这使得整个AV-ASR系统的总参数量远大于音频单模态Whisper，为实际部署（尤其是资源受限场景）带来了显著的计算开销。
### 🔗 开源详情

- 代码：是，论文提供了代码仓库链接：`https://github.com/ifnspaml/Dual-Use-AVASR`。
- 模型权重：未提及是否公开。
- 数据集：实验使用了公开数据集（LRS3, LRS2, VoxCeleb2, MUSAN, NoiseX），但论文未声明发布新数据集。
- Demo：未提及。
- 复现材料：论文提供了关键训练细节（学习率、步数、硬件等），但未提供完整训练脚本、环境配置或超参数文件。
- 论文中引用的开源项目：Whisper ASR [13]、AV-HuBERT [9]。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)
### 📌 核心摘要

1.  问题：现有的音频视觉语音识别（AV-ASR）系统在嘈杂环境中的鲁棒性仍有不足。已有的融合方法要么难以训练（早期融合），要么无法有效建模视听交互（中间融合），无法充分发挥预训练ASR模型的潜力。
2.  方法核心：提出了一种“双用”（Dual-Use）的视觉特征融合策略。首先，将AV-HuBERT提取的视觉特征通过可学习的加法注入到Whisper编码器中，建模视听交互。其次，在Whisper解码器中集成Flamingo块，再次输入相同的视觉特征，帮助解码器根据上下文和噪声条件进行模态权衡。
3.  创新之处：与仅将视觉特征输入编码器（早期融合）或解码器（中间融合）的方法不同，该工作系统性地验证了在Whisper架构的两个关键位置同时使用视觉特征能带来更好的噪声鲁棒性。创新还包括在编码器融合中使用零初始化的可学习缩放因子进行平滑启动。
4.  实验结果：在LRS3 AV-ASR基准测试中，基于Whisper medium的“双用”方法，在MUSAN嘈杂语音（0dB SNR）上，平均词错误率（WER）为4.08%，在NoiseX嘈杂语音上为4.43%，均达到当时最优水平（SOTA）。相比仅在解码器融合的中间融合方法（如mWhisper Flamingo），相对WER降低高达57%。
5.  实际意义：该方法能显著提升语音识别系统在真实嘈杂环境（如汽车、智能眼镜）中的可靠性，推动AV-ASR技术的实用化。
6.  主要局限性：系统复杂度高，计算和内存开销大（依赖两个大型预训练模型）。视觉特征提取是离线的，且论文未探讨其实时性。性能对视觉编码器（AV-HuBERT）的依赖性强。
### 🏗️ 模型架构

论文提出的AV-ASR系统架构如图1所示，整体由视觉前端、音频前端、修改后的Whisper编码器和修改后的Whisper解码器组成。

图1：所提出的双视觉特征使用的音视频语音识别系统架构

完整流程与组件：
1.  视觉前端 (Visual Frontend, `G_V()`)：输入为灰度图像序列 `x^V_{1:T/2}`（25Hz）。经过预处理（人脸对齐、裁剪至88x88）后，输入到AV-HuBERT Large编码器（黄色背景）。该编码器包含一个视觉前端 `G_V()` 和一个由24个编码器块组成的Transformer编码器 `E_V()`。
2.  视觉特征提取 (`h^V_{1:T/2}`)：AV-HuBERT编码器输出视觉隐表示 `h^V_{1:T/2}`。论文实验发现，使用第24个（最后）编码器块的输出效果最佳。
3.  第一次视觉特征使用（编码器注入）：对视觉隐表示 `h^V_{1:T/2}` 进行上采样（逐帧重复）和线性投影（`FC(d)`），使其维度与Whisper的声学特征对齐（长度T，维度d）。然后，与一个零初始化的可学习标量 `α` 相乘，得到视觉特征 `v^V_{1:T}`。该特征与从声学前端 `G_A()` 得到的声学特征 相加，送入Whisper编码器。此设计旨在平滑地启动训练，让模型逐步学习利用视觉信息。
4.  Whisper编码器 (`E_A()`)：处理融合后的特征 `G_A(x^A_{1:2T}) + v^V_{1:T}`，输出视听隐表示 `h^{AV}_{1:T}`。在此过程中，模型的注意力层可以学习音频和视觉特征之间的交互。
5.  第二次视觉特征使用（解码器融合）：AV-HuBERT提取的视觉隐表示 `h^V_{1:T/2}` 被同时送入嵌入在Whisper解码器中的Flamingo块。
6.  Whisper解码器 (`D()`)：在原始Whisper解码器的每个Transformer解码器块前插入一个Flamingo块（橙色背景）。每个Flamingo块包含一个多头交叉注意力层和一个前馈网络，两者均带有门控机制和零初始化。解码器自回归地预测token概率 `P_ℓ`，其输入条件为：来自修改后编码器的视听表示 `h^{AV}_{1:T}`、来自AV-HuBERT的视觉表示 `h^V_{1:T/2}` 以及前序token `y_{1:ℓ-1}`。这使得解码器能够根据上下文动态权衡两个模态的信息。
### 💡 核心创新点

1.  双用视觉特征融合策略：核心创新在于同时在Whisper的编码器和解码器中使用视觉特征。编码器注入用于建模视听交互，解码器注入用于实现模态感知的解码。这弥补了早期融合（仅编码器）和中间融合（仅解码器）各自的不足。
2.  零初始化平滑启动：在编码器注入时，使用零初始化的可学习缩放因子 `α`。这确保了在微调初期，模型从纯音频识别的状态平稳过渡，避免了因突然引入视觉噪声而导致的性能下降。
3.  系统性的架构探索与验证：论文不仅提出了方法，还在不同规模的Whisper模型（tiny到medium）上系统性地验证了“双用”方法的有效性，并与其他融合方法（早期融合、中间融合）进行了全面对比，证明了该方法的一致优越性。
### 🔬 细节详述

- 训练数据：
    - 数据集：LRS3（433小时）、LRS2（224小时）、VoxCeleb2英文子集（1326小时，伪标签）。
    - 总规模：最大使用1929小时视听数据进行微调。
    - 预处理：音频：16kHz，提取26维log-filterbank特征。视频：25Hz，灰度图，人脸对齐后裁剪至88x88 ROI。
    - 数据增强：在微调的AV-ASR阶段，对音频数据添加MUSAN嘈杂语音（babble noise），信噪比（SNR）为0dB。
- 损失函数：未明确说明，但根据Whisper ASR和自回归模型的特性，推断为标准的交叉熵损失。
- 训练策略：
    - 两阶段微调：
        1.  阶段一：在LRS3的纯音频数据上微调Whisper ASR。学习率线性增加至峰值后线性衰减至0。
        2.  阶段二：在视听数据上微调整个AV-ASR系统。
    - 关键超参数：
        - Whisper tiny/base：第二阶段训练20k步，2000步warmup，峰值学习率 `1.0e-4`。
        - Whisper small/medium：第二阶段训练120k步，5000步warmup，峰值学习率 `1.0e-4`。
- 关键超参数：
    - 模型大小：对比了Whisper tiny（37M）、base（72M）、small（240M）、medium（762M）四个版本。AV-HuBERT Large编码器固定为325M参数。
    - 视觉特征来源：消融实验表明，使用AV-HuBERT第24个（最后）编码器块的输出效果最佳。
- 训练硬件：
    - Whisper medium模型：单块Nvidia H100 GPU。
    - 其他模型（tiny/base/small）：单块Nvidia A100 GPU。
- 推理细节：未明确说明解码算法（如束搜索）、束宽等具体参数。标准做法是使用束搜索。
- 正则化/稳定训练：主要依赖于零初始化的平滑启动策略。未提及Dropout等其他正则化手段。
### 📊 实验结果

主要Benchmark：LRS3 AV-ASR任务测试集。
指标：词错误率（WER, %）。

关键对比结果 (Table 1)
在0dB MUSAN嘈杂语音上的表现是核心。

| 方法 (Whisper 基座) | 模式 | 参数量(M) | WER(%) dev-clean | WER(%) test-clean | WER(%) dev-0dB | WER(%) test-0dB |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Whisper small | | | | | | |
| ASR微调 | A | 240 | 3.45 | 1.27 | 19.83 | 10.49 |
| 早期融合 | AV | 566 | 23.20 | 36.22 | 23.17 | 36.99 |
| 中间融合[5] | AV | 652 | 3.29 | 1.49 | 9.23 | 6.83 |
| 双用 (ours) | AV | 652 | 3.24 | 1.60 | 5.28 | 4.41 |
| Whisper medium | | | | | | |
| ASR微调 | A | 762 | 3.24 | 1.20 | 17.00 | 8.90 |
| 早期融合 | AV | 1089 | 11.32 | 14.08 | 13.33 | 18.46 |
| 中间融合[5] | AV | 1391 | 3.05 | 1.58 | 16.70 | 9.53 |
| 双用 (ours) | AV | 1391 | 2.80 | 1.59 | 5.13 | 4.07 |
结论：双用方法在嘈杂条件下（0dB）显著优于早期融合和中间融合基线，且在干净条件下也保持竞争力或更优。

消融实验 (Table 2 - 以Whisper small为例)
1.  融合设计对比：在编码器中，加法融合（`add`）远优于拼接融合（`concat`），在0dB dev集上WER从12.15%降至5.28%。
2.  视觉特征层级：使用AV-HuBERT越深层（越后）的特征，噪声鲁棒性越好。从第0块到第24块，0dB dev WER从10.48%降至5.28%。

| 视觉融合设计 | EV()块 | WER(%) dev-clean | WER(%) test-clean | WER(%) dev-0dB | WER(%) test-0dB |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 双用 (ours, concat) | 24th | 12.20 | 32.07 | 12.15 | 31.98 |
| 双用 (ours, add) | 24th | 3.24 | 1.60 | 5.28 | 4.41 |
| 双用 (ours, add) | 16th | 3.16 | 1.46 | 5.99 | 4.28 |
| ... | ... | ... | ... | ... | ... |
| 双用 (ours, add) | 0th | 3.15 | 1.71 | 10.48 | 6.49 |

SOTA对比 (Table 3)
在LRS3测试集上与先前工作的对比，展示了数据规模的影响和SOTA地位。

| 方法 | 参数量(M) | 微调数据(h) | WER(%) clean | WER(%) avg(-5,0,5dB) | 噪声类型 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| MUSAN babble | | | | | |
| mWhisper Flamingo[5] | 1390 | 1141 | - | - | MUSAN |
| CMA[6] | 500 | 1929 | 11.90 | 5.05 | MUSAN |
| 双用 (ours, medium) | 1390 | 1929 | 1.15 | 4.08 | MUSAN |
| NoiseX babble | | | | | |
| Llama-AVASR[8] | >8000 | 1756 | 16.40 | 5.95 | NoiseX |
| 双用 (ours, medium) | 1390 | 1929 | 11.27 | 4.43 | NoiseX |
结论：使用1929小时数据微调的双用（Whisper medium）模型，在两种嘈杂语音条件下均取得了最佳的平均WER，达到SOTA。
### ⚖️ 评分理由

- 学术质量：6.0/7
    - 创新性：提出了“双用”融合这一简单而有效的设计思路，是对现有融合方法（早期/中期）的有益补充和改进，而非颠覆性创新。
    - 技术正确性：方法设计合理，实验验证充分，包括跨模型规模验证、消融实验（融合设计、特征层级）和不同噪声测试集评估，逻辑清晰。
    - 实验充分性：非常充分。在多个模型尺寸上实验，对比了强基线，进行了细致的消融，最终在公开基准上建立了SOTA，并提供了两种不同来源的噪声测试结果。
    - 证据可信度：高。实验设置详细，结果可复现（代码已提供），且在公认的基准上取得SOTA，数据具有说服力。
- 选题价值：1.5/2
    - 前沿性：AV-ASR是语音识别领域持续关注的前沿方向，提升噪声鲁棒性是其核心挑战之一。
    - 潜在影响与应用空间：直接提升了语音识别在真实嘈杂环境中的实用性，对车载、可穿戴设备等应用有明确价值。
    - 读者相关性：对从事语音识别、多模态学习、鲁棒性研究的读者有较高参考价值。
- 开源与复现加成：0.5/1
    - 论文提供了GitHub代码仓库链接（`https://github.com/ifnspaml/Dual-Use-AVASR`），有助于复现。
    - 但未提及公开预训练模型权重，也未提供详细的训练配置文件或检查点，复现仍需一定工作量。
