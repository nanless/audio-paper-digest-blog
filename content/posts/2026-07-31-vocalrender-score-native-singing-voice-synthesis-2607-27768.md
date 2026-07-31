---
title: "VocalRender: Score-Native Singing Voice Synthesis for Real-World Composition"
date: 2026-07-31
draft: false
tags: [歌唱生成, 自回归模型, 语音合成, 扩散模型, 音频理解]
categories: [论文速递]
description: "歌唱生成 | 7.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2607.27768"
---

# 📄 VocalRender: Score-Native Singing Voice Synthesis for Real-World Composition

标签：#歌唱生成 #自回归模型 #语音合成 #扩散模型 #音频理解

**7.5/10** | 创新 1.2/2 | 严谨 1.2/1.5 | 实验 0.9/1.5 | 清晰 0.8/1 | 影响 0.9/1.5 | 开源 1/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

✅ **7.5/10** | 前25% | 文档类型：模型报告 | 评分置信度：中 | #歌唱生成 | #自回归模型 | #语音合成 #扩散模型 | [arxiv](https://arxiv.org/abs/2607.27768)


### 👥 作者与机构

- 第一作者：Yukun Chen（Nanyang Technological University, Singapore; 未说明具体院系）
- 通讯作者：未说明
- 作者列表：Yukun Chen（Nanyang Technological University; 未说明具体院系）、Tianrui Wang（Nanyang Technological University; 未说明具体院系）、Zhaoxi Mu（未说明）、Xinyu Yang（未说明）、EngSiong Chng（Nanyang Technological University; 未说明具体院系）

### 💡 毒舌点评

这篇论文瞄准了歌唱合成（SVS）从“实验室demo”走向“作曲家工具”的核心痛点，提出了完全基于符号乐谱、无需显式时长预测的 VoclRender 系统。数千小时级的工程化数据构建和精巧的交错式提示设计，确实让人眼前一亮。
但它的实验设计存在硬伤：在决定其核心卖点“节奏与音高控制”的客观指标 IOU 和 RPA 上，VocalRender 几乎全面输给依赖时间对齐引导的 SoulX-Singer。作者试图用精心设计的主观测试（CMOS/MS-MOS）来证明自己“主观听感更好、更自然”，但这无法弥补“抛弃时长预测是否带来了更可控的艺术表达”这一核心命题在定量论证上的缺失。更致命的是，其巨大模型和数据集均未公开，导致所有声称的“SOTA”结果都成了无法被外界验证的空中楼阁。

### 📌 核心摘要

1. **要解决什么问题**：现有歌唱合成系统依赖预先定义或显式预测的音素级时长，或要求时间对齐的参考音频（如F0曲线）作为引导，这与作曲家仅提供歌词、音高、音符时值和BPM的实际音乐创作流程严重脱节。
2. **方法核心是什么**：提出 VocalRender，采用自回归扩散模型架构。通过自回归 Transformer 根据符号乐谱上下文逐块生成“韵律草图”，再由一个局部的流匹配扩散模型在此基础上生成高保真的连续音频潜变量，并联合训练一个停止预测器来动态决定输出总长度，从根本上避免了显式的时长预测器。
3. **与已有方法相比新在哪里**：一是提出“交错式提示”，将歌词、音高、音符时值按音节交错排列，在符号层面硬性定义了一音多音的对齐关系；二是首次在SVS中引入ARDM框架，将输出长度的确定内化到逐块生成过程中，仅从符号化乐谱（BPM+音符时值）自主推断发声的时序和总时长，实现了“所写即所得”。
4. **主要实验结果如何**：
   - 在 Opencpop 和 CrawlSinger-Eval 上，VocalRender 的 WER 最低（4.44/4.52），自然度主观对比测试（N-CMOS）比最强基线 SoulX-Singer 高出 0.42 分。
   - 但在节奏（IOU）和音高（RPA）等客观指标上，VocalRender 几乎全面弱于使用时间对齐引导的 SoulX-Singer（例如 Opencpop 上 IOU 0.62 vs. 0.63，RPA 0.72 vs. 0.77）。
   - 消融实验表明，去掉大规模数据或改用级联式 prompt 输入，节奏控制力（IOU/RPA）会显著下降，证明了大规模真实数据和交错式提示对节奏建模的关键作用。
