---
title: "MRUF: Multi-granularity Routing with Uncertainty-Aware Fusion for Robust Multimodal Sentiment Analysis"
date: 2026-07-14
draft: false
tags: [多模态模型, 对比学习, 鲁棒性, 音频理解, Transformer]
categories: [论文速递]
description: "多模态模型 | 5.9/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2607.10599"
---

# 📄 MRUF: Multi-granularity Routing with Uncertainty-Aware Fusion for Robust Multimodal Sentiment Analysis

标签：#多模态模型 #对比学习 #鲁棒性 #音频理解 #Transformer

**5.9/10** | 创新 1.3/2 | 严谨 1.3/1.5 | 实验 1.2/1.5 | 清晰 0.8/1 | 影响 0.5/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 0.5/1.5

📝 **5.9/10** | 前50% | 文档类型：方法研究 | 评分置信度：高 | #多模态模型 | #Transformer | #对比学习 #鲁棒性 | [arxiv](https://arxiv.org/abs/2607.10599)


### 👥 作者与机构

- 第一作者：Haoran Ma（新疆大学计算机科学与技术学院；丝绸之路多语言认知计算国际联合实验室；新疆多模态智能处理与信息安全工程技术研究中心；鹏城实验室新疆网络节点；具身智能联合实验室）
- 通讯作者：Yinfeng Yu（新疆大学计算机科学与技术学院；丝绸之路多语言认知计算国际联合实验室；新疆多模态智能处理与信息安全工程技术研究中心；鹏城实验室新疆网络节点；具身智能联合实验室）
- 作者列表：Haoran Ma（新疆大学计算机科学与技术学院；丝绸之路多语言认知计算国际联合实验室；新疆多模态智能处理与信息安全工程技术研究中心；鹏城实验室新疆网络节点；具身智能联合实验室）、Yinfeng Yu（新疆大学计算机科学与技术学院；丝绸之路多语言认知计算国际联合实验室；新疆多模态智能处理与信息安全工程技术研究中心；鹏城实验室新疆网络节点；具身智能联合实验室）、Liejun Wang（新疆大学计算机科学与技术学院；丝绸之路多语言认知计算国际联合实验室；新疆多模态智能处理与信息安全工程技术研究中心；鹏城实验室新疆网络节点；具身智能联合实验室）

### 💡 毒舌点评

一篇结构完整、实验扎实的增量式改进工作。论文敏锐地指出了现有解耦-蒸馏骨干DMD在最终融合阶段仍可能被退化模态误导的缺陷，并提出了“任务感知路由监督”与“不确定性校准”相结合的方案，思想清晰，消融实验和机制分析做得细致。然而，其核心创新是在强基线DMD之上的模块化增强，属于典型的“搭积木”式改进，缺乏范式性突破。更关键的是，论文仅在两个紧密相关的英文视频情感数据集上验证，未触及任何语音或音频领域的核心挑战（如信噪比、说话人干扰、音频主导任务），对于该领域的研究者而言，其直接实用价值和启发性大打折扣。提升幅度温和，更适合作为方法论文献在“多模态融合”这一小圈子里流传。

### 📌 核心摘要

本文针对多模态情感分析中因模态质量不稳定（如视觉遮挡、音频噪声、文本不准确）导致模型过度依赖不可靠模态的问题，提出了MRUF方法。其核心是在已有的解耦-蒸馏骨干DMD之上，构建可靠性感知的融合机制。主要创新包括：1）设计了任务感知的多粒度路由（子空间级和模态级），并通过在训练阶段计算屏蔽单个模态所导致的预测误差增加量（留一误差）来显式监督模态重要性估计；2）引入不确定性感知融合，为每种模态预测一个不确定性（对数方差）并基于逆方差重加权来校准融合门控，使高不确定性模态权重自动降低；3）加入模态不变对比对齐损失以稳定共享语义空间。实验在CMU-MOSI和CMU-MOSEI数据集（对齐与未对齐设置）上进行，结果表明MRUF在ACC7、ACC2、F1指标上一致优于包括DMD在内的强基线。机制分析证实预测不确定性与融合权重呈负相关，达到了预期效果。论文的局限性在于仅使用了CMU系列数据集，缺乏语音/音频领域的直接验证；留一误差监督增加了训练成本；且在严重模态扰动下回归指标（MAE）的改善并不稳定。

