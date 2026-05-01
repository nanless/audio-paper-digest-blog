---
title: "ICASSP 2026 - 语音匿名化 论文列表"
date: 2026-04-29
draft: false
tags: ["语音匿名化"]
categories: [icassp-2026]
description: "共 10 篇 ICASSP 2026 语音匿名化 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音匿名化

共 **10** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [ECSA: Dual-Branch Emotion Compensation for Emotion-Consisten](/audio-paper-digest-blog/posts/2026-04-29-ecsa-dual-branch-emotion-compensation-for-emotion) | 8.5分 | 前25% |
| 🥈 | [Target Speaker Anonymization in Multi-Speaker Recordings](/audio-paper-digest-blog/posts/2026-04-29-target-speaker-anonymization-in-multi-speaker) | 7.6分 | 前50% |
| 🥉 | [Content Anonymization for Privacy in Long-Form Audio](/audio-paper-digest-blog/posts/2026-04-29-content-anonymization-for-privacy-in-long-form) | 7.5分 | 前25% |
| 4. | [Content Leakage in Librispeech and its Impact on the Privacy](/audio-paper-digest-blog/posts/2026-04-29-content-leakage-in-librispeech-and-its-impact-on) | 7.5分 | 前25% |
| 5. | [Improving the Speaker Anonymization Evaluation’s Robustness ](/audio-paper-digest-blog/posts/2026-04-29-improving-the-speaker-anonymization-evaluations) | 7.5分 | 前50% |
| 6. | [ZK-VSA: Zero-Knowledge Verifiable Speaker Anonymization Leve](/audio-paper-digest-blog/posts/2026-04-29-zk-vsa-zero-knowledge-verifiable-speaker) | 7.5分 | 前25% |
| 7. | [Speaker Anonymisation for Speech-Based Suicide Risk Detectio](/audio-paper-digest-blog/posts/2026-04-29-speaker-anonymisation-for-speech-based-suicide) | 7.5分 | 前25% |
| 8. | [PRSA: Preventing Malicious Speaker Recognition and Speech Sy](/audio-paper-digest-blog/posts/2026-04-29-prsa-preventing-malicious-speaker-recognition-and) | 7.0分 | 前25% |
| 9. | [Stream-Voice-Anon: Enhancing Utility of Real-Time Speaker An](/audio-paper-digest-blog/posts/2026-04-29-stream-voice-anon-enhancing-utility-of-real-time) | 7.0分 | 前25% |
| 10. | [Identity Leakage Through Accent Cues in Voice Anonymisation](/audio-paper-digest-blog/posts/2026-04-29-identity-leakage-through-accent-cues-in-voice) | 7.0分 | 前50% |

---

## 📋 论文详情

### 🥇 [ECSA: Dual-Branch Emotion Compensation for Emotion-Consistent Speaker Anonymization](/audio-paper-digest-blog/posts/2026-04-29-ecsa-dual-branch-emotion-compensation-for-emotion)

🔥 **8.5/10** | 前25% | #语音匿名化 | #生成模型 | #语音情感识别 #自监督学习

👥 **作者与机构**

- 第一作者：Chenghan Lin（天津大学人工智能学院，认知计算与应用天津市重点实验室）
- 通讯作者：Longbiao Wang（天津大学人工智能学院，认知计算与应用天津市重点实验室；苏州智研信息技术有限公司），Kong Aik Lee（香港理工大学）
- 作者列表：Chenghan Lin（天津大学）、Junjie Li（香港理工大学）、Tingting Wang（南京邮电大学通信与信息工程学院）、Meng Ge（天津大学）、Longbiao Wang（天津大学，苏州智研信息技术有限公司）、Kong Aik Lee（香港理工大学）、Jianwu Dang（中国科学院深圳先进技术研究院）

💡 **毒舌点评**

这篇论文的亮点在于其系统性地解构并攻克了“匿名化必然损伤情感”这一核心矛盾，提出的双分支补偿模块设计思路清晰，从数据集先验（静态）和实例残差（动态）两个层面进行修复，实验结果也确实显著优于同类工作。短板则在于其验证范围较为局限，虽然在IEMOCAP上表现优异，但整个系统在非英语环境下的鲁棒性以及面对更复杂情感（如混合情绪）的处理能力，论文未提供任何数据支撑，使得这个“通用解决方案”的宣称打上了折扣。

🔗 **开源详情**

-   代码：论文中未提及代码链接。
-   模型权重：未提及公开权重。
-   数据集：论文中使用的VoxCeleb-2, MSP-IMPROV, ESD, LibriSpeech, IEMOCAP均为公开数据集。未提及是否公开了处理后的实验数据或中间产物。
-   Demo：未提及。
-   复现材料：论文在“实现细节”部分提供了优化器、学习率、损失函数权重等关键超参数，为复现提供了重要信息。未提供训练日志、检查点或附录。
-   论文中引用的开源项目：emotion2vec+, ECAPA-TDNN, HuBERT, OHNN, HiFi-GAN。
-   论文中未提及开源计划。

📌 **核心摘要**

1. 要解决的问题：现有的说话人匿名化技术（如基于OHNN的方案）在有效隐藏说话人身份的同时，会严重破坏语音中的情感信息，限制了其在医疗、人机交互等情感敏感场景中的应用。
2. 方法核心：提出一个名为ECSA的情感保留说话人匿名化框架。其核心是双分支情感补偿（D-PEC）模块：一个静态补偿器利用数据集层面的情感原型和软标签进行全局先验补偿；一个动态补偿器通过非线性网络挖掘并增强匿名化嵌入中的残差情感线索。此外，在HiFi-GAN声码器训练中引入了情感一致性损失，确保合成语音与补偿后的嵌入在情感空间对齐。
3. 与已有方法相比新在哪里：摒弃了先前方法中易泄露说话人信息的外接情感编码器。首次提出并行处理数据集全局先验（静态分支）和单条语音残差信号（动态分支）的补偿机制。创新性地将情感一致性约束直接集成到声码器训练中，引导生成器利用情感信息。
4. 主要实验结果：在VPC 2024基准测试上，ECSA在情感保留（UAR）上取得了最佳性能（测试集64.21%），显著超越了所有基线（如P3的57.93%）和顶级参赛系统（如T10的60.87%），同时保持了具有竞争力的匿名化强度（EER 39.69%）和内容可懂度（WER 2.52%）。消融实验证明，移除动态分支、静态分支或情感一致性损失均会导致UAR显著下降，尤其是对悲伤类情感的识别率。
5. 实际意义：该研究为隐私保护技术在实际情感计算应用中的落地提供了可行的解决方案，有望推动语音匿名化技术从“仅保护隐私”向“隐私与效用兼得”的方向发展。
6. 主要局限性：实验评估集中于英语数据集（VPC 2024， IEMOCAP），其在其他语言或方言上的有效性未经验证。模型训练依赖多个预训练组件（emotion2vec+, ECAPA-TDNN, HuBERT），其复杂性增加了部署难度。

