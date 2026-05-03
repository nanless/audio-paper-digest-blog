---
title: "Learnable Fractional Superlets with a Spectro-Temporal Emotion Encoder for Speech Emotion Recognition"
date: 2026-05-04
draft: false
tags: [语音情感识别, 时频分析, 端到端, 可解释性, 计算复杂度]
categories: [iclr-2026]
description: "语音情感识别 | 8.0/10"
hiddenInHomeList: true
---

# 📄 Learnable Fractional Superlets with a Spectro-Temporal Emotion Encoder for Speech Emotion Recognition

#语音情感识别 #时频分析 #端到端 #可解释性 #计算复杂度

🔥 **8.0/10** | 前25% | #语音情感识别 | #时频分析 | #端到端 #可解释性

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高

### 👥 作者与机构

- 第一作者：Alaa Nfissi（Data Science Laboratory (DOT-Lab), Université TÉLUQ；Concordia Institute for Information Systems Engineering, Concordia University）
- 通讯作者：未说明
- 作者列表：Alaa Nfissi（Data Science Laboratory (DOT-Lab), Université TÉLUQ；Concordia Institute for Information Systems Engineering, Concordia University）、Wassim Bouachir（Data Science Laboratory (DOT-Lab), Université TÉLUQ）、Nizar Bouguila（Concordia Institute for Information Systems Engineering, Concordia University）、Brian Mishara（Psychology Department, University of Quebec at Montreal；Center for Research and Intervention on Suicide, Ethical Issues and End-of-Life Practices）

### 💡 毒舌点评

亮点在于从第一性原理出发，将时频分析中的“阶数”从固定设计变量变为端到端可学习参数，理论推导和实现细节严谨，堪称一篇“教科书式”的信号处理与深度学习结合论文。短板则在于“可学习”换来了理论的优美和性能的提升，却也带来了显著高于经典前端的计算开销（论文实测LFST+STEE比STFT+STEE慢约34倍），这在追求高效部署的语音情感识别场景中是一个需要权衡的现实问题。

### 🔗 开源详情

- 代码：论文提供了GitHub仓库链接：https://github.com/alaaNfissi/LFST-for-SER。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：IEMOCAP和EMO-DB为公开数据集；NSPL-CRISE为私有数据集，论文未说明公开获取方式。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了极其详细的复现信息，包括：1）完整的算法伪代码（附录C）；2）关键超参数设置（表8）；3）训练和评估协议（附录H）；4）所有组件的技术细节和数学推导（附录B）。这些信息足以支持复现。
- 论文中引用的开源项目：论文未明确列出依赖的外部开源项目，但提及了基于PyTorch实现。

### 📌 核心摘要

1.  要解决什么问题：传统语音情感识别（SER）前端如STFT和小波变换在时频分辨率上存在固定权衡，无法自适应调整；而先前的“Superlet”方法依赖整数阶和手动调参，限制了其灵活性和性能。
2.  方法核心是什么：本文提出“可学习分数阶Superlet变换（LFST）”，这是一种完全可微分的前端。它通过可学习的Softmax权重对离散整数阶的小波响应进行加权几何平均，实现了连续的分数阶表示。同时，LFST联合优化单调对数频率网格、频率依赖的基础周期数以及分数阶权重。此外，设计了“谱时域情感编码器（STEE）”来处理LFST输出的幅度和相位一致性双通道图谱。
3.  与已有方法相比新在哪里：首次将分数阶Superlet框架设计为完全可学习、端到端训练的模块，实现了时频分辨率权衡的数据驱动优化。相比固定前端（STFT、小波）和先前的非可微分数阶Superlet，LFST能学习更适合情感任务的时频表示。相比其他可学习前端（如LEAF），LFST引入了基于小波理论的多阶混合机制。
4.  主要实验结果如何：在三个数据集（IEMOCAP， EMO-DB， NSPL-CRISE）上，LFST+STEE系统均取得了最佳性能。例如，在NSPL-CRISE电话语音数据集上，准确率达到76.9%，F1值为76.6%，分别比次优基线（Fixed superlet+STEE）高出2.0和1.9个百分点。在IEMOCAP和EMO-DB上也分别达到了87.5%和91.4%的准确率。容量匹配的消融实验（表3）表明，LFST前端在所有数据集上均优于STFT、小波、固定Superlet和LEAF前端。
5.  实际意义是什么：为语音情感识别提供了一种理论更扎实、可解释性更强的前端特征提取方法。LFST学习到的频率依赖阶数分布（如图5所示）与语音声学知识相符（低频更注重时域精度捕捉韵律，中高频更注重频域精度捕捉共振峰），证明了模型的可解释性。该工作启发了在其他音频任务中设计和学习可微分时频表示。
6.  主要局限性是什么：LFST前端的计算复杂度显著高于传统STFT和部分可学习前端（如LEAF）。论文附录D的基准测试显示，LFST+STEE的FLOPs（201.5 GF）是STFT+STEE（0.36 GF）的560倍，是LEAF+STEE（44.5 GF）的4.5倍，且延迟和内存占用也更高，这限制了其在资源受限或实时应用中的部署。

