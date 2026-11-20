---
title: "The Between-Round Decision in Autonomous Research: An LLM Controller That Reads the Whole Trajectory"
date: 2026-11-19
draft: false
tags: [自动化科学研究流程, 会话抑郁风险筛查, 检索增强, 大语言模型]
categories: [论文速递]
description: "论文把自主研究中每轮实验后该精修还是换方向的问题单独拿出来，用一个只读最优解和历史日志的大模型控制器做决策，并在时序、文本、图像和语音抑郁检测四个任务上验证读得越多效果越好，但代价是每轮多个候选的完整执行开销。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.22661"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "轮次之间该怎么选：读完整轨迹的自主研究控制器"
paper_digest_original_title: "The Between-Round Decision in Autonomous Research: An LLM Controller That Reads the Whole Trajectory"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.22661v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.22661v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.22661v1.pdf"
paper_digest_primary_task: "自动化科学研究流程"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.automated-scientific-workflow","label":"自动化科学研究流程"},{"facet":"task","id":"task.conversational-depression-screening","label":"会话抑郁风险筛查"},{"facet":"method","id":"method.retrieval-augmented","label":"检索增强"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"}]
paper_digest_primary_method: "检索增强"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把自主研究中每轮实验后该精修还是换方向的问题单独拿出来，用一个只读最优解和历史日志的大模型控制器做决策，并在时序、文本、图像和语音抑郁检测四个任务上验证读得越多效果越好，但代价是每轮多个候选的完整执行开销。"
paper_digest_authors: [{"affiliations":["University of Electronic Science and Technology of China, Chengdu, China"],"name":"Caoxin Wang"},{"affiliations":["University of Electronic Science and Technology of China, Chengdu, China"],"name":"Shengkai Gan"},{"affiliations":["Zhejiang University, Hangzhou, China"],"name":"Xiang Hu"},{"affiliations":["University of Electronic Science and Technology of China, Chengdu, China"],"name":"Lili Pan"}]
paper_digest_abstract_sha256: "f3cd37f945dcb61072d7ac3fc908017c054c6ed14b469b2cee56bb81cf7d4649"
paper_digest_sidecars: {"citation.bib":{"sha256":"01da500d8b9062cb40725ffd7ebc089d55100733a15f78f8d32649c7c569fd2b","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22661/citation.bib"},"citation.json":{"sha256":"0f550a5243e5d4b3adcddcb10ebfabad7f48b5ba9e26d164f39c3c7401351810","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22661/citation.json"},"citation.ris":{"sha256":"2172a6b8ecdca655cce49e1a1e21783ffac37ad147a0fa38d4bd5f552addea0c","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22661/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"9ab1b4c7910831b2d1cd59e8b933f32a0bd232a0a91a1f5950fb3635d439f5a6","url":"/audio-paper-digest-blog/client/papers/2026-11-19/2611-22661/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "110bc6f881aefb864203cf01ffb55d6895a57972978b2aa0ae2518263888c9de"
paper_digest_api_reader_plan_sha256: "8f8110e3fd4616ecf76f8bf30853f0d531e2094e5daee02f123a209d93e9cf8f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "0982bc557437f52bfc75bf41afa2f16061326a5972db2839c5bdda7de334884d"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8d30804b578ebb9ecf2b2137aba0f9ca5770f172d78ca71a547e9844841bd740"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "37a8c6f79a5faf8c112e2e3cc2378098191ebbe8ac820820e4a89821cd900867"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "92ac5c7303e40d2a5914ada94899ce3afa1955b405f0734de0d855891e93ab04"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 轮次之间该怎么选：读完整轨迹的自主研究控制器

> 英文题目：*[The Between-Round Decision in Autonomous Research: An LLM Controller That Reads the Whole Trajectory](https://arxiv.org/abs/2611.22661v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[自动化科学研究流程](/audio-paper-digest-blog/papers/?concept=task.automated-scientific-workflow)；[会话抑郁风险筛查](/audio-paper-digest-blog/papers/?concept=task.conversational-depression-screening)
- **研究方法**：[检索增强](/audio-paper-digest-blog/papers/?concept=method.retrieval-augmented)
- **模型家族**：[大语言模型](/audio-paper-digest-blog/papers/?concept=model_family.llm)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.7/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.4/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Caoxin Wang：University of Electronic Science and Technology of China, Chengdu, China
- Shengkai Gan：University of Electronic Science and Technology of China, Chengdu, China
- Xiang Hu：Zhejiang University, Hangzhou, China
- Lili Pan：University of Electronic Science and Technology of China, Chengdu, China

## 📌 核心摘要

自主研究系统每完成一回合实验，都要根据已验证结果决定下一回合是打磨当前最优解还是另起方向，从哪份代码出发，以及设定什么目标。论文把该环节称为回合间决策，指出已有系统多用规则、搜索树或打分包裹决策，而语言模型决策需读取哪些证据尚不清楚。为此作者提出基于证据的回合间决策控制器BRED，它只保留优胜者与日志，优胜者保存最优已验证候选的代码与指标，日志保存每回合决策、候选结果与经验。先由决策步调用一次大语言模型，读入优胜者、完整日志、任务目标与文献综述，输出四选一动作、目标指令与约束并固定出发代码。再由生成步接收决策，新开或扩展时检索文献起草构思，打磨时跳过检索，最后运行步在工作区副本中编码执行并修复失败，记录步仅在验证提升时更新优胜者并把证据追加进日志送回下一回合。在ETTh1时间序列预测上，最终优胜者平均绝对误差为0.4172，低于基线0.4382，误差越低越好。在防泄漏协议下的DAIC-WOZ语音抑郁检测上，新鲜种子复测的宏平均F1为0.6164±0.0166，高于同协议最强已发表系统的0.576，越高越好，曲线下面积为0.6902±0.0151作为辅助证据。消融显示只读最近一回合或不读历史时效果逐级下降，说明完整轨迹是决策质量来源。结论限于四项任务与冻结验证协议，跨模型与跨任务泛化尚未验证，控制器单次决策不消耗本地GPU时间，但原文未披露完整运行成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/learninginvision/BRED> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 自主研究为什么难在轮次之间

刚进语音或音频方向的研究生容易把注意力放在单次实验上：换一个模型、跑一个指标。但自主研究系统面对的是连续多轮，每轮要并行做出几个候选、全部跑通、拿到分数，然后决定下一轮做什么。论文开头强调的动机是，想法在纸面上看起来好，真正跑完可能完全不同，有研究发现大模型生成的想法经专家实际执行后评审分数下降幅度远大于人类想法，不少指标上两者排名还会反转。所以下一轮不能只看提案写得是否漂亮，必须看跑出来的结果。

对语音任务来说这个体会很直接。比如做抑郁检测，换一个声学特征或换一层 wav2vec2 嵌入，开发集上可能涨一点，但换一种划分或换随机种子就消失了。如果系统没有机制记住哪条路已经试过、最好结果的代码到底是什么，它就会在不同轮次重复试相似的东西，或者把 1 次偶然的好结果当成规律。对于初学者，理解这种多轮决策比理解单个模型更重要，因为它决定了有限算力花在哪里。

### 轮间决策到底要决定什么

论文把每轮实验结束后的选择叫做轮间决策，英文是 between-round decision。它包含 3 个具体问题。第一是继续打磨当前最好的解，还是另起 1 个方向。第二是从哪个已有解出发继续改，是回到干净基线，还是在当前最优解的代码上接着加东西。第三是给下一轮定一个什么目标，这个目标要具体到能指导检索和写代码，又不能具体到直接规定解法。

已有系统把这个决策藏在各种结构里。有的是写死的规则，比如一定先发散再收敛；有的是树搜索里的分数公式，用上置信界或随预算变化的采样规则决定扩展哪个节点；有的是把结果喂回下一轮的提示词并过滤相似想法；也有的是让大模型选节点，但没有说清大模型到底需要读多少历史。本文的问题很聚焦：能不能不用树、不用分数、不用预设时间表，只让一个大模型读累积证据来做这个决策，以及它到底需要读多少证据。

### BRED 的四步循环是什么

BRED 是 Between-Round Evidence-based Decision 的缩写，核心是一个每轮只调用 1 次的大模型控制器。系统维护两个持久对象，一个是 Champion，也就是迄今验证分数最好的候选，存着它的代码、指标和不超过十二词的机制小结；另一个是 Log，按轮记录每轮的决策、全部候选的结果、本轮最好分数和一条只写事实的小结，不允许把单次测量直接写成因果解释。

每轮按 Decide、Generate、Run、Record 四步走。控制器先读任务目标、基线分数、Champion、完整日志、剩余预算和连续多少轮扩展没有进步，再加一份同任务已发表路线的综述，然后给出动作、目标句、硬约束和理由。之后按决策生成多个想法、分别在拷贝的工作区里实现运行，最后只在严格更好时更换 Champion，并把本轮追加进日志。整个过程不更新任何模型权重，控制器本身也不训练。

下面这张总览图是理解全文的关键，它以情感分类任务第七轮为例，把读什么、定什么、怎么执行画在了一起，读图时先分清谁在读证据、谁在执行、谁在记录。

> **看图路径：** 1. 先看左上控制器读入的三样东西：任务、前沿综述和右侧的累积证据；2. 再看中间决策框里指令、理由和硬约束如何分开；3. 接着看下方三路执行在微调时如何跳过检索；4. 最后看右侧只有更好才晋升的记录规则

[![原论文 Figure 1：Overview of the loop, shown on round 7 of the AutoClsSST run.](https://arxiv.org/html/2611.22661v1/fig1_overview.png)](https://arxiv.org/html/2611.22661v1/fig1_overview.png)

*论文图 1。原论文 Figure 1:：“Overview of the loop, shown on round 7 of the AutoClsSST run.”。*

这张图左侧是控制器读入的前沿综述和任务，中间是累积证据里的 Champion 和 Log，右侧是记录规则，下方是候选生成和执行。可以看到微调分支会跳过文献检索，而开新线和扩展都要经过计划查询、检索论文和起草想法。右侧特别标出只有当本轮最好成绩超过 Champion 才晋升，否则 Champion 保持不变，这就是后文所说的失败轮次不丢掉已赢成果。图中还给出 1 次新线的具体数字，3 个想法里最好达到 0.9438，仍低于 0.9495 的 Champion，所以 Champion 被保留，日志里记下不含特定机制时反而都超过基线的事实。

### Champion 和日志各记什么

Champion 的定义很严格。它是第 1 到第 t 轮里验证指标最好的候选，记为标识、代码工作区、指标、机制签名和产出轮次。在没有任何候选严格超过基线之前，Champion 为空；一旦出现，之后只有出现严格更好的候选才会被替换，所以它的指标不会回退。每次候选跑完，另有一个大模型读它的真实代码，写出机制签名、关键配置和可能的瓶颈，而不是复述提案时的说法。这样保留的是做出来的东西，而不是想出来的东西。

日志的每条记录包含决策、本轮全部候选的结果、本轮最好分数和一条事实小结。结果里成功给指标，失败给诊断；小结只写试了什么配置、得了多少分，不解释为什么。比如某轮试了 3 种附加模块都没超过 Champion，小结就只记这个事实，至于是否说明该方向不行，留给 Decide 去判断。这种把事实和解读分开的设计，是为了防止 1 次噪声测量变成后面多轮继承的因果故事。

**Champion × Log：** Champion 是迄今验证分数最好的那份代码加指标，是下一轮可以继承的起点；Log 是按轮记录的决策、全部候选结果和事实小结，是判断进展是否停滞的依据。两者搭配后，控制器既知道从哪里出发，也知道哪些路已经试过、效果如何，避免只看当前最好分数就做决定。

### 一次决策如何写目标和约束

Decide 的输入包括任务目标和指标方向、基线、Champion 及其瓶颈小结、日志、剩余预算和连续扩展无进展的轮数。日志的呈现方式是每轮一行摘要，再加上最近 5 轮的完整决策、理由和全部候选。输出分成四部分：动作、指令、硬约束和理由。动作由模式加起点组合而成，共有 4 种：从干净基线开新线、在 Champion 上扩展新机制、不加新机制地微调 Champion，以及停止并交付 Champion。

指令是关键的科学内容，要求一句话、不超过 40 词，只说打哪个瓶颈、大致朝什么水平努力，不写实现细节。例如 Champion 受限于跨通道建模、目标朝 0.42 水平努力，这是指令；而具体加什么门控、调什么序列长度，则留给检索和想法生成，或者放进硬约束。硬约束最多 3 条，必须是事后可检查的，例如固定最大长度或不改评测划分，会原样发给每个候选，事后还要检查是否遵守。理由要求引用日志证据。

代码里还有几道护栏。在出现第一个 Champion 之前，只能从基线出发；总轮数的后 30% 只允许微调或停止；在进入收尾前，如果连续 3 轮在 Champion 上扩展都没有进步，就强制转成从基线开新线；如果最近两轮 Champion 还在进步，就拒绝停止。这些护栏不代替判断，只防止明显浪费预算或过早停止。

**Decide × Generate：** Decide 是每轮一次的大模型调用，只定方向和目标，不写具体方法；Generate 是把这个目标变成多个可运行想法的执行组件，负责查文献和写方案。分工的意义在于把容易受噪声影响的判断集中在一处，而把发散和实现交给固定流程，判断失误时还能从日志回看。

**从基线开新线 × 扩展 Champion × 微调 Champion：** 从基线开新线是抛开当前最优代码、从干净起点另找方向；扩展 Champion 是保留最优代码并叠加一个新机制，需要检索文献；微调 Champion 是不动结构只调细节，不检索。三者分别对应换赛道、加模块和拧参数，控制器根据是否停滞和剩余预算在三者之间选择。

**instruction × hard constraints × Frontier Research Landscape：** instruction 是不超过四十词的目标句，只说打哪个瓶颈、大致朝什么水平努力；hard constraints 是零到三条必须原样执行的硬性要求；Frontier Research Landscape 是同任务已发表路线的综述，用来定目标水平。目标句保持宽泛以保留多样性，硬约束只放不可妥协项，前沿综述只当地图而不直接指定方法。

### 想法如何生成、运行和记录

Generate 按决策分成两条路。开新线和扩展都要走检索：Search Planner 先看控制器指令、综述和已试方向台账，产出 6 个检索计划，每个计划有一个论文式标题作为查询；Literature Retriever 对每个计划在 arXiv 索引里找至多 30 篇，按标题和摘要排 2 次序，下载排名靠前的论文直到读完 3 篇全文，并写出每篇的问题、方法、结果和可迁移点；Idea Forge 先按计划概述起草概念，再结合起始代码细化成可实现方法。起始代码在开新线时是基线代码，在扩展时是 Champion 代码。微调则跳过检索，直接在 Champion 的实验代码上提 5 个增量改法。

所有想法都要过可行性和 grounding 打分，两项都在零到一之间。可行性看改动大小和新增模块数，判断能否跑出有效指标且不破坏评测协议；grounding 看是否基于本轮检索到的技术且主效应针对主要指标。探索轮通常取两项都不低于 0.4 的想法中可行性最高的若干个，如果达不到数量就取可行性最高的补足；微调想法因为不引用文献，很少过 grounding 门，实际就是取可行性最高的几个。

Run 把每个选中想法交给编码智能体，在各自拷贝的起始工作区里改代码、按冻结协议执行、失败自动修，返回指标或诊断，候选之间并行。Record 先丢弃发散的结果，本轮最好只有严格更好才替换 Champion，因此失败轮次不损失已有成果，然后把本轮决策、结果和小结追加进日志。论文还列出自己刻意不做的结构，用来说明 Champion 加日志已经能回答每轮的 3 个问题。

下表要比较的问题是：不做搜索树和复杂状态，循环靠什么记住方向和积累成果，表中每行是一种被省掉的结构及其替代物。

| Left out | Intended purpose | Replacement |
| --- | --- | --- |
| Pattern–action table | Map history to next action | LLM decision over the log |
| Research forest, revive states | Return to old directions | The log plus a new line from the baseline |
| Composite mechanism stack | Track accumulated solution | Champion signature plus code |
| Multi-axis round plan | Express fine-grained intent | Goal-level instruction plus hard constraints |

这张表说明作者把历史到动作的映射、休眠方向的复活、累积解的堆栈和多轴计划都省掉了，分别用读日志的大模型决策、用日志加从基线开新线、用 Champion 签名加代码、用目标句加硬约束来代替。它的限制在于消融只证明 Champion 和日志有用，并没有证明这些省掉的结构加上后一定无用，论文也明确把更丰富的轨迹表示留给未来工作。读者不要把它读成这些结构在所有场景都不需要。

**Search Planner × Literature Retriever × Idea Forge：** Search Planner 把轮次目标变成六个检索计划并避开已试方向；Literature Retriever 按计划找论文、排序并精读三篇；Idea Forge 把论文方法落到起始代码上形成具体改法。三个子步骤把找方向、找依据和落到代码分开，使每个想法的文献依据可以被检查。

**Run × Record：** Run 是把每个想法在独立拷贝的工作区里实现、运行并修错，产出指标或失败诊断；Record 是丢弃发散结果、只在严格更好时更换 Champion，并把本轮写入 Log。两者组合保证失败轮次不丢掉已赢得的最好结果，而成功经验能被下一轮继承。

### 四个任务的输入输出和评价规则

实验用 4 个任务。前 3 个沿用研究智能体基准的划分、基线和主指标。AutoTSF 是 ETTh1 时序预测，输入是历史序列，输出是未来多个长度的预测，指标是平均绝对误差 MAE，越低越好，论文取 96、192、336、720 4 个预测长度的平均，基线是 DLinear，预算 10 轮、每轮 3 个候选。AutoClsSST 是 SST-2 情感分类，输入是影评句子，输出是正负情感，指标是准确率，越高越好，基线准确率 91.63%，10 轮、每轮 3 个候选。AutoCls2D 是 CIFAR-100 图像分类，输入是 32×32 彩色小图，输出是 100 类之一，指标是 top-1 准确率，越高越好，对外比较用已发表的 WideResNet 结果 81.20%，而库内 3 轮冒烟配置只有 49.23%，仅在轮内充当出现首个 Champion 之前的下限，10 轮、每轮 4 个候选。

第 4 个任务 AutoDepDAIC 是语音抑郁检测，输入是临床访谈语音，输出是受试者是否抑郁，刚好是语音方向学生最该细看的部分。数据是 DAIC-WOZ，共 188 名可用受试者。评价采用无泄漏协议：全部受试者混合后做按人分层的五折交叉验证，重复 5 个随机种子，所有训练、超参和阈值选择都只能在每折的训练部分内做，测试折对模型不可见。主指标是 macro-F1，即两类 F1 的平均，越高越好，之所以不用单类 F1，是因为抑郁类是少数类，全判正的退化解在 macro-F1 下只有约 0.23，会被正确压制。

AUC 作为阈值无关的第二指标，用来区分排序能力是否真的变好。基线是冻结 wav2vec2-base 第十二层嵌入加逻辑回归探针，macro-F1 为 0.5610。控制器在这 4 个任务上用同一套提示模板，没有任务专属控制逻辑，只有任务配置和执行环境不同。

实现上 Decide、检索和想法生成都用 deepseek-v4-pro，温度 0.7；执行用 Claude Code 编码智能体，后端是 MiniMax-M3，在各自工作区写码运行；硬件是五块 11 GB 的 RTX 2080 Ti。作者资源当前可用，代码已公开在 GitHub 仓库，本文解读的数字都以论文原文为准。

### 三个基准任务跑出了什么

先看可比性。论文把 Dolphin 和已发表 InternAgent 的数字按原文照录，都是跨轮的最大值；又用同样的模型和编码后端重跑了 InternAgent 开源代码，作为同模型对照；本文数字是最终 Champion 在各自冻结协议下的验证分数，同样取最大值。指标方向是 MAE 越低越好，准确率越高越好。

时序上最终 MAE 为 0.4172，比 DLinear 基线 0.4382 低 4.80%，比重跑的 0.4245 低 1.72%；情感分类最终 95.07%，比基线 91.63% 高出 3 个多百分点，比已发表 93.50% 高 1.57 个百分点，比重跑 92.78% 高 2.29 个百分点；图像分类最终 84.63%，比已发表 81.20% 高出 3 个多百分点，比重跑 83.44% 高 1.19 个百分点。它的成立条件很具体：都是最佳 Champion 的最大值比较，不是平均值；不能把相对百分比和百分点混为一谈，MAE 的 1.72% 是相对下降，准确率的 1.57 是百分点差距。

下表要回答的问题是：在冻结评测和固定预算下，读完整证据的循环逐轮能否从失败轮次中恢复并持续推高 Champion，表中每行是一轮的动作、候选数、失败数和本轮最好 MAE。

| R | Decide (mode/base) | #cand. | #fail | Best MAE ↓ |
| --- | --- | --- | --- | --- |
| 1 | explore/baseline | 3 | 0 | 0.4608 |
| 2 | explore/baseline | 3 | 0 | 0.4947 |
| 3 | explore/baseline | 3 | 1 | 0.5443 |
| 4 | explore/baseline | 3 | 0 | 0.4226 |
| 5 | explore/iter_4_idea_3 | 3 | 0 | 0.4193 |
| 6 | explore/iter_5_idea_1 | 3 | 1 | 0.4184 |
| 7 | explore/iter_6_idea_4 | 3 | 0 | 0.4172 |
| 8 | exploit/iter_7_idea_3 | 3 | 0 | 0.4172 |
| 9 | stop | — | — | — |

这张表是时序任务的逐轮记录，基线 MAE 为 0.4382，每轮 3 个候选。前 3 轮从基线出发试了 3 种已发表风格都没超过基线，第 4 轮控制器复盘后把目标定为跨通道结构，当轮产出首个 Champion 0.4226，之后 3 轮每轮叠一个新机制并持续进步到 0.4172，到第九轮因多轮增益归零而提前停止。它支撑的判断是失败轮次不回退、成功经验能被继承，但限制是这只是单次运行的最大值轨迹，不能读成每一轮都必然进步，R8 相对 R7 只在第五位小数上移动。

图像任务的谱系图把这种继承关系画得最清楚，读图时先看顶行动作，再看绿色主线何时真正换了 Champion。

> **看图路径：** 1. 先看顶行十轮动作如何从开新线转到扩展再转到微调；2. 再看下方绿色主线在哪些轮次真正提升了冠军分数；3. 对比上方浅色区从基线出发的三轮新线为何没有取代冠军

[![原论文 Figure 2：The AutoCls2D run as a lineage of code.](https://arxiv.org/html/2611.22661v1/fig2_case.svg)](https://arxiv.org/html/2611.22661v1/fig2_case.svg)

*论文图 2。原论文 Figure 2:：“The AutoCls2D run as a lineage of code.”。*

这张图上半是每轮动作，下半分两条带。上方浅色带是从基线出发的新线，下方绿色带是 Champion 谱系。可以看到前 3 轮 Champion 从 82.20 经 83.57 涨到 83.91，第 4 轮扩展失败后控制器主动离开停滞谱系，用 3 轮从基线开新线试增强、注意力和优化器方向，但都没超过 Champion，所以 Champion 原样保留。最后 30% 轮次只做微调，2 次微调把 Champion 推到 84.63%，比已发表基线高 3.43 个百分点。虚线框是没有有效结果的失败候选，它们进入日志诊断但不影响 Champion。这张图不支持把某一步的涨幅推广到全程，它只说明在这次运行里换线和收尾微调的分工。

下表要回答的问题与上一张相同，只是换到图像任务：四候选、10 轮预算下，Champion 谱系如何先升后停滞再靠收尾微调登顶，表中数字为 top-1 准确率。

| R | Decide (mode/base) | #cand. | #fail | Best Acc ↑ |
| --- | --- | --- | --- | --- |
| 1 | explore/baseline | 4 | 0 | 82.20 |
| 2 | explore/iter_1_idea_5 | 4 | 1 | 83.57 |
| 3 | explore/iter_2_idea_2 | 4 | 1 | 83.91 |
| 4 | explore/iter_3_idea_4 | 4 | 0 | 83.39 |
| 5 | explore/baseline | 4 | 0 | 81.62 |
| 6 | explore/baseline | 4 | 1 | 80.51 |
| 7 | explore/baseline | 4 | 1 | 82.05 |
| 8 | exploit/iter_3_idea_4 | 4 | 0 | 84.29 |
| 9 | exploit/iter_8_idea_3 | 4 | 0 | 84.24 |
| 10 | exploit/iter_8_idea_3 | 4 | 1 | 84.63 |

这张表是图像任务的逐轮记录，库内冒烟下限为 49.23%，对外比较用已发表 81.20%。R1 到 R3 沿同一谱系从 82.20 涨到 83.91，R4 扩展失败，R5 到 R7 从基线开的 3 条新线最好只有 82.05，都没有取代 Champion，R8 和 R10 两次微调分别到 84.29 和 84.63。它支撑的是离开停滞谱系后靠保留 Champion 来保住已赢成果，再靠收尾微调兑现剩余增益，限制同样是单次最大值轨迹，且 R9 的 84.24 低于 R8，说明微调轮次本身也有失败轮次。

### 语音抑郁检测为什么要换协议

语音方向的学生要特别理解 DAIC-WOZ 的坑。文献里长期存在用同一开发集选模型又报该集分数的做法，会把结果抬高。论文引用的 HAREN-CTC 在这种开发集选择下 macro-F1 可达 0.81，但在无泄漏协议下掉到 0.576。作者因此采用后者：188 人混合、按人分层五折、5 个种子，所有选择都在训练折内部完成，被评分折对模型不可见。最常用的音频基线 DepAudioNet 的移植版在该协议下 macro-F1 为 0.474、AUC 为 0.467，接近随机，说明协议没有给无信号模型留奖励空间。

运行过程是每轮 5 个候选，第二轮 Champion 已到 0.5994，之后 4 轮没有进步，其中两轮甚至没有有效指标，但 Champion 不动，所以不损失已赢成果。从第七轮起控制器转入微调，到 0.6019 后在第 10 轮因连续 3 轮微调每次移动不到 0.003 而停止。因为 0.6019 是 44 个候选在同样折上的最大值，作者把不变的 Champion 代码在 5 个未参与任何选择的新种子上重跑，得到 macro-F1 为 0.6164，波动为正负 0.0166，AUC 为 0.6902，每个种子都不低于 0.5987。这个新鲜种子估计才是对外比较的 headline 数字，它比闭源的最强已发表系统高 4.0 个 macro-F1 百分点、9.1 个 AUC 百分点，比自家基线 0.5610 高 5.5 个百分点。

发现的模型本身是抑郁对比的说话人方向去除，加上对缓存的 13 个 wav2vec2 层的学习注意力，其中 0.81 的注意力集中在第六层 transformer。论文没有说该模型可用于筛查，反而明确指出 188 人、macro-F1 接近 0.6 的产物只是比较控制器的研究制品，不能当诊断工具。复现时只能报聚合指标，不能放音频、转录或按人预测，这既是数据协议的要求，也是避免把研究分数误当临床能力的关键边界。

### 控制器到底需要读多少历史

消融只改 Decide 能看到什么，其他全部固定：同一个大模型和温度、同一套提示骨架和输出格式、同样的生成运行记录层、同样的 10 轮预算，时序每轮 3 个候选、图像每轮 4 个候选。3 种设置是无历史，即看不到 Champion 也看不到日志、每轮都从基线重开；仅上一轮，即只看最近一轮、看不到 Champion；全历史，即看到 Champion 加完整日志，也就是本文控制器。注意 Generate 在 3 种设置下仍读完整日志来做检索计划，变化的只是决策那一步。

结果是 2 个任务上都随看到的证据增多而单调改进。无历史时最好为时序 0.4299、图像 83.71%；只看上一轮时分别到 0.4244 和 84.01%；全历史时到 0.4172 和 84.63%。按论文换算，全历史比无历史在时序上低 2.95%，在图像上高 0.92 个百分点。

它的限制在于只做了 2 个任务，没有拆开 Champion 和日志各自贡献多少，也没有测换其他控制器模型会怎样。时序上无历史最早在第二轮、仅上一轮在第一轮就超过基线，全历史反而到第 4 轮才超过，但最终却是全历史最好，说明早超过基线 1 次不代表控制器好，关键是从首次超过之后还能走多远。图像上库内下限很低，3 种设置第一轮都超过，不能拿首次超过轮次比优劣。

同模型对照提供了第二层证据。用同样模型和编码后端重跑 InternAgent，它在时序上到 0.4245，落后于全历史的 0.4172；在图像上到 83.44%，落后于 84.63%。在时序上，无历史的 0.4299 还落后于重跑，只有读全历史才反超，说明差距不是靠多跑实验堆出来的；在图像上，无历史已经领先重跑，读全历史只是把差距拉大。两层放在一起，才能说增益来自读证据，而不是换了底座。

### 结论在什么条件下才成立

先说适用范围。所有运行只用了一个控制器大模型，没有测换模型后决策质量如何变化；消融只覆盖时序和图像 2 个任务，说明增益随上下文增长，但没有分解哪部分证据最重要；只报了基准 12 个任务中的 3 个，另加一个基准外任务，剩下不少是仓库级大代码库的项目型任务，论文明确没有尝试。日志小结虽被限制只写事实，但仍由大模型书写，写错的事实还是会传给后面决策，这是未被量化的风险。

再说比较公平性。Dolphin 数字照录原文，用的是 GPT-4o 做想法、Claude-3.7-Sonnet 写码和其他硬件，与本文硬件不同；InternAgent 除了照录已发表，还加了同模型同后端的重跑，本文在三项上都领先重跑，这才把差距归到控制器而不是底座。主结果都是最大值比较，没有报均值和显著性，只有语音任务给了 5 个新鲜种子的均值和波动。无训练不等于确定性求解，温度 0.7 和并行执行的随机性仍在，只是 Champion 机制让失败轮次不回退。

伦理上作者把评测协议冻在执行层而不让生成代码改划分，并在语音任务用无泄漏协议和随机水平的基线来约束单指标优化。每条决策都以自然语言记在日志里，事后可审计，这是降低闭环风险的手段；但同类系统也会低成本产出大量看似可信的实证结论，日志只是把每个结论和产出它的运行绑在一起，并不能保证结论为真。

### 想复现第一步做什么

值得尝试的情形是已有可一键跑通的任务仓库、冻结的评测脚本和明确的主指标，且能承担每轮多个候选的完整执行。第一步不是调控制器提示，而是先把基线跑出验证下限，把 Champion 为空时的起点、指标方向和预算定死，再准备一份同设置下的已发表路线综述，用来给控制器定目标水平。执行栈只要满足两点就能挂控制器：能把自然语言指令变成给定工作区的可运行代码改动并回传指标，有现代编码智能体即可；能保留 Champion 工作区，因为扩展和微调都要从它的拷贝出发。

下表要回答的问题是：循环的 4 个阶段和基线拷贝分别对应已有智能体系统的哪些现成组件，哪些必须新增，复现时按表搭即可。

| Phase | Implementation role |
| --- | --- |
| Decide | New controller LLM node over the Champion and the log |
| Generate | Existing search planner, retriever, and idea generator |
| Run | Existing code runner and scheduler |
| Record | New log writer and Champion updater |
| Base copying | Existing parent-workspace copy mechanism, if available |

这张表把 Decide 对应到 Champion 加日志上的新控制器节点，把生成对应到已有搜索、检索和想法模块，把运行对应到已有代码运行和调度，把记录对应到新日志和 Champion 更新，把基线拷贝对应到已有父工作区拷贝机制。它的含义是固定迭代规则将被读 Champion 和日志的决策步取代。限制在于不同仓库的拷贝、调度和指标解析细节不同，表里没有给出具体接口，复现时要按自家仓库补齐，还要保留后 30% 只微调或停止等护栏，否则预算分配会走样。仍需补的验证是换控制器模型、拆 Champion 与日志各自作用，以及在更多模态和更大代码库上重做消融。

### 一句话总结与行动顺序

综合来看，论文把轮间决策从搜索结构里抽出来，证明只读 Champion 和事实日志的大模型也能做这个决策，而且看到的证据越多最终越好，但每一步结论都绑在特定数据、划分和最大值比较上。行动顺序是先冻住评测、跑通基线、备好综述，再以小预算跑通 1 次全历史循环并检查日志是否把事实和解读分开，最后才扩大候选数或换任务。语音任务的无泄漏协议和新鲜种子重跑是值得抄走的做法，它能避免把 1 次好运当成方法进步。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.22661v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-19/)