---

### 🥈 [Target Speaker Anonymization in Multi-Speaker Recordings](/audio-paper-digest-blog/posts/2026-04-29-target-speaker-anonymization-in-multi-speaker)

✅ **7.6/10** | 前50% | #语音匿名化 | #语音转换 | #说话人分离 #说话人验证

👥 **作者与机构**

- 第一作者：Natalia Tomashenko（Université de Lorraine, CNRS, Inria, Loria）
- 通讯作者：未说明
- 作者列表：Natalia Tomashenko（Université de Lorraine, CNRS, Inria, Loria）、Junichi Yamagishi（National Institute of Informatics）、Xin Wang（National Institute of Informatics）、Yun Liu（National Institute of Informatics）、Emmanuel Vincent（Université de Lorraine, CNRS, Inria, Loria）

💡 **毒舌点评**

亮点在于清晰地定义了多说话人场景下目标匿名化这一重要且实际的问题，并初步建立了一个包含“提取-匿名化-重组”的端到端评估框架，其对评估指标的讨论（如tcpWER、DER）比单纯追求更低EER更具工程指导意义。短板在于方法上本质上是将已有的TSE和匿名化模型进行管道式拼接，缺乏针对该联合任务的深度融合与创新，且实验揭示了管道中误差传递导致最终实用性（tcpWER）显著下降的核心矛盾，但论文并未提出根本性的解决方案。

🔗 **开源详情**

- 代码：论文中未提供TSA框架或核心实验的代码仓库链接。但提供了用于评估的MeetEval工具包链接（https://github.com/fgnt/meeteval）和引用的开源TSE工具（WeSep, https://github.com/wenet-e2e/wesep）。
- 模型权重：未提及公开训练好的TSA或匿名化模型权重。
- 数据集：使用了公开数据集SparseLibriMix（来源：https://github.com/popcornell/SparseLibriMix）。
- Demo：提供了音频样本的在线演示页面（https://sites.google.com/view/target-speaker-anonymization）。
- 复现材料：论文描述了实验设置和使用的工具，但未提供详细的训练配置、超参数或检查点。
- 论文中引用的开源项目：SpeechBrain, pyannote.audio, DiariZen, MeetEval。

📌 **核心摘要**

这篇论文旨在解决现有语音匿名化技术无法处理多说话人录音中仅匿名化特定目标说话人（如客服场景中的客户）这一局限性问题。其核心方法是提出一个名为目标说话人匿名化（TSA）的流程框架：首先使用目标说话人提取（TSE）模型从混合语音中分离出目标说话人的语音，然后仅对该语音应用神经网络匿名化方法进行处理，最后将处理后的语音与未匿名的其他说话人语音重新混合。与以往研究相比，本文的新颖之处在于：1）首次系统性地研究了多说话人场景下的针对性匿名化；2）构建了更贴合实际的评估体系，不仅评估隐私性（ASV-EER），还重点评估了匿名化后整个对话的实用性（基于说话人分离的tcpWER和DER）。主要实验结果表明，使用性能较好的WeSep BSRNN TSE模型后，最终的匿名化对话在隐私保护（EER约36.9%）上相比单说话人场景（32.4%）有所提升，但整个对话的转写错误率（tcpWER）从原始的5.0%显著上升至14.6%，表明分离误差和匿名化处理严重损害了内容可懂度。该工作的实际意义在于为保护多说话人通话中的特定用户隐私提供了初步的解决方案和评估范式，但主要局限性是TSE的分离质量与匿名化处理共同造成了显著的实用性损失，且该框架的性能高度依赖于上游TSE和下游匿名化模型的单独性能。

---

### 🥉 [Content Anonymization for Privacy in Long-Form Audio](/audio-paper-digest-blog/posts/2026-04-29-content-anonymization-for-privacy-in-long-form)

✅ **7.5/10** | 前25% | #语音匿名化 | #大语言模型 | #说话人验证 #端到端

👥 **作者与机构**

- 第一作者：Cristina Aggazzotti（约翰霍普金斯大学人类语言技术卓越中心）
- 通讯作者：未说明
- 作者列表：Cristina Aggazzotti（约翰霍普金斯大学人类语言技术卓越中心，电子邮箱 caggazz1@jhu.edu），Ashi Garg（约翰霍普金斯大学人类语言技术卓越中心，电子邮箱 agarg22@jhu.edu），Zexin Cai（约翰霍普金斯大学计算机系，电子邮箱 zcai21@jhu.edu），Nicholas Andrews（约翰霍普金斯大学人类语言技术卓越中心及计算机系，电子邮箱 noa@jhu.edu）

💡 **毒舌点评**

本文敏锐地指出了当前语音匿名化研究在长音频场景下的“皇帝新衣”——只藏声音不改说话方式等于白藏，并提出了用LLM改写文本来釜底抽薪的思路，是这个小众但重要的领域一次扎实的“问题-方案”闭环。不过，文中仅拿出了几个现成LLM模型进行“平A”，并未深入探究文本风格改写的具体机制与边界（比如对口语化、情感色彩的保持能力），在实验深度上略显保守。

🔗 **开源详情**

- 代码：提供GitHub仓库链接：https://github.com/caggazzotti/long-form-speech-anonymization
- 模型权重：论文中使用的模型均为开源模型或公开API：
    *   ASR：Whisper-medium（开源）
    *   TTS：XTTS（开源）
    *   LLM：Gemma-3-4B（开源）， GPT-4o-mini 和 GPT-5（通过OpenAI API，但论文提及了其系统卡）
    *   说话人验证：WavLM-Base（开源）
    *   作者归属：Sentence LUAR (SLUAR)（开源，论文提供了HuggingFace链接）
    *   检测器：SSL-AASIST 和 Binoculars（均为开源）
- 数据集：使用了公开语料库 Fisher Speech Corpus 和 VoxCeleb2，未提及如何获取或划分评估集的具体信息。
- Demo：未提及。
- 复现材料：提供了代码仓库，其中应包含使用提示词和模型进行推断的脚本。论文中描述了实验设置（如Fisher语料库的“hard”评估设定），但未提供超参数配置文件或训练日志。
- 论文中引用的开源项目：Whisper, XTTS, Gemma, WavLM, SLUAR, Binoculars, SSL-AASIST, Sentence-BERT（用于语义相似度计算）。

