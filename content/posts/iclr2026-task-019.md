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
| 🥇 | [Efficient Audio-Visual Speech Separation with Discrete Lip S](/audio-paper-digest-blog/posts/2026-05-03-efficient-audio-visual-speech-separation-with) | 9.5分 | 前10% |
| 🥈 | [MARS-Sep: Multimodal-Aligned Reinforced Sound Separation](/audio-paper-digest-blog/posts/2026-05-03-mars-sep-multimodal-aligned-reinforced-sound) | 8.5分 | 前25% |
| 🥉 | [Knowing When to Quit: Probabilistic Early Exits for Speech S](/audio-paper-digest-blog/posts/2026-05-03-knowing-when-to-quit-probabilistic-early-exits) | 8.0分 | 前25% |
| 4. | [MAPSS: Manifold-based Assessment of Perceptual Source Separa](/audio-paper-digest-blog/posts/2026-05-03-mapss-manifold-based-assessment-of-perceptual) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Efficient Audio-Visual Speech Separation with Discrete Lip Semantics and Multi-Scale Global-Local Attention](/audio-paper-digest-blog/posts/2026-05-03-efficient-audio-visual-speech-separation-with)

🔥 **9.5/10** | 前10% | #语音分离 | #多模态模型 | #音视频 #端到端

👥 **作者与机构**

- 第一作者：Kai Li（清华大学计算机系、IDG/McGovern脑研究院）
- 通讯作者：Xiaolin Hu（清华大学计算机系、IDG/McGovern脑研究院、北京国际数学研究中心）
- 作者列表：
  - Kai Li（清华大学计算机系、IDG/McGovern脑研究院）
  - Kejun Gao（清华大学计算机系）
  - Xiaolin Hu（清华大学计算机系、IDG/McGovern脑研究院、北京国际数学研究中心）

💡 **毒舌点评**

这篇工作漂亮地解决了AVSS领域一个老大难问题——在追求SOTA性能的同时，如何让模型变得真正可用、能部署。DP-LipCoder通过巧妙的离散化设计，用极轻量的参数实现了与大型视觉骨干网相当甚至更好的语义对齐效果，效率提升令人印象深刻。但需注意，模型性能高度依赖干净、同步的唇部视频输入，对于大角度头部偏转、遮挡等更严苛的现实场景鲁棒性仍待验证，这是迈向“全天候”可用的关键一步。

🔗 **开源详情**

- 代码：论文明确承诺在论文被接受后，将代码在GitHub上以Apache-2.0许可证开源。提供了临时主页链接：https://cslikai.cn/Dolphin，其中应包含Demo页面。
- 模型权重：论文提到将提供预训练的视觉骨干网络（DP-LipCoder）权重以及完整的Dolphin模型权重。
- 数据集：数据集（LRS2, LRS3, VoxCeleb2）为第三方数据集，需根据引用获取。论文承诺将提供预处理脚本。
- Demo：论文提供了Demo页面链接：https://cslikai.cn/Dolphin。
- 复现材料：提供了极其详尽的复现材料，包括：环境配置说明（conda）、完整的配置文件、超参数列表（附录E）、训练细节（附录A.3， D， E）、评估指标定义（附录D）。
- 引用的开源项目：论文代码基于Python、PyTorch和PyTorch Lightning构建。特别提到了一个用于VQ的PyTorch实现库：https://pypi.org/project/vector-quantize-pytorch/。
- 总结：论文提供了近乎完备的开源计划和复现信息，透明度极高，非常有利于社区跟进和二次开发。

📌 **核心摘要**

1. 解决的问题：现有音频-视觉语音分离（AVSS）方法通常模型庞大、计算成本高，难以在实际应用（如作为预处理步骤）中部署，尤其是在边缘设备上。同时，轻量级视觉编码器的设计面临“性能-效率”两难困境。
2. 方法核心：提出名为Dolphin的高效AVSS模型。其核心是设计了一个双路径轻量级视频编码器DP-LipCoder，通过矢量量化将唇动转化为与音频对齐的离散语义令牌。分离器采用轻量级的编码器-解码器架构，每层引入全局-局部注意力（GLA）模块，通过单次迭代高效捕获多尺度依赖。
3. 创新之处：与已有方法相比，新在：a) 提出DP-LipCoder，联合优化视频重建与从AV-HuBERT蒸馏的语义对齐，实现了轻量化与高语义密度的平衡；b) 设计了GLA模块，创新性地将基于热扩散方程的局部注意力（HDA）与降采样全局注意力（CSA）结合，使分离器能在单次前向传播中取得优异性能，避免了多迭代方法的延迟。
4. 主要实验结果：在LRS2、LRS3、VoxCeleb2三个基准数据集上，Dolphin在所有分离指标（SI-SNRi, SDRi, PESQ）上均超越此前SOTA方法IIANet。同时效率优势巨大：相比SOTA，参数减少>50%，计算量（MACs）降低>2.4倍，GPU推理速度提升>6倍。例如在LRS2上，Dolphin的SI-SNRi为16.8 dB，优于IIANet的16.0 dB，而参数仅为7.00M（vs 15.01M）。
5. 实际意义：Dolphin提供了一种高性能且可实际部署的AVSS解决方案，为在资源受限的场景（如移动设备、嵌入式系统）中实现实时、高质量的语音分离开辟了道路。
6. 主要局限性：模型性能依赖于相对干净且同步的唇部视频输入；对于大头部姿态变化、遮挡、极端光照等条件的鲁棒性有待提升；尽管大幅降低了计算成本，但在极度资源受限的边缘设备上部署仍具挑战，未来可探索量化、剪枝等技术。

