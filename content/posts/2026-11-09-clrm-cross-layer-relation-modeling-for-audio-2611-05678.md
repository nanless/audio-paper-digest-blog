---
title: "CLRM: Cross-Layer Relation Modeling for Audio Deepfake Detection"
date: 2026-11-09
draft: false
tags: [音频深度伪造检测, 模型融合, 自监督学习, 语音]
categories: [论文速递]
description: "针对跨合成方法和跨录音条件的音频伪造检测，CLRM 复用冻结检测器的 XLS-R 编码器，对选定的两个层做显式跨层比较并与原分数融合，在五个外部数据集上把三类检测器的平均等错误率相对降低 7.8%–16.7%，代价是只训练紧凑的关系头和融合参数。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.05678"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "CLRM：把同一句话在编码器不同深度的表示拿来直接比较"
paper_digest_original_title: "CLRM: Cross-Layer Relation Modeling for Audio Deepfake Detection"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.05678v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.05678v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.05678v1.pdf"
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"},{"facet":"method","id":"method.model-combination","label":"模型融合"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "模型融合"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对跨合成方法和跨录音条件的音频伪造检测，CLRM 复用冻结检测器的 XLS-R 编码器，对选定的两个层做显式跨层比较并与原分数融合，在五个外部数据集上把三类检测器的平均等错误率相对降低 7.8%–16.7%，代价是只训练紧凑的关系头和融合参数。"
paper_digest_authors: [{"affiliations":["EURECOM","Sophia Antipolis, France"],"name":"Yangyang Qu"},{"affiliations":["The Hong Kong Polytechnic University","Hong Kong SAR, China"],"name":"Siqing Qin"},{"affiliations":["The Hong Kong Polytechnic University","Hong Kong SAR, China"],"name":"Kong Aik Lee"},{"affiliations":["EURECOM","Sophia Antipolis, France"],"name":"Massimiliano Todisco"}]
paper_digest_abstract_sha256: "d2e69699faa00411cd30077ccafd92e07b987340916cb6867bd005e5f5498162"
paper_digest_sidecars: {"citation.bib":{"sha256":"c0a635040a02e260ea952bd9904eb1d384685471a31233cfe72d809fd58a7bd1","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-05678/citation.bib"},"citation.json":{"sha256":"f6e014e95491ccd7d57d593d61bcd49efc5ad19d29c8f0c99107cd9259dd48cc","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-05678/citation.json"},"citation.ris":{"sha256":"d97ee81e44f8378ab9268fc6b0b5baacf0681f3036327d746efc8518dd6bf2f2","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-05678/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"2471d60783a7c8a5d5494255c063d30aa2d9fc554d7f34ac03b6a5eadd226b34","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-05678/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "22ec702cf0e81c09e2e0dca969471499d97078816eb47859cdc7ec47e6c6b267"
paper_digest_api_reader_plan_sha256: "03d0af4deeae889eea6f1171542dbad2d70dfd511734e7353018d73329435046"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "8d6464d7044c4d488e17ae934441a05b073ff1fb9e9f3b57748d7ca28d0dd5e0"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "6baa8e11e298d1031d254c38e8fb106ee8ae05c82909f1733aa3857de75bdc0d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "68d79393c727fe9a95b5cf9bfd7a013e40318b051758acf650eef9eb30ae6845"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "47b39eebb3f1e11a8b22e3955be5b05e9c3cc913ed028531db83e060ceb178a4"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 CLRM：把同一句话在编码器不同深度的表示拿来直接比较

> 英文题目：*[CLRM: Cross-Layer Relation Modeling for Audio Deepfake Detection](https://arxiv.org/abs/2611.05678v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-paper-digest-blog/papers/?concept=task.audio-forgery) → [音频深度伪造检测](/audio-paper-digest-blog/papers/?concept=task.audio-deepfake)
- **研究方法**：[模型融合](/audio-paper-digest-blog/papers/?concept=method.model-combination)；[自监督学习](/audio-paper-digest-blog/papers/?concept=method.self-supervised)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Yangyang Qu：EURECOM；Sophia Antipolis, France
- Siqing Qin：The Hong Kong Polytechnic University；Hong Kong SAR, China
- Kong Aik Lee：The Hong Kong Polytechnic University；Hong Kong SAR, China
- Massimiliano Todisco：EURECOM；Sophia Antipolis, France

## 📌 核心摘要

音频深度伪造检测的输入是待判定的语音波形，输出是真或伪造的分数，难点在于合成方法和录音条件变化时仍要保持稳定。自监督语音编码器 XLS-R 在不同深度给出同一句话的不同表示，浅层与深层保留的说话人组织和伪造痕迹并不相同，常见做法只做加权聚合，把如何比较留给分类器隐式学习。本文提出的跨层关系建模复用已有检测器的冻结编码器，对选定两层先做话语级汇总，再显式构造差异、交互与相似度，形成关系表示。三个小型前馈头从该表示学习辅助分数，经源数据拟合的逻辑回归与原检测器分数融合后输出最终判决。在 5 个外部数据集平均的等错误率上，XLSR-AASIST 从 7.170% 降到 5.972%，相对下降 16.7%，三个被增强检测器都得到下降。该结论适用于基于 XLS-R-300M 的三类检测器与文中 5 个外部评测集，几何候选需要说话人标签，推理时不需要，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音频伪造检测要判断什么

音频伪造检测的输入是一段语音，目标是判断它是真实录制还是合成、转换或拼接篡改的语音。刚入门时容易把它想成识别内容或说话人，但这里的关键是保留与生成痕迹有关的细微差别，同时不受说话内容、说话人和信道变化的干扰。输出通常是一个分数，分数越高或越低代表越可能是伪造，论文用等错误率评价，等错误率越低表示检测越好。

跨方法、跨录音条件的泛化是难点。训练时见过的合成器和录音环境有限，测试时会出现新的合成器、新的压缩和传输条件。如果检测器只记住训练集中某种伪影，换了数据集就可能失效。因此论文把源域开发和外部评估分开：在 ASVspoof 2019 逻辑访问上做训练和配置选择，再到 5 个外部数据集上看平均表现。理解后文所有数字，都要先问清它是在源域划分上还是在外部数据集上，以及平均时按攻击平均还是按数据集平均。

### 已有路线为什么只做到聚合，还没有把比较算出来

基于自监督语音编码器的做法是先用 XLS-R 这类预训练编码器得到多层表示，再做检测。已有研究发现不同深度的层对真伪的区分能力不一样，于是出现了选层、加权聚合、多层预测融合等做法。例如 XLSR-SLS 学习与层有关的权重来聚合 XLS-R 特征，也有工作合并 WavLM 中间层，或把各单层预测结合起来。这些做法证明多层信息有用，但它们把各层特征直接拼起来或加权相加，层与层之间如何不同、如何相互作用，仍要靠分类器自己去学。

另一类相关工作提示了显式比较的价值。层次注意力与对比学习被用来建模帧和层之间的依赖，句子表示学习中也用逐元素差和乘积来组合句子对。论文的思路是把这种显式比较搬到同一语音的不同编码器深度之间：同一句话在浅层和深层各有一个视角，它们的差异和交互本身可能就是伪造线索。与其让分类器从拼接中隐式学会比较，不如把比较结果直接算出来作为输入。

### 论文要解决的具体分工是什么

论文要回答的是：能否在不改动、不重训已有检测器的前提下，给它增加一种来自跨层比较的证据，并证明这种证据在跨数据集上确实有补充价值。为此它把任务拆成三部分。第一是构造输入，既保留所选两层的各自信息，又把它们的差异、交互和相似度显式编码出来。第二是选层，决定比较哪两个深度，要求方法紧凑、可复用，且在推理时不需要说话人标签。第三是融合，把新增的关系分数与原检测器分数结合起来，要求只训练新增的小头和融合参数。

输入处理过程的代价也要说清。编码器和原检测器全程冻结，新增的是 3 个独立初始化的前馈头和逻辑回归融合系数。关系表示维度是 8193，单头约 2,090,000 参数，三头合计约 6,290,000。论文没有报告延迟和内存实测，所以不能把参数少直接等同于推理快，这一点在复现时要单独测量。

### CLRM 的整体流程是怎样走的

沿着一个语音样本看完整过程。音频先转成单声道 16 kHz、统一为 64600 个采样点，不足则重复、过长则截断。同一波形送入已有检测器自带的冻结 XLS-R-300M 编码器，一路走原检测流程得到基础分数，另一路取出选定两层的隐藏状态做关系建模。关系分支先把每层汇总成固定维度向量并标准化，再拼出关系表示，送入 3 个关系头取平均得到关系分数。最后两路分数各自用源域开发集的均值和标准差标准化，再经源域拟合的逻辑回归融合成最终分数。

下图把常规用法与本文做法放在一起，读图时重点看新增分支从哪里分叉、在哪里汇合，以及哪些模块是冻结的。

> **看图路径：** 1. 先从顶部音频顺箭头看三条路径的输入是否同一语音；2. 比较图(a) 只用末层、图(b) 聚合多层、图(c) 多出哪条关系分支；3. 看图(c) 中哪两个分数在底部汇合为最终分数；4. 注意带雪花标记的模块表示冻结不训练

[![原论文 Figure 1：CLRM for ADD. (a) Last-layer detection and (b) multilayer aggregation illustrate conventional…](https://arxiv.org/html/2611.05678v1/model.png)](https://arxiv.org/html/2611.05678v1/model.png)

*论文图 1。原论文 Figure 1:：“CLRM for ADD. (a) Last-layer detection and (b) multilayer aggregation illustrate conventional uses of SSL representations.”。*

图 1 中(a) 只用末层表示接检测头，(b) 把多层表示先聚合再检测，(c) 是本文做法：同一音频同时走左侧冻结的 XLSR 基础检测器和右侧冻结 XLS-R 的选定层表示，选定层经跨层关系建模和关系头得到关系分数，再与基础分数经逻辑回归融合成最终分数。雪花标记表示冻结，说明编码器和原检测器不更新。这种设计让已有基于 XLS-R 的检测器不用改结构就能接入新的证据。

### 每层先汇总成什么向量，层对又如何变成关系表示

对第 l 层，编码器输出是帧数乘隐藏维度的矩阵，隐藏维度为 1024。CLRM 先算时间维度的均值向量和总体标准差向量，再把二者拼起来得到该层的话语级汇总。首次出现的层汇总就是这个含义：它把变长帧序列压缩成固定维度，保留该层对整句话的平均位置和波动程度。每个坐标再用 ASVspoof 2019 官方训练集估计的该层均值和标准差做标准化，开发集和评测集沿用同一套统计量。公式上就是先形成均值与标准差再拼接。

\[\mathbf{z}_{l}(x)=[\boldsymbol{\mu}_{l}(x);\boldsymbol{\sigma}_{l}(x)]\in\mathbb{R}^{2d}.\]

上式中 z 为该层汇总，mu 为时间均值，sigma 为时间标准差，d 为隐藏维度，拼接后维度为 2d。选定层 p 和 q 后，关系表示把标准化后的两个汇总与其绝对差、逐元素乘积和余弦相似度拼在一起。绝对差表示逐坐标差异大小，逐元素乘积编码相乘交互，余弦相似度概括两个汇总的夹角关系。连同保留的两个汇总，总维度为 8d 加 1，即 8193 维。因为比较发生在话语级汇总上，不需要两层做帧级对齐。

\[\displaystyle\mathbf{r}_{p,q}(x)=[\]

上式完整右端是 5 个部分的拼接：标准化后的第 p 层汇总、标准化后的第 q 层汇总、两汇总之差的逐坐标绝对值、两汇总的逐元素乘积、两汇总之间的余弦相似度标量，原文为可读性在右端省略了自变量 x。按隐藏维度 d 为 1024 计算，前四项各占 2048 维、最后一项占 1 维，合计为 8d 加 1 即 8193 维。理解时不要把几何候选用的另一种嵌入混进来：候选构造用的是时间均值池化加归一化的几何嵌入，而这里的关系输入用的是均值加标准差并标准化的汇总。

**XLS-R 编码器 × 层表示：** XLS-R 编码器指论文复用的多层语音编码器，它把同一语音逐块变换；层表示指其中某一 Transformer 块输出的帧序列。CLRM 不只用最后一层，而是取出两个选定深度的层表示，先各自汇总成话语级向量，再对这对向量做比较，二者搭配才能同时保留单层信息和层间差异。

下图展示说话人相对统计随深度的非单调变化，这正是只按深度选层不够、需要几何参考的原因。

> **看图路径：** 1. 先看横轴层编号与两条纵轴各自的指标方向；2. 观察同说话人排名在浅层、中层和深层的起伏；3. 对比最大他者间隔曲线的走向是否相反

[![原论文 Figure 2：Speaker-relative statistics across XLS-R layers.](https://arxiv.org/html/2611.05678v1/geometry.svg)](https://arxiv.org/html/2611.05678v1/geometry.svg)

*论文图 2。原论文 Figure 2:：“Speaker-relative statistics across XLS-R layers.”。*

图 2 横轴为 XLS-R 层编号，左侧纵轴为同说话人排名，越低越好，右侧纵轴为最大他者间隔，越高越好。可见浅层排名较低、间隔较高，到中层排名上升、间隔下降，深层又有变化。这种起伏说明各层的说话人组织方式不同，论文因此用 4 个说话人相对统计的标准化向量来度量层间几何距离，再结合深度间隔排序。

**关系表示 × 直接拼接：** 关系表示指把两个层汇总向量与其绝对差、逐元素乘积和余弦相似度拼在一起的输入；直接拼接指只把两个汇总向量并排拼在一起。直接拼接把比较工作留给分类器去学，关系表示则把差异、相乘交互和夹角相似直接算好交给分类器，搭配后分类器同时看到原材料和比较结果。

### 关系分数与最终分数如何计算

关系头是紧凑的前馈结构：线性投影、GELU 激活、丢弃率为 0.20 的 dropout，再接线性输出层。每个配置独立训练 3 个不同初始化的头，原始输出先平均再做方向、标准化和融合。方向指分数符号的选择，对 XLSR-SLS 在 Meta-dev 上按加权组合挑选符号。3 个头的平均在评估时直接作为关系分数流，论文报告的集成等错误率都是从平均后的分数流算的。

\[s^{\mathrm{rel}}_{p,q}(x)=\frac{1}{M}\sum_{m=1}^{M}g_{\phi_{m}}(\mathbf{r}_{p,q}(x)),\qquad M=3.\]

上式中 g 为单个关系头，M 为 3，r 为关系表示，s 为关系分数。训练用加权二元交叉熵，伪造为类别 1，正类权重按训练集类别数比确定，优化器、学习率和早停见训练节。

融合时把基础分数和关系分数各自用官方源域开发集的均值和总体标准差标准化，再做带截距的逻辑回归线性融合。系数 a、b、c 在官方源域开发集上拟合，正则强度与层对一起在 Meta-dev 上按融合后 Macro 等错误率挑选。最终分数是逻辑回归的线性决策分，不是概率本身。原编码器和原检测器始终冻结，只有关系头和融合参数被优化。

\[s^{\mathrm{final}}(x)=a\tilde{s}^{\mathrm{base}}(x)+b\tilde{s}^{\mathrm{rel}}(x)+c,\]

上式中波浪线分数为标准化后分数，a、b、c 为融合系数。这种分数级接口保留了原检测器的特征处理和判定通路，只在分数层面加入跨层证据。

**关系分数 × 基础分数：** 关系分数指三个前馈关系头从关系表示学到的辅助检测分，取三头平均；基础分数指原冻结检测器对同一语音给出的分数。CLRM 在源域开发集上把两路分数各自标准化，再用逻辑回归学权重融合成最终分数，搭配的意义是用新增的层间证据修正原判定的不足。

### 层对候选如何构造，配置又如何选定并冻结

层对决定了比较哪两个处理阶段。论文先用真实源域语音的说话人标签刻画每层的说话人相对组织。对每层构造几何嵌入，算该语音与留一法得到的同说话人中心及各竞争说话人中心的余弦相似度，再汇总成 4 个层级统计：同说话人平均排名、首位识别准确率、相对最强竞争者的平均间隔、相对平均竞争者的平均间隔。4 个统计拼成向量后按各分量在候选层间标准化，层对的几何距离为标准化向量差的二范数，排序分用深度间隔除以几何距离加极小量得到，越大表示深度间隔大且说话人组织越相似。

搜索域为 L1 到 L21、最小间隔 8 层，共 91 个合法对，保留排序分最高的 6 个候选。每个候选在官方源域训练集上训练关系头，在官方开发集上选检查点、估计标准化统计并拟合融合系数，再在 Meta-dev 上按融合 Macro 等错误率选出层对和逆正则强度 C。主协议选出 L8 到 L21，C 的候选集合包含从 1e-4 到 10 的六档。选定后层索引、关系头、分数方向、归一化统计和融合参数全部冻结，直接用于外部数据集。

源域划分需要讲清。官方训练集用于拟合关系头和层特征标准化，官方开发集用于选检查点、分数归一化和融合拟合，官方评测集按攻击划分成 Meta-dev 和 Meta-test。主协议按攻击划分，共享 7355 条真实语音，几何参考也来自这部分；另有话语不重叠和说话人不重叠的更严划分，几何改用 2580 条训练真实语音重做，候选与配置各自独立重选。推理时不需要说话人标签和几何统计。

**说话人相对几何 × 检测性能选择：** 说话人相对几何指用真实语音看各层中同说话人聚集、异说话人分开的程度，用来先筛出深度间隔大但说话人组织相似的候选层对；检测性能选择指在 Meta-dev 上按融合后的 Macro 等错误率从候选中挑出最终层对和融合正则强度。前者缩小搜索范围，后者用检测误差做决定，两步搭配避免只看深度或只做穷举。

### 在什么数据、什么检测器和什么对照下验证

源域为 ASVspoof 2019 逻辑访问，外部为 ASVspoof 2021 逻辑访问与伪造集、ASVspoof 5 评测集、归一化 Fake-or-Real 测试集和 In-the-Wild。外部评估时源域定好的层对、关系头、方向、归一化和融合参数保持不变。ASVspoof 2021 的结果沿用官方评测器记录的赛后源域开发流程，论文注明其配置选择用了 2019 评测划分，这在原 2021 挑战规则下曾被排除在系统开发之外，阅读时要注意该协议背景。

评估的 3 类基础检测器都是基于 XLS-R 的架构：XLSR-SLS、基于时序通道建模的 XLSR-Conformer-TCM，以及 XLS-R 版的 AASIST。XLSR-SLS 是研究关系表示和选层的主检测器，选出的层索引复用于另两类检测器，但关系头和融合参数分别为每类检测器单独在源域拟合。每组基础与其增强版在相同外部试次、相同评测器下比较。另有 4 类基于自监督的参考系统只提供等错误率汇总，支撑材料覆盖程度不同。

为分离显式比较的作用，论文用相同的 L8 到 L21 汇总和相同的标准化统计比较关系输入与直接拼接。拼接输入维度为 4096，对照设了匹配隐藏宽度的 Concat-256 和近似匹配单头参数量的 Concat-512，每个输入都用 3 个独立头、相同源域流程训练与选择，再分别看辅助单独打分和与 SLS 融合后打分。此外还有单层输入、去掉某一关系项、距离统计和等权融合等对照，单头参数与维度在原文附表中有明细。

### 跨数据集主结果在什么条件下成立

主结果要回答的是：在层对、关系头和融合参数都只由源域定好并冻结的条件下，跨数据集平均能否提升。下表比较每类基础检测器与其 CLRM 增强版在相同试次和相同评测器下的表现，平均为 5 个数据集级等错误率的无加权平均，数值越低越好，配对比较用未舍入值。

| Base detectors and CLRM augmentation |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| XLSR-SLS Zhang et al. (2024) | 2.95 | 1.77 | 18.76 | 7.28 | 5.03 | 7.16 |
| + CLRM | 2.56 | 1.91 | 16.32 | 7.45 | 4.08 | 6.46 |
| XLSR-Conformer-TCM Truong et al. (2024) | 2.30 | 2.06 | 16.16 | 7.27 | 6.47 | 6.85 |
| + CLRM | 2.23 | 2.06 | 14.55 | 7.13 | 5.61 | 6.32 |
| XLSR-AASIST Jung et al. (2022) | 1.27 | 3.46 | 15.27 | 8.08 | 7.77 | 7.17 |
| + CLRM | 1.17 | 2.92 | 14.41 | 6.70 | 4.66 | 5.97 |

上表下半部分显示 3 类检测器的 External-5 平均都下降：XLSR-SLS 从 7.16% 到 6.46%，XLSR-Conformer-TCM 从 6.85% 到 6.32%，XLSR-AASIST 从 7.17% 到 5.97%，相对降幅分别为 9.7%、7.8% 和 16.7%。其中 XLSR-AASIST 在 5 个数据集上全部改善。但也要看到并非每个数据集都改善，例如 SLS 加 CLRM 后在 2021 伪造集从 1.77% 升到 1.91%、在 In-the-Wild 从 7.28% 升到 7.45%，TCM 在 2021 伪造集持平。因此结论应表述为平均改善且最大相对降幅 16.7%，不能说在所有数据集和所有检测器上一致最优。

**Macro 等错误率 × External-5：** Macro 等错误率指在源域划分上先按每种攻击分别算等错误率再取无加权平均，反映对多种未见攻击的平均表现；External-5 指在五个外部数据集上先各算数据集级等错误率再取无加权平均，反映跨数据集泛化。前者用于源域选配置，后者用于外部评估，搭配后可以区分选型依据和泛化结论。

### 显式关系与直接拼接的受控比较说明什么

这一组比较把层汇总、标准化统计固定为相同的 L8 到 L21，只换输入形式和头容量，从而分离输入设计的贡献。下表同时给出源域 Meta-test 融合 Macro 等错误率和外部平均在辅助单独打分、与 SLS 融合后打分下的表现，Concat-256 匹配隐藏宽度，Concat-512 近似匹配单头参数量。

| Auxiliary input | Params/head (10610^{6}) | Source fused | Auxiliary only | Fused with SLS |
| --- | --- | --- | --- | --- |
| None (SLS) | – | 0.149 | – | 7.158 |
| Concat-256 | 1.049 | 0.114 | 16.949 | 7.422 |
| Concat-512 | 2.098 | 0.117 | 16.728 | 7.330 |
| Relation | 2.098 | 0.069 | 11.333 | 6.462 |

表中关系输入的源域融合 Macro 等错误率为 0.069%，低于 Concat-256 的 0.114% 和 Concat-512 的 0.117%；外部平均在辅助单独时从 16.728% 降到 11.333%，与 SLS 融合后从 7.330% 降到 6.462%。这说明在所选层和分类器配置下，把比较直接算出来比只拼接更有判别价值，且对已有检测器的补充更大。限制是这组结论依赖相同的层汇总和近似匹配的参数量，换层、换容量或换基础检测器时需要重做对照，不能直接推广到所有拼接做法都不如关系输入。

### 与其他检测器的融合是否也互补

互补性要看的是：关系分数单独不一定更强，但融合后能否超过两路各自的表现。下表给出另两类检测器的基础、关系单独、等权融合和源域选定的逻辑回归融合的外部平均，层索引沿用 SLS 选出的结果，关系头和融合系数为各检测器单独拟合。

| Detector | Base | Relation | Equal | Logistic |
| --- | --- | --- | --- | --- |
| TCM | 6.849 | 6.852 | 6.295 | 6.316 |
| AASIST | 7.170 | 5.980 | 5.815 | 5.972 |

表中 TCM 基础为 6.849%，关系单独为 6.852%，等权融合为 6.295%，逻辑回归融合为 6.316%；AASIST 基础为 7.170%，关系单独为 5.980%，等权融合为 5.815%，逻辑回归融合为 5.972%。对 SLS 也有类似现象：融合 6.462% 优于基础 7.158% 和关系单独 11.333%。这说明关系证据即使单独不占优，也能在融合后改善综合判定。但等权在该表外部平均上略优于源域选定的逻辑回归，论文主结果仍用源域选定的逻辑回归配置，阅读时不要把外部事后更优的等权当成可部署的提升。本表数值与单位依据论文 PDF。

### 去掉某一项或换一种融合会发生什么

先看表示项的消融要解决什么：完整关系表示中的两个层汇总和 3 个比较项是否都必要。下图左侧为源域 Meta-test 上的宽泛表示对照，右侧为分数组合对照，指标越低越好。读图时注意宽泛对照与受控容量对照是独立拟合的配置，维度与头容量各不相同，不能把两处数字混为同一实验。

> **看图路径：** 1. 先看图(a) 中完整关系行在三列指标上的条形长度；2. 对比单层、直接拼接与距离统计行的差异；3. 再看图(b) 中四种分数组合方式的相对位置

[![原论文 Figure 3：Source-side representation and score-combination ablations (Meta-test EER, %).](https://arxiv.org/html/2611.05678v1/ablation_clrm.svg)](https://arxiv.org/html/2611.05678v1/ablation_clrm.svg)

*论文图 3。原论文 Figure 3:：“Source-side representation and score-combination ablations (Meta-test EER, %).”。*

图 3(a) 本像素只包含 5 行：L8 only、L21 only、L8 加 L21 直接拼接、距离统计和完整 L8 到 L21 关系，不包含去掉绝对差、乘积或余弦的变体行。其中完整关系在 Macro、Worst 和 Pooled 三列上都是最低，Macro 为 0.0690%，低于单层和拼接对照。去掉某一关系项的变体是另一组独立对照，其融合 Macro 在 0.082% 到 0.114% 之间，同样高于完整表示。图 3(b) 显示逻辑回归融合的 Macro 为 0.0690%，低于关系单独的 0.0968% 和等权融合的 0.0747%。这支持保留两个汇总与全部三项比较，并支持用源域拟合的逻辑回归而非简单等权。但 Worst 列中关系单独反而略低于融合，说明不同聚合方式各有短板，平均最优不等于每列最优。

跨数据集的逐集对照进一步限定了适用范围。关系输入在融合前后多数数据集上最低，例如 ASVspoof 5 融合后从 Concat-512 的 19.374% 降到 16.317%，辅助单独也有对应改善；但在 2021 逻辑访问上关系输入的辅助单独和融合后并不占优。这与主结果的个别数据集回退是一致的：显式关系在多数外部条件下更强，但不是在每个子集上都胜出。

### 为什么最终比较的是第 8 层和第 21 层

层对选择要回答的是：几何排序给出的紧凑候选能否用很少的检测试验找到好配置。下表为几何引导的 6 个候选，间隔表示编码器深度差，几何距离与排序分按说话人相对统计算出，Macro 等错误率在源域 Meta-dev 上测得并决定最终选择。

| Pair | Gap | Macro EER (%) |
| --- | --- | --- |
| L9–L21 | 12 | 0.1062 |
| L8–L21 | 13 | 0.0888 |
| L7–L18 | 11 | 0.0892 |
| L10–L21 | 11 | 0.0965 |

表中 L8 到 L21 在 Meta-dev 上 Macro 为 0.0888%，是 6 个候选中最低，因此被选中。它的深度间隔为 13，几何距离与排序分处于候选中段，说明最终选择不是只取间隔最大或几何最相似，而是经检测误差验证的折中。与其他搜索策略相比，几何引导短表在 Meta-test 上为 0.069%，深度间隔排序为 0.078%，纯几何排序为 0.103%，随机六元短表平均 0.076%，穷举 91 对为 0.071%。这支持用几何先筛再用检测选的流程，但也要说明穷举也能接近该结果，几何短表的价值主要在减少候选数而非保证全局最优。

更严划分与重复初始化的检查限定了源域结论的稳健性。话语不重叠下 Macro 从 0.170% 降到 0.101%，说话人不重叠下从 0.107% 降到 0.045%，每次都独立重做几何与配置选择。固定 L8 到 L21 重复 3 次平均 0.070%，样本标准差 0.007 个百分点；重复选层时 2 次选 L8 到 L21、1 次选 L9 到 L17，后者在 Meta-test 上为 0.092%。因此源域改善在所评估的划分和初始化下较稳定，但外部数据集的点估计没有给出类似的重复统计。

### 哪些结论暂时不能下，哪些代价还没有测

适用范围先要划清。研究只用了 XLS-R-300M 表示、ASVspoof 2019 逻辑访问做源域开发、5 个外部评测集做评估。几何候选需要说话人标签，但推理时不需要。主 Meta-dev 与 Meta-test 划分共享真实语音，另有用话语不重叠和说话人不重叠划分做的源域对照，但外部结论仍是点估计，初始化与部件消融只在源域评估。攻击级别的余弦差异分析只用于事后解释，没有进入选层或融合。

没有测量的不能承诺。关系系统在原检测器上增加了 3 个预测头，论文给了参数量和训练配置，但明确说延迟和内存需求仍待测量。因此不能说它一定更轻或更快，训练资源、推理开销、输出帧率和实际延迟要分开讨论。外部个别数据集存在持平或回退，总体平均改善推不到每一组结果。来源方面，本次没有发现可验证的作者代码、模型或数据资源，不能说已公开或可运行，复现应按论文的源域流程从数据和编码器做起。

### 如果要复现，第一步先固定什么

第一步是把源域流水线固定下来。用官方训练集估计每层的标准化统计并训练 3 个关系头，用官方开发集选检查点、估计分数归一化统计并拟合逻辑回归，再把官方评测集按攻击分成 Meta-dev 和 Meta-test，主协议共享真实语音部分，几何参考也取自该部分。音频统一为单声道 16 kHz、64600 采样点，时间标准差与标准化分母按原文下限处理，编码器隐藏维度 1024、关系头隐藏宽度 256、丢弃率 0.20、AdamW 学习率 2e-4、权重衰减 1e-4、批量 2048、至多 15 轮、按官方开发集等错误率早停。

第二步再做候选与选择。对 L1 到 L21、最小间隔 8 层的 91 对算几何排序分，取前六候选逐一训练与融合，在 Meta-dev 上按融合 Macro 等错误率选层对和 C，记录方向、归一化和融合参数后冻结。XLSR-SLS 选出的索引可复用于另两类检测器，但它们的头与融合要各自重拟合。XLSR-SLS 的 L8 到 L21 记录包含 5 套外部对齐分数，重跑保存的归一化与融合参数可复现存档分数，最大绝对差为 6.4e-7 量级；另两类检测器只有按数据集的评测值，可据未舍入值重算 External-5。复现时要保留基线与拼接对照，不要删掉不利子集。

### 什么时候值得尝试，还缺哪项验证

当已有基于 XLS-R 的检测器已冻结、不想改结构重训，但有多层表示可用，且目标是提升跨数据集平均时，值得尝试这种外挂式关系分支。它的改动面小，只新增紧凑头和融合参数，且在 3 类架构和 5 个外部集的平均上都有下降，最大相对降幅 16.7%。但若应用只关心某个特定数据集，例如 2021 伪造集或 In-the-Wild 的某次划分，就要先看该子集的实际数字，因为平均改善不保证每个子集都改善。

还缺的验证包括外部重复统计、延迟与内存实测、更多编码器与更多攻击类型下的对照，以及与穷举选层、不同头容量和不同融合规则的完整成本比较。教学上可以这样复述：同一句话取深浅两层的汇总，把差异、乘积和夹角直接算出来，与原分数融合；选哪两层先看说话人组织相似且深度间隔大，再用源域检测误差拍板。容易产生的误解是把相关当因果，或把源域选出的最优当成部署保证，实际上它只是源域证据支持的配置，外部效果仍要按冻结配置如实评估。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.05678v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-09 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-09/)
