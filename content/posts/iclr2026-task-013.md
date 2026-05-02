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

✅ **7.0/10** | 前25% | #空间音频 | #音频大模型 | #音频事件检测 #声源定位

👥 **作者与机构**

- 第一作者：Subrata Biswas* (Worcester Polytechnic Institute, Department of Electrical & Computer Engineering)
- 通讯作者：未说明（论文明确标注 * Equal Contribution，三位作者贡献均等，未指定通讯作者）
- 作者列表：Subrata Biswas (Worcester Polytechnic Institute, Department of Electrical & Computer Engineering), Mohammad Nur Hossain Khan (Worcester Polytechnic Institute, Department of Electrical & Computer Engineering), Bashima Islam (Worcester Polytechnic Institute, Department of Electrical & Computer Engineering)

💡 **毒舌点评**

这篇论文在解决音频大模型（ALLM）空间推理短板这一具体问题上，工作做得非常扎实系统，从数据集构建（BiDepth）、几何感知编码器（SAGE）到带推理链的模型（OWL）形成了一个完整闭环，实验充分且开源承诺明确，体现了良好的工程素养。但其核心创新更多是“组合”与“加强”，将视觉领域的几何先验、CoT方法引入音频领域，且性能提升主要依赖精心设计的合成数据，对模拟与真实环境之间的鸿沟讨论尚不深入，创新性略显不足。

🔗 **开源详情**

- 代码：论文提供了代码仓库链接：https://github.com/BASHLab/OWL。承诺开源。
- 模型权重：论文中未提及是否公开预训练或微调后的模型权重。
- 数据集：论文明确表示将公开发布的BiDepth数据集（包含1.1M QA对）。
- Demo：论文中未提及在线演示。
- 复现材料：论文附录详细提供了SAGE和OWL的训练超参数（表10，表11）、特征提取细节、损失函数公式等，复现信息充分。
- 论文中引用的开源项目：
    - SoundSpaces v2.0, Matterport3D (用于数据生成)
    - AudioMAE (用于SAGE编码器初始化)
    - Q-Former (来自BLIP-2，用作投影模块)
    - LLaMA-2-7B (语言骨干)
    - AudioSet (声音事件源)
    - PyTorch, Hugging Face Transformers等通用库（隐含）

📌 **核心摘要**

1.  解决的问题：当前的音频大语言模型（ALLMs）在空间推理任务上存在两大核心缺陷：缺乏几何感知能力（无法有效利用声学场景的几何结构信息）和采用单步推理（缺乏可解释的、分步骤的空间推理过程）。
2.  方法核心：提出OWL框架，包含两个关键组件：(1) 空间-声学几何编码器（SAGE），它在训练时使用双耳音频、全景深度图像和房间脉冲响应（RIR）进行多模态监督，以学习几何感知的音频表征，但在推理时仅需音频输入；(2) 基于空间感知链式思维（CoT）的推理机制，使OWL能够生成分步骤的、可解释的空间关系推理。
3.  与已有方法相比新在哪里：相比先前工作（如BAT），OWL首次为音频LLM引入了显式的几何监督训练（通过RIR预测任务）和结构化的多步CoT推理，将空间感知与推理过程解耦并分阶段训练，支持更精细的（12时区）方向估计和多源场景推理。
4.  主要实验结果：
    *   在自建BiDepth数据集和公开SpatialSoundQA基准上评估。
    *   SAGE在方向估计平均角度误差（MAE）上比Spatial-AST降低11°（表2），在距离误差率（DER）上比Spatial-AST降低31.34%（在BiDepth上）。
    *   OWL在空间推理问答（Type III）准确率上比BAT提升约24.9%（77.89% vs. 69.46%），在带CoT的推理（Type IV）中BA达到76.53%，显著超越所有基线（表3）。在SpatialSoundQA零样本测试中，OWL的整体推理准确率达到79.06%，优于BAT的76.89%（表4）。
5.  实际意义：推动了音频理解从“识别什么声音”向“理解声音在哪里以及如何关联”的跨越，为机器人听觉、AR/VR音频交互、助听器增强等需要精细空间感知的应用提供了新的技术框架和评估基准。
6.  主要局限性：训练数据（BiDepth）完全基于模拟环境生成，尽管进行了真实世界泛化测试，但模型在复杂、动态的真实声学环境中的鲁棒性有待验证；当前推理任务局限于单轮问答，尚未扩展到多轮对话。

---

