---
title: "ICASSP 2026 - 音频压缩 论文列表"
date: 2026-04-29
draft: false
tags: ["音频压缩"]
categories: [icassp-2026]
description: "共 2 篇 ICASSP 2026 音频压缩 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音频压缩

共 **2** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Salad-VAE: Semantic Audio Compression with Language-Audio Di](/audio-paper-digest-blog/posts/2026-04-29-salad-vae-semantic-audio-compression-with) | 7.5分 | 前25% |
| 🥈 | [Respire-Mamba C-UNet: Consistency-Trained Autoencoder for Hi](/audio-paper-digest-blog/posts/2026-04-29-respire-mamba-c-unet-consistency-trained) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Salad-VAE: Semantic Audio Compression with Language-Audio Distillation](/audio-paper-digest-blog/posts/2026-04-29-salad-vae-semantic-audio-compression-with)

✅ **7.5/10** | 前25% | #音频压缩 | #变分自编码器 | #对比学习 #知识蒸馏

👥 **作者与机构**

- 第一作者：Sebastian Braun (Microsoft Research, Redmond, WA, USA)
- 通讯作者：未说明
- 作者列表：Sebastian Braun (Microsoft Research, Redmond, WA, USA), Hannes Gamper (Microsoft Research, Redmond, WA, USA), Dimitra Emmanouilidou (Microsoft Research, Redmond, WA, USA)

💡 **毒舌点评**

亮点在于通过极低的潜在帧率（7.8 Hz）和精简的架构，在压缩效率上取得了显著进步，并创新性地集成了零样本分类和描述生成能力，超越了传统VAE的范畴。短板是其在核心的音频重构质量指标（如DistillMOS, FAD）上仍落后于StableAudio等更复杂的基线，表明其“语义增强”和“高保真重构”的双重目标尚未完美统一，且通用性验证局限于所选数据集。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及公开模型权重。
- 数据集：训练数据为AudioSet（公开），论文未提供特定处理后的版本。
- Demo：提供了在线音频示例链接：https://sebraun-msr.github.io/SALAD-VAE/
- 复现材料：论文详细说明了架构、损失函数、训练策略和超参数，为复现提供了充分信息。
- 论文中引用的开源项目：提及了CLAP（预训练模型）、Whisper（用于WER评估）、AdamW优化器等。
- 总结：论文提供了良好的技术文档和示例，但未承诺开源核心代码和模型，复现仍需一定工程工作。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

本文针对生成式和多模态模型对音频紧凑语义表征的需求，提出了SALAD-VAE，一种连续、高紧凑度的音频变分自编码器。该模型在频域操作，通过创新的训练方案（包括多源混合增强、去噪自编码原理、对比学习和CLAP蒸馏损失），旨在同时提升压缩效率、语义丰富度和泛化能力。与StableAudio VAE、Music2Latent等基线相比，SALAD-VAE的参数量显著减少（小模型仅6.8M参数），潜在帧率极低（7.8Hz），在多个分类基准（如场景分类、事件检测、音乐类型）的潜在空间探测中持续优于基线，其大模型配置（VAE-large D=128）在重建质量上接近基线（例如DistillMOS达到3.35，WER为0.08%）。核心创新是证明了通过多任务学习可以显著提升音频VAE潜在空间的语义密度，并赋予了其零样本分类和音频描述生成这一新能力。主要局限在于，为了兼顾语义和压缩效率，其绝对的音频保真度指标（如FAD为471）仍逊色于更复杂、计算成本更高的专用生成模型，且其有效性基于特定的数据增强和损失函数假设。

实验结果关键数据表1（消融实验）：

| 损失函数配置                     | DistillMOS | WER (%) | FAD    | 场景(mAP) | 事件(mAP) | 情感(mAP) | 音乐(mAP) | 乐器(mAP) |
|--------------------------------|------------|---------|--------|-----------|-----------|-----------|-----------|-----------|
| recon+KLD                      | 1.26       | 0.93    | 1191   | 0.29      | 0.06      | 0.29      | 0.42      | 0.25      |
| recon+KLD+contrastive          | 1.16       | 1.08    | 1320   | 0.31      | 0.07      | 0.31      | 0.46      | 0.27      |
| recon+KLD+CLAP                 | 1.22       | 0.85    | 1229   | 0.51      | 0.27      | 0.38      | 0.78      | 0.39      |
| recon+KLD+CLAP+contr           | 1.18       | 1.06    | 1467   | 0.52      | 0.23      | 0.38      | 0.72      | 0.41      |
| recon+KLD+mbGAN                | 2.76       | 0.17    | 582    | 0.33      | 0.08      | 0.29      | 0.55      | 0.26      |
| recon+KLD+CLAP+contr+mbGAN     | 2.55       | 0.23    | 480    | 0.46      | 0.22      | 0.34      | 0.79      | 0.33      |

