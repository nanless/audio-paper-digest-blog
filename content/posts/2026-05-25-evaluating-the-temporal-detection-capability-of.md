---
title: "Evaluating the Temporal Detection Capability of Integrated Gradients Applied on Sound Classifier"
date: 2026-05-25
draft: false
tags: [WeaklySupervisedLearning, ExplainableAI, AudioClassification, PostHocAttribution, PolyphonicAudioDetection, SyntheticDataEvaluation, TransferLearning, MultipleInstanceLearning]
categories: [论文速递]
description: "TemporalSoundEventDetection | 3.9/10"
hiddenInHomeList: true
---

# 📄 Evaluating the Temporal Detection Capability of Integrated Gradients Applied on Sound Classifier

#WeaklySupervisedLearning #ExplainableAI #AudioClassification #PostHocAttribution #PolyphonicAudioDetection #SyntheticDataEvaluation #TransferLearning #MultipleInstanceLearning

📝 **3.9/10** | 后50% | #TemporalSoundEventDetection | #IntegratedGradients | #WeaklySupervisedLearning #ExplainableAI | [arxiv](https://arxiv.org/abs/2605.23293v1)

学术质量 3.1/7 | 影响力 0.8/2 | 可复现性 0/2


### 👥 作者与机构

- 第一作者: Martynas Dumpis
- 通讯作者: 未说明
- 机构: 未说明（仅知资助方涉及欧盟Horizon Europe programme及立陶宛共和国国家预算，资助协议号10-042-P-0001）
- 邮箱: 未说明

### 💡 毒舌点评

这篇论文的核心卖点——"post-hoc IG能在无时间监督的情况下恢复时间信息"——在实验设计上就被自己的基线选择给架空了。FW-WS与IG使用完全相同的监督信号（clip-level标签），但FW-WS通过一个max pooling的MIL机制隐式学习帧级预测，而IG只是事后对冻结模型的梯度进行积分。两者的"约束程度"差异被作者刻意放大：FW-WS并没有获得额外的人工标注，只是架构上多了一个可学习的时序聚合机制。更讽刺的是，FW-WS的PG高达97.3%，而IG仅82.6%——这意味着IG在约1/6的样本中把峰值归因放在了错误的时间位置，对于需要精确onset/offset检测的SED应用而言，这种"接近"（approaching）的表述近乎误导。

数据集规模是另一个致命伤。823个训练样本、97个测试样本，对于10类多标签分类任务而言，即使在预训练特征提取器的加持下，也远未达到任何主流音频会议的最低数据门槛。Table I中Blender和Frying的召回率分别低至0.15和0.17，这与其说是"任务本质难度"，不如说是数据饥饿（data starvation）的直接症状——模型根本没有见过足够的正例来学习区分这些易混淆的宽带噪声类。作者将这一结果轻描淡写为"aligns with known challenges"，却回避了一个更直接的解释：样本量不足以支撑可靠的统计结论。

方法实现上的瑕疵同样令人不安。"zero-valued waveform representing silence"作为IG基线，在输入实际是log-mel spectrogram的情况下存在数学不一致性：零波形经STFT和mel滤波器组后并非零值，而是产生由窗函数和滤波器响应决定的非零能量。这意味着IG的"基线"实际上是一个非平凡的声学信号，归因结果反映的是相对于该伪基线的差异，而非真正的"无声"状态。作者对此毫无觉察，更未进行消融验证。

阈值选择问题的处理暴露了评估协议的根本缺陷。在验证集上搜索1-99百分位的"最优"阈值，然后仅在测试集上报告该单点性能，这是一种典型的"oracle threshold"评估——在实际部署中，用户不可能预先知道哪个百分位最优。Figure 3揭示的阈值敏感性（IG在56th percentile最优，而FW-SS在28th percentile最优）恰恰说明，不同方法的性能曲线形态差异巨大，单点比较缺乏鲁棒性。作者未报告任何阈值无关指标（如AP或AUC），使得跨方法比较的公平性存疑。

