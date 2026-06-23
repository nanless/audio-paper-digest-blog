---
title: "Towards Detecting Neural Audio Codec Synthesized Heart Sounds"
date: 2026-06-23
draft: false
tags: [自监督学习]
categories: [论文速递]
description: "自监督学习 | 8.7/10"
hiddenInHomeList: true
---

# 📄 Towards Detecting Neural Audio Codec Synthesized Heart Sounds

#自监督学习

**8.7/10** | 创新 1.5/2 | 严谨 1.3/1.5 | 实验 1.4/1.5 | 清晰 1/1 | 影响 1/1.5 | 开源 1.5/1.5 | 复现 0.5/0.5 | 工程 0.5/1.5

🔥 **8.7/10** | 前50% | #自监督学习 | #自监督学习 | [arxiv](https://arxiv.org/abs/2606.21727)


### 👥 作者与机构

Chetia Phukan (UPES, India), Mujtaba Akhtar (NTHU, Taiwan), Kuwar Behera (VBSPU, India), Buduru (VBSPU, India), Girish Orcha (Independent Researcher, India), Mohd Bhavinkumar Vinodbhai (IIIT-Delhi, India), Swarup Ranjan (IIIT-Delhi, India), Arun Balaji (IIIT-Delhi, India)。
注：已有分析未提供此信息，根据原文补充。

### 💡 毒舌点评

1.  标题即弱点：论文标题“Towards Detecting...”通常暗示了探索性和初步性，这与声称的“state-of-the-art”和“建立重要基础”等强力结论存在一定张力。审稿人可能会质疑其结论的绝对性。
2.  “新颖”定义的狭窄性：SHAC任务的定义高度依赖于特定的攻击范式（NAC编解码循环），这使其在短期内难以成为通用的、独立的“新任务”。它更像是心音反欺诈领域面对新技术的一个具体子问题。
3.  实验的潜在漏洞：合成数据的生成方式（编码-解码循环）可能过度简化了真实的攻击场景。攻击者可能不会只做一次编解码，或会进行微调、压缩等后处理，论文的评估并未涵盖这些，使得“高度逼真”的结论打了折扣。
4.  融合方法的必要性质疑：GROOT的动机（鲁棒性、捕捉全局关系）是合理的，但论文缺乏直接的实验对比来证明“Gram矩阵空间”优于“原始特征空间”的最优传输。与标准OT的比较只展示了结果更好，但没有分析差异的来源（例如，对不同噪声水平的敏感性测试）。
5.  可复现性的不完整性：虽然提供了项目主页链接，但未提供作者自己模型（GROOT，以及基于GROOT训练的AASIST和MiO）的权重。对于一个提出新框架的工作，缺少预训练权重会限制他人在其基础上进行快速验证和扩展。
6.  影响力局限：该工作完全聚焦于心音这一特定生物特征。尽管技术（如Gram-OT融合）可能泛化，但论文本身并未在其他领域进行验证或讨论，其影响力对更广泛的音频安全社区而言相对有限。

### 📌 核心摘要

本文首次系统性地研究了基于神经音频编解码器（NAC）合成的PCG心音所带来的欺骗攻击威胁，并提出了一个新的反欺诈任务：合成心音检测（SHAC）。为支持该任务的研究，作者发布了首个基准数据集CARDIOFAKE，包含真实与合成心音。论文评估了频谱特征（MFCC, LFCC）和自监督学习（SSL）特征（Wav2vec2, Unispeech-SAT, WavLM）的个体性能。核心贡献是提出了GROOT（Fusion via GRammian Optimal TranspOrT）融合框架，通过一种新颖的Gram最优传输（Gram-OT）机制对齐并融合异质特征（如MFCC和WavLM），利用它们的互补性。实验表明，结合MFCC和WavLM的GROOT在seen和unseen评估设置下均取得了最佳性能，显著优于个体特征表示以及通用的音频深度伪造检测基线模型（AASIST， MiO），为应对此类新兴攻击奠定了基础。

### 🔗 开源详情

- 代码：论文中给出了一个项目主页链接：https://helixometry.github.io/SHAC/。该主页承诺将发布代码和数据集。论文原文未提供具体代码仓库链接（如GitHub）。
- 模型权重：
    - Wav2vec2: https://huggingface.co/facebook/wav2vec2-base
    - Unispeech-SAT: https://huggingface.co/microsoft/unispeech-sat-base
    - WavLM: https://huggingface.co/microsoft/wavlm-base
    - 作者提出的GROOT模型及重新训练的AASIST、MiO模型权重：未提供。
