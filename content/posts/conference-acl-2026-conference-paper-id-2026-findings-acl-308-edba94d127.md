---
title: "Computational Narrative Understanding for Expressive Text-to-Speech"
date: 2026-09-12
draft: false
description: "该文把有声书按叙述与人物直接引语切分并构建 LibriQuote，再用引文微调与从头训练检验自回归与流匹配两类语音合成基座的表现力与可懂度变化，主要代价是小数据从头训练会损失可懂度和域外泛化。"
tags: ["数据集构建", "韵律", "语音", "文本到语音"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.findings-acl.308"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.findings-acl.308/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.findings-acl.308.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "5223e41ebaf164e1efaf4496054c05918b5fb192a76b98052639f2d0538f2c1c"
paper_digest_api_reader_plan_sha256: "c99b95d319570c31b89e87f6c9161b292e89733ee3b19569ef71a427cb8d4c0d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "35ec398da6c77e848f8d1651ae218af6c54fee81f92e1529ac5ac516c946c8c8"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "6d8b907fadb5e1643f8cb04aaaf6bee54b3454bfa73a9d76f1a52c271fdcb941"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "6ac8fd8475e6b9cc8c516454f026ba6ed799e04a116358a6f7a74675831ce4f9"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "2b2371c297af94b274932fcd37f77a0636fc7715f2bb4e08e847195a8f09dc45"
paper_digest_api_reader_resource_count: 9
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"scientific_topic","id":"scientific_topic.prosody","label":"韵律"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.tts","label":"文本到语音"}]
paper_digest_primary_task: "文本到语音"
paper_digest_primary_method: "数据集构建"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把人物引文单独切出来：以叙事切分做更可读的表现力语音合成

> 英文题目：*Computational Narrative Understanding for Expressive Text-to-Speech*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.findings-acl.308`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.308/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.308.pdf)

标签：#数据集构建 #韵律 #语音 #文本到语音

评分：**6.8/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Gaspard Michel：机构信息未能从会议 PDF 纯文本可靠映射
- Elena V. Epure：机构信息未能从会议 PDF 纯文本可靠映射
- Christophe Cerisara：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

富有表现力文本到语音（Text-to-Speech， TTS）需要区分中性旁白与角色直接引语并依据语境还原语气，现有按 30 秒随机切分的有声书库混杂多种韵律分布，模型易坍缩到中性风格。本文以虚构类 LibriVox 录音与 Project Gutenberg 文本为输入，先过滤多人演绎并用 BookNLP 做引语检测，再经 Zipformer-Transducer 转写与两阶段文本音频对齐切分引语与旁白片段，最后用 Phi-4 从前后段落抽取言语动词与副词伪标签并筛选高表现力子集。与大规模混合语料相比，该流程把叙事话语结构显式编码为引语单元、100 词级上下文窗口与意图标签。LibriQuote-train 含约 2991 本书、约 3300 个说话人、5359 小时引语与约 12720 小时旁白，测试集为 15 个未见说话人约 7.4 小时引语。在 LibriQuote-test 上 F5-TTS 经富有表现力子集微调后语境平均意见分从 2.95 升至 3.33，IndexTTS2-Context 胜率达 54% 接近真人 3.55。结论限于英语业余朗读有声书与引语驱动表现力，对专业演播与跨语言泛化尚未验证。原文未披露训练总时长与推理部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/deezer/libr> — 链接不可用（HTTP 404）
- 数据相关资源：<https://huggingface.co/datasets/> — 暂时无法访问
- 演示资源：<https://libriquote.github.io/> — 链接可访问（HTTP 200）
- 复现相关资源：<https://github.com/SWivid/F5-TTS/blob/main/> → <https://github.com/SWivid/F5-TTS/tree/main> — 链接可访问（HTTP 200）
- 第三方资源：<https://librivox.org/api/info> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/booknlp/booknlp/blob/main/> → <https://github.com/booknlp/booknlp/tree/main> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/k2-fsa/icefall/pull/1058> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/emotion2vec/> — 暂时无法访问
- 第三方资源：<https://github.com/swivid/f5-tts> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么：为什么要把有声书拆成叙述和引文？

本文输入是公开有声书录音及其对应的公版图书文本，目标是合成人物直接引语时更符合书中语境的表现力。作者的起点是一个可核对的观察：在 LibriHeavy 这类按固定时长切分的数据里，中性叙述和富有变化的人物对话被混在同一个 30 秒片段里。这样的混合片段会让基频分布变得复杂，合成模型可能只学会拟合更简单、数量更多的叙述部分。
论文把故事层和讲述层分开。白话说，故事层是发生了什么，讲述层是怎么讲的。

在小说朗读中，讲述层体现在引文周围的叙事句，例如他轻声低语这类写法。教学例子：引文文本是太好了，字面带感叹号容易被读得很响，但若上下文写着他轻声低语，正确的送达应是压低的耳语。这个例子只说明任务定义，不代表论文报告了该句的合成分数。

**叙述 × 引文：** 叙述指由讲述者以相对中性语调读出的故事衔接部分，分工是维持故事连贯与基线韵律；引文指书中人物直接说出的话，分工是承载情绪、身份和语气变化。二者搭配的理由是有声书天然在两者之间交替，组合意义是把更具表现力的引文单独取出作为训练与评测对象，避免与中性叙述混在一起稀释表现力信号。

为说明混合切分确实带来声学差异，作者在 LibriHeavy 小集合的 120,000 个片段上做引文检测，并计算每段音频的基频标准差。下面这张图是理解全篇动机的关键，它把引文数量、基频离散程度和样本占比放在同一坐标系里，读图时要注意左右纵轴分别对应不同量。

> **看图路径：** 1. 先看横轴引文数量从 0 到 5 的变化方向是否单调递增；2. 再看左侧红色方块表示的平均基频标准差是否随之上升；3. 最后看右侧绿色竖线表示的各组样本占比，确认 0 引文组是否占多数

[![原论文 Figure 1：Average pitch standard deviations (red squares) per number of quotations in audio segments in the…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/23d7a94957ab/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/23d7a94957ab/figure-1.png)

*论文图 1。原论文 Figure 1：“Average pitch standard deviations (red squares) per number of quotations in audio segments in the LibriHeavy-small, with bootstrapped 95% con- fidence intervals (grey lines); and…”。*

这张图横轴是每段中包含的引文个数，左侧纵轴是平均基频标准差，红色方块越高表示段内音高起伏越大，灰色短线是自举得到的 95% 置信区间。右侧纵轴是该组占全部片段的百分比，绿色竖线越高表示这类片段越多。可见的趋势是引文数量从 0 增加到 4 时红色方块总体上扬，而绿色竖线在 0 引文处最高，说明纯叙述片段占多数但起伏最小。原文报告的分布差异支持了后文单独切出引文的构造选择。

### 已有路线做了什么：大语料与情感语料各缺了哪一块？

与本文同输入、同目标的路线主要有两支。第一支是大规模有声书语料，例如 LibriSpeech、LibriTTS、Libri-Light、MLS 和 LibriHeavy。它们的输入同样是 LibriVox 录音，目标是提供可训练的语音识别与合成数据，监督来自转写文本与切分后的片段。区别在于切分依据是句子边界或固定时长，不保留引文与叙述的区分，也不提供引文周围的书中上下文。
第二支是表现力与情感语料，例如带离散情绪标签的情感语音库、L2-ARCTIC 和 EXPRESSO。

它们的输入是朗读或即兴表演语音，目标是覆盖多种情绪或风格，监督是人工情绪标签或风格标签。这类数据表现力强但规模小、覆盖书目少，难以支撑大规模文本到语音模型的训练。
本文的对照策略不是在同条件下比拼词错误率大小，而是指出监督与切分粒度的差异。大语料有规模但把表现力信号稀释了，情感语料有标签但缺规模与书目上下文。LibriQuote 试图同时保留规模、引文切分和上下文伪标签。

有观点认为有声书缺乏表现力，论文用引文子集的情绪多样性分析来回应这一点，但这属于相关性证据，不是因果证明。

### 要解决的具体问题是什么：测什么才算更符合语境？

论文要回答两个可操作的问题。第一，能否自动从有声书中切出人物引文，并附上说明该怎么读的上下文线索，形成可训练的大数据。第二，用这样的数据微调或从头训练现有语音合成系统，能否在保持可懂度和音色稳定的前提下，让引文合成更贴合上下文。
评测因此分为 3 层。第一层是可懂度，用 Whisper-large-v3 计算的词错误率衡量，数值越低越好。

第二层是音色与情绪表示相似度，用基于 WavLM 的声纹余弦和基于 Emotion2Vec 的情绪表示余弦衡量，数值越高表示与原声越接近。
第 3 层是语境贴合，用大音频语言模型作评委，对 201 个带副词伪标签的引文打语境平均意见分和与真人的胜率。前者 1 到 5 分越高越好，后者是合成比真人更贴合语境的比例。一个常见误解是把情绪相似度高直接等同于语境贴合。论文后文显示两者可以分离，因此 3 层指标需要一起看，不能只看一层就下结论。

### 方法全景：一个引文样本走完哪些步骤？

沿一个样本走完全程有助于建立全局依赖。输入是一本小说的 LibriVox 录音和 Project Gutenberg 的对应文本。先做音频准备与文本准备：只保留英文小说类录音并下采样到 16 kHz，排除每人物由不同说话人演绎的戏剧化朗读。接着下载图书文本并用 BookNLP 做引文检测，丢弃少于 20 个引文的书。
然后把录音切成 30-second 片段且两端重叠 2 second 的片段，用在 LibriSpeech 上训练的 Zipformer-Transducer 做转写并保留词级时间戳。

再做 2 阶段文本音频对齐：先找转写与图书文本的近似匹配链，再在链内做编辑距离对齐，得到图书原文每个词在音频中的时间。最后利用时间戳与引文位置切出引文音频和叙述段音频，并为每个引文匹配前后约 100 词、按段落边界截断的上下文窗口。

**自回归语音合成 × 流匹配语音合成：** 自回归语音合成逐个预测离散语义 token，分工是利用语言模型建模长时依赖；流匹配语音合成学习从噪声到梅尔谱的连续映射，分工是做非自回归的声学填充。搭配理由是论文用同一 LibriQuote 数据同时检验两类主流路线，组合意义是比较哪种训练目标更能从引文数据中拾取表现力而不损失可懂度。

输出是两类可训练单元。训练集包含 3300 个说话人、5359 小时引文和 12723 小时叙述，测试集是 15 个未见说话人的 7.4 小时引文，并配有最近的叙述句作为合成时的音色参考。每个引文还附带用大语言模型抽取的言说动词与副词伪标签，以及高表现力子集划分。整个流程不训练新的对齐模型，而是复用已有语音识别与引文检测能力，真正的学习发生在后文的语音合成微调与从头训练阶段。

### 上下文伪标签怎么做：动词和副词从哪里来？

上下文伪标签的输入是目标引文前后各一段的叙事文本，其中上下文中的其他引文被替换为特殊标记，目标引文被替换为目标标记。目的是只留下叙事与结构信息，避免模型直接抄引文内容。处理动作是用少样本提示让大语言模型抽取描述目标引文如何被说出的单个词，并自报 1 到 10 的置信度。白话说，言说动词是说这个动作本身，副词是修饰该动作的方式。

**言说动词 × 副词：** 言说动词说明以何种发声动作说出引文，例如低语、喊叫，分工是给出粗粒度的发声方式；副词修饰该动作，例如轻声地、谨慎地，分工是给出细粒度的强度与态度。搭配理由是两者常一起出现在引文周围的叙事句中，组合意义是构成上下文伪标签，让合成系统知道文本字面之外的预期送达方式。

论文在 400 个人工标注的引文上比较多个大语言模型。标注流程是 2 人先独立标 100 条并讨论解决疑难，达到动词与副词的 Cohen kappa 为 0.87 后，再由 1 人续标 300 条。比较发现名词与形容词稀少且模型抽取失败，因此只报告动词与副词。带自信心过滤的总体规律是只保留置信度为 10 的预测时精度上升、召回下降，这符合高精度伪标签的取舍。
作者最终选 Phi-4 作为全量抽取模型，理由是副词精度最高、动词精度可接受，且体积更小、速度更快。

高表现力子集的构造规则是确定性的：先纳入所有带非空副词伪标签的引文，再从剩余引文中纳入动词落在人工整理的 89 个表现力动词表中的引文。该子集包含 377776 条引文，约占全部引文训练集的 11%，总计 379 小时，可用于数据高效的表现力训练。

### 合成模型如何训练：微调与从头训练各改了什么？

训练部分涉及两个基座。SparkTTS 是基于 Qwen2-0.5B 的自回归系统，先把 16 千赫语音经 BiCodec 转为全局 token 与语义 token，再用语言建模目标预测语义 token。F5-TTS 是基于流匹配的非自回归系统，在 24 千赫语音上做文本引导的语音填充，直接生成梅尔谱并经声码器还原。论文对两者都使用公开检查点且不改生成参数，区别只在训练数据与训练方式。
SparkTTS 的微调固定声学 token 化方式，只微调语言模型主干，优化目标是给定文本 token 与全局 token 后预测语义 token。

峰值学习率为 1e-5，分别在全量引文与高表现力子集上训练 3 个轮次，批量为 32。F5-TTS 的微调用官方微调脚本，从 V1-Base 检查点起步，每卡每批 38400 帧、最多 32 序列，学习率为 7.5e-5，热身 20,000 步，共训练 3 个轮次。原文未报告完整的优化器 2 阶参数与正则细节，这部分属于缺项，不从模型名称推定。
从头训练只针对 SparkTTS。一种变体保持原输入序列，用引文文本作条件。

另一种变体把条件换成带左右段落上下文的序列，并在上下文中把其他引文替换为特殊标记。两种变体都训练 10 个轮次，峰值学习率为 3e-5，批量 32，余弦调度加 20,000 步热身。推理时统一采用跨句设计：用 2 到 15 秒的叙述句计算全局 token 作为音色参考，再生成目标引文。
下面这张图解释为何最终选 Phi-4 做全量伪标签，它直接关系到高表现力子集的质量与后文微调数据的构成，理解该取舍是复现过滤流程的前提。

> **看图路径：** 1. 先区分上下面板分别对应动词与副词两类抽取任务；2. 再对照图例区分无自信心与带自信心过滤的精度与召回柱；3. 最后比较三个模型在副词面板上过滤前后的精度变化幅度

[![原论文 Figure 2：Evaluation of the extraction of Verbs (top) and Adverbs (bottom). SC indicates self-confidence.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/23d7a94957ab/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/23d7a94957ab/figure-2.png)

*论文图 2。原论文 Figure 2：“Evaluation of the extraction of Verbs (top) and Adverbs (bottom). SC indicates self-confidence.”。*

该图上方面板是动词，下方面板是副词，纵轴是分数，横轴是 3 个待比较的大语言模型。每组 4 个柱分别对应无过滤的精度与召回，以及带自信心过滤后的精度与召回。可见的规律是带过滤后浅色精度柱普遍升高而召回柱下降，尤其在副词面板更明显。结合 Phi-4 在副词过滤精度上表现突出且推理更快，作者选择它处理全量训练集，这是一个精度优先、兼顾成本的工程判断。

### 实验条件：数据划分、基线与指标方向如何固定？

数据划分按说话人与书目控制。开发集从训练集说话人与书目中随机抽取，用于检验已知说话人的中性到表现力合成，但与测试集无说话人重叠。测试集是 15 个未见说话人，含 8 名男声与 7 名女声，总计约 7.5 小时，测试前删去少于两个词的 205 条短句。基线分为训练对照与零样本对照两类，前者是 SparkTTS 与 F5-TTS 的微调变体，后者还包括 MaskGCT 与 IndexTTS2。
要回答 LibriQuote 是否同时提供大规模引文与可对照的中性叙述，需要先核对各子集的规模与切分动机。

下表整理了训练、过滤子集与测试的说话人、时长与关键比例，指标方向是引文情绪多样性越高、副词覆盖越好，越适合表现力研究。

| 子集 | 说话人数 | 引文时长 | 叙述时长 | 关键比例与相关性 |
| --- | --- | --- | --- | --- |
| 训练集引文与叙述 | 3300 人 | 5.3K 小时 | 12.7K 小时 | 引文约占训练语句数的近半数 |
| 高表现力子集 | 未单独报告 | 379 小时 | 不适用 | 377776 条，约占全量引文 11% |
| 测试集 | 15 人 | 7.5 小时 | 配对叙述作提示 | 8 男 7 女未见说话人 |
| 切分动机 | 12 万片段统计 | 不适用 | 不适用 | 75% 纯叙述，25% 含 1 到 12 个引文 |
| 音高规律 | 同上 | 不适用 | 不适用 | 相关系数 0.218，显著性小于 0.001 |

训练集同时保留大量叙述与引文，使得既可以只用引文微调，也可以叙述加引文一起从头训练。

高表现力子集虽只占约 10%，但仍有近 379 小时，足以支撑过滤实验。未胜出项是开发集不测零样本泛化，只能看已知说话人的表现力迁移，因此域外结论需依赖 LibriSpeech-PC 与 SeedTTS 英文测试集。

**语境平均意见分 × 胜率：** 语境平均意见分对单个合成样本按书中上下文打 1 到 5 分，分工是度量单样本的语境贴合与自然度；胜率把合成样本与真人原声并列比较，分工是度量相对真人朗读的偏好比例。搭配理由是单样本打分与成对比较互补，组合意义是既看绝对表现力水平，也看在与真人对照时是否更贴合语境。

**跨句提示合成 × 说话人相似度：** 跨句提示合成用同一书中邻近的叙述句作为音色参考去合成目标引文，分工是固定音色而只考验表现力变化；说话人相似度用声纹模型比较合成与原声的余弦相似，分工是检查音色是否漂移。搭配理由是表现力实验必须控制音色变量，组合意义是区分韵律变好了还是只是音色变了。

主观评测每说话人抽 2 条共 30 条，每条 5 名评分者。自然度用 1 到 5 分、0.5 为间隔的平均意见分，表现力用相对真人的比较平均意见分，范围为负 3 到正 3。需要区分的是自动情绪相似度不能当成人评，语境打分也不能替代自然度打分。标准外域集报告词错误率与合成相对参考的说话人相似度。

### 主结果：谁的可懂度与语境贴合各得到了什么？

主结果按 LibriQuote 测试集与标准集分别组织。测的是引文合成在可懂度、音色保持、情绪表示接近度与语境贴合上的变化，与谁比是各基座的原始检查点，条件一致处是同一跨句提示与同一解码参数。指标方向是词错误率越低越好，其余相似度与语境分越高越好。
在 LibriQuote 测试集上，真值词错误率为 6.5，偏高部分来自强情绪、口音与专有名词短句。SparkTTS 词错误率为 4.8，真值词错误率为 6.5，两者并列说明可懂度上已很强。

微调后可懂度与音色相似度略有提升，但语境打分与胜率变化不大。F5-TTS 用高表现力子集微调后语境打分从 2.95 升至 3.33，高 0.4 分，这是两类基座行为分化的关键证据。
从头训练的 SparkTTS 用引文训练时语境打分为 3.09，换成上下文条件后升至 3.15，表现力提升但可懂度与音色相似度下降。用叙述加引文全量从头训练时语境打分达 3.30，且可懂度下降大幅缓解。进一步在该模型上再用高表现力子集做 2 阶段微调未带来显著增益。

下面 3 幅降维散点用于核对引文确实带来更丰富的情绪分布，读图时先确认颜色图例，再比较三者蓝色中性点的占比差异。

> **看图路径：** 1. 先对照右侧图例确认蓝色为中性、其余颜色为各情绪类别；2. 再比较左中右三幅子图的蓝色占比与彩色点团大小差异；3. 最后观察左图引文子图中粉色与绿色等非中性簇的位置分布

[![原论文 Figure 3：t-SNE projections of utterance representations computed with emotion2vec-plus-base.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/23d7a94957ab/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/23d7a94957ab/figure-3.png)

*论文图 3。原论文 Figure 3：“t-SNE projections of utterance representations computed with emotion2vec-plus-base.”。*

左图是 LibriQuote 引文，中图是 LibriQuote 叙述，右图是 LibriHeavy 混合片段，每点是一个语句的情绪表示，颜色是预测情绪。可见左图彩色点团明显多于中图与右图，中图与右图以蓝色中性为主。原文量化为引文仅 67% 被预测为中性，而对照叙述为 87%、LibriHeavy 为 91%，支持引文子集情绪更多样的判断，但需注意这是模型预测标签，不是人工情绪金标。
要回答同一测试集上哪个系统同时保持低词错误率与高语境贴合，需要并排比较真人原声与 4 个零样本系统的可懂度、音色与语境指标。

下表汇总了关键数字，语境分越高越好，词错误率越低越好，相似度越高越好。

| 系统 | WER | SIM-O | E-Sim | ContextMOS | Win-Rate |
| --- | --- | --- | --- | --- | --- |
| Ground Truth | 6.5 | - | 0.62 | 3.55 | - |
| SparkTTS | 4.8 | 0.46 | 0.69 | 2.94 | 38% |
| F5-TTS | 6.9 | 0.53 | 0.71 | 2.95 | 31% |
| MaskGCT | 7.6 | 0.56 | 0.72 | 2.94 | 28% |
| IndexTTS2 | 5.2 | 0.49 | 0.63 | 3.33 | 46% |
| IndexTTS2-Context | 5.4 | 0.50 | 0.64 | 3.45 | 54% |

主要收益是 IndexTTS2 上下文增强在语境贴合上追平真人，同时保持较低词错误率。具体代价是其情绪相似度反而最低，说明文本情绪预测错误会产生与预期相反的强烈情绪。未胜出项是 MaskGCT 音色保持较好但词错误率最高、语境打分低，表明音色好不等于演绎对。

### 反证与失败条件：上下文何时帮忙，何时添乱？

论文做了 3 组可视为消融的对照。第一组是数据量对照：全量引文微调与高表现力子集微调。对 SparkTTS，两者都主要改善可懂度而不改善语境贴合。对标准集，高表现力子集微调反而在域外集上略降可懂度，说明已在全量上从头训练的模型不必再做 2 阶段过滤微调。
第二组是条件对照：标准文本条件与段落上下文条件。

从头训练时上下文条件把语境打分从 3.09 提到 3.15，但可懂度与音色相似度下降，说明更多上下文带来表现力增益的同时增加了建模负担。第 3 组是情绪解耦对照：IndexTTS2 文本预测与上下文预测，后者胜率从 46% 升至 54%，说明把情绪预测与声学合成解耦后，上下文能纠正部分文本字面的误导。
失败条件用推理轨迹分类进一步展开。作者把语境打分的文字推理交给另一模型分为成功、不足、错误情绪、相反情绪 4 类。

总体规律是多数样本落在符合但强度不足，真人与系统都存在演绎不足。IndexTTS2 成功比例最高，但错误与相反比例也最高，上下文增强后错误比例下降。这是一个重要的反例：最具表现力的系统同时是最容易演错的系统。
下面这组饼图展示各系统的 4 类占比统计结果，读图时注意浅绿占比最大不代表已经足够好，而是代表强度不足仍是当前阶段的主要瓶颈所在。

> **看图路径：** 1. 先看图例中深绿浅绿浅红深红四类分别代表的匹配程度；2. 再横向比较不同系统深绿成功比例的高低排序情况；3. 最后观察 IndexTTS2 与上下文增强版本在错误两类的占比变化

[![原论文 Figure 4：Proportion of failure cases per model predicted by Gemini-2.5 Flash.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/23d7a94957ab/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/23d7a94957ab/figure-4.png)

*论文图 4。原论文 Figure 4：“Proportion of failure cases per model predicted by Gemini-2.5 Flash.”。*

图中每个饼对应一个被评测系统，深绿为完全贴合语境，浅绿为贴合但强度不足，浅红为错误情绪，深红为相反情绪。可见 F5-TTS 与 MaskGCT 浅绿占比接近 60%，深绿约 30%；IndexTTS2 深绿升至约 37%，但深红与浅红合计也更高；上下文增强与从头训练变体在不同饼中有所改善。该图支持解耦与上下文有助于减少错演，但不能证明已达到专业朗读水准。

### 边界与缺项：哪些结论不能推广？

论文明确报告了 4 类限制。第一，训练集未按识别词错误率过滤离群句，可能残留少量对齐错误，影响识别与合成学习，未来版本计划加入过滤。第二，语境打分依赖大音频语言模型作评委，带有模型自身的理解与文化偏置，宜用于系统间比较，不宜对单个模型做绝对断言。
好在人类主观趋势与自动趋势大体一致，才支持 IndexTTS2 更具表现力的相对判断。第三，实验聚焦端到端语音合成，未验证 LibriQuote 对神经音频编解码器是否有同样增益，这属于待验证的推测。

第四，上下文条件的利用仍初步，如何把长上下文有效注入合成仍需进一步研究。
还有两处不能推广。其一，LibriVox 为业余朗读，部分引文演绎本身强度不足，真值语境打分并不显著高于合成，因此追平真人不等于达到专业水准。其二，性别与口音分布未报告，用该数据训练的系统可能存在偏置，商用前需单独评估与缓解。训练资源方面，全量伪标签抽取在单张 H100 上约 6 小时，合成实验在 4 卡 H100 节点上完成，但原文未给出完整的端到端训练时长与推理延迟。

### 复现先做什么：数据、代码与评测各去哪里找？

复现建议按数据、模型、评测的顺序推进。数据方面，论文给出 Hugging Face 数据集链接与 GitHub 代码链接，但本次核对的资源状态显示代码链接当前不可用，返回 404，数据集链接本次未能确认可达。因此当前不能写已公开可下载，应以实际可访问时为准。演示页当前可用，状态为 200，可试听示例。
第三方依赖中 LibriVox 接口、BookNLP、F5-TTS 相关仓库当前可用，情绪表示模型链接本次未能确认可达。

书目文本需从 Project Gutenberg 获取，外部文本源质量差或需手动处理时应丢弃。模型方面，SparkTTS 与 F5-TTS 均用公开检查点，F5-TTS 用官方微调脚本从 V1-Base 起步。
复现微调时先固定解码参数与跨句提示长度，再分别跑全量引文与高表现力子集，注意学习率与热身步数的差异。评测方面，客观指标用 Whisper-large-v3 算词错误率，用 WavLM-large 声纹模型算余弦相似度，用 Emotion2Vec 算情绪表示相似度。主观与语境评测需准备 201 条带副词伪标签的引文子集与 30 条人工评测集，并保留提示模板以保证可比性。

关键超参数与信息条件应原样保留：音频下采样到 16 千赫但保留原文件链接，片段 30 秒加 2 秒重叠，上下文窗口前后约 100 词且按段落截断。引文少于 20 的书丢弃，测试短句少于两词的删去 205 条。任何改动都应单独记录，因为切分与过滤直接改变情绪分布与可懂度基线。

### 何时值得尝试：这套方法适合谁，不适合谁？

如果目标是让小说引文合成更贴合上下文，且已有流匹配基座，值得尝试用高表现力子集做监督微调。论文报告该路线同时改善可懂度与语境打分。如果目标是训练自回归基座且数据有限，值得尝试叙述加引文一起从头训练，它在论文中达到 3.30 的语境打分并缓解可懂度损失。
但若只有少量引文就从头训练，应预期可懂度与域外泛化下降。如果目标是零样本直接获得高表现力，可考察解耦情绪预测的系统并把预测输入换成上下文，论文中该变体胜率达 54%。

不适合的情形也要明确：若任务是中性播报或短句指令合成，引文数据的情绪方差可能带来不必要的风格漂移。
若只能用文本字面做情绪判断，对感叹号与实际低语冲突的句子应格外小心，错误情绪的代价比平淡更大。还需补的验证包括按词错误率过滤后的重训、专业朗读者上的对照，以及编解码器重建质量的检验。总体而言，LibriQuote 的价值在于把叙事切分、上下文窗口与伪标签固定为可复述的构造流程，而不是提供一个放之四海的情绪标签。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 14 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/2c073db1a541/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/2c073db1a541/figure-1.png)

区域 1 · [查看论文原页](https://aclanthology.org/2026.findings-acl.308.pdf#page=14)

[![原文数学表达区域 2，PDF 第 16 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/2c073db1a541/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/2c073db1a541/figure-2.png)

区域 2 · [查看论文原页](https://aclanthology.org/2026.findings-acl.308.pdf#page=16)

[![原文数学表达区域 3，PDF 第 16 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/2c073db1a541/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/2c073db1a541/figure-3.png)

区域 3 · [查看论文原页](https://aclanthology.org/2026.findings-acl.308.pdf#page=16)

另有 20 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://aclanthology.org/2026.findings-acl.308.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
