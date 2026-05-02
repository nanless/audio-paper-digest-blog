---
title: "ICLR 2026 - 生成模型 论文列表"
date: 2026-05-03
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
| 🥇 | [A Hidden Semantic Bottleneck in Conditional Embeddings of Di](/audio-paper-digest-blog/posts/2026-05-03-a-hidden-semantic-bottleneck-in-conditional) | 8.0分 | 前25% |
| 🥈 | [DiVeQ: Differentiable Vector Quantization Using the Reparame](/audio-paper-digest-blog/posts/2026-05-03-diveq-differentiable-vector-quantization-using) | 7.5分 | 前25% |
| 🥉 | [DiffSDA: Unsupervised Diffusion Sequential Disentanglement A](/audio-paper-digest-blog/posts/2026-05-03-diffsda-unsupervised-diffusion-sequential) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [A Hidden Semantic Bottleneck in Conditional Embeddings of Diffusion Transformers](/audio-paper-digest-blog/posts/2026-05-03-a-hidden-semantic-bottleneck-in-conditional)

🔥 **8.0/10** | 前25% | #生成模型 | #扩散模型 | #图像生成 #音视频生成

👥 **作者与机构**

- 第一作者：Trung X. Pham (韩国科学技术院，KAIST)
- 通讯作者：Chang D. Yoo (韩国科学技术院，KAIST)
- 作者列表：Trung X. Pham (KAIST)、Kang Zhang (KAIST)、Ji Woo Hong (KAIST)、Chang D. Yoo (KAIST)

💡 **毒舌点评**

亮点：首次对多个SOTA扩散Transformer的条件嵌入进行了系统性“体检”，用详实的数据揭示了其内部极端的角相似性和维度稀疏性，发现了看似矛盾但实际有效的“语义瓶颈”现象，为优化条件注入机制提供了坚实的实证基础。短板：对“为何高相似性能不影响生成质量”这一核心谜题的解释仍停留在假设层面，缺乏更深入的理论分析或控制实验来严格验证；此外，分析揭示了大量冗余，但未进一步提出并验证一种基于此发现的新型、更高效的条件架构。

🔗 **开源详情**

- 代码：论文中未提供独立的代码仓库链接。分析基于公开的第三方模型仓库（如GitHub上的DiT， MDT， SiT， REPA等官方实现）。
- 模型权重：分析所用的模型权重均为公开发布的预训练权重（XL， L， B尺寸）。
- 数据集：分析所用数据集（ImageNet-1K， DeepFashion， VGGSound）均为公开数据集。
- Demo：未提及。
- 复现材料：论文附录详细说明了评估设置（生成5000个样本，使用LightningDiT的评估代码）、指标计算方式（余弦相似度、PR）以及更多的可视化结果（t-SNE， 其他模型的热力图），为复现其分析提供了必要信息。
- 论文中引用的开源项目：明确提及并分析了以下项目的官方实现：DiT (Peebles & Xie, 2023), MDT (Gao et al., 2023), SiT (Ma et al., 2024), REPA (Yu et al., 2025), LightningDiT (Yao et al., 2025), Model-Guided (Tang et al., 2025)。此外还涉及X-MDPT (Pham et al., 2024) 和 MDSGen (Pham et al., 2025b) 的公开权重。

📌 **核心摘要**

这篇论文旨在探究扩散Transformer（DiT）模型中条件嵌入（conditional embeddings）的内在结构与编码方式。通过对DiT、MDT、SiT、REPA等多个SOTA模型的系统性分析，作者发现了两个关键现象：1）类条件向量在ImageNet-1K上表现出超过99%的极端余弦相似度，连续条件任务（如姿态引导图像生成、视频到音频）中甚至超过99.9%；2）这些向量是高度稀疏的，超过99%的维度幅值接近于零，语义信息集中在少量高幅值维度上。实验证明，即使剪枝掉高达66%的低幅值维度，生成质量（FID， CLIP）基本保持不变甚至略有提升。这表明扩散Transformer的条件编码存在显著的过参数化，语义信息被极度压缩在少数维度中。此发现揭示了条件嵌入中的“隐藏语义瓶颈”，挑战了关于语义条件如何编码的常规假设，并为设计更高效、更可解释的条件机制指明了方向。局限性在于，对产生这种现象的深层机制（如训练动力学、AdaLN的影响）的解释主要基于假设，缺乏理论证明，且尚未将此发现转化为一个全新的、性能更优的条件架构。

