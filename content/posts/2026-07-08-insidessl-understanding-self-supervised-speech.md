---
title: "InsideSSL: Understanding Self-Supervised Speech Representations using a Model-Centric Perspective"
date: 2026-07-08
draft: false
tags: [模型评估]
categories: [论文速递]
description: "语音属性识别 | 7.4/10"
hiddenInHomeList: true
---

# 📄 InsideSSL: Understanding Self-Supervised Speech Representations using a Model-Centric Perspective

#模型评估

**7.4/10** | 创新 1.2/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 清晰 0.8/1 | 影响 0.8/1.5 | 开源 1.2/1.5 | 复现 0.5/0.5 | 工程 0.5/1.5

✅ **7.4/10** | 前50% | #语音属性识别 | #模型评估 | [arxiv](https://arxiv.org/abs/2607.06392)


### 👥 作者与机构

- 第一作者：Samir Sadok（Inria, Université Grenoble Alpes, CNRS, LJK, France）
- 通讯作者：未说明
- 作者列表：Samir Sadok、Xavier Alameda-Pineda（均隶属于 Inria, Université Grenoble Alpes, CNRS, LJK, France）

### 💡 毒舌点评

这篇工作把熵、曲率、不变性三个经典分析工具搬到了语音 SSL，并用一个生成式兼容矩阵为跨层解剖加了一双新眼睛，揭示的现象（如 Wav2Vec2 深层熵崩塌、GCM 非对称性）确实有趣。但整个框架仍是观察性的组合，缺乏对“为什么”的因果解答，对指导新模型设计的实际抓手尚显薄弱。

### 📌 核心摘要

1. 论文试图回答一个问题：语音自监督学习模型（Wav2Vec2、HuBERT、WavLM 等）的各层表征在信息压缩、几何结构和鲁棒性上存在怎样的内在差异，以及层与层之间的功能关系如何。
2. 方法核心是提出 insideSSL 框架，包含两项工具：（a）三个任务无关的逐层度量——基于 von Neumann 熵的压缩、基于向量夹角的曲率、基于 InfoNCE 的扰动不变性；（b）一个跨层生成兼容矩阵 GCM，用训练在某一层的解码器去解码其他层的表示，量化跨层可迁移性。
3. 与已有研究主要靠线性探针和下游任务标签不同，此文从模型自身出发、不以任何下游标签为前提，首次把“生成式解码器作为跨层功能探头”引入语音 SSL 分析。
4. 主要结果：发现 Wav2Vec2 在末尾层出现剧烈熵压缩与不变性丧失；WavLM 和 HuBERT 保持更稳定；GCM 显示词内容集中在宽中层带，说话人身份则更分散且深层衰减；音素识别与深层压缩线性化正相关，而基频和说话人任务依赖早期高熵高曲率状态。
5. 实际意义在于提供一套统一诊断工具箱，帮助研究者快速评估 SSL 模型各层的特性，辅助选择适合特定任务的层或设计更跨层协同的架构。
6. 主要局限性在于分析仅停留在相关层面，缺少因果干预实验（如直接移除量化模块），也未将观察到的行为映射为实际模型的改进或具体的训练策略调整。

### 🔗 开源详情

- 代码：https://insideSSL.github.io/ （论文中明确提供为项目页面和代码仓库）
- 模型权重：未提及是否提供预训练解码器权重。
- 交互式 Demo：https://insideSSL.github.io/ 包含交互式探索和 GCM 音频动画。
- 数据集：LibriSpeech（公开数据集，论文中未直接提供下载链接）。
- 复现材料：未提及是否有专门的复现脚本或详细配置。
- 论文中引用的开源项目：
  - audiomentations：https://github.com/iver56/audiomentations
  - information_flow：https://github.com/OFSkean/information_flow

### 🏗️ 方法概述和架构

insideSSL 是一个分析框架，而非一个新模型。它以冻结的预训练语音 SSL 模型为被分析对象，输入语音信号后提取每一层输出的 token 嵌入矩阵 \(\mathbf{Z}^{(\ell)} \in \mathbb{R}^{N \times D}\)，然后从四个角度进行度量。