**主要实验结果表格（CMU-MOSI 对齐设置）**：
| Method | ACC7 ↑ | ACC2 ↑ | F1 ↑ | MAE ↓ |
| :--- | :---: | :---: | :---: | :---: |
| DMD* | 44.5 | 83.2 | 83.3 | 0.729 |
| MRUF (Ours)* | 46.7 | 84.5 | 84.4 | 0.717 |

### 🔗 开源详情

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及。
- 数据集：论文中未提及具体下载链接。实验使用了**CMU-MOSI** 和 **CMU-MOSEI** 两个公开数据集。
- Demo：论文中未提及。
- 复现材料：论文在实现细节部分（Section IV-C）提供了一些信息：所有模型使用PyTorch实现，在单个NVIDIA Tesla T4 (16 GB) GPU上训练，batch size为16，采用早停策略（patience=10），损失函数权重λr=0.3和λm=0.07。但未提供完整的复现材料或检查点。
- 论文中引用的开源项目：
    - **BERT**：https://github.com/google-research/bert
    - 论文中引用的FACET和COVAREP为特征提取工具/模型，但论文未提供其具体开源项目链接。

### 🏗️ 方法概述和架构

MRUF是一个面向鲁棒多模态情感分析的可靠性感知融合方法，它在已有的解耦-蒸馏骨干DMD之上构建。整体流程是：首先利用DMD为每种模态（语言L、视觉V、音频A）提取解耦的模态特有序列\(\mathbf{S}_m\)、模态不变序列\(\mathbf{C}_m\)以及跨模态摘要\(\mathbf{h}^{\mathrm{cm}}_m\)；然后通过MRUF新增的四个核心模块进行可靠性感知的特征融合与预测。

下图展示了MRUF的整体架构。

