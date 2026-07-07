---
title: "RABBiT: Rapidly adaptive BOLD foundation model via brain-tuning for accurate zero-shot and few-shot prediction of speech-elicited responses in the brain"
date: 2026-07-07
draft: false
tags: [零样本, 少样本, 可解释性, 自监督学习]
categories: [论文速递]
description: "音频理解 | 8.1/10"
hiddenInHomeList: true
---

# 📄 RABBiT: Rapidly adaptive BOLD foundation model via brain-tuning for accurate zero-shot and few-shot prediction of speech-elicited responses in the brain

#零样本 #少样本 #可解释性 #自监督学习

**8.1/10** | 创新 1.5/2 | 严谨 1.4/1.5 | 实验 1.3/1.5 | 清晰 0.9/1 | 影响 0.8/1.5 | 开源 1/1.5 | 复现 0.5/0.5 | 工程 0.7/1.5

🔥 **8.1/10** | 前25% | #音频理解 | #参数高效微调 | #零样本 #少样本 | [arxiv](https://arxiv.org/abs/2607.05171)


### 👥 作者与机构

- 第一作者：Omer Moussa（Max Planck Institute for Software Systems, Saarbrücken, Germany）
- 通讯作者：Mariya Toneva（Max Planck Institute for Software Systems, Saarbrücken, Germany）
- 作者列表：Omer Moussa（Max Planck Institute for Software Systems）、Mariya Toneva（Max Planck Institute for Software Systems）

### 💡 毒舌点评

本文巧妙地将群体共享响应的零样本预测与高效的个体少样本适配统一在一个紧凑的模型中，其学到的ROI查询嵌入能无监督地恢复出听觉到语言的皮层层级，设计精妙。然而，亮点背后是隐忧：训练仅依赖6名受试者的单一视听数据集，混合数据集训练未带来增益反而有所下降，这对其作为“基础模型”的泛化能力投下阴影。实验局限于英语自然聆听场景，其对多语言、对话等复杂真实场景的适用性仍然存疑，距离真正的通用模型尚有距离。

### 📌 核心摘要

本文提出RABBiT，一个用于预测语音诱发fMRI脑响应的紧凑、参数高效的音频到脑影像基础模型。该模型旨在同时解决两个关键挑战：对未见受试者的群体共享响应进行精准零样本预测，以及利用极少量个体数据实现高效少样本适配。方法核心由三部分构成：(1) 使用LoRA对冻结的自监督语音骨干（Wav2Vec2.0-base）进行“脑调优”，使语音特征更好地服务于皮层预测；(2) 提出Temporal Brain Transformer (TBT)，通过一组可学习的ROI查询令牌对语音流进行交叉注意力，显式地为每个脑区构建自适应时间表征；(3) 创新性地引入Shared–Idiosyncratic Decomposition (SID)，将每个脑区的fMRI响应分解为低秩的群体共享成分与受试者特异性偏差成分，此设计天然支持零样本推断和仅更新偏差系数的高效少样本校准。在包含324名未见受试者的两个大型保留听力队列上，RABBiT的零样本预测性能超越了参数规模大得多的SOTA多模态基础模型TRIBEv2，在听觉皮层区域的表现甚至饱和于受试者间一致性。仅需约10分钟校准数据，RABBiT的少样本适配便以三个数量级更少的参数显著优于体素级岭回归基线。此外，TBT学到的查询嵌入不仅可复现经典的语言网络定位，还能无监督地恢复从听觉到语言的粗皮层层级。主要局限在于仅在英语自然视听材料上训练，跨数据集混合训练未见增益，且未系统性地探索更大骨干模型的缩放效应。

### 🔗 开源详情

