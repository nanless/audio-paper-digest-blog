---
title: "ICLR 2026 - 说话人生成 论文列表"
date: 2026-05-03
draft: false
tags: ["说话人生成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 说话人生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 说话人生成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [AUHead: Realistic Emotional Talking Head Generation via Acti](/audio-paper-digest-blog/posts/2026-05-03-auhead-realistic-emotional-talking-head) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [AUHead: Realistic Emotional Talking Head Generation via Action Units Control](/audio-paper-digest-blog/posts/2026-05-03-auhead-realistic-emotional-talking-head)

✅ **7.5/10** | 前25% | #说话人生成 | #扩散模型 #音频大模型 | #扩散模型 #音频大模型

👥 **作者与机构**

- 第一作者：Jiayi Lyu（中国科学院大学）
- 通讯作者：Jian Xue（中国科学院大学）
- 作者列表：Jiayi Lyu（中国科学院大学）， Leigang Qu（新加坡国立大学）， Wenjing Zhang（中国科学院大学）， Hanyu Jiang（中国科学院大学）， Kai Liu（浙江大学）， Zhenglin Zhou（浙江大学）， Xiaobo Xia（新加坡国立大学）， Jian Xue（中国科学院大学）， Tat-Seng Chua（新加坡国立大学）

💡 **毒舌点评**

亮点在于将“理解情感”与“生成视频”解耦成两阶段，利用音频大模型（ALM）的“世界知识”来推断细粒度的动作单元（AU），这是一个巧妙且可解释的中间表示桥梁，确实提升了情感表达的可控性与丰富度。短板在于，尽管实验显示了进步，但AU预测的微小时间错位可能仍是唇部同步得分（Sync）未获提升甚至微降的一个潜在原因，且该框架在复杂头姿态和背景下的泛化能力有待进一步验证。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：https://github.com/laura990501/AUHead_ICLR。
- 模型权重：论文中未提及是否公开预训练模型权重（如微调后的Qwen-Audio-Chat或训练好的AU适配器）。
- 数据集：实验使用的是公开数据集MEAD和CREMA，但论文未提供处理后的数据或AU标注数据。
- Demo：论文中未提及提供在线演示。
- 复现材料：论文在正文和附录中提供了较为详细的模型架构、训练目标、评估设置、超参数和提示词模板（附录C），有助于复现。
- 引用的开源项目：论文基于并引用了多个开源项目，主要包括：Qwen-Audio（音频语言模型）、Hallo V1和MEMO（作为扩散模型基线）、LoRA（用于微调）、以及其他音频驱动说话人生成方法的代码库（如Wav2Lip, SadTalker, EchoMimic等）。

📌 **核心摘要**

1.  问题：现有的音频驱动说话人生成方法通常直接将音频和肖像图像输入生成模型，导致生成的视频在唇部同步和身份保持上表现尚可，但在情感表达的自然性、细腻度和可控性上存在明显不足。
2.  方法核心：本文提出一个名为AUHead的两阶段框架。第一阶段，利用经过微调的音频语言模型（Qwen-Audio-Chat），采用链式思维（CoT）策略（“先理解情绪，再生成AU”），从语音中解耦并生成时间对齐的动作单元（AU）序列。第二阶段，构建一个AU驱动的可控扩散模型，将AU序列映射为2D面部表示（如关键点或网格），并通过上下文感知的嵌入和跨注意力机制，将AU特征注入到预训练的视频生成模型（如Hallo V1或MEMO）中，以控制情感表达。
3.  新在何处：与依赖情感标签或潜在代码的先前方法不同，本文首次探索使用音频语言模型生成可解释、细粒度的AU序列作为控制信号，并将其转化为结构化的2D表示来驱动扩散模型。此外，提出了一种在推理时平衡AU控制与其他条件的解纠缠引导策略。
4.  主要实验结果：在MEAD和CREMA两个情感说话人数据集上进行了广泛实验。定量结果表明，AUHead在视觉质量（PSNR, SSIM, FID）、面部结构保持（LMD）和情感准确性（ACC_emo）上优于或媲美多种先进方法。例如，在MEMO基线上，AUHead在MEAD数据集上的FID从11.12降至10.87，情感准确率显著提升。用户研究显示，在情感表达、视频质量、音唇同步和整体性能上，AUHead对64%-71%的评价者具有吸引力，优于HalloV2。
5.  实际意义：该方法为创建更生动、情感丰富的虚拟形象、影视制作和人机交互系统提供了新的技术路径，通过结构化的AU中间表示，实现了对生成内容更精细和可解释的控制。
6.  主要局限性：AU预测与实际唇部运动之间可能存在微小的时间错位，这可能限制了音唇同步指标的进一步提升。此外，当前方法主要在特定受控数据集（MEAD, CREMA）上验证，对于户外复杂场景、大角度头部运动和背景变化的泛化能力尚未充分评估。

---

