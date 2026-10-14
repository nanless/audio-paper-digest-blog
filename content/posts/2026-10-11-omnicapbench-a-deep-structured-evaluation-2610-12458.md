---
title: "OmniCapBench: A Deep-Structured Evaluation Framework for Fine-Grained Audio-Visual Captioning"
date: 2026-10-11
draft: false
tags: [音视频理解, 基准设计, 基准测试, 音视频]
categories: [论文速递]
description: "针对整体打分掩盖局部错误的问题，论文把预测目标改为引用、镜头和音频事件三组原子单元，用确定性规则查结构、用局部语言模型查语义，在 786 个视频上发现前沿模型局部感知强但跨镜头身份保持和音画关联弱，且格式修补补不回缺失信息。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.12458"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "OmniCapBench：把音视频描述拆成可验证原子单元的细粒度评测"
paper_digest_original_title: "OmniCapBench: A Deep-Structured Evaluation Framework for Fine-Grained Audio-Visual Captioning"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.12458"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.12458.pdf"
paper_digest_primary_task: "音视频理解"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-understanding","label":"音视频理解"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对整体打分掩盖局部错误的问题，论文把预测目标改为引用、镜头和音频事件三组原子单元，用确定性规则查结构、用局部语言模型查语义，在 786 个视频上发现前沿模型局部感知强但跨镜头身份保持和音画关联弱，且格式修补补不回缺失信息。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhongyu Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiale Tao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ruitao Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zuhao Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yingfang Yuan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xueliang Zhao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Auden"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kai Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shuai Shao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Biao Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Steve Yves"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qinglin Lu"}]
paper_digest_abstract_sha256: "fd6cee558c5c05d6bc510baa7b7ee6e52c385e5932a6f373cd88fcc81caa22f3"
paper_digest_sidecars: {"citation.bib":{"sha256":"94e7bd906c50075c98029b019bdc709fe65c858fb22bf4c5db68536564851179","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-12458/citation.bib"},"citation.json":{"sha256":"576388c3d8a11d62949f492a04378614d7c29dbc853e7725a6902a8b62de479f","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-12458/citation.json"},"citation.ris":{"sha256":"c592953f983f738ed5975109a71a0b68658b5451e2226b3455c41da7677b347c","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-12458/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"c243302c938e5cfe90b1153080abc0d38534b1177039dd245cb742f7ba6cd1ab","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-12458/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "944c9724a82b3ad56c72294e947eeb3cb8c9aef2e1d0c2ac7ae1ee3f045a444d"
paper_digest_api_reader_plan_sha256: "95b5d1ad8937a58827574a9d86452e186e322804787cb032ff66d14c975a6e15"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "3d1fd5f4eb65b9eedcf1c14eb96b524bd23da545efb5efcd2b735f9357afbf7c"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "0270f69564a5452a68ce9fc3ea54a701e4434334eb45b155352f2d56c43c2ae9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "76466cca49e2aafbaaec21a150acae46cca3dde57fbd3e52897711561c106152"
paper_digest_api_reader_author_count: 12
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "52579cae0dbbf1159385a8e790264172c75d5e48fb4c81e757fb2d936759259c"
paper_digest_api_reader_resource_count: 12
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 OmniCapBench：把音视频描述拆成可验证原子单元的细粒度评测

> 英文题目：*[OmniCapBench: A Deep-Structured Evaluation Framework for Fine-Grained Audio-Visual Captioning](https://arxiv.org/abs/2610.12458)*

> 标签：#音视频理解 | #基准设计 | #基准测试 | #音视频
>
> 评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Zhongyu Yang：机构信息未在 arXiv HTML 中可靠披露
- Jiale Tao：机构信息未在 arXiv HTML 中可靠披露
- Ruitao Chen：机构信息未在 arXiv HTML 中可靠披露
- Zuhao Yang：机构信息未在 arXiv HTML 中可靠披露
- Yingfang Yuan：机构信息未在 arXiv HTML 中可靠披露
- Xueliang Zhao：机构信息未在 arXiv HTML 中可靠披露
- Auden：机构信息未在 arXiv HTML 中可靠披露
- Kai Wang：机构信息未在 arXiv HTML 中可靠披露
- Shuai Shao：机构信息未在 arXiv HTML 中可靠披露
- Biao Wang：机构信息未在 arXiv HTML 中可靠披露
- Steve Yves：机构信息未在 arXiv HTML 中可靠披露
- Qinglin Lu：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

输入为包含连续画面与声音的视频，输出要求是结构化的音视频字幕，难点在于长时程内同时保持实体身份、时间边界与声音画面对应，整段流畅文本容易掩盖局部错误。OmniCapBench 把视频内容表示为参考实体（References）、视觉镜头（Shots）与音频事件（Events）三类原子单元，参考实体给出持久身份，音频事件给出连续时间区间，视觉镜头通过交叉链接把实体与事件锚定到画面。模型直接生成上述 JSON 图，确定性规则先核查标识有效性、时间合法性与跨轨链接，再由局部语言模型只比较已对齐单元的语义等价性，召回方向查漏报，精确率方向查幻觉。与整体文本打分和问答探针相比，该设计同时保留覆盖度与可定位性，避免对整段文本做无约束判断。在包含 786 个视频、5818 个实体、6537 个音频事件与 11419 个视觉镜头的评测中，Gemini 3.1-Pro 的事件-镜头关联 F1 为 51.46%，低于其事件 F1 的 63.32%，说明声音识别与画面绑定之间存在缺口。结论适用于 5 分钟以内、具有较密镜头与事件的视频，对更长视频与标注范围外的正确细节尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 论文首页资源：<https://01yzzyu.github.io/OmniCapBench/> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/Jingkang50/FunQA> — 暂时无法访问

- 第三方资源：<https://huggingface.co/datasets/lmms-lab/LLaVA-Video-178K> — 暂时无法访问

- 第三方资源：<https://huggingface.co/datasets/omni-research/Tarsier2-Recap-585K> — 暂时无法访问

- 第三方资源：<https://github.com/MME-Benchmarks/Video-MME> — 暂时无法访问

- 第三方资源：<https://huggingface.co/datasets/zai-org/VisionRewardDB-Video> — 暂时无法访问

- 第三方资源：<https://huggingface.co/datasets/longvideobench/LongVideoBench> — 暂时无法访问

- 第三方资源：<https://huggingface.co/datasets/NJU-LINK/OmniVideoBench> — 暂时无法访问

- 第三方资源：<https://ai.google.dev/> — 暂时无法访问

- 第三方资源：<https://github.com/QwenLM/Qwen2.5-Omni> — 暂时无法访问

- 第三方资源：<https://seed.bytedance.com/> — 暂时无法访问

- 第三方资源：<https://huggingface.co/XiaomiMiMo/MiMo-V2.5> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 音视频描述要评什么：输入、输出和必须保留的信息

这篇论文面对的是连续音视频流的描述任务。输入是一段带声音的视频，时长在 5 分钟以内，画面会切镜头，声音里有人说话也有环境音。输出不是一段感想式段落，而是要能回答谁在画面里、每个视觉状态起止于何时、每个声音起止于何时、声音该挂到哪个画面上。刚进入语音、音乐或音频领域的同学可以这样理解：模型既要听清，又要看清，还要把听到和看到的在时间轴上对齐。

论文指出，如果只给整段文字打一个总分，语言流畅会盖住时间错位、人物混淆和音画错连这些局部错误。所以它要求输出必须保留 3 类可核查的信息：持久实体的编号与外观依据、有起止时间的音频事件、有起止时间的视觉镜头及子镜头，以及它们之间的引用关系。后续所有打分都围绕这些信息是否结构合法、时间对得上、语义说得对来展开。

### 已有评测路线为什么不够：整体打分与局部探针的分工

论文把已有做法分成整体描述、探针和先解析再打分 3 类来比较。第一类把预测与参考的整段文字作为一个单元，用全局语言模型评判，覆盖面全但压缩成一个分数，定位不到具体错误。第二类用问答或完形填空去抽查局部事实，能定位但抽查稀疏，覆盖面不足，而且问答本身要先从长文中抽取和匹配信息，容易被无关文字干扰。第 3 类把自由文本事后解析成事件或脚本再评，结构是事后加的脆弱层，解析错了后面全错。

论文的判断是，自由、整块的文本表示同时带来两个困难：没有同时具备全局覆盖和细粒度定位的评测单元；打分器必须先做事后抽取再打分，带来不稳定。因此它提出把输出本身改成原生原子单元，让结构验证和语义比较可以分开做。

### 论文把评测目标改成了什么

论文把音视频描述评测重新定义为深层结构化诊断。被评对象不再是自由段落，而是模型直接输出的 3 组原子单元集合。诊断目标明确写成四件事：语义内容是否正确、时间定位是否准确、身份在跨镜头下是否保持、跨模态关联是否连对。输入仍是原始视频，输出是结构化 JSON，包含引用、事件和镜头 3 个数组。评分也随之改变：先用确定性规则验证结构完整性，包括编号是否定义、时间是否合法、跨链是否在时间上兼容。

再把对齐后的单元对交给局部语言模型只做孤立字段的语义等价比较。这种先结构后语义的约定把描述流畅度和结构正确性分开，避免用文字好坏代替时空定位是否正确。

### 整体流程如何把一段视频变成可打分的单元图

对一段视频，论文用参考系统来形式化其内容，包含引用、事件和镜头三部分。引用给关键人物、物体和场景分配唯一编号，用于全片跟踪。事件隔离出听觉事件和对话并给出连续时间范围，例如一段狗叫从 10.5 秒到 12.0 秒。镜头切分视觉时间轴为离散相机镜头，并通过显式跨链把已定义的实体和音频事件锚定到具体镜头上，例如把狗叫声连到出现狗的镜头。模型评测时的主任务就是直接输出这 3 组预测单元。

打分分 2 个阶段：先做结构验证与匹配，镜头和事件按时间交并比匹配，身份引用和视觉子镜头用有界语言模型匹配器只比较局部候选对；再做局部语义打分，只在已对齐的单元对上评文字意思。这样无效或未匹配的单元记为结构错误，语言模型不接触未对齐的复杂结构。

### 三条轨道各管什么：引用、事件与镜头的分工

引用轨道是持久身份目录，记录每个实体是什么类型、外观细节是什么，关键证据字段是外观锚点中的细节描述。事件轨道是带时间的音频单元，对话类需要给出逐字转录行，非对话类记录声音描述。镜头轨道是视觉时间轴切分，每个镜头有时间范围、视觉描述、相机信息和镜头转场，并包含细粒度的子镜头单元，用于把连续动作拆成最小不可分的原子动作。

跨链字段把三者连成图：镜头中的活跃事件数组必须来自已定义的事件表，镜头中的引用数组必须来自已定义的引用表，事件内容中的引用编号也要可查。论文还要求模型处理无声视频时不得按视觉口型编造对话，时间一律用相对视频开头的秒数范围表示，子镜头允许时间重叠以表示并发动作，描述只写可观察事实而不写因果推断。

**引用 × 镜头 × 音频事件：** 引用负责给人物、物体和场景分配持久编号，解决跨镜头谁是谁的问题；镜头负责切分视觉时间轴并作为统一载体，解决动作发生在何时何处的问题；音频事件负责记录声音和对话及其时间范围，解决听到了什么的问题。三者通过镜头中的关联字段连起来，引用被镜头引用，事件被挂到同时段镜头上，组合后形成可检查的音画图结构，既保留覆盖面又能定位到具体边和时间段。

### 打分如何先查结构再查意思：两阶段流水线

结构验证阶段检查每条预测单元是否合法：引用编号是否在顶层出现过、起止时间是否正序且在视频时长内、事件与镜头的链接是否有正的时间重叠、子单元是否超出父镜头边界、必需的证据字段是否缺失。违反规则的预测会被确定性检查移除，例如未定义编号、起止颠倒、事件连到完全不相交的镜头。

剩下的单元再与标准答案匹配：镜头按时间交并比匹配，子镜头在已匹配的父镜头内用扩展窗口局部匹配，对话事件用归一化词错误率匹配，非对话事件按时间交并比匹配，引用用只看外观细节描述的有界语言模型二部匹配并强制 1 对一。语义阶段只在匹配对上比较孤立字段，相机与转场、事件描述、子镜头内容等分开评，时间与编号问题不再进入语义判断。

**结构验证 × 局部语义打分：** 结构验证先用确定性规则检查编号是否存在、时间是否合法、事件与镜头是否有重叠，只管形式和对齐，不管描述写得好不好；局部语义打分只在已对齐的单元对上比较文字意思是否等价，不管时间和编号。两者分工是为了不让语言模型同时做解析、找对应和判断意思，先把难对齐的结构问题排除，再让语言模型只做小范围同义判断，组合后减少全局评判的不稳定。

### 为什么要双向打分：召回与精确如何各罚一类错误

开放描述没有唯一正确答案，模型可能把 5 秒动作拆成 3 个子镜头而标准答案只写一个，也可能选了不同的外观属性来描述同一个人。只从单侧评会有偏：只查召回会奖励冗长投机，只查精确会奖励过短保守。因此对引用中的主体与场景外观以及视觉子镜头这类开放词汇字段，论文执行双向匹配与打分。召回方向以标准答案为被查对象，看预测是否覆盖，罚遗漏；精确方向以预测为被查对象，看标准答案是否支持，罚幻觉。

最终 F1 取两者的调和平均。论文还说明开放世界计分策略：匹配上的单元进入结构与语义检查，未匹配的引用、事件和子镜头不直接扣精确主指标但记入诊断日志，无效或悬空链接记为结构错误，有效但超出标注范围的事实不硬罚只记录审计。

**召回视角 × 精确视角：** 召回视角以标准答案为出发点，检查预测是否覆盖了应有的事实，漏写会被扣分；精确视角以预测为出发点，检查标准答案是否支持预测写的内容，编造会被扣分。两者搭配是因为开放描述没有唯一正确答案，粗细粒度和措辞都可能不同，只看一侧会被过长或过短的回答钻空子，组合后取调和平均得到 F1，既罚遗漏也罚幻觉。

### 基准数据如何建成：筛选、生成与审核三阶段

本研究没有训练新的音视频模型，它的构造工作是建成 786 个视频的参考系统。下面先看数据建设流水线的整体走向，再理解每步的输入处理与代价。

> **看图路径：** 1. 先沿从左到右箭头看筛选后视频进入生成循环再进入人工审核的主路径；2. 注意第二阶段按引用到事件再到镜头的顺序建立单元；3. 观察验证不通过会重新生成或丢弃，通过后才做结构不变的语义丰富

[![原论文 Figure 2：OmniCapBench data construction pipeline.](https://arxiv.org/html/2610.12458v1/pipeline.png)](https://arxiv.org/html/2610.12458v1/pipeline.png)

*论文图 2。原论文 Figure 2:：“OmniCapBench data construction pipeline.”。*

上图从左到右展示 3 个阶段的图标与箭头关系。左侧筛选从开放数据集和公开平台取候选视频，做元数据抽取、镜头检测和分类，再按音频存在、时长、质量和每分钟密度过滤，确保留下的视频有足够的音画复杂度和结构密度。中间生成按引用到事件再到镜头的依赖顺序迭代建立原子单元，循环是生成、评估与验证、局部精化、选择，验证不合法就带错误迹退回重生成或丢弃，通过拓扑验证后再做文字丰富但编号、时间戳和跨链严格不变。

图中标注帧在建设阶段带有红色时间戳以便锚定边界，但评测时模型看到的是无水印原帧。右侧是程序校验与人工审计，最终冻结每个视频的参考系统。代价主要在多模型多次生成与人工复核，换来的是可直接决定评分契约的参考质量。论文报告共 12.8 小时视频，平均每视频 7.40 个引用、14.53 个镜头、49.82 个子镜头、8.32 个事件，覆盖 20 个 1 级类和 125 个 2 级类。

### 评测条件是什么：模型、输入方式与指标方向

主评测包含能处理音画流并输出结构化 JSON 的模型，专做自由段落的描述模型因指令跟随差被放到附录分析。被评的专有模型包括 Gemini 系列、Qwen-Omni 系列、Seed2.0 和 MiMo-2.5，开源模型包括 Qwen3-Omni 指令版与描述版和 MiniCPM-o-2.6。调用上专有模型走接口传视频或链接，开源模型用交错的图像帧加原始音频波形，贪心解码以减少结构幻觉，长视频或小上下文模型用先抽全局实体再滑窗生成事件与镜头的两段策略。指标方向都是越高越好，结构分看是否找回且时间对准，语义分只在结构对齐的单元上看文字是否等价。下面先看数据密度，理解为什么需要同时跟踪多实体多事件。

> **看图路径：** 1. 比较左中右三幅直方图的横轴计数范围和纵轴视频数；2. 注意引用集中在中小数值而事件和镜头有更长的尾部；3. 观察每视频需同时跟踪多个实体和事件的密度要求

[![原论文 Figure A.3：Figure A.3: Structured Unit Counts per Video.](https://arxiv.org/html/2610.12458v1/figures/mtss_paper_stats_unit_histograms.png)](https://arxiv.org/html/2610.12458v1/figures/mtss_paper_stats_unit_histograms.png)

*论文图 7。原论文 Figure A.3:：“Figure A.3: Structured Unit Counts per Video. Individual histograms of References, Events, and Shots per video, illustrating the dense tracking requirements placed on the models.”。*

上图三幅直方图分别显示每视频引用、事件和镜头的计数分布，横轴是计数，纵轴是视频数。可见多数视频同时包含多个引用和多个事件，镜头数尾部更长，意味着模型必须在并发流中维护编号、时间和跨链，而不是只识别单帧单事件。论文还按时长分桶报告，检验长上下文下的身份保持与时间定位是否退化。

### 结构分说明了什么：谁能定位，谁连不对音画

下面比较结构合规性，核心问题是模型能否生成合法且时间对得上的单元，公平条件是同一套匹配阈值与 1 对一规则，分数按视频宏平均，数值越高表示结构恢复越好。

| Model | SGC | Visual | Visual | Visual | Visual | Visual | Visual | Visual | Visual | Audio | Audio | Audio-Visual | Audio-Visual |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | SGC | RefUse | CCC | Ref Subject F1 | Ref Scene F1 | Shot F1 | Shot tIoU | Subshot F1 | Subshot tIoU | Event F1 | Event tIoU | Speaker F1 | EVSA F1 |
| Proprietary Models |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Gemini 3.1-Pro [15] | 97.36 | 70.39 | 34.43 | 78.60 | 82.68 | 76.24 | 70.74 | 65.27 | 48.76 | 63.32 | 71.92 | 91.18 | 51.46 |
| Gemini 2.5-Pro [10] | 96.73 | 70.75 | 37.81 | 80.70 | 83.65 | 70.93 | 72.58 | 66.69 | 49.18 | 58.52 | 69.35 | 89.72 | 43.74 |
| Qwen3.5-Omni-Plus [32] | 96.09 | 66.92 | 29.55 | 73.57 | 79.97 | 71.25 | 72.35 | 65.69 | 48.29 | 53.92 | 67.77 | 91.20 | 40.20 |
| Qwen3.5-Omni-Flash [32] | 95.58 | 63.10 | 24.31 | 72.27 | 66.07 | 65.65 | 68.99 | 58.94 | 46.52 | 50.68 | 69.34 | 89.91 | 35.58 |
| Seed2.0 [3] | 87.68 | 64.69 | 31.88 | 65.29 | 75.13 | 72.62 | 72.56 | 68.82 | 47.94 | 4.54 | 62.78 | 91.80 | 3.52 |
| MiMo-2.5 [45] | 96.58 | 61.99 | 23.91 | 61.19 | 69.27 | 66.58 | 65.53 | 60.37 | 46.51 | 43.82 | 61.82 | 86.62 | 31.69 |
| Open-source Omnimodal Models |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Qwen3-Omni-Instruct [49] | 89.02 | 40.96 | 9.85 | 54.84 | 64.55 | 49.98 | 67.92 | 29.51 | 47.95 | 41.70 | 40.99 | 88.35 | 13.33 |
| Qwen3-Omni-Captioner [49] | 90.77 | 44.96 | 11.51 | 54.36 | 57.08 | 52.29 | 70.80 | 39.51 | 49.69 | 41.31 | 52.60 | 88.68 | 17.42 |
| MiniCPM-o-2.6 [60] | 72.13 | 21.99 | 4.29 | 24.36 | 3.38 | 17.28 | 58.45 | 9.90 | 42.99 | 6.41 | 27.44 | 80.07 | 2.46 |

上表完整呈现规则结构分，覆盖视觉、音频和音画三域。前沿模型在镜头时间定位上尚可，但跨镜头身份保持普遍偏低，开源模型更低。音频事件找回与时间对准中等，而把事件挂到同时段镜头的事件-镜头关联明显更低，Seed2.0 几乎不输出音频事件单元但说话人归属很高，说明它转写对话强却缺环境声事件。模式合规上前沿模型多在较高水平，格式本身不是瓶颈。限制是这些分数依赖固定阈值与一对一匹配，阈值收紧绝对分会下降，但论文的阈值扰动显示排名基本不变。

**跨镜头指代一致性 × 事件-镜头关联：** 跨镜头指代一致性检查同一个持久编号在不连续镜头中是否保持稳定，针对视觉身份漂移；事件-镜头关联检查每个音频事件是否挂到了时间上有重叠的视觉镜头上，针对听觉与视觉是否对齐。前者看节点在时间上的延续，后者看音频边连到哪个视觉证据，组合后把流畅段落拆成两类不同的图约束，分别暴露跟踪失败和跨模态错连。

### 语义分在对齐单元上看到了什么：保守与编造的权衡

下面只在结构对齐的单元上评语义，核心问题是排除时间与编号噪声后描述本身是否忠实，召回罚遗漏、精确罚幻觉，数值越高表示局部描述越忠实。先看一个具体案例再读平均数。

> **看图路径：** 1. 先看每条轨道的标准答案与三组模型预测的文字差异；2. 注意右侧每条预测后同时给出的召回与精确分数；3. 对比引用轨中多写的防护眼镜如何在精确分上被惩罚

[![原论文 Figure 5：Qualitative case study of deep-structured diagnostics.](https://arxiv.org/html/2610.12458v1/case_study.svg)](https://arxiv.org/html/2610.12458v1/case_study.svg)

*论文图 4。原论文 Figure 5:：“Qualitative case study of deep-structured diagnostics.”。*

上图分三轨展示同一视频的标准答案与 3 组预测，右侧同时给出召回与精确分数。引用轨中有的预测多写了标准答案没有的防护眼镜，精确分被压低；事件轨与镜头轨中有的动作描述看似合理但落在镜头时间之外，召回与精确分别记录覆盖不足与支撑不足。这说明流畅段落的高分可能来自措辞好，而不是时间与身份都对。回到平均语义表的比较条件仍是同一对齐集合上的忠实度。

| Model | Visual | Visual | Visual | Visual | Visual | Visual | Visual | Audio | Audio |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Shot | Subject | Subject | Scene | Scene | Subshot | Subshot | Dialogue | Non-dialogue |
| Model | Shot | Recall | Precision | Recall | Precision | Recall | Precision | Dialogue | Non-dialogue |
| Proprietary Models |  |  |  |  |  |  |  |  |  |
| Gemini 3.1-Pro [15] | 59.05 | 43.78 | 67.07 | 51.78 | 75.62 | 53.29 | 70.92 | 91.18 | 41.49 |
| Gemini 2.5-Pro [10] | 55.58 | 51.53 | 57.08 | 56.80 | 65.12 | 53.05 | 71.21 | 89.72 | 37.38 |
| Qwen3.5-Omni-Plus [32] | 54.17 | 45.41 | 62.84 | 50.75 | 69.80 | 50.22 | 70.66 | 91.20 | 36.82 |
| Qwen3.5-Omni-Flash [32] | 47.66 | 43.87 | 65.59 | 44.41 | 71.26 | 44.08 | 67.27 | 89.91 | 28.12 |
| Seed2.0 [3] | 54.77 | 42.05 | 63.65 | 50.59 | 71.42 | 51.15 | 72.88 | 91.80 | 30.20 |
| MiMo-2.5 [45] | 48.32 | 46.70 | 58.63 | 46.72 | 65.47 | 44.93 | 67.27 | 86.62 | 30.85 |
| Open-source Omnimodal Models |  |  |  |  |  |  |  |  |  |
| Qwen3-Omni-Instruct [49] | 34.63 | 40.31 | 62.02 | 36.07 | 70.73 | 29.42 | 57.84 | 88.35 | 20.51 |
| Qwen3-Omni-Captioner [49] | 36.08 | 42.00 | 50.96 | 38.07 | 54.53 | 34.01 | 46.05 | 88.68 | 19.65 |
| MiniCPM-o-2.6 [60] | 28.53 | 25.92 | 63.87 | 20.39 | 76.32 | 27.62 | 55.88 | 80.07 | 4.84 |

上表完整呈现局部语义分，可见对话语义普遍较高，非对话环境声则低得多。主体与场景普遍呈现精确高于召回或两者拉扯，有的模型属保守少写，有的模型靠多写细节抬召回但精确受损。限制是语义分只反映已对齐单元，结构错得多的模型语义样本更少，不能直接拿语义分代替整体能力。

### 换评判模型结论稳不稳：弱中强三档的敏感性

下面比较同一批预测在不同强度评判模型下的分数，核心问题是打分器本身是否引入不稳定，公平条件是预测固定、只换评判器，稳定则希望跨档变化小。

| Judge | Holistic | QA | OmniCapBench |
| --- | --- | --- | --- |
| Weak | 71.24 | 61.17 | 56.82 |
| Mid | 83.08 | 53.49 | 58.24 |
| Strong | 93.92 | 56.57 | 57.60 |

上表显示整体式与问答式基线随评判器变强明显上漂，而 OmniCapBench 限制语言模型只做有界局部语义比较，分数跨档波动很小。收益是把复杂验证交给确定性规则，减少了隐式抽取与无约束推理；代价是仍需维护匹配阈值与局部提示，且结构错得多的部分进不到语义分。未胜出项是问答式基线在中档评判下反而下降，说明无约束评判的不稳定不只是单调偏高。

**整体描述打分 × 原子单元打分：** 整体描述打分把整段自由文本交给语言模型给一个总分，覆盖面广但看不清错在哪里；原子单元打分要求模型直接输出结构化单元再逐个检查，保留覆盖面的同时每个错误都能定位。两者对比是为了说明流畅文字会掩盖结构错误，组合理解后可以看出为什么需要先定结构再评语义，而不是只看文字质量排名。

### 指标之间是否重复测量：实例级相关性

下面看指标解耦的证据，核心问题是深层结构指标是否测到了不同能力，条件是同一组 786 个视频上的实例级相关，相关越低表示能力越独立。

> **看图路径：** 1. 先看左侧结构相关矩阵中跨镜头跟踪与镜头定位之间的低相关格；2. 再看右侧语义矩阵中主体精确与召回接近零相关的格；3. 结合颜色深浅判断哪些能力是相互独立的

[![原论文 Figure B.1：Figure B.1: Instance-level correlation among diagnostic metrics.](https://arxiv.org/html/2610.12458v1/two_heatmaps.png)](https://arxiv.org/html/2610.12458v1/two_heatmaps.png)

*论文图 9。原论文 Figure B.1:：“Figure B.1: Instance-level correlation among diagnostic metrics.”。*

上图左右两幅热图分别显示结构相关与语义相关，格内数字为相关系数，颜色越深表示相关越高。左侧结构矩阵中事件与镜头定位相关较低，跨镜头跟踪与镜头定位相关也很低，说明听清与看准、找准时间与保持身份是不同能力；右侧语义矩阵中主体精确与召回接近零相关，说明爱编造与爱遗漏是独立倾向。这些低相关支持论文把指标拆开的必要性，也意味着单看一个总分会把不同失败平均掉。未胜出项是事件-镜头关联与其音频视觉前提自然有中等相关，这属于结构依赖而非重复测量。

### 这些结论在什么条件下才成立：范围与偏差

首先是参考范围的边界。评分对照的是已标注的参考系统，不是视频中一切真实细节，超出标注预算但有效的细节不加分也不硬罚，只记日志审计。其次是时长边界，数据限定在 5 分钟内，更长的视频可能需要不同的身份跟踪架构，结论不能直接外推到长片。第三是构造偏差，第二阶段起草用了前沿模型，某些与被评模型同家族，参考可能继承起草者的盲点并对同风格模型略有利，论文用多家族起草、确定性校验与人工仲裁缓解，但不声称完全消除。

第四是模式偏好，严格 JSON 天然不利于只为自由段落优化的模型，附录显示这类模型会出现模式拒答、自有模板、空事件层或零时长重复片段，这是鼓励可控结构化生成的有意选择，不应把低分直接读成完全看不懂视频。

### 复现第一步做什么：输入、提示与对齐参数

下面说明输出模式的字段定义，核心问题是复现时模型必须输出哪些必填结构，条件是同一套模式门，缺失必需字段会触发解析失败。

| Component | Fields | Description |
| --- | --- | --- |
| references | ref_id, type, semantic_description, appearance_anchor | Persistent entities or scenes with detailed visual descriptions under id_features |
| events | event_id, type, time_range, content | Timed audio-centered units; spoken dialogue requires exact content.line |
| shots | shot_id, time_range, shot_transfer, visual_description, camera | Visual timeline segments containing fine-grained sub-shot units |
| Link fields | active_events, references_in_shot, reference IDs in content | Checkable structural links governing event-shot membership and reference context |
| Support fields | appearance_anchor, visual_description, time_range | Verifiable evidence fields utilized for local semantic diagnostics |

上表说明引用、事件、镜头及跨链与证据字段的必填内容，缺少必需字段下游结构分记零。复现应从生成结构化单元开始，而不是先调评判模型。输入用原始无水印视频，音频与画面都要给，贪心解码以减少结构幻觉。提示要包含三轨模式定义、编号规则、时间用相对秒数范围、事件与镜头的跨链要求、无声不编对话、子镜头最小原子动作与允许重叠等约束，输出只接受合法 JSON 并做去格式与多次退避重试，仍非法则记解析失败。

匹配参数保持论文默认值，一对一匹配并按时间与编号顺序打破平局。语义评判只在已匹配对上进行，引用只看外观细节描述，事件只看内容描述。作者资源方面，论文给出的项目页面在本次核验中属于第三方可达链接，不能写成作者已开源代码或权重；视频不直接分发，需按原数据集许可与下载脚本获取。

### 什么时候值得尝试，还缺哪项验证

当任务需要定位错误而不仅是排名时值得尝试，例如检查人物是否在跨镜头中被换号、环境声是否挂错画面、动作边界是否漂移，这套三轨单元与先结构后语义的流程能给出可追踪的证据。当只需要一段通顺的视频简介且不在乎时间与身份时，全局描述分就够了，不必引入严格模式。复现后还需补的验证包括：在新领域与更长视频上重测阈值敏感性与排名稳定性；在更多评判模型下确认局部语义分的波动范围。

对自有数据补充标注预算外的有效细节审计，避免把覆盖不足误读为模型无能。总体上论文直接报告的是结构与语义解耦后前沿模型仍弱于长程音画推理，证据支持在该 786 视频、固定匹配与有界评判条件下的诊断结论，超出该范围的因果与部署效果仍待验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.12458)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
