---
title: "Guidance at Pure Noise Erodes Speaker Similarity in Few-Step Token-Conditioned Flow-Matching TTS"
date: 2026-11-12
draft: false
tags: [文本到语音, 流匹配, 语音克隆, 高效推理]
categories: [论文速递]
description: "两步流匹配声码器在纯噪声第一步加分类器无关引导会产生与首步长度成正比的整体平移并保留到输出，跳过该步引导的 FSU 与中点变体 FSU-Mid 用 3 次网络计算恢复大部分说话人相似度且不明显抬高词错误率。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.11179"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "纯噪声上加引导为何在两步语音合成里丢掉音色"
paper_digest_original_title: "Guidance at Pure Noise Erodes Speaker Similarity in Few-Step Token-Conditioned Flow-Matching TTS"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.11179v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.11179v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.11179v1.pdf"
paper_digest_primary_task: "文本到语音"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.tts","label":"文本到语音"},{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"task","id":"task.voice-cloning","label":"语音克隆"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "流匹配"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "两步流匹配声码器在纯噪声第一步加分类器无关引导会产生与首步长度成正比的整体平移并保留到输出，跳过该步引导的 FSU 与中点变体 FSU-Mid 用 3 次网络计算恢复大部分说话人相似度且不明显抬高词错误率。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jaeho Lee"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Han-Lim Choi"}]
paper_digest_abstract_sha256: "af431b4534ee17a7cd38f828c7f0c38eb91fd5204705bde4e7e1eb76a8acf020"
paper_digest_sidecars: {"citation.bib":{"sha256":"ed46f274d1337c10e4fbefeaf4cb64ae3ad1f23ed6698177a9e3d1da0042e0c2","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11179/citation.bib"},"citation.json":{"sha256":"b5c5e618148dac17db2df9380cb90989884b88c3161a571f8cb1cfdc48a361e2","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11179/citation.json"},"citation.ris":{"sha256":"99efa38bcd3013562ecde454430675b4b5794109f44117f4982d1e03c4e59994","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11179/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"7034d4c22a7205d8d46866a563cfb08e0bf46d9b651f5c67e3f59f91446b584e","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11179/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "9d93e982897ea477176916f7c36fa991d04362ca20da1cc02a13ae9217ae6034"
paper_digest_api_reader_plan_sha256: "3e9662c3619d9c494b8c6d2b70a1160fd8bd095f21070f999e61a719d995a3d2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "1bfc2f726de8d255c91d0e5ec5ede371d6a51aab51f54bf27b124558f927bf4e"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "21218adcbefb8278680e4c4fb4717152e784ff678ad5125d1d5af3afea7373df"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "9266857a3b87f2ab0eb5ce7ddef5048b7989503ab243ca6b8de3948c217e382c"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "e68d7ee03c34e88f9148ebfcf8b148db280b634eb90709cad4c8d1071543578f"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 纯噪声上加引导为何在两步语音合成里丢掉音色

> 英文题目：*[Guidance at Pure Noise Erodes Speaker Similarity in Few-Step Token-Conditioned Flow-Matching TTS](https://arxiv.org/abs/2611.11179v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [文本到语音](/audio-paper-digest-blog/papers/?concept=task.tts)；[语音克隆](/audio-paper-digest-blog/papers/?concept=task.voice-cloning)
- **研究方法**：[生成模型](/audio-paper-digest-blog/papers/?concept=method.generative) → [流匹配](/audio-paper-digest-blog/papers/?concept=method.flow-matching)
- **研究重点**：[高效推理](/audio-paper-digest-blog/papers/?concept=research_focus.efficiency)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Jaeho Lee：机构信息未能在本次解析中与作者逐人可靠绑定
- Han-Lim Choi：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

零样本语音合成先由语言模型输出离散语音口令标记，再由流匹配解码器结合说话人提示合成梅尔频谱图，少到两步欧拉求解时词错率不变而说话人相似度下降约一到六点。困难在于纯噪声起点不携带输出信息，网络只能返回给定口令标记与提示下的条件均值，分类器无关引导把全部轨迹沿同一方向推出均值之外，后续步骤不能消除。论文推导第一步位移与步长成正比，先让首步不引导采样输出无偏移的中间状态，再把该状态送入后续步骤只用条件速度求解，最后用中点变体把两步欧拉换成一次中点步并在中间点恢复引导。与保留首步引导的已有调度相比，该做法去除了首步引导项而保留有用引导。在Seed-TTS-eval英文集上，CosyVoice 2说话人相似度由两步官方引导的68.86恢复到中点变体的74.87，高于十步教师的74.70，网络函数求值由20次降到3次。结论适用于口令标记条件且条件均值离散度小于引导幅度的解码器，文本条件解码器首步仍需建立对齐，蒸馏模型与图像视频生成器尚未验证。原文披露了流式首包延迟与吞吐测量。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/16jhlee/FSU> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 零样本合成要同时保住说什么和像谁

本文任务是零样本语音合成。输入是一段目标文本对应的语音 Token 序列加上一小段参考人的语音提示，输出是梅尔频谱图再经声码器变成波形。必须保留的信息有两类，一是 Token 决定的发音内容和节奏，二是提示决定的音色。评价也对应这两类，内容用词错误率衡量，中文用字错误率，音色用合成与提示的说话人嵌入余弦相似乘 100 得到的相似度衡量。

当前主流结构分两段。第一段是自回归语言模型，把文本变成离散语音 Token。第二段是流匹配解码器，把噪声逐步推向符合 Token 和说话人条件的梅尔频谱图。本文只改第二段的采样器，不改语言模型和声码器。所有比较都固定同一组 Token、时长和噪声种子，配对进行，这样相似度和词错误率的变化才能归因于解码器采样。

**语音 Token × 说话人提示 × 梅尔频谱图 × 流匹配解码器：** 语音 Token 固定说什么内容和节奏，说话人提示固定像谁，梅尔频谱图是二者要共同生成的时频中间表示，流匹配解码器负责把高斯噪声沿学到的速度场推向同时符合 Token 和提示的梅尔频谱图。

### 已有加速路线为何都留下相似度缺口

官方解码器一般跑 10 步以上，每步引导要算条件和无条件两次网络，因此解码器在并发请求下占大量显卡时间。生产系统把它压到 2 到 4 次网络计算，常用蒸馏实现。几乎所有这类系统都报告相似度掉一到六点而词错误率基本不变，并把这当作加速代价接受下来。

图像生成里早有人发现限制引导区间、降低早期权重、重缩放或替换无条件分支能改善质量，语音里也有随时间改变引导的规则。但这些工作多在五步到上百步解释模式丢失或范数增长，没有单独隔离从纯噪声出发的第一步，也没有把效应与第一步长度和无条件分支的擦除内容联系起来，更没有解释为何语音 Token 条件解码器掉的是音色而文本条件解码器掉的是对齐。

### 两步时掉的音色来自哪里

论文把步数从 10 步逐步减到两步做对照。CosyVoice 2 在 4 步只掉 0.5 点相似度，三步掉 1.4 点，两步掉 5.8 点，IndexTTS-2 在 4 步掉 2.9 点、两步掉 6.2 点，而词错误率始终在 1.9 到 2.7% 之间。因为 Token 已固定内容和节奏，剩下的自由度主要是音色，所以损失集中在相似度上。

关键对照是只关第一步引导的采样器。全部关掉引导并不能挽回损失，各步数下仍比教师低三到六点，说明引导本身仍需要。只关第一步引导则在两步时把 CosyVoice 2 从 68.5 提到 73.7，把 IndexTTS-2 从 70.8 提到 74.2。这指向损失既不是引导本身也不是步数太少，而是从纯噪声出发的第一步上的引导。

### 从噪声到梅尔频谱图要算什么

流匹配把时间记为 0 到 1，0 是噪声，1 是数据，直线路径上的状态是目标梅尔频谱图与噪声的加权组合。网络学习的是条件速度，即在当前状态下目标减噪声的条件期望，采样就是从噪声出发沿速度积分到 1。实际用欧拉离散化，每步按当前速度走一段直线距离。

引导在此基础上多算一路无条件速度。无条件分支通过擦除部分条件得到，擦除 Token、说话人部分或提示梅尔的不同组合对应不同分支。两路速度之差乘以权重再加回条件速度，就得到实际使用的更新方向。代价按网络计算次数计，引导一步算两次，无引导一步算一次。

### 引导公式与无条件分支的差别

条件速度记为给定 Token 和说话人时的速度，无条件速度记为擦除后条件的速度，二者之差就是引导增量。权重在 CosyVoice 2、三代和 GLM-TTS 中取 0.7。另一套写法把系数记为引导尺度，它等于权重加一，本文统一换算成权重比较。

\[\tilde{u}_{t}=u^{c}_{t}+w\,(u^{c}_{t}-u^{\emptyset}_{t}),\]

上式说明实际速度等于条件速度加上权重乘以条件与无条件之差。全部置空分支同时擦除 Token、说话人嵌入和提示梅尔，说话人置空只擦说话人部分，Token 置空只擦 Token。文本条件解码器则用文本置空分支，擦文本保留语音提示。这个擦除选择决定引导向量的大小，是后文区分 Token 条件与文本条件的关键。

**条件速度 × 无条件分支 × 分类器无关引导：** 条件速度是给定全部条件时指向目标语音的速度估计，无条件分支是擦除部分条件后得到的另一路速度估计，分类器无关引导把二者之差按权重加回条件速度，用来在采样时放大条件的影响。

### 纯噪声第一步为何只能整体平移

第一步起点是与输出独立的纯噪声，网络在该点只能返回按条件平均的输出。条件均值与无条件均值之差对所有噪声种子都相同，因此引导给每条轨迹加上同一个向量。分布整体被搬移，形状不变，这是位移而非模糊。

\[z^{w_{1}}_{t_{1}}(\epsilon)=z^{0}_{t_{1}}(\epsilon)+t_{1}w_{1}g_{c}\]

上式说明有引导的第一步状态等于无引导状态加上第一步长度乘权重再乘引导方向。对条件路径的均方距离可以闭式写出，分为平均项和引导项，引导项在权重为零时恰好消失，正负权重都会增大距离。

\[D(w_{1})=t_{1}\sqrt{r_{c}^{2}+w_{1}^{2}\|g_{c}\|^{2}}.\]

位移大小等于权重绝对值乘引导向量范数再乘第一步长度。在余弦网格下两步时第一步长约 0.29，10 步时约 0.01，同样权重下两步的位移约大 25 倍，这解释了损失只在极少步出现。

\[E_{1}=|w_{1}|\,\|g_{c}\|\,\Delta t_{1},\]

**条件均值 × 引导方向 × 首次平移：** 条件均值是纯噪声下网络只能输出的按条件平均的梅尔频谱图，引导方向是条件均值减去无条件均值的向量，首次平移指第一步引导把所有轨迹沿该方向整体搬移一段距离而不改变分布形状。

### FSU 如何决定哪些步不加引导

既然引导项在首步权重为零时消失，最直接的办法就是首步不加引导。FSU 做法是对起始时间低于阈值的每一步只算条件网络，高于阈值才用引导公式。不需要训练，每跳过一路就省一次网络计算。

阈值取 0.1，依据是沿教师轨迹测得的引导幅度到 0.1 已降到噪声处的三分之一左右，四台解码器一致。规则看的是步的起点时间，因此免引导步数随网格而定。两步时无论余弦还是均匀网格都是第一步免引导，4 步余弦网格则是前两步免引导，10 步则是前三步免引导。斜坡权重在 0.2 内线性爬升的结果与该阈值在种子噪声内一致。

FSU-Mid 把两次欧拉换成一次中点步，先在 0 时刻无引导算条件速度走半步到 0.5，再在 0.5 用引导公式算速度走完整一步。同样是 3 次网络计算，比官方两步引导的 4 次少一次。分工是 FSU 负责去掉首步位移，中点格式负责减小大步长截断误差。论文建议截断误差小的余弦网格用 FSU，截断误差大的均匀网格用 FSU-Mid。

**FSU × FSU-Mid × 截断误差：** FSU 只把噪声主导的早期步骤改为无引导以去掉首次平移，FSU-Mid 在此基础上把两步欧拉换成一次中点步以减小大步长离散误差，截断误差指步数太少时数值积分偏离真实轨迹的部分，是 FSU-Mid 要额外处理的对象。

### 没有训练时实际执行了什么计算

本研究没有训练任何模型，全部实验用公开权重，只换采样器。实际计算是推理时对同 1 Token、同一提示和同一噪声种子，分别跑教师步数、官方少步、FSU 和 FSU-Mid，再比较输出梅尔频谱图经同一声码器和同一说话人编码器得到的相似度。无训练意味着不能把结论推广到蒸馏学生模型，论文把蒸馏 Token 条件模型的验证留给未来，因为当时没有公开权重。

复现时也不需要调参。阈值 0.1 来自引导幅度曲线而非对结果调优，在三台解码器 4 个步数共十二格中与最优值差距在 0.1 相似度内。负的首步权重会向无条件均值外推，梅尔距离对称但相似度更差，因此不推荐。一步时首步就是全轨迹，官方引导保留在该步。

### 在哪些解码器和数据上比较

分析覆盖四台 Token 条件解码器，对照用两台文本条件解码器。教师步数是各官方默认步数，CosyVoice 2、三代和 GLM-TTS 为 10 步，IndexTTS-2 为 25 步，F5-TTS 与 ZipVoice 分别用自带非均匀网格。无条件分支按官方实现区分，GLM-TTS 官方是说话人置空，其余 Token 条件多为全置空。下表说明解码器条件、网格、教师步数与分支，这是后文分支对比的公平基础，读表时注意条件列区分 Token 与文本输入，分支列说明无条件分支擦除了什么。

| Decoder | Condition | Steps | Uncond. branch |
| --- | --- | --- | --- |
| CosyVoice 2 [11] | tokens | 10 | all-null |
| CosyVoice 3 [44] | tokens | 10 | all-null |
| IndexTTS-2 [12] | tokens | 25 | all-null |
| GLM-TTS [13] | tokens | 10 | speaker-null |

上表之后评价集是 Seed-TTS 的英文、中文与难例集加 LibriSpeech-PC，分析用 300 加 300 加 100 的固定子集。相似度用 ERes2Net，内容用 Seed-TTS 的识别器，自然度用 5 个客观预测器。种子噪声指仅换噪声种子带来的 utterance 级标准差，相似度约为 0.42，小于它的差异视为种子噪声内。所有比较配对同一语言模型 Token、长度和种子。

**说话人相似度 × 词错误率 × 自然度预测分：** 说话人相似度衡量合成音色与提示音色的余弦相似，词错误率衡量内容是否读对，自然度预测分用客观模型估计听感，三者分工是音色、内容、可听性各看一个指标，避免只看音色掩盖对齐和音质退化。

### 延迟不变下相似度回升到哪里

先看延迟与相似度的权衡。横轴是官方流式管线首包延迟，单位毫秒，纵轴是相似度，虚线是 10 步教师，两步官方引导在同一延迟下明显偏低，FSU 与 FSU-Mid 在几乎同一延迟回到教师附近。官方实现把 2 分支打成一批计算，去掉一路省计算量但壁钟时间几乎不变，因此这是同延迟下的质量提升。读图时先确认横轴单位是毫秒、纵轴是相似度，再比较空心方块与虚线的落差，最后看实心方块与菱形的回升位置。

> **看图路径：** 1. 先看横轴首包延迟与纵轴相似度的含义；2. 再比较十步教师虚线与两步官方引导空心方块的落差；3. 最后看 FSU 方块与 FSU-Mid 菱形在同一延迟下回升到哪里

[![原论文 Fig. 1：First-packet latency and SIM on the official CosyVoice 2 streaming pipeline (test-en, 50 requests).](https://arxiv.org/html/2611.11179v1/fig/fig0_latency_sim.png)](https://arxiv.org/html/2611.11179v1/fig/fig0_latency_sim.png)

*论文图 1。原论文 Fig. 1:：“First-packet latency and SIM on the official CosyVoice 2 streaming pipeline (test-en, 50 requests).”。*

上图可见两步官方空心方块与 FSU 实心方块之间的红色箭头就是本文要解释的缺口，FSU-Mid 菱形进一步贴住虚线。横向误差条是 50 次请求的波动，纵向差距远大于种子噪声，不能用随机性解释。官方两步把解码器占比从 37.7% 降到 19.4%，首包缩短约 27%，FSU 保持同一延迟而抬高相似度。

下表比较已发表的时变引导规则在两步同协议下的恢复率。比较问题是谁在相同两步预算下恢复更多教师相似度，公平条件是同一四台解码器、同一分析子集与同一超参数，指标是恢复率越高越好，崩溃记为相似度低于 60 或词错误率高于 30%。

| Method | NFE | CosyVoice 2 | CosyVoice 3 | IndexTTS-2 | GLM-TTS | Mean | ΔUTMOS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Official CFG | 4 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 | – |
| Guidance interval [24] | 3 | 88 / 85 | 91 / 82 | 55 / 57 | 78 / 69 | 76 | +0.13 |
| Selective-CFG (default) [35] | 4 | 4 / 16 | 2 / 6 | −-9 / −-9 | 2 / −-6 | 1 | −-0.05 |
| Selective-CFG (input-text) [35] | 4 | 85 / 86 | 70 / 56 | 52 / 51 | 63 / 52 | 64 | −-0.06 |
| CFG-Zero∗ scale [27] | 4 | 9 / 5 | 3 / −-2 | 8 / 2 | −-5 / −-3 | 2 | +0.04 |
| CFG-Zero∗ zero-init [27] | 2 | coll. / coll. | coll. / coll. | coll. / coll. | coll. / coll. | coll. | −-2.05 |
| TV-CFG (released) [25] | 4 | coll. / coll. | coll. / coll. | coll. / coll. | coll. / coll. | coll. | −-2.12 |
| TV-CFG (corrected) [25] | 4 | 74 / 65 | 73 / 71 | 82 / 72 | 61 / 56 | 69 | +0.01 |
| TV-CFG step-up [25] | 4 | 26 / 18 | −-8 / 16 | −-44 / 3 | −-15 / −-8 | −-1 | −-0.28 |
| MAMBO-G [28] | 4 | 70 / 65 | 73 / 66 | 36 / 39 | 58 / 46 | 57 | +0.25 |
| Terminal-fitted repair [41] | 4 | 35 / 32 | 30 / 32 | 2 / 22 | −-11 / −-28 | 14 | +0.15 |
| JRR-CFG [36] | 8 | −-18 / −-8 | −-17 / −-17 | −-7 / 0 | −-17 / −-2 | −-11 | −-0.34 |
| Prompt-consistency [23] | 4 | 14 / 13 | 0 / 2 | n/a / n/a | −-9 / −-6 | 2 | +0.01 |
| FSU (ours) | 3 | 88 / 85 | 91 / 82 | 55 / 57 | 78 / 69 | 76 | +0.13 |
| FSU-Mid (ours) | 3 | 104 / 109 | 99 / 96 | 77 / 79 | 112 / 123 | 100 | −-0.10 |

上表显示 FSU 平均约 76%，与高噪声端截断的引导区间规则在两步重合，修正后的时变规则平均约 69%，FSU-Mid 平均约 100% 且在八格中七格最高。保留首步引导最强的规则平均只有约 64%，其余大多不超过 16%。两个已发布实现在所有解码器上崩溃，加倍计算的规则反而低于官方基线。终点修复规则虽也在零处但因改了最后一步只有 32 到 35%，是唯一的例外。

### 恢复率为何随首步残留引导单调下滑

把恢复率对首步残留引导量作散点，可以分离总量与首步的贡献。横轴是首步权重绝对值乘首步引导差范数，纵轴是恢复率，红色是 FSU 与 FSU-Mid，灰色是已发表规则，小圆是权重扫描。读图时先看横轴为零处红色点的位置，再沿横轴增大看灰色点如何下滑，最后检查零处左下角的例外点。

> **看图路径：** 1. 先看横轴有效首步引导量为零处有哪些红色与灰色点；2. 再沿横轴增大看各类规则的恢复率如何整体下滑；3. 最后单看左下角终点修复例外点说明零首步引导并非充分条件

[![原论文 Fig. 7：Recovery against the guidance left on the first step, |w_1|\\,\\|u^c_0-u^\\emptyset_0\\|, on CosyVoice…](https://arxiv.org/html/2611.11179v1/fig/fig7_rules_scatter.png)](https://arxiv.org/html/2611.11179v1/fig/fig7_rules_scatter.png)

*论文图 7。原论文 Fig. 7:：“Recovery against the guidance left on the first step, |w_1|\,\|u^c_0-u^\emptyset_0\|, on CosyVoice 2 and 3 at two steps.”。*

图上可见随首步残留引导增大恢复率单调下滑，CosyVoice 2 与三代的负相关分别约为 0.77 与 0.88。FSU 与 FSU-Mid 位于横轴零处的上端，权重扫描的小圆与已发表规则落在同一条下降趋势上。终点修复规则虽也在零处但因改了最后一步只有 30% 多，说明零首步引导是主要条件而非充分条件。

完整集上 FSU 在 CosyVoice 2 与三代上恢复约 84 到 89%，词错误率与字错误率无显著上升，自然度与教师同级。在 IndexTTS-2 上 FSU 只恢复 55 到 57%，FSU-Mid 恢复 77 到 80%，说明均匀大步长需要中点格式。在 GLM-TTS 官方说话人置空分支缺口本来很小，两种方法仍能抬高相似度，FSU-Mid 在各集上达到或超过 10 步教师。难例与跨库条件保持同样趋势。

### 分支与步长如何决定损失大小

分支通过引导向量范数起作用。擦除 Token 会让该范数增大 1.6 到 2.2 倍，CosyVoice 2 上全置空两步掉 5.8 点而说话人置空只掉 0.9 点。把 GLM-TTS 同一网络换成全置空，损失从 0.4 与 0.9 点扩大到 2.8 与 2.7 点，FSU 恢复其中大部分，FSU-Mid 超过教师。下表按无条件分支列出首步引导幅度、平均项与比值，读表时比较问题是什么擦除带来多大首步位移，公平条件是同一网络同一输出空间的梅尔均方根，指标方向是比值越小引导项越主导。

| Decoder | all-null | token-null | speaker-null | r^c | κc | 2-step loss |
| --- | --- | --- | --- | --- | --- | --- |
| CosyVoice 2 | 2.11 | 1.98 | 0.95 | 0.44 | 0.21 | 5.8 |
| CosyVoice 3 | 2.10 | 1.94 | 1.23 | 0.47 | 0.23 | 6.7 |
| IndexTTS-2 | 1.93 | 1.94 | 1.24 | 0.54 | 0.29 | 6.2 |
| GLM-TTS | 1.99 | 2.26 | 1.23 | 0.55 | 0.49 (0.28†) | 0.8 (3.4†) |
| F5-TTS (text) | 1.52 | 0.89 | 1.25 | 1.58 | 1.09 | WER +4.4‡ |
| ZipVoice (text) | 1.58 | 0.85 | 1.29 | 1.58 | 1.97 | WER +0.7‡ |

上表显示 Token 条件解码器的比值约 0.21 到 0.49，文本条件约 1.09 到 1.97。嵌套条件下全置空的平方期望等于 Token 分量加说话人分量之和，这是分支选择的理论依据。文本条件去掉首步引导会在 8 步与 4 步上分别抬高词错误率，因此官方首步引导应保留。均匀网格下长引导首步在纯噪声下有害是跨任务成立的，只是文本任务还需要它来定对齐。

\[\kappa_{c}=r_{c}/\|g_{c}\|\]

上式中比值越小说明引导项相对平均项越主导，是判断 FSU 适用边界的依据。步长方面损失与位移单调相关，CosyVoice 上相关约 0.88 到 0.98，首步长度从 0.1 增到 0.7 时 FSU 增益从负值逐步增到 7 点多。固定噪声后用 11 到 15 个相同后续步骤跟随有无引导的首步，最终梅尔距离仍有 1.17 到 1.24，后续步骤没有消除位移。

### 位移能量落在说话人方向上吗

下图分解位移能量在说话人、内容与剩余方向上的占比。说话人方向由同 1 Token 配 8 个不同提示的输出张成，内容方向类似构造，上方虚线以上是随机方向、教师种子差、换说话人与换内容 4 个对照。读图时先看顶部对照条的粉色占比，再比较换说话人与换内容条的颜色构成，最后看首步位移与最终差值的粉色占比。

> **看图路径：** 1. 先看顶部随机方向与教师种子差的对照条几乎没有说话人成分；2. 再看换说话人与换内容的对照条分别在哪种颜色上占优；3. 最后看首步位移与最终官方减 FSU 差值的粉色占比

[![原论文 Fig. 8：Energy share of each displacement in speaker, content and remaining directions (CosyVoice 2, 100…](https://arxiv.org/html/2611.11179v1/fig/figA_direction.png)](https://arxiv.org/html/2611.11179v1/fig/figA_direction.png)

*论文图 8。原论文 Fig. 8:：“Energy share of each displacement in speaker, content and remaining directions (CosyVoice 2, 100 utterances). Rows above the dashed line are controls.”。*

图中首步位移约 29% 能量落在说话人方向，是教师种子差占比的 24 倍，约为真正换说话人的 60%。最终官方减 FSU 的差值保持类似的粉色占比，说明首步位移确实把输出推向另一个声音，而 Token 固定使音色成为主要自由度。几何测量显示官方两步云相对教师收缩且中心偏移，方差比约 0.6，中心距离约为 1.3 到 1.8 个教师展度。FSU 把中心偏移拉回教师水平但方差比不变，这是平移的特征。

### 相似度回升不等于分布完全复原

FSU-Mid 更接近教师中心且方差比回到 1.0 到 1.2。仅换分支而不去首步引导的方法即使相似度接近教师，中心偏移与方差比仍差，说明单看相似度会漏掉分布形状。持续性是实测性质而非证明，损失随步数消失只是因为首步长度趋于零。

质量方面 FSU 在 CosyVoice 上与教师的客观自然度差在种子噪声内，IndexTTS-2 中文上 FSU 会掉自然度，FSU-Mid 把该代价减小。客观分不能代替听音实验，这是论文明确的局限。实验跑的是公开教师的少步欧拉，蒸馏后的 Token 条件学生模型没有公开权重，留待未来验证。

### 多语言与长输入下复现什么

复现先固定语言模型输出与噪声种子，再跑教师步数得到天花板，然后跑官方两步得到缺口，最后把首步权重设零或跑中点变体。比较必须配对同一 utterance、同 1 Token 长度与同一种子，统计用配对检验并做 Holm 校正。作者资源当前可用，链接指向公开代码库，但第三方链接只证明论文提到该地址，不证明作者已开源，复现应以论文方法描述为准。

下表是 16 种稳健条件的一角，覆盖多语言、长输入、不同提示时长与带噪提示。比较问题是在分析集之外两种方法是否仍恢复缺口，公平条件是官方、教师与两种方法的条件一致，指标是相似度越高越好、词错误率越低越好，恢复率越高越好。

| Condition | Official | TV-CFG | Sel.-CFG | MAMBO-G | FSU (ours) | FSU-Mid (ours) | Teacher | Rec. | WER |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ko | 74.59 | 78.67 | 81.41 | 79.60 | 80.08 | 81.60 | 80.30 | 96% | 3.95 / 3.08 |
| ja | 79.81 | 83.58 | 85.60 | 84.26 | 84.81 | 85.60 | 84.81 | 100% | 10.53 / 10.58 |
| de | 67.75 | 71.26 | 74.13 | 71.18 | 71.56 | 73.34 | 73.62 | 65% | 63.4 / 81.6‡ |
| long en, offline | 72.54 | 77.14 | 77.70 | 76.91 | 77.90 | 79.45 | 79.09 | 82% | 2.54 / 2.75 |
| long zh, offline | 78.83 | 81.45 | 82.04 | 81.42 | 82.12 | 83.87 | 83.15 | 76% | 1.46 / 1.37 |
| long en, streaming | 73.94 | 77.60 | 78.10 | 77.57 | 78.52 | 80.21 | 80.04 | 75% | 2.51 / 2.90 |
| long zh, streaming | 79.74 | 81.60 | 82.72 | 81.81 | 82.54 | 84.40 | 83.85 | 68% | 1.50 / 1.31 |
| prompt 1 s | 52.98 | 54.29 | 55.08 | 54.59 | 54.90 | 54.72 | 54.73 | 110% | 6.84 / 7.39 |
| prompt 3 s | 67.82 | 70.86 | 72.22 | 71.05 | 72.21 | 72.57 | 72.35 | 97% | 5.20 / 4.04 |
| prompt 10 s | 74.06 | 77.80 | 79.96 | 78.54 | 79.66 | 80.42 | 80.58 | 86% | 7.75 / 8.32 |
| 3 s, 20 dB | 65.47 | 68.02 | 69.56 | 68.54 | 69.77 | 69.66 | 69.29 | 113% | 3.60 / 4.21 |
| 3 s, 10 dB | 61.71 | 63.33 | 64.84 | 64.26 | 65.13 | 65.52 | 65.45 | 91% | 4.14 / 3.93 |
| ko | 72.90 | 80.15 | 79.96 | 79.64 | 80.78 | 81.51 | 81.43 | 92% | 2.68 / 2.42 |
| ja | 80.32 | 84.13 | 85.98 | 84.72 | 85.04 | 85.92 | 85.99 | 83% | 56.0 / 56.0‡ |
| de | 76.73 | 78.47 | 79.43 | 79.21 | 79.80 | 80.66 | 81.23 | 68% | 0.96 / 1.26 |
| de | 76.81 | 76.63 | 76.81§ | 76.23 | 76.54 | 77.22 | 77.32 | −0.27 | 126 / 100‡ |
| de | 72.38 | 74.58 | 76.81§ | 75.11 | 75.28 | 76.73 | 77.32 | 59% | 78.2 / 77.9‡ |

上表显示 FSU 在韩语、日语、长输入与带噪提示上多恢复 65 到 113%，德语上 FSU 较弱而 FSU-Mid 补上。短提示与带噪提示下教师与官方差距本身较小，结论仍在种子噪声外。3 种最强的已发表规则在除一格外的所有条件都不及 FSU，更不及 FSU-Mid。部署上每块音频独立从噪声求解，首步效应不跨块累积，切换采样器不引入块边界伪影。

### 何时值得尝试与还缺哪项验证

当解码器是 Token 条件、步数压到 2 到 4 步、相似度掉而词错误率不动，且无条件分支擦掉了 Token 时，最值得尝试跳过噪声主导阶段的引导。截断误差小的余弦网格先试 FSU，均匀大步长或自然度掉得多的先试 FSU-Mid。若任务是文本条件、首步仍要定对齐，则不要去掉首步引导。

复现第一步是把采样器改成起点时间低于 0.1 的步骤免引导，两步时就是第一步免引导，计数从 4 次降到 3 次网络计算。需要保留的关键量是权重、网格决定的首步长度、无条件分支类型与比值，以及配对种子。

还缺的验证是蒸馏后的 Token 条件学生模型、真实听音实验，以及图像视频长首步是否同理。论文的位移分析只依赖从纯噪声出发的欧拉第一步，因此推测同类有引导的流与扩散采样器在首步很长时会有同样位移，但这部分尚未测量。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.11179v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-12/)
