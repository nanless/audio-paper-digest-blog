---
title: "Lung-SRAD: Spectral-Aware Regularized Audio DASS with Dual-Axis Patch-Mix Contrastive Learning for Respiratory Sound Classification"
date: 2026-06-11
draft: false
tags: [对比学习, 数据增强, 正则化微调]
categories: [论文速递]
description: "对比学习 | 6.8/10"
hiddenInHomeList: true
---

# 📄 Lung-SRAD: Spectral-Aware Regularized Audio DASS with Dual-Axis Patch-Mix Contrastive Learning for Respiratory Sound Classification

#对比学习 #数据增强 #正则化微调

**6.8/10** | 创新 1.5/2 | 严谨 1.3/1.5 | 实验 1.4/1.5 | 清晰 1/1 | 影响 0.5/1.5 | 开源 0.4/1.5 | 复现 0.3/0.5 | 工程 0.4/1.5

✅ **6.8/10** | 前50% | #对比学习 | #对比学习 | #数据增强 #正则化微调 | [arxiv](https://arxiv.org/abs/2606.11922)


### 👥 作者与机构

作者: Hemansh Shridhar, Miika Toikkanen, June-Woo Kim†
机构: 1 RSC LAB, MODULABS, Republic of Korea; 2 Department of Electronic Engineering, Wonkwang University, Republic of Korea; 3 AI Convergence Research Institute, Wonkwang University, Republic of Korea

### 💡 毒舌点评

这篇工作像是在给现有的SSM框架（DASS）做一次精准的“任务适配”和“性能调优”。动机清晰——解决Transformer的“低通滤波”问题，技术路线也完整：用频谱分析找问题，用正则化解决问题，再用对比学习巩固效果。但“新颖性”的帽子得扣得小一点：频谱感知正则化和Patch-Mix对比学习都不是新鲜事，核心贡献在于将这些技术组合并适配到SSM在呼吸音分类这个特定场景。实验是扎实的，消融和超参数分析都做了，在ICBHI这个标准基准上刷到了不错的数字。然而，最大的硬伤是临床转化的“真空”——5.5小时的数据集，和现实世界复杂、嘈杂的医疗场景隔了不止一个太平洋。论文通篇在谈技术细节的“空间频率”，却对医生到底需要什么样的辅助诊断模型、模型输出如何与临床工作流结合只字不提，这让整个工作的“落地”价值大打折扣。最终，这是一篇合格的、甚至可以说是优秀的技术报告，但距离一篇有深远影响力（尤其对领域内）的“研究”还差一口气。

### 📌 核心摘要

本文针对呼吸声音分类（RSC）任务中，Transformer骨干（如AST）可能因自注意力的“低通滤波”效应而丢失局部异常声音特征的问题，探索了状态空间模型（SSM）作为替代方案。作者首次将蒸馏音频状态空间模型（DASS）应用于RSC，并通过分析其频谱响应，发现DASS在中间层能更好地保持中高频空间特征。基于此观察，提出了频谱感知层正则化（对选定层应用高斯卷积）和双轴Patch-Mix对比学习（一种与VMamba多方向扫描特性对齐的监督对比学习策略）。在ICBHI基准数据集上，完整的Lung-SRAD方法在4分类和2分类任务中分别取得了64.48%和72.57%的分数，超越了先前的最佳结果，证明了所提技术组合的有效性。

### 🔗 开源详情

