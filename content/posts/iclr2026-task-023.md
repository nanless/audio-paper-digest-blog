---
title: "ICLR 2026 - 语音合成 论文列表"
date: 2026-05-04
draft: false
tags: ["语音合成"]
categories: [iclr-2026]
description: "共 14 篇 ICLR 2026 语音合成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音合成

共 **14** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [StableToken: A Noise-Robust Semantic Speech Tokenizer for Re](/audio-paper-digest-blog/posts/2026-05-04-stabletoken-a-noise-robust-semantic-speech) | 8.5分 | 前25% |
| 🥈 | [Toward Complex-Valued Neural Networks for Waveform Generatio](/audio-paper-digest-blog/posts/2026-05-04-toward-complex-valued-neural-networks-for) | 8.5分 | 前25% |
| 🥉 | [FlexiCodec: A Dynamic Neural Audio Codec for Low Frame Rates](/audio-paper-digest-blog/posts/2026-05-04-flexicodec-a-dynamic-neural-audio-codec-for-low) | 8.5分 | 前10% |
| 4. | [VibeVoice: Expressive Podcast Generation with Next-Token Dif](/audio-paper-digest-blog/posts/2026-05-04-vibevoice-expressive-podcast-generation-with-next) | 8.0分 | 前25% |
| 5. | [Hierarchical Semantic-Acoustic Modeling via Semi-Discrete Re](/audio-paper-digest-blog/posts/2026-05-04-hierarchical-semantic-acoustic-modeling-via-semi) | 8.0分 | 前25% |
| 6. | [TTSDS2: Resources and Benchmark for Evaluating Human-Quality](/audio-paper-digest-blog/posts/2026-05-04-ttsds2-resources-and-benchmark-for-evaluating) | 8.0分 | 前25% |
| 7. | [MambaVoiceCloning: Efficient and Expressive Text-to-Speech v](/audio-paper-digest-blog/posts/2026-05-04-mambavoicecloning-efficient-and-expressive-text) | 7.5分 | 前25% |
| 8. | [TASTE: Text-Aligned Speech Tokenization and Embedding for Sp](/audio-paper-digest-blog/posts/2026-05-04-taste-text-aligned-speech-tokenization-and) | 7.5分 | 前25% |
| 9. | [FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS](/audio-paper-digest-blog/posts/2026-05-04-flexivoice-enabling-flexible-style-control-in) | 7.5分 | 前25% |
| 10. | [Gogo: Group-wise granularity-ordered codec for stable and ef](/audio-paper-digest-blog/posts/2026-05-04-gogo-group-wise-granularity-ordered-codec-for) | 7.5分 | 前25% |
| 11. | [Continuous Audio Language Models](/audio-paper-digest-blog/posts/2026-05-04-continuous-audio-language-models) | 7.5分 | 前25% |
| 12. | [AUHead: Realistic Emotional Talking Head Generation via Acti](/audio-paper-digest-blog/posts/2026-05-04-auhead-realistic-emotional-talking-head) | 7.5分 | 前25% |
| 13. | [From Natural Alignment to Conditional Controllability in Mul](/audio-paper-digest-blog/posts/2026-05-04-from-natural-alignment-to-conditional) | 7.5分 | 前25% |
| 14. | [SpeechJudge: Towards Human-Level Judgment for Speech Natural](/audio-paper-digest-blog/posts/2026-05-04-speechjudge-towards-human-level-judgment-for) | 6.5分 | 前50% |

---

## 📋 论文详情

### 🥇 [StableToken: A Noise-Robust Semantic Speech Tokenizer for Resilient SpeechLLMs](/audio-paper-digest-blog/posts/2026-05-04-stabletoken-a-noise-robust-semantic-speech)

🔥 **8.5/10** | 前25% | #语音合成 | #鲁棒性 | #语音大模型 #预训练

👥 **作者与机构**

- 第一作者：Yuhan Song（北京大学计算机科学学院，多媒体信息处理国家重点实验室）
- 通讯作者：Linhao Zhang（微信AI基础模型技术中心），Houfeng Wang（北京大学计算机科学学院，多媒体信息处理国家重点实验室）
- 作者列表：Yuhan Song（北京大学），Linhao Zhang（微信AI），Chuhan Wu（微信AI），Aiwei Liu（微信AI），Wei Jia（微信AI），Houfeng Wang（北京大学），Xiao Zhou（微信AI）

💡 **毒舌点评**

本文巧妙地将“集成学习”和“共识机制”的思想应用于分词器量化过程，通过一种近乎零开销的多分支投票架构，优雅地解决了语音分词在噪声下的脆弱性痛点，下游任务增益显著。然而，论文的核心贡献是让一个中间组件更稳定，这本身可能不足以构成范式革新，且其设计可能过于强调“语义”而低估了“声学细节”在情感识别等任务中的价值（尽管实验显示SER也有提升）。

🔗 **开源详情**

- 代码：提供GitHub仓库链接：`https://github.com/Tencent/StableToken`
- 模型权重：论文明确说明“我们的代码和模型已公开”。
- 数据集：使用了多个公开数据集（如LibriSpeech, GigaSpeech等），但预训练所用的完整150k小时数据包含“内部数据”，故数据集本身未完全公开。
- Demo：论文中未提及在线演示。
- 复现材料：附录（B-F节）提供了极其详尽的训练数据构成、所有训练超参数、噪声扰动配置、下游任务评估细节（数据集、超参数、提示词）等，复现信息非常充分。
- 引用的开源项目：Whisper-large-v3（用于初始化编码器）、HiFi-GAN（用于语音合成）、THOP库（用于计算量分析）等。

📌 **核心摘要**

本文针对现有语义语音分词器在噪声环境下输出不稳定的问题，提出了StableToken。该模型通过引入一个多分支位级投票量化模块（Voting-LFQ） 和配套的噪声感知共识训练策略，使分词器在面对噪声扰动时能产生一致的token序列。与现有单路径量化器不同，StableToken在训练和推理时让多个分支并行处理输入，然后通过可微的位级投票机制融合结果，从而在位级别纠正噪声导致的错误。实验表明，StableToken在多种噪声条件下，将分词单元编辑距离（UED）从最优基线的26.17%大幅降低至10.17%，相对改善超过60%，同时保持了出色的语音重建质量。这种基础的分词稳定性直接转化为下游语音大模型在语音识别、语音情感识别和语音合成任务上显著的鲁棒性提升，尤其在噪声环境下优势明显。该工作的主要局限在于它专注于提升现有监督语义分词器架构的鲁棒性，而非提出全新的分词范式。

---

### 🥈 [Toward Complex-Valued Neural Networks for Waveform Generation](/audio-paper-digest-blog/posts/2026-05-04-toward-complex-valued-neural-networks-for)

🔥 **8.5/10** | 前25% | #语音合成 | #生成模型 | #对抗训练 #相位建模

👥 **作者与机构**

- 第一作者：Hyung-Seok Oh（高丽大学人工智能系）
- 通讯作者：Seong-Whan Lee（高丽大学人工智能系）
- 作者列表：Hyung-Seok Oh（高丽大学人工智能系）、Deok-Hyeon Cho（高丽大学人工智能系）、Seung-Bin Kim（高丽大学人工智能系）、Seong-Whan Lee（高丽大学人工智能系）

💡 **毒舌点评**

亮点：论文构建了一个从理论动机（复数内在结构）、核心架构（全复值生成器与判别器）、到工程优化（分块矩阵加速）的完整故事线，技术闭环且实验扎实。短板：复值网络的计算与内存开销仍是主要瓶颈，尽管有分块矩阵优化，其单次前向/反向传播时间（表12）和显存占用（表9）仍高于主流实值声码器Vocos，可能限制其在实时或资源受限场景下的部署。

🔗 **开源详情**

