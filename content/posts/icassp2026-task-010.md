---
title: "ICASSP 2026 - 基准测试 论文列表"
date: 2026-04-29
draft: false
tags: ["基准测试"]
categories: [icassp-2026]
description: "共 5 篇 ICASSP 2026 基准测试 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 基准测试

共 **5** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [StyleBench: Evaluating Speech Language Models on Conversatio](/audio-paper-digest-blog/posts/2026-04-29-stylebench-evaluating-speech-language-models-on) | 8.5分 | 前25% |
| 🥈 | [LongSpeech: A Scalable Benchmark for Transcription, Translat](/audio-paper-digest-blog/posts/2026-04-29-longspeech-a-scalable-benchmark-for-transcription) | 7.8分 | 前25% |
| 🥉 | [Savgbench: Benchmarking Spatially Aligned Audio-Video Genera](/audio-paper-digest-blog/posts/2026-04-29-savgbench-benchmarking-spatially-aligned-audio) | 7.5分 | 前50% |
| 4. | [Streamingbench: Assessing the Gap for MLLMs to Achieve Strea](/audio-paper-digest-blog/posts/2026-04-29-streamingbench-assessing-the-gap-for-mllms-to) | 7.5分 | 前25% |
| 5. | [Can Large Audio Language Models Understand Audio Well? Speec](/audio-paper-digest-blog/posts/2026-04-29-can-large-audio-language-models-understand-audio) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [StyleBench: Evaluating Speech Language Models on Conversational Speaking Style Control](/audio-paper-digest-blog/posts/2026-04-29-stylebench-evaluating-speech-language-models-on)

🔥 **8.5/10** | 前25% | #基准测试 | #模型评估 | #语音大模型 #语音情感识别

👥 **作者与机构**

- 第一作者：Haishu Zhao（东北大学计算机科学与工程学院 NLP实验室）
- 通讯作者：Tong Xiao（东北大学计算机科学与工程学院 NLP实验室； NiuTrans Research）
- 作者列表：Haishu Zhao（东北大学计算机科学与工程学院 NLP实验室），Aokai Hao（东北大学计算机科学与工程学院 NLP实验室），Yuan Ge（东北大学计算机科学与工程学院 NLP实验室），Zhenqiang Hong（东北大学计算机科学与工程学院 NLP实验室），Tong Xiao（东北大学计算机科学与工程学院 NLP实验室； NiuTrans Research），Jingbo Zhu（东北大学计算机科学与工程学院 NLP实验室； NiuTrans Research）

#

💡 **毒舌点评**

亮点：这篇论文精准地抓住了当前语音大模型评估中的一个真实痛点——风格控制能力缺乏系统性量化标准，其构建的多维度、多轮对话基准（StyleBench）和配套评估指标（VSP, SVD）为后续研究提供了急需的“尺子”。短板：作为一篇“基准测试”论文，其自身评估方法的局限性（如情感维度仍依赖人工标注）可能成为新的瓶颈，且未深入探讨不同语言（论文含中英文数据）对风格控制评估的差异性，分析深度略显不足。

#

🔗 **开源详情**

