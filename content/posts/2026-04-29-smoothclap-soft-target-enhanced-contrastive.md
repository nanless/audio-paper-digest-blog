---
title: "SmoothCLAP: Soft-Target Enhanced Contrastive Language-Audio Pretraining for Affective Computing"
date: 2026-04-29
draft: false
tags: [语音情感识别, 对比学习, 预训练, 零样本, 跨语言]
categories: [icassp-2026]
description: "语音情感识别 | 6.5/10"
hiddenInHomeList: true
---

# 📄 SmoothCLAP: Soft-Target Enhanced Contrastive Language-Audio Pretraining for Affective Computing

#语音情感识别 #对比学习 #预训练 #零样本 #跨语言

✅ **6.5/10** | 前50% | #语音情感识别 | #对比学习 | #预训练 #零样本

学术质量 5.5/7 | 选题价值 1.5/2 | 复现加成 0.0 | 置信度 中


### 👥 作者与机构

- 第一作者：Xin Jing（CHI – Chair of Health Informatics, TUM University Hospital, Munich, Germany）
- 通讯作者：未明确标注
- 作者列表：
    - Xin Jing（CHI – Chair of Health Informatics, TUM University Hospital, Munich, Germany）
    - Jiadong Wang（CHI – Chair of Health Informatics, TUM University Hospital, Munich, Germany）
    - Andreas Triantafyllopoulos（CHI – Chair of Health Informatics, TUM University Hospital, Munich, Germany）
    - Maurice Gerczuk（CHI – Chair of Health Informatics, TUM University Hospital, Munich, Germany）
    - Shahin Amiriparian（† Huawei, Netherlands, ⋆ CHI – Chair of Health Informatics, TUM University Hospital, Munich, Germany）
    - Jun Luo（† Huawei, Netherlands）
    - Björn Schuller（⋆ CHI – Chair of Health Informatics, TUM University Hospital, Munich, Germany; ‡ GLAM, Imperial College London, UK）

#

### 💡 毒舌点评

论文的亮点在于精准地指出了标准对比学习在情感建模上的“非黑即白”硬伤，并用模态内相似性构建软目标加以缓解，这是一个优雅且有效的工程改良。然而，短板在于其“安全牌”打法：仅在英语数据上训练，却大谈跨语言迁移，说服力有限；且在部分关键数据集（如RAVDESS）上，相比基线提升微弱甚至下降，使得“显著优于”的结论有些底气不足。

#

### 📌 核心摘要

1. 问题：标准对比语言-音频预训练（CLAP）模型在情感计算中，强制要求音频-文本对一一对齐，并将所有不匹配对视为同等负样本，这忽略了情感固有的模糊边界和渐变关系（如“恐惧”与“厌恶”的相似度高于“恐惧”与“快乐”）。
2. 方法核心：提出SmoothCLAP框架。其核心是在训练时引入软目标监督，该目标由模态内相似性（音频-音频、文本-文本相似度）和副语言学特征（如音调、强度等）共同构建，替代原有的硬性独热标签。推理时与标准CLAP流程一致。
3. 创新点：相比于基线ParaCLAP（使用生成的描述性文本查询），SmoothCLAP的创新在于利用计算副语言学特征构建软化监督信号，使模型能学习更精细的情感梯度关系，并丰富了嵌入空间的语义信息。
4. 主要实验结果：在8个情感计算任务（涵盖英文和德文）上进行零样本评估。SmoothCLAP在其中5个任务上取得最佳Unweighted Average Recall (UAR)，2个任务上排名第二。具体结果见下表。

表1：SmoothCLAP与基线模型在各测试集上的UAR对比
| 数据集 | CLAP | Pengi | ParaCLAP | SmoothCLAP |
| :--- | :--- | :--- | :--- | :--- |
| IEMOCAP (4类/英语) | 0.353 | 0.345 | 0.600 | 0.606 |
| RAVDESS (8类/英语) | 0.199 | 0.148 | 0.228 | 0.175 |
| CREMA-D (6类/英语) | 0.230 | 0.245 | 0.177 | 0.266 |
| TESS (7类/英语) | 0.232 | 0.177 | 0.170 | 0.275 |
| FAU Aibo (2类/德语) | 0.500 | 0.470 | 0.526 | 0.555 |
| FAU Aibo (5类/德语) | 0.211 | 0.185 | 0.197 | 0.204 |
| ALC (2类/德语) | 0.511 | 0.473 | 0.537 | 0.541 |
| SLD (2类/德语) | 0.472 | 0.485 | 0.507 | 0.496 |

