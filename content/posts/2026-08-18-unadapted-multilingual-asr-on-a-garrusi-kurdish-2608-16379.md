---
title: "Unadapted Multilingual ASR on a Garrusi Kurdish Evaluation Set: A Common-Reference Staged Normalization Analysis"
date: 2026-08-18
draft: false
tags: [语音识别, 迁移学习, 多语言, 低资源, 零样本]
categories: [论文速递]
description: "语音识别 | 5.6/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.16379"
---

# 📄 Unadapted Multilingual ASR on a Garrusi Kurdish Evaluation Set: A Common-Reference Staged Normalization Analysis

标签：#语音识别 #迁移学习 #多语言 #低资源 #零样本

**5.6/10** | 创新 1/2 | 严谨 1/1.5 | 实验 0.7/1.5 | 清晰 0.8/1 | 影响 0.5/1.5 | 开源 0.5/1.5 | 复现 0.3/0.5 | 工程 0.8/1.5

📝 **5.6/10** | 前50% | 文档类型：方法研究 | 评分置信度：高 | #语音识别 | #迁移学习 | #多语言 #低资源 | [arxiv](https://arxiv.org/abs/2608.16379)


### 👥 作者与机构

- 第一作者：Hiwa Asadpour（Saarland University and Goethe University Frankfurt）
- 通讯作者：未明确标注；文中提供作者邮箱 asadpour@lingua.uni-frankfurt.de
- 作者列表：Hiwa Asadpour（Saarland University and Goethe University Frankfurt）

### 💡 毒舌点评

这篇论文抓住了一个真实且容易被忽视的测量问题：跨书写系统 ASR 评测中，同时归一化参考和假设会污染分母，而固定参考的 staged normalization 确实让各步转换贡献变得可见。但它仍是一次只有 5 个说话人、接近 98% WER 的试点，且 Southern Kurdish 系统的对比违反了它自己强调的 fixed-reference 原则；贡献更像一篇审慎的评测方法备注，而非可推广的 ASR 成果。

### 📌 核心摘要

该论文解决的是跨书写系统 Kurdish ASR 评测中的测量混叠问题：模型输出阿拉伯文、参考文本为拉丁文，直接比较会把文字系统差异记作识别错误。作者提出 common-reference staged normalization 方法：折叠参考一次并固定为 9,763 个 token、53,017 个字符（含词间空格），仅变化假设侧的表示，依次为 RAW、TRANSLIT、FOLDED 三种条件。模型使用 MMS-1B-all 加 Central Kurdish 适配器，在 1,722 段、117.9 分钟、5 位 Garrusi 说话人的田野问卷语音上零样本评测。主要结果为 RAW WER 111.70%/CER 100.92%，TRANSLIT 102.36%/57.89%，FOLDED 97.85%/51.20%；RAW 到 FOLDED 使测得 WER 下降 13.85 个百分点、CER 下降 49.72 个百分点，其中 folding 贡献 4.51/6.69。即使折叠后仍有 85.47% 参考 token 未对齐，替换错误占主导，且缺少“正确假设”通过的 pipeline ceiling control。Southern Kurdish 微调系统在同一设计下表现更差，但受到分割集不一致和转写表外大量字符影响。实际意义在于提出一种可审计、可复用的跨文字 ASR 评测协议；主要局限是数据规模小、pipeline 存在未修正转写缺陷，以及没有新模型或完整公开基准。

### 🔗 开源详情