- 代码：论文中未提及评估工具包或脚本的代码仓库链接。仅在摘要脚注中提供了数据集的HuggingFace链接。
- 模型权重：未提及被评估模型（如GLM-4-Voice, Kimi-Audio）的权重获取方式，这些模型由各自团队发布。
- 数据集：是公开的。论文提供了明确的HuggingFace数据集链接：`https://huggingface.co/datasets/ak0255/StyleBench`。
- Demo：未提及在线演示。
- 复现材料：论文提供了详细的数据集构建流程描述和评估指标定义，但具体的训练/评估超参数、硬件配置等细节未说明。
- 论文中引用的开源项目：CosyVoice2（用于语音合成）、FFmpeg（用于音频后处理）、Whisper-large-v3（用于转录）、Emotion2Vec（用于情感分类）、RAVDESS（情感语音参考数据集）、Qwen3-4B-Instruct（用于语义相关性判断）。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  要解决什么问题：现有的语音语言模型（SLM）已具备根据提示控制生成语音风格（如情感、语速）的能力，但领域内缺乏一个系统性的基准（Benchmark）来客观评估模型在多轮对话中理解和控制风格及强度的能力。
2.  方法核心是什么：提出了StyleBench，一个包含14.4个多轮对话数据的基准数据集，覆盖情感、语速、音量、音高四个维度。每个对话从第三轮开始，要求模型根据提示调整风格的强度（增强或减弱）。同时，开发了维度特定的评估工具包，结合自动指标（语速、音量、音高的变化度）和人工评估（情感变化）来量化模型的“有效响应率”（VSP）和“风格变化度”（SVD）。
3.  与已有方法相比新在哪里：与之前聚焦于单轮任务或仅区分情感类别的评估（如AudioBench）不同，StyleBench是首个专注于多轮对话中多维度风格控制和强度连续变化的评估基准。其对话设计更自然（使用自然语言指令而非模板），并严格控制了语义内容不变，以确保评估仅针对副语言特征。
4.  主要实验结果如何：对10个开源模型的评估显示：
    - 语义一致性是前提：多数模型在单轮对话中语义相关性（SRD）较高，但在多轮对话中语义相关性（MRD）显著下降，仅Qwen2.5-omni, GLM-4-Voice, Kimi-Audio的MRD超过60%。
    - 性能差距显著：通过筛选后，Kimi-Audio和GLM-4-Voice在情感和强度控制（VSP， SVD）上表现领先，而LLaMA-omni2等模型对情感调整指令几乎无响应。具体数据见下表。

    表2：平均语义相关度（SRD单轮， MRD多轮）
    | 模型 | 参数量 | SRD(%)↑ | MRD(%)↑ |
    | :--- | :--- | :--- | :--- |
    | Qwen2.5-omni | 7B | 97.36 | 64.51 |
    | GLM-4-Voice | 9B | 91.53 | 69.31 |
    | Kimi-Audio | 7B | 90.62 | 67.43 |

    表3：情感维度有效响应率VSP(%)（Turn 2 | Turn 3）
    | 模型 | Angry | Happy | Sad |
    | :--- | :--- | :--- | :--- |
    | Qwen2.5-omni | 23.13 \| 13.75 | 40.00 \| 30.00 | 24.38 \| 18.13 |
    | GLM-4-Voice | 50.63 \| 36.88 | 44.38 \| 33.13 | 57.50 \| 51.25 |
    | Kimi-Audio | 68.75 \| 15.63 | 47.50 \| 21.25 | 73.13 \| 34.38 |

5.  实际意义是什么：为语音语言模型的说话人风格控制能力提供了第一个公开、系统的评估标尺，有助于推动该技术从“能用”向“精准可控”发展。论文的分析指出了训练数据和语音分词器是影响风格控制能力的关键因素，为模型优化指明了方向。
6.  主要局限性是什么：评估基准本身存在局限性：情感维度的变化评估仍依赖人工，限制了可扩展性；评估工具包未明确开源；数据集虽然双语，但未深入分析语言差异对结果的影响；所有语音由单一系统（CosyVoice2）合成，可能无法完全反映被评估模型自身的语音生成特性。

#

---

### 🥈 [LongSpeech: A Scalable Benchmark for Transcription, Translation and Understanding in Long Speech](/audio-paper-digest-blog/posts/2026-04-29-longspeech-a-scalable-benchmark-for-transcription)

✅ **7.8/10** | 前25% | #基准测试 | #数据集 | #语音识别 #语音翻译

👥 **作者与机构**

- 第一作者：Fei Yang（上海交通大学；阿里巴巴国际数字商务）
- 通讯作者：Chenyang Lyu（阿里巴巴国际数字商务）
- 作者列表：
    - Fei Yang（上海交通大学；阿里巴巴国际数字商务）
    - Xuanfan Ni（阿里巴巴国际数字商务）
    - Renyi Yang（代尔夫特理工大学；阿里巴巴国际数字商务）
    - Jiahui Geng（林雪平大学）
    - Qing Li（格罗宁根大学）
    - Chenyang Lyu（阿里巴巴国际数字商务）
    - Yichao Du（阿里巴巴国际数字商务）
    - Longyue Wang（阿里巴巴国际数字商务）
    - Weihua Luo（阿里巴巴国际数字商务）
    - Kaifu Zhang（阿里巴巴国际数字商务）