实验结果关键数据表2（与基线对比）：

| 模型                            | DistillMOS | WER (%) | FAD   | 场景(mAP) | 事件(mAP) | 情感(mAP) | 音乐(mAP) | 乐器(mAP) | 描述(Clotho) | 描述(AudioCaps) | 参数量(M) | 帧率(Hz) |
|--------------------------------|------------|---------|-------|-----------|-----------|-----------|-----------|-----------|--------------|----------------|-----------|----------|
| StableAudio Open VAE           | 3.60       | 0.03    | 199   | 0.30      | 0.09      | 0.33      | 0.49      | 0.34      | N/A          | N/A            | 156.1     | 21.0     |
| Music2Latent (v1)              | 4.01       | 0.03    | 238   | 0.30      | 0.08      | 0.32      | 0.48      | 0.27      | N/A          | N/A            | 52.9      | 10.0     |
| VAE-large D=128 (本文全损失)   | 3.35       | 0.08    | 471   | 0.49      | 0.27      | 0.37      | 0.82      | 0.41      | 0.09         | 0.14           | 53.6      | 7.8      |

---

### 🥈 [Respire-Mamba C-UNet: Consistency-Trained Autoencoder for High-Fidelity Respiratory Sound Compression](/audio-paper-digest-blog/posts/2026-04-29-respire-mamba-c-unet-consistency-trained)

✅ **7.0/10** | 前25% | #音频压缩 | #一致性训练 | #状态空间模型 #远程医疗

👥 **作者与机构**

- 第一作者：Rishabh（德里大学计算机科学系）
- 通讯作者：未说明
- 作者列表：Rishabh（德里大学计算机科学系）、Yogendra Meena（德里理工大学应用数学系）、Dhirendra Kumar（贾瓦哈拉尔·尼赫鲁大学计算机与系统科学学院）、Kuldeep Singh（德里大学计算机科学系）、Nidhi（J.C. Bose科学技术大学 YMCA）

#

💡 **毒舌点评**

论文成功地将多个前沿技术（SincConv、U-Net金字塔、Mamba、一致性模型）缝合在一起，在呼吸音压缩任务上取得了令人印象深刻的保真度（CC=1.0000），这是其显著亮点。然而，其核心短板在于压缩比（CR=3.91）相对温和，且论文主要贡献更偏向于“工程整合”而非“理论突破”，此外，关键的消融实验（如表1）中“去掉方差缩放/频率门控”性能反而略好于完整模型，这略显反常，论文未给出充分解释。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用公开的SPRSound系列数据集，但论文未说明具体获取方式。
- Demo：未提供在线演示。
- 复现材料：论文给出了模型架构的文字描述和部分关键参数（如SincConv参数、幂律参数），但缺乏训练细节（优化器、学习率、batch size等），不足以支持完整复现。
- 论文中引用的开源项目：引用了Mamba-SSM（[15]）作为实现依赖。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1. 要解决的问题：慢性呼吸疾病诊断中，数字听诊器录音的高效压缩与高保真重建，以支持可扩展的远程医疗。
2. 方法核心：提出Respire-Mamba C-UNet，一个统一的自编码器框架。它结合生理感知的SincConv前端进行特征提取，金字塔UNet进行多尺度编码，以及一个由时间Mamba瓶颈增强的一致性训练UNet进行单步解码重建。
3. 与已有方法相比新在哪里：不同于先前工作孤立处理前端、编码、解码，或追求极端压缩比，本文首次将SincConv的生理感知前端、金字塔多尺度表示、Mamba的高效长程建模与一致性训练的单步重建能力整合，共同优化以获得临床级保真度。
4. 主要实验结果：在SPRSound 2024基准测试上，模型实现了PRD=0.85%， CC=1.0000， CR=3.91，显著优于现有自编码器和压缩感知基线。消融研究证实了各组件的互补增益。关键对比如下表所示：
| 方法 | PRD (%) | CC | CR |
| :--- | :--- | :--- | :--- |
| 压缩感知 [10] | 50.1 | 0.8630 | 3.5 |
| VAE+Transformer [11] | 20.5 | 0.9800 | 256 |
| 卷积自编码器 [9] | 22.3 | 0.9720 | 222.1 |
| 生成式VAE [9] | 7.60 | 0.9757 | 42.67 |
| 压缩感知 [9] | 5.30 | 0.9311 | 4 |
| 本文方法 | 0.85 | 1.0000 | 3.91 |
5. 实际意义：为医疗远程听诊提供了一种高质量、低延迟（单次前向传播）的音频压缩解决方案，有助于推动远程呼吸诊断的普及。
6. 主要局限性：压缩比相对较低，未在更广泛的音频或疾病类型数据集上验证；消融实验中个别结果的解读需要更多分析；未提供代码与模型以支持复现。

#

---

