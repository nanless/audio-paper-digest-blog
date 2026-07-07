---
title: "Adaptive Loss Balancing for Multi-Task Bioacoustic Classification of Bird Species and Call Types"
date: 2026-07-07
draft: false
tags: [音频分类, 多任务学习, 预训练, 迁移学习, 基准测试]
categories: [论文速递]
description: "音频分类 | 6.1/10"
hiddenInHomeList: true
---

# 📄 Adaptive Loss Balancing for Multi-Task Bioacoustic Classification of Bird Species and Call Types

#音频分类 #多任务学习 #预训练 #迁移学习 #基准测试

**6.1/10** | 创新 1/2 | 严谨 1/1.5 | 实验 1.1/1.5 | 清晰 0.8/1 | 影响 0.6/1.5 | 开源 0.2/1.5 | 复现 0.4/0.5 | 工程 1/1.5

✅ **6.1/10** | 前50% | #音频分类 | #多任务学习 | #预训练 #迁移学习 | [arxiv](https://arxiv.org/abs/2607.03304)


### 👥 作者与机构

- 第一作者：Paria Vali Zadeh（Kiel University, Kiel, Germany）
- 通讯作者：未明确指定，但第一作者为唯一联系作者（paria.vali.zadeh@cs.uni-kiel.de）
- 作者列表：Paria Vali Zadeh（Kiel University, Kiel, Germany）、Sven Tomforde（Kiel University, Kiel, Germany）

### 💡 毒舌点评

该论文系统性地将自适应多任务损失平衡方法搬到鸟声分类任务上，实验覆盖四种骨干、三种适应深度和四种加权策略，工作量足够扎实。但方法层面完全由现有技术拼凑而成，无任何算法创新，且缺乏统计显著性检验，部分结论仅基于三次种子运行的均值差异，结合较小的cmAP差距，说服力打折；数据集需申请且代码未公开，复现性与可验证性存疑。

### 📌 核心摘要

论文针对被动声学监测中鸟类物种和鸣声类型联合分类任务，重点研究多任务学习中目标损失如何自适应平衡。方法上，在共享预训练音频编码器上添加独立的物种和鸣声类型分类头，对比固定加权、同方差不确定性加权、动态权重平均（DWA）和梯度归一化（GradNorm）四种损失平衡策略，并在线性探测（LP）、注意力探测（AP）和全量微调（FT）三种适应设置下评估 ConvNeXtBS、EAT、BirdMAE、ProtoCLR 四个鸟声领域预训练骨干网络。实验在长尾 WiWa 森林声景数据集上进行，结果表明：(1) 因子分解的多任务形式对鸣声类型识别提升最一致，而物种识别更依赖适应策略和自适应加权；(2) ConvNeXtBS 结合线性探测取得最高平均物种 cmAP（0.4482），BirdMAE 结合注意力探测取得最高鸣声类型 cmAP（0.5300）；(3) 全量微调并非总是最优，冻结骨干常能提供更好的性能-效率权衡；(4) 自适应加权在物种识别上优势更一致，其中不确定性加权在注意力探测下最佳，DWA 在微调下更优。实际意义在于为生物声学多标签分类提供了系统的损失平衡参考，并为 WiWa 基准建立了多任务基线。主要局限是方法本身无创新、缺乏统计显著性检验、数据集未公开、仅在单个声景数据集上验证，以及不同骨干输入规格不一导致无法完全解耦架构与处理管线的贡献。

