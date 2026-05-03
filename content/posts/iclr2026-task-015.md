---
title: "ICLR 2026 - 生成模型 论文列表"
date: 2026-05-04
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
| 🥇 | [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-04-layersync-self-aligning-intermediate-layers) | 8.0分 | 前25% |
| 🥈 | [DiVeQ: Differentiable Vector Quantization Using the Reparame](/audio-paper-digest-blog/posts/2026-05-04-diveq-differentiable-vector-quantization-using) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-04-layersync-self-aligning-intermediate-layers)

🔥 **8.0/10** | 前25% | #生成模型 | #扩散模型 | #自监督学习 #音频生成

👥 **作者与机构**

- 第一作者：Yasaman Haghighi (Ecole Polytechnique Fédérale de Lausanne, EPFL)
- 通讯作者：Alexandre Alahi (Ecole Polytechnique Fédérale de Lausanne, EPFL) （根据论文提供的邮箱后缀推断）
- 作者列表：Yasaman Haghighi (EPFL)， Bastien van Delft (EPFL)， Mariam Hassan (EPFL)， Alexandre Alahi (EPFL)

💡 **毒舌点评**

亮点在于其“内生式自监督”的思路极其优雅：用模型自身深层更强的语义特征来指导浅层学习，实现了无外部依赖的加速与提质，这种“左右互搏”的巧思在方法论上颇具美感。短板是该方法本质上是现有Transformer架构的一种正则化技巧，未能像更早的外部对齐方法那样从根本上改变训练范式，其上限可能受制于基础模型自身深层表征的质量天花板。

🔗 **开源详情**

- 代码：论文提供了GitHub代码仓库链接：`https://github.com/vita-epfl/LayerSync.git`，并承诺在论文接收后开源完整代码库和所有实验配置。
- 模型权重：论文中未提及会公开预训练模型权重。
- 数据集：实验中使用的所有数据集（ImageNet， MTG-Jamendo， HumanML3D， CLEVRER， MixKit）均为公开数据集，论文未提供新数据集。
- Demo：论文中未提及提供在线演示。
- 复现材料：论文在附录L、M、Q等章节提供了详细的训练超参数设置、硬件环境、模型架构参数、评估指标细节，复现指导性较强。
- 论文中引用的开源项目：论文依赖的基础模型和工具包括：SiT (Ma et al., 2024)、Stable Diffusion VAE (Rombach et al., 2022)、Stable Audio Open VAE (Evans et al., 2025)、MDM (Tevet et al., 2022)。评估工具包括CLAP (Zhao et al., 2023) 等。

📌 **核心摘要**

1.  问题：扩散模型训练计算成本高昂。此前通过与强大的外部预训练模型（如DINOv2， VLM）对齐中间表征来加速训练的方法有效，但引入了对外部模型、数据和额外计算的依赖，限制了其通用性和效率。
2.  方法核心：提出LayerSync，一种自监督、无参数、即插即用的正则化方法。核心思想是利用扩散模型自身不同层表征质量的天然异质性（深层语义更丰富，浅层较弱），通过余弦相似度损失，强制让浅层（弱）表征向深层（强）表征对齐。
3.  与已有方法相比新在哪里：与依赖外部模型的对齐方法（如REPA）相比，LayerSync是完全自包含的；与现有的自监督方法（如Dispersive Loss）相比，它提供了更直接、更有方向性的学习信号（“对齐”而非“分散”）。它实现了一种无需外部监督的“自我提升”循环。
4.  主要实验结果：
    *   图像生成 (ImageNet 256×256)：在SiT-XL模型上，LayerSync实现了8.75倍的训练加速（FID 8.29 @ 160 epochs vs 基线FID 8.99 @ 800 epochs）。800 epochs后达到FID 6.87，比基线（8.99）降低23.6%，创下纯自监督生成的新SOTA。与依赖外部表征的REPA结合使用时效果进一步提升（FID 7.01 vs REPA单独的7.88）。
    *   音频生成 (MTG-Jamendo)：在SiT-XL模型上，FAD-10K指标从0.251改进至0.199，提升约20.7%，收敛速度也得到提升。
    *   动作生成 (HumanML3D)：在MDM模型上，FID提升7.7%，R-Precision提升3.4%。
    *   表示分析：经LayerSync训练的模型，其内部表征在分类和分割任务上的平均性能分别提升32.4%和63.3%，并与DINOv2特征的对齐度提升88.2%，证明了方法对内部表征质量的整体增强。
5.  实际意义：提供了一种简单、高效且通用的工具，可无缝应用于不同模态的扩散模型训练，显著降低计算成本并提升生成质量，推动扩散模型向更实用、更普惠的方向发展。
6.  主要局限性：方法的有效性依赖于模型自身已学习到足够强的深层表征，对于初始表征质量极差的模型可能效果有限。此外，论文未深入探讨层对齐可能引入的冗余性及其对模型长期可塑性或特定下游任务（如精细控制）的潜在影响。

---

### 🥈 [DiVeQ: Differentiable Vector Quantization Using the Reparameterization Trick](/audio-paper-digest-blog/posts/2026-05-04-diveq-differentiable-vector-quantization-using)

