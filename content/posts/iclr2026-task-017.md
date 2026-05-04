---
title: "ICLR 2026 - 空间音频 论文列表"
date: 2026-05-04
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
| 🥇 | [OWL : Geometry-Aware Spatial Reasoning for Audio Large Langu](/audio-paper-digest-blog/posts/2026-05-04-owl-geometry-aware-spatial-reasoning-for-audio) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [OWL : Geometry-Aware Spatial Reasoning for Audio Large Language Models](/audio-paper-digest-blog/posts/2026-05-04-owl-geometry-aware-spatial-reasoning-for-audio)

🔥 **8.0/10** | 前25% | #空间音频 | #音频大模型 | #声源定位 #多任务学习

👥 **作者与机构**

- 第一作者：未说明（论文标注Subrata Biswas和Mohammad Nur Hossain Khan为共同第一作者）
- 通讯作者：未说明
- 作者列表：Subrata Biswas（Worcester Polytechnic Institute电气与计算机工程系）、Mohammad Nur Hossain Khan（Worcester Polytechnic Institute电气与计算机工程系）、Bashima Islam（Worcester Polytechnic Institute电气与计算机工程系）

#

💡 **毒舌点评**

这篇论文为音频大模型装上了“空间几何眼睛”，通过“模拟训练-纯音频推理”的巧思和详实的课程学习，确实把空间定位和推理精度提升了一个台阶；但美中不足的是，其所有辉煌战绩（包括新建的百万级数据集）均建立在精心构建的合成世界里，在真实嘈杂、反射复杂的声学环境中，这套“几何内功”的实战效果还有待“出关”检验。

#

🔗 **开源详情**

- 代码：论文明确提供代码仓库链接：https://github.com/BASHLab/OWL。表明将在该仓库发布代码。
- 模型权重：未明确提及是否公开预训练模型权重，但根据“our dataset and code are available”的表述，模型权重可能包含在开源计划内。
- 数据集：论文明确表示将发布BiDepth数据集（“we construct and release BiDepth”），包含约110万QA对。
- Demo：未提及在线演示。
- 复现材料：附录提供了完整的训练超参数（表10，表11）、特征提取公式（B.1）、模型架构细节（B.2， B.3）和数据集生成细节（A节），复现指引非常充分。
- 论文中引用的开源项目：依赖SoundSpaces v2.0和Matterport3D进行模拟；音频编码器初始化自AudioMAE；语言模型使用LLaMA-2-7B；投影模块参考Q-Former；微调使用LoRA。

📌 **核心摘要**

1. 要解决什么问题：现有的音频大语言模型（ALLMs）在空间推理方面能力薄弱，主要依赖粗糙的双耳线索和单步推理，导致在声源方向（DoA）和距离估计上精度不足，且推理过程缺乏可解释性。
2. 方法核心是什么：提出OWL框架，其核心是创新的几何感知音频编码器SAGE。SAGE在训练时利用全景深度图和模拟房间脉冲响应（RIR）作为监督信号，让编码器学会将声学特征与3D空间几何结构对齐，但在推理时只需音频输入。OWL进一步将SAGE与空间接地的链式思维（CoT） 推理相结合，支持从感知到多步推理的课程学习。
3. 与已有方法相比新在哪里：首次将显式的几何监督（通过RIR预测任务）引入音频编码器训练；构建了首个大规模（约110万QA对）耦合双耳音频、RIR和深度图的数据集BiDepth用于几何感知训练；引入了针对音频空间推理的多阶段课程学习和CoT监督机制，使模型能生成可解释的推理路径。
4. 主要实验结果如何：在BiDepth和SpatialSoundQA两个基准上，OWL显著超越了现有方法。SAGE相比SOTA（Spatial-AST），在BiDepth数据集上平均角度误差（MAE）降低25.52%，距离错误率（DER）降低31.34%。OWL相比BAT，在BiDepth上的空间推理二分类准确率（BA）提升24.9%（77.89% vs. 69.46%），在SpatialSoundQA上的推理平均准确率达79.06%（BAT为76.89%）。OWL在真实世界音频场景分类和声源定位任务上也展现出良好的泛化能力。
5. 实际意义是什么：该工作推动了音频大模型从“听到什么”向“声音在哪里、如何关联”的空间理解迈进，为构建更接近人类听觉感知的智能系统（如机器人、智能家居助手、助听设备）提供了关键技术组件和评估基准。
6. 主要局限性是什么：训练和评估严重依赖合成数据（BiDepth），而真实世界声学环境更为复杂多变，模型的鲁棒性有待验证；目前的推理任务限于单轮问答，尚未扩展到多轮对话式空间推理；几何监督依赖于预先生成的深度图和RIR，限制了其在完全未知环境中的应用。

---

