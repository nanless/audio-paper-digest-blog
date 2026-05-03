---
title: "ICLR 2026 - 音频生成 论文列表"
date: 2026-05-03
draft: false
tags: ["音频生成"]
categories: [iclr-2026]
description: "共 11 篇 ICLR 2026 音频生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频生成

共 **11** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution](/audio-paper-digest-blog/posts/2026-05-03-flow2gan-hybrid-flow-matching-and-gan-with-multi) | 8.5分 | 前25% |
| 🥈 | [AudioX: A Unified Framework for Anything-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-03-audiox-a-unified-framework-for-anything-to-audio) | 8.5分 | 前25% |
| 🥉 | [UALM: Unified Audio Language Model for Understanding, Genera](/audio-paper-digest-blog/posts/2026-05-03-ualm-unified-audio-language-model-for) | 8.0分 | 前25% |
| 4. | [PrismAudio: Decomposed Chain-of-Thought and Multi-dimensiona](/audio-paper-digest-blog/posts/2026-05-03-prismaudio-decomposed-chain-of-thought-and-multi) | 8.0分 | 前25% |
| 5. | [JavisDiT++: Unified Modeling and Optimization for Joint Audi](/audio-paper-digest-blog/posts/2026-05-03-javisdit-unified-modeling-and-optimization-for) | 8.0分 | 前25% |
| 6. | [TangoFlux: Super Fast and Faithful Text to Audio Generation ](/audio-paper-digest-blog/posts/2026-05-03-tangoflux-super-fast-and-faithful-text-to-audio) | 8.0分 | 前25% |
| 7. | [AC-Foley: Reference-Audio-Guided Video-to-Audio Synthesis wi](/audio-paper-digest-blog/posts/2026-05-03-ac-foley-reference-audio-guided-video-to-audio) | 7.9分 | 前25% |
| 8. | [Aurelius: Relation Aware Text-to-Audio Generation At Scale](/audio-paper-digest-blog/posts/2026-05-03-aurelius-relation-aware-text-to-audio-generation) | 7.5分 | 前25% |
| 9. | [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-03-layersync-self-aligning-intermediate-layers) | 7.0分 | 前25% |
| 10. | [SCRAPL: Scattering Transform with Random Paths for Machine L](/audio-paper-digest-blog/posts/2026-05-03-scrapl-scattering-transform-with-random-paths-for) | 7.0分 | 前25% |
| 11. | [AUHead: Realistic Emotional Talking Head Generation via Acti](/audio-paper-digest-blog/posts/2026-05-03-auhead-realistic-emotional-talking-head) | 6.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution Network for Few-step High-Fidelity Audio Generation](/audio-paper-digest-blog/posts/2026-05-03-flow2gan-hybrid-flow-matching-and-gan-with-multi)

🔥 **8.5/10** | 前25% | #音频生成 | #流匹配 | #对抗训练 #多分辨率

👥 **作者与机构**

- 第一作者：Zengwei Yao（Xiaomi Corp., Beijing, China）
- 通讯作者：Daniel Povey（dpovey@xiaomi.com, Xiaomi Corp., Beijing, China）
- 作者列表：Zengwei Yao（Xiaomi Corp.）、Wei Kang（Xiaomi Corp.）、Han Zhu（Xiaomi Corp.）、Liyong Guo（Xiaomi Corp.）、Lingxuan Ye（Xiaomi Corp.）、Fangjun Kuang（Xiaomi Corp.）、Weiji Zhuang（Xiaomi Corp.）、Zhaoqing Li（Xiaomi Corp.）、Zhifeng Han（Xiaomi Corp.）、Long Lin（Xiaomi Corp.）、Daniel Povey（Xiaomi Corp.）

💡 **毒舌点评**

这篇工作巧妙地将Flow Matching的稳定训练与GAN的细节增强能力“拧”在一起，用一个两阶段策略漂亮地解决了音频生成领域“要质量还是要速度”的经典取舍问题，多分辨率傅里叶系数的处理也颇有见地。不过，模型参数量高达78.9M，几乎是Vocos（13.5M）的六倍，这在追求轻量化部署的场景下可能是个明显的短板。

🔗 **开源详情**

- **代码**：提供完整代码仓库链接：https://github.com/k2-fsa/Flow2GAN。
- **模型权重**：论文中提到“the source code is released”，但未明确说明是否公开所有预训练模型权重的下载链接。从“Online demo samples are available”和代码仓库的存在推断，权重很可能已发布或即将发布。
- **数据集**：训练使用的数据集（LibriTTS, Common Voice等）均为公开数据集。论文中未提供针对本任务的私有数据集。
- **Demo**：提供在线演示页面：https://flow2gan.github.io。
- **复现材料**：提供了详尽的训练细节（Section 5.1）、模型配置（Appendix Table 10）、消融实验设置，以及针对不同条件（Mel, EnCodec）的训练步数、GPU数量和时长信息，复现指导性强。
- **论文中引用的开源项目**：明确提到了Vocos、BigVGAN、HiFi-GAN、UnivNet、ConvNeXt、Encodec等开源模型和库作为基线或组件。

📌 **核心摘要**

1.  **问题**：现有的音频生成方法中，GAN训练不稳定且易收敛慢，而基于扩散/流匹配的方法需要多步推理，计算开销大。
2.  **方法**：提出Flow2GAN两阶段框架。第一阶段：改进Flow Matching以适配音频特性，包括将目标重新表述为端点估计（避免静音区域的估计难题），并引入基于频谱能量的损失缩放以强调感知上更重要的安静区域。第二阶段：将训练好的Flow Matching模型转化为1/2/4步生成器，并使用精心设计的判别器（MPD, MRD）进行GAN微调，以提升细节质量并实现快速推理。
3.  **创新点**：a) 针对音频特性的Flow Matching改进（端点估计+频谱能量损失）；b) 两阶段训练范式结合两者优势；c) 多分辨率多分支网络结构，处理不同时间频率分辨率的傅里叶系数。
4.  **实验结果**：在Mel频谱图和EnCodec音频token条件生成上均取得了SOTA或接近SOTA的性能。关键结果如下表所示（数据摘自论文）：

**表1：Mel频谱图条件生成（LibriTTS测试集）对比**
| 模型 | 参数(M) | PESQ↑ | ViSQOL↑ | MOS↑ |
| :--- | :--- | :--- | :--- | :--- |
| BigVGAN | 112.4 | 4.241 | 4.964 | 4.33 ± 0.18 |
| Vocos | 13.5 | 3.618 | 4.898 | 4.38 ± 0.16 |
| WaveFM (1步) | 19.5 | 3.540 | 4.894 | 3.76 ± 0.18 |
| **Flow2GAN (1步)** | 78.9 | **4.189** | **4.957** | **4.39 ± 0.15** |
| **Flow2GAN (2步)** | 78.9 | **4.440** | **4.979** | **4.56 ± 0.11** |

