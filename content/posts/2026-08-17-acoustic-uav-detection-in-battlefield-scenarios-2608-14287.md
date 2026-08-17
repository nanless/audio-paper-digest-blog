---
title: "Acoustic UAV Detection in Battlefield Scenarios: Handling Noise, Domain Shift, and Weak Labels"
date: 2026-08-17
draft: false
tags: [音频事件检测, CNN, 领域适应, 低资源, 鲁棒性]
categories: [论文速递]
description: "音频事件检测 | 6.7/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.14287"
---

# 📄 Acoustic UAV Detection in Battlefield Scenarios: Handling Noise, Domain Shift, and Weak Labels

标签：#音频事件检测 #CNN #领域适应 #低资源 #鲁棒性

**6.7/10** | 创新 1.2/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

✅ **6.7/10** | 前50% | 文档类型：方法研究 | 评分置信度：中 | #音频事件检测 | #CNN | #领域适应 #低资源 | [arxiv](https://arxiv.org/abs/2608.14287)


### 👥 作者与机构

- 第一作者：Vadym Vilhurin（Institute for Applied System Analysis, Igor Sikorsky Kyiv Polytechnic Institute, Kyiv, Ukraine；Zvook, Lviv, Ukraine）
- 通讯作者：未说明
- 作者列表：Vadym Vilhurin（Institute for Applied System Analysis, Igor Sikorsky Kyiv Polytechnic Institute；Zvook）、Volodymyr Sydorskyi（Institute for Applied System Analysis, Igor Sikorsky Kyiv Polytechnic Institute；Zvook；Kyiv School of Economics）、Andrii Shevtsov（Zvook；Kyiv School of Economics）

### 💡 毒舌点评

这篇论文用一组成熟但组合得当的声学特征与训练技巧，在真实前线数据上把小型无人机检测拉到可用水平，工程味很足。短板同样明显：核心数据不公开、无代码和模型，第三方几乎无法验证或复现，削弱了其科学说服力。部分消融提升缺乏统计显著性，且对残余域偏移的分析仍偏指标层面，没有深入反例。

### 📌 核心摘要

该论文要解决真实战场环境中被动声学无人机检测的三个核心问题：强噪声、异构麦克风引起的域偏移，以及弱标签和极端类别不平衡。方法核心是将 PCEN 声学表征、ConvNeXt-Tiny 骨干和带频率投影器的注意力池化相结合，并引入域感知训练策略，包括噪声注入 Mixup 和高能量段 RMS 掩码课程增强。与已有工作相比，本文不依赖大模型或多模态，而是在轻量 CNN 上系统融合表征增强与跨域训练技巧，并在真实跨设备、跨季节数据上做验证。实验显示，最佳开源基线 AST-Drone 的测试 F1 为 55.36%，本文全量数据 PCEN+投影单模型达到 78.6%，全量集集成达到 82.22%，小训练集集成也能达到 81.14%。实际意义是为低成本、被动、快速部署的战场声学无人机检测提供了较完整的工程化方案。主要局限包括数据与代码不公开、小型无人机被当作单一类、缺少空间距离信息，且跨设备噪声域偏移仍未完全消除。

### 🔗 开源详情

论文未提供代码、模型权重或数据集的公开链接。机器摘要资源状态为：has_code=否，has_model=否，has_dataset=否。数据由 Zvook 提供，原文未披露可公开获取的数据地址。

### 🏗️ 方法概述和架构

本文提出的是一个基于深度 CNN 的音频事件检测流水线，输入为 9 秒、32 kHz 音频片段，输出为多类分类概率，最终将 “Small Drone” 类作为目标检测结果。整体流程为：原始波形首先被转换为时频表征，可选择 Log-Mel 或 PCEN；然后通过 ImageNet-1K 预训练的 ConvNeXt-Tiny 骨干提取特征；在骨干输出之后，通过频率投影器与时间注意力池化形成片段级表示；最后经过 softmax 分类头输出多类概率。训练时同时使用 Mic-1 的辅助类和 Mic-2 的目标类，二元检测结果从多类输出中取出 Small Drone 类别。

声学表征部分有两个并行的前端。Log-Mel 基线使用 2048 点窗、512 点 hop、128 个 Mel 频带；PCEN/Log-Mel 配置使用 4096 点窗、256 个频带，PCEN 参数固定为平滑系数 \(s=0.015\)、增益 \(\alpha=0.8\)、偏置 \(\delta=2.0\)、幂 \(r=0.5\)、压缩幂 2.0。PCEN 的作用是抑制平稳背景噪声并压缩增益差异，使弱谐波结构在低 SNR 下更明显。

