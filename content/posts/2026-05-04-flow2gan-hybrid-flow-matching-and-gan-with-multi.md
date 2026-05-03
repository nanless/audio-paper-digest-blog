---
title: "Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution Network for Few-step High-Fidelity Audio Generation"
date: 2026-05-04
draft: false
tags: [音频生成, 流匹配, 扩散模型, 对抗学习, 神经声码器]
categories: [iclr-2026]
description: "音频生成 | 7.5/10"
hiddenInHomeList: true
---

# 📄 Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution Network for Few-step High-Fidelity Audio Generation

#音频生成 #流匹配 #扩散模型 #对抗学习 #神经声码器

✅ **7.5/10** | 前25% | #音频生成 | #流匹配 | #扩散模型 #对抗学习

学术质量 6.5/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高

### 👥 作者与机构

- 第一作者：Zengwei Yao (Xiaomi Corp., Beijing, China)
- 通讯作者：Daniel Povey (dpovey@xiaomi.com, Xiaomi Corp., Beijing, China)
- 作者列表：Zengwei Yao (Xiaomi Corp.), Wei Kang (Xiaomi Corp.), Han Zhu (Xiaomi Corp.), Liyong Guo (Xiaomi Corp.), Lingxuan Ye (Xiaomi Corp.), Fangjun Kuang (Xiaomi Corp.), Weiji Zhuang (Xiaomi Corp.), Zhaoqing Li (Xiaomi Corp.), Zhifeng Han (Xiaomi Corp.), Long Lin (Xiaomi Corp.), Daniel Povey (Xiaomi Corp.)

### 💡 毒舌点评

Flow2GAN像一个精心设计的“混合动力”方案，巧妙地将Flow Matching的训练稳定性与GAN的推理高效性“混搭”，在少步高质量音频生成上取得了均衡的SOTA性能，工程实用价值突出。然而，其核心创新更像是对现有模块（Flow Matching、GAN、多分辨率网络）的针对性调优与缝合，缺乏提出全新模型或理论框架的突破性，更像是一个优秀的系统工程论文而非一篇开创性的算法论文。

### 🔗 开源详情

- 代码：提供了代码仓库链接 `https://github.com/k2-fsa/Flow2GAN`。
- 模型权重：论文中提到“the source code is released”，但未明确说明预训练模型权重是否一同发布。从“Online demo samples are available”可推测可能提供了部分权重。
- 数据集：使用了公开数据集（LibriTTS, Common Voice等），但未提供定制数据集的下载链接。
- Demo：提供了在线演示样本，访问地址为 `https://flow2gan.github.io`。
- 复现材料：论文在附录中给出了详细的模型配置（表10）、训练硬件、迭代次数、优化器等关键超参数，复现信息充分。
- 引用的开源项目：主要依赖于ConvNeXt (Liu et al., 2022b)、Vocos (Siuzdak, 2023) 中的判别器结构、F5-TTS (Chen et al., 2025) 等。

### 📌 核心摘要

本文针对音频生成中GAN训练收敛慢和Flow Matching/扩散模型多步推理开销大的问题，提出了Flow2GAN两阶段训练框架。首先，改进Flow Matching以适应音频特性：将目标从速度预测重新表述为端点（干净音频）预测，避免了静音区域速度估计的困难；并引入基于频谱能量的自适应损失缩放，强调感知上更重要的安静区域。其次，基于改进后的Flow Matching模型构建少步生成器（如1/2/4步），并通过轻量级GAN微调（采用多周期和多分辨率判别器）进一步增强生成细节。模型骨干采用多分支ConvNeXt结构，处理不同时间-频率分辨率的傅里叶系数。实验表明，Flow2GAN在Mel谱和离散音频Token条件下均能生成高保真音频，在质量与效率的权衡上优于现有GAN和Flow Matching方法。例如，在LibriTTS测试集上，4步Flow2GAN的PESQ达到4.484，ViSQOL达到4.986；在GPU上，其1步推理速度达到851.67倍实时。该工作验证了“强预训练+轻微调”范式在音频生成中的有效性。

