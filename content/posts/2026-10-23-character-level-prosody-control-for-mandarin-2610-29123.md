---
title: "Character-Level Prosody Control for Mandarin Speech Synthesis:An Architecture-Preserving Approach"
date: 2026-10-23
draft: false
tags: [韵律与风格控制, SFT, 语音, 大语言模型]
categories: [论文速递]
description: "该文解决普通话 TTS 只能做整句风格控制、不能在指定汉字上调时长音高停顿的问题，用大规模自动提取的 Unicode 韵律标记加微调 CosyVoice2 的语言模型实现字级控制，代价是阈值固定、只验证普通话和单一主干且听感评估仅为描述性比较。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.29123"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "汉字级别韵律控制：不改结构如何让 TTS 听懂标记"
paper_digest_original_title: "Character-Level Prosody Control for Mandarin Speech Synthesis:An Architecture-Preserving Approach"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.29123v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.29123v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.29123v1.pdf"
paper_digest_primary_task: "韵律与风格控制"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.prosody-style-control","label":"韵律与风格控制"},{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"}]
paper_digest_primary_method: "SFT"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "该文解决普通话 TTS 只能做整句风格控制、不能在指定汉字上调时长音高停顿的问题，用大规模自动提取的 Unicode 韵律标记加微调 CosyVoice2 的语言模型实现字级控制，代价是阈值固定、只验证普通话和单一主干且听感评估仅为描述性比较。"
paper_digest_authors: [{"affiliations":["JD.com, Inc., Beijing, China"],"name":"Diankun An"},{"affiliations":["JD.com, Inc., Beijing, China"],"name":"Lu Ma"},{"affiliations":["JD.com, Inc., Beijing, China"],"name":"Yongliang Wang"},{"affiliations":["JD.com, Inc., Beijing, China"],"name":"Zhewen Su"},{"affiliations":["JD.com, Inc., Beijing, China"],"name":"Xin Tian"}]
paper_digest_abstract_sha256: "b1157e8b6c5f0a542925ba0e6486d88abbce09bacf09183dbc305436f26782cb"
paper_digest_sidecars: {"citation.bib":{"sha256":"ad4a16659890409644cafa8776ae222b7e281e0448cb5cf7a3db0605f7765d67","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-29123/citation.bib"},"citation.json":{"sha256":"8dc955da797327469d92eeee822362180f948fc98d4a436fcfc340d85bce6bb3","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-29123/citation.json"},"citation.ris":{"sha256":"5877d57f556a6420116e131f0f848d854655003279e339f1c97112b238a0dd19","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-29123/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"7d34685b21f82ee89b09c7bf068e336da6213188c2bd374072d6327fddda213a","url":"/audio-paper-digest-blog/data/papers/2026-10-23/2610-29123/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "80670c92a7bf415afed894af2c5ca1053585300e3bb86e4656cb39a9ae8ecabb"
paper_digest_api_reader_plan_sha256: "ce3a51cf03923e4824e654a98888587d43b20df34c194979cb585917aa5b0256"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "977eb1c4072203d0e05e806e788947ebd08cb02503cbb792a25e29a5ea72d455"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "68f07c85a7b7efb33ab7db226c9e42b30f85641a4e0dcdeff468ba61b89f7b3a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "0fa7477203fd2f762fb8b044ee23a47c98d87bd108cf8703d0297ace962d1ed1"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "28f35011ac85774293379e24fcd4e9b4ed06559cdbfb390c30262ecf589b3fae"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 汉字级别韵律控制：不改结构如何让 TTS 听懂标记

> 英文题目：*[Character-Level Prosody Control for Mandarin Speech Synthesis:An Architecture-Preserving Approach](https://arxiv.org/abs/2610.29123v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音合成](/audio-paper-digest-blog/papers/?concept=task.speech-synthesis) → [韵律与风格控制](/audio-paper-digest-blog/papers/?concept=task.prosody-style-control)
- **研究方法**：[SFT](/audio-paper-digest-blog/papers/?concept=method.sft)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)
- **模型家族**：[大语言模型](/audio-paper-digest-blog/papers/?concept=model_family.llm)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Diankun An：JD.com, Inc., Beijing, China
- Lu Ma：JD.com, Inc., Beijing, China
- Yongliang Wang：JD.com, Inc., Beijing, China
- Zhewen Su：JD.com, Inc., Beijing, China
- Xin Tian：JD.com, Inc., Beijing, China

## 📌 核心摘要

读者需要理解的对象是基于大语言模型的普通话语音合成，输入是汉字文本，输出是语音波形，难点在于整体风格描述只能改变整句感觉，无法指定某一个汉字拉长、升高或在某处停顿。离线提取阶段以音频文本对为输入，先用两套强制对齐融合边界，再逐字计算音高、时长、能量和短语间停顿特征并转为Unicode标记，其输出的带标记文本直接作为下一步训练输入。标记插入时音高与能量标记以前缀形式放在汉字前，时长与停顿标记以后缀形式放在汉字后，全局语速提示放在句首并用`<|endofprompt|>`隔开且不改变原有词面内容。声学解释阶段以带标记文本为输入、以对应语音的声学令牌序列为目标，对原有合成系统的语言模型做微调，分词器、语言模型和解码器结构保持不变，使韵律控制完全走文本侧。与需要改声学模型或依赖专家标注的SSML、ToBI和音素级预测方法不同，该通道可用于已部署的大语言模型合成系统。与未改动的CosyVoice2基线相比，在12个说话人乘11句人工测试集的时长控制评测中，目标字时长均值的基线240 ms变为本文方法391 ms，增幅为62.9%。在24名普通话母语听众对情感内容评测中，自然度平均意见分的基线4.46对本文方法4.44，本文方法略低但基本保持。结论只适用于普通话和CosyVoice2单一骨干，强标记组合可能用少量中性自然度换取表现力，声学解释微调用8卡B200训练20轮，原文未披露推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文要解决的合成任务是什么

输入是一段普通话文本，目标是合成出自然语音，同时要求能在指定的汉字上调整韵律，例如把某一个字拉长、把某一个字音调抬高或压低、在句中某个词后留出特定长度的停顿，以及控制整句的快慢。必须保留的信息是原文的文字内容和说话人音色，不能为了加控制而改变读的是什么字、是谁在读。输出是波形音频。

已有大语言模型式语音合成系统擅长整句风格迁移，比如给一句悲伤地说或一段参考音频，整句都会变悲伤，但无法指明是哪一个字要重、哪里要停。在影视配音、有声书和交互语音里，这种指到字头上的时间精度恰恰是刚需。普通话以汉字为自然的韵律操作单元，一个汉字一般对应一个音节，这让字级标记既有语言依据，也有工程上的可对齐性。

论文把研究目标限定得很明确：不是要在整体自然度上超过现有系统，而是证明韵律标记可以自动大规模获得，并且能被现有 TTS 中的语言模型学会。这决定了后文评价的重点是可行性和可控性，而不是刷最高分。

### 已有两条控制路线为什么不够用

第一条是整句级控制。代表做法是用自然语言描述全局风格，或用参考语音做整体风格迁移。它们设定的是全局条件，模型自行决定细节，好处是使用简单，缺点是没有时间精度，不能说清句内哪一个音节上扬、哪里停顿。论文把自己的字级标记定位为这类方法的补充，而不是替代。

第二条是细粒度符号控制，例如语音合成标记语言 SSML、ToBI 韵律标注体系，以及学到的词或音素级标签，还有 FastSpeech 2 那样直接预测音素时长和音高的做法。它们能做到局部精确，但通常需要专家标注、语言相关规则，或者要改声学模型结构，难以直接搬到已预训练好的大模型 TTS 上。

自动从音频文本对中标注韵律本身并不是新问题，从早期同时建模频谱、基频和时长的隐马尔可夫方法，到近年用预训练模型做标注都有很长历史。论文明确表示贡献不在提取本身，而在于面向普通话的字级 Unicode 标记设计，以及证明冻结构 TTS 语言模型能通过微调学会执行这类标记。

### 为什么选汉字作控制单位

普通话的书写单位是汉字，语音单位大致对应音节，强制对齐可以给出每个汉字的起止时间。这让在某字前后插入符号成为可执行的操作：符号在文本流中有明确位置，声学上有明确时间段与之对应。如果控制单位过大，就回到了整句控制；如果细到帧，就失去了文本可编辑性。

困难在于三点。第一，人工逐字标注音高能量停顿不可扩展，必须全自动。第二，标记必须进入现有模型的文本通道，不能要求改模型结构，否则无法复用到已部署系统。第三，标记要可解释、可手写，创作者能直接在文本里增删，而不是只能依赖参考音频。

因此论文把问题定义为：设计一套离散的、贴在汉字旁边的符号体系，用纯数据驱动的方式从原始音频中大量挖出带标记文本，再教会现有 TTS 语言模型把符号还原为声学变化。

### 整体框架分哪两部分

框架分为离线提取和在线解释两部分。离线部分把原始音频文本对变成带标记文本，作为训练数据；在线部分是微调后的 TTS 语言模型读带标记文本，输出声学词元再解码为语音。另有一个可选的自然语言前端，把说慢一点、强调森林这类话翻译成标记序列，方便不会手写标记的用户使用。

下图是推理时的视角，读图任务是确认控制从哪里进入、哪里保持不变，重点看带标记文本是唯一的韵律入口，基础模型结构保持不变。

> **看图路径：** 1. 先看左侧韵律翻译器与右侧 TTS 系统的大框分界；2. 再看参考音频只进语音词元器、不直接改文字；3. 最后沿带标记文本到声学解释器再到音频的主箭头走一遍

[![原论文 Figure 1.：Inference-time view of the framework.](https://arxiv.org/html/2610.29123v1/system1.svg)](https://arxiv.org/html/2610.29123v1/system1.svg)

*论文图 1。原论文 Figure 1.：“Inference-time view of the framework.”。*

图中左侧绿色框是韵律翻译器，它吃原始文字加用户指令，吐出带标记文本；右侧大框是 TTS 系统，包含声学解释器、匹配流和声码器。参考音频只进入下方的语音词元器，用于提供音色条件，不携带逐字韵律指令。主路径是从带标记文本经语言模型到声学词元再到音频，这说明控制是通过文本流进入的，解码器本身没有为控制加新模块。

### 对齐边界如何得到又如何融合

要给汉字贴标记，先要知道每个汉字在音频中的时间。论文同时用两个强制对齐系统：MFA 擅长声学精度，WhisperX 对自发语音更鲁棒。如果两者对同一样本的分歧超过 150 毫秒，该样本直接丢弃，避免错误边界污染标记。保留样本的边界按置信度加权平均融合，权重分别来自 WhisperX 的连接时序分类后验概率和 MFA 的声学对数似然，再做归一化。长句按融合后的边界切成短语，后续的时长能量音高都在短语内比较，避免跨句的全局漂移干扰局部判断。

下图展示提取流水线，读图任务是确认时间基准如何分发给 4 个特征分支，注意停顿分支与其他 3 条分支的步骤差异，强制对齐是唯一的红色模块，是全部特征共享的时间基准。

> **看图路径：** 1. 先看左下强制对齐如何同时吃文本和音频；2. 再看音高、时长、能量三条分支经过变化量与最大最小而停顿分支只经过阈值；3. 最后看每条分支落到右侧哪个符号

[![原论文 Figure 2.：Character-level prosody extraction.](https://arxiv.org/html/2610.29123v1/extract.svg)](https://arxiv.org/html/2610.29123v1/extract.svg)

*论文图 2。原论文 Figure 2.：“Character-level prosody extraction. Forced alignment provides temporal boundaries for feature extraction and marker insertion.Flowchart of the extraction pipeline: audio and text…”。*

图中左下红色强制对齐同时吃文本和音频，输出的音频片段分给 4 条分支。其中音高、时长、能量（图内标为 Volume）3 条分支都走提取、求变化量、阈值判断、取最大最小、再阈值的链路，最后分别落到上扬下降、拉长缩短、重读弱读符号；最下方的停顿分支没有变化量和最大最小两步，只经过停顿提取加阈值判断，直接按停顿时长阈值分成短、中、长、很长四档。4 种标记共享同一套对齐边界，但判断逻辑并不相同。

融合公式要计算的是最终边界时刻，它约束的是两个系统估计的加权中心。

\[\hat{t}=\frac{w_{\text{W}}\,t_{\text{W}}+w_{\text{M}}\,t_{\text{M}}}{w_{\text{W}}+w_{\text{M}}}\]

其中 t_W 和 t_M 分别表示 WhisperX 和 MFA 给出的边界时刻，w_W 和 w_M 是各自归一化后的置信度。运算是先各自加权再相除，得到偏向更可信一方的时刻，结果交给后一步做短语切分和逐字特征计算。

**强制对齐 × 韵律标记：** 强制对齐负责给出每个汉字在音频中的起止时间，韵律标记负责把该时间段内算出的音高、时长、能量和停顿差异变成文本流里的符号；前者提供时间依据，后者提供可学习的控制接口，两者组合才把连续声学差异变成语言模型能读懂的离散输入。

### 四种韵律特征怎样变成符号

在得到短语和逐字边界后，流水线分别计算 4 类特征。停顿是短语之间的静音时长，只按时长阈值量化为四档，没有变化量和最大最小环节。字时长由对齐时间戳直接相减得到，只在时长方差足够大的短语内标注，超过上边界的标拉长、落在下区间的标缩短，避免在本身很均匀的短语里硬贴标记。能量类似，只在高方差短语内把局部最大标为重读、最小标为弱读。基频用 RMVPE 估计，要求某字平均基频偏离所在短语均值超过正负 100 赫兹，且字内基频极差小于 35 赫兹、时长超过 150 毫秒，才标为上扬或下降，这样标的是干净的整体抬升或压低，而不是字内的拐弯。

下表整理全部标记的定义，要回答的比较问题是音高、能量、时长和停顿 4 类参数各自由哪些符号承担，同一套符号在训练和推理时保持一致，才能让模型把位置和形状与韵律类别对应起来。

| 参数 | 类别 | 符号 | 编码 |
| --- | --- | --- | --- |
| 音高 | 上扬 | ↗ | U+2197 |
| 音高 | 下降 | ↘ | U+2198 |
| 能量 | 重读 | ↑ | U+2191 |
| 能量 | 弱读 | ↓ | U+2193 |
| 时长 | 拉长 | → | U+2192 |
| 时长 | 缩短 | ← | U+2190 |
| 停顿 | 短 | , | U+201A |
| 停顿 | 中 | ·· | U+2025 |
| 停顿 | 长 | … | U+2026 |
| 停顿 | 很长 | ◦ | U+3002 |

上表把斜箭头留给音高升降，直箭头留给能量强弱，横箭头留给时长拉长或压短，标点类符号留给不同长度的停顿。符号都选在正常中文文本很少出现的区间，作为词表外符号插入而不破坏原有字面内容。音高和能量作前缀贴在被修饰字之前，时长和停顿作后缀贴在字之后，全局语速提示放在全文最前并用特殊分隔符隔开。阈值都是语料分布导出的固定常数，音高用绝对赫兹而非半音，论文已说明相对音高是未来改进方向。

### 冻结构的语言模型如何学会执行标记

声学解释器的含义是：不改分词器、语言模型和解码器的任何结构，只改变输入分布。训练对由自动流水线产生，输入是带标记文本，目标是对应语音的声学词元序列。模型通过微调把离散符号序列映射为对应的声学序列，相当于在文本侧开了一条可解释的控制通道。

这与加新词表项的做法不同。论文对比了插入笑声等副语言事件标记的做法，指出那种做法是增加词汇内容，而这里的标记是修饰已有词汇的声学属性，不引入新词汇项。好处是原有语言能力受影响小，代价是控制粒度受限于标记设计和词元器对细微变化的保留能力。

可选的自然语言前端是用逆向标注构造三元组，再微调文本大模型把描述映射为带标记文本。训练数据约 210,000 条，来自电视剧、讲座和直播 3 种场景，训练验证测试按 7 比 2 比 1 划分。在保留测试集上，生成标记文本与自动流水线参考之间的归一化编辑距离从零样本的 7.91 降到 4.61。论文强调该前端只是易用层，主张不依赖它，端到端的指令到语音评估也留待未来。

**字符时长 × 全局语速：** 字符时长指单个汉字实际发音的毫秒数，用于做拉长或缩短的局部操作，全局语速指整句平均每字时长划分出的很慢到很快五个等级、放在句首作提示；前者管局部节奏，后者管整句快慢，组合后实现局部与整体互补而不互相覆盖。

**TTS 语言模型 × 声学词元：** TTS 语言模型指 CosyVoice2 中负责由文本预测声学序列的自回归模型，声学词元指它输出的离散音频表示、再经匹配流和声码器变成波形；标记不进声码器，只改变语言模型的输入分布，组合后形成文本侧控制通道，结构不用改。

### 数据和微调实际是怎样做的

本研究对 TTS 声学部分确实做了训练，但不是从零训练新结构，而是微调 CosyVoice2 中的语言模型。数据是 VoxBox 中的普通话子集，经流水线处理，保留时长 3 到 25 秒、至多 60 字的语音段，并滤掉没有任何韵律标记的样本，最终得到 2150447 条、共 5858 小时，按说话人不重叠以 9 比 1 重划分为训练和验证集。

下表整理原文给出的时长与语速划分，要回答的问题是多长的字算长、多慢的句算慢，比较基准是同一语料库的字时长分布分位数，指标是平均每字时长。

| 条件 | 指标 | 慢端阈值 | 快端阈值 |
| --- | --- | --- | --- |
| 很慢与很快 | 平均字时长 | 很慢大于 275.22 ms | 很快小于 147.4 ms |

上表说明阈值不是拍脑袋定的，而是 95 分位数、最低 5% 区间和 5 分位数等位置导出的固定常数。音高沿用正负 100 赫兹、字内极差小于 35 赫兹、时长大于 150 毫秒。优化在 8 卡 B200 上做 20 轮，优化器为 Adam，学习率 1e-5，线性预热加余弦退火，取验证损失最低的 3 个检查点做均匀权重平均后再评测。没有报告总时长和推理延迟，因此不能从训练规模推断部署成本。

### 可控性和听感是在什么条件下测的

字级可控性用 11 句手工覆盖全部标记类型的测试句，人工指定目标字，跨 12 个说话人身份，用基线和带标记模型分别合成，再用与训练时相同的提取栈测量目标字的基频和时长。复用同一提取器可能掩盖系统性提取误差，但因基线和受控条件同等受影响，相对变化仍有意义，绝对准度需未来用人标校准。停顿可控性是每种停顿标记在保留文本的句中标点处插入，各合成 2000 条，只测实现出的停顿时长，不测位置预测。语速是看 5 种提示下语速行为是否分离。

听感实验招募 24 名自述母语为普通话、听力正常的志愿者，每人评 24 条、每系统 12 条，随机穿插，在自然度、真实感和说话人相似度 3 个 5 分制维度打分，真实感和相似度组提供原录音作参考，无锚定刺激，每人约 20 分钟。论文把真实感定义为韵律合理性和与原语音的相似，明确与自然度区分，并声明只做描述性比较，不做显著性推断。

词元器敏感性分析用 1000 条音频做扰动：音量正负 5 和 10 分贝，基频正负 1 和 3 半音，加性噪声相对电平负 45 和负 40 分贝，再算原序列与扰动后序列的归一化编辑距离，比较 CosyVoice2、BiCodec、DualCodec 和 TaDiCodec 4 种词元器。

### 字级时长和音高能调多少

该小节回答加标记后目标字的时长和基频相对基线变化了多少，指标方向是时长毫秒数直接读数、基频偏移赫兹数看增量，比较双方是未改动的 CosyVoice2 基线与微调后的标记条件模型，测试条件同为 12 说话人乘 11 句的均值。

| Control | Base | Ours | Change |
| --- | --- | --- | --- |
| Lengthen (ms) | 240 | 391 | +62.9% |
| Shorten (ms) | 144 | 119 | –17.4% |
| Rising F0 shift (Hz) | +6 | +11 | +83.3% |
| Falling F0 shift (Hz) | –8 | –12 | +50.0% |

表中拉长条件从 240 毫秒到 391 毫秒，增加 62.9%，缩短从 144 毫秒到 119 毫秒，减少 17.4%；上扬的基频偏移从加 6 赫兹到加 11 赫兹，增加 83.3%，下降从负 8 赫兹到负 12 赫兹，幅度增加 50.0%。需要说明的限制是该评估把拉长标记加在基线已偏长的字上、缩短标记加在已偏短的字上，测的是标记带来的额外位移，不是绝对目标时长。

**自然度 × 真实感：** 自然度指听起来是否中性顺滑，真实感指韵律是否像原录音那样可信、有表现力；论文把二者分开，因为戏剧化夸张可能降低中性自然度却更真实，组合评价才能避免把有意的表现力误判为质量下降。

结果支持的判断是离散符号确实被模型还原为声学变化，且方向符合标记语义。不能回答的是分布形态，因为只报告了均值，方差和重叠度未给出，论文自身也把分布分析列为局限。

### 停顿和整体语速是否按档实现

停顿实验的比较问题是给定标记时期望的时长区间与实际合成出的平均停顿是否落在区间内，公平条件是标记都放在句中标点处的短语边界，只比较实现时长。原文报告四档实测均值分别落在各自目标区间内，短停顿约 354 毫秒、中停顿约 525 毫秒、长停顿约 824 毫秒、很长停顿约 1109 毫秒，区间从 300 毫秒到 1500 毫秒按档递增。能量即响度控制没有报告，因为主干词元器对能量扰动几乎不变，实测效果微弱，论文选择不呈现而不是用弱结果凑数。

下图是语速的组均值，读图任务是核对像素纵轴与原图注措辞的差异，横轴为五档语速提示，像素纵轴为 Words per minute（词/分钟），不是平均字时长。原图注写的是平均每句字符时长，但图内纵轴明确标为 Words per minute，两类量方向相反，此处按像素标签报告，不把两者当同一指标，不推断词等于汉字。

> **看图路径：** 1. 先看横轴五个语速等级从很慢到很快的顺序；2. 再看纵轴 Words per minute（词/分钟）随等级单调上升；3. 最后比较最慢约 243 与最快约 333 的组均值差距

[![原论文 Figure 3.：Mean per-utterance character duration conditioned on the five global rate prompts (group means…](https://arxiv.org/html/2610.29123v1/speed.svg)](https://arxiv.org/html/2610.29123v1/speed.svg)

*论文图 3。原论文 Figure 3.：“Mean per-utterance character duration conditioned on the five global rate prompts (group means across speakers).Grouped bar or line chart of mean character duration for the five…”。*

图中横轴从很慢到很快，像素纵轴为 Words per minute（词/分钟），柱高单调上升，最慢一档约 243、正常约 282、最快约 333，中间两档分别约 260 和 321，组均值分离良好且与提示顺序一致，数值越大表示速率越快。这与用平均字时长表示快慢时数值越小越快的方向正好相反，因此不能把该图的 243 到 333 直接读成毫秒数。但论文明确指出这只是组均值，不能据此声称分布不重叠，也未检验与说话人的系统性交互，方差层面的分析留待未来。

### 加上控制后听感掉了吗

该小节回答在带感情内容上，标记条件模型相对基线的 3 维平均意见分如何，指标方向是分数越高越好，比较双方同为基线与本方法，条件是 24 人听评的描述性均值，未做推断检验。

| Attribute | Base | Ours |
| --- | --- | --- |
| Naturalness | 4.46 | 4.44 |
| Realism | 4.10 | 4.15 |
| Speaker similarity | 3.95 | 4.00 |

表中自然度基线 4.46、本方法 4.44，基本持平；真实感 4.10 对 4.15，说话人相似度 3.95 对 4.00，均高出 0.0 几分。所有差异都在零点几分以内，论文只做描述性报告，不声称统计显著，并引用近年关于平均意见分方法学的讨论，指出小差异更适合用成对比较、最佳最差选择等协议加置信区间，计划作为后续工作。

结论成立的条件是情感化内容、提供原录音参考、无锚定刺激的实验室听评，不能推广为所有文体或部署环境下的保真承诺。强标记组合可能以少量中性自然度换取表现力真实感，其权衡尚未量化。

### 为什么响度难控而词元器是关键

该小节不是去掉某模块的消融，而是用扰动敏感性解释为何不做响度控制。测量对象是 4 种词元器在音量、基频和噪声扰动下的归一化编辑距离，距离越高表示词元序列变化越大、保留声学细节越多。比较条件一致，均为同一 1000 条音频的扰动前后对比。

下图展示敏感性柱状图，读图时注意颜色代表扰动类型而非好坏，纵轴是敏感度分数，越高越敏感。

> **看图路径：** 1. 先看横轴四个词元器的分组顺序；2. 再看同组内强扰动与弱扰动堆叠段的高度关系；3. 最后比较 CosyVoice2 与 TaDiCodec 在响度和音高扰动下的差异

[![原论文 Figure 4.：Tokenizer sensitivity to acoustic perturbations (NED between original and perturbed token…](https://arxiv.org/html/2610.29123v1/tokenizer.svg)](https://arxiv.org/html/2610.29123v1/tokenizer.svg)

*论文图 4。原论文 Figure 4.：“Tokenizer sensitivity to acoustic perturbations (NED between original and perturbed token sequences; higher = more sensitive).”。*

图中 CosyVoice2 在所有扰动下柱最低，尤其对响度扰动几乎不变；BiCodec 和 TaDiCodec 明显更高，TaDiCodec 在强扰动下接近 1.0，几乎重写词元序列；DualCodec 居中。这呈现的是连续谱而非 2 分，论文也只纳入一种识别优化词元器，因此只能作为假设生成证据：识别目标可能偏向语言内容而压缩韵律细节，但尚未证明因果机制。

**语音识别优化的词元器 × 重建导向的词元器：** 语音识别优化的词元器为保留文字内容而训练，对音量音高等扰动不敏感，重建导向的词元器为还原波形而训练，对同样扰动更敏感；前者利于识别鲁棒性，后者保留更多韵律细节，对比两者才能讨论标记控制的天花板在哪里。

该观察与主结果并不矛盾：标记经文本流进入，微调后的语言模型仍能学会实现它们，只是词元器层面的衰减可能限制了天花板，重建导向词元器未来可能提供更大控制余量。

### 哪些结论还不能推广

语言和主干范围是首要局限。标记清单、对齐流水线和全部实验都为普通话设计并只在普通话上验证，字级对齐不能直接搬到非声调或黏着语；经验验证只用 CosyVoice2 一个主干，其他编解码器和非语言模型架构都未验证。

标记设计本身是固定阈值，基频用绝对赫兹而非对数半音，也没有像对齐那样集成多个基频跟踪器，鲁棒性在自发或非典型语音上可能下降。对齐质量直接决定标记正确性，流水线虽用双对齐加一致性过滤，但仍依赖强制对齐精度。

评价上，可控性只报告条件均值，听感只有 24 人描述性比较，标记质量未与人工标注对比，指令前端只在文本层面用编辑距离评估，没有做指令到标记再到语音的端到端听评，验证划分虽按说话人不重叠，但仍是同一语料库内的保留划分，缺乏录音条件完全独立的测试集。

### 要复现第一步该做什么

值得尝试的场景是需要在指定汉字上做强调、拉长、音高起伏或精确停顿的普通话内容创作，且能接受先准备带标记文本的工作流。如果只需要整句换风格，用已有的自然语言描述或参考语音方法更直接。

复现第一步是跑通双对齐加融合的提取流水线：在自己的普通话音频文本对上同时跑 MFA 和 WhisperX，按 150 毫秒分歧过滤，再按置信度加权平均得到字边界，切分短语后按原文的时长、能量和基频阈值生成标记，检查标记率和边界一致性，而不是直接微调。阈值和语速分位数是语料相关的，需要在新语料上重新统计，不能照抄毫秒数。

关于资源，原文未发现经验证可用的作者代码、模型或数据链接，不得声称已公开。论文提到基底是公开的 CosyVoice2、数据来自公开语料 VoxBox 普通话子集、划分文件列表将在发表后发布，但本次未能确认可达，一切以作者后续发布为准。复现时把提取、微调和评价脚本分开记录版本和随机种子。

### 如何一句话记住这项工作

记住一条样本路径：原始音频加文本先被双对齐定出每个汉字的时间，再算出该字相对所在短语的时长能量音高偏离和短语间停顿，变成贴在字前字后的箭头和标点符号，带标记文本送入结构不变的 TTS 语言模型微调，模型学会把符号还原为更长更短、更高更低或停更久的声学实现。

实验在 2150447 条规模上证明方向正确：拉长加 62.9%、缩短减 17.4%、上扬和下降的基频位移分别增加 83.3% 和 50.0%，四档停顿实测落在目标区间，五档语速按 Words per minute（词/分钟）从约 243 到约 333 单调分离，听感 3 维与基线基本持平。但成立条件很具体：普通话、单一主干、组均值和描述性听评，跨语言、跨词元器、分布方差和端到端指令控制都还是待验证的假设。

常见的误解是把组均值分离当成分布无重叠，或把小幅听感分差当成显著提升，或认为识别优化词元器必然无法做韵律控制。原文恰恰反过来提醒：均值不能推出分布，听感差异未做推断，而文本侧标记仍能在词元器衰减下实现控制，只是天花板可能在重建导向词元器上更高。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.29123v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-23 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-23/)
