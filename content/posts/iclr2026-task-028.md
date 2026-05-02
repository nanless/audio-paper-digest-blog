---
title: "ICLR 2026 - 语音识别 论文列表"
date: 2026-05-03
draft: false
tags: ["语音识别"]
categories: [iclr-2026]
description: "共 7 篇 ICLR 2026 语音识别 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音识别

共 **7** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [StableToken: A Noise-Robust Semantic Speech Tokenizer for Re](/audio-paper-digest-blog/posts/2026-05-03-stabletoken-a-noise-robust-semantic-speech) | 9.0分 | 前10% |
| 🥈 | [Speech-to-LaTeX: New Models and Datasets for Converting Spok](/audio-paper-digest-blog/posts/2026-05-03-speech-to-latex-new-models-and-datasets-for) | 8.5分 | 前25% |
| 🥉 | [Pay Attention to CTC: Fast and Robust Pseudo-Labelling for U](/audio-paper-digest-blog/posts/2026-05-03-pay-attention-to-ctc-fast-and-robust-pseudo) | 8.5分 | 前25% |
| 4. | [Confident and Adaptive Generative Speech Recognition via Ris](/audio-paper-digest-blog/posts/2026-05-03-confident-and-adaptive-generative-speech) | 8.0分 | 前25% |
| 5. | [A cross-species neural foundation model for end-to-end speec](/audio-paper-digest-blog/posts/2026-05-03-a-cross-species-neural-foundation-model-for-end) | 7.5分 | 前25% |
| 6. | [SumRA: Parameter Efficient Fine-tuning with Singular Value D](/audio-paper-digest-blog/posts/2026-05-03-sumra-parameter-efficient-fine-tuning-with) | 7.5分 | 前25% |
| 7. | [CTC-DRO: Robust Optimization for Reducing Language Dispariti](/audio-paper-digest-blog/posts/2026-05-03-ctc-dro-robust-optimization-for-reducing-language) | 6.7分 | 前25% |

---

## 📋 论文详情

### 🥇 [StableToken: A Noise-Robust Semantic Speech Tokenizer for Resilient SpeechLLMs](/audio-paper-digest-blog/posts/2026-05-03-stabletoken-a-noise-robust-semantic-speech)

🔥 **9.0/10** | 前10% | #语音识别 | #对抗样本 | #语音大模型 #端到端

👥 **作者与机构**

- 第一作者：Yuhan Song（北京大学多媒体信息处理国家重点实验室，计算机科学学院）
- 通讯作者：Linhao Zhang（腾讯微信AI基础模型技术中心）、Houfeng Wang（北京大学多媒体信息处理国家重点实验室，计算机科学学院）
- 作者列表：Yuhan Song（北京大学）、Linhao Zhang（腾讯微信AI基础模型技术中心）、Chuhan Wu（腾讯微信AI基础模型技术中心）、Aiwei Liu（腾讯微信AI基础模型技术中心）、Wei Jia（腾讯微信AI基础模型技术中心）、Houfeng Wang（北京大学）、Xiao Zhou（腾讯微信AI基础模型技术中心）

💡 **毒舌点评**

本文最亮眼的地方在于它精准地指出了一个行业“皇帝的新衣”——那些被广泛使用的语义分词器在噪声面前异常脆弱，并给出了一个设计优雅、效果拔群的解决方案（多分支投票）。其短板或许在于，这种基于多分支的“民主”机制在面临极端“多数派错误”（尽管论文分析表明位级错误比词级错误稀疏得多）时是否还有更深入的理论分析或防御机制，探讨略显不足，不过这或许已超出了当前工作的范围。

🔗 **开源详情**

- 代码：论文明确提供代码仓库链接：https://github.com/Tencent/StableToken。
- 模型权重：论文承诺公开模型权重（“Our code and model are publicly available”）。
- 数据集：论文详细列出了训练所用的所有开源数据集（见附录表7），但未提及会公开一个新的专用数据集。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极其充分的复现材料，包括详细的训练数据配置（附录B.1）、超参数设置（附录B.2）、噪声增强细节（附录B.3）、音频重建流程（附录B.5）、计算效率分析（附录B.6）、消融实验设置（附录C）以及完整的下游任务评估设置（附录F）。
- 依赖的开源项目/模型：Whisper-large-v3（作为编码器骨干）、Qwen2.5-3B（作为下游LLM基座）、HiFi-GAN（用于音频重建）、THOP库（用于FLOPs计算）、FairSeq（用于部分基线）等。

