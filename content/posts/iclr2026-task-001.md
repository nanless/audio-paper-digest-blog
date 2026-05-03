---
title: "ICLR 2026 - 动作生成 论文列表"
date: 2026-05-03
draft: false
tags: ["动作生成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 动作生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 动作生成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Unified Multi-Modal Interactive and Reactive 3D Motion Gener](/audio-paper-digest-blog/posts/2026-05-03-unified-multi-modal-interactive-and-reactive-3d) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Unified Multi-Modal Interactive and Reactive 3D Motion Generation via Rectified Flow](/audio-paper-digest-blog/posts/2026-05-03-unified-multi-modal-interactive-and-reactive-3d)

✅ **7.5/10** | 前25% | #动作生成 | #流匹配 | #检索增强 #多模态模型

👥 **作者与机构**

- 第一作者：Prerit Gupta（Purdue University, Department of Computer Science）
- 通讯作者：Aniket Bera（Purdue University, Department of Computer Science）（基于论文结构推断）
- 作者列表：Prerit Gupta（Purdue University, Department of Computer Science）、Shourya Verma（Purdue University, Department of Computer Science）、Ananth Grama（Purdue University, Department of Computer Science）、Aniket Bera（Purdue University, Department of Computer Science）

#

💡 **毒舌点评**

本文最大亮点是用一个优雅的“双流”架构统一了交互与反应这两种此前割裂的双人动作生成任务，并引入针对音乐和文本分解的检索增强模块，让生成结果有了更可靠的语义锚点；但论文中将“state-of-the-art”的帽子扣得有些过于随意，在多个关键指标上（如FID）实际上并未显著超越最强基线，这种选择性强调最优指标的表述可能误导读者对其进步幅度的判断。

#

🔗 **开源详情**

- 代码：论文明确表示“Full code for this project along with the trained checkpoints for all tasks will be made open source and publicly available upon paper acceptance”。论文中未提供具体的代码仓库链接（如GitHub URL）。
- 模型权重：承诺公开训练好的模型检查点。
- 数据集：DualFlow使用了MDD、InterHuman-AS、DD100三个公开数据集。论文未声称创建或发布新数据集。
- Demo：论文中提供了项目主页链接 `https://gprerit96.github.io/dualflow-page`，可能包含演示，但未明确说明。
- 复现材料：论文在附录中提供了详细的超参数设置、损失函数权重、模型架构细节（如维度、层数）和训练时长（5000 epochs on batch size 32），复现信息非常充分。
- 引用的开源项目：论文中依赖的主要开源工具/模型包括：CLIP (Radford et al., 2021)、JukeBox (Dhariwal et al., 2020)、SMPL模型 (Loper et al., 2015)。其基线方法如InterGen、DuoLando等也均为公开工作。

📌 **核心摘要**

1.  问题：现有双人3D动作生成方法通常将交互（双向协调）和反应（单向响应）视为独立任务，且多局限于单一模态（文本或音乐）条件，缺乏统一、高效且能处理多模态输入的生成框架。
2.  核心方法：提出DualFlow，一个基于Rectified Flow的统一多模态框架。其核心包括：一个可切换的“双流”Transformer架构，通过掩码机制在同一网络中处理交互和反应任务；一个为双人动作定制的检索增强生成模块，利用LLM将文本分解为“空间关系”、“身体动作”、“节奏”三个维度，并结合音乐特征进行检索，以增强语义对齐；以及对比Rectified Flow目标与同步损失，以提升生成动作的协调性和语义保真度。
3.  新意：1）首次在统一架构中同时处理交互和反应两种双人生成任务，实现无缝切换。2）提出首个针对双人动作的RAG框架，通过多维度文本分解和音乐特征进行检索。3）将对比学习引入Rectified Flow目标，并设计了针对双人协调的同步损失。
4.  实验结果：在MDD、InterHuman-AS和DD100三个数据集上进行了广泛评估。DualFlow在多项指标上取得领先，例如在MDD反应任务中，DualFlow(Both)的R-Precision@3达到0.471（最佳），FID为0.686（最佳）；在InterHuman-AS交互任务中，R-Precision@3为0.681（显著优于InterGen的0.624）。推理速度比需要50步的InterGen快2.5倍（20步 vs 50步）。消融研究证明了RAG、对比损失和同步损失的有效性。

![图1：DualFlow模型概念图，展示其统一处理交互与反应生成，并利用文本、音乐和检索样本进行条件生成。](icassp-img://QaAgHKbJop/0.png)
![图2：DualFlow的(a)整体架构与(b) Multi-Modal DualFlow Block的详细结构，展示了输入处理、掩码机制和多层注意力模块。](icassp-img://QaAgHKbJop/1.png)

5.  实际意义：为VR/AR伙伴、社交机器人和游戏AI提供生成协调、逼真、可响应的双人动作的新方法，提升虚拟角色交互的真实感和智能性。
6.  主要局限性：1) RAG效果高度依赖检索样本的质量和相关性，对模糊或抽象的输入描述可能失效。2) 在反应设置中，近距离接触动作可能出现轻微的穿透现象，因缺乏显式物理约束。3) 长序列生成可能累积时间偏移，影响长期的结构一致性和节奏对齐。

---

