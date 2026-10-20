---
title: "Modaliff: A Unified Token Diffusion Model for Any-to-Any Generation"
date: 2026-10-20
draft: false
tags: [音频生成, 音频字幕生成, 扩散模型, 多模态学习]
categories: [论文速递]
description: "Modaliff 把条件和目标拼成一条统一令牌序列做去噪，只用双模态对子训练就支持任意方向生成，在多数任务上取得较好的保真度，但结论依赖紧凑语义隐空间和固定评测集。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.25533"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "Modaliff：用统一令牌序列做文本图像音频互转"
paper_digest_original_title: "Modaliff: A Unified Token Diffusion Model for Any-to-Any Generation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.25533v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.25533v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.25533v1.pdf"
paper_digest_primary_task: "音频生成"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-generation","label":"音频生成"},{"facet":"task","id":"task.audio-captioning","label":"音频字幕生成"},{"facet":"method","id":"method.diffusion","label":"扩散模型"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"}]
paper_digest_primary_method: "扩散模型"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "Modaliff 把条件和目标拼成一条统一令牌序列做去噪，只用双模态对子训练就支持任意方向生成，在多数任务上取得较好的保真度，但结论依赖紧凑语义隐空间和固定评测集。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Duc Kieu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kien Do"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Minh Khoa Le"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tung Kieu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Dang Nguyen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Thin Nguyen"}]
paper_digest_abstract_sha256: "2c8fb253ba6ab7ec7a7bb28ed81176d32321a01520f798ba0b0f4934c38e9996"
paper_digest_sidecars: {"citation.bib":{"sha256":"786efe338aae6e61e7f29282b79efabb4e4c483ed631e215b06484505de052a7","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25533/citation.bib"},"citation.json":{"sha256":"9c2c8b5998694d70b4b702d1c43c6956b269c635f8545ab583d738f5254f84e8","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25533/citation.json"},"citation.ris":{"sha256":"67741a5e3cd39f3694028c4ffa173ded9cecf69fee575279449c322cf69fb8d9","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25533/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"b88f3065eb1e7c783683a14455c411cf1afc37e1b0c6da013520ea430619ee11","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25533/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "1b8a529be8941cc55481ad34aed465a6ae35468cda4fd764ac9970fed6cad43b"
paper_digest_api_reader_plan_sha256: "31c5e62820a2d1c2f8d46aeba233bfc84b1234efa5ce64b8e3afedcdf990f6dc"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "205b3ef31256a3105cd2d1df6ab902950bf0c987968ca4cf7dc376620f6957aa"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "ec01ba54bc5e190fe05e67b61ad80bf555e26b98a4b9a6b861ea88b96513c28f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "6ea293bcef18f569fc02ac1037540ed54b1b64a1742df4ed186ce30cf2c3f5a3"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "6fba2eb7de09e4fa85d50a7e648798d622041a47aa5be958d37ce5316ae42666"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 Modaliff：用统一令牌序列做文本图像音频互转

> 英文题目：*[Modaliff: A Unified Token Diffusion Model for Any-to-Any Generation](https://arxiv.org/abs/2610.25533v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频生成](/audio-paper-digest-blog/papers/?concept=task.audio-generation)；[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频字幕生成](/audio-paper-digest-blog/papers/?concept=task.audio-captioning)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [扩散模型](/audio-paper-digest-blog/papers/?concept=method.diffusion)；[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Duc Kieu：机构信息未能在本次解析中与作者逐人可靠绑定
- Kien Do：机构信息未能在本次解析中与作者逐人可靠绑定
- Minh Khoa Le：机构信息未能在本次解析中与作者逐人可靠绑定
- Tung Kieu：机构信息未能在本次解析中与作者逐人可靠绑定
- Dang Nguyen：机构信息未能在本次解析中与作者逐人可靠绑定
- Thin Nguyen：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是在文本、图像、音频之间自由转换的单个生成模型，困难在于三种信号结构不同且完整对齐的三元组稀缺，处理过程是把条件与目标的原生隐序列拼成统一序列并由同一去噪器去噪。冻结的对比编码器先把各模态映射为原生隐序列，拼接后的统一序列直接作为去噪器的输入，保留各自结构而不压缩到共享向量空间。每个词元随即标注角色、模态与噪声水平并经词元级自适应归一化注入去噪器，基于角色的位置编码让条件段保留内部结构而目标查询把条件看作无序集合，该标注序列控制同一去噪器的逐词元计算。去噪器以对偶训练同时学习两个方向的干净隐变量预测，其输出的干净隐变量再交由冻结解码器生成，缺失图像音频对时用文本为中介构造一致性目标，多条件则在推理时组合单条件预测或用联合描述微调。与OmniFlow相比，Modaliff在文本到图像任务的MSCOCO评测上以生成图像与参考样本的特征分布差异指标（FID，越低越好）13.77对23.84取得更优保真度。该结论适用于以对比编码器隐变量为中介且解码器冻结的设置，单图难以表现语音或鸣叫等瞬态声音，多条件组合仍需权衡权重。原文披露去噪器含558M可训练参数并在单卡H100上训练至多50万步，未披露完整推理延迟与部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 任意互转任务要解决什么困难

任意互转指同一个模型要在文本、图像、音频之间自由转换，例如看图写话、由声音想象场景、按描述合成音频。输入是其中一个或两个模态的样本，输出是另一个模态的样本，转换中必须保留语义内容，同时符合目标模态的结构。

困难在于 3 种模态的原生结构不同。文本是离散符号序列，长度可变且依赖语序；图像有空间结构；音频有时间连续性。如果把它们压成同一种定长向量，会丢失文本的词序和图像音频的细粒度结构。

如果要求文本图像音频三者对齐的三元组，则数据稀少难收集。刚入门时容易误以为多加数据就能解决，实际上还需要一个能保留各模态原生表示、又能灵活重组条件和目标的建模方式。

### 已有两条路线各卡在哪里

第一条路线把所有模态令牌拼起来建模联合分布，代表是 UniDiffuser 和 OmniFlow。它的好处是形式统一，一个 Transformer 处理拼接后的多模态令牌。但原文指出，这类方法常需要完全对齐的多模态元组，而且对图像加文本生成图像这类灵活条件组合支持较弱。

第二条路线把各模态映射到共享表示空间再做条件生成，代表是 CoDi 和 FlowBind。它降低了对三元组的依赖，但需要对比预训练或把所有模态压成同样形状的向量，限制了表达能力。FlowBind 虽然用配对数据联合训练，但仍要求共享先验与各模态表示维度匹配，且每个模态一个速度模型。理解这两条路线的代价，才能明白 Modaliff 为什么既不要共享向量空间，也不要三元组。

### 论文把问题限定在什么范围

Modaliff 只研究文本、图像、音频 3 个模态之间的 1 对一生成和两条件生成，例如文本到图像、音频到文本、文本加音频到图像。不研究视频，也不研究任意模态数量下的通用证明。

监督限定为广泛可得的双模态对子，即图像文本对、音频文本对，以及可选的图像音频对。当图像音频对缺失时，允许以文本为中心模态间接学习图像与音频之间的映射。输入处理不做像素级或波形级直接扩散，而是先用冻结编码器得到各模态的隐令牌序列，再在隐空间做扩散，低层合成交给冻结解码器。

### 整体流程如何把不同任务变成同一种序列

沿着一个样本走一遍，输入例如一张图和一句描述，输出例如一段音频。第一步用各自冻结编码器得到图像令牌和文本令牌，音频目标则从噪声开始。第二步把干净的条件令牌和加噪的目标令牌拼成一条统一序列，序列中每个令牌还带有角色、模态和噪声水平属性。第三步共享的 Transformer 去噪器在这条序列上做注意力交互，只预测目标片段对应的干净隐变量，最后用音频解码器得到波形。

换 1 个任务只是重排拼入哪些片段，网络结构不变。扩散的前向加噪仍是常用形式，干净样本按系数衰减再加高斯噪声。

\[x_{t}=a_{t}x+\sigma_{t}\epsilon,\ \ \epsilon\sim\mathcal{N}\left(0,\mathrm{I}\right)\]

这里的符号表示加噪后样本、随时间变化的信号系数和噪声系数，噪声服从标准正态分布。训练目标是让网络从加噪隐变量恢复干净隐变量，推理时再把预测转成噪声空间配合无分类器引导采样。

### 统一令牌序列与属性如何消除任务歧义

每个模态先保持原生隐序列，例如图像是一个 768 维令牌，文本是 32 个 256 维令牌，音频是一个 512 维令牌，再经可训练输入投影映射到同一 Transformer 宽度。条件用干净序列，目标用当前时间步的加噪序列，拼接后得到随任务变化的统一序列。

只拼接还不够，因为不同任务可能拼出同样长度的序列，模型分不清谁是条件、谁是目标。论文给每个令牌附加属性元组，角色取 0 表示条件、取 1 表示目标，模态标明文本图像音频，时间步对条件记为 0、对目标记为当前去噪步。这些属性经嵌入后注入每个 Transformer 块的按令牌自适应归一化，产生令牌专属的缩放、平移和门控。

**条件序列 × 目标序列：** 条件序列指干净的已知模态令牌，目标序列指加噪后需要去噪恢复的模态令牌，二者拼成统一序列后由同一个去噪器处理，条件提供语义约束，目标承载生成过程，组合后一个模型就能通过重排片段切换任务。

**属性元组 × 按令牌自适应归一化：** 属性元组记录每个令牌的角色是条件还是目标、模态是文本图像还是音频、噪声水平是多少，按令牌自适应归一化把这些属性转成每个令牌专属的缩放和平移参数，二者搭配让共享网络在不分叉的情况下对不同令牌做不同计算。

这样做的代价是每个块都要计算逐令牌调制参数，但换来的是无需为每个模态或任务设分支。

### 为什么位置编码要按角色区分处理

统一序列的另一困难是位置。全局编号把模态绑定到固定段顺序，换任务就错位；每段都从零开始的局部编号则让无关令牌共享相同下标，在共享注意力投影中引入虚假对应。论文的基于角色的位置编码建立在 RoPE 之上，条件查询只在自己段内使用局部位置，保持内部结构且不跨段对应；目标查询保留自身局部位置，但把所有条件段看作无序集合并使用共享位置参考。

**基于角色的位置编码 × 局部编号：** 局部编号指每个片段都从同一原点重新编号，容易让无关令牌因下标相同产生虚假对应，基于角色的位置编码让条件只在段内保留结构、目标把条件看作无序集合，二者对比说明后者是为了去掉跨段虚假位置偏置。

消融显示这种设计在文本生成上提升最大，原因正是文本对目标序列的位置结构更敏感。教学上可以这样记，条件负责保住自己内部的顺序，目标负责公平地看所有条件，不因拼接顺序偏心。

### 只用双模态对子如何学到所有单条件方向

对任意有配对数据的两个模态，训练同时学两个去噪方向，例如图像到文本和文本到图像。目标是预测干净隐变量而不是噪声，论文给出的理由是 CLIP 和 CLAP 这类对比编码器的隐空间量级不一、有重尾维度，直接预测噪声不稳定。训练时以 0.2 概率把条件换成空令牌，以便支持无分类器引导。

无分类器引导的合成形式如下，先得到有条件和无条件预测，再按引导强度加权。

\[\tilde{\epsilon}_{\theta}\left(x_{t},t,y\right)=w\epsilon_{\theta}\left(x_{t},t,y\right)+\left(1-w\right)\epsilon_{\theta}\left(x_{t},t,\varnothing\right)\]

其中条件预测、无条件预测和引导系数共同决定最终噪声方向。当图像音频对缺失时，论文借用文本为桥梁，先由文本生成目标模态的加噪样本分布，再让以另一模态为条件的预测去逼近以文本为条件的预测，并对后者截断梯度。

**分数合成 × 联合描述微调：** 分数合成指在推理时把多个单条件预测加权相加得到多条件预测，联合描述微调指用语言模型把两个条件写成一句话再用小数据集微调，前者免训练但难建模条件交互，后者能学交互但需要构造三元组，组合起来覆盖免训练和轻量训练两条多条件路线。

多条件推理合成假设各条件在给定加噪目标下条件独立，用专家乘积形式把多个单条件预测相加。

\[\tilde{\epsilon}_{\theta}\left(z^{i}_{t},t,\left\{z^{j}\right\}_{j\in\mathcal{S}}\right)=\epsilon_{\theta}\left(z^{i}_{t},t,\varnothing\right)+\\ \sum_{j\in\mathcal{S}}w_{j}\left[\epsilon_{\theta}\left(z^{i}_{t},t,z^{j}\right)-\epsilon_{\theta}\left(z^{i}_{t},t,\varnothing\right)\right],\]

该式把无条件预测作为起点，每个条件贡献自己相对无条件的增量，权重控制各条件强度，单条件时退化为标准引导。联合描述微调则把 2 个条件的文本拼成一句自然描述，用语言模型合并并按句子嵌入余弦相似度筛选。

\[\text{sim}\left(x^{c},x^{\prime c}\right)=\frac{\left\langle\text{Emb}\left(x^{c}\right),\text{Emb}\left(x^{\prime c}\right)\right\rangle}{\left\|\text{Emb}\left(x^{c}\right)\right\|_{2}\left\|\text{Emb}\left(x^{\prime c}\right)\right\|_{2}},\]

相似度过高则两条件重复，过低则拼出的句子不自然，论文保留中间段再用 LoRA 微调，以学会条件间的交互。

### 数据编码器评测各按什么条件执行

训练用 80 万图像文本对、92,000 人工标注音频文本对，以及可选的 18.4 万图像音频对。不用图像音频对的变体记为 Modaliff-noVGG，用于检验经文本中转学习图像音频映射的能力。图像用 CLIP-ViT 编码、Stable-UnCLIP-small 解码，文本用 Qwen3 Embedding 编码、微调 Qwen3 解码并经重采样器压缩为 32 个隐向量，音频用 CLAP 编码、AudioLDM 解码，编码器解码器训练时冻结。去噪器是 24 块、宽度 1024 的 Transformer，可训练参数 558,000,000。

**保真度指标 × 对齐分数：** 保真度指标衡量生成样本与参考集的分布或质量差距，对齐分数衡量生成结果与输入条件的语义一致程度，前者看像不像真样本，后者看跟没跟住条件，两类指标搭配才能判断生成既逼真又切题。

图像保真度用生成图像与参考样本的特征分布差异指标，在 MSCOCO 和 VGGSound 上计算；文本质量用 CIDEr，音频保真度用 FAD。对齐用 CLIP 分数、CLAP 分数和 ImgBind 分数，方向都是越高越好，而 FID 和 FAD 越低越好。多条件评测把生成目标分别与每个条件算 ImgBind，不只看平均。

### 训练规模与基线放在什么可比条件下

比较的可比问题是，在相近采样步数和官方脚本下，紧凑语义隐空间加小去噪器能否匹敌大去噪器。论文把所有方法的隐生成固定为 50 步采样，基线用官方权重和推荐超参数。下面依据原 PDF 附录 Table 6，逐项列出成对监督格式、数据集名称和规模，比较是否依赖直接的图像—音频监督。

Modaliff 的文本—图像数据为 800K，文本—音频为 92K，VGGSound 图像—音频数据为可选的 184K；不使用 VGGSound 的版本对应 0K。可选条件须与规模一起保留，不能把不同数据对直接相加当作不重叠的独立样本总数。

| Method | Data format | Text-Image Name | Text-Image Size | Text-Audio Name | Text-Audio Size | Image-Audio Name | Image-Audio Size |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Versatile Diffusion (Xu et al. 2023) | Pairwise | LAION-2B-en; COYO-700M | 2.7B | - | - | - | - |
| UniDiffuser (Bao et al. 2023b) | Pairwise | LAION-2B-en; LAION-high-resolution; LAION-aesthetics v2 5+ | 2.4B | - | - | - | - |
| CoDi (Tang et al. 2023) | Aligned tuples + Pairwise | LAION-400M | 400M | AudioSet; AudioCaps; Freesound; BBCSoundEffect | 3.5M | AudioSet; SoundNet | 2M |
| OmniFlow (Li et al. 2025) | Aligned tuples + Pairwise | LAION-aesthetics-3M; CC12M; COYO-700M (Subset); LAION-COCO; T2I-2M | 28M | AudioSet; AudioCaps; WavCaps | 2.4M | VGGSound; SoundNet | 2.2M |
| FlowBind (Cha et al. 2026) | Pairwise | LAION-COCO; Flickr-30K | 272K | AudioCaps v2 | 92K | VGGSound | 184K |
| Modaliff (ours) | Pairwise | LAION-aesthetics 6.25+ | 800K | AudioCaps v2 | 92K | VGGSound (Optional) | 184K (0K) |

从该表的数值可见，Modaliff 在全量设置下仍远小于 CoDi 和 OmniFlow 的数据量，去掉 VGGSound 后图像音频直接监督为零，这是理解 noVGG 变体必须记住的前提。只看去噪器参数会低估冻结编码解码器的体量，复现时要把它们一起计入显存和推理开销。本表数值与单位依据论文 PDF。

### 一对一生成的保真度与对齐各说明什么

要回答的问题是，保留模态原生令牌的统一序列是否在保真度上优于共享向量或大隐空间方案。下表比较 6 个方向的保真度，指标方向为 FID 越低越好、CIDEr 越高越好、FAD 越低越好，条件是同一评测集和相同采样步数。

专家模型只覆盖各自的单项任务，通用模型才覆盖全部 6 个转换方向，因此每列应在同一任务、同一指标与同一评测分布下比较。下表中的星号* 表示作者使用官方仓库复现的结果，短横线表示该方法没有报告相应任务的数值。

| Method | T→I FID↓ | A→I FID↓ | I→T CIDEr↑ | A→T CIDEr↑ | T→A FAD↓ | I→A FAD↓ |
| --- | --- | --- | --- | --- | --- | --- |
| SD3-Medium | 25.40 | - | - | - | - | - |
| Sound2Vision | - | 42.55 | - | - | - | - |
| LLaVA-Next | - | - | 109.3 | - | - | - |
| Qwen2-Audio | - | - | - | 4.64 | - | - |
| AudioLDM-L | - | - | - | - | 1.96 | - |
| Seeing&Hearing | - | - | - | - | - | 5.31 |
| CoDi* | 24.68 | 56.64 | 14.01 | 6.61 | 9.72 | 16.34 |
| OmniFlow* | 23.84 | 72.31 | 43.60 | 31.79 | 2.48 | 3.69 |
| FlowBind* | 17.39 | 36.48 | 37.35 | 36.05 | 5.19 | 2.52 |
| Modaliff | 13.77 | 19.02 | 44.47 | 41.30 | 1.31 | 1.89 |
| Modaliff-noVGG | 14.18 | 57.23 | 46.69 | 41.57 | 1.73 | 3.16 |

结果显示 Modaliff 在文本到图像、音频到图像、文本到音频等多个方向的保真度最好，而在图像到文本和音频到文本的 CIDEr 上与基线互有胜负。noVGG 在图像音频 2 个方向明显变差，但在部分方向仍接近或好于用了大量图像音频对的基线，支持经文本中转学习的说法。限制是风格偏差会影响 FID，例如 OmniFlow 继承的基座偏合成风格，在写实参考集上吃亏，这不是单纯去噪能力的差距。本表数值与单位依据论文 PDF。

对齐分数需要另看，因为保真度好不等于跟住条件。下表比较 CLIP、CLAP 和 ImgBind 对齐分数，方向均为越高越好，同样固定采样条件。

该表检验生成结果是否与输入条件语义一致，Modaliff 在音频文本和图像音频对齐上较强，在文本到图像的 CLIP 对齐上略低于 OmniFlow。

| Method | T→I CLIP↑ | I→T CLIP↑ | A→T CLAP↑ | T→A CLAP↑ | A→I ImgBind↑ | I→A ImgBind↑ |
| --- | --- | --- | --- | --- | --- | --- |
| SD3-Medium | 31.60 | - | - | - | - | - |
| Sound2Vision | - | - | - | - | 26.71 | - |
| LLaVA-Next | - | 32.14 | - | - | - | - |
| Qwen2-Audio | - | - | 17.09 | - | - | - |
| AudioLDM-L | - | - | - | 36.05 | - | - |
| Seeing&Hearing | - | - | - | - | - | 30.69 |
| CoDi* | 30.32 | 26.1 | 17.86 | 10.23 | 15.96 | 5.53 |
| OmniFlow* | 31.70 | 27.8 | 48.65 | 33.13 | 8.56 | 13.91 |
| FlowBind* | 27.69 | 28.38 | 41.31 | 42.30 | 24.43 | 21.11 |
| Modaliff | 30.65 | 28.11 | 40.01 | 45.71 | 24.83 | 27.99 |
| Modaliff-noVGG | 30.37 | 28.45 | 39.42 | 44.01 | 12.83 | 13.79 |

综合两张表才能下判断，Modaliff 的结论成立条件是冻结语义编码器加小去噪器的分工，以及 MSCOCO、AudioCaps、VGGSound 的评测分布。换参考集或换解码器，FID 和 FAD 的相对顺序可能变化。未胜出项要如实记住，Modaliff 并非所有对齐指标第一。本表数值与单位依据论文 PDF。

### 多条件生成能否兼顾两个输入

多条件要回答的是，推理合成与联合描述微调哪种更能同时满足 2 个条件。评测把生成目标分别与每个条件算 ImgBind，例如文本加音频到图像要同时报告文本图像分和音频图像分。下表比较 CoDi、FlowBind、推理合成版和微调版，OmniFlow 因发布代码不支持该能力而缺席。

推理合成版本没有接受多条件训练；微调版本使用 LoRA 和规模为 5 万的构造集合，评测从该集合中留出 1,000 样本。两种版本应在同一任务下分别核对输出与两个输入条件的 ImgBind 得分，均为越高越好。T、I、A 分别代表文本、图像与音频。

| Method | (T+A)→I：T-I ImgBind↑ | (T+A)→I：A-I ImgBind↑ | (I+A)→T：I-T ImgBind↑ | (I+A)→T：A-T ImgBind↑ | (T+I)→A：T-A ImgBind↑ | (T+I)→A：I-A ImgBind↑ |
| --- | --- | --- | --- | --- | --- | --- |
| CoDi | 22.97 | 22.93 | 15.05 | 19.51 | 8.21 | 3.30 |
| FlowBind | 27.71 | 20.82 | 20.21 | 20.54 | 12.92 | 9.60 |
| Modaliff (CFG) | 23.39 | 20.93 | 21.92 | 17.13 | 20.89 | 13.89 |
| Modaliff (Finetuned) | 29.41 | 16.36 | 24.28 | 18.35 | 22.10 | 14.08 |

微调在六项中的五项上提升，并在四项上最好，例外是文本加音频到图像的音频图像分从 20.93 降到 16.36。论文的解释是静态图像难以描绘说话或鸟鸣等瞬态声音，即使联合描述保留了该信息，从文本到图像的教师信号也难以迁移。本表数值与单位依据论文 PDF。

下面两张图展示像素级可见的差异。先看文本加音频到图像与图像加音频到文本的例子，观察任务是微调是否同时改善画面质量和文本贴合，以及音频动作是否仍然难画。

> **看图路径：** 1. 先看最左输入列，区分文字条件和音频或图像条件的组合方式；2. 再横向比较同一行中微调版、推理合成版与基线在主体和场景上的差异；3. 注意右半部分由图像加音频生成文本时，文本是否同时提到两个条件

[![原论文 Figure 2：Qualitative results of Modaliff and generalists on (T + A)\\toI and (I + A)\\toT.](https://arxiv.org/html/2610.25533v1/fig_multicond_merged.png)](https://arxiv.org/html/2610.25533v1/fig_multicond_merged.png)

*论文图 2。原论文 Figure 2:：“Qualitative results of Modaliff and generalists on (T + A)\toI and (I + A)\toT.”。*

图中可见，微调版在房屋、船只、花环等主体上更完整，文本描述更贴合输入，而给演讲这类音频动作在单帧图像中依然表现有限，这与表格中音频图像分下降的解释一致。再看文本加图像到图像的例子，观察任务是输出是否同时保留参考图像的内容与文字新增的要求。

> **看图路径：** 1. 先看输入列中文字要求与参考图像各自提供什么信息；2. 再比较同一行三列输出对长胡须、日落码头和粉色墙面的保留程度；3. 观察微调版是否比基线更同时满足文字和图像两个条件

[![原论文 Figure 3：Qualitative results of Modaliff and generalists on (T + I)\\toI.](https://arxiv.org/html/2610.25533v1/fig_composable_ti2i_composed_3row.png)](https://arxiv.org/html/2610.25533v1/fig_composable_ti2i_composed_3row.png)

*论文图 3。原论文 Figure 3:：“Qualitative results of Modaliff and generalists on (T + I)\toI.”。*

图中可见，微调版对长胡须老人、日落码头和粉色客厅的还原更接近双条件要求，基线更容易丢失其中一侧条件。两图共同说明，多条件结论只在同时报告两个对齐分时成立，单看一侧会高估效果。

### 位置与属性设计各自贡献多少

消融要验证统一序列的两个关键设计是否必要。第一组用 1.59 亿小模型只换位置方案，基于角色的位置编码在所有方向上优于局部编号，文本生成差距最大，原因是共享投影既要抑制虚假对应又要保留目标语序。第二组去掉属性元组或把逐令牌调制换成序列平均，前者损害最大，因为多个任务拼出同样长度时模型无法区分任务配置，后者因一套参数同时服务干净条件和加噪目标而次优。

参数化消融比较噪声预测、干净样本预测、混合预测和整流流变体，干净样本预测在六项中的四项上最好，尤其在图像生成上稳定，而噪声预测在 CLIP 隐空间的重尾维度上不稳定甚至产生坏样本。引导强度消融显示对齐随引导增大而上升，但保真度呈先升后降，文本到图像在 5 附近较好，文本到音频在 3 附近较好，过大引导会过度约束采样。这些结论都来自 5,000 样本的子集评测，规模小于主结果，推广时要留有余地。

### 相似度区间与合成权重如何取舍

构造多条件微调数据时，两个文本的余弦相似度保留区间控制互补性。固定上限 0.8 以排除近重复，下限从 0 取到 0.6，实验显示下限升高会提升一侧对齐但降低另一侧，因为过相似的描述只强调共有内容，学不到互补组合；下限过低则引入仅一方支持的细节。论文选 0.4 作为平衡点，这是在 10,000 样本每档上的结论，换数据分布可能需要重调。

合成权重控制多条件推理时各条件的相对强度。文本加音频到图像用文本权 3、音频权 2，音频加图像到文本用音频权 1.5、图像权 4，文本加图像到音频保持默认 2。增大一侧权重会提升该侧对齐但损害另一侧，且相对比值比绝对值更重要，过大音频权还会进入过引导区使两侧都降。实际部署不能把事后选出的最优权重当作免调参的提升，新任务仍需在验证集上搜索。

### 哪些情况还不能用这篇结论

首先是缺失对子的间接学习仍有代价，去掉 VGGSound 后音频到图像和图像到音频的保真度与对齐都下降，说明文本中转不能完全替代直接监督。其次是瞬态声音到静态图像的迁移有限，微调后音频图像分反而下降，说明语言描述保留了信息不等于图像能画出来。

其次是评测与资源的边界。主结果依赖 MSCOCO、AudioCaps、VGGSound 的划分和 50 步采样，换风格化参考集或更少步数，FID 和主观质量可能变化。5.58 亿只是可训练去噪器，未计入冻结的图像、文本、音频编码解码器，实际显存和推理延迟要把它们算入。论文未报告多次随机的方差和人工评价，自动指标好不等于人工偏好一致。

最后是方法假设。分数合成假设条件独立，条件强相关时会失真；联合描述依赖指令语言模型的质量，合并错误会污染微调信号。这些都是原文已提示或可直接看出的限制，不应夸大为通用任意模态解法。

### 复现第一步要准备什么

复现先按模态准备冻结编解码。图像用 CLIP 编码加 Stable-UnCLIP-small 解码，音频用 CLAP 编码加 AudioLDM 解码，文本需按附录训练重采样器加前缀解码的自编码器，把可变长文本压成 32 个隐向量。不要跳过文本自编码器直接用 CLIP 文本塔，否则文本重建质量会下降。

去噪器按 DiT-L 规模搭建，训练用配对目标预测干净隐变量，条件以 0.2 概率置空以支持引导。无 VGGSound 设置需再按文本中转目标微调，学习率降至 5e-6。多条件微调需先用句子嵌入算相似度并保留 0.4 到 0.8 区间，再用指令模型合并描述，构造 50,000 样本后用 LoRA 微调。评测固定 50 步采样并分别报告保真度和对齐两类指标。

来源方面，本次未发现完成 HTTPS 验证的作者资源，不得声称代码模型或数据已公开。应以论文给出的超参数和数据集名称为准，缺失的采样器细节和随机种子属于待补验证项。

### 什么时候值得尝试还缺哪项验证

当只有双模态对子、缺少三元组，又希望一个模型覆盖文本图像音频互转时，Modaliff 的统一序列值得尝试，尤其适合以语义保真为先、对像素细节可交给冻结解码器的场景。当需要多条件生成且能接受构造联合描述时，可先试推理合成，再做小规模语言中转微调。

还缺的验证包括跨数据集的风格鲁棒性、人工偏好与误判率、不同步数和引导下的延迟质量曲线，以及多次训练的方差。若要在新模态上扩展，需要先验证该模态的冻结隐空间是否同样适合干净样本预测，否则噪声预测的不稳定可能重现。记住结论的适用条件，才能把这篇工作用在合适的位置。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.25533v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-20/)
