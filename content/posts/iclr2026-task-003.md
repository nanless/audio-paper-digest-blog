---
title: "ICLR 2026 - 多人动作生成 论文列表"
date: 2026-05-03
draft: false
tags: ["多人动作生成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 多人动作生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 多人动作生成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Unified Multi-Modal Interactive and Reactive 3D Motion Gener](/audio-paper-digest-blog/posts/2026-05-03-unified-multi-modal-interactive-and-reactive-3d) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Unified Multi-Modal Interactive and Reactive 3D Motion Generation via Rectified Flow](/audio-paper-digest-blog/posts/2026-05-03-unified-multi-modal-interactive-and-reactive-3d)

🔥 **8.0/10** | 前25% | #多人动作生成 | #流匹配 | #检索增强生成 #多模态模型

👥 **作者与机构**

- 第一作者：Prerit Gupta（Purdue University, Department of Computer Science）
- 通讯作者：未说明（论文未明确标注通讯作者）
- 作者列表：Prerit Gupta（Purdue University）、Shourya Verma（Purdue University）、Ananth Grama（Purdue University）、Aniket Bera（Purdue University）

💡 **毒舌点评**

这篇工作的核心亮点在于设计了一个“聪明的”统一架构（DualFlow），通过掩码机制让一个模型能同时胜任“双向协作”和“单向跟随”两种任务，并引入针对双人动作的RAG模块，思路非常工整。短板在于，虽然自称SOTA，但对比的基线（如InterGen、DuoLando）并非最新，且在某些指标（如FID）上优势并不明显，缺乏与近两年更多流式生成工作的直接对比，使其“最先进”的成色稍显不足。

🔗 **开源详情**

- 代码：论文在摘要和结论部分承诺“Full code...will be made open source...upon paper acceptance”，但论文中未提供具体的代码仓库链接。
- 模型权重：未提及是否会公开预训练模型权重。
- 数据集：论文使用的数据集（InterHuman-AS, DD100, MDD）是已公开或可获取的，但论文本身未提供新的数据集。
- Demo：未提及在线演示链接。
- 复现材料：论文提供了极其详尽的实现细节，包括模型架构参数、损失函数权重、超参数设置、训练策略、消融研究设置等，并在附录中给出了LLM提示词设计等细节，为复现提供了充分信息。
- 论文中引用的开源项目：主要依赖CLIP（Radford et al., 2021）和Jukebox（Dhariwal et al., 2020）作为特征编码器，并基于InterGen（Liang et al., 2024）的动作表示格式。

📌 **核心摘要**

1.  要解决什么问题：生成现实、上下文感知的双人3D动作是一个核心挑战。现有方法将交互式（双向协调）和反应式（单向跟随）视为独立任务，架构不统一，且大多仅支持单一模态（文本或音乐）条件。
2.  方法核心是什么：提出了DualFlow，第一个统一的、基于修正流的双人动作生成框架。其核心包括：a) 统一架构：通过掩码机制，在一个Transformer模型中无缝切换交互生成（双分支激活）和反应生成（仅反应者分支激活，并使用带有前瞻窗口的因果注意力）；b) 双人动作RAG：利用LLM将文本分解为空间关系、身体动作、节奏三个维度，并结合音乐特征进行检索，将检索到的动作范例注入生成过程；c) 对比修正流与同步损失：使用修正流进行快速确定性采样，并引入对比损失增强语义对齐，以及同步损失提升双人动作的协调性。
3.  与已有方法相比新在哪里：首次统一了交互与反应式生成；首次为双人动作引入基于LLM分解和多维度检索的RAG框架；将修正流应用于双人动作生成并设计了相应的对比与同步训练目标。
4.  主要实验结果如何：在MDD、InterHuman-AS和DD100三个数据集上进行评估。以MDD数据集（文本+音乐条件）为例，关键结果如下表所示：

| 任务 | 方法 | R-Precision@3 | FID↓ | MMDist↓ | BED↑ | BAS↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 交互式 | InterGen(Both) | 0.302 | 0.426 | 1.532 | 0.385 | 0.185 |
| | DualFlow(Both) | 0.513 | 0.415 | 0.513 | 0.286 | 0.179 |
| 反应式 | DuoLando(Both) | 0.219 | 0.698 | 2.113 | 0.395 | 0.224 |
| | DualFlow(Both) | 0.471 | 0.686 | 1.056 | 0.215 | 0.226 |

注：DualFlow在大多数语义对齐和协调性指标上显著优于基线，且推理仅需20步（约1.24秒），比需50步的InterGen快约2.5倍。

5.  实际意义是什么：为VR/AR同伴、社交机器人、游戏智能体等需要生成协调、连贯双人动作的应用提供了高效、统一的解决方案，能根据多模态输入灵活生成交互行为。
6.  主要局限性是什么：RAG的检索质量依赖于检索库和查询的匹配度，对模糊输入可能检索到错误范例；反应式生成中偶尔出现手部或躯干穿透；生成超长序列时可能出现时间漂移。

---

