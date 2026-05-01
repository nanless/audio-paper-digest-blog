---
title: "ICASSP 2026 - 语音识别 #语音翻译 论文列表"
date: 2026-04-29
draft: false
tags: ["语音识别 #语音翻译"]
categories: [icassp-2026]
description: "共 3 篇 ICASSP 2026 语音识别 #语音翻译 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音识别 #语音翻译

共 **3** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [LESS: Large Language Model Enhanced Semi-Supervised Learning](/audio-paper-digest-blog/posts/2026-04-29-less-large-language-model-enhanced-semi) | 7.5分 | 前25% |
| 🥈 | [Equipping Large Language Model with Directional Speech Under](/audio-paper-digest-blog/posts/2026-04-29-equipping-large-language-model-with-directional) | 7.0分 | 前50% |
| 🥉 | [Joint Autoregressive Modeling of Multi-Talker Overlapped Spe](/audio-paper-digest-blog/posts/2026-04-29-joint-autoregressive-modeling-of-multi-talker) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [LESS: Large Language Model Enhanced Semi-Supervised Learning for Speech Foundational Models Using in-the-wild Data](/audio-paper-digest-blog/posts/2026-04-29-less-large-language-model-enhanced-semi)

✅ **7.5/10** | 前25% | #语音识别 #语音翻译 | #半监督学习 #大语言模型 | #语音识别 #语音翻译

👥 **作者与机构**

- 第一作者：Wen Ding（NVIDIA Corporation）
- 通讯作者：未说明
- 作者列表：Wen Ding（NVIDIA Corporation），Fan Qian（NVIDIA Corporation）

#

💡 **毒舌点评**

这篇论文巧妙地将一个在NLP领域成熟的工具（LLM）转化为解决语音SSL中“脏数据”问题的利器，思路实用且效果显著，特别是在AST任务上SOTA的结果很有说服力。然而，其验证的“语音大模型”高度集中于Whisper，缺乏对其他架构（如USM, MMS）的验证，让人好奇该框架是否具有更普适的迁移能力。

#

🔗 **开源详情**

- 代码：提供。论文明确提供了开源配方的GitHub仓库链接：`github.com/nvidia-china-sae/mair-hub/tree/main/speech-llm/less_recipe`。
- 模型权重：未提及开源作者自己训练的模型权重。但所使用的基础模型（Whisper Large-v3, Yi-Large, LLaMA-3-70B）均为公开可用的模型。
- 数据集：
    - 有标签数据（AISHELL-1, Fisher, Callhome）是公开的标准数据集。
    - 论文中使用的“真实世界”YouTube数据集（1590小时普通话， 868小时西班牙语）是自行收集的，论文未说明其是否公开或如何获取。
