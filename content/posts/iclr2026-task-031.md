---
title: "ICLR 2026 - 面部动画生成 论文列表"
date: 2026-05-02
draft: false
tags: ["面部动画生成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 面部动画生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 面部动画生成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [AUHead: Realistic Emotional Talking Head Generation via Acti](/audio-paper-digest-blog/posts/2026-05-02-auhead-realistic-emotional-talking-head) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [AUHead: Realistic Emotional Talking Head Generation via Action Units Control](/audio-paper-digest-blog/posts/2026-05-02-auhead-realistic-emotional-talking-head)

🔥 **8.0/10** | 前25% | #面部动画生成 | #扩散模型 | #音频大模型 #跨模态

👥 **作者与机构**

- 第一作者：Jiayi Lyu (中国科学院大学)
- 通讯作者：Jian Xue (中国科学院大学)
- 作者列表：Jiayi Lyu (中国科学院大学)， Leigang Qu (新加坡国立大学)， Wenjing Zhang (中国科学院大学)， Hanyu Jiang (中国科学院大学)， Kai Liu (浙江大学)， Zhenglin Zhou (浙江大学)， Xiaobo Xia (新加坡国立大学)， Jian Xue (中国科学院大学)， Tat-Seng Chua (新加坡国立大学)

💡 **毒舌点评**

亮点： 论文最大的亮点在于引入了可解释的面部动作单元（AU）作为中间桥梁，将语音情感理解（通过ALM）和精细面部动画生成（通过扩散模型）优雅地解耦，为解决情感说话头生成中的“可控性与质量”困境提供了一个新颖且通用的框架。
短板： 尽管框架新颖，但作为核心控制信号的AU序列，其预测精度（在MEAD数据集上MAE为0.2085）可能成为整个系统性能的瓶颈；此外，论文中Stage 2的生成模块（Hallo V1， MEMO）并非作者原创，其创新更多体现在控制策略的整合而非生成架构的突破上。

🔗 **开源详情**

- 代码：提供了GitHub仓库链接：https://github.com/laura990501/AUHead_ICLR。
- 模型权重：论文中未提及是否公开Stage 1微调后的Qwen-Audio-Chat权重或Stage 2训练好的AU适配器权重。但论文明确指出其基础模型使用了公开的Hallo V1、MEMO和Qwen-Audio-Chat。
- 数据集：使用了公开的MEAD和CREMA数据集。论文未提及是否提供其使用的AU标注数据（用于Stage 1训练的监督信号）。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的实现细节，包括模型架构、训练超参数、硬件环境、评估指标设置，并在附录中给出了Prompt模板等。这为复现提供了充分信息。
- 论文中引用的开源项目：明确依赖的开源项目包括：Qwen-Audio（Chu et al., 2023）， Hallo V1（Xu et al., 2024）， MEMO（Zheng et al., 2024）， 以及可能用于数据处理的其他工具。

📌 **核心摘要**

1.  问题：当前音频驱动的说话头生成方法难以生成自然、细微且情感丰富的面部表情，主要因为缺乏对表情的细粒度控制。
2.  方法核心：提出一种两阶段方法AUHead。第一阶段，探索并利用音频语言模型（ALM，具体为Qwen-Audio-Chat）的理解能力，通过设计时空AU tokenization和基于链式思维（CoT）的“情感-再-AU”生成策略，从语音中解耦出面部动作单元（AU）序列。第二阶段，提出一个AU驱动的可控扩散模型，通过将AU序列映射为结构化的2D面部表示（如关键点LMK或网格渲染RoM），并引入上下文感知的AU嵌入和AU-视觉交叉注意力机制，来生成逼真的情感说话头视频。此外，在推理时引入了AU解耦引导策略，以平衡AU控制与视觉质量。
3.  与已有方法相比的新颖性：1) 首次系统性地利用ALM生成面部AU序列，建立了一个可解释的、细粒度的中间控制空间。2) 提出了一个完整的AU驱动生成框架，包括将1D AU序列转换为2D表示、上下文嵌入以及专门的引导策略，以实现灵活的情感控制。
4.  主要实验结果：在MEAD和CREMA数据集上，AUHead在情感准确性（ACCemo）、视觉质量（FID， PSNR， SSIM）和面部结构保持（M/F-LMD）等指标上超越了多个SOTA基线方法。例如，在MEAD数据集上，AUHead（基于MEMO）的FID为10.97，优于MEMO基线（11.12）；用户研究中，AUHead在情感表达、视频质量和音唇同步方面分别获得了64.63%、63.63%和71.00%的偏好率，显著高于HalloV2。
5.  实际意义：该工作推动了情感可控、高保真说话头生成技术的发展，为虚拟数字人、影视制作、人机交互等领域提供了新的技术路径，并展示了引入可解释中间表示在跨模态生成中的潜力。
6.  主要局限性：1) Stage 1的AU预测精度受限于ALM的能力和标注数据的质量，其误差会传递到Stage 2。2) 模型的泛化能力在更复杂的“野外”场景（如大角度头部姿态、复杂背景）中尚未充分验证。3) 训练和推理依赖于多个大规模预训练模型（ALM， 扩散模型），计算资源要求较高。

---

