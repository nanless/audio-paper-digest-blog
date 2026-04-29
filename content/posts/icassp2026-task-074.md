---
title: "ICASSP 2026 - 语音翻译 论文列表"
date: 2026-04-29
draft: false
tags: ["语音翻译"]
categories: [icassp-2026]
description: "共 8 篇 ICASSP 2026 语音翻译 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音翻译

共 **8** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [MTP-S2UT: Enhancing Speech-to-Speech Translation Quality wit](/audio-paper-digest-blog/posts/2026-04-29-mtp-s2ut-enhancing-speech-to-speech-translation) | 8.5分 | 前25% |
| 🥈 | [ATOM: Adaptive Token-Level Optimal Transport Mixup for Speec](/audio-paper-digest-blog/posts/2026-04-29-atom-adaptive-token-level-optimal-transport-mixup) | 8.0分 | 前25% |
| 🥉 | [SEP-ST: Incorporating Speech Entity Prompt Into Large Langua](/audio-paper-digest-blog/posts/2026-04-29-sep-st-incorporating-speech-entity-prompt-into) | 7.5分 | 前25% |
| 4. | [Phrased: Phrase Dictionary Biasing for Speech Translation](/audio-paper-digest-blog/posts/2026-04-29-phrased-phrase-dictionary-biasing-for-speech) | 7.5分 | 前25% |
| 5. | [Direct Transfer of Prosody in Speech-to-speech Translation u](/audio-paper-digest-blog/posts/2026-04-29-direct-transfer-of-prosody-in-speech-to-speech) | 7.5分 | 前25% |
| 6. | [PROST-LLM: Progressively Enhancing the Speech-to-Speech Tran](/audio-paper-digest-blog/posts/2026-04-29-prost-llm-progressively-enhancing-the-speech-to) | 7.5分 | 前25% |
| 7. | [Revisiting Direct Speech-to-Text Translation with Speech LLM](/audio-paper-digest-blog/posts/2026-04-29-revisiting-direct-speech-to-text-translation-with) | 7.5分 | 前50% |
| 8. | [Direct Simultaneous Translation Activation for Large Audio-L](/audio-paper-digest-blog/posts/2026-04-29-direct-simultaneous-translation-activation-for) | 6.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [MTP-S2UT: Enhancing Speech-to-Speech Translation Quality with Multi-Token Prediction](/audio-paper-digest-blog/posts/2026-04-29-mtp-s2ut-enhancing-speech-to-speech-translation)

🔥 **8.5/10** | 前25% | #语音翻译 | #多任务学习 | #语音大模型 #多语言

👥 **作者与机构**

- 第一作者：Jianjin Wang（东北大学计算机科学与工程学院）与 Runsong Zhao（东北大学计算机科学与工程学院）为共同第一作者
- 通讯作者：Tong Xiao（东北大学计算机科学与工程学院，NiuTrans Research）
- 作者列表：Jianjin Wang（东北大学计算机科学与工程学院）、Runsong Zhao（东北大学计算机科学与工程学院）、Xiaoqian Liu（东北大学计算机科学与工程学院）、Yuan Ge（东北大学计算机科学与工程学院）、Ziqiang Xu（东北大学计算机科学与工程学院）、Tong Xiao（东北大学计算机科学与工程学院，NiuTrans Research）、Shengxiang Gao（昆明理工大学）、Zhengtao Yu（昆明理工大学）、Jingbo Zhu（东北大学计算机科学与工程学院，NiuTrans Research）

💡 **毒舌点评**

亮点：这篇工作的核心思想非常巧妙——既然CTC损失所在的解码器中间层天然融合了文本（通过CTC对齐）和语音（通过预测）两种模态的信息，那么在这里施加“预测未来”的MTP损失，就能“更早、更有效地”强化表示学习，理论动机直白且有效。  
短板：实验主要局限于CVSS-C这个单一数据集上的两种语言对（英法、英西），虽然用了三种分词器，但缺乏更多样化的语言、领域（如对话、噪声环境）以及与当前最先进多模态翻译模型（如SeamlessM4T）的直接对比，其实际效用和泛化能力仍需在更广泛场景中验证。

📌 **核心摘要**

