---
title: "ICLR 2026 - 物种分布建模 论文列表"
date: 2026-05-03
draft: false
tags: ["物种分布建模"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 物种分布建模 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 物种分布建模

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [MIAM: Modality Imbalance-Aware Masking for Multimodal Ecolog](/audio-paper-digest-blog/posts/2026-05-03-miam-modality-imbalance-aware-masking-for) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [MIAM: Modality Imbalance-Aware Masking for Multimodal Ecological Applications](/audio-paper-digest-blog/posts/2026-05-03-miam-modality-imbalance-aware-masking-for)

🔥 **8.5/10** | 前25% | #物种分布建模 | #多模态掩码学习 | #多模态模型 #生态信息学

👥 **作者与机构**

- 第一作者：Robin Zbinden, Wesley Monteith-Finas (论文中明确标注“Equal contribution”，即共同第一作者)
- 通讯作者：Robin Zbinden (robin.zbinde@epfl.ch)
- 作者列表：Robin Zbinden（瑞士洛桑联邦理工学院，EPFL）， Wesley Monteith-Finas（瑞士洛桑联邦理工学院，EPFL）， Gencer Sumbul（瑞士洛桑联邦理工学院，EPFL）， Nina van Tiel（瑞士洛桑联邦理工学院，EPFL）， Chiara Vanalli（瑞士洛桑联邦理工学院，EPFL）， Devis Tuia（瑞士洛桑联邦理工学院，EPFL）

💡 **毒舌点评**

亮点在于它系统性地将多模态掩码策略从“工程技巧”提升到了一个可分析的概率分布框架，并针对生态学数据不完整和模态竞争的核心痛点提出了自适应的动态调整机制，实验部分扎实且开源彻底。短板是其核心思想（通过掩码概率调节训练焦点）并非颠覆性创新，且解决的问题虽然实际但相对垂直，方法的通用影响力需在更广泛的多模态任务中进一步验证。

🔗 **开源详情**

- 代码：论文提供了GitHub代码仓库链接：`https://github.com/zbirobin/MIAM`。
- 模型权重：论文提供了预训练模型权重的HuggingFace链接：`https://huggingface.co/zbirobin/MIAM`。
- 数据集：使用了公开的GeoPlant和TaxaBench数据集，并在附录中提供了数据分割的Python代码。另一个使用的SatBird数据集也是公开的。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了非常充分的复现材料，包括：所有实验的超参数设置、模型架构细节、数据预处理和分割的具体代码（图7， 图8）、完整的基线实现细节、消融研究设置，以及LLM使用声明。
- 引用的开源项目：论文依赖或提及了多个开源项目，包括：`verde`库（用于空间块交叉验证）、`transformers`架构、`AdamW`优化器、`4M`和`MultiMAE`框架、`MaskSDM`方法，以及用于表格数据编码的`Gorishniy et al. (2022)`方法。

📌 **核心摘要**

1.  解决的问题：生态学应用依赖多模态异构数据（如卫星图像、时间序列、表格数据），但常面临数据在模态内和模态间的不完整性问题。更重要的是，多模态联合学习存在“模态失衡”挑战，即主导模态（如表格数据）会阻碍其他潜在互补模态（如卫星图像）的有效优化。
2.  方法核心：提出MIAM（Modality Imbalance-Aware Masking），一种动态掩码策略。其核心是将掩码策略建模为单位超立方体上的概率分布。它首先使用“混合乘积贝塔分布”来探索所有可能的输入组合空间，并优先考虑全存在或全缺失的“角落”情况。其次，它根据每个模态的独立性能得分(`sm`)和性能变化率(`dm`)计算失衡系数，动态调整掩码分布，使性能高且稳定的模态被更频繁地掩码，从而让模型聚焦于学习欠优化的模态。
3.  与已有方法相比的新意：与均匀掩码、Dirichlet掩码等静态策略不同，MIAM是动态且自适应的。与仅在模态级别进行丢弃的“Modality Dropout”或OPM相比，MIAM支持更细粒度（如单个Token）的掩码。其关键创新在于引入了动态失衡感知调整机制，并系统性地满足了全支持、角落优先和失衡感知三个设计原则。
4.  主要实验结果：在GeoPlant（物种分布建模）和TaxaBench（多模态物种分类）数据集上进行了评估。在GeoPlant上，MIAM的平均AUC（86.1%）比第二好的基线OPM（83.8%）高出2.3%，尤其是在处理卫星图像等受失衡影响的模态时提升显著。在TaxaBench上，MIAM的平均Top-1准确率（38.7%）同样优于其他基线。消融实验表明，失衡系数(`ρsm`, `ρdm`)和非均匀角落权重(`wc`)对性能有积极贡献。MIAM还能提供生态洞见，如识别出卫星图像中的红光与近红外波段（用于计算NDVI）以及包含2003年欧洲热浪的时间序列对预测至关重要。
5.  实际意义：MIAM提升了多模态生态模型在数据不完整条件下的鲁棒性和预测性能，使其能更可靠地用于保护生物学和气候变化适应研究。同时，其支持的细粒度贡献分析有助于生态学家理解哪些环境变量、时间片段或图像区域是驱动模型的关键生态信号。
6.  主要局限性：MIAM需要在训练过程中评估每个模态的独立性能，这在无标签的自监督学习（SSL）设置中不易获取。论文中的SSL实验证明了其潜力，但指出需要寻找合适的模态性能代理指标。此外，方法的复杂度和超参数（如λ, κ）需要根据具体数据集进行调整。

---

