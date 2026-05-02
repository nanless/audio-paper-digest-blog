---
title: "ICLR 2026 - 语音延续 论文列表"
date: 2026-05-03
draft: false
tags: ["语音延续"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音延续 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音延续

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [TASTE: Text-Aligned Speech Tokenization and Embedding for Sp](/audio-paper-digest-blog/posts/2026-05-03-taste-text-aligned-speech-tokenization-and) | 9.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [TASTE: Text-Aligned Speech Tokenization and Embedding for Spoken Language Modeling](/audio-paper-digest-blog/posts/2026-05-03-taste-text-aligned-speech-tokenization-and)

🔥 **9.0/10** | 前25% | #语音延续 | #端到端 | #语音大模型 #语音合成

👥 **作者与机构**

- 第一作者：Liang-Hsuan Tseng (台湾大学电气工程系研究生)、Yi-Chang Chen (MediaTek Research) [共同第一作者]
- 通讯作者：Yi-Chang Chen (MediaTek Research)，Da-shan Shiu (MediaTek Research) [根据邮箱域名推断]
- 作者列表：Liang-Hsuan Tseng (台湾大学电气工程系)、Yi-Chang Chen (MediaTek Research)、Kuan Yi Lee (台湾大学电气工程系)、Da-Shan Shiu (MediaTek Research)、Hung-yi Lee (台湾大学AI卓越研究中心)

💡 **毒舌点评**

TASTE的核心亮点在于，它用一个极其简洁优雅的设计（利用ASR输出的文本作为查询，通过交叉注意力聚合声学特征），一石二鸟地解决了联合语音语言建模中长期存在的“长度错配”和“信息冗余”两大痛点，实现了超低比特率下的高质量重建。其短板在于整个管线的“优雅”依赖于一个高质量的ASR转录，在真实噪声环境或无文本场景下的鲁棒性尚未充分验证，且消融实验中使用S3 token作为重建精度的代理指标，而非直接的端到端联合建模指标，略有绕弯。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接 (`https://mtkresearch.github.io/TASTE-SpokenLM.github.io` 页面中包含)。
- 模型权重：论文明确提供了预训练模型的权重链接。
- 数据集：训练使用了公开的Emilia（英文子集）和LibriTTS数据集。评估使用了公开的LibriSpeech test-clean， SALMON， 和StoryCloze基准。
- Demo：论文明确提供了在线演示页面链接。
- 复现材料：论文在附录（A.2 Training Details）中详细说明了训练配置、超参数、优化器设置和硬件信息，提供了充分的复现指导。
- 论文中引用的开源项目：依赖的开源项目/模型包括：Whisper（编码器）、S3 Token（目标单元）、LLaMA系列（TASLM基础模型）、DeepSpeed、Liger Kernel、HiFi-GAN、Flow Matching vocoder、Montreal Forced Aligner（MFA）等。

📌 **核心摘要**

这篇论文旨在解决联合文本-语音语言建模（SLM）中，由于语音标记序列远长于文本序列而产生的长度错配和信息冗余问题。其核心方法是提出TASTE（文本对齐的语音标记化与嵌入），通过一个基于注意力的聚合器，利用ASR模型提取的文本标记作为查询，从预训练的Whisper编码器表示中聚合出与文本一一对应的语音表示，再经过残差向量量化（RVQ）得到离散语音标记。与以往方法（如自监督离散化或神经编解码器）在固定下采样率下生成标记不同，TASTE的标记是动态的、文本对齐的，且设计上专注于承载韵律信息。主要实验结果表明：1) 在LibriSpeech上，TASTE以极低的比特率（~150 bps）实现了与高比特率方法（1500-4000 bps）相当甚至更优的语音重建质量和相似性（见表1）。2) 基于TASTE构建的语音语言模型（TASLM），仅通过LoRA微调一个1.3B的基础模型，在语音延续任务上（语义、声学、人类评估）全面超越了包括7B参数在内的其他预训练SLM（如Spirit LM, TWIST）（见表2）。该工作的实际意义在于，它证明了为联合建模任务专门设计的、高效的标记化方案是提升SLM性能的关键。主要局限性包括：依赖ASR转录，仅评估了英语，未涉及多说话人、重叠语音或非语言事件（如笑声）。

| 方法 | 续写 GPT-4o MOS ↑ | 续写 UTMOS ↑ | 续写 Human MOS ↑ | SALMON准确率 ↑ | StoryCloze准确率 ↑ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Spirit LM (7B) | 2.79 | 3.41 | 2.38 | 59.1% | 72.0% |
| Spirit LM Expr. (7B) | 1.90 | 3.40 | 2.41 | 69.0% | 66.2% |
| TASLM 1B (token) | 3.08 | 4.07 | 3.93 | 60.8% | 76.5% |
| TASLM 1B (embed.) | 3.16 | 4.22 | 4.16 | 57.7% | 76.7% |
| Cascade (LLaMA3.2-1B) | 3.15 | 4.25 | 4.00 | - | - |

---