📌 **核心摘要**

本文旨在解决当前主流的有监督语义语音分词器在噪声环境下输出序列不稳定（脆弱性）的关键问题，这种不稳定会严重损害下游语音大模型的性能。为解决该问题，论文提出了StableToken，其核心是多分支投票-LFQ模块与噪声感知共识训练策略。该方法通过多个并行分支处理输入，并在位级进行多数投票以产生稳定的共识token，从而在架构上内置了容错能力；同时，通过让少数分支处理加噪声版本，多数分支处理干净版本，并利用共识损失迫使它们对齐，从而显式训练模型学习噪声不变性。与现有最强的S3分词器相比，StableToken将平均单元编辑距离（UED）从26.17%大幅降低至10.17%，相对改进超过60%，在各类合成及真实噪声下均取得了新的最佳性能。这一改进直接转化为下游任务的鲁棒性提升：在抗噪ASR中，其WER相比基线在低信噪比下降低超过30%；在语音情感识别中，其准确率在噪声下下降更慢；在语音合成中，也取得了更低的WER和相当的MOS分数。论文的主要贡献是首次系统性地揭示了现有语义分词器的脆弱性根源，并提出了一个在架构和训练上协同设计的、高效（推理开销可忽略）的鲁棒分词器。其局限性可能包括训练流程相对复杂，以及大词表可能带来的潜在挑战。

---

### 🥈 [Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences](/audio-paper-digest-blog/posts/2026-05-03-speech-to-latex-new-models-and-datasets-for)

🔥 **8.5/10** | 前25% | #语音识别 | #数据集 | #多语言 #大语言模型

👥 **作者与机构**

- 第一作者：Dmitrii Korzh (AXXX, Moscow, Russia; MTUCI, Moscow, Russia)
- 通讯作者：未说明
- 作者列表：
    - Dmitrii Korzh (AXXX, Moscow, Russia; MTUCI, Moscow, Russia)
    - Dmitrii Tarasov (FusionBrain Lab, AXXX, Moscow, Russia; HSE University, Moscow, Russia)
    - Artyom Iudin (MTUCI, Moscow, Russia)
    - Elvir Karimov (MTUCI, Moscow, Russia; Applied AI Institute, Moscow, Russia)
    - Matvey Skripkin (FusionBrain Lab, AXXX, Moscow, Russia; Applied AI Institute, Moscow, Russia)
    - Nikita Kuzmin (MTUCI, Moscow, Russia; Applied AI Institute, Moscow, Russia)
    - Andrey Kuznetsov (FusionBrain Lab, AXXX, Moscow, Russia; Innopolis University, Innopolis, Russia)
    - Oleg Y. Rogov (AXXX, Moscow, Russia; MTUCI, Moscow, Russia; Applied AI Institute, Moscow, Russia)
    - Ivan Oseledets (AXXX, Moscow, Russia; Moscow State University, Moscow, Russia)

💡 **毒舌点评**

这篇论文的亮点在于其系统性：不仅提出了首个大规模、多语言、开源的Speech-to-LaTeX数据集，还全面比较了ASR后校正和端到端Audio-LLM两种技术路线，并对多语言、合成数据效用等问题进行了深入消融，为垂直领域的语音识别研究树立了扎实的基线。短板则在于，尽管方法论完备，但其模型在处理高度歧义和嵌套的数学语句时CER依然偏高（40%），且评估主要依赖合成音频，距离真正解决课堂笔记转录等真实复杂场景的鲁棒性仍有明显距离。

🔗 **开源详情**

- 代码：提供开源代码仓库链接：https://github.com/dkorzh10/speech2latex
- 模型权重：论文中未明确提及是否公开了训练好的模型权重（如LoRA适配器）。提到“模型权重”部分未说明。
- 数据集：公开，提供HuggingFace链接：https://huggingface.co/datasets/marsianin500/Speech2Latex
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的训练超参数（附录B），包括优化器、学习率、batch size、LoRA参数等。提供了评估指标的详细定义（附录A.2）和额外的实验结果表格（附录C）。
- 论文中引用的开源项目：包括Whisper, Wav2Vec 2.0, WavLM, XTTSv2, KaTeX, Qwen2.5, LLaMA, SALMONN, Gemma, Audio Flamingo等。

