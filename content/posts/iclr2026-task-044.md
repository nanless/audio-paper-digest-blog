---
title: "ICLR 2026 - 音频检索 论文列表"
date: 2026-05-04
draft: false
tags: ["音频检索"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 音频检索 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频检索

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [SupCLAP: Controlling Optimization Trajectory Drift in Audio-](/audio-paper-digest-blog/posts/2026-05-04-supclap-controlling-optimization-trajectory-drift) | 7.5分 | 前25% |
| 🥈 | [Beyond Instance-Level Alignment: Dual-Level Optimal Transpor](/audio-paper-digest-blog/posts/2026-05-04-beyond-instance-level-alignment-dual-level) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [SupCLAP: Controlling Optimization Trajectory Drift in Audio-Text Contrastive Learning with Support Vector Regularization](/audio-paper-digest-blog/posts/2026-05-04-supclap-controlling-optimization-trajectory-drift)

✅ **7.5/10** | 前25% | #音频检索 | #对比学习 | #多语言 #零样本

👥 **作者与机构**

- 第一作者：Jiehui Luo（中央音乐学院）与 Yuguo Yin（北京大学）共同第一作者
- 通讯作者：Yuguo Yin（北京大学）
- 作者列表：Jiehui Luo（中央音乐学院）， Yuguo Yin（北京大学）， Yuxin Xie（北京大学）， Jinghan Ru（北京大学）， Xianwei Zhuang（北京大学）， Minghua He（北京大学）， Aofan Liu（北京大学）， Zihan Xiong（电子科技大学）， Dongchao Yang（香港中文大学）

#

💡 **毒舌点评**

本文的亮点在于对对比学习优化动力学进行了细致入微的剖析，将“优化轨迹漂移”这一抽象现象与力分解的几何直观巧妙联系，并提出了一个物理意义清晰、实现简单的正则化方法（SVR）来缓解该问题。然而，其核心创新——引入一个沿“拉力”方向的支撑向量作为正则项——在思想上与视觉领域的一些“锚点”或“margin”相关工作有相通之处，且论文未能深入讨论与这些工作的本质区别，使得其原创性的深度感知稍显不足。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用了公开的AudioCaps和Clotho数据集，并自行构建了多语言版本，但未提及是否会公开翻译后的多语言数据集。
- Demo：未提及。
- 复现材料：论文详细说明了模型架构（CED-Base， SONAR-TE）、优化器、学习率、批次大小、温度参数等训练细节，并提供了关键超参数（α， β）的默认值和消融范围，为复现提供了充分的文字指导。
- 论文中引用的开源项目：引用了CED-Base和SONAR-TE预训练模型作为编码器。

📌 **核心摘要**

1.  要解决什么问题：本文研究音频-文本对比学习（如CLAP）中一个被忽视的优化动态问题——优化轨迹漂移。该现象源于负样本推力中的垂直分量，该分量虽包含补充信息，但其不受控的波动会导致优化路径偏离理想方向，降低训练稳定性和最终对齐质量。
2.  方法核心是什么：提出支持向量正则化（SVR）方法。核心思想是构造一个沿“正样本拉力”方向移动的“文本支撑向量”，并增加一个基于该支撑向量与音频嵌入的对比损失作为正则项（L_svr）。通过理论推导证明，该正则项能选择性地抑制推力中导致漂移的垂直分量，而保留平行分量。
3.  与已有方法相比新在哪里：
    *   视角新：首次从力分解（拉力 vs. 推力）的视角分析对比学习的优化轨迹漂移问题。
    *   方法新：SVR不是简单地重新加权正/负样本，而是通过引入具有几何解释的支撑向量来重塑梯度空间，实现对梯度方向的精细控制。
    *   建模新：探索了无监督下关键参数“语义半径”（R）的两种建模策略：静态可学习参数（StaticSVR）和自适应预测模块（DynamicSVR），并为后者设计了约束项以提升稳定性。
4.  主要实验结果如何：
    *   在AudioCaps和Clotho数据集上的单语言和多语言音频-文本检索任务中，SVR变体（尤其是双向动态SVR）显著优于InfoNCE和SigLIP等强基线。例如，在单语言AudioCaps数据集上，InfoNCE的T2A R@1为41.87%，而InfoNCE-bi-DynamicSVR提升至44.16%。
    *   在ESC-50等数据集的零样本音频分类任务上也取得最优性能（92.1% vs. InfoNCE的89.6%）。
    *   消融实验验证了双向SVR优于单向，DynamicSVR优于StaticSVR，约束项能提升DynamicSVR性能。
    *   分析显示SVR能加速收敛（见图5），并能缓解分布偏移（在跨数据集评估中表现更好）。
    *   额外开销可忽略不计（见表14）。
5.  实际意义是什么：为对比学习提供了一个简单、高效且理论可解释的正则化工具，无需额外数据或推理开销，即可提升音频-文本跨模态对齐模型的性能和训练稳定性，可直接应用于构建更强大的CLAP模型。
6.  主要局限性是什么：论文中提到的“语义半径”（R）是一个新引入的超参数/隐变量，其物理意义虽有解释，但其具体数值范围和对最终性能的敏感性分析仍可更深入。DynamicSVR的预测模块引入了额外的训练参数，其泛化性有待在更大规模数据上验证。

---

### 🥈 [Beyond Instance-Level Alignment: Dual-Level Optimal Transport for Audio-Text Retrieval](/audio-paper-digest-blog/posts/2026-05-04-beyond-instance-level-alignment-dual-level)

✅ **7.5/10** | 前25% | #音频检索 | #最优传输 | #跨模态 #鲁棒学习

👥 **作者与机构**

- 第一作者：Wenqi Guo (Shanghai Jiao Tong University, Shanghai, China)
- 通讯作者：Shikui Tu (Shanghai Jiao Tong University, Shanghai, China)，Lei Xu (Shanghai Jiao Tong University, Shanghai, China; Guangdong Laboratory of Artificial Intelligence and Digital Economy (SZ), Shenzhen, China)
- 作者列表：Wenqi Guo (Shanghai Jiao Tong University)，Shikui Tu (Shanghai Jiao Tong University)，Lei Xu (Shanghai Jiao Tong University; Guangdong Laboratory of Artificial Intelligence and Digital Economy (SZ))

💡 **毒舌点评**

亮点在于将特征维度视为独立的“匹配单元”，通过最优传输进行对齐，这个视角很新颖，为解决跨模态表示中“通道异质性”问题提供了优雅的理论框架。短板在于，虽然消融实验表明RAM有效，但可靠性分数的计算依赖于当前批次的统计量，其长期稳定性和对极端噪声的鲁棒性分析略显不足，且理论边界在小批量下的实际紧致程度缺乏更直接的实证。

🔗 **开源详情**

- 代码：论文附录中提供了算法伪代码（Algorithm 1），并提到“The detailed implementation code is provided in the supplementary materials”，但未在提供的文本中给出具体的代码仓库链接。
- 模型权重：未提及是否公开预训练模型权重。
- 数据集：使用的AudioCaps、Clotho、ESC-50均为公开数据集。
- Demo：未提及。
- 复现材料：提供了非常详细的附录，包括：完整训练伪代码(A)、可靠性分数计算细节(B)、理论分析(C)、所有实验的详细超参数配置(G, H, I, J)、不同设置下的消融实验(K, L, M)，以及结果可视化(N)。
- 论文中引用的开源项目：���到了使用Sinkhorn算法进行OT求解，但未指定具体开源实现。编码器如BERT, ResNet38, Beats等是标准模型。

📌 **核心摘要**

本文针对音频文本检索中实例级对齐方法在小批量训练和噪声标签下鲁棒性不足的问题，提出了DART（Dual-level Alignment via Robust Transport）框架。DART在传统的实例级逆最优传输（IOT）目标之上，增加了特征级分布对齐的正则化项，该正则化项基于非平衡Wasserstein距离（UWD），并将每个特征维度视为跨模态的匹配单元。与已有方法假设所有特征维度等重要不同，DART通过设计可靠性感知边际（RAM），利用方差、峰度、跨模态相关性等统计量，自适应地重新加权特征通道，强调稳定语义维度，抑制噪声或模态特异性维度。理论分析表明，实例级损失的浓度边界受最坏样本对距离（Dmax）控制，而特征级损失的边界受最优传输计划的Frobenius范数控制，后者在小批量下更稳定。实验表明，在AudioCaps、Clotho等基准上，DART达到了当时最优的检索性能，尤其在数据稀缺、小批量和带噪标签的挑战性条件下优势明显。主要局限性在于未讨论该框架在更复杂（如多对多）检索场景下的适用性，且RAM中的经验统计量可能在小批量下仍有一定波动。

---

