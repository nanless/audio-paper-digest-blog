---
title: "TTA-Bench: A Comprehensive Benchmark for Evaluating Text-to-Audio Models"
date: 2026-09-11
draft: false
description: "TTA-Bench 针对文本到音频生成提出覆盖准确性、效率、泛化、鲁棒性、公平性、偏见与毒性的七维评测，用 2999 条提示与 118314 条人工标注比较十个主流模型，发现 Tango 2 在准确与泛化上领先但毒性率最高，而效率与公平性上各模型分化明显。"
tags: ["基准测试", "基准设计", "主观评测", "音频生成"]
categories: ["aaai-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:aaai:2026:conference-paper-id:40639"
paper_digest_source_kind: conference
paper_digest_conference_id: "aaai-2026"
paper_digest_conference_record_url: "https://ojs.aaai.org/index.php/AAAI/article/view/40639"
paper_digest_conference_pdf_url: "https://ojs.aaai.org/index.php/AAAI/article/view/40639/44600"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "cf4b5ad717c3bb185ec91ea4fbcbe755f006ec8fa51deafe1c72c3fde3d6d240"
paper_digest_api_reader_plan_sha256: "7163e8921ed8a464bd42a6fcfd2c5206197ba11992c98ed813340331153816c7"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "51ef2d37b04400fe7b611c58885719364eee67524e3f0740d9a3790c8c609e3e"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "df232798e2dbaac04c35ffc7dd7c49451d56da3e4f60416b732290da7316fb9a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "3ceed44162142ad69f6413235b46243ad174793f8588edd7efc16bd86b4dec31"
paper_digest_api_reader_author_count: 10
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "b5735b81108abd8a917cedf8ef2d788ae6cd0548639535a19f5277a91ec5231f"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"},{"facet":"task","id":"task.audio-generation","label":"音频生成"}]
paper_digest_primary_task: "音频生成"
paper_digest_primary_method: "基准设计"
paper_digest_score: 8.4
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 不只测好听：TTA-Bench 把准确、可靠与责任放在同一张考卷上

> 英文题目：*TTA-Bench: A Comprehensive Benchmark for Evaluating Text-to-Audio Models*

> 会议身份：`conference:aaai:2026:conference-paper-id:40639`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40639) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40639/44600)

标签：#基准测试 #基准设计 #主观评测 #音频生成

评分：**8.4/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：数据集与基准

## 👥 作者与机构

- Hui Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Cheng Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Junyang Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Haoze Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhang Jia：机构信息未能从会议 PDF 纯文本可靠映射
- Shiwan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaming Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Haoqin Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Hui Bu：机构信息未能从会议 PDF 纯文本可靠映射
- Yong Qin：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

文本到音频以自然语言提示为输入生成通用声音波形，输出需兼顾音质与语义时序对齐，难点在于无参考条件下难以客观刻画组合推理，且泛化鲁棒与公平毒性长期缺乏可复用评测。作者先按功能质量可靠性责任感划分准确率效率泛化鲁棒性公平性偏置毒性七维，并通过数据集抽取模板生成人工改写与视觉转听觉构建2999条多样化提示，为统一比较提供输入。上一步提示进入下一步统一生成环节，对十个主流模型生成音频并施加AES与CLAP客观指标，加专家与众包十点量表主观打分，形成可对齐的分数。最后汇总七维结果并以扰动一致性人口组配对与声音毒性迁移协议输出比较结论，使部署评估直接复用统一分数。与仅测音质或时间对齐的既有评测相比，关键差异在于引入分布外想象场景扰动一致性人口组配对与声音毒性迁移等可复用协议，使安全公平成为一等公民，具有实际部署意义。在准确率基准下，Tango 2的CLAP为0.46，高于MAGNeT的0.39。结论适用边界限于所定义提示分布短音频通用声音与评测者群体，向开放域长音频与多语言部署的外推尚未验证。推理开销在单块RTX 4090硬件上以实时因子测量，训练成本未见披露。

## 🔗 开源与复现资源

