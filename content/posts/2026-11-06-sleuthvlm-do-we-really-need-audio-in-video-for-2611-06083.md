---
title: "SleuthVLM: Do We Really Need Audio-in-Video for Omni Video Understanding?"
date: 2026-11-06
draft: false
tags: [音视频问答, 工具增强与约束解码, 语音识别, 音频字幕生成]
categories: [论文速递]
description: "针对一次看完长视频加音频容易漏掉关键几秒的问题，SleuthVLM 把语音转成带词时间戳的文本并让视觉语言模型用工具主动搜证，在四个音频视觉问答基准上平均 75.0% 领先直接听音频的一次式全能模型，代价是多轮工具调用和文本无法覆盖的音乐细节需额外工具。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.06083"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "不听声音也能看懂长视频：SleuthVLM 的搜证式问答"
paper_digest_original_title: "SleuthVLM: Do We Really Need Audio-in-Video for Omni Video Understanding?"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.06083"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.06083.pdf"
paper_digest_primary_task: "音视频问答"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"},{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"task","id":"task.audio-captioning","label":"音频字幕生成"}]
paper_digest_primary_method: "工具增强与约束解码"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对一次看完长视频加音频容易漏掉关键几秒的问题，SleuthVLM 把语音转成带词时间戳的文本并让视觉语言模型用工具主动搜证，在四个音频视觉问答基准上平均 75.0% 领先直接听音频的一次式全能模型，代价是多轮工具调用和文本无法覆盖的音乐细节需额外工具。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Peiran Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Fangfei Gou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhaoxi Mu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Changhao Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jian Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Weiqiang Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuntao Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuanchun Shi"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Junxiao Shen"}]
paper_digest_abstract_sha256: "6cafb013441e91e870f336c2f8d150b1e0dedd34e8fe590a52c7a8d728cdedbb"
paper_digest_sidecars: {"citation.bib":{"sha256":"89e41936780bb5858459fbe7c496ed03fce13eadd4f7d0e26ae5abbc5930f91c","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06083/citation.bib"},"citation.json":{"sha256":"b030cfd1523d40a13bd6e01d7dfd9ecb16ed47d35bdde7715db57fe52b461176","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06083/citation.json"},"citation.ris":{"sha256":"8ce13ffb4650010eb39dbde890266b56d8521f7b8ce88355a779c95bbd9ae3b0","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06083/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"7304abd632648051bb5d95ff533d225ddfc1f0545b9645b513591d9e1a5d8d15","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06083/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "c9432df12c0752bed8506f77615d9da70eb69de4047ffc516299698d11ff80aa"
paper_digest_api_reader_plan_sha256: "def9b27809f7775ba81304048d21299d91d2150da59c7c7311d4a7fc8581b681"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "803458cf001cea917a0d9e1c437a2a68aa3abba8c9073d1aee423bdb85d89e6d"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "e3e489af8be2e7b46bd0cc5f851a6429793242edfd2a4ae8d0c5c582929137f2"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "7bf43e9eddd90173a0880f76020fffa3962071f3e69d14f08fd67b81338f5998"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "751b9dd426769bbf4958ab980b344bf1c567eabc0fc4627e3518fa974cd0bf34"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 不听声音也能看懂长视频：SleuthVLM 的搜证式问答

> 英文题目：*[SleuthVLM: Do We Really Need Audio-in-Video for Omni Video Understanding?](https://arxiv.org/abs/2611.06083)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding) → [音视频问答](/audio-paper-digest-blog/papers/?concept=task.av-question-answering)；[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)；[音频理解](/audio-paper-digest-blog/papers/?concept=task.audio-understanding) → [音频字幕生成](/audio-paper-digest-blog/papers/?concept=task.audio-captioning)
- **研究方法**：[工具增强与约束解码](/audio-paper-digest-blog/papers/?concept=method.tool-augmentation)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Peiran Wu：机构信息未能在本次解析中与作者逐人可靠绑定
- Fangfei Gou：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhaoxi Mu：机构信息未能在本次解析中与作者逐人可靠绑定
- Changhao Zhang：机构信息未能在本次解析中与作者逐人可靠绑定
- Jian Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Weiqiang Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuntao Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuanchun Shi：机构信息未能在本次解析中与作者逐人可靠绑定
- Junxiao Shen：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是同时依赖画面和声音的视频问答，困难在于答案常藏在几秒钟内，而固定采样加单轮作答的长视频模型容易错过这些片段。论文先把音频一次性转写为带词级时间戳的文本，标出每句话的起止时间和无话段落，形成可检索的文本索引。推理用的视觉语言模型读入该转写文本、静音视频与问题，先用文本搜索粗定位相关语句窗口，再把所得起止时间送入缩略图拼接、抽帧、裁剪和短片播放等视觉工具按需取证。模型用时间重叠判断说话与画面是否同时发生，自主决定窗口与取证轮次，本身不接收音频波形，只有当推理模型是全模态模型时才额外允许有限次听音频。与直接处理采样帧加音频波形的单轮全模态模型相比，该智能体流程把一次看完全片改为按需取证，把听觉信息转为可检索的文本索引。在四个全模态基准上，该方法以 Opus 5.5 为推理模型时平均准确率为 75.0%，超出最强的闭源全模态模型 Gemini 3.8 Flash 2.6 个百分点，并在 Video-MME-v2 上领先。适用范围集中在语音占比高的问题，非语音音乐的判断能力较弱，每题预算为50轮、30张图像、10个短片和30分钟。

## 🔗 开源与复现资源

- 第三方资源：<https://wpr001.github.io/sleuthVLM/> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/WPR001/OpenOmniHarness> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 视频问答的输入是什么，要保留什么信息

这篇论文研究的任务是带选项的视频问答，输入是一段视频的画面、同一段视频的声音、一个文字问题和几个选项，输出是选出最符合证据的选项。视频长度从 30 秒到 90 分钟不等，问题常常只与其中几秒有关，例如某句话何时说、说话时画面里有什么、背景音乐何时起。

要答对这类题，至少要保留两类信息。说什么和何时说是第一类，大量问题依赖对话内容；说什么时画面里出现了什么是第二类，需要把语音时刻与画面时刻对齐。传统做法是把整条音频和稀疏采样的帧一起送进模型，一次给出答案。当视频很长时，均匀采样容易错过关键几秒，而模型没有回看机制，只能靠猜。

**全能模型 × 视觉语言模型：** 全能模型指同时接视频帧和音频波形、一次前向就给出选项的模型，它的分工是靠音频编码器把声音变成向量再与视觉对齐；视觉语言模型指只看图像和文本的模型，它的分工是保留较强的推理和工具调用能力。SleuthVLM 选择后者做推理主体，把声音先转成文本再交给它，是为了避开为听声音而做的大规模联合训练，组合后多出的是可反复定位和校验证据的能力。

### 已有两条路线为什么在这里不够用

第一条路线是全能模型，在视觉语言模型后接音频编码器，再用大量音频视觉配对数据训练，让模型一次同时看帧和听声音。它的优点是端到端，缺点是每加一种听觉能力都要重新做代价很高的联合训练，而且训练后模型的推理和工具使用能力常被削弱。

第二条路线是视频智能体，让模型分步决定看哪里。早期方法多是把视频切成字幕或把问题拆成固定步骤，近期才出现主动决定观察位置的智能体。音频视觉智能体也类似，有的用多个专用模型做感知，有的训练能用工具的全能模型，但工具设计复杂或仍是一次通过。

本文认为前者把必须直接听音频作为前提，后者还没有给出足够简单的通用做法。作者因此提出只用文本化语音加通用画面工具的搜证框架，并与一次式全能模型和一次式文本加画面方法直接比较。

### 一次看完和搜证回答在形式上差在哪里

论文先把两种回答方式写成两种概率形式。一次式全能模型以全部帧和全部音频为条件，直接在选项上取概率最大的那个。

\[\hat{y}=\argmax_{o\in\mathcal{O}}\;p(o\mid V,A,q).\]

其中帽子 y 是预测选项，大写 V 是帧序列，大写 A 是音频，小写 q 是问题，花体 O 是选项集合。这个式子意味着所有证据必须在一次输入里放下。

搜证式回答则先把音频转成与问题无关的文本 T，再让智能体按需读文本和看帧。

\[\hat{y}=\mathrm{Agent}_{\pi}(V,T,q,\mathcal{O}).\]

其中 Agent 下标是推理模型，输入是帧、转写文本、问题和选项。关键区别是证据不是预先固定采样的，而是在问答过程中由模型自己选择的。

### SleuthVLM 的整体流程是怎样的

SleuthVLM 不是一个新模型，而是一个智能体工作架，推理主体可以换。主结果用开源的 Qwen3.8-27B，也用 Claude Opus 5.5 展示换更强推理模型的效果。每个视频只转写一次，与具体问题无关；每道题开一个独立沙箱，里面放静音版视频、问题文件和两份转写文件。

模型在沙箱里多轮调用工具、读回结果、再决定下一步，直到调用回答工具或用完预算。预算固定为 50 轮、30 张图、10 个片段、每题 30 分钟。只有当推理模型本身是全能模型时，才多给一个听原始音频窗口的工具，用来做对照；视觉语言模型做主体时没有这个工具。

下面是论文的方法总览图，先看从语音到带时间文本再到多轮搜证的完整链路。

> **看图路径：** 1. 沿左侧语音到文本再到右侧问答的箭头看主路径；2. 对照中间沙箱的工具列表，区分视觉语言模型与全能模型可用的工具差异；3. 看右侧预算条，确认每题的轮数、图片数和片段数上限

[![原论文 Figure 2：Overview of SleuthVLM. (a) Once per video, an ASR model transcribes the speech and a forced…](https://arxiv.org/html/2611.06083v1/method.png)](https://arxiv.org/html/2611.06083v1/method.png)

*论文图 2。原论文 Figure 2:：“Overview of SleuthVLM. (a) Once per video, an ASR model transcribes the speech and a forced aligner assigns timestamps to each word, preserving non-speech intervals as gaps.”。*

从图中可见，左侧把音频能量中识别出语音的部分转成句子和词时间，中间列出沙箱文件和可用命令，右侧给出预算和沙箱隔离规则。示例轨迹用 13 轮找到不可逆操作这句话所对应的控制台画面，说明模型是先用文本定位，再用画面验证，而不是把全片均匀看一遍。

### 语音如何变成带时间的文本

每个视频先用 Qwen3-ASR-1.7B 转写，再用 Qwen3-ForcedAligner-0.6B 给每个词标开始和结束时间。词集合记为词、开始、结束三元组的集合。

\[W=\{(w_{j},s_{j},e_{j})\}_{j=1}^{M}.\]

其中 w 是词，s 和 e 是起止秒数，M 是词总数。相邻词之间超过 3 秒没有词的区间被保留为间隔，起点补 0，终点补视频时长 D。

沙箱里存两份文件。asr.txt 按时间顺序存句子和间隔，每行形如开始减结束加句子，或无话区间加起止时间；asr_words.tsv 存每个词的起止时间。转写保留说什么，包括歌词，间隔则标出无人说话的段落，这些段落往往对应音乐或其他声音。长录音先按静音处切成不超过 180 秒的块再拼回时间轴，转写全部视频约 302 小时音频在单卡上约 113 分钟。

**自动语音识别转写 × 强制对齐：** 自动语音识别转写负责把说什么变成文字，解决听不清内容的问题；强制对齐负责给每个词标上开始和结束时间，解决何时说的问题。两者搭配后得到按时间可检索的文本，模型既能按关键词跳到对应时刻，也能用词边界判断语音与画面是否同时出现，组合起来文本就成了视频的时间索引。

### 智能体在沙箱里能做什么，不能做什么

模型每轮读历史，写出推理和工具调用，再读回文本、图像或片段，历史不断拼接。

\[a_{t}\sim\pi(\cdot\mid h_{t}),\qquad h_{t+1}=h_{t}\oplus(a_{t},x_{t}).\]

其中 a 是本轮动作，x 是工具返回，h 是历史，圆圈加是拼接。这个过程强调证据是逐步累积的，不是一次放全。

可用工具只有 4 个：bash、view 看图、watch 看短片段、answer 结束作答。bash 里封装了接触表、按帧率取帧、裁剪原分辨率框、搜索文本和列出间隔与词时间等命令，外加 grep 和 python 等常规处理。view 一次最多 4 张图，接触表计为一张；watch 最长 30 秒、最多 32 帧。规则禁止离开沙箱、联网、装包、操作进程和用 ffmpeg 提取音频，每题沙箱在内存中隔离并记录所有命令。

操作指南只建议通常有效的顺序：读题和文本、先看一张接触表概览、用文本命中和间隔定位窗口、放大看细节、证据充分再回答。具体哪步需要、窗口多宽、间隔多密，都由模型自己定。

**接触表 × 视频帧提取 × 短片段播放：** 接触表是在长窗口上按固定间隔拼出的缩略图阵列，负责快速概览和定位切换点；视频帧提取是在窄窗口上按需取原分辨率帧，负责看清细节；短片段播放是按帧率播放几十秒片段，负责确认动作顺序。三者分工是从粗到细，搭配使用时模型先用接触表缩小范围，再用高清帧和片段验证，避免对全片均匀采样。

### 时间戳如何把搜索范围从全片缩到几十秒

论文给出搜证省计算的直观算法。如果每秒看 1 帧，35 分钟视频要看 2100 帧。改为先在文本中搜问题关键词，若命中发生在 s 到 e，就加一个余量构成候选窗口，再在窗口内从粗到细看图，总帧数是各级窗口长度除以采样间隔之和，远小于全片密采。

词时间还有第二个作用：判断语音与画面是否同时。语音区间与视觉事件区间有交集时，才认为两者在说同一时刻的事。示例中模型用这种交集排除错误选项，例如评论出现在 05:19，而某句话恰好覆盖该秒，就把评论与该句绑定。

需要强调的是工作架不预设窗口和间隔，余量和采样间隔都由模型按证据选择。间隔文件还能指出音乐最可能出现的位置，模型会先列间隔，再逐个用画面和可选的音频描述工具验证。

**按需听音频 × 音频描述工具：** 按需听音频是只给全能推理模型加的工具，把选定窗口的原始音频作为输入返回，负责保留直接听的能力以做对照；音频描述工具是给视觉语言模型用的文字化听觉探针，由小音频模型回答模型自己提出的问题，负责把音乐情绪、节奏等无法转写的内容变成文字。两者都只在文本和画面不够时调用，组合后文字主线加局部听觉补充，避免每题都处理全轨音频。

### 本文训练了什么，没有训练什么

本文没有训练新的视觉语言模型或全能模型，也没有为搜证策略做强化学习。推理模型直接调用现成的 Qwen3.8-27B、Claude Opus 5.5 或全能模型，思考力度分高和中两档，转写和对齐模型也是现成的。

实际执行的计算是转写、对齐、检索和调用。转写与对齐每个视频做一次；问答时模型通过 bash 搜索文本、生成接触表和裁剪框、播放片段，必要时调用音频描述工具。音频描述工具背后是 Ming-3.0-audio-tiny，由模型自己写问题去问指定窗口的音乐变化或乐器作用，返回的是文字描述，再与画面互相校验。

因此性能提升不能理解为学到了新参数，而是把已有的推理和工具能力用在了更准的证据上。复现时重点不是调训练超参数，而是保证转写时间轴正确、沙箱隔离有效、预算一致。

### 在哪些视频和问题上比较，条件是否一致

评测用 4 个音频视觉问答基准。Daily-Omni 约 30 或 60 秒短片，WorldSense 平均约 2.4 分钟，OmniVideoBench 平均约 6.4 分钟，LVOmniBench 平均约 34.6 分钟、最长 90 分钟，另加 Video-MME-v2 平均约 10.4 分钟。题型覆盖属性、计数、空间、事件、逻辑、以人为中心、时间、音乐和声音推断，全部是选择题，指标是准确率，方向是越高越好。

比较对象分 3 类。闭源和开源一次式全能模型直接听音频看帧；智能体基线包括多模型协作和代码式智能体；同为文本加画面的 TFO 只一次通过，不做多轮搜证。作者注明闭源分数引自对应技术报告，开源分数引自原论文，SleuthVLM 的两档推理模型除模型本身外用同一工作架和同一预算。

需要留意的是全能模型做智能体时会多一个听音频窗口的工具，最多 4 次、每次不超过 30 秒，而视觉语言模型主体没有该工具。这种不对称是故意设计的，用来检验直接听是否带来额外好处。

### 主结果在四个基准上说明了什么

下表比较了 4 基准上的准确率，输入栏区分直接用音频加画面与只用画面加转写文本，平均分为 4 基准均值。阅读时先确认任务、划分和输入条件是否相同，再看长视频上的差距。

| Model | Input | Daily-Omni | WorldSense | OmniVideoBench | LVOmniBench | Avg. |
| --- | --- | --- | --- | --- | --- | --- |
| Closed-Source Omni Models |  |  |  |  |  |  |
| Gemini 3.8 Flash | A+V | 84.0 | 69.6 | 65.2 | 70.7 | 72.4 |
| Qwen3.8-Omni-Flash (Team, 2026a) | A+V | 85.1 | 68.5 | 63.4 | 63.3 | 70.1 |
| Qwen3.5-Omni-Plus (Team, 2026b) | A+V | 85.1 | 63.9 | 53.8 | 53.2 | 64.0 |
| Seed 2.0 Lite | A+V | 81.4 | 67.3 | 58.5 | New A | New A |
| Muse Spark 1.2 | A+V | 79.6 | 65.0 | 62.2 | New A | New A |
| Open-Source Omni Models |  |  |  |  |  |  |
| MiniCPM-o 4.5 (Cui et al., 2026) | A+V | 80.2 | 55.7 | 41.1 | 34.8 | 53.0 |
| Qwen3-Omni-30B-A3B (Xu et al., 2025b) | A+V | 71.9 | 54.0 | 38.4 | 35.8 | 50.0 |
| video-SALMONN-R3 (Li et al., 2026) | A+V | 78.7 | New A | 43.9 | 42.9 | New A |
| LongCat-Flash-Omni (Team et al., 2025) | A+V | 82.4 | 60.9 | New A | New A | New A |
| video-SALMONN 2+ (72B) (Tang et al., 2025) | A+V | 79.4 | 56.5 | New A | New A | New A |
| Nemotron 3 Nano Omni (Deshmukh et al., 2026) | A+V | 74.5 | 55.2 | New A | New A | New A |
| Omni Agents |  |  |  |  |  |  |
| OmniReasoner (Chen et al., 2026b) | A+V | 64.2 | 46.7 | 34.8 | 35.4 | 45.3 |
| OmniAgent (o3 + Gemini + Qwen) (Tao et al., 2025) | A+V | 82.7 | 61.2 | 59.1 | New A | New A |
| OmniAgent (7B) (Xing et al., 2026) | A+V | 64.8 | 47.2 | 37.1 | New A | New A |
| Qwen3.8-Omni-Flash(Qwen-code) | A+V | New A | New A | 67.8 | 73.6 | New A |
| Gemini 3.8 Flash(Qwen-code) | A+V | New A | New A | 70.1 | 70.7 | New A |
| VL + ASR Agents |  |  |  |  |  |  |
| Qwen3-VL-30B-A3B + TFO (Deria et al., 2026) | V+ASR | 68.9 | 51.9 | New A | New A | New A |
| SleuthVLM (Qwen3.8-27B, medium) | V+ASR | 80.3 (−-2.1) | 62.8 (+1.9) | 58.3 (+14.4) | 60.2 (+17.3) | 65.4 (+12.4) |
| SleuthVLM (Qwen3.8-27B) | V+ASR | 80.4 (−-2.0) | 64.5 (+3.6) | 60.4 (+16.5) | 61.7 (+18.8) | 66.8 (+13.8) |
| SleuthVLM (Opus 5.5) | V+ASR | 84.4 (−-0.7) | 70.1 (+0.5) | 69.9 (−-0.2) | 75.5 (+1.9) | 75.0 (+2.6) |

表后解读要抓住两点。第一，用 Opus 5.5 的 SleuthVLM 平均 75.0%，高于最强闭源一次式模型的 72.4%，领先随视频变长而加大，在长视频基准上更明显，说明可回看的价值在长视频中更大。第二，用 27B 开源模型的 SleuthVLM 平均 66.8%，高于最强开源一次式模型约 13.8 个百分点，在 LVOmniBench 上高约 18.8 个百分点；它也超过只一次通过的文本加画面方法约 12 个百分点，说明文本可及不等于可用，多轮搜证把文本变成了准确率。

下图把平均准确率与模型规模、5 个基准的包络放在一起，有助于判断小模型加智能体是否落在闭源区间。

> **看图路径：** 1. 先看左图横轴参数量与纵轴四基准平均准确率，确认两类 SleuthVLM 点的位置；2. 再看右图雷达图五个轴的包络，比较长视频轴上差距是否更大；3. 注意右图每轴跨度都是 40 个点，避免把形状差异误读为绝对分差

[![原论文 Figure 1：SleuthVLM never hears the audio directly, yet beats the omni models that do.](https://arxiv.org/html/2611.06083v1/teaser.svg)](https://arxiv.org/html/2611.06083v1/teaser.svg)

*论文图 1。原论文 Figure 1:：“SleuthVLM never hears the audio directly, yet beats the omni models that do.”。*

从图中可见，左图开源 27B 的点已进入闭源带，Opus 5.5 的点在最上方；右图雷达包络在长视频轴上外扩更明显。但这只是所选基准和所用预算下的结果，不能推广为任何视频都不需要听音频。

**一次式观察 × 搜证式智能体：** 一次式观察指按固定采样率取帧加音频一次作答，分工是覆盖全片但每段都很薄；搜证式智能体指根据已读证据决定下一步看哪里、放大到什么程度、何时停止，分工是把计算集中到与问题相关的几十秒。两者搭配比较时，前者是基线，后者是本文的改进，组合对比多出的是对长视频漏检和能否回看的解释。

### 换基准和换推理模型后结论还成立吗

把 Video-MME-v2 纳入后的 5 基准平均，以及把全能模型放进同一工作架的对照，需要分开看。5 基准下 Opus 5.5 的 SleuthVLM 平均 75.5%，Video-MME-v2 单项 77.8%，在该榜单所有指标上领先；27B 的 SleuthVLM 在该榜单 62.0%，也超过多个开源和部分闭源一次式模型。

| Model | DO | WS | OVB | LV | VM2 | Avg. |
| --- | --- | --- | --- | --- | --- | --- |
| SleuthVLM (Opus 5.5) | 84.4 | 70.1 | 69.9 | 75.5 | 77.8 | 75.5 |
| Gemini 3.8 Flash | 84.0 | 69.6 | 65.2 | 70.7 | 71.0 | 72.1 |
| Qwen3.8-Omni-Flash | 85.1 | 68.5 | 63.4 | 63.3 | 65.0 | 69.1 |
| SleuthVLM (Qwen3.8-27B) | 80.4 | 64.5 | 60.4 | 61.7 | 62.0 | 65.8 |
| Qwen3.5-Omni-Plus | 85.1 | 63.9 | 53.8 | 53.2 | 47.9 | 60.8 |
| Gemini 3.8 Flash (QC) | New A | New A | 70.1 | 70.7 | 72.7 | New A |
| Qwen3.8-Omni-Flash (QC) | New A | New A | 67.8 | 73.6 | 71.3 | New A |

该表说明搜证框架换了榜单仍有效，但 Video-MME-v2 用的是官方字幕作时间文本，与前 4 基准的自动转写不完全相同，比较时要记住文本来源差异。

把推理模型换成全能模型并允许听音频后，同一工作架下 Opus 5.5 仍最高，其在逻辑推理上的领先最大；全能模型做智能体比一次式提高约 7.3 个百分点，说明智能体对它们也有帮助，但没有反超只用文本的视觉语言模型。按题型看，LVOmniBench 约 75.2% 的问题与语音有关，这是文本能覆盖多数问题的条件；音乐和声音题占比约 24.8%，是文本最可能不够的部分。

|  |  | Difficulty | Difficulty | Difficulty | Ability | Ability | Ability | Ability |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Input | Low | Medium | High | Underst. | Percept. | Infer. | Logical | Overall |
|  |  | (314) | (441) | (259) | (230) | (386) | (289) | (109) | (1014) |
| SleuthVLM (Opus 5.5) | V+ASR | 82.5 | 76.0 | 66.4 | 80.4 | 74.4 | 70.6 | 82.6 | 75.5 |
| SleuthVLM (Qwen3.8-Omni-Flash) | V+ASR+Audio | 80.6 | 71.4 | 57.1 | 73.9 | 68.7 | 71.6 | 67.9 | 70.6 |
| SleuthVLM (Gemini 3.8 Flash) | V+ASR+Audio | 82.8 | 72.6 | 67.2 | 77.4 | 74.6 | 70.6 | 77.1 | 74.4 |
| Qwen3.8-Omni-Flash | A+V | New A | New A | New A | New A | New A | New A | New A | 63.3 |
| Gemini 3.8 Flash | A+V | New A | New A | New A | New A | New A | New A | New A | 70.7 |
| Qwen3.5-Omni-Plus | A+V | New A | New A | New A | New A | New A | New A | New A | 53.2 |

该表按难度和能力分组，低中高难度题量分别为 314、441、259。可见难度越高差距越大，Opus 5.5 在高难度仍保持 66.4%。未胜出的例子也要说明：在部分音乐题上，直接听的模型并不落后，文本加画面的优势主要来自语音相关和需要绑定的题。

下面是 4 条代表性轨迹的缩览，分别对应文本定位计数、说话人点名场外声音、音乐变化需听觉补充，以及同一问题下两种推理模型的对比。

> **看图路径：** 1. 比较前两列只用文本加画面就能定案的证据链；2. 看第三列何时必须调用音频描述工具；3. 看第四列同一问题下两种推理模型的步骤数和证据绑定差异

[![原论文 Figure 4：Four trajectories of SleuthVLM: (a, b) answered from the transcript and the picture, (c) with the…](https://arxiv.org/html/2611.06083v1/cases_main.png)](https://arxiv.org/html/2611.06083v1/cases_main.png)

*论文图 4。原论文 Figure 4:：“Four trajectories of SleuthVLM: (a, b) answered from the transcript and the picture, (c) with the audio_caption tool, (d) one question with Claude Opus 5.5, a VLM, and Gemini 3.8…”。*

从图中可见，前 2 例只用文本搜索加少量帧就定案，第三例必须调用音频描述，第四例同样证据下视觉语言模型 5 轮绑定成功而全能模型 27 轮走散。这支持听不是瓶颈、绑定证据的规划能力才是差距的解释，但这组对比是单题深剖，不能当成所有题的统计证明。

### 拿掉转写和词时间会发生什么

消融用 27B 中等思考力度，在短视频 Daily-Omni 和长视频 LVOmniBench 上比较。完整系统、去掉整个转写、只去掉词时间三档的设置最能说明文本的两个层次各起了什么作用。

| Setting | Daily-Omni | LVOmniBench |
| --- | --- | --- |
| A0 Full system | 80.3 | 60.2 |
| A1 w/o ASR transcript | 62.9 (−-17.4) | 43.6 (−-16.6) |
| A2 w/o word-level times | 79.0 (−-1.3) | 58.9 (−-1.3) |

表后解释要结合代价一起读。去掉转写后 2 基准分别掉约 17.4 和 16.6 个百分点，长视频上模型反而看了更多轮和更多图，说明没有文本索引时模型只能盲扫；即使声音题也掉约 10.5 个百分点，说明文本不仅给内容，还告诉去哪里找。只去掉词时间则 2 基准各掉约 1.3 个百分点，主要掉在音乐和声音题上，因为这些题靠词边界推断无话段的起止。

下图从另一角度展示趋势与开销，左图领先随片长增长，中图长视频平均约 17.0 轮、9.2 张图，右图每加一部分音频输入准确率上升。

> **看图路径：** 1. 看左图随视频变长领先幅度是否走高；2. 看中图每日问答与长视频问答的平均轮数和图片数差异；3. 看右图从无文本到加文本再到加词时间的准确率爬升

[![原论文 Figure 3：(a) Lead of SleuthVLM over the best omni model (closed-source for Opus 5.5, open-source for…](https://arxiv.org/html/2611.06083v1/trends.svg)](https://arxiv.org/html/2611.06083v1/trends.svg)

*论文图 3。原论文 Figure 3:：“(a) Lead of SleuthVLM over the best omni model (closed-source for Opus 5.5, open-source for Qwen3.8-27B), with benchmarks ordered by average video length.”。*

从图中可见，搜证深度随视频变长而加深，但轮数和图片数仍在预算内。额外音频描述工具在 448 道音乐题上平均加约 9.8 个百分点，WorldSense 上最多加约 18.7 个百分点，而 OmniVideoBench 上几乎为零，说明音乐补充只在部分分布上有效，不能视为通用提升。

### 哪些结论是有边界的，哪些还没有测

第一，文本主线依赖语音占比高的分布。LVOmniBench 约四分之三问题与语音有关时，转写自然有效；若换成以纯音乐、环境声为主的任务，没有歌词可检，模型只能靠间隔和音频描述工具，论文未给出这类分布上的主结果。

第二，预算和延迟没有与准确率一起优化。长视频平均十几轮、多张图和多次文本搜索意味着更高的推理时间和 token 消耗，论文给出单题轮数和图片数，但没有系统报告延迟、费用或误答率，不能承诺搜证一定更省。

第三，对照中的全能模型智能体只允许有限次听音频，且工作架是为文本搜证设计的，可能不利于直接听的模型发挥。单题深剖显示全能模型找到证据又走散，但这是一个 83 分钟直播问答的个例，推广为训练削弱规划能力仍是推测，需要更多受控比较才能确认。

### 要复现第一步做什么，需要哪些条件

第一步是复刻转写管线。用论文指定的识别与对齐模型，把每个视频切成不超过 180 秒的块，转写后按视频时间轴拼回，生成 asr.txt 和 asr_words.tsv，并把超过 3 秒的无话区间记为间隔。对齐失败的语言按 30 秒块给块级时间，不写词文件，这一点要在日志中标出，否则时间交集判断会出错。

第二步是搭建沙箱。每个问题独立一份静音视频、问题文件和两份文本，限制相对路径、禁网、禁装包、禁提音频，记录每次 bash 命令和输出，并审计是否有读取标注或答案文件的行为。论文称已审计全部轨迹无泄漏，复现时应保留同样的审计脚本。

第三步是固定预算再换模型。先用同一预算跑通 27B 开源模型，确认短片约 5.8 轮、长视频约 17.0 轮的数量级，再换更强模型。代码仓库在论文中标为即将公开，项目页可访问，复现前要区分代码可运行、权重可下载和在线服务可用是三件不同的事，以实际能拿到的为准。

### 什么时候值得尝试这种做法

当任务视频较长、答案集中在少数时刻、且语音能提供定位线索时，这种先文本定位再放大验证的做法值得尝试。它把全片密采换成按需取证，尤其适合问答、计数、事件对齐和需要把评论时刻与说话内容绑定的问题。

当任务主要考音乐情绪、音色变化或无语音环境声，且没有可靠的音频描述模块时，不建议直接照搬。本文的音乐补充在部分基准上有效、在部分基准上无效，说明听觉细节仍需专门模块，不能只靠间隔推测。

回到论文标题的提问，证据支持的是在所测的 4 个基准加一个视频理解榜单、给定预算和转写质量下，不直接听音频的搜证智能体可以超过一次式全能模型。这不是证明听觉无用，而是提示下一步更值得补的是智能体的规划、跨模态绑定和自校验能力，以及对纯非语音任务的专门验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.06083)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-06/)
