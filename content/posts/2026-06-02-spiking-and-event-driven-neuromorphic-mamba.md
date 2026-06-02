---
title: "Spiking and Event-driven Neuromorphic Mamba Models for Efficient Speech Recognition"
date: 2026-06-02
draft: false
tags: [语音识别, 模型压缩]
categories: [论文速递]
description: "语音识别 | 7.5/10"
hiddenInHomeList: true
---

# 📄 Spiking and Event-driven Neuromorphic Mamba Models for Efficient Speech Recognition

#语音识别 #模型压缩

**7.5/10** | 创新 1.3/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 清晰 1/1 | 影响 0.6/1.5 | 开源 1/1.5 | 复现 0.5/0.5 | 工程 0.7/1.5

✅ **7.5/10** | 前50% | #语音识别 | #模型压缩 | [arxiv](https://arxiv.org/abs/2606.01135)


### 👥 作者与机构

Tauseef Ahmed (单位1, 2, 3)，Tao Sun (单位1)，Jeronimo Castrillon (单位3, 4)，Kanishkan Vadivel (单位2)，Guangzhi Tang (单位1)。论文中未具体说明单位1、2、3、4对应的具体机构名称。
基金支持：NGF.1609.243.044 (AiNed XS Europe), 01IS18026A-D (ScaDS.AI), 101226463 (MSCA Doctoral Network REACT)。

### 💡 毒舌点评

这篇文章就像是在已经很精巧的SpeechMamba模型上，分别用“事件驱动”的扳手和“脉冲”的锤子敲敲打打，宣称能省力不少。E-SpeechMamba的62%稀疏度和<1%的精度损失（注意，是相对基线提升0.9% WER，非绝对值）看起来是个不错的工程权衡，但S-SpeechMamba高达4.71%的test-clean WER，在当前ASR追求极致准确的背景下，实用性令人怀疑。最大的亮点，或者说最“实在”的贡献，反而是那个RISC-V模拟器，它冷静地揭示了“算法稀疏度高≠硬件快”的尴尬现实，特别是LIF神经元维护膜电位的内存开销问题。这本该是全文的重点，但论文似乎更急于推销两个稀疏化变体。整体来看，这是一篇扎实的系统性探索工作，为神经形态ASR提供了有价值的工程数据和硬件分析视角，但其声称的“高效”和“竞争性性能”需要放在更严苛的实际部署场景中打折扣。

### 📌 核心摘要

本文针对自动语音识别（ASR）在边缘设备上的高计算与能耗问题，探索了在先进的SpeechMamba模型上应用脉冲（Spiking）和事件驱动（Event-driven）两种神经形态策略以提升激活稀疏度。主要贡献包括：1）提出事件驱动SpeechMamba（E-SpeechMamba），通过插入FATReLU激活和多阶段训练，实现超过60%的激活稀疏度，且在LibriSpeech上WER相比基线仅增加约0.9%（test-clean: 3.20% vs 2.32%）；2）提出脉冲SpeechMamba（S-SpeechMamba），使用二进制脉冲和稀疏性训练，实现超过70%稀疏度，并在参数量减少30%的情况下，性能与可比的SNN（如IML-Spikeformer）竞争；3）开发了一个基于RISC-V Ibex核心的周期精确、事件驱动数据流模拟器，用于算法-硬件协同探索。利用该模拟器，论文揭示了算法稀疏度与真实硬件效率（如CPU周期、内存访问）之间的差距，例如LIF神经元维护膜电位的开销会抵消其更高稀疏度的优势，并通过在模拟器上分析识别计算瓶颈，对E-SpeechMamba进行了进一步优化，获得了额外超过10%的效率提升。

### 🔗 开源详情