### 🏗️ 模型架构

整个系统由前端LFST和后端STEE编码器组成，端到端处理原始波形，输出情感分类。

LFST前端：
1.  输入：原始波形 `x` 和长度掩码 `m`。
2.  频率网格生成：通过学习对数空间中的正增量 `δ_j`（由Softplus参数化并归一化），生成严格单调且端点固定的频率网格 `{f_i}`。
3.  多阶小波卷积：对于每个频率 `f_i` 和每个离散阶数 `o ∈ {1,...,O}`，构建基础周期数 `c1(f_i)`（学习得到，≥1），进而得到 `co(f_i)=o·c1(f_i)`。使用DC校正的解析Morlet小波 `ψ_{f_i, c_o}` 与输入进行卷积，得到复数值响应 `W_{i,o}`。
4.  可学习分数阶聚合：对于每个频率 `f_i`，通过学习的对数权重 `θ_{i,o}` 和Softmax得到阶数权重 `w_{i,o}`。计算加权对数几何平均，得到幅度图 `S_{f_i}(t)` 和有效阶数 `oeff(f_i)`。同时，计算加权单位相位和的模，得到相位一致性图 `κ_{f_i}(t)`。
5.  可学习非对称硬阈值化（LAHT）：对幅度图 `S` 应用LAHT模块进行去噪，抑制低能量激活。其阈值 `τ_+` 是可学习的，并通过双Softplus和Tanh结构确保为正。
6.  输出：双通道TF图 `S^2 = [S; κ]`、有效阶数 `oeff` 和掩码 `m`。

STEE编码器：
1.  输入：`S^2`, `oeff`, `m`。
2.  时间维度深度卷积主干：使用仅沿时间轴的深度卷积（`1 × k_t`）提取局部时序模式，后���点卷积混合通道。
3.  频谱残差块：使用沿频率轴的深度卷积（`k_f × 1`）并加入残差连接，捕捉跨频段的短程相关性。
4.  TF混合残差块+SE：并行使用时间和频率维度的深度卷积分支，求和后通过点卷积混合，并应用通道注意力（SE模块）进行全局校准。
5.  自适应FiLM频率门控：利用LFST的副产品（`S` 和 `κ` 在时间上的均值与标准差，以及 `oeff`）通过一个小MLP生成每个频段的通道门控信号，乘性调制编码器特征。
6.  时间下采样与轴向自注意力：沿时间步长下采样，将特征在频率维度上平均后，应用沿时间轴的局部多头自注意力，建模长程依赖。
7.  注意力统计池化与分类：再次在频率上平均，应用注意力统计池化（加权均值和标准差拼接）得到固定长度的嵌入 `z`，最后通过线性分类器输出情感类别。

![LFST前端架构图](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/uZGEEL20mU-9.png)

图1：LFST前端示意图，展示了可学习的对数频率网格、Softmax阶数权重生成有效阶数，以及幅度S和相位一致性κ的计算过程。

![STEE编码器架构图](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/uZGEEL20mU-8.png)