📌 **核心摘要**

本文旨在解决将口头数学表达式和句子准确转换为结构化LaTeX符号的挑战。核心方法是构建并发布了一个大规模、多语言的开源数据集S2L（包含66k人工和571k合成音频样本），并系统评估了基于ASR后校正（ASR + LLM）和基于Audio-LLM（如SALMONN）的端到端两种技术路线。相比之前工作（如MathSpeech），本文的数据集首次提供了大规模训练数据、覆盖孤立方程和上下文句子、支持英语和俄语双语。主要实验结果表明：在S2L-equations基准上，本文模型（如Qwen2.5-0.5B）的CER为27.2%，显著优于MathSpeech模型在该基准上的64.0%；在MathSpeech基准上，本文模型CER为30.0%，与MathSpeech的27.7%具有可比性。本文还建立了首个数学句子识别基准（S2L-sentences），最佳模型（SALMONN-13B）的方程CER为39.7%。本工作为教育转录、多模态数学助手等应用奠定了基础，但其数据与模型在真实、复杂课堂场景下的鲁棒性仍是主要局限。

### 实验结果关键数据表

表2 (S2L-Equations， 英语测试集关键行)
| 模型 | 训练数据 | CER (Test) | TeXBLEU (Test) | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| MathSpeech | MS-train | 64.04% | 83.71% | 基线 |
| Qwen2.5-0.5B | Mix-full (Eng+Rus) | 27.21% | 90.20% | 本文最佳后校正模型 |
| SALMONN-13B | Mix-full (Eng) | 17.50% | 93.68% | 本文最佳端到端模型 |

表4 (与MathSpeech直接对比)
| 模型 | MathSpeech基准 CER | S2L-equations CER |
| :--- | :--- | :--- |
| MathSpeech | 27.7% | 64.0% |
| Qwen2.5-0.5B | 30.0% | 27.2% |
| SALMONN-13B | 27.7% | 17.5% |

表5 (S2L-Sentences， 英语测试集关键行)
| 模型 | 训练数据 | 文本CER | 方程CER | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| Qwen2.5-7B (LoRA) | Mix | 12.36% | 43.75% | 本文最佳后校正模型 |
| SALMONN-13B | Mix | 9.57% | 39.68% | 本文最佳端到端模型 |

