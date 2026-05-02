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
| 🥇 | [Knowing When to Quit: Probabilistic Early Exits for Speech S](/audio-paper-digest-blog/posts/2026-05-03-knowing-when-to-quit-probabilistic-early-exits) | 8.0分 | 前25% |
| 🥈 | [MARS-Sep: Multimodal-Aligned Reinforced Sound Separation](/audio-paper-digest-blog/posts/2026-05-03-mars-sep-multimodal-aligned-reinforced-sound) | 7.5分 | 前25% |
| 🥉 | [AlignSep: Temporally-Aligned Video-Queried Sound Separation ](/audio-paper-digest-blog/posts/2026-05-03-alignsep-temporally-aligned-video-queried-sound) | 7.5分 | 前25% |
| 4. | [Efficient Audio-Visual Speech Separation with Discrete Lip S](/audio-paper-digest-blog/posts/2026-05-03-efficient-audio-visual-speech-separation-with) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Knowing When to Quit: Probabilistic Early Exits for Speech Separation Networks](/audio-paper-digest-blog/posts/2026-05-03-knowing-when-to-quit-probabilistic-early-exits)

🔥 **8.0/10** | 前25% | #语音分离 | #概率模型 | #语音增强 #实时处理

👥 **作者与机构**

- 第一作者：Kenny Falkær Olsen（丹麦技术大学 & WS Audiology）
- 通讯作者：未说明
- 作者列表：Kenny Falkær Olsen（丹麦技术大学 & WS Audiology）、Mads Østergaard（WS Audiology）、Karl Ulbæk（WS Audiology）、Søren Føns Nielsen（WS Audiology）、Rasmus Malik Høegh Lindrup（WS Audiology）、Bjørn Sand Jensen（丹麦技术大学）、Morten Mørup（丹麦技术大学）

#

💡 **毒舌点评**

论文的亮点在于将概率建模与动态计算的思想完美结合，为早期退出机制赋予了清晰的物理意义（目标信噪比）和校准能力，理论构建和实验验证都相当扎实。短板在于其主要贡献集中于框架设计，而所提出的PRESS-Net架构本身在绝对性能上并未超越当时SOTA的SepReformer等模型，更像是一个高效且灵活的“实现案例”。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：论文中使用的WSJ0-2mix, Libri2Mix, WHAM!, WHAMR!均为公开数据集，但论文未提供具体下载链接或处理脚本。DNS2020数据集同样公开。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了非常详细的模型架构图（图2, 图8）、所有模块的数学描述、损失函数推导、完整的训练超参数（优化器、学习率调度、批次大小、训练时长、硬件信息）以及评估指标。附录包含了更多架构细节、数据集描述和理论证明。这为复现提供了充分的文本指导。
- 论文中引用的开源项目：论文引用了PyTorch作为训练框架。在生成数据集时，提到了使用了WSJ0-2mix和LibriMix的官方脚本。此外，模型设计借鉴了SepReformer、Mamba、Hydra等工作的思想，但未直接引用其代码库。

📌 **核心摘要**

本文旨在解决现有语音分离与增强模型在嵌入式和异构设备（如手机、助听器）上无法根据输入难易程度动态调整计算资源的问题。为此，作者提出了一个名为PRESS（PRobabilistic Early-exit for Speech Separation）的概率性早期退出框架。该框架的核心创新在于，它不将退出条件视为一个固定的权衡，而是通过一个联合建模干净语音信号和误差方差的概率模型来推导退出条件。具体地，它假设预测误差服从高斯分布，并对误差方差使用共轭的逆Gamma先验，从而推导出预测信号的信噪比（SNR）分布。基于此，可以设置一个目标SNR值，并在模型置信该目标已达到时退出计算。为实现此框架，作者设计了一个支持多点退出的神经网络架构PRESS-Net。实验表明，在WSJ0-2mix、Libri2Mix、WHAM!、WHAMR!和DNS2020数据集上，PRESS框架能在不牺牲最终重建质量的前提下，引入动态计算能力，且预测的退出条件经过微调后校准良好，能在测试时显著节省计算量。其实际意义在于为部署在资源受限设备上的语音处理模型提供了一种灵活、高效且可解释的计算资源调度方案。主要局限性包括：1) 论文提到退出时需评估概率条件，这会引入额外开销，影响实时性；2) 框架目前针对固定数量的说话人，未扩展到说话人数量未知的场景。