### 🏗️ 模型架构

Flow2GAN采用两阶段训练框架（图1），其核心模型是一个基于多分辨率傅里叶系数的生成器。

![Flow2GAN总体框架图](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/5eTpRIULtb-0.png)

图1：Flow2GAN的总体框架图。第一阶段：使用改进的Flow Matching目标训练模型，预测从噪声x₀到数据x₁的路径。第二阶段：从训练好的模型构建少步生成器G_θ^N，并通过GAN微调进一步优化。

整体流程：输入条件为Mel谱或离散音频Token（c），模型最终输出波形。
生成器骨干网络（图3）：采用多分支结构处理不同时间-频率分辨率的傅里叶系数，旨在增强对音频复杂性的建模能力。
- 输入：噪声波形x_t。
- 分支处理：信号经过三条并行分支。每个分支独立进行短时傅里叶变换（STFT），得到不同分辨率的复数傅里叶系数。实部和虚部在特征维拼接后，输入一个ConvNeXt模型进行处理，输出新的复数系数，再通过逆短时傅里叶变换（ISTFT）转换回波形域。最终输出为三个分支波形的总和。
- 条件编码器：一个基于ConvNeXt的编码器处理输入条件c（Mel谱或Token嵌入），提取深层特征。该特征作为所有分支的共享条件，通过调制方式注入网络。
- 关键设计：使用更长序列（低帧率）分支分配更大的嵌入维度，较短序列（高帧率）分支分配较小的嵌入维度，以平衡性能与效率。所有STFT/ISTFT操作可微分，支持端到端训练。

Flow Matching模型：生成器同时作为Flow Matching的预测网络g_θ(x_t, t|c)，其目标是预测端点x₁。
少步生成器：在GAN微调阶段，通过将预训练模型在N步ODE求解器（公式5）中前向传播，构建N步生成器G_θ^N(x₀|c)。梯度通过所有前向步骤反向传播，实现端到端优化。

### 💡 核心创新点

1.  针对音频特性的Flow Matching改进：
    - 是什么：将Flow Matching的训练目标从估计速度场v_t = x₁ - x₀重新表述为直接预测干净数据x₁（端点估计）。
    - 局限：标准速度估计在音频静音或零能量区域要求网络精确地学习“减去噪声”（-x₀），学习难度大。
    - 作用：新目标使网络专注于从含噪x_t重构x₁，学习目标更统一稳定。实验显示，此改进将2步Flow Matching的PESQ从2.351提升至2.806（表3）。
    - 收益：为后续GAN微调提供了更强的初始化权重，显著提升了少步生成质量。

2.  频谱能量自适应损失缩放：
    - 是什么：将预测误差转换到频域，并根据参考频谱的能量进行反比缩放，损失函数为公式(6)。
    - 局限：标准MSE损失对所有信号区域平等对待，但人耳对安静区域的误差更敏感。先前的基于能量的缩放仅在时间维度（每帧）进行。
    - 作用：在时间和频率两个维度上强调感知重要的安静区域，引导模型更关注这些区域的细节重建。
    - 收益：消融实验（表3）表明，此策略在Flow Matching阶段和GAN微调后均带来显著性能提升，且优于仅按帧缩放的版本。

3.  两阶段训练范式（Flow Matching + GAN微调）：
    - 是什么：第一阶段用改进的Flow Matching进行稳定预训练，学习生成能力；第二阶段用GAN对少步生成器进行微调，增强细节并实现快速推理。
    - 局限：纯GAN训练收敛慢、易模式崩溃；纯Flow Matching推理慢。
    - 作用：结合了两者优势：Flow Matching提供稳定训练和强生成先验，GAN高效地进行细节雕刻和少步化。
    - 收益：实验（表4）表明，该范式以远低于纯GAN的训练成本（如11k次GAN迭代仅需2.6小时），达到了更高质量。

### 🔬 细节详述

