---
title: "ICLR 2026 - 语音编码 论文列表"
date: 2026-05-02
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
| 🥇 | [DiVeQ: Differentiable Vector Quantization Using the Reparame](/audio-paper-digest-blog/posts/2026-05-02-diveq-differentiable-vector-quantization-using) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [DiVeQ: Differentiable Vector Quantization Using the Reparameterization Trick](/audio-paper-digest-blog/posts/2026-05-02-diveq-differentiable-vector-quantization-using)

🔥 **8.5/10** | 前25% | #语音编码 | #向量量化 | #模型评估 #开源工具

👥 **作者与机构**

- 第一作者：Mohammad Hassan Vali（ELLIS Institute Finland & Department of Computer Science, Aalto University, Finland）
- 通讯作者：未明确指定（论文提供了共同的学术邮箱 `{mohammad.vali, tom.backstrom, arno.solin}@aalto.fi`，未说明谁是通讯作者）
- 作者列表：Mohammad Hassan Vali¹，Tom Bäckström²，Arno Solin¹
  - ¹ ELLIS Institute Finland & Department of Computer Science, Aalto University, Finland
  - ² Department of Information and Communications Engineering, Aalto University, Finland

💡 **毒舌点评**

本文的亮点在于巧妙地将重参数化技巧应用于VQ，使DiVeQ在保留“硬分配”前向传播的同时实现了可微分，并通过SF-DiVeQ解决了码本坍缩和未充分利用的痛点，设计思路优雅且实验验证扎实。短板在于其“通用性改进”的定位虽强，但计算复杂度（如SF-DiVeQ需要对每条线段计算误差）相比原始VQ有所增加，且论文未深入分析在超大规模模型或极端离线场景下的效率影响。

🔗 **开源详情**

- 代码：论文中提供了公开的代码仓库链接：`https://github.com/AaltoML/DiVeQ`。
- 模型权重：未提及是否公开预训练模型权重。
- 数据集：图像数据集为公开基准（AFHQ, CELEBA-HQ等），语音数据集VCTK可公开获取。论文未提及发布新数据集。
- Demo：未提及在线演示。
- 复现材料：论文附录（A-C节）提供了非常全面的复现材料，包括：
  - 所有任务（VQ-VAE, VQGAN, DAC）的详细实现细节、模型架构（表4, 5）、超参数配置。
  - 每种VQ优化方法（包括基线）的实现说明和代码来源（如RT、ST-GS的GitHub仓库）。
  - 关键的训练日志（附录C.10）。
  - SF-DiVeQ的初始化和训练建议（附录A.6）。
- 论文中引用的开源项目：引用了多个开源实现，包括：
  - `zalandoresearch/pytorch-vq-vae`（VQ-VAE PyTorch实现）
  - `dome272/VQGAN-pytorch`（VQGAN实现）
  - `karpathy/deep-vector-quantization`（ST-GS实现）
  - `lucidrains/vector-quantize-pytorch`（RT实现）
  - `GaParmar/clean-fid`（FID计算）
  - `eagomez2/pikku-nac`（DAC变体，用于语音实验）

📌 **核心摘要**

1.  问题：向量量化（VQ）在深度模型中因其最近邻分配的非可微性而阻断梯度流动（梯度坍缩），阻碍了端到端训练。现有解决方案（如STE、EMA、NSVQ）各自存在需要辅助损失、超参数敏感、训练-测试不匹配、码本坍缩或潜在表示错位等问题。
2.  方法核心：提出DiVeQ，将量化建模为添加一个模拟量化误差向量，其方向与最近码本对齐，大小等于输入-码本距离，从而在保持前向硬分配的同时允许梯度通过重参数化技巧流动。进一步提出SF-DiVeQ，将量化点扩展到码本连线构成的连续曲线上，进一步降低量化误差并实现码本的充分利用。
3.  新意：DiVeQ是首个能同时保证无辅助损失、无复杂调参、无偏梯度、无训练-测试不匹配且保持精确最近邻分配的可微VQ方法。SF-DiVeQ则通过空间填充曲线结构，独特地解决了码本未充分利用和潜在表示错位问题，无需任何码本重初始化策略。
4.  主要实验结果：在VQ-VAE图像压缩、VQGAN图像生成和DAC语音编码三大任务上，DiVeQ和SF-DiVeQ在多个数据集和指标上持续优于或匹配现有VQ优化方法。例如，在AFHQ图像压缩（11-bit码本）中，SF-DiVeQ的LPIPS达到0.216，优于所有基线。在CELEBA-HQ VQGAN生成（9-bit码本，标准设置）中，SF-DiVeQ的FID达到5.21，优于NSVQ（70.4）和STE（5.57）等。消融实验证明其对超参数（如噪声方差σ²）不敏感，且在批大小和学习率变化时更鲁棒。
5.  实际意义：DiVeQ和SF-DiVeQ可作为标准VQ层的“即插即用”替代品，无需修改模型损失函数或添加复杂调度器，显著简化了含离散瓶颈层的神经网络的训练流程，并提升了重建与生成质量。
6.  主要局限性：1）SF-DiVeQ的初始化需要定制策略（跳过量化训练几轮），略增使用门槛。2）虽然实验全面，但主要基于中等规模模型（如256x256图像）和特定VQ架构（VQ-VAE, VQGAN, DAC），在更大规模或更复杂模型架构上的泛化性有待进一步验证。3）计算开销相比朴素VQ有所增加，但论文未详细讨论。

---

