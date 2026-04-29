---
title: "ICASSP 2026 - 语音质量评估 论文列表"
date: 2026-04-29
draft: false
tags: ["语音质量评估"]
categories: [icassp-2026]
description: "共 8 篇 ICASSP 2026 语音质量评估 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音质量评估

共 **8** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Bridging the Semantic Gap: Cross-Attentive Fusion for Joint ](/audio-paper-digest-blog/posts/2026-04-29-bridging-the-semantic-gap-cross-attentive-fusion) | 8.5分 | 前25% |
| 🥈 | [Unseen but Not Unknown: Using Dataset Concealment to Robustl](/audio-paper-digest-blog/posts/2026-04-29-unseen-but-not-unknown-using-dataset-concealment) | 8.3分 | 前25% |
| 🥉 | [Time vs. Layer: Locating Predictive Cues for Dysarthric Spee](/audio-paper-digest-blog/posts/2026-04-29-time-vs-layer-locating-predictive-cues-for) | 7.5分 | 前50% |
| 4. | [Multi-Task Learning For Speech Quality Assessment Using ASR-](/audio-paper-digest-blog/posts/2026-04-29-multi-task-learning-for-speech-quality-assessment) | 7.5分 | 前25% |
| 5. | [Quality Assessment of Noisy and Enhanced Speech with Limited](/audio-paper-digest-blog/posts/2026-04-29-quality-assessment-of-noisy-and-enhanced-speech) | 7.0分 | 前25% |
| 6. | [SA-SSL-MOS: Self-Supervised Learning MOS Prediction with Spe](/audio-paper-digest-blog/posts/2026-04-29-sa-ssl-mos-self-supervised-learning-mos) | 7.0分 | 前50% |
| 7. | [Speech Quality-Based Localization of Low-Quality Speech and ](/audio-paper-digest-blog/posts/2026-04-29-speech-quality-based-localization-of-low-quality) | 7.0分 | 前25% |
| 8. | [A Generalization Strategy for Speech Quality Prediction: Fro](/audio-paper-digest-blog/posts/2026-04-29-a-generalization-strategy-for-speech-quality) | 6.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Bridging the Semantic Gap: Cross-Attentive Fusion for Joint Acoustic-Semantic Speech Quality Assessment](/audio-paper-digest-blog/posts/2026-04-29-bridging-the-semantic-gap-cross-attentive-fusion)

🔥 **8.5/10** | 前25% | #语音质量评估 | #对比学习 | #预训练 #交叉注意力

👥 **作者与机构**

- 第一作者：Zhaoyang Wang（中国科学院声学研究所）
- 通讯作者：论文中未明确标注。
- 作者列表：Zhaoyang Wang（中国科学院声学研究所；中国科学院大学）， Chengzhong Wang（中国科学院声学研究所；中国科学院大学）， Jiale Zhao（中国科学院声学研究所；中国科学院大学）， Dingding Yao（中国科学院声学研究所；中国科学院大学）， Jing Wang（北京理工大学）， Junfeng Li（中国科学院声学研究所；中国科学院大学）。

💡 **毒舌点评**

亮点：论文概念清晰，直指“语义鸿沟”这一现有SQA模型的痛点，并通过设计合理的双分支架构和两阶段训练策略进行解决，实验对比充分，结论有说服力。
短板：其核心创新——利用预训练的Whisper和DAC模型通过双向交叉注意力融合——在方法层面更像是一个工程化设计，缺乏理论上的新颖性或对融合机制本身的深入探究。同时，对比方法虽然包括了主流基线，但未能涵盖所有最新的顶尖模型。

📌 **核心摘要**

