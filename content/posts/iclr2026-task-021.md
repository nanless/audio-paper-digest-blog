---
title: "ICLR 2026 - 语音合成 论文列表"
date: 2026-05-03
draft: false
tags: ["语音合成"]
categories: [iclr-2026]
description: "共 12 篇 ICLR 2026 语音合成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音合成

共 **12** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Hierarchical Semantic-Acoustic Modeling via Semi-Discrete Re](/audio-paper-digest-blog/posts/2026-05-03-hierarchical-semantic-acoustic-modeling-via-semi) | 9.5分 | 前10% |
| 🥈 | [Gogo: Group-wise granularity-ordered codec for stable and ef](/audio-paper-digest-blog/posts/2026-05-03-gogo-group-wise-granularity-ordered-codec-for) | 9.0分 | 前10% |
| 🥉 | [SpeechJudge: Towards Human-Level Judgment for Speech Natural](/audio-paper-digest-blog/posts/2026-05-03-speechjudge-towards-human-level-judgment-for) | 8.5分 | 前25% |
| 4. | [Toward Complex-Valued Neural Networks for Waveform Generatio](/audio-paper-digest-blog/posts/2026-05-03-toward-complex-valued-neural-networks-for) | 8.5分 | 前25% |
| 5. | [VibeVoice: Expressive Podcast Generation with Next-Token Dif](/audio-paper-digest-blog/posts/2026-05-03-vibevoice-expressive-podcast-generation-with-next) | 8.0分 | 前10% |
| 6. | [FlexiCodec: A Dynamic Neural Audio Codec for Low Frame Rates](/audio-paper-digest-blog/posts/2026-05-03-flexicodec-a-dynamic-neural-audio-codec-for-low) | 8.0分 | 前25% |
| 7. | [Scaling Speech Tokenizers with Diffusion Autoencoders](/audio-paper-digest-blog/posts/2026-05-03-scaling-speech-tokenizers-with-diffusion) | 8.0分 | 前25% |
| 8. | [StableToken: A Noise-Robust Semantic Speech Tokenizer for Re](/audio-paper-digest-blog/posts/2026-05-03-stabletoken-a-noise-robust-semantic-speech) | 7.5分 | 前25% |
| 9. | [TASTE: Text-Aligned Speech Tokenization and Embedding for Sp](/audio-paper-digest-blog/posts/2026-05-03-taste-text-aligned-speech-tokenization-and) | 7.5分 | 前25% |
| 10. | [FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS](/audio-paper-digest-blog/posts/2026-05-03-flexivoice-enabling-flexible-style-control-in) | 7.5分 | 前25% |
| 11. | [TTSDS2: Resources and Benchmark for Evaluating Human-Quality](/audio-paper-digest-blog/posts/2026-05-03-ttsds2-resources-and-benchmark-for-evaluating) | 7.5分 | 前25% |
| 12. | [MambaVoiceCloning: Efficient and Expressive Text-to-Speech v](/audio-paper-digest-blog/posts/2026-05-03-mambavoicecloning-efficient-and-expressive-text) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Hierarchical Semantic-Acoustic Modeling via Semi-Discrete Residual Representations for Expressive End-to-End Speech Synthesis](/audio-paper-digest-blog/posts/2026-05-03-hierarchical-semantic-acoustic-modeling-via-semi)

🔥 **9.5/10** | 前10% | #语音合成 | #自回归模型 | #流匹配 #端到端

👥 **作者与机构**

- 第一作者：Yixuan Zhou（清华大学深圳国际研究生院）
- 通讯作者：Zhiyong Wu（清华大学深圳国际研究生院）
- 作者列表：Yixuan Zhou（清华大学深圳国际研究生院）、Guoyang Zeng（ModelBest Inc）、Xin Liu（ModelBest Inc）、Xiang Li（清华大学深圳国际研究生院）、Renjie Yu（清华大学深圳国际研究生院）、Ziyang Wang（ModelBest Inc）、Runchuan Ye（清华大学深圳国际研究生院）、Weiyue Sun（ModelBest Inc）、Jiancheng Gui（ModelBest Inc）、Kehan Li（清华大学深圳国际研究生院）、Zhiyong Wu（清华大学深圳国际研究生院）、Zhiyuan Liu（清华大学计算机科学与技术系）

💡 **毒舌点评**

这篇论文用最优雅的“外科手术式”设计，直指语音合成领域“表达性与稳定性”的根本矛盾，并用一套干净利落的实验证明了其解决方案的有效性，堪称ICLR级别的“教科书式”工作。然而，其强大的性能高度依赖于100万小时级别的海量数据与H100集群训练，对于资源有限的研究者而言，这种“钞能力”架构可能难以复现；此外，其在表达性（如情感控制）的上限是否已触及天花板，仍需更多“野路子”场景的检验。

🔗 **开源详情**

- 代码：论文承诺发布代码，并在附录B中提及“Inference codes are available at codes.zip”。具体仓库链接论文中未直接给出。
- 模型权重：论文明确表示将发布模型（“We will release code and models to support future research.”）。VoxCPM-0.5B的权重将随代码一起发布。
- 数据集：主要使用了内部的100万小时数据集（未公开）和公开的Emilia数据集（95K小时）。
- Demo：提供了在线演示页面：https://voxcpm.github.io/VoxCPM-demopage/。
- 复现材料：提供了详尽的训练细节（Section D, Appendix B），包括模型架构参数（表5）、训练配置（表6）、优化器、学习率调度、硬件等。消融实验设置也完全公开。
- 论文中引用的开源项目：主要引用了作为基线的开源TTS系统（如CosyVoice、F5-TTS、MaskGCT等），以及预训练文本语言模型MiniCPM-4。
- 开源计划：论文中明确提及将发布代码和模型，因此不是“论文中未提及开源计划”。

📌 **核心摘要**

本文旨在解决端到端语音合成中离散token表示牺牲表达性与连续表示导致误差积累的根本矛盾。核心方法是提出一个统一的、端到端训练的分层语义-声学建模框架。该框架的关键在于引入一个可微分的有限标量量化（FSQ）瓶颈，它作为归纳偏置，自然诱导出模型内部的功能分离：文本语义语言模型（TSLM）专注于生成稳定的语义-韵律骨架，而残差声学语言模型（RALM）则负责恢复量化过程中丢失的精细声学细节。二者结合，共同指导一个基于局部扩散的解码器（LocDiT）生成高质量的语音隐变量。与依赖预训练离散tokenizer的多阶段流水线不同，本方法完全消除了对外部tokenizer的依赖，实现了真正的端到端训练。在超过100万小时的双语数据上训练后，该0.5B参数的模型VoxCPM在开源系统中达到了最先进的零样本TTS性能。例如，在SEED-TTS-EVAL基准上，其英语WER为1.85%，中文CER为0.93%，说话人相似度（SIM）分别达到72.9%（EN）和77.2%（ZH）。该工作的实际意义在于为构建兼具高保真度、强表达性与稳定性的语音生成模型提供了新范式。其主要局限性在于模型训练依赖大规模数据和算力，且在主观自然度评分上与部分闭源模型（如CosyVoice 3）仍有差距。

### 主要实验结果数据表（SEED-TTS-EVAL Benchmark）：
| 模型 | 参数量 | 数据规模(hrs) | EN WER↓ | EN SIM↑ | ZH CER↓ | ZH SIM↑ | Hard CER↓ | Hard SIM↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| F5-TTS | 0.3B | 100K | 2.00 | 67.0 | 1.53 | 76.0 | 8.67 | 71.3 |
| CosyVoice2 | 0.5B | 170K | 3.09 | 65.9 | 1.38 | 75.7 | 6.83 | 72.4 |
| IndexTTS 2 | 1.5B | 55K | 2.23 | 70.6 | 1.03 | 76.5 | 7.12 | 75.5 |
| VoxCPM-Emilia | 0.5B | 100K | 2.34 | 68.1 | 1.11 | 74.0 | 12.46 | 69.8 |
| VoxCPM | 0.5B | 1.8M | 1.85 | 72.9 | 0.93 | 77.2 | 8.87 | 73.0 |

---

### 🥈 [Gogo: Group-wise granularity-ordered codec for stable and efficient speech generation](/audio-paper-digest-blog/posts/2026-05-03-gogo-group-wise-granularity-ordered-codec-for)

🔥 **9.0/10** | 前10% | #语音合成 | #流匹配 | #语音大模型 #强化学习

👥 **作者与机构**

- 第一作者：Weidong Chen（香港中文大学电子工程系）
- 通讯作者：Xixin Wu（香港中文大学电子工程系）
- 作者列表：Weidong Chen（香港中文大学电子工程系）、Helen M. Meng（香港中文大学电子工程系）、Xixin Wu（香港中文大学电子工程系）

💡 **毒舌点评**

