---
title: "ICLR 2026 - 生成模型 论文列表"
date: 2026-05-03
draft: false
tags: ["生成模型"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 生成模型 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 生成模型

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [DiffSDA: Unsupervised Diffusion Sequential Disentanglement A](/audio-paper-digest-blog/posts/2026-05-03-diffsda-unsupervised-diffusion-sequential) | 7.5分 | 前25% |
| 🥈 | [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-03-layersync-self-aligning-intermediate-layers) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [DiffSDA: Unsupervised Diffusion Sequential Disentanglement Across Modalities](/audio-paper-digest-blog/posts/2026-05-03-diffsda-unsupervised-diffusion-sequential)

✅ **7.5/10** | 前25% | #生成模型 | #扩散模型 | #自监督学习 #视频理解

👥 **作者与机构**

- 第一作者：Hedi Zisling（Ben-Gurion University）， Ilan Naiman（Ben-Gurion University）
- 通讯作者：Omri Azencot（Ben-Gurion University）
- 作者列表：Hedi Zisling（Ben-Gurion University）， Ilan Naiman（Ben-Gurion University）， Nimrod Berman（Ben-Gurion University）， Supasorn Suwajanakorn（VISTEC）， Omri Azencot（Ben-Gurion University）

#

💡 **毒舌点评**

本文成功地将扩散模型的强大生成能力引入到序列解耦这一难题中，并证明了其在多个真实模态上的优越性，技术路线新颖且实验验证扎实。然而，其核心创新——“静态与动态因子依赖建模”的理论优势（如因果性）在论文中更多是概念性阐述，缺乏对其在实际生成结果中带来何种具体、可度量增益的深入剖析。此外，虽然方法是模态无关的，但针对不同模态（尤其是音频）的骨干网络修改仍需手动调整，并未实现真正的端到端统一，这略微削弱了“模态无关”主张的彻底性。

#

🔗 **开源详情**

- 代码：提供代码仓库链接 https://github.com/azencot-group/DiffSDA。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：使用公开数据集（VoxCeleb， CelebV-HQ， TaiChi-HD， MUG， TIMIT， LibriSpeech， PhysioNet， Air Quality， ETTh1），并说明了预处理方式。
- Demo：未提及。
- 复现材料：附录中提供了极其详细的超参数表（表6-8）、网络架构说明（表8）、训练数据预处理细节、评估指标定义（附录E）以及额外的实验分析（如图7及讨论），复现信息非常充分。
- 引用的开源项目：依赖EDM（Karras et al., 2022）的采样框架和潜在扩散模型（Rombach et al., 2022）的VQ-VAE。具体实现中可能还依赖其他开源库（如PyTorch， MMEditing等），但论文中未明确列出依赖列表。

📌 **核心摘要**

本文针对无监督序列解耦学习中现有方法（如基于VAE/GAN）存在复杂优化、评估协议不完善以及难以处理真实世界高维数据的问题，提出了基于扩散模型的概率建模框架DiffSDA。其核心创新在于：1）首次为序列解耦建立了扩散过程的概率形式化，将静态因子和动态因子建模为相互依赖的随机变量；2）设计了一个模态无关的架构，通过单一标准扩散损失进行优化，仅需更换编码器骨干（如视频用U-Net，音频用MLP）即可适配不同数据。在实验方面，本文在视频（VoxCeleb， CelebV-HQ， TaiChi-HD）、音频（TIMIT， LibriSpeech）和时间序列（PhysioNet， ETTh1）三大类数据的多个基准测试上，定量与定性结果均优于SPYL和DBSE等现有方法。例如，在VoxCeleb的条件交换任务中，DiffSDA的AKD（衡量动态保真度）为2.793，远低于SPYL（4.705）和DBSE（10.96）；在TIMIT音频说话人识别任务中，其解耦间隔（Dis. Gap）达到42.29%，显著优于DBSE（31.11%）。论文还首次提出了零样本解耦和通过PCA探索多因子解耦的新任务，并引入了新的视频解耦评估指标（AED， AKD）。该工作的实际意义在于提供了一个统一、强大的序列数据表示学习框架，可广泛应用于可控视频生成、语音内容-说话人分离、时间序列分析等领域。主要局限性包括：计算效率（虽采用EDM高效采样，但扩散模型固有迭代成本较高）、当前视频生成为逐帧操作可能影响时空一致性，以及多因子解耦的初步探索仍需深化。

#

---

### 🥈 [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-03-layersync-self-aligning-intermediate-layers)

✅ **7.0/10** | 前25% | #生成模型 | #扩散模型 | #自监督学习 #多语言

👥 **作者与机构**

- 第一作者：Yasaman Haghighi（未说明）
- 通讯作者：未说明
- 作者列表：Yasaman Haghighi（未说明）、Bastien Van Delft（未说明）、Mariam Hassan（未说明）、Alexandre Alahi（未说明）

#

💡 **毒舌点评**

亮点：提出“用强层指导弱层”的自监督范式，概念优雅，巧妙地将扩散模型不同层表示质量的差异转化为训练优势，实现了“无需外部监督的自我提升”，且号称跨模态通用。短板：摘要仅展示“最佳结果”，缺乏具体架构图、消融实验（如不同层选择策略的影响、正则化权重的影响）以及与当前主流方法（如其他训练加速技术）的直接对比，使得“高效通用”的宣称略显空洞，说服力有待正文夯实。

#

🔗 **开源详情**

论文中未提及开源计划。未提供代码仓库链接、模型权重、数据集获取方式、在线演示或详细的复现材料。

📌 **核心摘要**

1.  解决的问题：现有扩散模型训练常依赖外部监督信号（如预训练模型）来提升生成质量和训练效率，这增加了训练复杂性和资源需求。
2.  方法核心：提出LayerSync，一种自监督正则化方法。其核心思想是，扩散模型中间层的表示质量存在差异，利用网络内部“最强”的语义表示作为监督信号，来指导“较弱”层的学习，从而实现自我对齐。
3.  与已有方法相比的新颖性：区别于需要外部预训练模型或额外数据提供监督的传统方法，LayerSync是一种完全自给自足的即插即用模块，利用模型自身的中间表示构建监督信号，无需任何额外开销。
4.  主要实验结果：论文称在图像生成（ImageNet数据集）上，将基于流匹配的transformer训练速度提升了8.75倍以上，同时生成质量（FID等指标）提升了23.6%。此外，该方法还展示了在音频、视频和动作生成等多个领域的适用性。（注：摘要未提供具体的对比基线、指标数值和消融实验细节。）
5.  实际意义：为加速和改善扩散模型训练提供了一种通用、轻量且无需外部依赖的新思路，有望降低多模态生成模型的研发门槛。
6.  主要局限性：摘要信息有限，其核心有效性高度依赖于“强层指导弱层”这一假设在不同架构和任务中的普适性，但缺乏理论分析和详细的消融研究；声称的跨模态有效性仅以“展示了适用性”表述，缺乏具体实验细节和量化对比。

#

---

