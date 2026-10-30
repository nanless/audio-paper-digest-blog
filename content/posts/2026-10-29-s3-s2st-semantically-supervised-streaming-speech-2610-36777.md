---
title: "S3-S2ST: Semantically Supervised Streaming Speech-to-Speech Translation"
date: 2026-10-29
draft: false
tags: [语音翻译, 弱监督学习, 流式处理, 语音]
categories: [论文速递]
description: "S3-S2ST 把整句语音对翻译成按语义切分的增量训练轨迹，用 640 ms 固定分块和可调 READ/WRITE 门限实现流式语音到语音翻译，在 FLEURS 和内部 9 对数据上验证了翻译质量，并在 RealSI 上展示了质量与延迟的权衡。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.36777"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "边听边翻：语义对齐如何教模型决定何时开口"
paper_digest_original_title: "S3-S2ST: Semantically Supervised Streaming Speech-to-Speech Translation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.36777v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.36777v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.36777v1.pdf"
paper_digest_primary_task: "语音翻译"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-translation","label":"语音翻译"},{"facet":"method","id":"method.weak-supervised","label":"弱监督学习"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "弱监督学习"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "S3-S2ST 把整句语音对翻译成按语义切分的增量训练轨迹，用 640 ms 固定分块和可调 READ/WRITE 门限实现流式语音到语音翻译，在 FLEURS 和内部 9 对数据上验证了翻译质量，并在 RealSI 上展示了质量与延迟的权衡。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yuxiang Zhao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhiyun Fan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yu Pu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yanjie An"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yushen Chen"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Wenrui Liang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Baiji Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yunchong Xiao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhaoci Liu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Keqi Deng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kai Yu"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zhifu Gao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xiangang Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Xie Chen"}]
paper_digest_abstract_sha256: "7bd43013f96a51dcadfd1f7131a147028d42cddfbb2393af0f7a2d5b7551360c"
paper_digest_sidecars: {"citation.bib":{"sha256":"f01d8150a45902cb3ca073b8db3c254456ea9778ae0fe89c9d0469c23a1da84b","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-36777/citation.bib"},"citation.json":{"sha256":"b0a549cbb213c95cd190078d55cbf86e550c711236583a77e0c7d35a818585f9","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-36777/citation.json"},"citation.ris":{"sha256":"89d0997665da45b4f40ff46f9328028d7ea3f50819ca56d1dc1ac789cbcc61eb","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-36777/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"8b311d56ed9c16f3b581b979961686e3d7ee7ff960d805dadcae9b5ff536d7de","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-36777/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "079411eaa9510470d3e0125401ad5a5eb5c17b32ac4d99f48812a951da7750a1"
paper_digest_api_reader_plan_sha256: "7e21c7dd9215794c9c03cc3f48a69937e8004fac43990281e5720941680f0121"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "ad0a4185b16ccb38bd32dc0bb55c0fd97af80e2e3c9d54f29da82e30ddfdbd05"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "ebc2abed6a1e70446d1c376be41c70b7b57506f66c6ef19020171a245eace755"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "130fc41c72c480a67b3b392ace926cc1dfc95abf74d651faf526cf87b78e86d4"
paper_digest_api_reader_author_count: 14
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "abadf7da46c8d80f12a3009a334d007fbee9dd70fe7911a06298a5df4dff2ace"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 边听边翻：语义对齐如何教模型决定何时开口

> 英文题目：*[S3-S2ST: Semantically Supervised Streaming Speech-to-Speech Translation](https://arxiv.org/abs/2610.36777v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音翻译](/audio-paper-digest-blog/papers/?concept=task.speech-translation)
- **研究方法**：[弱监督学习](/audio-paper-digest-blog/papers/?concept=method.weak-supervised)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Yuxiang Zhao：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhiyun Fan：机构信息未能在本次解析中与作者逐人可靠绑定
- Yu Pu：机构信息未能在本次解析中与作者逐人可靠绑定
- Yanjie An：机构信息未能在本次解析中与作者逐人可靠绑定
- Yushen Chen：机构信息未能在本次解析中与作者逐人可靠绑定
- Wenrui Liang：机构信息未能在本次解析中与作者逐人可靠绑定
- Baiji Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Yunchong Xiao：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhaoci Liu：机构信息未能在本次解析中与作者逐人可靠绑定
- Keqi Deng：机构信息未能在本次解析中与作者逐人可靠绑定
- Kai Yu：机构信息未能在本次解析中与作者逐人可靠绑定
- Zhifu Gao：机构信息未能在本次解析中与作者逐人可靠绑定
- Xiangang Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Xie Chen：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

流式语音到语音翻译（Speech-to-Speech Translation，S2ST）的输入是不断到达的源语言语音，输出是另一语言的语音，难点在于没听完一句话时就要判断已有片段是否足以支撑翻译，判早了容易翻错，判晚了会打断交流，而且说出去的语音无法像文字那样悄悄修改。S3-S2ST（Semantically Supervised Streaming，语义监督流式模型）先用大模型把完整双语文字切成前后缀支撑的语义单元，再把每个单元变成“继续听还是开始写”的训练轨迹，让负责理解与翻译的思考器（Thinker）学翻译，让负责语音生成的发声器（Talker）学说话。推理时每 640 ms 观察一块新语音，一个多层感知机门控给出继续读入（READ）还是写入翻译（WRITE）的概率，超过阈值就提交一段译文并合成语音，阈值可调且有随播放缓存自适应的版本。相对已有按块长换挡或固定间隔输出的做法，该方法把提交决策与输入粒度解耦，同一检查点不用重训就能走不同的质量与延迟工作点。在内部 9 对测试集的流式评测中，固定阈值 0.5 的 S3-S2ST 在译文 COMET 上达到 0.965，高于参评流式基线，RealSI 上的自适应阈值在首包音频延迟基本不变时提升了后续提交质量。结论适用于英中双向短句评测，原文未披露训练、推理或部署成本，长对话与更多语言尚未验证。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/byteresearchcla/RealSI> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 流式语音翻译要同时管什么

这篇论文做的是流式语音到语音翻译，输入是说话人不断到来的源语言语音，输出是另一种语言的语音，而且不等说话人讲完就要开始播。研究生刚接触时容易只想到翻译准不准，但流式任务多了一个何时开口的问题。等太久，对话会被打断；说太早，依据不足就会翻错。与显示文字不同，说出去的语音不能悄悄撤回重写，所以每一段译文一旦提交就要承担后果。

论文把系统要协调的三件事说得很直接：翻译内容、提交时机和语音生成。翻译内容解决说什么，提交时机解决什么时候敢说，语音生成解决怎么说得自然连贯。后续方法的分块编码、文本与语音两条生成路径、READ 与 WRITE 决策，都是围绕这三件事展开的。理解这一点后，再看阈值、缓冲和评测就不容易混。

### 已有路线为什么还缺增量监督

论文回顾了 3 条路线。第一条是级联系统，例如 X-Translator，把识别、翻译、合成串起来，优点是能复用很强的现成模块，难点是局部假设和提交决策要在模块接口之间协调。第二条是直接流式模型，例如 SeamlessStreaming 和 StreamSpeech，用单调注意力或辅助对齐任务学习何时读入、何时输出。第 3 条是语音语言模型路线，例如 SimulS2S-LLM、Hibiki 和 SimulS2ST-Omni，把更强的预训练翻译和生成能力带进来，有的从对齐语音流中学习时间信息。

论文提出的问题是，整句级语料只给最终译文，没有说哪个局部输入能支撑哪段目标。像 CVSS 这类语料缺的就是这种时间对应关系。另一点是延迟控制方式：SimulS2ST-Omni 靠改变输入块时长得到不同延迟档，大块带来更多上下文但减少了做决策的机会；DIAL-S2ST 靠调节单个 LoRA 适配器的尺度改变输出时机。本文想把做决策的门限与输入粒度分开，让同一个检查点只改门限就能换工作点，推理时还能随播放缓冲变化。

### 一个例子看懂边听边说的难点

举例说明时请把下面当作教学例子，不是实测数值。英文说话人说 The next train leaves in ten minutes，系统不能等整句结束才开始合成，否则中文听众要等很久；但如果只听到 The next train 就急着说下一班列车 10 分钟后出发，后面的时间信息其实还没有证据。理想行为是先等待，听到足以支撑下一班列车时先提交前半段，再听到时间信息后提交后半段。

下面这张应用示意图就是讲这个节奏，上半部分是说话人到听众的整体链路，下半部分是时间轴上的等待与提交关系，时间线只是示意，不是实测延迟曲线。

> **看图路径：** 1. 先看上半部分英文说话人到中文听众的箭头，确认听、决策、说三步；2. 再看下半部分源语音块与译语语音块在时间轴上的先后关系；3. 注意竖线处标注的提交受支持前缀，理解 READ 等待与 WRITE 开口的分界

[![原论文 Figure 1：Application overview of S3-S2ST.](https://arxiv.org/html/2610.36777v1/figure/01_application.png)](https://arxiv.org/html/2610.36777v1/figure/01_application.png)

*论文图 1。原论文 Figure 1:：“Application overview of S3-S2ST. The system listens to partial source speech, decides when to commit, and produces translated speech while the source continues.”。*

图中左侧蓝色块是英文源语音不断到来，中间是 S3-S2ST 负责听、决策、说，右侧绿色块是中文译语语音。下方时间轴把源语音画成一小块一小块，译语语音在竖线之后才出现，竖线处写着提交受支持的前缀，之前标注为 READ 等待。可以看到系统先攒了几个源块，够了才开口，源语音还在继续时译语已经开始播，之后还有等待再播第二段的过程。这正是流式语音翻译与离线翻译的根本区别。

### 整体流程：分块听、决策、再说话

方法的整体输入是源语音波形，输出是目标语音波形，中间经过文本译文。源音频按 640 毫秒分块进入分块编码器和适配器，变成 Thinker 能读的声学特征。Thinker 的上下文把声学块和已提交的译文交错放在一起，它的最终状态一方面生成目标文本，另一方面送给一个多层感知机做 READ 或 WRITE 判断。决定 WRITE 时生成一段译文，同时把融合后的多层状态送给 Talker 生成编解码记号，再经冻结的流匹配与声码器变成波形。

读这张结构图时，先走主路，再看决策支路。主路自下而上是源音频、分块编码器、Thinker、文本与语音两路输出；右侧支路是 MLP 策略在 READ 与 WRITE 之间选择。图中下方的色块区分了文本输入、音频特征、文本隐状态、音频隐状态和编解码记号，数量只是示意。

> **看图路径：** 1. 从底部源音频经分块编码器到 Thinker，再分两路看文本与融合状态；2. 对比最终隐状态一路与八层加权融合一路的不同去向；3. 看右侧 MLP 策略如何在 READ 与 WRITE 之间切换

[![原论文 Figure 2：Architecture of S3-S2ST. Chunkwise acoustic features and committed text form the Thinker context.](https://arxiv.org/html/2610.36777v1/figure/02_architecture.png)](https://arxiv.org/html/2610.36777v1/figure/02_architecture.png)

*论文图 2。原论文 Figure 2:：“Architecture of S3-S2ST. Chunkwise acoustic features and committed text form the Thinker context.”。*

这张图确实可见左侧大框是翻译与语音路径，底部标注 640 毫秒块加 160 毫秒前视；中间 Thinker 上方分出最终隐状态和八层加权融合两路，前者接文本头和策略特征，后者经投影接 Talker；顶部是 Talker 到编解码记号再到冻结波形渲染器；右侧是何时翻译，MLP 策略向上触发 WRITE 生成一段译文，向下触发 READ 读下一块。这种画法帮助理解为何文本提交与语音条件可以分开控制，又共享同一个 Thinker 理解结果。

### 编码器怎样固定观察粒度

编码器解决的是流式观察方式。论文固定用 640 毫秒块，每块对应 16 个编码器状态，再经块因果适配器压缩到 8 个位置。第一层编码器允许块内向右看，并有 160 毫秒前视，后面层不能再看下一个块，这样逐层累积不会把未来上下文越扩越大。31 抽头的 FSMN 卷积保留居中抽头对齐，只屏蔽尚不可用的右侧上下文，而不是把抽头全部搬到过去。推理时只用已收到的音频，等声明的前视到了才处理该块。

需要分清两个时间概念：640 毫秒是观察粒度，即多久做一次决策；从开始播源语音到发出第一个非空音频包的实际延迟还包括生成和渲染。附录提到每个非末尾块 beyond 端点还有约 162.5 毫秒波形前视，第一个完整块需要约 802.5 毫秒已接收音频，这部分前端等待会计入后文的 StartOffset。编码器随前缀增长会重算，计算量随录音变长增加，这是固定分块换来频繁决策的代价。

### 何时翻译：门限与播放缓冲

提交决策由一个小的 MLP 完成。它取 Thinker 最后一个归一化后的最终状态，映射为 WRITE 概率。训练用交叉熵、读写两类等权重，学的是每个完整声学间隔后该等还是该说。推理时概率达到门限就 WRITE，否则 READ 继续读；输入结束则强制把剩余部分冲刷输出。调高门限意味着需要更强证据，但因生成历史变了，质量不一定单调变好。

**Thinker × Talker：** Thinker 负责理解已收到的源语音块和已提交的译文，生成目标文本并判断证据是否足够；Talker 负责把 Thinker 的状态转成目标语音的编解码记号。两者分工是先定内容与时机，再定发音，组合后模型能一边听一边说出连贯译文。

播放自适应策略进一步让门限随输出缓冲变化。记缓冲中还可播放的剩余语音为 b 秒，论文用一条只在推理时生效的规则抬高门限，缓冲为空时回到低门限以便尽早响应，缓冲中有可播语音时提高门限以便多攒源上下文。

\[\tau_{t}=0.1+0.89\sqrt{\min\!\left(\frac{b_{t}}{1\,\mathrm{s}},1\right)}.\]

该式把自适应阈值限制在 0.1 到 0.99 之间，根号使阈值随缓冲先快后慢地上升，1 秒处封顶。它不改模型权重、不改输入粒度，只改变推理决策，输入结束仍强制冲刷。

**READ × WRITE：** READ 指继续等待并读入下一个源语音块，WRITE 指把当前已支持的一段语义提交为译文。两者是每个决策点的二选一动作，组合起来形成先攒证据、够了就开口的流式节奏。

**固定阈值 × 播放自适应阈值：** 固定阈值是在整句中用同一个 WRITE 概率门限，播放自适应阈值是根据输出缓冲中还剩多少待播语音动态抬高或降低门限。前者操作简单，后者想在不拖慢首句的同时给后句多留证据，两者共用同一个已训练模型。

### 语音条件为什么用八层融合

Talker 的条件不是只用 Thinker 最后一层。论文取第 4、8、12、16、20、24、28、32 层的隐状态，用可学习的向量按通道加权求和，再经已有的投影送给 Talker。文本头和门限仍用最终状态，只有语音条件用多层融合。这样做的直觉是中间层保留更多与发音和内容有关的表示，对合成有帮助，而最终状态更偏向文本决策。

\[\widetilde{h}_{t}=\sum_{\ell\in\mathcal{L}}w_{\ell}\odot h_{t}^{(\ell)},\qquad q_{t}=P\widetilde{h}_{t}.\]

式中集合是上述八层编号，w 是按通道学习的权重，h 是各层隐状态，P 是投影。权重在位置间共享，与条件接口一起学习。实现上用有符号的逐通道系数，不做 softmax 归一化，也不做随输入变化的路由；把前七层置零、最后一层置一就退化为只用最终层，这也正是消融对照的做法。连续条件按时间顺序保留音频与文本状态，中间不加填充，保证 Talker 看到的是连贯历史。

### 训练数据怎样从整句变成增量

训练分两类监督。离线部分从识别数据出发，用 Qwen3-Max 翻译源转写，再用 CosyVoice3.5 合成目标语音，英译中和中译英各自用对应源语言的真实录音，不把合成目标反过来当源，以学好语音实现和 Thinker 到 Talker 接口。流式部分再用 Qwen3.7-Max 把双语转写切成对齐语义单元，方向相关提示要求前缀支撑翻译，校验要求拼接能精确还原原文，再用强制对齐把单元定位到两端波形，过滤非法区间、非单调时间戳和时长不一致。

**语义单元 × 流式轨迹：** 语义单元是对整句双语转写切出的前后缀支撑的对齐片段，流式轨迹是把这些片段按时间展开成的读入与提交序列。前者提供切分依据，后者提供训练用的逐步监督，组合后整句语料才能教增量决策。

源端点按 640 毫秒网格向上取整，目标语音映射到 12.5 赫兹编解码时间线。每个合并后的单元变成一段轨迹：先消费源块，内部网格点监督为 READ，单元边界监督为 WRITE，再预测该段目标文本和编解码片段，句末把剩余尾巴冲刷掉。若多个语义边界落到同一观察点，就合并其目标跨度，避免零时长轮次。标注用完整双语对构造目标，推理只用已收到的源前缀预测提交。

联合流式训练同时优化文本、编解码和门限三项，波形渲染器始终冻结，所谓端到端指从源到编解码记号的优化。

\[\mathcal{L}=\mathcal{L}_{\mathrm{text}}+\mathcal{L}_{\mathrm{codec}}+0.1\mathcal{L}_{\mathrm{gate}}.\]

式中门限损失权重为 0.1，文本与编解码损失权重为 1。训练分 streaming 语音文本适配、离线语音语音适配、流式语音语音适配 3 个阶段，先后更新编码器、Thinker、门限、融合、投影和 Talker，具体更新模块与步数见附录表格，报告的流式检查点取联合阶段 4000 步。

### 在什么数据和指标下比较

评测用公开的英中 FLEURS 测试集，含 945 条中译英和 646 条英译中；内部 9 对测试集每方向 996 条，不公开；RealSI 公开基准用于质量与延迟评估。每个数据集内各系统用同一清单，报告分数是两方向的无加权平均。流式混合约 13,000 小时真实源音频，每方向约 6500 小时，另有少量 FLEURS 训练语音 10 倍上采样。

离线约 300,000 小时。基线分开离线与流式两组，包括 Seamless 系列、Qwen3-Omni、UniSS、SimulS2ST-Omni、X-Translator、Hy-SimulMT 和纯文本 IWSLT。

**COMET × ASR-COMET：** COMET 直接评价模型生成的译文文本质量，ASR-COMET 先用语音识别把模型发出的译语语音转写成文字再评价。两者分工是区分翻译错还是合成丢内容，组合后能判断质量损失来自哪一段。

指标按 OpenSTBench 思路分文本、语音和延迟。BLEU 是语料级，COMET 用 XCOMET-XL 评价生成译文，ASR-BLEU 和 ASR-COMET 对输出语音的识别转写再评价。WER 比较识别转写与模型生成文本以衡量合成保真度，英文用词、中文用字，按方向汇总错误数再平均。SIM 是源与输出的说话人余弦相似度，UTMOS 估计自然度。计算感知的 StartOffset 从实时回放源开始到发出首个非空波形包，包含等源、说话人条件、Thinker 与 Talker 计算、流匹配和声码，模型加载和网络播放缓冲不计。主表固定阈值取 0.5，自适应用公式 1，同检查点同语音配置。

### 离线结果说明了什么

离线比较回答完整源输入下翻译与语音实现的能力，比较条件是同一清单与同一打分流水线，指标方向为 BLEU、COMET、ASR-BLEU、ASR-COMET、SIM、UTMOS 越高越好，WER 越低越好。同一清单内各系统用同一 manifest 打分，分数为 2 个方向的非加权平均。

| System | Params. | BLEU↑ | COMET↑ | WER↓ | ASR-BLEU↑ | ASR-COMET↑ | SIM↑ | UTMOS↑ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FLEURS |  |  |  |  |  |  |  |  |
| SeamlessM4T-v2-large | 2.3B† | 26.18 | 0.800 | 7.34 | 24.80 | 0.729 | 0.026 | 3.16 |
| Qwen3-Omni | 30B/3B | 34.46 | 0.905 | 2.54 | 31.71 | 0.843 | 0.015 | 4.16 |
| UniSS (Quality) | 1.5B | 28.79 | 0.810 | 2.04 | 25.30 | 0.772 | 0.437 | 3.89 |
| UniSS (Performance) | 1.5B | 27.64 | 0.790 | 2.36 | 24.13 | 0.756 | 0.438 | 3.90 |
| S3-S2ST | 4B | 34.52 | 0.904 | 2.00 | 29.88 | 0.849 | 0.604 | 4.01 |
| 9-pair |  |  |  |  |  |  |  |  |
| SeamlessM4T-v2-large | 2.3B† | 38.08 | 0.914 | 5.05 | 37.40 | 0.868 | 0.062 | 3.20 |
| Qwen3-Omni | 30B/3B | 56.40 | 0.974 | 1.08 | 53.15 | 0.952 | 0.066 | 4.14 |
| UniSS (Quality) | 1.5B | 48.22 | 0.943 | 1.03 | 47.11 | 0.928 | 0.538 | 3.88 |
| UniSS (Performance) | 1.5B | 47.89 | 0.939 | 0.85 | 46.90 | 0.925 | 0.537 | 3.87 |
| S3-S2ST | 4B | 64.79 | 0.979 | 0.95 | 58.95 | 0.956 | 0.581 | 4.11 |

上表是离线语音到语音翻译在 FLEURS 和 9 对数据上的结果，含 Seamless、Qwen3-Omni、UniSS 两种模式与 S3-S2ST。FLEURS 上 S3-S2ST 的 BLEU 为 34.52、COMET 为 0.904，与 Qwen3-Omni 接近，并在 ASR-COMET 和说话人相似度上占优；9 对数据上其 BLEU 为 64.79、COMET 为 0.979，文本与转写语音均为受评系统中最高。但自然度和合成保真度是互补维度，没有系统在所有列领先，例如 UTMOS 和 WER 的最优分属不同系统。结论成立条件是离线允许看完全部源语音，且分数为两方向平均；它不直接证明流式延迟下的表现。

### 流式结果与延迟权衡

流式比较回答边听边说时的质量，固定阈值取 0.5，自适应用播放缓冲规则，基线含 SimulS2ST-Omni 的 m2 设置与 Hy-SimulMT 两种块设置。FLEURS 上 Hy-SimulMT 的 1.6 秒设置在文本指标领先，但含 27 个空输出仍计入打分；9 对数据上 S3-S2ST 固定阈值在文本与语音翻译质量领先。需要记住固定阈值 COMET 高于自适应，因为后者瞄准更低延迟工作点。

| System | Params. | BLEU↑ | COMET↑ | WER↓ | ASR-BLEU↑ | ASR-COMET↑ | SIM↑ | UTMOS↑ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FLEURS |  |  |  |  |  |  |  |  |
| IWSLT (VAD) | 2.3B† | 21.16 | 0.665 | – | – | – | – | – |
| SeamlessStreaming | 2.5B† | 23.17 | 0.730 | 13.17 | 21.80 | 0.638 | 0.034 | 3.36 |
| X-Translator | 8B | 28.63 | 0.759 | 5.40 | 24.87 | 0.699 | 0.547 | 3.19 |
| SimulS2ST-Omni (m2) | 3B | 26.46 | 0.743 | 11.87 | 21.27 | 0.626 | 0.561 | 2.96 |
| Hy-SimulMT (1.6 s) | 30B/3B | 30.20 | 0.845 | 2.28 | 26.24 | 0.791 | 0.396 | 3.72 |
| Hy-SimulMT (0.8 s) | 30B/3B | 27.33 | 0.780 | 3.12 | 23.75 | 0.730 | 0.393 | 3.63 |
| S3-S2ST (fixed) | 4B | 29.83 | 0.828 | 4.02 | 25.65 | 0.769 | 0.606 | 3.75 |
| S3-S2ST (adaptive) | 4B | 29.51 | 0.804 | 3.74 | 25.74 | 0.751 | 0.605 | 3.65 |
| 9-pair |  |  |  |  |  |  |  |  |
| IWSLT (VAD) | 2.3B† | 32.65 | 0.854 | – | – | – | – | – |
| SeamlessStreaming | 2.5B† | 32.90 | 0.871 | 11.77 | 32.44 | 0.792 | 0.060 | 3.40 |
| X-Translator | 8B | 44.73 | 0.907 | 2.73 | 42.54 | 0.885 | 0.630 | 3.39 |
| SimulS2ST-Omni (m2) | 3B | 47.18 | 0.940 | 8.28 | 40.36 | 0.840 | 0.661 | 3.33 |
| Hy-SimulMT (1.6 s) | 30B/3B | 52.22 | 0.954 | 1.24 | 50.05 | 0.926 | 0.562 | 3.71 |
| Hy-SimulMT (0.8 s) | 30B/3B | 48.34 | 0.931 | 2.12 | 46.73 | 0.903 | 0.560 | 3.66 |
| S3-S2ST (fixed) | 4B | 60.51 | 0.965 | 1.54 | 55.13 | 0.933 | 0.585 | 3.78 |
| S3-S2ST (adaptive) | 4B | 57.95 | 0.956 | 1.62 | 53.04 | 0.922 | 0.588 | 3.67 |

上表是流式翻译在 FLEURS 和 9 对数据上的结果，纯文本 IWSLT 只贡献文本列。9 对数据上 S3-S2ST 固定设置的 BLEU 为 60.51、COMET 为 0.965，高于受评流式基线；FLEURS 上则 Hy-SimulMT 在翻译指标占优，S3-S2ST 在说话人相似度占优。说话人相似度上流式 S3-S2ST 在 9 对数据上落后于 X-Translator 和 SimulS2ST-Omni，说明翻译优势不等于音色保持优势。

RealSI 曲线进一步看同一检查点只改门限能换到什么位置，横轴是 StartOffset，纵轴是 ASR-COMET，标签为固定阈值、m1 到 m5 和后续块时长，星形为自适应。

> **看图路径：** 1. 先确认横轴是 StartOffset 延迟，纵轴是 ASR-COMET 质量；2. 比较蓝色固定阈值曲线与星形自适应点的位置；3. 再看绿色虚线和其它基线点相对本方法的位置

[![原论文 Figure 3：Quality–latency tradeoff on RealSI, averaged equally across directions.](https://arxiv.org/html/2610.36777v1/03_s2st_tradeoff.svg)](https://arxiv.org/html/2610.36777v1/03_s2st_tradeoff.svg)

*论文图 3。原论文 Figure 3:：“Quality–latency tradeoff on RealSI, averaged equally across directions.”。*

图中确实可见蓝色固定阈值曲线随阈值增大向右上走，红色星形自适应点在低延迟附近高于固定 0.1 并接近固定 0.2 的质量，绿色虚线 m1 到 m5 整体偏下，橙色 Hy-SimulMT 两点也在星形之下。它的含义是固定 0.1 已在质量和首音延迟上好于 m2 到 m5，m1 更早但质量更低；自适应用可播时间给后句多攒上下文，同时保持早期首响应。该结论只在同一计时协议和同一生成波形打分下成立，不能推广为所有延迟定义下都最优。

### 门限、前端与语音条件各起什么作用

消融都在 FLEURS 上做，回答 3 个分开的问题：自适应是否比其固定起点好，八层融合是否比只用最终层好，学习决策是否比固定间隔好。固定与自适应对比固定模型权重、渲染与说话人条件，只有决策不同；融合对比用相同适配流程与解码配置。

下表是 S2TT 阶段前端配方在 FLEURS 上的对照，阈值为 0.5，训练配方不同，COMET 越高越好。

| Frontend recipe | COMET↑ |
| --- | --- |
| Earlier block-causal recipe | 0.687 |
| 640 ms chunkwise recipe | 0.827 |

上表显示分块配方 COMET 为 0.827，高于早期块因果配方的 0.687，但训练设置不同；该结果属于流式 S2TT 适配后的检查点，不同于最终 S2ST 模型在同一阈值下的 0.828。它只测质量不测运行时间。

下表是承诺策略在 FLEURS 上的对照，固定 K 每 K 个源块写一次，MLP 用阈值 0.5，StartOffset 单位为秒。

| Policy | COMET↑ | ASR-COMET↑ | StartOffset↓ |
| --- | --- | --- | --- |
| FLEURS |  |  |  |
| Fixed 66 | 0.782 | 0.729 | 5.55 |
| Fixed 88 | 0.814 | 0.752 | 6.83 |
| MLP | 0.828 | 0.767 | 6.61 |

上表显示 MLP 在 COMET 和 ASR-COMET 上好于每八块写一次且响应更早，六块写一次更早但质量代价更大，支持内容相关提交。固定与自适应对照中，自适应把 ASR-BLEU 从 25.02 提到 25.74，ASR-COMET 从 0.737 提到 0.751，StartOffset 从 4.90 秒到 4.97 秒基本不变，首个 WRITE 位置相同，70 毫秒差异来自运行波动，增益来自后续提交。语音条件消融中，八层融合把 ASR-COMET 从 0.744 提到 0.751，WER 从 4.13% 降到 3.74%，支持中间表示对语音条件有适度帮助，但只测质量不测运行时间。限制是这只是均值首音延迟，不保证每句都不变慢。

### 结论在什么边界内有效

论文明确只覆盖英语和中文，更广多语迁移和长连续对话还没评估。FLEURS 和 RealSI 可复现，内部 9 对数据不公开，所以 9 对上的领先只能在作者清单内理解。精确匹配审计未发现与评测清单的重叠，但不能排除近重复音频或预训练继承的重叠。自动识别、说话人相似度和自然度估计可能有语言相关偏差，不能当作人工评价。

容易误解的是把离线最优当成流式最优，或把平均延迟改善当成每句都快。自适应在 FLEURS 和 RealSI 上显示平均首音基本不变下质量提升，但这是均值结果；固定阈值越高不一定质量单调更好，因为历史变了。参数量标注也有口径差异：LLM 系统报语言骨干规模，Seamless 用模型级规模，比较时要看附录口径，不能只比数字大小。

### 复现第一步做什么

值得尝试的场景是需要固定观察粒度、又想用一个检查点切多个延迟档的英中流式语音翻译，且能接受 640 毫秒决策节奏和冻结声码器。复现先从数据构造跑起：用附录流程把整句双语转写切成前缀支撑的语义单元，做强制对齐、网格取整与合并，再生成 READ 与 WRITE 轨迹；同时准备好 FLEURS 官方划分与 RealSI 句子级评测，保证清单一致。

推理要固定 640 毫秒块、160 毫秒前视、贪心文本解码、Talker 温度 0.8、流匹配 FM8 等配置，再分别跑固定 0.5、固定 0.1 和自适应，对齐 StartOffset 计时边界。作者资源方面，论文说计划公开模型与训练、推理、数据构造代码，提供的 RealSI 链接是第三方基准链接，只能证明论文提到了该基准，不能证明作者已开源。当前是否可用要以实际仓库状态为准，不要把计划发布当成已可下载。

### 一句话总结与还缺的验证

总的来说，S3-S2ST 用语义对齐把整句语料转成增量监督，用固定分块保持频繁决策，用可调门限和播放缓冲在同一模型上换质量与延迟，并在受评流式系统中在 9 对翻译质量上领先、在 RealSI 上展示了有利权衡。它的代价是编码器重算随长度增长、阈值与缓冲规则需按场景调、音色保持并非处处最优。

还缺的验证是多语、长会话、真实网络与设备播放下的延迟，以及人工听感评价。若要在自己数据上用，建议先在 FLEURS 和 RealSI 上复刻固定与自适应两点，再补人工评价和按句延迟分布，而不是只看平均分。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2610.36777v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-29 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-29/)