| Setting | Encoder | Species cmAP (Naive/Unc/DWA) | Call-type cmAP (Naive/Unc/DWA) |
|---------|---------|------------------------------|--------------------------------|
| Linear Probing | ConvNeXtBS | 0.4470/0.4472/0.4505 | 0.4990/0.5007/0.5003 |
| Linear Probing | EAT | 0.2886/0.2940/0.2929 | 0.3473/0.3537/0.3524 |
| Linear Probing | BirdMAE | 0.3555/0.3616/0.3521 | 0.4850/0.4845/0.4830 |
| Linear Probing | ProtoCLR | 0.3066/0.3075/0.3091 | 0.3688/0.3672/0.3708 |
| Attentive Probing | ConvNeXtBS | 0.3802/0.4115/0.3926 | 0.4713/0.4539/0.4631 |
| Attentive Probing | EAT | 0.2851/0.2890/0.2797 | 0.3453/0.3415/0.3350 |
| Attentive Probing | BirdMAE | 0.4155/0.4641/0.4493 | 0.5199/0.5359/0.5342 |
| Attentive Probing | ProtoCLR | 0.3137/0.3394/0.3296 | 0.3993/0.3975/0.3975 |
| Full Fine-tuning | ConvNeXtBS | 0.3153/0.3272/0.3322 | 0.4902/0.4652/0.4736 |
| Full Fine-tuning | EAT | 0.2053/0.2205/0.2223 | 0.4484/0.4481/0.4495 |
| Full Fine-tuning | BirdMAE | 0.2445/0.2769/0.2906 | 0.4924/0.4916/0.4965 |
| Full Fine-tuning | ProtoCLR | 0.2250/0.2535/0.2526 | 0.4477/0.4622/0.4567 |

### 🔗 开源详情