**表2：EnCodec音频token条件生成（统一测试集）对比（带宽=6.0 kbps）**
| 模型 | PESQ↑ | ViSQOL↑ | SMOS↑ | MOS↑ |
| :--- | :--- | :--- | :--- | :--- |
| PeriodWave-Turbo (4步) | 3.229 | 4.424 | 4.00 ± 0.17 | 4.40 ± 0.21 |
| **Flow2GAN (1步)** | **2.904** | 4.300 | **4.46 ± 0.16** | **4.42 ± 0.22** |
| **Flow2GAN (4步)** | 3.089 | 4.351 | 4.19 ± 0.12 | 4.38 ± 0.13 |

![Flow2GAN示例](icassp-img://5eTpRIULtb/1.png)
*（图2：不同模型生成波形的对比。改进的Flow Matching（e）在静音区域比标准版本（d）更干净，GAN微调（f）进一步恢复了细节。）*
5.  **实际意义**：提供了一种在质量和效率之间取得高度平衡的音频生成方案，特别适用于需要低延迟推理的实时应用（如TTS、语音交互）。
6.  **主要局限性**：模型参数量较大；主要评估集中在波形生成（声码器）任务，对更复杂的端到端音频生成（如从文本直接生成）能力未深入探讨。

---

### 🥈 [AudioX: A Unified Framework for Anything-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-03-audiox-a-unified-framework-for-anything-to-audio)

🔥 **8.5/10** | 前25% | #音频生成 | #扩散模型 | #音乐生成 #统一音频模型

👥 **作者与机构**

- 第一作者：Zeyue Tian（香港科技大学）
- 通讯作者：Wei Xue†（香港科技大学），Yike Guo†（香港科技大学）
- 作者列表：Zeyue Tian (香港科技大学), Zhaoyang Liu (香港科技大学), Yizhu Jin (香港科技大学), Ruibin Yuan (香港科技大学), Liumeng Xue (香港科技大学), Xu Tan (独立研究者), Qifeng Chen (香港科技大学), Wei Xue† (香港科技大学), Yike Guo† (香港科技大学)

💡 **毒舌点评**

亮点在于其“大一统”的野心与扎实的工程实现：通过设计轻量的MAF模块和构建超过700万样本的IF-caps数据集，成功将文本、视频、音频等多种控制信号整合到一个扩散Transformer框架中，实现了在多个音频生成任务上的SOTA表现。短板则在于“统一”模型的训练细节（如不同任务数据的混合比例、调度策略）阐述不够透明，以及作为“anything-to-audio”框架，其对非文本、视频的“音频条件”（如音频克隆、风格迁移）的探讨相对有限，离真正的“万物”仍有距离。

🔗 **开源详情**

- **代码**：论文中提及“The code and datasets will be available at https://zeyuet.github.io/AudioX/”，并承诺在发表后开源。
- **模型权重**：论文中承诺开源预训练模型检查点（“we will open-source our code, pretrained model checkpoints”），但未提供当前下载链接。
- **数据集**：论文中承诺开源完整的IF-caps数据集（“we will open-source... the complete IF-caps dataset”），并提供了部分数据集的统计信息和样例。
- **Demo**：论文中未提及在线演示链接。
- **复现材料**：论文提供了非常详细的复现材料，包括：完整的模型架构描述（第4.1节）、训练细节（第5.1节，包括优化器、学习率、batch size、硬件和训练时长）、所有评估指标的具体定义（附录A.2）、新基准T2A-bench的构成与评估流程（附录A.3），以及大量附录图表和定性结果。
- **论文中引用的开源项目**：主要依赖的开源项目/模型包括：CLIP-ViT-B/32、Synchformer、T5-base、音频Autoencoder（来自Stable Audio Open）、Gemini 2.5 Pro（用于标注）、Qwen2-Audio（用于数据增强）、AnimeGANv2（用于图像到音频实验）、以及多个基线模型（如AudioLDM, Stable Audio Open, MMAudio等）。

📌 **核心摘要**

1.  **问题**：当前的音频/音乐生成模型多为单一任务、单一模态输入的专用模型，缺乏一个能够灵活接受文本、视频、音频等多种控制信号并统一生成高质量音频的通用框架。
2.  **方法核心**：提出AudioX统一框架，基于扩散Transformer（DiT）构建。其核心是多模态自适应融合（MAF）模块，该模块通过门控机制和可学习查询的交叉注意力，自适应地加权与对齐来自不同模态（文本、视频、音频）的特征，再输入DiT进行去噪生成。
3.  **创新点**：1）提出了支持任意模态组合输入的统一生成框架AudioX；2）设计了轻量级的MAF模块以有效融合多模态条件，减少模态间干扰；3）构建了首个大规模、高质量的多模态音频-音乐数据集IF-caps（超过700万样本），并设计了结构化标注与增强的数据处理流程。
4.  **主要实验**：在文本到音频（T2A）、视频到音频（V2A）、文本/视频到音频（TV2A）、文本到音乐（T2M）、视频到音乐（V2M）等任务上进行了全面基准测试。例如，在AudioCaps T2A任务中，AudioX的Inception Score（IS）达到12.48（对比MMAudio的12.03），FAD降至1.59；在MusicCaps T2M任务中，IS达到3.55（对比TangoMusic的2.86），FAD为1.53（对比TangoMusic的1.88）。此外，论文还引入了新的T2A-bench基准，在指令跟随能力上大幅超越现有模型（如Ord-acc达到23.60，远高于Make-An-Audio2的19.80）。
5.  **实际意义**：该工作推动了通用音频生成模型的发展，为多媒体内容创作（如视频配音、音乐生成）提供了一个更灵活、强大的工具，并为构建具备复杂指令理解能力的生成模型提供了新思路。
6.  **主要局限性**：模型参数量较大（2.4B），训练资源要求高（约4k GPU小时）。此外，框架目前主要针对标准音频和音乐生成，对于语音合成、语音转换等更专门的音频任务未做探讨。

---

### 🥉 [UALM: Unified Audio Language Model for Understanding, Generation and Reasoning](/audio-paper-digest-blog/posts/2026-05-03-ualm-unified-audio-language-model-for)

🔥 **8.0/10** | 前25% | #音频生成 | #大语言模型 | #统一音频模型 #多模态模型

👥 **作者与机构**

- 第一作者：Jinchuan Tian (卡内基梅隆大学), Sang-gil Lee (NVIDIA)
- 通讯作者：未明确说明（论文作者列表显示多位NVIDIA研究者，邮箱域名为nvidia.com）
- 作者列表：
    - Jinchuan Tian (卡内基梅隆大学)
    - Sang-gil Lee (NVIDIA)
    - Zhifeng Kong (NVIDIA)
    - Sreyan Ghosh (NVIDIA, 马里兰大学)
    - Arushi Goel (NVIDIA)
    - Chao-Han Huck Yang (NVIDIA)
    - Wenliang Dai (NVIDIA)
    - Zihan Liu (NVIDIA)
    - Hanrong Ye (NVIDIA)
    - Shinji Watanabe (卡内基梅隆大学)
    - Mohammad Shoeybi (NVIDIA)
    - Bryan Catanzaro (NVIDIA)
    - Rafael Valle (NVIDIA)
    - Wei Ping (NVIDIA)

💡 **毒舌点评**

本文首次将音频理解、生成和推理能力整合进单一LLM框架，并在生成任务上通过数据缩放与CFG技术取得了与扩散模型可比的效果，跨模态推理的设想（如自我反思）颇具前瞻性。然而，其对大规模高质量数据（30M样本）的强依赖可能限制了方法的普适性，且推理能力的评估严重依赖主观测试，缺乏标准化的客观衡量体系，使得“智能”的提升难以量化。

🔗 **开源详情**

- **代码**：论文提供了代码仓库链接：https://github.com/NVIDIA/audio-intelligence/tree/main/UALM。
- **模型权重**：论��中未明确说明是否公开模型权重。
- **数据集**：论文中未提及公开其策划的30M音频生成数据集或富描述数据集。
- **Demo**：提供了在线演示页面：https://research.nvidia.com/labs/adlr/UALM。
- **复现材料**：论文详细记录了训练和推理的超参数配置（附录C.1），包括学习率、批次大小、优化器等；详细描述了数据混合比例、过滤策略（附录D）和训练流程（两阶段预训练、两阶段后训练）；提供了消融实验细节（附录C.2）。
- **论文中引用的开源项目**：
    - 文本LLM：Qwen2.5 (Yang et al., 2024)
    - 音频编码器：来自Audio Flamingo 3 (Goel et al., 2025)
    - 音频编解码器：X-codec (Ye et al., 2025)
    - 判别器：BigVGAN-v2 (Lee et al., 2023)
    - 评估指标：OpenL3 (Cramer et al., 2019), PaSST (Koutini et al., 2022), PANNs (Kong et al., 2020), LAION-CLAP (Wu et al., 2023), AudioBox-Aesthetic (Tjandra et al., 2025)。

📌 **核心摘要**

本文旨在解决当前音频语言模型中理解和生成任务分离、且缺乏复杂推理能力的问题。核心方法是提出统一音频语言模型（UALM），通过在预训练文本大语言模型（LLM）基础上扩展音频编码器和解码器，并采用精心设计的数据混合策略和训练技巧，将音频理解、文本到音频生成以及文本推理统一于一个解码器Transformer架构中。本文的创新点包括：1) 首次证明基于LLM的自回归音频生成，通过大量数据缩放（30M样本）和应用无分类器引导（CFG），可以达到与前沿扩散模型相当的质量（UALM-Gen）；2) 通过模态对齐预训练和数据配比设计，成功将理解、生成和文本能力统一到单个UALM模型中，且文本能力退化极小；3) 提出了UALM-Reason，通过引入富描述（Rich Caption）作为中间表示，并训练模型进行“富化”、“对话”和“自我反思”等跨模态推理步骤，以提升复杂生成任务的可控性，这是音频领域首次探索生成式的多模态推理链。主要实验结果表明，在AudioCaps和SongDescriber数据集上，UALM-Gen和UALM的生成质量（FD， CL， AES等指标）超越或匹配了MusicGen、Stable Audio Open等扩散模型；在MMAU音频理解基准上达到了与Audio Flamingo 3等SOTA模型相当的水平；同时在MMLU、GSM8K等文本基准上仅表现出微小性能损失。本文的实际意义在于为构建更通用、更智能的音频AI系统提供了一条可行路径，其局限性在于模型训练对数据规模要求极高，生成质量的评估仍依赖主观评价，且推理路径相对固定，尚未展示开放式的复杂推理能力。

