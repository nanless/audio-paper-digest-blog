---
title: "VoxDub: A Bilingual Lip-Synchronized Audio-Visual Dataset for Automatic Video Dubbing"
date: 2026-10-20
draft: false
tags: [语音配音, 数据集构建, 文本到语音, 数据集, 基准测试]
categories: [论文速递]
description: "VoxDub 针对自动视频配音缺嘴型对齐训练数据的问题，用语音为中心的切分加双识别转写核对与音质人脸同步过滤构建 76 万段中英数据，TTS 实验证明相对 LRS3 与 CN-CVS 可懂度与说话人相似度更好，而配音微调仅得到大致相当的主观同步。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.25259"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "为配音保留嘴型与声音：VoxDub 双语视听数据集解读"
paper_digest_original_title: "VoxDub: A Bilingual Lip-Synchronized Audio-Visual Dataset for Automatic Video Dubbing"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.25259v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.25259v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.25259v1.pdf"
paper_digest_primary_task: "语音配音"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.dubbing","label":"语音配音"},{"facet":"method","id":"method.dataset-curation","label":"数据集构建"},{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "数据集构建"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "VoxDub 针对自动视频配音缺嘴型对齐训练数据的问题，用语音为中心的切分加双识别转写核对与音质人脸同步过滤构建 76 万段中英数据，TTS 实验证明相对 LRS3 与 CN-CVS 可懂度与说话人相似度更好，而配音微调仅得到大致相当的主观同步。"
paper_digest_authors: [{"affiliations":["School of Informatics, Xiamen University, China"],"name":"Kaidi Wang"},{"affiliations":["School of Electronic Science and Engineering, Xiamen University, China"],"name":"Wenhao Guan"},{"affiliations":["School of Informatics, Xiamen University, China"],"name":"Peijie Chen"},{"affiliations":["School of Informatics, Xiamen University, China"],"name":"Weijie Wu"},{"affiliations":["School of Informatics, Xiamen University, China"],"name":"Xuetao Lin"},{"affiliations":["School of Electronic Science and Engineering, Xiamen University, China"],"name":"Lin Li"},{"affiliations":["School of Informatics, Xiamen University, China"],"name":"Qingyang Hong"}]
paper_digest_abstract_sha256: "cb43f0c6e15060ca799a3f97e3a193fbc62c41d6c469490bdcaa5f6bbbde3672"
paper_digest_sidecars: {"citation.bib":{"sha256":"e88fff620a4bf89a70ac1e17e3f964ab2f17b49e3c73827cb5010e88db6a9705","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25259/citation.bib"},"citation.json":{"sha256":"2e324ebac3963427cd1901441d20a1c3add0d801cea62400fe6e7d6e16669c11","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25259/citation.json"},"citation.ris":{"sha256":"b645d715b02d847ec076ce0cdc85e9302b1db60bdeb0beb0fbc1d9e5f09923d7","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25259/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"1e2a0a7387164cdd3bbd36a69b131b8d89216bed7f9daff3c993df29d0cfa5b2","url":"/audio-paper-digest-blog/data/papers/2026-10-20/2610-25259/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f375660c5ef5a65553b5f09b9f1b87b8ee39b3529ff9c7d76e1b5c522f624ade"
paper_digest_api_reader_plan_sha256: "16ce32efb0a135771eb19f7add823878ab1ce0d1dfa5bef89868140883708703"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "3bdbb2bd04efba863c879e9b46d4a4a69b3b099bd1f1d9297aa25304441adfc1"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "659c7e4e41899ebe1928b64c544b6fe531d1b37ab3ba27649754327f9265cb8d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ac2ddf3477777e1aa343f9d23ee408ff5da72d79892105df4b87626086450f47"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "0f153079d0fc692ad7410b6ec12e46f2828ea263b83044977ac3e3d4ba76adeb"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 为配音保留嘴型与声音：VoxDub 双语视听数据集解读

> 英文题目：*[VoxDub: A Bilingual Lip-Synchronized Audio-Visual Dataset for Automatic Video Dubbing](https://arxiv.org/abs/2610.25259v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音配音](/audio-paper-digest-blog/papers/?concept=task.dubbing)；[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-paper-digest-blog/papers/?concept=task.tts)
- **研究方法**：[数据集构建](/audio-paper-digest-blog/papers/?concept=method.dataset-curation)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)；[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.0/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.1/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Kaidi Wang：School of Informatics, Xiamen University, China
- Wenhao Guan：School of Electronic Science and Engineering, Xiamen University, China
- Peijie Chen：School of Informatics, Xiamen University, China
- Weijie Wu：School of Informatics, Xiamen University, China
- Xuetao Lin：School of Informatics, Xiamen University, China
- Lin Li：School of Electronic Science and Engineering, Xiamen University, China
- Qingyang Hong：School of Informatics, Xiamen University, China

## 📌 核心摘要

自动视频配音要根据目标视频生成语音，文字内容准确的同时说话时长和口型变化也要对上，训练数据因此要同时提供可用语音、文字和可见人脸。已有纯语音语料缺少视频监督，已有音视频语料在切分依据、转写可靠性和人脸连续性上的做法并不一致，直接用于配音训练容易出现语音截断、转写错误或音画不对齐。本文构建中英双语语料VoxDub，共约76.6万片段约1.58千小时，先以语音活动检测切出候选并对齐对应视频区间，再用两个识别系统以词错误率互核转写，随后依次过滤语音质量、单人脸连续性和口唇同步置信度。同一语音合成模型在DubBench-EN上训练时，VoxDub英文子集的词错误率为4.34%，低于相同条件下LRS3的12.34%。配音实验把Emilia预训练语音生成器适配到视频条件生成，VoxDub与对照语料在语音质量和主观同步评分上总体接近，但英文客观同步置信度并未占优。上述结论仅适用于经单人脸、高语音质量和同步置信度筛选的中英片段及所评测的合成与配音设置，对多人同框、强噪声音乐、遮挡人脸或中英以外语言可能失败且尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/Anjok07/ultimatevocalremovergui> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/snakers4/silero-vad> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/ByteDance/LatentSync-1.6/tree/main/auxiliary> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/Breakthrough/PySceneDetect> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 自动视频配音要解决什么输入输出问题

自动视频配音的输入是一段目标视频加上要说的新文字，输出是一段新语音，要求内容与文字一致，时长能放进原视频的说话段落，风格接近原说话人，并且嘴部动作看起来对得上。相比普通文本转语音，它多了一个必须保留的信息，就是语音时间与可见人脸嘴动之间的对应关系。如果训练数据只有语音和文本，模型可以学会说得清楚，但学不到何时张嘴闭嘴、语速如何与画面配合。

论文把数据问题拆得很具体，现有资源各管一段，有的语音质量不稳定，有的转写不可靠，有的视频里说话人脸时有时无或多人同框。VoxDub 的目标就是提供中英双语、每段都有可用语音、可靠转写和连续可见单人脸，并且经过唇音同步置信度检查的片段集合，总量是 766708 段、约 1.58K 小时，覆盖访谈、演讲、影视、新闻、博客和日常对话等野外场景。

**自动视频配音 × 文本转语音：** 文本转语音只管由文字生成自然语音，自动视频配音还要让生成语音的内容、时长、风格与目标视频中可见的嘴部动作对应起来，因此配音训练数据除语音文本对之外，还必须提供同一时间段的视频和唇音对应关系。

### 已有语音与视听数据集各管哪一段

语音数据集方面，LibriTTS 来自有声书，共 585 小时英文多人朗读语音并带规范文本，Emilia 则是 100,000 小时以上的多语种野外语音，用声源分离、语音活动检测、识别与过滤构建语音文本对。它们能支持语音质量和转写要求，但本身没有视频，无法提供语音时序与面部运动的监督。

视听数据集方面，LRS3、CMLR、CN-CVS 等提供配对的语音与视频，但切分依据、标注语言和过滤方式不同。论文用一张对照表说明切分模态与全片唇音对齐处理的区别，显式表示做过明确检查或过滤，假定表示沿用源视频的同步而未显式过滤，部分表示只在片段局部加了对齐约束。这些类别描述的是构建流程，而不是统一量化的对齐质量分数，因此不能把不同数据集直接当成可互换的配音训练源。

VoxDub 的定位不是只做同步过滤，而是把语音为中心的切分与转写一致性、音频质量、人脸可见性、唇音同步检查组合在中英数据上，这也是它与 LRS3、CN-CVS、CelebV-Dub 等资源的分工差异。

### 为什么切分顺序与过滤条件是难点

长视频直接按镜头切，很容易把一句话从中间切断，或者保留大量无声画面，对语音生成不友好。如果先按视觉切，再去找语音，语音截断和过切分就难以避免。论文因此选择先按语音切，再把时间戳映射回视频，保证每段先是一段完整可用的说话，再检查对应画面是否可用。

另一个难点是单一人脸连续可见不等于就是说话人。野外视频可能有旁白、多人同框、镜头切换或人脸检测抖动，光有人脸框还不够。论文把问题分解为先去音乐噪声，再保证转写一致，再保证音质与单说话人，再保证单人脸稳定，最后才用同步模型估计嘴动与语音是否对应，每一步丢弃不合格候选，而不是试图修复它们。

### 构建流程如何从原始视频走到可用片段

流程起点是按主题关键词从在线平台收集视频，记录编号与元数据并下载最高质量音视频流，统一到 25 帧每秒和 24 kHz 采样。随后音频与视频走两条配合的支路，音频先做候选切分与转写，视频在对应时间区间接受人脸与同步检查。

下图是论文给出的整体流程总览，可以对照音频下支路与视频上支路的汇合点来理解，先看主路径再看过滤的丢弃逻辑。

> **看图路径：** 1. 先从左侧视频收集沿箭头看音频下支路与视频上支路如何分开；2. 再看语音切分与双识别转写如何把时间戳交还给视频分支；3. 最后看人脸过滤、质量过滤与同步验证汇合进 VoxDub 的顺序

[![原论文 Figure 1：Overview of the VoxDub dataset construction pipeline.](https://arxiv.org/html/2610.25259v1/overall.png)](https://arxiv.org/html/2610.25259v1/overall.png)

*论文图 1。原论文 Figure 1:：“Overview of the VoxDub dataset construction pipeline.”。*

从像素上看，左侧视频收集之后，上方胶片表示原始长视频，下方波形表示原始音频，人声分离把人声波形提出来，语音切分框出候选段，双识别转写框比较两路识别结果并判断词错误率是否小于阈值，质量过滤框再与视频分支的人脸检测框汇合，最后经过同步验证进入绿色 VoxDub 库。图中时钟图标强调各处都依赖时间戳对齐，箭头回环表示视频区间是由语音时间戳切出来的，而不是独立切分的。

### 音频一侧如何得到干净可转写的候选

野外录音常混有背景音乐与环境噪声，会干扰识别与语音生成。论文沿用 Emilia 的做法，用 Ultimate Vocal Remover 把每条音轨分离为人声与非人声，只保留人声往下走。这一步的对象是整段音频波形，作用是减少音乐残留，代价是分离本身可能引入痕迹，但论文没有量化该代价，而是靠后续质量过滤兜底。

接着用基于 Silero 的语音活动检测在人声轨上得到说话活跃区，把短停顿隔开的区域合并，去掉过短片段以减少碎切，再用同一时间戳取出对应视频区间，保持音画时间对应。以语音为中心的好处是保留完整发音，代价是可能把镜头切换留在同一段内，论文后面用场景检测统计了这一影响。

**语音活动检测 × 以语音为中心的切分：** 语音活动检测负责在人声轨道上标出哪里有人说话，以语音为中心的切分就是以这些说话时间戳为基准来切长视频并合并短停顿、去掉过短碎片，再按同一时间取出对应视频，这样优先保证语音完整，再对视频做检查。

转写阶段同时跑 WhisperX 与 Paraformer，WhisperX 还负责语言识别，只保留识别为中文或英文的片段。对每段计算两个假设之间的词错误率，超过预设阈值就丢弃，最后英文用 Whisper 转写、中文用 Paraformer 转写作为标注。近 35% 保留片段的双识别词错误率为零，一半以上低于 5%，这说明保留下来的转写一致性较高，但它只是识别器之间的一致性代理，不是人工核对的正确率。

### 音质人脸与嘴型三道检查各丢掉什么

音质过滤用 DNSMOS P.835 的整体质量分，低于 2.8 的片段丢弃，同时用基于 CED 结构的多说话人检测模型去掉含多人或说话人切换的片段。这一步处理的对象是候选音频，解决的是噪声失真与段内换人问题，保留的是单人、质量可接受的语音。

人脸过滤在帧级别做人脸检测，只保留每 1 帧都恰好检测到一张人脸的片段，并比较相邻帧人脸框位置，丢弃位置突变的片段，以减少人脸切换、镜头跳变或检测不稳定。这里选的是检测稳定、连续可见的单人脸，但连续框本身不能证明说话的就是此人。

**WhisperX × Paraformer：** WhisperX 与 Paraformer 是两个不同的自动语音识别系统，分别负责给出候选语音的文字假设，论文计算两者假设之间的词错误率并丢弃分歧过大的片段，用两者一致程度作为转写可靠性的代理，最后英文保留 Whisper 转写、中文保留 Paraformer 转写。

最后用 SyncNet 估计每段的唇音同步置信度，低于 3.0 丢弃。这一步处理的是音画对，过滤掉嘴动与语音对应置信度低的组合。顺序上它是语音与人脸检查之后才执行，因此同步分数分布偏高是过滤的结果，不能反过来证明过滤中哪一步贡献最大。

**DNSMOS P.835 OVRL × LSE-C：** DNSMOS P.835 OVRL 是无参考的语音整体质量预测分，用于去掉噪声失真严重的音频，LSE-C 是用 SyncNet 估计的唇音同步置信度，分数越高表示估计的嘴动与语音对应越可信，两者分工是前者管声音好不好，后者管嘴型对不对得上。

### 成品数据长什么样：语言性别与时长分辨率

成品共 766708 段，论文用组成图、质量分布图、场景与分辨率统计来刻画它。组成上中英双语与性别、时长分布是理解适用范围的第一步，时长偏短意味着更适合短句配音训练，而非长篇有声书。

下图展示语种、性别与时长三块面板，读图时先看百分比条形再看时长峰形。

> **看图路径：** 1. 对比中文 37.8% 与英文 62.2% 的条形长度；2. 看性别三类中男性 78.0% 的主导比例；3. 看时长直方图中 2 到 5 秒区间最高的柱形

[![原论文 Figure 2：Corpus composition: (a) language, (b) gender, and (c) clip duration.](https://arxiv.org/html/2610.25259v1/fig_dataset_composition.svg)](https://arxiv.org/html/2610.25259v1/fig_dataset_composition.svg)

*论文图 2。原论文 Figure 2:：“Corpus composition: (a) language, (b) gender, and (c) clip duration.”。*

从像素可见，左侧语言面板中文占 37.8%，英文占 62.2%，中间性别面板男性占 78.0%，女性占 21.4%，儿童占 0.6%，右侧时长面板在 2 到 5 秒区间达到约 35% 的峰值，5 到 10 秒次之，0 到 2 秒与 20 秒以上较少。论文还报告 97.3% 的片段只含一个检测到的场景，中位短边分辨率为 1080 像素，92.8% 片段短边高于 720 像素，说明尽管按语音切分，多数片段仍落在单一场景内，且空间分辨率较高。

需要提醒研究生的是，性别与主题分布来自野外收集与过滤后的结果，不是均衡采样设计，男性与英文偏多会影响模型学到的音色与内容覆盖，复用时要检查是否符合自己的目标人群。

### 用什么模型与测试集验证数据是否有用

论文用两类下游任务验证，一是用 ZipVoice 做零样本文本转语音，检验语音文本对的质量，二是用 SyncVoice 在 Emilia 预训练的 ZipVoice 权重上微调，检验视频加语音对视频条件配音的适配价值。前者回答能不能说清楚说得像，后者回答加上视频后能不能保持质量与同步。

训练配置上，中文 ZipVoice 分别在 VoxDub 中文与 CN-CVS 上训练 100,000 步，英文分别在 VoxDub 英文与 LRS3 上训练 180,000 步，都是 4 卡、每卡每步 250 秒语音，LibriTTS 按官方配方约 115,000 步，另用 Emilia 预训练官方 checkpoint 作参考。配音微调中文在 VoxDub 中文与 CN-CVS、英文在 VoxDub 英文上各 100,000 步、2 卡同批量，LRS3 配音直接用官方开源 checkpoint。

测试集方面引入 DubBench，中文子集来自 CMLR 共 1000 条，英文子集来自 CelebV-Dub 共 978 条，每条含参考语音、目标文本与真实视频。语音任务还在 Seed-TTS 的中英测试集上测，配音只在 DubBench 上测，因为配音必须有配对视频输入。

下图是保留片段的质量分数分布，读图时注意横轴是分数区间，纵轴是百分比。

> **看图路径：** 1. 看 WER 子图中 0 处约三分之一高度的分布；2. 看 DNSMOS 子图中 3.0 到 3.5 区间占主导的柱形；3. 看 LSE-C 子图中随分数增高而先升后平的趋势

[![原论文 Figure 3：Quality-score distributions: (a) inter-ASR WER, (b) DNSMOS P.835 OVRL, and (c) LSE-C.](https://arxiv.org/html/2610.25259v1/fig_dataset_quality.svg)](https://arxiv.org/html/2610.25259v1/fig_dataset_quality.svg)

*论文图 3。原论文 Figure 3:：“Quality-score distributions: (a) inter-ASR WER, (b) DNSMOS P.835 OVRL, and (c) LSE-C.”。*

像素显示，左图双识别词错误率在 0 处最高，中图 DNSMOS 在 3.0 到 3.5 区间占 80% 以上，右图 LSE-C 在 5 到 6 及更高区间占比较大。论文文字对应为超过 80% 片段 DNSMOS 高于 3.0，超过 70% 片段 LSE-C 高于 5.0。

**词错误率 × 说话人相似度：** 词错误率是把生成语音再识别成文字后与输入文本比较的不一致程度，越低表示可懂度越好，说话人相似度是用说话人验证模型提取生成语音与参考语音的向量再算余弦相似度，越高表示音色越接近，两者分别回答说得清不清和像不像目标人。

指标方向要记牢，可懂度词错误率越低越好，说话人相似度、神经平均意见分预测 UT-MOS、同步置信度 LSE-C 越高越好，主观的比较平均意见分、相似度平均意见分与同步平均意见分也是越高越好，其中比较分是相对参考语音的 -3 到 3 打分。

### 英文语音合成比出了什么差距

英文语音合成实验固定使用 ZipVoice 模型，只更换训练数据，比较不同语音文本对在相同测试条件下的合成效果。Seed-TTS 英文测试集与 DubBench 英文测试集都报告词错误率、说话人相似度、自然度预测分和人工评分，词错误率以百分比报告，越低越好，相似度与自然度越高越好。

| Train Data | Seed-TTS test-en | Seed-TTS test-en | Seed-TTS test-en | Seed-TTS test-en | Seed-TTS test-en | DubBench-EN | DubBench-EN | DubBench-EN | DubBench-EN | DubBench-EN |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Train Data | WER ↓ | SIM-o ↑ | UT-MOS ↑ | CMOS ↑ | SMOS ↑ | WER ↓ | SIM-o ↑ | UT-MOS ↑ | CMOS ↑ | SMOS ↑ |
| Emilia | 1.55 | 0.696 | 3.85 | 0.19 | 4.08 | 2.40 | 0.635 | 3.58 | 0.14 | 3.86 |
| LibriTTS | 3.92 | 0.603 | 3.69 | 0.07 | 3.79 | 8.38 | 0.511 | 3.46 | 0.03 | 3.51 |
| LRS3 | 12.54 | 0.448 | 3.36 | -0.16 | 3.47 | 12.34 | 0.506 | 3.06 | -0.07 | 3.55 |
| VoxDub-EN | 3.01 | 0.601 | 3.92 | 0.14 | 3.96 | 4.34 | 0.562 | 3.42 | 0.09 | 3.67 |

原表比较了 Emilia 参考模型、LibriTTS、LRS3 和 VoxDub 英文训练的模型。Emilia 参考模型在两套测试集上词错误率最低、说话人相似度最高，Seed 集词错误率为 1.55%，DubBench 集为 2.40%，符合其大规模语音专用数据的定位。

在被比较的视听语料范围内，VoxDub 英文相对 LRS3 在所有报告指标上更好，Seed 集词错误率从 12.54% 降到 3.01%，DubBench 英文集从 12.34% 降到 4.34%。相对 LibriTTS，VoxDub 英文两集词错误率更低，比较平均分与说话人相似度主观分更高，但在相似度客观分与自然度预测分上各有一升一降，说明优势集中在可懂度和主观听感，并非所有客观分全面领先，结论不能推广为超过一切语音数据。

### 中文语音合成是否同样更好

中文比较的问题相同，只是基线换成 CN-CVS，测试集换成 Seed 中文与 DubBench 中文，词错误率以百分比报告，越低越好，相似度与自然度越高越好。

| 训练数据 | Seed 中文词错误率% | DubBench 中文词错误率% | 相似度与主观 | 自然度 UT-MOS |
| --- | --- | --- | --- | --- |
| Emilia 参考 | 1.42 | 1.72 | 最高 | Seed 3.14，DubBench 3.55 |
| CN-CVS | 12.52 | 7.17 | 最低档 | Seed 2.81，DubBench 2.71 |
| VoxDub 中文 | 2.63 | 3.08 | 优于 CN-CVS | Seed 3.22，DubBench 2.70 |

表后解释应抓住主要收益与反例，VoxDub 中文相对 CN-CVS 词错误率从 12.52% 降到 2.63%、从 7.17% 降到 3.08%，客观相似度与主观两项在两集都更高，支持其语音文本对更适合清晰且像目标人的合成。但自然度在 DubBench 中文是 2.70 对 2.71，数值上略低于 CN-CVS，基本持平而非提升。Emilia 参考依然词错误率最低、相似度最高，VoxDub 中文只在 Seed 集自然度上高于 Emilia，在 DubBench 集低于 Emilia，因此中文结论同样是有条件的，即在被比较的视听语料中可懂度与说话人相似度更好，自然度没有一致优势。

### 配音微调后语音质量与嘴型同步如何

配音实验比较的是从同一 Emilia 预训练语音生成器出发，用不同视听数据做视频条件微调，测试都在 DubBench 上，英文看 VoxDub 英文对 LRS3，中文看 VoxDub 中文对 CN-CVS。表前说明比较公平性在于共享预训练起点，指标中词错误率越低越好，相似度、自然度、同步置信度与主观同步越高越好。

| 语言与训练数据 | 词错误率% | 相似度 | 自然度 | 同步置信度 LSE-C | 主观同步 |
| --- | --- | --- | --- | --- | --- |
| 英文 LRS3 | 6.10 | 0.652 | 3.51 | 7.10 | 4.27 |
| 英文 VoxDub | 5.44 | 0.649 | 3.54 | 6.29 | 4.12 |
| 中文 CN-CVS | 1.40 | 0.728 | 2.78 | 6.05 | 4.01 |
| 中文 VoxDub | 1.41 | 0.730 | 2.74 | 5.79 | 4.07 |

表后解释要区分语音侧与同步侧，语音侧差异很小，英文 VoxDub 词错误率略低、自然度略高、相似度略低，中文 VoxDub 词错误率几乎相同、相似度略高、自然度略低，主观比较分与相似主观分都是 VoxDub 略高。论文认为差异小可能与共享预训练语音模型有关，预训练已打下可懂度与音色的基础。同步侧是混合结果，客观 LSE-C 都是 VoxDub 更低，英文 6.29 对 7.10，中文 5.79 对 6.05，主观同步英文 4.12 对 4.27 更低、中文 4.07 对 4.01 更高，点估计接近但不能证明等效或有同步优势。未胜出项要明确写出，即 VoxDub 在客观同步上并未超过对照，主观也只是一低一高。

### 语音质量分数能否解释合成结果

这一节回答质量预测分与下游结果是否一致，比较对象是各语料随机抽样或文献取值的 DNSMOS 整体分，数值越高表示预测的感知质量越好，误差线表示标准差。表前说明，论文从 CN-CVS、LRS3、VoxDub 各抽 100,000 条计算，Emilia 与 LibriTTS 取值引自文献，因此跨表比较时采样与来源并不完全相同。

| 语料 | 分组 |
| --- | --- |
| CN-CVS | 视听 |
| LRS3 | 视听 |
| VoxDub | 视听 |
| LibriTTS | 语音 |
| Emilia | 语音 |

表后解释要讲支持与局限，VoxDub 均值高于 CN-CVS 与 LRS3 且接近 Emilia 与 LibriTTS，标准差更小，排序与它在语音合成中优于被比较视听语料的结果一致。但这只是相关性佐证，因为 VoxDub 本身经过 2.8 阈值过滤，分数偏高是筛选的结果，不能证明是哪一步过滤带来的提升，也不能把无参考预测分等同于人工听感。图中误差线还显示 CN-CVS 与 LRS3 离散更大，说明其音频质量更不均匀。

下图是各语料 DNSMOS 均值与标准差的柱形对比，读图时先分组再看高度与线长。

> **看图路径：** 1. 先区分左侧视听数据集与右侧语音数据集两组柱形；2. 对比 VoxDub 柱形与 CN-CVS、LRS3 柱形的高度与误差线长度；3. 再看 VoxDub 与 LibriTTS、Emilia 柱形高度的接近程度

[![原论文 Figure 4：Comparison of DNSMOS OVRL scores across different corpora. Error bars denote standard deviations.](https://arxiv.org/html/2610.25259v1/dnsmos_ovr_compare_mean_std.svg)](https://arxiv.org/html/2610.25259v1/dnsmos_ovr_compare_mean_std.svg)

*论文图 4。原论文 Figure 4:：“Comparison of DNSMOS OVRL scores across different corpora. Error bars denote standard deviations.”。*

像素可见左侧三根视听柱形从 CN-CVS 到 VoxDub 依次升高，右侧两根语音柱形最高且误差线较短，VoxDub 柱形高度已接近右侧，支持正文说的接近语音专用数据的质量水平，但同样受限于预测模型与采样方式。

### 结论在什么条件下才成立

语音合成的改进只在报告的设置下成立，包括同一 ZipVoice 模型、相同的步数批量与测试集，以及对照仅为 LRS3、CN-CVS 和 LibriTTS 与 Emilia 参考。换模型、换测试域或换超参数后差距可能变化，论文没有给出显著性检验与多次随机种子的方差，主观评价每集只抽 10 条、15 名评分者，样本量很小。

配音部分更应谨慎，客观同步用同一类 SyncNet 计算，而 VoxDub 构建时也用 SyncNet 过滤，这种同源可能带来有利偏差，但结果仍是 VoxDub 客观同步更低，说明不能声称同步优势。主观同步一升一降且差距小，在小样本下只能说大致相当，不能说等效。

数据侧的局限是英文多于中文、男性远多于女性，野外主题覆盖虽广但非均衡，质量分布偏高是过滤阈值直接导致的结果。论文也明确质量分布与所用筛选标准一致，而不是各过滤阶段贡献的独立证据。

### 想复用或复现第一步该做什么

复用的第一步不是直接训练，而是按论文的标准化与过滤阈值检查自己的视频是否满足单人脸连续可见与同步置信度要求，包括 25 帧每秒、24 kHz、人声分离、语音活动检测合并规则、双识别词错误率阈值、DNSMOS 2.8、人脸单检与 SyncNet 3.0。阈值原文只给了分数 cut，具体双识别词错误率阈值与合并短停顿的时长没有披露，复现时需要自己补实验或联系作者确认。

资源方面，论文正文只给出项目网站可查更多细节，证据中可确认的是第三方工具链接当前可用，包括人声分离、语音活动检测、同步模型辅助与场景检测，作者资源是否公开不能从本次链接状态推断。代码开源、权重可下载、系统可运行是三件事，本文只验证了配音与合成的训练评估流程，没有提供一键可运行系统的证据。

训练复现要保留关键超参数，中文 100,000 步、英文语音 180,000 步、配音微调 100,000 步、批量按每卡 250 秒语音，以及 DubBench 的来源构成，避免用不同划分或不同识别器算词错误率导致不可比。

### 什么时候值得尝试还缺哪些验证

如果你做中英短句配音或零样本语音合成，且需要每段都有转写与可见嘴型，VoxDub 值得作为训练或微调候选，尤其当现有视听数据可懂度差、音色漂移明显时。它的语音文本对在报告条件下优于被比较的视听语料，配音微调能保持可比的语音质量与主观同步，适合在预训练语音模型之后做视频适配。

如果目标是长篇朗读、均衡性别音色或严格口型同步，则要先做补充验证，包括在自己域上测词错误率与相似度、扩大主观同步样本并做统计检验，以及检查 SyncNet 同源评价之外的同步指标。还需验证过滤阈值对数据量与多样性的 trade-off，因为提高阈值会丢掉更多困难样本，可能让模型在噪声与侧脸条件下更脆弱。

一句话总结，VoxDub 是经过多道语音与画面检查的中英嘴型同步数据，语音合成收益有证据，配音同步只是大致相当，复用时先对齐切分与过滤条件，再在目标场景补测同步与泛化。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2610.25259v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-20/)
