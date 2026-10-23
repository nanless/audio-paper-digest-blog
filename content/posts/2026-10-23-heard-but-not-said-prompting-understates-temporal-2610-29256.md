---
title: "Heard But Not Said: Prompting Understates Temporal Information of Musical Moments in Frozen Large Audio-Language Models"
date: 2026-10-23
draft: false
tags: [音频时间定位, 表示探测, 音乐, 音频大模型, 模型评估]
categories: [论文速递]
description: "论文用同一段音频配对的状态查询与变化查询考查七个冻结大音频语言模型，发现窗口逐段打分能验证局部配器状态并在短分段编码器中随前文恢复对乐器离开的判断，而直接说出起止时间的提示几乎不能暴露这些信息，但绝对分数仍然不高且结论只在配器查询与受控构造下成立。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.29256"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "听见却说不出：冻结音频语言模型中的音乐时刻信息"
paper_digest_original_title: "Heard But Not Said: Prompting Understates Temporal Information of Musical Moments in Frozen Large Audio-Language Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.29256v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.29256v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.29256v1.pdf"
paper_digest_primary_task: "音频时间定位"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.temporal-grounding","label":"音频时间定位"},{"facet":"method","id":"method.representation-probing","label":"表示探测"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"research_focus","id":"research_focus.evaluation","label":"模型评估"}]
paper_digest_primary_method: "表示探测"
paper_digest_score: 5.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文用同一段音频配对的状态查询与变化查询考查七个冻结大音频语言模型，发现窗口逐段打分能验证局部配器状态并在短分段编码器中随前文恢复对乐器离开的判断，而直接说出起止时间的提示几乎不能暴露这些信息，但绝对分数仍然不高且结论只在配器查询与受控构造下成立。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Eunsik Shin"}]
paper_digest_abstract_sha256: "c7da078718756b2c71677338c4d6a8d52afcb94c6b7976474c9a83e54f4fb7de"
paper_digest_sidecars: {"citation.bib":{"sha256":"f85b31d10f73e82c76e552b35e496a3e6347dfe3c88a27b5ab324ede5774d9be","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-29256/citation.bib"},"citation.json":{"sha256":"1556d03398b2034d27f2ca24e2fd9533949e3d46ac4015ac8f50a6bed6a7e6b4","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-29256/citation.json"},"citation.ris":{"sha256":"72e685aec4177541b3c2f156c3f490fbf0e820e32c85cadc444d972a06a9d655","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-29256/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"50dcc01790db327a15b5332af7cabda9b5db15a1de6d715b3370c217774bd61b","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-29256/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "eb767f1296409803abd348a47bc5fabbceef5e03020c38a5c27fa1dbf6c90e82"
paper_digest_api_reader_plan_sha256: "0d5a91b89184aa359933eec1a7123098a0bcb22eaa8fdac689e1c761d5894178"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "3b831bad6feeb2d615ee76ad25efb2896e739c2d9fda8e3098383baeaf1bc6be"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "ce10e07fcbd08f15c8cea494944b5cd289531645dab6156702a2b4bf1f7f19ca"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "70796bd1b80f8c3c2ce80933505a7f3a8d702b28f79bf95e6dcf786d3406c6c9"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "1937a60e231e5e913701fd4a5b44570b778d18af9083e098359a06290874a15f"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 听见却说不出：冻结音频语言模型中的音乐时刻信息

> 英文题目：*[Heard But Not Said: Prompting Understates Temporal Information of Musical Moments in Frozen Large Audio-Language Models](https://arxiv.org/abs/2610.29256v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频时间定位](/audio-paper-digest-blog/papers/?concept=task.temporal-grounding)
- **研究方法**：[表示探测](/audio-paper-digest-blog/papers/?concept=method.representation-probing)
- **信号**：[音乐](/audio-paper-digest-blog/papers/?concept=signal.music)
- **研究重点**：[模型评估](/audio-paper-digest-blog/papers/?concept=research_focus.evaluation)
- **模型家族**：[音频大模型](/audio-paper-digest-blog/papers/?concept=model_family.audio-language)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5


## 👥 作者与机构

- Eunsik Shin：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是一段完整多乐器音乐中与文字描述匹配的起止时间，输入是整轨音频加一句查询，输出是起止秒数。难点是目标时刻与全曲共享配器和速度，只靠局部听感容易混淆，判断变化还要与之前听到的内容比较。论文先用Slakh2100分轨活动找稀疏织体紧跟乐器离开的同一片段，为其配状态查询（含义为当前有何乐器在演奏，如only piano and bass are playing）和变化查询（含义为某乐器离开后剩下何编制，如the guitar drops out, leaving piano and bass），两者共享音频使偶然基线相同。这些配对查询与同一冻结音频一起送入三种取出时间段的方式对比：整轨直接提示说出时间戳并解析文本；按滑动窗口读是与否词元差值打分，窗口恒以待判2秒结尾并在窗前增加C秒上下文，分数按每轨每查询标准化成曲线；读全轨最后提示词元对音频词元的注意力形成曲线，后两者的曲线再从峰值向外扩展成候选起止以评测。已有音乐时间定位多经提示测试，本文差异是冻结参数、控制上下文、比较编码器分段方式。七个开源权重冻结大音频语言模型上，短分段编码器中变化查询随上下文恢复，例如Qwen3-Omni-30B-A3B在570对评测中用oracle时长评测的R@1@0.5从C=0 s时0.118升到C=8 s时0.268，而整轨提示基本处于偶然水平。结论只适用于乐器编制类查询和MIDI渲染音频，真实录音与和声、节奏等属性尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 任务的输入、目标和难点是什么

输入是一整首多乐器音乐和一句自然语言描述，输出是这句话对应的开始秒数和结束秒数。模型必须保留的信息是目标段里哪些乐器在响，以及它和前后在配器上的关系。音乐的难点在于目标时刻往往和全曲共享配器、速度和整体氛围，单看一小段容易和别处混淆，定位既要靠局部证据，也要靠和周围或之前内容的比较。

论文考查的是冻结的大音频语言模型，也就是音频编码器接指令跟随语言模型、评测时不更新任何参数的系统。大家看到的现象是这类模型直接说时间戳时成绩很差，但不清楚是模型里根本没有时间信息，还是有信息却倒不出来。要回答这一点，就要把验证和定位分开，并把位置、时长和偶然猜中率控制住，否则位置偏好就会冒充能力。

### 已有路线为什么还回答不了音乐时刻的问题

视频时间定位已经从候选框方法发展到类似检测器的区间预测，音频时刻检索和帧级语言音频对齐则多针对环境声音事件，音乐相对研究得少。音乐大语言模型的时序评测大多靠直接提示要时间戳，或者靠训练来改进，训练后的提升分不清是本来就有还是新学到的。

另一条线索来自通用音频模型，激活干预、内部表征上加训练头、时间戳生成时的注意力分析都提示，提示说不出的时间信号可能藏在模型内部。但已有探针多用粗事件选择或单乐器音符，没有区分认出正在演奏什么和察觉相对前文的变化，也没有比较编码器如何分段处理时间。本文补的就是这一环，模型冻结，不加新参数，同一音频配对两种查询，只改变取出时间段的方式和前文长度。

### 配对查询怎样把认出状态和察觉变化分开

数据来自 Slakh2100，它由多乐器 MIDI 渲染而成，每种乐器有独立分轨，因此每一刻哪些乐器在响是已知的。作者寻找稀疏质地，也就是至少 3 秒内不超过 4 条分轨同时演奏、而且该组合在整轨中占比不到五分之一，同时寻找乐器离开，也就是某分轨已经持续至少 6 秒、随后静默至少 3 秒。当稀疏质地恰好紧跟一次离开开始，同一段就能写成两句话。

例如只有钢琴和贝斯在演奏是状态查询，吉他离开、只剩钢琴和贝斯是变化查询，后者包含前者的全部状态描述再加上离开信息。两句共享同一音频、位置和时长，偶然基线天然相同。原文还指出两类时刻的分布本来不同，稀疏质地集中在轨首，离开分散在全曲，配对把靠近轨首、无法紧跟离开的片段排除在外，也减轻了位置偏好。

**时间定位 × 状态查询 × 变化查询：** 时间定位是要在整首曲子里找出与一句话描述相符的开始和结束时刻。状态查询只说目标段里正在响的是什么，例如只有钢琴和贝斯，只看本段就能判断。变化查询还要说清刚离开的是什么，例如吉他离开、只剩钢琴和贝斯，必须把本段和之前听到的内容放在一起比较。两句话共用同一段音频、同一位置和同一长度，偶然猜中的概率完全一样，成绩差异只能来自查询要求的时间比较不同。

### 三种取出时间段的方式各自在问什么

模型、音频和查询都固定，只改变如何取出时间段。实验一是整轨提示，问模型能否说出何时，给整轨加上固定提示要开始和结束秒数，再解析生成文本。实验二是窗口是或否打分，问模型被递到片段时能否验证、是否需要听前文，沿时间滑动窗口，每步只评价窗口最后 2 秒是否匹配查询。实验三是整轨注意力，问模型不给窗口支架时能否自己找到，读最后一个提示词对音频词元的注意力。

下面这张图把配对构造和窗口定义画在同一个例子上，是理解后文所有对照的基础，请重点看黄色目标段与灰色前文的关系。

> **看图路径：** 1. 先看左图横轴时间和鼓、贝斯、钢琴、吉他、弦乐横条，确认黄色目标段紧跟吉他结束之处；2. 再看状态与变化两句查询如何指向同一段黄色音频，注意配对说明；3. 最后看右图黄色被评判 2 秒与灰色前文 C 如何拼接成不同长度的输入窗口

[![原论文 Figure 1：(a) Stem activity read from Slakh2100 MIDI.](https://arxiv.org/html/2610.29256v1/fig_data_pipeline.svg)](https://arxiv.org/html/2610.29256v1/fig_data_pipeline.svg)

*论文图 1。原论文 Figure 1:：“(a) Stem activity read from Slakh2100 MIDI.”。*

左图是 MIDI 读出的分轨活动摘录，横轴是秒，横条表示鼓、贝斯、钢琴、吉他、弦乐何时发声。黄色区域是目标段，只有钢琴加贝斯，它紧跟吉他横条结束之处，红色箭头标出吉他离开。两句查询指向同一段黄色音频，因此位置偏好和时长偏好被配平。右图是实验二的输入窗口，黄色是被评判的 2 秒，左侧灰色是前文 C。前文为 0 秒时窗口只有被评判段，离开事件落在窗外，变化查询无法被证实，前文变长后离开进入窗内，变化查询能否恢复就直接检验了模型是否比较了前后。

### 窗口打分如何计算：窗口、前文与分差

窗口从 t 减 C 延伸到 t 加 2 秒，总是以被评判的 2 秒结尾，以 C 秒前文开头。前文 C 取 0、2、4、8 秒，是唯一被操纵的变量。每个位置不让模型自由回答，而是读下一词的逻辑值，分数为是的逻辑值减去否的逻辑值。分数再按每轨每查询在所有窗口上做标准化，去掉某查询整体偏说是对结果的影响。

前文为 0 时模型只听到被评判段，变化查询中的离开部分不在窗内，只能靠其中残留的状态内容得分。前文变长后离开进入窗内，若变化查询分数回升，就说明模型用到了前后比较。还有一个无问题变体只算查询文本的对数概率，用来检验判断提示是否必要。

**窗口打分 × 是或否分差：** 窗口打分是不让模型直接报时间，而是沿着音轨一个窗口一个窗口地问最后两秒是否符合描述。是或否分差是下一词预测中是的逻辑值减去否的逻辑值，保留了肯定程度的强弱，可以跨位置排序。只看模型最终说了是还是否会丢掉这种强弱，而分差把每个候选片段的可信程度留了下来，这正是窗口打分能测出验证能力的原因。

### 编码器分段不同，为什么加前文的效果会不同

7 个模型按编码器组织时间的方式分成两组。4 种短分段做法把编码器自注意力限制在小块里，Qwen2.5-Omni 用 2 秒块，Qwen3-Omni 用 1 秒窗，MOSS 用 4 秒窗，长时间靠分块处理。另 3 种沿用 Whisper 式做法，每次输入都补齐到 30 秒再编码，长轨变成一串各自独立的 30 秒帧，还带有 Whisper 训练窗口继承来的绝对位置信息。

两个 MOSS 共享编码器与输入管线，管线中每隔 2 秒插入时间标记，MOSS-Music 多了音乐持续预训练与指令微调。分组的关键不在于参数量，而在于时间如何被切分和表示，这决定了窗口变长时模型看到的是连续可比的前后，还是被填充和分帧打乱的整窗。

**短分段编码器 × 补齐到 30 秒的编码器：** 短分段编码器把自注意力的范围限制在很小的输入块里，例如 1 秒、2 秒或 4 秒，长音频靠逐块处理来组织时间。补齐到 30 秒的编码器沿用 Whisper 式做法，每次输入不管多短都填充到 30 秒再编码，长轨变成一串各自独立的 30 秒帧。前者保留了小块之间的先后结构，后者每次都带大量填充和绝对位置信息。两种组织时间的方式不同，决定了多给一段前文时模型能不能用上。

### 没有训练时实际执行了哪些计算

本研究没有训练任何模型，7 个模型全部冻结，也不新增探针参数。实际执行的计算是推理、打分和构造。用 Slakh2100 分轨元数据找稀疏质地与离开并配对，再经过可听性过滤、去重、改写与检查得到 713 对。评测时对同一冻结模型做整轨提示解析、逐窗口是或否逻辑值读取、整轨注意力读取。

查询使用 13 类粗乐器，由语言模型把 1 对中的两句一起改写，并检查位置词、时长词、长度泄露、长度分布匹配和包含关系。开发集占 20%，只用来固定后处理容忍与最小长度以及注意力变体，剩下 570 对为评测集。本次没有发现来源绑定且完成验证的资源，不能说代码、模型或数据已公开，复现只能按论文文字重建流程。

### 模型、数据划分与评价规则是什么

评测 7 个开权重模型，分别是 Qwen2-Audio-7B、Qwen2.5-Omni-3B、Qwen3-Omni-30B-A3B、MOSS-Audio-4B、MOSS-Music-8B、Audio Flamingo 3 和 Music Flamingo。入选要求开权重、有明确音频词元到时间的映射、能一次读入整轨，其中 Qwen2-Audio 因上下文限制不做实验一和实验三。所有实验用同一 570 对评测集，共 1140 句查询，实验二用 1 秒步长滑动。

指标是取首个预测的召回率，标准段用交并比 0.3，已知时长用 0.5，交并比越大要求重叠越严，值越高越好。偶然基线不是随机段，而是常猜最常见位置的归一化中心与长度能达到的最好值。比较都配对到同一段，用 McNemar 检验并以轨为单位自助重采样，跨前文与状态变化差异做 Holm 校正。

从分数曲线到时间段时，标准做法从最高分向两侧扩展，只要分数还在容忍范围内就继续，并设最小长度，两个后处理参数都在开发集上固定。已知时长诊断把预测时长固定为真实时长，只评价定位。注意力读数取最后三分之一层、全部头的平均，只有在开发集上段内超出显著为正的模型才进入评测。

**标准时长 × 已知时长诊断：** 标准时长是从分数曲线的最高点向两侧扩展得到预测起止时间，再计算交并比，边界画得不准则会拉低分数。已知时长诊断把预测时长直接固定为真实时长，只评价中心位置找得准不准，用来把找错地方和画错长短两种误差分开。两者配合，才能判断低分是因为没找到，还是找到了却没画好边界。

### 只给本段时状态能否被验证

下表比较的问题是，在同一段音频上，状态查询与变化查询的窗口打分能否超过常猜基线，以及直接提示时间戳和注意力能否做到。公平条件是同一 570 对、同一冻结模型，前文只取 0 秒和 8 秒两端，指标方向都是越高越好。下面完整列出原文表 1 的全部数字，可以直接对照短分段编码器与补齐到 30 秒编码器随前文变化的分化。

实验二的具体处理是窗口沿整轨滑动，窗口记为从 t-C 到 t+2，末尾固定为待判定的 2 秒，前文 C 只取 0、2、4、8 秒。在每个位置不让模型说话，只读下一个词的是与否的分值差，再按每轨每查询做标准化，去掉查询本身爱说肯定的偏好。标准评价从曲线最高点向外扩成段，已知时长评价则把预测时长固定为真实时长，只看位置找得准不准。

|  |  | Exp. 2, standard R@1@0.3 | Exp. 2, standard R@1@0.3 | Exp. 2, standard R@1@0.3 | Exp. 2, standard R@1@0.3 | Exp. 2, oracle-duration R@1@0.5 | Exp. 2, oracle-duration R@1@0.5 | Exp. 2, oracle-duration R@1@0.5 | Exp. 2, oracle-duration R@1@0.5 | Exp. 1 R@1@0.5 | Exp. 1 R@1@0.5 | Exp. 3 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | State | State | Change | Change | State | State | Change | Change |  |  | attn. excess |
| Model | Encoder segment | C=0 | C=8 | C=0 | C=8 | C=0 | C=8 | C=0 | C=8 | state | change | state / change |
| Qwen2.5-Omni-3B | Whisper-v3 (block attn.) | 0.221‡ | 0.240‡ | 0.105 | 0.219‡ | 0.279‡ | 0.219‡ | 0.119 | 0.165‡ | 0.011 | 0.011 | ++0.041 / ++0.020∗ |
| Qwen3-Omni-30B-A3B | AuT | 0.247‡ | 0.298‡ | 0.102 | 0.312‡ | 0.242‡ | 0.265‡ | 0.118 | 0.268‡ | 0.042 | 0.025 | ++0.044 / ++0.062∗ |
| MOSS-Audio-4B | MOSS Audio Encoder † | 0.232‡ | 0.237‡ | 0.163 | 0.233‡ | 0.256‡ | 0.204‡ | 0.160‡ | 0.211‡ | 0.030 | 0.019 | n.s. |
| MOSS-Music-8B | MOSS Audio Encoder † | 0.223‡ | 0.184‡ | 0.139 | 0.170 | 0.209‡ | 0.142‡ | 0.160‡ | 0.168‡ | 0.072 | 0.042 | n.s. |
| Qwen2-Audio-7B | Whisper-v3 (30 s pad.) | 0.181‡ | 0.125 | 0.096 | 0.111 | 0.165‡ | 0.096 | 0.075 | 0.088 | — | — | — |
| Audio Flamingo 3 (7B) | AF-Whisper (30 s pad.) | 0.230‡ | 0.142 | 0.147 | 0.107 | 0.226‡ | 0.107 | 0.156‡ | 0.104 | 0.007 | 0.004 | n.s. |
| Music Flamingo (7B) | AF-Whisper (30 s pad.) | 0.214‡ | 0.135 | 0.140 | 0.114 | 0.232‡ | 0.135‡ | 0.184‡ | 0.095 | 0.012 | 0.009 | n.s. |
| Chance (best constant span) |  | 0.147 | 0.147 | 0.147 | 0.147 | 0.100 | 0.100 | 0.100 | 0.100 | 0.098 | 0.098 | 0 |

该表列出实验二标准与已知时长、实验一提示、实验三注意力的全部数字。前文为 0 时所有模型的状态查询在两种实验二评价下都高于基线，而且在同一段上状态显著好于变化。变化查询在前文为 0 时只有 4 个模型在已知时长下高于偶然，标准后处理下都不显著。对照也支持这是真正的查询音频匹配，打乱查询或换成描述本轨不存在的查询后成绩掉到接近零，而且跨轨查询的原始是或否分数显著更低。也就是说，把片段递到面前时，局部是什么在响是可以被验证的。

下面这张图把上表已知时长部分按前文展开，能直接看到状态与变化两条曲线随前文如何分叉，是区分编码器的关键证据，请先看左右两组的标题再看红蓝曲线。

> **看图路径：** 1. 先区分左侧四个短分段模型与右侧三个补齐到 30 秒模型的大标题；2. 再看每幅小图横轴前文 C 增大时红色变化曲线是上升还是贴地；3. 最后对比蓝色状态曲线的走向以及虚线偶然基线的位置

[![原论文 Figure 2：Exp. 2, oracle-duration R@1@0.5 versus preceding context C for state (blue) and change (red)…](https://arxiv.org/html/2610.29256v1/fig_group_by_C.svg)](https://arxiv.org/html/2610.29256v1/fig_group_by_C.svg)

*论文图 2。原论文 Figure 2:：“Exp. 2, oracle-duration R@1@0.5 versus preceding context C for state (blue) and change (red) queries on the 570 evaluation pairs.”。*

该图展示的是实验二窗口逐段打分在已知时长下的结果，横轴是前文秒数，纵轴是已知时长下交并比 0.5 的召回率，蓝色为状态，红色为变化，虚线为偶然 0.10。在两个 Qwen-Omni 模型中，实验二的状态与变化曲线都高于偶然 0.10，左侧 4 个短分段模型中有 3 个的红色随前文上升，右侧 3 个补齐到 30 秒模型普遍随前文下降。

另起一句说明实验三的范围不同：从整轨注意力出发的定位仍低于偶然，即使在注意力显著的两个 Qwen-Omni 模型中也是如此，说明窗口打分验证成功不等于能在整轨中找到位置。

**验证 × 定位：** 验证是把候选片段递到模型面前，问这一段是否符合描述，搜索范围由实验者给定。定位是给整轨音频，要求模型自己在全曲中找到该片段，搜索过程也要模型完成。能验证不等于能定位，前者只考查局部匹配，后者还考查在长时间里的查找。论文用窗口打分测前者，用直接提示时间戳和注意力测后者，两类结果的分化是全文的核心。

### 加上前文后变化查询能否恢复

变化查询能否在听到前文后变得可答，差异跟着编码器走。在 Qwen2.5-Omni、MOSS-Audio 和 Qwen3-Omni 中，变化随前文显著上升，其中 Qwen3-Omni 从接近偶然升到与状态持平，差距不再显著。MOSS-Audio 的差距也闭合，Qwen2.5-Omni 的差距缩到三分之一。这 3 个也是在交并比 0.3 下前文为 8 秒时变化超过偶然的仅有模型。

MOSS-Music 是短分段中的例外，变化只轻微非显著上升，状态反而下降，而它与 MOSS-Audio 共享编码器，说明编码器允许恢复不等于一定恢复，训练可以抑制这种使用。3 个补齐到 30 秒的模型语言模型和训练各不相同，行为却一致，变化无实质恢复，状态随前文向偶然退化，Audio Flamingo 3 的状态分几乎减半，到前文为 8 秒时在 0.3 下两类都低于偶然。论文提出一种可能解释是补齐隐藏了音频结束位置，前文为 0 时音频就是被评判的 2 秒，前文变长后模型要在 30 秒帧内分离出那 2 秒，判断漂向整个窗口，但也明确这是相关性证据，未必因果。

### 提示、打分变体与注意力各自丢失了什么

直接提示时间戳时，所有可测模型都在偶然或以下，而同一批配对的窗口打分好得多。提示答案多与音频无关，多数模型只按查询形状返回固定段，状态给轨首段，变化给轨中段，4 个模型在打乱音频后多数答案不变。MOSS-Music 例外，答案随打乱改变而且中心落入真段的比例是随机的 4 倍，但预测段长约 1 秒，交并比仍失败。

两个打分变体说明分差的作用。把每窗判断说成是或否文字后成绩大降，状态减半、变化掉到偶然以下，因为丢掉了分差携带的排序。去掉判断提示只算查询文本则一直在偶然，说明有用信号在显式但不生成的判断的连续分差里。注意力只有两个 Qwen-Omni 有显著的针对查询的段内超出，但定位仍低于偶然，打乱后注意力跟着内容搬到新位置，属于局部声学匹配而非整轨可靠定位。

### 结论在什么条件下才成立

下表比较的问题是绝对分数是否真高于偶然，公平条件是同一评测集上的最优常数段，指标越高越好。下面按原文连续句整理三行基线数字，对照正文大表中多在 0.2 到 0.3 区间的窗口打分，就能看出高于基线不等于绝对分数很高。

| 条件 | 指标 | 最优常数段基线 |
| --- | --- | --- |
| 标准段 | 交并比 0.3 召回率 | 0.147 |
| 标准段 | 交并比 0.5 召回率 | 0.098 |
| 已知时长 | 交并比 0.5 召回率 | 0.100 |

上表解释了为什么论文强调高于基线而非绝对高，即使显著的窗口打分也多在 0.2 到 0.3 区间，提示与注意力更低。基线做法是全集只猜同一个最常见的中心和长度，能拿多少分就算偶然，配对设计让状态与变化共用同一音频位置和时长，所以基线天然相同。范围限制也很明确，Slakh2100 是 MIDI 渲染、无人声，查询只限配器存在与消失，不涉及和声、力度、节奏与声乐结构。稀疏质地集中在轨首、离开分散各处，配对虽排除了轨首段但仍是受控构造。推广到真实录音与更丰富的音乐属性需要另做验证，论文提到可用 MUSDB18 检验，但本文没有做。

### 复现第一步做什么与容易误解之处

值得尝试的情形是已有冻结大音频语言模型，想先判断它是不会验证还是不会定位，或者想比较不同编码器对前文的使用。复现第一步是按论文规则重建配对，找到至少 3 秒的稀疏质地与至少 6 秒发声后静默至少 3 秒的离开，要求前者紧跟后者开始，再做可听性、分贝、去重与改写检查，并留出开发集固定后处理容忍与最小长度。

容易误解的是把已知时长诊断当可部署提升，它预先知道正确答案时长，只用于分离定位误差，不能当实际增益。把搜索选出的最优参数或事后最优当部署效果也是同类错误。另一个误解是看到编码器分组就断言因果，论文对补齐模型的解释明确标为可能，MOSS 两兄弟共享编码器却行为分化也提醒训练同样起作用。代码开源、权重可下载、系统可运行是三件事，本篇没有确认作者资源可用，只能按文字重建。

### 总结：提示失败低估了什么、没有解决什么

综合来看，冻结模型能验证被递到面前的局部状态，短分段模型多能随前文恢复变化验证，而整轨提示与注意力暴露的很少。提示要时间戳的失败低估了模型能验证什么，但没有低估能定位什么，可靠的整轨定位依然有限，差距大小取决于查询类型与编码器。

还需要补的验证是真实录音与人声、和声节奏类查询，以及连接局部验证与整轨定位的方法。绝对分数仍然比较温和，说明音乐时间定位仍有较大空间，后续工作应在更现实声学条件下检验同样的验证定位分离是否成立。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.29256v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-23 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-23/)