- 代码：本文的 scoring scripts 作者称将随论文发布，但未在论文中给出具体代码仓库 URL；第三方 Southern Kurdish ASR 的推理代码随 HuggingFace 模型仓库发布：https://huggingface.co/aranemini/southern-kurdish-asr （论文脚注 3 指向该仓库，含 inference script）。
- 模型权重：本文使用两个现成模型：MMS-1B-all + Central Kurdish (ckb) adapter（论文中未给出下载链接）；Mohammadamini & Tahon (2026) 的 Southern Kurdish MP32Vec2-BERT CTC 模型：https://huggingface.co/aranemini/southern-kurdish-asr （0.6-billion-parameter checkpoint，含 tokenizer、feature-extractor config）。
- 数据集：本文 Garrusi evaluation set（1,722 segments）未给出直接公开音频链接；作者称将释放 fixed 9,763-token folded reference 与 segment-level results，但受源语料数据共享限制；参考文件 SHA256：340d66a0563363e0c48bb68ae158f7189f6eb730b57e016fa2efa33f772d0d3a。第三方 Southern Kurdish 语料：https://huggingface.co/datasets/aranemini/southern-kurdish-asr （11 个 Parquet shards，共 4.41 GB）；其 benchmark 的 sdh subset：https://huggingface.co/datasets/aranemini/kurdish-multidialect-asr-benchmark 。
- Demo：论文中未提及。
- 复现材料：本文未进行训练，因此无训练配置或新检查点；两个模型均“as released”使用，未在 Garrusi 数据上适配。评估设计中的归一化条件包括 RAW、TRANSLIT、FOLDED。固定参考哈希和分段级 WER/CER 结果作者称将随论文发布，但未提供 URL。第三方模型推理材料见：https://huggingface.co/aranemini/southern-kurdish-asr 。
- 论文中引用的开源项目：
  - KLPT（Kurdish Language Processing Toolkit）：论文提供 DOI：https://doi.org/10.18653/v1/2020.nlposs-1.11 ；未给出代码仓库 URL。
  - MMS（Massively Multilingual Speech，Pratap et al. 2024）：论文未给出项目主页或模型链接。
  - Southern Kurdish speech recognition resources（Mohammadamini & Tahon 2026）：模型 https://huggingface.co/aranemini/southern-kurdish-asr ；语料 https://huggingface.co/datasets/aranemini/southern-kurdish-asr ；benchmark sdh subset https://huggingface.co/datasets/aranemini/kurdish-multidialect-asr-benchmark ；论文 DOI：https://doi.org/10.63317/2rkqhw7hmo2d 。
  - CommonVoice、FLEURS、VoxPopuli、MLS、MMS-lab：论文提及作为 MMS 训练数据来源，但未给出具体链接。

### 🏗️ 方法概述和架构

本论文不是新的神经网络模型，而是一个面向跨书写系统 ASR 评测的多阶段评分方法论与实验框架。整体流程是：输入 Garrusi Kurdish MP3 田野录音和拉丁文时间对齐参考文本；先按规则筛选和去重语音段；再用两个现成 ASR 模型分别解码；对假设文本依次做 transliteration 和 folding；最后用固定参考与三种假设表示计算 WER/CER，并报告替换、删除、插入、命中数。

主要组件包括：

1. 数据准备组件：从 Phase 1 Garrusi 语料中提取 1,765 段，排除短于 0.3 秒的 43 段，再删除重跑产生的 247 个重复行，最终得到 1,722 段、9,763 参考 token、53,017 参考字符（含词间空格）、7,073.0 秒。每段按说话人和 segment identifier 去重。参考文本采用带音位变音符号的拉丁田野正字法，后经 folding 固定。没有 train/dev/test split，因为未训练或微调；整个集合均为评估集。

2. MMS 识别组件：使用 facebook/mms-1b-all 及 Central Kurdish adapter，目标语言设为 ckb。音频加载为 16 kHz、单声道，并按参考对齐裁剪。解码为 greedy CTC，逐帧 argmax，无 beam search，无外部语言模型。作者明确说明这不与 MMS 原始基准结果可比。

3. Southern Kurdish 识别组件：使用 aranemini/southern-kurdish-asr，即 MP32Vec2-BERT CTC 模型，按发布状态运行，不应用其推理脚本中的归一化函数。该模型同样输出阿拉伯文，走相同的 transliteration 和 folding 路径。推理失败 19 段，其原因未说明。

4. Transliteration 组件：用 KLPT 0.1.7，实例化为 Transliterate("Sorani", "Arabic", target_script="Latin")，逐段将阿拉伯文假设转成拉丁文。其作用仅是缩小文字系统差异，不保证与参考拉丁正字法一致。输出中仍有未转换字符。