---

### 4. [PrismAudio: Decomposed Chain-of-Thought and Multi-dimensional Rewards for Video-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-03-prismaudio-decomposed-chain-of-thought-and-multi)

🔥 **8.0/10** | 前25% | #音频生成 | #强化学习 | #流匹配 #链式思维

👥 **作者与机构**

- 第一作者：Huadai Liu (香港科技大学, 阿里巴巴通义团队)
- 通讯作者：Wei Xue (香港科技大学)
- 作者列表：Huadai Liu (香港科技大学, 阿里巴巴通义团队), Kaicheng Luo (阿里巴巴通义团队), Wen Wang (阿里巴巴通义团队), Qian Chen (阿里巴巴通义团队), Peiwen Sun (香港中文大学), Rongjie Huang (香港中文大学), Xiangang Li (阿里巴巴通义团队), Jieping Ye (阿里巴巴通义团队), Wei Xue (香港科技大学)

💡 **毒舌点评**

**亮点：** 论文首次将“分解式链式思维推理”与“多维度强化学习奖励”在V2A生成中紧密结合，系统性解决了多目标优化难题，技术路线完整且有深度，新基准AudioCanvas设计严谨。
**短板：** 整个框架堆叠了太多重型组件（VideoLLaMA2、Gemini 2.5 Pro生成数据、VideoPrism、T5-Gemma），工程复杂度和训练成本极高，这在一定程度上稀释了其作为通用解决方案的优雅性和可及性。

🔗 **开源详情**

- **代码**：论文明确承诺将公开完整代码，包括训练脚本和配置文件。链接未提供，但承诺发布。
- **模型权重**：论文承诺将公开所有模型权重，包括音频基础模型、微调后的VideoLLaMA2等。
- **数据集**：论文承诺将公开新构建的**AudioCanvas**基准数据集，以及用于VideoLLaMA2微调的CoT训练数据。
- **Demo**：论文未提及是否提供在线演示。项目主页地址为https://PrismAudio.github.io，可能包含演示。
- **复现材料**：论文提供了详细的训练细节、超参数配置（附录D），并承诺发布预训练检查点。GPU资源需求也被明确说明。
- **论文中引用的开源项目**：使用了多个开源模型和工具，包括：**Gemini 2.5 Pro**（用于数据生成）、**VideoLLaMA2**（CoT生成模型）、**VideoPrism**（视频编码器）、**T5-Gemma**（文本编码器）、**MS-CLAP/Synchformer/Meta Audiobox Aesthetics/StereoCRW**（奖励模型）、**Stable Audio Tools**（VAE基础）。