- 训练数据：Mel谱条件模型使用LibriTTS数据集（585小时英语语音，24kHz）。音频Token条件模型使用多个公开数据集：Common Voice 7.0（语音）、DNS Challenge 4-clean（语音）、MTG-Jamendo（音乐）、AudioSet和FSD50K（音效），均重采样至24kHz。
- 损失函数：
    - Flow Matching阶段：最终损失为公式(6)（L''_FM），基于L2范数并加权。
    - GAN微调阶段：采用HingeGAN对抗损失、L1特征匹配损失、多尺度L1 Mel谱重构损失（窗口长度{32,64,128,256,512,1024,2048}，Mel频带数{5,10,20,40,80,160,320}）。
- 训练策略：使用ScaledAdam优化器。Mel谱条件模型：92k步Flow Matching训练，110k步GAN微调。音频Token条件模型：180k步Flow Matching训练，190k步GAN微调。音频Token训练时随机选择带宽{1.5, 3.0, 6.0, 12.0} kbps。
- 关键超参数：模型参数量约78.9M。时间嵌入维度512。三分支嵌入维度分别为768/512/384。每分支8层ConvNeXt，前馈因子3，卷积核大小7。条件编码器嵌入维度512，共4层。
- 训练硬件：Mel谱模型在2张NVIDIA H20 GPU上训练。音频Token模型在8张H20 GPU上训练Flow Matching阶段，在2张H20 GPU上训练GAN阶段。
- 推理细节：使用欧拉法求解ODE。推理速度测试采用批量大小16，1秒音频片段，在Intel Xeon Platinum 8457C CPU和NVIDIA H20 GPU上进行。

### 📊 实验结果

主要对比实验：

| 模型 | 参数量(M) | PESQ↑ | ViSQOL↑ | V/UV F1↑ | Periodicity↓ | FSD↓ | SMOS↑ | MOS↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Mel谱条件 (LibriTTS测试集) | | | | | | | | |
| BigVGAN | 112.4 | 4.241 | 4.964 | 0.969 | 0.071 | 0.022 | 4.47±0.10 | 4.33±0.18 |
| Vocos | 13.5 | 3.618 | 4.898 | 0.951 | 0.105 | 0.042 | 4.10±0.17 | 4.38±0.16 |
| RFWave (10步) | 18.1 | 4.220 | 4.772 | 0.957 | 0.098 | 0.412 | 4.24±0.16 | 4.29±0.13 |
| WaveFM (1步) | 19.5 | 3.540 | 4.894 | 0.943 | 0.124 | 0.098 | 3.72±0.18 | 3.76±0.18 |
| Flow2GAN, 1步 (本文) | 78.9 | 4.189 | 4.957 | 0.975 | 0.063 | 0.028 | 4.44±0.14 | 4.39±0.15 |
| Flow2GAN, 2步 (本文) | 78.9 | 4.440 | 4.979 | 0.983 | 0.044 | 0.023 | 4.53±0.13 | 4.56±0.11 |
| Flow2GAN, 4步 (本文) | 78.9 | 4.484 | 4.986 | 0.985 | 0.037 | 0.016 | 4.60±0.14 | 4.58±0.14 |
表1：Mel谱条件下与SOTA方法对比。Flow2GAN在多数指标上达到或超过基线，尤其在PESQ、ViSQOL和周期性错误上表现优异。

