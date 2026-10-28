---
title: "S2SND-v2: Unified Online and Offline Speaker Diarization with Speaker-Adapted w2v-BERT 2.0"
date: 2026-10-27
draft: false
tags: [说话人分离标注, 自监督学习, 在线推理, 离线推理]
categories: [论文速递]
description: "S2SND-v2 用说话人适配的 w2v-BERT 2.0 做前端并改进查询构造与训练，在八个测试集上剪枝系统在线平均错误率 14.52%、离线 12.03%，代价是前端仍需大规模预训练与多阶段日志训练。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.34707"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "S2SND-v2：统一在线与离线的说话人日志系统"
paper_digest_original_title: "S2SND-v2: Unified Online and Offline Speaker Diarization with Speaker-Adapted w2v-BERT 2.0"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.34707v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.34707v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.34707v1.pdf"
paper_digest_primary_task: "说话人分离标注"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.diarization","label":"说话人分离标注"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"setting","id":"setting.online-inference","label":"在线推理"},{"facet":"setting","id":"setting.offline-inference","label":"离线推理"}]
paper_digest_primary_method: "自监督学习"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "S2SND-v2 用说话人适配的 w2v-BERT 2.0 做前端并改进查询构造与训练，在八个测试集上剪枝系统在线平均错误率 14.52%、离线 12.03%，代价是前端仍需大规模预训练与多阶段日志训练。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jincheng Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Li Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Weixin Zhu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yannan Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tao Yu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Juan Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ming Li"}]
paper_digest_abstract_sha256: "11fc280824e32d3f8ab42fe36ff8b8b3d51aeae22d5e39cc4ff92329e82944df"
paper_digest_sidecars: {"citation.bib":{"sha256":"b12a7462cf071ca217e4e3d10cbbf04efdf91f2d2ca1140a9b4d24854577e472","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34707/citation.bib"},"citation.json":{"sha256":"b404328b51765c38bdf1bd3ac1e0bf479263a2a4ec6d1a069731504e9151947b","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34707/citation.json"},"citation.ris":{"sha256":"e32065a46143d456d2824b4f871c72f6bdcd3bb2394e24c47223e207fb7f3a24","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34707/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"0cedddd56e04390f61f936588d89c73968997eef1be1ff065691b8f681e17af7","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34707/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "7cf12f7e158e9d2257b9c3ab0d767803d725d8d297d6dda03d11ef359805ed71"
paper_digest_api_reader_plan_sha256: "cc2e5e5d90431b98bd81b41b4f79dc830ffe98ad3f07e40188301652327bfc2d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "f8afb3f19cd0eed199f6371c3e488271ba1514fbc052e6c76a7a76af07dcec70"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "aff8f03c5766dfb5538b6b56006ff029f36df5c4115d7366c5456e23014c7c4d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "8b00335a0dad5f0bb346e3a693f4575f9f1d9699d3e64dcb6dcb0d14abbf648e"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "75979d09616639ff6a8e4b1226c3bca5c0d31fc548cff2efe77f046794c0afca"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 S2SND-v2：统一在线与离线的说话人日志系统

> 英文题目：*[S2SND-v2: Unified Online and Offline Speaker Diarization with Speaker-Adapted w2v-BERT 2.0](https://arxiv.org/abs/2610.34707v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[说话人分离标注](/audio-paper-digest-blog/papers/?concept=task.diarization)
- **研究方法**：[自监督学习](/audio-paper-digest-blog/papers/?concept=method.self-supervised)
- **研究条件**：[在线推理](/audio-paper-digest-blog/papers/?concept=setting.online-inference)；[离线推理](/audio-paper-digest-blog/papers/?concept=setting.offline-inference)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Jincheng Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Li Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Weixin Zhu：机构信息未能在本次解析中与作者逐人可靠绑定
- Yannan Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Tao Yu：机构信息未能在本次解析中与作者逐人可靠绑定
- Juan Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Ming Li：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是一段多人说话录音，困难在于判断每一帧谁在说话，还要处理说话人重叠、说话人数量未知和在线延迟限制，处理过程是把波形变成帧级特征，再估计每位说话人的活动时间线。S2SND-v2沿用序列到序列神经分离标注（Sequence-to-Sequence Neural Diarization，S2SND）的双解码器结构，前端把原残差网络换成说话人适配的w2v-BERT 2.0，保留层适配器和多尺度特征聚合输出帧级序列，该序列一路经编码器加入时间上下文后供检测使用，另一路作为记忆特征供嵌入提取使用，比较了完整模型和两种剪枝构造路线。检测解码器以说话人嵌入作查询从编码器输出中预测活动，表示解码器以活动查询从前端特征中提取说话人嵌入，在线推理时提取的嵌入被累积并作为后继窗口的查询，离线时再用累积嵌入对整段录音重解码。表示解码器一侧加入重叠感知活动查询掩蔽，把两人以上同时说话帧的查询置零，减少并发说话人的干扰；训练一侧加入晚说话人训练，提高对后半段才首次出现的未知说话人的覆盖。与重新训练的 S2SND 基线相比，完整剪枝系统在八个测试集平均的在线与离线说话人分离标注错误率（Diarization Error Rate，DER）分别为 14.52% 和 12.03%，离线平均值低于所列对比系统中的 DiariZen-Large-s80-v2。结论适用于论文所用的八个测试集和无 oracle 语音活动检测、0 秒容忍边界的计分条件，原文披露了 8 秒滑窗、0.80 秒名义输出延迟和完整模型与剪枝模型的单窗计算量差异。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 说话人日志要回答什么

说话人日志的输入是一段连续录音，可能是会议、访谈或网络视频，里面有多人轮流说话，还常常出现 2 人同时开口的重叠。系统要输出每位说话人在时间轴上的活动，即谁在何时说话。评价常用日志错误率 DER，它把漏检、误检和说话人混淆折算成时间占比，数值越低越好。本文所有主结果都不用 oracle 语音活动检测，且容错圈 collar 为 0s，意味着边界也要严格算对，条件相当严格。

在线与离线是两种运行方式。在线要求音频流进来就一段段输出，延迟要小，且不能看到未来；离线是整段录音都拿到后再统一解码，可以利用全局信息。初学者容易把两者看成 2 个模型，但本文希望同一套模型同时支持两种推理，在线累积的说话人嵌入还能直接用于离线重解码。

### 已有路线为什么还要统一框架

早期系统多是级联管线，先做语音活动检测，再切分、提取说话人嵌入，最后聚类。这种做法每步误差会向后传。端到端神经日志直接预测帧级多说话人活动，混合方法则把局部神经预测与嵌入聚类结合，以处理长录音。还有工作把序列到序列预测用于目标说话人语音活动检测。

在线方向额外需要跨块保持身份一致，例如说话人追踪缓存、全局与局部吸引子等。原文指出，许多方法仍主要为在线或离线之一设计。S2SND 是此前提出的统一框架，它用检测解码器和表示解码器耦合：说话人嵌入作为查询去预测活动，活动查询又去引导嵌入提取，两者互相加强。在线滑窗处理时预测的活动引导嵌入提取，嵌入累积后供后续块和离线重解码使用。S2SND-v2 保留这一统一推理，只是换更强的前端并改进后端使用方式。

### S2SND 留下的两个具体问题

原文把 S2SND 的瓶颈归为两处。第一是声学表示的质量，原 S2SND 用 ResNet 前端，而自监督学习已在语音和说话人任务上给出更强、迁移性更好的表示，WavLM 等已被用于日志，w2v-BERT 2.0 结合层适配器、多尺度聚合、低秩适配和蒸馏剪枝后在说话人验证上表现好，但需要保留帧级时间分辨率才能用于日志。

第二是后端对表示的利用。S2SND 虽用非重叠语音时长选择和加权已接受嵌入，但送入表示解码器的活动查询仍可能包含重叠帧，提取目标说话人嵌入时会受到同时说话者的干扰。另外训练时随机遮住 1 位说话人来练未知说话人检测，与在线滑窗中新说话人更可能在当前块后半段才出现的情况不一致。S2SND-v2 就是针对这两点：换前端，以及做更干净的嵌入提取和更贴合的未知说话人训练。

### S2SND-v2 的整体数据流

从一个 8s 输入块看，波形先进入说话人适配的 w2v-BERT 2.0 前端，得到帧级特征序列。这个序列走两条路，一路经编码器加时间上下文后给检测解码器，另一路作为记忆特征给表示解码器。检测解码器拿说话人嵌入做查询，输出目标说话人语音活动；表示解码器拿语音活动做查询，输出目标语音的说话人嵌入。

训练时说话人查询来自嵌入表查询与填充，参考活动引导嵌入提取；在线推理时滑窗逐块处理，预测活动引导嵌入提取，提取的嵌入累积进说话人嵌入矩阵，供后续块做查询。离线推理不用换模型，直接用累积好的嵌入对整段录音重解码。下面先看这张框架图的连接方式，再分别解释前端与两处后端改进。

以下导读帮助你带着问题看图 1：注意输入音频如何变成多层特征，两路特征各去哪里，活动与嵌入如何互为查询，损失和嵌入矩阵回路在哪里。

> **看图路径：** 1. 从左侧输入音频沿箭头看到特征抽取器与 w2v-BERT 2.0 各层；2. 看层适配器汇入 Concat 后分两路进入编码器与表示解码器；3. 看检测解码器与表示解码器之间活动与嵌入如何互为查询；4. 看右侧嵌入矩阵与 ArcFace 损失、表格查询虚线的回路

[![原论文 Figure 1：S2SND-v2 model framework.](https://arxiv.org/html/2610.34707v1/fig1_drawio_cropped.png)](https://arxiv.org/html/2610.34707v1/fig1_drawio_cropped.png)

*论文图 1。原论文 Figure 1:：“S2SND-v2 model framework.”。*

图 1 显示左侧输入音频进入特征抽取器，上方虚线框内是特征投影与 Conformer 第 1 层到第 24 层，每层输出接一个层适配器再拼接。拼接结果一路经编码器到检测解码器，另一路到表示解码器。检测解码器下方是作为辅助查询的说话人嵌入，上方输出活动并有 BCE 损失；表示解码器下方是作为辅助查询的语音活动，中间有重叠掩蔽模块，右侧输出嵌入并有 ArcFace 损失，最终汇入嵌入矩阵再经表格查询与填充回到查询端。

### 说话人适配的 w2v-BERT 前端做了什么

前端替换是第一处改动。原文沿用 Li 等人说话人验证模型的设计，保留层适配器和多尺度特征聚合，但去掉话语级池化和验证嵌入头。多尺度聚合把各编码器深度的表示合成为帧级序列，保留日志所需的时间分辨率。得到的序列送给原来的 S2SND 后端，一路做带上下文的检测特征，一路做表示解码器的记忆特征。

全量与剪枝是两种体量。全量前端用 LoRA 适配预训练编码器，同时后端可训练；紧凑前端经蒸馏引导的结构化剪枝得到，接口相同但联合训练时整体微调且不用 LoRA。两者都向同一后端提供帧级声学表示，区别在于参数量和计算量。

**w2v-BERT 2.0 × 层适配器：** w2v-BERT 2.0 指自监督预训练的 Conformer 编码器，提供帧级声学表示；层适配器指接在每层输出后的小模块，用于把通用表示转向说话人区分。两者搭配时，主干保留多层信息，适配器逐层调整，合并后得到更适合日志的帧序列。

**多尺度特征聚合 × 帧级特征序列：** 多尺度特征聚合指把特征投影输出与 24 个 Conformer 层输出拼接或融合的做法；帧级特征序列指保留时间分辨率、每帧一个向量的表示。聚合把浅层声学细节与深层说话人信息放在同一时间轴上，后续检测与表示解码器才能按帧查询。

### 重叠感知查询掩蔽如何提纯嵌入

第二处改动在后端提取阶段。S2SND 原来按非重叠语音时长选择和加权已接受嵌入，但表示解码器看到的活动查询本身仍可能含重叠帧，解码器注意力会看到多人同时说话的区域。S2SND-v2 在把查询送入表示解码器之前，把有两个及以上说话人同时活动的帧的查询值置零。训练时用参考活动做掩蔽，推理时用预测活动做掩蔽。

同时训练时若目标说话人在当前块内累计非重叠语音不足 1.28s，提取的嵌入在 ArcFace 监督下归为预留的 0 类，因为证据太少可能不可靠；推理时同一时长阈值决定嵌入是否收入说话人嵌入矩阵。这样后续窗口复用的是来自更干净证据的嵌入。

**检测解码器 × 表示解码器：** 检测解码器以说话人嵌入为查询，从编码器输出预测每位说话人每帧是否说话；表示解码器以语音活动为查询，从前端特征提取说话人嵌入。两者互相提供条件，一个输出活动，一个输出嵌入，在线时累积嵌入供后续窗口复用。

**活动查询 × 重叠感知掩蔽：** 活动查询指送入表示解码器、标明目标说话人在哪些帧说话的向量；重叠感知掩蔽指在有两人及以上同时说话的帧把查询值置零。掩蔽去掉多人混叠帧的干扰，让提取的嵌入只来自较干净的单人段。

### 迟出现训练为什么更像在线

第三处改动针对伪说话人查询的训练。原 S2SND 训练随机遮住 1 位说话人的嵌入，把其活动目标交给伪说话人查询，以此学会检测未知说话人。但在线滑窗中，新说话人更可能在当前块后半段才首次出现，前半段多是已知说话人，随机遮蔽学到的是检测任意被遮者，而非迟到的新来者。

S2SND-v2 把迟 onset 混合生成与 onset 感知的被遮说话人选择结合。至少 2 位说话人的仿真混合以 0.7 概率做迟 onset 生成，把 1 位说话人的起点均匀放在混合总时长 50% 到 80% 之间。对真实与仿真训练窗，以 0.7 概率在后半段才首次出现的说话人中均匀选 1 位遮蔽，否则或不存在此类说话人时从所有活动说话人均匀采样。迟 onset 混合总是允许遮蔽，其他窗口保留原遮蔽计划，生成与选择用独立随机。推理过程不变。

具体执行分两步配合。第一步在仿真数据生成时造出迟到情形，只对至少有 2 位说话人的混合生效，被选中的 1 位说话人起点被推迟到混合后半段，从而让训练窗的前半段仍由已知说话人占据。第二步在训练窗内挑选被遮者，优先看后半段才首次说话的人，有就从中均匀挑 1 位，没有或遇到另外 0.3 概率时再回到全部活动说话人里均匀挑选。被挑中者的嵌入被遮住，其对应的活动标注转给伪说话人查询，模型据此练习在后半段发现新来者。

迟 onset 混合必做遮蔽，保证这类样本一定被用来练未知检测，其余窗口仍沿用原来的遮蔽安排，两处的随机抽取互不干扰，推理时的滑窗与重解码做法都不改变。

**伪说话人查询 × 迟出现说话人训练：** 伪说话人查询指为检测未知新说话人预留的一个查询槽，训练时把某位说话人的嵌入遮住、其活动作为该槽目标；迟出现说话人训练指多生成迟 onset 的混合语音并优先遮住后半段才出现的说话人。两者结合让训练中被遮住者更像在线滑窗里后半段才进来的新人。

### 三条前端路线与蒸馏剪枝如何训练

训练分仿真预训练加 2 阶段混合数据训练，仿真与真实比例为 4:1，窗口为 8s，用 AdamW 优化帧级二元交叉熵与基于 ArcFace 的说话人分类损失。前 2 阶段学习率为 10-4，最后 1 阶段为 10-5。全量 w2v-BERT 路线先冻结抽取器训练后端，再启用 LoRA 与层适配器而预训练编码器权重固定，LoRA 秩 64、缩放因子 128、无 dropout，作用于自注意力查询、键、值、输出投影与每 Conformer 块两层前馈全连接层。剪枝前适配路线在仿真阶段冻结剪枝编码器，混合阶段整体更新且不用 LoRA。

剪枝后适配、先适配后剪枝、先剪枝后适配是 3 条路线。先适配后剪枝时，已适配日志的全量编码器做冻结教师，只在训练时出现。学生用特征蒸馏损失匹配教师隐表示，同时加前馈维度、卷积通道和注意力头的稀疏约束。目标稀疏度 85%，10,000 步达到，与为说话人验证剪枝的模型稀疏度一致。匹配 25 个教师隐输出 20 轮，剪掉选中结构后再无稀疏正则蒸馏 20 轮，然后进入 2 阶段混合日志训练。w2v-BERT 编码器从 580M 降到 91M，不含层适配器与 S2SND 模块。

该蒸馏损失约束每层每帧的学生与教师隐状态之差，其原始形式如下，符号含义见公式前后说明。

\[\mathcal{L}_{\mathrm{feat}}=\frac{1}{KT}\sum_{\ell=0}^{K-1}\sum_{t=1}^{T}\left[\frac{\|\Delta_{\ell,t}\|_{1}}{d}-\cos(\mathbf{h}^{T}_{\ell,t},\mathbf{h}^{S}_{\ell,t})\right],\]

上式对 K=25 个位置求平均，K 包括特征投影输出与 24 个经层适配器调整的 Conformer 层输出，T 为序列长，d 为隐状态维度，h 上标 T 与 S 分别表示教师与学生，Delta 为两者之差。方括号内第一项是 L1 差除以 d，第二项减去余弦相似度，学生越接近教师则损失越小。优化与计划细节见实验设置部分，剪枝学生与稀疏变量学习率分别为 2×10-4 与 2×10-2。

### 数据、解码与评价条件是什么

仿真混合来自 3D-Speaker、KeSpeech、VoxCeleb2 和 VoxBlink2 4 个来源语料。真实适配与评测用 8 个日志基准：AMI-SDM、AISHELL-4、AliMeeting、NOTSOFAR-1、MSDWild、DIHARD III、MagicData-RAMC 和 VoxConverse，用其训练划分做适配，按 Han 等人的测试划分评测，多通道只用第一通道。平均值 Avg 指八集非加权均值。

在线推理所有 S2SND 变体用 8s 滑窗，步长 0.64s，前视 0.16s，名义输出延迟 0.80s。离线用累积说话人嵌入重解码，模型与解码超参数相同。基线包括同数据重训的 ResNet 版 S2SND，以及同样后端改进与训练解码设置的 ReDimNetV2-B6 版 S2SND-v2。外部结果来自引用论文或官方仓库，评价流程可能不同。

以下导读帮助你看图 2：先分清两种颜色箭头的数据来源，再看 3 条路线从哪个起点出发、经过哪次训练与剪枝。

> **看图路径：** 1. 区分蓝色说话人验证训练箭头与红色日志训练箭头的走向；2. 比较直接全量适配与先剪枝再适配的起点差异；3. 看先适配再剪枝如何经过全量模型再剪枝再训练

[![原论文 Figure 2：Three w2v-BERT front end construction routes.](https://arxiv.org/html/2610.34707v1/fig2_cropped.svg)](https://arxiv.org/html/2610.34707v1/fig2_cropped.svg)

*论文图 2。原论文 Figure 2:：“Three w2v-BERT front end construction routes. Blue arrows denote training with speaker-verification data; red arrows denote training with diarization data.”。*

图 2 显示左端说话人验证预训练的 w2v-BERT 2.0 可直接训练成全量模型，也可先剪枝成说话人验证剪枝模型再做日志训练，对应先剪枝后日志；另一条是全量模型先做日志训练再剪枝并指回剪枝后模型。3 条路线比较的是构造策略，而非单独分离剪枝效应。

### 前端路线与累积改进的平均效果

要回答的问题是：换前端与两处后端改进各带来多少平均增益，代价是什么。比较条件是同一四仿真源加八真实训练划分，指标为无 oracle 语音活动检测、0s 容错的 DER，越低越好。参数记为 w2v-BERT 编码器加剩余模块，计算量为解码一个 8s 窗一次的全系统 FLOPs。

| Configuration | Param. (M) | FLOPs (G) | Mode | AMI-SDM | AIS-4 | AliM | NSF | MSD | DH3 | RAMC | VoxC | Avg. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Full w2v-BERT | 580+33 | 475.37 | Online | 16.92 | 10.78 | 11.88 | 21.22 | 17.77 | 16.49 | 10.96 | 11.92 | 14.74 |
|  |  |  | Offline | 13.27 | 9.66 | 9.90 | 15.47 | 13.58 | 15.09 | 10.43 | 9.80 | 12.15 |
| Prune-after-diarization | 91+33 | 75.63 | Online | 17.76 | 12.12 | 12.14 | 23.36 | 17.80 | 15.79 | 11.19 | 12.27 | 15.30 |
|  |  |  | Offline | 13.52 | 10.54 | 10.02 | 17.66 | 13.62 | 14.48 | 10.56 | 10.48 | 12.61 |
| Prune-before-diarization | 91+33 | 75.63 | Online | 18.05 | 10.98 | 12.14 | 24.36 | 17.86 | 15.68 | 11.06 | 11.96 | 15.26 |
|  |  |  | Offline | 14.41 | 9.93 | 10.17 | 18.62 | 13.73 | 14.06 | 10.50 | 10.14 | 12.70 |
| + Overlap masking | 91+33 | 75.63 | Online | 17.30 | 11.18 | 11.98 | 20.94 | 18.27 | 16.37 | 11.09 | 10.84 | 14.75 |
|  |  |  | Offline | 13.64 | 9.93 | 10.08 | 15.47 | 13.91 | 15.23 | 10.61 | 8.97 | 12.23 |
| ++ Late-speaker training | 91+33 | 75.63 | Online | 16.95 | 11.21 | 12.20 | 20.23 | 17.91 | 15.70 | 10.92 | 11.04 | 14.52 |
|  |  |  | Offline | 13.34 | 9.97 | 10.08 | 15.06 | 13.77 | 14.45 | 10.51 | 9.07 | 12.03 |

全量平均在线 14.74%、离线 12.15%，两种剪枝路线接近，先剪枝后日志为 15.26% 与 12.70%，先日志后剪枝为 15.30% 与 12.61%，剪枝把编码器从 580M 降到 91M、每窗计算从 475.37G 降到 75.63G，平均 DER 小幅上升。两种剪枝顺序在数据集与模式上无一致胜者，后续用直接复用说话人验证剪枝模型、先剪枝后日志的路线。在此基础上加掩蔽与时长条件监督降到 14.75% 与 12.23%，再加迟说话人训练降到 14.52% 与 12.03%，完整剪枝系统与无后端改进的全量相当略低。但增益不均匀，个别集有轻微退化，原文认为掩蔽后非重叠证据不足时查询信息可能不够，离线增益可能来自复用了在线累积的更好嵌入。

### 与基线和外部系统的对比在何种条件下成立

要回答的问题是：完整 S2SND-v2 相对重训 S2SND 与同设置另一前端有多大提升，与已发表系统能否直接排名。公平条件是同推理策略与 0.80s 输出延迟，外部系统结果来自原文引用或仓库、流程可能不同，只能参考。指标仍为无 oracle 语音活动检测、0s 容错 DER，越低越好。

| System | AMI-SDM | AIS-4 | AliM | NSF | MSD | DH3 | RAMC | VoxC | Avg. |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Online inference |  |  |  |  |  |  |  |  |  |
| S2SND (retrained) [6] | 19.48 | 12.69 | 13.71 | 26.87 | 20.34 | 19.21 | 11.31 | 13.62 | 17.15 |
| S2SND-v2 (ReDimNetV2-B6) | 18.92 | 11.32 | 14.01 | 24.88 | 19.98 | 18.25 | 11.54 | 11.70 | 16.33 |
| S2SND-v2 (w2v-BERT 2.0) | 16.95 | 11.21 | 12.20 | 20.23 | 17.91 | 15.70 | 10.92 | 11.04 | 14.52 |
| Offline inference |  |  |  |  |  |  |  |  |  |
| Pyannote v3.1 [2] | 22.40 | 12.20 | 24.40 | – | 25.30 | 21.70 | 22.20 | 11.30 | – |
| DSE-CBM [19] | 16.70 | 9.80 | 14.90 | – | 19.20 | – | 10.90 | 8.60 | – |
| DiariZen-Large-s80-v2 [21] | 13.90 | 9.80 | 10.80 | 16.70 | 15.60 | 14.50 | 11.00 | 9.10 | 12.67 |
| S2SND (retrained) [6] | 16.09 | 10.68 | 11.35 | 20.77 | 16.58 | 17.58 | 10.58 | 11.99 | 14.45 |
| S2SND-v2 (ReDimNetV2-B6) | 15.74 | 10.02 | 11.91 | 20.08 | 16.04 | 17.10 | 10.89 | 10.07 | 13.98 |
| S2SND-v2 (w2v-BERT 2.0) | 13.34 | 9.97 | 10.08 | 15.06 | 13.77 | 14.45 | 10.51 | 9.07 | 12.03 |

同延迟下完整剪枝 w2v-BERT 版相对重训 S2SND，在线从 17.15% 降到 14.52%、离线从 14.45% 降到 12.03%，八集两模式均有改善。同后端改进与训练解码设置下，w2v-BERT 版在八集两模式全面优于 ReDimNetV2-B6 版，在线 14.52% 对 16.33%、离线 12.03% 对 13.98%。离线平均低于表中 DiariZen-Large-s80-v2 的 12.67%，六集最低，但 VoxConverse 上 DSE-CBM 更好，且外部缺值项不计平均，跨论文流程差异使该排名只在所列数值范围内成立。

### 哪些结论还不能推广

首先后端增益不是每集都赢。加掩蔽后个别集轻微变差，原文推测是非重叠语音有限时掩蔽减少了可用查询信息；加迟说话人训练后每模式各有三集相对前一步未继续改善。这说明重叠比例、说话人轮换速度和块内有效单人时长会影响效果，不能把平均增益直接套到每个场景。

其次剪枝顺序无一致胜者，先剪枝后日志与先日志后剪枝平均接近，本文选前者主要是复用已有验证剪枝模型、省去先训全量日志教师的步骤，而非性能碾压。计算量对比只针对解码一个 8s 窗一次的全系统 FLOPs，不等于训练成本或长录音整体延迟，实际部署还需考虑滑窗步长与累积开销。

最后外部对比受评价流程差异限制，原文已注明外部结果来自引用出版物或官方仓库、流程可能不同，且部分系统有缺值不计平均。离线最低平均只在所列系统与所列八集均值下成立，换参考集、容错圈或语音活动条件结论可能变化。

### 复现第一步要准备什么

复现应从数据与窗口对齐开始。准备 4 个仿真源语料与 8 个基准的训练划分，按原文先仿真训练再 2 个阶段 4:1 混合训练，窗口固定 8s。在线用 8s 窗、0.64s 步长、0.16s 前视，名义延迟 0.80s；离线用在线累积嵌入重解码，保持模型与解码超参数一致。损失同时用帧级二元交叉熵与 ArcFace 说话人分类，学习率前 2 个阶段 10-4、最后阶段 10-5。

前端需从说话人验证模型初始化并按 Li 等人的适配剪枝框架处理。全量用秩 64、无 dropout 的 LoRA 并保留层适配器与多尺度聚合；剪枝版注意冻结与全量微调的阶段不同，先剪枝后日志在仿真阶段冻结、混合阶段全量更新。迟 onset 生成与 onset 感知选择的两个 0.7 概率用独立随机，掩蔽阈值 1.28s 要同时用于训练归 0 类与推理收入矩阵。本文未提供可验证的公开代码与模型资源信息，因此复现只能按论文文字搭建，不能假定有权重可直接下载运行。

### 什么时候值得尝试 S2SND-v2

当需要同一模型同时做低延迟在线与高精度离线，且录音中有明显重叠和迟加入说话人时，本文方案值得尝试。说话人适配的 w2v-BERT 前端提供更强的帧级表示，剪枝后保留大部分增益而大幅降低每窗计算；重叠掩蔽让嵌入提取避开多人帧，迟说话人训练让伪说话人查询更适应滑窗后半段的新来者。

还需要补的验证是：在自己数据的重叠率与说话人数下重测分集表现，检查掩蔽阈值与迟 onset 比例是否需要重调，并实测长录音端到端延迟与内存。若只能承担小模型，可从 91M 剪枝路线起步；若追求极限平均精度，再对比全量 580M 路线。所有判断都应放在无 oracle 语音活动检测、0s 容错、八集非加权平均的条件下理解，换条件需重新评价。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.34707v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
