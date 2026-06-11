---
title: "Quality Adaptive Angular Margin Learning for Respiratory Sound Classification"
date: 2026-06-11
draft: false
tags: [正则化微调, 音频质量评估, 数据增强]
categories: [论文速递]
description: "音频质量评估 | 9.5/10"
hiddenInHomeList: true
---

# 📄 Quality Adaptive Angular Margin Learning for Respiratory Sound Classification

#正则化微调 #音频质量评估 #数据增强

**9.5/10** | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 清晰 1/1 | 影响 1.5/1.5 | 开源 1/1.5 | 复现 0.5/0.5 | 工程 1.5/1.5

🔥 **9.5/10** | 前50% | #音频质量评估 | #数据增强 | #正则化微调 | [arxiv](https://arxiv.org/abs/2606.11915)


### 👥 作者与机构

- Yoon Tae Kim: RSC LAB, MODULABS, Republic of Korea; dkimx3966@gmail.com
- Heejoon Koo: Department of Electronic Engineering, Wonkwang University, Republic of Korea; kaen2891@wku.ac.kr
- Miika Toikkanen: 1 RSC LAB, MODULABS, Republic of Korea; 2 Department of Electronic Engineering, Wonkwang University, Republic of Korea
- June-Woo Kim (通讯作者): 1 RSC LAB, MODULABS, Republic of Korea; 3 AI Convergence Research Institute, Wonkwang University, Republic of Korea

### 💡 毒舌点评

这篇论文像是一个“精准的工程优化”而非“开创性的科学突破”。它确实解决了呼吸音分类中的两个真实痛点（质量差异与类别不平衡），并且代码开源，实验也做到了该做的程度。但正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。核心创新——两个公式的参数（α， β， m_target）选择依据薄弱，更像是经验调参而非严谨推导。最大的卖点“最优OOD性能”也仅在一个额外数据集上验证，说服力有限。总的来说，这是一篇合格的、能发表的“增量改进”工作，但距离定义新范式的高影响力论文还有明显差距。它更像是在现有优秀框架（AST， CLAP）上做了一个“不错的插件”。

### 📌 核心摘要

本文提出QLung框架，旨在解决呼吸音分类（RSC）中录音质量参差不齐和类别严重不平衡两大挑战。核心创新是提出了双因子角度边缘正则化（DFAM）损失。该损失将角度边缘设计为两个因子的加权和：1）音频质量边缘（\(m_q\)），通过无参考音频质量评分（AQS， 结合频谱熵和RMS能量计算）缩放得到，使高质量样本获得更大的决策边界惩罚，低质量样本则惩罚较小；2）对数尺度类别不平衡边缘（\(m_c\)），通过对数映射类别频率并缩放至一个目标边缘值（\(m_{target}\)）来稳定训练，强调少数类。同时，为使角度边缘惩罚纯粹作用于方向而非特征/权重范数，框架采用了角分类器，对特征和类别权重进行L2归一化。在ICBHI数据集上，QLung将AST基线的Score提升了2.46%，在Audio-CLAP基线上提升了0.83%。更重要的是，在SPRSound分布外（OOD）数据集上，QLung取得了最佳Score（59.80%），显著优于先前的SOTA方法。消融研究验证了各组件的有效性。

### 🔗 开源详情

- 代码：https://github.com/RSC-Toolkit/QLung （已提供，符合开源）
- 模型权重：论文中未提及
- 数据集：
    - ICBHI 2017 respiratory sound dataset：论文中引用了正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。原始论文 [rocha2017alpha]，未提供直接下载链接。
    - SPRSound dataset：论文中引用了正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。原始论文 [zhang2022sprsound]，未提供直接下载链接。
    - 训练所用的预训练数据：ImageNet [deng2009imagenet], AudioSet [audioset], LAION-Audio-630K [wu2023large]；均为公开数据集，但论文中未提供直接下载链接。
- Demo：论文中未提及
- 复现材料：论文在第3.1节 “Training Details” 部分提供了详细的超参数设置（如λ=0.4, γ=0.5, m_target=0.2, s_a=37, s_d=15, κ=0.5）和训练流程，但未单独提供配置文件或检查点链接。
- 论文中引用的开源项目：
    - AST (Audio Spectrogram Transformer)：论文中引用了模型 [gong2021ast]，未提供具体代码链接。
    - Audio-CLAP / LAION-CLAP-630K：论文中引用了模型和分词器 [kim2024bts, wu2023large]，未提供具体代码链接。
    - SpecAugment：数据增强方法 [park19e_interspeech]，未提供具体实现链接。
    - Adam优化器：[kingma2014adam]，未提供具体实现链接。

