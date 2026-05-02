---
title: "ICLR 2026 - 语音合成 论文列表"
date: 2026-05-03
draft: false
tags: ["语音合成"]
categories: [iclr-2026]
description: "共 11 篇 ICLR 2026 语音合成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音合成

共 **11** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [VibeVoice: Expressive Podcast Generation with Next-Token Dif](/audio-paper-digest-blog/posts/2026-05-03-vibevoice-expressive-podcast-generation-with-next) | 8.5分 | 前10% |
| 🥈 | [Gogo: Group-wise granularity-ordered codec for stable and ef](/audio-paper-digest-blog/posts/2026-05-03-gogo-group-wise-granularity-ordered-codec-for) | 8.5分 | 前25% |
| 🥉 | [Toward Complex-Valued Neural Networks for Waveform Generatio](/audio-paper-digest-blog/posts/2026-05-03-toward-complex-valued-neural-networks-for) | 8.5分 | 前25% |
| 4. | [From Natural Alignment to Conditional Controllability in Mul](/audio-paper-digest-blog/posts/2026-05-03-from-natural-alignment-to-conditional) | 8.5分 | 前25% |
| 5. | [Hierarchical Semantic-Acoustic Modeling via Semi-Discrete Re](/audio-paper-digest-blog/posts/2026-05-03-hierarchical-semantic-acoustic-modeling-via-semi) | 8.5分 | 前25% |
| 6. | [Continuous Audio Language Models](/audio-paper-digest-blog/posts/2026-05-03-continuous-audio-language-models) | 7.5分 | 前25% |
| 7. | [FlexiCodec: A Dynamic Neural Audio Codec for Low Frame Rates](/audio-paper-digest-blog/posts/2026-05-03-flexicodec-a-dynamic-neural-audio-codec-for-low) | 7.5分 | 前25% |
| 8. | [TTSDS2: Resources and Benchmark for Evaluating Human-Quality](/audio-paper-digest-blog/posts/2026-05-03-ttsds2-resources-and-benchmark-for-evaluating) | 7.5分 | 前25% |
| 9. | [MambaVoiceCloning: Efficient and Expressive Text-to-Speech v](/audio-paper-digest-blog/posts/2026-05-03-mambavoicecloning-efficient-and-expressive-text) | 7.0分 | 前50% |
| 10. | [FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS](/audio-paper-digest-blog/posts/2026-05-03-flexivoice-enabling-flexible-style-control-in) | 7.0分 | 前25% |
| 11. | [SpeechJudge: Towards Human-Level Judgment for Speech Natural](/audio-paper-digest-blog/posts/2026-05-03-speechjudge-towards-human-level-judgment-for) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [VibeVoice: Expressive Podcast Generation with Next-Token Diffusion](/audio-paper-digest-blog/posts/2026-05-03-vibevoice-expressive-podcast-generation-with-next)

🔥 **8.5/10** | 前10% | #语音合成 | #扩散模型 | #自回归模型 #语音大模型

👥 **作者与机构**

- 第一作者：Zhiliang Peng (微软研究院)
- 通讯作者：Furu Wei (微软研究院)
- 作者列表：Zhiliang Peng (微软研究院)、Jianwei Yu (微软研究院)、Wenhui Wang (微软研究院)、Yaoyao Chang (微软研究院)、Yutao Sun (微软研究院)、Li Dong (微软研究院)、Yi Zhu (微软研究院)、Weijiang Xu (微软研究院)、Hangbo Bao (微软研究院)、Zehua Wang (微软研究院)、Shaohan Huang (微软研究院)、Yan Xia (微软研究院)、Furu Wei (微软研究院)

💡 **毒舌点评**

亮点：论文提出的超低帧率（7.5Hz）声学分词器在保持极高保真度（UTMOS 4.18）的同时，实现了激进的压缩，这为处理超长序列奠定了关键基础，是解决长时生成问题的核心技术突破。短板：论文用于训练的约800亿token的内部播客数据集未公开，尽管构建了开源评估集VIBEVOICE-Eval，但这仍然为完全复现和公平比较带来了障碍，尤其是在多说话人对话的自然度和多样性上。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/microsoft/VibeVoice
- 模型权重：提供检查点链接：https://github.com/microsoft/VibeVoice
- 数据集：训练数据为内部私有播客数据集，未公开。评估集VIBEVOICE-Eval已构建并包含108个样本，论文中未明确说明其是否公开下载，但附录G提供了详细描述。
- Demo：论文中未提及在线演示。
- 复现材料：提供了训练超参数（表9）、数据处理流水线细节（附录A）、推理时间分析（表8）等。模型基于Qwen2.5和LatentLM框架。
- 论文中引用的开源项目：Silero VAD、Whisper-large-v3-turbo、Nemo ASR、WeSpeaker (vblinkp模型)。

📌 **核心摘要**

1. 要解决什么问题：现有的TTS系统在生成长时（如播客）、多说话人对话音频时，面临可扩展性差、说话人一致性难以保持、缺乏自然轮换与非语言线索（如呼吸声）等挑战。
2. 方法核心是什么：VibeVoice采用端到端架构，核心是超低帧率（7.5 Hz）连续声学和语义分词器与下一代令牌扩散（Next-Token Diffusion） 框架。模型输入为混合了声学提示特征和文本脚本嵌入的序列，由大语言模型处理上下文，并以轻量级扩散头预测每个语音片段的声学VAE特征，最终由声学解码器恢复波形。
3. 与已有方法相比新在哪里：a) 超低帧率表示：相比传统25-50Hz的帧率，7.5Hz的表示极大提升了长序列处理的效率。b) 解耦混合表示：明确分离声学（保真度）和语义（内容）特征，并在生成过程中融合，平衡了音色保持与内容稳定性。c) 端到端生成框架：直接从文本和语音提示生成长对话，而非拼接短句，实现了自然的说话人轮换和韵律连贯性。
4. 主要实验结果：在VIBEVOICE-Eval数据集和主观评估中，VIBEVOICE-7B显著优于包括Google Gemini 2.5 Pro TTS、ElevenLabs v3在内的多个强基线。
   *   主观评估（表1）：在“真实感”、“丰富度”和“偏好”三个维度，VIBEVOICE-7B平均得分3.76，高于所有对比模型。
   *   客观评估（表2）：在短时（0-12分钟）样本上，VIBEVOICE-7B的整体WER-W为0.66，SIM-O为0.75。对于12-30分钟的长时样本，仍保持低WER-W（1.24）和高SIM-O（0.75），展现了出色的可扩展性。
   *   消融实验：混合表示相比纯声学表示，将整体WER从6.22降至1.84；模型从1.5B扩展到7B，WER从2.11降至0.66，SIM-O从0.59升至0.75。