1. 问题：现有非侵入式语音质量评估（SQA）模型过度依赖语义预训练模型（如Wav2Vec， Whisper），这些模型在训练时追求对声学变异（如噪声、通道效应）的不变性，却忽略了人类感知质量所依赖的精细声学线索，导致“语义鸿沟”，影响模型在多样化场景下的泛化能力。
2. 方法核心：提出JASSQA模型，采用双分支架构。声学分支利用Descript Audio Codec (DAC) 提取离散声学token并通过双路径（直接映射+编码器）生成特征；语义分支利用Whisper提取语言特征。核心融合机制为双向跨注意力，允许两个分支的特征相互查询与增强，随后拼接并通过MLP预测MOS分数。
3. 创新点：与已有简单拼接特征的方法（如MOSA-Net+）相比，JASSQA通过双向跨注意力实现了声学与语义表征的深度交互式融合；提出两阶段训练策略，第一阶段使用对比回归损失预训练声学编码器以构建感知有序的表征空间，第二阶段冻结部分组件进行端到端微调。
4. 主要结果：在NISQA和VoiceMOS Challenge 2023（Track 3）数据集上，JASSQA在SRCC、LCC和MSE三项指标上均优于MOS-SSL， UTMOS， MOSA-Net及MOSA-Net+等基线。例如，在NISQA上，JASSQAlarge的SRCC达到0.904， LCC达到0.907。在跨域泛化测试（腾讯会议数据、BVCC语音转换数据）中，JASSQA同样表现出显著的性能优势。
5. 实际意义：该工作为构建更鲁棒、泛化能力更强的自动化语音质量评估系统提供了一种有效框架，可应用于语音合成、语音增强、在线会议等系统的质量监控与优化。
6. 主要局限性：模型架构是现有组件（Whisper， DAC， 交叉注意力）的组合，缺乏机制层面的根本创新。消融实验显示，仅使用声学分支性能下降明显，表明模型对强大的语义预训练特征仍有较强依赖。

---

### 🥈 [Unseen but Not Unknown: Using Dataset Concealment to Robustly Evaluate Speech Quality Estimation Models](/audio-paper-digest-blog/posts/2026-04-29-unseen-but-not-unknown-using-dataset-concealment)

🔥 **8.3/10** | 前25% | #语音质量评估 | #模型评估 | #鲁棒性

👥 **作者与机构**

- 第一作者：Jaden Pieper (Institute for Telecommunication Sciences, Boulder, Colorado, USA)
- 通讯作者：Stephen D. Voran (Institute for Telecommunication Sciences, Boulder, Colorado, USA)
- 作者列表：Jaden Pieper (Institute for Telecommunication Sciences, Boulder, Colorado, USA), Stephen D. Voran (Institute for Telecommunication Sciences, Boulder, Colorado, USA)

💡 **毒舌点评**

本文最亮眼之处在于其“元研究”价值：它不急于提出一个“更好”的语音质量模型，而是先用一套严谨得多的方法（DSC）剖析现有模型的真实能力，结论（如“小Aligner对大模型有显著提升”）对同行极具参考意义。然而，其创新本质上是“评估方法学”的创新，若期待看到新的网络结构或损失函数，可能会失望；且其“泛化能力”的结论依赖于特定的九个训练数据集，对更广泛场景的适用性有待进一步验证。

📌 **核心摘要**

1.  问题：基于机器学习的语音质量估计模型在实际应用（未见数据）中性能往往下降，而现有评估方法（如随机划分数据集、留出一个完整数据集）难以提供关于模型泛化能力下降原因的深入、可解释的洞察。
2.  方法核心：提出了“数据集隐藏（DSC）”评估流程。对于N个数据集，分别训练“单独模型”（每个数据集独立训练）、“全局模型”（所有数据集联合训练）和“隐藏模型”（每次训练时隐藏一个数据集），通过比较三种模型在测试集上的性能，分解出“通用性差距”（联合训练相比单独训练的性能损失）和“隐藏差距”（未见数据集上的泛化损失）。同时，采用AlignNet架构中的轻量级“数据集对齐器（Aligner）”来缓解多数据集联合训练时因主观评分不一致导致的“语料库效应”。
3.  创新点：1）提出了DSC系统化评估框架，能量化并可视化模型在不同训练模式下的性能差异，提供了对模型通用性和泛化能力的细粒度解释；2）明确将“语料库效应”作为多数据集训练的关键问题，并证明添加一个极小（1000参数）的Aligner模块能显著提升包括大规模预训练模型（Wav2Vec2.0）在内的模型在未见数据上的性能。
4.  主要实验：使用9个训练数据集和3个代表性模型（MOSNet， NISQA， Wav2Vec2.0）进行DSC实验。结果显示：NISQA的通用性差距最小；Wav2Vec2.0的隐藏差距最小，表明其泛化能力最强。添加Aligner后，NISQA在5/9个数据集、Wav2Vec2.0在7/9个数据集上的全局模型性能得到统计显著提升。在另外9个完全未见的数据集上的推理实验进一步验证了DSC的结论和Aligner的益处。
5.  实际意义：为评估和诊断语音质量模型提供了一个更强大、更可解释的框架，有助于研究人员理解模型局限、指导模型架构设计。证明了通过简单缓解标签噪声（语料库效应）能有效提升模型鲁棒性，对构建实用的语音质量监测系统有直接帮助。
6.  主要局限性：DSC流程需要多次训练模型（O(N)），计算开销较大。结论的普适性取决于所选的9个训练数据集的代表性和多样性。Aligner的效果可能对数据集对齐关系的复杂度敏感，论文未深入探讨其失效模式。

