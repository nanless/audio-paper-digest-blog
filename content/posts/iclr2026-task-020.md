---
title: "ICLR 2026 - 语音分离 论文列表"
date: 2026-05-03
draft: false
tags: ["语音分离"]
categories: [iclr-2026]
description: "共 4 篇 ICLR 2026 语音分离 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音分离

共 **4** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [MARS-Sep: Multimodal-Aligned Reinforced Sound Separation](/audio-paper-digest-blog/posts/2026-05-03-mars-sep-multimodal-aligned-reinforced-sound) | 9.0分 | 前25% |
| 🥈 | [Efficient Audio-Visual Speech Separation with Discrete Lip S](/audio-paper-digest-blog/posts/2026-05-03-efficient-audio-visual-speech-separation-with) | 8.5分 | 前25% |
| 🥉 | [MAPSS: Manifold-based Assessment of Perceptual Source Separa](/audio-paper-digest-blog/posts/2026-05-03-mapss-manifold-based-assessment-of-perceptual) | 8.5分 | 前25% |
| 4. | [Knowing When to Quit: Probabilistic Early Exits for Speech S](/audio-paper-digest-blog/posts/2026-05-03-knowing-when-to-quit-probabilistic-early-exits) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [MARS-Sep: Multimodal-Aligned Reinforced Sound Separation](/audio-paper-digest-blog/posts/2026-05-03-mars-sep-multimodal-aligned-reinforced-sound)

🔥 **9.0/10** | 前25% | #语音分离 | #强化学习 | #多模态模型 #音频事件检测

👥 **作者与机构**

- 第一作者：Zihan Zhang（浙江大学）
- 通讯作者：Tao Jin（浙江大学）
- 作者列表：Zihan Zhang（浙江大学），Xize Cheng（浙江大学），Zhennan Jiang（中国科学院自动化研究所），Dongjie Fu（浙江大学），Jingyuan Chen（浙江大学），Zhou Zhao（浙江大学），Tao Jin（浙江大学）

💡 **毒舌点评**

这篇论文最亮眼的地方在于，它跳出传统信号处理指标的“卷王”思维，将强化学习人类反馈（RLHF）的哲学引入声音分离，通过多模态奖励直接优化“语义一致性”，巧妙地解决了分离干净但语义污染的“指标困境”。然而，强化学习训练引入的额外计算成本和策略稳定性调参，以及对基础架构（OmniSep）的依赖，是其落地时需要掂量的短板。

🔗 **开源详情**

- **代码**：提供代码仓库链接：`https://github.com/mars-sep/MARS-Sep`。
- **模型权重**：论文中未明确提及是否公开预训练模型权重（特别是渐进式对齐后的ImageBind编码器权重）。
- **数据集**：使用公开的VGGSOUND和MUSIC数据集，并在其clean+版本上评估，数据获取方式未在文中详述，但属于公开数据集。
- **Demo**：提供在线分离样本演示：`https://mars-sep.github.io/`。
- **复现材料**：在附录B、D、E中提供了详细的实验设置、训练细节（优化器、学习率、batch size、训练步数、超参数）、硬件配置、评估协议（包括SI-SDR的计算方式）和消融实验结果，复现指导性较强。
- **引用的开源项目**：论文依赖的关键开源项目/模型包括：OmniSep（基线）、ImageBind（多模态编码器）、CLAP（评估指标）、museval（评估工具）。

📌 **核心摘要**