💡 **毒舌点评**

亮点：论文直面语音模型从“短句能手”到“长卷大师”转型过程中的评测荒漠，构建了一个任务全面、数据量级宏大（10万+段，每段约10分钟）的“压力测试场”，其“内容分离”和“时序定位”等任务设计尤其刁钻，能有效暴露模型在长上下文推理上的短板。短板：作为基准，其自身的“创新”更多是工程整合与任务设计，论文对实验结果的剖析深度略显不足（例如，为何某些模型在特定任务上崩溃？），且完全依赖GPT-4作为某些任务的评估器，引入了“用更贵的模型评估便宜的模型”的黑箱与成本问题。

🔗 **开源详情**

-   代码：论文中未提及代码链接。
-   模型权重：论文评估了多个现有模型，但未提及公开自己训练的模型权重。
-   数据集：论文明确表示“The benchmark will be made publicly available to the research community.”，即数据集计划开源，但未给出具体的下载链接或平台（如Hugging Face）。
-   Demo：论文中未提及。
-   复现材料：论文提供了数据构建的方法论和流程描述，这是重要的复现材料。但未提供数据预处理脚本、评估脚本或具体的超参数配置。
-   引用的开源项目：论文引用了被评估的音频语言模型的代码库或技术报告，如Whisper [1], Qwen2-Audio [5], Kimi-Audio [6], AudioFlamingo3 [9], Voxtral [10], DashengLM [11]。也引用了评估工具如GPT-4-Turbo [14]和指标库如ROUGE [13]。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  解决问题：现有语音基准测试（如LibriSpeech）主要针对短音频，无法有效评估模型处理真实世界长时音频（如会议、讲座）的能力，特别是在需要跨片段理解、推理和跟踪复杂信息时。
2.  方法核心：提出一个可扩展的、大规模的基准测试构建流程。该流程从多个公开语音数据集（如LibriSpeech， VoxPopuli）中，通过说话人/主题聚类、嵌入相似度选择等方法，拼接或筛选出约10万个时长近10分钟的长语音片段。每个片段均被标注用于8项任务，包括转录（ASR）、翻译（S2TT）、摘要、说话人计数、语言检测、内容分离、情感分析和时序问题定位。
3.  与已有方法相比新在哪里：相比已有基准，LongSpeech的核心创新在于其“长”与“全”。它首次为长语音处理提供了覆盖从感知（转录）到高阶认知（摘要、问答）的完整评测矩阵，且数据规模远超以往的长语音评估集（如BLAB）。
4.  主要实验结果：实验揭示了当前最强音频语言模型（如Voxtral， Qwen2-Audio）在长语音任务上的普遍局限。
    - ASR与翻译：模型表现分化。Voxtral翻译最佳（BLEU 30.20），但ASR错误率仍高；AudioFlamingo3等模型在长音频上几乎失效（CER >1.5， BLEU ≈0）。
    - 高阶理解任务：性能断崖式下跌。例如，在时序问题定位这���最复杂任务上，最强的Voxtral模型严格准确率仅23.69%，DashengLM仅0.48%。在说话人计数任务中，模型能理解问题（解析率近100%）但无法准确计数（准确率28-35%）。具体结果见下表。

    表1：ASR与翻译任务性能（摘自论文表3）
    | 模型 | Non-CJK WER ↓ | CJK CER ↓ | Overall CER ↓ | S2TT BLEU ↑ |
    | :--- | :---: | :---: | :---: | :---: |
    | Whisper | 0.186 | 0.385 | 0.110 | —— |
    | Kimi-audio | 0.542 | 0.905 | 0.501 | 15.81 |
    | AudioFlamingo3 | 1.378 | 1.501 | 1.595 | 0.03 |
    | Voxtral | 0.228 | 0.849 | 0.188 | 30.20 |
    | DashengLM | 0.389 | 0.759 | 0.311 | 5.48 |
    | Qwen2-Audio | 0.298 | 0.709 | 0.253 | 11.39 |

    表2：高阶理解任务性能（摘自论文表4，部分关键指标）
    | 模型 | 摘要 ROUGE-1 | 摘要 ROUGE-L | 说话人计数 数字准确率 | 时序定位 严格准确率 |
    | :--- | :---: | :---: | :---: | :---: |
    | AudioFlamingo3 | 20.25 | 12.97 | 21.62 | 6.10 |
    | Voxtral | 41.81 | 25.10 | 28.50 | 23.69 |
    | DashengLM | 15.22 | 10.38 | 35.31 | 0.48 |

