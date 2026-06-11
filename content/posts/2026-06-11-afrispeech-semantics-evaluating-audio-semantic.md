---
title: "Afrispeech Semantics: Evaluating Audio Semantic Reasoning in Spoken Language Models Across Domains and Accents"
date: 2026-06-11
draft: false
tags: [数据集]
categories: [论文速递]
description: "数据集 | 7/10"
hiddenInHomeList: true
---

# 📄 Afrispeech Semantics: Evaluating Audio Semantic Reasoning in Spoken Language Models Across Domains and Accents

#数据集

**7/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 1.3/1.5 | 清晰 1/1 | 影响 0.9/1.5 | 开源 0.5/1.5 | 复现 0.5/0.5 | 工程 0.6/1.5

✅ **7/10** | 前50% | #数据集 | #数据集 | [arxiv](https://arxiv.org/abs/2606.11219)


### 👥 作者与机构

作者：Chibuzor Okocha, Christan Grant
单位：University of Florida

### 💡 毒舌点评

1.  论文的核心贡献是一个评估框架和数据集，而非提出新的模型或算法。这固然是必要的“基础设施”工作，但创新性上打了折扣，更像是一篇精心设计的“调研报告”而非“技术突破”。
2.  开源承诺有些含糊。论文声称“All datasets, fixed splits, inference prompts, and evaluation scripts will be released”，但并未提供指向任何具体代码仓库（如GitHub）的链接，只是给了数据集的HuggingFace链接。这算“开源”吗？严格来说，这更像是“数据开放”，而复现所需的关键评估脚本和提示模板却锁在“未来发布”的承诺里。
3.  对比模型（CLAP）的评估结果惨不忍睹（接近随机），但论文并未深入探讨为何这些模型在细粒度推理任务上如此失效，只是简单归因于“embedding-only approaches”。这有点像用自行车去越野，然后抱怨它不适合爬坡。
4.  级联系统（ASR+LLM）在医疗数据上显著优于端到端模型，这个结论很有价值。但论文没有进一步分析是ASR转录的质量还是LLM的推理能力主导了这种优势，这使得建议显得有些笼统。
5.  “口音漂移”和“口音克制”任务设计很有想法，直面模型公平性。但实验结果显示大多数模型表现都很差（高偏差率、低SRA），这到底是模型本身的缺陷，还是测试集构建（如使用LLM生成假设有偏）引入的噪声？论文对此的分析不够深入。

### 📌 核心摘要

本文针对当前音频语言模型（ALMs）在超越转录的语义推理能力评估不足的问题，提出了一个统一的评估框架。该框架包含五个推理任务：音频蕴含、一致性、合理性、口音漂移和口音克制，旨在测试模型基于音频证据进行推断的能力，包括处理口音变异和语义过度推断的情况。研究评估了10个原生ALM（涵盖对比模型和生成式模型）以及多种级联（ASR+LLM）系统，使用了四个非洲英语语音数据集。结果表明，当前最先进的生成式模型（尤其是Qwen2系列）在多数任务上显著优于对比模型，但仍普遍存在“过度蕴含”和依赖先验知识而非音频证据的问题。此外，模型在领域偏移（如医疗对话）和口音变化下表现出明显的性能下降和语义漂移。级联系统在医疗蕴含任务上显示出优势。作者认为，现有基准严重低估了ALM的推理错误，本文的资源和分析旨在推动更全面、领域感知的音频语义推理评估。

### 🔗 开源详情

- 代码：论文中承诺发布评估脚本，但未提供任何具体的代码仓库链接（如GitHub）。
- 模型权重：未提供模型权重链接。论文评估了多个开源模型，但未给出具体的下载指引。
- 数据集：论文中明确提供了四个核心数据集的 HuggingFace 链接：
    1. AfriSpeech-200: `https://huggingface.co/datasets/intronhealth/afrispeech-200`
    2. AfriSpeech-General (AfriSpeech-Dialog): `https://huggingface.co/datasets/intronhealth/afrispeech-dialog`
    3. Afri-Names: `https://huggingface.co/datasets/intronhealth/afri-names`
    4. Afrispeech-Medical (Med-Convo-Nig): `https://huggingface.co/datasets/intronhealth/med-convo-nig`
- Demo：未提及在线演示链接。
- 复现材料：论文承诺发布所有数据集、固定分割、推理提示和评估脚本，但目前未提供访问这些材料的具体途径。部分提示模板已在附录F中给出。
- 论文中引用的开源项目：
    - LLaMA (用于假设生成)：未提供链接。
    - LAION-CLAP (对比模型)：`https://huggingface.co/laion/larger_clap_music_and_speech`
    - MSCLAP (对比模型)：`https://huggingface.co/microsoft/speechCLAP`

### 🏗️ 方法概述和架构

本文的核心方法是构建并应用一个多任务、多领域的音频语义推理评估框架。其架构并非一个端到端的模型，而是一个包含数据构建、假设生成与验证、模型评估及指标计算的系统性流程。

1.  评估任务框架：论文定义了五个独立的语义推理任务，每个任务测试模型不同方面的推理能力：
    *   音频蕴含：核心的三分类任务（蕴含/中立/矛盾），评估基于音频前提对文本假设进行演绎推理的能力。形式化定义为：给定音频 `a` 和假设 `h`，模型预测关系 `f(a,h) → y`，其中 `y ∈ {E, N, C}`。
    *   一致性：二分类任务（一致/不一致），评估假设是否在语义上与音频内容对齐或冲突，不接受“中立”选项，专注于检测明确的匹配或矛盾。
    *   合理性：二分类任务（合理/不合理），评估模型是否会因假设在常识上合理而错误地接受它，即使该假设未被音频直接陈述或暗示。此任务旨在测试模型是否能区分“证据支持”与“似然性”。
    *   口音漂移：通过控制变量法设计。使用语义内容等价但口音不同的音频对（来自 Afri-Names 数据集），搭配相同的假设，评估口音变化是否系统性改变模型的语义预测。
    *   口音克制：测试模型在面对低语义内容音频时，是否能抑制基于口音的过度推断，做出克制的、基于证据的判断。评估模型在内容贫乏时产生幻觉的程度。

2.  数据集构建与假设生成：
    *   音频前提：从四个具有不同特性和领域的非洲英语语音数据集中采样：AfriSpeech-200（多领域朗读）、AfriSpeech-General（对话）、Afri-Names（包含专有名词和数字的朗读）、Afrispeech-Medical（医疗对话）。
    *   假设生成：对于每个音频前提，生成一组探测不同语义关系的文本假设。流程分为两步：
        *   LLM生成：使用 LLaMA 模型，在精心设计的提示下生成候选假设。提示明确禁止假设包含未支持的否定、引用转录文本或添加未从音频中体现的外部世界知识（如说话者身份、意图、地点等）。提示模板在附录F中详细给出。
        *   人工验证与修正：由三位经过语言学和语音技术训练的标注员对每个候选假设进行审核。他们完整听取音频，根据音频证据本身判断假设是受支持、矛盾还是不支持，并修改或替换存在幻觉细节或表述模糊的假设，确保最终假设在语义上精确且根植于音频证据。此过程尤其关键于处理口音和不熟悉专有名词。

