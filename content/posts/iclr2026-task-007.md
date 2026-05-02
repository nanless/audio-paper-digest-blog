---
title: "ICLR 2026 - 无监督学习 论文列表"
date: 2026-05-02
draft: false
tags: ["无监督学习"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 无监督学习 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 无监督学习

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [DiffSDA: Unsupervised Diffusion Sequential Disentanglement A](/audio-paper-digest-blog/posts/2026-05-02-diffsda-unsupervised-diffusion-sequential) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [DiffSDA: Unsupervised Diffusion Sequential Disentanglement Across Modalities](/audio-paper-digest-blog/posts/2026-05-02-diffsda-unsupervised-diffusion-sequential)

🔥 **8.0/10** | 前25% | #无监督学习 | #扩散模型 | #表征学习 #零样本

👥 **作者与机构**

- 第一作者：Hedi Zisling（Ben-Gurion University）与Ilan Naiman并列第一作者
- 通讯作者：Omri Azencot（Ben-Gurion University）
- 作者列表：Hedi Zisling（Ben-Gurion University）、Ilan Naiman（Ben-Gurion University）、Nimrod Berman（Ben-Gurion University）、Supasorn Suwajanakorn（VISTEC）、Omri Azencot（Ben-Gurion University）

#

💡 **毒舌点评**

亮点：首次将扩散模型正式、系统地引入序列解耦任务，提出了一个简洁（单一损失项）且强大的概率框架，并在包括高分辨率真实视频在内的多个模态上验证了其SOTA性能，特别是“零样本跨数据集解耦”展示了其强大的泛化能力。
短板：生成过程目前是逐帧进行的，论文自述这可能限制视频的时空连贯性，未来需与视频扩散模型结合；此外，多因子解耦探索仍属初步，距离实用化的精细控制还有距离。

#

🔗 **开源详情**

- 代码：论文明确提供了GitHub代码仓库链接：https://github.com/azencot-group/DiffSDA。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：论文中使用的数据集（MUG， TaiChi-HD， VoxCeleb， CelebV-HQ， TIMIT， LibriSpeech， PhysioNet， ETTh1， Air Quality）均为公开学术数据集，并提供了获取方式的引用。
- Demo：论文中未提供在线演示链接。
- 复现材料：提供了极为详尽的复现材料，包括所有数据集的预处理步骤、训练的完整超参数配置表（Tab.6-8， 如学习率、批次大小、模型维度、序列长度、GPU型号等）、网络架构细节、评估指标定义以及消融实验设置。
- 论文中引用的开源项目：EDM（采样框架）、LDM（潜在扩散模型， 使用预训练VQ-VAE）、U-Net、LSTM等标准架构；评估时使用了VGG-FACE（面部识别）、HRNet（姿态估计）等预训练模型。

📌 **核心摘要**

1. 问题：现有无监督序列解耦方法主要依赖VAE/GAN，需要复杂的多损失优化，在真实世界数据上效果有限，且缺乏统一的评估协议。扩散模型虽强大，但尚无理论框架用于序列解耦。
2. 核心方法：提出DiffSDA，一个基于扩散过程的模态无关序列解耦框架。其核心是联合建模静态（时间不变）和动态（时间变化）隐因子，并引入一个条件于这些因子的扩散过程来生成数据序列。
3. 与已有方法的对比创新：(1) 提供了首个针对序列解耦的扩散模型概率建模（Eq.1-2）；(2) 与先前工作不同，建模了静态与动态因子的相互依赖性（Dependent Prior），提升了表达力；(3) 整个模型仅需一个基于分数匹配的统一损失项（Eq.5），极大简化了优化。
4. 主要实验结果：在多个真实世界数据集上全面超越SOTA（SPYL， DBSE）。视频任务中，在VoxCeleb条件交换的动态保留度（AKD）上从10.96降至2.793；音频任务中，在TIMIT上的解耦差距（Dis. Gap）从31.11%提升至42.29%；时序预测任务（ETTh1 MAE）从11.2降至9.89。首次实现了跨数据集的零样本视频解耦交换（如图2，4）。

![图1：DiffSDA模型架构](icassp-img://tooDJHBSvO/0.jpg)
图1展示了DiffSDA的三大组件：序列语义编码器（上方，提取静态s0和动态d1:V 0因子）、随机编码器（下方，添加噪声得x1:V t）和随机解码器（右侧，条件于隐因子进行去噪得˜x1:V 0）。

![图2：条件交换、零样本交换及多因子解耦示例](icassp-img://tooDJHBSvO/1.jpg)
图2左侧展示了在真实视频上的条件交换（保留第一个人的静态特征，使用第二个人的动态）；中间展示了零样本交换（在VoxCeleb上训练，在MUG上测试）；右侧展示了通过对静态因子进行PCA遍历发现的可控语义属性（如性别）。

![图3：与SPYL方法在多个数据集上的动态交换定性对比](icassp-img://tooDJHBSvO/2.jpg)
图3对比了本文方法与SPYL方法在CelebV-HQ、VoxCeleb和TaiChi-HD数据集上的动态交换结果，表明DiffSDA能生成更高质量且动态保留更好的样本。

![图4：零样本交换的更多示例](icassp-img://tooDJHBSvO/3.jpg)
图4展示了在VoxCeleb上训练，但在CelebV-HQ或MUG上进行零样本动态交换的结果，证明了模型的跨数据集泛化能力。

5. 实际意义：为处理视频、音频、时序等序列数据的无监督解耦提供了统一、强大的生成式框架，有望应用于可控内容生成、数据增强、特征迁移等领域。
6. 主要局限性：当前视频生成为逐帧独立进行，可能影响时空一致性；多因子（不止静态/动态）解耦的探索是初步的。

#

---

