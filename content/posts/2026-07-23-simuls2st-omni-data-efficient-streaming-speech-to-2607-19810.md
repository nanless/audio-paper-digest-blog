---
title: "SimulS2ST-Omni: Data-Efficient Streaming Speech-to-Speech Translation via Explicit Trajectory Supervision"
date: 2026-07-23
draft: false
tags: [语音翻译, 流式处理, 多任务学习, 参数高效微调, 音频理解]
categories: [论文速递]
description: "语音翻译 | 7.3/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2607.19810"
---

# 📄 SimulS2ST-Omni: Data-Efficient Streaming Speech-to-Speech Translation via Explicit Trajectory Supervision

标签：#语音翻译 #流式处理 #多任务学习 #参数高效微调 #音频理解

**7.3/10** | 创新 1.3/2 | 严谨 1/1.5 | 实验 1.3/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 0.2/1.5 | 复现 0.3/0.5 | 工程 1.4/1.5

✅ **7.3/10** | 前50% | 文档类型：系统技术报告 | 评分置信度：高 | #语音翻译 | #多任务学习 | #流式处理 #参数高效微调 | [arxiv](https://arxiv.org/abs/2607.19810)


### 👥 作者与机构

- 第一作者：Rongshen He（The Chinese University of Hong Kong, Shenzhen）
- 通讯作者：Zhizheng Wu（The Chinese University of Hong Kong, Shenzhen）
- 作者列表：Rongshen He（The Chinese University of Hong Kong, Shenzhen）、Xinyu Liang（The Chinese University of Hong Kong, Shenzhen）、Dekun Chen（The Chinese University of Hong Kong, Shenzhen）、Jiaqi Li（The Chinese University of Hong Kong, Shenzhen）、Mingjie Chen（The Chinese University of Hong Kong, Shenzhen）、Zhizheng Wu（The Chinese University of Hong Kong, Shenzhen）

### 💡 毒舌点评

论文在数据稀缺条件下，通过精巧的轨迹监督和架构分解实现了有竞争力的流式S2ST，工程优化思路清晰，实验设计扎实。然而，核心依赖对齐质量且完全不开源，使其贡献的可验证性和可复用性大打折扣，更像是一个精心打造的内部技术报告而非开放研究。

### 📌 核心摘要

本文解决了在有限配对语音数据（约2k小时）下实现高质量、低延迟流式语音到语音翻译（S2ST）的挑战。其核心方法是提出一种联合文本-声学码本轨迹监督，将翻译与声学生成纳入统一的承诺路径，并辅以大规模辅助任务（ASR/S2TT/MT/TTS）训练。创新点在于显式轨迹监督和两流Thinker-Talker架构分解，后者将语言推理与密集声学预测解耦以缓解模态干扰。实验表明，该系统在RealSI和ACL60/60-dev基准上取得了有竞争力的质量-延迟权衡，在部分延迟设置上匹配或超越了商业系统LiveInterpret 2.0，并能在仅使用10%配对数据时保持稳健性能。该工作为低资源场景下的流式S2ST提供了实用方案，但其评估主要限于中英方向，且所用配对数据为合成而非真实同传录音，这是其主要局限。

### 🔗 开源详情

- 代码：论文中未提及代码链接
- 模型权重：论文中未提及模型权重链接
- 数据集：训练数据基于多个公开数据集组合，具体包括：
    - ASR：LibriSpeech, Common Voice (en/zh), AISHELL-2
    - S2TT：MuST-C (en-zh), CoVoST 2 (en-zh/zh-en), GigaST (en-zh), WenetSpeech, Emilia (en-zh/zh-en)
    - MT：AI Challenger, WMT
    - TTS：Emilia (en/zh)
    - 论文中使用的配对 S2ST 数据 (`s2st_en-zh`, `s2st_zh-en`) 是从上述公开语料库通过合成、对齐和过滤构建的内部子集，未提供统一开源链接。
