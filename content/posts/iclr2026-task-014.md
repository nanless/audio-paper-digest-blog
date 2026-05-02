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
| 🥇 | [OWL : Geometry-Aware Spatial Reasoning for Audio Large Langu](/audio-paper-digest-blog/posts/2026-05-03-owl-geometry-aware-spatial-reasoning-for-audio) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [OWL : Geometry-Aware Spatial Reasoning for Audio Large Language Models](/audio-paper-digest-blog/posts/2026-05-03-owl-geometry-aware-spatial-reasoning-for-audio)

🔥 **8.0/10** | 前25% | #空间音频 | #多任务学习 | #音频大模型 #数据集

👥 **作者与机构**

- 第一作者：Subrata Biswas（Worcester Polytechnic Institute, Department of Electrical & Computer Engineering）（表示共同第一作者）
- 通讯作者：Bashima Islam（Worcester Polytechnic Institute, Department of Electrical & Computer Engineering）
- 作者列表：Subrata Biswas（Worcester Polytechnic Institute, Department of Electrical & Computer Engineering）、Mohammad Nur Hossain Khan（Worcester Polytechnic Institute, Department of Electrical & Computer Engineering）、Bashima Islam（Worcester Polytechnic Institute, Department of Electrical & Computer Engineering）

💡 **毒舌点评**

这篇论文将几何信息（深度图）作为特权信息用于训练一个音频编码器，其在推理时仅依赖音频的巧妙设计，展现了扎实的系统工程能力。然而，其核心创新“几何感知”严重依赖合成数据，在真实世界复杂声场（如强混响、动态障碍物）中的泛化能力尚未得到充分验证，且CoT监督可能引入对模板化答案的依赖而非真正的空间推理能力。

🔗 **开源详情**

-   代码：提供代码仓库链接：https://github.com/BASHLab/OWL。
-   模型权重：论文中提及“我们的模型和代码将公开”，但未明确给出权重文件的直接下载链接。承诺公开。
-   数据集：论文中明确表示将公开发布BiDepth数据集。
-   Demo：未提及在线演示。
-   复现材料：提供了详细的训练细节（包括超参数、学习率调度、硬件配置）、模型架构描述和附录，有利于复现。
-   引用的开源项目：SoundSpaces v2.0 (Chen et al., 2022), Matterport3D (Chang et al., 2017), AudioMAE (Huang et al., 2022), LLaMA-2 (Touvron et al., 2023), Q-Former (Li et al., 2023), LoRA (Hu et al., 2022), BAT (Zheng et al., 2024b)。

📌 **核心摘要**

1.  问题：当前的音频大语言模型在空间推理任务上存在两大局限：缺乏对环境几何结构的显式感知，以及依赖单步推理，导致方向和距离估计不精确，且推理过程不可解释。
2.  核心方法：提出OWL框架，其核心是空间-声学几何编码器（SAGE）。SAGE在训练时利用双耳房间脉冲响应和全景深度图像进行几何感知的监督学习，但在推理时仅需音频输入。OWL进一步将SAGE与基于链式思维的推理模块结合，实现从感知到多步推理的流程。
3.  新在哪里：与先前工作（如BAT）相比，OWL/SAGE引入了显式的几何监督（深度图像、RIR），将空间定位精度从粗略的4个方向提升到精细的12个时钟方向；首次在音频大模型中引入几何感知的链式思维推理；并构建了迄今最大的空间音频问答数据集BiDepth（超过110万对QA）。
4.  主要实验结果：在BiDepth和SpatialSoundQA两个基准上，OWL将平均方向角误差降低了11°，空间推理问答准确率最高提升了25%。具体数据见表2、3、4。例如，在BiDepth数据集上，OWL在12方向角DoA准确率（单源）达到46.17%，远超BAT的基准线；在链式思维推理（Type IV）的方向估计任务上达到86.76%的准确率。
5.  实际意义：OWL推动了音频大模型从“感知”向“感知+推理”演进，其生成的带有推理过程的回答更具可解释性，对智能体、机器人听觉、辅助技术等需要理解声学环境的应用有潜在价值。
6.  主要局限性：1）主要训练数据BiDepth是合成数据，其仿真环境（Matterport3D）与真实世界的声学差异可能影响泛化性；2）链式思维监督可能使模型学习到固定的推理模板，而非真正灵活的空间逻辑；3）当前仅支持单轮问答，未涉及交互式对话。

---

