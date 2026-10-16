---
title: "Full-Duplex Interaction with Speech, Expressions and Gestures"
date: 2026-10-16
draft: false
tags: [全双工语音交互, 端到端学习, 语音驱动手势生成, 语音, 流式处理]
categories: [论文速递]
description: "论文用一个全双工对话主干同时驱动语音合成与手势表情合成，并用语义调用加模板库补足稀疏的语义手势，在保持语音问答与轮流准确率的同时提升了对话手势与表情指标，但结论只在所建 138 段人工验证集与所用参考型评测条件下成立。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.21452"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "边听边说边做手势：全双工对话如何同时生成语音、表情和手势"
paper_digest_original_title: "Full-Duplex Interaction with Speech, Expressions and Gestures"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.21452v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.21452v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.21452v1.pdf"
paper_digest_primary_task: "全双工语音交互"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"method","id":"method.end-to-end-learning","label":"端到端学习"},{"facet":"task","id":"task.speech-driven-gesture","label":"语音驱动手势生成"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"setting","id":"setting.streaming","label":"流式处理"}]
paper_digest_primary_method: "端到端学习"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "论文用一个全双工对话主干同时驱动语音合成与手势表情合成，并用语义调用加模板库补足稀疏的语义手势，在保持语音问答与轮流准确率的同时提升了对话手势与表情指标，但结论只在所建 138 段人工验证集与所用参考型评测条件下成立。"
paper_digest_authors: [{"affiliations":["Tsinghua University"],"name":"Siyin Wang"},{"affiliations":["Tsinghua University"],"name":"Wenyi Yu"},{"affiliations":["Tsinghua University"],"name":"Terumi Chiba"},{"affiliations":["ByteDance"],"name":"Xianzhao Chen"},{"affiliations":["ByteDance"],"name":"Xiaohai Tian"},{"affiliations":["ByteDance"],"name":"Jun Zhang"},{"affiliations":["ByteDance"],"name":"Lu Lu"},{"affiliations":["Tsinghua University"],"name":"Chao Zhang"}]
paper_digest_abstract_sha256: "11acecef3b130f3b4440149f72f4fb0844d29d678bd50a288272057428451e88"
paper_digest_sidecars: {"citation.bib":{"sha256":"49a463b7f66c51e8d19bd4e5eb582d00625dae29e4aab97a0138506fe4f64b25","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-21452/citation.bib"},"citation.json":{"sha256":"8d922ba7e1208c8f6f837365a8d0da97819621deed1f500c8c5e2656546cc28f","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-21452/citation.json"},"citation.ris":{"sha256":"f6c7e4dfc4d5504b0ccaa9be581e6bac8eb209502ebe85b0a1fdf13d2e3cfaf4","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-21452/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"bc745ff0837510fdcd7679c0016f84e164a309c530939ccda09cb7027831efd7","url":"/audio-paper-digest-blog/data/papers/2026-10-16/2610-21452/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "8bbc1fde637b7a40cbfc487a5420655b75ebba7e47a37d8047e26d5ee18dab62"
paper_digest_api_reader_plan_sha256: "d5020027760863ea2aaeab91054024f4303f327ab760d99d98e4293ded123e09"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "6878dd735de8e2244c8fcf838b23cec01b6581ed9284cdb97b3652cfe8bf53f4"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "a74d6fa6b857dbaa906808c727f8bf52a0e63a3397116b05a06a39f726c0715d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e1ea35100020ce97720ec97d5c8ebb0a9f032d9bc53eea883c3ad70c9f5a3450"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "30af563e6d1866730c0968727bd36d69463a67c794b7e6aace5773ead5e3a007"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 边听边说边做手势：全双工对话如何同时生成语音、表情和手势

> 英文题目：*[Full-Duplex Interaction with Speech, Expressions and Gestures](https://arxiv.org/abs/2610.21452v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-paper-digest-blog/papers/?concept=task.full-duplex)；[语音驱动手势生成](/audio-paper-digest-blog/papers/?concept=task.speech-driven-gesture)
- **研究方法**：[端到端学习](/audio-paper-digest-blog/papers/?concept=method.end-to-end-learning)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Siyin Wang：Tsinghua University
- Wenyi Yu：Tsinghua University
- Terumi Chiba：Tsinghua University
- Xianzhao Chen：ByteDance
- Xiaohai Tian：ByteDance
- Jun Zhang：ByteDance
- Lu Lu：ByteDance
- Chao Zhang：Tsinghua University

## 📌 核心摘要

面对面交谈要求说话与倾听同时协调语音、手势与表情，现有全双工语音模型能同时听与说，现有手势模型多以后处理方式根据已给语音生成动作，缺少由对话理解统一调度可见行为的机制。ELLSA 2以连续对话骨干为中心，大语言模型骨干输出隐状态表征听到的对方语音声学上下文与对话状态，流式语音合成器输出隐状态表征自身说话内容与声音，两者与保留的预训练声学特征相加形成条件。手势表情合成器按0.8秒分块自回归生成上身、手部与表情编码，即使输出语音为静默也持续生成倾听反应，实现听说共用的在线非言语生成。对话骨干另设语义调用头判断当前文本上下文是否适合特定语义手势，触发后检索馆藏范例并作为引导插入生成序列，把是否调用与如何实现分开。在包含71个语义片段的人验测试集上，带模板引导的ELLSA 2的人类语义评分Human S（1-5分，越高越好）为2.711，高于无引导ELLSA 2的2.014。在TriviaQA语音问答的S2S回答准确率（%，越高越好）上，ELLSA 2为63.6%，高于SALMONN-omni的56.0%。结论适用于筛选后的可见说话人与短片段对话评估，视觉感知、馆藏覆盖以外的数据泛化尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/bytedance/SALMONN/tree/ELLSA2> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/marcoyang/transformer-causal-600m-spear-speech> — 暂时无法访问

- 第三方资源：<https://genea-workshop.github.io/leaderboard/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 面对面聊天要同时处理什么输入和输出

这篇论文研究的不是单轮问答，而是两个人可以同时出声的面对面式交互。输入是连续进来的对方语音，输出是己方的语音、文本控制词、上半身与双手动作、以及面部表情与口型。难点在于倾听时也不能停：对方说话时己方虽不发声，仍要用点头、微笑、姿态收放来做回馈；说话时手势既要跟上节奏，又要在少数时刻把词义比画出来，比如说到大房子时双手向外打开表示空间范围。

传统做法是先把语音对话跑完，再按已生成的语音去套动作，这就把非言语行为降成了事后动画，拿不到对方的实时上下文，也难决定何时该做语义手势。论文把手势表情看成对话过程的一部分，要求同一个在线流程里持续产出语音与可见行为，并保留说话与倾听两种状态的区分。

读者可以把任务记成连续时间块上的多流生成：每块都要消费最新输入语音，决定说或静默，同时给出下一段手势表情，评价也要覆盖语音质量、轮流时机、听说活跃差异、节奏对齐、双工行为得体性和语义传达。

### 已有路线在输入目标和运行阶段上有何不同

语音交互一侧，已有端到端模型省掉了识别加对话加合成的固定文本接口，保留了副语言线索，全双工进一步允许边听边说，做法有监听器加生成器双模型、连续语音生成、显式对话状态预测等，SALMONN-omni 是本文沿用的时间块框架。手势表情一侧，多数工作以骨骼或 SMPL-H 与 SMPL-X 关节点为表示，用自回归、扩散或流匹配建模，条件多是己方语音，双人设置才同时用说话人与对话者语音，表情也有类似的双人条件扩展。

还有工作把视觉感知与机器人操作接到全双工上，或用多任务同时支持语音交互与手势生成，或把冻结的语音交互表示拿来条件化手势。ELSS A 2 的区别按原文是联合优化：语音对话主干不冻结到只提供特征，而是在第四阶段与手势表情通路一起更新，让对话表示去适应多模态行为生成。

比较时要注意条件并不相同：只说基线只看己方语音，双人基线看双方语音，本文系统还多看了对话主干的文本前瞻与隐藏状态，测试集也特意偏向打断、重叠、回馈与语义手势，因此不能把类别差异直接读成同条件胜负。

### 论文把大问题拆成了哪几个可验证的子问题

论文把综合对话拆成 4 个可测问题。第一，流式对话感知生成：每 0.8 秒用说话与倾听两路语音表示生成对应的手势表情，要求因果、在线、保留长程上下文，静默时仍能做倾听反馈。第二，听说双流如何接入已有语音主干：说话流用语音合成器输出语音词元相关的隐藏状态，倾听流用大语言模型主干处理输入语音时的隐藏状态，两者与预训练声学特征融合，主干发静默词元时说流用空表示代替。

第三，稀疏语义手势怎么做：日常录像里明确语义动作少，节奏性动作会主导学习目标，论文把是否调用与如何实现分开，先由语义调用头按上下文决定，再取库中示例引导身体与手的生成，表情与口型仍按当前对话走。第四，如何评交际功能：几何质量与节奏对齐不够，要补听说状态区分、韵律对照、参考型双工分与语义分，并检验自动判分与人评在系统级的吻合度。

数据上对应三件事：筛出适合学习的说话人加表情监督、建 3227 个示例的语义库、做 138 段人工验证的双工加语义测试集。

### 整体流程中语音与动作两条线如何汇合

整体是一个连续时间块上的统一在线流程。对话主干每步消费最新输入语音表示并生成文本输出，文本再驱动流式语音合成器，手势表情合成器同时从两处拿条件：一处是主干处理输入语音的听流状态，一处是合成器输出语音的说流状态，外加各自冻结的声学条件。手势表情每 800 毫秒走一个块，块内按说话音频、倾听音频、手势表情词元交错排布，用语言模型的序列建模融合跨模态信息并保留 20 秒流式上下文，缓存刷新时保留最后三块以维持连续。

表示上身体用 SMPL-H、手与表情分区用残差向量量化编码，下半身因可见性不可靠而不学；表情用 FLAME 参数并把嘴部子空间单独建模。两种生成模式共用一个合成器：自由生成只看对话上下文，引导生成在块首额外插入语义示例的引导词元，让后续目标在有示例的条件下延续，而不是直接替换姿态。下图展示了主干、合成器与双模式块结构的关系。

**全双工对话主干 × 手势表情合成器：** 全双工对话主干指持续监听用户语音并持续决定说或静默的语言模型加语音合成通路，手势表情合成器指每 0.8 秒生成一组身体、手和表情离散编码的自回归语言模型；前者提供听与说的隐藏状态作为对话上下文，后者把这些状态与保留的声学特征相加后作为条件，两者搭配才让手势在说话和静默倾听时都连续生成。

> **看图路径：** 1. 先从左侧用户语音经语音编码器到大语言模型主干再到语音合成器的主路看起；2. 再看从主干和合成器各引出一路隐藏状态进入手势表情合成器的两条箭头；3. 对比下方自由生成与引导生成在 800 毫秒块内多出的引导手势块；4. 注意每一步生成 18 个编码中上身、手、非嘴表情和嘴部表情的数量分配

[![原论文 Figure 1：ELLSA 2 jointly models full-duplex speech, gesture, and facial expression generation.](https://arxiv.org/html/2610.21452v1/seg_1.png)](https://arxiv.org/html/2610.21452v1/seg_1.png)

*论文图 1。原论文 Figure 1:：“ELLSA 2 jointly models full-duplex speech, gesture, and facial expression generation.”。*

上图上半是系统框图，下半是两种模式在一个 800 毫秒时钟内的词元排布。可见听流与说流隐藏状态是手势表情合成器的唯 2 对话条件来源，自由模式块内只有两路语音加动作表情，引导模式在最前多了引导手势块。每步要并行预测 18 个码本序号，其中上身 6 个、手部 6 个、非嘴表情 4 个、嘴相关 2 个，这种分解让后续损失可以按码本深度加权，也让引导只作用于身体与手而不搬运模板说话人的口型。

### 每 0.8 秒的块内生成具体算什么

块内计算是带条件的自回归分类。语音编码器把 30 赫兹动作序列下采样到 7.5 赫兹潜变量，语音表示是 12.5 赫兹，于是每 0.8 秒对应 10 个说话语音嵌入、10 个倾听语音嵌入和 6 个动作潜步，每潜步含 18 个码本序号并有各自预测头。历史块的已生成手势表情作为时间上下文，因果注意力保证流式时看不到未来块。条件融合按流分别做残差相加：冻结声学条件加一个随训练步长从 0.01 爬升到终值的系数乘以投影后的主干或合成器状态，听流终值 0.1，说流终值 0.25，说流在静默时被空表示代替。

对齐上对话主干按 80 毫秒步进，合成器按 8 个文本词元一组处理，每块对齐 10 个 12.5 赫兹听状态与 20 个 25 赫兹原始说状态再分组到条件速率。训练时只有目标码位进交叉熵，引导与声学位置标签为负不计损失；推理时贪心解码，第一块用风格提示加对齐语音起步，无历史目标。

**听流隐藏状态 × 说流隐藏状态：** 听流隐藏状态取自大语言模型主干处理输入语音嵌入时的最后一层状态，携带对方声学上下文与推断的对话状态，说流隐藏状态取自流式语音合成器输出语音词元相关状态，携带将要说的语义与声学实现；两者分别经各自连接器投影后与冻结声学条件相加，缺说流时用可学习的空表示代替，从而区分说话动作与倾听反馈。

\[p(z_{k}\mid z_{\lt k},c_{\leq k})=\prod_{j=1}^{6}\prod_{q=1}^{18}p_{\theta}\!\left(z_{k,j}^{(q)}\mid z_{\lt k},z_{k,<j},c_{\leq k}\right).\]

上式说明第 k 个块的联合概率按 6 个潜步与 18 个码本逐项分解，条件是当前及历史块的听说条件，同一潜步内 18 个头共享隐状态并行预测，不再对量化深度做第二遍自回归。

\[c_{k}^{r}=\phi_{k}^{r}+\gamma_{r}(u)P_{r}(h_{k}^{r}).\]

上式是每流每块的条件构成，菲是冻结声学条件，括号内是投影后的主干或合成器状态，伽马是随更新步数变化的残差系数，2 流系数分开设置，保留了原始声学通路贯穿集成全程。

### 语义调用何时触发以及模板如何不增加延迟

语义调用头挂在对话主干第 16、20、24 层隐藏状态的混合上，对每个候选词位做二分类，判断在此处插入库中某个可用动作族是否合适。词表把归一化多词短语映射到动作族，在生成文本端点处保留以该端点结尾的最长匹配并挂到最后子词上，这一步只说明库里有这个动作，能否用由调用头按因果前缀与已见对话上下文判定。

判定要早于对应手势生成，否则取示例会加延迟，论文利用思考者与说话者异步、文本跑在语音实现前面的结构，在前瞻文本上先算调用概率并提前备好示例，再按锚定词端点时间戳把模板排到与语音同步的位置，留出预备动作与生成计算的前置时间。通过阈值且族唯一并经两词元非极大抑制后才接受调用，族内按语义置信、手势质量与可见性排序取首个模板；否则无条件自由延续。

引导实现上示例词元作为分隔的引导块放在对应块的语音条件与目标码之前，只条件化 12 个身体与手码本，面部与嘴目标仍是当前对话的，避免搬运模板说话人的发音口型。训练引导是逐块暴露 8 块固定窗，推理用验证过的事件跨度按 133 毫秒潜网格量化成每块至多 6 个引导步，跨度结束即恢复无引导延续。

**语义调用 × 模板引导：** 语义调用指对话主干中间层外接的二分类头判断当前词位是否适合做一个有明确含义的手势，模板引导指调用通过后取出库中对应动作族的高质量示例动作并作为引导词元插入生成序列；前者只解决是否做，后者只解决怎么做，两步分离避免了稀疏语义动作被大量节奏性动作淹没。

调用质量在候选条件平衡测试集上报告为 87.8% 的 F1 与 87.0% 的准确率，混淆矩阵为 144、30、10、124，阈值 0.706 是在开发集上按事件 F1 以 0.001 网格扫描并固定，归档语义输出中 83 条候选里 54 条被排期、28 条低于阈值、1 条被抑制，53 个语义片段含排期引导，其余仍计入语义均值，这些细节决定了引导提升不能理解成全覆盖替换。

### 课程训练分几步以及每步冻结与更新什么

训练分手势表情合成器预训练 3 段与全模型集成 4 段。合成器第一段做流式语音识别以对齐语音与预训练语言模型，第二段把块内文本目标换成手势词元学流式共话手势，第 3 段再加入表情词元得到联合生成器，3 段各 50,000 步，学习率与批量见原表，音频编码器先冻后训。

集成沿 SALMONN-omni 接语音感知与合成：第一段训编码器连接器与语言模型低秩适配做理解，第二段接语音合成学内容与时机，第 3 段冻结语音对话系统只优化手势表情连接器与生成器做表示对齐，第 4 段才联合优化并给语音侧更小的学习率乘子，语言模型低秩 0.25、语音合成器 0.5、调用头与手势侧为 1。分词器与保留的原始声学特征通路全程冻结，语言模型主干本体冻结只训低秩。

联合损失是文本交叉熵加 0.5 倍语音声学交叉熵加手势表情分组分类损失加 0.25 倍调用损失，手势表情损失先按有效目标位平均再按码本深度递减加权，越靠前的残差级权重越大。数据配比上第 3 段自由与引导按 4 比 1 采样，第 4 段按语音对话、语义调用、自由生成、引导生成以 2 比 1 比 4 比 12 等混合，上限 4800 对话词元、音频 180 秒、手势上下文 20 秒。

\[\mathcal{L}=\mathcal{L}_{\rm text}+0.5\mathcal{L}_{\rm speech}+\mathcal{L}_{\rm GE}+0.25\mathcal{L}_{\rm call}.\]

上式是第 4 段联合目标，四项分别对应对话文本、语音合成声学词元、手势表情分组损失与语义调用头损失，系数按原文固定，梯度经新增条件通路回传，对话表示在保守更新下适配多模态生成。

下面先看训练数据清单，表中条目是序列化前未经理时长度过滤与重采样的计数，语音问答与对话池在第二与第四阶段复用而不重复计数。

| Stage | Task | Source | Entries |
| --- | --- | --- | --- |
| 1 | ASR | Following SALMONN-omni | 481,241 |
| 1, 2, 4 | Spoken QA | Following SALMONN-omni | 982,398 |
| 2, 4 | Conversation | Synthetic multi-turn speech dialogues | 433,941 |
| 3, 4 | Free generation | Selected Seamless Interaction with facial supervision, counted as participate recordings | 1,318 |
| 3, 4 | Guided generation | Derived from free generation pool, counted as 20s sample | 8,372 |
| 4 | Semantic call | Contextual gesture-policy annotations | 10,145 |

该表说明语音理解交互沿用 SALMONN-omni 的识别、问答与合成多轮对话，条目量最大的是问答 982398 与对话 433941，手势侧只有 1318 段选中录像与 8372 个 20 秒引导窗加 10145 段语义调用文本，数量级差异意味着手势提升依赖精选小数据与联合适配，而非靠堆量，这也限制了向更大更多样说话人的直接推广。

### 数据与四个手势指标在什么条件下测得

训练手势表情池来自 Seamless Interaction，经 60 秒窗 30 秒步进的质量分与说话兼容分筛到 81 个说话人 1318 段录像，原库 3401 人，表情监督用 KaoLRM 估计 FLAME 参数再做无效过滤与裁剪稳定。语义库经事件提议、视频验证、姿态筛选、动作族归一、多样选择与短语消歧得到 3227 个示例 1125 个动作族 2072 个短语，中间从 77585 个标注事件经 46894 个姿态通过窗收敛而来。测试集是与训练无重叠的 Seamless Interaction 测试划分上的人工验证 138 段 20 秒片段，67 段双工覆盖回馈、重叠、双方打断，71 段语义且有库支持，客观活动与面部指标只用中间 4 到 16 秒以留出手势准备与收尾。

语音评测用 300 条 Llama 问题、2032 条 Web 问题、1000 条 TriviaQA 与 199 条 AlpacaEval，问答做文本归一化别名匹配，原生文本为语音到文本、Whisper 转写音频为语音到语音，Alpaca 沿用 GPT-4.1 的 1 到 5 分，用户问完 2 秒内回应算轮流成功。手势 4 个指标为说话倾听活动比、韵律对齐对照分、参考型双工分与语义分，前两者直接算动作，后两者把生成与同步人类参考一起以 5 帧每秒喂给 Gemini-2.5-Pro 与 Seed 各判两次再平均，人评 1 到 5 分为金标准。下图总览数据准备与指标构成。

**说话倾听活动比 × 韵律对齐分数：** 说话倾听活动比是说话段平均关节位移除以只倾听段平均关节位移，只衡量两态相对活跃程度，韵律对齐分数是同一段手势与匹配语音的相关减去与另一会话语音的相关再经 Sigmoid 平均，只衡量节奏是否跟当前语音走；前者不管节奏对错，后者不管倾听是否得体，两者互补后再靠双工分与语义分补交际功能。

**双工分 × 语义分：** 双工分评价打断、重叠、回馈等时机与听说状态下的手势是否得体，语义分评价可见手势是否传达出目标词义的方向、大小、形状或动作成分；两者都以同步的人类参考视频为上下文证据，由两个多模态大语言模型各判两次再平均，并用人评 1 到 5 分为金标准做系统级相关性校验，只支持系统排序层面的初步自动比较。

> **看图路径：** 1. 先看上半部分四条数据线分别得到训练监督、表情监督、语义库和 138 段测试集；2. 再看下半部分四个指标框中活动比、韵律对齐、双工分和语义分的输入与公式；3. 注意双工分与语义分都标注了参考视频与候选视频的对照关系

[![原论文 Figure 2：Data preparation and evaluation overview.](https://arxiv.org/html/2610.21452v1/seg_2.svg)](https://arxiv.org/html/2610.21452v1/seg_2.svg)

*论文图 2。原论文 Figure 2:：“Data preparation and evaluation overview.”。*

上图上半显示 4 条数据线从 12 万以上录像出发的收敛点，下半显示 4 个指标框的计算要点：活动比是两态位移均值之比，韵律对齐是匹配减负样本相关的 Sigmoid 平均，双工分是 0.45 时机加 0.45 得体加 0.10 可见，语义分是可见、含义、具体性加权减去刻板摆动惩罚后再经全片静默与过动惩罚折扣，理解这些权重才能读懂后续分数的来源与上限。

### 语音交互在加了手势后是否变差

语音部分要回答联合优化是否拖累说话质量与时机。下表比较 Moshi、PersonaPlex、Freeze-Omni、SALMONN-omni 与 ELLSA 2，每格质量为语音到文本比语音到语音，问答为准确率百分之，Alpaca 为 1 到 5 分，轮流为百分之，越高越好。ELLSA 2 在 3 套问答的语音到语音上分别为 78.0、47.3、63.6，都是表中最高，语音到文本也与 SALMONN-omni 接近，Alpaca 为 3.97 比 3.20 对照 4.01 比 3.22，轮流平均 95.2，其中两套 99.3 而 TriviaQA 的 94.4 为最高。也就是说在这些模拟问答与 2 秒轮流条件下，加手势表情并未把语音问答拉下来，仍与当前开源全双工语音模型相当。但这只是问答内容与轮流时机的保持，不证明打断处理、重叠语音可懂度或长对话稳定性同样无损，测试也未覆盖真实双人同时说话的部署延迟。

> **看图路径：** 1. 按行对比同一句话下不同系统随时间展开的姿态序列；2. 重点看最后一行引导生成中双手在胸前抬起再向外打开的幅度变化；3. 注意前四行在相同时刻基本保持垂手或小幅摆动；4. 把该定性差异与语义分表中的数值提升对照起来理解

[![原论文 Figure 3：Qualitative comparison for “The house is big and spacious.” Columns show successive poses at 0.25…](https://arxiv.org/html/2610.21452v1/seg_3.png)](https://arxiv.org/html/2610.21452v1/seg_3.png)

*论文图 3。原论文 Figure 3:：“Qualitative comparison for “The house is big and spacious.” Columns show successive poses at 0.25 s intervals.”。*

上图是“The house is big and spacious.” 一句下五行的姿态序列，步进 0.25 秒。第一、三、四行多为垂手站立和小幅动作，第二行也有手臂向外张开的动作，只有最后一行引导生成出现双手胸前抬起再向外打开的空间范围线索，这与下节语义分的提升方向一致，但单一样本不能代表 71 段语义集的平均效果，需结合数值表一起读。

| Model | Llama Q. | Llama Q. | Web Q. | Web Q. | TriviaQA | TriviaQA | AlpacaEval | AlpacaEval |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Quality | TT | Quality | TT | Quality | TT | Quality | TT |
| Moshi | 60.8/54.5 | 85.0 | 23.4/22.1 | 76.0 | 25.6/16.7 | 37.1 | 1.84/1.76 | 83.4 |
| PersonaPlex | 62.7/61.7 | 93.3 | 22.8/22.5 | 100.0 | 24.5/22.8 | 49.1 | 2.71/2.62 | 65.3 |
| Freeze-Omni | 74.2/56.2 | 99.7 | 40.8/27.9 | 99.8 | 45.1/28.5 | 72.0 | 3.90/2.46 | 87.9 |
| SALMONN-omni | 79.3/73.6 | 99.7 | 49.7/43.7 | 99.6 | 63.6/56.0 | 92.8 | 4.01/3.22 | 92.0 |
| ELLSA 2 | 79.3/78.0 | 99.3 | 52.6/47.3 | 99.3 | 68.9/63.6 | 94.4 | 3.97/3.20 | 87.9 |

这张表的结果要在原来的测试条件下理解。语音数字来自转写后文本匹配与模型打分，转写与判分本身有误差；轮流只看 2 秒内是否回应，不看回应内容是否打断得当；基线语音与本文系统的合成器与语言模型配置并不完全同源，因此只能说在所用问答与模拟轮流条件下保持竞争力，不能推广为任意对话场景的语音更优。

### 手势与表情的数值提升来自哪里

这节看参考型自动判分和人工判分在系统层面是否一致。比较的是双工得分与语义得分两类任务，列是价值评估模型之间、人工之间、价值评估模型与人工之间以及双方平均分之间的 Pearson 相关，前三列是多个判分者两两相关的平均。人工被当作评价手势质量的基准，自动判分每次看生成片段和时间对齐的人参考片段。

| Metric | MLLM-MLLM | Human-Human | MLLM-Human | MLLM mean-Human mean |
| --- | --- | --- | --- | --- |
| Duplex | 0.845 | 0.987 | 0.806 | 0.853 |
| Semantic | 0.950 | 0.940 | 0.904 | 0.919 |

结果上人工之间相关为双工 0.987、语义 0.940，价值评估模型与人工的平均两两相关为双工 0.806、语义 0.904，双方各自取平均后再算系统相关为双工 0.853、语义 0.919。自动判分在语义上更接近人工，在双工上差距稍大。这一比较只覆盖 7 个系统，样本层面相关低于系统层面，因此只能把该判分当作初步的快速比较手段。本表数值与单位依据论文 PDF。

### 自动判分与数据筛选在什么范围内可信

自动判分可信度看系统级相关而非单片段准确。下表是双工与语义在两个判分模型与 2 名标注者之间的系统级 Pearson 相关，7 个系统均值上多模态之间 0.845 与 0.950，人与人之间 0.987 与 0.940，多模态与人均值之间 0.853 与 0.919，平均成对多模态对人 0.806 与 0.904。样本级则低得多，平均后双工 0.3966 语义 0.5579，人与人样本级也只有 0.6332 与 0.5906，说明自动分只支持系统排序层面的初步比较，不支持单片段好坏的细粒度判断，幻觉仍是视频理解能力的瓶颈。

韵律对齐在 GENEA 七系统 616 次匹配失配比较上系统级 Spearman 达 0.9643 而 BeatAlign 匹配均值只有负相关，加失配对照后 BeatAlign 才回升，支持对照设计而非单纯峰对齐。数据消融上从全量 121054 段 3401 人到精选 1318 段 81 人，活动比、对齐、双工自动分与语义自动分分别提升 0.089、0.1424、0.2513、0.1800；表情分词器从统一 6 级换成 4 加 2 分解后说话唇误差降 0.6748 毫米、头误差降 0.1223 毫米。这些消融用同一 138 段验证，精选偏向动作明显且听说差异大的说话人，会牺牲多样性，结论不宜外推到静态或低幅说话人占主导的分布。

| Metric | MLLM-MLLM | Human-Human | MLLM-Human | MLLM mean-Human mean |
| --- | --- | --- | --- | --- |
| Duplex | 0.845 | 0.987 | 0.806 | 0.853 |
| Semantic | 0.950 | 0.940 | 0.904 | 0.919 |

表后补充未胜出与缺测：样本级相关明显弱于系统级，单片段自动分不能当金标准；GENEA 验证的系统数只有 7，相关系数的抽样不确定性大；引导的阈值与排期统计只在所建语义库与短语表下成立，换库或换阈值结果会变，还需补跨库与跨判分模型的稳定性验证。本表数值与单位依据论文 PDF。

### 哪些结论还不能下以及常见误解是什么

先说边界。视觉感知未接入，模型看不到对方的脸与身体，只能听声音做反应，这与真正面对面所需的视觉理解还有距离。语义库只从 Seamless Interaction 来，1125 个动作族覆盖有限，换更大更多样来源可能改变调用率与引导质量。测试集 138 段虽经人工验证，但双工 67 段与语义 71 段的量级只够系统级排序，单类如被打断转倾听仅 10 段，细分结论不稳。自动判分依赖参考视频与特定判分模型版本，换模型、换采样帧率或去掉参考都会改变分数。

常见误解有三：一是把系统级高相关当成单片段判分准确，原文样本级相关低得多，不能用自动分给单个生成定级；二是把语义分提升当成整体手势更好，实际上双工分并未同步提升，过动与静默惩罚仍会拉低终分；三是把语音问答保持当成对话能力无损，轮流只测 2 秒内是否回应，不测打断时机、重叠可懂度与长程一致性。缺证据不等于技术缺陷，只是这些维度尚未测量，不能承诺延迟、算力或误触发率会改善。

### 要复现应先备齐什么以及各部分代价是什么

复现第一步是把数据与评测链先跑通，而不是先训大模型。按原文链路依次准备 Seamless Interaction 原始录像与转录、说话人筛选得到 81 人 1318 段、KaoLRM 表情参数与有效帧掩码、语义库 3227 示例与 2072 短语映射、138 段人工验证集的事件窗与语音活动标注，再跑通活动比、韵律对照、参考型双工语义判分与人评界面。

模型侧对话主干与语音合成沿 SALMONN-omni 配置，手势表情 Transformer 初值用 Qwen2.5-0.5B-Instruct 共 24 层隐层 896，全模型 10.78B 参数中可训约 776M，其中生成器 696M、手势连接器 15M、语言模型低秩 13M 等，训练用 Fused AdamW 加余弦衰减与梯度裁剪 5，第 4 段全局批量 64、对话 4096 上限应为 4800 词元、音频上限 180 秒、手势上下文 20 秒。成本上原文只给步数与批量，未报告硬件小时与推理延迟，800 毫秒块、20 秒上下文与每步 18 头分类决定了持续计算量，实际延迟要另测。

代码与权重按正文说接受后发布，当前只能确认第三方 SALMONN 的 ELLSA2 分支链接可达与 GENEA 榜单可达，作者资源是否公开要以归属明确的可用声明为准，不能把论文提到链接当成已开源。

### 什么时候值得尝试以及还需补哪项验证

当你的场景同时需要边听边说与持续可见反馈，且有明确语义动作可枚举成库时，这个路线值得尝试：比如桌面助手在倾听时给点头与姿态收放，在说到大小、方向、数量、拿取等词时给出手势片段。做法是先用精选高动态说话人训出流式生成器，再把对话主干的听说隐藏状态接进来联合微调，最后只对库内动作族做调用加引导，不要指望无库泛化出准确语义手势。

复现时先做评测复现：用同一 138 段与同一参考型判分流程得到系统排序，再看引导是否只提语义而不损双工与表情。还需补三项验证：一是换判分模型与换帧率后的排序稳定性，以及去掉参考后分数是否还成立；二是跨说话人与跨语料的调用阈值重标定，因为 0.706 阈值绑在当前库与开发集上；三是真实双人同时说话下的延迟与误触发测量，包括模板准备的前置时间是否足够。若这三项补齐且系统级优势保持，再谈部署。

否则只宜当作对话感知手势的初步基线与评测起点。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.21452v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-16/)