📌 **核心摘要**

1.  **要解决的问题**：现有视频到音频（V2A）生成方法面临两大核心挑战：一是语义一致性、时序同步、美学质量和空间准确性等多个感知目标在单一损失函数中相互纠缠，难以平衡；二是模型优化与真实人类偏好脱节，导致生成结果技术正确但听感不佳。
2.  **方法核心**：提出PrismAudio框架，其核心是将V2A生成的推理过程分解为四个专门的链式思维（CoT）模块（语义、时序、美学、空间），并为每个模块设计对应的目标奖励函数，通过强化学习（GRPO）进行多维度联合优化。同时，提出Fast-GRPO算法，通过混合ODE-SDE采样策略大幅提升训练效率。
3.  **与已有方法的创新**：1）首次在V2A任务中引入分解式CoT与多维度RL奖励对齐的框架，解决了目标纠缠问题。2）提出Fast-GRPO，首次在流匹配模型中通过随机窗口的混合采样实现了高效的RL训练。3）构建了更严格、更多样化的V2A评测基准AudioCanvas。
4.  **主要实验结果**：PrismAudio在VGGSound测试集（域内）和AudioCanvas基准（域外）上，于语义、时序、美学、空间所有维度上均取得SOTA性能。例如，在AudioCanvas上，其语义对齐（CLAP: 0.52）和时序同步（DeSync: 0.36）均优于基线模型ThinkSound（0.48， 0.80）。消融实验证明，分解式CoT优于整体式CoT，多维度奖励优于单维度奖励。
5.  **实际意义**：为可控、可解释、高质量的V2A生成提供了新的技术范式，其分解式推理和多目标优化思路可推广至其他多模态生成任务。新基准AudioCanvas为该领域提供了更严峻、更贴近现实的评测标准。
6.  **主要局限性**：框架复杂度高，依赖多个大型预训练模型（Gemini、VideoLLaMA2、VideoPrism等），训练和数据构建成本高昂。奖励函数（如CLAP、Synchformer）作为人类感知的代理，其自身存在上限和偏差，可能导致奖励黑客问题（尽管使用了KL惩罚缓解）。

---

### 5. [JavisDiT++: Unified Modeling and Optimization for Joint Audio-Video Generation](/audio-paper-digest-blog/posts/2026-05-03-javisdit-unified-modeling-and-optimization-for)

🔥 **8.0/10** | 前25% | #音频生成 | #扩散模型 | #音视频 #多模态模型

👥 **作者与机构**

- 第一作者：Kai Liu（浙江大学）
- 通讯作者：Hao Fei（新加坡国立大学，Email: haofei7419@gmail.com）
- 作者列表：Kai Liu（浙江大学）��Yanhao Zheng（浙江大学），Kai Wang（多伦多大学），Shengqiong Wu（新加坡国立大学），Rongjunchen Zhang（HiThink Research），Jiebo Luo（罗切斯特大学），Dimitrios Hatzinakos（多伦多大学），Ziwei Liu（南洋理工大学），Hao Fei（新加坡国立大学），Tat-Seng Chua（新加坡国立大学）

💡 **毒舌点评**

**亮点**：论文在架构上“大道至简”，用共享注意力+模态专属FFN的MS-MoE设计，优雅地平衡了跨模态交互与模态内建模，并首次将DPO引入联合生成，思路清晰且有效。**短板**：论文声称“统一建模”，但其方法高度依赖预训练的视频生成模型（Wan2.1）和冻结的编码器，本质上是为“为视频添加同步音频”的单向任务优化，对于真正双向、任意模态互转的“统一”生成框架仍有距离，且训练数据规模（1M）与顶级商业模型差距显著。

🔗 **开源详情**

-   **代码**：论文承诺开源，提供了主页链接 `https://JavisVerse.github.io/JavisDiT2-page`。
-   **模型权重**：承诺开源预训练模型权重。
-   **数据集**：SFT和DPO数据部分来自公开数据集（TAVGBench等），承诺提供处理后的数据集或获取方式。
-   **Demo**：论文中未提及在线演示链接。
-   **复现材料**：提供了完整的三阶段训练细节、模型配置（附录A1，表A1）、超参数、评估基准（JavisBench）和评估指标说明（附录B.3），复现指引非常充分。
-   **引用的开源项目**：主要依赖Wan2.1（视频生成骨干）、AudioLDM2（音频VAE）、CLAP、ImageBind、Synchformer等作为评估工具或组件。

📌 **核心摘要**

1.  **问题**：现有的开源联合音视频生成（JAVG）方法在生成质量、时序同步性和与人类偏好对齐方面，落后于Veo3等先进商业模型。
2.  **方法核心**：提出JavisDiT++框架，基于Wan2.1-T2V构建。核心包括：（1）**模态特定混合专家（MS-MoE）**：在共享自注意力层进行跨模态交互后，使用独立的视频和音频FFN，提升单模态质量。（2）**时间对齐旋转位置编码（TA-RoPE）**：通过偏移量确保音频与视频token在时间维度ID对齐但空间维度ID不重叠，实现显式的帧级同步。（3）**音视频直接偏好优化（AV-DPO）**：首次将偏好学习引入JAVG，利用多个奖励模型从质量、一致性、同步性三维度构建偏好对，优化模型输出。
3.  **新在哪里**：相较于之前的双流DiT（如JavisDiT）或拼接方法（如UniVerse-1），本方法架构更简洁高效；TA-RoPE提供了比ST-Prior或帧级注意力更直接、低成本的同步控制；AV-DPO是首个应用于JAVG的偏好对齐算法。
4.  **主要结果**：在JavisBench基准上，JavisDiT++（2.1B参数）在几乎所有指标上全面超越了JavisDiT（3.1B）和UniVerse-1（6.4B）。关键数据如下表所示（生成240p 4秒视频）：

| 模型 | FVD ↓ | FAD ↓ | TV-IB ↑ | AV-IB ↑ | JavisScore ↑ | DeSync ↓ | 运行时间 ↓ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| JavisDiT | 204.1 | 7.2 | 0.263 | 0.197 | 0.154 | 1.039 | 30s |
| UniVerse-1 | 194.2 | 8.7 | 0.272 | 0.104 | 0.077 | 0.929 | 13s |
| **Ours** | **141.5** | **5.5** | **0.282** | **0.198** | **0.159** | **0.832** | 10s |

5.  **实际意义**：在仅使用约100万公开数据的情况下，训练出了一个高效、高质量的端到端音视频生成模型，为开源JAVG研究设立了新的基线。
6.  **主要局限性**：模型扩展受限于训练数据规模（约1M）和模型参数量（2.1B）；生成视频分辨率（240p-480p）和时长（2-5秒）仍较短；方法高度依赖预训练的视频生成骨干网络。