1.  问题：当前主流的直接语音到语音翻译（S2ST）方法，如S2UT模型，使用离散的语音token作为中间表示。但单个语音token语义信息稀疏，需要多个token才能表达一个完整语义单元，这增加了预测的熵和建模的复杂度。
2.  方法核心：本文首次将多token预测（MTP）损失引入S2UT框架。更进一步，作者提出MTP-S2UT损失，将MTP应用于计算CTC损失的解码器中间隐藏层，而非传统最终层，以促进模型在更早阶段融合语音和文本的跨模态信息。
3.  创新点：与已有MTP工作仅作用于最终层不同，MTP-S2UT利用CTC层富含跨模态信息的特性，在该层施加MTP损失，旨在更早增强隐藏表示的语义密度。
4.  实验结果：在CVSS-C基准的法语→英语和西班牙语→英语任务上，所有MTP变体均稳定提升翻译质量（以ASR-BLEU衡量）。MTP-S2UT始终获得最佳性能。例如，在法语→英语任务上，使用S3分词器和贪婪解码时，ASR-BLEU从基线17.79显著提升至24.36。分析表明，MTP损失引导CTC对齐中的文本token前移，并降低了模型预测语音token的不确定性。
5.  实际意义：该研究为提升语音到语音翻译质量提供了一个即插即用的损失函数改进方案，其思想可推广到其他依赖离散单元进行序列到序列转换的任务中。
6.  主要局限性：实验验证的语言对和场景相对有限，未与最新的端到端多模态翻译系统进行对比；同时，代码未开源，限制了社区的即时验证和快速应用。

关键实验结果表格：

表1：不同语音分词器在CVSS-C Fr→En测试集上的ASR-BLEU分数
| 分词器 | 模型 | Greedy | Beam5 | Beam10 |
| :--- | :--- | :--- | :--- | :--- |
| S3 tokenizer | S2UT | 17.79 | 18.98 | 19.15 |
| | + MTP-Parallel-Linear | 21.34 | 22.40 | 22.52 |
| | + MTP-DeepSeek-V3 | 23.38 | 24.25 | 24.31 |
| | + MTP-VocalNet | 23.29 | 24.17 | 24.27 |
| | + MTP-S2UT | 24.36 | 25.14 | 25.16 |
| HuBERT with K-means | S2UT | 22.02 | 23.11 | 23.33 |
| | + MTP-Parallel-Linear | 22.03 | 23.07 | 23.10 |
| | + MTP-DeepSeek-V3 | 22.73 | 23.86 | 23.87 |
| | + MTP-VocalNet | 22.11 | 23.37 | 23.60 |
| | + MTP-S2UT | 23.59 | 24.50 | 24.53 |
| GLM-4-Voice-Tokenizer | S2UT | 21.62 | 23.08 | 23.26 |
| | + MTP-Parallel-Linear | 21.92 | 23.36 | 23.56 |
| | + MTP-DeepSeek-V3 | 22.99 | 24.27 | 24.45 |
| | + MTP-VocalNet | 23.55 | 24.99 | 25.20 |
| | + MTP-S2UT | 23.97 | 25.22 | 25.26 |

表2：使用S3分词器在CVSS-C Es→En测试集上的ASR-BLEU分数
| 模型 | Greedy | Beam5 | Beam10 |
| :--- | :--- | :--- | :--- |
| S2UT | 16.67 | 17.99 | 18.18 |
| + MTP-Parallel-Linear | 16.83 | 18.35 | 18.58 |
| + MTP-DeepSeek-V3 | 18.94 | 20.14 | 20.31 |
| + MTP-VocalNet | 19.98 | 21.47 | 21.69 |
| + MTP-S2UT | 21.87 | 22.59 | 22.83 |

图表说明：
- 论文图2展示了CTC对齐前向偏移的示例，显示MTP导致文本token（y1, y2）的出现位置比NTP更靠前。
- 论文图3展示了语音token预测的熵分布对比图，所有MTP变体在低熵区域的频率均高于基线，表明预测不确定性降低，其中MTP-S2UT效果最显著。
- 表3提供了文本token首次出现的平均相对位置统计，定量证实了MTP（除DeepSeek-V3变体外）引发的语义前向漂移现象。

---

### 🥈 [ATOM: Adaptive Token-Level Optimal Transport Mixup for Speech Translation](/audio-paper-digest-blog/posts/2026-04-29-atom-adaptive-token-level-optimal-transport-mixup)

