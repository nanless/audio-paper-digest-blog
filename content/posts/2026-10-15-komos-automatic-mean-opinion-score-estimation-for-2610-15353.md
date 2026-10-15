---
title: "KOMOS: Automatic Mean Opinion Score Estimation for Korean Speech"
date: 2026-10-15
draft: false
tags: [语音质量评估, SFT, 数据集, 主观评测]
categories: [论文速递]
description: "针对现有 MOS 预测在韩语上校准不良的问题，KOMOS 用 29 名韩国听众对 1000 条语音的 5000 个打分微调 Whisper-medium 编码器与听众条件预测头，在测试集上取得 SRCC 0.900 与 LCC 0.950，但结论只在该韩语数据划分与 seen-system 条件下成立。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.15353"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "KOMOS：面向朗读与日常口语的韩语语音质量预测"
paper_digest_original_title: "KOMOS: Automatic Mean Opinion Score Estimation for Korean Speech"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.15353v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.15353v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.15353v1.pdf"
paper_digest_primary_task: "语音质量评估"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-quality","label":"语音质量评估"},{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"}]
paper_digest_primary_method: "SFT"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "针对现有 MOS 预测在韩语上校准不良的问题，KOMOS 用 29 名韩国听众对 1000 条语音的 5000 个打分微调 Whisper-medium 编码器与听众条件预测头，在测试集上取得 SRCC 0.900 与 LCC 0.950，但结论只在该韩语数据划分与 seen-system 条件下成立。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sangchun Ha"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Junwon Moon"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kyuhong Shim"}]
paper_digest_abstract_sha256: "e114c73d8ea1f4eea972542dbb03951f2429607f3e7a4ed042e6c83d2777bfc8"
paper_digest_sidecars: {"citation.bib":{"sha256":"dafeca19d8f34db9d375ab8c48a9b54f62ff948af05c7fbfcffd1487f5f64f94","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-15353/citation.bib"},"citation.json":{"sha256":"35510fc5d35f3f51b7d954c8a639aa84287476c1dc32e68f165652e414610e89","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-15353/citation.json"},"citation.ris":{"sha256":"6f786788c4dd33261ed8f8ba55624ada58c49effc5943d87aa0d70b6ce8a7451","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-15353/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"714dd98eabb394d4ab9f9f62b4fd0635566d234f0aca49053f6c35347f4a966b","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-15353/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "043b42cad17de09c7329fa943febda073e1cc8b6d301ecb9c8593dcd4977fbab"
paper_digest_api_reader_plan_sha256: "dec2ac4f64e11a5b66637075b333982e42f832b8b3a5be6cbff7c8fbab990640"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d466730665bfeaa4ab764f821544820d2432d800e0f756abee01b5444a585bff"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "32f3f8a95887c9a68052ee010a381da3e16a763cd79d68b14306fd20a6fd6499"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "cd826168a103340c97618dad515a5a926c625cc445d6993a6ec3849b369d8da1"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9241e348e96ec8654e36161e99245ddd0dcb0dc4b264bd1a0896d2fd4e1ef7bf"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 KOMOS：面向朗读与日常口语的韩语语音质量预测

> 英文题目：*[KOMOS: Automatic Mean Opinion Score Estimation for Korean Speech](https://arxiv.org/abs/2610.15353v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音质量评估](/audio-paper-digest-blog/papers/?concept=task.speech-quality)
- **研究方法**：[SFT](/audio-paper-digest-blog/papers/?concept=method.sft)；[人类参与评测](/audio-paper-digest-blog/papers/?concept=method.human-evaluation) → [主观评测](/audio-paper-digest-blog/papers/?concept=method.subjective-evaluation)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.3/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Sangchun Ha：机构信息未在 arXiv HTML 中可靠披露
- Junwon Moon：机构信息未在 arXiv HTML 中可靠披露
- Kyuhong Shim：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

语音合成与口语对话系统需要可扩展的语音质量评价，而人工平均意见分（Mean Opinion Score，MOS）测试成本高，现有神经MOS预测器多在英语朗读语音上训练，在韩语朗读与自发会话语音上的可靠性未经充分验证。KOMOS输入16 kHz单声道韩语语音，输出单条语音的整体质量预测分，需覆盖真实录音、合成语音与退化语音的宽质量范围，并同时对齐相对排序与绝对分值。Whisper-medium编码器冻结卷积前端并微调其余参数，把语音转成帧级编码表示，同一条语音的编码只计算一次并复用于5个个人评分及其平均与中位共7个目标。听众嵌入提供评分者条件，将对应嵌入按时间重复后与每帧编码拼接，拼接序列送入单层双向长短期记忆网络加线性层得到帧级分数，推理时用平均听众嵌入对应的帧级分数在有效帧上平均为utterance级预测。训练以上一步帧级分数同时计算容差0.25的截断均方误差与人工均分差至少0.5的语音对排序损失，预测值再经验证集拟合的仿射校准并截断到[1,5]以贴近人工量表。在由810条训练、90条验证与100条测试组成的划分上，KOMOS测试集utterance级Spearman秩相关系数为0.900，高于UTMOS v1的0.703与UTMOS v2的0.767，Pearson线性相关系数为0.950。结论适用于所收集韩语数据分布内的已知来源混合情形，未见合成系统的诊断仅用单音色100条语音验证，跨系统与跨录音条件的泛化尚未充分确立；原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/upskyy/komos> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/upskyy/komos> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要解决的评价任务是什么

这篇论文处理的是语音质量自动评价。输入是一段韩语语音波形，输出是一个 1 到 5 分的总体质量预测分，目标是复现韩国母语听众打分的平均值，也就是平均意见分。听音测试仍然是衡量语音好坏的标准做法，但每条语音要找多个人来听，成本高、速度慢。随着文本转语音和实时口语对话系统大量生成朗读体和日常会话体语音，开发团队需要一个可以反复调用的自动打分工具。神经 MOS 预测器就是这样的工具，它从波形直接回归人工平均分。

**平均意见分 × 神经 MOS 预测器：** 平均意见分是多个听众对一条语音总体质量打 1 到 5 分后取算术平均得到的主观分数，神经 MOS 预测器是用神经网络直接从波形预测这个平均分以代替昂贵的人工听音，前者提供监督目标和评价尺度，后者提供可扩展的自动打分工具，两者搭配才能把人工判断沉淀为可复用的质量评估。

论文强调已有预测器多在英语朗读数据上训练，例如 BVCC 等资源，跨语言和跨说话风格时表现不稳定。作者指出已有韩国文本转语音研究直接拿 UTMOS 打分，但 UTMOS 在韩语、尤其是在自发风格和高低分段上的可靠性没有经过韩国听众判断的充分验证。这就是本文要补的缺口：既要覆盖朗读，也要覆盖日常口语，还要让预测分在排序和绝对数值上都更贴近韩国听众。

### 已有 MOS 预测路线走到哪里

原文把相关工作分成两块。第一块是非侵入式 MOS 预测与泛化。从 MOSNet 到考虑听众差异的 MBNet 和 LDNet，再到用自监督语音特征做回归的 SSL-MOS，模型逐渐引入听众信息。UTMOS v1 把听众嵌入与对比学习结合，在 2022 年 VoiceMOS 挑战赛多个指标上领先，UTMOS v2 进一步做特征融合与多阶段训练，在 2024 年挑战赛保持前列。但训练资源仍以英语为中心，SQuId 用了大规模内部多语种打分但不公开，IndicMOS 向英语之外扩展，SSL-MOS 与 VoiceMOS 跨语言分析以及 MOS-Bench 都提示跨分布泛化仍是独立难题。

第二块是韩语语音质量评价。韩语在韵律上以语调短语层面的调型为特点，还有连音与紧音化等音系过程。PEFT-TTS 与 CoreaSpeech 等韩国研究用 UTMOS 做合成评价或数据筛选，多语种 Emilia 语料也用自动质量工具过滤网络语音。共同点是直接沿用现有自动分，而没有验证这些分是否符合韩国听众的总体质量判断。KOMOS 的定位因此不是提出全新回归形式，而是在相同听众条件建模思路下补上韩语人工监督。

### 为什么朗读和自发要分开看

作者先做了一个动机分析：在人类 MOS 相近时，UTMOS v1 给朗读和自发语音的分是否一样。做法是把每条语音的人工平均分四舍五入到 0.5 一档，挑出 3.0、3.5、4.0、4.5 4 个桶，每个桶都至少有 5 条朗读和 5 条自发。4 个桶的朗读与自发数量分别是 21 与 19、49 与 10、125 与 10、36 与 5。比较的是每个桶内 UTMOS v1 原始输出的均值。

下面这张图就是该分析的可视化，读图时注意柱子是模型输出均值，虚线是人类评分，同一桶内比较才有意义。

> **看图路径：** 1. 先确认横轴是人类 MOS 分桶，纵轴是 UTMOS v1 原始输出均值；2. 在 3.0、3.5、4.0、4.5 四个桶内对比绿色朗读柱与橙色自发柱的高度差；3. 注意虚线为人类评分，观察自发语音柱整体偏低的幅度

[![原论文 Figure 2：UTMOS v1 consistently underestimates spontaneous Korean speech relative to read speech within the…](https://arxiv.org/html/2610.15353v1/figure_2.svg)](https://arxiv.org/html/2610.15353v1/figure_2.svg)

*论文图 2。原论文 Figure 2:：“UTMOS v1 consistently underestimates spontaneous Korean speech relative to read speech within the same human-MOS buckets.”。*

从像素可见，在 3.0 到 4.5 的每个桶里，橙色自发柱都明显低于绿色朗读柱，虚线人类评分则呈上升趋势。原文报告自发比朗读低 0.85 到 1.28 分，4 个桶的非加权平均差距为 1.05 分，4 个比较在双侧 Mann-Whitney U 检验下未校正均为 p 小于 0.001，经 Bonferroni 校正后仍显著。作者同时提醒这不是控制句子与说话人的配对实验，差距不能只归因于说话风格。这个例子说明只看总体相关会掩盖风格偏差，也引出数据集必须同时包含两种风格。

**朗读语音 × 自发语音：** 朗读语音指措辞接近书面语、句式规整的语音，自发语音指措辞接近日常会话的语音，本文按语言风格而非是否照稿划分，二者分工在于覆盖 TTS 与对话系统实际遇到的两种输入形态，组合起来才能检验预测器是否只在规整朗读上有效。

### KOMOS 的整体流程是什么

KOMOS 沿用 UTMOS 的听众条件模型结构。训练时每条语音配 7 个目标：5 个听众的个人打分加上它们的平均值与中位数。语音编码器对一条语音只前向一次，得到帧级表示。对每个目标，把对应的听众嵌入在时间上重复并拼到每 1 帧上，再经过单层双向长短期记忆网络与线性层，在每一有效帧输出一个标量。推理时固定使用平均值对应的嵌入，把有效帧的分数平均成一条语音的预测分。

音频统一转成 16 kHz 单声道。最终选定的编码器是 Whisper-medium，去掉解码器并把位置嵌入截到 500 个位置以支持 10 秒输入，冻结卷积前端，微调其余编码器参数。听众嵌入表有 31 项，对应 29 名听众加平均与中位数。绝对分值分析时，对每个预测器在验证集上单独拟合仿射校准再截到 1 到 5 分区间。整个流程的输入是波形加听众编号，训练监督来自韩国听众的真实打分，输出是 utterance 级预测分。

### 编码器与预测头各自做什么

编码器负责声学建模，预测头负责把声学表示映射到特定听众的打分尺度。作者在统一的预测头与训练目标下比较了多种编码器，包括 UTMOS v1 初始化、wav2vec2-base、WavLM-base+、WavLM-large、XLS-R 300M 以及 Whisper 从 tiny 到 large-v3。参数量指的是适配模型的编码器部分，基线指的是完整预测器。比较时固定听众条件结构，只换编码器与冻结策略，因此差异主要反映预训练表示与韩语监督的适配程度。

**语音编码器 × 听众嵌入：** 语音编码器负责把 16 kHz 单声道波形变成随时间变化的声学表示，听众嵌入是为 29 名听众加平均与中位数共 31 个条目各学一个 128 维向量以刻画打分偏好，前者提供内容与音质信息，后者提供评分者视角，两者按帧拼接后送入回归头才能同时学到语音特征与评分者差异。

预测头本身很轻：双向长短期记忆网络隐层 256 维加逐帧线性投影。把听众嵌入拼到每 1 帧的做法，相当于让同一段声学表示在不同听众视角下产生不同帧分，训练时复用一次编码输出对应 7 个目标，代价是每个目标都要过一次轻量头，但避免了对波形重复编码。推理只用平均嵌入，相当于取群体平均视角的预测。

### 两个损失函数如何分工

训练目标由帧级回归与 utterance 级排序两项组成。帧级采用带容忍的裁剪均方误差，容忍阈值为 0.25，误差在此以内不惩罚，超出部分按超出量的平方惩罚，再对有效帧、7 个目标与批量取平均。这让模型不必在听众天然分歧范围内过度拟合。排序项先把平均嵌入条件下的帧分在有效帧上平均成 utterance 预测，再在批量内挑选人工平均分差至少 0.5 的语音对，要求预测顺序正确并留出间隔。

\[\mathcal{L}_{\mathrm{rank}}=\frac{1}{\lvert\mathcal{P}\rvert}\sum_{(i,j)\in\mathcal{P}}\max\!\left(0,\,m-\sigma_{ij}\!(\hat{y}_{j}-\hat{y}_{i})\right),\]

上式中尖括号内是第 i 与第 j 条的预测差乘以人工符号，正样本对要求预测差至少达到间隔 m 等于 0.1，否则产生线性惩罚。最终目标以 0.5 权重把排序损失加到回归损失上。直观理解是回归管分值落点，排序管好坏次序，两者都需要，因为后文既评价相关系数也评价校准后的绝对分。

**帧级回归损失 × utterance 级排序损失：** 帧级回归损失要求每一有效帧的预测分接近目标打分并容忍 0.25 以内的误差，utterance 级排序损失要求在同一批内人工平均分差至少 0.5 的语音对保持正确排序并留出 0.1 间隔，前者管绝对分值靠近，后者管相对好坏不颠倒，两者以 0.5 权重相加后兼顾校准与排序。

### 数据如何构成与如何训练

数据集共 1000 条韩语语音，覆盖真实录音、合成语音与退化语音，包含棚内朗读、自发与带噪真实录音、多种商用与开源合成系统以及声码器或编码器退化。按语言风格分为命令信息、自由交谈、疑问、情感、感叹词与句法复杂 6 类通用类别，加紧音化、连音、汉字数词读法与敬语 4 类韩语特有类别，共 200 以上的人类说话人与合成音色。这里朗读与自发指措辞风格，不代表是否脱稿。29 名韩国母语听众在自研网页界面上按总体质量打 1 到 5 分，看不到文本，并被要求不因正式或随意而扣分。每条 5 人打分，共 5000 个评分，utterance 级 MOS 取 5 人算术平均，序数 Krippendorff alpha 为 0.700。

优化用 AdamW，编码器学习率 1 乘 10 的负 5 次方，预测头与嵌入为 3 乘 10 的负 4 次方，权重衰减 0.01，批量 32，bf16 精度，最多 20 轮，以验证集 Spearman 无提升 5 轮则早停。所有训练实验用 3 个随机种子，取每个种子分别算指标再平均，用验证集 Spearman 选检查点与最终配置。基线用公开 UTMOS v1 与 v2 检查点零样本直接预测，不在韩语数据上更新参数。

### 划分与指标如何设定

评价用 utterance 级预测，指标为 Spearman 等级相关与 Pearson 线性相关，以前者为主。数据集按 MOS 分层划为训练 810 条、验证 90 条、测试 100 条，主划分是 seen-system 设定，即来源领域与合成系统可以跨划分出现。测试集内再定义说话人不重叠子集 34 条与文本不重叠子集 55 条，它们的说话人或句子在训练与验证中均未出现，用于检验对新说话人与新文本的泛化，但系统仍在已见范围内。

**Spearman 等级相关 × Pearson 线性相关：** Spearman 等级相关只看预测排序与人工排序是否一致，是本文选模型与报告主结果的首要指标，Pearson 线性相关看预测值与人工平均分是否呈线性对应，前者回答好坏排对没有，后者补充绝对数值贴近程度，两者结合才能区分排序正确但整体偏高或偏低的情况。

训练策略比较 4 种：全微调更新编码器、预测头与听众嵌入，只是 Whisper 卷积前端保持冻结；其余 3 种冻结编码器只训练头与嵌入，其中 frozen-ws 用可学习权重线性组合所有编码器层输出，frozen-last 只用最后一层，frozen-early 只用在对应 frozen-ws 中学到权重最大的单层。绝对分值比较前都要在验证集上做仿射校准，校准对每个预测器单独拟合。

### 主结果：排序与线性贴合提升多少

先看数据构成与划分的事实表，它说明后续相关系数是在什么样本量与什么子集定义下算的。这里比较样本是否覆盖真实、合成与退化 3 种来源，以及测试子集是否真正做到说话人与文本隔离。

| 来源类型 | utterance 数量 | 占比 | 数据性质 | 备注 |
| --- | --- | --- | --- | --- |
| 真实录音 | 420 | 42% | 棚内朗读与自发带噪 | 覆盖多种录制条件 |
| 合成语音 | 310 | 31% | 多种合成系统 | 覆盖商用与开源 |
| 退化语音 | 270 | 27% | 声码器或编码器退化 | 覆盖不同质量档 |

该表整理自原文对 1000 条构成的描述，真实、合成与退化的数量与占比直接决定了低中高分段能否被覆盖，但它不证明某一类单独的预测精度，精度仍要看测试相关。

再看划分表，它把训练、验证、测试与两个不重叠子集的规模固定下来，避免把总体相关误读为对新说话人也同样有效。

| 划分 | utterance 数量 | 说话人是否隔离 | 文本是否隔离 | 用途 |
| --- | --- | --- | --- | --- |
| 训练集 | 810 | 否 | 否 | 微调编码器与预测头 |
| 验证集 | 90 | 否 | 否 | 选模型与拟合仿射校准 |
| 测试集 | 100 | 否 | 否 | 报告主结果 |
| 说话人不重叠子集 | 34 | 是 | 否 | 检验新说话人 |
| 文本不重叠子集 | 55 | 否 | 是 | 检验新句子 |

该划分表明主结果仍是 seen-system 设定，不重叠子集只隔离说话人或文本 1 维，系统层面仍可能见过，因此不能外推到完全未见系统。

主结果的数字表比较零样本基线与韩语微调后的最终配置，指标方向均为越高越好。

| 评价集合 | 评价指标 | UTMOS v1 | UTMOS v2 | KOMOS |
| --- | --- | --- | --- | --- |
| 测试集 100 条 | SRCC | 0.703 | 0.767 | 0.900 |
| 测试集 100 条 | LCC | 基线见原文表 1 | 基线见原文表 1 | 0.950 |
| 说话人不重叠 34 条 | SRCC | 基线见原文表 3 | 基线见原文表 3 | 0.951 |
| 文本不重叠 55 条 | SRCC | 基线见原文表 3 | 基线见原文表 3 | 0.878 |

KOMOS 测试 SRCC 0.900、LCC 0.950，超过两个基线。对 100 条测试做 10,000 次配对自助、每次在重采样内对 3 个种子平均 SRCC，SRCC 提升的 95% 置信区间相对 v1 为 0.100 到 0.320、相对 v2 为 0.056 到 0.231，均 p 远小于 0.001。作者还指出连 Whisper-tiny 这样编码器小一个量级的模型经韩语适配后也超过零样本基线，说明差距不只由容量解释。但这些区间只在该 100 条测试分布下有效，换测试分布则需重算。

### 校准后绝对分值是否更贴近人工尺度

相关高不等于绝对分准，因此作者做了仿射校准后的分桶比较。做法是在验证集上拟合从模型预测到人类 MOS 的线性变换，再截到 1 到 5 分，每个桶内比较校准后预测均值与人类均值。导读：横轴是人类 MOS 分桶，纵轴是校准后预测均值，虚线是完全重合的对角线，两条折线越贴虚线说明高低分段的整体偏高或偏低越小。

> **看图路径：** 1. 先看横轴人类 MOS 分桶与纵轴校准后预测均值，再看虚线表示的理想对角线；2. 比较蓝色 KOMOS 折线与橙色 UTMOS v1 折线在 1.0 到 2.0 低分区间的偏离方向；3. 观察 4.0 到 5.0 高分区间的两条折线谁更贴近虚线

[![原论文 Figure 1：Predicted mean opinion score of KOMOS and UTMOS v1 within each human-MOS bucket.](https://arxiv.org/html/2610.15353v1/figure_1.svg)](https://arxiv.org/html/2610.15353v1/figure_1.svg)

*论文图 1。原论文 Figure 1:：“Predicted mean opinion score of KOMOS and UTMOS v1 within each human-MOS bucket.”。*

从像素可见，蓝色 KOMOS 折线从 1.0 到 5.0 基本沿虚线上升，在 2.5 到 4.5 区间与虚线很贴近，5.0 桶略低但仍接近 4.5；橙色 UTMOS v1 在 1.0 到 2.0 区间高于虚线，在 4.0 到 5.0 区间明显低于虚线，4.5 桶甚至下折。原文据此称 KOMOS 在高 MOS 区间也更贴近人工尺度，包括低分高估与高分低估的偏差得到缓解。但这是在验证集拟合的仿射变换之后才成立，未校准的原始输出仍不可直接当人工分使用。

### 未见合成系统的诊断说明什么

为检验绝对分对齐是否只限于某一类别，作者另造 100 条诊断语音，用训练中未出现的单个固定音色的未见韩国 TTS 系统合成，每类 10 条，共 10 类，每条都经过人类 MOS 至少 4.5 的高质量筛选。比较问题是经验证集仿射校准后，哪个模型的类别均值能回到 4.5 以上。表中类别覆盖命令信息、自由交谈、疑问、情感、感叹词、句法复杂以及紧音化、连音、数词、敬语，括号内为表面读音。

| 评价对象 | 数量 | UTMOS v1 均值 | UTMOS v2 均值 | KOMOS 均值 | 筛选条件 |
| --- | --- | --- | --- | --- | --- |
| 未见 TTS 系统 100 条 | 100 | 3.129 | 3.342 | 4.702 | 人类 MOS 至少 4.5 |
| 其中差距模式 | 100 | 低 0.85 到 1.28 | 整体偏低 | 平均差距 1.05 的反例 | 同桶朗读与自发比较 |

解释是 KOMOS 10 个类别均值都在 4.5 以上，总体均值 4.702，而两个基线没有一类达到该阈值，总体均值分别为 3.129 与 3.342。这支持校准后的 KOMOS 与人工高分筛选标准一致，且模式不限于某一类别。但诊断集全是高分样本，只能说明高分区间的放置正确，不能证明在低分未见系统上同样准确，也不能把类别均值当成对每条的保证。

### 编码器与微调策略哪种更有效

作者在统一协议下为每个编码器挑验证 Spearman 最高的策略。结论有两层。第一，所有经韩语评分适配的编码器都超过零样本基线，Whisper-medium 验证 Spearman 最高而被选为最终编码器，虽然更大的 Whisper-large-v2 与 v3 在测试 Spearman 上略高，但验证更低且参数更多。第二，对 Whisper-medium，全微调在验证与测试的两个指标上都超过 3 种冻结编码器策略，冻结策略只训练头与嵌入时损失了对韩语声学细节的适配。

这里容易误读的是测试最高的 large 变体没有被选，这恰恰是按验证选模型的常规做法，避免用测试集调模型。另一个细节是参数量指编码器，Whisper-medium 约 307.2M，large 约 636M 以上，选 medium 是在验证最优与成本之间的折中。若只看测试数字会觉得越大越好，但按原文的模型选择规则，最终配置仍是 medium 加全微调。

### 结论在什么条件下才成立

主结论依赖 3 个条件。第一，监督与评价都来自同一套韩语听音：29 人、每条 5 人、共 5000 分，测试只有 100 条，不重叠子集更小到 34 与 55 条，换听众群体或换文本领域后相关可能变化。第二，主划分允许来源与系统跨划分出现，不重叠子集也只隔离说话人或文本 1 维，严格未见系统的证据只有 100 条高分诊断集，且该诊断集只覆盖高分区。第三，绝对分比较都经过验证集仿射校准并截到 1 到 5 分，离开该校准则不能直接比较数值大小。

原文也明确 3 个局限：动机分析不是配对实验，不能把朗读与自发的差距只归因于风格；总体 SRCC 不是子集 SRCC 的加权平均，可能低于两者；3 个预测器在说话人不重叠子集上都比总体高，提示子集构成可能推高了数值。这些都说明相关提升不等于因果解释，也不等于在任意韩语语音上都能复现。

### 复现第一步做什么

复现先固定数据与评价规则，再跑模型。数据侧按 810、90、100 划分与 34、55 子集定义组织 1000 条语音与 5000 个打分，utterance 级 MOS 取 5 人平均，指标用 utterance 级 Spearman 为主、Pearson 为辅，3 个种子分别算再平均，用验证 Spearman 选检查点。模型侧用 Whisper-medium 编码器，去解码器并截位置嵌入到 500，音频转 16 kHz 单声道，冻结卷积前端，全微调其余编码器加 128 维听众嵌入与单层双向长短期记忆头，损失为容忍 0.25 的帧级裁剪均方误差加权重 0.5 的排序损失，排序只取人工差至少 0.5 的对、间隔 0.1，优化器与早停按原文超参数。

关于资源，论文正文给出推理代码与训练模型的两个链接，资源 1 为第三方可达的 github 链接，资源 2 本次未能确认可达。按规则只有归属明确的作者资源且可用才能写已公开，这里只能说论文提供了这两个地址，不把第三方链接状态当作作者已开源的证明。代码可运行、权重可下载、系统可复现是三件不同的事，需要分别验证。

### 什么时候值得尝试还缺什么验证

当任务是给韩语朗读与日常口语做总体质量排序或筛选，且有少量韩语听众打分可做校准时，值得尝试用韩语监督微调预训练编码器加听众条件头的路线，因为本文在 100 条测试与高分诊断集上同时改善了排序与校准后落点。若只是零样本直接拿英语训练的预测器给韩语自发语音打分，则要警惕低估与高分段偏低。

还缺的验证包括低分段未见系统的绝对分对齐、新听众群体与新领域文本上的稳定性，以及推理开销与延迟的实测，原文没有报告误判率、延迟或成本，不能承诺这些会改善。初学者可复述的关键步骤是：收集覆盖真实、合成与退化的韩语语音，按风格与韩语现象分层，找母语听众按总体质量打分，微调编码器并联合优化回归与排序损失，最后在验证集上做仿射校准再比较绝对分。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.15353v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
