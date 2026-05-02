---
title: "Token-Based Audio Inpainting via Discrete Diffusion"
date: 2026-05-03
draft: false
tags: [音频生成, 扩散模型, 预训练, 音频大模型]
categories: [iclr-2026]
description: "音频生成 | 7.5/10"
hiddenInHomeList: true
---

# 📄 Token-Based Audio Inpainting via Discrete Diffusion

#音频生成 #扩散模型 #预训练 #音频大模型

✅ **7.5/10** | 前25% | #音频生成 | #扩散模型 | #预训练 #音频大模型

学术质量 5.5/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Tali Dror (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)， Iftach Shoham (Ben-Gurion University of the Negev, Faculty of Computer and Information Science, Data Science Research Center)（论文注明两人贡献相等）
- 通讯作者：Eliya Nachmani (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)
- 作者列表：Tali Dror（Ben-Gurion University of the Negev, School of Electrical and Computer Engineering）、Iftach Shoham（Ben-Gurion University of the Negev, Faculty of Computer and Information Science, Data Science Research Center）、Moshe Buchris（Ben-Gurion University of the Negev, School of Electrical and Computer Engineering）、Oren Gal（University of Haifa）、Haim Permuter（Ben-Gurion University of the Negev, School of Electrical and Computer Engineering）、Gilad Katz（Ben-Gurion University of the Negev, Faculty of Computer and Information Science, Data Science Research Center）、Eliya Nachmani（Ben-Gurion University of the Negev, School of Electrical and Computer Engineering）

### 💡 毒舌点评

本文首次将离散扩散模型与预训练音频令牌化器结合用于修复任务，在长间隙（>=150ms）音频修复上展示了系统性优势，这是一个扎实的工程创新。但方法的天花板很大程度上受限于WavTokenizer的性能与24kHz带宽，且其“令牌空间生成-解码为波形”的路径，本质上回避了直接建模复杂音频波形或频谱相位这一更核心的难题，更像是为离散扩散找到了一个“好用”的应用场景，而非对扩散模型本身的突破。

### 🔗 开源详情

- 代码：论文中提供了代码仓库链接：`https://github.com/iftachShoham/AIDD`。
- 模型权重：未提及是否公开预训练模型权重。
- 数据集：使用公开基准数据集MusicNet和MAESTRO，论文未提及提供新数据集。
- Demo：未提及在线演示链接。
- 复现材料：在附录B“REPRODUCIBILITY STATEMENT”中详细列出了所有关键超参数（见Table 8），并说明了训练硬件（单张NVIDIA A6000 GPU）和训练时间，提供了充分的复现信息。
- 论文中引用的开源项目：主要依赖WavTokenizer (Ji et al., 2024) 和 UniCodec (Jiang et al., 2025) 作为音频令牌化器；使用DiT (Peebles & Xie, 2023) 作为扩散模型架构基础；评估指标参考了PEMO-Q和PEA-Q的实现。

### 📌 核心摘要

1.  问题：传统及基于连续扩散的音频修复方法在处理长音频间隙（如超过300ms）时，性能会因难以捕捉长程依赖和保持语义一致性而下降。
2.  方法核心：提出AIDD，首次将离散扩散模型应用于由预训练音频令牌化器（WavTokenizer）转换得到的离散令牌序列上，将音频修复建模为序列补全任务。方法引入了两项关键技术：基于导数的正则化损失，以强制生成令牌在时间上平滑；以及基于跨度的吸收式掩蔽策略，在扩散前向过程中结构化损坏令牌。
3.  与已有方法相比新在哪里：区别于在连续域（波形、频谱图）进行扩散的方法，AIDD在离散令牌空间中操作，避免了直接建模原始波形或处理相位问题的困难，并首次将离散扩散框架用于音频修复任务。
4.  主要实验结果：在MusicNet和MAESTRO数据集上，针对150ms至750ms的间隙进行评估。对于大于150ms的间隙，AIDD在FAD、LSD和ODG指标上持续优于LPC、A-SPAIN-L、CQT-Diff+、GACELA和bin2bin等基线。例如，在MusicNet数据集上，针对300ms间隙，AIDD的FAD（3.549）相比强基线CQT-Diff+（4.652）降低了约24%。主观MOS测试也显示AIDD优于GACELA和CQT-Diff+。
    *   表1（MusicNet数据集对比）
    | 方法 | 150ms | 200ms | 250ms | 300ms |
    |---|---|---|---|---|
    | | FAD↓ LSD↓ ODG↑ | FAD↓ LSD↓ ODG↑ | FAD↓ LSD↓ ODG↑ | FAD↓ LSD↓ ODG↑ |
    | CQT-Diff+ | 1.525 0.164 -3.559 | 2.619 0.218 -3.651 | 3.202 0.272 -3.891 | 4.652 0.324 -3.711 |
    | AIDD | 1.866 0.162 -3.215 | 2.391 0.209 -3.250 | 2.438 0.260 -3.274 | 3.549 0.297 -3.284 |
    *   表2（MAESTRO数据集对比，ODG-PEA-Q）
    | 方法 | 375ms (↑) | 750ms (↑) |
    |---|---|---|
    | GACELA | -3.232 ± 0.232 | -3.318 ± 0.202 |
    | bin2bin-MIDI | -2.800 ± 0.491 | -2.976 ± 0.456 |
    | AIDD | -2.303 ± 0.692 | -2.596 ± 1.300 |