📌 **核心摘要**

1. 问题：现有语音匿名化技术（如VoicePrivacy Challenge）主要针对短音频，仅通过声学处理隐藏说话人身份。然而在长音频（如电话、会议）中，同一说话人的多条语音所展现出的词汇、句式等语言风格会成为强大的生物特征旁信道，使攻击者即使在声音被完全转换后仍能重新识别说话人。
2. 方法核心：提出在自动语音识别（ASR）和语音合成（TTS）的级联管道中，引入基于大语言模型（LLM）的上下文文本改写步骤。该方法不是逐句改写，而是采用滑动窗口，结合前文语境对多条转录文本进行联合改写，旨在消除说话人特有的语言风格，同时保留原始语义。
3. 创新性：这是首次系统性地评估LLM文本改写作为防御“基于内容的攻击”的有效性的研究。与现有仅处理声学信号或简单掩盖PII的方法不同，该方案直接从攻击者依赖的语言内容特征入手。
4. 主要结果：实验在Fisher电话对话语料库上进行。结果显示，仅进行语音匿名化时，内容攻击的等错误率（EER）随可用语音数量增加而显著下降（攻击更准），证明语言内容泄露了身份。而采用所提的内容匿名化（特别是上下文联合改写）后，内容攻击的EER能稳定在50%左右（接近随机猜测）。具体而言，使用GPT-5和Gemma-3-4B模型进行段改写，对内容攻击的防御效果优于逐句改写（GPT-4o-mini）。语义相似度测试（如DTW）表明改写后内容得以保留。合成后的语音自然度（UTMOS）甚至高于原始录音。
5. 实际意义：为长音频（如法庭取证、医疗问诊、商业会议）的隐私保护提供了新思路和技术路线，建议在ASR-TTS匿名化流程中集成内容改写步骤。
6. 主要局限性：依赖ASR-TTS级联管道，ASR错误可能传播；文本改写可能丢失细微语义或风格；在半知情攻击者场景下的有效性有待验证。

---

### 4. [Content Leakage in Librispeech and its Impact on the Privacy Evaluation of Speaker Anonymization](/audio-paper-digest-blog/posts/2026-04-29-content-leakage-in-librispeech-and-its-impact-on)

✅ **7.5/10** | 前25% | #语音匿名化 | #模型评估 #数据集 | #模型评估 #数据集

👥 **作者与机构**

- 第一作者：Carlos Franzreb（DFKI, 德国）
- 通讯作者：未说明
- 作者列表：Carlos Franzreb（DFKI, 德国）、Arnab Das（DFKI, 德国）、Tim Polzehl（DFKI, 德国）、Sebastian Möller（柏林工业大学, 德国）

💡 **毒舌点评**

亮点：论文像一名侦探，敏锐地抓住了“说话人匿名化”评估中的一个核心悖论——如果匿名化旨在隐藏身份但保留内容，而内容本身却能暴露身份，那么评估就失去了公平性。研究通过严密的实验设计，将这个潜在的“房间里的大象”清晰地揭示了出来。
短板：文章的核心贡献是提出了问题并推荐了一个更好的“考场”（EdAcc），而非提供解决“考试作弊”（内容泄露攻击）的新“防作弊技术”或新的匿名化算法。对于寻求具体算法改进的读者而言，其直接的技术增量有限。

🔗 **开源详情**

- 代码：论文中未提及提供新的代码仓库。评估框架SpAnE [5]是作者此前工作，但论文未给出链接。
- 模型权重：未提及公开本文使用的模型权重。
- 数据集：使用了两个公开数据集Librispeech和EdAcc。论文未提供EdAcc的获取链接，但EdAcc [4]是公开发布的。
- Demo：未提及。
- 复现材料：论文详细描述了评估流程、数据划分、特征提取方法（音素识别器、ECAPA-TDNN），足以让同行按照相同设置进行复现分析。
- 论文中引用的开源项目：
  - SpeechBrain ECAPA-TDNN [7]
  - Whisper ASR [10]
  - NeMo TTS (FastPitch + HiFiGAN) [11, 12]
  - SpAnE评估框架 [5]
  - private kNN-VC中的音素识别器 [15]
  - g2p模型和CMU发音词典（用于音素转换）

📌 **核心摘要**

1.  问题：当前评估说话人匿名化系统（隐私保护能力）的标准数据集Librispeech存在严重缺陷：由于是有声书录音，不同说话人朗读的书籍内容差异巨大，导致攻击者可以仅通过识别说话的“词汇内容”来识别身份，即使身份信息（音色等）已被完美匿名化。
2.  方法：作者提出并验证了这一假设。他们采用了一个“完美”的匿名化器（STT-TTS流水线），它转换了所有副语言信息，只保留转录文本。通过设计仅利用音素频率、音素时长或纯音素序列的攻击者，证明了即使匿名化后，Librispeech的说话人仍能被较好地识别（EER低至32.3%），其根源就是泄露的内容。
3.  创新：1) 首次系统性地揭示了Librispeech内容泄露对隐私评估的干扰；2) 提出并证明EdAcc（自发对话数据集）的内容泄露显著更少，是更公平的评估数据集；3) 提出利用EdAcc的丰富元数据（如口音）进行“人口统计学分段”的隐私评估（内/组间EER），以检测匿名化对不同人群的公平性。
4.  主要实验结果：关键数据见下表。实验表明，对于STT-TTS匿名化后的Librispeech，使用音素时长特征攻击的EER（34.5%）与使用频谱图特征（34.8%）几乎相同，证实了攻击完全基于内容。而EdAcc在相同条件下的EER显著更高（45.0%），证明其内容泄露更少。
    | 数据集 | 特征 | 原始语音EER(%) | STT-TTS匿名化EER(%) |
    | :--- | :--- | :--- | :--- |
    | Librispeech | 频谱图 | 0.4 | 34.8 |
    | | 音素+时长 | 23.7 | 34.5 |
    | | 纯音素 | 30.4 | 32.3 |
    | EdAcc | 频谱图 | 6.5 | 45.9 |
    | | 音素+时长 | 39.0 | 45.0 |
    | | 纯音素 | 42.1 | 48.5 |
5.  实际意义：该研究对语音隐私评估社区有重要警示作用，建议在评估匿名化系统时，必须考虑或换用像EdAcc这样内容泄露更少的数据集，以获得更准确、更公平的隐私保护性能估计。其提出的分段评估方法有助于发现匿名化对不同人群的不公平性。
6.  局限性：EdAcc数据集规模远小于Librispeech（22小时 vs 数百小时），可能带来训练数据不足的问题。论文主要诊断了问题，但并未提出直接针对“内容泄露攻击”的新防御方法。内容泄露在EdAcc中依然存在（尽管较弱），并非完全解决。

