---
title: "ICLR 2026 - 语音大模型 论文列表"
date: 2026-05-03
draft: false
tags: ["语音大模型"]
categories: [iclr-2026]
description: "共 4 篇 ICLR 2026 语音大模型 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音大模型

共 **4** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [TASTE: Text-Aligned Speech Tokenization and Embedding for Sp](/audio-paper-digest-blog/posts/2026-05-03-taste-text-aligned-speech-tokenization-and) | 8.5分 | 前25% |
| 🥈 | [Can Speech LLMs Think while Listening?](/audio-paper-digest-blog/posts/2026-05-03-can-speech-llms-think-while-listening) | 8.5分 | 前25% |
| 🥉 | [Closing the Gap Between Text and Speech Understanding in LLM](/audio-paper-digest-blog/posts/2026-05-03-closing-the-gap-between-text-and-speech) | 8.0分 | 前25% |
| 4. | [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-03-latent-speech-text-transformer) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [TASTE: Text-Aligned Speech Tokenization and Embedding for Spoken Language Modeling](/audio-paper-digest-blog/posts/2026-05-03-taste-text-aligned-speech-tokenization-and)

🔥 **8.5/10** | 前25% | #语音大模型 | #端到端 | #语音合成 #多模态模型

👥 **作者与机构**

- 第一作者：Liang-Hsuan Tseng（台湾大学电气工程研究所；MediaTek Research 实习）
- 通讯作者：Da-shan Shiu（MediaTek Research）， Hung-yi Lee（台湾大学人工智能研究中心）
- 作者列表：Liang-Hsuan Tseng（台湾大学电气工程研究所；MediaTek Research）， Yi-Chang Chen（MediaTek Research）， Kuan-Yi Lee（台湾大学电气工程研究所；MediaTek Research）， Da-shan Shiu（MediaTek Research）， Hung-yi Lee（台湾大学人工智能研究中心）

#

💡 **毒舌点评**

亮点：TASTE优雅地解决了联合文本-语音建模中长期存在的序列长度不匹配和信息冗余问题，通过将语音标记与文本标记在分词阶段就进行强制对齐，使得后续的联合建模变得“直截了当”，这一设计思路具有很强的启发性和工程价值。
短板：论文目前主要在英语数据集（Emilia， LibriTTS）上进行验证，对于非英语、复杂声学环境（如多人说话、背景噪声、非词汇发声）的泛化能力尚未证明；此外，作为流式对话系统关键的延迟与实时性指标也未被讨论。

#

🔗 **开源详情**

- 代码：论文提供了代码仓库链接：`https://mtkresearch.github.io/TASTE-SpokenLM.github.io`。
- 模型权重：论文明确提到提供了预训练模型（代码、模型和Demo可从上述网站获取）。
- 数据集：使用了公开数据集Emilia（英文子集）和LibriTTS/LibriSpeech。论文未提及创建新数据集。
- Demo：提供了在线演示页面：`https://mtkresearch.github.io/TASTE-SpokenLM.github.io`。
- 复现材料：论文在附录中提供了极为详细的训练细节（优化器、学习率、batch size、硬件）、超参数设置、评估指标计算方式、算法伪代码（算法1）以及消融研究结果。
- 引用的开源项目：Whisper (语音编码器), LLaMA (SLM基座), DeepSpeed, Liger Kernel (训练加速), HiFi-GAN (声码器), Montreal Forced Aligner (评估)等。

📌 **核心摘要**

本文针对联合文本-语音口语语言模型（SLM）中模态间序列长度不匹配及信息冗余的问题，提出了文本对齐的语音分词与嵌入方法。该方法的核心是在分词阶段就引入文本转录，通过一个基于注意力的聚合机制，将语音编码器的表示聚合成与文本标记一一对应的序列，并以语音重建为端到端训练目标。与现有基于固定步长下采样的语音标记不同，TASTE的标记具有动态频率，并专注于承载副语言信息。实验表明，TASTE能在极低比特率（~150 bps）下实现高质量的语音重建与编辑。更重要的是，基于TASTE进行联合建模时，无需复杂的对齐启发式规则。在仅使用1.3B参数并通过LoRA微调的条件下，其口语语言模型在语音续写、似然选择等任务上性能超越了多个7B参数的预训练SLM。本文首次提出利用重建目标端到端学习专为文本-语音联合建模设计的分词与嵌入方法，为构建更有效的口语模型提供了新视角。主要局限在于模型尚未处理对话交互、多语言及非词汇声音，且未优化实时延迟。

