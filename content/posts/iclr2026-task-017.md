---
title: "ICLR 2026 - 语音分离 论文列表"
date: 2026-05-02
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
| 🥇 | [Efficient Audio-Visual Speech Separation with Discrete Lip S](/audio-paper-digest-blog/posts/2026-05-02-efficient-audio-visual-speech-separation-with) | 9.0分 | 前10% |
| 🥈 | [MAPSS: Manifold-based Assessment of Perceptual Source Separa](/audio-paper-digest-blog/posts/2026-05-02-mapss-manifold-based-assessment-of-perceptual) | 8.5分 | 前25% |
| 🥉 | [AlignSep: Temporally-Aligned Video-Queried Sound Separation ](/audio-paper-digest-blog/posts/2026-05-02-alignsep-temporally-aligned-video-queried-sound) | 8.0分 | 前25% |
| 4. | [MARS-Sep: Multimodal-Aligned Reinforced Sound Separation](/audio-paper-digest-blog/posts/2026-05-02-mars-sep-multimodal-aligned-reinforced-sound) | 7.5分 | 前25% |
| 5. | [Knowing When to Quit: Probabilistic Early Exits for Speech S](/audio-paper-digest-blog/posts/2026-05-02-knowing-when-to-quit-probabilistic-early-exits) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Efficient Audio-Visual Speech Separation with Discrete Lip Semantics and Multi-Scale Global-Local Attention](/audio-paper-digest-blog/posts/2026-05-02-efficient-audio-visual-speech-separation-with)

🔥 **9.0/10** | 前10% | #语音分离 | #知识蒸馏 | #端到端 #音视频

👥 **作者与机构**

- 第一作者：Kai Li（清华大学计算机科学与技术系、清华大学IDG/McGovern脑科学研究院）
- 通讯作者：Xiaolin Hu（清华大学计算机科学与技术系、清华大学IDG/McGovern脑科学研究院、北京脑科学与类脑研究中心）
- 作者列表：Kai Li（清华大学计算机科学与技术系、清华大学IDG/McGovern脑科学研究院）、Kejun Gao（清华大学计算机科学与技术系）、Xiaolin Hu（清华大学计算机科学与技术系、清华大学IDG/McGovern脑科学研究院、北京脑科学与类脑研究中心）
注：Kai Li和Kejun Gao贡献均等（*标记），Xiaolin Hu为通讯作者（†标记）。

💡 **毒舌点评**

Dolphin的双路径视觉编码器设计和基于热扩散方程的局部注意力模块非常聪明，用极低的计算开销（MACs降低2.4倍）实现了SOTA分离性能，为AVSS的实际部署扫清了关键障碍。但其离散视觉token的设计可能丢弃了连续唇部运动中的一些细微发音线索，未来或可探索混合离散-连续表示来进一步提升。

🔗 **开源详情**

-   代码：论文中承诺在GitHub上开源代码（Apache-2.0许可证），并提供了一个Demo页面链接（https://cslikai.cn/Dolphin），但未在文中直接给出具体代码仓库URL。因此，具体链接需以论文被接收后的发布为准。
-   模型权重：论文中提到会公开预训练权重（“pretrained weights for the video backbone”），但未提供具体下载链接。
-   数据集：使用的LRS2, LRS3, VoxCeleb2为公开数据集，但需根据其出版方规定获取。论文承诺会提供预处理脚本。
-   Demo：提供了一个在线演示页面链接：https://cslikai.cn/Dolphin。
-   复现材料：提供了极其详细的复现信息，包括：conda环境规范、完整配置文件、所有超参数（附录E）、评估指标和损失函数的正式定义（附录D）、模型各组件的详细结构（附录A, B）、训练细节（附录A.3）。
-   引用的开源项目：论文中提到了依赖的开源工具/模型，包括：PyTorch, PyTorch Lightning, VQ实现（vector-quantize-pytorch on PyPI）, AV-HuBERT（作为蒸馏教师模型）。
-   总体：开源意愿强烈，复现支持非常充分，是高质量开源论文的典范。论文中未提及具体的GitHub仓库链接，但根据“我们的代码和演示页面公开可访问于此链接”的表述及Demo链接，可认为代码已或即将公开。

📌 **核心摘要**

