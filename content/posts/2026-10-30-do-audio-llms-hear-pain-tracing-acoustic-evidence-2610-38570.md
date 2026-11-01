---
title: "Do Audio LLMs HEAR Pain? Tracing Acoustic Evidence from Speech to Language Reasoning"
date: 2026-10-30
draft: false
tags: [病理语音评估, 表示探测, 语音, 音频大模型]
categories: [论文速递]
description: "论文用疼痛这一词汇中性但声音有变化的任务，比较七个音频大模型在只听声音与听明示评分时的表现，并用探测、感知和文本化线索回填定位信息在编码器早期存在但到语言层不可用的瓶颈， pairwise 加文本线索最多提升 32 个点。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.38570"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "音频大模型能听出疼痛吗：从声音到语言推理的证据追踪"
paper_digest_original_title: "Do Audio LLMs HEAR Pain? Tracing Acoustic Evidence from Speech to Language Reasoning"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.38570v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.38570v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.38570v1.pdf"
paper_digest_primary_task: "病理语音评估"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.pathological-speech","label":"病理语音评估"},{"facet":"method","id":"method.representation-probing","label":"表示探测"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"}]
paper_digest_primary_method: "表示探测"
paper_digest_score: 5.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文用疼痛这一词汇中性但声音有变化的任务，比较七个音频大模型在只听声音与听明示评分时的表现，并用探测、感知和文本化线索回填定位信息在编码器早期存在但到语言层不可用的瓶颈， pairwise 加文本线索最多提升 32 个点。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wenqi Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiangjue Dong"},{"affiliations":["Microsoft"],"name":"Sulaiman Vesal"}]
paper_digest_abstract_sha256: "d0d3cb25e76f117a6902043d973d97e14f738bb43f272af947f23931beca6972"
paper_digest_sidecars: {"citation.bib":{"sha256":"c13067841e184bfd443849248fe59d30b9e6978b11cd7f83ef5b780187b52217","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-38570/citation.bib"},"citation.json":{"sha256":"33001cddc6d96ef4a4d5c4e4bc46ce34e1348ea7742bdf74f15c223b2999c506","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-38570/citation.json"},"citation.ris":{"sha256":"1430bef9b7da9acc3560222baa6e1e1156af513cb0c4f813e09c2ab169bd7098","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-38570/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"3f15b09d1136204bf8123c82b6a1edbfa1568273a550f697d6c4d7f65a1c555d","url":"/audio-paper-digest-blog/data/papers/2026-10-30/2610-38570/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "fd9eab111c8345b93754a3f494eb6f886c12a4e17b78832042a6f82e3df160c1"
paper_digest_api_reader_plan_sha256: "f6126ebf95146aee14f31bed9fa0921aceffc7dd914274a17e780d07a1cb37dd"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "316d6689f44bc82a9edd0f5921870d39d66ae28b67b7bde5ed9ef9634666e9f0"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "77626a265d516dc811705bf6c40d6e5da34f147ddcb32705410c65a24c0b7e91"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "227ea4c76cf068c5628bc666d99988dc2eb29d3024b9c256491dd63fde22e2bf"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "5bbe0cc0714c656481f347396423f3a481e62a31431e53e983f3db719421a3b7"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 音频大模型能听出疼痛吗：从声音到语言推理的证据追踪

> 英文题目：*[Do Audio LLMs HEAR Pain? Tracing Acoustic Evidence from Speech to Language Reasoning](https://arxiv.org/abs/2610.38570v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[病理语音评估](/audio-paper-digest-blog/papers/?concept=task.pathological-speech)
- **研究方法**：[表示探测](/audio-paper-digest-blog/papers/?concept=method.representation-probing)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)
- **模型家族**：[音频大模型](/audio-paper-digest-blog/papers/?concept=model_family.audio-language)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5


## 👥 作者与机构

- Wenqi Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiangjue Dong：机构信息未能在本次解析中与作者逐人可靠绑定
- Sulaiman Vesal：Microsoft

## 📌 核心摘要

这篇论文研究大型音频语言模型（Large Audio Language Models，LALMs）能否从说话方式听出疼痛。输入是人在冷水压痛任务中朗读固定中性句的录音和口头说出疼痛分数的录音，输出是对有无疼痛和轻中重三档严重度的判断。难点在于中性句词汇固定时只能依靠响度、音高、频谱变化等副语言信息。论文提出 HEAR 四阶段诊断：先比较中性句与朗读评分两种条件下的行为差异，再用声学特征关联与分层探针定位信息存在的位置，接着用夸大后的声音对比测试模型能否分辨线索，最后把线索数值写成文字放回提示词观察推理是否恢复。相对已有词汇可解任务上的高分评测，该工作把同一说话人、同一疼痛状态下的词汇与声音证据解耦，并把编码、感知与使用分开检验。七个闭源与开源模型在中性句二分类上平衡准确率（balanced accuracy）均在 50.0% 附近，朗读评分条件可达 87.5% 至 99.7%，Qwen2.5-Omni-7B 首个编码器块探针二分类达 74.1%、三分类达 45.0%，文本化线索可让同说话人两选对比最高提升 32.2 个百分点。结论适用于实验诱发急性疼痛与受控朗读，慢性疼痛、自然对话与临床部署尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 临床语音场景到底要求模型听出什么

论文面对的输入是原始语音录音，目标是判断说话人当前的疼痛程度。输出是选择题选项：二分类为疼痛与无痛，三分类为轻度、中度、重度。关键在于必须保留的信息分两种，一种是说了什么，即词汇内容，另一种是怎么说的，即响度、音调高低、频谱变化、停顿等非词汇的声音属性。

在医疗问诊这类场景中，怎么说和说什么同样重要。疼痛会改变声音，例如让人说话更响、音调更高，但朗读固定中性句子时，文字本身不透露疼痛。如果模型只是把语音转写成文字再推理，就会漏掉恰恰需要从声音里听出的情况。论文要回答的正是音频语言模型是否真的用了声音，还是主要依赖文字。

### 已有工作为什么还不能回答声音是否被使用

与疼痛相关的语音研究此前多做专用探测器，用韵律和音质特征预测急性和慢性疼痛，TAME-Pain 数据集进一步在冷水疼痛任务中同步采集语音和自评分数。另一条线是音频大模型的副语言理解，LISTEN 发现情绪识别高度依赖词汇，ParA-LLM 和 VoxParadox 报告说话人、表达和声学属性上的广泛差距，也有工作发现说话风格信息在输出前衰减。

这些工作要么训练专用疼痛分类器，要么在通用任务上报告差距，但没有把同一批人、同一标签下的词汇证据和声音证据严格分开，也没有沿着模型内部逐层追踪特定声音线索。因此信息缺失在数据里、在模型早期表示里，还是在语言推理时不可用，仍然分不清。本文把疼痛作为可控案例，正是要补上从可测声学线索到内部表示再到行为的完整链条。

### 为什么用疼痛和两种录音来分离词汇与声音

TAME-Pain 让被试把手浸入 0 到 4 摄氏度冷水诱发疼痛，另设温水对照。每人既朗读内容固定的疼痛中性 Harvard sentences，也亲口说出 1 到 10 分的自评疼痛。研究保留 51 人的 4658 条录音，标签按原文映射为二分类的无痛 1 到 3 分、有痛 4 到 10 分，以及三分类的轻度 1 到 3 分、中度 4 到 6 分、重度 7 到 10 分。

这种设计的巧妙处在于说话人和标签条件相同，只有词汇是否含疼痛信息不同。中性句只能靠声音推断，亲口评分则词汇直接给出答案。两条件下的行为差异就可以归因于证据来源，而不是换了说话人或标签。附带还用了 LISTEN 的中性文本子集检验结论是否超出疼痛。

**Harvard sentences × spoken pain rating：** Harvard sentences 指内容固定且与疼痛无关的中性朗读句，作用是把词汇信息固定为零，只留下声音变化；spoken pain rating 指被试亲口说出疼痛分数的录音，词汇直接给出答案。二者是同一批人在同一疼痛条件下的两种录音，对比它们就能把词汇证据和声音证据分开，判断模型到底用了哪一种。

> **看图路径：** 1. 先看上面两行同一句话在 1/10 分和 8/10 分时的波形与模型回答；2. 再看下面直接说出 8 分时模型回答如何变化；3. 对比词汇相同与词汇直接给答案两种条件的差异

[![原论文 Figure 1：LALMs recognize pain when it is stated in words, but fail when it must be inferred from the voice.](https://arxiv.org/html/2610.38570v1/overview_4.png)](https://arxiv.org/html/2610.38570v1/overview_4.png)

*论文图 1。原论文 Figure 1:：“LALMs recognize pain when it is stated in words, but fail when it must be inferred from the voice.”。*

图 1 直接展示了这种对照。上面两行是同一句中性朗读，疼痛分数从 1/10 升到 8/10，波形外观变化但文字不变，模型都回答无痛，下面一行亲口说出 8 分时模型答对。可见问题不是听不清字，而是文字相同时声音的变化没有被用于判断。

### HEAR 四步如何沿着一个样本追踪信息

HEAR 把一次判断拆成 4 个阶段。先看行为，即模型在中性句和明示评分两种输入下直接预测疼痛；再看编码，即声音里是否有疼痛相关的可测特征，以及冻结模型各层表示能否解码疼痛；然后看感知，即直接问模型能否分辨夸大后的声音线索高低；最后看使用，即把线索数值写成文字放进提示，看语言推理能否利用。

沿一个中性句样本走，流程是音频先经音频编码器和投影层进入语言层作答，附带抽取 eGeMAPSv02 特征做关联分析。探测阶段不更新大模型，只在各层表示上训练小分类头；感知阶段用同一录音生成一低一高两个处理版本做二选一；使用阶段把该录音的线索数值以文本块形式贴在音频输入旁边。四步共用同一标签体系，便于定位丢失发生在信号、表示、感知还是推理。

> **看图路径：** 1. 从左上 RQ1 两种录音设置沿箭头看到左下线索分析；2. 再看中间编码器、投影层到语言层的探测头训练路径；3. 最后对照右侧四组结果条形图的数值变化

[![原论文 Figure 2：Overview of our HEAR analysis framework.](https://arxiv.org/html/2610.38570v1/framework.png)](https://arxiv.org/html/2610.38570v1/framework.png)

*论文图 2。原论文 Figure 2:：“Overview of our HEAR analysis framework.”。*

图 2 是全文路线图。左侧 RQ1 给出两种录音的提问方式，左下把疼痛线索抽取与 RQ3 感知测试、RQ4 文本化回填连起来，中间显示从音频编码器经投影层到语言层的逐层探测，右侧汇总 4 组结果的数量级差异。读图时不要把中间探测曲线的相对走向误读为模型直接作答的准确率，两者是离线可解码性与在线行为的区别。

### 声学线索怎样被抽取和分组

声学分析对象是每条录音的波形，处理是用 openSMILE 抽取 88 个 eGeMAPSv02 特征，涵盖基频、抖动、共振峰、响度、频谱斜率、频谱通量、MFCC 等。困难在于不同人嗓音基线和打分习惯不同，直接比较绝对值会混入个体差异。

论文只用 41 个训练说话人做关联，每个特征和疼痛分数都在说话人内中心化和标准化，再拟合带说话人随机截距的线性混合效应模型，经 Benjamini-Hochberg 校正后保留显著且效应不小的 34 个特征，分成响度水平、响度动态、音调水平、音调变化、频谱通量、频谱倾斜、MFCC1、嗓音质量、共振峰九组。最强的关联是响度、频谱通量和音调，与疼痛让人声音更响、音调更高的先验一致。仅用全部 88 个特征的 LightGBM 在同一切分和说话人内归一化下就能达到 2 分类 65.7% 和三分类 47.1% 的平衡准确率，说明声音里确实有可用信号。

**eGeMAPSv02 × within-speaker 标准化：** eGeMAPSv02 指用 openSMILE 抽取的 88 个韵律和音质特征，描述响度、基频、频谱等可测量的声音属性；within-speaker 标准化指先在每个说话人内部中心化和归一化，再看疼痛升高时特征是否偏离本人平时水平。二者搭配是为了排除不同人嗓音和打分习惯的差异，只保留疼痛带来的相对变化。

**audio encoder × Thinker 语言模型层：** audio encoder 指把声学帧序列变成表示的音频编码器，是 Qwen2.5-Omni-7B 中信息最先经过的部分；Thinker 语言模型层指其后负责理解和作答的语言层。论文逐层取冻结表示训练探测头，对比两处的疼痛可解码性，就能定位信息是在编码器早期还在、还是传到语言层时丢失。

### 本研究训练了什么又冻结了什么

本研究没有训练或微调 7 个音频大模型本身。评测的 4 个闭源模型通过云端接口调用，3 个开源模型用本地权重做温度为 0 的推理，Azure 的 gpt-realtime 系列用默认解码设置。模型参数在整个行为和感知测试中保持冻结。

实际训练的是探测用的小头。在 Qwen2.5-Omni-7B 和 Kimi-Audio 的冻结隐状态上，取编码器输入、多个编码器块、投影层输出和语言模型多层的表示，只保留音频 token 位置，配以中性提示以保持任务中性。头有线性、256 维隐层的 MLP 和两层卷积加双向 GRU 的 CRNN 3 种，输入前先在训练说话人上标准化。调参在 41 个训练说话人上做说话人分组五折交叉验证，选层和头类型，再在全部训练说话人上按中位最优轮数重训，一次性在 10 个留出测试说话人上报告。测试说话人不参与训练、归一化和模型选择，避免同一人信息泄露。

**supervised probing × acoustic perception test：** supervised probing 指在冻结模型表示上另训练线性、MLP 或 CRNN 分类头，看表示中是否包含疼痛标签信息，属于离线可解码性检验；acoustic perception test 指直接问模型两个夸张处理后的片段哪个更响、音调更高，属于在线能否感知的行为检验。前者能解码不等于后者能答对，两者对照才能区分表示中有与推理时可用。

### 四种任务设置和评价口径是什么

每道题都是单选，随机打乱选项，要求只答字母。输入有纯音频、纯文本、音频加文本 3 种。中性句和明示评分是零样本单条判断；中性加成对是同一人读同一句的两条比较，二分类选更可能疼痛的一段，三分类给一个已知轻度参考再判目标等级；中性加 20 样本是同一人的 20 条带标签示例加一条目标，二分类标签平衡，三分类受数据限制不平衡。提示中把量表写成 0 到 10，是因为有人实际打出 0 分。

评价主要用平衡准确率，随机基线二分类 50.0%，三分类 33.3%。只有中性句纯文本列是例外，因文本无疼痛信息而全部标为无痛或轻度，报告的是普通准确率。解析失败计为错误，但各模型解析成功率总体在 99% 以上，所以低分不是格式问题。

**balanced accuracy × pairwise 比较：** balanced accuracy 指对各类别召回率取平均的准确率，类别不平衡时仍以 50% 为二分类随机基线、33.3% 为三分类基线；pairwise 比较指给同一人读同一句的两个录音，选更可能疼痛的一个。二者搭配是因为疼痛标签偏斜且个体差异大，同人配对加平衡准确率才能公平反映是否利用了声音的相对变化。

### 只听声音时模型表现离随机猜有多远

比较的问题是同一模型在词汇有答案与词汇无信息时差距多大，条件是同一标签映射、同一平衡准确率口径，指标方向是越高越好。下表是 7 个模型在 4 种设置下的主结果，保留原文的二分类与三分类分块和 modality 列。

|  |  | Neutral Harvard Sentence | Neutral Harvard Sentence | Neutral Harvard Sentence | Spoken Pain Rating | Spoken Pain Rating | Spoken Pain Rating | Neutral + Pairwise | Neutral + Pairwise | Neutral + 20-shot | Neutral + 20-shot |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Model | Text∗ | Audio | Text+Audio | Text | Audio | Text+Audio | Audio | Text+Audio | Audio | Text+Audio |
| Pain vs. No Pain (Balanced Accuracy, %) |  |  |  |  |  |  |  |  |  |  |  |
| Closed- Weight | gpt-realtime-mini | 92.7 | 48.1 | 50.2 | 98.9 | 98.7 | 98.7 | 48.6 | 45.2 | 52.8 | 50.4 |
| Closed- Weight | gpt-realtime | 93.7 | 49.6 | 50.7 | 98.7 | 98.9 | 98.9 | 50.0 | 50.0 | 54.0 | 48.5 |
| Closed- Weight | gemini-3.5-flash | 99.1 | 49.9 | 50.0 | 98.8 | 99.2 | 99.2 | 40.9 | 43.3 | 47.6 | 47.2 |
| Closed- Weight | gemini-3.1-pro-preview | 99.5 | 50.0 | 50.0 | 99.0 | 99.7 | 99.4 | 52.4 | 49.5 | 49.8 | 51.9 |
| Open- Weight | Qwen2.5-Omni-7B | 96.6 | 49.8 | 50.0 | 98.8 | 98.8 | 98.6 | 50.5 | 52.9 | 47.7 | 48.9 |
| Open- Weight | Qwen3-Omni-30B-A3B-Instruct | 97.3 | 50.2 | 50.1 | 99.1 | 99.5 | 99.1 | 51.9 | 51.0 | 49.1 | 47.6 |
| Open- Weight | Kimi-Audio-7B-Instruct | – | 50.0 | 50.5 | – | 89.1 | 77.0 | 49.0 | 46.2 | 51.3 | 48.5 |
| 3-Class Pain Severity (Balanced Accuracy, %) |  |  |  |  |  |  |  |  |  |  |  |
| Closed- Weight | gpt-realtime-mini | 89.3 | 33.7 | 33.5 | 99.3 | 96.0 | 93.6 | 33.2 | 33.6 | 38.9 | 32.1 |
| Closed- Weight | gpt-realtime | 82.9 | 32.8 | 34.1 | 99.4 | 98.9 | 99.3 | 35.1 | 33.1 | 35.0 | 31.3 |
| Closed- Weight | gemini-3.5-flash | 99.2 | 33.3 | 33.4 | 99.2 | 99.5 | 99.1 | 33.1 | 31.6 | 35.2 | 35.9 |
| Closed- Weight | gemini-3.1-pro-preview | 99.0 | 33.2 | 33.3 | 99.2 | 99.2 | 99.3 | 33.1 | 31.7 | 36.1 | 38.6 |
| Open- Weight | Qwen2.5-Omni-7B | 91.3 | 33.4 | 33.1 | 96.4 | 98.0 | 93.3 | 33.3 | 33.3 | 29.4 | 32.0 |
| Open- Weight | Qwen3-Omni-30B-A3B-Instruct | 96.0 | 33.4 | 33.3 | 99.1 | 99.5 | 97.8 | 32.5 | 33.0 | 34.6 | 35.5 |
| Open- Weight | Kimi-Audio-7B-Instruct | – | 33.7 | 34.0 | – | 87.5 | 81.0 | 33.3 | 33.3 | 32.5 | 39.1 |

就数字含义而言，中性句音频列二分类集中在 48.1% 到 52.8%，三分类集中在 32.5% 到 35.1%，基本就是随机猜；同人参考或 20 个同人示例也只提升至多约 6 个点。同一模型在亲口评分音频上二分类达 87.5% 到 99.7%，三分类多在 93% 以上，说明字能听懂、声音不会用。混淆矩阵还显示多数模型在中性音频上几乎总答无痛，成对时偏好固定选第二段，20 样本时疼痛回答比例上升但对两类同样上升，属于固定偏好而非利用声音。还有反例是 gpt-realtime 在中性音频上对无痛片段误报疼痛达 85.0%，而纯文本仅 6.3%，说明加了音频反而出现幻觉式疼痛判断。

> **看图路径：** 1. 对比上行中性句与下行明示评分随层加深的探测准确率走向；2. 注意纵轴范围不同行之间不可直接比高低；3. 再看右列各类声学特征可恢复程度随层数的下降

[![原论文 Figure 5：Pain and acoustic-feature information across the layers of Qwen2.5-Omni-7B.](https://arxiv.org/html/2610.38570v1/layerwise_pain_grid.svg)](https://arxiv.org/html/2610.38570v1/layerwise_pain_grid.svg)

*论文图 5。原论文 Figure 5:：“Pain and acoustic-feature information across the layers of Qwen2.5-Omni-7B.”。*

图 5 把离线探测与在线行为分开。上行中性句的探测准确率在编码器最初几块最高、向语言层逐渐下降，下行明示评分则在编码器内升到接近天花板并保持。右列显示多数线索组在浅层可恢复、到语言层下降，响度水平和音调水平虽强也明显衰减，嗓音质量和音调变化在各层都不好恢复。纵轴每行范围不同，不能跨行比绝对高低，只能看走向。

### 早期表示里真有疼痛信息吗

要回答的第二个问题是信号在声音和内部表示中是否存在、在哪一层丢失。声学关联已说明声音里有信号，探测则看冻结的 Qwen2.5-Omni-7B 能否读出。最优层和头在留出说话人上二分类达 74.1%、三分类达 45.0%，明显高于模型直接作答的随机水平。对探测头的扰动分析发现频谱平衡和停顿影响最大，响度和平均音调影响较小，尽管响度与疼痛的关联最强。

下表是解析成功率的完整对照，说明低分不是因为模型不按格式作答。各条件解析成功率多为 99% 以上，只有 gemini-3.5-flash 在 20 样本个别格略低，但仍在 95% 以上。

|  | gpt-realtime-mini | gpt-realtime-mini | gpt-realtime | gpt-realtime | gemini-3.5-flash | gemini-3.5-flash | gemini-3.1-pro-preview | gemini-3.1-pro-preview | Qwen2.5-Omni-7B | Qwen2.5-Omni-7B | Qwen3-Omni-30B-A3B | Qwen3-Omni-30B-A3B | Kimi-Audio | Kimi-Audio |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Modality | Binary | 3-class | Binary | 3-class | Binary | 3-class | Binary | 3-class | Binary | 3-class | Binary | 3-class | Binary | 3-class |
| Neutral Harvard Sentence |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Text | 100.0 | 99.8 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 99.9 | 100.0 | 100.0 | 100.0 | 100.0 | – | – |
| Audio | 97.3 | 98.7 | 100.0 | 100.0 | 99.4 | 99.8 | 100.0 | 99.8 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 |
| Text+Audio | 100.0 | 100.0 | 100.0 | 100.0 | 99.8 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 |
| Spoken Pain Rating |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Text | 99.8 | 100.0 | 99.9 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | – | – |
| Audio | 100.0 | 100.0 | 100.0 | 100.0 | 99.8 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 |
| Text+Audio | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 99.9 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 |
| Neutral + Pairwise |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Audio | 100.0 | 99.6 | 100.0 | 100.0 | 100.0 | 98.9 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 |
| Text+Audio | 100.0 | 100.0 | 100.0 | 100.0 | 98.6 | 99.2 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 |
| Neutral + 20-shot |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Audio | 99.3 | 100.0 | 100.0 | 100.0 | 95.7 | 98.5 | 99.7 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 |
| Text+Audio | 100.0 | 100.0 | 100.0 | 100.0 | 96.0 | 96.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 |
| Overall | 99.6 | 99.8 | 100.0 | 100.0 | 99.0 | 99.2 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 |

就限制与含义而言，探测高只证明信息在线性或非线性变换下可解码，不等于推理时可用；且详细逐层分析主要在 Qwen2.5-Omni-7B 和 Kimi-Audio 上做，Kimi 的线性头呈现同样的中性句下降、明示评分上升趋势，但不同架构的衰减位置可能不同。编码器多从 Whisper-large-v3 初始化并偏向转写和内容理解训练，可能是声学线索被词汇内容挤掉的原因之一，但这仍是推测，需要辅助预测声学特征或更多副语言训练来验证。

### 把数值写成文字能让推理用起来吗

使用阶段的比较问题是当声学信息以文本形式直接可用时，语言推理能否利用它。做法是把每组最相关的 8 组特征的原始值和解释贴在提示里，不做调参和特征工程，重点看成对和 20 样本的中性句设置。另有仅给数值不给音频的 AF 条件作为对照。

扰动对探测头 logit 的影响见下表，正值表示增强该属性推向疼痛。频谱平衡效应 0.62、停顿负向效应 -0.68 最大且可信，响度和平均音调效应较小但可信，语速因对称性变化大被判为伪影。

| Attribute | Effect | 95% CI | Sym. | Null slopes | Verdict | Flip (+ / −-) |
| --- | --- | --- | --- | --- | --- | --- |
| Spectral balance | 0.62 | [0.59, 0.66] | 0.05 | 0.62 / – | credible | 0.22 / 0.18 |
| Loudness | 0.13 | [0.11, 0.14] | −-0.03 | 0.13 / – | credible | 0.03 / 0.04 |
| Loudness variability | 0.02 | [0.01, 0.05] | 0.01 | 0.02 / – | credible | 0.01 / 0.01 |
| Mean pitch | 0.19 | [0.04, 0.34] | −-0.20 | 0.10 / 0.24 | credible | 0.11 / 0.18 |
| Pitch variability | −-0.23 | [−-0.43, −-0.001] | −-0.23 | 0.06 / −-0.17 | no effect | 0.19 / 0.12 |
| Speech rate | −-0.14 | [−-1.03, 0.23] | 0.57 | −-1.84 / 0.06 | artifact | 0.22 / 0.26 |
| Pauses‡ | −-0.68 | [−-1.44, −-0.11] | 0.07 | – / – | credible | 0.31 / 0.24 |

表后解释回扣主结论。二分类成对设置提升最大，gemini-3.1-pro-preview 提升最高达 32.2 个点，说明文字化线索可被推理使用。但单条零样本中性句加线索几乎无增益，且 AF 单独已接近加音频的效果，甚至加回音频反而降低，提示模型音频表示可能与给定数值冲突。亲口评分上加线索对部分模型三分类还下降多达 5.3 个点，说明天花板表现来自词汇，额外数值会干扰。LISTEN 成对情绪任务上也有类似增益，尤其 Qwen3，支持结论不限于疼痛，但 LISTEN 是 5 到 8 选 1 且本文是参考条件设置，与原文 34.0% 的单句设置不可直接比胜负。

### 夸大声音差异后模型能分辨吗

感知测试把问题换成模型能否听出差异本身。做法是从 100 条中性句出发，对音调水平、音调变化、响度水平、响度动态、频谱倾斜五组可被人区分的线索，分别向相反方向大幅偏移生成一低一高配对，人类 pooled 准确率 98.7%，Fleiss kappa 为 0.95。模型只需回答哪段更高，例如哪段更响，随机基线 50%。

> **看图路径：** 1. 先看首行人类在五种线索上接近满分的基准；2. 再逐行比较弱模型接近 50% 与强模型 70-100% 的差异；3. 注意深色与浅色格子对应显著高于随机的程度

[![原论文 Figure 6：LALM accuracy (%) on the perception test.](https://arxiv.org/html/2610.38570v1/contrast_heatmap.svg)](https://arxiv.org/html/2610.38570v1/contrast_heatmap.svg)

*论文图 6。原论文 Figure 6:：“LALM accuracy (%) on the perception test.”。*

图 6 显示能力分层。弱模型如 gpt-realtime 系列、Qwen2.5-Omni、Kimi-Audio 在几乎所有线索上接近随机，即使 Qwen2.5 最终语言层仍能以约 0.5 的 R 平方解码音调水平，也答不对夸大的音调高低，说明可解码不等于可感知。较强模型如 Gemini 和 Qwen3-Omni 在多数线索上达 72% 到 100%，能感知大差异却依然推断不出疼痛，说明瓶颈不只在感知，还在用声音做推理。嗓音质量因预听不可靠已被排除，不能据此说模型对所有线索都不敏感。

特征分组的完整定义见下表，每条曲线是组内特征留出 R 平方的平均，34 个特征即正文加粗的显著关联特征。

| Group / eGeMAPSv02 feature | Group / eGeMAPSv02 feature |
| --- | --- |
| Pitch level | Formants |
| F0semitoneFrom27.5Hz_sma3nz_percentile50.0 | F1frequency_sma3nz_stddevNorm |
| F0semitoneFrom27.5Hz_sma3nz_percentile80.0 | F3amplitudeLogRelF0_sma3nz_stddevNorm |
| Pitch variability | Spectral flux |
| F0semitoneFrom27.5Hz_sma3nz_stddevNorm | spectralFlux_sma3_amean |
| F0semitoneFrom27.5Hz_sma3nz_pctlrange0-2 | spectralFlux_sma3_stddevNorm |
| Loudness level | spectralFluxV_sma3nz_amean |
| loudness_sma3_amean | spectralFluxV_sma3nz_stddevNorm |
| loudness_sma3_percentile20.0 | spectralFluxUV_sma3nz_amean |
| loudness_sma3_percentile50.0 | MFCC1 |
| loudness_sma3_percentile80.0 | mfcc1_sma3_amean |
| equivalentSoundLevel_dBp | mfcc1_sma3_stddevNorm |
| Loudness dynamics | mfcc1V_sma3nz_amean |
| loudness_sma3_stddevNorm | mfcc1V_sma3nz_stddevNorm |
| loudness_sma3_pctlrange0-2 | Spectral tilt |
| loudness_sma3_meanRisingSlope | slopeV0-500_sma3nz_amean |
| loudness_sma3_stddevRisingSlope | slopeUV0-500_sma3nz_amean |
| loudness_sma3_meanFallingSlope | alphaRatioV_sma3nz_stddevNorm |
| loudness_sma3_stddevFallingSlope | alphaRatioUV_sma3nz_amean |
| Voice quality | hammarbergIndexUV_sma3nz_amean |
| HNRdBACF_sma3nz_stddevNorm |  |
| logRelF0-H1-H2_sma3nz_amean |  |
| logRelF0-H1-A3_sma3nz_amean |  |

表后要说明的是分组只是为可解释性汇总，组内特征高度相关，跨组副作用在构造夸大对比时未完全控制。感知能过不代表自然疼痛变化能过，因为测试幅度远超自然说话人内变化，只能作为诊断性上限，不能当作真实疼痛检测能力的证明。

### 这些结论在什么条件下才成立

数据条件是首要边界。TAME-Pain 是 51 人的实验性急性冷水疼痛， pooling 了冷水和温水，体量较小，自评标签因人而异，声学相关也因人而异，所以全程用说话人内相对值和留出说话人评测。结论不能直接推广到慢性疼痛、临床场景或自然对话。

实验条件也有边界。多音频设置下没有逐个验证每个模型都能在声学层面区分每段音频；逐层细节主要在两个开源模型上，7 个模型的行为差距不代表内部机制相同；扰动和文本化都是对自然变化的简化，只能做诊断，不能证明这些线索单独足以做真实疼痛评估。解析失败已计为错误但影响很小，20 样本下 gemini-3.5-flash 解析略低可部分解释其低分。

伦理上数据按 PhysioNet 受限健康数据许可使用，未做重识别、不分发音频。自动疼痛评估若无临床验证可能带来伤害，例如听不出疼痛就否定患者，本文结果不支持用当前模型做此用途。

### 要复现关键对比第一步做什么

值得尝试的情形是需要判断音频大模型是否真用了声音，而不只是转写文字的场景，例如疼痛、情绪等副语言任务。复现第一步是按说话人独立切分，留出 10 个测试说话人，训练只用其余 41 人，并在训练集上做说话人内归一化和分组交叉验证选层和头，避免同一人泄露。

关键信息条件要保留：标签映射二分类 1 到 3 对 4 到 10、三分类 1 到 3、4 到 6、7 到 10，提示中量表写 0 到 10；评测用平衡准确率并记住随机基线；行为测试用温度 0，gpt-realtime 用默认设置；探测取音频 token 位置并配中性提示；感知用大幅夸张配对并随机化高值位置。

回填用原始值加简短定义，不做标准化解释。还需补的验证是说话人标准化数值在零样本和上下文示例中的效果，以及用辅助预测声学特征或更多副语言数据训练后衰减是否缓解。

代码、权重、系统可运行是三件事，本篇未提供绑定且可验证的开源资源，不得声称代码模型或数据已公开；模型权重是否可下载与评测系统能否一键运行需分别按原文核对。

### 一句话总结与尚未回答的问题

综合来看，7 个模型在文字直接给出疼痛时接近满分，在文字中性只能靠声音时回到随机猜；声音里有响度、音调、频谱等可测关联，早期编码器表示可解码到 74.1% 二分类，但越往语言层越弱；强模型能分辨夸大差异却仍不用它判疼痛，把数值写成文字后同人比较最多提升 32 个点。这指向音频证据在模型内部存在但到语言推理时不可用的鸿沟。

仍不能回答的是这种鸿沟多大程度来自 Whisper 初始化和转写偏向的训练，多大程度来自音频与语言接口本身；也不知道哪些训练目标或数据能让自然幅度的声音变化在单条判断中被稳定使用。下一步应在更大、更自然的数据上，分离词汇与声音、区分可解码、可感知、可使用三层，并报告跨说话人条件下的真实代价。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.38570v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-30 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-30/)
