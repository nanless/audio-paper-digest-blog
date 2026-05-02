---
title: "ICLR 2026 - 表征学习 论文列表"
date: 2026-05-03
draft: false
tags: ["表征学习"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 表征学习 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 表征学习

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [DiffSDA: Unsupervised Diffusion Sequential Disentanglement A](/audio-paper-digest-blog/posts/2026-05-03-diffsda-unsupervised-diffusion-sequential) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [DiffSDA: Unsupervised Diffusion Sequential Disentanglement Across Modalities](/audio-paper-digest-blog/posts/2026-05-03-diffsda-unsupervised-diffusion-sequential)

✅ **7.5/10** | 前25% | #表征学习 | #扩散模型 | #零样本 #音频分类

👥 **作者与机构**

- 第一作者：Hedi Zisling（Ben-Gurion University）
- 通讯作者：Omri Azencot（Ben-Gurion University）
- 作者列表：Hedi Zisling（Ben-Gurion University）， Ilan Naiman（Ben-Gurion University）， Nimrod Berman（Ben-Gurion University）， Supasorn Suwajanakorn（VISTEC）， Omri Azencot（Ben-Gurion University）

💡 **毒舌点评**

亮点在于首次为“序列解耦”这一老问题构建了扩散模型的概率框架，并将静态与动态因子建模为“相互依赖”而非“独立”，简化损失函数的同时还提升了生成质量。短板则是其视频生成本质是逐帧扩散，这可能导致时序连贯性（如动作的连贯性、光照变化）不如专门考虑时序的视频扩散模型，在真正长序列或复杂运动生成上可能露怯。

🔗 **开源详情**

- 代码：是。论文明确提供了代码仓库链接：https://github.com/azencot-group/DiffSDA。
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：使用了多个公开数据集（MUG, TaiChi-HD, VoxCeleb, CelebV-HQ, TIMIT, LibriSpeech, PhysioNet, Air Quality, ETTh1），论文描述了获取方式和预处理过程。论文未提及公开其衍生数据集。
- Demo：论文中未提及提供在线演示。
- 复现材料：非常充分。论文的附录（A-H）提供了背景知识、模型细节（B.1-B.4）、超参数表（C）、数据集描述（D）、评估指标定义（E）、补充实验分析（F, G.1-G.5）、以及大量额外结果图表（H.1-H.6）。
- 引用的开源项目：论文依赖并整合了多个开源项目，主要包括：扩散模型框架（Ho et al., 2020; Dhariwal & Nichol, 2021），潜扩散模型（Rombach et al., 2022），EDM采样器（Karras et al., 2022），VQ-VAE（Van Den Oord et al., 2017），人脸/人体关键点检测器（Bulat & Tzimiropoulos, 2017; Cao et al., 2017），人脸识别模型（Serengil & Ozpinar, 2020），音频质量评估（Reddy et al., 2021）。

📌 **核心摘要**

1.  要解决什么问题：如何在无监督条件下，将序列数据（如视频、音频、时间序列）分解为独立的“静态”（如人脸身份、说话人身份）和“动态”（如面部动作、语音内容）因子表示。
2.  方法核心是什么：提出了DiffSDA，一个基于扩散过程的概率框架。它由一个序列语义编码器（提取静态和动态因子）、一个随机编码器（向数据添加噪声）和一个随机解码器（基于扩散过程，以解耦因子为条件去噪生成数据）组成。其核心概率模型允许静态和动态因子相互依赖，并仅使用一个统一的得分匹配损失进行优化。
3.  与已有方法相比新在哪里：
    *   框架新颖：首次将扩散模型正式引入无监督序列解耦。
    *   概率建模：建模了静态和动态因子的依赖性，提高了表达能力。
    *   优化简化：仅用单一的扩散损失，避免了传统VAE/GAN方法中复杂的多重损失项和超参数调优。
    *   模态无关：同一框架可应用于视频、音频和时间序列，仅需微调骨干网络（如将U-Net换为MLP）。
    *   评估创新：引入了基于高分辨率真实视频的零样本评估协议和多因子解耦探索方法。
4.  主要实验结果如何：
    *   视频条件交换：在VoxCeleb, CelebV-HQ等高分辨率数据集上，DiffSDA在衡量动态（动作）保持的AKD指标上显著优于SOTA方法SPYL和DBSE。例如，在VoxCeleb上，AKD（动作冻结）为2.793（Ours） vs 4.705 (SPYL) vs 10.96 (DBSE)。
    *   音频解耦：在TIMIT数据集上，其解耦差距（Dis. Gap）达到42.29%，比之前的SOTA方法DBSE（31.11%）提升了超过11个百分点。
    *   时间序列任务：在PhysioNet预测（AUROC 0.87）、分类（准确率64.6%）等多个任务上全面超越了现有无监督方法。
    *   零样本能力：展示了在VoxCeleb上训练，在MUG和CelebV-HQ上进行零样本动态交换的能力。
    *   生成质量：在VoxCeleb数据集上的Fréchet视频距离(FVD)为65.23，远低于SPYL (582.28)和DBSE (1076.44)。
5.  实际意义是什么：为无监督序列数据理解（特别是视频和语音）提供了一个强大且通用的表征学习工具，可应用于身份-动作分离、语音转换、时序预测等下游任务。
6.  主要局限性是什么：
    *   逐帧生成：当前的视频生成是逐帧独立进行的，可能缺乏对全局时空一致性的显式建模。
    *   计算复杂度：扩散模型的推理过程（即使使用了高效采样）仍然比直接的前馈模型慢。
    *   多因子解耦初步：多因子解耦（如分离多个动态因素）仅通过PCA展示了可能性，尚未形成完整的框架。
    *   任务定义局限：主要关注静态/动态二分法，对于更复杂的多因子时序依赖关系建模有待深入。

---

