---
title: "ICLR 2026 - 语音分离 论文列表"
date: 2026-05-04
draft: false
tags: ["语音分离"]
categories: [iclr-2026]
description: "共 5 篇 ICLR 2026 语音分离 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音分离

共 **5** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Knowing When to Quit: Probabilistic Early Exits for Speech S](/audio-paper-digest-blog/posts/2026-05-04-knowing-when-to-quit-probabilistic-early-exits) | 8.0分 | 前25% |
| 🥈 | [MARS-Sep: Multimodal-Aligned Reinforced Sound Separation](/audio-paper-digest-blog/posts/2026-05-04-mars-sep-multimodal-aligned-reinforced-sound) | 7.5分 | 前25% |
| 🥉 | [AlignSep: Temporally-Aligned Video-Queried Sound Separation ](/audio-paper-digest-blog/posts/2026-05-04-alignsep-temporally-aligned-video-queried-sound) | 7.5分 | 前25% |
| 4. | [Efficient Audio-Visual Speech Separation with Discrete Lip S](/audio-paper-digest-blog/posts/2026-05-04-efficient-audio-visual-speech-separation-with) | 7.5分 | 前25% |
| 5. | [MAPSS: Manifold-based Assessment of Perceptual Source Separa](/audio-paper-digest-blog/posts/2026-05-04-mapss-manifold-based-assessment-of-perceptual) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Knowing When to Quit: Probabilistic Early Exits for Speech Separation Networks](/audio-paper-digest-blog/posts/2026-05-04-knowing-when-to-quit-probabilistic-early-exits)

🔥 **8.0/10** | 前25% | #语音分离 | #概率建模 | #动态计算 #信号处理

👥 **作者与机构**

- 第一作者：Kenny Falkær Olsen（丹麦技术大学、WS Audiology）
- 通讯作者：未说明
- 作者列表：Kenny Falkær Olsen（丹麦技术大学、WS Audiology）、Mads Østergaard（WS Audiology）、Karl Ulbæk（WS Audiology）、Søren Føns Nielsen（WS Audiology）、Rasmus Malik Høegh Lindrup（WS Audiology）、Bjørn Sand Jensen（丹麦技术大学）、Morten Mørup（丹麦技术大学）

💡 **毒舌点评**

亮点在于其优雅的概率框架，将早退出条件直接建立在可解释的预测信噪比分布上，而非启发式规则或固定的损失权重组合；短板是实验部分虽然与多个静态SOTA模型对比，但在“动态计算”这一核心卖点上，未与其它动态缩放方法（如Slim-TasNet， 动态通道剪枝）进行更直接的性能-计算曲线对比，显得自家优势不够“独家”。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开权重。
- 数据集：使用的是公开数据集（WSJ0-2mix, Libri2Mix, WHAM!, WHAMR!, DNS2020），论文中给出了引用和获取方式。
- Demo：未提及。
- 复现材料：论文在附录和正文中提供了极其详尽的训练细节、超参数设置、网络架构描述、数据集混合脚本引用等，为复现提供了充分信息。
- 论文中引用的开源项目：引用了`pywsj0-mix`、`LibriMix`、`DNS-Challenge`的官方脚本用于生成数据。

📌 **核心摘要**

这篇论文旨在解决当前语音分离网络计算预算固定、无法根据输入音频的难易程度（如无重叠、低噪声）动态调整计算量的问题。核心方法是提出了一个名为PRobabilistic Early-exit for Speech Separation (PRESS) 的概率框架，该框架将模型训练为同时预测干净语音信号和误差方差，从而能以概率形式估计每个中间层输出的预测信噪比。与已有的早退出方法（通过隐式损失组合或连续层相似度）不同，PRESS的退出条件直接对应于用户设定的目标SNR及其置信水平，具有直观的可解释性。论文还设计了配套的PRESS-Net架构（基于线性RNN和早期源分离），以支持高质量的早期重建。实验表明，在WSJ0-2mix、Libri2Mix、WHAM!、WHAMR!等数据集上，PRESS模型在最终出口性能上与强基线模型相当，同时其概率退出条件经过校准后，能够在推理时实现显著的计算节省（如GMAC/s减少），且退出决策直接反映了网络对输出质量的置信度。主要局限性在于其概率退出的校准依赖于在全长度音频上的微调，且未探索为不同说话人单独退出。

---

### 🥈 [MARS-Sep: Multimodal-Aligned Reinforced Sound Separation](/audio-paper-digest-blog/posts/2026-05-04-mars-sep-multimodal-aligned-reinforced-sound)

