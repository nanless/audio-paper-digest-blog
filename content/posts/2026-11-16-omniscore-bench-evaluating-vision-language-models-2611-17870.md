---
title: "OmniScore-Bench: Evaluating Vision-Language Models on Musical Score Reading"
date: 2026-11-16
draft: false
tags: [光学乐谱识别, 基准设计, 文档视觉问答与定位, 基准测试]
categories: [论文速递]
description: "针对视觉语言模型读谱时定位、关联与乐理推断混在一起难以诊断的问题，论文用 3,000 道分范围、分契约的题目把六类操作分开测量，发现 excerpt 与单页转录领先者在多页上被反超，而去图与格式对照说明视觉依赖与内容错误需要分开判断。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.17870"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "OmniScore-Bench：把乐谱阅读拆成六类操作分别考查"
paper_digest_original_title: "OmniScore-Bench: Evaluating Vision-Language Models on Musical Score Reading"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.17870v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.17870v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.17870v1.pdf"
paper_digest_primary_task: "光学乐谱识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.optical-music-recognition","label":"光学乐谱识别"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"task","id":"task.document-visual-grounding","label":"文档视觉问答与定位"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "针对视觉语言模型读谱时定位、关联与乐理推断混在一起难以诊断的问题，论文用 3,000 道分范围、分契约的题目把六类操作分开测量，发现 excerpt 与单页转录领先者在多页上被反超，而去图与格式对照说明视觉依赖与内容错误需要分开判断。"
paper_digest_authors: [{"affiliations":["Central Conservatory of Music","Tsinghua University"],"name":"Congren Dai"},{"affiliations":["Central Conservatory of Music","Tsinghua University"],"name":"Zhancheng Guo"},{"affiliations":["Central Conservatory of Music"],"name":"Danni Zhao"},{"affiliations":["Central Conservatory of Music","Tsinghua University"],"name":"Wenchu Wang"},{"affiliations":["Central Conservatory of Music"],"name":"Xiaobing Li"},{"affiliations":["Central Conservatory of Music"],"name":"Maosong Sun"}]
paper_digest_abstract_sha256: "ca0c8b4f34b1216d3c29bc1cee1522238bbf71530dedbd15ebde226c22c2b9b0"
paper_digest_sidecars: {"citation.bib":{"sha256":"3936776ae1094f8208dce1db823e3071c14d0a811435b83647e3dc35ce4d662b","url":"/audio-paper-digest-blog/client/papers/2026-11-16/2611-17870/citation.bib"},"citation.json":{"sha256":"38886e81ef240c65756832d8841d1cbd7db4c7dd66b55d2ac24ec133b4f70578","url":"/audio-paper-digest-blog/client/papers/2026-11-16/2611-17870/citation.json"},"citation.ris":{"sha256":"a5795b9e9c14a50f085cf8e22b16b3af5c4661912e85fa6e77fc95ca208f4d3a","url":"/audio-paper-digest-blog/client/papers/2026-11-16/2611-17870/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"c0b8f45268d33733655e671ec92dd6da65c68ac5db44695aeff7b87e59a94074","url":"/audio-paper-digest-blog/client/papers/2026-11-16/2611-17870/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "4517f987e4b31b3b8c4170a796eae5b3f4e5730fe5e935aa2b5a42d02741bca9"
paper_digest_api_reader_plan_sha256: "9f6aa2dd4a529424838d2ae78adee696cf242e76f9cd64b69cfd5e7f0836ca91"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "b5c1bddc68dbf0397aea060485b26bb6a8582d1d70e3d955a3ecd70b1cc35fd7"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "961fb9f25500060e09b147f6a991750d9f964a8110095a0a50ed5fce17a109b0"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "5356186be9b65889084846fcd28480a563cd6e65f5e20d811d8d4f32c3f32137"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "d318ca06bd6ea830f96f9d508f3d954ffce592aea1fdae2bb49ee7034ef69d4b"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 OmniScore-Bench：把乐谱阅读拆成六类操作分别考查

> 英文题目：*[OmniScore-Bench: Evaluating Vision-Language Models on Musical Score Reading](https://arxiv.org/abs/2611.17870v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐分析](/audio-paper-digest-blog/papers/?concept=task.music-understanding) → [光学乐谱识别](/audio-paper-digest-blog/papers/?concept=task.optical-music-recognition)；[文档视觉问答与定位](/audio-paper-digest-blog/papers/?concept=task.document-visual-grounding)
- **研究方法**：[评测协议](/audio-paper-digest-blog/papers/?concept=method.evaluation-protocol) → [基准设计](/audio-paper-digest-blog/papers/?concept=method.benchmark-design)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.3/10** | 创新 1.4/2 | 技术严谨 1.5/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Congren Dai：Central Conservatory of Music；Tsinghua University
- Zhancheng Guo：Central Conservatory of Music；Tsinghua University
- Danni Zhao：Central Conservatory of Music
- Wenchu Wang：Central Conservatory of Music；Tsinghua University
- Xiaobing Li：Central Conservatory of Music
- Maosong Sun：Central Conservatory of Music

## 📌 核心摘要

视觉语言模型能回答乐谱问题，但定位符头、关联声部与解释时值等操作是否可靠仍需分别检验，区别于仅报告转录总分的已有光学乐谱识别评测，单独转录分难以定位瓶颈所在。OmniScore-Bench把一次读谱拆成可单独观测的请求，每题声明可见范围、参考标注与答案格式，输入为乐谱图像及目标标识、结构归属或解释规则等文字条件，输出为符号框、归属判定、关系边、MusicXML转录或带证据的问答答案。构建先按图像与编码对应生成候选题目并输出题面与参考标注，再将这些题目送入自动检查与两名专家独立审核，最后分歧由第三名专家裁定并形成正式评测集。六个方面覆盖渲染、印刷扫描与手写三种来源，每种来源1000题，每子类型125题，共3000题，覆盖24个任务子类型。在多页转录T4.4的125题评测上，Claude Opus 5.5的CER为64.3，低于Qwen 3.8 Max的79.8，数值越低越好。配对去图对照在保持文字条件与输出格式不变下移除全部乐谱图像，显示音高与反复展开依赖图像，而结构归属与片段变换在无图时仍保留部分成功率。结论适用于所选题目与给定条件，不支持跨页数因果推断，残余误差仍大。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 读谱为什么不能只看最后抄得像不像？

这篇论文要解决的是视觉语言模型读乐谱时的诊断问题。输入是一张或多张乐谱图像加一道文字问题，输出是按题目契约给出的结构化答案或 MusicXML 乐谱文本。初学者容易把读谱理解成把谱面抄下来，但论文开头的例子提醒了关键差别：符头旁边一个附点会改变时值，连接两个音的弧线可能是延长时值的系线，也可能是只表示分句的连音线。要正确解读，必须先定位这个记号，再确定它的端点或依附对象，然后套用对应的乐理规则。

如果只给一个整页转录分数，模型可能抄对了大部分音，却在系线与连音线、声部归属、反复跳转这些环节系统性出错，而总分看不出瓶颈在哪里。论文因此把 1 次读谱拆成可单独观察的操作：符号在哪、版式如何划分、对象之间有何关系、能否重建乐谱、记谱的音乐后果是什么、能否带着证据回答问题。每道题都声明可见范围与音乐范围，参考标注只在这个范围内给答案，这样定位错、关联错和乐理算错就不会被混成一个分数。

对刚入门的读者，重要的是先建立这种分层观念：像素层面的看见、结构层面的组织、关系层面的连接、乐理层面的解释，是四件不同的事。后面所有任务划分、度量选择和对照实验，都是为了让这四件事分别可测。

### 已有乐谱数据集各测了哪一段？

在理解新基准之前，需要先看已有资源各自覆盖了哪段链路。DeepScores 系列主要做密集符号检测，MUSCIMA++ 在手写谱上补充了符号关系，PrIMuS 与 GrandStaff 侧重单谱表或钢琴谱转录，SMB 把扫描谱与标准化转录评价统一起来并引入 OMR-NED，Muse 基准提供谱面与编码对，而 MSU-Bench 关注整谱理解并报告定位错误与幻觉。这些工作分别验证了从单个符号到整页的不同层次，但没有同时要求模型给出区域、归属、关系、乐理推断与证据引用。

下表比较了各资源是否把 6 个方面作为专门评价目标，勾表示至少支持该方面一个目标，叉表示不是专门评价重点。需要强调的是，打勾不意味着覆盖本论文的全部子类型，T4 在 MUSCIMA++ 中包含音乐内容抽取，Muse 的结构与关系检查作用于符号化乐谱，T5 指单独的音乐一致性提问，T6 指乐谱问答且本论文要求显式证据评分。

| Dataset / benchmark | T1 | T2 | T3 | T4 | T5 | T6 |
| --- | --- | --- | --- | --- | --- | --- |
| DeepScoresV2 [tuggener2021deepscoresv2] | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ |
| MUSCIMA++ [hajic2017muscima] | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ |
| PrIMuS [calvo2018primus] | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ |
| GrandStaff [rios2023pianoform] | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ |
| SMB [martinez2025smb] | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| Muse OMR Benchmark [musegroup2025benchmark] | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ |
| MSU-Bench [dai2026msu] | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ |
| OmniScore-Bench | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

这张表支撑的判断是：已有工作在定位、转录或问答上各有侧重，但没有一个同时把六方面都作为专门目标。OmniScore-Bench 的位置是补上中间环节，让符号位置、谱表归属、关系标注与音乐解释与重建并列可测。对照时要注意任务与输入并不相同，不能把某数据集上的检测分数直接当成转录能力，论文也没有提出替代距离，而是沿用已有转录度量再增加区域、归属与证据层面的提问。

### 题目到底要求模型做什么、答案如何判定？

论文把乐谱阅读定义为 6 个方面共 24 个子类型。T1 符号要求返回类别与归一化图像框，覆盖符头休止符、谱号变音记号、符干符旗符梁附点、力度表情记号 4 类。T2 结构关心页面与系统组织、小节区域、声部归属与跨系统延续，其中几何输出按区域评分，归属与延续按声明的关联评分。T3 关系处理系线与连音线端点、和弦与符杠分组、跨声部时值与其它类型连接，系线与连音线即使曲线相似也被视为不同类型。

T4 转录全部要求输出 MusicXML，分为单声部片段、单谱表多声部片段、单页范围与多页有序输入四档，范围由可见输入界定，多页不一定是完整作品。T5 音乐一致性不考整谱重建，而是考记谱后果：拍号与时值、记谱音高与发声音高、发声事件、有限范围内的反复走访，每题都给定目标事件、变换假设与歧义处理。T6 乐谱问答要求答案加证据联合成功，证据或是图像区域或是已给区域标识，计数与检索是两套不同的输出与评分契约。

每道题 1 次只问一个请求，附带目标标识、结构给定或解释规则等公开上下文。参考答案只在声明范围内有效，例如给定目标小节后，音高题就不再考查模型能否在整页找到该小节。这种设计把找范围的困难与算音乐的困难分开，也是后面对照实验能成立的前提。

### 3000 道题如何从三种谱面组装并保证范围一致？

基准共 3,000 道题，Rendered、Printed scan 与 Handwritten 各 1,000 道，每个方面含 4 个子类型，每个子类型 125 道。Rendered 来自 MuseScore 相关编码与 OpenScore Lieder，手写来自 CVC-MUSCIMA 与 MUSCIMA++，印刷扫描组合了 Winterreise 材料、小节区域标注、额外扫描与变音记号检测集合。题目只在有对应标注层的条件下实例化，并用自动检查验证问题是否有明确答案、图像与参考是否覆盖同一音乐范围，印刷扫描还要核对可见记谱与符号编码的对应。

下图是六方面与 3 类输入的总体布局，上方展示干净渲染、退化拷贝、艺术歌曲、弦乐四重奏、不同书写者与真实扫描的质感差异，下方把版式区域、符号、关系与转录示例并置，右侧说明图像元数据、版式区域、符号参考、规范事件、可执行断言、证据问题、公开给定与私有参考的分层。读图时不要把示例谱面的装饰细节当成任务定义，关键是输入质感、任务类型与标注层三者的对应。

> **看图路径：** 1. 先看顶部三类输入的示例谱面质感差异；2. 再看中部六个方面与下部事件和断言属性如何对应；3. 对照左侧版式、符号、关系、转录四条示例条带

[![原论文 Figure 1：Six aspects of musical score reading for vision-language models.](https://arxiv.org/html/2611.17870v1/bench.png)](https://arxiv.org/html/2611.17870v1/bench.png)

*论文图 1。原论文 Figure 1:：“Six aspects of musical score reading for vision-language models.”。*

该图确实可见顶部 3 组谱面示例质感不同，中部用 6 个色块区分符号、结构、关系、转录、一致性与问答，下部列出身份、时间、音高类型 3 组事件属性与内在、基于参考、结果 3 组断言属性。它帮助理解为什么同一张谱可以派生出定位框、归属判定、关系边与乐理答案等不同输出，以及为什么参考必须绑定到可见任务范围。

题目来源构成与数量如下表所示，其中一道渲染题含合成退化但仍计入渲染域。2 名各有 20 年以上经验的专家在看不到模型回答且互盲的条件下独立审核全部 3,000 题，初始一致率为 92.50%，分歧由第三位同等资历专家裁定最终参考答案。所有模型做同一套题，不做任务训练，也没有划分开发集与测试集。

| Domain | Collection | Questions |
| --- | --- | --- |
| Rendered | Muse native corpus | 952 |
| Rendered | Additional Muse pairs | 4 |
| Rendered | OpenScore Lieder | 44 |
| Handwritten | CVC-MUSCIMA source images | 680 |
| Handwritten | MUSCIMA++ annotations | 320 |
| Printed scan | Schubert Winterreise / Peters scans | 543 |
| Printed scan | AudioLabs measure annotations | 369 |
| Printed scan | Additional IMSLP pairs | 27 |
| Printed scan | Accidental-detection release | 61 |
| Total |  | 3000 |

来源表说明评估覆盖了软件渲染、真实扫描与手写 3 种质感，且手写与扫描内部又来自多个采集集合。它的限制是数量均衡不等于内容等价，不同域的曲目、声部数与标注完备度不同，因此跨域比较描述的是已评估子集上的表现，而不是对同一批乐谱换渲染方式的控制效应。

### 符号、结构与关系三类操作如何分别评分？

T1 的严格定位采用类别感知的框一对一匹配，在交并比 0.5 处判定命中，并另做 1 像素平移容差的敏感性分析。T1.1 只看完整落在区域内的符头休止符，T1.2 固定可用标签做谱号变音记号，T1.3 处理符干、符旗、符梁与附点等细窄节奏记号，T1.4 处理力度表情记号的完整标记块而非字符框。细窄符干的匹配对坐标偏移更敏感，同一偏移可能放过宽符头却判错窄符干，容差分析不修正类别与依附错误。

T2 中系统谱表与小节按区域 F1 评分，声部归属按精确答案评分，结构延续按关系 F1 评分。部分题目会直接给出对象标识或结构给定，成功只度量请求的关联是否正确，不要求模型重新恢复上游全部环节。T3 中系线连音线按类型化端点评分，连音线允许参考定义的同一逻辑和弦内已标成员等价，系线仍对音高敏感；和弦符杠分组要求完整分组精确匹配，部分正确不得同等得分；跨声部时值比较从小节起点算起的精确四分音符时值。

**符头与休止符定位 × 谱表与小节区域：** 符头与休止符定位要求在声明区域内给出类别与归一化框，解决细小符号找得到找得准的问题；谱表与小节区域要求恢复系统包络与小节切分，解决页面如何被划分的问题；两者搭配才能区分是没看见音符，还是没切对小节，组合后得到从像素到版式骨架的定位能力画像。

空参考题单独处理：T1.4 有 12 道、T3.1 有 29 道、T3.4 有 22 道无目标题，用每题误报数衡量是否添油加醋，而不对空答案赋任意满分 F1。无效或空答案也可能零误报，因此必须结合正例 F1 与输出有效性一起看，否则会把拒答误当成正确克制。

**系线与连音线 × 和弦与符杠分组：** 系线与连音线要求判断两个端点之间是哪种有向类型，系线延长时值而连音线只表示分句，外形相近但音乐含义不同；和弦与符杠分组要求把已标对象划分到同一和弦或连续符杠组，解决谁和谁同时或同组的问题；两者搭配把几何相连与音乐相连分开，组合后才能看出模型是端点找错还是类型判错。

这一层的要点是几何相近不等于音乐相同。论文用 T3.1 例子说明，正确端点配错类型仍是关系错误，这正是把检测曲线与判断系线连音线分开的理由。

### 转录、音乐推断与带证据问答各解决什么困难？

T4 四档转录都要求独立 MusicXML 文本，继承上下文与分组指令保留在提示中，只收录端点都在输入范围内的关系，不补范围外小节也不展开反复。评价用 5 种互补距离：NED 按规范化预测与参考 MusicXML 的记谱编辑聚合，字符、符号、行错误率是对转换后 ABC 表示按参考单位聚合，归一化树编辑距离对截断到至多 6,000 节点的树求平均。5 种单位与归一化不同，排序不必一致，解析转换与计算限制会导致部分缺测，覆盖率保持显式。

T5 把整谱重建拆成可核查的音乐计算。T5.1 返回拍号、名义小节时长与各目标事件的起点时值，时间用题目单位下的精确有理数；T5.2 返回记谱音高的音名、变音与八度及发声半音坐标，C4 为中央 C 且发声 C4 等于 60，题目给定移调条件而非让模型猜测；T5.3 只对已标音符做 1 次记谱遍走的发声事件合并，系线连接的合并、未连的分立 attack、连音线忽略；T5.4 在标定小节范围内按可见反复记号走访，到达末小节尾或可见停止指令结束，否则在缺失跳返目标时按契约返回未知。

T6 把答案与证据绑定。T6.1 抽取可见拍号、标题、速度文本与声部标签并引用区域标识；T6.2 分两个总体，61 道印刷扫描题对给定符头检索关联变音记号，64 道计数题分别数常规尺寸实心与空心符头并给出符号框；T6.3 在完整小节内比较声乐谱表与钢琴上谱表的 attack 集合并引用区域；T6.4 比较两个完整声乐小节在色度音高与归一化时值下的变换并引用 A 与 B。联合成功要求答案与证据同时正确，区域引用与符号框是两种不同的证据要求。

**转录 × 音乐一致性：** 转录要求把可见范围完整重建成 MusicXML，解决符号能否被完整还原的问题；音乐一致性要求在给定事件、调号、移调与反复规则下算出拍号、音高、发声事件或走访路线，解决记谱的音乐后果是什么的问题；两者搭配区分重建得像与算得对，组合后才能判断错误来自漏抄还是乐理推断。

这种拆分让计数好不等于定位好成为可观测现象：数值答对但支撑框找不准，会在证据 F1 上暴露，这正是后面 Opus 计数与证据分化的伏笔。

### 模型、输入与聚合方式如何保证可比？

评估覆盖 7 个开发者的 12 个视觉语言模型，包括 DeepSeek V4.1 Flash、Qwen 3.7 Plus 与 3.8 Max、Kimi K3 与 K3.1 Pro、GLM 5.3 Flash、Claude Fable 5.1 与 Opus 5.5、Gemini 3.8 Flash 与 4 Argon、GPT-6.1 Sol 与 GPT-6 Astra。每个请求含一道题与图像输入，指令、范围与输出契约跨模型相同，每题独立作答且看不到参考标注。严格评分要求 JSON 或独立 MusicXML 契约，所有 MusicXML 先做语义保持的规范化再验证计算，截断、拒绝、无效或空答案计入输出失败，通信失败可重试。另有一轮只去掉一层合法外层 Markdown 围栏的补充分析，不修正音乐内容。

主比较共 36,000 个模型题目对，涉及 1,905 张去重原图与 4,535 次原图出现，按来源标识划分 616 个来源内容组。非转录分数先在组内平均再跨组平均，空参考题单独计误报，有效覆盖率保持显式。每题一问的设计避免了多问之间的提示干扰，而组宏平均避免了题目扎堆的来源主导总分。

非转录主汇总公式计算每个子类型在有效题集上的组宏平均，先对组内有效题取均值，再对有代表性的组取均值，其中符号表示该子类型题目的得分。

\[S_{t}=\frac{1}{|\mathcal{G}_{t}|}\sum_{g\in\mathcal{G}_{t}}\frac{1}{|E_{t}\cap g|}\sum_{i\in E_{t}\cap g}s_{i}.\]

该式先消除同一来源内题目数量的影响，再消除来源数量的影响，空参考题不进入 F1 平均而另行统计。它帮助理解为什么跨域题量不同时仍可比较，但也意味着组数少的子类型对方差更敏感。

确定性路线与未知路线的走访成功按另一公式分别处理，有效输出、路线一致与扩展事件一致三者共同决定得分，未知题要求有效的未知回答与引用受影响及证据区域的理由代码。

\[s_{i}=V_{i}R_{i}\bigl[(1-a_{i})+a_{i}E_{i}\bigr],\]

该式区分只要求路线与还要求扩展事件的两类题，以及显式未知题的判定逻辑。它说明反复走访不仅考导航，还考展开后的音乐内容。

**MusicXML × ABC 表示：** MusicXML 是模型必须直接输出的规范乐谱文本，保留声部、音高、时值与关系结构；ABC 表示是由提交的 MusicXML 转换得到的线性序列，用于计算字符、符号与行级编辑距离；两者搭配让同一份转录既能做树与符号级比较，也能做序列级比较，组合后可分辨局部拼写准而行结构差等不同失败。

转录侧用语料库 NED 把全子类型的编辑数与符号数分别求和再相除，另有按题平均与按组平均两种加权在附表中对照；Opus 与 Astra 的排序用 10,000 次成组自助法在来源组上重采样，给出配对差值的百分位区间，区间条件于已观测分组，不含重复生成的变异，也不做全模型多重比较校正。

### 哪些操作分化了模型，转录领先者为何随范围改变？

非转录能力画像显示操作依赖很强。可见事实抽取远强于音高解读：Opus 在 T6.1 可见事实题联合成功率达 99.0%，而 T5.2 记谱与发声音高题精确答案只有 56.0%；Astra 对应为 100.0% 与 81.7%。这组对照把检索可见文字与选择并解读音符分开，前者几乎饱和，后者仍是瓶颈。细定位上 Sol 与 Astra 在 T1.1 分别达 91.0% 与 89.8%，而 Opus 只有 7.9%，但 Opus 在小节区域达 94.0%、跨声部时值达 76.1%，说明大尺度组织与细符号定位可以分离。

关系类型进一步分化模型。Qwen Max 在系统谱表与小节区域 F1 超过 84%，但声部归属精确答案只有 46.9%；Argon 结构延续达 98.0%，但系线连音线端点只有 57.7%。前者区分区域几何与对象归属，后者区分跨版式连续与音符间音乐连接。下图例子把端点正确但类型错误具体化：Opus 找到 3 到 4 端点却把参考系线判成连音线，Sol 与 Astra 返回系线，蓝色框复现 4 个公开目标，裁剪来自手写页局部。

读图任务是区分几何相连与音乐相连，不要只看弧线存在，要看表格中类型列的差异。

> **看图路径：** 1. 先看四个蓝色目标框标出的端点位置；2. 再对照表格中参考为 Tie 而 Opus 给 Slur 的行；3. 注意端点相同但类型不同意味着什么

[![原论文 Figure 3：Correct endpoints, incorrect musical relation.](https://arxiv.org/html/2611.17870v1/relation_case.png)](https://arxiv.org/html/2611.17870v1/relation_case.png)

*论文图 3。原论文 Figure 3:：“Correct endpoints, incorrect musical relation.”。*

该图确实可见手写谱上线条与 4 个标号框，以及下表参考为 Tie 而 Opus 为 Slur 的行，Sol 与 Astra 行与参考一致。它证明即使端点全对，类型判错仍导致关系失败，也解释了为什么 T3 需要类型化评分而不能只测曲线检测。

转录排序随范围改变。Astra 在 T4.1、T4.2、T4.3 以完整总体语料库 NED 最低，而 T4.4 多页上 Opus 为 39.9%，Astra 为 50.6%，Sol 为 55.2%，Kimi K3.1 Pro 为 67.0%。Opus 与 Astra 的多页差值配对区间为负向且不含零，在等题与等组加权下反转依然成立，3 种参考长度分层中 Opus 也都更低。但在双方都有效的 80 题子集上两者为 33.3% 对 34.6%，区间包含零，说明计入输出失败时 Opus 领先，而只看共同有效输出时两者音乐重建接近。

下表是四档转录的完整总体语料库 NED，数值已乘以 100，越低越好，每格覆盖 125 题，语料库比率把编辑数与符号数跨子类型分别求和。

| Model | T4.1 | T4.2 | T4.3 | T4.4 |
| --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | 89.6 | 86.1 | 86.4 | 89.0 |
| Qwen 3.7 Plus | 90.8 | 89.9 | 91.8 | 96.1 |
| Qwen 3.8 Max | 81.1 | 81.1 | 76.1 | 76.2 |
| Kimi K3 | 71.7 | 69.3 | 70.9 | 74.5 |
| Kimi K3.1 Pro | 64.4 | 64.1 | 62.8 | 67.0 |
| GLM 5.3 Flash | 89.6 | 86.9 | 83.7 | 93.1 |
| Claude Fable 5.1 | 64.4 | 69.2 | 59.3 | 77.1 |
| Claude Opus 5.5 | 46.3 | 55.1 | 43.5 | 39.9 |
| Gemini 3.8 Flash | 84.4 | 79.8 | 85.7 | 98.0 |
| Gemini 4 Argon | 46.2 | 29.0 | 52.0 | 88.3 |
| GPT-6.1 Sol | 28.0 | 23.5 | 30.5 | 55.2 |
| GPT-6 Astra | 23.5 | 21.4 | 26.8 | 50.6 |

这张表支撑的判断是 excerpt 与单页的领先者不等于多页领先者，Astra 在前三档最低而 Opus 在多页最低。限制是来源内容不同，不能把这种反转归因于页数本身；缺测的其它距离与树距离覆盖率在附表中单独报告，不能用子集均值替代完整总体排序。

多页长度分层进一步说明观测长度内的表现，符号数与页数范围描述每层，语料库 NED 乘以 100。

| Length | nn | Ref. symbols | Pages | Opus | Astra |
| --- | --- | --- | --- | --- | --- |
| Shorter | 42 | 404–2686 | 2–7 | 16.9 | 25.0 |
| Middle | 42 | 2724–4716 | 2–12 | 27.9 | 45.7 |
| Longer | 41 | 4720–54443 | 2–84 | 53.6 | 58.8 |

该表显示短、中、长 3 层中 Opus 分别为 16.9、27.9、53.6，Astra 为 25.0、45.7、58.8，Opus 在每层都更低。但长度与来源材料混杂，只能说在已观测长度上如此，不能推出因果的长度效应。终止标签显示 Opus 正常停止中无输出失败而 Astra 有 31 次，长度终止两者都有失败，这些状态与评分失败度量的是不同性质，不要混为一谈。

域内画像同样呈现任务条件性。下图上板为单页转录语料库 NED，下板为音高组宏精确答案，同任务跨三域比较且模型顺序固定。读图时先确认纵轴方向相反，再看同模型跨颜色的变化。

> **看图路径：** 1. 上下面板分别看转录越低越好与音高越高越好；2. 同模型比较三种颜色在同一任务内的高低变化；3. 注意 Printed scan 上各模型的相对顺序变化

[![原论文 Figure 4：Model profiles vary across domains.](https://arxiv.org/html/2611.17870v1/domain_profiles.svg)](https://arxiv.org/html/2611.17870v1/domain_profiles.svg)

*论文图 4。原论文 Figure 4:：“Model profiles vary across domains. Each panel evaluates the same task across three domains for all twelve VLMs.”。*

该图确实可见上板各模型三色柱高低不一，下板 Sol 与 Astra 在渲染域并列满分而在印刷扫描域明显回落，Opus 在手写音高上高于渲染音高但手写转录误差更大。它帮助理解重建像与算得对可以分离，域排序会随任务改变，印刷扫描上 Sol 与 Astra 的区间重叠使点估计顺序只是描述性。

### 去掉图像、给定与增加页面各改变了什么？

图像移除在 270 题固定子集上检验视觉依赖，T2.3 与 T5、T6 各取 30 题，文本、坐标、给定、输出模式与生成设置不变，只删去全部图像部分。Sol 的记谱与发声音高从 83.3% 降到零，反复走访从 92.0% 降到零，可见事实从 100.0% 降到 13.6%，移除后 270 题中有 268 题输出仍有效，说明下降主要在答案内容而非格式失效。但结构归属仍有 53.3%，片段变换仍有 60.0%，公开文本几何与先验可支撑部分无像素作答。DeepSeek 基线已接近零的任务存在地板效应，差值虽小但诊断价值有限。

辅助给定移除保留图像，只删指定辅助域。T5.2 去掉额外小节框但保留目标音符框与标识，T6.3 去掉对齐小节时长但保留行归属与节奏规则。Sol 在 T5.2 保持 95.0%，13 道 T6.3 全对；DeepSeek 在 T5.2 从 15.0% 降到 5.0%，T6.3 联合成功不变但格式有效数变化，说明总分不变可能掩盖答对题集的变化与格式合规变化。固定目标的页面上下文对照在目标片段后追加同源页面序列，参考与继承上下文不变，Opus 在 T4.1 增加 6.3 点、T4.2 增加 3.4 点，Astra 减少 0.6 与 8.6 点，但每组区间都包含零，方向因模型而异且不确定性覆盖利弊两端。

格式与内容分离用围栏补充分析说明。Qwen Plus 可评分题从 341 恢复到 2824，GLM Flash 从 1930 恢复到 2825，但恢复后的转录仍有很大记谱距离，说明格式只解释小部分转录误差。细符号定位的 1 像素容差让 Sol 的 T1.3 从 58.9% 升到 72.3% 而 T1.1 只从 91.0% 升到 91.9%，坐标偏差对窄符干影响更大，但类别与依附错误仍需另行修正。

**严格评分 × 外层代码围栏补充分析：** 严格评分要求只接受符合 JSON 或独立 MusicXML 契约的答案，解决输出能否被自动解析的问题；外层代码围栏补充分析只去掉一层合法的 Markdown 围栏后重评，内容不做任何修正，解决错误是包装问题还是音乐内容问题；两者搭配才能把格式不兼容与音高时值算错分开，组合后避免把能解析但写错判成格式问题。

下图是格式有效但音乐错误的典型：T5.2 问上钢琴谱表标定小节内最高记谱音，发声定义为记谱减两半音，模型收到全部五页，蓝色框复现公开小节范围。读图时先看谱面裁剪中的目标范围，再看表格中参考 B5 与 Opus F5 的对应发声值。

> **看图路径：** 1. 先看蓝色框标出的目标小节范围；2. 再对照表格中 B5 与 F5 两行的发声值差异；3. 注意格式有效但音高选错如何被判定

[![原论文 Figure 5：A valid format can contain a musical error.](https://arxiv.org/html/2611.17870v1/pitch_case.png)](https://arxiv.org/html/2611.17870v1/pitch_case.png)

*论文图 5。原论文 Figure 5:：“A valid format can contain a musical error.”。*

该图确实可见双谱表片段与蓝色目标框，以及下表参考 B5 对应 81、Opus F5 对应 75、Sol 与 Astra 与参考一致的行。它证明格式检查通过不代表音高选择正确，Opus 的移调计算自洽但选错了音，定位目标与变换计算是两个可分离的错误来源。

### 这些结论在什么条件下才成立？

首先是总体边界。所有分数条件于已选内容分组与单次生成，配对自助区间只刻画内容抽样敏感性，不含重复推理变异，也不对 12 个模型做同时排序校正。T5.4 上 Opus 与 Astra 点估计接近而区间很宽，相对反复能力无法定序；T4.4 共同有效子集区间包含零，只能说在可接受答案上两者接近，不能推广为整页重建无差异。

其次是指标与覆盖边界。5 种转录距离单位不同，字符符号距离偏向局部序列，行距离与树距离偏向行结构与层级结构，排序不必一致。T4.4 的树距离对所有模型都不完整，多个模型的 ABC 距离缺测，缺测使完整 12 模型排名无法建立，只能报告可用子集。空参考误报必须与正例 F1 联合解读，无效答案的零误报不是正确克制。

第三是域与长度边界。域比较使用不同来源材料与给定，描述的是已评估子集表现，不是同一批谱换渲染的控制效应。长度分层中符号数与页数与来源混杂，只能描述观测长度内的表现。图像移除的残留成功可来自公开几何、任务约束或模型先验，不能反推模型看见了谱面；低基线任务的图像依赖因地板效应而无法判定。这些限制意味着选型必须按操作与输入质感分别进行，不能用一个总分指导所有读谱任务。

### 复现第一步该做什么、去哪里找资源？

复现应从问题契约开始，而不是从跑模型开始。先按附录问题串与输出契约重建一道 T1 定位题与一道 T5 音高题的输入结构：用户消息中的问题、区域、目标标记、给定与输出契约字段，以及有序原图与声明的辅助裁剪如何排列。确认归一化坐标是相对原图而非裁剪图，区域框单独提供而非画在谱面上，共享指令只要求返回 JSON 或独立 MusicXML 且不加围栏、不截断范围。跑通严格评分器对格式有效与输出失败的判定后，再引入 MusicXML 规范化、ABC 转换与组宏平均的聚合逻辑。

数据侧按来源表核对三域构成与 125 题每子类型的配额，理解 Muse 原生语料、手写 CVC 与 MUSCIMA++、Winterreise 扫描与小节标注等集合的分工，以及 1,905 张原图与 616 个来源内容组的聚合单元。论文正文表示将公开基准与评测脚本，但本次未发现可验证为作者资源且可用的链接，因此不能写成代码模型数据已公开或可下载，第三方提及的链接也只证明论文提到该链接。复现时应以论文附带的表 S1 数量、问题文本与评分规则为准，先验证范围绑定与参考对应，再补模型调用。

统计复现要注意随机种子与分组：Opus 与 Astra 比较用 10,000 次成组自助并保留组内全部题目，种子与区间定义在附录中给出。输出上限 32,768 的控制条件、有效覆盖率显式报告、失败仍计入分母等细节，都需要在复现脚本中保留，否则点估计与区间不可比。

### 什么时候值得尝试、还需补哪项验证？

当任务可以明确为定位、切分、归属、关系、转录、乐理计算或带证据回答之一时，这套基准值得作为选型依据。例如需要大面积找符头与表情记号时，Sol 与 Astra 的细定位更可靠；需要从扫描页重建单页时，excerpt 与单页领先者更合适；需要重建多页有序输入并容忍输出失败计入总分时，Opus 的完整总体更优；需要解释音高时值与反复路线时，应直接看 T5 而不是用转录分代替。行动顺序是先按操作与输入质感查对应子类型点估计与区间，再看格式有效率与证据 F1 是否支撑可用性，最后用图像移除与辅助移除的对照判断对谱面像素的依赖程度。

还需补充的验证集中在三处：一是缺测距离的覆盖，特别是多页树距离与部分 ABC 距离，需要在可解析子集上补足并明确报告分母；二是印刷扫描与手写在相同曲目上的控制比较，现有域差异混杂了内容与给定，不能直接当成渲染鲁棒性；三是重复生成的变异，现有区间只反映内容抽样，需要多次采样才能知道排序稳定性。容易产生的误解是把共同有效子集的接近当成整体无差异，把围栏恢复后的可评分数当成正确数，把残留无图作答当成视觉不重要，原文的分组、失败计入与证据分离设计正是为了避免这 3 种误读。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.17870v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-16 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-16/)