- 数据集：
    - CARDIOFAKE：论文中发布，具体数据托管链接见项目主页：https://helixometry.github.io/SHAC/
    - CirCor DigiScope：基础数据集，通过 PhysioNet 开放获取：https://physionet.org/content/circor-digiscope/1.0.3/
- Demo：论文中未提及。
- 复现材料：论文中提供了详细的训练超参数配置（优化器、损失函数、学习率、批大小、轮次、类权重等）。未提供完整的复现材料包（如预训练检查点、脚本）。
- 论文中引用的开源项目：
    1.  特征提取库：
        - Librosa (用于 MFCC): https://librosa.org/doc/main/generated/librosa.feature.mfcc.html
        - SPafe (用于 LFCC): https://spafe.readthedocs.io/en/latest/features/lfcc.html
    2.  使用的神经音频编解码器 (NACs)：
        - Descript Audio Codec (DAC): https://github.com/descriptinc/descript-audio-codec
        - Encodec: https://github.com/facebookresearch/encodec
        - Soundstream: 原始论文：https://arxiv.org/abs/2107.01415
        - Speech Tokenizer: https://github.com/ZhangXInFD/SpeechTokenizer
        - FunCodec: https://github.com/modelscope/FunCodec
        - AudioDec: https://github.com/yangdongchao/AudioDec
        - SNAC: https://github.com/mindslab-ai/snac
    3.  用于对比的基线模型：
        - AASIST: https://github.com/clovaai/aasist
        - MiO: 论文作者提出，代码链接未直接在本篇论文中提供。

### 🏗️ 方法概述和架构

本文提出的核心方法为GROOT（Fusion via GRammian Optimal TranspOrT）融合框架，旨在有效融合来自频谱（如MFCC）和自监督学习（SSL，如WavLM）的异质特征表示。其架构和流程如论文图1所示，可分解为以下关键阶段：

1.  输入特征提取：
    *   频谱特征：使用Librosa提取40维MFCC，使用SPafe提取14维LFCC。这些特征经过平均池化。
    *   SSL特征：使用三个预训练SSL模型（Wav2vec2, Unispeech-SAT, WavLM）的最终隐藏层表示。输入音频统一重采样至16kHz，输出为平均池化后的768维向量。
    *   所有提取的特征作为GROOT框架两个并行分支（`R1`和`R2`）的输入。

2.  个体表示建模：
    *   在融合前，每个输入特征流（`R1`或`R2`）首先通过一个独立的1D-CNN块进行初步处理。该块包含一个具有32个滤波器的1D卷积层、一个最大池化层、一个展平层和一个全连接网络（FCN）。FCN包含两个全连接层，神经元数量分别为180和60。
    *   该CNN-FCN子网络的作用是学习输入特征的局部模式并提取更高级别的抽象表示。

3.  Gram最优传输（Gram-OT）融合模块：
    *   经过个体建模后，`R1`和`R2`的输出被展平并线性投影到一个120维的向量（降维以节省计算成本）。投影后的特征向量仍记为`R1`和`R2`。
    *   Gram矩阵计算：对两个特征向量`R1`和`R2`，分别计算其格拉姆矩阵（Gram Matrix）：
        \[G_{R_1} = R_1 R_1^\top\]
        \[G_{R_2} = R_2 R_2^\top\]
        格拉姆矩阵捕捉了特征维度之间的相关性，反映了表示空间的全局关系模式。
    *   代价矩阵构建：基于两个格拉姆矩阵的Frobenius范数距离构建归一化的代价矩阵`M`：
        \[M = \frac{\left\lVert G_{R_{1}} - G_{R_{2}} \right\rVert_F}{\max_{(R_1, R_2)} \left\lVert G_{R_{1}} - G_{R_{2}} \right\rVert_F}\]
        使用Frobenius范数是因为它是欧氏距离从向量到矩阵的自然推广，适用于比较格拉姆矩阵。归一化确保了数值稳定性。
    *   最优传输计划计算：将代价矩阵`M`输入Sinkhorn算法，得到一个最优传输计划矩阵`Γ`：
        \[\Gamma = \text{Sinkhorn}(M)\]
        `Γ`是一个双随机矩阵，表示如何将“质量”从`R1`的特征空间最优地移动到`R2`的特征空间，反之亦然。
    *   特征传输与融合：利用传输计划`Γ`，将原始特征相互传输：
        \[R_2 \rightarrow R_1 = \Gamma \cdot R_2\]
        \[R_1 \rightarrow R_2 = \Gamma^\top \cdot R_1\]
        最后，将传输后的特征与对应的原始特征拼接，形成增强的融合表示：
        \[F_1 = \text{Concat}(R_2 \rightarrow R_1, R_1)\]
        \[F_2 = \text{Concat}(R_1 \rightarrow R_2, R_2)\]