- 代码：论文提供了项目主页链接（https://hs-oh-prml.github.io/ComVo/），并明确说明“Audio samples and code are available at”。
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：使用了公开的LibriTTS和MUSDB18-HQ数据集，论文未提及数据集获取方式，但这些是常用公开数据集。
- Demo：项目主页可能包含音频样本演示（论文提及）。
- 复现材料：在附录中提供了非常详细的训练超参数（表20）、模型结构（表11）、损失函数定义、评估指标代码源（表18）、以及所有基线的实现代码来源（表17），足以进行复现。
- 论文中引用的开源项目：包括PyTorch， auraloss (MR-STFT)， PESQ库， cargan (周期性指标)， complextorch (用于高斯乘法技巧对比)， 以及各基线模型（HiFi-GAN， BigVGAN， Vocos， iSTFTNet， APNet， APNet2， FreeV）的官方或公开实现。

📌 **核心摘要**

1. 要解决什么问题：现有的基于逆短时傅里叶变换（iSTFT）的神经声码器（如Vocos）虽高效，但其内部使用实值神经网络（RVNN）分别处理频谱图的实部和虚部，无法捕捉复数表示中实部与虚部之间的内在耦合结构，这限制了合成质量。
2. 方法核心是什么：提出ComVo，一个完全基于复值神经网络（CVNN）的声码器。其生成器和判别器（cMRD）均在复数域进行操作。此外，引入了两个关键技术：相位量化（将连续相位离散化作为归纳偏置）和分块矩阵计算方案（将复数运算融合为矩阵运算以提升训练效率）。
3. 与已有方法相比新在哪里：
    - 首次将CVNN同时应用于iSTFT声码器的生成器和判别器，建立了复数域对抗训练框架。
    - 提出相位量化层，这是专为CVNN设计的非线性操作，用于稳定训练并引导相位学习。
    - 设计了分块矩阵计算方案，从底层优化了CVNN的前向与反向传播，显著减少了计算图复杂度。
4. 主要实验结果如何：
    - 合成质量：在LibriTTS和MUSDB18-HQ数据集上，ComVo在多项客观指标（如MR-STFT， PESQ）上超越了所有对比的强实值基线（HiFi-GAN， BigVGAN， Vocos）。主观评估（MOS， CMOS）也表明其质量与最佳基线持平或更优。
    - 效率提升：分块矩阵方案将生成器的反向传播计算图节点减少了55%，判别器（cMRD）减少了67%，整体训练时间缩短了25%（表7）。
    - 关键消融：单独使用复值判别器（cMRD）优于实值判别器（MRD）；同时使用复值生成器与判别器（GCDC）效果最佳（表5）。相位量化在Nq=128时取得了感知质量（UTMOS）和频谱失真（MR-STFT）的最佳平衡（表6）。

    表2： LibriTTS数据集上的主要实验结果
    | 模型 | UTMOS ↑ | MR-STFT ↓ | PESQ ↑ | MOS ↑ | CMOS ↑ |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | GT | 3.8712 | - | - | 4.08 ± 0.04 | 0.14 |
    | Vocos | 3.6025 | 0.8856 | 3.6266 | 4.05 ± 0.05 | -0.02 |
    | ComVo | 3.6901 | 0.8439 | 3.8239 | 4.07 ± 0.05 | 0 |

    表4： MUSDB18-HQ数据集上的主观评估（SMOS）
    | 模型 | 人声 | 鼓 | 贝斯 | 其他 | 混合 | 平均 |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | GT | 4.31 ± 0.11 | 4.25 ± 0.12 | 4.26 ± 0.12 | 4.29 ± 0.11 | 4.37 ± 0.11 | 4.29 ± 0.11 |
    | Vocos | 4.04 ± 0.12 | 4.10 ± 0.13 | 3.58 ± 0.16 | 3.52 ± 0.17 | 3.87 ± 0.13 | 3.82 ± 0.14 |
    | ComVo | 4.05 ± 0.12 | 4.14 ± 0.12 | 3.60 ± 0.17 | 3.68 ± 0.16 | 3.98 ± 0.13 | 3.89 ± 0.14 |

5. 实际意义是什么：为高质量波形生成提供了一种新的建模范式，证明了在音频信号处理等复数域问题上，使用CVNN比RVNN更具优势。其高效计算方案推动了CVNN在更大规模任务上的应用可能。
6. 主要局限性是什么：复值网络的内存占用和计算开销仍然高于同参数量的实值网络（表9），限制了其在实时或大规模场景的应用。论文中提到多GPU训练存在性能优化问题和数值稳定性问题，目前报告的是单GPU结果。

---

### 🥉 [FlexiCodec: A Dynamic Neural Audio Codec for Low Frame Rates](/audio-paper-digest-blog/posts/2026-05-04-flexicodec-a-dynamic-neural-audio-codec-for-low)

🔥 **8.5/10** | 前10% | #语音合成 | #流匹配 | #模型评估 #自监督学习

👥 **作者与机构**

- 第一作者：Jiaqi Li（香港中文大学（深圳），Microsoft）
- 通讯作者：未说明（论文中未明确标注通讯作者）
- 作者列表：Jiaqi Li（香港中文大学（深圳），Microsoft）、Yao Qian（Microsoft）、Yuxuan Hu（Microsoft）、Leying Zhang（上海交通大学）、Xiaofei Wang（Microsoft）、Heng Lu（Microsoft）、Manthan Thakker（Microsoft）、Jinyu Li（Microsoft）、Sheng Zhao（Microsoft）、Zhizheng Wu（香港中文大学（深圳），深圳湾实验室，澳门城市大学，Amphion Technology Co., Ltd.）

💡 **毒舌点评**

亮点在于其将音频编解码器的帧率压到了3-12.5Hz的极低范围，并首次引入动态帧率机制，使编码能根据语音的音素复杂度自适应调整，这种“信息自适应压缩”的思路对后续语音大模型的效率提升有直接价值。短板则是训练数据几乎完全依赖LibriSpeech（有声书），对真实世界中的嘈杂、多说话人、非英语场景的验证相对薄弱，虽然做了Emilia数据集上的零样本测试，但多语言下的语义保真度（WER）显著下降，暴露了其动态合并机制高度依赖英语ASR特征的局限。

🔗 **开源详情**

- 代码：提供GitHub仓库链接：https://github.com/amphionteam/flexicodec。
- 模型权重：论文中提及“Code and model are available”，表明会提供预训练模型权重。
- 数据集：训练使用LibriLight-Large（公开），评估使用LibriSpeech和TIMIT（公开）。论文未提及开源新的数据集。
- Demo：提供在线演示链接：https://flexicodec.github.io。
- 复现材料：论文及附录提供了详尽的训练细节（优化器、学习率、batch size、训练步数、硬件环境）、模型配置（层数、维度、码本大小）和评估指标定义，可复现性高。
- 引用的开源项目：SenseVoice-Small（ASR特征提取器）、DAC（声学编码器/解码器架构基础）、Vocos（声码器）、Amphion工具包（评估与下游TTS实现）。

📌 **核心摘要**

FlexiCodec旨在解决现有神经音频编解码器在追求极低帧率（<12.5Hz）时，因固定时间分辨率和语义-声学信息解耦不足而导致的语义信息严重丢失问题。其核心方法是提出一种基于ASR特征引导的双流编码架构，并创新性地引入动态帧率机制，通过计算相邻帧ASR特征的余弦相似度，自适应地合并语义相似的帧（如长元音、静音），从而在信息稀疏区域使用更少的帧。该模型支持在3Hz至12.5Hz范围内，在推理时通过调整阈值τ连续可控地调节帧率。主要实验结果表明，在极低的6.25Hz平均帧率下，FlexiCodec的RVQ-1重建词错率（WER）仅为4.15%，远优于重训的基线模型DualCodec（31.5%）和DAC（88.2%），并在多个声学质量指标上保持领先。在下游TTS任务中，以6.25Hz AR帧率构建的FlexiCodec-TTS系统，在保持与CosyVoice等基线系统相当的合成质量（WER 3.2%，NMOS 3.32）的同时，将AR阶段的推理速度提升了7.3倍。该工作的实际意义在于为语音大模型提供了一个高效、语义信息丰富的离散表示，能显著降低自回归模型的序列长度和计算成本。主要局限性包括：训练数据域相对单一；动态合并机制的性能高度依赖所选ASR特征的质量；且在多语言零样本场景下语义保真度有待提升。

