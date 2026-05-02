---
title: "ICLR 2026 - 情感识别 论文列表"
date: 2026-05-02
draft: false
tags: ["情感识别"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 情感识别 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 情感识别

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [AVERE: Improving Audiovisual Emotion Reasoning with Preferen](/audio-paper-digest-blog/posts/2026-05-02-avere-improving-audiovisual-emotion-reasoning) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [AVERE: Improving Audiovisual Emotion Reasoning with Preference Optimization](/audio-paper-digest-blog/posts/2026-05-02-avere-improving-audiovisual-emotion-reasoning)

✅ **7.5/10** | 前25% | #情感识别 | #多模态模型 | #偏好优化 #基准测试

👥 **作者与机构**

- 第一作者：Ashutosh Chaubey（南加州大学创意技术研究所）
- 通讯作者：未说明（论文提供了第一作者和通讯作者的邮箱，但未在作者列表中明确区分）
- 作者列表：Ashutosh Chaubey（南加州大学创意技术研究所）、Jiacheng Pang（南加州大学创意技术研究所）、Maksim Siniukov（南加州大学创意技术研究所）、Mohammad Soleymani（南加州大学创意技术研究所）

💡 **毒舌点评**

该工作像一个严谨的“情感AI产品测试员”，不仅自己设计了一套挑剔的“质检标准”（EmoReAlM基准），还研发了一套让模型“改掉坏习惯”的训练方法（AVEm-DPO），且实验做得很扎实。但它的核心方法（多模态DPO+去偏）更像是对现有技术的巧妙组合与针对性应用，在算法原创性上略显不足，更像是一篇优秀的工程系统论文而非理论突破。

🔗 **开源详情**

- 代码：论文提供了项目页面地址 `avere-iclr.github.io`，并声明代码、模型和基准将公开。
- 模型权重：论文声明将公开模型权重。
- 数据集：论文提出的EmoReAlM基准测试和用于AVEm-DPO训练的偏好数据集均承诺开源。代码、模型和基准将统一在上述项目页面提供。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了极其详尽的附录（Appendix），包括所有数据创建和评估所用的提示（图19-37）、训练细节（C.3）、基准统计（B.3）、人类验证流程（B.2）、消融实验设置（D.5）等，复现材料非常充分。
- 论文中引用的开源项目：依赖的主要开源项目包括：
    - 模型：EmotionLLaMA，Whisper (large-v3)，LanguageBind (视频编码器)，VideoLLaMA，PandaGPT，OneLLM，VITA-1.5，Qwen-2.5 Omni。
    - 数据集：DFEW，MAFW，MER2025，RAVDESS，EMER。
    - 工具：GPT-4o，Gemini-2.5，Qwen-2.5（用于数据生成和评估）。

📌 **核心摘要**

1. 要解决什么问题：当前多模态大语言模型（MLLMs）在音视频情感推理中存在两大问题：一是“推理错误”，即模型将情感错误地关联到不相关的视听线索上；二是“感知错误”，即模型基于语言模型的文本先验，幻觉出不存在的视听线索来解释情感。
2. 方法核心是什么：论文提出一个名为AVEm-DPO的偏好优化技术。它通过构建细粒度的偏好对来对齐模型输出：1）基于提示的模态偏好（PMP），确保模型关注正确的模态；2）基于情感的响应偏好（ERP），直接针对虚假关联和幻觉构建拒绝响应；3）引入文本先验去偏（TPD）正则项，惩罚仅基于文本生成的响应。
3. 与已有方法相比新在哪里：相较于简单的DPO应用，AVEm-DPO创新性地提出了针对音视频输入和情感任务的细粒度偏好构建策略，特别是Prompt-based Modality Preference和Text-Prior Debiasing，这比传统只对响应进行偏好优化的方法更精细，更能解决跨模态幻觉问题。
4. 主要实验结果如何：在多个数据集上，AVEm-DPO显著提升了基线模型性能。例如，在自有EmoReAlM基准上，以“Our base”模型为例，其平均准确率从基线的65.1%提升至AVEm-DPO的83.3%（相对提升28%）。在EMER情感推理数据集的人类评估中，其“情感描述正确率”从基线的5.63%大幅跃升至54.74%。消融实验证明各组件均有效，特别是TPD对降低幻觉至关重要。
5. 实际意义是什么：该工作为评估和改进音视频MLLM的情感推理能力提供了系统性的解决方案，包括一个可复现的基准测试（EmoReAlM）和一套有效的优化方法（AVEm-DPO），有助于构建更可靠、更少幻觉的情感AI代理。
6. 主要局限性是什么：论文承认其基准测试（EmoReAlM）源自DFEW数据集，可能继承其文化偏见；训练数据和基准主要基于短视频，长视频情感理解仍是挑战；模型在“厌恶”这一模糊情感上的识别效果不佳，可能源于训练样本不足；且对虚假音频线索的缓解仍有改进空间。

---