5.  实际意义：为长语音处理研究提供了一个标准化的、具有挑战性的评测平台，有助于客观衡量模型进展，并指引未来模型设计（如如何增强长上下文记忆与推理能力）。
6.  主要局限性：1）作为基准，论文未提出解决这些问题的模型方法。2）数据构建依赖现有数据集，可能继承了源数据的偏见和领域局限。3）部分任务（如情感分析、时序定位）的评估依赖GPT-4，其评估成本和可靠性有待进一步讨论。4）论文未对长语音音频本身的特性（如说话人变化频率、噪声水平）进行充分的多样性分析。

---

### 🥉 [Savgbench: Benchmarking Spatially Aligned Audio-Video Generation](/audio-paper-digest-blog/posts/2026-04-29-savgbench-benchmarking-spatially-aligned-audio)

✅ **7.5/10** | 前50% | #基准测试 | #扩散模型 | #跨模态 #空间音频

👥 **作者与机构**

- 第一作者：Kazuki Shimada（Sony AI）
- 通讯作者：未说明
- 作者列表：Kazuki Shimada（Sony AI）、Christian Simon（Sony Group Corporation）、Takashi Shibuya（Sony AI）、Shusuke Takahashi（Sony Group Corporation）、Yuki Mitsufuji（Sony AI， Sony Group Corporation）

💡 **毒舌点评**

亮点：该研究精准地切中了多模态生成中一个关键但常被忽视的维度——空间对齐，并为之提供了从数据、指标到基准的完整评测工具链，堪称“多模态生成评测”方向的一次高质量“基建”工作。短板：作为一篇“Benchmarking”论文，它提出并评估的基线方法（联合扩散模型与两阶段方法）本身在架构上较为基础，未能展现更先进的生成模型技术，这使得基准的“天花板”略显不足，也削弱了对新方法吸引力的论证力度。

🔗 **开源详情**

- 代码：提供了代码仓库链接：https://github.com/SonyResearch/SAVGBench。
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：已公开，可通过Zenodo获取：https://zenodo.org/records/17139882。
- Demo：论文中未提及在线演示。
- 复现材料：提供了代码仓库，包含了数据集处理、模型训练和评估的脚本与配置。论文中承诺更多实现细节（如学习率）可在GitHub中找到。
- 论文中引用的开源项目：
    - 数据集处理：`py360convert`（用于视角转换）。
    - 目标检测：YOLOX。
    - 视频生成基线：MM-Diffusion。
    - 音视频生成基线：MMAudio。
    - 视频-音频同步特征提取：Synchformer。
    - 视觉特征提取：CLIP。
    - 扩散模型：Guided Diffusion（用于超分辨率模型初始化），DDPM，DPM-Solver。
