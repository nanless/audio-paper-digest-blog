---
title: "Phylogenetic signal in marine mammal and bird vocalizations captured by audio foundation models: the limited benefit of domain-specific pretraining"
date: 2026-07-27
draft: false
tags: [音频理解, 零样本, 模型比较, Transformer, 模型评估]
categories: [论文速递]
description: "音频理解 | 7.7/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2607.22458"
---

# 📄 Phylogenetic signal in marine mammal and bird vocalizations captured by audio foundation models: the limited benefit of domain-specific pretraining

标签：#音频理解 #零样本 #模型比较 #Transformer #模型评估

**7.7/10** | 创新 1.2/2 | 严谨 1.2/1.5 | 实验 0.8/1.5 | 清晰 0.8/1 | 影响 0.7/1.5 | 开源 1.5/1.5 | 复现 0.5/0.5 | 工程 1/1.5

✅ **7.7/10** | 前25% | 文档类型：应用研究 | 评分置信度：高 | #音频理解 | #Transformer | #零样本 #模型比较 | [arxiv](https://arxiv.org/abs/2607.22458)


### 👥 作者与机构

- 第一作者：Víctor Rincón Yepes，Independent Researcher
- 通讯作者：Víctor Rincón Yepes，Independent Researcher

### 💡 毒舌点评

论文首次将音频基础模型的嵌入用于系统发育信号分析，并得出领域特定预训练不增反降的反直觉结论，跨类群验证是最大亮点。但鸟类实验样本量过小且类群分布严重偏斜，对“为何领域模型更弱”的讨论仅停留在不可区分的三种假设层面，缺少对照实验，使核心发现从“洞察”滑向“观察”。

### 📌 核心摘要

本文探究大规模预训练音频模型（AST、CLAP、BEATs-bio）的嵌入能否比传统手工特征（MFCC）更好地恢复海洋哺乳动物和鸟类发声中的系统发育信号，并验证领域特定预训练的增益。方法核心是利用Mantel检验量化声学距离与系统发育距离的相关性，并通过PCA降维、子集分析、部分Mantel检验等控制维度、分类单元粗分割和主导频率的混淆效应。相较于已有仅使用手工特征的研究，本文首次将通用与生物声学专用音频基础模型并列应用于系统发育信号量化。主要实验结果：在32种完整的海洋哺乳动物中，基础模型的Mantel r可达0.385–0.443（p<0.003），而MFCC不显著（r=0.040）；在仅含鲸类的子集中，信号大幅增强（CLAP和BEATs-bio的r均达0.82）；在20种鸟类中，通用模型AST和CLAP（r≈0.52–0.55）显著优于生物声学专用BEATs-bio和鸟类分类器BirdNET（r≈0.32–0.36），且所有基础模型均大幅超越MFCC基线。

| 表示 | 维度 | 海洋哺乳动物 (32种) r | p | 鸟类 (20种) r | p |
|------|------|----------------------|----|---------------|----|
| MFCC | 105 | 0.040 | 0.338 | 0.210 | 0.029 |
| AST | 768 | 0.385 | 0.003 | 0.549 | <0.001 |
| CLAP | 512 | 0.410 | <0.001 | 0.521 | <0.001 |
| BEATs-bio | 768 | 0.443 | <0.001 | 0.318 | 0.014 |
| BirdNET | 1024 | — | — | 0.361 | 0.009 |

实际意义在于为比较生物声学提供了实用的嵌入选择指南，表明通用音频模型可作为零样本工具高效获取进化信息，且领域专用标签非必要。主要局限性包括：海洋哺乳动物录音来自单一历史档案，存在设备混淆；鸟类样本深度偏向目间分支，限制了对目内信号的推断；以及无法分离训练目标、架构和数据广度各自对领域模型表现不佳的贡献。

### 🔗 开源详情

-   **代码**：https://github.com/rinvictor/bioacoustic-phylogeny-embeddings
-   **模型权重**：
    -   AST: https://huggingface.co/MIT/ast-finetuned-audioset-10-10-0.4593
    -   CLAP: https://huggingface.co/laion/clap-htsat-unfused
    -   BEATs-bio: https://huggingface.co/EarthSpeciesProject/esp-aves2-naturelm-audio-v1-beats
    -   BirdNET: 通过 https://github.com/kahst/BirdNET-Analyzer 的BirdNET GLOBAL 6K v2.4版本调用