---

### 🥉 [Time vs. Layer: Locating Predictive Cues for Dysarthric Speech Descriptors in Wav2vec 2.0](/audio-paper-digest-blog/posts/2026-04-29-time-vs-layer-locating-predictive-cues-for)

✅ **7.5/10** | 前50% | #语音质量评估 | #注意力机制 | #预训练模型 #病理语音

👥 **作者与机构**

- 第一作者：Natalie Engert（Technische Hochschule Nürnberg Georg Simon Ohm, Germany）
- 通讯作者：未说明
- 作者列表：Natalie Engert（Technische Hochschule Nürnberg Georg Simon Ohm, Germany）、Dominik Wagner（Technische Hochschule Nürnberg Georg Simon Ohm, Germany）、Korbinian Riedhammer（Technische Hochschule Nürnberg Georg Simon Ohm, Germany）、Tobias Bocklet（Technische Hochschule Nürnberg Georg Simon Ohm, Germany）

#

💡 **毒舌点评**

亮点：研究设计非常系统，对“时间 vs. 层”这个核心问题的分析很到位，不仅给出了整体结论，还通过注意力权重可视化揭示了不同严重程度下层重要性的变化，这种临床视角下的可解释性分析是加分项。
短板：作为一篇发表在顶会的论文，方法上的创新显得有些“温和”，更像是对现有工具（Wav2vec 2.0 + ASP）的一次精心设计的应用研究，缺乏一个更强大的、统一的模型架构来同时建模时间与层信息（尽管结论中提到了这是未来工作）。

#

📌 **核心摘要**

1. 要解决什么问题：预训练的Wav2vec 2.0模型在病理语音分析中表现出色，但其内部不同层和时间步的表示对预测具体临床描述符（如可懂度、声音刺耳等）的贡献尚不清楚。本文旨在系统研究是聚合不同层的信息（层聚合）还是聚合同一层内的时间信息（时间聚合）对回归不同的构音障碍语音描述符更有效。
2. 方法核心是什么：采用一个冻结权重的Wav2vec 2.0大模型作为特征提取器。然后分别使用两种注意力统计池化（ASP）策略：1) 层聚合ASP：先对每层的时间维度取均值，然后用ASP在24个层表示上计算加权统计量；2) 时间聚合ASP：先对所有层取均值得到时间序列表示，然后用ASP在时间维度上计算加权统计量。最后将ASP输出的拼接向量送入一个全连接回归头进行预测。
3. 与已有方法相比新在哪里：与通常直接选择或平均某几层表示的工作不同，本文首次系统性地对比了两种维度（层 vs. 时间）的注意力加权聚合策略，并明确将这种对比与五个不同的、临床定义的语音质量描述符相关联，揭示了不同语音病理特征对模型内部信息位置的不同偏好。
4. 主要实验结果如何：在Speech Accessibility Project数据集上，对于可懂度，层聚合ASP显著优于时间聚合ASP（MSE 0.723 vs 0.733）。对于辅音不精确、声音刺耳和单调性，时间聚合ASP表现更优（如声音刺耳MSE 0.852 vs 0.949）。对于不适当停顿，两者表现无显著差异。具体实验结果见表2。

| 实验编号 | 聚合类型 | 注意力头数 | 可懂度 (PCC/MSE) | 辅音不精确 (PCC/MSE) | 不适当停顿 (PCC/MSE) | 声音刺耳 (PCC/MSE) | 单调性 (PCC/MSE) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 (基线) | 层均值/时间均值 | - | 0.684 / 0.760 | 0.788 / 0.440 | 0.688 / 0.228 | 0.636 / 0.929 | 0.551 / 0.866 |
| 4 (最优层) | ASP-层/时间均值 | 5 | 0.696 / 0.725 | 0.793 / 0.428 | 0.707 / 0.220 | 0.624 / 0.959 | 0.554 / 0.856 |
| 8 (最优时间) | 层均值/ASP-时间 | 5 | 0.656 / 0.733 | 0.795 / 0.417 | 0.717 / 0.218 | 0.654 / 0.893 | 0.583 / 0.820 |
| 10 (最优时间) | 层均值/ASP-时间 | 128 | 0.653 / 0.744 | 0.792 / 0.422 | 0.710 / 0.218 | 0.673 / 0.852 | 0.580 / 0.828 |

