---
title: "Gemini Embedding 2: A Native Multimodal Embedding Model from Gemini"
date: 2026-05-28
draft: false
tags: [多模态模型, 对比学习, 语音识别]
categories: [论文速递]
description: "语音识别 | 7.9/10"
hiddenInHomeList: true
---

# 📄 Gemini Embedding 2: A Native Multimodal Embedding Model from Gemini

#多模态模型 #对比学习 #语音识别

✅ **7.9/10** | 前25% | #语音识别 | #对比学习 | #多模态模型 | [arxiv](https://arxiv.org/abs/2605.27295)

学术质量 5.9/7 | 影响力 1.5/2 | 可复现性 0.5/2 | 置信度 高


### 👥 作者与机构

Madhuri Shanbhogue, Zhe Li, Shanfeng Zhang, Gustavo Hernández Ábrego, Shih-Cheng Huang, Aashi Jain, Daniel Salz, Sonam Goenka, Chaitra Hegde, Ji Ma, Feiyang Chen, Jiaxing Wu, Tanmaya Dabral, Babak Samari, Kevin Poulet, Daniel Cer, Kaifeng Chen, Paul Suganathan, Hui Hui, Jovan Andonov, Philippe Schlattner, Jay Han, Iftekhar Naim, Wing Lowe, Vladimir Pchelin, Albert Yang, Yi-Ting Chen, Zhongli Ding, Grace Zhang, Georg Heigold, Yichang Chen, Antoine Reveillon, Brendan Mccloskey, Wenlei Zhou, Dahun Kim, Rui Meng, Emma Wang, Jack Zheng, Halley Fede, Zhen Yang, Keegan Mosley, Brian Potetz, Sahil Dua, Henrique Schechter Vera, Shen Gao, Hesen Zhang, Andreas Hess, Hengxuan Ying, Alberto Montes, Karan Gill, Min Choi, Sebastian Russo, Anja Hauth, Jinhyuk Lee, Michael Boratko, Megan Barnes, Vikram Rao, Claudiu Musat, Cyril Allauzen, Ehsan Variani, Shankar Kumar, Tom Bagby, Junyi Jiao, Yang Gu, Tengxin Li, Ayush Agrawal, Roberto Santana, Dev Nath, Stephen Karukas, Shuoxuan Han, Lucia Loher, Alice Twu, Nidhi Vyas, Siddharth Bhai, Frank Palma Gomez, Wangyuan Zhang, Chaoren Liu, Jizheng Yang, Steve Qiu, Shijie Zhang, Sujay Kulkarni, Sascha Rothe, Sean Nakamoto, Raphael Hoffmann, Zach Gleicher, Yunhsuan Sung, Qin Yin, Tom Duerig, Mojtaba Seyedhosseini（共81位作者）。

### 💡 毒舌点评

这篇论文堪称工业界SOTA的“凡尔赛文学”典范。模型名叫“Embedding 2”，但论文里从头到尾在秀Gemini的肌肉。本质上是在一个巨大的、闭源的、多模态基座模型（Gemini）上做微调（fine-tuning）和蒸馏（model soup），然后宣布自己在一堆榜单上刷到了第一。创新点在于“原生多模态”，但技术细节如合成数据构造、多任务采样策略等核心“炼丹”秘方一概不提，代码、模型、训练数据全部不开放。对于学术界来说，这篇论文最大的价值可能不是方法（因为不可复现），而是提供了一套强大的（但只有Google自己能用的）评估基准和消融分析思路。它证明了在巨大规模上，简单的平均池化+对比学习+模型融合就能出奇迹，但前提是你的“原材料”（Gemini）本身就足够好。

### 📌 核心摘要

