---
title: "ICLR 2026 - 语音伪造检测 论文列表"
date: 2026-05-03
draft: false
tags: ["语音伪造检测"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音伪造检测 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音伪造检测

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Tell me Habibi, is it Real or Fake?](/audio-paper-digest-blog/posts/2026-05-03-tell-me-habibi-is-it-real-or-fake) | 9.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Tell me Habibi, is it Real or Fake?](/audio-paper-digest-blog/posts/2026-05-03-tell-me-habibi-is-it-real-or-fake)

🔥 **9.0/10** | 前25% | #语音伪造检测 | #数据集 | #多语言 #音视频

👥 **作者与机构**

- 第一作者：Kartik Kuckreja (MBZUAI)
- 通讯作者：未说明（但根据邮箱域名判断，作者分属MBZUAI和Monash University）
- 作者列表：Kartik Kuckreja (MBZUAI), Parul Gupta (Monash University), Injy Hamed (MBZUAI), Thamar Solorio (MBZUAI), Muhammad Haris Khan (MBZUAI), Abhinav Dhall (Monash University)

💡 **毒舌点评**

该研究精准地切中了深度伪造检测领域一个被长期忽视但极其重要的现实痛点——多语言代码切换场景，并通过构建大规模、高质量的专用数据集（ArEnAV）给出了有力回应，其数据生成管道和评估体系的工程完备性值得称道。然而，论文的创新高度主要体现在“造轮子”（数据集）上，而非提出新的检测理论或模型；且数据生成管道严重依赖商业API（GPT-4.1-mini）和现成模型，虽有效但原创技术深度有限。

🔗 **开源详情**

- **代码**：论文中提到“The dataset is public.”以及“Data-generation code and evaluation scripts will be made public for various open-sourced models evaluated.”，但未提供具体代码仓库链接。
- **模型权重**：未提及公开生成管道中使用的TTS和唇同步模型的特定微调权重。
- **数据集**：已公开，获取需要遵守严格的学术非商业用途最终用户许可协议（EULA），并需要提供大学IRB批准编号（详见附录A.7）。
- **Demo**：未提及。
- **复现材料**：提供了详尽的数据生成管道说明（包括GPT-4.1-mini的提示文本）、数据集统计信息、评估协议、以及所有基准模型的配置（零样本、预训练、微调）。附录中包含大量补充细节（如扰动列表、修改示例、身份重叠分析）。
- **论文中引用的开源项目**：VisPer (数据来源), Whisper (ASR), wav2vec2 (强制对齐), XTTS-v2, OpenVoice-v2, Fairseq, GPT-TTS (音频生成), Diff2Lip, LatentSync (视频生成), XLSR-Mamba, BA-TFD/BA-TFD+, Meso4, Xception, Video-LLaMA (评估基线)。

📌 **核心摘要**

1.  **问题**：现有深度伪造检测研究和数据集主要关注单语内容，忽略了在全球范围内（尤其是阿拉伯语世界）普遍存在的“语码转换”现象，即同一句话中混合使用多种语言，这使得现有检测模型难以泛化。
2.  **方法核心**：作者提出了ArEnAV，首个大规模的阿拉伯语-英语音视频深度伪造数据集，包含387k个视频，超过765小时。数据生成管道分为三步：a) 利用GPT-4.1-mini对原始转录本进行可控的语义和语言风格（含方言）修改；b) 使用四种TTS和说话人转换模型生成与修改后文本匹配的伪造音频；c) 使用Diff2Lip和LatentSync两种扩散模型生成与伪造音频同步的唇部视频。
3.  **创新点**：a) **首创性**：首个针对阿拉伯语-英语语码转换的深度伪造数据集，涵盖了现代标准阿拉伯语、埃及、黎凡特和海湾方言；b) **管道创新**：结合大语言模型进行细粒度转录操控，并整合多种多语言TTS与唇同步模型；c) **评估全面**：不仅对比现有SOTA模型，还进行了详尽的人类评估，揭示了代码切换对检测造成的独特挑战。
4.  **主要实验结果**：现有SOTA检测模型在ArEnAV上性能急剧下降。例如，BA-TFD+模型（在AV-1M上预训练）的AP@0.5从AV-1M上的44.42%降至ArEnAV上的3.74%（见表11a）。人类用户研究的平均准确率仅为60%，且当伪造发生在英语单词时，85%的人类参与者无法识别（见表5，表6）。这证明了任务的艰巨性和数据集的有效性。

| 方法 (BA-TFD+) | 数据集 | AP@0.5 | AP@0.95 | AR@10 |
| :--- | :--- | :--- | :--- | :--- |
| 预训练于AV-1M | LAV-DF | 96.30 | 4.44 | 78.75 |
| | AV-1M | 44.42 | 0.03 | 34.67 |
| | ArEnAV | 3.74 | 0.04 | 3.05 |

*表11(a)关键结果：SOTA模型在ArEnAV上的性能崩溃*
5.  **实际意义**：为构建能够应对真实世界多语言、多方言复杂场景的下一代深度伪造检测系统提供了关键的基准数据和评估工具，对于维护阿拉伯语社区的数字内容安全至关重要。
6.  **主要局限性**：a) 数据集存在真实/伪造视频数量不平衡；b) 依赖的语音识别模型（Whisper-v2）对阿拉伯语识别能力有限，可能导致部分转录本噪声；c) GPT-4.1-mini在“意义+翻译”模式下有时遵循指令不完全，导致语义变化不足；d) 数据集目前仅限于阿拉伯语和英语两种语言。

---

