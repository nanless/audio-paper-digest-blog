---
title: "AVTrace: Diagnosing Audio-Visual Temporal Reasoning in Omni Models"
date: 2026-09-20
draft: false
tags: [音视频问答, 基准设计, 音视频, 基准测试, 模型评估]
categories: [论文速递]
description: "AVTrace 把音画时间能力拆成七类可复算的定位与排序任务，用固定测试集显示现有全模态模型语义描述尚可但时间定位与同步判断偏弱，而针对 Gemma4-E4B 的时间后训练能在部分指标上提升但伴随外部任务的涨跌。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.19991"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "能说出事件不等于能定住时间：AVTrace 如何拆解音画时间推理"
paper_digest_original_title: "AVTrace: Diagnosing Audio-Visual Temporal Reasoning in Omni Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2609.19991v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.19991v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.19991v1.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"research_focus","id":"research_focus.evaluation","label":"模型评估"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "AVTrace 把音画时间能力拆成七类可复算的定位与排序任务，用固定测试集显示现有全模态模型语义描述尚可但时间定位与同步判断偏弱，而针对 Gemma4-E4B 的时间后训练能在部分指标上提升但伴随外部任务的涨跌。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Longyin Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Parth Sakhare Mahendra"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Chengwei Wei"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ning Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Lim Ming Chong"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Sirui He"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Ai Ti Aw"}]
paper_digest_abstract_sha256: "d7260adc524941eb46a68bd119609b77477a9b7ce1f5014ccc82dc67a6fce442"
paper_digest_sidecars: {"citation.bib":{"sha256":"afe951644b9f04d9eba72e2dcef7f286a7d77110b1f3a08a3d7ff397ccc18f4f","url":"/audio-paper-digest-blog/data/papers/2026-09-20/2609-19991/citation.bib"},"citation.json":{"sha256":"09f929d823e1defde74c38f4a3724a4eb807b9a85875f01809190dae170ce05b","url":"/audio-paper-digest-blog/data/papers/2026-09-20/2609-19991/citation.json"},"citation.ris":{"sha256":"37871b797d55ddb050252ca219956f76d58523810f4133df4fb96752e7ad3ca1","url":"/audio-paper-digest-blog/data/papers/2026-09-20/2609-19991/citation.ris"},"rethink-context.json":{"sha256":"eb8a5bbf3c3610e26d75648336d0386cd565afd595a1f42da37844afdad1e301","url":"/audio-paper-digest-blog/data/papers/2026-09-20/2609-19991/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "c44db196f528aeab037794af4670175ec9936e242b5c426a64c15c8110637c0f"
paper_digest_api_reader_plan_sha256: "3dbf2b875808a7a50a19690e98ec7d67c52e39d9e277afcaf76b7307e571270b"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "288530cbaae2b589c0829b9387f0bb782ea4ba1d7047c7ecd41a265d332a175c"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "41c99a6f63e27fba2c0cbbf2379dfc58e658ffa752d4dbc679213ff13b64e6eb"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e2f1f0b167c7be51a4483c9843b54276cfb9d945d97a8ad7e1595ccdeaba66c4"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "1302a5eac857ba352bf9a29a76461fa334c5f28bb6bdacc39fa81c649a644ca3"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 能说出事件不等于能定住时间：AVTrace 如何拆解音画时间推理

> 英文题目：*[AVTrace: Diagnosing Audio-Visual Temporal Reasoning in Omni Models](https://arxiv.org/abs/2609.19991v1)*

> 标签：#音视频问答 | #基准设计 | #音视频 | #基准测试 | #模型评估
>
> 评分：**7.0/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.3/1.5


## 👥 作者与机构

- Longyin Zhang：机构信息未在 arXiv HTML 中可靠披露
- Parth Sakhare Mahendra：机构信息未在 arXiv HTML 中可靠披露
- Chengwei Wei：机构信息未在 arXiv HTML 中可靠披露
- Ning Zhang：机构信息未在 arXiv HTML 中可靠披露
- Lim Ming Chong：机构信息未在 arXiv HTML 中可靠披露
- Sirui He：机构信息未在 arXiv HTML 中可靠披露
- Ai Ti Aw：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

该基准面向全模态模型（Omni Model）的音视频时间推理，输入为音视频片段与任务问题，输出涵盖时刻点、起止区间、同步二分类、下一步动作、跨模态区间加描述、有序步骤链及锚点目标加答案。构建链先由公共视频源导出候选时间信号，再经 Qwen3-Omni-30B 做开端检测、跨模态定位与银答案构建并由 Qwen3-235B 生成问题与校验，最后施加确定性结构门控并按上游数据集加原始视频标识分组切分。评测链先经严格 JSON 解析诊断格式，再由无参考归一器抽取结构化答案并以时间交并比（temporal Intersection over Union， tIoU）与文本重叠等原语确定性计分。与已有音视频问答相比，该设计强制输出时间坐标与有序结构，使语义重叠无法冒充定位成功。在7000条类别均衡测试集上，仅有两个后训练变体在同步验证中以0.576和0.571超过0.556的多数类基线，链解析精确率仍近乎为零。结论仅刻画固定输入配置下的系统行为，不支持内部机制推断与跨语言文化外推。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/YapengTian/AVVP-ECCV20> — 链接可访问（HTTP 200）

- 第三方资源：<https://unav100.github.io/> — 链接可访问（HTTP 200）

- 第三方资源：<https://www.nscc.sg> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？为什么会说话不等于会卡点？

本文的输入是论文原文与官方原图像素，目标是让刚进入语音音乐音频方向的研究生能复述 AVTrace 的构造评估与结论，必须保留的信息包括 7 类任务定义、数据划分数量、输入接口差异、评分规则、主结果数值方向与银标准限制，输出是 1 篇可核对的技术解读。学习上先建立一个直觉：全模态模型能描述视频里有吉他声和有人切菜，不等于它能说出声音首次出现的秒数、事件起止区间、音画是否对齐、下一步动作是什么。

论文把这种差距称为内容识别不足以代理时间绑定、顺序保持与跨模态对齐。举一个教学例子：同样回答切菜，描述正确只要求词对上，定位正确还要求时间区间与参考区间高度重叠，例子不附带论文外的数值。

**时间定位 × 语义描述：** 时间定位负责把证据绑定到物理时间轴上的起点终点，语义描述负责说出画面和声音里发生了什么，二者搭配的理由是仅有描述正确不能证明模型知道何时发生，AVTrace 用联合分数同时考核重叠度和文本重叠，新增作用是暴露描述好但定不准的分离现象。

沿一个样本走一遍有助于固定指代：输入是一段带音频的视频与 1 个任务问题，表示是模型对视觉帧与音频波形的联合编码，组件是按任务输出时间戳或区间或是否同步的判断，目标是与冻结银参考在容差或重叠度下一致，输出是归一化后的结构化答案再进入确定性评分。前置概念是银标准，即用上游标注加模型辅助加确定性校验得到的非人工全检参考，它先于后文一切胜负判断，因为所有分数都以它为分母。

### 同输入同目标的先前路线有何不同？

在时间诊断路线上，TempCompass 通过构造静态内容相同但时间属性冲突的视频来防止模型依赖单帧或语言先验，VITATECS 用仅时间方面不同的反事实描述检验时间概念，Perception Test 覆盖更广的感知物理语义能力。AVTrace 与它们的同输入部分是视频语言理解，同目标部分是时间感知，但不同在于要求把音频与视觉绑定到同一物理时间轴并输出显式时间。

在音画评估路线上，Daily-Omni 关注跨模态时间对齐问答，MAVERIX 与 WorldSense 做音画综合问答，HAVE-Bench 做层级式能力组织，AVHBench 诊断跨模态幻觉，这些工作多用选择或描述式问答而非显式时间戳区间与有序步骤输出。在时间接地路线上，AVE 与 OV-AVEBench 做短片段音画事件定位，LongVALE 做长视频边界与关系描述，R-AVST 与 ST-OmniQA 做细粒度时空推理，FAVE 做细粒度音画时间感知，AVTrace 的区别在范围：把起点定位、区间定位、同步验证、下步预测、跨模态定位、链解析与事件条件理解七件事放在同一套划分与评分下比较。

### 七类任务各要模型回答什么？

要复述方法先固定 7 类任务的输出形态。第一类最小区间时间定位输出一个时间戳，第二类事件区间定位输出一个或多个起止区间，第三类音画同步验证输出是否同步，第 4 类下步识别输出下一个动作的文本，第五类条件跨模态定位输出区间加描述，第六类时间链解析输出有序步骤序列，第 7 类事件条件定位与理解输出锚区间目标区间与答案文本。下表是原文的任务划分，是后文一切指标的前提。

为回答比较问题先说明公平条件与指标方向：7 类任务输出形态不同因此指标不同，方向上除平均绝对误差与编辑距离越小越好外其余越大越好，跨类数值不可直接比大小。

| Cat. | Capability | Output |
| --- | --- | --- |
| Cat1 | Minimal-span temporal grounding | Timestamp |
| Cat2 | Event-span temporal grounding | Start/end span(s) |
| Cat3 | A/V synchronization verification | Yes/no |
| Cat4 | Next-step identification | Next action |
| Cat5 | Conditional cross-modal localization | Span + description |
| Cat6 | Temporal chain parsing | Ordered steps |
| Cat7 | Event-conditioned temporal grounding and comprehension | Anchor, target, answer |

该表确立了分解式诊断的口径：不追求单一时间推理总分，而是区分能说、能定、能排序、能跨模态对齐 4 种行为。记住第一类看点精度，第二类看区间重叠，第三类看二分类准确率，第 4 类看文本重叠，第五类与第 7 类看时间与文本的联合，第六类看有序恢复，后文结果都按此口径展开。

### 基准全景：数据从哪来？如何切分与隔离？

AVTrace 可用池共 44614 条银标准音视频样本，覆盖 7 类任务。构造总体是源到目标转换：把公开源数据集的上游监督当作任务相关信号而非原样拷贝，再按类别做直接时间监督、弱锚、合成标签或模型辅助参考。Qwen3-Omni-30B 负责音画接地与银答案构造，文本侧 Qwen3-235B 负责问题生成与有效性检查，确定性门控负责结构时间与模式校验，人工只做开发循环中的抽检与管线修订，不做全量逐条标注。18 轮版本化迭代中每轮每类抽 32 条覆盖上游来源检查有效性与错误类型，再重建受影响类别。

**同步验证 × 失同步渲染：** 同步验证负责判断音频与视频是否对齐，失同步渲染负责用全局偏移局部偏移局部替换和跨拼接 4 种确定性操作制造反例，二者搭配的理由是只有正例无法检验判别力，组合后形成二分类诊断，新增作用是可控地测试细粒度对齐敏感性。

划分上训练集 34114 条，开发集 3500 条每类 500 条，测试集 7000 条每类 1000 条。关键隔离动作是按上游数据集加原始视频标识分组，把同一源视频的样本固定分到同一划分，避免同视频泄漏。第三类测试集中同步 444 条失同步 556 条，多数标签基线为 0.556，解读同步准确率时必须以它为参照。下表给出每类数量与发布片段长度中位数与 95 分位及结构，是复现采样与时长分层的前提。

为回答数据规模与时长是否可比，先说明统计口径：数量为可用池记录数，时长为发布片段的中位数与 95 分位，结构列说明单区间多区间与链长等形态，方向上数量越大覆盖越广但难度仍由任务决定。

| Cat. | NN | Dur. (s) | Structure |
| --- | --- | --- | --- |
| Cat1 | 6,129 | 28.3 / 195.7 | One onset timestamp. |
| Cat2 | 3,720 | 110.6 / 230.1 | 3,423 single-span and 297 multi-span records. |
| Cat3 | 6,638 | 50.0 / 550.7 | 3,319 synchronized and 3,319 desynchronized records across four rendering mechanisms. |
| Cat4 | 9,992 | 20.6 / 100.0 | Every record has three observed steps and one target step. |
| Cat5 | 6,943 | 23.2 / 118.3 | Audio-to-visual description: 4,210; visual-to-audio description: 2,733. |
| Cat6 | 3,614 | 68.2 / 205.8 | Chain length: median 3 steps, P95 14 steps. |
| Cat7 | 7,578 | 64.8 / 459.6 | Query relation: after 4,611; before 2,964; during 3 (residual). |

该表的主要信息是类别不均衡与时长差异很大，例如第 4 类近 10000 条而第六类仅三千余条，第二类中位时长超 100 秒而第 4 类仅 20 秒左右，因此后文按时长分层与按链长分析都有必要。代价是这种异构来源带来银参考质量不一，论文明确不估计人工一致率与同族构造偏置。

### 评分组件：时间与文本如何算分？

评估分两步。第一步是模式解析诊断分支：从原始回答中提取首个良构 JSON 值，允许周围散文与代码块围栏，按类别校验时间戳、区间、是否字符串、动作字段、起止加描述、步骤列表、锚目标加答案等模式，报告解析有效率。第二步是参照盲归一化：Qwen3.5-27B 只见问题视频时长与原始回答而不见参考答案，用类别提示抽出意图结构化答案并返回有效或无效状态，再做确定性任务评分。论文提醒该归一化是基于模型的回答解析而非纯格式清洗，其抽取决定未经人工独立验证。

**参照盲归一化 × 确定性评分：** 参照盲归一化负责在不见参考答案时从自由文本中抽出结构化预测，确定性评分负责用固定阈值和匹配规则算分，二者分工是前者降低格式影响后者保证可复现，搭配理由是避免因输出格式不同而误判能力，组合意义是把模型解析与任务度量分开报告。

时间侧核心是容差准确率与平均绝对误差、时间交并比、基于阈值的区间 F1 与匹配平均重叠。第一类中容差准确率对全部样本平均，无效记错，平均绝对误差只对有效数值时间戳平均，有效输出率并列报告以暴露分母差异。第二类与第五类第 7 类都依赖区间重叠，文本侧用归一化小写分词后的词 F1 与 ROUGE-L 及精确匹配，联合分数把时间重叠与文本质量相乘开方或相乘，第六类用命中指示加最长公共子序列动态规划得到有序匹配数。先看区间重叠的符号与输入：参考区间与预测区间各有起止，目标是重叠长度除以并集长度，零长区间的退化情形有专门定义。

\[\operatorname{tIoU}(a,b)=\frac{\max\left(0,\,\min(e_{a},e_{b})-\max(s_{a},s_{b})\right)}{\max(e_{a},e_{b})-\min(s_{a},s_{b})}.\]

再看区间 F1 的符号与目标：分子是阈值下最大 1 对一匹配数，分母是参考与预测区间数之和，目标是同时惩罚漏检与误检，匹配用确定性增广路径按重叠降序实现。

\[F_{1}@\tau=\frac{2m_{\tau}}{|R|+|P|},\]

最后看链解析命中的定义：当且仅当区间重叠不低于 0.5 且词 F1 不低于 0.5 才算命中，预测步骤按模型输出顺序参与有序与无序两种最大匹配，有序要求双序列下标严格递增。

\[\mathrm{hit}(i,j)=\mathbb{1}\left[\operatorname{tIoU}(a_{i},b_{j})\geq 0.5\;\wedge\;F_{\mathrm{tok}}(u_{i},v_{j})\geq 0.5\right],\]

**有序匹配 × 无序匹配：** 有序匹配要求命中步骤在参考序列和预测序列中都严格递增，无序匹配只要求 1 对一命中而不要求顺序，二者搭配的理由是区分内容找回与顺序保持两种失败，组合意义在于当命中数很少时两者数值相等，从而需要用完全链准确率补充判断长链恢复。

该组件设计的教学要点是无效预测在除平均绝对误差外的所有性能指标中记零，因此有效率与分数要一起看，且跨阈值比较时阈值越严分数越低是构造使然。

### 构造与后训练：银参考怎么做？适配参数如何更新？

该节承担构造流程与参数高效后训练的方法职责。构造上第一类把事件窗转为起点问题，粗标签先经模型精化为秒级时间戳，靠近开头的时间戳前接无事件中性上下文以避免泄漏。第二类保留原边界不改写，只做音画消歧与存在性筛选，丢弃无剩余区间的记录。第三类正例来自 10 个公开源的原始同步媒体，反例用 4 种渲染生成并要求偏移不小于 500 毫秒，含可听语音的视频弃用偏移类反例以保守处理。

第 4 类把 3 个连续观察步骤加紧随目标动作渲染为任务片段，推理时改用 withholding 前缀截断在目标开始前以检验预期而非复述。第五类要求锚事件在片段中恰出现 1 次并拒绝过宽区间与跨模态不匹配答案。第六类要求至少两段正时长且起点严格递增，模型可修正单步标签与边界但不能增删重排。第 7 类要求目标在锚前后 3 秒内或按锚长构造 3 至 10 秒邻窗并做时间几何一致性检查。

**金标准目标 × 匹配目标：** 金标准目标指直接使用银参考时间轴的规范训练目标，匹配目标指用参考条件修正基模型输出后再回退到规范目标的训练目标，二者分工是对比纯规范监督与贴近模型分布的修正监督，搭配理由是检验后训练收益是否依赖目标构造方式，组合意义是提供两种可复现的领域适配参照点。

后训练以 Gemma4-E4B 指令版为起点，加秩 64 的 LoRA 适配器并接到全部解码器注意力与前馈投影及视觉音频模态投影，冻结视觉音频编码塔与输出头等，仅更新约 140,000,000 参数。训练记录按类别裁剪与重基，音频限前 30 秒，使用指令聊天模板与 30 采样帧，AdamW 学习率 2 乘 10 的负 5 次方线性衰减到零无预热，有效批量 256 约 4 轮共 536 优化步，种子 42，半精度加梯度检查点。两种目标变体分别记为 Gold 与 Matched，前者用规范银参考时间轴，后者用参考条件修正基模型输出并在修正失败时回退到规范目标。论文未报告梯度路径之外的实现细节，不从模型名推定未写明的编码器行为。

### 评测条件：模型看到的媒体一样吗？

被测系统为 Qwen3-Omni-30B、Qwen2.5-Omni-3B、MiniCPM-o-4.5、Gemma4-E4B-it 与 InteractiveOmni-4B，均用各自支持的输入接口与贪心解码 512 新词预算。关键不可比点必须先讲清：Qwen3-Omni-30B 与 MiniCPM-o-4.5 接收完整片段，Qwen2.5-Omni-3B 在全片段上均匀采样至多 300 帧且音频特征窗 300 秒，Gemma4-E4B-it 与 InteractiveOmni-4B 只接收前 30 秒音视频，超出窗口的参考对它们不可见。因此跨模型比较刻画的是端到端系统在各自配置下的行为，而非相同媒体预算下的架构对比。第 4 类所有系统接收的是截断目标动作的缓存前缀，其他类别接收完整发布片段。

开发集扰动只用 3500 条开发集并与同系统完整输入基线配对，用 10000 次重采样的配对自助法报告主指标均值差的 95% 区间。扰动包括仅音频、仅视觉、仅文本、0.125 帧率降采样、固定种子打乱帧重编码、2 阶段先摘要后作答。外部通用评估用 MMMU-Pro 标准划分 1730 条、MATH-Vision 测试集可用 2942 条、OmniDocBench 共 1651 页，另加本地音频任务子集各取前 2000 条或指令跟随全部 1679 条，同时报告任务指标与教师强制困惑度，后者是掩掉提示只计后缀交叉熵的解析无关似然探针。

### 主结果：哪些时间任务最难？后训练改变了什么？

测试集每类 1000 条，经参照盲归一化与确定性评分后得到 headline 结果。总体上现成系统中 Qwen3-Omni-30B 在多数指标上最高，InteractiveOmni-4B 在同步准确率上居现成系统之首，两个后训练 Gemma4-E4B 时间变体在第一类第三类第 4 类第 7 类的 headline 指标上超过所有现成系统。第二类上 Qwen3-Omni-30B 仍明显领先，第五类时间重叠与联合分数由 Qwen3-Omni-30B 领先而描述文本重叠由 Gold 领先，第六类有序与无序分数对所有模型完全相等且完全链准确率接近零，第 7 类联合分数接近零。

为回答可部署策略相对基线的真实收益，先固定比较条件：同为测试集同为归一化后确定性评分，指标方向为准确率与 F1 越大越好，基线包括最强现成系统与后训练前基模型，策略为 Gold 与 Matched 两种实际可运行的后训练变体。

| 条件 | Cat1 Acc@1s | Cat3 Accuracy | Cat4 Token F1 | Cat7 Joint |
| --- | --- | --- | --- | --- |
| Qwen3-Omni-30B 现成最强参照 | 0.426 | 0.435 | 0.486 | 0.020 |
| Gemma4-E4B-it 后训练前基线 | 0.273 | 0.469 | 0.381 | 0.004 |
| Temporal Gold 后训练策略 | 0.440 | 0.576 | 0.539 | 0.076 |
| Temporal Matched 后训练策略 | 0.450 | 0.571 | 0.536 | 0.077 |

该表显示后训练相对基模型在 4 类 headline 上一致提升，且在同步上刚超过 0.556 的多数标签基线，但第二类区间与第六类链恢复仍远未解决，未胜出项是 Qwen3-Omni-30B 在第二类各阈值与第五类联合分数上仍领先。反例是外部图像任务上 MMMU-Pro 准确率从 0.332 降到 0.317 至 0.329，OmniDocBench 编辑距离从 0.682 升到 0.702 至 0.704，翻译 BLEU 在 Matched 上从 9.69 降到 7.12，听力问答准确率下降 1.4 至 2.3 个百分点，而教师强制困惑度在所有评测任务上下降，说明似然改善不必然转化为生成指标改善。

为补充成分层面的证据，先说明左中右三面板的比较问题：同步肯定率是否可靠、链分数是否反映排序、第 7 类文本与定位是否分离，公平条件同为测试集且无效预测记零。

> **看图路径：** 1. 先看左图各系统肯定回答率与参考肯定率虚线的相对位置；2. 再看中图有序与无序柱是否等高以及完全链绿柱是否接近零；3. 最后看右图回答文本分数与定位分数是否分离

[![原论文 Figure 1：Test component analysis (n=1,000 per category).](https://arxiv.org/html/2609.19991v1/test_temporal_components.svg)](https://arxiv.org/html/2609.19991v1/test_temporal_components.svg)

*论文图 1。原论文 Figure 1:：“Test component analysis (n=1,000 per category).”。*

图中可见同步肯定率各系统差异大且 Gold 的 0.364 低于参考肯定率 0.444，不能据此认定可靠判别；链解析有序与无序等高是因为 97% 至 99.9% 记录至多一个内容命中，此时排序无从体现；第 7 类 Gold 答案文本 F1 达 0.434 但锚与目标重叠仅 0.183 与 0.197，证实文本好不等于定得准。

### 扰动与采样：分数对证据有多敏感？

开发集 500 条每类的配对扰动显示任务依赖的敏感性。Qwen3-Omni-30B 在移除输入流、降低视觉采样或打乱帧顺序后，第一类第二类第五类等多类分数下降，其中仅文本条件下降最大。2 阶段提示呈任务依赖的权衡：第一类提升 0.068 且 95% 区间为 0.034 到 0.102，第二类第 4 类第六类分别下降 0.039、0.042 与 0.035，第五类第 7 类无明确变化。论文把第一类增益的一种可能解释记为首遍描述提供了事件顺序支架，但明确留待未来验证。

为回答证据移除是否均匀影响各任务，先说明该图条件：横轴为相对同系统完整输入的配对变化，负值表示扰动后更低，每点用同类 500 条配对记录估计。

> **看图路径：** 1. 先沿每列主指标比较仅文本条件相对完整输入的左移幅度；2. 再比较低帧率与打乱帧在第一类第二类第五类上的方向；3. 最后看两阶段提示在第一类上右移而在其他类上左移的分化

[![原论文 Figure 2：Paired development-set effects of evidence removal, visual temporal perturbation, and two-stage…](https://arxiv.org/html/2609.19991v1/qwen_probe_effects_all.svg)](https://arxiv.org/html/2609.19991v1/qwen_probe_effects_all.svg)

*论文图 2。原论文 Figure 2:：“Paired development-set effects of evidence removal, visual temporal perturbation, and two-stage prompting for Qwen3-Omni-30B across all seven diagnostic categories.”。*

该图的主要收益是证明若干分数对证据可用性与顺序敏感，代价是打乱帧条件混入重采样重编码而非纯顺序对照，且扰动不能分离证据使用错误与评估管线效应，未胜出项是第三类在这些扰动下变化接近零，说明同步分数的失败另有原因。

为回答语义好是否等于定得准，先说明该散点条件：横轴为时间交并比纵轴为文本分数，0.5 参考线划分象限，颜色区分音频到视觉与视觉到音频两种构造子型。

> **看图路径：** 1. 先确认横轴为时间交并比纵轴为文本分数及 0.5 参考线；2. 再数左上象限高文本低时间点的密度与标注数量；3. 最后对比不同模型面板该象限计数的大小关系

[![原论文 Figure 3：Development-set relationship between semantic description and temporal localization for Cat5.](https://arxiv.org/html/2609.19991v1/cat5_tiou_vs_textf1.svg)](https://arxiv.org/html/2609.19991v1/cat5_tiou_vs_textf1.svg)

*论文图 3。原论文 Figure 3:：“Development-set relationship between semantic description and temporal localization for Cat5.”。*

该图显示 Gold 面板有 169 条文本分数不低于 0.5 但时间交并比低于 0.5，为所展示模型中最多，直接支持联合评估的必要性，Qwen3-Omni-30B 为 108 条，MiniCPM-o-4.5 为 83 条，说明分离现象跨系统存在。

为回答容差放宽是否掩盖误差，先说明该曲线条件：只统计有效时间戳，主分数仍为 1 秒容差准确率，曲线随容差单调非减是构造使然。

> **看图路径：** 1. 先看横轴容差从 0 秒放宽到 10 秒时各曲线的单调上升；2. 再比较 1 秒处与 10 秒处模型间差距是否收窄；3. 最后确认该图只统计有效时间戳而不含无效输出

[![原论文 Figure 4：Development-set Cat1 accuracy among valid timestamp predictions as the permitted absolute error…](https://arxiv.org/html/2609.19991v1/cat1_threshold.svg)](https://arxiv.org/html/2609.19991v1/cat1_threshold.svg)

*论文图 4。原论文 Figure 4:：“Development-set Cat1 accuracy among valid timestamp predictions as the permitted absolute error increases.”。*

图中 Gold 在 1 秒内最高而 Qwen3-Omni-30B 从 1.5 秒起反超，MiniCPM-o-4.5 到 10 秒时追回大部分差距，宽容差会 conceal 亚秒与 1 秒级的定位误差，因此复现时必须同时报告 0.5 秒与 1 秒两档。

### 视觉采样率：帧越密时间越准吗？

为回答采样密度是否单调改善，先说明比较问题与公平条件：固定 3500 条开发集与各自模型块内比较，每格为该类主指标，帧率从 0.125 到 2.0，方向为越大越好，重点看同模型不同帧率而非跨模型绝对值。

| Model | FPS | Cat1 Acc@1s | Cat2 F1@tIoU.5 | Cat3 Accuracy | Cat4 Token F1 | Cat5 Joint | Cat6 Ordered StepF1 | Cat7 Anchor tIoU |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gemma4-E4B-it | 0.125 | 0.084 | 0.019 | 0.438 | 0.412 | 0.109 | 0.006 | 0.098 |
| Gemma4-E4B-it | 0.25 | 0.098 | 0.023 | 0.422 | 0.393 | 0.117 | 0.004 | 0.055 |
| Gemma4-E4B-it | 0.5 | 0.200 | 0.020 | 0.430 | 0.385 | 0.113 | 0.002 | 0.041 |
| Gemma4-E4B-it | 1.0 | 0.258 | 0.020 | 0.432 | 0.389 | 0.123 | 0.001 | 0.035 |
| Gemma4-E4B-it | 2.0 | 0.264 | 0.027 | 0.442 | 0.393 | 0.146 | 0.002 | 0.048 |
| Temporal (Gold) | 0.125 | 0.208 | 0.049 | 0.616 | 0.513 | 0.223 | 0.047 | 0.139 |
| Temporal (Gold) | 0.25 | 0.252 | 0.061 | 0.574 | 0.530 | 0.267 | 0.034 | 0.143 |
| Temporal (Gold) | 0.5 | 0.394 | 0.074 | 0.586 | 0.511 | 0.287 | 0.051 | 0.180 |
| Temporal (Gold) | 1.0 | 0.468 | 0.091 | 0.574 | 0.518 | 0.309 | 0.049 | 0.175 |
| Temporal (Gold) | 2.0 | 0.472 | 0.091 | 0.576 | 0.517 | 0.323 | 0.036 | 0.184 |

该表显示非单调：基模型第一类第三类第五类在 2.0 帧率最高但第 7 类锚重叠在最低帧率最高，第二类第六类在所有 tested 帧率下都低；Gold 第一类第五类第 7 类在 2.0 最高且第二类在 1.0 与 2.0 并列，但第三类在 0.125 最高，第 4 类在 0.25 最高，第六类在 0.5 最高。因此更密采样不保证跨任务改善，复现时不能只测默认 1.0 帧率，未评测边界是高于 2.0 的更密采样与不同编码器下的表现。

### 银标准与接口差异带来哪些限制？

第一是参考质量限制。AVTrace 是银标准而非人工全检金数据，多个类别含模型辅助标注或描述，发布前确定性门控只保证结构与媒体有效性，不独立验证每条语义正确性，也不估计同族模型偏置。由于 Qwen3-Omni-30B 参与第一类第二类第五类至第 7 类及第 4 类有限槽位填充的参考构造，它在第二类第五类第六类上领先现成系统的结果既不能确立也不能排除同族构造偏置，只能在冻结银参考下解读，所有系统共享同一参考是公平的一面也是无法度量偏置的一面。

第二是输入可比性限制。不同系统的媒体预算采样策略与模态表示不同，完全固定这些配置往往不可行，结果刻画的是端到端输入配置而非等算力架构对比，这是跨模型公平比较的核心障碍。第三是语言与文化覆盖限制。当前版本未系统覆盖东南亚语言文化与媒体，后续计划按 SEA-Omni 路线构造支持中文新加坡英语马来语泰米尔语的测试集并做更严格人工评估。第四是归一化与分层限制。

参照盲归一化的抽取决定未经人工验证，时长分层样本极不均衡尤其第二类，因此最长时长的下降可能混入来源构成与任务难度，不能解读为纯时长因果效应。

### 复现先做什么？需要哪些来源与配置？

复现先固定划分与接口。划分上训练 34114 条开发 3500 条测试 7000 条，按数据集加原始视频标识分组隔离，测试只做最终比较，扰动设计只用开发集。来源上保留上游归属但不重分发源媒体，多源需按各自许可独立获取，其中 AVVP 代码当前可用而 UnAV-100 官方页面当前可用，国家超算中心链接本次未能确认可达之外的表述应按资源状态写作：前两者可写当前可用，超算链接在证据中仅为致谢网址不作为数据可用性依据。

接口上按附录逐系统配置帧率与音频：Qwen3-Omni-30B 以 1 帧率 4 至 768 帧加原生音频覆盖全片段，Gemma4-E4B-it 以 1 帧率至多 30 帧加 16 千赫单声道音频只覆盖前 30 秒，第 4 类改用目标 withholding 前缀。评分上先跑模式解析分支报告有效率，再跑参照盲归一化加确定性评分，无效在除平均绝对误差外记零，平均绝对误差只对有效时间戳平均。超参数上后训练用秩 64 透明度 128 丢弃 0.1 的 LoRA、学习率 2 乘 10 的负 5 次方线性衰减无预热、有效批量 256、约 536 步、种子 42。后训练音频限前 30 秒与 30 采样帧是必须保留的信息条件，否则跨任务对比会失真。

下表是来源归属表，用于核对每类转换用了哪些上游。

为回答构造可追溯性，先说明该表用途：类别列为任务转换器使用的来源，不意味每条源记录都出现在每个划分，上游获取与许可仍以原始发布为准。

| Source | Role in AVTrace | Release and access note |
| --- | --- | --- |
| Perception Test [Pătrăucean et al., 2023] | Cat1, Cat3–5, Cat7; temporal action/sound annotations and video QA | Official dataset release; CC-BY data and Apache-2.0 code. |
| COIN [Tang et al., 2019] | Cat2–4, Cat6–7; instructional action segments and chains | Official annotations; source videos are YouTube-hosted. |
| AVE [Tian et al., 2018] | Cat1–3, Cat5, Cat7; audio-visual events and temporal segments | Official AVE release; source-video availability may vary. |
| LLP/AVVP [Tian et al., 2020] | Cat2–3, Cat5, Cat7; weak and dense audio-visual event labels | Official AVVP release; code at https://github.com/YapengTian/AVVP-ECCV20; media access follows the upstream release. |
| OV-AVEBench [Zhou et al., 2025a] | Cat1, Cat3, Cat5, Cat7; open-vocabulary audio-visual event annotations | The upstream work calls the task OV-AVEL and the dataset OV-AVEBench. |
| R-AVST [Zhu et al., 2026] | Cat3, Cat5, Cat7; fine-grained audio-visual spatiotemporal annotations | R-AVST annotations reference videos distributed through the official UnAV-100 release (https://unav100.github.io/). |
| UnAV-100 [Geng et al., 2023] | Cat3; audio-visual event clips | Official release; source-video availability may vary. |
| MUSIC-AVQA [Li et al., 2022] | Cat3; dynamic audio-visual QA | Official release; versioned upstream annotations are retained locally. |
| WASD [Roxo et al., 2025] | Cat3; active-speaker video segments | Official dataset release; use is subject to upstream terms. |
| AVSBench [Zhou et al., 2022] | Cat3; multi-source audio-visual clips | Official release for audio-visual segmentation research. |
| EPIC-KITCHENS-100 [Damen et al., 2022] | Cat4, Cat6, Cat7; egocentric action segments and chains | Official dataset release; access is subject to upstream terms. |
| MAVERIX [Xie et al., 2026] | Cat7; source video-QA annotations | Official benchmark release; access may require registration. |

该表的主要用途是定位失败来源，例如同步正例多源异构而失同步为渲染标签，复现时应先检查偏移不小于 500 毫秒与是否含语音的保守处理是否实现，代价是部分来源视频可用性随时间变化，需记录实际可下载版本。

### 何时值得尝试？还需补哪项验证？

当你的任务需要把事件绑定到秒级时间、保持多步顺序或判断音画对齐时，值得用 AVTrace 做诊断而非只看视频问答总分。具体做法是先在开发集上跑完整输入基线，再做仅文本、降采样与打乱帧三项最小扰动，若第一类第二类第五类大幅下降而第三类不动，则说明系统依赖视觉时间证据但同步模块另有短板。

若要做时间后训练，可从 Gold 规范目标起步并保留 Matched 作为对照，同时监控 MMMU-Pro、MATH-Vision、OmniDocBench 与音频子任务的任务指标与教师强制困惑度，因为本文显示困惑度下降不保证生成分数上升。还需补的验证是人工核验的金子集以估计银参考正确率与同族偏置，对失同步 4 种子类型的分层报告以定位同步失败来源，以及在匹配媒体预算下的对照以分离接口差异与架构差异。总体趋势不等于每组每步都成立，长链与最长时长层的结论尤其需要更大样本复核。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2609.19991v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-20/)
