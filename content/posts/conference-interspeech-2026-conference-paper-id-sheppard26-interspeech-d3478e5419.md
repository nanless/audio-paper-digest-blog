---
title: "Queer inclusion in speech datasets: An audit and taxonomy of practical tensions"
date: 2026-09-28
draft: false
description: "论文审计六个英语语音技术数据集，发现可测量的酷儿占比仅 0–1.4%，不足以做稳健差异测量，并以两个酷儿社区语音库为对照提出扩展与包容、效率与参与、开放与自主、静态分类与流动身份四组实践张力。"
tags: ["统计分析", "公平性", "隐私保护", "语音", "语音属性识别"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:sheppard26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/sheppard26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/sheppard26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "28e6c826ba4cb3c73a7d8b5645e2d6565a45716638cdb3ec7cfbf3df23b5b4a1"
paper_digest_api_reader_plan_sha256: "23dad67b9515083ae1b73fa857461edde4e6bcf2b7ab3ac51540a81cdff7301b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "5a32f806a16902d2947e55aea7dca6cb96e9217ac11f4e1f073f9347e303a331"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "2e4d3284c935ada3f2dd68af41fc01fdf7204c94696819e29ebf165d458d6b9e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "2534086bb2af3ccfadbc38d1d688f73afdf0344b3c53e53b09cc9c695c69cd39"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4a59aab8cd1573b8cfe6af42e517c8d5819a538d9f8304bea1e27868601a36fb"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.statistical-analysis","label":"统计分析"},{"facet":"research_focus","id":"research_focus.fairness","label":"公平性"},{"facet":"research_focus","id":"research_focus.privacy","label":"隐私保护"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.speech-attributes","label":"语音属性识别"}]
paper_digest_primary_task: "语音属性识别"
paper_digest_primary_method: "统计分析"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 酷儿声音为何缺席：六个语音数据集审计与四组采集张力

> 英文题目：*Queer inclusion in speech datasets: An audit and taxonomy of practical tensions*

> 会议身份：`conference:interspeech:2026:conference-paper-id:sheppard26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/sheppard26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/sheppard26_interspeech.pdf)

标签：#统计分析 #公平性 #隐私保护 #语音 #语音属性识别

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Brooklyn Sheppard：机构信息未能从会议 PDF 纯文本可靠映射
- Anaelia Ovalle：机构信息未能从会议 PDF 纯文本可靠映射
- Adina Williams：机构信息未能从会议 PDF 纯文本可靠映射
- Levent Sagun：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文输入为6个英语语音技术数据集与2个酷儿导向言语科学数据集的论文档、性别标注与收集说明，输出为酷儿包容度审计结论与四类实践张力分类，难点在于语音难匿名化且身份标注涉及污名、安全与再识别风险。方法链分为三步：先按标注选项、标签分布、机构属性、伦理审查披露、招募方式与数据访问许可设定6维审计轴，再统计各库二元外性别占比并核查招募与许可差异，最后以主流库对照MAGES与PTMV归纳张力。相较以往偏见研究多用二元性别、口音或种族切分，本文以酷儿社区为案例揭示规模化开放收集在实践中系统性遗漏小众群体的机制。原文未提供可核对的关键定量结果。结论仅适用于英语与性别维度代理的可见性，不支持向性取向推断或跨语言外推，也未验证包容方案对下游误差的因果改善。本工作适用边界受限于英语语料与审计时点的数据版本，尚未验证包容方案向其他语言与下游任务的外推效果。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么：为什么语音公平性要先数清谁在数据里？

这篇解读的输入是论文原文证据与本次收到的官方原图像素，目标是让刚进入语音或音频方向的研究生能核对方法并复述审计流程，必须保留的信息是数据集选择标准、6 个审计维度、性别标注与分布事实、招募与获取方式，以及 4 组张力的原文依据，输出是 1 篇按学习依赖展开的中文技术解读。

语音技术常被认为只要收集足够多口音和说话人就能变公平，但论文提醒，声音与年龄、种族、性别、性倾向等身份感知紧密相连，缺席某个群体的声音可能让模型系统性地对该群体表现更差。白话说，文本数据可以用模板批量构造，语音数据必须真人开口录制，还要当事人愿意说出敏感身份，录完还很难彻底匿名，既怕被认出来，也怕声音被挪作他用。

因此公平性工作分两步，先要有带人口学标注的语音库，才能测量不同群体的错误率或表征偏差。论文把女同性恋、男同性恋、双性恋、跨性别、酷儿、间性等组成的 LGBTQIA+ 社群，简称为酷儿社群，作为案例，检查现有强调多样性的语音数据集里究竟有多少酷儿声音，以及为什么会这么少。需要先说明，本次审计沿性别身份维度测量酷儿代表性，这是因为性别是语音数据集中常见的标注，而其他酷儿身份很少被标注，作者认为发现的张力适用于更广泛的酷儿社群。

### 附：术语小抄与阅读顺序建议

为初学者保留的术语小抄，首次出现已在正文用白话解释。酷儿社群指 LGBTQIA+ 的统称。自我提供标签指说话人自己填性别。预设互斥类别指只能单选的固定选项。众包招募指经由微任务平台或开放平台向所有人征集。

社区参与指经由社群网络口口相传并共同决定用途。开放获取指自由下载，数据自主指社区决定谁能用、用来做什么。伦理审查披露指论文是否写明审查过程。公平性评估数据集指带人口学标注以测差异的数据集。

阅读顺序建议，先读问题与方法全景确定审计口径，再看组件的标注与分布计数，接着看结果图的柱顶人数与占比区间，最后读张力与局限，区分报告、支持与待验证 3 级表述。这样既能复述从输入到输出的完整链条，也能在复现时守住可核对的边界。

### 已有路线查到了什么：偏见测量与二元性别之外的尝试

在进入审计细节前，先把论文所处的相关路线讲清，避免把类别差异当成同条件胜负。第一条路线是语音自监督表征的偏见研究，例如对 wav2vec2.0、HuBERT、Mockingjay 等模型的考察，发现某些群体的语音与更积极的效价关联，关联超出词内容并与说话人身份属性相关，还会传导到下游的语音情感识别，以及自动语音识别中更高的错误率。

第二条路线是语音公平性数据集建设，沿性别、族裔、母语、方言等维度评估隐式与显式偏见。第 3 条路线是社会语言学与言语科学对酷儿语音的语音学、韵律和词汇变异研究，以及声音在建构性别身份中的作用。

与这些路线相比，本文的差异在于不训练新模型、不提出新的去偏算法，而是审计已有的多样性语音数据集。已有工作指出，许多常用语音库只提供二元性别标签，阻碍多样合成声音的发展。一项用 Common Voice 16.0 测量多语言识别模型性别差异的工作发现，所有模型对标注为 other 的说话人都有明显性能下降，但该类别每个语言只有 8 到 86 人，只能算初步探索。论文正是要回答，如果连可测量的样本都不够，后续公平性评估就无从谈起。

### 要回答的具体问题：六个数据集里有多少可测量的酷儿代表性？

论文把问题收敛为两个可操作的审计问题。第一，有 6 个可能被用于评估人口学差异的英语语音技术数据集，它们的性别标注选项是什么，每种标签下实际有多少说话人，酷儿占比是多少，是否足以支撑稳健的差异测量。第二，对照两个由酷儿社群、为酷儿社群、与酷儿社群一起创建的言语科学数据集，它们的标注、招募、伦理审查和获取方式有何不同，从而提炼通用采集惯例与社群价值之间的张力。

这里酷儿代表性的操作定义很窄，指在性别标注中选择二元之外或跨性别相关标签的说话人比例，不包括性倾向等未标注维度。举例说，如果一个数据集允许填写 transgender 或 non-binary，但最终公开版本中没有这类说话人，论文记为零代表性，而不是推测说话人真实身份。这种保守计数是为了可核对，只数能从标注中直接看到的部分。

### 方法全景：选哪八个库、沿哪六个轴审计？

先沿一个样本走完审计流程，再展开全部比较。假设拿到 Casual Conversations V2 的元数据，审计者先看性别字段有哪些互斥选项，再数每个选项有多少不重复说话人，接着查论文是否披露伦理审查、第一作者机构类型、说话人是付费招募还是众包，最后看许可证允许训练还是仅允许评估。其他数据集重复同样 6 步，两个酷儿专用库也走同样流程，只是预期它们以自由文本为主且规模很小。

数据集选择分 3 组。第一组强调说话人背景多样，选 Edinburgh Accents 和 English Dialects。第二组曾被用于公平性评估，选 L2-ARCTIC 和 Common Voice 22.0。第 3 组专为语音公平性评估设计，选 Fairspeech 和 Casual Conversations V2。对照组是 Mid-Atlantic Gender Expansive Speech 语料和 Palette of Transmasculine Voices，前者有 14 名不认同性别二元的说话人，后者有 20 名男性认同参与者，包括顺性别男性、跨性别男性、跨性别非二元者等。

6 个审计轴是标注选项、标签分布、机构归属、伦理审查披露、招募方法、数据获取与用途。机构只看第一作者的主要归属是营利公司、非营利组织还是学术机构。伦理审查只看论文是否明确描述审查过程，缺席披露不等同于没有内部审查，论文对工业界数据集特别做了这一保留。

**公平性评估数据集 × 临床用途语料：** 公平性评估数据集分工是提供人口学标注以测量不同群体错误率差异，临床用途语料分工是为言语病理与嗓音训练提供男性气质表达范例，二者搭配的理由是同为开放语音但目标和允许用途不同，组合意义在于说明不能把为临床收集的跨性别男性嗓音库直接当作可训练的通用公平性基准。

### 组件一：性别标注选项与分布如何数？

白话说，性别标注选项指数据集让参与者怎么填性别，是二选一、几选一，还是随便写。英文名是 gender annotation options。分布指每个选项实际落了多少说话人。

审计报告，Common Voice 允许 male/masculine、female/feminine、non-binary、transgender 四选一且互斥。Casual Conversations V2 提供 cis-man、cis-woman、transgender man、transgender woman、non-binary 5 类，同样互斥。EdAcc 允许自由填写，只有它是语音技术数据集中允许性别自由文本的。Fairspeech、ARCTIC、English Dialects 只有二元 male 与 female。MAGES 与 PTMV 允许用自己的话自由描述性别。

分布上，除 CCV2 与 EdAcc 外，其余语音技术数据集只有二元标签。Fairspeech 曾有少量非二元参与者，但原文称因话语数量不足未纳入最终版本以免结果偏斜。Common Voice 则记为零贡献者公开认同为 transgender 或 non-binary。也就是说，有选项不等于有样本，公开版本是否保留少数样本是另一个决策点。

**众包招募 × 社区参与：** 众包招募分工是低成本快速扩大说话人数和口音覆盖，社区参与分工是经由口口相传和社会媒体建立信任并让受影响者决定标注与用途，二者搭配的理由是前者解决规模、后者解决安全与自决，组合意义在于说明为何单纯放大前者不能自动得到后者想要的酷儿代表性。

**自我提供标签 × 预设互斥类别：** 自我提供标签分工是让说话人自己陈述性别身份，预设互斥类别分工是把回答压缩为 male、female、transgender 等几个互斥选项以便统计与建模，二者搭配的理由是前者保真、后者便利于流程，组合意义在于揭示压缩过程会把可以并存的 trans 与 non-binary 与男性或女性对立起来，进而抑制参与和误读身份。

**开放获取 × 数据自主：** 开放获取分工是让数据集自由下载以促进复现和模型改进，数据自主分工是让社区决定谁能拿到语音、用于训练还是评估或临床，二者搭配的理由是科学需要可及性而语音难以匿名且承载身份，组合意义在于说明无条件开放可能带来声音挪用和猎奇式性别推断风险，因而需要分级与用途限制。

### 本研究训练了什么：无模型训练，审计如何执行？

本研究没有训练任何语音模型，没有优化器、梯度路径、参数冻结与更新的安排，也没有重置时机可报告。真实计算过程是人工审计与计数加对照阅读，不存在训练损失或早停。把无训练等同于确定性求解是误解，这里每一步都有人工判断，例如把哪些标签算作酷儿代表性、如何归一化机构类型。

可复述的执行动作是，先按 3 条入选标准固定 8 个数据集，然后逐个提取论文与文档中的 6 个轴信息，再统计性别标签的不重复说话人数并计算占比，最后对照两个酷儿专用库的招募与获取描述，归纳张力。调用的只是已有数据集的元数据与论文文字，没有检索增强、仿真或标注新语音。缺项是论文未报告审计者间一致性、未报告统计显著性检验，计数以公开版本为准，不追踪被剔除的原始投稿。

**伦理审查披露 × 机构归属：** 伦理审查披露分工是公开招募方式、风险收益与缓解措施，机构归属分工是标明第一作者来自学术机构、非营利组织还是营利公司以理解激励与约束，二者搭配的理由是仅看机构不能推定有无审查、仅看有无披露也不能推定有无内部审查，组合意义在于要求读者把披露缺席理解为信息缺项而非伦理缺席。

### 审计条件：规模、招募、获取与用途如何对齐比较？

比较公平性要求先对齐条件，否则规模差异会掩盖机制差异。论文固定语言为英语，固定用途为可能被用于评估人口学差异的开源语音技术数据集，再加两个明确为酷儿包容而建的言语科学数据集作为对照。指标方向是酷儿占比越高、标注越允许自我表达、招募越经过社群参与、用途限制越尊重自主，则越有利于包容，但同时要记录规模与开放性的代价。

下表提出比较问题，在同为英语开源语音库的条件下，各库的标注、招募、获取与酷儿占比有何不同，占比方向是越高越有利于差异测量。表后解释主要收益与代价，并指出未胜出项。

| 数据集 | 性别标注选项 | 招募方式 | 获取与用途 | 酷儿占比与说明 |
| --- | --- | --- | --- | --- |
| CCV2 | 5 类互斥 | 付费说话人 | 开放但仅评估 | 0–1.4% of speakers 区间上端，含少量跨性别与非二元 |
| Common Voice | 4 类互斥 | 众包开放贡献 | 开放可训练可评估 | 0–1.4% of speakers 区间下端，zero contributors 认同为 transgender 或 non-binary |
| EdAcc | 自由填写 | 众包加个人关系 | 开放可训练可评估 | 0–1.4% of speakers 区间内，含 1 名 demiboy |
| Fairspeech | 二元 | 付费说话人 | 开放但仅评估 | 0–1.4% of speakers 区间下端，最终版未纳入非二元 |
| English Dialects 与 ARCTIC | 二元 | 众包或志愿者 | 开放可训练可评估 | 0–1.4% of speakers 区间下端，无二元外标签 |

表前已说明比较问题与指标方向，表后需要解释，CCV2 与 EdAcc 是仅有的两个在公开版本中保留可计数酷儿说话人的技术数据集，但占比仍不足以做稳健测量。Common Voice 的反例很关键，它规模最大、门槛最低，任何有麦克风和网络的人都可贡献，却没有带来更高的酷儿占比，说明开放规模不能自动覆盖污名化群体。Fairspeech 的未胜出之处在于有过非二元参与却在发布时剔除，保留了二元评估的干净，却丢掉了包容性。

### 主结果：0–1.4% 意味着什么，图里的人数落差有多大？

论文报告，对 6 个多样性语音数据集的可测量酷儿代表性为低，不足以支撑稳健的差异测量。具体到保留样本的两个库，CCV2 与 EdAcc 的分布见下图。阅读前先确认对象与条件，左面板是 Casual Conversation V2 的不重复说话人数，右面板是 Edinburgh Accents 的不重复说话人数，纵轴都是说话人数而非话语条数，横轴是各自数据集内的性别标签，时间范围是论文审计时的公开版本。

> **看图路径：** 1. 先看左右两面板的纵轴说话人数刻度差异，确认左侧为数千量级、右侧为数十量级；2. 再看横轴每个性别标签柱顶标注的具体人数，比较主流标签与酷儿标签的数量级落差；3. 最后核对右侧 Edinburgh Accents 仅有一个 demiboy 样本，理解 0.82% 代表性的脆弱性

[![原论文 Figure 1：Distributions of speaker gender across two datasets.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a3ab722bb228/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a3ab722bb228/figure-1.png)

*论文图 1。原论文 Figure 1：“Distributions of speaker gender across two datasets.”。*

图中可见落差极为陡峭。左面板 cis woman 标注为 2971 人，cis man 为 2388 人，而 prefer not to say 为 123 人，non-binary 为 57 人，transgender man 为 16 人，transgender woman 为 7 人。右面板 female 为 62 人，male 为 59 人，demiboy 仅 1 人。纵轴刻度差异提醒不能跨面板直接比柱高，必须看柱顶数字与各自总数。结论是即使在最包容的两个技术数据集中，酷儿标签也只有 2 位数或个位数，任何按性别分组的错误率比较都会因样本过少而不稳健。论文还报告，Common Voice 的规模约为 EdAcc 的 778 倍、CCV2 的 17 倍，却没有更高的酷儿占比，这支持规模与包容在实践中存在张力，而非统计规律上的必然矛盾。

下表把规模与对照库放在一起，比较问题是技术数据集与社区库在规模和代表性上的 trade-off，占比方向仍是越高越有利于测量，但规模方向越大不一定越好。

| 数据集组 | 代表数据集 | 说话人数 | 酷儿占比 | 适用性判断 |
| --- | --- | --- | --- | --- |
| 大规模众包 | Common Voice | 94911 人规模 | 0–1.4% of speakers 下端 | 可训练但无可测酷儿分组 |
| 中规模付费 | CCV2 | 5567 人规模 | 0–1.4% of speakers 上端 | 仅评估，分组仍过小 |
| 小规模学术 | EdAcc | 122 人规模 | 0–1.4% of speakers 内 | 可训练可评估，demiboy 仅 1 人 |

表后解释，社区库的收益是身份表达保真且招募经由社群网络，代价是规模小且获取受限，MAGES 需要与负责人面谈意图，PTMV 声明临床用途而非通用训练。反例是 PTMV 虽由酷儿社群参与创建却是开放获取，说明开放本身不是原罪，关键是用途是否与社区目标一致。未评测边界是性倾向维度，因无标注而无法计数。

### 反证与细节：如果去掉某个环节，代表性会怎样变化？

论文没有消融实验，但提供了 3 个可当作反证的细节。第一，Fairspeech 的原始收集并非零非二元参与，而是发布时以话语不足为由剔除，说明从收集到发布的过滤环节可以直接把代表性清零。第二，Common Voice 有选项却零公开认同，说明仅增加选项而不解决安全与信任，不能自动带来样本。第三，EdAcc 的自由填写只换来 1 名 demiboy，说明即使允许自我表达，若招募仍依赖通用众包加个人关系，覆盖仍是偶然的。

另外两个论文特有细节值得展开。一是用途限制，Fairspeech 与 CCV2 仅允许评估不允许训练，CV、EdAcc、English Dialects、ARCTIC 允许训练与评估，MAGES 需面谈，PTMV 声明临床用途。二是伦理披露，仅 MAGES、PTMV、EdAcc 明确描述伦理或机构审查过程，其余缺席披露，论文明确说缺席不等于没有内部审查，尤其对大型工业研究机构。

下表聚焦这组条件，比较问题是在相同开放可得的外观下，用途与审查披露有何实质差异，指标方向是越明确限制高风险用途、越明确披露审查，越有利于自主。

| 数据集 | 第一作者机构 | 伦理审查披露 | 获取 | 允许用途 |
| --- | --- | --- | --- | --- |
| CCV2 | 营利公司 | 未明确披露 | 开放获取 | 仅评估 |
| Fairspeech | 营利公司 | 未明确披露 | 开放获取 | 仅评估 |
| EdAcc | 学术机构 | 已披露 | 开放获取 | 可训练可评估 |
| MAGES | 学术机构 | 已披露 | 需面谈 | 研究与性别多样合成 |
| PTMV | 学术机构 | 已披露 | 开放获取 | 临床嗓音训练 |

表后解释，主要收益是用途限制与面谈制把高风险重用挡在外面，代价是可复用性下降，研究者不能随手拿来训练通用模型。未胜出项是营利公司数据集在规模和标注投入上有优势，但在披露文本上最薄，读者无法从论文判断其内部流程。未评测边界是实际下载后的违规重用率，论文未测量。

### 局限：哪些结论是报告、哪些是支持、哪些待验证？

用 3 级表达区分证据强度。论文直接报告的是 6 个技术数据集的可测量酷儿占比低、仅 CCV2 与 EdAcc 有可计数的二元外样本、Common Voice 零公开 transgender 或 non-binary 贡献者、3 个数据集披露伦理审查。这些是报告或显示级别。

论文有限解释的是 4 组张力是对审计与文献的归纳，能解释为何通用惯例会系统性遗漏酷儿声音，这是支持级别，但不是因果证明。例如开放众包与低代表性相关，但不等于证明众包导致低代表性，也可能有自我审查、平台可达性等多重原因。

待验证的是跨群体差异，论文明确说张力适用于酷儿整体，但审计只沿性别身份测量，性倾向、间性等维度未被测量，未来需要直接与酷儿说话人合作，通过 lived experience 验证张力在不同子社群是否相同。相关性不是因果，缺失证据不是技术错误，没有测量误判率、延迟或成本时，不应承诺增加代表性会自动改善这些量。总体趋势不等于每组都成立，例如某个模型可能在小样本上偶然表现尚可，但不能推广为公平。

### 复现先做什么：拿到什么、数什么、保留什么？

若要复述审计，先固定 8 个数据集的公开版本与论文版本，Common Voice 明确为 22.0，避免用新版数字覆盖旧结论。然后按六轴建表，性别字段必须记录是否自我提供、是互斥多选还是自由文本，计数对象必须是不重复说话人而非话语条数，占比分母是总说话人数。机构只记第一作者主要归属，伦理只记是否明确描述审查过程，不要从机构名称推定有无审查。

关键超参数在这里是信息条件，许可证是否允许训练或仅评估、是否需要面谈、是否声明临床用途，都要原文保留。资源状态是正文开源声明的唯一依据，本次证据中没有来源绑定且完成 HTTPS 验证的资源，因此不得声称代码、模型或数据已公开，只能说论文描述为开放获取或需面谈。复现时若发现表头、图注或算术冲突，应明确标注冲突，不自行编造划分或聚合口径。

还需补的验证是纵向追踪，被剔除的非二元话语去了哪里，Common Voice 新增版本有无变化，以及社区库在合成语音中的实际使用是否经过社区同意。这些都需要与社区直接合作，而非仅靠下载数据。

### 收束：何时值得尝试社区参与式收集？

当研究目标包含对边缘群体的差异测量或为其建模声音时，值得放慢效率、转向参与式收集。具体动作是经由社群内的口口相传和社会媒体招募，由认同该社群的研究者主导，经过伦理审查，允许自由文本自我描述，并为数据设定分级获取与用途限制，例如面谈后释放或声明临床用途。论文的 MAGES 与 PTMV 就是这类范例，规模虽小但保真。

当目标只是扩大通用口音覆盖且无敏感分组评估时，众包仍可用，但不应声称已代表所有人，也不应把搜索最优或事后最优值当作可部署收益。常见误解是多一个 transgender 选项就等于包容，论文显示选项、样本保留、安全信任缺一不可，互斥分类还会把 transgender men 与 men 对立起来，伤害身份理解。另一个误解是开放必然进步，语音难以匿名，开放的酷儿语音可能被用于 gaydar 式识别或声音挪用，自主优先于无条件开放。

最终判断是，缺乏酷儿声音不是简单的数量问题，而是采集价值观的错位，扩展与包容、效率与参与、开放与自主、静态分类与流动身份 4 组张力需要逐项处理，未来工作应直接与酷儿说话人合作，理解不同子社群的 lived experience，再谈伦理的语音技术发展。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