![论文中的图片](icassp-img://gk8WMxzIQP/4.png)
图1：展示了两种技术路线。(a) ASR后校正流程：音频->Whisper ASR->文本->LLaMA LLM->LaTeX。(b) 端到端多模态流程：音频->Whisper和BEATs编码器->适配器->LLaMA LLM->LaTeX。

---

### 🥉 [Pay Attention to CTC: Fast and Robust Pseudo-Labelling for Unified Speech Recognition](/audio-paper-digest-blog/posts/2026-05-03-pay-attention-to-ctc-fast-and-robust-pseudo)

🔥 **8.5/10** | 前25% | #语音识别 | #伪标签 | #统一音频模型 #半监督学习

👥 **作者与机构**

- 第一作者：Alexandros Haliassos（NatWest AI Research, Imperial College London）
- 通讯作者：Alexandros Haliassos（邮箱：alexandros.haliassos@natwest.com）
- 作者列表：Alexandros Haliassos¹，²， Rodrigo Mira²， Stavros Petridis¹，² (¹NatWest AI Research, ²Imperial College London)

💡 **毒舌点评**

这篇论文在工程设计上相当精巧，通过将CTC解码结果“喂”给注意力解码器，巧妙地绕过了自回归伪标签生成的速度瓶颈，同时提升了模型的鲁棒性，是一个典型的“四两拨千斤”式创新。不过，其理论根基稍显薄弱，对于“为什么教师和学生在相同条件输入下，即使教师生成的序列全局不一致也不影响知识传递”这一核心假设，更多是经验性的论证，缺乏更形式化的分析或更广泛的验证。

🔗 **开源详情**

- 代码：提供了官方代码仓库链接：https://github.com/ahaliassos/usr （在附录A.2中提及）。
- 模型权重：论文中未提及是否提供公开的预训练模型权重。
- 数据集：论文使用的数据集（LRS3, LRS2, VoxCeleb2, AVSpeech, LibriSpeech, WildVSR）均为公开学术数据集，并在附录A.1中说明了各自的许可协议和获取方式。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了极其详尽的实验设置，包括数据集预处理、模型架构细节（表5）、训练超参数（表6）、硬件配置、训练时长等，并承诺在补充材料中提供训练配置、数据集准备和评估代码。
- 引用的开源项目：论文在方法实现上依赖了ESPnet（用于联合CTC-注���力解码）和SentencePiece（用于分词）。在实验对比中，运行了AV-HuBERT、BRAVEn、USR的官方代码库。

📌 **核心摘要**

本文针对统一语音识别（USR）半监督训练框架中存在的自回归伪标签生成速度慢和分支解耦监督导致鲁棒性差两个核心问题，提出了USR 2.0。方法的核心是CTC驱动的教师强制：利用教师CTC分支快速解码出伪标签，经合并后作为固定输入，通过一次前向计算生成对应长度的注意力解码器伪标签，从而去除自回归瓶颈。进一步，设计了混合采样策略，交替使用CTC驱动模式和传统的自回归模式，以缓解训练-测试不匹配。

与原有USR相比，新方法的关键优势在于：1）训练效率大幅提升，训练时间减半；2）鲁棒性显著增强，在长语音、噪声和跨数据集（分布外）场景下WER大幅降低（例如，在LRS3测试集上AVSR的WER从3.0降至2.9；在WildVSR上从80.0%降至73.7%）。最终，USR 2.0在LRS3、LRS2和WildVSR等多个基准测试上取得了SOTA结果，证明了其有效性。该方法的实际意义在于推动了能够用单一模型处理音频、视频和音视频三种任务的统一语音识别系统的实用化。主要局限性在于，虽然提升了效率，但整体训练时长仍长于纯监督微调方法；此外，CTC分支的表达力上限可能约束了模型在极度复杂任务上的进一步提升。

---

### 4. [Confident and Adaptive Generative Speech Recognition via Risk Control](/audio-paper-digest-blog/posts/2026-05-03-confident-and-adaptive-generative-speech)

🔥 **8.0/10** | 前25% | #语音识别 | #风险控制 | #大语言模型 #零样本

👥 **作者与机构**

- 第一作者：Amit Damri (特拉维夫大学电气与计算机工程学院)
- 通讯作者：Bracha Laufer-Goldshtein (特拉维夫大学电气与计算机工程学院)
- 作者列表：Amit Damri (特拉维夫大学电气与计算机工程学院), Bracha Laufer-Goldshtein (特拉维夫大学电气与计算机工程学院)

#

💡 **毒舌点评**

亮点：论文将“风险控制”这一严谨的统计学框架巧妙地引入到语音识别后处理的生成式纠错任务中，为自适应选择假设集数量提供了坚实的理论保证，同时实验上实现了显著的计算节省（高达52%），是一次理论驱动工程优化的优秀示范。
短板：尽管提供了理论保证，但该方法在部署时仍需针对数据集进行参数（γ, τ）选择或分析，其“自动化”程度有限。此外，所控制的“相对WER退化”作为一个损失函数，虽然在理论上方便，但其绝对数值的大小对于实际应用决策的参考价值可能不如绝对WER直接。

#

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：https://github.com/amitdamritau/adaptive-ger。
- 模型权重：论文中未提及公开的微调模型权重。
- 数据集：实验使用的是公开的HyPoradise基准数据集（TedLium-3, CHiME-4, CommonVoice）。
- Demo：论文中未提及在线演示。
- 复现材料：论文在附录C和D中提供了详细的LLM训练超参数、提示模板、计算需求以及风险控制框架的实现细节。
- 引用的开源项目：论文中引用了Whisper、LLaMA-2、PEFT、HyPoradise等开源工具/模型。

📌 **核心摘要**

1.  要解决的问题：生成式语音识别纠错（GER）通常为所有输入音频使用固定大小的N-best假设集。这导致简单音频处理冗余、计算浪费，而复杂音频可能引入低质量假设，降低纠错效果，且现有方法缺乏性能的统计保证。
2.  方法核心：提出一个自适应框架，利用“Learn Then Test”(LTT)风险控制方法，根据ASR置信度分数动态决定每个音频输入应送入LLM的最优假设子集大小。该机制旨在控制预期相对WER退化（相对于该模型在给定假设集下能达到的最佳性能），并提供高概率的理论界限。
3.  与已有方法相比新在哪里：这是首次将风险控制框架应用于生成式语音识别纠错。与固定N-best假设集方法相比，它能自适应分配计算资源；与简单的置信度阈值方法相比，它提供了严格的理论保证而非经验选择。
4.  主要实验结果：在三个HyPoradise基准数据集（TedLium-3, CHiME-4, CommonVoice）上进行实验。结果表明，该方法在实现平均假设集大小减少23%（CHiME-4）至52%（TedLium-3）的同时，WER性能与固定N=5的基线持平甚至更优。例如，在TedLium-3上，平均假设数从5降至2.3，WER从7.53%提升至7.52%。同时，风险控制的经验成功率均超过理论最小值（1-δ），验证了理论保证的有效性。
5.  实际意义：为部署在复杂、多变声学条件下的ASR后处理系统提供了一种高效且可靠的自适应机制，能显著降低计算成本（尤其对于大规模服务），同时通过提供性能退化界限增强了系统的可信度。
6.  主要局限性：方法的有效性部分依赖于数据集特定的参数（γ, τ）选择（尽管论文探索了自动化途径）。所控制的损失是“相对”退化，而非绝对错误率，这使得风险目标α的设定需要理解模型的能力边界。此外，其收益依赖于ASR置信度分数的可用性和质量。

#

---

### 5. [A cross-species neural foundation model for end-to-end speech decoding](/audio-paper-digest-blog/posts/2026-05-03-a-cross-species-neural-foundation-model-for-end)

✅ **7.5/10** | 前25% | #语音识别 | #自监督学习 | #预训练 #端到端

👥 **作者与机构**

- 第一作者：Yizi Zhang（哥伦比亚大学）
- 通讯作者：未明确说明（论文提供了第一作者的邮箱，但未明确指定通讯作者）
- 作者列表：Yizi Zhang（哥伦比亚大学）、Linyang He（哥伦比亚大学）、Chaofei Fan（斯坦福大学）、Tingkai Liu（微软）、Han Yu（哥伦比亚大学）、Trung Le（华盛顿大学）、Jingyuan Li（亚马逊）、Scott Linderman（斯坦福大学）、Lea Duncker（哥伦比亚大学）、Francis R Willett（斯坦福大学）、Nima Mesgarani（哥伦比亚大学）、Liam Paninski（哥伦比亚大学）

#

💡 **毒舌点评**

本文的亮点在于系统性创新：它首次成功地将跨物种、跨任务的大规模Transformer预训练范式引入侵入式语音脑机接口，并通过集成音频LLM将端到端解码的词错误率（WER）大幅降低至10.22%，显著缩小了与传统级联系统的差距，且展示了跨任务（尝试与想象语音）的泛化能力。短板则在于，其端到端方案的实际部署面临实时性挑战（解码耗时约0.95秒），且核心贡献更偏向于不同成熟技术（Transformer、自监督学习、LLM）的工程化整合与验证，而非提出全新的神经解码算法。

#

🔗 **开源详情**

*   代码：论文中未提及代码链接。
*   模型权重：未提及公开预训练的神经编码器或微调后的LLM解码器权重。
*   数据集：论文中使用的预训练数据（人类和猴子Utah阵列记录）和微调数据（Brain-to-Text '24/'25， 想象语音数据集）均引用自公开的学术数据集（如DRYAD, DANDI），并提供了引用。但论文本身未托管或重新发布数据集。
*   Demo：未提及。
*   复现材料：论文在附录和方法部分提供了相当详细的架构、超参数、训练硬件和流程信息，有助于同行复现。
*   论文中引用的开源项目：包括Ray Tune（超参数调优）、OPT（重打分）、Qwen系列模型（LLM解码器基础）、LoRA等。

📌 **核心摘要**

1. 要解决的问题：现有语音脑机接口多采用级联框架（先解码音素，再用语言模型组装句子），无法端到端优化，且音素错误率与最终词错误率存在脱节。同时，现有端到端方法未充分利用现代架构（如Transformer）和大规模预训练。
2. 方法核心：提出“BraIn-to-Text (BIT)”端到端框架。其核心是一个经过跨任务、跨物种（人类和猴子）自监督预训练的Transformer神经编码器，将Utah阵列记录的神经活动转化为高维表征。该编码器与预训练的音频LLM（如Aero1-Audio 1.5B）解码器通过MLP投影器和对比学习对齐，实现神经活动直接生成句子。
3. 新在哪里：1) 跨物种、跨任务的神经基础模型：在包含语音和手部运动任务的海量（367小时）人类与猴子神经数据上进行自监督预训练，学习通用的神经表征。2) 端到端神经-语音LLM集成：将神经编码器作为LLM的“感知器官”，借鉴视觉语言模型（如LLaVA）思路，通过轻量级投影和LoRA微调，实现神经信号到文本的端到端翻译。3) 跨任务泛化能力：该框架能使尝试语音和想象语音的神经嵌入在语义空间对齐，为低数据量的想象语音解码带来显著性能提升。
4. 主要实验结果：在Brain-to-Text '24基准测试上，BIT级联模型（使用5-gram LM）WER达到SOTA的6.35%。BIT端到端模型（使用Aero1-Audio 1.5B）将WER从先前端到端方法的24.69%降低至10.22%（集成后），性能提升超过50%。在想象语音任务上，预训练带来了比在尝试语音任务上更大的性能增益。