5. 实际意义是什么：研究结果为使用自监督语音模型进行自动语音质量评估提供了更精细的实践指导：对于衡量整体理解程度的“可懂度”，应优先考虑融合多层信息；对于评估特定局部语音特征（如发音清晰度、声音质感、响度变化），应更注重建模时间动态。这有助于针对不同临床评估任务设计更高效的特征提取管道。
6. 主要局限性是什么：研究仅针对Wav2vec 2.0一种模型架构，结论的泛化性有待验证。实验中仅比较了层聚合和时间聚合两种“并列”策略，未能探索将二者结合（如先层聚合再时间聚合，或反之）的混合策略的潜力，尽管作者在结论中指出了这是未来的方向。

#

---

### 4. [Multi-Task Learning For Speech Quality Assessment Using ASR-Derived Entropy Features](/audio-paper-digest-blog/posts/2026-04-29-multi-task-learning-for-speech-quality-assessment)

✅ **7.5/10** | 前25% | #语音质量评估 | #多任务学习 | #预训练 #语音增强

👥 **作者与机构**

- 第一作者：Tri Dung Do（Viettel AI， Viettel Group； University of Engineering and Technology – Vietnam National University， Hanoi）
- 通讯作者：Van Hai Do（Thuyloi University）
- 作者列表：Tri Dung Do（Viettel AI， Viettel Group； University of Engineering and Technology – Vietnam National University， Hanoi）， Bao Thang Ta（Viettel AI， Viettel Group； Hanoi University of Science and Technology）， Van Hai Do（Viettel AI， Viettel Group； Thuyloi University）

💡 **毒舌点评**

亮点在于将ASR模型输出的不确定性（熵）作为一个新颖且可量化信号，与语音质量评估任务进行关联，并通过多任务学习框架显式地利用这一信号，思路巧妙。短板是，尽管在NISQA数据集上取得了改进，但论文未与更多当前先进的无参考评估方法（如基于自监督模型或特定Transformer架构的方法）进行直接、充分的对比，说服力稍显不足；另外，对熵特征的物理意义及其与具体失真类型关系的分析深度有限。

📌 **核心摘要**

1.  问题：本文旨在解决无参考语音质量评估（Non-reference SQA）问题，即无需干净参考语音即可预测语音的感知质量（如MOS分数）。
2.  方法核心：提出了一种新颖的多任务学习框架。该框架利用一个预训练ASR模型（Wav2Vec2）作为特征提取器，其输出帧级熵被观察到与语音质量负相关（噪声语音在89.25%的帧上熵值更高）。模型同时执行两个任务：预测整体MOS分数和预测帧级熵序列。通过动态调整任务权重，训练初期侧重于学习熵特征，后期侧重于MOS预测。
3.  创新点：与现有方法主要依赖复杂模型架构（如Transformer、Conformer）或直接使用熵作为静态特征不同，本文创新性地将“学习预测熵”作为辅助任务，以引导共享编码器学习对不确定性敏感的表征，从而提升主任务（MOS预测）的性能。训练后可移除熵预测分支，保持推理效率。
4.  实验结果：在NISQA数据集上的实验表明，所提出的多任务方法在平均性能上优于单任务基线和将熵作为简单输入特征的方法。具体而言，多任务方法的平均PCC（皮尔逊相关系数）为0.784，RMSE（均方根误差）为0.655，相比单任务基线（PCC 0.761， RMSE 0.690）有显著提升（见表1）。

    | 模型/方法 | TEST FOR | TEST LIVETALK | TEST P501 | VAL LIVE | VAL SIM | 平均 |
    | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
    | Single-task (baseline) | RMSE: 0.623, PCC: 0.741 | RMSE: 0.868, PCC: 0.702 | RMSE: 0.747, PCC: 0.804 | RMSE: 0.436, PCC: 0.833 | RMSE: 0.774, PCC: 0.725 | RMSE: 0.690, PCC: 0.761 |
    | Single-task + Entropy feat. | RMSE: 0.613, PCC: 0.752 | RMSE: 0.855, PCC: 0.703 | RMSE: 0.799, PCC: 0.793 | RMSE: 0.455, PCC: 0.831 | RMSE: 0.783, PCC: 0.710 | RMSE: 0.701, PCC: 0.758 |
    | Multi-task (our method) | RMSE: 0.631, PCC: 0.739 | RMSE: 0.791, PCC: 0.748 | RMSE: 0.732, PCC: 0.839 | RMSE: 0.422, PCC: 0.807 | RMSE: 0.697, PCC: 0.786 | RMSE: 0.655, PCC: 0.784 |

