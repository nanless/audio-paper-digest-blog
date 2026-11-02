---
title: "Parameter-Efficient Fine-Tuning of Transformer Encoders for Audio-Image-Symbolic Music Retrieval"
date: 2026-11-02
draft: false
tags: [音乐检索, LoRA, 多模态学习]
categories: [论文速递]
description: "论文比较冻结、完全微调、LoRA 与 QLoRA 在九个音频图像符号编码器上的单模态判别力与可训练参数量，再用冻结与适配交叉原始与投影的对照检验单模态增益能否转化为多模态分类与作品级检索，结论是参数高效方法常能替代完全微调但单模态变好不等于多模态变好。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.41512"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "音频、乐谱图像与符号乐谱如何共享表示：参数高效微调的迁移检验"
paper_digest_original_title: "Parameter-Efficient Fine-Tuning of Transformer Encoders for Audio-Image-Symbolic Music Retrieval"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.41512v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.41512v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.41512v1.pdf"
paper_digest_primary_task: "音乐检索"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.music-retrieval","label":"音乐检索"},{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"}]
paper_digest_primary_method: "LoRA"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文比较冻结、完全微调、LoRA 与 QLoRA 在九个音频图像符号编码器上的单模态判别力与可训练参数量，再用冻结与适配交叉原始与投影的对照检验单模态增益能否转化为多模态分类与作品级检索，结论是参数高效方法常能替代完全微调但单模态变好不等于多模态变好。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Eliseo Fuentes-Martinez"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Antonio Hidalgo-Centeno"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jorge Calvo-Zaragoza"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Antonio Javier Gallego"}]
paper_digest_abstract_sha256: "3f8f636187525c3839478ee36266a50664da975b7008affd66b6f56ef65ce484"
paper_digest_sidecars: {"citation.bib":{"sha256":"0d7647755c1d647cf83b73801d2d120870cc276f5ec4f4cdc4edc315226136a8","url":"/audio-paper-digest-blog/data/papers/2026-11-02/2610-41512/citation.bib"},"citation.json":{"sha256":"a8ce788f5e6b680c7f9910153d11ad96953b7e076dfb09d704bf15e19e2e7948","url":"/audio-paper-digest-blog/data/papers/2026-11-02/2610-41512/citation.json"},"citation.ris":{"sha256":"5ce23262f1a37e982cf3c35fb6804d9d01713f53943e4164aa744d2032c5c676","url":"/audio-paper-digest-blog/data/papers/2026-11-02/2610-41512/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"e7979abc03af4fec08d90e0decbbd1a06cd8215f8d6089438b047355c8e77c1f","url":"/audio-paper-digest-blog/data/papers/2026-11-02/2610-41512/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a98204a1f23d08060595d67777c73c7b2d5aa055bceae1ae5653161428bb1b71"
paper_digest_api_reader_plan_sha256: "cfcc3d7cb032230741b77200109230e21a022e6cc0feb09592726aa2808427b7"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "12ba220e5a0f7f632e4288e66172bfd2628657b5601273ad68e086ecd4ec4391"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "1010b009c08c5e18bc883088977d40a9ece23b64220a2310f62e80304994d502"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "bb2f3b1b40c61d685e394de5a437cd44f8e628118d32eaa66fbf5f55646e5672"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ef072983ee116b72375a9b8ace64e8b45456be471c4ba024db619edde725e0dd"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 音频、乐谱图像与符号乐谱如何共享表示：参数高效微调的迁移检验

> 英文题目：*[Parameter-Efficient Fine-Tuning of Transformer Encoders for Audio-Image-Symbolic Music Retrieval](https://arxiv.org/abs/2610.41512v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐检索](/audio-paper-digest-blog/papers/?concept=task.music-retrieval)
- **研究方法**：[参数高效微调](/audio-paper-digest-blog/papers/?concept=method.peft) → [LoRA](/audio-paper-digest-blog/papers/?concept=method.lora)；[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.3/10** | 创新 1/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Eliseo Fuentes-Martinez：机构信息未能在本次解析中与作者逐人可靠绑定
- Antonio Hidalgo-Centeno：机构信息未能在本次解析中与作者逐人可靠绑定
- Jorge Calvo-Zaragoza：机构信息未能在本次解析中与作者逐人可靠绑定
- Antonio Javier Gallego：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是同一首乐曲的三种样子：录音音频、乐谱图像和 kern 格式符号乐谱，困难在于三者维度与信息量不同，直接比较无法检索，处理过程是先让每个模态各自学会判别标签，再把三路表示送入同一个浅层映射形成可比空间。第一步是单模态适配，每个编码器接一个线性分类头，用作曲家、乐器、标题或声部编制作监督，比较冻结线性探测、完全微调、低秩适配（Low-Rank Adaptation，LoRA）与量化低秩适配（Quantized LoRA，QLoRA）。第二步是多模态映射，编码器冻结，把三路嵌入做归一化与补零后送入共享多层感知机，用三模态合并样本的分类损失训练，分类头训练后丢弃。第三步是评价，类别任务用合并图库的 k 近邻多数投票，作品任务用标题空间的距离排序。与已有直接做音频到乐谱匹配的工作差异在于同时覆盖音频、图像与记谱级符号三路，并把适配与映射的贡献分开度量。在 TriScore 作曲家任务上，适配加映射达到 74.99 宏 F1，比冻结未映射条件高 32.90 个百分点，TriScore 标题空间平均 Top-5 准确率为 55.32。结论只在两个古典音乐数据集与所选编码器范围内成立，在信息不对等的 Musical Theme Dataset 上增益会冗余或被削弱。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://verovio.humdrum.org> — 链接可访问（HTTP 200）

- 第三方资源：<https://humlib.humdrum.org> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/models> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 要解决的检索问题是什么

这篇论文研究基于乐谱的多模态音乐检索。输入是同一音乐内容的 3 种类实现：一段演奏录音、一段乐谱图像、一份符号乐谱文本。目标是让三者的向量表示既在各自模态内可分，又能在跨模态比较时兼容，从而支持按作曲家与乐器分类，以及按作品标题找回同一作品的不同片段。

难点在于三者的信息并不天然对齐。音频有音色混响与演奏细节，图像有版式与符号位置，符号文本有离散的音高时值结构。直接把 3 路冻结编码器的输出放在一起，它们的坐标系互不校准，归一化与补齐只能让维度一致，不能建立语义对应。论文因此把问题拆成两步：先看单模态适配能否提高判别力，再看这种提高经共享映射后是否还留得住。

### 已有路线为什么不够

早期跨模态做法依赖中间表示，例如色度特征或 bootleg 乐谱表示，先把音频与图像转成同一中间形式再匹配。这类管线需要预处理与领域知识，误差容易累积。后来出现直接学习音频谱片段匹配的嵌入模型，能在不做完整转谱的情况下检索，但多数只做音频与乐谱两两对应，没有同时容纳音频、图像与记谱级符号的三方统一空间。

另一条路线是用大规模预训练编码器抽特征再映射到共享空间。已有工作在冻结编码器上加轻量投影，发现类别层面可以协调，但近邻仍按模态聚集。也就是说，大类标签对了，实例近邻却还是同模态抱团。论文要补的正是缺失的一环：在相同数据划分与监督目标下，系统比较冻结、完全微调、LoRA 与 QLoRA，并分离编码器适配与共享投影各自的贡献，而不是把两者混在一起报告最终分数。

### 论文把任务拆成哪两个问题

第一个问题是参数效率：在音频、图像与符号 3 种异构编码器上，参数高效微调能否达到或超过完全微调，同时大幅减少可训练参数。音乐预训练的音频模型可能本来就懂音乐，图像与符号模型多从文档、自然图像、文本或代码迁移而来，适配收益可能不对称，需要按模态、编码器与监督目标逐项比较。

第二个问题是迁移性：单模态判别力变强是否意味着多模态组织变好。适配可能强化只在单模态内有效的线索，例如某种录音质感或某种记谱排版习惯，这些线索在其他模态中弱表达或根本缺失。共享投影可能从冻结表示中恢复类别结构，也可能把适配引入的结构打散。只有把适配与投影正交对照，才能判断两者是互补、冗余还是互相干扰。

### 两阶段流程如何组织样本

论文流程分 2 个阶段。第一阶段对每个数据集、每个模态、每个监督目标独立做有监督单模态分类，从 3 个候选编码器中选出验证宏 F1 最高的编码器与适配组合，分类头选完即丢弃，只保留编码器作特征提取器。第二阶段把选出的适配编码器与它对应的冻结版本配对，学习任务专用的共享投影，再做类别级分类、作品级检索与跨模态近邻分析。

**音频 × 乐谱图像 × 符号乐谱：** 音频指演奏录音的波形，携带音色与织体；乐谱图像指五线谱页面的像素排版，携带视觉记谱结构；符号乐谱指 kern 这类记谱文本序列，携带离散的音高时值结构。三者是同一音乐内容的不同实现，论文用三路独立编码器分别处理再汇入共享投影，正是要检验异构输入能否在类别层面兼容。

下图给出高层总览，左侧是 3 模态输入，中间是 2 个阶段，右侧是 3 种下游评估，理解时先分清哪一步改变编码器、哪一步改变公共空间，图中左侧 3 个图标自上而下对应音频、乐谱图像与符号文本，中间蓝色方框标出先适配后投影的顺序，右侧紫色方框列出分类、作品检索与跨模态分析共用同一投影输出。

> **看图路径：** 1. 先看左侧三个图标分别对应音频波形、五线谱图像与符号文本；2. 再看中间两阶段方框的上下顺序与箭头指向；3. 最后看右侧三个下游评估框如何共用同一投影输出

[![原论文 Figure 1：High-level overview of the proposed evaluation pipeline.](https://arxiv.org/html/2610.41512v1/overview.png)](https://arxiv.org/html/2610.41512v1/overview.png)

*论文图 1。原论文 Figure 1:：“High-level overview of the proposed evaluation pipeline.”。*

从图中可见，第一阶段只动编码器，第二阶段编码器冻结只学共享映射。最终的标题表示与作曲家等分类表示是各自独立训练的任务专用空间，不是一个跨所有目标的通用空间。这一点决定了后文所有结论都只在给定目标下成立，不能把作曲家空间的互补性直接推广到标题检索。

### 单模态适配改了模型的哪里

每个样本记为某模态输入，编码器输出池化后的向量，再接目标类别数的线性分类头，用交叉熵优化。线性探测冻结主干只学分类头，作为原表示信息量的参照。完全微调整个主干与分类头，容量最大但每个条件都要存完整副本。LoRA 冻结主干，在自注意力查询键值等线性变换上加低秩增量，秩远小于输入输出维度，用缩放系数控制更新幅度。QLoRA 保持同样的低秩机制，但冻结主干以 4 比特量化形式存储，省显存而可训练参数主要仍由秩与分类头决定。

**完全微调 × LoRA × QLoRA：** 完全微调指更新主干全部参数，适配容量最大但每个编码器与任务都要存完整副本；LoRA 指冻结主干只在注意力查询键值等线性变换上加可训练低秩增量，用很小的秩控制更新量；QLoRA 指同样的低秩增量加上冻结主干的 4 比特量化存储，进一步省显存。三者分工是同一目标下的不同参数预算，组合比较才能看出省参数是否丢判别力。

低秩更新的具体形式是把原权重矩阵加上缩放后的两个小矩阵乘积，秩与缩放系数在给定搜索空间内按验证宏 F1 选择。

\[\mathbf{W}=\mathbf{W}_{0}+\Delta\mathbf{W},\qquad\Delta\mathbf{W}=\frac{\alpha}{r}\mathbf{B}\mathbf{A},\qquad\mathbf{W}\in\phi\]

这里原权重是冻结的大矩阵，两个小矩阵是可训练的增量，秩决定增量的自由度，缩放系数决定增量幅度。实现上增量只插入注意力相关投影，分类头与低秩参数联合训练。

**线性探测 × 编码器适配：** 线性探测指冻结预训练编码器只训练顶层线性分类头，用来估计原表示中已有的目标信息；编码器适配指允许主干或其低秩增量随目标监督改变表示本身。两者搭配的意义是先立基线再看增量，若适配后验证宏 F1 明显高于线性探测，才说明表示被真正改写而非分类头拟合。

下图展示单模态分支如何切分子集训练，以及 3 路表示如何经处理汇入同一集合再过共享多层感知机，重点看分支在哪里分开、在哪里汇合，上半虚线以上是适配阶段每个模态只用本模态样本训练，下半是投影阶段 3 模态样本共同提供类别监督但编码器本身不再更新。

> **看图路径：** 1. 看上半部分单模态分支如何从训练集切出单模态子集；2. 看中部三路编码器颜色与输出条带如何汇入归一化与补齐；3. 看右侧多层感知机与两个表示集合符号的对应关系

[![原论文 Figure 2：Overview of the proposed two-stage methodology.](https://arxiv.org/html/2610.41512v1/2_stage_pipeline_modified.svg)](https://arxiv.org/html/2610.41512v1/2_stage_pipeline_modified.svg)

*论文图 2。原论文 Figure 2:：“Overview of the proposed two-stage methodology.”。*

图中上半是适配，下半是投影。适配阶段每个模态只用本模态样本训练；投影阶段 3 模态样本共同提供类别监督，但编码器本身不再更新。

### 共享投影与四种对照条件

进入第二阶段时，对每个数据集与目标，先取选定编码器的适配嵌入，做ℓ2 归一化，必要时补零到投影的公共输入维度，得到原始集合。再用一个 3 模态共用的浅层多层感知机把该集合映射为投影集合，训练时附带 1 个任务分类头提供监督，训练完丢弃。这种投影不是要比较架构优劣，而是作为受控的下游机制，看它对冻结与适配输出的变换是否相同。

**原始表示 × 任务专用共享投影：** 原始表示指各模态编码器输出经归一化与补齐后的拼接集合，各坐标系互不校准；任务专用共享投影指一个对三模态共用的浅层多层感知机加分类头监督，把三路向量映射到同一目标空间。两者分工是先看适配本身是否让原始空间可分，再看共享映射能否把已分的信息保留并跨模态对齐。

为分离两步的效果，论文采用冻结与适配交叉原始与投影的对照。原始条件只是把独立训练的各模态向量放在一起评测，不代表语义已对齐；投影条件才是学过类别监督的公共空间。分类评测用 k 近邻多数投票，k 在验证集上选定再固定到测试集，指标是宏 F1，即先按类算再平均，对不均衡标签更公平。

### 训练、选择与评测如何隔离

单模态训练用 AdamW，初始学习率 10 的负 5 次方，权重衰减 0.01，通用批量为 4，音频因显存降为 1，耐心 25 轮的早停，依据验证宏 F1 选检查点与超参数。LoRA 与 QLoRA 共享同一秩、缩放与丢弃搜索空间，测试集不参与任何模型与超参数选择。选到适配策略后丢弃分类头，固定编码器进入投影阶段；投影训练同样只用训练集，验证集选检查点，测试集只做最终报告。

对照的 4 种情形可以写成原始与投影的集合交叉冻结与适配的参数化，论文用该记号明确每种评测用的是哪套表示。

\[{(v,\phi)\in\mathcal{V}\times\Phi}=\left\{({\mathcal{Z}},{\phi_{0}}),\;({\mathcal{H}},{\phi_{0}}),\;({\mathcal{Z}},{\phi_{adapt}}),\;({\mathcal{H}},{\phi_{adapt}})\right\}.\]

其中原始集合与投影集合是搜索空间，冻结与适配是编码器参数。基于此定义两种增量：适配增量比较同空间下适配相对冻结的变化，投影增量比较同参数下投影相对原始的变化。

\[\displaystyle\Delta_{\mathrm{adapt}}=F1_{(v,{\phi_{adapt}})}-F1_{(v,{\phi_{0}})},\quad\quad\Delta_{\mathrm{projection}}=F1_{({\mathcal{H}},{\phi})}-F1_{(\mathcal{Z},{\phi})}\]

只有当适配表示在配对的冻结条件下仍更好，才算单模态增益发生迁移。标题的检索只评测适配加投影的完整系统，不拆分两者贡献，因此不能用检索分数反推适配或投影各自的作用。

### 编码器候选的预训练来源是什么

实验用 9 个公开变换器编码器，每模态 3 个，刻意覆盖不同预训练域。音频有音乐专用的 MERT、语音多语的 Whisper 与通用音频的 Wav2Vec2；图像有文档的 DiT、通用视觉的 ViT 与视觉语言的 PaliGemma；符号有通用文本的 RoBERTa、代码的 GraphCodeBERT 与语义相似度的 SentenceTransformer。下表列出模型标识、预训练域与表示维度，是理解迁移不对称的前提。

| Modality | Encoder | Pretraining domain | Hidden size |
| --- | --- | --- | --- |
| Audio | MERT [29] | Music audio | 1,024 |
| Audio | Whisper [35] | Multilingual speech | 1,024 |
| Image | ViT [14] | General vision | 768 |
| Symbolic | RoBERTa [30] | General text | 768 |

该表说明音频三者都是 1024 维，图像中 PaliGemma 经视觉投影后为 4096 维，其余多为 768 维。波形重采样、池化与分词按各模型配套方式处理，图像取类别标记或补丁平均，符号按各自词表切分后池化。这些细节决定了原始向量进入投影前的维度差异，也解释了为何需要归一化与补零。

### 两个数据集的对齐程度有何不同

TriScore 是短时紧对齐的多声部片段，3 模态内容高度对应，含作曲家、乐器与作品标题，支持类别分类与作品级检索。MTD 是短单声部主题，符号与图像主要是单旋律，音频却含和声配器与上下文，3 模态信息不对等，跨模态难度更大。两者的划分都按大约 80 比 10 比 10 分层，且同一主题的 3 模态放在同一划分，避免对齐对应泄漏。

下表整理 2 数据集的规模、标注与内容差异，比较问题是两者是否提供相同的跨模态等价性，指标方向是三元组数与类别数越多通常难度越大。

| Property | TriScore | MTD |
| --- | --- | --- |
| Aligned triplets | 2,287 | 2,068 |
| Composers | 17 | 30 |
| Instrument categories | 8 | 13 |
| Ensemble categories | – | 10 |
| Piece-level retrieval | 111 works | – |
| Musical content | Polyphonic excerpts | Monophonic themes |
| Symbolic representation | kern | MusicXML to kern |
| Image source | Rendered from symbolic score | Original sheet music images |
| Cross-modal equivalence | Closely matched excerpts | Theme-level score, richer audio |
| Data split | Stratified 80/10/10 | Stratified 80/10/10 |

该表保留原文全部行列与单位。TriScore 为紧密对应的多声部片段且图像由符号渲染，MTD 为主题级乐谱加更丰富的音频。作曲家、乐器与合奏类别数不同，决定了各目标的难度基线不可直接横向比较，MTD 作曲家多达 30 类而音频信息更杂，因此绝对分数偏低需要在该条件下解读。

### 单模态适配省了多少参数

验证集结果用于选择，不作为最终多模态结论。总体上参数高效方法在 18 个数据集模态目标组合中拿下 14 个，其中 LoRA 占 8 个，QLoRA 占 6 个，完全微调剩 4 个。TriScore 上 LoRA 拿下音频乐器、3 路图像全部与符号乐器标题等 6 个，完全微调保留音频作曲家标题与符号作曲家。MTD 上参数高效拿下 9 个中的 8 个，但绝对宏 F1 普遍偏低，图像与符号多在 0.2 以下，策略间差异常很小。

**类别级分类 × 作品级检索：** 类别级分类指预测作曲家乐器等标签，用 k 近邻多数投票衡量语义组织；作品级检索指以标题为监督训练表示，再按距离排序看前 N 个是否有同作品片段，衡量实例级找回能力。两者搭配才能区分表示只是按大类聚拢，还是真正把同一作品的不同模态片段拉近。

参数量对比很直接：音频适配常把 300M 以上的全量优化降到 1.4M 至 1.6M，文档与通用图像模型从约 86M 降到不足 1M，符号模型从 110M 至 125M 降到约 0.7M 至 1.0M，PaliGemma 的选中配置为 21.9M。也就是说，常以约两个数量级的削减达到相当或更好的验证宏 F1。但换主干的影响常大于换秩与缩放，个别编码器在某些目标下对低秩配置敏感，例如符号的 SentenceTransformer 在作曲家与标题上波动较大。预训练是否音乐专用也不决定胜负，Wav2Vec2 与 Whisper 在部分音频目标上超过 MERT，代码预训练的 GraphCodeBERT 在符号任务上常胜过通用文本编码器。

### 适配增益何时能进入多模态空间

多模态分类在测试集上用组合图库的 k 近邻宏 F1 报告。下表是核心的对照结果，比较问题是编码器适配与共享投影各自带来多少增益以及组合是否叠加，公平条件是同一数据集目标下冻结与适配用配对的同一主干、原始与投影用同一评测图库，指标是宏 F1 百分点越高越好。

| Dataset | Label | Frozen Raw | Frozen Projected | Frozen projection gain | Adapted Raw | Adapted Projected | Adapted projection gain | Adapt gain Raw | Adapt gain Projected |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TriScore | Composer | 42.09 | 50.63 | 8.54 pp | 61.55 | 74.99 | 13.44 pp | 19.46 pp | 24.36 pp |
| MTD | Composer | 4.38 | 7.34 | 2.96 pp | 11.41 | 8.58 | -2.83 pp | 7.03 pp | 1.24 pp |

该表是原文对照的完整矩阵，数字与单位保留原文百分点写法。TriScore 作曲家是唯一的双向互补：适配在原始上加 19.46 个百分点，在投影后加 24.36 个百分点，投影在冻结上加 8.54 个百分点，在适配上加 13.44 个百分点，完整系统达 74.99。TriScore 乐器则是冗余：各自单独都涨，但组合后适配相对冻结投影降 4.36 个百分点，投影在适配上仅涨 0.77 个百分点。MTD 乐器与合奏同样接近冗余，组合几乎无额外增益。MTD 作曲家出现干扰：适配把原始从 4.38 提到 11.41，投影却把适配结果拉回 8.58，降 2.83 个百分点。

机制解释与数据结构一致：TriScore 3 模态是紧对应的片段，作曲家线索可被共享映射保留；MTD 的视觉与符号只是单声部主题，音频多了和声织体，适配强化的单模态线索在其他模态缺失或表达不同，单一共享投影难以保留。还需注意多模态三元组可能混用 LoRA、QLoRA 与完全微调，结论是所选适配管线的整体迁移，不是某种参数高效方法的单独多模态效应。

### 作品级检索的实际表现与边界

作品级检索在 TriScore 上用标题监督训练的适配加投影表示评测。查询后按距离排序，若前 N 个中有同标题片段即算命中，报告 Top-5 与 Top-10 准确率。下表比较不同查询模态，比较问题是完整标题空间能否把同作品的不同片段拉近，公平条件是同一标题投影空间与同一图库排序规则，指标是 Top-N 准确率越高越好。

| Metric | Audio query | Image query | Score query | Avg. |
| --- | --- | --- | --- | --- |
| Top-5 | 61.62 | 34.59 | 69.73 | 55.32 |
| Top-10 | 69.19 | 45.95 | 78.92 | 64.68 |

表中平均 Top-5 为 55.32，平均 Top-10 为 64.68，说明同作品片段在该空间中确实更近，具备可用的作品识别能力。但模态差异很大：符号查询 Top-5 为 69.73、Top-10 为 78.92，音频为 61.62 与 69.19，图像仅 34.59 与 45.95。也就是说，结论成立的条件是允许符号或音频作查询，若只用图像查询则效果明显受限。该实验未评测去掉适配或去掉投影的对照，因此不能说增益来自哪一步，只能说完整系统在该条件下可用。

### 可视化与分模态查询说明了什么

为直观理解上述分化，论文用 t-SNE 展示代表性情形。每个子图是独立的降维拟合，只能看组内颜色代表类别与形状代表模态的相对组织，不能跨图比较坐标与紧致度。读图任务是先确认冻结原始是否按模态分裂且类内混杂，再看投影是否把同类拉近、适配是否只在各自模态内增强类别结构，右下适配投影是否出现可辨类别簇但簇内仍按形状细分。

> **看图路径：** 1. 对比左上冻结原始条件中颜色与形状的分离方式；2. 对比右下适配投影条件中同色点是否形成连续组；3. 注意每幅子图是独立降维拟合只看组内相对组织

[![原论文 Figure 5：t-SNE visualization of the four factorial conditions for TriScore composer: \\F1_e^\\phi\\_(e…](https://arxiv.org/html/2610.41512v1/tsne_triscore_composer.svg)](https://arxiv.org/html/2610.41512v1/tsne_triscore_composer.svg)

*论文图 5。原论文 Figure 5:：“t-SNE visualization of the four factorial conditions for TriScore composer: \F1_e^\phi\_(e,\phi)\in\mathcalS\times\Phi=\left\F1_z^\phi_0,\;F1_h^\phi_0,\;F1_z^\phi_adapt…”。*

该图是 TriScore 作曲家的四格可视化，像素显示左上冻结原始按模态占据互不相交区域且颜色混杂，右上冻结投影已把同类跨模态拉近但分离不彻底，左下适配原始在各自模态内颜色组织增强但仍局限于模态子空间，右下适配投影出现可辨的类别簇但簇内仍按形状细分。这与表格中互补的量化结论一致：两步都带来了可被对方利用的结构，但类别协调不等于实例级混合，分查询模态看符号查询作曲家达 94.70 而图像仅 47.22，跨模态排除后图像查询大幅下跌，近邻组成显示全图库下同模态近邻常超 93%，标题检索只反映完整系统的作品找回能力不能拆分功劳。

### 哪些结论不能推广

首先，单模态验证分数不能当多模态证据。验证宏 F1 用于选编码器，测试集的多模态分数才是迁移判断，跨阶段直接比数值会混淆选择与评估。其次，冗余与干扰不是方法失败，而是信息不对等的表现：当 3 模态内容紧对应时互补更可能出现，当音频比谱面多出和声配器信息时，单模态最优线索可能跨模态不可用。

其次，投影是类别监督的浅层映射，没有显式拉近对齐三元组的对比目标，因此类别对了而近邻仍同模态聚集并不矛盾。最后，MTD 的绝对分数很低，几个百分点的增减在高噪声区间内解读要谨慎；图像作为最弱查询模态，在 2 个数据集与多个目标上反复出现，不宜把平均分数当成各模态都能达到的水平。

### 复现第一步要固定什么

复现应先固定数据划分与监督目标。TriScore 按作曲家、乐器、标题分别训练单模态分类，MTD 按乐器、作曲家、合奏训练；同一主题的 3 模态必须同属训练验证或测试，避免对齐样本跨划分。编码器按原文模型标识与池化方式抽表示，音频注意 24k 与 16k 的重采样差异，图像注意类别标记与补丁平均的区别，符号注意各自词表与加权池化。

训练侧固定 AdamW 学习率、权重衰减、批量与早停耐心，再在给定秩缩放丢弃空间内搜 LoRA 与 QLoRA，验证宏 F1 最高者入选，平局留参数少者。投影阶段冻结编码器，只学共享多层感知机与辅助分类头，k 近邻的 k 在验证集上选定。作者资源方面，本次收到的来源校验只确认 Verovio、humlib 与 Hugging Face 模型库链接可达，属于第三方工具与模型仓库，不能据此说作者已开源本项目代码；复现仍需按论文描述重建管线并补上缺失的投影细节与随机种子记录。

### 什么时候值得尝试这种做法

当手里有多个大型变换器编码器且每个模态数据集目标都要维护一个版本时，优先尝试 LoRA 或 QLoRA 往往能在大幅省参数的同时拿到相当的单模态判别力，尤其适合先做一轮低成本筛选再决定是否全量微调。但若目标是跨模态检索或分类，不能止步于单模态验证涨点，必须再做冻结与适配交叉原始与投影的对照，确认增益在共享空间中保留。

对紧对齐的多声部片段，适配与投影更可能互补；对主题级谱面配更丰富的音频，要预期冗余甚至干扰，并考虑引入显式跨模态邻近目标或非对称映射。还需要补的验证是跨模态排除下的检索对照、不同随机种子的稳定性，以及投影容量与图库组成对结论的影响。只有补齐这些，才能把类别层面的协调推进到实例级的可靠混合。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.41512v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-02 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-02/)