5. 实际意义是什么：该技术为自动生成高质量、长时、多说话人的播客、有声书、对话记录等复杂音频内容提供了可行的端到端解决方案，有望大幅降低此类内容的制作成本，推动语音交互和内容创作的应用革新。
6. 主要局限性是什么：a) 训练数据为内部私有数据集，未公开。b) 评估主要依赖于自建的VIBEVOICE-Eval数据集（108个样本），其代表性和广泛性有待更大规模验证。c) 论文未深入探讨对多种语言的支持能力（实验以英文为主）。d) 虽然支持最多4个说话人，但对更复杂会议场景的适用性未测试。

---

### 🥈 [Gogo: Group-wise granularity-ordered codec for stable and efficient speech generation](/audio-paper-digest-blog/posts/2026-05-03-gogo-group-wise-granularity-ordered-codec-for)

🔥 **8.5/10** | 前25% | #语音合成 | #流匹配 #自回归模型 | #流匹配 #自回归模型

👥 **作者与机构**

- 第一作者：Weidong Chen（香港中文大学电子工程系）
- 通讯作者：Xixin Wu（香港中文大学电子工程系）
- 作者列表：Weidong Chen（香港中文大学电子工程系）， Helen M. Meng（香港中文大学电子工程系）， Xixin Wu（香港中文大学电子工程系）

💡 **毒舌点评**

该工作大胆地重新设计了语音编解码器与生成模型的交互范式，将“逐帧量化”升级为“分组粒度排序量化”，并配合两阶段生成架构，在实验上取得了令人信服的SOTA结果，展示了清晰的思路和扎实的工程能力。然而，其核心的Gogo编解码器与生成模型GogoSpeech仍是分开训练，未能实现端到端联合优化，这或许是追求性能与灵活性之间的一种妥协，但也限制了系统的整体最优潜力。

🔗 **开源详情**

- 代码：论文未提及具体的代码仓库链接，但提供了演示页面（https://happycolor.github.io/gogo）。
- 模型权重：未提及是否会公开预训练模型权重。
- 数据集：使用了公开的Emilia（英语子集）、LibriTTS和Seed-TTS数据集进行训练和评估。
- Demo：提供了在线演示页面。
- 复现材料：论文在附录C、D中提供了极其详细的模型架构配置、训练超参数、学习率调度、优化器设置等信息，为复现提供了良好的基础。
- 论文中引用的开源项目：提到了依赖Vocos声码器（Siuzdak, 2023）和LLaMA（Grattafiori et al., 2024）作为基础架构。

📌 **核心摘要**

1.  问题：当前语音语言模型（SLM）的核心组件——语音编解码器，面临一个根本矛盾：它需要生成既能捕获高层语义/结构信息（用于自回归建模）又能保留低层声学细节（用于高保真合成）的离散token。传统逐帧量化范式难以兼顾这两点，且对语音信号非均匀的信息分布处理低效。
2.  方法核心：提出Gogo编解码器，将连续语音帧分组，并为每组生成从粗到细（coarse-to-fine）排序的token，粗token编码高层抽象，细token逐步恢复细节。基于此，构建了GogoSpeech两阶段语音生成模型：第一阶段（Stage I）在极低token率（~14 Hz）下生成代表语音骨架的粗token；第二阶段（Stage II）逐步补充细粒度声学细节（~47 Hz）。为进一步提升效率，设计了一个基于分组相对策略优化（GRPO） 训练的token分配器，能根据每个语音组的复杂度自适应分配第二阶段需要生成的细token数量。
3.  创新点：打破了传统逐帧量化的范式，首次提出分组、粒度排序的token化方式；设计了分两阶段（骨架+细节）的生成模型，有效降低了自回归建模难度；引入强化学习（GRPO）训练的动态token分配器，实现了计算资源与信息密度的自适应匹配。
4.  实验结果：在LibriTTS测试集上，Gogo在47 Hz的token率下，UT-MOS（4.19）和DNS-MOS（3.99）甚至超过了原始语音，PESQ（WB: 2.59）优于同等token率下的基线。在Seed-TTS零样本TTS任务上，GogoSpeech（47 Hz）的说话人相似度SIM（0.667）和CMOS（+1.832）均达到最佳；加入token分配器后，平均token率降至36 Hz，性能仅有微小下降，实现了效率与质量的平衡。
5.  实际意义：该工作为语音生成领域提供了一个新的、更高效的编解码与建模范式，有望推动更高质量、更稳定且更高效（低比特率）的语音合成、编辑及对话系统的发展。
6.  局限性：流匹配解码器中的占位符（placeholder）token偶尔会引入伪影；Gogo的token率（47 Hz）虽优于多数基线，但仍高于一些极低比特率编解码器（如25 Hz）；GogoSpeech基于1B参数的LLaMA，其在更大规模语言模型上的可扩展性有待研究。

---

### 🥉 [Toward Complex-Valued Neural Networks for Waveform Generation](/audio-paper-digest-blog/posts/2026-05-03-toward-complex-valued-neural-networks-for)

🔥 **8.5/10** | 前25% | #语音合成 | #复数值网络 | #信号处理 #生成模型

👥 **作者与机构**

- 第一作者：Hyung-Seok Oh（韩国高丽大学人工智能系）
- 通讯作者：Seong-Whan Lee（韩国高丽大学人工智能系）
- 作者列表：Hyung-Seok Oh（韩国高丽大学人工智能系）、Deok-Hyeon Cho（韩国高丽大学人工智能系）、Seung-Bin Kim（韩国高丽大学人工智能系）、Seong-Whan Lee（韩国高丽大学人工智能系）

#

💡 **毒舌点评**

亮点：首次系统性地将复数值神经网络（CVNN）引入iSTFT声码器的生成器和判别器，构建了完整的复数域对抗训练框架，从动机到实现逻辑自洽。短板：在CVNN的非线性激活设计上采用了相对简单的“split”方案（分别对实部虚部应用GELU），这与论文声称的“联合建模复数结构”目标有些许矛盾，是后续可深入挖掘的方向。

#

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：https://hs-oh-prml.github.io/ComVo/。
- 模型权重：论文中未提及公开的预训练模型权重。
- 数据集：使用公开的LibriTTS和MUSDB18-HQ数据集，论文中说明了获取方式。
- Demo：论文中未提及在线演示链接。
- 复现材料：论文详细列出了训练超参数（表20）、评估指标实现来源（表18）、基线模型实现来源（表17），并附录提供了损失函数定义、计算图可视化等补充信息，复现材料非常充分。
- 论文中引用的开源项目：引用了complextorch库用于实现Gauss乘法技巧；使用了多个公开的基线模型代码（HiFi-GAN, BigVGAN, Vocos, iSTFTNet等）和评估工具（UTMOS, auraloss, PESQ, cargan）。

📌 **核心摘要**

