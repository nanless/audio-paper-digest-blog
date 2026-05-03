---
title: "ICLR 2026 - 自监督学习 论文列表"
date: 2026-05-03
draft: false
tags: ["自监督学习"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 自监督学习 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 自监督学习

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [DiffSDA: Unsupervised Diffusion Sequential Disentanglement A](/audio-paper-digest-blog/posts/2026-05-03-diffsda-unsupervised-diffusion-sequential) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [DiffSDA: Unsupervised Diffusion Sequential Disentanglement Across Modalities](/audio-paper-digest-blog/posts/2026-05-03-diffsda-unsupervised-diffusion-sequential)

✅ **7.5/10** | 前25% | #自监督学习 | #扩散模型 | #跨模态 #音频生成

👥 **作者与机构**

- 第一作者：Hedi Zisling（Ben-Gurion University）
- 通讯作者：Omri Azencot（azencot@bgu.ac.il， Ben-Gurion University）
- 作者列表：Hedi Zisling（Ben-Gurion University）、Ilan Naiman（Ben-Gurion University）、Nimrod Berman（Ben-Gurion University）、Supasorn Suwajanakorn（VISTEC）、Omri Azencot（Ben-Gurion University）

💡 **毒舌点评**

亮点：论文为“序列解耦”这个经典难题提供了一个优雅且强大的新范式——用单一的扩散模型损失统一框架，不仅摆脱了复杂调参的噩梦，还在真实世界高分辨率视频、音频和时间序列上实现了SOTA级的高质量解耦与生成，说服力很强。
短板：所谓的“零样本”实验本质上是特征交换，并未在真正的未见分布上验证模型的泛化能力；此外，将“静态-动态”二分法作为通用解耦的终极目标可能过于简化，现实世界的变化维度远比这复杂。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/azencot-group/DiffSDA
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：使用的是公开数据集（MUG， TaiChi-HD， VoxCeleb， CelebV-HQ， TIMIT， LibriSpeech， PhysioNet， ETTh1， Air Quality），论文未涉及自有数据集。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详尽的训练超参数和网络架构配置（见附录Tab. 6-8），涵盖了所有使用到的数据集。给出了完整的算法描述（算法1、2）。但未提供完整的训练脚本或检查点。
- 论文中引用的开源项目：引用了VQ-VAE（Rombach et al., 2022）作为高分辨率数据预处理组件；采样器基于EDM（Karras et al., 2022）；潜在空间模型使用了DDIM（Song et al., 2020）。评估指标中使用了VGG-FACE和LightFace进行人脸识别（AED），以及OpenPose进行关键点检测（AKD）。

📌 **核心摘要**

本文针对无监督序列解耦问题，即在不依赖标签的情况下将序列数据分解为时不变的静态因子（如身份）和时变的动态因子（如动作），提出了一种基于扩散模型的新颖框架DiffSDA。其核心是构建了一个跨模态的概率模型，创新性地将静态和动态因子建模为相互依赖的联合分布，并使用单一的、标准的扩散损失函数进行优化，避免了以往方法中复杂的损失项调优。与先前基于VAE/GAN的方法相比，DiffSDA是一个模态无关的通用框架，只需对骨干网络做微小调整即可适配视频（U-Net）、音频（MLP）和时间序列数据。在多个真实世界基准测试上，DiffSDA在定性（如条件交换、零样本交换）和定量指标（如AED、AKD、FVD、EER）上均超越了当前最先进的方法（如SPYL， DBSE）。例如，在VoxCeleb视频交换任务中，其AKD误差比SPYL降低了约40%；在TIMIT音频解耦上，解耦差距（Dis. Gap）达到了42.29%，远超DBSE的31.11%。该工作的意义在于为序列数据的无监督表示学习提供了一个统一、高效且强大的生成模型新范式。其主要局限性在于计算效率有待进一步优化，且“零样本”任务的设计尚不能充分证明模型对全新域的泛化能力。

---