为直观对比不同表征的效果，下图展示了同一段无人机音频的梅尔谱图与PCEN表征。

![Fig. 3: Example of a Mel spectrogram (top) and PCEN representation (bottom) for a UAV audio sample.](https://arxiv.org/html/2608.14287v1/images/spec_and_pcen.jpg)

上图的梅尔谱图中，无人机信号部分被强背景噪声掩盖；而下图的PCEN表征有效抑制了平稳噪声并压缩了动态范围，使得无人机谐波结构更为清晰。


骨干网络为 ConvNeXt-Tiny，用于从时频图中提取局部谱时模式。论文选择 CNN 而非 Transformer 的原因是有限数据下 CNN 的归纳偏置更强、数据需求更低。骨干输出经过一个频率投影器，该模块替换了原来的 GeM 频率池化：它由沿频率维度的 1D 卷积组成，不把频率维压缩成单一标量，而是学习频带之间的加权组合和非线性响应。这样即使无人机基频被低频噪声掩盖，模型仍能通过谐波比检测目标，并保留谱拓扑。

时间聚合使用 SED 风格注意力头。与 BirdCLEF+ 2025 方案相似，但这里去掉了 tanh 约束，使注意力分数可以更大，从而更尖锐地聚焦重要时间区域。最终聚合结果通过 class-wise softmax 输出多类互斥概率，替代 sigmoid，以强调类别之间互斥性。

训练阶段的核心是域感知数据增强与课程策略。噪声注入 Mixup 不进行任意的类间混合，而是将训练样本仅与来自 Mic-1 或 Mic-2 的噪声以等概率混合，混合系数 \(\lambda\) 上限为 0.3，并保留原类别标签。这生成 “低 SNR” 的训练样本，迫使模型在目标域噪声背景下识别无人机信号，同时逐步拉近两个域的噪声分布。另一个关键增强是 RMS 课程掩码：定位 2 秒最高 RMS 能量区，随机用噪声替换其中 0.5–1.0 秒；训练早期替换时长为 0.3–0.5 秒，随后逐步增加到 0.5–1.0 秒，以迫使模型不过度依赖最响片段。训练还采用平方根采样、随机时移、正弦时间扭曲、随机增益、波形反转和 SpecAugment 风格掩码，并用 SWA 和 top-5 checkpoint 稳定模型选择。

### 💡 核心创新点

- 将 PCEN 声学表征、ConvNeXt-Tiny 骨干、可学习频率投影器和去掉 tanh 约束的 SED 注意力池化组合，用于低 SNR、弱标签的战场无人机声学检测。
- 提出域感知训练策略：利用 Mic-1 辅助类与 Mic-2 目标类联合训练，缓解标签空间部分不重叠带来的跨域泛化问题。
- 设计噪声注入 Mixup：样本仅与来自 Mic-1 或 Mic-2 的噪声以等概率混合，\(\lambda\) 上限 0.3，并保留原标签，从而生成低 SNR 样本并拉近两个域的噪声分布。
- 设计 RMS 课程掩码：随机用噪声替换最高能量区中的 0.5–1.0 秒，并采用从短到长的课程策略，迫使模型关注更强的谐波结构而不是只依赖最响片段。
- 在真实跨设备、跨季节、跨地点数据上系统比较了 PCEN 与 Log-Mel 前端、外部开源基线、消融模型和集成模型，验证了轻量 CNN 方案在低资源设置下的有效性。

### 📊 实验结果

论文报告的是 Small Drone 对 all other classes 的二元检测指标。原文 Table V 的主要测试集结果如下：最佳开源基线 AST-Drone 的 F1 为 55.36%；本文 PCEN+投影单模型在完整训练集上达到 78.6% F1；全量集集成达到 82.22% F1，小训练集集成达到 81.14% F1；SAM-Audio-small 测试 F1 为 4.45%，说明零样本基础模型不能替代任务特定训练。距离子集分析中，附近或中距离 flybys 的 ROC AUC 为 97.2%，远距离 flybys 为 93.8%。

为验证模型所学习到的特征表示是否有效，下图对增强模型（Log-Mel前端）在验证集上输出的嵌入进行了t-SNE可视化。

![Fig. 4: t-SNE projection of model embeddings obtained from the enhanced model (Log-Mel).](https://arxiv.org/html/2608.14287v1/images/tsne_best_bigger.jpeg)

图中可见，不同类别的样本在嵌入空间中形成了可分离的簇，表明模型成功学习到了区分无人机与其他声学事件的判别性特征。


为分析不同麦克风和数据集间的域偏移问题，下图对“噪声”类别的模型嵌入进行了t-SNE可视化。

![Fig. 7: t-SNE projection of model embeddings of class ”Noise” obtained from the enhanced model (Log-Mel) for the validation and test sets and for Mic-1 and Mic-2.](https://arxiv.org/html/2608.14287v1/images/tsne_mics.jpeg)

图中可见，Mic-1和Mic-2的噪声分布存在显著差异，且验证集与测试集的分布也部分不重叠，这直观揭示了跨设备和跨时段域偏移的挑战。


论文还进一步分析了模型在不同距离子集上的检测性能，下图展示了集成模型在近距离和远距离飞越样本上的ROC曲线。

![Fig. 8: ROC curves for different drone distance subgroups and the final ensemble model.](https://arxiv.org/html/2608.14287v1/images/roc_curves_distances.png)

图中可见，近距离飞越的AUC高达0.972，而远距离飞越的AUC也达到了0.938，表明模型在不同距离上均保持了较强的区分能力。


| 模型 | 参数量（M） | Val F1（%） | Test F1（%） | Test Precision（%） | Test Recall（%） |
|---|---:|---:|---:|---:|---:|
| Zvook Baseline | 37 | 96.35 | 69.10 | 81.59 | 59.92 |
| Baseline on Mic2 | 28.22 | 17.00 | 17.40 | 87.70 | 0.097 |
| Baseline on Mic2 + Mic1 | 28.22 | 91.40 | 49.80 | 88.80 | 34.60 |
| + Mixup | 28.22 | 83.20 | 75.60 | 74.40 | 76.90 |
| + RMS based masking | 28.22 | 90.60 | 75.20 | 78.10 | 72.50 |
| + Projector | 30.97 | 96.10 | 77.80 | 92.70 | 67.10 |
| + PCEN + Projector | 30.97 | 96.10 | 77.90 | 92.20 | 67.50 |
| + Using full dataset（PCEN+Projector） | 30.97 | 97.10 | 78.60 | 84.30 | 73.60 |
| Ensemble（Small training set） | 61.94 | 97.23 | 81.14 | 96.18 | 70.18 |
| Ensemble（Full training set） | 61.94 | 98.18 | 82.22 | 92.70 | 73.87 |
| AST-Drone | 86 | 42.82 | 55.36 | 49.02 | 63.58 |
| TRIDENT LeNet-Audio | 0.012 | 1.68 | 19.29 | 27.84 | 14.75 |

### 🔬 细节详述

论文使用的数据集来自乌克兰前线和训练场，由 Zvook 提供，包含超过 300,000 条 9 秒、32 kHz 录音，仅提供文件级弱标签，无逐时间戳标注。Mic-1 安装在 10–40 米通信塔上，类别包括 Drone、Jet Aircraft、Helicopter、Propeller Aircraft 和 Environmental Noise；Mic-2 部署在前线地面约 1 米处，类别包括 Small Drone 和 Environmental Noise。小训练集中 Mic-1 占训练数据 99% 以上，Mic-2 Small Drone 仅 441 条；完整训练集中 Small Drone 为 4648 条。

验证协议没有使用 K 折交叉验证，而是按时间和地点划分为训练、验证、测试三个互不重叠的数据集：训练集来自非战斗区域受控现场测试，验证集来自冬季，测试集来自春季并严格取自活跃战斗区。模型选择使用所有类的 Macro F1，同时跟踪二元 Small Drone 指标，以缓解目标类验证样本极稀带来的高方差选择问题。

前端方面，Log-Mel 基线使用 2048 点窗、512 点 hop、128 个 Mel 频带；PCEN/Log-Mel 配置使用 4096 点窗和 256 个频带，PCEN 参数为平滑系数 \(s=0.015\)、增益 \(\alpha=0.8\)、偏置 \(\delta=2.0\)、幂 \(r=0.5\)、压缩幂 2.0。骨干为 ImageNet-1K 预训练 ConvNeXt-Tiny。频率投影器替代 GeM 频率池化，由沿频率维的一维卷积组成；SED 注意力头去掉 tanh 约束，最终用 class-wise softmax 替代 sigmoid。

训练增强包括随机时移（±100 ms）、正弦时间扭曲、随机增益（±3 dB）、波形反转（\(p=0.5\)）、SpecAugment 风格时间/频率掩码、时间拉伸、波形反转等。噪声注入 Mixup 中，训练样本以等概率与 Mic-1 或 Mic-2 噪声混合，\(\lambda\) 上限为 0.3，并保留原类别标签。RMS 课程掩码定位 2 秒最高能量区并用噪声替换部分时间，早期替换 0.3–0.5 秒，后期增至 0.5–1.0 秒。为了应对极端类别不平衡，DataLoader 采用带替换的平方根采样，且两个域的 Environmental Noise 虽被映射为同一类，但仍按各自数量独立采样。训练还采用 SWA 和基于 Macro F1 的 top-5 checkpoint 选择。优化器、批量大小、学习率与训练 epoch 等具体超参数未在论文原文中披露。

### ⚖️ 评分理由

*   创新性 (1.2/2)：[A_METHOD] 将 PCEN 前端、ConvNeXt-Tiny 骨干、可学习频率投影器与去 tanh 约束的 SED 注意力池化组合，并引入噪声注入 Mixup 与 RMS 课程掩码，针对低 SNR 和跨麦克风域偏移形成了有证据的工程组合创新，而非单一组件原创。

*   技术严谨性 (1.2/1.5)：[A_METHOD] PCEN 抑制平稳噪声、频率投影器保留频带结构以检测谐波比、RMS 课程掩码迫使模型不过度依赖最响片段等机制均有明确声学或优化动机，方法在技术上自洽，未发现明显算法或推导错误。

*   实验充分性 (1.0/1.5)：[A_RESULTS] 报告了多个外部基线、增量消融、距离子集 ROC AUC 和对抗验证，证据覆盖较广；但 [A_LIMITS] 指出部分消融验证集波动较大且未报告方差或显著性检验，无法确认小训练集下增益是否稳定，因此在统计稳健性上存在不足。

*   清晰度 (0.8/1)：[A_SUMMARY] 摘要、方法、实验和局限结构完整，[A_METHOD] 对前端、骨干、注意力聚合和增强策略的说明较为具体，并有表格与 t-SNE/ROC 图辅助理解；扣分仅在部分可视化解读需要读者自行对照，整体表达清晰。

*   影响力 (1.0/1.5)：[A_SUMMARY] 面向真实战场被动声学无人机检测，将最佳开源基线 F1 从 55.36% 提升到 82.22%，对低成本部署和音频事件检测社区有实际参考价值；但单一类别口径和场景专用性限制了更广泛的泛化影响。

*   开源 (0.0/1.5)：[A_OPEN] 论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：[A_METHOD] 描述了主要架构、前端参数和验证划分；[SCORING_SOURCE_15/18] 给出了 100 epochs、batch size 64、AdamW lr=1e-4、余弦退火与 Focal loss 等训练超参数；但论文未披露硬件配置和完整的数据清洗与评测执行步骤，属于大部分披露但有少量缺失，给 0.3。

*   工程/实践价值 (1.2/1.5)：[A_METHOD] 给出了从 9 秒 32 kHz 音频输入到多类概率输出的完整 CNN 流水线，并在真实前线跨季节、跨设备测试中取得 82.22% 集成 F1；[A_RESULTS] 的轻量模型参数量约 30.97M，具备快速部署潜力，但缺少系统级延迟、吞吐和成本评估。

### 🚨 局限与问题

- 论文未公开代码、模型权重或数据集，第三方几乎无法复现或独立验证结果。
- 所有 Small Drone 被聚合为单一类别，忽略多旋翼 DJI Mavic、FPV、侦察或轰炸型无人机之间的战术和声学差异。
- 模型处理独立 9 秒片段，未利用跨片段时间上下文，可能增加误报和不稳定检测。
- 缺少明确的空间距离和高度标注；距离分组依赖人工感知，受障碍物、麦克风和机型影响。
- 领域偏移未被完全消除：全局噪声传感器偏移实验中，增强模型在部分聚类指标上并未比基线更不变；增强模型在对抗验证的测试 ROC AUC 仍约 69.1%，高于随机水平。
- 弱标签没有时间戳级边界，RMS 掩码和注意力学习的监督粒度有限。
- 模型选择基于所有类 Macro F1，作为最终二元检测任务的选择代理，无法保证直接最优。
- 部分消融验证集指标波动较大，且未报告方差或显著性检验，无法确认小训练集下的增益是否稳定。

---

[← 返回 2026-08-17 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-17/)