- Demo：论文中未提及在线演示。
- 复现材料：提供了开源配方，包含训练流程、依赖工具（K2 Icefall）和实验配置的关键细节（如学习率， 模型， LLM选择， 过滤阈值），复现基础较好。
- 论文中引用的开源项目：
    - K2 Icefall toolkit (https://github.com/k2-fsa/icefall)
    - Silero VAD (https://github.com/snakers4/silero-vad)
    - Whisper Large-v3 (Hugging Face)
    - Yi-Large (通过NVIDIA NIM访问)
    - LLaMA-3-70B (通过NVIDIA NIM访问)
    - Qwen2.5-coder-32b-instruct (通过NVIDIA NIM访问)
    - ESPnet (用于对比的基线结果)

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  要解决的问题：当前最先进的语音基础模型（SFMs）在半监督学习中利用从真实世界（in-the-wild）收集的未标注音频数据时，面临一个核心挑战：这些数据声学环境复杂多样，模型生成的伪标签质量较低，导致训练效果不佳。
2.  方法核心：提出了LESS框架。该框架在标准的无教师-学生（Noisy Student Training）SSL流程中，引入一个文本大语言模型（LLM）作为“校正器”，对SFMs（如Whisper）在未标注音频上生成的伪标签（ASR转录或AST翻译文本）进行修正。随后，通过一个基于WER（词错误率）变化的数据过滤策略，筛选出LLM修正后质量更高的伪标签，与原始有标签数据混合，用于迭代微调SFMs。
3.  与已有方法相比新在哪里：传统SSL方法要么专注于训练策略优化，要么使用小型模型和经过筛选的无标签数据。LESS的创新在于：(a) 首次系统性地将LLM集成到面向真实世界、嘈杂数据的语音SSL流程中，作为独立的伪标签优化模块；(b) 提出了“WER Prompting”技巧，让LLM在生成修正文本时同时输出估计的WER，可辅助过滤；(c) 专门设计并验证了该框架在“真实世界”数据场景下的有效性，而不仅仅是使用现有干净数据集忽略其标签。
4.  主要实验结果：
    - 中文ASR：在WenetSpeech测试集上，相比仅使用AISHELL-1训练的监督基线，经过三轮LESS迭代训练后，WER从17.7%绝对下降至13.9%，降幅达3.8%。在领域内测试集AISHELL-1/2上，WER保持稳定（约3.0%/5.2%）。
    - 西语-英语AST：在Callhome和Fisher测试集上，LESS方法达到了34.0和64.7的BLEU分数，显著优于监督基线（33.5， 64.2）和不加LESS的标准NST（33.2， 64.0）。
    - 消融实验：验证了通用LLM（Yi-Large）比代码专精LLM（Qwen2.5-coder）更适合纠错；WER提示词（WER Prompting）和严格的过滤阈值（0.1）能带来性能提升。
5.  实际意义：该框架为利用海量、易获取但质量低劣的网络语音数据训练更强健、适应性更广的语音大模型提供了一种有效的工程化路径，有助于降低对昂贵精标数据的依赖。
6.  主要局限性：研究中使用的语音大模型（SFMs）主要局限于Whisper Large-v3，未验证该方法在其他主流架构（如USM, MMS）上的泛化能力。此外，对于AST任务，仅进行了一轮迭代实验，多轮迭代的潜力和收敛情况有待探索。真实世界数据的噪声和多样性控制标准未深入讨论。

---

### 🥈 [Equipping Large Language Model with Directional Speech Understanding Capabilities](/audio-paper-digest-blog/posts/2026-04-29-equipping-large-language-model-with-directional)

✅ **7.0/10** | 前50% | #语音识别 #语音翻译 | #语音分离 #波束成形 | #语音识别 #语音翻译

👥 **作者与机构**

- 第一作者：Ju Lin（Meta, USA）
- 通讯作者：未说明（论文中未明确标注）
- 作者列表：Ju Lin（Meta, USA）、Jing Pan（Meta, USA）、Ruizhi Li（Meta, USA）、Ming Sun（Meta, USA）、Yuzong Liu（Meta, USA）、Alaa Hassan（Meta, USA）、Jing Zheng（Meta, USA）、Florian Metze（Meta, USA）

💡 **毒舌点评**

亮点：论文精准聚焦于智能眼镜“听清特定人”的刚需，提出了从系统架构（级联/端到端）到流式推理的全套解决方案，实验设计也比较全面，覆盖了分离、识别、翻译三个环节。短板：所有实验都在模拟数据上“闭卷考试”，缺乏真实世界复杂声学环境的“开卷考验”，这让人对其宣称的“鲁棒性”和实际落地能力打上一个问号；此外，端到端SOT方案在部分任务上不如传统的级联方案，显示出“大而全”未必总是最优解。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及所提出的源分离模型或微调后SLM权重的公开计划。仅提及使用了开源的Gemma-3n模型。
- 数据集：训练所用的多通道模拟数据基于公开的单通道数据集（Common Voice, MLS）和模拟流程生成，但未提供生成好的模拟多通道数据集本身。
- Demo：未提及。
- 复现材料：论文提供了模型架构描述、训练超参数（如LoRA rank, 学习率, batch size, 优化器, 训练轮数）、评估指标和数据集来源（Common Voice, MLS, Fleurs, LibriSpeech），但缺乏关键的模拟数据生成脚本、NLCMV波束成形的具体实现细节（被指向另一篇论文）。
- 论文中引用的开源项目：Gemma-3n 4B模型（来自Hugging Face）。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

这篇论文旨在解决基于大语言模型（LLM）的语音系统在智能眼镜场景中面临的挑战：现有模型多为单通道、单说话人设计，难以处理多麦克风阵列录制的、包含佩戴者（近场）和对话者（远场）的定向多人语音。

论文提出了两种将方向性理解能力集成到LLM中的新方法：1) 级联系统：先利用基于编码器-解码器架构的流式语音分离模型分离佩戴者和对话者的语音，再通过比较RMS比值判断说话人身份，最后将参考通道音频连同任务提示输入LLM；2) 端到端系统：采用序列化输出训练（SOT）策略，直接对LLM进行微调，使其能够处理经非线性约束最小方差（NLCMV）波束成形增强后的单通道音频，并同时输出带说话人标签的识别与翻译结果。两种方法都利用了LoRA进行高效微调，并实现了600毫秒分块的流式推理。

主要实验结果（基于模拟的FLEURS测试集）如下表所示，表明两种方法在说话人归属准确率、语音识别（WER）和翻译（BLEU）任务上均优于或媲美传统基线系统。在“伙伴说西班牙语”场景中，级联SS+SLM和端到端SOT+SLM的BLEU分数分别达到25.3和22.6，显著高于JSTAR基线的18.3。

| 模型 | Wearer | Partner | |
| :--- | :--- | :--- | :--- |
| | WER[%]↓ | SA[%]↓ | BLEU↑ | WER[%]↓ | SA[%]↓ | BLEU↑ |
| 伙伴：西班牙语 | | | | | | |
| Multi-channel ASR [1] | 16.5 | 0.0 | - | 13.2 | 0.0 | - |
| JSTAR [22] | 16.7 | 0.0 | 18.6 | 13.2 | 0.0 | 18.3 |
| SS+SLM | 12.5 | 0.0 | 22.0 | 10.6 | 0.6 | 25.3 |
| Multi-channel SOT+SLM | 17.3 | 0.0 | 19.6 | 16.5 | 1.8 | 22.6 |
| 伙伴：法语 | | | | | | |
| Multi-channel ASR [1] | 16.7 | 0.0 | - | 22.0 | 0.0 | - |
| JSTAR [22] | 16.5 | 0.0 | 19.3 | 21.9 | 0.0 | 16.5 |
| SS+SLM | 12.9 | 0.0 | 36.9 | 22.8 | 0.4 | 28.4 |
| Multi-channel SOT+SLM | 15.5 | 0.2 | 34.7 | 25.9 | 2.5 | 26.5 |