#

---

### 🥈 [Can Speech LLMs Think while Listening?](/audio-paper-digest-blog/posts/2026-05-03-can-speech-llms-think-while-listening)

🔥 **8.5/10** | 前25% | #语音大模型 | #自回归模型 | #语音对话系统 #流式处理

👥 **作者与机构**

- 第一作者：Yi-Jen Shih（The University of Texas at Austin）
- 通讯作者：未明确说明（作者列表标注了等贡献，且提供了多个邮箱）
- 作者列表：
  - Yi-Jen Shih (The University of Texas at Austin, Meta Superintelligence Labs)
  - Desh Raj (Meta Superintelligence Labs)
  - Chunyang Wu (Meta Superintelligence Labs)
  - Wei Zhou (Meta Superintelligence Labs)
  - SK Bong (Meta Superintelligence Labs)
  - Yashesh Gaur (Meta Superintelligence Labs)
  - Jay Mahadeokar (Meta Superintelligence Labs)
  - Ozlem Kalinli (Meta Superintelligence Labs)
  - Michael L. Seltzer (Meta Superintelligence Labs)

#

💡 **毒舌点评**

亮点：论文将“边听边想”这个认知概念工程化，提出基于信息论的“问题完整度”度量来动态决定推理启动时机，比固定移位的启发式方法更优雅且有效，展现了将人类对话机制引入AI系统的精巧设计。短板：核心推理能力提升主要依赖文本CoT，而CoT本身在文本LLM中已非常成熟，本文的创新更多是在语音场景下的适配与组合；此外，所有实验均基于文本合成语音构建的评估集，模型在真实自然语音交互下的鲁棒性和泛化能力尚待验证。

#

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开Moshi微调后的模型权重。
- 数据集：论文描述了训练集（来自CoT-Collection的子集）和评估集（SRQA）的构建方法，但未提及公开下载链接或工具。
- Demo：未提及在线演示。
- 复现材料：提供了详细的训练和评估参数（附录A.2）、数据集统计和示例（附录A.3）、以及用于数据改写和评估的LLM系统提示词（附录A.6），为复现提供了良好基础。
- 引用的开源项目：依赖的基础模型Moshi是公开的。评估使用了公开的LLaMA-3.1 405B作为裁判，以及Pyannote VAD和Whisper进行语音处理和转写。

📌 **核心摘要**

1.  问题：语音大模型（Speech LLMs）虽然在端到端语音对话上取得进展，但在需要复杂推理的任务（如数学、常识推理）上表现仍落后于文本大模型。同时，引入链式思维（CoT）推理会不可避免地增加响应延迟，破坏语音交互的自然性。
2.  方法核心：本文提出在多流语音大模型（Moshi）的文本独白通道上集成文本格式的CoT，并设计了两种降低延迟的策略：(a) “问题完整度”度量：利用外部语言模型计算部分问题对最终答案预测的KL散度，从而在用户问题“足够完整”时提前启动推理；(b) 基于DPO的偏好微调：通过拒绝采样构造偏好数据，进一步提升早期推理的准确率并缩短推理链长度。
3.  创新点：与已有工作相比，本文的新在于：(1) 首次系统性地研究在多流Speech LLM中应用文本CoT的效果；(2) 提出了基于语义完整性的“边听边想”触发机制，而非简单的基于时间的启发式方法；(3) 将DPO应用于优化语音场景下的推理效率与准确率权衡。
4.  主要实验结果：论文构建了“语音推理问答（SRQA）”基准。主要结果如下：
    - 文本CoT提升准确率：在SRQA任务上，相比Moshi基线，加入文本CoT微调后平均准确率提升2.4倍（绝对提升29.1%）。
    - “问题完整度”机制降低延迟：在可比延迟条件下，该方法在ARC-Easy任务上比固定词移位启发式方法带来4% 的准确率提升。
    - DPO优化权衡：通过长度偏好微调，在保持准确率不变的情况下，将推理延迟（以token数计）降低了约70%。