5. **实际意义是什么**：为作曲家提供了一个“所写即所得”的歌声合成工具，直接以作曲家熟悉的乐谱为输入，生成包含自然 expressive timing 的歌声，降低了 SVS 技术在严肃音乐创作中的使用门槛。
6. **主要局限性是什么**：训练所用的音高和节奏标注是从音频中自动转录得来的“音频中心”乐谱，比人类作曲家写的“意图中心”乐谱包含更多装饰音和复杂切分，导致训练与推理之间存在输入分布偏差。此外，自动转录可能引入不合理的半音等噪声。模型权重、训练好的模型和整理后的数据集均未公开，复现性极低。

### 🔗 开源详情

- 代码：https://github.com/pymaster17/VocalRender
- 模型权重：未提及
- 数据集：训练集 CrawlSinger-OS 由多个公开数据集经复杂处理管道构建而成（Muse、MuChin、SongFormDB、OpenSinger），但**未提供整合后的统一下载链接**。具体处理流程见论文附录 B。源数据集获取方式：Muse（MIT License）、MuChin（学术使用，遵循原始版权）、SongFormDB（CC BY 4.0）、OpenSinger（CC BY-NC-SA）。CrawlSinger（in-house）未公开。
- Demo页面：未提及
- 复现材料：论文提供了模型结构、训练超参数、硬件配置等细节，并附带了代码仓库，但未提供预训练检查点，复现成本极高。
- 论文中引用的开源项目：
  - audio-slicer: https://github.com/openvpi/audio-slicer
  - SOFA: https://github.com/qiuqiao/SOFA
  - MERT-v1-330M: https://huggingface.co/m-a-p/MERT-v1-330M
  - W2v-BERT 2.0: https://huggingface.co/facebook/w2v-bert-2.0

### 🏗️ 方法概述和架构

VocalRender 是一种直接从作曲家风格的符号乐谱生成歌声的端到端系统，其核心架构由三部分组成：乐谱的符号化表示、连续的音频潜表征提取，以及基于自回归扩散模型的免时长序列生成。

**1. 乐谱的符号化表示（Score-Native Representation）**
系统接收的输入是一种高度结构化的符号乐谱，包含全局 BPM、歌词音节序列、以及每个音节对应的 MIDI 音高和象征性音符时值（如四分音符、八分音符）。为了解决旋律中一个音节对应多个音符的对齐歧义问题，VocalRender 设计了一种“交错式提示”的序列化方法。给定音节  \(s_i\)  及其关联的  \(K_i\)  个音符，表示法要求模型读取  \(s_i, p_{i,1}, q_{i,1}, \dots, p_{i,K_i}, q_{i,K_i}\)  的序列。这种结构在符号层面显式绑定了歌词与音高/时值的归属关系，模型在见到下一个音节前就已知晓当前音节需覆盖的所有音符形态，与以往将歌词和音符作为独立序列输入的做法有本质区别。

**2. 连续的音频潜表征（Continuous Audio Latents）**
系统使用一个预训练并固定的音频 VAE 将 16kHz 的歌声波形压缩到一个 25Hz 的连续潜空间。输入波形先被编码为低帧率潜变量序列  \(\mathbf{z}\) ，再于生成后由 VAE 解码器重建为 48kHz 的波形。与依赖离散音频 tokenizer（如 EnCodec）的方法不同，连续潜表征避免了量化带来的信息损失，理论上能更好地保留歌声中的音高、音色和细腻的演唱技巧。