| 带宽(kbps) | 模型 | PESQ↑ | ViSQOL↑ | FSD↓ | SMOS↑ | MOS↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 音频Token条件 (通用评估集) | | | | | | |
| 1.5 | PeriodWave-Turbo (4步) | 1.260 | 3.308 | 4.055 | 1.55±0.16 | 1.47±0.19 |
| | Flow2GAN, 4步 (本文) | 1.925 | 3.662 | 1.069 | 3.17±0.19 | 3.40±0.18 |
| 3.0 | PeriodWave-Turbo (4步) | 2.160 | 4.058 | 1.018 | 3.04±0.17 | 3.16±0.23 |
| | Flow2GAN, 4步 (本文) | 2.550 | 4.091 | 0.804 | 4.03±0.16 | 4.08±0.22 |
| 6.0 | PeriodWave-Turbo (4步) | 3.229 | 4.424 | 0.712 | 4.00±0.17 | 4.40±0.21 |
| | Flow2GAN, 4步 (本文) | 3.089 | 4.351 | 0.678 | 4.19±0.12 | 4.38±0.13 |
| 12.0 | PeriodWave-Turbo (4步) | 3.579 | 4.544 | 0.776 | 4.32±0.16 | 4.56±0.16 |
| | Flow2GAN, 4步 (本文) | 3.538 | 4.531 | 0.557 | 4.22±0.19 | 4.50±0.15 |
表2：音频Token条件下与SOTA方法对比（部分数据）。Flow2GAN在低带宽下优势明显，在高带宽下也具有竞争力。

关键消融实验：

| 方法 | Flow Matching (2步) | | GAN微调 1步 | | GAN微调 2步 | |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| | PESQ↑ | ViSQOL↑ | PESQ↑ | ViSQOL↑ | PESQ↑ | ViSQOL↑ |
| Standard Flow Matching | 2.351 | 3.691 | 3.730 | 4.853 | 4.257 | 4.933 |
| Predict x1, w/o loss scaling | 2.806 | 3.691 | 4.173 | 4.912 | 4.332 | 4.937 |
| Predict x1, w/ loss scaling (最终) | 3.469 | 3.749 | 4.303 | 4.942 | 4.471 | 4.969 |
表3：Flow Matching改进的消融实验。预测x₁和频谱能量加权损失均带来显著且一致的提升。

推理速度对比：

![推理速度对比图](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/5eTpRIULtb-3.png)

图4：不同模型在CPU和GPU上的推理速度对比（xRT，相对实时速度）。Flow2GAN的1/2/4步版本在GPU上均远超实时，且优于大多数基线。

| 模型 | GPU xRT↑ |
| :--- | :--- |
| BigVGAN-v2* | 121.9 |
| Vocos | 6440.80 |
| PeriodWave-Turbo (4步) | 43.70 |
| WaveFM (1步) | 226.31 |
| Flow2GAN, 1步 (本文) | 851.67 |
| Flow2GAN, 4步 (本文) | 228.48 |
表7（部分）：GPU推理速度对比。Flow2GAN在高速推理上优势明显。

零样本TTS性能：

![零样本TTS结果可视化](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/5eTpRIULtb-4.png)

图5：零样本TTS生成的音频波形和梅尔谱对比。Flow2GAN生成的波形更接近真实音频（Ground Truth）。

| 模型 | WER(%)↓ | SIM-o↑ | UTMOS↑ |
| :--- | :--- | :--- | :--- |
| BigVGAN-v2* | 1.82 | 0.66 | 3.70 |
| PeriodWave-Turbo (4步) | 1.8 | 0.67 | 4.17 |
| Flow2GAN, 4步† (本文) | 1.87 | 0.67 | 4.26 |
表8（部分）：结合F5-TTS Base的零样本TTS性能。Flow2GAN（加噪声微调）在自然度（UTMOS）上取得最佳，SIM-o持平。

### ⚖️ 评分理由

- 学术质量：6.5/7：论文工作完整，从问题分析、方法提出（改进Flow Matching、两阶段训练、多分辨率网络）到充分的实验验证（多任务、多指标、消融、速度对比）逻辑清晰。技术方案虽为组合创新，但针对性强，效果显著，且提供了可复现的细节。不足之处在于理论深度有限，部分设计（如损失权重选择）偏经验。
- 选题价值：1.5/2：聚焦于音频生成的核心需求——质量与速度的平衡，研究问题明确且具有较高的工业应用潜力。工作对TTS、语音合成等领域有直接参考价值。
- 开源与复现加成：0.5/1：论文明确公开了代码仓库和在线演示，并提供了详尽的模型配置。这极大地降低了复现门槛，增加了论文的可信度和实用性。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
