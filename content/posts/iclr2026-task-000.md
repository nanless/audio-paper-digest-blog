---
title: "ICLR 2026 - 人像动画 论文列表"
date: 2026-05-03
draft: false
tags: ["人像动画"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 人像动画 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 人像动画

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [InterActHuman: Multi-Concept Human Animation with Layout-Ali](/audio-paper-digest-blog/posts/2026-05-03-interacthuman-multi-concept-human-animation-with) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [InterActHuman: Multi-Concept Human Animation with Layout-Aligned Audio Conditions](/audio-paper-digest-blog/posts/2026-05-03-interacthuman-multi-concept-human-animation-with)

🔥 **8.0/10** | 前25% | #人像动画 | #多模态模型 | #扩散模型 #音频生成

👥 **作者与机构**

- 第一作者：Zhenzhi Wang (The Chinese University of Hong Kong)
- 通讯作者：Jianwen Jiang (ByteDance)
- 作者列表：Zhenzhi Wang*1 (The Chinese University of Hong Kong), Jiaqi Yang*2 (ByteDance), Jianwen Jiang*2B (ByteDance), Chao Liang2 (ByteDance), Gaojie Lin2 (ByteDance), Zerong Zheng2 (ByteDance), Ceyuan Yang2 (ByteDance), Yuan Zhang2 (ByteDance), Mingyuan Gao2 (ByteDance), Dahua Lin1 (The Chinese University of Hong Kong) (注：*表示同等贡献，B表示通讯作者)

💡 **毒舌点评**

**亮点：** 该研究精准地抓住了当前“多概念”音频驱动动画的痛点——全局条件注入导致的身份混淆，并为此设计了一套优雅的“显式布局预测+迭代式局部注入”的解决方案，思路清晰，实验证据链完整。
**短板：** 论文的核心贡献高度依赖于一个强大的视频生成基座模型和精准的自动掩码标注流水线，这意味着其性能上限可能受限于基础模型能力与数据质量，而非方法本身，通用性存疑。

🔗 **开源详情**

- **代码**：论文中提供了代码仓库链接：`https://zhenzhiwang.github.io/interacthuman/`。
- **模型权重**：未提及是否公开预训练权重。
- **数据集**：论文中提及构建了超过260万个三元组的数据集，但未说明是否公开或提供获取方式。
- **Demo**：论文提供了在线视频演示页面（`https://zhenzhiwang.github.io/interacthuman/`）。
- **复现材料**：论文提供了详细的算法伪代码（Algorithm 1），并说明基于公开模型（Wan2.1）和框架（PyTorch + FSDP）实现。也提供了部分训练细节（如10,000步，32 A800 GPU，lr=3e-5）和数据集处理代码的指引。
- **引用的开源项目**：Wan2.1 (视频扩散预训练模型)、Qwen2.5-VL (视觉语言模型，用于重述和数据标注)、Grounding-SAM2 (用于生成掩码)、wav2vec 2.0 (音频特征提取)、Florence-2 (目标检测)、RTMpose (姿态估计)、PySceneDetect, PaddleOCR, Q-align, Raft, SyncNet (数据集构建工具)。

📌 **核心摘要**

1. **要解决什么问题？** 现有端到端音频驱动人体动画方法大多假设处理单一对象，并将文本、图像、音频等条件全局注入。这导致它们无法在生成包含多人或人-物交互的视频时，为每个身份精确、独立地绑定其对应的视觉参考和音频信号，从而引发身份混淆和音频错配。
2. **方法核心是什么？** 论文提出了InterActHuman框架。其核心是引入一个轻量级的**掩码预测器**，在扩散模型的去噪过程中，从噪声潜在特征和多个参考图像特征中自动预测每个概念（如每个人）在视频帧中的时空布局（掩码）。在推理时，采用**迭代缓存策略**，即用第k步预测的掩码来指导第k+1步音频条件的**局部注入**（通过掩码加权的交叉注意力），从而打破“鸡生蛋蛋生鸡”的依赖，实现多模态条件与身份在空间上的精准对齐。
3. **与已有方法相比新在哪里？** 与隐式学习身份-条件关系的多概念定制方法（如Phantom, ConceptMaster）和全局注入的动画方法（如OmniHuman）不同，本工作**显式地建模并预测了每个概念的布局**，并将此布局作为统一接口，同时约束了视觉参考图像的注入和音频条件的局部化匹配，实现了更精确、更可控的多身份动画生成。
4. **主要实验结果如何？** 实验表明，该方法在多人音频驱动视频生成任务上显著优于基线。例如，在两人对话测试集上，其**FVD（视频质量指标）从OmniHuman的33.895降至22.881，Sync-D（唇形同步距离）从9.482降至6.670**（表1）。消融实验（表4）证明，动态预测掩码的策略在Sync-D和FVD上均优于全局音频注入、ID嵌入和固定掩码方案。用户研究（表2）也显示该方法在多概念定制任务中获得最高平均分和首选率。
5. **实际意义是什么？** 该工作为**多身份、多模态交互式视频生成**提供了一个有效的框架和基线，有望推动更复杂的虚拟人对话、影视预演、个性化内容创作等应用的发展。
6. **主要局限性是什么？** 论文指出，其训练数据主要来自2-3人的交互视频，可能限制了模型对更多人数（>3）或更罕见交互场景的泛化能力。此外，数据集的构建高度依赖于强大的视觉语言模型和自动标注工具链，其噪声和偏差可能影响模型性能。

---