**3. 自回归扩散模型框架（ARDM）**
这是实现免时长生成的核心。它将目标潜变量序列  \(\mathbf{Z}\)  划分为固定尺寸  \(P\) （实验中\(P=4\)）的补丁，并以自回归方式逐块生成，并在生成过程中动态判断序列终止点。该框架包含四个关键子模块：
- **聚合编码器（Aggregation Encoder）**：将已生成的潜变量补丁  \(\mathbf{z}^{(y)}\)  映射为一个紧凑的嵌入向量  \(\mathbf{e}_y\) ，作为后续步骤的历史上下文。
- **自回归 Transformer（AR Transformer）**：一个约 1.7B 参数的自回归模型。它以符号乐谱条件  \(\mathcal{C}\)  和所有历史补丁的嵌入  \(\mathbf{e}_{(y)}\)  为输入，输出一个条件向量  \(\mathbf{h}_y\) 。该向量实际上充当了从符号乐谱中提取出的“局部韵律草图”，指导下一个补丁的声学细节生成。
- **局部扩散 Transformer（LocDiT）**：一个约 0.6B 参数的流匹配扩散模型。它以 AR Transformer 输出的条件向量  \(\mathbf{h}_y\)  和上一个补丁的原始潜变量  \(\mathbf{z}^{(y-1)}\)  为条件，通过 10 步扩散采样生成当前补丁的连续潜变量  \(\mathbf{z}^{(y)}\)。
- **停止预测器（Stop Predictor）**：一个与 AR Transformer 共享隐藏状态  \(\mathbf{h}_y\)  的二分类器，在每生成一个补丁后判断序列是否应该终止，从而动态决定音频的总长度。

下图展示了VocalRender的核心自回归扩散模型框架。