---

### 6. [TangoFlux: Super Fast and Faithful Text to Audio Generation with Flow Matching and Clap-Ranked Preference Optimization](/audio-paper-digest-blog/posts/2026-05-03-tangoflux-super-fast-and-faithful-text-to-audio)

🔥 **8.0/10** | 前25% | #音频生成 | #流匹配 | #强化学习 #音频大模型

👥 **作者与机构**

- 第一作者：Chia-Yu Hung (南洋理工大学)
- 通讯作者：未说明
- 作者列表：
  - Chia-Yu Hung (南洋理工大学)
  - Navonil Majumder (南洋理工大学)
  - Zhifeng Kong (NVIDIA)
  - Ambuj Mehrish (威尼斯大学)
  - Amir Ali Bagherzadeh (Lambda Labs)
  - Chuan Li (Lambda Labs)
  - Rafael Valle (NVIDIA)
  - Bryan Catanzaro (NVIDIA)
  - Soujanya Poria (南洋理工大学)

💡 **毒舌点评**

亮点是提出了CRPO框架，通过CLAP作为奖励模型在线生成并迭代优化音频偏好对，有效解决了音频生成领域缺乏高质量偏好数据和可验证奖励的痛点。短板在于其评估主要基于AudioCaps数据集，虽然包含复杂提示，但整体多样性可能仍有限，且模型性能高度依赖CLAP作为代理奖励模型的准确性，其偏好可能无法完全代表人类偏好。

🔗 **开源详情**

- 代码：论文中提到“We shall publicly release the implementation of model training, inference, and evaluation upon acceptance.”以及“An anonymized implementation is shared in the supplementary materials.”，表明有代码，但具体链接未在正文中提供。
- 模型权重：论文明确表示将发布模型权重。
- 数据集：训练使用的WavCaps和AudioCaps为公开数据集。CRPO生成的偏好数据集是动态的，未作为固定资产发布。
- Demo：论文提供了模型生成样本的演示页面链接（https://tangoflux.github.io/）。
- 复现材料：附录（A部分）提供了非常详尽的训练细节、超参数设置、评估指标说明、人类评估流程和消融实验设置，为复现提供了充分信息。
- 论文中引用的开源项目：Stable Audio Open (VAE), FLAN-T5 (文本编码器), CLAP (奖励/评估模型), stable-audio-metrics (评估工具包), AudioLDM evaluation toolkit。

📌 **核心摘要**

1. 解决的问题：文本到音频生成模型面临对齐困难，难以准确捕捉复杂文本描述中的细节和事件顺序，且缺乏像文本领域那样现成的奖励模型或黄金标准答案来构建偏好数据集。
2. 方法核心：提出TANGOFLUX，一个基于Rectified Flow和Transformer架构的高效文本到音频生成模型。同时，提出了CLAP-Ranked Preference Optimization (CRPO)框架，利用CLAP模型作为代理奖励模型，在线、迭代地生成音频偏好数据对，并基于改进的DPO损失（LCRPO）对模型进行偏好优化。
3. 创新点：CRPO是首个在音频生成领域应用的在线自改进对齐框架；针对Rectified Flow提出了包含流匹配损失的LCRPO目标函数，稳定了训练并防止了奖励过度优化。
4. 主要实验结果：TANGOFLUX在AudioCaps基准测试上全面超越了此前的SOTA模型（如Tango 2, Stable Audio Open）。在515M参数和仅需3.7秒推理时间（A40 GPU）的条件下，生成30秒44.1kHz音频。在人类评估（OVL和REL）中也取得最佳成绩（Z-score: 0.2486/0.6919， Elo: 1501/1628）。消融实验表明，使用CRPO生成的偏好数据集显著优于静态数据集（Audio-Alpaca， BATON），且在线生成优于离线生成。
5. 实际意义：提供了一个开源、高效、高质量的文本到音频生成基线模型，并展示了无需人类标注、可在线自改进的模型对齐新范式，推动了音频生成技术的实际应用。
6. 主要局限性：CLAP作为奖励模型可能存在偏差；评估数据集主要为英文，模型的泛化能力和多语言支持未验证；尽管推理速度快，但模型仍有515M参数，部署有一定门槛。

---

### 7. [AC-Foley: Reference-Audio-Guided Video-to-Audio Synthesis with Acoustic Transfer](/audio-paper-digest-blog/posts/2026-05-03-ac-foley-reference-audio-guided-video-to-audio)

✅ **7.9/10** | 前25% | #音频生成 | #流匹配 | #音视频 #跨模态

👥 **作者与机构**

- 第一作者：Pengjun Fang（香港科技大学）
- 通讯作者：未说明
- 作者列表：Pengjun Fang（香港科技大学），Yingqing He（香港科技大学），Yazhou Xing（香港科技大学），Qifeng Chen（香港科技大学，B标注可能表示共同指导），Ser-Nam Lim（中佛罗里达大学，B标注），Harry Yang（香港科技大学，B标注）

💡 **毒舌点评**

**亮点**：论文核心思路非常直接且有效——绕过文本描述的模糊性，直接用参考音频的“声学指纹”来控制生成，这在细粒度合成和音色迁移上效果立竿见影，实验中MCD指标的大幅降低就是证明。**短板**：其“两阶段训练”中第二阶段利用视频内音频自相似性的假设，在现实场景中（如非重复性动作视频）可能不成立，论文对此的泛化性讨论不足；此外，论文声称“competitive”但未开源，其声称的复现便利性要打折扣。

🔗 **开源详情**

- **代码**：论文中未提及代码链接或开源计划。
- **模型权重**：未提及。
- **数据集**：论文中明确列出了使用的公开数据集及其许可证：VGGSound (CC-BY 4.0), AudioCaps2.0 (MIT), WavCaps (CC-BY 4.0)。但未提供处理后的数据脚本。
- **Demo**：未提及。
- **复现材料**：提供了详细的训练细节（附录A）、网络结构细节（附录B）以及人类研究流程（附录C），这些对复现至关重要。
- **论文中引用的开源项目**：CLIP, Synchformer, BigVGAN, ImageBind, VGGish, PANNs, PaSST等。

📌 **核心摘要**

