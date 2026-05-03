---
title: "ICLR 2026 - 语音增强 论文列表"
date: 2026-05-03
draft: false
tags: ["语音增强"]
categories: [iclr-2026]
description: "共 3 篇 ICLR 2026 语音增强 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音增强

共 **3** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Are Deep Speech Denoising Models Robust to Adversarial Noise](/audio-paper-digest-blog/posts/2026-05-03-are-deep-speech-denoising-models-robust-to) | 8.5分 | 前25% |
| 🥈 | [StableToken: A Noise-Robust Semantic Speech Tokenizer for Re](/audio-paper-digest-blog/posts/2026-05-03-stabletoken-a-noise-robust-semantic-speech) | 8.0分 | 前10% |
| 🥉 | [SpeechOp: Inference-Time Task Composition for Generative Spe](/audio-paper-digest-blog/posts/2026-05-03-speechop-inference-time-task-composition-for) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Are Deep Speech Denoising Models Robust to Adversarial Noise?](/audio-paper-digest-blog/posts/2026-05-03-are-deep-speech-denoising-models-robust-to)

🔥 **8.5/10** | 前25% | #语音增强 | #对抗样本 | #鲁棒性 #模型评估

👥 **作者与机构**

- 第一作者：Will Schwarzer (University of Massachusetts)
- 通讯作者：未说明（论文中仅提供了第一作者的联系邮箱 wschwarzer@umass.edu，未明确标注通讯作者）
- 作者列表：Will Schwarzer (University of Massachusetts)， Philip S. Thomas (University of Massachusetts)， Andrea Fanelli (Dolby Laboratories)， Xiaoyu Liu (Meta；论文注明“工作完成于Dolby Laboratories”)

💡 **毒舌点评**

这篇论文的最大亮点在于其极高的系统性和人类验证的严谨性，它不仅用多种客观指标证明了攻击成功，还请音频专家进行主观听测，这在对抗鲁棒性研究中是相当扎实的“证据链”。其短板在于，攻击成功严重依赖白盒模型（梯度访问），而论文发现的模型间转移攻击基本无效，这虽然削弱了攻击的现实普遍性，但也从侧面说明当前的防御可能需要针对特定模型设计。

🔗 **开源详情**

- **代码**：论文明确提供了代码仓库链接：https://github.com/willschwarzer/adv-dns-public。
- **模型权重**：论文依赖并使用了四个开源模型的公开检查点：Demucs (Denoiser)、Full-SubNet+、FRCRN、MP-SENet。具体版本和来源在附录E和表4中详细列出。
- **数据集**：使用ICASSP 2022 DNS Challenge 4主赛道的数据集（语音、噪声、RIR），并提供了数据来源说明（LibriVox, VCTK, OpenSLR）。
- **Demo**：论文中提及了在线样本供读者评估，链接为：https://sites.google.com/view/adv-dns/。
- **复现材料**：论文在附录中提供了极其详尽的复现细节，包括：所有模型架构说明、攻击算法伪代码、心理声学掩蔽模型的计算细节、优化器超参数、硬件信息、实验脚本参数、甚至包括了人类研究的详细协议和统计分析方法。
- **论文中引用的开源项目**：OpenAI Whisper (ASR评估), ViSQOL/NISQA/DNSMOS (语音质量评估), DNSMOS P.835, MaskGCT (语音合成目标攻击)，以及上述四个DNS模型本身。

📌 **核心摘要**