- 代码：论文中未提供公开代码仓库链接。作者承诺在接收后通过 Weights & Biases 公开完整实验配置和训练日志，但当前无法获取。
- 模型权重：实验使用的预训练编码器权重来自 HuggingFace DBD-research-group (https://huggingface.co/DBD-research-group，包括 ConvNeXtBS、BirdMAE、ProtoCLR) 和 Weights & Biases deepbirddetect 项目 (https://wandb.ai/deepbirddetect/birdset，EAT)。本研究产出的微调后检查点未提供任何链接。
- 数据集：WiWa 数据集由 OekoFor GbR 构建 (https://oekofor.de)，需向该机构申请获取，不直接公开。同源录音派生的 CEB 数据集在 Zenodo 可用，但论文未给出具体引用或 DOI。
- Demo：论文未提及任何演示链接或界面。
- 复现材料：训练超参数详见表 1。作者承诺的 W&B 日志当前不可用。无公开配置文件。
- 论文中引用的开源项目：Xeno-canto、BirdSet、BirdNET、ConvNeXt、EAT、BirdMAE、ProtoCLR、Audio-MAE、data2vec、BEATs、AVES、AST、Vision Transformer、CvT、GradNorm。文中仅提供 HuggingFace 和 W&B 的两个主页链接，未提供各引用项目的具体代码/主页。

- 补充链接（自动提取）：
  - 代码仓库：https://github.com/YuanGongND/ast
  - 代码仓库：https://github.com/apple/ml-aim
  - 代码仓库：https://github.com/google-research/vision_transformer

### 🏗️ 方法概述和架构

![Figure 1: Schematic overview of the proposed multi-task learning (MTL) framework for bird vocalisation analysis. Input audio segments are preprocessed and passed through one of the pretrained audio backbones. The shared representation is kept frozen for linear probing (LP) and attentive probing (AP), whereas it is updated during full fine-tuning (FT). Species and call-type predictions are optimised through task-specific losses, which are combined using the evaluated loss-balancing strategies. GradNorm is applied only in the FT setting because it requires trainable shared parameters.](https://arxiv.org/html/2607.03304v1/x1.png)

论文的核心架构为“共享编码器 + 多任务分类头 + 自适应损失平衡”，这是一种硬参数共享的多任务学习设计。整体流程如下：输入的 5秒 音频片段（ProtoCLR使用6秒）经过预处理（包括单声道转换、重采样至对应编码器的采样率、截取或补零至所需时长）后，送入预训练的鸟声编码器生成共享特征表示 \(\mathbf{h} = f(\mathbf{x};\theta_s)\)。该共享表示依次通过物种分类头 \(g_{sp}(\mathbf{h};\theta_{sp})\) 和鸣声类型分类头 \(g_{ct}(\mathbf{h};\theta_{ct})\)，分别输出二进制标签向量的 logits。两个头部均采用带有 logits 的二元交叉熵（BCEWithLogits）损失。在训练过程中，四个损失平衡策略（固定加权、不确定性加权、DWA、GradNorm）以不同方式组合两个任务的损失进行优化，其中 GradNorm 仅在全量微调时可用（需要共享编码器的梯度信息）。适应深度分为三类：线性探测（LP）时编码器冻结，仅训练两个线性头；注意力探测（AP）时在冻结编码器之后插入可训练的多头注意力池化层，再连接线性头；全量微调（FT）时整个网络端到端更新。

各模块详情：
- 编码器：四个预训练的鸟声领域骨干网络，均从 BirdSet 相关的检查点初始化：
  - ConvNeXtBS：基于 ConvNeXt 架构的卷积网络，接收对数梅尔谱图作为二维时频输入。保留了全卷积形式，采用层次化阶段组织、Patch 式下采样、深度可分离卷积、逆瓶颈块、大卷积核、GELU 激活和层归一化。隐藏维为768。
  - EAT：端到端波形 Transformer，包含1D卷积前端（用于时序压缩和局部特征提取）以及 Transformer 编码器（聚合帧级信息）。直接在原始波形样本上学习，而非使用固定的时频表示。隐藏维为768，接收 22.05 kHz 采样率的 5秒 波形。
  - BirdMAE：基于 Audio-MAE 范式的掩码自编码器，使用 ViT-B 架构处理对数梅尔谱块。在 XCL-1.7M 子集上使用鸟声适应的食谱（调整输入分辨率、掩码率、训练时长等）进行预训练，丢弃解码器后作为特征提取器。约 86M 参数。
  - ProtoCLR：基于 CvT-13 的混合模型，利用监督式原型对比学习预训练，旨在学习对声景录制域迁移鲁棒的表示。嵌入维度为 384，约 20M 参数。
  所有编码器在 LP 和 AP 下冻结，在 FT 下更新。
- 分类头：每个任务对应一个独立的线性层，将 \(d\) 维共享表示映射到对应类别数（物种205类，鸣声类型11类）。在注意力探测中，先通过多头注意力池化模块（参数量 \(2d^2 + (C+1)d + C\)）聚合时间维度信息。
- 损失平衡策略：
  - 固定加权（Naive）：使用验证集调优的固定系数 \(\lambda_{sp}=1.0\)，\(\lambda_{ct}=17.0\)。
  - 不确定性加权（Uncertainty）：学习对数方差参数 \(s_i\)，损失公式为 \(\mathcal{L}_{unc} = \sum_i (\exp(-s_i)\mathcal{L}_i + 0.5 s_i)\)，使高不确定性任务自动降权。
  - DWA：根据前两个 epoch 的损失比率 \(\rho_i(t-1) = \mathcal{L}_i(t-1) / \mathcal{L}_i(t-2)\) 计算相对下降速率，经温度系数 \(T=2.0\) 的 softmax 分配权重，令收敛慢的任务获得更大权重。
  - GradNorm：在每次迭代计算各任务关于共享参数的梯度幅值 \(G_i(t)\)，并定义目标梯度为 \(\bar{G}(t) \times [r_i(t)]^{\alpha}\)，其中 \(r_i(t)\) 为相对逆训练速率，\(\alpha=1.5\)。通过最小化 L1 损失来学习任务权重，强制平衡梯度贡献。训练后权重按任务数重归一化。仅适用于 FT，且因额外梯度计算开销，batch size 降至 8。
设计动机源于物种和鸣声类型这两个预测目标在类不平衡、声学可分性和收敛速度上的显著差异，简单的固定权重容易使某一任务主导优化，而自适应策略能根据优化过程中不断变化的难度动态调整。

### 💡 核心创新点

1. 首次在多任务鸟声分类中系统对比自适应损失平衡策略：将同方差不确定性、DWA 和 GradNorm 引入生物声学联合分类任务，进行统一、受控的对比评价，而此前该领域仅使用固定加权。
2. 深入刻画 WiWa 数据集的长尾与稀疏特性：从物种、鸣声类型及其联合分布三个层面量化分析了极端不平衡和高达 72.5% 的联合标签稀疏性，明确了该基准的实际挑战来源。
3. 揭示了因子分解多任务结构对鸣声类型的稳定增益：实验表明，将物种和鸣声类型拆分为两个独立头相比合并单任务基线，显著且一致地提升鸣声类型识别，且这种增益不依赖于特定的损失平衡策略。
4. 给出“冻结骨干优于全量微调”的反直觉证据：ConvNeXtBS 在线性探测下达到物种最高平均分，BirdMAE 在注意力探测下达到鸣声类型最高分，挑战了“微调总比冻结好”的默认假设，并讨论了性能-效率权衡。
5. 分析了自适应加权对两个任务的不对称收益：明确指出自适应加权对物种识别的提升更一致，并具体指出不确定性加权在注意力探测下表现最佳，DWA 在微调下表现最佳，而鸣声类型的收益则较小且更依赖骨干网络，为实践中的策略选型提供指导。

### 📊 实验结果

实验在 WiWa 基准的 test-5s 分区上以类别平均平均精度（cmAP）为主要指标。表 3 展示了各骨干在三种适应深度和三种损失加权（Naive, Unc, DWA）下的物种与鸣声类型 cmAP；表 4 补充了 GradNorm 在全量微调下的结果。

主要数值发现：
- 组合单任务基线（Combined）：ConvNeXtBS+FT 取得 0.3852，BirdMAE+AP 取得 0.4111。因子分解多任务在 鸣声类型上全面超越该基线，但在物种识别上，FT 设置下的多任务结果常低于对应的组合基线（需注意两者输出空间不同，并非严格可比指标）。
- 物种识别：ConvNeXtBS+LP 平均得分最高（0.4482），BirdMAE+AP+Uncertainty 达到单次最佳（0.4641）。总体上，冻结骨干（LP/AP）的物种识别性能显著优于全量微调。
- 鸣声类型识别：BirdMAE+AP+Uncertainty 获得单次最佳（0.5359），BirdMAE+AP 平均也最高（0.5300）。部分骨干（如 EAT, ProtoCLR）在 FT 下鸣声类型表现最好。
- 自适应加权效果：在物种任务上，自适应加权几乎在所有配置下都优于 Naive。在鸣声类型上，优势较小且不一致，部分配置（如 ConvNeXtBS+LP） Naive 仍为最优。
- GradNorm 表现（表 4）：在物种任务上全面劣于其他加权策略。鸣声类型上，仅在 ConvNeXtBS（0.5038）和 ProtoCLR（0.4647）上取得最佳，但此结果是以更高计算和内存开销为代价（batch size 降至 8）。

关键对比表已在上方核心摘要中完整呈现，此处不再重复表 3。表 4 数据如下：

| Backbone | Species cmAP (Naive/Unc/DWA/GradNorm) | Call-type cmAP (Naive/Unc/DWA/GradNorm) |
|----------|--------------------------------------|-----------------------------------------|
| ConvNeXtBS | 0.3095/0.3272/0.3322/0.2864 | 0.4946/0.4652/0.4736/0.5038 |
| EAT | 0.2027/0.2205/0.2223/0.1204 | 0.4416/0.4481/0.4495/0.3707 |
| BirdMAE | 0.2339/0.2769/0.2906/0.2014 | 0.4939/0.4916/0.4965/0.4648 |
| ProtoCLR | 0.2315/0.2535/0.2526/0.2311 | 0.4412/0.4622/0.4567/0.4647 |

作者未提供统计显著性检验（如置信区间或假设检验），仅报告三次种子运行的均值。

### 🔬 细节详述

- 训练数据：WiWa 数据集。训练集 143,904 条，是基于 BirdNET 检测并由专家验证的 23秒 片段（中心为 3秒 候选区），覆盖 205 个物种标签和 11 个鸣声类型标签，包含大量背景和硬负样例（VOX 片段）。测试集为 147 条被动声景录音，其中 test-5s 包含 4,868 个 5秒 多标签窗口。预处理：音频转单声道，重采样至对应编码器采样率（ConvNeXtBS/BirdMAE 32 kHz，EAT 22.05 kHz，ProtoCLR 16 kHz），截取或补零到所需时长（EAT/ConvNeXtBS/BirdMAE 5秒，ProtoCLR 6秒）。增强采用 BirdSet 风格，包括多音频混合（标签取并集）、加性背景噪声和彩色噪声、增益扰动，并加入无鸟叫的 VOX 片段作为硬负样本（对应全零目标向量）。

![Figure 2: Label imbalance in the processed WiWa training split: (a) species-level long-tail distribution; (b) biological call-type distribution on a logarithmic scale; and (c) combined-label long-tail distribution over biological species–call-type pairs. The nonbird background class is excluded from these biological analyses.](https://arxiv.org/html/2607.03304v1/x2.png)

论文对训练集的标签不平衡情况进行了详细可视化分析。如图所示，物种级别（a）、鸣声类型级别（b）以及联合标签（c）均呈现显著的长尾分布。

![Figure 3: Species–call-type co-occurrence matrix for the processed WiWa training split. Rows show the 60 biological species with the largest number of samples, and columns show the ten biological call types. Cell colours indicate ln(1+count). The nonbird background class is excluded. Across the full biological matrix, 561 of 2,040 possible species–call-type cells are observed, leaving 72.5% unobserved.](https://arxiv.org/html/2607.03304v1/x5.png)

论文进一步分析了物种与鸣声类型之间的稀疏共现关系。热力图展示了60个样本最多的物种与10种鸣声类型的共现频率（取对数）。可以看到，许多物种仅与少数鸣声类型共现，且大量可能的组合从未被观测到。在完整的生物标签矩阵中，有72.5%的物种-鸣声类型组合单元格未观察到数据，这为联合分类任务带来了显著的稀疏性挑战。

![Figure 4: Distribution of sufficiently represented biological call types per species in the processed WiWa training split. For each species, we count the number of call types with more than 25, 50, and 100 samples. The nonbird background class is excluded.](https://arxiv.org/html/2607.03304v1/x6.png)

此外，论文还统计了每个物种“足够有代表性”的鸣声类型数量。大多数物种拥有的具有充足样本（>25, >50, 或 >100）的鸣声类型数量非常有限，进一步量化了数据集在物种和鸣声类型两个维度上的严重不平衡。

- 损失函数：物种和鸣声类型均使用 BCEWithLogits。多任务聚合按四种策略加权。不确定性加权额外添加 \(\frac{1}{2}s_i\) 正则项。GradNorm 额外计算梯度幅度 L1 损失来更新任务权重，且权重每步重归一化。
- 训练策略：优化器为 AdamW，采用余弦学习率衰减（5% 线性预热），梯度裁剪 \(\ell_2 \le 0.5\)。各适应深度具体参数见表 1（原文 Table 1），如 LP/AP 学习率约 \(1\times10^{-3}\)，FT 约 \(5\times10^{-5}\)；batch size 通常为 32，但 GradNorm 因梯度计算开销降至 8。预训练权重来自 HuggingFace BirdSet 或 wandb。训练/验证按 80/20 分层划分，早停基于验证损失，阈值 STL 为 \(1\times10^{-4}\)，MTL 为 \(2\times10^{-4}\)。所有配置用 3 个随机种子评估，结果报告均值。先前工作中的固定权重和 Naive 配置保留了 2 个种子，新增 1 个种子；所有新配置（自适应加权）使用 3 个全新种子。
- 关键超参数：固定权重 \(\lambda_{sp}=1.0\), \(\lambda_{ct}=17.0\)；DWA 温度 \(T=2.0\)；GradNorm \(\alpha=1.5\)。
- 训练硬件：论文中未提及 GPU 型号、数量及训练时长。
- 推理细节：直接使用模型输出 logits 经 sigmoid 获得概率，未使用解码策略、束搜索或温度。

### ⚖️ 评分理由

*   创新性 (1.0/2)：论文将同方差不确定性、DWA 和 GradNorm 这三种已有多任务损失平衡方法应用于鸟声物种与鸣声类型联合分类，并进行系统对比，属于已知技术在特定场景的扎实组合。问题定义（关注鸣声类型而不仅限于物种）有新意，但方法层面零原创，未提出任何新的损失函数、平衡机制或学习架构，故给 1.0 分。

*   技术严谨性 (1.0/1.5)：损失策略的数学表述清晰，实验设计合理，对比了四种骨干、三种适应深度和四种加权，控制变量较好。但存在明显不足：所有结论仅基于三次运行的均值，未做任何统计显著性检验，难以判断微小的cmAP提升是否源于随机波动；GradNorm 因计算开销将 batch size 降至 8，与其他策略的优化条件不同，这种差异带来的公平性问题被完全忽略；对固定权重 1:17 的来源仅有模糊的“验证集调优”描述，无调优范围、过程或敏感性分析，其作为强基线的可靠性存疑。因此扣分。

*   实验充分性 (1.1/1.5)：实验覆盖了充分的组合（4骨干×3适应×4加权），且在统一基准上给出 cmAP，指标选择合理，增加了对 GradNorm 的专门分析。不足之处在于：仅在 WiWa 一个数据集上评估，结论泛化性存疑；对 DWA 温度 \(T\)、GradNorm \(\alpha\) 等核心超参数未进行敏感性分析；未报告精确率/召回率具体构成或混淆矩阵；未分析类别层面的性能以解释长尾影响；虽然比较了组合单任务基线，但未设置仅用单种标签（如仅物种或仅鸣声类型）训练的纯多任务基线，以完全解耦“多任务学习范式”与“额外标签信息”带来的增益。

*   清晰度 (0.8/1)：论文结构清楚，公式解释到位，图表（标签分布、共现矩阵）直观。但实验设置中未提及训练硬件细节，固定权重调优细节交代不足。整体阅读流畅，信息易于检索。

*   影响力 (0.6/1.5)：对生物声学这一小众细分领域提供了有价值的实证参考，有助于指导实际监测系统的多任务训练。然而，其方法贡献未超越已有的 MTL 平衡文献，很难对主流语音、音频或通用机器学习研究产生直接推动。数据集未公开（需申请）也限制了社区的即时验证和后续研究。结合作者机构知名度一般，影响力有限。

*   开源 (0.2/1.5)：论文声称完整的实验配置和训练日志将在接收后通过 Weights & Biases 公开，但当前无任何公开代码仓库链接、无模型权重下载、无数据集直接获取方式（需向数据提供方 OekoFor GbR 申请）。论文未提供具体 GitHub 或 HuggingFace 地址，无法验证开源承诺是否已落实，故给较低的承诺分。

*   可复现性 (0.4/0.5)：训练超参数、数据预处理、增强策略、模型配置等以文字和表格详细描述，原则上足以复现。但缺少硬件环境、训练时长和具体随机种子值设定，稍有不足。

*   工程/实践价值 (1.0/1.5)：论文建立了从数据特性分析、特征提取、多任务建模到评估的完整 pipeline，详细报告了不同骨干在资源受限场景下的性能与效率权衡（冻结 vs. 微调），对实际部署有参考价值。WiWa 基准的长尾分析也有助于其他研究者理解数据特性。然而，缺乏部署级别的工程优化（如推理延迟、模型压缩）和生产级工具链的讨论。

### 🚨 局限与问题

论文明确承认的局限（论文 Section 6.6）：
- 仅在单一数据集 WiWa 上评估，结论泛化性未知。
- 组合单任务与因子化多任务的输出空间不同，不能进行严格的等价指标比较，两者应视为互补证据。
- GradNorm 仅在可训练共享参数的全量微调下可用，且需降低 batch size，使其在计算开销和适用性上受限。
- 各类别掩蔽策略可能使没有正样本的类别影响 cmAP 平均值（该类设为 0），未来应直接排除。
- 不同骨干的输入规格（采样率、时长）不同，结果反映的是完整处理管线的性能而非纯架构差异。

审稿人发现的潜在问题：
- 缺乏统计显著性检验是致命伤：任何仅靠零点几个 cmAP 差值得出的“优越”或“更一致”结论，在均值差异如此小且无方差信息的情况下，都可能是噪声。这使得论文大量对比性结论的说服力大打折扣。
- 固定权重基线可能偏弱：权重 1:17 来源于先前工作，但论文未证明它是当前设置下的最优配置。若该权重对物种或鸣声类型有明显偏向性，则自适应策略带来的“一致提升”可能被夸大。对该基线进行消融或敏感性分析是必要的。
- GradNorm 对比的公平性：为适应其计算开销而将 batch size 降至 8，改变了优化动态（噪声、收敛速度），使其与其它使用 batch 32 的策略不严格可比。其低迷表现可能部分源于优化条件差异，而非策略本身的问题。
- 结论强度过高：论文声称“自适应加权对物种识别的好处比鸣声类型更一致”，但表格中很多情况下 Naive 的表现与自适应加权差距极小（如 EAT+LP 的物种 cmAP 差 0.005），在无显著性检验的情况下，此结论有过度推广之嫌。
- 未探讨梯度冲突：论文仅关注了任务损失的幅度和速率平衡，但未分析两个任务梯度在方向上的冲突（如余弦相似度），这是多任务学习中更深层次的优化问题，其忽略导致对 MTL 动态的分析不够深入。

---

[← 返回 2026-07-07 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-07/)