- 代码：https://github.com/ERNIS-LAB/speech-asr-neuromorphic-mamba （论文提供链接）
- 模型权重：未提供
- 数据集：LibriSpeech （使用公开数据集，但未提供具体下载链接或复现脚本）
- Demo：未提及
- 复现材料：提供了部分训练配置细节（如随机种子、优化器参数、学习率调度），但未明确提供完整的复现材料包（如配置文件、检查点、依赖清单）。
- 论文中引用的开源项目：
    - SpeechMamba: 未提供链接
    - SpikMamba: 未提供链接
    - Spikformer: 未提供链接
    - SpeechBrain: 未提供链接
    - lowRISC GCC-based toolchain: 未提供链接
    - SENECA: 未提供链接
    - SpiNNaker2: 未提供链接
    - PyCARL: 未提供链接

### 🏗️ 方法概述和架构

本文基于SpeechMamba（一种融合Mamba块与自注意力的混合SSM-Transformer ASR模型）进行探索，提出了两种神经形态变体及一个硬件仿真工具。

1. 事件驱动SpeechMamba (E-SpeechMamba)
E-SpeechMamba通过引入激活稀疏性来支持事件驱动计算。其核心是在SpeechMamba架构的关键点插入FATReLU激活函数。FATReLU是一个带可学习阈值\(T\)的参数化ReLU变体，其定义为：当输入\(x \geq T\)时输出\(x\)，否则输出0。为实现高稀疏度且最小化精度损失，论文提出三阶段训练流程：
- 第一阶段：ReLU预训练。在SpeechMamba的线性层、卷积层和SSM块之后插入标准ReLU激活，并加入稀疏性损失函数进行预训练。插入点经过选择，以保留SSM矩阵（AA, BB, CC, DD）的学习动态。
- 第二阶段：FATReLU阈值初始化。将ReLU替换为FATReLU。采用数据驱动的阈值扫描策略：在代表性训练数据上，以预训练模型计算基准损失；在每个FATReLU层收集激活统计，将初始阈值\(T\)设置为最低10%激活值的均值。随后逐步提高阈值（扫描更高分位数），只要归一化损失比（`updated_loss`/`base_loss`）低于预设容忍度\(K\)，就接受该阈值增加。
- 第三阶段：FATReLU阈值微调。在训练中引入包含稀疏性正则项的损失函数。稀疏性损失\(L_{\mathrm{spar}}\)定义为：\(L_{\mathrm{spar}} = \sum_{i} \left( \text{FATReLU}(\mathbf{x}_{i}) + \left( \frac{1}{T_{i}} \right)^{2} \right)\)，其中\(i\)索引所有FATReLU层。该项同时惩罚大激活值和小阈值，促进激活置零。

此外，论文后续通过模拟器分析，在Mamba块中进一步添加了FATReLU点，形成了优化后的E-SpeechMamba (Optimized)。

2. 脉冲SpeechMamba (S-SpeechMamba)
S-SpeechMamba采用泄漏积分发放（LIF）神经元产生二进制脉冲。它替换了E-SpeechMamba中的事件驱动Mamba模块，转而采用SpikMamba架构。同时，注意力模块借鉴Spikformer设计：输入特征经线性投影、归一化和LIF层生成脉冲Q/K/V。注意力计算采用缩放点积相似度（无softmax），应用于脉冲V以聚合上下文信息。
训练时引入发放率正则化以平衡稀疏性和训练效果，包含两个分量：
- \(L_{\text{quiet}} = \frac{1}{L}\sum_{l=1}^{L} \max\left(0, r_{\min} - \bar{r}^{(l)}\right)\)：防止发放率过低（死神经元）。
- \(L_{\text{burst}} = \frac{1}{L}\sum_{l=1}^{L} \max\left(0, \bar{r}^{(l)} - r_{\max}\right)\)：防止发放率过高（降低稀疏度）。
其中\(\bar{r}^{(l)}\)是第\(l\)个脉冲层的平均发放率，\(r_{\min}\)和\(r_{\max}\)为预设的目标发放率范围。