1. 要解决什么问题：现有基于iSTFT的神经声码器使用实值网络（RVNN）处理复数频谱，将实部和虚部分离作为独立通道，这限制了模型捕捉两者之间固有代数结构的能力。
2. 方法核心是什么：提出ComVo，一个完全在复数域操作的声码器。生成器和复数多分辨率判别器（cMRD）均使用CVNN层联合处理复数系数。引入相位量化层作为引导相位变换的归纳偏置，并设计块矩阵计算方案优化复数运算效率。
3. 与已有方法相比新在哪里：据作者所知，这是首个在生成器和判别器中均使用原生CVNN的iSTFT声码器。与将实部和虚部作为独立输入或通道的现有方法不同，ComVo将每个频谱系数视为统一的复数实体进行建模。
4. 主要实验结果如何：在LibriTTS和MUSDB18-HQ数据集上的实验表明，ComVo在多项客观指标（UTMOS, MR-STFT, PESQ）上优于包括Vocos在内的强实值基线。消融实验证实了复数域生成器与判别器的组合（GCDC）带来最佳性能。相位量化在Nq=128时取得最佳听感与重建精度平衡。块矩阵方案将训练时间缩短了25%。关键数据如下表：
    | 模型 | UTMOS ↑ | MR-STFT ↓ | PESQ ↑ |
    | :--- | :--- | :--- | :--- |
    | Vocos (实值基线) | 3.6025 | 0.8856 | 3.6266 |
    | ComVo | 3.6901 | 0.8439 | 3.8239 |
    (表2，LibriTTS测试集结果)
5. 实际意义是什么：证明了在频谱生成任务中，使用原生复数值网络比将其拆分为实值通道更能提升合成质量，为音频生成领域的模型设计提供了新的思路。
6. 主要局限性是什么：1）CVNN的非线性设计（split GELU）较为简单，未充分利用复数域特性；2）复数参数导致模型内存占用增加；3）在分布式训练中存在未完全优化的性能问题。

#

---

### 4. [From Natural Alignment to Conditional Controllability in Multimodal Dialogue](/audio-paper-digest-blog/posts/2026-05-03-from-natural-alignment-to-conditional)

🔥 **8.5/10** | 前25% | #语音合成 | #数据集 | #多模态模型 #基准测试

👥 **作者与机构**

- 第一作者：Zeyu Jin (清华大学计算机科学与技术系)
- 通讯作者：Xiaoyu Qin, Jia Jia (清华大学计算机科学与技术系)
- 作者列表：Zeyu Jin (清华大学计算机科学与技术系), Songtao Zhou (清华大学计算机科学与技术系), Haoyu Wang (清华大学计算机科学与技术系), Minghao Tian (Rice University), Kaifeng Yun (清华大学深圳国际研究生院), Zhuo Chen (字节跳动), Xiaoyu Qin (清华大学计算机科学与技术系), Jia Jia (清华大学计算机科学与技术系, BNRist)

💡 **毒舌点评**

本文的核心贡献在于构建了首个大规模、细粒度标注的多模态对话表达力数据集 MM-DIA，并系统地定义了可控多模态对话生成的三个子任务与评估基准，填补了该领域基础设施的关键空白。但其主要短板在于所提出的端到端生成模型尚缺，核心实验多为验证数据集有效性或基线性能，并未提出一个具有开创性的新生成架构来彻底解决跨模态风格一致性的挑战。

🔗 **开源详情**

- 代码：论文中提供了GitHub仓库链接 `https://github.com/jessyjinzy/MM-Dia`，并说明将在论文接受后公开实验代码和数据提取管道。
- 模型权重：论文未提及公开任何微调后的模型权重。
- 数据集：MM-DIA和MM-DIA-BENCH数据集将在论文接受后公开（提供标注和时间戳，不含原始视频音频）。获取方式为：研究者需自行获取对应的影视内容并与提供的时间戳对齐。
- Demo：论文提供了演示页面 `https://mmdiaiclr26.github.io/mmdiaiclr26/`，包含音频样本。
- 复现材料：论文在附录（A.1-A.6）中提供了详细的实现细节、消融实验、指标解释和补充实验结果，复现信息较为充分。
- 论文中引用的开源项目：Higgs-Audio-V2 (Boson AI), Dia (Nari Labs), Qwen2.5-VL-7B-Instruct, Gemini-2.5-pro/flash, InsightFace, 以及多个作为对比基线的生成模型（FLOAT, MultiTalk, Sonic, HunyuanVideo, Wan-2.2等）。

📌 **核心摘要**

这篇论文针对当前多模态对话生成（MDG）中可控性和表达力不足的问题，提出了一套完整的解决方案。首先，作者构建了一个从电影电视剧中自动提取并细粒度标注的多模态对话数据集 MM-DIA（360+小时，54,700段对话），其标注创新性地提出了“情感三元组”和“自由描述”两种范式来量化对话的交互风格。其次，论文正式定义了MDG任务，并划分为三个子任务：基于显式风格描述的对话语音合成、基于视觉线索的隐式条件语音合成以及语音驱动的对话视频生成。为评估后两项隐式控制任务，还构建了高表达力的双人对话基准 MM-DIA-BENCH。实验表明，MM-DIA能显著提升现有语音合成模型的风格可控性（例如Higgs-Audio-V2-SFT的WER从31.3降至4.5），但当前模型在MM-DIA-BENCH上的表现揭示了其在维持跨模态风格一致性（如音视频情感对齐）方面仍存在明显不足。该工作为可控多模态对话生成提供了重要的数据集、任务定义和评估框架。

---

### 5. [Hierarchical Semantic-Acoustic Modeling via Semi-Discrete Residual Representations for Expressive End-to-End Speech Synthesis](/audio-paper-digest-blog/posts/2026-05-03-hierarchical-semantic-acoustic-modeling-via-semi)

🔥 **8.5/10** | 前25% | #语音合成 | #自回归模型 | #扩散模型 #端到端

👥 **作者与机构**

- 第一作者：Yixuan Zhou（清华大学深圳国际研究生院）
- 通讯作者：Zhiyong Wu（清华大学深圳国际研究生院）
- 作者列表：Yixuan Zhou（清华大学深圳国际研究生院）、Guoyang Zeng（ModelBest Inc.）、Xin Liu（ModelBest Inc.）、Xiang Li（清华大学深圳国际研究生院）、Renjie Yu（清华大学深圳国际研究生院）、Ziyang Wang（ModelBest Inc.）、Runchuan Ye（清华大学深圳国际研究生院）、Weiyue Sun（ModelBest Inc.）、Jiancheng Gui（ModelBest Inc.）、Kehan Li（清华大学深圳国际研究生院）、Zhiyong Wu（清华大学深圳国际研究生院）、Zhiyuan Liu（清华大学计算机科学与技术系）

💡 **毒舌点评**

