---
title: "Beyond Naturalness: Probing Automated Text-To-Speech Evaluators on Linguistically Grounded Dimensions"
date: 2026-08-12
draft: false
tags: [语音质量评估, 语音大模型, 语音合成]
categories: [论文速递]
description: "语音质量评估 | 7.1/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.09930"
---

# 📄 Beyond Naturalness: Probing Automated Text-To-Speech Evaluators on Linguistically Grounded Dimensions

标签：#语音质量评估 #语音大模型 #语音合成

**7.1/10** | 创新 1.3/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 0.5/1.5 | 复现 0.5/0.5 | 工程 1/1.5

✅ **7.1/10** | 前50% | 文档类型：数据集与基准 | 评分置信度：高 | #语音质量评估 | #语音大模型 | #语音合成 | [arxiv](https://arxiv.org/abs/2608.09930)


### 👥 作者与机构

- 第一作者：Oluwanifemi Bamgbose（ServiceNow）
- 通讯作者：Oluwanifemi Bamgbose（ServiceNow）
- 作者列表：Oluwanifemi Bamgbose（ServiceNow）、Simon Rosen（未说明）、Jash Shah（未说明）、Lindsay Devon Brin（ServiceNow）、Hoang H Nguyen（ServiceNow）、Anke Koelzer（ServiceNow）、Rachel Hansen（ServiceNow）、Tara Bogavelli（ServiceNow）、Fanny Riols（ServiceNow）

### 💡 毒舌点评

把“自然度”拆成 10 个有语言学依据的维度并用专家逐样本标注，确实比“一个 MOS 分数打天下”更接近可诊断的 TTS 评估，这是本文最值得肯定的地方。但拆完之后每个维度只剩 46–128 个样本，语调（α=0.469）和表现力（α=0.460）的一致性低于 0.5，仍然被用来得出“模型在该维度上盲”的强结论；C2a 用一个整体分数分别去撞 10 个维度标签，不做多重检验校正，显著结果有多少是撞出来的无法判断。更尴尬的是，论文声称公开释放数据集和代码，正文里却连一个仓库链接都找不到；模型名也有前后不一致（Qwen3-Omni-30B-A3B vs Qwen3-Omni-30B-A3B-Instruct，Step-Audio-R2-Mini vs Step-Audio-2-mini）。审稿人看到这些不会轻易放过。

### 📌 核心摘要

该论文构建了首个维度级 TTS 自动评估器元评测基准，将“自然度”分解为词级（语音准确度、词汇重音）、韵律级（语调、韵律重音、韵律边界、语速）和副语言级（情感适当性、表现力、说话人一致性、人类合理性）共 10 个语言学可标注维度。数据构建使用 Harvard Sentences、EmergentTTS-Eval 和合成文本，通过 LLM 修改 IPA、LLM 修改纯文本、API 强制情感标签和 Praat 声学操作四种路径生成目标错误，再由 3 名专业语言学家对全部维度标注，最终得到 860 条平衡样本。论文评估了 MOS 预测器和 Audio-LLM 法官，在 4 种提示条件、有/无参考文本下系统报告维度级敏感性。主要发现是：MOS 预测器高度集中于信号级退化检测（Human Plausibility 8/8 配置显著、Speech Rate 6/8 配置显著），对词级和韵律边界维度完全不敏感；Audio-LLM 法官在欠指定自然度提示下呈稀疏且提示依赖的选择性敏感，Gemini 3.5 Flash（带文本）覆盖最广但在 10 维中显著 5 维，并非全部；schema 引导可部分恢复词级敏感性，但 C2b 逐维打分导致 Qwen3-Omni 和 Step-Audio-2-mini 大量输出坍缩。论文还报告约 32.3% 的注入错误未被多数标注者感知，说明“注入错误”不等于“可感知错误”。整体上这是迈向可归因、可解释 TTS 评估的第一步，但样本规模、英文单一语言、IPA 路径仅 Cartesia 一家 TTS 架构等问题限制了结论外推。

### 🔗 开源详情

论文摘要声明“Our dataset, annotation schema, and evaluation code are publicly released”，但正文及附录未提供具体的 GitHub 或数据仓库链接。机器摘要资源状态为 has_code=是, has_model=否, has_dataset=是。实际可用链接未披露。

### 🏗️ 方法概述和架构