- Demo：在线演示地址为 `https://hasaki321.github.io/SimulS2ST-Omni.demo/`
- 复现材料：论文在附录 (Appendix B, C, D) 中提供了详细的训练配置、超参数、评估协议、数据构建流程 (如 NIR 过滤、ASR 质量检查) 以及评估指标定义，这些信息可用于复现实验。论文指出检查点和配置文件将在“公开代码发布 (public code release)”中提供，但未提供具体仓库链接。
- 论文中引用的开源项目：
    - SimAlign：用于跨语言词对齐。
    - OmniVoice：用于合成目标语音。
    - DualCodec：用于将语音转换为离散语义码。
    - Qwen2.5-Omni：作为模型初始化基础。
    - Stopes：用于计算 AutoPCP 指标。
    - Whisper-Large-V3：用于英语 ASR 和 ASR-BLEU 评估。
    - Paraformer-zh：用于中文 ASR 和 ASR-BLEU 评估。
    - WavLM-Large：用于计算说话人相似度 (SIM-O)。
    - SacreBLEU：用于计算 BLEU 分数。
    - SimulEval：用于流式评估的延迟指标。
    - Seed-TTS：用于零样本 TTS 评估协议。
    - 其他引用的基线系统如 Seamless-m4t-v2-large, UniSS, LiveInterpret 2.0, SeamlessStreaming 等均为商业或研究系统，未提供开源链接。

### 🏗️ 方法概述和架构

本文提出了一种名为SimulS2ST-Omni的流式语音到语音翻译系统，其核心是一个端到端的、基于语音语言模型（SLM）的流式生成框架。整体流程为：输入源语音流，系统通过一个流式决策策略逐步读取源语音片段，并在合适的时机生成目标语言的文本和语义声学码本，最后通过一个固定的流匹配（Flow-Matching）和声码器后端将码本转换为目标语音波形输出。

该系统的核心架构创新在于**两流Thinker-Talker因子化分解**和**联合文本-码本轨迹监督**，其具体实现如下：

1.  **联合文本-码本轨迹监督**：
    *   **功能**：解决流式S2ST中“何时写”和“写什么”的联合监督问题。传统方法通常需要分离且不稳定的语音侧发射控制器。
    *   **实现**：该机制将流式生成过程离散化为一系列“读/写”块（chunk）。每个块对应一个源语音前缀索引 `\(g_c\)`。在训练时，系统被监督去预测在给定源前缀和历史生成内容的条件下，该块应同时生成的目标文本 `\(\mathbf{Y}^{\mathrm{text}}_c\)` 和声学语义码本 `\(\mathbf{Y}^{\mathrm{code}}_c\)`。
    *   **轨迹构建**：该轨迹是通过对齐和单调化获得的。具体步骤为：1）利用SimAlign进行跨语言词对齐，确定每个目标词对齐到的源词结束时间 `\(t_{a(i)}\)`；2）对时间边界进行单调化处理 `\(\tilde{t}_{i} = \max(\tilde{t}_{i-1}, t_{a(i)})\)` 以确保生成顺序合理；3）根据目标词边界将目标声学码本分割，并与文本一起分组到基于源语音时间切片的块中，形成离散的流式轨迹。
    *   **训练目标**：模型的训练目标是在给定轨迹条件下，最大化分块条件对数似然，即最大化 `\(\log p(\mathbf{Y}^{\mathrm{text}}, \mathbf{Y}^{\mathrm{code}} \mid \mathbf{X}, \boldsymbol{\tau})\)`。

该机制通过以下步骤将流式生成过程离散化为离散的读/写块。