---

### 🥈 [DiVeQ: Differentiable Vector Quantization Using the Reparameterization Trick](/audio-paper-digest-blog/posts/2026-05-03-diveq-differentiable-vector-quantization-using)

✅ **7.5/10** | 前25% | #生成模型 | #自监督学习 | #音频生成 #端到端

👥 **作者与机构**

- 第一作者：Mohammad Hassan Vali（ELLIS Institute Finland & Department of Computer Science, Aalto University, Finland）
- 通讯作者：未说明（论文未明确指定通讯作者）
- 作者列表：Mohammad Hassan Vali（ELLIS Institute Finland & Department of Computer Science, Aalto University, Finland）、Tom Bäckström（Department of Information and Communications Engineering, Aalto University, Finland）、Arno Solin（ELLIS Institute Finland & Department of Computer Science, Aalto University, Finland）

💡 **毒舌点评**

亮点：论文最大的优点在于为向量量化提供了两个理论动机清晰、几何直觉明确的“即插即用”可微分替代方案（DiVeQ和SF-DiVeQ），它们直接解决了核心的梯度阻断问题，且无需额外的损失项或复杂的超参调优，在实验中展现出优异的稳定性和性能。短板：方法的核心贡献集中在“如何可微化量化操作”这一工程问题上，缺乏对量化后表示能力、信息瓶颈等更深层理论问题的探讨；此外，所有实验均在标准架构（VQ-VAE, VQGAN）上进行，其对于更新颖或更复杂的生成模型架构的普适性尚未得到验证。

🔗 **开源详情**

- 代码：提供了公开的代码仓库链接：https://github.com/AaltoML/DiVeQ。
- 模型权重：未提及公开的预训练模型权重。
- 数据集：使用的是公开数据集（AFHQ, CELEBA-HQ, FFHQ, LSUN, VCTK），但论文中未说明如何获取，需从原始来源获取。
- Demo：未提及在线演示。
- 复现材料：提供了极其详细的复现材料，包括：
    - 所有三个任务（VQ-VAE压缩、VQGAN生成、DAC语音编码）的模型架构、超参数和训练细节（附录A）。
    - 与其他VQ优化方法（STE, EMA, RT, ST-GS, NSVQ）的公平比较实现细节。
    - DiVeQ/SF-DiVeQ的方差σ²敏感性分析、码本替换策略、SF-DiVeQ初始化建议等（附录B, C）。
    - 全部实验的训练日志（附录C.10）。
- 论文中引用的开源项目：
    - VQ-VAE参考了DeepMind和Zalando Research的PyTorch实现。
    - VQGAN参考了dome272和aa1234241的PyTorch实现。
    - ST-GS参考了karpathy的实现。
    - RT参考了lucidrains的实现。
    - FID计算使用了clean-fid。
    - DAC语音编码基于Pikku NAC模型。

📌 **核心摘要**

1. 问题：向量量化（VQ）因其硬指派操作不可微分，阻碍了深度学习模型的端到端梯度传播，即“梯度坍缩”问题。现有解决方法（如STE、EMA、NSVQ）各有缺陷，如梯度偏差、训练-测试不匹配、需要辅助损失或复杂调优。
2. 方法核心：提出DiVeQ，将量化过程建模为添加一个模拟量化误差的向量。该向量的模等于输入与最近码本向量的距离，方向通过重参数化技巧与最近码本向量对齐，从而在保持前向传播硬指派的同时允许梯度流动。进一步提出SF-DiVeQ，将量化扩展到连接相邻码本向量的连续线段上，量化点为线段上的随机插值点。
3. 创新点：
   - DiVeQ通过方向性重参数化，确保可微分代理在几何上与真实最近邻操作一致，优于NSVQ的随机方向误差。
   - SF-DiVeQ通过量化到连续曲线，减少了量化误差，并从根本上避免了码本坍缩和码本-潜空间不对齐问题，无需任何启发式码本替换。
   - 两种方法均无需辅助损失项、温度调度或复杂超参调优，作为“即插即用”替代品。
