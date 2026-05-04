---
title: "ICLR 2026 - 音频生成 论文列表"
date: 2026-05-04
draft: false
tags: ["音频生成"]
categories: [iclr-2026]
description: "共 9 篇 ICLR 2026 音频生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频生成

共 **9** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [PrismAudio: Decomposed Chain-of-Thought and Multi-dimensiona](/audio-paper-digest-blog/posts/2026-05-04-prismaudio-decomposed-chain-of-thought-and-multi) | 9.0分 | 前10% |
| 🥈 | [SCRAPL: Scattering Transform with Random Paths for Machine L](/audio-paper-digest-blog/posts/2026-05-04-scrapl-scattering-transform-with-random-paths-for) | 8.5分 | 前25% |
| 🥉 | [UALM: Unified Audio Language Model for Understanding, Genera](/audio-paper-digest-blog/posts/2026-05-04-ualm-unified-audio-language-model-for) | 8.5分 | 前25% |
| 4. | [Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution](/audio-paper-digest-blog/posts/2026-05-04-flow2gan-hybrid-flow-matching-and-gan-with-multi) | 8.0分 | 前25% |
| 5. | [Aurelius: Relation Aware Text-to-Audio Generation At Scale](/audio-paper-digest-blog/posts/2026-05-04-aurelius-relation-aware-text-to-audio-generation) | 8.0分 | 前25% |
| 6. | [AC-Foley: Reference-Audio-Guided Video-to-Audio Synthesis wi](/audio-paper-digest-blog/posts/2026-05-04-ac-foley-reference-audio-guided-video-to-audio) | 8.0分 | 前25% |
| 7. | [TangoFlux: Super Fast and Faithful Text to Audio Generation ](/audio-paper-digest-blog/posts/2026-05-04-tangoflux-super-fast-and-faithful-text-to-audio) | 8.0分 | 前25% |
| 8. | [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-04-layersync-self-aligning-intermediate-layers) | 7.5分 | 前25% |
| 9. | [AudioX: A Unified Framework for Anything-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-04-audiox-a-unified-framework-for-anything-to-audio) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [PrismAudio: Decomposed Chain-of-Thought and Multi-dimensional Rewards for Video-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-04-prismaudio-decomposed-chain-of-thought-and-multi)

🔥 **9.0/10** | 前10% | #音频生成 | #强化学习 | #扩散模型 #流匹配

👥 **作者与机构**

- 第一作者：Huadai Liu（香港科技大学; 阿里巴巴通义团队）
- 通讯作者：Wei Xue（香港科技大学）
- 作者列表：Huadai Liu（香港科技大学; 阿里巴巴通义团队）、Kaicheng Luo（阿里巴巴通义团队）、Wen Wang（阿里巴巴通义团队）、Qian Chen（阿里巴巴通义团队）、Peiwen Sun（香港中文大学）、Rongjie Huang（香港中文大学）、Xiangang Li（阿里巴巴通义团队）、Jieping Ye（阿里巴巴通义团队）、Wei Xue（香港科技大学）

💡 **毒舌点评**

亮点：论文首次将强化学习与分解式思维链（CoT）相结合，应用于视频到音频生成，巧妙地将一个复杂的多目标优化问题分解为四个可解释、可优化的维度，并提供了高效训练算法（Fast-GRPO）和高质量评测基准（AudioCanvas）。短板：该框架高度依赖一个强大的多模态语言模型（如VideoLLaMA2）来生成高质量的CoT训练数据，且音频基础模型本身也采用了多种现有先进组件（如VideoPrism、T5-Gemma），其“从零到一”的原创性贡献相对有限。

🔗 **开源详情**

- 代码：论文承诺将公开完整代码，但未提供具体仓库链接。
- 模型权重：论文承诺将公开所有模型权重。
- 数据集：论文承诺将公开自建的AudioCanvas基准测试集。
- Demo：论文中未提及在线演示链接。
- 复现材料：论文提供了非常详细的附录，包括训练细节、超参数、资源需求、CoT生成Prompt等，复现信息充分。
- 论文中引用的开源项目：依赖的开源项目/模型包括：Stability AI的VAE、VideoPrism、T5-Gemma、VideoLLaMA2、MS-CLAP、Synchformer、Meta Audiobox Aesthetics、StereoCRW、Gemini 2.5 Pro（用于数据生成）。

📌 **核心摘要**

本文针对视频到音频（V2A）生成任务中存在的“目标纠缠”（语义、时序、美学、空间等目标相互冲突）和缺乏人类偏好对齐的问题，提出了PrismAudio框架。其核心方法是将单一的推理路径分解为四个专门的CoT模块（语义、时序、美学、空间），并为每个模块设计对应的奖励函数，通过多维强化学习进行联合优化。与现有方法相比，新在：1）首次在V2A中整合分解CoT与多维RL；2）提出Fast-GRPO算法，通过混合ODE-SDE采样大幅降低训练开销；3）构建了更严谨的AudioCanvas基准测试集（包含300类单事件和501个多事件场景）。实验结果表明，在VGGSound测试集上，PrismAudio在语义一致性（CLAP: 0.47 vs. 0.43）、时序同步性（DeSync: 0.41 vs. 0.55）和空间准确性（CRW: 7.72 vs. 13.47）等指标上均优于此前SOTA的ThinkSound，并在主观评测中获得最高MOS分数。其实际意义在于为V2A生成提供了一个可解释、可精细控制且对齐人类偏好的新范式。主要局限性在于训练过程依赖LLM生成的CoT数据和多阶段训练，计算成本较高。

---

### 🥈 [SCRAPL: Scattering Transform with Random Paths for Machine Learning](/audio-paper-digest-blog/posts/2026-05-04-scrapl-scattering-transform-with-random-paths-for)

🔥 **8.5/10** | 前25% | #音频生成 | #时频分析 | #损失函数 #优化算法

👥 **作者与机构**

- 第一作者：Christopher Mitcheltree (伦敦玛丽女王大学数字音乐中心)
- 通讯作者：未明确指定。根据作者列表和惯例，通常为最后作者或通讯作者列表，论文中为Vincent Lostanlen (Nantes Université, LS2N) 和 Mathieu Lagrange (Nantes Université, LS2N)。
- 作者列表：Christopher Mitcheltree（伦敦玛丽女王大学数字音乐中心）、Vincent Lostanlen（Nantes Université, LS2N）、Emmanouil Benetos（伦敦玛丽女王大学数字音乐中心）、Mathieu Lagrange（Nantes Université, LS2N）

💡 **毒舌点评**

亮点：论文精准地解决了“感知损失函数计算太贵”这一工程痛点，通过巧妙的随机采样与优化技巧，在速度和精度之间找到了一个令人满意的平衡点，使得JTFS这类优质但昂贵的损失函数能够真正用于模型训练。
短板：方法对散射路径的采样策略（尤其是低频路径）较为粗放，在TR-808实验中表现出对音频衰减部分建模能力的显著下降，暗示其对长尾、稀疏信息路径的处理策略有待进一步优化。

🔗 **开源详情**

- 代码：论文明确指出代码、音频样本和配置文件已发布，并提供了Python包SCRAPL。链接为：https://christhetree.github.io/scrapl/。
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：TR-808任务使用了公开数据集（Samples from Mars TR-808），但论文未提供其独立下载链接。颗粒和啁啾合成器的数据由合成器程序动态生成。
- Demo：提供了配套网站展示音频样本：https://christhetree.github.io/scrapl/。
- 复现材料：提供了完整的训练细节、超参数（附录E）、配置文件和复现说明。
- 引用的开源项目：论文未明确列出依赖的开源工具/模型库，但代码实现可能依赖PyTorch、nnAudio（CQT工具）等。

📌 **核心摘要**

这篇论文针对小波散射变换（尤其是联合时频散射变换，JTFS）作为神经网络损失函数时计算成本过高的问题，提出了SCRAPL（Scattering with Random Paths for Learning）。其核心思想是通过在每个训练步骤中随机采样少量（通常为一个）散射路径来近似全路径损失的梯度，从而将计算复杂度从与路径数P成正比降低到常数级。为稳定这一随机近似过程，作者提出了三项技术创新：1）路径自适应矩估计（P-Adam）；2）路径随机平均梯度加速法（P-SAGA）；3）基于合成器参数敏感性的θ-重要性采样（θ-IS）初始化策略。实验在三个无监督声音匹配任务（颗粒合成器、啁啾合成器、Roland TR-808鼓机）上进行。在颗粒合成任务中，SCRAPL在参数估计误差上仅比全路径JTFS高约1.5倍（65.7‰ vs. 42.4‰），但计算成本降低了约25倍（89.8ms vs. 1730ms），达到了帕累托最优（见图1）。在更复杂的TR-808鼓机匹配中，SCRAPL能稳定地保持声音的瞬态特征，即使在输入音频未对齐（meso设置）时也优于多尺度谱损失（MSS）。本文的主要贡献在于提供了一个实用且开源的框架，使得具有感知保证的散射变换损失能高效地应用于音频生成模型的训练，其局限性在于对部分音频特征（如衰减）的采样代表性不足。

