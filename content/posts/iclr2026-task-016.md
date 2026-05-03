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
| 🥇 | [Efficient Audio-Visual Speech Separation with Discrete Lip S](/audio-paper-digest-blog/posts/2026-05-03-efficient-audio-visual-speech-separation-with) | 8.5分 | 前25% |
| 🥈 | [Knowing When to Quit: Probabilistic Early Exits for Speech S](/audio-paper-digest-blog/posts/2026-05-03-knowing-when-to-quit-probabilistic-early-exits) | 8.0分 | 前25% |
| 🥉 | [MAPSS: Manifold-based Assessment of Perceptual Source Separa](/audio-paper-digest-blog/posts/2026-05-03-mapss-manifold-based-assessment-of-perceptual) | 8.0分 | 前25% |
| 4. | [MARS-Sep: Multimodal-Aligned Reinforced Sound Separation](/audio-paper-digest-blog/posts/2026-05-03-mars-sep-multimodal-aligned-reinforced-sound) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Efficient Audio-Visual Speech Separation with Discrete Lip Semantics and Multi-Scale Global-Local Attention](/audio-paper-digest-blog/posts/2026-05-03-efficient-audio-visual-speech-separation-with)

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

### 🥈 [Knowing When to Quit: Probabilistic Early Exits for Speech Separation Networks](/audio-paper-digest-blog/posts/2026-05-03-knowing-when-to-quit-probabilistic-early-exits)

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

### 🥉 [MAPSS: Manifold-based Assessment of Perceptual Source Separation](/audio-paper-digest-blog/posts/2026-05-03-mapss-manifold-based-assessment-of-perceptual)

🔥 **8.0/10** | 前25% | #语音分离 | #模型评估 | #自监督学习

👥 **作者与机构**

- 第一作者：Amir Ivry (Technion - Israel Institute of Technology, Electrical and Computer Engineering)
- 通讯作者：Shinji Watanabe (Carnegie Mellon University, Language Technologies Institute) （论文中未明确指定通讯作者，但Shinji Watanabe为最后作者且邮箱在列，通常为通讯作者或责任作者）
- 作者列表：Amir Ivry（Technion - Israel Institute of Technology, Electrical and Computer Engineering）、Samuele Cornell（Carnegie Mellon University, Language Technologies Institute）、Shinji Watanabe（Carnegie Mellon University, Language Technologies Institute）

💡 **毒舌点评**

这篇论文的亮点在于它巧妙地将感知失真（PM）和泄漏（PS）这两个纠缠的评估维度解耦，并给出了数学上严谨的误差界，这让评估结果从一个“黑箱分数”变成了可解释、可量化的诊断工具。然而，其性能高度依赖预训练的自监督模型和精心设计的感知失真库，在面对未见过的失真类型或时间对齐不佳的场景时，鲁棒性存疑；另外，评估标准的“金标准”仍依赖于特定数据集（SEBASS）上的主观评分，通用性有待更广泛验证。

🔗 **开源详情**

- **代码**：论文中明确提供了代码仓库链接：`https://github.com/Amir-Ivry/MAPSS-measures`。
- **模型权重**：未提及。方法依赖公开的预训练自监督模型（如wav2vec 2.0, MERT），但论文未提供自定义模型的权重。
- **数据集**：评估使用的是公开的SEBASS数据库，论文中未提及是否提供其他数据集。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文在附录和正文中详细描述了所有关键参数（如扩散映射的$\alpha, t, \tau$）、预处理步骤（响度归一化）、评估聚合方法以及不同实验场景的设置，复现信息充分。
- **论文中引用的开源项目**：论文依赖并引用了多个开源模型和工具：wav2vec 2.0, WavLM, HuBERT, MERT, webMUSHRA, VERSA工具包等。

📌 **核心摘要**

1.  **要解决什么问题**：现有的音频源分离客观评估指标（如SDR, PESQ）无法清晰区分源信号的“自失真”（PM）和来自其他源的“泄漏/干扰”（PS），导致与人类主观感知存在偏差。
2.  **方法核心是什么**：提出基于流形学习的评估框架MAPSS。首先对每个参考信号生成一系列预设的“感知失真”版本，与原始参考和系统输出一起，用预训练自监督模型（如wav2vec 2.0）编码。然后利用扩散映射（Diffusion Maps）将这些高维表示嵌入到一个低维流形上，该流形上欧氏距离对齐感知差异。最后，在流形上，PM通过计算输出与其参考及失真簇的距离来度量自失真，PS则通过比较该距离与输出到非目标参考簇的距离来度量泄漏。
3.  **与已有方法相比新在哪里**：
    - **功能解耦**：首次提出能从功能上分离泄漏与自失真的客观评估指标对（PS, PM）。
    - **流形几何假设**：利用扩散映射保持距离的特性，将编码空间的差异转化为可度量的几何距离，作为感知差异的代理。
    - **理论保证**：推导了帧级别的确定性误差半径和非渐近的高概率置信区间，使评估结果可量化不确定性。