- 论文中未提及开源计划：模型权重、在线Demo。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  要解决什么问题：现有的视频生成模型大多忽略了生成的音频与视频之间的空间对齐（例如，声音的方向应与画面中发声物体的位置匹配），这限制了沉浸式体验。目前缺乏针对这一任务的标准评测基准。
2.  方法核心是什么：提出一个名为SAVGBench的新基准，包含两个核心部分：(1) 一个精心筛选的音视频数据集，其中音频和视频根据发声事件是否在画面内进行策展；(2) 一个新的评估指标“Spatial AV-Align”，它利用目标检测和声音事件定位与检测模型，无需真实音频即可评估生成音视频的空间对齐度。
3.  与已有方法相比新在哪里：这是第一个专门针对“空间对齐音视频生成”任务建立的系统性基准。以往研究要么关注非空间化的音频生成，要么评估需要真实音频作为参考，而本文提出的指标适用于两者均为生成的场景。
4.  主要实验结果如何：论文对比了联合生成方法（Stereo MM-Diffusion）和两阶段方法（Video Diffusion + Stereo MMAudio）。客观与主观评估均表明，联合方法在空间对齐上优于两阶段方法，但两者与真实数据（Ground Truth）在视频/音频质量及空间对齐度上仍存在显著差距。关键数据见下表：

| 方法 | FVD ↓ | KVD ↓ | FAD ↓ | 时间对齐 ↑ | 空间对齐 (Spatial AV-Align) ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Ground Truth | 689.35 | 29.22 | 5.77 | 0.89 | 0.92 |
| 联合方法 (Stereo MM-Diff.) | 1265.91 | 66.35 | 12.53 | 0.72 | 0.51 |
| 两阶段方法 (Video Diff. + Stereo MMAudio) | 1386.53 | 71.82 | 12.00 | 0.78 | 0.35 |

5.  实际意义是什么：为音视频生成研究，特别是追求沉浸感的VR/AR应用，提供了一个明确的评估框架和研究方向，鼓励社区关注并提升生成内容的空间一致性。
6.  主要局限性是什么：数据集源自单一场景（室内、特定人物和乐器），规模和多样性有限；基线方法相对简单，未与更先进的单模态或多模态生成模型进行对比；评估仅限于立体声，未扩展至更高阶的空间音频格式。

---

### 4. [Streamingbench: Assessing the Gap for MLLMs to Achieve Streaming Video Understanding](/audio-paper-digest-blog/posts/2026-04-29-streamingbench-assessing-the-gap-for-mllms-to)

✅ **7.5/10** | 前25% | #基准测试 | #多模态模型 | #模型评估 #音视频

👥 **作者与机构**

- 第一作者：Junming Lin（BUPT）（论文中Junming Lin标记为1⋆，表明是主要贡献者之一，但未明确“第一作者”；机构BUPT在作者列表中标注）
- 通讯作者：未说明（论文中未明确标注通讯作者。Maosong Sun标记为1†，但†符号在作者列表中未定义为通讯作者）
- 作者列表：Junming Lin3⋆（BUPT）、Zheng Fang1⋆（未说明）、Chi Chen1†（清华大学计算机系）、Haoxuan Cheng4（西安交通大学）、Zihao Wan1（未说明）、Fuwen Luo1（未说明）、Ziyue Wang1（未说明）、Peng Li2（清华大学AIR）、Yang Liu1,2（清华大学计算机系、清华大学AIR）、Maosong Sun1†（清华大学计算机系、清华大学AIR）

💡 **毒舌点评**