实验结果表格：

表2：在WSJ0-2mix、Libri2Mix、WHAM!和WHAMR!数据集上的语音分离性能对比。

| 模型 | WSJ0-2mix | Libri2Mix | WHAM! | WHAMR! | # Params (M) | GMAC/s (G/s) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| | SI-SNRi / SDRi | SI-SNRi / SDRi | SI-SNRi / SDRi | SI-SNRi / SDRi | | |
| Conv-TasNet† | 15.3 / 15.6 | 12.2 / 12.7 | 12.7 / – | 8.3 / – | 5.1 | 10.5 |
| SepFormer | 20.4 / 20.5 | 19.2 / 19.4 | 14.7 / 16.8 | 14.0 / – | 26.0 | 86.9 |
| SepReformer (S) | 23.0 / 23.1 | 20.6 / 21.0 | 17.3 / 17.7 | – / – | 4.5 | 21.3 |
| SepReformer (L)+DM | 25.1 / 25.2 | – / – | 18.4 / 18.7 | 17.2 / 16.0 | 55.3 | 155.5 |
| PRESS-4 @ 4 (S) | 22.91 / 23.08 | 20.04 / 20.41 | 16.49 / 16.91 | 14.54 / 13.37 | 3.4 | 11.3 |
| PRESS-12 @ 12 (M) | 24.28 / 24.46 | 20.88 / 21.31 | 16.65 / 17.12 | 14.69 / 13.47 | 22.4 | 79.7 |
| PRESS-12 @ 12 (M)+FT | 24.36 / 24.55 | 21.29 / 21.68 | 17.49 / 17.89 | 15.67 / 14.43 | 22.4 | 79.7 |

实验结果图表：