4.  最终分类：
    *   融合后的表示`F1`和`F2`分别通过一个包含80个神经元的全连接层，然后将两个分支的输出拼接。
    *   拼接后的向量输入最终的分类器，该分类器包含两个全连接层（120和30个神经元）和一个使用Sigmoid激活函数的输出层，用于二分类（真实/伪造）。

核心设计动机：GROOT的核心创新在于Gram-OT机制。论文指出，传统的最优传输（OT）直接比较原始特征，对缩放和噪声变化敏感。而Gram-OT通过在格拉姆矩阵空间（而非原始特征空间）进行最优传输，旨在更鲁棒地捕捉特征间的全局关系（如心音的节律模式），同时对噪声、失真和输入间的变化更具鲁棒性。这种设计源于对频谱特征（对声学失真敏感）与SSL特征（捕捉更广泛时序结构）互补性的假设，Gram-OT被视为对齐这两种异质表示的理想工具。

![图1](https://arxiv.org/html/2606.21727v1/x1.png)

![图2](https://arxiv.org/html/2606.21727v1/figures/tsne_real_vs_fake_heart22.png)


### 💡 核心创新点

1.  任务定义：首次明确提出了“合成心音检测（SHAC）”这一针对NAC伪造攻击的新反欺诈任务，强调了心音生物识别系统面临的新威胁。
2.  数据集发布：构建并发布了首个SHAC基准数据集CARDIOFAKE，包含真实与7种不同NAC生成的合成心音，为未来研究提供了可复现的平台。
3.  特征分析：系统性评估了频谱特征与SSL特征在SHAC任务上的性能，验证了SSL特征的优越性以及异质特征融合的潜力。
4.  方法提出：提出了GROOT融合框架，其核心是新颖的Gram最优传输（Gram-OT） 机制。该方法通过在格拉姆矩阵空间而非原始特征空间执行最优传输来对齐和融合异质特征，旨在提升融合的鲁棒性和对全局关系的捕捉能力。

### 📊 实验结果

实验主要包括个体特征评估、特征融合评估以及与通用基线的比较。

1. 个体特征与SSL性能验证：论文在“seen”（测试时使用的NAC在训练中见过）和“unseen”（测试时使用训练未见过的NAC）两种设置下评估了各类特征。结果表明：
*   在所有设置下，CNN作为下游分类器普遍优于FCN。
*   SSL特征（尤其是WavLM）在准确性（ACC）和等错误率（EER）上均显著优于频谱特征（MFCC， LFCC），验证了其在捕捉心音身份信息上的有效性。
*   以表格形式展示个体特征性能如下（Table 1）：
| PTM's | FCN (Seen ACC/EER) | CNN (Seen ACC/EER) | FCN (Unseen ACC/EER) | CNN (Unseen ACC/EER) |
| :--- | :--- | :--- | :--- | :--- |
| LFCC | 76.99 / 15.19 | 79.02 / 14.96 | 72.45 / 18.93 | 73.99 / 18.08 |
| MFCC | 77.82 / 15.04 | 81.56 / 12.55 | 74.93 / 17.60 | 78.74 / 16.91 |
| Wav2vec2 | 83.62 / 12.13 | 86.65 / 10.37 | 79.56 / 16.03 | 83.61 / 13.74 |
| Unispeech-SAT | 80.30 / 12.30 | 82.81 / 11.59 | 74.02 / 18.07 | 78.47 / 18.69 |
| WavLM | 84.54 / 12.51 | 87.72 / 9.45 | 80.54 / 15.01 | 84.02 / 13.39 |

2. 特征融合与GROOT有效性：论文对比了三种融合策略：简单拼接（Concat）、标准最优传输（OT）和本文提出的Gram-OT（GROOT）。主要发现：
*   GROOT在所有融合组合和评估设置中均取得最佳性能。
*   异质特征融合（如频谱+SSL）的效果普遍优于同质特征融合（如SSL+SSL），支持了特征互补性的假设。
*   最佳性能由MFCC + WavLM通过GROOT融合取得，在seen设置下达到93.20% ACC / 5.86% EER，在unseen设置下达到86.10% ACC / 9.75% EER。
*   以表格形式展示融合性能（Table 2， 节选关键组合）：
| Fusion | Concat (Seen ACC/EER) | OT (Seen ACC/EER) | GROOT (Seen ACC/EER) | GROOT (Unseen ACC/EER) |
| :--- | :--- | :--- | :--- | :--- |
| MFCC + WavLM | 87.70 / 7.40 | 89.07 / 6.86 | 93.20 / 5.86 | 86.10 / 9.75 |
| LFCC + WavLM | 86.32 / 7.18 | 88.36 / 7.03 | 91.77 / 6.06 | 85.31 / 10.98 |
| Wav2vec2 + WavLM | 86.26 / 8.32 | 88.92 / 7.82 | 91.60 / 6.20 | 85.70 / 10.00 |

3. 与通用音频伪造检测基线比较：由于SHAC是新任务，论文将最佳的GROOT (MFCC + WavLM) 与通用音频深度伪造检测模型AASIST和MiO进行比较。
*   GROOT (MFCC + WavLM)：Seen 93.20% ACC / 5.86% EER； Unseen 86.10% ACC / 9.75% EER。
*   AASIST：Seen 85.15% ACC / 14.91% EER； Unseen 73.13% ACC / 16.43% EER。
*   MiO：Seen 86.98% ACC / 12.34% EER； Unseen 75.89% ACC / 14.09% EER。
*   GROOT在两项指标上均大幅领先，证明了针对SHAC任务设计融合方法的必要性和有效性。t-SNE可视化和混淆矩阵进一步支持了这一结论。

4. 额外发现：心音身份保持：论文额外进行了身份验证实验，发现NAC合成的心音保留了大量患者身份信息（Real->Fake准确率86.29%），且基于合成数据训练的模型表现更佳（Fake->Fake 95.07%）。这强调了SHAC任务的紧迫性：NAC生成的假心音是高度逼真的深度伪造品。

![图3](https://arxiv.org/html/2606.21727v1/figures/tsne_real_vs_fake_heart1.png)

![图4](https://arxiv.org/html/2606.21727v1/figures/confusion_matrix_real_fake_percent.png)


### 🔬 细节详述

*   数据集构建细节：CARDIOFAKE基于公开的CirCor DigiScope数据集构建。该数据集包含963名患者的3163条真实心音记录（5-65秒）。合成过程是编码-解码循环：将原始心音输入预训练的NAC编码器得到离散潜表示，再通过解码器重构出合成心音。共使用7种NAC（DAC， Encodec， Soundstream， Speech Tokenizer， FunCodec， AudioDec， SNAC）进行合成，每种NAC生成与真实样本一一对应的合成样本，总计产生22141条合成心音。评估分为seen（训练/测试NAC：SNAC， DAC， EnCodec， Soundstream， Speech Tokenizer）和unseen（测试NAC：FunCodec， AudioDec）两种协议。
*   训练细节：所有模型统一训练50个epoch，批量大小为32，使用Adam优化器，初始学习率为1e-3，损失函数为二元交叉熵。采用dropout进行正则化，并使用类权重处理真实/合成样本的不平衡问题。GROOT的融合分支在融合前将特征降至120维。
*   模型架构细节：
    *   个体模型：FCN包含两个全连接层（180， 60神经元）；CNN在FCN前增加一个1D-CNN层（32个滤波器）和最大池化层。
    *   GROOT：两个分支各有一个1D-CNN块（结构同个体CNN模型），后接线性投影至120维。Gram-OT模块处理投影后的120维向量。融合后，`F1`和`F2`各通过一个80神经元的全连接层，输出拼接后进入最终分类器（两层全连接：120， 30神经元）。
*   评估指标：使用准确率（ACC）和等错误率（EER）进行评估，均为百分比形式。
*   可视化分析：通过t-SNE图（图2）和混淆矩阵（图3）对比GROOT和MiO，显示GROOT学习到的特征在真实/伪造类别间具有更好的分离度和聚类紧凑性。

### ⚖️ 评分理由

*   创新性 (1.5/2)： 明确提出了新任务（SHAC）和首个数据集（CARDIOFAKE），这在心音安全领域是重要的第一步。提出的Gram-OT融合机制有一定新颖性，旨在解决异质特征对齐问题。但任务的独立性和通用性有待验证，Gram-OT的创新程度属于方法层面的改进，而非基础理论突破。
*   技术严谨性 (1.3/1.5)： 方法描述清晰，实验设计相对完整（个体评估、融合评估、基线比较）。引入身份验证实验增加了说服力。然而，Gram-OT相比传统OT的优越性缺乏更深入的分析或消融研究（例如，在不同噪声水平下的鲁棒性对比）。合成数据生成方式单一（编码-解码循环），可能无法完全代表真实的对抗场景。
*   实验充分性 (1.4/1.5)： 实验全面覆盖了任��定义的两种协议（seen/unseen），对比了多种特征、融合策略和下游模型。与通用SOTA基线的比较是合理的。数据集构建过程描述详细。不足之处在于未对Gram-OT的核心组件（如格拉姆矩阵、Frobenius范数选择）进行消融实验，也未探索更多后处理或攻击变体。
*   清晰度 (1.3/1.5)： 论文整体结构清晰，从问题引入、数据集、方法到实验逻辑连贯。图表有效支持了论点。但部分公式表述可改进（如格拉姆矩阵和代价矩阵公式中的排版错误），个别术语（如“Fusion via GRammian Optimal TranspOrT”）的全称在文中未明确给出，可能造成阅读障碍。
*   影响力 (1.0/1.5)： 工作为心音反欺诈这一特定方向开辟了新课题，建立了初步基准，对该细分领域有直接价值。然而，核心贡献（新任务、新数据集、特定融合方法）的高度专业化限制了其在更广泛的音频安全、深度伪造检测或生物识别社区中的即时影响力。论文未讨论技术在其他领域的可迁移性。
*   开源 (1.5/1.5)： 论文承诺并提供了项目主页链接，明确指出代码和数据集（CARDIOFAKE）将公开。同时，使用的预训练模型（SSL模型）也提供了公开的HuggingFace链接。这符合高水平论文的开源要求。
*   可复现性 (1.0/1.5)： 论文提供了详细的训练超参数和数��集信息，且承诺开源，基础可复现性有保障。然而，未提供作者提出的模型（GROOT）或重新训练的基线模型（AASIST， MiO）的预训练权重，这增加了精确复现论文所有结果的门槛。
*   工程/实践价值 (0.5/1.0)： 提出的框架为解决特定融合问题提供了一种思路，数据集的发布对后续研究有实践价值。但当前工作仍处于方法提出和基准建立阶段，距离实际部署（如集成到临床或认证系统）还有距离，其实用性需在更复杂、更多样的真实世界数据中进一步验证。

### 🚨 局限与问题

1.  任务定义的狭隘性：SHAC任务高度依赖于“NAC编码-解码”这一特定攻击模式。现实中的攻击者可能采取更复杂的策略，如对合成心音进行添加噪声、重采样、压缩或部分编辑等后处理，论文对此未作探讨，任务定义和评估的现实覆盖面有限。
2.  合成数据的真实性：数据集生成方式过于“干净”（完美的编码-解码循环），可能高估了当前检测方法的性能。真实攻击产生的伪造心音可能包含更多样、更不可预测的伪影，现有方法的鲁棒性存疑。
3.  方法动机的验证不足：论文声称Gram-OT比标准OT更鲁棒，但仅通过最终性能比较来证明。缺乏直接的实验证据，例如在特征中加入不同程度的噪声或扰动后，比较两种OT方法的性能下降曲线，以验证其鲁棒性声称。
4.  消融实验的缺失：GROOT框架包含多个组件（CNN块、投影维度、Gram-OT、最终分类器）。论文未进行任何消融研究来分析每个组件的贡献，例如：没有投影层会怎样？仅用Gram矩阵距离而不做传输会怎样？这使得我们无法判断性能提升究竟来自哪个关键设计。
5.  基线比较的局限：虽然与AASIST和MiO进行了比较，但这些是通用的音频伪造检测模型，并非为心音或SSL特征融合专门设计。缺少与近年来在音频特征融合方面更先进的方法（如基于注意力机制的融合）的比较，使得GROOT的优越性论证不够全面。
6.  未讨论的失败案例与错误模式：论文展示了混淆矩阵，但未深入分析模型在哪些类型的心音（如特定病理状态、不同年龄段）或哪些类型的NAC上更容易失败，这对于理解和改进方法至关重要。
7.  对下游应用的影响未探讨：论文强调了心音生物识别面临威胁，但未讨论其提出的检测方法对现有心音认证系统（如那些使用波形或特定特征的系统）可能产生的影响，或如何将其集成到实际系统中。

### 📷 论文图片

![图5](https://arxiv.org/html/2606.21727v1/figures/confusion_matrix_real_fake_percent1111.png)


---

[← 返回 2026-06-23 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-06-23/)