3. 事件驱动神经形态模拟器
开发了一个支持操作级、事件驱动数据流执行的周期精确模拟器，运行在RISC-V Ibex核心上。该模拟器模拟了通用数字神经形态处理器（如SENECA， SpiNNaker2）的行为。
- 功能：它处理原子输入事件（如单个脉冲/像素），逐层生成部分和并立即转发，能精确捕获非结构化激活稀疏性带来的计算和内存访问收益。对于SNN，它能优化二进制脉冲与实值权重的乘累加操作（跳过零乘，传播一值权重）。
- 编译与执行：模型被适配到模拟器的数据流，使用lowRISC GCC工具链编译，在建模RV32IMC Ibex核心的Verilator模拟器上执行，可提供详细的性能计数器（CPU周期、指令数、内存访问次数、延迟）。
该模拟器弥补了现有模拟器在灵活性与硬件准确性之间的空白，支持对新型神经形态架构的快速探索。

组件交互与数据流：E-SpeechMamba/S-SpeechMamba模型首先在通用框架（SpeechBrain）中训练。然后，模型被适配并编译到RISC-V Ibex模拟器环境。模拟器执行事件驱动的数据流，模型各层仅在接收到来自前层的非零“事件”（激活值或脉冲）时才触发计算，并更新相应的性能指标。通过分析这些指标，可以识别热点（如SSM Scan模块），指导在E-SpeechMamba中添加额外FATReLU点以进行架构优化，形成“分析-优化-验证”的协同设计闭环。

![图1](https://arxiv.org/html/2606.01135v1/encoderdecoderblock2.png)

![图2](https://arxiv.org/html/2606.01135v1/improvedannblock.png)


### 💡 核心创新点

1.  系统性对比两种神经形态策略：首次在SpeechMamba这一先进的SSM-T混合ASR模型上，系统性地实现并对比了事件驱动（基于FATReLU）和脉冲（基于LIF神经元）两种主流神经形态实现路径在ASR任务上的效果（稀疏度、精度、效率）。
2.  多阶段训练流程与稀疏性训练：为E-SpeechMamba设计了从ReLU预训练、数据驱动FATReLU阈值初始化到稀疏性正则化微调的三阶段流程，旨在最大化激活稀疏度同时控制精度下降。为S-SpeechMamba引入了平衡的发放率正则化损失（\(L_{\text{quiet}}\)和\(L_{\text{burst}}\)）。
3.  灵活、硬件准确的模拟器：开发了一个支持操作级事件驱动仿真的周期精确模拟器，弥补了现有模拟器在灵活性（支持新架构）和硬件准确性（提供系统级指标）方面的不足。该模拟器使研究能够深入分析算法稀疏度与真实硬件性能（如内存访问开销）之间的差距，并指导架构优化。

### 📊 实验结果

所有实验在LibriSpeech数据集上进行（使用约980小时的全部训练数据）。主要结果对比如下表：

表 I：在LibriSpeech上与最先进方法的比较（WER越低越好，稀疏度越高越好）

| Model | WER (%) | # Params (M) | Sparsity (%) | dev-clean | dev-other | test-clean | test-other |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Whisper-Large-V2[20] | – | – | – | 2.7 | 5.2 | 1550 | – |
| Pruned Conformer[11] | – | – | – | 3.27 | 6.89 | 71.5 | 50 |
| SpeechMamba[7] | 2.16 | 5.13 | 2.32 | 5.23 | 67.6 | – |
| Spike-driven Transformer[32] | 8.7 | 20.7 | 8.9 | 22.3 | 99.4 | – |
| IML-Spikeformer[22] | 3.1 | 8.3 | 3.4 | 7.9 | 99.4 | – |
| Base Model (SpeechMamba)<br>with naive sparsification | 2.30 | 5.51 | 2.47 | 5.86 | 67.6 | 20 |
| E-SpeechMamba | 2.90 | 7.40 | 3.20 | 7.80 | 67.6 | 62 |
| S-SpeechMamba | 4.27 | 9.34 | 4.71 | 9.98 | 67.8 | 72 |
| E-SpeechMamba (Optimized) | 3.10 | 7.80 | 3.60 | 8.30 | 67.6 | 64 |

*   稀疏度与精度权衡：E-SpeechMamba达到62%平均稀疏度，test-clean WER为3.20%，相比基线（naive sparsification）的2.47%增加了0.73个百分点（相对提升约30%），而非绝对意义上的“<1%精度损失”（原文陈述为“less than 1% accuracy degradation on LibriSpeech”，结合表格应理解为相对基线WER的增幅小于1个百分点，但实际0.73个百分点在严格意义上可视为接近1%）。S-SpeechMamba达到最高稀疏度72%，但test-clean WER显著升高至4.71%。优化后的E-SpeechMamba稀疏度为64%，WER略高于原版。
*   与SOTA对比：与IML-Spikeformer（SNN）相比，S-SpeechMamba参数量更少（67.8M vs 99.4M），但WER明显更高（4.71% vs 3.4%）。论文声称其性能“competitive”，需谨慎看待，因WER差距显著。

表 II：相对于基线模型的模拟硬件效率指标提升百分比

| Model | CPU Cycles | CPU Inst. | Memory Acc. | Latency |
| :--- | :--- | :--- | :--- | :--- |
| E-SpeechMamba | 32.32 | 14.30 | 17.57 | 29.78 |
| S-SpeechMamba | 19.58 | 14.0 | 7.63 | 17.9 |
| E-SpeechMamba (Optimized) | 46.13 | 26.9 | 28.50 | 37.5 |

*   模拟器分析关键发现：
    1.  算法稀疏度与硬件收益不匹配：E-SpeechMamba的CPU周期改进（32.32%）并不与其62%的平均稀疏度成正比。原因在于：a) 各FATReLU点稀疏度不均，高维低稀疏点限制了整体收益；b) Mamba块中存在无法稀疏化的关键操作（如SSM Scan模块的输入）。
    2.  脉冲神经元的内存开销：尽管S-SpeechMamba平均稀疏度更高（72%），其CPU周期改进（19.58%）和内存访问改进（7.63%）均低于E-SpeechMamba。论文指出，这是因为LIF神经元需要额外的内存加载/存储操作来维护膜电位状态，这一开销抵消了更高稀疏度带来的计算节省。这表明事件驱动方法在内存带宽受限时可能更优。
    3.  优化效果：通过模拟器分析识别Mamba块内的计算热点（如SSM Scan和若干矩阵乘法），并针对性地在E-SpeechMamba中添加额外FATReLU点，优化后的模型在所有指标上均获得显著额外提升（如CPU cycles提升达46.13%）。

