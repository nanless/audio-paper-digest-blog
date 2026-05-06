---
title: "Token-Based Audio Inpainting via Discrete Diffusion"
date: 2026-05-04
draft: false
tags: [音乐生成, 扩散模型, 预训练, 离散模型]
categories: [iclr-2026]
description: "音乐生成 | 7.5/10"
hiddenInHomeList: true
---

# 📄 Token-Based Audio Inpainting via Discrete Diffusion

#音乐生成 #扩散模型 #预训练 #离散模型

✅ **7.5/10** | 前25% | #音乐生成 | #扩散模型 | #预训练 #离散模型

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高

### 👥 作者与机构

- 第一作者：Tali Dror， Iftach Shoham（*为共同第一作者）（Ben-Gurion University of the Negev）
- 通讯作者：未明确标注（从作者列表及邮箱推测，Eliya Nachmani可能是负责人）
- 作者列表：
    - Tali Dror (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)
    - Iftach Shoham (Ben-Gurion University of the Negev, Faculty of Computer and Information Science, Data Science Research Center)
    - Moshe Buchris (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)
    - Oren Gal (University of Haifa)
    - Haim Permuter (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)
    - Gilad Katz (Ben-Gurion University of the Negev, Faculty of Computer and Information Science, Data Science Research Center)
    - Eliya Nachmani (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)

#

### 💡 毒舌点评

这篇论文的亮点在于它为音频修复这个“老”问题提供了一个“新”且优雅的技术范式——直接在离散token空间用扩散模型“填空”，避开了连续波形或频谱建模的诸多麻烦，并在长间隙修复上证明了其有效性。然而，其理论深度和创新野心略显不足，本质上是现有组件（WavTokenizer, DiT, DWDSE）的巧妙集成与适配，且实验规模（如数据集量级、模型参数）与当前大模型时代的主流工作相比显得较为“迷你”，限制了其更广泛的影响力。

#

### 🔗 开源详情

- 代码：论文中提供了项目页面和代码链接：https://github.com/iftachShoham/AIDD。
- 模型权重：论文中未明确提及是否公开预训练模型权重。
- 数据集：使用的MusicNet和MAESTRO是公开的标准数据集，但论文未说明获取方式或是否需要申请。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的超参数配置表（附录表8）、训练环境（单卡NVIDIA A6000）、训练步数与时长等复现所需的关键信息。
- 论文中引用的开源项目：依赖的开源工具/模型包括：WavTokenizer（Ji et al., 2024）、UniCodec（Jiang et al., 2025，作为对比）、Diffusion Transformer (DiT) 架构（Peebles & Xie, 2023）。

### 📌 核心摘要

1.  问题：音频修复（Audio Inpainting）旨在恢复音频信号中的缺失或损坏段。现有的基于扩散模型的方法在缺失区域较大时性能会下降。
2.  核心方法：本文提出AIDD（Audio Inpainting via Discrete Diffusion），是首个将离散扩散模型应用于token化音乐表示的方法。该方法首先使用预训练的WavTokenizer将音频波形编码为离散token序列，然后在token空间应用基于Diffusion Transformer（DiT）的离散扩散模型进行修复。关键创新包括：a) Span-based Masking：在扩散前向过程中采用结构化的连续片段遮蔽，模拟从局部损坏到语义扰动的过程；b) Derivative-based Regularization Loss：在训练时引入导数正则化损失，鼓励预测的token嵌入在时间维度上平滑，提升连贯性。
3.  新颖性：与之前在连续波形（如DiffWave）或频谱图（如MAID, CQT-Diff+）上操作的方法不同，AIDD完全在离散token序列上进行建模，这有助于捕捉高层语义结构并避免相位重建等问题。
4.  实验结果：在MusicNet和MAESTRO数据集上，针对150ms至750ms的缺失间隙进行了评估。主要结果如下（关键数据来自论文表1和表2）：
    *   MusicNet（多间隙修复）：在200ms-300ms间隙上，AIDD在FAD和ODG指标上均优于强基线CQT-Diff+。例如在300ms间隙，AIDD的FAD为3.549，而CQT-Diff+为4.652（降低约24%）；ODG（越高越好）AIDD为-3.284，CQT-Diff+为-3.711。
    *   MAESTRO（单间隙修复）：在375ms和750ms的长间隙上，AIDD的ODG（PEA-Q）分数显著优于GACELA、bin2bin等GAN基线。例如在750ms间隙，AIDD的ODG为-2.596 ± 1.300，而最佳基线bin2bin-MIDI为-2.976 ± 0.456。
    *   主观评估（MOS）：在MAESTRO上，AIDD（使用WavTokenizer）获得3.64 ± 1.26的MOS分，略高于CQT-Diff+（3.51 ± 1.34）和GACELA（3.51 ± 1.33）。