---

### 🥉 [UALM: Unified Audio Language Model for Understanding, Generation and Reasoning](/audio-paper-digest-blog/posts/2026-05-04-ualm-unified-audio-language-model-for)

🔥 **8.5/10** | 前25% | #音频生成 | #自回归模型 | #统一音频模型 #音频问答

👥 **作者与机构**

- 第一作者：Jinchuan Tian（卡内基梅隆大学，NVIDIA）
- 通讯作者：未明确标注，论文指出所有作者贡献相等（Equal Contribution）
- 作者列表：
    - Jinchuan Tian（卡内基梅隆大学，NVIDIA）
    - Sang-gil Lee（NVIDIA）
    - Zhifeng Kong（NVIDIA）
    - Sreyan Ghosh（NVIDIA，马里兰大学）
    - Arushi Goel（NVIDIA）
    - Chao-Han Huck Yang（NVIDIA）
    - Wenliang Dai（NVIDIA）
    - Zihan Liu（NVIDIA）
    - Hanrong Ye（NVIDIA）
    - Shinji Watanabe（卡内基梅隆大学）
    - Mohammad Shoeybi（NVIDIA）
    - Bryan Catanzaro（NVIDIA）
    - Rafael Valle（NVIDIA）
    - Wei Ping（NVIDIA）

💡 **毒舌点评**

亮点在于首次系统性地证明了一个基于自回归语言模型的音频模型，可以通过数据缩放和特定技巧（如CFG和DPO）在生成质量上追平甚至超越扩散模型，并进一步将其扩展为能进行文本-音频联合推理的统一模型，技术路线清晰且有效。短板则在于其宣称的“统一”模型，其核心的音频理解数据集（AF3）和大规模生成数据（30M）并未公开，这使得“统一训练”和“匹配专用模型性能”的结论在独立复现层面打了折扣，更像一个强大的NVIDIA内部能力展示。

🔗 **开源详情**

- 代码： 提供官方GitHub仓库链接：`https://github.com/NVIDIA/audio-intelligence/tree/main/UALM`。
- 模型权重： 论文未提及公开预训练或后训练的模型权重。
- 数据集： 论文未提及公开其使用的30M音频生成数据集或用于UALM-Reason后训练的富描述数据集。
- Demo： 提供在线演示网页：`https://research.nvidia.com/labs/adlr/UALM`。
- 复现材料： 论文在附录中详细提供了预训练、后训练及推理的所有超参数配置（表5、6、7），并说明了代码库，为复现提供了清晰的路线图。
- 论文中引用的开源项目： Qwen2.5 LLM， X-codec， BigVGAN， LAION-CLAP， OpenL3， PaSST， PANNs， AudioBox-Aesthetics， Stable-Audio-Open， ETTA， Audio Flamingo 3等。

📌 **核心摘要**

该论文旨在解决音频领域中理解、生成与推理任务相互割裂的问题。其方法核心是构建一个统一的音频语言模型（UALM），该模型基于一个预训练的文本LLM，并扩展了音频输入和输出能力。论文首先通过UALM-Gen证明了自回归语言模型在大规模数据（30M样本）、分类器自由引导（CFG）和直接偏好优化（DPO）等技术的支持下，其文本到音频生成质量可达到与最先进扩散模型相当的水平。接着，通过精心设计的数据混合比例和模态对齐训练策略，将理解、生成和文本推理任务统一到单个UALM模型中，并在各项任务上匹配了专用SOTA模型的性能。最后，提出了UALM-Reason，通过引入“富描述”作为中间表示，并设计了丰富化、对话和自我反思等多模态思维链，首次在音频研究中实现了涉及文本和音频的跨模态生成推理。实验结果表明，统一的UALM在音频生成（如AudioCaps数据集FD=65.87，CL=0.62）、音频理解（MMAU均值74.1%）和文本推理任务上均表现优异。其意义在于为构建具备感知、创造与反思能力的通用音频智能体提供了可行的架构和训练范式。主要局限性在于其依赖的大规模合成数据集未公开，且“富描述”的质量评估方法有待完善。

---

### 4. [Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution Network for Few-step High-Fidelity Audio Generation](/audio-paper-digest-blog/posts/2026-05-04-flow2gan-hybrid-flow-matching-and-gan-with-multi)

🔥 **8.0/10** | 前25% | #音频生成 | #流匹配 | #GAN #少样本生成

👥 **作者与机构**

- 第一作者：Zengwei Yao（Xiaomi Corp., Beijing, China）
- 通讯作者：Daniel Povey（dpovey@xiaomi.com，Xiaomi Corp., Beijing, China）
- 作者列表：Zengwei Yao（Xiaomi Corp.）、Wei Kang（Xiaomi Corp.）、Han Zhu（Xiaomi Corp.）、Liyong Guo（Xiaomi Corp.）、Lingxuan Ye（Xiaomi Corp.）、Fangjun Kuang（Xiaomi Corp.）、Weiji Zhuang（Xiaomi Corp.）、Zhaoqing Li（Xiaomi Corp.）、Zhifeng Han（Xiaomi Corp.）、Long Lin（Xiaomi Corp.）、Daniel Povey（Xiaomi Corp.）

#

💡 **毒舌点评**

这篇论文巧妙地将Flow Matching的稳定训练与GAN的精细生成结合，提出了一种两阶段训练范式，成功实现了少步甚至一步的高质量音频生成，解决了推理速度与生成质量难以兼得的核心矛盾。但多分支网络结构增加了模型复杂度和实现难度，且论文主要验证语音波形生成，其对非语音、复杂环境音频的泛化优势并未充分体现。

#

🔗 **开源详情**

- 代码：提供代码仓库链接：`https://github.com/k2-fsa/Flow2GAN`。
- 模型权重：提供预训练检查点（checkpoints），在代码仓库中可用。
- 数据集：实验所用数据集（LibriTTS， Common Voice等）均为公开数据集。
- Demo：提供在线演示样例：`https://flow2gan.github.io`。
- 复现材料：论文在5.1节和附录A.3中提供了详尽的训练细节、模型配置（表10）、数据预处理信息、评估指标和基线模型设置，复现指导非常充分。
- 论文中引用的开源项目：依赖或对比的开源项目包括：Vocos， HiFi-GAN (MPD)， UnivNet (MRD)， BigVGAN， RFWave， PeriodWave， WaveFM， Encodec， F5-TTS， ScaledAdam优化器等。

📌 **核心摘要**

1. 要解决什么问题：现有音频生成方法面临两难：GAN训练不稳定、易模式崩塌；而基于扩散/Flow Matching的方法虽然训练稳定、生成质量高，但需要多步采样，推理计算开销大。
2. 方法核心是什么：提出Flow2GAN两阶段框架。第一阶段使用针对音频特性改进的Flow Matching进行预训练，以学习稳健的生成能力；第二阶段构建少步生成器，并使用精心设计的判别器（MPD， MRD）进行GAN微调，以实现高效、精细的音频生成。
3. 与已有方法相比新在哪里：a) 改进Flow Matching：将训练目标从估计速度场重新表述为端点估计（预测干净音频x1），避免了在音频静音区域估计速度的困难；引入谱能量自适应损失缩放，强调感知上更显著的静音区域。b) 两阶段训练策略：将改进的Flow Matching与GAN微调结合，前者提供强初始化，后者高效提升细节和推理速度。c) 多分辨率网络架构：扩展Vocos的单分辨率设计，采用多分支处理不同时间-频率分辨率的傅里叶系数，增强了模型的建模能力。
4. 主要实验结果如何：实验表明，Flow2GAN在Mel频谱图和音频令牌（Encodec）条件下均实现了高质量生成。在LibriTTS测试集上，其4步模型在PESQ（4.484）、ViSQOL（4.986）上优于所有对比方法（包括BigVGAN-v2， 但后者在大规模数据上训练）。1步模型也达到有竞争力的性能（PESQ 4.189， ViSQOL 4.957）。在通用音频令牌生成任务上，Flow2GAN在多数指标上优于MBD， RFWave等方法。推理速度方面，其1步模型在CPU上的xRT为4.85（优于实时），GPU上高达851.67倍实时，远超大多数扩散模型。
5. 实际意义是什么：该工作提供了在音频生成领域质量与效率之间更优的权衡方案。少步甚至一步推理能力使其非常适合实时或资源受限的应用场景（如TTS系统、交互式音频合成）。作为TTS声码器时，其4步版本与PeriodWave-Turbo性能相当但速度更快。
6. 主要局限性是什么：a) 模型参数量（78.9M）大于Vocos（13.5M）和RFWave（18.1M），略逊于BigVGAN（112.4M）。b) 论文主要评估在语音波形生成上，对于更复杂的非语音音频（如音乐、环境声）的优势有待进一步验证。c) GAN微调阶段需要针对不同步数（1/2/4步）分别训练和部署独立模型，增加了维护成本。