1.  **解决的问题**：传统的通用声音分离模型通常优化信号级指标（如SDR），但这可能导致分离出的音频在感知上仍包含与查询语义不匹配的干扰源，产生“指标高但语义脏”的困境。
2.  **方法核心**：将基于查询的声音分离任务重构为一个强化学习决策问题。提出MARS-Sep框架，其核心是：a）将掩码预测建模为一个在时间-频率bin上参数化的Beta分布策略；b）设计一个基于多模态编码器（经渐进式对齐微调）的奖励模型，该模型融合音频、文本、视觉查询信息，计算分离音频与多模态查询锚点之间的相似度作为奖励信号；c）采用一种稳定的、带有裁剪机制的信任域策略优化算法（类似PPO/GRPO）来更新分离器策略，以最大化奖励。
3.  **与已有方法的新颖性**：与基于判别式损失（如BCE）的监督学习方法（如OmniSep、AudioSep）不同，MARS-Sep首次将分离过程形式化为随机决策，并利用强化学习直接优化语义对齐目标。其奖励模型通过多模态低秩双线性池化（MLBP）融合查询信息，而非简单比较单模态相似度，并引入渐进式对齐微调来增强奖励的判别性和稳定性，从而缓解奖励欺骗。
4.  **主要实验结果**：在VGGSOUND-clean+和MUSIC-clean+两个基准测试的文本、音频、图像及组合查询设置上，MARS-Sep均取得了领先的性能。例如，在VGGSOUND-clean+的文本查询分离中，MARS-Sep的Mean SDR达到6.91 dB（优于OmniSep的6.70 dB），Mean CLAPt分数达到9.03%（优于OmniSep的8.98%）。定性分析和用户研究也证实其分离结果在语义一致性和非目标源抑制方面更优。
5.  **实际意义**：该工作为语义感知的声音处理提供了新范式，使得分离结果更能匹配用户真实意图，有望提升依赖于分离的下游任务（如语音识别、场景分析）的性能，并推动多模态对齐技术在音频领域的应用。
6.  **主要局限性**：a) 强化学习训练比标准监督学习更复杂，需要调优更多超参数（如κ, λH, λKL）并可能增加训练时间（实验显示训练速度约为OmniSep的50%）；b) 方法的有效性部分依赖于基础架构（OmniSep）和预训练的多模态编码器（ImageBind），其性能上界受这些组件影响；c) 奖励模型可能对特定分布的查询过拟合，其泛化能力有待更广泛验证。

---

### 🥈 [Efficient Audio-Visual Speech Separation with Discrete Lip Semantics and Multi-Scale Global-Local Attention](/audio-paper-digest-blog/posts/2026-05-03-efficient-audio-visual-speech-separation-with)

🔥 **8.5/10** | 前25% | #语音分离 | #知识蒸馏 | #端到端 #实时处理

👥 **作者与机构**

- 第一作者：Kai Li（清华大学计算机系，IDG/McGovern脑研究院）
- 通讯作者：Xiaolin Hu（清华大学计算机系，IDG/McGovern脑研究院）
- 共同第一作者：Kejun Gao（清华大学计算机系）
- 作者列表：Kai Li（清华大学计算机系，IDG/McGovern脑研究院）、Kejun Gao（清华大学计算机系）、Xiaolin Hu（清华大学计算机系，IDG/McGovern脑研究院，中国脑科学研究院）

💡 **毒舌点评**

这篇论文在“既要性能又要效率”这个老生常谈的问题上给出了一个相当工程化且有效的回答，其双路径视觉编码器和单次迭代分离器的设计思路清晰，实验数据也非常扎实。但短板在于，它最终的高效仍然严重依赖于一个精心设计、需要预训练的复杂视觉编码器，且对输入视频质量和同步性要求较高，这可能会限制其在“野战”环境中的真正普及。

🔗 **开源详情**

*   **代码**：论文承诺在GitHub开源，链接为 `https://cslikai.cn/Dolphin`。当前状态未说明。
*   **模型权重**：未明确提及是否公开预训练权重。
*   **数据集**：使用的是公开数据集（LRS2, LRS3, VoxCeleb2），但论文中未提供数据集链接，需按原始引用获取。
*   **Demo**：提供了一个演示页面链接：`https://cslikai.cn/Dolphin`。
*   **复现材料**：非常充分。包括：详细的模型架构描述（附录A.1, B, E）、所有损失函数定义（附录A.2, D）、训练超参数（附录E）、训练硬件和流程（Section 4, 附录A.3）、评估指标（附录D）。代码将包含完整配置和预训练视觉骨干权重。
*   **引用的开源项目**：依赖PyTorch, PyTorch Lightning, 以及VQ库 `vector-quantize-pytorch`。

