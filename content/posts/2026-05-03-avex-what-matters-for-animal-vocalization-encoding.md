---
title: "AVEX: What Matters for Animal Vocalization Encoding"
date: 2026-05-03
draft: false
tags: [生物声学, 预训练, 自监督学习, 数据集, 模型评估]
categories: [iclr-2026]
description: "生物声学 | 7.5/10"
hiddenInHomeList: true
---

# 📄 AVEX: What Matters for Animal Vocalization Encoding

#生物声学 #预训练 #自监督学习 #数据集 #模型评估

✅ **7.5/10** | 前25% | #生物声学 | #预训练 #自监督学习 | #预训练 #自监督学习

学术质量 6.2/7 | 选题价值 1.5/2 | 复现加成 1.0 | 置信度 高


### 👥 作者与机构

- 第一作者：Marius Miron（Earth Species Project）
- 通讯作者：Marius Miron（Earth Species Project），David Robinson（Earth Species Project），Olivier Pietquin（Earth Species Project），Matthieu Geist（Earth Species Project）
- 作者列表：Marius Miron（Earth Species Project），David Robinson（Earth Species Project），Milad Alizadeh（Earth Species Project），Ellen Gilsenan-McMahon（Earth Species Project），Gagan Narula（Earth Species Project），Emmanuel Chemla（Earth Species Project），Maddie Cusimano（Earth Species Project），Felix Effenberger（Earth Species Project），Masato Hagiwara（Earth Species Project），Benjamin Hoffman（Earth Species Project），Sara Keen（Earth Species Project），Diane Kim（Earth Species Project），Jane Lawton（Earth Species Project），Jen-Yu Liu（Earth Species Project），Aza Raskin（Earth Species Project），Olivier Pietquin（Earth Species Project），Matthieu Geist（Earth Species Project）

### 💡 毒舌点评

亮点： 论文以罕见的系统性实证研究方法，对生物声学编码器的各个关键组件（数据、模型、训练策略）进行了全面消融，提供了清晰的“训练配方”，并开源了完整的AVEX工具库，对领域发展具有很强的指导性和推动作用。
短板： 核心创新更多在于系统性的实证比较和“最佳实践”的提出，而非提出一种全新的、具有开创性的模型架构或训练范式，技术壁垒相对有限。此外，评估虽然广泛，但部分任务（如声码发现）的指标选择（聚类/检索）可能无法完全反映实际应用中的端到端性能。

### 🔗 开源详情

- 代码：提供完整的代码仓库链接：https://github.com/earthspecies/avex （AVEX工具库）。
- 模型权重：明确提到公开模型检查点（checkpoints），包括本文训练的`sl-BEATs-all`等模型以及作为基线的现有模型。
- 数据集：论文中使用的核心训练数据来自多个公开来源（Xeno-canto, iNaturalist等），但论文本身未重新发布这些数据集。新增的评估数据集（如个体识别、声码发现）来源于已有的公开仓库（论文在B.4节列出了来源）。
- Demo：论文中未提及提供在线演示。
- 复现材料：提供了极其充分的复现材料，包括：
    - 所有模型变体的完整训练超参数（见表5）。
    - 评估脚本和详细设置。
    - 扩展的基准测试工具（BEANS, BirdSet的扩展版本）。
    - 附录中提供了所有实验的非聚合化详细结果（表6-9）。
- 论文中引用的开源项目：引用了BEATs, EAT, EfficientNetB0 (torchvision), BirdNet, Perch等模型的开源实现或预训练权重。AVEX工具库本身集成了这些模型的封装。

### 📌 核心摘要

这篇论文旨在解决生物声学领域缺乏一个通用、可泛化的动物叫声编码器的问题。现有编码器（如BirdNet、Perch）通常局限于鸟类物种，且评估任务单一，难以适应真实世界中物种多样、任务复杂的应用需求。方法核心是进行一次大规模的实证研究，系统性地比较了不同的模型架构（EfficientNet vs. Transformer）、训练数据组合（生物声学数据 vs. 通用音频数据，以及不同分类群）、训练范式（纯监督学习、纯自监督学习、自监督预训练+监督微调）在广泛评估基准上的表现。

与已有方法相比，本文的新在于：1）首次在如此大规模上系统比较了影响编码器质量的多个维度；2）提出并验证了“自监督预训练（生物声学+通用音频数据混合）->监督后训练（同样混合数据）”这一训练配方；3）扩展了评估范围，新增了个体识别和声码发现任务及多个新数据集，并引入检索和聚类指标。

主要实验结果如表3所示，在26个数据集的4大类任务上，其提出的`sl-BEATs-all`模型（基于BEATs架构，混合数据训练）总体达到SOTA，平均检索ROC-AUC在BEANS分类、BEANS检测和BirdSet上分别达到0.604， 0.408， 0.726。关键消融实验表明：a) 在自监督预训练阶段加入通用音频（AudioSet）能显著提升性能（图2a）；b) 纯监督模型在分布内任务（如BEANS分类）上优于纯自监督模型，但后者在分布外任务（如声音场景的BEANS检测）上泛化能力更强，性能下降更小（图2b）；c) 两阶段训练（自监督+监督）能结合两者优势，实现整体最优。

