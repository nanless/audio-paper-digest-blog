---
title: "Evaluating prosodic encodings of information structure in generative speech AI"
date: 2026-09-14
draft: false
description: "该研究用同一句 Molly mailed a melon 在四种问答语境下考验七个主流 TTS 能否做出正确且自然的韵律焦点，人类基线仍最稳，最强的 Gemini 也不均衡，而高自然度与高可辨度难以兼得。"
tags: ["主观评测", "模型评估", "韵律", "语音", "文本到语音"]
categories: ["speechprosody-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:speechprosody:2026:conference-paper-id:kuang26_speechprosody"
paper_digest_source_kind: conference
paper_digest_conference_id: "speechprosody-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/speechprosody_2026/kuang26_speechprosody.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/speechprosody_2026/kuang26_speechprosody.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a1e4f9490fbed0f6c6318323e19efe23eb3dc696d08321b479bd553b1c18de81"
paper_digest_api_reader_plan_sha256: "2b1738332e4783c8d9c7879836b2eefc1afa5b13fb605e1be51280c22fc198c4"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "f2a16d17288b0a918581e1f3c7c6751f8459502fdec09a2be53d40980a1526fd"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "718524757aa3d82a4b7a0e80b98a5fb3b750273364ad072f5ada700b5ae7c83b"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "e76bdbc173052cbe98622f8c7e0ab925d0c59751dbfb45347519e32f60ecf4e8"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ea6d5b27faabb247c378aaba158a1281f37c017f0ee06f12e5728f6ad90a91c8"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"},{"facet":"research_focus","id":"research_focus.evaluation","label":"模型评估"},{"facet":"scientific_topic","id":"scientific_topic.prosody","label":"韵律"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.tts","label":"文本到语音"}]
paper_digest_primary_task: "文本到语音"
paper_digest_primary_method: "主观评测"
paper_digest_score: 5.2
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 字都对，意思却偏了：生成语音为何传达不好信息结构

> 英文题目：*Evaluating prosodic encodings of information structure in generative speech AI*

> 会议身份：`conference:speechprosody:2026:conference-paper-id:kuang26_speechprosody`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://www.isca-archive.org/speechprosody_2026/kuang26_speechprosody.html) · [官方 PDF](https://www.isca-archive.org/speechprosody_2026/kuang26_speechprosody.pdf)

标签：#主观评测 #模型评估 #韵律 #语音 #文本到语音

评分：**5.2/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：数据集与基准

## 👥 作者与机构

- Jianjing Kuang：机构信息未能从会议 PDF 纯文本可靠映射
- Ethan Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Kevin Li：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

文本到语音的输入是附带疑问语境的目标句“Molly mailed a melon”，输出是需正确标记宽焦点与主语、动词、宾语窄焦点的自然语音，难点在于相同字面须依语用意图产生不同的时长、基频与强度实现，否则含义会被遮蔽或误读。该工作先以问答范式诱发四种信息结构条件，将同一设计并行施加于人类说话人与七个显式与隐式控制系统以保证可比；再经Charsiu强制对齐切分词边界并在Praat中提取归一化时长、最大基频与平均强度，输出进入听辨实验。听辨实验在PCIbex上呈现179个音频片段，要求被试完成自然度打分、人机判断与焦点分类，使声学对比与感知准确率共同决定优劣。相比以往整体质量评测，该设计以词汇完全相同的最小对立隔离韵律能力，区分了显式标记语言与隐式上下文提示两类控制路径并量化其总体对比度与感知相关性。在包含宽焦点与三种窄焦点条件的听辨评测任务下，Gemini的焦点识别准确率为62.50%，高于ElevenLabs的焦点识别准确率29.92%。该结论适用边界受限于英语单句受控朗读，窄焦点在句尾显著退化且自然度与准确性相互权衡，尚未验证长篇对话、情感与多语言外推。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要保留什么？

本文解读的对象是 1 篇投向 Speech Prosody 2026 的受控评测论文，任务是检验生成式语音能否正确编码信息结构。输入是本次收到的论文正文文字与官方原图像素，目标是让刚进入语音、音乐与音频领域的研究生能够核对实验条件并复述方法。必须保留的信息包括目标句、4 种焦点条件、7 个被测系统的两种控制范式、人类基线的规模、听辨实验的三项任务以及声学分析的归一化做法。输出是 1 篇中文技术解读，不做营销式判断，不引入原文之外的模型性能断言。

学习路径先建立任务直觉，再进入方法全景，然后沿着一个样本走完从问句到波形的全过程，接着讲清听评与声学如何互相印证，最后讨论复现要点与边界。论文没有提供可验证的代码与数据链接，本次资源状态为未发现可用绑定，因此解读中不声称代码、模型或数据已公开。所有数字都回到原文句子核对，教学用的举例会明确标为例子。

### 为什么韵律焦点值得单独拿出来测？

文本转语音的清晰度已经很好，能把词读对、读顺，但韵律仍然是短板。韵律管的是节奏、重音和语调，它不只决定好不好听，还决定句法、话语结构和强调是否被正确传达。论文把信息结构定义为话语中什么是新的或重要的，韵律焦点就是用声音手段标出这部分信息的机制。举例来说，同样是约翰买了书，重读主语的 JOHN bought the book 像是在回答谁买的，重读宾语的 John bought the BOOK 像是在回答买了什么，词串相同，交际含义不同。如果合成系统放错重音或该强调时用平板语调，听者可能误解意图。

教学例子到此为止，论文的实际做法是把这种直觉变成可控实验。已有路线大致有 3 条，一是用语音合成标记语言 SSML 手工指定重音，二是用大规模富有表现力的数据隐式训练让模型自己学会变化，三是保持平滑自然优先但不保证语境精确。论文指出，前者不可扩展且覆盖不了全部细微差别，后者能捕捉自然变异但不保证在特定语境下做出精确的焦点模式。因此有必要用词串相同、信息结构不同的最小对立集，直接比较人类与机器在同一问答框架下的产出。

### 要回答的具体问题是什么？

论文要回答的不是哪个 TTS 最好听，而是 7 个领先系统能否在语境驱动下做出正确且自然的焦点区分，以及它们与人类说话人相比差在哪里。正确指听者能从声音中恢复出预期的焦点位置，自然指听感评分接近人类。研究把 4 种条件固定为宽焦点和分别窄聚焦在主语、动词、宾语上，目标句固定为 Molly mailed a melon。这句话刻意选择响音成分多的词，便于可靠提取基频。

问句与答案配对用于诱发焦点，例如谁寄了瓜诱发主语焦点，莫莉做了什么诱发动词焦点，莫莉寄了什么诱发宾语焦点。关键设计是人类与隐式模型使用完全相同的问答范式，保证可比性。显式 SSML 模型则用标签直接控制目标成分。每个模型每种焦点生成 5 个独立样本，以容纳神经合成的波动。听评部分同时测自然度、真人或 AI 来源判断和焦点位置判断，声学部分比较时长、基频和强度。

这样设计把好听与说对分开，把物理实现与感知结果分开，避免用单一平均意见分掩盖语用错误。

### 整个评测流水线是如何组织的？

先沿着一个样本走完全程有助于建立全局感。以主语窄焦点为例，输入是问句谁寄了一个瓜加目标句莫莉寄了一个瓜，期望输出是 MOLLY 重读而其余成分弱化的波形。表示层面分为语用表示与声学表示，语用表示是当前答案的核心是施事者，声学表示是主语词在时长拉长、基频峰值和强度峰值上区别于动词和宾语。组件层面包括合成器、强制对齐器与声学分析工具，以及听评平台。目标层面要求合成器在正确位置制造可辨的声学对比，同时保持整体自然。

输出是波形文件，进入后续的切分、归一化与听评。论文把评测分成两个互补部分，第一部分是定量声学分析，比较模型与人类在时长、音高和强度上的实现，第二部分是感知实验，评价自然度与交际有效性。7 个系统覆盖显式与隐式两类，显式包括 Amazon Polly、Google Cloud 与 Microsoft Azure，隐式包括 Gemini、OpenAI、ElevenLabs 与 Sesame。人类基线是 10 名美国英语母语者，年龄跨度较大，录音经过剪裁与幅度归一化。听评共用 179 段有效音频，每位说话人与模型各取 20 个 token，覆盖 4 种焦点条件，实验放在 PCIbex 上通过大学被试库招募完成。

**显式控制 × 隐式语境提示：** 显式控制指用 SSML 的`<emphasis>`标签直接告诉合成器重读哪个成分，隐式语境提示指把上文问句和目标句一起交给模型让其自行推断重音，分工是前者考指令执行，后者考语用理解，搭配理由是覆盖当前 TTS 的两条主流技术路线，组合后才能比较手工标记的精确性与端到端语境建模的泛化性。

### 关键组件各自负责什么，又如何组合？

合成组件负责把文本或问答语境变成波形。显式模型的动作是在目标成分上加 emphasis 标签，隐式模型的动作是把问句与答句一起作为提示，让模型自行决定重读。人类录制组件负责提供自然基线，动作是让说话人按同样问答范式多次录制，再做后期整理。对齐与测量组件负责把波形变成可比数字，动作是用 Charsiu 强制对齐器生成 TextGrid 确定词边界，再用 Praat 提取每词的时长、最大基频与平均强度。

归一化组件负责消除说话速率与音域差异，动作是把时长表示为相对句末词 melon 的比值，把基频与强度在每个说话人与模型内部做 z 分数归一化，再对每条件平均 5 个样本。听评组件负责把波形变成人的判断，动作是每试次播放一段音频，要求被试依次完成五点自然度评分、人类或 AI 二选一、焦点位置五选一。组合的意义在于同一批音频既进入声学比较又进入听评，物理差异与感知差异可以在同一条件下对照。

**信息结构 × 韵律焦点：** 信息结构负责划分话语中哪部分是新的或重要的，韵律焦点负责用音高、时长和强度的变化把这种划分说出来，二者搭配的理由是同样的词串需要不同的声音形态来对应不同的问句，组合后系统才能让听者从重音位置反推出说话人想回答的问题。

**宽焦点 × 窄焦点：** 宽焦点指整句都是新信息，不需要突出某一个词，窄焦点指主语、动词或宾语之一是答案核心，二者分工在于给出对照基线与受试条件，搭配理由是只有同时测平淡陈述和三处强调，才能判断模型是真的会切换还是只会用一种默认重音应付所有语境。

### 本研究训练了什么，没有训练什么？

本研究没有训练任何新的 TTS 模型，也没有微调被测系统的参数，没有报告梯度路径、优化器、冻结层或训练轮数等信息，不能从模型名称推定其内部实现。实际计算过程是调用与构造加测量。调用指按两种范式生成音频，显式系统加标签生成，隐式系统加问句语境生成，每条件每模型生成 5 个样本。构造指录制人类基线、剪裁与幅度归一化、组织 179 段听评集并设计三项任务。测量指强制对齐、Praat 提参、归一化与平均，以及计算总体对比度。

总体对比度被定义为焦点词与非焦点词在时长、基频和强度构成的 3 维归一化声学空间中的平均实现的欧氏距离，用来量化标记强度。统计检验使用 Kruskal-Wallis 检验自然度差异，用卡方检验来源判断与模型和焦点条件的交互，但原文未给出被试人数与试次分配的完整细节，这是复现时需要补齐的缺项。缺失训练信息不是技术错误，只是说明本文是评测论文，结论的适用范围限于所测版本与所测提示方式。

### 实验条件如何保证公平，指标方向如何理解？

公平条件的核心是词串相同、语境不同。所有说话人与模型都面对同一目标句与同一组问句，差异只能来自信息结构，不能来自选词或句法。响音句的选择是为了让基频提取更可靠，时长相对句末词归一化是为了控制语速，基频与强度做说话人内 z 分数是为了控制音域与增益。听评指标方向很直观，自然度 1 到 5 越高越好，来源判断中被判为人类比例越高越像人，焦点判断准确率越高说明交际越有效。

声学指标没有绝对好坏，关键是焦点条件之间的分离度与峰值是否落在目标词上。人类基线同时提供自然度上限与焦点准确率参考，约为自然度 3.85 与各类焦点 65% 到 80%。被测系统之间的比较必须保留实际可运行的策略，即带标签的 SSML 策略与带问句的语境提示策略，不能用事后挑选最好的样本代替可部署收益。论文对每条件生成 5 个样本再平均，正是为了避免挑选最优样本夸大效果。

硬件预算、推理延迟与合成成本在原文中未报告，因此不能从自然度或准确率推断部署开销。

### 听起来像人吗，说对了吗？

自然度与真人感的结果显示人类仍然领先，但领先幅度不是压倒性的。下段先提出比较问题：在相同听评条件下，哪个系统最接近人类自然度，哪个最容易被识破为机器，指标方向是分数越高越像人。

> **看图路径：** 1. 先看横轴从 Human 到 Amazon 的八个条形顺序，再看纵轴 1 到 5 的自然度刻度；2. 比较最高的 Human 条与中间三个相近的 Gemini、ElevenLabs、Sesame 条的高度差；3. 再看右侧 Azure 中等条与 Google、OpenAI、Amazon 三个低条的落差

[![原论文 Figure 1：Average Naturalness Rating (1-5) for human speech and each TTS model.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/e8a7c2b3464f/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/e8a7c2b3464f/figure-1.png)

*论文图 1。原论文 Figure 1：“Average Naturalness Rating (1-5) for human speech and each TTS model.”。*

上图是 8 个说话人与模型的平均自然度条形图，纵轴为 1 到 5 分。从像素可见人类条最高，接近 3.8 到 3.9，中间 3 个相近的高条是 Gemini、ElevenLabs 与 Sesame，都在 3.2 到 3.3 附近，Azure 居中约 2.7，Google、OpenAI 与 Amazon 3 个低条在 1.8 到 2.1 附近，Amazon 最低。原文报告的统计检验支持模型间存在显著差异。这说明只听流畅度，头部 3 个系统已经相当接近人类，而 SSML 一侧的 Amazon 牺牲了自然度。下段解释代价：高自然度并不保证像人，也不保证说对，需要结合来源判断与焦点准确率一起看。

下表整理自然度与来源判断的关键数字，比较问题是流畅分数高是否等于难以分辨，公平条件是同一批 179 段音频的同一批听者，指标方向都是越高越像人。

| 评价维度 | 指标与方向 | 人类基线 | Gemini | Sesame 与 ElevenLabs 对照 | Amazon |
| --- | --- | --- | --- | --- | --- |
| 自然度 | 5 点量表越高越自然 | 约 3.85 | 约 3.2-3.3 区间 | Sesame 约 3.2-3.3，ElevenLabs 约 3.2-3.3 | 约 1.8-2.1 区间最低 |
| 来源判断 | 被判为人类比例越高越像人 | 最高 | 55.75% | Sesame 76.47%，ElevenLabs 38.11% | 被正确识破为 AI 达 94.37% |

表后解释需要点出反例。

Sesame 是未胜出自然度第一但赢得最像人的系统，76.47% 试次被当成人，Gemini 为 55.75%，而同样自然度很高的 ElevenLabs 只有 38.11% 被当成人，说明平滑流畅与音色像人是两回事。Amazon 的代价最明显，自然度最低且 94.37% 试次被正确识别为 AI，但后文会显示它在焦点清晰度上有补偿。总体上听者能以 75% 到 90% 的准确率分辨人与 AI，意味着以假乱真尚未实现。

**自然度 × 焦点可辨度：** 自然度指听起来像不像人说的流畅语音，焦点可辨度指听者能否听出强调的是 Molly、mailed 还是 melon，前者分工是评价音质平滑性，后者分工是评价交际有效性，搭配理由是好听不等于说对，组合后才能暴露流畅但含混与生硬但清晰的两类失败。

下段转向来源判断的第二张图，先提出比较问题：在被判为人类比例上排序是否与自然度排序一致。

> **看图路径：** 1. 先确认纵轴是被判断为人类发音的试次比例，从 0 到 1.0；2. 比较 Human 最高条与 Sesame 次高条，再看 Gemini 与 ElevenLabs 的明显落差；3. 注意最右侧 Amazon 条几乎贴近零，说明机器感最明显

[![原论文 Figure 2：Proportion of Stimuli judged as Human for each speaker/model.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/e8a7c2b3464f/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/e8a7c2b3464f/figure-2.png)

*论文图 2。原论文 Figure 2：“Proportion of Stimuli judged as Human for each speaker/model.”。*

上图是被判为人类比例的条形图，纵轴从 0 到 1.0。从像素可见人类条最高接近 0.9，Sesame 次高接近 0.75，Gemini 第三接近 0.5 到 0.6，ElevenLabs 与 Azure 在 0.2 到 0.4 之间，OpenAI、Google 与 Amazon 依次走低，Amazon 几乎为零。这与自然度排序不完全一致，ElevenLabs 的高自然度没有转化为高真人感，这是后文自然但含混判断的重要依据。

### 焦点位置越靠后，模型错得越多吗？

焦点准确率的结果揭示了位置敏感性与宽窄不对称。下段先提出比较问题：在 4 种焦点条件下，哪个位置最容易，哪个位置崩得最厉害，指标方向是听者选对预期焦点的比例越高越好。
下表整理总体与分位置准确率，公平条件是词串相同的最小对立集，指标方向越高表示语用传达越有效。

| 比较对象 | 总体或分条件指标 | 人类基线 | Gemini | Amazon | ElevenLabs 反例 |
| --- | --- | --- | --- | --- | --- |
| 主语窄焦点 | 句首目标选对率越高越好 | 76.5% | 81.0% | 79.0% | 未胜出 |
| 宾语窄焦点 | 句末目标选对率越高越好 | 高位参考 | 56.0% | 86.0% | 接近随机 |
| 宽焦点 | 无强调识别越高越好 | 相对稳健 | 约 29% 接近随机 | 约 24% 接近随机 | 相对较好 |

表后解释必须同时讲收益与代价。收益是句首最容易，Gemini 与 Amazon 在主语焦点上甚至超过人类基线，分别达 81.0% 与 79.0% 对 76.5%。代价是目标越靠后越难，宾语焦点只有 Amazon 维持 86.0%，Gemini 掉到 56.0%，其余多接近随机。

另一组代价是宽窄互斥，擅长窄焦点的 Amazon 与 Gemini 在宽焦点上只有 24% 与 29%，接近随机，论文解释为默认重读内容词尤其是首词；反过来擅长宽焦点的 Google Cloud 与 ElevenLabs 则因过度平滑而缺乏窄焦点所需的声学对比。ElevenLabs 总体 29.92% 是关键负结果，它证明高自然度可以与低可辨度并存。
下段用散点图看自然度与准确率的权衡，比较问题是是否存在兼得右上象限的系统。

> **看图路径：** 1. 先确认横轴是平均自然度 1 到 5，纵轴是焦点准确率百分比；2. 找到右上角的人类基线点，再看 Gemini 居中偏右、Amazon 居左高位、ElevenLabs 居右低位；3. 注意底部红色虚线附近的随机水平，比较各模型离该线的距离

[![原论文 Figure 4：Trade-off between Naturalness and Focus Accuracy.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/e8a7c2b3464f/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/e8a7c2b3464f/figure-4.png)

*论文图 4。原论文 Figure 4：“Trade-off between Naturalness and Focus Accuracy.”。*

上图横轴是平均自然度，纵轴是焦点准确率百分比。从像素可见人类点独占右上，Gemini 居中偏右相对最均衡，Amazon 居左高位属于生硬但清晰，ElevenLabs 居右低位属于自然但含混，Azure、Google 与 OpenAI 居中，底部红色虚线为随机水平。这支持论文的极化判断，目前没有模型同时占据高自然与高准确的理想区。
下段用声学对比度解释感知差异，比较问题是物理差异越大是否听得越准。

> **看图路径：** 1. 先确认横轴是声学对比度的欧氏距离，纵轴是感知焦点准确率百分比；2. 沿蓝色回归线从左下向右上看 Sesame、ElevenLabs 到 Amazon、human、Gemini 的排列；3. 注意偏离阴影带的 OpenAI 点，思考物理距离与听感并不完全一一对应

[![原论文 Figure 6：Correlation between acoustic contrastiveness and perceptual accuracy of focus production.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/e8a7c2b3464f/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/speechprosody-2026/e8a7c2b3464f/figure-6.png)

*论文图 6。原论文 Figure 6：“Correlation between acoustic contrastiveness and perceptual accuracy of focus production.”。*

上图横轴是欧氏距离表示的声学对比度，纵轴是感知准确率。从像素可见回归线向右上倾斜，Gemini 靠极端音高偏移落在最右，Amazon 靠刚性拉长落在中右高位，人类居中高位，而 Sesame 与 ElevenLabs 聚在左下，OpenAI 明显偏离阴影带。这支持总体对比度与感知准确率强相关的报告，但 OpenAI 的偏离提醒相关不是因果，还需看峰位是否放对。

**声学对比度 × 感知准确率：** 声学对比度指焦点词与非焦点词在时长、基频和强度 3 维归一化空间中的欧氏距离，感知准确率指听众选对焦点条件的比例，前者分工是给出物理差异大小，后者分工是给出交际结果，搭配理由是验证物理夸张是否真的转化为可听线索，组合意义在于把听感差异回溯到可测量的发音策略。

### 声学上错在哪里，结论边界在哪里？

声学分析把听感差异拆到 3 个线索。时长方面，人类对焦点成分有清晰拉长，Amazon 最像人类，在各条件下都有明显的时长峰，Gemini、Sesame 与 OpenAI 有中等敏感但拉长幅度弱，Google Cloud、Azure 与 ElevenLabs 几乎平坦，不随提示改变时长。基频方面，人类变化相对克制，Gemini 与 Azure 峰值很高，像是对自然强调的夸张模仿，Sesame 最接近人类轮廓但仍有偏离，只有 Gemini、Azure 与 ElevenLabs 把峰值位置与目标词对齐较好。强度方面，人类调制比基频稍明显，Gemini、OpenAI 与 Google Cloud 能把强度峰与目标词对齐，但 Google Cloud 波动剧烈，在极端之间剧烈摆动。

论文的综合判断是大多数模型物理信号不够分明，且位置越靠后越难，推测是注意力或韵律规划在句中衰减，缺乏足够的前瞻来标记句末成分，但这属于待验证的解释，不是直接测量的机制证据。边界同样要说清。目标句只有一句，语言只有美国英语，人类基线只有 10 人且性别不均衡，被试招募来自大学系统，统计细节与试次量未完全公开。

SSML 标签写法、隐式提示的措辞、采样温度等超参数未系统报告，因此结论限于所测版本与所测提示，不能推广到所有语料与所有说话风格。未测量误判率之外的延迟、成本与长句表现，不承诺这些维度得到改善。

### 要复现这套评测，先做什么？

复现的第一步是重建最小对立集。固定目标句为 Molly mailed a melon，准备 4 个问句分别诱发宽焦点、主语、动词与宾语焦点，保证人类与隐式模型看到完全相同的问答配对，显式模型在对应成分上加 emphasis 标签。每个条件每个系统生成 5 个独立样本，保留原始波动后再平均。第二步是重建人类基线，招募美国英语母语者按同样范式多遍录制，做剪裁与幅度归一化，注意记录性别、年龄与录制环境，因为原文样本性别不均衡会影响基频分布。

第三步是重建测量链，用 Charsiu 做词级强制对齐生成 TextGrid，再用 Praat 提取每词时长、最大基频与平均强度，时长换算为相对句末词的比值，基频与强度在说话人与模型内做 z 分数归一化，每条件平均 5 个样本。第四步是重建听评，用 PCIbex 或等价平台组织 179 段左右的音频集，每试次依次做五点自然度评分、人类或 AI 二选一、五选一焦点判断，3 个任务顺序固定以保证可比。

第五步是重建统计与可视化，对自然度做 Kruskal-Wallis 检验，对来源判断与模型与焦点交互做卡方检验，再绘制自然度条形图、来源比例条形图、自然度与准确率散点图以及声学对比度与准确率散点图。需要补的验证包括公开完整提示词与标签写法、报告被试量与随机化方式、报告合成参数与版本号，以及在新句子与新语言上检验位置效应是否重复。资源状态方面，本次未发现可验证的代码与数据绑定，因此复现应从上述文字条件重新实现，不假设存在官方脚本。

### 何时值得尝试这类评测，还需补哪项验证？

当你的目标是从读对字转向说对话义时，这套方法值得尝试。它用词串相同而语境不同的设计，把语用理解从音质评价中分离出来，适合在上线前检查问答、朗读与对话系统是否会放错重音。如果应用只要求平稳播报且不传递对比含义，那么宽焦点优先的平滑系统已经够用；如果应用需要回答谁做了什么、纠正误解或朗读有信息焦点的文本，则需要显式检验窄焦点尤其是句末焦点的可辨度。

选择路线时要记住论文的权衡，手工标签精确但增加负担且覆盖不了全部细微差别，隐式语境提示可扩展但不保证精确。实践中可以先测主语焦点作为最容易的探针，再测宾语焦点作为压力测试，若句首已失败则无需继续，若句首通过但句末失败则指向规划前瞻不足。还需补的验证包括更多句式与更长句子、不同语言的焦点实现、噪声与电话信道下的可辨度，以及自然度之外的延迟与成本测量。

最终判断应表述为报告显示头部系统能改变焦点但不均衡且不自然与准确兼得，位置效应与声学对比度相关得到数据支持，而注意力衰减等机制解释仍是可能有待验证，不能当作已证明的因果。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

另有 5 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://www.isca-archive.org/speechprosody_2026/kuang26_speechprosody.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 speechprosody-2026 论文汇总](/posts/conference-speechprosody-2026/)