Gemini Embedding 2是Google提出的原生多模态嵌入模型，能将视频、音频、图像和文本嵌入到一个统一的向量空间。该模型基于Gemini初始化，采用双向注意力的Transformer编码器，通过平均池化生成嵌入向量。训练采用多阶段（预微调、微调）对比学习范式，并使用模型融合（model soup）提升泛化能力。论文在MSCOCO（62.9 R@1）、Vatex（68.8 NDCG@10）、MMTEB多语言（69.9分）、MTEB代码（84.0分）以及MSEB音频检索等多个基准上报告了SOTA或具有竞争力的性能。核心贡献在于直接处理原生音频（优于ASR流水线）以及在多个专业领域（如天文学、美食学）展现出的零样本泛化能力。模型输出维度为3,072，支持通过MRL优化至768和1,536维。论文未提供模型权重、训练数据或可复现的代码。

### 🔗 开源详情

-   代码：未提供。论文未提及任何代码仓库或复现指南。
-   模型权重：未提供。论文明确模型基于Gemini构建，而Gemini是Google的专有模型，不对外公开权重。
-   数据集：未提供。论文未提供任何训练数据集（包括多任务数据、合成数据）的下载链接或详细描述。评估所用的公开基准（MSCOCO, Flickr30k, Vatex, MSR-VTT, MMTEB, MSEB等）为学术界通用数据集。
-   Demo：未提及。
-   复现材料：论文提供了模型架构、损失函数和训练流程的高层描述，但缺少关键实现细节（如完整的超参数配置、数据采样率、模型融合的具体配方），因此不具备可复现性。
-   论文中引用的开源项目：论文引用了CLIP, ALIGN, SigLIP 2, CoCa, BERT, RoBERTa, BGE, E5, Gecko, NV-Embed, Gemini Embedding, SAIL-Embedding, Amazon Nova MME, MoCa, MM-Embed等项目作为相关工作，但未在文中提供这些项目的具体GitHub链接。

### 🏗️ 方法概述和架构

模型架构与训练细节如下：

1.  模型架构：Gemini Embedding 2是一个基于Transformer的编码器，其参数初始化自Gemini大语言模型（但Gemini本身是Google专有模型）。该编码器经过改造，采用双向注意力机制，这与Gemini原始的自回归（单向）注意力不同，更适合生成上下文感知的密集向量表示。输入序列\(\mathbf{T}\)（可包含任意模态组合的交错序列）经过模型\(\mathcal{M}\)处理后，得到Token嵌入序列\(\mathbf{T}_{\mathrm{embed}}\)。为生成单一向量表示，对Token嵌入应用平均池化操作，得到\(\mathbf{P}_{\mathrm{embed}}\)。最后，通过一个随机初始化的线性投影层\(f\)将嵌入缩放到目标维度\(d\)（默认3,072维）。该设计允许模型处理原始图像、视频、音频以及它们的交错组合，并将其映射到统一空间。

2.  训练目标与损失函数：训练采用噪声对比估计（NCE）损失结合批次内负样本（in-batch negatives）。损失函数针对查询\(q_i\)、正样本\(p_i^+\)和（可选的）硬负样本\(p_i^-\)计算。相似度采用余弦相似度\(\operatorname{sim}(\mathbf{x}, \mathbf{y}) = \mathbf{x}^\top \mathbf{y} / \lVert \mathbf{x} \rVert \lVert \mathbf{y} \rVert\)，并引入温度参数\(\tau\)。对于分类等目标数量少的任务，损失函数包含一个掩码项\(\texttt{mask}(i, j)\)，以防止批次内不同查询的相同目标被错误地当作负样本。为支持不同维度的嵌入，模型采用了Matryoshka Representation Learning (MRL)，在\(k\)个嵌入维度的重叠子集上分别计算损失（如768、1536维）。