图2：STEE编码器架构图，展示了从双通道TF图输入到最终分类输出的完整数据流，包括深度卷积主干、残差块、FiLM门控、自注意力等模块。

![FiLM门控详细结构](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/uZGEEL20mU-2.png)

图3：自适应FiLM频率门控的详细结构图，展示了如何从S和κ的统计量以及有效阶数`oeff`中生成通道调制信号。

### 💡 核心创新点

1.  可学习的分数阶Superlet变换（LFST）：这是核心理论贡献。它首次将分数阶Superlet（FSLT）从一种固定的信号处理工具，重构为一个完全可微分、参数可学习的神经网络前端。通过在离散整数阶上学习Softmax权重，实现了连续分数阶的表示，并同时学习频率网格和小波周期参数，使得时频分辨率权衡能够根据数据和任务进行端到端优化。
2.  相位一致性（κ）通道的引入与利用：除了幅度谱，LFST显式计算并输出了一个衡量各阶响应相位对齐程度的通道 `κ`。在SER中，相位信息以往常被忽略。实验证明，`κ` 为编码器提供了互补的结构信息，在嘈杂条件下尤其有效，显著提升了模型性能。
3.  可学习非对称硬阈值化（LAHT）：为LFST输出的幅度图设计了一个可微分的稀疏化去噪模块。它通过学习阈值来抑制TF激活中的噪声，同时保留瞬态信息，并通过平滑的Sigmoid门控保证梯度流动，起到了自适应特征选择的作用。
4.  紧凑的谱时域情感编码器（STEE）设计：STEE并非简单堆砌标准模块，而是针对LFST的双通道输出和有效阶数信息进行了定制化设计，如自适应FiLM门控直接调制特征以适应不同的时频分析配置，在保证参数高效的同时有效利用了前端的丰富信息。

### 🔬 细节详述

- 训练数据：在三个数据集上评估：IEMOCAP（约12小时，4类情感），EMO-DB（535条，7类情感），NSPL-CRISE（2999条电话语音，5类情感）。预处理包括重采样至16/8 kHz、峰值归一化、批量内最大长度填充并使用掩码。
- 损失函数：使用带类别平衡的焦点损失（Focal Loss），聚焦参数γ=2，类别权重 `α_y ∝ 1/freq(y)`。
- 训练策略：AdamW优化器，学习率1e-3并采用余弦衰减，权重衰减1e-4。使用混合精度训练和梯度裁剪（±1.0）。训练50个epoch，采用早停策略。批次大小为16（因数据集而异）。
- 关键超参数：
    - LFST：频率带数F=96，最大阶数O=8，Morlet小波窗口长度L=1024，带宽常数ksd=5，稳定性常数ε=1e-12，初始基础周期c1=1.5。
    - LAHT：Sigmoid斜率γ=8，偏置界限bmax=5。
    - STEE：基础通道数C=128，时间核大小k_t=9，频率核大小k_f=5，轴向注意力头数=4，注意力窗口=128，Dropout率=0.10。
- 训练硬件：未在正文中明确说明，根据实验规模推测为GPU。
- 推理细节：采用标准的前向传播，使用掩码处理变长输入。
- 正则化或稳定训练技巧：LFST中对数聚合时使用小常数ε并限制指数上限；LAHT阈值通过双Softplus确保为正；编码器中使用Dropout和层归一化。

### 📊 实验结果

论文在三个数据集上报告了主要结果，并进行了系统对比和消融实验。

主要性能对比（表2）：

| 数据集 | 方法 | 准确率 (%) | F1分数 (%) |
| :--- | :--- | :--- | :--- |
| NSPL-CRISE | Mirsamadi et al. | 51.3 | 52.1 |
| | Li et al. | 68.7 | 69.3 |
| | Chen et al. | 59.6 | 60.2 |
| | Zhao et al. | 67.2 | 67.9 |
| | LFST+STEE (ours) | 76.9 | 76.6 |
| IEMOCAP | Mirsamadi et al. | 63.5 | 63.8 |
| | Li et al. | 81.6 | 82.1 |
| | Chen et al. | 64.8 | 65.2 |
| | Zhao et al. | 52.1 | 52.4 |
| | LFST+STEE (ours) | 87.5 | 86.8 |
| EMO-DB | Liu et al. | 89.13 | 89.4 |
| | Tuncer et al. | 88.35 | 88.35 |
| | Ancilin et al. | 81.5 | N/A |
| | LFST+STEE (ours) | 91.4 | 90.4 |

