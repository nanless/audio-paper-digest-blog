---
title: "Factorized Delayed Streams Modeling for LLM-based Streaming ASR"
date: 2026-10-11
draft: false
tags: [语音识别, 自回归模型, 流式处理, 语音, LoRA]
categories: [论文速递]
description: "论文解决用解码器大语言模型做流式语音识别时等待与出词耦合的问题，用等待概率加原词表分布的因子化结构，在日语和英语上取得更低错误率，并用等待步跳过大词表计算降低训练显存和推理开销，但纯文本困惑度仍高于原始模型。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.04333"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把等待和选词分开：流式语音识别的因子化延迟流建模"
paper_digest_original_title: "Factorized Delayed Streams Modeling for LLM-based Streaming ASR"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.04333v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.04333v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.04333v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"method","id":"method.lora","label":"LoRA"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文解决用解码器大语言模型做流式语音识别时等待与出词耦合的问题，用等待概率加原词表分布的因子化结构，在日语和英语上取得更低错误率，并用等待步跳过大词表计算降低训练显存和推理开销，但纯文本困惑度仍高于原始模型。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tatsunari Takagi"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kai Washizaki"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Atsushi Kojima"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lianbo Liu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Koki Nikaido"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yui Sudo"}]
paper_digest_abstract_sha256: "c8490af9a4091c77687b92a8ed5f9568a6c1487905a44cacc563a17915b96c1a"
paper_digest_sidecars: {"citation.bib":{"sha256":"471c0c53548ac3f0f8a5bdefd416a87d26a703263e9973423a5de934cae9435f","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-04333/citation.bib"},"citation.json":{"sha256":"5acfe8dd97930ab9052105042f3de874ff845b0f389262aed5476357e367cb54","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-04333/citation.json"},"citation.ris":{"sha256":"bc1dd8698c3fe5bf41fc97e42b7a33709c468569c259bb5265bda2d40b03740b","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-04333/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"686de218ce8db0bc4da98b9f681dab19a72c6da5092fb4165c9e0c24c6a1573c","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-04333/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "190bcd9ad51be4bfb09483d70444b2780f1ff9d9af57d83137b020c60f98c6ce"
paper_digest_api_reader_plan_sha256: "f9606ec3392e22df37ba6886e5e23747cf2a49cac4e72ea47389558f6b5dc04b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "a4adbcfb07dfe830066e6b73410d174ddce3d166b844069b5d0e79cce2a56971"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "e7a8e30e2153fba58fcb0b2451855721a7b758fa5c050a8c94dddc86bb5804bd"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "c466d1203b63c245013dec1a9a372ad8f36125b87ea274c410c962632edaf8a7"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "85bf5ff769aee4c6dd32dd3a4871e2f3d633372f099f6b5eb36a4aecb0c7b4b1"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把等待和选词分开：流式语音识别的因子化延迟流建模

> 英文题目：*[Factorized Delayed Streams Modeling for LLM-based Streaming ASR](https://arxiv.org/abs/2610.04333v1)*

> 标签：#语音识别 | #自回归模型 | #流式处理 | #语音 | #LoRA
>
> 评分：**6.5/10** | 创新 1/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Tatsunari Takagi：机构信息未在 arXiv HTML 中可靠披露
- Kai Washizaki：机构信息未在 arXiv HTML 中可靠披露
- Atsushi Kojima：机构信息未在 arXiv HTML 中可靠披露
- Lianbo Liu：机构信息未在 arXiv HTML 中可靠披露
- Koki Nikaido：机构信息未在 arXiv HTML 中可靠披露
- Yui Sudo：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

流式自动语音识别需要在语音不断到达时逐帧决定等待还是输出文字，延迟约束下等待与输出耦合是主要难点。延迟流建模把声学流与右移固定延迟的文本流对齐到同一时间轴，用同一个解码器式大语言模型预测等待填充符`<p>`、词起始符`<w>`和普通文本，输出是原词表加2个专用符号的联合softmax。论文先做消融，去掉`<w>`后识别性能保持相当，说明只需要保留一个等待符号。基于此提出的分解式延迟流建模分两步决策：解码器隐状态先经标量等待头做sigmoid得到等待概率，其输出直接决定是否进入词预测；若判定等待则输出`<p>`并跳过词表投影，若判定输出则由原大语言模型输出头给出原词表上的词分布，两者按等待概率与1减等待概率相乘得到完整输出概率。480 ms目标延迟和贪心解码下，F-DSM在Corpus of Spontaneous Japanese平均字符错误率为6.45%，低于DSM去词起始符版本的6.60%；在LibriSpeech平均词错误率为6.17%，低于对照的6.61%。该结论适用于160 ms至800 ms的延迟设置，更长语音、更大批量和束搜索下的行为尚未验证。F-DSM在批量32时把训练显存从约61 GiB降到约18 GiB，推理跳过多数词表计算但端到端加速较小。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 流式识别要解决什么输入输出问题

流式语音识别的输入是不断到来的语音波形，输出是逐步生成的文字。模型不能等整句话说完再 1 次性转写，而要在每一小段时间帧上做判断：是已经有足够声音证据可以写出下一个词，还是证据不足需要继续等待。等待与输出的交替贯穿整个 utterance，输出的文字顺序还要与语音内容对应。评价时日语用字符错误率，英语用词错误率，都是越低越好。目标延迟是允许模型比真实对齐滞后多久再输出，例如 480 ms，延迟越短实时性越好，但声学证据越少，识别通常越难。

### 已有路线如何表示等待

在 CTC 和 RNN-T 这类经典流式结构里，等待有专门的表示，也就是空白符。它不是词表里的普通词，而是一个时间占位符，表示当前帧不输出标签。是否输出和输出哪个标签是两个不同的决定。用大语言模型做识别的动机是借用其较强的语言建模能力，但标准大语言模型是自回归生成文本，没有为连续到来的语音设计何时输出的机制。延迟流建模 DSM 的做法是让同一个解码器大语言模型同时处理按时间对齐的声学流和文本流，并把文本流整体推迟固定延迟，让模型能利用已到的声音和已生成的文字预测下一个符号。

**延迟流建模 DSM × 混合自回归 Transducer HAT：** 延迟流建模 DSM 指把声学流和文本流放在同一时间轴上并延迟文本流的流式识别框架，混合自回归 Transducer HAT 指把空白概率和非空标签分布相乘的因子化输出结构，前者提供流式输入组织方式，后者提供输出分解方式，组合后得到既保留延迟对齐又分离等待与选词的 F-DSM。

### 原文 DSM 把什么决定放在同一个分布里

原文 DSM 在原大语言模型词表之外增加了两个特殊符号：表示等待的填充标记 `<p>` 和表示词开始的词首标记 `<w>`。每个对齐帧的输出都在扩大后的词表上用同一个 Softmax 预测。也就是说，等待、词开始和普通文本词在同一个归一化分布里竞争。由于时间对齐序列里大量帧没有文本输出，`<p>` 作为目标出现的次数远多于任何单个文本词。论文指出这带来两个代价：一是即使只需要等待，也要计算覆盖整个大词表的投影和 Softmax。

二是与语音 timing 有关的特殊符号挤占了预训练学到的原词表分布。流式识别本来包含是否输出和输出哪一个词两个决定，DSM 把它们耦合在一个 Softmax 里，这就是本文要拆开的地方。

### 从联合预测到因子化预测的整体变化

方法的整体流程保持 DSM 的流式框架不变：因果声学编码器把语音变成帧级表示，经过两层音频投影适配器送入大语言模型解码器，解码器同时看到声学嵌入和已输出文本的嵌入，按延迟后的对齐逐帧预测。变化只在输出头。原来是一个扩大词表的大 Softmax，同时预测 `<p>`、`<w>` 和文本词。改进后先去掉 `<w>`，再把 `<p>` 的等待判断单独做成一个标量概率分支，文本词仍由原来的大语言模型输出头在原词表上预测。训练和推理都沿着对齐帧推进，只是等待帧可以跳过大词表计算。下面的示意图左侧是联合预测，右侧是分离后的两路预测及其损失汇合方式，读图时重点看输入如何分流到输出。

这张图左侧为原来同时预测等待、词首和文本的结构，右侧为分离等待与文本预测并保留原词表空间的结构，中间都经过因果声学编码器、适配器和大语言模型解码器。

> **看图路径：** 1. 先看左右两栏底部的语音波形与目标词如何按虚线对齐到帧；2. 再看左侧输出行是否同时出现 `<p>`、`<w>` 和普通词；3. 再看右侧输出行是否只剩 `<p>` 和普通词；4. 最后看右侧放大框中等待预测与标签预测如何汇入交叉熵损失

[![原论文 Figure 1：DSM (left) jointly predicts waiting `<p>`, word-start `<w>`, and text tokens; F-DSM (right) separates…](https://arxiv.org/html/2610.04333v1/F-DSM.png)](https://arxiv.org/html/2610.04333v1/F-DSM.png)

*论文图 1。原论文 Figure 1:：“DSM (left) jointly predicts waiting `<p>`, word-start `<w>`, and text tokens; F-DSM (right) separates waiting from text prediction over the original LLM vocabulary.”。*

从图中可以看到，左侧每个时间步的文本嵌入行混入了 `<p>` 和 `<w>` 的反馈，右侧反馈给解码器的主要是已输出的普通词，等待符号不再进入文本嵌入序列。右侧放大框明确画出解码器隐状态同时送入填充预测分支和标签预测分支，再按等待概率加权形成交叉熵损失。这种画法对应后文的因子化公式：是否等待走 Sigmoid 分支，选哪个词走原大词表 Softmax。

### 联合输出的计算与去掉词首标记的依据

在原来 DSM 里，记原大语言模型词表为 V，扩大后词表包含 V 再加 `<p>` 和 `<w>`。解码器在第 t 帧的隐状态为 h，输出分布是对扩大词表做 Softmax，每 1 帧都要算 1 次覆盖全部词的大矩阵投影，包括等待帧。词首标记 `<w>` 最初的作用是显式标出从填充到文本的切换，并帮助推理时抽取时间戳，但论文指出它对识别准确率是否必要并没有经过去掉它的对照。其他识别系统不依赖专用词首符号也能给出词级时间戳，因此作者先做消融：只删掉 `<w>` 而保持联合 Softmax，看识别是否还能保持。实验结论是去掉后仍有竞争力的识别性能，这为把特殊输出空间简化到只剩 `<p>` 铺平了路。此时剩下的 `<p>` 更像时间符号，而不是普通文本词。

\[P_{\mathrm{DSM}}(y_{t}=v\mid\mathbf{h}_{t})=\mathrm{Softmax}(\mathbf{W}_{\mathrm{DSM}}\mathbf{h}_{t})_{v},\]

**等待标记 `<p>` × 空白符 blank：** 等待标记 `<p>` 指对齐时间轴上没有文本输出时模型应输出的等待符号，空白符 blank 指 CTC 和 RNN-T 中表示不输出标签的时间占位符号，二者分工都是把何时输出和输出什么分开，搭配的意义是让流式识别的等待行为可以借用已有的空白符思想来单独建模。

### 等待概率分支和原词表分支如何分工

因子化后的模型记为 F-DSM。它用一个填充预测头计算等待概率 b，做法是对解码器隐状态做标量线性变换再过 Sigmoid 函数，只需要向量内积量级的计算。文本分支则沿用预训练的大语言模型输出矩阵，在原词表 V 上做 Softmax，得到给定隐状态下每个普通词的条件概率。前者的投影代价与隐状态维度同量级，后者是词表大小乘以隐状态维度的量级，大词表分支明显更贵。最终输出概率是分段定义的：如果目标是 `<p>`，概率就是 b。

如果目标是原词表中的词，概率就是 1 减去 b 再乘以该词在原词表分布中的概率。这种写法把 `<p>` 移出大语言模型词表，使文本预测头与预训练时的输出空间一致。

\[b_{t}=\sigma\left(\mathbf{w}_{p}^{\top}\mathbf{h}_{t}+c_{p}\right),\]

\[P_{\mathrm{LLM}}(v\mid\mathbf{h}_{t})=\mathrm{Softmax}\left(\mathbf{W}_{\mathrm{LLM}}\mathbf{h}_{t}\right)_{v},\hskip 9.24994ptv\in\mathcal{V}.\]

\[P_{\mathrm{F\mathchar 45DSM}}(y_{t}\mid\mathbf{h}_{t})=\begin{cases}b_{t},&y_{t}=\texttt{`<p>`},\\[5.69054pt] (1-b_{t})P_{\mathrm{LLM}}(y_{t}\mid\mathbf{h}_{t}),&y_{t}\in\mathcal{V}.\end{cases}\]

**等待概率 × 文本词分布：** 等待概率指模型判断当前帧是否继续等待的标量概率，文本词分布指在决定输出时从原大语言模型词表中选具体词的分布，前者管是否输出，后者管输出哪一个，组合后模型先做二选一的时机判断，再做大词表选择，避免两者在同一个 Softmax 里互相挤占。

### 损失如何按目标类型分开计算

训练使用交叉熵损失，但按目标类型写成两段。当目标是 `<p>` 时，损失只与等待概率有关，是负的 log b，此时不需要计算大词表的投影和 Softmax，因此可以省掉大词表 logits 占用的显存。当目标是普通文本词时，损失是两项之和：负的 log(1-b) 加上该词在原词表分布中的负对数概率，前一项训练等待分支在应输出时给出较小的等待概率，后一项训练文本分支选对词。论文还说明，沿用 HAT 和 RNN-T 的做法，自回归反馈给解码器的只有已输出的文本词，不把等待符号 `<p>` 作为文本历史送回去。两个 DSM 基线在训练时使用了 z-loss 正则化，F-DSM 因为 `<p>` 不在大语言模型词表里而不使用该正则化。

\[\mathcal{L}_{t}=\begin{cases}-\log b_{t},&y_{t}=\texttt{`<p>`},\\[5.69054pt] -\log(1-b_{t})-\log P_{\mathrm{LLM}}(y_{t}\mid\mathbf{h}_{t}),&y_{t}\in\mathcal{V}.\end{cases}\]

### 数据、模型与训练条件是什么

实验覆盖日语和英语，分别使用自发日语语料 CSJ 和 LibriSpeech。基础大语言模型是 Qwen3.5-0.8B，声学编码器是来自流式语音识别模型的 Fast-Conformer 编码器，帧率为 12.5 Hz。声学编码器与大语言模型之间是一个随机初始化的两层感知机作为音频投影适配器。语音与文本先用对齐工具在 12.5 Hz 帧率上对齐，训练时目标延迟从 160、320、480、640、800 ms 中均匀采样，并用自适应归一化按目标延迟调节模型。比较对象有 3 个：保留 `<w>` 的 DSM、去掉 `<w>` 的 DSM 和 F-DSM。

训练在 4 张 A100 上进行，全局批量 128，共 100,000 步，分 3 阶段逐步放开适配器、声学编码器和 LoRA 参数，基础大语言模型参数保持冻结，只用 LoRA 适配。识别评测用贪心解码，F-DSM 在等待概率大于 0.5 时跳过大词表投影。

**声学编码器 × 音频投影适配器：** 声学编码器指把连续语音变成帧级声学表示的因果编码模块，音频投影适配器指把声学表示映射到大语言模型输入维度的两层神经网络，前者负责声学建模，后者负责维度与空间对齐，组合后声学帧才能和文本嵌入一起送入解码器。

### 识别错误率在固定延迟下如何变化

下面先看目标延迟为 480 ms 且无左侧填充时的贪心解码错误率，CSJ 看字符错误率，LibriSpeech 看词错误率，都是越低越好。比较的问题是：在相同延迟和解码条件下，去掉词首标记是否损失精度，以及进一步因子化是否带来改进。

| 条件 | 指标 | DSM 去词首标记 | F-DSM | 原文报告的变化 |
| --- | --- | --- | --- | --- |
| CSJ 平均 | 字符错误率 | 6.60% | 6.45% | 平均字符错误率从 6.60% 降到 6.45% |
| LibriSpeech 平均 | 词错误率 | 6.61% | 6.17% | 平均词错误率从 6.61% 降到 6.17% |

上表只整理原文用连续句子明确报告的平均值变化，说明在该延迟下去掉 `<w>` 后仍可比较，而因子化进一步降低了两套数据的平均错误率。限制是这里只覆盖平均列，没有列出每个子测试集的全部数值，完整分集数值散在原表矩阵中。结合原文描述，去掉 `<w>` 在 CSJ 上改善了字符错误率，在 LibriSpeech 上词错误率变化很小，说明显式预测词首对识别不是必需的。F-DSM 相对去掉 `<w>` 的版本又有小幅改进，但这是在特定延迟、贪心解码和作者所选学习率下的结果，换解码或超参数结论可能变化。

### 不同目标延迟下的误差趋势是什么

这张图比较 DSM 与 F-DSM 在 160 到 800 ms 5 个目标延迟下的错误率，左图是 CSJ 的字符错误率，右图是 LibriSpeech 的词错误率，纵轴越低越好。读图时先确认横轴是目标延迟，蓝色实线是保留词首标记的 DSM，绿色虚线是 F-DSM。

> **看图路径：** 1. 先看横轴目标延迟从 160 到 800 ms 的五个取值；2. 再看左侧纵轴是字符错误率，右侧纵轴是词错误率，都是越低越好；3. 比较蓝色实线与绿色虚线在最短延迟处的差距；4. 观察延迟增大后两条曲线的下降和平坦趋势

[![原论文 Figure 2：Error versus target delay: (a) CSJ CER and (b) LibriSpeech WER (lower is better).](https://arxiv.org/html/2610.04333v1/cer_wer.png)](https://arxiv.org/html/2610.04333v1/cer_wer.png)

*论文图 2。原论文 Figure 2:：“Error versus target delay: (a) CSJ CER and (b) LibriSpeech WER (lower is better).”。*

从像素可见，两张子图里绿色虚线在每个延迟点都位于蓝色实线下方，差距在 160 ms 最短延迟处最大。随着延迟从 160 ms 增大到 480 ms，两条曲线都明显下降，之后趋于平坦。在 CSJ 子图上，蓝色曲线在 800 ms 处明显上扬，而绿色曲线保持平稳。原文的文字结论与此一致：F-DSM 在所有评测延迟上错误率更低，延迟增大到 480 ms 后继续增大延迟收益很小。需要注意这是贪心解码下的趋势，没有给出不同延迟下的统计显著性，也没有评测 800 ms 以上的更长延迟。

### 训练显存和吞吐的代价如何

训练效率比较的问题是：在批量分别为 16、32、64 时，每步耗时和平均显存如何变化，条件是同一硬件和 3 阶段训练设置。指标方向都是越低越好，内存不足记为无法运行。

| 数据集 | 批量大小 | DSM 去词首每步耗时 | F-DSM 每步耗时 | DSM 去词首平均显存 | F-DSM 平均显存 |
| --- | --- | --- | --- | --- | --- |
| CSJ 平均语音 4.63 s | 32 | 1.427 s | 1.375 s | 60.95 GiB | 18.49 GiB |
| LibriSpeech 平均语音 12.30 s | 32 | 1.771 s | 1.714 s | 64.66 GiB | 24.51 GiB |

上表只收录原文用连续句子明确给出的批量 32 的耗时与显存数值，单位保留原文的秒和 GiB。解释是 F-DSM 在目标为 `<p>` 的位置跳过大语言模型头的计算，省掉了大词表 logits 的显存，因此在批量 32 时两套数据的显存都下降到原来的约三分之一，而每步耗时基本持平。原文还报告两个 DSM 基线在批量 64 时内存不足，而 F-DSM 仍可训练，这使得直接用更大批量成为可能，减少对梯度累积的依赖。限制是耗时优势与语音长度有关：在较短的 CSJ 上原来 DSM 反而略快，作者认为这是选择性跳过带来的额外开销所致；在较长的 LibriSpeech 上 F-DSM 略快。批量 16 和 64 的完整耗时与显存散在原表矩阵中，这里没有全部展开。

### 推理时跳过大词表能省多少

推理效率比较的问题是：在流式贪心解码中，多大比例的步数可以跳过大词表投影，以及端到端实时系数如何变化。跳过率越高越好，实时系数是处理时间除以音频时长，越低越好。

| 数据集 | 大词表跳过比例 | F-DSM 实时系数 | 基线对照 | 原文结论 |
| --- | --- | --- | --- | --- |
| CSJ | 74.70% | 0.811 | 基线实时系数较高 | 端到端速度小幅提升 |
| LibriSpeech | 66.89% | 0.759 | 基线实时系数较高 | 端到端速度小幅提升 |

表中跳过率和实时系数的数值来自原文连续句子，含义是 F-DSM 在多数解码步判定为等待并跳过投影。解释是推理时先算等待概率，若大于 0.5 则直接输出 `<p>` 并进入下一语音步，不再算大词表 Softmax，因此大部分等待步省掉了昂贵计算。但端到端加速有限，因为声学编码器和大语言模型解码器本身仍需计算。限制是该结论依赖贪心解码和 0.5 阈值，换束搜索或阈值会改变跳过率与速度的折中，也没有单独测量误判等待带来的延迟代价。

### 去掉词首标记和做因子化各自带来什么

消融要回答两个递进问题：只去掉 `<w>` 会怎样，再做因子化又会怎样。原文的 3 个模型正好构成对照：保留 `<w>` 的 DSM、去掉 `<w>` 的 DSM、F-DSM。在 480 ms 延迟下，去掉 `<w>` 在 CSJ 上改善了字符错误率，在 LibriSpeech 上词错误率只有轻微变化，支持词首显式预测对识别不是必需的判断。进一步的因子化在两套数据上都降低了平均错误率，并在延迟扫描中保持领先。纯文本语言建模的对照也显示因子化减轻了遗忘，但重归一化后优势缩小，说明仍有其他因素在影响语言建模能力。

**词首标记 `<w>` × 时间戳抽取：** 词首标记 `<w>` 指原文 DSM 中标记从等待进入文本的特殊符号，时间戳抽取指从对齐输出中恢复词边界时间的任务，前者是为后者服务的显式手段，论文的搭配检验是去掉该标记后识别是否仍成立，结果支持在只关心识别错误率时可以省掉这个中间符号。

未胜出的情况也要说明：去掉 `<w>` 后在 LibriSpeech 的某个子集上词错误率略有上升，因子化在短语音上的训练速度也没有占优，纯文本困惑度仍远高于原始大语言模型。这些反例提醒读者，改进是平均意义上和小幅度的，不是所有子集和所有效率维度都一致变好。

### 纯文本能力保留了多少，还有什么没验证

语言建模遗忘分析比较的问题是：经过语音识别适配后，模型在纯文本上的困惑度变化多少，以及多少概率质量被分给了语音专用符号。困惑度越低越好，特殊符号概率越低说明文本分布受干扰越小。

| 数据集 | DSM 保留词首特殊概率 | DSM 去词首特殊概率 | F-DSM 特殊概率 | 含义 |
| --- | --- | --- | --- | --- |
| CSJ | 51.77% | 77.97% | 0.002183% | F-DSM 几乎不占用特殊符号概率 |

上表只收录原文在 CSJ 上用连续句子明确报告的特殊符号概率，LibriSpeech 上原文只说趋势类似，没有在正文中给出可逐字覆盖的完整句子，因此不在此表展开。解释是 DSM 基线在纯文本评测时把一半以上的概率分给 `<p>` 或 `<w>`，而 F-DSM 的等待分支在纯文本下几乎不激活。即使把特殊符号排除并在原词表上重归一化，F-DSM 的困惑度仍是适配模型中最低的，但与原始大语言模型相比差距仍然很大。

原文推测等待预测的梯度可能没有与大语言模型完全隔离，同时向模型同时输入音频和文本嵌入也可能损害语言建模，这些还只是解释性推测。没有评测的是：该纯文本退化是否影响长上下文生成，以及是否可以通过冻结更多参数或加入文本回放来缓解。

### 复现第一步要准备什么

复现时先不要直接调大批量，而是按原文的 3 阶段顺序准备数据与模型。第一步是把语音与文本在 12.5 Hz 帧率上对齐，并按目标延迟构造延迟后的训练目标，同时准备 CSJ 的字符级和 LibriSpeech 的词级评测流程。模型侧需要因果声学编码器、两层音频投影适配器、冻结权重的 Qwen 基础模型加 LoRA，以及 F-DSM 的标量等待头。关键超参数包括全局批量、100,000 步的 3 阶段解冻顺序、语言模型适配器、声学编码器、投影与延迟调节模块以及流式标记参数各自的学习率。

推理复现要注意贪心解码与等待概率大于 0.5 跳过大词表的逻辑，否则速度与错误率都对不上。论文没有绑定经校验可用的代码与权重资源，因此不能声称作者资源已公开，只能按论文文字重新实现。

### 什么时候值得尝试，还缺哪项验证

当任务是用大语言模型做流式语音识别，且对齐序列中等待帧占多数、显存成为瓶颈时，值得尝试把等待判断从大词表 Softmax 里拆出来。复现的第一步是先做出去掉词首标记的基线，确认识别不明显变差，再接入等待概率分支并实现等待步跳过计算。还需要补的验证是：在束搜索、不同阈值和更长语音下的延迟与错误率折中，以及在更多语言和噪声条件下的稳定性。

另一个缺口是语言能力保持的机制验证：需要单独测量等待分支梯度对主干的影响，并对比是否加入纯文本数据回放。总体看，因子化是一个改动小但分工清晰的结构调整，它改善了识别和显存，但没有让模型回到原始大语言模型的文本水平。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.04333v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