🔥 **8.0/10** | 前25% | #语音翻译 | #对比学习 | #多任务学习 #数据增强

👥 **作者与机构**

- 第一作者：Jialing Wang（1. 教育部民族语言智能分析与安全治理重点实验室，中央民族大学；2. 香港中文大学（深圳））
- 通讯作者：Yue Zhao（教育部民族语言智能分析与安全治理重点实验室，中央民族大学）
- 作者列表：Jialing Wang（教育部民族语言智能分析与安全治理重点实验室，中央民族大学；香港中文大学（深圳））、Yue Zhao（教育部民族语言智能分析与安全治理重点实验室，中央民族大学）、Yuhao Zhang（香港中文大学（深圳））、Haizhou Li（香港中文大学（深圳））

💡 **毒舌点评**

亮点：ATOM框架巧妙地将最优传输的“硬”对齐、对比学习的“精”对齐以及语义相似度引导的自适应“软”混合结合成一个闭环，在低资源藏汉翻译任务上实现了显著的BLEU提升（+2.43），证明了其在弥合模态鸿沟方面的实际效力。
短板：论文对于关键的自适应混合公式（3）解释不够清晰（`p`、`σ`、`γ`未明确定义），且消融实验设计较为简单，未能深入剖析各组件协同工作的具体机制和边界条件，使得方法的“自适应”智能性略显黑盒。

📌 **核心摘要**

1.  要解决的问题：端到端语音翻译（ST）面临训练数据稀缺和源语言语音与目标语言文本之间存在巨大模态鸿沟的双重挑战。
2.  方法核心：提出ATOM框架，结合最优传输（OT）进行初始跨模态对齐，利用基于InfoNCE的对比学习迭代优化对齐质量，并设计一种基于语义相似度的自适应模态混合策略，将对齐后的语音和文本token在特征层面进行融合。
3.  与已有方法相比新在哪里：相比于之前使用固定概率进行模态混合或仅使用单一对齐机制的方法，ATOM实现了“对齐（OT）-精化（对比学习）-融合（自适应混合）”的闭环，且融合权重由token间的语义相似度动态决定，更具灵活性和语义感知能力。
4.  主要实验结果：在MuST-C英德（En-De）和TIBMD藏汉（Ti-Zh）数据集上进行评估。
    *   主实验结果对比表
        | 模型 | En-De BLEU | Ti-Zh BLEU |
        | :--- | :--- | :--- |
        | XSTNET | 20.61 | 11.56 |
        | STEMM | 20.82 | 13.61 |
        | ConST | 20.77 | 14.66 |
        | CMOT | 20.84 | 14.87 |
        | OTST | 20.88 | 13.90 |
        | ATOM | 22.48 | 17.30 |
    *   消融实验（En-De）：移除对比学习（-LCTR）导致BLEU下降0.34；同时移除对比学习和自适应混合（-CTR -Adaptive Mixup）导致BLEU下降1.64，回落至CMOT的水平（20.84）。
    *   不同对齐损失对比（En-De）：CTR损失（21.18）优于OT损失（20.75）和CAR损失（20.09）。
    *   主要结论：ATOM在两个任务上均取得最优结果，相比最强基线CMOT分别提升1.64（En-De）和2.43（Ti-Zh）个BLEU点，在资源更稀缺的Ti-Zh任务上提升尤为显著。
5.  实际意义：为低资源语音翻译提供了一种有效的技术方案，通过挖掘多任务学习中平行文本数据的潜力来提升语音模型性能，对促进欠发达语言的跨语言交流有实用价值。
6.  主要局限性：1）实验对比的基线均为2022-2024年的经典方法，未与更新的、可能基于大规模预训练语音-语言模型的SOTA进行对比；2）自适应混合策略的参数设置（p, τ, γ）依赖经验，缺乏更深入的分析或自动化调参机制；3）论文未公开代码，限制了可复现性和直接应用。

---

### 🥉 [SEP-ST: Incorporating Speech Entity Prompt Into Large Language Models for Speech Translation](/audio-paper-digest-blog/posts/2026-04-29-sep-st-incorporating-speech-entity-prompt-into)

✅ **7.5/10** | 前25% | #语音翻译 | #多任务学习 | #大语言模型 #命名实体识别

👥 **作者与机构**