论文提出的“半离散残差”框架巧妙地在一个端到端模型内平衡了稳定性与表现力，消融研究扎实，性能在开源模型中登顶。但其成功高度依赖于超过百万小时的内部私有数据和预训练的LLM骨干，这使得独立复现论文结果几乎不可能，也削弱了结论的普适性——在通用数据集上的消融实验能否支撑如此大规模的最终结论，需要打个问号。

🔗 **开源详情**

- 代码：论文中承诺将开源代码以支持未来研究（“We will release code and models to support future research.”），并提供了推理代码的压缩包（codes.zip），但未在论文正文中提供具体的代码仓库URL链接。
- 模型权重：未明确提及公开的预训练模型权重链接。论文描述了训练好的VoxCPM模型，但权重获取方式未说明。
- 数据集：使用了内部收集的大规模双语数据集（未公开），以及公开的Emilia数据集（可获取）。
- Demo：提供了在线演示页面：https://voxcpm.github.io/VoxCPM-demopage/。
- 复现材料：附录（Appendix D）提供了极其详细的模型架构配置、训练配置（学习率、batch size、阶段策略）和评估指标细节。
- 论文中引用的开源项目：引用了Emilia数据集、MiniCPM-4模型（用于TSLM初始化）、Megatron框架（用于训练）、以及多个用于对比的基线模型（如CosyVoice, F5-TTS, MaskGCT等）的官方代码库。

📌 **核心摘要**

1.  要解决什么问题：当前语音合成存在根本矛盾：离散token模型（如基于codec LLM）稳定但丢失细节（“量化天花板”），连续表示模型（如自回归生成mel/潜变量）细节丰富但因任务纠缠（语义与声学混合建模）导致长序列不稳定、易积累误差。
2.  方法核心是什么：提出VoxCPM框架，通过层级语义-声学建模与半离散残差表示来解决上述矛盾。核心是一个可微的有限标量量化（FSQ）瓶颈，它将网络隐状态自然地分为两部分：TSLM生成经FSQ量化的稳定语义-韵律骨架，RALM则建模量化残差以恢复精细的声学细节。最终结合两者，共同指导一个局部扩散Transformer（LocDiT）生成高保真语音潜变量。
3.  与已有方法相比新在哪里：1）架构创新：提出了一个统一的、端到端可训练的层级架构，在单一框架内实现了显式的语义与声学建模分离，避免了多阶段流水线的碎片化。2）表征创新：引入“半离散残差表示”作为内部正则化瓶颈，而非外部预测目标，同时解决了离散模型的信息瓶颈和连续模型的任务纠缠问题。3）训练创新：整个层级模型在单一扩散目标下端到端训练，无需依赖外部离散语音分词器。
4.  主要实验结果如何：模型在多个开源基线上达到了SOTA。
    *   在SEED-TTS-EVAL上，VoxCPM（0.5B参数）英语WER为1.85%，中文CER为0.93%，说话人相似度（SIM）分别为72.9%和77.2%。
    *   在CV3-EVAL上，中文CER为3.40%，英语WER为4.04%。
    *   消融实验显示，移除FSQ瓶颈（纯连续模型）会导致硬案例的CER飙升至24.92%；移除RALM（无残差建模）也导致性能显著下降，证实了核心设计的有效性。
5.  实际意义是什么：提供了一个高质量、开源、可流式输出的端到端语音合成方案，有助于推动自然、富有表现力的人机语音交互技术的发展。
6.  主要局限性是什么：1）数据依赖：性能的最佳表现依赖于超过100万小时的内部私有双语数据，这极大地限制了外部研究者复现其最优结果的能力。2）模型依赖：TSLM骨干初始化自预训练的MiniCPM-4 LLM，其有效性部分归功于此强大的先验知识。3）部分评估局限：在CV3-EVAL上的DNSMOS分数相对较低，论文解释是因为提示音频本身质量不高，模型忠实克隆了其音质。

---

### 6. [Continuous Audio Language Models](/audio-paper-digest-blog/posts/2026-05-03-continuous-audio-language-models)

✅ **7.5/10** | 前25% | #语音合成 | #自回归模型 | #音乐生成 #一致性模型

👥 **作者与机构**

- 第一作者：Simon Rouard (Kyutai， UMR STMS IRCAM-CNRS Sorbonne Univ.)
- 通讯作者：Alexandre Défossez (Kyutai)
- 作者列表：Simon Rouard (Kyutai， UMR STMS IRCAM-CNRS Sorbonne Univ.)， Manu Orsini (Kyutai)， Axel Roebel (UMR STMS IRCAM-CNRS Sorbonne Univ.)， Neil Zeghidour (Kyutai)， Alexandre Défossez (Kyutai)

💡 **毒舌点评**

这篇论文的亮点在于它成功地为音频生成领域构建了一个强大且高效的“连续”替代方案，用一个统一的框架同时挑战了语音和音乐两个领域的离散token霸权，并给出了令人信服的速度与质量提升数据。然而，其核心贡献“绕过量化”也埋下了一个根本性问题：论文中未深入探讨的VAE重建损失，可能在复杂、长时序或高保真场景下成为新的瓶颈，连续潜变量的语义可控性也尚未得到充分验证。

🔗 **开源详情**

- 代码：提供了Pocket TTS的代码仓库链接：`github.com/kyutai-labs/pocket-tts`。论文中未提及其他核心CALM模型（如音乐续写模型）的完整训练代码。
- 模型权重：明确发布了Pocket TTS的模型权重（100M参数），可通过上述仓库获取。论文未提及其他规模CALM模型（如1.35B音乐模型）的权重发布计划。
- 数据集：论文使用的部分语音数据集（如AMI, LibriHeavy等）是公开的，但音乐数据集（LAION-Disco-12M的子集）及具体使用方法未公开。
- Demo：论文提供了样本在线演示页面：`iclr-continuous-audio-language-models.github.io`。
- 复现材料：论文在附录中提供了非常详细的超参数表（表14，15），包括VAE、Backbone、采样头等的维度、层数、学习率、批量大小、训练步数等关键信息，复现友好度较高。
- 论文中引用的开源项目：引用了Helium-1 (Kyutai, 2025) 作为语音续写模型的初始化基座，WavLM用于���义蒸馏，SentencePiece用于文本分词，fairseq用于BERT分数计算等。

📌 **核心摘要**

1.  解决的问题：现有音频语言模型（ALM）依赖离散化编码（如RVQ），存在信息损失，且为了提升质量必须增加token数量，导致生成质量与计算成本之间的固有矛盾。
2.  方法核心：提出连续音频语言模型（CALM）。该模型在预训练的VAE连续潜空间上进行自回归预测。其架构包含三个关键组件：一个注入噪声的因果Backbone Transformer用于建模长期依赖；一个轻量级的短上下文Transformer提供局部细节；以及一个基于一致性模型的MLP采样头，实现单步或少步高效生成。
3.  与已有方法的相比新在哪里：
    *   建模对象：从离散token序列转变为连续潜向量序列，避免了量化损失。
    *   采样头：用高效的“一致性模型”替代了离散模型中的RQ-Transformer或扩散模型中的多步去噪网络，将采样头的速度提升了最高19.3倍（如表4所示）。
    *   架构设计：创新性地结合了“噪声注入的长期上下文”与“干净的短期上下文”，有效缓解了自回归生成中的误差累积，并保持了细节。
