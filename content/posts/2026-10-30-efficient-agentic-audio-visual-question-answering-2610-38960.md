---
title: "Efficient Agentic Audio-Visual Question Answering through Toolset Pruning and Modality Consolidation"
date: 2026-10-30
draft: false
tags: [音视频问答, 工具增强与约束解码, 高效推理]
categories: [论文速递]
description: "论文从八工具的 OmniAgent 出发，先按功能剪枝再把音频与视觉工具合并为全模态字幕与问答两个工具，在三个基准上保持准确率的同时把工具调用和估计推理成本降低约七成，长视频上的智能体优势更明显。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.38960"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "只留两个全模态工具的问答智能体为何还能答得准"
paper_digest_original_title: "Efficient Agentic Audio-Visual Question Answering through Toolset Pruning and Modality Consolidation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.38960v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.38960v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.38960v1.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "工具增强与约束解码"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文从八工具的 OmniAgent 出发，先按功能剪枝再把音频与视觉工具合并为全模态字幕与问答两个工具，在三个基准上保持准确率的同时把工具调用和估计推理成本降低约七成，长视频上的智能体优势更明显。"
paper_digest_authors: [{"affiliations":["School of Informatics, University of Edinburgh, UK"],"name":"Yi Wang"},{"affiliations":["Department of Systems Engineering and Engineering ManagementChinese University of Hong Kong, Hong Kong SAR"],"name":"Tianzi Wang"},{"affiliations":["School of Informatics, University of Edinburgh, UK"],"name":"Peter Bell"}]
paper_digest_abstract_sha256: "a36c3561aebba99cef8186fe663c8acef80857fae4fad919e3d1cf9da22f2603"
paper_digest_sidecars: {"citation.bib":{"sha256":"45e4c0393c058a8cf98556d5475956686393c2eec4f7f625fdba5807beb458c0","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-38960/citation.bib"},"citation.json":{"sha256":"7c08377384fea84bfa0c703caef58416432fd59dfa23c1fb7064d8ac4a4e686b","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-38960/citation.json"},"citation.ris":{"sha256":"8c551d62e60ba10b270a76d4418218b5a986b13f8ec314a1dee66cd5dae6709b","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-38960/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"e4ca1d264fe63e590e019cfd85ef79076039c0bb31120a8a3058604b68772e36","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-38960/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "b1490e71cb364fc5375479924736c779958488d9c482dbe90dcad99bec6b01f1"
paper_digest_api_reader_plan_sha256: "6811da429920945c0468be08fc286cd58b5b17b09612fce0e111d8dc4aa032e3"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "df318e6b7e7bedd9d4f33d2933d7edc600a090b0b899044aa49e4a23d40ac87f"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "726b228ff82daa52401700e3a7118e789606a98754bcdbf53d2008ac8a572afe"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "2aa0cdb9fc66c0f82d5ff8f0acebc182195a8c5a80b178f7c5dd9a00a4695f54"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "52d8cbc1e96c6c9f57cdba0e90f819498ce4a3da5a11d79cf907be5efbb83656"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 只留两个全模态工具的问答智能体为何还能答得准

> 英文题目：*[Efficient Agentic Audio-Visual Question Answering through Toolset Pruning and Modality Consolidation](https://arxiv.org/abs/2610.38960v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding) → [音视频问答](/audio-paper-digest-blog/papers/?concept=task.av-question-answering)
- **研究方法**：[工具增强与约束解码](/audio-paper-digest-blog/papers/?concept=method.tool-augmentation)
- **研究重点**：[高效推理](/audio-paper-digest-blog/papers/?concept=research_focus.efficiency)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.1/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yi Wang：School of Informatics, University of Edinburgh, UK
- Tianzi Wang：Department of Systems Engineering and Engineering ManagementChinese University of Hong Kong, Hong Kong SAR
- Peter Bell：School of Informatics, University of Edinburgh, UK

## 📌 核心摘要

细粒度音视频问答要求模型联合音频流与视频流回答问题，相关证据在时间上稀疏并分散在两种模态中，难点在于定位时间对齐的片段并建立跨模态对应。已有全模态智能体做法是让文本规划器反复调用音频描述、语音识别、事件定位、视频问答等专用工具来主动取证，工具多导致轨迹长、开销大。论文从专用工具的OmniAgent出发，先按功能分组剔除，再把保留的描述与问答能力合并为全模态工具，最终只保留全模态描述工具与全模态问答工具，规划器先取全局描述，再按需追问或直接作答。与复现的八工具OmniAgent相比，紧凑双工具智能体在Daily-Omni完整集上准确率为78.86%，高出1.33个百分点，同时单题平均估计推理费用降低约七成。该结论在o3作规划器、Gemini-2.5-Flash作冻结共享感知模型、最多六次有效调用且先取全局描述的配置下成立，紧凑智能体在WorldSense上准确率为58.39%，低于复现OmniAgent的59.30%，长视频增益更明显。若去掉问答类工具或全局描述准确率会明显下降，换用其他规划器与感知模型或改变提示与预算时效果未经验证，完整评测为单次运行且作者不声称全局最优。原文披露基于API计费的估计费用与调用统计，约为500美元的o3费用与100美元的Gemini-2.5-Flash费用，未披露训练成本。

## 🔗 开源与复现资源

- 第三方资源：<https://anonymous.4open.science/r/efficient_agentic_avqa-28E4/> — 链接可访问（HTTP 200）

- 第三方资源：<https://openai.com/index/o3-o4-mini-system-card/> — 链接不可用（HTTP 403）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 细粒度音视频问答要解决什么困难

这篇论文研究的输入是一段同时带有画面和声音的视频，再加一道选择题和几个候选答案。模型必须联合使用听觉和视觉两条流才能作答，例如判断某个声音和哪个画面事件对齐，或者按时间顺序还原发生了什么。困难在于证据往往是稀疏的，关键片段可能只占几秒，分散在不同模态里，单次浏览很容易错过。输出是选项标签，评价用选择准确率，方向是越高越好。论文把重点放在智能体式做法上，也就是不一次看完就答，而是让规划器多次调用感知工具，逐步收集文本形式的证据再作答。读者需要先理解这种多步取证的动机，后面关于工具数量和成本的讨论才有意义。

### 已有路线为什么会堆出很多专用工具

早期模块化做法常把视频切成小段分别生成字幕，再用语言模型汇总推理，其中已有工作强调按问题生成针对性描述的重要性。后来能同时处理音频、视频和文本的全模态大模型出现，可以端到端直接作答，也被智能体拿来当感知部件。另一条线是 ReAct 式主动感知循环，文本规划器反复判断缺什么证据，调用合适的检索或感知工具，再根据返回的观察更新推理。

在音视频场景里，一种做法是按模态拆开工具。论文作为起点的专用工具 OmniAgent 就是代表，它编排了全局音频字幕、音频问答、语音识别、音频事件分析、全局和片段级视频问答、视频元数据等 8 个工具，先用音频证据引导后续视觉检查。另一种做法更依赖全模态感知，例如用全模态模型建分层记忆，或者训练单个全模态模型去感知被请求的帧和片段。这些系统在工具组织、感知骨干、训练和流程上都不同，已有结果无法回答一个更干净的问题：在工作流程对齐的情况下，性能到底更依赖大量按模态细分的专用功能，还是少数基于全模态模型的核心工具。

### 论文提出的两个具体问题是什么

论文把大问题拆成两步。第一是工具选择，能否把宽泛的专用工具集剪到少得多的工具而不损失准确率。第二是模态合并，在找到必要能力之后，能否把音频专用工具和视觉专用工具合并成全模态工具来提高效率。研究起点是专用工具 OmniAgent，它在智能体方法中曾在音视频问答上表现突出。作者先按功能分组做去除实验，找出必要能力，再在受控条件下把字幕和问答工具逐步替换成对应角色的全模态版本。最终目标是一个只有两个互补工具的紧凑系统，既要讲清每个改动的作用，也要量化调用次数、token 消耗和估计成本的变化。

### 两工具智能体的整体流程是怎样的

系统用 v 表示画面流，a 表示音频流，q 表示问题，o 表示选项。文本规划器记为 P，它不直接接触原始音视频，只处理问题、选项和工具返回的文本观察，负责构造针对性问答查询、选择下一步动作、给出最终答案。证据通过两个工具获得。全模态字幕工具提供宽泛音视频上下文，每个事件描述句都带时间戳；全模态问答工具回答规划器提出的针对性查询。

规划器每步根据文本交互历史选择调用字幕工具、调用问答工具或直接作答。提示层加了一个软约束，要求先调用一次字幕工具，之后可以自由再次调用任一工具或在证据足够时作答。如果有效调用预算用完，就必须用已收集证据作答。

**OmniLLM × 感知工具：** OmniLLM 指能同时处理音频、视频和文本的大模型，在本文中它不直接答题，而是被封装成感知工具；感知工具指接受文本指令、返回文本观察结果的外部调用接口，规划器靠这些文本证据做推理，两者搭配把强大的多模态感知变成可多次调用的证据来源。

要理解下图，先明确主路径是问题进入规划器、规划器调用工具、工具看音视频后返回文本、规划器再决策的循环。下图展示了这种循环和最终作答的出口，是后文所有剪枝和合并操作的共同底座。

> **看图路径：** 1. 先看左侧问题选项如何进入规划器，再看规划器与右侧两个工具之间的往返箭头；2. 注意两个工具都同时接收视频加音频输入，区别只在调用指令不同；3. 看底部从规划器直接指向最终答案的长箭头，理解何时停止取证

[![原论文 Figure 1：Overview of the proposed framework.](https://arxiv.org/html/2610.38960v1/workflow.png)](https://arxiv.org/html/2610.38960v1/workflow.png)

*论文图 1。原论文 Figure 1:：“Overview of the proposed framework. During inference, a text-only planner dynamically selects between two omni-modal tool interfaces or returns the final answer.”。*

从图中可见，左侧问题加选项进入规划器，规划器维护一段历史，中间分别用字幕调用和查询向两个全模态工具索取观察结果，两个工具都同时接收视频加音频。字幕被标注为优先首选工具，底部还有一条从规划器直达最终答案的箭头，表示证据足够即可退出循环。这种设计把模态判断和时间对齐的负担交给全模态模型和提示分工，而不是靠 8 个专用接口来分发。

### 两个全模态工具各自做什么

两个工具共享同一个冻结的感知骨干 Gemini-2.5-Flash，角色差异只由不同提示指定。全模态字幕工具返回宽泛带时间戳的描述，要求如实描述可见或可听的显著事件和变化，包括场景物体动作、声音音乐、能听清的说话人和说话内容，每个事件给时间戳。全模态问答工具则只根据可观察的音视频证据直接回答规划器给出的感知问题，不做超出证据的猜测，返回答案和依据。

**Omni Captioning Tool × Omni QA Tool：** Omni Captioning Tool 负责给出整段视频的宽泛带时间戳描述，提供被动式全局上下文；Omni QA Tool 负责回答规划器提出的针对性问题，提供主动式定点取证；前者先铺底减少盲目追问，后者按需补足细节，两者互补构成最终的两工具系统。

举例来说，规划器先拿到整段视频的字幕，知道第几秒有脚步声和人物进门，再针对选项追问问答工具某段声音是否与画面中的动作同时发生。字幕提供可回看的时间锚点，问答提供定点核验，两次观察都以文本形式追加到历史中，供下一步决策使用。

**文本规划器 × caption-first 策略：** 文本规划器指看不到原始音视频、只读问题选项和工具返回文本的大语言模型，负责决定下一步调用哪个工具或直接作答；caption-first 策略指用提示要求第一次必须先调用字幕工具，这种顺序约束让后续问答都有全局上下文可参照，避免一开始就做无依据的细粒度追问。

### 本文没有训练模型，实际执行的是什么计算

本文没有训练任何神经网络参数，也没有更新规划器或感知骨干的权重。实际执行的计算是多次模型调用和文本拼接：规划器用 o3 按提示生成结构化动作，感知工具用 Gemini-2.5-Flash 按各自提示生成字幕或答案，系统把查询和观察追加到历史后再交给规划器做下一步选择。最终完整系统允许最多六次有效工具调用，第一次字幕计入预算，最终作答轮不计入工具次数，但其 token 计入开销。附录说明规划器用中等推理强度，字幕和问答工具用提供方默认推理设置，Gemini 请求有超时和重试逻辑。因为没有训练，论文不讨论梯度路径和参数更新，复现的关键是提示、调用预算、历史处理和失败重试，而不是拟合过程。

### 在哪些数据和对照上验证，成本怎么算

评估用 3 个音视频选择题基准。Daily-Omni 是主要分析基准，有 1197 道题，视频不超过 60 秒，受控消融用固定的 125 题分层验证子集，保持任务类型分布与全集接近。AVUT 用人标注分区，共 1734 道题。WorldSense 评估集有 3172 道题。最终配置先在 Daily-Omni 上固定，再到后两个基准上检验不同内容和时长分布下的表现。附录还补了一个 WorldSense 加回片段级问答工具的事后泛化分析，不用于选择最终系统。

对照包括 3 类：单次直接推理的 Gemini-2.5-Flash，用同样输入、预处理、失败处理和评分协议，只在推理范式上不同；论文中描述的八工具专用智能体 OmniAgent，用 o3 做规划器、Gemini-2.5-Flash 做感知部件；本文的两工具紧凑智能体。准确率是全集上的选择准确率。有效工具调用指被执行器接受并返回观察的调用，解析失败或自动重试不计入预算。

输入输出 token 把规划器和感知模型的消耗都加总，按题平均。估计成本按实验时标准 API 价格对记录用量计算。时延是每题重试调整后的墙钟时间。消融阶段每个配置跑三次取均值和样本标准差，全基准最终结果为固定种子单次运行，以节省成本。

### 紧凑系统在三个基准上准确率和开销如何

要回答的核心比较问题是：在同样感知骨干下，两工具智能体相对八工具智能体和单次直接推理，准确率是持平还是更好，为此多花了多少调用和 token。指标方向是准确率越高越好，调用次数、token、估计成本和时延越低越好。

| 基准 | 本方法准确率 | 相对复现 OmniAgent 的差异 |
| --- | --- | --- |
| Daily-Omni | 78.86% | 高 1.33 个百分点 |
| AVUT | 80.57% | 高 3.41 个百分点 |
| WorldSense | 58.39% | 低 0.91 个百分点以内 |

上表只整理论文正文用连续句子直接报告的准确率和差异，完整每题平均调用、token 和时延见原文大表。论文同时报告，相对复现的专用工具系统，平均工具调用减少 72.2% 到 78.7%，输入 token 至少减少 44%，输出 token 至少减少 63%，估计推理成本至少降低 71%，时延也更低。也就是说，Daily-Omni 和 AVUT 上准确率更高，WorldSense 上差距在 1 个百分点以内，但开销大幅下降。相对单次直接推理，智能体流程在 3 个基准总体上都提高了准确率，只是要付出更多调用和 token。论文还用与验证视频不重叠的 Daily-Omni held-out 分区检验，发现紧凑系统仍保持最高且不低于全集表现，提示启发式工具选择没有明显过拟合到那 125 题的视频。

**直接推理 × 智能体推理：** 直接推理指把整段音视频、问题和选项一次送入 Gemini-2.5-Flash 得到答案；智能体推理指由规划器多次调用字幕和问答工具、分步收集文本证据后再作答，前者省调用但可能漏掉稀疏证据，后者多花 token 和调用换取对长视频和跨模态对应更充分的取证。

### 多花的计算在什么时候更值得

第二个比较问题是智能体的额外计算是否在长视频上更划算。论文按视频时长分桶比较直接推理、复现 OmniAgent 和两工具系统。分桶样本很不均衡，这个限制必须先说明。

| 时长条件 | 相对直接推理的提升 | 桶内题量 |
| --- | --- | --- |
| AVUT 超过 5 分钟 | 9.68 个百分点 | 31 题 |
| WorldSense 超过 5 分钟 | 16.88 个百分点 | 379 题 |

上表显示超过 5 分钟的视频上优势最突出，但 AVUT 该桶只有 31 题，证据不如 WorldSense 同桶 379 题可靠。在该长视频设置下，紧凑流程在 AVUT 上超过完整 OmniAgent，在 WorldSense 上差距在 0.79 个百分点以内。复现的 OmniAgent 在长视频上相对直接推理也有更大增益。这支持论文的判断：智能体工作流对长音视频理解更有价值，但小桶数字波动大，不宜把单桶最高值当成普遍提升幅度来宣传。

### 哪些功能分组真正必要

第一阶段把专用工具按功能分成 5 组：全局音频字幕、问答组、音频事件列举与定位、语音识别、视频元数据。从全量出发每次去掉一组，在同样 125 题子集上跑三次。比较问题是去掉哪类能力会明显掉点，哪类只是冗余的取证方式。

| 去除条件 | 平均准确率 |
| --- | --- |
| 同时去掉语音识别和音频事件，保留字幕问答加元数据 | 78.93% |
| 去掉问答组 | 62.13% |
| 去掉全局音频字幕 | 75.47% |
| 仅留字幕加问答 | 74.13% |

上表数字来自论文对该阶段的直接报告。同时去掉语音识别和音频事件反而得到该阶段最高均值，说明在 Gemini 原生音频理解和字幕已要求记录语音与显著声音的前提下，这两组专用工具大多冗余。去掉问答组掉点最剧烈，说明主动定点取证不可替代。去掉全局字幕也有明显损失，说明宽泛上下文有独立价值。仅留字幕加问答只有 74.13%，提示提供时长和帧率的视频元数据当时仍对时间定位有用，这也成为进入第二阶段的起点配置。

**工具剪枝 × 模态合并：** 工具剪枝指按功能分组去掉音频事件、语音识别等专用工具，检验哪些感知能力真正必要；模态合并指把保留下来的音频字幕和多个问答工具改写成同时看音视频的全模态版本，前者做减法找核心能力，后者做整合降调用次数，两步连起来才得到低成本的两工具流程。

观察三幅准确率与效率权衡散点时，先看横轴成本从左到右变大，纵轴准确率向上变好，再定位低成本高准确率的左上区域。下图把系统 0 到 11 放在同一 125 题子集上比较，能直观看到早期系统偏右，后期系统向左收敛的过程。

> **看图路径：** 1. 对比左中右三幅散点图的横轴，分别是总 token、估计成本和实测延迟；2. 找到 B9 和 B6 的位置，观察低成本区谁的纵轴准确率更高；3. 注意 B0 和 B1 偏右的高成本位置，理解早期系统调用冗余的问题

[![原论文 Figure 2：Accuracy-efficiency trade-offs across Systems 0–11 on the selected Daily-Omni validation subset.](https://arxiv.org/html/2610.38960v1/ablation_accuracy_efficiency_three_panel_cache_inclusive.png)](https://arxiv.org/html/2610.38960v1/ablation_accuracy_efficiency_three_panel_cache_inclusive.png)

*论文图 2。原论文 Figure 2:：“Accuracy-efficiency trade-offs across Systems 0–11 on the selected Daily-Omni validation subset.”。*

三幅图横轴分别是每题总 token、估计成本和实测延迟，纵轴都是验证子集准确率。可以看到早期编号偏右成本高，后期两工具系统集中在左侧，B9 在左侧仍保持较高纵轴位置，B2 明显偏低，B6 在第二阶段中位置较好。这种左移且纵轴不塌的形态，正是后文分步替换要解释的机制，而不是单靠减少调用就能得到的。

### 从专用工具到全模态工具的每一步发生了什么

第二阶段从保留的专用配置出发，先区分工作流改动和工具改动。移植到 DSPy 实现带来迁移差异，Gemini 确定性采样影响很小。采用更紧凑的工作流把调用和成本分别降低约 29.0% 和 44.9%，但准确率掉了 3.73 个百分点，形成信息瓶颈。把音频字幕换成全模态字幕后准确率回升，再加先字幕的提示达到 77.87% 且调用降到 2.397 次，说明更丰富的初始上下文减少了重复索取。把专用问答合并成全模态问答进一步降调用和成本，但准确率回落到 74.40%。

隐藏规划器可见的元数据后达到 78.40% 且调用约 1.941 次，说明字幕自带时间戳后元数据不再必要。从系统 0 到系统 6，准确率上升 2.93 个百分点，调用、输出 token、成本和时延分别下降约 55.0%、58.2%、63.3% 和 66.9%。

第三阶段继续压紧。系统 6 虽然允许最多 30 次调用，但中位数只有 2.00 次，约 95% 问题少于 4 次，因此把预算压到六次。去掉片段级问答仍保持 77.60% 均值，说明在已有全局字幕和全局问答后片段工具的边际收益有限。降低规划器推理强度得到最终系统 9，准确率 77.07%，调用约 1.547 次，总 token 约 13.809k，相对系统 6 调用少 20.3%、成本少 39.3%，准确率让出 1.33 个百分点。去掉先字幕指令的系统 10 准确率和效率都变差，加回片段工具的系统 11 没有超过系统 9 且更耗资源，因此保留系统 9。论文提醒消融只在 30 到 60 秒的 Daily-Omni 子集上做，且重复运行有不可忽略的方差，小差异不应看成统计定论。

### 结论在什么条件下才成立，有哪些局限

主结论依赖 3 个条件。第一，感知骨干是较强的 Gemini-2.5-Flash，它原生支持音频理解，字幕提示又明确要求记录语音和显著声音，这是语音识别和音频事件工具显得冗余的前提，换弱骨干未必成立。第二，受控消融固定在 125 题 Daily-Omni 子集上，全基准只跑一次，中间配置方差不小，百分点级小差异不能当成显著优劣。第三，规划器是闭源 o3，感知也是闭源 API，行为、可用性和价格都可能变化，难以把工作流性质和模型特异行为完全分开。

作者还承认工具分组是人工按原工具角色定义的，后续配置按阶段观察顺序修改，没有对调用预算、片段问答和推理强度做穷举或形式化搜索，因此不声称最终配置全局最优，只是已评估配置中成本最低且准确率有竞争力的平衡点。工具合并必须与工作流协同设计，单纯压紧专用流程会先掉点，再靠全模态字幕和先字幕顺序恢复，这一点在只看最终数字时容易被忽略。

### 复现第一步做什么，需要哪些配置

复现应先准备与论文相同的推理分工，而不是先调提示措辞。规划器用 o3 中等推理强度，最大输出 32768 token，温度参数实际不发送；字幕和问答工具都用 Gemini-2.5-Flash，温度 0.0，最大输出 4096 token，种子固定。软件上提议流程用 DSPy 实现，复现 OmniAgent 用 LangChain，模型路由用 LiteLLM。流程上允许最多六次有效工具调用，第一次必须为空参数调用全视频字幕，之后可多次调用任一工具，预算耗尽则强制作答。效率统计要把规划器和感知模型的输入输出 token 都计入，每题分摊一次完整字幕生成调用，即使同一视频的字幕被缓存复用。

下表说明最终系统实际使用的模型与采样参数，是复现时最容易抄错的地方。

| Component | Model | Reasoning | Max output | Seed |
| --- | --- | --- | --- | --- |
| Planner | o3 | medium | 32,768 | 1234 |
| Captioning and QA tools | Gemini-2.5-Flash | provider default | 4,096 | 1234 |

上表来自原文附录的配置表，规划器与感知工具的模型、推理强度和输出上限都要一起对齐。只对齐模型名而忽略调用预算、先字幕约束和历史拼接方式，会得到不同的调用分布和成本。论文提到开发加正式实验约花 500 美元 o3 调用和 100 美元 Gemini 调用，说明完整复现仍有实际费用，消融建议先在小分层子集上验证流程，再跑全基准。

### 什么时候值得尝试，还缺哪项验证

如果任务也是音视频联合选择题，证据稀疏且视频较长，又希望控制多步调用成本，这个两工具加先字幕的流程值得尝试。它的价值在超过 5 分钟的视频上更可能体现，但在短视频或已有强单次模型能覆盖的任务上，额外调用的收益可能很小。不要把约七成的成本下降理解成所有场景的保证，它是相对复现的八工具系统、在当时 API 价格和本文预算下的估计值。

容易产生的误解是工具越少越好。论文实际说的是保留两类互补能力更重要：宽泛上下文的字幕和按问题追问的问答，缺任一类都会明显掉点。另一个误解是全模态替换天然更好，实际上必须配合先放全局上下文的工作流，否则会出现先压紧后掉点。加回片段级全模态问答在 WorldSense 总体和 4 个时长桶中 3 个桶都不更好，提示当前全模态模型已能从全视频定位相关时段，但这仍是事后分析，不是选择最终系统的依据。

下一步最需要补的验证是在更长视频分布上重复全基准多次运行，给出方差和显著性，并换用不同规划器和感知骨干检验结论是否脱离特定闭源模型成立。自动工具选择和按视频长度自适应预算，也是比继续手工加工具更值得做的方向。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.38960v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-30 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-30/)