5. Folding 组件：先做 NFC 归一化和小写化，然后按明确映射表把 â→a、ê→e、î→i、ô→o、û→u、ü→u、á→a、é→e、è→e、ļ→l、ř→r、ȓ→r、ḧ→h、ǧ→h，删除咽音/喉音符号，ç→c、ş→s、š→s、ž→j；任何表外且非小写 a–z 和空格的字符合并成空格，随后压缩连续空格。参考文本折叠一次后固定，后续全部分数都基于这同一个 9,763 token、53,017 字符的参考。作者还公开了该参考文件的 SHA256 哈希，用于识别固定参考版本。

6. Common-reference 评测设计：三种条件只改变假设表示。RAW 为未修改的阿拉伯文假设；TRANSLIT 为阿拉伯文转拉丁文后的假设；FOLDED 为转写后再折叠的假设。评分使用 jiwer 3.0.3，WER 为词级编辑距离除以参考词 token 数，CER 为字符级编辑距离除以含词间空格的参考字符数。采用语料级 pooled 编辑数总和除以参考总量，不按段平均。由于参考固定，所有条件满足 S + D + H = 9,763。

关键设计动机是：传统“参考与假设同时归一化”会让参考 tokenization 随条件变化，导致报告的 WER/CER 提升混合了真实一致性提升与分母改变。固定参考后，条件间差异只能来自假设侧变换，从而可测量 transliteration 和 folding 各自的测量效应。

流水线的一个显著未闭合环节是没有运行 ceiling control：未将一段正确的阿拉伯文参考通过同一 transliteration + folding 路径评分，因此无法估计 pipeline 本身对已正确假设造成的误差上限。此外，转写表外字符会分裂 token，作者保留这些未修复缺陷并在限制中量化。

### 💡 核心创新点

1. **common-reference staged normalization**：与传统同时归一化参考和假设不同，该方法先把折叠后的参考固定为 9,763 token，再分别变化假设的表征，使条件间差异仅来自假设侧转换。它避免了解释 WER 改善时混入参考 tokenization 变化，能直接测量 RAW→TRANSLIT→FOLDED 的测量偏移。

2. **以分解后的编辑计数作为主报告对象**：论文不只给 WER/CER，还报告 S、D、I、H 及 S+D+H=N 的恒等关系。这让读者可以验证参考长度是否恒定，并判断高分 WER 来自零命中、插入过多还是替换主导。

3. **首次 Garrusi Kurdish ASR 零样本测量及与 Southern Kurdish 系统的对比尝试**：使用 MMS-1B-all Central Kurdish adapter 和已发布的 Southern Kurdish 微调 checkpoint，在相同音频上比较。虽然对比存在明显设计缺陷，但提供了 Garrusi 场景下两个系统失败模式不同的初步观察。

4. **公开测量 pipeline 缺陷并量化其规模**：论文明确报告 KLPT 转写不完整，MMS 输出中 613 个字符落在 folding 表外，Southern Kurdish 输出中则有 12,330 个；这些字符会被折叠为空格并分裂 token。这一做法把 scoring pipeline artifact 与识别错误区分开，并要求未来工作运行 ceiling control。

### 📊 实验结果

主要结果来自固定参考下的三种假设条件。表中保留主方法条件与关键编辑计数。

| 条件 | 参考 token | WER | CER | S | D | I | H |
|---|---|---|---|---|---|---|---|
| RAW | 9,763 | 111.70% | 100.92% | 8,054 | 1,709 | 1,142 | 0 |
| TRANSLIT | 9,763 | 102.36% | 57.89% | 7,065 | 1,749 | 1,179 | 949 |
| FOLDED | 9,763 | 97.85% | 51.20% | 6,487 | 1,857 | 1,209 | 1,419 |

转换效应：RAW→TRANSLIT 降低 WER 9.34 点、CER 43.03 点；TRANSLIT→FOLDED 降低 WER 4.51 点、CER 6.69 点；总体 RAW→FOLDED 降低 WER 13.85 点、CER 49.72 点。

说话人级 FOLDED 结果：CZ 1,261 token WER 101.11%/CER 53.92%；FI 2,030 token 99.66%/57.57%；MR 2,176 token 90.62%/43.74%；MY 1,948 token 96.51%/47.13%；SK 2,348 token 102.34%/54.43%。段落长度分析中，每段 WER 与参考 token 数呈负相关，Spearman rho = \(-0.390\)，\(p = 1.74 \times 10^{-63}\)；与段时长关系弱且符号不一致。