- 代码相关资源：<https://nku-hlt.github.io/tta-bench/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://nku-hlt.github.io/tta-bench/> — 链接可访问（HTTP 200）
预印本/扩展版链接未在会议页展示；会议版来源见页首官方记录与 PDF。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么文本到音频不能只测好听？

输入是这篇论文的完整正文证据与 4 张官方原图像素，目标是让刚进入音频生成的研究生能核对事实、复述方法并理解实验条件，必须保留的信息包括 7 个维度的定义、2999 条提示的构成、客观与主观结合的协议、10 个模型的比较条件与主要数字，输出是 1 篇按学习依赖展开的中文解读。

文本到音频的英文名是 Text-to-Audio，缩写为 TTA，任务是给定一句自然语言描述，生成一段与之对应的声音波形或频谱再合成的音频。初学者容易把评测等同于听起来是否清晰悦耳，但论文指出这种窄评测会漏掉 3 类风险。第一类是功能质量之外的可靠性，例如用户把大小写写错、换一个同义词，模型是否还能生成同一事件。第二类是分布外泛化，例如训练中常见的狗叫与门铃组合，到了罕见乐器或不可能场景是否还能组合。第 3 类是社会责任，例如中性提示是否系统性生成某一性别声音，或有害提示是否被转成攻击性音效。

这 3 类问题对应论文的总体框架。功能质量包括准确性与效率，可靠性包括泛化与鲁棒性，责任包括公平性、偏见与毒性。准确性用白话说就是生成内容是否对得上提示的事件与顺序，效率是生成速度与音频时长的比值。泛化是处理陌生组合的能力，鲁棒性是抵抗输入小扰动的能力。公平性是不同人群提示下质量是否一致，偏见是中性输入下是否偏向某一性别，毒性是是否生成仇恨、暴力自残、性、惊悚与违法等有害声音。理解这 7 个词是后续所有构造与指标的前提。

### 已有路线在测什么，又漏掉了什么？

论文把相关工作分成生成方法与评测方法两条线。生成线上提到了 Diffsound 使用非自回归扩散模型，AudioGen 对原始波形做自回归建模，后续工作引入跨模态嵌入、大语言模型与时间感知结构，Tango 2 则用直接偏好优化对齐扩散生成。这些路线解决的是怎么生成更真、更多样、更可控。

评测线上既有客观指标也有主观听测。客观指标包括弗雷歇音频距离的英文名是 Frechet Audio Distance，缩写为 FAD，用于比较生成与参考分布的距离，KL 散度衡量分布差异，Inception Score 衡量多样与可分性，CLAP 分数衡量文本与音频的跨模态相似。主观听测则请人打分，但常受样本小、标注者专业性不足与评分粒度粗的影响。论文报告的一个关键局限是许多客观指标需要参考音频，在开放域无参考场景下不适用，而主观协议又缺乏统一标准，导致结果难以比较。

与文本到图像和文本到语音相比，TTA 缺少统一全面的基准。AudioTime 只研究了时间对齐一个维度。TTA-Bench 的定位不是再提一个生成模型，而是补一张覆盖功能、可靠与责任的考卷，并明确把公平性、偏见与毒性纳入 TTA 评测，论文称这是首次在该领域同时定义并评测这些维度。学习时要区分同输入同目标的对照与跨类别的借鉴，不能把图像基准的结论直接当成音频模型的胜负。

### 要解决的评测问题是什么？输入输出如何界定？

论文要解决的问题可以表述为给定任意 TTA 模型与一条文本提示，如何在无参考音频也可运行的条件下，给出多维度可比较的分数。输入是一条文本提示，输出是一段音频，评测再对这段音频打分。难点在于提示多样性不足与指标单一。如果评测提示都来自训练同域的 AudioCaps 等数据集，模型只需记住常见搭配即可得高分，无法检验组合与时序推理。

为此论文把准确性测试操作化为事件数与时序关系的受控组合。事件数取 1 到 5，时序关系分为无、并行、序列与复杂。一个样本的走查有助于理解，例如提示包含狗叫后接门铃再叠加雨声，理想输出应先出现狗叫再出现门铃且雨声并行，评测要同时看事件是否齐全与顺序是否正确。这是一个教学例子，不是论文原提示，数值与效果不作断言。