---

### 5. [Improving the Speaker Anonymization Evaluation’s Robustness to Target Speakers with Adversarial Learning](/audio-paper-digest-blog/posts/2026-04-29-improving-the-speaker-anonymization-evaluations)

✅ **7.5/10** | 前50% | #语音匿名化 | #对抗学习 | #说话人识别 #模型评估

👥 **作者与机构**

- 第一作者：Carlos Franzreb（DFKI, Germany）
- 通讯作者：Carlos Franzreb（根据邮箱carlos.franzreb@dfki.de推断）
- 作者列表：Carlos Franzreb (DFKI, Germany), Arnab Das (DFKI, Germany), Tim Polzehl (DFKI, Germany), Sebastian Möller (Technical University of Berlin, Germany)

#

💡 **毒舌点评**

亮点：问题定义精准——直指现有评估框架在面对同性别目标选择时的“假高分”漏洞，并提出了一个诊断清晰（目标分类器VER）且治疗直接（对抗学习）的方案。短板：创新更偏工程优化而非理论突破，且方法对匿名化能力本身较弱的系统（如kNN-VC）几乎无效，显示其作为评估工具的普适性仍有边界。

#

🔗 **开源详情**

*   代码：提供了代码仓库链接：https://github.com/carlosfranzreb/spane。论文中明确声明“All the necessary code and information to reproduce our experiments is available on GitHub”。
*   模型权重：论文中未提及是否公开训练好的模型权重。
*   数据集：使用了公开数据集LibriSpeech和LibriTTS。论文未提供这些数据集的直接获取方式或处理脚本，但数据集本身是公开可得的。
*   Demo：论文中未提及提供在线演示。
*   复现材料：论文声称GitHub仓库包含复现所需的所有信息和代码。具体的训练细节、超参数、检查点等需参考该代码仓库。论文正文未提供附录说明。
*   引用的开源项目/工具：
    *   SpAnE [16]: 作者之前提出的评估框架，也是本次实验的基础。
    *   SpeechBrain [9]: 提供了ECAPA-TDNN说话人识别器的实现。
    *   kNN-VC [17] & private kNN-VC [6]: 论文中测试的匿名化器。
    *   ASR-BN [4]: 论文中测试的匿名化器（VPC2024基线）。
*   论文中未提及后续的开源计划（如更新权重或扩展数据集）。

📌 **核心摘要**

1.  要解决什么问题：当前语音匿名化的隐私评估框架（由VoicePrivacy倡议定义）在使用同性别目标选择算法时，会错误地高估匿名化器的隐私保护能力。论文假设这是因为匿名化语音同时包含了源说话人和目标说话人的信息，而现有评估未考虑后者。
2.  方法核心是什么：在说话人识别器的训练阶段，额外添加一个目标分类器，用于量化识别器对匿名化中所用“目标说话人”信息的编码程度。进一步，通过梯度反转层进行对抗训练，迫使识别器丢弃与目标说话人相关的特征，从而更专注于识别源说话人。
3.  与已有方法相比新在哪里：不同于改进匿名化技术本身，本文创新性地从评估方法入手，通过引入目标分类器和对抗学习，增强了评估框架对目标选择算法的鲁棒性，使其能更公平地反映不同匿名化器的真实隐私性能。
4.  主要实验结果如何：
    *   基线对比：在VoicePrivacy 2024挑战赛（VPC24）的框架下，对于使用同性别TSA的强匿名化器（如private kNN-VC的(7-8)s配置），评估会给出接近50%的等错误率（EER），暗示完美隐私，而随机TSA下EER则低得多。
    *   本文方法效果：如表1所示，对于`private kNN-VC (7-8)s`，本文方法将EER从17.4%进一步降低至15.9%（即攻击更强，隐私评估更真实）；对于`ASR-BNs`，EER从17.4%显著降至13.9%（相对改善约20%）。同时，目标分类器验证率（`VERT`）从个位数/百分之三十多提升至99%以上，证明识别器成功丢弃了目标信息。
    *   关键图表：图2显示，更大的识别器和本文方法能修正VPC24框架的偏差。图3显示基线识别器编码的目标信息远多于源信息。图4确定了对抗训练的最佳启动时机（E=6）。

| Anon. | Eval. | EER ↓ | VERS ↓ | VERT ↑ |
| :--- | :--- | :--- | :--- | :--- |
| (7-8)r | SpAnE | 19.1±0.5 | 90.4±0.2 | 4.0±0.0 |
| | Ours | 19.4±1.2 | 89.6±0.2 | 99.4±0.0 |
| (7-8)s | SpAnE | 17.4±0.3 | 87.8±0.1 | 8.4±0.1 |
| | Ours | 15.9±0.9 | 87.3±0.2 | 99.5±0.1 |
| (3-16)r | SpAnE | 13.6±1.0 | 80.9±0.2 | 10.4±0.5 |
| | Ours | 12.4±0.2 | 80.0±0.2 | 99.3±0.0 |
| (3-16)s | SpAnE | 11.8±0.3 | 77.6±0.2 | 17.6±0.7 |
| | Ours | 10.2±0.4 | 76.8±0.3 | 99.3±0.0 |
| ASR-BNr | SpAnE | 18.4±0.2 | 92.1±0.1 | 60.2±0.5 |
| | Ours | 18.9±0.2 | 91.9±0.1 | 99.6±0.0 |
| ASR-BNs | SpAnE | 17.4±0.6 | 86.0±0.1 | 37.3±0.4 |
| | Ours | 13.9±0.4 | 85.4±0.1 | 99.5±0.0 |
| kNN-VCr | SpAnE | 6.3±0.7 | 40.9±0.3 | 63.4±0.2 |
| | Ours | 6.5±0.2 | 41.4±0.2 | 99.1±0.0 |
| kNN-VCs | SpAnE | 5.2±0.1 | 38.9±0.4 | 63.6±1.1 |
| | Ours | 5.0±0.2 | 39.5±0.2 | 98.8±0.0 |

5.  实际意义是什么：为语音匿名化技术提供了一个更可靠、更公平的隐私评估基准。这有助于准确区分不同匿名化算法的优劣，指导研究和工业界开发出真正安全的技术，并可能影响未来评估标准（如VoicePrivacy挑战赛）的制定。
6.  主要局限性是什么：该方法对匿名化效果本身较差的系统（如kNN-VC）改善不明显；论文未讨论引入额外分类器和对抗训练带来的计算开销；所验证的匿名化器和场景相对有限，其普适性有待进一步测试。

