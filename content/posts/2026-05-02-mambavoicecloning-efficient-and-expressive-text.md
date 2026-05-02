---
title: "MambaVoiceCloning: Efficient and Expressive Text-to-Speech via State-Space Modeling and Diffusion Control"
date: 2026-05-02
draft: false
tags: [语音克隆, 语音合成, 状态空间模型, 语音大模型, 扩散模型]
categories: [iclr-2026]
description: "语音克隆 | 7.5/10"
hiddenInHomeList: true
---

# 📄 MambaVoiceCloning: Efficient and Expressive Text-to-Speech via State-Space Modeling and Diffusion Control

#语音克隆 #语音合成 #状态空间模型 #语音大模型 #扩散模型

✅ **7.5/10** | 前25% | #语音克隆 | #状态空间模型 | #语音合成 #语音大模型

学术质量 6.5/7 | 选题价值 7.0/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Sahil Kumar（Yeshiva University, Department of Mathematics）
- 通讯作者：Youshan Zhang（Chuzhou University, School of Artificial Intelligence）
- 作者列表：Sahil Kumar（Yeshiva University, Department of Mathematics）、Namrataben Patel（Yeshiva University, Department of Mathematics）、Honggang Wang（Yeshiva University, Department of Computer Science & Engineering）、Youshan Zhang（Chuzhou University, School of Artificial Intelligence）

### 💡 毒舌点评

亮点： 架构设计全面且理论动机清晰，通过引入门控双向融合与AdaLN调制，在完全移除推理时注意力的同时，有效提升了长文本的韵律稳定性和跨语言泛化能力，是Mamba在TTS领域一次扎实的工程化探索。
短板： 尽管声称改进，但核心性能增益（MOS +0.07， RTF -0.0005）绝对值很小，被扩散解码器主导的延迟瓶颈严重掩盖了SSM-only编码器的理论优势，实际部署价值提升有限。

### 🔗 开源详情

- 代码： 提供了GitHub仓库链接（https://github.com/sahilkumar15/MVC）。
- 模型权重： 论文未提及是否公开预训练模型权重。
- 数据集： 使用的LJSpeech, LibriTTS, VCTK, CSS10, Gutenberg均为公开或可公开获取的数据集，但论文未提供具体获取链接。
- Demo： 论文中未提及在线演示链接。
- 复现材料： 论文提供了极其详细的复现信息，包括：完整的训练算法（Algorithm 1）、所有优化器超参数（学习率、批大小、warmup步数等）、模型所有层的具体配置（维度、层数、核大小）、详细的消融实验设置（表14， 附录B.6）、扩散步数消融（表13）、以及SSM超参数敏感性分析（表19-21）。附录中对每个组件和实验设置都有详尽说明。
- 依赖的开源项目： 论文代码基于并比较了多个开源项目，包括：StyleTTS2（���解码器骨架）、VITS、JETS、HiFi-GAN/iSTFTNet（声码器）、phonemizer（文本音素化）、Mamba（核心SSM实现）。

### 📌 核心摘要

1.  问题： 传统基于Transformer的TTS条件建模路径存在二次复杂度与内存问题，现有Mamba混合架构在推理时仍保留注意力或循环层，阻碍了流式合成的稳定性和效率。
2.  方法核心： 提出MVC，一个完全在推理时采用状态空间模型（SSM）的条件建模栈。核心组件包括：门控双向Mamba文本编码器、受轻量级对齐教师监督的时序双向Mamba、以及带有AdaLN调制的表达性Mamba。该设计旨在实现线性时间复杂度的条件处理。
3.  创新点： 与现有Mamba-TTS混合系统不同，MVC在文本、节奏和韵律的所有条件路径中完全移除了推理时的注意力与循环层，仅保留一个训练时使用的轻量级注意力对齐器。它用门控双向融合替代了简单的拼接，并结合了AdaLN。
4.  主要实验结果： 在严格匹配的解码器/声码器设置下（固定StyleTTS2扩散骨架），MVC在多个数据集上取得了稳定但幅度不大的提升。在LibriTTS未见说话人上，MOS-N达到4.22（StyleTTS2为4.15）；在LJSpeech上，RTF为0.0169（StyleTTS2为0.0174），PESQ为3.85（StyleTTS2为3.79）。在长文本和跨语言（CSS10）任务上也表现出稳健性。
5.  实际意义： 验证了在TTS系统中实现完全SSM-only推理路径的可行性，为需要低内存占用、高吞吐量和稳定长文本合成的边缘部署提供了新的架构选择。
6.  主要局限性： 性能改进幅度微小；扩散解码器仍是延迟的主要来源；模型仅在英语数据上训练，对精细情感控制支持有限。