责任问题的界定更需小心。公平性不是听感好坏，而是替换性别、年龄与语言属性后质量是否稳定。偏见不是生成质量低，而是中性提示下男女声分布是否偏离均匀。毒性不是语音文字的脏话检测，而是无词的攻击性、惊悚或性暗示声音是否出现。这种界定决定了后文为何公平性用组间差异、偏见用分布偏差、毒性用人工二值投票。

### 七维框架与 2999 条提示的全景如何串起来？

从学习依赖看，先记住 3 组 7 维的划分，再看数据如何为每 1 维提供可测输入，最后看指标如何把音频变为分数。功能质量回答能不能用，可靠性回答换个说法或换个场景还行不行，责任回答对不同人群与有害请求是否安全。

下图是全文数据构造的总览，建议按从左到右、从上到下的顺序阅读，先抓主干再看分支细节。

> **看图路径：** 1. 先从上排 Accuracy、Generalization、Bias 三个虚线框看提示来源与标注分支；2. 再看下排 Robustness、Fairness、Toxicity 的基础选择到变体生成的箭头；3. 对照每框内英文小字确认事件数、时序关系与扰动类型的具体枚举；4. 记录毒性分支中 150 条改编与 150 条直写的数量划分

[![原论文 Figure 1：The data construction overview.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/09617affc994/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/09617affc994/figure-1.png)

*论文图 1。原论文 Figure 1：“The data construction overview.”。*

该图显示上排 3 个模块分别对应准确性、泛化与偏见，下排 3 个模块对应鲁棒性、公平性与毒性。准确性分支从 50 个场景节点出发，经过提示收集与提示标注，标注包括事件数 1 到 5 与无、并行、序列、复杂 4 种时序。泛化分支先划分 632 类本体并用大语言模型生成 30 个新类，再混合稀有与常见标签采样，最后由大语言模型写成连贯但不合常理的场景。偏见分支强调场景选择、中性化改写与人工复核 3 步，确保无性别线索。

鲁棒性分支从基础选择经 6 种扰动类型到变体生成，公平性分支从基础选择经属性替换到提示输出，毒性分支把仇恨、暴力自残、性、惊悚、违法 5 类分别走图像到音频改编与直接人工书写两路，每路 150 条。记住这个版式后，后续每一节都是其中一个框的展开。

### 每个维度用什么输入与公式算分？

准确性与泛化的客观侧共用两套工具。Audiobox-Aesthetic 的缩写是 AES，给出内容享受、内容有用性、生成复杂度与生成质量 4 个分量，CLAP 给出文本音频相似分。主观侧用 10 点李克特量表，请专家与普通听众分别打生产质量、生产复杂度、主观享受、有用性与文本对齐。论文的表 4 明确了这些指标的范围、粒度与越大越好方向，其中毒性等为例外需单独看定义。

**准确性 × 文本对齐：** 准确性负责判断生成音频是否反映提示的事件含义、数量与时序，文本对齐负责给出可操作的度量手段，二者搭配的原因是仅有主观好听不够，还需语义对应，组合后使准确性从抽象要求变为可用 CLAP 分数与对齐打分检验的具体任务。

**泛化 × 稀有事件：** 泛化负责刻画模型在偏离训练分布时的表现，稀有事件负责构造这种偏离的具体材料，二者搭配的原因是只有混入罕见或未见标签才能迫使模型组合陌生声音场景，组合后使泛化测试不再是换一批同分布 caption，而是可复述的分布外压力测试。

**鲁棒性 × 输入扰动：** 鲁棒性负责衡量输出在输入小改动下是否稳定，输入扰动负责制造语义不变但表层变化的测试用例，二者搭配的原因是真实用户输入常带大小写、同义、拼写与标点噪声，组合后使鲁棒性变为扰动前后分数比值的可计算量。

**公平性 × 偏见：** 公平性负责衡量不同人口组间质量分数的离散程度，偏见负责检测中性输入下是否出现性别等保护属性的系统性偏斜，二者搭配的原因是前者看质量是否一致，后者看内容是否偏向，组合后才能区分能力不均与关联偏斜两类责任问题。

**毒性 × 众包标注：** 毒性负责定义听觉上有攻击性、不适或社会不恰当的声音风险，众包标注负责在无现成音频毒性检测器时给出判定，二者搭配的原因是毒性高度依赖听感且无自动工具可用，组合后使毒性率变为多数投票后的系统级可比较指标。

效率用实时因子的英文名是 Real-Time Factor，缩写为 RTF，定义为生成时间除以音频时长，在单张 NVIDIA RTX 4090 上热身 5 步后平均 20 次得到。对分 2 阶段先生成梅尔频谱再经声码器的模型，同时报告梅尔阶段与端到端 RTF，对直接生成波形的模型只报告端到端。鲁棒性对每种扰动类型计算扰动后分数与原始分数比值的平均再乘以 100%，总体分是 6 种扰动平均。公平性计算不同子组间质量分数的成对相对差平均，值越小越公平。

偏见用平均绝对偏差的英文名是 Mean Absolute Deviation，缩写为 MAD，衡量生成性别分布偏离均匀的程度，并同时报告无可识别性别而被排除的比例。毒性在话语级由 2 人背对背标注，不一致则增补直到多数通过，系统级毒性率是有毒片段占比。

公平性公式中出现的求和下标需要从第二组开始与第一组配对，原文涉及的配对记号如下。

\[j=i+1\]

该符号的输入是子组序号，计算目标是枚举所有无序组对以便后续求成对相对差，原文未给出该记号之外的梯度或训练含义，这里只作评测聚合的计数理解，不引申为模型参数更新。

### 本研究训练了什么？没有训练时真实计算是什么？

本研究没有训练任何新的 TTA 生成模型，也没有报告冻结与更新哪些参数、梯度路径与重置时机，因此不能从模型名称推定实现细节，也不能把无训练等同于确定性求解。真实计算是基准构造、模型调用、自动打分与人工标注 4 类。

构造侧的动作是可复述的。准确性用 1500 条提示，其中 400 条来自 AudioCaps 的验证样本，1000 条由大语言模型按场景模板与 AudioSet 标签生成，100 条由专家手写覆盖复杂或罕见情形，每条带事件数与时序标签。泛化基于 AudioSet 本体划分常见与稀有，按至少含一个稀有或未见标签的约束采样 30 个单标签、120 个双标签、120 个三标签与 30 个四标签组合，共 300 条，再由大语言模型写成场景。鲁棒性从准确性集中抽 50 条基础提示，对每条施加 6 种表层变换，包括大写、近义替换、拼写错误、空格插入、改写与标点插入，保持语义不变。

偏见分析 AudioCaps 2.0 中涉及人发声动作的中性句，辅以性别句的中性化改写，共 300 条并人工复核。公平性按性别、年龄与语言系统替换主语，毒性把图像有害基准 I2P 的 150 条视觉提示转写为听觉并另写 150 条声音侧重的高毒性提示。

调用与标注侧同样是计算。10 个模型按各自官方配置推理生成音频，自动侧跑 AES 与 CLAP，人工侧组织专家与普通听众打分与毒性投票，主观标注总量为 118314 条。复现时应把重点放在提示抽样、扰动脚本、替换词表与标注指南的一致性上，而不是寻找某个训练超参数。

### 比较了谁？条件是否一致？指标方向是什么？

比较对象是 10 个有代表性的开源或可运行 TTA 系统，包括 AudioGen、AudioLDM、AudioLDM 2、Auffusion、MAGNeT、Make-An-Audio、Make-An-Audio 2、Stable Audio Open、Tango 与 Tango 2。论文表 2 交代了所属机构、许可、参数量、架构与训练数据来源，例如 AudioGen 为 1.5B 自回归，AudioLDM 系列与 Tango 系列多为 latent diffusion，Stable Audio Open 为 diffusion transformer，训练时长与数据规模各不相同，因此不能把分数差异简单归因于某一架构，需结合训练数据与效率一起看。

条件一致性方面，准确性与泛化共用同一套主客观协议，效率统一在单卡 RTX 4090 上测 RTF，鲁棒性统一用同一 50 条基础提示的扰动前后比值，公平性统一用同一批配对提示的质量离散度，偏见统一用同一 300 条中性提示的性别分布，毒性统一用同一 300 条高毒性提示的多数投票毒性率。指标方向上，AES 各分量、CLAP、各项主观分越大越好，RTF 越小越快，鲁棒分越接近 100% 越稳定，公平分越小越公平，MAD 越小越均衡，毒性率越小越安全。

资源状态是正文开源声明的唯一依据，本次收到的资源检查显示项目页与扩展版本均当前可用。项目页当前可用，地址为 <https://nku-hlt.github.io/tta-bench/> ，数据集当前可用，地址同样为该项目页，扩展版本当前可用，地址为 （预印本链接未在会议页展示） ，复现脚本当前可用，地址同样为扩展版本。初学者复现应先从项目页取提示集与协议，再按扩展版本补构造细节。

### 准确性主结果：谁在对齐与质量上领先？代价是什么？

本节要回答的比较问题是在同一 1500 条准确性提示下，10 个可运行模型在自动分与人工分上如何排序，公平条件是同一提示集与同一 AES、CLAP 与 10 点主观协议，指标方向是表中 CE、CU、PC、PQ、CLAP 与各项主观分越大越好。

| 系统 | 内容享受 CE | 内容有用 CU | 生成质量 PQ | CLAP | 文本对齐 MAli 众包/专家 |
| --- | --- | --- | --- | --- | --- |
| AudioGen | 2.89 | 4.54 | 5.33 | 0.39 | 5.08 / 5.40 |
| Tango 2 | 3.47 | 5.20 | 5.89 | 0.46 | 5.94 / 7.59 |

表后解释需要同时给出收益与代价。Tango 2 报告显示在自动分与人工分上整体最优，CLAP 与对齐分高于 AudioGen，专家侧对齐与质量也较高，支持其在语义准确与感知质量上领先的判断。代价是这种领先并不自动转化为鲁棒与安全，后文显示其在扰动下退化明显且毒性率最高。未胜出项方面，MAGNeT 在多数准确性标准上偏低，AudioGen 的复杂度与对齐偏弱，说明自回归与非自回归梅尔管线在该测试下并未占优。还需注意众包与专家分数存在系统性差异，不能把自动的 CLAP 直接当成人工对齐。

下图从数据源、事件数与关系类型 3 个视角拆解准确性，阅读时先看分组再看趋势，最后落到组合复杂度。

> **看图路径：** 1. 先看左侧按 Dataset、Template、Manual 分组的三色柱状对比；2. 再看右上 By Event Number 与 By Relation Type 两条平均曲线的走向；3. 最后看右下事件数与关系组合的紫色折线最低点落在 5-Cx 附近

[![原论文 Figure 2：We analyze model performance from three per- spectives: (1) performance across different data…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/09617affc994/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/09617affc994/figure-2.png)

*论文图 2。原论文 Figure 2：“We analyze model performance from three per- spectives: (1) performance across different data sources, (2) average performance with respect to the number of sound events, the…”。*

该图左侧按数据集原 caption、模板生成与人工手写分组，多数模型在原数据集提示上 MPQ 众包分最高，表明对同分布语言存在隐式优化。右上两小图显示平均分随事件数增加而下降，随关系从无到序列到并行再到复杂而下降。右下组合折线在 5 事件复杂关系处最低，支持论文的判断，即当前模型擅长熟悉输入，但在组合与语义泛化上随复杂度上升而退化。像素不能精确辨别的柱高不硬写数值，趋势以图注与正文的定性描述为准。

### 泛化压力下掉了多少？罕见组合是否公平地难倒大家？

本节要回答的比较问题是把提示从准确性中的同分布 caption 换成含稀有或未见标签的 300 条泛化提示后，质量与对齐各掉多少，公平条件是同一批模型、同一 AES、CLAP 与主观协议，仅切换提示分布，指标方向是分数越高越好、差值越小越稳。

论文报告 Tango 2 在泛化上仍保持较强，自动分与主观分相对靠前，AudioLDM 2 在客观侧也不错，而 AudioGen 在定量与感知上普遍偏弱。但关键反证是多数模型相对同分布都有明显下滑，质量最多掉约 1 分，对齐也有相近幅度，说明大规模训练与常见增强并未解决分布外组合。例外是 Stable Audio Open 的差距最小，保持了较多清晰度与语义保真，论文将其归因于声音语料的帮助，但这属于有限解释，仍待验证是否由数据覆盖或架构引起。

下图直接画出同分布与泛化提示的分数差，阅读时注意正负方向与两种颜色的分工。

> **看图路径：** 1. 先确认纵轴为 Difference、横轴为按字母序排列的 10 个系统；2. 再对比每个编号下蓝色 Quality Diff 与红色 Alignment Diff 的正负与高度；3. 重点观察第 8 个系统双柱大幅为负与其他系统多为正的反差

[![原论文 Figure 3：Performance differences between the accuracy- prompt (source = dataset) and generalization-prompt…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/09617affc994/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/09617affc994/figure-3.png)

*论文图 3。原论文 Figure 3：“Performance differences between the accuracy- prompt (source = dataset) and generalization-prompt sets, with the x-axis showing 10 systems in alphabetical order.”。*

该图纵轴为差值，横轴为按字母序的 10 个系统，蓝色为质量差，红色为对齐差。多数编号的柱为正，表示同分布高于泛化，其中第 1、6、7 组的上冲较高，说明这些系统在罕见提示下掉得更多。第 8 组双柱大幅为负是一个反例，表明该系统在泛化提示上反而高于所选的同分布子集，不能把总体趋势推广到每个系统。每组高低需结合表 6 的绝对分一起看，差值小不等于绝对强，绝对强也不等于无退化。

### 扰动、公平与安全的边界在哪里？

本节把鲁棒性、公平性、偏见与毒性放在一起，回答在语义不变的小改动与人口属性替换及有害请求下，模型的稳定与安全边界。公平条件是同一基础提示经规则或大语言模型扰动或属性替换后比较，指标方向是鲁棒分越近 100% 越好，公平分与 MAD 越小越好，毒性率越小越好。

鲁棒性上 Make-An-Audio 2 与 Tango 2 在 6 种扰动下退化较大，语义等价改写也会显著影响生成质量，而 AudioGen、AudioLDM 与 Auffusion 的鲁棒分更接近 1，输出更稳定。这构成一个取舍，即准确性领先的模型不一定稳定，复现时应同时报告扰动前后绝对分与比值，避免只看比值掩盖基线高低。

下图展示各模型的鲁棒总分与 6 种扰动的分项表现，阅读时先找折线再看柱群。

> **看图路径：** 1. 先找到横轴 9 个系统名与右侧 0.6 到 1.2 的纵轴刻度；2. 再看每组彩色柱表示六种扰动下的表现与蓝色折线表示的总体鲁棒分；3. 重点比较 MAGNeT 的高折线点与 Make-An-Audio 2 的低折线点的落差

[![原论文 Figure 5：Model’s robustness score and its performance under various perturbations.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/09617affc994/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/09617affc994/figure-5.png)

*论文图 5。原论文 Figure 5：“Model’s robustness score and its performance under various perturbations.”。*

该图横轴为 9 个系统名，右侧纵轴从 0.6 到 1.2，虚线在 1.0 处。每组彩色柱对应大写、同义、拼写、空格、改写与标点 6 种扰动，蓝色折线为总体鲁棒分。可见 MAGNeT 的折线点明显高于 1，Make-An-Audio 2 的折线点明显低于 1，Stable Audio 的折线点也在 1 之下，Tango 与 Tango 2 的折线点贴近但略低于 1。颜色细节不作过度解读，结论以折线与正文描述为准，即部分模型对表层噪声敏感，部署前需补输入规范化或提示鲁棒训练，但论文未测量延迟与成本，不能承诺这些补救无代价。

| 系统 | 性别公平 | 年龄公平 | 语言公平 | 偏见 MAD | 毒性总率 |
| --- | --- | --- | --- | --- | --- |
| AudioGen | 1.41 | 3.90 | 6.65 | 7.1 | 0.870 |
| Tango 2 | 10.32 | 4.38 | 17.14 | 8.7 | 0.950 |

表后解释需点名未胜出项与负结果。公平性上 AudioGen 在性别与年龄上最公平，Auffusion 在语言上最公平，而 AudioLDM 在性别上最不公平，Stable Audio Open 在年龄与语言上不公平最明显。偏见上 AudioLDM 与 Stable Audio Open 的排除率分别约 75% 与 40%，表明语音合成弱，大量输出无可识别性别，在剩余输出中 Stable Audio Open 的 MAD 最高，Tango 与 MAGNeT 则低排除且男女分布较均衡。毒性上 AudioLDM 总率最低，在性与暴力自残上更低，而 Tango 2 总率最高，惊悚与仇恨普遍偏高，性内容相对偏低。MAGNeT 等跨类稳定，AudioLDM 等波动大，反映内容过滤能力差异。这些都是论文直接报告，跨系统因果归因仍待验证。

### 要复现这张考卷，先做什么、用什么条件？

复现的第一步是取数与对齐协议。从当前可用的项目页获取 2999 条提示与评估说明，从当前可用的扩展版本补构造与标注细节，确认 7 个维度的输入划分与指标方向。不要从模型名称猜测采样率、声码器或文本编码器实现，缺项应明确记为未报告。

第二步是按原文条件跑调用。效率必须在单张 RTX 4090 上热身 5 步后平均 20 次，区分梅尔 RTF 与端到端 RTF。准确性与泛化需同时跑 AES 四分量与 CLAP，再组织 10 点量表的众包与专家打分，记录生产质量、复杂度、享受、有用性与对齐五项。鲁棒性固定 50 条基础提示与 6 种扰动脚本，公平性固定性别、年龄与语言的替换词表，偏见固定 300 条中性提示与商业性别识别接口的调用版本，毒性固定 300 条高毒性提示与背对背加多数投票流程。

第 3 步是核对聚合口径。鲁棒性是扰动与原始比值的平均乘 100%，公平性是子组间成对相对差平均，偏见同时看 MAD 与排除率，毒性看有毒占比。数值比较时注意百分点与相对百分比不同，不同指标差值不能混入同一模型列，自动分不能替代人工分。原文表头或算术若有冲突，应标注冲突而不自编划分来圆场。

### 何时值得用它？还需补哪项验证？

当你的研究声称模型更懂复杂提示、更能处理陌生声音或更适合真实部署时，值得用 TTA-Bench 做 1 次全面体检。它的价值不在给出一个总冠军，而在把好听、对得上、换说法还行、换场景还行、对不同人群一致、不偏向性别、有害请求不失控放在同一条件下检验。论文的最强证据是 Tango 2 在准确与泛化上的双优与 118314 条人工标注的规模，主要代价是其鲁棒退化与最高毒性率，以及高效模型如 Make-An-Audio 2 与 MAGNeT 在速度与稳定性上的不同取舍。

常见误解需要澄清。第一，CLAP 高不等于人工对齐好，两者量纲与敏感点不同。第二，泛化差值小不等于绝对能力强，需同时看绝对分。第三，无毒性检测器不代表无毒性，众包投票只是当前可行替代。第四，无训练不代表无计算，构造、调用与标注本身就是成本。

还需补的验证包括扰动脚本的语言覆盖、公平性替换词表的文化适配、偏见识别接口的误差率，以及毒性标注者间一致性与阈值敏感性。若要在生产环境选型，还应补测推理延迟、显存占用与输出采样率，因为论文的 RTF 只反映单卡条件下的相对效率，不承诺实际延迟改善。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 aaai-2026 论文汇总](/posts/conference-aaai-2026/)
