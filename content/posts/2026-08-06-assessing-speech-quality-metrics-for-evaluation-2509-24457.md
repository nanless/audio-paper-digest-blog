---
title: "Assessing speech quality metrics for evaluation of neural audio codecs under clean speech conditions"
date: 2026-08-06
draft: false
tags: [语音质量评估, 预训练, 模型评估, 基准测试, 语音编码]
categories: [论文速递]
description: "语音质量评估 | 6.0/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2509.24457"
---

# 📄 Assessing speech quality metrics for evaluation of neural audio codecs under clean speech conditions

标签：#语音质量评估 #预训练 #模型评估 #基准测试 #语音编码

**6.0/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.7/1 | 影响 1/1.5 | 开源 0/1.5 | 复现 0.1/0.5 | 工程 1/1.5

✅ **6.0/10** | 前50% | 文档类型：数据集与基准 | 评分置信度：中 | #语音质量评估 | #预训练 | #模型评估 #基准测试 | [arxiv](https://arxiv.org/abs/2509.24457)


### 👥 作者与机构

- 第一作者：未披露（文献信息中标注 * 与 †† 为 equal contribution，但原文未在正文给出作者机构信息）
- 通讯作者：未说明
- 作者列表：Wolfgang Mack、Nezih Topaloglu、Laura Lechler、Ivana Balić、Alexandra Craciun、Mansur Yesilbursa、Kamil Wojcicki（机构信息均未披露）
- 备注：论文首页脚注标注 "††* Equal contribution"

### 💡 毒舌点评

这篇文章用 45 个客观指标去碰 17 个神经编解码器条件，最后得出结论：神经网络指标比传统指标强，scoreq_ref 最牛，非侵入式指标在高分段会饱和。整个工作像一次大型指标“选美比赛”，态度认真、数据量大，但选美标准（主观 MUSHRA-1S）本身就是众包分数的平均值，评委只有约 7 人/文件，噪声不小。更关键的是，作者把“非侵入式指标高分段饱和”归因于 MOS 训练目标，却拿不出训练标签分布的直接证据，只能停在“我们推测”的层面。至于那个“高分数区间可能没有真实质量差异，侵入式指标测的只是与参考信号的无关差异”的自我怀疑，论文也只是轻轻带过——这个 alternative hypothesis 要是真成立，整篇的“指标好用”叙事就得打对折。另外，论文没给代码、没给数据、没给指标版本配置，号称 reproducible evaluation protocol 却连最小复现包都没有，审稿人要是较真，一句“请提供评估脚本”就能让作者难受半天。

### 📌 核心摘要

本文评估了 45 种客观语音质量指标在干净语音条件下与主观听感分数的一致性。作者选取 LRAC Track 1 盲测集中的 100 条干净语音，并采用 MUSHRA-1S 单条件变体进行众包主观测试，覆盖 17 个神经编解码器条件（0.9–8 kbps），共得到 1700 个数据点。结果显示，基于神经网络的指标（scoreq_ref、scoreq_nr、utmos、nomad、audiobox_aesthetics_ce、sheet_ssqa）获得了最高的 Pearson 相关系数，其中 scoreq_ref 与主观分数的相关系数绝对值最高（|r|=0.87）；传统指标中 warpq 与 pesq 表现最好。进一步分析发现，非侵入式、基于 MOS 训练目标的指标在高主观质量区间会出现饱和，导致排序能力下降；该现象的可能解释是 ACR/MOS 训练目标难以区分高质量端差异，但论文也提出了另一种解读——高 MUSHRA 分数区间内可能不存在可感知的质量差异。本文的主要价值在于提供了当代神经编解码器场景下指标选择的经验基准，但局限是仅覆盖干净语音与单一语料库，且未做指标间差异的统计推断；论文未提供主观评分数据、评估代码或开源链接，复现门槛较高。

### 🔗 开源详情

- 代码：论文未披露代码仓库链接；正文提及 VERSA 工具包 [21] 用于客观指标计算，但未给出 URL。
- 模型权重：论文未发布或披露任何预训练模型权重。
- 数据集：评测采用第三方 LRAC Challenge Track 1 盲测集，论文给出的唯一链接为 https://lrac.short.gy；论文未提供主观 MUSHRA-1S 评分数据的下载链接，也未提供 100 个测试文件的选取清单。
- Demo：未披露。
- 复现材料：未披露评估脚本、指标版本配置、听感测试界面或聚合脚本。论文中提及 VERSA toolkit [21] 与 Opus [28]，但均未给出 URL；正文唯一给出的链接是 LRAC 挑战赛 https://lrac.short.gy。