✅ **7.5/10** | 前25% | #生成模型 | #信号处理 | #音频生成 #语音增强

👥 **作者与机构**

- 第一作者：Mohammad Hassan Vali（Aalto University, Finland, ELLIS Institute Finland & Department of Computer Science）
- 通讯作者：未明确标注，但提供了三位作者的合著邮箱 `{mohammad.vali, tom.backstrom, arno.solin}@aalto.fi`。
- 作者列表：Mohammad Hassan Vali（Aalto University, ELLIS Institute Finland & Department of Computer Science）、Tom Bäckström（Aalto University, Department of Information and Communications Engineering）、Arno Solin（Aalto University, ELLIS Institute Finland & Department of Computer Science）

💡 **毒舌点评**

亮点在于其工程上的巧妙与实用：DiVeQ通过一个简单的“方向性噪声”重参数化，就优雅地解决了困扰VQ-VAE等模型多年的梯度阻断和码本坍塌问题，且无需复杂的辅助损失或温度调度，堪称“优雅的工程解”。短板则在于理论创新深度稍显不足，本质上是现有技术（重参数化技巧、空间填充曲线）的针对性组合与优化，更像是在VQ工具箱里增添了一件“多功能精工螺丝刀”，而非发明了新的动力工具。

🔗 **开源详情**

- 代码：论文提供了公开的代码仓库链接：`https://github.com/AaltoML/DiVeQ`。
- 模型权重：论文未提及是否公开预训练模型权重。
- 数据集：使用的是公开数据集（AFHQ, CELEBA-HQ, FFHQ, LSUN, VCTK），并说明了获取方式和划分比例。
- Demo：论文未提及在线演示。
- 复现材料：提供了极其详细的复现材料，包括：
    - 完整的实现细节（附录A），包括VQ-VAE、VQGAN、DAC的模型架构和超参数。
    - 所有对比方法（STE, EMA, RT, ST-GS, NSVQ）的具体实现细节。
    - 改进的码本替换算法的详细描述和伪代码（附录B.1）。
    - 大量的消融实验设置和结果（附录C）。
    - 语音编码任务的主观对比音频样本（在补充材料中）。
- 论文中引用的开源项目：论文依赖并引用了多个开源实现，包括：
    - VQ-VAE参考实现：DeepMind的Sonnet版本和zalandoresearch的PyTorch版本。
    - VQGAN实现：dome272的GitHub仓库及其修改版。
    - ST-GS实现：karpathy的GitHub仓库。
    - RT实现：lucidrains的GitHub仓库。
    - 语音模型：Pikku NAC（基于DAC的修改模型）。
    - FID计算：clean-fid。

📌 **核心摘要**

1. 问题：向量量化（VQ）因其非可微的硬最近邻分配操作，会阻断梯度回传，导致编码器无法通过VQ层得到有效更新，即“梯度坍塌”问题。现有解决方案（如STE、EMA）存在辅助损失复杂、训练-测试不匹配、码本利用率低或潜在表示与码本不对齐等缺陷。
2. 方法核心：提出DiVeQ，将量化操作建模为在输入向量上添加一个“模拟量化误差”向量。该向量的大小等于输入到最近码本向量的距离，方向则由一个可控的随机噪声（方向与最近码本方向对齐）决定，从而在保持前向传播硬分配的同时，实现了可微的反向传播。进一步提出SF-DiVeQ变体，将量化目标从离散码本点扩展到连接相邻码本的连续线段上，形成空间填充曲线。
3. 创新点：a) 通过方向性重参数化（DiVeQ）实现精确的梯度几何一致性；b) 引入空间填充曲线量化（SF-DiVeQ），减少量化误差并确保码本完全利用，从根本上避免码本坍塌和对齐问题；c) 两种方法均为即插即用，无需辅助损失或复杂的超参数调优。
4. 实验结果：在VQ-VAE图像压缩、VQGAN图像生成和DAC语音编码三个任务、多个数据集上进行评估。例如，在VQ-VAE图像压缩任务（AFHQ数据集，8-11bit码本）中，DiVeQ/SF-DiVeQ在SSIM、PSNR和LPIPS指标上一致性优于其他方法。在VQGAN生成任务（CELEBA-HQ数据集，不同超参数设置下），DiVeQ/SF-DiVeQ展现出对训练不稳定性的鲁棒性，避免了其他方法（如STE, ST-GS）可能出现的因“表示-码本不对齐”导致的生成质量严重退化（FID > 300）。在语音编码任务（VCTK数据集）中，同样取得了最优的LSD、MFCC距离、PESQ和STOI指标。
5. 实际意义：为深度学习模型中普遍使用的VQ层提供了更稳定、更优的训练方案，可作为现有VQ实现的直接替换，提升图像压缩、生成及语音合成/编码等任务的性能和训练可靠性。
6. 局限性：论文未明确讨论方法的计算开销增加情况；SF-DiVeQ需要特殊的码本初始化策略（虽然后续实验显示随机初始化也可行）；方法对码本大小、噪声方差σ²等超参数的敏感性虽低，但仍需在具体任务中选定。

---

