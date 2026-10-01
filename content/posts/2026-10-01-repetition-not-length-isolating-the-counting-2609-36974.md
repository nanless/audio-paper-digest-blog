---
title: "Repetition, Not Length: Isolating the Counting Failure in Neural Text-to-Speech"
date: 2026-10-01
draft: false
tags: [文本到语音, 评测协议, 幻觉与忠实度, 基准测试]
categories: [论文速递]
description: "论文用长度匹配的重复与对照配对证明重复本身导致语音合成计数失败，在 k≥6 时对照组 94.3% 完全正确而重复组仅 18.2%，且该差距经解码、识别器和分析规格多重检验仍稳定存在。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.36974"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "重复打败长度：神经语音合成数不清重复的受控分离"
paper_digest_original_title: "Repetition, Not Length: Isolating the Counting Failure in Neural Text-to-Speech"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.36974"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.36974.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "a3b75a149852076933ec2895de77c09c73667c8334bff046dde3b20b69ded03d"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.evaluation-protocol","label":"评测协议"},{"facet":"research_focus","id":"research_focus.hallucination-faithfulness","label":"幻觉与忠实度"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "评测协议"
paper_digest_score: 8.4
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文用长度匹配的重复与对照配对证明重复本身导致语音合成计数失败，在 k≥6 时对照组 94.3% 完全正确而重复组仅 18.2%，且该差距经解码、识别器和分析规格多重检验仍稳定存在。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kirill Borodin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Vasilii Kudryavtsev"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Maxim Maslov"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Grach Mkrtchian"}]
paper_digest_abstract_sha256: "32fa1f21beaa3da5dcd9de8b4c68a5b5b16eb3bbb912427d97a3b52647ba0dfb"
paper_digest_sidecars: {"citation.bib":{"sha256":"b50f9d53e2661ad35d4568183b8750c940356b8039e7f64abcc404db6feaf96c","url":"/audio-paper-digest-blog/data/papers/2026-10-01/2609-36974/citation.bib"},"citation.json":{"sha256":"4e4fabd3caf071efdc35dabce27cb43a219d17ac2051d4d13d76c91b1e62da1f","url":"/audio-paper-digest-blog/data/papers/2026-10-01/2609-36974/citation.json"},"citation.ris":{"sha256":"4c1eb80699d6739ddf3c1b43f347d00497bb28928056fd666d72a0622d3b7f8a","url":"/audio-paper-digest-blog/data/papers/2026-10-01/2609-36974/citation.ris"},"rethink-context.json":{"sha256":"3063b8b0340ea33cf6c13a0d6035c37c65be240a0bac847cfe28fa9a20099008","url":"/audio-paper-digest-blog/data/papers/2026-10-01/2609-36974/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "4b5598cb4d3a9d12852fceed672e35e59cfab40f69fdd43ade09ee4b49363cf6"
paper_digest_api_reader_plan_sha256: "f45c6be3dd8e98724ebde9da30e3e2ef042008add5e6f261daad0cd0b3c82229"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "c7d598140609f2712467af0da4ed3752be105ae8a7aadebfbbcf0b312e761562"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "1541a65d9fbc93f70181e27396e7d967b06777e25174e4d49625b88e714a18c8"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "a15e77e547e249a5da0365501b08bc1d4da1c0f01ba3a10e81b66dfe14a12b21"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "b258c53162efbcc57a72637702d1c07d428eb5a74e6406152293ed9e8e16916a"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 重复打败长度：神经语音合成数不清重复的受控分离

> 英文题目：*[Repetition, Not Length: Isolating the Counting Failure in Neural Text-to-Speech](https://arxiv.org/abs/2609.36974)*

> 标签：#文本到语音 | #评测协议 | #幻觉与忠实度 | #基准测试
>
> 评分：**8.4/10** | 创新 1.6/2 | 技术严谨 1.3/1.5 | 实验充分 1.4/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Kirill Borodin：机构信息未在 arXiv HTML 中可靠披露
- Vasilii Kudryavtsev：机构信息未在 arXiv HTML 中可靠披露
- Maxim Maslov：机构信息未在 arXiv HTML 中可靠披露
- Grach Mkrtchian：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

神经文本到语音需将含重复短语的文本合成为语音并准确呈现重复次数，输入为载体句中目标词或整句重复k次的文本，输出为对应音频中的实际重复数，实际难点在于重复带来的计数失效与长度增长效应相互混淆。方法先由确定性脚本生成字词载体与重复次数阶梯及词数匹配但消除相邻重复的对照项，其输出直接进入合成环节。接着六个自回归检查点与非自回归基线分别渲染重复与对照音频，再由无自回归偏置的联结时序分类识别器转写并计数，最后以分层统计与规格曲线验证稳健性。与已有归因的关键差异在于对照项保留载体与词数而消除相邻重复，从而将长度账户的预测明确为两条曲线重合，使重复效应可被分离，实际意义在于定位失效来自重复性而非时长预算。在k≥6重复计数评测条件下，重复文本的准确率为18.2%，低于对照文本的准确率94.3%。该结论的适用边界受限于训练频率混杂与跨架构分裂，周期性机制的外推范围尚未验证。结论边界在于训练频率混杂未被分离，跨语言泛化未经验证，周期排序与乱序效应的方向存在架构分裂，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/lab260ru/tts-counting-failure> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要解决的计数失败长什么样？

这篇论文的输入是英文文本转语音的合成任务，目标是让模型把文字读成自然语音。初学者需要先建立的概念是稳定性：当输入要求把一个词重复很多遍时，模型可能少读、多数或陷入循环。论文把这种现象称为计数失败，而不是泛泛的发音不自然。学习时要保留的关键信息是，重复次数增加同时带来两个变化，一是文本变长，二是文本变重复，如果不做控制就无法判断是哪一个导致失败。

论文的输出是一套可复述的分离方法与测量结果，明确回答在长度完全相同时重复是否仍然破坏计数。本文默认读者已了解自回归语音合成逐 token 生成的基本流程，不需要先掌握声码器细节。举例来说，载体句固定为类似小狗跑过田野的日常英语，中间插入目标词非常的多次重复，任务就是数合成语音里到底出现了多少次目标词。论文声明测试文本是作者编写而非从语料抽取，因为每个句子必须包含已知次数的目标词。

代码当前可用，已公开在地址上，测试集脚本与分析代码一并发布，这为复现提供了起点。

### 已有解释为什么把长度和重复混在一起？

进入该领域的研究生常先看到两类相关路线。一类把循环与截断归因于曝光偏差或缺少对齐约束，提出在注意力监督或解码规则上打补丁。另一类把语音退化类比为文本神经退化，认为长输入本身更难。论文指出这两类报告都混淆了变量，因为把一个短语重复 k 次既增加长度又增加重复性。另一条更接近的路线是表征坍缩与计数能力研究，讨论 Transformer 能数到多少，但那些结论是模型属性，不随输入周期变化。

论文与它们的区别在于设计了长度匹配对照，使长度解释做出可证伪预测：若长度是原因，则重复臂与对照臂曲线应重合。论文还正面检验了一个具体的收缩解释，即重复条件使解码器状态向不动点收缩从而无法恢复计数，并给出测量方案而不是停留在比喻。理解这层对照关系后，才能明白后文为何花大力气做判分器审计与周期梯子。

### 要分离的两个变量如何变成可测问题？

论文把问题形式化为配对比较。每个重复条目都有一个长度匹配的对照双胞胎，两者共享同一载体句前缀后缀和总词数，唯一差别是 k 个拷贝是同一词的毗邻重复，还是按固定顺序从 8 词填充池取出的互不相邻的不同词。当 k 超过 8 时填充池会循环，此时对照本身变为周期 8，论文另设从不循环的变体来量化差异。评价时用识别器转写合成语音，再按顺序非重叠地数目标出现次数，记为估计数。相对计数误差定义为估计数减 k 再除以 k，负值表示少读。

完全正确率指估计数恰等于 k 的生成比例。差距指对照完全正确率减重复完全正确率，以百分点表示，从重复侧看也称为缺口。headline 分析覆盖词重复梯子及其对照，其他句重复、绕口令和数字短语放在补充材料。初学者容易误把百分点差距读成相对百分比，论文明确差距是两率相减的点数，不是相除的比例。

### 整体方法如何走完从文本到判断的全程？

沿一个样本走完全程有助于建立依赖。输入例如载体加重复 k 次的目标词，模型在出厂默认解码下各用 3 个种子渲染全部条目，得到音频。音频送入判分识别器得到转写，再用有序扫描计数得到估计数并与 k 比较。对照样本走同样流程，只是 k 个位置填入不同词。比较两臂的完全正确率曲线即可判断长度解释是否成立。

若两曲线重合则长度足以解释，若从某个 k 开始分离则重复是独立破坏因素。论文还安排了第二条周期梯子，在固定载体词数和请求数下只改变周期 p，观察正确率是否随 p 平滑上升。机制侧则记录深层逐 token 隐状态，计算轨迹有效秩随 log k 的增长斜率，并在重复与对照之间比较。

**重复文本 × 长度匹配对照：** 重复文本指同一目标词按 k 次连续出现的输入，负责引入周期性；长度匹配对照指把 k 个拷贝换成互不相同的填充词而保持载体句和总词数不变，负责固定长度与时长。两者配对的理由是只有同时固定长度才能把计数失败归因于重复，组合意义是形成一一对应的双臂比较，直接检验长度解释是否成立。

论文的测试集共 180 条，确定性脚本生成，词重复与对照跑 k 为 1、2、3、4、6、8、12、16、24、32 的梯子，句重复与绕口令按各自上限与计数方式组织。目标词选常见一到两音节、无近似同音词的词，载体为日常英语，以降低判分器误转写的噪声。自然度检查显示对照反而是更不可能的文本，因此不能用对照更自然来解释对照表现更好。

### 模型面板与判分器各自承担什么分工？

模型面板由 3 个架构的 6 个检查点组成，包括 Llasa 的 1B、3B、8B，Qwen3-TTS 的 0.6B、1.7B，以及 XTTS-v2。面板之外还有 VITS 和 F5-TTS 作为非自回归基线，CosyVoice 2 作为分析冻结后才引入的第四架构，以及惩罚、贪心与采样的消融臂。每个系统在出厂默认下渲染每个条目 3 次，Qwen3-TTS 默认最随机，因此其大检查点上较小的计数误差差距不能解释为保守解码。判分器选择是方法关键。自然选择 Whisper large-v3 不适合此处，因为它的解码器自带语言模型先验，在恰好被研究的重复音频上产生幻觉。在已知计数的拼接音频上，Whisper 在返回结果的 48 次试验中只恢复中位 0.25 的计数，另 60 次共 108 次中无任何转写，而 CTC 判分器在同样音频上恢复 1.00。

**自回归解码 × 非自回归基线：** 自回归解码指逐个声学 token 依赖历史生成语音，负责在状态中累积计数；非自回归基线指并行预测时长或一次性去噪生成整段语音，负责提供不依赖逐步历史的对照。两者搭配的理由是判断失败是否来自自回归特有的循环机制，组合意义是 VITS 与 F5-TTS 的不同表现把问题指向计数信息放在何处而非是否自回归。

因此主文采用无自回归解码器、无内部语言模型的 wav2vec2 CTC 模型做判分，贪心最佳路径且无语言模型。补充材料用 4 个独立识别器复刻，并报告排除规则。排除规则对计数是盲的，包括判分器无法转写的模板、自家 token 预算与退化音频，共保留 2052 次中的 1558 次，每个分析的样本量 n 各不相同。

### 本研究训练了什么，没有训练什么？

本研究没有训练任何语音合成模型，这一点必须明确。所有检查点都是公开发布的已有权重，论文只做调用与测量，不更新参数，不存在梯度路径与优化步骤。真实计算过程是推理渲染加离线分析：用各系统出厂解码设置生成音频，用 CTC 识别器转写并计数，用线性拟合与混合效应等统计模型汇总差距，用教师强制前向或生成内读出捕获隐状态以计算有效秩与收缩因子。判分器同样没有为本任务训练，只是选用已有识别器并在合成真值上审计。

由于无训练，不能把冻结参数理解为输出确定，采样种子与解码随机性仍会改变结果，论文因此每个条目跑 3 个种子。未报告的缺项是各系统的具体训练数据中重复文本频率，论文承认重复与训练集频率未分离，只是用独立语言模型似然指出明显混淆的方向相反。

**CTC 判分器 × Whisper 判分器：** CTC 判分器指基于 wav2vec2 逐帧分类、无语言模型先验的识别器，负责如实转写重复语音以便计数；Whisper 判分器指带自回归解码器和语言模型先验的大模型，负责说明为何不能用它做裁判。两者搭配的理由是裁判本身也可能在重复音频上产生幻觉，组合意义是用已知计数的拼接音频标定两者，只有 CTC 达到 1.00 才被选为主判分器。

自然度证据需要先说明比较问题：在长度相同条件下，哪一臂文本在独立语言模型下更可能，比较是否公平，指标方向是 NLL 越低越可能，占比越高说明对照越罕见。

| Scorer | NLL/token | NLL/token | ctl. less probable |
| --- | --- | --- | --- |
| phi-2 | 3.69 | 4.89 | 87 |
| GPT-2-large | 3.36 | 5.34 | 100 |

表中显示两个打分器一致指向对照更不可能，GPT-2-large 上全部配对都是对照更不可能。这支持论文判断，即便重复文本更自然，模型仍在重复臂上失败，因此自然度不能解释缺口。但该证据只覆盖文本似然，未测量声学难度，仍需后文解码与识别器对照来补强。

### 测试集与指标如何保证数的是重复次数？

测试集细节决定可复述性。词重复有 6 个载体模板，每个固定前缀、目标与后缀，填充池各 8 词，用于构建同 k 对照。k 梯子覆盖 1 到 32，句重复、绕口令与数字短语按各自规则组织，总计 180 条。下表先给出条目家族划分，帮助复现时核对数量与考察目标。

表前需要明确比较对象是不同家族的条目数与考察目标，不涉及模型好坏，指标是计数与家族定义，公平条件是同一生成脚本确定性产生。

| Family | Count | What it tests |
| --- | --- | --- |
| word repetition | 60 | a single word repeated kk times in a fixed carrier |
| matched control | 54 | the same carrier, kk distinct filler words (no repetition) |
| sentence repetition | 32 | a whole short sentence repeated kk times |
| tongue twisters | 24 | a twister sentence (with internal repetition) repeated kk times |

表后解释是词重复与匹配对照构成主梯子，句重复与绕口令检验不同粒度，数字短语检验内在 digit 词重复而非毗邻重复。复现时先跑通词重复梯子，再扩展到其他家族，未胜出的是数字与绕口令只做行为测量而不进入状态探测。

载体模板与填充池必须逐字使用，否则对照的长度匹配与词汇难度都会改变。表前问题是 6 个模板的前后缀与目标词是否固定，填充池是否为每模板 8 词，指标是文本构造一致性，公平条件是同一模板内配对。

| ID | Prefix | Target | Suffix | Filler pool (for the control) |
| --- | --- | --- | --- | --- |
| t1 | The dog was | very | big and it ran across the field. | quite, really, truly, fairly, rather, somewhat, extremely, notably |
| t2 | She said | no | to the offer and then left the room. | yes, maybe, sure, fine, okay, well, right, hmm |
| t3 | He walked | far | into the forest before turning back. | deep, fast, long, wide, high, low, near, past |
| t4 | The light was | blue | before the storm arrived. | green, bright, pale, dim, warm, cold, sharp, soft |
| t5 | The runner moved | quick | along the narrow path. | swift, smooth, steady, light, sharp, loose, tight, clean |
| t6 | They were | really | tired after the long journey. | truly, quite, very, rather, deeply, clearly, plainly, surely |

表后说明是目标词均为短而常见的词且与填充词发音可分，填充池按固定顺序循环取用。t2 模板的填充词 CTC 判分器无法转写，后文排除规则会处理，复现时不应自行替换词表。计数时采用有序非重叠扫描并跳过未识别词，而不是遇到第一个缺失就停止，否则对照臂每个填充词缺失都会作废后续计数。正确性要求估计数恰等于期望数，且在补充的时长比检查中落在区间内才算正确。排除的退化音频单独报告发生率，不作为大负误差计入。

### 长度固定后重复臂与对照臂差多少？

主结果是图 1 左面板展示的分离。从 k=6 起长度匹配对照保持在 94.3% 完全正确，而重复项从 k=6 的 40.5% 跌至 k=32 的 6.8%，合并为 18.2%。k 小于 6 时两曲线不分离，论文归因于转写噪声同时影响两臂。重复项中位计数误差为每检查点 -12.5%，对照为 0.0%，6 个检查点中有 5 个如此，第六在该指标上打平但完全正确率仍落后 60 点。未排除前在 k≥8 时 51.3% 截断或少计，36.3% 循环或多计。

统计上差距在 6 个检查点与 3 个家族为正，混合效应 6 种区间构造都排除零。部分池化预测未见架构差距为 65.3 点，区间很宽，held-out 的 CosyVoice 2 实测 64.4 点，落在预测一点之内。420 种规格下差距 34.4 到 86.4 点，中位 70.5，无 1 次反号。

图前导读完整覆盖对象条件与时间范围：左图为完全正确率随请求重复数 k 的变化，包含重复与对照两条件与多个检查点在 k=1 到 32 的全部梯子；右图为固定载体词数与请求数下正确率随周期 p 的变化，包含 4 个检查点。请按图例先确认实线重复与虚线对照，再读纵轴为原始正确率而非改善量。

> **看图路径：** 1. 先看左图横轴重复次数 k 与纵轴完全正确率，区分实线重复臂与虚线对照臂在 k=6 前后的走向；2. 再看右图横轴周期 p，确认在固定载体词数和请求数下正确率随 p 平滑上升；3. 注意左图低 k 区两臂都不完美，右图空心标记为全不相同的 p=k 项位置偏低；4. 对比不同颜色检查点是否都呈现相同的分离方向

[![原论文 Figure 1：The repeated–control dissociation, in the paper’s headline metric.](https://arxiv.org/html/2609.36974v1/fig_main.svg)](https://arxiv.org/html/2609.36974v1/fig_main.svg)

*论文图 1。原论文 Figure 1:：“The repeated–control dissociation, in the paper’s headline metric.”。*

左图显示对照虚线在高 k 仍贴顶，重复实线自 k=6 后坍塌，说明长度相同仍分离。右图显示正确率随周期平滑上升而非台阶跳变，空心全不同项低于周期 8，提示词汇混淆存在但不是主因。像素不能精确读出的具体数值不要硬写，应以正文表格的 10.4%、47.9%、73.6%、93.1% 等合并数为准。同色不必然同对象，需按图例把颜色对应到具体检查点，不能把某条上升曲线推广为全面板。

状态容量测量进一步显示重复文本新增可区分状态的速度仅为对照的 0.46 倍中位，检查点层面差距为每单位 log k 相差 24.7 个状态。下表给出每检查点的容量增长斜率与饱和上限，重复与对照并列，表前比较问题是在相同 k 梯子上谁更快积累新状态，公平条件是同一 136 条子集与同层探测，有效秩斜率越大表示容量增长越快。

| Model | capacity gain | capacity gain | ceiling | ceiling |
| --- | --- | --- | --- | --- |
| Llasa-1B [20] | 18.2 [9.8,25.7] | 56.7 [50.9,63.5] | 181 | 247 |
| Llasa-3B [20] | 12.4 [−1.8,23.3] | 58.9 [52.8,68.0] | 178 | 249 |
| Llasa-8B [20] | 15.0 [11.0,20.3] | 45.5 [37.2,53.1] | 188 | 228 |

表后解释是 3 个 Llasa 检查点重复斜率全面低于对照，上限也全面更低，但斜率仍远离零，因此是变慢而非停滞。Llasa-3B 重复斜率区间包含零，统计不确定性更大，不能单独作为停滞证据。未胜出项是 Qwen3-TTS-1.7B 两臂最接近，它也是计数最好的检查点，提示容量差距与行为差距方向一致但不能证明因果。

探针解码在 k=48 到 128 的延伸中显示请求数仍部分可解码，但 Qwen 两点的恢复可被纯音频长度预测达到，说明残留信号未必编码计数。下表为探针误差相对常数预测的比例，低于 1 表示仍可解码，表前问题是超过主梯子后隐状态是否还保留计数，公平条件是同折交叉验证与同 k 对照，指标方向是比例越低解码越好。

| Checkpoint | repeated | control |
| --- | --- | --- |
| Llasa-1B [20] | 1.01 | 0.86 |
| Llasa-3B [20] | 0.99 | 0.83 |
| Llasa-8B [20] | 0.86 | 0.59 |
| Qwen3-TTS-0.6B [8] | 0.74 | 0.95 |
| Qwen3-TTS-1.7B [8] | 0.90 | 0.89 |

表后解释是 Llasa-1B 与 3B 在重复臂上已不优于常数预测，Llasa-8B 与 Qwen 两点仍低于 1，但后者存在长度混淆。限制是 XTTS-v2 因 token 上限未跑该延伸，不能推广到它。k=48 到 128 的中位渲染数也显示重复臂随请求增加反而回落，而对照继续爬升，支持缺陷在绝对量上发散。

### 换解码、换识别器与换周期后差距还在吗？

解码规则不是原因。三 Llasa 检查点本身无重复惩罚仍显示 78.9 点差距。在 XTTS-v2 与 Qwen3-TTS-0.6B 上把惩罚扫过数倍范围，差距保持在 15.6 到 21.1% 与 7.8 到 16.7% 完全正确区间内。Qwen3-TTS-0.6B 去掉惩罚后仍是 10.0% 对 100.0%。贪心解码与重复感知采样也未消除差距，贪心 72.2 点，采样 75.0 点，RAS 开 94.3 点关 92.1 点。

排除规则全关后差距 61.7 点，token 预算规则不平衡但方向保守，去掉它只会放大差距。四识别器重打分差距 65.1 到 76.7 点，重复臂跨识别器仅波动 1.0 点而对照臂波动 12.2 点，说明动的是模型做对的一臂而非裁判坍缩。

**周期 × 毗邻重复：** 周期指文本循环所用不同词的个数 p，负责度量重复的结构强度；毗邻重复指同一词紧挨着出现，负责检验失败是否只是分不清相邻相同 token。两者搭配的理由是 p=2 时已无任何词与自身相邻，若失败仍保留一半则说明问题超出毗邻混淆，组合意义是把失败刻画为随周期平滑变化的 graded 缺陷而非全或无的台阶。

周期梯子在固定载体词数和请求数下只变周期，正确率 10.4、47.9、73.6、93.1% 随 p=1、2、4、8 单调上升，四检查点各自单调。关键是 p=2 已无毗邻相同 token，但最严规则下仍保留 0.547 的缺口，其他规则 0.69 到 0.86。奇数 p=3 与非 2 幂 p=6 落在邻居之间，逗号句号与 and 分隔几乎无恢复，打乱顺序在两 Qwen 上恢复、在 Llasa-1B 为 null、在 XTTS-v2 反转，因此标题只 claim 重复而非周期。非自回归基线中 VITS 无分离而 F5-TTS 有 60 点差距，给定正确总时长后 F5-TTS 在 k 小于 12 从 43.3% 升至 76.7% 而 k≥12 无改善，说明轻端是时长估计问题，重端仍无法排布重复。

### 哪些机制被否定了，哪些边界尚未测到？

论文明确尝试并拒绝了收缩解释。边界到边界状态映射的最大奇异值 q 在 5 个检查点为 21.0 到 347.7，重复与对照两臂全面扩张，无一 q 小于 1，最有利单元下界仍为 3.35 左右。q 随 Llasa 规模增大而增大，计数最好的 Qwen3-TTS-1.7B 同样扩张，因此不是 q 在作祟。注意力在 k 拷贝上并非近似均匀，logit 极差 1.23 nat 约 3.4 倍，且更平坦的注意力反而计数更好，相关 0.59，符号与解释预测相反。条目内更平坦反而更好在 3 个平坦度量上都成立，对照接近零。

**收缩解释 × 状态容量增长：** 收缩解释指重复条件使解码器状态向不动点收敛、从而读出头无法区分计数的机制假设，负责给出可测量的最大奇异值 q；状态容量增长指用有效秩 Neff 随 log k 的斜率度量走过多少可区分状态，负责直接测量状态是否变单调。两者搭配的理由是一个证伪需要正反两面证据，组合意义是 q 始终大于 1 否定收缩，而容量增长变慢说明状态仍在扩张只是变慢。

限制必须如实保留。重复与训练集频率未分离，只是似然方向相反。判分器在音频上验证而非听感验证。面板为三家族六检查点，受算力限制。k≥48 延伸仅跑 4 个检查点，XTTS-v2 因解码器上限未跑。

干预实验中全残差补丁破坏性太大，秩 1 计数方向补丁未通过正对照，因此因果问题保持开放。统计上 n=6 时最小双侧精确 p 为 0.031，多重比较下论文依靠效应量与一致性而非 p 值，方向可推广而幅度不可。

### 要复现分离结果先跑哪三步？

复现应从公开代码与 180 条测试集开始，第一步用出厂默认解码在六检查点或至少一个面板成员上以 3 种子渲染词重复梯子与长度匹配对照，保留音频与转写。第二步用 CTC 判分器而非 Whisper 做主裁判，先在拼接真值上审计，确认中位恢复 1.00 后再计分，避免把裁判幻觉当成模型失败。第三步按有序非重叠跳过式计数计算相对误差与完全正确率，应用同样的 4 条排除并报告 n，再与论文的 k≥6 的 18.2% 对 94.3% 对照。

关键超参数是 k 梯子取值、每模板 8 词填充池的固定顺序、时长比区间与退化音频阈值，缺一都会改变缺口。还需要补的验证是换识别器与换种子子集，确认差距不反号。若只有单卡，可先跑 Llasa-1B 与 Qwen3-TTS-0.6B 的 k=6 到 32 子集，预期方向不变但幅度会有波动。系统可运行不等于权重可下载，需按原仓库说明配置解码器与声码器。

### 何时值得尝试这套对照，结论如何收束？

当你的合成系统在重复、数字串或绕口令上出现少读多读时，值得先套用这套长度匹配对照，而不是直接调长文本外推或加大惩罚。如果对照接近完美而重复坍塌，则优先检查计数在状态中的保持与读出，而不是继续扫解码温度。如果 p=2 仍保留约一半缺口，则不要指望加标点分词来修复。如果 F5-TTS 类并行模型在轻 k 可被总时长修复而重 k 不行，则说明重端需要表示层面的改动。

论文报告的是在固定长度下重复单独破坏每个自回归系统，面板合并差距 76.1 点，检查点层面 76.7 点，420 规格无反号，held-out 架构如预测落地，非自回归一免疫一复现，状态增长变慢而收缩机制被测量否定。未验证的推测是计数信息放在何处决定是否失败，以及读出为何失效，这些仍待干预实验回答。复现者应保留百分点与相对误差的区分、对照与重复的配对口径，以及 CTC 裁判的审计前提，否则数字相同也可能是不同指标。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2609.36974)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-01 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-01/)
