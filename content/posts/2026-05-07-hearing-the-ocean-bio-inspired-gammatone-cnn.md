---
title: "Hearing the Ocean: Bio-inspired Gammatone-CNN framework for Robust Underwater Acoustic Target Classification"
date: 2026-05-07
draft: false
tags: [音频分类, 信号处理, 时频分析, 水下声学, 边缘计算]
categories: [论文速递]
description: "音频分类 | 7.0/10"
hiddenInHomeList: true
---

# 📄 Hearing the Ocean: Bio-inspired Gammatone-CNN framework for Robust Underwater Acoustic Target Classification

#音频分类 #信号处理 #时频分析 #水下声学 #边缘计算

✅ **7.0/10** | 前25% | #音频分类 | #信号处理 #时频分析 | #信号处理 #时频分析 | [arxiv](https://arxiv.org/abs/2605.04839v1)

学术质量 6.5/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 中


### 👥 作者与机构

- 第一作者：Rajeshwar Tripathi（Bharat Electronics Limited, Central Research Laboratory, Ghaziabad, India）
- 通讯作者：未说明
- 作者列表：Rajeshwar Tripathi（Bharat Electronics Limited, Central Research Laboratory, Ghaziabad, India）、Sandeep Kumar（Bharat Electronics Limited, Central Research Laboratory, Ghaziabad, India）、Monika Aggarwal（Centre for Applied Research in Electronics (CARE), IIT Delhi, India）、Neel Kanth Kundu（Centre for Applied Research in Electronics (CARE), IIT Delhi, India）

### 💡 毒舌点评

这篇论文清晰地论证了“特征表示优于复杂架构”这一观点，其受耳蜗启发的Gammatone前端确实能更精细地解析水下信号的低频谐波，实验结果显著优于传统基线。不过，论文的创新点高度集中在特征提取阶段，分类网络（一个简单的CNN）的设计和贡献相对薄弱，使得整体框架的深度和新颖性打了折扣；此外，虽然声称面向边缘部署，但仅在标准GPU/CPU上测延迟，缺乏在真实低功耗嵌入式平台上的验证数据，这使得其应用前景的论证不够坚实。

### 🔗 开源详情

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及。
- 数据集：论文中提及使用了公开基准数据集“VTUAD (Vessel Type Underwater Acoustic Data)”，但未提供具体的下载链接或获取页面。论文中描述该数据集“publicly accessible”。
- Demo：论文中未提及。
- 复现材料：论文中提及了详细的模型参数（1.7百万参数，19.5MB）、优化器（Adam）、学习率（10^-4）、训练硬件（NVIDIA RTX 6000 Ada GPU）以及输入数据规格（16 kHz采样率，4秒窗口）。但未提供具体的代码、配置文件或检查点文件。
- 论文中引用的开源项目：未提及。论文引用的参考文献为学术论文，未明确指明引用了具体的开源软件或代码库。文中提到的“Adam optimizer”是标准优化器算法，而非特定开源项目。

### 📌 核心摘要

1.  要解决什么问题？ 传统水下声学目标分类方法在面对高噪声环境时，难以有效分辨船舶推进信号中密集的低频谐波结构，导致分类性能受限。
2.  方法核心是什么？ 提出一个仿生框架，核心是采用基于人耳耳蜗频率选择性原理的Gammatone滤波器组，其带宽遵循等效矩形带宽（ERB）尺度分布，能产生高保真度的“耳蜗图”（Cochleagram）特征，随后用一个轻量级CNN进行分类。
3.  与已有方法相比新在哪里？ 与传统的STFT、MFCC（为语音设计）或计算量大的小波变换（CWT）等线性或通用时频表示不同，该方法采用非线性、符合生理特性的滤波策略，专注于增强对分类至关重要的低频机械谐波信号，同时抑制各向同性海洋噪声。
4.  主要实验结果如何？ 在公开的VTUAD数据集上，该框架达到了98.41% 的分类准确率和0.971 的Cohen‘s Kappa分数，显著优于基线CWT（95.37%）和MFCC（90.80%）。模型仅有1.7M参数，内存占用19.5MB，在NVIDIA RTX 6000 Ada GPU上推理延迟为0.77ms，在标准CPU上为215.95ms。
5.  实际意义是什么？ 该框架在保持高精度的同时实现了极低的计算开销和内存占用，使其非常适合部署在自主水下航行器（AUV）或声纳浮标等功耗和计算资源受限的边缘设备上，用于实时、鲁棒的海洋监测和安防。
6.  主要局限性是什么？ 论文的创新主要在前端特征提取，后端分类器相对简���；实验仅在公开数据集上进行，未在更复杂的真实世界场景或跨域条件下验证；虽然测量了标准硬件的延迟，但缺乏在目标低功耗边缘平台上的直接性能数据。