- 第一作者：Fei OuYang (昆明理工大学， 云南人工智能重点实验室)
- 通讯作者：Zhengtao Yu (昆明理工大学， 云南人工智能重点实验室)
- 作者列表：Fei OuYang (昆明理工大学， 云南人工智能重点实验室)、Linqin Wang (昆明理工大学， 云南人工智能重点实验室)、Zhengtao Yu (昆明理工大学， 云南人工智能重点实验室)

💡 **毒舌点评**

亮点在于直击端到端语音翻译中“命名实体”这个老大难问题，提出了一种无需外部知识库、通过联合训练从语音中直接提取实体特征提示LLM的优雅方案，在CoVoST-2和MuST-C上的实体翻译准确率（TSR）提升非常亮眼。短板是方法高度依赖于预训练的NER模型生成训练标签，且消融实验显示一种核心变体（Transformer-based）效果不佳，这使得其“端到端”的纯粹性打了折扣，更像是一个“半端到端”的增强方案。

📌 **核心摘要**

1.  问题：当前端到端语音翻译模型在翻译命名实体（如人名、地名、机构名）时准确率不足，而依赖级联或外部知识库的方法存在误差传播和泛化性差的问题。
2.  方法核心：提出SEP-ST，一个端到端框架。其核心是新增一个“语音实体提示（SEP）提取模块”，直接从语音表征中学习并提取实体相关的嵌入特征。然后将该特征与原始语音特征和文本指令拼接，共同输入大语言模型（LLM）进行翻译，从而引导模型关注并准确翻译实体。
3.  创新点：与已有方法相比，该工作是首个提出直接在语音表征层面进行端到端实体特征提取并作为提示整合进LLM的统一框架，摆脱了对外部实体词典或检索模块的依赖。
4.  主要实验结果：在CoVoST-2数据集上，平均BLEU从39.1提升至40.6，实体翻译成功率（TSR）从36.4%提升至70.5%。在MuST-C零样本评估中，平均BLEU从16.9提升至20.6。具体对比数据见下表。
    | 方法 | CoVoST-2 (En2X) Avg BLEU | CoVoST-2 (En2X) Avg TSR | MuST-C (zero-shot) Avg BLEU | MuST-C (zero-shot) Avg TSR |
    | :--- | :---: | :---: | :---: | :---: |
    | LLM-SRT-7B (基线) | 39.1 | 36.4 | 16.9 | 43.2 |
    | SEP-ST (CTC-based) | 40.6 | 70.5 | 20.6 | 55.0 |
5.  实际意义：提升了语音翻译在真实场景（常包含大量实体）中的可用性和保真度，简化了现有实体翻译增强方案的流程。
6.  主要局限性：SEP提取模块的训练依赖于预训练NER模型标注的伪标签；其Transformer变体效果不佳，表明该特征学习方式有待探索；实验仅限于英译德/日/中三种语言方向。

---

### 4. [Phrased: Phrase Dictionary Biasing for Speech Translation](/audio-paper-digest-blog/posts/2026-04-29-phrased-phrase-dictionary-biasing-for-speech)

✅ **7.5/10** | 前25% | #语音翻译 | #偏差学习 | #多语言 #流式处理

👥 **作者与机构**

- 第一作者：Peidong Wang（Microsoft CoreAI）
- 通讯作者：Jinyu Li（Microsoft CoreAI）
- 作者列表：Peidong Wang（Microsoft CoreAI）、Jian Xue（Microsoft CoreAI）、Rui Zhao（Microsoft CoreAI）、Junkun Chen（Microsoft CoreAI）、Aswin Shanmugam Subramanian（Microsoft CoreAI）、Jinyu Li（Microsoft CoreAI）

#

💡 **毒舌点评**

亮点：本文提出的PHRASED方法具有良好的通用性，能将同一个思路（利用双语短语对）同时应用于传统的流式端到端模型（CTC-GMM）和新兴的多模态大模型，并在后者上实现了显著的短语召回率提升。短板：实验仅在中-英翻译任务上验证，且所用的“短语列表”规模（3K）与真实工业场景（可能包含数十万条目）的匹配度和鲁棒性存疑；此外，论文未提供任何代码或模型，极大地限制了其可复现性和直接应用价值。

#

📌 **核心摘要**

