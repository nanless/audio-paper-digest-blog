---
title: "MambaVoiceCloning: Efficient and Expressive Text-to-Speech via State-Space Modeling and Diffusion Control"
date: 2026-05-03
draft: false
tags: [语音合成, 扩散模型, 流式处理, 状态空间模型]
categories: [iclr-2026]
description: "语音合成 | 7.0/10"
hiddenInHomeList: true
---

# 📄 MambaVoiceCloning: Efficient and Expressive Text-to-Speech via State-Space Modeling and Diffusion Control

#语音合成 #扩散模型 #流式处理 #状态空间模型

✅ **7.0/10** | 前25% | #语音合成 | #扩散模型 | #流式处理 #状态空间模型

学术质量 5.5/7 | 选题价值 1.0/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Sahil Kumar（Yeshiva University, PhD Program in Mathematics）
- 通讯作者：Youshan Zhang（Chuzhou University, School of Artificial Intelligence）
- 作者列表：Sahil Kumar（Yeshiva University）、Namrataben Patel（Yeshiva University）、Honggang Wang（Yeshiva University, Department of Computer Science & Engineering）、Youshan Zhang（Chuzhou University）

### 💡 毒舌点评

本文的亮点在于严谨的实验设计和对“完全SSM”这一工程问题的执着探索，成功地将TTS的条件路径从“混合注意力”推向了“纯SSM”，实现了更低的内存占用和更快的编码器吞吐，这对部署很友好。但短板也很明显：性能提升幅度（MOS约0.07）更像是一种“效率优化”的副产品，核心的语音质量和表现力并未超越现有方法（如StyleTTS2）一个身位，扩散解码器依然是主要的延迟瓶颈。

### 🔗 开源详情

- 代码： 论文明确提供了代码仓库链接：`https://github.com/sahilkumar15/MVC`。
- 模型权重： 论文中未提及是否公开预训练模型权重。
- 数据集： 使用的训练数据集（LJSpeech, LibriTTS）和评估数据集（VCTK, CSS10, Gutenberg）均为公开或可公开获取的。论文未提及提供新数据集。
- Demo： 论文中未提及在线演示。
- 复现材料： 非常充分。论文在附录B.8提供了完整的训练算法（Algorithm 1），附录C.2详细列出了优化器设置、学习率、批量大小等训练策略，附录C.4总结了所有基线的配置。关键的Mamba超参数（状态维度、卷积核、温度）及其敏感性分析也在附录E.3中给出。
- 论文中引用的开源项目： `phonemizer`（文本音素化）、`HiFi-GAN`（声码器）、`iSTFTNet`（声码器）、`ESPnet`（用于WER评估的语音识别模型）。

### 📌 核心摘要

这篇论文旨在解决现有基于扩散的语音合成（TTS）系统中，条件路径（文本、节奏、韵律）仍依赖注意力或循环模块，导致计算复杂度高、内存占用大、流式处理困难的问题。论文核心方法是设计了一个名为MambaVoiceCloning (MVC) 的系统，用三个选择性状态空间模型（SSM）模块完全替代了推理时的注意力：一个门控双向Mamba文本编码器、一个监督对齐的Temporal Bi-Mamba和一个带有AdaLN调制的Expressive Mamba。与已有Mamba-TTS混合系统相比，新在推理时移除了所有注意力层，实现了O(T)的线性复杂度和有界激活内存，并采用了门控双向融合机制替代了简单的拼接。主要实验在LJSpeech/LibriTTS上训练，在VCTK/CSS10长文本等上评估，结果显示：MVC在保持或小幅提升MOS（+0.07）、MCD、PESQ等指标的同时，将编码器参数降至21M，吞吐量提升1.6倍，并在长文本合成上表现出更好的稳定性。论文的实际意义在于为TTS提供了一种更高效、更易于部署和流式化的条件编码器架构。主要局限性是，性能提升幅度有限，且扩散解码器依然是主要延迟来源，论文未涉及细粒度情感控制。

### 主要实验结果表格

