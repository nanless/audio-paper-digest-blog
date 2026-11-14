---
title: "Can Music Generation Models Tap Along? Evaluating Generative Approaches to Beat Tracking"
date: 2026-11-13
draft: false
tags: [节拍跟踪, 音乐生成, 生成模型, Adapter, 鲁棒性]
categories: [论文速递]
description: "论文把拍子跟踪改成先按歌曲生成同步打击乐再提取拍点，在 GTZAN 上 F-measure 约 0.85 接近传统方法，主模型去鼓后下降较小，但生成器冻结、只训练 10.4 M 适配器，音质初步评估偏低。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.14971"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "跟着歌曲打鼓能找到拍子吗：生成式拍子跟踪解读"
paper_digest_original_title: "Can Music Generation Models Tap Along? Evaluating Generative Approaches to Beat Tracking"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.14971v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.14971v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.14971v1.pdf"
paper_digest_primary_task: "节拍跟踪"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.beat-tracking","label":"节拍跟踪"},{"facet":"task","id":"task.music-generation","label":"音乐生成"},{"facet":"method","id":"method.generative","label":"生成模型"},{"facet":"method","id":"method.adapter","label":"Adapter"},{"facet":"research_focus","id":"research_focus.robustness","label":"鲁棒性"}]
paper_digest_primary_method: "生成模型"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把拍子跟踪改成先按歌曲生成同步打击乐再提取拍点，在 GTZAN 上 F-measure 约 0.85 接近传统方法，主模型去鼓后下降较小，但生成器冻结、只训练 10.4 M 适配器，音质初步评估偏低。"
paper_digest_authors: [{"affiliations":["Schulich School of Music, McGill University, Montréal, QC, Canada","Centre for Interdisciplinary Research in Music Media and Technology (CIRMMT), Montréal, Canada"],"name":"Kun Fang"},{"affiliations":["Courant Institute, New York University, New York, USA","Mohamed bin Zayed University of Artificial Intelligence (MBZUAI), Abu Dhabi, UAE"],"name":"Ziyu Wang"},{"affiliations":["Schulich School of Music, McGill University, Montréal, QC, Canada","Centre for Interdisciplinary Research in Music Media and Technology (CIRMMT), Montréal, Canada"],"name":"Ichiro Fujinaga"}]
paper_digest_abstract_sha256: "e5eb4ee21dd52ee4cab2652a5415cdb522b0967ee348614d27be14846ec76a0a"
paper_digest_sidecars: {"citation.bib":{"sha256":"2297bf2a096c12a3e10d96dd893d68642788d25e4a70b43d0f09d319155eb2f4","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-14971/citation.bib"},"citation.json":{"sha256":"a4a0267a3672fd916012c59829a05f6370ea85dd2dcaf80e33f97e29ca01f3b1","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-14971/citation.json"},"citation.ris":{"sha256":"0bd5989610624aef92f532ae20be9f2cd52dee176fb1861bd6631c8966d9d0e4","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-14971/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"50f11c2e41d8d9fb4b4194ea6ac3bdc2fc47e40378638a187327e928ef96385b","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-14971/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "833ef694f503f0423a81e11e12ce31d71ff1eb61be27c17165c26a8dfec39ac9"
paper_digest_api_reader_plan_sha256: "1e3027bb68e777d7cfa1d16ae160fdae4495da2bcf7932d18038adf4d6028ec1"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "de9c12f63d9b741fbd7130294367fabb745caa07998595a0cf4df98fbbb33493"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "a0b1cd5e1252a32535c755695902227f2f1ccc165709ecfb61a782be2d2e644d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "131f139996d1b7bdbbb408e547663cd8dd4f58bf2951b0ba030d5f06927ff6d9"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "6e2ffbe3caa7ed23ba62097b5d729face13d711f65f7ef01b37b0a520cba95fb"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 跟着歌曲打鼓能找到拍子吗：生成式拍子跟踪解读

> 英文题目：*[Can Music Generation Models Tap Along? Evaluating Generative Approaches to Beat Tracking](https://arxiv.org/abs/2611.14971v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐分析](/audio-paper-digest-blog/papers/?concept=task.music-understanding) → [节拍跟踪](/audio-paper-digest-blog/papers/?concept=task.beat-tracking)；[音乐生成](/audio-paper-digest-blog/papers/?concept=task.music-generation)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative)；[参数高效微调](/audio-paper-digest-blog/papers/?concept=method.peft) → [Adapter](/audio-paper-digest-blog/papers/?concept=method.adapter)
- **研究重点**：[鲁棒性](/audio-paper-digest-blog/papers/?concept=research_focus.robustness)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.3/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5


## 👥 作者与机构

- Kun Fang：Schulich School of Music, McGill University, Montréal, QC, Canada；Centre for Interdisciplinary Research in Music Media and Technology (CIRMMT), Montréal, Canada
- Ziyu Wang：Courant Institute, New York University, New York, USA；Mohamed bin Zayed University of Artificial Intelligence (MBZUAI), Abu Dhabi, UAE
- Ichiro Fujinaga：Schulich School of Music, McGill University, Montréal, QC, Canada；Centre for Interdisciplinary Research in Music Media and Technology (CIRMMT), Montréal, Canada

## 📌 核心摘要

传统节拍跟踪直接从歌曲音频估计节拍时刻，容易依赖鼓点等明显线索，在鼓声缺失或弱拍处出错。本文把节拍跟踪转为先生成后提取，输入 30 秒歌曲音频，生成与之同步的打击乐音轨，再用轻量跟踪器从打击乐中读出节拍位置。输入歌曲先变为神经音频编解码器 EnCodec 的离散编码序列，EnCodec 的作用是把波形压缩为可自回归预测的离散记号并能解码回音频，再送入冻结的大尺寸音乐生成模型 MusicGen 提取各层帧级特征，MusicGen 的作用是按帧顺序预测 EnCodec 记号的自回归生成模型，加权融合后经空洞卷积纳入约 5 秒上下文，形成条件。该条件以逐帧相加和门控交叉注意力注入冻结的小尺寸生成模型，自回归生成打击乐编码序列并解码为音频。轻量时域卷积网络从打击乐对数梅尔谱预测帧级节拍概率，时域卷积网络的作用是以扩张卷积捕捉长时节奏依赖，再经动态贝叶斯网络解码为时刻，动态贝叶斯网络的作用是结合 tempo 连续性约束输出时刻序列。在 999 首 GTZAN 全混音前 30 秒评测中，本文 Click 目标模型的 F-measure（70 毫秒容差）为 0.851，低于 Beat This! 的 0.888。在 999 首 GTZAN 全混音前 30 秒评测中，本文 Click 目标模型的 AMLt 为 0.907，高于 Beat This! 的 0.895，表明跟随连续性较好而节拍层级易错。该结论限于 30 秒前段全混音与鼓分离音频的对比条件，鼓分离来自源分离而与自然无鼓录音不同，且未做听感评测，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://kunfang98927.github.io/generative-beat-tracking/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 拍子跟踪要从歌曲里得到什么

拍子跟踪的输入是一段歌曲混音，目标是输出一串拍点时刻。论文所有方法都只用每首歌的前 30 秒，预测结果要与人工标注的拍点在时间上对齐。必须保留的信息是拍点在歌曲进行中的位置，既不能整体漂移，也不能在弱拍处随意丢失。

人听音乐时会点头或跟奏，用动作或加花表达听到的拍子，而不是报出时间戳。传统拍子跟踪则直接从音频估计拍点位置，效果不错，但可能只是学会了统计上能预测标注的声学特征，未必抓住人感知节奏所用的线索。论文特别提到两类常见困难：鼓很弱或没有鼓时性能明显变差，以及响亮起始不在拍上时容易跟错、微弱起始在拍上时容易漏掉。

对刚入门的读者，可以把任务想成在 30 秒波形上标出等距但随速度起伏的格点。鼓点是最直接的提示，可靠却不完备，没有鼓时还要靠贝斯、和声变化或旋律重音推断。后文的生成式路线正是想检验模型能否像乐手那样先打出一段合拍的打击乐，再从这段可听的演奏里读出拍点，而不是直接回归时间戳。

### 直接预测拍点和生成伴奏两条路线有何不同

直接预测一路把音频映射到拍点标签。论文点名的代表包括基于循环神经网络的 madmom、基于时间卷积网络的一系列工作，以及基于 Transformer 的 Beat This!，后者不需要后处理，是当前准确率很高的基准之一。即使最近把扩散模型用于拍子跟踪，输出的仍是拍点标签而不是音频。

另一路是探测生成模型内部是否藏着节拍信息。有工作从 Jukebox 和 MusicGen 的隐藏状态读出速度和拍号，也有工作直接读出拍点，说明生成模型编码了与节拍相关的信息，但这只证明信息存在，没有证明能用它生成与歌曲同步的音频。

条件音乐生成则更接近本文。MusicGen 本来从文本或旋律生成音乐，后续加入节奏、和弦和鼓轨等控制，但多数是把节奏或鼓作为输入给模型，模型不必自己找拍。JukeDrummer、MusicGen-Stem 和 STAGE 这类工作以已有音频为条件生成新声部，追求音乐上的协调，常常用从生成轨和原曲提取的拍点是否一致来评价同步。区别在于，本文训练时只给歌曲，要求模型自己生成节奏清晰的打击乐，并在评价时与人工标注对比，而不是比较两轨之间是否一致，这才构成对拍子跟踪能力的检验。

### 把拍子跟踪变成打击乐生成要解决什么困难

论文要回答的问题是能否把拍子跟踪当作生成任务。做法是让模型听着歌曲生成一段同步的打击乐伴奏，再从这段伴奏里提取拍点。这样输出不只是一串时刻，还是一段可听的打击乐，形式上更接近乐手跟奏。

困难在于生成必须同时满足两件事。一是帧级跟随，生成的每个鼓点都要落在歌曲当下的拍子上，不能自顾自延续先前的节奏；二是音色可辨，轻量跟踪器要能从生成音频里读出拍点，太糊或太多任意加花都会干扰提取。目标设计也需要在明确与真实之间权衡，太简单的节拍器式目标拍点明确但离预训练音乐较远，太像真人演奏的目标音乐性强但拍点与起始不一一对应。

评价也要超出总体准确率。论文除了报告与传统跟踪器的总体对比，还专门去掉鼓声看谁下降更小，再按起始强弱分组看漏拍和错拍如何变化。只有在这两类弱线索条件下仍能保持，才支持生成式方法不只是跟响亮起始走的结论。

### 先生成打击乐再提取拍点整体流程是怎样的

整体链路只有三步。输入是 30 秒歌曲，音乐生成模型为它生成一条同步的打击乐轨，轻量拍点跟踪器再从这条打击乐里提取拍点位置。论文比较 3 种目标，为每种目标各训练一个生成模型，提取阶段则为每种目标各训练一个结构相同的轻量跟踪器，保证公平。

先沿从左到右的箭头看一次样本经历什么，有助于分清生成与提取各自的职责，下面这张总览图把 3 类目标和最终拍点放在同一行对比。

**MusicGen × EnCodec tokens：** MusicGen 是自回归生成模型，负责一帧一帧预测 EnCodec tokens，再由解码器变成可听音频；EnCodec tokens 是歌曲和打击乐在模型内部的离散帧表示，是编码、条件和生成的共同载体。两者搭配后，输入歌曲先变成 EnCodec tokens 供第一路 MusicGen 读出节奏特征，输出侧再用第二路 MusicGen 预测打击乐的 EnCodec tokens，组合起来才实现从歌曲音频到同步打击乐音频的转换。

> **看图路径：** 1. 沿最左侧音频经生成模型到打击乐再到拍点的箭头看主路径；2. 对比中间三行 Click 与两种 Groove 在密度和音色上的差别；3. 注意最后拍点提取只依赖生成的打击乐而不是原歌曲

[![原论文 Figure 1：Overall pipeline. The music generative model generates a percussion track from the song; we…](https://arxiv.org/html/2611.14971v1/fig1.png)](https://arxiv.org/html/2611.14971v1/fig1.png)

*论文图 1。原论文 Figure 1:：“Overall pipeline. The music generative model generates a percussion track from the song; we compare three targets and train one model per target.”。*

这张图确实可见从波形音频经生成模型到三行不同密度打击乐，再经拍点跟踪器到稀疏拍点线的完整走向。三行目标从上到下由稀到密，最简的 Click 只在拍点处有孤立脉冲，两种 Groove 则在拍间也有装饰，但黑色实线标注的拍点在三者中都保持对齐。它帮助理解后文所有实验的输入输出关系：评价的拍点始终来自生成的打击乐，而不是直接读原歌曲。

需要强调的是风格标签只用来构造训练目标，推理时模型只以输入音频为条件生成打击乐，不给风格标签。训练用的配对数据是歌曲音频与按拍点标注合成的目标打击乐，监督来自标注合成的 EnCodec 目标序列，而不是人工再演奏一遍。

### 三种目标打击乐各有什么作用

3 种目标用同一套拍点标注合成，节奏复杂度和音色不同。Click 最简单，重拍用底鼓、其他拍用踩镲，效果像节拍器，每个拍子对应一个打击乐起始，拍点最明确。

Groove（synth）用规则编写节奏型，乐器包括底鼓、军鼓、踩镲、牛铃和康加，论文定义了 14 种分风格固定节奏型，每种风格一种，演示页可听。Groove（sampled）用 Groove MIDI 数据集中的真人演奏鼓 MIDI，按风格和速度挑选，再按小节对齐到标注拍点，用 AVL Drumkits 的鼓采样渲染，演示页同样可听。越往后越接近真实演奏，也越接近 MusicGen 预训练见过的音乐。

**Click × Groove (synth) × Groove (sampled)：** Click 是最简单的节拍器式目标，重拍用底鼓、其他拍用踩镲，每个拍子只有一个清晰起始；Groove (synth) 是用规则编写的 14 种分风格节奏型，加入底鼓、军鼓、踩镲、牛铃和康加，节奏更密；Groove (sampled) 是按风格和速度挑选真人演奏鼓 MIDI，再按小节对齐到标注拍点并用采样音色渲染。三者由同一套拍点标注合成、复杂度和音色从简到繁，用来检验目标越像真实音乐是否越有利于跟踪，论文为每种目标各训练一个生成模型。

这种设计的教学意义在于分离两个因素。目标越简单，拍点提取越容易，因为起始与拍点几乎一一对应；目标越真实，对预训练表示越友好，但拍间装饰音和加花会给提取带来歧义。论文的结论是三者在 F-measure 上几乎没有可见差别，说明在当前轻量提取器下，明确性与真实性的权衡没有拉开差距，这也为后文统一用 Groove（sampled）做鲁棒性分析提供了前提。

### 音频条件适配器怎样把歌曲变成生成条件

在动手训练之前，先看适配器如何连接两路冻结的 MusicGen，下面这张结构图把可训练与冻结的分界画得很清楚，读图时先分清灰橙颜色再看条件走向。

> **看图路径：** 1. 先看左侧冻结的 MusicGen 如何输出多层特征再进入适配器；2. 再看右侧冻结的 MusicGen 在每层和输入端两处如何接收条件；3. 区分灰色冻结模块与橙色可训练模块的分界

[![原论文 Figure 2：Our percussion generation model.](https://arxiv.org/html/2611.14971v1/music_gen_adapter_zz.svg)](https://arxiv.org/html/2611.14971v1/music_gen_adapter_zz.svg)

*论文图 2。原论文 Figure 2:：“Our percussion generation model. N and N^\prime are the numbers of layers of the two MusicGen models; T is the number of frames.”。*

这张图确实可见左侧 MusicGen（frozen）从音频 EnCodec 序列读出多层特征，经可训练的加权求和与空洞卷积得到条件序列，再同时送往右侧 MusicGen（frozen）的逐帧相加输入和每层门控交叉注意力。图中 N、N′ 表示两路模型的层数，T 表示帧数，灰色冻结、橙色训练。它帮助理解信息瓶颈：歌曲的长时节奏只通过适配器这条窄路进入生成器，生成器本身不更新。

具体而言，输入歌曲先编码为 EnCodec token 序列 X1:T，送入第一路 MusicGen 提取每层帧级特征。这些特征经可学习加权求和汇总，再过一叠空洞卷积纳入约 5 秒前后文，得到条件 C1:T。第二路 MusicGen 自回归生成打击乐 EnCodec token 序列 Y1:T，条件以两种方式注入：对解码器输入做逐帧相加，以及在每个 Transformer 层增加门控交叉注意力。两路 MusicGen 都保持冻结，只有适配器训练。论文用 MusicGen-large 编码歌曲、MusicGen-small 生成打击乐，兼顾性能与计算。脚注给出依据：编码改用 small 在验证子集和 GTZAN 上 F-measure 分别降 0.013 和 0.003，而把预训练编码器换成从零训练的编码器则降 0.052 和 0.064。

**weighted sum × dilated convolutions × gated cross-attention：** weighted sum 对第一路 MusicGen 各层帧特征做可学习加权求和，把多层信息汇成一路；dilated convolutions 接在其后，用空洞卷积扩大感受野，纳入约 5 秒前后文，形成条件序列 C1:T；gated cross-attention 再把 C1:T 送入第二路 MusicGen 的每个 Transformer 层，由门控调节条件注入，并与解码器输入的逐帧相加配合。三者按“汇总—扩展时间上下文—分层注入” 衔接，使冻结的生成器每一步都受歌曲节奏约束，而不是只延续自身已生成的节奏。

代价也很明确。适配器只有 10.4 M 可训练参数，远小于后文扩散对照的 561 M 和 STAGE 的 420 M，训练负担小，但生成器冻结意味着音色真实感的提升空间受限，这与后文 Groove（sampled）音质评分最低的现象相互印证。

### 生成模型怎样训练和推理才能跟住歌曲

生成侧训练用 10 秒片段，30 个 epoch，对目标 EnCodec token 做交叉熵损失，学习率按余弦从 3×10−4 衰减到 0。为改善节奏对齐，论文采用两种增强。第一，以 0.8 概率把自回归上下文换成静音 token，防止模型不听歌曲只重复已生成节奏；不用该策略时验证子集 F-measure 会掉到 0.31。第二，以 0.5 概率把输入歌曲换成经 HT Demucs 去鼓后的音频，逼模型从其他乐器推断拍点，这直接对应后文去鼓鲁棒性实验。

验证时用 madmom 从生成的打击乐提取拍点，按 70 ms 容差的 F-measure 选检查点。推理时取歌曲前 30 秒一次生成 30 秒轨，用贪心解码，并用系数 1.5 的无分类器引导加强条件影响，防止生成节奏漂离歌曲而只延续自身先前节奏。

提取侧为每种目标各训练一个相同结构跟踪器。输入是 16 kHz 音频的对数梅尔谱，网络仿照 Böck 和 Davies 的时间卷积结构，用 3 个卷积层加 11 个空洞卷积块预测帧级拍点概率，再由动态贝叶斯网络解码出拍点，每个跟踪器约 143 K 参数。训练输入是用 300 首训练歌曲生成的打击乐，每数据集 75 首，避免用全曲音乐训练的现成跟踪器在不同音色目标上表现不一。

**TCN × DBN：** TCN 是时间卷积网络，这里用三层卷积加 11 个空洞卷积块，从 16 kHz 音频的对数梅尔谱预测每帧是拍点的概率；DBN 是动态贝叶斯网络解码器，把帧概率转成满足节拍连续性的拍点时刻。两者搭配是先给局部概率再做全局择径，论文为每种生成目标各训练一个约 143 K 参数的轻量跟踪器，保证不同音色目标之间的拍点提取方式公平可比。

这样分工后，拍点精度主要由生成轨决定，跟踪器起校正作用。后文对照显示，对 Ours（Click）直接做起始峰值拾取仍有 0.747，而同一跟踪器直接读原歌曲只有 0.373，说明信息确实来自生成步骤。

### 数据划分对比方法和评价指标如何设定

训练与验证沿用 Beat This! 整理的拍点标注和划分。训练用 Ballroom、Hainsworth、RWC 和 ASAP 的训练划分，共 1319 首约 49 小时。轻量跟踪器训练用其中 300 首生成的打击乐。评价用两套：固定验证子集 124 首，其中 Ballroom 40 首、Hainsworth 33 首、RWC 21 首、ASAP 30 首，Ballroom 和 ASAP 为随机采样以拉近规模并减少计算。

另一套是 GTZAN 999 首作为保留测试集。没有任何模型见过 GTZAN，但 madmom 的训练数据包含 Ballroom 和 Hainsworth，因此它可能见过验证子集中的部分歌曲。

对比方法分两类。生成类还有 Stable Audio ControlNet 与 STAGE，前者是扩散路线，冻结 Stable Audio Open 1.0 基座并复制前 12 层作条件分支，以歌曲隐变量为输入逐层相加，用与 Groove（sampled）相同的训练歌曲和目标，便于比较自回归与扩散的条件机制；后者是现成鼓伴奏模型，基于 MusicGen-small 但微调全部权重，把上下文音频 token 前置作为条件，用作者发布权重和默认采样，以全混音为输入，因训练于 10 秒片段，生成 30 秒时每次以前 5 秒续写 5 秒。两者同样各配一个同结构跟踪器。传统类是基于 Transformer、无需后处理的 Beat This!，训练 4556 首约 167 小时，20.3 M 参数，以及基于循环神经网络的经典基线 madmom，约 1100 首约 12 小时，0.73 M 参数。

指标方面，所有方法都以全混音前 30 秒为输入，用 mir_eval 对比预测与标注。F-measure 看每个拍点是否落在标注附近，报告 70 ms、100 ms 和 150 ms 3 种容差，数值越高越好；CMLt 要求节拍层级和相位都对，AMLt 还允许 2 倍速、半速和错拍，CMLc 和 AMLc 只看最长连续正确段以衡量连续性。生成轨另用 Audiobox Aesthetics 的 Production Quality（PQ，1–10，越高越好）做初步音质评估。所有结果先按歌曲计算再平均。

### 在 GTZAN 上生成式方法准确率如何

先看总体准确率问题。比较对象是三版自家生成模型、扩散对照、现成伴奏模型与两个传统跟踪器，输入都是全混音，指标方向都是越高越好，重点看 70 ms 的 F-measure 与反映跟随能力的 AMLt。

**F-measure × AMLt：** F-measure 检验每个预测拍点是否落在标注附近，论文报告 70 ms、100 ms 和 150 ms 三种容差，容差越大越宽松；AMLt 则允许两倍速、半速和错半拍，主要看模型是否跟住歌曲而不丢失整体进行。两者搭配后，前者反映点对点的对齐精度，后者反映是否保持连续跟随，论文正是用这种组合说明生成模型 F-measure 略低但 AMLt 反超，误差多在节拍层级和相位而非彻底跟丢。

下表是 GTZAN 全混音输入下的完整原表，保留了训练规模、可训练参数与全部指标，PQ 越高表示初步音质越好，传统方法无 PQ。这张表比较的是现有方法整体效果，条件限制是生成侧三版目标训练数据相同，Stable Audio ControlNet 也用相同歌曲与目标，STAGE 与传统方法训练数据不同，因此这是现有方法对比而非严格同数据架构对比。

| Method | Training songs | Params | F70 | F100 | F150 | CMLt | AMLt | CMLc | AMLc | PQ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Ours (Click) | 1319 (49 h) | 10.4 M | 0.851 | 0.871 | 0.889 | 0.756 | 0.907 | 0.731 | 0.874 | 6.27 |
| Ours (Groove synth) | 1319 (49 h) | 10.4 M | 0.850 | 0.866 | 0.882 | 0.736 | 0.912 | 0.713 | 0.881 | 6.88 |
| Ours (Groove sampled) | 1319 (49 h) | 10.4 M | 0.849 | 0.863 | 0.878 | 0.727 | 0.907 | 0.704 | 0.877 | 5.93 |
| Stable Audio ControlNet | 1319 (49 h) | 561 M | 0.691 | 0.728 | 0.772 | 0.553 | 0.753 | 0.512 | 0.687 | 7.54 |
| STAGE | 214 (13 h) | 420 M | 0.335 | 0.443 | 0.609 | 0.244 | 0.482 | 0.201 | 0.387 | 7.09 |
| Beat This! | 4556 (167 h) | 20.3 M | 0.888 | 0.901 | 0.913 | 0.793 | 0.895 | 0.751 | 0.834 | – |
| madmom | ∼1100 (12 h) | 0.73 M | 0.870 | 0.884 | 0.898 | 0.773 | 0.923 | 0.753 | 0.894 | – |

读表可见自家三版在 F70 上为 0.851、0.850 和 0.849，几乎没有差别，说明从 Click 到更像真实演奏的 Groove 目标没有带来可见的 F-measure 差异。Beat This! 为 0.888，madmom 为 0.870，生成式仍接近但未超过。放宽到 150 ms 时排序不变，但 Stable Audio ControlNet 和 STAGE 提升最多，说明它们很多拍点离标注不远，论文认为时间精度是原因之一：其隐变量每帧约 46 ms，而 MusicGen 为 20 ms。

值得细看的是 AMLt。自家模型 F-measure 和 CMLt 低于 Beat This!，但 AMLt 高于它，AMLc 同样如此，表明生成轨连续性好，主要误差在节拍层级或相位而非彻底跟丢。跟踪器与 madmom 都用 DBN 而 Beat This! 不用，DBN 本身偏向连续，但同管线用于 Stable 与 STAGE 时 AMLt 低得多，因此不能只用 DBN 解释该结果。

音质上 Stable 与 STAGE 的 PQ 更高，自家 Groove（sampled）最低为 5.93，论文归因于只训练适配器且冻结生成器，以及既要帧级跟随又要真实音色的双重要求本身就难。按耳朵听，前两者更像真实演奏，但常与拍子错位或加入随意加花，未胜出的 STAGE 在 GTZAN 上 F70 仅 0.335 就是反例。

### 去掉鼓声后谁的下降最小

本节回答鼓声消失后模型能否靠其他乐器保持。做法是在推理时把输入换成经 HT Demucs 去鼓后的音频，其他设置不变，ASAP 是钢琴独奏没有鼓故不分离。为公平，还要考虑训练时是否见过去鼓音频：第 4 节报告的自家模型与 Stable Audio ControlNet 训练时都用了去鼓增强，而 Beat This! 与 madmom 据论文所知没有，因此额外训练了不用该增强的 Ours（w/o DR aug），它与后两者一样没见过去鼓音频，目标统一用 Groove（sampled）。

**drum removal × onset strength：** drum removal 是在推理时用 HT Demucs 把鼓声分离去掉，只留其他乐器，考验模型能否不依赖最直接的鼓点线索；onset strength 是用谱通量度量的起始强弱，表示某时刻能量突增在整首歌内的相对显著程度。两者搭配后，前者制造鼓弱或无鼓条件，后者量化该条件下强起始是否落在拍上、弱起始是否被漏掉，组合起来才能判断模型是真跟住节拍还是只跟响亮起始走。

先看去鼓前后 F-measure 与 AMLt 的变化趋势，重点是连线越短表示下降越小、鲁棒性越好，下面这张图同时给出保留集与验证子集的对照。

> **看图路径：** 1. 对比实心原混音与空心去鼓标记的上下位置，先看 GTZAN 面板；2. 在 GTZAN 两项指标中核对 Ours（w/o DR aug）与 Beat This! 的降幅大小；3. 再看各验证子集连线长短是否一致，注意上下两排分别为 F-measure 与 AMLt

[![原论文 Figure 3：F-measure (70 ms, top) and AMLt (bottom) of each method before and after the drum track is removed.](https://arxiv.org/html/2611.14971v1/fig_drum_drop_v4.svg)](https://arxiv.org/html/2611.14971v1/fig_drum_drop_v4.svg)

*论文图 3。原论文 Figure 3:：“F-measure (70 ms, top) and AMLt (bottom) of each method before and after the drum track is removed.”。*

这张图确实可见各方法从实心标记的原混音到空心标记的去鼓音频的变化，上下两排分别是 70 ms 容差的 F-measure 与 AMLt，连线越短表示下降越小。按 GTZAN 面板的像素，Ours（w/o DR aug）的 F-measure 图内标注约 −0.14，Beat This! 约 −0.09，因此前者连线反而更长；AMLt 面板中 Ours（w/o DR aug）图内标注约 −0.12，线也长于 Beat This!训练时使用去鼓增强的 Ours 在 GTZAN 两项指标上的连线较短，Stable Audio ControlNet 的 F-measure 下降则接近 madmom。

这个面板说明鲁棒性要按条件变弱前后的差值读，而且版本之间的优劣并非一律：不能把两版都概括为全面比 Beat This! 与 madmom 更稳。

论文正文把趋势概括为：即使不用去鼓增强，自家模型在两项指标上的下降也小于 Beat This! 与 madmom；但按图 3 的 GTZAN 数值，这一概括至少对 Ours（w/o DR aug）与 Beat This! 的 F-measure、AMLt 比较不成立。更稳妥的读法是，训练时使用去鼓增强的 Ours 在该面板表现出较小降幅，而 Ours（w/o DR aug）只在部分验证子集和部分比较中接近或更稳。

在全混音上 Ours（w/o DR aug）的 F-measure 低于 Beat This! 与 madmom，论文正文称去鼓后能追平 Beat This! 并明显超过 madmom，但图中 GTZAN 上 w/o DR aug 对 Beat This! 的差距并未按这一方向消失。论文仍推测自回归逐步生成可能有助于延续已有节奏：每步基于已生成内容继续，已建立节奏后即使歌曲线索变弱也能保持。

这个机制解释需要更多实验确认。

但并非所有生成模型都有此好处，扩散模型一次生成整段音频，没有逐步延续，可能是其下降更大的原因之一，但确认需要更多实验。

下表整理论文为证明拍点主要来自生成轨而做的两组对照，比较问题是同一轻量跟踪器换输入与同一生成轨换提取方式时分数如何变化，指标为原文报告的 F-measure。表前说明条件：对照以 Ours（Click）为例，峰值拾取参数只在验证子集上调优。

| 条件 | 输入 | F-measure |
| --- | --- | --- |
| 生成打击乐后直接做起始峰值拾取 | 生成的打击乐 | 0.747 |
| 生成打击乐后用轻量拍点跟踪器 | 生成的打击乐 | 0.851 |
| 同一轻量跟踪器直接读原歌曲 | 原歌曲 | 0.373 |

对照表明不用任何拍点跟踪器而直接对生成轨做起始峰值拾取仍有 0.747，用跟踪器为 0.851，而同一跟踪器直接读原歌曲只有 0.373。因此拍点主要由生成轨给出，跟踪器起校正作用，生成步骤不可省略。这个结论只在当前跟踪器结构和调参范围内成立，不能推广到任意提取器。

### 起始强弱与漏拍错拍的关系在哪些风格中最清楚

本节回答模型是否过度依赖响亮起始。论文用谱通量度量起始强度，先算对数梅尔谱相邻帧正向差之和，再在整首歌内标准化，得到每帧相对强弱。分析分两路：一是标注拍子处起始越弱是否越易漏，二是拍间的响亮起始是否越易被误当拍子。两路都按分位数分成 5 组，组内先按歌曲计算再平均歌曲，且只保留 Beat This!、madmom、自家两版预测速度与标注都相差不到 10% 的歌曲，共 458 首，以排除 2 倍速半速这类八度误差对漏误统计的干扰。

下面 3 条公式分别对应强度、漏拍率和误报率的计算，读时先看它要约束什么，再看符号指代哪个对象。

\[s(t)=\frac{f(t)-\mu}{\sigma},\qquad f(t)=\sum_{m}\max\bigl(L(m,t)-L(m,t-1),\ 0\bigr),\]

该式计算第 t 帧的起始强度 s(t)，其中 L(m,t) 为输入音频对数梅尔谱在梅尔带 m、帧 t 的值，f(t) 为各带正向差之和，μ 与 σ 为该首歌内 f(t) 的均值与标准差，因此 s(t) 是歌内标准化的相对强弱，无量纲。

\[M_{k}=1-\frac{\bigl|\{\,b\in B_{k}:\min_{e\in E}|b-e|\leq 70\,\mathrm{ms}\,\}\bigr|}{|B_{k}|}.\]

该式计算第 k 组的漏拍率，Bk 为落入该强度组的标注拍集合，E 为模型提取的拍点集合，分子是 70 ms 内有预测命中的标注数，分母是该组标注总数，1 减命中率即漏掉比例，越低越好。

\[F_{k}=\frac{\bigl|\{\,o\in O_{k}:\min_{e\in E}|o-e|\leq 70\,\mathrm{ms}\,\}\bigr|}{|O_{k}|}.\]

该式计算第 k 组的误报率，Ok 为响亮但不在拍上的拍间起始集合，要求局部峰大于 0 且距最近标注至少 140 ms 和至少 0.2 拍，分子是 70 ms 内被误当拍子的起始数，分母是该组拍间起始总数，同样越低越好。

结果按 GTZAN 风格分组，去鼓音频上最清楚的是 metal 和 disco。自家 Groove（sampled）在每组起始强度下漏拍率最低，误报率随拍间起始变强保持低位，而 Beat This! 与 madmom 的误报率陡升，不用去鼓增强的版本介于中间。在 rock 和 pop 上 madmom 明显差于其他方法，其他风格各方法接近。classical 不同，它几乎没有鼓，去鼓变化小，所有方法漏拍率都随起始变强明显下降。

单样本更直观，下面这张 disco 例子的上下对比把鼓与起始的耦合暴露出来，读图时先看曲线高低再看红蓝预测线的偏移。

> **看图路径：** 1. 先看上下两排原混音与去鼓音频的起始强度曲线高低变化；2. 对比黄色标注拍点与各方法蓝色正确和红色错误预测的对齐；3. 注意数字 1 到 5 表示该位置起始强度在歌内的分位组别

[![原论文 Figure 5：Onset strength s(t) and the beats of each method on gtzan_disco_00036 (11–16 s), with the full…](https://arxiv.org/html/2611.14971v1/fig_onset_example_c5_5s_final2.svg)](https://arxiv.org/html/2611.14971v1/fig_onset_example_c5_5s_final2.svg)

*论文图 5。原论文 Figure 5:：“Onset strength s(t) and the beats of each method on gtzan_disco_00036 (11–16 s), with the full mix on top and drum-removed audio below.”。*

这张图确实可见 gtzan_disco_00036 在 11 秒到 16 秒内，原混音下标注拍上的强度多为 4 到 5 组，各方法都预测正确；去鼓后拍上多降到 1 到 3 组，而拍间的起始仍多为 5 组，Beat This! 与 madmom 几乎整段半拍偏移到拍间红线上，同时犯下漏拍和误报，本文方法（Ours w/o DR aug）仍保持在黄色标注拍线上，连强度组为 1 的弱拍也未丢。它支持论文讨论：鼓通常在拍上产生最强起始，去鼓后强起始落到拍间，最依赖起始的模型最易被误导。

论文未展示的另一张分风格曲线与此一致，但本节结论只在 tempo 正确子集和去鼓条件下成立，不能推广到速度估计错误或全混音情形。

### 哪些结论成立条件有限还不能推广

首先是可比性。各生成模型的训练数据不完全相同，STAGE 只用 214 首约 13 小时，Beat This! 用 4556 首约 167 小时，因此这是现有方法对比而非严格架构对比，不能说自回归一定优于扩散。Stable 下降大可能与整段生成、时间分辨率或训练细节都有关，论文也写明确认需要更多实验。

其次是去鼓条件的含义。去鼓音频来自声源分离，不是自然无鼓音乐，分离残留和伪影可能影响各方法，只是影响方式不同。ASAP 本来就没有鼓故未分离，classical 去鼓前后变化小，这些风格上的差异说明鲁棒性结论与乐器编制强相关。八度误差的排除也只用速度差不到 10% 的 458 首子集，漏误分析不覆盖速度估计错误的情况。

最后是音质与提取器的限定。音质只用 PQ 初步评估，没有听音测试，自家 Groove（sampled）PQ 最低不能直接等同于人听最差。DBN 本身偏向连续，跟踪器结构、峰值拾取参数只在验证子集调优，0.747 与 0.373 的对照只证明在当前管线下生成轨是主要信息源。论文在讨论中承认这些边界，总体准确率接近最优、训练时使用去鼓增强的主模型在 GTZAN 去鼓条件下降幅较小、特定风格更少跟错起始，都只在上述数据、容差和子集条件下成立。

### 复现第一步做什么需要哪些信息条件

复现应从数据与目标合成开始，而不是直接调模型。先按 Beat This! 整理的划分拿到 Ballroom、Hainsworth、RWC 和 ASAP 的拍点标注，用风格标签为每首合成 3 种目标中的至少一种，Click 最易实现，重拍底鼓、他拍踩镲即可；Groove（sampled）还需 Groove MIDI 数据集与 AVL Drumkits 采样，并按小节对齐与渲染。风格标签只用于构造目标，推理时不能作为输入。

接着准备冻结的 MusicGen-large 作编码、MusicGen-small 作生成，只新建并训练适配器，损失是对目标 EnCodec token 的交叉熵，训练用 10 秒片段、30 个 epoch、余弦学习率从 3×10−4 到 0，并实现 0.8 概率静音上下文与 0.5 概率去鼓增强，后者需要 HT Demucs。验证需用 madmom 从生成轨提取拍点并按 70 ms 的 F-measure 选检查点，推理取前 30 秒一次贪心生成并加系数 1.5 的无分类器引导，最终评价用 mir_eval。

论文在摘要和正文提到演示页链接 <https://kunfang98927.github.io/generative-beat-tracking/>，本次收到的资源记录将其标为 third_party 且可达，这只证明论文提到该链接，不证明作者已公开代码。STAGE 用的是作者发布权重，系统可运行、权重可下载与代码开源是三件事，本篇没有给出可核验的作者代码记录，复现时应按上述信息条件自行实现适配器与跟踪器，并保留关键超参数与是否用过去鼓增强的记录，否则去鼓对比无法复现。

### 什么时候值得尝试生成式拍子跟踪

当任务不仅要拍点时刻，还想要一段可听且与歌曲同步的打击乐时，这条路线值得尝试。它在 GTZAN 全混音上达到约 0.85 的 F-measure，AMLt 甚至高于 Beat This!，说明跟随连续性好，误差多在层级与相位。在预期鼓弱、鼓缺或拍间有强干扰起始的曲目中，尤其是 metal 和 disco 这类去鼓后仍能保持低漏报的情形，生成式更不容易整体半拍偏移。

当追求单点精度极限、计算预算紧张或需要严格同数据架构结论时，则要谨慎。自家方法仍低于 Beat This! 与 madmom 的 F-measure，目标复杂度未带来可见增益，音质初步评估也偏低，冻结生成器加小适配器的方案同时背负跟随与音色的双重要求。第一步建议先复现 Click 目标与轻量跟踪器，验证 0.747 到 0.851 的增益是否存在，再补去鼓与分强度分组这两项验证，缺了它们就无法判断模型是真跟住节拍还是只跟响亮起始。

容易产生的误解是把高 AMLt 当成全面更准，或把某一子集的去鼓后追平当成全条件更优。原文明确 AMLt 允许变速与错拍，它只说明没跟丢；去鼓实验也只在分离音频与 tempo 正确子集上成立。把适用条件、容差、聚合方式与训练规模一起报告，才能如实复述这篇论文的价值。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.14971v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-13/)