---

### 4. [VibeVoice: Expressive Podcast Generation with Next-Token Diffusion](/audio-paper-digest-blog/posts/2026-05-04-vibevoice-expressive-podcast-generation-with-next)

🔥 **8.0/10** | 前25% | #语音合成 | #扩散模型 | #语音大模型 #多说话人

👥 **作者与机构**

- 第一作者：Zhiliang Peng (Microsoft Research)
- 通讯作者：Furu Wei (Microsoft Research, fuwei@microsoft.com)
- 作者列表：Zhiliang Peng、Jianwei Yu、Wenhui Wang、Yaoyao Chang、Yutao Sun、Li Dong、Yi Zhu、Weijiang Xu、Hangbo Bao、Zehua Wang、Shaohan Huang、Yan Xia、Furu Wei （*表示核心贡献者，所有作者均隶属于Microsoft Research）

💡 **毒舌点评**

这篇论文最亮眼的地方在于它用7.5Hz的超低帧率连续分词器和next-token diffusion框架，实现了最长90分钟、4说话人的端到端播客生成，在主观评测上击败了ElevenLabs和Gemini等商业模型，技术路线清晰且有实效。不过，其模型训练依赖的内部播客数据集并未公开，虽然代码开源，但这对学术界的完全复现构成了一定壁垒。

🔗 **开源详情**

- 代码：提供GitHub仓库链接：https://github.com/microsoft/VibeVoice。
- 模型权重：论文中提到“Code and checkpoint are available”，但未明确说明检查点是否完全公开。在开源详情部分未提供更多细节。
- 数据集：训练数据集为内部播客音频集合，未公开。评估数据集VIBEVOICE-Eval为作者构建，论文中未提及公开获取方式。
- Demo：论文中未提及在线演示。
- 复现材料：论文详细提供了训练超参数（表9）、模型架构细节、评估设置，并在附录中补充了数据处理工具列表（表4）、更多消融结果和重建结果。复现所需的关键信息较为充分。
- 论文中引用的开源项目：
    *   数据处理：Silero VAD, Whisper-large-v3-turbo, Nemo ASR, WeSpeaker embedding。
    *   评估：WER toolkit (Qwen-Audio), SIM-O toolkit (seed-tts-eval)。
    *   基线模型：CosyVoice2, MoonCast等。

📌 **核心摘要**

本文旨在解决传统TTS系统在生成长篇、多说话人对话音频（如播客）时面临的挑战，包括可扩展性、说话人一致性和自然轮换。核心方法是提出VIBEVOICE，一个端到端框架，其核心组件是运行在7.5Hz超低帧率下的连续声学与语义分词器，以及基于LLM和扩散头的next-token diffusion生成架构。与已有方法相比，其新意在于：1）解耦的超低帧率分词器设计，在保证高保真重建的同时极大提升了长序列处理效率；2）设计了混合语音表示（结合声学与语义特征）以稳定长序列生成；3）构建了一个自动标注管道为大量播客数据生成伪标签，用于训练。主要实验结果显示，VIBEVOICE-7B在自建的VIBEVOICE-Eval数据集和人类主观评测中，平均MOS得分（3.71）超越了Google Gemini 2.5 Pro TTS（3.66）和ElevenLabs v3 alpha（3.40）等模型，在生成时长（达30分钟以上）和说话人数量（达4人）上远超MoonCast等先前工作。该研究的实际意义在于为自动生成高质量、长篇幅的多角色音频内容（如播客、有声书）提供了可扩展的解决方案。主要局限性在于模型训练使用了未公开的内部播客数据集，且论文中未明确提及模型权重的公开计划。

关键实验结果表格：

| 模型 | 主观平均分 | WER-W ↓ | SIM-O ↑ |
| :--- | :--- | :--- | :--- |
| Cosyvoice2 | - | 3.45 | 0.68 |
| MoonCast | - | 2.81 | 0.562 |
| SesameAILabs-CSM | 2.89 ±1.12 | 2.66 | 0.685 |
| Higgs Audio V2 | 2.99 ±1.13 | 5.94 | 0.543 |
| Elevenlabs v3 alpha | 3.40 ±1.09 | 2.39 | 0.623 |
| Gemini 2.5 pro preview tts | 3.66 ±1.16 | 1.73 | - |
| VIBEVOICE-1.5B | 3.54 ±0.96 | 1.11 | 0.548 |
| VIBEVOICE-7B | 3.76 ±0.93 | 1.29 | 0.692 |

---

### 5. [Hierarchical Semantic-Acoustic Modeling via Semi-Discrete Residual Representations for Expressive End-to-End Speech Synthesis](/audio-paper-digest-blog/posts/2026-05-04-hierarchical-semantic-acoustic-modeling-via-semi)

🔥 **8.0/10** | 前25% | #语音合成 | #端到端 | #语音大模型 #流匹配

👥 **作者与机构**

- 第一作者：Yixuan Zhou (清华大学深圳国际研究生院)
- 通讯作者：Zhiyong Wu (清华大学深圳国际研究生院)
- 作者列表：Yixuan Zhou (清华大学深圳国际研究生院), Guoyang Zeng (ModelBest Inc), Xin Liu (ModelBest Inc), Xiang Li (清华大学深圳国际研究生院), Renjie Yu (清华大学深圳国际研究生院), Ziyang Wang (ModelBest Inc), Runchuan Ye (清华大学深圳国际研究生院), Weiyue Sun (ModelBest Inc), Jiancheng Gui (ModelBest Inc), Kehan Li (清华大学深圳国际研究生院), Zhiyong Wu (清华大学深圳国际研究生院), Zhiyuan Liu (清华大学计算机科学与技术系)

💡 **毒舌点评**

亮点：论文巧妙地将FSQ用作可微分的“信息瓶颈”，而非传统的预测目标，以此强制模型在架构内自动完成从“语义规划”到“声学渲染”的任务分工，这个设计非常优雅且实验验证有力。短板：尽管声称端到端，但系统仍依赖独立预训练的音频VAE，且FSQ的“半离散”特性（高维标量量化）与传统的VQ-VAE有本质区别，论文在理论阐释上稍显不足，容易让读者混淆其与经典离散token方法的边界。

🔗 **开源详情**

- 代码：论文在摘要和结论中承诺将公开代码和模型（“We will release code and models”），并在Demo页面（https://voxcpm.github.io/VoxCPM-demopage/）展示了样本。但在提供的论文文本中，未给出具体的GitHub或Hugging Face代码仓库链接。
- 模型权重：论文提及将发布模型，但未在文本中提供具体的权重下载链接。Demo页面可能包含示例，但未明确说明。
- 数据集：使用了两个数据集。Emilia数据集是公开的。另一个是超过100万小时的内部大规模双语数据集，未公开。
- Demo：提供在线演示页面：https://voxcpm.github.io/VoxCPM-demopage/。
- 复现材料：提供了非常充分的复现材料，包括：详细的模型架构参数表（表5）、训练配置表（表6）、优化器设置、学习率调度策略、所有消融研究的具体设置、评估指标说明、基线模型来源和设置等。论文附录中包含了更多实现细节。
- 论文中引用的开源项目：依赖的开源工具/模型包括：MiniCPM-4（用于初始化TSLM）、Megatron框架（用于训练）、EnCodec/DAC（在相关工作中提及，但本文未直接使用其离散分词器）。

📌 **核心摘要**