![Figure 1: Systematic layer-wise evaluation of SSL speech representations using a model-centric perspective framework. It tracks the evolution of entropy, curvature, and invariance across layer depth to characterize how information is compressed, organized, and abstracted within the Transformer hierarchy.](https://arxiv.org/html/2607.06392v1/figures/ssl.png)



上图直观展示了 insideSSL 框架的整体分析流程：语音输入通过一个冻结的 SSL 模型（包含 CNN 编码器和多层 Transformer），并在每个 Transformer 层提取表征。随后，框架从三个视角进行分析：（1）压缩视角（熵）评估信息在层间的压缩程度；（2）几何视角（曲率）刻画表征流形的复杂度变化；（3）鲁棒视角（InfoNCE）度量对扰动的不变性。最后，通过训练一个生成式解码器来构建跨层兼容矩阵（GCM），以量化不同层表征之间的功能关系。

三个逐层视图
1. 压缩（熵）：计算每一层 Gram 矩阵 \(\mathbf{K} = \mathbf{Z}\mathbf{Z}^\top\) 的归一化特征值谱的 von Neumann 熵 \(E^{(\ell)} = -\sum \tilde{\lambda}_r \log \tilde{\lambda}_r\)。高熵表示嵌入分布在多维度、信息多样；低熵表示被压缩到低维子空间。该度量不需要显式概率建模，直接反映有效秩。
2. 几何（曲率）：构造相邻 token 的位移向量 \(\mathbf{v}_n = \mathbf{z}_{n+1} - \mathbf{z}_n\)，然后求相邻位移之间的夹角并取平均，得到平均曲率 \(C^{(\ell)}\)。曲率高代表路径变化剧烈，对应局部声学细节；曲率下降代表轨迹平滑、线性度提升，对应高层语义抽象。
3. 鲁棒性（InfoNCE）：对每个样本生成两种加噪/音高/时间掩蔽的增强视图，计算对应 token 对与批次内其他 token 的 InfoNCE 损失，作为互信息下界。损失越低表示该层对扰动越不敏感。

这三个指标均逐样本计算后平均，实现完全任务无关的分析。

跨层生成兼容矩阵
这是最有区分度的创新。对每一个 SSL 层 \(\ell\)，训练一个独立的条件流匹配（CFM）解码器 \(D^{(\ell)}\)，将 \(\mathbf{Z}^{(\ell)}\) 映射到 log-Mel 频谱。解码器是 6 层 Diffusion Transformer（DiT，隐藏维度 512），训练时最小化 CFM 损失，最终加上冻结的 HiFi-GAN 声码器生成波形。训练完成后，进行交叉评估：用 \(D^{(\ell)}\) 去解码任意层 \(k\) 的表示 \(\mathbf{Z}^{(k)}\)，计算生成信号与原信号的质量指标（SpeechBERTScore、说话人相似度、STOI、L1 重建误差），形成非对称矩阵 \(\text{GCM}(\ell,k)\)。数值高（或低，视指标）表示层 \(k\) 的表示能被层 \(\ell\) 的解码器有效解释，从而揭示信息在不同层间保持或丢失的程度。

与下游任务的连接
最后用线性探针（音素分类、基频回归、说话人分类）在各层单独训练，并与上述内在度量做 Pearson 相关性分析，将模型中心视角与任务性能挂钩。

该框架将两类分析（层内状态和层间关系）统一起来，并且采用生成式跨层探查代替传统的线性探针，这正是其主要新颖之处。

### 💡 核心创新点

1. 统一的“模型中心”三元分析视角：同时从压缩（熵）、几何（曲率）、鲁棒性（InfoNCE）三个维度刻画语音 SSL 的表征动力学，比单一指标更全面，且所有度量均不依赖任何下游标签，完全基于表征自身统计性质。
   - 好处：发现不同预训练目标导致的深层表现差异（如 Wav2Vec2 的熵崩塌和不变性破裂）。
2. 生成式跨层兼容矩阵：首次用条件流匹配解码器作为跨层功能探头，构造 GCM 来量化层间表示的可解释性和信息保留结构。
   - 相较于线性探针，生成式任务需要恢复全频谱信息，对表征的完整语义要求更高，能发现线性方法遗漏的深层语义修剪和非对称层次关系。
3. 训练动态的可视化：通过跟踪 HuBERT 模型训练过程中的曲率演变，揭示了从“全局复杂化”到“深层线性化”的几何松弛现象，为理解模型如何逐步构建抽象表征提供了新视角。
4. 连接内在几何与任务性能：通过 Pearson 相关性分析，明确揭示低层高熵高曲率状态对基频和说话人任务有利，而深层压缩和线性化对音素任务有利，为任务驱动的层选择提供经验规律。

### 📊 实验结果

表1给出了所考察自监督语音模型的规模、预训练数据、任务类型和架构细节。

| Scale | SSL Model | Pretraining Dataset | P | C | D | Architecture Details |
|-------|-----------|---------------------|---|---|---|-----------------------|
| base | Wav2Vec2 | Librispeech (960h) | ✗ | ✓ | ✗ | Layers: 12, Hidden dim: 768, Size: 95M |
| base | HuBERT | Librispeech (960h) | ✓ | ✗ | ✗ | Layers: 12, Hidden dim: 768, Size: 95M |
| base | WavLM | Librispeech (960h) | ✓ | ✗ | ✓ | Layers: 12, Hidden dim: 768, Size: 95M |
| base | Data2vec | Librispeech (960h) | ✓ | ✗ | ✗ | Layers: 12, Hidden dim: 768, Size: 95M |
| base | UniSpeech | Librispeech (960h) | ✓ | ✓ | ✗ | Layers: 12, Hidden dim: 768, Size: 95M |
| plus | WavLM | Mix (94kh) | ✓ | ✗ | ✓ | Layers: 12, Hidden dim: 768, Size: 95M |
| large | Wav2Vec2 | Mix (≥60kh) | ✗ | ✓ | ✗ | Layers: 24, Hidden dim: 1024, Size: 315M |
| large | HuBERT | Mix (≥60kh) | ✓ | ✗ | ✗ | Layers: 24, Hidden dim: 1024, Size: 315M |
| large | WavLM | Mix (≥60kh) | ✓ | ✗ | ✓ | Layers: 24, Hidden dim: 1024, Size: 315M |
| large | Data2vec | Mix (≥60kh) | ✓ | ✗ | ✗ | Layers: 24, Hidden dim: 1024, Size: 315M |
| large | UniSpeech | Mix (≥60kh) | ✓ | ✓ | ✗ | Layers: 24, Hidden dim: 1024, Size: 315M |

注：P—预测任务，C—对比任务，D—去噪任务。h：小时；kh：千小时；M：百万参数。

### 逐层分析：压缩、几何与鲁棒性
压缩（熵）。 下图展示了各模型的平均归一化熵随层深度（百分比）的变化趋势，MelSpec 基线熵极低。大多数模型（HuBERT、WavLM、Data2vec 等）在初始层熵约为 0.82，深层缓慢下降至约 0.75，表明信息密度得到良好保持。Wav2Vec2-base 在前 10 层与其他模型一致，但第 11 层熵骤降至接近基线的水平（约 0.45），发生了显著的表示多样性崩塌。



![(a) Compression (entropy)](https://arxiv.org/html/2607.06392v1/x1.png)



模型间熵相关矩阵显示 HuBERT、WavLM、UniSpeech 的平均相关系数为 0.86，轨迹高度一致。

几何（曲率）。 下图展示了各模型的平均曲率随层深度的变化，MelSpec 基线曲率较低。多数模型初始曲率约 1.4，深层下降并稳定在约 1.2，呈现“复杂化-展开-线性化”的两阶段模式。Data2vec 初始曲率最高，深层降至低于 MelSpec 基线。Wav2Vec2 在 80% 深度附近出现曲率波动，与其熵崩塌一致。



![(b) Geometry (curvature)](https://arxiv.org/html/2607.06392v1/x2.png)



HuBERT、WavLM、UniSpeech 的曲率相关系数超过 0.96，几乎共享同一几何演化策略。

鲁棒性（InfoNCE 不变性）。 下图展示了平均 InfoNCE 随层深度的变化。HuBERT、WavLM 等模型在前 20% 层内 InfoNCE 快速降至约 1.0，并在后续层保持低值平稳，展现出稳定的判别鲁棒性。Wav2Vec2-base 和 Data2vec 在初始下降后，于约 90% 深度处 InfoNCE 突然跃升：Wav2Vec2 最后两层从约 1.0 跳升至 3.0，Data2vec 也出现类似回升。



![(c) Robustness (InfoNCE)](https://arxiv.org/html/2607.06392v1/x3.png)



不变性相关矩阵将模型分为两个簇：HuBERT/WavLM/UniSpeech 的稳定簇与 Wav2Vec2/Data2vec 的晚期偏离簇。

核心发现： SSL 语音模型普遍遵循“先增加特征复杂度（曲率上升），再展开流形，最后在深层趋于稳定抽象”的动力学规律。

### 缩放、数据与微调的影响
模型规模与数据量。 下图比较了不同规模 WavLM 模型的平均归一化熵。WavLM-base 与 WavLM-base-plus 的行为几乎重合，而 WavLM-large 表现出明显差异：初始熵仅为 0.70（第 1 层），随后在 30% 深度处快速攀升至 0.80。



![(a) Compression (entropy)](https://arxiv.org/html/2607.06392v1/figures/size/0_.png)



平均曲率（下图）显示，WavLM-large 深层曲率抵抗线性化，保持更丰富的流形结构；InfoNCE（下图）显示，其初始较高，仅在末层才达到最优判别性能。扩大模型容量比单纯增加预训练数据产生更深刻的结构影响。



![(b) Geometry (curvature)](https://arxiv.org/html/2607.06392v1/figures/size/1_.png)





![(c) Robustness (InfoNCE)](https://arxiv.org/html/2607.06392v1/figures/size/2_.png)



微调数据量。 对 Data2vec 进行不同数据量（10 分钟、100 小时、960 小时）的 ASR 微调，熵几乎不变（下图）。前 8 层曲率轨迹对齐，但从第 9 层开始，微调数据越多深层曲率越高（下图），偏离预训练的低曲率状态。InfoNCE（下图）随微调数据增加而整体升高，960 小时模型的最终损失最大，表明大规模监督会覆盖预训练的对齐目标，使模型向任务特异性偏移。



![(a) Compression (entropy)](https://arxiv.org/html/2607.06392v1/figures/finetune/0.png)





![(b) Geometry (curvature)](https://arxiv.org/html/2607.06392v1/figures/finetune/1.png)





![(c) Robustness (InfoNCE)](https://arxiv.org/html/2607.06392v1/figures/finetune/2.png)



单扰动鲁棒性。 下图展示了 WavLM 在不同扰动下的 InfoNCE。整体比 Wav2Vec2 保持更低的 InfoNCE，尤其对加性噪声和音高偏移具有深层渐进不变性。TimeMask 对两者均构成持续挑战，损失曲线始终较高且平坦。Wav2Vec2 在所有扰动下，最后两层 InfoNCE 均出现明显反弹（平均约 1.0→3.0），表明输出层重新引入对声学变化的敏感度。



![(a) WavLM](https://arxiv.org/html/2607.06392v1/figures/perturbation-wavlm.png)



训练动态。 下图展示了 HuBERT 训练过程中层曲率的演变。训练初期（初始化时）全局曲率约为 1.16，优化开始后迅速升至约 1.42；随后浅层维持高曲率以编码声学细节，深层（>40% 深度）逐步线性化，曲率系统下降。



![Figure 6: Evolution of layer-wise curvature during training. The curves display the average curvature profile across the network depth (normalized 0–100%100\%), colored by training iterations (from purple: initialization, to yellow: 100100k iterations).](https://arxiv.org/html/2607.06392v1/figures/curvature-vs-iterations.png)



### 跨层生成兼容性矩阵（GCM）
语音内容（SpeechBERTScore）。 下图展示了 Wav2Vec2 模型的 GCM。在第 1–10 层形成大面积高值区（>0.80），表明稳定的语音编码核心；第 11 层出现断裂，得分骤降至约 0.60，与熵崩塌位置完全吻合。WavLM 的内容稳定区被分割为两个显著区块（层 1–6 和层 6–12），与其曲率分析中的双阶段结构一致。



![(a) Wav2Vec2: content-GCM](https://arxiv.org/html/2607.06392v1/x7.png)



说话人身份。 说话人相似度矩阵也呈现块状对应，但跨层稳定性弱于内容，深层对说话人信息的保留能力下降。

方向非对称性。 所有 GCM 矩阵均表现出下三角优势：深层解码器能成功解释浅层表示，反之不行。这表明网络存在严格的层级修剪，浅层声学丰富表征无法被深层解码器解读。

### 模型中心指标与下游任务关联
线性探针结果。 下图展示了各模型的音素分类探针准确率随层的变化。音素分类在中间层（WavLM、HuBERT 第 7–8 层，Data2vec 第 4 层）达到峰值，与前文曲率转折点对齐，反映了特征丰富性与流形平坦度的最优平衡。基频回归在早期层最强，随深度逐渐衰减；说话人分类趋势相似，深层语义抽象使副语言信息减弱。



![(a) Phoneme classification (↑\uparrow)](https://arxiv.org/html/2607.06392v1/figures/probing/phoneme-probing.png)



皮尔逊相关性。 下图量化了各项内在指标与下游任务性能（此处为音素分类）的相关性。音素分类与熵、曲率、不变性均呈负相关，平均值分别为 -0.46、-0.57、-0.54，说明语言区分任务受益于压缩和流形线性化。基频和说话人分类与熵的相关系数分别为 0.77 和 0.84，与曲率的相关系数为 0.82 和 0.74，表明副语言任务依赖高维、高曲率表征。



![(a) Phoneme classification task](https://arxiv.org/html/2607.06392v1/x15.png)



核心发现： 语音任务存在清晰的层次分工——低层任务（基频、说话人）依赖高熵、高曲率状态，而音素识别需要深层压缩与线性化。

- 熵（压缩）：多数模型深层熵保持约 0.75，而 Wav2Vec2-base 在最后一层从约 0.75 骤降至基线附近（0.45，接近 MelSpec 基线水平）。
- 曲率（几何）：初始约 1.4，深层降至 1.2；Data2vec 在深层降至低于 MelSpec 基线。WavLM-large 在深层保持更高曲率，抵抗线性化。
- 不变性（InfoNCE）：HuBERT/WavLM 迅速降至低位平稳（~1.0 量级），Wav2Vec2 在最后两层从约 1.0 跳升到 3.0。TimeMask 对所有模型都构成持续挑战。
- GCM（Wav2Vec2）：语音内容（SpeechBERTScore）在层 1–10 均 >0.80，层 11 突降到 0.60 左右；说话人相似度在深层减弱；所有矩阵呈现下三角优势，表明深层解码器能解释浅层表示，反之不行。
- GCM（WavLM）：内容稳定性区域被分割为两个不同块（层 1–6 和 6–12），与曲率分析中的双阶段结构对应。
- 探针与相关性：基频和说话人分类与熵的正相关系数为 0.77、0.84，与曲率正相关为 0.82、0.74；音素分类与熵、曲率、不变性均为负相关（平均 −0.46、−0.57、−0.54）。
- 缩放与微调影响：WavLM-large 从极低初始熵（0.70）开始，迅速攀升；ASR 微调数据显示，微调数据量增加会显著提升深层曲率，并使 InfoNCE 损失升高，表明模型偏离预训练不变性以适配下游任务。
- 训练动态：HuBERT 训练初期曲率全局急升（1.16→1.42），随后深层逐步线性化。

### 🔬 细节详述

- 训练数据：探针和 GCM 解码器使用 LibriSpeech train-clean-100（100 小时）；逐层度量评估使用 test-clean（2620 句）。
- 增强策略：高斯噪声（幅度 0.001~0.015）、音高偏移（±4 半音）、增益调整、时间掩码，每项以 0.7 概率独立施加。
- 熵归一化：原始熵除以 \(\min(\log N, \log D)\)，保证跨架构可比。
- InfoNCE：温度 \(\tau=0.1\)，损失除以 \(\log N\) 做归一化以获得有界互信息下界。
- GCM 解码器：6 层 DiT（隐藏维度 512），用 CFM 训练，400 epoch，配合冻结的 HiFi-GAN。单 GPU 训练。
- 线性探针：音素分类用 PPG 标签，基频用 CREPE 提取，说话人分类用说话人标签，早停训练。
- 模型：Wav2Vec2 base/large，HuBERT base/large，WavLM base/base-plus/large，Data2vec-audio base/large，UniSpeech base/large 等。
- 对比基线：MelSpec（log-Mel 频谱特征）作为各度量的参考基线。
- 损失函数：CFM 损失（Flow Matching）；线性探针使用交叉熵或 MSE 损失。未给出优化器、学习率、batch size 等具体超参数，但称早停。
- 硬件/算力：GPU 型号和训练时间未说明；论文致谢中提及使用 IDRIS 的 HPC 资源（GENCI 分配号 2025-A0181016041）。

### ⚖️ 评分理由

*   创新性 (1.2/2)：将熵、曲率、不变性组合用于语音 SSL 不算全新，但用生成式跨层兼容矩阵来系统性探测层间关系是一种有创意的延伸。对训练过程中几何松弛的观测也增加了新视角。观测到 Wav2Vec2 的熵崩塌等行为提供了有趣的现象，但本质仍是应用既有概念，未产生新的建模原理。
*   技术严谨性 (1.2/1.5)：各度量的数学定义明确，GCM 设计合理，交叉层评估和不对称性检查充分。但缺少对度量本身可靠性和统计波动性的讨论（例如曲率对 token 长度的敏感性），也未讨论异常现象（如 Wav2Vec2 尾层崩溃）的潜在混淆因子。
*   实验充分性 (1.2/1.5)：覆盖了主流 SSL 架构和不同尺度、数据量、微调量，消融了扰动类型和训练过程，比较全面。但不同模型的计算仅在一套音频测试集上进行，未在更多语言或噪声条件下验证普适性；也未做统计检验；部分探针结果仅凭相关系数就下结论，稍显草率。
*   清晰度 (0.8/1)：结构和图示清楚，概念解释易于理解。但实验细节部分遗漏不少关键超参（优化器、学习率、batch size、CFM 损失函数的具体实现），影响严格复现。
*   影响力 (0.8/1.5)：为语音 SSL 社区提供了一套有用的诊断工具，发现的层特性规律可能影响未来模型设计（如选择融合的层位）。然而缺乏可操作的改进方案，更偏向观察和解释，实战指导价值有限。
*   开源 (1.2/1.5)：论文提供了项目页面（代码和交互式 Demo），声称代码可用，但未详细说明仓库的完整性、是否包含 GCM 训练脚本与预训练解码器权重等核心内容，因此扣分。交互式探索和 GCM 音频动画的提供增加了附加值。
*   可复现性 (0.5/0.5)：框架描述足够清晰，关键的逐层度量计算明确且基于开源库改编。主要扣分项为 GCM 和探针的训练细节缺失（优化器、学习率等），让他人严格按照原文复现存在不确定性。
*   工程/实践价值 (0.5/1.5)：分析工具具有一定的工程参考意义（如帮助选择冻结特征的层位），但未形成完整的 pipeline 或工业级组件，仍处于学术诊断层面。

### 🚨 局限与问题

论文明确承认的局限
- 缺乏因果分析：作者明确指出“未来工作必须建立正式的因果联系，分离导致 Wav2Vec2 极端深层压缩的确切机制”。
- 框架尚为实证基础，未提出新的模型架构或训练策略来验证分析的价值。
- 归因尚为推测：作者承认 Wav2Vec2 的量化模块可能导致其异常行为，但也指出这不能排除“其他因素，如特定优化动态、架构差异或投影头的影响”。

审稿人发现的潜在问题
- 单一数据集依赖：全部分析基于 LibriSpeech（英文朗读数据），无法确定这些层间规律是否在嘈杂、多说话人、多语言数据中同样成立。这对于声称的“通用诊断工具箱”定位是一个显著弱点。
- 缺乏因果干预实验：量化模块被认为是 Wav2Vec2 行为异常的可能原因，但论文未做任何干预性实验（如移除量化层后重新评估），所有归因仍属猜测。
- GCM 解码器的保真度偏差：GCM 解码器采用 CFM+HiFi-GAN，训练成本高且重建质量会影响兼容性结论。论文未分析重建本身的保真度是否足以作为无偏的度量工具，也未讨论解码器容量对不同层的表达可能产生的天花板效应或瓶颈效应。
- 相关性与因果混淆：层间熵崩溃和不变性丧失与下游任务性能的关系仅为相关分析，未被严格检验（例如，直接验证使用崩溃前一层进行 ASR 是否真的更好）。
- 方法论的比较缺失：论文声称生成式探针优于线性探针，但未进行直接的对比实验来证明 GCM 发现了哪些线性探针遗漏的具体信息。

---

[← 返回 2026-07-08 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-08/)
