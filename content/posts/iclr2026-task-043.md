---
title: "ICLR 2026 - 音视频深度伪造检测 论文列表"
date: 2026-05-04
draft: false
tags: ["音视频深度伪造检测"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音视频深度伪造检测 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音视频深度伪造检测

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Tell me Habibi, is it Real or Fake?](/audio-paper-digest-blog/posts/2026-05-04-tell-me-habibi-is-it-real-or-fake) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Tell me Habibi, is it Real or Fake?](/audio-paper-digest-blog/posts/2026-05-04-tell-me-habibi-is-it-real-or-fake)

🔥 **8.5/10** | 前25% | #音视频深度伪造检测 | #数据集 | #多语言 #零样本

👥 **作者与机构**

- 第一作者：Kartik Kuckreja (MBZUAI)
- 通讯作者：未明确标注，但通讯邮箱主要为 kartik.kuckreja@mbzuai.ac.ae 和 parul@monash.edu
- 作者列表：Kartik Kuckreja (MBZUAI)、Parul Gupta (Monash University)、Injy Hamed (MBZUAI)、Thamar Solorio (MBZUAI)、Muhammad Haris Khan (MBZUAI)、Abhinav Dhall (Monash University)

#

💡 **毒舌点评**

亮点：该论文精准地击中了当前深度伪造检测领域的一个重大盲点——对多语言，尤其是像阿拉伯语这样广泛使用“代码切换”的语言场景的忽视，并为此构建了迄今规模最大、最复杂的专用数据集，为社区提供了极具价值的“练兵场”。短板：论文的重点在于“提出问题”和“提供工具”，而在于“解决问题”（即提出更先进的检测模型）方面着墨较少，其提出的检测方法仅为现有模型的基准测试。数据集生成依赖于GPT-4.1-mini等模型，其指令跟随的局限性可能导致部分“语义+翻译”模式的伪造文本语义变化不足，作者也承认了这一点。

#

🔗 **开源详情**

- 代码：论文中未提及具体的代码仓库链接，但声明“Data-generation code and evaluation scripts will be made public”。
- 模型权重：论文中未提及公开生成管道所用的TTS和唇形同步模型的具体权重链接，这些模型均为第三方已发表模型。
- 数据集：论文明确声明“The dataset is public.”，并提供了访问需要签署的EULA协议图示。
- Demo：未提及。
- 复现材料：论文提供了生成管道的详细描述、文本篡改的提示示例（附录A.6）、数据分布图表、以及评估协议。但超参数、具体配置文件等未在文中给出。
- 论文中引用的开源项目：XTTS-v2, OpenVoice-v2, Fairseq, Diff2Lip, LatentSync, Whisper, YOLO-v5, wav2vec2, Jais-3B, Qwen-2.5-7B等。

📌 **核心摘要**

这篇论文旨在解决深度伪造检测研究中对多语言，特别是阿拉伯语-英语“代码切换”（在同一次话语中混合使用两种语言）场景严重忽视的问题。为解决此问题，论文提出了一个全新的核心贡献：构建并开源了首个大规模的阿拉伯语-英语音视频深度伪造数据集 ArEnAV。该数据集包含约38.7万个视频（超过765小时），通过一个创新的生成管道创建，该管道整合了多个文本转语音（TTS）和唇形同步模型，并利用GPT-4.1-mini进行8种不同规则的文本篡改，以模拟真实世界的代码切换和方言变体。与现有的多语言数据集（如PolyGlotFake）相比，ArEnAV首次专注于并显式生成“句内代码切换”的伪造内容。实验表明，当前最先进的深度伪造检测模型在ArEnAV上的性能出现断崖式下跌（例如，BA-TFD+模型的AP@0.5从AV-1M上的44.42%降至3.74%），甚至人类参与者的检测准确率也仅为60%，这证明了该数据集的挑战性和新场景的真实性。该工作的实际意义在于为开发更鲁棒、适用于全球多语言环境的深度伪造检测系统提供了必需的基准资源。主要局限性包括：数据生成管线依赖现有ASR和LLM，可能导致转录噪声和语义变化不足；数据集目前仅覆盖阿拉伯语和英语两种语言。

#

---

