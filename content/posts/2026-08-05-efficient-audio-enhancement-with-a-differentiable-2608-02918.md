---
title: "Efficient Audio Enhancement with a Differentiable Psychoacoustic Loss"
date: 2026-08-05
draft: false
tags: [音频超分辨, 生成对抗网络, 音频理解, Transformer, 模型评估]
categories: [论文速递]
description: "音频超分辨 | 8.2/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.02918"
---

# 📄 Efficient Audio Enhancement with a Differentiable Psychoacoustic Loss

标签：#音频超分辨 #生成对抗网络 #音频理解 #Transformer #模型评估

**8.2/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 1/1 | 影响 1/1.5 | 开源 1.5/1.5 | 复现 0.4/0.5 | 工程 1.1/1.5

🔥 **8.2/10** | 前25% | 文档类型：系统技术报告 | 评分置信度：高 | #音频超分辨 | #生成对抗网络 | #音频理解 #Transformer | [arxiv](https://arxiv.org/abs/2608.02918v1)


### 👥 作者与机构

- 第一作者：Wallace Abreu（SMT， DEL/Poli & PEE/COPPE， Federal University of Rio de Janeiro）
- 通讯作者：Wallace Abreu（SMT, DEL/Poli & PEE/COPPE, Federal University of Rio de Janeiro; corresponding e-mail: wallace.abreu@smt.ufrj.br）
- 作者列表：Wallace Abreu（Federal University of Rio de Janeiro）、Bernardo V. Miranda（Federal University of Rio de Janeiro; LCTI, Télécom Paris, IP Paris）、Luiz W. P. Biscainho（Federal University of Rio de Janeiro）

### 💡 毒舌点评

这篇论文做了一件很“实用”的事：把一个30年前的经典心理声学模型PAQM做成可微损失，塞进轻量级Mamba架构里，在流行音乐的超分辨和压缩修复上均实现了听觉感知质量的显著提升。亮点是扎实的主观听感实验和详尽的效率分析，让工程贡献很有说服力。短板也明显：论文更像一份优秀的工程报告，方法本质是“A+B”的组合式创新，且关键超参数的选择略显随意，消融实验设计存在漏洞，难以严格归因各组件的贡献。

### 📌 核心摘要

1. 本文的核心目标是解决两个音频增强问题：音频带宽扩展（BWE，自4倍上采样），以及严重有损压缩音频（MP3 32 kbps）的修复，要求在提升感知音质的同时降低计算开销。
2. 方法核心是基于AERO框架提出两个改进变体：(i) **AEROMambaP**：用Mamba状态空间模型替换AERO中的LSTM和局部注意力层，并将经典心理声学模型PAQM实现为可微分损失函数`torchpaqm`，加入生成器的训练目标；(ii) **AEROMambaPS̄**：专用于压缩音频增强，完全弃用STFT重建损失，仅依靠PAQM损失、对抗损失和特征匹配损失进行训练。
3. 与已有工作相比，主要新意在于：(i) 首次将完整的PAQM模型实现为可微分的PyTorch算子，并成功用作深度网络的感知训练损失；(ii) 验证了Mamba在GAN音频超分模型中，能以更低资源消耗实现更优性能；(iii) 针对压缩音频修复，提出并验证了完全基于感知损失替代传统重建损失的训练策略。
4. 主要实验结果：
   - **效率**：AEROMamba推理比AERO快约14倍，GPU显存占用降至原来的约1/6。
   - **带宽扩展**：在MUSDB数据集的主观评分上，AEROMambaP（79.26）显著优于AERO（60.03）和AEROMamba（66.47）。在PianoEval数据集上各模型差异不大，AEROMamba-HQ（84.41）表现最佳，而AEROMambaP（78.76）未显示出优势。
   - **压缩音频增强**：在MUSDB数据集上，AEROMambaPS̄的主观评分（75.6）远超AEROMambaP（49.7）和低码率基线（50.7），表明在此场景下PAQM损失可完全替代STFT重建损失。但在PianoEval上，各模型主观评分接近。