#

---

### 6. [ZK-VSA: Zero-Knowledge Verifiable Speaker Anonymization Leveraging Phase Vocoder with Time-Scale Modification](/audio-paper-digest-blog/posts/2026-04-29-zk-vsa-zero-knowledge-verifiable-speaker)

✅ **7.5/10** | 前25% | #语音匿名化 | #零知识证明 | #信号处理 #音频安全

👥 **作者与机构**

- 第一作者：Shuang Liang（上海交通大学计算机科学学院）
- 通讯作者：Tao Song（上海交通大学计算机科学学院）， Bin Yao（上海交通大学计算机科学学院）
- 作者列表：Shuang Liang（上海交通大学计算机科学学院）， Yang Hua（英国女王大学电子、电气工程与计算机科学学院）， Peishen Yan（上海交通大学计算机科学学院）， Linshan Jiang（新加坡国立大学数据科学研究所）， Tao Song（上海交通大学计算机科学学院）， Bin Yao（上海交通大学计算机科学学院）， Haibing Guan（上海交通大学计算机科学学院）

#

💡 **毒舌点评**

论文的亮点在于巧妙地将密码学中的零知识证明与经典的语音信号处理技术结合，为“可验证计算”在语音领域的应用打开了一扇窗，思路新颖且实现扎实。短板在于实验评估稍显单薄，仅验证了单一匿名化算子（PV-TSM）在单一数据集（LibriSpeech）上的效果，且未与其他基于深度学习的语音匿名化或更先进的可验证计算方案进行横向对比，说服力打了折扣。

#

🔗 **开源详情**

- 代码：论文中未提及公开的代码仓库链接。仅提供了一个演示页面：https://wizicer.github.io/zkVSA/
- 模型权重：未提及。系统不涉及神经网络模型。
- 数据集：使用公开的LibriSpeech数据集，但未提及提供其他专有数据。
- Demo：提供了在线演示页面链接：https://wizicer.github.io/zkVSA/
- 复现材料：论文详细描述了电路设计算法（Algorithm 1, 2）和实验设置，但未提供完整的代码、训练脚本、超参数配置文件或检查点。复现需要自行实现复杂的SNARK电路。
- 论文中引用的开源项目：引用了gnark框架[18]（用于实现SNARK电路和GKR哈希验证）、Poseidon2哈希[20]、EdDSA签名[22]等。
- 总结：论文中未提及完整的开源计划或提供可直接复现的代码库。

📌 **核心摘要**

1.  解决的问题：现有语音匿名化方法只能隐藏说话人身份，但第三方无法验证所发布的匿名语音是否确实由一个可信的原始录音经过预定义的匿名化处理得到，同时又不能泄露原始信息。这带来了对语音证据完整性和处理过程可信度的担忧。
2.  方法核心：提出“可验证语音匿名化”范式，并利用零知识简洁非交互知识证明（ZK-SNARKs）实例化为ZK-VSA系统。核心是将基于相位声码器的时标修改（PV-TSM）匿名化算法编码为SNARK友好的算术电路约束，并结合数字签名和承诺方案，实现既能证明处理过程正确，又不泄露原始语音。
3.  与已有方法相比新在哪里：这是首次将可验证计算（特别是零知识证明）系统性地应用于语音匿名化领域。与单纯追求匿名效果或使用水印的方法不同，它提供了密码学意义上的处理过程正确性保证，且不引入额外的音频伪影。
4.  主要实验结果：在LibriSpeech测试集上评估。匿名化效果方面，ZK-VSA的等错误率（EER）高于原始语音和浮点PV-TSM，表明其增强了匿名性。可理解性方面，字错率（WER）增加通常低于1%（最高为1.8%）。可验证性方面，证明生成时间随音频帧数线性增长（例如16秒音频约13.43秒），但验证仅需毫秒级（约4毫秒），证明大小固定为292字节。
5.  实际意义：为需要审计追踪和隐私保护的语音应用（如法庭取证、隐私敏感数据共享）提供了一种技术解决方案，确保语音处理过程透明、可信且可验证，防止伪造和抵赖。
6.  主要局限性：实验仅在单一数据集和单一匿名化算子（变调）上进行验证，未与其他语音匿名化基线或更复杂的场景（如多语言、带噪）进行对比。此外，系统设计假设了可信的录制设备来生成初始签名，这在实际部署中可能是一个挑战。

---

### 7. [Speaker Anonymisation for Speech-Based Suicide Risk Detection](/audio-paper-digest-blog/posts/2026-04-29-speaker-anonymisation-for-speech-based-suicide)

✅ **7.5/10** | 前25% | #语音匿名化 | #语音转换 | #语音大模型 #语音情感识别

👥 **作者与机构**

- 第一作者：Ziyun Cui (上海人工智能实验室 & 清华大学电子工程系)
- 通讯作者：Chang Lei (清华大学万科公共卫生与健康学院)，Wen Wu (上海人工智能实验室)
- 作者列表：Ziyun Cui (上海人工智能实验室、清华大学电子工程系)，Sike Jia (清华大学电子工程系)，Yang Lin (清华大学为阳书院)，Yinan Duan (清华大学万科公共卫生与健康学院)，Diyang Qu (清华大学万科公共卫生与健康学院)，Runsen Chen (清华大学万科公共卫生与健康学院)，Chao Zhang (上海人工智能实验室、清华大学电子工程系)，Chang Lei (清华大学万科公共卫生与健康学院)，Wen Wu (上海人工智能实验室)

💡 **毒舌点评**

亮点：这是首个系统性研究语音匿名化对下游自杀风险检测任务影响的工作，其构建的多维评估框架（语音质量、说话人鉴别、语义/情感保留）和对互补性匿名化策略的验证（CosyVoice+RVC组合）具有很强的实用指导价值。短板：论文的核心下游任务（自杀风险检测）仅为一个简单的二分类，且未公开核心数据集和代码，使得其关键结论（如“接近原始性能”）的普适性和可复现性大打折扣。

🔗 **开源详情**

- 代码：论文中未提及提供本研究工作的代码仓库链接。
- 模型权重：未提及公开论文中使用的匿名化模型（如SSL-SAS, FreeVC等）或下游检测模型的权重。
- 数据集：数据集为临床采集的青少年语音，涉及隐私，未公开。
- Demo：未提供在线演示。
- 复现材料：未给出训练细节（如学习率）、超参配置文件或检查点。
- 论文中引用的开源项目：论文在脚注中引用了多个开源项目或模型，包括：
    - Qwen2.5-Omni-7B: `https://huggingface.co/Qwen/Qwen2.5-Omni-7B`
    - Paraformer/FunASR
    - Spark-TTS: `https://huggingface.co/SparkAudio/Spark-TTS-0.5B`
    - CosyVoice 2.0: `https://huggingface.co/FunAudioLLM/CosyVoice2-0.5B`
    - RVC项目: `https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI`
    - Emotion2Vec: `https://huggingface.co/emotion2vec/emotion2vec_plus_seed`