容量匹配消融实验（表3）：所有前端使用相同的STEE编码器。
| 数据集 | 方法 | 准确率 (%) | F1分数 (%) |
| :--- | :--- | :--- | :--- |
| NSPL | STFT+STEE | 73.1 | 72.7 |
| | Wavelet+STEE | 74.6 | 74.6 |
| | Fixed superlet+STEE | 74.9 | 74.7 |
| | LEAF+STEE | 72.5 | 72.1 |
| | LFST+STEE (ours) | 76.9 | 76.6 |
| IEMOCAP | STFT+STEE | 84.8 | 84.0 |
| | Wavelet+STEE | 85.4 | 84.8 |
| | Fixed superlet+STEE | 86.0 | 85.1 |
| | LEAF+STEE | 84.9 | 84.1 |
| | LFST+STEE (ours) | 87.5 | 86.8 |
| EMO-DB | STFT+STEE | 89.0 | 88.2 |
| | Wavelet+STEE | 90.1 | 89.5 |
| | Fixed superlet+STEE | 90.1 | 89.8 |
| | LEAF+STEE | 89.0 | 88.2 |
| | LFST+STEE (ours) | 91.4 | 90.4 |

混淆矩阵（图4）：

![混淆矩阵](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/uZGEEL20mU-3.png)

图4：三个数据集的混淆矩阵。图(a)为EMO-DB，各类别识别率高，Boredom和Neutral之间存在少量混淆。图(b)为IEMOCAP，Happy有17.7%被误判为Angry。图(c)为NSPL-CRISE，在电话噪声下混淆更明显，如FCW易与Sad/Neutral混淆。

可学习阶数分布可视化（图5）：

![可学习阶数分布可视化](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/uZGEEL20mU-4.png)

图5：LFST学习到的有效阶数`oeff(f)`和阶数权重分布热图。上图显示有效阶数在中高频段（共振峰区域）较高，在低频段（基频区域）较低。下图热图显示阶数权重随频率平滑变化，证明了分数阶混合的连续性。

计算复杂度基准（表5）：
| 模型 | FLOPs (GF) | 峰值内存 (MB) | 延迟 (ms) |
| :--- | :--- | :--- | :--- |
| STFT + STEE | 0.36 | 18.7 | 2.2 |
| LEAF + STEE | 44.5 | 1156.0 | 15.7 |
| LFST + STEE | 201.5 | 4532.8 | 74.9 |
| Wavelet + STEE | 179.6 | 4533.2 | 109.4 |

关键结论：LFST+STEE在所有数据集上均取得SOTA性能，且在控制下游编码器容量的情况下，证实了性能提升主要来自LFST前端。学习到的阶数分布符合语音声学直觉。然而，其计算成本显著高于其他前端。

### ⚖️ 评分理由

- 学术质量：6.0/7。创新性强，首次提出端到端可学习的分数阶Superlet框架，理论推导严密，提供了完整的可微分实现。实验设计严谨，包含多个数据集、与SOTA对比、容量匹配消融和消融研究（表6），结论可信。技术细节描述详尽，代码复现支持好。
- 选题价值：1.5/2。语音情感识别是重要且活跃的研究领域，前端特征提取是其核心。该工作从信号处理基础出发，探索了更灵活的时频表示学习，具有理论价值和启发意义。但其计算开销问题一定程度上影响了其在实时或嵌入式场景的广泛应用潜力。
- 开源与复现加成：0.5/1。论文明确提供了GitHub代码仓库链接（https://github.com/alaaNfissi/LFST-for-SER），并在附录中详细列出了所有超参数、训练设置和算法伪代码，复现指南非常清晰，这大大增加了论文的可信度和可复现性。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
