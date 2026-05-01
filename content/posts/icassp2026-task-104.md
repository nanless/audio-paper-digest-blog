---
title: "ICASSP 2026 - 音乐推荐 论文列表"
date: 2026-04-29
draft: false
tags: ["音乐推荐"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音乐推荐 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音乐推荐

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [MusiCRS: Benchmarking Audio-Centric Conversational Recommend](/audio-paper-digest-blog/posts/2026-04-29-musicrs-benchmarking-audio-centric-conversational) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [MusiCRS: Benchmarking Audio-Centric Conversational Recommendation](/audio-paper-digest-blog/posts/2026-04-29-musicrs-benchmarking-audio-centric-conversational)

✅ **7.5/10** | 前25% | #音乐推荐 | #多模态模型 | #基准测试 #音频检索

👥 **作者与机构**

- 第一作者：未说明（作者列表无顺序指示）
- 通讯作者：未说明
- 作者列表：Rohan Surana（University of California, San Diego, USA）、Amit Namburi（University of California, San Diego, USA）、Gagan Mundada（University of California, San Diego, USA）、Abhay Lal（University of California, San Diego, USA）、Zachary Novack（University of California, San Diego, USA）、Julian McAuley（University of California, San Diego, USA）、Junda Wu（University of California, San Diego, USA）

💡 **毒舌点评**

亮点：本文提出的MusiCRS基准，是首个系统性地将真实Reddit音乐对话与可访问的音频片段（YouTube链接）对齐的工作，填补了音乐对话推荐评估中“对话”与“音频”同时缺失的空白，实验设计严谨，对比维度（模态、流派）清晰。
短板：论文最核心的发现（多模态组合性能常不如单模态）更像一个值得深究的“问题揭示”而非“方案贡献”，且477个对话的规模对于支撑一个健壮的基准来说略显单薄，部分生成模型的Ranking结果与检索模型的差距暗示了任务定义与模型范式可能存在错配。

🔗 **开源详情**

- 代码：提供了评估代码的GitHub仓库链接：`https://github.com/rohan2810/musiCRS`
- 模型权重：未提及提供作者自己的模型权重。评估使用的是多个已公开的预训练模型（如Qwen2-Audio, CLAP等）。
- 数据集：公开提供。数据集在HuggingFace上发布：`https://huggingface.co/datasets/rohan2810/MusiCRS`
- Demo：未提及。
- 复现材料：提供了数据集构建流程的详细描述（第2.1节）、评估协议（第3.1节）和代码仓库，基本复现评估是可行的。但训练新模型所需的具体配置、超参数等未说明（因本文不训练新模型）。
- 论文中引用的开源项目：引用了多个开源预训练模型和数据集工具，包括：Qwen2.5, Gemma-3, Pushshift Reddit Dataset, CLAP, CoLLAP, SALMONN, Audio Flamingo 3, Phi-4-Multimodal, Million Song Dataset等（详见参考文献列表）。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  解决的问题：现有的音乐对话推荐系统评估基准要么缺乏真实对话，要么缺乏与对话直接关联的真实音频内容（grounding），无法有效评估模型在多模态（文本对话+音频内容）环境下的跨模态推理与整合能力。
2.  方法核心：构建了一个名为MusiCRS的新基准数据集，包含从Reddit收集并经人工验证的477段真实音乐推荐对话，覆盖7个流派。每段对话都与用户推荐的音乐（通过YouTube链接锚定）相关联，并设计了仅音频、仅查询、音频+查询三种输入模态配置，用于系统评估各类模型。
3.  与已有方法相比新在哪里：与以往基于播放列表、合成对话或元数据的音乐数据集不同，MusiCRS首次同时具备“真实对话”、“音频锚定”、“推荐真值”和“多模态评估”四项特性（如图1所示）。
4.  主要实验结果：实验揭示了关键发现：（a）多模态组合（音频+查询）并不总能超越单一模态（如CLAP在仅查询下表现最佳，Recall@20=22.71%）；（b）在整体上，检索模型（如CLAP，Recall@20=22.71%）略优于生成模型（如Qwen2.5-Omni，Recall@20=21.93%）；（c）性能存在显著流派差异，如爵士乐模型表现普遍较好（最高28.09%），而流行音乐较低（最高23.38%）。详细对比见下表。
5.  实际意义：该基准为评估和发展能真正理解音乐内容并结合对话上下文进行推荐的AI系统提供了标准化平台，推动了音频中心对话系统的发展。
6.  主要局限性：数据集规模（477对话）有限；实验发现的核心问题——多模态整合失败——被提出但未解决；生成模型用于排序任务的适配性有待商榷。

关键实验结果表（来自Table 1）

| 模型 | 模式 | 整体 Recall@20/nDCG@20 |
| :--- | :--- | :--- |
| CLAP (检索) | 音频 | 21.15/14.90 |
| | 查询 | 22.71/15.90 |
| | 组合 | 22.43/15.82 |
| Qwen2.5-Omni-7B (生成) | 音频 | 19.26/13.48 |
| | 查询 | 18.24/13.96 |
| | 组合 | 21.93/16.21 |
| SALMONN-7B (生成) | 音频 | 20.22/14.31 |
| | 查询 | 18.60/12.62 |
| | 组合 | 19.58/13.73 |
| Phi-4-Multimodal (生成) | 音频 | 20.04/13.72 |
| | 查询 | 19.93/13.95 |
| | 组合 | 18.79/12.76 |
| 流行 (传统) | 查询 | 16.51/11.09 |

---