本文最大的贡献是“承认差距”——它用一套精心设计的考卷，无情地证明了当前最聪明的多模态大模型在“边看边想边答”的能力上，依然是个不及格的“学龄前儿童”（最佳模型比人类低21.4%），这记耳光打得非常及时且必要。然而，它只负责“诊断”却未开“药方”，深度的分析和指明的改进方向（如处理并发线索、主动输出）虽有价值，但停留在表面，更像一份详尽的“体检报告”而非“手术方案”。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及公开本文评估的模型权重（这些权重属于各模型原作者）。
- 数据集：论文明确指出StreamingBench已公开（“we hope our work facilitates further advancements...”），但未给出具体获取链接。论文中详细描述了数据构建过程，理论上可部分复现。
- Demo：未提及。
- 复现材料：论文在附录（未提供）中应包含更详细的评估设置说明（如对非流式模型的评估方法）。正文中给出了一些评估配置（如输入帧数、分辨率处理）。
- 引用的开源项目：论文引用了大量开源模型作为评估对象，包括LLaVA-OneVision, Qwen2-VL, InternVL2, MiniCPM系列, VideoLLM-online, Flash-VStream等。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  问题：当前多模态大语言模型（MLLMs）主要针对离线视频理解（处理完整视频后回答问题），与人类能实时“观看、聆听、思考、回应”流式视频输入的能力存在显著差距。现有基准无法有效评估这种流式能力。
2.  方法核心：提出StreamingBench，首个专门评估MLLMs流式视频理解能力的综合基准。该基准包含900个视频和4500个精心制作的问题对，每个视频设有5个不同时间点的问题以模拟连续流场景。它从三个核心维度评估：实时视觉理解、全模态（视觉+音频）理解和上下文理解。
3.  新意：与传统离线基准相比，StreamingBench的关键创新在于强调了时间性（问题需在特定时间点回答）、交互性（支持多轮任务）和多模态同步性（需对齐处理视觉和音频流）。
4.  主要实验结果：评估了3个闭源和20个开源MLLMs。即使是最强的闭源模型Gemini 1.5 Pro（总分70.26%），也比人类平均水平（91.66%）低21.4个百分点。开源模型中MiniCPM-o 2.6表现最好（66.01%）。模型在处理“并发线索”和“后续线索”时性能显著下降，表明其上下文记忆和实时对齐能力薄弱。分析还发现，使用语音指令会降低模型性能，而直接处理原生音频比使用ASR转录效果更好。关键性能对比如下表：

