---
title: "ASR-Protected Fusion and Reference-Anchored Policy Optimization for Joint ASR and Word-Level Speech Anti-Spoofing"
date: 2026-10-27
draft: false
tags: [语音伪造检测, 语音识别, 强化学习, 模型融合, 音频大模型]
categories: [论文速递]
description: "论文把部分伪造检测做成带伪造标记的语音识别，用受保护子空间融合补充伪造线索并用参照锚定的策略优化同时改进转写和词级定位，在五个数据集的平均词错误率和词级 F1 上优于所比较的基线，但域外词级定位仍有明显下降且多任务设置并非处处有益。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.34156"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "带标签的语音识别：一次转写并标出被伪造的词"
paper_digest_original_title: "ASR-Protected Fusion and Reference-Anchored Policy Optimization for Joint ASR and Word-Level Speech Anti-Spoofing"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.34156v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.34156v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.34156v1.pdf"
paper_digest_primary_task: "语音伪造检测"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-spoofing","label":"语音伪造检测"},{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"method","id":"method.model-combination","label":"模型融合"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把部分伪造检测做成带伪造标记的语音识别，用受保护子空间融合补充伪造线索并用参照锚定的策略优化同时改进转写和词级定位，在五个数据集的平均词错误率和词级 F1 上优于所比较的基线，但域外词级定位仍有明显下降且多任务设置并非处处有益。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xueping Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiaoxiao Miao"},{"affiliations":["School of Artificial Intelligence, The Chinese University of Hong Kong, Shenzhen, China"],"name":"Tiantian Feng"},{"affiliations":["School of Artificial Intelligence, The Chinese University of Hong Kong, Shenzhen, China"],"name":"Ming Li"}]
paper_digest_abstract_sha256: "081b74f56f9b7a56535e45cad9520a7a24d7de8f33cfd6f85c605b2fe3fc8303"
paper_digest_sidecars: {"citation.bib":{"sha256":"ea69493f17130747c1df9d0852bd97d4378da4790bcd87836eab2b06c0d74343","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34156/citation.bib"},"citation.json":{"sha256":"23cebac01cc5f07aa625f35101a4c94b1ced6d0e690350e2d35a30d803829a81","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34156/citation.json"},"citation.ris":{"sha256":"27583fb0b4194ce08e3e2ce572fb02f09dbe213bcef4c716fe81b3676d039f2d","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34156/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"23ca056aa81aae4a0e1869eb9106cff3f99e492776a996af7aaf5384bb838563","url":"/audio-paper-digest-blog/data/papers/2026-10-27/2610-34156/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "36972e795744ad096638ccddb14b567ab4c49db25729ab4019f18bc8d06e7956"
paper_digest_api_reader_plan_sha256: "71559da2381a33cf590b5b4771978931fdd3247c2dce115e047ab2cad65da1dd"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "a361cb3f2bbd6d06b4967f92089363763021a19325f5bcac8057a57c17a9fc04"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "103e0f3eb5ca72876fe561e9ebadbde3b89aaf89d0046ae68369e91868de50fa"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "2d16b0d8f81c5220c7f2b8e50c16b1066fbaf0323a821727b3d05d7652d9af66"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "10a8148f0c2588cc4c51ac4408f016ce36f5c6eeede44b2af968d2dff95caddd"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 带标签的语音识别：一次转写并标出被伪造的词

> 英文题目：*[ASR-Protected Fusion and Reference-Anchored Policy Optimization for Joint ASR and Word-Level Speech Anti-Spoofing](https://arxiv.org/abs/2610.34156v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频伪造检测](/audio-paper-digest-blog/papers/?concept=task.audio-forgery) → [语音伪造检测](/audio-paper-digest-blog/papers/?concept=task.speech-spoofing)；[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)
- **研究方法**：[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)；[模型融合](/audio-paper-digest-blog/papers/?concept=method.model-combination)
- **模型家族**：[音频大模型](/audio-paper-digest-blog/papers/?concept=model_family.audio-language)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.2/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Xueping Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiaoxiao Miao：机构信息未能在本次解析中与作者逐人可靠绑定
- Tiantian Feng：School of Artificial Intelligence, The Chinese University of Hong Kong, Shenzhen, China
- Ming Li：School of Artificial Intelligence, The Chinese University of Hong Kong, Shenzhen, China

## 📌 核心摘要

读者需要理解的对象是一段可能被局部篡改的语音，困难是既要转写出文字，又要指出哪几个词不可信，而传统做法先预测伪造时间区间再映射到词，容易受转写和边界误差影响。论文把任务定为带标记的语音识别（tagged ASR）：输入波形，输出包含文字和伪造标记的序列，伪造词用 `<TOF>` 和 `<EOF>` 包裹。处理过程先用两个冻结编码器分别提取识别特征和伪造线索，再用受保护子空间门控融合（ASR-Protected Subspace Gated Fusion，APSGF）把伪造信息只加入识别特征的正交补空间，随后由语言模型生成带标记文本，最后用参考锚定策略优化（Reference-Anchored Policy Optimization，RAPO）按转写与标记联合奖励微调。与直接混合特征或组内比较奖励的方法不同，该设计显式保留识别主方向，并用冻结参考模型的单样本奖励差作为优势。多任务设置下本文方法在五集平均词错误率上达到 0.054，词级 macro F1 四集平均达到 0.901，优于对应的监督微调基线。结论适用于英文朗读与局部替换类伪造，在域外 LlamaPartialSpoof 上词级定位仍下降，且原文未披露批量大小、训练设备和推理成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://anonymous.4open.science/r/asr_word_antispoofing_anon-38C6/> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/datasets/badayvedat/VCTK> — 链接可访问（HTTP 200）

- 第三方资源：<https://jitsi.github.io/jiwer> → <https://jitsi.github.io/jiwer/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么只给整句真假分不够用

这篇论文处理的是英语语音中的部分伪造问题。输入是一段波形，里面可能全部是真人语音，可能整句都是合成的，也可能只有其中几个词被替换或合成。攻击者只改关键词就能改变句意，而周围保留了原始声学上下文，整句级的检测器只能说这句话有问题，却说不清哪几个词不可信。

已有的一类做法是沿时间轴做帧级分类、相邻帧不一致检测或篡改边界检测，输出的是时间区间。要把时间区间对应到转写文本里的词，还需要词级时间戳和一次对齐，转写错了或边界估错了，词级标签就会跟着错。另一类是普通语音识别，输出只有文本，音频里的伪造信息在识别后就丢失了，下游系统拿到错误文本却不知道哪个词被动过。

论文因此把任务定为带标签的语音识别：模型读入波形，直接生成带标记的转写文本。每个被判定为伪造的词会被起始标记`<TOF>` 和结束标记`<EOF>` 包起来，真词则不加标记。这样转写和词级真伪判断是同一个生成过程的产物，不需要在推理时再做时间到词的映射，转写文本本身就携带了可用性信息。

### 已有路线在输入输出和运行阶段上有何不同

在伪造定位方面，PartialSpoof 研究嵌在真语音中的篡改段，给出帧或段级预测；HoliAntiSpoof 给出是否伪造、伪造方式、伪造区域以及语义影响的自然语言描述；还有工作把语音编辑分析做成编辑类型和编辑内容的结构化生成。这些输出都不是把真伪标签直接附在转写词上的形式，所以即使它们能判断范围，也不能直接被当作可用的带标签转写来使用。

与本文最接近的是把 Whisper 微调为同时生成转写和伪造词标记的工作，以及用语音大语言模型生成带词级伪造标签转写的工作。它们同样避免了推理时的戳到词映射，但原文指出这类联合生成仍存在转写困难，并对数据集特有的编辑模式敏感。本文正是在该路线上继续追问两个具体问题：怎样引入伪造声学特征又不破坏识别表示，以及怎样用兼顾 2 个任务的反馈优化联合输出。

在特征融合方面，SALMONN 把 Whisper 和 BEATs 特征通过窗口级 Q-Former 结合，WavLLM 把 Whisper 和 WavLM 结合以引入语言和说话人信息，MoWE-Audio 和 PaM 则按输入或提示选择编码器组合。门控融合和跨注意力也被用于控制不同表示的贡献。子空间约束方面，GPM 把参数更新限制在重要激活子空间的正交补上，SOP 把特征修改限制在正交方向以保留视觉上下文。本文的融合与它们的区别在于，约束对象是伪造特征向识别特征空间的注入位置，而不是参数更新本身。

### 论文要解决的两个具体困难是什么

第一个困难是特征层面的干扰。语音识别更依赖语言和音素信息，而伪造检测还需要合成或篡改留下的声学证据。如果把辅助伪造编码器的特征直接混入已预训练的识别表示，可能会冲掉对转写有用的信息。论文希望补上伪造线索，但不扰动识别特征中最重要的部分。

第二个困难是优化信号层面的不足。词元级交叉熵只管下一个词元的局部正确，不直接评价整句的转写加定位质量。组内相对奖励的方法需要同一样本的多次采样之间有足够的奖励差异，但在微调后策略已比较集中、低温采样下多次输出往往很相似，组内优势会很弱；若加大采样随机性，又可能引入不希望的策略漂移。论文希望用句子级奖励同时看转写和标签错误，同时避免依赖组内差异。

**部分伪造 × 带标签的语音识别：** 部分伪造指一句话里只有个别词被合成或替换，其余仍是真人语音；带标签的语音识别指模型在输出转写文本的同时，直接在被伪造的词两侧加上标记，二者搭配的意义是把真实性判断绑定到识别出的词上，避免先按时间定位再对齐词边界时引入的二次误差。

### 整个系统让一个样本经历了什么

沿着一个音频样本看，波形同时走两条编码路径。一路先转成对数梅尔频谱图，再送入冻结的 Qwen2.5-Omni 音频编码器，得到偏向识别的主表示；另一路把原始波形直接送入同样冻结的伪造线索编码器，得到帧级伪造线索。因为两路时间分辨率不同，论文把伪造特征按 Omni 音频词元个数分成对应段，用整数截断边界分段求平均，只做时间分辨率对齐，不需要词时间戳，也不把伪造预测映射到转写词。

下面这张总览图把上述分支、融合位置和生成目标画在了一起，读图时重点看两路特征在哪里汇合、文本提示从哪里进入语言模型。

> **看图路径：** 1. 先沿底部音频波形到两个编码器再到融合模块最后到大语言模型的主路径看数据流向；2. 对比左侧文本提示分支与右侧两路音频特征分支在语言模型处的汇合位置；3. 注意右上角参考输出与当前输出之间标注的训练阶段关系；4. 确认伪造词在示例输出中是如何被两个特殊标记包裹的

[![原论文 Figure 1：Overview of our framework for joint ASR and word-level spoof detection.](https://arxiv.org/html/2610.34156v1/main1.png)](https://arxiv.org/html/2610.34156v1/main1.png)

*论文图 1。原论文 Figure 1:：“Overview of our framework for joint ASR and word-level spoof detection.”。*

从图中可见，底部是音频波形，中间是两个冻结的编码器及其对齐操作，上方是标为受保护子空间门控融合的模块，输出的融合表示与分词器处理的文本提示一起进入大语言模型主干，顶部同时画出当前输出和参考输出以及训练阶段的对应关系。示例输出把伪造词 ignore 用`<TOF>` 和`<EOF>` 包起来，真词则保持原样，这正是训练和评测时要求的统一序列格式。多任务设置下，模型还会先输出整句伪造范围是无、部分还是全部，再生成带标记转写。

### 受保护子空间是如何从真人语音中算出来的

受保护子空间这个术语首次出现时需要解释实际作用：它指 Omni 表示空间中被选出来加以保护的一组方向，融合时不改变原始特征在这组方向上的投影。构造过程只用 VCTK 训练集中的真人语音，先用 Omni 音频编码器抽取特征，把收集到的特征向量堆成矩阵，再做奇异值分解，按累计解释方差达到 0.95 保留前 k 个右奇异向量，论文中 k 为 175。

\[X=U\Sigma W^{\top},\]

上式中矩阵被分解为左奇异向量、奇异值对角阵和右奇异向量转置，奇异值按从大到小排列，反映了不同方向上真人 Omni 特征的方差大小。取前 k 个方向就是抓住方差最大的那部分识别表示。

\[V=W_{[:,\,:k]}^{\top}\in\mathbb{R}^{k\times H},\]

上式把前 k 个右奇异向量转置后作为受保护基，每行是一个被保护的方向。它的正交补基记为另一矩阵，二者满足正交关系，因此融合只改动补子空间分量时，受保护子空间上的投影保持不变。下图上半部分展示了从真人 Omni 特征矩阵到分解再到两组基的完整分支，读图时注意两组基分别取自前 k 个和剩余的右奇异向量。

> **看图路径：** 1. 先看上半部分从真人特征矩阵到奇异值分解再到两组基的分支过程；2. 再看下半部分伪造特征经多层感知机映射与 Omni 特征经补基投影后维度如何对齐；3. 观察左右两个门向量分别作用在哪一条乘法支路上；4. 确认最终加法节点汇入了哪三项以及哪一项保留了原始 Omni 特征

[![原论文 Figure 2：Overview of ASR-Protected Subspace Gated Fusion (APSGF).](https://arxiv.org/html/2610.34156v1/main2.png)](https://arxiv.org/html/2610.34156v1/main2.png)

*论文图 2。原论文 Figure 2:：“Overview of ASR-Protected Subspace Gated Fusion (APSGF).”。*

从图中可见，上方粉色区域完成了保护基与互补基的构造，下方绿色区域完成了每个时间位置上的映射与门控加法，互补基从上半部分引到下半部分参与投影，伪造支路经过多层感知机后与投影后的 Omni 分量在同一维度空间相遇，左右两路门向量分别控制保留与注入，最终与原始 Omni 特征相加得到该时刻的融合向量。

### 伪造特征怎样被映射到同一补空间并做门控

Omni 特征维度与伪造特征维度不同，不能直接相加。论文对每个时间位置分别处理：伪造特征用一个两层多层感知机映射到补子空间的坐标维度，Omni 特征则用互补基的转置投影到同一坐标空间。这样两者维度一致，可以直接融合。

\[h^{\mathrm{omni}}=f_{\mathrm{omni}}\left(\operatorname{Mel}(x)\right)\in\mathbb{R}^{T\times H},\]

上式是 Omni 支路的起点，表示输入波形先算梅尔频谱再经 Omni 编码器得到时间长度为 T、维度为 H 的序列，它是后续保护与投影的基准表示。伪造支路的起点是直接对波形编码得到的不同时间长度和维度的序列，再经对齐得到同样长度为 T 的序列。

\[{h}^{\mathrm{spf}}_{t,B}=\mathrm{MLP}\left({h_{t}}^{\mathrm{spf}}\right)\in\mathbb{R}^{H-k}.\]

上式把该时刻的伪造向量映射为补空间坐标，输出维度为剩余维度数。Omni 在同一空间的坐标则通过补基转置乘以原始 Omni 向量得到，两者在同一坐标系下相遇。

\[{g}^{\mathrm{omni}}=\sigma\left(\mathrm{MLP}_{\mathrm{omni}}\left([{h_{t}}^{\mathrm{omni}};{h_{t}}^{\mathrm{spf}}]\right)\right),\]

上式是两个门之一的计算方式，把该时刻 Omni 向量与伪造向量拼接后送入独立的多层感知机再过 Sigmoid，得到每 1 维都在 0 到 1 之间的门向量。另一个伪造门结构相同但参数独立。前者控制补空间中 Omni 分量的保留比例，后者控制伪造映射分量的注入比例。最终融合是在原始 Omni 向量上，加上补基乘以门控后的补空间增量，其中 Omni 门减一的部分相当于先减去一部分原有补分量再加入门控后的两路分量。为使训练开始时接近原始 Omni 表示，伪造映射的最后一层初始化为零，Omni 门的偏置使门初值接近 1。

### 输出序列如何同时表示文本和词级真伪

融合后的序列与文本提示一起送入语言模型，按自回归方式逐词元生成。输出词元流里既有普通文本词元，也有作为标记的特殊词元。评测时先去掉标记得到纯转写，再按标记恢复每个词的二值伪造标签。两任务设置只生成带标记转写，多任务设置先生成整句伪造范围，再生成带标记转写。

**Qwen2.5-Omni 音频编码器 × 伪造线索编码器：** Qwen2.5-Omni 音频编码器负责提供已预训练的、偏向语言和音素的语音表示，是送入大语言模型的主干；伪造线索编码器是在 PartialSpoof 上用 MultiReso 方法预训练的辅助编码器，负责提取帧级的合成或篡改声学证据，二者分工后在融合处汇合，使主干保持识别能力的同时获得额外的真伪依据。

这种设计的代价是输出变长，且整句范围预测错误可能影响后续词标记，论文在结果部分也观察到多任务在域外词级指标上的下降，并提示需要进一步分析。好处是下游系统直接读转写就能知道哪个词不可信，不再依赖词边界时间戳。训练时音频编码器保持冻结，语言模型用 DoRA 更新，门控网络与语言模型联合更新，融合模块因此是在不破坏编码器的前提下学习如何注入信息。

**受保护子空间 × 正交补子空间：** 受保护子空间指由真人语音 Omni 特征的主奇异方向张成的子空间，融合时不允许改动它在该子空间上的投影；正交补子空间指剩下的其余方向，是唯一允许注入伪造信息的位置，二者搭配使伪造融合只发生在不干扰主识别特征的方向上。

**门控融合 × 双门：** 门控融合指用 0 到 1 之间的门向量按维度控制两种特征各保留多少；双门指分别从 Omni 特征和伪造特征拼接后预测 Omni 门和伪造门，一个管原有信息在补子空间的保留量，一个管新注入的信息量，组合后实现随输入自适应的融合强度。

### 两阶段训练如何从词元损失走到句子奖励

第 1 阶段是监督微调，用目标转写和伪造标记做 5 个轮次的词元级交叉熵训练，优化器用 AdamW，学习率按余弦衰减并有预热，语言模型通过 DoRA 更新。这 1 阶段让模型学会基本转写格式和标记位置，得到微调后的策略，作为第二阶段的起点和参照。

第二阶段是参照锚定的策略优化。对每个训练样本，从当前策略采样一个输出，采样温度设为 0.5 并配合截断候选集，使样本靠近贪心解码但保留少量随机性。奖励先去掉伪造标记，用 JiWER 按词对齐参考与预测转写算出识别词错误率，再按标记得到词级伪造标签并在对齐步骤上算出标签失配比例，两者平均后用 1 减去该均值作为句子奖励，同时惩罚转写错和标签错。

关键在于优势的构造：优化前先用冻结的微调后模型对每个样本生成贪心输出并算好参考奖励，训练中保持不变；当前采样输出的优势等于自身奖励减去该参考奖励。优势为正就增强该采样的长度归一化序列对数概率，为负就抑制它，同时用与冻结参考策略的 KL 散度约束策略漂移，优化器状态重新初始化后训练 1 个轮次。

**监督微调 × 参照锚定的策略优化：** 监督微调指用目标转写加伪造标记做词元级交叉熵训练，使模型先学会基本格式和对应关系；参照锚定的策略优化指在其后用句子级奖励继续优化，把单次采样的奖励与冻结的微调后模型的贪心奖励相减得到优势，二者搭配是先学对格式，再用兼顾转写和定位的整体奖励纠正序列行为。

### 数据、训练条件和指标是如何设定的

训练用了 4 个英语数据集的合集，共 330,000 句以上：VCTK 提供真人语音，PartialEdit 和 AV-Deepfake1M 提供词级部分伪造语音，SCDF 提供全合成语音。论文说明加入 VCTK 是为了减少学到说话人或内容相关的伪造捷径，因为 VCTK 的说话人和朗读文本常被用作合成源；加入全合成的 SCDF 是为了打散词汇内容与伪造标签的对应关系，因为部分伪造集中由语言模型挑选语义关键词替换可能带来词与伪造的语义捷径。评测用上述 4 个数据集的留出划分，外加 LlamaPartialSpoof 作为域外集，该集包含 3 万多句、由 6 种语音合成系统生成的部分编辑样本。

音频统一转单声道并重采样到 16 kHz，超过 40 秒的截断到前 40 秒并相应截断参考转写但保留标签，训练时用 RawBoost 做波形增强。受保护子空间按累计解释方差 0.95 取 k 为 175。微调学习率为 1×10 的负 5 次方，策略优化学习率为 5×10 的负 6 次方，组对比方法采样 8 个回答、温度 0.9、KL 系数 0.04，用于与新方法的对照。

指标方面，识别用语料级词错误率，越低越好；词级伪造检测用伪造与非伪造两类的 F1 平均得到的宏平均词 F1，越高越好，VCTK 因无伪造词不报告该指标；整句伪造范围分类用 3 类上的准确率，越高越好。两任务设置的整句范围由词级标签推断，多任务设置由模型直接预测。对齐用 JiWER 基于编辑距离实现，词的正确要求参考与预测的标记包裹方式一致。

### 词级转写加定位在五个集上表现如何

下表比较的是词级任务，比较问题是不同方法在相同 5 个评测集上的转写错误与词级定位能力。表中每个单元格为词错误率在前、词 F1 在后，平均列是 5 个集的词错误率均值和 4 个有伪造集的词 F1 均值，2 个方向分别是越低越好和越高越好。所选行保留了本文的两任务与多任务模型以及可比的已发表基线，条件差异在表后解释中说明。

| Models | AV | PE | LPS | Avg. |
| --- | --- | --- | --- | --- |
| W_VT | 0.141/0.223 | 0.043/0.321 | 0.068/0.884 | 0.099/0.543 |
| Ours_T | 0.081/0.969 | 0.032/0.853 | 0.110/0.838 | 0.069/0.898 |
| Ours_M | 0.065/0.975 | 0.024/0.907 | 0.086/0.759 | 0.054/0.901 |

从表中可见，本文多任务模型平均词错误率为 0.054、平均词 F1 为 0.901，两任务模型为 0.069 和 0.898，平均上都明显好于表中基线的平均水平。分集看，多任务在 AV-Deepfake1M 上为 0.065 和 0.975，在 PartialEdit 上为 0.024 和 0.907，在 SCDF 上为 0.089 和 0.964，在 VCTK 上词错误率为 0.004，在域外 LlamaPartialSpoof 上为 0.086 和 0.759。基线呈现明显的域内强、域外弱：微调于 LlamaPartialSpoof 的方法在该集上词 F1 达 0.886，但在另两个部分伪造集上只有 0.131 和 0.287；另一基线在域内 PartialEdit 上词 F1 为 0.827，但在域外集上降至 0.210 到 0.254。限制是各模型的训练域并不相同，表中基线的域内外划分与本文不同，且 VCTK 的 0.004 因文本重复及与已有伪造语料的重叠需谨慎解读；多任务在域外词 F1 上反而低于两任务的 0.838，论文推测可能是范围预测错误影响后续词标记，但明确表示仍需进一步分析。

### 整句伪造范围分类是否同样受益

下表比较的是整句伪造范围分类，比较问题是直接预测范围的多任务模型与从词标记推断范围的两任务模型，以及其他基线在 5 个集上的三分类准确率。指标为整句分类准确率，越高越好，平均列为 5 个集的均值。

| Models | AV | PE | LPS | Avg. |
| --- | --- | --- | --- | --- |
| W_VT | 0.888 | 0.568 | 0.946 | 0.673 |
| Ours_T | 0.960 | 0.811 | 0.454 | 0.824 |
| Ours_M | 1.000 | 0.974 | 0.805 | 0.952 |

从表中可见，多任务模型平均准确率达 0.952，在 AV-Deepfake1M、PartialEdit、SCDF、VCTK 上分别为 1.000、0.974、0.983、1.000，在域外 LlamaPartialSpoof 上为 0.805。两任务模型平均为 0.824，在域外集上只有 0.454，说明直接预测范围对整句判断帮助很大。基线中另一方法平均为 0.799，其余两个基线平均只有 0.673 和 0.553。值得注意的反例是，该基线在 SCDF 上整句准确率有 0.866，但词 F1 只有 0.222，说明整句范围猜对并不能保证词级位置准确；同样，在 PartialEdit 上某基线词错误率低至 0.050，但词 F1 只有 0.287，说明转写准也不等于定位准。这支持论文把转写、词级定位、整句分类分开报告的做法。

### 融合与策略优化各自带来了什么变化

下表是多任务设置下的消融，比较问题是在相同训练和评测条件下，是否加入受保护融合与参照锚定优化对转写和词级定位的影响。每个单元格仍为词错误率在前、词 F1 在后，平均列定义与主结果表一致。

| APSGF | RAPO | AV | PE | LPS | Avg. |
| --- | --- | --- | --- | --- | --- |
| ✗ | ✗ | 0.086/0.967 | 0.026/0.873 | 0.088/0.720 | 0.069/0.874 |
| ✓ | ✗ | 0.061/0.977 | 0.033/0.907 | 0.093/0.719 | 0.058/0.891 |
| ✓ | ✓ | 0.065/0.975 | 0.024/0.907 | 0.086/0.759 | 0.054/0.901 |

从表中可见，无融合无优化的基线平均为 0.069 和 0.874；只加融合后变为 0.058 和 0.891，说明在补充伪造特征的同时转写没有变差反而变好；只加策略优化后变为 0.057 和 0.901，词级定位提升更明显；两者都加后为 0.054 和 0.901，取得最低的平均词错误率并保持了定位水平。分集看，策略优化对域外集的词 F1 从 0.719 左右提升到 0.759 左右有一定帮助，但域外绝对值仍明显低于域内。

论文还报告了与组相对优化的对照：在融合基础上加组方法平均为 0.068 和 0.872，无明显整体改进，而加新方法为 0.054 和 0.901，支持新方法更适合微调后已集中的策略。限制是该对照只在本文的采样温度、候选截断和 KL 设置下成立，换超参数后结论可能变化。

### 参数代价与简单融合对照说明了什么

下表给出消融模型的参数量，比较问题是引入融合模块是否带来不可忽略的模型规模和可训练参数变化。总量包含冻结的主干与辅助编码器，可训练量为 DoRA 权重及相关模块。

| APSGF | RAPO | Total (M) | Trainable (M) |
| --- | --- | --- | --- |
| ✗ | ✗ | 4731.7 | 28.2 |
| ✓ | ✗ | 5065.5 | 46.6 |
| ✓ | ✓ | 5065.5 | 46.6 |

从表中可见，无融合时总量为 4731.7M、可训练量为 28.2M，加入融合后总量为 5065.5M、可训练量为 46.6M，策略优化本身不增加模型参数。这说明融合的代价主要是一次性的辅助编码器与门控网络，优化阶段的代价是额外的采样与奖励计算而非参数量。论文另设了无保护的简单双门融合作为对照：它与新融合门数相同但允许在整个 Omni 空间融合，结果是平均词错误率从 0.069 降到 0.065，显示辅助声学特征本身就有价值；而新融合进一步降到 0.058 且词 F1 升到 0.891，支持保护机制带来了超出单纯加特征的增益。尚未评测的范围包括不同主干模型上的通用性，以及删除式编辑等当前标记格式无法表示的篡改类型。

### 哪些结论成立需要满足什么条件

首先，所有主结果都只在英语、有转写文本的子集上成立，SCDF 的划分是随机 4 比 1 划分而非官方划分，LlamaPartialSpoof 只用了其中一个子集作为域外测试，因此换语言、换划分或换合成系统后数字会变化。其次，VCTK 上的极低词错误率受到文本重复和与已有伪造语料重叠的影响，不能直接理解为通用识别能力的上限。

其次，多任务并非在所有指标上都占优：它在整句分类和平均转写上最好，但在域外词级 F1 上低于两任务模型，说明先预测范围再生成标记的级联可能在域外引入误差。整句准确率高也不代表词级定位准，阅读时应把两类指标分开看。

最后，方法层面只验证了单个音频语言模型，融合的保护维度依赖真人特征的统计性质，策略优化依赖冻结参考模型的贪心奖励质量，超参数调优有限。论文明确列出未验证其他声学语义任务、未验证跨架构通用性、无法检测删除式编辑等局限，这些都不是技术缺陷的指责，而是复用结论前必须补做的验证。

### 要复现第一步该准备什么

复现时先按附录准备数据子集和划分：训练用 VCTK 全集、PartialEdit 的 E1 和 E2、AV-Deepfake1M 中含语音伪造的音频、SCDF 英语部分的五分之四，评测用各自留出部分加 LlamaPartialSpoof 的指定子集，并把音频统一为单声道 16 kHz、长句截断与 RawBoost 增强对齐原文。转写提示要与原文一致，两任务提示要求只包裹伪造词、无伪造则输出纯转写，多任务提示要求先输出范围再输出带标记转写。

模型侧需要冻结 Qwen2.5-Omni 音频编码器与伪造线索编码器，用真人特征做奇异值分解并按累计方差 0.95 定 k，再实现补空间映射与双门融合，并按原文的零初始化与门偏置使初始融合接近原始 Omni 表示。训练先做监督微调，再冻结微调后模型算参考奖励并做单采样策略优化，采样与 KL 设置保持原文。评测用 JiWER 对齐并按标记包裹是否一致判定词正确，分别统计词错误率、宏平均词 F1 和整句准确率。

关于资源，论文正文给出匿名代码链接，资源核验显示该匿名链接当前可访问，但它是匿名托管而非长期仓库，不能等同于作者已正式开源或权重可下载；VCTK 与 JiWER 链接是论文提到的第三方资源，不证明作者已开源。复现前应先确认所用代码版本、数据许可与模型权重获取方式，再跑通单集流水线。

### 什么时候值得尝试以及还缺哪项验证

当任务要求转写文本直接可用、且必须知道哪个词不可信时，这种带标记的联合生成值得尝试；当已有识别主干很好、不希望被辅助特征冲掉时，受保护子空间的思路值得借鉴；当微调后输出已比较集中、组内奖励差异很小时，用冻结参考奖励做单采样优化可能比组内对比更稳定。但三者的代价也要接受：输出变长且范围错误可能连带词标记，融合增加约数百 M 总量与约 18M 可训练量，策略优化需要额外的采样与奖励计算。

还缺的验证包括跨主干和跨语言的重复实验、删除式编辑等新篡改类型的扩展、以及在不同采样温度和 KL 强度下的敏感性分析。初学者复述时可抓住一条主线：两路编码只做时间对齐，融合只发生在补空间，输出用标记绑定词与真伪，2 阶段训练先学格式再用整句奖励纠偏，实验结论只在上述数据子集、划分和指标定义下成立。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.34156v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-27 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-27/)