### 🏗️ 方法概述和架构

本文属于面向“神经编解码器客观质量指标可信度”的评估基准与方法论框架，其核心任务不是训练或提出新的编码模型，而是构建一条可复现的流水线，用于量化 45 种客观指标与主观听感分数之间的一致性。形式化地，设 \(\mathcal{X}=\{x_1,\ldots,x_N\}\) 为 \(N=100\) 条干净语音的集合，每一条 \(x_i\) 均是离散时间时域信号。设 \(\mathcal{A}=\{\mathcal{A}_1,\ldots,\mathcal{A}_C\}\) 为 \(C=17\) 个编解码器条件，每个条件 \(\mathcal{A}_c\) 由一个具体的神经编解码器及其工作比特率组成。将 \(\mathcal{A}_c\) 应用于 \(\mathcal{X}\) 中的全部信号，可得到处理后的信号集 \(\mathcal{P}=\{\mathcal{X}_1,\ldots,\mathcal{X}_C\}\)，其中 \(\mathcal{X}_c=\{x_1^c,\ldots,x_N^c\}\) 是第 \(c\) 个条件处理后的 \(N\) 条语音。全部 \(\mathcal{P}\) 中的文件均同时进入主观和客观评估通道，对每个指标而言，最终产生 \(C \cdot N = 1700\) 个客观分数，并与对应的主观分数进行相关性计算。整体流程是一个“固定输入—结构化输出”的评估流水线，由以下四个核心模块逐级连接而成。

**模块一：输入语料与编码器条件构造。** 输入语料取自低资源音频编码（LRAC）挑战的 Track 1 盲测集，包含 100 条干净语音。这一选择保证了测试信号本身不含噪声与混响，从而将评估聚焦于编解码器自身引入的失真。17 个编解码器条件覆盖了 0.9 kbps 至 8 kbps 的比特率范围，并特意选择在模型架构、训练目标、计算复杂度、时延、输出带宽等方面存在显著差异的编码器（例如 DAC、Encodec、Mimi、SNAC 等），以使失真类型多样化，避免评估结果被单一架构主导。该模块的输出是 17 组经处理后的语音文件，每组包含 100 条信号，并附带各编码器的采样率信息（见表 1，有 16 kHz 与 24 kHz 两种）。

**模块二：主观评估——MUSHRA-1S 测试。** 主观分数通过 MUSHRA-1S 方法获取。与经典 MUSHRA 的“多条件同时比较”不同，MUSHRA-1S 在每次测试中只呈现一个待测条件，同时给出隐藏参考和锚点。锚点由 Opus 6 kbps 处理得到，参考为原始信号，二者均重采样至 24 kHz。该设计的动机有三：其一，单条件呈现使测试可扩展至大量条件，因为多个独立测试的结果可以合并分析，而传统 MUSHRA 无法在一次测试中容纳 17 个条件；其二，MUSHRA-1S 的评分刻度比 ACR 的 5 级 MOS 更细，能分辨高质量区间内的细微差异；其三，测试在 24 kHz 下进行，与主流神经编解码器的内部采样率对齐。最终，每个文件平均获得约 7 次有效投票，产生 0–100 的连续主观分数。该模块的输出是 1700 个主观 MUSHRA-1S 分数，以及三个质量区间划分——低（0–50）、中（50–75）、高（75–100），用于后续分层分析。

**模块三：客观指标计算——VERSA 工具包。** 客观指标的统一计算依赖 VERSA 工具包，它集成了 45 种指标，涵盖传统信号处理指标（如 PESQ、POLQA、WARPQ）与神经网络指标（如 UTMOS、ScoreQ、DNSMOS 等），并区分为有参考（intrusive）与无参考（non-intrusive）两类。对于有参考指标，模块将参考信号重采样至对应编解码器的采样率，以保证参考与处理信号在相同时间网格上比较；无参考指标则直接处理待测信号。每个指标对全部 1700 个样本逐一打分，输出与该指标同维度的客观分数向量。VERSA 工具包提供了统一调用接口，避免不同指标因实现差异引入偏差。该模块的输出是 45 个长度为 1700 的客观分数向量。

