---
title: "ProTTS: End-to-End Prominence-aware Natural and Controllable Text-to-Speech via Automatic Word Stress Discovery"
date: 2026-11-17
draft: false
tags: [文本到语音, 韵律与风格控制, 聚类与类别匹配, 端到端学习]
categories: [论文速递]
description: "ProTTS 在 FastSpeech 2 的变化适配器内用无监督聚类从自身预测的音高、能量和时长中发现词重读，再用门控增量实现重读，在母语和非母语数据上取得有证据的重读检测与听感提升，但仍受纯声学线索和二分类假设限制。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.19832"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "ProTTS：从合成模型内部发现词重读并实现可控合成"
paper_digest_original_title: "ProTTS: End-to-End Prominence-aware Natural and Controllable Text-to-Speech via Automatic Word Stress Discovery"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.19832v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.19832v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.19832v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"task","id":"task.prosody-style-control","label":"韵律与风格控制"},{"facet":"method","id":"method.clustering","label":"聚类与类别匹配"},{"facet":"method","id":"method.end-to-end-learning","label":"端到端学习"}]
paper_digest_primary_method: "聚类与类别匹配"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "ProTTS 在 FastSpeech 2 的变化适配器内用无监督聚类从自身预测的音高、能量和时长中发现词重读，再用门控增量实现重读，在母语和非母语数据上取得有证据的重读检测与听感提升，但仍受纯声学线索和二分类假设限制。"
paper_digest_authors: [{"affiliations":["Speech Processing Lab, LTRC","IIIT Hyderabad","Hyderabad, India"],"name":"Sai Harshitha Aluru"},{"affiliations":["Speech Processing Lab, LTRC","IIIT Hyderabad","Hyderabad, India"],"name":"Chiranjeevi Yarra"}]
paper_digest_abstract_sha256: "e9c38d6da6dddccaff94029f7090fa639a5e37ac3aa7cc85b2adbc82ad3c9429"
paper_digest_sidecars: {"citation.bib":{"sha256":"a3666f7c5a45ac87bc782dde878d900e9ec6432f7677c3e5f343c064c9b1d8ff","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-19832/citation.bib"},"citation.json":{"sha256":"70da1484b293418e687501af2ca512f9610a6a99e5f4f1cbaaf1fc5407227c42","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-19832/citation.json"},"citation.ris":{"sha256":"08d1bd79f175da6c2a15e88de1ccaa2903b1a49214e2dfd414756fd7b00cb499","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-19832/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"e5d468e33c51d7b8188a7a52328ba70baccd4a5d856f6a926fb8f89c6465ef7d","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-19832/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "210fc75bb689a693854364b35612d6c51366f4e5142d1f3b9fa6e5732d0f4487"
paper_digest_api_reader_plan_sha256: "713a95337617adf8ada1bfc7d44688f73f9f80f40574be85e0895adc80f60ea2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "221919a1c144b939cd9f2ff826e8d336e9e2ab653c1c6384266c9fb4c0aba5fe"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "4ee1528283b649d106d8fc16804730a7cb7aeecf6cdb10248af7ebeaff92141a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "451f1cc9d21f20f4dc14f8bb1c71232270baf60f84f9d6520aa38038b5b77094"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "8c44ab089eaced1f47dea8f8a59ecfeb652ab56564c67629223142918735a9c4"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 ProTTS：从合成模型内部发现词重读并实现可控合成

> 英文题目：*[ProTTS: End-to-End Prominence-aware Natural and Controllable Text-to-Speech via Automatic Word Stress Discovery](https://arxiv.org/abs/2611.19832v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-paper-digest-blog/papers/?concept=task.tts)；[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [韵律与风格控制](/audio-paper-digest-blog/papers/?concept=task.prosody-style-control)
- **研究方法**：[聚类与类别匹配](/audio-paper-digest-blog/papers/?concept=method.clustering)；[端到端学习](/audio-paper-digest-blog/papers/?concept=method.end-to-end-learning)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5


## 👥 作者与机构

- Sai Harshitha Aluru：Speech Processing Lab, LTRC；IIIT Hyderabad；Hyderabad, India
- Chiranjeevi Yarra：Speech Processing Lab, LTRC；IIIT Hyderabad；Hyderabad, India

## 📌 核心摘要

自然语音需要把重读放在少数词上才能表达纠正、对比或惊讶等意图，读者需要理解的对象是输入文本中哪个词该重读，以及重读在语音中如何实现。困难在于重读标注稀缺，非母语差异大，而已有重读检测与重读可控合成各自独立，外部检测器给出的标签未必对应合成器真正可用的韵律差异。ProTTS 以 FastSpeech 2 为骨架，先由基础方差预测器输出音素级音高、能量和时长，再按词聚合为 521 维词级特征。聚类头在该特征空间中做二类软分配以发现重读词，得到的掩码控制三个重读方差预测器，只对重读词的音素施加韵律增量，非重读词保留原预测。全部模块用重建损失加聚类损失联合优化，每轮更新伪标签和方差目标，形成检测与合成互相促进的循环。与已有方法差异在于重读不是外部输入，而是在合成器内部无监督涌现，并可直接用于合成与用户指定控制。在 35 名听众参与的 LibriTTS 与 VCTK 自然度评测中，ProTTS 平均意见分达到 3.96，基线 FastSpeech 2 为 3.12，听众偏好率为 83.5%。在 ISLE 非母语集的重读检测中，ProTTS 的 F1 为德国口音 0.839 与意大利口音 0.861，超过无监督基线和多数有监督基线，意大利口音略低于 SupraDoRAL 与 WhiStress 的 0.87。结论适用于朗读式英语与短句重读，对话语境重读、渐变重读强度和声调语言母语者尚未验证。原文披露模型总量约 31.5M 参数，在单卡上训练 100k 步，推理时聚类为单次距离计算，开销可忽略。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音合成要处理什么输入，要保留什么信息

刚进入语音合成的读者可以先把任务想成一句话的转换，输入是音素序列，也就是把文本按发音单位展开后的符号串，输出是梅尔频谱图再经声码器变成波形，中间必须决定每个音素读多长、音高多高、能量多大，否则声音会平淡含糊。

自然口语里说话人不只读对字音，还会在少数词上加重以表达纠正、对比或惊讶，听者靠这种词级重读理解意图并感到自然，论文把这种现象称为词级重读，它由时长拉长、能量增强和音高变化共同体现。

FastSpeech 2 这类非自回归模型已经有处理这三者的部件，编码器把音素变成隐表示，变化适配器逐音素预测音高、能量和时长，再把音高能量变成向量加回隐表示并按时长展开给解码器，但标准模型对所有词一视同仁，没有哪个词该突出的概念。

因此评价不能只看字读得对不对，还要看重读放得对不对，论文用词级 F1 衡量发现的重读标签与人工标注的一致程度，用平均意见分和偏好比例衡量合成听起来是否自然、重读是否可感知、是否更接近真人录音，3 类证据分别回答找得准不准和听起来好不好。

### 检测与可控合成两条路线差在哪里

词重读检测一侧，早期用基频、能量、时长和谱倾斜等手工特征加分类器或序列模型，后来用 wav2vec 2.0、HuBERT 和 Whisper 等自监督表示，但大多仍需词级标注，无监督一侧只有在 FastSpeech 2 韵律嵌入上做 K 均值的尝试，且分数明显低于有监督方法。

强调可控合成一侧，通常在变化适配器里对指定词改音高、能量和时长，有的用弱监督伪标签，有的用单独训练的分类器提供标签，有的只调时长，但共同点是重读标签都从外部给定，模型自己不负责发现位置。

无监督韵律建模一侧，有全局风格标记、分层韵律和词级韵律标注等工作，它们学的是说话速率和语调等连续变化，而不是论文定义的离散二元重读属性，因此不能直接回答哪个词该重。

按原文的比较口径，3 类工作恰好互补，检测只管找位置，合成只管实现位置，无监督韵律不管重读定义，ProTTS 的区别在于把发现和实现放在同一变化适配器里联合训练，并同时覆盖母语和非母语评测，这是理解后文联合相对级联为何更好的背景。

### 为什么已有系统放不对重读

论文指出的具体困难是三件事被拆开了，重读检测器在外部独立训练，可控合成器假设重读位置已经给定，而无监督检测器只输出标签不参与发声，三者之间没有共享表示和联合优化。

如果简单把外部检测器级联到合成器，检测器按自己的目标优化出的标签未必是合成真正需要的韵律区分，而合成器内部本来已经算出的音高、能量和时长对比恰好包含重读线索，却在级联结构里被浪费了。

更麻烦的是标注代价，非母语者的重读随母语背景变化大，逐词标注昂贵，而通用韵律建模学的是语速和风格等整体变化，并不针对离散的二元重读属性，所以不能直接拿来决定哪个词加重。

**重读 × 凸显：** 重读指一句话中某些词发得更重、更长、音高变化更大，用来表达意图，凸显是听者感知到的这种突出效果，本文把重读当作要发现和实现的原因，把凸显当作听感评价中要验证的结果，两者分工为原因与效果。

论文要回答的问题于是很具体，能否在一个模型里让重读发现从合成模型的韵律预测中长出来，再反过来指导合成变得更自然，同时在推理时允许用户直接指定重读位置而不重新训练。

### ProTTS 如何把发现和实现放在一个模型里

ProTTS 保留 FastSpeech 2 的编码器、变化适配器和梅尔解码器骨架，只替换变化适配器内部，输入仍是音素序列，输出仍是梅尔频谱，再用在 LJSpeech 上预训练的 HiFi-GAN 声码器转波形，改动集中在如何从基线韵律长出词级判断，再改回音素级韵律。

沿一个句子走一遍，先由基础预测器给出每个音素的音高、能量和时长预测，再把属于同一词的音素预测汇聚成一个 521 维词向量，聚类头把这些词向量分成两类得到强调掩码，强调预测器只对掩码为 1 的词产生增量并加回基线得到适应后韵律，最后经时长扩展和解码生成频谱。

**聚类头 × 强调方差预测器：** 聚类头负责看词级韵律特征并决定哪个词是重读词，强调方差预测器负责根据这个决定去改对应音素的韵律，前者解决在哪里加重，后者解决如何加重，两者在同一次前向和反向中互相塑造特征空间。

下面这张结构图把 3 段放在一起看，左侧是整体模型，中间是改造后的适配器，右侧是 3 种推理用法，读图时先分清中间面板自下而上的汇聚、聚类和门控相加顺序，再看右侧如何复用同一结构。

> **看图路径：** 1. 先沿左侧从音素经编码器到变化适配器再到解码器的主路径看数据流向；2. 再看中间面板底部三个基础预测器如何汇入词级汇聚和聚类头；3. 注意顶部虚线框内三个强调预测器如何受掩码门控再与基线相加

[![原论文 Figure 1：Architecture of ProTTS. (a) Overall FastSpeech 2 model with our modified variance adaptor.](https://arxiv.org/html/2611.19832v1/figures/architecture.png)](https://arxiv.org/html/2611.19832v1/figures/architecture.png)

*论文图 1。原论文 Figure 1:：“Architecture of ProTTS. (a) Overall FastSpeech 2 model with our modified variance adaptor.”。*

从像素可见，中间面板底部是 3 个基础预测器，向上经词级汇聚到聚类头，再经音素级投影到顶部 3 个强调预测器，顶部虚线框标注掩码门控含义是只有重读词才叠加增量，右侧则分别画出只输出二值标签的检测、自动发现并合成、用户给定标签再合成的 3 条通路，第 3 条通路以同一句不同重读位置产生不同波形包络为例说明含义随重读变化。

### 从音素预测到词级特征：521 维向量怎么来

重读是词级现象而预测是音素级，所以第一步必须解决粒度对齐，论文对每个词取其包含音素的音高嵌入和能量嵌入做平均池化得到两个 256 维分量，再对标量时长预测算均值、标准差、最大值、最小值、总和、极差、变异系数，并加上词在句中的归一化位置和音素个数，共 9 维统计量，三部分拼在一起构成词向量。

这种拼法的用意是让聚类操作在一个既有韵律信息又可随重构损失求导的空间里进行，音高和能量保留嵌入的连续细节，时长用统计量弥补没有嵌入的不足，位置和长度则提供与韵律无关但有助于区分功能词和内容词的偏置。

**音素 × 词（w_k 词级单元）：** 音素是变化适配器直接预测音高、能量和时长的基本单位，词是重读现象实际发生的语言单位，ProTTS 必须把同一词内多个音素的预测汇聚成一个词级向量才能做词级聚类，汇聚起到了连接两种粒度的桥梁作用。

该拼接的数学写法是把三部分并置成 521 维向量，符号下标分别表示音高、能量和时长分量，维度数直接对应 256 加 256 加 9 的实现细节。

\[\mathbf{z}_{k}=[\mathbf{z}_{k}^{(p)}\;\|\;\mathbf{z}_{k}^{(e)}\;\|\;\mathbf{z}_{k}^{(d)}]\in\mathbb{R}^{521}\]

理解这一步的关键是平均池化会稀释多音节词中单个重读音节的信号，论文在局限中也承认这一点，但在主方法里仍采用它，因为实现简单且能直接复用已有预测，下文聚类初始化只用时长加音高而训练仍用完整 521 维的差异也与这种构造有关。

### 聚类头如何无监督分出重读词

聚类头不训练分类器，而是维护两个可学习的 521 维中心向量，用 t 分布核按词向量到两个中心的距离算软分配，距离越近得分越高，再把软分配平方并按簇频率归一化得到更尖锐的目标分布，最小化两者之间的 KL 散度形成自增强循环，让边界越来越清晰。

中心用预训练 FastSpeech 2 韵律特征上的 K 均值初始化，且只用时长加音高子集，因为该子集在消融中分离更好，每个训练轮次结束时取软分配的最大值作为硬伪标签即强调掩码，同时按中心向量的 L2 范数大小指定哪个簇为重读，依据是重读通常有更大韵律幅度因而嵌入幅度更大的语音学先验。

软分配的计算是把到每个簇的 t 核相似度归一化，分母对两个簇求和，保证每词的两个概率和为 1，分子分母都只依赖当前词向量与中心距离，因此可随模型更新而移动。

\[q_{kj}=\frac{(1+\lVert\mathbf{z}_{k}-\boldsymbol{\mu}_{j}\rVert^{2})^{-1}}{\sum_{j^{\prime}=0}^{1}(1+\lVert\mathbf{z}_{k}-\boldsymbol{\mu}_{j^{\prime}}\rVert^{2})^{-1}}\]

聚类目标是让尖锐化后的目标分布与当前软分配尽量接近，论文用 KL 散度写出该约束并对所有词和两个簇求和，目标分布本身由软分配派生，所以不是外部监督而是自举。

\[\mathcal{L}_{\text{kl}}=\text{KL}(P\|Q)=\sum_{k}\sum_{j}p_{kj}\log\frac{p_{kj}}{q_{kj}}\]

**基线韵律 × 强调增量：** 基线韵律是三个基础预测器对每个音素给出的常规音高、能量和时长，强调增量是三个强调方差预测器额外学到的改变量，只有重读掩码为 1 的词才把增量加上去，这种相加分工让非重读词保持原样而重读词获得抬升。

这里容易误以为聚类知道语义，其实它只看到韵律幅度，功能词因短时长和弱元音容易分对，而内容词即使在语境中不重也因本身较强容易被误判为重，单音节短元音或清辅音词则因声学线索弱容易漏检，这些正是后文误差分析的来源。

### 强调增量如何只加给重读词

得到掩码后，3 个强调方差预测器分别学习音高、能量和时长的增量，结构与基础预测器相同，都是两层卷积加 ReLU 和丢弃，输出层零初始化以保证训练起点处适应后韵律等于基线韵律，推理时对掩码为 0 的音素增量乘零直接丢弃，对掩码为 1 的音素把增量加到基线预测上。

这种门控相加的直接效果是重读词获得升高的音高、增大的能量和拉长的时长，而非重读词完全不受影响，适应后韵律再送入时长扩展器和解码器，因此重读的实现被限制在韵律层面而不改变说话人音色。

可控合成复用同一条路，只是把掩码换成用户指定的 01 串从而绕过聚类头，论文用同一句不同重读位置产生不同韵律实现和不同含义为例说明控制确实改变了输出而不需重训。

训练中增量还有额外监督，方差目标取当前伪标签下强调区平均韵律减去整句平均韵律作为每个强调音素的统一目标，非强调区目标为零，能量项再乘 0.5 以降低权重，并把目标归一化到 0 到 2 之间保持稳定，目标每个轮次随伪标签更新，因此是自举而非人工标注。

### 联合训练如何把两件事互相带好

总目标把重构部分与聚类部分加权相加，权重记为 alpha，论文主实验取 1.0，重构部分包括梅尔损失、后网络损失和对适应后韵律的音高能量时长损失，再加上对增量本身的方差损失，聚类部分包括 KL 损失和防止所有词塌到一簇的平衡损失，平衡项惩罚簇占比偏离 0.5。

**重构损失 × 聚类损失：** 重构损失监督梅尔谱和适应后韵律贴近真实目标保证合成质量，聚类损失用自增强的分布距离和防塌缩项让两个簇分开保证可分性，两者加权相加使检测和合成在同一优化循环里互相促进。

总目标的写法是重构损失加 alpha 乘以聚类与平衡损失之和，alpha 控制合成质量与可分性之间的相对强度，论文从预训练 FastSpeech 2 检查点出发训练 100,000 步，用 Adam 和余弦重启，学习率 1 乘 10 的负 5 次方，批量为 8。

\[\mathcal{L}_{\text{total}}=\mathcal{L}_{\text{recon}}+\alpha\cdot(\mathcal{L}_{\text{kl}}+\mathcal{L}_{\text{bal}})\]

防塌缩项的写法是对第一个簇占比减 0.5 再平方，占比由软分配的簇频率算出，当两簇均衡时为零，当全部偏向一簇时最大，它不提供重读信息，只维持二分结构。

\[\mathcal{L}_{\text{bal}}=\left(\frac{f_{0}}{f_{0}+f_{1}}-0.5\right)^{2}\]

每个轮次的顺序是先前向得到基线韵律、词向量、软分配和掩码，再算适应后韵律和频谱，1 次反向同时更新编码器、基础预测器、聚类中心、强调预测器和解码器，然后收集全训练集词向量更新硬伪标签并重算方差目标，这种反馈使更好的分离带来更准的掩码，更准的掩码带来更有针对性的增量，进而进一步拉开特征空间。

下面收敛图显示联合优化是稳定的，读图时先看左图两条曲线的相对位置与爬升阶段，再看右图 3 条损失的下降速度，左纵轴是分数越高越好，右纵轴是损失越低越好，不要把曲线下降都当变差。

> **看图路径：** 1. 看左图德语与意大利语两条 F1 曲线在前段的快速爬升与后段平稳；2. 看右图总损失与重构损失同步下降而聚类损失更早压低的相对速度；3. 注意横轴以千步为单位纵轴分别为分数与损失不要混读

[![原论文 Figure 7：Training convergence over 100k steps.](https://arxiv.org/html/2611.19832v1/figures/fig_convergence.png)](https://arxiv.org/html/2611.19832v1/figures/fig_convergence.png)

*论文图 6。原论文 Figure 7:：“Training convergence over 100k steps.”。*

从像素可见，左图橙色意大利语线全程略高于蓝色德语线，前 2 到 30,000 步快速上升后逐渐平稳，右图灰色总损失与蓝色重构损失几乎重合下降，紫色聚类损失起点低且很快贴近零轴，这支持论文所说的聚类先稳定而合成通路随后适应的判断，但原文未报告梯度是否截断或中心与编码器更新速度是否解耦，缺的这一项意味着复现时若出现震荡，可尝试先固定编码器热身聚类再放开联合训练作为替代做法。

### 在哪些语音上训练，在哪些标注上评测

论文分两条轨道，非母语轨道在 ISLE 上训练和评测，包含德语和意大利语口音的英语朗读，共 46 人约 5.09 小时，词级重读标注是按与 Tatoeba 相同的协议额外标注的 2000 句，每种母语背景 1000 句，训练和验证划分兼顾年龄性别和水平，标注仅用于评测，训练全程不可见。

母语轨道分别在 LibriTTS 干净 100 小时子集约 59.23 小时 264 人和 VCTK 约 4.35 小时 20 人上训练，均无重读标注，重读评测用 3 个测试集，Tatoeba 人工标注的 993 句、TinyStress-15k 合成的 1000 句测试句和 EmphAssess 的 3652 句，合成听感评测用 LibriTTS 和 VCTK 测试句。

为理解不同标注惯例下的难度，先看各标注集的重读比例分布，比较问题是各数据集的重读定义是否一致，指标是重读词占比，条件是按各自原始标注统计而不重采样。

| Dataset | Words | Stressed | Unstressed | % Str. |
| --- | --- | --- | --- | --- |
| ISLE GER | 27,136 | 17,082 | 10,054 | 62.9 |
| ISLE ITA | 25,225 | 15,848 | 9,377 | 62.8 |
| Tatoeba | 6,720 | 712 | 6,008 | 10.6 |
| TinyStress-15k | 195,000 | 48,752 | 146,248 | 25.0 |
| EmphAssess | 35,371 | 29,216 | 6,155 | 82.6 |

该表支撑的判断是各集分布差异很大，ISLE 德语和意大利语约 62.9% 和 62.8% 为重读，Tatoeba 仅 10.6%，TinyStress-15k 为 25.0%，而 EmphAssess 高达 82.6%，这种 10.6% 到 82.6% 的跨度恰好检验模型在不同标注惯例下的稳健性，限制是不能跨表直接比绝对 F1，因为任务难度和正负比例完全不同，读者应把后文母语结果理解为在各自分布下的相对基线比较。

基线分两类，检测侧有在 FastSpeech 2 嵌入上做 K 均值的无监督方法和在同样嵌入上训练的 DNN，以及 SupraDoRAL 和 WhiStress 等有监督方法，合成侧是无任何强调机制的基础 FastSpeech 2，消融另设交替优化但梯度不跨阶段的级联基线，其第二阶段用 K 均值加 DNN 且置信度低于 0.8 时回退到 K 均值。

听感实验有 35 名背景混合的听者完成三项测试，自然度打分加偏好、给定红字重读词的重读偏好含两者相同和两者皆不好选项、与真人参考比相似度的 ABX，每项含约 22% 的重复题做一致性检查，并随机分配 AB 顺序，平均每题低于 5 秒或重复题不一致超 40% 会被标记审查。

### 重读找得准吗，合成听起来更好吗

先看非母语发现能力，比较问题是在相同 ISLE 验证划分和相同词级 F1 指标下，无监督的 ProTTS 能否接近或超过需标签的有监督方法，指标方向是越高越好，公平条件是标注仅用于算分，原文报告 ProTTS 在德语 0.839 和意大利语 0.861 下，不仅超过无监督 K 均值的 0.76 和 0.71，还超过同表中有监督 DNN、SupraDoRAL 和 WhiStress 约 0.74 到 0.87 的区间，而论文自训的有监督上限为 0.901 和 0.932，剩余约 0.06 差距可能来自依赖语境而非声学线索的重读，该结论只在 ISLE 的朗读分布和约 63% 重读比例下成立，且意大利语更高可能源于夸张韵律对比更易分而非更符合母语规范。

再看母语与零样本迁移，比较问题是分别在 LibriTTS 和 VCTK 上训练后到未见过的 Tatoeba、TinyStress-15k 和 EmphAssess 上按各自标注算 F1，条件不同处在于标注惯例和合成与真人语音差异很大，因此不能跨表直接比绝对值，只能看相对基线，原文报告在 Tatoeba 上 LibriTTS 训练得 0.933 和 VCTK 训练得 0.921，超过 K 均值 0.71 和有监督 DNN 0.891，在另两套上 0.911 和 0.923 与有监督 WhiStress 的 0.901 和 0.93 相当，限制是 TinyStress 和 EmphAssess 含合成语音，其重读实现方式与训练数据不完全同分布，且 Tatoeba 重读比例极低，因而高 F1 部分来自对大量非重读的正确拒绝。

**自动模式 × 可控模式：** 自动模式用聚类头自己产生的掩码驱动合成评价整体自然度，可控模式用用户给定的掩码替换聚类输出评价指定重读是否可感知，前者检验发现是否可用，后者检验实现是否听从外部控制。

合成听感的比较问题是在相同句子下 ProTTS 输出与基础 FastSpeech 2 输出哪个更自然、更实现目标重读、更接近真人参考，35 人听评是核心证据，下面先看分数据集的平均意见分与自然度偏好，表前已交代比较对象与指标方向，表后只谈支撑与限制。

| Dataset | Base FS2 | ProTTS |
| --- | --- | --- |
| LibriTTS | 3.21 ± 0.18 | 3.89 ± 0.14 |
| VCTK | 3.04 ± 0.16 | 4.02 ± 0.12 |
| Overall | 3.12 ± 0.14 | 3.96 ± 0.11 |

该表支撑 ProTTS 在两套母语数据上都稳定提升，VCTK 从 3.04 到 4.02 的增量略大于 LibriTTS 从 3.21 到 3.89，且偏好均超 80%，总体为 3.96 对 3.12 和 83.5% 对 16.5%，限制是分数仍未到满分 5，且 VCTK 基线更低因而增量大不等于绝对质量更高，读者应将其与下表重读偏好对照，看自然度与重读实现是否同向。

再看按来源分的重读偏好，比较问题是自动模式用聚类掩码与可控通用句用人工掩码时，听者认为哪边更好地实现了标红目标词，指标是四选项百分比，条件是目标词在界面标红且顺序随机。

| Dataset | ProTTS | Both | Neither | Base |
| --- | --- | --- | --- | --- |
| ISLE GER | 76.8 | 13.2 | 5.5 | 4.5 |
| ISLE ITA | 80.1 | 11.8 | 4.8 | 3.3 |
| Tatoeba | 79.4 | 12.1 | 4.6 | 3.9 |
| Generic (ctrl.) | 75.6 | 13.8 | 6.2 | 4.4 |
| Overall | 78.3 | 12.5 | 5.1 | 4.1 |

该表支撑意大利语 80.1% 略高于德语 76.8% 与检测 F1 高低方向一致，而可控通用句 75.6% 略低于自动模式，符合用户指定位置可能偏离模型学到的韵律常模的解释，负结果是仍有约 12.5% 两者相同和约 5% 两者皆不好，说明增量不是简单夸张而是仍有失败情形。

再看 ABX 相似度，比较问题是哪边生成的韵律更接近真人原录音，条件是忽略音色响度只比节奏重读，指标同样是四选项百分比。

| Dataset | ProTTS | Base | Both | Neither |
| --- | --- | --- | --- | --- |
| LibriTTS | 73.2 | 11.8 | 7.5 | 7.5 |
| VCTK | 70.1 | 13.4 | 6.8 | 9.7 |
| Overall | 71.8 | 12.5 | 7.2 | 8.5 |

该表支撑 LibriTTS 的 73.2% 略高于 VCTK 的 70.1%，总体 ProTTS 为 71.8% 对基线 12.5%，两者相同 7.2% 两者皆不好 8.5%，提示接近真人仍比听起来自然更难，ABX 的两者相同与皆不好合计约 15% 高于自然度组，未胜出项是仍有约一成听者认为都不像原录音。

下面这张听感结果图把三项偏好放在一起看，左柱显示均值与 95% 置信区间分离，右堆叠柱显示深蓝段占主导，读图后应回到分表确认 VCTK 与 LibriTTS 的差异，而不要只记总体 83.5%。

> **看图路径：** 1. 先看左图两根柱子的平均意见分高度与误差线是否分离；2. 再看右图三组堆叠柱中深蓝色 ProTTS 段在每组中的占比；3. 对照图例区分选择 ProTTS、两者相同、两者皆否与选择基线的含义

[![原论文 Figure 3：Subjective evaluation results. (a) MOS naturalness ratings with 95% CIs.](https://arxiv.org/html/2611.19832v1/figures/synthesis_results.png)](https://arxiv.org/html/2611.19832v1/figures/synthesis_results.png)

*论文图 3。原论文 Figure 3:：“Subjective evaluation results. (a) MOS naturalness ratings with 95% CIs. (b) Listener preference (%) across naturalness, stress, and ABX similarity tests.”。*

从像素可见，左图 ProTTS 柱标注 3.96 加减 0.11 明显高于灰色基线 3.12 加减 0.14，且误差线不重叠，右图自然度、重读和 ABX 3 组中深蓝色分别标 83.5%、78.3% 和 71.8%，顶部灰色基线段分别为 16.5%、约 4% 和 12.5%，中间浅蓝与橙色为两者相同与皆不好，这种结构说明提升在 3 类任务上同向，但 ABX 的两者相同与皆不好合计更高，提示接近真人比听起来自然更难。

### 联合相对级联好多少，特征和跨域表现如何

消融要回答的第一个问题是在相同 ISLE 数据和相同 F1 下，1 次前向反向同时更新的联合训练是否优于 2 阶段交替但梯度不跨界的级联，第二个是仅用于 K 均值初始化的原始特征子集选时长加音高还是能量加时长加音高，第 3 个是从母语训练迁到非母语测试时损失多少。

原文报告联合高于级联，级联为 0.803 和 0.831，差距约 3 到 4 个百分点，说明共享特征空间确有增益，初始化用时长加音高的 0.731 和 0.782 明显超过全量能量时长音高的 0.664 和 0.675，因而主实验选前者初始化但训练仍用完整 521 维，母语迁到非母语降到 LibriTTS 的 0.781 和 0.752 以及 VCTK 的 0.764 和 0.73，且德语高于意大利语，与英语同为重音计时而意大利语为音节计时的类型学解释一致，限制是跨域仍低于域内，且只覆盖德意两种口音，不能推广到声调语言背景。

特征选择的细节值得展开，初始化只看原始基线预测的裸特征，而不看训练后的适配特征，能量在初始化阶段引入噪声，但在联合训练后对可分性有贡献，因此论文对能量方差损失降权 0.5，这种先排除后加回的安排说明初始化与训练用的不是同一表示。

下面这张嵌入散点图直接检验联合训练是否塑造了特征空间，读图时关注两色重叠面积而非单个点的位置，左为基线韵律，右为适应后韵律，颜色按真实重读标注。

> **看图路径：** 1. 对比左右两幅散点中黄色非重读与紫色重读点的重叠程度；2. 看标题给出的 K 均值准确率从 67.0% 到 87.2% 的变化；3. 注意红色虚线区域只是示意重叠区不要当作模型输出的决策边界

[![原论文 Figure 2：PCA of word-level EDP embeddings on ISLE, colored by ground-truth stress.](https://arxiv.org/html/2611.19832v1/figures/fig_pca_clustering.png)](https://arxiv.org/html/2611.19832v1/figures/fig_pca_clustering.png)

*论文图 2。原论文 Figure 2:：“PCA of word-level EDP embeddings on ISLE, colored by ground-truth stress.”。*

从像素可见，左图黄紫两色大面积混杂，标题 K 均值准确率仅 67.0%，右图黄色集中在左、紫色集中在右，标题升至 87.2%，红色虚线重叠区明显缩小，这支持强调门控迫使模型拉开两类表示的机制解释，但限制是可视化用 PCA 降维且颜色来自真值，并非模型在推理时可见的信息，未胜出项是即使右图仍有中间混杂带，对应内容词误重和短元音漏检两类误差，功能词因弱轮廓易分对而内容词易过预测，pub、cup、bus 等短词易漏检，且非母语对比弱时更难。

### 哪些词仍易错，方法边界在哪里

论文明确承认只用音高、能量和时长 3 类声学线索，因此凡依赖语篇上下文、语用意图或特定音段属性的重读都可能恢复不了，误差集中在内容词，一是本不重的内容词因本身较强被过预测，二是短元音或清辅音的单音节内容词因线索弱被漏检。

建模假设是二元 K 等于 2，而自然重读是连续的轻重程度，当前掩码非 0 即 1，无法表达弱重与强重的区别，未来可用簇置信度做软缩放，但本文未实现。

评测只覆盖德意两种非母语背景，未涉及汉语或泰语等声调语言背景，其韵律与英语重读的交互可能完全不同，架构只在 FastSpeech 2 上验证，未在自回归或扩散模型上验证，而后者的变化适配器结构不同，因此不能直接断言可迁移。

汇聚用词内平均池化会稀释多音节词中单个重读音节的信号，论文提出音节级变体可能更好，但未给出结果，因此长词上的数字应谨慎解读，此外训练需从预训练检查点出发并调 alpha 等超参数，单卡约 30M 加 1.5M 加约 1K 参数的规模虽小，但复现仍依赖预训练质量。

### 复现需要哪些条件和代价

复现起点是先自行准备 FastSpeech 2 预训练检查点，本文未提供经验证可达的作者检查点资源，应按未公开处理，论文从训练 900,000 步的检查点再训 100,000 步，学习率 1 乘 10 的负 5 次方，余弦重启，批量为 8，强调预测器与基础预测器同为两层卷积核 3 加 ReLU 加 0.5 丢弃，输出层零初始化，K 均值在时长加音高子集上做 20 次随机重启取稳。

数据侧需按附录准备 ISLE 的 2000 句词级标注仅用于评测、LibriTTS 干净子集 3000 训 469 验、VCTK 3000 训 509 验，以及 3 个测试集的划分，标注比例差异大，因而算 F1 时应保留各集原分布，不要重采样到均衡，否则会改变任务难度。

推理分 3 条路，检测只跑到聚类头输出 01 不生成音频，自动合成用聚类掩码驱动增量再经解码和 HiFi-GAN，可控合成把掩码换成用户串，后者无需重训，论文称代码与模型接受后公开，但本次未获得经验证可达的作者资源链接，因此应按未公开处理，第三方链接也不代表作者已开源。

成本上原文只给参数量和单卡信息，未报告训练时长、推理延迟与帧率，重构与聚类损失曲线只给趋势无数值表，因此不能承诺更快或更省，复现时建议先复现收敛图的平稳性再看 F1，若震荡可参考上文固定编码器热身的替代做法。

### 什么时候值得试，第一步做什么还缺什么验证

当任务同时需要知道哪里该重和把重读读得自然，并允许用户改重读位置时值得尝试 ProTTS，例如有声书的多义句、语音助手和计算机辅助语言学习中的纠正反馈，因为它在一个模型里给出检测标签和可控合成而不需要词级标注。

若只需要通用风格变化，或已有高质量人工重读标签，则不必引入聚类与门控，直接用有监督强调控制更简单，若只有单音节短词或高度依赖上下文的语篇重读，则纯声学方案预期有限，应先补文本或语言模型特征。

第一步是复现自动模式在域内数据上的 F1 与听感增量，并检查 PCA 分离是否从约 67% 向约 87% 方向移动，再切到可控模式用同一句不同重读位置听辨含义是否变化，最后再做母语到目标口音的跨域测试，不要把跨域数字当部署保证。

还缺的验证包括声调母语背景、多音节长词的音节级建模、连续重读程度的软控制，以及自回归或扩散骨干上的有效性，这些在原文局限中已点出但未给出数据，任何超出 ISLE、Tatoeba、TinyStress-15k 和 EmphAssess 分布的结论都应视为待验证而非已证明。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.19832v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-17 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-17/)