![Figure 2: Overall structure of VocalRender. Left: the autoregressive diffusion framework. Right: the music score tokenization process](https://arxiv.org/html/2607.27768v1/Figures/structure.png)

图中左侧为AR Transformer根据乐谱上下文生成条件向量，右侧为LocDiT基于该条件生成音频潜变量补丁，共同实现了免时长的序列生成。


生成过程是一个标准的自回归循环：AR Transformer 利用符号乐谱和历史上下文生成条件向量  \(\mathbf{h}_y\) ，LocDiT 据此生成潜变量补丁  \(\mathbf{z}^{(y)}\)，停止预测器判断是否结束，若未结束则将新补丁编码为  \(\mathbf{e}_y\)  追加到历史序列中，继续下一轮。该框架的损失函数由流匹配损失和停止预测器的二元交叉熵损失加权求和构成。

### 💡 核心创新点

1.  **连续空间上的自回归扩散歌声合成（ARDM for SVS）**：在歌唱合成中首次引入自回归扩散模型范式。通过“自回归 Transformer 进行韵律规划 + 局部的流匹配扩散模型进行细节生成”的组合，使模型能直接从符号乐谱中同时推断出音高、节奏、演唱技巧和自然时长，消除了对显式时长预测器或时间对齐声学引导的刚性依赖。
2.  **用于歌词-音符对齐的交错式提示（Interleaved Prompting）**：提出了将歌词、音高、音符时值按音节交错排列的序列化输入格式。与将歌词和音符作为两个独立序列的传统做法不同，该格式在符号层面硬性定义了歌词和音符的归属关系，直接解决了传统SVS在处理“一字多音”时对齐模糊的固有问题。
3.  **面向SVS的大规模多源数据整理（Large-Scale Data Curation）**：构建了超过 2300 小时的 CrawlSinger-OS 开源数据集，设计了一套包含声乐分离、音频切片、歌词转录或对齐、强制对齐和音高量化的复杂处理流水线，将多个公开但标注格式各异的歌曲数据集统一转换成带有精细音节级乐谱标注的训练数据，为SVS领域提供了宝贵的数据资源。

### 📊 实验结果

论文在 Opencpop 和自建的 CrawlSinger-Eval 数据集上进行了主客观评估。

**客观评估 (Opencpop / CrawlSinger-Eval)**

| Method | WER↓ | SIM↑ | IOU↑ | RPA↑ | SingMOS↑ | CE↑ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Opencpop** | — | — | — | — | — | — |
| GT | 3.81 | – | – | – | 4.59 | 5.61 |
| TCSinger | 21.67 | 0.891 | 0.59 | 0.67 | 3.91 | 5.65 |
| TechSinger | 14.55 | – | 0.51 | 0.69 | 4.21 | 5.32 |
| Vevo2 | 14.42 | 0.866 | 0.27 | 0.60 | 4.12 | **5.85** |
| SoulX-Singer | 5.02 | **0.928** | **0.63** | **0.77** | 4.45 | **6.01** |
| **VocalRender** | **4.44** | 0.922 | 0.62 | 0.72 | **4.59** | **5.85** |
| **VocalRender-Pro** | **3.88** | **0.929** | 0.62 | 0.75 | 4.55 | 5.63 |
| **CrawlSinger-Eval** | — | — | — | — | — | — |
| GT | 5.17 | – | – | – | 4.49 | 5.73 |
| TCSinger | 26.13 | 0.853 | 0.46 | 0.56 | 3.84 | 5.29 |
| TechSinger | 13.72 | – | 0.42 | 0.59 | 4.16 | 5.35 |
| Vevo2 | 27.27 | 0.874 | 0.16 | 0.56 | 4.08 | 5.75 |
| SoulX-Singer | 5.03 | 0.918 | **0.54** | **0.70** | 4.44 | 5.71 |
| **VocalRender** | **4.52** | **0.919** | 0.43 | 0.63 | **4.53** | **5.85** |
| **VocalRender-Pro** | **4.45** | **0.926** | 0.48 | 0.67 | 4.52 | 5.78 |

**主观评估 (Subjective Results)**

| Method | N-CMOS (vs. VocalRender) | PS-CMOS (vs. VocalRender) | MS-MOS (Score Following) |
| :--- | :---: | :---: | :---: |
| TCSinger | -1.20 | -1.53 | 2.19 |
| TechSinger | -0.99 | -1.16 | 2.56 |
| Vevo2 | -0.93 | -1.65 | 2.12 |
| SoulX-Singer | -0.42 | -0.32 | 2.84 |
| **VocalRender** | 0 (anchor) | 0 (anchor) | **2.96** |
| **VocalRender-Pro** | **+0.13** | **+0.06** | 2.71 |

**消融实验 (Ablation on Opencpop / CrawlSinger-Eval)**

| Setting | WER↓ | SIM↑ | IOU↑ | RPA↑ | SingMOS↑ | CE↑ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Opencpop** | — | — | — | — | — | — |
| Base (VocalRender) | 4.44 | 0.922 | 0.62 | 0.72 | 4.59 | 5.85 |
| w/o CrawlSinger-OS | +0.12 | -0.031 | -0.13 | -0.45 | -0.04 | +0.06 |
| w/o interleaving | +0.11 | +0.001 | -0.05 | +0.02 | -0.01 | -0.01 |
| **CrawlSinger-Eval** | — | — | — | — | — | — |
| Base (VocalRender) | 4.52 | 0.919 | 0.43 | 0.63 | 4.53 | 5.85 |
| w/o CrawlSinger-OS | +0.03 | -0.035 | -0.09 | -0.40 | +0.06 | -0.04 |
| w/o interleaving | +0.16 | +0.001 | -0.04 | +0.01 | -0.02 | -0.02 |

> **关键发现**：VocalRender 在 WER 和主观指标（N-CMOS， MS-MOS等）上优势明显，但其在节奏（IOU）和音高（RPA）上的客观精准度落后于 SoulX-Singer。消融实验表明，大规模数据和交错式提示对于提升节奏和音高控制力至关重要，其中去掉大规模数据后 RPA 下降超过 0.4，去掉交错式提示后 IOU 下降 0.04~0.05。

### 🔬 细节详述

- **训练数据**：CrawlSinger-OS (2300+ hrs)，来源为 Muse (2013h, 合成歌声)、MuChin (158h)、SongFormDB (93h)、OpenSinger (53h)。经过声乐分离、音频切片（结合静音检测和歌词时间戳）、歌词转录/对齐（基于Qwen3-ASR和上下文偏置）、强制对齐（基于重训练的SOFA模型）和音高量化（基于ROSVOT）等复杂流水线处理而成。VocalRender-Pro 额外使用一个 5600+ 小时的内部爬取数据集 CrawlSinger。
- **损失函数**：\(\mathcal{L}_{\text{ARDM}} = \mathcal{L}_{\text{FM}} + 1.0 \times \mathcal{L}_{stop}\) 。其中 \(\mathcal{L}_{\text{FM}}\) 为连续潜变量上的条件流匹配损失，\(\mathcal{L}_{stop}\) 为二元交叉熵损失。
- **训练策略**：VocalRender-Pro 在 CrawlSinger 上用 AdamW + DeepSpeed ZeRO-3训练160k步，global batch size为32768 tokens，学习率先线性warmup到 \(10^{-4}\)（耗时5k步），后逆平方根衰减。VocalRender 分两阶段：先在CrawlSinger-OS的合成子集（Muse）上预训练40k步，再在真实子集上微调20k步，微调学习率减半。
- **关键超参数**：VAE 输入16kHz，输出48kHz，潜变量帧率25Hz。补丁尺寸 \(P=4\)（有效语言模型 token 率为 6.25Hz）。AR Transformer 约 1.7B 参数，DiT 约 0.6B 参数。推理时扩散步数为 10 steps，分类器自由引导强度为 2.0。
- **训练硬件**：4 x Nvidia H100 GPU，VocalRender-Pro 耗时约 4 天，VocalRender 耗时约 1.5 天。
- **推理细节**：需提供 2-8s 的来自同一首歌的同歌手音频片段作为音色提示。生成过程自回归执行：AR Transformer 输出条件 \(\mathbf{h} \rightarrow\) LocDiT 以 10 步扩散采样生成 patch \(\mathbf{z}^{(y)} \rightarrow\) 停止预测器判断终止 \(\rightarrow\) 重复。最后 VAE decoder 重构波形。

CrawlSinger-OS数据集包含合成和真实数据，下图展示了音高分布。

![Figure 10: Pitch Distribution of CrawlSinger-OS](https://arxiv.org/html/2607.27768v1/Figures/pitch_distribution.png)

图中蓝色和红色柱状图分别表示真实和合成数据的音高分布，显示两者在音高范围上的差异。


数据处理包括声乐分离、切片和歌词转录，下图展示了三个处理分支。

![Figure 7: Three processing branches for slicing and lyric transcription.](https://arxiv.org/html/2607.27768v1/Figures/transcribe_branches.png)

图中展示了标准ASR、上下文偏置ASR和基于歌词对齐的转录分支，用于生成精确的音节级标注。


训练数据中的乐谱是从音频自动转录的，下图对比了真实乐谱与转录乐谱。

![Figure 3: Comparison between real music score and transcribed music score. Upper: intent-centric music score. Bottom: audio-centric music score](https://arxiv.org/html/2607.27768v1/Figures/GT_vs_Auto.png)

图中上部为人类作曲的意图中心乐谱，下部为包含更多装饰音和复杂切分的音频中心乐谱，揭示了训练与推理的分布偏差。

### ⚖️ 评分理由

*   创新性 (1.2/2)：提出交错式提示（A_SUMMARY 3）将歌词、音高、时值按音节交错序列化，硬性解决一字多音对齐；首次在SVS中引入自回归扩散模型（ARDM）框架（A_SUMMARY 2），通过自回归 Transformer 规划韵律与局部流匹配扩散生成细节，从符号乐谱自主推断总时长，免除显式时长预测，构成方法创新。

*   技术严谨性 (1.2/1.5)：方法架构描述清晰，包含乐谱符号化、连续音频VAE潜表征和ARDM的聚合编码器、AR Transformer、LocDiT及停止预测器（A_METHOD）；损失函数为条件流匹配损失加停止预测二元交叉熵（SCORING_SOURCE_11），逻辑自洽，无推导错误或不合理假设。

*   实验充分性 (0.9/1.5)：基线对比涵盖TCSinger、TechSinger、Vevo2、SoulX-Singer，并报告WER、SIM、IOU、RPA等客观指标与N-CMOS、PS-CMOS、MS-MOS主观指标（A_RESULTS），消融验证了数据规模和交错提示的作用。但IOU/RPA全面落后于SoulX-Singer，客观主观指标根本矛盾，未提供艺术表达与对齐精度的权衡分析或额外实验解释（A_LIMITS）；未对比仅真实数据或仅合成数据的影响以控制Muse合成数据伪影；缺乏推理延迟和计算量评估，不符合模型报告对端到端质量和部署维度的要求；音色提示可能泄露风格信息而未隔离控制，实验公平性存疑。

*   清晰度 (0.8/1)：论文结构完整，核心公式、表格和流程图均清晰表达（SCORING_SOURCE_6-9、SCORING_SOURCE_14-15等），意图与贡献明确。但部分实验细节（如推理延迟、具体主观测试协议）未充分展开，影响理解深度。

*   影响力 (0.9/1.5)：提出“所写即所得”的作曲家友好歌声合成方案（A_SUMMARY 5），理念具有实用前景；但核心模型权重和整理后数据集均未公开，削弱了方法被广泛验证和采用的现实影响力。

*   开源 (1.0/1.5)：代码仓库已公开（A_OPEN），但模型权重未提供；CrawlSinger-OS由多个公开数据集经复杂流程构建，但未提供统一下载链接，需用户自行收集处理（A_OPEN、SCORING_SOURCE_21-22），属于仅开放部分核心产物（代码），扣至1.0。

*   可复现性 (0.3/0.5)：论文提供了模型结构、训练超参数、硬件配置及训练策略（SCORING_SOURCE_23），但未发布预训练检查点，依赖大规模数据和计算资源，复现成本极高，关键配置虽有但缺少可直接使用的权重，归为大部分充分但有重要缺失。

*   工程/实践价值 (1.2/1.5)：构建了超过2300小时的CrawlSinger-OS数据处理流水线，包括声乐分离、切片、歌词转录、强制对齐与音高量化（A_SUMMARY 3、SCORING_SOURCE_20-21）；采用1.7B+0.6B参数的ARDM加两阶段训练策略，利用DeepSpeed ZeRO-3在4块H100上训练（SCORING_SOURCE_23），展现了较强的工程实现与规模化能力。但未讨论推理延迟与实时性，工程完备性略受影响。

### 🚨 局限与问题

**1. 论文明确承认的局限**
- **训练与推理的乐谱分布偏差**：训练数据中的乐谱是从音频中自动转写的“音频中心乐谱”，包含了大量人类作曲家不会写的装饰音、拆分的音符和复杂切分；而推理时的输入可能是非常简洁的“意图中心乐谱”。这种 mismatch 可能导致模型在面对极简乐谱时，会根据其训练分布“脑补”出不必要的装饰，从而影响表现。
- **自动转录引入的噪声**：自动转写的符号乐谱可能会引入不合理的半音、罕见的音符时值或碎片化的旋律片段，这些噪声会影响模型学习的稳定性和生成质量。

**2. 审稿人发现的潜在问题**
- **客观与主观指标的根本性矛盾未解决，核心论证存在缺陷**：VocalRender 在节奏（IOU）和音高（RPA）的客观精准度上明显落后于 SoulX-Singer，这是其抛弃显式时长和音高参考所必须付出的代价。论文仅凭主观实验就宣称全面超越，论证上存在缺陷。更严谨的做法是增加一个“艺术表达”或“自然度”与“对齐精确度”的权衡分析，或者设计实验证明其“不完美”的节奏是更可控、更符合人类演唱习惯的，但这并未出现。
- **合成数据（Muse）的依赖与潜在伪影**：CrawlSinger-OS 中包含 2000 多小时的 SunoV5 合成数据。用合成数据训练并和未使用合成数据的模型对比，可能导致模型学到了合成音频的特有伪影，但现有评测指标可能无法体现这一点。尽管论文用UMAP可视化显示了其分布偏差，但未进行“仅用真实数据”或“仅用合成数据”的对比实验，其带来的具体影响未知。
- **计算成本与实时性存疑**：1.7B + 0.6B 参数的模型需要 4 块 H100 训练数天，对于学术研究来说门槛极高。论文中未讨论推理延迟和计算量，其应用于实时作曲辅助场景的适用性存疑。
- **音色提示的信息泄露**：系统要求 2-8s 的同曲目内片段作为音色提示。这种方法可能同时泄露了演唱风格和表现力信息，使得生成样本在“音色相似度”之外，获得了不公平的风格一致性优势，但这在对比实验中未被隔离和控制。
- **对未公开数据的依赖**：VocalRender-Pro 依赖一个 5600+ 小时的内部数据集 CrawlSinger，这部分数据和训练过程完全不透明，其性能提升无法被归因和验证，降低了其结论的可信度。

---

[← 返回 2026-07-31 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-31/)