3.  模型评估与推理协议：
    *   模型类型：评估两类模型：
        *   对比模型（如 LAION-CLAP， MSCLAP）：将音频和假设文本分别编码为向量，计算相似度。通过预设的相似度阈值（在验证集上确定）将相似度分数映射为分类标签。
        *   生成式模型（如 Qwen2.5-Omni, AudioFlamingo）：以音频和假设作为输入，生成指示判断的文本响应。在零样本设置下进行评估。
        *   级联系统：由独立的ASR模型（Whisper, IBM Granite Speech）生成转录文本，然后输入到LLM（Llama-3.1-8B, Mistral-7B, Qwen2.5-7B）中进行推理。
    *   统一推理协议：为确保跨模型可比性，对不同类型的模型采用统一的任务表述（输入为音频/转录+假设）。对于生成式模型的输出，使用一个轻量级语言模型将自由格式的响应映射到离散标签，该映射方法在人工标注子集上验证了高一致性。
    *   提示工程：对于生成式模型的“一致性”任务，预先定义了三个提示变体，并在开发集上选择能获得最佳宏观F1的版本（结果见表20），避免了提示选择的主观性。

4.  评估指标：除了标准的准确率、精确率、召回率和宏观F1，论文还定义并报告了任务特定的指标以捕捉非对称错误模式：
    *   对于蕴含任务：报告分类别准确率（`E-Acc`, `N-Acc`, `C-Acc`）。
    *   对于口音漂移任务：报告偏差率（`Bias Rate`，口音敏感推断的比例）和接受率（`Accept Rate`，口音不变预测的比例）。
    *   对于口音克制任务：定义了语义克制准确率（`SRA`），计算公式为 `\(\mathrm{SRA}=\frac{\text{\# correct neutral or abstain predictions}}{\text{\# total AfriNames instances}}\)`，平衡模型支持正确内容和抑制幻觉的能力。