论文的实际意义在于为下一代智能可穿戴设备提供了可行的实时多语言交互技术方案。其主要局限性是所有实验数据均为模拟生成，缺乏真实世界录音的验证；同时，端到端的SOT+SLM方案在说话人归属准确率（SA）上仍存在少量错误，且在部分识别任务上性能不及基线。

---

### 🥉 [Joint Autoregressive Modeling of Multi-Talker Overlapped Speech Recognition and Translation](/audio-paper-digest-blog/posts/2026-04-29-joint-autoregressive-modeling-of-multi-talker)

✅ **7.0/10** | 前25% | #语音识别 #语音翻译 | #自回归模型 #多任务学习 | #语音识别 #语音翻译

👥 **作者与机构**

- 第一作者：Tomohiro Tanaka（NTT, Inc., Human Informatics Laboratories）
- 通讯作者：未说明
- 作者列表：Tomohiro Tanaka（NTT, Inc., Human Informatics Laboratories）、Ryo Masumura（NTT, Inc., Human Informatics Laboratories）、Naoki Makishima（NTT, Inc., Human Informatics Laboratories）、Mana Ihori（NTT, Inc., Human Informatics Laboratories）、Naotaka Kawata（NTT, Inc., Human Informatics Laboratories）、Shota Orihashi（NTT, Inc., Human Informatics Laboratories）、Satoshi Suzuki（NTT, Inc., Human Informatics Laboratories）、Taiga Yamane（NTT, Inc., Human Informatics Laboratories）

💡 **毒舌点评**

这篇论文的核心贡献是清晰且务实的：将多说话人重叠语音的识别（ASR）和翻译（ST）从两个独立的模型合并为一个联合自回归模型，从而解决了输出时说话人数量不匹配和未对齐的痛点。其序列化输出训练（SOT）的扩展应用自然流畅，实验数据也支撑了方法的有效性。然而，论文最大的短板在于实验部分严重依赖通过混合单人语音合成的“多说话人”数据，这与真实世界中包含回声、不同混响、说话人重叠程度变化的会议或对话场景存在显著差距，削弱了其结论在实际应用中的说服力。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用了内部日语数据集和公开的CoVoST 2数据集，但未提供混合构造的多说话人数据集的获取方式。
- Demo：未提及。
- 复现材料：给出了模型架构、部分超参数（层数、维度、词汇表大小）、优化器、正则化方法等信息，但缺失训练硬件、batch size、学习率、完整训练曲线等细节。
- 论文中引用的开源项目：提到了SentencePiece分词工具、SACREBLEU评估工具。
- 总体：论文中未提及开源计划。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

这篇论文旨在解决一个实际痛点：在多说话人重叠语音场景中，如何同时获得每位说话人准确且相互对齐的原始文本转录和外语翻译。现有方法通常分别训练m-ASR和m-ST模型，再试图对齐它们的输出，但这无法利用转录与翻译间的语义对应关系，且容易导致输出中估计的说话人数量不一致。
论文的核心方法是提出一个统一的自回归端到端模型（m-ASR-ST）。该模型在编码器（Transformer）处理语音特征后，解码器以单个序列的形式，交替生成每位说话人的转录（带有`[ASR]`标签）和翻译（带有`[ST]`标签），例如：`[SOS] [ASR] 说话人1的转录 [ST] 说话人1的翻译 [ASR] 说话人2的转录 [ST] 说话人2的翻译 [EOS]`。
与分别训练的基线方法相比，新方法的主要创新在于首次将序列化输出训练（SOT）扩展到多说话人联合ASR-ST任务中，显式地建模了转录与翻译的依赖关系。
实验在日英（Ja→En）和英德（En→De）任务上进行。结果显示，联合模型在2人和3人重叠的测试集上，无论是WER（转录错误率）还是BLEU（翻译质量）均优于分别训练的m-ASR与m-ST基线。例如，在Ja→En 3人测试集上，联合模型（使用预训练）的WER为9.95（基线为12.26），BLEU为22.52（基线为21.63）。此外，联合模型在“说话人计数准确率”和“ASR与ST输出说话人数量一致率”上达到了接近100%的完美表现。
其实际意义在于能为多语言会议、访谈等场景提供更一致、更准确的转录-翻译对，提升跨语言沟通效率。主要局限性在于，实验数据全部通过混合已有的单人语音数据合成，可能无法完全代表真实世界复杂声学环境下的重叠语音特性，论文也未公开代码、模型或数据集。

---