**模块四：相关性与可靠性分析。** 对每个客观指标，将其 1700 个客观分数与主观分数配对，计算三种关联度：Pearson 相关系数衡量线性关联；Spearman 相关系数对两组分数分别排序后计算 Pearson，用于捕捉单调（不必线性）的趋势，且对异常值更稳健；Kendall 相关系数通过比较所有样本对的一致/不一致关系，给出非参数的概率化关联强度，并擅长处理并列秩次。三种系数从不同角度刻画指标与主观听感的吻合度，避免单一测度的偏差。该模块进一步输出按质量区间分层的散点图（如图 3），用于识别指标在高分段的饱和现象——即非侵入式指标在主观分较高时趋于给出接近常数的分数。此外，模块还通过随机子集取样分析置信区间随样本量的变化，用以指导实际评估时需要多少测试文件才能获得稳定的指标均值。

在数据流上，模块一生成的 1700 个处理信号被同时传递给模块二和模块三，二者互不依赖；模块二产生主观分数后，模块三的客观分数与之一同进入模块四进行统计关联。这一解耦设计使得替换任意组成部分（如更换指标集合或主观测试方法）都不会影响流水线的其余环节，从而保证了评估框架的可扩展性与可复现性。关键设计选择包括：采用 MUSHRA-1S 而非 ACR 以提升高分区分辨力；选择 0.9–8 kbps 的比特率跨度以覆盖尽可能宽的 MUSHRA 区间；同时报告三种相关系数以交叉验证；以及将信号采样率对齐作为客观计算的前置步骤，以避免采样率不匹配对指标结果的干扰。整个方法框架并未引入新的架构图，其流程由上述模块的文字描述和实验设置充分刻画。

### 💡 核心创新点

1. 首个大规模、统一的神经编解码器客观指标基准：据作者所述，现有比较（如文献 [20, 22]）在客观指标数量和编解码器条件数量上均受限，而本文用 45 个指标 × 17 个编码器条件形成跨越传统信号处理指标与神经网络指标的横向对比，覆盖了超低比特率（约 1 kbps）与低比特率（约 6 kbps）两档工作点。
2. 将 MUSHRA-1S 引入神经编解码器的指标可信度评估：该单条件主观测试方法允许合并多个独立测试的结果，从而支撑 17 个条件的众包评估，并在 24 kHz 下与主流神经编解码器采样率对齐。
3. 揭示非侵入式 MOS 训练指标在高主观质量区间的饱和模式：scoreq_nr、audiobox_aesthetics_ce、sheet_ssqa、utmos 等高分段输出近乎恒定，导致排序能力下降；论文将该现象归因于 ACR/MOS 训练目标在高质量端退化为难以区分的标签（论文原文 "We hypothesize that the saturation is caused by MOS-based training objectives"），但也同时提出了另一解读——高 MUSHRA 区间内的编码器"质量差异"可能并非真实质量差异，而是与参考信号的非质量退化差异。该发现直接指向 MOS 训练框架的刻度盲区，对非侵入式指标的设计有参考价值。
4. 可操作的条件相关性能图谱：按 MUSHRA 区间给出指标推荐（低-中质量用 scoreq、utmos、audiobox_aesthetics_ce、sheet_ssqa；高质量用 scoreq_ref），并给出置信区间随样本量的变化规律——低/中质量编码器的均值在 10 到 20/30 样本间存在跳跃，提示此类条件下应使用更多样本，最终样本量应依据所需置信区间宽度与显著性检验确定。

### 📊 实验结果

原文结果部分没有直接给出独立的 Markdown 数值表；下表根据原文 Figure 1 的指标顺序和 Section 4 文字中的明确数值整理。所有相关系数均为与主观 MUSHRA-1S 分数之间的绝对 Pearson 相关系数；数据集统一为 LRAC Track 1 干净语音测试集（100 条语音 × 17 个编解码器条件 = 1700 个数据点）。原文未给出的具体数值一律标注为“论文未给出具体数值”。

| 模型名称 | 数据集 | 指标 | 数值 |
|---|---|---|---|
| `srmr` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `sigmos_loud` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `se_sdr` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `se_sar` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `se_si_snr` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `f0corr` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `se_ci_sdr` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `f0rmse` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `sigmos_disc` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `sigmos_col` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `sigmos_reverb` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `audiobox aesthetics_pc` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `mcd` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `dns_p808` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `dns_overall` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `sigmos_sig` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `sigmos_ovrl` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `plcmos` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `torch_squimmos` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `nisqanoi_pred` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `noresqa_score` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `nisqadis_pred` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `torch_squimstoi` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `nisqaloud_pred` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `nisqamos_pred` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `spk_similarity` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `wvmos` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `speech_token distance` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `utmosv2` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `speech_bleu` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `torch_squim pesq` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `nisqa col_pred` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `stoi` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `pesq` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 0.73 |
| `torch_squim si_sdr` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `warpq` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 0.73 |
| `speech_bert` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `audioboxaesthetics_cu` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `audioboxaesthetics_pq` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 论文未给出具体数值 |
| `audioboxaesthetics_ce` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 0.80 |
| `sheet_ssqa` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 0.81 |
| `scoreq_nr` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 0.81 |
| `utmos` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 0.82 |
| `nomad` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 0.83 |
| `scoreq_ref` | LRAC Track 1 干净语音（100条×17条件=1700样本） | 绝对 Pearson | 0.87 |

