---
title: "ICLR 2026 - 跨模态检索 论文列表"
date: 2026-05-04
draft: false
tags: ["跨模态检索"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 跨模态检索 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 跨模态检索

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [WAVE: Learning Unified & Versatile Audio-Visual Embeddings w](/audio-paper-digest-blog/posts/2026-05-04-wave-learning-unified-versatile-audio-visual) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [WAVE: Learning Unified & Versatile Audio-Visual Embeddings with Multimodal LLM](/audio-paper-digest-blog/posts/2026-05-04-wave-learning-unified-versatile-audio-visual)

🔥 **8.5/10** | 前25% | #跨模态检索 | #对比学习 | #多模态模型 #音频检索

👥 **作者与机构**

- 第一作者：Changli Tang（清华大学）
- 通讯作者：Chao Zhang（清华大学）
- 作者列表：Changli Tang（清华大学）、Qinfan Xiao（清华大学）、Ke Mei（腾讯微信视觉）、Tianyi Wang（腾讯微信视觉）、Fengyun Rao（腾讯微信视觉）、Chao Zhang（清华大学）

💡 **毒舌点评**

亮点：论文首次将音频和视频与文本统一到同一个基于LLM的嵌入空间，实现了真正的“Any-to-Any”跨模态检索，并在多个基准上取得了SOTA，特别是视频QA任务上性能飙升，展示了强大的指令跟随能力。
短板：模型性能高度依赖强大的基座模型Qwen2.5-Omni，虽然这是合理的技术选择，但在一定程度上模糊了WAVE本身架构创新的独立贡献。另外，评估集虽然全面，但并未完全覆盖音频质量评估、生成等更具挑战性的维度。

🔗 **开源详情**

- 代码：论文提供了代码仓库链接：https://github.com/TCL606/WAVE。
- 模型权重：论文承诺将发布模型检查点（checkpoints）。
- 数据集：论文详细列出了训练数据集（如Panda-70M， AudioSet， AudioCaps等），并说明部分数据（如Panda-70M）进行了重新标注。未明确说明所有数据集是否完全开源。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的架构描述、训练流程、超参数设置（如LoRA配置、学习率、batch size等）和训练硬件信息（192 H20 GPUs）。附录（A-F）提供了推理流程、更多结果和分析。
- 论文中引用的开源项目：明确依赖并初始化自Qwen2.5-Omni（Xu et al., 2025）。音频编码器使用了BEATs（Chen et al., 2022b）。训���数据中提及了Panda-70M， AudioCaps， Clotho， VGGSound等公开或半公开数据集。用于数据重新标注的模型是InternVL-2.5-8B。

📌 **核心摘要**

本文提出了WAVE（统一且多用途的音频视觉嵌入），这是第一个能够为文本、音频、无声视频以及同步音视频输入生成统一嵌入表示的多模态大语言模型（LLM）。该模型旨在解决现有嵌入模型在处理音频和视频等动态模态时，未能构建统一、通用表示空间的问题。
方法核心是基于Qwen2.5-Omni构建，采用分层特征融合策略（聚合LLM多个层的最后令牌隐藏状态）和一个轻量级MLP融合模块。在音频端，采用双编码器设计（语音编码器+BEATs音频事件编码器）以捕获互补信息。训练上采用联合多模态多任务对比学习，支持任何模态对之间的双向检索，并引入任务感知的数据采样器。
与已有方法相比，WAVE是首个为四种模态（文本、音频、视频、音视频）创建统一嵌入空间的模型。它通过指令跟随能力生成提示感知的嵌入，而非常规的固定任务无关表示。
主要实验结果如下：在MMEB-v2视频基准上，WAVE以59.9的总体分数大幅超越其他开源模型（如CAFe 42.4， LamRA 35.0），甚至超过了工业模型Seed-1.6-Embedding（55.3）。在音频检索任务上，WAVE在AudioCaps和Clotho数据集上的R@1分别达到44.2和25.6，优于参考的单编码器模型。在更挑战性的视频到音频检索（VGGSound）和视频到音乐检索（MusicCaps）上，WAVE（25.0， 20.4）显著优于仅使用编码器的基线（24.0， 20.1）。在视频QA任务上，当使用单独的问题作为提示时，WAVE在MMEB-v2视频QA子集上平均达到72.5，比Seed-1.6-Embedding高出约12%。
实际意义在于，WAVE为通用音频视觉表示学习奠定了新基线，可广泛应用于跨模态搜索、推荐和问答等“Any-to-Any”应用。
主要局限性包括：模型性能在很大程度上继承自强大的基座模型Qwen2.5-Omni；评估虽然全面，但在音频生成、更复杂的音频推理等任务上未做评估；论文中提出的“多用途”（Versatile）主要通过提示感知嵌入来体现，其通用性和在更多样化下游任务中的迁移能力有待进一步验证。

---