---

### 5. [Aurelius: Relation Aware Text-to-Audio Generation At Scale](/audio-paper-digest-blog/posts/2026-05-04-aurelius-relation-aware-text-to-audio-generation)

🔥 **8.0/10** | 前25% | #音频生成 | #流匹配 | #基准测试 #数据集

👥 **作者与机构**

- 第一作者：Yuhang He (Microsoft Research)
- 通讯作者：Yuhang He (Microsoft Research)
- 作者列表：Yuhang He (Microsoft Research), He Liang (University of Oxford, Department of Computer Science), Yash Jain (Microsoft Research), Andrew Markham (Microsoft Research), Vibhav Vineet (Microsoft Research)

💡 **毒舌点评**

亮点：本文核心贡献在于为“关系感知文本到音频生成”这一被忽视的子任务，系统性地构建了两个大规模、高质量的专用数据集（AudioEventSet 和 AudioRelSet）和一套完整的评测基准，精准填补了领域空白。短板：论文的“方法”部分更多是基于现有基线模型（如TangoFlux）进行评测和简单的微调实验，缺乏一个针对关系感知生成提出全新、完整架构的深度技术方案，创新性更偏向数据与评测而非模型本身。

🔗 **开源详情**

- 代码：论文提供了代码仓库链接：https://github.com/yuhanghe01/Aurelius
- 模型权重：论文中未提及是否公开其自身提出的模型权重，但评测了多个公开的基线模型（如TangoFlux, AudioGen）。
- 数据集：AudioEventSet和AudioRelSet的构建方法已详细描述，但论文中未明确说明数据集是否公开以及如何获取。项目主页链接为：https://yuhanghe01.github.io/Aurelius-Proj/
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了详细的基线模型推理设置（附录表III）、代理工作流的具体实现（附录.3）、以及数据集构建的完整描述（3.1-3.3节），为复现提供了必要信息。
- 论文中引用的开源项目：TangoFlux, AudioGen, PANNs (用于音频事件检测和声学效果分类), Qwen-family LLMs (用于代理工作流)。

📌 **核心摘要**

1.  要解决什么问题：现有文本到音频生成模型在处理包含多个音频事件及其复杂空间、时间、逻辑关系的描述时能力严重不足，其关系建模能力未得到充分研究和评估。
2.  方法核心是什么：提出Aurelius框架，其核心是构建两个大规模、高质量的专用语料库：包含110种独特音频事件的AudioEventSet和包含100种关系的AudioRelSet。二者通过“关系-文本模板化”与“事件实例化”策略组合，可生成海量多样化的`<文本，音频>`训练/测试对。
3.  与已有方法相比新在哪里：首次为关系感知TTA任务提供了大规模、系统化的基准。新在：1) 专用数据集的规模与质量远超以往小规模探索（如RiTTA的11种关系）；2) 提出关系“元数”概念和可扩展的配对生成策略；3) 对现有SOTA模型进行了全面、深入的基准测试与分析。
4.  主要实验结果如何：基准测试显示，现有最强模型（如TangoFlux, AudioGen）在核心关系感知指标mAMSR上得分极低，最高仅为2.22%（表2）。将TangoFlux在数据集上微调后，其mAMSR从零样本的1.77%显著提升至5.58%（表3），证明了基准的有效性。但所有模型在复杂嵌套关系和高“元数”关系上仍表现不佳（图6、图7）。
5.  实际意义是什么：为关系感知TTA研究建立了可量化、可扩展的公共测试平台，揭示了当前技术的根本短板，指明了未来需重点攻克关系建模能力，而非仅提升音频保真度。
6.  主要局限性是什么：1) 核心贡献集中于数据与评测，未提出全新的生成模型架构；2) 关系复杂度（最高五元）和规模（100种）仍可能无法覆盖真实世界所有潜在关系；3) 自动化评测依赖音频事件检测和声学效果分类器，其准确性可能影响最终得分。

---

### 6. [AC-Foley: Reference-Audio-Guided Video-to-Audio Synthesis with Acoustic Transfer](/audio-paper-digest-blog/posts/2026-05-04-ac-foley-reference-audio-guided-video-to-audio)

🔥 **8.0/10** | 前25% | #音频生成 | #流匹配 | #多模态模型 #零样本

👥 **作者与机构**

- 第一作者：Pengjun Fang（香港科技大学）
- 通讯作者：未明确说明。论文列出了多位作者及其单位，通常通讯作者会在投稿系统中标注，但此处文本未明确指出。根据作者列表顺序和惯例，可能为Qifeng Chen或Harry Yang，但为避免猜测，此处标记为“未说明”。
- 作者列表：
    - Pengjun Fang（香港科技大学）
    - Yingqing He（香港科技大学）
    - Yazhou Xing（香港科技大学）
    - Qifeng Chen（香港科技大学）
    - Ser-Nam Lim（中佛罗里达大学）
    - Harry Yang（中佛罗里达大学）

💡 **毒舌点评**

AC-Foley的亮点在于用“听觉范例”替代“文字描述”来指挥AI配音，这巧妙绕过了语言在描述“微妙质感”时的无力感，并通过精心设计的两阶段训练确保了模型不是简单复读机。然而，其短板也明显：当视频或参考音本身涉及多重声源交叠或节奏极端错配时（比如用猫叫配急促打字），模型的协调能力就会捉襟见肘，暴露了其在处理复杂声景和时序冲突上的稚嫩。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。仅在伦理声明中提及未来将以Apache 2.0许可证发布模型。
- 模型权重：未提及公开预训练权重。
- 数据集：使用公开数据集（VGGSound, AudioCaps2.0, WavCaps），并说明了其许可证（见附录F）。
- Demo：未提供在线演示链接。
- 复现材料：提供了详尽的训练细节（优化器、学习率schedule、batch size、训练硬件与时间）、网络结构参数（隐藏维度、block数量），以及消融实验的设置，复现信息较为充分。
- 引用的开源项目/模型：论文依赖并提及了以下开源工作：CLIP（视觉/文本编码器）、Synchformer（同步特征提取器）、BigVGAN（声码器）、ImageBind（多模态嵌入，用于数据筛选和评估）、AdamW（优化器）。

📌 **核心摘要**

这篇论文（ICASSP 2026 / ICLR 2026）针对现有视频到音频（V2A）生成方法中依赖文本控制导致的语义粒度粗和描述模糊两大瓶颈，提出了AC-Foley，一种参考音频引导的视频到音频合成框架。其核心方法是直接将参考音频的声学特征作为条件信号，通过多模态Transformer和基于流匹配的生成模型，合成与视频同步且具有参考音频音色特性的声音。与已有方法相比，AC-Foley的新颖之处在于：1) 用音频直接控制，实现了细粒度音色迁移和零样本声音生成；2) 提出了包含重叠与非重叠条件的两阶段训练策略，解决了参考音频的时间适配与泛化问题。

主要实验结果如下：在VGGSound测试集上，AC-Foley在多个指标上超越了现有SOTA方法。例如，在“有音频条件”设置下，其FDPaSST达到56.00（低于MMAudio+CLAP基线的70.80），MCD达到11.37（低于基线的14.63）。消融实验证实了两阶段训练和多模态条件组合的有效性（表4，表6）。在“无音频条件”设置下，该模型性能也具有竞争力（表1）。此外，在音色迁移任务上，AC-Foley在未使用Greatest Hits数��集训练的情况下，超越了专门训练的CondFoley模型（表2）。该工作的实际意义在于为电影、游戏等领域的音效设计提供了更灵活、精确的AI辅助工具。主要局限性包括在处理多声源复杂环境和极端时间错配场景时性能下降（见论文LIMITATIONS部分）。

---

### 7. [TangoFlux: Super Fast and Faithful Text to Audio Generation with Flow Matching and Clap-Ranked Preference Optimization](/audio-paper-digest-blog/posts/2026-05-04-tangoflux-super-fast-and-faithful-text-to-audio)

🔥 **8.0/10** | 前25% | #音频生成 | #流匹配 | #偏好优化 #扩散模型

👥 **作者与机构**

- 第一作者：Chia-Yu Hung (Nanyang Technological University, NTU)
- 通讯作者：Navonil Majumder (NTU)， Soujanya Poria (NTU)
- 作者列表：Chia-Yu Hung (NTU), Navonil Majumder (NTU), Zhifeng Kong (NVIDIA), Ambuj Mehrish (Ca’ Foscari University of Venice), Amir Ali Bagherzadeh (Lambda Labs), Chuan Li (Lambda Labs), Rafael Valle (NVIDIA), Bryan Catanzaro (NVIDIA), Soujanya Poria (NTU)

#

💡 **毒舌点评**

