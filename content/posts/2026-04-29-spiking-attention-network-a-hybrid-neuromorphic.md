---
title: "Spiking Attention Network: A Hybrid Neuromorphic Approach to Underwater Acoustic Localization and Zero-Shot Adaptation"
date: 2026-04-29
draft: false
tags: [声源定位, 脉冲神经网络, 注意力机制, 零样本, 鲁棒性]
categories: [icassp-2026]
description: "声源定位 | 7.0/10"
hiddenInHomeList: true
---

# 📄 Spiking Attention Network: A Hybrid Neuromorphic Approach to Underwater Acoustic Localization and Zero-Shot Adaptation

#声源定位 #脉冲神经网络 #注意力机制 #零样本 #鲁棒性

✅ **7.0/10** | 前25% | #声源定位 | #脉冲神经网络 | #注意力机制 #零样本

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Quoc Thinh Vo (Drexel University, Department of Electrical and Computer Engineering)
- 通讯作者：David K. Han (Drexel University, Department of Electrical and Computer Engineering)
- 作者列表：Quoc Thinh Vo (Drexel University, Department of Electrical and Computer Engineering), David K. Han (Drexel University, Department of Electrical and Computer Engineering)

### 💡 毒舌点评

本文的亮点在于将生物启发的脉冲神经网络（SNN）与成熟的ResNet、Conformer架构混合，用于处理原始水声信号，避免了传统方法繁琐的特征预处理，并展示了在零样本设置下的出色泛化能力；但短板在于其核心的LIF神经元模型相对简化，且所有实验均基于单一数据集（SWellEx-96），在更多样、更复杂海洋环境下的普适性有待进一步验证。

### 📌 核心摘要

1.  要解决什么问题：水下声源定位（ASL）因环境噪声大、几何结构不规则、声学特性多变而极具挑战性。现有深度学习方法要么依赖梅尔谱图、互相关等预处理特征，丢失原始信息，要么依赖大量模拟数据，泛化能力有限。
2.  方法核心是什么：提出一种名为SA-Net的混合神经形态网络。它直接处理原始声学信号（21通道，1秒窗口），架构核心包括：用于初步特征提取和降采样的残差网络块（ResNet）、用于时空特征提取与噪声过滤的Leaky Integrate-and-Fire（LIF）脉冲神经元层、用于序列信息编码的Conformer块，以及最终的回归输出MLP头。
3.  与已有方法相比新在哪里：
    *   首次结合：论文声称是首次将LIF SNN与注意力机制（Conformer）结合用于水下声源定位。
    *   端到端原始信号处理：直接处理原始时序数据，无需人工设计的声学特征。
    *   零样本适应性：模型在未见过的地理位置和多普勒频移条件下（零样本设置），无需微调即可取得优于部分SOTA方法在域内测试的结果。
4.  主要实验结果如何：
    *   在SWellEx-96 S5 VLA数据集上，SA-Net（Scenario 1）在距离估计回归任务上取得了显著领先的性能，MAE为0.0322 km，MSE为0.00274 km，远优于表1中的所有对比方法。
    *   在零样本测试中（Scenario 2 & 3），模型MAE分别为0.1303 km和0.1226 km，仍优于MLF-TransCNN的域内结果（0.2718 km）。
    *   在加噪测试（Scenario 4）中，即使在SNR低至-15dB时，模型仍能给出MAE为1.1895 km的预测，展示了鲁棒性。
    *   消融实验（表2）证实，结合ResNets、LIF-SNNs和Conformers的完整模型性能最佳，且输入数据标准化方式影响显著。
5.  实际意义是什么：为水下声源定位提供了一种更高效（低延迟0.11秒/1秒样本）、更鲁棒、适应性更强（零样本泛化）的新思路，特别是在依赖原始信号处理和快速部署的场景下具有潜在应用价值。
6.  主要局限性是什么：论文指出，网络尚未在更广泛的海洋环境中进行验证；所采用的LIF神经元模型是简化的，忽略了部分真实的神经元动力学特性。

### 🏗️ 模型架构