1.  **问题**：现有的视频到音频（V2A）生成方法主要依赖文本提示进行控制，但面临两大瓶颈：训练数据语义粒度粗糙（如所有狗叫被统一标注），以及文本难以精确描述微小的声学特征（如金属撞击的瞬态和共振），导致难以实现精细的声音合成。
2.  **方法核心**：提出AC-Foley，一个直接以参考音频作为控制信号的V2A模型。通过多模态Transformer联合建模视频、文本和参考音频，并利用**条件流匹配**目标进行生成。
3.  **与已有方法不同**：不同于使用文本或CLAP等语义编码器进行控制，AC-Foley使用预训练VAE编码器直接提取参考音频的**完整声学特征**（音色、频谱），并提出**两阶段训练策略**（重叠与非重叠条件训练）来教会模型如何将参考音频的特征适应到视频的时间和内容上下文中。
4.  **主要实验结果**：在VGGSound测试集上，AC-Foley在多个指标上达到SOTA。例如，在有音频条件下，相比最强基线（MMAudio + CLAP），Fréchet Distance (PaSST) 从70.80降至56.00，Mel Cepstral Distortion (MCD) 从14.63降至11.37。在无音频条件下（使用空嵌入），其性能也与顶尖方法（如MMAudio-L-V2）持平或更优（见表1）。在Greatest Hits数据集上的音色迁移任务中，也优于专为该任务训练的CondFoley（见表2）。
5.  **实际意义**：为视频创作者提供了更灵活、精确的音频控制工具，能够生成具有特定材质感的脚步声、特定乐器音色的声音，甚至零样本生成训练集中未见的音效（如装消音器的枪声），极大地拓展了Foley制作的可能性。
6.  **主要局限性**：1) 两阶段训练依赖视频内音频的自相似性，对非重复性视频场景的泛化能力可能受限；2) 论文指出，当视频和参考音频包含多个并发声源或时间模式严重不匹配时，模型性能会下降。

---

### 8. [Aurelius: Relation Aware Text-to-Audio Generation At Scale](/audio-paper-digest-blog/posts/2026-05-03-aurelius-relation-aware-text-to-audio-generation)

✅ **7.5/10** | 前25% | #音频生成 | #数据集 | #基准测试

👥 **作者与机构**

- 第一作者：Yuhang He（微软研究院；牛津大学计算机系）
- 通讯作者：Yuhang He（yuhanghe@microsoft.com）
- 作者列表：Yuhang He（微软研究院，牛津大学计算机系）、He Liang（未说明）、Yash Jain（微软研究院）、Andrew Markham（微软研究院）、Vibhav Vineet（微软研究院）

💡 **毒舌点评**

这篇论文的亮点在于其系统性：它不仅指出了当前文本到音频生成模型在理解复杂关系（如“如果A发生，则B发生，否则C发生”）上的无能，还亲手搭建了完整的“练兵场”——从定义关系（100种）到提供干净“弹药”（110种音频事件）再到制定考题和评分标准。然而，短板也相当明显：作为一篇发表于顶会的工作，其核心贡献“AudioRelGen框架”在论文中缺乏足够的架构细节和深度创新描述，更像一个概念性的解耦设计，而大量篇幅用于描述数据集和基准建设，使得方法的厚度略显不足。

🔗 **开源详情**

*   **代码**：提供了代码仓库链接：https://github.com/yuhanghe01/Aurelius。
*   **模型权重**：论文中未提及公开预训练或微调后的模型权重。
*   **数据集**：论文详细描述了`AudioEventSet`和`AudioRelSet`的构建过程和本体，但未直接提供其整合数据集的下载链接���文中提到音频素材来源于freesound.org和FSD50K数据集。
*   **Demo**：提供了项目主页：https://yuhanghe01.github.io/Aurelius-Proj/，但未明确说明是否有在线交互式Demo。
*   **复现材料**：论文附录详细列出了基线模型的推理设置（表III）和代理工作流的详细提示词，为复现评估提供了必要信息。训练超参数（如学习率）未在正文明确给出。
*   **引用的开源项目**：评测了大量开源TTA模型（AudioLDM, AudioGen, Tango系列等），使用了开源音频事件检测模型PANNs，并利用LLM（Qwen系列）作为代理。

📌 **核心摘要**

1.  **问题**：现有文本到音频（TTA）生成模型在处理需要**关系推理**的复杂文本提示时表现糟糕。模型往往只能生成孤立的音频事件，而无法准确理解并生成事件之间的时间、空间、逻辑等复杂关系。
2.  **方法核心**：提出了“Aurelius”框架，其核心是**将音频事件建模与关系建模解耦**。为此，精心构建了两个大规模语料库：包含110类层次化音频事件的**AudioEventSet**，以及包含100种可嵌套组合关系的**AudioRelSet**。基于这两个语料库，设计了一种可扩展的`<文本，音频>`对生成策略，用于创建海量训练和测试数据。
3.  **创新点**：相比之前的小规模、噪声多或关系简单的尝试，本工作提供了规模大（事件×关系）、质量高（经验证）、结构清晰（层次化本体）且可扩展的关系感知TTA研究资源与评估基准。
4.  **实验结果**：在构建的基准上对9个主流TTA模型进行了**零样本**评估，结果表明所有模型在关系感知指标（如mAPre, mARel, mAPar）上表现极差，最高分（TangoFlux）的mAMSR仅为1.77%。然而，通过**在构建的100小时数据上微调或从头训练**，模型性能可显著提升（例如，TangoFlux微调后mAMSR提升至5.58%），验证了基准和数据的有效性。关键对比数据见下表：

    | 模型 | 评估方式 | 通用指标 (FAD↓, KL↓) | 关系感知指标 (mAPre, mARel, mAPar, mAMSR↑%) |
    | :--- | :--- | :--- | :--- |
    | TangoFlux | 零样本 | 6.01, 26.73 | 12.38, 3.34, 7.28, 1.77 |
    | TangoFlux | **微调 (100h)** | **1.29**, **9.68** | **28.57, 8.02, 20.84, 5.58** |
    | TangoFlux | 从头训练 (100h) | 1.64, 17.82 | 16.68, 3.82, 12.01, 2.58 |
    *注：指标数值来源于论文中表2和表3。*

5.  **实际意义**：本工作为社区提供了第一个系统评估和推进“关系感知音频生成”任务的**标准平台**，其构建的语料库和基准有望催生更注重结构化理解的TTA新模型。
6.  **主要局限性**：主要贡献集中于资源建设与基准评估，提出的具体生成框架（AudioRelGen）的技术细节和架构深度阐述不足。实验主要基于单一基础模型（TangoFlux）进行微调和比较，结论的普适性有待更广泛验证。

---

### 9. [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-03-layersync-self-aligning-intermediate-layers)

✅ **7.0/10** | 前25% | #音频生成 | #自监督学习 | #扩散模型 #流匹配

👥 **作者与机构**

- 第一作者：Yasaman Haghighi (Ecole Polytechnique Fédérale de Lausanne, EPFL)
- 通讯作者：未明确说明（但所有作者邮箱均指向 @epfl.ch）
- 作者列表：Yasaman Haghighi (EPFL)， Bastien van Delft (EPFL)， Mariam Hassan (EPFL)， Alexandre Alahi (EPFL)