亮点：这篇工作没有满足于在现有编解码器框架上小修小补，而是提出了“组级粒度有序量化”这一全新范式，从根本上重构了语音离散化表示的设计哲学，并以此为基石构建了高效的两阶段生成系统，展现了卓越的系统性创新能力。短板：论文自述的token率（47 Hz）仍显著高于一些低比特率编解码器（如25 Hz），这构成了其效率上限；更关键的是，作为一篇提出核心架构的论文，未能开源代码或模型，使得其影响在工程层面大打折扣。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开权重。
- 数据集：使用Emilia数据集（英语子集）和LibriTTS、Seed-TTS等公开测试集，未提供自有数据集。
- Demo：论文中提及演示样本可在 `https://happycolor.github.io/gogo` 查看，但链接有效性需自行验证。
- 复现材料：提供了非常详尽的模型配置（附录C）、训练细节和超参数（附录D、表4）、评估指标定义（附录G）以及消融实验设置。
- 引用的开源项目：论文依赖了多个开源模型/工具，包括：LLaMA-3.2（作为GogoSpeech基础）、Vocos（作为声码器）、Emilia数据集、以及多个基线模型（EnCodec, DAC, SpeechTokenizer, Mimi等）的官方实现。

📌 **核心摘要**

1.  解决问题：现有语音语言模型（SLM）所依赖的神经音频编解码器存在根本矛盾：要么采用逐帧量化（帧率高、时序局部性强）难以捕获高级语义，不利于自回归建模；要么追求低比特率但牺牲保真度。同时，它们普遍忽略语音信息分布的不均匀性，导致对简单片段（如静音）的编码冗余，效率低下。
2.  方法核心：提出了Gogo，一个全新的组级粒度有序编解码器。它将连续语音帧分组，并为每组生成从粗到细排列的token：粗token编码高级抽象信息（如内容、韵律），细token逐步恢复低级声学细节。基于此，设计了GogoSpeech两阶段语音生成模型：第一阶段以极低的token率（~14 Hz）生成粗粒度的“语音骨架”；第二阶段在此骨架基础上，为每组自适应地添加细粒度声学细节。为进一步提升效率，提出了一个基于GRPO训练的token分配器，根据每组的复杂度动态分配不同的token预算。
3.  与已有方法相比新在哪里：彻底打破了传统的逐帧量化范式，转向逐组量化。在量化结构上，创新性地引入了粒度有序的概念，使token本身具有层次化信息。在生成范式上，实现了真正的两阶段异速生成（先骨架后细节，速率不同），而非现有方法中语义和声学建模同速率的级联。在效率优化上，将强化学习（GRPO）首次应用于语音生成中的动态比特率分配。
4.  主要实验结果：实验结果全面优异。在语音重建任务上（LibriTTS测试集），Gogo在47 tokens/s的比特率下，在UT-MOS（4.19）、DNS-MOS（3.99）、SIM（0.91）、WER（6.35）等多项指标上超越了包括SpeechTokenizer、Mimi、SNAC在内的众多SOTA编解码器。在零样本TTS任务上（Seed-TTS测试集），GogoSpeech在说话人相似度（SIM 0.667）、词错误率（WER 2.394）和主观评分（SMOS 4.381, CMOS +1.832）上均达到或接近最佳水平。引入token分配器后，平均token率从47 Hz降至36 Hz，性能仅轻微下降。
5.  实际意义：为语音大模型提供了更优质的离散化表示基础，能同时保证建模稳定性和重建质量。两阶段生成策略显著提升了长语音生成的稳定性。自适应token分配器为实现高效、资源感知的语音生成提供了可行路径。
6.  主要局限性：论文自述token率（47 Hz）仍高于部分低比特率编解码器（25 Hz）。其flow-matching解码器中的占位符token偶尔会引入伪影。当前GogoSpeech基于1B参数量的LLaMA构建，向更大规模模型的扩展性有待验证。

---

### 🥉 [SpeechJudge: Towards Human-Level Judgment for Speech Naturalness](/audio-paper-digest-blog/posts/2026-05-03-speechjudge-towards-human-level-judgment-for)

🔥 **8.5/10** | 前25% | #语音合成 | #强化学习 | #基准测试 #多语言

👥 **作者与机构**

- 第一作者：Xueyao Zhang（香港中文大学（深圳））
- 通讯作者：Zhizheng Wu（香港中文大学（深圳）、澳门城市大学、深圳环区研究院、Amphion Technology Co., Ltd）
- 作者列表：Xueyao Zhang（香港中文大学（深圳））、Chaoren Wang（香港中文大学（深圳））、Huan Liao（香港中文大学（深圳））、Ziniu Li（香港中文大学（深圳））、Yuancheng Wang（香港中文大学（深圳））、Li Wang（香港中文大学（深圳））、Dongya Jia（ByteDance Seed）、Yuanzhe Chen（ByteDance Seed）、Xiulin Li（DataBaker Technology）、Zhuo Chen（ByteDance Seed）、Zhizheng Wu（香港中文大学（深圳）、澳门城市大学、深圳环区研究院、Amphion Technology Co., Ltd）

💡 **毒舌点评**

这篇论文最大亮点是构建了一个系统且规模庞大的语音自然度偏好对齐“全家桶”（数据集+基准+奖励模型），实验扎实，结论清晰，直接推动了语音生成模型从“能用”到“对齐人类感知”的关键一步。短板在于其核心数据集SpeechJudge-Data在语言和口音上存在偏科（主要反映中国双语人群偏好），且最终奖励模型的准确率（~79%）虽优于基线，但仍表明自动判断语音自然度是一个远未解决的难题。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/AmphionTeam/SpeechJudge
- 模型权重：论文承诺将发布训练好的SpeechJudge-GRM模型检查点。
- 数据集：论文承诺将发布SpeechJudge-Data（包括原始数据及各个子集）、SpeechJudge-Eval基准。
- Demo：提供在线演示网站：https://speechjudge.github.io/，可试听音频样本。
- 复现材料：论文提供了详细的附录，说明了数据构建细节、标注指南、训练细节、超参数设置等。
- 引用的开源项目：论文依赖或对比的开源工具/模型包括：CosyVoice2, F5-TTS, MaskGCT, Qwen2.5-Omni-7B, LoRA, ms-swift (用于RL训练), Paraformer-zh (ASR), Whisper-large-v3 (ASR), WavLM (说话人嵌入), VGGish (FAD), UTMOS, DNSMOS, audiobox-aesthetics, AASIST, ADV等。

📌 **核心摘要**

1.  问题：将语音合成模型与人类感知对齐是一个关键挑战，尤其是在语音自然度这一最基础的主观指标上，缺乏大规模的人类偏好数据集和相应的奖励模型。
2.  方法：提出了SpeechJudge，包含三部分：(1) SpeechJudge-Data：一个99K对语音的人类偏好语料库，由6个先进零样本TTS模型生成，涵盖多语言和风格，标注了可懂度和自然度偏好。(2) SpeechJudge-Eval：一个基于高一致性标注构建的、用于评估语音自然度判断能力的基准。(3) SpeechJudge-GRM：基于Qwen2.5-Omni-7B的生成式奖励模型，通过两阶段训练（使用链式思考数据的SFT和基于人类偏好的GRPO强化学习）构建。
3.  创新：(1) 首次构建了专注于语音自然度的大规模人类偏好数据集。(2) 创建了专门的语音自然度判断基准，揭示了现有模型的不足。(3) 提出了采用两阶段训练（SFT+RL）的生成式奖励模型SpeechJudge-GRM，支持可解释的推理和推理时扩展。
4.  结果：
    *   基准测试显示，最强闭源模型Gemini-2.5-Flash在SpeechJudge-Eval上与人类判断的一致性不足70%。
    *   SpeechJudge-GRM在相同基准上达到77.2%的准确率，通过推理时投票（@10）提升至79.4%，显著优于经典的Bradley-Terry奖励模型（72.7%）。
    *   将其作为奖励函数，能有效改进TTS模型的后训练，提升自然度。

| 模型 | Regular | Expressive | Total |
| :--- | :--- | :--- | :--- |
| AudioLLMs (Closed-source) | | | |
| Gemini-2.5-Flash | 73.5 | 66.2 | 69.1 |
| Reward Models | | | |
| SpeechJudge-BTRM | 77.5 | 69.5 | 72.7 |
| SpeechJudge-GRM (SFT) | 77.8 | 73.7 | 75.3 |
| SpeechJudge-GRM (SFT+RL) | 79.0 | 76.0 | 77.2 |
| SpeechJudge-GRM (SFT+RL) w/ Voting@10 | 80.5 | 78.7 | 79.4 |
5.  意义：提供了完整的资源套件（数据、基准、模型），推动了语音生成模型的对齐研究，其奖励模型可作为改进生成质量的有效工具。
6.  局限：数据集语言覆盖有限（中英为主），标注人群偏中国，可能影响模型泛化；奖励模型在区分细微风格差异（如清晰但机械 vs. 轻微噪声但生动）时仍有不足。

