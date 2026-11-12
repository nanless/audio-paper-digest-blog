---
title: "LongCap: Hour-Scale Timestamped Audio Captioning via Chunk-wise Processing"
date: 2026-11-12
draft: false
tags: [音频字幕生成, 自回归模型, 基准测试, 长音频处理, 说话人分离标注]
categories: [论文速递]
description: "论文把长录音切块并交错输出带起止时间的结构化事件描述，用相对时间和保留上下文支撑长度外推，在接近两小时的人工基准上验证时间线与描述质量，并发现事件依赖需要更大模型。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.11125"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "LongCap：用分块交错生成做小时级带时间戳音频描述"
paper_digest_original_title: "LongCap: Hour-Scale Timestamped Audio Captioning via Chunk-wise Processing"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.11125v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.11125v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.11125v1.pdf"
paper_digest_primary_task: "音频字幕生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-captioning","label":"音频字幕生成"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"setting","id":"setting.long-audio","label":"长音频处理"},{"facet":"task","id":"task.diarization","label":"说话人分离标注"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把长录音切块并交错输出带起止时间的结构化事件描述，用相对时间和保留上下文支撑长度外推，在接近两小时的人工基准上验证时间线与描述质量，并发现事件依赖需要更大模型。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jinchuan Tian"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sen Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wenbin Huang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Chao Weng"},{"affiliations":["Independent ResearcherEqual contribution Project lead"],"name":"Zhengwei Huang"},{"affiliations":["Independent ResearcherEqual contribution Project lead"],"name":"Jiatong Shi"},{"affiliations":["Independent ResearcherEqual contribution Project lead"],"name":"Yichen Lu"},{"affiliations":["Language Technologies Institute, Carnegie Mellon University"],"name":"Haoran Wang"},{"affiliations":["Language Technologies Institute, Carnegie Mellon University"],"name":"Shinji Watanabe"},{"affiliations":["Independent ResearcherEqual contribution Project lead"],"name":"Cong Zhou"}]
paper_digest_abstract_sha256: "3cf8ee5f11408bd6c3ce4b878e6fb77cd5c0d3b8d4222c7af0d300f199a19ddd"
paper_digest_sidecars: {"citation.bib":{"sha256":"251b36a03cdd2e5c78e7039a8402187a47fa10c2c94f4bf490af0b509839a24d","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11125/citation.bib"},"citation.json":{"sha256":"cc450cd95f7a5ae3226bdafad063067c02cb0e8056c8b19287ca625157c7c3cd","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11125/citation.json"},"citation.ris":{"sha256":"1ab3601fcac39984589786f05915e00add788fdc108fc92436672af2c4354310","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11125/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"4f51f4b4bfb30bdcd5c3415a084a1dd8440edbc2b7181d549dca5f34a2622cf2","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11125/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "eb0cbafabbf87e09f00886543bca9f26e0f3ac26872257f6be18229b104f184e"
paper_digest_api_reader_plan_sha256: "58fd540b276f51c4535998aa5ad5797b00862a50f906da31e41b2c63b7cb8541"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "c71dbe32bcec1d31a6912bfd2af8e398f0872afcd82cb8d4906a9d79d171783f"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "0be405a1258a58d2d3bba10040d6c1303ffee1261f4c3433a6419d3a79383d67"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "20207428683b031233ceb55f0f5a6a6bc6f306a338e7b73600a4e2b028c2f68f"
paper_digest_api_reader_author_count: 10
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "07e103a5d4a19bd00ede821487291e26d7a89c6f9910c74503aa374bcb7c0adb"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 LongCap：用分块交错生成做小时级带时间戳音频描述

> 英文题目：*[LongCap: Hour-Scale Timestamped Audio Captioning via Chunk-wise Processing](https://arxiv.org/abs/2611.11125v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频字幕生成](/audio-paper-digest-blog/papers/?concept=task.audio-captioning)；[说话人分离标注](/audio-paper-digest-blog/papers/?concept=task.diarization)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [自回归模型](/audio-paper-digest-blog/papers/?concept=method.autoregressive)
- **研究条件**：[长音频处理](/audio-paper-digest-blog/papers/?concept=setting.long-audio)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.4/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Jinchuan Tian：机构信息未能在本次解析中与作者逐人可靠绑定
- Sen Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Wenbin Huang：机构信息未能在本次解析中与作者逐人可靠绑定
- Chao Weng：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhengwei Huang：Independent ResearcherEqual contribution Project lead
- Jiatong Shi：Independent ResearcherEqual contribution Project lead
- Yichen Lu：Independent ResearcherEqual contribution Project lead
- Haoran Wang：Language Technologies Institute, Carnegie Mellon University
- Shinji Watanabe：Language Technologies Institute, Carnegie Mellon University
- Cong Zhou：Independent ResearcherEqual contribution Project lead

## 📌 核心摘要

读者面对的是一到两小时含说话、音乐和环境声的连续录音，任务要求输出每个声音事件的开始结束时间与内容，整段先编码再一次性生成会让靠后事件依赖远距离检索，短录音训练的模型在更长输入上容易退化。LongCap先把录音切成连续不重叠小块并交错排列音频块与事件标签，每个标签只收录在该块内结束的事件且时间戳写成相对块起点的值，再让历史音频块与已生成标签保留在上下文中供当前块条件生成，最后用相对时间与局部发射减少长度偏置并支持百万词元上下文外推。预训练先用20分钟以内语音识别与说话人分离数据学时间定位，再用30秒以内自然语言描述学声音属性并混入长文本保持长上下文能力。微调先用大模型给15k小时短录音打结构化标签并用事件级重标注补齐块内靠后细节，再可选扩展到40分钟录音与显式事件依赖标注。在LongCapBench-TAC-Long全部4段全量录音评测中，35B-A3B自蒸馏后相比自蒸馏前时间线错误率从44.84%降至41.09%，字幕相似度从50.85%升至51.24%。在LongCapBench-TAC-Short全部1500个短片段评测中，35B-A3B自蒸馏后相比自蒸馏前时间线错误率从13.01%降至12.42%。结论适用于中英文电影与节目混合录音，尾部稀疏窗口覆盖录音减少且音乐颗粒度误差仍高，原文披露了128卡H100、每步约4M词元、10万步预训练与两轮微调的训练规模，未披露推理延迟与单次长录音解码成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 长录音理解要解决什么困难

这篇论文面对的是几十分钟到接近 2 小时的连续录音，里面同时有说话、音乐和各种环境声音，而且经常重叠。读者可以想象一部电影：人物对话断断续续，背景音乐一直铺底，中间穿插开关门、脚步、掌声等音效。任务要求模型输出一条时间线，每个事件有开始时间、结束时间和一段描述。

短片段描述只需要写一句话概括十几秒，而长录音要求全程不丢失事件、时间基本对齐、描述细节前后一致。困难来自两处。第一，如果等听完 2 小时再一次性写出几千个事件，每个事件的文字离它的声音证据在序列中很远，检索容易失准。第二，训练时最长只见到 20 分钟或 40 分钟录音，推理时却要处理 2 小时甚至拼接出的 16 小时，长度超出训练分布。论文先在监督充足的语音识别与说话人日志上验证分块与时间写法，再把同一套做法迁移到更一般的事件描述。

### 已有路线与本文位置

语音识别回答说了什么，说话人日志回答谁在何时说话，音频标签回答出现了哪类声音，音频描述则把这些方面写成一段自由文本。近年描述器开始同时处理语音、音乐和环境声，有的用自由文本，有的用结构化格式，还有的给每个事件加时间戳。论文把带起止时间和描述的事件列表称为时间戳音频描述，并要求描述是闭合键集合上的键值对，便于按方面直接检查。

长语音识别与日志已有按窗口解码、跨块缓存说话人信息、远场会议评测等工作，一次读入几十分钟的整体式做法也已出现。音频侧已有按独立短块处理、30 秒上限的描述器、30 分钟输入与人工验证基准等探索。论文的不同在于保留跨块上下文的分块交错生成、62 键的结构化描述，以及覆盖中英文、短长两种尺度并接近 2 小时的人工基准。比较时要注意输入长度、是否保留上下文、输出是自由文本还是结构化事件，这些条件不同就不能直接排胜负。

### 输入输出与结构化描述是什么

给定一段录音，模型要预测一个事件列表，每个事件是开始时间、结束时间和描述三元组。事件可以重叠，例如人物说话的同时背景音乐持续，论文把它们写成两个时间重叠的条目。所有属性与时间戳组装成嵌套的 JSON 对象并序列化为纯文本，因此任务仍是音频到文本的转换，建模的是给定音频下事件序列的条件分布。

结构化是指每个事件的描述不是一段散文，而是一组键值对，键来自预先定好的闭合集合，值是一小段精确自然语言，只有适用时才出现。键集合是与语音、音乐和影视专业人员协作制定的，共 62 个，覆盖说话人身份、转写语言方言、响度音色韵律、速度调式旋律、混响距离噪声、情感意图修辞等六大类。语音、音乐、音效分别涉及 33、25 和 9 个键，共享键只出现一次。举例说，语音事件可能填说话人编号、转写文本、语言口音、语速停顿和意图，音乐事件填乐器人声、速度拍号调式和情绪，音效事件填事件辨识、距离和前后景分离。

**时间戳音频描述 × 语音识别与说话人日志：** 时间戳音频描述指对录音中每个声音事件给出开始结束时间和文字描述，语音识别与说话人日志是它的特例，此时描述只保留说话人编号和转写文本；前者把对象从语音扩展到语音音乐音效，后者为分块与指标设计提供了可大量监督的试验床。

下面这张示意图展示了重叠事件与属性字典的写法，读图时先分清声层再看每张卡片填写了哪些键。

> **看图路径：** 1. 先看上部波形示意中语音音乐声音三层的重叠方式；2. 再看下部三个事件卡片各自包含的时间戳与属性键值；3. 注意同一时间可并存多个不同类型事件

[![原论文 Figure 2：TAC format. A schematic excerpt of long-form audio illustrates overlapping speech, music, and…](https://arxiv.org/html/2611.11125v1/timeline.png)](https://arxiv.org/html/2611.11125v1/timeline.png)

*论文图 2。原论文 Figure 2:：“TAC format. A schematic excerpt of long-form audio illustrates overlapping speech, music, and sound events with start/end timestamps and structured attribute dictionaries.”。*

图中上部是一段示意波形，下方 3 条带分别表示语音的 6 个短句、音乐的一整段铺底和声音的 3 个离散事件，同一时刻可以有多层活动。下部 3 张卡片分别给出语音、音乐和声音事件的起止时间与键值对，例如转写文本、乐器与调式、包络与距离等。这说明输出既要定位又要按类型填写不同属性，时间重叠的层需要写成多个并列条目。

### 分块交错生成如何组织长输入

整体式做法是把整段录音编码进上下文，然后再自回归解码全部事件。论文采用的分块式做法是把录音切成连续不重叠的块，每块音频之后紧跟该块的标签，序列形如音频块一、标签一、音频块二、标签二依次排列。标签的归属规则是所有在该块内结束的事件都归入该块，跨块事件只归入其结束所在的块。解码时保留此前的音频块和已生成标签作为上下文，但当前块的标签只以前缀音频和历史标签为条件，这是分块的因果假设。

**整体式处理 × 分块式处理：** 整体式处理指先把整段录音全部编码再自回归解码全部事件，事件描述离其音频证据很远；分块式处理指把录音切成连续不重叠块并按块交错读入音频和写出标签，保留历史块和已生成标签作上下文，使每个事件在包含其结束点的块之后就近输出，重复同样的局部步骤以支撑更长输入。

论文给出这种因式分解要计算什么：它把整段录音下事件序列的概率写成各块标签概率的连乘，每块以此前所有音频块和此前所有标签为条件。

\[P(E\mid X)=\prod_{k=1}^{K}P\big(Y_{k}\mid X_{\leq k},\,Y_{\lt k}\big).\]

其中符号分别表示录音与事件序列、块序号与前缀，条件项对应声音证据与已写出的历史描述。运算上先形成此前块的音频表示与文本历史，再合并生成当前块的事件列表，结果又成为下一块的历史。

论文解释了这样做的两点理由。第一是就近输出，事件描述在包含其结束点的块之后就写出，不必等到 2 小时听完，仍保留更早的块用于长程证据。第二是减少长度偏置，更长录音只是重复同样的局部输出步骤，对基座模型的长上下文能力依赖则通过训练中的长文本混合来保持。下面这张对比图把两种路径画得很清楚。

> **看图路径：** 1. 对比上排整体式先读全部音频再写全部描述的路径；2. 观察下排按块交错读写的顺序与保留历史箭头；3. 注意每个标签紧跟其对应音频块之后输出

[![原论文 Figure 4：Holistic (top) versus chunk-wise (bottom) processing of a long recording.](https://arxiv.org/html/2611.11125v1/figure3.svg)](https://arxiv.org/html/2611.11125v1/figure3.svg)

*论文图 4。原论文 Figure 4:：“Holistic (top) versus chunk-wise (bottom) processing of a long recording.”。*

图中上排用长箭头表示先读全部音频再写全部描述，下排用交替小块表示读一块写一块并保留历史。可见分块路径中每个标签离其音频更近，同时历史信息通过保留的上下文继续传递，这正是支撑长度外推的关键结构。

### 时间写法、块大小与长文本如何确定

论文在语音识别与说话人日志这个监督充足的任务上做消融，得到 3 个设计选择。相对时间戳是指事件起止时间写成相对所在块起点的时间，恢复录音级时间时再加块起点，跨左边界事件起点为负。实验中绝对时间戳在超出 20 分钟训练范围后说话人日志完全失效，相对时间虽使词错误率略有变化，但避免了这种失效，因此被采用。

块大小比较了固定 32 秒、连续均匀分布 8 到 32 秒、离散集合 8、16、24、32 秒 3 种策略，性能差异很小，最终训练和推理都从离散集合中随机采样每块时长。长文本是指加入最长 256k 词元的文本序列一起训练，论文称这能保留基座模型的长上下文与文本能力，加入后词错误率更低，但该对照同时改变了训练混合与词元预算，解释时要留有余地。

**相对时间戳 × 长文本混合训练：** 相对时间戳指事件起止时间写成相对所在块起点的时间，解码后再加块起点恢复到录音级，跨左边界事件起点为负，用于避免绝对时间超出训练时长范围后失效；长文本混合训练指在音频数据之外加入最长 256k 词元的文本序列一起训练，用于保留基座模型的长上下文与文本能力，两者分别解决时间外推和上下文能力退化。

举一个讲解用的例子：假设某块从第 64 秒开始、长 32 秒，块内某句话相对时间为 2.5 秒到 8 秒，模型输出相对时间，推理后再加 64 秒得到录音级时间。若该事件从上一块延续过来，相对起点可为负值，这正是相对写法能自然表达跨块事件的地方。该例子只说明换算关系，不代表实测精度。

### 事件依赖监督如何构造与评估

模型保留全部音频与描述历史，但训练标签多来自短窗口标注，跨事件联系不显式。为此论文用外部模型分析事件序列，为每个事件指定一个语义相关的更早事件作祖先，把当前编号与祖先编号写入训练目标。沿祖先链接回溯就形成描述事件演化的链，例如同一人物再次出现、同一音乐动机再现或同一声源延续。

评估时用两个外部模型在参考事件上独立标注依赖作为银参考，这些图来自文本推导而非音频验证的一致真值。另用匹配器对齐预测与参考事件，只保留时间重叠的对应，链接支持度衡量发出链接中被参考支持的比例，连通性衡量直接与传递的同实体一致程度。论文报告长集上 122B 明显高于 35B，但两者仍远低于短集，且参考事件经同一程序重标后分数更高，说明低一致性部分来自事件本身与匹配不完备，不能直接读作记忆失败。

### 两阶段训练与密度修复怎么做

模型用 Qwen3.5 系列语言模型作骨干，规模覆盖 0.8B、2B、9B、35B-A3B 和 122B-A10B，音频编码器来自 Qwen3-Omni-Captioner 并经线性适配器接入，文本位置用交叉熵损失，训练时全部参数更新。超过 256k 词元的上下文用 YaRN 扩展到 1M 词元。预训练混合按词元计为日志、描述、文本 1:1:1，微调为 3:1:1。

预训练要同时学时间预测与属性预测。时间监督来自最长 20 分钟的语音识别与日志数据，属性监督来自最长 30 秒的自然语言块级描述，这些块拼成最长 10 分钟的训练录音，再加上最长 256k 词元的长文本，得到基础模型。

微调分两步并有两个可选扩展。种子监督用 15k 小时音频，平均 49 秒、最长 10 分钟，按至多 1 分钟切块独立生成结构化描述再拼回，训练得到第一版微调模型。此时发现密度退化，即同一块内靠后事件填写的属性越来越少。于是用第一版模型预测时间，截出每个事件音频再独立标注一次，得到 10k 小时事件级重标注数据，训练得到第二版，属性密度随位置更平稳。

**种子监督 × 事件级重标注：** 种子监督指把每段录音切成至多一分钟片段独立生成结构化描述再拼回录音级标签，用于建立基本的时间戳音频描述能力；事件级重标注指用已训模型的预测时间截出单个事件音频再独立标注一次，用于恢复块内靠后事件丢失的属性细节，两者分工为先有时间与粗描述再补全密度。

可选的长度扩展增加 20k 小时音频，其中约 10k 小时来自长于 20 分钟、最长 40 分钟的录音，用第二版模型标注，最长音频描述序列接近 256k 词元训练上限。可选的事件依赖建模用外部模型分析事件序列，为每个事件指定一个语义相关的更早事件作祖先，把当前编号与祖先编号写入训练目标，形成描述事件演化的链，以提供长程依赖的显式监督。

### 如何度量时间、粒度和描述质量

评估前先解决事件对应问题。一般音频事件没有说话人编号那样的身份标签，论文用文本大模型提出 3 个候选分组，每个事件恰属一组，组内可多对多或一侧为空，3 个指标各自取最优分组下的分数。分组按 60 秒步进、15 秒回看推进并合并共享事件的组，得到录音级分组。

时间线错误率把漏检、误报和组间混淆时长相加，除以合并组内重叠后的参考活动时长。粒度错误率比较共享活动被切成几个事件，一对一匹配下拆分或合并都会减少匹配重叠，重复预测通过预测总时长减并集时长计入，分母是参考事件总时长。时间约束描述相似度只在参考与预测区间重叠或至多相隔 5 秒的组内计分，按键池化非空值并由文本模型对共享键打 0 到 1 的语义分，精确率与召回率分别除以预测与参考键数再取均值。

**时间线错误率 × 粒度错误率 × 时间约束描述相似度：** 时间线错误率衡量在语义分组内漏检误报和组间混淆的时间，分母是参考活动时长，越低越好；粒度错误率用一对一匹配衡量事件被拆分合并或重复的程度，覆盖相同也可能扣分，越低越好；时间约束描述相似度只在时间相近的组内比较同键属性值的语义一致，取精确率与召回率的均值，越高越好，三者分别回答时间对不对、切分对不对、描述像不像。

公式上时间线与粒度错误率可写成在候选分组上取最小的归一化误差。

\[\mathrm{TER}=\min_{\mathcal{G}^{(m)}}\;\frac{T^{(m)}_{\mathrm{miss}}+T^{(m)}_{\mathrm{fa}}+T^{(m)}_{\mathrm{conf}}}{T^{(m)}_{\mathrm{ref}}},\qquad\mathrm{GER}=\min_{\mathcal{G}^{(m)}}\;\frac{T^{(m)}_{\mathrm{overlap}}-T^{(m)}_{\mathrm{match}}+T^{(m)}_{\mathrm{dup}}}{\sum_{i=1}^{n}\big(t^{e}_{i}-t^{s}_{i}\big)}.\]

其中分子各项分别是漏检误报混淆或重叠减匹配加重复，分母分别是参考活动时长与参考事件总时长，下标表示不同分组候选。例如参考 0 到 10 秒被切成两个 5 秒预测，覆盖不变但只能匹配 5 秒，时间线误差为 0 而粒度误差为 0.5；同一区间预测两次则通过重复项计为 1。

下面这张示意图把 3 类计分直观化，读图时先分清误差段与匹配段，再看时间约束的作用。

> **看图路径：** 1. 看左图漏检误报混淆三段误差的划分；2. 看中图重叠相同但一对一匹配与重复的扣分；3. 看右图只有时间相近才计算语义相似度

[![原论文 Figure 3：TAC scoring metrics. (a) TER measures timeline mismatch, (b) GER measures event granularity…](https://arxiv.org/html/2611.11125v1/figure2.png)](https://arxiv.org/html/2611.11125v1/figure2.png)

*论文图 3。原论文 Figure 3:：“TAC scoring metrics. (a) TER measures timeline mismatch, (b) GER measures event granularity mismatch, and (c) tcpCapSim measures time-constrained caption similarity.”。*

左图用不同颜色标出误报、混淆、正确与漏检的时间段，中图用重叠与一对一匹配说明拆分与重复的扣分，右图用双向箭头表示只有时间相近才比较语义，否则相似度记零。这对应了时间、切分、内容 3 个维度的分工，分母与聚合方式不同不能直接换算。

基准 LongCapBench 覆盖语音识别日志与时间戳描述的短长子集，标签均经人工定稿。描述标注从强模型草稿出发，先校正时间再逐属性核验，并按属性分给专长组，音乐等需要专业知识的环节成为吞吐瓶颈。短描述子集有 1500 段，平均约 0.74 分钟；长描述子集有 4 段影视节目，平均约 105.70 分钟，最长 117.05 分钟。日志长子集有 15 段会议，约 50 分钟到 78 分钟。

### 语音日志在长录音上是否稳定

论文报告分块模型在 5 组语音日志条件上的宏观平均取得最低的日志错误率、词错误率及按说话人拼接的两种错误率，并在长会议子集的 5 分钟窗口内词错误率全程低于 10%，日志错误率在 60 分钟前低于 9%，之后采样稀疏的尾部有所上升。在远场自发语音上，多数基线已难以实用，而分块模型仍可处理。

下面第一张结果表回答分块是否必要，它比较同为 2B 规模的整体式与分块式在长日志子集上的表现，指标越低越好。

| Model | DER | WER | cpWER | tcpWER |
| --- | --- | --- | --- | --- |
| holistic processing | 109.13 | 80.59 | 115.87 | 147.16 |
| chunk-wise processing | 20.30 | 12.74 | 29.01 | 34.80 |

这一比较聚焦相同规模下整体式与分块式处理长录音的差异，条件为长日志子集，指标为日志错误率、词错误率及两种拼接词错误率，方向均为越低越好。分块式在四项上全面大幅低于整体式，代价是需要维护跨块历史与相对时间恢复，整体式在超出训练长度后失效。但该表是缩减数据训练的 2B 模型对照，分数不能直接与主结果的 35B 模型相比。

下面第二张表回答远场长语音的可用性，比较多系统在 4 个 CHiME-6 会话上的微平均，最大音频长度达 2 小时 40 分钟。

| Model | DER | WER | cpWER | tcpWER |
| --- | --- | --- | --- | --- |
| Doubao ASR 2.0 | 69.90 | 53.77 | 69.48 | 77.04 |
| Qwen3.8-Omni-Flash | 79.07 | 69.25 | 71.35 | 75.59 |
| LongCap-Diar (ours) | 29.04 | 37.08 | 32.29 | 34.14 |

LongCap 在日志错误率与拼接指标上明显低于所列基线，但在词错误率上仍有约 37% 的绝对误差，显著高于短而干净条件，说明长而嘈杂下的绝对可用性仍然有限，且取最优近场的协议与实际部署不同。该表保留了 MOSS、VibeVoice-ASR 等实际可运行基线，低分表示误差小，高分接近 100% 表示基本失效。

### 事件描述在短片段与两小时上表现如何

短描述子集上，两个 LongCap 变体在描述相似度上超过所评估基线，时间线准确度有竞争力，而强基线在粒度错误率上仍更低。长描述子集的分段比较中，LongCap 在描述相似度与时间线误差上优于所评估对手。整段测量延伸到 117.1 分钟，后段某些窗口时间线误差升高，音乐粒度误差在未绘制的最后部分窗口较大，覆盖也从 4 段减少到 1 段。论文还说明长描述上多数语义组对某些对手无假设事件，这会使它们的粒度错误率显得很低，因此不能只看粒度一项。

下面这张长描述基准随时间变化的曲线显示了稳定性差异，横轴为分钟，左中越低越好、右侧越高越好。

> **看图路径：** 1. 看横轴从 0 到 120 分钟三组曲线的走势差异；2. 对比 LongCap 曲线与其余基线随时间发散的程度；3. 注意左中越低越好、右图越高越好

[![原论文 Figure 1：Timestamped audio captioning (TAC) results on the LongCapBench-TAC-Long benchmark.](https://arxiv.org/html/2611.11125v1/figure1.svg)](https://arxiv.org/html/2611.11125v1/figure1.svg)

*论文图 1。原论文 Figure 1:：“Timestamped audio captioning (TAC) results on the LongCapBench-TAC-Long benchmark.”。*

图中 LongCap 的两条曲线在 2 小时内相对平稳，而其余基线在 10 分钟内就明显发散。曲线走势支持长程稳定性判断，但具体数值仍要看表与窗口样本量，尾部样本减少时波动会放大，不能把末段单点当作全程水平。

下面第 3 张表换一个角度比较描述内容偏好，它用参考与 4 个匿名候选的成对偏好衡量内容覆盖与矛盾，50 表示持平。

| LongCap model | Baseline | Short (95% interval) | Long (10-min chunks) |
| --- | --- | --- | --- |
| LongCap-35B-A3B | AF-Next | 88.30 (86.80–89.63) | 97.22 |
|  | LAT | 98.97 (98.48–99.39) | 97.78 |
| LongCap-122B-A10B | AF-Next | 87.75 (86.21–89.19) | 97.22 |
|  | LAT | 99.20 (98.78–99.54) | 98.89 |

这一比较衡量 LongCap 与另外两种描述器的原生内容质量，短集用 1500 段并按源聚类自助给出区间，长集用 4 段录音的 10 分钟不重叠块，分数为平局折半后的偏好百分比，越高表示更偏好 LongCap。LongCap 对两种基线的偏好多在 88% 到 99% 之间，长块上接近 97% 到 99%，代价与限制是单法官、参考不完备、风格可辨，且偏好不度量时间准确性与音频验证的正确性，长集仅 4 段源，区间含义与短集不同。

下面第四张表整理长度扩展自蒸馏前后的变化，短集为全部 1500 段，长集为全部 4 段整段，箭头表示期望方向。

| 条件 | 指标 | 35B-A3B 变化 | 122B-A10B 变化 |
| --- | --- | --- | --- |
| 整段长录音 | TER 越低越好 | 44.84% 到 41.09% | 42.35% 到 39.64% |
| 短片段 | TER 越低越好 | 改善较小 | 改善较小 |

主要收益是整段时间线错误率下降，35B 从 44.84% 到 41.09%，122B 从 42.35% 到 39.64%，而短集时间线改善较小，长集粒度也下降但相似度变化不一。这与把监督延伸到更长录音的预期一致，但长集仅 4 段，平均值易受单段影响，不能推广为任意长音频的固定降幅。

### 规模、密度与依赖各带来什么变化

持续预训练在短任务上增益温和，在长识别与日志上改善更大。微调后从 0.8B、2B 到 9B、35B，短集时间线下降、相似度从约 61.65% 和 62.58% 升到 64.42% 和 64.59%，粒度变化不大。更大的实际增益在长音频：0.8B 与 2B 在远超训练范围时频繁出现无效或重复描述，无法可靠评估整段，因此 9B 与 35B 成为描述任务的实用规模，122B 在此之外增益有限。

密度方面，第一版标签与数据中块内靠后事件填写属性更少，第二版事件级重标注使各位置更均匀，模型也学到这种更平稳的分布，从而在整段输出中保持事件级细节。依赖方面，用两个外部模型的银参考衡量祖先链接支持与连通性，短集上 35B 与 122B 的连通性已较高，长集上从 4.2% 升到 14.8%，差距仍大。用同一标注程序重标预测事件可进一步提高分数，但这混合了新链接与编号规范化的作用，不能单独解释为模型学到的依赖语义，长集 4 段样本与不完备匹配也限制了作为长程记忆准确度的解读。

### 结论在什么条件下才成立

所有长描述结论都建立在 4 段影视节目上，语言为中英各两段，体裁集中在电影与节目，平均 100 多分钟。整段曲线后段样本从 4 段降到 1 段，尾部误差与音乐粒度问题不能推广到一般长音频。短集虽有 1500 段，但平均不足 1 分钟，体裁与声学分布也与 2 小时不同。

指标依赖文本模型提出分组与打分，分组候选只有 3 个，相似度打分是离散档，时间容差 5 秒，这些选择会影响绝对值。依赖评估的银参考来自文本推导而非音频验证的一致真值，匹配不完备，未胜出项包括强基线在短集粒度上的优势、小模型在长集上的不可用，以及大模型在描述相似度上相对 35B 的有限增益。16 小时拼接实验只为证明可处理很长输入，拼接后说话人数远超训练分布，日志类误差上升，且是累积误差与顺序平均，不能当作自然 16 小时的性能。

一个易误解是把偏好百分比当成准确率或时间准确性，原文明确偏好只衡量内容覆盖与矛盾并忽略模式、时间戳数值与转写精确匹配。另一个易误解是把相对时间或分块当成必然提升，原文对照显示相对时间在词错误率上略有代价，长文本对照还改变了混合与预算，只能说在超出训练长度时避免灾难性失效。

### 复现第一步与需要补的验证

复现应先从语音日志的分块基线做起，因为监督充足且失败模式清晰。按离散集合随机切块，事件按结束块归属，输出相对时间并在推理后加块起点恢复，保留历史音频与标签，训练混合中加入长文本，最大训练音频先设 20 分钟。验证相对与绝对时间在超长输入下的行为差异，以及固定与随机块大小是否确实不敏感，再把同一流程迁移到结构化描述。

需要补的验证包括更多长源与体裁、不同分组候选数与时间容差下的指标稳定性、人工对时间与属性的抽查而非仅模型打分，以及推理开销与最大输出限制下的失败率。论文给出训练步数、学习率、上下文并行与推理重试策略，但数据多为私有与模型标注，长基准音频仅研究许可未必可再分发，因此完整复现数据与标注流水线仍有缺口。本篇未发现可验证的作者公开代码、模型或数据资源，不得声称已公开，来源未确认也不视为技术缺陷。

### 何时值得尝试这种做法

当任务要求输出整段事件时间线且输入远长于训练长度时，分块交错加相对时间是值得尝试的起点，它把每次输出保持在事件附近并重复局部步骤，适合会议、节目、电影这类长程混合音频的持续描述。若只需要短片段一句话概括或已有充足的整体式长上下文预算，则不必照搬全套。

规模选择上，9B 与 35B 在描述质量与成本间较平衡，122B 的主要额外价值在事件依赖恢复而非描述相似度。若关心人物关系、音乐动机再现或音效因果链，需要另做依赖标注与评估，不能只看相似度。部署前应在自己的长录音上测整段时间线、尾部覆盖与无效输出率，并明确最大块数与 1M 词元上下文的成本，再决定是否加入长度扩展与依赖监督。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.11125v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-12/)
