---
title: "DuplexAct: How Interactive Are Frontier Full-Duplex Spoken Language Models?"
date: 2026-10-15
draft: false
tags: [全双工语音交互, 基准设计, 基准测试, 语音]
categories: [论文速递]
description: "DuplexAct 把边听边说的交互拆成 8 个动作和 24 种条件，用立即执行与后续跟进两段成功率评价 14 个模型，发现能力分布不均且后续跟进普遍偏弱。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.17738"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "DuplexAct：如何按动作评价全双工语音模型的交互能力"
paper_digest_original_title: "DuplexAct: How Interactive Are Frontier Full-Duplex Spoken Language Models?"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.17738v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.17738v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.17738v1.pdf"
paper_digest_primary_task: "全双工语音交互"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "DuplexAct 把边听边说的交互拆成 8 个动作和 24 种条件，用立即执行与后续跟进两段成功率评价 14 个模型，发现能力分布不均且后续跟进普遍偏弱。"
paper_digest_authors: [{"affiliations":["The University of Melbourne","University of Birmingham"],"name":"Jiaheng Dong"},{"affiliations":["Wuhan University"],"name":"Shihong Tan"},{"affiliations":["Wuhan University"],"name":"Gongping Huang"},{"affiliations":["The University of Melbourne"],"name":"Jean Honorio"},{"affiliations":["University of Birmingham"],"name":"Abhirup Ghosh"},{"affiliations":["The University of Melbourne"],"name":"Ting Dang"}]
paper_digest_abstract_sha256: "e8e7801febdba63c82ab83993e30ed7b3e09c3d4e5309ff7a80e84ce1edd3bc4"
paper_digest_sidecars: {"citation.bib":{"sha256":"a02cc6768cbb62e84a57543f5d3b034286a4f575eff6521c86c1a596a80ea16d","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17738/citation.bib"},"citation.json":{"sha256":"57e037ecf1e9ee2edc544de63d81bc281b21b63acca687a97f40c61a38050166","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17738/citation.json"},"citation.ris":{"sha256":"b28854d22d2e0b6e1fb85df79ad4e0568f4aa3dfa502908bda272df964ae451e","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17738/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"cd5519d0f11a7aa5ee610349257ed306244873f039966ed3679dcb680c29285d","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-17738/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "113e17fbfe14dc6fa192122ea446f781376b5cdef594917ded4d3306b9349c8a"
paper_digest_api_reader_plan_sha256: "413c80cc9afa9992bab91bb61f53e1c8f3a170ae61374cea2d45844ce503b1a9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "b47b7ddf6c82c96abdaa4ecf0e02941cecdeb8b27032fa97c9e957d32a57a574"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "28bd4ac9d1ab2dca01a6ee63d027942039e1686cc35ed8d22b8631ee78515491"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "232e4f07df3c217e609e5e4013a83bcfc0d90f34fea1f5950b99866a296d3f8a"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "6eb28f04adcd7ea4e51f36b9940634dd16edd77b9f8ef3c39ba90585713cdf26"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 DuplexAct：如何按动作评价全双工语音模型的交互能力

> 英文题目：*[DuplexAct: How Interactive Are Frontier Full-Duplex Spoken Language Models?](https://arxiv.org/abs/2610.17738v1)*

> 标签：#全双工语音交互 | #基准设计 | #基准测试 | #语音
>
> 评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Jiaheng Dong：The University of Melbourne；University of Birmingham
- Shihong Tan：Wuhan University
- Gongping Huang：Wuhan University
- Jean Honorio：The University of Melbourne
- Abhirup Ghosh：University of Birmingham
- Ting Dang：The University of Melbourne

## 📌 核心摘要

端到端全双工口语语言模型需要在边听边说中决定是否开口、何时开口及开口后如何延续，难点是在打断、迟疑停顿和背景人声下选对动作并保持语义连贯。DuplexAct先把交互形式化为参与状态、交互动作与交互条件三层分类，输出说话或沉默下的8个动作及24个动作适用的对话情境，为评测提供可判定的动作空间。再据此构建4691个实例、总时长12.44小时的数据集，其中2531个从真实录音抽取实质话轮并施加时序约束，其余2160个对覆盖不足的动作—条件对受控合成，实例携带的固定音频与线索进入评测。评测按是否依赖模型正在输出分为直接重放与模拟器交互两路，前者按固定时间线播放输入并记录输出，后者由语言模型模拟器观察流式转录与参考回答决定注入固定录制线索的时机，两路输出均接受即时执行规则检查与后续跟进清单检查。在DuplexAct直接重放评测中按即时执行成功率比较，按时接话上Qwen3.5-Omni-Flash-Realtime为41.3%高于GPT-Realtime-2.1的27.5%，而模拟器交互评测的恢复动作即时执行成功率上Gemini 3.1 Flash Live为97.0%高于GPT-Realtime-2.1的77.7%。同样在模拟器交互评测中按后续跟进成功率比较，保持话轮上Gemini 3.1 Flash Live为57.3%高于GPT-Realtime-2.1的39.3%，而恢复动作后续跟进上GPT-Realtime-2.1为90.3%高于Gemini 3.1 Flash Live的78.6%，说明即时成功后仍常丢失后续推理。该结论仅适用于14个受测模型在给定重放与模拟器时间线、固定线索及转录依赖评测下的表现，未验证真实双人实时对话、其他语种与更长干扰下的泛化，模拟器定时与转录误差也可能改变判定。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/JiahengDong/DuplexAct> — 链接不可用（HTTP 404）

- 数据相关资源：<https://github.com/JiahengDong/DuplexAct> — 链接不可用（HTTP 404）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 全双工语音交互要解决什么输入输出问题

这篇论文研究的是能边听边说的语音模型在真实对话流中如何参与。输入是连续的双通道语音时间线，一边是用户不断到来的语音，另一边是模型自己正在生成的语音，中间会出现停顿、重叠、背景人声和打断。模型的目标不是等一整轮结束再回答，而是在流展开过程中持续判断现在该沉默、该给短反馈、该接话、该让出话轮，还是该主动打断。输出同样是带时间戳的语音行为，包括何时开始说、何时停下、说了什么内容。

必须保留的信息是时间对齐关系：谁在何时说话、重叠了多久、模型在用户提示后多久反应。评价时只看最终文本答得好不好是不够的，还要看动作时机和后续对话是否衔接。对刚入门的读者，可以把任务想成开车并线：不能只看最后到了哪里，还要看并线时机和并线后是否顺着车流走。

**全双工语音模型 × 端到端：** 全双工语音模型指能同时连续听和说、不需要固定轮流边界的语音交互模型；端到端指把听、决策和说放在同一个生成模型里完成，而不是拆成多个独立模块。两者搭配后，交互控制变成模型在对话流中自己决定是否、何时、如何参与，评价就要看连续过程中的动作选择，而不只是单轮问答质量。

### 已有评测为什么只看到动作出现没看到成功

论文把已有全双工评测放在同一张对比里看。那些评测有的只覆盖轮流接管、短反馈和打断中的一部分，有的按重叠语音这种现象组织，而不是按模型应该做什么动作组织。更关键的是指标多为接管率、响应延迟和短反馈出现频率，记录的是行为有没有发生、发生得多快，没有检查发生之后对话是否成立。打断时恰当反馈和 disruptive 的反馈在出现频率上可能得分一样，但只有前者算听懂了。

论文还指出，已有工作把应该做的动作和出现该动作的对话条件混在同一层，例如把用户停顿和用户打断与模型接管并列，粒度不同就难以按动作比较模型能力。这不是说已有评测没有价值，而是在输入目标和监督阶段相同的前提下，它们回答的是更窄的问题。本文要补的是结构化的动作空间和分两段的成功标准。

### 论文把交互能力拆成哪三层

论文提出三层划分。最底层是可观察的参与状态，只有说话和沉默两种。中间层是 8 个交互动作，是评价的核心，包括 Take Turn、Hold Floor、Stop、Interrupt、Backchannel、Wait、Ignore 和 Recover。最上层是动作发生的对话条件，共 24 种动作条件对，例如同样是接话，可以是在复杂转折后延迟进入，也可以是在信息已齐时轻微重叠进入。举例来说，同样是保持沉默，Wait 是因为当前说话人还保留话轮所以等待，Ignore 是因为当前声音本来就不需要模型参与所以不理会，两者在底层都显示为沉默，但上层条件和后续要求完全不同。这种分层让评价能同时问两个问题：模型会不会做这个动作，以及能不能识别条件并调整做法。

### 两段成功标准和两条评测管线如何分工

每个测试样本都要过两段判定。立即执行看在目标交互点是否按时做出期待动作，用规则自动判断，例如是否在规定响应窗内开始实质回应、被打断后是否终止当前轮。后续跟进看动作之后的走向是否还与该动作一致，用 GPT-5.4 按动作专用的检查表判断，例如恢复后是否按打断要求调整、表示疑惑的短反馈后是否问出相关后续问题。

论文报告两个成功率：立即执行成功率是满足立即标准的样本比例，后续跟进成功率是在立即成功样本中又满足后续标准的比例，按每个动作下属条件做微平均。数据管线分两条：输入音频已完全决定评价条件的用直接回放，把固定音频按模型需要的输入帧率播出并同时录制输出；交互时机依赖模型正在说什么的用模拟器回放，由语言模型控制器决定何时插入预录的用户提示音，但提示的内容和音频保持固定。

**立即执行 × 后续跟进：** 立即执行指模型在目标交互点是否按时做出期待的动作，如该停就停、该接就接；后续跟进指做出动作之后的行为是否还与该动作一致，如打断后是否说出应有的干预内容、等待后是否吸收了新信息。两者搭配后，评价从只看出现一次的行为，扩展为看动作在对话展开中是否成立，能发现只学会表面时机但没理解后果的模型。

> **看图路径：** 1. 沿 A 到 D 看主路径：动作分类、数据构造、交互管线、定义与评价如何衔接；2. 比较 B 中上路真实语料筛选与下路受控合成在输入和输出上的差别；3. 看 C 中直接回放与模拟器回放在何处引入模拟器语言模型

[![原论文 Figure 2：Overview of the DuplexAct benchmark framework.](https://arxiv.org/html/2610.17738v1/ICLR-framework-curation-final.png)](https://arxiv.org/html/2610.17738v1/ICLR-framework-curation-final.png)

*论文图 2。原论文 Figure 2:：“Overview of the DuplexAct benchmark framework.”。*

上图是论文的整体框架。左侧动作分类把沉默和说话两类状态展开为 8 个动作和下属条件；中间数据构造分上下两路，分别对应真实语料筛选和受控合成；右侧交互部分区分直接回放和模拟器回放，最右则是两段定义与评价的对应关系，立即执行走规则，后续跟进走语言模型判断。读懂这张图就能复述论文的方法主线。

### 八个动作各自要求模型做什么

Wait 要求在指定的等待区间内不做实质回应，短于等于 3 个词的片段按短反馈处理，不算抢话；之后若回应，要能反映等待期间或之后的用户新信息。Ignore 要求在干扰区间内不做实质回应，之后回应不引用、不回答、不把被忽略的内容当事实。Take Turn 要求在条件规定的响应区间内开始实质回应，之后要顾及用户意图和其中的事实、限制与修正。Backchannel 要求在用户保留话轮期间给出简短反馈且不抢话，还要区分肯定类和疑惑类，之后的行为要与该反馈表达的立场一致。

Stop 要求用户实质打断时终止正在说的一轮，之后在用户干预持续期间保持让出。Hold Floor 要求在不需让出的提示到来时不让出，并在提示结束后按条件继续、缩短、简化或不受干扰地保持原线程。Recover 要求被打断后重新进入，并在恢复中按打断要求总结、重复、追问、补充、换题或修正。Interrupt 要求在用户还在说且需要干预时提前足够时间抢入，并说出与求助或安全情境相符的干预内容。

**轮流管理 × Take Turn：** 轮流管理是人类交互能力中关于开始、维持、结束和打断发言的一组做法；Take Turn 是它在本文动作空间里的一个具体动作，指在合适时机开始一次实质性回应。它与上层概念的分工是：轮流管理说明要管什么，Take Turn 说明模型在这类时刻到底要做什么，后续用响应时间窗和回应内容来判定是否做对。

**交互式倾听 × Backchannel × Wait：** 交互式倾听指听者在一边听一边让对方感到被接收的做法；Backchannel 是其中短促的反馈信号，如表示肯定或疑惑但不抢话筒，Wait 是用户保留话轮时保持沉默并等待。两者分工不同：Backchannel 要发出恰当的短反馈，Wait 要求不发出实质回应；组合起来才能区分积极的听和基本的沉默等待。

> **看图路径：** 1. 先看顶部三块分区：轮流管理、交互式倾听、破裂修复各包含哪些动作；2. 再看每个动作卡片下方的立即区间与后续区间在时间轴上的先后关系；3. 对照用户语音、模型语音与沉默三类图例理解谁在说话

[![原论文 Figure 1：Overview of the DuplexAct interaction action space, with example conditions and high-level…](https://arxiv.org/html/2610.17738v1/DuplexAct_Interactions_space.svg)](https://arxiv.org/html/2610.17738v1/DuplexAct_Interactions_space.svg)

*论文图 1。原论文 Figure 1:：“Overview of the DuplexAct interaction action space, with example conditions and high-level immediate execution and subsequent follow-through behaviours for each action.”。*

上图把 8 个动作按轮流管理、交互式倾听和破裂修复分组展示。每张卡片给出一个例子、立即区间与后续区间的示意，以及两段行为的高层描述。可以看到同样是说话或沉默，不同动作在时间轴上的位置和后续要求明显不同，这正是论文强调按动作分别评价的原因。

Take Turn 的响应时间窗按条件写成以用户语音结束为零点的区间：

\[W_{c}^{\mathrm{TT}}=\begin{cases}[0,\,0.5]\,\mathrm{s},&\text{\emph{immediate}},\\ [0,\,3.0]\,\mathrm{s},&\text{\emph{delayed}},\\ [-1.0,\,0.5]\,\mathrm{s},&\text{\emph{slight overlap}}.\end{cases}\]

Interrupt 的有效打断区间要求在用户话语结束前至少 1.0 秒进入：

\[W_{i}^{\mathrm{Int}}=[t_{i}^{\mathrm{user,start}},\,t_{i}^{\mathrm{user,end}}-1.0\,\mathrm{s}].\]

Recover 的有效恢复区间允许在打断结束前 2.0 秒到结束后 5.0 秒内进入：

\[W_{i}^{\mathrm{Rec}}=[t_{i}^{\mathrm{interruption,end}}-2.0\,\mathrm{s},\,t_{i}^{\mathrm{interruption,end}}+5.0\,\mathrm{s}].\]

Stop 的让出延迟定义为被打断时正在说的一轮的结束时刻减去提示开始时刻：

\[L_{i}^{\mathrm{yield}}=t_{i}^{\mathrm{yield}}-t_{i}^{\mathrm{cue,start}}.\]

### 本研究训练了什么没有训练什么

本研究没有训练新的全双工语音模型，也没有报告新的模型权重训练过程。它的构造工作是评测集的构造与标注流程。真实部分从 CANDOR、AMI、Loqui 和 CORAAL 4 类语料中按动作的结构信号初筛候选，例如说话人转换、重叠语音、无模型回应的用户语音，再用 GPT 5.4 确认动作与条件标签，只有 2 阶段都通过才保留。

合成部分在真实样本不足的 11 种动作条件下，用 GPT-5.4 按场景、动作、条件和背景设定分层提示生成对话文本，再用 ElevenLabs v3 的多种人物配置合成语音，并对他人指向语音和背景语音做衰减、滤波和回声等声学处理。人工验证在 10% 样本上每条由 5 人独立判断，动作与条件标签的多数一致率作为可靠性证据。评价时调用的被测模型和判断用模型都是已有实现，论文没有给出被测模型内部梯度、参数冻结或更新方式的统一说明，因此不能从模型名字推断其训练实现细节。

### 数据规模与模型评测条件是什么

评测集覆盖 4 个场景：日常闲聊、会议、客服和面试，包含真实交互和受控合成两部分。输入音频为 16 kHz 单声道，按各系统需要重采样，开源模型用官方推理设置在 A100 上运行，输出与输入共享时间对齐轴。直接回放的 4 个动作在全部 14 个模型上评测，模拟器回放的 4 个动作只在支持双向实时交互与流式转写的 10 个模型上评测。转写多用 whisper-1，个别模型用原生流式转写以减少时间抖动影响。模拟器控制器每 1 秒查询一次以决定提示时机，若一直没有合适时机则强制插入，但是否计入评价还要看提示实际发生时模型是否正在说话。后续跟进只在立即执行成功且满足适用要求的样本上评价。

**直接回放 × 模拟器回放：** 直接回放指把固定音频按原时间线播给模型并同时记录输出，适用于交互时机只由输入决定的动作；模拟器回放指用语言模型控制器观察模型输出并决定何时插入预录的用户提示音，适用于时机依赖模型正在说什么的动作。两者分工是按触发方式选择可复现的交互管线，组合后覆盖全部八个动作而不改变提示内容本身。

下面这张表说明比较问题：在多大样本、多长音频、多大人工验证支持下谈结论。表前已说明公平条件是同一套动作条件与时间对齐管线，指标方向是成功率越高越好。

| 数据组成 | 样本量 | 音频时长 | 人工验证 | 覆盖场景 |
| --- | --- | --- | --- | --- |
| 真实与合成总数 | 4691 | 12.44 h | 动作标签多数一致 97.9% | 日常闲聊、会议、客服、面试 |
| 其中真实录制 | 2531 | 12.44 h 内 | 条件标签多数一致 95.5% | 4 类场景混合 |

总量 4691 与真实 2531 的拆分说明超过一半来自真实对话录音，其余为针对稀缺条件的合成补充；12.44 小时是全部音频时长；人工验证的两个多数一致率说明标签可靠性，但只覆盖 10% 抽样，不能推广为对模型判断正确率的保证。该表的限制是只描述数据规模与标签一致性，不直接证明模型能力，模型结论还要看按动作拆分的成功率。

### 场景差异说明了什么迁移限制

论文按日常闲聊、会议、面试和客服 4 个场景比较模型中位成功率与四分位区间。高成功动作如等待、忽略无关语音和被打断后停止，在不同场景下保持较稳，说明其交互规范跨场景共享较多，从一类场景学到的能力较易迁移。但场景特性仍会影响立即执行，例如会议中等待偏弱，可能与训练多为节奏更快更短的日常意见交换，而会议中说话人会用较长停顿保持话轮有关。

差异在比较立即与后续时更明显：模型可能靠局部声学或轮流线索在各场景做出相似的表面动作，但后续回应因训练时对对话上下文 grounding 不足而难以迁移。这意味着全双工训练需要覆盖更广的场景规范与上下文，而不能只增加同一类对话的数据量。

### 立即执行上模型能力为何不均衡

先看立即执行的总体形态。同样要求沉默，Wait 与 Ignore 的全部模型中位立即成功率明显分开；同样要求进入话轮，4 个闭源模型在 Recover 上较高而在 Take Turn 的规定响应窗内较低。这说明会做一个动作不等于会做另一个表面相似的动作，必须按动作分别评价。针对性监督带来局部优势：带专用短反馈标记与损失的模型在 Backchannel 上为开源最高，明确训练过用户打断的模型在 Stop 与 Recover 上较高，但没有模型在全部动作上都稳定偏高。条件级差异进一步说明问题：Take Turn 在延迟进入上较高而在立即进入和轻微重叠上较低，Recover 在 6 个条件下相对稳定，困难主要不在是否进入话轮，而在是否按条件调整进入时机。

下面这张表是动作定义的原文对照，说明每个动作两段标准与条件约束的来源，比较问题是成功判定是否按动作区分。

| L1 Action | L2 Condition | Definition | Illustrative Example |
| --- | --- | --- | --- |
| Wait | Intra-sentential pause | The user pauses within an unfinished sentence while retaining the floor; the model should remain silent until the turn continues. | ‘I’m thinking [pause] when I want something to entertain myself…” |
|  | Inter-sentential pause | The user pauses after completing a sentence but continues the same turn; the model should remain silent rather than treating the sentence boundary as turn completion. | ‘I gotta drive here and drive there. [pause] California I can pretty much walk anywhere…” |
|  | Background speech | Unrelated third-party speech occurs in the background during the user’s turn; the model should ignore unrelated background speech. | User discusses relaxing in a park; background speaker says, ‘Don’t forget the frisbee!” The model responds only to the park discussion. |
| Take Turn | Immediate | The user’s aim and required response are established before turn completion, with only a final key entity arriving at the end; the model should respond immediately after the turn ends. | ‘I need an update because the event is coming up on June 18.” The final date completes an otherwise predictable request. |

该表来自论文的动作条件定义表，完整保留 8 个动作在立即与后续两段的成功标准及条件约束。它表明 Wait、Ignore、Take Turn 等动作的立即标准都与时间窗或干扰区间绑定，而后续标准分别指向上下文吸收、排除干扰、意图满足等不同要求。限制是它只给出判定规则，不包含模型得分，实际能力高低要结合得分表看。

下面这张模型得分表是核心定量结果，比较问题是在相同管线下不同模型的动作级立即与后续成功率。

| 模型与动作 | 立即成功率 | 后续成功率 | 触发条件 | 可运行性 |
| --- | --- | --- | --- | --- |
| Raon-SpeechChat Backchannel | 31.0% | 待后续表 | 用户保留话轮 | 实际运行开源模型 |
| BayLing-Duplex Stop / Recover | 98.8% / 49.0% | 待后续表 | 用户打断正在回应 | 实际运行开源模型 |
| Moshi Interrupt | 67.5% | 后续失败近 100% | 用户说话中需干预 | 实际运行开源模型 |
| 闭源 4 个模型 Recover / Take Turn 立即 | 77.7–97.0% / 27.5–41.3% | 待后续表 | 进入话轮两类条件 | 实际运行闭源接口 |
| 全部模型 Wait / Ignore 立即中位 | 94.0% / 75.4% | 待后续表 | 保持沉默两类条件 | 跨模型中位统计 |

Backchannel 的 31.0% 是开源中的最高值，但绝对值仍然不高；Stop 的 98.8% 与 Recover 的 49.0% 出现在同一模型上，说明针对打断的训练只改善了覆盖到的动作；Moshi 在 Interrupt 上立即值不低但后续几乎全部失败，提示立即成功会高估真实干预能力；闭源模型在两类进入话轮动作上的区间差距，以及 Wait 与 Ignore 的中位差距，都支持能力不均衡的判断。该表的限制是数值为按条件微平均后的动作级汇总，掩盖了条件内差异，且模拟器动作只覆盖 10 个模型，不能直接与 14 个模型的直接回放动作比较样本量。

> **看图路径：** 1. 先区分左右两块面板分别对应直接回放与模拟器回放的哪些动作；2. 再看颜色深浅表示的后续跟进失败率，灰色表示没有进入后续评价；3. 比较同一模型在不同动作行上的颜色差异

[![原论文 Figure 4：Follow-through failure rate (1-S) after successful immediate execution.](https://arxiv.org/html/2610.17738v1/figure3_ftf_heatmaps.png)](https://arxiv.org/html/2610.17738v1/figure3_ftf_heatmaps.png)

*论文图 4。原论文 Figure 4:：“Follow-through failure rate (1-S) after successful immediate execution.”。*

上图是后续跟进失败率热图，左侧为直接回放动作，右侧为模拟器回放动作，灰色表示没有立即成功样本可进入后续评价。可以看到 Take Turn 与 Interrupt 等行颜色普遍偏深，而 Stop 行普遍偏浅；同一列模型在不同行之间差异很大，与立即成功率高低并不一致。这支持论文的核心判断：只看是否出现动作会漏掉后续是否成立的问题。

### 从复述角度再看关键步骤与数字

复述时抓住一条样本的旅程即可。先确定它属于哪个动作与条件，例如用户句中停顿对应 Wait 的句中停顿。按直接回放播出固定音频，检查等待区间内有无实质模型语音；若通过，再把等待前后用户语音与模型后续回应送入判断，看回应是否吸收新信息。模拟器样本则先播出引导语引出模型说话，再由控制器决定插入预录提示的时刻，之后按区间判断是否维持话轮或是否停止，并判断恢复或打断内容是否符合条件要求。

记住论文直接报告的锚点数字：总量与真实量的拆分、人工验证的两个多数一致率、条件级 Take Turn 的 3 个值与 Recover 的稳定区间、Hold Floor 缩短与简化的后续低值，以及闭源模型在两类后续上的高低反差，就能在不夸大单模型胜负的前提下讲清全文。

### 条件拆分与后续跟进揭示了什么失败

条件拆分显示，Hold Floor 在继续、缩短、简化 3 类要求下的立即成功率都较高，但后续成功率只在继续上保持较高，在缩短与简化上大幅下降。模型能识别到不该让出话轮，却常常不理解用户提示的意图，也就不知道该如何调整正在说的内容。后续跟进的失败在简单动作上也存在：有的模型在等待区间成功保持沉默，但之后没有吸收等待期间出现的信息。

论文还比较了基座推理能力是否自动迁移：闭源模型在 Take Turn 与 Recover 的后续上较高，这两处后续更接近对用户最新一轮生成新回答；而在 Hold Floor 与 Interrupt 上较低，这两处需要在边说边听中管理正在进行的回应或说明干预理由。于是同样的基座能力在生成新答案时较易迁移，在并发中管理动作目的与后果时迁移较弱。

下面这张表比较问题是同一动作内不同条件是否带来不同难度，公平条件是同一批模型在同一评价规则下的平均成功率。

| 动作与条件 | 立即成功率 | 后续成功率 | 评价范围 | 限制 |
| --- | --- | --- | --- | --- |
| Take Turn 延迟 / 立即 / 轻微重叠 | 60.9% / 8.0% / 20.9% | 待后续表 | 跨模型平均 | 只反映时机调整难度 |
| Recover 6 条件区间 | 49.3–55.1% | 待后续表 | 跨模型平均 | 相对稳定不代表每个模型稳定 |
| Hold Floor 继续 / 缩短 / 简化立即 | 90.5% / 85.4% / 88.9% | 73.3% / 4.5% / 5.7% | 跨模型平均 | 后续低值集中在需改写回应 |

Take Turn 3 个条件的值拉开明显差距，而 Recover 的区间较窄，说明进入话轮的难点在按条件选时机；Hold Floor 3 个立即值都高但后两个后续值很低，说明维持话轮不难、按意图改写难。该表的限制是跨模型平均会抹平个别模型的特长与短板，具体到某个模型是否如此，还要查按模型拆分的附表。未胜出的负结果是 Backchannel 的疑惑类与肯定类整体偏低，以及 Interrupt 的后续在多数模型上失败率高，这些不是个别模型的偶然失误。

下面这张表比较问题是后续跟进是否随动作类型变化，指标方向仍是成功率越高越好。

| 动作 | 闭源模型后续成功率 | 直接报告区间 | 对照动作 | 适用条件 |
| --- | --- | --- | --- | --- |
| Take Turn 后续 | 78.6–83.0% | 4 个闭源模型 | 生成新回答类后续 | 需满足用户意图与约束 |
| Recover 后续 | 78.6–90.3% | 4 个闭源模型 | 生成新回答类后续 | 需按打断调整恢复 |
| Hold Floor 后续 | 39.3–57.3% | 同 4 个闭源模型 | 边说边听中调整 | 需继续、缩短或简化 |
| Interrupt 后续 | 多数失败率高 | 同一评价框架 | 边听边决策干预 | 需求助或安全理由充分 |

前两行较高而后两行较低的反差，支持论文关于推理迁移不均匀的解释：生成新回答类后续更接近问答训练，而并发中调整正在进行的回应需要把能力与触发情境连接起来。该表的限制是只覆盖 4 个闭源模型，不能推广到全部开源模型，且后续评价依赖语言模型判断，判断本身的误差没有在这张表里展开。

### 这些结论在什么条件下才成立

结论依赖 3 个前提。第一，动作与条件的标签来自结构筛选加语言模型确认与 10% 人工抽验，多数一致率高，但自然对话中各类现象分布不均，稀缺条件依赖合成，合成的自然度与声学处理方式会影响结论的外推。第二，立即执行多为规则判断，时间窗阈值是论文的设定，例如 Take Turn 的立即、延迟与轻微重叠区间不同，换阈值结果会变。

第三，后续跟进用语言模型按检查表判断，判断质量依赖提示与转写质量，个别模型用原生流式转写而多数用外部转写，跨模型比较时要考虑这种不一致。场景比较显示 Wait、Ignore、Stop 等高成功动作跨场景较稳，而会议中 Wait 偏弱、后续回应跨场景迁移较差，说明结论还受训练语料以日常闲聊为主的影响。模拟器评测只覆盖支持相应接口的 10 个模型，未覆盖的模型不能从这些数字推断其模拟器动作能力。

### 复现第一步要准备什么

复现先不要急着跑模型，先把时间对齐与评分脚本跑通。第一步是按论文的直接回放与模拟器回放两条管线重建输入输出时间轴：输入按模型需要的帧率播出，以首个输入样本为时间零点，输出录制在同一轴上，再从录制输出推导语音片段，而不是直接用服务端的轮流检测事件作为得分起点。接着实现按动作的区间判断与三词规则：完整转写不超过 3 个词的片段按短反馈处理，不算实质接管或打断。

随后接入后续判断的提示模板，分别传入用户在等待或干扰期间的语音、模型回应及其前后上下文。论文给出代码与数据链接，但本次核验显示链接当前不可用，因此是否公开可用要以可访问时为准，不能把论文提到链接等同于已可运行。模型版本要按附表固定检查点与接口标识，闭源接口还需记录实测日期，因为浮动标识的服务版本会变化。

### 什么时候值得尝试还需要补什么验证

当研究目标是让模型在连续对话中自己管理参与时机，而不是只优化单轮回答质量时，这套动作拆分与两段标准值得借鉴。它把该沉默时沉默、该短反馈时反馈、该让出时让出、被打断后如何恢复都变成可单独测量的动作，适合用来定位短板。还需补的验证包括：在更多会议与多方对话上检验等待与话轮判断，用人工复核补充语言模型判断的误差分析，以及报告响应延迟、误触发率与计算开销，因为当前成功率没有度量这些代价。

容易产生的误解是把立即成功率高当成整体交互好，论文的反例正是高立即伴随高后续失败；另一个误解是把合成样本多当成不真实，实际上合成是为覆盖真实语料稀缺的条件，关键要看标签验证与声学处理是否交代清楚。总体上，这篇论文提供的是一个可跟踪进展的动作级框架，而不是某个模型的胜利宣言。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.17738v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