本文旨在解决音频-视觉语音分离（AVSS）模型计算成本过高、难以实际部署的问题。论文提出了一个名为Dolphin的高效AVSS模型。其核心创新包括：1) 设计了一个轻量级双路径视频编码器DP-LipCoder，通过向量量化（VQ）和知识蒸馏将唇部运动映射为与音频对齐的离散语义token；2) 构建了一个基于TDANet的轻量级编解码分离器，并引入全局-局部注意力（GLA）模块，在每个层内同时建模长程依赖和局部特征，从而实现单次迭代的高质量分离。与现有的SOTA方法（如IIANet）相比，Dolphin在三个基准数据集（LRS2, LRS3, VoxCeleb2）上取得了更好的分离性能（例如，在LRS2上SI-SNRi达到16.8dB，比IIANet高0.8dB），同时参数量减少超过50%，计算量（MACs）降低超过2.4倍，GPU推理速度提升超过6倍。这证明了Dolphin是一个兼顾高性能与高效率的实用解决方案。主要局限性在于模型对相对干净、同步的唇部视频有一定依赖，且在极端资源受限设备上的部署仍需进一步优化。

---

### 🥈 [MAPSS: Manifold-based Assessment of Perceptual Source Separation](/audio-paper-digest-blog/posts/2026-05-02-mapss-manifold-based-assessment-of-perceptual)

🔥 **8.5/10** | 前25% | #语音分离 | #流形学习 | #自监督学习 #基准测试

👥 **作者与机构**

- 第一作者：Amir Ivry（Technion - Israel Institute of Technology, Electrical and Computer Engineering）
- 通讯作者：Shinji Watanabe（Carnegie Mellon University, Language Technologies Institute）
- 作者列表：Amir Ivry（Technion - Israel Institute of Technology）、Samuele Cornell（Carnegie Mellon University）、Shinji Watanabe（Carnegie Mellon University）

💡 **毒舌点评**

亮点在于其坚实的理论基础和创新的评估范式：通过扩散映射将主观听感离散化为流形上的几何距离，首次在数学上清晰地解耦了“分离度”和“匹配度”，并提供了理论误差界，这在音频评估指标中极为罕见。短板则是其实用性受限于严格的时序对齐假设和对预定义失真库的依赖，在存在较大延迟或未知失真类型的实际场景中，其有效性可能会打折扣。

🔗 **开源详情**

- 代码：提供了完整的代码仓库链接：`https://github.com/Amir-Ivry/MAPSS-measures`。
- 模型权重：论文使用了预训练的自监督模型（如wav2vec 2.0, MERT），这些模型的公开权重来源已在论文中提及（如facebook/wav2vec2-large-lv60k）。但论文本身未提出新的模型权重。
- 数据集：评估实验使用公开的SEBASS数据库。论文未提及提供新的数据集。
- Demo：论文中未提及在线演示。
- 复现材料：论文在附录中提供了极为详细的复现材料，包括：所有失真类型的参数列表（表3）、从帧级到语句级的聚合公式（B.4节）、相关系数的计算公式（B.5节）、以及误差界推导的完整过程（附录D和E）。
- 论文中引用的开源项目：主要依赖预训练的自监督音频模型：wav2vec 2.0、WavLM、HuBERT、MERT。评估框架的代码开源。

📌 **核心摘要**

本文旨在解决音频源分离评估中长期存在的一个问题：现有的客观指标（如SDR、PESQ等）无法有效区分目标信号自身失真（如削波、噪声）和其他说话人的串扰泄漏，而这两者对人类感知的负面影响方式不同。作者提出了感知分离度（PS） 和感知匹配度（PM） 两个互补指标。其核心方法是：首先对每个参考信号施加一系列精心设计的“感知失真”，形成覆盖广泛听觉感知的扰动集合；然后使用预训练的自监督模型（如wav2vec 2.0）将参考信号、失真信号和系统输出信号编码为高维表示；接着，利用扩散映射这一流形学习技术，将这些高维表示嵌入到一个低维流形上，确保该流形上的欧氏距离能反映原始波形表示间的感知差异。在此流形上，PM通过测量系统输出与其自身参考及失真簇的距离来评估“匹配度”，PS则通过比较该距离与输出到其他参考及失真簇的距离来评估“分离度”。实验在SEBASS数据集的英语、西班牙语及音乐混合物上进行，结果表明，在与18种广泛使用的评估指标对比时，PS和PM在线性相关和秩相关指标上几乎总是排名第一或第二（例如，在英语数据上，PS和PM的SRCC分别为84.12%和84.69%）。论文还推导了帧级的确定性误差半径和非渐近置信区间，增强了指标的可解释性。

