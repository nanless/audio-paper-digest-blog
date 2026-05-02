---
title: "Token-Based Audio Inpainting via Discrete Diffusion"
date: 2026-05-02
draft: false
tags: [音频生成, 扩散模型, 音乐生成, 离散表示, 音频修复]
categories: [iclr-2026]
description: "音频生成 | 7.5/10"
hiddenInHomeList: true
---

# 📄 Token-Based Audio Inpainting via Discrete Diffusion

#音频生成 #扩散模型 #音乐生成 #离散表示 #音频修复

✅ **7.5/10** | 前25% | #音频生成 | #扩散模型 | #音乐生成 #离散表示

学术质量 5.0/7 | 选题价值 1.5/2 | 复现加成 1.0 | 置信度 高


### 👥 作者与机构

- 第一作者：Tali Dror, Iftach Shoham (论文中为共同第一作者)
- 通讯作者：未说明
- 作者列表：Tali Dror (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering), Iftach Shoham (Ben-Gurion University of the Negev, Faculty of Computer and Information Science, Data Science Research Center), Moshe Buchris (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering), Oren Gal (University of Haifa), Haim H. Permuter (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering), Gilad Katz (Ben-Gurion University of the Negev, Faculty of Computer and Information Science, Data Science Research Center), Eliya Nachmani (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)

#

### 💡 毒舌点评

本文开创性地将离散扩散模型应用于音频修复，将问题转化为token序列补全，并通过精心设计的span masking和导数损失来模拟音频的连续性，实验结果在长空缺修复上显著超越传统方法，这无疑是其最大的亮点。然而，其性能天花板几乎被WavTokenizer这个“黑盒”tokenizer完全锁死，且训练时的“先tokenize再mask”与推理时的“先mask再tokenize”的不匹配可能引入难以量化的误差，这是两个明显的理论与实践短板。

#

### 🔗 开源详情

- 代码：论文明确提供了代码仓库链接：https://github.com/iftachShoham/AIDD
- 模型权重：论文中未提及是否公开训练好的模型权重。
- 数据集：使用公开数据集MusicNet和MAESTRO，并说明了获取和划分方式。
- Demo：论文中提到“Visit our project page for examples and code”，表明项目页面可能有演示样例，但未直接给出链接。
- 复现材料：提供了详细的超参数表（表8）、训练环境说明（附录B.1）以及实验设置，复现信息非常充分。
- 论文中引用的开源项目：依赖于WavTokenizer (Ji et al., 2024) 和 UniCodec (Jiang et al., 2025) 两个开源音频tokenizer。模型架构基于Diffusion Transformer (DiT)。

### 📌 核心摘要

1. 要解决什么问题：音频修复任务，即恢复音频信号中缺失或损坏的片段。现有基于连续扩散的方法在修复长时隙（如数百毫秒）时，性能和语义连贯性会显著下降。
2. 方法核心是什么：提出了一种名为AIDD（Audio Inpainting via Discrete Diffusion）的新框架。核心是先使用预训练的WavTokenizer将音频压缩为离散token序列，然后在一个纯离散的扩散过程中，通过一个Diffusion Transformer (DiT) 模型学习预测被掩码的token，最后将生成的token解码回音频波形。
3. 与已有方法相比新在哪里：这是首个将离散扩散模型应用于token化音频修复的工作。与在原始波形或频谱图上操作的连续扩散模型不同，AIDD在紧凑的离散潜在空间中进行，旨在更好地捕捉高层语义结构并避免波形建模的挑战。此外，论文引入了span-based masking（结构化掩码）和derivative-based regularization loss（基于导数的平滑性约束）两项新的训练技术。
4. 主要实验结果如何：在MusicNet和MAESTRO数据集上进行了评估。对于150ms-750ms的空缺，在FAD、LSD、ODG等客观指标上，AIDD在多数情况下优于或持平于包括CQT-Diff+在内的基线方法。例如，在MusicNet 300ms空缺下，AIDD的FAD为3.549，优于CQT-Diff+的4.652。在MAESTRO 375ms空缺下，AIDD的ODG（-2.303）显著优于GACELA（-3.232）。主观MOS测试也显示AIDD得分（3.64）高于GACELA和CQT-Diff+（均为3.51）。
5. 实际意义是什么：该工作为长时音频修复提供了新的解决方案，在音乐遗产数字化、损坏录音修复、音频数据填补等场景具有应用潜力。更重要的是，它探索并验证了“离散token+扩散模型”范式在音频生成任务中的可行性，为该领域开辟了新的研究方向。
6. 主要局限性是什么：(1) 性能上限严重依赖所使用的tokenizer（WavTokenizer）的重建质量和带宽（24kHz）。(2) 存在训练-推理不匹配：训练时对完整音频进行掩码，而推理时是对已有空缺的音频进行掩码和tokenize。(3) 所有测试音频均被下采样至24kHz以适应tokenizer，这可能损失高频信息。