**编解码器条件（论文 Table 1）**

| 编码器 | 比特率 (kbps) | 模型采样率 (kHz) | 年份 |
|---|---|---|---|
| Audiodec [10] | 6.4 | 24 | 2023 |
| BigCodec [18] | 1.0 | 16 | 2024 |
| DAC [12] | 1.3, 5.3, 8.0 | 24 | 2023 |
| DAC Tiny* [13] | 8.0 | 16 | 2024 |
| DualCodec** [16] | 0.9 | 24 | 2025 |
| Encodec [11] | 1.5, 6.0 | 24 | 2022 |
| ESC [13] | 1.5, 6.0 | 16 | 2024 |
| Internal Codec*** | 1.0, 6.0 | 16 | 2024 |
| Mimi [19] | 1.1 | 24 | 2024 |
| Semanticodec [15] | 1.4 | 16 | 2024 |
| SNAC [14] | 1.0 | 24 | 2024 |
| StableCodec [17] | 1.0 | 16 | 2024 |

脚注：* DAC Tiny 是 DAC 系列的轻量 16 kHz 变体，由 ESC 团队发布 [13]；** DualCodec 帧率为 12.5 Hz，版本 v1；*** Internal Codec 为内部音频编解码器，用于改善 MUSHRA 评分尺度的覆盖。

**关键结论**

下图展示了八个代表性客观指标的条件级平均客观分与主观 MUSHRA-1S 分的对应关系，可用来直观比较不同指标对神经编解码器质量的刻画能力。

