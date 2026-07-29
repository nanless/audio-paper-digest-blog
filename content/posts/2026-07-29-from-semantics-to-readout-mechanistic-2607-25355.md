---
title: "From Semantics to Readout: Mechanistic Understanding of Audio Tokens after Fine-Tuning for Temporal Audio Grounding"
date: 2026-07-29
draft: false
tags: [参数高效微调, 音频理解, Transformer, 模型评估]
categories: [论文速递]
description: "音频理解 | 5.1/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2607.25355"
---

# 📄 From Semantics to Readout: Mechanistic Understanding of Audio Tokens after Fine-Tuning for Temporal Audio Grounding

标签：#参数高效微调 #音频理解 #Transformer #模型评估

**5.1/10** | 创新 1/2 | 严谨 1.1/1.5 | 实验 0.8/1.5 | 清晰 0.8/1 | 影响 0.5/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 0.6/1.5

📝 **5.1/10** | 后50% | 文档类型：方法研究 | 评分置信度：高 | #音频理解 | #LoRA | #参数高效微调 #Transformer | [arxiv](https://arxiv.org/abs/2607.25355)


### 👥 作者与机构

- 第一作者：Yujian Ma（未说明）
- 通讯作者：Jinqiu Sang（未说明）、Ruizhe Li（未说明）
- 作者列表：Yujian Ma（未说明）、Jinqiu Sang（未说明）、Ruizhe Li（未说明）、Jiaao Yu（未说明）、Ang Li（未说明）

### 💡 毒舌点评

这篇论文把“微调让解码器更会读音频 token 已有证据”这个直觉拆解成了一套规矩的分析流水线，交叉 checkpoint 的交换实验把收益归因到解码器端，干净利落。但故事走到最后依然是“base 模型原本就有，微调只是改善读出”，结论并不出人意料。实验绑死在自建的小数据集和 LoRA 一种策略上，既没跨域验证也没碰全参微调，这让它的“机制理解”看起来更像单点观察而非稳健结论。

### 📌 核心摘要

本文以大音频语言模型（LALM）在时间音频定位任务上的微调为诊断场景，系统性分析了原生音频 token 在语义、解码器可读性及时间输出对齐方面的内部变化。作者以 Qwen2.5-Omni 为主模型，在自建的 AudioGrounding-QA 数据集上用 LoRA 仅微调语言模型部分，并对 base 与 fine-tuned checkpoint 实施四类诊断探测：(1) 查询条件语义分析，(2) 校准 token 读出，(3) 时间窗口探针，(4) 残差差分擦除。核心结论是：微调前模型中已存在潜在事件证据且时序位置稳定；微调主要通过解码器端适应提升已有证据的可读性，而非新建证据；微调强化了预测时间支撑与语义证据的一致性；预测窗口内残差更新对时间戳生成有功能贡献。Qwen2-Audio 上的验证表明可读性提升和预测对齐改善具有跨架构可重复性，但分层集中度依赖模型本身。该工作最终将微调作用归纳为“从语义到读出”的路线。

### 🔗 开源详情

- 代码：论文中未提及代码仓库或任何形式的代码链接。
- 模型权重：论文未提供微调后检查点的下载链接。基座模型 Qwen2.5-Omni-7B 和 Qwen2-Audio-7B-Instruct 为已有开源模型，但论文未直接给出其 HuggingFace/ModelScope 链接。
- 数据集：自建的 AudioGrounding-QA 数据集未提供下载链接。原始 AudioGrounding 语料为公开数据，但论文未给出直接获取地址。
- Demo：未提及。
- 复现材料：论文附录中提供了部分实现细节（训练配置、提示词、评估方法等），但未提供配置文件、检查点或复现脚本。

### 🏗️ 方法概述和架构

论文并不提出新的模型结构，而是围绕时间音频定位微调，搭建了一套分析宏观比对框架来考察音频 token 在模型内部的生命史。整体流程为：选定 Qwen2.5-Omni-7B 作为主分析模型（Qwen2-Audio-7B-Instruct 用于跨架构验证），在自建的 AudioGrounding-QA 数据集上采用 LoRA 微调语言模型的 Transformer 块，保持音频编码器和多模态投影器冻结不变。微调前后，抽取每层音频 token 隐状态实施四种诊断探测，构成逐步收束证据链。