4. 主要实验结果：在VQ-VAE图像压缩、VQGAN图像生成（数据集：AFHQ, CELEBA-HQ, FFHQ, LSUN）和DAC语音编码（VCTK数据集）任务上，DiVeQ和SF-DiVeQ在大多数指标（SSIM↑, PSNR↑, LPIPS↓, FID↓, LSD↓, PESQ↑, STOI↑）上优于或持平于其他VQ优化方法。关键定量结果见下表：

| 方法 | VQ-VAE压缩（AFHQ， 11位码本） | VQGAN生成（CELEBA-HQ， 9位码本， HP1设置） | 语音编码（VCTK， 12位码本， batch=64） |
| :--- | :--- | :--- | :--- |
| | SSIM / PSNR / LPIPS | FID ↓ | PESQ ↑ / STOI ↑ |
| STE | 0.362 / 20.0 / 0.373 | 5.57 | 1.14 / 0.71 |
| EMA | 0.355 / 19.8 / 0.362 | 6.30 | 1.59 / 0.84 |
| RT | 0.388 / 21.5 / 0.390 | 7.55 | 1.43 / 0.80 |
| ST-GS | 0.390 / 21.7 / 0.388 | 6.81 | 1.04 / 0.39 |
| NSVQ | 0.355 / 19.5 / 0.473 | 70.4 | 1.49 / 0.82 |
| DiVeQ (ours) | 0.373 / 20.5 / 0.355 | 6.69 | 1.53 / 0.83 |
| SF-DiVeQ (ours) | 0.349 / 20.2 / 0.349 | 5.21 | 1.62 / 0.85 |

5. 实际意义：为深度学习中广泛使用的向量量化层提供了一种更简单、更稳定、性能更优的可微分实现，可作为现有模块的直接替换，简化模型训练并提升最终性能。
6. 主要局限性：SF-DiVeQ的码本初始化需要额外策略（先训练几轮无量化）；方法的理论优势主要体现在优化稳定性上，对于生成质量的极限提升可能有限；实验未与最新、最复杂的基于量化的生成模型（如FSQ, LFQ）进行全面对比。

---

### 🥉 [DiffSDA: Unsupervised Diffusion Sequential Disentanglement Across Modalities](/audio-paper-digest-blog/posts/2026-05-03-diffsda-unsupervised-diffusion-sequential)

✅ **7.0/10** | 前25% | #生成模型 | #扩散模型 | #自监督学习 #零样本

👥 **作者与机构**

- 第一作者：Hedi Zisling (Ben-Gurion University)
- 通讯作者：Omri Azencot (Ben-Gurion University)
- 作者列表：Hedi Zisling (Ben-Gurion University)、Ilan Naiman (Ben-Gurion University)、Nimrod Berman (Ben-Gurion University)、Supasorn Suwajanakorn (VISTEC)、Omri Azencot (Ben-Gurion University)

💡 **毒舌点评**