![Figure 1: Streaming trajectory construction. Step 1: Word-level and cross-lingual alignments establish the earliest valid source prefix for each target word. Step 2: Target text and segmented target speech codes inherit monotonized boundari](https://arxiv.org/html/2607.19810v1/x1.png)

下图展示了从跨语言对齐到离散化读/写步骤的构建过程，为流式训练提供了结构化监督。


2.  **骨干网络选择：Thinker-Talker vs. Dec-Only**：
    *   **Thinker-Talker (两流架构)**：
        *   **Thinker**：一个语言模型（初始化自Qwen2.5-Omni），负责基于源语音编码和历史上下文进行语言推理，并生成目标文本。它输出文本序列及其隐藏状态 `\(\mathbf{H}_{\theta}\)`。
        *   **Talker**：另一个较小的语言模型（0.4B参数），负责根据Thinker生成的文本、隐藏状态以及源语音上下文，预测目标声学语义码本。
        *   **优势**：通过解耦语言规划和密集声学预测（`\(p_{\theta}(\mathbf{Y}^{\mathrm{text}}_c \mid \mathcal{C}_c) p_{\phi}(\mathbf{Y}^{\mathrm{code}}_c \mid \mathcal{C}_c, \mathbf{Y}^{\mathrm{text}}_c, \mathbf{H}_{\theta})\)`），显著减轻了模态干扰，尤其在低资源场景下提升了翻译质量。
    *   **Dec-Only (统一解码器基线)**：
        *   使用同一个3B参数的模型，将声学码本词表（16384个码本token）扩展并加入原模型词表，自回归地先生成文本再生成码本。
        *   **劣势**：统一解码器内部存在表征冲突，导致其难以同时优化翻译理解和声学生成，在流式设置下表现不佳。

系统采用了两流Thinker-Talker架构或统一解码器架构，下图对比了两种骨干网络的具体组件。

![Figure 2: Matched backbone comparison. Thinker–Talker (left) and Dec-only (right) share an identical speech encoder, base LLM backbone (with independent LoRA adapters), semantic-code tokenizer 𝒬\\mathcal{Q}, and frozen flow-matching/vocoder](https://arxiv.org/html/2607.19810v1/x2.png)

下图展示了两种架构共享的语音编码器和后端，以及关键区别：Thinker-Talker将语言推理与声学码本预测分离到独立模块。


3.  **训练流程**：
    *   **多阶段训练**：采用三阶段策略，适配有限的配对数据。Stage 1（TTS预热）仅训练Talker；Stage 2（联合预训练）在大规模多任务混合数据（ASR/S2TT/MT/TTS/S2ST）上训练；Stage 3（流式微调）在构建的流式轨迹数据上微调。
    *   **数据效率**：通过构建和筛选仅约2k小时的配对S2ST数据，并结合大量辅助任务数据，实现了数据高效的学习。轨迹数据通过基于标准化反转率（NIR）的单调性过滤和难度控制来保证质量。
    *   **流式延迟控制**：训练时通过采样延迟乘数 `\(m \in \{1, \ldots, 12\}\)`（合并 `\(m\)` 个源语音块作为一个读取步骤）来生成不同延迟等级的轨迹，从而用一个模型支持多种推理延迟设置。

4.  **推理配置**：
    *   使用滚动窗口KV缓存和分块流匹配解码。
    *   通过延迟乘数 `\(m\)` 控制延迟-质量权衡。
    *   支持贪心解码和束搜索（beam search）。

该架构的核心设计动机是：在配对数据稀缺的约束下，通过结构化的轨迹监督提供清晰的学习信号，并通过两流分解避免统一模型内部的优化冲突，从而更有效地利用有限的监督数据和辅助数据，最终实现稳健的长流式S2ST。

### 💡 核心创新点

1.  **联合文本-码本轨迹监督**：
    *   **是什么**：一种将流式S2ST的“何时输出”和“输出什么”统一建模的方法。它构建一个显式的、分块的承诺路径，同时监督目标文本和声学语义码本的生成。
    *   **之前局限**：先前基于轨迹的方法主要针对文本输出流式翻译，无法直接处理需要不可逆、时间敏感的声学码本输出的S2ST任务。依赖分离的、通常不稳定的控制器来管理语音侧发射。
    *   **作用与收益**：通过提供对齐的、分块的文本-码本联合监督，消除了对单独语音发射控制器的需求，为模型提供了稳定且信息丰富的学习目标。实验证明，这是实现低延迟稳健性的关键。

2.  **两流Thinker-Talker架构因子化分解**：
    *   **是什么**：将流式S2ST系统分解为负责语言推理的“思考者”（Thinker）和负责声学码本预测的“谈论者”（Talker）两个独立模块。
    *   **之前局限**：统一解码器模型在同时处理理解和生成任务时存在表征冲突，尤其在低资源和流式设置下，这种冲突会严重损害翻译质量。
    *   **作用与收益**：解耦后，Thinker专注于语言逻辑，保护了文本推理能力；Talker专注于声学预测，形成更忠实的语音生成路径。实验显示，在相同数据下，该架构的翻译质量（ASR-BLEU）显著优于统一解码器基线。

3.  **数据高效的多任务训练方案**：
    *   **是什么**：一套训练配方，仅使用约2k小时的配对S2ST数据，结合大规模ASR、S2TT、MT、TTS辅助任务数据进行训练。
    *   **之前局限**：现有高质量流式S2ST系统（如Hibiki, LiveInterpret 2.0）依赖数万小时的配对数据或复杂的强化学习，数据门槛极高。
    *   **作用与收益**：证明了在精心设计的架构和监督信号下，可以用极少的配对S2ST数据实现有竞争力的性能。即使配对数据减少90%，在辅助数据支撑下性能依然稳健。

4.  **基于单调性过滤的轨迹数据构建与筛选**：
    *   **是什么**：使用标准化反转率（NIR）等指标对自动生成的流式轨迹数据进行质量评估和筛选，优先选择重排序少、难度适中的样本用于训练。
    *   **之前局限**：未经过滤的对齐轨迹可能包含大量不合理的长距离重排序，作为流式训练目标会引入噪声，导致模型在低延迟下崩溃。
    *   **作用与收益**：消融实验表明，经过NIR过滤的数据是实现低延迟（m1）性能的先决条件，比数据采样策略本身更重要。

### 📊 实验结果

论文在多个基准上进行了评估，主要结果如下：

**离线S2ST性能 (CVSS-T)**
| 类别 | 模型 | 参数量 | En→Zh ASR-BLEU | Zh→En ASR-BLEU | En→Zh A.PCP | Zh→En A.PCP |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| MLLM | GPT-4o | — | 25.42 | 31.64 | 2.66 | 2.58 |
| S2ST | UniSS (Q) | 1.5B | 32.04 | 24.72 | 2.71 | 2.75 |
| **本文** | **Ours (Dec-only)** | **3B** | **27.12** | **23.41** | **2.96** | **2.75** |
| **本文** | **Ours (Thinker-Talker)** | **3B** | **31.12** | **25.18** | 2.70 | 2.64 |

*   Thinker-Talker架构在翻译质量（Text/ASR-BLEU）上匹配了之前的SOTA（UniSS-Q），并大幅领先统一解码器基线。Dec-only在声学质量（A.PCP/SIM-O）上有优势。

**流式S2ST性能 (RealSI句子级)**
*   在延迟-质量权衡图上，Thinker-Talker在所有延迟设置下均大幅超越Seamless-Streaming和Dec-only基线。
*   在束搜索下，其流式操作点从延迟乘数m3开始，即在En→Zh和Zh→En两个方向上超越了强大的离线S2ST系统UniSS-Q。
*   在延迟匹配（~2.2s LAAL）条件下，其翻译质量（ASR-BLEU）成功匹配或超越了商业系统LiveInterpret 2.0（见下表关键数据）。

在RealSI句子级测试集上，系统在翻译质量（ASR-BLEU）与延迟（LAAL）之间取得了权衡。

![Figure 3: RealSI sentence-level content trade-off. Dashed curves denote S2TT text BLEU, solid curves denote S2ST ASR-BLEU, and horizontal lines mark offline reference lines.](https://arxiv.org/html/2607.19810v1/x3.png)

下图显示，束搜索（beam search）下的Thinker-Talker系统在低延迟设置下显著超越基线，并在延迟超过约2.2秒后匹配或超越离线S2ST系统。


**表3 RealSI流式S2ST ASR-BLEU (部分)**
| 类型 | 方向 | 延迟乘数m2 | m3 | m4 | m5 | m6 | LiveInterpret 2.0 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 句子级 | En→Zh | 24.21 | 25.01 | 25.54 | 25.92 | 26.32 | 29.09 |
| 句子级 | Zh→En | 19.55 | 21.07 | **22.47** | **22.94** | **23.47** | 22.19 |
| 长文档 | En→Zh | 26.58 | 28.42 | **29.69** | **30.04** | **29.73** | 29.33 |
| 长文档 | Zh→En | 22.40 | 22.62 | 24.37 | **26.53** | **25.60** | 26.80 |

**数据效率消融 (RealSI句子级)**
| 方向 | 模型 | 配对S2ST数据 | m1 ASR-BLEU | m4 ASR-BLEU |
| :--- | :--- | :--- | :--- | :--- |
| En→Zh | Talker | Full | 17.30 | 24.04 |
| En→Zh | Talker | 10% | 15.50 | 23.47 |
| En→Zh | Talker | 10% w/o aux | 9.47 | 21.90 |
| Zh→En | Talker | Full | 12.49 | 18.78 |
| Zh→En | Talker | 10% | 9.76 | 18.59 |
| Zh→En | Talker | 10% w/o aux | 8.45 | 18.24 |
| Zh→En | Dec-only | Full | 10.88 | 15.45 |
| Zh→En | Dec-only | 10% | 10.29 | 15.12 |

*   辅助任务数据对于维持低资源（10%）下的性能至关重要，尤其是在低延迟（m1）设置下。
*   Dec-only架构即使在全数据下也受限于其内部冲突，性能天花板显著低于Talker。

在声学质量方面，系统也展现了良好的延迟-质量权衡。

![Figure 4: RealSI sentence-level acoustic quality trade-off: A.PCP and SIM-O against LAAL for En→\\rightarrowZh and Zh→\\rightarrowEn.](https://arxiv.org/html/2607.19810v1/x4.png)

下图显示，Thinker-Talker在Auto-PCP和SIM-O指标上均随延迟增加而提升，并在中等延迟下接近离线系统水平。

### 🔬 细节详述

- **训练数据**：
    - **配对S2ST数据**：约2104.8小时，从公开ASR/S2TT语料库通过跨语言对齐、合成目标语音（OmniVoice）和ASR内容过滤构建。
    - **辅助任务数据**：包括ASR（LibriSpeech, CommonVoice等, 2811.9h）、S2TT（MuST-C, CoVoST2, GigaST等, 24359.1h）、MT（AI Challenger, WMT）、TTS（Emilia等, 89595.8h）。总token数约117亿。
    - **预处理**：对源语音进行ASR引擎交叉验证清洗，对合成目标语音进行ASR错误率过滤（中文5%，英文7%）。
- **损失函数**：未明确说明具体损失函数形式，目标为最大化分块条件对数似然（公式2）。
- **训练策略**：
    - **硬件**：8张A800 GPU。
    - **阶段**：
        - Stage 1 (TTS预热): 训练Talker 2 epochs，学习率 `\(4\times 10^{-4} \rightarrow 4\times 10^{-5}\)`。
        - Stage 2 (联合预训练): Thinker用LoRA，Talker全参数，30k steps，学习率 `\(1\times 10^{-4} \rightarrow 2\times 10^{-5}\)`，数据混合比例（ASR:S2TT:MT:TTS:S2ST）为0.2:1:0.5:1:1.5。
        - Stage 3 (流式微调): 合并先前适配器，冻结嵌入和预测头，用新鲜LoRA微调，1 epoch，学习率 `\(3\times 10^{-5} \rightarrow 2\times 10^{-6}\)`。
    - **批量大小**：按token数计算，Stage 2为6.4k tokens/GPU。
    - **优化器**：未说明。
    - **总训练时长**：Thinker-Talker总计约728 A800 GPU小时（416+136+176），Dec-only约为1496 A800 GPU小时。
- **关键超参数**：
    - **基础模型**：初始化自Qwen2.5-Omni。
    - **声学语义码本**：DualCodec，词表大小16384。
    - **延迟乘数 `\(M_{\max}\)`**：12。
    - **LoRA秩**：Stage 2 r=32， Stage 3 r=8。
    - **推理**：滚动窗口KV缓存；束搜索大小（num_beams）为4；重复惩罚（repetition_penalty）文本1.2/码本1.4。
- **训练硬件**：A800 GPU。
- **推理细节**：
    - **流式解码**：chunked flow-matching with cross-chunk audio context。
    - **延迟控制**：通过延迟乘数m合并源语音块。
- **正则化/稳定训练技巧**：轨迹数据NIR过滤和难度加权采样。

### ⚖️ 评分理由

*   创新性 (1.3/2)：提出了针对低资源流式S2ST的两流Thinker-Talker架构和联合文本-码本轨迹监督，在结构化监督和模态解耦上有明确创新，但多任务训练和延迟乘数控制并非全新概念。

*   技术严谨性 (1.0/1.5)：轨迹构建依赖对齐质量，对语序差异大的语言对或口语化源语音的稳健性未充分评估（[A_LIMITS]）。评估指标主要依赖ASR-BLEU和Text-BLEU，可能无法完全代表语义充分性和自然度，人类评估样本量较小。

*   实验充分性 (1.3/1.5)：实验设计全面，涵盖离线与流式S2ST、句子级与长文档评估、数据效率消融、轨迹质量消融，并与商业系统LiveInterpret 2.0进行对比，证明了系统在质量-延迟权衡和数据效率上的有效性。

*   清晰度 (0.8/1)：论文结构完整，方法、实验、附录详尽，图表清晰。但涉及较多自定义术语（如延迟乘数m、NIR、Thinker-Talker），对非领域读者可能有一定理解门槛。

*   影响力 (1.0/1.5)：工作聚焦于实时语音翻译这一实际应用场景，为低资源、低延迟的流式S2ST提供了切实可行的方案，对语音翻译社区具有明确的实用价值。

*   开源 (0.2/1.5)：论文目前只提供可访问的在线演示页面，未发布核心代码、模型权重或训练数据。

*   可复现性 (0.3/0.5)：论文在附录中提供了详细的训练配置、超参数、评测协议、数据构建流程等复现细节（[S_TAIL]），足以支撑主要实验的复现。但个别参数（如学习率计划的具体起始值）可能未完全明确。

*   工程/实践价值 (1.4/1.5)：系统设计完整且实用，包含从数据构建、多阶段训练到流式推理的完整工程流程。通过延迟乘数m实现了延迟-质量的可调权衡，并在仅10%配对数据下展示了稳健性能，工程优化思路清晰。

### 🚨 局限与问题

**1. 论文明确承认的局限**
- **语言覆盖有限**：实验仅限于中-英互译，因为适用于流式S2ST的多语言配对数据稀缺。
- **训练数据非真实记录**：所用的配对流式S2ST数据是通过对齐、合成和过滤构建的，可能无法完全捕捉真实同传场景中的所有现象（如特定的犹豫、修正模式）。
- **声学后端非流式原生**：当前的分块流匹配解码器并非完全为流式设计，可能影响跨块一致性和推理效率。

**2. 审稿人发现的潜在问题**
- **轨迹构建的脆弱性**：整个流式监督信号建立在词级对齐和强制对齐之上。对于语序差异大的语言对或口语化、不流利的源语音，对齐错误会直接导致错误的轨迹监督，论文未充分评估这种错误的影响及缓解措施。
- **评估偏重BLEU**：主要质量指标是ASR-BLEU和Text-BLEU，这些指标对词序和表达多样性敏感，可能不完全代表翻译的语义充分性和自然度。人类评估虽在附录提供，但样本量（N=15）较小。
- **与商业系统对比的公平性**：LiveInterpret 2.0是闭源商业系统，其具体模型规模、训练数据、评估设置均未知。论文已尽量公平对比，但读者应谨慎看待直接的“匹配SOTA”声明，因为这可能受限于特定评估管线和配置。
- **Dec-only基线可能过于简单**：尽管作者尽力匹配，但Dec-only基线采用了复杂的双分支LoRA预热来缓解优化冲突，这增加了其工程复杂性。与“原生”的统一解码器相比，这种比较的公平性需要思考。

---

[← 返回 2026-07-23 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-23/)