1. 问题：当前端到端语音合成面临表达性与稳定性的根本权衡。离散token方法稳定但损失细节，连续表示方法保留细节但因任务纠缠（语义规划与声学渲染混合）导致长序列生成时误差累积和不稳定。
2. 核心方法：提出VoxCPM框架，通过分层语义-声学建模和半离散残差表示来解决该问题。核心是引入一个可微分的有限标量量化瓶颈，使模型自然分离：一个文本语义语言模型生成稳定的语义-韵律计划，一个残差声学模型恢复丢失的精细声学细节。最终，两者结合的信号引导一个局部扩散解码器生成高质量语音。
3. 创新点：与已有方法相比，新在：1) 使用FSQ作为可微分正则化器而非预测目标，避免了词表爆炸；2) 在统一端到端框架内实现了功能分离，无需依赖外部离散语音分词器；3) 通过残差学习策略，使模型在保持全局规划能力的同时，能专注于局部声学精修。
4. 主要实验结果：在超过100万小时双语数据上训练的0.5B参数模型，在开源系统中实现了最先进的零样本TTS性能。在SEED-TTS-EVAL基准上，英语WER 1.85%，中文CER 0.93%，说话人相似度SIM分别达72.9%和77.2%，显著优于多数基线。消融实验表明，半离散瓶颈和残差建模对鲁棒性和长句合成至关重要，移除后性能大幅下降（如中文Hard Case CER从18.19%升至24.92%）。
5. 实际意义：该模型能生成高保真、高表现力的语音，并具备强大的零样本克隆能力，适用于虚拟助手、数字人等需要情感表达和音色定制的场景。其架构设计为解决生成式音频建模中的通用权衡问题提供了新思路。
6. 主要局限性：系统复杂，组件较多（TSLM, RALM, LocEnc, LocDiT, Audio VAE）；尽管是端到端训练，但音频VAE仍是独立预训练模块；模型的推理实时因子（RTF）虽好（0.17），但在资源受限设备上的部署可行性需进一步验证；论文中部分分析（如t-SNE可视化）依赖于特定任务的定性展示，定量普适性有待更多验证。

---

### 6. [TTSDS2: Resources and Benchmark for Evaluating Human-Quality Text to Speech Systems](/audio-paper-digest-blog/posts/2026-05-04-ttsds2-resources-and-benchmark-for-evaluating)

🔥 **8.0/10** | 前25% | #语音合成 | #模型评估 | #基准测试 #多语言

👥 **作者与机构**

- 第一作者：Christoph Minixhofer（爱丁堡大学语音技术研究中心）
- 通讯作者：未明确标注，但三位作者来自同一单位，共同贡献。
- 作者列表：
  - Christoph Minixhofer（爱丁堡大学语音技术研究中心）
  - Ondrej Klejch（爱丁堡大学语音技术研究中心）
  - Peter Bell（爱丁堡大学语音技术研究中心）

#

💡 **毒舌点评**

这篇论文堪称“评估方法论”的典范，它没有追逐花哨的生成模型，而是埋头构建了当前最全面、最稳健的TTS评估“标尺”和“考场”，并公开了所有“考题”和“评分标准”，这对于处于“军备竞赛”中的语音合成领域是极具实用价值的公共基础设施。然而，其提出的TTSDS2指标虽然稳健，但计算开销显著高于简单指标（如MOS预测网络），且其与主观分数的相关性上限受限于人类听测本身的噪声，这暗示了“客观评估人类感知”这一根本挑战的艰难。

#

🔗 **开源详情**

- 代码：提供了完整的数据收集和评估流水线代码，GitHub仓库：`github.com/ttsds/pipeline`。
- 模型权重：TTSDS2本身是一个评估框架，依赖的预训练特征提取模型（如SSL模型）均为公开的第三方模型，论文未发布自有模型权重。
- 数据集：
    - 主观测试数据集已公开，包含超过11,000个评分：`huggingface.co/datasets/ttsds/listening_test`。
    - 多语言基准数据集可通过运行官方流水线自动生成，论文未提供直接下载链接。
- Demo：提供了在线基准测试结果展示网站：`ttsdsbenchmark.com`。
- 复现材料：论文详细描述了实验设置（附录B）、指标对比（表3）、消融实验（表4、5），并提供了示例调查问卷链接（`ttsdsbenchmark.com/survey`）。
- 论文中引用的开源项目：
    - 评估工具：`VERSA` 评估工具包。
    - 数据处理：`Whisper Diarization`, `FastText`, `Pyannote`, `Demucs`。
    - 特征提取：`mHuBERT-147`, `XLSR-53`, `WeSpeaker`, `ESPNet-SPK`（用于X-Vector, RawNet3, ECAPA-TDNN）等。
    - TTS系统：论文评估了20个开源TTS系统（如Bark, VALL-E, StyleTTS2等，详见表6）。

📌 **核心摘要**

1. 问题：现代文本到语音（TTS）系统生成的语音已接近人类水平，使得传统的主观评估（如MOS测试）难以比较，而常用的客观评估指标在跨领域、跨语言时可靠性下降，且很少被验证是否与主观评价相关。
2. 方法核心：提出TTSDS2，一种基于分布相似性的因子化评估框架。它通过多个自监督学习（SSL）和特定特征提取器（如说话人、韵律、可懂度相关特征），计算合成语音与真实语音在特征分布上的2-Wasserstein距离，并将其归一化为0-100的分数（100为与真实语音完全相同）。最终分数是四个因子（通用、说话人、韵律、可懂度）分数的平均值。
3. 创新之处：相较于其前身TTSDS和其他指标，TTSDS2改进了特征选择以增强跨领域鲁棒性（例如，用ASR模型的激活替代WER），并扩展了多语言支持。它是唯一在论文测试的所有4个领域（干净朗读、嘈杂、野生对话、儿童语音）和3种主观评分（MOS, CMOS, SMOS）中，与人类评价的Spearman相关系数均超过0.5的指标。
4. 实验结果：在20个开源TTS系统的评估中，TTSDS2的平均相关性为0.67，显著优于其他15种客观指标（如Speaker Similarity、MOS预测网络、Fréchet Audio Distance等）。论文还发布了包含11,282个匿名主观评分的数据集，并建立了一个涵盖14种语言的自动化基准测试流水线。关键结果见下表：
    | 指标 | 平均相关性（与MOS） | 在所有条件下>0.5 |
    | :--- | :--- | :--- |
    | TTSDS2 (本文) | 0.67 | 是 |
    | TTSDS (前作) | 0.58 | 否 |
    | RawNet3 (说话人相似度) | 0.60 | 否 |
    | SQUIM MOS | 0.57 | 否 |
    | UTMOSv2 | 0.15 | 否 |
    | STOI | 0.05 | 否 |
5. 实际意义：为TTS研究社区提供了一个更可靠、可复现的客观评估标准和大规模基准，有助于公平比较不同系统，并可能用于监控大规模生成的语音内容的真实性。
6. 主要局限性：计算开销较大（依赖CPU密集的Wasserstein距离计算）；其与主观评价的相关性仍有上限，表明无法完全替代人类听测；目前不支持长音频评估。

#

---

### 7. [MambaVoiceCloning: Efficient and Expressive Text-to-Speech via State-Space Modeling and Diffusion Control](/audio-paper-digest-blog/posts/2026-05-04-mambavoicecloning-efficient-and-expressive-text)

✅ **7.5/10** | 前25% | #语音合成 | #扩散模型 | #语音识别 #语音大模型

👥 **作者与机构**

请基于当前提供的论文内容尽量完整提取作者与机构信息，要求：
1. 明确标注第一作者（如论文可判断），否则写“未说明”
2. 明确标注通讯作者（如论文可判断），否则写“未说明”
3. 列出能确认的作者姓名及其所属机构（大学、实验室、公司）
4. 机构信息尽量具体到实验室或部门；如果文本里没有，就写到能确认的层级
5. 禁止猜测机构信息；无法确认时明确写“未说明”

输出格式示例：
- 第一作者：张三（清华大学计算机系）
- 通讯作者：李四（Google DeepMind）
- 作者列表：张三（清华大学计算机系）、李四（Google DeepMind）、王五（未说明）

💡 **毒舌点评**

用 2-3 句话做有信息量的点评，必须同时包含至少 1 个亮点和 1 个短板。可以犀利，但不要空泛嘲讽，不要只喊“很强”或“很水”。