📌 **核心摘要**

1. **要解决什么问题**：现有音视频语音分离（AVSS）方法虽性能好，但模型参数量大、计算成本高，难以作为预处理步骤部署在资源受限的实际场景中。同时，轻量级视觉编码器往往损失语义信息，导致性能下降。
2. **方法核心是什么**：提出名为Dolphin的高效AVSS模型。核心包括：（1）**DP-LipCoder**，一个双路径视频编码器，通过向量量化（VQ）将唇部运动离散化为与音频对齐的语义token，并通过知识蒸馏从AV-HuBERT学习；（2）一个**轻量级单次迭代编码器-解码器分离器**，其核心是**全局-局部注意力（GLA）块**，分别用粗粒度自注意力（GA）捕获长程依赖，用基于热扩散方程的HDA层（LA）高效建模局部细节。
3. **与已有方法相比新在哪里**：打破了“性能好则计算重”的困境。视觉编码器方面，首次将重建与语义学习在VQ框架下联合优化，实现轻量化且高语义密度的特征提取。分离器方面，摒弃了多迭代设计，通过在单次前馈中融合全局和局部注意力来补偿性能，效率更高。
4. **主要实验结果如何**：在LRS2， LRS3， VoxCeleb2三个基准数据集上，Dolphin在所有分离指标（SI-SNRi， SDRi， PESQ）上均超过了当时的SOTA模型（如IIANet）。例如在LRS2上，Dolphin的SI-SNRi为16.8 dB，高于IIANet的16.0 dB。同时，效率优势显著：相比SOTA，参数减少超过50%，计算量（MACs）降低超过2.4倍，GPU推理速度提升超过6倍。
5. **实际意义是什么**：为音视频语音分离技术在边缘设备或实时系统中的部署提供了切实可行的解决方案，推动了该技术从学术研究走向实用化。
6. **主要局限性是什么**：对输入视频的质量（如头部姿态、遮挡、光照）和音视频同步性有较高要求；尽管效率大幅提升，但部署在极度资源受限的设备上仍有挑战；将唇部运动离散化可能丢失精细的发音线索。

---

### 🥉 [MAPSS: Manifold-based Assessment of Perceptual Source Separation](/audio-paper-digest-blog/posts/2026-05-03-mapss-manifold-based-assessment-of-perceptual)

🔥 **8.5/10** | 前25% | #语音分离 | #自监督学习 #流形学习 | #评估 #自监督学习

👥 **作者与机构**

第一作者：Amir Ivry (Technion - Israel Institute of Technology, Electrical and Computer Engineering)
通讯作者：未明确说明，但通常论文中列出的邮箱对应第一作者或团队，此处第一作者邮箱为 aivry@ieee.org
作者列表：
  - Amir Ivry (Technion - Israel Institute of Technology, Electrical and Computer Engineering)
  - Samuele Cornell (Carnegie Mellon University, Language Technologies Institute)
  - Shinji Watanabe (Carnegie Mellon University, Language Technologies Institute)

💡 **毒舌点评**

**亮点**：论文真正从“感知”角度出发，用一套基于流形的框架，巧妙地将源分离系统中的两种核心失败模式（目标失真与交叉泄漏）解耦量化，为评估提供了新维度。**短板**：该指标的有效性高度依赖于预训练自监督模型的表示能力以及一套精心设计的手工失真库，其泛化到全新、未见过的失真类型或数据分布的能力存疑，且计算流程相对复杂。

🔗 **开源详情**