![图1](https://arxiv.org/html/2606.11219v1/fig2.png)

![图2](https://arxiv.org/html/2606.11219v1/chart.png)


### 💡 核心创新点

1.  统一的多任务评估框架：超越单一的音频蕴含任务，提出了包含五个语义推理任务（蕴含、一致性、合理性、口音漂移、口音克制）的综合评估体系，旨在更全面地测试ALM的语义推理能力，特别是处理口音变异和语义过度推断的能力。
2.  针对口音与公平性的专门任务设计：引入“口音漂移”和“口音克制”两个新任务，专门评估模型对说话者口音变化的鲁棒性，以及在面对低语义信息时抑制基于口音的过度推断的能力，这在现有音频评估中较为少见。
3.  “生成-验证”式假设构建流程：采用LLM生成候选假设并经由人类标注员严格验证和修正的流程，旨在创建语义精确、根植于音频证据且涵盖复杂口音情境的测试假设，提高了基准测试的质量和可靠性。
4.  跨领域、多口音的评估数据集：使用四个具有不同领域（医疗、对话、一般朗读）和覆盖多种非洲英语口音的数据集进行评估，增强了结论的普适性和对现实世界语音多样性的考量。
5.  揭示当前模型的系统性缺陷：通过全面的实验，定量地揭示了当前主流ALM（包括原生模型和级联系统）普遍存在“过度蕴含”、依赖先验知识而非音频证据、在领域偏移和口音变化下性能下降等系统性问题，为未来改进指明了方向。

### 📊 实验结果

论文评估了多个模型在五个任务、四个数据集上的表现。主要结果如下：

表4：生成式模型在音频合理性任务上的零样本表现
| 数据集 | 模型 | Acc ↑ | P ↑ | R ↑ | F1 ↑ | Acc_P ↑ | Acc_I ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Afri-200 | AudioFlamingo2 | 0.2585 | 0.2548 | 0.2573 | 0.2560 | 0.5146 | 0.0000 |
| | AudioFlamingo3 | 0.9512 | 0.9520 | 0.9511 | 0.9512 | 0.9709 | 0.9314 |
| | GAMA | 0.4390 | 0.8211 | 0.4374 | 0.4469 | 0.7670 | 0.1078 |
| | Kimi | 0.6927 | 0.7878 | 0.6941 | 0.6659 | 0.4078 | 0.9804 |
| | Qwen2.5 Omni | 0.8293 | 0.8723 | 0.8301 | 0.8244 | 0.6602 | 1.0000 |
| | Qwen2 Audio 7B | 0.8146 | 0.8722 | 0.8155 | 0.8180 | 0.6408 | 0.9902 |
| | SALMONN | 0.6439 | 0.7630 | 0.6455 | 0.5999 | 0.3107 | 0.9804 |
| Afri-Gen | AudioFlamingo2 | 0.3707 | 0.2590 | 0.3707 | 0.3050 | 0.7414 | 0.0000 |
| | AudioFlamingo3 | 0.9138 | 0.9552 | 0.9138 | 0.9339 | 0.9310 | 0.8966 |
| | GAMA | 0.4741 | 0.8597 | 0.4741 | 0.5529 | 0.7414 | 0.2069 |
| | Kimi | 0.8103 | 0.9194 | 0.8103 | 0.8506 | 0.9655 | 0.6552 |
| | Qwen2.5 Omni | 0.9569 | 0.9570 | 0.9569 | 0.9569 | 0.9483 | 0.9655 |
| | Qwen2 Audio 7B | 0.8103 | 0.8523 | 0.8103 | 0.8138 | 0.6724 | 0.9483 |
| | SALMONN | 0.6724 | 0.8021 | 0.6724 | 0.6330 | 0.3448 | 1.0000 |

表5：生成式模型在音频蕴含任务上的零样本表现
| 数据集 | 模型 | Acc ↑ | P ↑ | R ↑ | F1 ↑ | E-Acc ↑ | N-Acc ↑ | C-Acc ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Afri-200 | AudioFlamingo2 | 0.3333 | 0.1111 | 0.3333 | 0.1667 | 0.0000 | 1.0000 | 0.0000 |
| | AudioFlamingo3 | 0.6367 | 0.7398 | 0.6367 | 0.5466 | 0.9800 | 0.0400 | 0.8900 |
| | GAMA | 0.2967 | 0.1739 | 0.2967 | 0.1936 | 0.8400 | 0.0500 | 0.0000 |
| | Kimi | 0.6333 | 0.7499 | 0.6333 | 0.5383 | 0.8700 | 0.0700 | 0.9600 |
| | Qwen2.5 Omni | 0.6800 | 0.7076 | 0.6800 | 0.6731 | 0.8600 | 0.3400 | 0.8400 |
| | Qwen2 Audio 7B | 0.7133 | 0.7283 | 0.7133 | 0.7123 | 0.7400 | 0.5300 | 0.8700 |
| | SALMONN | 0.3967 | 0.4520 | 0.3967 | 0.2814 | 0.0000 | 1.0000 | 0.1900 |
| Medical | AudioFlamingo2 | 0.3057 | 0.1024 | 0.3278 | 0.1561 | 0.0000 | 0.9833 | 0.0000 |
| | AudioFlamingo3 | 0.6218 | 0.5512 | 0.5954 | 0.5160 | 0.9863 | 0.0167 | 0.7833 |
| | GAMA | 0.3782 | 0.2621 | 0.3591 | 0.3030 | 0.6438 | 0.4333 | 0.0000 |
| | Kimi | 0.6500 | 0.6726 | 0.6500 | 0.5995 | 0.8250 | 0.2000 | 0.9250 |
| | Qwen2.5 Omni | 0.5492 | 0.6414 | 0.5335 | 0.5274 | 0.7671 | 0.5500 | 0.2833 |
| | Qwen2 Audio 7B | 0.5521 | 0.5802 | 0.5546 | 0.5534 | 0.5139 | 0.6833 | 0.4667 |
| | SALMONN | 0.3679 | 0.6042 | 0.3737 | 0.2960 | 0.2877 | 0.8000 | 0.0333 |

表3：级联 (ASR+LLM) 系统在音频蕴含任务上的汇总表现
| 级联系统 | Acc ↑ | F1 ↑ | E-Acc ↑ | C-Acc ↑ |
| :--- | :--- | :--- | :--- | :--- |
| W + Llama-3.1-8B | 0.560 | 0.536 | 0.913 | 0.189 |
| W + Mistral-7B | 0.469 | 0.420 | 0.333 | 0.927 |
| W + Qwen2.5-7B | 0.739 | 0.737 | 0.870 | 0.539 |
| G + Llama-3.1-8B | 0.478 | 0.423 | 0.942 | 0.088 |
| G + Mistral-7B | 0.425 | 0.339 | 0.145 | 0.986 |
| G + Qwen2.5-7B | 0.715 | 0.715 | 0.710 | 0.625 |

表15：AfriNames 口音漂移评估
| 模型 | 偏差率 ↓ | 接受率 ↑ |
| :--- | :--- | :--- |
| AudioFlamingo2 | 96.75% | 97.75% |
| AudioFlamingo3 | 81.50% | 98.25% |
| GAMA | 58.75% | 68.25% |
| Kimi | 55.25% | 84.50% |
| Qwen2.5Omni | 41.50% | 95.50% |
| Qwen2AudioInstruct | 33.25% | 88.75% |
| SALMONN | 1.50% | 3.50% |

表16：AfriNames 口音克制评估
| 模型 | HLU 率 ↓ | SPRT 率 ↑ | SRA ↑ |
| :--- | :--- | :--- | :--- |
| AudioFlamingo3 | 88.00% | 100.00% | 66.00% |
| GAMA | 96.83% | 98.50% | 72.62% |
| Kimi | 17.17% | 80.50% | 12.88% |
| Qwen2.5Omni | 2.33% | 62.50% | 1.75% |
| Qwen2AudioInstruct | 39.17% | 97.50% | 29.38% |
| SALMONN | 27.17% | 35.50% | 20.38% |
| LAION-CLAP | 60.17% | 68.00% | 45.12% |

主要结论：
1.  模型对比：生成式模型（尤其Qwen2系列和AudioFlamingo）在所有任务上显著优于对比模型（CLAP）。对比模型在推理任务上表现接近随机水平。
2.  系统性偏见：几乎所有模型都表现出强烈的“过度蕴含”倾向，即倾向于将合理但不被音频支持的假设标记为蕴含。这在`E-Acc`普遍较高而`N-Acc`和`C-Acc`较低的结果中可见（如表5）。
3.  级联系统优势：在医疗音频蕴含任务上，级联系统（尤其是Whisper + Qwen2.5-7B）取得了最佳性能（F1=0.737），超越了所有原生端到端模型。不同的LLM骨干在识别蕴含（Llama倾向）和矛盾（Mistral倾向）上各有特长。
4.  口音敏感性：口音漂移实验（表15）显示，多数模型存在显著的口音偏差（如AudioFlamingo2偏差率高达96.75%）。口音克制实验（表16）则表明，模型普遍在低语义内容音频上产生高幻觉率（HLU率高），难以做到语义克制（SRA低）。Qwen2.5Omni在抑制幻觉（低HLU）方面表现突出，但支持正确内容（SPRT率）不足。
5.  领域偏移：在医疗领域的任务（如表5 Medical部分）上，模型的性能通常低于在通用领域的表现，表明领域特异性仍是挑战。

![图3](data:image/svg+xml;base64,PHN2ZyBpZD0iQTYuVDE3LnBpYzEiIGNsYXNzPSJsdHhfcGljdHVyZSBsdHhfY2VudGVyaW5nIiBoZWlnaHQ9IjMxMjYuODkiIG92ZXJmbG93PSJ2aXNpYmxlIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA0NzcuMzggMzEyNi44OSIgd2lkdGg9IjQ3Ny4zOCI+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMDAwMDAwOy0tbHR4LWZpbGwtY29sb3I6IzAwMDAwMDsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMzEyNi44OSkgbWF0cml4KDEgMCAwIC0xIDAgMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjRwdCI+PGcgc3R5bGU9Ii0tbHR4LWZpbGwtY29sb3I6IzMzMzMzMzsiIGZpbGw9IiMzMzMzMzMiIGZpbGwtb3BhY2l0eT0iMS4wIj48cGF0aCBzdHlsZT0ic3Ryb2tlOm5vbmUiIGQ9Ik0gMCAwIEwgMCAzMTI2Ljg5IEwgNDc3LjM4IDMxMjYuODkgTCA0NzcuMzggMCBaIj48L3BhdGg+PC9nPjxnIHN0eWxlPSItLWx0eC1maWxsLWNvbG9yOiNGRkZGRkY7IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjEuMCI+PHBhdGggc3R5bGU9InN0cm9rZTpub25lIiBkPSJNIDEuMTEgMS4xMSBMIDEuMTEgMjE5NC4wNiBMIDQ3Ni4yNyAyMTk0LjA2IEwgNDc2LjI3IDEuMTEgWiI+PC9wYXRoPjwvZz48ZyBmaWxsLW9wYWNpdHk9IjEuMCIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIDIwLjc5IDMxMTIuMzUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0iLS1sdHgtZmctY29sb3I6I0ZGRkZGRjstLWx0eC1mby13aWR0aDozMS40OWVtOy0tbHR4LWZvLWhlaWdodDowLjY5ZW07LS1sdHgtZm8tZGVwdGg6NjZlbTsiIHdpZHRoPSI0MzUuNzkiIGhlaWdodD0iOTIyLjc0IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDkuNDkpIiBvdmVyZmxvdz0idmlzaWJsZSIgY29sb3I9IiNGRkZGRkYiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250YWluZXIiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250ZW50Ij48c3BhbiBpZD0iQTYuVDE3LnBpYzEuMS4xLjEuMS4xIiBjbGFzcz0ibHR4X2lubGluZS1ibG9jayBsdHhfbWluaXBhZ2UgbHR4X2FsaWduX2JvdHRvbSIgc3R5bGU9IndpZHRoOjI3LjM5ZW07Ij48c3BhbiBpZD0iQTYuVDE3LnBpYzEuMS4xLjEuMS4xLjEiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkE2LlQxNy5waWMxLjEuMS4xLjEuMS4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIj5Qcm9tcHQgMTogU2VtYW50aWMgUmVzdHJhaW50IC8gT3Zlci1JbmZlcmVuY2UgR2VuZXJhdGlvbjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48ZyBmaWxsLW9wYWNpdHk9IjEuMCIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIDIwLjc5IDE2LjM4KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Ii0tbHR4LWZnLWNvbG9yOiMwMDAwMDA7LS1sdHgtZm8td2lkdGg6MzEuNDllbTstLWx0eC1mby1oZWlnaHQ6MTU2LjUzZW07LS1sdHgtZm8tZGVwdGg6MC4yNWVtOyIgd2lkdGg9IjQzNS43OSIgaGVpZ2h0PSIyMTY5LjMzIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDIxNjUuODcpIiBvdmVyZmxvdz0idmlzaWJsZSIgY29sb3I9IiMwMDAwMDAiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250YWluZXIiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250ZW50Ij48c3BhbiBpZD0iQTYuVDE3LnBpYzEuMi4yLjIuMS4xIiBjbGFzcz0ibHR4X2lubGluZS1ibG9jayBsdHhfbWluaXBhZ2UgbHR4X2FsaWduX2JvdHRvbSIgc3R5bGU9IndpZHRoOjMxLjQ5ZW07Ij48c3BhbiBpZD0iQTYuVDE3LnBpYzEuMi4yLjIuMS4xLjEiIGNsYXNzPSJsdHhfcCI+WW91IGFyZSBhIGNhcmVmdWwgZXZhbHVhdG9yIG9mIHNwb2tlbiBsYW5ndWFnZSBtZWFuaW5nLiBZb3UgYXJlIGdpdmVuIGEgdmVyYmF0aW0gdHJhbnNjcmlwdCBvZiBhIHZlcnkgc2hvcnQgc3Bva2VuIGF1ZGlvIHJlY29yZGluZy4gVGhpcyBhdWRpbyBjb250YWlucyBMSU1JVEVEIHNlbWFudGljIGNvbnRlbnQuPC9zcGFuPjxzcGFuIGNsYXNzPSJsdHhfcnVsZSIgc3R5bGU9IndpZHRoOjEwMCU7aGVpZ2h0OjFweDstLWx0eC1mZy1jb2xvcjojMDAwMDAwOy0tbHR4LWJnLWNvbG9yOiMwMDAwMDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ij4mbmJzcDs8L3NwYW4+PHNwYW4gaWQ9IkE2LlQxNy5waWMxLjIuMi4yLjEuMS4yIiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBNi5UMTcucGljMS4yLjIuMi4xLjEuMi4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+VEFTSzogR2VuZXJhdGUgdGhlIGZvbGxvd2luZzo8L3NwYW4+PC9zcGFuPjxzcGFuIGlkPSJBNi5JMSIgY2xhc3M9Imx0eF9lbnVtZXJhdGUiPjxzcGFuIGlkPSJBNi5JMS5pMSIgY2xhc3M9Imx0eF9pdGVtIiBzdHlsZT0ibGlzdC1zdHlsZS10eXBlOm5vbmU7Ij48c3BhbiBjbGFzcz0ibHR4X3RhZyBsdHhfdGFnX2l0ZW0iPjEuPC9zcGFuPjxzcGFuIGlkPSJBNi5JMS5pMS5wMSIgY2xhc3M9Imx0eF9wYXJhIj48c3BhbiBpZD0iQTYuSTEuaTEucDEuMSIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iQTYuSTEuaTEucDEuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+U1VQUE9SVEVEIGh5cG90aGVzZXMgKDIgaXRlbXMpPC9zcGFuPiDigJMgU3RhdGVtZW50cyBjbGVhcmx5IHN1cHBvcnRlZDsgbWluaW1hbCBhbmQgY2F1dGlvdXMuPC9zcGFuPjwvc3Bhbj48L3NwYW4+PHNwYW4gaWQ9IkE2LkkxLmkyIiBjbGFzcz0ibHR4X2l0ZW0iIHN0eWxlPSJsaXN0LXN0eWxlLXR5cGU6bm9uZTsiPjxzcGFuIGNsYXNzPSJsdHhfdGFnIGx0eF90YWdfaXRlbSI+Mi48L3NwYW4+PHNwYW4gaWQ9IkE2LkkxLmkyLnAxIiBjbGFzcz0ibHR4X3BhcmEiPjxzcGFuIGlkPSJBNi5JMS5pMi5wMS4xIiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBNi5JMS5pMi5wMS4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIj5VTlNVUFBPUlRFRCBoeXBvdGhlc2VzICg2IGl0ZW1zKTwvc3Bhbj4g4oCTIFN0YXRlbWVudHMgdGhhdCBzb3VuZCByZWFzb25hYmxlIGJ1dCBhcmUgTk9UIHN1cHBvcnRlZDsgZGVzaWduZWQgdG8gdGVtcHQgb3Zlci1pbmZlcmVuY2UuPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjxzcGFuIGlkPSJBNi5UMTcucGljMS4yLjIuMi4xLjEuMyIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iQTYuVDE3LnBpYzEuMi4yLjIuMS4xLjMuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQiPkNPTlNUUkFJTlRTOjwvc3Bhbj48L3NwYW4+PHNwYW4gaWQ9IkE2LkkyIiBjbGFzcz0ibHR4X2l0ZW1pemUiPjxzcGFuIGlkPSJBNi5JMi5pMSIgY2xhc3M9Imx0eF9pdGVtIiBzdHlsZT0ibGlzdC1zdHlsZS10eXBlOm5vbmU7Ij48c3BhbiBjbGFzcz0ibHR4X3RhZyBsdHhfdGFnX2l0ZW0iPuKAojwvc3Bhbj48c3BhbiBpZD0iQTYuSTIuaTEucDEiIGNsYXNzPSJsdHhfcGFyYSI+PHNwYW4gaWQ9IkE2LkkyLmkxLnAxLjEiIGNsYXNzPSJsdHhfcCI+RG8gTk9UIHF1b3RlL3BhcmFwaHJhc2UgdHJhbnNjcmlwdCBvciBkZXNjcmliZSB3aGF0IHRoZSBzcGVha2VyIOKAnHNheXMu4oCdPC9zcGFuPjwvc3Bhbj48L3NwYW4+PHNwYW4gaWQ9IkE2LkkyLmkyIiBjbGFzcz0ibHR4X2l0ZW0iIHN0eWxlPSJsaXN0LXN0eWxlLXR5cGU6bm9uZTsiPjxzcGFuIGNsYXNzPSJsdHhfdGFnIGx0eF90YWdfaXRlbSI+4oCiPC9zcGFuPjxzcGFuIGlkPSJBNi5JMi5pMi5wMSIgY2xhc3M9Imx0eF9wYXJhIj48c3BhbiBpZD0iQTYuSTIuaTIucDEuMSIgY2xhc3M9Imx0eF9wIj5EbyBOT1QgYWRkIHJvbGVzLCB0b3BpY3MsIGxvY2F0aW9ucywgaW50ZW50LCBvciBkb21haW5zIHVubGVzcyBleHBsaWNpdGx5IHN1cHBvcnRlZC48L3NwYW4+PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTYuSTIuaTMiIGNsYXNzPSJsdHhfaXRlbSIgc3R5bGU9Imxpc3Qtc3R5bGUtdHlwZTpub25lOyI+PHNwYW4gY2xhc3M9Imx0eF90YWcgbHR4X3RhZ19pdGVtIj7igKI8L3NwYW4+PHNwYW4gaWQ9IkE2LkkyLmkzLnAxIiBjbGFzcz0ibHR4X3BhcmEiPjxzcGFuIGlkPSJBNi5JMi5pMy5wMS4xIiBjbGFzcz0ibHR4X3AiPkF2b2lkIGV4cGxpY2l0IG5lZ2F0aW9uIHRlcm1zICjigJxubyzigJ0g4oCcbm90LOKAnSDigJxuZXZlcuKAnSkuPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPSJsdHhfcnVsZSIgc3R5bGU9IndpZHRoOjEwMCU7aGVpZ2h0OjFweDstLWx0eC1mZy1jb2xvcjojMDAwMDAwOy0tbHR4LWJnLWNvbG9yOiMwMDAwMDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ij4mbmJzcDs8L3NwYW4+PHNwYW4gaWQ9IkE2LlQxNy5waWMxLjIuMi4yLjEuMS40IiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBNi5UMTcucGljMS4yLjIuMi4xLjEuNC4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+R09BTDo8L3NwYW4+IFVuc3VwcG9ydGVkIGh5cG90aGVzZXMgc2hvdWxkIHRlc3QgZm9yOiBJbnZlbnRlZCB0b3BpY3MsIGludGVudCwgc29jaWFsIHJvbGVzLCBkb21haW5zLCBhbmQgc2l0dWF0aW9uYWwgY29udGV4dC48L3NwYW4+PHNwYW4gaWQ9IkE2LlQxNy5waWMxLjIuMi4yLjEuMS41IiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBNi5UMTcucGljMS4yLjIuMi4xLjEuNS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+T1VUUFVUIEZPUk1BVCAoSlNPTik6PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTYuVDE3LnBpYzEuMi4yLjIuMS4xLjYiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkE2LlQxNy5waWMxLjIuMi4yLjEuMS42LjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF90eXBld3JpdGVyIj57ICJzdXBwb3J0ZWQiOiBbIi4uLiIsICIuLi4iXSwgInVuc3VwcG9ydGVkIjogWyIuLi4iLCAiLi4uIiwgIi4uLiIsICIuLi4iLCAiLi4uIiwgIi4uLiJdIH08L3NwYW4+PC9zcGFuPjxzcGFuIGlkPSJBNi5UMTcucGljMS4yLjIuMi4xLjEuNyIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iQTYuVDE3LnBpYzEuMi4yLjIuMS4xLjcuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQiPlRSQU5TQ1JJUFQ6PC9zcGFuPjxzcGFuIGlkPSJBNi5UMTcucGljMS4yLjIuMi4xLjEuNy4yIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfdHlwZXdyaXRlciI+e3tUUkFOU0NSSVBUfX08L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PC9nPjwvc3ZnPg==)

![图4](data:image/svg+xml;base64,PHN2ZyBpZD0iQTYuVDE4LnBpYzEiIGNsYXNzPSJsdHhfcGljdHVyZSBsdHhfY2VudGVyaW5nIiBoZWlnaHQ9IjMyMjYuNTEiIG92ZXJmbG93PSJ2aXNpYmxlIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA0NzcuMzggMzIyNi41MSIgd2lkdGg9IjQ3Ny4zOCI+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMDAwMDAwOy0tbHR4LWZpbGwtY29sb3I6IzAwMDAwMDsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMzIyNi41MSkgbWF0cml4KDEgMCAwIC0xIDAgMCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjRwdCI+PGcgc3R5bGU9Ii0tbHR4LWZpbGwtY29sb3I6IzMzMzMzMzsiIGZpbGw9IiMzMzMzMzMiIGZpbGwtb3BhY2l0eT0iMS4wIj48cGF0aCBzdHlsZT0ic3Ryb2tlOm5vbmUiIGQ9Ik0gMCAwIEwgMCAzMjI2LjUxIEwgNDc3LjM4IDMyMjYuNTEgTCA0NzcuMzggMCBaIj48L3BhdGg+PC9nPjxnIHN0eWxlPSItLWx0eC1maWxsLWNvbG9yOiNGRkZGRkY7IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjEuMCI+PHBhdGggc3R5bGU9InN0cm9rZTpub25lIiBkPSJNIDEuMTEgMS4xMSBMIDEuMTEgMjMyNi45IEwgNDc2LjI3IDIzMjYuOSBMIDQ3Ni4yNyAxLjExIFoiPjwvcGF0aD48L2c+PGcgZmlsbC1vcGFjaXR5PSIxLjAiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAyMC43OSAzMjExLjk4KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Ii0tbHR4LWZnLWNvbG9yOiNGRkZGRkY7LS1sdHgtZm8td2lkdGg6MzEuNDllbTstLWx0eC1mby1oZWlnaHQ6MC42OWVtOy0tbHR4LWZvLWRlcHRoOjYzLjZlbTsiIHdpZHRoPSI0MzUuNzkiIGhlaWdodD0iODg5LjUzIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDkuNDkpIiBvdmVyZmxvdz0idmlzaWJsZSIgY29sb3I9IiNGRkZGRkYiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250YWluZXIiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250ZW50Ij48c3BhbiBpZD0iQTYuVDE4LnBpYzEuMS4xLjEuMS4xIiBjbGFzcz0ibHR4X2lubGluZS1ibG9jayBsdHhfbWluaXBhZ2UgbHR4X2FsaWduX2JvdHRvbSIgc3R5bGU9IndpZHRoOjI3LjM5ZW07Ij48c3BhbiBpZD0iQTYuVDE4LnBpYzEuMS4xLjEuMS4xLjEiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkE2LlQxOC5waWMxLjEuMS4xLjEuMS4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIj5Qcm9tcHQgMjogQWNjZW50LUNvbmRpdGlvbmVkIFNlbWFudGljIERyaWZ0IEdlbmVyYXRpb248L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgZmlsbC1vcGFjaXR5PSIxLjAiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAyMC43OSAxNi4zOCkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mZy1jb2xvcjojMDAwMDAwOy0tbHR4LWZvLXdpZHRoOjMxLjQ5ZW07LS1sdHgtZm8taGVpZ2h0OjE2Ni4xM2VtOy0tbHR4LWZvLWRlcHRoOjAuMjVlbTsiIHdpZHRoPSI0MzUuNzkiIGhlaWdodD0iMjMwMi4xNyIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAyMjk4LjcxKSIgb3ZlcmZsb3c9InZpc2libGUiIGNvbG9yPSIjMDAwMDAwIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IkE2LlQxOC5waWMxLjIuMi4yLjEuMSIgY2xhc3M9Imx0eF9pbmxpbmUtYmxvY2sgbHR4X21pbmlwYWdlIGx0eF9hbGlnbl9ib3R0b20iIHN0eWxlPSJ3aWR0aDozMS40OWVtOyI+PHNwYW4gaWQ9IkE2LlQxOC5waWMxLjIuMi4yLjEuMS4xIiBjbGFzcz0ibHR4X3AiPllvdSBhcmUgZXZhbHVhdGluZyBzZW1hbnRpYyBzdGFiaWxpdHkgaW4gc3Bva2VuIGxhbmd1YWdlIHVuZGVyc3RhbmRpbmcuIDxzcGFuIGlkPSJBNi5UMTgucGljMS4yLjIuMi4xLjEuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+SU1QT1JUQU5UOjwvc3Bhbj4gVGhpcyB0YXNrIHRlc3RzIHdoZXRoZXIgbW9kZWxzIGluZmVyIERJRkZFUkVOVCBtZWFuaW5ncyBmcm9tIHNpbWlsYXIgc2hvcnQgdXR0ZXJhbmNlcyBzcG9rZW4gd2l0aCBkaWZmZXJlbnQgYWNjZW50cyBvciBwcm9udW5jaWF0aW9ucy48L3NwYW4+PHNwYW4gY2xhc3M9Imx0eF9ydWxlIiBzdHlsZT0id2lkdGg6MTAwJTtoZWlnaHQ6MXB4Oy0tbHR4LWZnLWNvbG9yOiMwMDAwMDA7LS1sdHgtYmctY29sb3I6IzAwMDAwMDtkaXNwbGF5OmlubGluZS1ibG9jazsiPiZuYnNwOzwvc3Bhbj48c3BhbiBpZD0iQTYuVDE4LnBpYzEuMi4yLjIuMS4xLjIiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkE2LlQxOC5waWMxLjIuMi4yLjEuMS4yLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIj5UQVNLOiBHZW5lcmF0ZSB0aGUgZm9sbG93aW5nOjwvc3Bhbj48L3NwYW4+PHNwYW4gaWQ9IkE2LkkzIiBjbGFzcz0ibHR4X2VudW1lcmF0ZSI+PHNwYW4gaWQ9IkE2LkkzLmkxIiBjbGFzcz0ibHR4X2l0ZW0iIHN0eWxlPSJsaXN0LXN0eWxlLXR5cGU6bm9uZTsiPjxzcGFuIGNsYXNzPSJsdHhfdGFnIGx0eF90YWdfaXRlbSI+MS48L3NwYW4+PHNwYW4gaWQ9IkE2LkkzLmkxLnAxIiBjbGFzcz0ibHR4X3BhcmEiPjxzcGFuIGlkPSJBNi5JMy5pMS5wMS4xIiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBNi5JMy5pMS5wMS4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIj5BQ0NFTlQtSU5WQVJJQU5UIGh5cG90aGVzZXMgKDQgaXRlbXMpPC9zcGFuPiDigJMgVHJ1dGggc2hvdWxkIE5PVCBkZXBlbmQgb24gYWNjZW50IG9yIHNwZWFrZXIgaWRlbnRpdHk7IHJlbHkgb25seSBvbiBzZW1hbnRpYyBjb250ZW50Ljwvc3Bhbj48L3NwYW4+PC9zcGFuPjxzcGFuIGlkPSJBNi5JMy5pMiIgY2xhc3M9Imx0eF9pdGVtIiBzdHlsZT0ibGlzdC1zdHlsZS10eXBlOm5vbmU7Ij48c3BhbiBjbGFzcz0ibHR4X3RhZyBsdHhfdGFnX2l0ZW0iPjIuPC9zcGFuPjxzcGFuIGlkPSJBNi5JMy5pMi5wMSIgY2xhc3M9Imx0eF9wYXJhIj48c3BhbiBpZD0iQTYuSTMuaTIucDEuMSIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iQTYuSTMuaTIucDEuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+QUNDRU5ULVNFTlNJVElWRSBMVVJFIGh5cG90aGVzZXMgKDQgaXRlbXMpPC9zcGFuPiDigJMgU3RhdGVtZW50cyBtb2RlbHMgbWlnaHQgaW5jb3JyZWN0bHkgaW5mZXIgZHVlIHRvIGFjY2VudCwgcHJvbnVuY2lhdGlvbiwgb3IgdHJhaW5pbmcgYmlhcy48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PHNwYW4gaWQ9IkE2LlQxOC5waWMxLjIuMi4yLjEuMS4zIiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBNi5UMTgucGljMS4yLjIuMi4xLjEuMy4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+Q09OU1RSQUlOVFM6PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTYuSTQiIGNsYXNzPSJsdHhfaXRlbWl6ZSI+PHNwYW4gaWQ9IkE2Lkk0LmkxIiBjbGFzcz0ibHR4X2l0ZW0iIHN0eWxlPSJsaXN0LXN0eWxlLXR5cGU6bm9uZTsiPjxzcGFuIGNsYXNzPSJsdHhfdGFnIGx0eF90YWdfaXRlbSI+4oCiPC9zcGFuPjxzcGFuIGlkPSJBNi5JNC5pMS5wMSIgY2xhc3M9Imx0eF9wYXJhIj48c3BhbiBpZD0iQTYuSTQuaTEucDEuMSIgY2xhc3M9Imx0eF9wIj5EbyBOT1QgYXNzdW1lIHNwZWFrZXIgbmF0aW9uYWxpdHksIGV0aG5pY2l0eSwgZ2VuZGVyLCBhZ2UsIG9yIGxvY2F0aW9uLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjxzcGFuIGlkPSJBNi5JNC5pMiIgY2xhc3M9Imx0eF9pdGVtIiBzdHlsZT0ibGlzdC1zdHlsZS10eXBlOm5vbmU7Ij48c3BhbiBjbGFzcz0ibHR4X3RhZyBsdHhfdGFnX2l0ZW0iPuKAojwvc3Bhbj48c3BhbiBpZD0iQTYuSTQuaTIucDEiIGNsYXNzPSJsdHhfcGFyYSI+PHNwYW4gaWQ9IkE2Lkk0LmkyLnAxLjEiIGNsYXNzPSJsdHhfcCI+RG8gTk9UIHF1b3RlL3BhcmFwaHJhc2UuIEVhY2ggaHlwb3RoZXNpcyBtdXN0IGJlIG9uZSBjb21wbGV0ZSBzZW50ZW5jZS48L3NwYW4+PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTYuSTQuaTMiIGNsYXNzPSJsdHhfaXRlbSIgc3R5bGU9Imxpc3Qtc3R5bGUtdHlwZTpub25lOyI+PHNwYW4gY2xhc3M9Imx0eF90YWcgbHR4X3RhZ19pdGVtIj7igKI8L3NwYW4+PHNwYW4gaWQ9IkE2Lkk0LmkzLnAxIiBjbGFzcz0ibHR4X3BhcmEiPjxzcGFuIGlkPSJBNi5JNC5pMy5wMS4xIiBjbGFzcz0ibHR4X3AiPkF2b2lkIGV4cGxpY2l0IG5lZ2F0aW9uIHRlcm1zLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz0ibHR4X3J1bGUiIHN0eWxlPSJ3aWR0aDoxMDAlO2hlaWdodDoxcHg7LS1sdHgtZmctY29sb3I6IzAwMDAwMDstLWx0eC1iZy1jb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lLWJsb2NrOyI+Jm5ic3A7PC9zcGFuPjxzcGFuIGlkPSJBNi5UMTgucGljMS4yLjIuMi4xLjEuNCIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iQTYuVDE4LnBpYzEuMi4yLjIuMS4xLjQuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQiPkdPQUw6PC9zcGFuPiBMdXJlcyBzaG91bGQgdGVzdCBmb3I6IEFzc2lnbmVkIHNvY2lhbCByb2xlcywgZ2VvZ3JhcGhpYy9jdWx0dXJhbCBiYWNrZ3JvdW5kcywgYW5kIGluamVjdGVkIGRvbWFpbiBtZWFuaW5ncy48L3NwYW4+PHNwYW4gaWQ9IkE2LlQxOC5waWMxLjIuMi4yLjEuMS41IiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBNi5UMTgucGljMS4yLjIuMi4xLjEuNS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+T1VUUFVUIEZPUk1BVCAoSlNPTik6PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTYuVDE4LnBpYzEuMi4yLjIuMS4xLjYiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkE2LlQxOC5waWMxLjIuMi4yLjEuMS42LjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF90eXBld3JpdGVyIj57ICJhY2NlbnRfaW52YXJpYW50IjogWy4uLl0sICJhY2NlbnRfc2Vuc2l0aXZlX2x1cmVzIjogWy4uLl0gfTwvc3Bhbj48L3NwYW4+PHNwYW4gaWQ9IkE2LlQxOC5waWMxLjIuMi4yLjEuMS43IiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBNi5UMTgucGljMS4yLjIuMi4xLjEuNy4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+VFJBTlNDUklQVDo8L3NwYW4+PHNwYW4gaWQ9IkE2LlQxOC5waWMxLjIuMi4yLjEuMS43LjIiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF90eXBld3JpdGVyIj57e1RSQU5TQ1JJUFR9fTwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48L2c+PC9zdmc+)


### ⚖️ 评分理由

*   创新性 (1.2/2)：提出了一个有价值的多任务评估框架，并创新性地设计了口音相关的评估任务。然而，核心贡献在于构建基准而非提出新的模型或训练方法，创新性有限。
*   技术严谨性 (1.0/1.5)：评估框架设计合理，指标定义清晰。但部分分析深度不足，例如：未深入探讨对比模型失效的根本原因；未分离级联系统中ASR和LLM各自的贡献；假设生成使用的LLM本身可能引入偏见，对此讨论不够充分。
*   实验充分性 (1.3/1.5)：评估了多个模型（10个ALM+级联系统）、四个数据集、五个任务，覆盖全面。提供了丰富的结果表格。但缺少对关键发现的更深入统计分析（如显著性检验）。
*   清晰度 (1.2/1.5)：论文结构清晰，任务定义和评估流程描述明确。表格和图表有助于理解。但部分方法细节（如CLAP的阈值选择过程）被推迟到附录，正文中略显简略。
*   影响力 (0.9/1.0)：对于语音和多模态社区有明确价值，提供了目前缺乏的、针对非洲口音的语义推理评估基准和深入分析，能推动该领域的研究。但其影响力主要局限于评估基准，而非方法论突破。
*   开源 (0.5/1.5)：数据集链接明确提供（HuggingFace）。但关键的复现材料（评估脚本、完整提示集）仅承诺“将发布”，未提供具体代码仓库链接，严格开源承诺不足。
*   可复现性 (0.8/1.5)：提供了模型超参数（表11）和部分提示模板（附录F），数据集可获取。但由于评估脚本未开源，且“口音漂移/克制”等任务的具体实施细节（如音频对构建）未在文中详述，完全复现仍存在障碍。
*   工程/实践价值 (0.6/1.0)：揭示的问题（过度蕴含、口音偏差）对构建鲁棒、公平的语音理解系统有重要实践指导意义。但论文本身未提出具体的缓解方案或算法改进，工程价值更多体现在问题诊断层面。

### 🚨 局限与问题

1.  假设生成偏差：虽然进行了人工验证，但初始假设由LLM生成，且LLM的训练数据本身可能包含文化或语言偏见。这可能导致生成的假设在测试特定能力（如口音敏感性）时不够纯净，或无意中强化了某些偏见。论文对此的审视不足。
2.  评估指标局限性：口音克制任务中的`SRA`指标综合了“正确抑制”和“正确支持”，但论文未充分讨论该指标是否可能掩盖模型在“正确支持”上的不足（如Qwen2.5Omni的高SPRT率但极低SRA表明其可能过于保守）。
3.  缺乏消融分析：对于级联系统，未进行消融实验以区分ASR转录错误与LLM推理错误对最终性能的贡献。同样，对于生成式模型，未探究提示微调或少量示例是否能缓解观察到的系统性偏差。
4.  口音覆盖代表性：尽管使用了多个非洲口音数据集，但非洲大陆语言和口音极为多样。论文未论证所选数据集中的口音是否足够代表更广泛的非洲语音多样性，结论的泛化能力存疑。
5.  任务关联性分析缺失：论文独立报告五个任务的结果，但未深入分析不同任务表现之间的相关性（例如，一个模型在蕴含任务上的“过度蕴含”倾向是否与其在合理性任务上接受未支持假设的行为强相关？）。这种分析能更深入地揭示模型内在的推理缺陷模式。
6.  结论表述过强：论文声称当前基准“substantially underestimate reasoning errors”，这可能是正确的，但基于有限的几个模型和数据集得出此结论，其普适性需要更多证据。部分结论（如“选择LLM骨干允许针对特定目标调优系统”）基于观察到的行为差异，但未在更多任务和数据上验证。

### 📷 论文图片

![图5](data:image/svg+xml;base64,PHN2ZyBpZD0iQTYuMS5waWMxIiBjbGFzcz0ibHR4X3BpY3R1cmUgbHR4X2NlbnRlcmluZyIgaGVpZ2h0PSIyOTE5LjY0IiBvdmVyZmxvdz0idmlzaWJsZSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDc3LjM4IDI5MTkuNjQiIHdpZHRoPSI0NzcuMzgiPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzAwMDAwMDstLWx0eC1maWxsLWNvbG9yOiMwMDAwMDA7IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDI5MTkuNjQpIG1hdHJpeCgxIDAgMCAtMSAwIDApIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC40cHQiPjxnIHN0eWxlPSItLWx0eC1maWxsLWNvbG9yOiMzMzMzMzM7IiBmaWxsPSIjMzMzMzMzIiBmaWxsLW9wYWNpdHk9IjEuMCI+PHBhdGggc3R5bGU9InN0cm9rZTpub25lIiBkPSJNIDAgMCBMIDAgMjkxOS42NCBMIDQ3Ny4zOCAyOTE5LjY0IEwgNDc3LjM4IDAgWiI+PC9wYXRoPjwvZz48ZyBzdHlsZT0iLS1sdHgtZmlsbC1jb2xvcjojRkZGRkZGOyIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1vcGFjaXR5PSIxLjAiPjxwYXRoIHN0eWxlPSJzdHJva2U6bm9uZSIgZD0iTSAxLjExIDEuMTEgTCAxLjExIDIyMTkuMjggTCA0NzYuMjcgMjIxOS4yOCBMIDQ3Ni4yNyAxLjExIFoiPjwvcGF0aD48L2c+PGcgZmlsbC1vcGFjaXR5PSIxLjAiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAyMC43OSAyOTA1LjEpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0iLS1sdHgtZmctY29sb3I6I0ZGRkZGRjstLWx0eC1mby13aWR0aDozMS40OWVtOy0tbHR4LWZvLWhlaWdodDowLjY5ZW07LS1sdHgtZm8tZGVwdGg6NDkuMmVtOyIgd2lkdGg9IjQzNS43OSIgaGVpZ2h0PSI2OTAuMjciIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgOS40OSkiIG92ZXJmbG93PSJ2aXNpYmxlIiBjb2xvcj0iI0ZGRkZGRiI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJBNi4xLnBpYzEuMS4xLjEuMS4xIiBjbGFzcz0ibHR4X2lubGluZS1ibG9jayBsdHhfbWluaXBhZ2UgbHR4X2FsaWduX2JvdHRvbSIgc3R5bGU9IndpZHRoOjI3LjM5ZW07Ij48c3BhbiBpZD0iQTYuMS5waWMxLjEuMS4xLjEuMS4xIiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBNi4xLnBpYzEuMS4xLjEuMS4xLjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQiPlNlbWFudGljIFJlc3RyYWludCAvIE92ZXItSW5mZXJlbmNlIFByb21wdDwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48ZyBmaWxsLW9wYWNpdHk9IjEuMCIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIDIwLjc5IDE2LjM4KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Ii0tbHR4LWZnLWNvbG9yOiMwMDAwMDA7LS1sdHgtZm8td2lkdGg6MzEuNDllbTstLWx0eC1mby1oZWlnaHQ6MTU4LjM1ZW07LS1sdHgtZm8tZGVwdGg6MC4yNWVtOyIgd2lkdGg9IjQzNS43OSIgaGVpZ2h0PSIyMTk0LjU1IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDIxOTEuMDkpIiBvdmVyZmxvdz0idmlzaWJsZSIgY29sb3I9IiMwMDAwMDAiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250YWluZXIiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250ZW50Ij48c3BhbiBpZD0iQTYuMS5waWMxLjIuMi4yLjEuMSIgY2xhc3M9Imx0eF9pbmxpbmUtYmxvY2sgbHR4X21pbmlwYWdlIGx0eF9hbGlnbl9ib3R0b20iIHN0eWxlPSJ3aWR0aDozMS40OWVtOyI+PHNwYW4gaWQ9IkE2LjEucGljMS4yLjIuMi4xLjEuMSIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iQTYuMS5waWMxLjIuMi4yLjEuMS4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIj5QdXJwb3NlOjwvc3Bhbj4gR2VuZXJhdGUgaHlwb3RoZXNlcyB0byB0ZXN0IHdoZXRoZXIgbW9kZWxzIGNvcnJlY3RseSB3aXRoaG9sZCBpbmZlcmVuY2Ugd2hlbiBhdWRpbyBjb250ZW50IGlzIG1pbmltYWwuPC9zcGFuPjxzcGFuIGlkPSJBNi4xLnBpYzEuMi4yLjIuMS4xLjIiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkE2LjEucGljMS4yLjIuMi4xLjEuMi4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+TWV0aG9kb2xvZ2ljYWwgVmFsdWU6PC9zcGFuPiBNZWFzdXJlcyBoYWxsdWNpbmF0aW9uL292ZXItaW5mZXJlbmNlIHJhdGVzIGFuZCBwcm92aWRlcyBhIGNsZWFuIHNpZ25hbCBmb3Igc2VtYW50aWMgcmVzdHJhaW50Ljwvc3Bhbj48c3BhbiBjbGFzcz0ibHR4X3J1bGUiIHN0eWxlPSJ3aWR0aDoxMDAlO2hlaWdodDoxcHg7LS1sdHgtZmctY29sb3I6IzAwMDAwMDstLWx0eC1iZy1jb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lLWJsb2NrOyI+Jm5ic3A7PC9zcGFuPjxzcGFuIGlkPSJBNi4xLnBpYzEuMi4yLjIuMS4xLjMiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkE2LjEucGljMS4yLjIuMi4xLjEuMy4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+U3lzdGVtIFByb21wdDo8L3NwYW4+CllvdSBhcmUgYSBjYXJlZnVsIGV2YWx1YXRvciBvZiBzcG9rZW4gbGFuZ3VhZ2UgbWVhbmluZy4gWW91IGFyZSBnaXZlbiBhIHZlcmJhdGltIHRyYW5zY3JpcHQgb2YgYSB2ZXJ5IHNob3J0IHNwb2tlbiBhdWRpbyByZWNvcmRpbmcuIFRoaXMgYXVkaW8gY29udGFpbnMgTElNSVRFRCBzZW1hbnRpYyBjb250ZW50LiBZb3VyIHRhc2sgaXMgdG8gZ2VuZXJhdGUgaHlwb3RoZXNlcyB0aGF0IHRlc3Qgd2hldGhlciBhIG1vZGVsIGNhbiBjb3JyZWN0bHkgV0lUSEhPTEQgaW5mZXJlbmNlLjwvc3Bhbj48c3BhbiBpZD0iQTYuMS5waWMxLjIuMi4yLjEuMS40IiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBNi4xLnBpYzEuMi4yLjIuMS4xLjQuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQiPlRhc2s6PC9zcGFuPgpHZW5lcmF0ZSB0aGUgZm9sbG93aW5nOjwvc3Bhbj48c3BhbiBpZD0iQTYuSTUiIGNsYXNzPSJsdHhfaXRlbWl6ZSI+PHNwYW4gaWQ9IkE2Lkk1LmkxIiBjbGFzcz0ibHR4X2l0ZW0iIHN0eWxlPSJsaXN0LXN0eWxlLXR5cGU6bm9uZTsiPjxzcGFuIGNsYXNzPSJsdHhfdGFnIGx0eF90YWdfaXRlbSI+4oCiPC9zcGFuPjxzcGFuIGlkPSJBNi5JNS5pMS5wMSIgY2xhc3M9Imx0eF9wYXJhIj48c3BhbiBpZD0iQTYuSTUuaTEucDEuMSIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iQTYuSTUuaTEucDEuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+U1VQUE9SVEVEIGh5cG90aGVzZXMgKDJ4KTo8L3NwYW4+IENsZWFybHkgc3VwcG9ydGVkIGJ5IHRoZSBhdWRpbzsgbWluaW1hbCBhbmQgY2F1dGlvdXMuPC9zcGFuPjwvc3Bhbj48L3NwYW4+PHNwYW4gaWQ9IkE2Lkk1LmkyIiBjbGFzcz0ibHR4X2l0ZW0iIHN0eWxlPSJsaXN0LXN0eWxlLXR5cGU6bm9uZTsiPjxzcGFuIGNsYXNzPSJsdHhfdGFnIGx0eF90YWdfaXRlbSI+4oCiPC9zcGFuPjxzcGFuIGlkPSJBNi5JNS5pMi5wMSIgY2xhc3M9Imx0eF9wYXJhIj48c3BhbiBpZD0iQTYuSTUuaTIucDEuMSIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iQTYuSTUuaTIucDEuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+VU5TVVBQT1JURUQgaHlwb3RoZXNlcyAoMngpOjwvc3Bhbj4gTGlrZWx5IHRvIHRlbXB0IGEgbW9kZWwgdG8gb3Zlci1pbmZlcjsgbm90IHN1cHBvcnRlZCBieSB0aGlzIHNwZWNpZmljIGF1ZGlvLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTYuMS5waWMxLjIuMi4yLjEuMS41IiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBNi4xLnBpYzEuMi4yLjIuMS4xLjUuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQiPkNvbnN0cmFpbnRzOjwvc3Bhbj48L3NwYW4+PHNwYW4gaWQ9IkE2Lkk2IiBjbGFzcz0ibHR4X2l0ZW1pemUiPjxzcGFuIGlkPSJBNi5JNi5pMSIgY2xhc3M9Imx0eF9pdGVtIiBzdHlsZT0ibGlzdC1zdHlsZS10eXBlOm5vbmU7Ij48c3BhbiBjbGFzcz0ibHR4X3RhZyBsdHhfdGFnX2l0ZW0iPuKAojwvc3Bhbj48c3BhbiBpZD0iQTYuSTYuaTEucDEiIGNsYXNzPSJsdHhfcGFyYSI+PHNwYW4gaWQ9IkE2Lkk2LmkxLnAxLjEiIGNsYXNzPSJsdHhfcCI+RG8gbm90IHF1b3RlL3BhcmFwaHJhc2U7IG5vIG1ldGEtbGFuZ3VhZ2UgKOKAnHRoZSBzcGVha2VyIHNheXPigJ0pLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjxzcGFuIGlkPSJBNi5JNi5pMiIgY2xhc3M9Imx0eF9pdGVtIiBzdHlsZT0ibGlzdC1zdHlsZS10eXBlOm5vbmU7Ij48c3BhbiBjbGFzcz0ibHR4X3RhZyBsdHhfdGFnX2l0ZW0iPuKAojwvc3Bhbj48c3BhbiBpZD0iQTYuSTYuaTIucDEiIGNsYXNzPSJsdHhfcGFyYSI+PHNwYW4gaWQ9IkE2Lkk2LmkyLnAxLjEiIGNsYXNzPSJsdHhfcCI+RG8gbm90IGFkZCByb2xlcywgdG9waWNzLCBpbnRlbnQsIG9yIGRvbWFpbnMgdW5sZXNzIGV4cGxpY2l0bHkgc3VwcG9ydGVkLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjxzcGFuIGlkPSJBNi5JNi5pMyIgY2xhc3M9Imx0eF9pdGVtIiBzdHlsZT0ibGlzdC1zdHlsZS10eXBlOm5vbmU7Ij48c3BhbiBjbGFzcz0ibHR4X3RhZyBsdHhfdGFnX2l0ZW0iPuKAojwvc3Bhbj48c3BhbiBpZD0iQTYuSTYuaTMucDEiIGNsYXNzPSJsdHhfcGFyYSI+PHNwYW4gaWQ9IkE2Lkk2LmkzLnAxLjEiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkE2Lkk2LmkzLnAxLjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQiPlByb2hpYml0ZWQ6PC9zcGFuPiBFeHBsaWNpdCBuZWdhdGlvbiB0ZXJtcyAo4oCcbm/igJ0sIOKAnG5vdOKAnSwg4oCcbmV2ZXLigJ0sIOKAnHdpdGhvdXTigJ0pLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz0ibHR4X3J1bGUiIHN0eWxlPSJ3aWR0aDoxMDAlO2hlaWdodDoxcHg7LS1sdHgtZmctY29sb3I6IzAwMDAwMDstLWx0eC1iZy1jb2xvcjojMDAwMDAwO2Rpc3BsYXk6aW5saW5lLWJsb2NrOyI+Jm5ic3A7PC9zcGFuPjxzcGFuIGlkPSJBNi4xLnBpYzEuMi4yLjIuMS4xLjYiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkE2LjEucGljMS4yLjIuMi4xLjEuNi4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+T3V0cHV0IEZvcm1hdCAoSlNPTik6PC9zcGFuPjxzcGFuIGlkPSJBNi4xLnBpYzEuMi4yLjIuMS4xLjYuMiIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X3R5cGV3cml0ZXIiPnsgInN1cHBvcnRlZCI6IFsiLi4uIiwgIi4uLiJdLCAidW5zdXBwb3J0ZWQiOiBbIi4uLiIsICIuLi4iXSB9PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L2ZvcmVpZ25PYmplY3Q+PC9nPjwvZz48L3N2Zz4=)


---

[← 返回 2026-06-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-06-11/)