1.  要解决的问题：实体短语（如专有名词、新词）因在训练数据中罕见，在端到端语音翻译（ST）中容易被错误翻译，影响核心语义理解。
2.  方法核心：提出短语字典偏差（PHRASED），利用用户提供的源语言-目标语言实体短语对 `{I: O}` 来增强翻译。核心是先从中间表示（如ASR文本）中匹配源语言短语 `I`，再对匹配到的目标语言短语 `O` 进行概率加分。
3.  新在何处：首次为端到端语音翻译设计并验证了“短语字典偏差”机制，与传统的仅使用目标短语列表（PLB）的偏差方法不同，它显式利用了源语言信息。同时，将该方法成功适配到流式Transducer模型和多模态大模型两种架构。
4.  主要实验结果：在中文到英文的RealSI测试集上，PHRASED使流式CTC-GMM模型的短语召回率相对PLB提升了21%；使Phi-4多模态大模型的BLEU提升2.9点，短语召回率相对基线提升85%，远超PLB在大模型上失败的表现。关键数据见下表。

表1：流式语音翻译模型结果（RealSI 中-英）
| 方法 | BLEU | 召回率 |
| :--- | :--- | :--- |
| CT基线 | 16.5 | 21.62% |
| CT + PLB | 19.2 | 32.43% |
| CTC-GMM基线 | 18.3 | 28.83% |
| CTC-GMM + PLB | 19.9 | 43.24% |
| CTC-GMM + PHRASED_PS | 20.0 | 52.25% |
| CTC-GMM + PLB (大bonus) | 4.6 | 49.55% |

表2：多模态大模型结果（RealSI 中-英）
| 方法 | BLEU | 召回率 |
| :--- | :--- | :--- |
| Phi-4-multimodal 基线 | 21.1 | 36.04% |
| Phi-4-multimodal + PLB | 1.1 | 8.11% |
| Phi-4-multimodal + PHRASED_PS | 23.8 | 54.95% |
| Phi-4-multimodal + PHRASED_JB | 24.0 | 66.67% |

5.  实际意义：为解决语音翻译中的“冷启动”实体短语问题提供了有效且灵活的工程化方案，尤其在多模态大模型框架下展示了利用外部知识库的可行性。
6.  主要局限性：方法高度依赖预先构建的源-目标短语对字典；在流式模型中的效果依赖于中间ASR表示（z）的质量；实验场景单一（中-英），缺乏在其他语言对、极长上下文或真实噪声环境下的验证。

#

---

### 5. [Direct Transfer of Prosody in Speech-to-speech Translation using Disentangled Speech Tokens](/audio-paper-digest-blog/posts/2026-04-29-direct-transfer-of-prosody-in-speech-to-speech)

✅ **7.5/10** | 前25% | #语音翻译 | #端到端 | #自监督学习 #多语言

👥 **作者与机构**

- 第一作者：Ismail Rasim Ulgen (Amazon Prime Video, USA; Center for Language and Speech Processing, Johns Hopkins University, USA)
- 通讯作者：未说明
- 作者列表：Ismail Rasim Ulgen (Amazon Prime Video, USA; Center for Language and Speech Processing, Johns Hopkins University, USA), Nancy Liu (Amazon Prime Video, USA), Najmeh Sadoughi (Amazon Prime Video, USA), Abhishek Yanamandra (Amazon Prime Video, USA), Abhinav Jain (Amazon Prime Video, USA), Zhu Liu (Amazon Prime Video, USA), Vimal Bhat (Amazon Prime Video, USA)

💡 **毒舌点评**

亮点：这篇论文直击语音翻译中“翻译腔”这一痛点，用“解耦-传递”的巧思，将困扰领域多年的“韵律平行数据缺失”问题绕了过去，思路清晰且效果显著。短板：研究略显“工程化”，虽然提出了巧妙的对齐机制，但过度依赖一个外部强大且未开源的解耦编解码器（FACodec），且实验仅验证了两个语言对，在更复杂语系或低资源场景下的鲁棒性存疑。

📌 **核心摘要**