表1：主观评估（未见LibriTTS说话人）
| 模型 | MOS-N ↑ | MOS-S ↑ |
| :--- | :--- | :--- |
| Ground Truth | 4.60 | 4.35 |
| VITS | 3.69 | 3.54 |
| StyleTTS2 | 4.15 | 4.03 |
| MVC (ours) | 4.22 | 4.07 |

表4：LJSpeech上的客观指标
| 模型 | F0 RMSE ↓ | MCD ↓ | WER ↓ | PESQ ↑ | RTF ↓ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| VITS | 0.667 ± 0.011 | 4.97 ± 0.09 | 7.23% | 3.64 ± 0.08 | 0.0211 |
| StyleTTS2 | 0.651 ± 0.013 | 4.93 ± 0.06 | 6.50% | 3.79 ± 0.07 | 0.0174 |
| MVC (ours) | 0.653 ± 0.014 | 4.91 ± 0.07 | 6.52% | 3.85 ± 0.06 | 0.0169 |

表5：流式性能（2-6分钟Gutenberg段落）
| Look-ahead L (s) | WER | MOS |
| :--- | :--- | :--- |
| 0.25 | 11.2% | 3.74 |
| 0.50 | 9.4% | 3.81 |
| 1.00 | 7.8% | 3.89 |
| 2.00 | 7.3% | 3.91 |

表12：协议匹配的Mamba-TTS基线对比（LJSpeech）
| 模型 | F0 RMSE ↓ | MCD ↓ | WER ↓ | PESQ ↑ | RTF ↓ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Hybrid-Mamba (Concat) | 0.659 ± 0.013 | 4.95 ± 0.07 | 6.68% | 3.79 ± 0.06 | 0.0189 |
| Bi-Mamba (Concat-only) | 0.656 ± 0.014 | 4.93 ± 0.06 | 6.58% | 3.82 ± 0.06 | 0.0181 |
| MVC (gated + AdaLN) | 0.653 ± 0.014 | 4.91 ± 0.07 | 6.52% | 3.85 ± 0.06 | 0.0177 |

### 🏗️ 模型架构

MVC是一个基于扩散模型的TTS系统，其核心设计是将条件路径完全由状态空间模型（SSM，此处特指Mamba）构成，以替代传统的注意力或循环模块。系统架构如图1所示。

![图1：MambaVoiceCloning (MVC) 框架概览](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/0oXyMbPMtP-0.png)

完整输入输出流程：
输入为音素化文本和参考音频波形。系统输出合成波形。流程分为训练和推理两个阶段。训练阶段使用一个轻量级对齐器提供监督，推理阶段该对齐器被丢弃。

主要组件与数据流：
1.  输入处理： 文本被音素化后通过嵌入层得到 `x`；参考音频波形经STFT和mel滤波器组转换为梅尔频谱图 `M`，并通过一个共享的浅层卷积/GRU模块提取全局风格嵌入 `e`。
2.  编码器栈（核心创新，均为SSM模块）：
    *   门控双向Mamba文本编码器 (Gated Bi-Mamba Text Encoder)： 接收音素嵌入 `x`。首先进行前向和后向的Uni-Mamba扫描得到 `hf` 和 `hb`，然后通过一个门控融合机制（公式3）将两者结合，最后应用基于风格嵌入 `e` 的AdaLN（自适应层归一化）得到风格化的文本特征 `hT,s`。门控机制可以根据局部句法信息动态调整前后向上下文的贡献，改善长文本韵律稳定性。
    *   Expressive Mamba编码器： 接收梅尔频谱图 `M` 和风格嵌入 `e`。在通过一个带AdaLN的门控变换后，输入一个Mamba块，输出表达性梅尔特征 `hE`。该模块负责捕捉说话人特有的慢速韵律动态。
    *   Temporal Bi-Mamba编码器： 用于建模节奏和音素-帧对齐。将风格嵌入 `e` 广播到帧级并与梅尔特征结合，然后通过前向和后向Mamba块以及局部Conv1D进行处理，最后进行线性融合得到节奏特征 `hB`。该模块在训练时由对齐器提供监督，推理时完全SSM化。