✅ **7.5/10** | 前25% | #语音分离 | #强化学习 | #多模态模型 #声源分离

👥 **作者与机构**

- 第一作者：Zihan Zhang（浙江大学）
- 通讯作者：Tao Jin（浙江大学）
- 作者列表：Zihan Zhang（浙江大学）、Xize Cheng（浙江大学）、Zhennan Jiang（中国科学院自动化研究所）、Dongjie Fu（浙江大学）、Jingyuan Chen（浙江大学）、Zhou Zhao（浙江大学）、Tao Jin（浙江大学）

💡 **毒舌点评**

亮点：巧妙地将LLM对齐中的“偏好奖励”思想迁移到声音分离任务，用多模态奖励模型解决了传统优化目标（如SDR）与人类感知之间的“度量困境”，这是该领域一次很有启发性的范式创新。
短板：框架引入了强化学习和多模态编码器微调，带来了显著的训练复杂度和计算开销（训练时间翻倍），其宣称的语义提升高度依赖CLAP分数的可靠性，而该分数本身可能继承预训练模型的偏见。

🔗 **开源详情**

- 代码：提供了代码仓库链接：https://github.com/mars-sep/MARS-Sep。
- 模型权重：论文中未提及是否公开模型权重。
- 数据集：使用了公开的VGGSound和MUSIC数据集，并提供了“clean+”版本的具体说明（论文未提供版本获取方式）。
- Demo：提供了在线分离样本演示页面：https://mars-sep.github.io/。
- 复现材料：在论文附录B、C、D中详细说明了实验设置、SI-SDR指标计算、强化学习训练细节，包括完整的超参数设置。
- 论文中引用的开源项目：依赖ImageBind (Girdhar et al., 2023) 作为多模态编码器，Separate-Net (U-Net) 作为基座分离器���OmniSep (Cheng et al., 2025d) 作为基线，CLAP (Wu et al., 2023) 用于评估，museval (Stöter et al., 2018) 用于计算SDR。

📌 **核心摘要**

1.  要解决什么问题：传统声音分离模型过度优化信号级指标（如SDR），导致分离结果虽然失真度低，但可能保留与查询目标语义不符的干扰源，即“度量困境”。
2.  方法核心是什么：将查询条件的声音分离重新表述为一个偏好对齐问题。提出MARS-Sep框架，将掩码生成建模为一个从Beta分布中采样的随机决策过程，并通过一个基于多模态嵌入相似度的奖励模型提供语义信号，最后使用带有信任区域约束的PPO变体进行策略优化。为稳定训练，还引入了对多模态编码器（ImageBind）的渐进式对比微调策略。
3.  与已有方法相比新在哪里：
    *   优化范式：从传统的监督学习（直接回归理想掩码）转变为强化学习（最大化语义对齐奖励）。
    *   奖励设计：创新性地使用MLBP融合音频、文本、视觉嵌入，计算分离音频与查询条件的联合语义相似度作为奖励。
    *   训练稳定性：引入渐进式多模态编码器微调，以提供更可靠的奖励信号，缓解奖励欺骗问题。