5.  实际意义：为无参考语音质量评估提供了新的视角和有效方法，证明了利用ASR模型内在不确定性信息的价值。该方法在推理时高效，有望应用于实时语音通信监控、语音合成系统评估等场景。
6.  局限性：主要验证仅在一个数据集（NISQA）上进行；使用的预训练ASR模型单一（Wav2Vec2-Base），未探索其他模型的影响；未深入分析熵特征与具体语音失真类型（如噪声、回声、断续）之间的细粒度关系。

---

### 5. [Quality Assessment of Noisy and Enhanced Speech with Limited Data: UWB-NTIS System for Voicemos 2024](/audio-paper-digest-blog/posts/2026-04-29-quality-assessment-of-noisy-and-enhanced-speech)

✅ **7.0/10** | 前25% | #语音质量评估 | #迁移学习 | #语音增强 #预训练

👥 **作者与机构**

- 第一作者：Marie Kunešová（NTIS Research Centre, Faculty of Applied Sciences, University of West Bohemia in Pilsen, Czechia）
- 通讯作者：未说明
- 作者列表：Marie Kunešová（NTIS研究中心，应用科学学院，西波希米亚大学），Aleš Přázák（同上），Jan Lehečka（同上）

💡 **毒舌点评**

亮点在于其针对极端有限数据（100条标注）场景设计的“两阶段迁移学习+合成数据生成”策略，特别是将BAC预测巧妙地转化为SNR预测，取得了竞赛最佳结果。短板是整体框架属于成熟技术（wav2vec 2.0微调）的工程组合，且对于更困难的SIG预测任务，核心改进依赖于人工定义的“自然/伪造”二元伪标签，其理论依据和泛化能力存疑。

📌 **核心摘要**

1.  要解决什么问题？ 在仅提供100条主观标注语音的极端数据限制下，实现非侵入式的语音质量评估，具体目标是预测ITU-T P.835标准中的三个指标：SIG（语音质量与失真）、BAK（背景噪声侵入性）和OVRL（整体质量）。
2.  方法核心是什么？ 采用两阶段迁移学习策略，基于wav2vec 2.0预训练模型。第一阶段：在自动生成的大规模伪标签数据上微调模型，其中BAK模型学习预测SNR，SIG模型学习区分“自然语音”和“伪造/增强语音”。第二阶段：使用挑战赛提供的100条真实标注数据进行微调。
3.  与已有方法相比新在哪里？ 新在针对P.835这一特定评估任务的系统设计，尤其是为小数据场景设计的两阶段数据生成与微调流程。创新性地将BAK预测近似为SNR回归，并将SIG预测与语音伪造检测任务联系起来。赛后进一步提出通过使用人工退化数据进行wav2vec 2.0的预训练，显著提升了SIG预测性能。
4.  主要实验结果如何？ 在VoiceMOS 2024挑战赛Track 3官方评估中，该系统在BAK预测上取得最佳性能（LCC=0.867），在OVRL预测上位列第二（LCC=0.711）。赛后通过引入人工退化数据改进的模型，将SIG预测的相关性（LCC）从原始提交的0.207大幅提升至0.516。关键结果如下表所示：

| 模型组合 | VMC 2024 评估集 (LCC) | | | CHiME 7-UDASE (不含VMC数据) (LCC) | | |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| | BAK | SIG | OVRL (A) | BAK | SIG | OVRL (A) |
| 原始提交 (T04) | 0.867 | 0.207 | 0.711 | 0.819 | 0.684 | 0.595 |
| ClTRUS (BAK) + w2v2-base (SIG) | 0.877 | 0.516 | 0.728 | 0.839 | 0.726 | 0.714 |
| w2v2-dgrd (BAK) + ClTRUS (SIG) | 0.868 | 0.296 | 0.695 | 0.860 | 0.766 | 0.746 |
| w2v2-dgrd (BAK) + w2v2-base (SIG) | 0.868 | 0.516 | 0.750 | 0.860 | 0.726 | 0.734 |
| 团队 T06 (冠军/亚军) | 0.827 | 0.297 | 0.713 | - | - | - |