这篇论文巧妙地将CLAP作为“裁判”来解决音频生成对齐中缺乏自动评价标准的痛点，提出的CRPO“自弈”优化思路确实让模型性能在迭代中不断提升，效果立竿见影。但依赖CLAP这个“裁判”本身的偏好（可能偏向特定音频风格或描述理解能力）进行优化，是否会让模型学会“讨好裁判”而非真正理解复杂、抽象的文本描述？这是CRPO框架需要面对的更深层问题。

### 📌 核心摘要
1.  要解决什么问题：文本到音频生成模型面临对齐（Alignment）挑战，即生成内容与文本描述不完全匹配，存在事件遗漏、顺序错误甚至“幻觉”。主要瓶颈是构建偏好数据集（用于对齐训练）困难，因为音频领域缺乏像语言模型那样的标准化答案或现成奖励模型。
2.  方法核心是什么：提出TangoFlux模型和CLAP-Ranked Preference Optimization（CRPO）框架。TangoFlux是基于流匹配（Rectified Flow）和Transformer架构的高效TTA模型。CRPO的核心是迭代式“自改进”：在每个训练迭代中，用当前模型为每个提示生成多个音频样本，利用CLAP（一个文本-音频联合嵌入模型）对这些样本按与文本的匹配度进行排序，从而自动构建偏好对（赢家-输家），再用改进的DPO损失（LCRPO）进行优化。
3.  与已有方法相比新在哪里：a) 动态数据生成：不同于使用静态偏好数据集（如BATON， Audio-Alpaca），CRPO在每次迭代中都生成新的偏好数据，使模型能持续自我优化，避免在固定数据上过拟合。b) 代理奖励模型：成功验证了CLAP可作为有效的音频对齐代理奖励模型，解决了构建偏好数据的关键障碍。c) 优化目标改进：提出了LCRPO损失函数，在标准DPO损失（LDPO-FM）的基础上加入了赢家样本的流匹配损失作为正则项，以防止对齐过程中音频保真度的下降。
4.  主要实验结果如何：TangoFlux（515M参数）在AudioCaps测试集上的多个客观指标（如CLAPscore: 0.480, FDopenl3: 75.1）和人类评估（整体质量OVL和相关性REL的z-score、Elo分数）上均优于之前的SOTA模型（如Tango 2， Stable Audio Open）。它在A40 GPU上生成30秒音频仅需3.7秒，速度优势明显。消融实验证明，CRPO动态生成的数据优于静态偏好数据集；LCRPO损失函数优于标准的LDPO-FM损失。
    - 主要对比结果表（来自论文表1、表2、表3）：
        | 模型 | 参数量 | 生成时长 | 步数 | FDopenl3↓ | KLpasst↓ | CLAPscore↑ | 推理时间(s) |
        | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
        | Tango 2 | 866M | 10s | 200 | 108.4 | 1.11 | 0.447 | 22.8 |
        | Stable Audio Open | 1056M | 47s | 100 | 89.2 | 2.58 | 0.291 | 8.6 |
        | TANGOFLUX (最终) | 515M | 30s | 50 | 75.1 | 1.15 | 0.480 | 3.7 |
        | 模型 | z-score (OVL) | z-score (REL) | Elo (OVL) | Elo (REL) |
        | :--- | :--- | :--- | :--- | :--- |
        | Tango 2 | -0.019 | 0.1602 | 1,419 | 1,507 |
        | SA Open | 0.0723 | -0.3584 | 1,444 | 1,268 |
        | TANGOFLUX | 0.2486 | 0.6919 | 1,501 | 1,628 |
        | 对齐方法 | FDopenl3↓ | CLAPscore↑ | KLpasst↓ | Elo (REL) |
        | :--- | :--- | :--- | :--- | :--- |
        | TANGOFLUX-base (未对齐) | 80.2 | 0.431 | 1.22 | 1,253 |
        | TANGOFLUX-baton (静态数据) | 80.5 | 0.437 | 1.20 | 1,392 |
        | TANGOFLUX (CRPO动态数据) | 75.1 | 0.480 | 1.15 | 1,520 |
5.  实际意义是什么：提供了构建高效、可控、高质量文本到音频生成系统的可行路径。CRPO框架为多模态内容生成的对齐问题提供了一种通用的、可自动化的解决方案。开源模型和代码有助于社区进一步研究和应用。
6.  主要局限性是什么：a) 对齐质量上限受限于作为代理奖励模型的CLAP的能力与偏见。b) 自动构建的偏好数据可能无法完全捕捉复杂、主观的人类偏好（如创意性、情感细微差别）。c) 模型对超长、超复杂或高度抽象的文本描述的生成能力仍有待验证。

## 详细分析

### 01.模型架构
TangoFlux的整体架构和训练流程可概括为“预训练-对齐”两阶段，并包含一个创新的在线迭代对齐循环。

![TangoFlux整体训练流程图](icassp-img://qgNs5NmQB7/0.png)
图1：TangoFlux的整体训练流程图。 该图清晰地展示了训练的两个主要阶段：1）预训练：使用WavCaps和AudioCaps数据集，通过流匹配损失（ℒFM）训练TangoFlux-base模型。2）在线迭代对齐（CRPO）：这是论文的核心。从基线模型π₀开始，迭代地进行三个步骤：a) 采样：从提示库中采样一批提示，用当前模型πk为每个提示生成多个音频样本。b) 训练数据构建：使用CLAP模型对生成的音频进行评分和排序，为每个提示构建赢家-输家偏好对，形成数据集𝒟k。c) 训练：使用该数据集，结合流匹配损失（ℒFM）和DPO损失（ℒCRPO）将模型πk优化为πk₊₁。这个循环迭代进行，使模型持续自我改进。

模型架构细节：
- 骨干网络：采用混合Transformer架构，结合了6个多模态扩散Transformer（MMDiT） 块和18个扩散Transformer（DiT） 块。MMDiT块能更好地融合条件信息，而DiT块则更简洁高效，这种混合设计平衡了性能与扩展性。每个块有8个注意力头，隐藏维度128，总宽度1024，总参数量约515M。
- 条件控制：采用双重条件控制：
    - 文本条件：使用预训练的FLAN-T5编码器对输入文本提示进行编码，得到文本嵌入 `c_text`。
    - 时长条件：为了实现可变时长生成（最长30秒），使用一个小型神经网络将目标时长编码为时长嵌入 `c_dur`。关键在于，模型始终在固定长度（对应30秒音频）的潜空间上操作，`c_dur` 明确控制其中多少部分用于存放实际音频内容，其余部分填充静音。
- 音频编码：使用来自Stable Audio Open的预训练变分自编码器（VAE）。它将44.1kHz的立体声波形编码为潜表示 `Z`，并在推理时将模型生成的潜表示解码回波形。VAE在TangoFlux训练期间保持冻结。
- 生成过程（流匹配）：模型学习一个从噪声 `x₀`（高斯分布）到目标潜表示 `x₁` 的“速度场” `u(x_t, t; θ)`。在推理时，从纯噪声 `x₀` 开始，使用Euler求解器（或Heun求解器）沿着学习到的速度场迭代求解50步，最终得到干净的音频潜表示 `x₁`，再经VAE解码得到音频。

### 02.核心创新点
1.  CLAP-Ranked Preference Optimization (CRPO) 框架：
    - 是什么：一种动态的、迭代式的偏好数据生成与模型对齐方法。它让模型在训练过程中持续生成自己的“教材”（偏好数据），并用它来优化自己。
    - 之前方法的局限：之前为TTA模型对齐构建偏好数据主要依赖：a) 人工标注（如BATON），成本高、难以规模化；b) 静态合成数据集（如Audio-Alpaca），灵活性差，无法随模型进化。
    - 如何起作用：在每次迭代中，用当前模型生成多个样本，用CLAP（作为代理奖励模型）自动排序构建偏好对，然后执行DPO优化。这形成了一个“生成-评估-优化”的闭环。
    - 带来的收益：实验证明，由CRPO动态生成的数据集，在后续对齐训练中，性能显著优于使用静态的BATON和Audio-Alpaca数据集（见表3）。在线生成优于离线固定数据（见图2），避免了过早的性能饱和与退化。

2.  针对流匹配的LCRPO损失函数：
    - 是什么：在标准DPO-FM损失（LDPO-FM）的基础上，额外加入了赢家样本的流匹配损失（LFM）作为正则项。
    - 之前方法的局限：直接将LLM上的DPO损失（LDPO-FM）应用于流匹配模型时，观察到赢家和输家的损失值会同时上升（见图4），这可能表明优化过度，导致生成音频偏离高质量的分布（奖励黑客问题）。
    - 如何起作用：`ℒ_CRPO = ℒ_DPO-FM + ℒ_FM`。额外的 `ℒ_FM` 项锚定了模型对赢家样本的建模能力，防止其在拉大赢家-输家差距的同时，自身质量也下降。
    - 带来的收益：图3和图4表明，与仅使用LDPO-FM相比，LCRPO的损失增长更平稳，且在保持相似KL散度和FD的情况下，取得了更高的CLAP分数，优化过程更稳定。

