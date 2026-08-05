---
title: "AI-Based Sound Effect Generation: A Narrative Review of Generative Models Across Input Modalities"
date: 2026-08-05
draft: false
tags: [音频生成, 扩散模型, 音频理解, Transformer, 模型评估]
categories: [论文速递]
description: "音频生成 | 6.9/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.03742"
---

# 📄 AI-Based Sound Effect Generation: A Narrative Review of Generative Models Across Input Modalities

标签：#音频生成 #扩散模型 #音频理解 #Transformer #模型评估

**6.9/10** | 创新 0.8/2 | 严谨 1.2/1.5 | 实验 0.6/1.5 | 清晰 0.9/1 | 影响 0.8/1.5 | 开源 1.5/1.5 | 复现 0.3/0.5 | 工程 0.8/1.5

✅ **6.9/10** | 前50% | 文档类型：综述 | 评分置信度：高 | #音频生成 | #扩散模型 | #音频理解 #Transformer | [arxiv](https://arxiv.org/abs/2608.03742v1)


### 👥 作者与机构

- 第一作者：Sandy Abdo（Ontario Tech University, Oshawa, ON, Canada）
- 通讯作者：未说明
- 作者列表：Sandy Abdo（Ontario Tech University）、Bill Kapralos（Ontario Tech University）、Priyamvada Tripathi（Durham College）、KC Collins（Carleton University）、Adam Dubrowski（Ontario Tech University）

### 💡 毒舌点评

这篇综述按照PRISMA流程筛选了30篇论文，并按输入模态进行了分类，提出的模型总结表和指标汇总表对快速入门确有帮助。然而，全文本质上是30篇文献摘要的串联，严重缺乏批判性综合与深度对比，未能提供超越单篇论文的洞察。对于顶会审稿人而言，这种“叙事性”综述的贡献深度远远不够，更像一份文献调研课的优秀期末作业，而非推动领域认知的综合性研究。

### 📌 核心摘要

本文是一篇叙述性文献综述，旨在梳理近五年（2020-2025）基于AI的声音效果生成模型。依据PRISMA流程，作者从Google Scholar、IEEE Xplore和ACM Digital Library中筛选出30篇同行评审论文，并以输入模态为核心分类框架，将模型划分为：文本到音频（11篇）、视觉到音频（13篇）、音频到音频（2篇）和多模态生成（4篇）四大类别。

论文将模型划分为四大输入模态类别，并在正文中给出了视觉到音频（V2A）类别的典型架构与生成流程概览：