4.  主要实验结果：
    *   语音续写：CALM（1步一致性）在声学质量、有意义性等人工评估指标上均优于基于8-RVQ的RQ-Transformer基线，采样头速度快12.3倍（表2）。
    *   文本到语音（TTS）：CALM（使用1步LSD）在LibriSpeech test-clean集上，WER（1.81）优于F5-TTS（2.21）和DSM（1.84），声学质量MUSHRA评分（61.1）与参考（61.8）相当（表3）。通过蒸馏得到的Pocket TTS（100M参数）可在笔记本电脑CPU上实时运行。
    *   音乐续写：CALM（1步一致性）相比32-RVQ基线，FAD分数从1.06降至0.83，整体速度快2.2倍，采样头速度快19.3倍（表4）。
    *   消融实验（表6）：证明了短上下文Transformer、噪声注入和头批乘数对于模型质量的重要性。
5.  实际意义：CALM为高效、高质量的音频生成提供了一个新的范式。特别是其衍生的Pocket TTS，为在资源受限的边缘设备上部署高质量语音合成提供了切实可行的方案。
6.  主要局限性：VAE本身不可避免地引入重建损失，论文中未深入分析其对生成上限的影响。连续表示在语义可控性（如精确的内容编辑）方面的潜力与挑战也未充分探讨。

---

### 7. [FlexiCodec: A Dynamic Neural Audio Codec for Low Frame Rates](/audio-paper-digest-blog/posts/2026-05-03-flexicodec-a-dynamic-neural-audio-codec-for-low)

✅ **7.5/10** | 前25% | #语音合成 | #预训练 | #自回归模型 #低帧率

👥 **作者与机构**

- 第一作者：Jiaqi Li（香港中文大学（深圳））
- 通讯作者：论文中未明确标注通讯作者。
- 作者列表：Jiaqi Li（香港中文大学（深圳））、Yao Qian（微软）、Yuxuan Hu（微软）、Leying Zhang（上海交通大学）、Xiaofei Wang（微软）、Heng Lu（微软）、Manthan Thakker（微软）、Jinyu Li（微软）、Sheng Zhao（微软）、Zhizheng Wu（香港中文大学（深圳）、深圳湾区实验室、澳门城市大学、Amphion Technology Co., Ltd.）

#

💡 **毒舌点评**

亮点：创新性地将“动态帧率”和“ASR特征引导”这两个在图像/其他领域已有苗头的概念，扎实地移植到了音频编解码的低帧率挑战中，并在下游TTS任务中实现了显著的加速效果，工程价值明确。
短板：其“动态”本质仍是基于固定阈值的规则合并，而非更优雅的端到端学习，且论文对“为何ASR特征比SSL特征更适合引导合并”这一关键问题的分析，仍停留在“相邻帧相似度低”的现象描述上，机制解释略显单薄。

#

🔗 **开源详情**

- 代码：提供了GitHub仓库链接：https://github.com/amphionteam/flexicodec。
- 模型权重：论文中提到“Code is available at: https://github.com/amphionteam/flexicodec”，通常意味着提供模型权重，但论文中未明确列出权重下载链接或单独声明。
- 数据集：使用公开数据集Librilight-Large， LibriSpeech， Libriheavy， Emilia， TIMIT等。
- Demo：提供了在线演示网站：https://flexicodec.github.io。
- 复现材料：在论文正文和附录中提供了非常详细的训练配置（优化器、学习率、Batch Size、训练步数）、模型参数量、关键超参数以及评估设置。
- 论文中引用的开源项目：SenseVoice-Small (ASR模型)， Vocos (Vocoder)， Amphion (工具包)， Whisper (用于评估)， HuBERT (用于ASR探测)。

📌 **核心摘要**

1. 问题：现有神经音频编解码器在降低帧率（如<12.5Hz）时，会严重丢失语音的语义信息，这限制了它们在语音语言模型（尤其是TTS）中的应用效率。
2. 方法核心：提出了FlexiCodec，一种基于动态帧率的低帧率神经音频编解码器。其核心是ASR特征辅助的双流编码架构和动态帧合并模块。模型首先用预训练ASR模型和编解码器编码器分别提取语义特征和声学特征，然后基于ASR特征帧间的余弦相似度，自适应地将语义相似的帧合并，从而在信息稀疏区域（如静音、长元音）使用更少的帧，最终实现可控制的平均帧率（3Hz-12.5Hz）。
3. 与已知方法的新颖性：相比固定帧率的编解码器（如DAC， SpeechTokenizer），FlexiCodec引入了动态帧率分配机制；相比初步的动态率工作（如CodecSlime），FlexiCodec更专注于极低帧率（<10Hz）场景，并利用ASR特征（而非SSL特征）来指导合并过程，同时引入了Transformer模块来优化合并与反合并的表征。
4. 主要实验结果：
   - 在6.25Hz平均帧率下，FlexiCodec的RVQ-1重建WER为4.15%，远优于重训基线DualCodec（31.5%）和DAC（88.2%），接近真实语音WER（2.1%）。
   - 在多种比特率设置下，其音频重建质量（PESQ， UTMOS）与主流编解码器相比具有竞争力。
   - 在TTS下游任务中，FlexiCodec-TTS（使用FlexiCodec的TTS系统）在6.25Hz AR帧率下实现了WER 3.2%，相比CosyVoice（50Hz AR）获得约7.3倍的AR阶段加速。
   - 关键实验数据汇总：

| 对比项 (平均帧率/模型) | RVQ1 WER ↓ | RVQ1:8 PESQ ↑ | RVQ1:8 UTMOS ↑ | RVQ1:8 MCD ↓ |
| :--- | :--- | :--- | :--- | :--- |
| FlexiCodec @6.25Hz | 4.15 | 2.76 | 4.18 | 3.42 |
| DualCodec @6.25Hz (重训) | 31.5 | 2.76 | 4.08 | 3.71 |
| DAC @6.25Hz (重训) | 88.2 | 2.74 | 4.08 | 3.71 |
| WavTokenizer-75Hz | 4.57 | 2.86 | 3.98 | 3.51 |
| FlexiCodec-TTS (6.25Hz AR, 50Hz NAR) | - (TTS WER: 3.2) | - | NMOS: 3.32 | QMOS: 3.40 |