3.  多阶段训练流程：
    *   预微调（Pre-Fine-Tuning, PFT）：此阶段旨在将模型从自回归生成适应为编码任务。使用大量可能带有噪声的查询-目标对进行多任务训练，并采用大批次尺寸以稳定梯度。此阶段仅使用图像、文本和代码任务。
    *   微调（Fine-Tuning, FT）：基于更广泛的文本、代码、文档、图像、音频和视频任务进行训练。许多任务包含查询、正样本和硬负样本三元组。此阶段会针对不同任务调整批次尺寸，以优化相应评估表现。训练涉及单模态和跨模态批次，任务采样率通过经验确定。
    *   模型融合（Model Soup）：为系统性地结合不同检查点并提升跨模态泛化性能，对来自不同微调运行的模型参数进行平均。实验尝试了多种组合方式，包括同一训练运行内的检查点平均、不同训练运行间的平均以及各种加权平均。

4.  数据与输入处理：模型利用Gemini的能力进行模态数据和格式转换，直接接受Gemini原生支持的原始图像、视频或音频格式。训练使用了多任务数据、合成数据（如用于代码任务）以及针对视频任务的微调数据，但具体数据集未公开。评估则使用了众多公开基准。

![图1](https://arxiv.org/html/2605.27295v1/x1.png)

![图2](https://arxiv.org/html/2605.27295v1/x2.png)


### 💡 核心创新点

1.  原生多模态统一嵌入：提出一个能直接处理原始文本、图像、视频、音频及其任意交错组合，并将所有模态映射到单一向量空间的通用嵌入模型，超越了传统的双塔晚融合（late-fusion）架构。
2.  原生音频处理优势：系统证明了直接处理原始音频信号在嵌入任务中，尤其是在跨语言检索场景下，显著优于依赖ASR转录的流水线方法，避免了错误传播并保留了丰富的声学线索。
3.  强大的零样本跨领域泛化：展示了模型在多个高度专业化的垂直领域（从天文学、生物科学到美术、烹饪艺术）无需微调即可达到或接近SOTA性能的卓越泛化能力。
4.  大规模多任务多阶段训练与融合：采用预微调-微调的多阶段训练范式，并利用模型融合技术平衡通用性与任务专用性能，实现了在广泛基准上的性能提升。

### 📊 实验结果

论文在多个基准上进行了全面评估，主要结果如下表所示（数据直接取自论文）。

表1：多模态检索基准对比
| 任务 | 基准 | 指标 | Gemini Embedding 2 | Amazon Nova MME | Voyage-3.5-multimodal | Legacy模型 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 图像→图像 | GUIEC | Recall@1 | 79.4 | 68.6 | 69.4 | 69.5 |
| | ImageNet | Recall@1 | 83.6 | - | - | 71.8 |
| 文本→图像 | 平均 | Recall@1 | 80.5 | 71.6 | 75.8 | 69.5 |
| | MSCOCO | Recall@1 | 62.9 | 57.2 | 58.1 | 53.1 |
| | Flickr30k | Recall@1 | 89.1 | 81.6 | 89.9 | 81.4 |
| | DOCCI | Recall@1 | 93.4 | 84.0 | 83.8 | - |
| | TextCaps | Recall@1 | 89.6 | 76.0 | 79.4 | 74.0 |
| 图像→文本 | 平均 | Recall@1 | 91.2 | 81.6 | 85.9 | 83.4 |
| | MSCOCO | Recall@1 | 78.8 | 68.3 | 74.5 | 68.2 |
| | Flickr30k | Recall@1 | 97.4 | 87.5 | 94.5 | 94.0 |
| | DOCCI | Recall@1 | 91.3 | 76.5 | 77.4 | - |
| | TextCaps | Recall@1 | 97.4 | 88.9 | 88.6 | 88.1 |
| 文本→视频 | 平均 | NDCG@10 | 63.1 | 54.0 | 49.9 | 49.2 |
| | Vatex | NDCG@10 | 68.8 | 60.3 | 55.2 | 54.9 |
| | MSR-VTT | NDCG@10 | 68.0 | 67.0 | 63.0 | 57.9 |
| | YouCook2 | NDCG@10 | 52.5 | 34.7 | 31.4 | 34.9 |
| 图像+文本→文本 | EncyclopedicVQA | Recall@20 | 71.5 | - | 58.6 | - |
| 文档检索 | ViDoRe V2 | NDCG@10 | 64.9 | 60.6 | 65.5 | 28.9 |
| 总体性能 | 平均 | N/A | 77.2 | 68.2 | 70.0 | 64.1 |

表2：MMTEB文本基准对比
| 基准 | 任务 | Gemini Embedding 2 | Amazon Nova MME | Gemini Embedding | voyage-3.5 / voyage-code-3 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| MTEB(多语言) | 平均（按任务） | 69.9 | 63.8 | 68.4 | 58.5 |
| | 平均（按类型） | 61.2 | 59.6 | 51.9 | - |
| MTEB(代码) | 平均 | 84.0 | – | 76.0 | – |
| CoIR | 平均 | 82.3 | – | 73.9 | 78.5 |

表3：MSEB音频检索基准（Passage Retrieval Split）
| 模型配置 | 平均 MRR@10 | Passage In-Lang | Passage Cross-Lang |
| :--- | :--- | :--- | :--- |
| Gemini Embedding 2 w/ ASR | 70.40 | 73.58 | 67.55 |
| Gemini Embedding 2 w/ Native Audio | 73.99 | 75.58 | 72.56 |

表5：MTEB Code任务合成数据影响消融
| 模型 | 平均 | CodeFeedbackMT | CodeFeedbackST | SyntheticText2SQL |
| :--- | :--- | :--- | :--- | :--- |
| Gemini Embedding | 70.5 | 56.3 | 85.3 | 70.0 |
| Gemini Embedding 2 w/o Synthetic | 73.0 | 57.9 | 85.5 | 75.7 |
| Gemini Embedding 2 w/ Synthetic | 86.3 (+15.8) | 92.3 | 88.6 | 78.1 |

表6：视频数据与模型融合消融（NDCG@10 %）
| 模型配置 | MSR-VTT (Δ) | YouCook2 (Δ) | Vatex (Δ) |
| :--- | :--- | :--- | :--- |
| 基线：Gemini Embedding 2 | 68.2 (–) | 55.9 (–) | 69.2 (–) |
| 微调模型 | | | |
| + MSR-VTT数据 | 75.0 (+6.8) | 56.1 (+0.2) | 71.7 (+2.5) |
| + MSR-VTT & Vatex数据 | 76.1 (+7.9) | 55.3 (-0.6) | 79.5 (+10.3) |
| 模型融合（基线:FTmix-mv） | | | |
| 比例 2:1 (基线:微调) | 71.7 (+3.5) | 56.1 (+0.2) | 74.5 (+5.3) |
| 比例 1:1 (基线:微调) | 73.7 (+5.5) | 56.8 (+0.9) | 76.8 (+7.6) |

![图3](https://arxiv.org/html/2605.27295v1/x3.png)


### 🔬 细节详述

-   MRL实现：论文明确指出模型输出维度\(d=3072\)，并通过MRL优化支持768和1536维度的子向量，这使得单个模型可以服务于不同延迟/精度要求的应用场景。
-   音频评估细节：MSEB评估中，视频/音频处理被限制在1 FPS，最多32帧。音频评估对比了原生音频处理与ASR转录后处理两种范式，清晰展示了在语言内（In-Lang）和跨语言（Cross-Lang）检索任务上的性能差异。
-   领域泛化实验：表4展示了在MicroVQA（生物科学）、ArtCap（美术）、AstroLLaVA（天文）、Recipe1M（烹饪）四个专业领域的零样本R@5性能，Gemini Embedding 2均大幅领先CLIP、SigLIP 2等开源模型及专有模型Voyage-3.5-multimodal。
-   训练阶段影响：图3的消融对比了PFT和FT检查点在图像和视频任务上的性能，显示FT阶段（尤其引入视频任务数据后）带来了显著提升。

### ⚖️ 评分理由

-   创新性 (2.5/3)：将大型多模态LLM适配为通用嵌入模型的思路有明确价值，“原生多模态”和“原生音频”概念有启发性。但核心创新（基于Gemini的初始化与微调）高度依赖Google独有的巨大基座模型，对于外部研究者门槛极高，创新性更多体现在工程整合与规模效应上。
-   技术严谨性 (1.3/1.5)：论文提供了清晰的架构描述、损失函数、多阶段训练流程和关键的消融实验（合成数据、训练阶段、视频数据影响）。然而，最关键的部分——训练数据详情、多任务采样策略、模型融合的具体超参选择——均未公开，严重损害了技术细节的完整性和可审查性。
-   实验充分性 (1.3/1.5)：评估极其全面，覆盖了多模态检索、文本检索（MMTEB）、代码检索、音频检索（MSEB）以及多个专业领域的零样本测试。表格数据详实，对比了多个强基线。不足在于，部分关键对比（如MMTEB平均分）的统计口径（按任务/按类型）需仔细对应，且音频评估（MSEB）的基线模型数量有限。
-   清晰度 (0.8/1)：论文结构完整，摘要、方法、实验部分行文清晰，图表（如图1概念图、图2性能雷达图）有助于理解。但因核心细节（数据、部分超参）缺失，使得方法部分在可理解深度上有缺憾。
-   影响力 (1.5/2)：在工业界嵌入模型领域影响力可能很大（Google SOTA），并为多模态嵌入研究设立了强基准。然而，对于本分析面向的语音/音乐/音频领域读者，其核心贡献（通用多模态嵌入）的直接相关性有限。音频只是其处理的模态之一，且评估局限于检索任务。因此，在音频领域的直接影响力和可借鉴性被显著削弱。
-   开源/可复现性 (1.0/2)：这是最大的短板。论文未提供模型权重、训练数据、评估代码或复现脚本。模型完全基于Google专有Gemini，外部研究者无法复现或基于此工作。这在顶会论文中是一个重大缺陷，严重限制了其科学贡献。
-   可复现性 (0.5/0.5)：由于上述开源问题，完全可复现性为0。给予0.5分是因为论文方法描述部分在不涉及核心数据与代码的情况下，提供了可复现的思路框架。

## 局��与问题
1.  严重的可复现性危机：论文最大的局限性在于完全闭源。Gemini模型、训练数据、合成数据生成方法、所有超参数均未公开，使得学术界无法独立验证其结论，也无法将方法迁移至其他领域或基座模型。这违背了推动科学进步的核心原则。
2.  评估偏向自家生态：对比模型中包含“Google legacy model”和“Gemini Embedding”，但未说明这些模型的具体版本、训练时间及与本文模型的确切关系（如是否为直接前序版本），存在“内部对比”的嫌疑。MMTEB评测中Voyage-3.5的MTEB分数引用的是Voyage-3.5而非Voyage-3.5-multimodal，这需要在对比时格外注意。
3.  过度简化与缺乏比较：方法概述中的“平均池化”被描述为“简单有效”，但未与更复杂的池化策略（如CLS token、加权池化）进行对比实验。模型融合（Model Soup）虽然展示了有效性，但未提供足够的消融数据来说明哪种融合策略最优，以及融合的计算成本。
4.  音频评估的局限性：音频评估仅在一个检索任务（MSEB的Passage Retrieval）上进行，且基线模型（ASR流水线）相对单一。未涉及音频生成、音频分类、说话人识别等更广泛的音频理解任务，因此“原生音频处理优势”的结论可能不够普适。
5.  对模型规模的回避：论文完全未提及模型参数量、计算资源消耗、训练时长等关键信息。这对于评估模型的实用性和效率至关重要，尤其是对于考虑部署或模仿的研究者。
6.  潜在偏见与伦理讨论缺失：论文未讨论模型可能存在的偏见、安全性、隐私风险，尤其是在处理跨领域、跨语言内容时可能放大训练数据中的偏差。作为潜在的“out-of-the-box”解决方案，这一缺失尤为遗憾。

---

[← 返回 2026-05-28 语音/音乐/音频论文速递](/your-blog-base-path/posts/2026-05-28/)