1.  **问题**：论文旨在研究当前广泛使用的深度语音降噪模型是否容易受到精心设计的、人类难以察觉的对抗性噪声攻击。
2.  **方法核心**：提出了一种基于心理声学掩蔽模型的攻击框架。攻击者利用模型梯度，通过投影梯度下降法生成扰动，但将扰动的功率谱密度严格限制在原始语音信号的听觉掩蔽阈值之下，确保攻击噪声“隐藏”在原始语音中。
3.  **新意**：相比于之前针对语音增强模型的研究，本文在三个维度上进行了重要扩展：(a) 使用严格的、包含时间掩蔽的听觉掩蔽模型以确保攻击不可察觉；(b) 系统性地测试了多种攻击场景（无噪、有噪、有混响、模拟空传）和四种主流开源DNS模型；(c) 通过人类转录和ABX研究验证了攻击的不可察觉性和输出的不可理解性。
4.  **实验结果**：核心结果如图1所示（`![攻击对模型输出STOI改善的影响图](icassp-img://WtH2JxKJKf/0.png)`）。所有四个模型（Demucs， FRCRN， MP-SENet， Full-SubNet+）在添加不可察觉扰动后，输出语音的质量（以STOI衡量）都会急剧下降，从“比输入干净”变为“比输入更嘈杂不可懂”，甚至在极高信噪比（70dB）下也成功。人类研究（图6， `![人类研究结果图](icassp-img://WtH2JxKJKf/1.png)`）证实，攻击后模型输出的单词准确率接近于零，而受攻击的输入本身仍然相当可懂；同时，ABX测试表明攻击噪声在统计上不可察觉。论文也报告了负结果：朴素的模型间转移攻击几乎无效（表2， `![攻击转移矩阵](icassp-img://WtH2JxKJKf/2.png)`），通用对抗扰动效果甚微，而简单的高斯噪声防御能提供部分保护（图4， `![高斯噪声防御效果](icassp-img://WtH2JxKJKf/3.png)`）。
5.  **实际意义**：警示社区：开源DNS模型在安全关键应用（如助听器、紧急广播）中直接部署存在重大安全隐患。即使攻击是白盒的，但开源模型权重公开，使得攻击成为可能。
6.  **局限性**：攻击主要依赖梯度访问（白盒），目标攻击在主观上并不成功，且攻击是离线、逐语句进行的，实时流式攻击需要额外假设。

---

### 🥈 [StableToken: A Noise-Robust Semantic Speech Tokenizer for Resilient SpeechLLMs](/audio-paper-digest-blog/posts/2026-05-03-stabletoken-a-noise-robust-semantic-speech)

🔥 **8.0/10** | 前10% | #语音增强 | #自监督学习 | #端到端 #鲁棒性

👥 **作者与机构**

- 第一作者：Yuhan Song（北京大学计算机科学学院，多媒体信息处理国家重点实验室）
- 通讯作者：Linhao Zhang（腾讯公司基础模型技术中心）、Houfeng Wang（北京大学计算机科学学院，多媒体信息处理国家重点实验室）
- 作者列表：Yuhan Song（北京大学）、Linhao Zhang（腾讯微信AI）、Chuhan Wu（腾讯微信AI）、Aiwei Liu（腾讯微信AI）、Wei Jia（腾讯微信AI）、Houfeng Wang（北京大学）、Xiao Zhou（腾讯微信AI）

💡 **毒舌点评**

亮点：论文敏锐地捕捉到了当前监督式语义分词器“脆弱”这一被广泛忽视但实际危害巨大的缺陷，并设计了一套从架构到训练的完整解决方案，多分支投票的思路直观且有效。短板：虽然论文声称“推理开销可忽略”，但多分支结构本质上增加了模型复杂度，在极端追求效率的边缘设备部署场景下，这种设计可能需要进一步权衡。

🔗 **开源详情**

- **代码**：提供了公开的代码仓库链接：https://github.com/Tencent/StableToken。
- **模型权重**：论文中承诺“code and model checkpoint will be released publicly upon acceptance”。
- **数据集**：训练和评估使用的数据集名称已列出，大部分为公开数据集（如LibriSpeech, WenetSpeech, FLEURS等），部分为腾讯内部数据（未公开）。
- **Demo**：未提及在线演示。
- **复现材料**：提供了极其详尽的附录（B-H节），包括训练数据列表、超参数、噪声配置、下游任务设置、消融实验、效率分析等，复现指导性非常强。
- **依赖的开源项目**：骨干模型使用了预训练的Whisper-large-v3；下游实验使用了Qwen2.5-3B LLM；音频重建使用了HiFi-GAN vocoder框架。这些都在论文中明确说明。

📌 **核心摘要**