| 模型（在Brain-to-Text ‘24 验证集上） | 类型 | 词错误率 (WER) |
| :--- | :--- | :--- |
| Feng et al. (2024) 端到端 | 端到端 | 24.69% |
| BIT 端到端 | 端到端 | 15.67% |
| BIT 端到端 + 集成 | 端到端 | 10.22% |
| RNN (基线) | 级联 | 9.76% |
| Feghhi et al. (2025) | 级联 | 7.98% |
| BIT 级联 | 级联 | 6.35% |
| BIT 级联 + 集成 | 级联 | 5.10% |

| 模型（在Brain-to-Text ‘25 验证集上） | 类型 | 词错误率 (WER) |
| :--- | :--- | :--- |
| BIT 端到端 | 端到端 | 11.06% |
| BIT 端到端 + 集成 | 端到端 | 7.76% |
| RNN (基线) | 级联 | 6.67% |
| BIT 级联 | 级联 | 4.06% |
| BIT 级联 + 集成 | 级联 | 1.76% |

![图2：尝试与想象语音解码性能对比](icassp-img://Lp1noMpMUG/1.png)
图2显示，对于尝试语音（A）和想象语音（B），预训练的编码器（BIT-Human， BIT-All）在级联和端到端两种方式下都优于RNN和从头训练的Transformer。SSL预训练对想象语音的收益更大。图（C）和（D）展示了跨任务泛化和解码示例。

5. 实际意义：为瘫痪患者提供了更强大、更易优化的语音通信神经假体框架，推动了脑机接口与大语言模型的融合，是实现更自然、直接的神经-文本翻译的重要一步。
6. 主要局限性：1) 实时性差：端到端解码平均耗时约0.95秒，远高于级联方式的0.24秒，且双向注意力机制不适合在线解码。2) 数据依赖：编码器预训练需要大量无标签神经数据，LLM微调需要大量有标签数据。3) 计算开销：即使使用1.5B的小型音频LLM，也无法在边缘设备上实时运行。4) 跨物种数据效用有限：猴子运动任务数据对语音解码的贡献不如人类数据。