🔗 **开源详情**

请只根据论文内容或当前提供文本中的链接信息总结开源情况，禁止编造仓库、stars、平台热度。尽量覆盖：
- 代码：是否提供代码仓库链接；若无，写“论文中未提及代码链接”
- 模型权重：是否提到公开权重；若无，写“未提及”
- 数据集：是否公开、如何获取；若无，写“未提及”
- Demo：是否提供在线演示；若无，写“未提及”
- 复现材料：是否给出训练细节、配置、检查点、附录说明
- 论文中引用的开源项目：列出了哪些依赖的开源工具/模型？
- 如果论文中未提及，明确说明“论文中未提及开源计划”

📌 **核心摘要**

用 5-8 句话总结这篇论文，必须覆盖：
1. 要解决什么问题
2. 方法核心是什么
3. 与已有方法相比新在哪里
4. 主要实验结果如何（尽量带数字；没有就写未提供）。如果论文中有实验结果表格，必须用 Markdown 表格完整列出关键数据；如果有实验结果相关图表，描述图表内容
5. 实际意义是什么
6. 主要局限性是什么

---

### 8. [TASTE: Text-Aligned Speech Tokenization and Embedding for Spoken Language Modeling](/audio-paper-digest-blog/posts/2026-05-04-taste-text-aligned-speech-tokenization-and)

✅ **7.5/10** | 前25% | #语音合成 | #预训练 | #语音大模型 #自回归模型

👥 **作者与机构**

- 第一作者：Liang-Hsuan Tseng（联发科研究中心实习、台湾大学）
- 通讯作者：未明确说明（论文未明确标注通讯作者，但邮箱 {yi-chang.chen, ds.shiu}@mtkresearch.com 为联发科团队，{f11921067, b10901091, hungyilee}@ntu.edu.tw 为台大团队，可推断多位核心作者）
- 作者列表：
    - Liang-Hsuan Tseng（联发科研究中心实习、台湾大学电气工程研究所）
    - Yi-Chang Chen（联发科研究中心，共同一作）
    - Kuan-Yi Lee（台湾大学）
    - Da-Shan Shiu（联发科研究中心）
    - Hung-yi Lee（台湾大学人工智能卓越研究中心）

💡 **毒舌点评**

这篇工作精准地瞄准了联合语音-文本建模中的一个核心痛点——序列长度不匹配，并通过一个设计优雅的“文本对齐”语音tokenization方案（TASTE）给出了干净利落的解决方案，使得在预训练文本LLM上进行轻量化微调就能获得优异的SLM性能，实用性很强。不过，其tokenization过程严重依赖于一个高质量的ASR系统（如Whisper）提供的转录文本，这在实际部署中可能引入延迟、错误传播和额外依赖，是一个未被充分讨论的工程与鲁棒性挑战。

🔗 **开源详情**

- 代码：提供了开源仓库链接（https://mtkresearch.github.io/TASTE-SpokenLM.github.io）。
- 模型权重：论文提到提供了预训练模型（“Our demo, code, and models are available at...”）。
- 数据集：训练使用了公开的Emilia和LibriTTS数据集，未提供独占数据集。
- Demo：提供了在线演示页面。
- 复现材料：论文附录（A.2, A.3）提供了详细的训练超参数、配置、评估指令和算法（Algorithm 1）。
- 引用的开源项目：Whisper (ASR编码器)、HiFi-GAN/Flow (声码器)、LLaMA (基础LLM)、DeepSpeed/Liger Kernel (训练加速)。

📌 **核心摘要**

这篇论文旨在解决构建联合文本-语音口语语言模型（SLM）时面临的核心挑战：语音token序列通常比其对应的文本转录长得多，导致直接的联合建模复杂且低效。论文提出TASTE（Text-Aligned Speech Tokenization and Embedding），一种在tokenization阶段就将语音token与其文本转录对齐的方法。核心是利用一个基于注意力的聚合器，以冻结的Whisper编码器提取的语音表示为“键值”，以文本转录为“查询”，生成长度与文本token一一对应的语音表示，再经RVQ量化得到离散token。训练目标是语音重建，使得token专注于编码副语言信息。主要实验结果表明：1）TASTE在极低比特率（~150 bps）下实现了高质量的语音重建（表1），质量接近高比特率基线；2）基于TASTE构建的SLM（TASLM）在语音续写任务上，以仅1.3B参数在多项指标（GPT-4o评分3.16，人工MOS 4.16）上优于7B参数的其他预训练SLM（表2）；3）在SALMON和StoryCloze等基准测试中表现具有竞争力。该工作的主要意义在于提出了一种简洁的联合tokenization范式，极大简化了SLM的建模流程。主要局限性包括：目前仅验证了英文，未处理多人语音、非语言事件（如笑声）和系统延迟问题（论文中明确提及）。

---

### 9. [FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS with Natural Language Instructions](/audio-paper-digest-blog/posts/2026-05-04-flexivoice-enabling-flexible-style-control-in)

✅ **7.5/10** | 前25% | #语音合成 | #强化学习 | #流匹配 #零样本

👥 **作者与机构**

- 第一作者：Dekun Chen (香港中文大学，深圳)
- 通讯作者：未明确说明
- 作者列表：Dekun Chen (香港中文大学，深圳), Xueyao Zhang (香港中文大学，深圳), Yuancheng Wang (香港中文大学，深圳), Kenan Dai (华为技术有限公司), Li Ma (华为技术有限公司), Zhizheng Wu (香港中文大学，深圳；深圳湾实验室；澳门城市大学；Amphion Technology Co., Ltd.)

💡 **毒舌点评**

亮点：提出了“渐进式后训练”这一结构化的训练范式，巧妙地将复杂的多模态控制问题分解为从基础对齐、到解耦、再到泛化的阶梯式课程学习，在解决风格-音色冲突问题上展现了清晰的思路和良好的效果。
短板：其核心的解耦能力验证和训练（S1、S2阶段）高度依赖情感任务和情感数据集（如ESD），对于更广泛、更抽象的“风格”（如文体、氛围）的解耦泛化能力，虽有S3阶段，但缺乏同样深入的解耦实验分析，验证链条在S3阶段有所弱化。

🔗 **开源详情**

- 代码：论文中承诺将开源训练和推理代码，但未提供具体的代码仓库链接。
- 模型权重：论文中承诺将开源模型检查点，但未提供下载地址或发布平台信息。
- 数据集：论文中承诺将开源FlexiVoice-Instruct数据集，但未提供具体的获取方式。
- Demo：提供了在线音频样本展示页面链接：https://flexi-voice.github.io/。
- 复现材料：论文在附录A.10中提供了详细的训练配置和超参数，包括硬件（8×A800）、各阶段时长、学习率、组大小等，复现信息充分。
- 论文中引用的开源项目：Phi-3.5-mini-instruct (LLM), DualCodec (语音分词), Vocos (声码器), Emotion2vec (情感识别), CAM++ (说话人验证), Kimi-Audio-7B-Instruct (奖励模型), Deepseek-V3 (数据标注)。

📌 **核心摘要**

