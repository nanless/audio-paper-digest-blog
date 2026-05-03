---
title: "ICLR 2026 - 音频修复 论文列表"
date: 2026-05-04
draft: false
tags: ["音频修复"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频修复 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频修复

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Token-Based Audio Inpainting via Discrete Diffusion](/audio-paper-digest-blog/posts/2026-05-04-token-based-audio-inpainting-via-discrete) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Token-Based Audio Inpainting via Discrete Diffusion](/audio-paper-digest-blog/posts/2026-05-04-token-based-audio-inpainting-via-discrete)

✅ **7.5/10** | 前25% | #音频修复 | #扩散模型 | #音乐 #令牌模型

👥 **作者与机构**

- 第一作者：Tali Dror (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)
- 第一作者（并列）：Iftach Shoham (Ben-Gurion University of the Negev, Faculty of Computer and Information Science, Data Science Research Center)
- 通讯作者：Eliya Nachmani (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)
- 作者列表：Tali Dror (Ben-Gurion University of the Negev), Iftach Shoham (Ben-Gurion University of the Negev), Moshe Buchris (Ben-Gurion University of the Negev), Oren Gal (University of Haifa), Haim H. Permuter (Ben-Gurion University of the Negev), Gilad Katz (Ben-Gurion University of the Negev), Eliya Nachmani (Ben-Gurion University of the Negev)

💡 **毒舌点评**

论文最大亮点在于将离散扩散模型与WavTokenizer优雅地结合，为解决长间隙音频修复提供了“用令牌表示语义，用扩散填补空缺”的简洁范式，区间掩码和导数正则化的设计也颇具巧思。然而，其性能天花板完全受制于WavTokenizer的重建质量，且“训练时先编码后掩码，推理时先掩码后编码”的Gap虽经实验量化影响不大，却仍是理论上的一处瑕疵。

🔗 **开源详情**

- 代码：提供了代码仓库链接：`https://github.com/iftachShoham/AIDD`。
- 模型权重：论文中未提及公开的预训练模型权重（包括WavTokenizer和训练好的AIDD）。
- 数据集：使用的是公开的MusicNet和MAESTRO数据集，论文未提及数据集本身需要特殊获取。
- Demo：论文提到可访问项目页面查看示例，但未明确提供在线演示链接。
- 复现材料：提供了详细的超参数配置表（表8）、训练环境（单卡A6000）、损失函数公式和架构描述，复现信息较为充分。
- 引用的开源项目/工具：论文依赖并引用了WavTokenizer（Ji et al., 2024）作为音频分词器，也提及了UniCodec（Jiang et al., 2025）作为对比。核心模型架构基于Diffusion Transformer (DiT)（Peebles & Xie, 2023）。

📌 **核心摘要**

本文针对音频修复任务，特别是大间隙（长空白）修复难题，提出了首个基于离散扩散模型的方法（AIDD）。核心思想是先利用预训练的WavTokenizer将原始波形转化为紧凑的离散令牌序列，然后在一个扩散Transformer（DiT） 上执行离散扩散过程来预测和填充缺失的令牌。与以往在连续波形或频谱图上工作的扩散模型不同，该方法在离散语义空间操作，更易捕捉长程依赖。主要创新包括：1）区间掩码（Span Masking），在扩散前向过程中对连续的令牌区间进行掩码，更符合音频的局部连续性；2）导数正则化损失（Derivative-Based Loss），惩罚预测令牌在嵌入空间中的不规则波动，以增强时序平滑性。在MusicNet和MAESTRO数据集上的实验表明，对于150ms至750ms的间隙，AIDD在客观指标（如FAD、LSD）和主观MOS评分上均持续优于多种传统方法和基于连续扩散的基线（如CQT-Diff+、GACELA）。例如，在MusicNet 300ms间隙上，AIDD的FAD比CQT-Diff+降低约25%。该方法的实际意义在于为音乐修复、数据补全提供了新思路。其主要局限性是最终修复质量严重依赖WavTokenizer的编码-解码能力，且受限于其24kHz的带宽。

---