#

---

### 6. [SumRA: Parameter Efficient Fine-tuning with Singular Value Decomposition and Summed Orthogonal Basis](/audio-paper-digest-blog/posts/2026-05-03-sumra-parameter-efficient-fine-tuning-with)

✅ **7.5/10** | 前25% | #语音识别 | #参数高效微调 | #多语言 #低资源

👥 **作者与机构**

- 第一作者：Chin Yuen Kwok (南洋理工大学数字信任中心、计算机与数据科学学院)
- 通讯作者：Yongsen Zheng (南洋理工大学数字信任中心、计算机与数据科学学院)
- 作者列表：Chin Yuen Kwok¹²， Yongsen Zheng¹²*， Jia Qi Yip²， Kwok-Yan Lam¹²， Eng Siong Chng² (1: Digital Trust Centre, Nanyang Technological University, Singapore; 2: College of Computing and Data Science, Nanyang Technological University, Singapore)

💡 **毒舌点评**

亮点在于其“知识压缩包”式的初始化思路——与其用几个最主要的“知识方向”来微调，不如把所有方向都打包塞进一个低秩矩阵里，确实在多语言ASR这种需要全局调整的任务上效果拔群，参数还减半。但短板也很明显：这方法更像是给“调口音、适应新语言风格”这类任务量身定做的，如果下游任务只是学几个新词汇（如GLUE），这种“大锅烩”的初始化可能就派不上用场，论文自己也承认了这一局限性。

