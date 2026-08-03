---
title: "Leveraging Beam Search Information for Confidence Estimation in E2E ASR"
date: 2026-08-03
draft: false
tags: [语音识别, 端到端, 模型评估, 鲁棒性, 音频理解]
categories: [论文速递]
description: "语音识别 | 6.3/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2607.29299"
---

# 📄 Leveraging Beam Search Information for Confidence Estimation in E2E ASR

标签：#语音识别 #端到端 #模型评估 #鲁棒性 #音频理解

**6.3/10** | 创新 1/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 清晰 0.9/1 | 影响 0.7/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

✅ **6.3/10** | 前50% | 文档类型：方法研究 | 评分置信度：高 | #语音识别 | #端到端 | #模型评估 #鲁棒性 | [arxiv](https://arxiv.org/abs/2607.29299)


### 👥 作者与机构

- 第一作者：Yichen Jia（KU Leuven, Department Electrical Engineering ESAT-PSI）
- 通讯作者：Yichen Jia（KU Leuven, Department Electrical Engineering ESAT-PSI）
- 作者列表：Yichen Jia（KU Leuven, Department Electrical Engineering ESAT-PSI）、Hugo Van hamme（KU Leuven, Department Electrical Engineering ESAT-PSI, Senior Member, IEEE）

### 💡 毒舌点评

这篇文章用一个几百参数的浅层MLP把beam search里现有的分数和排名重新“炒”了一遍，竟然在MCE上爆杀一众复杂基线。轻量、架构无关的卖点确实讨巧，但创新深度有限，更像是一种精巧的工程特征设计，且开了一个空仓库，审稿人的好感度被打了不少折扣。

### 📌 核心摘要

本文重点关注无需改动 ASR 主干的轻量置信度校准。

- 本文旨在解决端到端ASR中置信度估计不可靠的问题，尤其是softmax置信度普遍存在的过度自信与局部-全局 mismatch。
- 方法核心是Score-Rank Confidence Estimation Module (SR-CEM)，仅利用beam search过程中即可获得的token分数、排名及上下文累计分数，通过一个含单隐藏层的MLP直接预测token级或词级置信度，完全脱离特定ASR架构的内部表示。
- 与以往依赖编码器/解码器隐藏状态、注意力权重的CEM相比，SR-CEM首次系统性地证明单靠beam search动态信息（score + rank + top-K）即可完成有效置信度校准，实现真正的架构无关。
- 在LibriSpeech test-clean的token级上，SR-CEM将MCE从softmax的20.04%降至4.50%，ECE从1.75%降至0.30%；词级MCE从17.91%降至8.17%。跨域（Common Voice）、跨架构（Attention-only、CTC-only、RNN-T）、跨语言（荷兰语）及噪声/对话条件下均保持显著校准优势。
- 关键实验结果如下（均来自论文Table 2, 3, 6, 7, 8, 9, 10, 11, 12）：

| 数据集 | 层级 | 方法 | NCE↑ | ROC↑ | PR↑ | ECE↓(%) | MCE↓(%) |
|--------|------|------|------|------|-----|---------|---------|
| LS test-clean | Token | Softmax | 0.301 | 0.919 | 0.996 | 1.75 | 20.04 |
| LS test-clean | Token | SR-CEM | 0.383 | 0.923 | 0.996 | 0.30 | 4.50 |
| LS test-clean | Word | Softmax | 0.336 | 0.931 | 0.996 | 1.67 | 17.91 |
| LS test-clean | Word | SR-CEM | 0.356 | 0.899 | 0.994 | 0.35 | 8.17 |
| CV (OOD) | Token | Softmax | -0.029 | 0.853 | 0.926 | 15.99 | 34.77 |
| CV (OOD) | Token | SR-CEM | 0.248 | 0.866 | 0.931 | 9.54 | 19.59 |
| CTC-only | Token | Softmax | 0.329 | 0.925 | 0.996 | 1.40 | 15.65 |
| CTC-only | Token | SR-CEM | 0.380 | 0.926 | 0.996 | 0.26 | 3.27 |
| RNN-T | Token | Softmax | 0.105 | 0.894 | 0.992 | 3.14 | 21.45 |
| RNN-T | Token | SR-CEM | 0.353 | 0.903 | 0.992 | 0.39 | 4.20 |