![PRESS-4 (S) 模型在WSJ0-2mix测试集上不同退出点的重建频谱图与退出SNR条件分布](icassp-img://RKzBRfV6J8/0.png)
图1说明： 展示了PRESS-4-S模型在4个退出点上的重建频谱图，并用阴影显示了各退出点exit-SNR条件的分布。可以观察到，随着退出点加深，模型预测的SNR分布明显向右移动（SNR值更高），表明更深层的退出点能提供更高质量的重建，这验证了早期退出策略的有效性。

![PRESS模型性能-计算量权衡曲线](icassp-img://RKzBRfV6J8/2.png)
图3说明： 该图展示了模型在WSJ0-2mix上的SI-SNRi性能与其计算量（GMAC/s）的关系。粉色曲线代表PRESS模型的静态（各退出点固定）性能。橙色虚线代表使用本文提出的概率退出条件进行动态推理时的性能，它随目标SNR（20-35 dB）变化，展现了PRESS模型能以更优的效率（更低计算量）达到与静态模型相当甚至更好的性能。

![PRESS-4 (S)模型的校准曲线](icassp-img://RKzBRfV6J8/4.png)
图5说明： 这组图展示了模型预测的误差方差分布的校准情况。上排（a, b）显示在4秒片段上训练后，模型在校准数据上预测分布与观测误差分布不匹配（偏离对角线）。下排（c, d）显示，在全长音频上进行微调后，预测分布与观测误差分布高度吻合（接近对角线），证明微调使模型的概率输出变得可靠。

#

---

### 🥈 [MARS-Sep: Multimodal-Aligned Reinforced Sound Separation](/audio-paper-digest-blog/posts/2026-05-03-mars-sep-multimodal-aligned-reinforced-sound)

✅ **7.5/10** | 前25% | #语音分离 | #强化学习 | #多模态模型 #音频事件检测

👥 **作者与机构**

- 第一作者：Zihan Zhang（浙江大学）
- 通讯作者：Tao Jin（浙江大学）
- 作者列表：Zihan Zhang（浙江大学）、Xize Cheng（浙江大学）、Zhennan Jiang（中国科学院自动化研究所）、Dongjie Fu（浙江大学）、Jingyuan Chen（浙江大学）、Zhou Zhao（浙江大学）、Tao Jin（浙江大学）

💡 **毒舌点评**

这篇论文巧妙地将LLM的RLHF对齐范式“移植”到声音分离任务，思路新颖且实验全面，成功缓解了传统方法“信号指标高但语义混乱”的痛点。但它的核心网络骨架（OmniSep）是“借来”的，强化学习框架虽然稳定，却也让训练成本几乎翻倍（附录显示训练时间增加约50%），对于一个本身追求时效性的分离任务而言，这个 trade-off 需要更强的实际性能提升来支撑。

🔗 **开源详情**

*   代码：是，提供GitHub仓库链接：https://github.com/mars-sep/MARS-Sep。
*   模型权重：未提及公开训练好的MARS-Sep模型权重或渐进式微调后的ImageBind编码器权重。
*   数据集：使用公开数据集VGGSound和MUSIC，并说明了使用其“clean+”子集，但未提供新数据集。
*   Demo：是，提供在线样本演示网站：https://mars-sep.github.io/。
*   复现材料：提供了非常详尽的训练细节（附录B, D），包括数据预处理、STFT参数、模型结构（7层U-Net）、优化器设置、所有RL超参数、训练步数、硬件型号（A100/A800）和训练时长估计。
*   引用的开源项目：依赖并基于ImageBind、OmniSep进行工作。

📌 **核心摘要**

1.  问题：通用声音分离模型通常只优化SDR等低层信号指标，导致分离结果在语义上与查询意图不一致（例如，从包含多种乐器的混合声中分离“钢琴”时，可能残留“吉他”的明显干扰）。
2.  核心方法：提出MARS-Sep，将查询条件下的声音分离重新定义为强化学习决策问题。将分离模型视为策略网络，生成时频掩码作为动作。引入一个渐进式对齐的多模态编码器（基于ImageBind微调）作为奖励模型，其输出的相似度分数直接衡量分离音频与查询（文本、音频、图像）的语义一致性。使用一种稳定、带裁剪的信赖域策略优化（类似PPO/GRPO）来更新分离策略。
3.  创新之处：a) 范式创新：首次将基于人类偏好的强化学习框架用于声音分离，优化目标从纯信号保真转向语义一致性。b) 奖励模型设计：通过渐进式多阶段对比学习（音频-文本、音频-音频、音频-视觉）微调ImageBind，使其能提供更准确、稳定的跨模态语义奖励信号，缓解“奖励入侵”问题。c) 策略优化：采用基于Beta分布的因子化掩码策略和带熵正则化的裁剪目标，实现稳定训练。
4.  主要实验结果：在VGGSound-clean+和MUSIC-clean+两个基准的文本、音频、图像及组合查询分离任务中，MARS-Sep在语义一致性指标CLAP score上一致且显著优于基线（例如在VGGSound文本查询中，MARS-Sep的CLAPt为9.03%，OmniSep为8.98%；在MUSIC文本查询中为6.18% vs 5.41%）。同时，在多数设置下，其信号级指标（如SDR, SI-SDRi）也取得了提升或持平。消融实验证实了强化学习和渐进式微调各自的贡献。

| 数据集 | 查询类型 | 方法 | Mean SDR↑ | Mean SIR↑ | Mean SAR↑ | Mean SI-SDRi↑ | Mean CLAPt ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| VGGSound-clean+ | 文本查询 | OmniSep | 6.70±0.66 | 9.04±0.98 | 13.61±0.77 | 4.38±0.48 | 8.98±0.89 |
| | | MARS-Sep (Ours) | 6.91±0.68 | 9.14±1.00 | 13.73±0.77 | 4.55±0.44 | 9.03±0.94 |
| | 组合查询 | OmniSep | 7.79±0.72 | 10.76±1.00 | 14.53±0.93 | 5.16±0.47 | 8.85±0.92 |
| | | MARS-Sep (Ours) | 7.93±0.75 | 10.65±1.00 | 14.49±0.95 | 5.20±0.45 | 9.22±0.90 |
| MUSIC-clean+ | 文本查询 | OmniSep | 12.37±0.85 | 17.51±1.16 | 17.96±0.90 | 9.18±0.79 | 5.41±0.98 |
| | | MARS-Sep (Ours) | 12.91±0.93 | 17.61±1.17 | 18.28±0.93 | 9.85±0.82 | 6.18±0.93 |
5.  实际意义：为声音分离任务提供了一种新的优化范式，使得分离结果更符合用户的语义意图，提升了听感质量，有助于下游任务（如语音识别、音频事件检测）。
6.  局限性：主要贡献集中在优化策略，未对分离网络架构本身进行探索；训练成本显著高于监督学习；奖励模型依赖于预训练多模态模型（ImageBind）的微调，其上限受限于基础模型能力。