5.  实际意义：推进了音乐和音频修复领域的研究，为利用离散表示进行音频生成提供了新范式，并可能扩展到语言等其他序列生成任务。
6.  主要局限性：修复性能受限于所用音频令牌化器的质量与带宽上限（本文WavTokenizer为24kHz）。模型在训练时采用“先令牌化后掩蔽”，而推理时是“先掩蔽后令牌化”，存在训练-推理不匹配问题（尽管消融实验显示影响较小）。比较时存在连续域与离散域的跨域差异。

### 🏗️ 模型架构

![AIDD方法概览](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/9ZogqiyWXm-0.png)
图1：AIDD方法概览图。训练时，干净音频经WavTokenizer编码为令牌序列，在随机时间步t进行基于跨度的掩蔽损坏，然后由扩散Transformer（DiT）预测去噪分数，并使用DWDSE和导数损失进行优化。推理时，带间隙的音频被编码为带掩蔽令牌的序列，DiT通过反向扩散迭代填充掩蔽令牌，最后由WavTokenizer解码回波形。

模型AIDD（Audio Inpainting via Discrete Diffusion）是一个三阶段框架，核心在于将音频修复转化为离散令牌序列的补全问题。
1.  音频令牌化（Audio Tokenization）：使用预训练的WavTokenizer作为音频编解码器。编码器将高维原始音频波形压缩成紧凑的离散令牌序列（词汇量约4k）。解码器将生成的令牌序列还原为音频波形。这步将连续音频问题映射到了离散序列问题。
2.  离散扩散模型（Discrete Diffusion Model）：核心是一个扩散Transformer（DiT） 架构。它集成时间条件到标准的编码器Transformer中，并使用旋转位置编码。该模型学习预测被掩蔽令牌的具体分数（concrete score），即不同令牌间的转移概率比率，以指导反向扩散过程。前向扩散过程使用基于跨度的吸收式掩蔽策略，逐步将令牌替换为`[MASK]`。反向过程则迭代地从最大噪声（全掩蔽）状态恢复原始令牌序列。
3.  波形重建（Waveform Reconstruction）：将反向扩散生成的完整令牌序列输入WavTokenizer解码器，得到重建的音频波形。为确保输出平滑，在修复片段与原始音频边界处应用10毫秒的交叉淡入淡出。

### 💡 核心创新点

1.  首次将离散扩散模型应用于音频修复任务：开创性地在预训练音频令牌化器（WavTokenizer）产生的离散表示空间中，运用离散扩散模型解决音频修复问题。这避免了直接建模原始波形或处理频谱图相位问题的复杂性，使模型能更好地捕捉高层语义结构。
2.  提出基于导数的正则化损失：针对离散扩散目标（DWDSE）不显式约束预测令牌嵌入时间平滑性的问题，引入了一项新损失。该损失对齐预测令牌嵌入与真实嵌入的一阶或二阶离散时间导数，惩罚预测序列中不规则的局部波动，从而鼓励生成时序上更自然、更平滑的令牌轨迹。
3.  设计用于修复的基于跨度的掩蔽策略：不同于先前离散扩散框架独立掩蔽每个令牌，本文提出了结构化的掩蔽策略。它根据当前时间步的噪声水平，采样连续令牌跨度进行掩蔽。这模拟了从细粒度局部损坏到更广泛语义扰动的进程，使模型更好地学习处理修复任务中典型的连续缺失区域。

### 🔬 细节详述

- 训练数据：在MusicNet（古典音乐）和MAESTRO（钢琴演奏）两个数据集上独立训练。使用官方预定义的训练/测试划分。音频被截断为固定长度（300个令牌，约4秒）的片段。
- 损失函数：总损失为 `L_total = L_DWDSE + λ * L_deriv`。
    - `L_DWDSE`：扩散加权去噪分数熵损失，用于训练模型估计令牌转移比率。
    - `L_deriv`：导数正则化损失，计算掩蔽位置处预测与真实令牌嵌入的一阶或二阶离散导数之差的L2范数。λ是权重因子（实验中优选λ=500）。
