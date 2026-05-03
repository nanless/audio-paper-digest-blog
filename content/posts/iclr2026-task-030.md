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

✅ **7.5/10** | 前25% | #说话人生成 | #扩散模型 | #音频大模型 #跨模态

👥 **作者与机构**

- 第一作者：Jiayi Lyu（中国科学院大学）
- 通讯作者：Jian Xue（中国科学院大学）
- 作者列表：
  - Jiayi Lyu（中国科学院大学）
  - Leigang Qu（新加坡国立大学）
  - Wenjing Zhang（中国科学院大学）
  - Hanyu Jiang（中国科学院大学）
  - Kai Liu（浙江大学）
  - Zhenglin Zhou（浙江大学）
  - Xiaobo Xia（新加坡国立大学）
  - Jian Xue（中国科学院大学）
  - Tat-Seng Chua（新加坡国立大学）

💡 **毒舌点评**

亮点在于巧妙地将音频语言模型（ALM）的常识推理能力用于“想象”面部动作单元（AU），绕过了监督数据不足的瓶颈，这种“理解后生成”的范式比直接端到端映射更具解释性和可控制性。短板在于，尽管通过CoT缓解，但从音频到AU的时序对齐仍依赖简单的线性插值，在快速语音节奏或非同步情感表达时可能产生时序漂移，论文中并未深入探讨该问题的根本解决方案。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/laura990501/AUHead_ICLR。
- 模型权重：论文中未提及公开的预训练模型权重。
- 数据集：实验使用公开数据集MEAD和CREMA，未提供新数据集。
- Demo：未提及在线演示。
- 复现材料：提供了核心的训练框架和实验设置信息，但部分训练超参数和模型配置细节在正文中未完全展开。
- 论文中引用的开源项目：依赖的开源项目/模型包括：Qwen-Audio-Chat（ALM），HalloV1，MEMO（扩散模型基线），LoRA（微调技术）。

📌 **核心摘要**

1.  要解决的问题：现有音频驱动说话人生成方法在情感表达的精细度和可控性上存在不足，难以生成自然且富含情感细微差别的面部动画。
2.  方法核心：提出一个两阶段框架“AUHead”。第一阶段，利用一个经过微调的音频语言模型（ALM），通过“情感-然后-AU”的链式思考（CoT）机制，从音频中解耦并生成细粒度的面部动作单元（AU）序列。第二阶段，提出一个AU驱动的可控扩散模型，将生成的AU序列映射为结构化的2D面部表示，并通过交叉注意力机制注入扩散模型，以指导面部动画的生成。
3.  与已有方法的新颖之处：首次探索利用ALM生成面部AU序列，将AU作为中间控制空间。与传统使用情感标签或潜码的方法相比，提供了更丰富、可解释且细粒度的面部肌肉运动控制。提出了AU解耦引导策略，在推理时灵活平衡AU控制与其他条件（如音频、运动先验）及生成质量。
4.  主要实验结果：在MEAD和CREMA数据集上，AUHead在情感准确性（ACCemo）、视觉质量（FID）、身份与结构保持（PSNR, SSIM, F-LMD）等多项指标上达到了最优或接近最优的水平。例如，在MEAD数据集上，基于MEMO的AUHead模型FID为10.97，显著低于HalloV1基线的13.07；用户研究显示，64.63%的参与者认为AUHead在情感表达上优于强大的基线HalloV2。关键消融实验证实了CoT策略和2D AU表示的有效性。
5.  实际意义：为虚拟人、影视制作、交互系统等领域提供了更真实、情感表达更丰富的对话头生成技术，增强了生成内容的可控性和表现力。
6.  主要局限性：对复杂多变的真实场景（如大幅度头部运动、复杂背景）的泛化能力尚未充分验证；AU预测的精度和时序对齐质量直接影响最终生成效果，是一个瓶颈；当前框架需要两个独立阶段，增加了推理复杂度。

---