- 代码：https://github.com/RSC-Toolkit/Lung-SRAD （明确提供）
- 模型权重：论文中未提供本研究（Lung-SRAD）的预训练或微调后的模型权重下载链接。仅说明使用AudioSet-distilled初始化，其教师模型（AST, HTS-AT）的权重可通过引用项目获取。
- 数据集：ICBHI Respiratory Sound Database。论文中未提供直接下载链接，需通过引用文献 Rocha et al., 2017 获取。
- Demo：论文中未提及。
- 复现材料：论文中提供了详细的训练配置信息，包括数据预处理、数据增强、优化器及超参数、评估设置（五次随机种子平均）。
- 论文中引用的开源项目：AST (https://github.com/YuanGongND/ast), HTS-AT (https://github.com/RetroCIBG/HTS-AT), DASS (https://github.com/apple/ml-dass), Mamba (https://github.com/state-spaces/mamba), VMamba (https://github.com/VMamba-VMamba/VMamba), AudioSet (https://research.google.com/audioset/), CLAP (https://github.com/LAION-AI/CLAP), BEATs (https://github.com/microsoft/unilm/tree/master/beats), SpecAugment (标准技术), Patch-Mix Contrastive Learning (方法已融入本文代码), ImageNet (标准数据集), LAION-Audio-630K (https://github.com/LAION-AI/CLAP)。

### 🏗️ 方法概述和架构

本文提出的Lung-SRAD方法旨在增强基于SSM的呼吸声音分类模型对局部异常模式的捕捉能力。其整体架构建立在蒸馏音频状态空间模型（DASS） 之上，该模型是一个分层的、基于谱图输入的音频分类骨干，其核心是二维选择性状态空间扫描（SS2D） 模块。在此基础之上，引入了两项关键技术：频谱感知层正则化和双轴Patch-Mix对比学习，并结合标准的交叉熵监督损失进行联合优化。

1. 骨干网络：DASS架构
DASS是基于VMamba骨干构建的分层音频SSM。输入为梅尔谱图 \(\mathbf{X} \in \mathbb{R}^{T \times F \times 1}\)。模型包含四个阶段的SS2D块，每个阶段后通过补丁合并（patch-merging）层降低时间-频率分辨率，同时增加通道维度，形成多尺度特征金字塔。最终阶段的特征经过全局池化后送入线性分类器。DASS使用从Transformer教师模型（AST和HTS-AT）在AudioSet上蒸馏得到的权重进行初始化。

2. 核心动机：频谱行为分析与差距
论文通过分析中间层权重矩阵（注意力矩阵或SS2D混合矩阵）的傅里叶域响应，对比了AST和DASS的特性。分析表明，AST的softmax注意力表现出明显的低通滤波特性，高频响应弱，且深层注意力集中于CLS token（注意力汇聚现象），可能导致对局部异常声音不敏感。相比之下，DASS通过SS2D在全时间-频率图上聚合特征，其频谱响应在多个中高频波段保持显著幅度，尤其在中间层（Stage 2），这种特性有利于捕捉短时异常事件。

3. 模块一：频谱感知层正则化
为平衡中高频响应与全局上下文建模，该模块对频谱响应图中表现出过强中高频峰值的层（实验中选定为Stage 2的Block 2和Block 3）应用选择性高斯平滑。具体地，对激活图 \(\mathbf{O}^{(l)} \in \mathbb{R}^{B \times C \times H \times W}\)，沿高度（频率）和宽度（时间）轴分别进行深度可分离的一维高斯卷积：\(\mathbf{O}_{\text{low}}^{(l)} = \tilde{G}_H  (\tilde{G}_W  \mathbf{O}^{(l)})\)，其中 \(\tilde{G}\) 是归一化的1D高斯核。此操作旨在衰减主导的谱峰，同时保留整体频率响应趋势，从而在微调中控制模型对高频模式的过度拟合，提升特异性（Sp）。

4. 模块二：双轴Patch-Mix对比学习
针对VMamba的二维定向扫描特性，提出了与之对齐的轴对齐补丁混合（Axis-Aligned Patch Mixing）策略，以生成高质量的对比样本。
*   时间轴补丁混合（Temporal Patch-Mix）：从批次中随机样本的连续时间片段（宽度 \(w\)）替换到目标样本的对应时间位置，保留频率维度的连续性。片段宽度由采样自Beta分布的混合比 \(\lambda_t\) 决定：\(w = \lfloor W(1 - \lambda_t) \rfloor\)。
*   频率轴补丁混合（Frequency Patch-Mix）：类似地，替换连续的频率带（高度 \(h = \lfloor H(1 - \lambda_f) \rfloor\)），保留时间维度的连续性。
*   对比学习目标：采用不对称的梯度策略。对于原始样本 \(\mathbf{X}_i\) 和其混合版本 \(\tilde{\mathbf{X}}_i\)，通过共享的backbone \(f_\theta\) 和投影头 \(h(\cdot)\) 得到嵌入 \(\hat{\mathbf{q}}_i\) 和 \(\hat{\tilde{\mathbf{q}}}_i\)（对混合版本应用stop-gradient）。然后，针对每个轴 \(a\)（时间或频率），计算改进的Patch-Mix InfoNCE损失 \(\mathcal{L}_{PM}^a\)，该损失以温度 \(\tau\) 缩放的余弦相似度为基础，鼓励投影空间对轴对齐的混合操作保持不变性。

5. 总体目标与训练
最终的损失函数是监督交叉熵损失与两个轴向对比损失的之和：\(\mathcal{L}_{total} = \mathcal{L}_{CE} + \mathcal{L}_{PM}^{\text{time}} + \mathcal{L}_{PM}^{\text{freq}}\)。整个Lung-SRAD模型基于此目标在ICBHI数据集上对预训练的DASS进行微调。

![图1](https://arxiv.org/html/2606.11922v1/x1.png)

![图2](https://arxiv.org/html/2606.11922v1/x2.png)


### 💡 核心创新点

1.  首次应用：首次将蒸馏音频状态空间模型（DASS）引入呼吸声音分类任务，并展示了其在保留高频特征方面的潜力。
2.  分析驱动的正则化：基于对模型中间层频谱响应的定量分析，提出了一种针对性的频谱感知层正则化策略（选择性高斯平滑），以控制模型的频率偏好。
3.  任务对齐的对比学习：提出了一种双轴Patch-Mix对比学习框架，其补丁混合操作（沿时间或频率轴替换连续段）专门设计以与SSM（VMamba）的多方向扫描机制保持一致，从而实现有效的正则化。

### 📊 实验结果

论文在ICBHI呼吸声音数据集（官方60%-40%训练-测试划分）上进行了实验，评估指标为敏感性（Se）、特异性（Sp）和ICBHI分数（Score=(Se+Sp)/2）。

表1：ICBHI数据集整体结果（4分类与2分类设置）
| 方法 | 骨干 | 预训练数据 | 会议 | Sp (%) | Se (%) | Score (%) | 评估设置 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Bae et al. (微调) | AST | IN+AS | INTERSPEECH'23 | 77.14 | 41.97 | 59.55 | 4类 |
| Bae et al. (Patch-Mix CL) | AST | IN+AS | INTERSPEECH'23 | 81.66 | 43.07 | 62.37 | 4类 |
| Kim et al. (SG-SCL) | AST | IN+AS | ICASSP'24 | 79.87 | 43.55 | 61.71 | 4类 |
| Xiao et al. (LungAdapter) | AST | IN+AS | INTERSPEECH'24 | 80.43 | 44.37 | 62.40 | 4类 |
| Kim et al. (BTS) | CLAP | LA | INTERSPEECH'24 | 81.40 | 45.67 | 63.54 | 4类 |
| Jeong et al. (PAFA) | BEATs | AS | INTERSPEECH'25 | 82.05 | 47.63 | 64.84 | 4类 |
| Toikkanen et al. (BTS++ [k=30k]) | CLAP | LA | INTERSPEECH'25 | 89.49 | 41.89 | 65.69* | 4类 |
| DASS (微调) [本文] | DASS | AS | – | 74.68±2.50 | 47.43±1.58 | 61.06±1.27 | 4类 |
| DASS (频谱感知正则化) [本文] | DASS | AS | – | 76.72±5.67 | 47.72±3.23 | 62.22±1.29 | 4类 |
| DASS (Lung-SRAD) [本文] | DASS | AS | – | 79.53±0.95 | 49.42±1.19 | 64.48±0.25 | 4类 |
| Bae et al. (微调) | AST | IN+AS | INTERSPEECH'23 | 77.14 | 56.40 | 66.77 | 2类 |
| Bae et al. (Patch-Mix CL) | AST | IN+AS | INTERSPEECH'23 | 81.66 | 55.77 | 68.71 | 2类 |
| Kim et al. (SG-SCL) | AST | IN+AS | ICASSP'24 | 79.87 | 57.97 | 68.93 | 2类 |
| Jeong et al. (PAFA) | BEATs | AS | INTERSPEECH'25 | 74.87 | 68.29 | 72.08* | 2类 |
| DASS (微调) [本文] | DASS | AS | – | 73.74±3.38 | 61.72±2.94 | 68.20±2.05 | 2类 |
| DASS (频谱感知正则化) [本文] | DASS | AS | – | 76.72±5.67 | 60.29±3.96 | 68.40±1.04 | 2类 |
| DASS (Lung-SRAD) [本文] | DASS | AS | – | 79.53±0.95 | 65.61±0.24 | 72.57±0.47 | 2类 |

   注：IN=ImageNet, AS=AudioSet, LA=LAION-Audio-630K。 标记为先前最佳分数。
*   4分类结果：完整的Lung-SRAD方法（Score 64.48%）优于AST基线（如Bae et al. Patch-Mix CL的62.37%）和先前最佳（Jeong et al. PAFA的64.84%）可比或略超，显著优于DASS微调基线（61.06%）。消融研究（表2）表明，频谱感知正则化主要提升Sp（74.68%→76.72%），而双轴Patch-Mix对比学习进一步提升Score至64.48%。
*   2分类结果：Lung-SRAD在2分类任务上达到72.57%，超过了先前报告的最佳分数72.08%（Jeong et al. PAFA）。值得注意的是，2分类结果是从4分类训练权重中得出的，因此特异性（Sp）值相同。
*   表2消融研究显示了各组件的贡献：频谱感知正则化、频率轴Patch-Mix、时间轴Patch-Mix，以及完整的双轴组合对性能的提升。

![图3](https://arxiv.org/html/2606.11922v1/x3.png)


### ⚖️ 评分理由

*   创新性 (1.5/2)：问题动机清晰（缓解Transformer的低通滤波），解决方案有针对性。首次将DASS应用于RSC，并基于频谱分析设计正则化，具有一定的组合创新。但核心组件（高斯平滑、Patch-Mix对比学习）并非原创，且“双轴”设计更多是对现有方法的适配。
*   技术严谨性 (1.3/1.5)：方法设计有合理的理论依据（频谱分析），实验对比了不同设计选择（如AST-style vs. 轴对齐Patch-Mix），消融实验完整。数学推导和符号表示清晰。然而，频谱分析中“空间频率”与原始音频特征的具体联系未充分阐释，高斯平滑层选择标准略显经验性。
*   实验充分性 (1.4/1.5)：在标准基准（ICBHI）的官方划分上进行实验，报告了均值和标准差，进行了详细的消融研究和超参数敏感性分析。与多种SOTA方法进行了全面比较。数据集规模较小（5.5小时）是一个固有局限。
*   清晰度 (1.2/1.5)：论文结构良好，方法描述详细，图表（频谱响应图、消融结果）具有说明性。但部分技术细节（如SS2D中CrossMerge的具体实现）可进一步明确。
*   影响力 (0.5/1)：作为一篇针对特定医疗音频任务（呼吸音分类）的技术改进工作，其影响主要局限于该任务社区。对SSM在音频领域的通用应用或对临床实践的实际推动作用，论文未充分��论和验证。
*   开源 (0.4/0.5)：提供了清晰的代码仓库链接（GitHub），有利于复现。但未提供预训练模型权重或处理好的数据集下载链接，复现需额外步骤获取这些资源。
*   可复现性 (0.3/0.5)：提供了详细的训练配置（优化器、学习率、数据增强、随机种子等）。但由于预训练权重和完整数据集（ICBHI需申请）未直接提供，完全复现仍存在障碍。
*   工程/实践价值 (0.4/1)：展示了SSM在资源受限或需要长序列处理的任务中的潜力。然而，其临床部署所需的鲁棒性验证、计算效率分析（与Transformer对比）以及如何融入诊断流程等关键工程和实践问题均未涉及，价值更多停留在算法层面。

#

### 🚨 局限与问题

1.  数据集规模与泛化性质疑：ICBHI数据集仅约5.5小时，且来自单一中心。模型在如此小规模数据上的性能提升，能否泛化到不同设备、采集环境和患者群体，存在重大疑问。缺乏跨数据集验证严重限制了结论的强度。
2.  临床相关性严重缺失：论文完全聚焦于算法在技术指标上的提升，但呼吸音分类的最终目标是辅助临床诊断。未讨论模型预测的临床意义、假阴性/假阳性的实际代价、模型输出如何被医生理解和使用，以及在真实临床工作流中的潜在角色。
3.  方法设计中的模糊地带：
    *   频谱分析中“空间频率”的定义（基于特征图补丁）与实际音频声谱图的频率成分之间的关联是间接的，论文未建立更直观的联系。
    *   选择哪些层进行高斯平滑的标准（“表现出显著中高频峰值”）缺乏明确的量化指标，更多是基于观察的定性判断。
4.  对比学习的有效性质疑：双轴Patch-Mix对比学习引入了额外的计算和优化复杂度。其收益（Score从62.22%提升至64.48%）在绝对数值上有限，且是否在更小数据集上易导致过拟合值得探讨。论文未提供对比学习过程中的训练曲线来佐证其稳定性。
5.  与SOTA的差距分析不足：虽然论文报告了优于AST基线和部分先前工作，但与最新的基于BEATs或CLAP的强基线（如PAFA， BTS++）相比，优势并不明显甚至在某些指标（如Sp）上落后。论文未深入分析这种差距的潜在原因（如预训练数据规模、模型架构差异）。
6.  计算效率未讨论：论文动机之一是Transformer的二次复杂度问题，但未报告或比较DASS与AST在推理速度、内存占用方面的实际数据，无法验证SSM在效率上的声称优势。

---

[← 返回 2026-06-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-06-11/)
