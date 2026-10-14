---
title: "When History Helps and Hurts: Selective History Use across Multimodal Turns"
date: 2026-10-11
draft: false
tags: [音视频问答, 基准设计, 基准测试, 模型评估]
categories: [论文速递]
description: "ReTurn 用 7000 个配对任务测模型能否按当前请求选用历史问题或历史证据，最强证据是单轮到多轮中位准确率从 93.7% 掉到 72.3%，而复述请求与监督微调只能部分挽回且长对话冲突条件仍很弱。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.11948"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "多轮对话里该用哪段历史：ReTurn 如何测选择性历史使用"
paper_digest_original_title: "When History Helps and Hurts: Selective History Use across Multimodal Turns"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.11948v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.11948v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.11948v1.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"research_focus","id":"research_focus.evaluation","label":"模型评估"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "ReTurn 用 7000 个配对任务测模型能否按当前请求选用历史问题或历史证据，最强证据是单轮到多轮中位准确率从 93.7% 掉到 72.3%，而复述请求与监督微调只能部分挽回且长对话冲突条件仍很弱。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shuoyang Sun"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kerui Gu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hao Fang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shaoli Huang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Bin Chen"}]
paper_digest_abstract_sha256: "43e77f6f3d16c23f68d2dc9f1be74828c37411e13cdc39d0609a87bbf3491b68"
paper_digest_sidecars: {"citation.bib":{"sha256":"32b0b0a7026dae28354ef61b92b724d870d94dac47b8000a3256dfa081d0f45e","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-11948/citation.bib"},"citation.json":{"sha256":"95e0f08736011892629ab054a8578979eed5fa91c5ccac69ad455674ee30b16d","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-11948/citation.json"},"citation.ris":{"sha256":"dfe6d33308b07a38c3c9349bd468c53a656c924d04019f49ed205794e02cc7ff","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-11948/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"1d8c18f10ee0bcf000fd7eac5103898da66ac0fc5d014bc1a597b40686559ecf","url":"/audio-paper-digest-blog/data/papers/2026-10-11/2610-11948/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f93bc89a5eb19d7e73fdb9ec03ce9a7e6bf476604da3996d28c9a1e0c1109ec3"
paper_digest_api_reader_plan_sha256: "f429b119d86256d6d380c0c329968bfbc76ac5f906eb089c58d0dc1d5778c1f5"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "195135f540db82c580feb83e47acc348f3a8b42b65b9a7856bce491870cf34ba"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "0aa4783b80c5a9bed4c8c20ffe49aaedba3c3bd84f6063c00eac264c8c6f09f6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "8ebc68323bf5e1f6f00fe895fb3310d38512c559a7db058c9c6c76fc5fe247fc"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ecfbf1528d2d64d69797a9788c31e5e4ca6b27bc709418a5a1ff2c259aa8d7d5"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 多轮对话里该用哪段历史：ReTurn 如何测选择性历史使用

> 英文题目：*[When History Helps and Hurts: Selective History Use across Multimodal Turns](https://arxiv.org/abs/2610.11948v1)*

> 标签：#音视频问答 | #基准设计 | #基准测试 | #模型评估
>
> 评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Shuoyang Sun：机构信息未在 arXiv HTML 中可靠披露
- Kerui Gu：机构信息未在 arXiv HTML 中可靠披露
- Hao Fang：机构信息未在 arXiv HTML 中可靠披露
- Shaoli Huang：机构信息未在 arXiv HTML 中可靠披露
- Bin Chen：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

多轮多模态交互的难点是按当前请求选择性使用历史：早先问题可能要用于新的媒体，历史媒体也可能仍是回答当前问题的证据，而过时答案或竞争性新媒体会带来干扰。ReTurn先构造7000个有目标问题、目标媒体与正确答案的基础任务，覆盖视觉与音频证据，并配有匹配的单轮输入作为可答性参照。接着把基础任务嵌入多轮对话，任务携带历史把历史问题继承到当前媒体作答，证据携带历史则用历史媒体回答当前完整问题。再对每种历史只改上下文做配对对比：Reconfirm与Reground对比历史答案一致或冲突，Retrieve与Rebind对比当前非目标媒体竞争弱或强，目标问题、目标媒体与正确答案保持不变。每个任务有开放问答与四选一选择题两种呈现，13个全模态、视觉语言与音频语言模型的中位开放问答准确率从直接输入的93.7%降到多轮对话的72.3%，长对话与冲突条件下降更大。诊断显示模型能复述历史问题却用不好，替换当前竞争媒体也会改变答案指向，推理时重述与监督微调只能部分修复。该结论只适用于引用明确、历史较短且媒体可能跨划分复用的受控构造，明确改述、长程终身对话、完全独立媒体与多人复核范围尚未验证，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://link-world.github.io/ReTurn/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 多轮多模态对话到底难在哪里

这篇论文研究的是持续多轮对话中的多模态问答。输入是交替出现的用户文本与图像或音频片段，目标是在最后一轮按用户当前请求给出正确答案，必须保留的信息可能是早先出现的问题，也可能是早先出现的媒体证据，输出是开放问答的自由文本或选择题的选项。困难在于历史兼具两种作用：有用的历史缺了就答不出来，误导的历史又会把答案带偏。例如用户说对新片段再答一遍第一个问题，旧答案可能已经过时。

用户说回答我最早分享的第一个片段，当前新片段又可能长得很像而形成竞争。论文把这种按需取舍称为选择性历史使用。读者先看图一左侧的总体落差与右侧两个失败例子，就能抓住全文主线：单轮直接给问题加目标媒体时模型大多能答对，放进对话后同样的问题与媒体就变难了。

> **看图路径：** 1. 先看左侧各模型单轮与多轮两条横条的落差与右侧 Gap 数值；2. 再看右侧任务复用失败与证据选择失败两个例子中历史与当前各提供了什么；3. 注意红色标出的错误答案与下方绿色正确答案的对应关系

[![原论文 Figure 1：Selective history use in ReTurn.](https://arxiv.org/html/2610.11948v1/intro.png)](https://arxiv.org/html/2610.11948v1/intro.png)

*论文图 1。原论文 Figure 1:：“Selective history use in ReTurn. (a) Single-turn versus multi-turn OpenQA accuracy across model families, evaluated on supported modalities.”。*

图一左侧用横条对比单轮与多轮开放问答准确率，右侧给出任务复用与证据仲裁两个例子。左侧落差说明对话本身带来退化，右侧例子说明退化有两种不同机制：一种是沿用旧答案而没有重看当前片段，另一种是被当前片段捕获而没有回到历史证据。后文所有配对条件都是为了把这两种机制分开测量。

### 已有评测为什么分不清历史使用与题目难度

原文比较了多轮视觉对话、视频、音频与流式音视频评测，以及对话记忆类工作。很多已有评测只看多轮总分，没有提供去掉历史后直接输入问题加目标媒体的参照，因此分不清是题目本身难还是历史使用难。也有评测考察信息更新，但没有把任务携带历史与证据携带历史分开，也没有在保持目标问题、目标媒体与正确答案不变的前提下，只改变历史一致性或当前竞争强度。

论文用一张对照表说明只有 ReTurn 同时具备更新、直接输入参照、两种历史角色区分与目标不变的冲突配对设计。该比较是在输入、目标与评测阶段相同的意义上谈设计差异，不是同一任务上的精度胜负，规模单位也各不相同，不能直接比数字大小。

### 论文要解决的具体问题与对照思路

论文要回答的是：当历史问题必须复用但旧答案可能过时，当历史证据必须使用但当前有竞争媒体，模型能否选中当前请求真正需要的那部分历史。解决思路是构造局部配对：每对任务固定目标问题、目标媒体、正确答案、选项与对话长度，只改变历史媒体是否支持相同答案，或只改变当前非目标媒体的竞争强度。再配一个单轮参照，把完整问题与目标媒体直接给模型，用来估计题目本身的可答性。

多轮评测保留模型自己生成的历史回复，早先答错也会留在上下文里，这样测到的是原生对话行为，而不是用标准答案历史粉饰后的表现。短对话含两个带媒体的用户轮，长对话含 5 个带媒体的用户轮，证据模态只标识答题必需的通道，不限制全模态模型实际看到的通道。

### ReTurn 的整体流程与四种条件如何分工

ReTurn 从 FineVideo 与 LLaVA-Video-178K 定位片段，来源标注只用于检索定位，不直接当答案证据，再用 Doubao-Seed-2.0-Lite 对照实际视觉或听觉内容验证问题与答案，并用模型辅助做清晰性、一致性与泄漏检查。每个基础任务扩展出开放问答与四选项选择题两种视图，共 7000 个基础任务组成 3500 个配对，每种操作各 1750 个，视觉与音频证据各 3500 个，短长各 3500 个，开发集 2000 个、测试集 5000 个。任务侧 Reconfirm 与 Reground 要求把第一个问题用于当前目标媒体，证据侧 Retrieve 与 Rebind 要求用当前完整问题回答历史目标媒体，同时当前轮仍有非目标媒体。

**任务携带历史 × 证据携带历史：** 任务携带历史指历史轮提供当前要复用的问题，模型要用它去看当前媒体；证据携带历史指历史轮提供回答当前完整问题所需的媒体，模型要回到历史媒体找答案。二者分工正好互补，前者考问题复用，后者考证据定位，组合起来才能覆盖历史既当任务来源又当证据来源的两种需求。

整体评估时每个模型在支持的模态上分别跑单轮与多轮，冻结规则先打分，被拒的回答再由 GPT-5.6 Sol 在不知模型与条件的情况下复核内容，不确定判为错误。核心指标是对话退化，即单轮准确率减多轮准确率，以百分点为单位。配对内比较看历史一致性或当前竞争带来的变化，分数只用单轮与多轮都有有效回答的配对。下图展示从已验证种子到受控条件的展开与配对评估协议。

> **看图路径：** 1. 沿左上已验证种子问答向中部两条分支看配对构造如何展开；2. 比较上分支当前胜与下分支历史胜的目标指向差异；3. 再看下半部分多轮原生历史与单轮直接输入的对照测量逻辑

[![原论文 Figure 2：ReTurn construction and evaluation. Verified media–question pairs yield matched task-carrying and…](https://arxiv.org/html/2610.11948v1/bench.png)](https://arxiv.org/html/2610.11948v1/bench.png)

*论文图 2。原论文 Figure 2:：“ReTurn construction and evaluation. Verified media–question pairs yield matched task-carrying and evidence-carrying conditions.”。*

图二上半部分说明种子问答如何分出任务携带与证据携带两条分支，以及参照与冲突条件的胜方指向，下半部分说明多轮原生历史与单轮直接输入的对照方式。看图时注意任务侧箭头强调同一历史任务，证据侧强调同一目标来源，右侧实例化部分给出短长、界面与模态的划分与任务总数。

### 目标定义：问题与证据如何跨轮配对

论文用符号区分历史问题与当前问题、历史媒体与当前媒体。任务携带目标是把历史问题用于当前媒体，证据携带目标是用当前问题问历史媒体，答案都由问题与媒体共同支持。该形式化只是把哪问配哪段媒体写清楚，不引入额外假设，竞争与一致性都指媒体所支持的答案关系，不是模型原生回复的内容。

\[y^{\star}_{\mathrm{task}}=a(q_{h},m_{c}),\qquad y^{\star}_{\mathrm{evidence}}=a(q_{c},m_{h}).\]

上式中历史问题记为 qh，当前问题记为 qc，历史媒体记为 mh，当前媒体记为 mc，函数 a 表示该问题在该媒体下被支持的答案。第一项对应 Reground 与 Reconfirm 的目标，第二项对应 Rebind 与 Retrieve 的目标。理解这个配对后，才能明白后文所说的绑定失败是指答案跟错了问题与媒体的组合，而不是单纯没记住历史。

**Reconfirm × Reground：** Reconfirm 与 Reground 都是任务携带历史，目标问题、当前目标媒体和正确答案都固定，区别只在历史媒体支持的答案是否与目标一致。Reconfirm 是历史答案仍可用的一致参照，Reground 是历史答案已过时的冲突条件，配对比较才能把会背旧答案与真正重看当前媒体区分开。

**Retrieve × Rebind：** Retrieve 与 Rebind 都是证据携带历史，当前问题指向历史目标媒体，区别只在当前非目标媒体的竞争强度。Retrieve 配较弱竞争者，Rebind 换成能支持另一个 plausible 答案的强竞争者，配对比较才能检验模型是真的选中历史证据，还是被同轮的新媒体带走。

**历史可及性 × 跨轮绑定：** 历史可及性指能否把需要的历史问题或历史媒体内容找回来，跨轮绑定指能否把问题和它应属的证据在正确轮次配对，并抵抗同轮内错误配对的干扰。前者是找回，后者是用对地方，二者搭配解释了为何能背出历史问题仍可能答错当前媒体。

论文还强调两个易误解点：只看 Reconfirm 答对不能证明模型重看了当前媒体，因为历史答案本来就对；Retrieve 竞争较弱也不等于没有竞争。短长对话不是严格的同题加长，长任务侧插入 3 个干扰媒体问答轮，证据侧目标位置也可能不同，因此长短比较是配置比较，不是纯长度效应。

### 没有训练新基座时构造与微调各算什么

这项研究的主体是基准构造与评测，没有从头训练新的多模态基座模型。构造阶段的计算是检索、验证与配对：定位片段、验证问答是否 grounded、按答案关系配对历史与当前媒体、检查清晰性与泄漏。评测阶段调用 13 个现成模型，包含全模态、视觉语言与音频语言模型，各自生成原生历史并回答最后一轮。缓解实验另做两类学习外干预与小规模监督适应。

推理时复述是把继承的问题与原始选项在最后一轮显式给出，重加权是解析出目标媒体指代后在最终回答位置把非目标媒体与历史助手文本的注意力键缩放为 0.5 并重归一化，路由策略按请求是否含完整问题决定用复述还是重加权。监督适应只在 Qwen3-Omni 上用 Dev-Train 派生的 1018 个短开放问答视图做 LoRA 微调，目标是拟合答案，另有一致性变体在答案不变的配对上加 Jensen-Shannon 惩罚。

\[\mathcal{L}_{\mathrm{SFT+Inv}}=\mathcal{L}_{\mathrm{CE}}+\lambda\,\mathrm{JS}\!\left(p_{\theta}(\cdot\mid h_{i}),p_{\theta}(\cdot\mid h_{j})\right),\]

上式中交叉熵拟合答案分布，JS 项约束同一答案在不同历史下的候选分布一致，系数为 0.1。训练用相同起点、相同数据顺序与相同 LoRA 初始化，批量为 5、更新 204 步，候选集只在训练时用，测试时不提供。单模型单种子的结果不能推广为通用训练结论。

### 评测条件、计分与聚合方式

单轮输入直接给目标媒体与完整问题：任务侧给当前媒体，证据侧给历史目标媒体，它是经验上的可答性参照，不是理论上限，也不是简单删掉历史的多轮提示。多轮输入保留模型在该界面下自己生成的历史回复，不同措辞或前缀下的回复不混用。视觉模型只消费视觉媒体，音频模型消费原始配套音频，全模态的托管配置用完整同步音视频。计分看最终答案内容，开放问答与选择题分开，冻结规则先判，拒判的再盲审，不确定计错。

聚合时全模态模型在双模态上汇总，视觉模型只看视觉任务，音频模型只看音频任务，跨界面平均时先各自在有效分母上算率再平均。有效配对总数接近 95000 个模型任务界面视图中的 94984 对，极少数因无效回答被排除。

**开放问答 × 选择题：** 开放问答要求模型自由生成答案内容，选择题要求从四个选项及字母映射中选出答案。开放问答更考生成与证据 grounded，选择题额外考选项继承与字母映射继承，两种界面对照才能发现选项复述带来的特殊增益。

模态与界面分析要分开看，因为操作不同，敏感点可能反转。选项继承在任务侧选择题中额外重要，问题复述与选项复述要分开测。历史槽位、指代措辞等诊断会同时改变内容与负载，不能当纯距离实验读。

### 数据划分与来源重叠如何影响结论

开发集 2000 个任务含 1500 训练与 500 验证，测试集 5000 个，划分用配对与事实组元数据而非最终模型分数。目标是直接可答性高且有可测历史效应，不要求每题单轮都对。来源审计显示测试任务中有 3072 个输入父视频出现在开发中，1875 个出现在实际梯度训练数据中，目标父视频在开发与训练中分别为 918 与 486 个。不同事实可共享父媒体，测试样本数不能当独立来源数。

要求所有输入父视频与开发不交集会剩 1928 个任务且去掉所有长 Retrieve 与 Rebind，因此来源过滤后的汇总描述的是不同暴露与任务混合下的表现。评分另有冻结规则与复核内容的敏感性审计，替代评分仍保留正向退化，但改变了 judge 与 rubric 的联合选择，不能当单纯 judge 效应。媒体 grounded 抽查 30 比 31 与金答案一致，剩余一题保留分歧，不估计全集金答案错误率。

### 主结果：单轮会答不等于多轮会用

13 个模型的中位开放问答准确率从单轮 93.7% 掉到多轮 72.3%，中位对话退化为 20.1 个百分点。长对话退化更大，开放问答中位退化从短的 6.8 个百分点升到长的 34.5 个百分点，选择题从 19.0 升到 36.9 个百分点，12 到 13 个模型在长对话更差。冲突条件暴露参照条件掩盖的弱点，长开放问答中位从 Reconfirm 的 79.5% 掉到 Reground 的 48.5%，从 Retrieve 的 78.9% 掉到 Rebind 的 19.9%。模态上 6 个全模态模型的 Rebind 退化都是音频更大，而 5 个模型的 Reground 退化是视觉更大。界面上开放问答与选择题多轮差距中位总体为 2.5 个百分点，但在 Reground 上达 24.4 个百分点，11 个配置在汇总后 Reground 选择题低于开放问答。下图汇总配对条件、模态与界面的分布，阅读时注意条形是准确率，热图是退化差，箱线是分布而非单点。

> **看图路径：** 1. 先看左图任务侧与证据侧单轮到参照再到冲突的三段条形落差；2. 再看中图六个全模态模型音频减视觉的对话退化差异方向；3. 最后看右图选择题减开放问答在 Reground 上的分布偏移

[![原论文 Figure 3：Paired conditions, modality, and answer interface.](https://arxiv.org/html/2610.11948v1/section4_profiles.png)](https://arxiv.org/html/2610.11948v1/section4_profiles.png)

*论文图 3。原论文 Figure 3:：“Paired conditions, modality, and answer interface.”。*

图三左图显示单轮到参照再到冲突的两条需求阶梯，中图显示音频减视觉退化的操作反转，右图显示选择题减开放问答在长短对话下的分布。结合指标方向看，条形越短表示该条件越弱，热图正负表示哪种模态退化更大，箱线偏负表示开放问答更高。这些都是在目标不变的配对下观察到的，因此更可能与历史使用有关，而不只是题目变难。

下面第一张表是问题与选项继承的格式匹配对照，比较问题是复述哪部分请求能修复 Reground，公平条件是 4 组共享媒体、原生前缀与解码，只在最后一轮是否重复历史问题与原始选项上不同，指标是选择题准确率，方向为越高越好。

| Model | Operation | Accuracy (%) | Accuracy (%) | Accuracy (%) | Accuracy (%) | Gain over Neither (pp) | Gain over Neither (pp) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Operation | Neither | Question | Options | Both | Question | Options |
| Qwen3-Omni | Reconfirm | 97.7 | 94.5 | 99.2 | 100.0 | -3.1 | +1.6 |
| Qwen3-Omni | Reground | 57.8 | 72.7 | 99.2 | 98.4 | +14.8 | +41.4 |
| MiniCPM-o 4.5 | Reconfirm | 85.9 | 90.6 | 98.4 | 97.7 | +4.7 | +12.5 |
| MiniCPM-o 4.5 | Reground | 29.7 | 42.2 | 92.2 | 96.1 | +12.5 | +62.5 |

表前说明已交代比较问题与公平条件，表后解释如下：4 个准确率子列为 Neither、Question、Options、Both，2 个增益子列为 Question、Options，均为相对 Neither 的 pp 增益，n=128 每格的格式匹配 MCQ 对照。选项复述的增益远大于单纯问题复述，Qwen3-Omni 上选项带来 41.4 个百分点而问题只带来 14.8 个百分点，MiniCPM-o 上分别为 62.5 与 12.5 个百分点，同时补两者对前者无额外增益而对后者还有提升。这说明任务继承不止是记住问题，还包括选项候选与字母映射，限制是该对照样本每格 128 个任务且为格式匹配基线，不能直接当主表原生提示的分数。

### 总体数字表：参照强而冲突弱

为保留可核验的主结果，这里用原文连续句整理总体与配对落差，比较问题是直接输入与对话的差距以及参照与冲突的差距，条件是同一目标与同一模型的有效配对，指标方向为准确率越高越好、退化越小越好。

| 比较对象 | 指标 | 条件 A | 条件 B | 落差含义 |
| --- | --- | --- | --- | --- |
| 13 模型中位开放问答总体 | 准确率 | 单轮 93.7% | 多轮 72.3% | 对话带来明显退化 |
| 长对话开放问答任务侧多轮配对 | 准确率 | 多轮 Reconfirm 79.5% | 多轮 Reground 48.5% | 历史答案过时后应用变弱 |
| 长对话开放问答证据侧多轮配对 | 准确率 | 多轮 Retrieve 78.9% | 多轮 Rebind 19.9% | 强竞争下历史证据选择变弱 |

表后解释与限制如下：总体落差说明单轮可答性不能保证多轮能用对历史，配对落差是同为多轮的参照与冲突比较，不是单轮到多轮的落差，分别对应 Reconfirm 到 Reground 的历史一致性比较和 Retrieve 到 Rebind 的当前竞争强度比较。该表是跨模型中位汇总，不能代表每个模型，例如 Qwen3.8-Omni-Flash 相对稳健而部分小模型与音频模型在 Rebind 上退化极大。短长差异还混入历史组成变化，不能读成纯长度因果。个别模型的单多轮执行后端不同，跨模型比较还受输入处理与解码差异影响。

### 任务侧诊断：能背出问题不等于会用

论文先单独探查历史问题的显式回忆，再在最后一轮复述问题。Qwen3-Omni 与 Qwen3.8-Omni-Flash 在 Reground 开放问答探查中回忆率达 96.8% 与 99.8%，但对话任务准确率只有 81.8% 与 84.1%，复述后升到 95.2% 与 96.4%，MiniCPM-o 回忆本身较弱而复述增益更大。历史答案中和化则效果不一致，甚至让其中 2 个模型变差，因此不能把失败简单归为旧答案残留。上面选项对照已说明选项继承是另一大头。诊断图左侧圆环把修复与致错分开，中心报告变化，阅读时注意内环是原始对错，外环是干预后保持、修复与致错。

> **看图路径：** 1. 先看左上问题复述三组圆环的修复比例与中心增益；2. 再看左下历史答案中和化增益很小甚至为负的对比；3. 最后看右图替换竞争媒体后目标准确率几乎不动但新竞争答案匹配大涨

[![原论文 Figure 4：Task- and evidence-side interventions (OpenQA).](https://arxiv.org/html/2610.11948v1/diagnosis_combined.svg)](https://arxiv.org/html/2610.11948v1/diagnosis_combined.svg)

*论文图 4。原论文 Figure 4:：“Task- and evidence-side interventions (OpenQA).”。*

图四左上显示问题复述带来 12 到 34 个百分点的提升而致错至多 1 个百分点，左下显示中和历史答案增益微弱或为负，右图显示替换竞争媒体后目标准确率几乎不动但新竞争答案匹配大涨。结合看，相关历史可能仍可及，但最终答案跟错了问媒配对，这正是跨轮绑定失败的行为证据，而不是单个错误的因果分解。

下面用原文连续句整理诊断数字，比较问题是回忆与应用是否分离以及去掉当前媒体的影响，指标方向为准确率越高越好。

| 对照类型 | 对象与界面 | 另起回忆探查 | 对话任务准确率 | 含义 |
| --- | --- | --- | --- | --- |
| 显式回忆对照对话应用 | Qwen3-Omni Reground 开放问答 | 96.8% | 81.8% | 高回忆伴随弱应用 |
| 显式回忆对照对话应用 | Qwen3.8-Omni-Flash Reground 开放问答 | 99.8% | 84.1% | 高回忆伴随弱应用 |

表后解释如下：回忆探查是另起请求测出的 elicited 回忆，对话任务是同一条件下的会话作答，二者是不同请求而非同一对象的前后干预，不能反推原始错误中有多少是没想起；去掉媒体的提升混入输入负载下降，因此必须看替换竞争者的实验。替换后目标准确率变化很小而新答案匹配率从接近零升到 30% 以上，且长对话增幅更大，说明答案内容被竞争媒体牵引。限制是替换改变多个感知属性，不是单值因果，且文本线索可能仍残留。

### 证据侧与缓解手段：重加权与微调各补多少

证据侧先问与最终请求不同的历史来源事实，开放问答达 66.9% 到 85.7%，低于直接输入的 90.4% 到 92.1%，说明保留了可观来源信息但直接看仍更容易。替换当前竞争者后 Qwen3-Omni 目标准确率从 52.6% 到 51.7% 几乎不动，而与替换媒体答案的匹配从 0.1% 升到 36.5%，12 组配置都出现准确率变化小但匹配上升，表明稳定准确率掩盖了错误答案内容的变化。缓解上 Dev-Val 缓存历史对照显示复述与路由有提升，重加权增益小而混杂。

测试集上 Qwen3-Omni 短开放问答训练的监督微调在多轮开放问答提升 3.42 个百分点、选择题提升 2.36 个百分点，单轮保持，长开放问答也有 4.36 个百分点提升，但长 Rebind 仍只有 26.2% 开放问答与 29.9% 选择题，长选择题 Reconfirm 还降 1.3 个百分点。一致性正则相对匹配的监督微调只多对 1 个开放问答与 10 个选择题，区间跨零。

| 策略 | 适用请求 | 增益与比较基线 | 代价与限制 |
| --- | --- | --- | --- |
| 复述 | 历史问题请求 | Dev-Val 提升数个百分点 | 依赖显式指代结构，需缓存历史 |
| 重加权 | 含完整问题请求 | Dev-Val 增益小而混杂 | 需解析媒体指代并调注意力 |
| 路由分流 | 历史问题请求用复述、含完整问题请求用重加权 | Dev-Val 优于中性执行 | 依赖显式指代结构，需缓存历史 |
| 监督微调 | Qwen3-Omni 多轮 | Test 上相对 Base +3.42pp 开放问答 | 单模型单种子，长冲突仍弱 |
| 一致性正则 | 同上 | Test 上相对匹配 SFT +0.02pp 开放问答（+0.20pp 选择题） | 无明确额外收益 |

表后解释如下：复述用于历史问题请求，重加权用于含完整问题请求，路由按此请求类型分流而不应将路由整体归为仅历史问题请求；复述直接补任务继承，路由分流后比重加权更稳，但都只是部分缓解；微调相对 Base 在 Rebind 与长 Reground 上有改善且在排除训练源重叠后仍有 3.14 个百分点增益，说明不只记住了训练媒体，但残余错误集中在长历史下的证据选择。一致性正则的增益是相对匹配 SFT 的增量，与监督微调相对 Base 的增益基线不同，不能放在同一基线下直接排名。未胜出项是重加权与一致性正则，它们在多数格子没有稳定增益。测试与验证的 history 生成方式不同，跨面板不能直接排名干预与适应。

### 结论在什么条件下才成立

主结论成立依赖 3 个条件：目标不变的配对与单轮参照同时存在，模型用原生历史而不用标准答案历史，以及在支持模态上评测。若去掉配对，参照强不能证明会用历史；若用标准历史，早先错误的影响会被抹掉。模态结论只在全模态模型的音频减视觉退化上成立，且任务侧与证据侧方向相反，不能合成一句音频更难。界面结论集中在 Reground 上选择题更弱，不能推广为选项总能简化对话。

干预结论依赖显式指代结构与缓存历史，换自然指代或端到端重跑可能变化。微调结论是单模型单种子、短开放问答训练的结果，长与选择题并非完全未见，但仍需多模型多种子与独立媒体复现。自动化构造与评分没有人工一致性估计，诊断是行为响应而非个体错误分解。

### 复现第一步与关键设置

复现先从项目页获取代码、预览任务与完整基准，注意媒体按来源许可分发，第三方页面可用不等于作者已开源权重或系统。按附录配置重建输入：视觉本地模型用静音视频从零帧按 2 帧每秒采样、最长边 768，音频用原始配套波形，全模态托管配置用同步音视频，解码与批量按记录的运行键设置。每个模型分别在开放问答与选择题下从时间前缀递归生成助手回复，保留早先错误，单轮给目标媒体加完整问题，多轮在原生历史后答最后一轮。

只在单多轮都有有效回答的配对上算准确率与对话退化，跨界面平均先各自算率再平均。干预复现要固定 SDPA、解码与缓存历史，微调复现用相同起点、数据顺序、LoRA 层位与 204 步预算，并让各检查点生成自己的测试历史。记录有效分母、规则分与内容分、修复与致错数，避免把搜索最优或事后最优当可部署提升。

### 什么时候值得尝试与还缺哪项验证

当你的多轮助手需要复用早先问题看新媒体，或需要回到早先媒体回答新问题，且 histories 较长、当前有相似竞争内容时，值得用 ReTurn 的配对照测选择性历史使用，并优先试最后一轮复述继承问题与原始选项。重加权只在能可靠解析目标指代时小步试用，监督微调可作为单模型基线但别指望解决长 Rebind。还缺的验证是更长更自然的指代、完全独立的媒体划分、多模型多种子的适应复现，以及人工核验的 grounded 与评分一致性。

常见误解是把单轮分高当多轮一定好，把 Reconfirm 高当已会重看当前媒体，把去掉当前媒体的回升当纯竞争效应，把稳定准确率当答案内容没变，原文的配对、替换与匹配率分析正是为纠正这些误读而设。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.11948v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-11/)