### 🏗️ 方法概述和架构

QLung框架的核心目标是学习在单位超球面上更具判别性的呼吸音特征表示，正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。方法论架构可分为以下五个紧密相连的组件：

1.  角分类器（Angular Classifier）：这是整个框架的基础。为确保角度边缘损失（ArcFace）的惩罚纯粹由特征向量\(\mathbf{x}\)与类别权重向量\(\mathbf{w}_k\)之间的夹角\(\theta_k\)决定，论文引入了角分类器。它首先对特征和权重进行L2归一化：\(\hat{\mathbf{x}} = \mathbf{x}/\|\mathbf{x}\|_2\)， \(\hat{\mathbf{w}}_k = \mathbf{w}_k/\|\mathbf{w}_k\|_2\)。归一化后，内积等于余弦相似度。然后，通过一个固定的缩放因子\(s_a\)计算logit：\(z_k = s_a \hat{\mathbf{w}}_k^\top \hat{\mathbf{x}} = s_a \cos \theta_k\)。这种设计消除了特征和权重范量（常受录音响度和质量影响）对分类的干扰，使得决策完全基于方向相似性。

2.  音频质量边缘（Audio Quality Margin）：为适应不同的录音质量，论文提出了一个无参考的音频质量评分（AQS）。正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。计算公式为：\(\mathrm{AQS} = \text{clip}(1 - \alpha H_{\mathrm{norm}} + \beta R_{\mathrm{norm}}, 0, 1)\)。正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。中，\(H_{\mathrm{norm}}\)是归一化的频谱熵（高值表示噪声类信号），\(R_{\mathrm{norm}}\)是归一化的RMS能量（低值表示弱或质量差的录音）。权重\(\alpha=0.7\)和\(\beta=0.3\)是预设的固定值。AQS随后通过一个缩放系数\(\kappa\)（设为0.5）转换为质量边缘：\(m_q = \kappa \cdot \mathrm{AQS}\)。正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。设计动机是：高质量输入应被更严格地监督（更大边缘），以鼓励更强的类间分离；低质量输入则使用较小边缘，以减少对噪声的过拟合。

3.  对数尺度类别不平衡边缘（Log-scale Class Imbalance Margin）：为应对ICBHI等数据集中严重的类别不平衡，论文提出了一种稳定的边缘设计。首先计算类别频率\(\pi_y = n_y / N\)。然后，定义边缘为\(m_{c_y} = s_c (-\log \pi_y)\)，正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。中缩放因子\(s_c\)由期望的目标边缘\(m_{target}\)和类别数\(C\)决定：\(s_c = m_{target} / \log C\)。选择\(m_{target}=0.2\)。这种对数映射使得边缘随类别频率的降低而平滑增长，避免了简单逆频率缩放可能导致的尾部边缘值爆炸和训练不稳定问题。论文证明，该边缘关于\(\log n_y\)是线性的，频率每降低因子\(\rho\)，边缘增加\(s_c \log \rho\)。

4.  双因子角边缘正则化（DFAM）：这是整合上述两种边缘的核心损失。复合边缘\(m_d\)定义为质量边缘和类别不平衡边缘的加权平均：\(m_d = \gamma m_q + (1 - \gamma) m_c\)，正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。中\(\gamma\)（设为0.5）控制两者间的权衡。然后，将这个复合边缘\(m_d\)作为惩罚项添加到目标类别的角度上，得到DFAM损失：\(L_{\mathrm{DFAM}} = -\log \left( \frac{e^{s_d \cos(\theta_y + m_d)}}{e^{s_d \cos(\theta_y + m_d)} + \sum_{j \neq y} e^{s_d \cos(\theta_j)}} \right)\)，正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。中\(s_d\)（设为15）是该损失的logit缩放因子。

5.  统一训练目标：最终的训练损失是标准交叉熵损失（\(L_{cls}\)）和DFAM正则化项的加权和：\(L_{\text{total}} = L_{cls} + \lambda L_{\mathrm{DFAM}}\)，正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。中\(\lambda\)（设为0.4）控制正则化强度。这种联合优化旨在同时促进特征的角聚类和锐化决策边界。

