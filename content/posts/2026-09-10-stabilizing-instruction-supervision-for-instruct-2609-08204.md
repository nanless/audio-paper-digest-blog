---
title: "Stabilizing Instruction Supervision for Instruct-TTS via Controllable Diversification and Drift Filtering"
date: 2026-09-10
draft: false
tags: [文本到语音, 数据清洗, 数据增强, 语音]
categories: [论文速递]
description: "论文把 Instruct-TTS 训练不稳归因于标签转指令中超过 40% 的语义漂移，用可控改写扩大覆盖、用大模型校验过滤保真、再用音高语速音量扰动补齐韵律监督，在中文评测上把平均指令遵循率做到 56.4%，代价是组合过滤只保留约 61.5% 候选。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.08204"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "指令 supervision 不稳：先把改写漂移管住，再把覆盖面铺开"
paper_digest_original_title: "Stabilizing Instruction Supervision for Instruct-TTS via Controllable Diversification and Drift Filtering"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.08204"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.08204.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.data-cleaning","label":"数据清洗"},{"facet":"method","id":"method.augmentation","label":"数据增强"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "数据清洗"
paper_digest_score: 6.7
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把 Instruct-TTS 训练不稳归因于标签转指令中超过 40% 的语义漂移，用可控改写扩大覆盖、用大模型校验过滤保真、再用音高语速音量扰动补齐韵律监督，在中文评测上把平均指令遵循率做到 56.4%，代价是组合过滤只保留约 61.5% 候选。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yizhong Geng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kecan Mao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qifei Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Cong Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yingming Gao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ruimin Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chunfeng Wang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hao Li"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ya Li"}]
paper_digest_abstract_sha256: "ffcb810c7f445db5f49358ead1468074557661dbf5ee408ed53f362af1057caa"
paper_digest_sidecars: {"citation.bib":{"sha256":"9773202710d604df3fdf82f2b30c5a545fbdc61c93c6c06a2b47c3f6b1c1f5c9","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08204/citation.bib"},"citation.json":{"sha256":"deb0bdfbb706b1cb9423a4c6715086393cb929c3cbc6a01dc950614fc5b91340","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08204/citation.json"},"citation.ris":{"sha256":"ddb8c6d6d3b39dc993c2cb575b059848564428345279ed7d92c2c4bee5ab6f1a","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08204/citation.ris"},"rethink-context.json":{"sha256":"14d4ce2011b7bfe2c5b4e78cf1c93e0b5e5e6bec1348b96363e6993e388a2bc9","url":"/audio-paper-digest-blog/data/papers/2026-09-10/2609-08204/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "b8030e73a26be3db7815389971fe6e262a060b4a37c3a54a765718fdb0494f16"
paper_digest_api_reader_plan_sha256: "2bc6d0f56d9957635e6c84396c1637bc4e53ab00179a3cc71795f5408a42c80d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "868aa38abf232f2899f311bfb1395d9b7e691154296788da6c2eed06bd2bd7ca"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "6c25943628248fa9e0bc1b796797c6e84ac9d3b8700102f4edc49f2e2734e06e"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "9cb7785c3ac117e8d5beb9b4202d98631135ba03b1c811648c52b41d550f2f12"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9740b9d4f721cd0052555db8debd628c08079cacc81d3d20e12ba05c10cfc4b6"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 指令 supervision 不稳：先把改写漂移管住，再把覆盖面铺开

> 英文题目：*[Stabilizing Instruction Supervision for Instruct-TTS via Controllable Diversification and Drift Filtering](https://arxiv.org/abs/2609.08204)*

> 标签：#文本到语音 | #数据清洗 | #数据增强 | #语音
>
> 评分：**6.7/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yizhong Geng：机构信息未在 arXiv HTML 中可靠披露
- Kecan Mao：机构信息未在 arXiv HTML 中可靠披露
- Qifei Li：机构信息未在 arXiv HTML 中可靠披露
- Cong Wang：机构信息未在 arXiv HTML 中可靠披露
- Yingming Gao：机构信息未在 arXiv HTML 中可靠披露
- Ruimin Wang：机构信息未在 arXiv HTML 中可靠披露
- Chunfeng Wang：机构信息未在 arXiv HTML 中可靠披露
- Hao Li：机构信息未在 arXiv HTML 中可靠披露
- Ya Li：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

指令式语音合成以自由文本指令为输入、以可控风格语音为输出，难点在于大规模指令-语音监督需同时覆盖真实用户多样表达并保持语义忠实，否则漂移会腐蚀训练信号。为此先做属性对齐监督，对短片段做音高语速音量参数化扰动并配模板属性提示，为低层韵律提供可信接地信号。接着做可控多样化，以人物视角与句法模式组合枚举改写并设属性槽不可省略硬约束，将种子属性系统扩展为候选指令。再做漂移过滤，用异家族大模型验证器对候选打分并对边界样本多采投票，仅保留多数判无漂移者形成稳定指令-语音对以微调同一基座。相对无约束改写与朴素微调，该链条差异在于覆盖扩展与忠实性控制解耦又衔接，前者只增多样仍残留漂移，后者以分类法显式剔除执行化、角色代入与实体标签三类腐蚀，实际意义是同时提升泛化与可控性。在InstructTTSEval中文划分基准下，全配方的指令遵循平均准确率相对朴素微调为51.0%升至56.4%，且高于无微调基线的34.5%。其适用边界受限于中文短片段语料与三任务三类漂移，跨语言、长时与开放韵律外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要保留什么？

本文解读的对象是标题为 Stabilizing Instruction Supervision for Instruct-TTS via Controllable Diversification and Drift Filtering 的论文，面向刚进入语音合成的研究生。输入是结构化风格标签和短语音片段，目标是让模型听懂自由表述的自然语言指令并合成出对应风格的语音。必须保留的信息包括 3 类漂移的定义与占比、3 个机制各自的操作、中文评测上的基线与完整方案数字、以及过滤带来的数据保留代价。输出是一套可核对、可复述的数据处理方法，而不是新声学模型结构。

先说白话：指令式语音合成，英文名 Instruct-TTS，就是用户不再点选固定标签，而是直接写一句话描述想要的声音，模型要照做。论文指出这条路线的瓶颈不在模型本身不会跟随，而在训练用的指令-语音对质量不稳。常见做法是把标签转指令，英文名 label-to-instruction，即用模板或大模型把口音、情感、风格标签改写成自然语言。无约束改写看起来多样，实则超过 40% 会发生语义漂移，英文名 semantic drift，把控制意图悄悄改掉。

理解这一点后，后文的方法才有学习依赖：先看清漂移长什么样，再看如何约束生成、如何过滤、如何补齐底层韵律。

### 同输入同目标的已有路线在比什么？

已有 Instruct-TTS 路线包括 PromptTTS、PromptTTS 2、InstructTTS、VoxInstruct 和 ParlerTTS，它们的输入同样是自然语言提示加待合成文本，目标同样是可控语音，区别主要在模型结构和训练目标上把控制维度从风格扩展到情感、口音和韵律。另一条相关路线是传统可控合成，用参考音频嵌入或离散风格标签控制整体风格，用信号处理或模型内部控制调节音高、语速和音量。自然语言处理中的 Self-Instruct、Evol-Instruct 和大模型作评委过滤，主要解决指令数据的多样性和质量，但默认通用提示就能管住质量。

论文的对照点在于：语音的指令监督有领域特有的漂移，例如把说明怎么说写成了直接说台词，或把控制者写成了角色扮演者，这在通用文本指令筛选中没有被形式化。本文不改主干合成模型，而是把上游监督数据的覆盖面和保真度当作主战场，因此与上述工作正交。复述时不要把类别差异当成同条件胜负：外部 VoxInstruct 是官方检查点，内部基线是同一 CosyVoice 2 主干上的无微调与朴素微调，只有后者能说明数据处理本身的作用。

### 监督不稳具体指哪三种写坏？

论文把两个耦合弱点统一为指令监督不稳定性，英文名 instruction supervision instability。第一个弱点是同质化，改写句式和视角单一，覆盖不了真实用户的说法。第二个弱点是语义漂移，改写悄悄改变控制含义。作者通过标注 800 条大模型扩写指令，总结出 3 类漂移。第一类是指令变执行，英文名 instruction-to-execution drift，改写不再说明怎么说，而是直接说出目标风格的台词，在指令与表演边界模糊的任务上危害最大。

第二类是角色代入，英文名 role-assumption drift，改写变成第一人称角色发言，教模型模仿人物而非服从控制。第 3 类是实体或标签漂移，英文名 entity/label drift，悄悄改掉情感、口音或风格等种子属性，直接破坏属性级保真。

**标签转指令 × 指令监督不稳定性：** 标签转指令负责把口音、情感、风格等结构化标签改写为自然语言训练指令，承担覆盖面来源的分工；指令监督不稳定性描述这类改写同时引入同质化和语义漂移、从而污染训练信号的状态。两者搭配的原因是只看改写数量会漏掉保真度，只看单条对错会漏掉覆盖面，组合意义是把问题定位为数据质量问题，先分类漂移再同时治覆盖和保真。

下面这张图把 3 类漂移放在同一种子下对照，顶部的种子是要求用北京口音叙述，三行分别展示写坏的样子，是全篇分类的像素依据。

> **看图路径：** 1. 先看顶部种子指令框确认同一输入都是北京口音叙述；2. 再逐行对比三类漂移框中红色漂移示例与灰色说明的差异；3. 注意第三行把北京改成四川，这是最直接的属性篡改；4. 思考第一行直接说台词为何会教模型执行而非服从控制

[![原论文 Figure 1：Three drift types in LLM-rewritten instructions: a drifted output versus the expected faithful…](https://arxiv.org/html/2609.08204v1/fig_drift_examples.png)](https://arxiv.org/html/2609.08204v1/fig_drift_examples.png)

*论文图 1。原论文 Figure 1:：“Three drift types in LLM-rewritten instructions: a drifted output versus the expected faithful instruction from the same seed attributes.”。*

从像素看，第一行说明文字是输出目标风格而非指令，红色示例直接以 Hey folks 开头说台词；第二行说明是代入角色而非下指令，红色示例以 As a Beijing host 开头；第三行说明是悄悄改变种子属性，红色示例写成四川口音、会话式。三行共用同一虚线圆角外框，图标分别是铅笔、人物讲台和层级节点，帮助区分执行、角色和属性 3 类。教学例子：若种子是北京口音、叙述风格，忠实指令应是请用北京口音叙述，而漂移版本可能是嘿大伙儿听我说这段就错了，前者是控制，后者是表演。这个例子只说明概念，不代表论文实测数值。

### 三步稳定配方如何串成一条流水线？

全景分 4 段：数据准备、可控多样化、漂移过滤、稳定微调与评测。先沿一个样本走完全程：一段 30 秒以内的中文短语音带结构化标签，例如口音和风格；同一段音频再做音高、语速和音量的参数化扰动，并配上模板化的属性提示，形成底层韵律的接地对；种子属性进入受约束的大模型改写，按人物视角乘以句式枚举出多个候选；候选与种子一起送入另一个模型家族的校验器打分，低分丢弃，边界样本多次投票，只有多数判无漂移才保留。

保留的高保真指令与语音配对后微调 CosyVoice 2，再到中文 InstructTTSEval 上测试泛化。关键是顺序不能反：先用约束把覆盖面系统铺开，再用过滤把残余漂移拿掉，最后用扰动补齐改写写不准的连续韵律量。
下面这张总览图是复述的骨架，四栏编号从左到右对应上述 4 段，箭头表示数据流向，漏斗表示过滤。

> **看图路径：** 1. 沿 1 到 4 编号看主路径从原始切分音频到稳定微调与评测；2. 看第 2 栏三个约束如何同时进入生成指令框；3. 看第 3 栏漏斗左侧三类漂移如何被分流剔除；4. 看第 4 栏人类 True False 与 Gemini True False 双路评测汇合点

[![原论文 Figure 2：Overview of our data-centric stabilization recipe: (1) data preparation with structured labeling…](https://arxiv.org/html/2609.08204v1/fig_method_overview.png)](https://arxiv.org/html/2609.08204v1/fig_method_overview.png)

*论文图 2。原论文 Figure 2:：“Overview of our data-centric stabilization recipe: (1) data preparation with structured labeling and pitch/speed/volume perturbation; (2) controllable instruction diversification…”。*

从像素看，第 1 栏自上而下是原始切分语音、结构化标签、属性扰动数据，中间 2 次向下箭头分别标注已标注和已扰动；第 2 栏上方是改写提示框，下方并列句法、人物、属性槽 3 个约束图标，再向下是生成指令框；第 3 栏上方是候选指令框，中间是大模型校验器打分加投票，漏斗左侧分出 3 类漂移示例，右侧向下输出高保真指令；第 4 栏是高保真指令加语音片段进入指令语音合成模型，再经中文评测合成，最后分叉到人类与 Gemini 两路真假判定。读图时不要猜模块颜色深浅代表性能，只认箭头汇合关系。

### 约束改写与校验过滤各自算什么？

先讲白话：可控指令多样化，英文名 controllable instruction diversification，就是给大模型戴上紧箍咒再让它发挥。3 个约束分别是人物视角、句法模式和属性槽位。人物视角指定说话人立场以分散语用意图；句法模式限定表面形式以减少对模板的依赖；属性槽位要求所有目标属性不可丢弃，防止漏写导致实体漂移。

实现上是把这些作为硬要求写进改写提示，对每个种子枚举人物视角乘以句法模式的组合，例如论文生成器侧最多每个种子 24 个候选，对应 6 种人物乘以 4 种句式，使覆盖增长系统且有界。约束改写已把总漂移从 40.4% 降到 15.4%，但残余仍不可忽略，所以必须过滤。

**可控指令多样化 × 漂移过滤：** 可控指令多样化通过限定人物视角、句式和属性槽位来生成等义变体，分工是系统性扩大覆盖；漂移过滤用另一个模型家族的大模型校验器打分加投票剔除已漂移候选，分工是守住保真。搭配理由是只扩多样会把残余漂移也放大，只过滤不扩多样则覆盖面不足，组合后形成先约束生成、再剔除残余的两道闸。

再讲过滤：漂移过滤，英文名 drift filtering，用与生成器不同家族的大模型作校验器以避免自我评价偏好。输入是种子规格加候选指令，输出是漂移或无漂移判定、漂移类别和置信分。低于阈值的直接丢弃，边界样本多次独立采样，只有多数投无漂移才保留。论文用 GPT-4o 作校验器，阈值取 10 分制中小于等于 5，边界用自一致投票。这种打分加投票暴露了覆盖与保真的可调权衡，与通用指令过滤管线一致。

第 3 个组件是属性对齐监督，英文名 attribute-aligned supervision，专门管底层。做法是对每段音频做音高正负 1、2、3 半音、语速乘以 0.8、0.9、1.1、1.2、1.3、音量正负 3、6、9 分贝的扰动，每段得到 17 个变体，再用轻量模板映射为简洁属性提示。与自由改写不同，这里的监督来自真实声学操作而非大模型想象，因此音高、语速和音量学得住。

**属性对齐监督 × 标签转指令改写：** 属性对齐监督用参数化声学扰动配模板化属性提示，分工是给音高、语速、音量提供高保真接地信号；标签转指令改写分工是表达高层情感和风格。搭配原因是自由改写对底层连续韵律量描述不可靠，组合意义是用扰动补齐改写覆盖不到的低层可控维度。

补充打分与投票的配合细节也很重要，因为阈值和投票常被误认为重复。

**打分阈值 × 自一致投票：** 打分阈值负责 1 次判定中按置信度丢掉明显漂移，分工是快速截断；自一致投票负责对边界样本多次独立采样取多数，分工是降低单次误判。搭配原因是阈值太严会误伤、太松会漏网，组合后形成覆盖与保真之间可调的权衡旋钮。

### 数据构造与微调的真实计算过程是什么？

训练不是从零训练声学模型，而是在 CosyVoice 2.0-0.5B 上做有监督微调，英文名 supervised fine-tuning。数据侧先有约 90 小时中文语音、12,000 段短片段，每段短于 30 秒，覆盖 8 类口音和 10 类说话人风格并带结构化标注。每段再做上述 17 个扰动变体，扰动与模板提示配对构成属性分支。指令侧用 DeepSeek-R1 作生成器，GPT-4o 作校验器，保留约 61% 候选，比较过 GPT-4o、DeepSeek-R1 和 QwQ-32B 后认为前者多样且保真更好，细节与完整提示在补充材料。优化器用 AdamW，学习率 2 乘以 10 的负 5 次方，批量 16，3 个周期，余弦退火加 500 步热身。

监督来源是两类配对：高保真自然语言指令与原始语音的配对，以及属性提示与扰动语音的配对；梯度路径是标准微调更新主干，论文未报告冻结哪些层或重置时机，这部分是缺项，不能从模型名推定实现。评测时用未见过的指令测试泛化，自动判分用 Gemini 3 Pro 边听合成音频边看指令文本打分，人评由 20 名母语听众每种设置评 20 条，按 1 到 5 分给自然度和可控性。没有像素级公式证据时，本节不虚构展示公式，只讲清输入、变换和监督去向。

### 在什么数据和指标上测，条件是否一致？

评测用 InstructTTSEval 中文子集，含 3 个任务：属性控制发音与风格，英文缩写 APS；对话场景描述，英文缩写 DSD；角色扮演，英文缩写 RP。指标分 3 类：指令遵循准确率由 Gemini 判定，方向越高越好；可懂度用字错率，英文名 character error rate，方向越低越好。

人评用自然度平均意见分和可控性平均意见分，英文名 NMOS 与 CMOS，1 到 5 分越高越好并报告 95% 置信区间。公平条件上，内部比较固定同一 CosyVoice 2 主干，只换数据处理：无微调基线、朴素微调训于未过滤改写、完整方案训于过滤后高保真指令加属性分支。外部 VoxInstruct 用官方检查点跑相同指令，但主干不同，只能参考不能当同条件胜负。3 个管线阶段分别用 DeepSeek-R1、GPT-4o 和 Gemini，以减少单一大模型系统偏差。人评规模、扰动档位和微调超参数如上一节所述，补充材料另有判分稳定性与生成器定量比较。

当前没有完成 HTTPS 状态验证的开源资源证据，因此不得声称代码、模型或数据已公开，本次也未能确认演示页可达，复现只能按论文文字重做。

### 完整方案比基线好多少，代价是什么？

要回答的主问题是：在同一主干下，稳定配方是否同时改善遵循率、可懂度和听感。公平条件是同一中文评测、同一三任务平均、自动判分与人评双轨。指标方向是准确率、NMOS、CMOS 越高越好，字错率越低越好。下表先看漂移率，比较无约束自由改写与加了人物、句式和槽位约束后的改写，800 条人工标注对半划分。

| Drift Type | Unconstrained | Constrained |
| --- | --- | --- |
| Instruction-to-Execution | 18.3 | 7.1 |
| Role-Assumption | 12.7 | 4.5 |
| Entity/Label | 9.4 | 3.8 |
| Total | 40.4 | 15.4 |

表后解释：无约束总漂移 40.4%，其中指令变执行 18.3%、角色代入 12.7%、实体标签 9.4%；加约束后总量降到 15.4%，3 类分别降到 7.1%、4.5% 和 3.8%，每类约减半但残余仍需过滤。这个表只说明约束生成的作用，不能直接当最终性能。
第二个比较看过滤策略在 DSD 上的准确率与保留率，保留率越高说明覆盖损失越小，准确率越高说明保真越好。

| Filtering Strategy | DSD Acc. (%) | Retention (%) |
| --- | --- | --- |
| No Filtering | 57.3 | 100.0 |
| Threshold Only | 63.8 | 72.3 |
| Voting Only | 63.5 | 68.1 |
| Scoring & Voting | 65.4 | 61.5 |

表后解释：不滤时 DSD 为 57.3% 且保留全部；只用阈值到 63.8% 且保留 72.3%，只用投票到 63.5% 且保留 68.1%，两者结合最好到 65.4% 但只保留 61.5%。主要收益是组合策略精度最高，具体代价是丢掉近四成候选，未胜出项是单策略保留更多但精度稍低，边界是阈值与投票强度可按数据规模再调。
第 3 个比较看主结果的多维对照，包含平均准确率、字错率与人评，列数达到五列以便 1 次核对音质与控制。

| 条件 | 平均准确率 | 字错率 | 自然度平均意见分 | 可控性平均意见分 |
| --- | --- | --- | --- | --- |
| 外部 VoxInstruct 参考 | 47.5% | 未在此表列出 | 3.18 | 3.12 |
| 无微调基线 | 34.5% | 35.0% | 3.30 | 未在此表列出 |
| 朴素微调 | 51.0% | 19.2% | 3.46 | 未在此表列出 |
| 完整方案 | 56.4% | 未在此表列出 | 4.16 | 4.16 |

表后解释需要至少 25 个汉字：完整方案平均到 56.4%，相对无微调 34.5% 和朴素 51.0% 持续领先，人评双 4.16 比其他系统高出 0.7 以上，支持监督质量是自然度与可控性瓶颈的判断；代价是过滤后数据量减少，且外部基线主干不同只能参考；反例是朴素微调已把字错率从 35.0% 降到 19.2%，说明数据量本身也有用，不能把全部功劳归于过滤。

**自然度平均意见分 × 可控性平均意见分：** 自然度平均意见分评价合成语音听起来是否自然，分工是守住音质底线；可控性平均意见分评价语音是否按指令要求变化，分工是检验指令是否被执行。搭配原因是自动判分只看是否跟随，听感需要人评补齐，组合意义是同时确认好听和听话。

### 拿掉每一块会掉多少，哪块最关键？

消融的问题是三机制是否互补。条件是都从完整方案出发每次只拿掉一块，指标仍是三任务平均准确率。先看文字版的逐项结果：拿掉可控多样化后平均到 51.8%，说明系统覆盖扩展超出单独过滤的作用；拿掉属性对齐后平均到 53.1%，但 APS 从 49.5% 掉到 42.7%，说明底层分支专管低层属性；拿掉漂移过滤后平均掉到 48.9%，尽管训练集反而变大，论文还做了等量对照，支持增益来自剔除漂移而非数据量。

下面的五列表把过滤与互补放在同一视野，数值全部来自正文连续原句，避免混放不同条件。

| 设置 | DSD 准确率 | 数据保留率 | 平均准确率 | APS 变化与说明 |
| --- | --- | --- | --- | --- |
| 仅阈值 | 63.8% | 72.3% | 未在此表列出 | 快速截断明显漂移 |
| 仅投票 | 63.5% | 68.1% | 未在此表列出 | 边界多次采样取多数 |
| 打分加投票 | 65.4% | 61.5% | 56.4% | 最佳精度但保留最少 |
| 去属性分支 | 未在此表列出 | 未在此表列出 | 53.1% | APS 从 49.5% 掉到 42.7% |

表后解释需要较长篇幅：过滤是单块影响最大的一块，去掉后从 56.4% 掉到 48.9%，且数据量更大反而更差，反驳了数据越多越好的直觉。

多样化和属性分支分别贡献覆盖与底层接地，拿掉后到 51.8% 和 53.1%，说明三者互补而非重复。未胜出项也要点名：在 APS 的情感维度上朴素微调为 50.0%，高于完整方案的 42.6%，论文解释为未过滤改写过度堆积情感描述，平衡配方纠正了这种偏置，这是典型的负结果纠偏。按属性拆开看，音高从 24.6% 到 56.7%、语速从 26.3% 到 58.2%、音量从 8.7% 到 40.5%，增益约 32 个百分点，情感增益约 21.4 个百分点，支持扰动对明确声学维度帮助更大。这里的加号是百分点差值，不是相对百分比，复述时不要写成提升百分之多少。

### 还有哪些没测到、不能承诺？

论文直接报告的是中文子集上的结果，英文和其他语言是否同样有效属于待验证，不能承诺跨语言迁移。判分依赖 Gemini 3 Pro 自动听音加人评双轨，虽然用了不同模型家族减少偏差，但自动判分的误判率、稳定性细节只在补充材料，本文按正文不展开。未测量的量包括训练与推理开销、延迟、输出帧率和过滤本身的计算成本，因此不能说方法更省算力或更快。

数据上扰动只覆盖音高、语速和音量三轴，情感等高层风格仍靠标签，完整方案在情感上反而低于朴素微调，说明平衡配方有取舍。过滤阈值与投票次数是可调的，61.5% 保留率是当前 operating point，不是普适最优。缺失证据不是技术错误：未报告冻结层、梯度细节和划分外的新说话人泛化时，应明确标注缺项，而不是从模型名推定实现。总体趋势不等于每组每步都成立，引用时要同时给出数据集、基线、阶段、指标和聚合对象。

### 要复现先做什么，需要补哪项验证？

何时值得尝试：当你的指令数据也是把标签用大模型改写而来，且发现模型有时直接说台词、有时代入角色、有时改掉属性时，这套先约束后过滤的思路最对症。复现先做三件事：第一，按人物视角、句法模式和属性槽位写出硬约束改写模板，对每个种子枚举组合生成候选，并人工抽检 800 条量级的漂移率以确认基线；第二，用与生成器不同家族的模型作校验器，先定置信阈值再对边界样本做多次投票，只保留多数判无漂移的，记录保留率与精度的权衡。

第三，对每段音频做论文档位的音高、语速和音量扰动并配模板提示，单独训练属性分支以验证 APS 低层维度是否提升。关键超参数与信息条件包括扰动档位、每种子最多 24 候选、阈值 10 分制 5 分、微调学习率与批量周期，以及评测用未见指令。还需补的验证是等数据量对照、判分稳定性复测和另一语言或另一主干上的重复。由于本次没有可用资源证据，不写代码已公开或权重可下载，复现应视为按文字重做系统。

若只有小规模数据，可先只做阈值过滤再逐步加投票，观察保留率是否跌破可用下限。

### 一句话收束：覆盖与保真为何必须一起治？

回到起点：模型不是不会听话，而是训练信号又窄又脏。约束改写把说法铺开，过滤把写坏的拿掉，扰动把说不清的韵律量用真实声学操作补上，三者缺一不可。记住两个数字关系：约束把漂移从 40.4% 压到 15.4%，过滤再把残余压到约 5% 并把平均推到 56.4%，但组合过滤只留下约 60%数据。这就是全文的取舍：用数据量换监督纯度，再用系统化枚举把覆盖赚回来。带走的可操作结论是：以后做指令驱动生成，先给漂移分类计数，再谈多样性。

先做过滤的等量对照，再谈精度提升。这个视角按论文说法可能迁移到语音之外的指令生成，但迁移本身尚未验证，引用时用可能或待验证的措辞。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.08204)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-10 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-10/)
