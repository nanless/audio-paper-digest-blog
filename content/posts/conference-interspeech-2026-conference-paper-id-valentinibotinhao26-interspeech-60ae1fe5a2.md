---
title: "Exploring Active Sampling Strategies for Pairwise Comparisons in Speech Synthesis Evaluation"
date: 2026-09-28
draft: false
description: "该文在 10 个系统的语音自然度评价中比较随机、排序式 merge-rank 与信息增益式 ASAP 三种选对策略，发现 ASAP 发现显著差异最多、排序最稳，且相同听音时长下 BWS 优于 AB，但代价是 BWS 单题更长、ASAP 需序贯计算与完整回答库仿真。"
tags: ["统计分析", "主观评测", "模型比较", "语音质量评估"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:valentinibotinhao26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/valentinibotinhao26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/valentinibotinhao26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "1a46450076590db2cd70590807e0e04b0b0469faa8dacca474210fe3daab98b0"
paper_digest_api_reader_plan_sha256: "c393d72e65272c1f1e195729d65ec7c41a7a7dcd24d925b0443eb17e612fdd5d"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "9670fe89bb3e7cc8823efd16c7bff17880b796915f78e4c1843bb70caea81468"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "1340211829f8c856ce2577b30736ce42efa1c92252fefde70b0318416420d664"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "05e02c821ac78a88fa8ff3be13105303d75113a0d8cd2748b2a2ce19699274a5"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "cdcf47b11b463da1753beb0ab76b7e15b1d83a08fb39c3520db7bdb6f2017307"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.statistical-analysis","label":"统计分析"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"},{"facet":"research_focus","id":"research_focus.comparison","label":"模型比较"},{"facet":"task","id":"task.speech-quality","label":"语音质量评估"}]
paper_digest_primary_task: "语音质量评估"
paper_digest_primary_method: "主观评测"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 偏好测试不必测全所有对：用主动选对让 AB 与 BWS 更快分出系统高下

> 英文题目：*Exploring Active Sampling Strategies for Pairwise Comparisons in Speech Synthesis Evaluation*

