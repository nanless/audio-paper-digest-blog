---
title: "Perceptual Differences and Preferences in Speech Enhancement"
date: 2026-10-29
draft: false
tags: [语音增强, 众包评测, 语音, 模型评估]
categories: [论文速递]
description: "本文用三角区分测试和带无偏好选项的成对偏好测试评价四个语音增强系统在不同语音上的可区分性和日常收听偏好，并检验常用客观指标差值能否预测这两个维度，发现可区分性与系统性偏好并不等同且多数客观指标相关性不稳定。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.36892"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "语音增强之后听起来不一样吗？又更喜欢哪个？区分度与偏好的互补评价"
paper_digest_original_title: "Perceptual Differences and Preferences in Speech Enhancement"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.36892v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.36892v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.36892v1.pdf"
paper_digest_primary_task: "语音增强"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-enhancement","label":"语音增强"},{"facet":"method","id":"method.crowdsourced-evaluation","label":"众包评测"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"research_focus","id":"research_focus.evaluation","label":"模型评估"}]
paper_digest_primary_method: "众包评测"
paper_digest_score: 5.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "本文用三角区分测试和带无偏好选项的成对偏好测试评价四个语音增强系统在不同语音上的可区分性和日常收听偏好，并检验常用客观指标差值能否预测这两个维度，发现可区分性与系统性偏好并不等同且多数客观指标相关性不稳定。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Simon Dahl Jepsen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jesper Rindom Jensen"}]
paper_digest_abstract_sha256: "a0991e247ab82905816d415eb02111e9b25d66941b4f771cbb3178277d97dded"
paper_digest_sidecars: {"citation.bib":{"sha256":"929c14d3e43e0c0665f40d2ebe0db180cc39e1eab116fef9e4566adbea74b612","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-36892/citation.bib"},"citation.json":{"sha256":"c4a37111d013c8a3f161159a0d2ac92255eb72aa43356dda6eb3be4efd8b5219","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-36892/citation.json"},"citation.ris":{"sha256":"a9542d0b7889fbf89eac139fc7670bed8ca210929bb71f7d7d014b0bf5d41401","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-36892/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"d32bafeab35e9be45947410e7a9e8d66e789b9105c7f1f6aaf7796aea4d30725","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-36892/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "2a8b71eaa8e2c476c03d065fa514cb4750db1ff31f12a596dbcbb1ef0e447449"
paper_digest_api_reader_plan_sha256: "6f99c92ffd78feb7b2e5ce4a23d764b4adc4331af82dc827e3ddbfa64a9b4726"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "03f3db036a66321f73bb4fbd151b48c2eecf81fd8cbbd668614fe590a6670c02"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "5644491114d87c6422ea20bcc6450c4ac8389068d0079b58b6b6477e6ff873e9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "3dbd3d442d0d3553dad536da2b0f689275a41ced38aef163b53c4fbd2e95ee54"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "86f6a8e456da9017951c83f5307b9df6f81a7654e2f90c546896d35d8bf6ce5c"
paper_digest_api_reader_resource_count: 5
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 语音增强之后听起来不一样吗？又更喜欢哪个？区分度与偏好的互补评价

> 英文题目：*[Perceptual Differences and Preferences in Speech Enhancement](https://arxiv.org/abs/2610.36892v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音增强](/audio-paper-digest-blog/papers/?concept=task.speech-enhancement)
- **研究方法**：[人类参与评测](/audio-paper-digest-blog/papers/?concept=method.human-evaluation) → [主观评测](/audio-paper-digest-blog/papers/?concept=method.subjective-evaluation) → [众包评测](/audio-paper-digest-blog/papers/?concept=method.crowdsourced-evaluation)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)
- **研究重点**：[模型评估](/audio-paper-digest-blog/papers/?concept=research_focus.evaluation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.5/10** | 创新 1/2 | 技术严谨 1.2/1.5 | 实验充分 1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5


## 👥 作者与机构

- Simon Dahl Jepsen：机构信息未能在本次解析中与作者逐人可靠绑定
- Jesper Rindom Jensen：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

语音增强的输入是带噪录音，输出是估计的干净语音，难点是高性能系统在常用客观分或平均意见分上已经很接近，但分数接近不等于听起来无差别，更不等于听者没有系统性偏好。论文采用配对比较框架，对同一语句经两个系统处理后的输出做逐句差值，先用三角测试让听者从三段中挑出不同者，再用A/B/N测试测日常听音偏好与是否明确表态。三角试验的逐条件分辨估计进入与客观分差的Spearman相关及机会下限为三分之一的心理测量函数拟合，偏好试验的表态率与偏好方向同样以逻辑函数关联客观分差，从而检验分差能否预测可分辨性与偏好。在45条DNS2020语句共2541次众包三角试验汇总下，总体分辨率为1775/2541约0.7，高于三分之一猜测水平。在同一众包偏好试验汇总下，听者明确表态比例为68%，其中MeanFlow对干净参考的平均表态率为0.84，高于MeanFlow对StoRM的0.51。在135个语句配对条件的分辨关联中，SQUIM_STOI的Spearman相关为0.62，高于同列PESQ的0.05。原文未披露训练、推理或部署成本。作者承认众包设备与注意力不可控、VoiceBank+DEMAND训练与DNS2020测试的跨语料失配和不完全配对设计限制了结论强度，未来需要在实验室条件下重复验证。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/yxlu-0102/MP-SENet.git> → <https://github.com/yxlu-0102/MP-SENet> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/NikolaiKyhne/MambAttention.git> → <https://github.com/NikolaiKyhne/MambAttention> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/liduojia1/MeanFlowSE.git> → <https://github.com/liduojia1/MeanFlowSE> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/sp-uhh/storm.git> → <https://github.com/sp-uhh/storm> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/csteinmetz1/pyloudnorm> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音增强要解决什么输入输出问题

语音增强处理的输入是带噪声的录音，目标是从中推断出干净语音。论文讨论的场景是真实环境录音，噪声类型和混响条件多变，属于难逆问题。输出仍然是一段语音波形，要求保留说话内容和说话人可懂度，同时压低背景噪声。

对刚入门的读者，关键是理解评价必须回答两层问题：一是增强后语音在信号保真度、可懂度和感知质量上变好了多少，二是这种变好是否大到日常听众能听出来并且愿意选择。传统做法用语料级平均分比较系统，本文指出平均分拉开不等于听众能区分，更不等于有系统性偏好，这正是要补的评价缺口。

### 已有评价路线为什么不够

已有路线分为 3 类。第一类是人听的主观分类评价，论文提到 ITU-T P.800 的绝对评价、退化评价和比较评价，分别报告平均意见分、退化平均意见分和比较平均意见分，P.808 规定如何众包，P.835 规定用绝对评价分别对语音信号、背景和总体质量打分。这些方法给出质量高低，但不直接检验两个增强结果能否被区分。

第二类是需要干净参考的客观指标，如 SI-SDR、STOI 和 ESTOI、P.835 各维度的组合预测、PESQ 等。第 3 类是不需要干净参考的质量估计和对已有客观指标的无参考估计，如文中列举的非侵入式质量模型和 SQUIM 类模型。论文指出，当高性能系统分数越来越接近时，成对比较和微小差异的意义变得重要，近期 URGENT 挑战也暴露客观与主观评价不一致，因此需要把可区分性和偏好作为互补维度。

**侵入式指标 × 非侵入式指标：** 侵入式指标需要拿到干净参考语音才能计算差异或质量，如 PESQ、STOI、SI-SDR；非侵入式指标只看待评价信号本身估计质量，如 DNSMOS、NISQA、Score-Q，本文同时考察两类是因为真实录音往往没有干净参考，而成对差值能否代替人耳判断需要在两类中分别验证。

### 本文要回答的两个互补问题

本文把评价收紧为成对比较：对同一句话，比较系统 A 和系统 B 的输出，而不是各自打一个绝对分再比平均。第一个问题是区分问题，同一句话经两个系统处理后是否在感知上不同。第二个问题是偏好问题，如果不同或即使差别不大，日常听众是否系统性地更愿意日常收听其中之一，还是觉得无所谓。

这两个问题需要分开，因为信号可以听得出不同但听众并无偏好，也可以质量评分相近但仍被稳定区分。论文进一步问，常用客观指标的成对差值能否预测区分率和偏好，这决定了以后能否用便宜的客观差值代替昂贵的人听。

**可区分性 × 偏好：** 可区分性问的是同一句话经两个系统处理后听众能否听出不同，偏好问的是如果能听出不同或即使差别很小，听众在日常收听时会稳定选哪一边还是选无偏好，两者分工不同：前者是感知差异的存在性，后者是价值判断的方向和坚决程度，组合起来才能说明分数拉开是否真的重要。

### 整体框架如何组织两次人听测试

方法整体是同一批语音材料走两条人听分支，再与客观指标差值做关联。输入是同一句话经不同系统增强后的波形，先做响度归一化以减少音量带来的干扰，然后进入区分测试分支和偏好测试分支。区分分支用三角测试估计每句话每个系统对的可区分概率，偏好分支用带无偏好选项的成对比较估计果断性和偏好方向。

客观侧对同一句话同一系统对计算每个指标的成对差值，绝对差值对应区分和果断，带符号差值对应偏好方向，再用排序相关和心理测量函数建模关联。实验设计上采用不完全成对设计，用更多语音覆盖声学条件，代价是不同系统对评的是不同语音子集，系统对之间不能直接比高低。

**三角测试 × A/B/N 偏好测试：** 三角测试一次呈现三个刺激，其中两个相同、一个不同，让听众挑出不同的那个，回答正确率高于三分之一才说明可区分；A/B/N 偏好测试一次呈现两个刺激并允许选无偏好，用来分离听得出不同但无所谓和真正有方向性偏好两种情况，两者搭配才能避免把能区分直接当成有偏好。

### 成对差值和三角测试如何计算

客观侧先对同一句话计算两个系统分数之差，这是带符号的成对差，取绝对值后得到绝对差值，前者保留谁高谁低，后者只保留差距大小。三角测试中听众每次听同一句话的 3 个版本，其中两个来自同一系统，一个来自另一系统，位置随机，听众必须挑出不同的那个，不确定时也要求猜一个。

单次回答建模为伯努利试验，正确概率在完全猜测时为三分之一，多次回答汇总为二项分布，用单侧精确二项检验判断是否显著高于机会水平。每句话每个系统对的区分率用正确次数除以总次数估计，再在系统对内对语音取无加权平均，用自助重采样得到置信区间。客观绝对差值与区分率之间用斯皮尔曼排序相关衡量单调关联，并用带三分之一机会下限的逻辑心理测量函数拟合随差值增大而上升的趋势。

\[\Delta m_{u,A,B}=m(x_{A})-m(x_{B}),\]

\[D^{(m)}_{u,A,B}=|\Delta m_{u,A,B}|=|m(x_{A})-m(x_{B})|.\]

\[\hat{p}^{D}_{u,A,B}=\frac{k_{u,A,B}}{n_{u,A,B}},\]

**绝对指标差值 × 带符号指标差值：** 绝对指标差值取两个系统客观分数之差的绝对值，用来对应区分率和果断性这类只关心差别大小不关心谁高谁低的量；带符号指标差值保留正负，用来对应偏好方向这类关心谁更好的量，两者分工明确，不能混用。

### 偏好测试的果断性和方向如何统计

偏好测试每次呈现同一句话的两个版本，听众选择更愿意日常收听的版本，或选无偏好。分析分两步：先看是否愿意表态，再看表态的方向。果断性是选 A 或选 B 的次数占全部次数的比例，估计听众表达偏好的概率；偏好方向是选 A 比例减去选 B 比例，取值在负一到正一之间，正值偏向 A，负值偏向 B，绝对值大小同时受一致性和果断性影响，无偏好回答按零值计入。

建模上果断性随绝对差值用无机会下限的逻辑函数拟合，偏好方向随带符号差值用双向逻辑函数拟合。同时计算区分率与果断性之间的排序相关，检验听不出来时是否倾向于选无偏好这一预期。

\[\hat{p}^{\mathrm{dec}}_{u,A,B}=\frac{N_{A}+N_{B}}{N_{A}+N_{B}+N_{N}},\]

\[\hat{S}_{A,B}=\frac{N_{A}-N_{B}}{N_{A}+N_{B}+N_{N}},\qquad\hat{S}_{A,B}\in[-1;1],\]

**果断性 × 偏好方向：** 果断性统计听众在多大比例试验中愿意选出 A 或 B 而不选无偏好，反映偏好表达的活跃程度；偏好方向进一步统计选 A 减去选 B 后的净方向，取值在负一到正一之间，反映偏向哪一边以及一致性多强，两者结合才能区分高果断但方向分散和低果断但方向一致这两种完全不同的结果。

### 本研究训练了什么以及实际执行了什么计算

本研究没有训练新的语音增强模型，也没有训练新的评价模型。4 个被评系统都是已有公开模型，直接用公开检查点做推理：判别式模型 MP-SENet 和 MambAttention，生成式模型 MeanFlowSE，以及混合模型 StoRM，全部在 VoiceBank 加 DEMAND 数据上训练过。

实际执行的计算包括：从 DNS2020 测试集随机抽 45 句话并截断到 4 秒，调用 4 个检查点得到增强波形并做响度归一化；对每个系统输出计算一系列侵入式和非侵入式客观指标；在众包平台组织区分和偏好两组试验并做耳机筛查；最后计算成对差值、区分率、果断性、偏好方向、排序相关和心理测量拟合。论文致谢提到生成式人工智能协助编写实验和绘图脚本，拼写语法用了辅助模型，但这不改变上述无新模型训练的性质。

### 语音材料系统对和众包流程如何安排

语音材料是 45 条 DNS2020 测试语音，每条截断到 4 秒。系统包括 4 个增强模型加 DNS 数据集自带的干净参考，两两配对共 10 个系统对。每句话评 3 个不同的系统对以平衡系统和系统对出现次数，共 135 个语音与系统对条件。每名参与者区分块和偏好块各做 30 次试验，每次试验评 1 个条件，同一句话在同一块内只出现一次，并尽量避免同一参与者在两块中评到相同的语音与系统对组合，以减少熟悉效应。

三角试验的呈现顺序随机并平衡，两个块的先后顺序也随机以平衡熟悉和疲劳。共有 92 名自报无已知听力损伤的志愿者匿名参加，通过耳机筛查，筛查未通过者被排除且不计入总数。客观指标覆盖侵入式和非侵入式多款模型，含干净参考的条件在计算侵入式指标相关时被排除，因此侵入式相关基于 81 个条件，非侵入式基于 135 个条件。

### 区分测试看到多大差异

总体上听众能可靠区分不同处理。全部分组汇总的正确率为 1775 比 2541，约 0.7，显著高于 3 分之一的机会水平。但平均数掩盖了系统对和语音 2 个方向的变异。

下图按系统对展示区分率，每个空心点是一个语音与系统对条件，实心点是该系统对内对语音的平均，误差棒是自助重采样的置信区间。可见所有系统对的平均都高于机会水平，但高低不同，StoRM 对干净参考最高，平均约 0.83，MambAttention 对 MeanFlow 最低，平均约 0.56。由于不同系统对评的是不同语音子集，这些平均值只能描述性比较，不能直接排名。

> **看图路径：** 1. 看横轴十个系统对的黑点平均区分率是否都高于三分之一虚线；2. 比较 StoRM 对干净参考与 MA 对 MF 两端的黑点高低和误差棒重叠；3. 看每个系统对内部空心点的垂直分散，理解语音依赖性

[![原论文 Figure 1：Triangle test discrimination rate across system pairs.](https://arxiv.org/html/2610.36892v1/triangle_discrimination_system_pairs.svg)](https://arxiv.org/html/2610.36892v1/triangle_discrimination_system_pairs.svg)

*论文图 1。原论文 Figure 1:：“Triangle test discrimination rate across system pairs.”。*

图中确实可见所有黑点都在机会虚线之上，右端 MA 对 MF 最低，左端干净参考相关条件较高，但每个系统对内部空心点上下分散明显，说明同一系统对在不同语音上可区分性不同。误差棒在部分系统对上重叠，也支持不能简单跨对排名的判断。

下表整理总体和两端条件的数字，单位为比例，越大表示越容易被区分。

| 条件 | 统计对象 | 区分率 |
| --- | --- | --- |
| 全部回答汇总 | 正确数比总试验数 | 1775 比 2541，约 0.7 |
| StoRM 对干净参考 | 系统对内语音平均 | 0.83 |
| MambAttention 对 MeanFlow | 系统对内语音平均 | 0.56 |
| 不同语音的平均区分率 | 语音间范围 | 0.34 到 1.0 |

0.7 是全部试验汇总，0.83 和 0.56 是系统对内对语音的无加权平均，两者聚合方式不同；0.34 到 1.0 是按语音平均后的范围，说明声学证据本身带来很大变异，有限重复次数的测量噪声也会贡献一部分变异，因此系统级平均可能掩盖单句上感知重要差异。

### 语音本身带来多大变化

把同一结果按语音重排后，语音依赖性更直观。下图每个空心点仍是 1 个条件，实心点是该语音在所评系统对上的平均，横轴语音按平均区分率从高到低排列。

> **看图路径：** 1. 沿横轴语音从左到右看黑点平均区分率的下降趋势；2. 看同一语音下空心点的分散，理解同一句话在不同系统对下差异不同；3. 注意右端接近或低于机会线的语音，说明并非所有语音都可区分

[![原论文 Figure 2：Triangle test discrimination rate across utterances.](https://arxiv.org/html/2610.36892v1/triangle_discrimination_utterances.svg)](https://arxiv.org/html/2610.36892v1/triangle_discrimination_utterances.svg)

*论文图 2。原论文 Figure 2:：“Triangle test discrimination rate across utterances.”。*

图中确实可见黑点从左端接近 1.0 一路下降到右端约 0.3 附近，左端语音在多个系统对下都容易被区分，右端语音接近机会线。同一语音内部空心点也有明显垂直分散，说明同一句话在不同系统对下可区分性也不同。论文指出三角测试本身不能识别是语音的哪种声学属性导致这种变异，且被评样本来自与模型训练不同的语料，声学失配可能引入与语音相关的变异，这是结论成立的重要条件。

### 偏好测试中何时表态又偏向谁

偏好侧先看果断性。全部试验中听众在 68% 的试验中选了某一系统，略低于总体可区分性，符合能区分但不一定有偏好的预期。下图按系统对展示果断性，空心点为单条件，实心点为语音平均。

> **看图路径：** 1. 看 MF 对干净参考和 MF 对 StoRM 两端果断性黑点的高低；2. 比较误差棒和空心点分散，理解系统对间可比性受限的原因；3. 对照区分率图，看高区分是否对应高果断

[![原论文 Figure 4：Decisiveness of the preference test across system pairs.](https://arxiv.org/html/2610.36892v1/preference_decisiveness_system_pairs.svg)](https://arxiv.org/html/2610.36892v1/preference_decisiveness_system_pairs.svg)

*论文图 4。原论文 Figure 4:：“Decisiveness of the preference test across system pairs.”。*

图中确实可见 MF 对干净参考果断性最高，平均约 0.84，其次是 StoRM 对干净约 0.79，MeanFlow 对 StoRM 最低约 0.51。每个系统对内部仍有很大语音级变异，解读方式与区分图相同。高果断不等于有方向，方向需要看偏好方向图：与 MA 和干净参考比较时，MF、StoRM 和 MP 倾向于偏向后者，MF、StoRM、MP 三者之间没有清晰偏好，平均而言 MambAttention 与干净参考被同等偏好。

下表把果断性和关键相关数字放在一起，果断性为比例，相关为排序相关系数，越大表示单调关联越强。

| 条件或指标 | 对象 | 数值 |
| --- | --- | --- |
| 全部偏好试验 | 表达偏好的比例 | 68% |
| MF 对干净参考 | 语音平均果断性 | 0.84 |
| StoRM 对干净参考 | 语音平均果断性 | 0.79 |
| MeanFlow 对 StoRM | 语音平均果断性 | 0.51 |
| SQUIM-STOI 对区分 | 排序相关 | 0.62 |
| Score-Q 对区分 | 排序相关 | 0.59 |
| Distill-MOS 对区分 | 排序相关 | 0.51 |
| PESQ 对区分 | 排序相关 | 0.05 |

果断性高低与偏好方向是否集中是两回事，高果断系统对可能方向分散，因此必须同时报告两者。客观侧与果断性和偏好方向的相关格局与区分侧类似，Score-Q 和 SQUIM 类较高，PESQ、SI-SDR、DNSMOS 较弱，但这些相关基于特定语音子集和特定系统组合，换语料或系统可能变化，不能推广为指标优劣的一般排名。

### 客观指标差值能否预测区分和偏好

论文用排序相关检验客观差值与人听的单调关联。下图以 PESQ 和 SQUIM 估计的 STOI 为例，上排是区分率随绝对差值的变化并叠加带机会下限的心理测量拟合，下排是偏好方向随带符号差值的变化并叠加双向逻辑拟合。

> **看图路径：** 1. 对比上排 PESQ 近乎水平的拟合线与 SQUIM-STOI 陡峭的 S 形曲线；2. 看下排偏好方向随带符号差值变化时两者的斜率差异；3. 注意散点围绕曲线的离散程度，理解相关系数高低的来源

[![原论文 Figure 3：Empirical discrimination rate (3) and preference direction (2.2) a function of paired difference…](https://arxiv.org/html/2610.36892v1/discrimination_preference_2x2.svg)](https://arxiv.org/html/2610.36892v1/discrimination_preference_2x2.svg)

*论文图 3。原论文 Figure 3:：“Empirical discrimination rate (3) and preference direction (2.2) a function of paired difference of PESQ and SQUIM_STOI.”。*

图中确实可见左列 PESQ 散点平坦，拟合线几乎水平，对应区分相关约 0.05、偏好方向相关约 0.31；右列 SQUIM-STOI 散点随差值增大而明显上升，拟合呈陡峭 S 形，对应区分相关约 0.62、偏好方向相关约 0.62。这说明同样是常用指标，预测能力差异很大，不能把指标名的流行程度当成预测感知差异的能力。

更完整的对比是，SQUIM-STOI、Score-Q、SQUIM-PESQ、Distill-MOS 等非侵入式或无参考估计与区分和果断的相关较高，而 PESQ、SI-SDR、DNSMOS 等常用指标相关较弱。需要提醒的是，含干净参考的条件在侵入式指标中被排除，样本量不同，且相关不等于因果，两个信号质量评分相近仍可能被轻易区分，因为质量相似不等于感知相同。

### 哪些因素可能干扰结论

论文明确列出多项局限。众包带来不可控变异，包括播放设备、声压、注意力、误触、背景噪声、语言熟练度和背景，每条件有限重复次数也会带来测量噪声，因此部分语音间变异可能来自噪声而非声学本质。

不完全成对设计用更广的声学覆盖换取了系统对间可比性，不同系统对评不同语音，语音级平均只能描述性比较。被评语音来自与训练不同的语料，声学失配可能放大与语音相关的变异。所有被试客观指标本来测量的是质量、可懂度等因素而非感知相似性或偏好，直觉上两个信号质量相近仍可被区分，因此低相关不意外，也不能反过来指责这些指标无用。

来源可达性方面，文中脚注给出 4 个模型和响度归一化工具的第三方链接，本次核验显示这些第三方链接当前可达，但这只证明论文提到该链接，不证明作者已开源本研究的完整实验框架，论文正文称听测试框架和材料将在接收后公开，复现时应以实际公开状态为准。

### 要复现评价第一步做什么

复现的第一步是重建相同的语音与系统对条件：准备 45 条 DNS2020 测试语音并截断到 4 秒，用 4 个公开检查点推理得到增强结果并做响度归一化，再按论文的不完全配对方案生成 135 个语音与系统对条件，保证每句话评 3 个系统对并平衡出现次数。

第二步是搭建两个众包块：三角块随机化 3 个刺激的 6 种排列并平衡，偏好块呈现两个刺激并提供无偏好选项，块顺序随机，每个参与者每块 30 次试验，同一句话在同一块只出现一次，并尽量避免同一人在两块中重复同一语音与系统对，同时做耳机筛查。第三步是对同一条件计算客观指标及其成对差值，注意侵入式指标在含干净参考条件下的处理与论文一致，区分率、果断性、偏好方向按原文公式统计，再计算排序相关和心理测量拟合。

需要澄清的是，本文作者的听测框架与实验脚本在本轮资源核验中未被确认为当前可用，不应表述为已公开或可直接获取，论文原文仅写接收后公开；论文中提到的第三方模型仓库可达，仅证明原文提到该链接，不证明作者资源已开源，动手前应先确认作者资源当前是否可用。

### 什么时候值得用这套互补评价

当多个增强系统在常用客观或主观平均分上已经很接近，但仍需判断差异是否可感知、是否值得为之付出复杂度或 artifacts 代价时，这套区分加偏好的成对框架值得尝试。它适合在系统选型后期做细粒度比较，也适合检验新客观指标是否真能反映感知差异。

还需要补的验证包括受控实验室复测、更多重复判断以降低测量噪声、与 ITU 分类评价的直接比较，以及用概率选择模型同时考虑听众和刺激变异并检验传递性。

总体结论应限定在本文条件下成立：4 个特定系统、45 条 DNS2020 语音、众包环境、特定指标集合下，系统间可区分且区分程度高度依赖语音，果断性与方向是两回事，多数常用客观差值对两者预测不稳定。超出该范围的推广需要重新取样和复测，不能把一次相关高低当成指标或系统的一般优劣。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.36892v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-29 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-29/)
