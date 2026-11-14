---
title: "Evaluation of Music Version Retrieval Methods for Setlist Identification in Live Concerts"
date: 2026-11-13
draft: false
tags: [翻唱与曲目识别, 评测协议, 模型比较, 长音频处理, 音乐信息检索]
categories: [论文速递]
description: "论文在重建的 ASID 评测集（62 场演唱会）上比较 Re-MOVE、CLEWS 与 Nowon 内部 NAVE 的现场曲目单识别，片段级嵌入把无 SVM 的 Re-MOVE DAP 0.779 提升到 CLEWS/NAVE 的 0.903–0.910，但 NAVE 细节不足以独立复现、门控收益有限，且指标饱和与数据口径差异限制了结论外推。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.17070"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "现场演唱会曲目单识别中的音乐版本检索评测"
paper_digest_original_title: "Evaluation of Music Version Retrieval Methods for Setlist Identification in Live Concerts"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.17070v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.17070v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.17070v1.pdf"
paper_digest_primary_task: "翻唱与曲目识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.cover-song-identification","label":"翻唱与曲目识别"},{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"research_focus","id":"research_focus.comparison","label":"模型比较"},{"facet":"setting","id":"setting.long-audio","label":"长音频处理"},{"facet":"scientific_topic","id":"scientific_topic.music-information","label":"音乐信息检索"}]
paper_digest_primary_method: "评测协议"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "应用研究"
paper_digest_one_sentence: "论文在重建的 ASID 评测集（62 场演唱会）上比较 Re-MOVE、CLEWS 与 Nowon 内部 NAVE 的现场曲目单识别，片段级嵌入把无 SVM 的 Re-MOVE DAP 0.779 提升到 CLEWS/NAVE 的 0.903–0.910，但 NAVE 细节不足以独立复现、门控收益有限，且指标饱和与数据口径差异限制了结论外推。"
paper_digest_authors: [{"affiliations":["Nowon AG, Switzerland"],"name":"Andres Ferraro"},{"affiliations":["Nowon AG, Switzerland"],"name":"Albin Correya"}]
paper_digest_abstract_sha256: "9262cbdba26f3b3bd4accdfcc48ef51a50ec288fa0e232bebfe457d7a826f8be"
paper_digest_sidecars: {"citation.bib":{"sha256":"d39ab2f50159231da5d5614cb0c16a0846a0378cb5887dc4ac2a60099a77ff09","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-17070/citation.bib"},"citation.json":{"sha256":"d4b0015d99580207fcf8bdf548c7968f18cccc37114dd70fdbe0c9105812199d","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-17070/citation.json"},"citation.ris":{"sha256":"ca5ed28c372e43a73dcda429d7f942476fbd1c8c12c46e9e57e6df73c98d9526","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-17070/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"6668aa6623e89223a0cfa75bcc56e40c1d2b678089185c1f88484250773b2f1e","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-17070/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "90553f3d70599138bbaab4c07806851ac76cddcdc3fb34cd30d8a45c18f13730"
paper_digest_api_reader_plan_sha256: "65069619ac34e4810d778e3ffeb65d09e530f4bd9a95cb409c704156c9822dbe"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "44c1c8483b370a6842d15865bbc85fbb25a3c87a08c72220ea092751b262ca5a"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "5f9e75a63119ff7deac84ca4aa67bce1a980a7c03fc59fc275e7cfdf39977d80"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "b8b42755a28996c04803bdc2a93861e69fdbe72fe57ecc484d809cbf6da68064"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "9e6be09d1c11f400e42e45abededc89cbc1253c4bb81b8a8822cf3a6ecc06213"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 现场演唱会曲目单识别中的音乐版本检索评测

> 英文题目：*[Evaluation of Music Version Retrieval Methods for Setlist Identification in Live Concerts](https://arxiv.org/abs/2611.17070v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐检索](/audio-paper-digest-blog/papers/?concept=task.music-retrieval) → [翻唱与曲目识别](/audio-paper-digest-blog/papers/?concept=task.cover-song-identification)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol)
- **研究条件**：[长音频处理](/audio-paper-digest-blog/papers/?concept=setting.long-audio)
- **研究重点**：[模型评估](/audio-paper-digest-blog/papers/?concept=research_focus.evaluation) → [模型比较](/audio-paper-digest-blog/papers/?concept=research_focus.comparison)
- **科学主题**：[音乐信息检索](/audio-paper-digest-blog/papers/?concept=scientific_topic.music-information)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.2/10** | 创新 1/2 | 技术严谨 1.1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0/1.5 | 可复现 0.1/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Andres Ferraro：Nowon AG, Switzerland
- Albin Correya：Nowon AG, Switzerland

## 📌 核心摘要

现场演出曲目识别要从演唱会录音中判断哪些已知歌曲在何时被演唱，输入是整场音频和参考曲目库，输出是带起止时间的匹配；低音质、现场改编、巨型曲库和连续时间轴是主要难点。方法先把整场录音按 120 秒窗口、30 秒步长切分，得到连续待检索片段；再逐片段与参考曲目库匹配并取最高分，得到带置信度的窗口曲目；最后对窗口曲目做时间后处理，合并连续同曲目、按置信度消除重叠后再合并，输出带起止时间的识别区间。Re-MOVE 用 cremaPCP 色度特征生成 256 维单向量并以余弦距离匹配；CLEWS 用 1024 维片段嵌入；NAVE 用 256 维片段嵌入，recognition 模式以 L2 距离和对角带动态规划匹配，pooled 模式用均值池化，讨论处称其评分使用余弦距离。与 Re-MOVE 的单向量不同，CLEWS 和 NAVE 输出约 20 秒片段序列，更能承受部分重叠和改编；NAVE 的 256 维又比 CLEWS 的 1024 维节省存储和检索开销。评价用 DAP 统计被至少一次正确检出的真实曲目条目比例，用 DLP 统计真阳性覆盖真实曲目时长的比例。在重建的 ASID 评测集（62 场）、上述 120 秒/30 秒窗口、后处理且不使用 SVM 时，NAVE recognition 的 DAP 为 0.903、DLP 为 0.697，CLEWS 为 0.903 和 0.689，均高于复现的 Re-MOVE 的 0.779 和 0.573。片段级系统提高了召回与长度覆盖，NAVE pooled 的 DAP 为 0.910、DLP 为 0.705，但假阳性增至 346 个，多于 recognition 的 280 个。原文未披露训练、推理或部署成本，只按 float32、20 秒片段和 5 秒步长估算存储，NAVE 约为 CLEWS 的四分之一；这些结论限于重建的 ASID 和这三套系统，不能直接外推到所有现场条件，原文还指出指标对边界精度和接近饱和的 DAP 不够敏感。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 现场曲目单识别要回答什么

现场曲目单识别（setlist identification）的输入是一整场演唱会的连续录音，目标是把其中的歌曲出现段与一个已知参考曲目库对应起来，并输出带起止时间的歌曲清单。它要保留的信息不只是“这首歌是否出现过”，还包括出现了哪些歌、在什么时间段出现，以及相邻歌曲之间的边界。对现场录音来说，同一条时间轴上既有唱歌，也有掌声、说话、静默、调音和串场，系统不能假定每个输入片段都只包含一首干净的歌曲。

音乐版本识别（VI）关心的是同一作品在演出、录音或编曲发生变化后仍能被认出来；现场曲目单识别把这个匹配能力放到长录音上，要求连续地做出多次判断。这个区别决定了评测不能只看一首查询歌曲的排序，还要看整场时间轴上的漏检、误检和覆盖长度。

**音乐版本识别（VI） × 曲目单识别（setlist identification）：** 音乐版本识别（VI）负责判断“这段声音像哪首参考作品”，重点是同一作品在编曲、音质和演出差异下仍可匹配；曲目单识别（setlist identification）则把这种判断放到整场演唱会的时间轴上，要求对连续片段反复识别并汇总成歌曲序列和边界。VI 提供窗口级的匹配分数，曲目单识别再依靠滑动窗口覆盖全曲、依靠时间后处理合并连续检测；只有 VI 不会自动得到完整曲目单，只有时间汇总而没有可靠的版本匹配也无法定位歌曲。

因此，一个可用的系统需要同时处理匹配、持续监测和结果汇总：单次窗口的相似度给出一时一地的候选，后续步骤再把重复的、相邻的和互相冲突的候选整理成歌曲段。本文讨论的就是这套流程在真实演唱会条件下的评测。

### 从版本识别到 ASID：已有路线与本文的比较范围

音乐版本识别在 MIR 中已有较长研究链。早期方法使用手工 chroma 特征，再配合 DTW 或 cross-similarity 做序列对齐；这类方法能处理速度变化，但对长录音和大规模检索不一定经济。后来，深度嵌入模型把查询和参考压成向量，用近邻搜索完成曲目级匹配，MOVE、Re-MOVE 使用 cremaPCP chroma 学习紧凑嵌入；CQTNet、ByteCover 和 CoverHunter 则探索不同的网络、损失与标准 cover-song 基准，如 SHS100K 和 Da-TACOS。CLEWS 进一步使用对比学习产生片段级嵌入，并用 bpwr 之类的距离归约处理可变长度匹配。

曲目单识别的专门研究较少。早期工作把全长演唱会视频中的歌曲识别和分段定义为自动曲目单任务，从录音棚参考库中逐首识别并估计边界，并在 20 场完整演唱会和 1,152 首录音棚曲目上评测。ASID 工作重新整理了这个任务，给出数据集与基准：对演唱会音频滑窗，将每个窗口与全参考库匹配，再做时间后处理，并可选地用开发集训练 SVM 过滤误报。原始 ASID 比较了 Qmax、2DFTM 和 Re-MOVE，其中 Re-MOVE 表现最好。

本文没有穷举所有版本识别模型，而是选取 3 条与现场长录音最相关的路线：ASID 中最强的基线 Re-MOVE、近期片段级嵌入模型 CLEWS，以及 Nowon 的内部系统 NAVE。这个选择使比较集中在同一 ASID 流程下，而不是把不同曲目级基准上的最佳分数直接搬过来。

### 演唱会场景为什么比曲目级检索更难

论文把生产场景的困难归结为 4 类。第一是低音质：演唱会录音可能来自专业设备，也可能是噪声场馆中的手机拍摄，包含混响、观众声、削波和低频轰鸣；这些成分会改变频谱，也会制造与参考曲目无关的相似片段。第二是编曲变化：现场版本可能改调、改速度，加入长段独奏、串烧、组曲，或缩短、重排段落，使查询与录音棚版本的时间对应不再规整。

第三是规模：一场演唱会可持续 1–3 小时，而候选参考库可能有数百万首歌曲，检索要能在大目录中快速完成。第四是连续监测：标准 query-by-example 往往给定一段干净查询，只回答一首歌；曲目单识别必须沿整条时间轴持续输出检测，因此还要处理相邻歌曲的边界、非音乐间隙和重复检测。

这些条件相互耦合。低音质会降低单窗匹配的可分性，编曲变化会破坏简单的时间对齐，大规模候选库要求嵌入紧凑，而长录音又让窗口数量和后处理成本放大。论文的评测设计正是围绕这些条件展开，而不是只在一个干净曲目级基准上比较分类准确率。

### 三种系统共享的窗口匹配与时间汇总流程

3 种系统最终都走一条共同流程：把演唱会按 120 s/30 s 切成重叠窗口，窗口进入各自的嵌入与打分器，得到与所有参考曲目的匹配分数，取最高分参考；把所有窗口的 top-1 结果交给时间后处理，生成歌曲检测段。区别在窗口如何表示、窗口内是否保留片段级时间结构，以及相似度如何计算。

滑动窗口负责覆盖长录音：120 s 的窗口提供足够上下文，30 s 的步长让相邻窗口重叠，减少边界恰好落在窗外的风险，但也带来重复检测和更多计算。时间后处理负责把窗口级候选还原成歌曲级输出：连续命中同一参考的窗口合并；不同参考的检测若时间重叠，保留置信度较高者；合并后再次合并。这个顺序说明系统先做局部判断，再在时间轴上消除重复。

**滑动窗口 × 时间后处理：** 滑动窗口负责把一场数小时演唱会变成许多可计算的局部查询，使系统能沿时间持续产生候选；时间后处理负责把这些互相重叠、可能重复的窗口判断合并成歌曲段，并在冲突时保留较高置信度。没有滑动窗口，长录音无法逐段检索；没有时间后处理，同一首歌会被数十个窗口重复报告，边界也无法形成。二者组合后，窗口级匹配才变成曲目单输出，但后处理只能整理已有候选，不能纠正系统性漏检或完全修复窗口内部的错误匹配。

ASID 的 SVM 是可选第二阶段。它用开发集上的 TP/FP 特征训练，特征包括匹配时长和置信度，再在评估集上过滤误报。论文对 Re-MOVE 报告了带与不带 SVM 的结果；对 CLEWS 和 NAVE 没有训练对应 SVM，理由是原 SVM 的特征和分数分布是为 Re-MOVE 设计的。因此主表里 CLEWS/NAVE 的不接 SVM 行与 Re-MOVE 的 SVM 行不是同一过滤条件，比较时必须拆开。

### 输入表示、嵌入维度和打分方式的差异

Re-MOVE 的输入是 12 维 cremaPCP chroma，这是一种手工设计的 chroma 表示；它通过度量学习模型产生 256 维的曲目/窗口向量，查询和参考之间用余弦距离打分。因而 Re-MOVE 把每个窗口压成一个紧凑向量，适合大规模向量检索，但窗口内部的时间变化被压缩。

CLEWS 直接以音频为输入，内部使用频谱表示，经过对比学习产生片段级 1024 维嵌入。它保留多个 shingle 嵌入，对查询和参考的所有片段对计算归一化平方欧氏距离，再用 bpwr-5 或 bpwr-10 归约为歌曲级分数。论文没有在主表中逐项说明所报 CLEWS 数字对应哪种 bpwr 设置，复现时应核对。

NAVE 是 Nowon 的内部 Neural Audio Version Embeddings，同样以音频为输入，产生 256 维片段嵌入。它有两种打分：识别模式用 L2 距离配合对角带动态规划，利用片段的顺序关系；池化模式把片段嵌入取均值，作为去掉 DP 对齐的 Re-MOVE 式消融。论文在讨论中说池化打分使用均值加余弦，同时又说两种模式都使用 L2 归一化嵌入；具体打分实现需要在复现时核对。两种 NAVE 模式都保留片段级表示，但识别模式对时间顺序更敏感，池化模式更宽松。

**Re-MOVE × CLEWS × NAVE：** Re-MOVE 用紧凑的窗口向量提供低存储的基线；CLEWS 用 1024 维片段序列保留更细的时间结构；NAVE 则试图用 256 维片段序列同时保留片段匹配和较低存储。三者的组合意义在于把“表示粒度、对齐方式、维度成本” 放在同一评测流程中：Re-MOVE 说明单向量基线的上限和目录成本，CLEWS 提供片段级外部对照，NAVE 的 recognition 与 pooled 则进一步区分动态规划对齐和均值池化的作用。

下面的表只比较输入类型与嵌入维数，不能代替后面的精度和误报结果。

| System | Input | Embedding | Dim. |
| --- | --- | --- | --- |
| Re-MOVE | cremaPCP chroma | track / window vector | 256 |
| CLEWS | audio | segment sequence | 1024 |
| NAVE | audio | segment sequence | 256 |

表 1 显示，Re-MOVE 用 cremaPCP chroma 产生单个 256 维向量；CLEWS 和 NAVE 用音频产生片段序列，维度分别是 1024 和 256。这里的关键差异有两层：一层是表示粒度，CLEWS/NAVE 保留时间序列，Re-MOVE 把窗口压成一个向量；另一层是维数，NAVE 的 256 维低于 CLEWS 的 1024 维。后续看到 NAVE 与 CLEWS 的 DAP 接近时，不能把原因单独归给维数，因为输入、训练来源、片段划分和打分方式都不同。

### 这篇论文没有重新训练新网络，复现发生在哪些环节

这篇论文没有训练新的版本识别网络，也没有报告在 ASID 上微调 CLEWS 或 NAVE 的过程。实际执行的是重建音频与特征、加载已有模型或检查点、按统一协议做推理和打分。Re-MOVE 使用原作者代码和预训练模型；CLEWS 使用论文所述 Zenodo 公开检查点和官方推理代码；NAVE 是内部系统，论文只描述其嵌入维度和两种打分模式，没有给出网络结构、训练语料、损失函数、优化器或训练轮数。

推理时的计算路径分别如下。Re-MOVE 先把窗口或曲目表示成 cremaPCP chroma，再由模型产生 256 维向量，用余弦距离与参考比较。CLEWS 把音频转成片段嵌入，对所有查询-参考 shingle 对计算归一化平方欧氏距离，再归约。NAVE recognition 产生 256 维片段序列，以 L2 距离和带对角约束的动态规划计算匹配分数；NAVE pooled 先把片段取均值，再比较。3 种系统都用 top-1 参考生成窗口候选，然后进入同一时间后处理。

可选的 SVM 只在开发集上训练，输入是匹配时长、置信度等 TP/FP 特征，用来过滤评估集误报。论文没有说明 CLEWS/NAVE 的 SVM 应该如何重新训练，也没有把该过滤器迁移过去，因此主表中这两类系统的数字是“无 SVM” 结果。原文同样没有披露梯度是否被冻结、检查点是否更新以及是否做过额外调参；在没有这些信息时，不能根据模型名称推断训练细节。

### 重建的 ASID 数据与固定评测条件

论文使用的 ASID 评测基准在开展工作时无法直接取得，因此作者重新收集原始音频并重做特征，以复现实验。原始 ASID 被描述为 75 场演唱会，其中 10 场用于开发、65 场用于评估；复现时 3 场评估演唱会的音频已经无法找回，所以实际评估集是 62 场，开发集仍为 10 场。重建集约有 100 小时音频，覆盖流行、摇滚/金属、独立/另类、嘻哈/说唱和电子 5 类，并配 1,298 首与演出艺人相关的录音棚参考曲目。

每场演唱会都有真值标注，把歌曲出现段映射到参考曲目，并给出开始、结束时间。音频质量分 3 层：AQ-A 是广播/官方录音，AQ-B 是专业小场地录音，AQ-C 是手机或相机拍摄。论文说明的总体划分是 AQ-A 32 场、AQ-B 18 场、AQ-C 15 场；后文表 3 则列出 31、16、14 场。由于原文同时使用 75、62、10 等不同口径，且 5 类曲风的场次数相加为 65，复现时不能简单把这些数字当作互相对齐的清单，先要核对哪些演唱会进入了最终评估和每个子集的构成。

参考库缺失和特征提取失败也会影响某些演唱会的召回，这一点在论文的限制部分有说明。对于读者而言，重要的不是记住场次数，而是理解评测对象：一段长录音、一个受艺人限制的参考库、带起止时间的真值，以及按音质和曲风分层的子集。后续所有方法都在这套重建条件下比较，因此结果首先是“在该重建 ASID 上” 的结果。

### DAP 与 DLP 分别检查召回和时长覆盖

评测协议先固定窗口：对每场演唱会取 120 s 窗，每 30 s 前进一步；每个窗口与所有参考曲目打分，取分数最高的参考作为该窗口的候选；随后时间后处理把连续命中同一参考的窗口合并，遇到重叠检测保留置信度最高者，再合并 1 次。这个流程使输入不是一首歌，而是许多重叠窗口；输出也不是单标签，而是一组带时间的检测段。

**DAP × DLP：** DAP 按真值标注统计召回，回答“有多少歌曲至少被一个正确检测碰到”；DLP 按真值时长统计重叠覆盖，回答“被检测到的歌曲实际覆盖了多长”。DAP 不直接惩罚误报，DLP 则会因只覆盖歌曲的一小段而下降；两者组合后，一个约束歌曲级漏检，另一个约束时间覆盖，但仍不能替代边界误差或精确率。

DAP（Detection Accuracy Percentage）按真值标注统计召回：一个标注只要与至少一个时间重叠的正确检测相交，就算被检测到。原文的公式写作总标注数减去漏检数，再除以总标注数。

\[\text{DAP}=\frac{\text{annotations}-\text{FN}}{\text{annotations}}\]

这里的分母是标注数量，不是窗口数量；表格另列的 TP、FP、FN 是后处理后的窗口级计数，不能未经核对就把窗口级 FN 代进标注级公式。DAP 不直接惩罚误报，所以高 DAP 可以与大量 FP 同时出现，必须和计数或精确率一起看。

DLP（Detected Length Percentage）统计真值标注的总时长中，被时间重叠的正确检测覆盖了多少。

\[\text{DLP}=\frac{\sum\text{overlap}(\text{TP}_{i},\text{GT}_{j})}{\sum\text{duration}(\text{GT}_{j})}\]

公式里的 TP_i 与 GT_j 表示互相重叠的检测段和真值段，分子累加重叠时长，分母累加所有真值段的持续时间。DLP 因而比 DAP 更关心检测是否覆盖整首歌、是否在边界处留下大空缺；如果只检测到歌曲的一小段，DAP 可能仍记命中，DLP 会明显降低。两个指标一个偏“是否找到”，一个偏“覆盖多少时长”，但都不等于边界误差或精确率。

### 整体结果：片段级系统提高 DAP，代价出现在误报和条件不齐

表 2 汇总 62 场评估演唱会的整体结果，所有行都使用 120 s 窗口、30 s 步长和后处理。比较前要先看过滤条件：Re-MOVE 同时列原文报告、本文复现以及带/不带 SVM 的变体；CLEWS 和 NAVE 只有不接 SVM 的结果。把 NAVE 的无 SVM 行与 Re-MOVE 的 SVM 行直接相减，会把“系统差异” 和“后置过滤差异” 混在一起。

| System | Filter | DAP | DLP | TP | FP | FN |
| --- | --- | --- | --- | --- | --- | --- |
| Re-MOVE (paper) | none | 0.803 | 0.605 | — | — | — |
| Re-MOVE (paper) | SVM | 0.678 | 0.569 | — | — | — |
| Re-MOVE (ours) | none | 0.779 | 0.573 | 860 | 1053 | 240 |
| Re-MOVE (ours) | SVM | 0.601 | 0.507 | 652 | 115 | 432 |
| CLEWS | none | 0.903 | 0.689 | 975 | 272 | 109 |
| NAVE recognition | none | 0.903 | 0.697 | 973 | 280 | 105 |
| NAVE pooled | none | 0.910 | 0.705 | 985 | 346 | 98 |

先看无 SVM 的比较。本文复现的 Re-MOVE 是 DAP 0.779、DLP 0.573，TP 860、FP 1053、FN 240；原文报告的是 DAP 0.803、DLP 0.605。两者不完全一致，说明音频重建、特征提取或实现版本会影响结果，因而不能把原文数字当作同一实现的重复测量。CLEWS 得到 DAP 0.903、DLP 0.689，TP 975、FP 272、FN 109。

NAVE recognition 得到 DAP 0.903、DLP 0.697，TP 973、FP 280、FN 105；NAVE pooled 得到 DAP 0.910、DLP 0.705，TP 985、FP 346、FN 98。就这组结果看，片段级系统的 DAP 约为 0.90，比无 SVM 的 Re-MOVE 0.779 高约 12 个百分点；这是 DAP 数值之间的绝对差，不是相对提升率。

NAVE recognition 与 CLEWS 的 DAP 同为 0.903，NAVE 的 DLP 稍高（0.697 对 0.689），而嵌入维数是 256 对 1024。这个对照支持“较低维片段嵌入在该评测中没有必然损失 DAP” 的说法，但样本只有 1 次重建评测，没有置信区间或显著性检验，不能推广成所有曲库和所有音质下的稳定优势。NAVE pooled 的 DAP 比 recognition 高 0.007，却把 FP 从 280 增到 346，说明均值池化更宽松：它多接住一些标注，也引入更多误报；DLP 从 0.697 到 0.705，同样只是小幅变化。

Re-MOVE 的 SVM 行展示了过滤器的代价：复现实验中 FP 从 1053 降到 115，但 DAP 从 0.779 降到 0.601，FN 升到 432；原文报告带 SVM 的 DAP 为 0.678、DLP 0.569。这里能支持的结论是“该 SVM 设置过滤很激进，降低了误报也损失大量召回”，不能据此说 SVM 普遍有害，也不能说 CLEWS/NAVE 接上同类 SVM 后仍会保持相同排序，因为它们没有同条件训练和评测。

### 音质分层：AQ-B 最高，AQ-C 最难

这张表只考察 NAVE recognition，且不接 SVM；它按音频质量层比较 DAP 以及后处理后的 TP、FP、FN。DAP 越高表示越多真值歌曲标注至少被一个正确检测覆盖；FP 和 FN 越低通常越好，但 DAP 本身不直接惩罚 FP，所以要同时读计数。

| Quality | DAP | TP | FP | FN | nn concerts |
| --- | --- | --- | --- | --- | --- |
| AQ-A (broadcast) | 0.897 | 505 | 165 | 58 | 31 |
| AQ-B (professional rec.) | 0.971 | 199 | 47 | 6 | 16 |
| AQ-C (smartphone) | 0.862 | 254 | 63 | 41 | 14 |

AQ-B 专业小场地录音的 DAP 最高，为 0.971，TP 199、FP 47、FN 6、表中场次数 16；AQ-C 手机录音最低，为 0.862，TP 254、FP 63、FN 41、场次数 14；AQ-A 广播/官方录音居中，为 0.897，TP 505、FP 165、FN 58、场次数 31。AQ-C 比 AQ-B 低约 11 个百分点，这与手机录音常见的噪声、混响和频谱失真相符。AQ-A 没有成为最容易的一层，论文推测广播混音可能包含更多观众声、解说和音频处理，这一解释还没有被单独的实验控制验证。

这张表还有口径问题：3 层的场次数 31、16、14 合计 61，而表题和正文的总体评估集写 62 场；正文另一处又写 AQ-A 32 场、AQ-B 18 场、AQ-C 15 场，合计 65。由于分层计数本身不一致，不能把表中的职业/手机差距直接解释为总体 62 场的精确分层效应，复现时要先核对每场演唱会的质量标签和缺失情况。表中只给 DAP，没有 DLP，因此这里不能判断手机录音的边界覆盖是否也按同一幅度下降。

### 曲风差异：说唱的低 DLP 与电子的池化优势

表 4 按曲风列出 3 种片段级系统的 DAP 与 DLP，全部是不接 SVM 的后处理结果。比较对象是 CLEWS、NAVE recognition、NAVE pooled 在同一曲风子集上的表现；DAP 与 DLP 方向都是越高越好，前者看标注是否被找到，后者看真值时长被覆盖多少。

|  | CLEWS | CLEWS | NAVE recog. | NAVE recog. | NAVE pooled | NAVE pooled |
| --- | --- | --- | --- | --- | --- | --- |
| Genre | DAP | DLP | DAP | DLP | DAP | DLP |
| Pop | 0.929 | 0.829 | 0.933 | 0.839 | 0.921 | 0.832 |
| Rock/Metal | 0.886 | 0.799 | 0.903 | 0.816 | 0.897 | 0.811 |
| Indie/Alt. | 0.943 | 0.796 | 0.943 | 0.822 | 0.953 | 0.830 |
| Hip-hop/Rap | 0.845 | 0.278 | 0.810 | 0.273 | 0.796 | 0.271 |
| Electronic | 0.891 | 0.686 | 0.873 | 0.691 | 0.982 | 0.791 |

最明显的是 Hip-hop/Rap：CLEWS 的 DAP/DLP 为 0.845/0.278，NAVE recognition 为 0.810/0.273，NAVE pooled 为 0.796/0.271。三者的 DAP 仍在 0.80 左右，但 DLP 只有约 0.27，说明不少歌曲标注能被某个检测碰到，检测却没有覆盖歌曲的大部分时长。论文把这一现象与说唱更依赖人声和节奏、旋律/和声结构对 tonal embedding 帮助较小联系起来；这是对结果的机制解释，不是把曲风当作唯一原因的控制实验。

独立/另类在 3 种系统中都较高，CLEWS 为 0.943/0.796，NAVE recognition 为 0.943/0.822，NAVE pooled 为 0.953/0.830，且论文称误报较低。电子曲风出现分歧：CLEWS 为 0.891/0.686，NAVE recognition 为 0.873/0.691，而 NAVE pooled 达到 0.982/0.791。论文认为 DP 对齐可能不适合重复性强的电子结构，池化反而平滑了这种影响；这能解释观察到的方向，但还需要单独改变对齐方式的实验来验证。多数曲风上系统差异小于 5 个百分点，电子和说唱是更值得继续检查的例外。

此外，表 4 没有给每类曲风的场次数。数据集文字列出的 5 类计数为 14、21、15、8、7，相加是 65，而评估集写 62；因此各曲风汇总对应的实际样本构成仍需核对。曲风结果只适用于 NAVE recognition 和 CLEWS 的这组无 SVM 评测，不能直接外推到其他参考库或未列入的 5 类以外音乐。

### 从识别轨道看门控如何改变歌曲边界

表 5 的总体指标变化不大，但输出在时间轴上的形状可能改变。第一幅图给出 Adele 整场演唱会的 GT、未过滤 NAVE recognition 和音乐门控后的 Filtered 3 条轨道。读图时先看横轴时间（秒）和 3 条轨道的颜色对应关系，再比较蓝色连续段与橙色分段相对绿色歌曲块的位置；不要用肉眼把每个边界读成精确秒数。

> **看图路径：** 1. 先确认三条轨道分别对应 GT、Recognition 和 Filtered；2. 比较蓝色连续段与橙色分段相对绿色歌曲块的位置；3. 注意横轴是时间秒数，不要把肉眼看出的边界当成精确测量

[![原论文 Figure 1：Full version identification output using NAVE recognition filtered vs unfiltered for Adele concert.](https://arxiv.org/html/2611.17070v1/image1.png)](https://arxiv.org/html/2611.17070v1/image1.png)

*论文图 1。原论文 Figure 1:：“Full version identification output using NAVE recognition filtered vs unfiltered for Adele concert.”。*

第一幅图确实显示，绿色 GT 是若干分离的歌曲块；蓝色 Recognition 在很多区域连成更长的带，跨越了绿色块之间的空隙；橙色 Filtered 被切成更多段，其空隙位置与绿色歌曲块之间的间隔更一致。这个可见差异说明门控改变了最终输出段的连续性和边界呈现，也可以解释为什么只看 DAP/DLP 的小数变化不足以描述全部效果。但图中标签拥挤，无法可靠读出每个边界的精确时刻；这只能作为定性证据，不能替代逐秒边界指标。

第二幅图放大同一场演唱会开头约 800 s 的范围。上方 3 条轨道仍是 GT、Recognition、Filtered；下方纵轴为 music，范围 0.0 到 1.0，紫色填充表示 music=1，细线表示 music_prob。读图时把下方概率掩码的低谷与橙色 Filtered 段之间的空缺对齐，再观察蓝色 Recognition 是否跨过这些低谷。

> **看图路径：** 1. 把下方 music_prob 的低谷与上方橙色 Filtered 的空缺对齐；2. 观察蓝色 Recognition 是否跨过这些低谷；3. 区分紫色 music=1 掩码与细线概率曲线

[![原论文 Figure 2：Version identification output using NAVE recognition filtered vs unfiltered, and score of the…](https://arxiv.org/html/2611.17070v1/image2.png)](https://arxiv.org/html/2611.17070v1/image2.png)

*论文图 2。原论文 Figure 2:：“Version identification output using NAVE recognition filtered vs unfiltered, and score of the music/non-music classifier. Zoom in on first part of Adele concert.”。*

第二幅图可见，music_prob 在若干区间明显下降，紫色掩码在这些位置断开或变窄；橙色 Filtered 主要在这些非音乐或低置信区间之外结束，而蓝色 Recognition 仍可能连续穿过。这个效果与表 5 的方向一致：conservative 类规则能改变歌曲边界附近的输出，但总体 DAP 只小幅变化。图本身没有给出边界误差的数值，无法验证某个门控在每一场都更接近 GT；论文由此提出原 ASID 指标可能没有充分捕捉边界精度，这一点需要单独设计指标和逐场统计来确认。

### 音乐/非音乐门控：小幅指标变化与策略边界

这一组实验固定 NAVE recognition，只改变音乐/非音乐门控。门控使用 TVSM-pseudo CRNN 做帧级语音/音乐活动检测，再决定哪些 120 s 窗口保留；目标是压掉掌声、说话和静默处的误报，同时尽量不删掉真正的音乐窗口。

**音乐/非音乐门控 × conservative_gate：** 音乐/非音乐门控先用活动检测给出每个时间位置的音乐概率，再由窗口级规则决定是否把该窗口送入识别；它负责减少掌声、语音和静默造成的候选，而不是改变嵌入模型本身。conservative_gate 进一步用平滑掩码、最短音乐时长和 80% 重叠阈值，只在较有把握的音乐区域保留窗口，因此比简单重叠规则更能保护完整歌曲段、也避免 music_island_loose 那种过度裁剪。门控与 NAVE recognition 组合后，系统仍是原来的匹配器，只是输入窗口集合被改变；所以收益应表现为误报和边界的修正，而不是新的版本匹配能力。

比较的策略包括：overlap_mean，要求在均值融合的 CRNN 分块上至少 50% 窗长与音乐掩码重叠；music_beats_speech，同样要求 50% 重叠，但掩码要求音乐压过语音；conservative_gate，使用更平滑的掩码、最短音乐时长和更严格的 80% 重叠；music_island_loose，只保留 CRNN 种子形成的连续“音乐岛” 内部窗口，裁剪更激进。4 种策略共享同一组 CRNN 预测，因此差异来自门控规则，不是重新训练检测器。

表 5 比较未过滤与 4 种门控的 DAP、DLP、TP、FP、FN。DAP 与 DLP 越高越好，TP 越高通常越好，FP 和 FN 越低通常越好；所有行都是 NAVE recognition 在同一评估集上的后处理结果。

| Strategy | DAP | DLP | TP | FP | FN |
| --- | --- | --- | --- | --- | --- |
| Unfiltered | 0.903 | 0.697 | 973 | 280 | 105 |
| overlap_mean | 0.909 | 0.705 | 984 | 331 | 99 |
| music_beats_speech | 0.909 | 0.705 | 984 | 313 | 99 |
| conservative_gate | 0.908 | 0.707 | 983 | 287 | 100 |
| music_island_loose | 0.839 | 0.640 | 924 | 243 | 177 |

未过滤的 DAP/DLP 为 0.903/0.697，TP 973、FP 280、FN 105。conservative_gate 把 DAP 提到 0.908、DLP 提到 0.707，TP 983、FP 287、FN 100；FP 只比未过滤多 7，是 4 种策略中较好的折中，并给出最高的 DLP。overlap_mean 与 music_beats_speech 的 DAP 都是 0.909、DLP 都是 0.705，但 FP 分别升到 331 和 313，说明保留更多窗口会增加误报。music_island_loose 的 FP 虽降到 243，却把 FN 推到 177，DAP 降到 0.839、DLP 降到 0.640；对 120 s 窗口来说，这种裁剪过于激进。

这些数字支持“门控是小幅修正”，而不是全面提升识别能力：最好的 DAP 只比未过滤高 0.006，DLP 高 0.010，且不同规则之间排序并不一致。论文还指出，非音乐门控的潜在价值在于减少长录音中短间隙和长间隙的昂贵处理；但本表没有测延迟、吞吐或计算节省，不能把这些工程收益当作已实现结果。

### 这些结论只在特定数据与指标下成立

上述结论首先限定在重建 ASID 和 120 s/30 s/top-1/时间后处理协议内。评估集只有 62 场，参考库 1,298 首，离生产中的数百万候选曲目还有很大距离；论文的规模讨论主要是嵌入存储估算，不是 1000000 级近邻搜索的吞吐或延迟实测。存储估算假设 float32 且 CLEWS、NAVE 都采用 20 s 窗、5 s 步长，5 分钟参考约产生 57 个 shingle；据此，一百万首歌曲的 CLEWS 1024 维嵌入约需 233 GB，NAVE 256 维约需 58 GB，而 Re-MOVE 每首歌只存一个 256 维向量，约 1 GB。这个比较说明存储差异的量级，但不包含索引、内存带宽、I/O 和查询延迟的实测。

数据集口径也有几处会影响解释。原文写原始 ASID 75 场、10 场开发、65 场评估；复现时 3 场评估音频缺失，得到 62 场评估，同时保留 10 场开发，但 62 与 10、75 的包含关系没有完全说明。5 类曲风的场次数相加为 65；音频质量层在正文写 32/18/15，在表 3 内却是 31/16/14，合计 61。

缺失参考和特征提取失败还会降低某些演唱会的召回。不同论文段落和表格之间存在这些口径差异时，不能自行补数或重算总体效应。

指标方面，DAP 是标注级召回，不直接惩罚 FP；表中 TP/FP/FN 又是后处理后的窗口计数，层级不同。DLP 虽看时长覆盖，也不等于边界误差本身。NAVE 已达到约 0.90 DAP，论文承认这可能出现指标饱和，小差异很难区分真实模型收益与数据集限制。图 1 和图 2 提示门控可能改善边界呈现，但没有给出可比的边界数值，也没有逐场显著性检验。

比较条件也不完全对称。CLEWS 和 NAVE 没有接 SVM，而 Re-MOVE 既有原文 SVM 行也有复现行；SVM 的特征和分数分布又是围绕 Re-MOVE 设计的。NAVE 是内部系统，论文没有公开足够结构、训练数据和优化细节；Re-MOVE 的复现 DAP 也低于原文，说明重新收集音频、重做特征和实现版本会改变数字。

文中所报告的版本识别方法、代码和检查点是否仍可获得，以及它们能否在同一环境中端到端运行，不能仅由论文文字推定。最后，论文没有报告置信区间、逐场分布、统计检验或实际生产延迟，因此“片段级系统更好”“保守门控是最佳折中” 等判断都只适用于这次 ASID 评测和相应指标，不应扩展为所有场馆、曲库和部署预算下的保证。

### 复现第一步：先固定基准清单，再谈模型差异

如果要复现，第一步不是先调 NAVE 参数，而是重建可核验的基准清单：确认最终进入评估的是哪些演唱会，3 场缺失音频对应哪三场，开发集是否仍为 10 场，1,298 首参考曲目如何与每场真值对应，以及 5 类曲风和质量层的实际场次数为何与总数不一致。只有清单和真值固定后，后续 DAP、DLP 和子集比较才有共同分母。

第二步是固定推理协议：120 s 窗、30 s 步长、每窗取 top-1 参考、连续同参考合并、重叠保留高置信度再合并；对 Re-MOVE 分别跑无 SVM 和原文 SVM 设置，对 CLEWS 和 NAVE 保持无 SVM，避免把不同过滤器混在同一比较里。Re-MOVE 要核对 cremaPCP 特征和余弦打分；CLEWS 要核对所用 bpwr 设置、片段划分以及论文所述检查点与推理代码的对应关系；NAVE 要核对 recognition 的 L2 距离、对角带 DP 以及 pooled 的均值池化和比较方式。存储估算中的 20 s 窗、5 s 步长是另一组假设，不能和 120 s/30 s 主实验窗口混用。

第三步是分别验证可运行性。论文说明 Re-MOVE 使用原作者代码和预训练模型，并给出 CLEWS 检查点与官方推理代码的线索；但这些只是论文中的资源说明，本次没有核验到对应作者资源处于可确认的可用状态，因此不能据此认定代码、权重或模型已由作者公开或当前可达。同时，“有代码说明”“有权重线索”“整套系统可运行” 是三件事，仍需在当前环境检查依赖、预处理、参考库索引和后处理版本。

NAVE 是内部系统，论文没有给出可独立重建的训练流程和模型文件，因此仅凭这篇论文无法完整复现 NAVE；能复现的至多是它的两种打分思想或向作者索取实现。复现时还应保留逐场结果，以便检查不同音质、曲风和歌曲长度上的失败是否被总体平均掩盖。

需要补的验证包括：设计能测边界误差的指标；在同一过滤条件下重新训练或适配 SVM；报告逐场和按分层的置信区间；测量 1000000 级参考库的检索延迟、内存和 I/O，而不是只给存储容量；并核对音频重建造成的 Re-MOVE 差距。若这些验证没有完成，主结果应表述为“在该重建 ASID 子集和该推理流程下的观察”，而不是已经证明生产系统更优。

### 什么时候值得采用，下一步还要验证什么

什么时候值得尝试？当任务是从数小时、音质波动大的现场录音中持续找出已知歌曲，并且参考库较大时，这篇论文的证据支持优先考虑保留片段级时间结构的音频嵌入，而不是只用单个窗口向量。NAVE recognition 和 CLEWS 在这套 ASID 评测中的 DAP 都达到 0.903，NAVE 用 256 维片段嵌入取得与 1024 维 CLEWS 相同的 DAP，并在 DLP 上略高；NAVE pooled 把 DAP 提到 0.910，却增加 FP。若存储是主要约束，NAVE 的维数估计有吸引力，但其内部系统细节不足以独立部署；若要公开可复现的起点，论文提供了 Re-MOVE 基线和 CLEWS 检查点的使用路线，但当前可用性和端到端可运行性仍需自行确认。

决定是否采用前，应把“歌曲是否被找到” 和“边界是否可用” 分开。Hip-hop/Rap 的 DAP 约 0.80，但 DLP 只有约 0.27，说明仅看召回会高估可用性；音乐/非音乐门控在表格中只是小幅提高，最激进的 music_island_loose 反而降低 DAP 和 DLP。电子曲风上 NAVE pooled 的 0.982 DAP 提示池化可能适合重复结构，但这是需要专用实验验证的线索，不是已经被普适证明的规律。

复现的第一步仍是核对 ASID 重建清单和参考覆盖，然后固定 120 s/30 s、top-1 与后处理，分别跑 no-SVM 的 Re-MOVE、CLEWS、NAVE 两种打分；不要把 NAVE 的内部结果直接当作可部署基线。还需要补的验证包括边界敏感指标、分层置信区间、同条件 SVM 对照，以及 1000000 级目录下的真实延迟和成本。只有当这些条件被交代清楚，才能判断约 0.90 的 DAP 是新方法带来的可复现增益，还是数据集、指标饱和和重建选择共同造成的表面差距。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：应用研究 | [arXiv 原文](https://arxiv.org/abs/2611.17070v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：deepseek-v4.1-flash

- 评分请求协议：openai_responses

---

[← 返回 2026-11-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-13/)