> 会议身份：`conference:interspeech:2026:conference-paper-id:valentinibotinhao26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/valentinibotinhao26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/valentinibotinhao26_interspeech.pdf)

标签：#统计分析 #主观评测 #模型比较 #语音质量评估

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.9/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Cassia Valentini-Botinhao：机构信息未能从会议 PDF 纯文本可靠映射
- Andrea Lorena Aldana Blanco：机构信息未能从会议 PDF 纯文本可靠映射
- Dan Wells：机构信息未能从会议 PDF 纯文本可靠映射
- Aidan Pine：机构信息未能从会议 PDF 纯文本可靠映射
- Korin Richmond：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

语音合成主观评测需在有限听音时长内可靠区分多个系统，输入为多系统语音刺激与听者偏好判断，输出为系统分数与排序，难点在于听者量尺偏差大与全对比较成本高。为此先通过全覆盖预采集构建答案库以支撑离线重采样仿真，接着按随机、合并排序与ASAP采样器请求检索对应问题答案，最后用TrueSkill更新分数并以显著差异数与Kendall排序相关性度量收敛效率。合并排序负责聚焦排序相邻易混淆对并迭代收敛，ASAP负责以前后验KL散度预期信息增益选对并用最小生成树批量组对，其输出直接决定下一批听音问题。与随机和排序方法相比，ASAP以信息增益聚焦不确定性高的系统对并支持批量并行，BWS单题提供五个偏好关系因而在相同时长下信息密度更高。在相同测试时长换算的评测设置下，10名被试BWS结合ASAP的总听音指标为200分钟，低于40名被试AB测试的总听音指标800分钟。该结论适用边界受限于Blizzard Challenge 2013旧系统与美国英语母语众包听者，在当前高自然度神经系统窄区间表现尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么：为什么语音合成评价离不开听音主观测试？

本文输入是刚进入语音合成评价的研究生需要理解的一个现实矛盾：客观指标可复现、易计算，适合大批量筛选，但论文明确报告它们不一定反映人的判断。主观听音测试因此仍是金标准。输出是让读者能复述何时用绝对打分、何时用偏好比较，以及如何用更少题目得到可靠排序。必须保留的信息包括任务是自然度评价、系统数为 10、比较上限为 45 对、评价依赖真实听众回答库回放。平均意见分这个白话意思是听一句打一个 1 到 5 分的做法，英文是 Mean Opinion Score，缩写 MOS，后文简称 MOS。

它的操作是逐条呈现、逐条打分，看似得到绝对性能值，但原文指出该值受测试内其他刺激和听众使用量表习惯影响，不能跨测试、跨时间直接比较。偏好测试这个白话意思是不打绝对分、只选谁更自然的做法，后文简称偏好测试。它的操作是并排比较，优点是听众更喜欢、方差更小、受量表偏置影响小。学习依赖是先接受 MOS 不可跨测试比较，再理解偏好测试为何需要排序模型补全未测对子。

**平均意见分 × 偏好测试：** 平均意见分即 MOS 要求听众逐条用 1 到 5 打绝对分，分工是给出看似可跨 test 比较的绝对值，但搭配中易受量表使用习惯和上下文影响；偏好测试即 AB 与 BWS 要求听众直接比较谁更自然，分工是只保留相对顺序而去掉绝对刻度，搭配理由是相对判断方差更小、听众更喜欢，组合意义是本文放弃追求绝对分，转而研究如何用更少的成对比较可靠恢复系统排序。

本节的教学任务是建立评价目标：不是预测一个绝对高分，而是可靠恢复系统间相对顺序并知道哪些差异显著。原文动机还包括资源受限场景，例如濒危语言合成可用听众很少，因此减少题目数有实际价值。资源状态方面，本次未发现来源绑定且完成验证的资源，不得声称代码、模型或数据已公开，只能依据论文文字复述方法。

### 有哪些相关路线：MOS、AB 与 BWS 各自解决什么？

要回答选哪种题型，先沿一条样本走完：取同一句话，系统 A 与系统 B 各合成一遍，听众在 AB 中选更自然者，系统输出一个胜负，评分模型据此更新两系统分数。若是 BWS，则同一句话取 4 个系统各合成一遍，听众选最自然与最不自然者，系统输出 5 个成对偏好，最优胜三者、另两者胜最差者，再由评分模型更新四系统分数。AB 测试这个白话意思是二选一，英文是 AB test，后文简称 AB。最优最差量表这个白话意思是从多个中选最好与最差，英文是 Best-Worst Scaling，缩写 BWS，后文简称 BWS。

原文回顾 AB 方差低于 MOS，BWS 在文本情感标注中曾以约 30% 标注量达到与量表相当的可靠性，但在音频中需顺序聆听，对工作记忆要求更高。近期工作显示 MOS、AB、BWS 在合成语音评价中结论大致一致，因此都是有效选项。

**AB 测试 × 最优最差量表：** AB 测试每次呈现同一句话的两个系统版本并选更自然者，分工是单次只产生一个偏好；最优最差量表即 BWS 每次呈现同一句话的 4 个系统版本并选最自然与最不自然者，分工是一题可拆出 5 个偏好，最优者胜其余三者、其余两者胜最差者，搭配理由是 BWS 单题信息密度更高，组合意义是本文把两种题型放在同一主动选对框架下比较单位时长效率。

第二个依赖是排序模型。原文指出不必测全所有对，可用 ELO、TrueSkill、Bradley-Terry 处理成对结果，或用 Plackett-Luce 处理多项排序，由此从不完全覆盖估计系统分与排序。BWS 结果既可拆成成对比较再用成对模型，也可用多项模型直接处理。本文继承前人比较 MOS、AB、BWS 有效性的工作，进一步问如何让 BWS 更高效，并引入排序式与信息增益式选对方法。

### 问题到底是什么：选对策略要在什么约束下比较？

论文要解决的问题是：在听音总时长有限时，如何选择接下来要比较的系统对，使得用更少回答就能发现更多显著差异并接近全量数据的排序。约束有 3 层。第一是系统数带来的组合膨胀：最朴素的全量比较需要 N 乘 N 减 1 除以 2 个比较，10 个系统是 45 个比较，20 个系统则到 190 个比较，做大排行榜时不可行。第二是题型差异：AB 一题恰好回答一个请求对，BWS 一题包含 4 个系统，请求一个对时不保证该对恰为最优或最差，但会附带提供该对与其他系统的信息。

第三是公平比较：不同策略必须在相同请求问题数或相同估计听音时长下对比，且最终参照都是用全部问题得到的排序与显著性。教学例子是：假设只有 200 分钟听音预算，应把预算花在随机抽对、集中比相邻对，还是花在信息增益最大的对上，本文用回放实验回答该选择。

### 方法全景：三种选对策略与两种题型如何组合？

全景是 2 乘 3 组合：题型维度是 AB 与 BWS，策略维度是随机、合并排序与 ASAP。随机采样这个白话意思是每轮均匀抽取，白话已解释，后文简称随机。主动采样这个白话意思是根据已看到的回答决定下轮问谁，后文简称主动。随机每轮抽 9 对、重复 400 轮、做 50 个随机种子，作为基线。合并排序这个白话意思是先猜一个排序、集中比相邻者、打够证据再合并，白话已解释，后文简称 MR。

ASAP 这个白话意思是用期望信息增益选下一批对的做法，英文是 Active Sampling for Pairwise comparisons，后文简称 ASAP。ASAP 用先验与后验分布的 KL 散度衡量信息增益，并用最小生成树 1 次选多对，其中节点是系统、边是候选对、权重是期望信息增益的倒数，只对最易混淆对计算增益但保证每轮每个系统至少出现 1 次。

**随机采样 × 主动采样：** 随机采样分工是每轮均匀抽取固定数量的系统对作为无信息基线；主动采样分工是根据已观测回答调整下一轮要问哪几对，搭配理由是若主动不能稳定超过随机则不值得增加计算与调度复杂度，组合意义是本文把随机作为公平对照，让 merge-rank 与 ASAP 的增益可归因于选对策略而非数据量。

工作流是请求对、检索真人回答、更新分数的闭环。请求由策略给出，检索是从预先采集的覆盖全部组合的回答库中随机抽一道对应真题，更新对随机与 ASAP 用 TrueSkill，对 MR 用其内部比较算法与重排。BWS 批量请求时用贪心搜索选最少 BWS 题目覆盖所请求对，这是原文报告的最佳做法。

### 组件如何计算：MR 与 ASAP 各自看什么信号？

先沿一个 AB 样本走完输入到输出：输入是请求对例如系统 K 对 M，检索库中随机抽一道 K-M 同句 AB 真题及其某听众答案，TrueSkill 据此上调胜者、下调负者并收缩不确定度，输出是更新后的系统分。重复多轮后，根据分数标准差构造置信区间，重叠则不显著，分离则计为显著差异；同时用 Kendall 排序相关比较当前排序与全量排序的接近程度。合并排序即 MR 的分工是省题：对当前相邻对反复提问直到置信检验通过或达到每对上限 m，再处理下 1 对。

原文实现用置信度 0.05，上限取 54、108、216 三档，分别记为 MR1、MR2、MR3，另设随机初始排序的 MR1-R 对照；其中 MR1、MR2、MR3 的初始排序直接设为全量最终排序，属于最佳情形。ASAP 的分工是选信息量大的对：对候选对枚举可能回答，计算后验相对先验的变化，选期望变化大者，并用最小生成树保证连通与批量。

**合并排序 × ASAP：** 合并排序即 merge-rank 是基于排序的主动方法，分工是维护一个当前排序、集中比较相邻易混淆系统并用置信区间决定何时换对；ASAP 是基于信息增益的主动方法，分工是对每个候选对估计观测前后期望的后验分布差异并选增益最大的一批，搭配理由是前者计算轻但依赖初始排序、后者更准但需逐轮推断，组合意义是本文用同一回答库回放对比二者在显著差异数与排序相关上的差异。

TrueSkill 这个白话意思是贝叶斯技能分模型，后文简称 TrueSkill。显著差异数这个白话意思是有统计把握宣布不同的系统对数，后文简称显著对数。原文用 TrueSkill 分数标准差导出置信区间再计数，用 TrueSkill 分数算排序相关，MR 则用中间重排算相关。

**TrueSkill × 显著差异数：** TrueSkill 分工是把离散的胜负回答转化为每个系统的连续分数与不确定度；显著差异数分工是根据分数置信区间判断多少个系统对可以宣布有差别，搭配理由是只看排序可能掩盖区分力度、只看显著对数可能忽略顺序，组合意义是本文同时报告两者，分别回答能分开多少对与顺序有多接近全量结果。

该设计意味着 MR 中间分基于不完全覆盖，因此收敛前显著对数天然偏低，这是理解曲线形状的关键机制。

### 有无模型训练：本研究训练了什么、冻结了什么？

本研究没有训练新的语音合成模型，也没有训练新的主观质量预测网络。必须明确：10 个被评价系统是现成音频，自然语音、 Blizzard Challenge 2013 的老系统 N、C、K、M、B，以及 Tacotron 与 FastPitch 配 WaveNet 或 Parallel WaveGAN 的 4 个新系统，均由前人提供音频；SSL-MOS、UTMOS、ScoreQ、TTSDS 只是拿来算排序相关的现成客观指标，不是本研究训练的对象。真实计算过程是仿真回放而非梯度训练：先做覆盖全部组合的听音采集，再用策略按轮请求对、从库中按对检索真题、更新 TrueSkill 或 MR 内部状态。

原文未报告神经网络优化器、学习率、冻结层、梯度路径与重置时机，这些缺项不应从模型名推定。ASAP 调用的是原作者实现中的选择性信息增益计算与批量模式，MR 调用的是序贯版本实现。复现者应把重点放在回答库构造、随机有放回检索、50 种子重复与每轮 9 对的调度上，而不是寻找训练脚本。

### 实验条件：数据、题量、被试与回放规则是什么？

数据选择有意为之：用 Blizzard Challenge 2013 语音，因其既有非常相似的系统也有明显不同的系统，便于检验区分能力，尽管最新系统已接近真人水平。原文用 100 句测试句中的 90 句造题，剩余 6 句用于听众排除，其余未说明去向。题量与分配需精确复述，这决定回放上限。下表前的问题是：AB 与 BWS 各自一轮让听众听多少、多少人参与、排除后有效人数多少，公平条件是同一回答库、同一检索规则，指标方向是显著对数越多越好、排序相关越高越好。

表前比较已经说明题量与人数的对应关系，下文先列出 AB 与 BWS 的题面组织与有效样本。

| 条件 | 指标 | AB 取值 | BWS 取值 | 比较对象 |
| --- | --- | --- | --- | --- |
| 题量结构 | 每套题问题数 | 90 | 30 | 单个被试一套 |
| 分组结构 | 分组方式 | 10 组每组 9 题 | 3 组每组 10 题 | 题面组织 |
| 组合覆盖 | 覆盖组合数 | 45 | 30 选自 210 | 系统对或四元组 |
| 招募人数 | 招募总数 | 60 | 60 | Prolific 英语母语 |
| 有效人数 | 排除后人数 | 54 | 57 | 未通过验证剔除后 |

表后解释：AB 每对 45 种组合各问 2 次并交换顺序，用拉丁方轮换句子，使跨全部测试每个系统都唱过每句，减少文本影响。

BWS 用基于特征的子模优化平衡系统与对子出现频次，30 个四元组分 7 组覆盖全部 210 种，每组再配 3 种句子分配共 21 种配置。听众为美国居住英语母语者，未通过多于一道验证题或一致性低于均值一个标准差者剔除。
下表前的问题是主动方法以什么批量与上限运行，公平条件是每轮请求 9 对、重复 50 种子，指标仍是显著对数与排序相关。

| 条件 | 指标 | 随机取值 | 主动取值 | 比较对象 |
| --- | --- | --- | --- | --- |
| 运行轮数 | 迭代次数 | 400 | 400 | ASAP 与随机 |
| 每轮批量 | 请求对数 | 9 | 9 | 每迭代 |
| 重复次数 | 随机种子数 | 50 | 50 | 均值与自助置信带 |
| MR 上限 | 每对最多题数 | 54 | 108 | MR1 对 MR2 |
| 单题时长 | 平均秒数 | 16.9 seconds | 36.6 seconds | AB 对 BWS |

表后解释：该表中的运行轮数与每轮批量直接决定总请求量，随机种子数用于均值与自助置信带估计，MR 上限区分不同收敛条件，单题时长为跨题型时长换算提供依据，后文曲线将据此比较显著对数与排序相关。
表后补充解释：MR 上限另有 216 对应 MR3，置信度固定 0.05。

ASAP 用批量模式与选择性增益计算，原文报告该模式稍好且更快。时长换算是用平均单题时长乘以请求问题数，AB 约 16.9 seconds、BWS 约 36.6 seconds，这是跨题型比较的核心换算，未胜出项是 MR 因逐对打足证据导致中间覆盖不全，后文曲线将显示其显著对数长期偏低。

### 主结果：同样题数下谁发现更多差异、排序更准？

测什么很明确：在 AB 题数与 BWS 题数各自增长时，显著对数与排序相关如何变化；与谁比是随机对 MR 各档与 ASAP；条件一致指同一回答库有放回检索、BWS 批量用贪心最少题覆盖。指标方向是两条曲线越高越好，上限显著对数 45、排序相关 1.0。以下先看 AB 内的显著对数。导读是：横轴是 AB 问题数到约 3500，纵轴是显著对数，重点看早期 500 题内谁爬升更快、后期谁更高，MR 多条细线代表不同种子与上限。

> **看图路径：** 1. 先看横轴 AB 问题数与纵轴显著差异数，确认上限为 45 对；2. 再对比红色 ASAP 虚线与黑色随机虚线在 500 题以内的高低；3. 最后观察紫黄蓝绿多条 MR 细线是否长期低于两条主线

[![原论文 Figure 1：Number of significantly different pairs as a function of AB questions.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/df55c46a9ddc/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/df55c46a9ddc/figure-1.png)

*论文图 1。原论文 Figure 1：“Number of significantly different pairs as a function of AB questions. 45 is the maximum possible number.”。*

解释是：像素显示红色 ASAP 虚线在早期爬升最快并全程略高于黑色随机虚线，紫黄蓝绿 MR 细线在 500 题前显著对数明显偏低，随后 MR1、MR2 逐步追近但 MR3 因每对上限大而拖得更长，原文判断 ASAP 最好、MR 收敛时在 AB 中可接近但中间因覆盖不全而偏低。再看 BWS 内的显著对数。导读是：横轴是 BWS 问题数到约 1600，纵轴仍是显著对数上限 45，重点看红色 ASAP 实线与黑色随机实线分离，以及下方 MR 簇何时抬升。

> **看图路径：** 1. 先看横轴 BWS 问题数范围与纵轴显著差异数上限 45；2. 再对比红色 ASAP 实线与黑色随机实线在 200 到 600 题段的差距；3. 最后观察下方大量 MR 细线收敛前显著对数为何长期贴近零

[![原论文 Figure 3：Number of significantly different pairs as a function of BWS questions.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/df55c46a9ddc/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/df55c46a9ddc/figure-3.png)

*论文图 3。原论文 Figure 3：“Number of significantly different pairs as a function of BWS questions. 45 is the maximum possible number.”。*

解释是：像素显示 ASAP 与随机远高于所有 MR 细线，ASAP 全程高于随机，MR 在 600 题前几乎贴零、之后才分层抬升，原文报告 ASAP 优势在 BWS 中尤其明显。排序相关方面，AB 与 BWS 均显示 ASAP 与随机很快升到 0.9 以上且 ASAP 略优，MR 随机初始排序从低相关缓慢爬升但最终接近正确排序，说明即使初始随机、覆盖不全，MR 最终排序仍可接近全量排序。表前问题是：客观指标排序与等效人力如何量化，公平条件是同一 10 个系统、同一听音参照，指标方向是相关越高越好、等效分钟数越小越好。

| 条件 | 指标 | 基线取值 | 本方法取值 | 比较对象 |
| --- | --- | --- | --- | --- |
| AB 相关 | 排序相关 | 0.64 | 0.64 | SSL-MOS 对 ScoreQ |
| AB 相关 | 排序相关 | 0.56 | 0.47 | UTMOS 对 TTSDS |
| BWS 相关 | 排序相关 | 0.73 | 0.73 | SSL-MOS 对 ScoreQ |
| BWS 相关 | 排序相关 | 0.64 | 0.56 | UTMOS 对 TTSDS |
| 等效人力 | 听音分钟数 | 800 minutes | 200 minutes | AB 对 BWS |

表后解释是：客观指标在 BWS 参照下相关更高，但原文提醒前三者可能见过部分音频，不可当作公平胜负；主要收益是 10 人各做 20 分钟 BWS 加 ASAP 共 200 分钟听音努力，等效于 40 人各做同样时长 AB 共 800 分钟，平均题时 16.9 seconds 与 36.6 seconds 只是时长换算依据；未胜出项是 MR 与部分客观指标，未评测边界是当前顶尖接近真人的小差异系统，原文推测 BWS 与 ASAP 在小范围条件下优势可能更大但属待验证。

### 跨题型消融：换算成分钟后 BWS 还划算吗？

该节把题目数换算成总听音时长再比，这是真正的部署视角。测的是相同时长下显著对数与排序相关，与谁比是 AB 随机、AB 加 ASAP、BWS 随机、BWS 加 ASAP，条件一致是单题时长分别用实测均值换算。指标方向仍是越高越好。以下先看时长视角的显著对数。导读是：横轴是总时长到约 1000 分钟，纵轴是显著对数，实线代表 BWS、虚线代表 AB，红色代表 ASAP、黑色代表随机，重点看实线簇是否整体压过虚线簇。

> **看图路径：** 1. 先确认横轴已换算为总听音时长而非题目数；2. 再比较同为实线的 BWS 两条与同为虚线的 AB 两条的上下位置；3. 最后看同一题型内红色 ASAP 是否略高于黑色随机

[![原论文 Figure 5：Number of significantly different pairs as a function of overall test duration.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/df55c46a9ddc/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/df55c46a9ddc/figure-4.png)

*论文图 4。原论文 Figure 5：“Number of significantly different pairs as a function of overall test duration.”。*

解释是：像素显示两条实线 BWS 全程高于两条虚线 AB，且同题型内红色 ASAP 略高于黑色随机，支持 BWS 单位时长效率更高、ASAP 进一步放大的判断。再看时长视角的排序相关。导读是：横轴同样是总时长到约 1000 分钟，纵轴是排序相关从约 0.5 到 1.0，线型与颜色含义同上，重点看早期分离与后期收敛，阴影为 50 次重复的自助置信带。

> **看图路径：** 1. 先看纵轴排序相关系数起点约 0.7 而非零；2. 再对比 BWS 实线与 AB 虚线在 200 分钟以内的分离；3. 最后观察阴影置信带在早期很宽而后期收窄的含义

[![原论文 Figure 6：Rank correlation to final rank as a function of overall test duration.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/df55c46a9ddc/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/df55c46a9ddc/figure-6.png)

*论文图 6。原论文 Figure 6：“Rank correlation to final rank as a function of overall test duration.”。*

解释是：像素显示 BWS 实线早期高于 AB 虚线、后期均趋近 1.0，ASAP 略优但不如题型差异大，早期阴影宽说明少数据时波动大。原文还报告减少听众数不实质改变结论，这支持少听众场景可用 BWS 加 ASAP，但未测量单题认知负荷与调度延迟，不能承诺实际 wall-clock 同比缩短。

### 限制与反证：哪些结论不能推广？

直接报告的是：在所用 10 个系统、90 句、美国英语母语听众、自然度维度下，ASAP 显著对数最多、BWS 单位时长优于 AB。有限解释是：MR 收敛后在 AB 中可接近 ASAP，MR 随机初始仍能收敛到接近正确排序，说明初始排序不准可用客观指标估计补救。未验证推测是：作者认为对更接近的当前顶尖系统，BWS 与 ASAP 仍优且可能更优，原文明确引用 ASAP 原论文小范围条件优势，但本研究未用最新顶尖系统验证，应表述为可能、待验证。

缺失证据不是技术错误：未测量误判率、单题工作记忆负荷、ASAP 在线计算开销与实际延迟，未评估说话人相似度等维度，未测试不同语言与非母语听众。相关性不是因果：排序相关高不等于听众误判少，显著对数多不等于每对都重要。总体趋势不等于每步成立：MR 中间阶段显著对数低是方法特性，不是数据错误；客观指标相关数受训练数据泄漏影响，不可当作人评替代。

### 复现先做什么：按什么顺序重放实验？

先准备回答库：按原文 AB 每套 90 题、BWS 每套 30 题采集，AB 覆盖 45 对各 2 次并交换顺序、BWS 覆盖 210 四元组分 7 组，用拉丁方与子模优化平衡句子与系统频次，留验证题做剔除，有效目标约 AB54 人、BWS57 人。再实现回放：有放回按请求对随机抽真题，BWS 批量用贪心最少题覆盖请求对；随机每轮 9 对跑 400 轮做 50 种子，MR 用置信度 0.05 与上限 54、108、216，ASAP 用原作者批量与选择性增益实现并保证每轮每系统至少 1 次。然后用 TrueSkill 更新分数，从分数标准差得置信区间计数显著对数，用 Kendall 相关比当前排序与全量排序。时长换算用 16.9 秒与 36.6 秒乘以题数。

关键超参与信息条件是每轮 9 对、400 轮、50 种子、置信度 0.05、m 三档、单题时长两数。代码、模型或数据当前可用性本次未能确认可达，不得声称已公开，需按论文文字自行实现回放与评分。

### 何时值得尝试：给资源受限评价的选择建议？

当听众难找、每人可听时长有限、目标是分出系统高下而非得到绝对分时，值得尝试 BWS 加 ASAP：同一句话 1 次听 4 个、选最优最差，信息密度高于 AB 二选一；选对时优先问期望信息增益大的对，而非均匀抽或死磕相邻对。当已有可靠初始排序且计算资源极少时，可考虑 MR 类排序法，但要接受收敛前显著对数偏低、需要较多每对证据。常见误解是偏好测试必须测全所有对，本文用排序模型证明不完全覆盖可估计全序。

另一个误解是 MOS 绝对值可跨测试比较，原文强调其受上下文与量表习惯影响。收束是：10 人 20 分钟 BWS 加 ASAP 约 200 分钟 effort 等效 40 人同样时长 AB 约 800 分钟的结论，仅在本文系统分布与自然度任务下报告，换到顶尖小差异系统、其他维度或语言前，需补做验证并报告计算开销与听众负荷。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