1.  问题：当前语音到语音翻译（S2ST）系统在翻译时往往丢失源语音的韵律（节奏、音调、情感），主要原因是缺乏韵律对齐的平行训练数据，导致模型只能间接建模韵律，存在训练-推理不匹配问题。
2.  方法核心：提出PASST框架。首先利用FACodec将语音解耦为独立的语言内容、韵律、声学细节和音色等离散令牌。然后，仅对语言内容令牌进行跨语言翻译。核心创新在于：利用内容翻译模块（Transformer）内部的交叉注意力图，建立源语言内容与目标语言内容之间的精细时序对齐关系，并利用此对齐关系，将源语音的韵律和声学令牌“映射”到对应目标内容令牌的位置上，最后与原始音色结合，由FACodec解码器重建出保留源韵律的翻译语音。
3.  创新性：相比传统间接建模韵律或忽略韵律的方法，PASST实现了显式、直接的韵律传递。其核心洞见在于，利用翻译模型自身学到的内容对齐信息（注意力图），作为传递源语音非内容属性的桥梁，避免了寻找韵律平行数据的难题。
4.  实验结果：在mExpresso数据集（En-Fr和En-Es）上，PASST在韵律相似度（A.PCP, P-Sim）、说话人相似度（S-Sim）和自然度（NISQA）等多个指标上显著优于TransVIP、SeamlessM4T等基线。例如，在En-Fr上，最佳PASST变体的A.PCP达到2.99（基线最高2.71），NISQA达到3.89（基线最高3.43）。
5.  实际意义：能够生成翻译内容准确、同时保留原说话者情感、语调和风格的语音，极大提升了跨语言交流的自然度和表现力，对实时同传、内容本地化（如配音）等场景价值重大。
6.  局限性：a) 强依赖预训练的FACodec，其解耦质量直接决定上限；b) 实验规模有限，仅测试了两个语言对，未涉及更复杂的语调语言或低资源语言；c) 论文未提供代码，核心组件的可复现性受限。

---

### 6. [PROST-LLM: Progressively Enhancing the Speech-to-Speech Translation Capability in LLMs](/audio-paper-digest-blog/posts/2026-04-29-prost-llm-progressively-enhancing-the-speech-to)

✅ **7.5/10** | 前25% | #语音翻译 | #偏好优化 | #大语言模型 #多任务学习

👥 **作者与机构**

- 第一作者：Jing Xu† (†The Chinese University of Hong Kong)
- 通讯作者：未说明（论文作者列表为Jing Xu, Jiaqi Wang, Daxin Tan, Xiao Chen，未标注通讯作者）
- 作者列表：Jing Xu（香港中文大学）、Jiaqi Wang（香港中文大学）、Daxin Tan（华为人工智能实验室）、Xiao Chen（华为人工智能实验室）

#

💡 **毒舌点评**

亮点：巧妙地将机器翻译中的“回译”思��移植到语音翻译，用于自动、无需人工标注地构建偏好优化数据对，这一设计在降低S2ST研究门槛上非常聪明。短板：整个系统的“地基”——偏好数据质量——完全依赖Whisper等上游ASR的转录准确性，论文对此潜在的误差传递与放大问题缺乏深入分析，这使得方法的鲁棒性存疑。

#

📌 **核心摘要**

1.  要解决什么问题：大语言模型在语音到语音翻译（S2ST）任务上应用不足，主要受限于高质量的配对S2ST数据稀缺。
2.  方法核心是什么：提出PROST-LLM框架，分三步渐进式提升LLM的S2ST能力。首先，在CVSS数据集上进行有监督微调（SFT），并采用“三任务学习”（ASR，S2T，S2ST联合训练）和“模态链”（先生成目标文本，再生成目标语音）策略增强初始性能。其次，利用微调后的模型对源语音生成多个候选翻译，再将其回译为源语言语音，通过与源语音的多指标比较（WER, MCD, BLEU, METEOR）自动构建偏好数据对（首选与拒斥）。最后，使用这些偏好数据对进行偏好优化（PO），进一步精炼模型的S2ST性能。
3.  与已有方法相比新在哪里：首次将“模态链”和“三任务学习”引入LLM的S2ST训练；首次利用回译机制自动构建偏好数据，并结合偏好优化来提升LLM的S2ST能力，避免了昂贵的人工标注；证明了可以利用单语语音语料库构建偏好数据，减少对配对S2ST数据的依赖。
4.  主要实验结果如何：在CVSS语料库（英法双向翻译）上进行实验。与强级联系统（S2T+TTS）相比，PROST-LLM（采用模态链+DPO）将BLEU差距从初始的14.38（en2fra）和8.83（fra2en）显著缩小至3.15和1.04。消融实验证明，三任务学习和模态链策略均优于基础SFT；偏好优化能持续带来提升；使用单语数据构建偏好对甚至能取得比使用配对S2ST数据更好的效果。所有实验配置下的语音自然度（UTMOS）均高于级联系统。
5.  实际意义是什么：为在数据有限条件下增强LLM的跨模态语音生成与翻译能力提供了一个有效框架，其自动偏好数据构建方法具有普适性，可推广到其他多模态生成任务。
6.  主要局限性是什么：（1）偏好数据质量强依赖Whisper转录质量，其误差会直接影响偏好信号的准确性，论文未分析此影响；（2）实验仅在英法翻译上验证，多语言泛化能力未知；（3）硬件训练信息缺失，大规模复现的计算成本未知；（4）虽然模型使用了LLaMA 3.2-3B，但论文未提供模型权重，且框架的扩展性（如更大LLM、更多模态）有待验证。