3.  对齐与音高建模：
    *   训练时对齐器： 一个2层Transformer，在训练时提供软注意力权重 `α` 用于监督Temporal Bi-Mamba，但在推理时完全移除。
    *   音高建模： 将 `hE` 和 `hB` 通过门控块融合得到 `hP`，然后预测F0轨迹。
4.  语音动态与解码器条件： 基于对齐特征 `hA` 和音高特征 `hP`，通过一个Conv1D+SSM的时序预测器和门控融合，生成最终的解码器条件 `hD = [ ̂F0 ; n ]`，其中包含预测的F0和残差噪声。
5.  解码器阶段： 使用固定的StyleTTS2扩散解码器，基于 `hD` 生成梅尔频谱图，再由声码器转换为波形。

关键设计选择与动机：
*   移除推理时注意力： 动机是降低计算复杂度、减少内存占用、简化流式实现。
*   门控双向融合： 旨在克服简单拼接（concat）方式无法动态利用上下文的局限，提升长文本韵律连贯性。
*   训练时教师-推理时纯SSM： 在训练中引入轻量注意力对齐器以提供稳定监督，但在推理时移除，实现了“SSM-only”的条件路径，这是本论文区别于以往“混合SSM-TTS”工作的核心。

### 💡 核心创新点

1.  完全SSM-only推理时条件路径： 首次在基于扩散的TTS系统中，将文本、节奏/时长、韵律风格的全部条件编码模块替换为Mamba SSM，在推理时不使用任何注意力或显式RNN循环层。这带来了O(T)的线性时间复杂度和有界激活内存，提升了内存效率和吞吐量。
2.  门控双向Mamba融合与AdaLN调制： 为Bi-Mamba编码器设计了门控融合机制（公式3）和基于全局风格嵌入的AdaLN调制（公式4）。实验证明（表8），两者结合能显著提升长文本合成的自然度和音高稳定性，是性能提升的关键。
3.  协议与容量匹配的严谨消融实验： 论文不仅与StyleTTS2等基线对比，还专门实现了“Hybrid-Mamba”（推理时保留注意力）和“Bi-Mamba (Concat-only)”（纯SSM但无门控/AdaLN）两个容量匹配的基线（表12）。这种设计能隔离出架构设计（移除注意力、引入门控AdaLN）本身带来的影响，增强了结论的可信度。

### 🔬 细节详述

- 训练数据： LJSpeech (24小时，1说话人) 和 LibriTTS (245小时，1151说话人)。评估在VCTK（零样本说话人）、CSS10 (ES/DE/FR，跨语言) 和自建的2-6分钟Gutenberg长文本集上进行。音频重采样至24kHz，转换为80-bin log-mel谱图（FFT=1024, hop=256）。文本使用`phonemizer`进行音素化。
- 损失函数： 总损失 `Ltotal = λmelLmel + λadvLadv + λalign*Lalign`。`Lmel`是L1梅尔重建损失；`Ladv`是基于多周期和多分辨率判别器的对抗损失（来自StyleTTS2）；`Lalign`是针对训练时对齐器的单调性约束损失。
- 训练策略： 使用AdamW优化器，学习率1e-4，权重衰减1e-4，余弦退火，warmup 10k步。使用EMA（0.999），梯度裁剪1.0，自动混合精度训练。批量大小：LJSpeech为16，LibriTTS为32，在4块A100 40GB GPU上训练。LJSpeech模型训练200 epochs，LibriTTS模型训练300k steps。检查点根据验证集上的mel-L1和F0 RMSE选择。
- 关键超参数： Mamba状态维度 `d_ssm=96`，深度可分离卷积核大小 `k_conv=5`，门控温度 `τ_gate=1.0`。文本、时序、表达性Mamba编码器的默认深度均为6层（表7）。编码器总参数量为21M。
- 训练硬件： 4× NVIDIA A100 40GB GPU。
- 推理细节： 扩散解码器使用固定的5步调度（表13显示5步是质量和速度的最佳折中）。声码器：LJSpeech使用iSTFTNet，LibriTTS使用HiFi-GAN。流式合成时，双向文本编码器替换为单向Uni-Mamba，并设置一个有限的“前瞻”窗口L（0.5-2.0秒）。
- 正则化/稳定训练技巧： 使用EMA，梯度裁剪，以及训练时对齐器的单调性损失。

