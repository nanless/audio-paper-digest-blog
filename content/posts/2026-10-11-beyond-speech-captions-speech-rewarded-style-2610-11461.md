---
title: "Beyond Speech Captions: Speech-Rewarded Style Planning for Conversational Text-to-Speech"
date: 2026-10-11
draft: false
tags: [韵律与风格控制, 强化学习, 语音, 大语言模型]
categories: [论文速递]
description: "针对对话语境下如何用自然语言指令控制合成语气的问题，论文提出冻结合成模型、用目标语音似然奖励训练规划器，在英语电影对话子集上提升了与目标语音的声学相似性和语境恰当性，但结论依赖同一合成后端且未做人工听音验证。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.11461"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "为对话配上合适语气：用合成反馈训练风格规划器"
paper_digest_original_title: "Beyond Speech Captions: Speech-Rewarded Style Planning for Conversational Text-to-Speech"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.11461v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.11461v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.11461v1.pdf"
paper_digest_primary_task: "韵律与风格控制"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.prosody-style-control","label":"韵律与风格控制"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对对话语境下如何用自然语言指令控制合成语气的问题，论文提出冻结合成模型、用目标语音似然奖励训练规划器，在英语电影对话子集上提升了与目标语音的声学相似性和语境恰当性，但结论依赖同一合成后端且未做人工听音验证。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shiao Zhu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lianbo Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sizhen Lyu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yuzhe Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sheng Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Takahiro Shinozaki"}]
paper_digest_abstract_sha256: "d200b04a9c72b8618bfce5b09ca61ea90d3eae5ed0bb321ded3cc5fd0dc1817a"
paper_digest_sidecars: {"citation.bib":{"sha256":"7a05ebab751e4b89ebac281d3719da243fcd28c7f1bf60af6c76cc06f2692b59","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-11461/citation.bib"},"citation.json":{"sha256":"8bcbd7a24cddbe8d14435b69ce517cc6b259e832f46c2fb7451f1a4b41b94adc","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-11461/citation.json"},"citation.ris":{"sha256":"8c71a4a651548472502c76564f6349a5cb1c078c10eb3a3ea28b2a80d415612f","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-11461/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"a0b463ab1ce8bcaa16d2d399eca75080e8d6adfa881a6fabf3d3b79682e3cb41","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-11461/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "cb57b154a1ee66d750eac1c9b73cdc103ff9370a1968eeb40973156ff203639b"
paper_digest_api_reader_plan_sha256: "2b5908aee5770746ee5767bb2e600a1f1992e730df2348cf112802d40df2cb1c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d012e12fcd5a4226702df7a3167ad406c228b9f367a405b47b700e78b3443dd9"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "5c628d7ccd74076e93e90eb4aa1cd7bd80cde657b45a313c44db10a852054efb"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "0dc79ec2d593cbc5a82c05959aa4cc079d2ed836a466340a7643e57ffd86c3fe"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "cf312747571d4605538bbbf6552d922dbbe1e8519a96f7e46fc198f75100469c"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 为对话配上合适语气：用合成反馈训练风格规划器

> 英文题目：*[Beyond Speech Captions: Speech-Rewarded Style Planning for Conversational Text-to-Speech](https://arxiv.org/abs/2610.11461v1)*

> 标签：#韵律与风格控制 | #强化学习 | #语音 | #大语言模型
>
> 评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Shiao Zhu：机构信息未在 arXiv HTML 中可靠披露
- Lianbo Liu：机构信息未在 arXiv HTML 中可靠披露
- Sizhen Lyu：机构信息未在 arXiv HTML 中可靠披露
- Yuzhe Wang：机构信息未在 arXiv HTML 中可靠披露
- Sheng Li：机构信息未在 arXiv HTML 中可靠披露
- Takahiro Shinozaki：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

对话式语音合成要从文本对话历史和当前回复文本推断合适的说话方式，同一句话可以安慰、犹豫或兴奋地说，仅靠文本难以确定。已有做法把目标语音压缩成自然语言风格描述再学习预测，但描述准确不等于对特定合成器控制有效。候选指令分析显示描述对齐与下游声学相似度仅弱相关，基于描述对齐选择指令几乎不优于随机选择。论文提出的语音奖励风格规划让文本风格规划器生成一句英文风格指令，再把指令、回复文本和同说话人提示音频送入冻结的合成器。用目标语音token在该条件下的教师强制似然作为奖励，以组相对策略优化更新规划器，无需目标风格描述监督。在ISCSLP 2026 CoT-TTS英文子集的两个测试划分上五个下游声学指标均居首，例如test_in上情感相似度.6417高于无指令合成的.6098且MCD-DTW 5.9569低于无指令合成的6.2426，也优于未微调大语言模型和能看到目标波形的描述基线。结论限于该语料和同一合成器后端，自动法官偏好仍明显低于真实录音，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 对话语音要解决什么输入输出问题

对话语音合成的输入是纯文本的对话历史 H 和当前要说的回复文本 y，输出是要播放的语音波形。难点在于同样的文字可以用安慰、犹豫或兴奋等不同方式说出，对话效果完全不同，而文字本身没有规定该用哪种说法。论文把必须保留的信息分成两类，一类是语言内容即 y 必须说对，另一类是说话方式要与上文情境衔接，同时还要保持说话人音色一致，为此额外输入同一说话人的提示音频 p。

自然语言风格描述在这里充当中间接口，规划器先写一句如平静地说这样的指令，再把指令连同 y 和 p 一起交给可按提示控制的合成器。初学者容易把写得准确的描述等同于好用的控制指令，但论文要验证的正是这两者并不相同，后续实验都围绕这一区分展开。

### 已有路线为什么用语音描述做监督

在可控语音合成路线里，常见做法是先训练语音描述器，把一段语音的韵律和情感写成文字，例如 StyleCap、SECap 和 AlignCap，这类工作把副语言和情感属性转成自然语言。另一条对话路线是把描述当作显式中间表示，例如 Chain-Talker 先预测上下文相关的共情描述，再生成语义语音编码和富有表现力的语音。沿着这个思路，一个很自然的选择是用语音导出的描述作为监督，训练独立的文本风格规划器，让它只看对话历史和回复文本就预测出风格指令。

这种做法输入输出形式统一、可解释可修改，但它把目标声学压缩成文本，文本没有写到的声学细节在监督中就不再出现。论文还指出相关工作已尝试用目标语音似然奖励和组相对策略优化做指令控制的语音合成，本文是在对话风格规划任务上把这一思想做完整验证。

### 描述得像不等于控制得好吗

论文先提出一个可检验的问题，在同一句话的多个候选指令之间，指令与目标语音的图文对齐分数越高，合成出的语音是否就越接近目标语音。如果成立，那么挑选对齐分数最高的指令就是最优策略，如果不成立，就需要直接来自合成器的反馈。作者在 5500 句的开发集上做候选内比较，每个话语用基础大模型按训练解码参数采样 8 个候选指令，并分别合成回复。对齐侧用 CLAPScore 衡量指令文本与目标语音的相似度，记为 T2S，所用编码器包括 ParaSpeechCLAP-Combined、ParaSpeechCLAP-Situational 和 CLSP。合成侧用合成语音与目标语音的余弦相似度记为 S2S，加上 emotion2vec 概率向量余弦算出的情感相似度，以及动态时间规整后的倒谱失真 MCD-DTW，倒谱失真越小表示越接近目标。

**风格规划器 × 语音描述：** 风格规划器指只看对话历史和回复文本、输出一句英语风格指令的文本模型，语音描述指听到目标语音后写出的内容概括；前者要在没有目标语音时为合成器选指令，后者是对已有语音的总结，两者目标不同，直接用后者监督前者会丢失合成器真正需要的控制信息。

### 语音奖励风格规划的整体流程是什么

语音奖励风格规划简称 SRSP，它只训练文本侧的风格规划器， downstream 的合成模型全程冻结。训练时给定对话历史、回复文本和目标语音 token 序列，规划器先采样一组候选指令，冻结的合成模型对每个指令计算目标语音序列的教师强制交叉熵，损失越小说明该指令让目标语音概率越高，据此算出奖励，再用组相对策略优化更新规划器。

推理时不再需要目标语音，规划器只看对话历史和回复文本生成一句英语风格指令，合成器以该指令、回复文本和说话人提示音频为条件自回归生成语音 token，再经波形解码器变成波形。下图展示了这条主路径和训练才有的奖励回路，虚线表示训练专用，雪花标记表示冻结部件。

读图说明：这张方法总览图把训练与推理画在同一张图上，适合对照输入输出和冻结位置，建议先走主路径再看奖励回路。

> **看图路径：** 1. 先从左侧对话历史和回复文本找到规划器的输入箭头；2. 再看中间一组风格指令如何同时进入合成语言模型；3. 最后看右上语音奖励虚线如何返回更新规划器

[![原论文 Figure 2：Overview of SRSP. Frozen-TTS target-speech likelihood rewards candidate instructions during…](https://arxiv.org/html/2610.11461v1/srsp-method.drawio.svg)](https://arxiv.org/html/2610.11461v1/srsp-method.drawio.svg)

*论文图 2。原论文 Figure 2:：“Overview of SRSP. Frozen-TTS target-speech likelihood rewards candidate instructions during training, while GRPO updates the planner.”。*

从图上可以看到，左侧两个输入分别是对历史和当前文本的抽象，中间规划器输出层叠的多条指令表示一组采样，右侧语音奖励框把目标 token 与模型输出的 token 概率用交叉熵连起来，虚线把奖励送回顶部的优化器。合成语言模型和波形解码器都带冻结标记，推理专用的说话人提示只在下方进入解码器，说明音色控制与风格指令分开进入不同模块。

### 目标语音似然如何给指令打分

打分组件的核心是固定合成器对同一段目标语音的打分变化。对于候选指令 zi，冻结合成器内的自回归语言模型计算目标语音 token 序列 s 的平均教师强制交叉熵，条件包括回复文本 y 和该指令，序列长度为 T。所有候选共享同一组 y 和 s，因此损失的相对高低只反映指令带来的概率变化，越能解释目标声音的指令损失越低。最终奖励是该损失取负再减去辅助惩罚，惩罚针对过短、空泛和重复的退化输出，避免模型用几个通用词刷高概率。

**教师强制似然 × 描述对齐分数：** 描述对齐分数指指令文本与目标语音在图文对齐编码器下的余弦相似度，教师强制似然指冻结合成模型在给定指令下对目标语音 token 序列赋予的概率；前者衡量文字描述得像不像，后者衡量该指令能否让当前合成器更可能生成目标声音，论文用后者替代前者做奖励。

符号说明：公式中 zi 是第 i 条候选指令，st 是目标语音第 t 个 token，phi 表示冻结合成模型的参数，T 为序列长度，p 为模型给出的条件概率。计算目标是衡量在当前指令下目标声音的可实现程度，原文明确用平均负对数似然实现。

\[\mathcal{L}_{\mathrm{TTS}}(z_{i})=-\frac{1}{T}\sum_{t=1}^{T}\log p_{\phi}(s_{t}\mid s_{\lt t},y,z_{i}).\]

得到奖励 Ri 后，同一训练样本的 G 条指令组成一组，在组内做标准化得到优势 Ai，组均值和组标准差分别记为均值与方差项，分母加小常数保证数值稳定。这一步把绝对分数转成相对优劣，避免不同话语难度差异主导更新。

\[A_{i}=\frac{R_{i}-\bar{R}}{\sigma_{R}+\epsilon},\]

### 组内相对优势怎样约束更新幅度

有了组内优势后，优化目标采用带裁剪和散度约束的形式。每个生成 token 的似然比衡量新策略相对采样策略的变化，乘以优势后取裁剪前后较小值，防止单步更新过大，同时减去与参考策略即初始冻结策略的散度惩罚，保持语言合理性。期望在每个 rollout 批次的有效生成 token 上平均。规划器被要求输出一句英语句子描述说话风格，训练时每例随机采样 0 到 3 条 CosyVoice 风格样例做上下文演示，同一奖励组内共享相同样例，推理时每句采样两条样例。这种设计让指令格式稳定，又不让样例差异污染组内比较。

### 规划器更新了什么冻结了什么

需要更新的是 Qwen3.5-9B 规划器，作者用秩为 16 的 LoRA 适配全部线性层，缩放系数为 32，丢弃率为 0.02。冻结的是 Fun-CosyVoice3-0.5B，它既是奖励计算模型也是合成模型，训练一轮，组大小 G 为 8，学习率为 2×10-6，裁剪参数为 0.2，散度权重为 0.075，使用 TRL 1.3.0 默认的 token 级重要性采样和 DAPO 风格损失归一化。风格生成训练时温度为 1.3，测试时为 0.7。辅助惩罚的具体规则是少于 6 个词罚 5 分，6 到 11 个词罚 0.5 分，重复二元和三元组按 0.01 权重并用每工作器 2048 条滚动历史统计。优化目标的完整形式如下，代码按原始形式显示。

**组相对策略优化 × 冻结合成模型：** 冻结合成模型指参数不更新、只提供打分的语音语言模型，组相对策略优化指在同一输入下采样一组指令、按组内标准化优势做裁剪更新的方法；冻结保证奖励标准固定可比，组内比较则让规划器学会在候选之间排出更能还原目标语音的指令。

\[\displaystyle\mathcal{J}(\theta)=\mathbb{E}_{i,t}\Big[\]

上式中 ri,t 为 token 级似然比，eta 为裁剪参数，beta 为散度权重，期望对有效生成 token 平均。梯度只经过 LoRA 适配的规划器参数，不进入冻结的合成模型和参考策略，监督完全来自同一目标语音在不同指令下的似然差异，不需要目标风格描述。

### 数据和基线在什么条件下比较

数据来自 ISCSLP 2026 CoT-TTS 语料的英语子集，经过时长、有效语音占比、响度、文本长度、参考相似度、自然度和噪声分数筛选，并排除上下文与目标语音时间重叠的样本。划分上用整场戏和整部电影两种留出方式，分别记为 in 与 out 分区，开发与测试各有 4 个 2750 句的分区，约 5 小时，训练集在排除与留出集重叠后剩余约 277 小时。基线包括不加指令的 Raw TTS、未适配的同模型 Base LLM，以及能直接听到目标波形的两个特权描述基线 Audio Flamingo Next Captioner 和 Qwen3-Omni-30B，它们的描述直接当作 CosyVoice3 风格指令，所有系统共享同一合成后端、回复文本和同说话人提示音频。评价分声学客观指标和大模型裁判两类，客观侧含 3 套编码器的 T2S 与 S2S、情感余弦和 MCD-DTW，大模型裁判用 Gemini 3.8 Flash 做盲测二选一。

**语音到语音相似度 × 情感相似度：** 语音到语音相似度指合成语音与目标语音在 ParaSpeechCLAP 或 CLSP 编码下的余弦相似度，情感相似度指两者 emotion2vec 概率向量之间的余弦相似度；前者偏重整体风格声学，后者偏重情感分布，两者互补，共同检验合成是否在可听风格上接近目标。

### 训练与评估的数据规模有多大

下表把数据筛选与划分的规模整理成五列，便于复现时核对时长和数量是否对齐，数字与单位保留原文写法。

本表要回答的问题是训练池和评测分区是如何从原始语料过滤和切分得到的，所有系统都用同一划分和同一提示音频。

| 环节 | 规模数量 | 筛选阈值 | 划分方式 | 用途说明 |
| --- | --- | --- | --- | --- |
| 原始过滤 | 3–15 s | 时长范围 | 按时长保留 | 去除过短过长 |
| 原始过滤 | transcript length ≤300 characters | 文本长度 | 按字符数保留 | 控制合成长度 |
| 混合池 | 299.75-hour pool | 去时间重叠后 | 全池混合 | 划分来源 |
| 评测分区 | 2,750 utterances (approximately 5 hours) | 每分区数量 | 按场景或电影留出 | 开发与测试 |
| 训练剩余 | 277.60 hours remain for training | 去重叠后 | 排除留出重叠 | 实际训练量 |

表中规模显示评测分区每个约 5 小时，训练剩余约 277 小时，量级差异意味着主结果依赖较大训练量。限制在于原文只报告英语电影对话子集，未验证其他语言或录制条件，且划分依赖电影来源，跨域结论仅限于留出整部电影的分区。

### 描述对齐为什么选不出最好的合成

候选内 Spearman 相关分析显示，两种 ParaSpeechCLAP 的 T2S 与 S2S、情感相似度和负 MCD 几乎不相关，面向细粒度风格对齐的 CLSP 稍强但仍属弱相关，且每个下游声学指标与 T2S 的相关都低于它与其他声学指标之间的相关。按选择标准比较合成效果时，T2S 选出的最优候选只比随机选择好一点，而按任一下游声学指标选出的候选在全部 5 个下游指标上都超过全部 3 种 T2S 选择，包括那些未被用于选择的指标。这说明候选池里本来存在更接近目标的指令，但描述对齐不能可靠地把它们挑出来。下图为两开发分区平均的句内相关矩阵，颜色越深相关越强。

读图说明：这张相关矩阵图有三块面板，分别对应 3 种编码器，每块的行列都是文本语音、语音语音、情感和负失真，适合先看第一行再看声学指标之间的格子。

> **看图路径：** 1. 对比三块面板中第一行与后三行的颜色深浅；2. 看负倒谱失真行与语音相似度行之间的相关格；3. 注意 CLSP 面板与其他两块在文本语音格上的差异

[![原论文 Figure 1：Mean within-utterance Spearman correlations across both development partitions.](https://arxiv.org/html/2610.11461v1/cor_dev_20260915_9pt_compact_v2_20260924.png)](https://arxiv.org/html/2610.11461v1/cor_dev_20260915_9pt_compact_v2_20260924.png)

*论文图 1。原论文 Figure 1:：“Mean within-utterance Spearman correlations across both development partitions.”。*

从像素上看，三块面板的第一行除对角线外均为很浅的粉色，数值多在 0.01 到 0.08 之间，而左下与右下涉及语音相似度和负失真的格子颜色明显更深，数值约 0.07 到 0.17。这与正文结论一致，即描述侧与合成侧的排序不一致，而合成侧指标之间彼此更一致。

**语境恰当性 × 参考一致性：** 语境恰当性指只给前三轮对话音频和文本、不给目标录音时判哪段合成更合乎情境，参考一致性指同时给出目标录音时判哪段更接近该录音的风格；前者考对话推理，后者考还原能力，论文用两种大模型打分把两者分开评价。

### 主结果在多大程度上支持语音奖励

下表比较的是测试集两个分区上的系统级表现，公平条件是同一合成后端、同一文本和同一说话人提示，指标方向为 T2S、S2S 和情感余弦越高越好，MCD-DTW 越低越好，斜杠前后分别为 test_in 与 test_out。

本表要回答的问题是只看文本上下文生成的指令能否在还原目标语音上超过直接听目标写描述的做法，结合未胜出项可以看清这种做法在描述贴合度与跨电影泛化上的适用边界。

| System | T2S Score ↑\uparrow | T2S Score ↑\uparrow | T2S Score ↑\uparrow | S2S Score ↑\uparrow | S2S Score ↑\uparrow | S2S Score ↑\uparrow | Emo. Cos. ↑\uparrow | MCD-DTW ↓\downarrow |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| System | ParaCLAP-C | ParaCLAP-S | CLSP | ParaCLAP-C | ParaCLAP-S | CLSP | Emo. Cos. ↑\uparrow | MCD-DTW ↓\downarrow |
| Raw TTS | – | – | – | .3370/.3494 | .3246/.3303 | .8160/.8148 | .6098/.6119 | 6.2426/6.3932 |
| Base LLM | -.0089/-.0141 | .0161/.0160 | .4718/.4686 | .3166/.3220 | .2979/.3078 | .8150/.8146 | .6124/.5927 | 6.3395/6.5072 |
| AF-Next† | .0788/.0841 | .0996/.0973 | .5404/.5423 | .2874/.2982 | .2596/.2637 | .7842/.7863 | .5770/.5677 | 6.8890/7.0128 |
| Qwen3-Omni† | -.0087/-.0119 | .0225/.0193 | .5101/.5053 | .3176/.3312 | .3083/.3130 | .8194/.8182 | .6228/.6226 | 6.1593/6.3189 |
| SRSP (ours) | .0073/-.0044 | .0324/.0232 | .4591/.4518 | .3632/.3627 | .3496/.3502 | .8329/.8296 | .6417/.6269 | 5.9569/6.1637 |

表中 SRSP 在全部 5 个下游声学指标和两个分区上都是最好，S2S 与情感余弦高于 Raw TTS 和 Base LLM，MCD-DTW 低于所有基线。值得注意的反例是未适配的 Base LLM 加指令后反而比不加指令的 Raw TTS 在 S2S 和 MCD 上更差，说明风格指令本身不保证提升，语音奖励的后训练把这种退化扭转了。另一个反例是 AF-Next 在 3 套编码器的 T2S 上都是最高，但在 5 个下游声学指标的两个分区上都排最后，印证了描述得像不等于控制得好。原文报告 40 组下游声学配对 Wilcoxon 检验经 Holm 校正后 38 组显著，未显著的是 test_out 情感相似度上与 Raw TTS 和 Qwen3-Omni 的比较，因此跨电影泛化时的情感增益证据较弱。

### 大模型裁判看到了什么差异

大模型裁判分两种设置，语境设置只给前 3 轮音频加文本和当前回复文本，不给目标录音，选风格更合乎回复的候选，参考设置额外给目标波形，选风格更接近该波形的候选，两种设置都要求忽略说话人身份、音色和录音质量。下图为 4 种提示的缩写配置，左侧两列是风格生成，右侧两列是裁判。

读图说明：这张提示配置图为 4 个小面板，适合先看每列顶部的输入图标，再读紫色底的任务要求和底部输出格式。

> **看图路径：** 1. 对比风格规划器与语音描述器的输入是否包含目标音频；2. 看语境裁判与参考裁判在输入中是否出现目标波形；3. 注意四种提示都要求输出一句英语句子或二选一判断

[![原论文 Figure 3：Abbreviated prompting configurations for style generation and LLM-based expressive speech…](https://arxiv.org/html/2610.11461v1/srsp_prompts.svg)](https://arxiv.org/html/2610.11461v1/srsp_prompts.svg)

*论文图 3。原论文 Figure 3:：“Abbreviated prompting configurations for style generation and LLM-based expressive speech evaluation.”。*

从像素上看，面板 a 的输入只有对话历史和当前文本加风格样例，面板 b 多了目标回复音频，面板 c 的输入是 3 轮转录加音频和两个候选，面板 d 则把目标回复音频作为参考，输出均为二选一或无效判断。这种输入差异正是特权基线与本文方法的本质区别。下表为 SRSP 与各基线的胜率，斜杠前后为 test_in 与 test_out，数值越高表示 SRSP 越占优，最后一列是各系统对真实录音的胜率。

本表要回答的问题是在不看和看目标录音两种条件下，语音奖励是否同时改善语境恰当性和还原一致性，与真实录音的差距说明了当前合成语音仍未达到真人演绎的语境贴切程度。

| System | SRSP wins vs. system | SRSP wins vs. system | System wins vs. GT |
| --- | --- | --- | --- |
| Raw TTS | 65.54/63.92 | 66.31/64.38 | 12.26/13.09 |
| Base LLM | 54.19/53.67 | 60.91/57.75 | 15.90/16.87 |
| AF-Next | 75.63/75.75 | 75.01/75.05 | 7.42/9.35 |
| Qwen3-Omni | 55.21/56.65 | 58.50/57.50 | 14.95/16.95 |
| SRSP (ours) | – | – | 18.41/19.06 |

表中 SRSP 对 4 个基线在两种设置和两个分区上胜率都超过 50%，对 Base LLM 在语境设置上为 50% 出头，对 AF-Next 则高达 75% 左右，说明改进主要来自对描述基线的超越。与真实录音比较时 SRSP 胜率最高但仍不足 20%，真实录音依然明显占优，表明语境恰当性仍有较大差距。原文用双侧精确二项检验报告偏好显著，ties 与无效判断合计不足 1%。

### 哪些范围还没有被验证

论文在结论中明确了两项未验证范围，一是富有表现力的评价依赖大模型裁判，未经人工听音验证，自动裁判对风格的偏好不等于人的听感，二是奖励计算与合成都用 CosyVoice3，迁移到其他合成后端的表现留待未来工作。这意味着主结果中 5 个声学指标的提升只在同一后端内成立，换后端后指令是否仍然有效没有证据。数据上也只覆盖英语子集和电影对话场景，时长、噪声和自然度都经过筛选，真实通话或低质量录音下的表现未知。

此外特权基线的描述并未针对 CosyVoice3 优化，直接当指令用可能本来就不占优，因此超过它们不能理解为超过所有可能的描述方法。未胜出项还包括 test_out 上情感相似度与两个基线的差异不显著，跨电影时的情感泛化需谨慎表述。

### 复现第一步要准备什么

复现第一步是按原文阈值重建英语子集和 4 个分区，并固定同一说话人提示音频和同一冻结合成模型，避免用不同后端或不同提示引入偏差。具体是保留时长 3 到 15 秒、有效语音占比不低于 0.70、响度不低于负 40 dBFS、文本不超过 300 字符等条件的样本，排除上下文与目标时间重叠，再按整场戏和整部电影留出各 2750 句的开发与测试分区。模型侧准备 Qwen3.5-9B 做 LoRA 适配和 Fun-CosyVoice3-0.5B 做冻结奖励与合成，训练超参数按组大小 8、学习率 2×10-6、裁剪 0.2、散度权重 0.075、训练温度 1.3、推理温度 0.7 起步。来源方面，本次未发现完成绑定的作者资源，不得声称代码模型或数据已公开，代码开源、权重可下载与系统可运行是三件不同的事，需分别核实。

### 什么时候值得尝试还缺哪项验证

当已有可按自然语言指令控制的对话语音合成器，且能拿到目标语音 token 做教师强制打分时，值得尝试这种只优化文本规划器、不动合成器的做法，它保留了指令的可解释和可修改性，又让指令按下游合成效果排序。复现时先跑通冻结打分与组内比较的闭环，再检查未加奖励的基础指令是否比不加指令更差，以确认奖励是否真正扭转退化。

还缺的验证是人工听音对语境恰当性的确认，以及换合成后端后的迁移测试，只有补上这两项，才能判断该方法在实际对话系统中的语气选择是否可靠。教学例子如对话历史显示安慰场景，规划器应输出一句平静安慰风格的英语指令而非复述对话内容，这只是对任务形式的举例，不代表实际效果数值。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.11461v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