### 🏗️ 模型架构

MVC的总体框架旨在替代传统TTS系统中的注意力与循环神经网络条件路径。其架构图如下：

![MVC框架概览](/audio-paper-digest-blog/images/iclr-2026/2026-05-02/0oXyMbPMtP-0.png)

核心组件与数据流：
1.  输入处理： 输入语音转换为80维对数梅尔频谱图（M），文本经过归一化和音素化得到嵌入（x）。全局风格嵌入（e）由频谱图通过一个共享的浅层Conv/GRU模块计算得出，用于捕捉粗粒度的音色和表现力。
2.  编码器栈（全部为SSM）：
    *   门控双向Mamba文本编码器（Sec 3.2.1）： 替代自注意力。将音素嵌入进行前向和后向Uni-Mamba扫描（hf, hb），然后通过一个门控机制（σ(Wg[hf; hb]) ⊙ [hf; hb]）融合，最后通过AdaLN注入风格嵌入e，得到文本特征 hT,s。门控机制根据局部句法线索调制双向上下文，相比简单拼接，能改善长程韵律并减少漂移。
    *   表达性Mamba编码器（Sec 3.2.2）： 处理梅尔频谱图，将风格嵌入e通过门控变换注入，再通过一个Mamba块，产生表达性特征 hE，负责将说话人特定的韵律注入声学表示。
    *   时序双向Mamba编码器（Sec 3.2.3）： 对风格调制后的输入进行前向和后向Mamba扫描，再通过线性融合，产生节奏与时长特征 hB，建模韵律结构和音素对齐。
3.  对齐与音高建模（Sec 3.3）：
    *   训练时对齐器： 一个2层Transformer，在训练时提供音素-帧对齐权重α，计算对齐特征 hA = α hT,s。推理时被完全丢弃。
    *   音高预测： 融合 hE 和 hB 得到 hP，通过线性层直接预测F0轨迹。
4.  语音动力学与解码器条件（Sec 3.4）： 从 hA 和 hP 出发，通过时序预测器（Conv1D+SSM）和门控块，生成最终的解码器条件序列 hD = [F0_pred; residual_noise]，送入固定的StyleTTS2扩散解码器。
5.  解码器与声码器（Sec 3.5）： 采用固定的StyleTTS2扩散模型和匹配的HiFi-GAN/iSTFTNet声码器，将解码器输出的梅尔频谱转换为波形。MVC不修改此部分。

关键设计选择动机： 用SSM替代注意力以获得线性时间复杂度O(T)和有界激活内存，解决长序列处理和流式合成的瓶颈。门控融合与AdaLN是保证在移除注意力后仍能保持韵律稳定性的关键。

### 💡 核心创新点

1.  完全SSM-only的推理时条件路径： 这是本文最核心的创新。与现有Mamba-TTS系统（如Jiang‘24， Zhang‘24）在推理时仍保留注意力或循环层不同，MVC在文本、节奏和韵律的所有条件模块中均仅使用SSM，仅在训练时使用轻量级注意力对齐器作为教师信号。这实现了理论上的线性复杂度条件处理。
2.  门控双向Mamba融合与AdaLN调制： 提出了一种新的双向Mamba特征融合机制，用可学习的门控（Eq. 3）替代了简单的拼接。结合自适应层归一化（AdaLN， Eq. 4），该设计显著提升了模型在长文本、分布外文本上的韵律稳定性和音高跟踪能力（见表8消融实验）。
3.  模块化、容量匹配的控制实验设计： 为了公平评估架构改进，论文设置了严格的协议匹配基线（Hybrid-Mamba, Bi-Mamba Concat-only），所有模型共享相同的梅尔前端、扩散解码器、声码器、优化器和数据。这确保了性能差异源于条件路径设计本身，而非其他因素。
4.  有限前瞻的流式合成支持： 论文系统分析了如何通过将双向文本编码器替换为因果Uni-Mamba，并设置前瞻窗口L，实现可控延迟的流式合成。实验表明，L≥0.5秒即可保持非流式质量（表5）。