![Official results of VMC 2024 Track 3.](https://ieeexplore.ieee.org/mediastore_new/IEEE/content/media/11463227/11510766/11511222/11463227.fig.2.source_large)
图2：VMC 2024 Track 3各团队官方结果（语句级LCC）。本系统为T04团队。

5.  实际意义是什么？ 证明了在训练数据极度稀缺的条件下，通过精心设计的数据生成、任务转化和多阶段迁移学习，可以构建出有效的自动语音质量评估系统，为资源受限的语音处理系统评估提供了一种可行方案。
6.  主要局限性是什么？ 模型性能，尤其是SIG预测，对第一阶段的伪标签策略和生成数据质量高度敏感。整个系统的有效性高度依赖于人工设计的辅助任务（如SNR预测、伪造检测）与目标质量指标的相关性。论文未提供代码或预训练模型，限制了其直接应用和复现。

---

### 6. [SA-SSL-MOS: Self-Supervised Learning MOS Prediction with Spectral Augmentation for Generalized Multi-Rate Speech Assessment](/audio-paper-digest-blog/posts/2026-04-29-sa-ssl-mos-self-supervised-learning-mos)

✅ **7.0/10** | 前50% | #语音质量评估 | #自监督学习 | #数据增强 #多语言

👥 **作者与机构**

- 第一作者：Fengyuan Cao（KTH Royal Institute of Technology, Stockholm, Sweden）
- 通讯作者：未说明
- 作者列表：Fengyuan Cao（KTH皇家理工学院），Xinyu Liang（KTH皇家理工学院），Fredrik Cumlin（KTH皇家理工学院），Victor Ungureanu（Google LLC），Chandan K. A. Reddy（Google LLC），Christian Sch¨uldt（Google LLC），Saikat Chatterjee（KTH皇家理工学院）

#

💡 **毒舌点评**

亮点：论文巧妙地设计了一个并行架构，将受限于16kHz的SSL特征与可处理48kHz的谱图特征相结合，直面并试图解决多速率语音评估中的高频信息丢失问题，两阶段训练策略在有限数据下提升了泛化能力。短板：所提方法在部分外部数据集（如腾讯中文数据集）上的性能反而低于仅使用SSL的基线模型，这表明其“谱图增强”分支可能引入了与语言或域不匹配的偏差，削弱了论文核心论点的一致性，且未与更前沿的多速率评估方法进行对比。

#

📌 **核心摘要**

1. 问题：现有基于自监督学习（SSL）的语音质量评估（SQA）模型主要在16kHz语音上预训练，无法利用高采样率（24-48kHz）语音中的高频信息，导致对多速率语音的评估性能不佳。同时，公开的多速率MOS标注数据集规模较小，模型易过拟合且泛化能力弱。
2. 方法核心：提出SA-SSL-MOS，一个并行的双分支架构。一个分支将音频下采样至16kHz，使用Wav2vec2-XLSR-2B的第9层特征；另一个分支将音频上采样至48kHz，提取对数谱图特征并由CNN处理。两个分支的特征拼接后预测MOS的均值和方差。此外，采用两阶段训练：先在大规模48kHz单速率数据集（NISQA）上预训练，再在少量多速率数据集（AudioMOS）上微调。
3. 创新点：与已有SSL-Layer-MOS相比，新在通过并行谱图分支显式补充高频特征；并引入了针对多速率SQA的预训练-微调训练范式。
4. 主要实验结果：
   - 在AudioMOS测试集上，两阶段训练的SA-SSL-MOS取得了最佳的UTT SRCC（0.750）和UTT LCC（0.848）。
   - 在泛化能力测试（表3）中，两阶段训练大幅提升了模型在多个外部数据集（如NISQA-Talk, TCD-VoIP）上的相关系数。但在Tencent w/o R（中文）数据集上，SA-SSL-MOS的MSE（1.192）高于基线（0.751），LCC（0.877）低于基线（0.917）。
   ```markdown
   | 模型 | 训练数据 | 测试集 (Tencent w/o R) | MSE ↓ | LCC ↑ | SRCC ↑ |
   | :--- | :--- | :--- | :--- | :--- | :--- |
   | baseline | AudioMOS train | Tencent w/o R | 1.002±0.054 | 0.691±0.023 | 0.687±0.024 |
   | SA-SSL-MOS (Ours) | AudioMOS train | Tencent w/o R | 1.097±0.057 | 0.669±0.035 | 0.666±0.033 |
   | baseline | NISQA+AudioMOS train | Tencent w/o R | 0.751±0.043 | 0.917±0.009 | 0.901±0.006 |
   | SA-SSL-MOS (Ours) | NISQA+AudioMOS train | Tencent w/o R | 1.192±0.124 | 0.877±0.024 | 0.891±0.010 |
   ```
5. 实际意义：为处理不同采样率的语音质量评估提供了一种可扩展的框架，特别是在标注数据有限时，通过预训练提升泛化能力，对VoIP、高清通话等应用有潜在价值。
6. 主要局限性：1) 谱图增强分支在跨语言（如中文）场景下可能产生负面迁移，导致性能下降。2) 高频信息提升评估准确性的核心论点在部分实验中（如腾讯数据集）未得到支持。3) 未与当前多速率SQA领域的其他SOTA方法进行对比。

