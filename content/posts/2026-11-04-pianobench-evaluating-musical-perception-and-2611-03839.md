---
title: "PianoBench: Evaluating Musical Perception and Reasoning in Language Models"
date: 2026-11-04
draft: false
tags: [音乐分析, 基准设计, 基准测试, 数据集]
categories: [论文速递]
description: "PianoBench 用同一钢琴片段的音频和乐谱文本两种输入考查模型，发现开源音频模型几乎不能从声音中提取答题线索，而前沿模型在给定显式音符加思维链时可达 93.2%，交错排列的教学讲解与演奏记录则能把 Qwen 3.5 9B 无思维链的文本推理从 42.8% 提升到 56.0%。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.03839"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "听得见和看得懂之间：PianoBench 如何区分音乐感知与推理"
paper_digest_original_title: "PianoBench: Evaluating Musical Perception and Reasoning in Language Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.03839v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.03839v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.03839v1.pdf"
paper_digest_primary_task: "音乐分析"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.music-understanding","label":"音乐分析"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "PianoBench 用同一钢琴片段的音频和乐谱文本两种输入考查模型，发现开源音频模型几乎不能从声音中提取答题线索，而前沿模型在给定显式音符加思维链时可达 93.2%，交错排列的教学讲解与演奏记录则能把 Qwen 3.5 9B 无思维链的文本推理从 42.8% 提升到 56.0%。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Louis Bradshaw"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Irmak Bukey"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Daniel Chenyu Lin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"John Thickstun"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chris Donahue"}]
paper_digest_abstract_sha256: "2b205ccb3cc4c48989875a0428ddafc3225d7f5331454cf1602f487357de40b8"
paper_digest_sidecars: {"citation.bib":{"sha256":"216848fda372a6e6785655046a476487cf38808ca56626c2660dcf19ce4316ef","url":"/audio-paper-digest-blog/client/papers/2026-11-04/2611-03839/citation.bib"},"citation.json":{"sha256":"20ec1a496d0be58fcda842996727e39e9d86933e5a94b7413593fed5c194ac38","url":"/audio-paper-digest-blog/client/papers/2026-11-04/2611-03839/citation.json"},"citation.ris":{"sha256":"966a95d2626b0d5a5f514839cbe7c3b36b96e925f7c1f2d73b63a50fcc59bb01","url":"/audio-paper-digest-blog/client/papers/2026-11-04/2611-03839/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"a0ea45b8c1a7234537ac5dd434c8857f4bf0aca87e293c766cc582b02402ba54","url":"/audio-paper-digest-blog/client/papers/2026-11-04/2611-03839/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "7ba2d982eb33a8811562fcca7df88bbc30488dae4ddce3ef91c5f697a5b5d24a"
paper_digest_api_reader_plan_sha256: "64119e1de648c2c8ab343d15a01cfc57a1853d27838693bb55b5294d6784359f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "e92e5be44d8dd55d7036e414964e3be4823a09db15f1a2798e2e3cd73bd695d2"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "5bc20c7b8a2e7ed8e55afcecaeb214d5f49ab3ff2cd5f9d44793cd9a026bcad8"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "6b4a6e709ff63db0fa8776aa53e98e5be2609267036fa8dcc7d64f1e13a4501b"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "2946521340581b3bca87989502e094f47ba3fb667de480dd7e465d612b49d9ba"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 听得见和看得懂之间：PianoBench 如何区分音乐感知与推理

> 英文题目：*[PianoBench: Evaluating Musical Perception and Reasoning in Language Models](https://arxiv.org/abs/2611.03839v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐分析](/audio-paper-digest-blog/papers/?concept=task.music-understanding)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)；[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5


## 👥 作者与机构

- Louis Bradshaw：机构信息未能在本次解析中与作者逐人可靠绑定
- Irmak Bukey：机构信息未能在本次解析中与作者逐人可靠绑定
- Daniel Chenyu Lin：机构信息未能在本次解析中与作者逐人可靠绑定
- John Thickstun：机构信息未能在本次解析中与作者逐人可靠绑定
- Chris Donahue：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

论文要判断语言模型究竟能从声音中听出哪些音乐特征，又能在音符事件直接给定时推理出哪些，任务是针对短钢琴片段回答从局部音符、和弦细节到伴奏与风格的选择题，难点是声音中这些特征交织难分离，而符号转录又直接给出音高与时值。方法先爬取教学钢琴视频，用声源分离得到钢琴演奏并转写讲解语音与钢琴MIDI，形成带时间戳的交错文档PianoTalk。再从其测试集构造250道人工核验选择题PianoBench，同一乐段可呈现为分离后钢琴录音、转录重合成声音或文本音符表，另设无音乐对照以检验仅靠题面猜答的程度。在PianoBench上，开放音频语言模型加音频相对无音乐对照最多提高6.0个百分点，而前沿模型用思维链在文本音符表条件下的准确率为93.2%，高于最佳音频结果的80.4%。对Qwen 3.5 9B基座无思维链零样本评测中，交错训练在文本音符表上的准确率为56.0%，高于仅指令微调基线的42.8%。这说明保留讲解与演奏时间对应关系的交错优于内容相同但分开存放的对照，不同于仅用曲目级标注监督的已有做法。结论仅适用于短独奏钢琴选择题，尚不能推广到多乐器、长结构或真实音频编码器训练，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://gclef-cmu.org/pianobench> → <https://gclef-cmu.org/pianobench/> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/zfturbo/music-source-separation-training/releases#release-v1.0.21> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/Qwen/Qwen3.5-9B> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文要回答什么：能听见不等于能理解吗

这篇论文研究语言模型对钢琴音乐的两种能力。输入是一段 2 到 20 秒的独奏钢琴，中位时长 11 秒，目标是回答关于这段音乐的四选一选择题，题目涉及具体音符、和弦细节，也涉及伴奏型、风格这类乐段层面的想法。输出是 4 个选项中的一个字母。

要保留的关键信息是音乐本身，而不是题干措辞带来的猜题线索。因此论文为每道题设置了同一乐段的不同呈现：分离出的钢琴原声、用虚拟钢琴重合成的音频，以及把转录音符写成的纯文本表格。音频条件考查感知，即能否从声音中找出答题所需的音乐特征；文本条件考查推理，即当音符事件已经显式给出时能否推断出高层概念。

对刚入门的读者来说，这里的难点在于，通用音乐理解基准分数高，并不说明模型能定位到动机、和声进行这类局部模式。教学视频提供了一种自然对齐：老师先讲解，再在琴上示范，讲解在时间上紧挨着所讲的乐段。论文正是利用这种相邻关系，同时做数据集和基准。

### 已有评测和训练路线与本文有何不同

在评测一侧，常用音频理解基准包含音乐题目，MuChoMusic 是纯音乐选择题基准，题目来自人工字幕自动生成再经人工校验，RUListening 则指出这类基准存在可被题干和选项先验利用的捷径。本文借鉴了其挑选干扰项的思路，并明确设置无音乐对照来度量猜题成分。MusicTheoryBench 用 ABC 记谱，MusICA-MetaBench 比较音频、ABC 与乐谱，本文的不同在于题目来自教学讲解，覆盖从音符到风格的范围，且同一乐段同时有录音和文本转录，可以直接比较听声音作答与看显式音符作答。

在训练一侧，Audio Flamingo 系列和 Music Flamingo 的公开做法是把录音、字幕、标签和从音频提取的属性交给语言模型改写成更丰富的字幕和问答对，再拿这些合成问答做训练。ChatMusician 继续在 ABC 记谱加音乐文本上训练，MIDI-LLaMA 加了 MIDI 编码器并在问答上指令微调。本文没有走合成问答路线，而是把教学录音里原本就按时间交错出现的讲解和演奏保留下来，作为自监督的继续预训练文本，检验保留时间关系本身是否有用。

### 为什么要用教学视频同时做数据和题目

具体问题有两个。第一，现有开源音频语言模型在需要定位细节的音乐题上，到底是听不见还是想不出，需要把感知与推理分开测量。第二，如果讲解与示范在时间上相邻，这种交错序列能否教会模型把音符与概念联系起来，尤其是在不使用思维链直接作答时。

教学视频恰好同时解决数据来源和出题来源。老师的口头讲解提示了哪里有值得考的音乐想法，相邻的钢琴演示提供了可截取的乐段。出题时只给模型看粗粒度的交错时间线，迫使它依赖周围讲解来提议题目，而答题时只给孤立乐段，保证题目问的是乐段本身。人工校验再听分离钢琴和 MIDI 重合成两种声音，只保留在两种呈现下答案都明确的题目。

这种设计把出题依据和答题依据分开：讲解只用于发现值得问的音乐现象，真正作答只能依赖孤立片段的声音或音符表，从而让感知条件和推理条件面对的是同一音乐内容。

### 从视频到可训练文本再到基准的全流程

整体流程分两条线。数据线从少量人工种子视频出发，爬取相关视频和频道，用语言模型看标题和描述筛选可能同时含讲解和独奏钢琴的视频，再下载音频并用钢琴分类器筛掉钢琴含量不足的录音，最后做声源分离、语音识别和钢琴转录，得到带时间戳的讲解文本和 MIDI。基准线从测试划分出发，把 MIDI 与字幕整理成粗时间线，排序挑选有出题价值的视频，生成题目与正确答案和音频区间，再生成并打分筛选干扰项，最后人工听两版音频定稿 250 题。

下面先看数据管线的示意图，再理解各组件的具体处理。

**PianoTalk × PianoBench：** PianoTalk 是训练规模的数据集，保存教学视频里按时间交错出现的讲解文本和钢琴演奏转录，解决大规模对齐监督从哪里来的问题；PianoBench 是从其测试划分中人工校验出的 250 道选择题，解决如何可比地测量能力的问题。二者搭配，前者提供按时间相邻的语言与音乐，后者提供同一乐段的音频与文本两种考法，使感知和推理可以被分开检验。

读图说明：该图把视频发现、录音筛选和文档构建分成三栏，箭头表示从元数据评分到字幕与音频获取，再到语音与钢琴两路转录的先后关系，适合对照正文理解每一道筛选和转换解决什么问题。

> **看图路径：** 1. 先看左中右三栏的箭头：发现视频、筛选录音、生成文档的主路径；2. 再看右栏语音声部经语音识别、钢琴声部经自动转录后如何汇成文本；3. 注意中间栏用字幕词数和钢琴分类器做的两道筛选

[![原论文 Figure 2：PianoTalk data recipe. Starting from seed videos, we crawl related videos and YouTube channels.](https://arxiv.org/html/2611.03839v1/pianotalk_pipeline.svg)](https://arxiv.org/html/2611.03839v1/pianotalk_pipeline.svg)

*论文图 2。原论文 Figure 2:：“PianoTalk data recipe. Starting from seed videos, we crawl related videos and YouTube channels.”。*

该图可见左侧用人工种子加抓取元数据并打分、命中则扩展相关视频与频道，中间用字幕词数与钢琴含量筛选录音，右侧把语音声部走语音识别、钢琴声部走自动转录后交错成文本。它帮助理解 PianoTalk 不是简单收集音频，而是把声音先变成可用于标准语言模型训练的文本与 MIDI 序列。

### 视频筛选、分离转录与 MIDI 文本编码各做什么

视频发现分两个阶段。先从人工种子出发，用语言模型给标题和描述前 512 字符打钢琴内容分，高分视频去扩展相关视频；再针对同时含讲解和独奏钢琴的目标，当频道中有至少 5 个视频通过讲解加钢琴元数据过滤，或超过 25% 的已评分视频达到高钢琴分时扩展到整个频道。第二阶段用 Gemma 4 26B-A4B 做元数据过滤。

音频处理先丢弃自动字幕少于 100 词的视频，下载剩余音频。用钢琴分类器按秒打分，保留平均分至少 0.3 的录音，该分数被训练为钢琴与非钢琴混合比例的代理。然后用 MVSEP 模型分离钢琴声部，转录为 MIDI，同时用 Parakeet-TDT-0.6B-v3 补充语音转录。论文随文发布的是时间戳语音转录和 MIDI，不发布源音频。

为让纯文本模型读懂钢琴，论文把 MIDI 段编码为 MIDI-text。做法是先用 Aria 分词器把力度量化到 12 个非零等级、起始与持续时间量化到 10 毫秒，再把每个音符写成音高、力度、起始、持续，头部声明时间单位与字段，每 5 秒加一个推进标记，起始时间从最近标记算起，既控制数值范围又保留跨段时序。

基准构建的时间线与人工校验如下图所示，先理解题目如何从讲解中来、又如何只考孤立乐段。

**钢琴音频 × MIDI-text：** 钢琴音频指分离出的钢琴声或用虚拟钢琴重合成的录音，考查模型能否从声音中听出答题所需的节奏、和声与织体；MIDI-text 指把转录出的音高、力度、起始时间和持续时间写成纯文本表格，直接把音符事件摆给语言模型，考查给定显式事件后能否推理出高层概念。二者内容同源但信息形态不同，对比它们才能把听不见和想不出区分开。

读图说明：该图顺时针展示源时间线、带音频区间的问题生成、无音乐干扰项打分、人工听音筛选 4 个环节，重点看候选问题如何被保留或淘汰，以及音频区间如何保证比较所需的信息都在片段内。

> **看图路径：** 1. 按顺时针看左上源时间线、右上问题生成、右下干扰项打分、左下人工校验；2. 注意候选 Q1 与 Q2 在干扰项得分和人工保留上的不同走向；3. 观察音频区间是如何从时间线中切出并只把孤立片段交给答题者的

[![原论文 Figure 4：Schematic construction of PianoBench (clockwise from top left).](https://arxiv.org/html/2611.03839v1/pianobench_pipeline.svg)](https://arxiv.org/html/2611.03839v1/pianobench_pipeline.svg)

*论文图 4。原论文 Figure 4:：“Schematic construction of PianoBench (clockwise from top left).”。*

该图可见左上把讲解与钢琴活动写成带时间戳的记录，右上据此提出问题、答案与秒级音频区间，右下在不听音乐的条件下估计每个干扰项的诱惑程度，左下由有音乐训练的标注者听两种音频后保留答案明确的题目。它说明题目来源依赖讲解，但答题依据被限制为孤立钢琴片段，这是感知与推理可比的关键。

### 交错与分离两种继续预训练文档如何构造

本研究没有训练音频编码器，而是固定模型结构与训练目标，只在 MIDI-text 上检验交错是否有用。对象是 Qwen 3.5 9B Base，做法是继续预训练，然后统一做一次不含音乐数据的通用指令微调。比较 3 种继续预训练用料：纯讲解、分离的讲解加 MIDI-text、交错的讲解加 MIDI-text。

**交错训练 × 分离训练：** 交错训练把同一视频按时间顺序切出的讲解块和钢琴块放在同一个文档里按先后排列，保留讲解紧挨着所讲乐段的关系；分离训练用完全相同的块，但拆成纯讲解文档和纯钢琴文档，保留内容但打散时间对应。二者用料相同、组织不同，对比它们才能判断提升是来自时间上的相邻关系，还是仅仅来自见过更多钢琴符号。

构造时先在长于 2 秒的停顿处切开讲解流与 MIDI 流，在较长段内按至少间隔 5 秒在词或音符起始处加候选边界，再把所有块按起始时间排序并合并相邻同模态块。这样连续单模态段落保持完整，重叠处形成更细的交错。训练文档把块按行拼接，MIDI 块包在钢琴标签内；分离文档把同一交错文档拆成纯讲解行与纯 MIDI 行，不再额外切分，保证两种条件用块完全相同。

指令微调统一用 40000 条通用指令与 10000 条改写为基准回答格式的四选一问答，不含 MIDI 问答与思维链监督，目的是看继续预训练本身是否改善无思维链的零样本作答。继续预训练用 AdamW 跑一轮，学习率 2e-5 并有 5% 预热后余弦衰减到 10%，序列长 4096，每步约 2621440 个 token；指令微调同样一轮，每步 128 例。

### 评测如何保证音频、文本与猜题成分可比

评测覆盖 3 类模型：开源音频语言模型、专用音频音乐理解模型，以及带思维链的大语言模型。音频侧包含 Nemotron、Audex、Audio Flamingo 与 Music Flamingo 等公开记录使用音乐字幕、问答与语音识别数据的模型；文本侧用思维链模型读 MIDI-text。作者按各自推荐设置推理，无思维链模式一般用贪心解码。

**无音乐对照 × 增益：** 无音乐对照指只给题干和选项、不给任何音乐输入时的准确率，用来度量仅靠题目措辞和选项倾向能猜对多少；增益指加上音频或 MIDI-text 后相对该对照的变化，以百分点计。二者搭配，避免把猜题能力误读为音乐能力，增益才是音乐输入真正带来的帮助。

每个乐段有 4 种输入条件：题干加选项本身、MIDI-text、用 Pianoteq 重合成的音频、分离出的钢琴原声。比较分离原声与其重合成可以检验音频表现是否在两种呈现下一致；比较音频与 MIDI-text 可以揭示从声音识别特征与对显式事件推理之间的差距。选项顺序每题打乱一次后对所有模型与条件固定，要求输出只含选项字母的 JSON，解析失败最多重试五次。

指标是 250 题上的准确率，以及相对同模型无音乐对照的百分点变化。无音乐准确率远高于 25% 随机水平，说明即使经过对抗干扰项筛选，题干与选项仍留有可利用线索，因此必须看增益而非绝对分数。论文还检查模型能识别留出钢琴片段中的钢琴声，确保音频通路有效。

### 数据规模与题目时长决定结论边界

先看数据规模与题目时长，明确结论适用的范围。PianoTalk 体量大但讲解以英语为主，题目片段短，结论只在这种短独奏钢琴细节题上成立。

下表比较数据体量、语言分布与题目时长，说明结论适用的边界是指短片段独奏钢琴，而非长曲或合奏。

| 数据与题目 | 规模 | 说明 |
| --- | --- | --- |
| 视频总数 | 138212 个 | 训练、验证、测试约按 110554、13837、13821 划分 |
| 讲解区间 | 17706 小时 | 字幕覆盖 44 种语言，英语占 68.48% |
| 钢琴区间 | 14931 小时 | 其中 6571 小时与讲解重叠，至少一模态共 26066 小时 |

上表说明比较问题是：在大规模交错语料与短片段基准下谈感知与推理。体量与划分保证训练与基准来源分离，但语言偏向西方常用语，片段短意味着长结构理解不在考查内，合奏与非钢琴也不在范围内。

**思维链 × 无思维链直接作答：** 思维链指模型在给出选项字母前先展开中间推理步骤，再把音符与和声、曲式等概念联系起来；无思维链直接作答指用贪心解码直接输出选项，考查模型不借助显式逐步推理时能否一步建立联系。二者搭配，可以看出显式音符本身不够，还需要推理过程或训练中习得的联系来桥接音符与概念。

### 音频带来多少提升：开源模型与前沿模型的差距

再看音频条件的核心数字，比较有无音乐时的变化，并注意指标方向是准确率越高越好，增益以百分点计。开源侧的音频增益很小，前沿专有模型的音频增益明显更大。

下表比较开源模型的音频上限与前沿模型的最好音频，公平条件是都看同模型相对无音乐对照的增益，指标方向都是越高越好。

| 输入条件 | 代表结果 | 音乐输入的含义 |
| --- | --- | --- |
| 开源音频模型总体 | 至多 52.8% | 音频相对无音乐改变 -1.6 至 +6.0 百分点 |
| 前沿显式音符最高 | 93.2% | 给定显式音符加思维链时的最高分 |

上表解释主要收益与限制。开源模型中有无音乐对照时，音频最多带来 6.0 个百分点提升，有的甚至下降，说明在该基准上声音几乎没有提供可用的答题信息。前沿专有模型明显更好，Gemini 3.1 Pro 在分离原声上达 80.4%，但其训练配料没有同等公开，无法断定是哪些成分带来的。Pianoteq 与分离原声在各模型上大致相近，说明结果不是某一种音频渲染的偶然。

### 给定显式音符后思维链能走多远

把同一乐段换成 MIDI-text 后，格局发生变化。8 个在任一音乐输入上相对无音乐提升至少 5 个百分点的音频语言模型中，MIDI-text 是其中多数模型的最高分，例外是 Qwen 3 Omni 两种思维设置与 Qwen 3.5 Omni Plus。思维链进一步推高 MIDI-text 分数，说明显式事件本身并不够，还需要推理把音符连到高层概念。

下表比较同一模型在无思维链与不同推理量下使用 MIDI-text 的准确率，指标方向仍是越高越好，条件都是同一批 250 题。

| 模型与推理量 | MIDI-text 准确率 |
| --- | --- |
| GPT 5.6 Sol 无思考 | 70.4% |
| GPT 5.6 Sol 中/高/超高 | 85.6% / 87.2% / 88.0% |
| GPT 6 Astra 高推理 | 93.2% |
| Qwen 3.5 9B 无思考/有思考 | 50.0% / 70.0% |

上表的主要结论是：给定显式音符加足够推理，前沿模型能把单个音符连到高层概念，最高达 93.2%。但无思维链时 Qwen 3.5 9B 与 GPT 5.6 Sol 都明显更低，说明推理帮助很大。反例是 Qwen 3 Omni 与 Gemma 4 12B 开思维并不能提高音频分，说明思维链克服不了从声音中恢复特征的困难。无音乐对照本身高达 40%-60%，因此必须用同模型增益来谈音乐带来的帮助。

论文检查了 GPT 6 Astra 答错的 17 题，其中 4 题涉及人工校验漏掉的转录错误，1 题是人工参考答案选错，其余多是音符多、需把握高层结构的题，例如三拍子圆舞曲感伴奏的判断。这提示即使音符给定加思维链，高层结构仍难。

### 交错保留时间关系是否比多看同样内容更重要

该节回答的核心问题是：提升来自时间相邻，还是仅仅来自见过 MIDI 符号。用料相同的交错与分离是关键对照，纯讲解是排除讲解本身作用的对照，官方指令版与自做指令版基线用来定位起点。

在无思维链贪心作答下，3 组对照的准确率与增益分别是：纯讲解训练的无音乐准确率为 37.2%，MIDI-text 准确率为 37.6%，增益为 0.4 个百分点；分离训练的无音乐准确率为 42.4%，MIDI-text 准确率为 42.4%，增益为 0.0 个百分点；交错训练的无音乐准确率为 45.6%，MIDI-text 准确率为 56.0%，增益为 10.4 个百分点。其中前两项分别是无音乐和 MIDI-text 的准确率、单位为百分比，增益是百分点。

这组连续比较显示，只有交错训练在无思维链时真正用起了 MIDI-text，达到 56.0% 且增益为 10.4 个百分点，而同样内容的分离训练没有提升，纯讲解对照也几乎没有提升。尽管自做指令基线 42.8% 低于官方版 50.0%，交错加自做指令仍超过官方无思维链 6.0 个百分点。但官方版开思维链可达 70.0%，说明交错训练与改进思维推理是两条并行的提升轴。该结论只在 MIDI-text、无思维链、Qwen 3.5 9B 与该指令配方的条件下成立，没有检验音频编码器。

未胜出的负结果同样重要：分离训练见过同样的 MIDI 块却没有提升，说明暴露于符号本身不够，时间对应才是差异来源。纯讲解对照进一步说明，单看讲解文本也不能带来这种提升。

下表比较 3 组继续预训练语料的 token 量，说明交错与分离计算量相当，差异来自组织方式而非数据量。

| 训练语料 | token 量 | 训练设置 |
| --- | --- | --- |
| 纯讲解 | 169 million | 序列长 4096，每步 2621440 tokens |
| 分离训练 | 2988 million | 学习率 2e-5，5% 预热后余弦衰减到 10% |
| 交错训练 | 2987 million | 同左，用块与分离训练完全相同 |

上表的主要限制是：纯讲解语料远小于含 MIDI 的两组，而交错与分离两组 token 量几乎相同，因此交错相对分离的优势不能用看过更多符号来解释。训练都只跑一轮，推理开销与部署成本原文未报告，不能承诺实际应用效果。

### 这些结论在什么条件下才成立

第一，题目短且经过人工挑选，偏向讲解中明确提到、且在两种音频呈现下都清晰可辨的乐段，漏检的转录错误仍留在报告分数中，论文已在发布数据中标记。长曲式、合奏与非钢琴音乐不在考查内。

第二，无音乐对照远高于随机，说明干扰项仍留有线索，人工筛选可能引入了新的可猜性。跨模型比较绝对分数会受通用推理能力影响，必须看同模型增益。

第三，音频侧的前沿最好成绩来自训练细节未公开的模型，不能把差距简单归因于某一配料；开源侧的有限音频增益只说明基于字幕问答配方的现有公开路线在该基准上不足，不否定其他音频监督的可能。

第四，交错训练只证明了对 MIDI-text 无思维链作答的帮助，没有证明能直接改善从声音感知的能力，也没有报告延迟、成本与误判率，不能承诺部署效果。

### 要复现需要准备什么，第一步做什么

复现分数据、基准与训练三件不同的事。论文发布的是带时间戳的讲解文本与 MIDI 转录及确切的继续预训练文档，不发布源音频；基准发布 250 题、4 种输入与错误标记。第三方链接是否可达不代表作者已开源，本文涉及的可用性只按本次收到的校验为准。

第一步是按测试划分重建评测：固定选项顺序，用附录提示词分别跑无音乐、MIDI-text、分离原声与 Pianoteq 重合成 4 个条件，要求 JSON 选项输出并允许孤立字母的兼容解析，算同模型增益而非只看绝对值。音频模型先用留出钢琴片段确认能识别钢琴声，避免通路失效被误读为感知差。

继续预训练复现需用 Qwen 3.5 9B Base、4096 序列、2e-5 学习率加 5% 预热余弦衰减、每步约 2621440 个 token 跑一轮，再用 4 万通用指令加 1 万改写四选一做一轮指令微调。交错与分离必须用同一批块，只是组织不同，否则无法归因于时间关系。

还缺的验证是：更大规模与更多随机种子的稳定性、音频编码器版本的交错监督、以及转录错误修正后的分数变化，这些在复现时应单独记录。

### 什么时候值得尝试交错教学监督

当任务需要把局部音乐事件连到可讲述的概念，且已有讲解紧挨着示范的视频来源时，值得尝试把讲解与转录按时间交错后做继续预训练，再配通用指令微调。它在本文条件下改善了小模型无思维链使用显式音符的能力，可作为改进思维链之外的另一条路。

当目标是从声音直接听出细节时，本文证据不支持只靠思维链或只靠多看分离符号就能解决，需要更贴近局部事件的音频与语言对齐，前沿模型的训练细节又未公开，因此应先在小规模上验证音频增益再扩大投入。

容易产生的误解是把 93.2% 读成音乐理解已解决。实际上它是给定正确转录加高推理量、在短钢琴片段选择题上的分数，仍有转录错与参考答案错，且高层结构题仍错得多。把该分数推广到长曲、合奏或生成任务，都会超出证据范围。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.03839v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-04 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-04/)
