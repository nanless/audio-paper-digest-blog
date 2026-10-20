---
title: "Heartbeat Thinking: Speculative Reasoning and Tool Execution While Listening in Realtime Voice Agents"
date: 2026-10-20
draft: false
tags: [语音代理规划与工具使用, 工具增强与约束解码, 语音对话系统, 实时处理]
categories: [论文速递]
description: "针对语音智能体说完话后才开始推理和调工具导致的等待问题，论文提出周期性重叠执行的 Thinker 加 endpoint 触发的 Responder 分工，用三套语音基准上的工具覆盖率和 FDBench 延迟数据说明能提前完成更多可复用准备，但最终任务质量随基准而异且复用仍是独立难题。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.26233"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "边听边准备：Heartbeat Thinking 如何把听音时间变成可复用的工具调用"
paper_digest_original_title: "Heartbeat Thinking: Speculative Reasoning and Tool Execution While Listening in Realtime Voice Agents"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.26233v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.26233v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.26233v1.pdf"
paper_digest_primary_task: "语音代理规划与工具使用"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.voice-agent-planning","label":"语音代理规划与工具使用"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"},{"facet":"task","id":"task.speech-dialogue","label":"语音对话系统"},{"facet":"setting","id":"setting.real-time","label":"实时处理"}]
paper_digest_primary_method: "工具增强与约束解码"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对语音智能体说完话后才开始推理和调工具导致的等待问题，论文提出周期性重叠执行的 Thinker 加 endpoint 触发的 Responder 分工，用三套语音基准上的工具覆盖率和 FDBench 延迟数据说明能提前完成更多可复用准备，但最终任务质量随基准而异且复用仍是独立难题。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhenyu Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kewei Fu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yongqi Tong"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chenzhi Zheng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wei Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jiang-Ming Yang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jianshe Li"}]
paper_digest_abstract_sha256: "abb474a0bbaf243c9d609c2dc1d1cc3a2715a73c42ce09482e011532f29a2203"
paper_digest_sidecars: {"citation.bib":{"sha256":"742b97639fbc41156d3dafd529f6ec8c014ae7f34d3ee6339e5b0ff7bd31b8f5","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-26233/citation.bib"},"citation.json":{"sha256":"da1d46d111f14cf4af3f705884fc08653b51cc68ee89de588e5e1bc6fef60266","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-26233/citation.json"},"citation.ris":{"sha256":"067a5d048736fe72dec0e63491f475d7e1d70330db0b4dc8395b9ff65b5d07e3","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-26233/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"56aa6e25b358848e8ea82246788126ef470b6e687bb5bee4c071cd4e33f9e080","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-26233/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "85a2111f735a75062a86a754213c9dad4f45f0f493bfe5519ac0bfcc8613a1b6"
paper_digest_api_reader_plan_sha256: "064d72679a078e8bbec607500d15c50d01c2c2ef43dbf1ed70c97ed019b92bb6"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "cb47d6349b422ece9b30483fe4dd616bebb7bfe0865ffb6efa8ee49319f8557c"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "637d88c4a58540501030e2db5236d27b00f775b826b2f95ad32fa80010f6b42d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "d39d612bf8e56e8648587dde1d18f9bd543f37f4d5775178f7d185a767d39764"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "3aa177a5d8e36017e452dc768850f8080218a95cb73a7cc04badff24f45fdf18"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 边听边准备：Heartbeat Thinking 如何把听音时间变成可复用的工具调用

> 英文题目：*[Heartbeat Thinking: Speculative Reasoning and Tool Execution While Listening in Realtime Voice Agents](https://arxiv.org/abs/2610.26233v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [语音代理规划与工具使用](/audio-paper-digest-blog/papers/?concept=task.voice-agent-planning)；[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [语音对话系统](/audio-paper-digest-blog/papers/?concept=task.speech-dialogue)
- **研究方法**：[工具增强与约束解码](/audio-paper-digest-blog/papers/?concept=method.tool-augmentation)
- **研究条件**：[实时处理](/audio-paper-digest-blog/papers/?concept=setting.real-time)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Zhenyu Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Kewei Fu：机构信息未能在本次解析中与作者逐人可靠绑定
- Yongqi Tong：机构信息未能在本次解析中与作者逐人可靠绑定
- Chenzhi Zheng：机构信息未能在本次解析中与作者逐人可靠绑定
- Wei Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Jiang-Ming Yang：机构信息未能在本次解析中与作者逐人可靠绑定
- Jianshe Li：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是边听边准备的语音工具代理，困难在于用户说话期间部分转写不断更新，而完整工具调用需要参数齐全才能发出，若每次更新都打断生成，有效准备时间会被压缩。Heartbeat Thinking在聆听期间每隔固定时间启动一次思考者调用，每次读取最新部分转写和共享记录中已完成的推理与工具结果，形成增量判断。该判断分为无动作、仅推理或附带工具请求，推理记录与工具请求先写回共享记录，再异步派发工具调用，结果按调用标识回链到对应请求。后续思考者调用读取更新后的共享记录，区分已请求、待返回与已完成工作，避免重复发起同名同参调用，并利用已返回结果补齐缺失参数或发起依赖调用，使准备跨语音更新推进。语音活动检测触发交接时停止新建调用并取消未完成任务，回答者拿到完整转写和交接时刻已可用的快照，核对后复用匹配结果并补做剩余调用。在FDBench v3上，以DeepSeek-V4-Flash为回答者时，Heartbeat相对窗口式基线将推测工具覆盖率从34.67%提高到50.67%，平均最终回答延迟从6.90秒降到4.39秒。结论适用于函数调用、含口吃意图跟随和知识问答三类评测，但更高覆盖在另两个基准上没有带来质量提升，4.0%的FDBench录音还出现参数正确但引用过时结果的问题。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://huggingface.co/datasets/FunAudioLLM/SpeechFCEval> — 暂时无法访问

- 第三方资源：<https://github.com/DanielLin94144/Full-Duplex-Bench/blob/main/LICENSE> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/facebookresearch/CRAG/blob/main/LICENSE> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音智能体要等什么：输入、目标与必须保留的信息

这篇论文研究的是一类需要调外部工具的实时语音智能体。输入是用户正在说出的一段语音，加上对话历史和可用工具的模式说明，目标是在用户说完后给出有用的 spoken 回答并完成请求要求的工具调用。难点在于有用回答既需要模型计算，也需要外部执行，而传统级联管线往往把这两部分都放在说话结束后才开始。

论文抓住的一个时间差是，可行动的信息常常比说话结束更早到达。例如用户还在补充配送担忧时，订单号已经说清楚，智能体理论上可以先去查订单。能不能把听音过程中的等待时间变成提前构造参数、提前执行检索或查询的时间，直接决定用户说完后还剩多少工作。提前做的关键约束是可复用：参数不全的调用不能发出，发早了但与最终请求不一致的结果还要能被后文纠正。

### 已有路线为何留下了等待：级联、按块生成与打断生成

理解本文需要先区分 3 条路线。级联基线是听完再行动，推理和工具调用都等完整请求，本文中的 Speech-to-Speech、Pipecat、LiveKit 属于这类。它们结构简单，但听音时间完全没有被用来准备。

第二条是推测式准备。LiveMind 做前缀推理并存入记忆，PredGen 起草候选回答并复用可复用前缀，LTS-VoiceAgent 同时维护修正转写、关键变量和计划，这些都是想在局部输入上先做一部分工作。更接近本文的是在线语义解析里从前缀预测程序并选择性执行子程序，以及 Stream RAG 的并行检索与中间结果可用性检查。

第 3 条是本文直接对照的调度方式。SHANKS 把语音块与推理和工具调用交错，但每段生成受语音块边界限制，长参数可能写不完就被截断。SIA 用新到用户或工具事件打断正在生成的内容，已派发工具另行管理，但完整工具调用可能在发出前就被打断。频繁更新于是压缩了不受打断的连续计算时间，能提前完成的工作变少。下面的示意图把三者的时间关系放在一起，读图时重点看工作条是否被语音块切断。

**SHANKS 式窗口思考 × Heartbeat Thinking：** SHANKS 式窗口思考在本论文实现中是按同样调度启动但丢弃窗口结束后才到达的输出的对照策略，每段生成被限定在语音块边界内；Heartbeat Thinking 允许正在进行的 Thinker 调用和已派发的工具继续完成到可用为止。搭配比较的意义是固定输入节拍而只改变是否保留跨更新的计算，从而检验保留进行中计算是否带来更多可复用准备。

在进入具体方法前，先看论文给出的 3 种时间安排对比，目的是建立后面所有讨论的基准：谁在听音时工作，谁被边界打断，谁允许重叠。

> **看图路径：** 1. 先看三行面板的时间轴：语音块 1 到 5 与下方工作条如何对齐；2. 比较中间面板中被截断的工具调用图标与下方保留多路 Thinker 的区别；3. 看最下面板中可用结果如何汇入完整请求再交给 Responder

[![原论文 Figure 1：Reasoning and tool use during speech.](https://arxiv.org/html/2610.26233v1/heartbeat-comparison.svg)](https://arxiv.org/html/2610.26233v1/heartbeat-comparison.svg)

*论文图 1。原论文 Figure 1:：“Reasoning and tool use during speech.”。*

这张图上半是听完再行动，工作条在说话结束前是等待完整请求；中间是 SHANKS，每段思考被限定在语音块内，并标出工具调用生成可能被截断；下半是 Heartbeat，多路 Thinker 与工具作业跨语音更新重叠，只有已完成结果汇入完整请求后交给 Responder，不等待未完成作业。这种并排有助于理解后文覆盖率差异主要来自调度与保留策略，而不是换了一个更大的模型。

### 论文要解决的具体矛盾：想提前做，又怕做不完和做错

论文把问题拆成两个耦合的困难。第一是完成度：工具调用在必需参数齐备前不能派发，即使部分信息已够构造其中一部分。如果每次新语音都要求当前生成在窗口内结束或被打断，构造完整参数所需的连续时间就不够，准备只能停留在推理草稿层面。

第二是适用性：请求在说话过程中会演化。早期检索可能在用户追加预算约束后需要修正，早期加购动作甚至无法被后来的纠正搜索撤销。Stream RAG 已经提示要检查中间结果能否服务最终请求。本文的立场是，准备策略应该允许计算跨语音更新完成，同时让后到达的输入决定哪些结果还能用。也就是说，完成与取舍要由不同机制负责，前者尽量多留，后者严格过滤。

### 整体流程：听音时重叠准备，说完后单独核对与收尾

Heartbeat 把一轮对话分成准备与回答两个角色。准备侧是周期性 Thinker，在听音期间反复读取最新局部转写和共享状态中的已完成准备，可独立选择模型。回答侧是 endpoint 触发的 Responder，在检测到说话结束时拿到完整转写、历史、工具模式和组装时刻已可用的准备快照，用 ReAct 过程核对、复用与补调。两个角色可以通过不同模型实现，交接只经过已完成的推理记录和工具结果这种外部接口，不共享模型内部注意力状态。

关键的时间规则是，新语音和新返回的工具结果只进入后续 Thinker 调用，不注入正在生成的调用；已派发工具异步执行，与模型调用重叠；说话结束时停止启动新 Thinker，并取消未完成的 Thinker 与推测工具任务，Responder 不等待它们。这样听音时间被切成多次可重叠的心跳，每次心跳都可以读到之前心跳留下的可用结论。

**Thinker × Responder：** Thinker 是在用户说话过程中周期性启动的准备角色，只读局部转写和已完成准备并产出推理记录与工具请求；Responder 是在语音活动检测到说话结束才启动的回答角色，拿到完整转写和已完成准备快照后核对并补齐剩余调用。二者搭配的意义是把可提前做的构造工具参数与执行同必须等完整请求才能定的最终取舍分开，前者可以重叠推进，后者负责纠偏和收尾。

读懂这套分工后，再看论文的架构与时间线总图，重点是信息只经过完成态进入下一步，未完成态不会阻塞回答。

在看总图之前，先明确观察任务：上半找从语音到最终答案的主数据流，下半找多次心跳与回答启动在时间上的错开关系。

> **看图路径：** 1. 先沿上半部分从语音流经 Thinker 到共享状态再到 Responder 的箭头看主路径；2. 再看下半部分时间线中多次心跳的读快照与写回如何错开重叠；3. 注意上下文组装时刻之后被丢弃的心跳与 Responder 启动的相对位置

[![原论文 Figure 2：Heartbeat Thinking architecture (top) and execution timeline (bottom).](https://arxiv.org/html/2610.26233v1/heartbeat-framework.svg)](https://arxiv.org/html/2610.26233v1/heartbeat-framework.svg)

*论文图 2。原论文 Figure 2:：“Heartbeat Thinking architecture (top) and execution timeline (bottom).”。*

上半显示语音流经流式识别得到局部转写，连同历史与工具模式进入 Thinker，Thinker 输出无动作、纯推理或带工具请求 3 类，经共享状态沉淀为已完成推理与已完成工具结果，未完成部分单独记为待定工作；右侧 Responder 同时读最终转写、快照、历史与工具模式，再经 ReAct 得到最终答案。下半显示多次心跳读取快照与写回共享状态的条带相互重叠，只有上下文组装时刻前已完成的才被纳入，之后到达的结果被丢弃，Responder 在组装时刻后启动而不等待未完成心跳。

### Thinker 一次心跳做了什么：读什么、写什么、如何避免重复

每次心跳启动时刻记为该次调用的启动时间，它读到的是对话历史、工具模式、最新局部转写，以及此前 Thinker 已完成输出与当时已返回的工具结果。新语音与新结果不会打断它，它只管把这一次的增量判断做完。输出有 3 种：无新增动作、有增量推理但无工具请求、有推理并附带工具请求。无动作表示当前输入与已有准备下没有值得新增的解释或可执行调用。

一旦一次思考完成，它的推理记录先写入共享状态，随后请求的工具被异步派发。工具并发与 Thinker 并发分开控制：派发本身不设并发上限，执行后端排队执行；每 at most 2 路 Thinker 并发的限制只管模型调用，不管工具队列。已记录调用在结果返回前记为待定，结果回来后按唯一调用标识关联存放。后续 Thinker 可以区分已请求与已可用，并利用已返回结果补齐缺失参数或发起依赖调用，即使转写没有变化也能推进。

**部分转写 × 共享状态：** 部分转写是流式语音识别在说话结束前给出的累积文本，随时间更新但可能被后文修正；共享状态是存放本轮已完成推理记录、已请求调用及其返回结果的地方。搭配时每次 Thinker 启动都读最新部分转写加共享状态中已可用的结论，新语音和新工具结果都只进后续调用而不打断正在生成的调用，准备于是可以跨多次更新累积。

为减少冗余，提示词要求不重复与待定或已完成中工具名加完整参数完全相同的调用。参数相同的判断不看结果内容与答案是否充分，参数不同的调用只要有当前请求支撑仍可提出。这里的要点是，去重键是工具名加完整参数，而不是语义相似度，Responder 侧判断重复也用同样严格的相同工具名加完全相同参数规则。

### 交接边界：什么算可用，Responder 如何复用与补调

论文用一个集合定义准备快照，含义是所有已完成且可用时间不晚于上下文组装时刻的结果。公式本身只表达这个边界，不包含任何学习目标或近似，符号含义紧扣时间与完成态。

\[\mathcal{R}_{c}=\{r_{j}:r_{j}\text{ is complete and }a_{j}\leq c\}.\]

这里结果下标代表某一条准备输出，可用时间是它真正可被读取的时刻，组装时刻是语音活动检测触发的交接点。集合中只保留已完成且可用时间在交接点之前的条目；已完成推理记录可能附带结果尚未返回的工具请求，这种记录可用但其工具结果不可用；交接点之后返回的一律丢弃。重叠调用可能乱序完成，先后顺序不决定可用性，只看是否在边界前完成。

**上下文组装时刻 × 准备快照：** 上下文组装时刻是检测到说话结束、停止新 Thinker 并取消未完成推测任务的时间点；准备快照是该时刻已经完成且可用时间不晚于该时刻的推理记录与工具结果集合。搭配的意义是给 Responder 一个明确的可用边界：在此之后才返回的结果一律丢弃，已完成但结果还没回来的调用只留记录不算完成，Responder 缺的部分要自己重新执行。

Responder 拿到最终转写与该快照后，按 ReAct 过程工作：以完整最终输入为准，丢弃被后文否定或取消的推测解释；只有工具名与完整参数都匹配所需操作的已完成调用结果才可复用；缺结果的必需调用，包括交接时还在待定的那些，都由 Responder 在自己的过程中重新发出。回答之后可接语音合成，对话与保留的工具记录带入下一轮。

### 本研究训练了什么：没有训练，实际计算是调用与执行

这是 1 篇无训练的方法与评测论文，没有报告任何梯度更新、损失函数、冻结与解冻或参数重置。Thinker 与 Responder 都是直接调用已有大模型：主结果用 Qwen3.6-35B-A3B 做 Thinker，用 DeepSeek-V4-Flash 做 Responder，另有更换 Thinker 与 Responder 的对照。附录提到延迟评测时对 2 个模型都关闭思考模式，但这只是推理配置，不是训练。

实际执行的计算是 3 类：按固定间隔调度 Thinker 推理并按结构化模式请求工具；在执行后端异步执行工具并把结果写回共享状态；在交接后由 Responder 执行 ReAct 推理、必要的补调工具与最终回答生成。成本侧原文没有给出完整推理开销与帧率预算，只在局限中承认固定间隔与有限并发可能在信息很少时带来冗余推理，自适应调度尚未探索。因此不能从无训练推出系统输出确定，也不能把覆盖率提升直接当成延迟与成本必然更优。

### 在什么条件下评测：数据集、对照与指标方向

评测覆盖 3 套语音相关基准。SpeechFCEval 做函数调用，包含来自 ACEBench、BFCL 与 SmartInteract 的语音任务，测试集 1914 条，总体准确率在 5 个任务组上等权平均，总体覆盖率按样本平均。FDBench v3 测带口吃与修正的口语意图跟随，共 100 段录音覆盖 79 个场景与 12 位说话人，用转写后的执行调用与答案评质量与通过率。AudioCRAG 测知识问答，评测集 1312 条，关注答案正确、缺答与幻觉比例。主结果固定 Thinker 为 Qwen3.6-35B-A3B，Responder 为 DeepSeek-V4-Flash，心跳间隔 500 ms，至多 2 路并发。

对照包括 3 条级联管线与 SHANKS 式窗口思考。窗口思考沿用同样的更新节拍，但丢弃窗口结束后才到达的输出，用来隔离保留策略的效果。指标方向都是越高越好，除了 AudioCRAG 的缺答与幻觉越低越好。推测性工具覆盖率在 SpeechFCEval 与 FDBench 上指被已完成推测调用覆盖且 Responder 未重复的参考调用占比，前者按样本平均，后者按参考调用聚合；参考匹配与 Responder 重复是 2 次独立判定，前者按基准的工具名与参数规则定相关性，后者要求工具名加完整参数完全相同。在 AudioCRAG 上它改为复用已完成推测结果且不再追加检索的样本占比。

延迟评测只在 FDBench v3 上做，相对每轮对齐后的说话结束点测量，不含尾部静音。正确工具调用延迟指首个与最终请求匹配的可执行调用的发起时刻，只在存在匹配调用时统计；最终回答延迟指完成必需工具调用后的最终语音回答起始时刻，无需工具时为回答起始时刻。先在录音内平均事件偏移再给录音等权，负值保留。下面是该延迟评测的语音与调度配置，读表时注意它只适用于延迟结论，不能推广到全部质量评测。

| Parameter | Value |
| --- | --- |
| Heartbeat interval | 500 ms |
| Max. heartbeat concurrency | 2 |

该配置表说明延迟数字的成立条件：识别、合成、语音活动检测与心跳节拍都被固定，Thinker 与 Responder 在延迟评测中关闭思考模式。因此后文 4.39 秒与 6.90 秒的比较只在这套管线与调度下成立，换识别模型或改间隔与并发都可能改变结果。

### 主结果回答了什么：覆盖率更高，但任务质量随基准而异

主结果要回答的是，在相同 Thinker 与 Responder 下，只把窗口丢弃换成允许重叠完成，是否留下更多可复用准备，以及最终质量是否同步变好。表前先明确比较问题与公平条件：比较对象是 Heartbeat 与 SHANKS 式窗口思考，级联基线只用来说明推测本身是否带来准备；指标中覆盖率越高越好，准确率、质量与通过率、答案正确率也都是越高越好；主表固定 Thinker 与 Responder，因此差异主要指向调度与保留。

| Framework | STC | STC | STC |
| --- | --- | --- | --- |
| Window Thinking (SHANKS) | 33.13 | 34.67 | 20.05 |
| Heartbeat | 43.69 | 50.67 | 62.42 |

表中 Heartbeat 在 3 套基准上的覆盖率都高于窗口思考，SpeechFCEval 从 33.13% 到 43.69%，FDBench 从 34.67% 到 50.67%，AudioCRAG 从 20.05% 到 62.42%。任务质量则分化：FDBench 质量从 72.0% 到 77.0%，通过率从 57.0% 到 65.0%，但通过率仍低于 Speech-to-Speech 与 LiveKit；SpeechFCEval 总体准确率从 67.95% 微降到 66.85%；AudioCRAG 正确率从 57.24% 降到 55.49%，缺答率从 14.33% 升到 16.84%。这说明更多保留不必然带来更好最终质量，解释与使用推测结果是独立挑战。

**推测性工具覆盖率 × 任务质量：** 推测性工具覆盖率衡量的是听音阶段已完成且被 Responder 直接复用、不再重复执行的参考调用占比，在 AudioCRAG 上则变为复用已完成检索结果且不再追加检索的样本占比；任务质量衡量的是最终函数名与参数正确性、回答质量与通过率或答案正确率。前者多只说明提前准备被留下了多少，后者才说明最终答案是否对，论文中两者经常不同向，因此要分开读。

还需要强调聚合口径：SpeechFCEval 总体准确率是 5 组等权平均，覆盖率按样本平均；FDBench 覆盖率按参考调用聚合且跨录音检查 Responder 重复；AudioCRAG 覆盖率是样本级检索复用率。直接跨基准比较绝对值没有意义，只能在各自口径内看 Heartbeat 相对窗口思考的变化。

### 延迟结果在什么条件下成立：工具提前与回答提前是两件事

延迟部分只回答 FDBench v3 在固定语音管线下的时间问题。读图前先区分两个测量对象：正确工具调用延迟是首个匹配最终请求的调用何时发起，负值表示在说话结束前已经发起；最终回答延迟是必需工具完成后最终语音回答何时开始。两者都相对说话结束点，前者条件于存在匹配调用，后者包含工具执行与回答生成。

先看工具调用何时发生，该图把听音时提前量可视化，负柱越长表示越早在说话结束前发起匹配调用。

> **看图路径：** 1. 先看纵轴是否为相对说话结束的秒数，负值表示说话结束前；2. 比较最左侧两根在零线以下的柱子与其他三根在零线以上的柱子；3. 记住该图只统计存在匹配调用的轮次，不是全部样本的平均提前量

[![原论文 Figure 3：Mean Correct Tool Call Latency on FDBench v3 relative to speech end, measured at initiation of…](https://arxiv.org/html/2610.26233v1/fdbench-correct-tool-call-confirmed.svg)](https://arxiv.org/html/2610.26233v1/fdbench-correct-tool-call-confirmed.svg)

*论文图 3。原论文 Figure 3:：“Mean Correct Tool Call Latency on FDBench v3 relative to speech end, measured at initiation of the first tool call matching the final request.”。*

该图可见 Heartbeat 平均在说话结束前 4.37 秒发起首个匹配调用，窗口思考为说话结束前 2.74 秒，3 条级联基线在说话结束后 2.45 秒到 3.52 秒才发起。这支持听音时重叠准备确实把匹配调用的发起点前移，但它是有条件平均，只统计有匹配调用的轮次，不能理解为每轮都提前这么多。

再看最终回答何时开始，该图回答的是用户感知等待是否缩短，条件与上一张图不同，它统计的是最终语音回答起始。

> **看图路径：** 1. 先确认纵轴同样是相对说话结束的最终语音回答起始时刻；2. 比较最左侧柱子与窗口思考及三条级联基线柱子的高度差；3. 结合前一张图理解工具提前与回答提前是两个不同的测量对象

[![原论文 Figure 4：Mean Final Response Latency on FDBench v3 relative to speech end, measured at the onset of the…](https://arxiv.org/html/2610.26233v1/fdbench-final-response-confirmed.svg)](https://arxiv.org/html/2610.26233v1/fdbench-final-response-confirmed.svg)

*论文图 4。原论文 Figure 4:：“Mean Final Response Latency on FDBench v3 relative to speech end, measured at the onset of the final spoken response. Details are reported in Table 5.”。*

该图可见 Heartbeat 平均最终回答延迟为 4.39 秒，窗口思考为 6.90 秒，降幅按原文为 36.4%，且比最快的级联基线 Pipecat 的 8.08 秒低 45.7%。这是在同一套识别合成与语音活动检测配置下的结果，换工具负载或执行时间分布可能改变收益。论文局限也明确延迟分析集中在 FDBench v3，需要更多工具负载下的刻画。

### 换 Thinker 是否还成立：覆盖率保持领先，质量不跟覆盖率走

这一节回答准备能力是否依赖特定 Thinker。比较问题是固定 Responder 为 DeepSeek-V4-Flash，只换 Thinker，指标仍是质量、通过率与覆盖率，方向都是越高越好。窗口思考只给默认 Thinker 的一行，Heartbeat 给 4 个 Thinker，便于看覆盖率与质量是否同向。

| Framework | Thinker | Quality | Pass@1 | STC |
| --- | --- | --- | --- | --- |
| Window Thinking (SHANKS) | Qwen3.6-35B-A3B | 72.0 | 57.0 | 34.67 |
|  | Qwen3.6-35B-A3B | 77.0 | 65.0 | 50.67 |

表中 4 种 Thinker 的覆盖率都非零，默认 Thinker 从 34.67% 到 50.67%，其余在 39.33% 到 52.00% 之间，都高于窗口思考。质量侧出现反例：Gemma 的覆盖率 52.00% 高于默认 Thinker 的 50.67%，质量 80.0% 也高于 77.0%，但通过率 67.0% 与 65.0% 接近；而 GLM 质量 84.0% 最高，通过率却只有 55.0%。结合 SpeechFCEval 中 Gemma 准确率高于默认 Thinker 但覆盖率略低的记载，可以得出更高覆盖不稳定地带来更好任务表现，Thinker 选择影响准备量，但复用效果还要看 Responder 如何使用。

### 信息早晚与意图修正：什么时候还能在说话结束前纠正

这一节回答请求演化时的行为。论文把录音按目标实体与全部约束何时说完分组：前 70% 有效输入内到齐为早期，最后 30% 才到齐为晚期，明确修正意图另成一组。早期与晚期统计说话结束前发起与最终请求一致的调用占比，修正组统计在过时调用后出现纠正调用的占比。这些是发起时刻统计，不同于要求结果完成并被 Responder 复用的覆盖率，因此数值可以直接高于覆盖率。

| Input group | Success rate |
| --- | --- |
| Early information | 73.3% |
| Late information | 49.2% |
| Explicit revision | 70.6% |

表中早期信息成功率为 73.3%，晚期为 49.2%，明确修正为 70.6%。这说明信息越早，推测执行机会越多；晚期约束与意图修正仍有约一半到七成能在说话结束前纳入，但不是每次都能纠正。论文给出的订单跟踪、机械键盘预算、跑鞋改登山靴 3 个案例对应这三组，意图修正案例中 4.34 秒发起跑鞋检索、10.43 秒发起登山靴检索，显示纠正调用可以在听音时发出。限制是发起纠正不等于正确使用：4.0% 的 FDBench 录音中工具参数正确，但最终答案混用了错误或过时结果，例如 99.99 美元咖啡机已加购后又检索到 40 美元商品，回答却混报了 2 次结果，而纠正搜索无法撤销已发生的状态变更动作。

### 哪些结论不能推广：固定调度、快照边界与未测范围

论文明确了三项局限。第一是固定间隔与有限并发，没有按局部转写变化或工具完成情况自适应调度，信息很少时可能有冗余推理。第二是 Responder 只读组装时刻的快照，其后返回的结果即使有用也被丢弃，对执行时间波动大的工具不友好，增量交付是未来工作。第三是延迟只在 FDBench v3 上充分评测，推测覆盖、推理成本与延迟的权衡需要更多工具负载下的刻画。

容易误解的是把覆盖率提升直接读成质量提升。原文在 3 套基准上都给出反例：SpeechFCEval 与 AudioCRAG 覆盖率更高但总体质量微降，FDBench 通过率提升但仍低于部分级联基线。另一个误解是把发起时刻的提前等同于每轮都省同样时间，正确工具调用延迟是有条件平均，无匹配调用的轮次不在其中。还有一处是把 AudioCRAG 的覆盖率当成工具调用覆盖，它实际是检索复用率，口径与另两套不同。

### 复现第一步做什么：固定节拍、对照与统计口径

复现应先固定可比条件。按原文主结果用 Qwen3.6-35B-A3B 做 Thinker，DeepSeek-V4-Flash 0731 版本做 Responder，心跳间隔 500 ms，至多 2 路并发；在延迟复现时再叠加语音管线配置并对 2 个模型关闭思考模式。对照必须保留 SHANKS 式窗口思考，它与 Heartbeat 同节拍但丢弃窗口后到达的输出，否则无法分离保留策略的效果；级联基线保留 Pipecat 等用于说明推测本身的准备量。

统计时注意分母与聚合：SpeechFCEval 总体准确率 5 组等权平均，覆盖率按样本平均；FDBench 覆盖率按参考调用聚合且要检查 Responder 是否以相同工具名加完全相同参数重复；AudioCRAG 覆盖率是无追加检索的样本占比。延迟先在录音内平均再给录音等权，负值保留。数据集方面，SpeechFCEval 数据集卡声明 Apache-2.0 并要求尊重上游来源条款，FDBench 与原始 CRAG 文本数据仓库发布 CC BY-NC 4.0 许可，这些上游条款不构成重分发衍生音频或可识别对话的许可，收集与使用需按同意与访问控制处理。

关于资源可用性，本文依据的证据中只有第三方链接的可达性校验，没有作者资源已公开的明确归属证据，因此不能写作者已开源或权重可下载。代码开源、权重可下载、系统可运行要分开验证，缺一项就只说缺的那一项，不要把论文提到链接等同于作者已提供可运行系统。

### 什么时候值得尝试，以及还需要补哪项验证

当任务满足 3 个条件时值得尝试 Heartbeat 范式：请求的关键参数或检索意图在说话结束前较早出现，工具有可观执行时间且结果大概率可复用，回答侧有能力按完整请求过滤过时结果。FDBench 上的质量与延迟双改善对应的是带口吃但意图可跟随的场景；SpeechFCEval 并行调用覆盖率从 36.34% 到 58.03% 的提升对应参数可分步到齐的函数调用；AudioCRAG 高检索复用但正确率微降则提示检索快但答案整合弱时要谨慎。

还需要补的验证是自适应调度下的成本收益、组装时刻后到达结果的增量利用，以及更多工具负载与长尾执行时间下的延迟分布。核心超参数是心跳间隔与最大并发，信息条件是目标实体与约束何时说完、是否有明确意图修正。复用失败的 4.0% 案例表明，下一步重点不是一味提高发起率，而是让 Responder 正确区分已执行动作与可替换检索结果，避免把纠正检索当成撤销已发生状态变更。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.26233v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-20/)