| 指标 | 英语 SRCC | 英语 PCC | 西班牙 SRCC | 西班牙 PCC | 音乐（有鼓）SRCC | 音乐（无鼓）SRCC |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| PS (本文) | 84.12% | 83.74% | 82.33% | 85.01% | 72.87% | 87.23% |
| PM (本文) | 84.69% | 86.36% | 83.41% | 85.30% | 75.18% | 88.12% |
| PESQ (基线) | 85.56% | 84.05% | 86.06% | 84.98% | 61.60% | 61.26% |
| STOI (基线) | 80.85% | 78.40% | 78.79% | 82.56% | 67.29% | 75.64% |
| SI-SDR (基线) | 78.11% | 76.96% | 84.07% | 81.38% | 42.08% | 70.42% |

实际意义：该工作为源分离系统评估提供了更精细、可解释且理论支持更强的工具，有助于更准确地诊断系统性能瓶颈（是分离不彻底还是引入了失真），并可能作为可微损失函数指导模型优化。

主要局限性：
1.  时间对齐敏感性：框架假设参考信号与输出信号精确对齐。如附录图8所示，当存在超过20毫秒的延迟时，性能会显著下降，这在实际通信系统中常见。
2.  失真库的构建依赖先验知识：方法的效果依赖于预定义失真库能否充分覆盖目标失真类型。附录表9的实验显示，当完全移除某个感知上显著的失真类别时，PM的性能会下降。
3.  聚合策略：从帧级到语句级的聚合采用启发式方法（PM平均，PS仿PESQ的加权），并非最优，可能影响最终与人类MOS的相关性。

---

### 🥉 [AlignSep: Temporally-Aligned Video-Queried Sound Separation with Flow Matching](/audio-paper-digest-blog/posts/2026-05-02-alignsep-temporally-aligned-video-queried-sound)

🔥 **8.0/10** | 前25% | #语音分离 | #流匹配 | #音视频 #基准测试

👥 **作者与机构**

- 第一作者：未说明（论文注明 Xize Cheng, Chenyuhao Wen, Tianhao Wang 为平等贡献）
- 通讯作者：未说明
- 作者列表：Xize Cheng（浙江大学），Chenyuhao Wen（浙江大学），Tianhao Wang（独立作者），Yongqi Wang（浙江大学），Zehan Wang（浙江大学），Rongjie Huang（浙江大学），Tao Jin（浙江大学），Zhou Zhao（浙江大学）

#

💡 **毒舌点评**

本文最大的亮点在于将流匹配生成范式成功引入视频查询声音分离任务，并系统性地分析了该任务作为“多条件生成”与传统流匹配任务的本质区别，这种对任务特性的深刻洞察比单纯提升几个点更有价值。然而，其构建的VGGSound-Hard新基准仅包含118个测试对，虽然难度高但规模偏小，其对结论的普适性支撑稍显不足；此外，作为生成模型，其推理速度（2.17 FPS）距实时处理仍有差距，论文中未探讨如何在效率上做进一步优化。

#

🔗 **开源详情**

- 代码：论文明确承诺在接收后公开代码仓库，但未提供具体链接（论文中未提及代码链接）。
- 模型权重：论文明确承诺在接收后公开预训练模型权重（未提及具体链接）。
- 数据集：VGGSound-Hard作为新提出的基准，论文未说明其具体下载方式，但提及由VGGSound测试集筛选而来。VGGSound-Hard的筛选脚本可能会随代码公开。
- Demo：论文提供了项目主页链接 https://AlignSep.github.io ，其中包含更多结果和音频示例，可视为一种在线演示。
- 复现材料：附录A提供了非常详细的实现细节，包括音频VAE（表4）和向量场估计器（表5）的架构超参数、数据预处理方式、推理步数选择等关键信息。
- 引用的开源项目：论文依赖并引用了多个开源项目：CAVP视觉编码器 (Luo et al., 2023), 音频VAE (Liu et al., 2023a), BigVGAN声码器 (Lee et al., 2022), ImageBind (Han et al., 2023) 等。

📌 **核心摘要**

