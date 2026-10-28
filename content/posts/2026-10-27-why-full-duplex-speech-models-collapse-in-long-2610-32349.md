---
title: "Why Full-Duplex Speech Models Collapse in Long Conversations"
date: 2026-10-27
draft: false
tags: [全双工语音交互, 基准设计, 实时处理, 语音合成]
categories: [论文速递]
description: "论文针对全双工语音模型在数十分钟对话中出现重复、长时间沉默和胡言乱语的问题，用受控重放与实时交互两轨基准定位崩溃，并用保留首个缓存表项与抑制近期复读的无重训方法把滑动窗口模型的崩溃大幅降低，同时保持实时运行。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.32349"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "长对话为什么会崩：全双工语音模型的长时间崩溃与无重训修复"
paper_digest_original_title: "Why Full-Duplex Speech Models Collapse in Long Conversations"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.32349v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.32349v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.32349v1.pdf"
paper_digest_primary_task: "全双工语音交互"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"setting","id":"setting.real-time","label":"实时处理"},{"facet":"task","id":"task.speech-synthesis","label":"语音合成"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文针对全双工语音模型在数十分钟对话中出现重复、长时间沉默和胡言乱语的问题，用受控重放与实时交互两轨基准定位崩溃，并用保留首个缓存表项与抑制近期复读的无重训方法把滑动窗口模型的崩溃大幅降低，同时保持实时运行。"
paper_digest_authors: [{"affiliations":["Integrated Vision and Language Lab, KAIST, South Korea"],"name":"Yeonju Kim"},{"affiliations":["Integrated Vision and Language Lab, KAIST, South Korea"],"name":"Bella Godiva"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Se Jin Park"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yong Man Ro"}]
paper_digest_abstract_sha256: "912d949a8baf694cf71f26ee7e50d0ddf58bcb8512df95bad4509e851f596a98"
paper_digest_sidecars: {"citation.bib":{"sha256":"8a45aa429d6b2010c4259b1e8a47d3e947d127db379e037fa18225ba06a063ca","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32349/citation.bib"},"citation.json":{"sha256":"e9c4b16338e833c929bd8382d9ee2df8329414826dbcdb06f77915e67fab37a0","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32349/citation.json"},"citation.ris":{"sha256":"6f9140e993728b33139c72ab39fddd2cf33aa4b55a856d73a85f941f431a0e62","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32349/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"08d828d36dffd483c380c21495a813f06d4091636d2445c6a33c840969d26d73","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-32349/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "90753a9625766421ef08a9c35cedf917e779966423cc4e22d3771209a984772f"
paper_digest_api_reader_plan_sha256: "6ca75edb862936aab572faab48ae0034310c3b2e785be95dfd6ce114fe2f9e55"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "452235dd4711d3216e9adac7e2623c2fb0703390be1e52a85ddd70b58cf7eaf8"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "18cc193fb2de4213d25b6c05c8fe56374feab5613bcced4af55449d39755ddcd"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "0199ab43a538da5636e65fe87ae5995b2d9b6a9cc60049f55b5912b6b657ae90"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "b755304069e4b3c8797ac3876fd3ff663d44ba7a7c0d4109882e5161c6393716"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 长对话为什么会崩：全双工语音模型的长时间崩溃与无重训修复

> 英文题目：*[Why Full-Duplex Speech Models Collapse in Long Conversations](https://arxiv.org/abs/2610.32349v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-paper-digest-blog/papers/?concept=task.full-duplex)；[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)
- **研究条件**：[实时处理](/audio-paper-digest-blog/papers/?concept=setting.real-time)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yeonju Kim：Integrated Vision and Language Lab, KAIST, South Korea
- Bella Godiva：Integrated Vision and Language Lab, KAIST, South Korea
- Se Jin Park：机构信息未能在本次解析中与作者逐人可靠绑定
- Yong Man Ro：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

全双工语音交互要求模型同时听和说，每帧都生成语音声学记号与文本记号，上下文会被静默和简短应答快速占满，历史输出又会回流为新的输入。已有评测只看单轮或几轮对话，无法暴露数十分钟尺度上的稳定性问题。本文引入全双工长时基准Full-Duplex Long-Horizon Benchmark（FD-LHB），包含固定录音重放与自适应对话伙伴两条轨道，测试重复、长时间静默和胡言乱语三类失效的出现时间。针对滑动窗口模型，论文分离出初始化锚驱逐与自我强化重复两种机制，并以三步衔接干预：初始化锚固定先将首个KV表项固定保留，避免滑动窗口驱逐后转入静默与胡言乱语；双工重复惩罚再以最近512个词形记号为历史统计复用，对复现词施加惩罚并等量抬高全部词logits以抵消对PAD和EPAD的相对助推；其输出的PAD游程再进入长时静默保护，当用户安静且PAD连续达375帧即30秒后，在125帧内线性压低PAD logit至最多3.0，仍由模型采样决定下一记号。在FD-LHB重放轨道40路最长60分钟CANDOR重放评测中，以重复、长时静默、胡言乱语发生率计，Moshi基线与IAP+DRP对比从65%、100%、100%降到0%、7.5%、0%，PersonaPlex从90%、85%、100%降到2.5%、47.5%、0%。在逐帧延迟的实时因子评测中，IAP+DRP在RTX A6000上的实时因子为0.75，低于1.0的实时门限。结论适用于所测的两种滑动窗口模型，增长上下文模型仍会耗尽上下文，PersonaPlex的长时间静默也未完全消除。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 全双工语音要解决什么输入输出问题

全双工语音模型的输入是连续的双人音频流，目标是同时完成听和说。人类长对话包含长轮次、沉默、中断、嗯啊这类简短应答以及重叠说话，模型必须在每 1 帧决定是听、发声还是插入简短反馈。本文研究的模型每帧都生成一个记号，即使只是在听也在消耗上下文，因此沉默和频繁的简短应答会快速占满缓存，而模型自己刚说过的话又会成为下 1 帧的输入。

已有评测多只看单轮或几轮内的打断处理、停顿和重叠，持续时间太短，看不到数十分钟后的退化。论文要回答的是模型能否维持数十分钟的连贯对话，以及一旦不行，会以什么形式、在什么时候崩溃。

**全双工 × 逐帧生成：** 全双工指同时听和说，不等待一轮结束；逐帧生成指模型每一帧都要产生一个输出记号，即使在听也在生成。这种搭配意味着历史缓存会被沉默、回声和自身输出迅速填满，这是长时崩溃的来源。

### 已有路线为什么看不到长时崩溃

第一条路线是全双工生成与低延迟交互，已有 Moshi、PersonaPlex、Raon-SpeechChat、BayLing-Duplex、Lychee-FD 等模型，以及考察轮次、重叠和任务完成度的短时基准。这些基准不考察连续生成数十分钟后的重复、沉默和胡言乱语。

第二条路线是长时稳定性与键值缓存管理。文本、视频和语音生成中都有退化现象，有的方法改训练过程来缩小训练与生成的差距，有的方法在固定内存下保留初始记号和近期记号。StreamingLLM 同时保留开头的注意力汇聚记号和近期记号，与本文保留首个表项的做法最接近，但本文发现只需保留第一个表项，且更新方式更便宜。论文不改训练，只在推理时干预。

### 两种上下文管理各在何处失效

论文把现有模型分成两类。增长上下文模型保留全部交互历史，直到达到上下文上限后运行结束；滑动窗口模型只保留最近帧，丢弃最旧帧，理论上可以无限运行。问题是哪一种都不足以支撑长时全双工交互，失效形式需要系统刻画。

以下三联图展示了三台模型随对话时间的变化，上面是重复与胡言乱语比例，中间是 3 种失效首次出现的位置，下面是每分钟输出词数，时间覆盖约 24 分钟，右侧增长上下文模型后期以斜线表示容量截尾。

> **看图路径：** 1. 先看三列分别对应哪两个滑动窗口模型和哪一个增长上下文模型；2. 再看顶部的重复与胡言乱语曲线何时抬升；3. 对照中间色带中重复、沉默、胡言乱语首次出现的时间；4. 最后看底部每分钟输出词数在胡言乱语阶段是否突然升高

[![原论文 Figure 2：How three models degrade over a long conversation.](https://arxiv.org/html/2610.32349v1/FIG_intro_three_model_failure_trajectories.png)](https://arxiv.org/html/2610.32349v1/FIG_intro_three_model_failure_trajectories.png)

*论文图 2。原论文 Figure 2:：“How three models degrade over a long conversation.”。*

从像素可见，左侧 PersonaPlex 和中间 Moshi 在开头有数分钟连贯期，随后出现蓝色沉默段，再转为紫色胡言乱语段，底部词数在后期明显抬高；右侧 BayLing-Duplex 在更早时间就出现胡言乱语和长时间沉默，随后因达到容量而结束。重复出现的时间在不同模型间差异较大。这说明滑动窗口模型即使内存没有耗尽也会崩溃，增长上下文模型也可能在达到上限前就退化。

**增长上下文 × 滑动窗口：** 增长上下文保留全部历史直到达到上限后停止，滑动窗口只保留最近若干帧并丢弃最旧帧以便无限运行。前者受容量限制，后者看似无限但会丢掉早期缓存，二者都可能在长对话中崩溃，只是触发方式不同。

### 基准与诊断修复的总体思路

论文先建基准 FD-LHB，再做机理诊断，最后做无重训修复。基准有两轨，互补短板。受控重放轨给所有模型喂同样的固定人类语音，保证可比，但输入不会回应模型；自适应交互轨用大语言模型伙伴根据模型输出实时生成回应，更像真实对话，但每次输入不同，可比性较弱。

诊断聚焦两个滑动窗口模型，提出两个机制：与缓存轮转相关的沉默和胡言乱语，以及被自身近期输出增强的重复。修复也是两个，分别对应验证这两个预测：保留初始化锚点，以及抑制近期用词但防止长期沉默。论文强调这只是验证诊断的针对性修复，不是宣称解决长时建模。

### 初始化锚点驱逐如何与缓存轮转挂钩

初始化锚点指从空缓存开始计算的第一个键值缓存表项。训练时每个样本被切成从空缓存开始的分块，所以每个分块都有新鲜锚点；推理时缓存从不重置，填满后每次来新帧就丢最旧帧，锚点最终被丢掉。这就造成训练总是有锚点、长推理最终没有锚点的差距。

以下示意图对比了训练分块每次从空缓存开始与推理缓存从不重置的过程，左侧用 Chunk 1 与 Chunk 2 说明分块，右侧分三步标出锚点被丢掉的位置。

> **看图路径：** 1. 先看左侧训练部分每个分块如何从空缓存重新开始；2. 再看右侧推理部分缓存为何从不重置；3. 确认锚点在推理的哪一步被丢掉

[![原论文 Figure 3：Initialization-Anchor Eviction.](https://arxiv.org/html/2610.32349v1/fig3.png)](https://arxiv.org/html/2610.32349v1/fig3.png)

*论文图 3。原论文 Figure 3:：“Initialization-Anchor Eviction. When training starts each chunk from an empty cache, every chunk begins with a fresh initialization anchor.”。*

图中左侧训练的 Chunk 1 和 Chunk 2 都从 Empty Cache 出发并标出 Anchor，右侧推理依次经历初始缓存、锚点被驱逐和更晚阶段。论文在 Moshi 微调代码中确认了从空缓存开始分块的设置，预训练和 PersonaPlex 是否如此则未公开，因此用对照实验直接检验锚点的作用。

**初始化锚点 × 初始化锚点驱逐：** 初始化锚点指从空缓存开始计算的第一个键值缓存表项，训练时每个分块都有它；初始化锚点驱逐指滑动窗口在长期推理中把它丢掉。训练总是有锚点而长推理最终没有锚点，这种不一致与沉默和胡言乱语的出现相关。

### 只保留首个表项的固定方法怎么做

初始化锚点固定简称为 IAP，做法是永远不丢第一个表项。缓存未满时一切不变；填满后每次来新表项，丢锚点之后的最旧表项，而不是丢锚点本身，每层都如此。缓存大小不变，不需要重训。

位置索引需要特殊处理。如果锚点停在最初位置，它与新查询的距离会越拉越大，超出训练见过的距离。IAP 让锚点的位置每次随窗口滑动加一，始终紧贴窗口其余部分之前，保证位置连续。其余表项位置不变，新表项取下一个位置。实现上把被固定的键存成未加旋转位置编码的形式，每次移动时再在新位置重新施加编码，每步只更新这一个键，而不是像 StreamingLLM 那样重排整个缓存。

### 重复如何被自身输出增强

论文发现重复期最常出现的词是 of、then、you 等短而常见的词，以及 yeah、okay 这类应答词。对 PersonaPlex 跟踪其在重复期占主导的词，发现该词占比在重复起点前就已上升，起点后继续上升，说明循环不是突然出现，而是从已在说的词长出来的。

更直接的检验是插入一个前 2 分钟没出现过的词 purple，再看随后 20 秒模型说出它的比例。2 模型在零插入时都不说这个词，PersonaPlex 随插入次数增加而复读比例明显上升，在 32 次插入时达到约 28.4%，Moshi 则始终低于 10%。这支持近期接触会提高复现概率，尤其在 PersonaPlex 上更强。

**自增强重复 × 双工重复惩罚：** 自增强重复指模型最近说过的词更容易再被说出，形成循环；双工重复惩罚只改助手文本分支的词概率，降低近期出现词的概率，同时保持总词概率不变以免模型转而沉默。二者是问题与对策的关系。

### 没有训练时实际执行了什么计算

本篇没有训练任何模型，也没有更新权重。所有实验都是运行已有模型并在推理时改记号选择或缓存保留。IAP 只改缓存逐出规则和一个位置索引，DRP 只改助手文本分支的概率分布，音频分支不受影响。

DRP 分两部分。第一部分对最近 512 个词形记号中的每个词施加标准重复惩罚，惩罚强度记为 rho，正概率除以 rho，负概率乘以 rho，只按是否出现过惩罚，不按出现次数加权。PAD 和 EPAD 这两个负责听与轮次切换的特殊记号不被惩罚。为了不让惩罚把总词概率压低而间接抬高沉默记号，再给所有词形记号加同一个偏移，使加温后的总词概率与惩罚前相同。

\[R_{\rho}(z_{t,i})=\begin{cases}z_{t,i}/\rho,&i\in\mathcal{H}_{t},\ z_{t,i}>0,\\ \rho z_{t,i},&i\in\mathcal{H}_{t},\ z_{t,i}\leq 0,\\ z_{t,i},&\text{otherwise},\end{cases}\]

上式中 z 是某帧某记号的原始文本概率分数，H 是最近历史词集合，rho 大于 1 控制强度。第二部分是长时间沉默保护：当连续 PAD 帧数超过 30 秒且语音检测认为用户安静时，逐步降低 PAD 分数，最多持续 10 秒斜坡到上限，不强制指定下一个记号，模型仍按采样产生输出。Moshi 取 rho 为 1.5，PersonaPlex 取 1.3，执行顺序是先惩罚再做总量保持，最后按需做沉默保护。

### 两轨输入与三种失效如何判定

受控重放轨 FD-LHB-CANDOR 取自 CANDOR 长人类对话，去掉前 3 轮寒暄，按剩余时长选最长的 40 段，最短、平均、最长分别为 55.5、67.4、92.6 分钟。每段取说话更多的一路作为固定输入，最多评估 60 分钟。自适应轨 FD-LHB-LLM 每轮由 Gemini-2.5-Flash 看最近对话生成下一句伙伴文本，再用本地语音合成转成 16 kHz 语音喂给被测模型，被测输出再送回伙伴，共 40 场，每场最多 20 分钟或直到模型达到容量。

重复用 32 词窗口上的词级 Seq-Rep-4 衡量，计算 4 元词组中非唯一部分的占比，窗口每次前移 16 词且最多覆盖 30 秒音频。窗口分数不低于 0.30 且连续两个窗口都超标才记一次重复起点，避免把单次复述算成崩溃。

\[\text{Seq-Rep-4}=1-\frac{\#\,\text{unique word 4-grams}}{\#\,\text{word 4-grams}}.\]

沉默按 1 分钟 bins 内词数判定，少于 3 个词为静音 bins，连续两个静音 bins 的起点为长时间沉默起点。胡言乱语由 Gemini-2.5-Flash 对每个不少于 3 个词的 bins 判为胡言乱语或非胡言乱语，首个胡言乱语 bins 为起点；机理分析另用预测熵衡量不确定性。人工盲听显示 Gemini 从不把正常语音判成胡言乱语，但会漏掉部分真胡言乱语，因此报告的胡言乱语率可能偏低。

**预测熵 × Gemini 评判：** 预测熵是模型对下一个文本记号分布的不确定性，用于机理分析，需要模型输出概率；Gemini 评判是对一分钟语音转写文本打胡言乱语标签，用于全部模型的基准比较。前者揭示内部失稳，后者给出可跨模型比较的外部标签。

### 五台模型在长对话中何时以何种方式崩溃

要回答的问题是同一判标下，不同上下文管理模型能坚持多久，哪种失效先出现。增长上下文模型受容量截尾，用生存曲线处理截尾，曲线越高表示保持无故障的运行比例越高，指标方向都是发生比例越低越好。

| 条件 | 重复发生比例 | 长时间沉默发生比例 | 胡言乱语发生比例 |
| --- | --- | --- | --- |
| Raon-SpeechChat 重放约 5 分钟容量 | 未发生 | 14/40 | 1/40 |
| BayLing-Duplex 重放 17.5 分钟内 | 22/40 约 55% | 40/40 约 100% | 36/40 约 90% |
| Lychee-FD 重放 10.9 分钟内 | 15/40 约 37.5% | 未发生 | 12/40 约 30% |
| Moshi 重放 60 分钟 | 26/40 约 65% | 40/40 约 100% | 40/40 约 100% |
| PersonaPlex 重放 60 分钟 | 36/40 约 90% | 34/40 约 85% | 40/40 约 100% |

上表把重放轨的主要发生数放在一起，可以看到没有模型能稳定数十分钟：增长上下文模型要么很快达到容量，要么在达到容量前就出现 3 类失效；滑动窗口模型内存没有耗尽，但 60 分钟内几乎都出现胡言乱语，并伴随大量重复和沉默。交互轨模式相同，只是具体数字随伙伴回应而变。跨模型比较只能看趋势，因为架构、温度和容量都不同，严格可比的是同一模型内基线与修复的配对比较。

以下六面板曲线展示了重放与交互中保持无重复、无沉默、无胡言乱语的比例随时间下降的过程，上排为重放 60 分钟，下排为交互 20 分钟。

> **看图路径：** 1. 先区分上排受控重放与下排自适应交互；2. 再看纵轴是保持无故障的运行比例，越高越好；3. 比较同一模型内基线与修复曲线的分离点；4. 注意增长上下文模型的加号表示达到容量而截尾

[![原论文 Figure 7：Repetition, silence, and gibberish across replay and adaptive interaction.](https://arxiv.org/html/2610.32349v1/FIG_candor_failure_free_tracks.svg)](https://arxiv.org/html/2610.32349v1/FIG_candor_failure_free_tracks.svg)

*论文图 7。原论文 Figure 7:：“Repetition, silence, and gibberish across replay and adaptive interaction.”。*

从像素可见，基线的 Moshi 与 PersonaPlex 曲线在 10 分钟前后快速下跌，胡言乱语面板几乎跌到零，而带修复的两条曲线在多数面板中保持在高位；增长上下文模型的曲线常因达到容量而提前终止。该图支持的判断是崩溃普遍存在，且修复主要在同一模型内起作用，不能据此给不同模型排名。

### 修复后崩溃率与说话质量如何变化

要回答的问题是在同一模型、同一输入和同一采样下，加 IAP 与 DRP 后 3 类失效是否减少，以及说话内容是否还连贯相关。指标方向仍是发生比例越低越好，内容评分越高越好，沉默 bins 记 1 分以免沉默被排除在平均之外。

| 条件 | 重复 | 长时间沉默 | 胡言乱语 |
| --- | --- | --- | --- |
| Moshi 基线重放 | 26/40 | 40/40 | 40/40 |
| Moshi 修复重放 | 0/40 约 0% | 3/40 约 7.5% | 0/40 约 0% |
| PersonaPlex 基线重放 | 36/40 约 90% | 34/40 约 85% | 40/40 约 100% |
| PersonaPlex 修复重放 | 1/40 约 2.5% | 19/40 约 47.5% | 0/40 约 0% |
| 2 模型交互修复后每种失效 | 不超过 10% 场次 | 不超过 10% 场次 | 不超过 10% 场次 |

上表显示修复把胡言乱语清零，把重复降到零或接近零，沉默也大幅下降，但 PersonaPlex 重放仍有 19/40 出现 2 分钟沉默，其中多数在约半分钟内恢复说话，属于暂时停顿而非彻底卡死。交互轨中基线最常见的是胡言乱语和沉默，修复后每种失效都不超过 10% 场次。内容评分上，基线在约 10 分钟内跌到最低分，修复后在 20 分钟交互和 60 分钟重放中都保持平稳。局限是评分仍是模型打分，且沉默记低分会拉低平均，不能等同于人工长期评价。

### 保留锚点与重复惩罚各自管哪一部分

要回答的问题是在 Moshi 同一重放输入下，只保留锚点、只做重复惩罚和两者结合各能解决什么。比较条件是同一 40 段重放与同一采样，指标是保持无故障的运行比例，越高越好。以下三面板分别显示保持无重复、无沉默、无胡言乱语的比例。

> **看图路径：** 1. 先看三列分别对应重复、沉默、胡言乱语的无故障比例；2. 比较基线、只保留锚点、只做重复惩罚和两者结合的终点；3. 注意哪一种单一干预能单独消除胡言乱语

[![原论文 Figure 9：Ablation of cache retention and repetition control.](https://arxiv.org/html/2610.32349v1/FIG_candor_failure_free_moshi_ablation.svg)](https://arxiv.org/html/2610.32349v1/FIG_candor_failure_free_moshi_ablation.svg)

*论文图 9。原论文 Figure 9:：“Ablation of cache retention and repetition control.”。*

从像素可见，胡言乱语面板中只保留锚点与两者结合都保持在顶部，只做重复惩罚与基线一样跌到零；重复面板中只做重复惩罚与两者结合保持顶部，只保留锚点也明显高于基线；沉默面板中两者结合最高。这说明两部分互补：锚点管胡言乱语和大部分沉默，重复惩罚管重复，两者结合才同时压住三者，论文也指出这不能证明每种失效只有一个原因。

| Moshi 同输入条件 | 无沉默比例 | 无胡言乱语情况 |
| --- | --- | --- |
| 基线 | 0% | 基线全部出现胡言乱语 |
| 只保留锚点 | 67.5% | 只保留锚点保持无胡言乱语 |
| 两者结合 | 92.5% | 两者结合保持无胡言乱语 |

上表只列出有连续原句支撑的沉默无故障比例与胡言乱语定性结果：只保留锚点已能消除胡言乱语并把无沉默比例从 0% 抬到 67.5%，两者结合进一步抬到 92.5%。完整的重复与沉默发生计数在正文中另行交代，只做重复惩罚能消除阈值上的重复但几乎不改善沉默和胡言乱语。DRP 的进一步拆解显示，去掉总量保持会让沉默明显回升，加上长时间沉默保护后沉默回到低位，说明总量保持和沉默保护都是为了防止以沉默代替重复。

### 结论在什么条件下才成立还有哪些缺口

诊断只覆盖 Moshi 和 PersonaPlex 两个滑动窗口模型，BayLing-Duplex 这类增长上下文模型也会在达到上限前崩溃，但原因未查明，IAP 对它们不适用，因为它们从不丢缓存。锚点实验用预测熵衡量失稳，用固定槽位和缓存历史对照支持结论，但预测熵不直接等于对话质量，覆盖的对话、输入、种子、架构和语言还不够广。

评测时长有限，未发生只表示在重放 60 分钟或交互 20 分钟内没发生，不代表之后永远稳定。模型间温度、采样和容量不同，跨模型排名不如同模型内配对比较可靠。DRP 会惩罚自然复用，早期盲听偏好只保留锚点而不加 DRP，中后期才偏向加 DRP；PersonaPlex 加修复后仍有近半重放出现 2 分钟沉默。胡言乱语标签经 8 人盲听验证无误报但有漏报，真实胡言乱语可能更多。附带的额外语音模型观察因协议各异，只能定性参考，不能与主基准合并排名。

### 复现第一步做什么与实时代价多大

复现不需要训练。第一步按论文的清单重建输入：取 CANDOR 指定对话并去掉前 3 轮，用说话更多的一路作 16 kHz 单声道固定输入；交互轨用同一伙伴提示、最近 16 轮历史和固定合成器生成伙伴语音；基线与修复用同一提示、输入、采样和种子，只差 IAP 与 DRP。评分沿用同一窗口、阈值和 Gemini 提示，沉默 bins 记低分，截尾用生存估计处理。

| PersonaPlex 同一 440 秒重放条件 | 40 场中无胡言乱语场数 | 实时因子 |
| --- | --- | --- |
| 基线先进先出缓存 | 0/40 | 约 0.5957 |
| 类 StreamingLLM 保留前 4 项并重排全缓存 | 40/40 | 约 1.0323 |
| 本文方法只重排首项 | 40/40 | 约 0.7525 |

上表比较的问题是同样消除胡言乱语时能否保持实时，实时因子指处理 1 秒音频所需的秒数，低于 1 为快于实时。可以看到两者都消除胡言乱语，但重排全缓存的方法实时因子超过 1 而跟不上实时，本文方法因每步只更新一个键而保持在约 0.75。DRP 只改文本概率分数，额外开销约 2.7%，IAP 约 24%，合计仍快于实时。来源未确认不代表技术缺陷，作者资源是否公开需以可验证链接为准，本文不据此评价方法。

### 什么时候值得尝试还需补什么验证

当全双工语音需要连续运行数十分钟，且使用滑动窗口缓存并出现先沉默后胡言乱语，或出现短词与应答词循环时，值得尝试先保留首个缓存表项，再加带总量保持和沉默保护的重复惩罚。关键操作点是历史长度 512 个词形记号、Moshi 惩罚 1.5 而 PersonaPlex 用 1.3、沉默超 30 秒且用户安静时逐步降 PAD 分数，每步只动锚点位置，复现时先对齐同一输入与同一采样再比较配对差异。

还需要补的验证是更长、更多样输入下的人工长期评价，确认减少崩溃没有以损害自然复用为代价，并查明增长上下文模型在达到上限前崩溃的原因。本文的价值在于给出可复现的长时基准、把沉默与胡言乱语和缓存轮转挂钩、把重复和近期输出挂钩，并用两个便宜的推理时修复验证了诊断，但不能推广为所有长对话建模已被解决。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.32349v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