1.  **解决的问题**：现有主流的监督式语义语音分词器（如S3 Tokenizer, CosyVoice2）存在严重的脆弱性问题。即使在人类听觉完全清晰的高信噪比（SNR）噪声环境下，其生成的离散令牌序列也会发生剧烈变化，这极大地增加了下游语音大模型（SpeechLLMs）的学习负担，是导致其在现实世界嘈杂环境中性能下降的关键原因之一。
2.  **方法核心**：论文提出了StableToken，一种基于共识机制的抗噪语义分词器。其核心创新在于：a) **Voting-LFQ模块**：用多分支并行处理替代传统的单路径量化，每个分支独立生成二进制表示，然后通过一个可微分的**位级多数投票**机制融合为一个最终稳定的令牌。这提供了内在的容错能力。b) **噪声感知共识训练**：在训练时，向少数随机分支输入带噪声的音频，多数分支输入干净音频。通过一个**共识损失**，强迫所有分支（无论看到干净还是噪声输入）的预量化表示趋于一致，从而显式地让模型学习忽略无关的声学扰动。
3.  **与已有方法相比的新颖性**：不同于以往SSL或单路径监督分词器，StableToken首次在语义分词器的架构和训练层面系统性地解决了**令牌稳定性**问题。其多分支位级投票机制和与之匹配的共识训练策略是全新的组合，旨在同时克服“脆弱的单路径架构”和“对令牌稳定性不敏感的遥远监督信号（ASR损失）”这两个根本弱点。
4.  **主要实验结果**：
    *   **Tokenizer层面**：在FLEURS数据集上的抗噪评估中，StableToken的平均单元编辑距离（UED）从最强监督基线（S3 Tokenizer）的26.17%**大幅降低至10.17%**，相对降低超过60%，且在分布外（OOD）真实噪声上同样有效。同时，其音频重建质量（WER和MOS）保持了SOTA水平。
    *   **下游任务层面**：集成StableToken的SpeechLLM在多个任务和噪声条件下均表现更优。例如，在CHiME-4真实测试集上，ASR的WER从GLM-4-Voice基线的51.08%**降至35.90%**；在TTS任务上，生成的语音在SEED-TTS基准测试中WER和MOS也显著优于基线。

    | 模型 | 噪声鲁棒性 (Avg. UED% ↓) | ASR WER% (CHiME-4 Real Test) | TTS WER% (SEED-TTSEN) | TTS MOS (SEED-TTSZH) |
    | :--- | :--- | :--- | :--- | :--- |
    | S3 Tokenizer (基线) | 26.17 | - | - | - |
    | CosyVoice2 (基线) | 38.66 | 59.83 | 7.22 | 3.37 |
    | GLM-4-Voice (基线) | 31.10 | 51.08 | 6.19 | 3.85 |
    | **StableToken (本文)** | **10.17** | **35.90** | **4.43** | **4.08** |
5.  **实际意义**：为构建更健壮的语音大模型提供了坚实的基础组件。通过提升分词器本身的抗噪性，可以直接、有效地改善下游SpeechLLM在真实世界复杂声学环境中的性能，推动语音交互技术向更可靠的方向发展。
6.  **主要局限性**：a) 论文主要关注抗噪鲁棒性，多分支投票机制在带来稳定性的同时，也略微增加了模型参数和计算量（尽管声称可忽略）。b) 使用了较大的词表（8192），虽然有利于表达，但也可能增加下游LLM建模的难度或产生新的泛化问题，论文中未深入讨论这一权衡。

---

### 🥉 [SpeechOp: Inference-Time Task Composition for Generative Speech Processing](/audio-paper-digest-blog/posts/2026-05-03-speechop-inference-time-task-composition-for)

✅ **7.5/10** | 前25% | #语音增强 | #扩散模型 | #语音分离 #语音合成

👥 **作者与机构**

- 第一作者：Justin Lovelace (Cornell University)
- 通讯作者：Zeyu Jin (Adobe Research)
- 作者列表：Justin Lovelace (Cornell University)， Rithesh Kumar (Adobe Research)， Jiaqi Su (Adobe Research)， Ke Chen (Adobe Research)， Kilian Q Weinberger (Cornell University)， Zeyu Jin (Adobe Research)

