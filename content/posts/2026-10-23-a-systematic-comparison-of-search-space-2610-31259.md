---
title: "A Systematic Comparison of Search Space Complexity and Efficiency for Time-Synchronous End-to-End ASR Models"
date: 2026-10-23
draft: false
tags: [语音识别, CTC, 高效推理, 语音]
categories: [论文速递]
description: "论文比较 CTC 与单调 Transducer 在不同剪枝和语言模型下的词错误率与搜索耗时，核心证据是外部语言模型下多数时刻活跃假设很少但困难处出现瞬时高峰，而按分数差距保留假设的动态剪枝能在保持词错误率的同时把搜索耗时降低约一个数量级。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.31259"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "时间同步端到端语音识别还要做多大的搜索空间"
paper_digest_original_title: "A Systematic Comparison of Search Space Complexity and Efficiency for Time-Synchronous End-to-End ASR Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.31259v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.31259v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.31259v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.ctc","label":"CTC"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "CTC"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文比较 CTC 与单调 Transducer 在不同剪枝和语言模型下的词错误率与搜索耗时，核心证据是外部语言模型下多数时刻活跃假设很少但困难处出现瞬时高峰，而按分数差距保留假设的动态剪枝能在保持词错误率的同时把搜索耗时降低约一个数量级。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Simon Berger"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Larissa Kleppel"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ralf Schlüter"}]
paper_digest_abstract_sha256: "bdeec1d4847149e854685738b8286fc890509439b519416870af66474aa10e7c"
paper_digest_sidecars: {"citation.bib":{"sha256":"d89305d4ad3fbef2afa233e83f822ed96c9a12cc11ac4b4b57ab59824d56056e","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-31259/citation.bib"},"citation.json":{"sha256":"575bed7f74876253365b078f1815f4ede7ef3f87958d01bc224bf0485217563d","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-31259/citation.json"},"citation.ris":{"sha256":"b74e9d617b5887a2e3e1016e182c8ce3a1e358146d2d337bfed5f717c3ac5772","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-31259/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"04f0f6fedeed19871181c9f3b8e956c79efdd935119a0536e8b177bdbaaff24c","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-31259/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e3db64cd8c69f268a16db2b44f432f561a99935492ebd43394ca1d35ccdd23d6"
paper_digest_api_reader_plan_sha256: "71abc4035f31cc6cb713f47d9cccc8849b72fd512a835f3f349ac8e9ef7374dc"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "79b73e89a26157978f063fce4ebdc4fd3f8c154fcc0027ee4f40c90534b514af"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "6b33e59ddc4c44db914e736e15cbc7d60c0ea49c05dacf8843d37f9b15ca880f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "0489bd500df96afedec55cf2b112501e2090fee8e9a6d1783191636322dc70f6"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "636edf213961950b6dbf89b7f2e0ef26eb7ae41a212b8b047136d8abef496fc5"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 时间同步端到端语音识别还要做多大的搜索空间

> 英文题目：*[A Systematic Comparison of Search Space Complexity and Efficiency for Time-Synchronous End-to-End ASR Models](https://arxiv.org/abs/2610.31259v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)
- **研究方法**：[CTC](/audio-paper-digest-blog/papers/?concept=method.ctc)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)
- **研究重点**：[高效推理](/audio-paper-digest-blog/papers/?concept=research_focus.efficiency)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.6/10** | 创新 1/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Simon Berger：机构信息未能在本次解析中与作者逐人可靠绑定
- Larissa Kleppel：机构信息未能在本次解析中与作者逐人可靠绑定
- Ralf Schlüter：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

自动语音识别（Automatic Speech Recognition，ASR）需要把声学编码器输出的帧序列映射为文字序列，难点在于对齐路径数量庞大，且模型在多数时刻很确定、只在少数困难片段出现大量竞争假设。论文在无词典开放词表搜索和有词典约束的树搜索两种流程中，比较固定保留固定数量假设的最大束剪枝与按得分差距保留假设的得分剪枝，并组合子词级与词级外部语言模型。时间同步搜索按帧推进：先用声学模型得分扩展当前假设并做声学阶段剪枝，其保留的扩展结果再送入可选的子词级语言模型重打分并再次剪枝。在词典约束下假设沿词汇前缀树延伸，只在到达词尾时才调用词级语言模型更新词历史并回到树根，随后经假设重组与束剪枝得到下一帧的保留集合，得分剪枝能随不确定性自动扩大或缩小该集合。同一话语的多数搜索步只需很少假设，困难区会出现短暂高峰。LibriSpeech 上带词级 Transformer LM（Transformer Language Model，Trafo）的字节对编码（Byte-Pair Encoding，BPE）转换器经词典约束搜索达到 dev-other 3.8% 与 test-other 4.2% WER，同样精度下动态剪枝把搜索 RTF 相对固定束降低 94.6%。结论适用于时间同步的 CTC 与单调转换器搜索，对标签同步与流式搜索尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/rwth-i6/rasr> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/rwth-i6/returnn-experiments/tree/master/2026-search-space> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音识别的搜索要解决什么问题

语音识别的输入是一段声学特征序列，目标是输出最可能的词序列。难点在于同一段发音可以切出多种子词边界，同样的发音也可能对应不同拼写，解码器必须在时间轴上同时保留多个中间假设，再逐步扩展、合并和丢弃。

论文研究的是时间同步搜索，也就是假设严格按输入帧一步一步往前走，每一步的活跃假设都对应同一个输入位置。输出是词或子词序列，准确性用词错误率衡量，越低越好；效率用搜索实时率衡量，即只算搜索部分的耗时除以音频时长，不含编码器前向，越低越快。

在上世纪九十年代到两千年代的大词表连续语音识别时代，每步常常保留几千甚至上 10000 个假设，因此发展出按分数差距剪枝、用词典前缀树组织假设等方法。近年的端到端模型多数时间后验分布很尖锐，概率集中在 1 个类别上，又常用字符或字节对编码子词，不依赖发音词典也能解码。于是很多工作只用 1 到 8 的固定束宽且不加外部语言模型。论文要追问的是，这种小固定束宽在准确性和速度上是否真的够用，特别是在加入外部语言模型、遇到含混语音的时候。

### 已有工具的搜索能力缺了哪一块

论文把比较限定在相同任务和运行阶段的工具搜索能力上，而不是笼统评价工具好坏。Flashlight 支持词典约束和无词典搜索，也支持词和子词级语言模型，但不能对词内假设和词尾假设分别剪枝，也不支持 Transducer 模型。

ESPnet 支持 Transducer 加神经语言模型的子词级搜索，但没有词典和词级能力，而且只有固定束宽剪枝，没有按分数差距自适应保留的动态剪枝。k2 与 icefall 对 CTC 提供了词典和 n-gram 语言模型等选项，神经语言模型只做重打分，对 Transducer 同样缺少按分数阈值的动态剪枝。NeMo 及相关工作把 Transducer 搜索尽量放在图形处理器上并行，避免设备间通信，但这也限制了词级处理和动态剪枝。

这些差异来自输入条件和实现取舍的不同：是否支持词典树、是否在词结尾才调用语言模型、剪枝是固定个数还是按分数差距自适应。论文的切入点是在开源工具 RASR 中实现通用的分阶段剪枝，同时支持 CTC 和 Transducer、子词和词级语言模型、词典无关和词典约束解码，从而在可比条件下观察模型和搜索过程本身的行为，而不是比较某个工具的工程优化高低。

### 为什么只比较 CTC 和单调 Transducer

论文明确把范围限定为时间同步的 CTC 和单调神经 Transducer，因为两者都是逐帧工作，活跃假设数和剪枝统计可以直接比较。注意力编码器解码器、大语音语言模型等是标签同步搜索，一次搜索步可能对应不同输入位置，完成假设的长度也不同，还会引入长度归一化问题，放在一起比较每步假设数会失真，所以不在本文范围内。

任务难度也被分层安排。英语 LibriSpeech 用 960 小时训练，在开发集 dev-other 和测试集 test-other 上评测；异构公开集 Loquacious 用 2500 小时 16 kHz 训练，在聚合多个来源的 dev.all 和 test.all 上评测；自有西班牙语电话语音约 12000 小时 8 kHz 训练，在 4.5 小时测试集上评测，提供更难的跨语言信道条件。

模型词表分字节对编码和带词尾标记的音素两类，LibriSpeech 字节对编码 185 个含空白符、音素 80 个含空白符，Loquacious 为 184 与 80，西班牙语为 63 个音素标签。这样的设计让读者能区分结论来自模型结构、语言模型还是信道难度，而不是把所有差异都归于剪枝方法。

### 搜索一步内先扩展再剪枝再合并

论文的搜索目标是把编码器状态序列映射为分数最高的输出序列。词典无关目标直接在子词序列上求最优，包含子词语言模型分数与声学模型对齐分数；词典约束目标在外层对词序列求最优，内层只考虑能组成合法词的子词序列，并可再加词级语言模型分数。实际实现转到负对数域做加法累积分数，分数越小越好。

算法 1 是词典无关的时间同步束搜索的一步：对束中每个假设与每个输出标签扩展，先加声学分数并做分数剪枝，若有子词语言模型则先做一次中间束宽剪枝以控制转发量，再加子词语言模型分数并再次分数剪枝，最后扩展、按重组上下文合并等价假设，再做最终束宽剪枝。

算法 2 是词典约束的树搜索的一步：先沿词典前缀树的后继扩展子词，再依次做声学剪枝、子词语言模型加分与剪枝、子词级合并与束剪枝，然后处理词尾，加入词级语言模型分数，对词尾单独做分数剪枝、扩展、合并与束剪枝，最后返回词内假设与词尾假设的并集。词内与词尾分开剪枝很关键，可以避免词尾被大量词内假设淹没。

**固定束宽剪枝 × 基于分数阈值的动态剪枝：** 固定束宽剪枝每步只留分数最好的固定 B 个假设，数量恒定；基于分数阈值的动态剪枝保留与当前最优差距在阈值之内的全部假设，困难时自动留得多，容易时留得少。前者控制上限，后者适应不确定性，实际解码中两者叠加使用，先用阈值伸缩，再用最大束宽防止极端爆炸。

按分数差距保留假设的形式是只留下分数不超过当前最优加阈值的集合。

\[\textsc{ScorePrune}(\mathcal{H},\Delta)=\Big\{q\in\mathcal{H}\mid{}\mathrm{score}(q)\leq\min_{q^{\prime}\in\mathcal{H}}\{\mathrm{score}(q^{\prime})\}+\Delta\Big\}\]

固定束宽剪枝只保留分数最好的固定 B 个假设。

\[\textsc{BeamPrune}(\mathcal{H},B)=\mathrm{Top}_{B}(\mathcal{H})\]

纯固定束搜索关闭前者、只用后者。实现中在声学、子词语言模型、词级语言模型每个加分阶段后都可设不同的阈值与束宽，分别记为声学阶段、子词级和词级的束宽与阈值。

### 声学分数与语言模型分数如何相加

声学分数记为 scoreASR，等于负对数声学概率。CTC 把对齐概率写成每帧后验除以先验的 beta 次幂的连乘，先验用于校正空白符与高频符号的偏置，beta 是权重。Transducer 用一个历史标签的有限上下文，预测网络是两层前馈网络，结合器是一层前馈网络，内部语言模型概率用零编码器方法估计，只对非空标签起作用，空白符的内部语言模型项为 1，同样用 beta 做校正。语言模型分数按权重 lambda 加权，词典约束时词级权重记为 lambda1、子词级记为 lambda2。

重组时只保留等价上下文中最好的假设：词典无关下是预测网络状态加子词语言模型历史，词典约束下还要加树状态和词级语言模型历史。

**CTC × Transducer：** CTC 与 Transducer 都是本文研究的逐帧声学模型，输入都是编码器逐帧输出，输出都是包含空白符的对齐分数。CTC 每帧只看当前编码帧，Transducer 还要看上一个非空标签，靠预测网络记住很短的历史。两者放在一起比，可以看出历史依赖是否让搜索空间更大、剪枝更难。

CTC 的声学对齐概率形式如下，连乘范围是全部帧，每项是当前帧后验除以先验校正。

\[p_{\mathrm{ASR}}(y_{1}^{T}\mid h_{1}^{T})=\prod_{t=1}^{T}\frac{p_{\mathrm{CTC}}(y_{t}\mid h_{t})}{p_{\mathrm{Prior}}(y_{t})^{\beta}}.\]

Transducer 的对齐概率同样是连乘，但每项条件包含上一个非空标签与当前编码帧，并除以内部语言模型校正。

\[p_{\mathrm{ASR}}(y_{1}^{T}\mid h_{1}^{T})=\prod_{t=1}^{T}\frac{p_{\mathrm{Transducer}}(y_{t}\mid a(y_{1}^{t-1}),h_{t})}{p_{\mathrm{ILM}}(y_{t}\mid a(y_{1}^{t-1}))^{\beta}}.\]

**词典无关搜索 × 词典约束搜索：** 词典无关搜索直接在子词序列上找最优，不限制是否成词；词典约束搜索只允许能拼成词典中词的子词路径，并在词结尾处加入词级语言模型分数。前者是开放词表，后者是闭合词表，对比两者能看出词典约束在声学不确定时能纠正多少错误，又带来多少额外搜索量。

**子词语言模型 × 词级语言模型：** 子词语言模型对每个非空子词扩展都加分，文中是长短期记忆网络或 Transformer；词级语言模型只在词结尾处加分，文中是 4-gram 或词级 Transformer。前者约束密集但转发次数多，后者只在词尾计算且更容易合并路径。对比两者能解释为何子词模型更慢、词级模型相对便宜。

子词语言模型对每个非空扩展都要前向一次，转发次数多；词级语言模型只在词尾前向，重组也更容易合并只差词内路径的假设。论文还指出音素模型不用词典和词语言模型时无法区分同音词，因此不做无词典无词模型的条件，这是由任务定义决定的，不是剪枝方法的缺陷。

### 模型是怎样训练和配置的

本节说明声学模型如何训练、语言模型从何而来。声学特征是 80 维对数梅尔特征用于 16 kHz 的 LibriSpeech 和 Loquacious，60 维用于 8 kHz 西班牙语，经过卷积前端降采样到 40 毫秒步长，再送入 Conformer 编码器，LibriSpeech 和 Loquacious 用 12 层，西班牙语用 16 层。

LibriSpeech 每模型训练 100 轮，Loquacious 训练 40 轮，西班牙语训练 60 轮，都用单周期学习率调度，并用 SpecAugment、变速扰动、丢弃和权重衰减做正则。Transducer 额外带有预测网络和结合器，历史长度限制为一个标签。

词级实验用 4-gram 语言模型，LibriSpeech 用官方 4-gram，Loquacious 用文献中的 4-gram 配置，西班牙语在自有数据上训练。LibriSpeech 还加了 55,000,000 参数的两层长短期记忆网络子词语言模型，以及约 300,000,000 参数的 96 层 Transformer 子词语言模型和约 430,000,000 参数的词级 Transformer 语言模型。解码实验统一用 RASR 框架，神经部件在 A10 图形处理器上运行，搜索逻辑与 4-gram 在中央处理器上运行，编码器实时率约 3.0 乘 10 的负 3 次方。论文强调结果刻画的是模型与搜索过程，不是 RASR 的专有行为，调好的解码参数与配置已随文给出以便复现。

### 实验比较了哪些条件和指标

比较围绕 3 个问题展开：不同模型与语言模型组合的词错误率和搜索实时率如何；剪枝参数、搜索错误与假设数统计的关系怎样；固定与动态剪枝在相同词错误率下效率差多少。搜索错误指参考转录本分数优于识别结果却被剪掉的分段比例，说明错误来自搜索而非模型本身。假设数统计用中位 p50、分位 p90 与 p99 以及平均值，p50 反映多数时间的常态，p99 反映罕见困难区的峰值。

**词错误率 × 搜索实时率：** 词错误率是认错词数占参考词数的比例，越低越准；搜索实时率是论文定义的搜索耗时除以音频时长，不含编码器前向，越低越快。两者一起看，才能判断在相同准确性下哪种剪枝真正省时间，而不是只看假设数变小。

调参顺序是先把最大束宽设得很大再调分数阈值，然后减小束宽直到性能开始下降。固定基线只用最大束宽剪枝，动态版本在保持词错误率不变的前提下用最紧的分数阈值做额外剪枝，相对耗时下降按固定与动态实时率之比计算。所有解码都区分声学阶段与语言模型阶段的束宽和阈值，语言模型权重与内部语言模型或先验权重也分别调优，Loquacious 的语言模型权重明显更小，这会影响重组与分数跳变幅度，比较时不能忽略。

### 无语言模型时词典和模型带来多大差异

先看无外部语言模型的起点，这能分清词典约束和模型结构各自的作用。比较问题是相同声学模型下加词典约束是否降低词错误率，以及相同解码条件下 Transducer 是否优于 CTC。公平条件是都不加外部语言模型，指标是词错误率，越低越好，括号内为开发集与测试集。

| 条件 | 指标 | 无词典 CTC | 有词典 CTC | 无词典 Transducer |
| --- | --- | --- | --- | --- |
| LibriSpeech 开发集与测试集 | 词错误率 | 7.0 与 7.1% | 6.5 与 6.6% | 6.0 与 5.9% |

上表显示词典约束把无外部语言模型的 CTC 从 7.0 与 7.1% 降到 6.5 与 6.6%，对 Transducer 影响很小；无词典无语言模型时 Transducer 为 6.0 与 5.9%，优于 CTC 的 7.0 与 7.1%，在其他条件也保持 0.3 到 0.7 个百分点的优势。该表只覆盖无语言模型起点，不能代替完整语言模型比较。论文正文补充，全部外部语言模型组合都明显优于单一声学模型，最好达到 3.8 与 4.2% 词错误率；词级 Transformer 总体最准，4-gram 与子词长短期记忆网络在更快时给出尚可精度。限制是 Loquacious 只测到 4-gram 为止，子词 Transformer 很贵且精度并未超过词级 Transformer，这些代价在选型时要一并考虑。

### 搜索空间多数时间很小但偶发高峰

要理解为什么小固定束宽不够，先看假设数随剪枝参数的变化。比较问题是同一模型与语言模型下放宽剪枝能换多少准确性，公平条件是词典约束与词级 Transformer 固定，指标方向是词错误率与搜索错误越低越好、假设数越小越省。下面是 LibriSpeech 上字节对编码 CTC 的条件，分数阈值与束宽从小到大放宽。

| Score Thresh. | Beam Size | WER [%] | Search Err. [%] | #Hypotheses | #Hypotheses | #Hypotheses |
| --- | --- | --- | --- | --- | --- | --- |
| Score Thresh. | Beam Size | WER [%] | Search Err. [%] | p50 | p90 | p99 |
| 0.0 | 1 | 10.4 | 30.4 | 1 | 1 | 1 |
| 4.0 | 16 | 9.4 | 14.7 | 1 | 2 | 7 |
| 8.0 | 128 | 6.7 | 4.9 | 2 | 6 | 41 |
| 12.0 | 256 | 4.8 | 1.3 | 5 | 28 | 242 |
| 16.0 | 256 | 4.6 | 0.6 | 35 | 167 | 254 |

上表呈现阈值 16.0 与束宽 256 时词错误率 4.6%、搜索错误 0.6%，p50 为 35、p90 为 167、p99 为 254。结果支持多数时间小空间够用、罕见区需要大空间的判断，中位需求与尾部峰值差距很大。限制是这只是 LibriSpeech 开发集 dev-other 上的行为，且阈值与束宽是联合调整的，不能单看一列推广到其他语言模型权重。

同条件换成字节对编码 Transducer，达到最优需要更大上限，尾部假设数上千。比较问题不变，只是声学模型换成带历史依赖的 Transducer，公平条件仍是词典约束加词级 Transformer。

| Score Thresh. | Beam Size | WER [%] | Search Err. [%] | #Hypotheses | #Hypotheses | #Hypotheses |
| --- | --- | --- | --- | --- | --- | --- |
| Score Thresh. | Beam Size | WER [%] | Search Err. [%] | p50 | p90 | p99 |
| 0.0 | 1 | 10.0 | 24.1 | 1 | 1 | 1 |
| 4.0 | 16 | 11.0 | 20.3 | 1 | 2 | 6 |
| 8.0 | 128 | 6.9 | 7.2 | 2 | 7 | 51 |
| 12.0 | 256 | 4.2 | 1.7 | 7 | 46 | 250 |
| 16.0 | 1024 | 3.8 | 0.4 | 55 | 433 | 1012 |

上表显示阈值 16.0 与束宽 1024 时词错误率 3.8%、搜索错误 0.4%，p50 为 55、p90 为 433、p99 为 1012。未胜出的小束条件如阈值 0.0 束宽 1 时词错误率高达 10.0%、搜索错误 24.1%，说明贪心或极小束在有外部语言模型时会丢掉正确答案。代价是尾部假设数明显高于 CTC，这与历史依赖和分数动态范围有关。

下面是单条语音随时间的活跃词内假设数曲线，条件是 LibriSpeech 开发集上字节对编码 CTC 与 Transducer 的词典约束加词级 4-gram。读图任务是确认基线与峰值的分布，而不是读出某一步的精确数值，横轴是搜索步，纵轴是活跃词内假设数，蓝色是 BPE CTC，橙色是 BPE Transducer。

> **看图路径：** 1. 先看横轴搜索步与纵轴词内活跃假设数，确认是单条语音随时间的曲线；2. 对比蓝色 BPE CTC 与橙色 BPE Transducer 两条线的基线高度；3. 定位 300 到 400 步附近大峰的高度与宽度

[![原论文 Fig. 1：Illustrative number of active within-word hypotheses at each search step for a selected LibriSpeech…](https://arxiv.org/html/2610.31259v1/active_hyps_over_time.svg)](https://arxiv.org/html/2610.31259v1/active_hyps_over_time.svg)

*论文图 1。原论文 Fig. 1:：“Illustrative number of active within-word hypotheses at each search step for a selected LibriSpeech dev-other utterance with BPE CTC/transducer using lexicon-constrained search…”。*

图中可见两条曲线多数步都贴近零线，中位活跃集很小，但在 300 到 400 步之间出现一个又高又窄的大峰，蓝色 CTC 峰超过 1000，橙色 Transducer 也有数百的隆起，另在 180 步附近有小扰动。这直观解释了 p50 小而 p99 大的统计：困难语音段造成局部不确定性，需要临时保留大量假设，固定小束会在峰处剪错。

### 更难语音上假设需求整体上移

再看声学更难时同一剪枝策略的假设需求如何变化。比较问题是 8 kHz 电话信道下放宽阈值与束宽能换多少准确性，公平条件是音素 CTC 加词级 4-gram 固定，指标是词错误率越低越好、假设数越小越省。下面是自有西班牙语电话集上的统计，包含平均值与分位数。

| Score Thresh. | Beam Size | WER [%] | #Hypotheses | #Hypotheses | #Hypotheses | #Hypotheses |
| --- | --- | --- | --- | --- | --- | --- |
| Score Thresh. | Beam Size | WER [%] | Avg. | p50 | p90 | p99 |
| 0.0 | 1 | 46.6 | 1.0 | 1 | 1 | 1 |
| 4.0 | 128 | 17.9 | 6.1 | 3 | 11 | 79 |
| 6.0 | 512 | 15.5 | 88.3 | 55 | 180 | 512 |
| 8.0 | 1024 | 15.0 | 251.0 | 148 | 675 | 1024 |
| 10.0 | 4096 | 14.9 | 932.2 | 451 | 2926 | 4096 |

上表显示阈值 0.0 束宽 1 时词错误率 46.6%，平均假设 1.0；阈值 10.0 束宽 4096 时词错误率 14.9%，平均假设 932.2，p50 为 451、p90 为 2926、p99 为 4096。这说明在电话信道与更高词错误率下，仅几十个假设远不够，连中位都需要数百个，尾部要到数千。动态剪枝的价值在困难任务更大，它在多数步保持较小活跃集，只在不确定处放行，而固定束若要覆盖尾部就必须全程维持数千假设。限制是这是自有测试集结果，外部无法直接复算，且音素词表与 4-gram 权重是针对该任务调整的，不能把 4096 的上限当成通用推荐。

论文对 Loquacious 的对应分析也显示假设数更低、中位仍小而 p99 相对更高，原因是 4-gram 只看三词历史、重组更容易合并假设，且语言模型权重更小导致分数跳变小，这进一步说明假设数取决于语言模型权重与重组上下文，不能跨表直接比绝对值。

### 固定束宽与动态剪枝在相同准确性下差多少

效率比较的方法是固定最大束宽，对固定基线只用束宽剪枝，对动态版本加最紧且不损伤词错误率的分数阈值，再算相对耗时下降。相对下降等于 100 乘以 1 减动态实时率除以固定实时率，数值越大说明动态剪枝省得越多。

\[\mathrm{RTF\ reduction}\left[\%\right]=100\cdot\left(1-\frac{\mathrm{RTF}_{\mathrm{dynamic}}}{\mathrm{RTF}_{\mathrm{fixed}}}\right).\]

下面两张图是 LibriSpeech 开发集上字节对编码 Transducer 分别加子词长短期记忆网络与词级 Transformer 的搜索实时率对词错误率曲线。读图任务是看同一词错误率下横轴差距，以及动态曲线随束宽增大是否右移很慢，横轴是搜索实时率，纵轴是词错误率，蓝色实线是动态剪枝，橙色虚线是固定剪枝，向左下越好。

> **看图路径：** 1. 看横轴搜索实时率与纵轴词错误率，确认左下方越好；2. 对比蓝色动态剪枝实线与橙色固定束宽虚线的走向；3. 观察低实时率端两者差距是否已经拉开

[![原论文 Fig. 2：Search RTF vs. WER for fixed and dynamic pruning on LibriSpeech dev-other with BPE transducer +…](https://arxiv.org/html/2610.31259v1/score_vs_beam_pruning_librispeech_subword.svg)](https://arxiv.org/html/2610.31259v1/score_vs_beam_pruning_librispeech_subword.svg)

*论文图 2。原论文 Fig. 2:：“Search RTF vs. WER for fixed and dynamic pruning on LibriSpeech dev-other with BPE transducer + subword-level LSTM LM.”。*

子词长短期记忆网络图上可见蓝色动态剪枝实线在左下方，橙色固定虚线向右拖长，同一 4.5% 附近词错误率下动态明显更靠左；束宽增大时固定耗时快速上升，动态只小幅增加。论文的数字表进一步给出束宽 128 时词错误率 4.5%、固定与动态耗时差距对应相对下降 66.2%，这支持外部语言模型越贵、动态剪枝省得越多的判断，但前提是阈值已按该语言模型权重调好，否则省时间会以丢精度为代价。

词级 Transformer 图的横轴范围大得多，说明该条件整体更贵，读图任务同样是看同一准确性下横轴差距。

> **看图路径：** 1. 确认横轴范围比图 2 大很多，说明词级 Transformer 搜索更贵；2. 看蓝色动态剪枝在词错误率下降时横轴几乎不右移；3. 看橙色固定剪枝向右延伸很长才换来小幅下降

[![原论文 Fig. 3：Search RTF vs. WER for fixed and dynamic pruning on LibriSpeech dev-other with BPE transducer +…](https://arxiv.org/html/2610.31259v1/score_vs_beam_pruning_librispeech_word.svg)](https://arxiv.org/html/2610.31259v1/score_vs_beam_pruning_librispeech_word.svg)

*论文图 3。原论文 Fig. 3:：“Search RTF vs. WER for fixed and dynamic pruning on LibriSpeech dev-other with BPE transducer + word-level Transformer LM.”。*

词级 Transformer 图上差异更大：蓝色动态几乎贴着纵轴下降，橙色固定要延伸到横轴搜索实时率 5 到 6（RTF）附近才接近相近词错误率。论文的数字表进一步给出束宽 1024 时词错误率 3.8%、固定实时率 5781 乘 10 的负 3 次方、动态 310 乘 10 的负 3 次方，相对下降 94.6%。这说明大语言模型下固定大束全程保留大量假设非常昂贵，而动态剪枝只在困难处临时放行。

西班牙电话集上音素 CTC 加词级 4-gram 的曲线同样如此，读图任务是确认高基线词错误率下动态是否仍贴近纵轴，横轴是搜索实时率，纵轴是词错误率，蓝色是动态，橙色是固定。

> **看图路径：** 1. 确认这是西班牙语电话语音上音素 CTC 加词级 4-gram 的条件；2. 看纵轴词错误率基线在 15% 附近，远高于英语干净语音；3. 对比固定剪枝向右拖长与动态剪枝贴近纵轴的差异

[![原论文 Fig. 4：Search RTF vs. WER for fixed and dynamic pruning on Spanish telephony with phoneme CTC + word-level…](https://arxiv.org/html/2610.31259v1/score_vs_beam_pruning_spanish.svg)](https://arxiv.org/html/2610.31259v1/score_vs_beam_pruning_spanish.svg)

*论文图 4。原论文 Fig. 4:：“Search RTF vs. WER for fixed and dynamic pruning on Spanish telephony with phoneme CTC + word-level 4-gram LM.”。*

图中蓝色动态从 18% 以上快速降到 15% 附近而横轴几乎不动，橙色固定要向右延伸到搜索实时率 0.2 以上才到相近水平。这说明困难信道下动态剪枝同样有效，但绝对实时率与假设上限仍远高于英语干净语音，不能把相对下降 95% 误读为绝对耗时已很低。未胜出的固定小束虽然耗时低，但词错误率停留在 17% 到 19% 之间，说明省时间是以丢精度为代价。

### 哪些结论有条件哪些还没有验证

论文的适用条件写得很明确。无外部语言模型时贪心已最优，动态剪枝没有优势，相对下降为 0，这在多个无语言模型条件都成立。有外部语言模型时动态剪枝普遍把平均假设与搜索实时率降低约一个数量级，CTC 加 4-gram 的相对下降可达 99% 量级，因为其搜索代价主要在假设扩展与中央处理器 bookkeeping，而 Transducer 与神经语言模型用了批量图形处理器计算，不随活跃集线性增长，因此相对下降的构成不同。

未验证的范围包括标签同步与流式解码，论文明确列为未来工作；更大声学模型与更多训练数据下外部语言模型增益可能变小，文中只是提出方向，没有给出数据。西班牙语结果依赖自有数据与自有 4-gram，外部只能看方法与参数，不能复算同一数字。

把 LibriSpeech 的阈值直接搬到 Loquacious 或电话语音会失配，因为语言模型权重与重组能力不同，这是复现时最容易产生的误解。Loquacious 语言模型权重更小、重组更容易合并假设，所需阈值也更小，跨任务照搬数字会同时影响准确性和效率。

### 复现第一步做什么与参数如何设置

复现第一步是按论文给出的仓库与参数重建搜索，而不是重训声学模型。论文称配置已公开在 returnn-experiments 的 2026-search-space 路径，解码实现用 RASR 框架，支持 CTC 与 Transducer 打分、子词与词级语言模型、词典无关与约束解码及分阶段剪枝。需要区分三件事：代码公开、权重可下载、系统可运行是不同承诺，本文只依据正文给出参数表与仓库链接，不推断权重是否长期可用。

参数表给出每种组合的语言模型权重、内部语言模型或先验权重、声学阶段与语言模型阶段的最大束宽及分数阈值。例如 LibriSpeech 字节对编码 Transducer 加词级 Transformer 用语言模型权重 0.8、内部语言模型权重 0.2、声学束宽 1024、语言模型束宽 64、声学阈值 16.0、语言模型阈值 12.8；Loquacious 多用语言模型权重 0.3 与阈值 6.0 与 3.0；西班牙语用语言模型权重 0.5、先验权重 0.3、声学束宽 4096。

做法是先设很大束宽调阈值，再降束宽直到性能下降，并对声学与语言模型阶段分别设限。硬件方面神经部件在 A10 上、4-gram 与搜索逻辑在中央处理器上，比较实时率时要保持同一划分，否则数字不可比。编码器前向不计入搜索实时率，这一点在对比不同论文的耗时数字时尤其重要。

### 什么时候值得尝试动态剪枝

当解码已加入外部语言模型、尤其是词级 Transformer 或 4-gram，且发现加大固定束宽才能降低词错误率时，值得尝试按分数差距保留假设的动态剪枝。它让活跃集随局部不确定性伸缩，多数时间保持小集合，只在困难段临时放行，从而在相同词错误率下显著降低搜索耗时。无外部语言模型或已用贪心达到最优时，不必引入动态剪枝。

还需要补的验证是更大模型与更多数据下的增益是否持续，以及流式与标签同步搜索下的假设统计是否仍呈小中位大尾部的形状。总体上，论文不支持抛弃外部语言模型与动态剪枝的简化做法，但也不承诺所有任务都有相同幅度的加速，实际收益取决于语言模型权重、重组上下文、声学难度与软硬件划分。

对刚入门的研究生而言，可复述的关键步骤是：逐帧扩展假设，按声学分数先剪一次，加语言模型分数再剪一次，合并等价上下文，最后按束宽截断；词内与词尾分开处理；调参时先放宽束宽定阈值，再收紧束宽找拐点。记住中位小、尾部大的形状，就能理解为什么固定小束平时够用、困难处却会出错。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.31259v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-23 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-23/)