![Figure 3: Dominant architectures and synthesis pipelines for V2A generation (n represents the number of studies/works in this group).](https://arxiv.org/html/2608.03742v1/video.png)

下图展示了视频/图像输入如何通过以GAN、RFM和LDM为主的模型架构，生成与视觉内容时间同步的音频，突显了该方向的关键技术挑战。


方法上，论文未提出新模型，而是通过系统检索、筛选、分类和定性分析，揭示了扩散模型（尤其是潜扩散模型LDM）在多类任务中的主流地位。文章对各模型架构、训练数据及评估指标进行了归纳，并通过两个核心表格（Table 1与Table 2）分别总结了30个模型的属性和所有主客观评估指标的定义。

核心观点指出，当前模型在语义对齐和保真度上已达前沿水平，但主要挑战集中在复杂多事件场景下的时间同步、客观指标与人类感知之间的差距，以及可控性与生成多样性之间的权衡这三方面。此外，文章强调了多模态系统与人类-AI协作设计范式的重要性。该综述为领域新人提供了一幅结构化的全景图，尤其是统一整理的模型属性表和评估指标库，可为后续研究者提供便利。其主要局限性在于未对模型进行任何定量元分析或公平的标准化性能对比，且叙述性综述本身存在选择性偏差。

### 🔗 开源详情

-   代码：未提供（本文为综述性质，无原创代码）。
-   模型权重：未提供。
-   数据集：论文分析并引用了多个已有公开数据集（如AudioCaps, Clotho, Audio-alpaca），但仅提供了数据集Audio-alpaca的链接（https://huggingface.co/datasets/declare-lab/audio-alpaca），其余均未给出独立获取链接。
-   Demo：论文中未提及。
-   复现材料：论文中未提及。
-   论文中引用的开源项目：SoftVC（https://github.com/bshall/soft-vc）；Amphion（开源工具包，论文中未给出项目链接）。另提及Atlas.TI（https://atlasti.com）为定性分析工具，非开源项目。

### 🏗️ 方法概述和架构

本文采用系统化的叙述性综述方法，整体流程分为检索、筛选、分类和定性分析四个阶段。

在检索阶段，作者首先定义了核心研究问题：不同输入模态（文本、视觉、音频、多模态）如何影响AI声效生成模型的质量、可控性和上下文相关性。随后，通过组合关键词（如“artificial intelligence”、“text-to-audio”、“sound effect”、“generat*”）在三个数据库中执行搜索，时间跨度为2020年至2025年3月，最终获得初始文献204篇。

筛选阶段遵循PRISMA 2020声明，流程透明且可复现：经过去重、排除非同行评审文献（如arXiv预印本）、摘要筛选（60篇）和全文评估（43篇）后，最终纳入30篇文献。纳入标准严格限定为：近五年内发表的英文同行评审论文，需提出明确的生成式模型且主要输出声音效果，排除了纯语音合成与音乐生成方向。

筛选阶段严格遵循PRISMA 2020声明，其完整流程如下图所示。

![Figure 1: PRISMA flow diagram summarizing the review process.](https://arxiv.org/html/2608.03742v1/prisma_file.png)

下图清晰地展示了从三个数据库中识别出的初始文献如何经过逐步排除，最终筛选出符合标准的30篇核心文献，体现了该综述方法的系统性和透明性。


分类与分析阶段是本文的核心框架。作者并不试图进行统计性元分析，而是将30个模型按输入模态归入四个主题章节。每个章节内部，作者会先以一段总起概括该方向的发展趋势，然后按时间或逻辑顺序逐一介绍各模型。对单个模型的介绍遵循“输入→编码→生成→解码”的范式，重点描述其架构（如AudioLDM的LDM+CLAP、Tango的Flan-T5文本编码、Auffusion的像素VAE跨模态适配）、关键技术创新以及主客观实验结果。

对各模型的介绍遵循统一的范式，下图以文本到音频生成为例，展示了其典型的架构流程。

![Figure 2: Dominant architectures and synthesis pipelines for TTA generation (n represents the number of studies/works in this group).](https://arxiv.org/html/2608.03742v1/text.png)

下图可视化了文本提示经过以LDM为代表的模型架构，生成梅尔频谱图并最终转换为波形的过程，这是该类别中最主流的技术路径。


为了系统化零散信息，作者构建了两个核心表格：Table 1汇总了所有30篇模型的架构、评价指标和关键属性；Table 2则专门整理并定义了FAD、CLAPScore等客观指标和OVL、REL等主观指标，为读者理解评估体系提供了标准参考。最后，讨论部分通过Table 3和架构频次统计图（Figure 2-5），对模型架构的演变趋势（如LDM的主导地位）和各类别的模型数量进行了可视化总结。整个方法的动机在于为不熟悉生成式音频的研究者提供一份高可读性的地图，因此刻意采用叙述性风格而非严苛的系统评价。

### 💡 核心创新点

1.  **以输入模态为核心的系统分类框架**：将声效生成模型统一划分为文本、视觉、音频和多模态四大类，并在此框架下讨论各类模型的架构演进。这种分类视角更贴合实际应用接口（如用户给文字/给视频），有助于读者按自身需求快速定位相关技术。
2.  **构建标准化的模型-指标对照体系**：论文的核心实用贡献在于Table 1和Table 2。Table 1将30篇异质论文的模型架构、所用指标和特性标准化地集中呈现；Table 2则像一个“领域词典”，专门解释所有主客观评估指标。这大幅降低了初学者理解该领域评价体系的壁垒。
3.  **揭示领域发展轨迹与瓶颈**：基于分类，文章系统性地指出了从GAN到扩散模型的架构迁移趋势，并统一归纳出“语义对齐”、“时间同步”和“可控性权衡”这三个跨模态存在的共性挑战，为后续研究划定了明确的问题边界。

### 📊 实验结果

本文作为综述，并未进行独立的模型实验，其核心“结果”体现为对30篇论文的定性综合与汇总。作者通过文字叙述描述了各模型的性能亮点，例如Tango在FAD和KL指标上超越AudioLDM，Tango 2凭借DPO微调在所有指标上优于前代，以及PicoAudio在时间可控性任务上显著超越基线等。关键信息汇总于以下两个主表：

**表 1: 音频生成模型摘要 (源自原论文Table 1，此处为扩充版)**

| 类别 | 模型 | 架构 | 评价指标 | 主要属性 |
| :--- | :--- | :--- | :--- | :--- |
| **文本到音频** | AudioLDM | LDM + CLAP | FD, IS, KL, OVL, REL | 高效、可扩展的高保真音频生成 |
| | Tango | LDM + Flan-T5 + VAE | FAD, KL, FD, OVL, REL | 小数据集上实现高音质和强提示相关性 |
| | AudioLDM2 | LOA + LDM + AudioMAE | CLAPScore, FAD, KL, OVL, REL | 域无关的语义音频表征 |
| | SonifyAR | PbD+ LLM+ audioLDM | 初步可用性评估 | 交互式增强现实音频生成 |
| | Auffusion | Pixel VAE + LDM | FD, FAD, KL, IS, CLAPScore, OVL, REL | 将T2I方法适配于TTA生成 |
| | Tango 2 | Diffusion-DPO + CLAP | FAD, KL, IS, CLAPScore, OVL, REL | 高时间精度与灵活的音频生成 |
| | SRC-gAudio | U-Net + LDM + VAE + HiFi-GAN | FD, KL, IS, FAD, CLAPScore, OGL, REL, AQ | 多采样率训练以提升音频质量 |
| | Re-AudioLDM | Retrieval-Augmented LDM | IS, FAD, KL, CLAPScore | 基于检索的生成，与现实世界声音更一致 |
| | Stable Audio Open | DiT + MLPs | FDopenl3 score, CLAPScore | 开源权重的可扩展音频生成模型 |
| | PicoAudio | U-Net + LDM | MOS, FAD, F1, \(L_{1}^{freq}\) | 细粒度时间可控性 |
| | AudioComposer | LDM + hierarchical diffusion | F1, ACC, MAE, MOS | 层次化语义建模以提升音频质量 |
| **视觉到音频** | V2RA-GAN | GAN | ODG, OSG, 架构评估, 用户调研 | 通过基于回归的建模直接合成波形 |
| | FoleyGAN | BigGAN + 视觉动作识别网络 | Retrieval Accuracy, IS, FID, NDB, 用户调研 | 使用频谱图生成的视觉引导音频合成 |
| | FRIEREN | RFM + VAE + BigVGAN | FD, IS, KL, KID, FAD, Acc, MIS | 基于常微分方程采样的时间对齐音频 |
| | AutoSFX | SAM + 频谱自编码器 + 交叉注意力 | 缺失/冗余/错配声音, 节奏对齐, 声学相似度, 用户调研 | 基于像素级视听特征的自动音效生成 |
| | MIMOSA | 多步骤管线 | Friedman, Wilcoxon, 用户调研 | 面向内容创作者的交互式空间音频生成 |
| | FoleyGen | EnCodec + 视觉编码器 + Transformer 解码器 | FAD, KLD, IB, OVR, REL, 对齐度 | 基于交叉注意力的多模态音频合成 |
| | SonicVisionLM | VLM + 扩散模型 | CLAP-top, Onset Accuracy, AP, Time Accuracy, IoU, IS, MKL, FID | 利用视觉-语言建模进行事件驱动的音频生成 |
| | MaskVAT | Transformer + RVQ codec | FDD, FDM, FAD, 语义对齐, 时间同步 | 用于语义和时间对齐的掩码令牌音频建模 |
| | AV-LDM | MLP + VAE + LDM | FAD, AV-Sync, CLAPScore, 用户调研 | 环境感知的可控音频生成 |
| | Smooth-Foley | Auffusion + CLIP | FAD, MKL, CLIP Score, 用户调研 | 融入帧级特征以提升对齐度 |
| | STA-V2A | LDM TTA | FD, FAD, KL, IS, PAM, CLAPScore, AV, AA, OQ, AQ, SA, TA | 多层级特征精炼以实现时空对齐 |
| | LoVA | 自回归扩散 | FAD, IS, MKL, 音频质量, 语义相关性, 一致性, 总体评价 | 生成长时间连贯且时序一致的音频 |
| | TA-V2A | 多模态方法 + LLM + LDM | IS, FID, FAD, MKL, 对齐度, 语义对齐度, 时间对齐度 | 文本引导的视频到音频生成 |
| **音频到音频** | NoiseBandNet | DDSP滤波器组 + MLP | MRSTFT, FAD, 幅度随机化, 响度迁移, 用户自定义控制 | 用于时变声音合成的滤波器组方法 |
| | CSTs | 混合式创意接口 + GAN | 用户调研 (TA) | 交互式AI辅助声音设计 |
| **多模态** | CoDi | 可组合LDM + 潜空间对齐 | FD, IS, REL | 统一潜空间多模态生成，包含音频 |
| | QueryMintAI | GPT-3.5 Turbo + DALL-E-2 + Whisper v2 + TTS-1 | TtPy, ASPy, HPy, ROUGE, 用户调研 | 面向多功能内容生成的集成式多模态管线 |
| | Amphion | AudioLDM + PicoAudio | FD, IS, KL | 支持文本和音频驱动的开源工具包 |
| | VAMG | GAN + 潜空间对齐 | IS, FID, 分类准确率, 用户调研 | 跨模态对齐的双向音视频生成 |

**表 2: 跨模型评估指标汇总 (源自原论文Table 2)**

| 客观指标 | 缩写 | 衡量内容 | 主观指标 | 缩写 | 衡量内容 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Fréchet Distance | FD / FAD | 音频质量 / 真实度 | Overall Impression | OVL / OVR | 整体质量感知 |
| Inception Score | IS | 多样性与质量 | Audio-Text Relevance | REL | 提示词对齐度 (人评) |
| KL Divergence | KL / KLD | 分布相似度 | Mean Opinion Score | MOS | 自然度评分 |
| CLAP Score | CLAPScore | 文本-音频对齐度 | Audio Quality | AQ / OQ | 声音保真度 (人评) |
| F1 Score | F1 | 时间事件精度 | Semantic Alignment | SA | 内容匹配度 (人评) |
| Fréchet Inception Dist. | FID | 特征级质量 | Temporal Alignment | TA | 时序准确度 (人评) |
| Kernel Inception Dist. | KID | 分布保真度 | AV-Sync | AV-Sync | 音视频同步性 |

### 🔬 细节详述

-   **检索策略**：检索数据库包括Google Scholar， IEEEXplore， ACM Digital Library。检索时间段为2020年1月至2025年3月4日。关键词组合涵盖AI、生成模型、各类输入模态（文本/视觉/音频到音频）和声音效果/设计/生成等。
-   **纳入/排除标准**：纳入近五年内发表的英文同行评审期刊或会议论文，要求论文提出特定的生成式模型，并以声音效果为主要生成目标；明确排除了纯语音合成、纯音乐生成、非同行评审文献、综述以及方法论不清晰的研究。
-   **筛选流程**：严格遵循PRISMA流程图记录。初始检索到204篇文献，经过去除重复和排除非同行评审文献后进行摘要筛选（60篇），再经全文评估（43篇），最终纳入30篇。
-   **分类与分析方法**：完全基于输入模态的定性分类，未使用统计元分析。分析方法主要是文本叙述、表格整理和频次统计（如Table 3和图2-5）。
-   **特定模型细节**：论文在描述个别模型时提及了部分训练数据（如Tango使用AudioCaps，Stable Audio Open使用CC许可数据，Tango 2使用Audio-alpaca数据集）和评估方式（如PicoAudio的10人主观测试），但未进行系统性的汇总。
-   **工具与资源**：文中提及其分析工具Atlas.TI（定性分析软件）、开源数据集Audio-alpaca的链接，以及SoftVC和Amphion等开源项目，但并未提供除Audio-alpaca外的独立资源链接。

### ⚖️ 评分理由

*   创新性 (0.8/2)：提出以输入模态为核心的分类框架和模型-指标对照表（Table 1、2），有助于初学者快速定位技术和理解评估体系。但整体属于叙述性综述，缺乏超越单篇论文的深度批判性综合与新洞见，未能形成新的理论或方法论突破，创新主要体现为整理与归纳。

*   技术严谨性 (1.2/1.5)：论文严格遵循PRISMA 2020声明，检索流程透明可复现，纳入/排除标准明确，分类逻辑自洽，无实质性方法论错误。对30篇文献的架构拆解清晰（例：LDM+CLAP等），技术描述准确。

*   实验充分性 (0.6/1.5)：作为综述，未进行统一基准的定量元分析或标准化性能对比，仅复述各论文的SOTA声称，缺乏跨模型（如自回归、扩散、GAN在时间同步任务上）的公平比较和批判性验证，综合实验证据深度不足。此外，音频到音频和多模态子类论文量过小而未正视其统计效力局限。

*   清晰度 (0.9/1)：论文结构清晰，四类模态章节逻辑分明，Table 1和Table 2以标准化形式汇总异质模型架构及主客观指标，图表使用（Figure 2-5）有效辅助理解，语言流畅，可读性强。

*   影响力 (0.8/1.5)：为刚进入生成式AI声音效果领域的研究者提供了一幅高质量全景图，其模型属性表和评估指标库可作为后续研究的快速参考，降低了入门门槛。但受限于叙述性综述的性质，对推动领域深层认知的推动力有限。

*   开源 (1.5/1.5)：综述的核心产物即论文本身，已在arXiv等平台全文公开发布，无版权障碍，因此核心产物完整开放，满足1.5分固定锚点。文中引用的开源工具包链接可作为补充。

*   可复现性 (0.3/0.5)：论文详细描述了检索策略、筛选流程和分类方法，大部分复现逻辑清晰。但未提供PRISMA检查表、完整的检索询式及去重筛选过程的原始记录等细节，复现时部分关键配置需自行推断。

*   工程/实践价值 (0.8/1.5)：提供的集中整理表格（Table 1、2）为工程师提供了便捷的选型和指标查阅参考，具有实用工具价值。然而，论文过度聚焦模型成功之处，严重忽略了对失败案例、资源消耗（GPU时/模型大小）和推理延迟等实际工程部署要素的分析，实用性有所削弱。

### 🚨 局限与问题

**论文明确承认的局限**：
1.  客观指标与人类听感之间存在差距，评估体系有待完善。
2.  复杂多事件场景下的时间同步仍是技术挑战。
3.  可控性与生成多样性之间存在权衡。
4.  文献检索限于近五年、英文同行评审文献，可能遗漏其他语种或未发表的灰色文献。

**审稿人发现的潜在问题**：
1.  **批判性洞察的缺失**：本文的核心缺陷在于止步于“叙述”而非“综合”。它对每篇论文的优缺点多止于复述原文，缺乏审稿人期待的统一视角下、跨模型的深度对比与批判。例如，它未能回答“在需求时间同步的任务上，基于自回归、扩散和GAN的方法究竟孰优孰劣？”这类深刻的问题。
2.  **SOTA声称的支撑脆弱**：在没有提供统一的定量基准对比的情况下，直接引用和总结各文献的SOTA声称，无法构成有效的科学证据，甚至可能模糊视听。
3.  **子领域覆盖不均**：音频到音频（2篇）和多模态（4篇）类别下的文献样本量过小，极容易受单篇论文观点的影响，无法代表该子领域的真实全貌，但作者在多处还是将其作为独立类别进行“趋势总结”，结论的统计效力相当有限。
4.  **忽视负面结果与挑战细节**：综述过于聚焦各模型的“成功”之处，对普遍存在的失败案例（如具体哪些类别的声音生成质量差）、具体的资源消耗（GPU时、模型大小）及推理延迟等实际问题提及甚少，削弱了其工程参考价值。

---

[← 返回 2026-08-05 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-05/)
