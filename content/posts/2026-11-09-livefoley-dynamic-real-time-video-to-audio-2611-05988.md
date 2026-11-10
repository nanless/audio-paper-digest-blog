---
title: "LiveFoley: Dynamic Real-Time Video-to-Audio Generation for Immersive Interactive Worlds"
date: 2026-11-09
draft: false
tags: [视频到声音生成, 自回归模型, 流匹配, 流式处理, 实时处理]
categories: [论文速递]
description: "LiveFoley 针对流式视频生成音频的延迟与对齐矛盾，用尾部滑动窗口保留感受野并用可变步长统一框架与加宽去噪窗口，在 156 毫秒端到端延迟下达到接近离线模型的时序对齐。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.05988"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "LiveFoley：为实时交互视频生成同步声音"
paper_digest_original_title: "LiveFoley: Dynamic Real-Time Video-to-Audio Generation for Immersive Interactive Worlds"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.05988v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.05988v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.05988v1.pdf"
paper_digest_primary_task: "视频到声音生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.video-to-audio","label":"视频到声音生成"},{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"setting","id":"setting.real-time","label":"实时处理"}]
paper_digest_primary_method: "自回归模型"
paper_digest_score: 8.3
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "LiveFoley 针对流式视频生成音频的延迟与对齐矛盾，用尾部滑动窗口保留感受野并用可变步长统一框架与加宽去噪窗口，在 156 毫秒端到端延迟下达到接近离线模型的时序对齐。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yusheng Dai"},{"affiliations":["Monash University Nanjing University ShengShu Technology Tampere University"],"name":"Vladimir Iashin"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Kangdi Wang"},{"affiliations":["Alibaba Token Hub, Alibaba Group Tsinghua University Corresponding author"],"name":"Yuxuan Jiang"},{"affiliations":["Monash University Nanjing University ShengShu Technology Tampere University"],"name":"Ilpo Viertola"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Weiqiang Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qiuhong Ke"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Min Zhao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jianfei Cai"}]
paper_digest_abstract_sha256: "c94edbd24e3e934d30f3e1e74af926ffb369b8a8df93c7bb41f57c20d16a827a"
paper_digest_sidecars: {"citation.bib":{"sha256":"d26f929b1b4144dab15ad9d4ba11db88506a46fce4b280492f4cff832b655d25","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-05988/citation.bib"},"citation.json":{"sha256":"d327c278dc0917d2f3d338a2cc3f3486a3653c94c3cd68beb9a9a9a4ca6b3bfc","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-05988/citation.json"},"citation.ris":{"sha256":"94f1e23e19ce4621ad23e487f5a404d056ed7f322d0674a9c236b4f20d0f8516","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-05988/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"19e1210cbdbec06629ad7dc16bf5cbb0c540eb98e5e229fa654e2efb4a7a0c2c","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-05988/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "c7ca15e648864f75bec8b60bce93b2eaf55ddb5039e501ba4289ad53ff0e8368"
paper_digest_api_reader_plan_sha256: "f182c127742fc45d440dc4b89f74dca7202e6d6c8e6427994e383a7a2bb488c4"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "7bfe4694bf7765ec0375d0d9711f548ffdceabd32cf5c941f3c0c38223b23c58"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "260bd892967757f407302218f83860fe40ab53e5d184b1f128ee7330019eba4f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "255cb48ed360dfc6ba328a0dce85ff2342f4c2739df481139ee11dae904cb554"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "1ec132f891915ab52f486e6860b5219112db4bae481fde3789b1b63958dd5c52"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 LiveFoley：为实时交互视频生成同步声音

> 英文题目：*[LiveFoley: Dynamic Real-Time Video-to-Audio Generation for Immersive Interactive Worlds](https://arxiv.org/abs/2611.05988v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频生成](/audio-paper-digest-blog/papers/?concept=task.audio-generation) → [视频到声音生成](/audio-paper-digest-blog/papers/?concept=task.video-to-audio)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [自回归模型](/audio-paper-digest-blog/papers/?concept=method.autoregressive)；[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [流匹配](/audio-paper-digest-blog/papers/?concept=method.flow-matching)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)；[实时处理](/audio-paper-digest-blog/papers/?concept=setting.real-time)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**8.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Yusheng Dai：机构信息未能在本次解析中与作者逐人可靠绑定
- Vladimir Iashin：Monash University Nanjing University ShengShu Technology Tampere University
- Kangdi Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Yuxuan Jiang：Alibaba Token Hub, Alibaba Group Tsinghua University Corresponding author
- Ilpo Viertola：Monash University Nanjing University ShengShu Technology Tampere University
- Weiqiang Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Qiuhong Ke：机构信息未能在本次解析中与作者逐人可靠绑定
- Min Zhao：机构信息未能在本次解析中与作者逐人可靠绑定
- Jianfei Cai：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

流式视频到声音生成要求从任意到达的像素流连续合成声音，在人察觉延迟前播放，并让撞击、脚步等事件在时间上对齐；论文处理25 fps视频和12.5 Hz音频隐表示，难点是冻结的Synchformer片段编码器需预看未来帧，而因果自回归后端每次只去噪一个音频块。先用尾部滑动窗把窗口尾部锚定到当前帧，只提取严格历史帧并丢弃补齐帧的占位输出，把非因果片段编码器转成流式模块，送入后端时保留完整感受野。再用同步器对齐不同跳步的特征分布，使同一生成后端支持可变延迟模式。最后因果语言模型输出粗粒度隐状态后送入局部流匹配头精修，默认历史模式引入已生成块而不增加延迟，可选未来预热模式用近似条件引入下一块协同去噪。与离线MMAudio-L相比，48 kHz版本在VGGSound测试集上去同步分数为0.48对0.47，前端预看仅0.08 s。与流式基线相比，16 kHz版本分布距离最优，端到端延迟在单张A800上实测156 ms，仍低于动作声音约0.34 s的可察觉阈值。该结论仅在8 s片段评测、默认跳步s=1和历史模式下验证，增大跳步或改用未来预热会增至236 ms以上且在分布距离等多项指标上仍落后离线模型，离线联合去噪的优势在流式约束下尚未补齐。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/dalision/livefoley> — 链接可访问（HTTP 200）

- 第三方资源：<https://dalision.github.io/livefoley-page/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 流式视频生成音频要解决什么输入输出问题

这篇论文研究的是流式视频到音频生成，也就是看着不断到来的像素流，实时合成与之同步的声音。输入是任意外部视觉流，例如游戏引擎渲染画面、增强现实画面或直播摄像头，实验中统一按 25 帧每秒解码。输出是连续波形，论文做了 16 千赫单声道和 48 千赫立体声两个版本，但自回归步调都是 12.5 赫兹，即每 0.08 秒推进一段音频块。

必须保留的信息有两层。一层是语义对应，例如画面是雨就不能配成车流声；另一层是时序对应，例如脚触地瞬间才有脚步声，早了或晚了都会被察觉。论文把第二层看得更重，因为交互场景没有重播对照，用户一旦感到声画错位，沉浸感就断了。为此作者先做了一个无参考的用户实验，测人在自由观看时何时察觉声音落后于画面，结果是动作声约 0.34 秒、语音约 0.49 秒、漫游环境声约 0.85 秒。这组数字成为后文所有延迟设计的预算上限。

与离线生成不同，流式系统不能等整段视频到齐再 1 次性去噪，也不能依赖未来的画面。视觉编码和音频合成必须在上述阈值内联合完成。离线模型可以用全局双向注意力同时打磨所有音频块，而流式模型必须因果地逐块承诺声音，只能靠已看到的帧做决定，这是音质差距的根源。理解这一点，才能明白后文为什么一侧要保视觉感受野，另一侧要给去噪头加宽上下文。

### 已有离线与流式路线卡在哪里

离线视频到音频已经从逐帧的 CLIP、光流特征，演进到分段级的 Synchformer 这类音画同步特征。Synchformer 把视频切成 16 帧一段，用对比学习让音频段特征与视觉段特征对齐，再用小 Transformer 判偏移。MMAudio 等领先离线系统都受益于这种分段特征，对齐明显更好。

流到流式时，这条路线出现延迟与对齐的权衡。V-AURA 沿用 Synchformer，前端前视长达 0.64 秒；SoundReactor 改用逐帧的 DINOv2 特征，前视只需 0.08 秒，但时序对齐大幅下滑。同时期的 WorldSonus 试图用时移对比损失向冻结的 Synchformer 教师对齐，在 100 毫秒块延迟下有所改善，但仍落后离线模型。

生成架构上，离线多用全局双向扩散，1 次去噪全序列。流式则转向连续自回归加局部流匹配头，即一个因果语言模型逐块给出隐状态，再由轻量扩散头在块内细化，避免离散编解码的量化损失。但已有流式系统的局部头每次只孤立去噪一个块，历史只经过语言模型隐状态传递，看不到未来块，因此音质落后。联合音视频生成和声场渲染是另两条线，前者音频与内部视频生成器耦合，不能接外部像素流；后者只做静态环境声的空间衰减，不生成与瞬时动作对应的声音。所以论文把发力点放在视觉前端的前视和音频后端的去噪窗口上。

### 为什么感受野缩小就会丢掉对齐

论文用受控实验把第一个瓶颈讲得很具体。在 V-AURA 主干上，把 Synchformer 的窗口从 4 个 token 缩到 1 个，前视从 0.32 秒降到 0.08 秒，但下游生成的 DeSync 指标明显变差。DeSync 是 Synchformer 预测的音画错位分数，越低表示时序对齐越好。这个现象说明对齐依赖每个分段覆盖的时间上下文，而不是单纯的特征维度。

第二个瓶颈是因果约束下的孤立去噪。离线扩散可以让所有块互相看到，流式自回归扩散的局部头却只能看到当前块的噪声和当前隐状态。训练不稳定、音质细节不足，都与上下文太窄有关。

下面这张图左侧给出 3 类声音的可察觉延迟阈值，右侧给出两种窗口策略在延迟压缩时的对齐变化，是全文延迟预算和前端设计的依据。

> **看图路径：** 1. 先看左图三类声音的阈值柱高与误差线，确认动作声最敏感；2. 再看右图两条线随前视缩短的变化趋势，确认分块方式掉对齐而本方法保持；3. 对照横轴从 0.32 到 0.08 的变化，记住后文步长取值的延迟含义

[![原论文 Figure 1：(a) User study: the minimum audio delay at which participants notice the sound lagging behind the…](https://arxiv.org/html/2611.05988v1/motivation.svg)](https://arxiv.org/html/2611.05988v1/motivation.svg)

*论文图 1。原论文 Figure 1:：“(a) User study: the minimum audio delay at which participants notice the sound lagging behind the video, for action sounds, speech, and ambient sounds in free roaming (mean ± 95%…”。*

左图可见动作声柱最低，语音居中，漫游环境声最高，且误差线表示 95% 置信区间。右图可见传统分块窗口线随前视减小而 DeSync 上升，而尾部滑动窗口线几乎持平。这支持论文的判断：延迟预算因场景而异，且压缩延迟不应以缩小感受野为代价。需要提醒的是，该用户实验只有 6 名参与者，漫游声阈值还是在上限下多次未被察觉的下界估计，不能当作通用心理学常数。

### LiveFoley 的整体数据通路是怎样的

LiveFoley 是一套即插即用的声音引擎，输入是实时像素流，输出是同步波形，中间分 3 段流水。第一段是视觉前端，冻结的 Synchformer 分段编码器经尾部滑动窗口改造，每 0.08 秒输出一个 12.5 赫兹的同步 token。第二段是生成主干，因果语言模型把当前视觉 token 与上一块音频经 LocEnc 压缩后的嵌入拼接融合，得到隐状态，再由 LocDiT 去噪出当前音频隐变量块。第 3 段是因果音频变分自编码器解码，把隐变量块变成可播放波形，3 段在推理时跑在不同线程的异步流水线上。

为适应不同场景，步长可在 1、2、4 之间切换，对应前端前视 0.08、0.16、0.32 秒。统一可变步长框架让同一套权重支持多种延迟模式。后端默认用历史扩展的去噪头，不加后端前视；可选的未来预热版本再加 0.08 秒后端前视换取更好音质。默认配置在单张 A800 上实测端到端 156 毫秒，未来预热版约 236 毫秒，都低于动作声的阈值。

训练数据约 2000 小时、74.5 万片段，包含野外与第一人称两类，评测主结果在标准 VGGSound 测试集 8 秒片段上完成，前端消融则在作者构造的 1485 片段的 VGGSound-Curated 子集上完成，该子集过滤掉旁白、背景音乐和含人脸语音，突出视觉可对齐的声音。

### 尾部滑动窗口如何不重训就把非因果编码器变因果

传统分块窗口把视频切成不重叠的固定块，每块攒满 2w 帧才编码 1 次。w 是窗口内 token 数，前视随 w 线性增长。要降延迟只能减小 w，感受野随之变窄。

尾部滑动窗口反其道而行，固定 w 不变，把窗口尾锚定在当前帧，输入序列写成从历史帧到当前帧的连续段。当序列开头不足时，重复第一帧做填充，使首个输出不必等满一个完整窗口。编码器内部仍是双向注意力，但输入已全是历史，因此无需重训就能因果运行。连续流式时，窗口每来 2s 帧向前滑 1 次，1 次吐出 s 个新的尾部 token。s 取 1、2、4 时，前视对应 0.08、0.16、0.32 秒。降 s 不减 w，所以延迟下降而对齐保留。

下面这张图对比了分块窗口与尾部滑动窗口的取帧与输出方式，以及统一框架如何汇合多步长，是理解前端改造最关键的一张示意图。

> **看图路径：** 1. 沿左面板从上到下看窗口变短时感受野如何被切窄；2. 沿中面板看窗口长度不变而每次输出 token 数减少，前视如何变小；3. 看右面板不同步长分支如何经 Synchronizer 汇成同一版式的 token 流

[![原论文 Figure 2：Streaming visual frontend. Each dot denotes the token at one window position.](https://arxiv.org/html/2611.05988v1/video_encode.svg)](https://arxiv.org/html/2611.05988v1/video_encode.svg)

*论文图 2。原论文 Figure 2:：“Streaming visual frontend. Each dot denotes the token at one window position.”。*

左面板可见分块越短，延迟越小但每块覆盖越窄；中面板可见窗口长度保持 8 个 token 约 0.64 秒，但每次只输出少量 token，前视只与步长有关；右面板可见不同步长分支经 Synchronizer 映射后变成同一版式的 12.5 赫兹 token 流，后端无需知道当前步长。灰色与虚线点只在编码器内提供上下文，其 token 被丢弃，只有黑色点作为新帧的输出，这一点要看清，否则会误以为计算量没有增加。

**分段级编码器 × 尾部滑动窗口：** 分段级编码器指一次看 16 帧左右视频并用双向注意力建模运动的视觉前端，对齐好但要等整段到齐；尾部滑动窗口指把窗口尾固定在当前帧、只用历史帧加首帧填充来凑满窗口的取帧方式，二者搭配让原来的非因果编码器不用重训就能流式运行，既保留完整感受野又把等待时间降到一个步长。

Synchformer 本身的段级对比目标可写作如下形式，其中波浪线表示音频段与视觉段特征，B 为批量大小，温度可学习，对称的视觉到音频项略去不写。该目标是冻结前端的来源，LiveFoley 直接复用其视觉编码器。

\[\mathcal{L}_{\mathrm{AVCLIP}}=-\frac{1}{B}\sum_{i=1}^{B}\log\frac{\exp(\tilde{a}_{i}\cdot\tilde{v}_{i}/\kappa)}{\sum_{j=1}^{B}\exp(\tilde{a}_{i}\cdot\tilde{v}_{j}/\kappa)},\]

需要说明，首帧填充和滑动都会让编码器看到重复或重叠历史，推理计算量随 s 减小而上升，s 为 1 时最密集。这部分代价在统一框架一节用量化对比呈现。

### 统一可变步长框架如何让一个权重支持多种延迟

不同场景容忍的延迟不同，射击或节奏游戏要最小延迟，开放世界漫游则可用较大步长省算力。若每个步长训一个专家模型，部署与切换都很麻烦。论文的做法是训练时 3 个步长按批次等比轮换，让同一套权重学会所有延迟模式，推理时按场景逐段切换。

直接从原始窗口输出切最后 s 个 token 会有分布偏移，因为 1 次取出的 token 数不同。Synchronizer 先对 8 个 token 做位置嵌入与窗内上下文聚合，再切最后 s 个并加上可学习的延迟模式嵌入，输出恒定 12.5 赫兹的 token 流。公式上记为对窗口矩阵经 Synchronizer 映射后取后 s 行再加模式向量，细节由代码实现，论文只给出该切片与相加关系。

\[V_{s}=\operatorname{Synchronizer}(W)[-s:]+e_{\mathrm{mode}},\]

由于前端每滑动 1 次运行 1 次，s 为 4 比 s 为 1 的提取频率低，计算开销相应下降。消融显示去掉 Synchronizer 而直接切片，DeSync 在各步长下约恶化 0.03，且分布距离指标也变差，说明位置与上下文聚合不可省。

**步长 × Synchronizer：** 步长指窗口每次向前滑动多少帧并输出几个新 token，直接决定前端前视等待；Synchronizer 指两层 Transformer 加延迟模式嵌入的映射模块，负责把不同步长下分布漂移的窗口特征对齐到同一隐空间，二者搭配让一个共享后端能在推理时按场景切换延迟与算力模式。

### 自回归主干每一步把什么拼在一起去噪

主干工作在 12.5 赫兹，每步对应一个视觉同步 token，时长 0.08 秒。16 千赫变分自编码器输出 25 赫兹隐变量帧，每 2 帧拼成一个音频块；48 千赫版本输出 50 赫兹，每 4 帧拼成一块，因此语言模型步调一致。LocEnc 把上一块的干净隐变量压缩成单个音频嵌入，与当前视觉 token 经线性投影后按通道拼接，再过一层线性层送入 28 层的 MiniCPM 结构语言模型，得到隐状态。该模型从零训练，推理时带 124 个 token 的滚动键值缓存加 4 个注意力汇点，以支持超过训练长度 9.92 秒的长流。

局部流匹配头 LocDiT 是 12 层 Transformer，负责把噪声块变成干净块。对每个去噪 token，条件向量由隐状态、当前视觉 token 与时间步嵌入拼接而成，再经自适应层归一化注入各块。原有流式工作只用该条件孤立去噪当前块，历史只间接看到，论文称之为独立 LocDiT。

\[c_{i}=\mathrm{Concat}(h_{i},\,v_{i},\,\phi(t)).\]

下面这张图展示左侧主干循环与右侧两种加宽窗口的输入构成，箭头与图例要对照看才能分清干净块与带噪块。

> **看图路径：** 1. 先沿左侧主干看视觉嵌入与音频嵌入如何汇成隐状态；2. 再对比右侧上方历史块作为干净上下文与下方未来块作为带噪预热块的区别；3. 注意下方未来块的条件标注是当前隐状态加未来视觉 token，推理时被丢弃

[![原论文 Figure 3：Continuous autoregressive audio generation backbone.](https://arxiv.org/html/2611.05988v1/audio_generate.png)](https://arxiv.org/html/2611.05988v1/audio_generate.png)

*论文图 3。原论文 Figure 3:：“Continuous autoregressive audio generation backbone.”。*

左侧可见 LocEnc 把上一块干净隐变量变成音频嵌入，与视觉嵌入一起进入长程语言模型，再由独立 LocDiT 去噪当前噪声块。右侧上方把过去两块干净块作为上下文拼入，右侧下方则把当前噪声块与下一块噪声预热块联合去噪，其中未来块的条件写明用当前隐状态加未来视觉 token，且推理时丢弃。虚线表示跨步的自回归回路，不能理解为同一时刻的双向连接。

**因果语言模型 × LocDiT：** 因果语言模型指按 12.5 赫兹逐步融合视觉同步 token 和上一段音频嵌入、给出粗粒度隐状态的自回归主干；LocDiT 指以该隐状态为条件、用双向注意力细化当前音频块内细节的局部流匹配去噪头，二者分工是前者管跨块长程依赖、后者管块内声学细节，组合后实现连续隐变量的逐块生成。

把去噪窗口向过去和未来加宽时各自付出什么代价，可以分开来看。向过去加宽得到 History LocDiT，把已生成的过去两块干净块前置为上下文，双向注意力因此看到更多历史，不引入额外后端前视，是默认配置。信息仍只从过去流向现在。

向未来加宽遇到自回归死锁：下一块的条件依赖下一个隐状态，而下一个隐状态依赖当前块的干净结果，正在去噪时还拿不到。若把自回归速率减半、一步去噪两块，虽能联合去噪，但主干时间分辨率减半，对齐与分布指标都变差，论文称之为低速率对照。

未来预热的做法是用当前隐状态与未来视觉 token 拼出近似条件，让下一块以预热身份加入当前窗口联合去噪。窗内两块双向交互，当前块对准未来声学轨迹，未来块也受益于当前已建立的上下文。训练时两块都计入损失，推理时预热块被丢弃，下一时刻用真实隐状态重新生成。代价是需要未来视觉 token，带来 0.08 秒后端前视，但因前端已很短，总延迟仍在可察觉阈值内。

**History LocDiT × Future-Warmup LocDiT：** History LocDiT 指把已生成的过去干净块作为上下文拼进当前去噪窗口的做法，不增加后端前视；Future-Warmup LocDiT 指用当前隐状态加未来视觉 token 构造近似条件、把下一块也拉进窗口联合去噪、推理时丢弃该预热块的做法，需要 0.08 秒后端前视，二者都是把原来孤立去噪的单块窗口向时间两侧加宽，只是代价与信息流向不同。

### 训练目标如何组织多块的噪声与条件

论文没有训练视觉前端，Synchformer 权重冻结，只训练语言模型与 LocDiT。优化目标是条件整流流目标，期望取自训练数据、自回归步、时间步与噪声，插值轨迹为干净样本与噪声的线性混合，t 为 0 是干净、为 1 是纯噪声。目标集合与历史上下文集合随窗口设计而变，历史版目标为当前块、上下文为前两块干净块，未来预热版目标为当前与下一块、上下文为前一块，同一窗口内目标块共享一个从对数正态采样的 t。

\[\mathcal{L}(\theta)=\mathbb{E}\Big[\sum_{k\in\mathcal{T}_{i}}\big\|u_{\theta}\big(x_{\mathcal{T}_{i}}^{t};c_{\mathcal{T}_{i}},x_{\mathcal{H}_{i}}^{0}\big)_{k}-\big(\epsilon_{k}-x_{k}^{0}\big)\big\|_{2}^{2}\Big],\]

为缓解长序列的暴露偏差，送入 LocEnc 的历史隐变量块在训练时以 0.5 概率混入方差保持的高斯噪声，混合系数在 0 到 0.5 均匀采样，LocDiT 的历史与目标保持干净。推理时则对生成块混入固定 0.15 的噪声再送入 LocEnc，并用引导尺度 6 与 20 步欧拉采样。文本扩展版用冻结的 Flan-T5 编码器经交叉注意力注入文本，训练时混合有文本与无文本样本，使同一检查点支持纯视频与视频加文本两种模式。训练超参数为 AdamW、学习率 1e-4 经 1,000 步预热、梯度裁剪 1.0、批量 64 片段、在 16 张 A800 上 200,000 步，键值缓存不存旋转位置编码、按相对距离动态加，因此逐出最老条目无需重算。

### 数据子集与指标各自在测什么

训练集约 2042 小时，SoundAtlas 的 VGGSound 部分 14.6 万片段 401 小时、AudioSet 部分 34 万片段 929 小时，加上 EPIC-Sounds 4.9 万片段 134 小时与 Ego4D-Sounds 21 万片段 578 小时，后两类按 ImageBind 音画相似度保留高对应片段。所有视频按 25 帧每秒解码至 10 秒，训练裁至最多 9.92 秒即 124 个自回归步。评测时除 WorldSonus 按官方用 30 帧每秒外，其余统一 25 帧每秒。

主结果在标准 VGGSound 测试集上，用 av-benchmark 工具测 8 秒片段。分布匹配用 PANNs 与 PaSST 特征空间的 Frechet 距离即生成与真值的特征分布差异，以及 PANNs 预测的 KL 散度，越低越好；音质用 Inception Score 与 Audiobox 美学的生产质量分，越高越好；语义对齐用 ImageBind 分数越高越好，时序对齐用 DeSync 越低越好。流式系统另报前端前视，与硬件无关；LiveFoley 另报端到端延迟，为实测墙钟。

由于 VGGSound 含大量画外音与背景音乐，会淹没前端差异，作者另建 VGGSound-Curated 子集 1485 片段，候选来自 VGGSound-Sparse 与 VisualSound 且 ImageBind 相似度高于 0.3，再去掉语音与可见人脸，只保留测试集片段，专门做前端与去噪头消融。主观评测选 16 个 10 秒片段，一半野外一半游戏引擎画面，响度归一到负 23 LUFS，6 名参与者在匿名随机顺序下按 5 分制打质量分与对齐分。

**前端前视 × 端到端延迟：** 前端前视指为凑齐编码器一次输入而必须缓冲的视频时长，是与硬件无关的算法等待；端到端延迟指从第一帧到达至输出第一段可播放波形的实测墙钟时间，包含前视等待加编码、语言模型、去噪和声码器解码等计算耗时，前者决定理论下限，后者决定实际可玩性。

### 文本提示带来什么增益又付出什么代价

这里比较的问题是：在相同 VGGSound 测试与相同评测流程下，加入文本提示后分布匹配与对齐如何变化，LiveFoley 与同期流式系统相比如何。公平条件是同一检查点同时支持纯视频与视频加文本两种模式，文本来自每片段提示，语义引导不占用额外延迟预算。指标方向为分布距离与 DeSync 越低越好，其余越高越好。

| Method | FDPANNs\mathrm{\textbf{FD}_{\textbf{PANNs}}}↓ | FDPaSST\mathrm{\textbf{FD}_{\textbf{PaSST}}}↓ | KLPANNs\mathrm{\textbf{KL}_{\textbf{PANNs}}}↓ | IS↑ | PQ↑ | DeSync↓ | IB↑ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| WorldSonus [10] w/o text | 16.32 | 197.68 | 2.54 | 8.73 | 6.11 | 0.67 | 0.26 |
| WorldSonus [10] w/ text | 9.96 | 193.75 | 1.51 | 9.89 | 6.19 | 0.76 | 0.26 |
| LiveFoley-16k w/o text (ours) | 9.61 | 90.54 | 2.47 | 11.36 | 6.44 | 0.47 | 0.29 |
| LiveFoley-16k w/ text (ours) | 7.30 | 82.51 | 1.58 | 11.88 | 6.36 | 0.50 | 0.30 |
| LiveFoley-48k w/o text (ours) | 10.16 | 129.48 | 2.45 | 10.95 | 6.39 | 0.48 | 0.28 |
| LiveFoley-48k w/ text (ours) | 7.34 | 122.86 | 1.61 | 11.21 | 6.38 | 0.49 | 0.29 |

表中可见 LiveFoley 在纯视频与加文本两种模式下都明显领先同期系统，文本主要改善分布匹配，例如 16 千赫版本分布距离大幅下降，而 DeSync 轻微上升。原文指出文本让声音更稳定连贯，但时序对齐略有削弱，这与直觉一致：文本提供全局语义，却不携带帧级时刻信息。限制是该表所用检查点与主系统表训练方式不同，无文本分数不能直接与主结果互换，且文本依赖外部字幕质量。

下面是 6 人听测的质量与对齐平均意见分，左侧为音质，右侧为对齐，虚线分隔离线与在线，可与客观指标交叉验证。

> **看图路径：** 1. 先比较左侧质量分中在线各柱子的高低；2. 再比较右侧对齐分中 LiveFoley 与离线 MMAudio-L 的距离；3. 注意 AudioX 在右侧对齐分最低，与其时序错位指标一致

[![原论文 Figure 4：Subjective evaluation of LiveFoley against offline and online baselines: mean opinion scores for…](https://arxiv.org/html/2611.05988v1/subjective_mos.svg)](https://arxiv.org/html/2611.05988v1/subjective_mos.svg)

*论文图 4。原论文 Figure 4:：“Subjective evaluation of LiveFoley against offline and online baselines: mean opinion scores for audio quality (MOS-Q, left) and audio-visual alignment (MOS-A, right).”。*

图中可见在线组中 LiveFoley 质量与对齐均为最高，对齐接近离线 MMAudio-L；MMAudio 在线版客观分布指标尚可但听感有明显拼接缝，AudioX 质量尚可但对齐最低，与其 DeSync 偏高一致。主观样本仅 16 片段、6 名评分者，且游戏引擎片段来自网络视频，结论只在该评测分布内成立，不能推广到所有游戏与直播场景。

### 视觉前端消融是否公平地孤立了编码器

这里比较的问题是：只换视觉编码器、其余用同一 V-AURA 主干与解码和训练预算时，帧级与分段级编码器的延迟与对齐如何权衡。测试在 VGGSound-Curated 上进行，指标方向为分布距离与 DeSync 越低越好。

| Type | Visual encoder | 𝝉\boldsymbol{\tau} (s) | FDPANNs\mathrm{\textbf{FD}_{\textbf{PANNs}}}↓ | FDPaSST\mathrm{\textbf{FD}_{\textbf{PaSST}}}↓ | KLPANNs\mathrm{\textbf{KL}_{\textbf{PANNs}}}↓ | DeSync↓ |
| --- | --- | --- | --- | --- | --- | --- |
| Frame | SigLIP2 | 0.08 | 27.92 | 267.44 | 1.91 | 1.14 |
| Frame | DINOv2 | 0.08 | 28.25 | 278.18 | 2.10 | 1.10 |
| Segment | VideoMAE-V2 | 0.64 | 30.37 | 281.62 | 2.36 | 0.88 |
| Segment | Synchformer (ours) | 0.08 | 28.10 | 263.04 | 2.01 | 0.61 |

表中帧级编码器前视虽小但 DeSync 远大于 1.0，即使语义强的编码器也救不了时序；分段级 VideoMAE-V2 对齐较好但前视高达 0.64 秒；经尾部滑动窗口改造的 Synchformer 以 0.08 秒前视拿到最好的 DeSync，且分布距离最优或次优。原文还报告分块窗口前视从 0.32 秒压到 0.08 秒时 DeSync 明显恶化，而尾部窗口几乎不变，证明压缩延迟的方式不同是关键。限制是该消融固定在 V-AURA 主干上，结论能否搬到其他主干需另验，且筛选后的子集比原始分布更易对齐。

### 去噪窗口向过去与未来加宽各带来什么变化

这里比较的问题是：在同一主干下，4 种去噪窗口的分布、质量与对齐如何变化。条件是 VGGSound-Curated、16 千赫模型、步长 2，指标方向为分布距离与 DeSync 越低越好，其余越高越好。

| LocDiT window | FDPANNs\mathrm{\textbf{FD}_{\textbf{PANNs}}}↓ | FDPaSST\mathrm{\textbf{FD}_{\textbf{PaSST}}}↓ | KLPANNs\mathrm{\textbf{KL}_{\textbf{PANNs}}}↓ | IS↑ | DeSync↓ | IB↑ |
| --- | --- | --- | --- | --- | --- | --- |
| Independent LocDiT | 21.08 | 154.62 | 1.94 | 12.01 | 0.47 | 0.31 |
| Low-Rate LocDiT | 18.90 | 180.52 | 2.01 | 10.38 | 0.54 | 0.30 |
| History LocDiT | 17.55 | 158.04 | 1.92 | 12.00 | 0.47 | 0.32 |
| Future-Warmup LocDiT | 16.88 | 143.92 | 1.86 | 12.13 | 0.46 | 0.32 |

表中向过去加宽明显改善分布距离并小幅提升语义对齐，而质量与时序基本持平；向未来加宽在同等窗口长度下进一步拿到最好的分布与质量分，并因多看到一个未来视觉 token 而小幅改善 DeSync。未胜出的低速率对照分布与对齐都差于独立版，说明把主干速率减半得不偿失。代价是未来预热需 0.08 秒后端前视，默认仍用无后端前视的历史版。该消融未报告多次随机种子的方差，小幅差异需谨慎解读。

### 统一多步长是否真能一个权重顶多个专家

这里比较的问题是：在步长 1、2、4 对应前视 0.08、0.16、0.32 秒下，统一模型能否匹配各步长独立专家，且去掉 Synchronizer 会怎样。条件同为 VGGSound-Curated，指标方向不变。

| 𝒔\boldsymbol{s} (𝝉\boldsymbol{\tau}) | Model | FDPANNs\mathrm{\textbf{FD}_{\textbf{PANNs}}}↓ | FDPaSST\mathrm{\textbf{FD}_{\textbf{PaSST}}}↓ | KLPANNs\mathrm{\textbf{KL}_{\textbf{PANNs}}}↓ | DeSync↓ | IB↑ |
| --- | --- | --- | --- | --- | --- | --- |
| 1 (0.08) | Expert | 17.07 | 140.22 | 1.78 | 0.47 | 0.33 |
| 1 (0.08) | Unified (ours) | 16.94 | 145.02 | 1.90 | 0.47 | 0.32 |
| 1 (0.08) | w/o Synchronizer | 17.31 | 147.76 | 1.88 | 0.50 | 0.32 |
| 2 (0.16) | Expert | 16.36 | 139.88 | 1.83 | 0.45 | 0.32 |
| 2 (0.16) | Unified (ours) | 16.88 | 143.92 | 1.86 | 0.46 | 0.32 |
| 2 (0.16) | w/o Synchronizer | 16.58 | 146.44 | 1.90 | 0.49 | 0.32 |
| 4 (0.32) | Expert | 17.04 | 143.38 | 1.83 | 0.45 | 0.32 |
| 4 (0.32) | Unified (ours) | 17.11 | 143.33 | 1.82 | 0.45 | 0.32 |
| 4 (0.32) | w/o Synchronizer | 16.79 | 146.15 | 1.87 | 0.47 | 0.31 |

表中统一模型在对齐上基本打平专家，分布指标仅轻微损失，因此可在推理时按场景动态切换步长。前端每滑动 1 次运行 1 次，步长 4 比步长 1 省约 4 倍提取开销。去掉 Synchronizer 而直接切片时，各步长 DeSync 约恶化 0.03 且分布距离上升，证实其位置嵌入与窗内聚合的必要性。限制是训练时 3 步长等比轮换，若实际部署长期停留在单一延迟模式，是否仍最优未经验证；且大步长省的是前端提取，语言模型与去噪的逐块开销并未同比下降。

### 哪些结论超出证据就不再成立

首先是延迟的普适性。156 毫秒是在单张 A800、默认历史版步长 1 下用实时模拟器测得，包含 80 毫秒前视与计算加流水线开销。换显卡、换分辨率或打开未来预热加 0.08 秒后，总延迟需重测，不能直接套用 236 毫秒。步长 2、4 的延迟是算法前视叠加推算，假设每块计算不变，实际吞吐可能不同。

其次是音质差距。主结果显示流式在分布与听感质量上仍落后离线，未来预热与文本提示能缩小但不能消除，且文本版会轻微削弱时序对齐。这意味着对音质要求极高的离线内容生产，仍应选离线模型。

第三是评测分布。前端消融依赖精心筛选的对齐子集，主观评测只有 16 片段 6 人，阈值实验也只有 6 人。把动作阈值当作所有动作的硬阈值，或把游戏引擎片段的结论推到直播与增强现实，是夸大。广播标准的 125 毫秒可察觉与 185 毫秒可接受是在有参考对照下测得，与本文无参考自然观看测得的量不同，不可直接比较大小判优劣。

### 要复现第一步该准备什么

第一步是按论文附录准备数据与冻结前端。视频统一解码到 25 帧每秒，训练裁到 9.92 秒，评测用 8 秒；下载官方 Synchformer 检查点并冻结，只用其分段对比视觉编码器。音频变分自编码器先按非因果配方预训，再把卷积换成因果并微调，16 千赫与 48 千赫分别对应 25 赫兹 64 维与 50 赫兹 64 维隐变量，块大小 2 与 4 以对齐 12.5 赫兹步调。

第二步是实现尾部滑动窗口与 Synchronizer。窗口固定 8 个 token 约 0.64 秒，步长 1、2、4 对应每次输出 1、2、4 个尾部 token，不足历史时重复首帧填充。Synchronizer 用两层 Transformer 加模式嵌入，输出恒定 12.5 赫兹 token 流，训练时 3 步长等比轮换。

第 3 步是训练主干与评测。语言模型 28 层 MiniCPM 从零训练，LocEnc 与 LocDiT 各 12 层，批量 64 在 16 卡上 200,000 步，历史块噪声混合与推理固定 0.15、引导 6、20 步欧拉都需照搬。评测用 av-benchmark 算分布、质量与对齐指标，并用实时模拟器按 25 帧释放测端到端。缺失的细节是长流滚动缓存与注意力汇点的调参、文本版的字幕来源与混合比，若复现文本扩展，需回到 SoundAtlas 字幕与 Flan-T5 配置核对。

最后是开源与可运行的区别。作者仓库当前可用、项目页可访问，但这只证明代码与演示页存在，不等于权重已公开、环境可一键复现或系统已产品化，复现前需核对仓库文档的完整度。

### 什么时候值得试 LiveFoley，还缺哪项验证

当输入是外部实时像素流、且需要动作级同步音效时值得试，例如游戏引擎脚步、打击与环境切换。场景延迟敏感就用步长 1 加历史版，算力紧张的漫游场景可切步长 2 或 4；若还有 0.08 秒余量且更看重音质，再开未来预热。纯离线短片或对音质上限要求极高时，离线模型仍是更稳的选择。

复现的第一步是先跑通冻结 Synchformer 加尾部滑动窗口的前端，确认 0.08 秒前视下 DeSync 确实不随步长恶化，再接主干。还需要补的验证有三项：一是在目标硬件与分辨率下重测端到端，而非引用 A800 数字；二是在自有场景视频上测对齐与不良率，而非只看 VGGSound；三是多次种子下方差与长流稳定性的测试，因为原文未报告方差，小幅领先可能是噪声。

总体看，论文把延迟与对齐的矛盾拆成感受野与步长的解耦，把音质差距拆成去噪窗口的加宽，用可测的阈值与消融把每个选择的代价摆出来。读完应能复述：尾部锚定保感受野、Synchronizer 统一多步长、历史扩展零代价提质、未来预热用小前视换更好联合去噪，以及所有结论只在给定数据、硬件与小样本主观条件下成立。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2611.05988v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-09 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-09/)
