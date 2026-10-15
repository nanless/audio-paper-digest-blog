---
title: "People Making Conversation: Evaluating How Naturally Speech Models Converse"
date: 2026-10-15
draft: false
tags: [轮次切换, 基准设计, 基准测试, 语音, 音频问答]
categories: [论文速递]
description: "论文把实时语音系统放到 176 段闲聊的真实停顿和话轮末尾，比较它是否像真人一样保持沉默或接话，最强证据是托管 API 几乎从不沉默而全双工模型才会沉默，代价是历史输入通道不同且标注和触发方式影响结论适用范围。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.12802"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "在真人停顿处考语音对话：该沉默时沉默吗"
paper_digest_original_title: "People Making Conversation: Evaluating How Naturally Speech Models Converse"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.12802v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.12802v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.12802v1.pdf"
paper_digest_primary_task: "轮次切换"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "0a0847314ab2059d95efac33376414498e598a1f02a1486869bee0efc481d1f7"
paper_digest_tags_concepts: [{"facet":"task","id":"task.turn-taking","label":"轮次切换"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文把实时语音系统放到 176 段闲聊的真实停顿和话轮末尾，比较它是否像真人一样保持沉默或接话，最强证据是托管 API 几乎从不沉默而全双工模型才会沉默，代价是历史输入通道不同且标注和触发方式影响结论适用范围。"
paper_digest_authors: [{"affiliations":["People Make Things"],"name":"Arya Bastani"},{"affiliations":["People Make Things"],"name":"Iman Modarressi"}]
paper_digest_abstract_sha256: "21e22154e8261018db9a3b5579abab0b688eb10dd6f40bdb1cc0711a40c574a6"
paper_digest_sidecars: {"citation.bib":{"sha256":"39989c130e25cc64dbfd0b7cbdc582cbc6105be7ab2532ea441a0e5cab2b5371","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-12802/citation.bib"},"citation.json":{"sha256":"7f23c00f2b2b77fbd1477dd5fc46b7bebbbab2617ad23ad93591bf80adca0f16","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-12802/citation.json"},"citation.ris":{"sha256":"1a374d468653010b476f270c9a38f9bbd8c173c6e19b24e8fd22ebf64525d762","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-12802/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"cb2fa1f6a30b464e11fe92284c17ed93a8793c8b66c03ea6247725cbc217def7","url":"/audio-paper-digest-blog/data/papers/2026-10-15/2610-12802/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "c8386bda10fc3e9e24543b390140888151bc35df21bc93b38aaff8286ce8c116"
paper_digest_api_reader_plan_sha256: "1af0ee0711a9246f2503a594944186031a0a7834be67f120b4131390e821d7a0"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "c51edbe09f9e33189c60ca189bb38a1b80bc9680862d7a3e4be64e8b2dfa2dd9"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "dc8965ef13e44bbbca121f4889d9ad8221843d925b2161bf093d3ca9a80576e2"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "6e4c07593967ee874a9fb179391e8d899fb19132ca61e429b073eafd91ec1d6a"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "8fae7bab2bd2c4e9f1e7c0d105b0d885c681b017db9cc949777f7a092dcd24ac"
paper_digest_api_reader_resource_count: 3
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 在真人停顿处考语音对话：该沉默时沉默吗

> 英文题目：*[People Making Conversation: Evaluating How Naturally Speech Models Converse](https://arxiv.org/abs/2610.12802v1)*

> 标签：#轮次切换 | #基准设计 | #基准测试 | #语音 | #音频问答
>
> 评分：**6.6/10** | 创新 1.5/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Arya Bastani：People Make Things
- Iman Modarressi：People Make Things

## 📌 核心摘要

实时语音对话系统在每次停顿都要决定保持沉默还是接管话轮，难点在于停顿可能是话轮内犹豫也可能是真正交接，系统只能依据此前对话和实时音频判断。论文从Seamless Interaction的176段无脚本闲聊中选出427个话轮内暂停点和482个话轮结束点，评测先把该时刻前按164秒上限截断的历史连同身份提示预载给系统，其中全双工模型听双通道音频、托管模型读文本加尾段音频，形成的上下文直接作为待测起点。再把后续语音实时流入让系统在真实边界上实际生成，其音频输出进入同一套代码对照人的行为计分：暂停点统计沉默与抢话及延迟，话轮结束点统计首词延迟、相对人的时长与词数比及词F1与嵌入余弦相似度，并用30秒到120秒历史后的口头提问测记忆。相对已有检测类、策略类和总量统计类评测，该工作不只判边界是否标对，而是让生成式系统在真实边界上实际走一遍。在427个暂停点的暂停评测中，以抢话延迟为指标，托管系统在基于静音的端点器下延迟约1秒到4秒，长于全双工模型216毫秒到373毫秒的抢话延迟，且几乎每停必答而只有后者经常沉默。在30秒到120秒历史后的对话记忆评测中，以Claude Opus 5.5为裁判的对话召回准确率为指标，读文本历史的托管系统为41%到60%，高于听音频历史的全双工模型的17%到22%。PersonaPlex与Moshi自托管于Modal A100各48个会话，各API端点与推理响应延迟已在原文给出，完整训练与部署费用仍无法据此得出，上述结论受所测端点设置及历史通道不同影响。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/People-Make-Things/people-conversation-bench> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 语音对话要在每个停顿处决定说不说

刚接触语音对话的读者可以先把任务想成听众的即时选择：对方停下来时，我是接话、只应一声，还是继续听。这个选择不能只看此刻有没有声音，还要看之前聊了什么、对方是不是还没讲完。论文把自然定义得很具体：真人在该位置沉默，系统也沉默；真人在该位置回复，系统也回复，且时机和长短接近。不请人打分，只把系统生成的东西和同一位置真人的做法直接对比。

输入是到该时刻为止的对话历史加上实时听到的当前说话，输出是系统在该时刻是否开口、何时开口、说了多久和说了什么。必须保留的信息是历史语境和实时音频的时间关系，丢掉时间就无法判断是抢话还是正常接话。论文的动机是已有评测多在测边界检出、规则服从或整体统计，没有直接测这个每次停顿都要做的决定。

### 已有评测测的是检出、规则还是总体统计

论文把相关工作分成 3 类。检出类问系统有没有在人工标的位置报出话轮结束、停顿、应答声或打断，例如 TurnBench、Talking Turns 和 Full-Duplex-Bench v1，每类都对在轮内停顿处触发扣分。规则类问系统在规则要求说话时是否说话，或能否边聊边完成任务，例如 Speak or Stay Silent、CoDeTT、Instruct-FD、Full-Duplex-Bench v2 和 v3、MTR-DuplexBench。总体类问生成对话在统计上像不像人，或人更喜欢哪个。下面的对照表先看双人对话语料的规模和采集方式，再看评测基准测什么、是否对比了与真人相同的延续做法，有助于理解本研究的互补位置。

| Corpus | Hours | Setting | Spontaneous | Turn-taking labels |
| --- | --- | --- | --- | --- |
| Switchboard [16] | 260 | telephone | yes | turns only |
| Seamless Interaction [21] | >>4,000 | in person, one channel per speaker | naturalistic subset | ours (§3.2) |

上表说明双人语料大多是电话或众包，只有 Seamless Interaction 是每人 1 通道的面对面自然闲聊，这正是本研究取材的原因。论文强调受控合成刺激和自然闲聊各有用途，系统应该两类都测。已有托管系统在某些检出评测里看起来能在停顿处保持，是因为那些评测让服务商的轮次检测器决定何时结束，本研究则是在静音端点器触发后就要求回答，测的是这种配置下的行为和延迟，不能混为一谈。

### 本研究与检出类基准的输入和计分有何不同

最接近的是检出类，但输入、目标和运行阶段并不相同。检出类输入的是待标事件，目标是报出事件的时间，监督来自人工标注。延续类输入的是同一段真实对话历史，目标是在真人面对过的边界上做出同样的生成动作，参照是同一位置真人的保持或接话。下面的基准对照表把种类、数据、计分内容和是否延续对比列在一起，比较条件是同为轮次相关评测，但不能把类别差异写成同条件胜负。

| Benchmark | Kind | Data | What is scored | Contin. |
| --- | --- | --- | --- | --- |
| Full-Duplex-Bench v1 [6] | detection | synthetic probes, CANDOR, ICC | pause takeover, backchannel rate and timing, latency, interruption | – |
| TurnBench [7] | detection | own actor corpus | end of turn and interruption: recall, FPR, latency | – |
| Ours | continuation | 176 naturalistic conversations | hold vs. takeover at pauses; latency, length, content at turn ends; recall vs. history | ✓ |

读这张表要注意最后一列是否延续。只有本研究在自然对话的同一边界上计分生成延续，其他多为检出或任务完成。这意味着本研究的结论只在所选的热闹闲聊和所用触发方式下成立，不能推广为所有对话或所有端点器配置下的能力排序。

### 要回答的三个具体问题是什么

论文把自然拆成 3 组可测问题。第一，在说话人中途停顿、听者本没有说话的位置，系统是沉默等对方继续，还是在停顿内抢话，或延迟到对方恢复后才说话。第二，在话轮真正结束、真人做了实质回复的位置，系统多久开始说、说了多长、措辞与真人回复有多接近。第三，在听完 30 到 120 秒历史后，系统能否答对关于早些事实的口头提问。3 个问题共用同一套真实对话输入，但计分窗口和参照不同。

暂停点参照是保持沉默，话轮结束点参照是真人回复，记忆点参照是事先抽取的事实答案。理解这三者的参照差异，后面看沉默率、时长比和记忆准确率才不会混淆指标方向。

### 整体流程如何从历史走到实时计分

1 次试验分两段。先预载历史，最多取当前话轮前 164 秒，这是为了迁就 PersonaPlex 的上下文窗口。全双工模型听到的是双通道音频加词时间戳的 teacher-forced 历史，托管模型读到的是已完成轮次的文本加末尾用户音频，因为接口只能这样喂。每个说话人还有一段由 GPT-4o 根据 transcript 写的 1 次性身份提示，说明自己是谁、与对方的关系，并把助手历史当成自己此前的发言。

然后进入实时流：在暂停点，系统实时听到当前话轮、标注的暂停和说话人恢复，全双工逐帧走过静音，托管的服务端端点器会在静音上触发；在话轮结束点，托管收到显式结束信号并被要求回答且关闭服务端语音检测，全双工则要自己从音频判断结束，之后喂静音帧直到停止或到 30 秒上限。只计分第一遍 rollout，第二遍只发布不报告，所有输出都带输入时间戳以便重算。

下面这张示意图是理解暂停计分的关键，先看上下文与计分区如何切分，再看暂停区间与延迟起点，读完再回到文字。

> **看图路径：** 1. 先看上方上下文与右侧计分区如何划分；2. 再看虚线停顿起点与蓝色恢复点之间的暂停区间；3. 最后看红色系统语音落在区间内即算抢占、延迟从起点算起

[![原论文 Figure 1：A pause point. The system is preloaded with the conversation up to the active turn (context),…](https://arxiv.org/html/2610.12802v1/fig1_protocol.png)](https://arxiv.org/html/2610.12802v1/fig1_protocol.png)

*论文图 1。原论文 Figure 1:：“A pause point. The system is preloaded with the conversation up to the active turn (context), then hears the active turn live.”。*

图中上排是对方说话人，下排是系统。左侧是已预载的上下文，右侧是计分区。黑色虚线是说话声停止处，系统可能误以为话轮结束；蓝色是说话人恢复，中间即暂停。只有落在该区间内的系统带词语音才算抢占，延迟从暂停起点到系统首词计算。话轮结束点则不在此图计分，而是截断直播流后计分回复本身。

### 对话从哪里来，标签如何标出停顿

语料是 Seamless Interaction 中自然子集的 1395 段至少 7 分钟的提示闲聊，2 人拿话题卡自由聊。论文按热闹程度选出 176 段，6 个指标取自公开 transcript 和语音活动：说话时长均衡、每分钟轮替、短句率、问句率、最长独白占比的补数、每分钟重叠，取 6 个百分位排名的均值，0.75 以上入选，共 35.9 小时，平均 12.2 分钟，中位 8.7 分钟。作者明确说这是按热闹程度的选择，所报比率不是总体估计。标签方面，每人单通道标出语音起止、话轮、停顿、应答声和重叠。语料自带语音活动和 transcript，至少 350 毫秒无 transcript 的浊音段用 Qwen3-ASR 转写并用 Qwen3-ForcedAligner 对齐。

规则引擎先闭合一说话人内部至多 250 毫秒的缝隙，把对方说话期间至多 1 秒且两词以内的听者片段标为应答声，再向前看 5 秒判定是停顿还是话轮结束。另有语音活动投影模型和启发式标记可疑标签，19933 个话轮中标出 5447 个待查。所有参评窗口都经过 2 人接受式检查。

**暂停点 × 话轮结束点：** 暂停点指同一说话人话轮内部的静音，真人听者没有说话、说话人随后继续；话轮结束点指话轮真正交接、真人做了实质回复的位置。前者考系统会不会误把中途停顿当成轮到自己，后者考系统接话的时机、长短和内容，两者搭配才能同时看到克制和回应两方面的自然程度。

为帮助建立数量感，176 段对话共有 19933 个话轮、26094 个轮内停顿、4974 个应答声和 16698 个重叠，话轮中位长 2.4 秒，轮内停顿中位 0.55 秒，这也是暂停点要求至少 600 毫秒的原因，大部分短停顿被门限滤掉。

### 三类评测点如何挑出来并防止混入噪声

176 段对话约有 46000 个候选边界，分 2 阶段筛选。硬门限先去掉无法干净计分的：短于 600 毫秒或有听者重叠的停顿、短于 1 秒或三词的当前话轮、回复晚于 3 秒或少于五词的话轮结束，以及通不过语音门限的音频。幸存者按暂停长度、话轮上下文和边界前最后几词的启发式打分，每对话每类至多留 3 条，再由 GPT-4o 读 transcript 窗口剔除不连贯、实为交接、被打断片段和无回应回复，并按诱惑程度排序，零分永不选中。最终得到 427 个暂停点和 482 个话轮结束点，本次运行各抽 300 个。

按构造，暂停点处听者无词，话轮结束点处真人有实质回复，因此参照是保持或接话，不含应答声。记忆点另设：对每个在目标前有完整话轮的 30、60、90、120 秒前缀，用 Qwen3-TTS 克隆用户声音提问。对话记忆问前 30 秒内某方说过的具体事实，常识对照问固定 12 题中的一题。46 段对话有合格的对话事实，共 184 个对话记忆点，常识点抽 300 个。

**静音端点检测 × 语义轮次检测：** 静音端点检测指说话声停止后经过固定静音时长就触发回复，例如 300 毫秒或 500 毫秒；语义轮次检测指结合语义判断对方是否真的讲完，论文只测了低急切度一档。前者是本研究托管系统在暂停点的主要触发策略，后者是用来对照说明换一种等待策略会如何改变抢话时机。

**全双工模型 × 托管实时接口：** 全双工模型指自己边听边说、没有外部端点器强迫它开口的 PersonaPlex 和 Moshi；托管实时接口指 GPT Realtime、Gemini 3.1 Flash Live 和 Grok Voice，由服务端的语音活动检测决定何时结束用户轮次。前者能自然保持沉默，后者在所测静音配置下几乎必被要求回答，因此两类系统的沉默率不能直接理解为模型本身的判断能力差距。

**对话记忆问答 × 常识问答对照：** 对话记忆问答指针对前 30 到 120 秒内某一方说过的具体事实提问，考系统是否留存了历史；常识问答对照指问与历史无关的固定常识题，考系统是否正常作答。两者搭配才能区分是记不住历史，还是连问题都没听懂或没回答，前者是记忆问题，后者是注意和作答问题。

**抢占 × 保持沉默：** 抢占指系统在标注的暂停区间内发出带词语音，即把本该继续听的位置当成了自己的话轮；保持沉默指在整个暂停区间内不发出带词语音。论文以真人全部保持沉默为参照，抢占率越低越接近真人，但还要看延迟，因为托管系统很多话是延迟后落在说话人恢复之后，这不算抢占也不算恰当接话。

举例有助于理解记忆提问的角色设定：系统扮演说话人 1，问题用说话人 2 的克隆声音问，问题中的我指说话人 2，你指说话人 1，正确答案要从说话人 1 立场陈述事实，无论事实最初谁说的。这是一个教学例子，不是新增数据。

### 本研究训练了什么，实际计算是什么

本研究没有训练任何对话模型，也没有更新被测 6 个系统的参数。实际计算是语料选择、规则标注、启发式排序加模型筛选、语音合成提问、实时 rollout 采集和门限计分。需要说清的几项：参数冻结或更新不适用，因为系统是现成调用或自托管推理；梯度不经过任何被测系统；监督只出现在构造阶段，即 GPT-4o 选点和抽事实、Claude Opus 5.5 判记忆对错。

重置指每次 rollout 从同一点重新预载历史和实时流，不跨点携带状态。能量门限的阈值、释放比和最小时长用 Whisper 词时间戳在系统自身输出上校准，阈值取 0.01，原因是它是仍不漏掉已标注话语的最高阈值，且在暂停 rollout 上起始偏差中位为零。门限本身仍是弱分类器，有词 transcript 才算回复，无词但过门限的算无词发声并单独报告。缺失的是人工逐窗复核日志和人类方差，论文只给了 11 段对话的人工重标对比，不能据此推出系统输出确定。

### 测了哪些系统，什么固定、什么不同

被测 6 个实时语音系统分两族。自托管全双工是 PersonaPlex-7B 和 Moshi，在 Modal 上跑，听历史为双通道音频，无端点器。托管是 GPT Realtime 的 300 毫秒和 500 毫秒两种静音设置、Gemini 3.1 Flash Live 和 Grok Voice，历史为文本加末尾音频，暂停点用各家服务端检测，话轮结束和记忆点关闭检测并显式提交。另有仅暂停点的 GPT 语义轮次检测低急切度档。固定的是同一点集、同历史上限、同身份提示、同实时帧、同语音门限和同套计分代码。

不同且未隐藏的是历史通道，全双工听音频、托管读文本，因此跨族记忆比较带此 caveat。参照方面，从不说话和总是零延迟说话给出边界，真人按构造在暂停全保持、在话轮结束全接话。相似度有实测下限和上限，记忆有文本模型读 transcript 得 97% 的上限，说明题本身可答。指标方向是沉默率越高越好、抢占和延迟后说话越低越好、时长词数比接近 1、相似度和记忆准确率越高越好，延迟和相似只在有词 rollout 上取中位，置信区间是对对话的自助法，因为同对话共享说话人和话题。

### 在真人沉默的停顿处谁沉默谁抢话

先看暂停点的总体行为，再看时间如何决定结果，最后回到端点器是不是真正的策略，读图时注意黑色代表沉默，真人应全黑。

下面左图是各系统在暂停处的动作构成，中图是首词相对暂停结束的位置，右图是暂停抢占率对话轮结束回复率，真人星形应在左上，读完三幅再看数字。

> **看图路径：** 1. 先看左图各系统黑色沉默段占比，全双工才有明显黑色；2. 再看中图托管曲线全部升到顶部，说明最终都开口了；3. 最后看右图托管点贴在必说线上，真人星形在左上

[![原论文 Figure 2：Pause points. (a) What each system did at the person’s pause; the person stayed silent, so more…](https://arxiv.org/html/2610.12802v1/fig2_pause.svg)](https://arxiv.org/html/2610.12802v1/fig2_pause.svg)

*论文图 2。原论文 Figure 2:：“Pause points. (a) What each system did at the person’s pause; the person stayed silent, so more black is better.”。*

中图托管曲线都升到顶部，是因为每个托管 rollout 最终都说话了；红色全双工线较低，因为部分 rollout 一直沉默。右图托管点贴在必说线上，说明它们在话轮结束几乎必答，而暂停抢占率则因延迟不同而分散。语义检测只跑了暂停点故缺席右图。

下表比较暂停与话轮结束的核心数字，比较问题是在相同点集和相同计分下沉默、抢占、延迟和时长的差异，公平条件是同历史上限和同门限，指标方向是沉默越高越好、抢占越低越好、时长比接近 1。

| 条件 | 指标 | 真人参照 | 全双工示例 | 托管示例 |
| --- | --- | --- | --- | --- |
| 暂停点 | 沉默份额 | 1.00 | PersonaPlex 0.22，Moshi 0.39 | GPT Realtime 0.01 至 0.02，Gemini 与 Grok 0.00 |
| 暂停点 | 暂停内抢占 | 0.00 | PersonaPlex 0.34，Moshi 0.29 | GPT Realtime 0.26 降至 0.17，Gemini 0.18，Grok 0.07 |
| 话轮结束 | 首词延迟 | — | PersonaPlex 1.1 s，Moshi 常已在说 | GPT Realtime 0.5 s，Grok 0.9 s 含 0.5 s 等待，Gemini 1.7 s |
| 话轮结束 | 时长比 | 1.00 | PersonaPlex 7.81，Moshi 3.38 | GPT Realtime 约 3.6，Gemini 3.28，Grok 1.39 |

表后解释要回到机制。托管在所测静音配置下几乎从不沉默，沉默 0 至 2%，全双工才规律沉默 22% 和 39%。托管中位暂停标注长 0.97 秒，而托管首词中位 1.0 到 3.9 秒，因此话落在暂停内还是人恢复后，主要由延迟决定而非语境判断，Grok 抢占最低是因为最慢而非最克制。把 GPT 静音窗从 300 提到 500 毫秒，抢占从 26% 降到 17% 并延迟 80 毫秒，说明端点器即策略。语义低急切度在 173 个共享暂停上沉默 5%、暂停内抢占 6%、人恢复后说话 88%，首词中位在暂停结束后约 6 秒，改变时机多于改变是否开口。

限制是这些数字只适用于所测配置和热闹闲聊，不能推广为模型在其他检测器下也会如此，且标注移动 250 毫秒可重排个别系统但不改变托管从不沉默、全双工才会沉默的家族差异。

下表比较记忆问题的回答情况，比较问题是同样听完 30 到 120 秒历史后能否说出早先事实，公平条件是同一价值评估模型打分，托管读文本历史而全双工听音频历史。

| 系统 | 对话记忆范围 | 常识对照范围 | 历史通道 | 判断者 |
| --- | --- | --- | --- | --- |
| Grok Voice | 46 to 70% | 84 to 89% | 文本 | Claude Opus 5.5 |
| GPT Realtime | 43 to 49% | 95 to 98% | 文本 | Claude Opus 5.5 |
| Gemini 3.1 Flash Live | 38 to 42% | 62 to 73% | 文本 | Claude Opus 5.5 |
| PersonaPlex | 13 to 20% | 16 to 40% | 音频 | Claude Opus 5.5 |
| Moshi | 17 to 28% | 16 to 40% | 音频 | Claude Opus 5.5 |

表后解释要分开记忆和注意力。托管常识题答对率高，说明对话记忆的丢失是记不住；全双工常识题也只有 16 到 40%，说明很多是根本没有作答。历史长度从 30 秒拉到 120 秒没有单调下降，差异落在自举区间内。限制是跨家族比较带有通道差异，托管读的是文字，全双工听的是声音，所以不能直接说模型记忆力差了多少，只能说在各自输入方式下测得如此。

### 话轮结束接得快吗，说得长吗，像真人吗

话轮结束先看快慢，再看长短，最后看内容，3 个维度方向不同，不要用快慢代替该不该说。

下图左为首词延迟，中为时长比，右为词数比，虚线是真人，箭头表示区间超出轴，零处表示话轮结束前已在说话，读图先定位中位点再看区间。

> **看图路径：** 1. 先看左图首词延迟的中位点与区间长度；2. 再看中图与右图虚线为真人，多数系统点在右侧；3. 注意超出坐标轴的箭头表示区间很长

[![原论文 Figure 3：Turn-end points. (a) Latency to first word.](https://arxiv.org/html/2610.12802v1/fig3_eot.svg)](https://arxiv.org/html/2610.12802v1/fig3_eot.svg)

*论文图 3。原论文 Figure 3:：“Turn-end points. (a) Latency to first word.”。*

可见托管分布紧，GPT 四分位宽不足 100 毫秒，全双工在零处有堆积且尾部很长。时长上几乎所有系统都长于真人，Grok 最接近，中位时长比 1.4，词数比 1.14，而 PersonaPlex 时长比达 7.8。Moshi 约两成 rollout 无词，相似度中位 token F1 仅 0.10 至 0.12，略高于乱序下限 0.08，远低于自身 transcript 上限 0.88，说明接了话但内容与真人回复相去甚远。

记忆部分先看是否记得，再看是不是根本没答题，左为对话记忆随历史长度，右为常识对照，红色是听音频的系统。

> **看图路径：** 1. 先对比左图对话记忆与右图常识对照的纵轴高度；2. 再看红色全双工线整体低于黑色托管线；3. 最后看随 30 到 120 秒历史长度变化是否平稳

[![原论文 Figure 4：Recall accuracy against history length, (a) conversation recall and (b) fact recall, a…](https://arxiv.org/html/2610.12802v1/fig4_recall.svg)](https://arxiv.org/html/2610.12802v1/fig4_recall.svg)

*论文图 4。原论文 Figure 4:：“Recall accuracy against history length, (a) conversation recall and (b) fact recall, a general-knowledge control, judged by Claude Opus 5.5.”。*

托管读文本时对话记忆在 38% 到 70% 之间且随 30 到 120 秒无明显下降，全双工听音频时在 13% 到 28% 之间。常识对照把记忆与注意分开：托管常识达 62% 到 98%，丢分多为记忆问题；全双工常识仅 16% 到 40%，多数是没答所问。严格词匹配下托管降到 19% 到 26%，全双工为 12% 到 15%，托管领先缩小约三分之二，说明模型评判对意译更宽容。限制是跨族比较混入了文本与音频通道差异，且 30 秒上限截断使全双工九成仍在说话，时长含后续再起，不能当成单次回复的干净下界。

### 换端点器、挪边界、换评判会改变结论吗

这一节把已验证的对照放在一起，回答结论的稳健范围。配对比较显示 GPT 两种静音设置在 296 个同点上，32 个都抢、46 个仅 300 毫秒抢、18 个仅 500 毫秒抢、200 个都不抢，长窗把约六分之一的抢占转为保持，反向约十六分之一。暂停越长越易被抢，GPT 在 0.8 秒以下抢 5%、2.5 秒以上抢 69%，正是延迟读反过来的曲线。边界扰动显示标注起止移动 250 毫秒可改变个别排序：托管随结束移动变化大，全双工随起点移动变化大，但托管从不沉默、话多落在暂停后、Grok 最少抢、端点器效应方向不变。

评判方面，Claude Opus 5.5 与 GPT-4o 在对照上一致 97% 到 99%，在对话记忆上一致 82% 到 93%，不改变排序；严格匹配则大幅压低托管，提示意译是宽容来源。未胜出项是语义检测并未带来高沉默，只是更慢；负结果是记忆不随历史长度单调下降，长度差异在自助区间内。尚未评测的是话轮结束播放真人回复后的行为和流式音频历史给托管的对照。

### 哪些限制决定了结论何时成立

论文用一节明确列出适用边界。历史通道不同使跨族记忆差距部分是通道差距；托管近零沉默是所测静音端点器配置的属性，不是模型做不出保持的证明；语义检测只测了一档且仅暂停点。硬件层面，计分可能阻塞共享音频流、排空可能长于排队播放，因此到 30 秒上限不等于一直在说，全双工时长可含后续再起，延迟可含卡顿。

选点和抽事实仍用 GPT-4o，与两家被测系统同供应商。话轮结束触发按族不同且未测回复播放。门限是能量阈值，无人类方差，每点只报一遍。标签是规则引擎加抽查，42 个重叠窗口显示 80% 以上边界在 250 毫秒内，但暂停窗中 7 个有人耳可闻的应答声，说明对方并非全静。语料为英语双人对话，热闹筛选使比率非总体估计。

这些限制不是技术缺陷，而是复用结论时必须保留的条件。

### 复现第一步做什么，需要什么资源

复现第一步是拿到点集和 harness，按论文的 164 秒历史上限、24 千赫脉冲编码调制音频、暂停后 3 秒加至多 8 秒静音、话轮结束 30 秒截断重放同一点。标签、点位、harness 和全部输出在论文给出的仓库地址发布，但本次只验证到第三方链接可达，不能写成作者资源已公开或可运行，代码开源、权重可下载、系统可运行要分开确认。

系统版本要对齐：GPT Realtime 用 2025-08-28，Gemini 用 3.1 Flash Live 预览，Grok 用 grok-voice-latest，PersonaPlex-7B 和 Moshi 自托管在 Modal，托管暂停点服务端检测参数如阈值 0.5、前缀 300 毫秒和静音时长要一致，Grok 话轮结束需等提交事件加 0.5 秒并用特定方式关闭检测，否则延迟多出约半秒。计分沿用同一能量门限 0.01、释放比和最小时长，有词才算回复。关键超参数是端点器静音时长和语义急切度，信息条件是历史通道文本还是音频、是否给身份提示。

建议先跑暂停沉默与抢占，再跑话轮结束延迟与时长比，最后跑记忆并同时用模型判和严格词匹配双计分，以暴露意译宽容。

### 什么时候值得尝试，还缺哪项验证

当你的场景是自然闲聊中的轮次克制，例如避免在对方换气停顿处插话，这个基准值得尝试，因为它直接测了同位置的保持与抢占以及延迟落在何处。当你需要快速接话且不在意多说几句，托管在所测配置下延迟 0.5 到 1.7 秒且必答，可作为基线；当你需要能沉默、能以 216 ms 到 373 ms 左右的中位延迟打断，全双工是唯一展示该行为的族，但要接受它停不下来、记忆问答弱的代价。

还缺的验证是流式音频历史给托管的对照、更多语义检测档位、话轮结束播放真人回复后的竞争说话，以及中文或其他语种、非热闹对话上的重测。容易误解的是把托管的低抢占当成克制，Grok 例子说明慢也会降低抢占；把时长比长当成内容好，相似度接近下限说明多说不等于说得像；把记忆领先当成纯记忆优势，通道和评判宽容都参与其中。

回到 3 个问题：值得尝试的是热闹双人闲聊的轮次评测，复现先对齐点集与端点器，补验证的是通道一致后的记忆与更多检测器覆盖。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.12802v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-15 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-15/)
