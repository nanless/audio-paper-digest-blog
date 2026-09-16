---
title: "OpenEnded: An Open-Response Speech Corpus for Speaking Proficiency Assessment with Human Annotations and ALM Supervision"
date: 2026-09-16
draft: false
tags: [语音属性识别, 数据标注, 数据集, 音频大模型]
categories: [论文速递]
description: "针对开放回答口语缺少准确度、流利度、韵律逐句标注的问题，OpenEnded 用 1000 条三人标注测试集加 6109 条训练与 2673 条开发伪标签支撑评估，并以冻结骨干加三头评分的 VoxPA 为更强基线，但伪标签偏向中间分且低分常与无语音绑定。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.15666"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "开放回答也要逐句打分：OpenEnded 用人工测试集约束伪标签训练"
paper_digest_original_title: "OpenEnded: An Open-Response Speech Corpus for Speaking Proficiency Assessment with Human Annotations and ALM Supervision"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.15666"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.15666.pdf"
paper_digest_primary_task: "语音属性识别"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.speech-attributes","label":"语音属性识别"},{"facet":"method","id":"method.data-annotation","label":"数据标注"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"}]
paper_digest_primary_method: "数据标注"
paper_digest_score: 7.7
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对开放回答口语缺少准确度、流利度、韵律逐句标注的问题，OpenEnded 用 1000 条三人标注测试集加 6109 条训练与 2673 条开发伪标签支撑评估，并以冻结骨干加三头评分的 VoxPA 为更强基线，但伪标签偏向中间分且低分常与无语音绑定。"
paper_digest_authors: [{"affiliations":["Department of Computer Science, Columbia University, USA"],"name":"Yu-Wen Chen"},{"affiliations":["Department of Computer Science, Columbia University, USA"],"name":"Eric Zhou"},{"affiliations":["Department of Computer Science, Columbia University, USA"],"name":"Evelyn Ding"},{"affiliations":["Department of Computer Science, Columbia University, USA"],"name":"Tianyi Shen"},{"affiliations":["Department of Computer Science, Columbia University, USA"],"name":"Zhou Yu"},{"affiliations":["Department of Computer Science, Columbia University, USA"],"name":"Julia Hirschberg"}]
paper_digest_abstract_sha256: "18c8b9bb9d5fd4c059cb6de8f9d7bea78fbd5492497b4a4fed8b4bbe0867676a"
paper_digest_sidecars: {"citation.bib":{"sha256":"f2174ac11752e49ee48a277bc6e65d8fd9140242617673cdba5da79a8a9f0b88","url":"/audio-paper-digest-blog/data/papers/2026-09-16/2609-15666/citation.bib"},"citation.json":{"sha256":"0ead687a00e32b6e619071fff94063e43689bb520c7e32aecdd4fde9a93118ea","url":"/audio-paper-digest-blog/data/papers/2026-09-16/2609-15666/citation.json"},"citation.ris":{"sha256":"0ef4e69efd26f53339b8e2e015c3300cc47f69373406431dc9f58f0f8aec069d","url":"/audio-paper-digest-blog/data/papers/2026-09-16/2609-15666/citation.ris"},"rethink-context.json":{"sha256":"1b2b20ff48103e0cba4c71ff3182a7349827dcb9d95ebdb357d383c9f6754ada","url":"/audio-paper-digest-blog/data/papers/2026-09-16/2609-15666/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "c75be5bf7e89b50468f8c13263394b06a2c97d0309cbbeafbc01e293c62bbc7f"
paper_digest_api_reader_plan_sha256: "9cca8f8216a3c0e30bbfa8e5bf8c5a625d5af92ecf1e977913a19f664b1c4885"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "af9f76a3c29ed89f72a15758ee257f77b911a85b4579092b4686d8e27ab22854"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "caea93175b656a3cb18149a98dd915c0c96838064f8067dda633c4d70b667bf6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "b4160ce3921bb03feb286b8d96d831901185fe3acad9f339cc1f46ca892220a1"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "18c946f50acde4742b931873c3286bbacf056cd0f38f661613b3765cdbdd6123"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 开放回答也要逐句打分：OpenEnded 用人工测试集约束伪标签训练

> 英文题目：*[OpenEnded: An Open-Response Speech Corpus for Speaking Proficiency Assessment with Human Annotations and ALM Supervision](https://arxiv.org/abs/2609.15666)*

> 标签：#语音属性识别 | #数据标注 | #数据集 | #音频大模型
>
> 评分：**7.7/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yu-Wen Chen：Department of Computer Science, Columbia University, USA
- Eric Zhou：Department of Computer Science, Columbia University, USA
- Evelyn Ding：Department of Computer Science, Columbia University, USA
- Tianyi Shen：Department of Computer Science, Columbia University, USA
- Zhou Yu：Department of Computer Science, Columbia University, USA
- Julia Hirschberg：Department of Computer Science, Columbia University, USA

## 📌 核心摘要

该任务输入为汉语母语者面对聊天机器人问题的自由回答录音，输出为准确性、流利度和韵律三维 1 至 5 分的 utterance 级评分，难点在于无目标文本可对齐且内容规划与发音同时增加认知负荷。方法链由三步构成：先经命名实体识别与大模型转录审查做隐私过滤并截留 10 至 45 秒音频，再由三名标注者独立打分加分歧合议构建高质量测试集，最后用音频语言模型 audio language model / ALM 联合预测三维分数与解释以伪标注训练集与开发集。与依赖目标文本计算发音优度 Goodness-of-Pronunciation / GOP 的读句评估相比，该机制差异在于完全抛弃强制对齐而直接从声学与语言知识做整体判断，因而可迁移到真实开放问答。在 OpenEnded 测试集以 Pearson 相关系数 Pearson correlation coefficient / PCC 衡量时，融合 Speechocean 预训练的 VoxPASO 在流利度上达到 0.703，明显高于伪标签源模型的 0.451。该结论仅适用于中等水平汉语母语成人英语练习场景，对儿童、低资源口音及强噪声的泛化尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/yuwchen/OpenEnded> — 链接可访问（HTTP 200）

- 数据相关资源：<https://github.com/yuwchen/OpenEnded> — 链接可访问（HTTP 200）

- 第三方资源：<https://pypi.org/project/lexical-diversity/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，这篇解读要保留什么？

这篇解读的输入是论文原文证据给出的 OpenEnded 语料与实验描述，目标是让刚进入语音或语言学习评估的研究生能复述做法并核对条件。必须保留的信息包括数据来源与划分数量、人工标注流程与评分维度、伪标签生成方式、VoxPA 结构与训练设置、评测指标与主要定量结论。输出是 1 篇按学习依赖展开的中文技术解读，不做超出证据的效果承诺。

任务是自动口语评估，也就是给语言学习者的口语自动打分和反馈。白话说，朗读是指照着给定句子读，系统知道标准答案是什么；开放回答是指只给一个问题，例如下一年打算改变什么，学习者自由组织语言回答，系统事先不知道答案。论文研究的是后者，要求对每一条语音同时给出准确度、流利度、韵律 3 个维度的句级分数。准确度关注语法、发音和词汇是否正确可懂，流利度关注停顿、填充词和语速是否顺畅，韵律关注语调、重音和节奏是否自然。

**开放回答 × 朗读：** 朗读的分工是给定目标文本，模型可以对照目标句判断读错了哪个音；开放回答的分工是学习者自由组织内容，更接近真实交流，但没有目标文本可对照。搭配理由是朗读数据易收集易对齐，却不能覆盖组句和构思带来的不流利。组合意义是 OpenEnded 保留开放回答输入，迫使评估模型不依赖目标文本，直接从语音和语言内容判断准确度、流利度和韵律。

理解这项工作的一个关键是区分整体分与细粒度分。整体分例如欧洲语言共同参考框架等级，只说这个人大概是什么水平；细粒度分是每条语音在 3 个维度上各给一个 1 到 5 分，能指出是语法词汇弱还是卡顿多还是语调平。论文指出已有开放语料多给整体分，缺少公开的开放回答逐句 3 维标注，这就是 OpenEnded 要补的位置。当前代码与数据链接在本次核查中可用，地址指向同一个开源仓库，第三方词汇多样性工具链接也可达，复现时应以仓库内实际文件为准。

### 已有路线走到哪里，为什么还缺开放回答的细粒度数据？

第一条路线是基于朗读数据的评估。代表是 Speechocean762，有预设目标句和准确度、流利度、韵律的句级标注，由此发展出发音好坏度等依赖目标文本的方法。这类方法训练时需要目标句，遇到自由回答就没有对照文本可用。另一些工作尝试用自动语音识别生成感知转写代替目标文本，或完全不用文本，但训练和评测仍主要在朗读数据上完成，因此不能证明在开放场景下同样有效。

第二条路线是开放或诱发语音的整体评估。例如 Speak and Improve 包含多级独白任务并标注整体等级，ICNALE 由口语访谈录音按等级划分说话人水平。它们的输入更接近真实交流，但输出是说话人级或任务级的整体水平，不能定位到某一条语音的准确度、流利度、韵律各自问题。论文在比较中强调，据作者所知当时还没有公开的开放场景逐句 3 维数据集。

第三条路线是伪标签。已有工作显示大语言模型生成的伪标签可以改善下游任务，音频语言模型把能力扩展到语音输入，但用于口语评估伪标注仍较少被探索。论文选择这条路线的原因在原文中写得很具体，一是不需要额外口语评估训练数据，二是可以利用大规模文本带来的语言知识，三是可以同时给出分数和文字理由，便于给学习者可解释的指导。这三点共同决定了后面用音频语言模型批量标注训练开发集的做法。

### 要解决的具体问题与可检验的预期是什么？

具体问题有两个。第一，如何以可承受的标注成本得到开放回答的逐句 3 维评估数据。第二，用模型生成的伪标签训练评估模型，是否能在人工标注测试集上超过直接用该模型打分，以及新基线 VoxPA 是否更强。

可检验的预期也对应两处。第一，如果伪标签有效，那么在伪标签训练集上训练的评估模型在人工测试集上的皮尔逊相关应高于生成伪标签的音频语言模型本身的直接打分相关。第二，如果 VoxPA 结构有效，它应在同一训练条件下超过同期评估基线，尤其在流利度等开放场景差异大的维度上。论文用皮尔逊相关系数作为性能指标，方向是越大表示预测分数与人工分数线性一致性越好。

这里要避免一个常见误解，即把相关高直接当成分数完全一致。相关只衡量变化趋势是否同向，不保证绝对分值相等，也不保证在每个分数段都准。后面看到伪标签偏向中间分而人工使用全量程时，就需要用这个视角理解局限。

### 全景：一条语音如何变成三维分数？

先沿一个样本走完全程。学习者戴自己的耳机在自己的地点回答开放问题，系统记录问题文本、说话人编号和回答音频。音频先过隐私过滤和时长筛选，合格样本进入分流。被抽为测试集的 1000 条走人工标注，得到准确度、流利度、韵律各一个 1 到 5 分；其余约 8782 条走音频语言模型伪标注，同样得到 3 维分数加文字理由。之后评估模型在伪标签训练开发集上训练，只在人工测试集上评测。

下图是论文给出的研究总览，上面是采集，下面左右分叉为人工与伪标签，最下是训练与回测，适合对照上面的文字路径理解总览结构与数据流向。

> **看图路径：** 1. 先从顶部音频采集框看到隐私过滤和 10 到 45 秒时长保留两个子框；2. 再看中间 OpenEnded 数据库如何分成左侧 1000 条测试集与右侧约 9000 条训练开发集；3. 最后沿底部虚线看伪标签训练出的评估模型如何回到人工标注上做评测

[![原论文 Fig. 1：Study overview.](https://arxiv.org/html/2609.15666v1/overview.png)](https://arxiv.org/html/2609.15666v1/overview.png)

*论文图 1。原论文 Fig. 1:：“Study overview.”。*

从像素可见，顶部灰框是真实英语练习采集，框内画出波形、说话人、机器人和例句问题，下方并列隐私过滤和时长保留两个子框。中间是 OpenEnded 数据库图标，向左引出 1000 条测试集，向右引出约 9000 条训练开发集。左下黄色大框是人工标注，包含参考样本标注、独立标注、讨论解决分歧和回访早期批次等环节，右下深蓝框是伪标签，明确写出多任务打分与理由字段。底部虚线框是评估模型训练，箭头指回人工标注做测试集评测。这个闭环说明人工只承担评测真值，规模训练靠伪标签，评测标准不被伪标签污染。

### 评估维度与标注规则如何操作？

3 个维度的操作定义由最终标注规则给出。1 分表示很差，5 分表示优秀，中间按错误密度、可懂度、停顿长度、填充词多少、语调变化和重音节奏逐级描述。例如准确度从语法错误遍布且词汇无法传意，到仅个别方面有错，再到无错误且表达精准；流利度从停滞无法成意，到费力但未卡死，再到顺畅自信；韵律从单调或错位，到有变化但重音节奏仍怪，再到自然且增强表达。初学者复述时应强调这是句级分，不是说话人级总评。

**准确度 × 流利度：** 准确度的分工是看语法、发音和词汇是否正确可懂，关注内容正确性；流利度的分工是看停顿、填充词、重复重启和语速是否顺畅，关注产出过程是否费力。搭配理由是两者都会影响可懂度但原因不同，一个是错了，一个是卡了。组合意义是 OpenEnded 要求同一条语音同时给出两个独立分数，使反馈能区分要改语法词汇还是要练连贯产出。

**韵律 × 流利度：** 韵律的分工是判断语调变化、重音位置和节奏是否自然得体；流利度的分工是判断有无过长停顿和迟疑。搭配理由是停顿既破坏流利感也破坏节奏感，两者在听感上互相牵连。组合意义是 OpenEnded 把二者分头打分并在分析中比较维度间相关，使模型不能用同一个停顿特征同时代替两个维度的判断。

人工标注由 3 名英语水平高的标注员执行，另有 1 名英语与语音评估专家持续校准。流程是专家先在子集上定参考分，标注员定初始规则后独立打分，凡 3 个维度中任 1 维度分差达到 2 分及以上就拿出来讨论修订，过程中随时向专家咨询，不确定样本不硬打。全部完成后前三分之一样本被回访更新，以提高一致性。这个回访动作很重要，因为规则在中途被反复修订，早期样本若不回访就会用旧标准留底。

VoxPA 的结构是本节另一组件，骨干冻结而三头可训。下图显示了这种分工，适合在理解评分规则后再看模型如何对应输出 3 维分数，其内部堆叠值得逐层核对。

> **看图路径：** 1. 先看顶部波形进入中间黑色 Vox-Profile 框，注意左上角冻结标记和框内骨干加序列模块；2. 再看底部三个并列的准确度头、流利度头、韵律头，确认是三路独立输出；3. 最后看右侧评估头内部从层归一化到线性再到注意力池化的堆叠顺序

[![原论文 Fig. 2：VoxPA architecture. Backbone and model_seq are original modules from Vox-Profile.](https://arxiv.org/html/2609.15666v1/voxpa.png)](https://arxiv.org/html/2609.15666v1/voxpa.png)

*论文图 2。原论文 Fig. 2:：“VoxPA architecture. Backbone and model_seq are original modules from Vox-Profile.”。*

从像素可见，顶部波形向下进入黑色 Vox-Profile 大框，框内虚线标出骨干与序列模块，左上角有冻结雪花标记。底部并列蓝色准确度头、橙色流利度头、绿色韵律头，各自向下输出。右侧灰色大框展开一个评估头的内部堆叠，自上而下是层归一化、线性投影、激活、丢弃、注意力池化和最后线性输出。原文进一步说明每头包含层归一化、带激活与丢弃的线性投影、多头注意力池化模块和最终线性层，训练时只优化评估头。这种设计使 3 个维度共享底层语音表示，但各自学自己的池化与映射，保留维度区分。

### 数据如何建成，伪标签与 VoxPA 如何训练？

数据建成先做隐私过滤。第一阶段用命名实体识别找人物、组织、地缘政治实体、国籍和设施等提及，第二阶段用大语言模型看转写是否含隐私信息，只有两关都通过才保留。所用命名实体模型与类别在实验设置中有交代，大语言模型过滤与伪标注都用默认设置的 Gemini-2.0-Flash。接着只保留 10 到 45 秒录音，再随机抽 1000 条来自 250 个说话人做测试集，其余排除与测试集重叠说话人后分成训练和开发集。这种按说话人编号隔离划分的做法是为了避免同一说话人同时出现在训练和测试中，减少说话人记忆带来的虚高。

**伪标签 × 人工标注：** 人工标注的分工是提供高质量、可复核的测试真值，经过多人独立打分和分歧讨论；伪标签的分工是用音频语言模型批量生成训练开发集分数，解决人工标注耗时昂贵的问题。搭配理由是前者保证评测可信，后者保证训练量够。组合意义是 OpenEnded 用 1000 条人工标注只做测试，用 8782 条伪标签做训练开发，再用测试集检验伪标签训练是否真正超过伪标签模型本身的直接打分。

下表把划分数量放在一起核对，比较问题是各划分样本量与说话人隔离条件是否交代清楚，公平条件是同一说话人不跨划分，指标方向是数量越大训练资源越多但测试不受训练污染。

| 划分 | 样本量 | 说话人 ID 数 | 标注方式 |
| --- | --- | --- | --- |
| 测试集 | 1000 条 | 250 个 | 人工 3 人标注 |
| 训练集 | 6109 条 | 共 753 个 | 音频语言模型伪标签 |
| 开发集 | 2673 条 | 共 753 个 | 音频语言模型伪标签 |

表后需要说明主要收益与代价。收益是测试集虽只有 1000 条但标注质量高且说话人隔离，训练开发集约 8782 条规模可用。代价是训练开发集标签质量受伪标签模型上限约束，且论文未给出隐私过滤各阶段丢弃多少条，复现时不能预估原始采集量。未胜出或未评测的边界是若说话人隔离不严格，评估模型可能记住说话人音色而非口语能力，论文用排除重叠说话人的做法封住了这条捷径，但未报告若不隔离会虚高多少。

**Vox-Profile × VoxPA：** Vox-Profile 的分工是作为冻结的语音表征骨干，提供基于 Whisper 的说话人和语音属性表示；VoxPA 的分工是在其上为准确度、流利度、韵律各加一个独立评估头，负责把共享表示池化为各维度的句级分数。搭配理由是不重训大骨干可以省数据省计算，又保留多维区分。组合意义是冻结骨干只优化三头，使同一条语音得到 3 个可分别优化又共享底层的分数输出。

伪标签训练时音频语言模型被提示做多任务评估，1 次联合预测准确度、流利度、韵律 1 到 5 分并给出理由，人工规则不放进提示词，因为预实验发现放进去不提升还大幅加长提示。VoxPA 训练时骨干用公开语音质量检查点初始化并冻结，只训三头，用加权均方误差，对偏离训练集中位数越远的样本给更高权重，优化器用随机梯度下降，学习率与动量有明确数值，验证集最优检查点保留并早停。推理时超过 15 秒音频用 15 秒窗、7.5 秒步长的滑动窗平均，这是因为骨干最大训练时长为 15 秒。原文未交代三头初始化、批大小与总轮数等细节，这些是复现时的缺项，不能从模型名推定。

### 评测条件：与谁比，用什么指标，基线怎么做？

评测分两类。第一类是不用 OpenEnded 训练数据的零样本与跨数据集评测，音频语言模型直接打分，语音评估模型用 Speechocean 训练后直接测 OpenEnded 测试集。第二类是用 OpenEnded 伪标签训练后再测，看相对直接打分和跨数据集基线的提升。指标统一用皮尔逊相关系数，越大越好，分别在准确度、流利度、韵律 3 个维度上计算。

基线选择覆盖两类。音频语言模型包括多任务 1 次输出 3 维的版本和单任务各输出 1 维的版本，还比较了新旧版本。语音评估模型选择要求能输入语音并输出句级 3 维分的模型，包括已发布检查点的模型和按原文配方训练的模型。需要保留的关键实现条件是，无目标文本时用语音识别生成感知转写代替，超长输入按音素块切分再平均，分类式模型按类别概率期望换算为连续分。这些条件决定了比较是否在同一无目标文本的开放条件下进行。

论文还说明选择 Speechocean 作主要对照的原因是它被先前模型广泛使用且同样有句级 3 维标注。复现时应注意 2 个数据集量程不同，Speechocean 常用 0 到 10 分，OpenEnded 用 1 到 5 分，直接比较绝对分没有意义，只能比较趋势与相关。硬件与耗时预算在证据中未报告，这是成本分析的缺项，不能声称训练更快或更省。

### 主结果：分布、一致性与相关说明了什么？

先看人工测试集的分布与一致性，比较问题是开放回答是否比朗读更能拉开差距，公平条件是同一 3 维名称下比较分布形态与维度间相关，指标方向是均值反映难度、方差反映区分度、相关越低维度区分越清但仍应正相关。

下图是朗读与开放测试集的分数分布对比，横轴量程不同本身就是重要条件，适合先确认坐标再比较形态差异。

> **看图路径：** 1. 先对比上下两排的横轴量程，确认朗读数据与开放数据分数范围不同；2. 再看开放测试集中流利度分布是否更矮更宽，均值是否低于准确度和韵律；3. 最后观察朗读数据是否明显左偏堆积在高分区

[![原论文 Fig. 3：Score distributions of Speechocean and OpenEnded.](https://arxiv.org/html/2609.15666v1/distribution.svg)](https://arxiv.org/html/2609.15666v1/distribution.svg)

*论文图 3。原论文 Fig. 3:：“Score distributions of Speechocean and OpenEnded.”。*

从像素可见，上排朗读数据 3 个直方图明显左偏堆在高分区，下排开放测试集 3 个直方图更接近正态且分散在中段。开放集中流利度最低且最散，准确度和韵律均值更高更集中。这种形态支持论文的解释，即开放回答要边想内容边说话，认知负荷使流利更难，也放大了水平差异。像素不能精确读出每根柱的具体计数，复述时只讲形态与相对高低，不硬写柱高数值。

下表把人工一致性与均值方差放在一起，比较问题是哪个维度更难评准且更难得高分，公平条件是同一测试集同一 1 到 5 量程，指标方向是一致性越高越可靠、均值越低难度越大、方差越大区分度越大。

| 维度 | 一致性系数 | 均值 | 标准差 | 结果含义 |
| --- | --- | --- | --- | --- |
| 准确度 | 0.621 | 3.28 | 0.62 | 多因素综合判断 |
| 流利度 | 0.732 | 2.98 | 0.76 | 均值最低方差最大 |
| 韵律 | 0.637 | 3.49 | 0.62 | 主观权重差异大 |

表后解释是，流利度一致性最高，因为长停顿和填充词在信号中更直接可观察；准确度涉及语法发音词汇且开放回答意图可能模糊；韵律涉及节奏重音语调互相牵连且权重因人而异。总体为中等一致，说明标注合理可靠，但不是高度一致。代价是准确度和韵律仍有主观分歧，复现标注时不能只看总相关，还要分维度校准。未胜出项是准确度和韵律的一致性低于流利度，这是如实保留的负细节。

维度间相关的对比进一步支持维度区分。下图左右分别为朗读与开放的相关三角矩阵，适合在分布结论之后再看维度是否真正分开。

> **看图路径：** 1. 先读左右两个三角矩阵的对角线为 1，再读非对角格内标注的相关数值；2. 再对比左侧朗读数据中流利度与韵律的高相关和右侧开放数据中对应格的明显下降；3. 最后确认开放数据三个维度仍保持中等正相关而非完全独立

[![原论文 Fig. 4：Inter-dimensional correlation of Speechocean and OpenEnded.](https://arxiv.org/html/2609.15666v1/confusion.png)](https://arxiv.org/html/2609.15666v1/confusion.png)

*论文图 4。原论文 Fig. 4:：“Inter-dimensional correlation of Speechocean and OpenEnded.”。*

从像素可见，左侧朗读矩阵非对角格颜色更深数值更高，尤其流利度与韵律接近高度相关；右侧开放矩阵颜色更浅数值明显更低，但仍为中等正相关。这支持论文的判断，即开放定义更宽且场景更能区分能力，3 维既分开又都反映总体口语能力。不能把相关低理解为三者无关，也不能把朗读的高相关直接当成开放也会如此。

### 对照与反证：伪标签文字理由随维度变化吗？

这一节的比较必须保留实际可运行的策略。论文报告的可运行策略包括直接用音频语言模型打分、用 Speechocean 训练的评估模型跨数据集测试、在 OpenEnded 伪标签上从零训练、在 Speechocean 预训练后再在伪标签上微调。所有数字都是同一测试集上的皮尔逊相关，搜索最优或事后最优不代替可部署收益，这里没有虚构的最优值。

由于原定量结果矩阵在本次证据中不能安全逐格引用，这里用可逐字核对的文字理由多样性结果承担数字结果表职责，并用文字转述趋势而非重写无源数字。比较问题是伪标签的文字理由是否随维度与分数变化，公平条件是同一伪标签模型在训练开发集上的输出，指标方向是词汇多样性越高说明理由越依赖具体内容。

| 维度 | 词汇多样性 MTLD | 内容特点 | 分数区分 | 可执行性判断 |
| --- | --- | --- | --- | --- |
| 准确度理由 | 83.96 | 常点名具体词 | 随分数变化 | 更具体 |
| 流利度理由 | 67.40 | 多谈停顿迟疑 | 随分数变化 | 较通用 |
| 韵律理由 | 72.95 | 多谈语调节奏 | 随分数变化 | 较通用 |

表后解释是，准确度理由词汇多样性最高，因为常提到不同回答中的具体词；流利度和韵律更谈整体印象，模式更重复。收益是理由与分数大体对齐且维度指向正确，支持用伪标签同时提供分数和描述性反馈。代价与反例是伪标签分数集中在中间，极端分少，1 分多对应无语音或噪声，5 分少是因为非母语者难达母语水平，而人工更常用全量程。这意味着直接用伪标签分数会压缩两端，训练时加权损失部分缓解但不能完全消除。未评测边界是理由质量缺少高质量参考与成熟评测协议，论文明确说人工筛查仍是局限。

文字转述的主趋势是，所有在伪标签上训练的模型都超过直接打分，VoxPA 在同一条件下持续超过同期模型且流利度提升最明显，Speechocean 预训练再微调好于直接在伪标签上训练，但可能抬高维度间相关。转述时不补写具体相关数值，避免把不同指标或不同阶段的数字混放一列。跨数据集对照的反证是，只在朗读上训练的模型在开放流利度上弱于音频语言模型，说明朗读的流利特征不能直接搬到开放场景。

### 哪些结论是直接报告，哪些还只是可能？

直接报告的是数据规模与划分、标注流程、模型结构与训练超参数、分布形态、一致性数值、词汇多样性数值，以及伪标签训练优于直接打分、VoxPA 为更强基线的方向性结论。有限解释是开放流利度更难是因为边想边说的认知负荷，流利度一致性高是因为停顿填充词更可观察，伪标签少给极端分是因为样本水平与评分习惯差异。这些解释有数据形态支持，但未做因果干预，因此用支持而不用证明。

待验证的是伪标签理由是否真正可靠可用。论文只展示了按嵌入质心挑选的代表性理由，未报告误判率、幻觉率或人工逐条验收比例，也未测量延迟与成本。因此不能承诺描述性反馈已可直接给学生使用，也不能承诺训练更省。总体趋势不等于每条都对，中间分多不等于每条中间分都准。

另一个局限是开源声明只说明仓库当前可用，不保证权重、脚本与数据文件长期完整。复现前应先列出仓库文件清单，确认检查点、划分文件与评测脚本是否齐备，再谈可运行。

### 复现先做什么，需要哪些信息条件？

先做数据核对。按仓库说明下载音频划分与标签，核对测试集 1000 条、训练 6109 条、开发 2673 条，以及测试 250 个说话人与训练开发 753 个说话人无重叠，音频时长在 10 到 45 秒之间。若数量对不上，先看是否有隐私过滤后的版本差异，不要自行补划分。

再做标注复现。找英语水平高的标注员与 1 名校准专家，先定参考分与初始规则，独立打分后对分差两分及以上的样本讨论修订，全程可咨询专家，最后回访早期三分之一样本。记录每轮规则改动，否则无法解释前后不一致。

然后做伪标签与基线。伪标注用多任务提示 1 次输出 3 维分加理由，不放人工规则；语音识别转写、切块平均、分类期望等跨数据集基线条件要与原文一致；VoxPA 用冻结骨干加三头，加权均方误差，滑动窗处理长音频，验证最优早停。评测只用皮尔逊相关分维度报告，区分百分点与相对百分比，不把不同维度的差值混为模型总分。

代表性理由的核对需要嵌入模型与词汇多样性工具，论文点名的工具链接本次可达，但版本变化可能改变数值，复现时应固定版本号并报告环境。

下表是伪标签代表性理由的原表选择，比较问题是同一维度内文字是否随分数逐级变化，公平条件是同一模型同一提示下的质心代表句，指标方向是措辞应从无语音到自然逐级区分，适合在复现文字反馈时逐级对照。

| Accuracy | Accuracy |
| --- | --- |
| 1 | The input consists of sounds that are not speech. There are no recognizable words or phonemes. |
| 2 | The pronunciation contains noticeable errors. |
| 3 | The pronunciation is generally understandable, but there are a few errors. Some sounds are unclear, making comprehension slightly challenging. |
| 4 | The pronunciation is generally clear and understandable, with only minor errors. The speaker’s articulation of individual words is mostly accurate. |
| 5 | The pronunciation is completely accurate and natural, with no discernible errors. It mirrors a native speaker’s pronunciation. |

表后解释是，准确度理由从无语音到母语水平逐级谈可懂与错误多少，流利度从噪声碎片到顺畅自然谈停顿填充词，韵律从无法评估到有效传意谈语调重音节奏。这种逐级变化是可执行的检查点，若复现的模型在相邻分数给出几乎相同措辞，则说明分数区分没有落到文字上。代价是这些是质心附近的代表句，不是全量保证，不能拿个别好例子证明整体可靠。未胜出或负细节是低分常与无语音或强噪声绑定，说明部分低分反映录制问题而非能力问题，使用时应先做语音活动检测。

### 何时值得尝试，还需补哪项验证？

当你的场景是开放回答且没有目标文本，又需要区分准确度、流利度、韵律时，OpenEnded 的划分与 VoxPA 值得尝试。已有朗读模型可作起点，但不要指望直接搬运，尤其流利度在开放场景下行为不同，需要在伪标签或少量人工数据上适配。当只能承担少量人工标注时，可学论文把人工预算集中在测试集，把规模训练交给伪标签，再用测试集检验是否真正超过伪标签模型本身。

还需补的验证有三项。第一，补报过滤丢弃率、训练耗时与推理延迟，否则无法判断成本。第二，补做理由的人工验收与错误分类，区分是分数错、维度串扰还是幻觉细节。第三，补做跨说话人与跨话题的切分评测，确认提升来自能力建模而非记住说话人或话题。做完这些，才能把相关提升转化为可部署的教学反馈。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2609.15666)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-16/)