- **代码**：提供了代码仓库链接：https://github.com/Amir-Ivry/MAPSS-measures。
- **模型权重**：论文中未提及是否公开预训练的自监督模型权重（如wav2vec 2.0, MERT），但这些模型本身通常可从Hugging Face Hub等平台公开获取。
- **数据集**：评估使用的是公开的SEBASS数据库，论文中提供了数据库信息及引用。
- **Demo**：未提及。
- **复现材料**：论文附录（特别是B、C、D、E节）提供了**极其详尽**的复现说明，包括所有参数设置、失真库细节、不同模型的选择依据、聚合公式、误差计算方法等。提供了匿名补充材料（.zip文件），包含完整的推理流水线代码。
- **论文中引用的开源项目**：主要依赖于预训练自监督模型（wav2vec 2.0, WavLM, HuBERT, MERT）和评估数据集（SEBASS）。

📌 **核心摘要**

1.  **解决的问题**：现有音频源分离的客观评估指标（如SDR、PESQ）将目标信号的“自身失真”与来自其他源的“泄漏干扰”混淆在一起，无法为系统开发提供精确的诊断信息。
2.  **方法核心**：提出**感知分离度（PS）**和**感知匹配度（PM）**。方法流程为：首先为每个参考音频生成一组涵盖多种类型（如滤波、噪声、剪切等）的“感知失真”样本；然后使用预训练的自监督模型（如wav2vec 2.0）对所有参考、失真和系统输出音频进行编码；接着通过扩散映射（Diffusion Maps）技术将高维编码嵌入到一个低维流形，使得流形上的欧氏距离与感知差异对齐；最后，在流形上通过计算马氏距离，PM量化输出与自身参考/失真簇的匹配度，PS量化输出与非目标参考/失真簇的分离度。
3.  **相比已有方法的新颖性**：
    - **首次解耦**：是首个能从功能上区分“自身失真”和“泄漏干扰”的源分离评估指标。
    - **感知流形**：创新性地结合自监督表示与扩散映射构建“感知流形”，让度量更贴近人耳感知。
    - **细粒度与可靠性**：支持高达75帧/秒的帧级分析，并为度量结果推导了确定性误差半径和非渐近置信区间。
4.  **主要实验结果**：在SEBASS数据库（包含英语、西班牙语、带鼓音乐、不带鼓音乐四种场景）上，与18个广泛使用的指标相比，PS和PM在皮尔逊（PCC）和斯皮尔曼（SRCC）相关系数上几乎总是排名第一或第二。例如，在“音乐（不带鼓）”场景中，PS的SRCC为87.23%，PM为88.12%；在“英语”场景中，PM的PCC达到86.36%，优于PESQ的84.05%。消融实验证实了自监督编码和扩散映射的关键作用。
5.  **实际意义**：为音频分离领域提供了更符合人类感知、诊断性更强的评估工具，可用于更细致地分析系统弱点、指导模型优化，其可微分性也使其有潜力作为训练损失的一部分。
6.  **主要局限性**：方法依赖于预训练的自监督模型和手工设计的失真库，其性能会随模型选择和失真库的覆盖度而变化；对输入音频间的时间对齐较为敏感；聚合策略（从帧级到句级）采用启发式方法，非数据驱动。

---

### 4. [Knowing When to Quit: Probabilistic Early Exits for Speech Separation Networks](/audio-paper-digest-blog/posts/2026-05-03-knowing-when-to-quit-probabilistic-early-exits)

🔥 **8.0/10** | 前25% | #语音分离 | #早退机制 | #概率模型 #端到端

👥 **作者与机构**

- 第一作者：Kenny Falkær Olsen（丹麦技术大学、WS Audiology）
- 通讯作者：未说明
- 作者列表：Kenny Falkær Olsen（丹麦技术大学、WS Audiology）、Mads Østergaard（WS Audiology）、Karl Ulbæk（WS Audiology）、Søren Føns Nielsen（WS Audiology）、Rasmus Malik Høegh Lindrup（WS Audiology）、Bjørn Sand Jensen（丹麦技术大学）、Morten Mørup（丹麦技术大学）

💡 **毒舌点评**