#

---

### 7. [Speech Quality-Based Localization of Low-Quality Speech and Text-to-Speech Synthesis Artefacts](/audio-paper-digest-blog/posts/2026-04-29-speech-quality-based-localization-of-low-quality)

✅ **7.0/10** | 前25% | #语音质量评估 | #自监督学习 | #语音伪造检测 #语音合成

👥 **作者与机构**

- 第一作者：Michael Kuhlmann（Paderborn University, Germany）
- 通讯作者：未说明
- 作者列表：Michael Kuhlmann（Paderborn University, Germany）、Alexander Werning（Paderborn University, Germany）、Thilo von Neumann（Paderborn University, Germany）、Reinhold Haeb-Umbach（Paderborn University, Germany）

💡 **毒舌点评**

这篇论文巧妙地将音频编解码领域的“一致性损失”借鉴到语音质量评估中，有效解决了帧级质量预测因缺乏直接监督而导致的“位置模糊”问题，在局部伪装检测任务上实现了检测精度的翻倍提升。然而，其应用于TTS伪影分析的部分显得有些“虎头蛇尾”：虽然通过听测试图证明检测的“合理性”，但仅对200个片段进行分类统计，且未与现有的语音合成错误检测基线进行定量对比，使得这部分结论的说服力大打折扣。

📌 **核心摘要**

1. 问题：现有的自动语音质量评估模型通常只给出句子级别的质量分数，无法解释低分的原因，也无法定位具体的劣质片段。尝试预测帧级分数的模型，其预测值往往因缺乏局部监督而显得不稳定和不一致。
2. 方法核心：提出通过一致性约束来正则化帧级分数的训练。具体而言，在训练SQA模型时，随机截取语音的某个片段，要求该片段独立编码后产生的嵌入向量和帧级分数，与该片段在原始完整语音上下文中编码得到的结果保持一致。
3. 创新点：将音频生成任务中确保离散标记一致性的思想，迁移并应用于判别式的语音质量评估任务，旨在减少帧级分数对长时上下文的依赖，使其更准确地反映局部质量。该方法与编码器/解码器的具体架构（如BLSTM）兼容。
4. 实验结果：
   - 一致性提升：在BVCC测试集上，引入一致性约束显著降低了帧分数的“波动率”（Volatility），例如模型1（无约束）波动率为0.510，而模型7（完整约束）降至0.055，同时保持了句子级质量预测的相关性（SRCC>0.87）。
   - 检测性能：在部分伪造（PartialSpoof）数据集上，在严格评估标准（ρ2）下，检测精度（Precision）从基线模型1的20.9%提升至模型7的55.7%（绝对提升34.8个百分点），F1分数从0.284提升至0.386。其性能接近但略低于使用伪造标签训练的SOTA模型BAM（F1: 0.569）。
   - TTS伪影分析：对StyleTTS2和F5-TTS生成语音的听测表明，由该模型检测出的低质量片段，被专家听众判定为“非人类自然语音”的比例（StyleTTS2: 79%， F5-TTS: 75%）远高于随机控制样本（StyleTTS2: 34%， F5-TTS: 28%），证明了检测的有效性。
5. 实际意义：为自动化的语音合成错误定位提供了有效工具，可以帮助开发者快速定位系统生成的劣质片段，从而针对性改进。也增强了SQA模型的可解释性。
6. 主要局限性：1） 模型对特定类型的伪影（如笑声、清嗓）敏感，可能在不同应用领域产生假阳性。2） 论文在TTS伪影分析部分未提供与现有语音合成错误检测方法的定量对比。3） 听测规模有限，且仅针对两个特定的TTS系统和有声书场景。