---

### 4. [Toward Complex-Valued Neural Networks for Waveform Generation](/audio-paper-digest-blog/posts/2026-05-03-toward-complex-valued-neural-networks-for)

🔥 **8.5/10** | 前25% | #语音合成 | #复数值神经网络 | #对抗训练 #生成模型

👥 **作者与机构**

- 第一作者：Hyung-Seok Oh（高丽大学人工智能系）
- 通讯作者：Seong-Whan Lee（高丽大学人工智能系）
- 作者列表：Hyung-Seok Oh（高丽大学人工智能系）、Deok-Hyeon Cho（高丽大学人工智能系）、Seung-Bin Kim（高丽大学人工智能系）、Seong-Whan Lee（高丽大学人工智能系）

💡 **毒舌点评**

亮点在于它没有停留在“将实数网络输入拼接复数实虚部”的浅层做法，而是构建了原生的复数值生成器与判别器，并设计了相位量化作为结构化归纳偏置，这使得模型能更本质地学习频谱的复数结构。短板是复数值运算引入了显著的计算开销和内存占用，尽管提出了分块矩阵优化，但其在单卡上的训练时间（138小时）和内存占用（101.24MB）仍远高于Vocos（4657.65倍速，51.62MB），在需要大规模或低延迟部署的复杂系统中可能成为瓶颈。

🔗 **开源详情**

- 代码：是，论文提供了项目主页及代码仓库链接：https://hs-oh-prml.github.io/ComVo/
- 模型权重：未明确提及是否开源ComVo模型的预训练权重，仅提及代码和音频样本可获取。基线模型权重来源有列表（表17）。
- 数据集：未提供新数据集，使用公开的LibriTTS和MUSDB18-HQ数据集。
- Demo：论文主页包含音频样本演示（从链接推断）。
- 复现材料：非常充分。论文附录提供了：所有基线模型的官方或开源实现来源（表17）；所有评估指标的代码来源（表18）；完整的训练超参数配置（表20）；分块矩阵计算方案的详细推导（附录D）和数值一致性验证（附录F）；不同计算方案的反向传播图可视化对比（附录G）。
- 论文中引用的开源项目：引用了多个开源vocoder实现（HiFi-GAN, iSTFTNet, BigVGAN, Vocos, APNet, APNet2, FreeV）用于对比；使用了auraloss库计算MR-STFT损失；使用了complextorch库复现Gauss技巧进行速度对比。

📌 **核心摘要**

1.  问题：现有的基于逆短时傅里叶变换（iSTFT）的声码器使用实值神经网络分别处理复数频谱的实部和虚部，这种分离限制了模型捕捉两者之间固有耦合结构的能力。
2.  方法核心：提出ComVo，一个原生在复数域操作的神经声码器。其生成器和判别器（复数值多分辨率判别器cMRD）均使用复数值层，构成复数域对抗训练框架。同时引入相位量化层作为归纳偏置，并提出分块矩阵计算方案以提升训练效率。
3.  创新点：首次将复数值神经网络应用于iSTFT-based vocoder的生成器和判别器；提出相位量化作为针对复数值网络的非线性操作；设计分块矩阵计算方案，将复数运算融合为单次矩阵乘法，减少冗余操作。
4.  实验结果：在LibriTTS数据集上，ComVo在UTMOS（3.6901）、PESQ（3.8239）、周期性RMSE（0.0903）等多个指标上优于Vocos、BigVGAN等强基线；在MUSDB18-HQ数据集上同样取得最优或可比性能。消融实验（表5）证实复数值生成器（GCDR）和复数值判别器（cMRD）单独及组合使用均能带来提升。分块矩阵方案将训练时间减少25%（表7）。
5.  实际意义：证明了复数域建模对于波形生成任务的有效性，能够提升合成质量。计算优化方案为复数值网络在深度学习框架中的高效实现提供了实用参考。
6.  主要局限性：模型内存占用较高（约为实值同参数量模型的2倍）；当前实现未优化多GPU训练，且存在偶发的数值稳定性问题；生成器和判别器中仍采用部分“分离”设计（如分裂GELU、对实虚部独立计算损失）。

---

### 5. [VibeVoice: Expressive Podcast Generation with Next-Token Diffusion](/audio-paper-digest-blog/posts/2026-05-03-vibevoice-expressive-podcast-generation-with-next)

🔥 **8.0/10** | 前10% | #语音合成 | #扩散模型 | #大语言模型 #零样本

👥 **作者与机构**

- 第一作者：Zhiliang Peng (Microsoft Research)
- 通讯作者：Furu Wei (Microsoft Research)
- 作者列表：Zhiliang Peng (Microsoft Research)， Jianwei Yu (Microsoft Research)， Wenhui Wang (Microsoft Research)， Yaoyao Chang (Microsoft Research)， Yutao Sun (Microsoft Research)， Li Dong (Microsoft Research)， Yi Zhu (Microsoft Research)， Weijiang Xu (Microsoft Research)， Hangbo Bao (Microsoft Research)， Zehua Wang (Microsoft Research)， Shaohan Huang (Microsoft Research)， Yan Xia (Microsoft Research)， Furu Wei (Microsoft Research)

💡 **毒舌点评**

亮点：提出了7.5Hz超低帧率的连续语音分词器，在极高压缩率下保持了较高的重建质量，为长序列处理奠定了效率基础。短板：多说话人场景下的说话人相似度（SIM-O）指标在论文表2中显示，随着说话人数量增加和音频变长，VibeVoice-7B的SIM-O从0.75降至0.71，且绝对值未超越CosyVoice2等基线，其声称的“卓越的说话人身份保留能力”在客观指标上支撑略显不足。

🔗 **开源详情**

- 代码：提供代码仓库链接 `https://github.com/microsoft/VibeVoice`。
- 模型权重：论文提及“Code and checkpoint are available”，表明提供模型检查点下载。
- 数据集：训练所用的伪标注播客数据为内部构建，未公开。评估数据集VIBEVOICE-Eval也未提及公开。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极其详细的训练超参数（附录F）、数据处理管线所用工具列表（表4）、评估细节（附录G, H），以及分词器、模型架构的消融实验结果，复现指南较为完备。
- 论文中引用的开源项目：Silero VAD， Whisper-large-v3-turbo， Nemo ASR， WeSpeaker。

📌 **核心摘要**

1.  要解决什么问题：传统TTS系统难以高效、自然地生成长篇（如90分钟）、多说话人（如4人）的对话式音频（如播客），在规模、说话人一致性、自然轮转和副语言线索（如呼吸、咂嘴声）方面存在瓶颈。
2.  方法核心是什么：VibeVoice框架采用“Next-Token Diffusion”架构，其核心是：a) 超低帧率连续语音分词器（7.5Hz），包含声学分词器（基于σ-VAE）和语义分词器（基于ASR预训练），高效压缩音频并保留声学与语义信息；b) 以大语言模型（LLM，如Qwen2.5） 为核心处理文本与对话流程；c) 使用扩散模型头，基于LLM的隐藏状态生成声学VAE特征，再通过声学解码器恢复波形。
3.  与已有方法相比新在哪里：a) 效率突破：7.5Hz帧率远低于常见分词器（如50Hz），极大减少序列长度，支持长序列生成。b) 混合表示：明确解耦并融合声学与语义特征，提升多说话人对话的流畅性与稳定性。c) 端到端生成：不同于拼接短句的方法，采用LLM加扩散模型的端到端架构，更好地建模长程依赖和自然交互。
4.  主要实验结果如何：在主观评估中，VibeVoice-7B在真实性、丰富性和偏好度上得分最高（平均3.76），超越Google Gemini 2.5 Pro TTS（3.66）和ElevenLabs v3 alpha（3.40）。在客观评估（VIBEVOICE-Eval数据集）上，VibeVoice-7B（32K序列）的整体词错率（WER-W）低至0.66，说话人相似度（SIM-O）达0.75。消融研究证实了混合分词器和模型规模的重要性。分词器在LibriTTS测试集上PESQ达3.068，UTMOS达4.181，以7.5Hz帧率实现了领先重建质量。
5.  实际意义是什么：为自动化生成高质量、长时长、多人数、富有表现力的播客和对话音频提供了可行的开源解决方案，具有显著的生产力工具和内容创作应用潜力。
6.  主要局限性是什么：a) 训练数据依赖内部构建的伪标注播客数据集，未公开。b) 在多说话人（3-4人）场景下，说话人相似度指标（SIM-O）相比基线提升有限，甚至在某些设定下低于CosyVoice2。c) 模型的推理效率（RTF<1.0）虽好于MoonCast，但依赖于扩散步数，存在质量与速度的权衡。

---

