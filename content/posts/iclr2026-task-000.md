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
| 🥇 | [Unified Multi-Modal Interactive and Reactive 3D Motion Gener](/audio-paper-digest-blog/posts/2026-05-03-unified-multi-modal-interactive-and-reactive-3d) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Unified Multi-Modal Interactive and Reactive 3D Motion Generation via Rectified Flow](/audio-paper-digest-blog/posts/2026-05-03-unified-multi-modal-interactive-and-reactive-3d)

🔥 **8.5/10** | 前25% | #动作生成 | #流匹配 | #舞蹈生成 #检索增强生成

👥 **作者与机构**

- 第一作者：Prerit Gupta（普渡大学计算机科学系）
- 通讯作者：Aniket Bera（普渡大学计算机科学系）
- 作者列表：Prerit Gupta（普渡大学计算机科学系）、Shourya Verma（普渡大学计算机科学系）、Ananth Grama（普渡大学计算机科学系）、Aniket Bera（普渡大学计算机科学系）

💡 **毒舌点评**

亮点：该工作首次在单一、高效的流匹配框架中统一了“交互式”与“反应式”双人动作生成，并引入针对双人动作的RAG模块，技术整合度与解决实际问题的能力很强。短板：模型复杂度较高（456M参数），且RAG模块对检索样本质量和LLM分解的准确性有较强依赖，在极端或模糊输入下性能可能受限。

🔗 **开源详情**

- 代码：论文中承诺在接受后开源完整代码和训练好的检查点，但当前未提供具体链接。
- 模型权重：未提及当前是否提供。
- 数据集：使用了三个公开数据集（InterHuman-AS, DD100, MDD），获取方式未在文中详述。
- Demo：未提及。
- 复现材料：提供了详细的模型架构、超参数、损失函数公式和消融实验设置，复现指南较充分。
- 论文中引用的开源项目：依赖了CLIP、JukeBox、SMPL模型等开源工具。

📌 **核心摘要**

这篇论文旨在解决生成真实、上下文感知的双人交互3D动作这一核心挑战，特别是要在一个统一模型中支持对文本、音乐等多模态输入的响应，并能灵活切换于“交互式”（同步生成两人动作）与“反应式”（根据一方动作生成另一方动作）两种模式。

方法核心是提出DualFlow框架，一个基于Rectified Flow的统一生成模型。其关键创新在于：1）通过掩码机制在单一架构中实现两种生成模式的无缝切换；2）设计了首个用于双人动作的检索增强生成（RAG）模块，利用LLM将文本分解为“空间关系”、“身体动作”、“节奏”三个维度，并结合音乐特征进行检索，以增强语义引导；3）引入对比性流匹配目标与同步损失，以提升生成动作的质量、语义对齐度和双人协调性。

与已有方法相比，DualFlow是首个统一处理双人交互与反应任务、支持多模态条件输入的流匹配框架。相较于主流的扩散模型（如InterGen），它在推理效率上具有显著优势，仅需20步即可完成生成（比50步DDIM快2.5倍）。

主要实验结果在MDD、InterHuman-AS和DD100三个数据集上进行。在MDD数据集的交互任务上，DualFlow(Both)在R-Precision@3（0.513）、MMDist（0.513）上达到最佳；在反应任务上，其FID（0.686）、R-Precision@3（0.471）等多项指标领先。与InterGen相比，DualFlow在InterHuman-AS数据集的交互任务上，R-Precision@3从0.624提升至0.681，MMDist从5.108降至4.394。

实际意义在于为VR/AR社交伴侣、游戏AI、人机协作等需要协调双人动作的应用提供了一个高效、灵活的基础生成模型。主要局限性包括：1）模型参数量较大，对计算资源要求较高；2）RAG模块的效果高度依赖检索库的质量和LLM文本分解的准确性；3）在快速运动或紧密接触时，仍可能出现轻微的肢体穿模现象。

---