### 📊 实验结果

论文在多个基准上进行了评估，证明了MVC在保持或小幅提升质量的同时，显著提高了效率。

主要质量对比（表1， 表4）： 在未见说话人LibriTTS上，MVC的MOS-N（4.22）和MOS-S（4.07）略高于StyleTTS2（4.15， 4.03）。在LJSpeech上，MVC取得了最优的MCD（4.91）和PESQ（3.85），最优的RTF（0.0169），F0 RMSE和WER与最强基线持平。

长文本与泛化能力（表2， 表3）：
*   在OOD（古腾堡计划）文本上，MVC的MOS几乎不降（3.87→3.88），而VITS和JETS显著下降。
*   在长文本（>60s）合成上，MVC的MOS（4.16）明显高于StyleTTS2（3.91），且RTF更低（0.0170 vs 0.0200）。

流式性能（表5）： 随着前瞻长度L减小，WER和MOS有所下降，但即使在L=0.5s时也能保持可接受的质量（MOS 3.81），展示了良好的优雅降级特性。

消融实验与分析：
*   组件移除（表6）： 在OOD集上，移除任一Mamba模块（文本、表达、时序）都会导致CMOS-N显著下降（-0.36到-0.41），证明每个模块都贡献了不可替代的信息。
*   门控与AdaLN消融（表8）： 在长文本上，移除门控融合或AdaLN都会使MOS下降、音高RMSE上升。完整配置（门控+AdaLN）效果最佳。
*   协议匹配基线对比（表12）： 在完全相同的解码器/声码器/训练设置下，纯SSM的Bi-Mamba (Concat-only) 就已优于保留注意力的Hybrid-Mamba，而MVC的门控+AdaLN设计在此基础上带来了进一步提升。
*   编码器效率（表9）： MVC的编码器吞吐量是StyleTTS2的1.6倍，峰值内存仅为72%。

实验结果图表：
![图2：LJSpeech上的波形对比](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/0oXyMbPMtP-1.png)
（图2说明：MVC生成的波形与真实波形在时序结构和韵律变化上对齐最紧密，MOS最高，视觉上支持了其更自然的表现。）

![图3：LJSpeech上的训练收敛曲线](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/0oXyMbPMtP-2.png)
（图3说明：MVC的验证MOS和F0 RMSE在更少的epoch内收敛到较好水平，表明其编码器栈可能更易于优化。）

![图4：LJSpeech上的语谱图对比](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/0oXyMbPMtP-3.png)
（图4说明：MVC合成的语谱图在谐波连续性和共振峰轨迹上最接近真实语音，优于StyleTTS2和JETS，支持其PESQ和MCD指标上的优势。）

### ⚖️ 评分理由

- 学术质量：5.5/7 论文���术方案完整，实验设计严谨，特别是通过协议匹配的基线设计来隔离变量，体现了很强的实验科学素养。创新点在于系统性地验证了纯SSM条件路径的可行性和效率优势，但属于对现有扩散TTS框架（StyleTTS2）的编码器侧优化，而非范式革新。性能提升幅度较小，且主要优势体现在效率和稳定性上，而非绝对语音质量。
- 选题价值：1.0/2 选题聚焦于TTS系统的条件编码效率，这是一个重要但非最核心的问题。该工作对需要部署在资源受限设备或要求低延迟的场景有实际价值，但并未直接推动语音合成在自然度、表现力等前沿指标上的大幅进步。与音频/语音领域的广泛读者相关性一般，更偏向系统优化方向。
- 开源与复现加成：+0.5/1 论文明确承诺提供代码（GitHub链接），并在附录中提供了极其详细的训练算法、基线配置、超参数设置和评估协议，可复现性很高。这是工作的一个显著优点。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
