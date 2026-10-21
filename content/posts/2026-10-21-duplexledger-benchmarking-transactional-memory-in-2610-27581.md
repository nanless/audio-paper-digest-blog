---
title: "DuplexLedger: Benchmarking Transactional Memory in Full-Duplex Speech Agents"
date: 2026-10-21
draft: false
tags: [全双工语音交互, 音频问答, 基准设计, 检索增强]
categories: [论文速递]
description: "DuplexLedger 用 1094 个中英持久会话把打断、停顿、旁人说话和附和与 Write、Update、Ignore、Retain 四种记忆操作对齐，发现现有全双工模型都无法兼顾交互边界与最终记忆状态，而 8.92M 参数的 ACT-Mem 外挂模块把最新值准确率从 4.11% 提升到 8.68%，但完整状态重建仍很困难且打断停止变慢。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.27581"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "边听边说还要记住：DuplexLedger 如何考查全双工语音智能体的事务性记忆"
paper_digest_original_title: "DuplexLedger: Benchmarking Transactional Memory in Full-Duplex Speech Agents"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.27581v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.27581v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.27581v1.pdf"
paper_digest_primary_task: "全双工语音交互"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"method","id":"method.retrieval-augmented","label":"检索增强"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 7.6
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "DuplexLedger 用 1094 个中英持久会话把打断、停顿、旁人说话和附和与 Write、Update、Ignore、Retain 四种记忆操作对齐，发现现有全双工模型都无法兼顾交互边界与最终记忆状态，而 8.92M 参数的 ACT-Mem 外挂模块把最新值准确率从 4.11% 提升到 8.68%，但完整状态重建仍很困难且打断停止变慢。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuxuan Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiangchen Guan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kunrong Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jin Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kaiwen Luo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yang Xiao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yufei Guo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhisheng Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Liang Lin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kun Wang"}]
paper_digest_abstract_sha256: "075e0bdf02aa12eeb3a23f0b3c9bf300bc28772157655a101ae3e67a1c96f2a2"
paper_digest_sidecars: {"citation.bib":{"sha256":"b7cf68a641c5d71c5998a993dd1d17722ed311bc683f9d2c813beaab30fa9740","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-27581/citation.bib"},"citation.json":{"sha256":"fd0cd4c210f671dd3ae7d861a5c9616e2f056bf1337ec8dbe0370eef1dfc795c","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-27581/citation.json"},"citation.ris":{"sha256":"0f1b3de5479d98828fbc4bcdb0de361c394a631da59fbca1524f527b14272110","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-27581/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"ded9e0c6b3eadc53e48ca5301367b6cdfa2a9267236f8c91326aeedfa452ab55","url":"/audio-paper-digest-blog/data/papers/2026-10-21/2610-27581/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "fdfa41a9775a244809ae8d0de75d3cbe220796fcbbe4d2c7a6cd6b7aa47ad303"
paper_digest_api_reader_plan_sha256: "d1f416e4d0159ad9c434caa3b35544a8901ab6cf91afc3b002bf25214284e24d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "50649118c60f57987f90b640a2f17a616d3c1967f702a19d1feea7caac420c6a"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "e54587d1c4e0b1fe162ef9e7a1ea46bfe5e2d1c9bb4476188888f7f5bf39305c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "668658f5e3ddada8c6d6cc8fff4beb6252ff0f8a4ce84fa273113335525d6078"
paper_digest_api_reader_author_count: 10
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "1d57fb84872a6434142ff31d45aacda4ddb9bb54ca65b818143da7c3001c3bc7"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 边听边说还要记住：DuplexLedger 如何考查全双工语音智能体的事务性记忆

> 英文题目：*[DuplexLedger: Benchmarking Transactional Memory in Full-Duplex Speech Agents](https://arxiv.org/abs/2610.27581v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-paper-digest-blog/papers/?concept=task.full-duplex)；[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频问答](/audio-paper-digest-blog/papers/?concept=task.audio-question-answering)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)；[检索增强](/audio-paper-digest-blog/papers/?concept=method.retrieval-augmented)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.6/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yuxuan Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiangchen Guan：机构信息未能在本次解析中与作者逐人可靠绑定
- Kunrong Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Jin Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Kaiwen Luo：机构信息未能在本次解析中与作者逐人可靠绑定
- Yang Xiao：机构信息未能在本次解析中与作者逐人可靠绑定
- Yufei Guo：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhisheng Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Liang Lin：机构信息未能在本次解析中与作者逐人可靠绑定
- Kun Wang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

全双工语音智能体需边听边说维护持久记忆，难点在于同一段声音可能是新事实、修正、未说完的停顿、寒暄式回应或说给旁人的话，系统须判断是否入库以及如何覆盖旧值。以往评测把交互时机与记忆结果分开，答对单题不能说明状态是否连贯。论文构建双语基准DuplexLedger，把暂停处理、说给他人、用户寒暄和用户打断四种并发情形与Write/Update/Ignore/Retain事件级记忆操作绑定，每个会话保留操作前后的参考状态，并用同会话口语提问检验记忆。ACT-Mem以外挂方式配合冻结的MiniCPM-o 4.5主干，事件控制器先对流式音频事件判定接纳与操作类型，版本化账本据此记录生效值与覆盖关系。记忆问答时按题型检索的模块再从账本中选出相关与禁用标识对应的证据卡，经原有问答通路送入主干生成口语回答。在219个留出会话、保持冻结MiniCPM-o 4.5主干的受控比较中，ACT-Mem相对该主干的最新值准确率从4.11%提高到8.68%。在同样219个留出会话与主干对照下，最终状态覆盖率从1.27%升至2.00%但置信区间跨过零点，陈旧断言与干扰采纳有所下降。打断后停止变慢，说明边界控制与记忆修订尚未兼得。原文未披露训练时长、推理延迟与吞吐的完整实测成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/lyx-researcher/DuplexLedger> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 全双工语音智能体为什么边说边记这么难

全双工是指系统在自己说话的同时还能听用户说话，支持打断、附和、重叠和轮流。普通单轮问答只要记住当前上下文就能回答，而持续陪伴的语音助手需要在同一个持久会话里不断更新记忆：用户可能先给一个值随后又修正它，可能只说半句就停顿，可能只是嗯一下表示在听，也可能是在跟旁边的人说话。系统必须同时做好两件事：在正确的时间点停下或继续说，以及判断这段声音该不该改变持久记忆。

已有评测往往把这两件事分开看。一类只看交互时机，例如能否及时停下、停顿里是否乱插话；另一类把序列化好的对话历史拿来考记忆、检索和更新，没有在用户真正打断系统说话的那一刻去检验状态变化。结果是答对一道记忆题并不能说明系统真的维护了连贯记忆，也可能是碰巧复述了当前上下文。本文解读的 DuplexLedger 就是为了把自适应交互挑战和事件级记忆状态变化放在同一个会话里联合评测。

下面这张示意图把论文的动机讲得很直观，左边是只有交互没有记忆，中间是只有记忆没有自适应语音交互，右边是本文希望的同时具备准入判断、最新值维护和干扰排除的版本化记忆。

> **看图路径：** 1. 先看左中右三栏各自缺了什么：无持久状态、无自适应交互、两者兼有；2. 再看右栏账本中已取代、活跃、已排除三类条目的不同标记；3. 最后看底部三项能力声明如何对应后文的准入与干扰排除评测

[![原论文 Figure 1：From isolated interaction and memory to transactional full-duplex memory.](https://arxiv.org/html/2610.27581v1/figures/fig1_1.png)](https://arxiv.org/html/2610.27581v1/figures/fig1_1.png)

*论文图 1。原论文 Figure 1:：“From isolated interaction and memory to transactional full-duplex memory.”。*

这张图确实可见三栏对比：左侧用户与助手波形交叠并标出打断与附和，但底部显示没有持久记忆状态；中间把串行轮次存入记忆库再检索，但底部显示没有自适应语音交互；右侧从流式音频经事件控制器进入版本化账本，再经类型化检索器生成口语回答，账本示例区分了已取代、活跃与已排除条目。它帮助理解后文为什么既要测边界控制又要测最终记忆状态，二者缺一不可。

### 已有全双工与记忆评测各自缺了哪一块

在全双工对话方面，早期语音模型先解决端到端理解与生成，随后出现双通道建模、并行音频流等支持边听边说的结构，Freeze-Omni、MiniCPM-o 4.5、PersonaPlex、Lychee-FD 等进一步优化低延迟交互、角色控制与语义声学协同。这些工作改善了说话时机，但一般没有明确规定哪些重叠事件应该进入或修订持久记忆。

在记忆智能体方面，常见做法是分层存储、时序更新、结构化检索或隐式记忆，EgoMem 和 VoiceMem 开始把持久记忆接到流式多模态交互。但它们多在观察完整会话证据后处理保留与检索，没有在并发交互中联合控制事件准入、因果取代和非受话语音的排除。

在评测方面，Full-Duplex-Bench 及其重叠扩展、HumDial-FDBench、自适应修正与实体跟踪等基准覆盖了暂停、附和、打断和他人说话等现象，通用音频基准还涉及多轮记忆与连贯性。但论文指出这些资源都没有暴露自适应全双工执行下的事件级持久状态账本。也就是说，它们能看到答对与否，看不到是哪一次写入、修订或排除出错，也就无法区分是记忆对了还是只是上下文蒙对了。

### 论文把任务定义成什么样的状态构造问题

论文把全双工记忆表述为事务性记忆：每个事件要么被接纳，要么被拒绝，要么用来修订版本化状态。一个会话是有序事件流，每个事件包含语音内容、说话人、受话人和时间，记忆状态是若干三元组集合，含实体键、值和活跃或已取代两种状态。因为一个事件可能涉及多个实体，转移是在条目级别定义的。

\[M_{t}=\mathcal{T}\!\left(M_{t-1},\,\{(k_{i},v_{i},o_{i})\}_{i=1}^{n_{t}}\right),\qquad o_{i}\in\{\textsc{Write},\textsc{Update},\textsc{Ignore},\textsc{Retain}\}.\]

这个公式要约束的是从上一时刻记忆到下一时刻记忆的转移，输入是上一状态加上本事件拆出的多个实体槽位，每个槽位带一个操作。Write 引入新值，Update 取代旧活跃值，Ignore 拒绝不可采纳证据，Retain 保持不变。被评测模型只能听到流式音频和口语问题，账本操作与状态只用于监督和打分，因此任务考的是有选择的记忆构造，而非无限制回忆。

**Write × Update × Ignore × Retain：** Write 指把新事实首次写入记忆，Update 指用新值替代同一实体的旧活跃值并把旧值标为已取代，Ignore 指拒绝把非受话、未完成或旁人话语记入记忆，Retain 指保持当前状态不变。四者分工是区分应该新增、应该修订、应该排除和应该等待，组合起来才能把一串语音事件变成可审计的版本化状态，而不是把所有听到的都存下来。

举例来说，用户先说酒店是 Sakura，后来修正为 Maple，中间有一句嗯和一句跟旁人说的闲聊。理想行为是第一句 Write，第二句 Update 并把 Sakura 标为已取代，附和与旁人话语 Ignore，停顿期间 Retain。最后问现在住哪必须答 Maple 且不能再提 Sakura，总结则要覆盖多个活跃事实。这只是帮助理解分工的教学例子，不是论文实测数据。

下面这张总览图把这种单会话对齐画了出来，值得对照着理解 4 种操作与 3 类问题的分工。

> **看图路径：** 1. 沿时间轴看用户音频、助手音频、记忆状态三行的对应推进；2. 注意 WRITE、UPDATE、IGNORE、RETAIN 在 M0 到 M2 之间如何改变状态；3. 看右侧三类问题如何分别探查最新值、旧值干扰与总结能力

[![原论文 Figure 2：Overview of DuplexLedger. A persistent session aligns adaptively triggered full-duplex challenges,…](https://arxiv.org/html/2610.27581v1/figures/figure2_3.png)](https://arxiv.org/html/2610.27581v1/figures/figure2_3.png)

*论文图 2。原论文 Figure 2:：“Overview of DuplexLedger. A persistent session aligns adaptively triggered full-duplex challenges, event-level memory transitions, and spoken memory questions.”。*

这张图确实可见三行结构：上行用户音频从背景事件经初始值、修正、附和或暂停、旁人说话到同会话记忆问题，中行助手从正常回应、被打断到停止恢复再到回答记忆问题，下行记忆从空经写入、更新、忽略到保持不变，最终指向最新值问答、已取代值探查与总结问答。它说明挑战注入时机依赖检测到的助手说话状态，而记忆问题固定问计划好的目标，二者是同一持久状态的两面。

### DuplexLedger 的会话、挑战与问题是如何组织起来的

每个持久会话包含背景事件、2 到 5 个挑战和 6 个评测目标，期间不重置状态。固定事件内容按模型相关调度执行：打断和附和需要语音活动检测确认助手确实在说话才注入，否则保持未实现；暂停和对他人说话则用预设观察窗口。这种设计保证挑战发生在模型真的在说话时，而不是录制好的固定时间戳上。

4 种场景要求不同行为。打断应停止当前回应并接纳修正意图；附和不应终止回应也不应进入记忆；轮内停顿不应提前生成或提前提交；对他人说话既不应回应也不应更新记忆。只有这样，后续记忆题才能同时检验交互边界与状态正确性。

每个账本条目记录事件内容与角色、目标操作、记忆状态转移和取代链接，每个问题对齐支持记忆标识、禁止使用的已取代或干扰标识和参考答案。每会话两道最新值题检验修订是否替代旧值，其余覆盖事实回忆、干扰拒绝、最终总结和场景行为。结合系统轨迹，可以把失败定位到准入、取代、排除、检索或生成环节。

下面这张框架图是后文 ACT-Mem 的，但先看它的输入输出组织有助于理解 DuplexLedger 要求系统做到什么：流式音频进来，记忆状态在后台演进，问答时只用活跃且类型合适的证据生成口语回答。

> **看图路径：** 1. 沿顶部冻结主干看音频输入到口语回答的主路径；2. 沿底部可训练分支看转写、控制器、账本、检索器到证据卡的支路；3. 注意冻结与可训练标记以及问答时才注入文本预填的位置

[![原论文 Figure 3：Overview of the ACT-Mem framework for transactional memory in full-duplex agents.](https://arxiv.org/html/2610.27581v1/figures/figure3_1.png)](https://arxiv.org/html/2610.27581v1/figures/figure3_1.png)

*论文图 3。原论文 Figure 3:：“Overview of the ACT-Mem framework for transactional memory in full-duplex agents.”。*

这张图确实可见上下两条通路：顶部冻结的 MiniCPM-o 4.5 主干从音频输入经全双工生成到问题音频、证据预填与口语回答，底部可训练分支从冻结语音识别与端点检测得到转写与时间，经事件控制器、事务账本与类型化检索器生成证据卡并在问答边界一次性注入。它说明上下文与挑战走原生音频通路，记忆调节只发生在问答时刻，主干语音组件全程冻结。

### 事件控制器如何决定接纳与提交

ACT-Mem 是挂在冻结 MiniCPM-o 4.5 主干上的外部模块，含事件控制器、版本化事务账本和类型化检索器，共 8.92M 可训练参数，其中控制器 4.59M、检索器 4.33M。流式音频同时进入冻结主干和冻结语音识别与端点检测模块，后者给控制器提供转写与时间。控制器管理账本，检索器在记忆问答时构造证据卡，证据卡经问答专用的文本预填进入主干，所有语音生成组件保持冻结。

**事件控制器 × 版本化账本 × 类型化检索器：** 事件控制器根据转写文本预测收件人、完整性、操作和置信度并计算接纳分，决定提交、丢弃还是挂起，版本化账本保存活跃值、已取代版本和来源链接并只允许合规的 Update 形成取代链，类型化检索器按问题类型限定取最新值、取至多四条或汇总至多八条且拒绝题不取卡。三者分工是准入判断、状态维护和问答取证，组合后语音生成主干保持冻结而记忆变化全程可追溯。

准入阶段先用确定性解析器从事件转写抽取候选实体值槽位，学习到的控制器预测收件人、完整性、操作与置信度。每个提案进入准备态并计算接纳分。

\[g_{t}=p_{t}^{\mathrm{addr}}p_{t}^{\mathrm{complete}}\bigl[p_{t}(\textsc{Write})+p_{t}(\textsc{Update})\bigr]c_{t},\]

该公式要计算是否值得持久化的综合分数，先形成收件人概率与完整性概率，再乘以 Write 与 Update 概率之和与控制器置信度。只有接纳分达到阈值才提交，非受话或不完整提案丢弃，模糊提案挂起，暂停与静音不产生持久事务。提交的条目保留来源事件、角色、顺序、完整性与置信度以供审计。

### 版本化账本与类型化检索如何维护证据

取代阶段不允许仅凭更晚出现就覆盖活跃值，候选必须满足同实体键、来源顺序更晚、预测操作为 Update 且接纳分达标。

\[k_{j}=k_{i},\qquad t_{j}>t_{i},\qquad\widehat{o}_{j}=\textsc{Update},\qquad g_{j}\geq\tau_{\mathrm{write}},\]

该公式约束合法取代的 4 个条件，成功时把旧条目标为已取代并记录修正链接，新条目激活，旧版本仍可审计但不再被检索器使用。已取代、不确定、丢弃与忽略内容都不能进入证据卡。账本最大活跃容量为 32 槽，超出时把低置信度和较旧的活跃条目转入不确定态，但取代链接保留可查。

检索阶段按问题类型限定范围：最新值题只选目标实体的当前活跃值，普通回忆至多取 4 条活跃事实，总结题跨实体类型至多聚合 8 条，拒绝与行为题不取卡直接走拒绝行为。排序结合稠密相似、词重叠、新近度、置信度与陈旧干扰惩罚，证据不足则不生成卡。生成时在稳定静音边界先播问题音频，再把一张证据卡经原生文本预填给主干并生成口语回答。

**接纳分 × τwrite：** 接纳分是收件人概率、完整性概率、Write 与 Update 概率之和与控制器置信度的乘积，表示该事件值得持久化的综合证据，τwrite 是在 40 个校准会话上按记忆资格 F1 选出的 0.35 阈值，只有接纳分达到阈值才提交。二者搭配把模糊或非受话内容挡在可检索状态之外，阈值调高会降低召回但保持精度为 100%。

这种分工的意义在于，控制器只管该不该记，账本只管版本链是否完整，检索器只管问什么拿什么。三者串起来后，语音主干不用改参数也能得到有依据的回答，而且每一步都有记录可查。

### 数据如何合成、划分与训练

DuplexLedger 是完全合成的双语基准，用生成模型按结构化模式产生中英任务描述、对话、事实值、修正、干扰与参考答案，再经确定性程序归一化实例化，语音全部由语音合成在 24 kHz 下渲染并经强制对齐得到词或字边界，保留源波形、播放窗口、校验和与质量标记。不含真人录音，平均每会话约 116 秒。开发与测试划分为 237 与 857 个会话，方法实验另用互不重叠的 660 训练、175 验证、40 校准与 219 留出会话，确保同一会话的事件与问题不跨划分。

ACT-Mem 训练使用冻结识别转写，控制器学习操作、收件人、完整性与置信度，槽位抽取与实体键归一用非可训练规则。目标含加权操作交叉熵、收件人与完整性交叉熵、置信度二元交叉熵，以及检索器的二元相关与排序间隔损失，操作权重 Write、Update、Ignore、Retain 分别为 1.0、1.5、1.4、0.8。先联合优化控制器与检索器，再冻结控制器只适配检索器，优化器为 AdamW，批量 32，联合阶段学习率 3×10-4 训练 10 轮，适配阶段 1×10-4 训练 3 轮，在 8 块 NVIDIA A100 上进行。

校准在 40 个会话上无梯度搜索接纳阈值，以事件记忆资格 F1 最大为准则选出阈值为 0.35，之后固定用于留出评估。论文报告该阈值下事件准入精度在所有测试阈值均为 100%，0.35 与 0.45 共享最高 F1，调高到 0.75 会把召回从 55.26% 降到 48.95%、F1 从 71.19% 降到 65.72%，结论只限校准集上的准入行为，不能推广为部署最优。

### 自适应执行、打分与统计以什么为准

评测以完整会话为单位，流程是重置后播背景、按助手说话状态注入挑战、恢复，再在同一状态下问 6 个记忆问题，期间不重置。打断需至少 500 ms 连续解码助手语音，附和需至少 800 ms，超时则记为未实现。问答前要求 1.2 s 稳定静音，问题播放后 30 s 内等待回答起始并收集至多 30 s，迟到语音隔离 10 s 且不回补。固定输入波形只是兼容产物，权威依据是阶段清单与样本范围。

\[\mathrm{RCR}_{s}=\frac{N_{\mathrm{realized}}^{(s)}}{N_{\mathrm{planned}}^{(s)}},\qquad\overline{\mathrm{RCR}}=\frac{1}{|\mathcal{S}|}\sum_{s\in\mathcal{S}}\mathrm{RCR}_{s},\]

该公式定义会话级已实现挑战率及其在有计划挑战会话上的宏平均，跨模型比较时只作暴露量理解，不作性能分。条件全双工分只在可评分的已实现挑战上计算，记忆题分母固定，未答不得分，最新值题要求出现新值且不出现旧值，干扰拒绝要求有明确拒绝而非沉默。同一会话内问题不视为独立样本，汇总先算会话级再宏平均，延迟中位数与 90 分位数也是先会话内再跨会话平均。

**RCR × cFD：** RCR 是已实现挑战数占计划挑战数的会话级宏平均，衡量模型实际暴露了多少打断或附和机会，cFD 是在可评分的已实现挑战上行为正确的条件分数，衡量暴露后的边界控制好坏。二者搭配才能避免把没触发挑战的沉默误读成交互能力强，论文因此强调 RCR 是暴露量而非成绩。

**最新值问题 × 最终状态覆盖：** 最新值问题要求答出修正后的活跃值且不能同时说出已被取代的旧值，检验局部修订是否成功，最终状态覆盖要求在总结题中覆盖多个原子参考事实的词重叠比例，检验整会话的状态整合能力。二者搭配才能区分只修对一个点和真正记住了全局，前者高而后者低就说明记忆仍是碎片化的。

受控比较用同一 219 个留出会话同时跑冻结主干与 ACT-Mem，采用会话级配对百分位自助法，20000 次重采样，报告最新值准确率与最终覆盖的绝对百分点变化与 95% 区间。区间只反映会话抽样不确定性，不含多次运行生成波动、识别错误或打分规则本身的不确定性。基线 5 模型的跨模型结果是描述性的，不做标量排名。

### 五个全双工模型是否有人兼顾交互与记忆

论文在全部 1094 个会话上评测 MiniCPM-o 4.5、Freeze-Omni、Moshi、Lychee-FD 和 PersonaPlex-7B-v1，输入音频、事件顺序、问题与调度逻辑相同，但因触发依赖各自实际输出，已实现挑战子集可以不同，因此跨模型数字是描述性对照。下面的组成表先说明基准盘子有多大，再看结果表才能理解分母与条件。

第一张表比较 4 个场景的中英文会话数、事件数、挑战数与问题数，检查双语与场景覆盖是否均衡。

| Scenario | ZH | EN | Sess. | Events | Chal. | QA |
| --- | --- | --- | --- | --- | --- | --- |
| Pause handling | 149 | 127 | 276 | 1,932 | 552 | 1,656 |
| Speech to others | 150 | 126 | 276 | 2,208 | 1,104 | 1,656 |
| User backchannel | 146 | 137 | 283 | 2,545 | 1,130 | 1,698 |
| User interruption | 132 | 127 | 259 | 1,554 | 518 | 1,554 |
| Total | 577 | 517 | 1,094 | 8,239 | 3,304 | 6,564 |

上表按场景拆分 276 个暂停、276 个对他人说话、283 个附和与 259 个打断会话，共 8239 个可听事件、3304 个挑战与 6564 个问题，中英文分别为 577 与 517 个会话，说明每种边界现象都有数百会话支撑，最新值题每会话两道的设计让修订能力有足够分母。

第二张表核对总会话、问题、挑战与音频时长等发布规模，确认评测不是小样本轶事。

| Quantity | Value |
| --- | --- |
| Sessions | 1,094 |
| Chinese / English | 577 / 517 |
| Development / test sessions | 237 / 857 |
| Full-duplex challenges | 3,304 |
| Fixed compatibility audio | 35.328 h |

上表确认发布规模为 1094 会话、6564 记忆问题、2188 最新值问题、3304 挑战，可听事件 8239 个，固定兼容音频 35.328 h、事件源音频 24.221 h，平均时长 116.25 s，缺失波形为 0，说明自适应协议用的事件源音频与兼容波形是两套口径，不能混用时长。

第三张表列出执行阶段的语义，确认挑战触发与问答窗口的公平条件。

| Stage | Purpose | Execution semantics |
| --- | --- | --- |
| play_audio | Context delivery | Plays the bounded audio window associated with a user event and preserves the event’s speaker, addressee, and dialogue-act metadata. |
| inject_interruption | Interruption challenge | Delivers the interruption audio only after the preceding speaking-state trigger has been satisfied. |
| inject_backchannel | Backchannel challenge | Delivers a backchannel only after the assistant has produced the required amount of active speech. |
| play_side_talk | Non-addressee speech | Plays speech addressed to another participant and then observes whether the assistant responds during the observation interval. |
| run_same_session_ memory_qa | Memory evaluation | Opens the dynamically timed question-and-answer windows without clearing the preceding conversational state. |

上表说明播放、等待助手状态、注入打断或附和、播放旁人话、暂停等待、事件边界、等待静音与同会话问答等阶段的执行语义，关键是打断与附和必须在满足说话状态后才注入，否则记超时未实现，这正是已实现率与条件分数必须配套看的原因。

下表比较 5 个实际可运行基线在最新值准确率、最终状态覆盖、干扰采纳与陈旧错误上的表现，指标方向为最新值与最终覆盖越高越好，干扰采纳与陈旧越低越好，所有记忆题分母固定。

| 条件 | 指标 | Lychee-FD | 最高最终覆盖 |
| --- | --- | --- | --- |
| 全 1094 会话，同清单执行 | 最新值准确率 | 25.50% | — |
| 全 1094 会话，同清单执行 | 最终状态覆盖 | 1.06% | 2.01% |
| 全 1094 会话，同清单执行 | 干扰采纳率 | 48.17% | — |

上表显示没有模型同时主导交互与记忆：Lychee-FD 最新值最高但最终覆盖仅 1.06% 且近半干扰被采纳，MiniCPM-o 4.5 较克制但最新值仅 4.30%，Freeze-Omni 几乎全答却保留大量陈旧与干扰错误，Moshi 陈旧率低但回答覆盖仅 54.31%。即使最好的最终覆盖也只有 2.01%，说明能协调语音、能恢复孤立修订或能拒绝无关内容，不等于能同时做好准入、取代、排除与状态整合。

### ACT-Mem 把最新值准确率提高了多少

在 219 个留出会话、1314 个问题与 438 个最新值问题上，ACT-Mem 相对同一冻结 MiniCPM-o 4.5 主干的配对比较是本文唯一有区间支撑的核心证据。最新值准确率从 4.11% 升至 8.68%，最终覆盖从 1.27% 升至 2.00%，同时要看陈旧、干扰与交互边界的变化，才能判断收益是否全面。

下面这张结果图把 ACT-Mem 相对冻结主干的变化可视化，左为记忆保真度，右为全双工交互，绿色为有利、红色为不利并带百分点标注。

> **看图路径：** 1. 先看左图最新值与最终状态两条的点估计与 95% 置信区间是否跨零；2. 再看干扰采纳、陈旧断言等改善与退步的百分点标注；3. 最后看右图交互指标改善与停止成功率下降之间的权衡

[![原论文 Figure 4：ACT-Mem versus its frozen MiniCPM-o 4.5 backbone on 219 held-out sessions; error bars show 95%…](https://arxiv.org/html/2610.27581v1/figures/fig4.png)](https://arxiv.org/html/2610.27581v1/figures/fig4.png)

*论文图 4。原论文 Figure 4:：“ACT-Mem versus its frozen MiniCPM-o 4.5 backbone on 219 held-out sessions; error bars show 95% paired-bootstrap CIs for Latest and Final.”。*

这张图确实可见左图最新值从 4.11% 到 8.68% 提升 4.57 个百分点且置信区间不跨零，最终从 1.27% 到 2.00% 提升 0.73 个百分点但区间跨零，干扰采纳与陈旧下降而干扰拒绝与回答率小幅下降；右图条件全双工分与早响应、提前重叠、窗口侵入改善，但 800 ms 内停止成功率下降且停止延迟从 1.123 s 增至 1.340 s。它帮助理解主要收益是更克制的局部修订，而快速打断恢复仍是代价。

下表整理同一配对比较中记忆与交互的关键数字，记忆题分母固定，交互条件分只在已暴露挑战上计算，停止延迟越低越好。

| 条件 | 指标 |
| --- | --- |
| 219 留出会话，配对比较 | 最新值准确率 |
| 219 留出会话，配对比较 | 最终状态覆盖 |
| 219 留出会话，配对比较 | 干扰采纳率 |
| 219 留出会话，配对比较 | 陈旧断言率 |
| 219 留出会话，配对比较 | 条件全双工分 |
| 219 留出会话，配对比较 | 停止延迟中位数 |

上表说明最新值区间为 1.60 到 7.53 而不含零，支持更可靠地恢复修订后活跃值的判断；最终覆盖区间为负 0.49 到 1.99 且跨零，绝对水平仍很低，不能说完整会话状态重建已解决。陈旧与干扰采纳同步下降，但干扰拒绝与回答率也小幅下降，因采纳与拒绝分母固定且互不互补，同时下降意味着更少明确采纳也更少被记分的明确拒绝，主要好处是有选择的构造而非全面变好。

### ACT-Mem 的提升来自哪里，代价是什么

消融用固定记忆权重做 3 种推理期变体：先进先出 32 槽队列去掉版本与仅选最新，去除收件人门控，无类型检索对所有题取前四。完整配置在三项交互与四项记忆中的多数领先，相对先进先出陈旧率低 79.8%，相对无收件人门控干扰采纳低 34.2%。无类型检索最新值达 9.59% 更高，但陈旧 1.60% 与干扰采纳 19.63% 也更高，完整配置用 0.91 个百分点的最新值换来更少陈旧与干扰。跨变体交互差异是整轮描述性差异，不能说成检索对先前交互的因果效应。

交互上早响应、提前语音与窗口侵入分别下降 18.6%、7.6% 与 5.1%，但 800 ms 内停止成功率从 51.06% 降至 45.00%、延迟增加，说明起始与重叠控制改善而快速打断恢复是代价，且条件分改善应理解为已暴露挑战上的行为变好而非覆盖更多挑战。分语言看英文最新值从 5.83% 到 13.11%、中文从 2.59% 到 4.74%，附和与旁人话提升最大，打断下反而从 3.85% 降至 2.88%，是剩余弱点。

案例追踪进一步定位失败：控制器判对 Update 但实体键归一化不一致会导致取代链断裂，否定排除句的字面实体模式也可能被误存，说明操作分类对不等于槽位抽取、取代、检索与口语实现都对。论文的失败分类强调交互与记忆可独立失败，快速停下不等于正确修订，正确拒绝一道干扰题不等于保持了完整活跃状态。

### 哪些结论有区间支撑，哪些还只是描述性对照

有配对区间支撑的是留出集上最新值从 4.11% 到 8.68% 的提升，区间不跨零，可以说局部修订更可靠。最终覆盖虽有提升但区间跨零且绝对值仅 2.00%，只能说完整重建仍困难，不能宣称已解决会话级记忆。基线 5 模型的排名、语言与场景细分、消融交互差异都是描述性总结，没有多重比较校正，不能当作确证性检验。

适用边界也很明确：全合成语音低估了自然口语的迟疑、口音、情感、噪声与多方混乱，会话仅 1 到 3 分钟，不涉及小时或跨天记忆；任务无显式删除操作，不能当作隐私感知的完整记忆管理；阈值结论只限 40 个校准会话的准入行为；统计区间不含重复运行波动与识别误差。因此提升只在相同冻结主干、相同自适应调度与固定词法打分下成立，换主干、换语言分布或换自然对话仍待验证。

另一个容易误解的是沉默与拒绝的关系。模型收到干扰题时只有明确说出拒绝才记为拒绝成功，不回答记为未答而不得分。低回答率模型的低采纳不能读作选择性强，必须同时看回答率与拒绝率。同样，条件交互分必须同时看已实现率与触发超时率，单独看条件分会高估实际交互能力。

### 复现需要哪些输入、配置与第一步

作者资源当前可用，已公开代码链接为<https://github.com/lyx-researcher/DuplexLedger>，可获取会话输入、交互清单、记忆监督、运行日志、生成音频、问题级分数与 ACT-Mem 轨迹。复现路径是会话清单经流式执行得运行时日志，再得生成音频与冻结识别转写，再经问题级打分到会话聚合，最后生成报告表，全程按会话标识与问题标识关联，失败与超时保留不删除。

关键是区分输入条件：基线语音模型只能用流式音频与中性指令，不能接触金账本、事件类型、收件人标签、对齐边界、参考答案或参考助理解码音频；ACT-Mem 辅助模块可按附录接触事件索引、说话人与收件人元数据与问题类型，论文要求把这种标注辅助设定声明为非端到端音频条件，不能与纯音频基线混为一谈。执行参数如 80 ms 输入块、20 ms 轮询、打断 500 ms 与附和 800 ms 触发、问答前后静音与超时等在评估前冻结。

值得尝试的情形是需要在边说边听中维护可审计记忆的研究，例如打断修正、停顿续说与旁人话排除。第一步应先跑通 219 个留出会话的配对流程，固定会话标识、随机种子与词法打分，复现 4.11% 到 8.68% 与区间，再检查阈值 0.35 附近的稳定性。还需补的验证包括自然对话、更多语言、更长时程与其他主干上的表现，以及阈值与检索范围在新分布下的重校准。

### 一句话总结与给新生的建议

DuplexLedger 把 4 个全双工现象与 4 种记忆操作及同会话口语问题对齐，用显式前后状态与取代链接让答对不再能掩盖记忆混乱；5 模型对照显示交互边界与记忆保真度是两回事，最好的最终覆盖也只有 2% 左右。ACT-Mem 用可训练小模块管准入、用版本账本管取代、用分类型检索管取证，在冻结主干上把最新值准确率翻倍有余，同时减少陈旧与干扰采纳，但最终总结仍弱且打断停止变慢。

给刚入门的建议是先按单样本走一遍：一段音频如何被切成事件，控制器如何打分与提交，账本如何形成取代链，问题类型如何决定取几条证据，证据卡如何在问答边界一次性注入。若只记住数字会误以为记忆已解决，若只看交互曲线会忽略状态完整性，二者必须放在同一会话里一起读。后续工作应优先补打断时刻的更新、中英之外的语言与更长更嘈杂的真实对话，再谈部署价值。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.27581v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-21 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-21/)