4.  主要实验结果如何：在VGGSOUND-clean+和MUSIC-clean+两个基准上，MARS-Sep在文本、音频、图像及多模态组合查询条件下均取得了优异的性能。以文本查询为例，在VGGSOUND-clean+上，MARS-Sep相比强基线OmniSep，在SDR上从6.70提升至6.91，在语义指标CLAP上从8.98提升至9.03；在音乐数据集MUSIC-clean+上，SDR从12.37提升至12.91，CLAP从5.41大幅提升至6.18。消融实验表明，强化学习和渐进式微调都对最终性能有贡献。人类评估也证实其分离结果在语义匹配度上优于基线。
    ![MARS-Sep强化学习循环架构图](icassp-img://AhvApZghHf/0.png)
    图1展示了MARS-Sep的核心RL循环：分离器从Beta分布的旧策略中采样掩码，生成波形；多模态奖励模型根据音频、文本、视觉嵌入计算奖励；优势值结合策略比率、熵正则化和KL惩罚，更新当前策略。
5.  实际意义是什么：推动声音分离从“信号还原”向“语义对齐”演进，使分离结果更符合用户意图，有望提升下游依赖声音分离的任务（如语音识别、音频事件检测）在复杂声学场景中的性能。
6.  主要局限性是什么：强化学习训练引入了额外的计算负担（训练时间约为基线模型的2倍）。奖励模型依赖预训练的多模态编码器，其自身偏差可能影响分离质量。框架目前仅在合成及受控的真实世界数据集上验证，在极端复杂或开放世界场景下的泛化能力有待进一步考察。

---

### 🥉 [AlignSep: Temporally-Aligned Video-Queried Sound Separation with Flow Matching](/audio-paper-digest-blog/posts/2026-05-04-alignsep-temporally-aligned-video-queried-sound)

✅ **7.5/10** | 前25% | #语音分离 | #流匹配 | #音视频 #多模态模型

👥 **作者与机构**

- 第一作者：Xize Cheng（浙江大学）
- 通讯作者：Zhou Zhao（浙江大学）
- 作者列表：Xize Cheng（浙江大学），Chenyuhao Wen（浙江大学），Tianhao Wang（浙江大学），Yongqi Wang（未说明），Zehan Wang（未说明），Rongjie Huang（未说明），Tao Jin（浙江大学），Zhou Zhao（浙江大学）。( 表示同等贡献)

💡 **毒舌点评**

亮点在于首次将流匹配生成范式引入视频引导的音频分离，并针对性地设计了“时序拼接+无交叉注意力Transformer”的向量场估计器来强约束音视频对齐，有效解决了传统掩模方法的频谱空洞和语义混淆问题；短板是作为生成模型，其推理速度显著慢于判别式基线（如OmniSep），且新构建的VGGSound-Hard基准规模较小（118对），其对结论泛化性的支撑有限。

🔗 **开源详情**

-   代码：论文中明确提及“More results and audio examples are available at: https://AlignSep.github.io.” 并承诺“upon paper acceptance”开源代码、预训练模型及相关资源。当前未直接提供代码仓库链接。
-   模型权重：论文中未提及已公开的权重链接。
-   数据集：VGGSound-Hard是作者新构建的，论文中说明其“will be released”，但未提供获取方式。训练数据集（MUSIC, VGGSound）为公开数据集。
-   Demo：提供了一个项目主页 (https://AlignSep.github.io) 用于展示更多结果和音频示例。
-   复现材料：论文在附录A提供了极其详细的超参数配置表（表4，表5），并讨论了训练策略（如分类器引导比例）、模型架构选择（拼接 vs 交叉注意力），复现信息非常充分。
-   引用的开源项目：
    -   视觉编码器：CAVP (Luo et al., 2023)
    -   音频VAE：源自 AudioLDM (Liu et al., 2023a)
    -   声码器：BigVGAN (Lee et al., 2022)
    -   评估工具：CLAP, ImageBind 等

📌 **核心摘要**

1.  解决的问题：现有的视频查询声音分离（VQSS）方法主要依赖语义信息，在处理同源干扰（如多个狗叫）和声音重叠时效果不佳，且主流的掩模方法易产生频谱空洞和不完全分离。
2.  方法核心：提出AlignSep，首个基于条件流匹配（Conditional Flow Matching）的VQSS生成模型。其核心是设计了一个时序对齐的向量场估计器，通过直接拼接视觉与音频特征（而非交叉注意力），并结合预训练的时序视觉编码器（CAVP），强制模型学习精确的音视频时序对应关系。
3.  主要创新：① 将流匹配范式引入VQSS，通过生成方式避免频谱空洞；② 提出了强调时序一致性的模型架构；③ 构建了全新的、更具挑战性的VGGSound-Hard基准，专注于评估模型在同源干扰下对时序线索的依赖。
4.  实验结果：在MUSIC-Clean、VGGSound-Clean和新提出的VGGSound-Hard数据集上，AlignSep在语义一致性（SA-A, SA-V）和时序对齐（TA-V）指标上均达到SOTA。例如，在VGGSound-Hard上，AlignSep的TA-V达到95.76%，显著高于OmniSep的76.27%。主观MOS评分也全面领先。

| 方法 | 数据集 | SA-A | SA-V | TA-V |
| :--- | :--- | :--- | :--- | :--- |
| OmniSep | VGGSound-Clean | 70.83 | 27.57 | 81.25 |
| AlignSep | VGGSound-Clean | 73.38 | 27.89 | 96.88 |
| OmniSep | VGGSound-Hard | 未提供 | 未提供 | 76.27 |
| AlignSep | VGGSound-Hard | 未提供 | 未提供 | 95.76 |

5.  实际意义：为复杂的视听场景声音编辑与分析提供了更鲁棒的技术基础，推动了生成式模型在跨模态感知任务中的应用。
6.  主要局限：生成式方法的推理效率低于判别式方法；VGGSound-Hard数据集规模有限；模型性能在很大程度上依赖于预训练的视觉和音频编码器。

---

### 4. [Efficient Audio-Visual Speech Separation with Discrete Lip Semantics and Multi-Scale Global-Local Attention](/audio-paper-digest-blog/posts/2026-05-04-efficient-audio-visual-speech-separation-with)

✅ **7.5/10** | 前25% | #语音分离 | #知识蒸馏 | #音视频 #离散表示

👥 **作者与机构**

- 第一作者：Kai Li (清华大学计算机科学与技术系、IDG/McGovern Institute for Brain Research)， Kejun Gao (清华大学计算机科学与技术系)
- 通讯作者：Xiaolin Hu (清华大学计算机科学与技术系、IDG/McGovern Institute for Brain Research、Chinese Institute for Brain Research)
- 作者列表：Kai Li (清华大学计算机科学与技术系、IDG/McGovern Institute for Brain Research)， Kejun Gao (清华大学计算机科学与技术系)， Xiaolin Hu (清华大学计算机科学与技术系、IDG/McGovern Institute for Brain Research、Chinese Institute for Brain Research)

#

💡 **毒舌点评**

亮点：论文提出的双路径视觉编码器（DP-LipCoder）通过结合视频重建与来自AV-HuBERT的知识蒸馏，巧妙地解决了轻量化视觉编码器难以对齐音频语义的难题，在显著降低计算量的同时保持了分离性能，这一思路值得借鉴。短板：VQ离散化不可避免地会丢失部分连续的唇动细粒度信息，论文虽承认但未充分量化其在极端情况（如极快语速、模糊视频）下的潜在影响，且模型对“干净、同步”唇部视频的依赖限制了其在更野蛮场景下的适用性。

#

🔗 **开源详情**

- 代码：论文明确承诺在论文被接受后，于GitHub公开完整代码（Apache-2.0许可），仓库将包含环境配置、训练配置、预训练权重和源代码。论文提供了Demo页面链接 `https://cslikai.cn/Dolphin`。
- 模型权重：未提及是否公开预训练的DP-LipCoder权重或最终Dolphin模型权重。
- 数据集：使用的数据集（LRS2， LRS3， VoxCeleb2）为公开数据集，但需按各数据集提供的方式获取。论文承诺提供预处理脚本。
- Demo：提供了Demo页面链接。
- 复现材料：提供了极为详尽的复现信息，包括：完整的模型超参数配置（附录E）、训练策略（附录D）、数据集划分细节（附录C）、损失函数公式、以及所有消融实验的设置。训练在8个RTX 5090 GPU上进行。
- 论文中引用的开源项目：提到了依赖的开源项目：VQ实现来自PyPI上的 `vector-quantize-pytorch`；音频分离骨干网络TDANet的开源实现（Li et al., 2023）。

📌 **核心摘要**

这篇论文旨在解决音频-视觉语音分离（AVSS）模型在追求高性能时带来的高参数量和高计算成本问题，使其难以在实际场景（如边缘设备）中作为预处理模块部署。核心方法是提出一个名为Dolphin的高效AVSS模型。其创新点在于：1）设计了一个轻量级的双路径视频编码器DP-LipCoder，通过视频重建和来自预训练模型AV-HuBERT的知识蒸馏，将连续唇部视频流映射为离散的、与音频对齐的语义令牌；2）构建了一个基于单次迭代的轻量级编码器-解码器分离器，在其每一层引入全局-局部注意力（GLA） 模块，以高效捕捉多尺度依赖关系，替代了多轮迭代设计。与当前SOTA方法IIANet相比，Dolphin在三个基准数据集（LRS2, LRS3, VoxCeleb2）上的分离质量（SI-SNRi, SDRi, PESQ）均有提升，同时实现了显著的效率提升：参数量减少超过50%，计算量（MACs）降低超过2.4倍，GPU推理速度提升超过6倍。该工作为在资源受限环境中部署高性能AVSS系统提供了一个实用的解决方案。其主要局限性在于对输入视频的同步性和清晰度有一定要求，并且离散编码可能会损失部分连续的唇部运动细节。

#

---

### 5. [MAPSS: Manifold-based Assessment of Perceptual Source Separation](/audio-paper-digest-blog/posts/2026-05-04-mapss-manifold-based-assessment-of-perceptual)

✅ **7.5/10** | 前25% | #语音分离 | #自监督学习 | #模型评估 #多语言

👥 **作者与机构**

- 第一作者：Amir Ivry（Technion - Israel Institute of Technology，电气与计算机工程系）
- 通讯作者：未明确说明（论文中三位作者均提供了邮箱，无明确通讯作者标注）
- 作者列表：Amir Ivry（Technion - Israel Institute of Technology）、Samuele Cornell（Carnegie Mellon University，语言技术研究所）、Shinji Watanabe（Carnegie Mellon University，语言技术研究所）

💡 **毒舌点评**

这篇论文将流形学习（扩散地图）与自监督语音表征相结合来解耦源分离中的“失真”与“泄漏”，思路新颖且理论推导严谨，特别是在评估指标的不确定性量化方面做得非常扎实。然而，其核心创新高度依赖于一个精心设计、包含约70种失真的“感知失真库”，这使得该方法对失真类型的覆盖范围敏感，且在面对未见失真时（如论文中测试的丢包）表现会打折扣。

🔗 **开源详情**

- 代码：提供。论文明确给出了代码仓库链接：`https://github.com/Amir-Ivry/MAPSS-measures`。
- 模型权重：未直接提供。论文使用预训练的自监督模型（如wav2vec 2.0, MERT），但未提供修改后的权重，仅指导使用公开的预训练检查点（表4列出了具体检查点名称，如`facebook/wav2vec2-large-lv60`）。
- 数据集：使用公开的SEBASS数据库（Kastner & Herre, 2022），论文中提供了引用信息，但未在论文中直接提供下载链接。
- Demo：未提及。
- 复现材料：提供了完整的代码库，包含推理流程和误差界计算。论文正文和附录详细描述了所有参数设置（扩散地图参数、聚合方法、失真库参数等）。
- 论文中引用的开源项目：主要依赖公开的预训练模型库（如Hugging Face Hub上的wav2vec2, WavLM, HuBERT, MERT），以及SEBASS数据集。

📌 **核心摘要**

1.  问题：现有的音频源分离评估指标（如SDR、PESQ）将目标信号的失真与来自干扰源的泄漏混为一谈，无法单独量化这两种失败模式，阻碍了系统性能的精准诊断与优化。
2.  核心方法：本文提出了MAPSS框架，核心是引入一对互补的评估指标：感知匹配（PM） 和 感知分离（PS）。PM衡量输出与自身参考信号及其感知失真云（通过施加数十种预定义失真生成）的匹配程度；PS则额外考虑输出与非目标参考及其失真云的距离，从而专门量化泄漏。两者均基于自监督模型（如wav2vec 2.0）编码波形，并在通过扩散地图构建的低维感知流形上计算马氏距离。
3.  新颖之处：首次在源分离评估中实现了对泄漏与失真的功能解耦；提供了框架级的、可微的度量；并首次为这类感知度量推导了确定性误差半径和高概率置信区间，使其具备可解释性。
4.  实验结果：在SEBASS数据库（包含英语、西班牙语和音乐混合信号）上，与18种广泛使用的指标相比，PS和PM在皮尔逊（PCC）和斯皮尔曼（SRCC）相关系数上几乎总是排名第一或第二。例如，在英语语音上，PM的SRCC为84.69%，PS为84.12%；在无鼓音乐上，PM的SRCC高达88.12%。详见下表。

    | 度量 | 英语(SRCC/PCC) | 西班牙语(SRCC/PCC) | 音乐(有鼓)(SRCC/PCC) | 音乐(无鼓)(SRCC/PCC) |
    | :--- | :--- | :--- | :--- | :--- |
    | PS | 84.12% / 83.74% | 82.33% / 85.01% | 72.87% / 77.38% | 87.23% / 87.81% |
    | PM | 84.69% / 86.36% | 83.41% / 85.30% | 75.18% / 69.88% | 88.12% / 85.26% |
    | PESQ | 85.56% / 84.05% | 86.06% / 84.98% | 61.60% / 53.87% | 61.26% / 60.24% |
    | STOI | 80.85% / 78.40% | 78.79% / 82.56% | 67.29% / 71.27% | 75.64% / 78.13% |

    归一化互信息（NMI）分析（图2）显示PS和PM在质量较差时互补性极强。理论误差半径（表2）极小（<1.39%），证明了度量的稳定性。
5.  实际意义：为源分离研究提供了更精细的诊断工具，可用于定位系统失败模式（是失真还是泄漏），并因其可微特性有望作为训练中的损失函数或课程学习触发器。
6.  主要局限性：高度依赖预定义的失真库（附录A），其设计决定了度量的有效性；对参考与输出之间的时间错位较为敏感（图8）；在评估如“丢包”等非连续失真时，PM的表现弱于PESQ（表8）。

![MAPSS框架概览图](icassp-img://uZ5KmXsJsB/0.png)
图1：MAPSS整体流程图，展示了从波形输入到感知失真生成、自监督编码、扩散地图嵌入，最终计算PS和PM指标的四个阶段。

---