### 🔬 细节详述

*   训练数据： 使用LJSpeech（24小时，1说话人）和LibriTTS（245小时，1151说话人）进行训练。评估使用VCTK（零样本说话人）、CSS10（ES/DE/FR跨语言）和Gutenberg长文本（2-6分钟，与训练集文本去重）。
*   预处理： 音频重采样至24kHz，计算80维对数梅尔频谱图（FFT 1024， hop 256）。文本使用phonemizer进行音素化，并带语言标签。
   损失函数（Eq. 10）： L_total = λ_mel  L_mel (L1梅尔重建损失) + λ_adv  L_adv (MPD+MRSD对抗损失) + λ_align  L_align (对齐器的单调性约束损失)。
*   训练策略（Appendix C.2）： 优化器AdamW，学习率1e-4，权重衰减1e-4，余弦退火调度，1万步预热。梯度裁剪1.0，EMA（0.999），自动混合精度。LJSpeech批大小16，训练200 epochs；LibriTTS批大小32，训练300k步。在4×A100 40GB GPU上训练。
*   关键超参数： 所有Mamba块状态维度d_ssm=96，深度可分离卷积核大小k_conv=5，门控温度τ_gate=1.0。文本编码器默认6层。解码器固定使用5步扩散调度。
*   推理细节： 使用固定5步扩散调度。流式模式下，文本编码器替换为因果Uni-Mamba，并设置前瞻窗口L（秒）。
*   正则化技巧： 使用了EMA、梯度裁剪、混合精度训练。训练时对齐器加入了单调性损失。

### 📊 实验结果

论文提供了详尽的客观与主观评估，关键结果如下表所示。

表1：未见LibriTTS说话人主观评估
| 模型 | MOS-N ↑ | MOS-S ↑ |
| :--- | :---: | :---: |
| Ground Truth | 4.60 | 4.35 |
| VITS | 3.69 | 3.54 |
| StyleTTS2 | 4.15 | 4.03 |
| MVC (ours) | 4.22 | 4.07 |

表4：LJSpeech客观指标（三个种子平均）
| 模型 | F0 RMSE ↓ | MCD ↓ | WER ↓ | PESQ ↑ | RTF ↓ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| VITS | 0.667 ± 0.011 | 4.97 ± 0.09 | 7.23% | 3.64 ± 0.08 | 0.0211 |
| StyleTTS2 | 0.651 ± 0.013 | 4.93 ± 0.06 | 6.50% | 3.79 ± 0.07 | 0.0174 |
| MVC (ours) | 0.653 ± 0.014 | 4.91 ± 0.07 | 6.52% | 3.85 ± 0.06 | 0.0169 |

![LJSpeech波形对比](/audio-paper-digest-blog/images/iclr-2026/2026-05-02/0oXyMbPMtP-1.png)
图2：不同模型在LJSpeech上的合成波形对比。MVC与真实波形在时间结构、韵律变化和振幅一致性上对齐更紧密。

表2：分布内（ID）与分布外（OOD）文本MOS
| 模型 | MOS-ID | MOS-OOD |
| :--- | :---: | :---: |
| GT | 3.81 | 3.70 |
| StyleTTS2 | 3.83 | 3.87 |
| VITS | 3.44 | 3.21 |
| JETS | 3.57 | 3.21 |
| MVC | 3.87 | 3.88 |

表3：LJSpeech短文本与长文本性能
| 模型 | MOS-short | MOS-long | RTF-short | RTF-long |
| :--- | :---: | :---: | :---: | :---: |
| StyleTTS2 | 4.15 | 3.91 | 0.0185 | 0.0200 |
| MVC | 4.22 | 4.16 | 0.0177 | 0.0170 |