3.  高效且强大的文本到音频生成模型TangoFlux：
    - 是什么：一个参数量适中（515M）、基于流匹配、支持可变时长、训练数据全公开的TTA模型。
    - 之前方法的局限：许多高性能的TTA模型（如Stable Audio, MusicGen）使用私有数据训练；扩散模型通常需要大量去噪步数（100-200步），推理慢。
    - 如何起作用：采用MMDiT/DiT混合架构和流匹配目标，流匹配相比扩散通常更高效（更少的采样步数达到更好质量）。通过时长条件控制实现变长生成。使用公开数据（WavCaps, AudioCaps）训练。
    - 带来的收益：在仅需50步、3.7秒推理时间内，生成44.1kHz的30秒音频，并在多个基准上达到SOTA（表1），证明了其在效率和效果上的优势。

### 03.细节详述
- 训练数据：
    - 预训练数据：WavCaps数据集（约40万条音频及描述）。所有音频被处理为单声道，然后复制为伪立体声以兼容VAE。短于30秒的填充静音至30秒，长于30秒的中心裁剪至30秒。
    - 微调数据：AudioCaps训练集（约4.5万条）。
    - CRPO偏好数据：从AudioCaps训练集中随机采样20,000个提示，每个提示用当前模型生成5个音频，用CLAP（`630k-audioset-best` 检查点）对5个音频评分，选取最高分和最低分构成一对偏好数据。
- 损失函数：
    - 流匹配损失（ℒ_FM）：`ℒ_FM = E_{x₁,x₀,t} ||u(x_t, t; θ) - v_t||²`，其中 `v_t = x₀ - x₁` 是真实速度。用于预训练和作为CRPO损失的一部分。
    - DPO-FM损失（ℒ_DPO-FM）：见公式(2)。通过对比赢家（`x_w`）和输家（`x_l`）在模型 `θ` 和参考模型 `θ_r`（固定为每轮迭代开始时的检查点）下的流匹配损失，来优化偏好排序。
    - CLARPO损失（ℒ_CRPO）：`ℒ_CRPO = ℒ_DPO-FM + ℒ_FM`。`ℒ_FM` 在赢家样本上计算。
- 训练策略：
    - 预训练：在WavCaps上训练80个epoch。使用AdamW优化器（β1=0.9， β2=0.95），峰值学习率 `5e-4`，线性warmup 2000步。批次大小80（5个A40 GPU，每卡16）。
    - 微调：在AudioCaps训练集上继续微调65个epoch，得到TANGOFLUX-base。
    - 对齐（CRPO迭代）：批次大小48，峰值学习率 `1e-5`，线性warmup 100步。每次CRPO迭代训练8个epoch，取最后一个epoch的检查点用于下一轮的数据生成。共进行5次迭代。
- 关键超参数：
    - 模型参数：515M。
    - 隐藏维度：1024。
    - 注意力头数：8。
    - 流匹配时间步 `t` 采样：从logit-normal分布（均值0，方差1）中采样。
    - 推理：Euler求解器， 50步，Classifier-Free Guidance (CFG) 比例=4.5。
- 训练硬件：5个NVIDIA A40 GPU。
- 推理细节：模型始终在30秒的固定潜空间上操作。通过时长嵌入控制生成内容占实际时长的比例。推理时，采样一个长度为30秒对应的潜空间噪声，经50步Euler积分得到潜表示，再经VAE解码为波形。若请求时长小于30秒，则取前对应时长的音频。
- 正则化/稳定技巧：在LCRPO损失中添加赢家样本的流匹配损失作为正则化项，以稳定优化过程，防止奖励黑客。

### 04.实验结果
论文在AudioCaps测试集上进行了全面的客观和主观评估。

1. 主要对比结果（客观指标）：见下表。TangoFlux在大多数指标上取得最优，尤其在衡量音频-文本对齐的CLAPscore和衡量音频质量的FDopenl3上优势明显。推理速度也是其显著优势。

| 模型 | 参数量 | 生成时长 | 步数 | FDP ↓ | FDopenl3 ↓ | KLpasst ↓ | KAD ↓ | CLAPscore ↑ | IS ↑ | 推理时间(s) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ConsistencyTTA | 559M | 10s | 1 | 20.9 | 94.6 | 1.43 | 0.61 | 0.377 | 9.1 | <0.2 |
| AudioLCM | 160M | 10s | 1 | 19.2 | 107.4 | 1.58 | 0.56 | 0.363 | 10.2 | <0.2 |
| AudioLDM 2-large | 712M | 10s | 200 | 33.2 | 108.3 | 1.81 | 1.78 | 0.419 | 7.9 | 24.8 |
| Make-An-Audio 2 | 160M | 10s | 100 | 15.6 | 98.7 | 1.33 | 0.45 | 0.406 | 9.4 | 2.3 |
| EzAudio-XL | 874M | 10s | 200 | 15.8 | 84.7 | 1.20 | 0.15 | 0.460 | 10.8 | 12.2 |
| Stable Audio Open | 1056M | 47s | 100 | 42.6 | 89.2 | 2.58 | 4.15 | 0.291 | 9.9 | 8.6 |
| Tango | 866M | 10s | 200 | 24.5 | 107.9 | 1.20 | 1.71 | 0.407 | 7.8 | 22.8 |
| Tango 2 | 866M | 10s | 200 | 20.8 | 108.4 | 1.11 | 1.38 | 0.447 | 9.0 | 22.8 |
| GenAU-Full-L | 1.25B | 10s | 100 | 20.1 | 93.2 | 1.37 | 0.96 | 0.447 | 12.0 | 5.3 |
| AudioX | 1.1B | 10s | 250 | 25.2 | 77.6 | 1.56 | 1.30 | 0.380 | 10.0 | 9.6 |
| TANGOFLUX-base | 516M | 30s | 50 | 20.7 | 80.2 | 1.22 | 0.67 | 0.431 | 11.7 | 3.7 |
| TANGOFLUX | 516M | 30s | 50 | 20.3 | 75.1 | 1.15 | 0.60 | 0.480 | 12.2 | 3.7 |

2. 主要对比结果（人类评估）：在50个复杂提示上，由至少4名标注员进行0-100分的评分，评估整体音频质量（OVL）和文本相关性（REL）。指标包括z-score、排名和Elo分数。TangoFlux在所有指标上均领先。

| 模型 | z-scores | | Ranking (Mean, Mode) | | Elo | |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| | OVL | REL | OVL | REL | OVL | REL |
| AudioLDM 2 | -0.3020 | -0.4936 | 3.5, 4 | 3.7, 4 | 1,236 | 1,196 |
| SA Open | 0.0723 | -0.3584 | 2.4, 1,3 | 3.3, 3 | 1,444 | 1,268 |
| Tango 2 | -0.019 | 0.1602 | 2.4, 2 | 1.9, 2 | 1,419 | 1,507 |
| TANGOFLUX | 0.2486 | 0.6919 | 1.7, 2 | 1.1, 1 | 1,501 | 1,628 |

3. 关键消融实验：
- CRPO vs 静态偏好数据集（表3）：使用CRPO动态数据对齐的TangoFlux，在CLAPscore（0.480 vs 0.437/0.448）和人类评估Elo分数上，显著优于使用BATON或Audio-Alpaca静态数据对齐的版本。