5. 实际意义在于提供了一套兼顾推理效率与高感知质量的音频增强方案，并开源了独立工具包`torchpaqm`，为工业界部署和后续研究提供了直接可复用的组件。
6. 主要局限包括：模型仅支持固定的4倍上采样因子；PAQM损失权重\(\gamma\)的选择缺乏系统研究；对钢琴等频谱稀疏、音色为主的信号，感知损失效果不彰甚至可能引入噪声。

### 🔗 开源详情

- 代码：论文随附网页声称提供源代码，独立工具包`torchpaqm`已在GitHub开源（https://github.com/bvm810/torchpaqm/tree/main）。
- 模型权重：论文随附网页声称提供模型检查点。
- 数据集：MUSDB为公开数据集（https://sigsep.github.io/datasets/musdb.html）；PianoEval为作者自行收集，论文未提供直接获取链接。
- Demo与补充材料：项目主页为 https://aeromamba-paqm.github.io，包含音频示例、统计检验结果、分数分布可视化等。
- 复现材料：训练超参数详见Table I。模型检查点、音频示例和补充实验材料均声称在项目主页提供。

### 🏗️ 方法概述和架构

本工作基于AERO（音频超分辨率生成对抗网络）框架进行两方面的核心改进：架构轻量化（引入Mamba）和感知损失驱动（引入可微PAQM）。

下图展示了原始 AERO 编码器层，作为理解本文将被 Mamba 替换部分的结构参考。