📌 **核心摘要**

1.  问题：利用语音自动检测青少年自杀风险具有重要潜力，但语音数据本身包含丰富的个人可识别信息。如何在保护这一脆弱群体隐私（实现说话人匿名化）的同时，保留用于风险检测的关键信息，是一个亟待研究的空白。
2.  方法：首次系统性评估了三大类语音匿名化技术：传统信号处理（基频调整、McAdams）、基于神经声码器的内容-说话人解耦（SSL-SAS， FreeVC， SeedVC， RVC）以及基于转录文本的语音合成（SparkTTS， CosyVoice）。构建了一个包含语音质量、说话人鉴别、基频偏移、语义和情感内容保留的五维评估框架。下游检测模型采用基于`Qwen2.5-Omni-7B`的语音大模型，通过DoRA进行微调。
3.  创新：首次将隐私保护的“说话人匿名化”与心理健康领域的“语音自杀风险检测”任务进行深度耦合研究；提出了一个全面的匿名化效果评估框架；通过实验揭示了不同匿名化方法保留信息的互补性（RVC擅长保留声学特征，CosyVoice擅长保留语义内容），并验证了组合策略的有效性。
4.  结果：在1,223名中国青少年的语音数据集上，原始语音检测准确率为0.702。单一匿名化方法中，RVC表现最好（准确率0.680， EER 0.510），CosyVoice次之（准确率0.658）。将二者概率平均的集成方法达到了0.692的准确率，与原始语音仅差1%，且统计上无显著差异（p=0.677），同时保持了有效的匿名化（EER ~0.5）。

| 方法 | 检测准确率 | 说话人等错误率 (EER) | 基频相关性 (PCC_F0) | 情感相似度 | 语义错误率 (CER) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 原始语音 | 0.702 | 0.185 | - | - | - |
| RVC | 0.680 | 0.510 | 0.443 | 0.619 | 0.362 |
| CosyVoice | 0.658 | 0.497 | -0.002 | 0.257 | 0.024 |
| CosyVoice+RVC | 0.692 | ~0.50 | (组合) | (组合) | (组合) |
| 其他方法 | 0.625-0.644 | 0.248-0.512 | - | - | - |

![检测准确率对比](pdf-image-page1-idx4)
图4: 不同匿名化方法下的自杀风险检测准确率。集成CosyVoice+RVC达到了接近原始语音的性能。

5.  意义：为在心理健康研究和临床场景中安全使用语音数据提供了重要的方法学参考和技术路径，证明了通过精心设计的匿名化流程，可以在有效保护青少年隐私的同时，不显著损害关键医疗任务的性能。
6.  局限性：评估局限于一个特定的青少年中文语音数据集和单一的下游二分类任务；未公开数据集和代码；集成策略的具体实现细节（如概率融合方式）未充分说明；语音增强（FRCRN）对部分方法的效果不一致，表明模块间兼容性需谨慎考虑。

---

### 8. [PRSA: Preventing Malicious Speaker Recognition and Speech Synthesis Simultaneously with Adversarial Examples](/audio-paper-digest-blog/posts/2026-04-29-prsa-preventing-malicious-speaker-recognition-and)

✅ **7.0/10** | 前25% | #语音匿名化 | #对抗样本 | #说话人识别 #语音合成

👥 **作者与机构**

- 第一作者：Shiqi Zhou（中国科学院信息工程研究所，中国科学院大学网络空间安全学院，网络空间安全防御国家重点实验室）
- 通讯作者：Lingcui Zhang（中国科学院信息工程研究所，网络空间安全防御国家重点实验室）
- 作者列表：
    - Shiqi Zhou（中国科学院信息工程研究所，中国科学院大学网络空间安全学院，网络空间安全防御国家重点实验室）
    - Jiayu Li（中国科学院信息工程研究所，中国科学院大学网络空间安全学院，网络空间安全防御国家重点实验室）
    - Jiangyi Deng（浙江大学电气工程学院）
    - Lingcui Zhang（中国科学院信息工程研究所，网络空间安全防御国家重点实验室）
    - Jin Cao（西安电子科技大学网络与信息安全学院）
    - Ben Niu（中国科学院信息工程研究所，网络空间安全防御国家重点实验室）

💡 **毒舌点评**

这篇论文精准地抓住了现有语音对抗防御研究“各自为战”的痛点，提出了一个“一石二鸟”的统一防御框架（PRSA），实验设计也相当全面，同时对抗ASV和TTS多个系统。然而，其核心创新——“同时防御”更多是目标设定上的新颖，而非技术手段上的革命性突破，且代码未开源让其声称的优越性能打了折扣，读者很难直接验证。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：实验使用公开数据集LibriSpeech， VCTK， TIMIT，但论文未说明其具体获取或预处理方式。
- Demo：未提及。
- 复现材料：论文提供了部分关键超参数（如ε， λ， β， γ， 迭代次数N），但缺乏完整的训练配置、数据处理流程和核心模块实现代码。
- 论文中引用的开源项目：提及了使用的开源模型/系统：X-VECTOR， ECAPA-TDNN， WavLM， Unispeech-SAT， YourTTS， SV2TTS， Tortoise， StyleTTS2， AdaIN， Whisper。但这些并非作者为本项目提供的开源材料。

📌 **核心摘要**