5.  实际意义：该方法为音乐音频修复，特别是长间隙修复，提供了一种高效且效果更好的新方案。其token-based离散扩散框架也可为其他序列生成任务（如语言模型）提供借鉴。
6.  主要局限性：修复质量的上限受底层tokenizer（WavTokenizer）的质量和带宽（24kHz）限制；存在训练时（完整音频分词后遮蔽）与推理时（音频含缺失段分词）的不匹配问题；与基于连续表示的基线在评估上存在跨域差异。

### 🏗️ 模型架构

AIDD的整体架构是一个两阶段的流程：音频tokenization 和 基于离散扩散的修复。其核心是将音频修复问题转化为一个离散token序列的填充（inpainting）问题。

![AIDD方法概览图](https://nanless.github.io/audio-paper-digest-images/iclr-2026/2026-05-04/9ZogqiyWXm-4.png)

（图1：AIDD方法框架图。展示了训练和推理流程。）

1.  音频Tokenization（WavTokenizer）：
    *   功能：将高维原始音频波形压缩为紧凑的离散token序列。这是一个预训练好的、基于单量化器的编码器-解码器模型。
    *   流程：
        *   编码器：接收原始音频波形，输出离散token序列 `x = (x1, ..., xL)`。每个token代表音频的一个语义片段。
        *   解码器：接收token序列，重建出对应的音频波形。在修复任务中，仅对修复区域的token进行解码，与原始未损坏区域波形拼接。
    *   关键点：这种表示避免了直接处理原始波形或频谱图的复杂性，将问题离散化。

2.  离散扩散模型（Discrete Diffusion Model）：
    *   架构：采用 Diffusion Transformer (DiT) 作为核心网络，它是一个编码器结构的Transformer，整合了时间步条件。模型集成了旋转位置编码（RoPE）。
       前向过程（训练时）：对输入的干净token序列 `x0`，应用 Span-based Masking 策略进行损坏。该策略不是独立随机遮蔽token，而是采样连续的片段（span）进行遮蔽，其总预算由时间步 `t` 对应的噪声量 `B(t) = (1 - e^{-σ_bar(t)})  L` 决定。早期时间步倾向于遮蔽短片段，后期则可能出现更长的片段。最终得到损坏的序列 `xt`（部分token被`[MASK]`替换）。
    *   反向过程（训练与推理）：DiT模型被训练来估计 具体分数（concrete score） `sθ(xt, t)`，即预测每个被遮蔽位置上，token从`[MASK]`恢复为原始token的概率分布。训练目标是DWDSE（扩散加权去噪分数熵） 损失。在推理时，从一个完全遮蔽（或部分遮蔽，取决于输入）的token序列 `xT` 开始，通过迭代应用学到的反向过程（基于公式4），逐步恢复出原始token序列 `x0`。

3.  导数正则化损失（Derivative-based Regularization Loss）：
    *   作用：这是一个辅助训练目标，用于强制模型预测的token嵌入在时间序列上更平滑。
       方法：计算真实token嵌入 `ei` 和预测token嵌入 `êi` 的一阶差分 `Δ1ei` 和二阶差分 `Δ2ei`，然后计算两者在被遮蔽位置上的均方误差 `Lderiv`。总损失为 `Ltotal = LDWDSE + λ  Lderiv`。
    *   动机：DWDSE损失只关注预测正确的token分布，不直接约束相邻token嵌入的连续性。该正则化项惩罚嵌入空间中的不规则波动，使修复结果在时间上更自然。

数据流总结：原始波形 -> WavTokenizer编码 -> 离散token序列 -> （训练时）Span-based Masking损坏 -> DiT预测分数（结合DWDSE+导数损失训练）-> （推理时）迭代反向扩散修复token序列 -> WavTokenizer解码 -> 修复后的音频波形（仅替换缺失段）。

### 💡 核心创新点

1.  首次将离散扩散应用于token化音乐修复：这是本文最主要的贡献。将音频修复问题从连续空间（波形/频谱）转换到离散token空间，利用离散扩散模型（DDM）的生成能力。这使得模型能够关注高层语义结构，避免了连续信号处理中的相位重建、长程依赖建模困难等问题，在长间隙修复上取得了优势。
2.  结构化的Span-based Masking前向过程：不同于传统DDM中独立随机遮蔽token，本文设计了基于连续片段的遮蔽策略。该策略模拟了从局部细小损坏到大范围语义缺失的渐进损坏过程，更符合音频信号的局部相关性，使模型在训练时就能学习到处理不同尺度缺失的能力。
3.  用于平滑预测的导数正则化损失：提出了一个新颖的辅助损失函数 `Lderiv`，通过约束预测token嵌入的一阶或二阶导数（即差分）与真实值对齐，显式鼓励修复结果在时间维度上的平滑与连贯，弥补了核心DWDSE损失在此方面的不足。

### 🔬 细节详述

- 训练数据：
    - 数据集：MusicNet（330首古典音乐录音，含对齐标注）和MAESTRO（200+小时钢琴演奏数据）。
    - 预处理：将原始音频tokenize后，截断为固定长度的300个token（约4秒音频）。
    - 数据增强：未明确提及额外增强。训练数据即为token序列本身，通过随机时间步和span masking进行“增强”。
- 损失函数：
    - 主损失：`LDWDSE`（公式3），基于扩散加权去噪分数熵，用于训练模型估计正确的token转移分数。
    - 辅助损失：`Lderiv`（导数正则化损失），计算预测与真实token嵌入在遮蔽位置及其邻域上的一阶或二阶差分的L2范数。
    - 总损失：`Ltotal = LDWDSE + λ * Lderiv`，其中 `λ` 是权重因子（消融实验中测试了200, 500, 800）。
- 训练策略：
    - 优化器：AdamW，学习率 `1e-6`，EMA衰减 `0.9999`。
    - Batch size：128。
    - 训练步数：MusicNet数据集上，基础模型训练400k步（约2天）；其他变体训练100k步。MAESTRO数据集训练150k步（约24小时）。
    - 调度策略：未说明明确的学习率调度器。
- 关键超参数：
    - Token序列长度：训练时固定为300。
    - 模型大小：DiT模型约90M参数（WavTokenizer版本）。
    - Token词表大小：WavTokenizer为4096；UniCodec为16384。
    - 扩散步数：推理时采样步数为1024。
    - Span Masking参数：`ℓmax=30`， `p0=0.8`， `α=0.5`（最佳组合）。
- 训练硬件：单卡NVIDIA A6000 GPU。
- 推理细节：
    - 流程：1) 将含缺失段的音频波形用WavTokenizer编码成token序列。2) 训练好的DiT在token序列上执行迭代反向扩散（1024步），修复缺失的token。3) 将修复后的token序列用WavTokenizer解码，仅将修复部分的波形替换回原始音频，边界处做10ms交叉淡入淡出。
    - 随机性：由于扩散过程是随机的，对每个输入生成10个样本并报告平均分。