| 模型/方法 | 预训练文本tokens | ARC-E | ARC-C | SIQA | PIQA | GSM8K | LLaMA-QS |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 文本LLM | | | | | | | |
| LLaMA2-7b-Chat | 2T | 63.7 | 47.1 | 13.4 | 25.8 | 29.4 | 70.6 |
| Gemma-7B-Instruct | 6T | 82.5 | 66.2 | 18.3 | 45.0 | 43.1 | 69.7 |
| 语音LLM | | | | | | | |
| Qwen2-Audio-7B | 2.4T | 59.1 | 42.4 | 21.9 | 24.5 | 18.1 | 64.7 |
| Kimi-Audio-7B | 18T | 83.0 | 71.5 | 32.9 | 34.4 | 15.7 | 61.7 |
| Moshi (baseline) | 2.1T | 30.2 | 21.5 | 22.8 | 23.8 | 8.7 | 42.8 |
| Moshi + CoT (Ours) | 2.1T | 77.7 | 59.8 | 56.1 | 56.9 | 16.1 | 57.8 |

5.  实际意义：该工作为构建更智能、更响应迅速的语音交互系统提供了可行的技术路径，使Speech LLMs能胜任更复杂的认知任务，向“智能语音助手”的目标迈进了一步。
6.  主要局限性：(1) 推理能力的提升主要源于文本CoT，而非模型本身对语音语义的深度理解；(2) 评估所用的语音数据均为文本转语音（TTS）生成，可能无法完全代表真实世界中的口音、语速、背景噪声等复杂声学条件；(3) 开源程度有限，阻碍了社区的直接验证与拓展。

#

---

### 🥉 [Closing the Gap Between Text and Speech Understanding in LLMs](/audio-paper-digest-blog/posts/2026-05-03-closing-the-gap-between-text-and-speech)

🔥 **8.0/10** | 前25% | #语音大模型 | #知识蒸馏 | #主动学习 #大语言模型

👥 **作者与机构**

- 第一作者：Santiago Cuervo (Université de Toulon, Aix Marseille Université, CNRS, LIS；实习于Apple)
- 通讯作者：Zakaria Aldeneh (Apple)
- 作者列表：Santiago Cuervo (Université de Toulon, Aix Marseille Université, CNRS, LIS；实习于Apple)、Skyler Seto (Apple)、Maureen de Seyssel (Apple)、Richard He Bai (Apple)、Zijin Gu (Apple)、Tatiana Likhomanenko (Apple)、Navdeep Jaitly (Apple)、Zakaria Aldeneh (Apple)

💡 **毒舌点评**

这篇论文的分析非常扎实，通过量化“遗忘”和“跨模态错位”清晰地诊断了语音适应大模型性能下降的核心病因，SALAD方法在仅使用极少量数据的情况下，就在多个基准上达到了与使用海量数据训练的强力基线相当的水平，展示了出色的样本效率；但其“竞争力”的上限也仅限于“竞争”，SALAD-7B并未在所有基准上显著超越最强的闭源基线（如Qwen2.5-Omni），且所使用的架构（Mimi编码器+轻量适配器）在当前追求强表征对齐的主流中显得较为保守，可能限制了其最终性能天花板。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开预训练的SALAD模型权重。
- 数据集：使用了公开的LibriHeavy、Emilia（YODAS-EN）和FineWeb-Edu语料。合成语音的具体数据未公开提供。
- Demo：未提供在线演示。
- 复现材料：提供了非常详细的训练配置、超参数、架构描述、数据处理流程和评估协议（包括提示模板），这些信息足以让研究人员在同等规模的计算资源下进行复现。
- 论文中引用的开源项目：引用并使用了Qwen2.5（基础LLM）、Mimi（语音编码器）、Kokoro-TTS（合成语音）、Whisper-v3（级联基线ASR）、BAAI/bge-large-en-v1.5（文本嵌入）、SmolLM（混入训练数据）、FineWeb-Edu（文本语料）等开源项目。
- 总体开源计划：论文中未提及明确的开源计划。