实际意义在于，论文为构建实用的生物声学基础模型提供了明确的指导方案和开源工具，有助于加速动物行为研究、生物多样性监测等应用。主要局限性在于：1）研究的模型架构种类有限（主要对比了EfficientNet和基于Transformer的BEATs/EAT）；2）所有实验均在16kHz采样率下进行，可能丢失了部分物种声音的高频信息；3）部分评估任务（如声码发现）采用了线性探测或聚类/检索，而非端到端的微调评估。

#

### 🏗️ 模型架构

本文的模型架构研究主要围绕两种主流选择进行：
1.  基于CNN的架构：采用EfficientNet-B0（EffNetB0）。其输入为16kHz的音频频谱图。预训练阶段使用ImageNet预训练的权重。核心是在此骨干上进行监督学习或多标签分类的微调。整体流程为：音频 -> 频谱图 -> 预训练的EffNetB0骨干 -> 时间维度平均池化 -> 线性分类头。
2.  基于Transformer的架构：主要使用BEATs和EAT两个代表性的自监督音频Transformer模型。
    *   BEATs：原始BEATs在通用音频上进行自监督预训练。本文将其作为骨干，在生物声学数据上进行监督微调（Post-training），流程为：音频波形 -> BEATs骨干（包含音频分词器和掩码预测预训练）-> 序列表示 -> 平均池化 -> 线性分类头。
    *   EAT：一种高效的音频Transformer，通过掩码重建和知识蒸馏进行自监督预训练。本文同样将其作为骨干，探索在不同数据（仅生物声学、仅AudioSet、混合）上预训练，然后进行监督微调或直接评估。流程与BEATs类似。

关键设计选择：论文的一个核心设计是两阶段训练范式（Training Recipe）。第一阶段是自监督预训练（SSL），旨在从大规模无标签或弱标签数据中学习通用的音频表示。第二阶段是监督后训练（Supervised Post-training），利用带标签的数据（物种、行为等）对编码器进行微调，使其适应特定的下游任务。论文证明，这种“SSL + 监督”的顺序训练（即`sl-`前缀的模型，如`sl-BEATs-all`）优于单独使用任一范式。此范式在附录图3中有可视化展示。

![图1](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/MFuM9KAEYc-0.png)
图1：本文实证研究的整体框架图，涵盖了（1）模型，（2）训练数据，（3）训练范式，以及（4）扩展的评估数据和方法。

#

### 💡 核心创新点

1.  系统性的多维度实证研究：首次在生物声学领域，对模型架构、训练数据组成、训练范式这三个关键维度进行了系统性的交叉验证，揭示了各自的重要性及交互影响（如数据多样性在两个训练阶段都至关重要）。
2.  提出并验证通用的“训练配方”：明确了“在混合了生物声学和通用音频的大规模数据上进行自监督预训练，然后在同一混合数据上进行监督微调”是最优的训练范式。这为社区未来开发更强编码器提供了可复用的蓝图。
3.  扩展的评估基准与方法：引入了个体识别和声码发现两个新任务，并新增了8个公开数据集进行评估。同时，将评估从单一的分类准确率扩展到包括检索（ROC-AUC）和聚类（NMI）在内的多指标体系，能更全面地评估表示学习的质量。
4.  大规模开源生态建设：发布了预训练模型权重和名为AVEX的完整Python工具库（包含模型加载、推理、训练和评估系统），降低了研究门槛，促进了生物声学领域的技术民主化。

#

### 🔬 细节详述

*   训练数据：
    *   生物声学核心数据：整合自Xeno-canto（10416小时，鸟类）、iNaturalist（1539小时，多样类群）、Watkins海洋哺乳动物数据库（27小时）、柏林自然历史博物馆动物声音档案（78小时）。所有数据通过GBIF分类法统一物种名称。
    *   通用音频数据：AudioSet（5700小时）。
    *   噪声增强数据：ShipsEar, Deepship, Orcalab（水下噪声）；FSD50K, Urbansound, TUT2016, IDMT, Demand, Wham（环境噪声）。
    *   数据增强：在预训练和后训练阶段，以50%概率添加从上述噪声数据集中随机采样的噪声，信噪比（SNR）在-10dB到20dB之间均匀采样。在后训练阶段，另有50%概率使用Mixup，将批次内随机两个音频片段线性混合，标签取并集。
*   损失函数：
    *   监督学习：多标签分类任务使用二元交叉熵损失（BCE Loss）。单标签分类任务使用交叉熵损失。
    *   自监督学习：BEATs和EAT使用各自论文中定义的预训练目标（如掩码预测、重建损失等）。