1. 问题：当前利用对抗样本保护语音隐私的方法存在缺陷，要么只能防御自动说话人验证（ASV），要么只能防御文本到语音（TTS）合成攻击，缺乏一种能同时有效防御两者的综合方案。
2. 方法核心：提出PRSA方法，将对抗扰动生成建模为一个联合优化问题，目标是最大化ASV和TTS系统提取的说话人嵌入的偏离度，同时最小化人耳可感知失真。关键创新包括：1) 针对ASV和TTS设计了不同的嵌入损失（结合欧氏距离和角距离）；2) 提出基于自然语音调制的输入增强（AM/FM）以提升扰动迁移性；3) 采用梯度高斯滤波以改善生成音频的自然度。
3. 新意：与以往仅针对单一攻击（如V-CLOAK针对ASV， AntiFake针对TTS）的防御不同，PRSA旨在提供一体化的综合防护。其输入增强方法利用外部自然语音进行调制，而非简单的随机变换。
4. 实验结果：在三个数据集（LibriSpeech， VCTK， TIMIT）上测试。PRSA在对抗黑盒ASV系统（如Unispeech-SAT）时，MMR（失配率，越高越好）比V-CLOAK提升约16%（87.00% vs 71.05%）；在对抗黑盒TTS系统（如Tortoise）时，MMR比AntiFake提升约10%（96.30% vs 86.00%）。同时，其音频质量指标SNR（17.98）、WER（7.56%）和PESQ（1.69）与现有最佳防御方法相当或更优。
    关键实验结果表格（来自Table 1）：

    | 方法 | MMR of ASV (↑) | MMR of TTS (↑) | SNR (↑) | WER (↓) | PESQ (↑) |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | random noise | X-VECTOR: 1.92%, ECAPA: 0%, WavLM: 0%, Unispeech: 0% | YourTTS: 1.92%, SV2TTS: 30.76%, Tortoise: 53.84%, StyleTTS2: 48.23% | 15 | 20.23% | 1.32 |
    | V-CLOAK [2] | 80.76%, 96.15%*, 73.07%, 71.05% | 32.61%, 52.82%, 69.23%, 54.76% | 12.43 | 7.59% | 1.85 |
    | AntiFake [3] | 1.92%, 78.81%, 36.53%, 30.76% | 96.15%, 98.05%, 86.00%*, 73.07% | 16.17 | 25.57% | 1.25 |
    | PRSA (ours) | 100.00%, 94.01%, 88.23%, 87.00% | 100.00%, 98.17%, 96.30%, 82.69% | 17.98 | 7.56% | 1.69 |

5. 实际意义：为发布语音数据前的隐私保护提供了一种新工具，能同时抵御基于声纹的追踪和基于语音合成的伪造攻击，适用于公众人物演讲、私密语音通信等场景。
6. 主要局限性：1) 方法依赖于对白盒模型（X-VECTOR， 用于TTS的AdaIN编码器）的梯度计算，对完全黑盒且结构差异极大的攻击模型的防御效果未知。2) 优化过程需要针对每条语音单独迭代（约15步），实时性可能受限。3) 对于超参数（如λ， β， γ）的设置依赖经验，缺乏理论指导。

---

### 9. [Stream-Voice-Anon: Enhancing Utility of Real-Time Speaker Anonymization Via Neural Audio Codec and Language Models](/audio-paper-digest-blog/posts/2026-04-29-stream-voice-anon-enhancing-utility-of-real-time)

✅ **7.0/10** | 前25% | #语音匿名化 | #神经音频编解码器 | #自回归模型 #实时处理

👥 **作者与机构**

- 第一作者：Nikita Kuzmin (南洋理工大学，新加坡科技研究局A*STAR信息通信研究院)， Songting Liu (南洋理工大学) — 论文标注为“Equal contribution”。
- 通讯作者：未说明
- 作者列表：Nikita Kuzmin（南洋理工大学，新加坡科技研究局A*STAR信息通信研究院）、Songting Liu（南洋理工大学）、Kong Aik Lee（香港理工大学）、Eng Siong Chng（南洋理工大学）

💡 **毒舌点评**