---

### 🥉 [AlignSep: Temporally-Aligned Video-Queried Sound Separation with Flow Matching](/audio-paper-digest-blog/posts/2026-05-03-alignsep-temporally-aligned-video-queried-sound)

✅ **7.5/10** | 前25% | #语音分离 | #流匹配 | #音视频 #基准测试

👥 **作者与机构**

- 第一作者：Xize Cheng（浙江大学1）
- 通讯作者：未说明（论文未明确指定通讯作者）
- 作者列表：Xize Cheng（浙江大学1）、Chenyuhao Wen（独立作者2）、Tianhao Wang（独立作者2）、Yongqi Wang（未说明）、Zehan Wang（未说明）、Rongjie Huang（未说明）、Tao Jin（未说明）、Zhou Zhao（未说明）(注：作者列表中姓名与脚注标注的贡献单位对应，其中部分作者未提供具体单位)

💡 **毒舌点评**

亮点：论文抓住了视频声音分离任务中“时序对齐”这个被忽视的核心痛点，并用流匹配这个生成范式去解决，思路新颖且实验设计（如 VGGSound-Hard 基准）针对性很强。短板：尽管提出了多条件生成的独特挑战，但对流匹配本身的技术改进着墨不多（主要沿用标准框架），更像一个有效的应用迁移，且在推理效率与质量的权衡分析上略显常规。

🔗 **开源详情**

- 代码：论文未提及代码链接。但在“复现性声明”中承诺“所有代码、预训练模型及相关资源将在论文接受后公开发布”。
- 模型权重：未提及。
- 数据集：VGGSound-Hard 基准已构建，论文未说明其公开获取方式，但提到所有样本源自公开的 VGGSound 测试集。
- Demo：论文提到“更多结果和音频示例可在项目主页 https://AlignSep.github.io 查看”。
- 复现材料：论文提供了非常详细的模型架构（表4, 5）、超参数（推理步数、guidance scale）、评估协议（MOS流程）和消融实验设置，复现信息充足。
- 论文中引用的开源项目：引用了 BigVGAN (声码器)、CAVP (视觉编码器)、AudioLM VAE (音频编码器) 等作为预训练组件。
- 总体开源计划：论文中明确提及接受后开源的计划，但当前未提供具体资源。

📌 **核心摘要**

1. 问题：视频查询声音分离（VQSS）任务旨在根据视频查询分离目标声音并抑制干扰。现有方法存在两大局限：缺乏有效的时间建模能力，难以区分同源的屏幕内外声音；以及主流的基于掩码的方法在处理重叠声谱时会产生频谱空洞和不完全分离。
2. 方法核心：提出 AlignSep，这是第一个基于条件流匹配（Flow Matching）的生成式 VQSS 模型。其核心是一个时间对齐的向量场估计器，通过将视频特征与音频特征在时间维度上拼接，并输入一个无交叉注意力的前馈 Transformer 来强制保持跨模态的时间一致性。
3. 新意：相比已有方法，AlignSep 的创新在于：(1) 范式创新：首次将生成式流匹配模型应用于 VQSS，避免了掩码方法的局限；(2) 针对性设计：为解决 VQSS 这一多条件生成任务（混合音频+视频序列共同作为条件）的挑战，设计了特定的时间对齐机制；(3) 新基准：构建了 VGGSound-Hard 数据集，专注于评估模型在同质干扰下的时序对齐能力。
4. 主要实验结果：在 MUSIC-Clean、VGGSound-Clean 和新提出的 VGGSound-Hard 三个基准上进行了实验。主要定量结果如下表所示，AlignSep 在所有数据集的语义一致性（SA-A, SA-V）和时序对齐（TA-V）指标上均优于现有方法。例如，在 VGGSound-Hard 上，AlignSep 的 TA-V 达到 95.76%，远超基线 OmniSep 的 76.27%。人类感知评估（MOS）也显示 AlignSep 在各项得分上全面领先。