Southern Kurdish 系统结果：1,703 段、9,912 参考 token，WER 109.56%、CER 55.85%；S 6,539、D 709、I 3,612、H 2,664。该系统在所有 5 位说话人上均差于 MMS FOLDED。其产生 12,815 个词 token，为参考长度的 129.3%，插入占编辑数 33.3%；而 MMS FOLDED 假设为参考的 93.4%，替换占 67.9%。

### 🔬 细节详述

- 训练数据：论文作者未训练模型，未提供 MMS-1B-all Central Kurdish adapter 的具体训练数据审计。MMS 基础模型基于 MMS-lab、FLEURS、CommonVoice、VoxPopuli、MLS 等，但 Central Kurdish 具体部分未说明。Southern Kurdish 模型由 Mohammadamini & Tahon 2026 训练，本文未复述其完整数据构成。
- 损失函数：本文无训练，因此未说明损失函数。MMS-1B-all 和 Southern Kurdish 模型的内部训练损失未提供。
- 训练策略：未训练；学习率、warmup、batch size、优化器、训练轮数均未说明。对 MMS 模型只报告解码方式为 greedy CTC，无外部语言模型。
- 关键超参数：MMS 使用 ckb adapter，音频 16 kHz、单声道，按参考时间对齐裁剪。Southern Kurdish 模型使用发布 checkpoint，未提供额外推理超参数。Transliteration 使用 KLPT 0.1.7 默认参数；folding 使用 NFC、lowercase、给定映射表、未被映射字符转空格并合并空格。
- 训练硬件：未说明训练硬件。推理硬件未说明。
- 推理细节：greedy CTC decoding，frame-wise argmax，无 beam search、无语言模型。Southern Kurdish 推理失败 19 段，未说明失败原因。
- 正则化或稳定训练技巧：未说明；论文没有新增训练，因此无可报告内容。
- 数据预处理与数据增强：无数据增强。只做音频重采样、裁剪；文本 NFC 归一化、小写和字符折叠。
- 数据处理版本与软件：Python 3.11.9、transformers 4.35.0、torch 2.7.0+cu118、librosa 0.11.0、KLPT 0.1.7、jiwer 3.0.3、NumPy 2.2.6、SciPy 1.15.1。
- 开源模型依赖：facebook/mms-1b-all revision 3d33597edbdaaba14a8e858e2c8caa76e3cec0cd；aranemini/southern-kurdish-asr revision 6debc819b2b3d482d23f089a6aa38f84f5f3b42d。

### ⚖️ 评分理由

*   创新性 (1.0/2)：[A_METHOD] [SCORING_SOURCE_4/30] 论文提出 fixed-reference staged normalization，把参考折叠一次后固定，仅变化假设表示，从而将 RAW→TRANSLIT→FOLDED 的 WER/CER 变化分解为可检验的条件差异；这是跨书写系统评测方法的实质改进，虽非新模型，但对方法研究足够。

*   技术严谨性 (1.0/1.5)：[A_METHOD] [SCORING_SOURCE_11/30] 固定参考下 S+D+H=9,763 的恒等关系和固定参考哈希使条件变化可审计，评分定义与编辑计数自洽；但折叠对表外字符一律转空格会在评分中制造 token 分裂，且缺少正确假设通过的 ceiling control，使流水线自身误差上限没有被测量。

*   实验充分性 (0.7/1.5)：[A_RESULTS] [A_LIMITS] 有 RAW/TRANSLIT/FOLDED 三条件消融、S/D/I/H 编辑计数、说话人级结果和段长相关性检验，足以支撑归一化步骤的测量效应；但仅在单个 Garrusi 评估集和单一主要模型配置上验证，Southern Kurdish 对比受参考 token 数不一致与分割缺失影响只能作方向性证据。

*   清晰度 (0.8/1)：[A_SUMMARY] [A_METHOD] 三条件表、转换效应表和方法动机清晰，结论区分识别率基线、测量误差与未闭环环节；Southern Kurdish 对比与固定参考协议的条件差异被多次标注，读者可辨识但需自行限定试点结论。