### 6. [FlexiCodec: A Dynamic Neural Audio Codec for Low Frame Rates](/audio-paper-digest-blog/posts/2026-05-03-flexicodec-a-dynamic-neural-audio-codec-for-low)

🔥 **8.0/10** | 前25% | #语音合成 | #端到端 | #流匹配 #低帧率

👥 **作者与机构**

- 第一作者：Jiaqi Li（香港中文大学（深圳））
- 通讯作者：未说明（论文未明确标注通讯作者）
- 作者列表：
    - Jiaqi Li（香港中文大学（深圳））
    - Yao Qian（Microsoft, USA）
    - Yuxuan Hu（Microsoft, USA）
    - Leying Zhang（上海交通大学）
    - Xiaofei Wang（Microsoft, USA）
    - Heng Lu（Microsoft, USA）
    - Manthan Thakker（Microsoft, USA）
    - Jinyu Li（Microsoft, USA）
    - Sheng Zhao（Microsoft, USA）
    - Zhizheng Wu（香港中文大学（深圳）、深圳湾区实验室、澳门城市大学、Amphion Technology Co., Ltd.）

💡 **毒舌点评**

FlexiCodec的亮点在于它像一个聪明的语音裁缝，能动态地把语义相近的音素“缝合”成一个token，从而在极低帧率下还能保住大段的语义信息，这在理论上比固定下采样要优雅得多。然而，它的多语言泛化能力像个短板明显的偏科生，zero-shot处理非英文语言时语义token几乎失效，尽管作者展示了微调的潜力，但这无疑限制了其作为通用语音基础模型的即时应用广度。

🔗 **开源详情**

-   代码：提供代码仓库链接：`https://github.com/amphionteam/flexicodec`。
-   模型权重：论文中提到“Code and model are available”，表明提供了预训练模型权重。
-   数据集：训练数据为LibriLight-Large（54k小时），评估数据集为LibriSpeech-test-clean和TIMIT，这些是公开数据集。但LibriLight-Large通常需要申请才能获取。
-   Demo：提供了在线演示网站：`https://flexicodec.github.io`。
-   复现材料：提供了极其详尽的复现材料，包括：完整的模型架构细节（CNN步长、Transformer层参数）、训练超参数（优化器、学习率、batch size、训练步数）、损失函数细节、评估指标和脚本、以及大量附录（A-L）补充实验细节。
-   引用的开源项目/模型：
    -   SenseVoice-Small：作为冻结的ASR特征提取器。
    -   DAC：声学编码器架构的基础。
    -   DualCodec：作为重要的对比基线。
    -   CosyVoice：TTS框架的灵感来源。
    -   Amphion：提供了Vocos vocoder等工具。
    -   其他基线模型如Encodec, SpeechTokenizer, WavTokenizer等。

📌 **核心摘要**

本文针对现有神经音频编解码器在超低帧率（<12.5Hz）下语义信息严重丢失的问题，提出了FlexiCodec。其核心是采用动态帧率策略，利用预训练的ASR模型特征来指导自适应合并语义相似的帧，从而在语音的稀疏区域（如静音、长元音）分配更少的token，在密集区域保留更多细节。与固定帧率方法相比，FlexiCodec的架构还包括一个新颖的ASR辅助双流编码器（分离语义与声学流）和Transformer瓶颈模块（用于平滑合并/解合并过程）。主要实验结果表明：1）在极具挑战性的6.25Hz平均帧率下，FlexiCodec的RVQ-1 token重建WER仅为4.15%，显著优于重训练的DualCodec基线（31.5%）和DAC基线（88.2%）。2）其动态特性允许在推理时通过调整阈值实现3Hz到12.5Hz的连续可控帧率。3）在下游TTS任务中，FlexiCodec-TTS（AR阶段帧率6.25Hz）达到了与基线CosyVoice相当的语音质量（NMOS 3.32 vs. 3.17），但AR阶段速度提升了7.3倍。本文的主要意义在于将神经语音编码的平均帧率下限有效推至了约6Hz，为构建更高效的语音生成与理解系统提供了关键技术。局限性在于其语义token在未微调的多语言场景下表现不佳。

---

### 7. [Scaling Speech Tokenizers with Diffusion Autoencoders](/audio-paper-digest-blog/posts/2026-05-03-scaling-speech-tokenizers-with-diffusion)

🔥 **8.0/10** | 前25% | #语音合成 | #扩散模型 | #语音识别 #流匹配

👥 **作者与机构**

- 第一作者：Yuancheng Wang（Meta超级智能实验室 / 香港中文大学（深圳））
- 通讯作者：未说明
- 作者列表：Yuancheng Wang（Meta超级智能实验室 / 香港中文大学（深圳）），Zhenyu Tang（Meta超级智能实验室），Yun Wang（Meta超级智能实验室），Arthur Hinsvark（Meta超级智能实验室），Yingru Liu（Meta超级智能实验室），Yinghao Aaron Li（Meta超级智能实验室），Kainan Peng（Meta超级智能实验室），Junyi Ao（Meta超级智能实验室 / 香港中文大学（深圳）），Mingbo Ma（Meta超级智能实验室），Mike Seltzer（Meta超级智能实验室），Qing He（Meta超级智能实验室），Xubo Liu（Meta超级智能实验室）

💡 **毒舌点评**

亮点：架构设计精巧，将扩散解码器与量化器端到端联合训练，完美解决了低比特率下重建质量与语义信息难以兼得的核心矛盾，是一个理论动机清晰且实践效果显著的“对症下药”方案。短板：模型规模（1.6B）和训练数据量（200万小时）虽大，但数据来源、语言分布、预处理等关键细节均“未说明”，这对于验证其“可扩展性”的宣称和复现构成了实质性障碍，使得“Scaling”的标题略显空洞。

🔗 **开源详情**

- 代码：论文中提及将在发表后提供推理代码和预训练模型权重（在公开研究数据集上），但未给出具体代码仓库链接。
- 模型权重：承诺提供。
- 数据集：训练数据为内部200万小时数据，未公开。评估使用了公开的SeedTTS test-en、LibriSpeech等。
- Demo：提供了在线演示链接（https://sitok-demo.github.io/）。
- 复现材料：在附录中提供了详细的模型架构（A）、训练循环伪代码（D.2）、超参数和实现细节（D.3）。
- 依赖的开源项目：文中提到依赖Llama架构（Touvron et al., 2023）、Vocos声码器（Siuzdak, 2024）等。
- 开源计划：论文明确承诺在发表后开源代码和模型，但具体时间、平台等未在论文中详述。

📌 **核心摘要**

1.  要解决什么问题：现有语音标记器在低比特率/令牌率下，难以同时兼顾高保真重建、丰富语义表征和高压缩率这三个目标，尤其在向量量化（VQ）导致的信息瓶颈下，传统确定性重建目标学习到的表征语义贫乏，不利于下游理解任务。
2.  方法核心是什么：提出Speech Diffusion Tokenizer（SiTok），一个基于扩散自编码器的框架。其核心是端到端联合优化：编码器将语音梅尔谱图映射为离散令牌；解码器是一个基于流匹配（Flow Matching）的扩散模型，从量化后的表示重建原始语音；同时，在量化后的离散空间直接施加CTC语义损失进行监督，确保令牌具有语言意义。
3.  与已有方法相比新在哪里：a) 范式创新：首次将向量量化与扩散自编码器在语音标记任务上端到端统一，使离散码本与生成分布直接对齐。b) 语义正则化：不同于传统的表示对齐（MSE/余弦相似度），直接在量化潜空间用CTC损失监督，更直接地注入语义信息。c) 极致压缩与高质量：在超低令牌率（12.5 Hz）和比特率（0.2 kbps）下，实现了优于许多高比特率基线的重建和理解性能。d) 可扩展性验证：将模型规模扩展至1.6B参数，并在大规模数据上训练。
4.  主要实验结果如何：
    *   重建质量：在0.2 kbps下，SiTok（单码本）WER为4.06，SIM为0.641；经解码器微调后SIM达0.682，经Token CFG后WER降至3.34，优于多数更高比特率的基线（如BigCodec， DualCodec， Mimi等）。
    *   理解任务：在ASR（LibriSpeech test-clean）上，LLM-based ASR的WER为4.95，CTC ASR为9.50，显著优于所有基线。在情感识别、说话人验证、关键词检测上也全面领先。
    *   生成任务：构建的SiTok-AR-TTS系统，WER为2.46，SIM为0.64，实时因子（RTF）为0.234，在速度和质量上均具竞争力。
    *   消融研究：证实了扩散目标优于回归目标；CTC损失权重（0.1）至关重要；增大码本尺寸和数量持续提升性能。
