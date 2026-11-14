---
title: "MusicRWKV: A Multimodal RWKV Framework for Music Representation Learning"
date: 2026-11-13
draft: false
tags: [音乐分析, 自监督学习, 多模态学习, 状态空间模型, 长上下文]
categories: [论文速递]
description: "论文把波形、频谱和元数据 token 送入多条 RWKV 支路，用可逆压缩、FiLM 条件调制和拼接融合降低长序列与多模态交互成本，下游结果支持同一主干可适配多类 MIR 任务，但比较协议不完全一致、Soft ROSA 有明显额外开销，不能外推为全面优于 Transformer。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.16718"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "MusicRWKV：多模态音乐表示学习的主干替换、融合步骤与结论边界"
paper_digest_original_title: "MusicRWKV: A Multimodal RWKV Framework for Music Representation Learning"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.16718v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.16718v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.16718v1.pdf"
paper_digest_primary_task: "音乐分析"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.music-understanding","label":"音乐分析"},{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"setting","id":"setting.long-context","label":"长上下文"}]
paper_digest_primary_method: "自监督学习"
paper_digest_score: 5.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把波形、频谱和元数据 token 送入多条 RWKV 支路，用可逆压缩、FiLM 条件调制和拼接融合降低长序列与多模态交互成本，下游结果支持同一主干可适配多类 MIR 任务，但比较协议不完全一致、Soft ROSA 有明显额外开销，不能外推为全面优于 Transformer。"
paper_digest_authors: [{"affiliations":["机构信息未能从 arXiv PDF 文本可靠映射"],"name":"Terry Tan"}]
paper_digest_abstract_sha256: "75e69419155b65e9d4ede1a65bd2dfbdab8eb429b2330647b49595a3f6e79c0e"
paper_digest_sidecars: {"citation.bib":{"sha256":"1eca6482ef1091181a526ba005066ad2ac4e452131aa0461695f1030b81fa553","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-16718/citation.bib"},"citation.json":{"sha256":"428ba1147a666b2a262c4556cf01d8af5c549a312118fbcc2ff473eb4d09e71f","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-16718/citation.json"},"citation.ris":{"sha256":"0c98ed4a0521dd86ab28763c6abcdc966e9f56306d70241405baadb9fd33df69","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-16718/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"94583f74ed532c165d021b9867050bdecca1236d67cf6b07af7092cc57bf03cf","url":"/audio-paper-digest-blog/client/papers/2026-11-13/2611-16718/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "4e92826eef6a4a7b2a47ac759bc7ed25c83bf550f99ee03cb23be57bc0b71e22"
paper_digest_api_reader_plan_sha256: "4c87c29ccd954876a4b3685ecf0dc5ee64e44abb1be3f89c3208ed8fa3dee253"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "b35ac64e20cdc551ee28cf8b212b5d5e26d381b5601824f26dd2e4d1bbd176a2"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "f7d84ca525d13dec351e05d71129a23235f9e83b0008e180d32b9388103ac7c6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "434911fe998001c208c1b44aaeeab8956a71b738ee43eda8a814b82ab4806aae"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "e9b2c39a70acca3023dd0dbdc09e6f8d2e1eed386c61ecc96ffc246cbb428d42"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 MusicRWKV：多模态音乐表示学习的主干替换、融合步骤与结论边界

> 英文题目：*[MusicRWKV: A Multimodal RWKV Framework for Music Representation Learning](https://arxiv.org/abs/2611.16718v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐分析](/audio-paper-digest-blog/papers/?concept=task.music-understanding)
- **研究方法**：[自监督学习](/audio-paper-digest-blog/papers/?concept=method.self-supervised)；[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)；[状态空间模型](/audio-paper-digest-blog/papers/?concept=method.state-space)
- **研究条件**：[长音频处理](/audio-paper-digest-blog/papers/?concept=setting.long-audio) → [长上下文](/audio-paper-digest-blog/papers/?concept=setting.long-context)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 0.8/1.5 | 清晰度 0.6/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Terry Tan：机构信息未能从 arXiv PDF 文本可靠映射

## 📌 核心摘要

论文面向长时音乐录音的多模态自监督表示学习，输入为波形、频谱图和元数据，输出为用于下游音乐信息检索任务的表示或预测。Transformer 自注意力的二次复杂度和随序列增长的键值缓存会带来长序列开销；RWKV 以并行训练和循环推理降低推理复杂度，但不天然提供跨模态注意力。MusicRWKV 先用 Jukebox 把波形转成离散标记，用 MuQ Mel-RVQ 把频谱转成离散标记，并将艺术家、流派和可用歌词等元数据转成文本标记；波形和频谱再经可逆压缩模块缩短后分别送入模态专属 RWKV 编码器，元数据直接编码。三路表示经 FiLM 条件化后拼接，送入共享 RWKV 融合编码器；预训练以三种模态的交叉熵损失加重构正则为目标，Soft ROSA 作为可微检索与聚合模块，对中间隐状态做历史候选匹配，形成增强变体。在 MagnaTagATune（MTT）标注任务上，MusicRWKV 的平均精度（Average Precision, AP）为 46.1，高于表内最高的 MERT2-30s 41.3；GiantSteps 的 refined accuracy 为 70.3，高于 MERT2-FS 的 67.1。但在 MTT ROC-AUC、GTZAN 流派分类和 EMO 情感回归上并不领先。相同数据划分、随机种子和优化设置下的预训练消融显示，Soft ROSA 把验证准确率从 93.30% 提到 94.82%，每样本时间从 3.32 秒增到 9.49 秒，峰值内存从 64.90 GiB 增到 69.80 GiB，其下游普遍收益尚未验证。由于下游模型从零训练而基线可能采用预训练探测，上述跨任务比较并非严格同条件；直接迁移大型预训练模型在标注有限时还出现明显过拟合，因此 MusicRWKV 的广泛适用性和预训练表示的迁移效果仍待验证。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/tanjiarui/music-rwkv> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音乐理解的输入、目标与必须保留的信息

音乐表示学习的目标不是直接生成音乐，而是从大量未标注音乐中得到可迁移的特征，让后续的标签预测、分类或回归模型能利用这些特征。本文评测的下游任务包括音乐标签、流派分类、调性估计、情绪识别、乐器分类、音高分类和歌声分析；输出分别可能是多标签、单标签、类别或连续值。输入侧需要同时保留几类信息：波形的细粒度时间变化、频谱中的音色与和声结构，以及流派、艺术家、歌词等语义元数据。若序列很长，还要保留跨小节、跨段落的时间依赖。

评价时按各数据集原有协议使用 ROC-AUC、Average Precision、Refined Accuracy、Accuracy 或 R²，数值越高越好。本文要解决的具体问题是：在长时音乐录音上，能否用 RWKV 替代以自注意力为核心的 Transformer 主干，并在不引入昂贵交叉注意力的情况下把多种模态放进同一个自监督表示学习框架。

### 和既有音乐基础模型相比，MusicRWKV 改的是主干与融合路径

早期自监督音乐表示工作如 CLMR、MULE 用对比学习从音频学习可复用表示；随后 MERT 用掩码预测并结合声学与音乐教师，MusicFM 面向音乐信息学任务，MuQ 采用 Mel 残差向量量化作为自监督目标，MT2 把多任务自监督目标组合起来，AudioMAE++ 属于重建式音频基础模型。它们大多仍以 Transformer 为主干，本文的比较也以这些模型为参照。多模态音乐理解方面，波形、频谱和元数据各自提供不同信息；已有工作如 MARL 研究多视图音频表示中的共享与视图特有信息，但现有多模态音乐框架通常围绕注意力结构设计。

RWKV 在语言建模中因长上下文效率受到关注，音乐上的既有探索主要是 MIDI-RWKV 这类符号音乐生成与可控创作，目标偏向离散音乐事件的自回归建模；本文关注的是音频多模态自监督表示，并把同一主干适配到多种 MIR 下游任务。这里必须区分比较协议：本文下游模型不加载预训练参数，而是从头训练任务专用小模型；不少基线来自原论文或 MARBLE，可能采用预训练后探测，因此表中的并排数字是参考比较，不是同一训练范式下的严格对照。

### 长序列开销与多模态汇合是本文同时处理的两个困难

Transformer 的自注意力计算随序列长度呈二次增长，推理时常用的 Key-Value 缓存还会随序列变长占用更多内存。音乐录音常持续数分钟，高分辨率 tokenizer 会产生很长的 token 序列；本文预训练设置中波形最长 20,000 个 token、频谱最长 10,000 个 token，元数据最长 500 个 token，长序列压力是实际存在的。已有音乐基础模型 MERT、MusicFM、MuQ 等主要基于 Transformer，因此本文把 RWKV 作为候选主干，利用其可并行训练、循环推理且推理复杂度随序列长度线性的特点。第二个困难来自多模态：波形、频谱和元数据需要汇合，但 RWKV 本身没有 Transformer 那样的交叉注意力。

若直接补上交叉注意力，又会增加开销。论文因此同时处理两个问题：一是用可逆压缩缩短音频 token 序列，二是用 FiLM 条件调制、拼接融合和共享 RWKV 编码器实现模态交互；Soft ROSA 则作为可选的检索增强。

### 沿一个样本走完 MusicRWKV：三种输入如何汇合

给定波形 token、频谱 token 和元数据 token 3 组输入，MusicRWKV 先让波形与频谱经过可逆音频压缩，得到更短的潜表示；元数据不经压缩，直接保留文本 token 序列。随后每条支路各自进入独立的 RWKV 编码器，得到对应模态的隐表示。由于 RWKV 没有天然的交叉注意力，模型用 FiLM 条件调制对每个模态的隐表示做可学习的仿射变换，再把各模态表示拼接后送入共享 RWKV 编码器，得到联合表示。预训练阶段，这个联合表示由多模态自监督目标优化；下游阶段复用相同的总体主干设计，但按任务改变输入模态、隐藏维度、层数和输出头，并且从头训练参数。

**波形 token × 频谱 token × 元数据 token：** 波形 token 保留细粒度时间结构，频谱 token 强调音色与和声等频域结构，元数据 token 提供流派、艺术家、歌词等高层语义。三条支路先各自编码，再经 FiLM 条件调制和拼接后的共享 RWKV 编码器汇合，因此三种 token 的分工不是互相替代，而是让时间细节、频谱特征和语义上下文进入同一个表示空间。

需要注意，这 1 流程中的压缩只作用于波形和频谱，元数据保持原序列长度；FiLM 负责模态条件注入，真正的跨模态汇合发生在拼接后的共享编码器中，而不是在每一层做 token 对 token 的交叉注意力。论文没有给出每个模块内部状态尺寸的完整清单，也没有报告压缩后具体序列长度，只给出压缩步长为 10 和预训练配置。

### 波形、频谱与元数据怎样变成模型可处理的 token

波形输入使用 Jukebox tokenizer，把连续音频变成离散 codec token，以保留细粒度时间结构。频谱输入使用 MuQ Mel-RVQ tokenizer，得到 Mel 残差向量量化 token，强调音色与和声等频段特征。元数据包括流派、艺术家和在可用时的歌词，转成文本 token，为音频本身不直接给出的高层语境提供补充。3 种 token 的最大长度分别是 20,000、10,000 和 500，前两者远长于元数据，因此压缩只对音频两种输入执行。

**Jukebox tokenizer × MuQ Mel-RVQ tokenizer：** Jukebox tokenizer 把连续波形压成离散 codec token，侧重保留细粒度时间结构；MuQ Mel-RVQ tokenizer 产生 Mel 残差向量量化 token，强调音色与和声等频谱特征。两者分别服务波形和频谱两条输入支路，组合后为后续 RWKV 编码提供互补的声学与频谱信息。

下游任务的输入配置不是固定 3 模态全开。论文附录给出的任务配置中，MTT 使用波形加频谱，GTZAN 使用波形加频谱，EMO 使用波形加频谱；GiantSteps Key 使用 Harmonic Mel Spectrogram，NSynth 乐器分类使用频谱，NSynth 音高分类使用 Harmonic CQT，VocalSet 技巧分类使用 CREPE Pitch Embeddings，VocalSet 歌手识别使用 WavLM Speaker Embeddings。也就是说，本文把输入模态当作任务配置的一部分，而不是所有任务都强制使用同一套 3 模态输入；这也是后文结果不能简单横向归因于同一输入条件的原因之一。

### 可逆压缩缩小序列，RWKV 编码器承担长程建模

可逆音频压缩模块把相邻 token 按固定长度分段，再投影到较短的潜表示，训练时通过逆投影重建原始 token 序列。预训练配置中的压缩步长为 10；论文没有披露压缩后每个样本的精确长度，但可以确定其目的是减少送入 RWKV 编码器的有效序列长度。波形和频谱都走这一步，元数据不走。压缩本身会带来信息损失风险，所以训练目标中另加重构正则，鼓励重建结果接近原始表示。

压缩之后，3 个模态分别进入独立的 RWKV 编码器。预训练模型每个模态 6 层，隐藏维 1024；融合部分另有 4 层 RWKV。RWKV 在本文中的角色是模态内长程依赖建模，而不是用自注意力对全部 token 两两比较。论文把 RWKV 的优势概括为 Transformer 式并行训练加循环推理，并强调推理时线性复杂度。

不过，论文没有报告状态大小、具体 RWKV 版本、每层参数量或长序列吞吐的实测曲线；这些细节不能从模型名称直接补出。

融合时，模型把条件调制后的各模态表示拼接，再送入共享 RWKV 编码器，形成统一音乐表示。预训练模型总可训练参数为 883M，包含模态嵌入、可逆压缩模块、RWKV 编码器、FiLM 条件和输出预测头；论文特别指出，相当一部分参数来自为可逆序列压缩引入的模态专用压缩模块。具体参数分配没有逐项给出。

### 没有交叉注意力时，FiLM 用调制代替模态交互

FiLM 条件调制的形式是对隐表示做逐元素仿射变换，即用与模态对应的可学习 γ 和 β 调制特征。它的作用是把模态条件注入表示，而不需要为每 1 对模态增加交叉注意力。论文没有说明 γ 和 β 具体由什么网络产生、是否与时间步有关，也没有给出条件向量的维度；能确定的是，调制参数由对应模态决定，并且该操作发生在模态表示进入融合之前。

**RWKV 编码器 × FiLM 条件调制 × 多模态融合：** RWKV 编码器在各模态内部建模长程依赖；FiLM 条件调制用可学习的 γ 和 β 对隐表示做逐元素仿射变换，把模态信息注入特征；多模态融合再把各模态表示拼接并送入共享 RWKV 编码器。三者分工是先在模态内编码，再做轻量条件调制，最后在联合空间汇合，从而避免依赖昂贵的交叉注意力。

因此，MusicRWKV 的多模态交互分成两步：先由 FiLM 做轻量的模态条件调制，再由拼接后的共享 RWKV 编码器在联合空间中进一步混合信息。它不是用交叉注意力显式对齐波形帧与频谱帧，也不是用对比学习强制不同模态的样本配对；这些机制在原文中没有作为本方法的核心组件出现。这样的设计避免了交叉注意力的开销，但代价是跨模态细粒度对齐能力没有被单独验证。论文没有报告 FiLM 消融，也没有报告去掉 FiLM 后的效果，所以不能仅凭架构图推断它一定带来多少提升。

### Soft ROSA 是可选的可微检索增强，不是主路线的必需组件

Soft ROSA 是可选增强，不是标准 MusicRWKV 的必需部分。它被放入模态专用的 RWKV 编码器中，接收中间层的 query、key、value 表示，对历史候选表示做结构化匹配和聚合，得到增强后的隐表示，再让它继续经过后续 RWKV 层。整个过程保持端到端可微，因此可以随主训练目标一起优化。论文从表示学习角度称其为可微的神经符号交互，从另一个角度称其为无路由专家选择：不训练显式路由网络，而是用可微权重强调少数相关历史候选。

**Soft ROSA × router-free expert selection：** Soft ROSA 在中间隐表示上对历史候选做可微匹配与聚合，再让结果继续经过后续 RWKV 层；router-free expert selection 是作者给出的另一种视角，指不靠显式路由网络，而用可微权重强调少数相关候选。两者描述同一机制的两面：前者强调检索与聚合，后者强调选择与加权，组合后为 RWKV 的循环动态增加一条结构化的历史访问路径。

在实验上，Soft ROSA 只通过预训练消融和层间遥测来分析，并未作为所有下游任务的必选模块。论文没有给出匹配函数的具体公式、候选数量、sink 路由如何定义、模块插在哪些层、每层有几个头等实现细节；因此复现时不能根据名称猜测内部结构。可以确认的是，加入 Soft ROSA 会增加参数和计算开销，后文会结合原文报告的消融数字说明具体代价。

### 训练目标：三项主损失加轻量重构正则

预训练的主目标是 3 个模态级交叉熵损失之和：波形、频谱和元数据各有一个预测损失。除此之外，论文加入重构正则：让重建的波形与频谱表示接近原始输入表示，用平方 L2 距离衡量；该正则不是独立学习目标，而是减少压缩与融合造成的信息损失。最终目标由主损失加上 λ 倍重构正则组成，λ 控制重构项的贡献。论文没有报告 λ 的取值，也没有报告重构损失在训练中的权重曲线。

**可逆音频压缩 × 重构正则：** 可逆音频压缩把相邻 token 按固定长度分段并投影到较短潜表示，降低送入 RWKV 的序列长度，同时保留逆投影路径；重构正则用重构表示与原始波形、频谱表示之间的平方 L2 距离约束信息保留。前者节省长序列计算，后者减少压缩和融合造成的信息损失，二者一起构成效率与保真之间的折中。

预训练语料约为 25,000 段公开可获取的完整音乐录音，按 80/20 做流派分层划分，并排除与下游基准重叠的录音以防泄漏。最大序列长度为波形 20,000、频谱 10,000、元数据 500。优化使用 Adam，初始学习率 1e-3，批大小 4，训练 400 个 epoch，ReduceLROnPlateau 在 3 个 epoch 无改善后把学习率乘 0.5，最低学习率 1e-6，按最低验证损失选择检查点。下游模型则按附录 B 的配置从头训练，不加载预训练参数；原文没有给出下游任务的完整优化器与训练轮数，只给出输入模态、隐藏维 512、参数量约 19.70M 到 21.54M、2 或 6 层 RWKV 以及输出头类型。

### 预训练、下游任务和比较协议分别是什么

实验分两部分。预训练部分在大约 25,000 段音乐上训练多模态模型，用于比较标准 MusicRWKV 与加入 Soft ROSA 的变体；下游部分不加载这批预训练权重，而是复用总体 RWKV 主干设计，为每个任务构造较小的任务专用模型并从头训练。下游任务包括 MTT 标签、GTZAN 流派、GiantSteps Key 调性、EMO 情绪、NSynth 乐器与音高、VocalSet 歌声技巧与歌手识别。指标按数据集原有协议取 ROC-AUC、Average Precision、Refined Accuracy、Accuracy 或 R²，均为越高越好。

比较对象包括 CLMR、MULE、MERT、MusicFM、MuQ、MT2、AudioMAE++ 以及 MERT2 的两个版本。原文说明基线结果来自原论文或 MARBLE，可能使用预训练后探测；MusicRWKV 的下游结果来自从头训练的任务专用模型。因此这些数字适合回答“这个 RWKV 主干架构能否适配多种 MIR 任务”，不适合回答“在完全相同预训练和微调预算下，MusicRWKV 是否胜过所有 Transformer”。预训练语料来自互联网公开录音，论文说明了流派尽量平衡和排除下游重叠，但没有给出完整的版权、去重和标注审计细节。

下游配置还有一个容易忽略的点：输入模态按任务变化。MTT、GTZAN、EMO 使用波形加频谱；GiantSteps Key 使用 Harmonic Mel Spectrogram；NSynth 乐器分类使用频谱，音高分类使用 Harmonic CQT；VocalSet 技巧分类使用 CREPE Pitch Embeddings，歌手识别使用 WavLM Speaker Embeddings。

隐藏维统一为 512，参数量约 19.70M 到 21.54M，RWKV 层数为 2 或 6。这样的任务专用适配意味着结果差异既可能来自主干，也可能来自输入表征和任务头，不能全部归因于 RWKV 本身。

### 下游结果：多类任务有竞争力，但不是全面领先

下面的表挑选了几项代表性下游结果，用来比较同一 RWKV 主干在标签、调性、流派、情绪和细粒度歌声任务上的表现范围。MusicRWKV 是任务专用模型从头训练；基线按原文标记来自原论文或 MARBLE，训练协议可能不同，所以表中是参考比较，不是严格同预算对照。数值越高越好；表内保留原文的裸数值，不额外补百分号。† 表示原文引用原发表结果，‡ 表示取自 MARBLE 公共基准。

| 数据集与指标 | 基线模型 | 基线数值 | 基线来源标记 | MusicRWKV 数值 |
| --- | --- | --- | --- | --- |
| MTT AP | MERT2-30s | 41.3 | ‡ | 46.1 |
| GiantSteps Key Accrefined | MULE | 66.7 | † | 70.3 |
| GTZAN Acc | MERT2-30s | 91.7 | ‡ | 86.6 |
| EMO valence/R2 | MERT2-30s | 63.2 | ‡ | 62.1 |
| NSynth pitch Acc | MERT | 94.4 | † | 87.4 |
| VocalSet technique Acc | MERT | 76.9 | † | 89.1 |

从这几行看，MusicRWKV 在 MTT AP、GiantSteps Key 的 Accrefined 和 VocalSet 技巧分类上高于所列基线，但在 GTZAN、EMO valence 和 NSynth 音高分类上低于基线。原表还显示 MusicRWKV 的 MTT ROC-AUC 为 88.6，低于 MULE 的 91.4、MERT2-30s 的 91.9 等；NSynth 乐器分类 73.3 低于 MULE 的 74.0，VocalSet 歌手识别 83.0 低于 MULE 的 87.5。因而结果支持“同一 RWKV 主干能够适配多个 MIR 任务”，不支持“在所有任务和所有指标上全面超过 Transformer 基线”。尤其要注意，本文下游模型不是预训练后微调，而是从头训练；原文还报告直接迁移大型预训练模型常出现明显过拟合，因此这些数字不能当作 MusicRWKV 预训练表示质量的直接证明。

另一张表转到原文的细粒度音乐属性与歌声任务，比较 CLMR、MULE、MERT 与 MusicRWKV 在 NSynth 乐器和音高、VocalSet 技巧和歌手识别上的 Accuracy。各基线行在原文中带 †，表示结果取自原发表；MusicRWKV 行是本文从头训练的任务专用模型。因此这张表回答的是同类任务上的参考位置，不能把差异全部解释成主干结构差异。

| 数据集 | 任务 | 指标 | CLMR | MULE | MERT | MusicRWKV |
| --- | --- | --- | --- | --- | --- | --- |
| Nsynth | instrument | Acc | 67.9 † | 74.0† | 72.6 † | 73.3 |
| Nsynth | pitch | Acc | 47.0† | 89.2 † | 94.4 † | 87.4 |
| VocalSet | technique | Acc | 58.1† | 75.5† | 76.9† | 89.1 |
| VocalSet | singer | Acc | 49.9† | 87.5† | 87.1† | 83.0 |

细看这四行，MusicRWKV 在 VocalSet 技巧分类的 Acc 为 89.1，高于表中 CLMR 的 58.1、MULE 的 75.5 和 MERT 的 76.9；但在 NSynth 音高分类中为 87.4，低于 MULE 的 89.2 和 MERT 的 94.4，在 VocalSet 歌手识别中为 83.0，也低于 MULE 的 87.5 和 MERT 的 87.1。NSynth 乐器分类的 73.3 低于 MULE 的 74.0，但高于 CLMR 的 67.9 和 MERT 的 72.6。这个分布与原文的总结一致：不同下游任务强调音高、音色、歌唱技巧或歌手身份等不同因素，本文架构并非处处占优。

### Soft ROSA 消融：准确率提升伴随计算代价

这一小节比较标准 MusicRWKV 与加入 Soft ROSA 的增强变体，问题不是只看验证准确率，还要看为这点提升付出了多少参数、显存和时间。2 个模型使用相同数据划分、相同初始化种子和相同优化设置，唯一差别是是否在 RWKV 编码器中加入 Soft ROSA；准确率越高越好，参数量、峰值显存和每样本时间越低越好。原文表 5 中数据格保留原精度：Validation Accuracy 列的表头写明 (%)，对应数据格为 93.30 与 94.82；原文正文又把这一提升概括为从 93.3% 到 94.8%。

在原文报告的这组预训练消融中，加入 Soft ROSA 后验证准确率从 93.30% 升到 94.82%，但参数从 883.00 M 增到 952.66 M，峰值显存从 64.90 GiB 增到 69.80 GiB，每样本时间从 3.32 s 增到 9.49 s。也就是说，准确率提升伴随着明显的检索计算和内存代价；这不是免费收益。2 个模型虽然共享数据划分、种子和优化设置，但原文只报告单个检查点的验证准确率，并按最低验证损失选检查点，没有给出多随机种子方差、置信区间或下游迁移消融。因此可以说“在这组条件下观察到的提升与加入 Soft ROSA 一致”，不能扩大为“Soft ROSA 在所有音乐任务上都稳定有效”。论文也在结论中把检索机制带来的额外开销列为限制。

### 层间遥测：分布从分散检索转向选择性检索

层间遥测分析要回答的是：Soft ROSA 的检索分布随网络深度怎样变化。统计量来自归一化路由分布，并在所有 batch 元素、头和 token 位置上取平均。Top Probability 是最大路由概率；Entropy 是归一化 Shannon 熵，越低表示分布越集中；Candidate Mass 是分配给检索候选的总概率，等价于 1 减去 sink 路由概率。

层号越深，若 Top Probability 上升、Entropy 下降，说明概率质量更集中；Candidate Mass 的变化则要单独看，因为它反映有多少总质量留在候选而不是 sink 上。下表给出原文六层的统计值，数值均为原表裸值，不额外添加单位。

| Layer | Top Probability | Entropy | Candidate Mass |
| --- | --- | --- | --- |
| 0 | 0.31 | 0.73 | 0.86 |
| 1 | 0.38 | 0.65 | 0.82 |
| 2 | 0.47 | 0.56 | 0.79 |
| 3 | 0.58 | 0.45 | 0.73 |
| 4 | 0.71 | 0.31 | 0.66 |
| 5 | 0.84 | 0.18 | 0.58 |

表中随层深增加，Top Probability 从 0.31 升到 0.84，Entropy 从 0.73 降到 0.18，Candidate Mass 从 0.86 降到 0.58。原文把这些趋势解释为：浅层检索较分散，深层逐渐集中到更少的高度相关历史候选，即从分散检索转向选择性检索。这个解释与“无路由专家选择” 的视角一致：模型没有显式路由网络，但通过可微匹配把概率质量压到少数候选上。需要保留的限制是，Candidate Mass 同时下降，意味着更深层留在检索候选上的总概率减少、流向 sink 的比例增加；单凭 Top Probability、Entropy 和 Candidate Mass 3 个聚合量，不能证明被选中的候选在语义上正确，也不能证明这种集中直接导致验证准确率提升。遥测是描述性统计，不是因果实验。

### 结论在哪些条件下成立，哪些仍是开放问题

本文最需要强调的边界是：下游实验没有加载预训练 MusicRWKV 参数。每个下游任务复用主干设计，但从头训练较小的任务专用模型；基线则多来自预训练后的探测或原论文结果。因此主结果支持架构可适配性，不支持“预训练后再迁移” 的优势。原文还报告，直接迁移大型预训练模型到下游常出现明显过拟合，尤其在小标注数据集上。

于是作者降低模型容量和表示维度，改为从头训练。这个选择使结果更稳定，但也把“预训练表示质量” 这一环暂时移出了下游验证。

第二，Soft ROSA 的验证准确率提升伴随参数、显存和每样本时间上升，论文自己把额外计算和内存开销列为限制，并指出尚未系统研究不同预训练模型规模的缩放行为。第三，论文没有报告多随机种子方差、统计显著性、长序列墙钟延迟或吞吐曲线；RWKV 的线性推理复杂度是架构性质，不是本文实测的部署收益。第四，任务专用输入模态差异很大，某些任务使用 CREPE、WavLM、Harmonic CQT 等外部表征，结果不能全部归因于 RWKV 主干。

第五，Soft ROSA 的内部实现细节、λ 取值、下游完整优化超参数以及预训练权重是否发布，原文没有充分披露；层间遥测只给出聚合统计，没有候选身份、语义正确性或逐层因果消融。论文还明确说统一多模态表示未必对所有 MIR 场景最优。把这些限制放在结论旁边，才能正确理解“RWKV 是有希望的替代主干” 这一表述。

### 复现时先核对数据划分、输入模态和是否加载预训练参数

复现时第一步不是直接跑大模型，而是核对数据与输入管线：确认波形使用 Jukebox tokenizer、频谱使用 MuQ Mel-RVQ tokenizer、元数据如何转成文本 token；确认波形与频谱经过压缩步长 10 的可逆模块，而元数据不压缩；确认各下游任务使用附录 B 指定的输入模态，而不是默认 3 模态全开。随后检查预训练数据划分：约 25,000 段录音、80/20 流派分层、排除与下游基准重叠的录音。

第二步要明确实验目标。如果复现表中的下游数字，应使用任务专用小模型从头训练，隐藏维 512、参数量约 19.70M 到 21.54M、RWKV 层数 2 或 6，并且不加载预训练参数；如果研究预训练迁移，则必须单独设计加载权重、冻结或微调的策略，不能把两种协议的结果混在一起。预训练优化设置为 Adam、初始学习率 1e-3、批大小 4、400 个 epoch、ReduceLROnPlateau 的 factor 0.5、patience 3、最低学习率 1e-6，并按最低验证损失选检查点；下游完整优化设置原文没有给出，复现时应自行记录。

第三步核对资源。论文脚注给出代码仓库 <https://github.com/tanjiarui/music-rwkv>；该链接是论文提到的第三方资源，不能据此断言作者已经公开了可复现包、预训练权重或可直接运行的系统。代码、权重和运行环境是三件事，需要分别检查。若要做效率比较，应在相同硬件、相同序列长度和相同批大小下测量训练与推理的显存、吞吐和延迟；原文消融只给出该设置的峰值显存和每样本时间，不能替代完整的部署基准。

### 什么时候值得尝试，以及下一步要验证什么

如果研究场景的核心矛盾是长时音乐序列的注意力开销，且团队愿意为不同 MIR 任务分别配置输入模态和输出头，MusicRWKV 值得作为一个候选主干来验证。它的吸引力不在于已经证明全面超过 Transformer，而在于把 RWKV、可逆压缩、FiLM 调制和拼接融合组合成一个可运行的多模态框架，并在标签、调性、情绪、乐器、歌声等多类任务上展示了可适配性；调性估计和歌声技巧分类是原文中相对突出的结果。

下一步最该补的验证有四项。第一，在完全相同预训练数据、相同下游协议和相同预算下，与 MERT、MusicFM、MuQ 等基线做受控比较，并报告多随机种子方差。第二，真正加载预训练 MusicRWKV，比较冻结探测、微调和从头训练，查清过拟合的来源。第三，对 Soft ROSA 做更细的因果消融：改变候选数、插入层、sink 机制，并结合候选身份和语义相关性解释遥测变化，而不只看 Top Probability、Entropy 和 Candidate Mass。第四，做长序列效率实测，分别报告训练显存、推理延迟、吞吐和模型规模缩放。

在完成这些验证之前，较稳妥的结论是：论文报告的证据支持 RWKV 可以作为音频多模态音乐表示学习的一种替代主干，且在其特定预训练消融中 Soft ROSA 带来验证准确率提升；但下游结果不是严格同协议胜负，Soft ROSA 有明显代价，统一多模态表示也未必适合所有任务。读者若要在自己的项目中尝试，应先把输入 tokenizer、压缩步长、任务输入模态和训练协议对齐，再讨论模型结构带来的差异。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.16718v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：deepseek-v4.1-flash

- 评分请求协议：openai_responses

---

[← 返回 2026-11-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-13/)
