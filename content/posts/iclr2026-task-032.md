---
title: "ICLR 2026 - 跨模态生成 论文列表"
date: 2026-05-03
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
| 🥇 | [FlowBind: Efficient Any-to-Any Generation with Bidirectional](/audio-paper-digest-blog/posts/2026-05-03-flowbind-efficient-any-to-any-generation-with) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [FlowBind: Efficient Any-to-Any Generation with Bidirectional Flows](/audio-paper-digest-blog/posts/2026-05-03-flowbind-efficient-any-to-any-generation-with)

✅ **7.5/10** | 前25% | #跨模态生成 | #流匹配 | #跨模态 #多模态模型

👥 **作者与机构**

- 第一作者：Yeonwoo Cha（KAIST），Semin Kim（KAIST）（论文标注*为同等贡献）
- 通讯作者：未明确说明（从邮箱和作者顺序推断，可能为Seunghoon Hong）
- 作者列表：Yeonwoo Cha（KAIST），Semin Kim（KAIST），Jinhyeon Kwon（KAIST），Seunghoon Hong（KAIST）

#

💡 **毒舌点评**

论文的核心亮点在于其优雅的“解耦”思想——用一个共享的、可学习的潜空间作为“桥梁”，让每个模态只管好自己到桥的“连接”，从而优雅地规避了全配对数据需求和高昂的联合分布建模成本。然而，这种简化的代价可能是对模态间复杂、高阶交互的捕获能力有限，尤其在文本理解等需要深度语义的任务上，其表现并未展现出超越专业模型的绝对优势，更像是一个在效率和通用性之间取得了良好平衡的工程范例，而非颠覆性的理论突破。

#

🔗 **开源详情**

- 代码：论文提供了项目主页链接（https://yeonwoo378.github.io/official_flowbind），并说明代码将开源。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：使用了多个公开数据集（LAION-COCO， Flickr30k， AudioCaps， VGGSound），论文附录提供了获取或处理说明。
- Demo：论文中未提及在线演示。
- 复现材料：附录C提供了完整的实现细节，包括架构、数据集详情、训练配方（优化器、学习率、batch size等），信息非常充分。
- 论文中引用的开源项目：EmbeddingGemma (Team et al., 2025)， CLIP (Radford et al., 2021)， Stable-UnCLIP (HuggingFace, 2025)， CLAP (Elizalde et al., 2023)， AudioLDM (Liu et al., 2023)， Gemma3-1B (Team et al., 2025)。

📌 **核心摘要**

1. 要解决什么问题：现有的基于流模型的Any-to-Any生成方法面临三大挑战：需要大规模且配对严格的数据集、建模全模态联合分布的计算成本高、训练流程复杂（多阶段）。
2. 方法核心是什么：提出FlowBind框架。其核心是引入一个可学习的共享潜空间来捕获跨模态的共性信息，并为每个模态学习一个可逆的流网络，用于连接该模态的数据分布与共享潜空间。所有组件在单一的流匹配目标下联合训练。
3. 与已有方法相比新在哪里：不同于CoDi（依赖文本锚点）或OmniFlow（依赖全配对数据），FlowBind的共享潜空间是可学习的，使其天然支持用任意部分配对的数据进行训练。同时，架构解耦（每个流只处理单模态）大幅降低了计算复杂度和参数量，并通过单阶段训练避免了复杂的多阶段流程。
4. 主要实验结果如何：在文本、图像、音频的跨模态生成上进行了全面评估。
    - 效率：相比OmniFlow，训练参数少6倍（568M vs. 3.2B），训练速度快10倍（48 GPU-hr vs. 480* GPU-hr），训练数据量仅为CoDi的0.15%和OmniFlow的1.79%（见表1）。
    - 质量：在单模态生成任务中（见表2、表3），FlowBind在多数生成质量指标（FID， FAD）上达到最优或接近最优，对齐指标（CLIP， CLAP， AIS）上也表现强劲，尤其在图像-音频生成（I→A， A→I）上显著超越基线。在多模态生成任务中（见表4、表5），FlowBind在平衡不同模态条件、避免忽略某一模态方面表现更优。
5. 实际意义是什么：提供了一个简单、高效且数据灵活的框架，用于构建通用的多模态生成模型，降低了训练此类模型的数据和计算门槛。
6. 主要局限性是什么：论文未明确指出。从结果看，其在某些与文本强相关的任务（如I→T， T→I的对齐分数）上并未超越最强的基线或专业模型，可能表明共享潜空间在捕获极复杂语义上仍有局限。此外，实验局限于文本、图像、音频三种模态，对更广泛模态的验证有待补充。

#

---