4.  **主要实验结果如何**：在SEBASS数据集（包含英/西班牙语及音乐混合）上，与18种主流指标相比，PS和PM在与人类MOS的线性（PCC）和秩相关（SRCC）上几乎总是排名第一或第二（具体数值见表1）。例如，在英语语音中，PS的SRCC为84.12%，PM的SRCC为84.69%。框架对预训练模型的选择进行了分析（图6），并验证了其互补性（图2）。
5.  **实际意义是什么**：为源分离系统开发提供了更精细的诊断工具，可以明确区分是目标信号被破坏还是受到了其他源的干扰，有助于针对性地优化算法。其可微分特性也可能用于训练损失设计。
6.  **主要局限性是什么**：对参考与输出之间的时间对齐敏感，当延迟超过约20ms时性能下降明显；其有效性依赖于预训练模型的表示质量和预设失真库的覆盖范围；评估性能最终仍依赖于在特定主观评分数据集上的相关性。

---

### 4. [MARS-Sep: Multimodal-Aligned Reinforced Sound Separation](/audio-paper-digest-blog/posts/2026-05-03-mars-sep-multimodal-aligned-reinforced-sound)

✅ **7.5/10** | 前25% | #语音分离 | #强化学习 | #多模态模型 #对比学习

👥 **作者与机构**

- 第一作者：Zihan Zhang (Zhejiang University)
- 通讯作者：Tao Jin (Zhejiang University)
- 作者列表：Zihan Zhang (Zhejiang University), Xize Cheng (Zhejiang University), Zhennan Jiang (Institute of Automation, Chinese Academy of Sciences), Dongjie Fu (Zhejiang University), Jingyuan Chen (Zhejiang University), Zhou Zhao (Zhejiang University), Tao Jin (Zhejiang University)

💡 **毒舌点评**

MARS-Sep巧妙地将LLM对齐的RLHF思想“降维打击”应用到音频分离领域，用多模态奖励解决了传统分离模型“听觉指标高但语义不纯”的痛点，立意新颖且实验扎实。然而，这套涉及策略采样、奖励模型微调的强化学习pipeline，相比直接监督训练复杂度不低，其在工业级大规模部署中的工程代价与收益是否匹配，论文并未深入探讨。

📌 **核心摘要**

1.  要解决什么问题：传统的声音分离模型通常优化信号级失真指标（如SDR），导致分离结果可能存在语义污染，无法有效抑制与查询目标在声学上相似但语义不同的干扰源，即存在“度量困境”。
2.  方法核心是什么：将查询条件声音分离重新定义为一个马尔可夫决策过程（MDP），采用强化学习（PPO/GRPO风格）进行优化。核心组件包括：(1) 基于分离器输出构建因子化Beta分布掩码策略；(2) 设计一个基于渐进式对齐的多模态奖励模型，用于衡量分离音频与查询（文本/音频/图像）的语义一致性；(3) 使用带裁剪、熵正则化和KL惩罚的信任域策略优化算法进行稳定训练。
3.  与已有方法相比新在哪里：(1) 首次将强化学习引入多模态查询声音分离的优化过程，将掩码预测视为随机决策；(2) 提出一个多模态奖励模型，通过融合音频、文本、视觉特征直接优化语义对齐，而非仅依赖信号级监督；(3) 设计了渐进式微调策略（三阶段对比学习）来增强基础多模态编码器（ImageBind）的跨模态判别力，为RL提供更稳定的奖励信号。
4.  主要实验结果如何：在VGGSound-clean+和MUSIC-clean+数据集上，MARS-Sep在文本、音频、图像及组合模态查询分离任务中，一致地优于OmniSep、AudioSep等基线。以文本查询在VGGSound-clean+为例，MARS-Sep的平均CLAPt分数为9.03±0.94%，优于OmniSep的8.98±0.89%；在MUSIC-clean+上为6.18±0.93%，显著高于OmniSep的5.41±0.98%。在信号指标（SDR, SIR等）上也常有优势。人类主观评估显示MARS-Sep在语义匹配度上优于OmniSep。
5.  实际意义是什么：该方法提升了声音分离结果的语义保真度和感知质量，使其输出更符合用户查询的意图，对依赖高质量分离结果的下游任务（如语音识别、音频内容理解）有积极意义。其将对齐思想引入音频处理的框架，对相关多模态学习研究有启发价值。
6.  主要局限性是什么：方法引入了强化学习的训练复杂性和计算开销（训练时间约为基线OmniSep的2倍）。奖励模型的性能上限影响了策略学习的天花板。虽然在所测基准上有效，但在更复杂、更少结构化的真实世界声学场景中的泛化能力和鲁棒性有待进一步验证。

---

