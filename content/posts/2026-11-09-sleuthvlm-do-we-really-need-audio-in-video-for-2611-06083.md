---
title: "SleuthVLM: Do We Really Need Audio-in-Video for Omni Video Understanding?"
date: 2026-11-09
draft: false
tags: [音视频问答, 工具增强与约束解码, 语音识别, 长音频处理]
categories: [论文速递]
description: "针对长视频中答案藏在几秒钟里、一次采样容易错过的问题，SleuthVLM 把语音转成带时间戳文本，让视觉语言模型用工具主动查证，在四个音频视频问答基准上平均 75.0%，代价是多轮工具调用和转写依赖。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.06083"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "不听声音怎么做视频问答：SleuthVLM 的查证式理解"
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
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-question-answering","label":"音视频问答"},{"facet":"method","id":"method.tool-augmentation","label":"工具增强与约束解码"},{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"setting","id":"setting.long-audio","label":"长音频处理"}]
paper_digest_primary_method: "工具增强与约束解码"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对长视频中答案藏在几秒钟里、一次采样容易错过的问题，SleuthVLM 把语音转成带时间戳文本，让视觉语言模型用工具主动查证，在四个音频视频问答基准上平均 75.0%，代价是多轮工具调用和转写依赖。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Peiran Wu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Fangfei Gou"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhaoxi Mu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Changhao Zhang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jian Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Weiqiang Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuntao Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuanchun Shi"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Junxiao Shen"}]
paper_digest_abstract_sha256: "6cafb013441e91e870f336c2f8d150b1e0dedd34e8fe590a52c7a8d728cdedbb"
paper_digest_sidecars: {"citation.bib":{"sha256":"89e41936780bb5858459fbe7c496ed03fce13eadd4f7d0e26ae5abbc5930f91c","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06083/citation.bib"},"citation.json":{"sha256":"b030cfd1523d40a13bd6e01d7dfd9ecb16ed47d35bdde7715db57fe52b461176","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06083/citation.json"},"citation.ris":{"sha256":"8ce13ffb4650010eb39dbde890266b56d8521f7b8ce88355a779c95bbd9ae3b0","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06083/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"9432fb9a102adc2fdb49283dbca0dc5d65edd5f3d0a8fe1d3c4a84f6c04c272d","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06083/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "3176a2f5fd47cc4bd878f40d46c54381de737f934f178cb8acd6fb70aa67a76e"
paper_digest_api_reader_plan_sha256: "cc26489ed5d3188c53248e81c9fa7eaade430eba8c87f877c5e2925735410422"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "ae0bde4a9b02a9e321068b48aa04b0bdc0dd1ea123cb34f51148a9d566fc4e8c"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "e3e489af8be2e7b46bd0cc5f851a6429793242edfd2a4ae8d0c5c582929137f2"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "7bf43e9eddd90173a0880f76020fffa3962071f3e69d14f08fd67b81338f5998"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "1c3a1d7632a1aabb90f82ef78159684f7eaf905c2417be6b5c5ef0012c170e92"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 不听声音怎么做视频问答：SleuthVLM 的查证式理解

> 英文题目：*[SleuthVLM: Do We Really Need Audio-in-Video for Omni Video Understanding?](https://arxiv.org/abs/2611.06083)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding) → [音视频问答](/audio-paper-digest-blog/papers/?concept=task.av-question-answering)；[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)
- **研究方法**：[工具增强与约束解码](/audio-paper-digest-blog/papers/?concept=method.tool-augmentation)
- **研究条件**：[长音频处理](/audio-paper-digest-blog/papers/?concept=setting.long-audio)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


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

读者需要理解的对象是同时依赖画面与声音的视频选择题，输入为时长30秒至90分钟的静音视频、带时间戳的语音文本与问题选项，输出为选项编号，难点是答案常藏在几秒内而固定采样容易错过。先由语音识别与强制对齐提取词级时间文本并输出空隙标记送入视觉语言模型，再由模型按需调用检索与看图工具逐步取证，最后结合词边界判断语音与画面是否同时发生后作答。带时间戳的文本既提供语音内容又充当定位索引，模型从关键词命中窗口由粗到细放大查看。与一次读入采样帧加音频的做法差异在于不训练音频编码器、不做联合多模态对齐，只靠文本与工具把长视频搜索问题交给智能体能力。SleuthVLM(Opus 5.5)在四个全模态基准平均准确率为75.0%，高于Gemini 3.8 Flash的72.4%，在Video-MME-v2准确率为77.8%。该智能体免额外训练，推理用vLLM在H200/A100上运行，每题预算为50轮、30图、10片段和30分钟。结论适用于语音占主导的问答，LVOmniBench约75.2%问题涉及语音，对纯音乐依赖仍需外挂音频描述工具。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/WPR001/OpenOmniHarness> — 链接可访问（HTTP 200）

- 第三方资源：<https://wpr001.github.io/sleuthVLM/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 视频问答要保留什么信息才答得对

这篇论文研究的输入是一段视频加一道选择题，视频包含画面流和音频轨，题目往往同时依赖两者，例如说话内容、说话时刻的画面、音乐变化或环境声。输出是从给定选项中选一个，评价用准确率，方向是越高越好。必须保留的信息有两类，一是说了什么，二是何时发生、与画面是否同时，因为长视频可达 90 分钟，答案常只藏在几秒里。

已有全模态路线是把视觉语言模型接上音频编码器，用大量配对数据联合训练，然后一次读入采样帧和音频直接作答。论文指出这种做法在长视频下很脆弱，固定采样把全片铺薄，关键片段易被跳过，且模型不能回头再看。读者看下图先建立整体印象，左图是规模与平均准确率的关系，右图是各基准的分布。

> **看图路径：** 1. 先看左图横轴参数规模与纵轴四基准平均准确率的分布；2. 再看右图雷达图上五个轴各自的数值与差距标注；3. 注意不直接听音频的两条 SleuthVLM 曲线相对全模态模型的位置

[![原论文 Figure 1：SleuthVLM never hears the audio directly, yet beats the omni models that do.](https://arxiv.org/html/2611.06083v1/teaser.svg)](https://arxiv.org/html/2611.06083v1/teaser.svg)

*论文图 1。原论文 Figure 1:：“SleuthVLM never hears the audio directly, yet beats the omni models that do.”。*

左图显示不直接听音频的 SleuthVLM 在纵轴上处于顶部，右图显示它在 4 个全模态基准和 Video-MME-v2 上相对最强闭源全模态模型的差值，4 基准平均 75.0%，高出 2.6 个百分点，Video-MME-v2 为 77.8%。这组图只说明在原文的 4 个基准加一个视频基准下成立，不代表所有视频任务都不需要听原声。

### 已有全模态模型与视频智能体在比什么

全模态大模型一类工作把视觉语言模型扩展出音频分支，用大量音画配对数据训练，使模型能一次读帧加音频。文中列举的开源例子有 Qwen2.5-Omni、Qwen3-Omni、MiniCPM-o、video-SALMONN 系列等，闭源例子有 Gemini 和 Qwen3.8-Omni-Flash 等，进步主要靠扩大规模和数据。另一类是视频智能体，早期做法是先把片段转成字幕再推理或把问题拆给专用工具，近期是让模型自己决定看哪里，音频视频智能体也类似，OmniAgent 用多个模型协作，OmniReasoner 等训练模型用工具，Qwen Code 把全模态模型装进代码智能体框架。

比较要在相同任务下看，本文的比较对象都是在 Daily-Omni、WorldSense、OmniVideoBench、LVOmniBench 4 个选择题基准上测准确率，外加 Video-MME-v2。输入条件并不相同，全模态模型是画面加原声一次作答，SleuthVLM 是静音画面加带时间戳转写加多轮工具，TFO 是画面加转写但一次作答。理解结论时要记住这个条件差，胜负不是同输入同预算下的纯模型能力对比，而是不同做题流程的对比。

### 为什么一次看完容易错过答案

论文把全模态一次作答写成从后验概率选最可能选项的形式，输入是采样画面、音频轨和问题。

\[\hat{y}=\argmax_{o\in\mathcal{O}}\;p(o\mid V,A,q).\]

这里符号表示给定画面 V、音频 A 和问题 q，在选项集合中取概率最大的选项作预测。这种写法的问题是 V 和 A 都是事先固定采样好的，一次前向就决定，模型没有回看机制。按文中例子，35 分钟视频若每秒看 1 帧要 2100 帧，实际只能稀疏采样，答案若在几秒内，落入采样间隙就丢失。

第二个困难是训练代价，教会模型直接听懂声音需要昂贵的联合训练，且文中认为这会削弱强视觉语言模型已有的推理和工具使用能力。第三个观察是多数相关音频是语音，文中统计 LVOmniBench 有 75.2% 题目涉及语音，而语音可转成带时间的文字，音乐等非语音则落在无话间隙附近。因此问题被重写为能否用文字加主动查画面代替直接听。

### SleuthVLM 如何把做题变成查证过程

SleuthVLM 不是新模型，而是一个智能体流程，推理主体可以是任意视觉语言模型，主结果用 Qwen3.8-27B 和 Claude Opus 5.5。流程分两段，每段视频只做一次与题目无关的转写，得到文本 T，然后智能体按题读 T、看静音画面、调用工具，直到证据足够才调用回答工具。

\[\hat{y}=\mathrm{Agent}_{\pi}(V,T,q,\mathcal{O}).\]

这里 Agent 表示在给定画面、转写、问题和选项下多轮取证后作答，模型全程不接收音频输入。论文强调只规定可用资源、简短操作建议和预算，不规定固定工作流，模型自己决定看哪里、看多细、何时停。

**一次通过 × 智能体搜索：** 一次通过指用固定采样率把全视频薄薄看一遍就作答，省交互但长视频中关键几秒易被漏掉且无法回看；智能体搜索指先读转写定窗口，再反复看图验证，查到证据才作答，两者对比说明本文把性能来源从更大模型或更多联合训练转向按题取证的过程。

下图是方法总览，左侧是转写，中间是沙箱与工具，右侧是作答与预算，中间轨迹是 Daily-Omni 上 13 轮答对的真实例子。

> **看图路径：** 1. 沿左侧语音到两份转写文件的箭头看预处理产物；2. 看中间沙箱内可用文件与工具清单及真实 13 轮轨迹；3. 看右侧预算条与作答规则如何约束搜索停止

[![原论文 Figure 2：Overview of SleuthVLM. (a) Once per video, an ASR model transcribes the speech and a forced…](https://arxiv.org/html/2611.06083v1/method.png)](https://arxiv.org/html/2611.06083v1/method.png)

*论文图 2。原论文 Figure 2:：“Overview of SleuthVLM. (a) Once per video, an ASR model transcribes the speech and a forced aligner assigns timestamps to each word, preserving non-speech intervals as gaps.”。*

图中可见输入视频 30 秒，智能体先从转写找到不可挽回操作这句话的时间，再用接触表定位控制室与轨道镜头的切换处，放大看控制台徽章，最后做视听时间对齐排除干扰选项。预算栏显示 13 轮、6 张图、1 个短片，远低于上限，说明搜索按题收敛而非每次拉满。

### 语音如何变成带时间的文字与间隙

每段视频先用语音识别模型转写，再用强制对齐器给出每个词的起止时间，词序列记为词、开始、结束的三元组集合。

\[W=\{(w_{j},s_{j},e_{j})\}_{j=1}^{M}.\]

其中 w 是词，s 和 e 是开始与结束秒数。对齐后把至少 γ 秒的无词段记为间隙，γ 在实验中取 3 秒，首尾也计入，沙箱里存成两份文件，asr.txt 按时间列出每句与间隙，asr_words.tsv 列出每个词的时间。转写保留说什么、何时说，歌词也在内，间隙常对应音乐或其他声音。

**视觉语言模型 × 带时间戳转写文本：** 视觉语言模型负责看画面、读题、调用工具和做推理，但它在本方法里不直接接收音频；带时间戳转写文本负责把说什么、何时说保留下来，包括无话段落作间隙标记，两者搭配后模型可以用文字定位再去看对应画面，补上听的缺口。

实现上长录音按静音处切成不超过 180 秒的段分片转写对齐再拼回时间轴，对齐失败时退为 30 秒块级时间。302 小时音频在单卡 H200 上约 113 分钟完成，这是预处理的一次性开销，做题时不再重复。

### 沙箱里能用什么工具和多大预算

每道题的沙箱里有静音视频、题面文件和两份转写，可用工具是 bash、view、watch 和 answer。bash 内提供接触表、按速率抽帧、原生分辨率裁剪、转写检索等命令，以及 grep 和 python 等常规工具，规则禁止联网、装包、操作进程和提取音频。view 每次最多看 4 张图，接触表计一张，watch 每次最多 30 秒、1 到 8 帧率且不超过 32 帧，vcrop 在 0 到 1000 坐标系下裁剪。

**沙箱 × 预算：** 沙箱指每道题独立的受限工作区，里面只有静音视频、题目和两份转写文件，并限制可用命令和网络；预算指轮数、可看图片数、可看短片数和总时间的上限，两者搭配让自主搜索有边界，可复现也可比较开销。

操作建议是先读题和转写，用一张接触表总览，用转写命中、表格单元和间隙定位窗口，放大核对细节，证据决定后再答，但模型可跳步。交互按轮进行，每轮读历史、写推理加工具调用、收回文本或图像结果，答对调用回答工具结束，用尽预算则按当前最可能选项强制作答。每基准预算都是 50 轮、30 张图、10 个短片、30 分钟，全模态推理模型另可调用听原声最多 4 次、每次不超 30 秒。

**接触表 × 细看：** 接触表指把一段时间按固定间隔抽出的带时间戳缩略图拼板，用于快速总览；细看指在候选小窗口内提高采样密度、抽原生分辨率帧或裁剪放大，两者搭配实现从粗到细的定位，先省帧找到可疑处再花算力确认细节。

### 时间戳如何把搜索从全片缩小到几秒

转写的核心作用是时间索引。模型在转写中搜问题词，若命中在某区间说出，就以该区间加前后余量 δ 构成候选窗口。

\[\Omega=[\,s-\delta,\;e+\delta\,]\]

其中 s 和 e 是命中起止，δ 由模型自选。对非语音声音，则看间隙和场景变化给候选。然后从粗到细逐层放大，窗口逐层包含、采样间隔逐层变密，总看帧数远小于全片密采样。

判断视听是否同时用区间相交，为空表示不重合，不为空表示同窗口发生。

\[[\,s,\,e\,]\cap[\,\alpha,\,\beta\,]\neq\varnothing,\]

其中一方是说话区间，另一方是视觉事件区间，图 2 轨迹在第 8 轮就是用这种对齐排除选项 D。论文没有规定窗口和间隔，全部由模型按题决定，这是与固定采样最大的区别。

### 按需听和外部描述各补什么

主流程的视觉语言模型没有听工具，保持不直接听音频的设定。只有当推理主体本身是全模态模型时，沙箱才多一个听指定窗口原声的工具，用于对照智能体能力是否来自听觉。另一个补充是 audio_caption 工具，它让视觉语言模型用自己的提问去问一个 9.3B 参数的音频小模型，返回某窗口的文字描述，主模型仍只读文字。

**listen_audio × audio_caption：** listen_audio 是只给全模态推理模型用的按需听原声工具，限定窗口长度和次数；audio_caption 是让视觉语言模型向外部小音频模型提问的工具，只返回文字描述，两者分工是前者用于对照全模态模型的智能体能力，后者用于补音乐等非语音信息而不改变主模型不直接听音频的设定。

例子是古筝视频，转写只有一词、画面无法判断节奏情绪，模型对前 30 秒提问 tempo 和 mood 如何发展，返回开头快而有力、约 8 秒处转慢转柔，再对照 0 到 4 秒快速拨弦特写与之后单音慢拨确认。另 1 例是大提琴与钢琴谁节奏感更强，模型换两种问法问两次，两次都指向大提琴，才作答。这种设计把听分解为可记录的文字证据，但也引入外部模型误差，适用条件限于音乐类问题。

### 本文训练了什么，没有训练什么

本文没有训练推理用的视觉语言模型，也没有训练全模态基线，Qwen3.8-27B、Opus 5.5、Gemini 3.8 Flash 等都是直接调用，vLLM 本地部署或 API 调用，推理时用高推理力度，消融用中等力度。实际执行的计算是转写加对齐、沙箱内检索与看图、以及按需调用外部音频描述。转写模型是 Qwen3-ASR-1.7B 和 Qwen3-ForcedAligner-0.6B，音频描述用 Ming-3.0-audio-tiny，这些是已有模型推理，不是为本题新训练的。

因此性能提升不能理解为梯度更新带来的权重改进，而是流程带来的取证改进。无训练不等于输出确定，采样温度为 1.0，工具调用与搜索路径按题而变，开销随视频长度增长。复现时缺的是训练细节以外的运行细节，包括提示词中的范围定义与操作指南、命令参数限制、历史过长时丢弃最旧图片的策略，这些在原文第 9 节给出，照抄才能对齐行为。

### 在哪些视频和题目上测，指标如何算

评测用 4 个全模态选择题基准，Daily-Omni 共 1197 题、684 个 30 或 60 秒短片，WorldSense 共 3172 题、1662 个视频平均 2.4 分钟，OmniVideoBench 共 1000 题、628 个视频平均 6.4 分钟，LVOmniBench 共 1014 题、275 个视频 10 到 90 分钟、平均 34.6 分钟。另测 Video-MME-v2 共 3200 题、800 个视频平均 10.4 分钟，每四题一组，报告平均准确率和分组非线性分。全部是选择题，指标方向都是越高越好，平均分是各基准准确率的算术平均。

比较方法分 3 类，闭源与开源全模态模型均为画面加原声一次作答，智能体基线包括 OmniAgent、OmniReasoner、Qwen Code 智能体等，视觉加转写智能体包括 TFO 和 SleuthVLM。闭源分数多引自 Qwen3.8-Omni 技术报告，附录给出各基准完整榜单。预算与提示词在各基准上相同，这是公平条件，但输入模态不同，结论只能说在各自流程下谁的平均分更高。

### 主结果在什么条件下成立，代价是什么

先看 4 个全模态基准的总体比较，比较的是不同输入流程下谁的平均准确率更高，指标是准确率百分比，越高越好。

下面原表对比闭源全模态、开源全模态、智能体与本文方法，缺失处记为未报告，括号为相对最强基线的差值。

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

该表显示 SleuthVLM 用 Opus 5.5 达到 4 基准平均 75.0%，高于最强闭源全模态模型，领先幅度随视频变长而扩大。用 Qwen3.8-27B 达到 66.8%，高于最强开源全模态模型 13.8 个百分点，在 LVOmniBench 上高 18.8 个百分点。相对一次作答的 TFO 高约 12 个百分点，说明同样给转写，多轮查证更有效。代价是每题多轮交互，中等力度下短片平均 5.8 轮、长视频平均 17.0 轮。

下图把趋势与开销放在一起，左图是领先幅度随片长增长，中图是轮数与看图数随片长增长，右图是逐步加入转写部件的增益。

> **看图路径：** 1. 看左子图领先幅度如何随视频平均长度变化；2. 看中子图每日题与长视频题的轮数与看图数差异；3. 看右子图逐步加入转写各部分时的准确率变化

[![原论文 Figure 3：(a) Lead of SleuthVLM over the best omni model (closed-source for Opus 5.5, open-source for…](https://arxiv.org/html/2611.06083v1/trends.svg)](https://arxiv.org/html/2611.06083v1/trends.svg)

*论文图 3。原论文 Figure 3:：“(a) Lead of SleuthVLM over the best omni model (closed-source for Opus 5.5, open-source for Qwen3.8-27B), with benchmarks ordered by average video length.”。*

可见短片题搜索浅，长视频题搜索深，转写拿掉后两个基准各掉 16 个百分点以上，长视频看图数与轮数都明显更高，说明转写既给线索也给索引。

再看加上 Video-MME-v2 的 5 基准平均，比较内容相同，指标仍是准确率，条件是读官方字幕作转写。

| Model | DO | WS | OVB | LV | VM2 | Avg. |
| --- | --- | --- | --- | --- | --- | --- |
| SleuthVLM (Opus 5.5) | 84.4 | 70.1 | 69.9 | 75.5 | 77.8 | 75.5 |
| Gemini 3.8 Flash | 84.0 | 69.6 | 65.2 | 70.7 | 71.0 | 72.1 |
| Qwen3.8-Omni-Flash | 85.1 | 68.5 | 63.4 | 63.3 | 65.0 | 69.1 |
| SleuthVLM (Qwen3.8-27B) | 80.4 | 64.5 | 60.4 | 61.7 | 62.0 | 65.8 |
| Qwen3.5-Omni-Plus | 85.1 | 63.9 | 53.8 | 53.2 | 47.9 | 60.8 |
| Gemini 3.8 Flash (QC) | New A | New A | 70.1 | 70.7 | 72.7 | New A |
| Qwen3.8-Omni-Flash (QC) | New A | New A | 67.8 | 73.6 | 71.3 | New A |

该表显示 SleuthVLM 用 Opus 5.5 在 Video-MME-v2 上 77.8%，非线性分 63.5，均为榜单最好，5 基准平均 75.5%。用 Qwen3.8-27B 为 62.0%，仍高于榜单上多个开源与部分闭源模型。该结论依赖字幕质量，字幕差的视频不在保证内。

同沙箱下换推理模型的对照进一步说明智能体能力的作用，比较的是同一流程不同推理主体谁更高。

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

该表显示即使给全模态模型听原声的机会，Opus 5.5 仍最高 75.5%，且领先最大处在逻辑推理。文中 83 分钟直播题例子中，评论首次出现在 05:19，主播在相同时刻说同类生意，Opus 用 5 轮绑定图文，Gemini 找到同样证据后又重扫并听了不含关键时刻的窗口，用 27 轮答错。这支持听不是瓶颈、绑定与自检更关键的判断，但只基于该轨迹与统计，未测延迟与误判率。

4 个轨迹总览如下，重点看转写定位与看图定案、外部音频描述介入时机与双模型对比。

> **看图路径：** 1. 对比前两列只用转写加看图即可定案的证据链；2. 看第三列何时必须调用外部音频描述才可判断；3. 看第四列同一题下两种推理模型在轮数与证据绑定上的差别

[![原论文 Figure 4：Four trajectories of SleuthVLM: (a, b) answered from the transcript and the picture, (c) with the…](https://arxiv.org/html/2611.06083v1/cases_main.png)](https://arxiv.org/html/2611.06083v1/cases_main.png)

*论文图 4。原论文 Figure 4:：“Four trajectories of SleuthVLM: (a, b) answered from the transcript and the picture, (c) with the audio_caption tool, (d) one question with Claude Opus 5.5, a VLM, and Gemini 3.8…”。*

前 2 例靠转写定位加看图定案，1 例是 38 分钟视频中搜词只看 20 秒数出 6 人，1 例是直升机声未出镜但被说话人点名。第三例靠外部描述判断音乐由热情转舒缓，第四例是同一题两种模型的对比，结论是模型只在文字与画面不够时才听，且听的结果需回画面验证。

### 拿掉转写与词时间会损失多少

消融用 Qwen3.8-27B 中等力度，比较的是转写的整体与细节各贡献多少，指标仍是准确率，短视频看 Daily-Omni，长视频看 LVOmniBench。

下表给出完整系统、去掉转写、去掉词级时间三行的准确率与掉点，括号为相对完整系统的变化。

| Setting | Daily-Omni | LVOmniBench |
| --- | --- | --- |
| A0 Full system | 80.3 | 60.2 |
| A1 w/o ASR transcript | 62.9 (−-17.4) | 43.6 (−-16.6) |
| A2 w/o word-level times | 79.0 (−-1.3) | 58.9 (−-1.3) |

拿掉整个转写后只剩静音画面加题面，Daily-Omni 从 80.3% 掉到 62.9%，LVOmniBench 从 60.2% 掉到 43.6%，且长视频题反而用更多轮数和更多图片，说明转写既给答案线索也给定位索引。只拿掉词级时间保留句子时间，两个基准各掉 1.3 个百分点，主要掉在音乐与声音题，因为发声时机要从词边界推断。另一组补充是外部音频描述，在 448 道问音乐本身的题上准确率从 48.9% 升到 58.7%，其中 WorldSense 提高 18.7 个百分点，全题使用时 4 基准各升约 1 个百分点。

### 哪些题仍难，结论不能推多远

按题型看，LVOmniBench 中语音题 763 道准确率 63%，音乐题 137 道 53%，声音题 114 道 52%，非语音占比高的声音推理与音乐感知更难。即使加外部描述，音乐题也只到 58.7%，OmniVideoBench 音乐类无提升，说明文字描述对音色与节奏的刻画有限。转写依赖语音识别与对齐，对无语音、低资源语言或对齐失败只能退为块级时间，误差会传导到定位。

方法层面，多轮搜索带来轮数、图片数与时间开销，长视频平均 17 轮，附录例子中全模态模型一题用 589k 词元、588.7 秒，虽是个例，也提示预算与延迟不可忽略。比较层面，闭源分数引自技术报告，版本与采样帧数未完全对齐，Qwen Code 智能体结果也非同沙箱同预算，不能当同条件胜负。缺的验证包括误判率分解、不同 ASR 质量下的鲁棒性、以及真实部署延迟与成本，这些没测就不能承诺会改善。

### 复现第一步做什么，需要哪些文件

复现先做一次转写，每个视频用语音识别加对齐生成 asr.txt 与 asr_words.tsv，间隙阈值 3 秒，长音频按静音切 180 秒内分片，失败回退 30 秒块。每个问题建独立内存沙箱，放入静音视频、题面与两份转写，禁用网络与音频提取，预算设 50 轮、30 个图、10 短片、30 分钟。推理模型可用 Qwen3.8-27B 中等力度起步，本地 vLLM 部署，单卡运行，温度 1.0，top-p 0.95，top-k 20，每轮最多 8192 词元与 4 次工具调用。

项目页与代码库在原文中给出，当前代码标注即将公开，第三方镜像显示项目页可访问、代码库曾不可用或待发布，是否已公开要以实际链接可达为准，不能把论文提到链接等同于已开源。审计要求记录每条命令与输出，检查无标注文件泄露、无答案泄露，这是可信复现的前提。

### 什么时候值得试，还要补什么验证

当任务是长视频选择题、答案依赖说话内容与说话时刻的画面、且能接受多轮调用时，值得试先转写再搜索的流程。小参数视觉语言模型在单卡上已能接近闭源全模态模型的平均分，适合预算有限但能负担转写与多轮推理的场景。当题目真正问音乐织体、音色变化或密集环境声，且转写几乎无词时，要加上外部音频描述并做换问法二次确认，否则不要指望只靠文字解决。

还需补的验证是换更弱或不同语言的语音识别后的掉点、间隙阈值与预算的敏感性、以及按视频长度分层的延迟统计。关键超参数是间隙 3 秒、听窗口至多 30 秒且至多 4 次、看图与短片上限，信息条件是静音画面加带词时间的文本，主模型不接触原声。结论只在原文的 5 个基准与上述预算下成立，超出时长、开放问答或实时任务需重新评估。

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

[← 返回 2026-11-09 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-09/)