#

### 🏗️ 模型架构

AIDD的整体框架如图1所示，主要分为三个阶段：
![图1: icassp-img://9ZogqiyWXm/0.png](https://nanless.github.io/audio-paper-digest-images/iclr-2026/2026-05-02/9ZogqiyWXm-0.png)
1.  音频tokenization：使用预训练的WavTokenizer编码器，将输入的原始波形（即使带有空缺）转换为一个紧凑的离散token序列。解码器则负责将修复后的token序列还原为波形。
2.  离散扩散建模与修复：这是核心部分。采用了一个Diffusion Transformer (DiT) 架构，它是一个在标准Transformer编码器基础上融入了时间步条件（timestep conditioning）的模型。
    *   训练时：对干净的音频token序列进行span-based masking（后文详述），然后将掩码后的序列连同时间步`t`输入DiT。DiT被训练来预测“concrete score”（具体分数），即通过DWDSE损失函数学习逆转掩码过程的概率。
    *   推理时：对于带有空缺的音频，先被tokenizer编码为token序列（空缺部分可能已被tokenizer处理为某种形式，但论文更强调在token空间模拟掩码）。DiT从一个完全掩码或部分掩码的状态开始，通过迭代采样（反向扩散）逐步预测并填充所有被掩码的token位置，生成完整的token序列。最后，仅将修复好的token片段解码并替换回原始音频的空缺处。
3.  波形重建与拼接：使用WavTokenizer解码器将修复后的token序列转换为波形。为确保平滑过渡，在修复片段与原始未损坏部分的边界处应用了10毫秒的交叉淡入淡出。

关键设计选择：选择离散token空间而非连续波形或频谱图，动机在于离散表示能够压缩信息，模型只需学习token的分布，从而更易捕捉高层语义（如和弦、旋律轮廓），并避开直接建模原始波形长程依赖的困难。DiT架构因其优秀的条件生成能力和可扩展性而被选用。

#

### 💡 核心创新点

1.  首次将离散扩散应用于音频修复：将音频修复任务重新定义为在离散潜在空间（token序列）上的补全问题。这与先前在连续域（波形、CQT）上的扩散模型形成鲜明对比，为处理长空缺提供了一种新范式。
2.  Span-based Masking（基于跨度的掩码）：不同于独立随机掩码token，该方法在扩散前向过程中会采样连续的token段进行掩码。这种结构化损坏更符合音频信号的连续性特征，模拟了从局部损坏到大范围语义缺失的渐进过程，使模型能更好地学习修复长程依赖。
3.  Derivative-based Regularization Loss（基于导数的正则化损失）：为了弥补DWDSE损失只关注token转换概率而不保证时序平滑的缺陷，论文引入了该损失。它通过约束预测token嵌入向量与真实嵌入向量的一阶或二阶差分（即离散导数）来保持时序连续性，惩罚不规则的局部波动，从而生成更自然、更符合音频平滑特性的序列。

#

### 🔬 细节详述

*   训练数据：
    *   数据集：MusicNet (古典音乐，22kHz) 和 MAESTRO (钢琴表演，16kHz或24kHz)。
    *   预处理：音频被重采样并截断为固定长度的300个token（约4秒）。训练时使用预训练的WavTokenizer进行编码。
    *   数据增强：未明确提及，但扩散过程本身具有数据增强效果。
*   损失函数：
    *   L_DWDSE (Eq. 3)：主要损失，扩散加权去噪分数熵损失。指导模型学习预测被掩码token的分数（具体分数的近似）。
    *   L_deriv：辅助损失，基于导数的正则化。计算预测token嵌入与真实嵌入的一阶（Δ1）或二阶（Δ2）差分的L2范数之差，并仅对掩码位置及其邻域计算。
       总损失：L_total = L_DWDSE + λ  L_deriv。λ为权重系数，消融实验中测试了λ=200，500，800。
*   训练策略：
    *   优化器：AdamW，学习率1e-6。
    *   Batch Size：128。
    *   训练步数：MusicNet上base模型400k步，其他变体100k步；MAESTRO上150k步。
    *   EMA：0.9999。
    *   噪声调度：对数线性（loglinear）。
    *   采样器：欧拉（Euler）预测器，推理时反向扩散步数为128。
*   关键超参数：
    *   模型大小：AIDD (WavTokenizer) 参数量90M（其中DiT部分约81M）。CQT-Diff+为242M。
    *   Tokenizer码本大小：WavTokenizer约4k (4096)， UniCodec约16k (16384)。
    *   Span Masking参数：跨度长度ℓ从几何分布Geo(p_σ)采样，p_σ = p0 / (1 + ασ)。消融实验最佳组合为p0=0.8, α=0.5, ℓmax=30。
*   训练硬件：
    *   单卡NVIDIA A6000 GPU。
    *   训练时长：MusicNet约2天（400k步），MAESTRO约1天（150k步）。
*   推理细节：
    *   对每个输入生成10个样本，取平均作为最终结果（应对随机性）。
    *   修复后音频与原始音频的拼接处使用10ms交叉淡入淡出。
*   正则化/稳定训练技巧：使用了EMA（指数移动平均）。导数损失本身也是一种正则化。

#

### 📊 实验结果

1. 主要对比实验

表1：MusicNet数据集性能对比
| 方法 | 150 ms | 200 ms | 250 ms | 300 ms |
| :--- | :--- | :--- | :--- | :--- |
| | FAD↓ LSD↓ ODG↑ | FAD↓ LSD↓ ODG↑ | FAD↓ LSD↓ ODG↑ | FAD↓ LSD↓ ODG↑ |
| Masked | 16.001 0.555 -3.873 | 18.244 0.763 -3.881 | 23.583 0.971 -3.891 | 33.342 1.162 -3.897 |
| LPC | 3.172 0.184 -3.351 | 4.883 0.258 -3.467 | 7.934 0.336 -3.512 | 11.907 0.415 -3.550 |
| A-SPAIN-L | 6.121 0.198 -3.668 | 12.038 0.311 -3.767 | 16.181 0.445 -3.801 | 21.574 0.610 -3.818 |
| CQT-Diff+ | 1.525 0.164 -3.559 | 2.619 0.218 -3.651 | 3.202 0.272 -3.891 | 4.652 0.324 -3.711 |
| AIDD | 1.866 0.162 -3.215 | 2.391 0.209 -3.250 | 2.438 0.260 -3.274 | 3.549 0.297 -3.284 |

*   关键结论：在150ms短空缺上，CQT-Diff+的FAD略优，但AIDD在ODG（感知质量）和LSD（频谱失真）上更好。在200ms及以上的中长空缺上，AIDD在所有指标上全面超越CQT-Diff+，尤其在300ms空缺时，FAD比CQT-Diff+低约24%。

表2：MAESTRO数据集性能对比 (ODG-PEA-Q)
| 方法 | 375 ms (↑) | 750 ms (↑) |
| :--- | :--- | :--- |
| GACELA | -3.232 ± 0.232 | -3.318 ± 0.202 |
| bin2bin | -2.892 ± 0.510 | -3.039 ± 0.495 |
| bin2bin-MIDI | -2.800 ± 0.491 | -2.976 ± 0.456 |
| AIDD | -2.303 ± 0.692 | -2.596 ± 1.300 |

*   关键结论：在极具挑战性的375ms和750ms超长空缺上，AIDD的感知质量（ODG）显著优于所有GAN类基线方法。

2. 主观评估
表3：MAESTRO数据集MOS主观评分
| 方法 | MOS (↑) |
| :--- | :--- |
| Original | 4.12 ± 0.96 |
| GACELA | 3.51 ± 1.33 |
| CQT-Diff+ | 3.51 ± 1.34 |
| AIDD (WavTokenizer 24kHz) | 3.64 ± 1.26 |

*   关键结论：人类听众对AIDD生成音频的平均评分高于其他修复方法。

3. 消融实验
表4：MusicNet数据集消融研究 (200ms & 300ms)
| 方法 / 设置 | 200 ms | 300 ms |
| :--- | :--- | :--- |
| | FAD↓ LSD↓ ODG↑ | FAD↓ LSD↓ ODG↑ |
| AIDD (Base - DWDSE loss) | 2.802 0.211 -3.262 | 4.015 0.303 -3.296 |
| AIDD - Combined (p0=0.8, α=0.5, λ=500, Δ1e) | 2.391 0.209 -3.250 | 3.549 0.297 -3.284 |

*   关键结论：结合了Span-Based Masking和Derivative-Based Loss的组合方法在所有设置下均取得了最佳性能，证实了两项技术的有效性。

4. 模型效率对比
表6：模型大小与延迟对比
| 模型 | 参数量 | 训练时间 | 平均推理时间(s) | 去噪步数 |
| :--- | :--- | :--- | :--- | :--- |
| AIDD (WavTokenizer) | 90M (81M) | 1天 | 5.25 | 1024 |
| AIDD (UniCodec) | 90M (210M) | 1天 | 11.53 | 1024 |
| CQT Diff+ | 242M | 4天 | 12.54 | 35 |

*   关键结论：AIDD (WavTokenizer) 模型更小，训练更快，且由于去噪步数多但计算简单，其单次推理时间也更快。

5. 附录关键图表
*   信息损失分析 (表7)：显示仅tokenization步骤就会引入损失（例如WavTokenizer的tokenized FAD为1.06），而后续的inpainting过程引入的额外损失很小（inpainted FAD为0.061 vs tokenized FAD），这验证了核心生成模型的有效性，但也凸显了tokenizer质量的重要性。
*   推理训练匹配性分析 (表9)：比较了“mask-then-tokenize”和“tokenize-then-mask”两种推理模式，结果差异极小（例如750ms空缺FAD分别为0.055和0.056），表明训练-推理不匹配问题在本任务中影响有限。

#

### ⚖️ 评分理由

- 学术质量 (5.0/7)：论文提出了一个完整、新颖且合理的技术框架（离散扩散+音频修复），实验设计严谨，对比充分，并进行了细致的消融研究。技术细节阐述清晰。失分点在于创新更多是组合与改进（将离散扩散用于新任务，并加入两个正则化），而非底层模型架构的突破��同时，其效果严重依赖于第三方tokenizer，这使得贡献的独立性略有减弱。
- 选题价值 (1.5/2)：音频修复是音频处理的基础问题，具有明确的应用价值。将离散表示和扩散模型结合用于此任务，顺应了当前AI生成模型的发展趋势，对相关领域的研究人员有启发意义。
- 开源与复现加成 (+1.0/1)：论文明确提供了代码仓库地址，详细列出了超参数、训练硬件、评估协议等关键信息，开源和复现透明度极高，这是论文的一大优点。

#

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
