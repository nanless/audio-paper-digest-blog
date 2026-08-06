---
title: "StuPASE: Towards Low-Hallucination Studio-Quality Generative Speech Enhancement"
date: 2026-08-06
draft: false
tags: [语音增强, 流匹配, 自监督学习, 知识蒸馏, 鲁棒性]
categories: [论文速递]
description: "语音增强 | 7.0/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2603.09234"
---

# 📄 StuPASE: Towards Low-Hallucination Studio-Quality Generative Speech Enhancement

标签：#语音增强 #流匹配 #自监督学习 #知识蒸馏 #鲁棒性

**7.0/10** | 创新 1.3/2 | 严谨 1/1.5 | 实验 1.2/1.5 | 清晰 0.8/1 | 影响 1.1/1.5 | 开源 0.2/1.5 | 复现 0.3/0.5 | 工程 1.1/1.5

✅ **7.0/10** | 前50% | 文档类型：方法研究 | 评分置信度：高 | #语音增强 | #流匹配 | #自监督学习 #知识蒸馏 | [arxiv](https://arxiv.org/abs/2603.09234)


### 👥 作者与机构

- 第一作者：Xiaobin Rong（南京大学；xiaobin.rong@smail.nju.edu.cn）
- 通讯作者：论文未明确标注；按末位通讯惯例推断为 Jing Lu（南京大学；lujing@nju.edu.cn），但正文未声明
- 作者列表：Xiaobin Rong、Jun Gao、Zheng Wang、Mansur Yesilbursa、Kamil Wojcicki、Jing Lu
- 机构：1. Key Laboratory of Modern Acoustics, Nanjing University；2. Collaboration AI, Cisco Systems, Inc.；3. NJU-Horizon Intelligent Audio Lab, Horizon Robotics
- 论文未提供作者与机构的逐人对应表。

### 💡 毒舌点评

用干目标微调替代含早期反射的 PASE 训练目标，再拿流匹配换掉 GAN 声学生成器，方向直接，消融也给出了可量化的 UTMOS 和 dWER 提升，这是实打实的增量。但“低幻觉”主要靠 dWER/LPS/SBS 这类代理指标支撑，缺少对具体幻觉内容的细粒度分析；同时 SpkSim 在多数客观对比中低于 SenSE，和论文强调的“说话人一致性”优势之间存在张力。论文摘要中“outperforming state-of-the-art”的说法也偏强：DNS1 no-reverb 下 UTMOS 低于 AES-V2，dWER 高于 PASE 和 TF-GridNet。

### 📌 核心摘要

StuPASE 针对 PASE 在强混响和强噪声下感知质量有限的问题，提出两点改进：一是用不含模拟早期反射的“干目标”微调 PASE 的两个模块，改善去混响和语义保真；二是用 DiT 流匹配模块替换原 GAN 双流声码器（DualVocoder），联合预训练 Mel vocoder 生成接近录音室质量的语音。与 SenSE 等需要额外语义建模网络的方法不同，StuPASE 直接使用 DeWavLM-R 输出的连续音素表征作为语义条件，并用语音填充式训练降低对带噪声学细节的依赖。实验表明 StuPASE 在 DNS1 带混响集上 UTMOS 4.01、dWER 7.89%，在模拟困难测试集上 UTMOS 4.08、WER 11.57%，均优于多数基线；主观测试 Q-MOS 4.19、S-MOS 3.98。主要局限是代码与模型权重未公开，客观说话人相似度并未全面超越 SenSE，且“低幻觉”证据主要依赖代理指标。具体指标见“实验结果”部分表1—表4。

### 🔗 开源详情

论文未披露代码、模型权重和数据集的开源信息；仅在摘要中提供了音频演示页面：https://xiaobin-rong.github.io/stupase_demo/。作者未说明是否计划在论文发表后开放代码或模型。

### 🏗️ 方法概述和架构