- 正则化/稳定训练技巧：使用了Derivative-based Regularization Loss（`Lderiv`）来稳定训练并提升生成质量。训练中使用了EMA（指数移动平均）。

### 📊 实验结果

论文在两个标准数据集上评估了AIDD的有效性，并与多种基线方法进行了对比。关键结果如下：

表1：不同间隙长度下各方法在MusicNet数据集上的性能对比
| 方法 | 150 ms | | | 200 ms | | | 250 ms | | | 300 ms | | |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| | FAD↓ | LSD↓ | ODG↑ | FAD↓ | LSD↓ | ODG↑ | FAD↓ | LSD↓ | ODG↑ | FAD↓ | LSD↓ | ODG↑ |
| Masked | 16.001 | 0.555 | -3.873 | 18.244 | 0.763 | -3.881 | 23.583 | 0.971 | -3.891 | 33.342 | 1.162 | -3.897 |
| LPC | 3.172 | 0.184 | -3.351 | 4.883 | 0.258 | -3.467 | 7.934 | 0.336 | -3.512 | 11.907 | 0.415 | -3.550 |
| A-SPAIN-L | 6.121 | 0.198 | -3.668 | 12.038 | 0.311 | -3.767 | 16.181 | 0.445 | -3.801 | 21.574 | 0.610 | -3.818 |
| CQT-Diff+ | 1.525 | 0.164 | -3.559 | 2.619 | 0.218 | -3.651 | 3.202 | 0.272 | -3.891 | 4.652 | 0.324 | -3.711 |
| AIDD | 1.866 | 0.162 | -3.215 | 2.391 | 0.209 | -3.250 | 2.438 | 0.260 | -3.274 | 3.549 | 0.297 | -3.284 |
（关键结论：在150ms间隙，CQT-Diff+的FAD略优；但在200ms及以上的中长间隙，AIDD在所有三个指标（FAD、LSD、ODG）上均优于所有基线，包括强扩散模型CQT-Diff+。尤其在300ms间隙，AIDD的FAD相比CQT-Diff+降低了约24%。）