| 模型类型 | 模型名称 | 总体得分(%) | 实时视觉(%) | 全模态(%) | 上下文(%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 人类 | Human | 91.66 | 91.46 | 90.26 | 93.55 |
| 闭源 | Gemini 1.5 Pro | 70.26 | 77.39 | 67.80 | 51.06 |
| | GPT-4o | 64.31 | 74.54 | 50.95 | 49.06 |
| | Claude-3.5-sonnet | 60.06 | 74.04 | 41.40 | 39.70 |
| 开源 (~7B) | MiniCPM-o 2.6 | 66.01 | 79.88 | 53.40 | 38.45 |
| | InternVL2.5 | 64.36 | 78.32 | 46.70 | 43.14 |
| | InternLM-XComposer2.5-OmniLive | 60.80 | 75.36 | 46.20 | 33.58 |

5.  实际意义：为评估和推进真正具有实时交互能力的多模态AI系统（如个人助理、实时翻译、智能监控）提供了首个标准化测试集和基线，明确了当前技术的主要短板和未来发展方向。
6.  主要局限性：本文是一项评估研究，未提出任何新的模型或算法来解决所发现的问题。其深度分析停留在现有模型的能力表征上，未进行根本性的模型架构或训练方法的探索。此外，视频来源为YouTube，可能无法完全覆盖所有现实流式场景。

---

### 5. [Can Large Audio Language Models Understand Audio Well? Speech, Scene and Events Understanding Benchmark for LALMs](/audio-paper-digest-blog/posts/2026-04-29-can-large-audio-language-models-understand-audio)

✅ **7.0/10** | 前25% | #基准测试 | #链式推理 | #音频大模型 #音频场景理解

👥 **作者与机构**

- 第一作者：Han Yin（KAIST 电气工程学院）
- 通讯作者：Jung-Woo Choi（KAIST 电气工程学院）
- 作者列表：Han Yin（KAIST 电气工程学院）、Jung-Woo Choi（KAIST 电气工程学院）

#

💡 **毒舌点评**

亮点： 论文精准切中了当前LALM评估的一个盲区——现实世界音频中“人声”与“环境声”的能量博弈及其联合理解，提出了首个明确建模SNR差异的综合基准，这个问题的提出本身就比很多论文更有价值。
短板： 实验部分主要依赖一个通用的文本嵌入模型来“迂回”评估模型对场景和事件的分类能力，这更像是一个工程上的权宜之计，而非严谨的评估范式；此外，只选了4个模型做评测，结论的普遍性略显不足。

#

🔗 **开源详情**

- 代码： 论文承诺公开代码，项目主页为 `https://sites.google.com/view/sseu-bench`。论文中未直接提供具体代码仓库链接。
- 模型权重： 论文评估的是已有开源LALM，未提及提供新的模型权重。
- 数据集： 论文核心贡献之一SSEU-Bench数据集将公开，可通过项目主页获取。
- Demo： 论文未提及在线演示。
- 复现材料： 论文提供了详细的评估方法描述、CoT推理步骤说明，并声称将公开所有Prompt模板。
- 论文中引用的开源项目： 依赖DESED、MAESTRO-Real数据集，VCTK语料库，以及被评估的开源模型（LTU-AS, Qwen2-Audio, Kimi-Audio, Step-Audio）和CLAP模型。评估中使用了OpenAI的文本嵌入模型API。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  要解决什么问题： 现有大型音频语言模型（LALM）的评估基准忽略了两个关键现实特征：a) 音频信号通常混合了前景语音和背景非语音声音，且两者能量（信噪比）差异显著；b) 缺乏对同一音频片段中语音、场景和事件的联合理解评估。
2.  方法核心是什么： 作者提出了SSEU-Bench，一个全新的音频理解基准。该基准通过混合纯净语音（来自VCTK）和真实环境背景音（来自DESED和MAESTRO-Real），并设置不同的信噪比（SNR），构建了21.72小时的测试音频。评估任务包括三个：自动语音识别（ASR）、声学场景分类（ASC）和音频事件标记（AT），并设计了“独立理解”和“联合理解”两种评估范式。此外，引入了链式思维（CoT）引导的推理方法来提升联合理解性能。
3.  与已有方法相比新在哪里： 这是首个显式建模语音与非语音能量差异，并在同一音频上联合评估语音、场景、事件理解能力的基准。它超越了以往基准（如OpenAQA、AudioBench）多任务独立评估的模式，更贴近真实交互场景。
4.  主要实验结果如何：
    *   独立理解： CLAP系列模型在ASC和AT任务上显著优于LALM。在ASR上，Kimi-Audio表现最鲁棒（平均WER 8.78%），而LTU-AS因依赖外部ASR而表现极差（平均WER 89.29%）。
    *   联合理解影响： 联合任务对不同LALM影响不一。例如，Qwen2-Audio-Instruct在联合模式下性能全面下降（WER从16.59升至22.16，mACC从31.24降至21.86）。Step-Audio 2 Mini则倾向于优先完成ASR，导致ASC和AT性能下降。
    *   CoT效果： CoT能有效提升联合理解性能。例如，对Step-Audio 2 Mini，CoT使平均AT mAP提升了约4%。
    | 模型 | 模式 | WER ↓ (ASR) | mACC ↑ (ASC) | mAP ↑ (AT) |
    | :--- | :--- | :--- | :--- | :--- |
    | Qwen2-Audio-Instruct | 独立 | 16.59±0.1 | 31.24±0.1 | 33.42±0.1 |
    | | 联合 | 22.16±0.4 | 21.86±0.1 | 16.52±1.1 |
    | Kimi-Audio | 独立 | 10.19±0.1 | 22.01±0.2 | 24.20±0.3 |
    | | 联合 | 17.84±0.6 | 22.80±0.2 | 26.91±0.4 |
    | Step-Audio 2 Mini | 独立 | 22.27±0.5 | 35.73±0.3 | 36.73±0.5 |
    | | 联合 | 19.01±0.2 | 24.39±0.4 | 30.22±0.2 |
5.  实际意义是什么： 推动LALM在更真实、更复杂的声学场景下进行评估和优化，为开发具备全面音频感知能力（听清说什么、听出在哪、听懂周围有什么）的下一代音频AI提供了关键的测试平台和初步改进思路（CoT）。
6.  主要局限性是什么： a) 评估ASC和AT时，依赖外部文本嵌入模型计算相似度作为分类依据，可能无法完全反映LALM自身的分类能力；b) 仅评估了4个开源LALM，结论的普适性有待更多模型验证；c) CoT提示需要额外的推理步骤，增加了推理成本。

#

---