💡 **毒舌点评**

**亮点**：论文提出的TC-CFG（任务组合分类器自由引导）方法论，优雅地解决了生成模型中“组合任务时如何不互相污染”的经典难题，通过将TTS模型用作判别器而非生成器，实现了内容引导与声学保持的解耦，理论推导和模拟实验都很有说服力。
**短板**：虽然框架号称“通用”，但实验主要集中在英文的增强、分离和合成上，对于更复杂的��语言、实时性、或对计算资源更敏感的场景缺乏探讨，且模型参数量不小（~490M），实际部署的效率未评估。

🔗 **开源详情**

- **代码**：论文中未提及代码仓库链接。
- **模型权重**：未提及公开模型权重。
- **数据集**：使用了多个公开数据集（MLS English, Libri-TTS, LibriTTS-R, DNS Challenge等），并说明了模拟退化流程，但未提供新的数据集。
- **Demo**：提供了在线音频样本页面（https://justinlovelace.github.io/projects/speechop）。
- **复现材料**：在附录A-H中提供了极其详细的模型架构、训练配置（包括所有超参数）、采样设置、数据增强流程、损失函数推导和消融实验细节，为复现提供了充分信息。
- **论文中引用的开源项目**：DAC音频编解码器（Kumar et al., 2023）、ByT5（Xue et al., 2022）、Whisper/WhisperX（Radford et al., 2023; Bain et al., 2023）、各种基线模型（SGMSE+, StoRm, SepFormer等）。

📌 **核心摘要**

1.  **要解决什么问题**：生成式文本到语音系统利用海量数据表现优异，但语音到语音任务（如增强、分离）受限于配对数据稀缺，导致生成方法容易扭曲语音内容和说话人身份。
2.  **方法核心是什么**：提出SpeechOp，一个基于潜在扩散的多任务模型，将预训练的TTS模型适配为通用语音处理器。核心创新是**任务组合分类器自由引导（TC-CFG）**，它在推理时将增强任务的得分函数与TTS模型提供的判别式文本引导得分相加，从而组合能力而不混合生成先验。
3.  **与已有方法相比新在哪里**：
    *   **范式新**：不是从头训练一个大一统模型，而是高效适配强大的预训练TTS模型。
    *   **组合方式新**：TC-CFG允许在推理时灵活、可控地组合已学习的能力（如增强+文本引导，增强+说话人克隆），优于简单的得分平均。
    *   **引入隐式任务组合（ITC）**：无需在训练中使用转录文本，而是直接利用现成的ASR模型（如Whisper）在推理时提供文本引导，实现最先进（SOTA）的内容保持。
4.  **主要实验结果如何**：
    *   **TTS**：SpeechOp在多任务训练后，其TTS质量（MOS-Q, MOS-N）相比纯TTS基线有所提升，与更大规模模型相当。
    *   **语音增强**：ITC管线将增强任务的词错误率（WER）从无引导的8.1%大幅降低至2.9%，相比强基线HiFi-GAN-2（5.4%）也有46%的相对提升，同时主观质量（MOS）与之持平。
    *   **说话人分离**：在WSJ0-2Mix数据集上，SpeechOp的MOS（3.92）显著优于SepFormer基线（3.28），尽管信号级指标（SI-SDRi）较低。
    *   **任务组合消融**：TC-CFG在WER（2.1%）和PESQ（2.06）上全面优于得分平均（WER 3.4%， PESQ 1.88）。
5.  **实际意义是什么**：为语音处理提供了一个统一、灵活的生成式框架，能以更低的开发和数据成本覆盖多种任务，并通过组合能力催生个性化增强等新应用。
6.  **主要局限性是什么**：评估主要基于英文和标准合成数据集，对于真实世界复杂场景（如部分重叠、远场）的验证不足；模型生成特性导致部分信号级指标（如SI-SDRi）不如传统判别式模型，存在感知与客观指标的差异；推理速度未讨论。

---