🔗 **开源详情**

- 代码：论文中未提及代码链接或开源计划。
- 模型权重：未提及公开适配后的模型权重。
- 数据集：实验使用的是公开的Common Voice数据集，但未提供处理后的数据脚本。
- Demo：未提及。
- 复现材料：论文详细描述了训练配置（优化器、学习率调度器、批次大小、验证频率等）、数据划分和关键超参数（如rank, α），提供了较好的复现基础。
- 论文中引用的开源项目：主要依赖Whisper模型和Common Voice数据集，但未在文中提供具体链接。

📌 **核心摘要**

1.  要解决什么问题：现有LoRA及其变体（如PiSSA）在用于适配多语言、个性化语音识别模型时，存在扩展性挑战（每个任务需存储独立参数）和初始化子优问题（仅利用少量主导奇异向量，限制了适配的知识范围）。
2.  方法核心是什么：提出SumRA。核心是初始化LoRA的下行投影矩阵A时，将其每一行初始化为预训练权重W0的多个奇异向量（而不仅是前几个）的加权和，并冻结A，仅训练上行投影矩阵B。这使A能覆盖更广的知识空间。为实现这一目标，提出了两种奇异向量分配策略：交织求和与贪婪求和，以确保重要的奇异值被均衡地分配到不同行，避免干扰。
3.  与已有方法相比新在哪里：相比标准LoRA，SumRA通过奇异向量求和与冻结A大幅减少了可训练参数（约50%）并共享A。相比PiSSA，SumRA利用了所有（而非仅前几个）奇异向量进行初始化，增强了适配的全局性。其设计灵感也与模型平均有关，但通过初始化实现，更高效。
4.  主要实验结果如何：在Common Voice的5种低资源语言（各10小时数据）上适配Whisper模型。主要结果见下表。SumRA在所有设置下均优于基线LoRA，且参数更少。例如，在Whisper-large-v2（rank=2）上，SumRA将平均WER从14.42%降至12.41%。

    | 模型 | 方法 | 额外参数 | Rank | eo | ia | fy-NL | mhr | kmr |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | whisper-small | LoRA | 0.5M | 2 | 28.76 | 19.99 | 50.81 | 53.75 | 60.10 |
    | whisper-small | SumRA (ours) | 0.4M | 2 | 26.29 | 17.23 | 44.92 | 48.49 | 54.32 |
    | whisper-small | LoRA | 7.7M | 32 | 23.39 | 15.31 | 39.34 | 40.63 | 48.51 |
    | whisper-small | SumRA (ours) | 3.9M | 32 | 20.77 | 13.38 | 33.37 | 36.30 | 44.47 |
    | whisper-large-v2 | LoRA | 2.4M | 2 | 15.96 | 9.85 | 29.24 | 39.02 | 44.55 |
    | whisper-large-v2 | SumRA (ours) | 1.6M | 2 | 14.55 | 9.30 | 25.83 | 34.72 | 38.63 |
    | whisper-large-v2 | LoRA | 34.3M | 32 | 14.42 | 8.67 | 24.75 | 32.39 | 37.72 |
    | whisper-large-v2 | SumRA (ours) | 17.6M | 32 | 12.41 | 8.17 | 22.27 | 27.19 | 34.21 |

    表：SumRA与LoRA基线在低资源多语言ASR任务上的WER（%）对比（越低越好）。
5.  实际意义是什么：为在海量用户或多语言场景下部署大型语音模型提供了一种更高效（参数减半）且性能更优的微调方案，显著降低了存储和部署成本。
6.  主要局限性是什么：该方法更适用于需要全局属性（如口音、说话风格）适应的任务，对于仅需学习局部新词汇的任务（如GLUE基准）优势可能有限。此外，论文未在更广泛的任务（如NLP）上验证其普适性。

---

### 7. [CTC-DRO: Robust Optimization for Reducing Language Disparities in Speech Recognition](/audio-paper-digest-blog/posts/2026-05-03-ctc-dro-robust-optimization-for-reducing-language)

✅ **6.7/10** | 前25% | #语音识别 | #鲁棒性 | #多语言 #低资源

👥 **作者与机构**

