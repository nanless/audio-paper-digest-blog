---
title: "ICLR 2026 - 空间音频 论文列表"
date: 2026-05-03
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
| 🥇 | [OWL : Geometry-Aware Spatial Reasoning for Audio Large Langu](/audio-paper-digest-blog/posts/2026-05-03-owl-geometry-aware-spatial-reasoning-for-audio) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [OWL : Geometry-Aware Spatial Reasoning for Audio Large Language Models](/audio-paper-digest-blog/posts/2026-05-03-owl-geometry-aware-spatial-reasoning-for-audio)

✅ **7.0/10** | 前25% | #空间音频 | #音频大模型 | #音频问答 #音频事件检测

👥 **作者与机构**

第一作者：Subrata Biswas（Worcester Polytechnic Institute，电气与计算机工程系）
通讯作者：未明确说明。论文首页标注“Equal Contribution”，通讯作者信息未在摘要、正文或附录中明确指出。
作者列表：Subrata Biswas（Worcester Polytechnic Institute，电气与计算机工程系）、Mohammad Nur Hossain Khan（Worcester Polytechnic Institute，电气与计算机工程系）、Bashima Islam（Worcester Polytechnic Institute，电气与计算机工程系）

💡 **毒舌点评**

本文最大的亮点是构建了首个大规模、包含几何监督的多模态空间音频问答数据集BiDepth，并系统性地提出了从几何感知编码器（SAGE）到带思维链推理的音频大模型（OWL）的完整解决方案，实验结果显示其在定位和推理任务上显著优于基线。但一个明显的短板是，所有核心训练数据和评估均基于模拟环境，尽管作者进行了真实世界实验，但模拟到现实的泛化能力仍是潜在疑点，且当前的推理任务（如左右、远近判断）相对于人类复杂的空间认知仍显简单。

🔗 **开源详情**

- **代码**：论文提供了GitHub仓库链接 `https://github.com/BASHLab/OWL`，**承诺开源**。
- **模型权重**：论文中未明确提及是否开源预训练好的SAGE和OWL模型权重，仅说明“code are available”。
- **数据集**：论文明确指出将公开**BiDepth**数据集，并附有详细描述和统计信息。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文提供了非常充分的复现材料，包括：详细的模型架构描述、完整的训练超参数配置（学习率、batch size、优化器、epoch数、LoRA设置等）、各阶段训练数据组成、评估指标定义（附录F）、以及数据生成细节（附录A）。
- **论文中引用的开源项目**：SoundSpaces v2.0, Matterport3D, AudioSet, LLaMA-2-7B (通过LoRA微调), Q-Former (作为投影器架构)。
- **开源计划**：论文正文和摘要末尾均明确表示“dataset and code are available at”给定GitHub链接，表明有明确的开源计划。

📌 **核心摘要**

1. **要解决什么问题**：现有的音频大语言模型（ALLMs）在处理空间音频时，缺乏对几何结构的显式理解，且推理过程多为单步直接映射，导致方向/距离估计不精确，且无法提供可解释的推理过程。
2. **方法核心是什么**：本文提出了OWL框架，包含两个核心组件：a) **SAGE（几何感知空间音频编码器）**：在训练时使用全景深度图和模拟房间脉冲响应（RIR）作为监督信号，学习对齐声学特征与3D空间结构，但推理时仅需音频。b) **OWL模型**：将SAGE与大语言模型（LLaMA-2-7B）通过投影器结合，并采用空间引导的思维链（CoT）进行推理。
3. **与已有方法相比新在哪里**：a) **数据**：构建并公开了BiDepth数据集，首次将双耳音频、双耳RIR、全景深度图和超过110万条问答对四元组耦合，提供几何监督。b) **编码器**：SAGE通过辅助的RIR重建任务（结合深度图）来正则化音频编码器，使其具备几何感知能力。c) **推理**：引入了基于空间位置的思维链推理，将复杂问题分解为可解释的步骤。
4. **主要实验结果如何**：在**BiDepth**数据集上，OWL在空间推理任务上比最强基线BAT高出约25%（类型III和IV）。在**SpatialSoundQA**上，OWL的零样本方向估计准确率达到78.31%（BAT为75.54%），思维链推理平均准确率79.06%（BAT为76.89%）。SAGE编码器将平均角度误差（MAE）降低了11°，距离误差率（DER）降低了33.5%。关键对比数据见下表：

| 方法 | BiDepth (类型II - DoA准确率) | BiDepth (类型IV - BA) | SpatialSoundQA (推理平均BA) |
| :--- | :--- | :--- | :--- |
| BAT | 71.59% (4-bin) | 61.29% | 76.89% |
| **OWL w CoT** | **46.17% (12-bin), 77.21% (4-bin)** | **76.53%** | **79.06%** |

5. **实际意义是什么**：该工作推动了音频大模型从单纯的感知（分类、识别）向具备空间推理能力的感知与认知结合发展，为构建能理解声学环境几何结构的智能体（如机器人、助听器）提供了技术基础。
6. **主要局限性是什么**：a) 核心数据集BiDepth基于模拟生成，其声学和几何多样性可能受限，与真实复杂环境存在差距。b) 评估的推理任务相对基础（如二元判断），尚未涵盖更复杂的空间关系推理。c) 模型依赖于高质量的双耳音频输入，对录音设备和场景有一定要求。

---

