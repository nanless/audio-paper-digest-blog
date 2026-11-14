---
title: "JEV-VAD: Efficient Semantic Endpointing via Task-First Conditioning and Decoder-Prefix Pruning"
date: 2026-11-13
draft: false
tags: [轮次切换, 模型剪枝, LoRA, 强化学习, 跨语言]
categories: [论文速递]
description: "JEV-VAD 把完成问题与判定标准放在音频 token 之前，用 1025 个参数的标量头直接输出停止概率，并在匹配头重拟合下研究浅层解码器前缀；它在 EOT-bench 上以英语监督取得中文 cut@300 ms 19.57% 和 14 语言平均 19.09%，主要代价是工作点依赖语言与预算，而且论文只报告参数和矩阵计算下降，没有测出端到端墙钟加速。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.15362"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "JEV-VAD：用任务前置条件与浅层解码器做语义端点判定"
paper_digest_original_title: "JEV-VAD: Efficient Semantic Endpointing via Task-First Conditioning and Decoder-Prefix Pruning"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.15362v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.15362v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.15362v1.pdf"
paper_digest_primary_task: "轮次切换"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.turn-taking","label":"轮次切换"},{"facet":"method","id":"method.pruning","label":"模型剪枝"},{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"setting","id":"setting.cross-lingual","label":"跨语言"}]
paper_digest_primary_method: "模型剪枝"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "JEV-VAD 把完成问题与判定标准放在音频 token 之前，用 1025 个参数的标量头直接输出停止概率，并在匹配头重拟合下研究浅层解码器前缀；它在 EOT-bench 上以英语监督取得中文 cut@300 ms 19.57% 和 14 语言平均 19.09%，主要代价是工作点依赖语言与预算，而且论文只报告参数和矩阵计算下降，没有测出端到端墙钟加速。"
paper_digest_authors: [{"affiliations":["Tianjin University"],"name":"Jintao Liang"},{"affiliations":["Tianjin Normal University"],"name":"Nan Li"},{"affiliations":["Tianjin University"],"name":"Longbiao Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tubin Huang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Min Xu"}]
paper_digest_abstract_sha256: "d8b476eece46dc69fbf2026f4345359b473fce438e0a3181693db743d1e52f71"
paper_digest_sidecars: {"citation.bib":{"sha256":"834dd292f0f325c736f8a7bd732c6a0ac2c9b6a1b88adf47dc98f79fc4a840b1","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-15362/citation.bib"},"citation.json":{"sha256":"166746726708513db62fe733a57a6c4937ee9a9a2997adc3ce5a628643263cbf","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-15362/citation.json"},"citation.ris":{"sha256":"f09f93c68a302c703c9dd03da1f88e152e7d7e31e051007f53ebb7bf2cc509e5","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-15362/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"13a8bdf6d16b48800cb9e358d9f1665578cd530a46272441ca6cc820f0d9b9fa","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-15362/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "43746d733804caafb87312a1ad4932a1833f5fe1d6c4f0fc18d2315ff57b223e"
paper_digest_api_reader_plan_sha256: "c3fa10be65695348f60cc7a20acabd0de1811328d927eddd78f4ceab46749973"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "f7d3a7651005236be5fac0bbec7baa48bc60208a48a2c81d3d53293d6c600204"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "65c52acd35229b61d2a28464b20982a04c5af98cbbc000a904d1c6204c7818c3"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "730c49645689459745eebc133661a897d7771f03d188f26295278fe25d136a28"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "5c8fbacdebc1ab670942b333c20182725294defdc24f313fc32e6ae639e1e296"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 JEV-VAD：用任务前置条件与浅层解码器做语义端点判定

> 英文题目：*[JEV-VAD: Efficient Semantic Endpointing via Task-First Conditioning and Decoder-Prefix Pruning](https://arxiv.org/abs/2611.15362v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [轮次切换](/audio-paper-digest-blog/papers/?concept=task.turn-taking)
- **研究方法**：[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression) → [模型剪枝](/audio-paper-digest-blog/papers/?concept=method.pruning)；[参数高效微调](/audio-paper-digest-blog/papers/?concept=method.peft) → [LoRA](/audio-paper-digest-blog/papers/?concept=method.lora)；[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)
- **研究条件**：[跨语言](/audio-paper-digest-blog/papers/?concept=setting.cross-lingual)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Jintao Liang：Tianjin University
- Nan Li：Tianjin Normal University
- Longbiao Wang：Tianjin University
- Tubin Huang：机构信息未能在本次解析中与作者逐人可靠绑定
- Min Xu：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

论文研究语音代理在对话停顿处判断用户是否说完的语义端点检测：输入为截至当前时刻的音频窗口、完成判断问题 \(q\) 与判定标准 \(c\)，输出停止概率 \(p_{\mathrm{stop}}\)，再由单独策略转成结束或继续等待。JEV-VAD 与依赖转写或完整生成的端点方法不同，先把 \(q\) 和 \(c\) 置于音频 token 之前，使因果解码器中的音频位置能利用任务条件构造表示；再将最终助手前缀状态经线性头输出标量停止概率，省去转写、答案解码和词表投影。模型先以二值交叉熵拟合端点标签做监督微调，再用 Bernoulli RLCD 按采样动作与标签及彼此的一致性更新 LoRA 和标量头。效率分析物理删除后续解码块、只保留前 \(d\) 个，并在冻结主干和 LoRA 后为各深度以相同预算重新拟合标量头，以区分深度变化与读出头差异。在 EOT-bench 的中文完整模型评测中，JEV-VAD 的 cut@300ms（HOLD 误打断率，越低越好）为 19.57%，低于 DuplexJev-Para 的 cut@300ms 39.14%。在 EOT-bench 的英文评测中，JEV-VAD 的 cut@300ms 为 16.31%，高于 LiveKit TD v1 的 cut@300ms 9.93% 和 Deepgram Flux 的 cut@300ms 12.91%，即误打断率更高。在 EOT-bench 的 14 语言等权宏平均评测中，JEV-VAD 的 AUC 为 91.1%、AP 为 84.2%，低于 LiveKit TD v1 的 AUC 93.9%、AP 89.7%；其 cut@300ms 为 19.09%、lat@5%cut（5% cut 预算下的平均等待，越低越好）为 775.9 ms，高于 LiveKit TD v1 的 cut@300ms 13.99%、lat@5%cut 624.5 ms，即这两项更差。按 Table 5 的 2.56 s 音频、73 token 输入单次前向矩阵计算，L07 的总参数为 453.22M，低于 L28 的 787.01M；L07 的解码矩阵计算量为 16.548 GFLOPs，低于 L28 的 66.191 GFLOPs。原文未披露训练、推理或部署的实测成本，仅报告参数与 FLOP 预算，并注明端到端墙钟时延未测；作者也指出缺少仅监督微调的消融，RLCD 的独立贡献尚未分离。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音代理为什么要在停顿处判断话轮是否结束

语音代理需要在一个停顿之后决定是否接过话轮。输入可以写成截至时刻 t 的尾部音频窗口 x_t^(W)，再附上一个完成问题 q 和一组判定标准 c；模型要输出的是停止概率。标签 y=1 表示完成话轮 EOT，y=0 表示中间停顿 HOLD。语义端点检测的关键不是把足够长的静音直接当成边界，而是从当前已经到达的语音中判断这句话是否表达了完整意思。

这个任务的输出很小，只是一个二值动作所依赖的概率。音频语言模型通常仍保留完整的语言解码器和词汇表投影，用来生成转写或答案；但如果系统只需要一个停止概率，完整生成路径就会带来不必要的工作。本文关心的正是这一点：任务条件放在哪里、输出是否必须经过词汇表、解码器需要保留多少层。

JEV-VAD 基于 Qwen3-ASR-0.6B。这里的 ASR-free 指端点推理不产生转写，并不意味着骨干没有经过识别预训练。模型给出停止概率后，另一个独立动作策略再把概率转换成是否结束话轮的动作；因此后面的实验评价的是端点判定质量，不是转写或答案生成质量。

### 已有路线把哪些信号当作完成证据

话轮结束研究把时间组织和语义证据区分开来。有限状态和连续预测模型会利用停顿时长、韵律等线索；TurnGPT 用语言模型研究语言上的完成性。基于转写的系统先得到识别输出，再进行端点判断，这会引入一个中间转写层；直接音频端点检测器则试图在语音表示本身中寻找完成证据。两类路线回答的问题并不完全相同：时长说明用户已经停了多久，语言上下文才帮助判断前一句话是否已经说完。

论文把 Smart Turn 和 TurnSense 列为直接音频完成接口，把 Phoenix-VAD 列为面向全双工交互的语义端点检测，把 SoulX-Duplug 列为流式对话状态预测。FD-VAD 被描述为采用语音编码器和较小语言骨干的 ASR-free 端点模型。另一条相关路线是类型化音频决策：Qwen-Audio-Jev 引入任务条件化读出，DuplexJev 在不做自回归解码的情况下读取选项概率。本文沿用其中“只读决策状态” 的方向，但把问题具体化为端点停止概率。

LayerSkip 这类工作研究语言生成中的早退推理和自推测解码，目标是减少生成计算或保持生成质量。本文的设定不同：剪枝后的模型只输出一个标量，而且每个保留前缀都另接一个新头并重新拟合。它测的是端点读出在浅层是否仍然可访问，不是剪枝模型能否复现完整深度的生成文本。由于各系统的上下文长度、训练历史和推理接口可能不同，相关工作的类别差异不能直接写成同一条件下的胜负。

### 这篇论文要解决的具体问题与没有声称的内容

继承来的音频语言模型可能包含完整语言解码器和词汇表投影，但语义端点检测只需要一个停止概率。去掉转写生成可以缩短输出路径，却仍然留下一个问题：为了构造这个决策状态，解码器需要多少计算。论文把完整问题拆成三项互补设计：任务说明放在音频之前还是之后，输出用标量头还是完整 token 分布，以及保留多少解码器深度。

围绕这三项设计，论文的贡献是 1 个任务优先、标量输出的端点接口，并在匹配训练条件下与音频优先顺序比较；一个用 3 个骨干种子、每个骨干 3 个头种子的解码器前缀研究，其中包含 L00 无注意力控制和前 7 个块内的密集深度采样；以及在 14 种语言上的评测和参数、计算预算核算，用来区分完整模型质量与剪枝后的双语权衡。

这些结论有明确边界。论文没有提出新的音频编码器，也没有声称在所有指标或所有语言上全面领先。它没有测量端到端墙钟加速，参数和 FLOPs 只说明计算量下降。输入顺序比较固定了读出位置和训练程序，因此无法把语义条件和位置效应完全分开；所有变体都继承 SFT–RLCD 训练，缺少 SFT-only 消融，也就不能单独量化 RLCD 的贡献。

### 一条前向路径：从 2.56 秒音频到停止概率

JEV-VAD 的主干是 Qwen3-ASR-0.6B。输入是一个 2.56 s、16 kHz 的尾部音频窗口；冻结的音频编码器和原生 896→896→1024 GELU 投影器把它变成 33 个 1024 维音频 token。解码器接收系统/用户前缀、任务说明、音频边界标记和投影后的音频 token，再接收 assistant 前缀；最终 assistant-prefix 状态经过最终 RMSNorm 后作为读出位置。这个状态记为 h⋆，维度是 1024。

读出之后只接一个标量端点头：先算线性得分，再通过 sigmoid 得到 p_stop。整个端点推理就是一次前向，不生成转写 token，也不生成答案字符串，更不需要词汇表大小的输出投影。端点适配期间只有解码器 LoRA 和这个标量头可训练，合计 4,588,545 个参数；编码器、投影器和解码器基座权重保持冻结。

在线推断每 320 ms 更新一次，每次使用截至当前时刻的 2.56 s 尾部窗口。编码器在已经到达的音频内部是双向的，但没有未来音频进入更新，所以整体分数相对于输入流仍是因果的。短输入左侧补到 2.56 s；这段前导静音被当作合法输入，而为组成批次添加的 padding 会被掩码。

图 1 把这条路径从左到右画了出来。读图时可以先找任务问题与判据的位置，再沿音频编码器、投影器和因果解码器块看表示怎样进入读出位置，最后看右侧的标量头如何产生二值事件概率。

> **看图路径：** 1. 先看 Question & Criteria 是否排在 audio embeddings 之前；2. 沿冻结音频编码器和投影器看 33 个 1024 维音频 token 如何进入解码器；3. 在右侧确认读出只经过最终 assistant-prefix state、标量头和 sigmoid

[![原论文 Figure 1：JEV-VAD architecture. The completion question and criteria precede audio tokens.](https://arxiv.org/html/2611.15362v1/model_structure.png)](https://arxiv.org/html/2611.15362v1/model_structure.png)

*论文图 1。原论文 Figure 1:：“JEV-VAD architecture. The completion question and criteria precede audio tokens.”。*

图中左侧从流式音频输入开始，标出 2.56 s 尾部窗口、冻结音频编码器、冻结投影器和 33 个 1024 维音频 token。中间一栏把 Question & Criteria 放在音频嵌入之前，并给出 audio+q+c 的对照顺序；右侧因果解码器块中标出后续块被剪掉，最终 assistant-prefix state 经 RMSNorm 接到 1024→1 的 Scalar JEV Head，再经 sigmoid 得到 p_stop。底部注明这是一次因果 LLM 前向，没有自回归转写，也没有词汇表 softmax。这张图强调主路径，不展示训练损失和策略扫描。

### 任务前置条件与标量读出如何配合

任务条件有两种排列：q+c+audio 和 audio+q+c。在因果解码器中，q+c+audio 让每个音频位置能够注意较早出现的问题与判据；audio+q+c 中音频位置看不到后面的任务说明，但最终读出位置在两种顺序下都能注意它前面的整个序列。两种顺序使用相同 token 数、相同读出位置和相同训练程序，因此这组对照测试的是指令放置位置，而不是单独分离语义内容和位置效应。

读出状态 h⋆ 是最终 RMSNorm 后的 1024 维向量。标量端点头把它变成一个停止概率：

\[z=w^{\top}h_{\star}+b,\qquad p_{\mathrm{stop}}=\sigma(z),\]

其中 w 是 1024 维权重，b 是偏置，z 是线性得分，σ 是 sigmoid，p_stop 是停止概率。这个头共有 1,025 个可训练参数，包括 1024 个权重和 1 个偏置。它在一次前向中直接给出连续概率，替代词汇表投影，不生成转写 token 或答案字符串。

**任务优先条件 × 标量端点读出：** 任务优先条件把完成问题与判定标准放在音频 token 之前，使因果解码器中的音频位置能够以端点判定目标为条件形成表示；标量端点读出只读取 assistant-prefix 的最终状态，经 RMSNorm 后映射成一个停止概率，不再生成转写或答案 token，也不需要词汇表大小的输出投影。两者搭配后，输入条件决定读出的语义参照，输出接口把整条路径压缩为一次前向中的一个标量，正好对应端点检测只需要二值动作、不需要完整生成的任务。

这种组合的实际意义是：任务优先条件让音频表示在形成时就带有端点判定目标，标量读出则只取最终 assistant-prefix 状态，不再计算完整答案分布。两者配合后，输入条件负责让表示“知道要判断什么”，输出接口负责把判断压缩成一个停止概率。

### 解码器前缀保留如何测够用深度

Qwen3-ASR-0.6B 有 28 个解码器块。记 Ld 为只保留前 d 个块的模型，论文考察 d∈{0,1,2,3,4,5,6,7,14,21,28}。采样区间在前 7 个块内逐块覆盖，用来观察早期端点判别；更深的点覆盖 1/4 深度预算。后续块在剪枝模型中被物理删除，而不是执行后再忽略。

每个保留前缀都继承同一骨干种子下的 2 阶段适配模型。继承来的骨干和 LoRA 权重被冻结，随后在 RMSNorm 之后接一个新标量头，并用相同更新预算重新拟合。L28 也接受同样的重拟合，因此它是匹配头控制，不等同于完整模型系统比较中的那一行。L00 去掉全部解码器注意力；在任务 token 和读出位置固定时，这个读出位置无法聚合音频 token 信息，所以 L00 提供无注意力控制。

**解码器前缀保留 × 匹配头重拟合：** 解码器前缀保留只物理保留前 d 个解码器块，直接删去后续块，改变的是可用于构造读出状态的深度；匹配头重拟合则在每个深度冻结继承的骨干和 LoRA，只重新训练一个同样初始化方式、同样更新预算的新标量头。两者组合的意义是把“深度是否仍含端点信息” 与“原最终层头能否直接迁移” 分开，使各深度的比较不会把旧头参数和不同训练预算混在一起。

这个协议测的是在每个深度重新适配一个头之后，端点信息还有多少能被读出。它并不证明原始最终层头可以不经适配地搬到任意深度，也不能把所有前缀都和原最终层头直接比较。

### 两阶段适配：SFT 先拟合概率，RLCD 再校准决策

训练分两段，但两段使用同一套端点标签和同一个标量接口；两段都更新解码器 LoRA 和标量头，基座表示路径保持冻结。英文训练集和验证集分别来自 Smart Turn v3.1，规模是 58,594 和 6,460 个片段。两种输入顺序都从全新的 LoRA 参数和标量头开始。

第一阶段是 SFT。完成话轮 y=1，未完成话轮 y=0，p=p_stop。它最小化二元交叉熵：

\[\mathcal{L}_{\mathrm{SFT}}=-y\log p-(1-y)\log(1-p).\]

这个损失只要求停止概率与端点标签一致，先把 LoRA 和头训练到一个有监督的起点。

第二阶段是 RLCD。它从 SFT 检查点初始化，把停止概率当作伯努利策略的正面概率：

\[\pi(1)=p,\qquad\pi(0)=1-p.\]

其中 π 是待训练策略。每个输入采样 32 个动作，动作来自带探索的行为策略：

\[\mu(a)=(1-\epsilon)\pi(a)+\epsilon/2,\qquad\epsilon=0.05,\]

这里 ε=0.05，μ 是在 π 周围混入均匀探索的行为策略。32 个采样动作共享同一次前向得到的分布，重要性权重写成 w_r=π(a_r)/μ(a_r)。训练损失中的加权标签一致项和两两一致项，分别用来判断采样动作是否与真实端点标签一致、以及样本之间是否彼此一致；每个基线都排除当前动作本身。

\[\mathcal{L}_{\mathrm{RLCD}}=-\frac{1}{M}\sum_{r=1}^{M}\operatorname{sg}\!\left[w_{r}(I_{r}-b_{r})\right]\log\pi(a_{r}).\]

最终损失对 M=32 个动作取平均，sg 表示停止梯度：重要性权重和优势 w_r(I_r-b_r) 被截断，梯度只穿过 log π(a_r)。这种做法把当前概率当作策略分布，用采样动作的标签一致性和两两一致性来校准决策，而不是再生成一个答案 token。

**SFT × RLCD：** SFT 用二元交叉熵把端点标签拟合为停止概率，先把可训练的 LoRA 和标量头带到有监督的起点；RLCD 从这个检查点继续，把当前概率当作伯努利策略，用 32 个采样动作的标签一致性与两两一致性构造优势，再更新同一组 LoRA 和头。两者共享同一标签和标量接口，组合的意义是先学到一个可读的概率，再用采样决策目标校准它；论文没有用 SFT-only 消融单独分离 RLCD 的增益。

训练设置上，LoRA 作用在注意力 q/k/v/o 投影，rank/scaling/dropout 为 16/32/0.05。SFT 使用 4,919 次 AdamW 更新，学习率 2×10−4，147 次 warmup，余弦衰减，权重衰减 0.01，梯度裁剪 1，批大小 64，微批为 4，累积 16 步。RLCD 使用 1,000 次更新，学习率 2×10−5，30 次 warmup。主训练种子是 1234。

图 2 把 SFT 和 RLCD 串成一条训练流程。读图时可以先找 SFT 检查点如何传给第二阶段，再看 32 个采样动作的标签一致性奖励怎样进入重要性加权策略更新。

> **看图路径：** 1. 先看上半部分 SFT 如何用二元交叉熵拟合停止概率；2. 再看下半部分从 SFT 检查点初始化后，32 个采样动作怎样进入策略更新；3. 核对冻结基座与可训练 LoRA、标量头在图中的位置

[![原论文 Figure 2：Training sequence. Stage I fits the endpoint labels with binary cross-entropy.](https://arxiv.org/html/2611.15362v1/two_stage_training.png)](https://arxiv.org/html/2611.15362v1/two_stage_training.png)

*论文图 2。原论文 Figure 2:：“Training sequence. Stage I fits the endpoint labels with binary cross-entropy.”。*

图中上半部分是 SFT：音频经过编码器、投影器、因果 LLM 和 LoRA，再接到标量 JEV 头，输出 Continue(0)/Stop(1) 的 p=P(stop)，与标签 y∈{0,1} 做二元交叉熵，然后直接反向传播。下半部分是 RLCD：从 SFT checkpoint 初始化，继续使用冻结基座与可训练 LoRA、头，采样 32 个二元动作，依据观测标签计算标签一致性和二元概率奖励，再做重要性加权策略更新。图上还标明采样动作的对数概率来自同一条前向分布。

### EOT-bench 衡量什么，策略如何扫描

EOT-bench 评测人机对话停顿处的端点决策，覆盖 14 种语言。完成话轮 EOT 是正类，中间停顿 HOLD 是负类；HOLD 时长为 0.2–5.0 s，分类分数在停顿起点后 200 ms 评估。AUC（曲线下面积）衡量停止概率的排序能力，平局按一半计入；AP（平均精度）沿 EOT 召回方向汇总精度。两者都以百分比报告。

**AUC × AP：** AUC 衡量停止概率把 EOT 排在 HOLD 前面的排序能力，平局按一半计入；AP 沿着 EOT 召回方向汇总精度，更关心高召回区的排序质量。两者都使用同一批带标签的停顿位置，但侧重点不同；组合起来可以判断模型是只能大致分开两类，还是能在高召回时仍维持较少误报。它们都是分类排序指标，不等同于经过动作策略和等待预算后的 cut 或 lat。

策略扫描同时变化 101 个置信度阈值、9 个最小动作延迟（0.2–1.0 s）和 6 个强制静音超时（1.0–3.5 s），再加上 14 个纯静音策略，共 5,468 个候选。cut@300 ms 和 cut@600 ms 在给定的平均 EOT 等待预算下最小化 HOLD 打断率；lat@5%cut 和 lat@10%cut 在给定打断率预算下最小化等待时间。每个工作点各自选择策略，所以不同语言、不同预算下的结果不能混成一个全局阈值。

**cut@300 ms × lat@5%cut：** cut@300 ms 在给定的平均 EOT 等待预算下，从策略扫描中选择使 HOLD 被打断率最低的工作点，数值越低表示越少在未完成停顿上抢话；lat@5%cut 则把打断率限制在 5% 预算内，选择使平均 EOT 等待最短的工作点，数值越低表示等待越短。两者分别从打断和等待两端描述同一条延迟—打断曲线，必须连同各自策略、语言和预算一起读；它们不是同一个指标的两种单位，也不能把一个工作点的数值直接搬到另一个预算下。

端点适配只使用英文标签；公开基准验证参与了开发。多语言指标按语言等权聚合，并为每种语言单独选策略，因此这些结果描述的是基准工作点，而不是一个部署时通用的门限。200 ms 的分类时间戳也不同于模型每 320 ms 的在线更新间隔。报告中的延迟是策略等待时间，不包含模型计算。

比较对象包括 FD-VAD、DuplexJev-Para/LiveTurn 以及主结果表中的系统。带 † 的行是论文引用的公开结果，其余行是本地评测；Deepgram Flux 只有英文结果。DuplexJev 使用原生音频输入，最多 8 s 上下文，打分为 P(finished)+P(backchannel)；中文音频使用中文问题，其他音频使用英文问题。

其本地推理使用 FP32 参数、BF16 计算、FP32 概率、批大小 4，并关闭 TF32。输入顺序和深度比较共享同一评测设备；系统比较另用完整覆盖的运行。模型之间在上下文长度、训练历史和推理接口上可能不同，读表时要保留这些条件。

### 中文与英文主结果：局部优势，不是全面领先

下面的表比较中文和英文端点判定。表中 AUC、AP 越高越好，cut@300 ms、cut@600 ms、lat@5%cut、lat@10%cut 越低越好；带 † 的行是公开结果，其余行是本地评测，而且各系统的上下文长度、训练历史和推理接口并不完全一致。读表时应把同一语言、同一工作点放在一起看，不能因为某一行在某一列最好就推出全面领先。

| System | Chinese | Chinese | Chinese | Chinese | Chinese | Chinese | English | English | English | English | English | English |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| System | AUC↑ | AP↑ | cut↓ 300 | cut↓ 600 | lat↓ 5% | lat↓ 10% | AUC↑ | AP↑ | cut↓ 300 | cut↓ 600 | lat↓ 5% | lat↓ 10% |
| JEV-VAD | 89.4 | 76.7 | 19.57 | 9.05 | 772 | 557 | 94.5 | 89.1 | 16.31 | 9.50 | 847 | 548 |
| DuplexJev-Para | 75.9 | 57.9 | 39.14 | 13.49 | 968 | 678 | 89.7 | 80.9 | 25.53 | 13.05 | 976 | 702 |
| DuplexJev-LiveTurn | 74.9 | 56.6 | 39.14 | 13.16 | 902 | 685 | 89.5 | 80.7 | 25.39 | 12.62 | 960 | 690 |
| LiveKit TD v1† | 89.9 | 80.3 | 20.56 | 8.72 | 799 | 577 | 96.9 | 94.1 | 9.93 | 4.54 | 543 | 295 |
| LiveKit TD v1-mini† | 82.4 | 67.5 | 27.47 | 13.16 | 919 | 691 | 89.0 | 81.3 | 27.80 | 12.06 | 1070 | 698 |
| FD-VAD | 84.5 | 68.3 | 28.62 | 12.17 | 919 | 665 | 90.3 | 81.2 | 24.82 | 13.48 | 1102 | 723 |
| ultraVAD† | 77.6 | 59.1 | 38.82 | 12.83 | 926 | 688 | 88.4 | 79.7 | 27.66 | 11.91 | 899 | 663 |
| SmartTurn v3.2 | 74.5 | 58.2 | 42.93 | 13.16 | 959 | 679 | 84.4 | 73.8 | 35.18 | 14.75 | 1051 | 739 |
| SoulX-Duplug | 67.0 | 52.7 | 48.68 | 15.46 | 1006 | 737 | 70.9 | 57.8 | 51.91 | 20.57 | 1438 | 872 |
| TurnSense v1.1 | 67.7 | 47.7 | 49.84 | 14.97 | 1019 | 740 | 68.6 | 53.4 | 52.91 | 20.43 | 1340 | 902 |
| Silence-only VAD† | — | — | 51.15 | 16.28 | 1100 | 800 | — | — | 55.60 | 21.70 | 1600 | 1000 |
| Deepgram Flux† | — | — | — | — | — | — | 94.1 | 87.8 | 12.91 | 9.93 | 1151 | 548 |

表中 JEV-VAD 的中文 AUC/AP 为 89.4%/76.7%，cut@300 ms 为 19.57%，是参与比较系统里最低的中文 cut@300 ms；cut@600 ms 为 9.05%，lat@5%cut 为 772 ms，lat@10%cut 为 557 ms。DuplexJev-Para 和 DuplexJev-LiveTurn 的中文 cut@300 ms 都是 39.14%，FD-VAD 为 28.62%；在 5% 打断预算下，JEV-VAD 等待 772 ms，DuplexJev-Para 等待 968 ms，DuplexJev-LiveTurn 等待 902 ms，FD-VAD 等待 919 ms。

但这个优势只限于所评测的工作点。LiveKit TD v1 的中文 AUC/AP 是 89.9%/80.3%，高于 JEV-VAD 的 89.4%/76.7%，cut@600 ms 也以 8.72% 低于 9.05%。中文 cut@300 ms 最低，不等于在所有判别指标或所有策略预算上都更好。英文中 JEV-VAD 的 cut@300 ms 是 16.31%，低于 DuplexJev-Para 的 25.53% 和 FD-VAD 的 24.82%，但 LiveKit TD v1 达到 9.93%，Deepgram Flux 达到 12.91%，说明英文仍有更强的公开工作点。

### 14 语言迁移与图上的工作点权衡

第二个结果表把 14 种语言按语言等权聚合，并分别按语言选择策略。它回答的是英语端点监督能否迁移到训练语言之外，而不是证明存在一个跨语言通用阈值。

| System | AUC↑ | AP↑ | cut↓ 300 | cut↓ 600 | lat↓ 5% | lat↓ 10% |
| --- | --- | --- | --- | --- | --- | --- |
| JEV-VAD | 91.1 | 84.2 | 19.09 | 8.39 | 775.9 | 528.2 |
| DuplexJev-Para | 82.8 | 72.0 | 32.75 | 11.84 | 841.2 | 640.0 |
| DuplexJev-LiveTurn | 82.5 | 71.9 | 33.20 | 11.88 | 840.7 | 642.1 |
| LiveKit TD v1† | 93.9 | 89.7 | 13.99 | 5.61 | 624.5 | 397.7 |
| FD-VAD | 85.3 | 75.2 | 27.63 | 11.82 | 890.1 | 656.7 |
| LiveKit TD v1-mini† | 84.6 | 76.1 | 28.45 | 11.53 | 881.3 | 633.5 |
| ultraVAD† | 79.6 | 70.5 | 37.42 | 13.13 | 851.1 | 659.3 |
| SmartTurn v3.2 | 78.3 | 68.2 | 39.72 | 13.30 | 894.3 | 679.9 |
| TurnSense v1.1 | 58.9 | 50.4 | 50.88 | 17.00 | 1002.6 | 756.1 |
| SoulX-Duplug | 52.8 | 44.5 | 54.37 | 18.16 | 1038.7 | 778.7 |
| Silence-only VAD† | — | — | 54.81 | 18.34 | 1085.7 | 821.4 |

表中 JEV-VAD 的 14 语言平均 AUC/AP 为 91.1%/84.2%，cut@300 ms 为 19.09%，cut@600 ms 为 8.39%，lat@5%cut 为 775.9 ms，lat@10%cut 为 528.2 ms。DuplexJev-Para 的平均 cut@300 ms 是 32.75%，DuplexJev-LiveTurn 是 33.20%，FD-VAD 是 27.63%；JEV-VAD 的平均 lat@5%cut 为 775.9 ms，DuplexJev-Para 为 841.2 ms，FD-VAD 为 890.1 ms。这些结果支持英语端点适配确实能向其他语言迁移，但迁移幅度仍受语言和策略选择影响。

LiveKit TD v1 在 4 个报告的多语言工作点上都更强，包括 cut@300 ms 13.99% 和 lat@5%cut 624.5 ms。因此，表格支持的是“JEV-VAD 在多语言基准上超过部分可运行基线并能利用英文监督”，不是“它全面优于所有系统”。

图 3 把中文和 14 语言聚合的延迟—打断曲线放在一起。读图时先看两条彩色曲线和灰色基线，再看横轴表示的是平均等待预算还是每语言延迟预算。

> **看图路径：** 1. 先看图例：粗紫线是 JEV-VAD，细蓝线是 LiveKit Turn Detector v1；2. 比较左侧中文面板与右侧 14 语言面板的横轴和纵轴含义；3. 注意右侧横轴是每语言延迟预算，不是实测推理时间

[![原论文 Figure 3：Latency–cutoff trade-offs for Chinese (left) and all 14 languages (right).](https://arxiv.org/html/2611.15362v1/pareto.svg)](https://arxiv.org/html/2611.15362v1/pareto.svg)

*论文图 3。原论文 Figure 3:：“Latency–cutoff trade-offs for Chinese (left) and all 14 languages (right).”。*

图中左面板标题是 Chinese，右面板标题是 All 14 languages；纵轴都是 False cutoff on HOLD spans（%），左横轴是 Mean latency on true EOT（s），右横轴是 Per-language latency budget（s）。粗紫线标为 JEV-VAD，细蓝线标为 LiveKit Turn Detector v1，其他模型为灰线。左图中文低延迟段有多条曲线接近，粗紫线并非处处最低；右图 14 语言面板中，细蓝线在可见的低延迟段位于粗紫线下方，说明相同等待预算下其打断率更低，这与表 2 中 LiveKit TD v1 更强的工作点一致。

### 参数和矩阵计算下降了，但没有证明墙钟加速

下面的表只比较 L07 与 L28 的参数量和单次前向的解码器矩阵计算，用来核对浅前缀节省了什么、又没有节省什么。表中的计算量按 2.56 s 音频、73 个输入 token 的条件报告，单位与数值沿用原文。

| 比较项 | L07 | L28 | 原文报告的变化 |
| --- | --- | --- | --- |
| 参数总量 | 453.22M | 787.01M | 减少 42.41% |
| 解码器矩阵计算（73 个输入 token） | 16.548 GFLOPs | 66.191 GFLOPs | 减少 75% |

表中 L07 的参数量是 453.22M，L28 是 787.01M，总参数减少 42.41%；解码器矩阵计算从 66.191 GFLOPs 降到 16.548 GFLOPs，减少 75%。总压缩比例小于删除解码器块的比例，因为编码器、投影器和仍然需要的嵌入都保留着。标量头只需要 2,048 FLOPs，不需要词汇表大小的输出投影；这是输出路径节省的核心。

这些数字是矩阵操作计数：每个乘加按两次 FLOPs 计，包含线性/LoRA 操作和稠密 QK/AV 乘积，但不含编码器计算、预处理、归一化、激活、softmax 和标量输出后处理。它们说明参数和解码器矩阵计算下降，并不说明端到端墙钟时间会按同样比例下降；论文也明确把实际推理时间留作待测。

### 把任务说明放在音频前是否更好

输入顺序的对照在 SFT 和 RLCD 2 阶段之后进行，两种顺序使用相同 token 数、相同读出位置和相同训练程序。中文任务优先顺序的 AUC/AP 为 89.4%/76.7%，音频优先顺序为 89.0%/75.5%；cut@300 ms 从 21.55% 降到 19.57%，cut@600 ms 从 9.54% 降到 9.05%，lat@5%cut 从 798 ms 降到 772 ms，lat@10%cut 从 587 ms 降到 557 ms。

英文也呈现同一方向：任务优先顺序的 AUC/AP 为 94.5%/89.1%，音频优先顺序为 94.0%/87.8%；cut@300 ms 从 17.30% 降到 16.31%，cut@600 ms 从 9.79% 降到 9.50%，lat@5%cut 从 889 ms 降到 847 ms，lat@10%cut 从 585 ms 降到 548 ms。任务优先顺序在中文和英文列出的六项指标上都更好。

这组结果支持把任务说明放在音频之前，但它没有把语义条件和位置效应分开：任务说明在因果掩码下改变了音频位置能看到的上下文，同时也改变了序列位置。要判断两部分各占多少，需要另行设计对照，不能把这组结果解释成任何任务前置顺序都必然更好。

### 保留几层解码器后，端点信息还可读出

下面的深度表比较不同解码器前缀。每个深度都冻结继承的骨干和 LoRA，接一个新的标量头，并以匹配更新预算重新拟合；L00 是无注意力控制，L28 是同样重拟合后的深度控制。表中数值先在每个骨干种子的 3 个头种子内平均，再在 3 个骨干种子间平均。

| Depth | Chinese | Chinese | Chinese | Chinese | Chinese | Chinese | English | English | English | English | English | English |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Depth | AUC↑ | AP↑ | cut↓ 300 | cut↓ 600 | lat↓ 5% | lat↓ 10% | AUC↑ | AP↑ | cut↓ 300 | cut↓ 600 | lat↓ 5% | lat↓ 10% |
| L00 | 50.0 | 36.1 | 51.15 | 16.28 | 1500 | 800 | 50.0 | 36.2 | 55.60 | 21.70 | 2000 | 1000 |
| L01 | 86.9 | 73.6 | 25.13 | 10.22 | 889 | 613 | 90.8 | 81.2 | 22.90 | 12.26 | 1129 | 713 |
| L02 | 86.9 | 72.9 | 24.84 | 10.34 | 891 | 613 | 93.0 | 86.3 | 20.22 | 10.53 | 997 | 636 |
| L03 | 88.1 | 75.7 | 23.72 | 10.16 | 872 | 607 | 93.1 | 85.7 | 19.54 | 10.28 | 963 | 622 |
| L04 | 87.3 | 73.1 | 22.83 | 9.85 | 883 | 595 | 92.9 | 85.7 | 19.84 | 11.06 | 966 | 648 |
| L05 | 88.3 | 73.9 | 21.40 | 9.96 | 866 | 598 | 92.5 | 84.9 | 21.32 | 11.73 | 968 | 674 |
| L06 | 88.9 | 75.0 | 21.14 | 9.69 | 859 | 586 | 92.9 | 85.5 | 20.47 | 11.47 | 963 | 659 |
| L07 | 89.0 | 75.8 | 21.09 | 9.63 | 863 | 596 | 93.1 | 85.8 | 19.42 | 10.76 | 958 | 644 |
| L14 | 88.8 | 75.7 | 21.38 | 9.56 | 820 | 585 | 94.0 | 87.8 | 18.05 | 9.55 | 899 | 569 |
| L21 | 88.9 | 75.7 | 21.18 | 9.74 | 821 | 591 | 94.3 | 88.4 | 17.62 | 9.31 | 882 | 555 |
| L28 | 89.1 | 76.4 | 21.60 | 9.36 | 812 | 577 | 94.4 | 88.8 | 17.46 | 9.35 | 869 | 561 |

表中最醒目的是 L00 在两个语言中的 AUC 都是 50.0%，而 L01 已达到中文 86.9%、英文 90.8%。这与无注意力控制相符：如果没有解码器注意力，固定读出位置无法聚合音频 token，排序能力接近随机；有一个解码器块后，重新拟合的头已经能恢复相当多的端点判别。

更深的 prefix 继续带来收益，尤其是英文。英文 AUC 到 L28 升到 94.4%，中文最高观测 AUC 是 L28 的 89.1%。但策略指标并不随深度严格单调：中文 cut@300 ms 在 L07 是 21.09%，在 L28 是 21.60%；英文 cut@300 ms 在 L07 是 19.42%，在 L28 是 17.46%。以 L28 为参照，L07 的英文 cut@300 ms 变差 1.96 个百分点，lat@5%cut 从 869 ms 升到 958 ms。

中文 cut@300 ms 改善 0.51 个百分点，但 lat@5%cut 从 812 ms 升到 863 ms。这些是描述性均值，不是显著性估计。

因此，L07 展示的是一个可选的质量—资源预算，而不是无损替代 L28。保留 7 个块能保留某个中文打断工作点，但会改变等待时间权衡；是否合适取决于部署语言和所选的打断预算。

### 哪些结论只在特定条件下成立

深度研究测的是每个前缀在匹配头重拟合之后还能读出多少端点信息。它不证明原来的最终层头可以不经适配地迁移到任意深度，也不说明所有前缀都应该和原最终层头直接比较。不同语言和不同预算下的策略权衡也不允许把某一个保留深度当成普遍最优。深度结果还是双语均值，没有离散度估计；14 语言比较使用的则是完整模型。

所有变体都继承 SFT–RLCD 训练。论文没有报告 SFT-only 消融，也没有做专门的校准测量，因此无法单独分离 RLCD 对校准和最终策略的贡献。公开基准验证参与了开发，策略又按语言和预算分别选择；独立留出集评测会加强部署结论。

系统比较同时包含明确标注的公开结果和本地运行结果。报告中的策略延迟不包含模型计算，参数与 FLOPs 也没有转成实际推理时间。因此，不能从本文的表直接承诺端点误判率、在线延迟或推理成本会在真实系统中同步改善。

### 复现时先固定哪些条件

复现的第一步应固定数据和基座：使用 Smart Turn v3.1 的英文训练/验证划分，规模分别为 58,594 和 6,460 个片段；初始化 Qwen3-ASR-0.6B，冻结编码器、投影器和解码器基座，在注意力 q/k/v/o 投影上加 LoRA，rank/scaling/dropout 为 16/32/0.05，并接 1024→1 的标量头。两种输入顺序都要用全新的 LoRA 参数和头开始，否则顺序比较会混入初始化差异。

训练上，SFT 采用 4,919 次 AdamW 更新，学习率 2×10−4，147 次 warmup，余弦衰减，权重衰减 0.01，梯度裁剪 1，批大小 64，微批 4，累积 16 步；RLCD 采用 1,000 次更新，学习率 2×10−5，30 次 warmup。主训练种子为 1234。深度研究中，每个前缀头使用 4,919 次匹配重拟合更新；结果先在每个骨干的 3 个头种子内平均，再在 3 个骨干种子间平均。

评测要按 200 ms 分类时间点、14 种语言和逐语言策略选择来做，并明确 cut@300 ms、cut@600 ms、lat@5%cut、lat@10%cut 各自的预算含义。不要把策略等待时间当成模型计算时间，也不要把 320 ms 在线更新间隔和 200 ms 分类时间戳混在一起。

本次资源检查没有确认代码、模型权重或数据已经公开；这不等于论文方法有缺陷，但复现前需要确认作者材料或自行实现。原文报告的更新次数、学习率和数据规模足以描述训练过程，但没有给出硬件、训练时长或端到端推理延迟，这些需要另行测量。

### 什么时候值得尝试，下一步验证什么

如果系统只需要从音频判断用户是否说完，可以接受端点推理不生成转写，并且愿意按语言和打断预算选择工作点，那么 JEV-VAD 值得尝试。它的价值在于把任务条件、输出维度和解码器深度放在同一个端点框架里：任务说明放在音频前改善配对比较，标量头去掉词汇表输出，浅前缀则提供可选的资源预算。它不适合被直接当成“全面优于所有端点系统” 的替代品，也不适合被用来承诺实时加速。

复现时先把英文监督、冻结基座、LoRA 与标量头的 SFT 跑通，再检查 RLCD 是否真的改变概率校准；深度比较必须使用同一重拟合预算，并把 L28 的匹配头控制与完整模型系统行分开。

还需要补的验证包括：独立留出集上的部署评测，按语言和打断预算重新选策略后的稳定性，SFT-only 与 RLCD 的消融，校准指标本身，以及端到端墙钟延迟。论文已经说明前缀剪枝减少参数和矩阵计算，但只有把这些下降放到真实推理路径中测量，才能判断它们是否转化为系统收益。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.15362v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：deepseek-v4.1-flash

- 评分请求协议：openai_responses

---

[← 返回 2026-11-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-13/)
