---
title: "ICLR 2026 - 空间音频 论文列表"
date: 2026-05-02
draft: false
tags: ["空间音频"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 空间音频 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 空间音频

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [OWL : Geometry-Aware Spatial Reasoning for Audio Large Langu](/audio-paper-digest-blog/posts/2026-05-02-owl-geometry-aware-spatial-reasoning-for-audio) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [OWL : Geometry-Aware Spatial Reasoning for Audio Large Language Models](/audio-paper-digest-blog/posts/2026-05-02-owl-geometry-aware-spatial-reasoning-for-audio)

✅ **7.0/10** | 前25% | #空间音频 | #音频大模型 | #声源定位 #链式思维

👥 **作者与机构**

- 第一作者：Subrata Biswas（Worcester Polytechnic Institute 电气与计算机工程系）
- 通讯作者：未说明
- 作者列表：Subrata Biswas（Worcester Polytechnic Institute 电气与计算机工程系）、Mohammad Nur Hossain Khan（Worcester Polytechnic Institute 电气与计算机工程系）、Bashima Islam（Worcester Polytechnic Institute 电气与计算机工程系）

💡 **毒舌点评**

这篇论文在音频大语言模型的空间推理能力上迈出了重要一步，其核心亮点在于巧妙地将环境几何信息作为辅助监督注入到音频编码器中，从而在推理时无需几何输入就能获得几何感知的表征，这是一个既实用又优雅的设计。然而，整个系统的基石——BiDepth数据集完全依赖于合成数据，尽管论文通过在真实世界数据集上的零样本测试部分缓解了这一担忧，但模拟环境与复杂真实声场之间的鸿沟仍是其走向大规模应用的首要挑战。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/BASHLab/OWL。
- 模型权重：论文中未提及公开已训练好的模型权重。
- 数据集：论文宣布将发布BiDepth数据集，但当前提供的文本中未说明具体发布平台和获取方式。
- Demo：论文中未提及在线演示。
- 复现材料：论文在附录中详细提供了SAGE和OWL的训练超参数、硬件配置、优化器设置等复现所需的关键信息。明确指出使用了LLaMA-2-7B和AudioMAE作为初始化。
- 引用的开源项目：论文中明确使用了SoundSpaces v2.0、Matterport3D、AudioSet、LLaMA-2-7B、AudioMAE、Q-Former等开源工具或模型。

📌 **核心摘要**

1.  问题：现有的音频大语言模型在空间推理上能力不足，主要依赖粗糙的二元线索（左/右）和单步推理，缺乏对声学环境几何结构（如房间布局、混响）的显式建模，导致方向和距离估计精度低，且推理过程不可解释。
2.  方法核心：提出OWL模型，它由一个几何感知的音频编码器SAGE和一个集成了空间感知链式思维（CoT） 的大语言模型组成。SAGE在训练时利用全景深度图和模拟房间冲激响应（RIR）来学习声学-几何对齐特征，但推理时仅需音频。OWL则通过从感知QA到多步推理的课程学习，支持细粒度的12扇区方向（DoA）估计和可解释的推理。
3.  新意：与之前的工作（如BAT）相比，OWL的创新在于：a) SAGE编码器首次引入几何感知监督，将音频特征与3D空间结构对齐；b) 空间感知CoT，使中间推理步骤锚定于声源位置，提供可解释的推理路径；c) 构建并发布了首个大规模、包含{双耳音频、RIR、深度图、QA}四元组的BiDepth数据集（约110万个QA对）。
4.  主要结果：在BiDepth和SpatialSoundQA两个基准上，SAGE将平均DoA误差降低了11°，OWL在空间推理QA准确率上比BAT最高提升了25%。具体地，在BiDepth上，OWL w CoT在单源/双源事件检测mAP为33.37/17.26，12扇区DoA准确率为46.17，空间推理（Type III）二分类准确率（BA）为77.89，CoT推理（Type IV）BA为76.53，全面超越包括Gemini在内的基线。
5.  实际意义：为构建能理解三维声学场景、进行细粒度空间推理的AI听觉智能体奠定了基础，对机器人导航、智能家居、人机交互等应用有潜在价值。
6.  主要局限性：核心训练数据集BiDepth是合成的，虽然通过了部分真实世界数据的零样本验证，但其在极端混响、复杂遮挡等真实场景下的泛化能力仍需进一步验证。推理任务目前限于单轮QA。

---