📌 **核心摘要**

1.  解决的问题：现有将大语言模型（LLM）适配以处理语音输入的方法，在语言理解任务上的表现持续落后于原始的文本LLM，形成了“文本-语音理解差距”。本文旨在深入分析此差距的成因，并提出一种数据高效的方法来缩小它。
2.  方法核心：提出SALAD（Sample-efficient Alignment with Learning through Active selection and cross-modal Distillation）方法。该方法分为两阶段：第一阶段，在自然语音数据上使用跨模态知识蒸馏（以文本LLM为教师）进行训练，以减轻遗忘并提升跨模态对齐；第二阶段，通过主动学习算法，从大规模文本语料中筛选并合成少量针对性的语音数据，以最小代价覆盖自然语音语料未覆盖的领域，进一步减少残余错位。
3.  新意与对比：新意在于：(1) 系统量化并验证了“遗忘”和“跨模态错位”是导致差距的关键因素；(2) 证明了将跨模态蒸馏与基于主动学习的定向、小规模合成数据相结合，比依赖大规模通用合成数据或私有数据更高效、更具可复现性。
4.  主要实验结果：SALAD-3B/7B在六个广泛的知识、推理和语言理解基准的语音版本上进行评估。SALAD-7B取得了平均75.4%的准确率，与使用超十倍数据训练的Qwen2.5-Omni-7B（76.7%）性能接近，而其平均“差距”（6.2%）显著小于其他开源端到端模型（如GLM-4-Voice-9B差距为20.1%）。与级联流水线（ASR+LLM）相比，SALAD性能具有竞争力。消融实验表明，主动选择（γ=5）在多项任务上优于均匀采样（γ=0）。
5.  实际意义：为构建高效、可复现的语音理解大模型提供了新思路，表明通过精心设计的训练目标和数据选择策略，可以大幅降低对海量合成语音或私有数据的依赖，有助于民主化语音AI研发。
6.  主要局限性：(1) 模型架构相对简单（Mimi+轻量适配器），可能未充分利用更强的表征对齐技术；(2) 评估主要聚焦于理解任务，未涉及语音生成；(3) 与最强闭源模型的性能仍有微小差距。

---

### 4. [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-03-latent-speech-text-transformer)

✅ **7.5/10** | 前25% | #语音大模型 | #预训练 | #多模态模型 #跨模态

👥 **作者与机构**

- 第一作者：Yen-Ju Lu（约翰霍普金斯大学语言与语音处理中心）
- 通讯作者：Srinivasan Iyer（Meta超级智能实验室），Duc Le（Meta超级智能实验室）（论文中标注为共同末位作者）
- 作者列表：Yen-Ju Lu（约翰霍普金斯大学语言与语音处理中心）、Yashesh Gaur（Meta超级智能实验室）、Wei Zhou（Meta超级智能实验室）、Benjamin Muller（Meta超级智能实验室）、Jesus Villalba（约翰霍普金斯大学语言与语音处理中心）、Najim Dehak（约翰霍普金斯大学语言与语音处理中心）、Luke Zettlemoyer（Meta超级智能实验室）、Gargi Ghosh（Meta超级智能实验室）、Mike Lewis（Meta超级智能实验室）、Srinivasan Iyer（Meta超级智能实验室）、Duc Le（Meta超级智能实验室）

💡 **毒舌点评**

这篇论文精准地抓住了语音-文本多模态模型中的一个核心痛点——模态间token密度不平衡导致的效率瓶颈，并提出了一个简洁而有效的“patch”抽象来对齐粒度，其基于字节级潜在Transformer（BLT）的迁移思路清晰，实验也覆盖了从420M到7B的多种规模，数据扎实。然而，其“课程patching”策略虽然巧妙，却依然依赖外部对齐器（Wav2Vec2+CTC）在训练初期提供监督，这为完全端到端的训练和更广泛的部署引入了额外的复杂性和潜在误差源。

