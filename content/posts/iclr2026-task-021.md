---
title: "ICLR 2026 - 语音分词 论文列表"
date: 2026-05-04
draft: false
tags: ["语音分词"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音分词 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音分词

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [StableToken: A Noise-Robust Semantic Speech Tokenizer for Re](/audio-paper-digest-blog/posts/2026-05-04-stabletoken-a-noise-robust-semantic-speech) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [StableToken: A Noise-Robust Semantic Speech Tokenizer for Resilient SpeechLLMs](/audio-paper-digest-blog/posts/2026-05-04-stabletoken-a-noise-robust-semantic-speech)

🔥 **8.5/10** | 前25% | #语音分词 | #多分支模型 | #数据增强 #鲁棒性

👥 **作者与机构**

- 第一作者：Yuhan Song（北京大学计算机科学学院，多媒体信息处理国家重点实验室）
- 通讯作者：Linhao Zhang（腾讯公司微信AI基础模型技术中心）， Houfeng Wang（北京大学计算机科学学院，多媒体信息处理国家重点实验室）
- 作者列表：Yuhan Song（北京大学）, Linhao Zhang（腾讯微信AI）, Chuhan Wu（腾讯微信AI）, Aiwei Liu（腾讯微信AI）, Wei Jia（腾讯微信AI）, Houfeng Wang（北京大学）, Xiao Zhou（腾讯微信AI）

💡 **毒舌点评**

亮点：论文的“比特级投票”机制设计精巧，从量化最底层的比特位而非粗糙的令牌级别进行纠错，这一根本性的架构创新是实现高鲁棒性的关键，思路清晰且有效。
短板：多分支训练策略要求同时处理干净和加噪输入，对数据管线和训练效率提出了额外要求；虽然推理开销声称可忽略，但架构的复杂性和训练成本的增加是需要权衡的因素。

🔗 **开源详情**

- 代码：论文中明确提供了代码仓库链接：https://github.com/Tencent/StableToken。
- 模型权重：论文中提到“our code and model checkpoint will be released publicly upon acceptance”，即模型权重将在论文接收后公开。
- 数据集：训练数据集列出了多个公开和内部数据集（附录B.1）。未提及这些数据集是否统一打包发布。
- Demo：论文中未提及提供在线演示。
- 复现材料：提供了极其详细的训练细节（数据、损失、优化器、超参数、数据增强配置）、下游评估细节（数据集、训练参数、Prompt列表）、消融实验配置和计算效率分析。复现材料非常完备。
- 论文中引用的开源项目：
    - 骨干编码器：Whisper-large-v3 (Radford et al., 2023)
    - 下游SpeechLLM骨干：Qwen2.5-3B (Yang et al., 2024a)
    - 音频重建模型：HiFi-GAN vocoder (Kong et al., 2020)
    - 评估工具：THOP库（用于计算参数量和FLOPs）

📌 **核心摘要**

本文针对现有语义语音分词器（Semantic Speech Tokenizer）对噪声敏感、输出不稳定的问题，提出了StableToken。其核心是采用多分支投票量化（Voting-LFQ）架构和噪声感知共识训练（Noise-Aware Consensus Training）策略。多分支架构为同一输入生成多个“视角”，并通过可微的比特级多数投票机制融合，形成最终稳定令牌，这从根本上提供了架构容错性。训练策略则在训练时向少数分支注入噪声输入，并利用共识损失强制所有分支（包括受扰分支）对齐到由干净分支主导的全局平均表示，从而显式地教导模型忽略无关的声学扰动。实验表明，StableToken在噪声条件下实现了新的最先进水平，平均单元编辑距离（UED）从基线的26.17%大幅降低至10.17%，相对改进超过60%，同时保持了优异的重建质量。这种基础稳定性直接提升了下游语音大模型（SpeechLLM）在语音识别（ASR）、语音情感识别（SER）和语音合成（TTS）等任务上的鲁棒性，尤其在低信噪比（SNR）条件下优势显著（见图3）。本工作的实际意义在于为构建更稳健的端到端语音系统提供了关键的前端组件。主要局限性在于多分支架构引入了额外的模型参数和训练复杂性。

---

