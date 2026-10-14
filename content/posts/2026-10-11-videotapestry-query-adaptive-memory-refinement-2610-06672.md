---
title: "VideoTapestry: Query-Adaptive Memory Refinement for Multi-Agent Long-Video Understanding"
date: 2026-10-11
draft: false
tags: [音视频问答, 工具增强与约束解码, 音视频, 检索增强, 长上下文]
categories: [论文速递]
description: "针对长视频中证据分散且预建记忆易缺问题细节的矛盾，VideoTapestry 用固定三层记忆加三智能体由粗到细重看视频并组装复合记忆，在四个长视频基准上相对同底座直接推理提升 7.0 到 17.2 个百分点，代价是离线建记忆与多次查询时模型调用。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.06672"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "长视频问答中全局覆盖与问题相关细节如何兼得：VideoTapestry 的分层记忆细化解读"
paper_digest_original_title: "VideoTapestry: Query-Adaptive Memory Refinement for Multi-Agent Long-Video Understanding"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.06672v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.06672v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.06672v1.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"method","id":"method.retrieval-augmented","label":"检索增强"},{"facet":"setting","id":"setting.long-context","label":"长上下文"}]
paper_digest_primary_method: "工具增强与约束解码"
paper_digest_score: 5.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对长视频中证据分散且预建记忆易缺问题细节的矛盾，VideoTapestry 用固定三层记忆加三智能体由粗到细重看视频并组装复合记忆，在四个长视频基准上相对同底座直接推理提升 7.0 到 17.2 个百分点，代价是离线建记忆与多次查询时模型调用。"
paper_digest_authors: [{"affiliations":["University of Science and Technology of China","Jilin University"],"name":"Yucheng Liu"},{"affiliations":["Hangzhou Dianzi University"],"name":"Yufei Yin"},{"affiliations":["Institute of Artificial Intelligence, Hefei Comprehensive National Science Center"],"name":"Mingxiao Feng"},{"affiliations":["University of Science and Technology of China","Institute of Artificial Intelligence, Hefei Comprehensive National Science Center"],"name":"Jiajun Deng"},{"affiliations":["University of Science and Technology of China","Institute of Artificial Intelligence, Hefei Comprehensive National Science Center"],"name":"Wengang Zhou"},{"affiliations":["University of Science and Technology of China","Institute of Artificial Intelligence, Hefei Comprehensive National Science Center"],"name":"Houqiang Li"}]
paper_digest_abstract_sha256: "1d0ec08cffdd1c3d04170245204953c8c2bdc8952fc49184ef304b5117163dd0"
paper_digest_sidecars: {"citation.bib":{"sha256":"63169d29af3880a34ef2289a1715b790cc51467b520446cda72be9ac5244aafe","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-06672/citation.bib"},"citation.json":{"sha256":"6ed47d84d29146dd5c9f19dce19357777aa93b5aa4076d2afa4232fa4bd507db","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-06672/citation.json"},"citation.ris":{"sha256":"39d10259f840916c92d994abac6c4e296980e4d785ca58ff0998db0b650cbe98","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-06672/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"eb969cf713fcefbe44f1deccbfdfc82ed6247fe963ba92b9602548f9620dd49f","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-06672/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "133465fdf6a3272ea307d01e2321e8a1260d4652cc40ade931425a942b0ff6ba"
paper_digest_api_reader_plan_sha256: "cd7192cc73301609903d165963c4969c96545711337f09592d0b59bb6ecb8ab6"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "811f3de396f5569a990dfd4c651fbeed2a2c99b880d360b2a5dbd8d4e3c423c4"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "1f82b9abdbfb733a1efb36d5fd1fb82af7d526994e32d50e72c1951019f9fb28"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "d124bab9682618842918662cc62504d5e651c7dabbae08fbaa70dfabbbbe285c"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4b9c52515d60968b230ac73ffff47ee1a11b7ac51d828d09ebdd2d07517a06a5"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 长视频问答中全局覆盖与问题相关细节如何兼得：VideoTapestry 的分层记忆细化解读

> 英文题目：*[VideoTapestry: Query-Adaptive Memory Refinement for Multi-Agent Long-Video Understanding](https://arxiv.org/abs/2610.06672v1)*

> 标签：#音视频问答 | #工具增强与约束解码 | #音视频 | #检索增强 | #长上下文
>
> 评分：**5.9/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.3/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yucheng Liu：University of Science and Technology of China；Jilin University
- Yufei Yin：Hangzhou Dianzi University
- Mingxiao Feng：Institute of Artificial Intelligence, Hefei Comprehensive National Science Center
- Jiajun Deng：University of Science and Technology of China；Institute of Artificial Intelligence, Hefei Comprehensive National Science Center
- Wengang Zhou：University of Science and Technology of China；Institute of Artificial Intelligence, Hefei Comprehensive National Science Center
- Houqiang Li：University of Science and Technology of China；Institute of Artificial Intelligence, Hefei Comprehensive National Science Center

## 📌 核心摘要

长视频问答输入为完整长视频、问题与选项，输出为选项预测，难点在于既要保留跨越全片的全局叙事，又要捕捉仅在短暂片段出现的决定性证据。VideoTapestry先沿用MemDreamer流程预建分层静态记忆，分别承载全局叙事、事件级时序结构与细粒度关系证据。查询到来后，概览智能体先在全局摘要尺度上定位相关分支并改写对应记忆，再将候选子节点与检查指令下传，略读与聚焦智能体依次在事件与局部子图尺度上回看视频并补充多模态观察。组装环节保留细化后的全局支架，并将选中的事件与子图细化记忆放回原有父节点之下，形成复合查询自适应记忆，独立作答智能体仅据此记忆作答而不再检索观察。与易受定位误差影响的查询驱动探索及易遗漏问题相关细节的查询无关记忆构建不同，该框架不改动原有父子结构，只改写临时文本并压缩无关分支。在相同冻结GPT-5.5基座与相同评测样本的同源对比中，VideoTapestry在LVBench上的准确率为81.5%，高于直接推理基线的64.3%，高出17.2个百分点，并在同期对比的长视频基准上保持领先。结论适用于依赖预建全局事件、宏观事件与局部子图划分的视频，初始切分错误仍可能阻断证据获取。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 长视频问答的输入输出与记忆负担从何而来

这篇论文处理的是长视频理解中的多项选择问答。输入是一个长视频、一道文字问题和若干候选答案，短则 15 分钟，长则可达 2 小时。输出是模型选出的答案编号。研究生初看容易把任务想成给模型多采样一些帧就能答对，但原文强调两个必须同时保留的信息：一是贯穿全片的全局叙事脉络，二是散落在短暂片段中的决定性细节。均匀采样可能漏掉只有几秒的关键动作，密集采样又会带来大量与问题无关的冗余帧，使检索更困难。

对语音和音频背景的读者，可以把视频帧序列类比为长时间录音，把稀疏关键事件类比为只出现 1 次的关键词，把全局叙事类比为说话人意图或乐曲结构，记忆机制的作用就是在不超出模型上下文预算的前提下，既能回看局部，又不丢失整体。论文的评价指标是准确率，即答对题数占总题数的比例，分数越高越好。后续所有提升都是在相同题目和相同底座模型下比较的百分点差异，不是相对百分比，这一点在读表时要特别注意。

### 已有两条路线为何各有短板

原文把已有工作归纳为自顶向下和自底向上两类，比较时输入、目标和运行阶段都按长视频问答来对齐。自顶向下方法从问题出发去定位相关区间，在搜索中建记忆或更新记忆，代表有 VideoARM、VideoSeek 等。这类方法的优点是观察有针对性，缺点是对定位误差敏感，一旦第一步时间定位偏了，后续就看不到正确答案所需的片段。自底向上方法先建与问题无关的视频记忆，推理时再检索或重访，例如 MemDreamer、MAGIC-Video 等。这类方法覆盖面广，但可能在建记忆时就丢掉了某个问题真正需要的细节。

还有一类多智能体工作把感知、定位、核验分给不同角色，但很多仍把重点放在搜索过程而非最终的分层表示。VideoTapestry 的定位是融合两者：保留查询无关分层的广覆盖，再用查询驱动的重观察补上缺失的证据。理解这层关系很重要，后文的消融正是要证明只保留一端是不够的。

### 论文要解决的核心矛盾是什么

论文明确提出的核心问题是：如何在不牺牲全局覆盖的前提下，把查询无关的分层记忆适配到具体问题，并有选择地获取和整合原记忆中缺失或不足的细粒度证据。这里的全局覆盖指即使问题只问局部，回答上下文仍包含全片阶段结构；查询自适应指同样的视频换一道题，重看的位置和改写的内容会不同，但底层静态记忆本身不被改动。下面的示意图用同一个卡通追逐问答例子展示了两种失败与一种期望的成功，左栏因定位错误答错，中栏因记忆中未存细节答错，右栏通过基于已有观察的重访答对，初学者可先建立这种直观对照。

读图说明：先看三栏顶部的连续卡通帧与问题，再对比中间三角记忆与底部回答标注，重点看左右两栏失败与右栏成功的证据来源差异。

> **看图路径：** 1. 对比左中右三栏的输入起点：左栏从问题出发找片段，中栏先建记忆再查，右栏先有静态记忆再按问题重看；2. 看左栏定位错误示例与中间栏未存细节示例各自的失败回答标注；3. 看右栏从静态三角到复合三角之间的问题引导重访箭头

[![原论文 Figure 1：Comparison of long-video context construction paradigms.](https://arxiv.org/html/2610.06672v1/Long_Video_Comparison.png)](https://arxiv.org/html/2610.06672v1/Long_Video_Comparison.png)

*论文图 1。原论文 Figure 1:：“Comparison of long-video context construction paradigms.”。*

左图分三栏，顶栏是连续卡通帧，中部用三角表示记忆层次。左栏标注定位错误，检索到的片段与真正关键帧不一致，最终回答鼠洞旁边；中栏三角标注对手关系、追逐和具体物件，查询时回答未曾存储；右栏从静态三角出发，经问题引导重访形成复合三角，最终回答木箱上。右栏的箭头循环表达了先有静态记忆、再按问题补充观察、再组装成复合记忆的过程，这正是后文三智能体要实现的数据流。

### 整体流程如何从视频和问题走到答案

VideoTapestry 的输入是视频、问题和选项，输出是答案。流程分 3 步：先有一个离线建好的固定分层记忆，查询到来后 3 个与尺度对齐的智能体逐层细化出临时层记忆，最后把它们按原父子关系组装成复合查询自适应记忆，交给独立的回答智能体 1 次性作答，回答时不再检索或看视频。静态记忆包含 3 层，公式上记为 3 层集合，分别对应全局叙事背景、事件级时间结构和细粒度事实证据。

\[\mathcal{M}_{\mathrm{static}}=\{\mathcal{M}_{\mathrm{static}}^{S},\mathcal{M}_{\mathrm{static}}^{M},\mathcal{M}_{\mathrm{static}}^{G}\}.\]

上式中上标分别对应 Super 层、Macro 层和 Subgraph 层，初学者可理解为粗、中、细三档文字描述加关系。每层智能体的输入输出可用统一接口描述：给定问题、选项、全局视频摘要、候选节点、上游指令和本层工具，产出细化后临时记忆、选中的分支标识、传给下层的指令和是否停止的标志。

\[\left(\widetilde{\mathcal{M}}_{q}^{\ell},\mathcal{S}^{\ell},\mathcal{I}^{\ell},z^{\ell}\right)=\mathcal{A}_{\ell}\!\left(q,o,s_{V},\mathcal{M}_{\mathrm{static}}^{\ell}[\mathcal{C}^{\ell}],\mathcal{I}^{\ell-1},\mathcal{T}_{\ell}\right).\]

上式中候选节点决定本层能看到静态记忆的哪部分，选中标识决定下一层加载哪些子节点，上游指令传递检查目标而不搬运整层记忆和工具轨迹。下面是论文的框架总览，展示了从输入到 3 层检索再到复合记忆和最终预测的完整链路，以及观察工具与更新工具的分工。

读图说明：沿左上视频加问题输入到中间三层检索再到右上最终预测的主路径看，再看左下预建记忆与中下工具的对应关系，注意细化只改临时文本。

> **看图路径：** 1. 沿左上视频加问题输入到中间三层检索再到右上最终预测的主路径看数据流向；2. 对比左下预建三层记忆与中下观察工具、更新工具和动态记忆生成的对应关系；3. 看右栏推理中 Overview 与 Skim 定位和 Focus 新观察各自提供的证据分工

[![原论文 Figure 2：Overview of VideoTapestry.](https://arxiv.org/html/2610.06672v1/Framework.png)](https://arxiv.org/html/2610.06672v1/Framework.png)

*论文图 2。原论文 Figure 2:：“Overview of VideoTapestry. Scale-aligned agents operate over a preconstructed hierarchical video memory, while layer-wise tool-augmented refinement selectively incorporates newly…”。*

该总览上半部分从左到右是视频加甲状腺治疗问题输入、中间 Super 到 Macro 再到 Subgraph 3 步检索加计划观察更新选择循环、下半是复合查询自适应记忆、右是答案为 A 的预测与理由。下半左是预建 3 层记忆金字塔，中是观察工具标出起始与结束时间及观察指令，右是更新工具与动态记忆生成示例，说明新观察如何被写入对应层记忆。读图时注意所有细化只改临时文本表示，不改底层静态层次结构。

### Overview 智能体怎样保留全局又补上相关细节

Overview 智能体工作在 Super 层，能看到全部 SuperEvent。它的计划阶段会把定位目标分解为原子目标，并利用预建记忆提供的实体、屏幕文字和语义检索接口得到时间锚点，但原文强调这些检索输出只是定位提示，不是经核验的答案证据。视觉规划器把锚点转成检查指令和一个连续观察窗口，采样帧排成网格图以在图像数量限制下扩大时间覆盖。在 Video-MME 配置下还会再用语音转录工具，在选定窗口内取口语信息。最终观察是视觉观察与转录观察的并集。

观察与 SuperEvent 的关联靠候选标识和时间重叠完成，与证据关联的事件按时间排序记为证据集，保护集则包含这些事件及其前后相邻事件，公式上是把每个证据索引扩展为前一、自身、后一再与有效范围求交。

\[\mathcal{P}=\left(\bigcup_{i\in\mathcal{C}_{\mathrm{ev}}}\{i-1,i,i+1\}\right)\cap\{1,\ldots,N_{S}\},\]

上式中保护集外的节点会被压缩成简短摘要，保护集内的节点保留原文并追加可用的关联证据，写作上是原文描述与视觉、转录和逐字证据字段的文本拼接，缺失字段省略。

\[\widetilde{m}_{i}^{S}=\begin{cases}m_{i}^{S}\oplus[\mathrm{Visual}]\,v_{i}\oplus[\mathrm{Transcript}]\,a_{i}\oplus[\mathrm{Evidence}]\,e_{i},&i\in\mathcal{P},\\[5.69054pt] c(m_{i}^{S}),&i\notin\mathcal{P}.\end{cases}\]

上式中拼接符号表示文本组合，压缩函数表示生成紧凑摘要。这种不对称更新的代价是全局支架仍要全部序列化给回答智能体，但换来的是视频级覆盖不丢失。程序上还强制即使保护邻居没有关联观察也保留原文，避免误压缩。

**SuperEvent × Overview 智能体：** SuperEvent 指对长视频粗时间阶段的文字概括，提供全局叙事骨架；Overview 智能体是在该层工作的检索细化角色，负责选出与问题相关的阶段并用新观察丰富它们，二者搭配使全局覆盖被保留的同时相关分支得到增强。

### Skim 与 Focus 如何收窄时间并核验细节

Skim 智能体工作在 Macro 层，只能看到被选 SuperEvent 的子 MacroEvent。它根据上游指令在候选区间内规划观察，把所得证据关联到覆盖的节点，对每个请求更新的节点重写原文描述，重写时保留相关静态事实、融入新观察并压缩无关内容，节点标识、父关系、语义层级和时间范围保持不变，缺失或无效更新则保留原文。

Focus 智能体工作在 Subgraph 层，加载被选 MacroEvent 关联的局部子图，暴露实体、事件、屏幕文字和类型化关系，再做更细粒度的视觉检查并重写每个被请求子图的序列化描述，同样只改临时文本而不改底层图节点和边，缺失则保留原文，之后必然终止探索。两层都遵循计划、观察、更新、决定的协议，每访问一层只做一批细化和 1 次层决策。

Skim 和 Focus 在评测配置中只用视觉观察，不用语音转录，每次视觉观察最多用 50 张独立帧以保留细节，这与 Overview 用最多 120 帧拼成 20 个 6 帧网格的粗覆盖形成对比。理解这种由网格粗看到单帧细看的切换，有助于明白计算量花在了哪里。

**MacroEvent × Skim 智能体：** MacroEvent 指 SuperEvent 之下的局部连贯事件描述，刻画事件级时间结构；Skim 智能体是在该层工作的检索细化角色，承接上游检查目标在候选事件区间内再观察并改写描述，二者搭配实现从阶段到具体事件的时间收窄。

**Subgraph × Focus 智能体：** Subgraph 指与每个 MacroEvent 关联的局部关系图序列化文本，包含实体、事件和屏幕文字节点及类型化关系，提供细粒度事实证据；Focus 智能体是在该层工作的核验角色，负责细粒度视觉检查并改写该文本，二者搭配完成最后的事实核对。

### 层记忆如何组装成最终回答上下文

遍历结束后，组装操作保留细化后的 Super 层支架，把被选的细化 Macro 和 Subgraph 记忆挂到原父节点之下，保持视频级覆盖的同时丰富查询相关分支。最终上下文是将问题、选项、精简交接轨迹与组装后记忆序列化而成，轨迹记录每层智能体及其交接指令或停止标记，可概括中间发现和未解决需求，但不含完整观察与更新日志。

\[\mathcal{D}_{q}=\operatorname{Serialize}\!\left(q,o,H_{q},\operatorname{Assemble}\!\left(\left\{\widetilde{\mathcal{M}}_{q}^{\ell}\right\}_{\ell\in\mathcal{L}_{q}}\right)\right).\]

上式中访问层集合是实际走过的层的子集，序列化结果直接作为独立回答智能体的输入，回答智能体不再检索或观察。这种设计把证据获取与答案判断分开，回答只依据组装好的文本记忆，避免作答时又引入新的视觉不确定性。代价是若前期选错分支或观察有误，回答阶段无法自行纠正，错误会沿记忆传递。

**静态分层记忆 × 复合查询自适应记忆：** 静态分层记忆指查询无关、离线建好且查询时不改动的 Super、Macro 和 Subgraph 三层文本结构；复合查询自适应记忆指保留细化后全局支架并按原父子关系挂接被选细化路径的推理上下文，二者搭配使全局结构不丢失而查询相关证据被补足。

**检查目标传递 × 分支选择：** 检查目标传递指上层智能体向下层传递的待核验指令，可概括中间发现和未解决的证据需求；分支选择指每层选出要向下展开的父节点标识，决定下一层加载哪些子节点，二者搭配使细化沿查询相关路径逐层聚焦而不扩散到全视频。

### 没有训练时模型参数与记忆如何处理

本研究没有训练任何模型，所有模型参数和预建分层记忆在评测中都固定。所谓免训练多智能体框架，指 4 个角色都通过提示词调用已有的冻结视觉语言模型实现，记忆细化是文本改写而非梯度更新。离线记忆按 MemDreamer 的建记忆流程构造，查询时所有实验共用同一套预建记忆，以隔离查询时方法的效果。默认配置下推理时 GPT-5.5 作为各智能体和回答智能体的底座，Whisper 提供语音转录，Qwen3 嵌入支持语义检索。直接基线用同一冻结底座和相同题目，但不经过智能体框架，直接对均匀采样帧作答。

需要提醒的是，参数冻结不等于输出确定，推理温度设为 0.1 仍是模型采样，只是随机性较小。原文未报告梯度路径、优化器或重置机制，因为根本不存在训练循环；缺的是计算效率的系统测量，后文局限会说明准确率提升不能直接当作效率优势。受控消融以完整方法 87.0 为基准，去视觉观察、去语音转录、只追加证据不改写记忆、单智能体的百分点变化分别为 −3.0、−5.5、−1.5、−4.5。

### 在哪些数据与采样条件下做比较

评测用 4 个长视频基准：LVBench 含 103 个 30 分钟到 2 小时视频和 1549 个问答，覆盖 6 个细粒度维度；LongVideoBench 验证集含 752 个视频的 1337 题，其中 188 个 15 到 60 分钟长视频贡献 564 题；Video-MME 长视频子集含 300 个 30 分钟到 60 分钟视频和 900 问答，评测用无字幕条件；EgoSchema 用第一人称片段，论文为高效评测取 500 题子集。消融沿用 VideoARM 的 200 题 Video-MME 长视频子集，称其保留了全集分布。

实现上直接基线接收均匀采样独立帧，GPT 系列每视频 50 帧，Qwen3.7-Plus 每视频 196 帧，Qwen3.6-27B 每视频 396 帧，受网关图像上传上限约束。VideoTapestry 每次视觉工具调用至多 50 张图，Overview 把最多 120 帧拼成至多 20 个 6 帧网格，Skim 和 Focus 用最多 50 张独立帧。语音工具只对智能体选定的至多 3 个窗口运行 Whisper，每个窗口归一化到 600 到 1200 秒，而不是转录全片；有字幕的基准则同样只取选定窗口的字幕文本。这种按需暴露口语信息的设计是理解消融中语音作用的前提。

### 主结果在同底座下提升多少

要回答的核心问题是：在相同底座和相同题目下，复合记忆细化比直接看采样帧好多少。比较条件是冻结 GPT-5.5 底座，直接基线与 VideoTapestry 用相同题目，直接基线看均匀采样帧，VideoTapestry 看组装后的细化记忆加少量重观察帧。指标是准确率，单位为 accuracy(%)，越高越好，括号内为相对直接基线的百分点增益。下表为原文主结果完整表，列划分为 Method、Query-time Model(s)、LVBench Overall、LongVideoBench Val、LongVideoBench Long、Video-MME(w/o) Long、EgoSchema Val，其中 Direct Proprietary VLMs 等仅为分组行而非全部列名。

| Method | Query-time Model(s) | LVBench | LongVideoBench | LongVideoBench | Video-MME(w/o) | EgoSchema |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | Overall | Val | Long | Long | Val |
| Direct Proprietary VLMs |  |  |  |  |  |  |
| Gemini-2.5-Pro | Gemini-2.5-Pro | 72.0 | 71.0 | 68.6 | 75.9 | 72.8 |
| Gemini-3.1-Pro | Gemini-3.1-Pro | 78.2 | 78.6 | 77.0 | 80.3 | 76.4 |
| OpenAI o3 | OpenAI o3 | 57.1 | 66.7 | 60.6 | 64.7 | 63.2 |
| Direct Open-Source VLMs |  |  |  |  |  |  |
| Seed1.5VL | Seed1.5VL-Thinking | 64.6 | – | 74.4 | – | – |
| Qwen3-VL | Qwen3-VL-235B-A22B-Thinking | 63.6 | 71.4 | 67.1 | 71.2 | 75.9 |
| Qwen3.5 | Qwen3.5-35B-A3B | 71.3 | – | – | 62.6 | – |
| GLM-4.6V | GLM-4.6V-106B-A12B | 59.5 | 67.6 | 58.7 | 66.0 | 68.8 |
| Agentic Methods |  |  |  |  |  |  |
| DVD | OpenAI o3 | 74.2 | 71.6 | 68.6 | 67.3 | 76.6 |
| Symphony | DeepSeek-R1 + Seed1.6VL | 71.8 | 77.1 | – | 78.1 | – |
| VideoARM | o3 + GPT-4.1 | 79.7 | 73.7 | 69.2 | 75.3 | 78.2 |
| VideoARM | o3 + GPT-4o | – | 78.0 | 76.4 | 81.2 | 76.2 |
| Active Video Perception | Gemini-2.5-Pro | 74.8 | 73.4 | 70.0 | 81.9 | – |
| WorldMM-GPT | OpenAI GPT-5 | 61.9 | – | – | 76.6 | – |
| VideoSeek | OpenAI GPT-5 | 68.4 | – | 73.5 | 70.1 | – |
| LensWalk | OpenAI GPT-5 | 66.9 | – | 68.8 | 69.2 | 74.6 |
| Route2Look | OpenAI GPT-5 | 75.4 | – | 77.8 | 76.1 | – |
| VideoXAgent | Claude-Opus-4.6 + Gemini-3.1-Pro-preview | 76.5 | – | 78.1 | – | – |
| MemDreamer‡ | OpenAI GPT-5.5 | 73.3 | 74.1 | 73.9 | 77.1 | 78.6 |
| Same-Backbone End-to-End Comparison |  |  |  |  |  |  |
| GPT-5.5 (Direct)† | OpenAI GPT-5.5 | 64.3 | 69.8 | 64.0 | 74.8 | 76.0 |
| VideoTapestry† | OpenAI GPT-5.5 | 81.5 (+17.2) | 80.4 (+10.6) | 78.9 (+14.9) | 84.6 (+9.8) | 83.0 (+7.0) |

完整原表显示 VideoTapestry 在 LVBench 总体 81.5 加 17.2，在 LongVideoBench 验证集 80.4 加 10.6、长视频子集 78.9 加 14.9，在 Video-MME 长视频无字幕 84.6 加 9.8，在 EgoSchema 验证集 83.0 加 7.0，均高于同底座直接推理。论文还称每列超过此前最强结果 0.8 到 4.4 个百分点。解读时要注意两层限制：一是基线值来自技术报告或已发表结果与作者复现的混合，直接比较时采样帧数和提示细节未必完全一致；二是提升依赖离线记忆与多次查询时调用，原文未给出延迟与费用，不能把准确率领先理解为部署成本更低。

### 六个能力维度上哪里提升最大

进一步的问题是提升来自长程定位还是全局归纳。下表是 LVBench 6 个维度：事件识别、事件理解、推理、关键信息检索、摘要和时间定位，以及平均值，比较对象包括直接模型与结构化智能体方法，括号为相对 GPT-5.5 直接推理的百分点增益。

| Method | ER | EU | Rea | KIR | Sum | TG | Avg. |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-5.5 (Direct) | 63.2 | 66.0 | 72.7 | 63.8 | 65.4 | 43.1 | 64.3 |
| VideoTapestry (GPT-5.5) | 80.7 (+17.5) | 81.0 (+15.0) | 77.6 (+4.9) | 84.5 (+20.7) | 89.7 (+24.3) | 83.2 (+40.1) | 81.5 (+17.2) |

表中 VideoTapestry 6 维分别为 80.7 加 17.5、81.0 加 15.0、77.6 加 4.9、84.5 加 20.7、89.7 加 24.3、83.2 加 40.1，平均 81.5 加 17.2，时间定位和摘要的增益最大。论文据此认为方法同时有助于长程证据定位与全局信息聚合。但要看到推理维度的增益相对较小，且时间定位的直接基线本身较低，基数低时百分点提升容易显得大。未胜出的方面是这类维度划分仍是自动评测下的准确率，不是人工对解释质量的评价，也未测量误判率随视频时长的变化，因此不能推广为所有长视频推理都同等受益。

### 拿掉视觉语音改写与分工会发生什么

消融要回答查询时观察与结构化整合各自贡献多少。实验固定在 200 题 Video-MME Long 子集、GPT-5.5 和同一预建记忆上，完整 VideoTapestry 准确率为 87.0。4 个变体分别是去掉视觉观察、去掉选定窗口语音转录、保留工具和智能体结构但把新证据以扁平日志追加而不更新选中节点、以及用单一控制器代替 3 个尺度对齐智能体且保持模型与工具调用预算相同。下表为原表(a) 完整矩阵，列为 Variant、Visual、ASR、Update、M-A、Acc.、Δ Acc.，Δ Acc. 为相对完整方法的百分点差，负值表示下降。

| Variant | Visual | ASR | Update | M-A | Acc. | Δ Acc. |
| --- | --- | --- | --- | --- | --- | --- |
| w/o Visual Observation | N | Y | Y | Y | 84.0 | −3.0 |
| w/o ASR Observation | Y | N | Y | Y | 81.5 | −5.5 |
| Append-only Evidence | Y | Y | N | Y | 85.5 | −1.5 |
| Single Agent | Y | Y | Y | N | 82.5 | −4.5 |
| VideoTapestry | Y | Y | Y | Y | 87.0 | – |

表中去掉语音为 81.5 下降 5.5 个百分点最多，去掉多智能体分工为 82.5 下降 4.5 个百分点次之，去掉视觉为 84.0 下降 3.0 个百分点，扁平日志为 85.5 比结构化更新低 1.5 个百分点。这支持语音口语信息与尺度对齐分工的重要性，也支持结构化改写优于简单堆积。但限制很明确：结论只在该 200 题子集、无字幕且用 Whisper 选窗的条件下成立，换成有字幕或语音无关的题目，语音的贡献会变化；单智能体对照虽控制了调用预算，但提示词复杂度不同，不能理解为智能体数量本身的因果效应。本表数值与单位依据论文 PDF。

### 全局支架与细化路径是否缺一不可

另一个受控比较固定完整探索过程，包括选中节点、观察、细化内容和查询时轨迹，只改变交给回答智能体的最终记忆，以分离记忆构成的作用。静态只检索不做查询时更新、压缩或改写，作为基线；细化 Super 只保留细化后 Super 支架，细化路径只保留被选路径上的细化 Macro 和 Subgraph 内容。下表整理 4 种最终记忆的构成与准确率，数字与单位以原文连续句为据。

| 最终记忆 | 保留 Super 支架 | 保留细化路径 | 准确率 |
| --- | --- | --- | --- |
| 仅静态检索 | 否 | 否 | 79.5% |
| 仅细化 Super | 是 | 否 | 85.0% |
| 仅细化路径 | 否 | 是 | 80.5% |
| 完整复合记忆 | 是 | 是 | 87.0% |

表中完整复合记忆 87.0 同时高于仅细化 Super 的 85.0、仅细化路径的 80.5 和静态检索的 79.5，超过任一细化部分与静态检索 7.5 个百分点左右，支持两者互补。论文还报告完整复合记忆约 4417 词元，低于静态的 4874 词元，说明压缩与选择在保留准确率的同时减少了文本量。但这里的词元数只是最终记忆长度，不是总计算量，查询时的多轮观察调用未计入。尚未评测的是若探索本身失败，好的组装也无法补救，因此该表不能理解为组装方式决定全部提升。

### 哪些结论还不能推广与哪些开销未被证明

原文附录明确了 3 类局限。第一，检索受初始切分与父子结构约束，错误的事件分组或时间边界会阻碍相关证据的获取，查询时观察能补细节但不能改结构，换用其他记忆构造器或允许选择性结构修正仍是未来工作。第二，框架有离线建记忆成本和额外的查询时模型与工具调用，报告的准确率增益不构成计算效率优势，离线与单查询成本需分开核算，预算感知的观察仍待研究。

第三，查询时细化依赖模型对视觉和转录证据的生成式理解，误差会进入细化记忆并影响后续决策，提示词鼓励报告不确定性和有证据更新，Super 层把视觉与转录观察分开记录，但不能保证解释正确或完全解决新旧信息冲突，证据溯源与选择性再核验仍待补充。对初学者而言，关键是把准确率、延迟、费用和误判率分开看，没有测量的就不能承诺会改善。

### 复现第一步做什么与需要什么条件

值得尝试的时机是：你的长视频问答既需要全片结构，又依赖短暂视觉或口语细节，且能接受离线预处理加多次模型调用。若问题只看全局摘要即可，或视频很短均匀采样已够，就不必引入这套复杂流程。复现第一步是按 MemDreamer 流程为你的视频建好 Super、Macro 和 Subgraph 3 层静态记忆并固定，再实现 Overview 到 Skim 到 Focus 的单批观察与单次决策循环，最后按原父子关系组装并用独立回答智能体作答。

关键超参数与信息条件要保留：Overview 连续观察窗至少 600 秒、语音至多三窗每窗 600 到 1200 秒、Overview 用网格图而 Skim 与 Focus 用独立帧、每次工具调用至多五十图、回答前不再检索。关于来源，论文未绑定经校验的代码、模型或数据资源，不得声称已公开或可下载；GPT 与 Qwen 底座、Whisper 与嵌入模型是各自独立的外部组件，需分别获取与计费。跨底座泛化在原文 200 题子集上显示 GPT-5.5、GPT-5、Qwen3.7-Plus 和 Qwen3.6-27B 均提升 7.0 到 9.5 个百分点，但这仍是同一记忆与同一子集下的结果，换数据集需重测。

### 如何一句话记住方法与适用边界

把 VideoTapestry 记成一句话：先留一张全片地图，再按问题重走相关岔路并把沿途核实的细节写回地图，最后只带着这张改过的地图去答题。地图是固定的 3 层文字记忆，重走是三智能体由粗到细的计划观察更新决定，答题是独立回答智能体的 1 次判断。证据支持的是在 4 个长视频基准和同底座对照下准确率一致提升，尤其在时间定位和摘要维度增益大，且全局支架与细化路径互补、语音选窗与多智能体分工贡献明显。

但所有结论都附带条件：依赖预建记忆质量、依赖选窗语音的有效性、依赖多次调用的预算，且未证明延迟或成本更优。容易产生的误解是把免训练当成无计算，把百分点增益当成相对百分比，或把子集上的消融数字当成全集保证。实际使用时，先在自己的视频分布上小规模复测主结果与消融，再补上延迟、费用与错误溯源的测量，才算完整验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.06672v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
