---
title: "TurnFSM for Full-Duplex Dialogue System: Internalizing State-Machine Logic for Streaming Semantic Voice Activity Detection and Utterance-Level Rejection"
date: 2026-09-08
draft: false
tags: [轮次切换, 状态空间模型, 流式处理, 语音, 大语言模型]
categories: [论文速递]
description: "TurnFSM 把语义 VAD 与 utterance 级拒绝写成先提交后接受或拒绝的有限状态转移并用一阶依赖实现流式预测，在内部语义 VAD 上报告成功率 82.41% 与成功延迟 80.9 ms，在拒绝上报告 FAR 3.35% 与 FRR 16.04%，代价是仍需两阶段对齐与大模型推理开销。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.04240"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "把级联状态机装进大模型：TurnFSM 如何串行做提交与拒绝"
paper_digest_original_title: "TurnFSM for Full-Duplex Dialogue System: Internalizing State-Machine Logic for Streaming Semantic Voice Activity Detection and Utterance-Level Rejection"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.04240"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.04240.pdf"
paper_digest_primary_task: "轮次切换"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.turn-taking","label":"轮次切换"},{"facet":"method","id":"method.state-space","label":"状态空间模型"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"}]
paper_digest_primary_method: "状态空间模型"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "TurnFSM 把语义 VAD 与 utterance 级拒绝写成先提交后接受或拒绝的有限状态转移并用一阶依赖实现流式预测，在内部语义 VAD 上报告成功率 82.41% 与成功延迟 80.9 ms，在拒绝上报告 FAR 3.35% 与 FRR 16.04%，代价是仍需两阶段对齐与大模型推理开销。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhiwei Lin"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Tianjiao Du"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Qiaochu Huang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zihan Zhang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Naijun Zheng"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Longshuai Xiao"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Yunfei Lu"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jun Chen"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Zhiyong Wu"}]
paper_digest_abstract_sha256: "77af7f3be7690ca15806e553db56397e7d45d22c9447e35d46eb789a4095ebc6"
paper_digest_sidecars: {"citation.bib":{"sha256":"85313af8e8547d21ade8d789ee9ff99e61f716ec17bc06675e701e30b1ff8546","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04240/citation.bib"},"citation.json":{"sha256":"f5a83552b4ca8ddf7df0d0fc72947e93b66db2c93c43382ee617f4b8e8c389cd","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04240/citation.json"},"citation.ris":{"sha256":"1611547bcba6cc9d2ac72f8b9d2d9a728a16dd81ac0effeafaea65a4ce7ef415","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04240/citation.ris"},"rethink-context.json":{"sha256":"eb8e39f36d84fd3960f98c4972b42a2dcc63966a511673dd2e2396b31213f7a5","url":"/audio-paper-digest-blog/data/papers/2026-09-08/2609-04240/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "9924dad5682aaf9b2a033c6128b5a12469b162d94e881aa3bb19e50c3dc82147"
paper_digest_api_reader_plan_sha256: "efefecb3a273ae485977d388152b74cf2cc589da57d166ce3a0a018b9c720898"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2f1a9effe30d39567e247db1f330f0ca8c02515319eb519f0ef194e68856f157"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "7f58ab3b50ac455623c8bb543203c968ccce33cfd2394b12856f33f3dba9f4fa"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "83da61819521f43a681c4eb09c35ae19a7d7d54e18749b0b8c3544a0505eb512"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "caa5f9fe709ced13abef6f2f8ce0b50b94fcd3d6fea262bab93a26f08a7f7a03"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 把级联状态机装进大模型：TurnFSM 如何串行做提交与拒绝

> 英文题目：*[TurnFSM for Full-Duplex Dialogue System: Internalizing State-Machine Logic for Streaming Semantic Voice Activity Detection and Utterance-Level Rejection](https://arxiv.org/abs/2609.04240)*

> 标签：#轮次切换 | #状态空间模型 | #流式处理 | #语音 | #大语言模型
>
> 评分：**6.4/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Zhiwei Lin：机构信息未在 arXiv HTML 中可靠披露
- Tianjiao Du：机构信息未在 arXiv HTML 中可靠披露
- Qiaochu Huang：机构信息未在 arXiv HTML 中可靠披露
- Zihan Zhang：机构信息未在 arXiv HTML 中可靠披露
- Naijun Zheng：机构信息未在 arXiv HTML 中可靠披露
- Longshuai Xiao：机构信息未在 arXiv HTML 中可靠披露
- Yunfei Lu：机构信息未在 arXiv HTML 中可靠披露
- Jun Chen：机构信息未在 arXiv HTML 中可靠披露
- Zhiyong Wu：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

全双工语音助手需在系统发声的同时持续监听，输入为混有回声、背景人声与环境噪声的流式音频，输出为提交时机与接受或拒收决策，难点在于低延迟流式约束下语义完整性与输入有效性判据异构且易互相干扰。TurnFSM先由流式音频编码器与适配器将声学帧映射为大语言模型音频token，再由大语言模型以上一状态为条件预测当前有限状态，串行完成监听阶段语义提交判断与提交后有效性判断。与同骨干并行双头相比，该机制将异构判据解耦到不同状态阶段并用一阶依赖消除历史状态累积。在内部800条语义端点检测测试上TurnFSM成功率为82.41%，超时率为5.53%，成功平均延迟为80.9 ms，优于同骨干双头基线并接近单任务模型。在内部3K条拒收测试上误接受率为3.35%，误拒绝率为16.04%，略优于单任务拒收模型。在EasyTurn话语级完整性测试上总准确率为91%，高于TEN与Smart Turn但落后Easy Turn约6个百分点。该结论限于中文为主的内部数据与模拟流式评测，未验证强重叠打断与跨语言泛化。原文未披露训练时长、推理吞吐与部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/pipecat-ai/smart-turn> — 暂时无法访问

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，系统要在边说边听中解决什么？

本文的输入是连续到达的麦克风音频流，目标是在系统自己也在发声的全双工条件下，持续判断用户是否在说话、何时把一段语音提交给对话系统、以及提交后是否应该过滤掉。初学者可以把全双工理解为电话中的抢话与打断许可，系统不能等用户整句结束才开始处理，也不能把回声、背景聊天和环境噪声当成有效指令。

这里先解释两个关键词。全双工指系统发声与监听同时进行，允许重叠与打断。流式推理指音频按固定帧率逐块到达，模型必须增量更新判决，不能回看未来，也要控制延迟与算力。原文把挑战归纳为低延迟与资源受限下的语音分段、提交时机与无效输入拒绝。

**全双工 × 流式推理：** 全双工负责描述系统边说边听并允许随时打断的交互形态，流式推理负责描述音频逐块到达即逐块更新状态的运行约束，二者搭配的理由是打断与重叠语音要求低延迟在线判决而不能等整句结束，组合意义是所有提交拒绝逻辑都必须在 40 ms 到 80 ms 级帧率下增量执行。

本文要保留的关键信息是任务边界。语义语音活动检测判断已观测前缀是否语义完整，若不完整则继续等待，直到完整或超时。utterance 级拒绝在提交后判断整段是否为有效意图输入，包括声学无效与语义有意义但非意图两种过滤对象。下游对话理解与生成只处理被接受的话语。

学习依赖上，本节先建立交互形态与流式约束，后续才能理解为什么端到端大模型与级联管线各有代价，以及为什么作者选择把级联逻辑内化为状态转移而不是再加一个外部状态机。

### 已有两条路线各自卡在哪里？

第一条路线是端到端全双工模型，把流式轮次控制与对话生成放在统一语音语言模型里。好处是接口干净，能自然处理重叠与插话。原文指出的风险是语音模态对齐可能影响预训练获得的文本推理能力，且语义等价的语音与文本输入仍可能导致内部表示或输出分布不一致，进而影响复杂推理与工具调用等能力的稳定性。

第二条路线是工业常见的级联控制管线。声学 VAD 先切出语音区，语义 VAD 再判断是否语义完整，不完整则等待更多音频并更新判决，直到完整或超时，提交后再由 utterance 级拒绝过滤无效输入。好处是实用稳健，代价是额外推理开销、跨阶段误差传播，以及需要手工设计协调多模块的状态机。

介于两者之间的一种简化是共享流式主干加多个预测头，例如一个头判语义完整性，另一个头判接受或拒绝。原文认为这仍有问题，因为两个判决依据不同，前者看前缀是否完整，后者还要看噪声、回声与异常语音等声学线索，把异构判决当作并行标签在共享表示上联合优化可能引入梯度冲突与表示干扰。

因此本文不是在比较谁的语言模型更大，而是比较控制结构。后续方法节需要回答如何把并行多任务改成按状态串行的 2 阶段判决，以及如何让训练与推理的上下文形式保持一致。

### 并行双头基线的问题形式是什么？

把问题形式化有助于看清干扰来源。双头基线在每个时刻基于声学前缀同时输出完整性与有效性两个二分类，共享主干需要同时编码语义完整性线索与声学异常线索。当两类线索要求不同的特征加权时，联合目标可能让表示在两者之间摇摆。

举一个教学例子帮助理解，但它不是论文实验。假设用户说今天天气怎么样，中间有一个停顿，语义 VAD 需要等待后半句，而拒绝模块需要判断停顿段的呼吸噪声不是有效指令。若同一表示既要记住不完整语义以便继续等待，又要强调噪声特征以便拒绝，就可能互相牵制。例子仅用于说明异构依据，不代表论文报告了该样本的效果。

TurnFSM 的思路是不要在同一时刻同时回答两个问题，而是让模型先处在监听阶段只回答是否提交，进入提交后再回答接受还是拒绝。这样共享表示在每个状态下只需关注当前阶段相关的线索。

下一节将给出状态集合与转移路径的全景，再进入 1 阶依赖的具体计算。

### TurnFSM 把级联逻辑装进模型的全景是什么？

TurnFSM 由流式音频编码器、音频适配器与大模型主干组成。编码器先用两层类 VGG 卷积做 4 倍下采样，再用 6 层 Conformer 编码，输出 25 Hz 声学帧，约每 40 ms 1 帧。适配器是轻量多层感知机再做 2 倍下采样，把声学表示映射到大模型输入空间，最终音频词元率为 12.5 Hz，约每 80 ms 一个词元。大模型主干采用 Qwen2.5-7B-Instruct，用于流式状态预测。

沿一个样本走一遍有助于建立直觉。底部波形例如今天加停顿加天气怎么样，先被编码器转成帧序列，再经适配器变成 A0 到 At。系统提示与历史经文本嵌入进入大模型左侧，右侧紧凑音频序列加前一状态 St-1 进入大模型右侧，大模型输出当前状态 St。若 St 仍是监听，则继续累积音频，若变为提交，则进入接受或拒绝判决。

下图展示了这种紧凑输入与单步输出的总体结构，左侧文本条件与右侧音频状态条件共同进入同一大模型，但控制判决只通过状态词元表达。

> **看图路径：** 1. 先沿底部波形经音频编码器与适配器到绿色音频词元的主路径看输入方向；2. 再看右侧虚线框内 A0 至 At 与橙色 St-1 如何拼成紧凑序列进入大模型；3. 最后看顶部输出 St 与左侧系统提示历史文本嵌入的汇合方式

> **论文图 1（像素未随页面持久化）**：Figure 1: The model architecture of TurnFSM, where A denotes audio tokens and S denotes state tokens. At time step t, the model takes the audio tokens A_{0}, A_{1}, …, A_{t} and the predicted state token from the previous time step, S_{t-1}, as input to predict the current state token S_{t}.

*论文图 1。原论文 Figure 1:：“The model architecture of TurnFSM, where A denotes audio tokens and S denotes state tokens.”。*

从图中可见的关键是输入不累积全部历史状态，只保留紧邻前一状态。音频词元保持时间顺序，状态词元作为控制相位标记紧跟在音频前缀之后。这种设计把外部手工状态机的阶段信息变成模型内部可学习的转移条件，为后文的 1 阶机制留下接口。

### 六个状态如何把提交与拒绝分到不同阶段？

TurnFSM 维护离散控制状态，状态集合包括起始、静音、监听、提交、接受与拒绝。起始是处理任何输入之前的伪初始词元。静音对应非用户语音，包括静音与背景噪声，此时持续监测但不缓存候选片段。监听是在检测到语音起始后进入的主动监听状态，累积声学帧作为候选话语。提交是判定缓存片段语义完整或触发超时后的承诺状态，片段被定稿并送入 utterance 级验证。接受与拒绝是终态，分别表示应交给对话模型处理与应过滤掉。

下图给出了状态转移逻辑的像素级结构，蓝色圆圈为中间控制状态，红色与绿色分别为拒绝与接受终态，箭头标注了转移条件。

> **看图路径：** 1. 先按 START 经 begin 到 SILENCE 再到 LISTEN 的主链确认正常监听路径；2. 再对比 LISTEN 自环与转向 SUBMIT 的两条标注看完整性判决条件；3. 最后看 SUBMIT 分叉到 ACCEPT 与 REJECT 的有效性判决条件

> **论文图 2（像素未随页面持久化）**：Figure 2: The state transition logic of TurnFSM.

*论文图 2。原论文 Figure 2:：“The state transition logic of TurnFSM.”。*

从该图出发，正常路径是 START 经开始进入 SILENCE，无声或噪声时自环，有声时进入 LISTEN。LISTEN 在语义不完整时自环，在语义完整或超时时进入 SUBMIT。SUBMIT 再按有效声与无效声分叉到 ACCEPT 或 REJECT。拒绝覆盖声学无效输入与背景交谈等非意图但语义有意义的音频。

**语义 VAD × utterance 级拒绝：** 语义 VAD 负责判断当前累积音频前缀是否构成语义完整话语，决定继续等待还是提交，utterance 级拒绝负责判断已提交片段是否为有效意图输入，需要结合语义与噪声回声等声学线索，二者搭配的理由是级联管线本来就是先提交后过滤，组合意义是把并行多头同时优化改为按状态分阶段决策，减少异构线索在共享表示上的干扰。

双头基线把完整性与有效性写成两个并行条件概率，形式如下式所示，两个头都只看声学前缀。

\[p_{\theta}(c_{t}\mid A_{\leq t}),\qquad p_{\theta}(r_{t}\mid A_{\leq t}),\]

TurnFSM 则把轮次控制写成有限状态转移，当前状态只依赖声学前缀与紧邻前一状态，如下式所示。当 St-1 为监听时模型聚焦语义完整性并决定是否转到提交，当 St-1 为提交时模型评估已提交片段是否为有效意图并转到接受或拒绝。

\[p_{\theta}(S_{t}\mid A_{\leq t},S_{t-1}).\]

**有限状态机 × 1 阶状态转移：** 有限状态机负责给出离散控制阶段与允许的转移路径，1 阶状态转移负责限定当前状态只依赖声学前缀与紧邻前一状态，分工上前者解决做什么决策，后者解决用多少历史做决策，搭配理由是前一状态已指明是判完整性还是判有效性，组合意义是用紧凑输入实现与训练一致的高效推理。

这种串行分解的意义是共享表示不必同时编码异构任务线索。监听阶段可以偏向语义内容一致性，提交后阶段可以偏向声学异常与意图有效性，从而缓解并行优化的冲突。

### 如何训练一阶依赖并保持推理紧凑？

朴素的词元级实现会把音频与状态词元交错排列并用标准因果掩码训练，此时预测 St 会看到全部历史状态，即依赖声学前缀与 S 小于 t 的全部历史。原文认为更早的状态提供的新证据有限，因为紧邻前一状态已指明当前控制阶段与应做哪类判决，而累积历史还会增加上下文长度与推理开销。

朴素历史依赖的形式如下式所示，它是本文要避免的训练目标形态。

\[p_{\theta}(S_{t}\mid A_{\leq t},S_{\lt t}).\]

为强制 1 阶依赖，训练时构造交错音频状态序列并修改注意力掩码，使每个 St 只允许注意 A 小于等于 t 与 St-1，屏蔽更早状态。下图左面板展示了训练时交错形式的掩码，绿色为未遮挡，白色为遮挡，右面板展示了推理时紧凑形式的标准下三角掩码。

> **看图路径：** 1. 先看左图查询行 S0 至 S2 所在绿色未遮挡格只对应声学前缀与前一状态；2. 再看底部输入行位置编号如何把状态词元与后一音频词元系到同一位置；3. 最后对比右图紧凑序列的标准下三角掩码与单步预测 S3 的输入构成

> **论文图 3（像素未随页面持久化）**：Figure 3: Illustration of the proposed masking and position-tying strategy, where S^{\prime} denotes the pseudo-initial state <|Start|> and PE denotes positional encoding. (a) During training, a modified causal mask over the interleaved audio-state sequence restricts each S_{t} to attend only to A_{\leq t} and S_{t-1}. State tokens are position-tied to the following audio tokens, i.e., \pi(S_{t-1})=\pi(A_{t+1}), to preserve the original acoustic temporal order. (b) During inference, TurnFSM predicts S_{t} from the compact sequence (A_{0},\ldots,A_{t},S_{t-1}) using the standard lower-triangular causal mask and the original LLM positional encoding.

*论文图 3。原论文 Figure 3:：“Illustration of the proposed masking and position-tying strategy, where S^\prime denotes the pseudo-initial state <|Start|> and PE denotes positional encoding.”。*

从像素上看，左图查询行 S0 至 S2 的绿色格集中在对角附近的声学键与紧邻前一状态列，而不是整行历史状态。右图输入只有 A0 至 A3 加 S2，并单步预测 S3，不需要逐步生成中间历史状态。底部位置编码行显示状态词元与后一音频词元共享位置编号。

位置绑定的具体规则是把每个状态词元系到后一个音频词元的位置，以保留原声学时间顺序，避免插入状态词元推移声学位置。At 加 1 仅作训练交错序列中的位置参考，不作为预测 St 的输入。

\[\pi(<|Start|>)=\pi(A_{1}),\qquad\pi(S_{t-1})=\pi(A_{t+1}).\]

**注意力掩码修改 × 位置绑定：** 注意力掩码修改负责在交错音频状态序列上切断对更早状态的注意力，只保留声学前缀与前一状态，位置绑定负责把状态词元的位置编码系到后一个音频词元以保留原声学时间顺序，二者搭配是因为只改掩码仍会让插入的状态词元推移位置，组合意义是让交错训练学到的转移可以直接用于紧凑推理序列。

训练过程分 2 个阶段。第 1 阶段冻结音频编码器与大模型，只训练音频适配器做模态对齐，对齐数据为开源语音语料上的语音识别任务，包括 AISHELL-1、AISHELL-2 与 WenetSpeech，共 11200 小时音频。第二阶段解冻适配器与大模型，优化状态预测目标。音频编码器初始化自内部预训练流式语音识别模型，预训练细节未报告。

**跨模态对齐 × 状态预测：** 跨模态对齐负责把音频编码器输出经适配器映射到大模型输入空间，状态预测负责在冻结解除后学习状态转移目标，前者分工是解决听得懂，后者分工是解决何时提交与接受拒绝，搭配理由是未经对齐的声学表示会让语义完整性判断提前或滞后，组合意义是先稳定表示再学控制。

推理时模型直接用紧凑序列预测当前状态，使用标准因果掩码与原大模型位置编码，既避免历史状态累积，也支持流式逐块判决与 utterance 级整句单次前向两种模式。

### 数据、基线与指标在什么条件下比较？

状态预测训练使用两个内部数据集。从起始到提交的转移用内部语义 VAD 数据集，训练样本 70000 条，测试样本 800 条，训练集共 194 小时，有停顿与无停顿样本各半，每条为语义完整句子并由人工标注声学起点与终点。从提交到拒绝或接受的转移用内部拒绝检测数据集，训练样本 700000 条，测试样本 3000 条，训练集共 2000 小时，正负样本均衡，覆盖多种真实场景。

对齐阶段在 16 张 Ascend 910b 上以学习率 6e-5 与批量 256 训练 2 轮，状态预测阶段在 64 张 Ascend 910b 上以学习率 2e-5 与批量 64 训练 4 轮。复现时需要区分开源对齐语料与内部状态数据集的可获得性，前者可按论文列出的语料复现思路，后者只能用自有标注或公开替代集重新构造。

语义 VAD 指标包括成功率、早切率、超时率、成功样本平均延迟与总体平均延迟。早切指预测语义终点早于人工终点，容差为正负 100 ms，容差内视为正确。超时指语义完整话语被误判为不完整而拖到超时。成功率为排除早切与超时后的比例。成功延迟为成功预测中预测终点与标注终点的时间差均值，总体延迟对成功与超时一起平均，超时样本按 2000 ms 计。拒绝指标为错误接受率与错误拒绝率。

基线包括双头分类基线、VAD 专用与拒绝专用单任务模型，以及 3 个开源语义 VAD 模型。开源基线多为离线模型，不直接输出在线时间戳，论文用 Silero VAD 切块后增量输入模拟流式。其中 TEN Turn Detection 为文本模型，需先用 Paraformer 转写再输入文本。Smart Turn 输出连续完整概率 p，论文按等待时间公式将其转为自适应等待策略，p 越大等待越短。

比较的公平条件需要留意。TurnFSM 与双头基线共享主干思路，适合检验状态建模本身的增益。与 VAD 专用和拒绝专用模型的比较检验串行统一是否接近单任务上限。与开源模型的比较还叠加了模拟流式切块与等待策略的差异，解读时应把策略影响与模型能力分开。

### 主结果在相同任务上支持什么判断？

本节回答两个问题。在流式语义 VAD 上，统一状态模型是否接近专用模型并优于并行双头。在拒绝与 utterance 级完整性上，是否保持竞争力。指标方向为成功率与准确率越高越好，早切率、超时率、错误接受率与错误拒绝率越低越好，延迟越低越好。

下表整理了流式语义 VAD 的关键对照，重点比较 TurnFSM 与 VAD 专用模型在可运行策略下的实际判决结果，并用定性描述说明并行双头基线的退化方向，避免引用无逐字来源句支持的延迟数值。

| 条件 | 指标 | TurnFSM | VAD 专用模型 | 双头基线方向 |
| --- | --- | --- | --- | --- |
| 内部语义 VAD 测试集 | 成功率 | 82.41% | 81.90% | 更低 |
| 内部语义 VAD 测试集 | 超时率 | 5.53% | 6.55% | 更高 |
| 内部语义 VAD 测试集 | 早切率与延迟 | 相近 | 相近 | 延迟更大 |

表后解释需要同时给出收益与代价。TurnFSM 报告的成功率为 82.41%，高于 VAD 专用模型的 81.90%，超时率为 5.53%，低于专用的 6.55%，而早切率与延迟与专用模型相近，说明在更快提交与避免早切之间仍需权衡。论文将双头基线的退化解释为并行多任务在共享表示上的更强耦合，表现为更低的成功率、更高的超时率、更大的延迟和更高的错误拒绝率，但这属于有限解释，严格因果还需更多梯度或表示层面的直接证据。

下表整理了拒绝检测与 utterance 级语义完整性的对照，保留可部署的单次判决准确率与错误率，不用事后最优阈值代替，所有数值均与来源句中的百分比写法一致。

| 条件 | 指标 | TurnFSM | 专用或开源对照 A | 开源对照 B |
| --- | --- | --- | --- | --- |
| 内部拒绝测试集 | 错误接受率 | 3.35% | 3.31% | 相近 |
| 内部拒绝测试集 | 错误拒绝率 | 16.04% | 16.16% | 双头基线更高 |
| EasyTurn 测试集 | 总体准确率 | 91.00% | 87.99% | 74.67% |
| EasyTurn 测试集 | 总体准确率对照 | 91.00% | 97.00% | 第二好 |

表后解释要指出未胜出项。拒绝侧 TurnFSM 的错误接受率为 3.35%，与拒绝专用的 3.31% 相近，错误拒绝率为 16.04%，略低于专用的 16.16%，总体接近，支持串行分解没有明显牺牲任一子任务的判断。utterance 级 EasyTurn 上 TurnFSM 总体为 91.00%，优于 TEN 的 87.99% 与 Smart Turn 的 74.67%，但低于 Easy Turn 的 97.00%，说明其泛化为第二好而非全面最优。论文指出双头基线在拒绝侧具有更高的错误拒绝率，这与串行分解减少异构线索同时编码压力的设计动机一致。

综合来看，报告支持统一状态模型在保持拒绝能力的同时改善流式提交的稳定性，但早切、专用模型小幅领先的指标与开源集上的差距仍是明确边界。

### 拿掉一阶机制与对齐后哪部分最敏感？

消融回答两个机制问题。1 阶状态转移机制是否在保持性能的同时带来效率优势。跨模态对齐主要影响语义完整性还是拒绝。以下两张原表分别对应语义 VAD 与拒绝检测的消融，保留原文行列与精度。

下表比较是否使用 1 阶状态转移机制与跨模态对齐在语义 VAD 上的变化，成功率越高越好，早切率超时率与成功延迟越低越好。

| Model | SR(%) | ECR(%) | TOR(%) | Mean Lat.(Succ.)(ms) |
| --- | --- | --- | --- | --- |
| TurnFSM | 82.41 | 12.06 | 5.53 | 80.9 |
| w/o FOSTM | 81.97 | 13.32 | 4.71 | 111.35 |
| w/o cross-modal | 79.39 | 15.83 | 4.78 | 78.3 |

表后解释应结合具体数字。完整 TurnFSM 成功率 82.41%，去掉 1 阶机制后为 81.97%，早切率从 12.06% 升至 13.32%，成功延迟从 80.9 ms 升至 111.35 ms，超时率从 5.53% 变为 4.71%。这支持 1 阶机制在保持成功率的同时减少早切与延迟，但超时率的下降也说明各指标之间存在权衡，不能只用单一指标判定优劣。去掉跨模态对齐后成功率降至 79.39%，早切率升至 15.83%，说明语义完整性对对齐更敏感。

下表比较同样消融在拒绝检测上的变化，错误接受率与错误拒绝率越低越好。

| Model | FAR(%) | FRR(%) |
| --- | --- | --- |
| TurnFSM | 3.35 | 16.04 |
| w/o FOSTM | 3.46 | 16.34 |
| w/o cross-modal | 3.27 | 17.10 |

表后解释要指出不对称影响。去掉 1 阶机制后错误接受率从 3.35% 变为 3.46%，错误拒绝率从 16.04% 变为 16.34%，差距较小，支持该机制未损害拒绝建模的判断。去掉对齐后错误接受率变为 3.27%，错误拒绝率变为 17.10%，一降一升，论文的解释是拒绝不仅依赖语义内容，还依赖噪声回声等声学线索，因此语义导向的对齐对拒绝的改善不如对语义 VAD 直接。该解释与数据一致，但仍属于有限解释，未做声学特征层面的因果验证。

效率侧的反证也很重要。原文指出去掉 1 阶机制后模型需沿用交错历史状态形式，上下文随时间变长，且非流式 utterance 级推理仍需逐步生成中间状态，而 1 阶机制允许紧凑单次前向。论文没有给出每步增加的词元数与 wall-clock 时间，因此效率优势是机制层面的支持性推断，待验证的是在具体硬件与并发下的实际延迟收益。

### 哪些边界没有被测到？

首先是数据边界。状态预测依赖内部语义 VAD 与拒绝数据集，训练量分别为 194 小时与 2000 小时，测试集分别为 800 条与 3000 条。外部可复现的 EasyTurn utterance 级测试只检验完整与不完整二分类，不检验流式时间戳、重叠语音与回声下的在线拒绝，论文也没有报告在真实打断与重叠比变化下的误判率曲线。

其次是指标与统计边界。论文报告了成功率、早切率、超时率、延迟、错误接受率与错误拒绝率，但未报告置信区间、多次随机种子的方差或显著性检验。数值相同不能视为同一指标，早切与超时是提交时机错误的不同侧面，错误接受与错误拒绝是拒绝阶段的不同代价，总体延迟把超时按 2000 ms 计入，与成功延迟的聚合对象不同，比较时必须按同一聚合口径进行。

再次是成本边界。训练资源以 Ascend 910b 数量、学习率、批量与轮数给出，但未给出总时长与能耗。推理开销讨论停留在避免历史状态累积与逐步生成的机制层面，未测量不同音频长度下的显存占用、首包延迟与实时率。输出帧率 12.5 Hz 与实际端到端延迟是不同概念，前者是每 80 ms 一个音频词元，后者还包括编码器、大模型与决策逻辑的耗时。

最后是基线边界。开源离线模型的流式成绩依赖 Silero VAD 切块与各自等待策略，Smart Turn 的等待时间公式会直接抬高成功延迟，因此跨模型延迟比较包含策略差异。TEN Turn Detection 还叠加了 Paraformer 转写的误差，文本转写错误与语义判决错误无法分离。这些限制不否定主结论，但意味着把结果推广到其他切块器、其他等待策略或中英文以外场景时需要重新验证。

### 复现应先做什么，后补哪项验证？

若要复述方法，可按输入到输出的顺序重建。先实现流式编码器与适配器，确认 25 Hz 帧与 12.5 Hz 词元的下采样链路。再定义六状态词表与转移路径，监听阶段只学完整性，提交后只学接受或拒绝。然后实现训练交错序列的掩码修改与位置绑定，验证每个状态预测只能看到声学前缀与前一状态，且音频位置编号不受插入状态影响。最后在推理侧实现紧凑序列的单步预测，流式逐块更新前一状态，utterance 级整句 1 次前向输出终态。

超参数与信息条件应保留原文已报告的值。对齐阶段学习率 6e-5、批量 256、2 轮，状态预测阶段学习率 2e-5、批量 64、4 轮。需要明确缺项。音频编码器内部预训练细节未报告，语义 VAD 与拒绝数据的标注规范、负样本构造与超时阈值未完全公开，状态序列的切块长度与状态更新频率也未给出可直接运行的配置。复现时应先用公开语音识别语料做对齐，再用自有完整与不完整话语、噪声回声与背景人声构造 2 阶段状态数据，并记录切块与超时选择。

建议补做的验证包括早切容差敏感性分析，把正负 100 ms 改为更严格与更宽松的窗口观察成功率变化。还应补做长度分桶的延迟与错误率曲线，检验总体趋势是否在长句、停顿句与噪声段上都成立。最后应补做实际部署测量，记录不同并发下的显存、实时率与端到端打断响应时间，区分帧率、模型前向耗时与策略等待时间的贡献。

代码与权重方面，原文未提供可下载实现，复现只能按描述重建。区分代码开源、权重下载与系统可运行三件事，本解读仅支持方法重建，不承诺按上述超参数能复现完全相同的数字。

### 何时值得尝试这种串行状态设计？

当系统已经是级联管线且希望减少多头并行带来的表示干扰，同时仍需要显式可控的提交与拒绝阶段时，这种把状态机内化为 1 阶转移的设计值得尝试。它保留了级联先提交后过滤的领域知识，又把手工状态机变成可学习的条件概率，适合边说边听、允许打断但算力有限的语音助手。

当任务只需要离线判断整句是否完整，或者拒绝主要依赖文本意图而非声学异常时，收益可能变小。EasyTurn 上 Easy Turn 仍领先也提示，若评测只看 utterance 级二分类而不看流式延迟，紧凑流式设计的优势不易体现。

常见的误解是把 1 阶依赖理解为模型记不住长上下文。实际上声学前缀仍然全部可见，被截断的只是更早的离散状态历史，声学证据的长期依赖仍由音频词元与大模型承担。另一个误解是把成功延迟低等同于整体体验更好，总体延迟还受超时率与超时计分方式影响，早切率上升也会损害体验，需要联合阅读。

收束到可核对的事实。TurnFSM 在内部流式测试上报告了更高的成功率与更低的总体延迟，在拒绝上接近专用模型，在公开 EasyTurn 上取得第二好的总体准确率。消融显示跨模态对齐对语义 VAD 更关键，1 阶机制主要在保持性能的同时简化推理形式。这些是论文直接报告的内容，跨场景的因果推广与实际部署收益仍待验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.04240)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-08 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-08/)