*   模块级分析：图4展示了编码器Mamba块内不同子模块的CPU周期分布。基线模型中SSM Scan等模块是主要热点。E-SpeechMamba降低了这些热点的周期占比，但仍有优化空间。优化后的E-SpeechMamba在这些关键子模块上实现了进一步大幅降低，验证了模拟器驱动的协同设计有效性。

![图3](https://arxiv.org/html/2606.01135v1/plotfinal.png)

![图4](https://arxiv.org/html/2606.01135v1/baseperformance.png)


### ⚖️ 评分理由

*   创新性 (1.3/2)：工作具有明确的应用价值和系统性。创新点在于将两种神经形态策略系统性地应用于新兴的SpeechMamba模型，并通过自研模拟器揭示了被忽视的硬件实现开销问题。然而，核心模型（SpeechMamba）和稀疏化技术（FATReLU， LIF）均非本文原创，创新主要体现在组合、适配与实证分析上。
*   技术严谨性 (1.2/1.5)：方法描述清晰，训练流程（特别是三阶段训练）和模拟器设计有合理细节。实验设计覆盖了关键维度（稀疏度、精度、多种硬件指标），并通过对比分析揭示了重要现象。不足之处在于对FATReLU阈值初始化中的容忍度\(K\)、\(r_{\min}\)/\(r_{\max}\)等关键超参数的选择依据和敏感性讨论不足；模拟器的验证仅基于Ibex核心，其对更复杂神经形态架构的代表性未深入讨论。
*   实验充分性 (1.2/1.5)：实验在标准数据集LibriSpeech上进行，使用了完整的训练集，报告了清晰的WER和稀疏度指标。模拟器提供了多角度的效率度量。然而，所有结果仅限于模拟，未在真实硬件（FPGA或ASIC）上验证。与IML-Spikeformer的对比中，参数量和WER差距明显，“竞争性性能”的声明需加限定条件。缺乏对训练过程中稀疏度、损失曲线等变化的分析。
*   清晰度 (1.0/1.5)：论文结构合理，技术细节（模型修改、训练流程、模拟器）基本阐述清楚。图表（图1， 2， 3， 4）辅助理解。但部分关键信息分散，如S-SpeechMamba的完整架构（结合SpikMamba和Spikformer的部分）未在一张图中清晰展示；表格I中“Base Model (SpeechMamba) with naive sparsification”的具体含义（如何“naive sparsify”）需要结合文本理解。
*   影响力 (0.6/1.5)：工作对语音识别领域的边缘部署有启示意义，特别是通过模拟器强调了硬件感知优化的重要性。主要贡献更偏向于神经形态计算社区（ASR作为应用案例），���纯语音识别算法社区的直接冲击力有限。文中揭示的“算法稀疏度vs硬件性能”差距是普适性观察，影响力可能超出ASR范畴。
*   开源 (1.0/1.5)：论文提供了代码仓库链接（GitHub），但代码的实际可用性、完整性和文档质量未在文中说明。未提供模型权重。因此，开源情况属于“提供代码但需自行评估”的状态。
*   可复现性 (1.3/1.5)：论文提供了详细的训练配置（优化器、学习率、随机种子、epoch数等），使用了公开数据集LibriSpeech，并提供了代码链接。然而，依赖未开源的SpeechMamba基线模型权重（需自行获取），且模拟器环境搭建可能有一定门槛。整体上，对于具备相关背景的研究者，可复现性较高。
*   工程/实践价值 (0.7/1.0)：工作具有明确的工程导向，提出了具体的模型优化变体，并开发了实用的模拟器用于探索。所揭示的硬件实现问题和优化方法对实际的神经形态芯片设计和部署有参考价值。然而，缺乏真实硬件上的功耗和延迟实测数据，使得实践价值仍停留在模拟阶段。

#

### 🚨 局限与问题

1.  硬件验证缺失：所有效率结论均基于自研模拟器。模拟器虽声称周期精确且事件驱动，但其对真实神经形态处理器（如不同内存层次、总线竞争、调度策略）的建模深度有限。结论的可靠性最终需要真实芯片验证。
2.  “竞争性性能”的模糊性：S-SpeechMamba与IML-Spikeformer的对比中，参数量更少但WER显著更高（4.71% vs 3.4%），仅凭“competitive”一词可能误导读者。应更客观地界定其适用场景（如对功耗/面积极度敏感、可容忍较高错误率的边缘应用）。
3.  优化方法的泛化性：模拟器驱动的优化（添加FATReLU点）是针对Mamba块中SSM Scan热点的特定调整。该优化策略是否可推广到其他网络架构或任务，未进行讨论。
4.  稀疏度度量的局限性：主要报告“平均激活稀疏度”。但稀疏度的分布（如图3所示）对硬件效率影响巨大，平均值可能掩盖了关键信息。未来工作应更系统地分析稀疏度模式。
5.  训练成本与流程复杂性：E-SpeechMamba的三阶段训练流程（预训练、阈值初始化、微调）增加了训练复杂度和时间成本。论文未提供具体的训练时间对比或讨论其是否适用于大规模模型。
6.  基线选择的局限性：与S-SpeechMamba对比的“可比SNN”仅选择了IML-Spikeformer。缺乏与更近期或针对ASR优化的脉冲模型对比，以全面评估其竞争力。
7.  对SSM模块稀疏化挑战的讨论不足：论文指出对SSM Scan模块输入进行稀疏化会导致精度显著下降，因此保留了这部分密集计算。这一现象值得更深入的分析：是SSM动态特性对输入连续性要求高？还是现有稀疏化技术不适用？这限制了进一步提升硬件效率的空间。

### 📷 论文图片

![图5](https://arxiv.org/html/2606.01135v1/hybridperformance.png)


---

[← 返回 2026-06-02 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-06-02/)
