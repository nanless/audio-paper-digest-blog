---
title: "Muting Tokens: Exploring Token Sparsification for Efficient Audio Transformers"
date: 2026-10-23
draft: false
tags: [音频分类, 模型剪枝, 信号处理, 高效推理]
categories: [论文速递]
description: "论文在统一流程下比较音频 Transformer 的剪枝与合并稀疏化，提出结合注意力与频域线索的谱平坦度方法，并在三个数据集上验证了频率感知策略在训练后稀疏化中的优势与计算节省。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.31235"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "静音一部分输入：音频 Transformer 的令牌稀疏化怎么做才有效"
paper_digest_original_title: "Muting Tokens: Exploring Token Sparsification for Efficient Audio Transformers"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.31235v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.31235v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.31235v1.pdf"
paper_digest_primary_task: "音频分类"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"method","id":"method.pruning","label":"模型剪枝"},{"facet":"method","id":"method.signal-processing","label":"信号处理"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "模型剪枝"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文在统一流程下比较音频 Transformer 的剪枝与合并稀疏化，提出结合注意力与频域线索的谱平坦度方法，并在三个数据集上验证了频率感知策略在训练后稀疏化中的优势与计算节省。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shreya Sajid"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Fabrizio Julian Piva"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hiram Rayo Torres Rodriguez"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Elif Ceren Gok Yildirim"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Murat Onur Yildirim"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Joaquin Vanschoren"}]
paper_digest_abstract_sha256: "f04bc7febc10e5916862622e36fb0c86198a9bc60283bed53a7e1a576216aa17"
paper_digest_sidecars: {"citation.bib":{"sha256":"2514873ee8268433ccc1e6696e98c3ae81d3a722568a2813d6171aa2dd329a6e","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-31235/citation.bib"},"citation.json":{"sha256":"1c89f1a38e4391236008fbfe3c6a3596b37f701f26f955b2ffca836219dc52e2","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-31235/citation.json"},"citation.ris":{"sha256":"3253a083c69ffb6a9e7d061892e9795aae4a6f311ff257b51babd2703560e05d","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-31235/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"934f8e1013e652303ffe87b0ced1bfa70874405a746e446b602a104062a67499","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-31235/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "c7eca6ce3fc7996677661de45f17da282ef09d8233e49b54c67b2015602668ac"
paper_digest_api_reader_plan_sha256: "f67cd2dde31101f39ab56b33cd41d91fd2e030ae6e360cd9d311094e58eb71b2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "8edf33d2d616b3bc24ff7519a4b95e084300cc8ab37d7fcc27c21fe212842c7a"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "b40b5a8a708605a25d5fe3ffd60bf72ad426815d4239e73a98f31ff838e94239"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ee7ccdbd1d6486752fee390f79ec886833e13b4e749e126aa1bea13ab1a4e662"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4c70c9751aa781349d7580a2fa97efd03fd5e6b488a8a62ffa89f64826fa7bde"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 静音一部分输入：音频 Transformer 的令牌稀疏化怎么做才有效

> 英文题目：*[Muting Tokens: Exploring Token Sparsification for Efficient Audio Transformers](https://arxiv.org/abs/2610.31235v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频分类](/audio-paper-digest-blog/papers/?concept=task.audio-classification)
- **研究方法**：[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression) → [模型剪枝](/audio-paper-digest-blog/papers/?concept=method.pruning)；[信号处理](/audio-paper-digest-blog/papers/?concept=method.signal-processing)
- **研究重点**：[高效推理](/audio-paper-digest-blog/papers/?concept=research_focus.efficiency)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Shreya Sajid：机构信息未能在本次解析中与作者逐人可靠绑定
- Fabrizio Julian Piva：机构信息未能在本次解析中与作者逐人可靠绑定
- Hiram Rayo Torres Rodriguez：机构信息未能在本次解析中与作者逐人可靠绑定
- Elif Ceren Gok Yildirim：机构信息未能在本次解析中与作者逐人可靠绑定
- Murat Onur Yildirim：机构信息未能在本次解析中与作者逐人可靠绑定
- Joaquin Vanschoren：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

音频谱图变压器把语谱图切成小块作为输入标记，音频越长标记越多，自注意力计算量随标记数平方增长，推理代价上升。论文要解决的是如何在尽量保持分类性能的同时减少每层实际处理的标记数量，并比较不同重要性估计方法在音频上的适用性。输入语谱图先切块投影成标记向量，再送入多层变压器，稀疏模块插在注意力与多层感知机之间，在三个等间隔位置按保留率丢弃或合并标记。已有的Top-K方法用类别标记的注意力排序，EViT在此基础上把被丢弃标记按注意力加权平均成一个融合标记，ToMe按余弦相似度配对合并相似标记。论文新增的强度过滤先按语谱图块平均对数梅尔能量划分高低能量组，再在组内用注意力选出保留标记，低频能量与谱平坦度则把标记向量经傅里叶变换得到的频域得分与注意力得分融合排序。在AST-Base、AudioSet-20K的推理时稀疏评测中保留率为50%时，谱平坦度的平均精度均值（mAP）为0.3499，低于未稀疏基线的0.3572。同一评测设置下谱平坦度每样本推理计算量由基线的261.43 GFLOPs降至124.95 GFLOPs，原文用DeepSpeed在批量为1时统计，未披露训练时长与硬件成本。结论适用于推理时直接稀疏与微调时加入稀疏两种情形，后者对具体启发式更不敏感；在AudioSet-20K与ESC50上以25%保留率做时长截取对比时，强度方法以准确率与平均精度均值计仅在长于2秒时优于Top-K。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音频 Transformer 为什么会被令牌数量拖慢

论文处理的输入是声音转成的对数梅尔频谱，再切成小块送入音频频谱 Transformer，简称 AST。每个小块变成一个令牌，令牌是 Transformer 处理的基本单位，自带位置信息并参与自注意力计算。音频越长，切出的块就越多，令牌序列就越长。

自注意力的计算量随令牌数平方增长，令牌多 1 倍，两两比较大约多 4 倍。10 秒的 AudioSet 片段比 1 秒的语音命令产生多得多的令牌，所以长音频的推理更贵。任务目标是在减少参与计算的令牌的同时，尽量保住分类所需的判别信息。输出在 3 个数据集上分别是命令词准确率、环境声准确率和多标签平均精度，数值越高越好。

对刚入门的读者，可以把令牌想象成拼图块：每块对应一小段时间和一小段频率。模型要让每块都去看其他所有块，块越多，看一遍的开销越大。稀疏化的想法就是提前扔掉或合并一部分块，让后面各层只处理剩下的块。

### 已有稀疏化路线与本文要补的缺口

在图像和语言里，令牌稀疏化已有两条路线。剪枝是直接删掉不重要的令牌，合并是把相似令牌平均成一个。视觉里有代表性的 Top-K、EViT 和 ToMe，前两者是剪枝，后者是合并。音频里此前多是借用视觉方法，ToMe 在掩码自编码框架下掉点很少，但该框架本身习惯处理稀疏输入，对稀疏不敏感，换到普通全量输入的 AST 上效果是否一样并不清楚。

另一项音频研究只试了 Top-K 剪枝和强度剪枝，只用 ViT-Base 且只在微调时加稀疏，没有回答训练后直接稀疏、不同模型大小和不同音频时长下谁更稳。本文要补的就是在统一训练和推理流程下，把剪枝与合并、注意力与音频特有线索放在相同保留率、相同插入位置下比较。

这种统一比较很重要，因为不同论文的训练轮数、数据增强和插入层数不同，直接对比数字容易误判。固定管线后，剩下的差异主要来自选择保留哪些令牌的规则本身。

### 论文要回答的具体问题

论文把问题拆成三件可测的事。第一，在 AST 的 Base、Small、Tiny 3 种规模上，现有剪枝与合并方法在训练后稀疏化时性能如何随保留率下降，保留率指每轮稀疏后留下的令牌比例，原文取 90%、70%、50%、25%。第二，频谱能量和令牌向量频域结构这类音频相关线索，能否在模型参数不动的情况下给出比纯注意力更好的重要性排序。第三，音频时长是否改变强度这类输入相关线索的有效性，特别是在低保留率下。

为此论文固定把稀疏模块放在每个 Transformer 块的注意力分支与多层感知机分支之间，并在全网 3 个等间隔位置执行稀疏，把网络分成 4 段，每段用相同的保留率。这样不同方法省掉的令牌数大体可比，剩下的差异主要来自选了哪些令牌留下。

3 个问题分别对应部署中的真实顾虑：模型变小后是否还稳、不重训能否靠更好的打分保性能、短语音和长环境声是否要用不同策略。

### 从频谱到保留令牌的完整流程

拿一个音频样本为例，先算对数梅尔频谱，再按 16×16、时频方向重叠为 6 的设定切块并线性投影，得到令牌向量序列，外加一个负责汇总的 CLS 令牌。模型是标准的 AST，骨干用 DeiT 的 Base、Small、Tiny 配置并从 ImageNet 预训练出发。

稀疏化模块放在每个 Transformer 块的注意力分支与多层感知机分支之间，全网取 3 个等间隔位置执行，相当于把网络分成 4 段。每个阶段按统一保留率 r 执行，取值为 0.25、0.50、0.70、0.90，保留的令牌继续往后传，最终由 CLS 做分类。

推理到指定位置时，先给每个令牌打一个重要性分数，再按保留率留下 Top-K 个，CLS 令牌始终保留。打分只决定本轮留下谁，被去掉或合并的令牌不再以原数量进入后面的自注意力计算，从而减少计算量。

纯注意力方法只看 CLS 注意力，强度方法先看输入块能量再看注意力。具体做法是先算每块对数梅尔能量的均值，按数据集设定的阈值分成高低两组，先在高能量组内按 CLS 注意力排序取 Top-K，若高能量组数量不够，再从低能量组按注意力补足。

低频能量和谱平坦度方法把令牌向量再做一次傅里叶分析得到频域分数并与注意力融合。前者把令牌嵌入变换到频域，用高斯低通滤波突出低频结构，再算能量分数；后者沿嵌入维度做快速傅里叶变换，算幅度谱几何均值与算术均值之比，越低说明峰越突出、结构越强。两类频域分数都与 CLS 注意力结合，共同决定保留顺序。

合并方法则按余弦相似度配对平均。做法是把令牌集合分成两部分，每个令牌在另一部分找最相似的对应，再把相似度最高的若干对取平均合并。另一类保留信息的思路是把未进入 Top-K 的令牌按 CLS 注意力加权平均成一个融合令牌，随保留集合一起往后传。

### 基线方法：Top-K、EViT 与 ToMe 各做什么

Top-K 是最简单的剪枝基线，重要性就是空间令牌与 CLS 令牌之间的注意力，每轮留下注意力最高的 Ks 个。EViT 在此基础上多做一步补救，把没选中的令牌按 CLS 注意力加权平均成一个融合令牌，一起送往后层，目的是减少直接丢弃的信息损失。ToMe 则是合并路线，把令牌分成两组，每个令牌按余弦相似度找最相似的对方，取最匹配的若干对做特征平均，从而减少令牌数。

三者的代价差异很小，主要在是否保留被筛掉的信息。Top-K 最省但最激进，EViT 多一个融合令牌的计算，ToMe 需要算相似度和配对。理解这点后，才能明白后文计算量表格中各方法 GFlops 几乎相同的原因。

**令牌剪枝 × 令牌合并：** 令牌剪枝指直接丢弃一部分令牌，后续层不再处理它们，省计算但可能丢信息；令牌合并指把相似令牌两两平均成一个令牌，保留信息但可能引入平均噪声。两者分工不同：剪枝靠重要性排序做取舍，合并靠相似度做压缩，本文同时评估这两类以覆盖不同的信息保留方式。

**CLS 注意力 × Top-K 保留：** CLS 注意力指分类用的 CLS 令牌对每个普通令牌的注意力权重，用来估计哪个输入块对最终判断更重要；Top-K 保留指按这个分数只留下前 K 个令牌。两者搭配构成最常用的基线：前者打分，后者执行截断，本文的强度和频域方法都是在这个打分基础上增加额外线索。

### 强度引导的剪枝如何先分组再排序

强度方法的输入对象是原始频谱块，计算每个块的平均对数梅尔能量，作为信号强弱的粗代理。论文指出只看强度不可靠，因为高能量也可能是背景噪声，所以只把它当粗筛。每层按数据集相关的阈值把令牌分成高强度组 H 和低强度组 L，先在 H 组内按 CLS 注意力排序取 Top-K，如果 H 组数量不够 K，再从 L 组按注意力补足。

下面这张图展示了这个两步过程，左侧是带 CLS 的输入令牌，中间是分组，右侧是组内排序与补充规则，读图时注意颜色只表示分组归属，不代表能量绝对值。

> **看图路径：** 1. 先看最左侧输入令牌与 CLS 的位置关系；2. 再看中间按阈值分成高强度组 H 与低强度组 L 的分组动作；3. 最后看右侧高强度组内按 CLS 注意力选 Top-K、不够再从 L 组补充的规则

[![原论文 Figure 2：Intensity-guided token pruning.](https://arxiv.org/html/2610.31235v1/intensity.svg)](https://arxiv.org/html/2610.31235v1/intensity.svg)

*论文图 2。原论文 Figure 2:：“Intensity-guided token pruning. Tokens are divided into high- (H) and low- (L) intensity groups based on an applied threshold.”。*

图中确实可见从左到右的三次箭头：先分组为 Group H 与 Group L 并保留 CLS，随后只对 Group H 画出到 CLS 的注意力连线并选出 3 个示例令牌，最后当高强度组不足时从 Group L 补充 3 个令牌汇入 CLS。这说明强度只决定候选池，注意力才决定最终顺序，两路信息在选择阶段汇合。

**频谱块强度 × 注意力分数：** 频谱块强度指每个对数梅尔频谱块的平均能量，是输入本身的属性，高能量大致对应信号强；注意力分数是模型内部算出的相关性。两者搭配的理由是只看能量会误留高能量噪声，只看注意力会忽略输入能量结构，先按强度粗筛再按注意力精选可以互补。

### 低频能量与谱平坦度如何给令牌向量再打分

低频能量方法处理的对象是切块投影后的令牌向量，不是原始频谱。它对每个向量做傅里叶变换，经高斯低通滤波突出低频结构，再算能量得到频域分数，最后与注意力分数融合后做 Top-K 选择。动机来自视觉 Transformer 更偏好低频特征的观察，论文把它搬到音频的令牌向量上。

谱平坦度是本文提出的新方法，同样对每个令牌向量沿向量维度做快速傅里叶变换，算幅度谱的几何平均与算术均值之比。比值低意味着频谱有突出峰，更像有调或语音类结构；比值高意味着频谱平坦，更像噪声。论文假设平坦度低的令牌内部组织更好，把该分数与 CLS 注意力结合，优先保留既被关注又有结构的令牌。

下面这张图展示了谱平坦度分支的结构，读图时注意区分频域框内外的两条路径：一条是频域计算，另一条是注意力直连，两者在右侧交叉圆圈汇合。

> **看图路径：** 1. 先沿左侧 CLS 注意力与输入令牌的连线看两路输入；2. 再看中间虚线框内 FFT 到谱平坦度计算的顺序；3. 最后看右侧交叉圆圈处两路分数汇合选出 Top-K 令牌

[![原论文 Figure 4：Spectral flatness-guided token pruning.](https://arxiv.org/html/2610.31235v1/sf.svg)](https://arxiv.org/html/2610.31235v1/sf.svg)

*论文图 4。原论文 Figure 4:：“Spectral flatness-guided token pruning.”。*

图中确实可见左侧 CLS 同时连向输入令牌和右侧融合圆圈，中间虚线框内是 FFT 到 Spectral Flatness 的向上箭头，右侧交叉圆圈把频域分数与注意力分数汇合后输出 Top-K 令牌与 CLS。这说明最终排序同时依赖模型内部信号与令牌向量的频域组织度。

**低频能量 × 谱平坦度：** 低频能量指把令牌向量做傅里叶变换后经高斯低通滤波保留的能量，假设结构化内容集中在低频；谱平坦度指幅度谱的几何平均与算术平均之比，比值越低说明频谱有突出峰、越像有调结构，比值越高越像噪声。两者都是把令牌向量当作一维信号来度量其内部组织程度，再与注意力融合用于排序。

### 两种使用稀疏的阶段有什么不同

论文评估了两种运行阶段。训练后稀疏化是用已经在目标音频集上微调好的模型，推理时才加稀疏，参数固定不动，考验的是重要性启发式本身准不准。带稀疏微调是从 ImageNet 预训练权重出发，微调时就打开稀疏，模型可以在训练中学会适应被截断的输入。

实现上微调遵循原 AST 流程，AudioSet-20K 和 ESC50 微调 25 轮，语音命令集训练 30 轮，开稀疏时关闭原 AST 默认的 SpecAugment 等掩码，避免与稀疏重复掩码。3 种模型都在训练后设置下测性能与效率，带稀疏微调只用 AST-Base，因为它是原 AST 默认大小。计算代价用 DeepSpeed 在批量为 1 时统计每样本浮点运算数。

可以把前者理解为考试时突然少给草稿纸，看学生能否挑重点写；后者是平时就用很少的草稿纸训练，考试时自然更适应。论文对比两者，正是要说明启发式在不能重训时更关键。

**训练后稀疏化 × 带稀疏微调：** 训练后稀疏化指拿已经在音频数据上微调好的模型，推理时才插入稀疏模块，参数不再更新；带稀疏微调指从 ImageNet 预训练权重出发，在目标音频数据微调时就打开稀疏，让模型适应被截断的输入。两者分工是回答不同部署问题：前者省训练成本，后者允许模型补偿信息损失，本文对比两者以说明启发式选择何时关键。

### 数据、模型与评价条件如何对齐

3 个数据集覆盖不同时长与任务难度。Speech Commands V2 简称 SPC 是 1 秒 35 类命令词，共 105829 条，划分约 84843 训练、9981 验证、11005 测试；ESC50 是 5 秒 50 类环境声，共 2000 条，按 5 折交叉验证，每折约 1600 训练；AudioSet 平衡集的 20K 评估版简称 AS-20K 是 10 秒 527 类多标签，约 22000 训练、约 20000 评估。时长差异正是论文后面分析强度方法时要用的条件。

骨干统一为 AST，Base、Small、Tiny 3 种规模，块大小与重叠固定。指标方向是准确率越高越好，多标签用平均精度 mAP 越高越好。训练后结果取三次运行平均，频率与注意力对照取五次平均，时长控制实验取六次平均，以减少随机性。比较公平性来自同一管线、同一插入位置、同一组保留率，只有打分与合并方式不同。

这样的对齐让读者复述时能说清前提：同样的数据划分、同样的起点权重、同样的稀疏位置，方法间才可比，跨论文直接比绝对值没有意义。

### 训练后稀疏化的主要性能变化

以下比较要回答的问题是：在 AST-Base 上训练后直接稀疏时，不同方法在 3 个数据集、4 个保留率下的准确率或 mAP 如何变化，条件是同一管线且三次平均，指标越高越好。基线是不稀疏的完整模型，保留率越低，留下的令牌越少。

|  | SPC (Acc(%)) | SPC (Acc(%)) | SPC (Acc(%)) | SPC (Acc(%)) | ESC50 (Acc(%)) | ESC50 (Acc(%)) | ESC50 (Acc(%)) | ESC50 (Acc(%)) | AS-20K (mAP) | AS-20K (mAP) | AS-20K (mAP) | AS-20K (mAP) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AST-B | 97.67 | 97.67 | 97.67 | 97.67 | 89.42 | 89.42 | 89.42 | 89.42 | 0.3572 | 0.3572 | 0.3572 | 0.3572 |
| r (%) | 90 | 70 | 50 | 25 | 90 | 70 | 50 | 25 | 90 | 70 | 50 | 25 |
| Top-K Haurum et al. (2022a) | 97.46 | 97.43 | 97.21 | 88.73 | 89.02 | 88.42 | 87.32 | 78.47 | 0.3557 | 0.3546 | 0.3470 | 0.2956 |
| EViT Liang et al. (2022a) | 97.44 | 97.27 | 97.29 | 90.03 | 88.77 | 88.17 | 87.00 | 75.42 | 0.3552 | 0.3545 | 0.3476 | 0.2981 |
| ToMe Bolya et al. (2023) | 97.51 | 97.47 | 97.14 | – | 88.76 | 88.45 | 87.25 | – | 0.3567 | 0.3539 | 0.3470 | – |
| Intensity | 97.55 | 97.46 | 97.19 | 88.63 | 89.10 | 88.52 | 87.43 | 78.62 | 0.3567 | 0.3549 | 0.3479 | 0.3033 |
| LFE Wang et al. (2022b) | 97.66 | 97.62 | 97.50 | 93.49 | 89.12 | 88.45 | 87.02 | 78.92 | 0.3568 | 0.3546 | 0.3484 | 0.3012 |
| SF | 97.68 | 97.66 | 97.40 | 89.00 | 89.20 | 88.67 | 87.47 | 78.97 | 0.3576 | 0.3564 | 0.3499 | 0.3007 |

表中可见在 AST-Base 上谱平坦度 SF 在多数保留率和数据集下居前 2 位，低频能量 LFE 也较稳，ToMe 在小模型与 ESC50 上偶有竞争力但在大模型上不稳。需要注意 25% 保留率下 SPC 上 LFE 的 93.49 明显偏离相邻趋势，论文原表如此呈现，解读时应谨慎并以高保留率的稳定模式为主。未胜出的例子是纯注意力的 Top-K 在 AS-20K 的 25% 保留率下 mAP 掉到 0.2956，明显低于同条件 SF 的 0.3007，说明固定参数下只看注意力不够。本表数值与单位依据论文 PDF。

### 省了多少计算与帕累托权衡长什么样

以下比较要回答的问题是：在 AST-Base 的 AS-20K 上，不同方法在各保留率下每样本浮点运算量如何下降，基线为 261.43 GFLOPs，保留率越低运算量越低，百分比为相对基线的下降。批量为 1，用 DeepSpeed 统计，数值越小越省。

|  | AS-20K (GFLOPs) | AS-20K (GFLOPs) | AS-20K (GFLOPs) | AS-20K (GFLOPs) |
| --- | --- | --- | --- | --- |
| Baseline | 261.43 | 261.43 | 261.43 | 261.43 |
| r (%) | 90 | 70 | 50 | 25 |
| Top-K Haurum et al. (2022a) | 222.28 ↓ 15.0% | 164.16 ↓ 37.2% | 124.85 ↓ 52.3% | 93.74 ↓ 64.3% |
| EViT Liang et al. (2022a) | 222.61 ↓ 14.8% | 164.45 ↓ 37.1% | 125.05 ↓ 52.2% | 93.99 ↓ 64.0% |
| ToMe Bolya et al. (2023) | 226.11 ↓ 13.5% | 165.77 ↓ 36.6% | 125.60 ↓ 52.0% | – |
| Intensity | 222.28 ↓ 15.0% | 164.16 ↓ 37.2% | 124.89 ↓ 52.2% | 93.79 ↓ 64.1% |
| LFE Wang et al. (2022b) | 222.66 ↓ 14.8% | 164.46 ↓ 37.1% | 125.10 ↓ 52.1% | 93.95 ↓ 64.1% |
| SF | 222.41 ↓ 14.9% | 164.26 ↓ 37.1% | 124.95 ↓ 52.2% | 93.84 ↓ 64.1% |

表中可见保留率 50% 时各方法约省 52% 运算，25% 时约省 64%，方法间差异很小，主要来自各自额外计算开销。ToMe 在 25% 无数据，原文以横线表示。代价是频域方法略多一点开销，但性能更高，说明多花的少量傅里叶计算换来了更准的保留选择。本表数值与单位依据论文 PDF。

下面这张帕累托图展示了 AS-20K 上 50% 保留率时性能与代价的权衡，横轴是 GFlops 越小越省，纵轴是 mAP 越高越好，读图时注意纵轴范围很窄，点的高低差异虽小但排序稳定。

> **看图路径：** 1. 先看横轴 GFlops 与纵轴 mAP 分别代表代价与性能；2. 再比较 Spectral Flatness 点与其他方法点的上下左右位置；3. 最后看虚线帕累托前沿点连接了哪几个方法

[![原论文 Figure 1：Post-training sparsification results on the AST-Base Gong et al.](https://arxiv.org/html/2610.31235v1/main_pareto.svg)](https://arxiv.org/html/2610.31235v1/main_pareto.svg)

*论文图 1。原论文 Figure 1:：“Post-training sparsification results on the AST-Base Gong et al.”。*

图中确实可见 Spectral Flatness 点位于最上方约 0.3499 附近且横坐标约 124.95，Intensity 与 Top-K 在其下方，LFE 与 EViT 居中，ToMe 在最右侧约 125.6 且纵坐标最低，虚线连接的帕累托前沿由 Top-K、Intensity 与 Spectral Flatness 组成。这支持在相同计算预算下频域线索带来性能优势的判断，但优势幅度是千分之几的 mAP，不是数量级提升。

### 带稀疏微调后方法差异为什么变小

在 AST-Base 上带稀疏微调时，各数据集性能随保留率下降都很稳，到 25% 保留率仍接近基线，方法间差异比训练后小得多。论文认为模型在训练中学会了适应被留下的令牌，补偿了不同打分启发式的偏差，所以简单的 Top-K 也有竞争力，谱平坦度与低频能量的相对优势被缩小。

这并不意味着启发式无用，而是适用阶段不同：若必须复用已有微调模型且不愿再训练，训练后稀疏下选频率感知方法更稳；若能承担在目标数据上重微调，选简单方法也可行。需要注意该节只有趋势描述而无完整数字表，复述时只能讲方向，不能引用不存在的精确提升。

对初学者而言，记住一条经验即可：能训练就让模型自己适应稀疏，不能训练才更依赖人工设计的打分规则。

### 频率信息与输入时长分别起了什么作用

为分离频率度量与注意力变体的贡献，论文做了 4 种组合对照：谱平坦度与低频能量两种频率度量，分别搭配标准 CLS 注意力 TopK-CLS 与多头加权注意力 TopK-Wt。结果是谱平坦度在各保留率和注意力变体下都略优于对应的纯注意力基线，低频能量多数时候优于基线但在 AS-20K 与 ESC50 偶尔低于基线，说明强调低频不总是有效，可能与数据集特性有关。同时 TopK-Wt 在低于 70% 保留率时倾向优于 TopK-CLS，论文推测是因为它还包含令牌间注意力，信号更分散。

另一组控制实验固定在 25% 保留率，用随机时间窗在推理时把 AS-20K 从 1 秒截到 10 秒、ESC50 从 1 秒截到 5 秒，比较强度剪枝与纯 Top-K。结果是长于 2 秒后强度剪枝持续优于 Top-K，短于 2 秒则优势消失甚至误伤。论文的解释是长音频令牌多且有重复或持续事件，冗余大且有清晰的静音或背景低能量区可安全丢弃；1 到 2 秒的短片段往往只有一个词或事件，几乎每个令牌都关键且强度差异小，按强度筛容易删错。这也说明强度方法的结论只在较长输入条件下成立。

两组对照共同说明：频域增益是小而稳的，时长增益是有门槛的，脱离保留率和时长谈谁更好会误导。

### 结论在什么条件下才成立，有哪些反例

频率感知方法的稳定优势主要来自训练后稀疏化，且是在本文统一管线、三次平均、AST 3 种规模与 3 个数据集范围内观察到的。换到带稀疏微调，优势会缩小。低频能量需要调高斯低通截止，强度需要调区分高低能量的阈值，都需按数据集校准，只有谱平坦度被描述为无需额外调参、泛化较好。

反例也要记住：ToMe 在 Small 与 Tiny 的 ESC50 上有竞争力，但在 Base 上不稳，论文推测合并会干扰大模型更特化的注意力语义，但这只是推测。低频能量在个别数据集和保留率下会输给纯注意力基线。强度在 1 到 2 秒短输入下不占优。这些边界说明没有一种方法在所有规模、时长和保留率下都最优。

因此复述结论时要加限定词：在本文的模型、数据和训练后设置下，谱平坦度最稳，而不是在所有音频任务中都最优。

### 要复现第一步该做什么

先准备 AST 的 ImageNet 预训练权重与 3 个数据集的固定划分，按原文块大小 16×16、重叠 6 切分对数梅尔频谱。稀疏模块放在每个块的注意力与多层感知机之间，全网 3 个等间隔位置，保留率取 90%、70%、50%、25% 中的目标值。训练后评估就加载已微调模型，推理时打开稀疏并测准确率或 mAP 与 DeepSpeed 批量为 1 的 GFLOPs；带稀疏微调则从预训练出发，关闭 SpecAugment 等掩码，按 25 轮或 30 轮重训。

关于资源可用性，本次只依据论文正文与官方原图，未发现经校验的代码、模型或数据下载链接，因此不能声称作者已公开资源，需要补验证的是阈值与滤波截止的具体取值、随机种子与三次平均的方差，以及 25% 下个别偏离点的稳定性。

第一步建议先跑通不稀疏的基线，确认精度与原文接近，再插入最简单的 Top-K 稀疏，确认计算量随保留率下降，最后再加入强度与频域打分，这样出问题时能定位是管线还是打分的问题。

### 什么时候值得尝试这种稀疏化

当部署的是已微调好的 AST 且长音频推理太贵，又不想重训时，值得先试训练后稀疏化中的谱平坦度方法，它在本文条件下最稳且无需调参。若输入多为 5 秒或 10 秒这类较长片段，且愿意按数据集调阈值，强度结合注意力的方法也可考虑。若能承担重微调且追求简单实现，纯 Top-K 在稀疏微调下也够用。

仍需补的验证是更大规模 AudioSet 全量、流式实时延迟与真实端侧吞吐，以及与量化、蒸馏等压缩的叠加效果。论文的价值在于给出了音频下统一比较的基准与音频特有线索的方向，而不是证明稀疏化在所有场景下都不掉点。

对研究生而言，这篇论文更适合当作选题起点：先理解打分规则如何改变保留集合，再去想还有哪些音频先验可以做成轻量打分，而不是直接把某个数字当作通用提升。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.31235v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-23 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-23/)