- 第一作者：Martijn Bartelds（斯坦福大学计算机科学系）
- 通讯作者：Martijn Bartelds（bartelds@stanford.edu）
- 作者列表：
  1. Martijn Bartelds（斯坦福大学计算机科学系）
  2. Ananjan Nandi（斯坦福大学计算机科学系）
  3. Moussa Koulako Bala Doumbouya（斯坦福大学计算机科学系）
  4. Dan Jurafsky（斯坦福大学计算机科学系）
  5. Tatsunori Hashimoto（斯坦福大学计算机科学系）
  6. Karen Livescu（丰田技术学院芝加哥分校）

💡 **毒舌点评**

亮点：论文直击了一个常被忽视但实际至关重要的工程痛点——CTC损失的固有特性会“欺骗”Group DRO的权重更新机制，导致越调越差；提出的“长度匹配批处理”和“光滑最大化”两招组合拳，既简单直观又效果显著，展现了扎实的系统设计思维。短板：其理论贡献主要局限于对现有DRO目标的平滑化修改，缺乏对更广泛意义上的“群组损失不可比”问题的统一理论分析；实验虽然充分，但基准场景完全集中在ML-SUPERB 2.0，算法在其他类型序列任务（如视频、文本）上的泛化潜力有待进一步验证。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接 `https://github.com/Bartelds/ctc-dro`。
- 模型权重：论文提及“our code and newly trained models are publicly available”， 并在附录中说明模型基于Apache 2.0和CC-BY-NC-4.0许可的预训练模型微调而来。
- 数据集：使用公开的ML-SUPERB 2.0基准，并提供了构建实验语言集的具体信息。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的算法描述（算法1），完整的实验设置（模型架构、超参数范围、数据划分、训练时长），以及消融实验、归一化实验的详细结果，复现信息非常充分。
- 论文中引用的开源项目：依赖的预训练模型包括XLS-R和MMS；数据集来自Common Voice， FLEURS， VoxForge等；实验框架可能基于ESPnet（致谢中提及）。

📌 **核心摘要**

本文针对多语言自动语音识别（ASR）中，标准群组分布鲁棒优化（Group DRO）因连接主义时序分类（CTC）损失的固有特性（随输入长度和语言属性变化）而失效的问题，提出了CTC-DRO算法。该算法通过两项核心改进来增强鲁棒性：一是采用“长度匹配”的批处理策略，确保每个群组（语言）的训练损失计算基于相似的总音频时长，以缓解CTC损失的尺度问题；二是引入“光滑最大化”目标来更新群组权重，防止权重过度集中在始终具有高损失的群组上。在ML-SUPERB 2.0基准的五个语言集上，使用XLS-R和MMS模型进行的实验表明，CTC-DRO持续优于标准基线和原始Group DRO模型。例如，在设置2中使用XLS-R时，最差语言的字错误率（CER）相对基线降低了47.1%，平均CER降低了32.9%。该方法计算开销极小，其思想可推广至其他具有类似群组损失不可比问题的领域（如医疗应用），但性能差异仍未完全消除，需要社区驱动的评估以确保技术普惠。

关键实验结果对比表（平衡数据设置，测试集CER）：

| 设置 | 模型 | 方法 | 最差语言CER (ISO) | 平均CER | LID准确率 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | MMS | 基线 | 60.8 (NAN) | 23.4 | 97.4% |
| 1 | MMS | Group DRO | 86.6 (NAN) | 30.5 | 78.7% |
| 1 | MMS | CTC-DRO | 56.8 (NAN) | 22.9 | 95.8% |
| 2 | XLS-R | 基线 | 68.8 (YUE) | 19.0 | 94.2% |
| 2 | XLS-R | Group DRO | 58.8 (YUE) | 21.6 | 87.0% |
| 2 | XLS-R | CTC-DRO | 45.0 (YUE) | 15.8 | 89.3% |
| 5 | XLS-R | 基线 | 114.8 (JPN) | 29.9 | 89.0% |
| 5 | XLS-R | Group DRO | 92.9 (JPN) | 36.8 | 57.7% |
| 5 | XLS-R | CTC-DRO | 71.5 (JPN) | 23.8 | 91.0% |

（数据来源于论文Table 1，展示了在多个设置下，CTC-DRO在降低最差语言CER和平均CER方面的显著优势，并有效保持了语言识别准确率。）

---