- 训练策略：
    - 优化器：AdamW
    - 学习率：1e-6
    - 批大小：128
    - 训练步数：MusicNet为400k步（基础模型），其他变体100k步；MAESTRO为150k步。
    - EMA：指数移动平均，系数0.9999。
- 关键超参数：
    - 模型大小：DiT约90M参数。
    - 令牌化器：WavTokenizer（词汇量约4k）或UniCodec（词汇量约16k）。
    - 掩蔽参数：最大跨度长度 `ℓmax=30`；采样参数 `p0=0.8`，`α=0.5`。
    - 扩散过程：吸收图类型；对数线性噪声调度；欧拉预测器；采样步数1024。
- 训练硬件：单张NVIDIA A6000 GPU。基础模型在MusicNet上训练约2天，其他方法训练约1天。
- 推理细节：在反向扩散过程中迭代1024步。修复片段与原始音频边界应用10ms交叉淡入淡出。由于方法是随机性的，评估时对每个片段生成10个样本并平均。
- 正则化/稳定训练技巧：采用旋转位置编码；使用导数损失增强时序平滑性；通过EMA平滑训练过程。

### 📊 实验结果

- 主要基准与数据集：MusicNet数据集（测试间隙150-300ms，每个片段四个间隙），MAESTRO数据集（测试间隙375ms和750ms，单个间隙）。
- 客观指标：FAD（↓）、LSD（↓）、ODG（↑，使用PEMO-Q和PEA-Q两种实现）。
- 与基线对比：
    *   MusicNet (Table 1)：在所有>=200ms的间隙长度上，AIDD在FAD和ODG指标上均优于CQT-Diff+。例如300ms间隙FAD降低24%。在150ms短间隙上，CQT-Diff+的FAD略低，但AIDD的ODG和LSD更好。
    *   MAESTRO (Table 2)：AIDD在375ms和750ms间隙上的ODG（PEA-Q）得分显著优于GACELA、bin2bin和bin2bin-MIDI。例如375ms间隙得分-2.303 vs 第二名-2.800。
- 主观听觉测试 (Table 3)：
    | 方法 | MOS (↑) |
    |---|---|
    | Original | 4.12 ± 0.96 |
    | GACELA | 3.51 ± 1.33 |
    | CQT-Diff+ | 3.51 ± 1.34 |
    | AIDD | 3.64 ± 1.26 |
    在MAESTRO数据集上，AIDD的MOS评分最高。
- 消融实验 (Table 4)：
    在MusicNet数据集上对比了基础模型（仅DWDSE损失）、仅跨度掩蔽变体、仅导数损失变体以及两者结合的模型。结论：结合方法（Combined methods）在大多数设置下性能最佳，验证了两项技术的有效性。例如200ms间隙，结合方法（λ=500, p0=0.8）的FAD为2.438，优于基础模型的2.802。
- 令牌化器对比 (Table 5 & Table 7)：
    在MAESTRO数据集上，使用WavTokenizer的AIDD在所有指标上优于使用UniCodec的AIDD。例如750ms间隙，WavTokenizer版FAD为0.055，UniCodec版为0.169。补充材料(Table 7)的信息损失分析表明，质量损失主要来源于令牌化过程本身，而非扩散修复过程。
- 训练-推理不匹配分析 (Table 9)：
    对比了“先掩蔽后令牌化”（推理时）和“先令牌化后掩蔽”（训练时）两种流程。结果显示性能差异可忽略不计（例如750ms间隙FAD：0.055 vs 0.056）。
- 延迟分析 (Table 6)：
    AIDD (WavTokenizer) 的平均推理时间为5.25秒，模型参数90M，训练时间1天；而基线CQT-Diff+推理时间为12.54秒，参数242M，训练时间4天。

### ⚖️ 评分理由

- 学术质量：5.5/7：论文在音频修复这一具体任务上提出了一个新颖且有效的框架（离散扩散+令牌化）。创新点明确（首次应用于音频修复、导数损失、跨度掩蔽），技术实现正确。实验设计全面，包含多数据集、多指标、消融研究和延迟分析，结果有说服力，证明了方法的有效性。扣分点在于核心算法组件（离散扩散、WavTokenizer）并非原创，创新更多是系统集成和针对性改进；且方法性能上限依赖于外部令牌化器。
- 选题价值：1.5/2：音频修复是音频处理领域的经典且重要的问题，尤其长间隙修复具有实际应用价值（如修复历史录音、通信丢包）。本文提出的路径为解决此类问题提供了新的有效工具，对相关领域的研究者和工程师有参考价值。
- 开源与复现加成：0.5/1：论文提供了公开的GitHub代码库链接，并在补充材料中详尽列出了超参数、训练环境、评估设置和复现说明，透明度高，可复现性好。但未提及公开预训练模型权重或专用数据集，扣0.5分。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
