---
title: "Tracing Inputs, Verifying Outputs: Validating Attribution in Music Generation"
date: 2026-10-11
draft: false
tags: [音乐生成, 自回归模型, 翻唱与曲目识别, 主观评测]
categories: [论文速递]
description: "论文用只接受音频条件的 MixAudio 记录每个声部用了哪段提示和共用上下文，再用 musicDNA 在训练库中检索复现，条件跟随实验与人工听辨的记忆审计共同说明记录何时成立、代价是只覆盖旋律声部且结论限于本次曲库。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.09637"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "只用已登记音频做条件：音乐生成的输入记录与输出核查如何分工"
paper_digest_original_title: "Tracing Inputs, Verifying Outputs: Validating Attribution in Music Generation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.09637v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.09637v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.09637v1.pdf"
paper_digest_primary_task: "音乐生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.music-generation","label":"音乐生成"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"task","id":"task.cover-song-identification","label":"翻唱与曲目识别"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "论文用只接受音频条件的 MixAudio 记录每个声部用了哪段提示和共用上下文，再用 musicDNA 在训练库中检索复现，条件跟随实验与人工听辨的记忆审计共同说明记录何时成立、代价是只覆盖旋律声部且结论限于本次曲库。"
paper_digest_authors: [{"affiliations":["Neutune, Seoul, South Korea"],"name":"Taejun Kim"},{"affiliations":["Neutune, Seoul, South Korea"],"name":"Wonil Kim"},{"affiliations":["Neutune, Seoul, South Korea"],"name":"Jongmin Jung"},{"affiliations":["Neutune, Seoul, South Korea"],"name":"Hyeongseok Wi"},{"affiliations":["Neutune, Seoul, South Korea"],"name":"Sangeun Kum"},{"affiliations":["Neutune, Seoul, South Korea"],"name":"Keunhyoung Luke Kim"},{"affiliations":["Neutune, Seoul, South Korea"],"name":"Taehyoung Kim"},{"affiliations":["Neutune, Seoul, South Korea"],"name":"Dongjoo Moon"},{"affiliations":["Neutune, Seoul, South Korea"],"name":"Seungsoon Park"},{"affiliations":["Neutune, Seoul, South Korea"],"name":"Taewan Kim"},{"affiliations":["Neutune, Seoul, South Korea"],"name":"Virginie Berger"},{"affiliations":["KAIST, Daejeon, South Korea"],"name":"Juhan Nam"},{"affiliations":["Neutune, Seoul, South Korea"],"name":"Jongpil Lee"}]
paper_digest_abstract_sha256: "86d5d36561ae037ce61fc364990bb69019138756aeff317286a32936cac8e155"
paper_digest_sidecars: {"citation.bib":{"sha256":"191c7bf9d8c1b0400d1d16c0868969afaee59419c96be2adc9e52d6e27773aad","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-09637/citation.bib"},"citation.json":{"sha256":"b076bfd9f0a6ede1388853412a90c956585b24077abeba05795efc970fe1f98d","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-09637/citation.json"},"citation.ris":{"sha256":"0d7a63804504b2839fd26b456c8fede3b33653e4d3d195972a639ce158e84ed5","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-09637/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"aba5a92e4b18cfadb19d8d5ca6e54e72c6ee7ba2448a314b698f329150a40fa6","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-09637/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "32a6ddbc95740745c4c9b45cf96de30e359d896e99196841f03dfb72ff59dea6"
paper_digest_api_reader_plan_sha256: "5f9b892ce06966b00389f0e854c7ce1fb21b12f750fe074d792dbb14d1f6009f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "8018003b8d9acf80c2cc109c5f18665941dfd9377ed66857006a373838974389"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "a21d9ca98a3639a7218a5b06267bb706f6a3934ccea506eb689913608e01a3bf"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "90dce3998dd1f0c3fd0dc641b3215cfc36bbaa456fc1d5e0d54c314e7721205f"
paper_digest_api_reader_author_count: 13
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "2c7db8ce6b0b46817375f772b91ff8d332afe0fff0cd244732c3cdbd1a7e0654"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 只用已登记音频做条件：音乐生成的输入记录与输出核查如何分工

> 英文题目：*[Tracing Inputs, Verifying Outputs: Validating Attribution in Music Generation](https://arxiv.org/abs/2610.09637v1)*

> 标签：#音乐生成 | #自回归模型 | #翻唱与曲目识别 | #主观评测
>
> 评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Taejun Kim：Neutune, Seoul, South Korea
- Wonil Kim：Neutune, Seoul, South Korea
- Jongmin Jung：Neutune, Seoul, South Korea
- Hyeongseok Wi：Neutune, Seoul, South Korea
- Sangeun Kum：Neutune, Seoul, South Korea
- Keunhyoung Luke Kim：Neutune, Seoul, South Korea
- Taehyoung Kim：Neutune, Seoul, South Korea
- Dongjoo Moon：Neutune, Seoul, South Korea
- Seungsoon Park：Neutune, Seoul, South Korea
- Taewan Kim：Neutune, Seoul, South Korea
- Virginie Berger：Neutune, Seoul, South Korea
- Juhan Nam：KAIST, Daejeon, South Korea
- Jongpil Lee：Neutune, Seoul, South Korea

## 📌 核心摘要

音乐生成中的归属需要同时回答哪段音频作为输入参与了本次生成，以及该输入的音乐特性是否出现在输出中，仅凭风格相似无法确认输入使用情况，已确认的输入使用也不能证明其产生音乐影响。MixAudio只以已注册音频为条件，不使用文本输入，先将每条目标分轨的1–2秒提示录音与前置共享上下文拼接并加入调性节拍与分轨位置编码，再按分轨与乐段生成对应分轨并记录使用情况。带输入记录的生成分轨随后作为查询进入musicDNA音乐版本识别模型的记忆审计，与训练数据比对以查找输入记录之外的复现。在四种数据源实例上与ACE-Step v1.5的对照中，替换上下文后MixAudio生成与新上下文的chroma相关性从0.00升至0.21，接近匹配参考，而与原提示的MFCC音色相似度仍保持在0.89附近。由994个旋律声部查询构成的记忆审计中，未命名复现仅在训练条件复用时出现1例录音复现，验证集为0例。在171首被任一检索器标记并经人工听辨的池子里，musicDNA的召回率为0.91（29/32），精度为0.49，均高于CLEWS的0.69与0.37。审计只覆盖吉他、键盘、铜管类旋律声部，不含贝斯、鼓与人声目标，阈值之外的潜在复现未经听辨。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://neutune.github.io/attr2027demo/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 只听像谁为何说不清用了谁的音乐

#### 为什么只看像不像，还说不清用了谁的音乐

这篇论文处理的是音乐生成中的归属问题：一个生成结果到底用了哪些已有音乐，这些音乐的哪些音乐特性真的影响了结果。读者需要先分清两个主张，一是用了某轨作为输入，二是该轨的音乐特性塑造了输出。只听输出像谁，会把训练库中其他具有相似节奏、和声或演奏风格的曲子也误认进来；反过来，即使能证明某轨确实作为输入送进了模型，也不等于它的音色或和声真的出现在输出里。

论文还提到近期 GEMA 诉 Suno 案一审涉及模型记住受保护作品并在输出中复现的争议，说明除输入跟随之外，还要单独检查是否复现了并未作为输入提供的训练曲目。全文的两个评估正是围绕这两件事展开，一是记录的输入是否按预期塑造输出，二是输出是否很少复现记录之外的训练声部。

### 三种归属路线各自能证明什么

论文把已有路线分成 3 类。第一类是训练数据归属，用影响估计来谈去掉某训练作品会改变什么，但在大规模模型上几乎无法通过重训验证，且同样一批训练曲可能在不同输出下都排在前面，分数可能更多反映打分方法而非具体输出。第二类是基于输出的归属，用音频嵌入或多种相似度在训练库中找与生成结果相像的片段，能提供相像或复现的证据，但本身说不清该训练作品如何影响了输出。

第 3 类是基于输入的归属，在生成过程中就把条件音乐的来源登记下来，留下可审计的记录，但此前没有验证登记的输入是否真的按预期塑造输出。本文就落在第 3 类，并补上缺失的一步：用条件实验检验输入的音乐效果，再用输出比对补上输入记录覆盖不到的复现问题。

### 验证归属记录的两个可检验要求

#### 论文把验证拆成哪两个可检验的要求

论文对归属记录提出两个要求。第一，每个生成声部应当跟随记录中点名的输入，提示管音色与演奏风格，共用上下文管和声。第二，生成声部应当很少复现权利人未被记录点名的训练声部。第一个要求用提示依从与条件替换来检验，第二个要求用面向训练集的记忆审计来检验。论文强调相似度分数都要对照基线来读，即模型不跟随输入时也能达到的水平，否则只看绝对分数会高估跟随程度。记忆审计的检索只针对吉他、键盘、铜管等承担旋律的乐器，不审贝斯与鼓，人声既不做目标也不做提示，但可以出现在上下文混音里，这个覆盖范围直接决定结论的外推边界。

### 只用已登记音频生成并记录来源的流程

#### 只用已登记音频生成的整体流程是什么

MixAudio 1 次生成一轨中任意子集的声部，条件只有已登记音频，没有文本输入。每个待生成声部分配一段提示录音，另有一个可选的、跨声部共用的上下文，即已有声部的混音。系统把提示的使用关联到参考演奏的录音侧贡献，把上下文的使用关联到塑造和声与速度的词曲侧贡献。当上下文与生成声部一起混入发行母带时，记录还会点名上下文的录音权利人。

论文说明这种分工不是来自版权法，而是来自后文观察到的模型行为：替换上下文后生成声部的音色仍留在提示一边，因此在生成声部中几乎看不到上下文的录音侧痕迹。读图时可按从左到右的输入、生成、输出顺序理解记录的形成位置。

#### 从提示和上下文到分声部的输入输出关系

下图展示了单次生成的输入输出与权利关联，左侧两块权利面板是生成时涉及的权利，下方虚线框是上下文混入发行母带时才增加的部分。

> **看图路径：** 1. 先看中间 Registered Audio 到 Any-Stem Generator 再到 Generated Stems 的主箭头；2. 再看左侧 Prompt 与 Context 分别连向 Recording Rights 和 Publishing Rights；3. 最后看下方虚线框的 Context 混入 One Mix 时多出的 Recording Rights

[![原论文 Figure 1：Attribution by conditioning provenance.](https://arxiv.org/html/2610.09637v1/fig1.svg)](https://arxiv.org/html/2610.09637v1/fig1.svg)

*论文图 1。原论文 Figure 1:：“Attribution by conditioning provenance.”。*

图中每个提示分别指向 1 位录音权利人，共用上下文同时连向词曲侧与录音侧，中间的任意声部生成器输出多个独立声部，最后再混成一个混音。教学上可以把它看成一个例子：若要生成鼓与键盘两个新声部，就各给一段鼓提示和键盘提示，再给一段已有吉他与贝斯的上下文，模型输出鼓声部与键盘声部，记录分别写明鼓提示、键盘提示与该段上下文。这种按声部记提示、按乐段记共用上下文的做法，使每个参考录音与其效果可以在声部层面对应，而不是只在总混层面混在一起谈。

**MixAudio × musicDNA：** MixAudio 是负责生成的模型，只接受已登记音频做条件并记录用了哪些输入；musicDNA 是负责比对的版本识别模型，把生成声部与训练库中的训练声部做作曲层面的检索。两者分工不同：前者解决用了哪段输入且是否产生音乐效果，后者解决是否复现了记录之外的训练声部，合在一起才构成输入记录加输出核查的互补证据。

### 提示与上下文各自控制什么音乐特性

#### 提示与上下文各自打算控制什么音乐特性

论文沿用已有音频条件研究的设定：短参考录音即每个声部的音频提示，意图引导音色与演奏风格；已有声部的混音即音乐上下文，提供和声与节奏。为了把每个输入与其效果连起来，记录与评估都做到声部级。模型内部把提示、上下文与目标声部都经神经音频编解码器变成离散 token，残差向量量化的每一层、每一时间步对应一个 token，生成器预测目标声部的 token。生成单位是乐段，上下文是该乐段已有混音，目标是该乐段的新声部，一轨按乐段逐段拼装。

输入序列中提示与目标成对追加，上下文前置并与目标共享位置编码以保持时间对齐，另有调式与拍点作为附加输入，声部级位置编码把第 i 个提示与第 i 个目标绑在一起。

**prompt audio × context audio：** prompt audio 指每个待生成声部分配的一段 1-2 秒参考录音，负责提供音色与演奏风格；context audio 指同一乐段中保留声部混成的伴奏，负责提供和声与节奏框架。两者搭配后，模型可以一次生成多个声部，且每个生成声部的音色来源与和声来源可以分开追溯，这正是后文把录音侧与词曲侧分开记账的基础。

论文还区分两种用法，新歌生成只给提示、由模型从零生成一首歌，改编生成则在已有曲目上增删或替换声部，此时同时给上下文，生成声部是铺在上下文之上的部分，需要与它一起播放。

### 本研究训练与调用了什么

#### 本研究训练了什么，没有训练什么

论文没有报告 MixAudio 与 musicDNA 的训练超参数、优化过程或冻结更新细节，解读时不能从模型名字猜实现。能确认的是评估调用方式：MixAudio 与对照系统 ACE-Step v1.5 的 Lego 模式用同一批实例、同一提示与上下文各生成 1 次，固定种子，生成后把无声声部从全部比较中去掉。musicDNA 作为版本识别模型，在审计中与 CLEWS、CLAP、MERT 一起对训练库做窗口化检索打分，不是在本节重新训练。附带的变速变调实验与 token 匹配检验也是调用已有模型与已有 token 序列的计算，不是新训练。缺失的是训练数据规模之外的学习率、轮数、参数更新范围等信息，复现时只能先按评估侧的实例划分与检索窗口复刻，训练侧尚无法确认。

### 评估曲目实例与记忆审计方法的构成

#### 评估用的曲目、实例与对照系统如何保持一致

条件来源有 4 类：自有多轨数据集的训练切分与验证切分，以及外部 MoisesDB 与 MUSDB18。自有集同时许可训练与服务使用，验证切分是未见但同分布，外部两套是未见且跨分布。人声从不做目标或提示。实例以乐段为单位，部分声部混成上下文，其余为待生成目标，每个目标的提示取自该声部自身录音在同乐段的 1-2 秒摘录。两系统生成同一实例，Lego 模式 1 次加一个声部。

对照只选 ACE-Step v1.5 Lego 模式，理由是它同时满足按声部给音频提示、接受上下文音频、生成独立声部且可运行，其他系统至少缺一项。下表给出各来源的曲目、乐段、实例、目标声部与无上下文实例数量，是理解后文分数分母与覆盖面的基础。

#### 评估集构成与无上下文比重的来源

下表比较的问题是各来源的评估量级是否可比，以及无上下文实例占比为何高于设计值。公平条件是同一实例、同一提示上下文、同一去无声规则，指标方向在后文按相似度越高越跟随来读。

| Source | Tracks | Sections | Instances | Target stems | Contextless | Hours |
| --- | --- | --- | --- | --- | --- | --- |
| Train | 1922 | 2073 | 2073 | 5030 | 515 | 7.1 |
| Val | 168 | 2086 | 2086 | 4960 | 518 | 6.9 |
| MoisesDB | 112 | 1058 | 1058 | 2266 | 282 | 5.6 |
| MUSDB18 | 150 | 1593 | 1593 | 2778 | 458 | 8.3 |

表中训练 1922 轨对应 2073 实例与 5030 目标声部，验证 168 轨对应 2086 实例与 4960 目标声部，外部两库各百余轨、千余实例。设计上无上下文、一至两个声部、三及以上声部的概率分别为 0.15、0.45、0.40，但声部太少的乐段只能回退到更小的上下文，于是实际无上下文份额超过 0.15。限制是训练切分只抽了与验证分布相近的同等规模样本，不是全量训练集，且外部曲目用算法切分乐段并对齐首尾强拍，2 秒以下或 40 秒以上乐段被排除，这些都会影响结论适用的乐段长度与风格范围。

#### 已有记忆审计的方法差异与本研究的听辨位置

下表比较的问题是已有 6 个系统的记忆审计在检索范围、检测器与判定标准上有何不同，以便说明只看有无检出还不够，还要看方法能检出哪类复现。

| System | Search | Detector | Decision criterion | Listening |
| --- | --- | --- | --- | --- |
| Jukebox (Dhariwal et al., 2020) | – | Listening | Listener judgment | ✓ |
| MusicLM (Agostinelli et al., 2023) | – | Token match | Calibrated threshold | – |
| MusicGen (Copet et al., 2023) | – | Token match | Fixed 80% match | – |
| Stable Audio 2 (Evans et al., 2024) | ✓ | CLAP retrieval | Manual threshold | ✓ |
| Stable Audio Open (Evans et al., 2025) | ✓ | CLAP retrieval | Manual threshold | ✓ |
| YuE (Yuan et al., 2026) | ✓ | ByteCover2 | Distributions only | – |

表中 Jukebox 只靠听辨，MusicLM 与 MusicGen 只与自身延续源比 token 而不搜全训练集，Stable Audio 两代用 CLAP 检索并人工定阈值加听辨，YuE 用翻唱识别模型但只看分布。论文指出除 Jukebox 与 YuE 外，其余检测器都绑定录音音色，token 序列编码渲染后音频，需近乎逐字复用才能命中，通用音频嵌入的相似度也主要被音色主导。本文的审计搜全训练集并对标记样本做听辨，再用听辨结果给检测器打分，这正是与只报分布或只定阈值的做法不同的地方。限制是该表只呈现方法类型，不直接证明哪种阈值更优，阈值选择仍需回到本研究的验证集前 5% 规则来理解。

### 生成声部是否更像自己的提示

#### 生成声部是否更像自己的提示而非别轨提示

提示依从实验把每个生成声部与其自身提示比，再与别轨提示比，风格用 MERT 嵌入余弦，音色用 MFCC 向量余弦，差值去掉通用相像。只看自身分数时 ACE 在多数来源的风格项显得更高，但它的别轨分数也高，说明输出彼此相像。取差后 MixAudio 在全部来源与两项指标上差值更大。附带的变速变调实验显示，对提示做 0.9 或 1.1 倍变速、上下 2 半音移调时，两系统输出的速度、与上下文的和声相关、与提示的音色相似几乎不动，MixAudio 保持原速的比例为 95%，ACE 为 91%，色度与音色变化在 0.03 以内。这组结果支持提示主要不扰动和声，但单独看绝对分数会误判，需要与随机提示的 0.1 起读。

**matched × random：** matched 指生成声部与其自身提示的相似度，random 指同一批生成声部与别轨提示的相似度。前者高可能是模型输出彼此相似带来的虚高，后者就是这种通用相似的零点。两者相减得到的差值才被用来判断是否真正跟随了自己的提示，而不是泛泛像音乐。

该小节的数字细节在原表 Table 1 中按来源与系统展开，此处只讲比较逻辑，不另造列。

### 替换提示或上下文时音色与和声是否分开移动

下表比较的问题是两个输入能否独立控制，即换提示只动音色、换上下文只动和声。公平条件是只用有上下文的实例，1 次只换一个输入并固定另一个，音色用 MFCC 相似度，和声用按小节平均的色度相关，并给出无关对与自身对的刻度锚点。

| 替换操作 | 比较对象与指标 | MixAudio Base | MixAudio Swap | ACE Base | ACE Swap |
| --- | --- | --- | --- | --- | --- |
| 换提示 | 与新提示 MFCC | 0.63 | 0.89 | 0.69 | 0.85 |
| 换提示 | 与原提示 MFCC | 0.92 | 0.64 | 0.88 | 0.70 |

换提示后两系统与新提示的音色相似都升到匹配水平、与原提示都下降，和声仍留在原上下文，说明都跟随提示音色。换上下文后 MixAudio 与新上下文的色度相关从 0.00 升到 0.21 的匹配水平、与原上下文从 0.21 降到 0.02 的无关水平，音色仍留在提示的 0.92 与 0.89；ACE 与上下文的相关在各类条件下都在 0.00 到 0.10 之间，替换无从移动。变调变速的补充显示 MixAudio 跟随上下文变速的准确率为 83%，接近 90% 的上限，ACE 为 58%，接近无关的 50%；跟随移调的色度准确率为 76%，接近 86% 上限，ACE 为 33%，接近下限。限制是该结论只在有上下文实例上成立，且 ACE 的和声稳定应读作本来就没有跟随，而非更稳健。

### 听辨者如何把被标记声部逐级归类

记忆审计先用 4 个检索器各取验证查询前 5% 分数为阈值，再用于训练查询，每个查询取最近训练声部打分，训练查询排除自身曲目。被任一检索器标记的 171 个生成声部进入听辨，3 位作者听辨者听到生成声部、检索到的训练声部与提示截取来源的完整声部，每个单独听再放回上下文听，按多数票归入 6 类。下图是自上而下的判定流程，徽章为 musicDNA 带在两切分共 59 个样本中的数量与占比。

> **看图路径：** 1. 从顶部 0 号问题开始按 yes 与 no 分支向下走；2. 注意橙色 Type I 与 Type II 和蓝色 A 与 D 的位置；3. 对照每个节点右上角徽章中 musicDNA 带的 59 个样本占比

[![原论文 Figure 2：How listeners judge a flagged stem, read top to bottom.](https://arxiv.org/html/2610.09637v1/fig2.svg)](https://arxiv.org/html/2610.09637v1/fig2.svg)

*论文图 2。原论文 Figure 2:：“How listeners judge a flagged stem, read top to bottom.”。*

流程先问是否为同一录音的重复登记，若是则记为 A 类副本，视为已点名记忆；再问是否同作曲，若否则为 B 类无关；若是则问是否常用套路，若是则为 C 类常用而不算记忆；再问是否同音色，若是则为 Type I 录音复现；若否则问核心作曲元素是否被拷贝，若是则为 Type II，若否则为 D 类偶然。是否核心在混音中相对整曲判断，合成器扫频等边界情形按音符序列比较，副本要求音色与几乎每个音符都像同一录音。

**memorization × named：** memorization 指生成声部在录音或作曲上复现了除自身条件输入之外的训练声部；named 指被复现声部的权利人已经出现在输入记录中。只有限定为 unnamed memorization，即记录中没有点名的复现，才算对记录的反例。区分这两词，才能理解为何重复登记的副本不计入对记录的指责。

该流程的意义是把实质未点名记忆限定为 Type I 与 Type II，把副本与偶然片段分开，避免把数据管理的重复登记误读为模型的记忆倾向。

### 记录之外的复现是否很少见

听辨计数显示未点名记忆很少：训练切分中 1 例 Type I 录音复现，被 musicDNA 与 CLEWS 同时标记，验证切分中 0 例，全程无 Type II 与 D 类。其余 31 例确认记忆都是 A 类副本，源于同一录音经中间商与直接签约重复入库或同一目录重复登记，权利人与记录点名一致。CLAP 与 MERT 漏掉多数副本。对该 Type I 用原条件换 8 个种子重生成，以 musicDNA 距离仍低于标记阈值为复现，8 次全部复现；去掉上下文后 0 次复现，说明是该训练时用过的具体上下文把记忆引出，类似歌词这种高特异条件引出训练歌曲的情形。

范围内结论是本次模型与本次曲库下记录之外的复现很少，但审计只听被标记声部，漏过阈值的记忆未被检查，计数是下限，且只覆盖旋律声部、无人声目标，换曲库需重做审计。

**Type I × Type II：** Type I 指录音复现，作曲与音色都与某训练声部相同；Type II 指换了音色的作曲复现，拷贝的是承载乐曲的核心元素。两者都是实质性的未点名记忆，而只共享常用进行或偶然片段的情形被另行归类，不视为实质记忆。没有出现 Type II 并不等于方法能抓住它，这是后文检测器比较的重要适用边界。

由于没有出现 Type II，后文检测器比较没有检验换音色作曲拷贝的能力，这是不能推广的一点。

### 检测分数分布与生成质量的补充证据

先看检测分布的读法，横轴方向已统一为越右越相似，纵轴按 Type I、A、B、C 与 Null 分行，行内抖动无意义。

> **看图路径：** 1. 先看每子图横轴越向右越相似与虚线阈值；2. 再比较 Type I 与 A 两行彩点落在阈值右侧的多少；3. 最后看 Null 灰带表示的验证集偶然相似范围

[![原论文 Figure 3：Detection performance of memorization metrics.](https://arxiv.org/html/2610.09637v1/fig3.png)](https://arxiv.org/html/2610.09637v1/fig3.png)

*论文图 3。原论文 Figure 3:：“Detection performance of memorization metrics.”。*

图中 CLEWS 与 musicDNA 的 A 行彩点多在阈值右侧，B 行灰点多在左侧或跨阈值散开；CLAP 与 MERT 的 B 行灰点大量压在阈值附近，说明通用嵌入易把音色相近但作曲无关的样本推过阈值；两种 token 检验的 A 行彩点多在阈值左侧，说明渲染后 token 的严格匹配抓不住换演奏的同作曲。再看生成质量，Fréchet Audio Distance 越低越好，听感平均意见分越高越好，48 个案例覆盖验证、MoisesDB、MUSDB18 各 16 例。

> **看图路径：** 1. 比较 Quality、Prompt、Context 三组柱子的高低顺序；2. 注意 MixAudio 与 ACE 在 Context 一组差距最大；3. 观察真实声部灰柱与两者差距在哪组最小

[![原论文 Figure 4：Listener ratings. Mean opinion scores over all 48 cases, the All rows of Table 8, with their 95%…](https://arxiv.org/html/2610.09637v1/fig4.svg)](https://arxiv.org/html/2610.09637v1/fig4.svg)

*论文图 4。原论文 Figure 4:：“Listener ratings. Mean opinion scores over all 48 cases, the All rows of Table 8, with their 95% confidence intervals.”。*

图中 MixAudio 在音质、与提示匹配、与上下文契合三项都高于 ACE，且在上下文契合一组差距最大、与真实声部差距最小，说明跟随上下文正是 MixAudio 最接近真实、最拉开差距之处。限制是质量比较的对照只有 ACE，且外部集切分与参考集划分只针对本次评估，不能推广为对文本条件系统的优劣判断。

### 六种检测器在人工确认样本上的差异

#### 六种检测器在人工确认样本上差在哪里

下表比较的问题是在 171 个被标记声部组成的已判定池中，32 例确认记忆与 139 例非记忆下各检测器的查全与查准。公平条件是同一判定池与各自阈值，检索器用审计标记，token 检验用 MusicGen 式 80% 零层位置精确匹配与 MusicLM 式直方图传输代价。

| 检测器 | 确认记忆检出 | 查全与查准方向 | 非记忆误报 |
| --- | --- | --- | --- |
| musicDNA | 32 例中 29 例 | 查全 0.91，59 个标记中 29 例确认，查准 0.49 | 剩余为无关或常用 |
| CLEWS | 32 例中 22 例 | 查全 0.69，60 个标记中 22 例确认，查准 0.37 | 常用误报多于 musicDNA |
| CLAP | 32 例中 1 例 | 96 到 100% 标记为无关 | 几乎全是音色主导 |
| MERT | 少数 | 71 到 88% 标记为无关 | 音色主导 |
| MusicGen 式 token | 4 个标记全为无关 | 确认记忆几乎全漏 | 逐字匹配过严 |
| MusicLM 式 token | 1 例确认，33 个无关 | 双向都差 | 近似匹配仍偏音色 |

作曲层检索器好于通用嵌入与 token 检验，musicDNA 最好，但查准仍不足一半，说明阈值后仍需人工听辨。限制是判定池由 4 个检索器形成，token 检验未参与成池，且召回分母只计池内确认记忆，池外漏检不计入。下图把每个已判定样本放在 6 个检测器各自刻度上，越右越相似，虚线为阈值，Null 行为验证集偶然相似的 5 到 95 百分位，可直观看到彩点与灰点的分离程度。

### 尚未评测的范围与容易误读之处

#### 哪些范围尚未评测与容易误读之处

论文明确只用音频条件，不能直接当文本到音乐系统用，文本可通过向量检索已登记录音间接进入，但音频与文本条件的质量代价没有直接比较。记忆审计限于本次模型与本次曲库，换模型或换目录需重做；只审被标记声部，未过阈值的记忆未被听辨；只覆盖旋律声部，不含贝斯鼓组；无人声目标与歌词提示，而歌词是已知的高特异诱发条件，加入人声后可能出现本次缺席的 Type II。

听辨者为 3 位作者，一致率 84%，是否记忆的一致率 90%，Type I 一致，但仍是内部听辨。常见误读是把副本多等同于模型爱记忆，实际上副本是数据重复登记，虽提供确认匹配但不代表模型特性；把未检出读作零记忆也不对，方法只能检出其能检出的复现形式；把 ACE 和声不动读作更稳定也不对，它是本来就没有跟随上下文。

### 复现第一步与尚无法确认的资源

#### 复现第一步做什么与尚无法确认的资源

复现应先按附录重建实例：自有轨用元数据乐段，外部轨用算法切分并对齐首尾强拍，排除过短过长乐段，段内随机分上下文与目标，目标提示取同段自身录音 1-2 秒摘录，两系统同实例同条件固定种子生成并去掉无声声部，再按 MERT 去均值余弦、MFCC 余弦、按拍平均的色度相关计算依从与替换。记忆侧按 20 秒窗 5 秒跳检索，阈值取各检索器验证查询前 25 名分数，再用于训练查询并排除自身曲目，被标记样本按 3 段音频单独加混音听辨归类。

代码、权重与完整系统的公开情况是：论文给出的演示链接当前可达，但可达不等于已确认代码、权重或完整系统可用，该第三方链接的作者归属尚未确认，公开材料的具体能力以资源文档证据所列为准，除此之外尚无法确认有可运行的完整系统。

### 何时值得尝试与还需补的验证

#### 什么时候值得尝试与还需要补哪项验证

当生成流程能限定只用已登记音频、且需要按声部分清录音侧与词曲侧来源时，这套输入记录加输出核查值得尝试：提示管音色、上下文管和声的对照在本实验中可分开移动，记录有行为依据；musicDNA 审计在本次曲库下未点名复现很少，且在已判定池中查全查准高于其他受试方法。尝试前要接受 3 个前提，一是结论限于旋律声部与本次曲库，二是阈值后必须保留人工听辨，三是无文本条件的质量代价未知。

还需补的验证是换曲库重做审计、纳入贝斯鼓组与人声歌词条件、补 Type II 样本后再比检测器，以及报告训练与推理成本。若这些补齐后仍保持跟随可分离、未点名复现很少且检测器稳定，记录才更适合支撑权利人报告与分成讨论，否则只宜作为透明度材料。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2610.09637v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
