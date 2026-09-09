---
title: "Omni Interaction Agent Technical Report"
date: 2026-09-10
draft: false
tags: [全双工语音交互, 多模态学习, 音视频, 流式处理]
categories: [论文速递]
description: "针对语音视觉文本连续输入下既要低延迟可打断对话又要长程工具执行的问题，Gander 用小脑负责流式交互与块级控制、大脑免训练负责长程推理并通过编排运行时协同，在 Full-Duplex-Bench 上以 100% 合时接管与 8.0 抢话率取得交互最优，同时在 SpokenQA 上保持 75.60 与 59.30 的流式问答能力，代价是 WorldSense 相对基座回退 6.08 点且 Filler 占位达 51.6。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.08977"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把打断、等待与做任务放进同一个流：Gander 如何用块展平与小脑-大脑分工实现可打断的全双工 Omni 智能体"
paper_digest_original_title: "Omni Interaction Agent Technical Report"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.08977"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.08977.pdf"
paper_digest_primary_task: "全双工语音交互"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"setting","id":"setting.streaming","label":"流式处理"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对语音视觉文本连续输入下既要低延迟可打断对话又要长程工具执行的问题，Gander 用小脑负责流式交互与块级控制、大脑免训练负责长程推理并通过编排运行时协同，在 Full-Duplex-Bench 上以 100% 合时接管与 8.0 抢话率取得交互最优，同时在 SpokenQA 上保持 75.60 与 59.30 的流式问答能力，代价是 WorldSense 相对基座回退 6.08 点且 Filler 占位达 51.6。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Orantqing"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shengpeng Ji"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Junlong Tong"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jialong Zuo"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Dongjie Fu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Di Cao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yangzhuo Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shangda Wu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Franz"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Evan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Theron Veyra"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Changhao Pan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jingyu Lu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Dongchao Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhifei Xie"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yang Tan"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xiaoyu Shen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Xiaoda Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Wenfu Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Teddysun"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Steveyves"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhou Zhao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bryanytian"}]
paper_digest_abstract_sha256: "ca9512d92a29f0e2905a6b9b6bad3a3be51074ce6aabe6c70eef6cb2b3b5c644"
paper_digest_sidecars: {"citation.bib":{"sha256":"9ed4fab30fc3db96f98f3e6bc62e27a2be5fa84a19c55443cb2016eddcc64e2c","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08977/citation.bib"},"citation.json":{"sha256":"a6020cc97a7bf52aeabbee87370461778c3816dcb3f52d19a71e700a95fc04f7","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08977/citation.json"},"citation.ris":{"sha256":"ba47370e882c5f9810402d49e1bc79e06673af65a48f498168aad8e1fe24224b","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08977/citation.ris"},"rethink-context.json":{"sha256":"3b0317bfcc6e2ff1f9b560ebf57981acbb8e4961d0bb7d031e35b04e5be06416","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08977/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "aa49ee7971ec8b99d91ac397b69459f0d9d847b9163320af336836c704ae3628"
paper_digest_api_reader_plan_sha256: "feffeb1dabb82549f2269e95b1f06a0b34bea679ec85f0c07e0faf3d0aec57b4"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "e127ac7c9140fb01da09229e0b46926845697efd14079eebdd3cc410be95856e"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8ad7d64b7beb0a576d34f64dd26d9e09fb579891517b9dfd9f0079407980f7e9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "b6675dac733d03624319c3d9639b0459a3cb60f0acb45f2f8e410f356a817805"
paper_digest_api_reader_author_count: 23
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "1de4e19e6201e9728ffa2d4b4b61101ca4d38586c6eeb8d35accca0944f6cc1e"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把打断、等待与做任务放进同一个流：Gander 如何用块展平与小脑-大脑分工实现可打断的全双工 Omni 智能体

> 英文题目：*[Omni Interaction Agent Technical Report](https://arxiv.org/abs/2609.08977)*

> 标签：#全双工语音交互 | #多模态学习 | #音视频 | #流式处理
>
> 评分：**6.7/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Orantqing：机构信息未在 arXiv HTML 中可靠披露
- Shengpeng Ji：机构信息未在 arXiv HTML 中可靠披露
- Junlong Tong：机构信息未在 arXiv HTML 中可靠披露
- Jialong Zuo：机构信息未在 arXiv HTML 中可靠披露
- Dongjie Fu：机构信息未在 arXiv HTML 中可靠披露
- Di Cao：机构信息未在 arXiv HTML 中可靠披露
- Yangzhuo Li：机构信息未在 arXiv HTML 中可靠披露
- Shangda Wu：机构信息未在 arXiv HTML 中可靠披露
- Franz：机构信息未在 arXiv HTML 中可靠披露
- Evan：机构信息未在 arXiv HTML 中可靠披露
- Theron Veyra：机构信息未在 arXiv HTML 中可靠披露
- Changhao Pan：机构信息未在 arXiv HTML 中可靠披露
- Jingyu Lu：机构信息未在 arXiv HTML 中可靠披露
- Dongchao Yang：机构信息未在 arXiv HTML 中可靠披露
- Zhifei Xie：机构信息未在 arXiv HTML 中可靠披露
- Yang Tan：机构信息未在 arXiv HTML 中可靠披露
- Xiaoyu Shen：机构信息未在 arXiv HTML 中可靠披露
- Xiaoda Yang：机构信息未在 arXiv HTML 中可靠披露
- Wenfu Wang：机构信息未在 arXiv HTML 中可靠披露
- Teddysun：机构信息未在 arXiv HTML 中可靠披露
- Steveyves：机构信息未在 arXiv HTML 中可靠披露
- Zhou Zhao：机构信息未在 arXiv HTML 中可靠披露
- Bryanytian：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

该工作面向音视频流上的连续人机协作，输入为实时语音、视频与文本混合流，输出为可被打断、可抢话、可主动反馈的语音与工具动作，难点在于同时满足低延迟交互与长时程任务推理并在多方与噪声下区分有效指令。方法链分三段衔接：第一步前端小脑以流式Thinker-Talker架构将1秒窗口内的音视频编码与控制词元展平为统一块流，自回归预测听/说/打断并决定是否本地应答或需委托。第二步其输出的task_start/task_send/task_resolve等工具调用进入中间编排运行时，运行时将其绑定到可信用户轮次并调度后端大脑，避免伪造调用并维持异步任务状态。第三步后端大脑以免训练的Codex/Claude Code代理异步执行检索、代码与文件操作，并经share回传中间结果由小脑整合进持续对话，形成感知-调度-执行的闭环。与依赖外部VAD与端点检测的级联方案不同，该机制把交互状态判断内生为每块首词元的生成决策，使时机与内容共享同一演进表征，可推迟到语义完整而非仅声学静默时再接管。在Full-Duplex-Bench v3基准的100个工具服务场景评测下，Gander的打断率指标从GPT-Realtime的13.5%降至8.0%且保持100%适时接管。结论适用边界受限于前端两分钟滚动上下文与转写驱动的大脑协作，长记忆、多轮视觉接地与复杂噪声下的泛化尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/Omni-Interaction-Gander/Omni-Interaction-Agent> — 暂时无法访问

- 演示资源：<https://Omni-Interaction-Gander.github.io/Omni-Interaction-Agent> → <https://omni-interaction-gander.github.io/Omni-Interaction-Agent/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么、要输出什么、哪些信息必须保留？

这篇报告研究的是人机连续协作中的 Omni 交互智能体，中文常称全模态交互智能体。输入是随时间持续到达的多模态流：一路是用户语音与环境声的音频流，一路是摄像头与屏幕的视频流，偶尔还有文本指令。输出不是 1 次性文本回复，而是两类并行产物：一是可被听见的流式语音，需要在合适时机开口、必要时打断或给出简短反馈；二是面向长任务的工具操作与文件改动，需要在后台持续执行并把中间进展以口语形式回传。必须保留的信息包括时间对齐的感知证据、对话历史、任务状态与权限边界，丢失任一都会导致抢话时机错误或任务执行与用户意图不一致。

为让研究生可复述，论文把目标拆成三项可检验能力：全方位感知与理解、连续低延迟双向交互、以及上下文推理与工具使用的智能体能力。检验方式不是单轮问答准确率，而是把交互本身作为建模对象：模型在每个 1 秒块内先看新到的音视频 token，再预测是否发言，避免把交互交给外部语音活动检测或端点检测器。图 1 把这种目标具象化为多类场景，上方是屏幕接地问答与边聊边做任务，右上是后通道与打断，左下是多人与噪声鲁棒，右下是视觉主动提醒，底部用两条色带区分实时交互与异步执行。

在阅读图 1 之前，先明确要对比的 5 类输入输出关系：屏幕问答需要视觉接地，边聊边做需要对话与后台执行并行，后通道与打断需要区分短确认与抢话，多人与噪声需要说话人指向，视觉提醒需要主动监测。带着这些对照再看图，才能把架构分工与数据构造对应起来，这段导读为理解像素细节提供了明确的观察顺序与比较基准。

> **看图路径：** 1. 先看五块面板各自的输入输出：屏幕问答、边聊边改代码、后通道与打断、多人噪声、视觉主动提醒；2. 再看底部 LIVE INTERACTION 与 ASYNCHRONOUS EXECUTION 两条色带如何同时指向中心的 OMNI AI ASSISTANT；3. 对比 Backchannel 与 Interruption 两条时间轴上波形重叠与文本插入的位置差异

[![原论文 Figure 1：Gander is an end-to-end model that unifies omni communication, realtime interactive engagement…](https://arxiv.org/html/2609.08977v1/omni_pic.png)](https://arxiv.org/html/2609.08977v1/omni_pic.png)

*论文图 1。原论文 Figure 1:：“Gander is an end-to-end model that unifies omni communication, realtime interactive engagement across diverse and complex scenarios, and agentic execution of multi step tasks in…”。*

论文图 1 的官方图注是 Gander 统一 Omni 通信、实时交互与多步任务智能体执行的端到端模型总览。像素层面左上 Screen Grounding Chat 展示用户问警告含义，模型结合屏幕上的上传限制给出回答；中上 Agentic Work While Chatting 展示用户先说查错修复再追加兼容性要求，模型在任务保持活跃的横带上依次经历搜索、检查、编辑、测试；右上 Backchannel 与 Interruption 用两条时间轴对比短确认与抢话的不同处理；左下多人交互用多条波形与电视噪声叠加仍聚焦讨论风险。

右下主动视觉提醒显示用户委托监测后模型在结果页出现时主动提示。中心企鹅形象与环绕的代码图像面板提示这是一个同时处理语音、屏幕与代码的助手，底部两条色带同时指向中心的 Omni 助手，说明实时与异步是并行而非串行关系。

理解这些场景后，才能判断后续架构为何要把听与说、交互与执行分开设计，而不是把所有压力都压到同一个自回归模型上。这种分工直接对应后文的小脑管交互、大脑管执行的两层设计。

### 同类工作在输入、目标与运行阶段上有何不同？

语音交互的演进可按输入与运行阶段划分。早期语音语言模型把交互交给外部语音活动检测决定何时开始与结束，模型只对切好的语音段做理解与生成，适合问答但难以处理犹豫、停顿、重叠与背景干扰。近期工作把交互时机放进模型内部：BayLing-Duplex 引入少量状态 token 让模型在流式生成中决定听、说与结束；Qwen-Audio-3.0-Realtime 把连续音频按块增量处理以降低延迟；Audio Interaction Model 让模型持续监听环境声并判断是否需要回应。

Seeduplex 强调在真实声学环境中区分相关语音与背景人声并保持可打断；GPT-Live 采用类似 Moshi 的全双工并行监听与发声。这些工作把问题从能否理解与生成语音，推进到能否持续监听、发声并自我调节参与状态，但多数仍以音频为中心，对视觉上下文的利用与评估较为受限。论文明确指出多数努力仍集中在音频交互，环境理解主要来自声学信息。

Omni 交互在输入上加入视觉与视频。Qwen Omni 系列在统一基座中融合多模态并支持流式语音生成；MiniCPM-o 4.5 提出 Omni Flow 把多模态输入输出放在统一时间轴上连续感知与生成，并展示基于环境观察的主动行为；JoyAI-VL-Interaction 把连续视觉流本身视为交互的一部分；SeedRealtime 进一步实现音频视觉全双工，用视觉消解语音歧义与时间指代。这类工作的共同点是把视觉当作随时间演化的交互信号而非静态上下文。

语音智能体在目标上从对话自然度转向任务完成。Qwen Audio Agent 提供实时语音运行时让智能体在保持通话的同时把复杂任务委托给后台工作流；GPT-Live with CodeX 与 Claude Voice Mode 把语音作为通用助手的持续入口。论文指出这些系统在真实工作流中仍面临用户中途改约束、追问、纠错，智能体需主动汇报中间结果、请求澄清，以及在多人与噪声下判断话语是否指向自己。Gander 的定位是把对话、感知与执行放进同一个连续过程，而不是把语音当作外部智能体的外壳。

区分这 3 条路线后，再看 Gander 要解决的矛盾就更清晰：既要像全双工语音模型那样在流上做交互决策，又要像智能体那样做长程工具执行，且两者不能互相阻塞。这也是后文脑与小脑解耦的直接动机。

### 要解决的两个核心矛盾是什么？

第一个矛盾是交互能力是否应作为模型内生能力。真实对话包含自发打断、智能体主动介入、噪声与多人、后通道等动态行为，难以用独立的语音活动检测与语音识别流水线可靠覆盖。更关键的是，交互应随基座智能一起扩展，而不是停留在外部编排层。论文为此提出把流式音视频与模型已生成文本按时间对齐切块，展平成统一自回归序列，并在每块内显式预测听或说，让交互状态成为模型预测的一部分。原文将此表述为两个基本问题之一，即交互必须是模型的内在能力还是外部模块组合。

第二个矛盾是单体同时满足低延迟响应与长程推理的张力。闲聊要求立即回应与持续上下文适应，复杂工作流要求多步规划、工具使用与持续执行。单体在两者间存在固有权衡。论文采用脑与小脑解耦：小脑负责实时多模态交互与对话控制，大脑负责复杂规划与智能体执行，二者通过工具调用与编排运行时持续交互。大脑被设计为免训练、可插拔，允许更强推理模型直接替换而无需重训交互核心，从而让推理能力的提升可传导到整体系统。

这两个矛盾直接决定了后续的架构分工与训练数据设计：前者要求块级控制与时序监督，后者要求可插拔的执行层与受控的委托接口。研究生复述时应先讲清为何外部模块不够，再讲为何单模型不够，最后引出两层架构的必要性。

### 整体架构如何分工与协同？

Gander 由三部分组成：前置小脑、智能体编排运行时、后置大脑。前置小脑是基于 Thinker-Talker 的实时全双工多模态模型，Thinker 负责语义理解与交互决策，Talker 负责语音合成，整体负责连续感知与交互通信；后置大脑是无需任务特定训练的通用执行智能体，可实例化为 Codex 或 Claude Code 等；编排运行时是两者之间的协调层，统一管理实时多模态推理与异步后台任务。

信息流按三视角组织。前置小脑先判断请求能否本地解决，简单对话与短程任务直接处理，复杂多步任务则通过结构化工具调用委托给大脑。调用通过专用特殊 token 包裹，定义 task_start 创建新后台任务、task_send 向已存在任务增量发送信息并支持 main 与 fork 两种路由、task_resolve 以 cancel、allow_once、allow_session、deny 4 种动作确定性控制生命周期。运行时把这些操作绑定到传输层确认的最终用户轮次，确保任务目标来自可信用户输入而非小脑自行生成的参数。

编排运行时还区分 lean 与 coordinator 两种控制模式。lean 模式直接执行小脑分类的任务动作，路径短、延迟低、确定性高，适合路由可靠的场景；coordinator 模式在小脑与网关间引入独立控制面模型，基于可信请求与有界系统状态生成执行指令，指定推理强度、提问策略、权限策略与结果投递策略，代价是额外模型调用与非确定性。网关作为持久编排核心，围绕 Project、Task、Run、WorkerEvent、Delivery 五实体管理状态转换、调度、工作区隔离、并发与权限。后置大脑除原生文件与命令行工具外，可调用 context_fetch 按引用与时间范围拉取任务上下文、memory_search 跨会话检索多模态记忆、share 向小脑回传重要发现与中间进展。

**实时交互 × 智能体执行：** 实时交互指在流式音视频上连续判断听、说、打断、简短反馈并给出语音回应；智能体执行指多步规划、工具调用、文件操作与异步长程运行。两者计算需求冲突，前者要固定节拍与有界上下文，后者要可变深度推理与状态保持；Gander 用小脑-大脑分工让实时交互在 128 块约 2 分钟滑动窗口内闭环，智能体执行在编排运行时的 Project、Task、Run、WorkerEvent、Delivery 五实体上异步推进，通过受信任务与策略隔离实现既不阻塞对话也不丢失任务状态。

在看架构图之前，先建立分工对照：小脑管每秒是否开口，大脑管多步是否做对，运行时管两者之间的可信绑定与状态隔离。带着这个对照再看箭头与服务，就能判断哪条路径是实时闭环、哪条是异步长程，这段导读明确了从左到右的主委托路径与自下而上的检索路径。

> **看图路径：** 1. 沿 User & Environment 到 Front Cerebellum 到 Agent Orchestration Runtime 到 Back Brain 的主箭头看任务委托与回传路径；2. 观察 Task Ledger 中 T1、E2、ACTIVE 与 Bind、Track、Fence 三操作的对应关系；3. 看底部 Summary、Scoped Multimodal Context、Memory 三服务如何被虚线 retrieve 连接

[![原论文 Figure 2：Gander consists of three components: the front cerebellum, the agent orchestration runtime, and…](https://arxiv.org/html/2609.08977v1/gender_arc.png)](https://arxiv.org/html/2609.08977v1/gender_arc.png)

*论文图 2。原论文 Figure 2:：“Gander consists of three components: the front cerebellum, the agent orchestration runtime, and the back brain.”。*

论文图 2 的官方图注是 Gander 由前置小脑、智能体编排运行时与后置大脑三部分组成。像素层面左侧用户与环境用胶片与波形表示实时音视频持续流入前置小脑，前置小脑内标注 Thinker-Talker 与感知、回应、委托三职责，绿色箭头指向中间运行时；中间任务台账示例行为 T1、E2、ACTIVE，下方绑定、追踪与隔离三图标对应绑定、追踪与隔离；右侧后置大脑顶部标注推理、检索、行动，内部已选工作器与下方工作器适配器用虚线框表示可插拔适配。

中间到右侧箭头标注可信任务加策略与反向事件，底部摘要服务、受限多模态上下文、记忆服务通过虚线检索与大脑连接，说明大脑并非直接消费原始流而是通过受控接口获取有界上下文。

该分工的教学意义在于把实时性与智能解耦：小脑保持固定节拍的交互闭环，大脑保持可变深度的任务推进，运行时保证两者之间的可信性与隔离性。

### 前置小脑如何实现流式感知与块级决策？

前置小脑的感知由视觉与声学两条并发编码器完成。视觉通路为兼顾任意分辨率与实时预算，采用任意分辨率切片：每帧切成若干切片，分别用 SigLIP 视觉变换器编码，再经基于查询的重采样器压缩到每切片固定少量 token，相对原始网格约 16 倍压缩，并在至多 448 乘 448 分辨率下运行以控制每帧 token 数。声学通路用流式分块语音编码器以约 50 帧每秒产出帧级特征，再经轻量多层感知机投影做 5 倍时序下采样至约 10 token 每秒，既保留音素与韵律线索，又使音频流与主干解码吞吐匹配。两路输出被投影到同一语言主干的 token 空间，并在共享时间轴上对齐。

在此之上引入流式块展平。连续交互按 1 秒固定窗口切块，每块是 3 段拼接：该窗口内观测到的音视频 token、一个预测的控制 token、以及模型决定在本块内发出的 N 个文本 token，N 可为零。多块首尾相连形成单一因果序列，主干在每块内先关注新到感知再生成输出，使每个发出 token 都以最新观测为条件。上下文通过 128 块的固定预算管理，约对应 2 分钟滚动感受野，超出时最旧块被逐出，最新块追加，保持每步推理成本有界。

控制 token 在每块输出段头部预测，取三值之一：listen 表示本窗口保持静默继续观察，输出段无文本；speak 表示在本窗口生成口语内容，后续 N 个文本 token 将被送往语音合成；interrupt 表示中止正在进行的发言，例如用户开始说话或场景变化使进行中回复过时。把是否说与说什么解耦，被报告为比两者纠缠更稳定的全双工行为。

**块展平 × 控制令牌：** 块展平指把连续交互按 1 秒窗口切块，每块内按感知到的音视频 token、控制令牌、N 个文本 token 的顺序拼接，再把多块首尾相连形成单一因果序列；控制令牌指每块输出段开头预测的离散决策，取值为 listen 保持静默、speak 在本块生成语音、interrupt 打断正在进行的发言。二者搭配把何时说与说什么解耦；组合后模型先看新到感知再决定是否发言，无需外部 VAD 也能在语义完整而非仅声学静默时才接管，从而稳定实现全双工与主动交互。

在看细节图之前，先记住块内顺序：先看视频与音频感知，再看听、说、中断控制，再看文本内容。这个顺序决定了模型是先判断时机再组织语言，而不是先写好句子再决定是否要说，该导读为核对展平块的内部排列提供了明确顺序。

> **看图路径：** 1. 看顶部 Ct-3 到 Ct+2 六个 1 秒块内 Video、User Audio、Assistant Audio 三行波形的对齐；2. 看 Flatten chunks 中 Ct-1 的 L 与 Ct 的 S 加 T1T2T3 如何对应 Listen 与 Speak 控制；3. 看底部 Thinker 到 Control Tokens 到 Content Outputs 到 Talker 到 Streaming Flow-Matching Decoder 的语音生成链路

[![原论文 Figure 4：Detailed architecture of the front cerebellum.](https://arxiv.org/html/2609.08977v1/interaction-v7.png)](https://arxiv.org/html/2609.08977v1/interaction-v7.png)

*论文图 4。原论文 Figure 4:：“Detailed architecture of the front cerebellum.”。*

论文图 4 的官方图注是 Detailed architecture of the front cerebellum，即前置小脑的详细架构，而图内底部大模块标题为 Full-Duplex Interaction Cerebellum，即全双工交互小脑。两者并不冲突：前者说明这是前置小脑的整体结构图，后者是图中实现块展平与语音生成的核心模块名称。像素层面顶部时间轴从当前块前后多块展开，每列包含视频奔马帧、用户音频波形、助手音频波形三行，当前块用蓝框高亮；中间上下文窗口用两条长条表示 128 块滑动窗口，标注最旧退出与最新进入。

下方展平块把前一块展开为视频与音频 token 后接听令牌，当前块展开后接说令牌与多个文本 token。底部全双工交互小脑左侧 Thinker 接收流式多模态编码器的视频与音频流，中间控制令牌列出听、说、中断、工具 4 类并行输出，内容输出区分文本与工具，隐藏状态连向 Talker，Talker 产出语音 token 再经流式匹配解码器得到音频输出并回指到顶部的助手音频，形成闭环。

语音生成进一步解耦语义规划与声学实现。主干不直接发声学单元，而是把最后一层隐藏状态经投影与文本 token 一起注入小型自回归语音 token 解码器，离散单元采用单码本低码率的有监督语义 token，文本与语音 token 在共享时间轴上交错生成以保持与环境的紧耦合。离散 token 再由流式匹配解码器以参考音频为条件重建梅尔谱并渲染波形，支持零样本音色控制，并以块级因果方式增量出波形，满足全双工的低延迟播放要求。

**Thinker × Talker：** Thinker 指基于大语言模型主干的语义与交互决策模块，负责理解块内的音视频 token 并预测控制令牌与文本内容；Talker 指轻量的语音 token 解码器与流式声码器，负责把 Thinker 的隐藏状态与文本转成离散语音单元再合成波形。二者搭配是为了避免让主干直接自回归高帧率语音单元而损失语言能力；组合后 Thinker 保持文本域推理与指令跟随，Talker 专注韵律与音色，文本与语音 token 在时间轴上交错生成，实现与观测环境紧耦合的低延迟连续播报。

该设计的学习要点是主干保持在文本域做推理，声学细节交给轻量下游模块，从而在人类语速节拍下维持实时交互而不侵蚀语言能力。

### 小脑与大脑在一次任务中如何来回？

以查错并兼容 Python 3.12 为例，流程分 4 个阶段。委托阶段用户说查找错误原因并修复，小脑回应马上处理并发出任务开始调用，编排运行时创建任务与执行实例并进入运行态。后大脑工作器执行检查仓库、复现错误、收集堆栈等步骤。

保持对话阶段用户追问哪个文件失败，小脑不打断后台执行，直接基于已收集的堆栈回答指向配置文件，此时任务轨道仍显示运行中，说明对话与执行并行。

修订任务阶段用户追加保持兼容性要求，小脑回应收到并发出任务增量发送调用，网关将旧运行标记为过期并隔离，创建新运行，工作器执行修订补丁、增加兼容支持等。

投递结果阶段后台显示正在监听与结果就绪，工作器完成兼容测试并标记已校验，随后进入排队待投递，小脑最终说修复完成且测试通过。整个过程中前置小脑负责把转录文本与相关末帧视频转给运行时，大脑通过 Codex 线程持续执行，用户可在任意时刻打断或改需求。

**小脑 × 大脑：** 小脑指前置的实时全双工 Omni 模型，负责每秒一块地持续感知音视频并决定听或说；大脑指后置的免训练通用任务执行智能体如 Codex，负责检索、改代码、跑工具等长程推理。二者搭配的原因是对话要求低延迟响应而任务要求多步规划，单体难以兼顾；组合后小脑通过 task_start、task_send、task_resolve 工具调用把转录文本与关键帧委托给大脑，大脑异步执行并通过 share 回传中间结果，小脑再把结果融进正在进行的对话，实现边聊边做且可随时改需求。

在看时序图之前，先按四列标题预判状态变化：委托应创建任务，保持聊天应保持运行，修订任务应出现分支与隔离，投递结果应出现校验与排队。带着这个预期再核对任务轨道与工作器的对应关系，该导读明确了自上而下 3 层的观察顺序。

> **看图路径：** 1. 按 Delegate 到 Keep Chatting 到 Revise Task 到 Deliver Result 四列看用户话轮与小脑回应的交替；2. 追踪 Harness Rail 中 T1、E1 running 到 T1、E2 再到 Validated、Queued 的分支与 Fenced 旧运行；3. 对比 Worker 在 E1 与 E2 两阶段的 Inspect、Trace 与 Revise、Test 任务差异

[![原论文 Figure 3：An example workflow illustrating cerebellum brain interaction, where users can engage in realtime…](https://arxiv.org/html/2609.08977v1/case-v5.png)](https://arxiv.org/html/2609.08977v1/case-v5.png)

*论文图 3。原论文 Figure 3:：“An example workflow illustrating cerebellum brain interaction, where users can engage in realtime conversation or modify previously assigned tasks while the back brain is…”。*

论文图 3 的官方图注是展示小脑与大脑交互的示例工作流，用户可在后置大脑执行期间实时对话或修改任务。像素层面最左列区分用户与小脑的实时交互行，中间任务轨道用创建任务、运行中、分支切换、已校验、排队待投递的横线表示状态机，虚线箭头把旧运行指向已隔离；最下层后台工作的大脑行按不同执行实例展示从检查到追踪再到修订与测试的演进，图标与文字一一对应，说明任务修订时旧运行被隔离而新运行继承任务目标。顶部四列分别为委托、保持聊天、修订任务、投递结果，用户话轮与小脑回应交替出现，后两列还包含监听中与结果就绪的后台提示。

这个例子说明小脑与大脑的协作不是 1 次委托就结束，而是对话、修订、隔离、校验的闭环，运行时负责保证旧运行不污染新运行的工作区。

### 训练数据如何构造以覆盖交互与智能体？

训练语料约 2.7M，分为四大家族。语音交互约 37%，包含基础对话、短问答、全双工交互语音与同声传译，监督何时听、何时说与何时让出话轮。音视频交互约 40%，来自 JoyAI-VL、LiveCC 与 Streamo，涵盖流式视频问答、叙事与主动视觉回应，经大模型做时序对齐修正与重写至平均每秒 8 token，再用语音合成模型合成用户语音。智能体交互约 13%，分为音频智能体 320.2K、Omni 智能体 36K 与工具辅助推理 3.4K，覆盖任务发起、追问、约束更新、澄清、进度查询、取消与最终投递的全生命周期。鲁棒与负样本约 8%，包括无关视频 116.2K、无指令环境 40.0K、抗干扰 64.7K 与多人交互 8.8K，用于在无关事件与非指向性输入下保持静默。

全双工交互语音的合成管线分 4 步。第一步收集对话内容，来源为 11.2K 场景与话题种子扩写的多轮对话，以及经口语适用性过滤的真实助手日志与公开对话，过滤掉以结构化标记、代码与链接为主的轮次，并按约束澄清、流程控制、用户纠错、失败服务入口、安全或紧急停止 5 类交互画像条件生成，避免打断动机单一。第二步标注两类事件：竞争性打断中用户在助手未说完时抢入，助手剩余词为隐藏延续，与用户语音重叠但不合成。

支持性后通道要求嵌入对方进行中话语、长度低于中文 8 字符或英文 6 词、且匹配 266 条中文与 170 条英文的 11 类意图词表，疑问与请求等被降级为普通轮次。第三步渲染与定时，仅用户通道用声纹克隆合成多说话人音频，助手轮次保留为时长占位，每轮赋予全局起始、时长与重叠区间，时序本身成为监督。

第 4 步质量控制，先用规则门槛剔除打断点不合语言学、重叠退化、泄露未听内容或交互未闭合的样本，再用大语言模型在自然度、助手连贯性、打断合理性与后通道合理性 4 维打分，阈值以下丢弃，重写样本再经一轮修复。最终 260.8K 对话的打断起点在被打断轮内分布广泛，且多数抢入直接以内容开头而非话语标记，避免模型把打断与少数固定词绑定。

**竞争性打断 × 支持性后通道：** 竞争性打断指用户在助手未说完时抢入，助手剩余未说出的词形成隐藏延续，与用户语音在时间上重叠但用户听不到；支持性后通道指用户在助手持有话轮时发出的短确认如嗯、对，助手不暂停继续说。二者分工在于前者要求模型让出话轮并截断输出，后者要求保持话轮忽略短插入；训练时通过长度阈值中文 8 字符英文 6 词、11 类意图词表与疑问请求等负向线索严格区分，并把打断与后通道的起止与重叠区间作为显式时序监督，避免模型把所有重叠都当成抢话或把所有短词都当成确认。

下表按原文分布整理语料构成，便于复现时核对比例与监督目标。表前先明确比较问题：在 2.7M 总量中，哪类数据主导交互时机、哪类主导视觉接地、哪类主导任务生命周期，指标方向是各类占比与监督目标是否对齐，公平条件是同一总量下的相对比例。

| Data family | Fine-grained category | Examples | Fraction | Main supervision |
| --- | --- | --- | --- | --- |
| Speech Interaction | Foundational dialogue | 539.4K | 20.00% | General spoken dialogue. |
| Speech Interaction | InteractionSpeech | 260.8K | 9.67% | Full-duplex turn-taking, interruption, and multi turn interaction. |
| Audio-Visual Interaction | Streaming video QA Streaming video narration Proactive visual response | 1.1M | 40.66% | Streaming video QA, event grounding, narration, and realtime visual interaction. |
| Agentic Interaction | Audio agentic interaction | 320.2K | 11.87% | Speech-driven task delegation and lifecycle interaction. |
| Robustness and Negative Data | Irrelevant video robustness | 116.2K | 4.31% | Robustness to irrelevant visual context. |
| Total | Total | 2.7M | 100.00% |  |

该表显示音视频交互占最大头 40.66%，语音交互中全双工行为虽仅 9.67% 却是交互时机的主要来源，智能体数据以音频为主 11.87%、Omni 为辅，鲁棒数据虽占比小但覆盖 4 类关键负向场景。复现时需保持这一比例，否则交互时机与静默控制的监督会失衡。未覆盖的细节是具体采样权重与去重策略，原文未报告，需在复现时自行记录，这是该表未能回答的边界。

### 在什么条件下测、与谁比、指标如何算？

评估沿三轴展开，分别对应系统不同参与度：全双工交互与工具使用考验完整系统，口语对话考验流式语音理解与生成，Omni 理解则退化为前置小脑的文本作答。论文强调 3 组分数不可直接通约，需分开报告，且每组内对比才有意义。

全双工交互采用 Full-Duplex-Bench 第三版的 100 个带工具的服务场景，含自然不流畅。指标分两类：任务准确率类为工具选择 F1、参数正确率、回复是否满足用户意图、以及要求工具集合完全正确且参数全对的严格通过率；交互行为类为在合适时机接管、抢在用户说完前开口、以及以占位语开头，其中占位语仅在 91 个未抢话且延迟分析有结论的场景上计算。实现上为端到端：音频进 Thinker、Talker 与声码器合成回复，再经语音识别转写后用 GPT-4o 打分，因此分数包含真实合成与识别误差。

为公平，对比的基线系统提示要求立即执行工具而非追问，但后置大脑收不到该提示，故在工作目录放置等价契约文件约束其行为，前置小脑提示保持不变。另设后置大脑单独对照，绕过小脑与音频路径，直接用用户轮次转写驱动同一智能体与工具服务，因无音频时间轴而不报告交互三指标。

口语对话在 SpokenQA 的 Llama 与 Web 问题及 VoiceBench 的 AlpacaEval 与 SD-QA 上共 2052 条语音上测试，语音直接进 Thinker、文本作答计分，开放式回答用 GPT-4o 评 1 至 5 分，基线表沿用 Audio-Interaction 的表格并按交互体制分组，重点在全双工组内比较，因为流式与轮式在是否需边听边判结束上约束不同。

Omni 理解在 WorldSense 3172 题与 Daily-Omni 1197 题共 4369 题选择题上测试，沿用上游评测的提示与 2 阶段答案抽取，精确字母匹配计分，抽不出答案计为错误，贪心解码保证确定性。该设置为轮式：整题 1 次性可见，不合成语音、不涉及大脑，衡量前置小脑的感知与推理。为量化跨模态融合，额外做 3 条件消融：音视频联合、仅视频、仅音频，共 13107 次推理。

所有结果来自同一 Gander 检查点，Talker 与流式声码器在需语音时挂载，解码参数与流式单元格式跨评估保持一致，前置小脑系统提示与训练时字节一致，无基准特定调优；涉及大脑时通过 Codex 工作器以 GPT-5.6 驱动，且仅可调用基准暴露的工具。

### 全双工交互是否在该赢的维度上赢了？

先看交互行为，这是全双工架构存在的理由。论文报告 Gander 在 100 个场景中全部在合适时机接管，接管率为 100.0%，仅与级联流水线持平，优于 GPT-Realtime 的 96.0% 与 Gemini Live 3.1 的 78.0%。抢话率为 8.0%，低于 GPT-Realtime 的 13.5% 与最弱基线的 47.9%，为表中最低。两者需联合解读：可通过等待更久来压低抢话，但会错过接管时机，Gemini Live 3.1 抢话 19.2% 却仅接管 78.0% 即为例证；级联流水线虽接管 100.0% 但抢话高达 33.0%，体现外部端点器仅凭声学静默而非语义完整性做边界判决的缺陷。Gander 两者兼得，支持把交互决策放在内容生成前并基于同一演进表示的判断。

任务准确率上 Gander 在端到端条件下落后但差距在表底附近。工具选择、参数正确、回复质量、严格通过率分别为 0.759、0.503、0.490、0.400，对比最弱基线的 0.794、0.513、0.510、0.410，差距较小；对比最强 GPT-Realtime 则差距更大。占位语为 51.6%，为交互三指标中唯一不领先者，但论文指出该指标衡量接管后到给出答案间的占位，与何时开口不同；对于需把工作委托给大脑而不能静默的系统，占位是保持话轮的合理行为，其高低反映委托频率而非时机缺陷。

为定位瓶颈，后置大脑单独对照绕过小脑与语音通道，直接用转写驱动同一智能体，工具选择达 0.934 超过表中所有系统，严格通过率 0.520 超过级联的 0.450，回复质量 0.740 超过级联的 0.600，说明执行层本身不是限制。端到端与该对照的差距来自两方面：是否自主决定何时委托，以及是否经合成与识别引入误差，回复质量从 0.740 降至 0.490 与此一致。论文认为两者属于训练格式与部署路径可通过改配方解决，而非架构缺陷。

下表补充口语对话的流式与轮式对比，表前先明确分组依据：流式模型需边听边判结束，轮式可等整句输入，指标方向均为越高越好，SpokenQA 与 SD-QA 为准确率，AlpacaEval 为 1 至 5 分，公平条件是重点在同体制组内比较。

| Model | Size | SpokenQA Llama Q. | SpokenQA Web Q. | AlpacaEval | SD-QA |
| --- | --- | --- | --- | --- | --- |
| Freeze-Omni | 7B | 72.00 | 44.73 | 4.14 | 50.16 |
| Baichuan-Omni-1.5 | 7B | 78.50 | 59.10 | 4.50 | 43.40 |
| Qwen2.5-Omni 7B | 7B | 75.33 | 62.80 | 4.49 | 55.71 |
| Audio-Interaction | 3B | 67.31 | 54.34 | 4.28 | 52.14 |
| Moshi | 7B | 62.20 | 26.30 | 2.01 | 15.01 |
| Gander | 9B | 75.60 | 59.30 | 3.96 | 46.84 |

该表显示 Gander 在知识型口语问答上达到 75.60 与 59.30，领先同组流式模型约 8.29 与 4.96 点，与轮式最强系统差距在 3 点以内，代价是开放式生成与口音鲁棒两列未进前三；论文同时报告这 2052 条样本中大脑从未被调用，说明路由策略对自包含问答保持克制，未因两层设计而引入额外延迟。未胜出项是 AlpacaEval 与 SD-QA 仍落后于同组 Audio-Interaction，这是交互训练偏重短轮次带来的可度量代价。

下表给出 Omni 理解的轮式文本作答结果，表前先明确条件：整题可见、不合成语音、不涉及大脑，衡量前置小脑感知与推理，分数为准确率，公平条件是与初始化基座的回归比较。

| Model | WorldSense | Daily-Omni |
| --- | --- | --- |
| Gemini 2.5 Flash | 52.60 | 79.30 |
| Qwen3-Omni | 54.00 | 70.70 |
| MiniCPM-o 4.5 | 55.70 | 80.20 |
| Gander | 49.62 | 78.53 |

该表的主收益是 Daily-Omni 几乎无损 78.53% 仅比基座 80.20% 低 1.67 点，代价是 WorldSense 回退 6.08 点至 49.62%；未胜出项是 2 基准均未超越基座，边界是该评估未涉及语音合成与大脑协作，因此不能推广到全双工条件下的理解能力。

### 模型是否真正融合音视频而非依赖单一模态？

为回答是否真融合，论文在同一题集上做 3 条件消融：音视频联合、仅视频、仅音频。WorldSense 上联合 49.62%、仅视频 44.61%、仅音频 43.32%，融合增益为联合减去单模态较优者即 5.01 点；Daily-Omni 上联合 78.53%、仅视频 59.40%、仅音频 57.81%，增益 19.13 点；总体联合 57.54%、仅视频 48.66%、仅音频 47.29%，增益 8.88 点。单模态间差距在 WorldSense 仅 1.29 点、Daily-Omni 仅 1.59 点，说明无主导模态，联合提升不是追随更强单流。

增益大小与任务对齐需求相关。Daily-Omni 考音频视觉时序对齐，单流均不足，增益达 19.13；WorldSense 考细粒度感知属性常可由单模态完成，增益仅 5.01。若仅做特征拼接而不做时序对齐推理，不会出现这种随任务需求变化的增益差异，因此结果支持模型在块展平的时间轴上真正做了跨模态整合。论文将此作为融合证据而非拼接假象。

下表整理该消融，便于复现时核对增益计算口径。表前先明确指标方向：联合越高越好，增益为联合减单模态最优，单模态接近说明无主导流，公平条件是同一题集与同一贪心解码。

| Benchmark | AV | Video | Audio | Fusion gain |
| --- | --- | --- | --- | --- |
| WorldSense | 49.62 | 44.61 | 43.32 | +5.01 |
| Daily-Omni | 78.53 | 59.40 | 57.81 | +19.13 |
| Overall | 57.54 | 48.66 | 47.29 | +8.88 |

该表的主收益是 Daily-Omni 近 20 点的融合增益，代价是 WorldSense 增益较小，提示后续若要提升细粒度感知，需补充针对静态属性的监督而非仅靠交互数据。未评测边界是该消融为轮式选择题，未覆盖流式打断与噪声下的融合鲁棒性，因此不能把该增益推广到连续交互的每一步。

### 哪些边界尚未验证、哪些代价需要权衡？

首先，交互与任务准确率的权衡尚未完全解耦。端到端严格通过率 0.400 为表中最低，虽大脑单独可达 0.520，但两者差距说明委托时机与语音通道误差仍影响最终任务成功率。占位语 51.6% 虽被解释为保持话轮的合理占位，但在用户体验上仍是可感知的等待成本，需在后续配方中明确占位话术的触发阈值与时长控制。

其次，Omni 理解的回退具有任务选择性。WorldSense 回退 6.08 点而 Daily-Omni 仅 1.67 点，且视觉塔已冻结，说明损失来自回答行为而非编码器。交互语料中无关视频负样本教会模型忽略无关事件，这对鲁棒性有益，却可能抑制对静态细粒度属性的关注。论文未报告在噪声、多人重叠与后通道同时出现的复合压力下的误触发率与延迟分布，因此不能把总体增益推广到每组每步。

再次，训练与部署成本未量化。报告未给出训练资源、推理开销、输出帧率与端到端延迟的实测数，也未报告在不同口音与长篇生成上的覆盖度。脑与小脑协作目前主要依赖语音识别转写与末帧视频作为大脑输入，更丰富的双向结构化通信、记忆与长上下文管理仍列为未来工作。评估层面，现有基准多孤立考核 Omni 理解、全双工或智能体执行，缺乏统一的 Omni 交互智能体框架，尤其缺乏对小脑与大脑间通信与协调的度量。

这些限制意味着不能把相关性当因果，也不能把总体趋势当每步成立；在未测量误判率与延迟前，不应承诺这些量已改善。论文将此作为开放挑战而非已解决结论，研究生应将其视为后续验证清单。

### 要复现与复用，需要准备什么、按什么顺序做？

复现前先明确可复用产物与信息条件。论文称将发布 Gander 的模型权重、代码与数据，项目演示页当前可用，代码仓库本次未能确认可达，因此本解读仅依据报告文本，不对下载可用性做额外承诺。复现时应以同一检查点为起点，保持 Talker 与流式声码器挂载、解码参数与流式单元格式跨评估一致、前置小脑系统提示与训练时字节一致。

数据侧按四大家族比例准备。语音交互侧需复刻全双工数据的 4 步管线：话题种子扩写与口语适用性过滤、竞争性打断与支持性后通道的严格区分与时序标注、仅用户通道合成与时长占位、规则与大模型 4 维打分过滤；音视频侧需经时序对齐修正与重写至平均每秒 8 token；智能体侧需按任务范式到家族的层次采样与交互模式组合，用大模型合成带时间戳的小脑与大脑轨迹并经任务一致性等过滤；鲁棒侧需配齐无关视频、无指令、抗干扰与多人 4 类负样本。

模型侧按组件顺序搭建。先实现视觉任意分辨率切片与 SigLIP 编码加查询重采样至约 16 倍压缩、音频每秒 50 帧编码加 5 倍下采样至每秒 10 token 的双流投影；再实现 1 秒块展平与 128 块滑动窗口，并在每块头部预测听、说、中断三值控制；再接入 Thinker-Talker 与流式匹配声码器，保持文本与语音 token 交错生成与块级增量出波形。随后搭建编排运行时，实现五实体与两种控制模式，绑定任务开始、发送、解决到可信用户轮次，并通过 Codex 线程实现大脑的上下文拉取、记忆检索与共享接口。

评估侧严格复刻协议。全双工用 100 场景端到端跑分，含合成与识别误差，用 GPT-4o 打回复质量，并在工作目录放置等价契约以对齐大脑与基线的执行要求；口语对话在 2052 条语音上按体制分组对比；Omni 理解在 4369 题上做贪心精确匹配，并补做 3 条件融合消融以核对增益口径。

何时值得尝试该方案：当应用需在持续音视频流上实现可打断对话并同时执行长程工具任务，且可接受为交互时机优化而在端到端任务准确率上略低于纯文本智能体的权衡时；若任务以静态细粒度视觉问答为主或对占位话术零容忍，则需先补充相应监督或调整委托阈值。

### 如何一句话记住取舍与下一步？

Gander 把交互本身放进模型预测，用 1 秒块展平与每块控制令牌让小脑在流上决定听、说与打断，用脑与小脑分工与编排运行时让大脑在后台做长程执行，从而在保持口语问答与 Daily-Omni 接近基座的同时，把抢话压到 8.0% 并保持 100% 合时接管。代价是端到端任务准确率与 WorldSense 细粒度感知出现可度量的回退，且占位率与复合噪声下的鲁棒性仍需更精细的配方与评估。

下一步的可验证改进包括：扩充长篇生成与口音覆盖的语音数据、为 WorldSense 类任务补充静态属性监督、优化委托阈值与占位策略以降低占位感知成本、丰富小脑与大脑间的结构化双向通信与记忆管理，并在统一的 Omni 交互基准上度量协作质量而非孤立能力。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2609.08977)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.2-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-10 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-10/)