*   影响力 (0.5/1.5)：[A_SUMMARY] [SCORING_SOURCE_16/30] 该工作揭示同时归一化会混淆分母变化与一致性提升，并提供固定参考分阶段测量方案，对 Kurdish 等跨文字低资源语音评测有方法借鉴意义；但目前停留在单语种试点，未形成可复用基准或工具。

*   开源 (0.5/1.5)：[A_OPEN] 核心 scoring scripts、固定参考和分段级结果均声明将随论文发布但未提供实际 URL，命中承诺尚未兑现的 0.5 锚点；第三方模型和数据链接可访问但不替代本文核心评测产物。

*   可复现性 (0.3/0.5)：[A_METHOD] [SCORING_SOURCE_27/30] 论文披露了模型 revision、软件版本、16 kHz 单声道、greedy CTC、folding 映射表和固定参考哈希等关键评测配置；但推理硬件和完整运行日志未说明，主结果复现仍有少量缺环。

*   工程/实践价值 (0.8/1.5)：[A_METHOD] [A_RESULTS] 提供固定参考、编辑计数恒等检查和 SHA256 哈希，可直接嵌入现有 WER/CER 审计流程，区分文本归一化效应和识别误差；不过没有系统部署、吞吐或规模化验证。

### 🚨 局限与问题

- 只有 5 位说话人，且是非随机、非设计的处理选择；未保留完整运行日志，无法解释停机点。后续对全部 30 位说话人的较大规模运行得到 102.15% WER / 57.94% CER，但因排除空假设处理不同，不可直接与主结果比较。
- 数据仅为 Phase 1 田野问卷语音，不含自由对话或自然语音。
- 无 train/dev/test 划分；结果不是公开共享基准。
- KLPT 转写不完整：502 个 U+FFFD 替换字符、74 个未转换阿拉伯字符、36 个转写器输出的拉丁变音符号未能映射。
- Folding 表在早期版本遗漏 ü，导致参考从 9,763 增为 9,933；论文采用修正后映射，但损失性折叠仍存在。
- 缺少 ceiling control：未让正确阿拉伯文假设通过同一转写与折叠路径评分，因此无法分离 pipeline 误差和识别误差。
- Southern Kurdish 系统仅在 1,703/1,722 段上评分，且使用 9,912 token 的预修正参考，不满足与固定 9,763 reference 严格一致的条件。
- 12,330 个 Southern Kurdish 输出字符落入折叠表外；比较结果只表明方向，不代表确切的性能差距。
- 无法审计 MMS-1B-all 预训练语料中与 Garrusi 相关的内容，"zero-shot"只描述作者的实验流程。
- 影响变量如风格、录音通道、方言 mismatch 未被分离。

### 审稿人发现的潜在问题
- 第二个系统的比较明显违反论文自己提出的 fixed-reference 设计，却仍在结果中展示；作者虽多次说明，但最好应在最终版本前重跑，而不是发布不可比较的表格。
- 缺乏正确假设通过的 control 是最大的评测漏洞。没有它，所有“剩余错误”都无法解释，尤其 folding 表外字符会直接制造 token 分裂，可能导致 WER 被高估。
- 没有给出置信区间或显著性检验；说话人差异不应被解释，但论文还是报告了排名，且 Southern Kurdish 系统“所有说话人都更差”也没有统计验证。
- 文本转换链路缺少完备性检查：折叠表对未列出的拉丁变音符号处理为空格。更好的做法是先修正映射或至少对表外字符做频率分析，而不是让它们在评分中产生 token 分裂。
- 实验仅用一个 Central Kurdish 配置，无 beam search/LM；虽然论文声明不是追求最佳性能，但多配制的 greedy/beam 差异没有提供，难以判断 97.85% WER 与配置是否存在较大偏差。
- 提出的 scoring protocol 有方法论价值，但当前形式更像 pilot 报告，缺乏标准化的多系统、多语言或跨数据集对比，尚未证明其能显著改进行业内评测可比性。
- 对 Mohammadamini & Tahon 未披露 normalization 细节的批评有道理，但本论文主张的影响较大；审稿人会希望看到更实际的协议或工具化实现，而不只是问题陈述。

---

[← 返回 2026-08-18 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-18/)