-   **数据集**：
    -   海洋哺乳动物：Watkins Marine Mammal Sound Database，可通过 HuggingFace (https://huggingface.co/datasets/confit/wmms-parquet) 或 Archive.org完整版 (https://archive.org/details/watkins-marine-mammal-sound-database-full-cuts) 获取。
    -   鸟类：录音来源于xeno-canto (https://www.xeno-canto.org)，具体的录音列表基于BirdCLEF 2023元数据筛选，论文代码仓库提供了使用的物种列表和处理脚本，但未提供统一下载链接。
-   **复现材料**：代码仓库直接提供了处理后的嵌入向量、距离矩阵及所有分析脚本，可直接复现论文中的图表和统计结果。

### 🏗️ 方法概述和架构

整体流程分为四个阶段：音频特征提取与嵌入生成、声学距离矩阵构造、系统发育距离矩阵构造、矩阵相关性统计检验。整个流水线强调零样本评估，未对任何模型进行微调，确保比较的是预训练表征的固有属性。

特征提取部分，为每个物种的每一段音频片段计算一个固定长度的嵌入向量。MFCC基线使用librosa提取40维MFCC的均值和标准差，再加chroma、谱对比度、谱质心、滚降点和过零率，拼接得到105维特征。AST使用MIT/ast-finetuned-audioset-10-10-0.4593，音频重采样至16kHz，取pooler输出的768维嵌入，该模型在AudioSet上通过音频事件标签的监督分类进行训练。CLAP使用laion/clap-htsat-unfused，音频重采样至48kHz，经音频投影头获得512维嵌入，该模型在63万音频-文本对上通过对比学习进行训练。BEATs-bio基于EarthSpeciesProject/esp-aves2-naturelm-audio-v1-beats，是BEATs编码器在生物声学语料上经自监督微调的版本，音频重采样至16kHz，对输出帧取平均得到768维嵌入。BirdNET（仅用于鸟类）使用BirdNET GLOBAL 6K v2.4，音频重采样至48kHz并以3秒窗口处理，抽取分类层前的全局平均池化层（维度1024），对窗口取平均得到片段级嵌入，该模型在约6000种鸟类音频上通过监督分类训练。

所有片段嵌入首先进行L2归一化，以物种为单位计算质心（再度L2归一化），然后采用余弦距离构造物种对的声学距离矩阵 \(d_{ij}=1 - \hat{c}_i \cdot \hat{c}_j\)。

系统发育距离矩阵：海洋哺乳动物基于McGowen等(2020)的鲸类分歧时间和Berta等(2018)的鳍足类分歧时间，所有鲸-鳍足配对固定为90 Myr，距离从2 Myr（同属物种）到90 Myr（鲸目-食肉目分化）。鸟类采用Jetz等(2012)的时间校准树，从birdtree.org抽取100棵后验树，计算各树的共祖时间（patristic distance除以2）并取均值，时间跨度从9 Myr到83 Myr，中位数81 Myr，显示样本深度偏向目间分化。

统计推断使用Mantel检验，计算两个距离矩阵上三角的Pearson相关，通过9999次行列置换获得p值。模型间比较采用配对bootstrap（2000次物种联合重抽样），计算 \(\Delta r\) 的95%置信区间。控制实验包括：(1)PCA降维，将高维嵌入投影至105维MFCC空间，以控制余弦距离对维度的依赖；(2)部分Mantel检验，控制由主导频率的对数-八度距离构成的矩阵，主导频率估计时忽略30Hz以下能量，取各物种片段 \(\log_2\) 中位值；(3)子集分析，限制在26种鲸类内部以消除“常数列”效应；(4)构建仅编码鲸-鳍足分类的二值矩阵，量化其对声学方差的解释度。

### 💡 核心创新点

1.  首次将通用音频基础模型（AST、CLAP）与领域特化模型（BEATs-bio, BirdNET）并列应用于系统发育信号恢复任务。先前工作仅限于手工特征，本文打开了利用深度嵌入获取进化信息的新路径。
2.  通过跨类群设计，发现“领域特定预训练对恢复系统发育信号不必要甚至可能有害”的反直觉结果。在鸟类上，分类专用模型BirdNET（r=0.36）和生物声学模型BEATs-bio（r=0.32）均未超越通用模型AST（r=0.55）和CLAP（r=0.52），并系统性地排除了维度、主导频率、分类单元粗分割等简单替代解释。
3.  建立了评估音频表示进化信息含量的统计标准。借用比较生物声学中的Mantel检验框架，结合配对bootstrap和多重控制检验，为后续表征学习的进化可解释性评估提供了可直接复用的协议。

下图展示了跨类群比较的结果，直观支持了领域特定预训练不改善信号的发现。

![Figure 5: Cross-taxon comparison. (a) Mantel r for five representations against the Jetz et al. (2012) phylogeny across 20 bird species, with 95% bootstrap intervals (*** p < 0.001, ** p < 0.01, * p < 0.05). (b) Mantel r for marine mammals](https://arxiv.org/html/2607.22458v1/figures_en/12_crosstaxon_stacked.png)

图中可见，通用模型AST和CLAP在海洋哺乳动物和鸟类中均表现出较高的Mantel r值，而领域特定模型BEATs-bio和BirdNET并未显示出优势。

### 📊 实验结果

Mantel 检验结果汇总于表 1。在 32 种海洋哺乳动物的完整矩阵上，MFCC 特征未检测到系统发育信号（r = 0.040, p = 0.338），而三种基础模型均检测到显著信号：BEATs-bio r = 0.443, CLAP r = 0.410, AST r = 0.385（所有 p ≤ 0.003）。

**表 1. 四种表示在 32 种海洋哺乳动物（496 对）上与系统发育距离的 Mantel 检验结果。** p 值来自 9,999 次置换检验；95% 置信区间来自 2,000 次物种重抽样。

| 表示 | 维度 | r | p | R² (%) | 95% CI |
|------|------|---|---|--------|--------|
| MFCC | 105 | 0.040 | 0.338 | 0.2 | [-0.01, 0.43] |
| AST | 768 | 0.385 | 0.003 | 14.8 | [0.26, 0.67] |
| CLAP | 512 | 0.410 | <0.001 | 16.8 | [0.26, 0.65] |
| BEATs-bio | 768 | 0.443 | <0.001 | 19.6 | [0.32, 0.68] |

三种基础模型之间在统计上不可区分：配对 bootstrap 得到的 Δr 95% 置信区间均跨越零。但所有基础模型与 MFCC 的差距显著（Δr > 0.34，置信区间不含零）。维度控制实验表明，将基础模型嵌入经 PCA 降至 105 维后，Mantel r 降至 0.20–0.26，而 MFCC 仍为 0.04，差距保持在 5–6 倍，说明优势并非源自高维度。

下图总结了在32种海洋哺乳动物上各表示的Mantel r值。

![Figure 2: Mantel r for each representation against phylogenetic distance across 32 marine mammal species, with 95% bootstrap confidence intervals. Significance from 9,999 permutations (*** p < 0.001, ** p < 0.01, ns not significant). The th](https://arxiv.org/html/2607.22458v1/figures_en/08b_bars.png)

柱状图显示，三种基础模型的Mantel r均显著高于MFCC，且它们之间无统计学差异。


仅在 26 种鲸类的子集分析中，信号大幅增强：CLAP 和 BEATs-bio 的 r 均达 0.82，AST r = 0.74，MFCC 亦变得显著（r = 0.45, p < 0.001）。仅编码鲸-鳍足分割的二值矩阵仅能解释 4–6% 的声学方差，表明信号源自更精细的类群内部结构。完整矩阵上 r ≈ 0.4 的低值被约一半为常数 90 Myr 的配对稀释，倾向保守。

下图展示了各表示下声学距离与系统发育距离的关系。

![Figure 3: Pairwise cosine distance against phylogenetic distance for each representation (points coloured by taxonomic group; dashed line is the least-squares fit). The MFCC cloud is flat; the three foundation models show a positive slope.](https://arxiv.org/html/2607.22458v1/figures_en/08a_scatters_stacked.png)

散点图显示，基础模型下点呈正斜率趋势，而MFCC云平坦，证实了基础模型捕获了更多系统发育信号。


部分 Mantel 检验显示，控制主导频率后，CLAP 与系统发育相关性从 0.410 仅微降至 0.404，保留了 97% 的 R²。主导频率与声学距离及系统发育距离的相关性均很弱（r 分别为 -0.085 和 -0.133）。

下图直观展示了部分Mantel分析的结果。

![Figure 4: Partial Mantel analysis controlling for dominant frequency. (a) Simple Mantel r (CLAP vs phylogeny) and partial Mantel r (CLAP vs phylogeny given dominant frequency): controlling for frequency retains 97% of the R2 (r drops from 0](https://arxiv.org/html/2607.22458v1/figures_en/11_partial_mantel.png)

图中显示，控制主导频率后，CLAP与系统发育的相关性几乎不变，保留了97%的R²，表明频率不是主要混淆因素。


极端案例：胡须海豹与北露脊鲸（分化 90 Myr）呈现强烈声学汇聚（余弦距离 0.098）；豹海豹与威德尔海豹（分化仅 10 Myr）则呈现极端声学分异（余弦距离 0.773）。

### 鸟类系统发育信号
鸟类分析结果见表 2。在 20 种鸟类上，通用模型 AST 和 CLAP 恢复强信号（r ≈ 0.52–0.55, p < 0.001），而领域专用模型 BEATs-bio 和 BirdNET 的表现反而更弱（r ≈ 0.32–0.36），所有基础模型均显著优于 MFCC 基线。

**表 2. 五种表示在 20 种鸟类（190 对）上与 Jetz 等人 (2012) 系统发育的 Mantel 检验结果。** p 值来自 9,999 次置换检验。

| 表示 | 维度 | 训练目标 | r | p | R² (%) |
|------|------|----------|---|---|--------|
| MFCC | 102 | — | 0.210 | 0.029 | 4.4 |
| AST | 768 | 监督分类 (AudioSet 标签) | 0.549 | <0.001 | 30.1 |
| CLAP | 512 | 对比学习 (音频–文本) | 0.521 | <0.001 | 27.2 |
| BEATs-bio | 768 | 自监督 (生物声学) | 0.318 | 0.014 | 10.1 |
| BirdNET | 1024 | 监督分类 (~6,000 种鸟) | 0.361 | 0.009 | 13.1 |

配对 bootstrap 确认所有基础模型均击败 MFCC（例如 AST 与 MFCC 之间的 Δr = +0.36, 95% CI [+0.20, +0.55]），但基础模型之间差异不显著。频率控制再次维持信号（BirdNET r 从 0.361 降至 0.343，保留 90% 的 R²，p = 0.015）。然而，限于 11 种雀形目的子集分析中，所有模型的 Mantel r 均不显著（-0.05 至 0.27），表明深层目间差异贡献了鸟类信号的主要部分。

### 🔬 细节详述

-   **训练数据**：所有模型均为公开预训练权重，未由作者训练。AST在AudioSet（约200万个音频事件标签片段）上监督训练；CLAP在63万音频-文本对上对比学习；BEATs-bio是对BEATs在生物声学语料上自监督微调（具体语料细节未进一步披露）；BirdNET在约6000种鸟类音频上监督分类训练（训练集规模未说明）。MFCC为手工设计。
-   **损失函数**：不适用（作者未训练模型）。
-   **训练策略**：不适用。
-   **关键超参数**：模型特定嵌入维度见实验结果表，所有嵌入经L2归一化；UMAP参数`n_neighbors=8, min_dist=0.25`；主导频率估计忽略30Hz以下能量，取`log2`中位数，频率距离公式为 \(|\log_2 f_i - \log_2 f_j|\)。
-   **训练/推理硬件**：未说明。
-   **数据统计**：海洋哺乳动物32种共1754条录音，每种23-114条；鸟类20种607条录音，每种15-35条。系统发育矩阵来源在正文与补充材料中有详细引用。
-   **代码与仓库**：提供了GitHub仓库链接（https://github.com/rinvictor/bioacoustic-phylogeny-embeddings），仓库内明确提供了完整的分析脚本、处理后的嵌入向量和距离矩阵，可直接复现核心图表和统计结果。

### ⚖️ 评分理由

*   创新性 (1.2/2)：[A_SUMMARY] 首次将通用音频基础模型嵌入用于系统发育信号恢复，跨类群实验揭示领域特定预训练不增反降的反直觉结果，建立了新的评估协议。

*   技术严谨性 (1.2/1.5)：[A_METHOD] 方法设计合理，采用Mantel检验、部分Mantel检验和配对bootstrap等标准统计推断，并通过PCA降维、子集分析等方式控制混淆，无推导或逻辑错误。

*   实验充分性 (0.8/1.5)：[A_LIMITS] 尽管包含多项控制实验，但鸟类样本仅20种且深度偏向目间分支、雀形目内部信号弱，缺乏因果分离实验，录音条件、架构混淆未充分控制，人为常数偏差的量化分析欠缺，核心发现未能充分验证。

*   清晰度 (0.8/1)：[S_HEAD][S_MIDDLE] 论文结构清晰，方法描述详实，图表和表格直观呈现关键结果，少数字号排版重复但基本不影响理解。

*   影响力 (0.7/1.5)：[A_SUMMARY] 为比较生物声学提供了嵌入选择指南，揭示通用模型优势，但领域较窄，受限样本量和类群特异性，影响力中等。

*   开源 (1.5/1.5)：[A_OPEN] 代码仓库、模型权重、处理后的嵌入和距离矩阵全部公开，可直接复现核心图表和统计结果，文档完整。

*   可复现性 (0.5/0.5)：[A_METHOD][A_OPEN] 评估流程中所有嵌入维度、归一化、距离度量、重采样和检验参数均已明确给出，代码和数据矩阵可以直接复现。

*   工程/实践价值 (1.0/1.5)：[A_SUMMARY][A_OPEN] 提供了实用的零样本嵌入选择方案和完整代码数据，但未形成端到端工具或系统，工程价值在于方法指引而非直接部署。

### 🚨 局限与问题

**论文明确承认的局限**：
-   海洋哺乳动物录音来自同一历史档案，采样率与设备可能随类群共变，模态采样率（octave距离）与系统发育距离相关性为0.36。
-   鸟类分析仅20种，类群深度偏向目间分支，雀形目内部信号弱，样本量不足以区分模型间差异。
-   无法分离训练目标、架构和数据广度对“领域模型表现更弱”的贡献，并将其作为未来工作的关键实验。
-   所有模型均在空气声学数据上训练，可能不如在水听器数据上训练的模型。

**审稿人发现的潜在问题**：
1.  **因果分离实验缺失是最大硬伤**：论文最引人入胜的发现是“领域专用模型不增反降”，但对其原因的讨论完全停留在了三种不可区分的假设上。作者提到的“固定编码器、对比微调物种分类头前后”的实验极具可操作性，却未执行，使得论文更像一个高质量探索性观察报告，而非一个提供完整见解的顶会论文。
2.  **录音条件混淆控制不足**：低频海洋哺乳动物的声学汇聚现象被部分归因于录音带宽限制。作者未能在分析中显式控制该混淆因素（如仅在样本共有的记录频带内分析），削弱了对“生物收敛性”解读的可靠性。
3.  **模型选择存在架构混淆**：论文结论提及“监督分类可能损害信号”，但BirdNET作为唯一的CNN和监督物种分类模型，本身混淆了架构与训练目标。CLAP、AST、BEATs均为Transformer架构。无法排除架构差异是导致BirdNET表现不佳的主因。
4.  **人为“常数”的偏倚问题**：海洋哺乳动物矩阵中，所有鲸-鳍足配对距离被固定为90 Myr，这在矩阵中引入大量同值元素。虽然作者通过子集和二元矩阵分析进行了讨论，但未对该人为设定对完整矩阵相关系数的可能偏倚方向（如可能系统性压低了r值）和大小进行量化分析。

---

[← 返回 2026-07-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-27/)