StuPASE 的整体设计延续了 PASE 的“语义增强 → 声学增强 → 波形重构”三阶段生成式语音增强范式，但针对 PASE 在强混响和强加性噪声下感知质量不足的问题，从训练目标和生成模块两个层面进行了重构。如图 1 所示，StuPASE 由三个核心组件构成：**DeWavLM-R**（语义增强模块）、**基于 DiT 的流匹配模块**（声学增强模块）和 **Mel vocoder**（波形重构模块）。完整的信号处理链路为：输入带噪波形 → DeWavLM-R 提取净化后的连续音素表征 → 该表征经线性投影后与带噪 Mel 谱拼接，构成流匹配模块的条件 → 流匹配模块从高斯噪声出发，经多步迭代生成干净 Mel 谱 → Mel vocoder 将 Mel 谱合成为最终增强波形。需要强调的是，StuPASE 并非端到端单模型，而是组件化、多模块的流水线架构，各模块可独立训练、联合推理，分别承担不同的职责：语义模块保证语言内容完整性，流匹配模块保证感知质量，Mel vocoder 保证波形自然度。

下图展示了 StuPASE 的整体处理流程与各模块之间的数据关系。

![Figure 1: Overview of the proposed StuPASE framework.](https://arxiv.org/html/2603.09234v2/x1.png)

带噪语音首先经 DeWavLM-R 提取净化后的连续音素表征，随后与带噪 Mel 谱拼接作为条件，驱动 DiT 流匹配模块生成干净 Mel 谱，最终由 Mel vocoder 合成增强语音。


**DeWavLM-R（语义增强模块）** 是 StuPASE 的语义条件提取器。它的前身是 PASE 中的 DeWavLM，通过对预训练 WavLM 进行**去噪表征蒸馏**（Denoising Representation Distillation，DRD）得到。DRD 的核心思想是：以一个接收干净语音的冻结教师网络输出为目标，训练一个学生网络从带噪波形中预测该目标表征。具体而言，教师网络从干净语音的最后一层 Transformer 输出中提取干净音素表征，学生网络则接收带噪波形，通过最小化两者输出之间的均方误差（MSE）来学习去噪映射。这一机制使 DeWavLM 输出的连续音素表征能够在上游就完成噪声和混响的抑制，为后续生成提供干净的语义引导。在 StuPASE 中，DeWavLM-R 是经过**干目标微调**后的版本：微调时仍沿用 DRD 策略，教师和学生分别从预训练 WavLM 和 DeWavLM 权重初始化，但教师网络的输入从含模拟早期反射的语音替换为不含额外模拟反射的干语音，从而避免早期反射对音素表征的污染，提升语义保真度。DeWavLM-R 的输入为带噪波形，输出为 1024 维的连续音素表征序列。

**基于 DiT 的流匹配模块（声学增强模块）** 是 StuPASE 相较于 PASE 最关键的改动。PASE 原有的声学增强模块是 GAN 架构的 DualVocoder，它直接接收增强音素表征和第一层 Transformer 的低层声学表征来重建波形。这种设计的缺陷在于：低层声学表征虽然保留了细粒度的声学细节，但可能仍含有噪声和混响信息；同时，GAN 的生成能力有限，在复杂条件下容易出现残留噪声、过抑制伪影等问题。StuPASE 用流匹配模块替换了 DualVocoder，将声学增强的目标从“直接重建波形”改为“先生成高保真 Mel 谱，再由声码器合成波形”。流匹配模块采用 DiT（Diffusion Transformer）作为骨干网络，具体配置为 12 层 Transformer、16 个注意力头、隐藏维度 1024、前馈维度 2048。其输入由三部分构成：一是从高斯噪声采样的初始隐变量；二是**语义条件**——DeWavLM-R 输出的 1024 维音素表征经线性投影降为 512 维后的结果，提供高层语义指导；三是**声学条件**——与音素表征拼接的带噪 Mel 谱，提供低层声学结构信息。在 DiT 内部，这些条件通过 adaLN（adaptive layer normalization）等机制注入各层，引导模型从噪声逐步去噪为干净 Mel 谱。训练时采用**语音填充式训练**（speech-infilling）：随机遮挡干净 Mel 谱中连续的若干帧（遮挡比例在 0.7—1.0 之间均匀采样），同时对带噪 Mel 谱施以相同策略但独立采样的遮挡（比例 0.5—1.0），模型需根据周围上下文、被遮挡的带噪 Mel 谱以及完整的音素表征序列，预测被遮挡区域的干净 Mel 谱，训练目标为最小化预测速度场与目标速度场之间的 MSE。这一策略的核心动机是：通过强制模型在被遮挡区域仅依赖语义条件进行生成，充分挖掘净化后音素表征的价值，同时降低对带噪声学细节的依赖，从而减少噪声残留和语言内容失真。推理时仅需 8 步采样即可生成高质量 Mel 谱。

**Mel vocoder（波形重构模块）** 是流水线的最后一环，负责将流匹配模块生成的干净 Mel 谱合成为时域波形。StuPASE 采用 PASE 中 DualVocoder 的架构作为 Mel vocoder，即改进版 Vocos，搭配相同的判别器和损失函数进行对抗训练。Mel 变换配置为 100 维 log Mel 特征，窗长/FFT 为 1280，跳长为 320，帧率 50 Hz。该 vocoder 在约 1000 小时的经过 UTMOS ≥ 4.0 筛选的录音室级干净语音上独立训练，训练步数 200k 步。消融实验表明，该 vocoder 本身已具备接近完美的重建能力（UTMOS 3.85、SpkSim 0.96、dWER 0.92%），说明 StuPASE 最终输出的质量主要受限于前级语义条件和声学生成，而非 vocoder 瓶颈。

**组件间的数据流与交互方式**可概括为：带噪波形同时输入 DeWavLM-R 和 Mel 谱提取器。DeWavLM-R 输出 1024 维纯净音素表征，经线性投影层压缩至 512 维；Mel 谱提取器输出带噪 Mel 谱。两者沿特征维度拼接为联合条件信号，再与高斯噪声沿时间维拼接后一同送入 DiT 流匹配模块。流匹配模块输出估计的干净 Mel 谱，最后送入 Mel vocoder 得到增强波形。整个流水线中，DeWavLM-R 的输出是唯一的语义信息源，带噪 Mel 谱提供声学结构先验，二者缺一不可——消融实验显示，若移除语义条件，dWER 从 7.89% 恶化至 36.36%；若使用未净化的语义表征，dWER 也恶化至 19.79%，验证了净化后的语义引导对低幻觉生成的决定性作用。

**关键设计选择及其动机**总结如下。第一，采用干目标微调而非含早期反射的目标：因为生成模型学习的是目标语音的完整分布，训练目标中人为添加的早期反射会使生成语音带有可感知的混响感并模糊频谱细节，而干语音更接近录音室质量的定义。第二，用流匹配替代 GAN：流匹配兼具高保真生成能力和比扩散模型更低的采样成本，适合作为声学增强的生成骨干。第三，选择 Mel 谱作为中间表征：Mel 谱为流匹配模型提供了稳定且成熟的生成域，配合高性能 Mel vocoder 可还原高质量波形。第四，与 SenSE 等方法的根本区别在于语义增强方式：SenSE 依赖语义语音编码器预测离散 token 并借助大语言模型建模，而 StuPASE 直接使用 DeWavLM-R 输出的连续音素表征作为语义条件，省去了额外的语义建模网络，在简化框架的同时实现了更优的幻觉抑制效果。

### 💡 核心创新点

StuPASE 的核心创新可归纳为三点：

1. **干目标微调改善去混响**：论文揭示，PASE 训练目标中人为添加的前 50 ms 早期反射会使生成语音带有可感知的混响感并模糊频谱细节。通过改用不含额外模拟反射的干语音作为训练目标，对 PASE 的语义模块和声学模块进行两阶段微调（得到 DeWavLM-R 和 DualVocoder-R/PASE-R），在强混响条件下显著提升感知质量：DNS1 with-reverb 上 UTMOS 从 PASE 的 1.61 提升至 PASE-R 的 3.23，dWER 从 9.78% 降至 8.01%。

2. **流匹配模块替换 GAN 声学增强器**：将 PASE 中 GAN-based DualVocoder 替换为基于 DiT 的流匹配模块，配合预训练 Mel vocoder，将“从表征直接重建波形”解耦为“先由流匹配生成高保真 Mel 谱，再由声码器合成波形”。相比 PASE-R，StuPASE 在 DNS1 with-reverb 上 UTMOS 从 3.23 提升至 4.01，dWER 从 8.01% 降至 7.89%，在强噪声和混响下实现了录音室级质量。

3. **简洁的低幻觉语义增强框架**：与 SenSE 等需要语义语音编码器和大语言模型的方法不同，StuPASE 直接使用 DeWavLM-R 输出的连续音素表征作为唯一的语义条件，配合语音填充式训练，省去额外语义建模网络的同时实现了更低的幻觉和更高的感知质量。主观测试中 Q-MOS 4.19、S-MOS 3.98，均显著优于 SenSE（Q-MOS 3.59、S-MOS 3.68）。

### 📊 实验结果

论文在 DNS1 test set（no-reverb 与 with-reverb）和自建模拟测试集上进行了客观与主观评测，并给出了完整消融。主要结果如下：

**DNS1 客观结果**：
- **No-reverb 条件**：StuPASE 的 UTMOS 为 3.99，仅次于 AES-V2（4.08），优于 TF-GridNet（3.86）、FlowSE（3.76）、PASE（3.95）、SenSE（3.85）；dWER 为 2.84%，低于 FlowSE（4.65%）、SenSE（5.49%）和 AES-V2（4.55%），略高于 PASE（2.71%）。SBS=0.91，LPS=0.98，SpkSim=0.88，DNSMOS=3.42。
- **With-reverb 条件**：StuPASE 获得最高 UTMOS（4.01）和最低 dWER（7.89%），SBS=0.86，LPS=0.92，SpkSim=0.74，DNSMOS=3.39。对比之下，SenSE 的 UTMOS 为 3.55、dWER 11.30%；FlowSE 的 dWER 高达 15.58%；AES-V2 dWER 为 18.87%。

**模拟测试集（1000 条，含更多噪声类型和 0.6–1.6s 高 RT60 混响）**：
- StuPASE 在 UTMOS（4.08）、SBS（0.85）、LPS（0.90）和 WER（11.57%）上均为最好或并列最好，DNSMOS=3.37，SpkSim=0.68。
- 对比 SenSE：UTMOS 3.88→4.08，WER 12.73%→11.57%，SpkSim 相同（0.68）。对比 AES-V2：UTMOS 3.85→4.08，WER 25.97%→11.57%，低幻觉优势显著。

**主观结果**：
- StuPASE 的 Q-MOS 为 4.19，S-MOS 为 3.98，均为所有模型最高；第二名 SenSE 的 Q-MOS 为 3.59，S-MOS 为 3.68。尽管客观 SpkSim 与 SenSE 并列（0.68），但主观 S-MOS 明显更高，说明人类听感上的说话人一致性优势更强。

下图直观呈现了各模型在主观评测中的 Q-MOS 与 S-MOS 得分对比。

![Figure 2: Subjective evaluation results for Q-MOS and S-MOS, with error bars indicating 95% confidence intervals.](https://arxiv.org/html/2603.09234v2/x2.png)

StuPASE 在 Q-MOS（4.19）和 S-MOS（3.98）上均领先于其他基线，误差条表示 95% 置信区间，显示其感知质量与说话人一致性的主观优势。


**消融实验（DNS1 with-reverb）**：
- 干目标微调：DeWavLM 的 UTMOS 从 2.42 提升至 DeWavLM-R 的 3.98，dWER 从 10.30% 降至 8.69%；PASE 的 UTMOS 从 1.61 提升至 PASE-R 的 3.23，dWER 从 9.78% 降至 8.01%。
- 流匹配替换：PASE-R → StuPASE 时 UTMOS 由 3.23 提升至 4.01，dWER 由 8.01% 降至 7.89%；SpkSim 从 0.80 降至 0.74。
- 语义条件：使用带噪语义时 dWER 恶化至 19.79%，UTMOS 降至 3.75；完全移除语义条件时 dWER 进一步恶化至 36.36%，UTMOS 降至 3.25。
- 语音填充式训练：移除 masking 后 UTMOS 从 4.01 降至 3.82，dWER 从 7.89% 升至 8.79%，SpkSim 不变（0.74）。
- Mel vocoder 本身接近完美重建：UTMOS 3.85、SpkSim 0.96、dWER 0.92%，证明最终质量瓶颈不在 vocoder。

### 🔬 细节详述

**训练数据集**：
- PASE 微调阶段沿用 PASE 的训练数据构造方式：干净语音来自 LibriVox（DNS5）、LibriTTS、VCTK、Common Voice 19.0，共约 2,000 小时；噪声来自 DNS5、WHAM!、FSD50K、FMA；RIR 来自 openSLR26 和 openSLR28。
- 训练流匹配模块和 Mel vocoder 时，额外整理录音室级目标数据：排除 Common Voice 19.0，加入 LibriSpeech 并用预训练 DPCRN 去噪，所有语音经过 UTMOS ≥ 4.0 阈值筛选，最终约 1,000 小时。
- 训练混合语音在线生成：以 80% 概率将干净语音与随机 RIR 卷积，并在 -5 到 15 dB SNR 范围内均匀采样加噪。训练目标为不含额外早期反射的干语音。

**评估数据集**：
- DNS1 test set：with-reverb 和 no-reverb 各 150 条，使用 no-reverb 干净语音作为参考计算指标。
- 模拟测试集：从 LibriSpeech test-clean 中取 1,000 条语音，与未见过的噪声和 RIR 混合；其中 750 条使用 openSLR RIR，250 条使用模拟高 RT60（0.6–1.6s）RIR。

**基线设置**：
- TF-GridNet 使用 URGENT 2025 Challenge 官方基线 checkpoint。
- FlowSE 因官方 checkpoint 训练数据较小，使用官方实现从头重新训练。
- PASE 和 SenSE 直接使用官方 checkpoint。
- AES-V2 通过官方 API 推理。

**客观指标**：
- 感知质量：DNSMOS、UTMOS。
- 说话人保真度：SpkSim，使用基于微调 WavLM-Large 的 ECAPA-TDNN 计算。
- 语言完整性：Levenshtein 音素相似度（LPS）、SpeechBERTScore（SBS）、Whisper-Large-v3 词错误率（WER）；在无参考文本时，用干净语音的 ASR 结果作为伪参考，记为 dWER。

**主观评测**：
- 从模拟测试集中筛选 70 条困难样本（UTMOS ≤ 1.3 且 SNR ≤ 5 dB）。
- Q-MOS 按 ITU-T P.800 ACR 5 分制进行，S-MOS 按 Genhancer 方法进行（相对干净参考打分，1 为完全不同，5 为完全相同）。
- 在 Prolific 平台上招募母语英语听众，Q-MOS 共 419 人（每文件 6 人），S-MOS 共 349 人（每文件 5 人）。

**实现超参**：
- PASE 微调：DeWavLM-R 和 DualVocoder-R 均用 PASE 预训练权重初始化，训练 50k 步，峰值学习率 2e-5；每 GPU batch 分别为 20（4s 片段）和 24（2s 片段）。
- Mel vocoder：100 维 log Mel（窗长/FFT 1280，跳长 320，帧率 50Hz），采用改进版 Vocos 架构，与 PASE 中 DualVocoder 相同的判别器和损失；训练 200k 步，峰值学习率 2e-4，每 GPU batch 60（1s 片段）。
- 流匹配模块：DiT 共 12 层、16 个注意力头、隐藏维度 1024、前馈维度 2048；语义投影层将 1024 维映射至 512 维；训练 100k 步，峰值学习率 1e-4，每 GPU batch 60（4s 片段）；推理采样 8 步。Clean Mel 遮挡比例在 [0.7, 1.0] 均匀采样，noisy Mel 遮挡比例在 [0.5, 1.0] 均匀采样。
- 优化：所有模型使用 AdamW，前 10% 步数线性 warmup，随后余弦衰减至 1e-6；训练硬件为两块 NVIDIA 4090 GPU。

### ⚖️ 评分理由

*   创新性 (1.3/2)：提出干目标微调、流匹配替换GAN、连续音素表征简化语义增强（[A_METHOD]），三点改进均有明确动机，属于针对性增量创新。

*   技术严谨性 (1.0/1.5)：方法设计逻辑自洽，干目标和流匹配均有消融支持（[A_RESULTS]）；但客观SpkSim低于SenSE与主观S-MOS更高的内在张力未获充分解释（[A_RESULTS]），内部一致性稍欠。

*   实验充分性 (1.2/1.5)：在DNS1和模拟集上与5类基线对比，包含消融和主观评测（[A_RESULTS]），证据较充分；但缺少统计显著性检验和对幻觉类型的细粒度误差分析（[A_LIMITS]）。

*   清晰度 (0.8/1)：论文结构清楚，方法描述详细，但摘要中的SOTA宣称与表2中no-reverb下UTMOS低于AES-V2、dWER高于PASE的结果不完全一致（[A_RESULTS]），表述准确性不足。

*   影响力 (1.1/1.5)：生成式语音增强领域关注感知质量与幻觉抑制，StuPASE在感知质量和语言完整性上领先，有参考价值（[A_SUMMARY]）。

*   开源 (0.2/1.5)：论文目前只提供可访问的在线演示页面，未发布核心代码、模型权重或训练数据。

*   可复现性 (0.3/0.5)：论文披露了模型结构、训练步数、学习率、batch、硬件、评测等核心信息（[A_METHOD][A_RESULTS]），但缺乏独立的端到端复现步骤说明，需读者自行整合，未达完全充分。

*   工程/实践价值 (1.1/1.5)：模块化设计便于独立训练和组合，推理仅需8步，训练仅需2块4090（[A_METHOD]），工程门槛较低；但未报告延迟、吞吐等部署指标（[A_LIMITS]），限制了实践价值评估。

### 🚨 局限与问题

- **代码、模型与数据未公开**：论文未披露代码、模型权重和训练/评估数据的开源信息，复现难度大，影响该工作的可传播性和社区验证。
- **“低幻觉”证据依赖代理指标**：低幻觉结论主要建立在 dWER、LPS、SBS 等自动指标上，没有对具体幻觉类型（如内容词替换、说话人特征漂移、时间不连续等）进行细粒度标注或人工分析。
- **客观说话人相似度未全面超越 SenSE**：在 DNS1 with-reverb 上 SpkSim 为 0.74 vs SenSE 0.82，no-reverb 为 0.88 vs 0.92，模拟集为 0.68 vs 0.68 并列；尽管主观 S-MOS 更高，但论文未给出这一差异的充分解释，与“说话人一致性更好”的说法存在张力。
- **摘要中的“outperforming SOTA”说法偏强**：DNS1 no-reverb 下 UTMOS 低于 AES-V2，dWER 略高于 PASE；并非在所有指标上都全面最优。
- **训练目标筛选可能引入偏差**：录音室级数据通过 UTMOS ≥ 4.0 筛选，该阈值本身可能使训练分布偏向某些声学风格，影响泛化。
- **真实场景泛化未直接验证**：除 DNS1 外，自定义测试集均由开源 RIR 和噪声模拟构造，真实录音条件（如手机通话、环境噪声突变）下的表现未知。
- **学术规范细节有欠缺**：论文未明确标注通讯作者，未提供作者与机构的逐人对应关系。

---

[← 返回 2026-08-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-06/)