本文旨在解决视频查询声音分离（VQSS）任务中现有方法面临的两大挑战：1) 在声源同质（如多只同类狗叫）的干扰下，因缺乏精细时序建模而无法区分屏幕内外声音；2) 基于掩码的判别式方法在处理重叠声轨时易产生频谱空洞和不完整分离。
方法核心是提出AlignSep，这是首个基于条件流匹配的生成式VQSS模型。与已有方法不同，AlignSep通过设计一个时序对齐的向量场估计器（采用跨模态特征拼接和无交叉注意力的Transformer），并配合预训练的CAVP视觉时序编码器，显式地学习和维护音视频之间的时序对应关系，从而在生成过程中实现精确对齐。
与已有方法相比，新在两点：1) 范式上，采用生成式流程替代判别式掩码预测，能更好地处理重叠信号并避免频谱空洞；2) 建模上，明确引入并强化了时序对齐机制，而非仅依赖语义特征。此外，论文深入分析了VQSS作为多条件生成任务对标准流匹配范式提出的新挑战。
主要实验结果显示，AlignSep在三个基准上均达到最优性能。在MUSIC-Clean和VGGSound-Clean上，其时序对齐准确率（TA-V）分别达到66.67%和96.88%，大幅超越最强基线OmniSep（分别为68.89%和81.25%）。在专门为测试时序对齐能力构建的更具挑战性的VGGSound-Hard基准上，AlignSep的TA-V达到95.76%，而OmniSep仅为76.27%。人类感知评估（MOS）也证实了AlignSep在噪声残留、音视频一致性、音频质量和整体评分上的优势。
实际意义在于，AlignSep为解决真实复杂视听场景下的声音分离问题提供了新的、更鲁棒的框架，有助于提升视频编辑、内容理解等应用的体验。
主要局限性包括：1) 新提出的VGGSound-Hard基准规模较小（仅118对）；2) 作为生成模型，推理效率有提升空间；3) 论文未深入探讨该生成范式在更复杂、多源场景下的扩展能力。

#

---

### 4. [MARS-Sep: Multimodal-Aligned Reinforced Sound Separation](/audio-paper-digest-blog/posts/2026-05-02-mars-sep-multimodal-aligned-reinforced-sound)

✅ **7.5/10** | 前25% | #语音分离 | #强化学习 | #跨模态 #基准测试

👥 **作者与机构**

- 第一作者：Zihan Zhang（浙江大学）
- 通讯作者：Tao Jin（浙江大学）
- 作者列表：Zihan Zhang（浙江大学）、Xize Cheng（浙江大学）、Zhennan Jiang（中国科学院自动化研究所）、Dongjie Fu（浙江大学）、Jingyuan Chen（浙江大学）、Zhou Zhao（浙江大学）、Tao Jin（浙江大学）

💡 **毒舌点评**

亮点：这篇论文巧妙地将大语言模型对齐的核心思想——基于人类偏好的强化学习（RLHF）——“移植”到了声音分离任务中，并设计了与之匹配的多模态奖励模型和渐进式微调策略，为解决“分离干净但语义不匹配”的“指标困境”提供了新思路。短板：论文在与生成式分离模型（如FlowSep）对比时，虽然指出了自身在指标稳定性上的优势，但在某些语义相似度指标（如CLAP score）上并未全面超越，且声称的“一致性增益”在部分设置（如MUSIC数据集的音频查询）中较为微弱，对方法的普适优势论述可再严谨。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/mars-sep/MARS-Sep。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：使用公开数据集VGGSound和MUSIC，论文中未提及是否发布其预处理后的“clean+”子集。
- Demo：提供分离样本在线演示页面：https://mars-sep.github.io/。
- 复现材料：附录详细给出了训练细节（B部分）、SI-SDR计算（C部分）、RL训练细节（D部分）和所有超参数设置，复现信息充分。
- 引用的开源项目：依赖ImageBind作为多模态编码器，使用museval工具计算SDR指标。

📌 **核心摘要**

1. 问题：通用声音分离存在“指标困境”，即模型在优化信噪比（SDR）等信号指标时，可能保留语义上不相关的干扰声，导致输出与用户查询意图不符。
2. 核心方法：本文提出MARS-Sep，一个强化学习（RL）框架。它将声音分离重新定义为随机决策过程：基础分离模型作为“策略”，输出时频掩码；一个经过渐进对齐的多模态编码器作为“奖励模型”，评估分离音频与查询（文本/音频/图像）的语义一致性；通过基于裁剪信任区域的策略优化（类似PPO）来最大化奖励。
3. 创新点：1）首创性地将查询条件声音分离形式化为受多模态奖励引导的RL问题。2）设计了分解Beta分布掩码策略，便于探索与利用的平衡。3）引入渐进式对齐训练，逐步增强ImageBind编码器的跨模态判别能力，为RL提供稳定可靠的奖励信号。
4. 主要实验结果：在VGGSound-clean+和MUSIC-clean+两个数据集上，在文本、音频、图像及组合查询等多种条件下，MARS-Sep相比强基线（如OmniSep, AudioSep）均取得一致提升。例如，在VGGSound-clean+文本查询任务中，MARS-Sep的CLAP分数为9.03±0.94，高于OmniSep的8.98±0.89；SI-SDRi为4.55±0.44，高于OmniSep的4.38±0.48。消融研究证实了RL和渐进对齐策略的各自贡献。
5. 实际意义：该方法能产生语义更准确、听感更干净的声音分离结果，更符合用户意图，有望提升下游任务（如语音识别、内容理解）的性能。
6. 主要局限性：训练过程引入了RL的复杂性，需调优更多超参数（如β分布浓度κ、KL系数λ_KL）；奖励模型依赖预训练的ImageBind，其能力上限可能影响最终性能；在部分设置下，与基线的提升幅度有限。