---

### 🥈 [MARS-Sep: Multimodal-Aligned Reinforced Sound Separation](/audio-paper-digest-blog/posts/2026-05-03-mars-sep-multimodal-aligned-reinforced-sound)

🔥 **8.5/10** | 前25% | #语音分离 | #强化学习 | #多模态模型 #对比学习

👥 **作者与机构**

- 第一作者：Zihan Zhang（浙江大学）
- 通讯作者：Tao Jin（浙江大学）
- 作者列表：Zihan Zhang（浙江大学，共同第一作者）、Xize Cheng（浙江大学，共同第一作者）、Zhennan Jiang（中国科学院自动化研究所）、Dongjie Fu（浙江大学）、Jingyuan Chen（浙江大学）、Zhou Zhao（浙江大学）、Tao Jin（浙江大学，通讯作者）

#

💡 **毒舌点评**

这篇论文巧妙地将大语言模型对齐中的强化学习思想迁移到声音分离任务，通过设计多模态奖励和渐进式编码器微调，有效缓解了传统优化目标与语义感知之间的“度量困境”；但实验主要基于合成与清洗过的数据集（VGGSound-clean+, MUSIC-clean+），对于真实世界复杂声学环境下的泛化能力，以及与最新生成式分离模型（如FlowSep、ZeroSep）在生成质量上的直接对比仍有提升空间。

#

🔗 **开源详情**

- 代码：提供代码仓库链接 `https://github.com/mars-sep/MARS-Sep`。
- 模型权重：论文中未提及公开模型权重。
- 数据集：使用的是公开数据集VGGSound和MUSIC的清洗子集，论文未提供独立数据集链接，但说明了数据集名称。
- Demo：提供在线分离样本演示页面 `https://mars-sep.github.io/`。
- 复现材料：论文附录中提供了详细的训练细节（超参数、硬件、损失函数）、SI-SDR实现细节、以及额外的消融实验和定性结果，复现信息充分。
- 引用的开源项目：依赖的开源工具/模型包括：ImageBind（Girdhar et al., 2023）编码器、CLAP模型（Wu et al., 2023）用于评估、museval（Stöter et al., 2018）用于SDR计算、OmniSep（Cheng et al., 2025d）作为基线架构。

📌 **核心摘要**

1. 要解决的问题：传统的通用声音分离模型通常优化信号失真指标（如SDR），但容易产生语义上不纯净的输出，即无法有效抑制声学上相似但语义不同的干扰源，这被称为“度量困境”。
2. 方法核心：本文提出MARS-Sep，一个强化学习框架。它将声音分离重新定义为随机决策过程，使用一个基于Beta分布的掩码策略网络，并由一个精心设计的、经过渐进式对齐的多模态奖励模型（融合音频、文本、视觉信息）提供奖励信号，指导策略优化。训练采用稳定的PPO风格裁剪目标。
3. 与已有方法相比的新颖之处：
    *   优化范式创新：首次将查询条件声音分离明确建模为基于人类偏好（由多模态查询定义）的强化学习对齐问题，而非简单的监督回归。
    *   奖励模型设计：引入多模态低秩双线性池化（MLBP）来融合音频、文本、视觉目标信息，生成更全面的语义奖励信号，避免单模态主导。
    *   编码器适配策略：提出渐进式三阶段对比学习微调策略，以增强ImageBind编码器的跨模态判别能力，为强化学习提供更稳定、准确的奖励。