5.  实际意义是什么：SiTok为构建统一的、高效的语音大模型提供了基础的表示接口。其极低的令牌率可大幅缩减语言模型的序列长度，降低训练和推理成本；其高质量的语义-声学联合表征，能同时支持理解和生成任务，有望成为下一代语音基础模型的标准组件。
6.  主要局限性是什么：a) 训练数据规模巨大（200万小时），但属于非公开内部数据，可复现性受限。b) 扩散解码过程的计算开销仍高于传统自回归解码器，虽通过Shortcut微调等方法缓解，但实时流式生成仍具挑战。c) 论文承认，与连续特征表征相比，在某些理解任务上仍有差距。

---

### 8. [StableToken: A Noise-Robust Semantic Speech Tokenizer for Resilient SpeechLLMs](/audio-paper-digest-blog/posts/2026-05-03-stabletoken-a-noise-robust-semantic-speech)

✅ **7.5/10** | 前25% | #语音合成 | #预训练 | #语音大模型 #鲁棒性

👥 **作者与机构**

- 第一作者：Yuhan Song（北京大学计算机科学学院，多媒体信息处理国家重点实验室）
- 通讯作者：Linhao Zhang（微信AI基础模型技术中心，腾讯公司），Houfeng Wang（北京大学计算机科学学院，多媒体信息处理国家重点实验室）
- 作者列表：Yuhan Song（北京大学），Linhao Zhang（腾讯微信AI），Chuhan Wu（腾讯微信AI），Aiwei Liu（腾讯微信AI），Wei Jia（腾讯微信AI），Houfeng Wang（北京大学），Xiao Zhou（腾讯微信AI）

💡 **毒舌点评**

亮点在于其“多分支投票”机制设计得相当精巧，通过在比特级别而非token级别进行多数表决，实现了在训练时提供平滑监督信号、在推理时提供强大纠错能力的双重功效，论文将这一核心创新阐述得非常清晰。短板则是，虽然论文展示了对多种下游任务的增益，但其本质上仍是一个依赖ASR损失监督的编码器-解码器分词器，论文并未深入探讨这种基于共识的“稳定”表示是否会无意中丢弃或削弱某些对于情感识别等任务可能至关重要的、微妙的声学特征，尽管消融实验中Layer 16的选择已试图平衡，但更根本的权衡值得进一步探究。

🔗 **开源详情**

- 代码：论文明确提供代码仓库链接：https://github.com/Tencent/StableToken
- 模型权重：论文承诺将在接收后公开模型检查点。
- 数据集：训练使用的开源数据集已详细列出（见表7），但内部数据未公开。评估使用了标准公开数据集（FLEURS， LibriSpeech， CHiME-4， ESD， SEED-TTS等）。
- Demo：论文中未提及在线演示。
- 复现材料：附录B、E、F提供了极其详细的训练数据集、超参数、噪声增强参数、下游任务训练数据、微调超参数、以及所使用的文本提示（Prompts），复现材料非常充分。
- 引用的开源项目：论文基础模型使用了Whisper-large-v3， 下游LLM使用了Qwen2.5-3B， 还提及了用于音频重建的HiFi-GAN vocoder。

📌 **核心摘要**

1.  问题：当前主流的监督语义语音分词器（如S3 Tokenizer， CosyVoice）在噪声环境下非常脆弱，即使在高信噪比、人耳完全可懂的噪声干扰下，其输出的离散token序列也会发生巨大变化，这严重增加了下游大语言模型（LLM）的学习负担，是SpeechLLMs在真实世界性能下降的关键原因之一。其根源在于脆弱的单路径量化架构和与最终文本损失相距甚远的监督信号。
2.  方法核心：提出StableToken，一个基于共识机制的鲁棒语义分词器。其核心架构是投票-LFQ模块：一个并行的多分支量化器，每个分支独立生成二进制表示，然后通过位级多数投票机制融合为单一、稳定的token序列。训练采用噪声感知共识训练：随机向部分分支输入带噪语音，通过共识损失迫使这些受干扰的分支与多数干净分支的表示对齐。
3.  创新点：与以往单路径量化器相比，StableToken通过冗余的多分支架构和细粒度的位级投票，建立了内在的容错能力；与仅依赖ASR损失的训练相比，引入了显式的中间层token稳定性监督，直接优化分词器的噪声不变性。两者协同设计。
4.  主要实验结果：在FLEURS等数据集上的噪声鲁棒性评估中，StableToken的平均单位编辑距离（UED）降至10.17%，相比最强的监督基线S3 Tokenizer（26.17%）相对降低了60%以上。在音频重建质量上（LibriSpeech WER， SEED MOS）也达到SOTA水平。在下游任务中，使用StableToken的SpeechLLM在噪声ASR（如CHiME-4测试集WER从基线的51.08%降至35.90%）、情感识别和语音合成任务上均取得了显著且一致的鲁棒性提升，且噪声越大优势越明显。
5.  实际意义：为构建在现实噪声环境中更鲁棒、可靠的SpeechLLMs提供了关键的基础组件，通过提升输入分词的稳定性，直接简化了下游LLM的学习任务，是提升语音AI系统实用性和鲁棒性的有效路径。
6.  主要局限性：论文主要验证了在英语和中文数据集上的效果，对更多语言的泛化性未作探讨；其“稳定”表示在极端情况下是否会损失某些细粒度信息（如非语言声音、细微情感差异）值得进一步研究；此外，多分支架构在推理时虽开销很小，但仍略高于单分支。

---

### 9. [TASTE: Text-Aligned Speech Tokenization and Embedding for Spoken Language Modeling](/audio-paper-digest-blog/posts/2026-05-03-taste-text-aligned-speech-tokenization-and)

✅ **7.5/10** | 前25% | #语音合成 | #预训练 | #语音大模型 #语音识别

👥 **作者与机构**

- 第一作者：Liang-Hsuan Tseng (台湾大学通讯工程研究所，联发科研究中心实习)
- 通讯作者：未明确说明（论文中作者列表未用符号区分通讯作者，联系邮箱为团队邮箱）
- 作者列表：Liang-Hsuan Tseng（台湾大学通讯工程研究所、联发科研究中心实习）、Yi-Chang Chen（联发科研究中心）、Kuan-Yi Lee（台湾大学通讯工程研究所）、Da-Shan Shiu（联发科研究中心）、Hung-yi Lee（台湾大学人工智能研究中心卓越中心）
注：作者列表根据论文署名及脚注整理，†Equal contribution表示前两位作者贡献相等。

💡 **毒舌点评**

这篇论文最聪明的地方在于“绕过”问题本身——不费劲去对齐两个已经生成的模态，而是从源头（分词阶段）就生成对齐的表示，这思路堪称优雅。但其宣称的“端到端”高度依赖ASR质量，虽然实验证明对当前ASR鲁棒，但这终究是个外部依赖，且在英语外的语言和复杂声学环境下是否依然“优雅”尚未可知。

🔗 **开源详情**

- 代码：提供代码仓库链接（https://github.com/mtkresearch/TASTE-SpokenLM）。论文中已明确提及。
- 模型权重：提供预训练模型。论文中已明确提及（“our demo, code, and models are available”）。
- 数据集：未明确说明训练所用的Emilia（英文子集）和LibriTTS���据集是否公开提供或如何获取。
- Demo：提供在线演示页面（https://mtkresearch.github.io/TASTE-SpokenLM.github.io）。论文中已明确提及。
- 复现材料：论文附录提供了极其详细的训练超参数、配置、优化器设置、硬件信息、损失函数公式和算法伪代码（Algorithm 1），复现信息非常充分。
- 论文中引用的开源项目：主要引用的开源模型/工具包括：Whisper（编码器初始化）、HiFi-GAN和Flow模型（声码器）、DeepSpeed和Liger Kernel（训练加速）、S3 token（作为重建目标单元）。

📌 **核心摘要**

