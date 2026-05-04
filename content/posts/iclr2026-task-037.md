---
title: "ICLR 2026 - 跨模态生成 论文列表"
date: 2026-05-04
draft: false
tags: ["跨模态生成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 跨模态生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 跨模态生成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [FlowBind: Efficient Any-to-Any Generation with Bidirectional](/audio-paper-digest-blog/posts/2026-05-04-flowbind-efficient-any-to-any-generation-with) | 9.5分 | 前10% |

---

## 📋 论文详情

### 🥇 [FlowBind: Efficient Any-to-Any Generation with Bidirectional Flows](/audio-paper-digest-blog/posts/2026-05-04-flowbind-efficient-any-to-any-generation-with)

🔥 **9.5/10** | 前10% | #跨模态生成 | #流匹配 | #音频生成 #多模态模型

👥 **作者与机构**

- 第一作者：Yeonwoo Cha* (KAIST)
- 通讯作者：Seunghoon Hong (KAIST)
- 作者列表：Yeonwoo Cha (KAIST), Semin Kim (KAIST), Jinhyeon Kwon (KAIST), Seunghoon Hong (KAIST)（*表示同等贡献）

💡 **毒舌点评**

亮点在于其“共享潜在空间+单模态可逆流”的设计，用近乎暴力的简洁性一举解决了多模态生成中数据配对、计算成本和训练复杂度的“不可能三角”，工程思想非常漂亮。短板是论文为了突出效率，选用的模型体量和训练数据远小于前沿基线，可能在生成质量的绝对上限上有所妥协，且对更复杂的模态交互（如高保真视频生成）的能力尚未被充分验证。

🔗 **开源详情**

- 代码：论文明确提供了项目主页和代码仓库链接：`https://yeonwoo378.github.io/official_flowbind`。
- 模型权重：论文未提及是否公开预训练模型权重。
- 数据集：论文详细描述了使用的训练数据集（LAION-COCO, Flickr-30k, AudioCaps v2, VGGSound）及其来源，但这些是现有公开数据集，FlowBind本身未发布新数据集。
- Demo：项目主页可能包含演示，但论文中未明确提及。
- 复现材料：提供了非常充分的复现材料，包括：详细的模型架构（MLP with AdaLN-zero）、训练配方（优化器、batch size、训练步数、硬件）、所有超参数、评估协议及指标计算细节。
- 论文中引用的开源项目：EmbeddingGemma (Team et al., 2025), CLIP (Radford et al., 2021), Stable-UnCLIP, CLAP (Elizalde et al., 2023), AudioLDM (Liu et al., 2023), Gemma3-1B。

📌 **核心摘要**

本文旨在解决现有基于流匹配的任意到任意（any-to-any）多模态生成方法效率低下的问题，这些问题包括：对数据配对要求严格（需大量完全配对数据）、计算成本高（需建模联合分布）以及训练流程复杂（多阶段训练）。FlowBind提出一个简洁的框架，其核心思想是学习一个能捕捉跨模态共性的可学习共享潜在空间，并为每个模态配备一个连接该潜在空间的可逆流。所有组件在单一的流匹配目标下联合优化，推理时各模态的可逆流可直接作为编码器/解码器实现跨模态翻译。与基线CoDi和OmniFlow相比，FlowBind通过因式分解相互作用，自然支持使用任意子集模态数据进行训练，在大幅降低数据需求和计算成本的同时，达到了有竞争力的生成质量。实验表明，在文本、图像和音频任务上，FlowBind参数量仅为OmniFlow的约1/6，训练速度快约10倍，且生成质量可比。该框架的意义在于为高效、灵活的多模态生成提供了一种新的通用解决方案。主要局限性在于其当前实验的模型规模较小，在生成细节的保真度上可能不及更庞大的基线模型，且对更复杂、高维的模态（如视频）的泛化能力有待进一步证明。

---