这篇论文的最大亮点在于成功地将当前火热的流式神经音频编解码器（NAC）与因果语言模型架构，从语音转换（VC）“搬运”到了说话人匿名化（SA）领域，并通过一系列工程技巧（如动态延迟、混合嵌入、多样化提示池）实实在在地提升了匿名化语音的“好用程度”（WER和UAR）。然而，其短板也很明显：面对一个稍微“用功”一点的攻击者（半知情攻击者），隐私保护性能就会显著下降，这暗示了其匿名化核心机制可能过于依赖表面特征变换，而非深度的身份信息剥离。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：训练集（LibriHeavy, CommonVoice）和提示池（VCTK, ESD, VoxCeleb1, CREMA-D）均为公开数据集，论文未说明其独占数据。
- Demo：提供在线演示页面：`https://paniquex.github.io/Stream-Voice-Anon`。
- 复现材料：论文提供了较为详细的模型配置（第3.3节）、训练细节（第3.3节）和评估协议（第3.2节），但未提供预训练检查点或脚本。
- 论文中引用的开源项目：
  - [HuBERT](https://arxiv.org/abs/2106.07447)：用于内容编码器的蒸馏特征提取。
  - [ECAPA-TDNN](https://arxiv.org/abs/2010.11255)：用于构建lazy-informed攻击者模型。
  - [CAM++](https://arxiv.org/abs/2303.00332)：用作说话人编码器。
  - [SparkTTS](https://arxiv.org/abs/2501.13756)：使用其全局分词器。
  - [FishSpeech](https://github.com/fishaudio/fish-speech)：使用其Firefly-GAN声学编码器/解码器。
  - [ConvNeXt](https://arxiv.org/abs/2201.03545)：内容编码器的骨干网络。
  - [SwiGLU](https://arxiv.org/abs/2002.05202), [RoPE](https://arxiv.org/abs/2104.09864)：Transformer中的激活函数和位置编码。
- 总体而言：论文中未提及开源计划（除演示页面外）。

📌 **核心摘要**

1.  要解决的问题：在实时流式场景下，现有的说话人匿名化方法要么在语音可用性（如识别率、情感保留）上妥协严重，要么隐私保护不足，亟需一种能平衡低延迟、高隐私和高实用性的系统。
2.  方法核心：本文提出了Stream-Voice-Anon系统。其核心是借鉴流式语音转换（StreamVoice）的架构，采用一个基于因果Transformer的内容编码器（结合向量量化和知识蒸馏）提取与说话人无关的内容码，以及一个两阶段自回归模型（Slow-AR + Fast-AR）来生成目标声学码。为了实现匿名化，在推理阶段采用了三种策略：从提示池中随机选取并混合多个提示的语音内容、混合平均说话人嵌入与随机采样的高斯嵌入、以及动态调整延迟帧数。
3.  与已有方法相比新在哪里：1）架构迁移：首次将先进的、基于因果语言模型的流式VC架构系统性地适配用于SA任务；2）匿名化增强：在VC架构基础上，创新性地集成了伪说话人表示采样、说话人嵌入混合和多样化提示选择等隐私保护技术；3）动态延迟：引入动态延迟训练（延迟d在1-8间随机采样），使得模型能在推理时灵活调整延迟以适应不同需求，而无需重新训练。
4.  主要实验结果：在VoicePrivacy 2024 Challenge协议下，与之前的流式SOTA系统DarkStream相比：
    *   实用性大幅提升：字错误率（WER）相对降低高达46%；未加权平均召回率（UAR，情感识别）相对提升高达28%。
    *   隐私保护持平或略有下降：在“懒惰知情攻击者”场景下，等错误率（EER）与DarkStream相当（约47%）；但在“半知情攻击者”场景下，EER降低了约15%，表明隐私保护有所退化。
    *   延迟更低：实现与DarkStream可比甚至更低的延迟（180ms vs. 200ms）。
    关键结果见下表：

| 模型 | 类型 | WER ↓ | UAR ↑ | EER ↑ (lazy-informed) | EER ↑ (semi-informed) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| DarkStream [15] (Mel+CL) | 在线, 200ms | 8.75 (0.0%) | 34.73 (0.0%) | 47.26 (0.0%) | 21.83 (0.0%) |
| Stream-Voice-Anon (cremad-emo-4rnd) | 在线, 180ms | 6.59 (24.7%↓) | 44.59 (28.4%↑) | 46.53 (1.5%↓) | 18.63 (14.6%↓) |
| Stream-Voice-Anon (cross-ds-4rnd) | 在线, 180ms | 4.71 (46.2%↓) | 39.94 (15.0%↑) | 47.72 (0.9%↑) | 18.98 (13.1%↓) |

5.  实际意义：该系统在保持实时性的前提下，显著提高了匿名化语音在自动语音识别（ASR）和情感识别（SER）任务上的可用性，使其更适合用于需要保留语义和情感信息的实时通信场景（如紧急呼叫、心理咨询、法律记录）。
6.  主要局限性：1) 面对经过针对性训练的“半知情”攻击者，隐私保护能力下降；2) 系统依赖GPU加速，无法在CPU上实时运行；3) 离线模型与在线模型之间仍存在性能差距；4) 论文未开源代码和模型，限制了复现与应用。

---

### 10. [Identity Leakage Through Accent Cues in Voice Anonymisation](/audio-paper-digest-blog/posts/2026-04-29-identity-leakage-through-accent-cues-in-voice)

✅ **7.0/10** | 前50% | #语音匿名化 | #模型评估 | #隐私保护 #公平性

👥 **作者与机构**

- 第一作者：Rayane Bakari（Orange Innovation, France; EURECOM, Sophia Antipolis, France）
- 通讯作者：未说明
- 作者列表：Rayane Bakari (Orange Innovation, EURECOM), Olivier Le Blouch (Orange Innovation), Nicolas Gengembre (Orange Innovation), Nicholas Evans (EURECOM), Michele Panariello (EURECOM)

💡 **毒舌点评**

亮点：论文敏锐地抓住了语音匿名化评估中一个关键盲点——非时域线索（口音）的残留风险，并系统性地利用多种嵌入（时域、非时域、口音相关）和攻击场景进行量化分析，逻辑严谨，论证有力，提出的公平性问题也很有价值。
短板：对于其提出的改进方案B4*，分析略显“止步于现象”，缺乏对其内部机制（字符级条件反射如何具体抑制口音线索）的深入解构或对比消融；此外，实验部分因部分参赛系统代码不可用，导致对比不够完整，削弱了结论的普适性。

🔗 **开源详情**

- 代码：论文中未提及完整匿名化系统或实验流程的代码仓库链接。仅提供了所使用的口音识别模型GenAID的链接：`https://github.com/jzmzhong/GenAID`。
- 模型权重：未提及公开的匿名化模型（如B3-B5， T系列）权重。GenAID模型权重可能随其仓库提供。
- 数据集：使用了`COMMON ACCENT`（基于Common Voice）和`Libri-test`，均为公开数据集。
- Demo：未提及。
- 复现材料：论文未提供训练细节、配置、检查点或附录来复现其评估的匿名化系统。仅描述了系统架构概念。
- 论文中引用的开源项目：
    - GenAID（口音识别模型）
    - EnCodec（神经音频编解码器，用于B4）
    - Vocos（声码器，用于B4*）
    - ECAPA-TDNN（说话人验证模型，E-VPC基于此）
    - kNN-VC（语音转换，用于T8-5）
- 论文中未提及开源计划：除引用的外部项目外，论文本身未提及将其提出的B4*系统或其他评估代码开源的计划。

📌 **核心摘要**

1.  问题：当前语音匿名化系统主要通过操纵或替换时域特征来隐藏身份，但可能忽略口音等非时域线索，这些残留线索可能被攻击者利用，导致说话人被重新识别或暴露社会人口学特征。
2.  方法核心：本文系统研究了多个匿名化系统（来自VPC 2024的基线和参赛系统）在匿名化后残留的口音信息。提出了一个综合评估框架，结合说话人验证（SV）、口音验证（AV）和口音分类（AID）三种任务，并使用对时域、非时域和口音信息敏感的不同嵌入模型（E-VPC， W-NT， GenAID）进行探测。
3.  新意：首次全面量化并强调了口音线索在语音匿名化中的身份泄露作用，揭示了匿名化性能存在显著的“口音偏差”（某些口音保护更强，某些更弱），并提出了利用字符级条件反射来增强口音混淆的改进方向（B4*）。
4.  主要结果：
    *   说话人验证：基于非时域线索的W-NT嵌入比基于时域的E-VPC嵌入能更有效地进行重识别（EER更低），表明非时域线索更持久。例如，在L场景下，系统B4的EER为E-VPC 49.5% vs W-NT 32.0%。
    *   口音验证：系统B4在使用GenAID嵌入和L场景下，EER显著降低（从48.5%降至38.8%），表明其匿名化将相似口音映射到相似匿名化空间，加剧了重识别风险。
       口音分类：口音残留程度因系统而异。原始语音WAR为56.77%，B5降至7.69%（接近理论最优），B4为27.85%。不同口音受保护程度不同，如加拿大口音（CAN）在多个系统下召回率较高（B4下为53%），而香港口音（HK）几乎被完全混淆（B5下为0%）。B4相比B4，将口音分类WAR从27.85%降至18.39%，平均降低了68%的口音识别准确率。
       改进系统B4：在L场景的口音验证中，B4*相比B4的EER提升了5%（相对提升11%），证明其通过更强的口音混淆提升了整体匿名化性能。
5.  实际意义：揭示了语音匿名化系统中存在基于口音的公平性风险，呼吁在评估和设计匿名化系统时纳入口音公平性指标，以确保对不同口音群体提供一致的保护水平。
6.  主要局限性：研究主要基于英语口音数据集（COMMON ACCENT），结论对其他语言的适用性需进一步验证。提出的改进方法B4*效果显著但机制分析不足。部分参赛系统无法公开复现，限制了全面的比较。

---

