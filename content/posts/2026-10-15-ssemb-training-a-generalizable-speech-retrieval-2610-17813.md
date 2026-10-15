---
title: "SSEmb: Training a Generalizable Speech Retrieval Model Using Only Automatic Speech Recognition Data"
date: 2026-10-15
draft: false
tags: [音频检索, Adapter, 多语言, 语音]
categories: [论文速递]
description: "SSEmb 只用标准语音转写对训练轻量适配器，把冻结语音编码器接到冻结文本检索向量空间，实现直接语音查文本，在英文与多语言及口语文档检索上接近级联系统且时延更低。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.17813"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "只用语音转写数据训练语音检索模型"
paper_digest_original_title: "SSEmb: Training a Generalizable Speech Retrieval Model Using Only Automatic Speech Recognition Data"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.17813v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.17813v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.17813v1.pdf"
paper_digest_primary_task: "音频检索"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-retrieval","label":"音频检索"},{"facet":"method","id":"method.adapter","label":"Adapter"},{"facet":"setting","id":"setting.multilingual","label":"多语言"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "Adapter"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "SSEmb 只用标准语音转写对训练轻量适配器，把冻结语音编码器接到冻结文本检索向量空间，实现直接语音查文本，在英文与多语言及口语文档检索上接近级联系统且时延更低。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sangkwon Park"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Dongwook Lee"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Youngho Cho"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Donghun Kang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Heeseung Kim"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sungroh Yoon"}]
paper_digest_abstract_sha256: "7be1ddb5d6f4b5322062f839280009350f2ee7a26e7ca64f73928e2bdfeea222"
paper_digest_sidecars: {"citation.bib":{"sha256":"b9f53fe9fafc7a8b22f56804697d6f893aa0d75664a67e8472c970899303af57","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17813/citation.bib"},"citation.json":{"sha256":"e546084f557b1b7ea26c6107b92032ef41e72b9f6289e44d6b8cceaa3aa7a6ab","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17813/citation.json"},"citation.ris":{"sha256":"76186ff18df57d7fff9ba598ff07c9924c8ca2d8c81af27b1cedca173af68736","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17813/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"a518262d6bcb23fd86bb8ae68c3d1416b59308d227c359e5f6337fa4a2814ce8","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17813/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "80535862ea358a7dae9f408f646bc23bad86014afb8c7a3d351cbbaf8cbdf2ba"
paper_digest_api_reader_plan_sha256: "328e3f0498abda4c69506427083875f0882ceff5a2c37e5ab61f3aec68be43da"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "37375a0130351170de1e935ff411b79fccf3762f9b3975b0ed7dbe1f756a7c3f"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "de133f7a10c18cdcdc233dc41112aec29f3ec54fe8b6151f6c0e9dfd4c47e2d7"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "fa7ef261f422bd4c32a8d8509b5ac5284c818a472abe12c94bb2d29b58d2294f"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "a089e0a42195482257ae39d97d16eb4d0733e6bfc012272326c6f00f8488640b"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 只用语音转写数据训练语音检索模型

> 英文题目：*[SSEmb: Training a Generalizable Speech Retrieval Model Using Only Automatic Speech Recognition Data](https://arxiv.org/abs/2610.17813v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频检索](/audio-paper-digest-blog/papers/?concept=task.audio-retrieval)
- **研究方法**：[参数高效微调](/audio-paper-digest-blog/papers/?concept=method.peft) → [Adapter](/audio-paper-digest-blog/papers/?concept=method.adapter)
- **研究条件**：[多语言](/audio-paper-digest-blog/papers/?concept=setting.multilingual)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Sangkwon Park：机构信息未在 arXiv HTML 中可靠披露
- Dongwook Lee：机构信息未在 arXiv HTML 中可靠披露
- Youngho Cho：机构信息未在 arXiv HTML 中可靠披露
- Donghun Kang：机构信息未在 arXiv HTML 中可靠披露
- Heeseung Kim：机构信息未在 arXiv HTML 中可靠披露
- Sungroh Yoon：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

语音驱动检索要解决的输入是口语查询，输出是文本语料库中的相关文档，难点在于收集口语查询与文档相关性标注成本高，跨领域和跨语言扩展困难，级联转写再检索还会引入解码延迟和转写误差传导。SSEmb（简单语音嵌入，Simple Speech Embedding）冻结语音编码器和文本嵌入模型，只训练中间的轻量适配器，把语音声学表示转换为伪词嵌入后送入文本模型得到语音嵌入。训练只用语音转写对，用余弦对齐损失拉近同对语音与转写嵌入，再用InfoNCE损失以同批次其他转写为负例增强区分，InfoNCE在此指按批次内对比区分正负转写的对比损失。推理时口语查询走同一通路直接参与余弦相似度排序，不做语音识别。在以文本基准查询经语音合成得到查询的英语HotpotQA语音到文本检索中，0.6B规模取得nDCG@10为0.7049，nDCG@10在此指前10个检索结果的归一化折损累计增益，数值越大越好，低于同规模级联系统的0.7267，同时单查询延迟从0.348秒降至0.144秒。该结论适用于有一定规模语音转写数据的语言，合成查询和真实口语的差异尚未验证。原文披露了检索延迟实测值，未披露训练硬件、时长与部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音驱动检索要解决什么输入输出问题

这篇论文处理的是语音查文本的检索任务。输入是一段语音查询，例如用户对语音助手说出的问题，候选是一批文本文档或段落，输出是按相关程度排序的文档列表。评价时看前几名里有没有正确答案，常用召回率和 nDCG@10，数值越大表示排得越准。对于刚接触音频检索的读者，可以这样理解：系统必须保留语音里的问题语义，丢掉说话人、语速、噪声等与检索无关的变化，最后输出一个能和文档向量直接比相似度的向量。

传统做法是先做语音识别得到文字，再用文本检索模型检索。论文指出这种级联路线有两个代价，一是语音识别的串行解码增加推理时延，二是转写错误会直接传给检索，在识别不准的语言上尤其明显。端到端路线则希望跳过显式转写，直接把语音变成检索向量。

**级联系统 × 端到端语音检索：** 级联系统指先用语音识别把语音转成文字再用文本检索器检索，要经过显式解码；端到端语音检索指直接把语音编码成检索向量去查文档，省去中间文字环节，前者易受转写错误影响并增加时延，后者把对齐压力放在向量空间学习上。

论文的切入点是训练数据问题。端到端通常需要大量语音查询和相关文档组成的检索标注，收集成本高，也难扩展到新领域和新语言。作者提出只用标准语音识别语料，也就是语音和其转写组成的对，来训练语音检索器。思路是借用已经很强的文本向量模型的检索能力，只要把语音向量对齐到其转写文字的向量上，语音就能继承查询与文档之间的匹配关系。

### 已有路线在相同任务上的分工有何不同

在相同的语音查文本任务上，论文对比了 3 类做法。第一类是级联系统，实验中用 whisper-large-v3-turbo 先转写，再用同样的 Qwen3-Embedding 模型检索，它代表了有显式文字中间结果时的检索上限，但要支付识别时延。第二类是 SONAR 这类多语言向量模型，它为文本到语音翻译等跨模态任务训练，也被用于检索，代表通用跨模态表示路线。第 3 类是 SpeechRAG 等基于适配器的做法，同样把语音接到冻结文本模型，说明语音转写对齐这条路线已有初步验证。

论文与它们在输入输出上一致，都是语音输入、文本候选、向量相似度排序，但在监督来源上不同：SSEmb 强调只用标准语音识别数据，不用语音查询和文档的检索标注。作者还提到 WavRAG 作为口语文档检索的参照，用于说明在文本查语音和语音查语音设置下的相对位置。相关工作的比较要放在同等文本骨干和同等评测语音条件下看，否则骨干强弱和语音合成方式都会影响结论是否成立。

### 为什么只用语音转写对也可能做检索

关键假设是冻结的文本向量模型已经学会了查询与文档的关系。如果文本查询和文档在向量空间里已经靠余弦相似度分得开，那么只要让语音的向量靠近其转写文字的向量，语音就能间接靠近相关文档、远离无关文档。这样训练时不需要知道哪篇文档相关，只需要知道这段语音说了哪句话。论文要验证的问题就变成：这种间接继承是否真的够用，在数据量、语言、检索方向变化时是否还成立，以及只训练适配器、冻结两侧大模型是否是合适的分工。

另一个实际问题是评测基准缺失，论文把文本检索基准的查询用已有文本转语音模型合成语音，得到可复现的语音查询。作者明确说明合成查询不能完全代表真实语音的多样性，这一点决定了实验结论的适用条件：结果是在受控合成语音上的比较，不是真实口语噪声下的保证。

### SSEmb 的整体流程是怎样的

SSEmb 的全称是 Simple Speech Embedding，结构上是一个模块化连接器。训练阶段底部是语音识别数据，一侧是语音波形，一侧是对应的转写文字。语音一路经过语音编码器得到声学表示，再经过可训练的适配器变成伪词向量，最后送入冻结的文本向量模型得到语音向量；转写文字一路直接送入同一个冻结文本模型得到文字向量，两者在向量空间做对齐。推理阶段不再需要转写文字，语音查询走同样的编码器加适配器加文本模型得到向量，直接与预先编码好的文档向量比余弦相似度排序。下面这张官方架构图把训练与推理画在左右两侧，有助于对照数据流向和冻结关系。

读图时请先区分左右两栏的时间阶段，再看中间 3 个横条的堆叠顺序，最后看顶部向量平面上不同颜色圆点的含义，虚线与箭头表示检索时的相似度比较。

> **看图路径：** 1. 先看左侧训练栏底部语音波形和转写文本如何分别进入模型；2. 再看中间适配器与上下两侧模块的冻结与训练标记区别；3. 最后看右侧推理栏语音向量与多个文档向量在同一平面上的连线

[![原论文 Figure 1：Overview of the SSEmb architecture.](https://arxiv.org/html/2610.17813v1/Figure1_small.png)](https://arxiv.org/html/2610.17813v1/Figure1_small.png)

*论文图 1。原论文 Figure 1:：“Overview of the SSEmb architecture. The acoustic representation of speech passes through an adapter into the text embedding model to produce speech embeddings.”。*

从图中可见，左侧训练栏底部方框同时给出波形和转写例句，向上分别经过语音编码器、适配器和文本向量模型，顶部平面标注了向量对齐；两侧的文本向量模型和语音编码器带有冻结标记，只有适配器是训练状态。右侧推理栏底部是语音查询和多个文档图标，向上分别得到语音向量和文档向量，在同一文本向量空间平面内比较，图例区分了文档向量、语音向量和转写向量。该图只说明模块连接和训练推理流程，不给出具体维度、层数和损失数值，细节以正文公式和训练设置为准。

### 语音编码器和适配器各自做什么

语音侧的第一步由语音编码器完成。论文英文实验使用 Qwen3-Omni-30B-A3B-Instruct 中的 Audio Transformer 编码器，它把输入语音变成按时间排列的序列表示，每 1 帧对应一段短时声学内容。这个编码器在训练中保持冻结，目的是保留预训练好的声学表示，不让少量对齐数据破坏它。第二步由适配器完成，它把声学表示投影到文本模型的输入维度，得到伪词向量序列。英文使用两层多层感知机，包括投影、GELU 激活、第二个投影和层归一化。

低资源语言使用更深的卷积适配器，包含 3 个残差块，每个块结合因果 1 维卷积捕捉局部时序模式和前馈网络，块内使用丢弃。论文解释低资源时更需要有效利用预训练编码器表示，因此用更能建模局部时序的结构。适配器是默认唯一可训练的模块，是连接声学与文本的桥梁。

**语音编码器 × 适配器：** 语音编码器把语音波形变成按时间排列的声学表示，保留发音内容；适配器把这组声学向量投影到文本向量模型的输入维度，是两侧之间唯一可训练的桥梁，二者搭配后语音才能被当作伪词向量送入文本模型得到检索向量。

适配器的输出被当作词向量序列，连同一个句尾标记一起送入冻结文本模型，取句尾位置的隐状态作为最终语音向量。这种做法沿用了文本侧用句尾标记池化的方式，使语音和文字走同一池化规则，便于对齐。

### 文本向量模型如何给出查询和文档向量

文本侧使用 Qwen3-Embedding 作为骨干，实验覆盖 0.6B、4B 和 8B 3 种规模。给定文本输入，它可以是查询或段落，模型先把词向量序列与句尾标记的向量拼接，再经过模型，最后取句尾位置的隐状态作为向量。检索分数用向量间的余弦相似度计算，方向越一致分数越高。按 Qwen3-Embedding 的用法，文本查询前会加一段指令，段落则不加，论文为简洁在公式中省略该指令。文本模型全程冻结，它的检索空间和查询文档关系被完整保留，语音侧通过对齐来迁入这个空间。

**文本向量模型 × 检索空间：** 文本向量模型指预训练好的文本检索模型，把查询和段落映射为同一向量空间中的点；检索空间就是这个以余弦相似度衡量相关的空间，语音经过适配器和文本模型后落入同一空间，才能直接与文档向量比相似度完成排序。

这种冻结分工的含义是：文本侧不学习新东西，只提供目标位置；语音侧不改变声学提取，只学习如何把声学表示翻译成文本模型能理解的输入。推理时文档可以离线编码，只有语音查询需要走编码器加适配器加文本模型，因此端到端省去了语音识别的解码步骤，这是时延下降的来源。

### 训练时用什么数据和损失对齐语音与转写

训练数据是成批的语音转写对，英文用 LibriTTS 的 190 小时干净子集，低资源语言用 Common Voice 和 KsponSpeech 的子集。每个转写先用冻结文本模型算出文字向量，每个语音按上述流程算出语音向量，记两者余弦相似度为配对相似度，对角线是正确配对。文本向量的计算方式如下式所示，符号含义是词向量拼接句尾标记后取句尾隐状态。

\[\mathbf{z}_{x}=\left[f_{\mathrm{text}}\left(E(x)\oplus E_{\texttt{[EOS]}}\right)\right]_{\texttt{[EOS]}},\qquad x\in\{q,c\},\]

损失由两项组成。第一项是余弦对齐损失，要求正确配对的相似度尽量接近 1，属于逐对拉近，其形式如下式所示。

\[\mathcal{L}_{\mathrm{cos}}=\frac{1}{B}\sum_{i=1}^{B}\left(1-s_{ii}\right).\]

第二项是以批内其他转写为负例的 InfoNCE 损失，要求正确配对的相似度在归一化后更高，温度系数控制分布锐利程度，其形式对应原文的对比损失公式。

\[\mathcal{L}_{\mathrm{InfoNCE}}=-\frac{1}{B}\sum_{i=1}^{B}\log\frac{\exp(s_{ii}/\tau)}{\sum_{j=1}^{B}\exp(s_{ij}/\tau)},\]

总目标是两项相加，权重系数控制对比项占比。

**余弦对齐损失 × InfoNCE 损失：** 余弦对齐损失要求同一对语音和转写的向量方向尽量一致，属于逐对拉近；InfoNCE 损失把同批内其他转写当作负例，要求模型在众多候选里更偏向正确转写，属于对比区分，二者相加后既保证方向对准又增强区分能力。

论文的消融显示组合目标在两个基准上比单用其中一项有小而一致的提升，说明逐对对准和对比区分提供互补信号。训练只更新适配器，梯度经过文本模型回传到适配器，但不更新文本模型和语音编码器的参数。原文未报告学习率等完整优化细节，复现时需要以公开代码为准，不能从模型名称猜测实现。

### 实验在什么数据和条件下比较

评价指标是语音查文本的召回率和 nDCG@10，数值越大越好。英文用 HotpotQA、MuSiQue 和 Mr.TyDi 英文子集，把文本查询合成语音后作为语音查询；其他语言用对应 Mr.TyDi 子集，覆盖韩语、日语、泰语、印尼语、俄语和阿拉伯语，训练时长从 35 小时到 960 小时不等。口语文档部分用 SpokenSQuAD，比较文本查语音和语音查语音两种设置。基线包括两类：一是级联系统，用 whisper-large-v3-turbo 转写后再用同一 Qwen3-Embedding 检索，保证文本骨干一致。

二是 SONAR，代表通用跨模态向量。时延以秒为单位，同时报告相对级联的加速比。需要强调的限制是合成语音评测的可控性与真实性的折中，合成方式固定、可复现，但不能覆盖口音、噪声和自发语音现象，因此结论只在该合成评测协议下成立。文本骨干规模、语音编码器和合成器固定时，比较才公平，跨表比较不同骨干或不同语言时训练数据和难度都不同。

### 英文主结果保留了级联性能的多少

英文主结果要回答的问题是：在同一文本骨干下，端到端语音向量能保留多少级联系统的检索质量，同时省多少时延。比较条件是同一 Qwen3-Embedding 规模下的级联与 SSEmb，指标方向都是越大越好，时延越小越好。下表整理原文三规模乘 3 基准的结果，包含召回率和 nDCG@10，时延趋势在正文另行说明。

| Model | HotpotQA R@2 | HotpotQA R@5 | HotpotQA nDCG@10 | MuSiQue R@2 | MuSiQue R@5 | MuSiQue nDCG@10 | Mr.TyDi R@2 | Mr.TyDi R@5 | Mr.TyDi nDCG@10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cascaded Q3E-0.6B | 0.4940 | 0.6942 | 0.7267 | 0.4535 | 0.6614 | 0.7201 | 0.6453 | 0.8356 | 0.6976 |
| SSEmb Q3E-0.6B | 0.4736 | 0.6729 | 0.7049 | 0.4162 | 0.6141 | 0.6764 | 0.5703 | 0.7860 | 0.6450 |
| Cascaded Q3E-4B | 0.5369 | 0.7553 | 0.7772 | 0.4839 | 0.6987 | 0.7494 | 0.7048 | 0.8774 | 0.7429 |
| SSEmb Q3E-4B | 0.5215 | 0.7373 | 0.7609 | 0.4353 | 0.6484 | 0.6998 | 0.6659 | 0.8495 | 0.7135 |
| Cascaded Q3E-8B | 0.5425 | 0.7656 | 0.7886 | 0.5068 | 0.7277 | 0.7788 | 0.7389 | 0.8875 | 0.7616 |
| SSEmb Q3E-8B | 0.5194 | 0.7380 | 0.7656 | 0.4585 | 0.6767 | 0.7280 | 0.6961 | 0.8675 | 0.7238 |
| SONAR | 0.2877 | 0.4726 | 0.5009 | 0.2397 | 0.4260 | 0.4757 | 0.1035 | 0.2396 | 0.2101 |

从表中可见，SSEmb 在 3 个规模上都保留了级联的大部分性能，例如 0.6B 时 HotpotQA 的 nDCG@10 为 0.7049，对应级联为 0.7267，差距较小；在更大骨干上绝对值整体抬高，但相对差距依然存在。原文同时报告时延以秒计并给出相对级联的加速比，SSEmb 省去识别解码因而更快。论文将其解释为对齐到检索专用空间优于通用跨模态表示。但要注意 SONAR 的骨干和训练目标本就不同，不能理解为同条件下的结构胜负；未胜出的一项是 SSEmb 在英文上仍普遍略低于对应级联，说明在识别较准的英文上，显式文字仍有小优势。

### 多语言结果在什么情况下反超级联

多语言部分要回答的是：换语言、只换适配器、用少量语音识别数据训练，能否达到接近级联的水平。实验固定 0.6B 文本骨干，为每种语言单独训练适配器，训练数据量随语言不同。下表整理韩语、日语、泰语等 6 种语言在 Mr.TyDi 上的部分对照，重点看 SSEmb 与级联和 SONAR 的相对位置。

| Model | Korean R@2 | Korean R@5 | Korean nDCG@10 | Japanese R@2 | Thai R@2 | Thai nDCG@10 |
| --- | --- | --- | --- | --- | --- | --- |
| Cascaded | 0.6715 | 0.8265 | 0.7097 | 0.6430 | 0.6387 | 0.6934 |
| SSEmb | 0.5805 | 0.7805 | 0.6568 | 0.5210 | 0.6615 | 0.7087 |
| SONAR | 0.1770 | 0.3470 | 0.2975 | 0.1360 | 0.1403 | 0.2567 |

结果显示 SSEmb 在这些语言上都明显高于 SONAR，且在多数语言上接近级联，但在韩语和日语等语言上仍低于级联。唯一的反例是泰语，SSEmb 的数值为 0.6615 和 0.7087，均略高于级联的 0.6387 和 0.6934。论文的解释是泰语识别错误率较高，错误会传给级联检索，而端到端不经过显式转写，因此在识别不可靠时显出优势。这个解释有证据支持但仍是推断，严格说还需要直接报告各语言的识别错误率才能定量验证。适用条件也要讲清：该结论基于 0.6B 骨干和合成查询，不同骨干或真实语音下相对关系可能变化。

### 口语文档检索能否不训练直接迁移

口语文档部分要回答的是：只在语音查文本上训练的适配器，能否直接用于文档也是语音的场合。实验在 SpokenSQuAD 上比较文本查语音和语音查语音，SSEmb 没有为此额外训练，文档语音同样走语音编码器加适配器加文本模型编码。下表是原文口语文档表的原表呈现，保留级联、SSEmb 和 WavRAG 的对照，WavRAG 数值取自原文论文。

| Text2Speech |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | R@1 | R@5 | R@10 | nDCG@10 |
| Cascaded | 0.6978 | 0.9086 | 0.9507 | 0.8276 |
| SSEmb | 0.6997 | 0.9168 | 0.9632 | 0.8342 |
| WavRAG† | 0.6844 | 0.8374 | 0.9023 | 0.8483 |
| Cascaded | 0.6870 | 0.9047 | 0.9497 | 0.8218 |
| SSEmb | 0.6840 | 0.9036 | 0.9510 | 0.8210 |

从原表数值看，文本查语音时 SSEmb 在召回率上略高于级联，与 WavRAG 报告值相比，在召回上更高而 nDCG@10 略低。语音查语音时 SSEmb 与级联非常接近，差距在千分位量级。论文据此认为适配器对齐能迁移到口语文档编码。限制有两点：一是 WavRAG 数值直接取自原文论文，不是同一代码复跑，模型规模和流程不同；二是 nDCG@10 上 SSEmb 并未全面超过 WavRAG，不能夸大为全面超越。尚未评测的范围包括更长的口语文档和真实会议噪声，原文没有给出。

### 训练范式数据量和可训练模块如何影响结果

消融部分要回答 3 个实际问题：该用语音转写对还是语音文档对训练，需要多少小时数据，以及该冻结还是放开大模型。下表是 0.6B 模型上的整理结果，包含训练范式、训练规模与可训练模块，指标为 HotpotQA 和 MuSiQue 的召回与 nDCG。

| setting | HotpotQA R@2 | HotpotQA R@5 | HotpotQA nDCG | MuSiQue R@2 | MuSiQue R@5 | MuSiQue nDCG |
| --- | --- | --- | --- | --- | --- | --- |
| Cascaded | 0.4940 | 0.6942 | 0.7267 | 0.4535 | 0.6614 | 0.7201 |
| Ours | 0.4736 | 0.6729 | 0.7049 | 0.4162 | 0.6141 | 0.6764 |
| w/ ASR | 0.4936 | 0.6943 | 0.7240 | 0.4253 | 0.6286 | 0.6921 |
| w/ Q-D | 0.4593 | 0.6627 | 0.6879 | 0.3796 | 0.5915 | 0.6475 |
| w/ 10h | 0.4411 | 0.6406 | 0.6710 | 0.3887 | 0.5941 | 0.6498 |
| w/ Emilia 46k h | 0.4906 | 0.6925 | 0.7231 | 0.4324 | 0.6245 | 0.6869 |

**语音转写对 × 语音文档对：** 语音转写对指同一句话的语音和它的文字转写，监督信号是内容相同；语音文档对指语音查询和相关文档，监督信号是检索相关，前者学习目标更直接是模态对齐，后者还要同时学习检索相关性，论文对比正是为了说明直接对齐转写向量已能继承检索能力。

先看训练范式。在合成 HotpotQA 语音上的对照中，直接做语音转写对齐的配置在 HotpotQA 上 nDCG 为 0.7240，高于用语音文档对训练的 0.6879，MuSiQue 上也有同样趋势，支持了语音转写对齐更直接的判断。论文的机制解释是冻结文本模型已包含查询文档关系，对齐转写向量即可继承，而语音文档训练要间接跨越模态差距，优化更难。再看数据量，从全量降到 10 小时性能缓慢下降，10 小时时 HotpotQA nDCG 为 0.6710，仍在可用范围；加入 Emilia 的 46k 小时多样数据后提升到 0.7231，说明框架能利用大规模数据。

再看损失与模块，余弦和 InfoNCE 单用相近，组合略优；放开文本词向量、语音编码器或同时放开都导致大幅下降，说明保留预训练表示、只让适配器搭桥是关键。负结果是放开骨干并非小幅波动而是严重退化，复现时不应轻易解冻大模型。

### 这些结论的边界和尚未验证是什么

这篇论文的证据边界需要如实说明。第一，英文和多语言的主评测都依赖合成语音查询，合成器固定且可复现，但作者已说明不能完全捕捉真实语音变化，因此在真实口音、远场噪声和自发停顿下的差距并未测量，不能把合成集上的接近级联推广为真实场景的同等表现。第二，时延比较只报告了端到端与级联的推理秒数，没有给出硬件、批量和文档库规模，加速比应理解为相对趋势而非绝对承诺。

第三，多语言反超只出现在泰语一处，且缺少各语言识别错误率的直接数字，机制解释合理但证据链不完整。第四，口语文档的 WavRAG 对照非同环境复跑，且模型规模不同，只能说在报告数值上相当，不能当作同条件胜负。第五，训练只验证了适配器路线，放开骨干失败的原因没有进一步诊断是灾难遗忘还是优化失配，原文也没有报告完整超参数。把这些边界讲清后，论文的价值依然明确：在受控评测和有限数据下，语音转写对齐是一个数据高效、可扩展的实用起点。

### 复现第一步要准备什么

复现时先不要改结构，第一步是把数据流和冻结关系跑通。按论文，语音编码器取自 Qwen3-Omni-30B-A3B-Instruct 的 Audio Transformer 编码器，文本侧用 Qwen3-Embedding，英文适配器用两层多层感知机，低资源语言用 3 残差块的卷积适配器，两侧大模型冻结，只训练适配器。英文训练用 LibriTTS 的 190 小时干净子集，低资源语言用对应 Common Voice 和 KsponSpeech 子集，损失用余弦对齐加 InfoNCE 组合。评测需要先用同一文本转语音模型把 HotpotQA、MuSiQue 和 Mr.TyDi 的查询合成语音，再用召回率和 nDCG@10 衡量，同时用同一文本骨干的级联系统做对照。

关键检查点是语音向量与转写向量是否在同一空间比较，文本查询的指令前缀是否与 Qwen3-Embedding 用法一致，以及文档是否离线编码。关于资源可用性，本次只收到论文原文和官方架构图，没有收到经校验的代码或权重链接，因此不能说代码模型已公开，论文中模型权重和代码将发布的表述只是作者计划，复现前需自行确认最新来源。

### 什么时候值得尝试还有什么待验证

综合来看，当你有语音识别数据但没有语音查询和文档的检索标注时，这套方法值得尝试，尤其是在需要低时延语音查文本、或语音识别不太准导致级联掉点的语言上。英文 3 基准上它保留了级联的大部分质量并省去解码时延，多语言上多数接近级联、在泰语上略超，口语文档上无需额外训练即可迁移，这些都是在合成评测协议下的实际证据。

复现第一步是冻结两侧大模型、只训练适配器做语音转写对齐，先在 10 小时以上数据上验证趋势，再考虑扩大到更大规模多样数据。还需要补的验证包括真实语音噪声下的对比、各语言识别错误率与检索差距的定量关系、不同硬件和库规模下的时延，以及放开骨干失败的优化诊断。只有补上这些，才能把受控实验中的接近级联转化为可部署的保证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.17813v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