![在线与离线CRPO训练曲线对比](icassp-img://qgNs5NmQB7/8.png)
图2：在线CRPO与离线CRPO的训练曲线对比。 该图显示了5次迭代中CLAPscore、IS和KLpasst的变化。离线CRPO（使用固定数据）在第二轮后CLAPscore开始下降，KLpasst上升，表明过拟合和性能退化。在线CRPO（每轮生成新数据）的CLAPscore持续上升至第4轮，KLpasst持续下降，IS持续上升，证明了动态数据生成的必要性和有效性。

- LCRPO vs LDPO-FM（图3，图4）：
    ![LCRPO与LDPO-FM在不同迭代次数下的性能指标对比](icassp-img://qgNs5NmQB7/2.png)
    图3：LCRPO与LDPO-FM在不同迭代次数下的性能指标对比。 (a) CLAPscore：LCRPO持续提升且高于LDPO-FM。(b) FDopenl3：两者相近。(c) KLpasst：两者相近。表明LCRPO在提升对齐度（CLAPscore）的同时，能维持生成质量和多样性。

    ![LCRPO与LDPO-FM的赢家/输家损失变化](icassp-img://qgNs5NmQB7/3.png)
    图4：LCRPO与LDPO-FM的赢家/输家损失随迭代次数的变化。 两种损失函数的赢家和输家损失都随迭代增加，且差值（margin）也在拉大。但LCRPO的损失增长更平缓、稳定，而LDPO-FM在迭代3后增长加速，可能暗示优化不稳定或过拟合。

4. 其他重要实验：
- 每个提示生成音频数量（N）的影响（表4）：N=5或10略优于N=2，但差异不大，需权衡计算成本。
- CLAP作为奖励模型的验证（表5）：采用Best-of-N策略（N从1增加到15），CLAPscore提升，KLpasst下降，FDopenl3不变，证明CLAP能有效识别更对齐的样本，且不损害多样性/质量。
- CFG比例的影响（表6）：存在权衡。CFG=3.5时CLAPscore最高（0.481），CFG=4.5或5.0时FDopenl3更低（75.1/74.6）。论文最终选择CFG=4.5。
- 求解器对比（表7）：Euler求解器（50步）略优于Heun求解器（100步），CLAPscore 0.480 vs 0.474。
- 时长控制准确性（图5）：生成的音频实际时长与请求时长高度匹配。

![不同模型CLAPscore与推理时间的对比曲线](icassp-img://qgNs5NmQB7/5.png)
图6：不同模型CLAPscore与推理时间的对比曲线。 (a) CLAPscore vs Inference Time：TangoFlux在3.7秒（50步）时达到0.480，远超同时间点的其他模型。(b) FDopenl3 vs Inference Time：TangoFlux在3.7秒时FDopenl3为75.1，表现优异。这直观展示了其在效率-效果上的领先地位。

### 05.评分理由
- 学术质量：6.0/7。论文的创新点（CRPO框架、LCRPO损失）设计合理，且通过严谨的实验（多基线对比、多角度消融、客观与主观评估相结合）得到了充分验证。技术细节描述清晰，论证逻辑连贯。不足之处在于模型架构本身不是最前沿的颠覆性设计，且对齐效果受限于CLAP这一代理模型。
- 选题价值：1.5/2。文本到音频生成是当前AI生成内容（AIGC）的重要前沿，具有巨大的创意产业应用潜力。本文直击该领域从“生成”到“可控、高质量生成”的关键瓶颈——数据高效的对齐方法，选题精准且重要。
- 开源与复现加成：+0.5。论文不仅承诺开源，更在细节披露上堪称模范，提供了从数据处理、模型配置、训练日志到评估脚本的全方位信息，极大地降低了学术界和工业界复现和跟进的门槛，对社区贡献巨大。

### 开源详情
- 代码：论文明确承诺将公开代码仓库链接（https://tangoflux.github.io/ 提供了项目主页和示例），但具体代码链接在论文提交时未提供，需待正式发布。
- 模型权重：论文明确承诺将开源模型权重。
- 数据集：训练所用数据集（WavCaps， AudioCaps）均为公开数据集。CRPO构建的偏好数据集由模型动态生成，非固定公开。
- Demo：提供了在线演示网站（https://tangoflux.github.io/），包含模型生成的音频样本对比。
- 复现材料：提供了极其详尽的附录，包括：完整的训练超参数（优化器、学习率、批次大小、轮数）、所有评估指标的实现细节、人类评估的指南和界面、复杂评估提示的生成模板、不同设置（CFG， N采样数）的消融实验结果等。
- 论文中引用的开源项目：依赖的主要开源组件包括：FLAN-T5（文本编码器）、CLAP（奖励模型， 来自 `lukewys/laion_clap`）、Stable Audio Open VAE（音频编解码器）、FLUX 模型架构设计。

🔗 **开源详情**

- 代码：论文明确承诺将公开代码仓库链接（https://tangoflux.github.io/ 提供了项目主页和示例），但具体代码链接在论文提交时未提供，需待正式发布。
- 模型权重：论文明确承诺将开源模型权重。
- 数据集：训练所用数据集（WavCaps， AudioCaps）均为公开数据集。CRPO构建的偏好数据集由模型动态生成，非固定公开。
- Demo：提供了在线演示网站（https://tangoflux.github.io/），包含模型生成的音频样本对比。
- 复现材料：提供了极其详尽的附录，包括：完整的训练超参数（优化器、学习率、批次大小、轮数）、所有评估指标的实现细节、人类评估的指南和界面、复杂评估提示的生成模板、不同设置（CFG， N采样数）的消融实验结果等。
- 论文中引用的开源项目：依赖的主要开源组件包括：FLAN-T5（文本编码器）、CLAP（奖励模型， 来自 `lukewys/laion_clap`）、Stable Audio Open VAE（音频编解码器）、FLUX 模型架构设计。

---

### 8. [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-04-layersync-self-aligning-intermediate-layers)

✅ **7.5/10** | 前25% | #音频生成 | #扩散模型 | #多模态模型 #自监督学习

👥 **作者与机构**

- 第一作者：Yasaman Haghighi（Ecole Polytechnique Fédérale de Lausanne (EPFL)）
- 通讯作者：Alexandre Alahi（Ecole Polytechnique Fédérale de Lausanne (EPFL)）
- 作者列表：Yasaman Haghighi（EPFL）、Bastien van Delft（EPFL）、Mariam Hassan（EPFL）、Alexandre Alahi（EPFL）

💡 **毒舌点评**

这篇论文的亮点在于其极致的“自给自足”哲学——用模型自己最强的层当老师，去教最弱的层，完全抛开了笨重的外部模型（如DINOv2），这个想法既优雅又实用，在多个模态上都跑通了，训练加速效果非常惊人。但短板是，这种“强层指导弱层”的启发式规则选择（比如跳过最后20%的层）感觉有点“经验主义”，理论上的解释（良性循环）目前更多是一种假设，缺乏更深层次的数学证明或机理分析，让人忍不住想问：这种对齐会不会在后期“扼杀”特征多样性，或者让模型过早陷入某种次优的表示空间？

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：`https://github.com/vita-epfl/LayerSync.git`。
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：使用的是公开数据集（ImageNet， MTG-Jamendo， HumanML3D， CLEVRER， MixKit），论文中未说明获取方式，但这些是常见公开数据集。
- Demo：论文中未提及在线演示。
- 复现材料：非常充分。论文附录（Section L, M）详细列出了所有实验的超参数设置（表18， 19）、训练硬件、采样器配置、评估指标细节等。算法伪代码（Algorithm 1）也在附录中给出。
- 依赖的开源项目：主要依赖于SiT（Ma et al., 2024）作为基础模型架构，以及Stable Diffusion的VAE用于图像编码。

📌 **核心摘要**

这篇论文旨在解决使用外部大型预训练模型（如视觉语言模型）来引导扩散模型中间层表示时所带来的计算开销大、数据依赖强、跨模态迁移难的问题。作者提出了一种名为LayerSync的自包含、即插即用的正则化方法。其核心思想是：扩散模型内部不同层学习的特征质量存在异质性，深层的特征语义更丰富。因此，可以利用模型自身的这些深层强特征作为“内在引导信号”，通过最大化浅层弱特征与深层强特征之间的相似度，来正则化和提升浅层特征的学习。与已有的外部引导方法（如REPA）相比，LayerSync完全不依赖额外的模型或数据，计算开销几乎为零；与同属自包含范畴的Dispersive Loss方法相比，它提供了更具方向性的学习信号。实验表明，LayerSync在图像生成任务上可将训练加速超过8.75倍（FID改善23.6%），并在音频、人类动作和视频生成任务上均一致提升了生成质量和训练效率。此外，该方法还改善了模型各层的内部表征质量。其局限性包括：关键的层选择策略依赖启发式规则，且“良性循环”的理论支撑有待加强。

| 任务 | 数据集 | 指标 | 基线 (SiT-XL/2) | + LayerSync | 提升 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 图像生成 | ImageNet 256x256 | FID↓ (80 Epochs) | 17.97 | 11.24 | 37.5% |
| 图像生成 | ImageNet 256x256 | FID↓ (800 Epochs) | 8.99 | 6.87 | 23.6% |
| 音频生成 | MTG-Jamendo | FAD↓ (650 Epochs) | 0.251 | 0.199 | 20.7% |
| 人类动作生成 | HumanML3D | FID↓ (600K Iters) | 0.5206 | 0.4801 | 7.7% |

---

### 9. [AudioX: A Unified Framework for Anything-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-04-audiox-a-unified-framework-for-anything-to-audio)

✅ **7.5/10** | 前25% | #音频生成 | #扩散模型 | #音频大模型 #多模态模型

👥 **作者与机构**

- 第一作者：Zeyue Tian (Hong Kong University of Science and Technology)
- 通讯作者：Wei Xue† (Hong Kong University of Science and Technology), Yike Guo† (Hong Kong University of Science and Technology)
- 作者列表：Zeyue Tian (Hong Kong University of Science and Technology), Zhaoyang Liu (Hong Kong University of Science and Technology), Yizhu Jin (Hong Kong University of Science and Technology), Ruibin Yuan (Hong Kong University of Science and Technology), Liumeng Xue (Hong Kong University of Science and Technology), Xu Tan (Independent Researcher), Qifeng Chen (Hong Kong University of Science and Technology), Wei Xue† (Hong Kong University of Science and Technology), Yike Guo† (Hong Kong University of Science and Technology)

#

💡 **毒舌点评**

本文的亮点在于构建了一个工程上非常扎实的统一框架，其设计的多模态自适应融合模块（MAF）有效解决了不同模态信号干扰的问题，并且配套构建的IF-caps数据集在质量和规模上都为训练该类模型提供了宝贵资源。短板在于，尽管实验全面，但论文中声称的“任何东西到音频生成”在当前实现中主要限于文本、视频和音频三种条件输入，对于“任何东西”（如图像、草图等）的泛化能力论证不足，更像一个“文本/视频/音频到音频”的强统一模型。

### 📌 核心摘要
本文旨在解决当前音频生成模型大多局限于单一模态输入（如仅文本或仅视频）和单一输出域（如音效或音乐）的问题，提出一个名为AudioX的统一框架，实现从多种模态条件（文本、视频、音频）生成高质量音频和音乐。方法核心是构建一个基于Diffusion Transformer (DiT)的生成骨干网络，并创新性地引入轻量级多模态自适应融合（MAF）模块，该模块通过门控和可学习查询的交叉注意力机制，自适应地加权和对齐不同模态的特征，再进行融合，以生成统一的条件嵌入来指导扩散过程。与已有方法相比，新在两点：1）提出了一个真正支持多模态混合条件输入、多任务统一生成的框架，而非针对单一任务的专用模型；2）设计并构建了IF-caps大规模高质量数据集（含超过700万样本），并通过结构化的两阶段标注流水线（先使用Gemini 2.5 Pro生成高质量注释，再使用Qwen2-Audio进行数据增强）提供了细粒度的监督信号。主要实验结果表明，AudioX在多个任务和基准上达到了顶尖或极具竞争力的性能，例如在T2A-bench指令跟随评测中，其类别准确率（Cat-acc）达34.2%，显著高于最强基线Make-An-Audio2的32.4%；在AudioTime评测中，其时间排序误差仅为0.34，远低于所有基线（均>0.7）。论文还发现了一个重要的“跨模态正则化效应”：提升文本监督的质量和细粒度可以减少对齐噪声，从而提升所有条件模态下的生成性能。其实际意义在于为自动化多媒体内容创作提供了强大且灵活的统一工具。主要局限性在于，尽管被称为“Anything-to-Audio”，但当前输入模态仍局限于文本、视频和音频，对于其他可能的模态（如图像、乐谱）的泛化性有待验证；此外，统一模型在处理所有任务时可能面临性能妥协，虽然实验证明其总体表现优异。

### 详细分析

#### 01.模型架构
AudioX是一个端到端的扩散生成模型，其核心设计是统一处理多模态条件输入并生成高质量音频。

整体架构：如论文图4所示，该框架由三个主要部分组成：多模态编码器、多模态自适应融合（MAF）模块和扩散Transformer（DiT）骨干网络。

![AudioX框架图](icassp-img://qjJWxK3yWo/3.png)
图4：AudioX整体架构图。左侧展示了从视频、文本、音频三种模态输入到生成音频的完整流程。右侧详细展开了核心的多模态自适应融合（MAF）模块的内部结构。

1.  多模态编码器：对输入的视频`Xv`、文本`Xt`和音频`Xa`进行特征提取。
    - 视频：使用CLIP-ViT-B/32提取帧级视觉特征（5 fps），并使用Synchformer提取音视频同步特征（25 fps），两者相加得到视频特征`Hv`。
    - 文本：使用T5-base编码器将文本转换为特征`Ht`。
    - 音频：使用一个预训练的音频Autoencoder（来自Stable Audio Open）进行编码和解码，得到音频特征`Ha`。
    - 缺失模态处理：训练时，若缺少视频或音频模态，则用零填充；若缺少文本模态，则用自然语言描述（如“Generate music for the video.”）替代。

2.  多模态自适应融合（MAF）模块：这是本文的核心创新之一，旨在解决不同模态信号间的干扰问题，实现有效融合。其流程如下：
    - 门控（Gate）：每个模态的初始特征（`Hv`, `Ht`, `Ha`）首先通过各自的门控网络，进行重加权，以抑制噪声并保留最有信息量的线索。
    - 交叉注意力融合：将门控后的特征拼接，然后由一组可学习查询（Learnable Queries）通过交叉注意力机制进行聚合。这些查询被组织成三个模态特定的子集，作为“专家”来评估和聚合来自不同数据流的信息。
    - 自注意力整合：一个自注意力层对聚合后的上下文进行整合，并通过残差连接将精炼后的信息更新回各自的模态路径。
    - 输出：最终得到校准后的各模态特征（`˜Hv`, `˜Ht`, `˜Ha`），将它们拼接形成统一的多模态条件嵌入`Hc`。这个嵌入将用于指导DiT的去噪过程。

3.  扩散Transformer（DiT）骨干网络：模型采用预训练的DiT作为生成核心。在训练过程中，真实音频`A`被编码到潜在空间`z`。DiT网络`εθ`以噪声潜在状态`zt`、扩散时间步`t`和多模态条件嵌入`Hc`作为输入，预测所添加的噪声。训练目标是最小化预测噪声与真实噪声之间的均方误差。在推理时，模型从纯噪声开始，通过250步去噪，在分类器自由引导（scale=7.0）下生成音频。

关键设计选择与动机：选择DiT是因为其在高质量音频和音乐生成中表现出色。引入MAF模块的动机是直接的：当多个模态的信号同时输入时，简单拼接或求和会导致模态间干扰，MAF通过自适应加权和注意力机制，使模型能够动态地关注不同模态中最相关的信息，从而提升融合质量和生成可控性。

#### 02.核心创新点
1.  提出统一的多模态音频生成框架AudioX：
    - 局限：以往模型通常只支持单一条件模态（如文本到音频、视频到音频）或单一输出域（音效或音乐）。
    - 作用：AudioX通过DiT骨干和MAF模块，将文本、视频、音频三种条件统一建模，一个模型即可处理文本到音频、视频到音频、文本视频到音频、以及对应的音乐生成任务。
    - 收益：实现了真正的“一个模型，多种任务”，并展示了强大的指令跟随潜力。实验证明，其在大多数任务上达到或超过了专用模型的性能。

2.  设计轻量级多模态自适应融合（MAF）模块：
    - 局限：简单的特征拼接或加权无法有效处理多模态信号间的复杂关系和干扰。
    - 作用：MAF通过门控机制筛选信息，通过可学习查询的交叉注意力实现跨模态信息交互与对齐，最后用自注意力整合。
    - 收益：消融实验（表4）表明，完整MAF（包含门控和查询）比去除任一组件或完全移除MAF的版本在几乎所有指标上（如KL、IS、FAD）表现更好，尤其是在需要精细控制的AudioTime基准上（顺序误差、持续时间误差、频率误差均最低），证实了其对于提升生成质量和指令跟随能力的关键作用。

3.  构建大规模、高质量、细粒度的IF-caps数据集及两阶段标注流水线：
    - 局限：现有音频数据集多为任务特定、标注粗糙，缺乏支持统一多模态模型训练的多样化、高质量数据。
    - 作用：设计了一个包含约130万音频样本和570万音乐样本的IF-caps数据集。标注流水线分为两步：首先用强大的Gemini 2.5 Pro模型为每个片段生成包含全局描述、类别计数、声音事件检测（SED）时间戳、时间关系等结构化的高质量注释；然后用开源模型Qwen2-Audio基于这些注释进行大规模数据增强，生成多样化的文本描述。
    - 收益：该数据集提供了前所未有的监督粒度。消融实验（表3）显示，使用完整流水线（GeminiCap-aug）训练的模型，在所有任务（T2A, V2A, TV2A）和指令跟随指标（Cat-acc, Cnt-acc, Ord-acc）上均优于仅使用原始标签、其他数据集或单阶段生成注释的模型。论文还发现了重要的“跨模态正则化效应”：高质量的文本监督不仅提升了文本相关任务，也显著提升了视频到音频（V2A）任务的性能。

#### 03.细节详述
- 训练数据：
    - 数据集：主要使用IF-caps（126.8万音频，570万音乐片段），并辅以AudioCaps, WavCaps, VGGSound, AudioSet Strong, Greatest Hits, Private音乐数据集, MUCaps等。详见论文表A.1。
    - 来源：IF-caps基于公开的视频音频数据集（如VGGSound, AudioSet, Greatest Hits）构建。
    - 规模：总训练数据量巨大，音频部分约3524小时，音乐部分约15793小时（V2M数据集）。
    - 预处理：所有片段统一为10秒（音频/视频）或更长（音乐）。视频特征以5fps和25fps提取。
    - 数据增强：IF-caps的构建本身就是一种数据增强过程，通过Qwen2-Audio生成多样化的文本描述。具体增强策略见附录A.1.2中的示例（基于类别计数、SED时间戳、时间关系生成不同表述的文本）。

- 损失函数：
    - 主要训练损失为扩散模型的去噪损失，即预测噪声与真实噪声之间的均方误差（MSE）：`min_θ E_{t,zt,ε} ||ε - εθ(zt, t, Hc)||₂²`。论文中未提及其他辅助损失。

- 训练策略：
    - 优化器：AdamW。
    - 学习率：基础学习率1e-5，权重衰减0.001。
    - 调度策略：使用指数预热（ramp-up）和衰减（decay）的调度器。
    - 批大小：48。
    - 训练时长：约4000 GPU小时（使用3个集群，每个集群8块NVIDIA H800 80GB GPU）。
    - 稳定性技巧：维护模型权重的指数移动平均（EMA）以提升推理稳定性。
    - 训练步数/轮数：论文未明确说明总训练步数或轮数。

- 关键超参数：
    - 模型总参数量：2.4B，其中可训练参数1.1B。
    - MAF模块参数量：仅60M，凸显其轻量级。
    - DiT结构：24层，使用预训练模型。
    - 扩散步数：250步（推理时）。
    - 分类器自由引导尺度：7.0。

- 训练硬件：3个NVIDIA H800 GPU集群（每集群80GB显存，8块GPU）。

- 推理细节：
    - 解码策略：250步DDPM采样，使用分类器自由引导。
    - 温度、beam size：未说明（因为是扩散模型，通常不涉及自回归解码的这些参���）。
    - 流式设置：未提及。
    - 输入缺失模态处理：同训练时，用零或文本提示替代。

- 正则化或稳定训练技巧：使用了权重的EMA。

#### 04.实验结果
本文进行了极其全面的实验，覆盖多个任务和基准。以下列出关键结果。

主要性能对比（表1节选）：

| 数据集 | 方法 | 任务 | KL↓ | IS↑ | FAD↓ | 对齐度↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| AudioCaps | AudioGen | T2A | 1.39 | 10.22 | 1.72 | 0.27 |
| | Tango 2 | T2A | 1.11 | 10.37 | 3.20 | 0.36 |
| | Stable Audio Open | T2A | 2.01 | 10.37 | 3.15 | 0.21 |
| | AudioX | T2A | 1.27 | 12.48 | 1.59 | 0.30 |
| VGGSound | AudioLDM-2-Large | T2A | 2.10 | 13.86 | 2.05 | 0.30 |
| | Stable Audio Open | T2A | 2.36 | 14.45 | 2.60 | 0.33 |
| | AudioX | T2A | 1.74 | 19.58 | 1.33 | 0.33 |
| MusicCaps | MusicGen | T2M | 1.43 | 2.24 | 4.55 | 0.18 |
| | TangoMusic | T2M | 1.13 | 2.86 | 1.88 | 0.23 |
| | AudioX | T2M | 0.96 | 3.55 | 1.53 | 0.24 |
| VGGSound | FoleyCrafter | V2A | 2.39 | 8.70 | 2.23 | 0.27 |
| | MMAudio | V2A | 1.97 | 14.95 | 2.04 | 0.35 |
| | AudioX | V2A | 2.21 | 12.60 | 1.28 | 0.26 |

结论：AudioX在T2A任务（尤其在VGGSound数据集上，IS高达19.58）、T2M任务（MusicCaps上KL和FAD均最优）上取得了SOTA或极具竞争力的结果。在V2A任务上，其FAD值（1.28）优于所有基线。

指令跟随能力评测（表2）：

| 方法 | T2A-bench | | | | AudioTime | | | |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| | Cat-acc↑ | Cnt-acc↑ | Ord-acc↑ | TS-acc↑ | Ordering↓ | Duration↓ | Frequency↓ | Timestamp↑ |
| Make-An-Audio2 | 32.40 | 4.00 | 19.80 | 18.80 | 0.76 | 3.40 | 1.42 | 0.56 |
| Stable Audio Open | 31.20 | 9.80 | 6.00 | 21.80 | 0.98 | 3.07 | 1.46 | 0.53 |
| AudioX | 34.20 | 12.40 | 23.60 | 28.20 | 0.34 | 1.30 | 0.74 | 0.81 |

结论：AudioX在需要精细控制的指令跟随评测中全面碾压所有基线。其在T2A-bench的所有指标（类别、计数、排序、时间戳准确率）上均取得最高分，在AudioTime上所有误差指标均最低，证明了其卓越的指令跟随能力。

![综合性能对比与指令跟随评测结果](icassp-img://qjJWxK3yWo/0.png)
图1：综合性能对比。(a) 展示了AudioX与多个基线在多个基准上的Inception Score (IS) 对比，AudioX在多数任务上领先。(b) 展示了在指令跟随基准上的详细结果，AudioX优势明显。

消融实验关键结果（表3，表4）：
1.  数据消融（表3）：使用完整流水线（GeminiCap-aug）训练的模型在几乎所有任务和指标上都优于其他数据源。例如，在T2A任务中，其IS为10.93，FAD为2.91，优于仅用原始标签（IS 7.59, FAD 6.02）。这验证了高质量、细粒度数据的重要性以及跨模态正则化效应（V2A任务性能也随之提升）。
2.  MAF模块消融（表4）：完整的MAF模块（包含门控和查询）在KL、IS、FAD以及AudioTime的各项误差指标上均达到最佳。移除任一组件都会导致性能下降，证明了两个组件的必要性。

![数据消融实验结果](icassp-img://qjJWxK3yWo/6.png)
图7：数据消融实验结果。展示了使用不同文本监督方法训练模型的性能对比，GeminiCap-aug（本文方法）在各项指标上均表现最佳。

其他任务：论文在附录中展示了音频修复（Audio Inpainting）、音乐续写（Music Completion）和图像到音频（Image-to-audio）生成的实验结果，表明该统一模型在这些扩展任务上也具备良好性能。

#### 05.评分理由
- 学术质量：5.5/7：论文技术路线清晰（DiT + MAF），实验设计严谨且全面（多任务、多指标、用户研究、详尽消融），数据集构建方法有独创性和价值。创新点集中于模块设计（MAF）和数据工程（IF-caps），而非基础架构的颠覆性创新。实验结果充分证明了其方法的有效性，达到了声称的SOTA水平。
- 选题价值：1.5/2：统一多模态音频生成是生成式AI领域的重要前沿方向，具有广阔的应用前景（如多媒体创作、游戏、辅助工具）。本文的工作对该方向的推进有明显贡献，对相关领域研究者和开发者有很高参考价值。
- 开源与复现加成：0.5/1：论文明确承诺开源代码、模型和数据集，并提供了极为详尽的训练配置（硬件、超参数、优化器设置）和数据集构建细节，极大降低了复现门槛。这为后续研究和应用提供了坚实基础。

### 开源详情
根据论文内容总结如下：
- 代码：论文承诺在发布时开源代码，项目主页为 https://zeyuet.github.io/AudioX/。当前未提供具体代码仓库链接。
- 模型权重：论文承诺将提供预训练的模型检查点。
- 数据集：IF-caps数据集将开源，并将包含为训练和测试统一模型而标注的新文本描述（见表A.2）。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极其详细的复现信息，包括：
    - 模型架构参数（2.4B参数，1.1B可训练）。
    - 训练硬件（3×8 H800 GPU，约4k GPU小时）。
    - 优化器设置（AdamW，lr=1e-5，weight decay=0.001）。
    - 学习率调度（指数预热和衰减）。
    - 批大小（48）。
    - 推理设置（250步，CFG scale=7.0）。
    - 数据集统计和处理流程（附录A.1）。
    - 评估指标和基准定义（附录A.2，A.3）。
- 论文中引用的开源项目：
    - 骨干模型：Stable Audio Open（用于音频编码器和DiT预训练）。
    - 编码器：CLIP-ViT-B/32， Synchformer， T5-base。
    - 数据标注：Gemini 2.5 Pro， Qwen2-Audio。
    - 其他工具：AnimeGANv2（用于图像到音频实验）。

🔗 **开源详情**

根据论文内容总结如下：
- 代码：论文承诺在发布时开源代码，项目主页为 https://zeyuet.github.io/AudioX/。当前未提供具体代码仓库链接。
- 模型权重：论文承诺将提供预训练的模型检查点。
- 数据集：IF-caps数据集将开源，并将包含为训练和测试统一模型而标注的新文本描述（见表A.2）。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极其详细的复现信息，包括：
    - 模型架构参数（2.4B参数，1.1B可训练）。
    - 训练硬件（3×8 H800 GPU，约4k GPU小时）。
    - 优化器设置（AdamW，lr=1e-5，weight decay=0.001）。
    - 学习率调度（指数预热和衰减）。
    - 批大小（48）。
    - 推理设置（250步，CFG scale=7.0）。
    - 数据集统计和处理流程（附录A.1）。
    - 评估指标和基准定义（附录A.2，A.3）。
- 论文中引用的开源项目：
    - 骨干模型：Stable Audio Open（用于音频编码器和DiT预训练）。
    - 编码器：CLIP-ViT-B/32， Synchformer， T5-base。
    - 数据标注：Gemini 2.5 Pro， Qwen2-Audio。
    - 其他工具：AnimeGANv2（用于图像到音频实验）。

---

