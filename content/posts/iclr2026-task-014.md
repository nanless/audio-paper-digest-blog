---
title: "ICLR 2026 - 生成模型 论文列表"
date: 2026-05-04
draft: false
tags: ["生成模型"]
categories: [iclr-2026]
description: "共 3 篇 ICLR 2026 生成模型 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 生成模型

共 **3** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-04-layersync-self-aligning-intermediate-layers) | 8.0分 | 前25% |
| 🥈 | [A Hidden Semantic Bottleneck in Conditional Embeddings of Di](/audio-paper-digest-blog/posts/2026-05-04-a-hidden-semantic-bottleneck-in-conditional) | 7.0分 | 前25% |
| 🥉 | [DiVeQ: Differentiable Vector Quantization Using the Reparame](/audio-paper-digest-blog/posts/2026-05-04-diveq-differentiable-vector-quantization-using) | 7.0分 | 前25% |

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

### 🥈 [A Hidden Semantic Bottleneck in Conditional Embeddings of Diffusion Transformers](/audio-paper-digest-blog/posts/2026-05-04-a-hidden-semantic-bottleneck-in-conditional)

✅ **7.0/10** | 前25% | #生成模型 | #扩散模型 | #模型评估 #音频生成

👥 **作者与机构**

- 第一作者：Trung X. Pham (KAIST)
- 通讯作者：Chang D. Yoo (KAIST)
- 作者列表：Trung X. Pham (KAIST)、Kang Zhang (KAIST)、Ji Woo Hong (KAIST)、Chang D. Yoo (KAIST)

💡 **毒舌点评**

这篇论文最大的亮点在于其“发现”的价值——它像一位侦探，系统性地揭露了当前最强扩散Transformer模型中一个普遍存在却鲜为人知的“秘密”：条件向量极度冗余且信息集中。这为优化模型设计提供了清晰的方向。然而，短板也很明显，论文目前更像是一份详尽的“体检报告”，给出了诊断（高相似、稀疏性）和药方（剪枝），但对“病因”（为何模型会学出这样的表示）的理论解释仍停留在假设层面，缺乏更深入的机制剖析。

🔗 **开源详情**

*   代码：论文中未提及提供专门用于条件嵌入分析或剪枝实验的代码仓库链接。
*   模型权重：论文明确使用了多个SOTA模型的公开预训练权重（来自GitHub），包括DiT, MDT, SiT, LightningDiT, MG, REPA (XL尺寸) 以及 X-MDPT (L-size), MDSGen (B-size)。这是复现其分析工作的关键。
*   数据集：分析所用数据集（ImageNet-1K, DeepFashion, VGGSound）均为公开数据集。
*   Demo：未提及。
*   复现材料：论文附录提供了详细的实验设置（如生成样本数、评估代码来源）和更多可视化结果，有利于复现分析过程。
*   论文中引用的开源项目：论文主要依赖并分析了上述提到的多个开源扩散Transformer模型项目。

📌 **核心摘要**

1.  要解决什么问题： 本文旨在系统性地研究和理解扩散Transformer（DiT）模型中条件嵌入向量（如类别标签、姿态、视频特征等）的内部结构与编码方式，填补该领域理论认知的空白。
2.  方法核心是什么： 作者通过对多个SOTA扩散Transformer模型（DiT, SiT, MDT, REPA等）的预训练条件嵌入进行系统性的度量分析，核心方法包括计算嵌入间的余弦相似度、分析嵌入向量的幅度分布（稀疏性）、使用参与率（PR）量化有效维度，并通过有选择地剪枝嵌入维度来观察对生成质量的影响。
3.  与已有方法相比新在哪里： 这是首次对扩散Transformer条件嵌入进行系统性实证研究。与以往关注模型架构或训练技巧的工作不同，本文聚焦于条件信号本身，揭示了两个关键的新发现：极高的余弦相似度（离散类别任务>99%，连续条件任务>99.9%）和极度的稀疏性（仅约1-2%的维度携带主要语义信息）。
4.  主要实验结果如何：
    *   高相似性：在ImageNet-1K上，6个模型的类别条件嵌入两两余弦相似度普遍超过90%（REPA达99.46%）；在DeepFashion姿态生成和VGGSound视频转音频任务上，相似度超过99.98%（图1，图3，图4c）。
    *   高稀疏性：嵌入向量中，仅约5-20个维度的绝对值超过1，大部分维度接近零（图5，图6）。归一化参与率（nPR）在多数模型中低于2.5%（表1）。
    *   剪枝实验：以REPA为例，在阈值τ=0.01下剪枝约38.94%的低幅度“尾部”维度，FID从7.17微增至7.16（甚至改善），CLIP分数从29.746提升至29.807；剪枝高达66.21%（τ=0.02）时，FID为9.22，生成质量仍保持可用（表2，图8）。
    *   方差分析：语义信息集中在方差最高的15-20个“头部”维度，尾部维度方差极小（图9）。
    *   t-SNE可视化：仅保留头部维度即可维持清晰的类别聚类，而仅保留尾部维度则聚类完全崩溃（图13）。
5.  实际意义是什么： 揭示了当前扩散Transformer条件编码机制存在严重的参数冗余，表明模型学习到的是一个高度压缩且稀疏的语义表示。这为设计更高效（如压缩条件向量）、更可解释的条件机制提供了直接的经验证据和优化思路。
6.  主要局限性是什么： 论文对观察到的现象（极端相似性和稀疏性）主要提供了经验性解释和假设（如稳定训练、AdaLN放大效应），缺乏更严格的理论分析来阐明其根本成因。此外，剪枝虽能保持性能，但如何将这种稀疏性设计进模型架构（而非事后剪枝）的路径尚未明确。