1. 要解决什么问题：在零样本语音合成（TTS）中，当同时使用自然语言指令控制说话风格和语音参考控制音色时，模型容易出现“风格-音色-内容冲突”，即被参考语音的风格或文本本身的情感所误导，无法忠实遵循指令指定的风格。
2. 方法核心是什么：提出FlexiVoice系统，其核心是“渐进式后训练”策略。该策略分为三阶段：(1) 使用DPO在情感任务上对齐模型对指令和参考语音的响应；(2) 使用多目标GRPO在情感任务上训练模型主动解耦指令风格与参考音色/文本内容；(3) 使用基于音频语言模型奖励的GRPO，将能力扩展到更复杂的开放指令。
3. 与已有方法相比新在哪里：不同于以往仅通过条件注入或简单偏好对齐的方法，本文提出了一种分阶段、目标递进的训练课程，专门且系统地针对多模态输入间的冲突进行解耦优化，而非简单混合训练。同时，构建了大规模、高质量、使用LLM标注的指令语音数据集FlexiVoice-Instruct。
4. 主要实验结果如何：在自建的情感解耦测试集上，FlexiVoice在英语/中文的“文本-参考”困难任务上，指令遵循准确率(ACC-I)分别达到78.2%/75.8%，远超最强基线VoxInstruct的49.7%/18.7%；同时保持较高的说话人验证准确率(SV)。在复杂指令跟随基准InstructTTSEval上，FlexiVoice（EN avg: 79.3, ZH avg: 70.8）超越所有开源基线，并接近闭源商业模型Gemini-Pro（EN: 80.3）的性能。
5. 实际意义是什么：该工作使TTS系统能够更灵活、更鲁棒地通过自然语言指令精确控制生成语音的风格，同时保持目标音色不变，这对于个性化语音助手、内容创作、游戏配音等应用具有重要价值，推动了语音合成技术向更实用化迈进。
6. 主要局限性是什么：解耦能力的训练和验证主要围绕情感展开，对于其他非情感类风格（如口音、年龄感）的解耦效果需要更多直接证据。此外，S3阶段使用了开源的Kimi-Audio作为奖励模型，其与人类偏好的对齐程度虽然通过Macro-F1验证，但仍可能影响最终指令跟随的上限。

---

### 10. [Gogo: Group-wise granularity-ordered codec for stable and efficient speech generation](/audio-paper-digest-blog/posts/2026-05-04-gogo-group-wise-granularity-ordered-codec-for)

✅ **7.5/10** | 前25% | #语音合成 | #流匹配 | #自回归模型 #大语言模型

👥 **作者与机构**

- 第一作者：Weidong Chen（香港中文大学）
- 通讯作者：未明确标注，论文首页标注Xixin Wu为通讯作者（*Corresponding author）。
- 作者列表：Weidong Chen（香港中文大学），Helen M. Meng（香港中文大学），Xixin Wu（香港中文大学）

#

💡 **毒舌点评**

这篇工作最大的亮点在于“从粗到细”的架构设计哲学，通过将编解码器和语言模型紧密耦合，显著提升了长程语音生成的稳定性。然而，其token分配器的训练（GRPO）虽然巧妙，但训练过程需要冻结主模型并进行穷举采样，效率不高，且将令牌率从47Hz降至36Hz所带来的质量下降在主观评估中已可感知，对于实际部署的收益可能需要更仔细的权衡。

#

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开权重下载。
- 数据集：使用了公开的Emilia（英文子集）、LibriTTS和Seed-TTS数据集进行训练和评估，但未提及是否会发布新的数据集。
- Demo：提供了官方在线演示页面：https://happycolor.github.io/gogo
- 复现材料：论文在附录中提供了非常详细的训练细节、模型配置（C节）、超参数（表4）、评估指标定义（G节）和消融实验设置，复现友好度较高。
- 论文中引用的开源项目：依赖的开源工具/模型包括：LLaMA（基础模型）、Vocos（声码器）、HuBERT/WavLM（用于某些基线和评估）。

📌 **核心摘要**

1.  解决的问题：现有的语音语言模型（SLM）面临其核心组件——语音编解码器——的双重矛盾：需要产生包含丰富高层语义的令牌以利于自回归建模，同时又要保留足够的细节以保证重建质量。此外，传统逐帧量化和固定码率无法适应语音信号的非均匀信息分布。
2.  方法核心：提出Gogo，一种分组粒度有序的编解码器。它将连续帧分组，并为每个组生成从粗到细排列的令牌（粗令牌编码高层抽象，细令牌恢复细节）。基于此，提出GogoSpeech，一个两阶段SLM：第一阶段以极低的令牌率（约14 Hz）生成粗粒度的“语音骨架”；第二阶段在此基础上逐步填充细粒度声学细节。此外，设计了GRPO训练的令牌分配器，根据组的复杂度自适应分配令牌预算。
3.  相比已有方法的新颖性：(1) 编解码器层面：打破了传统逐帧量化的范式，实现了分组和粒度有序的量化，使令牌更友好于自回归建模。(2) 生成模型层面：采用了显式的两阶段（骨架-细节）生成策略，降低了长序列预测的难度。(3) 效率优化：通过强化学习（GRPO）训练的令牌分配器，实现了计算资源与信号复杂度的动态匹配。
4.  主要实验结果：
    *   重建性能：在47 Hz令牌率下，Gogo在多数重建指标（UT-MOS, DNS-MOS）上超越了50 Hz及以下的SOTA编解码器（如MagiCodec， X-codec2）。
    *   TTS性能：在零样本TTS任务（Seed-TTS test-en）上，GogoSpeech取得了最佳的SMOS（4.381）和CMOS（+1.832），以及极具竞争力的SIM和WER。

    关键实验结果对比表（摘自论文Table 3）：

    | 模型 | SIM | WER | RTF | SMOS | CMOS |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | Ground Truth | 0.734 | 2.143 | - | 4.752 | 0.000 |
    | CosyVoice 2 | 0.654 | 2.380 | 0.549 | 4.331 | +1.638 |
    | FireRedTTS-1S | 0.660 | 2.170 | 0.506 | 4.247 | +1.634 |
    | GogoSpeech (47 Hz) | 0.667 | 2.394 | 0.535 | 4.381 | +1.832 |
    | w/ Allocator (47→36 Hz) | 0.662 | 2.469 | 0.455 | 4.253 | +1.587 |

    *   效率：加入令牌分配器后，平均令牌率从47 Hz降至36 Hz（节省约23%计算量），性能仅有微小下降。
5.  实际意义：为语音生成领域提供了一种新的、更高效且稳定的模型架构。通过自适应令牌分配，可以在质量与效率之间取得更优平衡，对于实时或资源受限的语音生成应用有潜在价值。
6.  主要局限性：(1) 解码时占位符（placeholder tokens）偶尔引入伪影。(2) 47 Hz的令牌率仍高于一些超低比特率编解码器（如25 Hz）。(3) GogoSpeech基于Llama-3.2-1B-Instruct，其扩展到更大模型的能力有待验证。

---

### 11. [Continuous Audio Language Models](/audio-paper-digest-blog/posts/2026-05-04-continuous-audio-language-models)

✅ **7.5/10** | 前25% | #语音合成 | #自回归模型 | #音乐生成 #一致性模型

👥 **作者与机构**

- 第一作者：Simon Rouard（Kyutai；UMR STMS, IRCAM-CNRS Sorbonne Univ.）
- 通讯作者：未明确说明（从作者顺序和邮箱看，可能是Alexandre Défossez或Neil Zeghidour）
- 作者列表：Simon Rouard（Kyutai, UMR STMS, IRCAM-CNRS Sorbonne Univ.）、Manu Orsini（Kyutai）、Axel Roebel（UMR STMS, IRCAM-CNRS Sorbonne Univ.）、Neil Zeghidour（Kyutai）、Alexandre Défossez（Kyutai）

💡 **毒舌点评**

论文最大的亮点在于将一致性模型高效采样的优势与连续潜在空间的表达能力相结合，通过双Transformer设计（噪声长上下文+干净短上下文）和一系列工程技巧，在语音和音乐任务上实现了比肩甚至超越离散token模型的音质，同时大幅降低了推理延迟。然而，其提出的“连续建模优于离散建模”的核心论点在理论证明上略显薄弱，更多依赖实验结果支撑；此外，对于模型扩展到更长序列或更复杂场景（如长篇音乐生成）的稳定性和能力上限探讨不足。

🔗 **开源详情**