1. 要解决什么问题：当前语音语言模型（SLM）在进行文本-语音联合建模时，面临文本token与语音token序列长度不匹配、信息冗余等核心挑战，导致模型需要复杂的对齐机制，建模效率低下。
2. 方法核心是什么：提出了TASTE（Text-Aligned Speech Tokenization and Embedding），一种专为联合建模设计的文本对齐语音分词与嵌入方法。其核心是在分词阶段，利用一个基于注意力的聚合器，将语音编码器（Whisper）的表示聚合到与文本转录等长的序列上，然后进行残差向量量化（RVQ），生成与文本token一一对应的语音token。
3. 与已有方法相比新在哪里：不同于传统方法（如SSL离散化或神经编解码器）独立处理语音，TASTE在分词时就引入文本信息进行对齐。这使得联合语言模型的训练变得直接：模型可以同时预测下一个文本token和对应的语音token序列，无需额外的长度对齐或交错策略。
4. 主要实验结果如何：
   - 语音重建：在LibriSpeech上，TASTE在极低比特率（~150 bps）下，实现了与高比特率方法（如S3 token 600 bps）相当的重建质量和相似度。
   ![表1：语音重建评估结果](icassp-img://6STb8DauN1/0.png)
   | Method | Bitrate | QUALITY (WER↓/UTMOS↑) | SIMILARITY (Spkr. Sim.↑/MUSHRA↑) |
   | :--- | :--- | :--- | :--- |
   | Ground Truth | 256k | 2.1% / 4.09 | - / 76.6 |
   | S3 token (topline) | 600 | 3.0% / 4.18 | 0.82 / 70.2 |
   | TASTE (ours) | ~150 | 4.4% / 4.29 | 0.80 / 68.3 |
   - 语音语言模型：基于TASTE的1.3B参数SLM（TASLM）在语音续写任务中，无论在GPT-4o评估（3.08-3.16分）、UTMOS（4.07-4.22分）还是人类评分（3.93-4.16分）上，均优于7B参数的基线SLM（如TWIST 7B, Spirit LM）。在StoryCloze语义基准上取得最佳成绩（76.5-76.7%）。
   ![表2：语音语言模型评估结果](icassp-img://6STb8DauN1/1.png)
   | Method | CONTINUATION (GPT-4o/Human) | LIKELIHOOD (SALMON/StoryCloze) |
   | :--- | :--- | :--- |
   | Spirit LM 7B | 2.79 / 2.38 | 59.1/72.0 |
   | TASLM 1B (token) | 3.08 / 3.93 | 60.8/76.5 |
   | TASLM 1B (embed.) | 3.16 / 4.16 | 57.7/76.7 |
5. 实际意义是什么：TASTE为构建更自然、高效的语音对话系统提供了一种更简洁的基础框架。它不仅提升了建模效率（序列长度与文本一致），还意外地赋能了文本对齐的语音编辑（如精确替换单词的韵律）和少样本语音问答能力。
6. 主要局限性是什么：1) 性能仍受限于上游ASR的准确性和对语言的覆盖（目前仅测试英语）；2) 在处理背景噪音等非语音声学事件上能力有限（SALMON任务表现不佳）；3) 系统尚未针对实时对话优化延迟；4) 未探索多说话人、重叠语音等复杂场景。

---

### 10. [FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS with Natural Language Instructions](/audio-paper-digest-blog/posts/2026-05-03-flexivoice-enabling-flexible-style-control-in)

✅ **7.5/10** | 前25% | #语音合成 | #强化学习 | #零样本 #语音大模型

👥 **作者与机构**

- 第一作者：Dekun Chen (The Chinese University of Hong Kong, Shenzhen)
- 通讯作者：未说明
- 作者列表：Dekun Chen (The Chinese University of Hong Kong, Shenzhen), Xueyao Zhang (The Chinese University of Hong Kong, Shenzhen), Yuancheng Wang (The Chinese University of Hong Kong, Shenzhen), Kenan Dai (Huawei Technologies Co., Ltd.), Li Ma (Huawei Technologies Co., Ltd.), Zhizheng Wu (The Chinese University of Hong Kong, Shenzhen; Shenzhen Loop Area Institute; City University of Macau; Amphion Technology Co., Ltd.)

#

💡 **毒舌点评**

这篇论文的亮点在于清晰地诊断了指令TTS中的“风格-音色-内容冲突”并设计了系统性的PPT训练方案（DPO对齐→多目标GRPO解耦→ALM奖励泛化）来解决它，实验设计严谨，结果提升显著。短板在于其强大的性能高度依赖于精细调参和多阶段训练流程（总计约3.5天A800），且将风格控制能力部分归因于数据构建，其方法对于更开放的、非情感类指令的鲁棒性仍有待大规模验证。

#

🔗 **开源详情**

- 代码：论文中未提及具体代码仓库链接，但明确表示将发布“所有训练和推理代码”。
- 模型权重：论文中未提及具体权重链接，但明确表示将发布“模型检查点”。
- 数据集：将发布自建的“FlexiVoice-Instruct”指令语音数据集。
- Demo：提供了在线音频样例演示网站：https://flexi-voice.github.io/
- 复现材料：非常充分。论文正和附录详细描述了数据预处理、模型结构、训练策略、超参数、硬件环境（8xA800, 3.5天）、评估设置。附录A.10专门说明复现细节。
- 论文中引用的开源项目：Phi-3.5-mini-instruct (LLM), Emilia (数据集), DualCodec (语音分词器), Emotion2vec-Large (情感识别), CAM++ (说话人验证), Kimi-Audio-7B-Instruct (奖励模型), Vocos (声码器), Deepseek-V3 (数据标注)。

📌 **核心摘要**

本文旨在解决零样本TTS中同时控制语音风格（通过自然语言指令）和音色（通过参考语音）时存在的纠缠问题。核心方法FlexiVoice基于大语言模型（LLM），并提出一种创新的渐进式后训练（PPT）框架，该框架包含三个阶段：1）使用直接偏好优化（DPO）进行多模态对齐；2）使用多目标分组相对策略优化（GRPO）解耦风格与音色/内容；3）使用音频语言模型（ALM）奖励进行复杂指令泛化。与现有方法相比，其新意在于首次提出通过课程学习方式的强化学习策略，专门针对TTS中的多模态因素解耦。主要实验表明，FlexiVoice在多模态解耦评估（如英语TR-hard任务中，指令遵循准确率ACC-I达78.2%，而参考音色干扰ACC-R降至10.6%）和复杂指令遵循基准（InstructTTSEval英文平均79.3%，接近Gemini-Pro的80.3%）上均大幅超越基线模型。其实际意义在于推动了更灵活、精准的语音内容生成，主要局限性在于训练流程复杂，且风格控制能力可能受预训练数据分布影响。

#

---

### 11. [TTSDS2: Resources and Benchmark for Evaluating Human-Quality Text to Speech Systems](/audio-paper-digest-blog/posts/2026-05-03-ttsds2-resources-and-benchmark-for-evaluating)

✅ **7.5/10** | 前25% | #语音合成 | #模型评估 | #多维度评估 #多语言

👥 **作者与机构**

- 第一作者：Christoph Minixhofer（爱丁堡大学语音技术研究中心）
- 通讯作者：未说明（论文中未明确指出通讯作者）
- 作者列表：Christoph Minixhofer（爱丁堡大学语音技术研究中心）、Ondrej Klejch（爱丁堡大学语音技术研究中心）、Peter Bell（爱丁堡大学语音技术研究中心）

💡 **毒舌点评**

本文最大的亮点在于，它通过系统性的评估，首次证明了TTSDS2是一个在所有测试领域（干净、嘈杂、野生、儿童语音）和主观指标（MOS、CMOS、SMOS）上都能与人类判断保持较高相关性（ρ > 0.5）的客观指标，解决了当前TTS评估指标“领域漂移”的痛点。然而，其短板在于计算开销显著高于其他单一指标，且其有效性依赖于多个预训练语音识别模型的特征提取，这本身引入了额外的依赖和计算成本。

🔗 **开源详情**

- 代码：提供评估流水线代码库链接：github.com/ttsds/pipeline。
- 模型权重：论文中评估的20个TTS系统的权重均开源（见表6及附录A）。TTSDS2指标所依赖的特征提取模型（如HuBERT, wav2vec 2.0, Whisper等）权重均来自其他开源项目。
- 数据集：公开了包含11,282条匿名评分的听测数据集：hf.co/datasets/ttsds/listening_test。自动化流水线可重建多语言评估数据集。
- Demo：论文中未提及在线演示。相关结果发布在 ttsdsbenchmark.com。
- 复现材料：提供了详细的听测指南、调查问卷示例（附录B）、系统选择细节（附录A）、相关性计算代码（使用VERSA工具包）和消融实验设置。
- 论文中引用的开源项目：大量依赖，包括但不限于：LIBRITTS, Whisper, LibriVox, YouTube数据, Emilia数据集处理方法, XNLI, Pyannote, Demucs, 各个TTS系统（Bark, E2-TTS, F5-TTS等），以及多个说话人嵌入模型（ESPnet-SPK中的RawNet3, ECAPA-TDNN, X-Vectors）。

📌 **核心摘要**

本文针对当前语音合成（TTS）系统质量已接近甚至超越人类水平，导致传统评估方法（尤其是MOS）在不同研究间不可比、且客观指标缺乏验证的挑战，提出了一套更鲁棒的评估框架和资源。