---

### 🥉 [DiVeQ: Differentiable Vector Quantization Using the Reparameterization Trick](/audio-paper-digest-blog/posts/2026-05-04-diveq-differentiable-vector-quantization-using)

✅ **7.0/10** | 前25% | #生成模型 | #向量量化 | #语音合成 #图像压缩

👥 **作者与机构**

- 第一作者：Mohammad Hassan Vali (ELLIS Institute Finland & Department of Computer Science, Aalto University, Finland)
- 通讯作者：Arno Solin (ELLIS Institute Finland & Department of Computer Science, Aalto University, Finland)
- 作者列表：Mohammad Hassan Vali (ELLIS Institute Finland & Department of Computer Science, Aalto University, Finland), Tom Bäckström (Department of Information and Communications Engineering, Aalto University, Finland), Arno Solin (ELLIS Institute Finland & Department of Computer Science, Aalto University, Finland)

💡 **毒舌点评**

亮点在于，它像一位细致的工程师，不仅为“向量量化梯度断裂”这一老大难问题提供了两种解法，还顺手把同行们（如STE、EMA）的常见痛点（如码本坍缩、表征错位）也一并梳理和对比，实验做得扎实全面。短板则是，核心方法（DiVeQ）本质上是对NSVQ方向性偏差的“微调”，缺乏原理上的跃迁，更像是一次优秀的工程优化而非理论突破。

🔗 **开源详情**

- 代码：论文中提供了GitHub仓库链接：https://github.com/AaltoML/DiVeQ
- 模型权重：未提及公开预训练模型权重。
- 数据集：实验使用的是公开基准数据集（AFHQ, CELEBA-HQ, FFHQ, LSUN, VCTK），论文中给出了获取链接。
- Demo：未提及在线演示。
- 复现材料：附录A、B、C提供了极其详尽的实现细节，包括所有模型的架构表、超参数设置、训练策略、损失函数实现、其他方法（如ST-GS, RT）的复现要点、以及消融实验设置。复现材料非常充分。
- 论文中引用的开源项目：引用了多个开源实现作为基线或基础，包括：
    - `dome272/VQGAN-pytorch` (VQGAN实现)
    - `zalandoresearch/pytorch-vq-vae` (VQ-VAE PyTorch实现)
    - `karpathy/deep-vector-quantization` (ST-GS实现)
    - `lucidrains/vector-quantize-pytorch` (RT实现)
    - `GaParmar/clean-fid` (FID计算)
    - `eagomez2/pikku-nac` (DAC语音编码模型)
- 复现计划：论文明确说明“Upon acceptance of the paper, the reference implementation and examples will be made available via a GitHub repository.”

📌 **核心摘要**

1.  要解决的问题：深度学习中的向量量化（VQ）层因其最近邻分配的不可微性，会阻断梯度流，导致编码器无法通过VQ层进行端到端训练，即“梯度坍缩”问题。
2.  方法核心：提出DiVeQ，将量化操作建模为在输入向量`z`上添加一个“模拟量化误差”向量。该误差向量的大小等于`z`与其最近码本向量`c_i`的距离，方向则通过重参数化技巧（加入小方差噪声`v`）指向`c_i`，从而在保持前向传播为硬分配的同时，允许梯度通过。进一步提出SF-DiVeQ，将量化点从离散的码本向量扩展到连接相邻码本向量的线段上，形成空间填充曲线。
3.  与已有方法相比新在哪里：
    - 对比STE/EMA/RT：无需引入额外的辅助损失（如承诺损失、码本损失）或复杂的超参数调谐，就能实现无偏的码本梯度更新。
    - 对比NSVQ：NSVQ随机采样误差方向，导致量化误差常大于真实误差（高维时概率趋近1）。DiVeQ通过重参数化将方向对准最近码本，保证了量化误差的几何一致性。SF-DiVeQ进一步消除了码本与潜空间的表征错位问题，无需启发式的码本替换。
4.  主要实验结果：
    - 图像压缩 (VQ-VAE)：在AFHQ等数据集上，DiVeQ和SF-DiVeQ在SSIM、PSNR、LPIPS指标上均优于或持平于现有方法。例如在AFHQ上使用11bit码本，SF-DiVeQ的LPIPS最低（0.216 vs. STE的0.232）。
    - 图像生成 (VQGAN)：在CELEBA-HQ数据集上，当使用更大的学习率和批量大小（HP2）时，DiVeQ和SF-DiVeQ未发生码本-表征错位（FID分别为8.01和6.66），而STE、EMA、RT等出现错位导致FID飙升（>300或>7）。
    - 语音编码 (DAC)：在VCTK数据集上，两种方法在多个指标（LSD, MFCC, PESQ, STOI）上一致优于基线方法，且未发生训练失败（如ST-GS在部分设置下PESQ≈1.0，STOI≈0.4）。
    - 表格对比：请见下方“实验结果”部分的表格。
5.  实际意义：为需要使用VQ的深度生成模型（如VQ-VAE, VQGAN, DAC）提供了一种更稳定、无需辅助损失且性能更优的可微量化“即插即用”模块，简化了训练流程，提升了模型在图像和语音任务上的重建与生成质量。
6.  主要局限性：DiVeQ的理论创新（基于重参数化）可视为对NSVQ的渐进式改进。SF-DiVeQ虽然解决了码本错位，但其训练需要初始化时跳过量化阶段，引入了新的训练策略。论文未详细讨论在更复杂的模型（如扩散模型中的量化）中的适用性。

---