- 代码：论文明确提供了文本到语音模型Pocket TTS的代码仓库：`github.com/kyutai-labs/pocket-tts`。
- 模型权重：Pocket TTS的权重随代码仓库公开。论文未明确提及音乐和语音延续任务的CALM模型或VAE权重是否公开。
- 数据集：论文使用了多个公开数据集（如LibriHeavy， LAION-Disco-12M子集），并详细列出了TTS训练数据的构成。未提供预处理后的数据集。
- Demo：论文提供了语音生成样本的在线演示网站：`iclr-continuous-audio-language-models.github.io`。Pocket TTS的博客也提供了演示。
- 复现材料：论文在附录提供了极为详尽的超参数配置（表14， 表15）、训练硬件、损失函数细节、评估方法（包括贝叶斯Elo分数计算）和消融实验设置，复现指南非常充分。
- 论文中引用的开源项目：WavLM（蒸馏教师）， SentencePiece（分词）， Mistral 7B（用于PPX评估）， Whisper（用于WER评估）， fairseq（用于VERT评估）， CLAP（用于条件生成）。

📌 **核心摘要**

这篇论文旨在解决当前音频语言模型（ALM）因依赖离散化（RVQ）导致的“质量-计算成本”权衡问题。论文提出了连续音频语言模型（CALM），直接在预训练的VAE连续潜在空间中进行自回归建模，从而避免了有损量化。其核心架构由三个部分组成：一个用于捕获长程依赖的噪声注入因果骨干Transformer、一个提供精细局部信息的短上下文Transformer，以及一个基于一致性模型的MLP采样头。与以往基于扩散的连续生成方法（如MAR）相比，CALM引入噪声增强训练以缓解误差累积，并用一致性模型替代扩散模型，将采样步数从数百步减少到1步，极大提升了推理速度。实验在语音延续、文本到语音、音乐延续和文本到音乐四个任务上进行，结果表明CALM在音质和生成速度上均优于强离散基线。例如，在音乐延续任务中，CALM（1步一致性）比32-RVQ RQ-Transformer基线快2.2倍，且FAD指标更优。该研究的实际意义在于为高质量、高效率的音频生成提供了新范式，并催生了可在CPU上实时运行的轻量级TTS模型Pocket TTS。主要局限性在于，虽然验证了方法在中小规模数据集上的有效性，但其在更大规模、更复杂数据上的可扩展性尚未充分证明，且连续空间建模的理论分析有待深入。

---

### 12. [AUHead: Realistic Emotional Talking Head Generation via Action Units Control](/audio-paper-digest-blog/posts/2026-05-04-auhead-realistic-emotional-talking-head)

✅ **7.5/10** | 前25% | #语音合成 | #扩散模型 | #多模态模型 #开源工具

👥 **作者与机构**

- 第一作者：Jiayi Lyu（中国科学院大学）
- 通讯作者：Jian Xue（中国科学院大学）
- 作者列表：
  - Jiayi Lyu（中国科学院大学）
  - Leigang Qu（新加坡国立大学）
  - Wenjing Zhang（中国科学院大学）
  - Hanyu Jiang（中国科学院大学）
  - Kai Liu（浙江大学）
  - Zhenglin Zhou（浙江大学）
  - Xiaobo Xia（新加坡国立大学）
  - Jian Xue（中国科学院大学）
  - Tat-Seng Chua（新加坡国立大学）

#

💡 **毒舌点评**

亮点在于巧妙地将“理解-生成”范式应用于情感说话头生成，将动作单元（AU）作为桥梁，既利用了音频语言模型的高级语义理解能力，又通过扩散模型实现了细粒度的视觉控制。短板是，论文在“音频理解”阶段依赖的AU标注数据（如FEAFA+）并非大规模、多样化的真实对话数据集，这可能限制了该方法在复杂、自然情感场景下的泛化能力；此外，AU序列预测与真实语音节奏的微小时间错位问题在定量指标（Sync分数）上有所体现，尽管定性评估表明影响不大。

#

🔗 **开源详情**

- 代码：论文明确提供了实现代码的GitHub仓库链接：`https://github.com/laura990501/AUHead_ICLR`。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：实验使用了公开数据集MEAD和CREMA，但用于训练第一阶段ALM的精确AU标注数据集（如FEAFA+）的获取方式未在论文中详细说明。
- Demo：论文中未提及在线演示。
- 复现材料：论文详细说明了模型架构、训练目标（损失函数）、评估设置、关键超参数（如学习率、窗口大小、引导尺度）和训练硬件（4×A100），并在附录中提供了更多实施细节（如提示模板、AU定义）。这些信息对复现是充分的。
- 引用的开源项目：论文基于并引用了多个开源工作，包括`Qwen-Audio-Chat`（作为ALM基线）、`HalloV1`和`MEMO`（作为生成阶段的基础模型）。

📌 **核心摘要**

1.  问题：现有的音频驱动说话头生成方法能实现唇形同步，但生成的面部表情往往平淡、缺乏情感深度，因为缺乏细粒度的控制信号。
2.  方法核心：提出两阶段框架AUHead。第一阶段，微调音频语言模型（ALM，如Qwen-Audio-Chat），通过链式思维（CoT）“先识别情感，再生成AU序列”，从语音中解耦出24维的动作单元（AU）序列。第二阶段，以AU序列为条件，使用扩散模型生成视频，其中设计了上下文感知的AU嵌入和AU-视觉跨注意力机制进行交互。
3.  创新之处：首次利用ALM生成AU序列，将可解释的AU作为音频到视觉生成的中间控制空间；提出了将1D AU序列映射到2D面部结构（关键点或网格渲染）的表示方法，以增强空间引导；引入了AU解耦引导策略，在推理时灵活平衡AU控制与生成质量。
4.  主要实验：在MEAD和CREMA两个情感数据集上，AUHead（基于MEMO基线）在视觉质量（PSNR/SSIM/FID）和唇形精度（M-LMD/F-LMD）上均优于多个SOTA方法（如HalloV2, Sonic）。消融研究证实了CoT策略、2D AU表示和引导尺度调整的有效性。用户研究显示，在情感表达、视频质量、唇音同步等所有方面，AUHead均显著优于HalooV2。
5.  实际意义：为生成具有丰富、可控情感的说话头视频提供了新范式，其解耦的AU控制方式在虚拟人、影视制作、人机交互等领域有潜在应用价值。
6.  主要局限：AU预测的准确性高度依赖有限的AU标注数据；生成视频的情感表达可能受参考图像的强烈影响；当前评估主要在固定头部姿态的数据集上进行，对野外复杂场景（如多角度、复杂背景）的泛化能力未充分验证。

#

---

### 13. [From Natural Alignment to Conditional Controllability in Multimodal Dialogue](/audio-paper-digest-blog/posts/2026-05-04-from-natural-alignment-to-conditional)

✅ **7.5/10** | 前25% | #语音合成 | #多模态模型 | #数据集 #基准测试

👥 **作者与机构**

- 第一作者：Zeyu Jin (清华大学计算机系)
- 通讯作者：Xiaoyu Qin (清华大学计算机系), Jia Jia (清华大学计算机系, BNRist)
- 作者列表：Zeyu Jin (清华大学计算机系), Songtao Zhou (清华大学计算机系), Haoyu Wang (清华大学计算机系), Minghao Tian (Rice University), Kaifeng Yun (清华大学深圳国际研究生院), Zhuo Chen (ByteDance), Xiaoyu Qin (清华大学计算机系), Jia Jia (清华大学计算机系, BNRist)

💡 **毒舌点评**

这篇论文最大的贡献是“基建”而非“建筑”本身——它很扎实地构建了一个专注于对话级别表现力的多模态对话数据集（MM-DIA）和一个严格的跨模态一致性评估基准（MM-DIA-BENCH），填补了该领域的关键空白。然而，其“模型验证”部分本质上是将现有模型（如Higgs-Audio）在新数据上微调，而非提出全新的生成架构，这在一定程度上削弱了其作为一篇纯算法论文的冲击力，更像是一篇高质量的数据与基准论文。

🔗 **开源详情**