🔗 **开源详情**

- 代码：提供了开源代码仓库链接：`https://github.com/facebookresearch/lst`。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：预训练所用语音数据集（LibriLight, People’s Speech, MLS, Spotify）均为公开数据集，但论文未说明是否提供统一的预处理脚本或交织数据生成工具。用于评估的Speech HellaSwag等基准，论文提到使用Kokoro TTS重新生成了音频，但未明确是否公开新的音频文件。
- Demo：论文中未提供在线演示。
- 复现材料：论文附录提供了极其详细的训练配置（优化器、学习率调度、硬件、批大小）、模型架构配置表（Table 7）、数据构成与比例分析、以及多次实验的平均值和标准差（Table 9），复现指导性强。
- 引用的开源项目：
  - HuBERT（语音tokenizer）
  - LLaMA 2的SentencePiece分词器
  - Wav2Vec2+CTC（用于强制对齐）
  - Kokoro TTS（用于生成评估音频）
  - HiFi-GAN（声码器，论文中提及但未详细描述）
  - BLT（Byte Latent Transformer，LST架构的灵感来源）

📌 **核心摘要**

1.  要解决的问题：现有的自回归语音-文本模型（如SpiritLM）存在严重的模态不平衡问题。语音token序列远长于文本token序列，导致计算资源（预训练和推理）过度分配给语音，阻碍了有效的跨模态对齐，并使得模型规模和性能的扩展效率低下。
2.  方法核心：提出潜在语音-文本Transformer (LST) 架构。其核心是一个patch编码器，将密集的语音token序列动态聚合成更高层、信息更密集的语音patch，作为自回归建模的基本单元。全局Transformer则在文本token和语音patch的交织序列上建模。一个轻量级patch解码器负责从patch表示重建语音token。
3.  与已有方法相比新在哪里：
    *   对齐建模粒度：首次通过结构化的“patch”机制，在模型内部实现了语音和文本在序列建模粒度上的对齐，而不仅仅是数据层面的交织。
    *   统一的压缩机制：提出了静态patching、基于对齐的patching和课程patching三种策略。课程patching在训练中逐步从依赖外部对齐信息过渡到完全静态的patching，兼顾了训练效率和推理简便性。
    *   解决信息密度失衡：该架构直接针对了“语音token比文本token信息密度低得多”这一根本问题，通过压缩提升了语音处理的计算效率。
4.  主要实验结果：
    *   在计算受控和数据受控设置下，LST（课程patching）在Speech HellaSwag上分别比基线（Base SpeechLLM）绝对提升+6.5% 和 +5.3%，同时在文本HellaSwag上也分别提升+5.2%和+2.6%。
    *   模型扩展性实验显示，从420M到1.8B参数，LST的收益随模型规模增大而增长。在7B规模下，收益依然存在。
    *   下游任务验证：LST稳定了ASR适配（1k迭代后WER从>140%降至6.8%/10.4%），并在TTS任务中将生成单元数减少约4倍而不损失质量。
    *   关键对比数据表：
        | 模型 | 计算节省 | HellaSwag (S→S) | HellaSwag (T→T) | StoryCloze (S→S) | StoryCloze (T→T) |
        | :--- | :---: | :---: | :---: | :---: | :---: |
        | Base SpeechLLM | - | 40.2 | 49.6 | 60.2 | 69.1 |
        | LST (Curriculum) | 19.7% | 45.5 | 52.2 | 61.2 | 71.6 |
        （注：数据来自论文Table 4，为数据受控设置下的结果）
5.  实际意义：为构建更高效、可扩展的语音-文本统一基础模型提供了一种有前景的架构设计。通过解决计算效率瓶颈，有望降低训练成本、加速推理，并促进语音模态性能向文本模态看齐。
6.  主要局限性：
    *   课程patching策略在训练早期依赖外部语音-文本对齐器，增加了系统复杂性和潜在误差。
    *   研究限于半双工（轮流发言）的语音-文本建模，未涉及全双工实时对话。
    *   实验未探索指令微调或更复杂的下游任务适配。

---

