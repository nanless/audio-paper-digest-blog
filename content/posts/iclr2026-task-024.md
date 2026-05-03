---
title: "ICLR 2026 - 语音编码 论文列表"
date: 2026-05-03
draft: false
tags: ["语音编码"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音编码 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音编码

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [DiVeQ: Differentiable Vector Quantization Using the Reparame](/audio-paper-digest-blog/posts/2026-05-03-diveq-differentiable-vector-quantization-using) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [DiVeQ: Differentiable Vector Quantization Using the Reparameterization Trick](/audio-paper-digest-blog/posts/2026-05-03-diveq-differentiable-vector-quantization-using)

🔥 **8.0/10** | 前25% | #语音编码 | #向量量化 | #音频生成 #方法优化

👥 **作者与机构**

- 第一作者：Mohammad Hassan Vali（ELLIS Institute Finland & Department of Computer Science, Aalto University, Finland）
- 通讯作者：未明确说明（邮件列表显示为三位作者共同联系）
- 作者列表：Mohammad Hassan Vali（ELLIS Institute Finland & Department of Computer Science, Aalto University, Finland），Tom Bäckström（Department of Information and Communications Engineering, Aalto University, Finland），Arno Solin（ELLIS Institute Finland & Department of Computer Science, Aalto University, Finland）

💡 **毒舌点评**

这篇论文的亮点在于，它用一个相当简洁优雅的“误差注入”思想，巧妙绕过了向量量化梯度传播的硬骨头，并且通过空间填充曲线变体（SF-DiVeQ）从根源上缓解了码本坍塌这一老大难问题，最终实现了“即插即用”的效果。但短板也很明显：其核心创新更偏重于工程技巧和优化方法的精巧组合，而非全新的理论洞见，对于“为什么这样有效的”深度分析和理论保障稍显薄弱。

🔗 **开源详情**

- 代码：提供了公开的代码仓库链接：https://github.com/AaltoML/DiVeQ。
- 模型权重：论文中未提及公开模型权重。
- 数据集：实验使用了公开数据集（AFHQ, CELEBA-HQ, FFHQ, LSUN, VCTK），论文中说明了数据集来源和划分方式。
- Demo：未提及在线演示。
- 复现材料：提供了极其详细的附录（App. A-D），包括所有任务（VQ-VAE压缩、VQGAN生成、DAC语音编码）的完整模型架构、超参数、训练配置、以及如何实现其他VQ基线方法（STE, EMA, RT, ST-GS, NSVQ）的说明，复现基础非常扎实。
- 论文中引用的开源项目：引用了NSVQ、Rotation Trick、Gumbel-Softmax等方法的实现，以及VQGAN的官方代码（dome272 GitHub repository）、clean-fid库等。

📌 **核心摘要**

1. 要解决的问题：向量量化（VQ）操作因其最近邻分配（arg min）的不可微性，导致梯度无法从解码器反向传播到编码器，阻碍了包含VQ层的神经网络（如VQ-VAE、VQGAN）的端到端训练。现有解决方案（如STE、EMA）存在需要辅助损失、调参复杂、梯度偏差、训练/测试不匹配或码本坍塌等问题。
2. 方法核心：提出DiVeQ，将量化过程建模为在输入向量上添加一个模拟量化误差的噪声向量。该噪声的方向通过重参数化技巧对齐到最近码字，其幅度等于输入与码字的距离，从而在前向传播中保持硬分配，同时允许梯度流。进一步提出空间填充变体SF-DiVeQ，将量化从离散码字扩展到连接相邻码字的线段上，从而减少量化误差并确保码本完全利用。
3. 与已有方法相比新在哪里：DiVeQ通过可控的方向性噪声（方差σ²→0时退化为硬VQ）实现了无偏、几何一致的梯度估计，且无需辅助损失项。SF-DiVeQ则通过沿码字间曲线量化，从根本上避免了码本与潜在表示的错位和码本坍塌问题，也无需代码本替换启发式。
4. 主要实验结果：在VQ-VAE图像压缩（AFHQ, CELEBA-HQ等）、VQGAN图像生成和DAC语音编码（VCTK数据集）三个任务上，DiVeQ和SF-DiVeQ在重建质量（SSIM, PSNR, LPIPS）、生成质量（FID）和语音质量（LSD, PESQ, STOI等）指标上，持续优于 STE、EMA、RT、ST-GS和NSVQ等基线方法。关键对比数据如下表所示：

   表1：VQ-VAE图像压缩任务（AFHQ数据集，码本比特=11）性能对比
   | 方法 | SSIM ↑ | PSNR ↑ | LPIPS ↓ |
   | :--- | :--- | :--- | :--- |
   | STE | 0.373 | 22.1 | 0.382 |
   | EMA | 0.362 | 21.8 | 0.382 |
   | RT | 0.388 | 23.8 | 0.429 |
   | ST-GS | 0.390 | 23.2 | 0.391 |
   | NSVQ | 0.473 | 24.5 | 0.493 |
   | DiVeQ (ours) | 0.355 | 20.6 | 0.369 |
   | SF-DiVeQ (ours) | 0.349 | 20.3 | 0.371 |

   表2：VQGAN生成任务（CELEBA-HQ数据集，9比特码本）FID↓对比
   | 方法 | lr=2.5e-5, batch=8 | lr=2.5e-4, batch=32 |
   | :--- | :--- | :--- |
   | STE | 5.57 | 7.54 |
   | EMA | 6.30 | 7.42 |
   | RT | 7.55 | 9.33 |
   | ST-GS | 6.81 | 41.1 |
   | NSVQ | 70.4 | 70.1 |
   | DiVeQ (ours) | 6.69 | 8.01 |
   | SF-DiVeQ (ours) | 5.21 | 6.66 |

5. 实际意义：为深度学习中广泛使用的向量量化模块提供了一个更稳定、更易用、性能更优的可微替代方案，可作为现有VQ层的直接替换，降低相关模型（图像生成、压缩、语音合成/编码）的训练难度并提升性能。
6. 主要局限性：方法的理论分析（如梯度方差、收敛保证）不够深入；SF-DiVeQ的初始化需要特定策略（跳过初始训练阶段），增加了一定复杂性；论文未探讨其在更大规模模型或更复杂任务（如视频、3D）上的表现。

---