最令人失望的是贡献的增量性。Becker et al.的LRP研究、Seipel et al.的音乐乐器识别工作、以及Frommholz et al.关于输入表示对归因质量影响的分析，已经建立了"post-hoc attribution可以定位音频事件"的先验预期。本文的"首次系统评估"声称，在方法上仅限于IG一种技术，在数据集上仅限于合成场景，在规模上远低于实际应用需求——这种"系统性"的含金量大打折扣。

### 📌 核心摘要

本文评估了Integrated Gradients (IG)作为post-hoc归因方法，从仅使用clip-level标签训练的音频分类器中恢复时间声音事件检测信息的能力。研究使用DESED soundbank和Scaper库生成合成多音音频（10类家庭声音，10秒片段，1-3个前景事件，SNR 15-25 dB），在823个训练样本和97个测试样本上评估。核心发现：IG达到0.39 mean IoU、0.52 F1、82.6% Pointing Game (PG)准确率；作为对比，使用相同clip-level标签但通过帧级MIL机制训练的framewise CNN (FW-WS)达到0.42 IoU、0.55 F1、97.3% PG，而使用帧级强监督的FW-SS达到0.45 IoU、0.58 F1、97.9% PG。作者结论认为post-hoc IG能捕获有意义的时间活动模式，定位性能"接近"显式帧级预测模型。

### 🔗 开源详情

/ 1.5 → 0/1.5

完全缺失：论文未提及任何代码链接、模型权重、数据集下载地址、训练配置或复现材料。引用Captum和Scaper的GitHub链接，但自身实验流程未开源。

### 可复现性 / 0.5 → 0.1/0.5

极低：(1) 无代码/配置；(2) 合成数据生成依赖DESED soundbank和Scaper，但未提供具体生成脚本或随机种子；(3) 关键超参数（阈值搜索范围、早停标准、验证集划分）虽提及，但完整复现所需细节不足；(4) 预训练CNN14权重来源未给直接链接。

## 局限与问题

### 作者自我声明的局限
- 合成数据，非真实录音
- 相对高SNR（15-25 dB）
- 未与Grad-CAM、LRP、扰动方法比较（列为未来工作）
- 未在真实低SNR混合场景评估

### 审稿人指出的额外问题

1. 基线比较的根本不公平性

FW-WS与IG的监督信号完全相同（clip-level标签），但FW-WS引入了帧级结构归纳偏置——这是一个可学习的、针对时间检测任务优化的架构设计。更公平的比较应是：(a) 相同CNN14架构，仅将max pooling替换为attention/weighted average等可解释聚合，再比较post-hoc attribution与内置可解释机制；或(b) 直接比较IG与Class Activation Mapping (CAM)等无需额外参数的归因方法。作者刻意将FW-WS塑造为"更宽松设置"的对比，混淆了"监督信号"与"架构设计"两个维度。

2. 基线选择的数学不一致与物理无意义

"zero-valued waveform"作为基线在音频领域是概念错误的。物理上的silence对应全零波形，但模型输入是log-mel spectrogram——零波形经STFT后产生窗函数的自相关泄漏，经mel滤波后更非零值。这意味着IG计算的"基线"实际上是一个具有特定频谱结构的伪信号，归因结果反映的是相对于该伪信号的偏差，而非真正的声学内容缺失。此问题可能系统性影响归因质量，尤其在低频区域。

3. "Oracle Threshold"评估的误导性

在96样本验证集上搜索99个百分位阈值，然后在97样本测试集上报告最优值，这种protocol在实际应用中不可行。Figure 3揭示的阈值敏感性（IG最优56th vs 常用80th导致13%相对IoU损失）意味着：(a) 单点性能高度依赖任意选择的评估协议；(b) 跨方法比较时，不同方法的最优百分位差异巨大（28th vs 43rd vs 56th），直接比较最优值不公平。应报告阈值无关指标（如Average Precision, AUC）或固定阈值下的性能曲线。

4. 数据规模与统计可靠性