4. 主要实验结果：
    *   在VGGSound-clean+和MUSIC-clean+数据集上，在文本、音频、图像及组合查询的多种设置下，MARS-Sep在SDR、SI-SDRi和CLAP分数上均取得了与基线持平或更优的结果。尤其在CLAP分数（衡量语义一致性）上提升显著。
    *   关键数据对比（Text Query on VGGSound-clean+）：
        | 方法 | Mean SDR↑ | Mean SIR↑ | Mean SAR↑ | Mean SI-SDRi↑ | Mean CLAPt↑ |
        | :--- | :--- | :--- | :--- | :--- | :--- |
        | OmniSep (基线) | 6.70±0.66 | 9.04±0.98 | 13.61±0.77 | 4.38±0.48 | 8.98±0.89 |
        | MARS-Sep (ours) | 6.91±0.68 | 9.14±1.00 | 13.73±0.77 | 4.55±0.44 | 9.03±0.94 |
    *   在“踢踏舞”与“打字机”声的分离案例研究中，MARS-Sep展现了更好的干扰抑制能力（SIR更高）和语义对齐（CLAP分数更高），验证了其解决“度量困境”的能力。
5. 实际意义：该工作提升了声音分离模型的语义感知能力，使输出更符合用户意图，对于人机交互、基于内容的音频编辑、声景分析等应用具有直接价值。它展示了强化学习在信号处理任务中优化高层语义目标的可行性。
6. 主要局限性：
    *   模型训练复杂度增加（需分阶段微调和强化学习），训练时间相比基线（OmniSep）约增加一倍。
    *   实验评估主要在合成或清洗过的数据集上进行，对极端复杂或噪声环境的真实世界泛化能力有待进一步验证。
    *   奖励模型依赖于预训练的多模态编码器（ImageBind），其本身的能力和偏见可能会影响最终分离性能。

#

---

### 🥉 [Knowing When to Quit: Probabilistic Early Exits for Speech Separation Networks](/audio-paper-digest-blog/posts/2026-05-03-knowing-when-to-quit-probabilistic-early-exits)

🔥 **8.0/10** | 前25% | #语音分离 | #信号处理 | #语音增强

👥 **作者与机构**

- 第一作者：Kenny Falkær Olsen（丹麦技术大学，WS Audiology）
- 通讯作者：未说明
- 作者列表：Kenny Falkær Olsen（丹麦技术大学，WS Audiology）、Mads Østergaard（WS Audiology）、Karl Ulbæk（WS Audiology）、Søren Føns Nielsen（WS Audiology）、Rasmus Malik Høegh Lindrup（WS Audiology）、Bjørn Sand Jensen（丹麦技术大学）、Morten Mørup（丹麦技术大学）

#

💡 **毒舌点评**

本文提出的概率早期退出框架在理论上相当优雅，为资源受限的语音分离任务提供了可解释的动态计算方案，这是其显著亮点；但作为一篇会议论文，其模��架构（PRESS-Net）本身并无颠覆性创新，更像是在已有架构上“嫁接”了新的训练与推理范式，且早期退出点仍是预设固定的，并未实现完全“自适应”的计算缩放。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开的预训练模型权重。
- 数据集：使用了公开的语音分离（WSJ0-2mix, Libri2Mix, WHAM!, WHAMR!）和增强（DNS2020）数据集，论文中说明了数据获取和预处理方式。
- Demo：未提供在线演示。
- 复现材料：论文在附录和正文中提供了非常详细的模型架构、训练细节、超参数设置和硬件信息，为复现提供了充分信息。
- 论文中引用的开源项目：引用了用于生成WSJ0-2mix和Libri2Mix数据集的开源脚本，以及PyTorch深度学习框架。

📌 **核心摘要**

1. 要解决的问题：现有语音分离/增强神经网络计算资源固定，无法根据输入复杂度（如安静环境、非重叠语音）动态调整计算量，限制了其在移动设备和助听器等异构设备上的应用。
2. 方法核心：提出了一种概率早期退出框架（PRESS），通过联合建模干净语音信号和误差方差（采用Student-t似然），在模型多个深度设置退出点，并利用模型预测的误差方差构建可解释的、基于信噪比（SNR）概率分布的退出条件。
3. 与已有方法相比的新颖之处：不同于以往依赖固定损失加权或启发式相似度作为退出条件的方法，PRESS提供了一种概率上严谨、且直接与重建质量指标（SNR）挂钩的退出决策机制，实现了计算量与输出质量的平衡。
4. 主要实验结果：在WSJ0-2mix、Libri2Mix、WHAM!、WHAMR!等语音分离基准和DNS2020语音增强任务上，PRESS模型（如PRESS-12 @ 12）达到了与当前SOTA静态模型可比的性能（例如在WSJ0-2mix上SI-SNRi达24.36 dB），同时能通过早期退出显著节省计算量（见图3）。概率退出条件在校准后（微调后）表现良好（见图5）。
5. 实际意义：该工作为在资源受限设备上部署高性能、低延迟的语音处理模型提供了切实可行的方案，其可解释的退出条件也增加了模型决策的可信度。
6. 主要局限性：早期退出点在训练时已固定，推理时只能在这些预设点中选择；概率校准需要在长音频上进行额外微调；评估早期退出的“后悔”值（图4）表明，其动态策略虽接近最优（oracle），但仍存在一定差距。