*   训练策略：
    *   EfficientNet变体：仅进行监督后训练。学习率5e-4，batch size 256，训练50 epochs，AdamW优化器，权重衰减0.01，余弦学习率调度，4000步warmup。
    *   BEATs后训练（sl-BEATs）：分两阶段。第一阶段（Stage-1）：冻结骨干，训练分类头，学习率5e-4，10 epochs。第二阶段：解冻骨干，学习率1e-4，2 epochs，batch size 256，AdamW优化器，权重衰减0.01，余弦调度，5000步warmup。
    *   EAT预训练与后训练：预训练使用EAT官方设置（学习率1e-4， batch size 48，训练30 epochs）。后训练（sl-EAT）同样分两阶段，参数与BEATs后训练类似（Stage-1: 1e-4, 10 epochs; Stage-2: 8e-5, 10 epochs）。
    *   线性探测评估：学习率1e-4，权重衰减0.1，batch size 32，训练900 epochs。
*   关键超参数：所有模型均统一在16kHz采样率下训练和评估。EfficientNet骨干为B0版本（小型）。BEATs和EAT为Transformer架构，具体参数量未在本文详述（遵循原论文）。
*   训练硬件：论文中未说明具体的GPU型号、数量和训练时长。
*   推理细节：评估时，使用冻结的编码器骨干提取时间平均后的嵌入向量，用于后续的线性探测、检索或聚类。
*   正则化技巧：使用了上述的数据增强（噪声添加、Mixup）来��升模型的鲁棒性和泛化能力。

#

### 📊 实验结果

论文在4大类、共26个数据集上进行了全面评估，结果如主要表格所示。

表3：跨生物声学基准和任务的汇总结果（每项指标最佳值加粗）
| 模型 | BEANS分类 (Probe R-auc) | BEANS检测 (Probe) | BirdSet (R-auc) | 个体ID (R-auc) | 声码发现 (R-auc) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| BEATs (pretrained) [SSL] | 0.774 | 0.542 | 0.722 | 0.686 | 0.775 |
| EAT-base (SFT) [SL-SSL] | 0.758 | 0.478 | 0.714 | 0.676 | 0.817 |
| BirdNet [SL] | 0.796 | 0.523 | N/A | N/A | 0.795 |
| Perch [SL] | 0.768 | 0.478 | 0.674 | 0.656 | 0.758 |
| EffNetB0-all [SL] | 0.800 | 0.584 | 0.712 | 0.707 | 0.830 |
| sl-BEATs-all [SL-SSL] | 0.832 | 0.604 | 0.726 | 0.732 | 0.798 |
| sl-EAT-bio [SL-SSL] | 0.797 | 0.562 | 0.687 | 0.705 | 0.806 |

关键结论与图表分析：
*   两阶段训练的优势：`sl-BEATs-all`（自监督预训练+监督后训练，混合数据）在BEANS分类、BEANS检测和BirdSet检索上均取得最佳成绩，验证了所提训练配方的有效性。纯监督的`EffNetB0-all`在声码发现（聚类/NMI）任务上表现最佳。
*   自监督 vs 监督的泛化特性：如图2b所示，在从BEANS分类（主要为中心录音）到BEANS检测（全部为环境录音）的任务中，监督模型（如`EffNetB0-all`）的检索ROC-AUC平均下降0.09，而自监督模型（如`BEATs (pretrained)`）仅下降0.01，表明自监督学习的表示具有更强的分布外泛化能力。
*   数据混合的重要性：图2a显示，在自监督预训练中，混合通用音频（AudioSet）与生物声学数据，相比仅使用生物声学数据，在所有评估指标上都有显著的正向增益。
*   后训练的增益：图3展示了对自监督骨干进行监督后训练，能带来一致的性能提升，有时增益巨大，这为改进现有的自监督生物声学模型提供了一个简单有效的方法。

![图2](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/MFuM9KAEYc-1.png)
图2：(a) 在自监督预训练中添加AudioSet相对于仅使用生物声学数据的胜率分析。(b) 监督模型与自监督模型在分布内（BEANS分类）和分布外（BEANS检测）任务上的性能对比，以及自监督模型经后训练后性能的提升。

![图3](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/MFuM9KAEYc-2.png)
图3：自监督模型进行监督后训练与其原始自监督骨干的胜率对比。图示后训练能带来一致且显著的提升。

表3之后的细分结果表格（如表6-9）提供了在每个具体数据集上的详细数值，支持了上述汇总结论。

#

### ⚖️ 评分理由

- 学术质量：6.2/7 - 论文的技术路线清晰、实验设计非常系统且充分，证据链完整可信。其主要贡献是扎实的实证研究和工程化的“最佳实践”总结，而非提出具有理论突破性的新模型或算法，因此在创新性上略有局限，故给予中上分数。
- 选题价值：1.5/2 - 生物声学是人工智能与生态学、动物学交叉的前沿领域，构建通用编码器对于理解动物通信、生物多样性监测有重要价值。本文工作具有明确的应用导向和推动作用，尽管该领域相对于主流语音处理而言仍属垂直方向，但潜力较大。
- 开源与复现加成：+1.0 - 论文的开源工作非常出色，提供了完整的AVEX库、模型权重和极其详细的训练/评估细节（包括超参数表），极大地方便了社区复现和基于此进行后续研究，应给予满分加成。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