这篇论文最亮眼的是将概率早退与信噪比（SNR）条件优雅地结合，提供了比“固定损失权重”或“连续层差异”更具解释性的退出准则，实用价值明确。然而，它主要贡献的是一个“何时停止”的框架，而非一个“如何分离”的革命性新架构，整体技术组合（线性RNN+早期分割+概率退出）虽有效但显得相对保守，更像是一次扎实的工程优化而非原理突破。

🔗 **开源详情**

- **代码**：论文中未提及代码链接。
- **模型权重**：未提及是否公开。
- **数据集**：论文中使用的所有数据集（WSJ0-2mix, Libri2Mix, WHAM!, WHAMR!, DNS2020）均为公开学术数据集，文中给出了获取方式或参考。
- **Demo**：未提及。
- **复现材料**：论文附录（E节）提供了非常详细的训练细节，包括优化器设置、学习率调度、训练步数、硬件类型等；附录C节详细描述了模型架构的所有组件（编码器、RNN块、逆Gamma块等）。这些信息足以支持复现。
- **论文中引用的开源项目**：引用了`pywsj0-mix`（WSJ0-2mix生成脚本）和`LipriMix`（LibriMix生成脚本）等相关数据集生成代码。

📌 **核心摘要**

本文旨在解决单通道语音分离与增强神经网络计算量固定、无法根据输入复杂度动态调整的问题。核心方法是提出**PRobabilistic Early-exit for Speech Separation (PRESS)**框架，通过联合建模干净语音信号及其误差方差的概率分布（基于Student-t似然），推导出多种可解释的、基于SNR的早期退出条件（如式11、12）。与已有方法（通过损失函数权重或层间相似度隐式定义退出条件）不同，PRESS显式地量化了模型对达到目标SNR的置信度。为支持此框架，作者设计了**PRESS-Net**架构，其核心是采用线性RNN和早期说话人分割的编码器-解码器结构，并在解码器堆栈的多个位置设置退出点。实验在WSJ0-2mix、Libri2Mix、WHAM!、WHAMR!和DNS Challenge 2020数据集上进行。主要结果表明：1）PRESS模型（如PRESS-12 M）在全网络深度下的分离性能（WSJ0-2mix SI-SNRi: 24.28 dB）与SOTA的SepReformer等可比；2）通过概率早退条件，模型能以可预测的精度损失动态节省计算（如图3所示），且经过全长数据微调后，预测的方差分布校准良好（如图5）。实际意义在于为助听器、手机等异构设备提供了灵活部署语音分离模型的可能性。主要局限是架构创新性有限，且框架扩展至逐说话人退出、迭代模型等尚待探索。

**主要实验结果表（WSJ0-2mix 测试集）**
| 模型 | SI-SNRi (dB) | SDRi (dB) | 参数量 (M) | 计算量 (GMAC/s) |
| :--- | :--- | :--- | :--- | :--- |
| SepFormer (S) | 23.0 | 23.1 | 4.5 | 21.3 |
| SepReformer (M) | 24.2 | 24.4 | 17.3 | 81.3 |
| **PRESS-12 @12 (M)** | **24.28** | **24.46** | **22.4** | **79.7** |
| **PRESS-12 @8 (M) + FT** | **24.18** | **24.40** | **15.6** | **54.4** |
| **PRESS-4 @4 (S) + FT** | **23.41** | **23.56** | **3.4** | **11.3** |
*注：“@K”表示在第K个退出点评估；“+FT”表示在全长数据上微调。*

**关键图表结论：**
- **图3**：展示了PRESS模型在性能-计算量权衡上的优势。动态早退策略（曲线）比任何固定深度的静态模型（点）在相同计算量下获得更高性能，或在相同性能下消耗更少计算。
- **图5**：显示了在校准性上的关键发现。初始训练（在4秒片段上）后模型预测的方差分布未校准（CRPS=2.96）；经全长数据微调后，预测分布在训练集和测试集上均变得校准良好（CRPS降至1.43和2.80），这是早退条件可靠工作的基础。

---