论文提出的分析框架旨在系统地追踪音频token从语义表征到模型读出的全过程，如下图所示。

![Figure 1: Overview of the core audio-token semantics-to-readout analysis pipeline. (1) LALM forward pass: the audio clip and question qq form a mixed audio-text sequence, from which we extract layerwise audio-token states hℓa​(i)h_{\\ell}^{a](https://arxiv.org/html/2607.25355v1/x1.png)

下图展示了分析流程的三个主要阶段：(1) 在LALM前向传播中提取音频token状态；(2) 构建查询条件语义库并计算对齐分数；(3) 通过校准读出实验评估解码器可读性。


第一个诊断是“查询条件 token 语义”。该诊断在每层构建事件短语语义库。语义库源自数据集中标准事件表达式，将其通过 LALM 文本通路编码得到每 token 的上下文隐状态 \(b_{\ell,j}\)，作为语义参考点。对特定问题 \(q\) 中的目标事件短语 \(e(q)\)，采用多级匹配级联检索语义库子集 \(\mathcal{M}_{\ell}(q)\)：精确匹配、包含匹配和 token 重叠匹配。对匹配到的隐状态取归一化均值，得到查询条件语义向量 \(z_{\ell}(q)=\mathrm{norm}\!\left(\frac{1}{|\mathcal{M}_{\ell}(q)|}\sum b_{\ell,j}\right)\)。计算各音频 token 状态 \(h_{\ell}^{a}(i)\) 与该向量的余弦相似度，作为目标事件对齐得分 \(s_{\ell}(i,q)=\cos\!\left(h_{\ell}^{a}(i),z_{\ell}(q)\right)\)，取前 \(M=20\) 个最高分 token 构成高对齐集 \(\mathcal{H}_{\ell}(q)\)。该诊断测量的是表征空间中每层查询与音频的对齐程度。

第二个诊断是“校准 token 读出”。构建一个含占位符 `[PATCH]` 的诊断提示，在层 \(\ell\) 将某个源音频 token 隐状态 \(h_{\ell}^{a}(i)\) 替换到占位符位置，让解码器继续生成事件描述文本，得到 \(d_{\ell,i}^{\mathrm{patch}}\)。同时不经 patch 解码基线 \(d^{\mathrm{no\text{-}patch}}\)。用 Sentence-BERT 将 patch 输出、无 patch 输出和真实事件短语 \(e(q)\) 分别编码为 \(\mathbf{v}_{\ell,i}^{\mathrm{patch}}\)、\(\mathbf{v}^{\mathrm{no\text{-}patch}}\) 和 \(\mathbf{v}_{q}\)，定义校准读出增益为 \(\Delta_{\mathrm{readout}}(\ell,i)=\cos(\mathbf{v}_{\ell,i}^{\mathrm{patch}},\mathbf{v}_{q})-\cos(\mathbf{v}^{\mathrm{no\text{-}patch}},\mathbf{v}_{q})\)。该诊断评估解码器能否从单个 token 隐状态中解码出目标事件语义。

第三个诊断是“输出端时间探针”。冻结音频 token 状态，为每层训练 \(L2\) 正则化的逻辑回归分类器，判断 token 是否属于某个时间窗口。使用两类标签：真实标注窗口 \(W^{\star}\) 和模型自身预测的时间窗口 \(\widehat{W}\)。给定音频 token \(i\) 的近似时间段 \(\omega_i\)，标签为 \(\mathbf{1}[\omega_i \cap W \neq \emptyset]\)。探针仅接触音频 token 隐状态，不输入事件短语或查询向量。该诊断测量标注窗口的线性可恢复性和预测窗口的输出一致性。

第四个诊断是“残差差分擦除”。在原始生成上下文中，选定一层（如 L16）将属于模型预测时间窗口的音频 token 位置的层输出替换为该层输入（即删除该层的残差更新），并与等量随机 token 位置的擦除效果对比。计算时间戳 IoU 下降超过 0.05 的实例比例作为退化率，直接度量预测窗口内残差更新的功能贡献。

这四类诊断从表征对齐、解码器可读性、输出一致性和生成时刻功能作用四个递进层级，逐一回答四个研究问题。

### 💡 核心创新点

1. 提出“从语义到读出”的分层分析框架，将时间定位微调对原生音频 token 的影响拆解为事件语义表征的存在性、解码器可读性（readout）和输出对齐三个递进层级，超越了仅观察端到端指标的惯例。
2. 设计跨 checkpoint 交换实验（来自 base 或 fine-tuned 的 patched state × 来自 base 或 fine-tuned 的 downstream decoder），清晰地将读出增益的改善归因到解码器端适应，分离了中间状态变化的影响，这一归因在音频 token 可解释性文献中较为少见。
3. 将预测窗口内的残差差分擦除与时间探针结合，从功能干预的角度证明了预测窗口内的残差更新对时间戳生成有直接贡献，证据强于仅靠线性探测或只读分析。

### 📊 实验结果

**时间定位性能**：在 AudioGrounding-QA 测试集（992 实例）上，Qwen2.5-Omni 经微调后 mIoU 从 0.3707 升至 0.6817，F1 从 0.4416 升至 0.7626，R@0.7 从 0.2349 升至 0.5817。Qwen2-Audio 从 mIoU 0.3653 升至 0.6199，F1 从 0.4667 升至 0.7195。完整数据如下表。

| 模型 | mIoU | F1 | R@0.5 | R@0.7 | R@0.9 |
|------|------|----|-------|-------|-------|
| Qwen2.5-Omni base | 0.3707 | 0.4416 | 0.3377 | 0.2349 | 0.1542 |
| Qwen2.5-Omni FT | 0.6817 | 0.7626 | 0.7399 | 0.5817 | 0.3286 |
| Qwen2-Audio base | 0.3653 | 0.4667 | 0.2873 | 0.1704 | 0.0927 |
| Qwen2-Audio FT | 0.6199 | 0.7195 | 0.6714 | 0.4556 | 0.2157 |

**语义分析**（主要结果见论文图 2）：微调后 Top-20 查询对齐 token 与模型预测窗口的重叠比例在末层提升约 11–13 个百分点，而与标注窗口的重叠提升微弱甚至为负。语义得分在预测支撑区域内外的分离度更高，表明模型内部语义证据与自身预测输出更一致。代表性案例显示高得分 token 的时间位置在跨 checkpoint 下高度稳定（Wasserstein-1 时间差异仅 0.239 s），但语义相似度得分出现明显变动，体现语义分数重校准而非时间再定位。

语义分析揭示了微调后模型内部语义证据与自身预测输出一致性更强，下图展示了主要的定量和定性结果。

![Figure 2: Audio-token semantics analysis. (a1) Top-20 overlap with annotated and predicted temporal support. (a2) Inside–outside support score separation. (a3) Layerwise fine-tuning gains. (b) A representative Top-20 token case; W1W_{1} qua](https://arxiv.org/html/2607.25355v1/x2.png)

下图(a)显示，微调后Top-20对齐token与预测窗口的重叠比例（红色线）提升显著，而与标注窗口的重叠（蓝色线）变化微弱。图(b)的代表性案例则表明，高得分token的时间位置在base和微调模型间高度稳定。


**读出分析**（主要结果见论文图 3 和表 3）：微调后校准读出增益在浅中层显著提升，正增益 token 比例增加，高增益 token 集中度上升。跨 checkpoint 交换实验以解码器交换为主因：L1–L10 层解码器交换平均增益变化为 \(+0.0929\)，而 patched state 交换几乎无影响（\(-0.0020\)），95% 置信区间不重叠（\(\pm 0.0224\)）。该优势延续至 L24，接近输出层的 L25–L28 效应衰减至零。这强烈表明早期与中层读出提升来自解码器端适应而非中间状态变化。

在读出分析中，微调显著提升了模型从音频token中解码事件语义的能力，下图展示了具体的增益分布和token级响应。

![Figure 3: Audio-token readout analysis. (a1) Mean calibrated readout gain for base and fine-tuned models. (a2) Percentage of tokens with positive gain. (a3) Fine-tuned Top-kk gain among highest-gain tokens. (b) Token-level readout heatmaps](https://arxiv.org/html/2607.25355v1/Figures/patchscope_300dpi.png)

下图(a)表明，微调后（红色）在校准读出增益的各项指标上均优于base模型（蓝色），且优势主要集中在浅中层。图(b)的热图则直观显示，微调模型在特定token上产生了更强且更集中的正增益。


**输出探针与擦除**（基于 100 个微调后 Qwen2.5-Omni 测试实例）：标注窗口探针 AUROC 在 base 和微调 checkpoint 均高于随机且曲线形状相似，说明标注窗口可恢复性微调前后相当。预测窗口探针在 base 接近随机，微调后大幅提升。残差擦除在 L16 时，预测窗口擦除导致 39.0% 的实例 IoU 下降超过 0.05，随机擦除仅 13.0%，差距 26.0 个百分点（95% CI: [15.0, 36.0]）。附录中的位置仅控实验表明 AUROC 接近随机，排除了 token 顺序本身驱动分离的可能。

输出端的时间探针和残差擦除实验进一步证实了微调增强了模型预测窗口的功能贡献，下图呈现了相关诊断指标的层级分布。

![Figure 4: Output-facing temporal diagnostics. (a1,a2) Layerwise AUROC for membership in annotated and checkpoint-predicted windows; dashed lines mark chance. (b1,b2) Residual-delta erasure compares predicted-window and size-matched random u](https://arxiv.org/html/2607.25355v1/x3.png)

下图(a2)显示，微调后模型对自身预测窗口的线性可探测性（红色）大幅提高。图(b2)则表明，在L16层擦除预测窗口内的残差更新，其导致的性能退化率（红色）显著高于随机擦除（灰色）。


**跨模型验证**（Qwen2-Audio）：语义分析中预测窗口 Top-20 重叠在全 28 层均提升，平均 +10.11 个百分点；时间探针上预测窗口探针提升幅度高于标注窗口探针；读出分析中 Top-5 高响应 token 增益平均 +0.0347，在 24/28 层为正，证实可读性提升和输出对齐改善的跨架构稳健性，但层间分布存在模型依赖。

### 🔬 细节详述

- **训练数据**：AudioGrounding-QA，从公开 AudioGrounding 语料（基于 AudioCaps/AudioSet）通过模板转换为 QA 格式来构建，总计 11,586 实例（训练 9,542 / 验证 1,052 / 测试 992），平均每音频 2.49 个问题，平均 1.67 个标注片段，平均覆盖时长约 5 秒。划分遵循原始 AudioGrounding 分割协议。
- **损失函数**：时间定位微调使用交叉熵损失，无额外正则或加权说明。
- **训练策略**：LoRA 仅适配语言模型 Transformer 块，音频塔和投影器冻结。具体 LoRA 秩、alpha、dropout 以及学习率、batch size、优化器、warmup 步数、训练步数等超参数在附录 D 中有详细说明，主文中未具体列出。
- **关键超参数**：Qwen2.5-Omni-7B 共 28 层 Thinker 层。语义诊断 Top \(M=20\)；残差擦除主实验在 L16 进行，退化判定阈值为 IoU 下降 \(> 0.05\)；探针使用 \(L2\) 正则化逻辑回归。
- **训练硬件**：附录中提及，主文未说明。
- **推理/评估细节**：读出采用确定性解码；时间戳评估使用 mIoU、F1（时间级）和 Recall@多阈值；残差擦除在所选层将输出替换为输入，不修改其余层；未说明温度或 beam search 等参数。

### ⚖️ 评分理由

*   创新性 (1.0/2)：提出从语义到读出的分层分析框架，将时间定位微调对原生音频 token 的影响拆解为事件语义存在性、解码器可读性和输出对齐三个递进层级；设计跨 checkpoint 交换实验将读出增益归因于解码器端适应，而非中间状态变化；并将残差擦除干预与时间探针结合，从功能角度证明预测窗口内残差更新对时间戳生成的直接贡献（[A_SUMMARY],[A_METHOD]）。

*   技术严谨性 (1.1/1.5)：方法设计合理，四类诊断构成逐步收束的证据链，校准读出增益和跨 checkpoint 交换实验提供了清晰的归因逻辑；残差擦除干预在原始生成上下文中直接度量功能贡献，位置仅控实验排除 token 顺序混淆（[A_METHOD],[A_RESULTS]）。

*   实验充分性 (0.8/1.5)：实验在 AudioGrounding-QA 数据集上对两种架构进行诊断，包含语义得分分布、读出增益层间曲线、探针 AUROC 和残差擦除退化率，并提供置信区间和位置仅控实验，跨模型验证（Qwen2-Audio）增强了稳健性（[A_RESULTS]）。但实验完全依赖自建单域数据集，未在音乐、工业监测等跨域场景验证；匹配级联的敏感性未做消融；读出提示模板仅一种，未探索不同措辞影响；仅研究 LoRA 微调，未涉及全参数微调；残差擦除仅选择 L16 层，缺乏系统层间对比；base 模型基座性能过低可能影响归因模式的泛化性（[A_LIMITS]）。

*   清晰度 (0.8/1)：整体组织清晰，研究问题明确，诊断流程配有示意图和分层描述，实验指标和统计检验说明充分；但部分关键超参数（如 LoRA 秩、学习率等）和训练硬件仅置于附录，主文未具体列出（[A_METHOD],[A_RESULTS]）。

*   影响力 (0.5/1.5)：工作加深了对大音频语言模型微调内部机制的理解，为音频 token 可解释性提供了系统诊断范例，但核心结论“base 已有证据，微调改善读出”较符合直觉，突破性有限，且未在更广泛任务或实际部署中验证其指导价值（[A_SUMMARY],[A_LIMITS]）。

*   开源 (0.0/1.5)：论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：附录提供了训练配置、提示词和评估方法等较多实现细节，超参数在附录 D 中有说明，使主要训练流程具备一定可复现性；但未发布配置文件、检查点或复现脚本，诊断分析的完整复现仍需自行实现大量代码（[A_OPEN],[S_TAIL]）。

*   工程/实践价值 (0.6/1.5)：分析框架可用于诊断其他 LALM 或微调任务的内部表征变化，对设计更高效的微调策略或理解多模态模型可读性有一定参考价值；但直接工程转化路径不明确，尚不能带来即时的系统性能提升或部署简化（[A_SUMMARY],[A_LIMITS]）。

### 🚨 局限与问题

**论文明确承认的局限**：作者指出残差擦除未识别完整电路（非因果追踪），仅测试了预测窗口内更新对时间戳生成的贡献；语义分析和探针均为线性操作（余弦相似度、逻辑回归），无法捕捉非线性编码关系。同时强调 Qwen2-Audio 层间分布特征的差异，表明结果具有模型依赖性。

**审稿人发现的其他潜在问题**：
- **数据与任务的单点局限**：实验完全依赖 AudioGrounding-QA。该数据集来自 AudioCaps/AudioSet，场景以日常声音为主。未在音乐、工业监测或长时段叙述性音频下验证，机制发现的跨域泛化性存疑。
- **匹配级联的敏感性**：语义库检索依赖“精确—包含—token 重叠”多级匹配，但未对不同匹配级联组合或阈值（如重叠 token 数量下限）做消融。匹配的宽严将直接影响语义向量 \(z_{\ell}(q)\) 的指向精度，从而可能改变对齐得分和 Top-20 重叠度等核心指标的稳定性和结论稳健性。
- **读出提示模板的偏差**：校准读出增益高度依赖诊断提示的措辞（包括 `[PATCH]` 位置和占位符拼写）。论文仅使用一种提示模板，未探索不同提示设计是否会系统性改变读出增益的幅度或层间分布。
- **仅研究 LoRA 微调**：论文的微调均采用 LoRA。LoRA 的低秩适配可能使解码器端的变化受到强正则约束，不一定等同于全参数微调下的内部机制变化。因此，得出的“解码器端适应主导”结论可能部分是 LoRA 适配器特性所致，而非微调任务的本质特征。
- **残差擦除的单一层面**：擦除实验仅选择 L16 为代表性层，未见系统性的多层对比，可能遗漏在其他层中擦除效果更强或模式不同的情况。功能干预的结论若缺乏层级上的梯度分布证据，其解释力会受限。
- **base 与 fine-tuned 性能鸿沟**：base 模型的 mIoU 仅 0.37 左右，处在准随机水平。机制分析发现的“base 已有证据”和“fine-tuned 改善读出行”可能受到 base 阶段性能过低、微调收益空间极大的影响。若从性能更优的起点（如经过指令微调的更强 baseline）开始实验，是否还能观察到同样清晰的归因模式，尚不可知。

---

[← 返回 2026-07-29 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-29/)
