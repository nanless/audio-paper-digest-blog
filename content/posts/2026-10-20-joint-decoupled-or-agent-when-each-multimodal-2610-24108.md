---
title: "Joint, Decoupled, or Agent: When Each Multimodal Alignment Paradigm Wins"
date: 2026-10-20
draft: false
tags: [通用多模态问答, 音频分类, 多模态学习, 模型比较]
categories: [论文速递]
description: "论文在 16 个配对数据集和 144 个数据集-标注预算组合上比较三种可运行的组装策略，发现三者各胜约三分之一，预算、任务形式与单模态可分性决定偏好，而两步路由能提前选出较优范式，但智能体推理代价高出数百倍。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.24108"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "联合、解耦还是智能体：多模态对齐三种范式何时占优"
paper_digest_original_title: "Joint, Decoupled, or Agent: When Each Multimodal Alignment Paradigm Wins"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.24108v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.24108v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.24108v1.pdf"
paper_digest_primary_task: "通用多模态问答"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.generic-multimodal-qa","label":"通用多模态问答"},{"facet":"task","id":"task.audio-classification","label":"音频分类"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"research_focus","id":"research_focus.comparison","label":"模型比较"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 5.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文在 16 个配对数据集和 144 个数据集-标注预算组合上比较三种可运行的组装策略，发现三者各胜约三分之一，预算、任务形式与单模态可分性决定偏好，而两步路由能提前选出较优范式，但智能体推理代价高出数百倍。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yi Fang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Gaurav Srivastava"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sirui Ding"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xuan Wang"}]
paper_digest_abstract_sha256: "3dbb53d59262e57b6a4fb339fc00b6aeecd2863244a4de9df77f88299fa8bfe8"
paper_digest_sidecars: {"citation.bib":{"sha256":"551abb8bab725720153a8a3df33e320a1f8e1edef0c80b1cd8df9ebf7df4625b","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24108/citation.bib"},"citation.json":{"sha256":"d5c0bc305ee238a1fc0e8944d744cc2ce90a856d348ba4383500875e419a6d77","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24108/citation.json"},"citation.ris":{"sha256":"3d9f92c961d1ce6eafa0139a1e13ec9f689ec8ebd36f3f29dba07f397a86374d","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24108/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"6df491b450bb7841014ce0052c57eb9f4230f4349ab3bf74692b7e719d41fd6b","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-24108/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "e2def7b4629e727cb9741b3d3f47907e4603ee120318a798d1045c76ebb67cdc"
paper_digest_api_reader_plan_sha256: "950a8ee06e387e1ce53797dc579e2dcca11e5e87409e000e852d274d5bf8a5e5"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "816edbb286bdf9bba389594c4b70a85015980d1217fb364b6564139a12391c36"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "cb73be015c6891e1d093649248931d6cccb2b073c5bc9f7a3e8a3ca91a8e4f7f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "83d49033ede48349af1c96fe4bd64cb2aa4d2a8770efe62fc38d5b893e2ef21c"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "03663f8220d2007ea9c55863b4afd4b5f00f56334907aee2530b72a323718180"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 联合、解耦还是智能体：多模态对齐三种范式何时占优

> 英文题目：*[Joint, Decoupled, or Agent: When Each Multimodal Alignment Paradigm Wins](https://arxiv.org/abs/2610.24108v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[通用多模态问答](/audio-paper-digest-blog/papers/?concept=task.generic-multimodal-qa)；[音频分类](/audio-paper-digest-blog/papers/?concept=task.audio-classification)
- **研究方法**：[多模态学习](/audio-paper-digest-blog/papers/?concept=method.multimodal-learning)
- **研究重点**：[模型评估](/audio-paper-digest-blog/papers/?concept=research_focus.evaluation) → [模型比较](/audio-paper-digest-blog/papers/?concept=research_focus.comparison)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Yi Fang：机构信息未能在本次解析中与作者逐人可靠绑定
- Gaurav Srivastava：机构信息未能在本次解析中与作者逐人可靠绑定
- Sirui Ding：机构信息未能在本次解析中与作者逐人可靠绑定
- Xuan Wang：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是给定一对输入和一个下游标签时，何时把跨模态信息放在预训练里、何时放在有监督融合里、何时放在推理时组合。困难在于编码器来源、任务格式和标注量同时变化，直接比较容易混淆表示质量与融合方式的作用。论文把同一目标拆成三种范式：联合预训练后冻结编码器再学融合头（Joint），独立预训练编码器冻结后再学融合头（Decoupled），冻结大语言模型读入单模态读出和可见文本作答（Agent）。处理过程是固定测试集和开发集，只改变标注子集规模，比较三种系统在分类、回归和问答上的效用，再用几何、监督表示诊断和文本诊断预测胜者。相对已有跨域融合基准，关键差异是预测发生在拟合候选系统之前，并采用两步级联先分 Agent 与融合再分 Joint 与 Decoupled。在 144 个组合上级联选中胜者的准确率为 71.4%，高于只用元数据的 54.2%，平均相对遗憾为 0.028，对 0.057。适用范围限于配对完整的目标任务，推理成本未计入效用，原文估计 Agent 推理浮点运算约为融合的 360-3000 倍。原文未披露训练、推理或部署成本的完整实测，成本部分以估计给出。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文要回答什么现实选择

很多多模态系统今天不再从零训练，而是把现成的编码器拼起来用。一个下游任务通常给出成对的输入，比如图像加文字、音频加转录、分子加描述、蛋白加配体，再加一个要预测的标签。问题是信息应该在哪一步汇合：是用已经在成对数据上预训练好的联合编码器，还是把两个独立预训练的编码器在下游用有监督方式融合，还是让大语言模型在推理时读单模态模型的输出和样本原文再做决定。

论文把这 3 种做法固定成 3 个可比较的范式。第一种叫 Joint，编码器来自联合预训练；第二种叫 Decoupled，编码器来自独立预训练；第 3 种叫 Agent，冻结的大语言模型负责组合。论文关心的是给定目标任务和标注预算，哪一种更可能占优，以及能不能在真正拟合 3 个候选系统之前，用目标任务上的诊断提前选出偏好。

### 已有路线与本文比较口径的区别

联合预训练路线以对比学习等成对模型为代表，生物医学、音频、分子和蛋白配体方向也有各自的成对表示模型。有监督融合路线是把冻结表示接一个可训练的融合模块，相关基准在多个领域比较过融合做法。事后对齐和大语言模型组合路线则用轻量映射或工具调用把模型输出拼起来。

本文不重新预训练任何编码器，也不提出新的融合算子，而是把 3 类组装策略放在同一套目标任务、同一划分、同一预算和同一开发集选择规则下比较。它的新增部分是预算依赖的胜负变化、输入干预对照，以及用表示几何、有监督表示诊断和文本标签匹配来预测偏好。理解这一点很重要：后文所有胜负都是完整公开检查点的系统比较，不是控制了预训练数据之后对对齐本身的因果分离。

### 输入、输出与必须保留的信息

每个数据集是一组三元组，两个模态的输入加一个标签。标注预算决定能用来拟合的训练样本集合，种子决定具体抽到哪些样本和融合头的初始化。所有范式共享同一个完整测试集和一个与训练测试都不重叠的开发集，开发集标签不计入报告的预算，但实际消耗了标注。

评价时分类和问答看准确率，回归看平均绝对误差，方向相反。论文把它们统一成效用，只在同一个数据集加预算的格子里比较。路由的准确率指选中该格平均效用最高者的比例，相对遗憾指选中系统与最优系统的差距占最优效用绝对值的比例。两者一起看才能区分选错很多但代价小，和选错不多但代价大的情况。

### 三种范式如何处理同一个样本

沿着一个配对样本走一遍最清楚。Joint 和 Decoupled 都先用冻结编码器把两侧输入变成向量，再把两个向量送进一个融合算子，最后接任务头输出类别或数值。区别只在编码器从哪里来：Joint 的两个塔来自同一个联合预训练模型，Decoupled 的两个塔来自从未互相對齐的独立模型。融合算子从 8 种常见结构里选，选谁由开发集效用决定。

Agent 走另一条路。它先在每个模态上各自拟合有监督读出，例如图像侧和文本侧各自给出对候选项的分数，同时保留样本自带文本。推理时把任务说明、若干标注示例、当前样本文本和两个读出结果一起写进提示，交给冻结的指令调优大语言模型生成答案，再用任务相关的解析器抽出选项或数值。默认控制器是 Qwen3-32B，贪心解码，分类示例最多 10 个。

### 融合侧与智能体侧各负责什么

融合侧的核心是冻结与可训练的分工。编码器冻结意味着表示本身不再更新，只有融合算子和任务头的参数在标注集上优化，损失是分类和问答用交叉熵、回归用均方误差。问答的融合要对每个候选项重复 1 次：把非文本向量复制到每个候选上，与问题加候选的文本向量配对打分，再在候选项上做交叉熵。

智能体侧的核心是读出与控制器的分工。读出负责把冻结单模态向量变成任务相关的分数，控制器负责读原始文本、理解标签名和权衡两个读出。论文明确 Agent 用的单模态编码器与 Decoupled 相同，这样 Agent 与 Decoupled 的差别主要在组合方式，而不是单模态表示本身。

**Joint × Decoupled × 融合头：** Joint 指编码器来自联合预训练的成对模型，Decoupled 指编码器来自各自独立预训练且从未互相對齐的模型，二者下游都冻结编码器，只训练同一个候选池里的融合头把两侧向量合在一起再做分类或回归，因此第一步比较的是预训练来源，第二步才是融合算子怎么写。

**Agent × 单模态读出 × 冻结大语言模型：** Agent 不训练融合头，而是先在每个模态上各自拟合有监督读出得到分数或数值，再把样本自带文本、读出结果、任务说明和标注示例一起交给冻结的大语言模型做一次推理组合，读出提供任务相关的单模态证据，大语言模型负责读文本和综合矛盾信息。

\[f_{\textsc{Agent},d,K}(x)=\mathrm{parse}\bigl(\pi_{\mathrm{LLM}}(\mathcal{I}_{d},\mathcal{E}_{d,K},x^{(t)},o_{a},o_{b})\bigr).\]

### 冻结、选择与预算如何执行

融合训练只更新下游头参数，编码器始终冻结。分类和回归在一个超参数网格里搜学习率、权重衰减、丢弃率和批量大小，最多 200 轮并按开发集效用早停；问答用固定的优化配置。每个数据集、预算和种子都要把 8 个融合头都拟合一遍，先在每个头内部选超参数和检查点，再按开发集选头，最后把选中模型的测试效用在 5 个种子上平均。

标注预算的构造要仔细看。20-shot 对分类是每类 20 个，对回归是按目标分桶每桶 20 个；百分比预算对分类按类分层保留，对回归和问答均匀采样。开发集固定不变。20-shot 的绝对标签数有时反而大于 10%，例如类别很多或训练池很小的数据集，所以预算趋势要对照实际标签数读。

**标注预算 × 开发集 × 效用：** 标注预算指真正用来拟合融合头或读出的训练标签数，开发集是固定且与训练测试都不重叠的另一份标签，只用于选超参数和选融合头，效用是把准确率或负平均绝对误差按指标方向统一后的可比分数，只在同一个数据集加预算的格子里比较大小。

\[U_{\mathcal{R}}(f)=s_{d}\,m_{d}\!\left((f(x),y)_{(x,y)\in\mathcal{R}}\right),\qquad U(p;d,K)=\frac{1}{5}\sum_{s=0}^{4}U_{\mathcal{Q}_{d}}\!\left(f_{p,d,K}^{(s)}\right),\]

### 在哪些数据和预算上比较

论文用 16 个配对数据集，覆盖通用视觉语言、音频、医疗、分子和蛋白 5 个领域，包含 8 个分类、3 个回归和 5 个问答。主表每个数据集报告 3 个代表预算，分类回归是 20-shot、10%、100%，问答是 10%、50%、100%；路由则用全部预算网格共 144 个数据集与预算组合。测试集固定，种子给出 5 个标注子集。

默认编码器按领域配对，例如通用域用 CLIP 对 DINOv2 加 GPT-2，音频用 CLAP 对声学编码器加文本编码器，医疗和分子蛋白用各自领域的成对模型对独立编码器。论文尽量匹配架构和规模，但也承认比较的是完整公开检查点，预训练数据和优化都不同。

**候选匹配问答 × 分类 × 回归：** 候选匹配问答是给出一题多选项、要为每个候选项打分再选一，分类是给固定类别标号，回归是预测连续亲和力并用平均绝对误差衡量，三者输出层、损失和融合头打分方式都不同，因此预算划分和路由特征也要分开处理。

### 谁赢了多少：没有通吃的范式

要理解总体结论，先看这张条形图展示的比较任务：横轴是 144 个组合中的获胜次数，三根条形分别对应任务监督融合、预训练联合表示和推理时组合，长度非常接近。读图时注意条形末端的百分比，以及图例中任务监督对应 Decoupled、预训练对应 Joint、推理对应 Agent。

> **看图路径：** 1. 先看横轴为 144 个组合中的获胜次数，比较三根条形的长短；2. 再看每根条形上的标注任务监督、预训练、推理分别对应哪种范式；3. 注意三者比例接近三分之一，说明不存在通吃的范式

[![原论文 Figure 1：Paradigm wins across 144 dataset–budget combinations.](https://arxiv.org/html/2610.24108v1/win_summary.svg)](https://arxiv.org/html/2610.24108v1/win_summary.svg)

*论文图 1。原论文 Figure 1:：“Paradigm wins across 144 dataset–budget combinations. The system with the highest mean utility wins.”。*

上图确实显示三者各占约三分之一，这是 3 个范式直接比较平均效用最高者的结果，与后面路由选择器能选对多少是两个不同的实验行。

下表要回答的比较问题是 144 格按平均效用计各范式获胜多少格，公平条件是同一候选集合、同一预算网格和同一平均效用口径，胜者为该格平均效用最高者。

| 比较对象 | 获胜格数 | 方法归属 |
| --- | --- | --- |
| Decoupled | 54 | 任务监督融合 |
| Joint | 44 | 预训练联合表示 |
| Agent | 46 | 推理时组合 |

上表三者相加为 144 格，解耦略多但远非压倒性。这个结论只在本文的候选集合、预算网格和平均效用口径下成立，不包含部署成本，也不意味着换一组编码器仍是同样比例。本表数值与单位依据论文 PDF。

**两步级联路由 × 元数据路由 × 相对遗憾：** 两步级联先判智能体还是融合，再在融合内部判联合还是解耦，元数据路由是只用任务类型和预算信息、不看表示诊断的对照，相对遗憾是选中系统与该格最优系统的效用差距除以最优效用绝对值，用来衡量选错的代价而不仅是选对的次数。

\[\hat{p}(d,K;\epsilon)=\begin{cases}\textsc{Agent},&s_{1}\geq\tau_{1},\\ \textsc{Joint},&s_{1}<\tau_{1}\ \text{and}\ s_{2}\geq\tau_{2},\\ \textsc{Decoupled},&\text{otherwise.}\end{cases}\]

### 路由主表：诊断比只看元数据好多少

路由问题是能否在拟合候选系统之前选出偏好。方法是两步级联：先用表示几何、有监督表示诊断、文本标签匹配加上任务与预算元数据判智能体还是融合，再判联合还是解耦。每步用 L2 逻辑回归，阈值按训练正例比例匹配。评估用留一组，外层每次留出一个数据集组的所有预算和种子，DrugBank 2 个任务始终绑在一起。

下表要回答的比较问题是完整原印刷 Table3 的全部内容：在 5 个容差下 4 种路由器的选对率与相对遗憾。列顺序为级联、直接三分类、按任务预算多数投票、只用元数据路由，每种各占选对率越高越好、相对遗憾越低越好两列。公平条件是同一 144 格、同一 15 组留组和同一 5 种子平均。

| 容差 | 级联选对率 | 级联遗憾 | 直接三分类选对率 | 直接三分类遗憾 | 多数投票选对率 | 多数投票遗憾 | 元数据选对率 | 元数据遗憾 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0% | 0.714 | 0.028 | 0.450 | 0.091 | 0.486 | 0.127 | 0.542 | 0.057 |
| 0.2% | 0.697 | 0.036 | 0.432 | 0.109 | 0.500 | 0.127 | 0.542 | 0.067 |
| 0.5% | 0.708 | 0.038 | 0.442 | 0.104 | 0.507 | 0.127 | 0.569 | 0.066 |
| 1% | 0.623 | 0.043 | 0.599 | 0.051 | 0.507 | 0.127 | 0.569 | 0.068 |
| 2% | 0.646 | 0.078 | 0.568 | 0.087 | 0.514 | 0.127 | 0.583 | 0.064 |

上表说明在 0% 容差下完整诊断把选对率从元数据的 0.542 提高到级联的 0.714，即 71.4% 对 54.2%，相对遗憾从 0.057 降到 0.028。直接三分类在 0% 只有 0.450 选对率和 0.091 遗憾，多数投票为 0.486 和 0.127。特征消融显示只加一组诊断无法恢复完整效果，去掉有监督表示诊断或文本诊断时准确率掉到 0.544 或 0.529、遗憾升到 0.108 或 0.105，去掉几何的影响较小。任务层面的反例也很重要：级联在 AI2D、DrugBank 和 VQA-RAD 上接近全对，但在 CUB 上选对率只有 0.275，在 ScienceQA 只有 0.28。

### 预算变化时偏好如何持续或反转

要理解预算的作用，看这张四面板曲线图的观察任务：横轴是标注样本数的对数，纵轴是准确率，3 条线分别代表 3 种范式，竖线标出主表预算。重点区分一直领先的曲线与发生交叉反转的曲线。横轴是标注样本数，不是表格列顺序，CUB 的 10% 为 795 个标签，小于 20-shot 的 4000 个，100% 为 8244 个。

> **看图路径：** 1. 对比四个小图横轴标注样本数随预算增大的走向；2. 区分一直领先的曲线与发生交叉反转的曲线；3. 注意 ScienceQA 从智能体转向联合，CUB 最左端 Agent 高于 Decoupled 随后反转

[![原论文 Figure 2：Persistent and changing paradigm preferences across supervision budgets.](https://arxiv.org/html/2610.24108v1/budget_curves_main.svg)](https://arxiv.org/html/2610.24108v1/budget_curves_main.svg)

*论文图 2。原论文 Figure 2:：“Persistent and changing paradigm preferences across supervision budgets. Utility versus labelled examples (log scale). Lines mark main-table budgets. More datasets: Figure 6.”。*

上图帮助理解预算不是单调偏向某一类方法。CUB 最左端 Agent 高于 Decoupled，随后随预算增大反转为 Decoupled 较高，这是原图真实像素，不能改成全程 Decoupled 最高。ScienceQA 从智能体转向联合，而 DrugBank-Desc 全程偏向 Joint。智能体的预算依赖包括其读出拟合和示例的变化，融合的预算依赖包括融合头的拟合，因此曲线交叉可能来自两侧同时变化。论文还报告约 79% 的主表格子在 5 个种子下获胜者完全一致，说明多数格子的偏好对抽样种子相对稳定。

下段要回答的比较问题是每个主表格子数 5 个对应种子下谁最好，平局按均分计算，行和为五，分类问答看准确率、回归看平均绝对误差。此处均值效用胜者与逐种子胜数是两回事：Table1 在 CUB 的 20-shot、10%、100% 3 个预算的 5 种子均值都由 Decoupled 最高，不表示每个种子都赢。

| Dataset | Budget | Joint wins | Decoupled wins | Agent wins |
| --- | --- | --- | --- | --- |
| CUB | 20-shot | 0 | 5 | 0 |
| CUB | 10% | 0 | 2 | 3 |
| CUB | 100% | 0 | 5 | 0 |
| Food101 | 10% | 0 | 0 | 5 |
| Food101 | 100% | 0 | 0 | 5 |
| AI2D | 10% | 0 | 0 | 5 |
| AI2D | 100% | 0 | 0 | 5 |

上表原表节选可以读出 Food101 和 AI2D 在报告预算下 5 个种子都指向智能体，CUB 在 20-shot 和 100% 全量预算下 5 个种子都指向解耦，而 CUB 在 10% 预算下为 Decoupled2 对 Agent3，存在种子间分歧。这提醒读者主表均值胜负之下仍有抽样变异，不能把 1 次抽样的胜负当成绝对排序，相邻全预算指 100% 全量，不把 10% 也说成 5 比 5。

### 任务形式与单模态可分性透露什么

要理解融合内部的偏好，看这张左右两面板图的观察任务：左图看问答中联合在多少比例预算上获胜，特别注意 VQA-RAD 例外；右图看横轴单模态可分性增大时，纵轴联合减解耦差值是否下降，虚线只是描述性拟合。右图横轴是较强模态的留一 5 近邻准确率，纵轴是联合与解耦效用差除以三者最优。

> **看图路径：** 1. 左图看问答中联合在多少比例预算上获胜，特别看 VQA-RAD 例外；2. 右图看横轴单模态可分性增大时纵轴差值是否下降；3. 注意虚线只是描述性拟合，不代表因果

[![原论文 Figure 4：Diagnostics and fusion preference. A: QA win shares over n budgets.](https://arxiv.org/html/2610.24108v1/joint_decoupled_conditions.svg)](https://arxiv.org/html/2610.24108v1/joint_decoupled_conditions.svg)

*论文图 4。原论文 Figure 4:：“Diagnostics and fusion preference. A: QA win shares over n budgets.”。*

上图左面板确实可见 4 个问答数据的联合获胜份额为 100%，右面板散点大体从左上向右下走，CUB 和 OxfordPet 处在右下，CrisisMMD 和 MetMeme 处在左上。相关不等于因果，而且差值的分母包含了智能体，归一化方式会影响跨数据集幅度。

下表要回答的比较问题是在相同预算格上比较联合与解耦的相对差，以及代表性数据集随预算的转向行为，条件包括全预算网格和 8 个分类数据集的平均点。

| 现象 | 数据集 | 具体转向 |
| --- | --- | --- |
| 持续领先 | AI2D | 全预算偏向 Agent |
| 持续领先 | CUB | 全预算偏向 Decoupled |
| 持续领先 | DrugBank-Desc | 全预算偏向 Joint |
| 预算反转 | ScienceQA 等 | 小预算 Agent 转向大预算融合 |
| 负相关 | 8 分类平均 | Spearman 相关为 -0.67 |

上表要补限制：该相关是 8 个分类数据集各取一个平均点算出的描述性相关，删掉一个数据集后仍为负但数值在负 0.75 到负 0.57 之间浮动；问答的份额统计的是联合与解耦之间的相对偏好，不考虑智能体是否整体最优。

### 读出和原始文本到底贡献了什么

要理解智能体内部的输入价值，看这张 3 组水平条形图的观察任务：横轴都是准确率差值，单位是百分点，纵轴是 AI2D、ScienceQA、VQA-RAD 数据集。左组是完整系统减去只留大语言模型，中组是完整系统减去打乱读出配对，右组是完整系统减去只留读出而删掉原始文本，正值表示去掉该输入会变差。

> **看图路径：** 1. 先看左中右三组对照分别去掉什么输入；2. 再看 AI2D 在左图为负而中图为正的含义；3. 注意横轴是百分点差值，正负方向直接对应好坏

[![原论文 Figure 3：QA input controls. Full-system minus control accuracy, in percentage points.](https://arxiv.org/html/2610.24108v1/qa_control_contrasts.svg)](https://arxiv.org/html/2610.24108v1/qa_control_contrasts.svg)

*论文图 3。原论文 Figure 3:：“QA input controls. Full-system minus control accuracy, in percentage points.”。*

上图可见 AI2D 在左组为负 5.2 个百分点而中组为正 11.8 个百分点，说明对读出内容敏感与提供读出是否有净收益是两回事。ScienceQA 和 VQA-RAD 在左组分别提高 1.4 和 7.5 个百分点，中组均为正，右组直接文本的贡献更大。

下表要回答的比较问题是同样测试样本上比较完整系统与去掉读出、打乱读出和只用单模态探针的准确率，同时报告智能体相对融合的推理开销，准确率越高越好，开销越低越好。

| 对照 | 数值 | 含义 |
| --- | --- | --- |
| 推理开销倍数 | 360–3000 倍 | Agent 相对融合 |
| AI2D 完整对只留大模型 | 0.778 对 0.830 | 去读出反而更高 |
| CUB 视觉探针对融合 | 0.916 对 0.917 | 融合增量很小 |

上表要强调代价：智能体推理开销约为融合的 360 到 3000 倍，取决于 token 数和服务条件。即使智能体在 Food101 等任务上领先，去掉读出的小幅增益和巨大的推理代价也要一起权衡。论文还发现同时给两个读出通常好于分轮调用，而极小控制器因解析失败率高而无法遵循协议。

### 哪些结论不能推广

首先，胜负针对的是本文实例化的完整系统。编码器匹配尽量控制架构和规模，但预训练数据、目标、优化和表示质量仍随检查点变化，所以不能把联合胜负直接解读为对齐本身的因果效应。换编码器、换融合头搜索空间或换大语言模型控制器都可能改变个别格子的胜者。

其次，预算结论依赖本文的划分。开发集固定且额外消耗标签，100% 预算只用去掉开发集后的剩余池，20-shot 与 10% 的绝对大小关系随数据集而变。路由的留组评估只有 15 个组，自助区间只反映跨已观测组的变异，不重采样测试样本。

最后，诊断关联是描述性的。单模态 5 近邻与融合偏好的负相关经过删除和机会归一化仍为负，但幅度会变；文本诊断在部分折上与控制器行为存在错位。论文也明确效用比较不含部署成本，成本感知需要另行声明计算边界和权衡系数。

### 复现第一步要准备什么

复现应从数据划分和预算采样开始。按论文附录准备 16 个数据集的训练、开发和测试划分，固定测试集，开发集与训练池不重叠；用 0 到 4 共 5 个种子按类分层或均匀采样生成标注子集，并记录每个格子的实际标签数和开发集标签数。编码器必须用论文列出的公开检查点原样加载，冻结权重，只训练融合头或单模态读出。

融合侧要实现 8 个融合头并按开发集效用选头，问答要实现候选项打分和掩码交叉熵；智能体侧要用相同的解耦编码器拟合读出，再用 Qwen3-32B 的单轮模式组合，解析失败按分类判错、回归补零处理。路由复现要注意 DrugBank 两任务在内外层和自助中始终同组，训练格用 5 种子特征均值，留出格每次读一个种子的特征。按本次核验没有发现可验证的作者资源链接，因此不要声称代码或模型已公开，只能按论文附录的检查点和划分自行重建。

### 什么时候值得尝试三种做法

如果标注很少且样本自带文本信息量大，可以先试智能体组合，尤其在通用视觉语言分类和部分问答上；如果标注充足且任务是候选匹配问答，可以优先试联合预训练编码器加有监督融合；如果单模态探针已经很强，例如细粒度鸟类图像的视觉探针接近融合整体，则解耦融合更可能是稳妥起点，同时要检查单模态是否已足够。

复现的第一步是搭好固定划分、预算采样和开发集选头流程，再跑小预算对照。还需要补的验证是：在新领域上重测预算曲线是否反转，用打乱读出和去掉问题等对照确认增益来源，以及在成本约束下重算小幅领先是否值得部署。关键超参数是融合学习率、权重衰减、丢弃率和批量大小，信息条件是配对目标数据、开发集标签和候选项文本，缺一都会改变结论的适用范围。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.24108v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-20/)