---

### 5. [Knowing When to Quit: Probabilistic Early Exits for Speech Separation Networks](/audio-paper-digest-blog/posts/2026-05-02-knowing-when-to-quit-probabilistic-early-exits)

✅ **7.0/10** | 前25% | #语音分离 | #概率模型 | #线性RNN #计算效率

👥 **作者与机构**

- 第一作者：Kenny Falkær Olsen (Technical University of Denmark, WS Audiology)
- 通讯作者：未说明
- 作者列表：Kenny Falkær Olsen (Technical University of Denmark, WS Audiology), Mads Østergaard (WS Audiology), Karl Ulbæk (WS Audiology), Søren Føns Nielsen (WS Audiology), Rasmus Malik Høegh Lindrup (WS Audiology), Bjørn Sand Jensen (Technical University of Denmark), Morten Mørup (Technical University of Denmark)

💡 **毒舌点评**

这篇论文在“让网络学会聪明地偷懒”这件事上做得很漂亮，提出的概率早退框架优雅地将性能评估融入训练和推理，为嵌入式设备部署提供了坚实的理论工具。然而，这种优雅的代价是复杂的数学和略显繁琐的退出条件实现，而且论文在WSJ0-2mix这个最常用的基准上并没有刷新记录，更像是在展示一种“能力”而非追求极致性能。

🔗 **开源详情**

- 代码：论文中未提及代码链接或开源计划。
- 模型权重：未提及。
- 数据集：所用数据集（WSJ0-2mix, Libri2Mix, WHAM!, WHAMR!, DNS2020）均为公开数据集，论文中引用了生成脚本或官方来源。
- Demo：未提供在线演示。
- 复现材料：论文附录（C, D, E, F）提供了详细的架构描述、数据集说明、训练设置和超参数，这构成了重要的复现材料。
- 论文中引用的开源项目：引用了用于数据集生成的Python仓库（pywsj0-mix, LibriMix）和PyTorch框架。

📌 **核心摘要**

1. 问题：当前先进的语音分离/增强网络（如SepFormer）计算量固定，无法根据输入音频的简单程度（如安静、非重叠）动态调整计算资源，限制了其在移动设备、助听器等资源受限场景的应用。
2. 方法核心：提出概率性早退框架PRESS，通过联合建模目标语音和误差方差（使用Student t似然），使网络能在每个早期退出点预测出重建质量的概率分布。由此推导出可解释的、基于期望信噪比（SNR）的早退出条件，允许用户设置目标SNR和置信度阈值来动态决定计算深度。
3. 新意：与现有早退方法（依赖固定损失权重或启发式停止条件）相比，PRESS的退出条件直接源自概率模型，具有可解释性（目标SNR）和校准性（置信度）。为实例化该框架，设计了基于线性RNN的PRESS-Net架构，支持多点退出且保持高性能。
4. 主要实验结果：在WSJ0-2mix、Libri2Mix、WHAM!、WHAMR!和DNS2020数据集上验证了PRESS。模型在静态退出点性能与SOTA基线（如SepReformer）有竞争力（例如PRESS-12(M)在WSJ0-2mix最终出口达24.36dB SI-SNRi）。动态早退可根据目标SNR节省大量计算（见图3），且退出条件在校准后良好（图5）。消融实验（表1）证明了概率似然和联合置换训练的有效性。
5. 实际意义：为在异构设备上部署高性能语音模型提供了一种动态、高效、可解释的解决方案，有助于平衡性能与能耗/延迟。
6. 主要局限性：1) 概率模型和退出条件的计算与实现较为复杂；2) 模型的校准依赖于在完整长度数据上的微调；3) 当前退出条件需在所有说话人上同时满足，粒度较粗；4) 虽性能有竞争力，但未在所有基准上显著超越最强的静态大模型。

---