论文最大的亮点在于为“序列解纠缠”这个略显陈旧的课题，找到了一个时髦且有效的理论载体（扩散模型），并成功将其包装成一个“模态无关”的强大框架，在多个基准上刷了榜。但短板也同样明显：所谓的“模态无关”很大程度上只是换了个MLP主干，对于音频任务本身的特性（如梅尔频谱的时频结构）缺乏针对性建模；此外，高分辨率视频生成时逐帧处理的局限性被轻描淡写，这恰恰是扩散模型在视频领域最大的痛点。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：https://github.com/azencot-group/DiffSDA
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：实验使用了多个公开数据集（MUG, TaiChi-HD, VoxCeleb, CelebV-HQ, TIMIT, LibriSpeech, PhysioNet, Air Quality, ETTh1），并在附录D中给出了获取和预处理方式。
- Demo：论文中未提及在线演示。
- 复现材料：附录C（超参数表6、7、8）、附录D（数据集详细描述）和附录A（背景知识）提供了丰富的复现信息。
- 论文中引用的开源项目：
    - 扩散模型采样：EDM (Karras et al., 2022)
    - 高分辨率图像生成：Latent Diffusion Model (Rombach et al., 2022), VQ-VAE (Van Den Oord et al., 2017)
    - 音频说话人识别基线：LightFace (Serengil & Ozpinar, 2020)
    - 关键点检测：面部对齐 (Bulat & Tzimiropoulos, 2017)，人体姿态估计 (Cao et al., 2017)
    - 人脸特征提取：VGG-FACE (Serengil & Ozpinar, 2020)

📌 **核心摘要**

本文针对无监督序列解纠缠任务，即在无标签情况下将序列数据（如视频、音频、时间序列）分解为静态（不变）和动态（时变）潜在因子，提出了一种基于扩散模型的新框架DiffSDA。与传统基于VAE/GAN的方法相比，DiffSDA的核心创新在于：1）首次为序列解纠缠建立了基于扩散过程的概率建模框架；2）提出静态和动态因子相互依赖的先验建模（而非独立），并证明这能提升表达能力（约13%的FVD改善）；3）仅使用单一的扩散损失函数进行优化，避免了复杂的多重损失平衡。该方法通过一个序列语义编码器（U-Net或MLP+LSTM）提取因子，并通过一个条件化扩散解码器生成样本。论文在三个模态的多个基准数据集上进行了全面评估，实验结果（如表2、表3、表4、表5所示）表明，DiffSDA在条件交换、零样本交换、重建质量和下游预测任务上均优于SPYL、DBSE等SOTA方法。其实际意义在于提供了一个通用且强大的无监督表征学习工具，可用于数据增强、内容编辑和跨模态迁移等场景。主要局限性是高分辨率视频生成效率（逐帧处理）有待提升，且对于动态因子能进一步分解为多个可解释因子的探索仍处于初步阶段。

主要实验结果表（节选）：

表2：条件交换任务中物体（AED↓）与动作（AKD↓）的保持度
| 数据集 | 方法 | AED↓(静态冻结) | AKD↓(动态冻结) |
| :--- | :--- | :--- | :--- |
| VoxCeleb | SPYL | 1.058 | 4.705 |
| | DBSE | 1.026 | 10.96 |
| | Ours | 0.846 | 2.793 |
| CelebV-HQ | SPYL | 0.631 | 39.16 |
| | DBSE | 0.751 | 28.69 |
| | Ours | 0.540 | 6.932 |

表4：TIMIT数据集上的说话人解纠缠指标
| 方法 | Static EER↓ | Dynamic EER↑ | Dis. Gap↑ |
| :--- | :--- | :--- | :--- |
| SPYL | 3.41% | 33.22% | 29.81% |
| DBSE | 3.50% | 34.62% | 31.11% |
| Ours | 4.43% | 46.72% | 42.29% |

表5：时间序列预测与分类基准
| 任务 | 数据集 | DBSE | Ours |
| :--- | :--- | :--- | :--- |
| 预测 | PhysioNet (AUPRC↑) | 0.47 ± 0.02 | 0.50 ± 0.006 |
| | ETTh1 (MAE↓) | 11.2 ± 0.01 | 9.89 ± 0.280 |
| 分类 | PhysioNet↑ | 56.9 ± 0.34 | 64.6 ± 0.35 |

论文中的实验结果图，如条件交换的视觉对比：
![论文中的实验结果图](icassp-img://tooDJHBSvO/2.png)
图3展示了在CelebV-HQ、VoxCeleb和TaiChi-HD数据集上的动态交换结果对比。DiffSDA（第三行）生成的视频在保留人物身份的同时，成功转移了第二行的动态（如头部姿态、表情），而SPYL（第四行）在重建和交换质量上均表现不佳。

---