![Figure 1: Overview of MRUF. MRUF extends DMD representations with invariant-branch summarization, modality-invariant contrastive alignment, task-aware multi-granularity routing, and uncertainty-aware fusion. Leave-one-out supervision is use](https://arxiv.org/html/2607.10599v1/x1.png)

图中详细展示了从模态输入到最终情感预测的完整流程，包括不变性分支时间汇总、多粒度路由和不确定性感知融合等核心组件。


**主要组件详解**：
1.  **不变性分支时间汇总**：针对DMD输出的模态不变序列\(\mathbf{C}_m\)（包含共享语义信息），解决不同时间步贡献不均的问题。该模块通过一个时间门控机制（sigmoid函数加权）和自注意力聚合，为每种模态生成一个话语级的模态不变表示。具体而言，它首先为每个时间步\(t\)计算门控值\(q_{m,t} = \sigma(\mathbf{w}_m^\top \mathbf{c}_{m,t} + b_m)\)，然后通过加权平均得到\(\mathbf{c}^{\mathrm{time}}_m = \frac{\sum_t q_{m,t} \mathbf{c}_{m,t}}{\sum_t q_{m,t} + \epsilon}\)；同时，将\(\mathbf{C}_m\)输入一个自注意力编码器并对其最后一层输出取平均，得到\(\mathbf{c}^{\mathrm{att}}_m\)。最终取两者的平均作为输出：\(\mathbf{c}^{\mathrm{rep}}_m = \frac{1}{2}(\mathbf{c}^{\mathrm{time}}_m + \mathbf{c}^{\mathrm{att}}_m)\)。输入是模态不变序列，输出是融合了时间重要性的表示\(\mathbf{c}^{\mathrm{rep}}_m\)。
2.  **模态不变对比对齐（MCA）**：作为一个辅助正则化器，旨在稳定路由所使用的共享语义空间。它将每种模态的汇总后不变表示\(\mathbf{c}^{\mathrm{rep}}_m\)投影并\(\ell_2\)归一化为\(\mathbf{z}_{m}\)。对于所有六种有序跨模态对\((m,n)\)，计算InfoNCE对比损失\(\ell_{m \rightarrow n}\)，最终取平均得到\(\mathcal{L}_{\mathrm{MCA}} = \frac{1}{6}\sum_{m\neq n} \ell_{m\rightarrow n}\)。输入是三种模态的不变汇总表示，输出是损失值\(\mathcal{L}_{\mathrm{MCA}}\)，用于训练时的正则化。
3.  **多粒度路由**：这是估计模态重要性的核心。它在两个粒度上进行路由：
    *   **子空间路由**：在每种模态内部，平衡模态特有信息\(\mathbf{s}^{\mathrm{rep}}_m\)（特有序列的平均池化）与模态不变信息\(\mathbf{c}^{\mathrm{rep}}_m\)。路由器输入\(\mathbf{f}_m\)是三种模态信息（特有、不变、跨模态摘要）拼接后经一个模态特定的MLP得到：\(\mathbf{f}_m = \mathrm{MLP}_m^r([\mathbf{s}^{\mathrm{rep}}_m; \mathbf{c}^{\mathrm{rep}}_m; \mathbf{h}^{\mathrm{cm}}_m])\)。子空间路由器输出一个二维softmax权重\(\mathbf{g}^{\mathrm{sub}}_m = [g^{\mathrm{sub}}_{m,s}, g^{\mathrm{sub}}_{m,c}]\)，分别用于加权模态特有和模态不变表示，然后相加得到该模态的最终子空间特征\(\mathbf{h}^{\mathrm{sub}}_m = g^{\mathrm{sub}}_{m,s}\mathbf{s}^{\mathrm{rep}}_m + g^{\mathrm{sub}}_{m,c}\mathbf{c}^{\mathrm{rep}}_m\)。
    *   **模态路由**：在话语级别，估计每种模态的重要性。它预测一个独立的原始模态门控值\(g^{\mathrm{mod}}_m = \sigma(\mathbf{w}_m^{\mathrm{mod}\top} \mathbf{f}_m + b_m^{\mathrm{mod}})\)和一个辅助的归一化重要性分布\(\hat{\boldsymbol{\pi}} = \mathrm{softmax}(\mathrm{MLP}^{\mathrm{imp}}([\mathbf{f}_L; \mathbf{f}_V; \mathbf{f}_A]))\)。关键创新在于引入**任务感知的留一误差监督**：训练时，通过分别屏蔽每种模态\(m\)计算预测误差的增加量\(\Delta_m = \max(|\hat{y}^{\setminus m} - y| - |\hat{y}^{\mathrm{all}} - y|, 0)\)，并将其归一化作为教师信号\(\tilde{I}_m\)，以此监督学习到的模态重要性分布\(\hat{\pi}_m\)，监督损失为\(\mathcal{L}_{\mathrm{router}} = \frac{1}{3}\sum_m (\hat{\pi}_m - \tilde{I}_m)^2\)。该监督仅在训练时使用，推理时无需进行模态屏蔽的前向传播。
4.  **不确定性感知融合（UAF）**：解决内容路由在模态严重损坏时仍可能不可靠的问题。它为每种模态基于其跨模态摘要预测一个对数方差代理\(\log\sigma_m^2 = \mathbf{w}_m^{u\top} \mathbf{h}^{\mathrm{cm}}_m + b_m^u\)，然后计算归一化的逆方差权重\(\omega_m = \frac{(\sigma_m^2 + \epsilon)^{-1}}{\sum_k (\sigma_k^2 + \epsilon)^{-1}}\)。最终的可靠性感知模态门控\(g_m\)是模态路由门控\(g^{\mathrm{mod}}_m\)与不确定性校准权重\(\omega_m\)的乘积：\(g_m = g^{\mathrm{mod}}_m \cdot \omega_m\)。模态预测不确定性越高，其融合权重越低。

**组件间数据流与交互**：DMD提取的三种模态表示（特有\(\mathbf{S}_m\)、不变\(\mathbf{C}_m\)、跨模态摘要\(\mathbf{h}^{\mathrm{cm}}_m\)）首先分别进入“不变性分支时间汇总”和“多粒度路由”的输入构造（生成\(\mathbf{f}_m\)）。汇总后的不变表示\(\mathbf{c}^{\mathrm{rep}}_m\)用于MCA损失计算。多粒度路由模块同时接收所有模态的\(\mathbf{f}_m\)，输出子空间特征\(\mathbf{h}^{\mathrm{sub}}_m\)和模态级门控\(g^{\mathrm{mod}}_m\)。UAF模块接收跨模态摘要\(\mathbf{h}^{\mathrm{cm}}_m\)，输出不确定性校准权重\(\omega_m\)。最终，经不确定性校准的门控\(g_m\)同时调制跨模态特征\(\sigma(\mathbf{W}_m^{\mathrm{cm}}\mathbf{h}^{\mathrm{cm}}_m)\)和子空间特征\(\mathbf{h}^{\mathrm{sub}}_m\)，得到\(\bar{\mathbf{h}}^{\mathrm{cm}}_m\)和\(\bar{\mathbf{h}}^{\mathrm{sub}}_m\)。将所有\(\bar{\mathbf{h}}^{\mathrm{cm}}_m\)拼接，并与经投影的\(\bar{\mathbf{h}}^{\mathrm{sub}}_m\)拼接形成的\(\mathbf{c}^{\mathrm{fus}}\)一起，送入残差MLP\(\mathrm{MLP}_{\mathrm{res}}\)进行最终情感预测\(\hat{y}\)。

**关键设计选择**：选择在DMD骨干上构建，是为了利用其已有的解耦和蒸馏能力作为高质量表示基础。采用多粒度路由而非单一粒度，是为了更精细地建模模态内部（特定vs不变）和模态间的贡献。使用留一误差作为路由监督，是为了让路由学习到基于任务性能的“贡献”，而非仅仅是数据层面的相关性，使重要性估计更可解释。引入不确定性估计来校准融合门控，是受贝叶斯深度学习启发，旨在显式量化并降低不可靠模态的影响。

### 💡 核心创新点

1.  **任务感知的留一误差模态路由监督**：先前的融合方法通常通过注意力或门控网络隐式学习模态重要性。MRUF创新性地在训练阶段构建了一个“留一”教师信号，通过计算屏蔽单个模态导致的预测误差增加来显式、可解释地监督模态路由网络，使其重要性估计直接与任务性能挂钩。
2.  **不确定性感知的融合门控校准**：传统路由（如注意力）基于内容相似性，当模态本身损坏时可能失效。MRUF为每种模态预测不确定性（对数方差），并通过逆方差重加权来直接校准融合门控，使高不确定性的模态自动获得低权重，增强了融合过程对模态退化的鲁棒性。
3.  **模态不变对比对齐作为正则化**：为稳定多粒度路由所依赖的共享语义空间，引入了模态间的对比学习损失。这确保了不同模态的不变表示在语义上对齐，为后续的路由和融合提供了更一致的底层表示基础。
4.  **在解耦-蒸馏框架上的系统性增强**：本文并非从头构建新框架，而是在一个强大的现有骨干（DMD）上，系统性地集成了时间汇总、对比对齐、路由和不确定性校准模块。这种“组合式创新”针对DMD可能存在的缺陷（如最终融合阶段不够鲁棒）提供了明确的改进方案。

### 📊 实验结果

论文在CMU-MOSI和CMU-MOSEI两个基准数据集上，在对齐（Aligned）和未对齐（Unaligned）两种设置下进行了评估。主要对比基线包括TFN、LMF、MulT、RAVEN、MICA、MTAG、PMR、Self-MM、EMOE和DMD。所有结果均为三次随机种子运行的平均值。

**CMU-MOSI 对齐设置结果 (Table I)**：
| Method | ACC7 ↑ | ACC2 ↑ | F1 ↑ | MAE ↓ |
| :--- | :---: | :---: | :---: | :---: |
| TFN | 30.4 | 76.2 | 76.3 | 0.974 |
| LMF | 34.5 | 77.2 | 77.2 | 0.951 |
| MulT | 33.9 | 78.7 | 78.9 | 0.939 |
| RAVEN | 33.8 | 76.5 | 76.6 | 0.913 |
| MICA | 35.2 | 78.7 | 78.8 | 0.909 |
| MTAG | 31.1 | 81.8 | 81.8 | 0.929 |
| PMR | 34.1 | 75.4 | 75.5 | 1.024 |
| Self-MM* | 43.9 | 83.5 | 83.5 | 0.742 |
| EMOE* | 44.7 | 83.9 | 83.9 | 0.731 |
| DMD* | 44.5 | 83.2 | 83.3 | 0.729 |
| MRUF (Ours)* | 46.7 | 84.5 | 84.4 | 0.717 |

**CMU-MOSI 未对齐设置结果 (Table I)**：
| Method | ACC7 ↑ | ACC2 ↑ | F1 ↑ | MAE ↓ |
| :--- | :---: | :---: | :---: | :---: |
| TFN | 33.2 | 75.1 | 75.2 | 0.982 |
| LMF | 30.5 | 77.8 | 77.9 | 0.967 |
| MulT | 32.4 | 79.0 | 79.0 | 0.929 |
| RAVEN | 33.9 | 75.4 | 75.5 | 0.917 |
| MICA | 34.7 | 78.8 | 78.9 | 0.916 |
| MTAG | 30.1 | 81.8 | 81.9 | 0.936 |
| PMR | 34.3 | 76.4 | 76.5 | 0.995 |
| Self-MM* | 44.1 | 82.1 | 82.2 | 0.732 |
| EMOE* | 44.8 | 83.8 | 83.9 | 0.722 |
| DMD* | 44.7 | 83.3 | 83.3 | 0.721 |
| MRUF (Ours)* | 46.5 | 84.4 | 84.3 | 0.701 |

**CMU-MOSEI 对齐设置结果 (Table II)**：
| Method | ACC7 ↑ | ACC2 ↑ | F1 ↑ | MAE ↓ |
| :--- | :---: | :---: | :---: | :---: |
| TFN | 49.5 | 79.1 | 79.2 | 0.584 |
| LMF | 50.9 | 82.8 | 82.7 | 0.567 |
| MulT | 50.8 | 81.1 | 81.2 | 0.625 |
| RAVEN | 49.2 | 80.3 | 80.3 | 0.572 |
| MICA | 48.8 | 80.6 | 80.7 | 0.583 |
| MTAG | 50.5 | 82.5 | 82.6 | 0.559 |
| PMR | 48.4 | 78.6 | 78.7 | 0.663 |
| Self-MM* | 52.1 | 83.1 | 83.1 | 0.546 |
| EMOE* | 52.2 | 83.9 | 83.9 | 0.549 |
| DMD* | 51.6 | 83.5 | 83.5 | 0.553 |
| MRUF (Ours)* | 52.3 | 84.5 | 84.4 | 0.544 |

**CMU-MOSEI 未对齐设置结果 (Table II)**：
| Method | ACC7 ↑ | ACC2 ↑ | F1 ↑ | MAE ↓ |
| :--- | :---: | :---: | :---: | :---: |
| TFN | 49.1 | 82.3 | 82.4 | 0.572 |
| LMF | 50.5 | 82.2 | 82.3 | 0.559 |
| MulT | 51.5 | 82.1 | 82.2 | 0.545 |
| RAVEN | 50.2 | 81.5 | 81.4 | 0.562 |
| MICA | 49.4 | 81.1 | 81.0 | 0.583 |
| MTAG | 51.2 | 83.2 | 81.1 | 0.567 |
| PMR | 48.9 | 79.3 | 79.1 | 0.634 |
| Self-MM* | 51.9 | 83.3 | 83.1 | 0.539 |
| EMOE* | 52.2 | 84.1 | 84.0 | 0.547 |
| DMD* | 52.1 | 83.9 | 83.8 | 0.542 |
| MRUF (Ours)* | 52.7 | 84.5 | 84.4 | 0.538 |

**关键消融实验 (Table III & IV)**：
1.  **MRUF与MCA的效果 (Table III)**：在CMU-MOSI对齐设置下，基线DMD的ACC7为44.5。单独加入MRUF模块（不含MCA）可将ACC7提升至46.7；单独加入MCA可将ACC7提升至45.1；两者结合后达到最优的46.7，且其他指标（ACC2, F1）也最优，表明两者具有互补性。
    | MRUF | MCA | ACC7 ↑ | ACC2 ↑ | F1 ↑ | MAE ↓ |
    | :---: | :---: | :---: | :---: | :---: | :---: |
    | | | 44.5 | 83.2 | 83.3 | 0.729 |
    | ✓ | | 46.7 | 83.6 | 83.6 | 0.734 |
    | | ✓ | 45.1 | 83.8 | 83.7 | 0.718 |
    | ✓ | ✓ | 46.7 | 84.5 | 84.4 | 0.717 |

2.  **路由监督策略对比 (Table IV)**：在CMU-MOSI对齐设置下，对比了不同教师信号和损失函数组合。论文提出的“LOO-drop + MSE”策略在ACC2(84.5)、F1(84.5)和ACC7(46.7)上取得最佳结果，优于“none + MSE”、“LOO-drop + KL”等其他组合。
    | Teacher & Loss | ACC2 ↑ | F1 ↑ | ACC7 ↑ | MAE ↓ |
    | :--- | :---: | :---: | :---: | :---: |
    | none + MSE | 83.0 | 82.9 | 44.2 | 0.731 |
    | LOO-drop + KL | 83.9 | 83.9 | 44.5 | 0.729 |
    | uniform + CE | 84.4 | 84.3 | 45.2 | 0.703 |
    | sigma-guided + KL | 83.6 | 83.6 | 46.4 | 0.719 |
    | LOO-drop + MSE | 84.5 | 84.5 | 46.7 | 0.717 |

**鲁棒性实验 (Table V)**：在CMU-MOSEI对齐设置下，对文本进行30%和50%的遮盖，或完全移除视觉/音频模态，MRUF在分类指标（ACC2, F1, ACC7）上均优于DMD。例如，在文本遮盖50%时，MRUF的ACC2为78.8，F1为78.6，而DMD分别为77.7和77.7。然而，在“Text mask 50%”和“w/o Vision”设置下，MRUF的MAE略高于DMD，表明在严重模态缺失时，回归任务的改善存在挑战。
| Setting | Model | ACC2 | F1 | ACC7 | MAE |
| :--- | :--- | :---: | :---: | :---: | :---: |
| Clean | MRUF | 84.5 | 84.4 | 52.3 | 0.544 |
| Clean | DMD | 83.5 | 83.5 | 51.6 | 0.553 |
| Text mask 30% | MRUF | 82.3 | 82.2 | 51.5 | 0.586 |
| Text mask 30% | DMD | 81.3 | 81.3 | 50.7 | 0.595 |
| Text mask 50% | MRUF | 78.8 | 78.6 | 49.9 | 0.677 |
| Text mask 50% | DMD | 77.7 | 77.7 | 48.2 | 0.655 |
| w/o Vision | MRUF | 84.1 | 84.1 | 51.1 | 0.567 |
| w/o Vision | DMD | 83.2 | 83.1 | 50.2 | 0.543 |
| w/o Audio | MRUF | 84.2 | 84.3 | 52.1 | 0.554 |
| w/o Audio | DMD | 83.3 | 83.2 | 51.5 | 0.538 |

**机制分析 (Figure 2)**：论文通过散点图展示了在不同扰动条件下（干净、模态丢弃、高斯扰动），三种模态的预测不确定性\(\log(\sigma_m^2)\)与最终融合门控\(g_m\)之间的关系。结果表明两者呈负相关，即预测不确定性越高的模态，获得的融合权重越低，这支持了MRUF可靠性感知设计的预期行为。

下图展示了音频模态的类似机制分析。

![Figure 2: Mechanism analysis of MRUF. Scatter plots of predicted uncertainty log⁡(σm2)\\log(\\sigma_{m}^{2}) versus the final modality gate gmg_{m} for language, vision, and audio under clean, drop, and Gaussian perturbation conditions. A neg](https://arxiv.org/html/2607.10599v1/scatter_logsig2_vs_gate_audio.png)

结果表明，音频模态的不确定性也与融合权重呈负相关，验证了设计的泛化性。


下图展示了视觉模态的不确定性与门控值关系。

![Figure 2: Mechanism analysis of MRUF. Scatter plots of predicted uncertainty log⁡(σm2)\\log(\\sigma_{m}^{2}) versus the final modality gate gmg_{m} for language, vision, and audio under clean, drop, and Gaussian perturbation conditions. A neg - 图2](https://arxiv.org/html/2607.10599v1/scatter_logsig2_vs_gate_vision.png)

散点图呈现负相关趋势，支持了模型对视觉模态可靠性的评估。


下图展示了语言模态在预测不确定性与融合门控值之间的关系。

![Figure 2: Mechanism analysis of MRUF. Scatter plots of predicted uncertainty log⁡(σm2)\\log(\\sigma_{m}^{2}) versus the final modality gate gmg_{m} for language, vision, and audio under clean, drop, and Gaussian perturbation conditions. A neg - 图3](https://arxiv.org/html/2607.10599v1/scatter_logsig2_vs_gate_text.png)

图中可见，预测不确定性越高，融合门控值越低，体现了不确定性感知融合的有效性。

### 🔬 细节详述

- **训练数据**：CMU-MOSI (2199样本，标准划分1284/229/686) 和 CMU-MOSEI (22856样本，划分16326/1871/4659)。使用BERT提取文本特征，FACET提取视觉特征，COVAREP提取声学特征。
- **损失函数**：总损失 \(\mathcal{L} = \mathcal{L}_{\mathrm{task}} + \mathcal{L}_{\mathrm{dist}} + 0.1\mathcal{L}_{\mathrm{reg}} + \lambda_r\mathcal{L}_{\mathrm{router}} + \lambda_m\mathcal{L}_{\mathrm{MCA}}\)。\(\mathcal{L}_{\mathrm{task}}\)为预测损失（论文未具体说明是MSE还是交叉熵，但任务包含回归和分类，可能兼有），\(\mathcal{L}_{\mathrm{dist}}\)为DMD的图蒸馏损失，\(\mathcal{L}_{\mathrm{reg}}\)为DMD的正则化损失，\(\mathcal{L}_{\mathrm{router}}\)为路由监督的MSE损失，\(\mathcal{L}_{\mathrm{MCA}}\)为模态不变对比损失。论文设置 \(\lambda_r=0.3\), \(\lambda_m=0.07\)。
- **训练策略**：使用PyTorch在单张NVIDIA Tesla T4 (16GB) GPU上训练。Batch size为16，采用早停策略（耐心10个epoch）。检查点基于最佳验证集性能选择，所有结果为三次随机种子平均。论文未提及优化器、学习率、权重衰减、warmup策略等关键训练超参数。
- **关键超参数与效率**：模型总参数量为112.40M。在CMU-MOSEI对齐设置下，训练epoch时长为539.3秒，测试batch时长为150.7毫秒。论文未详细说明路由器、不确定性预测器等新增MLP的具体维度、层数和激活函数。
- **推理细节**：推理时使用单次前向传播，不需要进行留一误差计算。模型采用端到端预测。
- **正则化**：除了DMD原有的正则化，MRUF主要通过对比损失\(\mathcal{L}_{\mathrm{MCA}}\)和路由监督\(\mathcal{L}_{\mathrm{router}}\)进行额外约束。

### ⚖️ 评分理由

*   创新性 (1.3/2)：提出了任务感知的留一误差模态路由监督和不确定性感知融合门控校准，针对现有融合方法隐式学习模态重要性的不足，创新点明确。

*   技术严谨性 (1.3/1.5)：方法描述清晰，数学公式连贯，留一误差计算、不确定性加权及对比损失等核心组件逻辑正确，未发现推导错误或算法漏洞。

*   实验充分性 (1.2/1.5)：在CMU-MOSI和CMU-MOSEI两个数据集上进行了多设置对比和消融实验，但缺乏语音或音频主导任务上的验证，且统计显著性未充分展示。

*   清晰度 (0.8/1)：论文结构完整，但方法部分公式密集，部分设计选择（如路由器输入构造）的动机阐述可更直观，符号系统整体一致。

*   影响力 (0.5/1.5)：在多模态情感分析任务上取得稳定提升，但核心贡献属于多模态融合领域，对语音/音频处理的直接实用价值和验证有限，影响力受限。

*   开源 (0.0/1.5)：论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：提供了损失函数权重、硬件环境、batch size等关键信息，但缺少优化器、学习率、模型MLP维度等训练细节，给精确复现带来困难。

*   工程/实践价值 (0.5/1.5)：提供了一套从特征提取到融合预测的完整方法框架，模块易于集成，但缺乏面向工业部署的轻量化、实时性优化等工程考量。

### 🚨 局限与问题

**论文明确承认的局限**：
1.  **训练成本增加**：留一误差路由器监督需要在训练阶段进行模态屏蔽的额外前向传播，增加了训练成本。论文在Section IV-D和Conclusion中明确提及。
2.  **回归任务挑战**：在严重模态扰动下，虽然分类指标（ACC, F1）有提升，但回归指标（MAE）的改善并不总是优于基线，表明细粒度情感强度估计在模态信息严重缺失时仍面临挑战。论文在Section IV-G和Conclusion中对此进行了讨论。
3.  **未来工作**：作者提出将探索更轻量的路由器监督和更高效的不确定性感知路由。

**审稿人发现的潜在问题**：
1.  **模态贡献评估的局限性**：留一误差教师是基于模型当前状态计算的，可能随训练过程变化，其作为稳定监督信号的最优性未充分讨论。此外，该评估是话语级的，可能无法捕捉词/帧级的模态质量变化。
2.  **不确定性估计的简化**：使用对数方差作为不确定性代理是标准做法，但论文未讨论这种预测的不确定性是否真的能校准良好（calibrated），即预测的不确定性值是否与其真实的误差分布匹配。缺乏如Expected Calibration Error等指标的验证。
3.  **实验设置的局限**：所有实验仅在两个紧密相关的英文视频情感数据集（CMU-MOSI, CMU-MOSEI）上进行。缺乏在语音或音频主导任务（如IEMOCAP语音情感识别、噪声环境下的语音识别、音频事件检测）上的验证，削弱了其对特定领域（如语音/音频）的说服力和影响力。
4.  **方法泛化性存疑**：论文声称方法具有通用性，但仅在一个特定骨干（DMD）和一类任务（情感分析）上验证。其在不同架构、不同模态组合（如仅音频-文本）或其他多模态任务（如视听问答）上的有效性未经检验。
5.  **超参数敏感性未探讨**：关键超参数如\(\lambda_r=0.3\)、\(\lambda_m=0.07\)是通过网格搜索还是经验设定，以及模型对这些超参数的敏感性如何，论文未提及。

---

[← 返回 2026-07-14 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-14/)