823训练样本对于10类多标签分类，即使使用预训练特征，也远低于可靠学习所需。Table I中6/10类别召回<0.8，Blender/Frying的F1<0.3，表明模型未充分学习。在此基础上的时间检测分析（Table III）缺乏统计基础——小样本下的高方差（Std IoU 0.23-0.24）使类间差异的解释不可靠。例如Dog类IG优于FW-WS的反常结果，很可能是样本波动而非真实规律。

5. 过滤标准引入的分布偏移

移除"three simultaneous overlapping sound events"使训练集与测试集均不包含3事件重叠场景，但原始生成协议允许1-3事件。这导致：(a) 测试集分布与"真实"多音场景（可能含3+事件）不一致；(b) 未报告被移除样本的类别分布，可能系统性删除某些难例组合；(c) 17.7%的移除率不可忽视，但作者未分析其对评估的影响。

6. 结论的过度泛化

"IG captures meaningful temporal activity patterns"和"localization performance approaching models"的表述，在PG差距14.7个百分点、最优阈值下FW-SS IoU远超IG、且未验证统计显著性的情况下，属于过度乐观解读。实际结论是：IG能提供粗略的时间定位线索，但精度显著低于即使是最弱的可学习帧级模型（FW-WS），且峰值定位失败率不可接受。

7. 负归因值的未利用信息

作者明确提及IG输出"signed importance score"且"negative values indicate suppressive contributions"，但后续分析完全丢弃符号信息取绝对值。在polyphonic场景中，某类的负归因可能对应其他同时发生事件的抑制效应，分析其时空模式可能揭示模型错误归因的机制——这一信息被白白浪费。

8. 领域相关性的内在局限

作为纯方法学论文，其核心发现（IG不如可学习framewise模型）对实际SED系统的指导价值有限。音频社区已广泛采用framewise MIL或强监督检测器，本文的"post-hoc替代方案"在性能上无竞争力，在效率上未评估（IG计算开销未知），应用场景模糊。

## 开源详情

- 代码：论文中未提及代码链接
- 模型权重：论文中未提及
- 数据集：论文中未提及数据集的具体获取链接。论文描述了使用DESED和Scaper生成合成数据，但未提供生成数据集的开源链接或下载地址。DESED数据集原始来源引用为[18]，但论文中未给出DESED的具体URL
- Demo：论文中未提及
- 复现材料：论文中未提及（未提供训练配置文件、检查点、附录中的实现细节等具体复现材料）
- 论文中引用的开源项目：
  - Captum（用于计算Integrated Gradients）：https://github.com/pytorch/captum
  - Scaper（用于生成合成多音音频）：https://github.com/justinsalamon/scaper
  - DESED（用于声音事件检测数据集，论文引用为[18]，但未提供具体链接）：论文正文中未给出DESED的具体URL
  - PANNs/CNN14（预训练特征提取器，论文引用为[10]）：论文中未给出具体链接
  - PyTorch（深度学习框架）：论文中未给出具体链接

### 🏗️ 方法概述和架构

系统包含三个核心阶段（见图1）：(1) 音频预处理与特征提取；(2) 基于CNN14的clip-level多标签分类；(3) 对分类器应用Integrated Gradients进行post-hoc时间归因。最终输出为每类的时间重要性图，经阈值处理后得到帧级检测结果。

阶段一：音频预处理与特征表示

输入为10秒音频波形，采样率32 kHz，共320,000个样本。通过短时傅里叶变换(STFT)转换为频谱图，具体参数：1024样本Hamming窗，320样本hop长度（对应10 ms时移），64个mel滤波器组覆盖50 Hz至14 kHz，最终取对数得到log-mel spectrogram。该表示作为CNN14的输入，时间维度约为1000帧（10s / 0.01s = 1000），但经CNN14的卷积下采样后，特征图时间维度缩减。

阶段二：CNN14分类器