5. 实际意义：为构建更高效的语音语言模型（尤其是TTS）提供了关键的低帧率编解码方案。通过大幅缩短输入序列长度，可显著降低基于Transformer的语音模型的训练和推理成本，使其更适合在资源受限的边缘设备上部署。
6. 主要局限性：动态帧合并策略依赖于预训练ASR特征和固定阈值，其自适应能力有限；论文中展示的多语言评估显示，未经微调的FlexiCodec在非英语语言上语义保留能力急剧下降，表明其跨语言泛化能力存在瓶颈。

---

### 8. [TTSDS2: Resources and Benchmark for Evaluating Human-Quality Text to Speech Systems](/audio-paper-digest-blog/posts/2026-05-03-ttsds2-resources-and-benchmark-for-evaluating)

✅ **7.5/10** | 前25% | #语音合成 | #分布度量 | #模型评估 #自监督学习

👥 **作者与机构**

- 第一作者：Christoph Minixhofer（爱丁堡大学语音技术研究中心）
- 通讯作者：论文中未明确标注通讯作者。
- 作者列表：Christoph Minixhofer（爱丁堡大学语音技术研究中心）、Ondrej Klejch（爱丁堡大学语音技术研究中心）、Peter Bell（爱丁堡大学语音技术研究中心）

💡 **毒舌点评**

亮点是首次系统性地验证并提出了一个在嘈杂、野外、儿童语音等多领域下都能与人类感知强相关的客观评估指标，同时发布了迄今最大规模的多系统、多语言主观评价数据集，为社区提供了急需的“标尺”。短板在于该指标依赖CPU密集的Wasserstein距离计算，成本较高，且像所有客观指标一样，它无法捕捉“合成语音是否忠实于输入文本”这类关键失败案例，仍需人工介入。

🔗 **开源详情**

- 代码：论文提供了自动化基准测试流水线的代码仓库链接 (`github.com/ttsds/pipeline`)。但未明确提及TTSDS2指标本身的核心计算代码是否开源。
- 模型权重：未提及开源。论文使用的多个预训练模型（如HuBERT, Whisper, WeSpeaker等）本��是公开的，但论文未提供训练或微调后的特定权重。
- 数据集：
  - 听测数据集：已公开，可通过Hugging Face访问 (`hf.co/datasets/ttsds/listening_test`)，包含11,282条带评分的语音数据。
  - 多语言评估数据集：通过流水线可定期自动重建，但未提供固定的下载包。
  - 噪声参考数据集：已公开 (`hf.co/datasets/ttsds/noise-reference`)。
- Demo：论文中未提及在线演示。但基准网站 (`ttsdsbenchmark.com`) 可能包含结果展示。
- 复现材料：提供了详尽的附录，包括听测问卷示例、伦理审批信息、各系统在不同领域的详细MOS/CMOS/SMOS得分（表7），以及各因子与MOS的相关性分析（表8）。
- 论文中引用的开源项目：主要依赖的开源工具有：
  - 自监督语音模型：HuBERT, WavLM, wav2vec 2.0, XLSR-53, mHuBERT-147。
  - 说话人嵌入：WeSpeaker, d-Vector。
  - ASR/语音处理：Whisper, Allosaurus。
  - 特征提取：WORLD vocoder, Pyannote (语音分离), Demucs (音乐分离)。
  - 评估工具：VERSA评估工具包。
  - 其他：FastText (语言识别), XNLI (文本过滤)。

📌 **核心摘要**

1. 解决的问题：现有TTS评估方法（主观MOS不可比，客观指标在高质量系统上失效）已成为领域瓶颈，亟需一个稳健、可扩展、能跨领域跨语言工作的客观评估基准。
2. 方法核心：提出TTSDS2，一个分布式的、因子化的评估框架。它提取语音在通用性、说话人、韵律、可懂度四个维度的特征分布，通过计算这些分布与真实参考分布的2-Wasserstein距离（与噪声分布对比）来评分，得分越高表示越接近真人。
3. 创新之处：
   - 分布比较范式：从比较单个样本转向比较整个数据集的分布，更符合TTS的一对多生成本质。
   - 因子化与鲁棒性：将评估分解为多个感知因子，并更新了特征集以提升在不同领域（干净/嘈杂/野外/儿童语音）的稳定性。
   - 噪声对比基准：引入多种噪声分布作为对比基线，使分数具有明确的0-100归一化含义。
   - 自动化多语言基准：提供了可定期重建的、覆盖14种语言的测试数据集与评估流水线。
4. 主要实验结果：
   - 在16个客观指标中，TTSDS2是唯一在所有4个领域（干净、嘈杂、野外、儿童）与MOS、CMOS、SMOS均保持Spearman相关系数ρ > 0.5的指标，平均相关性为0.67。
   - 论文评估了20个开源TTS系统，并发布了超过11,000个人工评分。详细结果见下表。

| 指标 | 领域 | 与MOS的ρ | 与CMOS的ρ | 与SMOS的ρ |
| :--- | :--- | :--- | :--- | :--- |
| TTSDS2 (本文) | Clean | 0.75 | 0.69 | 0.73 |
| | Noisy | 0.59 | 0.54 | 0.71 |
| | Wild | 0.75 | 0.71 | 0.75 |
| | Kids | 0.61 | 0.50 | 0.70 |
| SQUIM MOS | Clean | 0.68 | 0.46 | 0.37 |
| X-Vector相似度 | Wild | 0.82 | 0.82 | 0.62 |

