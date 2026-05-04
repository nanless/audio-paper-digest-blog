---
title: "ICLR 2026 - 生态计算 论文列表"
date: 2026-05-04
draft: false
tags: ["生态计算"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 生态计算 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 生态计算

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [MIAM: Modality Imbalance-Aware Masking for Multimodal Ecolog](/audio-paper-digest-blog/posts/2026-05-04-miam-modality-imbalance-aware-masking-for) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [MIAM: Modality Imbalance-Aware Masking for Multimodal Ecological Applications](/audio-paper-digest-blog/posts/2026-05-04-miam-modality-imbalance-aware-masking-for)

🔥 **8.5/10** | 前25% | #生态计算 | #数据增强 | #多模态模型 #鲁棒性

👥 **作者与机构**

- 第一作者：Robin Zbinden（洛桑联邦理工学院，EPFL）
- 通讯作者：Robin Zbinden（robin.zbinden@epfl.ch，洛桑联邦理工学院，EPFL）
- 作者列表：
  - Robin Zbinden（洛桑联邦理工学院，EPFL，*共同第一作者）
  - Wesley Monteith-Finas（洛桑联邦理工学院，EPFL，*共同第一作者）
  - Gencer Sumbul（洛桑联邦理工学院，EPFL）
  - Nina van Tiel（洛桑联邦理工学院，EPFL）
  - Chiara Vanalli（洛桑联邦理工学院，EPFL）
  - Devis Tuia（洛桑联邦理工学院，EPFL）

#

💡 **毒舌点评**

这篇论文的亮点在于它将一个看似简单的技术问题（掩码策略）进行了深入的理论形式化，并以此为基础设计出针对性的解决方案，实验部分尤其扎实，在生态数据集上挖掘出的可解释性发现（如NDVI和热浪的影响）也颇具价值。短板在于，其方法核心（动态调整Beta分布参数）依赖于无标签数据下对“模态性能”的估计（如重构损失），这在更通用的无监督场景下可能不稳定，且其有效性在模态数量较少（如仅有2种模态）的场景下可能被削弱。

#

🔗 **开源详情**

- 代码：是。提供了完整的开源代码仓库链接：`https://github.com/zbirobin/MIAM`。
- 模型权重：是。提供了在HuggingFace上发布的预训练模型权重链接：`https://huggingface.co/zbirobin/MIAM`。
- 数据集：GeoPlant和TaxaBench均为公开生态数据集，论文中提供了获取方式（引用原数据集论文）。SatBird也是公开数据集。未提供论文自行创建的新数据集。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极为充分的复现材料，包括：详细的模型架构和超参数设置、训练脚本、数据划分的具体代码（附录A.1）、所有消融实验和基线方法的配置、对关键超参数λ和κ的敏感性分析结果。论文中明确声明致力于可复现性。
- 论文中引用的开源项目：
    - AdamW优化器 (Loshchilov & Hutter, 2017)
    - Verde库，用于空间分块交叉验证 (Roberts et al., 2017)
    - 多模态Transformer架构 (Vaswani et al., 2017; Gorishniy et al., 2021)
    - 训练调度方法 (Defazio et al., 2024)
    - Token化方法 (Dosovitskiy et al., 2020; Gorishniy et al., 2022)

📌 **核心摘要**

1.  解决的问题：生态应用中的多模态学习面临数据在模态间和模态内缺失的普遍问题，且现有掩码训练策略无法有效应对“模态不平衡”（主导模态阻碍其他模态学习）这一挑战。
2.  方法核心：提出MIAM（模态不平衡感知掩码），一种动态掩码策略。其核心是：a) 将掩码策略形式化为单位超立方体上的概率分布；b) 设计一个混合乘积Beta分布，能探索完整的输入组合空间并优先采样超立方体的“角落”（即模态全存在或全缺失的极端情况）；c) 根据训练过程中各模态的相对性能（s_m）和学习速度（d_m，性能的绝对导数）动态调整分布参数，对“强势”模态（高性能、学习稳定）施加更高的掩码概率。
3.  创新之处：a) 首次系统性地将掩码策略形式化，并指出有效策略应具备全支持、角落优先、不平衡感知三大特性；b) 提出的混合Beta分布设计巧妙地兼顾了探索多样性与关键训练场景；c) 引入基于性能和学习动态的双重动态调整机制，比仅依赖静态性能的OPM方法更有效。
4.  主要实验结果：在GeoPlant（物种分布建模，3种模态，多Token）和TaxaBench（物种分类，5种模态，单Token）两个生态数据集上评估。在GeoPlant测试集上，MIAM平均AUC达到86.1%，比第二好的基线（OPM，83.8%）高出2.3个百分点，尤其在被主导的卫星影像单模态评估上提升显著（见表1）。在TaxaBench测试集上，MIAM平均Top-1准确率为38.7%，优于所有基线（见表2）。消融实验（图4）证实，从均匀分布->Beta超立方体->MIAM的每一步改进都有效，且动态不平衡系数（ρ_sm, ρ_dm）对弱势模态性能至关重要。
5.  实际意义：MIAM使多模态模型能更好地处理生态监测中常见的数据缺失，提升预测鲁棒性。更重要的是，它支持细粒度的贡献分析，能揭示哪些具体变量（如BIO1）、时间片段（如包含2003年热浪的年份）或图像区域（如计算NDVI的红光与近红外波段组合）对预测最关键（图5），为生态学研究提供了可解释的AI工具。
6.  主要局限性：a) 方法的有效性高度依赖准确的、无偏的模态性能估计，在无标签的自监督场景下，使用重构损失作为代理可能不理想；b) 论文评估主要集中在模态数量中等（3-5种）的生态场景，其在模态极多或极少的通用多模态任务中的泛化能力有待验证；c) 虽然进行了敏感性分析，但超参数λ和κ仍需根据具体任务调整。

---