采用PANNs项目中的CNN14架构，该模型在AudioSet上预训练，含527个输出类别。本文冻结其卷积特征提取层（frozen weights），移除原分类头，替换为10类线性层，以二分类交叉熵训练多标签分类。关键设计：原始CNN14在卷积层后执行全局最大池化（global max pooling），先对频率维度平均，再对时间维度取最大值，得到2048维嵌入向量，最终经线性层输出10维sigmoid概率。这种设计使模型仅需clip-level标签即可训练，但完全丢弃了时间结构信息——时间维度的聚合是不可学习的、确定性的max操作。

阶段三：Integrated Gradients归因

对训练好的分类器，使用Captum库计算IG。对于每个预测概率超过0.5的类别，独立计算该类别logit对输入波形的归因。IG公式：

\[\text{IG}_i(x) = (x_i - x'_i) \times \int_{\alpha=0}^{1} \frac{\partial F(x' + \alpha(x - x'))}{\partial x_i} d\alpha\]

其中 \(x\) 为实际输入波形，\(x'\) 为基线输入，\(F\) 为模型输出函数，积分通过 \(n=50\) 步的黎曼和近似。

关键实现细节与问题：

- 基线选择：作者设 \(x'\) 为"zero-valued waveform representing silence"。但如前所述，零波形经STFT和mel滤波后非零，与"silence"的物理意义不符。更合理的基线应是全零spectrogram或随机噪声spectrogram。
  
- 输入-输出维度：IG在320,000样本的波形上计算，输出等长归因向量。但评估在100ms帧（3,200样本/帧）进行，作者通过"averaging absolute values within each 100 ms window"降采样。这种简单平均未考虑mel滤波器组的时频分辨率特性，可能模糊关键时间结构。

- 负值处理：IG输出有符号归因（正值增强预测，负值抑制），但作者取绝对值得到重要性幅度。这一处理可能丢失抑制性证据的信息价值，且未分析负归因的分布模式。

### Framewise基线架构（FW-WS / FW-SS）

为提供对比基准，作者实现帧级CNN14变体：移除时间维度的全局最大池化，使卷积输出保持时间���度，分类层独立应用于每帧，输出形状为 \((B, T, C)\)，其中 \(T=31\) 帧（对应约0.32秒时间分辨率）。clip-level预测通过帧级max pooling获得：

\[p_{\text{clip}}(c) = \max_{t=1}^{T} p_t(c)\]

FW-WS使用相同clip-level标签训练，帧级预测经时序max pooling匹配clip目标；FW-SS使用帧级事件活动标签直接监督。两者共享相同的CNN14预训练权重冻结策略和10类线性分类层训练设置。

架构对比的关键洞察：FW-WS与IG的核心差异不在于"监督信号的约束程度"（作者声称的motivation），而在于时间聚合机制的可学习性。FW-WS的帧级结构引入了一个隐式的、可学习的MIL机制：模型必须学会在31个时间帧上分配类别概率，使得max pooling后的结果匹配clip标签。而IG的clip-level分类器通过固定的、不可学习的max pooling丢弃了所有时间信息，事后通过梯度积分试图恢复——这是一种信息论上更劣的策略，其性能差距（尤其PG）反映了这一本质局限。

### 💡 核心创新点

| 声称贡献 | 实际评估 |
|---------|---------|
| 首次系统评估IG对音频分类器的时间检测能力 | 部分成立，但"系统性"受限于单一方法（仅IG）、单一数据集（合成DESED）、极小样本量（823/97）。未与Grad-CAM、LRP、扰动方法直接比较 |
| 证明post-hoc IG可恢复时间信息，"接近"显式帧级模型 | 过度claim。IoU差距7.1%（相对）看似小，但PG差距14.7个百分点（IG失败率~17.4% vs FW-WS ~2.7%）揭示了定位精度的本质差异。"接近"表述在阈值敏感性和统计显著性未验证的情况下不成立 |
| 揭示阈值选择对音频时间检测的关键影响 | 有一定价值，但属于方法学常识的实证确认，非核心创新 |

### 📊 实验结果

| Class | Precision | Recall | F1 |
|:---|:---|:---|:---|
| Alarm bell ringing | 1.00 | 0.75 | 0.86 |
| Blender | 1.00 | 0.15 | 0.27 |
| Cat | 1.00 | 0.81 | 0.90 |
| Dishes | 1.00 | 0.57 | 0.72 |
| Dog | 1.00 | 0.56 | 0.71 |
| Electric shaver | 0.91 | 0.77 | 0.83 |
| Frying | 1.00 | 0.17 | 0.29 |
| Running water | 1.00 | 0.46 | 0.62 |
| Speech | 0.92 | 0.98 | 0.95 |
| Vacuum cleaner | 0.86 | 0.46 | 0.60 |

关键观察：Blender和Frying的极低召回（0.15/0.17）与数据稀缺直接相关。10类中6类召回低于0.8，4类低于0.6，反映小样本训练的不稳定性。

### 表II：时间检测性能对比（测试集，最优阈值）

| Method | Mean IoU | F1 | Std IoU | PG |
|:---|:---|:---|:---|:---|
| IG | 0.39 | 0.52 | 0.23 | 82.6% |
| FW-WS | 0.42 | 0.55 | 0.24 | 97.3% |
| FW-SS | 0.45 | 0.58 | 0.24 | 97.9% |
| Random baseline | 0.19 | 0.30 | 0.11 | 28.3% |
| Energy baseline | 0.16 | 0.24 | 0.16 | 15.9% |

统计显著性：作者未报告置信区间或显著性检验。给定Std IoU ~0.23-0.24，样本量97，IG与FW-WS的IoU差异（0.03）的统计显著性存疑。

### 表III：逐类时间检测性能（IoU / F1）

| Class | IG IoU | IG F1 | FW-WS IoU | FW-WS F1 | FW-SS IoU | FW-SS F1 |
|:---|:---|:---|:---|:---|:---|
| Alarm bell ringing | 0.44 | 0.57 | 0.45 | 0.58 | 0.46 | 0.59 |
| Blender | 0.63 | 0.75 | 0.67 | 0.78 | 0.69 | 0.82 |
| Cat | 0.47 | 0.61 | 0.54 | 0.67 | 0.55 | 0.68 |
| Dishes | 0.20 | 0.31 | 0.20 | 0.31 | 0.24 | 0.36 |
| Dog | 0.45 | 0.57 | 0.32 | 0.45 | 0.34 | 0.46 |
| Electric shaver | 0.67 | 0.79 | 0.66 | 0.77 | 0.66 | 0.77 |
| Frying | 0.40 | 0.57 | 0.52 | 0.68 | 0.52 | 0.68 |
| Running water | 0.49 | 0.62 | 0.45 | 0.58 | 0.49 | 0.62 |
| Speech | 0.32 | 0.46 | 0.41 | 0.55 | 0.43 | 0.57 |
| Vacuum cleaner | 0.51 | 0.65 | 0.45 | 0.60 | 0.52 | 0.65 |

异常模式：Dog类IG (0.45) 反而优于FW-WS (0.32)，作者未解释此反直觉结果。可能原因：Dog声事件在数据集中长度/结构特性使max pooling的MIL机制失效，而IG的梯度峰值恰好对齐。

### 阈值敏感性（Figure 3）

| 方法 | 最优IoU百分位 | 最优IoU值 | 最优F1百分位 | 最优F1值 | 80th percentile IoU |
|:---|:---|:---|:---|:---|:---|
| IG | 56th | 0.39 | 57th | 0.52 | 0.34 |
| FW-WS | 43rd | 0.54 | - | 0.67 | - |
| FW-SS | 28th | 0.65 | 29th | 0.77 | - |

关键发现：FW-SS在最优阈值下IoU (0.65) 远超IG最优 (0.39)，差距达66.7%相对值——这与摘要中"approaching"的表述直接矛盾。

### 🔬 细节详述

数据集构建细节：
- 初始生成1000训练片段，自动过滤含3个同时重叠事件的文件，剩余823训练样本
- 验证/测试各生成250片段，同样过滤后共193，均分为96验证/97测试
- 未报告信息：过滤掉的177个训练样本的具体特征（事件组合、SNR分布）、是否导致类别分布偏移

训练配置：
- 优化器：Adam，学习率 \(10^{-3}\)
- 训练轮数：100 epochs，早停耐心值10
- 批量大小：16
- CNN14基网络冻结，仅训练10类线性层

评估协议细节：
- IG仅对预测概率>0.5的类别计算归因
- 100ms帧级聚合：对320,000样本波形，每3,200样本取平均绝对值
- 最优阈值：在验证集96样本上搜索1-99百分位，测试集97样本上应用最优值

缺失的关键实验：
- IG步数 \(n=50\) 的收敛性检查（Sundararajan et al.建议）
- 计算时间开销（10秒音频的IG归因耗时）
- 全零spectrogram基线 vs 零波形基线的消融
- 负归因值的分析利用
- 跨SNR（如5 dB, 0 dB）的鲁棒性测试
- 真实DESED评估集（非合成）的验证

### ⚖️ 评分理由

优点：研究问题具有一定新颖性，将图像领域成熟的IG方法系统应用于音频时间检测，填补了post-hoc attribution在polyphonic SED中的定量评估空白。

缺点：(1) 核心思想非首创——Becker et al.的LRP、Seipel et al.的音乐归因已建立"梯度方法可定位音频事件"的先验；(2) 方法上仅应用标准IG，无算法改进；(3) 未与Grad-CAM、LRP等同类方法比较，无法定位IG的相对优势；(4) "更受限设置"的motivation被FW-WS基线削弱——两者监督信号相同，差异仅在架构设计。

### 技术严谨性 / 1.5 → 0.5/1.5

严重缺陷：(1) 零波形基线与log-mel输入的数学不一致；(2) 320,000样本→100ms帧的简单平均降采样未论证合理性；(3) "oracle threshold"评估协议夸大实际性能；(4) 未报告统计显著性检验；(5) 未分析负归因值的信息价值；(6) Figure 3中FW-SS在最优阈值下IoU 0.65 vs IG 0.39，差距巨大，"approaching"结论不严谨。

### 实验充分性 / 1.5 → 0.5/1.5

致命短板：(1) 823训练/97测试样本对于10类多标签任务严重不足，Blender/Frying的极低召回是数据饥饿症状而非任务难度；(2) 合成数据限制：固定SNR范围（15-25 dB，相对较高）、DESED soundbank事件长度固定（0.25-4.2s）、缺乏真实混响；(3) 过滤"3事件重叠"使测试集分布与真实场景不一致，17.7%移除率未分析影响；(4) 缺失关键消融：IG步数、基线类型、计算效率、跨数据集验证。

### 清晰度 / 1 → 0.6/1

问题：(1) 公式(1)排版混乱（`xx, x′x^{\prime}`等重复标记）；(2) "10–042–P–0001"中en-dash使用不一致；(3) Figure 3图例"IG (IoU)"与"IG (F1)"颜色相同（均为蓝色），仅线型区分，可访问性差；(4) "stationary sounds"未量化定义，类间分析表面化；(5) 核心motivation的"约束程度"论述存在逻辑跳跃。

### 影响力 / 2 → 0.8/2

局限：(1) 纯音频XAI方法论文，对语音/音乐/音频社区的直接价值有限——IG用于时间检测的性能明显劣于可学习的framewise MIL，实际部署价值低；(2) 合成数据和小样本使结论推广性极弱；(3) 阈值敏感性分析虽有一定方法学意义，但属于评估protocol层面的贡献，非核心算法创新；(4) 未开源代码/模型/数据，阻碍后续验证。

#

### 🚨 局限与问题

- 合成数据，非真实录音
- 相对高SNR（15-25 dB）
- 未与Grad-CAM、LRP、扰动方法比较（列为未来工作）
- 未在真实低SNR混合场景评估

### 审稿人指出的额外问题

1. 基线比较的根本不公平性

FW-WS与IG的监督信号完全相同（clip-level标签），但FW-WS引入了帧级结构归纳偏置——这是一个可学习的、针对时间检测任务优化的架构设计。更公平的比较应是：(a) 相同CNN14架构，仅将max pooling替换为attention/weighted average等可解释聚合，再比较post-hoc attribution与内置可解释机制；或(b) 直接比较IG与Class Activation Mapping (CAM)等无需额外参数的归因方法。作者刻意将FW-WS塑造为"更宽松设置"的对比，混淆了"监督信号"与"架构设计"两个维度。

2. 基线选择的数学不一致与物理无意义

"zero-valued waveform"作为基线在音频领域是概念错误的。物理上的silence对应全零波形，但模型输入是log-mel spectrogram——零波形经STFT后产生窗函数的自相关泄漏，经mel滤波后更非零值。这意味着IG计算的"基线"实际上是一个具有特定频谱结构的伪信号，归因结果反映的是相对于该伪信号的偏差，而非真正的声学内容缺失。此问题可能系统性影响归因质量，尤其在低频区域。

3. "Oracle Threshold"评估的误导性

在96样本验证集上搜索99个百分位阈值，然后在97样本测试集上报告最优值，这种protocol在实际应用中不可行。Figure 3揭示的阈值敏感性（IG最优56th vs 常用80th导致13%相对IoU损失）意味着：(a) 单点性能高度依赖任意选择的评估协议；(b) 跨方法比较时，不同方法的最优百分位差异巨大（28th vs 43rd vs 56th），直接比较最优值不公平。应报告阈值无关指标（如Average Precision, AUC）或固定阈值下的性能曲线。

4. 数据规模与统计可靠性

823训练样本对于10类多标签分类，即使使用预训练特征，也远低于可靠学习所需。Table I中6/10类别召回<0.8，Blender/Frying的F1<0.3，表明模型未充分学习。在此基础上的时间检测分析（Table III）缺乏统计基础——小样本下的高方差（Std IoU 0.23-0.24）使类间差异的解释不可靠。例如Dog类IG优于FW-WS的反常结果，很可能是样本波动而非真实规律。

5. 过滤标准引入的分布偏移

移除"three simultaneous overlapping sound events"使训练集与测试集均不包含3事件重叠场景，但原始生成协议允许1-3事件。这导致：(a) 测试集分布与"真实"多音场景（可能含3+事件）不一致；(b) 未报告被移除样本的类别分布，可能系统性删除某些难例组合；(c) 17.7%的移除率不可忽视，但作者未分析其对评估的影响。

6. 结论的过度泛化

"IG captures meaningful temporal activity patterns"和"localization performance approaching models"的表述，在PG差距14.7个百分点、最优阈值下FW-SS IoU远超IG、且未验证统计显著性的情况下，属于过度乐观解读。实际结论是：IG能提供粗略的时间定位线索，但精度显著低于即使是最弱的可学习帧级模型（FW-WS），且峰值定位失败率不可接受。

7. 负归因值的未利用信息

作者明确提及IG输出"signed importance score"且"negative values indicate suppressive contributions"，但后续分析完全丢弃符号信息取绝对值。在polyphonic场景中，某类的负归因可能对应其他同时发生事件的抑制效应，分析其时空模式可能揭示模型错误归因的机制——这一信息被白白浪费。

8. 领域相关性的内在局限

作为纯方法学论文，其核心发现（IG不如可学习framewise模型）对实际SED系统的指导价值有限。音频社区已广泛采用framewise MIL或强监督检测器，本文的"post-hoc替代方案"在性能上无竞争力，在效率上未评估（IG计算开销未知），应用场景模糊。

### 📷 论文图片

![图1](https://arxiv.org/html/2605.23293v1/x1.png)

![图2](https://arxiv.org/html/2605.23293v1/x2.png)

![图3](https://arxiv.org/html/2605.23293v1/x3.png)


---

[← 返回 2026-05-25 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-05-25/)
