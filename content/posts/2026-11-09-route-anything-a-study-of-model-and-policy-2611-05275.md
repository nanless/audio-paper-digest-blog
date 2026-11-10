---
title: "Route Anything: A Study of Model and Policy Routing for General-Purpose AI Systems"
date: 2026-11-09
draft: false
tags: [通用多模态问答, 混合专家模型, 高效推理, 基准测试]
categories: [论文速递]
description: "论文把每次输入选哪个模型或机器人策略写成在给定信息下最大化价值减价格乘成本的路由问题，用 25 个基准上 374401 次同输入打分测出按输入选最优比固定最强高 5.4 分，而学到的路由器高 0.3 分并在价格约束下把单位成本质量平均提高 8.82 倍。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.05275"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "Route Anything：跨模态选模型与选策略的路由研究"
paper_digest_original_title: "Route Anything: A Study of Model and Policy Routing for General-Purpose AI Systems"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.05275"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.05275.pdf"
paper_digest_primary_task: "通用多模态问答"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.generic-multimodal-qa","label":"通用多模态问答"},{"facet":"method","id":"method.moe","label":"混合专家模型"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "混合专家模型"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把每次输入选哪个模型或机器人策略写成在给定信息下最大化价值减价格乘成本的路由问题，用 25 个基准上 374401 次同输入打分测出按输入选最优比固定最强高 5.4 分，而学到的路由器高 0.3 分并在价格约束下把单位成本质量平均提高 8.82 倍。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Pengfei Zhou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yixing Ma"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Hexin Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Weidong Tang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhenglin Wan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wangbo Zhao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yang You"}]
paper_digest_abstract_sha256: "52090c006cb589c07a49ca1036f56c23d6837ffa89d221d3520a92c85fbada94"
paper_digest_sidecars: {"citation.bib":{"sha256":"26bccc4790e2d9bff2cc5c92fd568d41218d4ffea072efafe085cd6a16c2143f","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-05275/citation.bib"},"citation.json":{"sha256":"b30a5fdfecef864d918812e0cc7ffe366e7a94123c264306b8d9d67c38c8642b","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-05275/citation.json"},"citation.ris":{"sha256":"8e7f8fe219cb0bb88ddc8ad5ed0ad7405da4c8673edbdded4af4e2ee5f984432","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-05275/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"513790b1950f9e4e2db6e80da4c530a2518984cb32836d0f2748cd95a27fb095","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-05275/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "5b3259d065fc1e676bcd9a20896c2eae261dedf0ff63e25d4764a332db8f712a"
paper_digest_api_reader_plan_sha256: "ec4e9fb86b8031e093f6e93808de85b0e2e1ce20539be4b18e50839710ba67d6"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "60bd03cd31ba475b0dc912bd1d4e9913659a282910ef9ba33ec7d6f332ac5107"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "3eb469ccc375eca49bb7b776fdda925abe9014a3706566bf164f7dbd18654439"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "bf386a2558aecd7f74ddd558ce4aac7367d41542f06102bf6bc8649b9df6abe0"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "625469c206c8b5b5a28f6131625be4f73f7c13d11f0487f06fa2e3cb91d03b8e"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 Route Anything：跨模态选模型与选策略的路由研究

> 英文题目：*[Route Anything: A Study of Model and Policy Routing for General-Purpose AI Systems](https://arxiv.org/abs/2611.05275)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[通用多模态问答](/audio-paper-digest-blog/papers/?concept=task.generic-multimodal-qa)
- **研究方法**：[混合专家模型](/audio-paper-digest-blog/papers/?concept=method.moe)
- **研究重点**：[高效推理](/audio-paper-digest-blog/papers/?concept=research_focus.efficiency)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 0.4/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Pengfei Zhou：机构信息未能在本次解析中与作者逐人可靠绑定
- Yixing Ma：机构信息未能在本次解析中与作者逐人可靠绑定
- Hexin Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Weidong Tang：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhenglin Wan：机构信息未能在本次解析中与作者逐人可靠绑定
- Wangbo Zhao：机构信息未能在本次解析中与作者逐人可靠绑定
- Yang You：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

通用系统面对的问题是每个输入适合的模型或策略都不同，固定用一个最强候选会浪费成本，也会错过输入级别的最优选择，而路由能看到的信息有限，且质量与成本需放在同一尺度比较。论文先建立统一理论，把路由表示为在观测状态下选择期望价值减去价格乘期望成本最大的候选。再构造跨模态轨迹矩阵让同一输入被池中全部候选运行并按各自基准指标打分，输出同一输入上可比的得分记录并送入路由器训练。最后在矩阵上训练基于能力树、基于逐候选结果回归与基于场景图像的路由器，并在带价格的代码与文本testbed上比较拟合路线与可认证路线。相对已有语言模型级联与偏好路由器，该工作把参考策略与质量容忍度作为定价来源，并用固定顺序检验在独立数据上认证质量下限。在24个基准共19814个测试输入上，以各自基准指标重标度到0–100分的得分为指标，按输入选择的上限超过按基准固定的最强候选5.38分。在16个基准上，以同样重标度到0–100分的得分为指标，一个能力树路由器超过固定最强候选0.3分，视频生成组高出2.12分。四组价格路线以相对参考策略的单位成本质量为指标平均为8.82倍，代码任务达到25.5倍；结论适用于候选质量接近而价格差距大且状态能改变最优候选的情形，语音生成因候选几乎全对而无可交易空间，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/InfRec-Cardinal/route-anything> — 链接可访问（HTTP 200）

- 模型相关资源：<https://huggingface.co/papers/2611> — 链接不可用（HTTP 401）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 通用系统要解决的输入与选择问题

论文面对的输入很杂：问题文本、图文问答、带文件的编程与办公任务、图像视频语音生成提示，以及相机画面加机器人本体状态。目标是每次把当前输入交给最合适的处理模块，输出是该模块的答案、图片、视频、语音或一段操作是否成功。必须保留的信息是同一输入下不同模块的得分能否直接比较，以及调用它们各花多少美元或多少秒。

为此论文把每个可调用的模型、工具或策略都叫候选，把按输入挑候选的规则叫路由器。一个固定的最强候选对所有输入用同一个模块，而按输入最优是事后每个输入都挑实测最好的模块，后者平时拿不到，只用来量出天花板。路由器对每个输入按需求从池中挑选候选，执行顺序是先观察状态再做一次选择，排序依据是价值减去价格加权的成本，最优候选随输入变化是编排能带来增益的前提。

**固定最优候选 × 按输入最优：** 固定最优候选指在训练输入上每个基准平均分最高的那个候选，测试时所有输入都用它，按输入最优指在每个测试输入上事后挑实测分最高的候选，前者是信息最粗时可达到的下界，后者是不可部署的上限，二者之差定义了路由的潜在空间。

### 与语言模型级联和路由研究的关系

此前路由多在语言模型里做：级联是先便宜后升级，偏好路由器是学查询与模型的匹配，质量成本形式化把二者连起来。视觉语言执行任务的编排、算法组合里的虚拟最优与单最优之差、拒识与预算延迟等工作提供了相近思想。

本文的不同在于把同一套理论与同一张打分矩阵铺到文本理解、图像文本问答、图像视频语音生成、代码与办公智能体、机器人操作上，候选按输入共享，指标用各基准自带指标归一到 0 到 1 再按 0 到 100 分报告，比较时强调同输入、同划分与同参考。级联的接受步骤对应拒识选项，最优路由与级联可通过随预算调节的拉格朗日价格统一刻画，而本文用参考与质量容忍固定该价格并做有限样本认证。

### 三个待回答的问题是什么

第一，能 gain 多少：按输入选最优相对固定最优高多少，粗信息如基准名或任务类型能回收多少。第二，学到的路由器行不行：一个跨模态路由器和读画面的机器人路由器能否超过固定候选，学胜者标签为什么不行。第三，何时便宜路线够用：在给定参考与质量容忍下，单位成本质量能提高多少，拟合时满足下限能否保证到测试上。

3 个问题共用统一路由理论组织：路由器价值是在给定观察下扣除定价成本后的最佳期望结局，可达性能随信息形成从固定候选到按输入最优的阶梯，而参考策略加质量容忍固定了质量的价格。矩阵负责量出阶梯的每 1 级，另有两个带记录价格的代码与文本试验台补上成本侧。

### 路由的整体流程与理论框架

一个样本的流程是：输入到达，路由器只看到状态，状态可以是基准编号、能力类型或完整输入本身，然后按状态在菜单里选一个候选执行，得到价值与资源消耗。顺序任务里的多步选择被看成完整计划，状态分布被视为与路由器无关。菜单对每个输入有限，候选包括语言模型、图像视频语音生成器、机器人策略或先便宜再验证升级的执行计划。

理论把每个状态下候选的期望价值与期望成本记下来，价格乘成本从价值中扣除，路由器最大化这个差。信息越细，最优可达值形成单调阶梯，最左是固定候选，最右是按输入最优，中间是按基准或按类型查表，最后一截是给定输入下结果本身的随机性，谁也预测不了。粗状态只在它改变最优候选的地方才有帮助。

\[V^{\star}(\sigma_{1})\ \leq\ V^{\star}(\sigma_{2})\ \leq\ V^{\star}(x)\ \leq\ \mathbb{E}\bigl[\max_{u}W_{u}\bigr].\]

**候选 × 路由器：** 候选指可被调用的一个语言模型、图像视频语音生成器、机器人策略或先便宜后兜底的执行计划，路由器指看到某个状态后从菜单里挑一个候选的决策规则，二者搭配的意义是把通用系统拆成异构能力池加按输入分发的门控，而不是靠单个模型包打天下。

**状态 × 信息阶梯：** 状态指路由器能看到的信息，如基准名、能力类型或完整输入加图像，信息阶梯指状态越细最优可达回报单调不减的一串界，从固定候选经按基准和按类型查表到按输入决策再到不可预测噪声上限，它解释了为什么粗粒度只能改变少数输入的归属。

### 价格、参考与效率如何定义

论文用期望质量变化、节省量、效率与质量下限 4 个量刻画相对参考的得失。效率是期望价值除以期望成本，参考效率同理，质量下限要求质量变化不低于负容忍度。引理说明效率提高等价于质量变化加参考效率乘节省量为正，但这与满足下限是 2 个条件，高效率也可能质量掉很多。文中以正确率仅 15% 但成本仅十分之一的主模型为例，说明效率可达 1.5 倍而质量变化为负。

最优路由的结论是：给定价格，每个状态只用价值减价格乘成本最大的候选；给定参考与容忍，约束下最优效率的路由器仍等价于在某个由参考和容忍决定的价格下做无约束路由。没有成本记录时规则退化为选期望价值最大的候选。最高效率是分段线性函数的唯一根，效率最优路由器恰为对应价格下净价值的 maximizer。

\[Q=\mathbb{E}[V_{g}-Y_{B}],\quad\mathcal{S}=\mathbb{E}[C_{B}-D_{g}],\quad\eta=\frac{\mathbb{E}[V_{g}]}{\mathbb{E}[D_{g}]},\quad\eta_{B}=\frac{\mathbb{E}[Y_{B}]}{\mathbb{E}[C_{B}]},\quad Q\geq-\epsilon.\]

### 级联候选与准入价格的含义

代码与文本实验里的级联候选是先用便宜主模型跑，若自带打分低于阈值再回退到参考模型。它的价值与成本由是否触发回退的示性变量决定，主模型加验证的成本与参考在被调用输入上的增量价值决定了它值不值得进菜单。执行过程是主模型先产出并经验证器判定，接受则止步，拒绝则付参考成本重做。

准入价格是还有某个调用参考的候选能在某状态最优的最大价格，若它低于效率最优对应的价格，最优路由器就根本不调参考。直觉是参考只在它接手的那些输入上赚回足够增量时才值得付费。对可直接分发的级联，其上限等于参考在接手输入上的增加价值除以增加成本，即每美元的增量价值。

\[V=HY_{P}+(1-H)Y_{B},\qquad D=A+(1-H)C_{B}.\]

**参考策略 × 质量下限：** 参考策略指恒调最强模型或固定生成器这类被比较的基准做法，质量下限指要求路由质量相对参考至多下降容忍度，搭配后把选价格参数的问题变成在下限约束下最大化单位成本质量，并可用独立样本做有限样本认证。

**价值评估模型 × 辅助分数模型：** 价值评估模型指对每个候选在当前输入下的期望得分做回归的输出头，辅助分数模型是原文任务命名中对学生分布分数估计的对照概念，二者在本文机器人与多基准实验里对应直接学成功率与学胜者标签两条路线，论文证明并实测前者保留了平局与失败信息因而更有效。

### 路由器实际如何训练与认证

论文说明本研究没有训练候选模型本身，训练的是路由器。跨模态的能力树路由器先用规则树把输入分到 157 个叶类型，分类器在 Qwen3.5-4B 上微调预测叶，再查训练拟合的叶到最优候选表，落不进叶的回退到固定候选。价值评估模型式的结局路由器对每个输入加候选画像打分，用交叉熵对归一化结局回归再取最高分，机器人版本是 7 个策略各一个 sigmoid 头，同时读指令、3 帧 240×320 相机画面与机器人状态。

胜者标签路线是另一套监督：把实测最高分的候选当单标签做分类，机器人里平局按推理时间快者胜，生成任务里按成本与固定顺序打破平局。逐候选回归用足每次成功失败与平局，而胜者标签每输入只留一个选择。认证部分是先在拟合数据上随价格从小到大得到一条价格路径，再在独立样本上按顺序检验质量下限，第一个通不过就停下并回退到参考，从而控制违反下限的概率。拟合路径上价值与成本下降而效率上升，无需多重校正。

### 轨迹矩阵与划分如何保证可比

矩阵覆盖 25 个基准 7 组任务，每池 3 到 7 个候选，共 452 种配置在相同输入上跑出 374401 次打分。语言候选包括 Claude Opus 5.5、GPT-6.1 Sol、DeepSeek V4.1 Flash 等，图像视频语音与 7 个机器人策略各有专属池。输入按来源分组以 70 比 10 比 20 切分，同源不跨划分，RoboTwin 的 2000 个测试场景来自训练没见过的 10 个任务。

外层比较只用池内每个候选都有分的 19814 个测试输入，固定候选按训练选，事后最优与按输入最优在测试上算。SciCode 因后步含模型自生代码被排除在该口径外。价格只在图像语音与机器人时间上有记录，代码与文本靠 CodeRouterBench 与 RouterBench 补 token 价格与延迟，比较时要求同输入回放。理解类候选为单次零样本高努力作答，智能体候选在其原生 harness 下以最大努力运行。

### 按输入选最优留出多大空间

要回答天花板问题，论文比较固定候选与按输入最优在同批测试输入上的平均分，分数越高越好，差距以分计。固定候选按训练输入选每基准最优，事后最优按测试输入选， oracle 按每输入选最优，三者构成信息阶梯的外侧两 rung。

下表是总体对照，固定候选与按输入最优的差距就是可供路由挖掘的上限，语音差距最小而视频与机器人差距最大。

| 组别 | 测试输入 | 固定候选 | 按输入最优 | 差距 |
| --- | --- | --- | --- | --- |
| 全部 24 基准 | 19,814 | 82.60 | 87.98 | 5.38 |
| 语音生成 | 608 | 98.62 | 99.30 | 0.68 |

表中固定候选 82.60 分，按输入最优 87.98 分，差距约 5.4 分，测试输入 19814 个。分开看语音只有 0.7 分左右，视频与机器人各有 18 到 19 分。按基准事后选只从 82.60 提到 82.62，说明只看基准名几乎拿不到增益。在有规则能力树的 18 个基准 5034 个测试输入上，按叶事后选从 77.03 到 77.89，只回收约 8%，机器人按任务与场景条件事后选回收 23%。论文还指出 AA-LCR 上每题答三次后取均值，按输入最优的 2.4 分优势会消失，说明一部分差距是不可预测的结局噪声。执行上每个候选在同一输入上都跑出分数并按基准自带指标归一到 0 到 100，同一批全评分输入上比较保证可比，SciCode 因后步包含自家前步代码被排除在 19814 之外。

### 一个跨模态路由器能走多远

要回答学到的路由器是否超过固定候选，论文在 3444 个测试输入上比较能力树路由器、未训练自选与固定候选，分数越高越好。能力树先用分类器预测 157 叶中的能力叶，再查训练拟合的每叶最优表落子，无法落位则回退固定候选，机器人另用结局路由器。

下表是 16 个基准的总体对照，机器人行是结局路由器单独的结果，同一行内固定与最优才可比。

| 研究 | 基准数 | 输入数 | 固定 | Oracle |
| --- | --- | --- | --- | --- |
| 潜力对照 | 24 | 19,814 | 82.60 | 87.98 |
| 单路由器 | 16 | 3,444 | 79.68 | 84.80 |

表中 16 基准上路由器 79.98 分，固定候选 79.68 分，按输入最优 84.80 分，净增 0.3 分，约为上限的 6%。分输出组看视频生成从 62.17 到 64.28 增 2.12 分，代码与办公智能体增 0.77 分，图像生成增 0.25 分，文本问答与语音基本持平。论文报告分类器准确率 86 到 89%，但 83 到 86% 的输入仍被映射到固定候选，因为一类里几乎总是一个候选占优。在 GenEval2 与 Qwen-Image-Bench 上 31 种设计 124 个配置没有一个显著超过固定生成器，未训练的大模型自选反而低 1.15 分。

### 读画面的机器人路由器为何省时间

这组实验的读图任务是：在 2000 个测试场景里看路由器能否跟住随场景条件翻转的最优策略。图前请先确认干净与随机两组下两条策略谁高谁低，再看路由器是否贴住每组的胜者。路由器读指令、3 帧相机与机器人状态，对 7 个策略各用一个 sigmoid 头预测成功率，测试任务在训练从未见过。

> **看图路径：** 1. 先看干净与随机两组场景下两条策略柱的相对高低是否翻转；2. 再看路由器柱在每组是否贴住该组更高的策略柱；3. 最后看图注给出的平均策略时间从 14.51 秒降到 11.05 秒的含义

[![原论文 Figure 4：Routing by scene condition. Robot success on 2,000 test scenes.](https://arxiv.org/html/2611.05275v1/mini-robot.svg)](https://arxiv.org/html/2611.05275v1/mini-robot.svg)

*论文图 4。原论文 Figure 4:：“Routing by scene condition. Robot success on 2,000 test scenes.”。*

图中所见是干净场景下 PatchWAM 更高，随机场景下 ME-Dex 更高，路由器在干净场景送出 929 个给 PatchWAM，在随机场景送出 842 个给 ME-Dex，总体贴住每组更强者。

下表是总体成功率与策略时间的对照，成功率越高越好，时间越低越好。

| 策略 | 成功率% | 每场景策略时间秒 |
| --- | --- | --- |
| 结局路由器 | 71.55 | 11.05 |

表中路由器成功率 71.55%，固定策略 70.45%，净增 1.10 分，置信区间包含零，策略时间从每场景 14.51 秒降到 11.05 秒，省 24%，单位策略时间的成功率约为单策略的 1.33 倍。仅按条件选已能到 72.1%，离按输入最优 88.85 还差 17 个点，说明剩余增益要预测到单个场景谁成功。

### 便宜路线何时够用与如何认证

要回答单位成本质量，论文固定参考与容忍，比较拟合路线与认证路线，质量变化以分计，效率以相对参考的倍数计，倍数越大越好。拟合在探测任务上满足容忍，认证在另一半上按价格路径顺序检验，停在首个不能认证处。

下表是跨 4 个试验台的总体效率对照，图像取半分容忍。

| 试验台 | 参考 | 效率倍数 |
| --- | --- | --- |
| 代码 | 总调 Opus | 25.5× |
| 文本问答 | GPT-4 | 7.1× |
| 平均四台 | 参考 | 8.82× |

表中代码上 25.5 倍，文本问答上 7.1 倍，加上图像 1.35 倍与机器人 1.33 倍，平均 8.82 倍。CodeRouterBench 上零损失拟合路线从不调 Opus 参考，测试掉 0.44 分，认证路线在 200 次对半划分里 200 次都满足非负，效率中位数 19.4 倍，而未认证拟合只在 12.5% 划分里成立。RouterBench 上零损失路线把 68% 提示送级联，参考实际跑 21%，认证中位数 6.7 倍。图像上把 Qwen-Image-Bench 换到 Grok Imagine 2.0、OneIG 换到 Qwen-Image 3，测试成本降 26% 而掉 0.47 分。语音里最准的也是最便宜的之一，无可 trade，机器人省时间且不掉成功率。

### 学结局还是学胜者标签

这组对照固定输入、骨干与训练场景，只换监督目标：对每个候选的成功率回归，还是对胜者身份分类。图前请先对比两条柱的成功率，再看有多少成功样本因平局规则变成错类。

> **看图路径：** 1. 对比按策略回归与胜者分类两条成功率柱的差距；2. 注意训练成功样本中有多少因延迟平局变成错类标签；3. 思考为什么学胜者会偏向更快但更易失败的策略

[![原论文 Figure 5：Learn outcomes, not winners. Winner labels mislabel most successes.](https://arxiv.org/html/2611.05275v1/mini-targets.svg)](https://arxiv.org/html/2611.05275v1/mini-targets.svg)

*论文图 5。原论文 Figure 5:：“Learn outcomes, not winners. Winner labels mislabel most successes.”。*

图中所见是按策略回归达 71.6%，胜者分类只有 42.8%，31408 个成功训练结局中有 24556 个因延迟平局变成错类目标，94% 的胜者标签由延迟决定，分类器于是学会选更快但更易失败的策略。16 基准生成任务上 12 种胜者标签做法最好 78.87 分，低于固定候选 79.44 分，11 基准上结局路由器与匹配后的固定候选差负 0.40 分，68 类分类加查表低 1.32 分。结论成立的条件是多候选经常同时成功且平局规则与质量无关，一旦如此胜者标签就会系统性误导。

### 同输入比较为何能翻转结论

这组对照回答基线是否公平：固定候选若要求在每个训练输入上都有分，缺少数分就会被降级。11 基准研究里 Opus 5.5 在 HLE 上缺 11 个 1122 个训练分，基线在该基准从 58.24 掉到 52.90，AA-Omniscience 从 77.50 掉到 70.00，总体从 68.30 掉到 65.52，结局路由器相对基线就从落后 0.40 分变成领先 2.38 分。

论文的修复是选择与评估固定候选时都用路由器的回退规则，即缺分处用 GPT-6 Astra 的结局补齐，并在同一批输入上比较。组合选择同理，比较两个组合必须在同一批任务上算增益，否则冻结均值会在 96.4 到 97.1% 的 CodeRouterBench 比较里误排序。

### 理论与测量的边界在哪里

理论把状态分布视为与路由器无关，不覆盖路由器早期选择改变后继状态的情形，如 SciCode 步骤里含有模型自己此前的代码，认证也要求在每个认证输入上都有参考的结局。

测量上 7 个理解基准占四分之三输入与一半潜在差距而未进入路由器学习，长程智能体的步级路由也未深入。重试实验显示失败后第二个模型成功率中位数只剩 0.49 倍，免费编译门可到 4.09 倍美元效率而按价计费的大模型裁判只有 0.30 倍，秒级成本下恒调 Opus 反而更快，这些都说明更贵候选与更细状态只有在取代对象上净胜时才值得买。

### 复现第一步与需要分开确认的事

复现先按来源分组切分并固定同输入比较，再选参考与容忍，拟合价格路径后留独立样本做顺序检验，不要把拟合时满足下限当成测试保证。关键条件是状态定义、菜单、价格单位与回退规则，超参数如 LoRA 秩与学习率按附录原值起步。

作者资源当前可用的是代码仓库，可做安装与推理，模型权重链接本次不可用，第三方链接只证明论文提到过。代码可跑不等于权重可下载，更不等于系统开箱可运行，三者要分开验证。

### 何时值得尝试与还缺哪项验证

当候选质量接近而价格差大，或最优策略随场景条件翻转且画面可读时值得尝试，语音这种一家独大且便宜的任务不必路由。先做同输入的天花板与按类型回收率，若类型内方差大再学结局回归，避免用胜者标签。

还缺的验证是在新任务分布与新价格下重跑认证覆盖率，以及补上理解基准与长程步级路由的对照，才能知道 0.3 分增益与 8.82 倍效率在部署分布上是否成立。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.05275)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-09 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-09/)
