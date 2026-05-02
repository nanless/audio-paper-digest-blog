---
title: "ICLR 2026 - 跨模态 论文列表"
date: 2026-05-03
draft: false
tags: ["跨模态"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 跨模态 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 跨模态

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [OmniVinci: Enhancing Architecture and Data for Omni-Modal Un](/audio-paper-digest-blog/posts/2026-05-03-omnivinci-enhancing-architecture-and-data-for) | 8.5分 | 前25% |
| 🥈 | [TINY BUT MIGHTY: A SOFTWARE-HARDWARE CO- DESIGN APPROACH FOR](/audio-paper-digest-blog/posts/2026-05-03-tiny-but-mighty-a-software-hardware-co-design) | 6.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [OmniVinci: Enhancing Architecture and Data for Omni-Modal Understanding LLM](/audio-paper-digest-blog/posts/2026-05-03-omnivinci-enhancing-architecture-and-data-for)

🔥 **8.5/10** | 前25% | #跨模态 | #多模态模型 | #大语言模型 #多任务学习

👥 **作者与机构**

- 第一作者：未说明
- 通讯作者：未说明
- 作者列表：Hanrong Ye, Chao-Han Huck Yang, Arushi Goel, Wei Huang, Zhen Wan, Jinchuan Tian, An-Chieh Cheng, Ligeng Zhu, Yuanhang Su, Yuming Lou, Yong-Xiang Lin, Dong Yang, Sreyan Ghosh, Zhijian Liu, Yukang Chen, Ehsan Jahangiri, Ambrish Dantrey, Daguang Xu, Ehsan Hosseini-Asl, Seyed Danial Mohseni Taheri, Vidya Nariyambut Murali, Sifei Liu, Yao Lu, Oluwatobi Olabiyi, Yu-Chiang Frank Wang, Rafael Valle, Bryan Catanzaro, Andrew Tao, Song Han, Jan Kautz, Hongxu Yin, Pavlo Molchanov（论文中未提及任何作者的所属机构）

💡 **毒舌点评**

亮点在于其架构设计（如OmniAlignNet）针对性地解决了跨模态对齐和时序理解的关键痛点，并且展示了极高的数据效率（用0.2T token达到更优效果）。短板在于仅凭摘要无法得知其模型架构图的复杂度和消融实验的深度，以及所谓的“开源”承诺在当前阶段缺乏具体落地方案的细节。

🔗 **开源详情**

- 代码：论文中提到这是一项“开源”倡议，但未提供具体的代码仓库链接或平台。
- 模型权重：未说明是否公开模型权重。
- 数据集：论文中提到了一个生成24M对话的管道，但未说明合成数据是否公开或如何获取。
- Demo：未提及。
- 复现材料：未提供训练细节、配置、检查点或附录说明。
- 论文中引用的开源项目：摘要中未提及依赖的具体开源工具或模型。
- 总结：论文中明确提出了开源计划，但具体的开源内容（代码、模型、数据）和获取方式在当前提供的摘要中均未说明。

📌 **核心摘要**

1.  要解决什么问题：旨在构建一个强大的、开源的“全模态”大语言模型，使其能够像人类一样感知和理解视觉、音频等多种模态信息，特别是强化模态间的对齐与融合。
2.  方法核心是什么：提出了三个关键的架构创新（OmniAlignNet用于视觉-音频对齐，时间嵌入分组用于相对时序对齐，约束旋转时间嵌入用于绝对时序编码），并设计了一个生成2400万单模态和跨模态对话的数据合成管道。
3.  与已有方法相比新在哪里：新在专门为跨模态（尤其是视听）设计的对齐与时间建模组件，以及大规模、高质量的合成数据流程。在模型效果上，声称用更少的训练数据（0.2T token vs Qwen2.5-Omni的1.2T token）取得了更好的性能。
4.  主要实验结果如何：

    | 模型 | DailyOmni (跨模态理解) | MMAR (音频) | Video-MME (视频) | 训练Tokens |
    | :--- | :---: | :---: | :---: | :---: |
    | Qwen2.5-Omni | 基线 | 基线 | 基线 | 1.2T |
    | OmniVinci | +19.05 | +1.7 | +3.9 | 0.2T (6倍减少) |

    摘要中未提供Qwen2.5-Omni的具体绝对分数，仅给出了OmniVinci相对于它的改进值。
5.  实际意义是什么：证明了通过精心设计的架构和数据，可以用更少的计算资源训练出性能更强的全模态模型，降低了研究和应用门槛，并为机器人、医疗AI等复杂场景下的多模态感知与决策提供了新思路。
6.  主要局限性是什么：摘要未讨论模型的局限性。可能的局限包括：未说明模型在非视听模态（如触觉、嗅觉）上的能力；大规模合成数据可能存在的偏差或噪音；以及实际部署时的计算效率（推理延迟）未被提及。

---

### 🥈 [TINY BUT MIGHTY: A SOFTWARE-HARDWARE CO- DESIGN APPROACH FOR EFFICIENT MULTIMODAL IN- FERENCE ON BATTERY-POWERED SMALL DEVICES](/audio-paper-digest-blog/posts/2026-05-03-tiny-but-mighty-a-software-hardware-co-design)

✅ **6.0/10** | 前25% | #跨模态 | #多模态模型 | #低资源 #实时处理

👥 **作者与机构**

- 第一作者：未说明
- 通讯作者：未说明
- 作者列表：Yilong Li（未说明）、Yijing Zeng（未说明）、Shuai Zhang（未说明）、Hao Zhang（未说明）、Xinmiao Xiong（未说明）、Jingyu Liu（未说明）、Pan Hu（未说明）、Suman Banerjee（未说明）

💡 **毒舌点评**

该论文切中“端侧大模型效率”这一重要痛点，提出的“模块化拆分+异构加速调度”思路具有系统设计的工程美感。然而，仅凭摘要所展示的“42.3%能耗降低”等数据，缺乏与同类边缘计算框架（如TinyLLM、DeepEdge等）的细致对比，且核心的硬件-软件协同设计细节（如统一内存架构的具体优化、低比特内核的实现）未见深入剖析，说服力稍显不足。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及。
- 数据集：论文中未提及。
- Demo：论文中未提及在线演示。
- 复现材料：论文摘要未提供训练或推理的细节、配置、检查点或附录。
- 论文中引用的开源项目：摘要中未提及。
- 总结：论文中未提及开源计划。

📌 **核心摘要**

1. 要解决什么问题：大型多模态模型（LMMs）通常以单体形式执行，未能充分利用现代片上系统（SoC）中异构加速器（NPU, GPU, DSP）的能力，导致在电池供电的小型设备上推理时延迟高、能耗大。
2. 方法核心是什么：提出NANOMIND框架，将LMMs拆解为模块化的“砖块”（视觉、语言、音频等），并基于统一内存架构，动态地将每个模块调度到最适合其计算的加速器上执行。
3. 与已有方法相比新在哪里：不同于常规的单体推理或静态部署，NANOMIND实现了模块级别的动态异构调度，结合了定制硬件设计、系统级调度和优化的低比特计算内核，旨在绕过CPU瓶颈并减少冗余内存使用。
4. 主要实验结果如何：在原型设备上运行LlaVA-OneVision-qwen2-05B模型时，相比已有实现，能耗降低了42.3%，GPU内存使用减少了11.2%。该电池供电设备可独立运行该模型并配备摄像头，持续时间接近20.8小时。
5. 实际意义是什么：该框架使得构建无需网络连接、完全在本地运行的智能助手设备成为可能，特别适用于对隐私、延迟和连接性有严格要求的边缘计算场景。
6. 主要局限性是什么：论文摘要未提供与其他先进端侧推理框架（如量化后蒸馏的模型、专用编译器优化等）的详细性能对比；硬件-软件协同设计的具体实现深度和通用性尚不明确；仅展示了单一模型（LlaVA-OneVision-qwen2-05B）的案例，框架的泛化能力有待验证。

---