- 代码：https://github.com/bridge-ai-neuro/rabbit
- 模型权重：论文中未提及
- 数据集：
  训练集：CourtoisNeuroMod（Friends子集），需遵循其数据使用协议，论文未提供直接下载链接，可参考文献 boyle2025friends 和 st2026cneuromod。
  评估集：Narratives (OpenNeuro ds002345, https://openneuro.org/datasets/ds002345)；Le Petit Prince 英语有声书 (OpenNeuro ds003643, https://openneuro.org/datasets/ds003643)。
- Demo：论文中未提及
- 复现材料：论文正文及附录提供了完整的训练配置、架构细节和超参数（如 LoRA rank=8、TBT 2层/8头/hidden=256、SID M=100/R=15、锚定损失权重等），可与代码仓库配合复现。
- 论文中引用的开源项目：
  - Wav2Vec2.0: https://github.com/pytorch/fairseq/tree/master/examples/wav2vec
  - WavLM: https://github.com/microsoft/unilm/tree/master/wavlm
  - FreeSurfer: https://surfer.nmr.mgh.harvard.edu
  - TRIBEv2: 引用自 dAscoli2026TribeV2（论文中未提供独立项目链接，依赖作者公开的代码）
  - LoRA (Hu et al. 2022): 常见开源实现于 https://github.com/microsoft/LoRA 或 HuggingFace PEFT
  - CourtoisNeuroMod 和 OpenNeuro 数据集平台: https://openneuro.org

### 🏗️ 方法概述和架构

RABBiT的设计遵循一个端到端的流水线，整个模型仅包含约12.9M可训练参数，所有组件联合训练。其架构和工作流程如下：
1.  语音骨干与脑调优：给定输入语音，首先由一个冻结的Wav2Vec2.0-base模型（90M参数）以50Hz的帧率编码为768维的时序令牌序列。为了将通用的语音特征适配到特定的皮层预测任务，在骨干网络的Transformer层中插入了低秩适配器（LoRA, rank=8）。这增加了约0.6M可训练参数，并使得梯度可以从最终的fMRI预测损失反向传播至骨干网络，从而实现参数高效的“脑调优”而无需微调整个模型。
2.  Temporal Brain Transformer (TBT)：脑调优后的语音令牌序列被送入TBT模块。该模块由2层交叉注意力块堆叠而成，每层包含30个可学习的ROI查询令牌，对应30个双侧HCP-MMP1脑分区（覆盖听觉、语言、默认模式及控制区）。在每个块中，查询令牌首先进行自注意力交互，然后通过交叉注意力机制，动态地关注一个特定时间窗口内的语音令牌。这取代了传统方法中固定的时间池化操作，允许每个脑区学习自适应的、区域特定的时间整合规则。TBT最终为每个ROI输出一个256维的潜在表征向量 \(z_i\)。
3.  Shared–Idiosyncratic Decomposition (SID)：每个ROI的潜在表征\(z_i\)通过SID映射为该脑区内\(V_i\)个顶点的fMRI预测值。SID将预测响应建模为两个低秩成分之和：\(y_i^{(s)} = \pi_i(z_i) \Phi_i + \rho_i(z_i) \Delta_{i,s}\)。其中，\(\Phi_i\) (M=100) 是跨受试者共享的基，捕捉群体的共同响应子空间；\(\Delta_{i,s}\) (R=15) 是每个受试者的特异性偏差基，捕捉个体与群体模式的偏离。\(\pi_i\)和\(\rho_i\)是线性系数映射。共享基和偏差基分别从训练数据的跨受试者PCA均值和个体残差的SVD初始化，并通过锚定损失约束其在训练中的漂移。
4.  双模式迁移：
    *   零样本推断：对于新受试者，使用训练受试者的平均偏差基 \(\bar{\Delta}_i\) 替代未知的个体偏差基 \(\Delta_{i,s}\)，即可预测未见个体的群体平均响应。
    *   少样本校准：给定新受试者的少量校准数据，冻结除偏差系数映射\(\rho_i\)之外的所有模型参数，仅更新约115K参数即可实现高效的个体适配。

模型训练使用来自CourtoisNeuroMod的Friends子集（6名受试者，约565K TRs），损失函数为区级z分数MSE与Pearson相关损失的加权和，并辅以锚定损失。所有fMRI数据被投射至fsaverage6标准表面，并由HCP-MMP1图谱划分为30个ROI（约41K顶点）。



![(a) RABBiT transfers after training.(b) Cross-attention module in brain transformer.(c) Training: predict fMRI per ROI, compare to measured.Figure 1: Overview of RABBiT. (a) A single encoder that supports two transfer regimes for new subjects. Zero-shot: predicting group-level responses; tested on 324 unseen participants across 16 held-out studies with naturalistic listening; RABBiT’s predictions on auditory ROIs already saturate near the inter-subject consistency. Few-shot: adapting to a new subject with small data; RABBiT rapidly and effectively adapts to unseen subjects with only ∼\sim10 minutes of paired audio, improving idiosyncratic language ROIs with 3 orders of magnitude fewer parameters than voxel-wise models. (b) The cross-attention readout: learnable ROI query tokens attend to audio output tokens of the speech backbone, yielding a per-ROI latent ziz_{i} that feeds to prediction heads. (c) Training pipeline. Audio is encoded by a speech model into a temporal token sequence; the cross-attention transformer routes those tokens to ROI latents; the per-ROI latent passes through our SID decomposition (learnable shared + per-subject idiosyncratic components) to form the predicted fMRI response; the loss is applied between predicted and measured fMRI. The whole pipeline has ≈\approx12.9M trainable parameters.](https://arxiv.org/html/2607.05171v1/x1.png)

### 💡 核心创新点

- 共享–特异性分解 (SID)：首次在语言fMRI编码模型中引入受试者共享与个体偏差的低秩分解。其巧妙之处在于，该设计直接将零样本预测（使用平均偏差）和少样本适配（仅更新偏差系数）无缝统一在一个框架内，实现了两个数量级的参数压缩，同时保证了两种场景下的高性能。
- Temporal Brain Transformer (TBT)：用可学习的ROI级交叉注意力替代了固定的时间池化和体素独立回归。这不仅提升了预测精度，更重要的是，其学到的ROI查询嵌入为模型提供了内在可解释性，使其能够无监督地恢复出从初级听觉皮层到高阶语言区域的皮层层级。
- 统一的零样本与少样本脑编码框架：将脑调优、区域时间路由和低秩个体建模三个组件有机集成，首次在语音诱发fMRI上构建了一个同时支持高精度群体预测和高效个性化适配的紧凑模型，性能超越大型多模态基础模型TRIBEv2。
- 参数高效的脑调优：通过LoRA技术，仅需训练极少量的参数，即可将自监督语音模型适配到脑活动预测的下游任务，保持骨干网络跨受试者共享，是一种更优雅、可扩展的脑调优方案。

### 📊 实验结果

零样本评估在Narratives（7个故事，275受试者）与Le Petit Prince（49受试者）上进行，指标为组平均相关系数 `\(r_{group}\)`。主要结果如下：

![(a) Zero-shot comparison across cohorts(b) Zero-shot difference with TRIBEv2(c) Per-ROI comparisonFigure 2: Zero-shot prediction in unseen participants. (2(a)) Group-level prediction over language ROIs for two cohorts. RABBiT exceeds both the inter-subject consistency estimates and the performance of the much larger baselines TRIBEv2 and linear encoders. (b) Voxel-wise correlation gain of RABBiT over upsampled TRIBEv2 (matched cortical resolution; Sec.2). (c) ROI group-level correlation averaged over held-out stories and segments. RABBiT yields the largest gains in auditory and temporal regions, with comparable performance to TRIBEv2 in higher-order language regions.](https://arxiv.org/html/2607.05171v1/x4.png)

| 模型/基线 | Narratives \(r_{group}\) | Le Petit Prince \(r_{group}\) | 备注 |
|-----------|------------------------|-----------------------------|------|
| RABBiT (full) | ~0.18 | ~0.15 | 饱和于ISC |
| TRIBEv2 | ~0.13 | ~0.11 | 大型多模态模型，视觉输入置零 |
| Linear baseline | ~0.10 | ~0.08 | 冻结Wav2Vec2.0+均值池化+线性读出 |
| Per-Subject Full-Rank | ~0.18 | ~0.15 | 约5倍参数，无SID |

[图像补充] 图2直观展示了零样本预测结果：(a)显示RABBiT在听觉和语言相关皮层区域的预测相关性普遍高于其他模型，尤其在听觉皮层优势明显；(b)显示了RABBiT相对于TRIBEv2在各体素上的相关性增益，最大增益集中在初级和次级听觉皮层；(c)的ROI比较图量化了各脑区性能，证实RABBiT在听觉和颞上回/沟（STG/STS）等区域有显著优势，在高阶语言区（如IFG）则与TRIBEv2表现相当。

消融实验（零样本）显示：移除脑调优性能下降约60%（p<0.001），移除TBT下降显著（p<0.05），而用Per-Subject Head替代SID或换用WavLM-large骨干无显著提升。



![(a) Language Network: strong left fronto-temporal lateralization(b) Learned hierarchy from query embeddings(c) Ablations of model componentsFigure 3: Model analysis and ablations. (3(a)) Language network localizes reproduce the canonical left-lateralized language areas. (3(b)) Interpretation of ROI-query embeddings learned by TBT, revealing a learned coarse speech-to-language progression. (3(c)) Ablation of model components shows the importance of TBT and brain-tuning for RABBiT’s strong zero-shot performance.](https://arxiv.org/html/2607.05171v1/x7.png)



少样本校准（21styear故事，19受试者）对比不同校准时长下的语言区平均r:

![(a) Few-shot Calibration(b) ROI %\% change after 10 min of calibration(c) few-shot difference with zero-shot for 10 mins of calibrationFigure 4: Few-shot calibration for new participants. (4(a)) RABBiT few-shot performance improves over zero-shot with only 5 minutes of calibration data and outperforms both ridge baselines. SID is key to this ability. (4(b)) Per-ROI percent change in performance relative to zero-shot with 10 minutes of calibration (other calibration sizes reported in App.E.5). RABBiT’s largest gains occur in higher-order ROIs that were most idiosyncratic in the shared–idiosyncratic diagnostic (Sec.3.1.1). (4(c)) Difference between few-shot and zero-shot predictions after 10mins of calibration; results for more calibration sizes and other baselines can be found in App.E.5.](https://arxiv.org/html/2607.05171v1/x10.png)

| 校准时长 | RABBiT few-shot | Brain-tuned ridge | Pretrained ridge | No-SID RABBiT |
|----------|-----------------|-------------------|------------------|---------------|
| 5 min | ~0.139 | ~0.104 | ~0.095 | ~0.118 |
| 10 min | ~0.148 | ~0.112 | ~0.104 | ~0.127 |
| 20 min | ~0.156 | ~0.129 | ~0.122 | ~0.142 |
| 40 min | ~0.162 | ~0.147 | ~0.140 | ~0.157 |

[图像补充] 图4(a)展示了少样本校准曲线，清晰表明RABBiT在仅5分钟校准后即超越零样本基准，并持续优于所有岭回归基线，性能随校准数据增加而稳定提升。(b)图显示了10分钟校准后各ROI的性能变化百分比，证实了在高阶语言区（如IFG, TPJ,角回）存在30-90%的显著增益，这些区域正是个体差异最大的区域。(c)的脑图揭示校准带来的改进在空间上集中于额下回、颞顶联合区等个体特异性强的高级联合皮层。

### 🔬 细节详述

- 训练数据：CourtoisNeuroMod的Friends子集，6名受试者观看自然视听剧集，TR=1.49s，总计约565K TR（~234小时）。所有数据投影至fsaverage6表面，并在30个双侧HCP-MMP1 ROI内（~41K顶点）。验证/测试以固定的4个片段划分。
- 损失函数：\(\mathcal{L} = \sum_{i} (s_i \mathcal{L}_i^{L2} + \lambda_{corr} \mathcal{L}_i^{corr}) + \mathcal{L}_{anchor}\)。其中\(\mathcal{L}_i^{L2}\)为顶点\(z\)分数MSE，\(\mathcal{L}_i^{corr} = 1 - \text{顶点平均Pearson r}\)，\(s_i\)为可学习的每区L2权重，\(\lambda_{corr}=1\)。锚定损失\(\mathcal{L}_{anchor}\)约束\(\Phi\)和\(\Delta\)基与初始化的Frobenius范数，\(\lambda_\Phi=\lambda_\Delta=10^{-3}\)。
- 训练策略：优化器AdamW，学习率\(10^{-4}\)，线性预热10%步数后线性衰减。batch size 256，训练30 epoch，早停耐心5。前3 epoch冻结语音骨干，仅训练TBT和SID，之后解冻LoRA。锚定损失的系数经网格搜索选定。
- 关键超参数：LoRA秩8（消融选定）；TBT层数2，隐维度256，头数8，FFN维度1024；SID共享秩M=100，偏差秩R=15（基于PCA覆盖99.3%方差与正则化预算）。
- 训练硬件：单张NVIDIA H200 GPU，训练约10小时（早停平均10–13 epoch）。
- 推理细节：零样本使用平均偏差基加3 TR血流动力学延迟；TRIBEv2内置5s延迟；校准音频起始通过A1响应扫描验证；少样本仅更新\(\rho_i\)系数，损失为相关性+锚定（\(\lambda_\rho=5\times10^{-5}\)），使用AdamW训练数百步。

[图像补充] 为验证关键超参数，作者在附录中提供了多组消融实验曲线。图6显示了LoRA秩的消融，性能在秩8时达到峰值，在附近秩（4，16）下仍保持稳定，证明默认选择的鲁棒性。图7和图8分别展示了TBT解码器深度和隐藏维度的消融，表明深度2和维度256为最优配置，更深或更大的模型并未带来提升，为模型设计提供了经验证据。



![Figure 6: LoRA rank ablation on Le Petit Prince zero-shot. Group-level rgroupr_{\mathrm{group}} on language ROIs as a function of LoRA rank. Performance peaks at rank 88 (our default) and is robust across nearby ranks; very small ranks under-parameterize the backbone adaptation and very large ranks begin to overfit the limited fMRI training signal.](https://arxiv.org/html/2607.05171v1/x14.png)



![Figure 7: Brain-transformer depth ablation on Le Petit Prince zero-shot. Group-level rgroupr_{\mathrm{group}} on language ROIs as a function of decoder depth LL. Performance peaks at L=2L=2 (our default); deeper variants do not improve held-out language-ROI prediction.](https://arxiv.org/html/2607.05171v1/x15.png)



![Figure 8: Brain-transformer hidden dim ablation on Le Petit Prince zero-shot. Group-level rgroupr_{\mathrm{group}} on language ROIs as a function of decoder hidden dimension HH. Performance peaks at 256256 (our default); deeper variants do not improve held-out language-ROI prediction.](https://arxiv.org/html/2607.05171v1/x16.png)

### ⚖️ 评分理由

- 创新性 (1.5/2)：将脑调优、自适应时间路由（TBT）和低秩共享-特异性分解（SID）组合成一个统一框架，为语音脑编码提供了一种新颖且高效的设计范式，实现了零样本和少样本的双重迁移。SID构思基于对个体差异结构的实证观察，设计目的明确。TBT替代了传统固定池化，赋予了模型内在可解释性。尽管各组件并非全新技术，但组合方式及其产生的系统性洞察具有明确的新颖性。
- 技术严谨性 (1.4/1.5)：方法推导和公式表述清晰规范。SID的锚定初始化、多目标损失设计、分阶段解冻训练等实现细节周全，体现了工程上的深思熟虑。消融实验设计完整，环环相扣，从脑调优、TBT到SID逐一验证。跨数据集、跨扫描仪的泛化测试、严谨的音频对齐以及假设检验（如配对t检验）的使用增强了结论的可信度。跨数据集混合训练实验的失败虽然如实记录，但缺乏深入的诊断性分析，是严谨性上的一处减分项。
- 实验充分性 (1.3/1.5)：零样本评估在两个独立队列、324名未见受试者上进行，目标明确，并与强基线TRIBEv2、线性模型和全秩变体作了充分对比，覆盖较全面。少样本校准部分，作者与两类岭回归基线在不同校准时长下进行了详细对比，并提供了饱和曲线、脑区增益图和显著性统计。此外，语言网络定位、查询嵌入层次恢复等多角度分析，丰富了读者对模型能力的理解。主要不足在于泛化性的探索有限，未在非英语、多模态或对话等场景下进行验证。
- 清晰度 (0.9/1)：文章结构清晰，图表直观，特别是SID和TBT的图示让人一目了然。附录提供了极为详尽的参数、实验设置和额外结果，有助于复现。少数符号（如 \(s_i\)）在初次出现时的解释可以更突出，但不影响整体理解。
- 影响力 (0.8/1.5)：在神经语言计算建模领域，RABBiT提供了一种可扩展的群体分析和个体化建模工具，其作为in-silico模型进行功能定位的潜力对认知神经科学方法论有积极意义。然而，其当前价值高度集中在脑编码这一交叉方向，对更广泛的语音/音频处理领域研究者的直接技术启发有限。
- 开源 (1.0/1.5)：论文提供了GitHub代码仓库链接，但未明确提及是否发布预训练模型权重，也未提供数据集重新分发的许可或处理脚本。仅有代码而无权重和详细文档，使得“开箱即用”的复用性和结果验证难度增加。
- 可复现性 (0.5/0.5)：附录详尽给出了训练、推理的全部超参数、数据处理流程、评估设置以及硬件环境。LoRA, TBT, SID等关键组件均有消融实验证明其选择的合理性，有利于复现主体实验。关于跨数据混合训练这一失败的实验，细节描述相对简略。
- 工程/实践价值 (0.7/1.5)：模型设计紧凑（12.9M参数），推理流程明确，具备嵌入现有神经数据预处理工具链的潜力。但其当前应用范围局限于特定脑区、特定语言（英语）和特定任务（自然聆听），距离开箱即用、能处理各种真实世界数据的工业化工具尚有距离。

### 🚨 局限与问题

论文明确承认的局限：
- 仅在英语自然聆听场景下评估，未覆盖多语言、对话、阅读或多模态情境。
- 训练队列较小（6人），初步尝试混合更多数据集未带来性能提升，提示跨数据集规模化训练可能需要更小心的异质性处理。
- 仅对更大语音骨干（WavLM-large）做了初步替换实验，系统性的模型缩放研究尚未开展。

审稿人发现的潜在问题：
- 跨数据集训练的失败是模型作为“基础模型”的最大隐患。论文将此归因于“需要更谨慎处理”，但没有提供任何诊断性实验（例如，是数据分布、采集参数还是故事类型导致了冲突？），这严重削弱了该方法的扩展性声明。如果混合两个性质接近的故事数据都无法提升性能，那么扩展到更大、更多样数据的可行性存疑。
- 偏差秩R=15作为固定的正则化预算缺乏弹性。当面对更多样化的人群（如临床群体、跨语言者）或更大的数据集时，这个固定的低秩约束可能不足以捕捉增加的个体差异，或者变得过于冗余。论文未探讨自适应调整该预算的策略。
- 零样本预测只能给出群体平均响应。对于需要直接获得新个体预测（而非群体平均）的应用场景（如个体级生物标志物分析），该方法在没有校准数据的情况下无法使用，限制了其实用性。
- 与TRIBEv2的对比存在不对等之处。TRIBEv2是多模态模型，在纯音频评估中其视觉输入被置零。虽然论文声称这是TRIBEv2在训练中见过的模式，但一个为多模态优化的模型在单模态下并非其最佳工作状态，因此“超越TRIBEv2”的声明需要在这种特定条件下理解。

---

[← 返回 2026-07-07 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-07/)