| 方法 | 数据集 | SA-A↑ | SA-V↑ | TA-V↑ |
| :--- | :--- | :--- | :--- | :--- |
| CLIPSEP | VGGSound-Clean | 66.74 | 24.21 | 79.17 |
| OmniSep | VGGSound-Clean | 70.83 | 27.57 | 81.25 |
| AlignSep (ours) | VGGSound-Clean | 73.38 | 27.89 | 96.88 |
| | | | | |
| CLIPSEP | MUSIC-Clean | 60.59 | 21.42 | 51.11 |
| OmniSep | MUSIC-Clean | 67.67 | 25.74 | 68.89 |
| AlignSep (ours) | MUSIC-Clean | 72.28 | 28.92 | 66.67 |
| | | | | |
| OmniSep | VGGSound-Hard | - | - | 76.27 |
| AlignSep (ours) | VGGSound-Hard | - | - | 95.76 |

（注：SA-A 和 SA-V 在 VGGSound-Hard 表格中未给出，仅列出关键的 TA-V 对比）

5. 实际意义：为视频编辑、内容分析和无障碍辅助等应用提供了更鲁棒、时序更精准的声音分离工具。新基准 VGGSound-Hard 为该领域提供了更具挑战性的评测标准。
6. 主要局限性：生成模型相比判别式掩码方法推理速度较慢；模型性能对视频帧率（时序信息密度）有明显依赖，在极低帧率下性能会下降。

---

### 4. [Efficient Audio-Visual Speech Separation with Discrete Lip Semantics and Multi-Scale Global-Local Attention](/audio-paper-digest-blog/posts/2026-05-03-efficient-audio-visual-speech-separation-with)

✅ **7.5/10** | 前25% | #语音分离 | #端到端 | #音视频 #多模态模型

👥 **作者与机构**

- 第一作者：未说明
- 通讯作者：未说明
- 作者列表：Kai Li（未说明）、Gao Kejun（未说明）、Xiaolin Hu（未说明）

#

💡 **毒舌点评**

这篇论文的亮点在于它清晰地瞄准了AVSS领域“高质量但高成本”的痛点，并给出了一个工程价值明确的解决方案，效率提升数据（50%↓参数，2.4x↓MACs，6x↑速度）非常亮眼。不过，创新点上将唇部运动“离散化”为token的做法，听起来更像是一个巧妙的工程设计而非底层原理的突破，其普适性和是否在所有场景下都最优可能需要更多验证。

#

🔗 **开源详情**

- 代码：是。论文提供了代码仓库链接：https://cslikai.cn/Dolphin。
- 模型权重：论文摘要中未提及是否公开预训练模型权重。
- 数据集：论文摘要中未提及是否公开所用数据集。
- Demo：是。论文提供了在线演示页面（链接同上）。
- 复现材料：论文摘要中未提及训练细节、配置文件等复现材料，需查看代码仓库。
- 论文中引用的开源项目：未提及。

📌 **核心摘要**

1.  问题：现有的音视频语音分离（AVSS）方法虽然分离效果好，但模型参数多、计算量大，这使得它们难以作为预处理步骤部署在实际应用中。
2.  方法：本文提出了一个名为Dolphin的高效AVSS模型。其核心包含两部分：一是DP-LipCoder，一个轻量级双路径视频编码器，能将唇部运动转化为离散的、与音频对齐的语义token；二是设计了一个轻量级编码器-解码器分离网络，其中集成了全局-局部注意力（GLA） 模块来高效捕获多尺度依赖关系。
3.  创新：与以往直接使用连续视觉特征的方法不同，Dolphin创新性地将视觉信息转化为离散的语义token，以更紧凑高效的方式表征语音相关信息。同时，专门设计了GLA模块和轻量级架构来平衡性能与效率。
4.  实验：在三个基准数据集上的实验表明，Dolphin在分离质量上超越了当前的SOTA模型，并实现了显著的效率提升：参数量减少超过50%，计算量（MACs）降低超过2.4倍，GPU推理速度提升超过6倍。（注：论文摘要未提供具体数值表格，以上为概括性描述。）
5.  意义：该工作为AVSS提供了一个实用且可部署的高效解决方案，使得在移动设备或嵌入式系统等资源受限平台上运行高性能语音分离成为可能。
6.  局限性：摘要未明确提及模型的局限性。可能的局限性包括：离散化过程可能损失部分细粒度视觉信息；模型的泛化能力（如对不同口音、光照条件的鲁棒性）需要进一步验证；GLA模块的效率优势在不同输入规模下是否稳定。

---