表2：不同间隙长度下各方法在MAESTRO数据集上的ODG (PEA-Q) 分数对比
| 方法 | 375 ms (↑) | 750 ms (↑) |
| :--- | :---: | :---: |
| GACELA | -3.232 ± 0.232 | -3.318 ± 0.202 |
| bin2bin | -2.892 ± 0.510 | -3.039 ± 0.495 |
| bin2bin-MIDI | -2.800 ± 0.491 | -2.976 ± 0.456 |
| AIDD | -2.303 ± 0.692 | -2.596 ± 1.300 |
（关键结论：在MAESTRO的长间隙修复任务上，AIDD的ODG分数显著高于（即优于）所有GAN基线。在375ms间隙，AIDD领先第二名bin2bin-MIDI约0.5个ODG点；在750ms间隙，领先约0.38个点，且标准差较大，表明性能有波动。）

![主观评估MOS结果](https://nanless.github.io/audio-paper-digest-images/iclr-2026/2026-05-04/9ZogqiyWXm-6.png)

（表3：MAESTRO数据集上的主观平均意见得分（MOS）对比。AIDD（使用WavTokenizer）得分为3.64 ± 1.26，略高于CQT-Diff+和GACELA的3.51分。）

消融实验（表4）：
- Span-Based Masking：相比基础DWDSE损失，使用span masking（p0=0.6; α=0.5）可降低200ms间隙的FAD（从2.802降至2.438）。
- Derivative-Based Loss：单独使用一阶导数损失（λ=200; Δ1e）同样能降低FAD（降至2.455）。
- Combined：结合两种方法（λ=500; p0=0.8; α=0.5; Δ1e）在200ms间隙取得最低FAD（2.391），在300ms间隙取得最佳ODG（-3.284），验证了组合策略的有效性。
- Tokenizer对比（表5）：在MAESTRO数据集上，WavTokenizer版本的AIDD在FAD和ODG指标上全面优于UniCodec版本，表明该方法对底层tokenizer的敏感性。

延迟分析（表6）：
AIDD（WavTokenizer）在推理速度和模型大小上均优于CQT-Diff+。AIDD模型参数90M，推理时间5.25秒（平均）；CQT-Diff+模型242M，推理时间12.54秒。

推理训练不匹配分析（表9）：
实验对比了“先mask再tokenize”（推理）与“先tokenize再mask”（匹配训练）两种流程，结果显示两者性能差异可忽略，表明当前训练-推理不匹配问题影响有限。

### ⚖️ 评分理由

- 学术质量：6.0/7
    - 创新性（2/2.5）：提出首个将离散扩散应用于token化音频修复的框架，思路新颖。Span masking和导数损失是针对该问题具体设计的有效技巧，但整体上是对现有技术（DDM, DiT, WavTokenizer）的创新性组合，而非底层理论的突破。
    - 技术正确性（2/2.5）：方法描述清晰，理论依据扎实（基于离散扩散和DWDSE），实验设计合理，消融实验充分验证了各组件作用。
    - 实验充分性（2/2.5）：在两个标准数据集上进行了全面对比，涵盖传统方法、GAN、扩散模型等多类基线；使用了多个客观指标（FAD, LSD, ODG）和主观MOS评估；进行了详细的消融研究和影响因素分析（如tokenizer、训练-推理不匹配）。
- 选题价值：1.5/2
    - 前沿性（0.75/1）：音频修复是持续有需求的任务，本文探索了基于token和离散扩散的新范式，处于该领域的技术前沿。
    - 潜在影响与应用空间（0.75/1）：为音乐修复、通信丢包补偿等实际问题提供了性能更优的新方案。其token-based范式对序列生成任务有启发意义，但应用范围相对垂直。
- 开源与复现加成：+0.5/1
    - 论文提供了明确的GitHub代码链接，并在附录中给出了非常详细的超参数、硬件环境、训练时长等复现信息，使得研究者可以较为容易地重现结果。但未提及模型权重是否公开、外部数据集是否需要额外申请步骤。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