💡 **毒舌点评**

这篇工作最漂亮的地方在于“以己为师”的极简设计思想，用一个无参数、低开销的层间对齐损失，就撬动了跨模态的显著性能提升，真正做到了即插即用，这在目前依赖庞大外部模型提供监督信号的浪潮中是一股清流。不过，其理论解释深度稍显不足，仅仅指出“深层语义更丰富”就作为对齐依据稍显薄弱，对于“为何某些层更丰富”以及对齐引发的特征动力学变化缺乏更细致的剖析。

🔗 **开源详情**

- **代码**：论文中提供了代码仓库链接：`https://github.com/vita-epfl/LayerSync.git`。
- **模型权重**：论文中未明确提及是否公开训练好的模型权重。
- **数据集**：实验使用公开数据集（ImageNet, MTG-Jamendo, HumanML3D, CLEVRER, MixKit），论文中未提及对数据集本身的特殊修改或分发。
- **Demo**：未提及。
- **复现材料**：论文正文和附录提供了非常详细的实验设置，包括各任务的数据集处理、模型架构配置（表18-20）、训练超参数、硬件资源和评估指标定义，并提供了算法伪代码（算法1），复现指引清晰。
- **引用的开源项目**：主要依赖 SiT (Ma et al., 2024) 作为基础生成模型，使用 Stable Diffusion VAE、Stable Audio Open VAE 等组件。

📌 **核心摘要**

1.  **问题**：当前提升扩散模型训练效率和生成质量的主流方法严重依赖大型外部预训练模型（如 DINOv2, Qwen2-VL）提供的监督信号，这引入了额外的计算开销、数据依赖和跨模态泛化难题。
2.  **方法核心**：提出 LayerSync，一种无参数、即插即用的正则化框架。核心思想是利用扩散模型自身深层语义更丰富的表示作为“内在导师”，通过最大化中间表示层（浅层）与深层表示间的相似性，来引导和增强浅层特征的学习，从而形成模型内部的自指导学习。
3.  **创新点**：与依赖外部模型的主流方法（如 REPA）和依赖 EMA 模型的方法（如 SRA）相比，LayerSync 完全自包含，无需额外模型或数据，且训练时计算开销极小（仅增加一次前向传播和一次相似度计算）。
4.  **实验结果**：该方法在图像、音频、视频和人体运动生成任务上均有效。关键结果包括：在 ImageNet 256x256 上，使 Flow Transformer (SiT-XL) 的训练加速超过 8.75 倍，FID 提升 23.6%；在音频生成（MTG-Jamendo）上 FAD 改进 21%；在人体运动生成（HumanML3D）上 FID 改进 7.7%。在 ImageNet 纯自监督生成中达到 SOTA（FID 1.89）。消融实验表明其性能对层选择不敏感，且超参数鲁棒性强。

| 实验任务 | 数据集 | 基线模型 | 指标 | 基线值 | + LayerSync | 改进幅度 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **图像生成** | ImageNet 256x256 | SiT-XL/2 (1400 epochs) | FID↓ | 2.06 | 1.89 (800 epochs) | (无直接对比，但更快) |
| | ImageNet 256x256 | SiT-XL/2 (800 epochs) | FID↓ | 8.99 | 6.87 | 23.6% |
| | ImageNet 256x256 | SiT-XL/2 (800 epochs) | FID↓ (w/ SDE) | 8.3 | 6.32 | 23.9% |
| **音频生成** | MTG-Jamendo | SiT-XL (650 epochs) | FAD (CLAP)↓ | 0.251 | 0.199 | 20.7% |
| **人体运动生成** | HumanML3D | MDM (600K iter) | FID↓ | 0.5206 | 0.4801 | 7.7% |
| **视频生成** | CLEVRER | SiT-XL (from scratch) | FVD↓ | 265.50 | 120.13 | 54.7% |