1.  要解决什么问题：如何可靠地评估与真实语音难以区分的高质量、多语言TTS系统，并确保评估指标在不同领域（干净、嘈杂、野生、儿童语音）和语言下保持有效性和可比性。
2.  方法核心是什么：提出了TTSDS2（Text-to-Speech Distribution Score 2），一个分布式的、因子化的客观评估指标。它从四个感知维度（通用性、说话人、韵律、可懂度）提取多种自监督学习特征，通过计算合成语音特征分布与真实语音分布及噪声分布的Wasserstein距离，来量化合成语音与真实语音的分布相似度。
3.  与已有方法相比新在哪里：a) 因子化设计：将整体分数分解为四个可解释的感知因子；b) 分布式比较：使用多特征集成的Wasserstein距离，而非逐文件比较，更符合生成任务的“一对多”本质；c) 多语言扩展：通过更换多语言自监督模型（如mHuBERT）实现多语言评估；d) 自动化基准：提供了持续生成和评估多语言TTS系统的自动化流水线。
4.  主要实验结果如何：在涵盖20个开源TTS系统、14种语言、4个领域的大规模人工听测数据（超过11,000个评分）上验证。结果显示，在16个客观指标中，TTSDS2是唯一一个在所有测试条件（4个领域 × 3个主观指标）下Spearman相关系数均大于0.5的指标，平均相关系数达0.67。相比之下，表现第二好的说话人相似度指标（RawNet3）平均相关系数为0.6，但在部分领域表现不稳定。
5.  实际意义是什么：a) 为TTS研究社区提供了一个可靠、可复现、可比较的客观评估“黄金标准”；b) 其自动化流水线支持定期更新基准，避免数据泄露；c) 促进了多语言TTS系统的公平比较。
6.   主要局限性是什么：a) 计算开销大：由于提取多种特征并计算Wasserstein距离，其计算成本显著高于其他指标；b) 依赖ASR模型：可懂度因子依赖于Whisper等ASR模型的激活，可能将ASR本身的偏见或错误引入评估；c) 无法替代主观评估：其相关系数上限（ρ ≈ 0.8）表明它无法完全捕捉人类判断的所有方面，仍存在固有噪声；d) 无法检测转录忠实性错误。

### 01.模型架构
本文的核心贡献TTSDS2是一个评估指标（Metric），而非一个用于语音生成的模型。其架构体现在其计算流程和因子化框架上。

整体流程：
1.  输入：一组合成语音样本集 `D̃`，其对应的文本；一组真实语音参考集 `D`（无需内容匹配）；以及一组噪声参考集 `D_noise`（包含均匀噪声、高斯噪声等）。
2.  特征提取：对`D̃`和`D`中的每个音频，从四个因子（见表1）中提取多个特征表示。
    *   GENERIC：提取WavLM, HuBERT, wav2vec 2.0 (或其多语言版本) 的最后一层隐藏层激活。
    *   SPEAKER：提取WeSpeaker和d-Vector说话人嵌入。
    *   PROSODY：计算WORLD基频(F0)轮廓、HuBERT和Allosaurus的说话率（去重token数/帧数）。
    *   INTELLIGIBILITY：提取Whisper ASR模型的最后隐藏层激活，以及wav2vec 2.0的ASR激活。
3.  分布比较：对于每个特征维度（如某个模型的激活向量、F0曲线等），计算合成集特征分布与真实集特征分布之间的2-Wasserstein距离 `W2_real`，以及合成集与所有噪声集之间的最小Wasserstein距离 `W2_noise`。
4.  相似度打分：利用公式 (1) 将距离转换为0-100的分数：`Score = 100 * W2_noise / (W2_real + W2_noise)`。分数越高表示越接近真实语音。
5.  聚合：将同一因子下所有特征的分数取平均，得到该因子的分数。最终TTSDS2得分是四个因子分数的简单算术平均。

关键设计选择与动机：
*   使用Wasserstein距离：因为它能区分不重叠的分布，且具有直观的“搬土距离”解释，优于KL散度或JS散度。
*   因子化与多特征：旨在提供可解释性（知道分数在哪个维度高低），并通过集成多个特征增强鲁棒性，减少对单一特征过拟合的风险。
*   简单平均因子分数：论文通过留一法交叉验证（表4）证明，简单平均相比学习权重更不易过拟合，且在未知领域表现更稳定，使TTSDS2成为一个无需领域特定调参的无监督指标。