5. 实际意义：证明了利用软监督信号构建更符合心理学情感结构的嵌入空间，能提升零样本情感识别的性能和泛化能力，对构建更鲁棒的情感计算模型有启发。
6. 主要局限性：训练数据仅限于英语（MSP-Podcast），其跨语言能力的验证不完全；部分任务上性能不如基线；软目标超参数（γ, β）的选择依赖经验性网格搜索，缺乏理论指导。

#

### 🏗️ 模型架构

SmoothCLAP的整体架构（见图1）在推理阶段与标准CLAP完全一致，创新集中在训练过程。
![SmoothCLAP 架构图](http://teb0hdrpn.hd-bkt.clouddn.com/icassp-2026/2026-04-29/11462634-0.jpg)
图1：SmoothCLAP 架构图。该图展示了模型的训练流程。音频和文本分别通过各自的编码器（`Audio Enc`, `Text Enc`）和投影层（`proj`）映射到共享嵌入空间。关键区别在于损失计算部分：
1.  跨模态相似性（Cross-modal similarity）：计算音频嵌入 `Ai` 与文本嵌入 `Tj` 之间的点积 `sij`，并转换为预测分布 `pa2t` 和 `pt2a`。
2.  模态内相似性（Intra-modal similarity）：
    *   音频分支：由一个冻结的本地特征提取器（`LocFeat Enc`）提取音频的帧级特征，经平均池化得到 `¯ℓa_i`。计算批次内所有音频样本间的相似度，得到软目标分布 `qa2a`。
    *   文本分支：使用同一个文本编码器提取文本嵌入 `et_j`，计算文本间相似度，得到软目标分布 `qt2t`。
3.  软目标构建：通过混合系数 `γ` 将 `qa2a` 和 `qt2t` 融合得到 `qij`。再通过融合因子 `β` 将其与独热标签 `δij`（身份矩阵）混合，形成最终软目标 `yij`。
4.  损失计算：使用对称KL散度（`Symmetric KL-Divergence`）最小化预测分布 `pa2t`/`pt2a` 与软目标 `yij` 之间的差异。

组件交互：训练时，音频本地特征提取器（如wav2vec 2.0）和文本编码器（如BERT）被冻结（❄），仅投影层和其他可学习参数（🔥）被更新。这确保了从预训练副语言学模型和语言模型中提取稳定特征。

#

### 💡 核心创新点

1.  软目标监督机制：是什么：使用由模态内相似性计算出的软概率分布作为监督信号，替代传统的硬标签（0/1）。之前局限：标准CLAP将所有非匹配对视为等同的负样本，无法建模情感间的渐变关系。如何起作用：软目标允许非匹配对之间存在一定的“相似度”，使模型能学习更精细的情感几何结构。收益：提升了模型在多个情感任务上的零样本性能，并改善了错误模式（如图2所示，更倾向于保守地分类为中性）。
2.  融合计算副语言学特征作为辅助标签：是什么：将从音频中提取的eGeMAPS特征（如音调、强度）分箱后，转化为文本描述（如“低音调”），作为生成软目标的额外信息源。之前局限：ParaCLAP等方法仅利用情感类别标签生成查询文本。如何起作用：丰富了训练监督信号的多样性，将专家声学知识直接注入模型学习过程。收益：增强了嵌入空间的语义丰富性，使模型能更好地捕捉非语言的声学线索。
3.  无缝推理兼容性：是什么：所有修改仅限于训练阶段，模型推理时与标准CLAP完全相同。之前局限：某些改进模型可能需要改变推理流程。如何起作用：保持了CLAP框架的灵活性和效率。收益：易于部署，可直接替换现有CLAP模型。

#

### 🔬 细节详述

*   训练数据：MSP-Podcast v1.9（英语），110小时，55283条语句，来自1200+说话人。使用类别选择，排除“无共识”标签，最终得到45619个样本。
*   损失函数：对称KL散度损失（公式11）。是预测分布 `pa2t`（音频到文本）和 `pt2a`（文本到音频）与软目标 `yij` 之间双向KL散度的平均。
*   训练策略：
    *   优化器：Adam
    *   Batch Size：32
    *   训练轮数：10 epochs
    *   学习率：文本编码器 `1e-5`；投影层等可学习参数 `1e-3`
    *   冻结组件：音频编码器和本地特征提取器在训练期间冻结。
*   关键超参数：`γ`（混合系数，控制音频/文本软目标权重）= 0.1；`β`（融合因子，控制硬/软目标混合）= 0.5。（注：论文消融实验部分最优参数为γ=0.5, β=0.1，但主实验设置为γ=0.1, β=0.5，存在不一致）。
*   训练硬件：论文中未提及。
*   推理细节：使用数据集提供的标注标签作为文本查询，进行零样本分类。解码策略等未说明。
*   正则化技巧：未明确提及除冻结预训练模型外的其他技巧。

#

### 📊 实验结果

主要对比实验：见上文表1。SmoothCLAP在8个任务中5个最优，2个次优，在CREMA-D、TESS、FAU Aibo(2类)上提升明显。但在RAVDESS（8类）和SLD上性能不如ParaCLAP。

消融实验1：本地特征提取器的影响（表2）。
表2：不同本地特征提取器在4个英语情感数据集上的UAR表现
| LocFeat Enc. | IEMOCAP | RAVDESS | CREMA-D | TESS |
| :--- | :--- | :--- | :--- | :--- |
| Wav2Vec2.0-Emo | 0.606 | 0.175 | 0.266 | 0.275 |
| Wav2Vec2.0-L | 0.594 | 0.173 | 0.260 | 0.368 |
| WavLM-L | 0.595 | 0.212 | 0.201 | 0.267 |
| HuBERT-L | 0.574 | 0.260 | 0.259 | 0.433 |
结论：没有单一提取器在所有数据集上最优，其选择对性能有显著影响。Wav2Vec2.0-Emo在IEMOCAP和CREMA-D上最佳，而HuBERT-L在RAVDESS和TESS上更优。

消融实验2：超参数γ和β的影响（图3）。
![Mix Gamma 和 Fusion Factor 的性能曲线](http://teb0hdrpn.hd-bkt.clouddn.com/icassp-2026/2026-04-29/11462634-2.jpg)
图3：Mix Gamma γ和Fusion Factor β对性能的影响。横轴为参数值，纵轴为UAR（在IEMOCAP上测试）。
- (a) Mix Gamma γ：曲线波动，无明显单调趋势。
- (b) Fusion Factor β：关键结论：随着β增大（即更多依赖软目标，更少依赖硬标签），性能整体呈下降趋势。这表明过大的平滑因子（偏离独热标签）对系统性能有害，软监督应保持较低幅度。

错误模式分析（图2）。
![IEMOCAP上的混淆矩阵对比](http://teb0hdrpn.hd-bkt.clouddn.com/icassp-2026/2026-04-29/11462634-1.jpg)
图2：ParaCLAP与SmoothCLAP在IEMOCAP上的混淆矩阵。图中可见，SmoothCLAP相比ParaCLAP，有更多的样本被错误分类为中性（Neu），尤其是快乐（Hap）、愤怒（Ang）和悲伤（Sad）样本。这反映了软标签训练带来的“保守”预测倾向。

#

### ⚖️ 评分理由

- 学术质量：5.5/7：创新点（软目标监督）明确且合理，技术实现清晰。实验设置了合理的基线对比，并进行了有信息量的消融实验（特征提取器、超参数）。但创新深度有限，属于框架级改进；部分实验结果存在矛盾（如β超参设置与消融结论不完全一致），且在个别数据集上性能下降，削弱了整体说服力。
- 选题价值：1.5/2：情感计算与多模态预训练是当前活跃且重要的研究方向。论文针对具体技术痛点（硬标签假设）提出解决方案，对构建更合理的情感嵌入空间有直接价值，对相关领域研究者具有参考意义。
- 开源与复现加成：0.0/1：论文未提供任何代码、模型或数据资源的公开链接。尽管描述了训练细节，但完整复现仍需大量额外工作（如复现ParaCLAP的标签生成流程、准备特定数据集等），因此无法给予加成。

#

### 🔗 开源详情

论文中未提及任何关于代码、模型权重、数据集（除提及使用的公开数据集外）、在线演示或复现材料的开源计划。论文中引用的开源项目包括：wav2vec 2.0（[HuggingFace链接](https://huggingface.co/audeering/wav2vec2-large-robust-12-ft-emotion-msp-dim)）、BERT、eGeMAPS/openSMILE等。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)