---

### 8. [A Generalization Strategy for Speech Quality Prediction: From Domain-Specific to Unified Datasets](/audio-paper-digest-blog/posts/2026-04-29-a-generalization-strategy-for-speech-quality)

✅ **6.5/10** | 前25% | #语音质量评估 | #领域适应 | #轻量化模型 #语音增强

👥 **作者与机构**

- 第一作者：Imran E Kibria（俄亥俄州立大学计算机科学与工程系）
- 通讯作者：Donald S. Williamson（俄亥俄州立大学计算机科学与工程系）
- 作者列表：Imran E Kibria（俄亥俄州立大学计算机科学与工程系）、Ada Lamba（俄亥俄州立大学计算机科学与工程系）、Donald S. Williamson（俄亥俄州立大学计算机科学与工程系）

💡 **毒舌点评**

论文抓住了多数据集训练MOS模型时“顾此失彼”的真实痛点，并用一个优雅的优化器（SAM）作为解决方案，思路直接且实验验证充分。然而，整个工作像是用新扳手拧旧螺丝——核心模型和问题都不是新的，且实验对比缺乏与当前更强基线（如基于SSL的SOTA模型）的直接较量，使得结论的冲击力打了折扣。

📌 **核心摘要**

1.  要解决的问题：使用多个MOS（平均意见分）数据集统一训练语音质量评估模型时，由于数据集在录制条件、语言、畸变类型等方面存在巨大差异（即“域多样性”）以及“语料库效应”（相同质量系统因引入更优系统而得分下降），导致模型在未见的评测集上泛化性能严重下降。
2.  方法核心：提出使用Sharpness-Aware Minimization（SAM）优化器来训练统一数据集上的MOS预测网络。SAM通过同时最小化损失和损失曲面的锐度（即寻找平坦的最小值），促使模型学习更多样化、互补的特征，从而提高对分布外数据的泛化能力。
3.  与已有方法相比新在哪里：论文首次将SAM优化器系统地应用于解决多数据集MOS预测的泛化问题。与以往关注架构设计（如AlignNet）、损失函数改造（如Bias-aware loss）或使用大型预训练模型（如SSL）的方法不同，本文提出了一种无需修改模型架构或损失函数、只需更换优化器的轻量级泛化增强策略。
4.  主要实验结果：在7个训练集和12个测试集的广泛评估中：
    - 传统的Adam优化器在统一数据集上训练后，相比在单一最佳数据集上训练，在大多数测试集上性能下降显著（如表1所示）。
    - 使用SAM+Adam优化器，在12个测试集中的8个上，降低了MSE并提升了SRCC（如图1、图2所示）。
    - SAM显著缓解了从单一数据集到统一数据集训练的性能损失（即减小了∆MSE和∆SRCC，如图3所示），但在少数包含训练集中未出现语言（如德语、法语）的测试集上效果不佳。
    | 测试集 | Adam (Unified) MSE | SAM+Adam (Unified) MSE | Adam (Unified) SRCC | SAM+Adam (Unified) SRCC |
    | :--- | :---: | :---: | :---: | :---: |
    | BVCC | 1.047 | （图1显示更低） | 0.642 | （图2显示更高） |
    | SOMOS | 0.837 | （图1显示更低） | 0.305 | （图2显示更高） |
    | SingMOS | 0.273 | （图1显示更低） | 0.068 | （图2显示更高） |
    | （其他测试集类似） | | | | |
    注：表1提供了Adam优化器在单一最佳训练集和统一训练集下的具体数值。图1和图2则以柱状图形式对比了Adam与SAM+Adam在统一训练集设置下，各测试集的MSE和SRCC。
5.  实际意义：为构建更鲁棒、通用的语音质量评估系统提供了一种简单有效的优化策略，尤其适用于资源有限、需要快速部署轻量级模型且数据来源多样的场景。
6.  主要局限性：1) 验证使用的模型（AttentiveMOS）非常轻量级（仅86K参数），其结论能否推广到当前主流的、更强大的基于自监督学习（SSL）的大模型尚不明确。2) 实验未与近期针对MOS泛化提出的其他专用方法（如多数据集微调、对比回归等）进行直接性能对比。3) SAM需要额外的计算开销（每步更新需要两次前向/反向传播）。4) 对于训练集中完全缺失的语言或极端分布外数据，方法效果有限。

---

