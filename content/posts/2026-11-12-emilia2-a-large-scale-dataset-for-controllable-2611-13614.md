---
title: "Emilia2: A Large-Scale Dataset for Controllable Long-Form Speech Generation"
date: 2026-11-12
draft: false
tags: [文本到语音, 数据集构建, 韵律与风格控制, 基准测试]
categories: [论文速递]
description: "Emilia2 用同一批网络音频同时构造短句、单人长语音和多人对话三种视图并配上风格指令与非语言发声标注，再用 0.6B 的自回归与非自回归两套模型验证长时连贯与分钟级可控生成的可行性与代价。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.13614"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "Emilia2：面向可控长时语音生成的大规模数据集"
paper_digest_original_title: "Emilia2: A Large-Scale Dataset for Controllable Long-Form Speech Generation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.13614v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.13614v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.13614v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"task","id":"task.prosody-style-control","label":"韵律与风格控制"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "数据集构建"
paper_digest_score: 7.6
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "Emilia2 用同一批网络音频同时构造短句、单人长语音和多人对话三种视图并配上风格指令与非语言发声标注，再用 0.6B 的自回归与非自回归两套模型验证长时连贯与分钟级可控生成的可行性与代价。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qinke Ni"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Dekun Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Junwen Qiu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Huan Liao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xu Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xingwen Han"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wan Lin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kunyu Feng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuxiang Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yusheng Mu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chaoren Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yingda Shen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Mingjie Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Haolong Zheng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xulin Fan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Mark A. Hasegawa-Johnson"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhizheng Wu"}]
paper_digest_abstract_sha256: "782b473f6f264ff3159d26ec393d0a6e9174b1ae1f18ca7433bf7d35f1722941"
paper_digest_sidecars: {"citation.bib":{"sha256":"b47ade027877f0b66e54b66332a11550093f3357f04dcfe6dceebe31ab7a1b26","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-13614/citation.bib"},"citation.json":{"sha256":"df3e445ee7fa75c7e520e6bcdfada79ef04d2aae4c0da2b40b50487710faceaf","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-13614/citation.json"},"citation.ris":{"sha256":"8d44ee10dfd4034fc2c68cab9d59bbcede1c82f37fbb6e6d820c83712f116e95","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-13614/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"8e48ed53ed4dbc7c6f90557aa49aeac607c48cfe74e3468985319315eeaf6bfc","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-13614/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "4023ee630321e40f6f720c85324416fe0edd3471d0e03ab71731c1c607f3704a"
paper_digest_api_reader_plan_sha256: "154dddb88b19fac03f652a06dd0eee302dd8d9dd5292ec74b9c02de8da0a4c44"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "226f57df962823e0b6a5a35d0d7662e6dd19d3263ce70afe8a66bd93f682b70a"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "72ce3d342e687c1fdf638da193039e66cdc62a583723c9e14210d4fa8dd050d0"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "c5f68d5c491916ba732cf5c7a6e3b5114921a00378582f339ca99f8499506ae6"
paper_digest_api_reader_author_count: 17
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "134fcd211bd5317b21d5a3674a623e81bd654be2bdf4f64fcf13119e65e1ff35"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 Emilia2：面向可控长时语音生成的大规模数据集

> 英文题目：*[Emilia2: A Large-Scale Dataset for Controllable Long-Form Speech Generation](https://arxiv.org/abs/2611.13614v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-paper-digest-blog/papers/?concept=task.tts)；[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [韵律与风格控制](/audio-paper-digest-blog/papers/?concept=task.prosody-style-control)
- **研究方法**：[数据集构建](/audio-paper-digest-blog/papers/?concept=method.dataset-curation)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.6/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Qinke Ni：机构信息未能在本次解析中与作者逐人可靠绑定
- Dekun Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Junwen Qiu：机构信息未能在本次解析中与作者逐人可靠绑定
- Huan Liao：机构信息未能在本次解析中与作者逐人可靠绑定
- Xu Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Xingwen Han：机构信息未能在本次解析中与作者逐人可靠绑定
- Wan Lin：机构信息未能在本次解析中与作者逐人可靠绑定
- Kunyu Feng：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuxiang Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yusheng Mu：机构信息未能在本次解析中与作者逐人可靠绑定
- Chaoren Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yingda Shen：机构信息未能在本次解析中与作者逐人可靠绑定
- Mingjie Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Haolong Zheng：机构信息未能在本次解析中与作者逐人可靠绑定
- Xulin Fan：机构信息未能在本次解析中与作者逐人可靠绑定
- Mark A. Hasegawa-Johnson：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhizheng Wu：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

长语音合成要求在数分钟到30分钟内保持文字对齐、说话人身份、轮次顺序、停顿衔接和表现风格稳定，短句拼接常出现音色漂移和韵律断裂，而已有公开训练数据多为30秒以内片段，公开且带每说话人参考音频的长基准最多覆盖两名说话人。Emilia2先从播客、直播、访谈、公共谈话、影视解说、体育和游戏等野外录音经人声分离、说话人日志和端点切分输出带说话人标记的连续区间，再经质量过滤、语言识别和转写送入区间组织，构建可互相定位的短句、单人长语音和多人对话三种视图并保留原始停顿与声学过渡。最后对5分钟以内片段提取感知年龄性别、口音、音高、情感、语速响度等属性送入Qwen3-Omni-30B-A3B-Captioner生成风格说明，并用Multilingual-NVASR把笑声、咳嗽、叹息等非言语发声与文字交错转写为标记。与已有短句语料相比，关键差异是显式建模说话人切换、把指令监督扩展到长上下文和多人对话。在TTSD-Eval评测中，0.6B非自回归模型的中文字符错误率5.27%和英文词错误率9.93%，低于所有参评对比系统。在InstructTTSEval评测中，自回归模型的中英文评分分别为76.2/78.3，与Qwen3-TTS-12Hz-VD的77.1/77.9相当。结论适用于中英文长叙述和对话的内容与风格控制，多语言与更长时长的泛化仍需验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://charlesnii.github.io/Emilia2-demo/> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/audeering/> → <https://huggingface.co/audeering> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/tiantiaf/wavlm-large-age-sex> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/interactiveaudiolab/penn> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 长时语音生成要解决什么输入输出问题

这篇论文处理的是可控长时语音生成。输入是一份完整剧本，包含文字、轮次顺序、每个轮次的说话人标识，以及每位说话人的一段参考音频，有时还有风格指令或非语言发声要求。输出是一整段连续语音，要求内容与剧本对齐、每位说话人音色稳定、停顿与轮次衔接自然，并且在需要时表现出指定的风格或插入笑声、咳嗽等事件。

与常见的短句文本转语音不同，长时任务必须保留的信息更多。除了单句可懂度和音色相似，还要保留跨句韵律、跨轮次的说话人一致性，以及原始录音中的停顿和过渡。如果只是把短句模型逐句合成再拼接，容易出现音色漂移、停顿不自然和韵律断裂。论文指出，已有开放训练语料多为数十秒以内的例子，开放长时评测最多覆盖 2 位说话人，因此需要同时提供长时训练数据和更多说话人、更长时长的评测。

### 已有数据集和评测各缺了哪一块

理解本文位置需要把训练数据、评测基准和模型路线分开看。训练数据方面，Emilia 保留至多 30 秒的短句，MinutesSpeech 把单人例子延长到 180 秒，OpenDialog 提供 30 秒内的对话，ParaSpeechCaps 和 CapSpeech 侧重风格描述，DNASpeech 加入对话上下文与动作，Emilia-NV 对齐非语言事件，但这些标注都附在短片段上。评测方面，Long-TTS-Eval 关注单人长语音，TTSD-Eval 关注对话，InstructTTSEval 和 NV-Bench 分别评测短句指令跟随与非语言生成，而开放长时评测中带每人参考音频的至多 2 位说话人。

模型方面，指令型语音合成把自然语言描述映射为风格，但多在短句上训练评测；长时生成则有层次化编解码建模、自回归符号预测、语言模型加扩散、掩码声学符号预测等多种路线。论文的比较是在相同任务和输入条件下进行，不把短句风格控制与长时对话直接排胜负。

下表概括了训练数据集在时长、对话、指令和非语言标注上的覆盖差异，有助于定位 Emilia2 补齐的是哪几列。该表比较的问题是已有语料是否同时支持长时与可控表达，指标是各属性的有无，条件是原文表 1 的统一口径。

| Resource | Hours | Language | Instruction | NV |
| --- | --- | --- | --- | --- |
| Emilia (He et al., 2025) | 216,000 | 6 | ✗ | ✗ |
| MinutesSpeech (Nishimura et al., 2025) | 40,000 | 1 | ✗ | ✗ |
| Emilia2 (this work) | 229,000 | 41 | ✓ | ✓ |

从表中可见，只有 Emilia2 同时勾选了长时、多人对话、指令和非语言四项。其他语料各有所长，但都缺少至少一项。这解释了为什么论文要新建统一 3 种视图并附带两类表达标注的数据，而不是只扩大短句规模。

### 论文把任务拆成哪三类数据视图

论文把可控长时生成的数据需求拆成 3 个互补视图。第一是短句，用于提供局部文字与音频对齐，时长 0.5 到 30 秒。第二是单人长语音，至少 30 秒且无上限，用于学习同一说话人内部的停顿与声学过渡。第三是多人对话，至少 30 秒、包含 2 到 6 位说话人，用于学习轮次顺序、时间关系和身份切换。

关键约束是保留原始连续性。长时两类视图保留所选区间内的连续人声主干，包括天然停顿和跨句过渡，而不是把独立修剪的短句拼接起来。短句与长时视图可以指向同一源录音的不同起止区间，论文用区间清单指向同一份分离后的人声文件，避免重复存音频。这种设计让短句能定位在其更长的上下文中，也让统计总量时需要区分视图求和与源音频去重两种口径。

### Emilia2-Pipe 如何把网络音频变成三种训练例子

Emilia2-Pipe 是整套处理与标注流水线。起点是 41 种语言的网络音频，包括播客、直播、访谈、公开演讲、影视评论、体育和游戏等。先用 FFmpeg 检查并丢弃采样率低于 24 kHz 的来源，其余解码为 44.1 kHz 单声道，再用 Mel-Band RoFormer 分离出人声主干，后续全部处理和训练都基于该主干。

随后 DiariZen 给出说话人活动区域和说话人时间线，FireRedVAD 在这些区域内精修边界并切分。每个片段保留源时间戳和说话人归属。接着计算 DNSMOS 整体质量分并用自研合成语音分类器筛查中英文合成语音，长时候选按整段加权评估而非要求每段都过短句阈值。再由 FireRedLID 识别语言并路由到 Qwen3-ASR-1.7B 或 IndicConformer-600M 转写。最后按合并规则生成 3 种视图，短句要求语言置信度、有效文本和发声时长与文本长度比等条件，长时保留停顿，对话控制重叠比例和轮次数量。

要读懂下面这张流水线总览，请先沿顶部虚线框看增强、日志、转写到合并的主链，再看底部两类标注如何接入，最后对照右侧 3 类输出的时间与说话人标记。

> **看图路径：** 1. 先沿左上虚线框看从网络音频到说话人合并的主路径；2. 再看左下三种视图如何汇入中间的指令与非语言标注；3. 最后看右侧三类输出例子如何同时保留说话人、时间和标注

[![原论文 Figure 1：Pipeline overview of Emilia2-Pipe.](https://arxiv.org/html/2611.13614v1/Emilia2-Figure1-unlocked-v8.png)](https://arxiv.org/html/2611.13614v1/Emilia2-Figure1-unlocked-v8.png)

*论文图 1。原论文 Figure 1:：“Pipeline overview of Emilia2-Pipe. In-the-wild recordings are enhanced, diarized, transcribed, and merged into single-speaker or multi-speaker audio.”。*

该图确实可见顶部从网络数据经语音分离、说话人日志到多语言转写再到合并的链条，中间是性别、年龄、口音、音高、情绪、语速和响度等属性送入描述器，以及非语言识别器输出带标签的文本，右侧分别给出短句、单人长语音和多人对话的指令与时间示例。它帮助理解样本如何从原始录音一步步变成带说话人、时间、指令和标签的训练例子。

**单人长语音 × 多人对话：** 单人长语音是把同一说话人的相邻片段沿原时间轴连成至少 30 秒的段落，用于学习停顿和跨句韵律；多人对话是保留 2 到 6 人原始轮次顺序和时间关系的至少 30 秒窗口，用于学习轮替和身份切换。两者共享同一套底噪分离与过滤，只是合并规则不同，共同把短句对齐扩展到长上下文。

### 两套验证模型各用什么方式从条件生成语音

论文用两套不同范式验证数据，骨干都是 Qwen3-0.6B。Emilia2-AR 结合自回归符号预测与流匹配声学重建，Emilia2-NAR 做掩码声学符号预测。两者都以剧本、指令和参考语音为条件，但生成顺序和声学解码不同。

下图左侧为 AR，右侧为 NAR，请注意左侧是逐符号向前生成并用说话人标识切换参考音色，右侧是从全掩码网格出发并行迭代去掩码。

> **看图路径：** 1. 对比左侧因果模型逐符号生成与右侧双向模型并行补全的箭头方向；2. 观察说话人标识如何选择参考音色；3. 观察掩码目标与编解码器在推理时的循环关系

[![原论文 Figure 9：Emilia2 model architectures.](https://arxiv.org/html/2611.13614v1/Emilia2-model-architectures.svg)](https://arxiv.org/html/2611.13614v1/Emilia2-model-architectures.svg)

*论文图 8。原论文 Figure 9:：“Emilia2 model architectures. (a) Emilia2-AR combines autoregressive token prediction with flow-matching reconstruction.”。*

该图左侧可见文本加指令与参考语音进入因果大模型，输出说话人标识加语音符号，再经流匹配变换器和声码器得到语音，虚线表示参考音色参与重建；右侧可见指令加文本、提示与被掩码目标进入双向变换器，并行预测后经编解码器解码，虚线表示迭代去掩码循环。它把两种路线在一个样本上的输入、中间符号与输出关系讲清楚了。

AR 的目标是对目标序列在给定条件下的连乘概率建模，每个符号依赖之前符号与全部条件，训练时最小化观测序列的负对数似然。参考语音及其文本提供上下文音色示例，有序对话轮次监督说话人标识转移，指令与非语言标注提供风格与事件条件，声学侧再由条件流匹配生成梅尔频谱并经声码器成波。

\[p_{\phi}(Z\mid\mathcal{C})=\prod_{\ell=1}^{L}p_{\phi}(z_{\ell}\mid z_{<\ell},\mathcal{C}),\]

上式要计算的是整个目标序列的生成概率，符号 Z 表示语音符号与说话人标识序列，条件包括剧本、指令和参考语音，连乘表示逐位置自回归依赖。

NAR 的目标是对每个被掩码位置预测其码本符号，给定可见部分与条件，逐掩码位置取负对数似然并按码本加权。训练时按 30%、50% 和 20% 概率采样全掩码、由粗到细掩码与独立逐单元掩码，推理时从全掩码出发并行迭代揭示置信度高的子集，优先低索引码本，参考与已填位置保持固定，最后由声学解码器重建波形。

\[\ell_{k,t}(\theta)=-\log p_{\theta}(x_{k,t}\mid\widetilde{X},\mathcal{C}),\qquad M_{k,t}=1.\]

该式约束的是单个被掩码条目的预测损失，其中 X 表示多码本多帧的目标符号网格，波浪线 X 表示掩码后输入，M 为掩码指示，条件同样包括剧本与参考音色。它说明可见符号提供双向声学上下文，掩码位置提供监督。

**说话人日志 × 语音活动检测：** 说话人日志负责回答谁在什么时候说话，给出整段录音的说话人时间线；语音活动检测负责把有声边界修准确并切成可处理的小段。前者解决身份归属，后者解决边界精度，两者结合才得到带时间戳和说话人标签的片段，供后续转写和合并使用。

**自回归 × 非自回归：** 自回归指 Emilia2-AR 从左到右逐个预测语音符号和说话人标识，适合处理不定长轮次切换；非自回归指 Emilia2-NAR 用双向变换器并行预测被遮盖的声学符号网格，适合利用双向上下文一次补全。论文用同一数据同时训练两者，对比它们在内容准确和音色相似上的不同长处。

### 风格指令与非语言标签如何从声学证据生成

表达标注只做到短于 5 分钟的片段，以保证准确性。指令标注先用专用属性模型与信号测量估计感知年龄与性别、口音、音高、情绪、语速和响度，超过 30 秒的片段还保留情绪、语速和响度随时间变化的区间。然后 Qwen3-Omni-30B-A3B 描述器把这些属性转成自然语言指令。30 秒内片段可同时给音频与文本提示，更长片段只用文本提示，遵循模型对细粒度描述的音频长度建议。

指令形式有 4 种。声学参数规范是紧凑的分号列表，描述性风格指令是用散文讲音高、语速、响度与情绪，角色扮演方向是抽象角色与氛围但须与属性一致，自由形式还要给出合理的说话人角色与场景。4 种都要求与提取属性一致，不得引用或复述说话内容，对话按说话人标签逐人描述。年龄是年轻成年人之类的短语而非具体岁数，缺失属性直接省略。

非语言标注用 Multilingual-NVASR 处理中英文，把文字与[Laughter]、[Cough]、[Sigh] 等结构化标签交织成一个序列。若含标签则用该序列替代原转写作为训练文本，否则保留原转写。两类标注分工不同，指令说明整段应如何表演，标签指定离散事件在词间的位置与顺序。

**风格指令 × 非语言发声标签：** 风格指令是用自然语言描述应该怎么说，如性别、年龄段、口音、音高、情绪、语速和响度；非语言发声标签是在文字流中插入离散事件，如[Laughter] 和[Cough]。前者是全局或分段的表演要求，后者是具体位置的声学事件，两者互补，共同实现可控表达。

### 四阶段课程如何逐步放宽时长与任务

两套模型遵循相同的 4 阶段课程，逐步增大上下文时长与任务复杂度。先在 Emilia2 短句上训练，输入上限 30 秒；再在单人长语音上把最大上下文扩展到 30 分钟；第 3 阶段在单人与对话上联合训练多人对话合成；最后在指令与非语言子集上做表达微调。

实现上都在 8 卡上用 BF16 混合精度训练。AR 用 AdamW、权重衰减 0.01、梯度裁剪 1.0，前 3 个阶段 3% 预热加余弦衰减，表达微调固定学习率，代表性设置为短句与长时学习率 2 乘 10 的负 4 次方、最大符号长度 32768，对话与微调长度 50480、微调学习率 1 乘 10 的负 5 次方，梯度累积前 3 阶段为 1、微调为 4。NAR 前 3 阶段学习率 10 的负 4 次方，微调 10 的负 5 次方。论文未披露完整步数与硬件时长缺口之外的细节，因此不能补算训练成本，只能按原文阶段目标理解时长泛化与多任务能力的来源。

### 评测集、基线与指标在什么条件下可比

长时评测用 Emilia2-testset、TTSD-Eval 和 Long-TTS-Eval，短时控制评测用 InstructTTSEval 和 NV-Bench。长时表达控制另从短于 5 分钟的 Emilia2-testset 用例中各建一个集合，指令用人工修正的流水线指令，非语言用改写后插入标签的剧本。基线方面，长时对比 Higgs Audio v2、VibeVoice-1.5B 和 MOSS-TTSD，短时指令对比 VoxInstruct、FlexiVoice-Base 和 Qwen3-TTS-12 Hz-VD，短时非语言对比 Orpheus-TTS、SMIIP-NV-CV2 和 CosyVoice 3。长时控制因开放基线不支持显式控制，只比较 AR 与 NAR。

客观指标中，Emilia2-testset 报告词或字错误率、说话人相似度和说话人归属准确率，沿用 TTSD-Eval 协议并适配至多 30 分钟、1 到 4 人；TTSD-Eval 按官方双人对话协议，用强制对齐得片段再与提示音色比对；Long-TTS-Eval 按官方内容错误协议并额外报告相似度；短时指令用大模型打分，非语言用识别器算标签与文本错误。主观听测分开做自然度、指令跟随度和非语言质量三项 1 到 5 分。所有指标方向为准确率、相似度和主观分越高越好，错误率越低越好。

下表说明新评测集的构成与可比基础，比较的问题是该基准是否覆盖更长、更多人的开放评测，条件是目标录音时长与说话人数分布。

| Language | Cases | Single-speaker | Dialogue | Audio (h) | Avg. (min) |
| --- | --- | --- | --- | --- | --- |
| Chinese | 59 | 18 | 41 | 11.6 | 11.84 |
| English | 59 | 24 | 35 | 11.7 | 11.86 |
| Total | 118 | 42 | 76 | 23.3 | 11.85 |

该表显示中英文各 59 例共 118 例，单人 42 例、对话 76 例，总计 23.3 小时，平均 11.85 分钟，范围 0.9 到 30.0 分钟。每位说话人配有参考音频，且训练与测试按完整源与去重组隔离。它的意义在于把以往最多 2 人的开放评测扩展到 4 人，为后文按人数与时长分层分析提供单元格划分。

**内容错误率 × 说话人相似度 × 说话人归属准确率：** 内容错误率用中文字符错误率和英文词错误率衡量说的内容对不对，越低越好；说话人相似度衡量生成声音与提示音色的余弦接近程度，越高越好；说话人归属准确率衡量每个切分片段是否被判给剧本指定的说话人。三者分别回答说什么、像谁说、轮次有无错乱，不能互相替代。

### 数据集规模与来源构成能否支撑长时训练

Emilia2 总量为去重后 20497038 条、229388 小时、41 种语言。3 种视图因共享源录音而部分重叠，视图求和为 105643159 条、398467 小时，其中短句 99841007 条、146325 小时，单人长 4243913 条、155688 小时，对话 1538239 条、96452 小时。指令标注 4766441 例、25053 小时，其中单人与对话占 19950 小时，非语言 933006 例、14626 小时，仅中英文。长于 5 分钟的例子占单人小时的 50.0% 和对话小时的 66.8%，长于 30 分钟的分别占 11.9% 和 23.7%。10 种语言在短句中各超 1000 小时。

下表比较的问题是各视图的样本数与小时数如何分布，公平条件是三视图共享源但总量按视图求和，去重总量另计。

| View | Speech data | Speech data | Instruction | NV |
| --- | --- | --- | --- | --- |
| Emilia2-Short | 99,841,007 | 146,325 | 3,994,566 | 474,078 |
| Emilia2-Long | 4,263,913 | 155,688 | 651,060 | 353,929 |
| Emilia2-Dialogue | 1,538,239 | 96,452 | 120,815 | 104,999 |
| Total | 105,643,159 | 398,467 | 4,766,441 | 933,006 |

表中短句行显示 3994566 例指令与 474078 例非语言，对应 5102 与 854 小时；单人长行显示 651060 例指令与 353929 例非语言，对应 15317 与 9572 小时；对话行显示 120815 例指令与 104999 例非语言，对应 4633 与 4200 小时。结果说明表达监督已超出短句，近八成指令小时来自长时两类视图。限制是标注仍集中在 5 分钟内片段，且非语言只覆盖中英文。

来源主题方面，影视评论占 19.8%，人文占 11.5%，体育占 6.8%，技术占 6.1%，公众人物占 4.9%，其余 25 个低频主题合计 38.5%。请先看饼图中最大两块与合并长尾的比例，再思考领域偏置对泛化的影响。

> **看图路径：** 1. 先找到占比最大的影视评论和人文两块扇区；2. 再确认其他合并项占 38.5% 所代表的长尾来源；3. 结合正文理解来源多样性与领域偏置的关系

[![原论文 Figure 5：Topical composition of the source data.](https://arxiv.org/html/2611.13614v1/Emilia2-Appendix-source-domains.svg)](https://arxiv.org/html/2611.13614v1/Emilia2-Appendix-source-domains.svg)

*论文图 4。原论文 Figure 5:：“Topical composition of the source data. Slice labels report the share of data hours. Other (38.5%) combines 25 lower-frequency topics.”。*

该图可见影视评论扇区最大，人文次之，其他合并项超过 3 分之一。它支持来源多样但仍偏向影视评论的判断，意味着在有声书或播客等相近领域可能更适配，而在稀有领域仍需验证。

### 长时合成的主结果在哪些指标上成立

主结果比较的问题是在相同长时剧本与每人参考音频下，谁的内容更准、音色更像、轮次更少错。公平条件是各系统生成完整录音再按同一协议切分转写与比对，TTSD-Eval 为双人对话，Long-TTS-Eval 为单人长语音，Emilia2-testset 为 1 到 4 人、51.1 秒到 30 分钟。指标方向为错误率越低越好，相似度与归属准确率越高越好。

| Model | TTSD-Eval | TTSD-Eval | Long-TTS-Eval | Long-TTS-Eval |
| --- | --- | --- | --- | --- |
| Higgs Audio v2 | 79.32 | 47.54 | 73.65 | 73.30 |
| VibeVoice-1.5B | 9.21 | 10.18 | 16.98 | 11.20 |
| MOSS-TTSD | 6.08 | 11.09 | 8.22 | 8.54 |
| Emilia2-AR | 6.92 | 12.25 | 14.42 | 17.76 |
| Emilia2-NAR | 5.27 | 9.93 | 13.05 | 9.79 |

该表聚焦错误率等核心列，行保留 MOSS-TTSD 与两个 Emilia2 变体以便对照。TTSD-Eval 中文字符错误率一列中 Emilia2-NAR 为 5.27%，低于 MOSS-TTSD 的 6.08% 和 AR 的 6.92%；英文词错误率一列中 NAR 为 9.93%，低于 MOSS-TTSD 的 11.09% 和 AR 的 12.25%；Long-TTS-Eval 中文字符错误率 MOSS-TTSD 为 8.22%，AR 为 14.42%，NAR 为 13.05%，英文词错误率 MOSS-TTSD 为 8.54%，AR 为 17.76%，NAR 为 9.79%。归属准确率方面，TTSD-Eval 中文 NAR 为 95.30% 接近 MOSS-TTSD 的 95.36%，英文 NAR 为 94.89% 接近 95.00%。这支持 NAR 在对话内容对齐上领先、AR 在单人相似度上更高的互补判断，但结论只在这些划分与转写器条件下成立。

在 Emilia2-testset 上，原文报告 AR 中文字符错误率 3.67%、英文词错误率 6.82%，NAR 中文 8.62%、英文 6.62%，MOSS-TTSD 中文 2.18%、英文 5.83%，相似度与归属准确率上 Emilia2 变体多列第二。短句 Seed-TTS-Eval 上 NAR 英文词错误率 1.60%、中文字符错误率 1.00%，均低于真值录音的 2.14% 与 1.25%，AR 英文 1.85% 第二。多语言 24 语平均词错误率 AR 为 7.67%、NAR 为 10.34%，远低于基线的 40.25% 到 85.41%，NAR 平均相似度 0.79 接近最优 0.80。这些数字不能直接换算成相对提升百分点之外的因果解释，且跨基准转写器不同。

按说话人数与目标时长分层后，真值错误率保持平稳，说明趋势来自生成而非识别。VibeVoice 随人数增加变差，NAR 随录音变长变差，与其固定解码步数预算有关，而 AR 与大得多的 MOSS-TTSD 无系统性退化。请先对照上下两排按人数与按时长的曲线，再看真值虚线是否平稳。

> **看图路径：** 1. 先看上半按说话人数分组的中文字符错误率走势；2. 再看下半按目标时长分组的走势差异；3. 注意真值曲线平稳而个别模型随人数或时长上升的现象

[![原论文 Figure 4：Stratified Chinese CER on Emilia2-testset. Top: by speaker count, bottom: by target duration.](https://arxiv.org/html/2611.13614v1/chinese_cer_all_speakers_body.svg)](https://arxiv.org/html/2611.13614v1/chinese_cer_all_speakers_body.svg)

*论文图 3。原论文 Figure 4:：“Stratified Chinese CER on Emilia2-testset. Top: by speaker count, bottom: by target duration.”。*

该图上半按 1 到 4 人分组，下半按 0 到 30 分钟分组，可见个别模型曲线随人数或时长上扬，而真值线相对平稳。它帮助理解平均分掩盖的分层失效，也说明长时评测必须同时看分层，而不能只看总体错误率。

### 整段一次生成与分段拼接各付出什么代价

论文把是否 1 次生成整段作为关键对照。整段指输入完整剧本 1 次生成，分段指按标点与轮次切成约 25 秒小块独立采样再拼接符号后统一声码。对于 AR，分段按中文 120 字或英文 350 字符切块；NAR 两种模式都用 256 步采样。听测由 10 人各评 5 中 5 英随机用例，4 种生成加真值匿名随机排序，用 1 到 5 分自然度评价。

结果是分段在 4 组模型语言对中的 3 组降低错误率，对 NAR 中文最明显，从 8.62% 降到 1.73%，但 4 组自然度全部下降，AR 中文从 4.05 降到 3.30 降幅最大。原文据此指出，分段重置了韵律与轮替节奏，局部内容变准但长程连贯受损，因此仅看错误率、相似度和归属准确率无法区分连贯整段与局部准确但听感断裂的拼接，长时评估必须加上整段自然度。这 1 对照只在约 25 秒切块与该听测规模下成立，尚未建立跨 30 分钟的连续性自动指标。

指令与非语言的分钟级控制也呈现互补。短时 InstructTTSEval 上 AR 中英文平均 76.2 与 78.3，与 Qwen3-TTS-12 Hz-VD 的 77.1 与 77.9 相当，并在四项子项上超过后者，NAR 为 61.6 与 61.2。短时 NV-Bench 上 NAR 在单标签与多标签、中英文的标签错误率与文本错误率均为最低，相似度最高。长时指令与非语言听测中两者自然度都不低于 4.20，指令跟随不低于 3.40，非语言质量不低于 3.40，AR 自然度与指令跟随略高，NAR 非语言质量与带条件内容错误更优。

### 哪些结论超出证据就不能再推

首先，数据规模大不等于覆盖无偏。来源偏向影视评论与人文，长尾合并仍占 38.5%，稀有口音、低资源语言和特定情感的召回有限。指令依赖属性模型的预测与 0.7 情绪门限，低置信区间留空而非标中性，非语言只做中英文，这些都会限制表达监督的适用范围。

其次，主结果的胜负依赖具体协议。不同基准用不同转写器与切分，TTSD-Eval 用 Whisper-large-v3 整段转写，Emilia2-testset 用 Qwen3-ASR-1.7B 分块转写，Long-TTS-Eval 中英文分用不同识别器，跨表数字不能直接比较。NAR 的长时退化与固定 256 步有关，换步数或时长估计会改变结果；分段降低错误率但损伤自然度的发现也不能推广到所有切分粒度。

最后，未测量延迟、实时率与训练成本，不能承诺效率改善。0.6B 指骨干规模，不代表端到端参数与推理开销，声学编解码与声码器开销需分开讨论。相关性不等于因果，长时数据与长时能力相关，但论文未做拿掉长时数据的消融，因此不能断言某类时长是必要条件。

### 复现需要准备哪些清单与代码

复现第一步是按清单重建数据划分与评测输入。论文称已发布 Emilia2-testset 的清单与标注及完整预处理与评测流水线，演示页可查看基准构造；229K 小时全量采用版本化源链接清单、可分发标注与处理配置的快照形式，正式发布与验收挂钩，并用稳定标识传播修正与撤回，记录源访问日期与清单校验和。本文作者代码与模型权重在本轮资源核验中没有处于 available 状态的作者资源，不应写成已开源、权重可下载或系统可运行；演示页链接仅为第三方可达页面，不证明作者已开源。

数据侧要核对三视图区间指向同一人声文件的机制、DNSMOS 与合成语音过滤阈值、语言置信度 0.8、文本长度与发声时长比区间，以及对话重叠 5% 与轮次比例等规则。标注侧要保留属性预测、缺失省略与时间区间的来源记录，指令 4 种形式的语言选择须可复现。评测侧要固定转写器、切分长度、相似度模型与宏平均方式，Emilia2-testset 需按完整源与去重组隔离训练。模型侧 AR 与 NAR 的学习率、长度上限与采样超参数已在附录给出，但完整步数与硬件预算缺失，应先小规模跑通再扩展到 30 分钟上下文。

### 什么时候值得尝试以及还缺哪项验证

当任务需要分钟级连贯、有明确轮次与每人参考音色，并希望用自然语言控制风格或插入笑声等事件时，Emilia2 值得尝试。它的 3 种视图让短句对齐、单人韵律与多人轮替在同一源上联合学习，指令与标签分别解决怎么演与何时出声，AR 与 NAR 的互补也为选型提供依据，内容优先可偏向 NAR，单人相似与自然度优先可偏向 AR。

复现建议从短句加单人长语音的 2 阶段开始，验证 30 秒到数分钟的稳定性，再加入对话与表达微调。每步同时记录错误率、相似度、归属准确率与整段自然度，避免只看错误率。还需补的验证包括更长上下文的自动连续性指标、更多语言与口音的分层、情绪门限外样本的表现，以及推理步数与延迟的权衡。只有补齐这些，才能把当前在特定协议下的结论推广到实际有声书、播客与对话智能体的部署。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.13614v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-12/)