整个架构（图2）的数据流是：输入音频经过预训练模型（如AST或Audio-CLAP）提取特征\(\mathbf{x}\)，然后由角分类器计算基础logit并应用交叉熵损失。同时，特征\(\mathbf{x}\)也用于计算AQS（隐式通过声学特征，或显式地在方法描述中提及），结合类别标签信息，共同生成复合边缘\(m_d\)，并应用于角分类器中，计算出额外的DFAM损失。两个损失反向传播，共同更新模型。

![图1](https://arxiv.org/html/2606.11915v1/Figure/0915_icbhi_training_quality_score_alpha0.7_beta0.3.png)

![图2](https://arxiv.org/html/2606.11915v1/x1.png)


### 💡 核心创新点

1.  首次将角边缘学习框架应用于呼吸音分类（RSC）：论文明确指出，这是首次将ArcFace等角度边缘损失范式引入RSC领域，旨在解决该任务中细粒度的声学事件分离（如咳嗽音中的重叠）和严重类别不平衡问题。
2.  提出统一的双因子角度边缘公式化方法（DFAM）：创新性地将无参考音频质量评估与类别频率信息融合到一个角度边缘损失中。正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。中，基于频谱熵和RMS能量的音频质量评分（AQS）指导边缘大小，使模型对不同质量的录音施加差异化的学习约束；对数尺度类别不平衡边缘则稳定了对少数类的强调。
3.  设计了角分类器以隔离角度效应：通过对特征和类别权重进行L2归一化并使用固定缩放因子，确保了角度边缘惩罚完全作用于向量方向，排除了受录音质量影响的特征范量的干扰，使正则化信号更纯净。
4.  在分布外（OOD）泛化性能上取得显著突破：实验结果表明，QLung的主要优势在于提升了模型对分布偏移的鲁棒性。在SPRSound OOD数据集上，QLung on Audio-CLAP取得了59.80%的Score，显著超越了此前最优的BTS（53.42%）和Audio-CLAP（56.29%），证明了正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。在现实临床场景中的应用潜力。

### 📊 实验结果

论文在两个主要数据集上进行了评估：ICBHI（分布内）和SPRSound（分布外，用于验证泛化能力）。

表1：ICBHI数据集上的RSC结果比较（官方60-40%划分）
| 方法 | 主干网络 | 预训练数据 | 会议 | \(S_p\) (%) | \(S_e\) (%) | Score (%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| SE+SA [yang2020adventitious] | ResNet18 | - | INTERSPEECH‘20 | 81.25 | 17.84 | 49.55 |
| LungRN+NL [ma2020lungrn+] | ResNet-NL | - | INTERSPEECH‘20 | 63.20 | 41.32 | 52.26 |
| Ren et al. [ren2022prototype] | CNN8-Pt | - | ICASSP’22 | 72.96 | 27.78 | 50.37 |
| Wang et al. [wang2022domain] (Splice) | ResNeSt | IN | ICASSP’22 | 70.40 | 40.20 | 55.30 |
| Bae et al. [bae2023patch] (Fine-tuning) | AST | IN + AS | INTERSPEECH‘23 | 77.14 | 41.97 | 59.55 |
| Bae et al. [bae2023patch] (Patch-Mix CL) | AST | IN + AS | INTERSPEECH‘23 | 81.66 | 43.07 | 62.37 |
| Kim et al. [kim2024stethoscope] (SG-SCL) | AST | IN + AS | ICASSP’24 | 79.87 | 43.55 | 61.71 |
| Xiao et al. [xiao24_interspeech] (LungAdapter) | AST | IN + AS | INTERSPEECH‘24 | 80.43 | 44.37 | 62.40 |
| Kim et al. [kim2024bts] (Audio-CLAP) | CLAP | LA | INTERSPEECH‘24 | 80.85 | 44.67 | 62.56 |
| Kim et al. [kim2024bts] (BTS) | CLAP | LA | INTERSPEECH‘24 | 81.40 | 45.67 | 63.54* |
| Ge et al. [ge2025lungmix] (Lungmix) | AST | IN + AS | ICASSP’25 | – | – | 58.53 |
| QLung on AST [ours] | AST | IN + AS | – | 81.90±5.38 | 42.12±3.94 | 62.01±1.18 |
| QLung on Audio-CLAP [ours] | CLAP | LA | – | 81.98±3.82 | 44.81±3.47 | 63.39±0.40 |

注：表示先前的最优Score。

表2：ICBHI（分布内）和SPRSound（分布外）数据集上的比较研究
| 方法 | ICBHI (分布内) | | | SPRSound (分布外) | | |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| | \(S_p\) (%) | \(S_e\) (%) | Score (%) | \(S_p\) (%) | \(S_e\) (%) | Score (%) |
| Bae et al. [bae2023patch] (Patch-Mix CL) | 81.66 | 43.07 | 62.37 | 62.69 | 39.33 | 51.01 |
| Kim et al. [kim2024stethoscope] (SG-SCL) | 79.87 | 43.55 | 61.71 | 81.06 | 22.62 | 51.84 |
| Kim et al. [kim2024bts] (Audio-CLAP) | 80.85 | 44.67 | 62.56 | 70.67 | 41.90 | 56.29 |
| Kim et al. [kim2024bts] (BTS) | 81.40 | 45.67 | 63.54 | 67.50 | 39.33 | 53.42 |
| Ours (QLung on AST) | 81.90±5.38 | 42.12±3.94 | 62.01±1.18 | 82.48±8.35 | 33.99±8.21 | 58.23±3.83 |
| Ours (QLung on Audio-CLAP) | 81.98±3.82 | 44.81±3.47 | 63.39±0.40 | 74.71±4.04 | 44.88±2.98 | 59.80±3.51 |

主要结论：
1.  分布内性能：QLung在两个主干上都取得了有竞争力的结果。在Audio-CLAP上，Score（63.39%）与当前SOTA的BTS（63.54%）几乎持平，但BTS的敏感度\(S_e\)（45.67%）更高。在AST上，QLung（62.01%）显著超越了原始AST微调（59.55%），但低于一些使用了额外增强或适配器的方法。
2.  分布外性能：QLung的主要优势在此体现。QLung on Audio-CLAP的OOD Score（59.80%）大幅超越了所有先前方法，包括BTS（53.42%）和Audio-CLAP（56.29%）。QLung on AST的OOD Score（58.23%）也优于BTS，但正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。标准差很大。
3.  消融研究（表3）：在AST骨干上，逐步添加组件（固定角度边缘 -> 音频质量边缘 -> 类不平衡边缘 -> 角分类器）最终带来了+2.46%的Score提升（从59.55%到62.01%），验证了各组件的互补贡献。

![图3](https://arxiv.org/html/2606.11915v1/Figure/ast_ce-seed8.png)

![图4](https://arxiv.org/html/2606.11915v1/Figure/arclung-seed20-nprop.png)


### ⚖️ 评分理由

*   创新性 (1.5/2)：将角边缘学习首次引入呼吸音分类是一个清晰的贡献点。提出的双因子边缘（质量+不平衡）整合方式有一定新意。然而，两个关键因子（AQS参数和\(m_{target}\)）的确定缺乏理论支撑或消融验证，削弱了方法的原创深度，更像一种经验性组合。
*   技术严谨性 (1.2/1.5)：角分类器设计合理，能有效隔离角度效应。对数尺度类别不平衡边缘的引入（公式6，7）为解决训练不稳定提供了数学依据。主要不足在于，音频质量边缘（AQS， 公式5）中\(\alpha=0.7, \beta=0.3\)的固定选择缺乏解释和验证，这降低了整个DFAM模块的技术严谨性。此外，未讨论角分类器固定缩放因子\(s_a\)和\(s_d\)的选择依据及正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。对优化动态的影响。
*   实验充分性 (1.3/2)：实验包含分布内、分布外评估、消融研究和超参数敏感性分析，框架完整。然而，分布外评估仅依赖单一数据集SPRSound，正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。合并类别的具体操作和普适性存疑。分布内性能（Score 63.39%）仅与SOTA持平（63.54%），优势主要体现在OOD上。未提供与更多SOTA方法（如使用了正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。他数据增强或元数据的方法）在SPRSound上的直接对比。未分析计算开销。
*   清晰度 (3.5/4)：论文结构清晰，写作流畅。公式推导步骤明确。方法描述部分（第2节）较好地阐述了设计动机。扣分点在于对关键参数（如\(\alpha, \beta, m_{target}\)）选择的讨论不足，以及消融研究中“Fixed angular margin”的具体设置（是否为\(m_d\)的某种平均？）未明确说明，可能影响可复现性。
*   影响力 (1.5/2)：工作针对呼吸音分类这一具体的临床应用任务，具有实际价值。提出的框架为处理该领域常见的质量差异和类别不平衡问题提供了一个通用思路。在OOD泛化上的显著提升是正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。主要影响力点。但领域专属性强，对更广泛的音频或机器学习社区的直接启发有限。
*   开源 (1.0/1.5)：论文开源了核心代码（https://github.com/RSC-Toolkit/QLung），这对于可复现性至关重要。然而，模型权重未提供，且引用的基础模型和数据集也未提供直接链接，限制了即刻复现的便利性。
*   可复现性 (2.5/3)：代码已开源，训练细节（第3.1节）如优化器、学习率、批大小、epoch数以及QLung的关键超参数（\(\lambda, \gamma, m_{target}, s_a, s_d, \kappa\)）均有明确说明。消融研究和敏感性分析（图5）有助于理解超参数影响。扣分点在于部分基线方法的复现可能需要额外的资源（如预训练权重、原始数据集访问），且AQS的完整计算流程（归一化方法）细节在提供的摘要中未充分展开。
*   工程/实践价值 (1.5/2)：QLung作为一个“插件式”的正则化损失，易于集成到现有的音频分类流程中，工程实现成本低。在实际临床应用中，处理不同设备和环境下的录音质量差异是一个真实痛点，QLung为此提供了针对性的解决方案。主要扣分点是正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。对特定超参数的敏感性以及未能证明在更广泛场景下的有效性。

### 🚨 局限与问题

1.  核心参数选择的任意性与脆弱性：方法的两个核心组件严重依赖经验参数。音频质量评分（AQS）中的权重\(\alpha=0.7, \beta=0.3\) 完全没有理论推导或基于验证集的系统搜索说明，正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。最优性可能仅限于ICBHI数据集。类别不平衡边缘中的目标边缘\(m_{target}=0.2\) 的选择同样缺乏依据。这种“拍脑袋”式的参数设定是方法最大的技术缺陷，严重影响了正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。泛化性和鲁棒性的可信度。
2.  分布外验证的充分性存疑：论文声称在OOD数据集SPRSound上取得“最佳性能”，但SPRSound本身是一个数据集，正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。类别分布（正常类占76.7%）与ICBHI有相似之处。真正的OOD验证应来自更极端的分布偏移（如不同录音设备、疾病人群、环境噪音）。仅在一个外部数据集上的成功，不足以支撑“显著提升OOD泛化能力”的强结论。
3.  分布内性能提升的实质有限：在分布内任务（ICBHI）上，QLung on Audio-CLAP的Score（63.39%）与SOTA方法BTS（63.54%）仅差0.15个百分点，在统计上可能不显著。论文的核心主张是通过自适应边缘提升性能，但在分布内这个主要基准上并未展现出明显优势，正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。价值主要依赖于OOD结果，而后者又受限于上一条所述的验证不足。
4.  消融研究设计不够深入：表3的消融是逐步添加组件，但“Fixed angular margin”基线究竟是如何实现的？是固定一个常数边缘，还是质量边缘和类别不平衡边缘的简单平均？这直接影响结论的清晰度。此外，缺少对AQS本身有效性的消融（例如，对比使用与不使用AQS，或使用不同质量度量），以及对\(m_{target}\)和\(\alpha, \beta\)进行敏感性分析的实验（图5未涵盖这些参数）。
5.  计算复杂度与额外成本未讨论：虽然DFAM是损失函数层面的改动，但计算AQS可能需要额外的频谱分析步骤。论文未讨论这引入的推理延迟或训练开销增加是否在实际临床部署中可接受。
6.  对类别合并操作的交代不足：在SPRSound实验中，将七个类别合并为四个与ICBHI对应的类别，但合并的具体规则（例如，具体哪些类别合并为“wheeze”）仅在实验设置中一笔带过，未在方法或结果分析中充分讨论正确的引用格式，例如添加链接或标记为纯文本引用。如果不需要链接，可保持原样，但建议明确。示例修复：`[rocha2017alpha]` 改为 `"[rocha2017alpha]"` 或 `[rocha2017alpha](#)`。合理性以及对OOD评估公平性的影响。

### 📷 论文图片

![图5](https://arxiv.org/html/2606.11915v1/Figure/qlung_for_paper_seed300_test_label_icbhi_side_by_side.png)


---

[← 返回 2026-06-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-06-11/)