- 实际意义在于为工业生产环境提供了一种轻量、可插拔且对下游任务友好的置信度方案，几乎零额外推理延迟。
- 主要局限：依赖beam search（贪婪解码或激进剪枝会削弱效果）；训练-测试条件严重不匹配时校准仍会退化；词级缺少top-K特征导致校准不如token级；需要按目标域重新训练。

### 🔗 开源详情

- 代码：论文提供GitHub仓库链接 (https://github.com/windskylionheart1023/Score_Rank_Confidence_Estimation_Module)，但审稿时仓库为空，仅有README占位，无任何代码。
- 模型权重：论文中未提及已公开的模型权重或checkpoint。
- 数据集：论文使用的数据集均为公开或可申请获取（LibriSpeech, Common Voice, Libri-Adapt, CHiME-6, CGN），但作者未提供打包的数据集或处理脚本。其中CGN需联系获取，未给出公开链接。
- Demo：论文中未提及在线Demo或演示。
- 复现材料：论文详细描述了实验配置与超参数，具备了理论上的可复现性。但缺乏环境配置文件（如containers或`requirements.txt`）和具体的训练/评估脚本，复现仍需投入较大工程量。
- 论文中引用的开源项目：
  - ESPnet: https://github.com/espnet/espnet
  - PyTorch: https://github.com/pytorch/pytorch
  - 文中仅提及SpeechBrain, NeMo, fairseq等工具包名称，未给出具体链接。

### 🏗️ 方法概述和架构

本文提出的分数‑排名置信度估计模块（Score‑Rank Confidence Estimation Module, SR‑CEM）完全建立在一个核心观察之上：端到端自动语音识别（ASR）系统在波束搜索（beam search）解码过程中产生的分数、排名以及上下文累积信息，已经包含了足够的校准信号，从而可以构建一个与具体 ASR 架构完全解耦的轻量级置信度估计器。传统 softmax 置信度仅仅反映了当前解码步的局部概率分布，但波束搜索最终选取的 1‑best 假设是基于全局累积对数概率的，这种局部‑全局不匹配（mismatch）导致正确的非排名第一的 token 被系统性低估。作者证明，softmax 置信度满足不等式 \(c_Y^{\text{softmax}}(y_t) \le 1/r(y_t)\)，而 SR‑CEM 正是通过对排名、上下文得分和竞争分数的显式建模来直接修正这一 mismatch。

整体流程可以概括为：在 ASR 波束搜索解码完成后，针对最终胜出的 1‑best 假设中的每一个 token（或由其组成的每一个词），提取一组仅依赖于波束搜索动态信息的固定维度特征向量；随后将该特征向量送入一个极小的单隐藏层多层感知机（MLP），通过 sigmoid 输出该 token（或词）正确的概率，即校准后的置信度分数。整个过程完全独立于编码器‑解码器的内部隐藏状态、注意力权重或任何声学模型表示，因此能够跨注意力机制、CTC、RNN‑T 等多种异构架构工作。

### Token 级 SR‑CEM
Token 级 SR‑CEM 的输入特征维度为 8，详细构成如下：
- **原始分数** \(s_Y(y_t)\)：当前解码步 \(t\) 被选中 token \(y_t\) 的对数概率得分（来自分数向量 \(\mathbf{s}_t\)）；
- **排名** \(r(y_t)\)：该得分在整个词表 \(\mathcal{V}\) 上的降序排名（秩越高表示竞争越弱）；
- **前文累积分数** \(S_{(t)}\)：当前 token 之前所有 token 的累积对数得分之和；
- **后文累积分数** \(S_{>t}\)：当前 token 之后所有 token 的累积对数得分之和；
- **Top‑K 竞争分数** \(\text{Top}_K(t)\)：当前步分数最高的前 \(K=4\) 个得分（包括选中 token 自身）。

这 8 个标量值被拼接成特征向量 \(\mathbf{f}_Y(y_t)\)。特征设计背后的动机十分明确：排名和 top‑K 分数刻画了当前步的局部竞争激烈程度；前后累积分数提供了整个假设的全局质量信号；原始分数则保留了局部幅度信息。这些信号均直接来自波束搜索的输出，无需访问 ASR 模型的内部表示。

Token 级预测网络为一个前馈 MLP：隐藏层宽度为 64，采用全连接映射 \(W_{Y,1} \in \mathbb{R}^{64 \times 8}\) 及偏置 \(\mathbf{b}_{Y,1}\)，后接 ReLU 激活函数；输出层为单神经元，经 sigmoid 激活，即
\[
\hat{c}_Y(y_t) = \sigma\!\left(W_{Y,2} \cdot \text{ReLU}(W_{Y,1} \mathbf{f}_Y(y_t) + \mathbf{b}_{Y,1}) + \mathbf{b}_{Y,2}\right),
\]
其中 \(W_{Y,2} \in \mathbb{R}^{1 \times 64}\)。该模块仅含约 0.6k 个参数。

### 词级 SR‑CEM
在实际应用中，下游任务常以词为单位进行决策。因此，论文进一步设计了词级 SR‑CEM。其输入特征维度为 5，针对一个词 \(w_l\) 将其对应的 \(Q_l\) 个 token 序列进行聚合后再抽取特征：
- **词分数** \(s_W(w_l)\)：词内所有 token 分数 \(s_Y(y_{l,q})\) 之和；
- **词排名** \(r_l(w_l)\)：对词内各 token 排名取最大值（实验表明 max 优于最小值或均值，因为它更好地捕捉了词内最激烈的局部竞争）；
- **前文累积分数** \(S_{(l)}\)：该词之前所有 token 的累积得分之和；
- **后文累积分数** \(S_{>l}\)：该词之后所有 token 的累积得分之和；
- **词长度** \(Q_l\)：构成该词的 token 数量。

因此，词级特征向量 \(\mathbf{f}_W(w_l)\) 由上述 5 个维度构成。值得指出的是，词级没有使用 top‑K 特征，这是其在部分指标上校准性能略逊于 token 级的主要原因。词级预测网络同样为一个隐藏层宽度为 64 的 MLP，后接 sigmoid 输出，参数总量约 0.4k。词级置信度 \(\hat{c}_W(w_l)\) 直接由 MLP 端到端输出，而不再通过 token 置信度聚合（如均值）的方式，从而避免了聚合操作引入的额外偏差。

### 训练数据准备与训练流程
SR‑CEM 的训练数据完全来源于 ASR 系统对训练集进行波束搜索解码时同步记录的中间信息。对于每一条训练语音，首先使用冻结的 ASR 模型进行推理，在解码过程中为最终 1‑best 假设中的每一个 token 保存分数向量 \(\mathbf{s}_t\)，进而计算出上述特征。正确性标签（即 token 或词是否正确）通过将预测文本与真实文本进行 Levenshtein 对齐获得：替换错误和插入错误对应的单元被标记为错误（\(z=0\)），正确的单元标记为正确（\(z=1\)）；删除错误由于在预测序列中没有对应的置信度目标，被直接排除在实验之外。

训练目标为二元交叉熵损失（BCE）：
\[
\mathcal{L}_{\text{BCE}}(\hat{c}, z) = -\left[z \cdot \log(\hat{c}) + (1-z) \cdot \log(1-\hat{c})\right].
\]
优化器为 Adam，推荐学习率 0.001，权重衰减 \(10^{-4}\)，批次大小 128。由于模型体积极小（token 级 0.6k / 词级 0.4k 参数），训练可在数分钟内完成，且推理时增加的延迟可忽略不计（每句小于 0.1 ms）。

### 关键设计选择与架构无关性
SR‑CEM 的一系列设计均服务于“轻量、解耦、可校准”这一核心目标。首先，特征完全取自波束搜索动态信息，使得模块能够以即插即用的方式附加在任何支持波束搜索的 ASR 系统之上（包括注意力、CTC、RNN‑T 以及它们的混合模型），无需针对不同架构调整编码器或解码器的内部表示维度。其次，利用排名和 top‑K 分数显式刻画局部竞争，利用前后文累积分数捕捉全局一致性，既弥补了 softmax 置信度的局部特性，又避免了引入外部语言模型或复杂后处理。最后，极小的参数量使得 SR‑CEM 在跨域、跨语言、噪声及对话场景下均可高效重训练，且对存储和计算几乎无额外负担。这些设计共同保证了该方法能够系统性地将最大校准误差（MCE）和期望校准误差（ECE）降至极低水平，而无需牺牲 ASR 本身的推理效率。

### 💡 核心创新点

- **Score-Rank特征组合与局部-全局mismatch分析**：明确指出beam search中基于全局路径的选择与token局部softmax之间存在系统性偏差，并提出score + rank + 上下文累积分数的组合特征来直接建模这一mismatch，而非依赖传统的架构内部隐藏状态。
- **架构无关的置信度估计模块**：首次证明仅利用beam search的输出信息（score、rank、top-K）就能在多种ASR范式（hybrid CTC/Attention、纯Attention、纯CTC、RNN-T）下获得有效的置信度估计，克服了以往CEM对编码器/解码器特定表示的依赖。
- **极低复杂度的轻量级设计**：SR-CEM只用一个隐藏层的MLP，参数量数百级别，远小于之前基于Transformer或深度MLP的CEM，同时保持了更强的最差情况校准（MCE）。
- **跨场景广泛验证**：在英文域内/域外、荷兰语、噪声、对话等多种条件下进行了系统评测，并引入了MCE作为核心校准指标，强调其在下游决策安全性中的重要性。

### 📊 实验结果

论文在多个数据集和架构上进行了系统对比，关键结果摘录如下：

下图展示了在相同测试集上，本文提出的SR-CEM方法在Token级别的校准效果。

![(a) Token level](https://arxiv.org/html/2607.29299v1/rd_cem_token_ours_40e_lib100.png)

与基线相比，SR-CEM的准确率与置信度条形图更贴近对角线（完美校准线），过度自信和不自信的区域显著缩小，这直观对应了其MCE指标的大幅下降。


为了直观评估校准效果，论文绘制了不同方法的校准曲线（reliability diagrams）。下图展示了在LibriSpeech测试集上，基线方法在Token级别的校准情况。

![(a) Token level - 图2](https://arxiv.org/html/2607.29299v1/rd_naive_token_ours_40e_lib100.png)

图中可见，基线方法的准确率与置信度存在显著间隙（橙色部分为过度自信，绿色部分为不自信），表明其校准效果不佳，存在较大的MCE。


**主实验结果（LibriSpeech test-clean & Common Voice, token/word，来自Table 2 & 3）**
| 数据集 | 层级 | 方法 | NCE↑ | ROC↑ | PR↑ | ECE↓(%) | MCE↓(%) |
|--------|------|------|------|------|-----|---------|---------|
| LS test-clean | Token | Softmax | 0.301 | 0.919 | 0.996 | 1.75 | 20.04 |
| LS test-clean | Token | MLPCEM | 0.320 | 0.891 | 0.993 | 0.43 | 21.22 |
| LS test-clean | Token | Xformer | 0.298 | 0.875 | 0.993 | 0.37 | 12.06 |
| LS test-clean | Token | SR-CEM | 0.383 | 0.923 | 0.996 | 0.30 | 4.50 |
| LS test-clean | Word | Softmax | 0.336 | 0.931 | 0.996 | 1.67 | 17.91 |
| LS test-clean | Word | MLPCEM | 0.337 | 0.899 | 0.995 | 0.55 | 16.87 |
| LS test-clean | Word | Xformer | 0.314 | 0.886 | 0.994 | 0.71 | 20.57 |
| LS test-clean | Word | E2EXformer | 0.325 | 0.912 | 0.996 | 0.92 | 23.29 |
| LS test-clean | Word | SR-CEM | 0.356 | 0.899 | 0.994 | 0.35 | 8.17 |
| CV (OOD) | Token | Softmax | -0.029 | 0.853 | 0.926 | 15.99 | 34.77 |
| CV (OOD) | Token | SR-CEM | 0.248 | 0.866 | 0.931 | 9.54 | 19.59 |
| CV (OOD) | Word | Softmax | -0.485 | 0.792 | 0.843 | 23.84 | 47.21 |
| CV (OOD) | Word | SR-CEM | -0.198 | 0.778 | 0.804 | 18.62 | 32.78 |

**跨架构结果（Attention-only, CTC-only, RNN-T, LS test-clean，来自Table 6, 7, 8）**
| 架构 | 层级 | 方法 | NCE↑ | ROC↑ | PR↑ | ECE↓(%) | MCE↓(%) |
|------|------|------|------|------|-----|---------|---------|
| Att-only | Token | Softmax | 0.264 | 0.861 | 0.989 | 1.47 | 16.11 |
| Att-only | Token | SR-CEM | 0.289 | 0.864 | 0.990 | 0.73 | 8.12 |
| Att-only | Word | Softmax | 0.351 | 0.919 | 0.996 | 1.14 | 21.23 |
| Att-only | Word | SR-CEM | 0.324 | 0.880 | 0.992 | 0.92 | 13.08 |
| CTC-only | Token | Softmax | 0.329 | 0.925 | 0.996 | 1.40 | 15.65 |
| CTC-only | Token | SR-CEM | 0.380 | 0.926 | 0.996 | 0.26 | 3.27 |
| CTC-only | Word | Softmax | 0.326 | 0.929 | 0.996 | 2.08 | 18.95 |
| CTC-only | Word | TruCLeS | 0.181 | 0.812 | 0.984 | 0.51 | 10.6 |
| CTC-only | Word | SR-CEM | 0.431 | 0.930 | 0.996 | 0.37 | 7.36 |
| RNN-T | Token | Softmax | 0.105 | 0.894 | 0.992 | 3.14 | 21.45 |
| RNN-T | Token | SR-CEM | 0.353 | 0.903 | 0.992 | 0.39 | 4.20 |
| RNN-T | Word | Softmax | 0.179 | 0.908 | 0.994 | 2.57 | 25.56 |
| RNN-T | Word | E2EXformer | 0.337 | 0.908 | 0.995 | 0.57 | 25.58 |
| RNN-T | Word | SR-CEM | 0.142 | 0.768 | 0.984 | 0.71 | 11.95 |

**噪声、对话及荷兰语结果（MCE↓% ，来自Table 11, 12, 10）**
| 条件 | 层级 | SR-CEM MCE | Softmax MCE | 其余最优基线 (MCE) |
|------|------|-----------|-------------|------------------|
| Libri-Adapt (噪声) | Token | 5.99 | 95.08 | Xformer (11.85) |
| Libri-Adapt (噪声) | Word | 5.58 | 24.76 | E2EXformer (9.50) |
| CHiME-6 (对话) | Token | 7.51 | 24.69 | Xformer (12.36) |
| CHiME-6 (对话) | Word | 7.46 | 23.59 | Xformer (10.00) |
| CGN (荷兰语) | Token | 4.41 | 73.05 | Xformer (12.79) |
| CGN (荷兰语) | Word | 6.26 | 35.85 | Xformer (7.46) |

**消融实验（LS test-clean，移除单一特征对MCE的影响，来自Table 4 & 5）**
- Token级：移除Succeeding Score Sum对MCE影响最大（从4.50%升至7.39%）；移除rank影响最小（升至5.53%）。
- Word级：移除Token Count使MCE从8.17%急剧升至17.21%；移除Max Rank影响最小（8.93%），与原始MCE 8.17%差异甚微。

所有结果均表明SR-CEM在MCE上的改善幅度显著，且在不同条件下性能一致性高。

### 🔬 细节详述

- **训练数据**：LibriSpeech train-clean-100用于CEM训练，train-clean-360用于ASR预训练；Common Voice 20k子集用于域外微调实验；Libri-Adapt train用于噪声条件微调；CHiME-6 train用于对话场景微调；CGN (Flemish部分)用于荷兰语实验。所有文本用BPE切分，词表大小5000。
- **损失函数**：二元交叉熵（BCE），直接监督置信度与正确性标签。
- **训练策略**：Adam优化器，学习率0.001，权重衰减\(1\times10^{-4}\)，batch size 128，最多20个epoch，早停，固定种子8:2划分子集。
- **关键超参数**：SR-CEM隐藏层维度64；token级top-K取K=4；词级token计数、max rank特征。Hybrid ASR backbone为12层Conformer encoder + 6层Transformer decoder，注意力维度256，前馈维度2048，4头，CTC权重0.3。RNN-T为Conformer-Transducer，12层encoder，单层LSTM预测网络，joint维度320。
- **训练硬件**：论文提到“单个NVIDIA GeForce RTX 3060 GPU上于20轮内几分钟完成训练”。
- **推理细节**：Beam search解码，所有CEM不改变原有解码流程，SR-CEM直接从已有分数和排名中提取特征，推理延迟<0.1ms每句。
- **模型大小**：Token级SR-CEM 0.6k参数，Word级0.4k参数；对比之下MLPCEM 70k，Xformer 83k (Token) / 100k (Word, E2EXformer)。
- **正则化**：权重衰减，早停。
- **数据增强**：未提及。

### ⚖️ 评分理由

*   创新性 (1.0/2)：首次系统证明仅靠beam search的score、rank与上下文积累信息即可实现架构无关的置信度校准，通过score-rank-context特征组合显式建模局部-全局不匹配。但方法本质是浅层MLP的特征工程，创新深度有限。

*   技术严谨性 (1.2/1.5)：方法推导正确，给出了softmax置信度的严格上界分析，模型设计与特征选择逻辑清晰，未发现技术性推导错误或系统性假设漏洞。

*   实验充分性 (1.0/1.5)：覆盖多个架构（Attention、CTC、RNN‑T）、跨域、跨语言及噪声/对话条件，进行消融实验；但缺少与非学习基线Temperature Scaling的严格对比，未呈现beam size连续变化的敏感性曲线，词级消融中max rank贡献极小也与性能瓶颈存在矛盾，实验全面性略有不足。

*   清晰度 (0.9/1)：论文结构清晰，方法、实验设置、评估指标和讨论均详细阐述，图表呈现合理，阅读流畅。

*   影响力 (0.7/1.5)：极轻量、零额外延迟的架构无关模块对ASR部署有实际吸引力，在安全攸关场景下改善校准具有应用潜力；但依赖beam search且跨域需重训练限制了通用性，预计产生中等影响力。

*   开源 (0.0/1.5)：论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：论文详细记录了架构、超参数和训练配置，并提供硬件信息，具备理论基础的可复现性；但缺少环境配置文件、训练/评估脚本和打包的处理流程，复现仍需较大工程量，属大部分充分但有少量缺失。

*   工程/实践价值 (1.2/1.5)：模型仅数百参数，推理延迟<0.1ms，可即插即用于任何支持beam search的E2E ASR系统，工程落地价值高；但需目标域重训练和beam search依赖对部分场景的即插即用性有所削弱。

### 🚨 局限与问题

1.  **论文明确承认的局限**：SR-CEM依赖beam search，贪心解码或激进剪枝会令特征失效；训练与测试条件严重不匹配时校准性能退化；仅用1-best假设，无法感知多假设的歧义性；词级校准弱于token级，因缺少top-K特征；跨域或跨语言部署需要重新训练。
2.  **审稿人发现的潜在问题**：
    *   **超参数敏感性未经检验**：这是该方法最主要的弱点。Rank和Top-K特征的质量高度依赖于Beam Size。当Beam Size很小时，排名信息可能充满噪声或无法区分，论文仅测试了极端情况，未报告从beam=1到beam=10甚至更大时MCE的连续变化曲线，这削弱了其“通用性”声明。
    *   **特征贡献与性能瓶颈的矛盾**：消融实验表明词级`max rank`的影响最小（移除后MCE仅从8.17%升至8.93%），而词级性能的瓶颈在于缺少Token级的Top-K信息。这是否暗示Rank本身的信息量有限？对于词级估计，是否应该探索比`max`更能保留全局竞争信息的聚合方式？
    *   **跨域泛化的上限**：SR-CEM在CV上的In-domain训练结果（Table 9, MCE 6.67%）与Out-of-domain结果（Table 2, MCE 19.59%）差异巨大，表明其学习到的“校准曲线”高度过拟合于训练数据的分数分布。这对其标榜的“架构无关、易于部署”是一种弱化，说明其难以作为一个固定模块部署在数据流持续变化的环境，而需频繁重训练。
    *   **与其他校准方法的对比缺失**：论文将SR-CEM与复杂的CEMs对比，但未与最简单的非学习式校准方法，如Temperature Scaling (TS)，进行严格对比。TS在计算量和实现难度上同样极低，若只需TS即可部分解决MCE问题，SR-CEM的价值会大打折扣。论文仅在baseline部分提到TS对既有过度自信又有欠信的系统不适用，但缺乏实验数据支撑，说服力不足。
    *   **指标选择的偏颇**：论文极度强调MCE的重要性，这在安全攸关场景下是合理的。然而，ECE等指标在某些应用中同样重要。SR-CEM虽然在MCE上常大幅领先，但其ROC/PR（Table 3, 6, 8, 10等）在多个词级任务中逊于softmax或E2EXformer，说明其校准能力的提升是以轻微牺牲排序/分辨能力为代价的，这种trade-off需要在更多下游任务中评估其净收益。

---

[← 返回 2026-08-03 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-03/)
