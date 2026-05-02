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
| 🥇 | [Tell me Habibi, is it Real or Fake?](/audio-paper-digest-blog/posts/2026-05-03-tell-me-habibi-is-it-real-or-fake) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Tell me Habibi, is it Real or Fake?](/audio-paper-digest-blog/posts/2026-05-03-tell-me-habibi-is-it-real-or-fake)

✅ **7.0/10** | 前25% | #语音伪造检测 | #数据集 | #多语言 #音频深度伪造检测

👥 **作者与机构**

- 第一作者：未说明
- 通讯作者：未说明
- 作者列表：Kartik Kuckreja（MBZUAI）、Parul Gupta（Monash University）、Injy Hamed（MBZUAI）、Thamar Solorio（MBZUAI）、Muhammad Haris Khan（MBZUAI）、Abhinav Dhall（Monash University）

💡 **毒舌点评**

本文档最大的亮点在于填补了“阿拉伯语-英语代码转换”这一高真实场景下音视频深度伪造检测数据集的空白，数据规模与生成流水线的复杂度都值得肯定。然而，其数据生成严重依赖GPT-4.1-mini等闭源API与有限的几个TTS/唇同步模型，生成的“伪造”样本在语言学操控的自然度与多样性上可能存在天花板，且论文将大量篇幅用于数据集构建细节，对基于此数据集能催生何种新检测方法的探讨相对薄弱。

🔗 **开源详情**

- 代码：论文中未提及具体的代码仓库链接，但承诺数据生成代码和评估脚本将公开。
- 模型权重：未提及公开训练好的检测模型权重。
- 数据集：公开。ArEnAV数据集将公开发布，但访问需签署严格的学术非商业用途EULA协议，并提供大学IRB批准号。
- Demo：未提及在线演示。
- 复现材料：论文提供了非常详细的生成流水线描述、文本操控提示词（附录A.6）、评估设置、扰动列表（附录A.4）以及所有评估模型的训练/微调配置，复现指引较为充分。
- 依赖的开源项目：文中提到的依赖包括：Whisper-v2、wav2vec2、XTTS-v2、OpenVoice-v2、Fairseq Arabic TTS、Diff2Lip、LatentSync、YOLO-v5、InsightFace、DBSCAN以及多个评估基线模型（Meso4, Xception, BA-TFD, XLSR-Mamba等）。

📌 **核心摘要**

1.  问题：现有的深度伪造检测研究大多局限于单语言内容，忽略了全球普遍存在的多语言及语码转换（Code-Switching，如阿拉伯语-英语混用）场景。这种语言混合现象会迷惑主要基于单语数据训练的检测模型。
2.  方法核心：本文构建并发布了首个大规模阿拉伯语-英语音视频深度伪造数据集ArEnAV。数据集包含38.7万视频，超过765小时，源自真实YouTube内容，并经过精心设计的生成流水线进行语义和音视频伪造。该流水线整合了文本操控、多种TTS和唇同步模型。
3.  新意：ArEnAV是首个同时关注句内代码转换、方言多样性（如埃及、黎凡特、海湾方言）和单语阿拉伯语内容的音视频深度伪造基准数据集。其生成流水线支持八种文本修改模式，能精细控制语言类型与语义的变化。
4.  主要实验结果：
    - 基准测试：现有SOTA模型（如BA-TFD）在ArEnAV上的性能相比在AV-1M等数据集上下降超过35%（AP@0.5指标）。
    - 检测性能：在ArEnAV测试集上，经过微调的最佳模型BA-TFD的AUC为79.97%，准确率仅27.44%，远低于其在其他单语数据集上的表现。
    - 人类评估：19名参与者的用户研究表明，人类检测准确率仅为60%，且难以定位伪造片段（AP@0.5为0.79%）。
    - 跨数据集泛化：在FF++、CelebDF等数据集上表现优异的模型（如Face-X-Ray， AUC>80%），在ArEnAV上的AUC仅略高于随机猜测（~50%）。
5.  实际意义：该数据集揭示了多语言混合场景下深度伪造检测的巨大挑战，为推动构建更鲁棒、能处理真实世界语言多样性的检测系统提供了关键资源和基准。
6.  主要局限性：数据集构建依赖于当前对阿拉伯语效果有限的ASR模型（Whisper-v2）和LLM（GPT-4.1-mini），可能导致转录本噪声或语义操控不理想；目前仅涵盖阿拉伯语和英语两种语言。

---