![Fig. 3: Condition-wise plot of average objective vs. subjective scores (merged MUSHRA-1S) with 95 % confidence intervals (based on 100 files per condition) and…](https://arxiv.org/html/2509.24457/x1.png)

从图中可见，侵入式指标 scoreq_ref 的散点最接近对角趋势且 R² 最高，而 scoreq_nr、audiobox_aesthetics_ce、sheet_ssqa 与 utmos 在高 MUSHRA 区间出现明显的水平聚集，反映了非侵入式 MOS 训练指标在高分段的饱和现象。


- 最弱相关集中在混响相关指标（`srmr`、`sigmos_reverb`）、F0 误差指标（`f0corr`、`f0rmse`）和波形匹配指标（`se_sdr`、`se_sar`、`se_si_snr`）。这与神经编解码器生成式、非波形保持的特性一致。
- 中档表现出现在 `torch_squim`、`sigmos_sig`、`nisqa` 和 `wvmos` 等指标中。
- 最高 Pearson 相关由 `scoreq_ref`（0.87）、`nomad`（0.83）、`scoreq_nr`（0.81）、`audioboxaesthetics_ce`（0.80）、`sheet_ssqa`（0.81）和 `utmos`（0.82）获得。所有 Pearson 相关高于 0.8 的指标均为基于神经网络的指标。经典基线中 `warpq` 和 `pesq` 表现最好，绝对 Pearson 相关均为 0.73。
- `scoreq_ref` 在 Pearson、Spearman 和 Kendall 三种相关性上均取得最高值。对于 `scoreq_ref` 和 `nomad` 这类侵入式强相关指标，三种相关性对方法排序基本一致；而最佳非侵入式指标（`utmos`、`scoreq_nr`）的 Spearman 和 Kendall 系数明显小于 Pearson 系数，说明其排序能力存在不足。
- 非侵入式、基于 MOS 训练的指标在高主观质量段出现饱和：`scoreq_nr`、`audioboxaesthetics_ce`、`sheet_ssqa`、`utmos` 在高 MUSHRA 范围内给出几乎恒定的分数，而侵入式指标如 `scoreq_ref`、`pesq`、`warpq` 近似线性。原文也给出了另一种解读：“it is arguable whether codecs with such high MUSHRA scores have quality differences, or if the intrusive objective metrics and the MUSHRA-1S tests evaluate non-quality-degrading differences to the reference signal.”
- 观察到了 `utmosv2` 的 run-to-run 变异性，可能源于其内部随机帧选择（当前 VERSA 中未暴露该参数）。在 utmos 家族中，`utmos` 一致优于 `utmosv2`。图 3 未报告 `nomad`，因为 scoreq 与 nomad 非常相似。
- 置信区间分析中，`scoreq_ref` 与 `scoreq_nr` 在高（DAC-8kbps）、中（Semanticodec-1.4kbps）、低（Encodec-1.5kbps）质量条件下的置信区间均随样本量增加而减小；侵入式指标的置信区间整体更小，参考信号具有稳定分数的作用。低/中质量编解码器在样本量从 10 增至 20/30 时均值出现跳变，提示此类条件需要更多样本。
- 在低/中 MUSHRA 范围，所有指标都将一定主观分数范围映射为近常数：`sheet_ssqa` 映射的最小主观范围约为 10 个 MUSHRA 点，`pesq` 最宽约为 35 个 MUSHRA 点。
- 实用建议：低到中等质量条件下推荐使用 `scoreq`、`utmos`、`audioboxaesthetics_ce` 和 `sheet_ssqa`；高质量条件下推荐使用侵入式指标如 `scoreq_ref`。

### 🔬 细节详述

- **主观测试细节**：MUSHRA-1S 的锚点和参考均按 24 kHz 采样，锚点由 Opus 6 kbps 处理得到；每个文件平均约 7 次有效投票，依据文献 [23] 的建议确定。测试通过众包方式完成，论文未披露平台与被试筛选细节。
- **客观指标配置**：使用 VERSA 工具包统一计算 45 个指标；侵入式指标将参考重采样到编码器采样率，论文未披露 VERSA 内置的指标实现版本以及 UTMOS、ScoreQ 内部随机种子的固定方式。
- **训练数据**：论文未涉及模型训练，仅使用 LRAC 挑战赛（https://lrac.short.gy）Track 1 盲测集中的 100 条干净语音作为评测语料。
- **统计口径**：Pearson、Spearman、Kendall 三种相关系数均基于 1700 个数据点；图 1 指标顺序按 Pearson 相关升序排列；三种相关性的具体数值除少数在文字中明确外（pesq 0.73、warpq 0.73、audiobox_aesthetics_ce 0.80、sheet_ssqa 0.81、scoreq_nr 0.81、utmos 0.82、nomad 0.83、scoreq_ref 0.87），其余在图 1 中未用数字标注。
- **质量区间定义**：MUSHRA-1S 得分 [0, 50] 为低质量、[50, 75] 为中等质量、[75, 100] 为高质量。
- **采样率差异处理**：表 1 中 16 个编码器的模型采样率为 16 kHz 或 24 kHz，主观测试统一在 24 kHz 下进行，客观指标按编码器采样率对齐参考信号。
- **图 3 可视化细节**：红色椭圆标记主客观得分均高的编码器，绿色椭圆标记客观得分几乎一致但主观分布很宽的条件；圆形标记约 1 kbps 的超低比特率条件，方形标记约 6 kbps 的低比特率条件；I/NI 分别标注侵入式与非侵入式指标。
- **实验环境与硬件**：论文未披露众包测试平台、耳机校准方式、播放设备列表及被试样本人群分布；也未说明 45 个指标计算所需的 GPU/CPU 环境。
- **时间信息**：论文投稿/发表时间未直接披露；所提 arXiv 编号为 2509.24457。

下图给出了 scoreq_ref 与 scoreq_nr 在高中低三种编码器质量条件下随样本量变化的均值与置信区间。

![Fig. 2: Mean and confidence intervals of two selected objective metrics over a subset of audio files for a high-, medium-, and low-quality codec condition.](https://arxiv.org/html/2509.24457/conf_conv.png)

图中可见，侵入式 scoreq_ref 的置信区间整体更窄且随样本量增大稳定收缩，而低/中质量条件在样本量较小时均值波动更大，提示评测这些条件时需要更多样本才能获得稳定的客观估计。

### ⚖️ 评分理由

*   创新性 (1.2/2)：基于 A_METHOD 与 A_RESULTS，将 MUSHRA-1S 与 45 个指标×17 编解码器条件结合，构建了迄今较大规模的神经编解码器主客观关联基准，并发现非侵入式 MOS 指标高分段饱和现象；但主要是既有指标与新评测流程的组合，未提出新算法或理论，因此创新为增量式。

*   技术严谨性 (1.0/1.5)：A_METHOD 的流水线形式化清楚，三种相关性交叉验证合理；但 A_LIMITS(e) 显示高分段饱和归因于 MOS 训练目标只是推测，未用训练标签分布直接验证，且作者承认侵入式指标可能测的是非质量退化差异，使因果解释的严谨性受限。

*   实验充分性 (1.0/1.5)：A_RESULTS 给出 1700 数据点和 45 指标覆盖，规模较充分；但 A_LIMITS(a)(d) 显示未做指标间差异的显著性检验、未修正 100 文件重复用于 17 条件的非独立性，且仅覆盖干净语音单一语料库，缺少噪声/混响等泛化验证，故证据不足以支撑稳健排序。

*   清晰度 (0.7/1)：A_METHOD 对信号、条件和四模块流程有形式化定义，整体可读；但 A_RESULTS 说明图 1 除少数外未标注具体数值，原文也未提供独立数值表，读者难以核对 45 个指标的完整排序与差异，图表表达不够自足。

*   影响力 (1.0/1.5)：A_SUMMARY 与 A_RESULTS 给出 scoreq_ref 0.87、warpq/pesq 0.73 等明确排序和低-中/高区间选型建议，能直接服务语音/音频社区的质量评估实践，属于有实用影响的领域内基准，影响力中等。

*   开源 (0.0/1.5)：A_OPEN 显示论文未提供代码仓库、主观评分数据、测试文件清单或评估脚本，唯一链接只是第三方 LRAC 挑战赛，核心基准产物未开放且无未来开放承诺，按固定锚点记 0。

*   可复现性 (0.1/0.5)：A_METHOD 与 A_OPEN 披露了 MUSHRA-1S 与 VERSA 的总体流程，但未说明众包平台、听者筛选与剔除标准、VERSA 指标版本、UTMOS/ScoreQ 内部随机种子等关键配置，按 A_OPEN 判断复现步骤关键配置大量缺失。

*   工程/实践价值 (1.0/1.5)：A_RESULTS 给出按低-中/高质量分档的指标推荐（如低中质量用 scoreq/utmos/audiobox_aesthetics_ce/sheet_ssqa，高质量用 scoreq_ref），并报告样本量-置信区间关系，便于工程选型；但 A_LIMITS(f) 未把相关系数转化为绝对误差或选型成本收益，实践指导仍偏定性。

### 🚨 局限与问题

1. 论文明确承认的局限：
   - 作者在结论中指出未来工作将分析噪声和混响对客观指标的影响，即承认当前工作仅覆盖干净语音。
   - utmosv2 存在 run-to-run 变异性（可能源于未在 VERSA 中暴露的内部随机帧选择），影响其作为评测指标的可信度。
   - 非侵入式指标高分段饱和构成其应用边界（论文据此建议高质量区间改用侵入式指标）。
   - 论文同时提出一个容易被忽视的替代解释：高 MUSHRA 分的编解码器之间可能并不存在可感知的质量差异，侵入式指标与 MUSHRA-1S 的近似线性关系可能只是在评估与质量退化无关的“与参考信号的差异”。若该解释成立，则“非侵入式指标高分段饱和”未必是缺陷。
2. 审稿人发现的潜在问题：
   (a) 未报告指标间相关系数差异的统计显著性，也未对 1700 个数据点的非独立性做任何修正（同一 100 个文件在 17 个条件下重复使用），0.80 与 0.82 的排名差距很可能在噪声范围内；
   (b) MUSHRA-1S 众包测试缺少关键质量报告：被试总数、每条件被试分配、异常被试剔除标准均未说明，直接影响主观标签的可信度；
   (c) 未提供任何指标分数与主观分数之间的校准曲线/绝对误差示例，读者无法判断 0.87 的相关性对应多大的绝对预测误差；
   (d) 100 个评测文件全部来自 LRAC 单一数据集，该盲测集在说话人构成、录音设备、语言/口音上的潜在偏倚未被讨论；
   (e) “非侵入式指标饱和归因于 MOS 训练目标”是推测而非验证，缺少对不同训练目标的指标（如 scoreq_nr 与 utmos）饱和位置差异的定量分析；
   (f) 论文未回答工程上“牺牲多少客观误差换取排序正确率”的问题——相关系数本身不足以直接指导实际选型决策。

---

[← 返回 2026-08-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-06/)