- 代码：论文承诺代码和处理流程将公开，提供了数据集的GitHub仓库链接（https://github.com/jessyjinzy/MM-Dia），但未提供具体算法实现代码的即时链接。
- 模型权重：未提及是否会发布微调后的模型权重。
- 数据集：MM-DIA和MM-DIA-BENCH已通过GitHub开源，提供标注数据（如转录、情感三元组、描述、关键帧等），但原始影视视频/音频不直接提供。
- Demo：提供了Demo页面链接（https://mmdiaiclr26.github.io/mmdiaiclr26/），包含音频样本展示。
- 复现材料：论文提供了详细的附录（A.1-A.6），涵盖了字幕校准、对话提取、数据集验证、指标解释等复现所需的关键细节和消融实验。
- 论文中引用的开源项目：Higgs-Audio-V2-Base (Boson AI), Dia-1.6B (Nari Labs), Qwen2.5-VL-7B-Instruct (用于VLM), Gemini-2.5-flash/pro (用于标注), Insightface (用于人脸标注)。

📌 **核心摘要**

1.  要解决的问题：现有对话生成研究大多关注单模态（如纯文本或纯语音）的内容真实性，忽略了文本、语音、视觉模态间系统性的交互风格（如情绪、关系、互动模式）建模，导致生成结果缺乏可控性和跨模态一致性。
2.  方法核心：提出一个自动化的数据标注流水线，从影视作品中提取对话并标注细粒度的表现力信息（情感三元组、自由描述），构建了首个大规模专注对话表现力的多模态对话数据集MM-DIA。基于此，形式化定义了多模态对话生成任务，并构建了专门的评估基准MM-DIA-BENCH。
3.  新在哪里：(1) 提出了首个聚焦对话级跨模态表现力（而非仅语义）的大规模数据集MM-DIA（360+小时）。(2) 定义了两种互补的对话表现力控制范式：结构化的“情感三元组”和自由文本的“描述控制”。(3) 建立了首个专门评估跨模态风格一致性的对话基准MM-DIA-BENCH。
4.  主要实验结果：
    *   显式控制（语音合成）：在MM-DIA上微调Higgs-Audio-V2后，WER从31.3大幅降至4.5，cp-WER（说话人切换准确率）从104.8降至33.8，指令遵循能力（Human-MOS）显著提升。
    *   隐式控制（跨模态一致性）：在MM-DIA-BENCH上，现有级联模型（如VLM+Higgs-Audio）在语音生成任务中表现尚可，但Gemini评判的“音色相似度”和“指令遵循”等跨模态一致性指标明显低于显式控制设置，暴露出当前模型在从视觉线索推断并保持一致风格上的不足。
    *   语音驱动视频生成：现有模型（如Wan-2.2 S2V）在Lip-Sync等基础指标上尚可，但在对话级别的关系/互动模式标签召回率（ACC-Interact.仅18.7%）和跨模态语义一致性（Gemini Judge得分低）上表现很差。
5.  实际意义：为构建更具表现力和可控性的多模态对话系统（如电影配音、虚拟人交互）提供了关键的数据基础和评估框架，指明了未来需要攻克的跨模态风格对齐难题。
6.  主要局限性：(1) 数据集主要来源于影视作品，与真实日常对话存在领域差异。(2) 论文验证的“模型”均为现有模型的微调或级联组合，未提出端到端的、针对该任务的新颖生成架构。(3) 跨模态风格一致性的评估高度依赖大型语言模型（Gemini）作为评判，其本身可能存在偏差。

---

### 14. [SpeechJudge: Towards Human-Level Judgment for Speech Naturalness](/audio-paper-digest-blog/posts/2026-05-04-speechjudge-towards-human-level-judgment-for)

✅ **6.5/10** | 前50% | #语音合成 | #强化学习 | #语音大模型 #基准测试

👥 **作者与机构**

- 第一作者：Xueyao Zhang（The Chinese University of Hong Kong, Shenzhen）
- 通讯作者：Zhizheng Wu（The Chinese University of Hong Kong, Shenzhen / Shenzhen Loop Area Institute / City University of Macau / Amphion Technology Co., Ltd）
- 作者列表：Xueyao Zhang（The Chinese University of Hong Kong, Shenzhen）、Chaoren Wang（The Chinese University of Hong Kong, Shenzhen）、Huan Liao（The Chinese University of Hong Kong, Shenzhen）、Ziniu Li（The Chinese University of Hong Kong, Shenzhen）、Yuancheng Wang（The Chinese University of Hong Kong, Shenzhen）、Li Wang（The Chinese University of Hong Kong, Shenzhen）、Dongya Jia（ByteDance Seed）、Yuanzhe Chen（ByteDance Seed）、Xiulin Li（DataBaker Technology）、Zhuo Chen（ByteDance Seed）、Zhizheng Wu（同通讯作者）

💡 **毒舌点评**

这篇论文堪称“RLHF在语音领域的标准工业实践范本”：它没有提出颠覆性的新算法，而是系统性地构建了从数据、评测基准到奖励模型的全套基础设施，解决了“无米之炊”的问题。其最大的亮点在于开源的99K人类偏好数据集和严格设计的评测集，这对社区的价值远超其模型本身；短板则在于，其核心的生成奖励模型（GRM）在理论上缺乏显著的新颖性，更像是将LLM领域成熟的SFT+RL流水线成功移植到了一个新场景。

🔗 **开源详情**

- 代码：提供代码仓库链接 `https://github.com/AmphionTeam/SpeechJudge`。
- 模型权重：论文中未明确提及是否公开SpeechJudge-GRM的模型权重，但基于其开源声明和提供了训练细节，推测权重将随代码库一并发布。
- 数据集：承诺公开SpeechJudge-Data语料库，可通过上述GitHub仓库获取。
- Demo：提供在线音频样本演示 `https://speechjudge.github.io/`。
- 复现材料：提供了详细的训练设置（学习率、批次大小、优化器等）、数据构造流程（附录B）、标注指南（附录C）和硬件要求（未说明具体型号，但描述了设置），并支持使用ms-swift等开源工具进行训练。
- 论文中引用的开源项目：CosyVoice2、F5-TTS、MaskGCT（TTS模型）；Whisper、Paraformer（ASR用于WER计算）；WavLM（说话人相似度计算）；AASIST、w2v-bert-2.0（深伪检测）；Qwen2.5-Omni-7B（基座模型）；ms-swift（RL训练工具）。

📌 **核心摘要**

这篇论文旨在解决语音合成领域因缺乏大规模人类偏好数据而导致的模型与人类感知不对齐问题。其核心方法是提出“SpeechJudge”套件，包含三个部分：1）SpeechJudge-Data，一个包含99K对语音对的大规模人类反馈语料库，涵盖多模型、多风格、多语言合成场景；2）SpeechJudge-Eval，一个专门用于评估语音自然度判断能力的基准测试集；3）SpeechJudge-GRM，一个基于Qwen2.5-Omni-7B微调的生成奖励模型。与已有方法相比，新在：1）首次构建了专注于整体自然度的、大规模、多维度的成对偏好数据集；2）建立了一个标准化的、高难度的自然度判断评测基准；3）提出了结合思维链监督微调和基于人类偏好的强化学习的两阶段训练方法来构建生成奖励模型，相比经典的Bradley-Terry奖励模型（BTRM）能产生可解释的推理过程并支持推理时缩放。主要实验结果如表3所示，在SpeechJudge-Eval上，SpeechJudge-GRM（SFT+RL）达到77.2%的准确率，经过推理时10次采样投票后可达79.4%，显著优于BTRM（72.7%）和当时最强的闭源模型Gemini-2.5-Flash（69.1%）。论文还证明了该奖励模型可用于高质量样本选择（图5）和TTS模型的后训练对齐（图6）。该工作的实际意义在于为语音合成的人类对齐研究提供了关键的资源（数据、基准）和有效的工具（奖励模型），推动了语音质量评估的标准化。主要局限包括：数据集主要反映中文和中英双语听众的偏好；模型在处理极端表达性语音（如极高音高情感语音）和细微权衡（如干净但机械 vs 略带噪声但生动）时仍有提升空间；其思维链能力部分继承了教师模型的偏见。

---

