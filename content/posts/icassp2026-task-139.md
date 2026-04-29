---
title: "ICASSP 2026 - 领域适应 论文列表"
date: 2026-04-29
draft: false
tags: ["领域适应"]
categories: [icassp-2026]
description: "共 2 篇 ICASSP 2026 领域适应 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 领域适应

共 **2** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Beyond Mapping: Domain-Invariant Representations via Spectra](/audio-paper-digest-blog/posts/2026-04-29-beyond-mapping-domain-invariant-representations) | 7.5分 | 前25% |
| 🥈 | [The Synergistic Role of Audio and Large Video-Language Model](/audio-paper-digest-blog/posts/2026-04-29-the-synergistic-role-of-audio-and-large-video) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Beyond Mapping: Domain-Invariant Representations via Spectral Embedding of Optimal Transport Plans](/audio-paper-digest-blog/posts/2026-04-29-beyond-mapping-domain-invariant-representations)

✅ **7.5/10** | 前25% | #领域适应 | #最优传输 #谱图嵌入 | #最优传输 #谱图嵌入

👥 **作者与机构**

- 第一作者：未说明
- 通讯作者：未说明
- 作者列表：Abdel Djalil Sad Saoud (Universite Paris-Saclay, CEA, List), Fred Maurice Ngol`e Mboula (Universite Paris-Saclay, CEA, List), Hanane Slimani (Universite Paris-Saclay, CEA, List)

#

💡 **毒舌点评**

本文巧妙地将最优传输计划从一种“点对点的映射工具”重新解释为“跨域连接图的邻接矩阵”，并通过谱嵌入获取表示，这一视角转换避免了直接映射带来的偏差，思路新颖且自洽。然而，其优势似乎更体现在精心设计的小规模跨噪声/跨物理条件基准上，在更广泛、更具挑战性的大规模领域适应场景（如视觉领域）中的有效性和可扩展性有待进一步验证。

#

📌 **核心摘要**

1. 要解决什么问题：解决机器学习中训练数据（源域）与推理数据（目标域）存在分布偏移导致模型性能下降的问题。
2. 方法核心是什么：提出SeOT方法。它不使用最优传输计划来估计从源域到目标域的映射，而是将（平滑后的）传输计划解释为连接两个域样本的二分图的邻接矩阵。通过计算该图的拉普拉斯矩阵并进行谱嵌入（取前k个最小特征值对应的特征向量），获得跨域的、具有领域不变性的样本表示。对于多源域情况，先计算源域的Wasserstein重心作为中间域，再构建包含重心、所有源域和目标域的统一图。
3. 与已有方法相比新在哪里：不同于大多数基于OT的领域适应方法（如直接进行重心映射或标签传播），SeOT的核心创新在于利用OT计划的谱图结构来提取表示。这种方法不直接依赖于映射本身，而是利用OT计划所蕴含的跨域几何连通性信息。此外，论文提出通过最大化“谱间隙”来选择嵌入维度k和正则化参数ε，提供了一种启发式的参数选择方法。
4. 主要实验结果如何：在三个数据集上进行了评估。在音乐-语音识别数据集（MSD）上，SeOT平均准确率达到97.45%，显著优于源域训练基线（68.18%）和其他多种方法。在音乐流派识别（MGR）上，平均准确率为59.03%，虽低于WBTreg，但比源域训练提升超过18%。在电缆故障诊断数据集（CS-RT）上，SeOT平均准确率为62.07%，大幅超越所有对比方法（次优者平均37.25%），显示了其在工业应用中的优势。
5. 实际意义是什么：为领域自适应提供了一种新的、基于图谱理论的视角和实用算法，尤其在需要对齐不同物理条件或噪声环境下采集的信号（如音频、工业传感器信号）时表现出色，验证了其在实际工业检测场景的应用潜力。
6. 主要局限性是什么：论文未提及该方法在大规模数据集或复杂视觉任务上的验证，其通用性有待考察。计算上，虽然利用了图的稀疏性，但拉普拉斯矩阵特征分解仍具有O(n^3)的复杂度潜力，对超大规模样本可能构成挑战。此外，对Wasserstein重心的依赖也引入了额外的计算和参数设置环节。

---

### 🥈 [The Synergistic Role of Audio and Large Video-Language Model in Source-Free Video Domain Adaptation](/audio-paper-digest-blog/posts/2026-04-29-the-synergistic-role-of-audio-and-large-video)

✅ **7.0/10** | 前25% | #领域适应 | #多模态模型 | #预训练 #知识蒸馏

👥 **作者与机构**

- 第一作者：Tzu Ling Liu（University of Saskatchewan, Department of Computer Science）
- 通讯作者：未说明
- 作者列表：Tzu Ling Liu（University of Saskatchewan, Department of Computer Science）、Ian Stavness（University of Saskatchewan, Department of Computer Science）、Mrigank Rochan（University of Saskatchewan, Department of Computer Science）

#

💡 **毒舌点评**

这篇论文巧妙地将“大”（LVLM）和“稳”（音频）两种特性融合，在SOTA已经很高的任务上又挤出了几个百分点的性能提升，工程整合能力值得肯定。然而，其“多模态”的核心贡献中，音频模态的“协同作用”在消融实验中只带来了约1.7%的平均增益（从54.2%到55.9%），显得有些雷声大雨点小，更像是为用音频而用音频，缺乏对音频为何有效以及在何种情况下可能失效的深入机制分析。

#

📌 **核心摘要**

1.  问题：论文旨在解决无源视频无监督域自适应问题，即在无法访问源域（有标签）数据的情况下，将模型从一个视频域（如特定场景）适应到另一个完全不同的目标域（如不同拍摄风格、环境），用于动作识别任务。
2.  方法核心：提出SAViTDA框架，采用学生-教师范式。教师模型整合了预训练的大型视频语言模型（VideoCLIP-XL，提供强语义和时序先验）和预训练的音频编码器（Pengi，提供跨域稳定的上下文信号），通过一个可学习的双模态融合适配器融合视听特征。该教师模型在源域数据上监督对齐后，利用伪标签在目标域数据上微调，最终将整合的多模态知识蒸馏到一个更紧凑的学生模型（基于CLIP-ResNet50，引入时序注意力TA-CLIP）中，以实现高效的域适应。
3.  创新点：1) 首次在SFVUDA中协同利用LVLM的世界知识和音频的域不变线索；2) 设计了Bi-modal Fusion Adapter动态融合视听特征；3) 提出Unified Knowledge Distillation策略，结合多种损失进行多模态知识迁移。
4.  实验结果：在Daily-DA和Sports-DA两个基准的18个域适应设置上，SAViTDA达到了SOTA性能，相比此前最佳方法（DALL-V和EXTERN）分别提升了4.5%和6.4%。具体数值见下表。

表1：Daily-DA基准测试结果（Top-1准确率 %）
| 方法 | K→A | K→H | K→M | M→A | M→H | M→K | H→A | H→M | H→K | A→H | A→M | A→K | 平均 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| DALL-V (前SOTA) | 24.0 | 52.5 | 47.0 | 24.0 | 65.4 | 78.1 | 24.0 | 47.0 | 76.7 | 57.9 | 45.7 | 75.0 | 51.4 |
| SAViTDA w/o audio | 25.6 | 60.0 | 50.2 | 27.5 | 64.6 | 92.0 | 29.4 | 51.8 | 63.9 | 61.3 | 47.8 | 76.8 | 54.2 |
| SAViTDA (Ours) | 26.0 | 62.9 | 51.0 | 29.1 | 68.3 | 92.4 | 31.4 | 53.3 | 64.7 | 62.5 | 52.8 | 76.7 | 55.9 |

表2：Sports-DA基准测试结果（Top-1准确率 %）
| 方法 | K→U | K→S | S→U | S→K | U→K | U→S | 平均 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| EXTERN (前SOTA) | 93.7 | 73.8 | 95.4 | 82.2 | 81.2 | 72.7 | 83.2 |
| SAViTDA w/o audio | 89.9 | 86.4 | 89.2 | 85.0 | 87.0 | 82.6 | 86.7 |
| SAViTDA (Ours) | 91.0 | 88.6 | 91.8 | 89.6 | 90.5 | 86.4 | 89.6 |

![图1](pdf-image-page3-idx0) 图1显示了SAViTDA及其变体在Daily-DA和Sports-DA上与已有方法的性能对比，直观展示了其优势。

5.  实际意义：为视频动作识别模型在无源数据场景下的跨域部署提供了新的有效思路，强调了多模态信息融合（尤其是利用大型基础模型和稳定音频线索）在解决领域偏移问题上的潜力。
6.  主要局限性：论文验证了有效性，但未深入分析音频模态具体贡献了哪些信息（如是环境声、语音还是其他）、在哪些类别的动作识别中帮助最大，以及框架对音频缺失或质量较差的视频的鲁棒性。此外，完全缺乏开源代码和模型，限制了方法的可验证性和快速复现。

#

---