SA-Net（Spiking Attention Network）是一个用于水下声源距离回归的混合架构，整体流程如下：
1.  输入：1秒长的多通道原始声学信号，维度为1500采样点 × 21水听器通道。
2.  残差网络块：包含4个残差块，每个块由两个1D卷积层（带批归一化和ReLU）及残差连接组成，主要功能是下采样和提取初步的声学特征。
3.  LIF脉冲神经元层：在前3个残差块后分别连接一层LIF神经元。LIF神经元模拟生物神经元的积分-发放机制，通过膜电位随时间积分输入电流，达到阈值则发放脉冲。其核心特性是时间常数τ，由衰减因子β控制（论文中设置β≥0.9，对应τ≈0.6秒）。这使得神经元能够整合较长时间跨度内的多径到达信号，并自然滤除高频噪声。
4.  Conformer块：在残差网络和SNN之后，使用2个Conformer块。Conformer结合了卷积和自注意力，能同时建模序列的局部（卷积）和全局（注意力）依赖关系，用于提取更高级的序列特征。
5.  MLP回归头：一个两层MLP，将512维的最终特征向量映射为标量输出，即估计的距离（km）。

![SA-Net架构图](http://teb0hdrpn.hd-bkt.clouddn.com/icassp-2026/2026-04-29/11464621-0.png)
图1展示了SA-Net的整体架构。输入信号依次经过Residual Blocks进行初步处理，然后通过LIF SNN层进行脉冲编码和时序整合，接着由Conformer Blocks进行上下文信息融合，最后通过MLP得到距离预测值。

![LIF神经元动力学与脉冲产生示意图](http://teb0hdrpn.hd-bkt.clouddn.com/icassp-2026/2026-04-29/11464621-1.png)
图2解释了LIF神经元的膜电位变化（A）和二元输出脉冲神经元的概念（B）。输入电流I[t]使膜电位U[t]上升，达到阈值Vthr时产生脉冲S[t]并重置电位，这个过程是处理时序数据的关键。

### 💡 核心创新点

1.  混合神经形态架构用于水声定位：将擅长时空序列处理的LIF SNN与强大的ResNet和Conformer模块有机结合。SNN层通过其时间积分特性，能自适应地捕获水声信号中复杂的多径时延，弥补了固定窗口CNN的不足。
2.  端到端原始信号处理：摒弃了传统的梅尔谱、互相关等特征工程，直接从原始波形中学习特征，减少了信息损失和对领域知识的依赖，使模型更具泛化潜力。
3.  零样本环境适应性：通过仅在部分数据上训练，模型能够直接泛化到未见过的地理位置（Scenario 2）和多普勒频移条件（Scenario 3），无需微调。实验证明其零样本性能优于某些SOTA方法的域内性能，突显了该架构的鲁棒性和实用性。

### 🔬 细节详述

- 训练数据：使用SWellEx-96 S5实验的垂直线阵数据。将75分钟录音分为4500个1秒段，每段包含21通道、1500个采样点（Fs=1500Hz）。标签为最近1分钟内的真实距离。数据增强：未说明。
- 损失函数：均方误差（MSE）损失，用于回归任务。
- 训练策略：
    - 优化器：Adam，学习率：10⁻⁴。
    - 批大小（Batch size）：未说明。
    - 训练轮数/步数：未说明。
    - 调度策略：未说明。
- 关键超参数：
    - 模型总参数量：约16M。
    - LIF神经元参数：Scenario 1中，不同层的衰减因子β和时间步Δt精心设置，以保持统一的膜时间常数τ≈0.6秒。在其他Scenario中，简化使用β=0.9。
    - 模型结构：4个Residual Blocks，3个LIF SNN层，2个Conformer Blocks，1个MLP。
- 训练硬件：NVIDIA GeForce RTX 3090 GPU 和 AMD Ryzen Threadripper PRO 3955WX CPU。
- 推理细节：平均推理延迟为0.11秒/1秒测试样本。
- 正则化或稳定训练技巧：使用了替代梯度（Surrogate Gradients）来训练LIF神经元，具体采用了快速sigmoid函数（斜率k=25）作为脉冲生成函数的近似导数，以解决SNN训练中脉冲不可微的问题。输入数据标准化方式（Standard vs MinMax）对性能有影响。

### 📊 实验结果

主要在SWellEx-96 S5 VLA数据集上进行实验，评估任务为源距离估计（回归）。

主要对比结果（表1）：

| 方法 | MAE (km) | MSE (km²) |
| :--- | :--- | :--- |
| MFP [32] | 1.73 | – |
| CNN-r [32] | 1.40 | – |
| CPA-DDA-UNET [33] | 0.5976 | – |
| FEAST [34] | 0.5277 | – |
| Encoder-MLP [35] | – | 0.22 |
| Siamese-SSL [36] | – | 0.1207 |
| Time-Freq-CPC [37] | – | 0.11 |
| MLF-TransCNN [38] | 0.2718 | – |
| SA-Net (Scenario 1) | 0.0322 | 0.00274 |

SA-Net在MAE和MSE指标上均大幅领先现有方法，MAE从次优的0.2718 km降低到0.0322 km。

零样本与鲁棒性测试结果（表3 & 表4）：

| SA-Net | Zero-shot | MAE (km) | MSE (km²) |
| :--- | :--- | :--- | :--- |
| Scenario 1 | | 0.0322 | 0.00274 |
| Scenario 2 | ✓ | 0.1303 | 0.02571 |
| Scenario 3 | ✓ | 0.1226 | 0.02543 |
| Scenario 4 (SNR=10dB) | ✓ | 0.0454 | 0.00427 |

| Metric | SNR 10 dB | 0 dB | -10 dB | -15 dB |
| :--- | :--- | :--- | :--- | :--- |
| MAE (km) | 0.0454 | 0.0688 | 0.5552 | 1.1895 |
| MSE (km²) | 0.00427 | 0.01376 | 1.01778 | 2.83545 |

即使在未经微调的零样本设置下（新位置、多普勒频移），模型的性能依然保持在可接受的范围内，并优于某些SOTA方法的域内结果。在加噪测试中，随着信噪比下降，性能下降，但在极端噪声（-15dB）下仍能工作。

消融实验（表2）：验证了各组件的必要性。最佳配置为使用Standard归一化，并包含ResNets、LIF-SNNs和Conformers所有模块。

特征可视化（图3）：
![不同层输出热力图](http://teb0hdrpn.hd-bkt.clouddn.com/icassp-2026/2026-04-29/11464621-2.png)
图3展示了不同网络层输出的热力图。(A)和(B)对比显示，LIF SNN层相比Residual Block层，其激活模式更稀疏、更具选择性，可能对应于过滤噪声和编码关键时序特征。(C)和(D)显示Conformer块进一步整合信息，突出了显著的特征区域。

### ⚖️ 评分理由

- 学术质量：6.0/7：论文提出了一个清晰且有动机的混合架构，将SNN的优势引入水声定位，并通过实验证明了其有效性。方法新颖性较强，实验设计全面（域内、零样本、加噪），结果令人信服。扣分点在于，模型的核心组件（LIF神经元、Conformer）并非原创，更多是组合创新；且所有实验仅在一个公开数据集上进行，缺乏在其他水声环境或任务（如DOA估计）上的广泛验证。
- 选题价值：1.5/2：水下声学定位是海洋工程、国防等领域的关键问题，具有明确的应用价值。本文探索的神经形态计算与注意力机制结合的路径，为处理时序传感信号提供了新思路。但该领域相对垂直、小众，与通用音频/语音处理社区的直接关联性中等。
- 开源与复现加成：0.5/1：论文在脚注中提供了GitHub代码仓库链接（https://github.com/qtvo93/spiking-nw-ssl），表明了开源意向，这是一个加分项。但论文正文未详细说明是否已开源所有代码、模型权重、训练配置和超参数搜索细节。仅凭链接，复现信心为中等。

### 🔗 开源详情

- 代码：论文脚注提供了GitHub仓库链接：https://github.com/qtvo93/spiking-nw-ssl。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：实验使用公开的SWellEx-96数据集，论文未提供其获取方式或处理脚本。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了关键的模型架构描述、部分超参数设置（如LIF的β值、学习率）和训练硬件信息，但未详细说明完整的训练配置、数据划分脚本、随机种子等复现细节。
- 论文中引用的开源项目：未明确引用其他开源项目作为依赖。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)
