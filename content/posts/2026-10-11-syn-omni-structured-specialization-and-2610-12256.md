---
title: "Syn-Omni: Structured Specialization and Progressive Collaboration for Omnimodal Embeddings"
date: 2026-10-11
draft: false
tags: [音频检索, 音视频问答, 混合专家模型, 对比学习, LoRA]
categories: [论文速递]
description: "针对图文音视频混合检索中通用语义与模态特性难分离的问题，Syn-Omni 用共享 LoRA 加模态专家 LoRA 与渐进路由在 81 个任务上整体更均衡，3B 整体 Hit@1 达 49.4%，代价是专家路径推理时不能合并带来延迟增加。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.12256"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "Syn-Omni：共享与专家分工加渐进协作的全模态检索向量"
paper_digest_original_title: "Syn-Omni: Structured Specialization and Progressive Collaboration for Omnimodal Embeddings"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.12256v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.12256v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.12256v1.pdf"
paper_digest_primary_task: "音频检索"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-retrieval","label":"音频检索"},{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.moe","label":"混合专家模型"},{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"method","id":"method.lora","label":"LoRA"}]
paper_digest_primary_method: "混合专家模型"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对图文音视频混合检索中通用语义与模态特性难分离的问题，Syn-Omni 用共享 LoRA 加模态专家 LoRA 与渐进路由在 81 个任务上整体更均衡，3B 整体 Hit@1 达 49.4%，代价是专家路径推理时不能合并带来延迟增加。"
paper_digest_authors: [{"affiliations":["KAIST","Sony Group Corporation"],"name":"Youngtaek Oh"},{"affiliations":["Sony Group Corporation"],"name":"Qiyu Wu"},{"affiliations":["Sony Group Corporation"],"name":"Hiromi Wakaki"},{"affiliations":["KAIST"],"name":"Junmo Kim"},{"affiliations":["Sony Group Corporation"],"name":"Yuki Mitsufuji"}]
paper_digest_abstract_sha256: "0b0fb8309fb4b0000c4d70f7472bdd0d8029af26b78035d5792986ac4ffc57ad"
paper_digest_sidecars: {"citation.bib":{"sha256":"59750160b5515035bc57fe7e76f9ffee5dcec64ad9700ba9c13a96f488179e41","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-12256/citation.bib"},"citation.json":{"sha256":"435275aa8b95deb2eabe08b0f63c58dc0d0036138e40ac46c5f86c5b140b24f1","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-12256/citation.json"},"citation.ris":{"sha256":"adb5b5873acdcc4195e7e4092bc92768e46a039859893d0951b6e50da0e0cc35","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-12256/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"4b8fcf97113047e679d82ddb9eb88c23fae4b9e21c0e852eea5956170f2b1f9d","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-12256/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "9989883768447c023a689272872826aeef0e6eda76bb8364e861fab94073c462"
paper_digest_api_reader_plan_sha256: "457ce26d1f77f8a55c8852927dc1749701d30a4ab15cfa9b2af3d8a1a1740370"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "108170eeb266c9ce59bb1ad1f6e1fdf3f889ee62cde9617abdf438612ce01e7b"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "a77dbdf41be8818fe41cfe25e024cfacf4f48bee5a1a73c901cefc6133209737"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "724c6146fe3efd3d9ab253ef9259cdc852f3af905a7a616578f961fe94e584ac"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "b8a88f807b6c4dfa53b34fd891bfcd233ef3c58458b3c36275531b897531e2ff"
paper_digest_api_reader_resource_count: 12
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 Syn-Omni：共享与专家分工加渐进协作的全模态检索向量

> 英文题目：*[Syn-Omni: Structured Specialization and Progressive Collaboration for Omnimodal Embeddings](https://arxiv.org/abs/2610.12256v1)*

> 标签：#音频检索 | #音视频问答 | #混合专家模型 | #对比学习 | #LoRA
>
> 评分：**6.3/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Youngtaek Oh：KAIST；Sony Group Corporation
- Qiyu Wu：Sony Group Corporation
- Hiromi Wakaki：Sony Group Corporation
- Junmo Kim：KAIST
- Yuki Mitsufuji：Sony Group Corporation

## 📌 核心摘要

全方位多模态嵌入要把文本、图像、视频、音频及其组合映射到同一向量空间，难点是不同模态既有公共语义又有各自信号特性，单一共享适配容易抹掉模态特性，完全独立训练又失去跨模态联系。Syn-Omni在Qwen-2.5-Omni主干上引入正交模态专家低秩适配，用一条共享路径学习通用语义，用多条模态专家路径学习模态特性，两路输出相加得到适配后表示，正交约束减少两类表示混叠。路由器依据输入的模态组成输出各专家融合权重，渐进协同路由按训练进度先让出现模态独占对应专家以形成分工，再逐渐放开权重让缺失模态专家参与协作。融合权重由协同间隔损失约束，只要求出现模态权重高于缺失模态一个间隔，保留缺失专家参与。与同数据同设置的共享低秩适配基线Uni-Omni相比，在涵盖图像、视频、音频和视听的81个任务评测中，3B规模总体平均Hit@1为Syn-Omni49.4%对Uni-Omni47.7%更高，7B规模总体平均Hit@1为Syn-Omni51.6%对Uni-Omni50.7%更高，提升主要来自音频和视听组合任务。该结论适用于论文自建的图像、视频、音频和视听评测组合，其中视频单项提升有限。在VALOR-32k视听输入、单张NVIDIA RTX A6000、批量大小为1的测量下，3B规模Syn-Omni相对Uni-Omni平均延迟从300.3 ms增至354.6 ms，同一测量下峰值显存从9612 MB变为9676 MB。

## 🔗 开源与复现资源

- 论文首页资源：<https://github.com/sony/syn-omni> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/datasets/TIGER-Lab/MMEB-train> — 暂时无法访问

- 第三方资源：<https://huggingface.co/datasets/ShareGPTVideo/train_video_and_instruction> — 暂时无法访问

- 第三方资源：<https://huggingface.co/datasets/facebook/PE-Video> — 暂时无法访问

- 第三方资源：<https://github.com/May2333/FDCA> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/datasets/CLAPv2/audiocaps> — 暂时无法访问

- 第三方资源：<https://huggingface.co/datasets/cvssp/WavCaps> — 暂时无法访问

- 第三方资源：<https://huggingface.co/datasets/CLAPv2/audioset_strong> — 暂时无法访问

- 第三方资源：<https://huggingface.co/datasets/amaai-lab/MusicBench> — 暂时无法访问

- 第三方资源：<https://huggingface.co/datasets/m-a-p/Music-Instruct> — 暂时无法访问

- 第三方资源：<https://research.google.com/audioset/> — 暂时无法访问

- 第三方资源：<https://github.com/CASIA-IVA-Lab/VAST> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 全模态向量要解决什么检索问题？

这篇论文做的是一种可检索的向量表示，输入可以是文本、图像、视频、音频及其组合，例如文字查图片、音频查视频、图文一起查文本。目标是把任意组合的查询和候选都映射到同一个向量空间，用余弦相似度排序，排第一即算命中。必须保留的信息是语义是否匹配，而不是重建原信号。输出是经过长度归一化的定长向量。读者可以这样理解：编码器负责读懂多模态输入，大语言模型主干负责融合，最后取尾部标记的隐状态作为整条输入的代表。

论文用 Qwen-2.5-Omni 做骨干，视觉与音频编码器冻结，只训练大语言模型层中新加的适配参数。训练数据共 1.12M 条，覆盖图像、视频、音频、视听 4 组，查询到目标的组合很多，既有单模态也有组合模态。评价共 81 个任务，分图像 36、视频 23、音频 12、视听 10，用 Hit@1 衡量首位命中率，数值越高越好。整体分先在每个元任务内平均，再按模态平均，最后对 4 种模态平均，这种聚合避免样本量大的任务主导结论。

### 已有路线为什么只用一个共享适配空间？

此前把多模态大模型转成向量模型的做法，多是在图文或视频上做对比微调并加一个共享 LoRA，例如 E5-V、VLM2Vec、GVE、VLM2Vec-V2、AuroLA 等。进入全模态后，Omni-Embed-Nemotron、WAVE、LCO-Emb、e5-omni 等也大多沿用全共享适配，在混合数据上学一个统一空间。这类做法的好处是实现简单、跨模态对齐直接，但结构上没有区分通用语义和模态特性。另一条结构化适配路线是在任务维度做专家混合，或在适配器内部做正交约束，但不是按模态划分专家，也不是约束共享与专家的关系。论文的动机是不同模态既有共同语义结构又有各自信号特点，全共享容易利用不足，完全隔离又失去协作，因此需要同时保留统一基础和模态分工。

**Uni-Omni × Syn-Omni：** Uni-Omni 指论文自建的对照基线，在同一混合数据上只用单个共享 LoRA 做对比学习微调；Syn-Omni 指在该基线之上加入共享加专家结构与渐进路由的完整方法。二者骨干、数据、优化条件相同，对比才能说明结构带来的增益，而不是数据或训练量差异。

### 混合训练的得失在哪里？

论文先比较 3 种做法：每个模态单独训练的专用模型、用单个共享 LoRA 在混合数据上训练的 Uni-Omni、以及本文的 Syn-Omni。专用模型在本模态内表现好，例如音频专用模型在音频任务上强，但跨到未训练模态就下降，视听专用模型甚至在本组也不突出，说明只见单一模态难以处理组合输入。Uni-Omni 见过全部混合数据，统一表示更强，尤其在视听组合任务上相对稳健，但它没有结构去显式分离共性与特性。Syn-Omni 希望在保持混合训练统一性的同时，用结构把两类知识分开，并在训练中逐步打开跨专家协作。后续所有增益都应在相同数据与优化条件下与 Uni-Omni 比较，才能归因于结构。

### Syn-Omni 的输入到向量经过哪几步？

从一个样本看流程：输入先注明包含文本、图像、视频、音频中的哪几种，得到模态指示向量，再经各自冻结的编码器进入预训练大语言模型主干。主干每层原来是冻结权重 W0，新加入 OME-LoRA 层，由一条共享路径、多条模态专家路径和一个路由器组成。隐状态同时经过冻结主路、共享适配和加权后的专家适配，相加得到该层输出，最终层经指令提示与尾标记池化、长度归一化得到统一向量。训练用对比损失拉近匹配对，另加两个结构正则。推理时共享路径可合并回主干，专家路径因权重随输入变化而保留，需动态路由。

下面这张总体框图展示了从多模态输入到统一向量、共享与专家并行、以及从隔离到协同的 3 段路由，读图时先走主路径再看分支汇合。

> **看图路径：** 1. 先沿左下多模态输入到编码器再到大语言模型主干的箭头看主路径；2. 再看右上共享路径与四个专家路径如何加权求和；3. 最后看右下从隔离到混合再到协同的三段进度示意

[![原论文 Figure 2：Illustration of the Syn-Omni framework.](https://arxiv.org/html/2610.12256v1/overall.png)](https://arxiv.org/html/2610.12256v1/overall.png)

*论文图 2。原论文 Figure 2:：“Illustration of the Syn-Omni framework.”。*

图中左侧是编码器加主干加池化的主链路，中间是共享 LoRA 与文本、图像、视频、音频 4 个专家并行相加，右侧路由器根据隐状态产生权重。下方三小格分别画出硬路由的 0 或 1、软路由的连续值、以及随训练进度混合的余弦曲线。该图说明计算分工：共享管通用，专家管特性，路由管何时协作。

### 共享路径与专家路径如何分工计算？

OME-LoRA 的全称是正交模态专家 LoRA，它把每层的适配增量拆成共享增量加多个专家增量的加权和。共享路径对所有输入都激活，专家按路由权重加权。每个 LoRA 增量本身是低秩分解，输入侧矩阵决定输入子空间，输出侧矩阵决定输出投影。论文只对输入侧矩阵施加正交惩罚，让专家方向与共享方向互补，同时对共享部分做停止梯度，使惩罚只推专家远离共享而不反过来拉动共享。这样共享保持稳定，专家去学剩余的模态特性。秩的设置是共享为 8，每个专家为 4，总有效秩 24，目标模块覆盖每层注意力与前馈的多个投影。

**共享 LoRA 路径 × 模态专家 LoRA 路径：** 共享 LoRA 路径指对所有输入都激活的一组低秩适配参数，负责学习跨模态通用语义；模态专家 LoRA 路径指按文本、图像、视频、音频分别设置的多组低秩适配参数，负责学习各模态特有变换。二者搭配是因为只用共享会压制模态特性，只用专家又缺少统一空间，组合相加后既保留统一对齐基础又保留分工。

该层的前向计算可写成冻结主路加共享适配加加权专家适配之和，符号含义是冻结权重、输入隐状态、共享与遍历模态集合。

\[\mathbf{y}=W_{0}\mathbf{h}+\Delta W_{shr}(\mathbf{h})+\sum_{m\in\mathcal{M}}w_{m}\Delta W_{m}(\mathbf{h}),\]

这个公式的目标是明确参数相加关系，不是近似，路由权重的具体取值由下一节的渐进机制决定。

### 渐进路由如何从隔离走到协作？

路由权重决定每个专家在当前样本中出多少力。硬路由直接用模态指示向量，出现为 1、缺席为 0，专家隔离但无跨模态交流。软路由用一个全连接层对池化后的隐状态打分再过 Sigmoid，得到连续权重，允许缺席模态专家也贡献，但若一开始就用软路由，专家还没形成模态先验就互相干扰。论文用进度等于当前步数除以总步数，分 3 段混合：预热段全用硬路由，过渡段按余弦函数从 0 平滑到 1，协同段全用软路由。预热比例 0.1，过渡比例 0.5。路由器每层独立，参数量很小。

**硬路由 × 软路由：** 硬路由指按输入实际包含哪些模态给 0 或 1 权重，只开对应专家；软路由指由可学习路由器从隐状态算出 0 到 1 之间的连续权重，允许未出现模态的专家也参与。前者保证专家先形成模态先验，后者提供跨模态协作，渐进混合就是先硬后软地过渡。

混合权重的计算是硬权重与软权重的线性插值，系数由进度决定。

\[w_{m}^{(t)}=(1-\alpha_{t})\cdot v_{m}^{mod}+\alpha_{t}\cdot v_{m}^{R},\]

该式中指示为 0 或 1，学习权重为连续值，系数为 0 到 1 的调度，理解了它就能复述何时隔离、何时协作。

### 两个正则项各自约束什么？

正交惩罚针对输入侧矩阵的向量化形式，计算共享方向与每个专家方向余弦绝对值的平方再平均，目标是降低冗余。实现上共享视为固定参考，不接受该项梯度。协同间隔损失针对路由器的软权重，要求每个已出现模态的激活至少比每个未出现模态高出间隔，间隔取 0.2。若用二分类交叉熵，会把缺席模态压到接近 0，等于退回硬路由，失去协作。间隔损失只要求相对领先，允许缺席专家保留有意义的非零激活。

下面示意图用视频加音频输入为例，左侧二分类损失把文本图像压到 0，右侧间隔损失保留一定高度，同时保持视频音频占优，读图时重点看缺席柱是否被彻底压平。

> **看图路径：** 1. 对比左右两组柱状图中未出现模态的高度差异；2. 注意右侧标注的间隔不小于间隔参数的含义；3. 结合视频加音频输入例子看保留协作的意图

[![原论文 Figure 3：Conceptual comparison between BCE Loss and Synergy Margin Loss (SML).](https://arxiv.org/html/2610.12256v1/sml.png)](https://arxiv.org/html/2610.12256v1/sml.png)

*论文图 3。原论文 Figure 3:：“Conceptual comparison between BCE Loss and Synergy Margin Loss (SML).”。*

图中上半标出出现与缺席，下半左右对比两种损失下的路由激活分布，右侧双向箭头标出间隔要求。该图对应路由器监督的设计意图：既分主次又保留协作通道。

**正交惩罚 × 协同间隔损失：** 正交惩罚指约束共享路径与各专家输入投影矩阵方向余弦接近 0，减少参数冗余；协同间隔损失指约束路由器对已出现模态的激活比未出现模态至少高出间隔。前者管参数方向分工，后者管路由权重既分主次又不彻底关断，二者共同支撑先分离后协作。

间隔损失的计算是对所有出现与缺席配对取阈值，出现减缺席不够间隔才惩罚。

\[\mathcal{L}_{SML}=\frac{1}{|\mathcal{P}||\mathcal{A}|}\sum_{i\in\mathcal{P}}\sum_{j\in\mathcal{A}}\max(0,v_{j}^{R}-v_{i}^{R}+\gamma),\]

其中出现集合与缺席集合由指示决定，软权重为监督对象，目标是相对排序而非绝对压制。

### 训练时冻结什么、更新什么、监督从哪来？

训练时视觉与音频编码器冻结，大语言模型原始权重冻结，只更新 OME-LoRA 的共享路径、专家路径与路由器。优化器用 AdamW，余弦学习率，峰值 1e-4，预热比例 0.04，权重衰减 0.01，梯度裁剪 1.0，全局批量 768，用 GradCache 放大有效批量，不用难负例，温度 0.02，训练 1 轮。图像视频用原生分辨率缩放，视频均匀采 8 帧，音频重采样到 16 kHz，文本截断到 512 并左填充。对比损失用 InfoNCE，把同批匹配对的余弦相似度做分类，监督来自配对关系。联合目标再加正交惩罚权重 0.2 与间隔损失权重 0.2，两项正则在所有含 OME-LoRA 的层上平均。

**对比学习损失 × 联合目标：** 对比学习损失指 InfoNCE 目标，把匹配的查询与目标向量拉近、把同批不匹配对推远；联合目标指在对比损失之外再加正交惩罚与协同间隔损失的加权和。前者是主要的检索对齐监督，后两者是结构正则，组合后同时优化对齐精度与分工合理性。

对比损失的形式是负对数似然，分子为匹配对，分母为同批所有候选，温度控制分布锐度。

\[\mathcal{L}_{con}=-\frac{1}{N}\sum_{i=1}^{N}\log\frac{\exp(\text{sim}(\mathbf{e}_{i},\mathbf{e}_{i}^{+})/\tau)}{\sum_{j=1}^{N}\exp(\text{sim}(\mathbf{e}_{i},\mathbf{e}_{j})/\tau)},\]

联合目标的形式是三项加权和，系数控制结构约束强度。

\[\mathcal{L}_{total}=\mathcal{L}_{con}+\lambda_{ortho}\mathcal{L}_{ortho}+\lambda_{SML}\mathcal{L}_{SML},\]

3B 在 8 卡 A100 上约 5 天，7B 在 8 卡 H200 上约 40 小时，批量切块分别为 1 和 4。

### 数据、基线与指标如何保证可比？

训练混合按 4 组组织，图像约 323458 条、视频约 267206 条、音频约 265160 条、视听约 259861 条，组合覆盖文本到图像、图文到文本、视频到文本、音频到文本、视听互检等。评价沿用 MMEB-v1 做图像、MMEB-v2 做视频并补视频到文本方向，另自建音频与视听评测，英文为主。任务类型含分类、检索、问答与视觉定位，分类的候选数为类别数，问答为选项数，检索为库大小。基线用官方权重在统一流程下重测，包括 Omni-Embed-Nemotron、LCO-Emb、e5-omni、OmniEmbed 系列与 WAVE，以及同数据同优化的 Uni-Omni。指标为 Hit@1，越高越好，整体分按元任务平均再按模态平均，避免样本量大的任务主导。

统计上对 81 个任务做配对 t 检验，3B 与 7B 相对 Uni-Omni 的提升 p 分别为 0.0044 与 0.0189。复现时需注意视频帧数、分辨率上下限、音频采样率与左填充都与训练一致，否则相似度分布会偏移。

### 主结果在什么条件下成立、增益来自哪里？

主结果的比较问题是：在同一骨干与相近训练预算下，结构化分工是否比单共享适配与外部全模态向量模型更均衡。公平条件是 Uni-Omni 与 Syn-Omni 用同一混合数据与优化设置，外部基线用官方权重统一评测，指标均为 Hit@1 且按相同聚合方式平均，数值越高越好。

|  | Image (36) | Video (23) | Audio (12) | Audiovisual (10) | All (81) |
| --- | --- | --- | --- | --- | --- |
| 3B Models |  |  |  |  |  |
| Omni-Embed-Nemotron Xu et al. (2025b) | 44.1 | 36.5 | 24.5 | 28.5 | 33.4 |
| LCO-Emb Xiao et al. (2025) | 58.1 | 43.7 | 42.1 | 35.5 | 44.8 |
| e5-omni Chen et al. (2026) | 64.8 | 40.6 | 37.4 | 31.6 | 43.6 |
| Uni-Omni (Contrastive baseline) | 66.8 | 40.4 | 43.1 | 40.4 | 47.7 |
| Syn-Omni (Ours) | 68.1 | 40.5 | 45.6 | 43.4 | 49.4 |
| 7B Models |  |  |  |  |  |
| OmniEmbed-v0.1 Ma et al. (2025a) | 44.2 | 35.0 | 31.6 | 29.0 | 35.0 |
| OmniEmbed-Multivent Zhan et al. (2025) | 51.8 | 40.2 | 39.5 | 34.4 | 41.5 |
| LCO-Emb Xiao et al. (2025) | 61.6 | 45.5 | 45.2 | 35.5 | 46.9 |
| e5-omni Chen et al. (2026) | 72.5 | 44.3 | 44.3 | 42.3 | 50.9 |
| WAVE Tang et al. (2026) | 42.7 | 39.8 | 33.4 | 38.1 | 38.5 |
| Uni-Omni (Contrastive baseline) | 71.3 | 40.2 | 47.5 | 43.9 | 50.7 |
| Syn-Omni (Ours) | 71.7 | 41.4 | 48.7 | 44.6 | 51.6 |

上表是原文主结果表的完整呈现，覆盖 3B 与 7B 全部方法与图像、视频、音频、视听及整体分数。3B 整体 Syn-Omni 为 49.4%，高于 Uni-Omni 的 47.7%，其中音频从 43.1% 到 45.6%，视听从 40.4% 到 43.4%，图像从 66.8% 到 68.1%，视频基本持平。7B 整体从 50.7% 到 51.6%，同样在音频与视听上更明显。e5-omni 在图像与部分视频上仍领先，LCO-Emb 在视频上较强，说明 Syn-Omni 的优势是跨模态更均衡而非每项都第一。该结论依赖混合训练与统一评测流程，若换数据配比或只看单模态，排序可能变化。

下图把 3B 的模态分组柱状可视化，读图时先看三色高低再看增量标注，纵轴为首位命中率越高越好。

> **看图路径：** 1. 比较每组内灰蓝橙三根柱子的高低；2. 注意音频与视听组合上橙色柱子的增量标注；3. 结合纵轴首位命中率方向判断增益大小

[![原论文 Figure 1：Omnimodal adaptation strategies.](https://arxiv.org/html/2610.12256v1/teaser.svg)](https://arxiv.org/html/2610.12256v1/teaser.svg)

*论文图 1。原论文 Figure 1:：“Omnimodal adaptation strategies. We compare three contrastive embedding setups: (1) modality-specific models, each trained independently on a single modality using a shared LoRA,…”。*

图中横轴为图像、视频、音频、视听与整体，橙色为本方法，蓝色为 Uni-Omni 基线，灰色为专用模型平均。可见音频与视听两组橙色高出较多，分别标注加 2.5 与加 3.0，视频增量仅 0.1，整体提高 1.7 个百分点。这与表格一致，支持增益主要来自音频与组合模态的判断，但视频任务仍是短板，不能推广为所有任务普涨。

### 拿掉共享、拿掉渐进各会发生什么？

消融要回答结构中哪部分不可少。比较问题是：在总秩与参数量相近时，增益来自容量还是分工。公平条件是 3B 下对比共享加秩、纯专家、共享加专家有无渐进路由，指标为各模态与整体 Hit@1 越高越好。

| id | Variant | Rank | Params. | PSR | I | V | A | AV | All |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| (a) | Shr | 16 | 29.9M | - | 66.8 | 40.4 | 43.1 | 40.4 | 47.7 |
| (b) | Shr | 24 | 44.9M | - | 67.3 | 38.7 | 43.0 | 41.6 | 47.6 |
| (c) | Shr | 36 | 59.9M | - | 67.3 | 40.7 | 43.8 | 41.2 | 48.2 |
| (d) | Exp | 16 | 29.9M | - | 66.1 | 39.4 | 42.5 | 40.1 | 47.0 |
| (e) | Exp | 16 | 33.3M | ✓ | 65.3 | 39.5 | 42.1 | 40.5 | 46.9 |
| (f) | Shr+Exp | 24 | 44.9M | - | 67.6 | 39.6 | 44.9 | 42.6 | 48.7 |
| (g) | Shr+Exp | 24 | 48.3M | ✓ | 68.1 | 40.5 | 45.6 | 43.4 | 49.4 |

上表是原文结构消融的完整呈现，含 7 种配置的方案、秩、参数量、路由开关与各模态及整体分。单共享从秩 16 到 36 整体仅从 47.7% 到 48.2%，秩 24 甚至略降，说明单纯加容量收益有限。纯专家在相同 29.9M 参数下整体 47.0%，低于单共享，说明缺少统一空间时专家难以对齐。共享加专家在相同 44.9M 下达 48.7%，再加渐进路由达 49.4%，参数 48.3M，超过最大共享版本，支持增益来自结构而非参数量。该表还显示纯专家加路由反而略降，说明没有共享基础时协作也难生效。

路由动态随训练的变化进一步解释机制，读图时注意 3 段背景与两类曲线的分化，纵轴为渐进路由权重。

> **看图路径：** 1. 看横轴训练进度从 0 到 1 的三段背景划分；2. 对比上方视频音频曲线与下方文本图像曲线的走势；3. 注意混合段未出现模态权重从 0 缓慢抬升

[![原论文 Figure 6：Routing dynamics of PSR under video-audio inputs.](https://arxiv.org/html/2610.12256v1/progress.svg)](https://arxiv.org/html/2610.12256v1/progress.svg)

*论文图 6。原论文 Figure 6:：“Routing dynamics of PSR under video-audio inputs.”。*

图中横轴为训练进度，纵轴为路由权重，橙红为出现的视频音频，蓝紫为缺席的文本图像。隔离段缺席权重为 0，混合段逐渐抬到非零，协同段保持出现占优而缺席保留小幅激活。这说明渐进确实先立先验后开协作，而不是一开始就混在一起。

### 路由损失与超参数如何影响协作强度？

另一组消融比较硬路由、软路由加二分类损失、软路由加间隔损失、有无渐进混合。硬路由整体约 48.6%，直接软路由加二分类损失无提升，换成间隔损失略升，渐进加二分类损失也仅 48.8%，只有渐进加间隔损失达 49.4%。层级热图显示二分类损失使除首层外出现模态接近 1、缺席接近 0，退化为硬路由，而间隔损失在各层保留缺席模态的协作激活。未胜出的反例是视频组提升微弱，部分视频检索与问答仍落后于外部基线，表明当前结构对时序建模帮助有限。

下表整理超参数敏感性曲线的关键点，比较问题是权重与间隔多大时整体分最高，指标为整体 Hit@1 越高越好，数据来自原文敏感性附图而非路由消融表。

| 超参数 | 参数取值 | Overall Score（原图纵轴） | 最优标记 |
| --- | --- | --- | --- |
| 正交权重 λortho | 0.05 | 48.9 |  |
| 正交权重 λortho | 0.10 | 49.0 |  |
| 正交权重 λortho | 0.20 | 49.4 | 原图红星 |
| 正交权重 λortho | 0.50 | 49.0 |  |
| 间隔损失权重 λSML | 0.10 | 49.3 |  |
| 间隔损失权重 λSML | 0.20 | 49.4 | 原图红星 |
| 间隔损失权重 λSML | 0.50 | 49.0 |  |
| 间隔损失权重 λSML | 1.00 | 49.0 |  |
| 间隔 γ | 0.1 | 49.3 |  |
| 间隔 γ | 0.2 | 49.4 | 原图红星 |
| 间隔 γ | 0.3 | 48.8 |  |
| 间隔 γ | 0.4 | 48.7 |  |

上表显示 3 组超参数的最优均在 0.2 附近，两侧下降，间隔偏大时下降更明显，说明协作需要适度，压得太狠或放得太松都不好。该结论只在 3B 与当前数据配比下测得，换规模需重调，精确曲线以原图为准。本表数值与单位依据论文 PDF。

下表比较推理成本，比较问题是结构分工带来多少额外开销，指标为延迟越低越好、显存越低越好。

| 模型 | 延迟 | 显存 | 变化来源 |
| --- | --- | --- | --- |
| Uni-Omni 3B | 300.3 ms | 9612 MB | 可合并 |
| Syn-Omni 3B | 354.6 ms | 9676 MB | 保留专家与路由 |

上表在 VALOR-32k 视听输入、单卡批量 1 下测得，延迟增加而显存几乎不变，代价主要在计算而非显存。该结论只在该输入与硬件下成立，实时查询编码时更敏感。

### 方法的代价与尚未验证的范围是什么？

直接代价是推理时专家路径不能合并。标准 LoRA 可训后合并回主干，保持原推理路径，而 Syn-Omni 因路由随输入变化，只合并共享路径，保留 4 个专家与路由器。论文报告 3B 延迟从 300.3 ms 到 354.6 ms，显存从 9612 MB 到 9676 MB，7B 也有类似增加，增幅约 17-18% 延迟、不足 1% 显存。适用边界是：视频任务增益小，图像问答个别下降，外部最强基线在图像视频仍占优；训练只做 1 轮、无难负例，若加难负例或更长训练，相对排序可能变。

未评测范围包括非英文、长视频、高采样率音频与对抗噪声，误判率与偏差也未测量，不能承诺公平性改善。相关性不等于因果，相似度降低与路由非零只能支持分工与协作的解释，不能证明每条样本都因此变好。

### 复现第一步做什么、去哪里找资源？

复现先固定骨干与数据处理：用 Qwen-2.5-Omni 3B 或 7B，冻结编码器与主干，只在每层查询、键、值、输出与前馈门控等模块加共享秩 8 加专家秩 4，缩放因子取秩 2 倍，丢弃率 0.1。输入按论文设置分辨率上下限、视频 8 帧、音频 16 kHz、文本 512 截断左填充，尾标记池化加归一化，对比温度 0.02，批量 768，1 轮，渐进预热 0.1 过渡 0.5，间隔 0.2、两项权重 0.2。先跑通 Uni-Omni 单共享秩 16 个基线，再切到共享加专家与渐进路由，对比整体与分模态 Hit@1。

代码开源、权重可下载、系统可运行是三件事：论文给出 GitHub 链接经核验当前可达，但这只证明链接可达，不证明权重已公开或一键可运行；数据集多为第三方镜像，需各自核对许可与可达性。本次核验中部分 HuggingFace 数据集本次未能确认可达，需自行确认。推理时记得只合并共享路径，保留专家与路由，否则动态加权失效。

### 什么时候值得尝试、还需补哪项验证？

当你的任务同时涉及音频与视听组合检索，且已有全模态大模型骨干、能负担混合数据训练时，值得尝试共享加专家与先隔离后协作的思路，因为论文在该条件下整体更均衡，尤其音频与视听提升明确。当任务以视频细粒度时序为主，或对延迟极敏感时要谨慎，因为视频增益小且延迟增加约 20%。复现第一步是跑通同数据下的 Uni-Omni 基线，再叠加结构，避免把数据差异误当结构增益。

还需补的验证是：换数据配比与更长训练下的稳定性、在视频问答与时刻检索上的细项分析、以及延迟与显存在你自己硬件与批量下的实测。容易误解的是把整体平均分当成每项都赢，实际上它是先按元任务平均再按模态平均，个别数据集仍落后；把搜索到的最优超参数当成部署保证，实际上 0.2 附近最优只在当前规模与数据下成立，换条件需重调。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.12256v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