![LayerSync 对生成质量的影响](icassp-img://4itprlvbRQ/2.png)
*图：LayerSync 与 Dispersive Loss 在相同设置下的生成结果对比，显示 LayerSync 能在不依赖外部表示的情况下提升生成质量。*

5.  **实际意义**：为扩散模型训练提供了一种零额外成本、跨模态通用的效率提升方案，降低了获得高性能生成模型的门槛。
6.  **局限性**：论文指出层间高度相似是否会导致层冗余值得探讨，初步实验显示剪枝效果不佳；长期正则化效应需进一步研究；相似度函数（当前使用余弦相似度）对不同数据域的适应性是一个开放问题。

---

### 10. [SCRAPL: Scattering Transform with Random Paths for Machine Learning](/audio-paper-digest-blog/posts/2026-05-03-scrapl-scattering-transform-with-random-paths-for)

✅ **7.0/10** | 前25% | #音频生成 | #时频分析 | #优化算法 #可微信号处理

👥 **作者与机构**

- 第一作者：Christopher Mitcheltree（Queen Mary University of London, Centre for Digital Music）
- 通讯作者：未明确说明（根据邮箱推测，Christopher Mitcheltree和Emmanouil Benetos可能为共同通讯作者）
- 作者列表：Christopher Mitcheltree（Queen Mary University of London, Centre for Digital Music）、Vincent Lostanlen（Nantes Université, École Centrale Nantes, CNRS, LS2N）、Emmanouil Benetos（Queen Mary University of London, Centre for Digital Music）、Mathieu Lagrange（Nantes Université, École Centrale Nantes, CNRS, LS2N）

💡 **毒舌点评**

**亮点**：论文巧妙地将随机优化思想应用于经典散射变换，并设计了P-Adam和P-SAGA来应对路径分布非独立同分布的问题，同时提出的θ重要性采样启发式方法具有很强的实用性和可解释性。**短板**：虽然算法在多个合成器任务上验证有效，但其核心优势（相对于全树JTFS的加速）在更复杂的、真实的音频任务（如TR-808）上提升并不绝对显著，且实验主要局限在无监督声音匹配这一相对特定的范式内。

🔗 **开源详情**

- **代码**：提供开源Python包和代码仓库，链接为：https://christhetree.github.io/scrapl/
- **模型权重**：论文中未提及公开预训练模型权重。任务为从头训练的无监督声音匹配。
- **数据集**：TR-808数据集来自外部商业来源（Samples From Mars），论文中未提及自行公开数据。其他实验数据为合成生成，复现时可按代码生成。
- **Demo**：论文提供了伴随网站（https://christhetree.github.io/scrapl/）展示音频样本。
- **复现材料**：极其充分。附录E包含了三个实验所有超参数的详细表格。论文明确承诺提供“代码、音频样本、配置文件、复现说明以及SCRAPL算法的Python包”。
- **引用的开源项目**：依赖的开源工具/模型包括：PyTorch、nnAudio（用于CQT）、PANNs、MS-CLAP、不同的可微DSP实现（如用于颗粒合成和TR-808）。

📌 **核心摘要**

1.  **要解决什么问题**：散射变换（ST）作为感知损失函数在训练神经网络时计算成本过高，因为需要遍历所有路径（paths），严重限制了其在大规模训练中的应用。
2.  **方法核心是什么**：提出SCRAPL算法，通过随机采样单个路径来近似完整ST损失的梯度。核心是三个技术：1）路径均匀采样的随机近似；2）路径自适应矩估计（P-Adam）稳定梯度方差；3）路径随机平均梯度加速（P-SAGA）利用历史梯度信息。此外，针对可微数字信号处理（DDSP），提出了θ重要性采样（θ-IS）来初始化路径采样概率，使其更关注对合成器参数影响大的路径。
3.  **与已有方法相比新在哪里**：相比于计算所有路径的全树散射变换（如JTFS），SCRAPL大幅降低了计算和内存开销。相比于直接随机采样路径，SCRAPL通过P-Adam、P-SAGA和θ-IS显著降低了梯度估计的方差，提高了收敛速度和最终精度。相比于其他感知损失（如MSS、预训练嵌入），SCRAPL（基于JTFS）能更好地处理时频调制模式和未对齐音频。
4.  **主要实验结果如何**：在无监督颗粒合成器声音匹配任务中，SCRAPL相比全树JTFS，在精度上仅差约2倍，但计算速度快约2倍，内存占用低约5倍，达到了更好的帕累托前沿（图1）。与基线方法（如MSS, MS-CLAP）相比，SCRAPL的参数误差显著更低（表1）。消融实验（表2）表明每项技术（P-Adam, P-SAGA, θ-IS）都能带来统计显著的改进。在啁啾合成器上，θ-IS相比均匀采样可将收敛时间减少23-50%，参数误差降低14-80%（表3）。在TR-808鼓机匹配中，JTFS在多数指标上最优，SCRAPL则提供了稳定的折中方案，尤其在未对齐（meso）设置下优于大多数MSS变体（表4）。
5.  **实际意义是什么**：使得在大规模神经网络训练中有效使用计算昂贵的、具有感知动机的散射变换损失成为可能，特别是对于需要处理时频调制模式或存在未对齐问题的音频/语音生成、增强等逆问题。
6.  **主要局限性是什么**：方法的有效性高度依赖于所选散射变换路径的代表性，对于衰减部分（如鼓声）路径稀疏时可能效果不佳。θ-IS初始化启发式需要预计算。算法分析和收敛性证明仍有待深入。

---

### 11. [AUHead: Realistic Emotional Talking Head Generation via Action Units Control](/audio-paper-digest-blog/posts/2026-05-03-auhead-realistic-emotional-talking-head)

✅ **6.5/10** | 前25% | #音频生成 | #扩散模型 | #跨模态 #音频大模型

👥 **作者与机构**

- 第一作者：Jiayi Lyu（中国科学院大学）
- 通讯作者：Jian Xue（中国科学院大学）
- 作者列表：Jiayi Lyu（中国科学院大学）、Leigang Qu（新加坡国立大学）、Wenjing Zhang（中国科学院大学）、Hanyu Jiang（中国科学院大学）、Kai Liu（浙江大学）、Zhenglin Zhou（浙江大学）、Xiaobo Xia（新加坡国立大学）、Jian Xue（中国科学院大学，通讯作者）、Tat-Seng Chua（新加坡国立大学）

💡 **毒舌点评**

这篇论文的亮点在于其清晰的“两阶段”思路，巧妙地将“理解”（ALM生成AU）与“生成”（AU驱动扩散模型）解耦，提供了一个完整的情感可控方案。然而，其短板也比较明显：第二阶段生成框架的组件（如AU到2D表示映射、交叉注意力适配器）多是现有模块的组合，缺乏革命性设计；与最强基线MEMO相比，各项指标仅有微幅提升，情感准确率和FID的改善程度或许不足以在实际应用中产生肉眼可见的“质变”。

🔗 **开源详情**

- **代码**：提供了代码仓库链接：https://github.com/laura990501/AUHead_ICLR。
- **模型权重**：未提及是否公开预训练或微调后的模型权重。
- **数据集**：使用了公开数据集MEAD和CREMA，并说明了获取和预处理方式。未提供新的数据集。
- **Demo**：未提及在线演示。
- **复现材料**：提供了详细的训练细节（GPU型号、学习率、epoch等）、关键超参数设置、评估指标和代码，复现信息充分。
- **论文中引用的开源项目**：基于以下开源项目进行开发和对比：Qwen-Audio-Chat (ALM)、Hallo V1、MEMO、EchoMimic、AniPortrait等。

📌 **核心摘要**

1.  **问题**：现有音频驱动说话头生成方法在情感表达的自然性和细粒度控制上存在不足，通常忽略语音中深层的情感线索，导致生成的表情较为平淡或僵硬。
2.  **核心方法**：提出AUHead两阶段框架。第一阶段，利用音频语言模型（ALM）通过“先情感后AU”的思维链（CoT）策略，从语音中解耦并生成细粒度的面部动作单元（AU）序列。第二阶段，设计一个AU驱动的扩散模型，将生成的AU序列映射为结构化2D面部表示，并通过上下文感知嵌入和交叉注意力机制，将其融入视频生成过程，以控制面部表情。
3.  **创新点**：首次探索利用ALM从音频中直接生成AU序列；设计了完整的AU表示、嵌入和交互模块以驱动扩散模型；引入了推理时的AU解耦引导策略，以平衡控制力与生成质量。
4.  **实验结果**：在MEAD和CREMA数据集上，AUHead在情感准确率、视觉质量（FID、PSNR、SSIM）和面部几何（M-LMD、F-LMD）等指标上优于或持平于多个SOTA方法。例如，在MEAD数据集上，基于MEMO的AUHead将FID从11.12降至10.96，情感准确率（ACCemo）从基准的67.01%（CoT生成）用于指导后，在用户研究中，64.63%的参与者认为其在情感表达上优于HalloV2。
5.  **实际意义**：该方法为需要精细情感控制的虚拟角色、影视制作和交互系统提供了一个有效的技术框架，证明了AU作为可控中间表示的价值。
6.  **主要局限性**：AU预测的精度受限于ALM的能力和训练数据，存在误差；2D AU表示可能丢失了部分3D深度信息；在复杂头姿态和多样背景下的泛化能力有待进一步验证（论文提及为未来工作）。

---