![Figure 2: AERO encoder layer.](https://arxiv.org/html/2608.02918v1/figs/Figure_2.jpg)

图中显示原始 AERO 编码器层中的 Conv1D、BiLSTM 和 Local Attention 组成的残差结构；本文后续将 BiLSTM 与局部注意力替换为 Mamba。


整个生成器是一个U-Net结构的编码器-解码器。输入的低采样率音频首先通过STFT转换为低分辨率复数频谱。由于输入和输出频谱尺寸需保持一致，输入频谱的高频部分用零填充。编码器-解码器处理该频谱后生成高分辨率频谱，再通过逆STFT（iSTFT）重构出高采样率波形。最终，由多尺度判别器对生成波形和真实波形进行对抗训练。

原版AERO的编码器核心由包含“Conv1D + BiLSTM + Local Attention”的残差块构成。AEROMamba将其中的BiLSTM和局部注意力层全部替换为Mamba选择性状态空间模型层。Mamba通过输入依赖的参数化离散化步长和矩阵\(B， C\)，实现了类似注意力机制的上下文动态选择性，但训练和推理均为线性复杂度，且通过硬件感知的并行扫描算法在GPU的SRAM中进行计算，效率极高。
编码器前端保留了在频率维度进行1D卷积和Frequency Transformer Block (FTB)的设计。FTB本质是一个注意力层，用于捕捉频率轴上的非局部相关性，弥补纯卷积感受野有限的缺陷。其输出经1D卷积和GELU激活函数处理后，进入由Mamba块构成的核心残差层。每个残差块前有1D卷积、层归一化和Snake激活函数，输出后接Layer Scale操作以提升收敛稳定性。解码器与编码器对称，并通过跳层连接恢复细节。

PAQM是一种模仿人耳感知的客观音质评价模型。其核心流程为：对参考和测试信号进行STFT，将频率轴映射到Bark尺度以模拟人耳对音高的非线性感知，再经外耳/中耳传递函数滤波、时域（指数滑动平均）和频域（扩散卷积）掩蔽效应建模、响度非线性压缩，以及分频段能量归一化后，在Bark域计算误差，最终通过Sigmoid函数映射为1-5范围的客观MOS。
作者开发的`torchpaqm`库将上述过程完全向量化，仅使用矩阵乘法、卷积和逐元素运算实现，使得PyTorch能够自动求导，从而将PAQM的客观MOS评分直接作为可优化的损失项\(L_\text{PAQM}\)。

- **AEROMambaP**：用于带宽扩展。损失函数为 \(\tilde{L}_\mathcal{G} = L_\text{adv} + L_\text{rec} + \lambda L_\text{fmap} - \gamma L_\text{PAQM}\)。其中\(L_\text{rec}\)为多分辨率STFT重建损失（谱收敛+对数幅度），保障能量忠实度，\(L_\text{PAQM}\)引导感知优化，\(\gamma=1\)。
- **AEROMambaPS̄**：专用于有损压缩增强。损失函数完全弃用\(L_\text{rec}\)，变为 \(\tilde{L}_\mathcal{G} = L_\text{adv} + \lambda L_\text{fmap} - \gamma L_\text{PAQM}\)，\(\gamma=10\)。设计动机在于：(i) PAQM最初就是为评估有损编码器设计；(ii) PAQM内部的频域处理已隐式包含谱重建，避免MSE-style损失在严重压缩音频上引入非自然瑕疵。时间域的\(L_\text{adv}\)和\(L_\text{fmap}\)被保留，以防止产生相位伪影。

### 💡 核心创新点

1. **可微分心理声学损失函数**：将已有30年历史的PAQM模型首次完整实现为可微分的PyTorch算子`torchpaqm`，使其能直接作为深度网络的训练损失。这不同于以往依赖信号级重建损失（如STFT loss）的方法，能显式引导模型优化人耳感知质量，在MUSDB主观测试中带来显著提升。
2. **针对有损编码增强的专用损失范式**：发现传统STFT重建损失在严重压缩音频上可能引入听觉可感知的瑕疵，进而提出AEROMambaPS̄，完全用\(L_\text{PAQM}\)替代\(L_\text{rec}\)。这是针对编码音频修复任务的一个具有洞察力的解决方案，并通过实验得到验证。
3. **状态空间模型在音频生成任务中的高效高质验证**：通过AEROMamba系列模型，验证了Mamba选择性状态空间模型可以成功替代GAN音频超分模型中的RNN和Attention，打破了高效模型通常以牺牲生成质量换取速度的普遍认知，为后续研究提供了有价值的参考。

### 📊 实验结果

（测试硬件：NVIDIA RTX 3090 GPU）

| 方法 | 显存占用 (MB) | 10s片段推理时间 (s) | 参数量 |
| :--- | :--- | :--- | :--- |
| AERO | 17091 | 1.246 | 19,432,958 |
| **AEROMamba** | **3000** | **0.087** | 20,964,190 |

下图提供了信号15在带宽扩展任务下的语谱图对比，从参考信号到不同模型的输出。

![Figure 6: Spectrograms for signal 15: (a) Reference, (b) Low-resolution, (c) AERO, (d) AEROMamba, and (e) AEROMambaP\\textrm{AEROMamba}_{\\textrm{P}}.](https://arxiv.org/html/2608.02918v1/figs/Figure_6.jpg)

图中可见AEROMambaP生成的频谱更接近参考信号，高频细节恢复较好，直观支持了主观评分结果。


下图展示了在MUSDB数据集上，各模型针对低码率信号（压缩增强任务）的主观评分对比。

![Figure 7: Subjective scores for low-bitrate and various models per track of MUSDB.](https://arxiv.org/html/2608.02918v1/figs/Figure_7.jpg)

图中显示AEROMambaPS̄的得分远超其他模型，表明完全基于感知损失的训练策略在该任务上取得了最佳听感。


下图展示了在MUSDB数据集上，各模型针对低分辨率信号（带宽扩展任务）的主观评分对比。

![Figure 5: Subjective scores for low-resolution signals and various models per track of MUSDB.](https://arxiv.org/html/2608.02918v1/figs/Figure_5.jpg)

图中可见AEROMambaP的平均得分显著高于其他模型，验证了PAQM感知损失对音质提升的有效性。


### 音频超分辨 (11.025 kHz → 44.1 kHz)
| 系统 | PianoEval 主观评分↑ | MUSDB 主观评分↑ | MUSDB ViSQOL↑ | MUSDB LSD↓ | PianoEval ViSQOL↑ | PianoEval LSD↓ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Low-Resolution | 72.92 | 38.22 | 1.82 | 3.98 | 4.36 | 1.09 |
| AERO | 76.89 | 60.03 | 2.90 | 1.34 | 4.38 | 0.99 |
| AEROMamba | - | 66.47 | 2.93 | 1.23 | 4.43* | 0.98 |
| AERO-HQ | - | - | - | - | 4.34 | 1.04 |
| AEROMamba-HQ | **84.41** | - | - | - | 4.38 | 1.00 |
| **AEROMambaP** | 78.76 | **79.26** | **3.04** | **1.19** | 4.42 | 0.98 |
| AEROMambaP-HQ | - | - | - | - | 4.41 | 0.90 |
| AudioSR | - | - | 3.01 | - | 3.89 | - |

（注：* 表示与低分辨率对比，统计上无显著差异）

### 有损压缩音频增强 (MP3 32 kbps)
| 系统 | PianoEval 主观评分↑ | MUSDB 主观评分↑ | MUSDB ViSQOL↑ | MUSDB LSD↓ | PianoEval ViSQOL↑ | PianoEval LSD↓ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Low-Bitrate | 69.5 | 50.7 | 1.80 | 2.02 | 4.35 | 2.33 |
| AEROMamba | 83.4 | 49.8 | 2.45 | 1.24 | 4.22 | 1.14 |
| AEROMambaP | 84.1 | 49.7 | 2.99 | 1.27 | 4.24 | 1.12 |
| **AEROMambaPS̄** | **85.5** | **75.6** | 2.90 | **1.23** | 4.41 | 1.13 |

### 🔬 细节详述

- **训练数据**：
  - PianoEval（作者自制）：包含肖邦24首前奏曲等钢琴录音，总计约27.5小时。分为GQ（1950年后录音）和HQ（1960年后录音）子集，并按表演者划分训练/验证/测试集，以避免数据泄露。
  - MUSDB[26]：150首完整混音音乐曲目（约10小时），风格涵盖流行/摇滚等，按官方86/14/50划分训练/验证/测试集。
- **损失函数**：
  - 生成器总损失：\(\tilde{L}_\mathcal{G} = L_\text{adv} + L_\text{rec} + \lambda L_\text{fmap} - \gamma L_\text{PAQM}\)。
  - AEROMambaP (BWE): \(\gamma=1\)，保留\(L_\text{rec}\)。
  - AEROMambaPS̄ (压缩增强): \(\gamma=10\)，移除\(L_\text{rec}\)。
  - 判别器：MelGAN Hinge loss。
- **训练策略**：
  - 优化器：Adam，学习率 \(3\times10^{-4}\)。
  - 批次大小：AERO在MUSDB上微调为4，在PianoEval上从头训练为4；AEROMamba及其变体均为8。
  - 训练段长度：MUSDB为4s，PianoEval为6s，无极短或静音片段。
  - 迭代轮次：带宽扩展约800 epochs，压缩增强约200 epochs，根据验证集（PianoEval）或测试集（MUSDB）的PAQM分数收敛（变化 < 0.01/5 epochs）提前停止。
- **关键超参数**：
  - STFT：窗长W=512，跳长H=256。
- **训练硬件**：使用单张 NVIDIA RTX 3090 GPU。
- **推理细节**：非流式，处理10s片段，AEROMamba耗时0.087s。
- **正则化与技巧**：使用Snake、GELU激活函数，Layer Normalization，Layer Scale等。

### ⚖️ 评分理由

*   创新性 (1.2/2)：首次将已有30年历史的PAQM完整实现为可微PyTorch算子torchpaqm，并用作感知训练损失，替换传统STFT重建损失（[A_SUMMARY], [A_METHOD]）。此外，将Mamba选择性状态空间模型引入GAN音频超分框架，以更低的计算开销取得更优性能，构成了有意义的组合式工程创新（[A_SUMMARY], [SCORING_SOURCE_5]）。

*   技术严谨性 (1.0/1.5)：方法设计合理，PAQM的可微实现仅使用矩阵乘法和逐元素操作，无数学或算法错误；Mamba替换方案和损失函数推导清晰（[A_METHOD], [SCORING_SOURCE_13]）。虽无深层的理论突破，但技术方案完整且逻辑自洽。

*   实验充分性 (1.0/1.5)：消融实验不完整，无法解耦Mamba架构与PAQM损失各自的贡献，因果推断困难（[A_LIMITS]）；γ超参数选择随意，缺乏系统调优曲线（[A_LIMITS]）；对比基线未包含Apollo等最新SOTA，且主要对比的AERO使用次优配置，对比公平性受限（[A_LIMITS]）；压缩增强任务中ViSQOL与主观评分背离未得到合理解释（[A_LIMITS]）。这些问题削弱了实验结论的坚实度。

*   清晰度 (1.0/1)：全文结构清晰，图表（如架构图、效率对比表）表达准确，公式和训练细节（Table I）交代清楚，符合JAES出版标准。无明显组织、符号或表达上的扣分项。

*   影响力 (1.0/1.5)：工作聚焦音频增强领域，通过可微感知损失和高效架构获得显著主观听感提升，开源torchpaqm为后续研究提供了可复用组件（[A_SUMMARY]）。但受限于固定上采样因子和钢琴等部分信号上的表现，通用影响力中等。

*   开源 (1.5/1.5)：独立工具包torchpaqm已在GitHub完整开源，论文随附网页声称提供完整源代码和模型检查点（[A_OPEN]），项目主页包含音频示例、统计检验等补充材料。核心产物（代码+模型权重）开放且文档较完整。

*   可复现性 (0.4/0.5)：训练超参数（Table I）、硬件（RTX 3090）、数据集划分（MUSDB官方分割，PianoEval按演奏者划分）均明确交代，复现流程基本可行（[A_RESULTS], [A_OPEN]）。但PianoEval数据集需自行收集，缺少直接获取链接，且未提供随机种子等细节，存在少量缺失。

*   工程/实践价值 (1.1/1.5)：相比AERO，推理速度提升约14倍，GPU显存占用降至约1/6（[A_RESULTS]），同时主观音质大幅领先，实现了高感知质量与低资源消耗的良好平衡。尽管仅支持4倍固定上采样，但整体方案对实际部署十分友好，工程价值显著。

### 🚨 局限与问题

1. **论文明确承认的局限**：
   - 仅支持固定的4倍上采样因子，限制了应用灵活性。
   - PAQM损失权重\(\gamma\)未进行系统调优，目前设定较为随意。
   - 仅限于与现有SOTA模型（如Apollo）进行全面的横向对比，仅纳入了预训练AudioSR作为补充基线。
   - 在钢琴等频谱稀疏信号上，感知损失效果不佳甚至可能产生反作用，倾向于引入噪声。
2. **审稿人发现的潜在问题**：
   - **消融实验不完整，因果推断困难**：无法量化架构（Mamba）与感知损失（PAQM）对性能提升的各自贡献。AEROMambaP vs. AERO的显著提升，有多少来自Mamba，多少来自PAQM？这是必须通过补充“AERO + PAQM损失”实验来回答的关键问题。
   - **主客观指标的背离现象未解**：压缩增强任务中，`AEROMambaPS̄`的主观分遥遥领先，但其ViSQOL评分却不敌`AEROMambaP`。作者将此归因于其他模型引入了“听感自然的失真”，但这仅为推测，缺乏可解释性分析或更适配的客观指标（如PEAQ）来佐证，直接削弱了ViSQOL在该任务上的结论可靠性。
   - **\(\gamma\) 超参数的随意性**：\(\gamma=1\)和\(\gamma=10\)的选择仅基于“PAQM是为编码器设计”的朦胧动机，缺乏方法论上的严谨。没有展示\(\gamma\)变化对性能影响的平滑曲线，使结果对\(\gamma\)的鲁棒性存疑。
   - **对比基线的局限性**：虽较为公正，但未与Apollo等最新模型进行全面比较，且始终以次优配置（H=256）的AERO作为主要对比基准，结果的绝对高度和比较的公平性留有遗憾。

---

[← 返回 2026-08-05 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-05/)