### 🏗️ 模型架构

该模型架构是一个两阶段的流水线：生物启发的特征提取前端 和 轻量级分类后端。

![图1: ERB-Scaled Gammatone Filterbank based vessel classification framework using CNN model on SONAR](https://arxiv.org/html/2605.04839v1/gammatone_F.png)

整体流程：原始水下声波信号 -> Gammatone滤波器组处理 -> 希尔伯特包络提取与对数动态压缩 -> 生成二维“耳蜗图” -> 轻量级CNN -> 输出五类船舶分类概率。

主要组件与数据流：
1.  ERB-Scaled Gammatone Filterbank：这是仿生核心。一个包含64个滤波器的并行滤波器组。每个滤波器的中心频率沿ERB尺度非线性分布（覆盖50Hz-8000Hz），低频区域滤波器更密集、Q因子更高，模拟耳蜗对低频的高分辨率。每个滤波器是4阶Gammatone滤波器，其脉冲响应由公式(1)定义。该设计能有效将密集的低频发动机谐波（f₀）从宽带噪声中分离出来。
2.  Cochleagram生成：对每个滤波器的输出应用希尔伯特变换，提取瞬时包络，然后进行全波整流、低通平滑，再通过公式(3)进行对数动态范围压缩，将信号稳定化并增强特征判别力。最终将单通道的耳蜗强度图扩展为三通道（RGB）格式，以兼容标准CNN初始化。
3.  Lightweight Classification CNN：一个参数量仅为1.7M的简单CNN。其设计哲学是感受野优化而非网络深度。
    *   初始阶段：采用较大的卷积核（如7×7），以获得宽广的频谱-时间全局视图，旨在识别连续的谐波“脊线”结构，过滤掉局部脉冲噪声。
    *   中间阶段：过渡到较小的卷积核（如5×5， 3×3），提取更细粒度的空间相关性和类别特异性机械特征。
    *   输出头：使用全局平均池化（GAP）将空间维度压缩，后接一个全连接层和Softmax激活函数，输出五类分类结果。训练使用分类交叉熵损失（公式(4)）和Adam优化器。

### 💡 核心创新点

1.  非线性、仿生特征表示（Gammatone Cochleagram）：将哺乳动物耳蜗的频率选择性原理引入水下声学领域。局限：传统线性频谱（STFT）和语音优化的频谱（MFCC）无法匹配水下声学的非线性物理特性，而小波变换计算成本高。作用：通过ERB尺度的Gammatone滤波器组，实现低频高分辨率采样，精确解析被噪声掩盖的船舶发动机基频和低阶谐波。收益：在VTUAD数据集上，该特征表示比CWT和MFCC分别提升了约3.0%和7.6%的准确率。
2.  “特征优先”的轻量化设计哲学：明确将研究重心从设计复杂的深度分类网络转移到优化输入信号的表示上。局限：现有研究常陷入堆叠复杂网络模块以获取性能提升的范式。作用：通过高判别力的仿生特征，使得一个仅1.7M参数的简单CNN就能达到SOTA性能。收益：在维持顶尖精度（98.41%）的同时，实现了0.77ms（GPU）的极低推理延迟，证明了在边缘设备部署的可行性。
3.  面向低功耗边缘部署的综合评估：论文不仅报告了分类准确率，还系统性地评估了模型参数量（1.7M）、内存占用（19.5MB）、推理延迟（GPU/CPU）和Cohen‘s Kappa分数（0.971），全面验证了其在资源受限环境下的实用价值。收益：该模型在计算效率和存储上显著优于许多高精度复杂模型（如CAMPPlus、CATFISH），更适合AUV等平台。

### 🔬 细节详述

- 训练数据：使用公开的VTUAD数据集。包含三个子集（S1， S2， S3），对应不同源-传感器距离。原始数据标准化为16kHz采样率，分割为4秒（64,000样本）的窗口。划分比例为80/10/10（训练/验证/测试）。共五类：Background， Cargo， Passengership， Tanker， Tug。
- 损失函数：分类交叉熵损失（Categorical Cross-Entropy， CCE），公式(4)。未提及类别权重。
- 训练策略：优化器：Adam；学习率：10⁻⁴；未说明具体训练轮数、批大小、warmup或学习率调度策略。
- 关键超参数：Gammatone滤波器数量：64；滤波器阶数：4；耳蜗图尺寸：224×224；CNN总参数：~1.7M；内存占用：19.5 MB。
- 训练硬件：NVIDIA RTX 6000 Ada GPU。训练时长未说明。
- 推理细节：输入4秒音频片段，输出五分类概率。未提及解码策略、温度、beam size等，因是分类任务。
- 正则化或稳定训练技巧：论文中未明确说明使用了Dropout、权重衰减等技巧。

### 📊 实验结果

主要对比实验：在相同的轻量级CNN后端下，比较了不同特征提取方法的性能。

| 特征提取方法 | 原理 | 准确率（%） | Cohen‘s Kappa |
| :--- | :--- | :--- | :--- |
| MFCC | 梅尔尺度（语音） | 90.80 | 0.881 |
| CWT | 广义小波 | 91.46 | 0.894 |
| CWT (Morlet) | 振荡匹配 | 95.37 | 0.932 |
| Gammatone（本文） | 耳蜗模型 | 98.41 | 0.971 |

跨子集泛化能力：与文献方法对比。

| 参考文献 | Subset 1 (S1) | Subset 2 (S2) | Subset 3 (S3) | All Combined |
| :--- | :--- | :--- | :--- | :--- |
| [7] | 94.95 | 94.45 | 93.11 | 84.13 |
| [11] (CAMPPlus) | 98.15 | - | - | - |
| [8] (CATFISH) | 96.01 | 97.46 | 95.98 | 96.63 |
| 本文方法 | 98.41 | 97.82 | 96.52 | 96.50 |

关键发现：本文方法在S1上达到SOTA，且在“Combined”多场景数据集上保持了96.50%的高精度，而传统方法（如[7]）性能下降约10%，证明了该特征表示的强鲁棒性。

与SOTA方法详细指标对比：
| 方法/参考文献 | Precision (%) | Recall (%) | F1-Score (%) | Accuracy (%) | Param (M) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| CWT-CNN [6] | 94.90 | 94.70 | 94.80 | 93.53 | 1.6 |
| CATFISH (Fusion) [8] | 97.10 | 97.00 | 97.00 | 96.63 | 4.01 |
| CAMPPlus (Attention) [11] | 98.12 | 98.18 | 98.15 | 98.15 | 7.18 |
| 本文 Gammatone-CNN | 98.31 | 98.41 | 98.36 | 98.41 | 1.6 |

![图3: F1 Score Radar Plot](https://arxiv.org/html/2605.04839v1/f1_radar.png)
图3 (a)：F1分数雷达图。本文Gammatone-CNN（蓝色圆形标记）在所有类别上表现均衡且优异，尤其在少数类Passenger和Tanker上远超基线。

![图4: Precision Radar Plot](https://arxiv.org/html/2605.04839v1/precision_radar.png)
图3 (b)：精确率雷达图。显示本文模型对各类别的预测准确性。

![图5: Recall Radar Plot](https://arxiv.org/html/2605.04839v1/recall_radar.png)
图3 (c)：召回率雷达图。显示本文模型对各类别漏检情况的控制能力，在Passenger和Tanker上达到完美的1.0。

混淆矩阵分析：
![图9: Normalized confusion matrix for Subset 1](https://arxiv.org/html/2605.04839v1/CM1.png)
图4 (a)：Subset 1的归一化混淆矩阵。对角线颜色深，表明分类准确率高。主要错误发生在Passenger（0.79）被误判，但其Recall高达0.97。

t-SNE可视化：
![图2: t-SNE Plot for each class](https://arxiv.org/html/2605.04839v1/TSNE1.png)
图2 (a)：Subset 1的t-SNE特征可视化。显示出清晰的类间分离，尤其是Background和Tug。Cargo与Passenger有一定重叠，这符合其声学特性相似的物理直觉。

计算效率：
- GPU (NVIDIA RTX 6000 Ada)：推理延迟 0.77 ms/样本，吞吐量 ~1298 帧/秒。
- CPU (标准处理器)：推理延迟 215.95 ms/样本。对于处理4秒的音频窗口，此延迟低于信号时长的1/18，满足实时性需求。

### ⚖️ 评分理由

- 学术质量：6.5/7：论文技术路线清晰，将耳蜗仿生滤波器创造性地应用于水下声学，解决了具体问题（低频谐波分辨）。实验设计严谨，与多种基线在相同CNN后端下进行了公平比较，结果显著，证据可信。扣分点在于，分类器部分创新不足，且对“特征表示优于复杂架构”这一核心论点的论证深度可以进一步加强（例如，进行更细致的特征分析）。
- 选题价值：1.5/2：水下声学目标分类是海事安全、生态保护的关键技术，具有明确的应用前景。本文提出的低功耗、高精度框架对推动边缘智能声纳发展有实际意义。扣分点在于，该领域相对垂直，对更广泛的音频/语音社区读者而言直接相关性稍弱。
- 开源与复现加成：0.5/1：论文详细报告了超参数、硬件配置、延迟测量等复现关键信息，且使用了公开数据集VTUAD。但未提供代码、预训练模型权重或详细的训练脚本，这限制了完全复现的可能性。加分为正，但幅度有限。

---

[← 返回 2026-05-07 论文速递](/audio-paper-digest-blog/posts/2026-05-07/)