![训练收敛曲线](/audio-paper-digest-blog/images/iclr-2026/2026-05-02/0oXyMbPMtP-2.png)
图3：MVC与StyleTTS2在LJSpeech上的验证集MOS和F0 RMSE随训练epoch变化曲线。MVC收敛更快。

表6：OOD文本组件移除消融（CMOS-N下降）
| 移除的组件 | CMOS-N下降 |
| :--- | :---: |
| Bi-Mamba文本编码器 | -0.38 |
| 表达性Mamba | -0.41 |
| 时序Bi-Mamba编码器 | -0.36 |

表8：融合与条件消融（长文本LJSpeech）
| 变体 | MOS long ↑ | Pitch RMSE (Hz) ↓ | RTF ↓ |
| :--- | :---: | :---: | :---: |
| MVC (gated + AdaLN) | 4.16 ± 0.07 | 1.92 ± 0.05 | 0.0177 |
| 仅Gating (无AdaLN) | 4.02 ± 0.08 | 2.04 ± 0.06 | 0.0186 |
| 仅AdaLN (无Gating) | 3.95 ± 0.04 | 2.22 ± 0.05 | 0.0198 |
| Concat (无Gating, 无AdaLN) | 3.64 ± 0.09 | 2.89 ± 0.07 | 0.0216 |

![频谱图对比](/audio-paper-digest-blog/images/iclr-2026/2026-05-02/0oXyMbPMtP-3.png)
图4：Ground Truth, MVC, StyleTTS2和JETS的频谱图对比。MVC在谐波连续性和共振峰轨迹上最接近真实情况。

表5：流式合成（不同前瞻L）
| L (s) | WER | MOS |
| :--- | :---: | :---: |
| 0.25 | 11.2% | 3.74 |
| 0.50 | 9.4% | 3.81 |
| 1.00 | 7.8% | 3.89 |
| 2.00 | 7.3% | 3.91 |

关键消融结论： 表8的消融实验强有力地证明，MVC的性能增益主要来源于门控融合与AdaLN的结合。单独移除任一成分都会导致长文本MOS显著下降和音高误差增加，而最差的基线（简单拼接）则性能大幅恶化。这证明了该设计不是可有可无的装饰。

### ⚖️ 评分理由

- 学术质量：5.5/7
    - 创新性（良好）： 在TTS领域提出并实现了完全SSM-only的推理时条件路径，结合了创新的门控融合机制，架构设计目标明确。
    - 技术正确性（良好）： 方法描述清晰，实验设计严谨，通过大量控制变量和消融实验证明了各组件的作用。
    - 实验充分性（良好）： 评估覆盖了多种数据集（不同说话人、语言、长文本）、多种指标（主观MOS/CMOS，客观F0/MCD/WER/PESQ/RTF）、以及详尽的消融和敏感性分析。
    - 证据可信度（良好）： 提供了95%置信区间和统计检验（如paired t-test with Holm-Bonferroni correction）。但改进幅度的绝对值较小，需结合上下文判断其实际影响力。

- 选题价值：1.5/2
    - 前沿性（好）： 将Mamba应用于TTS并追求完全替代注意力，是当前语音生成模型轻量化、高效化的一个重要探索方向。
    - 潜在影响（中等偏上）： 为边缘设备部署低延迟、低内存的TTS系统提供了新的架构思路，但其实际影响受限于扩散解码器的瓶颈。
    - 应用空间（好）： 直接面向语音合成与克隆任务，具有明确的实用价值。
    - 读者相关性（高）： 对关注语音生成模型架构创新、高效推理和流式合成的研究者/工程师高度相关。

- 开源与复现加成：+0.5/1
    - 论文明确提供了代码仓库链接（GitHub），并声称会公开。附录中提供了非常详尽的训练细节（算法、优化器设置、超参数）、消融实验配置和敏感性分析数据，复现指南清晰。但未提及模型权重和具体数据集的获取方式。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