---

### 7. [Revisiting Direct Speech-to-Text Translation with Speech LLMS: Better Scaling than Cot Prompting?](/audio-paper-digest-blog/posts/2026-04-29-revisiting-direct-speech-to-text-translation-with)

✅ **7.5/10** | 前50% | #语音翻译 | #语音大模型 | #端到端 #多语言

👥 **作者与机构**

- 第一作者：Oriol Pareras（巴塞罗那超级计算中心）
- 通讯作者：未说明
- 作者列表：Oriol Pareras（巴塞罗那超级计算中心）， Gerard I. Gállego（巴塞罗那超级计算中心， 加泰罗尼亚理工大学）， Federico Costa（巴塞罗那超级计算中心， 加泰罗尼亚理工大学）， Cristina España-Bonet（巴塞罗那超级计算中心， 德国人工智能研究中心）， Javier Hernando（巴塞罗那超级计算中心， 加泰罗尼亚理工大学）

💡 **毒舌点评**

论文实验设计严谨，通过控制单一变量（S2TTpl数据规模）清晰揭示了Direct prompting优于CoT的“数据扩展性”，为后续研究指明了一个务实且资源效率更高的方向。但不足之处在于，所有结论均建立在“翻译器质量上乘”的伪标签数据之上，且最终Direct并未实现对CoT的绝对超越，其宣称的“更好扩展性”在缺乏更大规模数据验证的情况下，略显前瞻性有余而实证不足。

📌 **核心摘要**

1.  问题：当前基于LLM的端到端语音到文本翻译（S2TT）主流采用思维链（CoT）提示策略，即先转录后翻译。但CoT的优势主要源于可利用海量ASR和文本翻译（T2TT）数据。本文研究随着专用S2TT数据规模增加，CoT是否仍是最佳选择，以及直接翻译（Direct）策略的扩展潜力。
2.  方法：通过伪标签方法构建大规模多语言S2TT数据集（将ASR语料的转录翻译为6种欧洲语言），并系统性地对比了Direct和CoT两种提示策略在从小到大不同数据规模下的性能表现。
3.  新意：这是首个在如此大规模（约384M目标token）和多语言（6种语言）伪标签S2TT数据上，系统对比Direct和CoT提示策略扩展行为的研究。挑战了CoT在S2TT中的固有优势假设。
4.  结果：在Fleurs基准测试上，随着伪标签S2TT数据（S2TTpl）规模从0%增加到100%：
    *   Direct策略的xCOMET分数（S2TT核心指标）持续稳定提升，从基线~80.6升至~88.0（见图3a）。
    *   CoT策略在20%数据规模时达到峰值（~90.0 xCOMET），之后性能反而下降。
    *   同时，CoT策略的ASR子任务性能（WER）随数据增加而显著恶化（图3b），而Direct策略保持稳定。详细的跨语言趋势见图4。
    *   基线对比（全量ASR+T2TT+S2TT数据，无伪标签S2TTpl数据）：CoT基线（26.39 BLEU / 88.0 xCOMET）显著优于Direct基线（21.04 BLEU / 80.6 xCOMET），具体见表2。
5.  意义：表明在S2TT数据稀缺时，CoT因其能复用ASR/T2TT数据而占优；但随着S2TT数据规模增大，更简单、计算成本更低（约减半）的Direct策略显示出更优的扩展潜力，是未来构建大规模S2TT系统的一个有前景的方向。
6.  局限：所有S2TT数据均为伪标签生成，其质量（依赖翻译模型和过滤器）直接影响结论。论文未探索Direct策略在利用副语言信息（如韵律）方面的潜在优势。

