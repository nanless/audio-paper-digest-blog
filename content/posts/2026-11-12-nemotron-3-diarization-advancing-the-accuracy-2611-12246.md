---
title: "Nemotron 3 Diarization: Advancing the Accuracy-Efficiency Frontier in Streaming Speaker Diarization"
date: 2026-11-12
draft: false
tags: [说话人分离标注, 多说话人语音识别, 端到端学习, 实时处理]
categories: [论文速递]
description: "针对流式说话人日志要在分块、低延迟下保持身份、支持更多说话人和更精细边界的问题，该工作用纯 Transformer 编码器加学习上采样、八说话人到达序缓存与活动和幻影辅助损失，在 DIHARD III 和 CALLHOME 等集上降低 DER 并在 AMI 和 NOTSOFAR-1 上下游转写上降低 tcpWER，同时减少训练内存和提高推理吞吐。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.12246"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "Nemotron 3 Diarization：把流式说话人日志推到八人、10 毫秒与更高吞吐"
paper_digest_original_title: "Nemotron 3 Diarization: Advancing the Accuracy-Efficiency Frontier in Streaming Speaker Diarization"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.12246v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.12246v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.12246v1.pdf"
paper_digest_primary_task: "说话人分离标注"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.diarization","label":"说话人分离标注"},{"facet":"task","id":"task.multi-talker-asr","label":"多说话人语音识别"},{"facet":"method","id":"method.end-to-end-learning","label":"端到端学习"},{"facet":"setting","id":"setting.real-time","label":"实时处理"}]
paper_digest_primary_method: "端到端学习"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "针对流式说话人日志要在分块、低延迟下保持身份、支持更多说话人和更精细边界的问题，该工作用纯 Transformer 编码器加学习上采样、八说话人到达序缓存与活动和幻影辅助损失，在 DIHARD III 和 CALLHOME 等集上降低 DER 并在 AMI 和 NOTSOFAR-1 上下游转写上降低 tcpWER，同时减少训练内存和提高推理吞吐。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Ivan Medennikov"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Taejin Park"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Tatiana Timofeeva"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"He Huang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Alexander Polok"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Sofia Kostandian"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Weiqing Wang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Dongji Gao"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jagadeesh Balam"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Boris Ginsburg"}]
paper_digest_abstract_sha256: "1206e524fe712a522650850b90c0540269b44a9aa74a6efdb171ca01c63a265e"
paper_digest_sidecars: {"citation.bib":{"sha256":"28a28d5b06f22c79b62cae1bd4ec4ea746af93193eac3b1d16af719867b7905a","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-12246/citation.bib"},"citation.json":{"sha256":"725b0be9aa2ac5d3b740969288e0ca721533054df1c14a699ace11ce94e3726b","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-12246/citation.json"},"citation.ris":{"sha256":"b81aa47ebbaa62ab7329160f8e29010eb3b6210adfbba0bea0e424c7a4afb449","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-12246/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"e87060e72865dfbbbbf71ca56a05afa4c73800491b6e86dfce7e280a0c373411","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-12246/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "e597dae35c89453ed123c1c37548b0ba146878fd0d849b89ed2eeee9353db883"
paper_digest_api_reader_plan_sha256: "7eeeea9c297f9b82454b57459ff1da446657151d2b1d71d73b342d23138704f7"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "25197ca9c2692f7b8479855f439b59336f6441b3c038a0c009fa6cca5b332947"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "8a54baa22b9fdd1428441e41e9cab737b19f5265c7d19ba8e35176749e78e435"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "7b8ca7dc8c9bd2c29790fd3222fe1f3172883d99b498f70a331700fa3896dcd4"
paper_digest_api_reader_author_count: 10
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "bdd6d1e87cbded6d4083d2117ca08bc58f2287c05af309a84648a619617978ec"
paper_digest_api_reader_resource_count: 12
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 Nemotron 3 Diarization：把流式说话人日志推到八人、10 毫秒与更高吞吐

> 英文题目：*[Nemotron 3 Diarization: Advancing the Accuracy-Efficiency Frontier in Streaming Speaker Diarization](https://arxiv.org/abs/2611.12246v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[说话人分离标注](/audio-paper-digest-blog/papers/?concept=task.diarization)；[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr) → [多说话人语音识别](/audio-paper-digest-blog/papers/?concept=task.multi-talker-asr)
- **研究方法**：[端到端学习](/audio-paper-digest-blog/papers/?concept=method.end-to-end-learning)
- **研究条件**：[实时处理](/audio-paper-digest-blog/papers/?concept=setting.real-time)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Ivan Medennikov：机构信息未能在本次解析中与作者逐人可靠绑定
- Taejin Park：机构信息未能在本次解析中与作者逐人可靠绑定
- Tatiana Timofeeva：机构信息未能在本次解析中与作者逐人可靠绑定
- He Huang：机构信息未能在本次解析中与作者逐人可靠绑定
- Alexander Polok：机构信息未能在本次解析中与作者逐人可靠绑定
- Sofia Kostandian：机构信息未能在本次解析中与作者逐人可靠绑定
- Weiqing Wang：机构信息未能在本次解析中与作者逐人可靠绑定
- Dongji Gao：机构信息未能在本次解析中与作者逐人可靠绑定
- Jagadeesh Balam：机构信息未能在本次解析中与作者逐人可靠绑定
- Boris Ginsburg：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

读者需要理解的对象是流式说话人分离标注，输入是连续会议录音，输出是谁在何时说话的时间线，难点是在只有有限右侧上下文时保持跨分块的说话人身份一致，同时处理重叠语音和新说话人进入。先把输入特征堆叠到80毫秒步长送入31层Transformer编码器提取粗粒度声学表示，编码器输出的80毫秒表征再送入一维亚像素卷积上采样为10毫秒序列，上采样输出送入输出头产生每个说话人通道的语音活动。到达顺序说话人缓存接收跨分块的说话人证据以固定通道顺序，训练同时用排列无关损失和到达时间排序监督通道分配，并增加整体活动分类和抑制空通道误激活的辅助损失。相对前代四说话人系统，关键差异是取消卷积前端、提高输出分辨率、扩大缓存并引入可变上下文训练，使同一模型支持离线到超低延迟推理。在DIHARD III评测集上，30.4秒输入缓冲时新系统说话人分离标注错误率DER为12.73%，低于前代基线的19.09%。结论适用于1到8人混合、公开会议与电话域，0.32秒延迟下误差会上升0.79到3.53个百分点，训练使用64块A100，推理吞吐最高可达前代6.4倍。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/NVIDIA-NeMo/Speech> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/NVIDIA-NeMo/Speech/blob/main/examples/speaker_tasks/diarization/conf/neural_diarizer/sortforme> — 链接不可用（HTTP 404）

- 第三方资源：<https://github.com/NVIDIA-NeMo/Speech/blob/main/examples/speaker_tasks/diarization/conf/neural_diarizer/sortformer_streaming_8spk.yaml> — 链接可访问（HTTP 200）

- 第三方资源：<https://hf.co/nvidia/Nemotron-3-Diarization> → <https://huggingface.co/nvidia/Nemotron-3-Diarization> — 链接可访问（HTTP 200）

- 第三方资源：<https://www.withdavid.ai/#datasets> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/popcornell/FastMSS/blob/master/resources/notsofar1-channels_mfa_rttms.tar.gz> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/popcornell/FastMSS> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/nttcslab-sp/diar-forced-alignment> — 链接可访问（HTTP 200）

- 第三方资源：<https://hf.co/nvidia/diar_streaming_sortformer_4spk-v2.1> → <https://huggingface.co/nvidia/diar_streaming_sortformer_4spk-v2.1> — 暂时无法访问

- 第三方资源：<https://hf.co/BUT-FIT/diarizen-wavlm-large-s80-md-v2> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 说话人日志要从音频里回答什么

说话人日志的输入是一段可能包含多人、重叠、静音和远近不同麦克风的连续音频，目标是输出每个说话人在每一时刻是否在说话。刚入门时容易把它想成先切分再分类，实际上端到端神经日志直接预测多通道的帧级话音活动，天然允许同一帧有多个说话人同时为 1。必须保留的信息有 3 类：总体语音活动在哪里、重叠在哪里、以及跨时间的身份一致性，即第 5 分钟的说话人 A 与第 1 分钟的说话人 A 是同一个人。

流式场景把难度推高。音频按小块到达，模型只能看到有限的右侧未来上下文，还要陆续给出结果。块间身份保持是最关键的约束：新块到来时不能把已见说话人换到另一个输出通道，也要能接纳新到达的说话人。低延迟要求输出帧步更细、缓冲更短，但注意力计算和缓存代价会上升，这就是本文要在精度、说话人数、时间分辨率和效率之间同时处理的原因。

**说话人日志 × 流式处理：** 说话人日志指对一段音频回答谁在何时说话，输出每个说话人随时间的话音活动，允许重叠；流式处理指音频按块到达、只允许有限未来上下文就要陆续输出结果，还要在块之间保持同一说话人身份不漂移。两者组合的难点是边界精度、重叠和新说话人到达都要在受限上下文下落到稳定的通道上。

### 已有路线为什么还留下一个缺口

端到端神经日志取代多阶段聚类流水线后，有两条主要扩展思路。一条用编码器加解码器吸引子容纳未知数量说话人，另一条用局部预测加全局向量聚类处理长录音和任意说话人库，Pyannote 和 DiariZen 属于后一种局部到全局设计。Sortformer 则走固定容量的端到端路线，用排列不变损失解决通道置换问题，再用到达时间排序监督把通道固定为按首次出现顺序排列。

流式方面，已有工作用有限上下文编码器、说话人追踪缓冲或分块说话人检测与表示来维持身份。Streaming Sortformer 加入到达序说话人缓存，使一个模型可以覆盖从离线到超低延迟的多种延迟配置。但原文明确指出其公开模型只支持 4 个说话人，且每 80 毫秒才给出一次预测。这就留下缺口：一个开放模型要在离线和低延迟流式下都有竞争力，同时支持更多说话人、更精确边界和高计算效率。

### 支持八人和 10 毫秒为什么会变贵

论文把 3 个耦合的代价讲得很具体。在到达序说话人缓存设计里，支持更多说话人需要更大的缓存来为每个身份保留足够证据，这直接增加推理代价。输出通道从 4 个加到 8 个后，典型录音中仍有通道长期空闲，高置信度的空通道误激活风险上升，也就是后文幻影说话人问题。

时间分辨率是另一处代价。如果把编码器直接跑在 10 毫秒帧步，序列长度变为 80 毫秒时的 8 倍，注意力代价大增。同时模型要对提供不同未来上下文的延迟配置都鲁棒，不能只为离线全上下文优化。因此设计目标是编码器保持高效的粗分辨率，输出头仍能做细粒度预测，并用训练策略同时暴露离线和多种流式上下文。

### 新模型把输入变成输出的完整链路

以一段多说话人混合音频为例。输入特征先经过 8 倍下采样特征堆叠，进入 31 层带旋转位置编码的纯 Transformer 编码器，编码器保持 80 毫秒帧步，输出粗粒度的每帧表示。这个选择替代了原来的 17 层 FastConformer 加 18 层 Transformer 堆叠，参数量从 117M 降到 99M。

编码器输出随后经过一个学习的 1 维子像素卷积，上采样 8 倍，输出头在等效 10 毫秒分辨率上预测 8 个说话人通道的语音后验。流式推理时，到达序说话人缓存容量从 188 帧增至 264 帧，用来容纳 2 倍的说话人数，并把原来用于分隔说话人的均值静音嵌入换成可学习嵌入。缓存按到达序维持通道排序，当前块的预测与缓存中的身份证据对齐后输出，从而跨块保持同一说话人落在同一通道。

**Sortformer × 到达序说话人缓存：** Sortformer 指用固定输出通道数、按说话人首次出现顺序分配通道的端到端日志范式，结合排列不变损失和到达时间排序监督解决通道与真值说话人的对应问题；到达序说话人缓存指在流式分块之间缓存按到达序排列的说话人证据，用来把当前块的通道顺序与历史身份对齐。两者搭配使同一个检查点能在不同输入缓冲延迟下运行。

### 主干和上采样各自解决什么

主干简化为纯 Transformer 有两个原文给出的理由。一是计算效率和可扩展性更好，二是与缓存的兼容性：缓存的说话人块并不构成连续时间序列，局部卷积可能在人为的块边界上混合不相关的状态。消融显示换回传统 FastConformer 编码器会在 30.4 秒和 0.32 秒延迟下分别带来约 0.94 和 1.27 个百分点的 DER 上升。

上采样层具体做法是宽为 3 的卷积把每个 H 维编码器状态映射到 8H 通道，再重排为 8 个连续的 H 维状态。编码器仍跑在 80 毫秒，输出头等效 10 毫秒，几乎不增加计算开销。消融区分了两种 80 毫秒对照：把 10 毫秒预测下采样到 80 毫秒再评分只上升约 0.6 个百分点，而训练和推理都去掉上采样、直接用 80 毫秒目标则上升超过 2 个百分点。这说明高分辨率输出的好处不只是评测粒度更细，高分辨率目标本身有助于学习短轮替和精确边界。

**排列不变损失 × 到达时间排序监督：** 排列不变损失指在所有说话人置换中取与预测最匹配的一种来算损失，不预先固定谁对应哪个输出通道；到达时间排序监督指强制输出通道按说话人首次出现先后排序，提供确定性对应。前者解决标签置换不定性，后者给出流式可维持的稳定排序，两者共同训练使模型既灵活拟合重叠又保持跨块一致。

### 两个辅助损失如何约束空通道和总体活动

除标准的排列不变损失和到达时间排序监督外，模型引入活动损失和幻影损失。活动损失是对 3 类排列无关帧活动类别的交叉熵：静音、单人语音、重叠语音，由独立辅助头从编码器表示预测。它不要求说话人归属，只监督总体语音活动，起到正则化作用。去掉它在两种延迟下 DER 都上升约 1 个百分点。

幻影损失针对在排列不变和到达排序两种对齐下都为空的通道。对每个空通道，只收集停止梯度后验大于阈值 0.25 的帧集合，每帧代价为非活动标签的负对数似然，再经归一化对数平均指数池化汇聚，温度系数为 0.5。直观理解是只盯住空通道里最突出的误激活，而不随选中帧数线性放大。

\[\mathcal{L}_{\mathrm{ph}}=\frac{\tau}{BS}\sum_{b=1}^{B}\sum_{s=1}^{S}\log\!\left[\frac{1}{|\mathcal{I}_{bs}|}\sum_{t\in\mathcal{I}_{bs}}\exp\!\left(\frac{\ell_{bts}}{\tau}\right)\right].\]

该损失去掉后 DER 几乎不变，但在离线和 0.32 秒延迟下说话人数平均绝对误差分别从 0.157 升至 0.222 和从 0.270 升至 0.491，证实它的作用是减少高估人数而非直接拉低 DER。

**活动损失 × 幻影损失：** 活动损失指不区分说话人身份、只预测每帧是静音、单人说话还是重叠的辅助分类任务，用来正则化编码器对总体语音活动的建模；幻影损失指对在两种主对齐下都为空的通道、只惩罚其中高置信度的误激活，用来抑制空通道的虚假说话人。两者分工为一个管整体活动是否漏检，一个管多余通道是否虚报。

### 数据、两阶段训练和增强怎样组织

训练数据包括约各 5000 小时的人工标注和伪标签真实录音，以及约 82600 小时仿真多说话人混合。真实部分覆盖 AISHELL-4、AliMeeting、AMI、CALLHOME 第一部分、DIHARD III 开发集、DiPCo、DISPLACE 系列、Fisher、ICSI、NOTSOFAR-1、VoxConverse 等多域语料，另有约 1000 小时授权 David AI 英语 3 到 4 人会话，以及用 9 个 Sortformer 集成经 DOVER-Lap 伪标注的 5000 小时 YODAS-v2 多说话人子集。仿真混合为 1 到 8 人、每段 180 到 200 秒，用 FastMSS 按 Mind the Gap 协议生成，并用蒙特利尔强制对齐器得到紧凑的说话活动区间。

训练分 2 个阶段，在 64 张 A100 上用 NeMo 语音框架进行。第一阶段为离线 Sortformer 训练，只用仿真混合，编码器用在 Granary-v2 扩展子集上自监督预训练的 NEST Transformer 初始化，随机取 60 秒块，损失权重为排列不变 0.5、到达排序 0.5、活动 0.5、幻影 0，不启用上采样层。第二阶段为带缓存的流式微调，同时用真实和仿真数据，构造 105 秒样本并以 0.5 概率拼接同一源录音的不同位置片段，偏向采样含更多活动说话人的样本，损失权重为 0.75、0.25、0.5 和 0.1，上采样层以重复每个编码器状态的方式初始化并用 10 毫秒目标联合训练。

每个批次以 0.5 概率加入块因果尾部掩码，即双向前缀加随机划分的 1 到 8 帧块，块内双向、块间只能看前缀和 earlier 块，使同一检查点见过全上下文和多种流式上下文。2 阶段都用最多 24 个特征 bins 的两个频率掩码做 SpecAugment。

### 在哪些数据和指标下比较

评测集包括 DIHARD III 评测集、CALLHOME 第二部分、AliMeeting 近场和远场、AMI headset 混合与单远场麦克风、NOTSOFAR-1 多 headset 混合与单通道条件，覆盖每段 1 到 9 人不等。所有重叠语音都参与评分，CALLHOME 用传统 0.25 秒领宽，其余用 0 领宽。需要特别注意，AMI、AliMeeting 和 NOTSOFAR-1 采用强制对齐参考标签，而非把段内大段静音标成语音的原始段级标注，因此带星号的外部历史最优值与本文数字不可直接比较。

基线为上一代 4 说话人 Streaming Sortformer-v2.1 和最强离线系统 DiariZen。延迟取原 Streaming Sortformer 研究的 3 个输入缓冲：30.4 秒、1.04 秒和 0.32 秒。推理速度用音频时长除以处理耗时定义的实时因子加速比，在 RTX PRO 5000 上以 bf16、批 1 和批 32、是否开动态编译分别测量。下游用 tcpWER，以 meeteval 默认 5 秒领宽计算，分别接离线 DiCoW 大模型和流式 Multitalker-Parakeet。

**DER × tcpWER：** DER 指按时间帧统计的日志错误率，包含错分、漏检和误报，受标注风格和领宽影响大；tcpWER 指带时间约束、按最小置换对齐的说话人归属词错误率，衡量下游多说话人语音识别的转写质量。两者组合的意义是 DER 看帧级划分是否准确，tcpWER 检验这种划分在不同标注协议下是否真的改善转写。

### 不同延迟下日志精度发生了什么

下表比较离线与 3 种流式延迟下的 DER，数值越低越好，CALLHOME 领宽 0.25 秒其余 0 秒，全部重叠参与评分。比较问题是同一任务和评测划分下，新模型相对上一代流式模型和离线最强基线是否全面更优，以及延迟缩短时代价多大。

| System | Latency | DH3 | CH | Ali-Near | Ali-Far | AMI-MHM | AMI-SDM | NSF1-MHM | NSF1-SC |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DiariZen | offline | 14.5 | 14.68 | 16.78 | 10.8∗ | 15.56 | 13.9∗ | 14.20 | 16.7∗ |
| Sortformer-v2.1 | 30.4 s | 19.09 | 10.32 | 11.57 | 13.69 | 15.81 | 21.42 | 21.77 | 30.49 |
| Nemotron 3 Diarization | 30.4 s | 12.73 | 9.10 | 6.40 | 10.47 | 9.25 | 11.14 | 6.77 | 11.00 |
| Sortformer-v2.1 | 1.04 s | 19.60 | 11.31 | 12.47 | 15.58 | 16.36 | 21.73 | 22.12 | 31.81 |
| Nemotron 3 Diarization | 1.04 s | 13.18 | 10.29 | 6.59 | 10.80 | 9.48 | 12.80 | 7.70 | 12.77 |
| Sortformer-v2.1 | 0.32 s | 19.85 | 12.67 | 13.68 | 16.85 | 17.77 | 23.89 | 23.37 | 32.95 |
| Nemotron 3 Diarization | 0.32 s | 13.55 | 11.32 | 7.19 | 11.60 | 10.05 | 12.95 | 8.65 | 14.53 |
| SOTA 09/2026 | offline | 14.1 [30] | 10.08 [5] | 8.60∗ [2] | 10.6∗ [30] | 11.06∗ [2] | 13.7∗ [30] | — | 16.5∗ [30] |

新模型在 3 个延迟下对所有评测集都优于上一代，在可直接比较的条件下也优于离线 DiariZen。把缓冲从 30.4 秒缩到 0.32 秒，DER 上升 0.79 到 3.53 个百分点，呈现平缓退化。论文据此称在 DIHARD III 和 CALLHOME 上建立 DER 新最优；对 AMI、AliMeeting 和 NOTSOFAR-1 因参考标签不同而不正式宣称最优，这个限定必须保留。未胜出的一面是低延迟仍有代价，例如 NOTSOFAR-1 单通道在 0.32 秒时为 14.53%，明显高于 30.4 秒时的 11.00%。

### 效率提升是否以牺牲容量为代价

下表比较训练与推理效率，推理指标为实时因子加速比越高越好。比较问题是说话人容量翻倍后，训练内存、训练速度和推理吞吐是否仍能改善。

|  |  | Batch 1 | Batch 1 | Batch 32 | Batch 32 |
| --- | --- | --- | --- | --- | --- |
| Model | Latency | eager | comp. | eager | comp. |
| DiariZen | offline | 20 | – | 44 | – |
| Sortformer-v2.1 | 30.4 s | 874 | 1468 | 3204 | 2619 |
| Nemotron 3 Diarization | 30.4 s | 1340 | 4385 | 12196 | 15113 |
| Sortformer-v2.1 | 1.04 s | 16 | 42 | 193 | 136 |
| Nemotron 3 Diarization | 1.04 s | 38 | 164 | 581 | 865 |
| Sortformer-v2.1 | 0.32 s | 8 | 21 | 101 | 76 |
| Nemotron 3 Diarization | 0.32 s | 12.5 | 54 | 199 | 292 |

训练侧在 64 卡 bf16 混合精度下，简化主干相对同等配置的传统 FastConformer 编码器减少 2.8 倍内存、迭代快 2.2 倍。推理侧即使容量翻倍，新模型在各延迟和批大小下都大幅领先上一代，30.4 秒延迟批 32 编译后可达 15113，0.32 秒超低延迟批 1 编译后为 54，支持单卡多并行会话。限制是编译测量扣除了首次图编译开销并经预热后采集，实际冷启动和短音频首包延迟不在该数字内；DiariZen 离线批 1 仅为 20，与流式模型的延迟定义也不同，不宜直接等同部署延迟。

### 下游转写是否也跟着变好

下表比较下游多说话人识别的 tcpWER，数值越低越好，分为流式 Multitalker-Parakeet 和离线 DiCoW 两组，硬表示段级日志条件，软表示后验条件。比较问题是日志改进能否跨标注协议迁移到转写，而不只是与强制对齐参考更一致。

|  | AMI | AMI | NSF1 | NSF1 |
| --- | --- | --- | --- | --- |
| Diarization | MHM | SDM | MHM | SC |
| Streaming: Multitalker-Parakeet-v1 (1.12 s latency) |  |  |  |  |
| Ground truth (oracle) | 12.66 | 17.79 | 16.86 | 26.34 |
| Sortformer-v2.1 | 18.64 | 34.13 | 35.59 | 51.35 |
| Nemotron 3 Diarization (hard) | 13.84 | 21.18 | 18.68 | 31.65 |
| Offline: DiCoW-v3.3-large (greedy decoding) |  |  |  |  |
| Ground truth (oracle) | 11.72 | 15.27 | 8.78 | 15.45 |
| DiariZen | 15.17 | 19.32 | 18.57 | 25.63 |
| Sortformer-v2.1 | 18.17 | 30.11 | 30.14 | 42.56 |
| Nemotron 3 Diarization (hard) | 12.65 | 17.19 | 10.47 | 19.23 |
| Nemotron 3 Diarization (soft) | 12.35 | 17.06 | 10.30 | 18.95 |
| SOTA 09/2026 | 15.2 [35] | 18.5 [35] | N/A | 23.63 [29] |

在离线 DiCoW 上，新模型硬条件已大幅优于两个基线，软条件在 4 个条件下进一步降低 tcpWER，论文称这是首次用 DiCoW 观察到一致的软优于硬。在 NOTSOFAR-1 单通道上软条件达到 18.95%，优于 CHiME-8 冠军系统的 23.63% 全局池化口径。流式 Parakeet 上新模型相对上一代也大幅降低 tcpWER。限制是 oracle 用真值日志仍明显更好，说明日志仍是瓶颈；外部最优值的标注和平均方式不同，跨表直接排名需回到相同参考和聚合口径下复核。

### 每个改动拿掉后差多少

下表在合并评测集上做全局池化、0 领宽 DER 消融，报告 30.4 秒和 0.32 秒两种延迟及其相对完整模型的绝对变化，正值表示变差。比较问题是主干、初始化、分辨率、损失、增强和数据各自贡献多大。

|  | 30.4 s | 30.4 s | 0.32 s | 0.32 s |
| --- | --- | --- | --- | --- |
| System | DER | Δ | DER | Δ |
| Nemotron 3 Diarization | 10.42 | – | 12.06 | – |
| FastConformer enc. | 11.36 | +0.94 | 13.33 | +1.27 |
| no NEST initialization | 12.05 | +1.63 | 14.28 | +2.22 |
| downsampled (80 ms) | 11.09 | +0.67 | 12.67 | +0.61 |
| no upsampling (80 ms) | 12.69 | +2.27 | 14.09 | +2.03 |
| no phantom loss | 10.41 | -0.01 | 12.15 | +0.09 |
| no activity loss | 11.42 | +1.00 | 13.03 | +0.97 |
| no SpecAugment | 10.88 | +0.46 | 12.47 | +0.41 |
| no block-causal tail | 10.50 | +0.08 | 12.36 | +0.30 |
| no simulated data | 13.40 | +2.98 | 15.21 | +3.15 |
| no David AI data | 11.19 | +0.77 | 12.83 | +0.77 |
| no YODAS data | 10.81 | +0.39 | 12.38 | +0.32 |

去掉仿真数据退化最大，两种延迟分别上升约 2.98 和 3.15 个百分点；去掉 NEST 初始化上升约 1.63 和 2.22 个百分点，说明大规模自监督预训练和仿真混合最关键。去掉 David AI 和伪标签 YODAS 也分别带来约 0.77 和约 0.3 到 0.4 个百分点的上升。块因果尾部在 30.4 秒几乎无影响，在 0.32 秒改善约 0.3 个百分点，符合其为低延迟设计的定位。论文提醒每次消融只有单次训练运行，只报告观察到的效应量而不做显著性断言，小差异需谨慎解读。

### 这些结论在什么边界内才成立

首先是说话人数边界。模型固定支持 8 个说话人，评测覆盖到 DIHARD III 最多 9 人和 NOTSOFAR-1 最多 7 人，超出容量的长尾情况未被验证。其次是标注口径边界。AMI 等集的改进数字依赖强制对齐参考，换回原始标注后与历史最优不可比，下游 tcpWER 正是为跨协议验证而补的证据。

其次是延迟边界。论文只报告到 0.32 秒的详细精度，虽然同一检查点可跑到 0.08 秒缓冲，但精度进一步下降且未列出可比数字，不能把超低延迟的效率数字外推为精度不变。消融为单次运行，小幅差异可能是随机波动。效率数字绑定具体硬件、精度和批大小，换卡、换批或计入编译与预热后结论会变。

### 想复现和试用第一步做什么

值得尝试的情形是需要一个检查点同时覆盖离线和流式、支持最多 8 人且要 10 毫秒级边界，并希望直接条件反射到 DiCoW 或流式多说话人识别上。复现第一步是按 NeMo 语音框架的公开离线与流式配置文件恢复 2 阶段训练超参数与损失权重，再准备仿真与真实数据的混合管线，注意仿真需用强制对齐得到紧凑活动区间，流式阶段需实现 105 秒拼接采样和块因果尾部掩码。

在机制分工上，纯 Transformer 编码器保持 80 毫秒步长以控制注意力开销，顶层 1 维子像素卷积再上采样 8 倍得到 10 毫秒输出头，兼顾边界精度与效率；到达序说话人缓存将容量从 188 帧增至 264 帧以容纳 8 个身份，并用可学习嵌入替代平均静音嵌入分隔说话人。训练目标分工为排列不变损失与到达时序损失负责通道分配，活动损失对静音、单人、重叠 3 类做无排列正则，后者在编码器表示上另设辅助头。

幻影损失只对两类对齐下均为空的通道中后验高于 0.25 的帧施加非激活负对数似然，并经温度 0.5 的归一化对数平均指数池化强调最强误激活。执行过程分 2 个阶段：先只用仿真混合做离线训练并从 NEST 自监督 Transformer 初始化，随机取 60 秒块，损失权重为 0.5、0.5、0.5、0。

再开缓存做流式微调并引入上采样层，105 秒样本以 0.5 概率拼接同一源不同位置的两段并偏向多说话人采样，权重改为 0.75、0.25、0.5、0.1，每批以 0.5 概率加块因果尾部掩码，双向前缀后接 1 至 8 帧随机分块以同时暴露离线与多种流式上下文，2 阶段均加至多 24 频带的双频掩码 SpecAugment。

论文正文提及了训练代码与权重许可相关表述，但本次资源身份核验仅见到第三方提及链接可达，没有归属明确且 availability 为 available 的作者资源，因此这里不作作者侧提供状态的肯定断言，本次仅核验到论文提及的第三方仓库与模型页面链接可达，这不等同于作者侧提供状态已确认。代码、权重与系统复现是三件事，需分开确认。还需补的验证包括目标域微调增益、8 人以上或极高重叠长录音的表现，以及在自己硬件上的冷启动延迟与批 1 流式吞吐。

### 一句话总结与下一步

总体看，该工作把编码器留在高效的 80 毫秒、把输出做到 10 毫秒，用更大的到达序缓存支撑 8 个通道，再以活动损失保总体活动、以幻影损失压空通道虚报，并用混合数据与可变上下文训练兼顾离线和流式。证据支持它在给定评测和标注口径下同时改善精度与效率，并把增益传递到下游转写。

未来工作指向继续扩展说话人数、用更大合成与伪标签语料扩大规模，以及更直接地接入多模态语音大模型做端到端会话推理。对初学者而言，复述时抓住这条主线即可：粗分辨率编码保效率，学习上采样保边界，大缓存保身份，两个辅助损失分别保活动与人数，再用跨延迟训练保同一个模型多处可用。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2611.12246v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-12/)