本论文整体采用“基准建设 + 元评估协议”两阶段框架。第一阶段的目标是构建一个“维度级、带人类语言学标注”的 TTS 评估基准；第二阶段的目标是用该基准作为测试集，系统审计现有自动评估器到底能在多大程度上捕捉人类可感知的语言学维度。完整链路可概括为：文本来源 → 目标错误生成 → TTS 合成 → 人类语言学标注 → 多数投票与类平衡降采样 → 形成 860 条平衡评测集 → 输入多类自动评估器 → 输出维度级敏感性图谱。

下图展示了论文中数据生成和评估的整体流程。

![Figure 1: Dataset Construction Pipeline. Sentences from three sources (Harvard Sentences, EmergentTTS-Eval,](https://arxiv.org/html/2608.09930v1/e2e_diagram_v4.png)

下图详细描绘了从源语料库、错误插入、TTS合成、语言学家标注到评估阶段的完整模块，包括输入条件、指标和维度级相关性结果。



论文的核心出发点是不再把“自然度”当作一个整体分数，而是将其拆解为三个语言学层级、共 10 个感知维度。词级维度包括语音准确度（Phonetic Accuracy）和词汇重音（Lexical Stress）；韵律级维度包括语调（Intonation）、韵律重音（Prosodic Stress）、韵律边界位置（Prosodic Boundary Placement）和语速适当性（Speech Rate Appropriateness）；副语言级维度包括情感适当性（Emotional Appropriateness）、表现力（Expressiveness）、说话人身份一致性（Speaker Identity Consistency）和人类合理性（Human Plausibility）。

所有维度均采用二元标注：0 表示“存在错误”，1 表示“无错误/完美”。设计者最初尝试过三元严重程度标注，但标注者无法可靠地区分“非完美”的不同严重等级，因此最终坍缩为二元标签，以标注可靠性换取粒度。这种选择直接服务于基准的用途——它不是为了区分错误轻重，而是为了判断自动评估器能否区分“有错”和“无错”。


为了系统覆盖上述 10 个维度，论文从三个来源选取或生成句子。Harvard Sentences 提供 720 句覆盖英语音系库的句子，适合词级和部分韵律级维度。EmergentTTS-Eval 提供具有复杂句法结构和多样疑问句型的句子，适合韵律边界、语调和情感适当性等维度。对于前两个来源中缺乏合适句子的维度，论文额外合成文本，以定向构造需要的句法或情感语境。三类文本来源在后续错误生成路径中按目标维度被选择性地输入。


错误生成是整个基准建设中最关键的模块。论文设计了四条支路，每条支路针对特定维度注入目标错误。图 1 展示了这一逻辑链：左侧是三类文本来源，中间是按维度选择的错误生成路径，右侧汇聚到 TTS 合成模块。

第一条支路是 LLM 修改 IPA（LLM-altered IPA）。该支路面向语音准确度和词汇重音。具体做法是让一个 LLM（原文记为 GPT-5）生成一份修改后的 IPA 音标，将目标错误实例化到音标层面，例如音素替换将 seed /sid/ 改为 /sib/，重音换位将 harvest /ˈhɑr.vɪst/ 改为 /hɑr.ˈvɪst/。修改后的 IPA 被送入 Cartesia Sonic-3 进行 IPA 驱动合成。这条支路的优势在于直接在音段和音节层级操纵语音，能精确命中词级维度。

第二条支路是 LLM 修改纯文本（LLM-altered plain text），面向韵律重音和韵律边界位置。对于韵律重音，LLM 在句子的功能词周围加上引号，诱导 TTS 产生异常突显，例如 “Type out three lists ‘of’ orders”；对于韵律边界，LLM 在选定的句法成分之间插入逗号，促使 TTS 在错误位置形成韵律短语切分。该支路不直接修改音频，而是通过文本中的标点和引用符影响 TTS 的韵律解析。

第三条支路是 API 强制情感标签（API-enforced emotion），面向情感适当性。该支路使用 Cartesia 的情感标签 API，在文本与情感标签之间构造不匹配，例如中性文本配以强烈情感标签，从而生成情感语调与文本内容不符的样本。

第四条支路是声学操作（Acoustic manipulation），通过 Praat 工具直接修改波形或韵律参数，面向语调、语速、表现力、说话人身份一致性和人类合理性。具体操作包括 F0 曲线操纵、时长缩放、响度压缩、元音缩短、跨说话人淡变，以及插入音频失真和故障音。这些操作作用于 TTS 合成后的音频，能够产生人类难以自然发出的信号级缺陷。

所有路径最终都通过 Cartesia Sonic-3 生成音频，且每条路径既生成带目标错误的样本，也生成对应的干净样本（clean，Score 1），以确保人类标注和自动评估器有正负对照。所有音频统一为 44,100 Hz、16-bit PCM、单声道。


合成音频进入人工标注模块。三位标注者均为母语英语者且受过语言学训练。每个样本的所有 10 个维度都由三位标注者独立给出二元判断。这里有一个重要的设计选择：标注者并不只标注该样本被生成时试图引发的目标维度，而是对所有 10 个维度都进行标注。这意味着一个为触发“韵律重音错误”而生成的样本，也可能同时在“语调”或“表现力”维度被标为错误。这种“跨维度污染”信息被保留下来，用于计算感知溢出效应，也就是目标维度上的注入错误究竟会连带影响哪些其他维度的感知。

标注前的数据生成采用“过量生成”策略：由于并非所有自动注入的错误都能被人类可靠感知，论文生成了超出最终所需数量的样本，依靠后续人类标注来决定哪些错误真正“可感知”。这与后文约 32.3% 的注入错误未被多数标注者感知的发现形成闭环，说明“注入错误”不能等同于“可感知错误”。


三位标注者的原始标签先经过多数投票合成每个样本在每个维度上的“地面真值”。对于无法形成多数一致意见的样本，直接从数据集中剔除。随后，针对每个维度独立进行类平衡降采样：将正样本和负样本都降采样到 50/50 的比例，保证每个维度的评估不受类别不平衡影响。降采样时优先保留标注者共识度更高的样本。最终得到 860 条平衡样本，每个维度的样本量在 46 到 128 之间。表 2 还报告了每个维度在平衡集上的 Krippendorff’s α 系数及其 95% 自助法置信区间，用于说明不同维度的标注可靠性差异。


基准构建完成后，进入第二阶段元评估。论文评估两类自动评估器。第一类是 MOS 预测器，包括 UTMOSv2、DNSMOS-Pro、NISQA 和 Audiobox-Aesthetics。这些模型接收原始音频，输出连续标量或维度分数。论文采用 8 个 MOS 预测器配置，涵盖基础模型及其子配置和输出模式，例如 DNSMOS-Pro 包含 BVCC 与 VCC 两个训练语料变体。第二类是 Audio-LLM 法官，包括 Gemini 3.5 Flash、Gemini 3 Flash、Qwen3-Omni-30B-A3B 和 Step-Audio-2-mini。这些模型以音频文本联合输入方式工作，对每个样本输出二元标签。

由于 Audio-LLM 对提示词高度敏感，论文设计了 4 种系统化提示条件。条件 1 是欠指定的 MOS 风格提示，仅要求评估整体自然度并给出二元分数，不提供任何维度信息。条件 2a 是 schema 引导的整体打分，只要求标注词级、韵律级、副语言级三类问题并输出一个总分。条件 2b 是 schema 引导的逐维度打分，要求模型对 10 个维度各自独立评分，并以 JSON 格式输出每个维度的理由和 0/1 分数。条件 3 是隔离式逐维度提示，每次只让模型聚焦于一个特定维度，并严格忽略其他所有语音质量因素。另外，所有提示条件都分别以“有参考文本”和“无参考文本”两种方式运行，以检验模型是否依赖给定的原始文本。每个法官在每个条件下对每个样本查询 3 次；860 个样本 × 4 个条件 × 2 种文本设置，使得每个模型最多产生 20,640 次推理调用。

在统计对齐阶段，论文将每个自动评估器的输出与人类二元地面真值逐一配对。对于连续输出的 MOS 预测器，使用 Kendall’s τb 衡量排序相关性，使用 Mann-Whitney U 检验正负标签分数分布是否分离，并额外报告 AUROC。对于输出二元标签的 Audio-LLM，Kendall’s τb 与 Pearson’s φ 代数等价，因此可以在同一框架下与连续模型比较；此外还使用 McNemar 检验判断模型预测与人类标签之间的边际对称性。最终生成一张“维度 × 模型 × 提示条件”的维度级敏感性图谱，用于回答哪些自动评估器在哪些语言学维度上真正与人类感知一致。


图 1 完整呈现了数据构建流程的模块关系。左侧是三个文本来源节点，分别是 Harvard Sentences、EmergentTTS-Eval 和合成文本。中间是四条错误生成路径节点：LLM 修改 IPA、LLM 修改纯文本、API 强制情感标签、声学操作。每个路径根据目标维度从不同文本来源接收输入，输出带缺陷的文本或音频。所有路径的输出汇聚到右侧的 TTS 合成模块，由 Cartesia Sonic-3 统一生成音频。合成音频随后进入人工标注模块，由三位语言学家对所有 10 个维度逐一标注。标注结果流向多数投票与类平衡降采样模块，最终形成 860 条平衡评测集。整个图 1 的逻辑链是“文本源 → 错误生成 → TTS → 标注 → 数据集最终化”。评测阶段不是图 1 的一部分，但逻辑上紧接在数据集之后：评测集被分发给 MOS 预测器和 Audio-LLM 法官，自动评估器的输出再与人类标签进行统计对齐，形成维度级敏感性图谱。

### 💡 核心创新点

- 首次构建维度级 TTS 自动评估器元评测基准，将“自然度”解构为 10 个有语言学依据的可感知维度，涵盖词级、韵律级和副语言级。
- 提出配套的 10 维标注 schema，每个维度给出操作性失败条件，并用 3 名专业语言学家对全部样本进行逐维度二元标注，形成 860 条平衡真值数据集。
- 对 4 个 MOS 预测器（展开为 8 个配置）和 4 个 Audio-LLM 法官，在 4 种提示条件 × 有/无参考文本下进行系统性维度级审计，产出一张“维度 × 模型 × 条件”的敏感性图谱。
- 揭示了 MOS 预测器对信号级退化敏感、对词级与韵律边界盲；Audio-LLM 法官呈稀疏且提示依赖的选择性检测，schema 引导只能部分恢复词级敏感性。

### 📊 实验结果

实验覆盖 4 个 MOS 预测器（Audiobox-Aesthetics 的 4 个子分数、DNSMOS-Pro 的 2 个变体、NISQA、UTMOSv2，共 8 个配置）和 4 个 Audio-LLM 法官（Gemini 3 Flash、Gemini 3.5 Flash、Qwen3-Omni、Step-Audio-2-mini），在 4 种提示条件（C1、C2a、C2b、C3）和有/无参考文本设置下运行，每个模型最多产生 20,640 次推理调用。

主要结果显示：MOS 预测器在 Human Plausibility 上有 8/8 配置显著（AUC 0.72–0.92），在 Speech Rate 上有 6/8 配置显著（AUC 0.40–0.89），但 Phonetic Accuracy 和 Lexical Stress 全部接近随机（AUC 0.41–0.61），对 Prosodic Boundary 也基本不敏感。Audio-LLM 法官在 C1 欠指定自然度提示下，仅 Gemini 3.5 Flash（带文本）覆盖较广，在 10 维中显著 5 维；其余模型显著维度数更少且零散。C2a schema 引导整体打分可部分恢复 Phonetic Accuracy 和 Lexical Stress 敏感性（如 Gemini 3.5 Flash 带文本时 Phon. τ=0.486，Lex. τ=0.294），但 C2b 逐维打分导致 Qwen3-Omni 和 Step-Audio-2-mini 在多个维度上输出坍缩（预测单一值，τ 未定义，表中以“.”表示）。此外，注入错误中有 32.3% 未被多数标注者感知，其中 Emotional Appropriateness 漏报率 46.2%、Intonation 40.0%、Lexical Stress 38.4%，最低的 Prosodic Boundary Placement 也有 22.4%。

### 🔬 细节详述

人工标注采用二元量表（0=存在可感知错误，1=完美），因为预实验表明标注者无法稳定区分 1–3 的严重程度分级，二元化牺牲细粒度换取了可靠性。每位语言学家对所有样本的 10 个维度都进行标注，而不仅是目标维度，从而可量化跨维度感知溢出。最后经多数投票、剔除无法形成多数的样本，并在每个维度内做类平衡降采样（正负各 50%，优先保留共识更强的样本），得到 860 条最终样本。各维度样本数：Phonetic Accuracy 110、Lexical Stress 90、Intonation 80、Prosodic Stress 102、Prosodic Boundary 88、Speech Rate 128、Emotional Appropriateness 46、Expressiveness 94、Speaker Identity 66、Human Plausibility 56。Krippendorff’s α 范围 0.460–0.821，Lexical Stress 一致性最高，Expressiveness 和 Intonation 一致性最低。

错误生成方面，LLM-altered IPA 用于 Phonetic Accuracy 和 Lexical Stress，示例包括音素替换（seed /sid/→/sib/）和重音换位（harvest /ˈhɑr.vɪst/→/hɑr.ˈvɪst/）；LLM-altered plain text 用于 Prosodic Stress（给功能词加引号）和 Prosodic Boundary（插入逗号）；API-enforced emotion 通过 Cartesia 标签制造文本-情感错位；Acoustic manipulation 用于 Intonation、Speech Rate、Expressiveness、Speaker Identity 和 Human Plausibility，具体操作包括 F0 曲拱修改、时长缩放、响度压缩、跨说话人淡变和插入失真片段。默认 TTS 为 Cartesia Sonic-3，Intonation 维度另用 ElevenLabs，音频统一为 44.1 kHz / 16-bit / 单声道。

评测协议中，MOS 预测器的连续输出与二元标签用 Kendall’s \(\tau_b\)、AUROC 和 Mann-Whitney U 检验；Audio-LLM 的二元输出用 McNemar 检验，且 \(\tau_b\) 对二元变量等价于 Pearson \(\phi\)，从而可以在同一框架下比较两类模型。四个提示条件分别是：C1 无 schema 的自然度整体判断；C2a 提供完整 10 维 schema 但只输出整体二元分；C2b 提供 schema 并要求逐维输出分数；C3 每次只针对单一维度隔离判断。每个条件都有有/无参考文本两种变体，每个模型每个样本查询 3 次取多数结果。

### ⚖️ 评分理由

*   创新性 (1.3/2)：[A_SUMMARY][A_METHOD] 将TTS自然度拆解为10个有语言学依据的维度，构建首个带专家标注的维度级元评测基准，并以受控错误注入和系统性提示条件审计两类自动评估器，贡献了新评测协议与可诊断思路。

*   技术严谨性 (1.0/1.5)：[A_LIMITS] C2a使用单个整体分数分别与10个维度标签做显著性检验而未做多重检验校正，显著结果存在假阳性风险，削弱了协议结论的严谨性；但整体设计了四条错误注入路径和完整标注统计框架，具有一定严密度。

*   实验充分性 (1.0/1.5)：[A_RESULTS][A_LIMITS] 实验覆盖8个MOS配置、4个Audio-LLM、4种提示条件及有/无参考文本，覆盖面广；但每维度样本仅46–128，Intonation和Expressiveness标注者一致性低于0.5，且仅限英语和单一IPA合成架构，统计功效与泛化受限。

*   清晰度 (0.8/1)：[A_SUMMARY][A_LIMITS] 论文组织完整、图表和附录详实，但模型名称存在前后不一致（Qwen3-Omni-30B-A3B vs Qwen3-Omni-30B-A3B-Instruct，Step-Audio-R2-Mini vs Step-Audio-2-mini），影响读者对应，需要修正。

*   影响力 (1.0/1.5)：[A_SUMMARY] 该基准为TTS评估提供了从整体MOS转向维度级可解释诊断的方向，对语音合成与评估研究有参考价值；但作为新基准尚未被广泛采用，实际应用范围和影响力有待检验。

*   开源 (0.5/1.5)：[A_OPEN] 论文摘要声明公开数据集、标注schema和评估代码，但正文及附录未提供任何仓库链接，实际资源无法获取，按固定锚点只能对应“承诺开放但尚未发布”的0.5。

*   可复现性 (0.5/0.5)：[A_METHOD][SCORING_SOURCE_40/41][SCORING_SOURCE_41/41] 论文详细披露了数据构建、错误注入、标注协议和统计对齐流程，并在附录列出依赖包和模型服务硬件配置，复现所需核心配置基本齐全。

*   工程/实践价值 (1.0/1.5)：[A_METHOD] 数据构建pipeline包含文本源、错误生成、TTS合成、标注和平衡化模块，可直接扩展；评测协议系统化覆盖4种提示条件和有无参考文本，具有工程实施参考价值。

### 🚨 局限与问题

- 每个维度的有效样本量仅 46–128，特别是 Emotional Appropriateness 只有 46 条，统计功效受限。
- 标注者一致性在 Intonation（α=0.469）和 Expressiveness（α=0.460）低于 0.5，这些弱一致标签仍被用来判断模型“盲”，可能影响结论稳健性。
- C2a 使用单个整体分数分别与 10 个维度标签做显著性检验，未做多重检验校正，显著结果存在假阳性风险。
- 论文正文声明公开数据集、标注 schema 和评估代码，但未给出任何仓库链接，实际获取路径未披露；模型名称存在前后不一致（Qwen3-Omni-30B-A3B 与 Qwen3-Omni-30B-A3B-Instruct；Step-Audio-R2-Mini 与 Step-Audio-2-mini）。
- 数据仅覆盖英语；IPA 错误路径只使用了 Cartesia 一家 TTS 架构，结论外推到其他语言和 TTS 架构受限。
- 约 32.3% 的注入错误未被多数标注者感知，且不同维度漏报率差异大（Emotion 46.2% vs Phonetic 21.2%），说明错误注入的可控性有限，部分维度难度不平衡。

---

[← 返回 2026-08-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-12/)