![TTSDS2与代表性指标在MOS上的相关性对比](icassp-img://uGai5lYHlV/1.png)
图2展示了TTSDS2（上图左）在跨领域时保持连续稳定的预测能力，而SQUIM MOS和X-Vector相似度（中、右图）则表现出一定的聚类行为，暗示可能过拟合于特定系统。

5. 实际意义：为TTS研究社区提供了一个可靠的、自动化的“赛跑”工具和客观标尺，可定期更新以避免数据泄露，指导系统开发与比较。
6. 主要局限性：计算开销较高（每次评估约需9.4分钟CPU时间）；无法检测转录不忠实等特定故障模式；其最高相关性约为0.8，表明主观评分中存在客观指标难以捕捉的固有噪声或成分。

---

### 9. [MambaVoiceCloning: Efficient and Expressive Text-to-Speech via State-Space Modeling and Diffusion Control](/audio-paper-digest-blog/posts/2026-05-03-mambavoicecloning-efficient-and-expressive-text)

✅ **7.0/10** | 前50% | #语音合成 | #Mamba | #生成模型 #语音克隆

👥 **作者与机构**

- 第一作者：Sahil Kumar (耶希瓦大学数学系博士项目)
- 通讯作者：Youshan Zhang (滁州大学人工智能学院)
- 作者列表：Sahil Kumar (耶希瓦大学数学系)、Namrataben Patel (耶希瓦大学数学系)、Honggang Wang (耶希瓦大学计算机科学与工程系)、Youshan Zhang (滁州大学人工智能学院)

💡 **毒舌点评**

亮点：设计了一套严谨的“控制变量”实验方案，所有基线和本模型共享完全相同的解码器、声码器和训练流程，确保性能差异仅来自条件路径架构本身，这种“实验室级”的公平对比在TTS论文中并不常见。短板：论文声称“效率”和“表现力”兼得，但结果显示效率提升（吞吐量1.6x）主要体现在编码器端，而整体端到端延迟（RTF）改善微乎其微（约0.0005），因为扩散解码器依然是主要瓶颈，这使得“高效”的论点有些虚浮。

🔗 **开源详情**

- 代码：提供了代码仓库链接：https://github.com/sahilkumar15/MVC。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：使用公开数据集LJSpeech和LibriTTS，并在论文中提供了数据集的引用和获取方式。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的训练算法（Algorithm 1）、优化配置、超参数设置（如SSM配置、学习率、批大小等），以及所有基线模型的统一复现方案（Appendix B.6, C.2, C.4），复现信息非常充分。
- 论文中引用的开源项目：引用了phonemizer（文本音素化）、StyleTTS2（扩散解码器/声码器架构）、HiFi-GAN/iSTFTNet（声码器）、ESPnet（WER评估）等开源工具或模型。
- 论文中未提及开源计划：论文未提及模型权重、演示等后续开源计划。

📌 **核心摘要**

这篇论文旨在解决基于扩散的语音合成（TTS）系统中，条件路径（文本、节奏、韵律建模）对注意力机制（Attention）的依赖问题，以实现更高效、稳定的推理，特别是长音频流式合成。
方法核心：提出MVC模型，完全用Mamba（一种选择性状态空间模型SSM）替代推理时的所有注意力层和循环层。具体设计了三个模块：1）门控双向Mamba文本编码器；2）用轻量级注意力教师（训练后丢弃）监督的时序双向Mamba进行韵律对齐；3）带自适应层归一化（AdaLN）调制的表达式Mamba进行韵律建模。通过固定的StyleTTS2扩散解码器和声码器合成波形。
与已有方法相比新在哪里：这是首个（作者声称）在扩散TTS中实现全SSM-only推理条件路径的系统，移除了推理时所有注意力模块。相比之前仍保留注意力或循环层的Mamba-TTS混合架构，MVC提供了完整的线性时间复杂度、有界激活内存的条件生成方案，并在双向Mamba融合机制上引入了门控和AdaLN。
主要实验结果：在LJSpeech和LibriTTS上训练，在VCTK（零样本）、CSS10（跨语言）和Gutenberg（长文本）上评估。与严格控制协议的基线（StyleTTS2, VITS, JETS及Mamba混合模型）相比：
*   主观质量：在未见说话人上MOS自然度4.22 vs StyleTTS2的4.15 (p<0.01)，相似度4.07 vs 4.03。
*   客观指标：在LJSpeech上，MVC获得最佳MCD (4.91)、最高PESQ (3.85) 和最低RTF (0.0169)；F0 RMSE和WER与StyleTTS2持平。
*   编码器效率：编码器参数21M，吞吐量提升1.6倍，峰值内存降低28%。
*   长文本/流式：在2-6分钟长文本上MOS下降更小，0.5-2秒前瞻可保持非流式质量。
实际意义：证明了SSM-only条件路径在TTS中的可行性和优势（更稳定的长文本生成、更低内存占用），为构建高效、低延迟、适合流式部署的TTS系统提供了新的架构选择。
主要局限性：1）扩散解码器仍是推理延迟的主要来源（54.2%），限制了端到端效率的显著提升；2）AdaLN提供的是全局风格控制，缺乏细粒度情感表达；3）仅在英语数据上训练，跨语言能力有限。

---

### 10. [FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS with Natural Language Instructions](/audio-paper-digest-blog/posts/2026-05-03-flexivoice-enabling-flexible-style-control-in)

✅ **7.0/10** | 前25% | #语音合成 | #强化学习 | #语音大模型 #零样本

👥 **作者与机构**

- 第一作者：Dekun Chen（香港中文大学，深圳）
- 通讯作者：未说明（论文署名列表未明确标注）
- 作者列表：Dekun Chen（香港中文大学，深圳），Xueyao Zhang（香港中文大学，深圳），Yuancheng Wang（香港中文大学，深圳），Kenan Dai（华为技术有限公司），Li Ma（华为技术有限公司），Zhizheng Wu（香港中文大学，深圳 / 深圳湾区研究院 / 澳门城市大学 / Amphion Technology Co., Ltd.）

💡 **毒舌点评**

亮点：论文提出的“渐进式后训练”（PPT）框架设计精巧，将复杂的多模态解耦问题分解为“对齐-解耦-泛化”三步走的课程学习，消融实验清晰地验证了其设计顺序的必要性，方法论上很有说服力。
短板：核心创新点高度依赖特定的“解耦”训练阶段（S2）和外部奖励模型（如语音情感识别、说话人验证、ALM），这可能导致系统的复杂性和泛化能力受限于这些辅助模型的性能天花板，且未深入探讨奖励信号噪声或冲突时的鲁棒性。

🔗 **开源详情**

- 代码：论文中提到“We will release the instruction–speech dataset, model checkpoints, and all training and inference code”，表明有开源计划。
- 模型权重：同上，计划发布模型检查点。
- 数据集：计划发布FlexiVoice-Instruct数据集。
- Demo：提供了在线音频样本演示链接：https://flexi-voice.github.io/.
- 复现材料：附录A.10提供了详细的硬件配置（8×A800）、训练时长（3.5天）、各阶段（S1/S2/S3）的具体超参数（学习率、epoch数、组大小、β值）。
- 论文中引用的开源项目：
    - 基础模型：Phi-3.5-mini-instruct
    - 语音分词器：DualCodec
    - 声码器：Vocos
    - 语音理解/奖励模型：Emotion2vec-Large (情感识别), CAM++ (说话人验证), Kimi-Audio-7B-Instruct (ALM奖励), Whisper-Large-V3 (英文ASR), Paraformer-zh (中文ASR)。
    - 数据：Emilia, ParaSpeechCaps, NVSpeech, ESD, NCSSD, KeSpeech 等。
- 论文中未提及开源计划：对于训练中使用的具体数据构造脚本、LLM标注时的详细提示词模板（附录A.3仅给出示例）的完整版本未明确说明是否会完整发布。

📌 **核心摘要**

1.  问题：现有的指令式零样本TTS系统在同时接收自然语言风格指令和参考语音（控制音色）时，面临“风格-音色-内容冲突”，模型容易忽略指令，或从参考语音中泄漏风格，无法实现灵活的解耦控制。
2.  方法：提出FlexiVoice系统，其核心是基于预训练大语言模型（LLM），并引入创新的“渐进式后训练”（PPT）框架。PPT包含三个阶段：S1（多模态DPO）对齐指令和参考；S2（解耦GRPO）通过构造冲突场景，用多目标强化学习强制分离风格、音色和内容；S3（指令GRPO）使用音频语言模型奖励，泛化到复杂指令。
3.  新意：相较于简单地将指令和参考作为条件输入，PPT框架主动地、分阶段地解决了多模态输入带来的纠缠问题。同时，构建了大规模、高质量的指令语音数据集FlexiVoice-Instruct（4316小时），为预训练提供了基础。
4.  结果：实验表明，FlexiVoice在解耦能力上大幅超越基线。例如，在英文“文本+参考”（TR）困难任务（指令“Happy” vs. 参考“Sad”）上，FlexiVoice的指令遵循准确率（ACC-I）为78.2%，而最强的基线VoxInstruct仅为49.7%。在复杂指令跟随评测集（InstructTTSEval）上，FlexiVoice平均准确率（英文79.3%，中文70.8%）接近商用闭源模型（如Gemini-pro）。
5.  意义：为需要同时灵活控制音色和说话风格的TTS应用场景（如个性化语音合成、有声书制作）提供了一个有效且可复现的解决方案。
6.  局限：S3阶段依赖的ALM奖励模型可能不稳定；在复杂指令任务上，中文表现弱于英文；多模态冲突场景下的生成稳定性仍可进一步提升。

---

### 11. [SpeechJudge: Towards Human-Level Judgment for Speech Naturalness](/audio-paper-digest-blog/posts/2026-05-03-speechjudge-towards-human-level-judgment-for)

✅ **7.0/10** | 前25% | #语音合成 | #强化学习 | #语音大模型 #数据集

👥 **作者与机构**

- 第一作者：Xueyao Zhang (香港中文大学（深圳）)
- 通讯作者：Zhizheng Wu (香港中文大学（深圳）、深圳湾区研究院、澳门城市大学、Amphion Technology Co., Ltd)
- 作者列表：Xueyao Zhang（香港中文大学（深圳））、Chaoren Wang（香港中文大学（深圳））、Huan Liao（香港中文大学（深圳））、Ziniu Li（香港中文大学（深圳））、Yuancheng Wang（香港中文大学（深圳））、Li Wang（香港中文大学（深圳））、Dongya Jia（字节跳动 Seed）、Yuanzhe Chen（字节跳动 Seed）、Xiulin Li（DataBaker Technology）、Zhuo Chen（字节跳动 Seed）、Zhizheng Wu（香港中文大学（深圳）、深圳湾区研究院、澳门城市大学、Amphion Technology Co., Ltd）

💡 **毒舌点评**

亮点在于其“基建”属性：提供了语音自然度评估领域久缺的大规模、高质量成对偏好数据集与标准化基准，这对整个社区的推进价值可能超过其GRM模型本身。短板是数据集标注者主要为中国普通话母语者，对英语等语言自然度的“人类判断”基准可能存在文化偏差，这为结论的普适性埋下了隐患，也让“Towards Human-Level Judgment”的标题显得略有野心。

🔗 **开源详情**

- 代码：论文中提供代码仓库链接：https://github.com/AmphionTeam/SpeechJudge。
- 模型权重：论文中提到“will publicly release all key resources... including the trained model checkpoints for SpeechJudge-GRM”，并指向GitHub仓库，但未直接提供权重下载链接。可以推断权重将通过该仓库发布。
- 数据集：论文中提到会公开发布SpeechJudge-Data。
- Demo：提供音频样本在线演示网站：https://speechjudge.github.io/。
- 复现材料：论文正文和附录详细描述了数据构建协议、评估基准构建细节、训练超参数、工具（如ms-swift）等，复现信息非常充分。
- 论文中引用的开源项目：主要依赖的开源项目包括：Qwen2.5-Omni-7B（基座模型）、CosyVoice2、F5-TTS、MaskGCT、Ints（TTS数据生成模型）、ms-swift（RL训练工具包）、Whisper-large-v3、Paraformer-zh（用于WER计算）、WavLM（用于SIM计算）、VGGish（用于FAD计算）、AASIST和ADV（深度伪造检测基线）。

📌 **核心摘要**

1.  问题：语音合成模型难以与人类感知对齐，核心障碍在于缺乏大规模、聚焦于“自然度”这一基础指标的人类偏好反馈数据集和相应的奖励模型。
2.  方法核心：提出SpeechJudge套件，包含三个部分：1）SpeechJudge-Data：一个包含99K对合成语音的人类反馈数据集，标注了可懂度与自然度偏好；2）SpeechJudge-Eval：一个包含1000个高一致性样本的语音自然度判断基准；3）SpeechJudge-GRM：一个基于Qwen2.5-Omni-7B的生成式奖励模型，通过两阶段后训练（监督微调SFT+基于GRPO的强化学习）来学习人类偏好。
3.  新意：首次构建了大规模、多语言、多风格、多TTS模型输出的成对自然度偏好数据集；揭示了现有最优模型（如Gemini-2.5-Flash）在此任务上性能仍不足70%，设立了更具挑战性的评估标准；相比传统Bradley-Terry奖励模型（BTRM），提出的GRM能生成思维链推理，并支持推理时计算扩展，性能更优。
4.  主要实验结果：在SpeechJudge-Eval基准上，SpeechJudge-GRM（SFT+RL）达到77.2%的准确率，经过10次推理投票后可达79.4%，显著优于SpeechJudge-BTRM（72.7%）和所有测试的现有模型（最佳为Gemini-2.5-Flash的69.1%）。GRM作为奖励函数用于TTS模型后训练，能有效提升语音自然度。
    关键数据表格：
    | 模型 | 常规语音 | 表现语音 | 总体准确率 |
    | :--- | :---: | :---: | :---: |
    | Gemini-2.5-Flash | 73.5 | 66.2 | 69.1 |
    | SpeechJudge-BTRM | 77.5 | 69.5 | 72.7 |
    | SpeechJudge-GRM (SFT) | 77.8 | 73.7 | 75.3 |
    | SpeechJudge-GRM (SFT+RL) | 79.0 | 76.0 | 77.2 |
    | SpeechJudge-GRM (SFT+RL, Voting@10) | 80.5 | 78.7 | 79.4 |
5.  实际意义：为语音生成模型的人类对齐研究提供了关键的数据资源、评估标准和训练工具，可直接用于样本筛选和强化学习训练，推动语音合成质量向人类水平迈进。
6.  主要局限性：数据集和评估集的语言与文化覆盖面有限（主要反映中英双语听众偏好）；GRM的思维链推理能力部分源自闭源教师模型（Gemini-2.5-Flash），可能存在偏见；模型对自然度的判断是句子级别的，无法定位局部瑕疵。

---

