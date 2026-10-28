---
title: "Does Notation Matter? MusicXML Tokenisation for Symbolic Music Generation and Understanding"
date: 2026-10-27
draft: false
tags: [符号音乐生成, 音乐分析, 自回归模型, 主观评测]
categories: [论文速递]
description: "论文用 26 个自回归与掩码模型对照 MusicXML、MIDI 与 ABC 三种表示，显示 MusicXML 在理解任务全面领先、在生成任务的分布相似度与人工偏好上占优，而分块顺序与 BPE 词汇量带来互补的代价。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.34247"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "乐谱的丰富记号对建模有帮助吗：MusicXML 分词与理解生成对照"
paper_digest_original_title: "Does Notation Matter? MusicXML Tokenisation for Symbolic Music Generation and Understanding"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.34247v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.34247v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.34247v1.pdf"
paper_digest_primary_task: "符号音乐生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.symbolic-music","label":"符号音乐生成"},{"facet":"task","id":"task.music-understanding","label":"音乐分析"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文用 26 个自回归与掩码模型对照 MusicXML、MIDI 与 ABC 三种表示，显示 MusicXML 在理解任务全面领先、在生成任务的分布相似度与人工偏好上占优，而分块顺序与 BPE 词汇量带来互补的代价。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Andrea Poltronieri"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Matteo Spanio"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Simone Chieppa"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xavier Serra"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Martín Rocamora"}]
paper_digest_abstract_sha256: "ed95e21194b0a0b74b5df3428c41d1016166a92c56503e0579c7ba428acc5cdd"
paper_digest_sidecars: {"citation.bib":{"sha256":"eeb8eda3be02647a88cfefdc7e8faa865ac7c895f2aab3dd7c39b92633406231","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34247/citation.bib"},"citation.json":{"sha256":"34b641baa2b78be8c15ae74f59f325e689f282d8a79d6cd859f0f0d8df6f3cc0","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34247/citation.json"},"citation.ris":{"sha256":"20181a66fb4fcccab399ed56ff423798e6e7b41111e9cfbbe1f02305c3be2f86","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34247/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"292db48fd75584b08839431280e2584b8bb5c9e406f27ea89922509e214f38ba","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34247/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "3bfda653fd298b716179e9e83eb2235e903e123bba6e248941258822e6b3d308"
paper_digest_api_reader_plan_sha256: "08047ba66f008e76b588632b5582581e5e36ba4fd8b83d0c809aa41f9fa640e9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2be4e2493e8b6ef322db1baa9919ee4e530766b1e6bd555f548f470e1fa38d28"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "1b11c9f994b510f21b168721f8e54e13dda7c917d144edfecc04b628ff8cdd02"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "590d31c0c13ca821a0e239fffca82548172e89d2c95f8a52abd9a349c3b2f688"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "03f51e6407d3a634a6bde4087b7d9e7f7be93286d055f75b4d02ce2752293325"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 乐谱的丰富记号对建模有帮助吗：MusicXML 分词与理解生成对照

> 英文题目：*[Does Notation Matter? MusicXML Tokenisation for Symbolic Music Generation and Understanding](https://arxiv.org/abs/2610.34247v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐生成](/audio-paper-digest-blog/papers/?concept=task.music-generation) → [符号音乐生成](/audio-paper-digest-blog/papers/?concept=task.symbolic-music)；[音乐分析](/audio-paper-digest-blog/papers/?concept=task.music-understanding)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [自回归模型](/audio-paper-digest-blog/papers/?concept=method.autoregressive)；[人类参与评测](/audio-paper-digest-blog/papers/?concept=method.human-evaluation) → [主观评测](/audio-paper-digest-blog/papers/?concept=method.subjective-evaluation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Andrea Poltronieri：机构信息未能在本次解析中与作者逐人可靠绑定
- Matteo Spanio：机构信息未能在本次解析中与作者逐人可靠绑定
- Simone Chieppa：机构信息未能在本次解析中与作者逐人可靠绑定
- Xavier Serra：机构信息未能在本次解析中与作者逐人可靠绑定
- Martín Rocamora：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是符号音乐的不同写法，困难在于演奏记录与完整乐谱包含的信息量不同，而模型看到的只是离散记号序列。论文把MusicXML乐谱变成记号序列，用自回归模型（Autoregressive Model，指按顺序预测下一个记号的模型）做续写，用掩码语言模型（Masked Language Model，指遮住部分记号并预测的模型）提特征做理解任务。处理过程是解析MusicXML的声部、小节与音符属性，按声部优先或小节优先两种顺序展开，再决定是否用字节对编码（Byte Pair Encoding，BPE，指合并高频记号对的子词方法）压缩。与把乐谱当纯文本的ABC方法和只记演奏事件的MIDI方法相比，新框架保留了异名同音拼写、力度、装饰与多声部结构。在KernScores作曲家分类五折交叉验证中，准确率指标上小节优先的MusicXML分词器MxlTok-MF的10k词表为0.781，高于同为10k词表的MIDI基线REMI+的0.748。在以PDMX R∩D子集训练分布为参考、每模型按20个提示各生成10首的客观统计评估中，JS指标上声部优先的MxlTok-PF的5k词表为89.2，高于同为5k词表的MIDI基线REMI+的79.4，人类成对偏好也更偏向MusicXML续写。结论适用于古典与folk占比较大的公共领域乐谱，跨风格与更大规模训练尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/andreamust/MxlTok> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 符号音乐有哪些表示，任务要保留什么信息

符号音乐的输入是一组离散音乐事件，目标是让模型理解风格结构或续写新的乐段。必须保留的信息包括音高、节奏、调号拍号、声部归属，以及乐谱特有的异名同音拼写、力度与渐强弱记号、速度标记、断奏等演奏法、和弦记号、反复记号与多声部分层。输出在理解任务中是类别或检索排序，在生成任务中是可合成试听的完整乐谱。

**MusicXML × MIDI × ABC 记谱：** MusicXML 指层次化保存声部、小节、音高拼写、力度与装饰音的乐谱交换格式，MIDI 指记录音高、力度与时间的演奏行为格式，ABC 记谱指用纯文本字符记录单声部旋律的简谱格式；三者分工在于完整性与通用性不同，放在一起比较才能区分模型提升来自记谱信息还是来自切分技巧。

论文区分了两组轴线。一是规定性与描述性：乐谱规定应该怎么演，抽象掉具体一次演奏的细微抖动；演奏记录描述实际弹了什么，保留力度与时间偏差但丢失记谱层级。二是完备性与通用性：能忠实重建原谱的能力，与能表示操作高层结构的能力。MIDI 偏向后者中的演奏端，ABC 偏向单声部文本端，MusicXML 偏向层次化乐谱端。理解这组差异是后面所有对照的前提，否则容易把分词技巧的改进误读为表示本身的胜利。

### MIDI 分词与乐谱分词此前做到哪一步

MIDI 分词已有统一工具 MidiTok，常见策略从直接编码事件，到显式加入小节与时值标记的 REMI 系列，再到合并属性以缩短序列的池化嵌入方法。论文以 REMI+ 和 Octuple 为 MIDI 基线，前者在多轨与多拍号下给每个音符事件前加音色号，后者把多属性合并但原始设计需要多头输出。已有工作还发现字节对编码合并高频记号对能在生成与理解上带来好处，时值表示方式的影响则随任务而变，但这些结论都只在 MIDI 内成立。

乐谱端的研究少得多。基于 ABC 的生成模型把乐谱当纯文本，用通用子词分词器切分，音高概念不是原子记号，例如一个带变音的音需要多个字符组合才能暗示音高，且多声部靠非标准扩展实现，方言互不兼容。MusicXML 端只有任务专用尝试：钢琴改编分词只覆盖基础记号且限钢琴，光学乐谱识别用的 LMX 丢弃力度踏板且不支持多声部与反复，另有工作把 REMI 思想搬到 MusicXML 但仍是 MIDI 事件语法，只做乐曲级分类。本文要补的是通用 MusicXML 分词框架与跨格式受控比较。

### 论文要回答的具体问题是什么

核心问题是记谱丰富度是否给深度学习带来可测量的好处。具体拆成 3 组对照：同一批乐曲用 MusicXML、MIDI、ABC 表示时模型表现是否不同；在 MusicXML 内部，小节优先与声部优先两种串行顺序是否有差异；音乐语法感知的分词是否优于把乐谱当纯文本的通用切分。每组对照都在自回归与掩码两种架构下重复，并考察是否使用字节对编码。

为避免混淆，论文把分词作为受控变量。训练数据固定为 PDMX 同一子集再分别转格式，模型规模固定为约 20M 参数的 6 层 8 头结构，生成时给所有模型相同的声部数与乐器名条件。这样若 MusicXML 占优，更可能是信息本身的作用，而不是数据量或模型容量不同造成的。

### 整体流程：从 MusicXML 乐谱到模型输入输出

拿一个 MusicXML 乐谱为例，它按声部、分谱表、声部线、小节、音符组织，还带有力度、演奏法、速度、和声与反复信息。MxlTok 先解析这棵树，再按选定的串行顺序线性化为记号流，每个音符表示为一组有序记号：前缀修饰如倚音与和弦音标记，词根表类型与时值如四分音符、八分音符，后缀修饰如附点、连音起止、力度与演奏法。声部、符干与谱表采用增量编码，只在取值相对上一事件变化时才输出，以节省长度。

得到的记号流有两种去向。自回归分支用 GPT-2 从头预测下一记号，用于续写；掩码分支用 BERT 做双向编码，抽取上下文嵌入用于下游探测。字节对编码是可选的压缩层，在每种分词配置上独立训练 5k 与 10k 两种词表。基础词表约 750 个，明显大于 MIDI 分词常见的 200 到 400 个，这是记谱元素多带来的直接代价：序列更长，词表更大。

### MxlTok 如何表示一个音符及其上下文

沿着一个带断奏的四分音符 C4 叠在 C 大三和弦上的例子，REMI+ 只记录音高、时值与小节位置类的演奏事件，MxlTok 则额外记录和声与记谱上下文。做法是把音高拼写、C 自然而非 B 升这类异名信息保留为显式记号，把断奏、力度、声部归属也拆成独立记号，并允许微分音变化以兼容非西方传统。

**MxlTok × REMI+ × Octuple：** MxlTok 指本文为 MusicXML 设计的通用分词框架，把音符属性拆成前后缀记号并保留层次结构，REMI+ 指在小节与时值显式标记基础上加音色号的多轨 MIDI 分词，Octuple 指把多个音符属性合并为一个池化嵌入以缩短序列的 MIDI 分词；三者分工是同一乐曲内容的不同离散化方式，对照它们可以检验记谱丰富度的作用。

框架沿用 MidiTok 的可扩展设计，提供基类与词表构建、字节对编码训练和数据预处理，内置默认 mxl 分词器以及套用 MIDI 思路的 REMI+ 与 Octuple 变体。用户可派生自定义策略，覆盖格式相关方法，还可配置基于音程的音高编码与移调增强，但本文实验主要用默认 mxl 的两种串行顺序加字节对编码变量。

### 两种串行顺序改变了什么，没有改变什么

声部优先逐乐器串行该乐器的全部小节，小节优先则以小节为主，每小节内把各声部成块并排放完再进入下一小节。论文强调两种策略都是无损的，编码的音乐内容相同，改变的只是同时发声素材在记号流中的距离。小节优先让同一时刻的不同声部在序列上相邻，代价是跨声部穿插；声部优先让同一乐器的长线条连续，代价是同时性被拉远。

**声部优先 × 小节优先：** 声部优先指按乐器声部逐个串行全部小节，对应 MusicXML 的 score-partwise 组织，小节优先指同一小节内并排串行各声部再进入下一小节，对应 score-timewise 组织；两者编码内容无损且相同，但同时发声素材在序列中的距离不同，因而给模型带来不同的归纳偏置。

这种距离差异会影响注意力需要跨越的长度。理解任务可能受益于局部同时性，生成任务可能受益于长线条连贯，究竟哪种更好是经验问题，需要看作曲家分类、难度估计、伴奏推荐与续写的实测，而不是从标准文档的字面去猜。

### 字节对编码与纯文本切分在本研究中的含义

字节对编码在本研究中指在每种分词配置上独立学习 5k 或 10k 词表，迭代合并最高频相邻对。它能把常见节奏型、常用和弦进行或固定修饰组合压成一个记号，缩短序列，但也会模糊细粒度边界。Octuple 因本身已有池化压缩而不做字节对编码。

**字节对编码 × 词级纯文本分词：** 字节对编码指从基础词表出发迭代合并最高频相邻记号对直到达到目标词表大小的子词学习方法，词级纯文本分词指把 ABC 乐谱当作普通字符流直接切分而不利用音乐语法；前者压缩高频组合，后者保留字符原样，对比二者可以检验音乐语法先验是否有必要。

纯文本基线指 ABC 乐谱经 xml2abc 转换后，用 HuggingFace 通用字节对分词器切分，与此前 MuPT 与 NotaGen 把 ABC 当字符序列的做法一致。它不利用小节、声部、音符属性的语法，只是统计字符共现。比较它与 MxlTok，就是在检验音乐语法先验是否值得专门编码。

### 训练数据、模型规模与训练过程如何控制

训练数据固定为 PDMX 第 5 版中同时满足去重与有评分的子集，约 13K 份乐谱，总库从 254K 逐级过滤为去重 102K、有评分 14K。去重按标题嵌入相似与音符数聚类，每类保留评分最高编配，评分来自 MuseScore 社区作为质量代理。论文沿用已有消融结论，认为评分过滤比单纯扩大规模更有效。该子集以古典与民谣为主，兼有摇滚流行爵士与影视，记谱内容不是点缀：53% 带力度、50% 带演奏法、61% 至少有一个从音级无法恢复拼写的音。

26 个模型全部从零训练，GPT-2 做生成，BERT 做理解，均为 6 层 8 头隐维 512，约 20M 参数，与先前在同一数据上的配置一致，以保证差异归因于分词。训练上限 100k 步并按验证损失早停，耐心 1500 步，因为加与不加字节对编码的序列长度差异大，收敛速度不同。自回归生成序列在起始符后先接声部数与乐器名，保证跨分词公平比较。权重与预处理后数据计划公开，7 个 MusicXML 预训练模型覆盖全部 MxlTok 配置。

### 理解与生成任务如何测量，条件是否一致

理解用线性探测：冻结 BERT 上下文嵌入，只训练两层隐维 512 的线性分类器。作曲家识别用 KernScores 转 MusicXML 的 1968 份 20 位作曲家均衡集，五折交叉验证；难度估计用 CIPI 的 652 首古典钢琴 9 级难度集，报告 9 分类准确率与正负 1 级内容差准确率，数值越大越好；伴奏推荐用 Wikifonia 的 5000 份主音谱，把旋律与伴奏拆成正对、错配为负对，按检索报告平均精度与 HITS@1、HITS@5，越大越好。另有消融把同一批乐谱先转 MIDI 再转回 MusicXML 与 ABC，以隔离表示丰富度与分词技巧。

**线性探测 × Bradley-Terry 偏好得分：** 线性探测指冻结掩码语言模型的上下文嵌入只训练两层线性分类器来做作曲家、难度与伴奏任务，Bradley-Terry 偏好得分指从成对试听胜负中估计每个生成模型的隐含质量分；前者衡量表征中可线性读出的乐理信息，后者衡量人耳听感的相对排序，两者分工不同，不能互相替代。

生成分客观统计与人工成对偏好。客观侧用多声部率、音阶一致性、 groove 一致性三项分布与训练集参考分布的 Jensen-Shannon 散度均值，再换算为 JS 分，越大表示与目标语料分布越接近，条件固定为相同声部数、乐器、调号拍号，每模型 20 个提示各 10 条共 200 首，最长 2048 记号。人工侧从训练未用子集抽 7 轨，每轨以前 4 小节加 4 个记号为提示续写 12 小节，8 个模型单字节对变体两两比较，16 名平均 Gold-MSI 5.5 分的被试每人 30 组共 960 次判断，从保真度、正确性、多样性与总体 4 维选更优，再用 Bradley-Terry 模型估计隐含分并中心化，分数越高越受偏好。

### 不同记谱表示支持哪些记号元素

要解释后面胜负，先看表示本身能编码什么。下表比较 MIDI、ABC、LMX 与 MxlTok 对异名拼写、力度与渐强弱、速度标记、演奏法与装饰音、和声与多声部结构、反复记号的支持程度，完全支持、部分支持与不支持分别标记，这是理解信息差的起点。

| Feature | MIDI | ABC | LMX | MxlTok |
| --- | --- | --- | --- | --- |
| Enharmonic spelling | ✗ | ✓ | ✓ | ✓ |
| Dynamics & hairpins | ∼ | ✓ | ✗ | ✓ |
| Tempo markings | ∼ | ✓ | ✗ | ✓ |
| Articulation & ornaments | ✗ | ∼ | ✗ | ✓ |
| Harmony / chord symbols | ∼ | ∼ | ✗ | ✓ |
| Multi-part score structure | ∼ | ∼ | ✗ | ✓ |
| Repeat signs | ✗ | ✓ | ✗ | ✓ |

表中可见 MxlTok 是唯一对所列元素全部完全支持的表示，MIDI 在多项上缺失或部分支持，ABC 在力度速度反复上较全但多声部与和声部分支持，LMX 则丢弃多项表现力记号。这意味着转 MIDI 或经 MIDI 中转必然丢失拼写与层级信息，后面的消融正是利用这一点：若优势来自信息而非切分技巧，经 MIDI 中转的 MxlTok 应退化到 MIDI 水平。

### 实验覆盖了哪些分词与模型组合

下表是全部 26 个模型的实验条件，列出每种分词器对应的符号格式、字节对编码词表与训练的架构。读表时注意 Octuple 两变体只训 BERT 不做生成，ABC 用词级通用分词，其余 MusicXML 与 REMI+ 覆盖无字节对、5k 与 10k 三档并同时训 GPT 与 BERT，这是后文读写理解表与生成表列名的依据。

| Tokeniser | Format | BPE | GPT | BERT |
| --- | --- | --- | --- | --- |
| MxlTok–PF | MusicXML | none, 5k, 10k | ✓ | ✓ |
| MxlTok–MF | MusicXML | none, 5k, 10k | ✓ | ✓ |
| REMI+ | MIDI | none, 5k, 10k | ✓ | ✓ |
| ABC | ABC | none, 5k, 10k | ✓ | ✓ |

该设计保证三轴对照都有对应格：MusicXML 内部有声部优先与小节优先，跨格式有 MusicXML 对 MIDI 对 ABC，分词语法有音乐专用对通用子词。字节对编码在除 Octuple 外的所有分词上评估，避免把压缩策略的红利只算给某一方。生成评估排除 Octuple，因其在自回归生成上已知偏弱，不让已知不适配的组合拉低平均。

### 理解任务：三项探测显示什么，限制在哪

三项理解任务的探测结果放在下表中，比较问题是 MusicXML 的 MxlTok 相对 MIDI 的 REMI+ 与 Octuple 以及 ABC 纯文本，在作曲家分类、难度估计和伴奏推荐上是否有优势。列为作曲家准确率与宏平均 F1、难度 9 分类准确率与正负 1 级准确率、伴奏推荐的平均精度与 HITS@1、HITS@5，以及同源 MIDI 中转消融的准确率与 F1。每列越大越好，标准差均小于 0.05 故省略，读数时需对照数据集与划分：作曲家是 20 类均衡五折，难度是 9 级五折预设划分，伴奏是 5000 谱检索。

| Format | Tokenizer | BPE | Acc | Macro F1 | Acc-9 | Acc-±1 | MAP | H@1 | H@5 | Acc | Macro F1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MusicXML | MxlTok-MF | 10k | 0.781 | 0.777 | 0.303 | 0.695 | 0.779 | 0.650 | 0.949 | 0.735 | 0.732 |
| MusicXML | MxlTok-MF | 5k | 0.775 | 0.772 | 0.301 | 0.650 | 0.810 | 0.695 | 0.965 | 0.733 | 0.725 |
| MusicXML | MxlTok-MF | None | 0.769 | 0.765 | 0.278 | 0.619 | 0.815 | 0.702 | 0.973 | 0.701 | 0.690 |
| MusicXML | MxlTok-PF | 10k | 0.753 | 0.747 | 0.277 | 0.659 | 0.777 | 0.652 | 0.952 | 0.675 | 0.668 |
| MusicXML | MxlTok-PF | 5k | 0.746 | 0.741 | 0.246 | 0.620 | 0.804 | 0.687 | 0.958 | 0.678 | 0.667 |
| MusicXML | MxlTok-PF | None | 0.763 | 0.759 | 0.258 | 0.608 | 0.803 | 0.680 | 0.966 | 0.672 | 0.664 |
| MusicXML | Octuple | None | 0.742 | 0.735 | 0.242 | 0.603 | 0.750 | 0.618 | 0.931 | 0.680 | 0.664 |
| MIDI | REMI+ | 10k | 0.748 | 0.739 | 0.229 | 0.608 | 0.721 | 0.573 | 0.922 | 0.734 | 0.724 |
| MIDI | REMI+ | 5k | 0.744 | 0.735 | 0.228 | 0.551 | 0.726 | 0.579 | 0.925 | 0.743 | 0.729 |
| MIDI | REMI+ | None | 0.721 | 0.708 | 0.261 | 0.667 | 0.724 | 0.579 | 0.924 | 0.735 | 0.725 |
| MIDI | Octuple | None | 0.716 | 0.710 | 0.241 | 0.622 | 0.614 | 0.458 | 0.820 | 0.725 | 0.717 |
| ABC | Word-level | 10k | 0.705 | 0.698 | 0.272 | 0.632 | 0.602 | 0.445 | 0.814 | 0.676 | 0.668 |
| ABC | Word-level | 5k | 0.715 | 0.707 | 0.256 | 0.633 | 0.595 | 0.432 | 0.811 | 0.674 | 0.666 |
| ABC | Word-level | None | 0.707 | 0.703 | 0.267 | 0.660 | 0.556 | 0.382 | 0.770 | 0.668 | 0.660 |

主要读数是小节优先的 MxlTok 在作曲家与难度上居首，例如小节优先 10k 在作曲家准确率 0.781 与 F1 0.777 领先，难度正负 1 级 0.695 居首；伴奏推荐上 MusicXML 无字节对版本平均精度 0.815 与 HITS@5 0.973 居首。MIDI 的 REMI+ 居中，ABC 在难度上偶居第二但在伴奏上明显落后。字节对编码在作曲家与难度上有稳定增益，10k 略优或持平 5k，但在伴奏检索上不增益，5k 反而优于 10k，提示大词表在 13K 训练集上可能过参数化。Octuple 偏弱，论文归因于其池化未考虑 MusicXML 新增的表现力记号。

限制是结论只在冻结嵌入加线性头的探测范式下成立，换全量微调或更大模型可能变化；消融显示经 MIDI 中转后 MxlTok 退化到 MIDI 水平，支持优势来自记谱内容而非切分花招。

### 生成任务：分布相似度与人耳偏好是否一致

生成评估的客观统计与人工偏好放在下表中，客观列为多声部率、音阶一致性、groove 一致性与综合 JS 分，JS 越大越接近参考语料；人工列为保真度、正确性、多样性与总体的 Bradley-Terry 中心化分，越大越受偏好。注意人工只测无字节对与 5k 两档，10k 只看客观，这是为控制被试疲劳。

|  |  |  | Statistical Evaluation | Statistical Evaluation | Statistical Evaluation | Statistical Evaluation | User Study | User Study | User Study | User Study |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Format | Tokenizer | BPE | PR | SC | GC | JS ↑ | Fidelity ↑ | Correctness ↑ | Diversity ↑ | Overall ↑ |
| MusicXML | MxlTok-MF | 10k | 28.6 | 0.98 | 0.90 | 87.0 | – | – | – | – |
| MusicXML | MxlTok-MF | 5k | 29.6 | 0.98 | 0.87 | 88.3 | 0.26 ± 0.34 | 0.30 ± 0.33 | 0.40 ± 0.33 | 0.49 ± 0.34 |
| MusicXML | MxlTok-MF | – | 21.2 | 0.98 | 0.85 | 84.5 | 1.19 ± 0.38 | 0.63 ± 0.34 | 0.41 ± 0.33 | 0.60 ± 0.34 |
| MusicXML | MxlTok-PF | 10k | 20.9 | 0.96 | 0.79 | 85.6 | – | – | – | – |
| MusicXML | MxlTok-PF | 5k | 26.5 | 0.94 | 0.84 | 89.2 | 0.09 ± 0.34 | -0.07 ± 0.33 | 0.22 ± 0.33 | 0.19 ± 0.34 |
| MusicXML | MxlTok-PF | – | 19.3 | 0.99 | 0.76 | 78.0 | 0.60 ± 0.35 | 0.60 ± 0.34 | 0.89 ± 0.36 | 0.81 ± 0.36 |
| MIDI | REMI+ | 10k | 41.6 | 0.94 | 0.96 | 81.5 | – | – | – | – |
| MIDI | REMI+ | 5k | 46.9 | 0.94 | 0.96 | 79.4 | -0.70 ± 0.36 | -0.49 ± 0.34 | -0.23 ± 0.33 | -0.50 ± 0.35 |
| MIDI | REMI+ | – | 40.4 | 0.95 | 0.97 | 77.4 | 0.54 ± 0.35 | 0.52 ± 0.34 | 0.20 ± 0.33 | 0.51 ± 0.34 |
| ABC | Word-level | 10k | 19.5 | 0.99 | 0.98 | 52.6 | – | – | – | – |
| ABC | Word-level | 5k | 19.8 | 0.98 | 0.96 | 56.0 | -0.46 ± 0.34 | -0.31 ± 0.33 | -0.57 ± 0.34 | -0.69 ± 0.35 |
| ABC | Word-level | – | 16.6 | 0.98 | 0.97 | 50.6 | -1.46 ± 0.42 | -1.18 ± 0.39 | -1.32 ± 0.40 | -1.40 ± 0.42 |

客观上 MxlTok 的 JS 分全面高于基线，声部优先 5k 的 89.2 最高，小节优先 5k 的 88.3 次之，REMI+ 在 77 到 81 区间且多声部率更高约 40 上下，ABC 词级在 50 到 56 区间最低，说明纯文本词切分的分布偏离参考最远。人工排序与客观大体一致：ABC 最低，MIDI 略低于 MusicXML；MusicXML 内部声部优先总体 0.81 与多样性 0.89 最高，小节优先保真度 1.19 与正确性 0.63 领先，显示两种顺序的互补偏置。与此前文献不同，字节对编码在此未提升听感，论文归因于本次在全序列上学合并而非小节内合并，可能破坏提示边界处的续写。未胜出项要明说：REMI+ 多声部更丰富但 JS 与偏好未赢，5k 优于 10k 同样指向小数据下大词表的代价。

### 这些结论在什么条件下才成立，有哪些缺口

成立条件很具体。数据是 PDMX 已评分去重子集，以古典民谣为主，结论外推到爵士即兴或非西方微分音乐需另验，尽管框架支持微分音。模型是 20M 小模型加早停，大模型或全量微调可能改变排序。理解结论依赖线性探测与指定划分，生成客观结论依赖所选三项统计与 JS 换算，人工结论依赖 16 名高音乐素养被试、特定提示长度与每模型约 120 次比较，换人群或提示可能不同。

缺口包括未报告训练算力与推理延迟，不能承诺效率改善；未测长曲结构保持与反复记号的实际生效；伦理上虽只用 CC-0 与公有领域乐谱，但部分编配的底层作品可能仍在版权期内，许可证元数据只是最佳可用信号。来源未确认不是技术缺陷，链接本次不可达只说明可达性未知。

### 若要复现，第一步做什么，需要哪些细节

第一步是拿到 PDMX 第 5 版的已评分去重子集，并按论文方式准备三格式：MIDI 直接取数据集自带，ABC 用 xml2abc 从 MusicXML 转换，MusicXML 保留原谱。接着安装 MxlTok 并用默认 mxl 分词器分别跑声部优先与小节优先，再为每种配置独立训练字节对编码 5k 与 10k，注意 Octuple 不做字节对编码。

模型按 GPT-2 与 BERT 各 6 层 8 头隐维 512 从零训练，上限 100k 步早停耐心 1500 步，生成时在起始符后加声部数与乐器名条件。评估时理解任务冻结嵌入加两层线性头，严格用原文划分与五折；生成任务固定声部乐器调号拍号条件，每模型 200 首算 JS 分，人工需同提示成对比较并用 Bradley-Terry 中心化。作者资源当前是否可用需以本次收到的可用性标注为准，第三方链接只证明论文提到过，不能当作已开源。

### 什么时候值得尝试 MxlTok，还需补哪项验证

当任务依赖记谱语义时值得尝试：作曲家风格、难度估计、需区分异名拼写与声部归属的分析，以及需要输出带力度演奏法、可直接制谱的生成。若只有 MIDI 且关心多声部密度，REMI+ 仍是轻量选择；若语料全是单声部民谣且工具链已是 ABC，换 MusicXML 的收益可能被转换成本抵消。

建议按需求选顺序：要线性可读的风格特征优先试小节优先，要人耳多样性与总体偏好优先试声部优先，数据只有十几 K 时先试 5k 而非 10k。还需补的验证是更大模型与全量微调下的排序、跨流派与跨文化的泛化、字节对编码在小节内合并与全序列合并的直接对照，以及反复与和声标记对长结构生成的因果影响。教学例子仅为讲解：把 C4 断奏四分音符叠 C 大三和弦分别走 3 种表示，观察拼写与演奏法记号在哪里丢失，不能当作实测效果。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.34247v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