#

---

### 4. [MAPSS: Manifold-based Assessment of Perceptual Source Separation](/audio-paper-digest-blog/posts/2026-05-03-mapss-manifold-based-assessment-of-perceptual)

✅ **7.0/10** | 前25% | #语音分离 | #自监督学习 | #模型评估 #评估指标

👥 **作者与机构**

- 第一作者：Amir Ivry（Technion - Israel Institute of Technology, 电气与计算机工程系）
- 通讯作者：未说明
- 作者列表：Amir Ivry（Technion - Israel Institute of Technology, 电气与计算机工程系）、Samuele Cornell（Carnegie Mellon University, 语言技术研究所）、Shinji Watanabe（Carnegie Mellon University, 语言技术研究所）

💡 **毒舌点评**

本文为解决音频源分离评估中“失真”与“泄漏”混杂的痛点，提出了基于流形学习的PS/PM双指标方案，思路清晰且实验验证全面（跨语言、多场景）。然而，该指标计算流程繁琐（需为每个参考信号生成约70种人工失真、进行高维嵌入与扩散映射），且严重依赖参考信号的时间对齐，这与实际部署场景（如通信延迟、异步参考）可能存在脱节。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：https://github.com/Amir-Ivry/MAPSS-measures。
- 模型权重：未提及。论文使用了公开的预训练自监督模型（如wav2vec 2.0, MERT），但未提供其微调或特定版本的权重。
- 数据集：使用公开的SEBASS数据集，论文未提供新的数据集。
- Demo：未提供在线演示。
- 复现材料：论文正文和附录提供了非常详细的方法描述、参数设置、误差推导和实验设置，足以支持复现。
- 论文中引用的开源项目：主要依赖wav2vec 2.0, HuBERT, WavLM, MERT等自监督模型的官方实现或预训练权重，以及SEBASS数据集。

📌 **核心摘要**

1. 要解决什么问题：现有的音频源分离客观评估指标（如SDR、PESQ等）无法有效区分两种关键的失真模式：目标信号的“自我失真”和来自其他声源的“泄漏/串扰”，这阻碍了与主观人类感知的对齐。
2. 方法核心是什么：提出一对互补的指标——感知分离度（PS）和感知匹配度（PM）。其核心是为每个参考信号生成一组感知失真样本，利用预训练的自监督模型（如wav2vec 2.0）编码所有信号（参考、失真、输出），再通过扩散映射将这些高维嵌入投影到一个保持距离的低维流形上。在流形上，PM通过马氏距离衡量输出与其参考失真簇的匹配程度（失真度），PS则通过比较输出与参考簇和干扰源簇的距离来衡量分离度（泄漏）。
3. 与已有方法相比新在哪里：a) 功能分离：首次在指标设计层面显式解耦泄漏与失真。b) 理论保障：为帧级指标提供了确定性误差半径和非渐近置信区间的推导。c) 细粒度与可微：提供高达75帧/秒的分辨率，且可微分，可用于优化。
4. 主要实验结果如何：在SEBASS数据集（英语、西班牙语、音乐）上，与18种广泛使用的指标相比，PS和PM在皮尔逊（PCC）和斯皮尔曼（SRCC）相关系数上几乎总是排名第一或第二（除西班牙语SRCC外）。例如，在英语语音上，PS的SRCC/PCC为84.12%/83.74%，PM为84.69%/86.36%；在无鼓点音乐上，PS为87.23%/87.81%，PM为88.12%/85.26%。消融实验证明，自监督编码远优于原始波形输入；指标误差半径极小（<1.4%），不影响排名。
5. 实际意义是什么：为音频源分离系统提供了更符合人类感知、且能诊断失真来源的客观评估工具，可用于指导模型开发和超参数调优。
6. 主要局限性是什么：a) 计算复杂度高，需要为每个参考信号生成并编码数十种失真。b) 对参考信号与输出信号的时间对齐高度敏感，延迟超过20ms性能显著下降。c) 性能依赖于所选自监督模型的层和类型，需要经验选择。d) PM对完全缺失的失真类别（如特定噪声）泛化能力会下降。

---