![图1: 不同类型数据（噪声、真实、合成）的F0特征分布示意图](icassp-img://uGai5lYHlV/0.png)
图1直观展示了TTSDS2的核心思想：比较合成语音（蓝色）的特征分布（如F0）是更接近真实语音（绿色）还是噪声（红色）。

### 02.核心创新点
1.  首个跨领域一致性强的TTS客观评估指标：在前所未有的大规模、多领域、多系统评估中，TTSDS2是唯一在所有条件下与人类判断保持稳健相关（ρ > 0.5）的指标，解决了以往指标（如UTMOS、Audiobox Aesthetics）仅在特定领域有效的问题。
2.  因子化、分布式评估框架：将评估分解为多个感知维度（通用性、说话人、韵律、可懂度），每个维度使用多个特征进行分布式比较。这不仅提高了分数的鲁棒性和可解释性，还使得所需样本量远少于传统分布指标（如FAD）。
3.  多语言TTS评估基准与自动化流水线：发布了首个覆盖14种语言的TTS评估基准，并提供了一个可自动从YouTube爬取、预处理、合成和评估的流水线（代码开源）。该流水线通过定期重建数据集来避免数据污染，保证了基准的长期有效性和公平性。

### 03.细节详述
- 训练数据：
    - 用于听测的评估数据集：从LibriTTS测试集（干净朗读）、2025年LibriVox（嘈杂）、2025年YouTube视频（野生）和My Science Tutor（儿童语音）中，为每个数据集选取60位说话人，每人两段话。一段用作参考，另一段的文本用于合成。共涉及20个TTS系统。
    - 用于TTSDS2分布比较的参考集：真实语音参考集 `D` 与听测集共享相同来源但内容独立。噪声参考集 `D_noise` 包含四种类型（均匀噪声、全1信号、全0信号、高斯噪声），存储在Hugging Face上。
- 损失函数：未说明（TTSDS2是评估指标，非训练模型）。
- 训练策略：未说明（TTSDS2是评估指标，非训练模型）。论文中对比的其他MOS预测网络（如UTMOS, SQUIM）的训练细节未在本文详细展开。
- 关键超参数：
    - TTSDS2计算：每个评估需要约50-100个样本。特征提取使用预训练模型（HuBERT-base, wav2vec 2.0-base, WavLM-large, Whisper-small等）。距离计算使用2-Wasserstein距离。
    - 听测设计：200名标注员（每数据集50名），每人约30分钟。MOS为5分制，CMOS为-3到+3分制，SMOS为5分制。
- 训练硬件：未说明（针对TTSDS2指标本身）。论文中提及所有TTS系统的合成在单个A100 GPU上耗时28.8小时。每个TTSDS2分数计算在Intel Xeon E5-2620 v4 CPU上约耗时9.4分钟。
- 推理细节：对于被评估的20个TTS系统，使用其在2025年1月1日之前发布的最新检查点，并使用提供的代码和权重进行零样本语音克隆合成。
- 正则化或稳定训练技巧：未说明。

### 04.实验结果
本文的核心实验是验证TTSDS2与人类听测结果的相关性。

1. 主要相关性结果（表3）：在16个客观指标中，TTSDS2是唯一在所有12个“领域-主观指标”组合上Spearman ρ > 0.5的指标。

| 指标 | Clean MOS | Noisy MOS | Wild MOS | Kids MOS | 平均MOS | …（其他列省略） |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| TTSDS2 (Ours) | 0.75 | 0.59 | 0.75 | 0.61 | 0.675 | … |
| TTSDS (原版) | 0.60 | 0.49 | 0.67 | 0.70 | 0.615 | … |
| RawNet3 (说话人相似) | 0.36 | 0.44 | 0.85 | 0.64 | 0.5725 | … |
| SQUIM (MOS预测) | 0.68 | 0.48 | 0.62 | 0.57 | 0.5875 | … |
| X-Vector (说话人相似) | 0.46 | 0.40 | 0.82 | 0.70 | 0.595 | … |
| UTMOSv2 | 0.39 | 0.34 | 0.16 | 0.05 | 0.235 | … |
| FAD (CLAP) | -0.22 | 0.45 | -0.03 | 0.12 | 0.08 | … |

关键结论：TTSDS2在所有领域都保持强相关，而其他指标（如说话人相似度在Clean域表现差，MOS预测网络在Wild/Kids域崩溃）则表现不稳定。TTSDS2的平均相关性(0.67)比其原版(0.615)提升约10%。

2. 系统排名结果（表2）：TTSDS2分数与人类MOS、CMOS的排序在前四和后三名系统上高度一致。

| 系统 | 平均MOS | 平均CMOS | TTSDS2分数 |
| :--- | :---: | :---: | :---: |
| Ground Truth | 3.70 | 0.00 | 93.21 |
| E2-TTS | 3.41 | -0.23 | 91.73 |
| MaskGCT | 3.28 | -0.17 | 91.76 |
| F5-TTS | 3.33 | -0.34 | 91.16 |
| … (中间系统省略) | | | |
| NaturalSpeech2 | 2.05 | -1.42 | 81.71 |
| SpeechT5 | 1.98 | -1.56 | 84.84 |

3. 多语言验证（图3）：TTSDS2分数在14种语言的真实语音上分布紧凑（分数高），且低资源语言分数稍低，符合预期。TTSDS2计算出的语言距离与语言学家定义的类型学距离（Uriel+）显著相关（ρ = -0.51）。

![图2: TTSDS2、SQUIM MOS、X-Vector说话人相似度三个指标与人类MOS的相关性散点图，展示了不同领域（颜色/形状）的分布。](icassp-img://uGai5lYHlV/1.png)
图2显示TTSDS2（左图）的预测点沿对角线分布更均匀，而SQUIM MOS（中图）和X-Vector（右图）在某些领域存在聚类现象，可能表明其对某些系统类型敏感。

![图3: 14种语言的真实语音在TTSDS2指标上的得分分布。](icassp-img://uGai5lYHlV/2.png)
图3表明TTSDS2在多语言场景下具有一致性，不同语言的真实语音得分均处于高值区间（80-95）。

### 05.评分理由
- 学术质量：7.0/7 - 创新性良好，提出了一个解决实际痛点的、经过充分验证的新评估指标框架。技术路线清晰（因子化分布比较），实验设计严谨（大规模人工听测、多领域多系统对比、消融实验）。证据可信度高，数据和代码部分开源。不足之处在于，指标本身并非一个端到端的生成模型，其“创新”更多体现在系统集成与评估范式上，而非单一算法的突破。
- 选题价值：1.0/2 - TTS评估是当前领域的关键瓶颈，该工作直击痛点，为社区提供了急需的标准化工具，具有很高的实用价值和潜在影响力。与语音合成、模型评估领域的读者高度相关。
- 开源与复现加成：0.5/1 - 论文开源了评估流水线（github.com/ttsds/pipeline）、听测数据（hf.co/datasets/ttsds/listening_test）和噪声参考集。提供了详细的实验设置和超参数。但未开源TTSDS2指标本身的独立计算库，也未提供预训练的特征提取模型权重（尽管可从其引用的论文获取）。总体复现友好度较高。

## 开源详情
- 代码：提供评估流水线代码库链接：github.com/ttsds/pipeline。
- 模型权重：论文中评估的20个TTS系统的权重均开源（见表6及附录A）。TTSDS2指标所依赖的特征提取模型（如HuBERT, wav2vec 2.0, Whisper等）权重均来自其他开源项目。
- 数据集：公开了包含11,282条匿名评分的听测数据集：hf.co/datasets/ttsds/listening_test。自动化流水线可重建多语言评估数据集。
- Demo：论文中未提及在线演示。相关结果发布在 ttsdsbenchmark.com。
- 复现材料：提供了详细的听测指南、调查问卷示例（附录B）、系统选择细节（附录A）、相关性计算代码（使用VERSA工具包）和消融实验设置。
- 论文中引用的开源项目：大量依赖，包括但不限于：LIBRITTS, Whisper, LibriVox, YouTube数据, Emilia数据集处理方法, XNLI, Pyannote, Demucs, 各个TTS系统（Bark, E2-TTS, F5-TTS等），以及多个说话人嵌入模型（ESPnet-SPK中的RawNet3, ECAPA-TDNN, X-Vectors）。

---

### 12. [MambaVoiceCloning: Efficient and Expressive Text-to-Speech via State-Space Modeling and Diffusion Control](/audio-paper-digest-blog/posts/2026-05-03-mambavoicecloning-efficient-and-expressive-text)

✅ **7.0/10** | 前25% | #语音合成 | #扩散模型 | #流式处理 #状态空间模型

👥 **作者与机构**

- 第一作者：Sahil Kumar（Yeshiva University, PhD Program in Mathematics）
- 通讯作者：Youshan Zhang（Chuzhou University, School of Artificial Intelligence）
- 作者列表：Sahil Kumar（Yeshiva University）、Namrataben Patel（Yeshiva University）、Honggang Wang（Yeshiva University, Department of Computer Science & Engineering）、Youshan Zhang（Chuzhou University）

💡 **毒舌点评**

本文的亮点在于严谨的实验设计和对“完全SSM”这一工程问题的执着探索，成功地将TTS的条件路径从“混合注意力”推向了“纯SSM”，实现了更低的内存占用和更快的编码器吞吐，这对部署很友好。但短板也很明显：性能提升幅度（MOS约0.07）更像是一种“效率优化”的副产品，核心的语音质量和表现力并未超越现有方法（如StyleTTS2）一个身位，扩散解码器依然是主要的延迟瓶颈。

🔗 **开源详情**

- 代码： 论文明确提供了代码仓库链接：`https://github.com/sahilkumar15/MVC`。
- 模型权重： 论文中未提及是否公开预训练模型权重。
- 数据集： 使用的训练数据集（LJSpeech, LibriTTS）和评估数据集（VCTK, CSS10, Gutenberg）均为公开或可公开获取的。论文未提及提供新数据集。
- Demo： 论文中未提及在线演示。
- 复现材料： 非常充分。论文在附录B.8提供了完整的训练算法（Algorithm 1），附录C.2详细列出了优化器设置、学习率、批量大小等训练策略，附录C.4总结了所有基线的配置。关键的Mamba超参数（状态维度、卷积核、温度）及其敏感性分析也在附录E.3中给出。
- 论文中引用的开源项目： `phonemizer`（文本音素化）、`HiFi-GAN`（声码器）、`iSTFTNet`（声码器）、`ESPnet`（用于WER评估的语音识别模型）。

📌 **核心摘要**

这篇论文旨在解决现有基于扩散的语音合成（TTS）系统中，条件路径（文本、节奏、韵律）仍依赖注意力或循环模块，导致计算复杂度高、内存占用大、流式处理困难的问题。论文核心方法是设计了一个名为MambaVoiceCloning (MVC) 的系统，用三个选择性状态空间模型（SSM）模块完全替代了推理时的注意力：一个门控双向Mamba文本编码器、一个监督对齐的Temporal Bi-Mamba和一个带有AdaLN调制的Expressive Mamba。与已有Mamba-TTS混合系统相比，新在推理时移除了所有注意力层，实现了O(T)的线性复杂度和有界激活内存，并采用了门控双向融合机制替代了简单的拼接。主要实验在LJSpeech/LibriTTS上训练，在VCTK/CSS10长文本等上评估，结果显示：MVC在保持或小幅提升MOS（+0.07）、MCD、PESQ等指标的同时，将编码器参数降至21M，吞吐量提升1.6倍，并在长文本合成上表现出更好的稳定性。论文的实际意义在于为TTS提供了一种更高效、更易于部署和流式化的条件编码器架构。主要局限性是，性能提升幅度有限，且扩散解码器依然是主要延迟来源，论文未涉及细粒度情感控制。

### 主要实验结果表格

表1：主观评估（未见LibriTTS说话人）
| 模型 | MOS-N ↑ | MOS-S ↑ |
| :--- | :--- | :--- |
| Ground Truth | 4.60 | 4.35 |
| VITS | 3.69 | 3.54 |
| StyleTTS2 | 4.15 | 4.03 |
| MVC (ours) | 4.22 | 4.07 |

表4：LJSpeech上的客观指标
| 模型 | F0 RMSE ↓ | MCD ↓ | WER ↓ | PESQ ↑ | RTF ↓ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| VITS | 0.667 ± 0.011 | 4.97 ± 0.09 | 7.23% | 3.64 ± 0.08 | 0.0211 |
| StyleTTS2 | 0.651 ± 0.013 | 4.93 ± 0.06 | 6.50% | 3.79 ± 0.07 | 0.0174 |
| MVC (ours) | 0.653 ± 0.014 | 4.91 ± 0.07 | 6.52% | 3.85 ± 0.06 | 0.0169 |

表5：流式性能（2-6分钟Gutenberg段落）
| Look-ahead L (s) | WER | MOS |
| :--- | :--- | :--- |
| 0.25 | 11.2% | 3.74 |
| 0.50 | 9.4% | 3.81 |
| 1.00 | 7.8% | 3.89 |
| 2.00 | 7.3% | 3.91 |

表12：协议匹配的Mamba-TTS基线对比（LJSpeech）
| 模型 | F0 RMSE ↓ | MCD ↓ | WER ↓ | PESQ ↑ | RTF ↓ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Hybrid-Mamba (Concat) | 0.659 ± 0.013 | 4.95 ± 0.07 | 6.68% | 3.79 ± 0.06 | 0.0189 |
| Bi-Mamba (Concat-only) | 0.656 ± 0.014 | 4.93 ± 0.06 | 6.58% | 3.82 ± 0.06 | 0.0181 |
| MVC (gated + AdaLN) | 0.653 ± 0.014 | 4.91 ± 0.07 | 6.52% | 3.85 ± 0.06 | 0.0177 |

---