---

### 8. [Direct Simultaneous Translation Activation for Large Audio-Language Models](/audio-paper-digest-blog/posts/2026-04-29-direct-simultaneous-translation-activation-for)

✅ **6.0/10** | 前25% | #语音翻译 | #数据增强 | #语音大模型 #流式处理

👥 **作者与机构**

- 第一作者：Pei Zhang (Tongyi Lab, Alibaba Group；NLP2CT Lab, University of Macau)
- 通讯作者：Derek F. Wong (NLP2CT Lab, University of Macau，由论文中标注†判断)
- 作者列表：Pei Zhang (Tongyi Lab, Alibaba Group；NLP2CT Lab, University of Macau)、Yiming Wang (School of Computer Science, Shanghai Jiao Tong University)、Jialong Tang (Tongyi Lab, Alibaba Group)、Baosong Yang (Tongyi Lab, Alibaba Group)、Rui Wang (School of Computer Science, Shanghai Jiao Tong University)、Derek F. Wong (NLP2CT Lab, University of Macau)、Fei Huang (Tongyi Lab, Alibaba Group)

💡 **毒舌点评**

本文思路巧妙，旨在通过极少量（1%）精心设计的增强数据“激活”而非“重训”大模型的同传能力，实验上也观察到了低延迟场景下的显著收益。然而，方法的关键步骤——如何从截断语音“推测”出对应的正确翻译文本（即式4的终止条件）——依赖于预训练模型自身的概率分布，其通用性和边界情况处理论证不足，更像是一个工程技巧而非一个鲁棒的算法框架，且实验中同传评估基于固定时间chunk的假设可能与实际流式场景存在偏差。

📌 **核心摘要**

1.  问题：如何在不修改大型音频语言模型（LALM）架构和解码策略的前提下，直接激活其同声传译（Simul-S2TT）能力，以解决离线翻译训练与流式推理之间的分布差距。
2.  方法核心：提出“同传自增强”（SimulSA）策略。核心是利用LALM自身能力，对离线语音-文本对进行数据增强：首先，采用Beta衰减分布对语音进行截断，模拟流式输入；然后，利用预训练LALM对截断语音生成最可能的“部分”翻译文本，构建训练对；最后，将原始离线数据与增强数据混合进行监督微调（SFT）。
3.  创新点：与传统需要修改模型架构（如引入RW策略、专用编码器）的方法不同，本文创新性地从数据角度出发，通过构建模拟流式场景的训练数据来激活模型已有能力。Beta衰减截断分布的设计旨在聚焦于早期翻译错误的缓解。
4.  主要实验结果：在CoVoST2英译中任务上，仅使用约1%的SimulSA增强数据进行SFT，即可在低延迟（如chunk size 500ms, 无回滚）场景下将BLEU分数从0.7提升至7.9（相对提升显著）。与仅用离线数据SFT的模型相比，在不同延迟和回滚设置下均取得优势，同时不损害离线翻译性能。关键数据见下表：
    | 模型 | SFT数据规模 | Chunk Size k (ms) | BLEU (回滚b=0) | BLEU (回滚b=3) | BLEU (回滚b=5) |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | Qwen2-Audio-Base | - | 500 | 0.3 | 22.0 | 29.8 |
    | + SFT | 232k | 500 | 0.7 | 29.1 | 37.0 |
    | + SFT & SimulSA (Ours) | 235k | 500 | 7.9 | 34.2 | 38.3 |
    | + SFT | 232k | 1000 | 4.8 | 33.2 | 38.6 |
    | + SFT & SimulSA (Ours) | 235k | 1000 | 13.4 | 36.4 | 39.5 |
5.  实际意义：提供了一种低成本、即插即用的方式，为现有的通用LALM快速赋予同声传译功能，增强了其在实时字幕、会议同传等场景的实用性和部署便捷性。
6.  主要局限性：方法的有效性高度依赖于预训练LALM自身概率分布的可靠性（用于生成推测文本）。实验评估基于特定的时间分块（chunk size），其与更精细的、基于等待策略（Wait-k）的同传评估标准的可比性有待验证。此外，方法在更复杂语种对、噪声环境或极低延迟下的泛化能力未被检验。

---

