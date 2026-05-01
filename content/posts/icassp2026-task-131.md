---
title: "ICASSP 2026 - 音频水印 论文列表"
date: 2026-04-29
draft: false
tags: ["音频水印"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音频水印 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音频水印

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [AURA: A Stegaformer-Based Scalable Deep Audio Watermark with](/audio-paper-digest-blog/posts/2026-04-29-aura-a-stegaformer-based-scalable-deep-audio) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [AURA: A Stegaformer-Based Scalable Deep Audio Watermark with Extreme Robustness](/audio-paper-digest-blog/posts/2026-04-29-aura-a-stegaformer-based-scalable-deep-audio)

✅ **7.5/10** | 前25% | #音频水印 | #条件生成 | #音频安全 #Conformer

👥 **作者与机构**

- 第一作者：Linxi Li（University of Warwick， OfSpectrum, Inc.）
- 通讯作者：未说明
- 作者列表：Linxi Li（University of Warwick， OfSpectrum, Inc.）、Liwei Jin（OfSpectrum, Inc.）、Yechen Wang（OfSpectrum, Inc.）、Houmin Sun（Duke Kunshan University）、Zi Hu（Duke Kunshan University）、Carsten Maple（University of Warwick）

💡 **毒舌点评**

亮点： 论文直面了现有音频水印方法在应对“极端”攻击（如剧烈变速、高损压缩、录音回放）时崩溃的痛点，并用一套设计周密的实验（包括真实环境下的手机录音回放）令人信服地展示了AURA模型在这些极端场景下近乎完美的鲁棒性，其性能提升是数量级的。短板： 论文引以为傲的“首个缩放定律研究”，其核心结论（如“宽深”模型最优）缺乏足够的理论支撑和普适性验证，目前更像是一次基于小规模网格搜索的经验性观察。此外，人类评估仅用24人测试40个样本，其统计显著性和代表性存疑，难以为“水印不可感知”的结论提供强有力背书。

🔗 **开源详情**

- 代码：论文中提到“主要结果开源”并提供了GitHub结果链接（`https://github.com/BIOVPEPPER/AURA_ICASSP_results`），但该仓库目前仅包含实验结果的汇总数据，并非模型代码或训练代码。论文中未提供完整的代码仓库链接。
- 模型权重：未提及是否公开模型权重。
- 数据集：训练和评估使用的数据集（Emilia, FMA, LibriTTS, GTZAN）为公开数据集，但论文中未提供直接获取链接或特定预处理版本。
- Demo：未提供在线演示。
- 复现材料：提供了核心方法的描述和部分实验结果，但缺乏训练所需的完整超参数配置、代码实现和预训练检查点。论文中引用的开源项目包括RobustDNN的解码器、BigVGAN判别器等。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  问题：现有深度学习音频水印方法在鲁棒性、感知质量和容量之间存在难以调和的“三难困境”，尤其容易在去同步攻击（如裁剪、变速）和媒体平台转码等现实操作下失效。
2.  方法核心：提出AURA框架，其核心是新颖的Stegaformer模块。Stegaformer基于Conformer架构，并在每个子模块（前馈、自注意力、卷积）后创新性地插入Feature-wise Linear Modulation (FiLM)层，利用密钥嵌入向量对特征进行深度调制，实现音频内容与水印的“深度融合”。此外，采用了双编码训练策略和自适应数据增强课程。
3.  与已有方法相比新在哪里：首次将Conformer与FiLM结合用于音频水印，实现了密钥在每一层级的深度条件注入。在训练策略上，提出了双编码以避免水印干扰，并使用自适应增强策略聚焦于难攻击。此外，首次对音频水印模型进行了缩放定律研究。
4.  主要实验结果：AURA（尤其是AURA-Base）在标准变换集上大幅超越了WavMark、SilentCipher、AudioSeal等基线（例如，在音频数据集上平均误码率（BER）为0.11%，而基线均在9%以上）。在论文设计的极端攻击下（如手机录音回放、10倍变速、80%裁剪），基线模型几乎全部失效（BER接近或达到25%-50%的随机猜测水平），而AURA-Base依然保持极低错误率（例如，录音回放BER为0%，10倍变速BER为0%）。主观测试表明，AURA-Base的水印在ABX测试中接近随机猜测（37.07%准确率），意味着其不可感知。缩放研究发现，在64位高容量任务上，“宽而深”的架构能取得音频与音乐域之间更优的性能平衡。

| 模型 | 数据集 | 平均BER (%) | 极端攻击: 录音回放 (AR) BER (%) | 极端攻击: 10倍变速 (SD) BER (%) |
| :--- | :--- | :--- | :--- | :--- |
| WavMark | Audio | 9.74 | 56.25 | 25.00 |
| SilentCipher | Audio | 9.02 | 49.75 | 42.12 |
| AudioSeal | Audio | 14.56 | 40.31 | 36.25 |
| AURA-Base | Audio | 0.11 | 0.00 | 0.00 |
| AURA-Base | Music | 0.67 | - | - |
注：表中数据摘自论文Table 1，平均BER为四大类标准变换的平均值。

![图2: pdf-image-page2-idx1](https://i.imgur.com/example_fig2.png)
图2展示了不同深度（8,10,12层）和宽度（窄/宽）的AURA模型在64位任务下的音频/音乐性能权衡（PWI）。窄架构（蓝色线）随着深度增加，在音频域过拟合而在音乐域性能下降；宽架构（红色线）的性能变化非单调。最优平衡点出现在“宽而深”的配置（如W-10, W-12）。

5.  实际意义：为AI生成音频的内容溯源、版权保护和真实性验证提供了强大的技术基础，特别是在面对现实世界严苛的媒体处理流水线时，有望实现可靠的、大规模的音频指纹/水印部署。
6.  主要局限性：人类评估的样本量和规模较小，可能影响结论的普适性。缩放定律的分析限于特定任务（32/64位）和模型尺寸，其发现是否适用于更大规模的水印模型尚待验证。论文未讨论与更复杂攻击（如针对深度学习水印的对抗性攻击）的对抗能力。

---

