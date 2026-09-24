---
title: "Spoken Language Models that Think Aloud"
date: 2026-09-24
draft: false
tags: [语音对话系统, 多模态学习, 流式处理, 高效推理, 语音]
categories: [论文速递]
description: "针对串行先想后说导致长时间无声等待的问题，该工作用推理主路加轻量报幕支路的异步结构，在保持串行推理问答精度基本相当的同时，把用户可感知的静音大幅压低，代价是需要额外的报幕生成与动态调度。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.26488"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "边想边说：用异步进度语音盖住推理静音的口语模型"
paper_digest_original_title: "Spoken Language Models that Think Aloud"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.26488"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.26488.pdf"
paper_digest_primary_task: "语音对话系统"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.speech-dialogue","label":"语音对话系统"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"signal","id":"signal.speech","label":"语音"}]
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对串行先想后说导致长时间无声等待的问题，该工作用推理主路加轻量报幕支路的异步结构，在保持串行推理问答精度基本相当的同时，把用户可感知的静音大幅压低，代价是需要额外的报幕生成与动态调度。"
paper_digest_authors: [{"affiliations":["Meta Superintelligence Labs","The Chinese University of Hong Kong, Shenzhen"],"name":"Junyi Ao"},{"affiliations":["Meta Superintelligence Labs"],"name":"Kainan Peng"},{"affiliations":["Meta Superintelligence Labs"],"name":"Mingbo Ma"},{"affiliations":["Meta Superintelligence Labs"],"name":"Shun Zhang"},{"affiliations":["Meta Superintelligence Labs"],"name":"Zhenyu Tang"},{"affiliations":["Meta Superintelligence Labs"],"name":"Xutai Ma"},{"affiliations":["Meta Superintelligence Labs"],"name":"Xiang Li"},{"affiliations":["Meta Superintelligence Labs"],"name":"Yinghao Li"},{"affiliations":["Meta Superintelligence Labs","The Chinese University of Hong Kong, Shenzhen"],"name":"Yuancheng Wang"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen"],"name":"Zhizheng Wu"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen"],"name":"Haizhou Li"},{"affiliations":["Meta Superintelligence Labs"],"name":"Qing He"},{"affiliations":["Meta Superintelligence Labs"],"name":"Xubo Liu"}]
paper_digest_abstract_sha256: "19d80f9394b126038a830ee7dbabf432f0f82dd966d67c520facd1b6599fa24e"
paper_digest_sidecars: {"citation.bib":{"sha256":"7b2509af0fd17bbc8b9c0537841fb62319e0451f4385421435efe30ea18ac5ab","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-26488/citation.bib"},"citation.json":{"sha256":"734746b9205322c9694e2b22dea00c4b88588be15b2da7f7e3af4157da58137b","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-26488/citation.json"},"citation.ris":{"sha256":"c25e2609b18d4dc48426efe2fe6b833a1a9ec6d9263ee04ea1077d9e140d2d44","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-26488/citation.ris"},"rethink-context.json":{"sha256":"5ee0151a13173d89349de0d9f9000f3df911900238aab334b6fd6dfc15780b32","url":"/audio-paper-digest-blog/data/papers/2026-09-24/2609-26488/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "f03e6a2d5d0c296e4d50aabae71afa022b557e35a32e93bcac9129f8484b56d0"
paper_digest_api_reader_plan_sha256: "c2b0a66c2bd305c4361cfb1b730fd4ef2b0d6fe3aa0da1d072bfc971b147fa24"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "98230ec2549dcb255f78d2ddbb6aa0e63b9ef07d276df97b554ccf2f32e96e71"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "79352e320081416f64fafa860da3198c63efdaf9ce225c43deca17e9e79bd180"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "0e18e0c8eb1e2e56d18e22ef1e600580ad1477d01b4e3c4b823bd3cd4a30072d"
paper_digest_api_reader_author_count: 13
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "89dccdf89a33611e2a4157659c5efd57542a234738c42059456659723145118c"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 边想边说：用异步进度语音盖住推理静音的口语模型

> 英文题目：*[Spoken Language Models that Think Aloud](https://arxiv.org/abs/2609.26488)*

> 标签：#语音对话系统 | #多模态学习 | #流式处理 | #高效推理 | #语音
>
> 评分：**6.5/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5


## 👥 作者与机构

- Junyi Ao：Meta Superintelligence Labs；The Chinese University of Hong Kong, Shenzhen
- Kainan Peng：Meta Superintelligence Labs
- Mingbo Ma：Meta Superintelligence Labs
- Shun Zhang：Meta Superintelligence Labs
- Zhenyu Tang：Meta Superintelligence Labs
- Xutai Ma：Meta Superintelligence Labs
- Xiang Li：Meta Superintelligence Labs
- Yinghao Li：Meta Superintelligence Labs
- Yuancheng Wang：Meta Superintelligence Labs；The Chinese University of Hong Kong, Shenzhen
- Zhizheng Wu：The Chinese University of Hong Kong, Shenzhen
- Haizhou Li：The Chinese University of Hong Kong, Shenzhen
- Qing He：Meta Superintelligence Labs
- Xubo Liu：Meta Superintelligence Labs

## 📌 核心摘要

本文处理语音到语音问答中的长推理延迟问题，输入为用户语音，输出为连续语音回答，难点在于串行先思考后说话会产生十余秒的用户可感知静音。方法上构建异步双流框架：推理思考器基于音频编码生成文本推理轨迹并在里程碑处发射触发符，其隐状态经投影进入轻量出声思考模块生成单句进度话语，最后由统一说话器将两路隐状态分别合成为思考期语音与最终回答语音。运行时动态平衡策略在播放耗尽时补发进度话语而在推理提前完成时取消待合成触发，从而解耦推理推进与语音实现。在Spoken-MQA基准下，Baseline + Think-Aloud CoT的Lsil为0.36s，低于Baseline + CoT的Lsil 12.82s，同时平均准确率保持在87.6%附近。与串行推理相比该机制用推理接地的进度话语替代通用填充词，其打断纠错等交互收益的适用边界尚未验证。该结论仅在英文口语推理与常识问答评测及40词每秒推理速度假设下验证，对短对话是否需要出声思考及打断纠错等交互收益尚未实测。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么值得做？

这篇论文研究的是语音到语音的问答与推理交互。输入是用户的语音提问，输出是系统的语音答复，中间允许有文本形式的内部推理。

目标读者是刚进入语音与语言交叉方向的研究生，需要先建立一个基本判断：语音交互与文本聊天不同，用户能直接听到等待。如果模型在后台想了十几秒而没有发出任何声音，用户会认为是卡住或掉线。

论文把这种用户可听见的死寂称为未遮盖静音，专门指推理还在进行、但没有可播放音频的累计时长。研究的目标不是把推理做得更长更强，而是让推理进行时仍有短促、与任务相关的进度语音垫住空隙。

需要保留的关键信息是：报幕话语不是完整思维链的朗读，而是一句话左右的任务改述、阶段结论或过渡提示。最终答复在生成前会把已播出的报幕内容追加进上下文，以保持前后一致。

本文当前没有可验证的公开代码、模型或数据资源，因此所有复现讨论只能依据论文文字、公式与数据构造描述进行，不做已公开的断言。

### 同类路线如何处理推理与说话的冲突？

理解这篇工作的定位，需要先区分 3 条路线。第一条是交错式文本语音解码，模型按块轮流生成文本与语音，文本像台词本一样引导音频。优点是实现直接，缺点是说话节奏被固定的交错比例绑住。

第二条是思考者说话者结构，思考器先产出文本与中间表示，说话器再转成语音 token。优点是分工清晰，缺点是若按串行执行，思考阶段必然带来长静音。第 3 条是全双工交互，重点解决边听边说与打断，处理的是输入侧的并发。

本文处理的是收到完整提问后的内部推理延迟，可以称为边想边说。论文明确表示，解耦的双流设计不是在所有条件下都优于交错式，而是一种互补的权衡。

交错式用预定节奏做增量生成，本文用运行时调度决定补话或取消，更适合推理速度随硬件与问题变化的部署条件。与近期边推理边说的交错推理工作相比，本文的不同在于不把推理推进与语音实现绑在同一时钟上。

另一条并行工作是在用户还没说完时提前推理，属于边听边想，与本文的边想边说处于流水线的不同阶段。

### 串行推理的等待从哪里来，要解决到什么程度？

串行先想后说的流程是：编码用户语音，生成完整推理文本，再生成终答文本并合成语音。在这个流程里，推理文本越长，用户听到的前置静音越长。

论文指出复杂问答的静音可达许多秒，直接破坏轮流发言的节奏。作者把适用范围限定得很清楚：需要多步推理、知识密集问答、辅导与任务助手的场景才需要报幕。

短闲聊不需要也不应该把中间想法说出来。衡量改进用两个延迟量：未遮盖静音是推理跑着但无声的时间，越小越好。发音计算开销是报幕语音拖住终答的额外时间，越小越好。

理想结果是两个量同时低，且终答精度不明显低于串行推理基线。论文还强调报幕不是固定填充语的简单重复。固定填充语如让我想想只能盖住开头。

若反复播放与任务无关的套话，信息量低且容易引起反感。本文希望第一句起到填充语的快速反馈作用，但内容要与当前问题相关。后续句子则要随推理进展给出新的进度信号。

**串行先想后说 × 异步边想边说：** 串行先想后说指先把完整文本推理走完再合成最终语音，分工是保证推理完整但说话必须等待；异步边想边说指推理流在后台继续推进、说话流同时播报进度，分工是推理负责逻辑、说话负责遮盖等待；二者搭配的原因是复杂问答的推理时长与语音时长天然不匹配，组合意义是用可听的任务相关进展替换不可听的死寂，而不提前泄露完整思维链。

### 异步报幕的总体流程如何走完一个样本？

沿一个样本走一遍有助于建立全局图。用户说出一道数学应用题，系统同时启动两条流。推理流在文本空间做演绎，例如先算出蚱蜢与青蛙的各自距离，再相加验算。

说话流在语音空间先播一句与题目相关的确认，盖住推理启动的空隙。当推理到达某个段落边界并产出触发符时，说话流可以再播一句承接当前进展的话。

推理结束后，系统把已播出的报幕话语追加到推理上下文，再生成最终语音答案。关键在于两条流异步：推理不必等说话播完，说话也不必把每一步推理都念出来。

下面这张示意图先给出双流并行的直观印象，重点看触发如何把推理进展翻译为可说的话，而不是把推理全文朗读。

> **看图路径：** 1. 先看左侧用户语音输入如何同时分叉为上方推理与下方说话两条横带；2. 再看推理带上闪电标记的触发位置如何向下引出一条报幕语音；3. 最后对比三段报幕气泡与最右侧终答气泡的内容分工

[![原论文 Figure 1：Illustration of the asynchronous reasoning and think-aloud generation mechanism.](https://arxiv.org/html/2609.26488v1/introv2.drawio.svg)](https://arxiv.org/html/2609.26488v1/introv2.drawio.svg)

*论文图 1。原论文 Figure 1:：“Illustration of the asynchronous reasoning and think-aloud generation mechanism.”。*

从像素上看，左侧是用户语音题面，中间上蓝带是文本推理的 3 个片段，中间下红带是 3 段语音报幕，最右侧是终答语音。推理片段之间有箭头表示演绎推进，触发闪电符号向下引出报幕。

报幕下方有连续波形表示正在播放。这种画法对应论文的核心主张：推理推进与语音实现解耦，触发是两者唯一的耦合点。第一段报幕的作用是桥接启动间隙，后两段的作用是在中间里程碑处继续遮盖。

### 思考器、报幕器与说话器各自算什么？

总体结构包含 3 个可联合优化的部件：推理思考器、报幕模块与统一说话器，外加音频编码器与流式编解码器。推理思考器是认知核心，输入是系统提示与音频编码器给出的用户隐状态。

它先生成推理轨迹，期间在需要说话的位置预测特殊记号。收到用户表示后立即强制生成第一个触发符，使第一句报幕能在推理展开前就开始准备。随后的触发符出现在推理段落之间，论文在推理时用双换行作为段落边界约定。

思考器与报幕模块异步运行，思考器在后台继续生成后继推理 token，不等待报幕播完。报幕模块是参数量 0.5B 的轻量语言模型，输入不是原始音频而是投影后的隐状态。

**推理思考器 × 报幕模块：** 推理思考器负责接受用户语音表征并生成推理轨迹与最终答复，分工是认知主线；报幕模块是 0.5B 轻量语言模型，负责把用户输入与阶段性推理隐状态改写为一句以内的进度话语，分工是可说的支线；搭配原因是两者语义空间与维度不同且速度不同，组合意义是通过触发符与投影层实现异步协作，让主线不停、支线只说被选中的里程碑。

下图展示了模块间的数据复制与隐状态流动，适合对照文字逐路核对，该图包含编码器、思考器、报幕模块、说话器与解码器的完整堆叠。

> **看图路径：** 1. 自下而上追踪音频编码器到推理思考器再到统一说话器的主路径；2. 观察思考器输出中红色触发符与其隐状态如何被复制给报幕模块输入；3. 确认报幕语音与终答在说话器输入处分时切换、出口共用同一解码器

[![原论文 Figure 2：The overall architecture of our proposed model, illustrating the collaborative workflow between…](https://arxiv.org/html/2609.26488v1/overallv2.drawio.svg)](https://arxiv.org/html/2609.26488v1/overallv2.drawio.svg)

*论文图 2。原论文 Figure 2:：“The overall architecture of our proposed model, illustrating the collaborative workflow between the reasoning thinker, the think-aloud module, and the unified talker.”。*

从像素上看，最下方是音频编码器把波形变为用户隐状态，最上方是流式编解码器把说话器输出变为波形。中间从下到上依次是思考器输入、思考器输出、报幕模块输入与说话器输入。

图例用颜色区分用户隐状态、触发符、推理 token、终答 token 与报幕 token，深浅还区分 token 与隐状态。虚线框表示复制操作：用户隐状态被复制给报幕输入，推理段隐状态被复制给后续报幕输入。

已完成的报幕被复制回思考器输入以保证终答一致，终答隐状态被送入说话器。这种复制不是梯度回传，而是推理与训练时的数据搬运，需要与参数更新分开理解。

**统一说话器 × 流式编解码器：** 统一说话器负责把文本嵌入与隐状态映射后生成语音 token，分工是语言到语音的控制；流式编解码器负责把语音 token 变为连续波形，分工是声学实现；搭配原因是推理期与终答期的 conditioning 来源不同但出口要连续，组合意义是同一套说话器在 2 阶段切换输入来源，保证报幕语音与最终答复在听感上不断流。

报幕模块第一句的输入构造只依赖用户投影，可以写成如下形式，符号含义是用户隐状态经输入投影后直接作为报幕输入。

\[\mathbf{X}^{TA}_{1}=\phi_{in}(\mathbf{H}^{user})\]

后续第 k 句的输入把上一轮的输入、以往报幕 token 与上一段推理隐状态的投影拼接起来，符号含义是历史报幕与累计推理共同约束下一句，使话语不偏离已说内容。

\[\mathbf{X}^{TA}_{k}=\left[\mathbf{X}^{TA}_{k-1};Y^{TA}_{k-1};\phi_{in}(\mathbf{H}^{r}_{k-1})\right]\]

统一说话器采用流式语音合成，输入是文本嵌入与对齐表示的和。推理期用报幕隐状态的投影，终答期用思考器隐状态的投影。说话器输入输出按固定交错比组织，保持与原流式配置一致。

**未遮盖静音 × 发音计算开销：** 未遮盖静音指推理还在跑但没有可播放语音的时间，分工是衡量用户等待；发音计算开销指终答已就绪但报幕语音还在播、拖住终答的时间，分工是衡量多说的代价；搭配原因是两者是同一调度的一体两面，组合意义是动态平衡策略要在音频饥饿时补话、在推理早完成时砍掉未合成的触发，兼顾两项延迟。

### 数据如何构造，三个损失如何分工，运行时如何调度？

训练目标是 3 个生成损失之和，分别对应思考器生成、报幕生成与说话器生成，音频编码器在训练中固定。思考器与报幕模块分别从语音模型思考器与 0.5B 指令模型初始化。

说话器与流式解码器来自流式语音合成模型。每次训练随机选一个含推理的轮次作为末轮，并随机选一条报幕或终答来训练说话器。这种采样使说话器同时见过两种语音风格。

数据构造分两大块。推理数据先用大模型 5 次投票选出推理密集轮次，再根据对话历史与当前输入生成推理文本并丢弃终答。最后再 5 次投票过滤掉与真值答案不一致的推理。

报幕数据先按双换行切分推理段落，5 次投票确定哪些段落结尾已形成可说的子结论。再在不预支后续段落的前提下生成每句不超过 10 个词的一句话报幕。随后把原终答改写为报幕的自然延续，最后用内部语音合成统一为单说话人声学条件。

**触发符 × 动态平衡策略：** 触发符是推理思考器在推理轨迹中预测的特殊记号，分工是在训练约定的段落边界上标记可说话的位置；动态平衡策略是推理时跟踪双流状态的运行时规则，分工是决定补一条还是取消一批；搭配原因是训练只能学到哪里值得说，实际播报时长与推理速度仍会错位，组合意义是在播放结束与推理结束两个事件点上做增删，避免固定模板或固定交错比例的僵硬。

联合优化的目标可以记为三项相加，分别监督 3 条生成路径，固定编码器意味着声学前端不参与更新，该设计保持了前端稳定并减少可训练变量。

\[\mathcal{L}=\mathcal{L}_{Thinker}+\mathcal{L}_{TA}+\mathcal{L}_{Talk}\]

运行时调度不依赖预估时长，而是跟踪双流状态。音频饥饿指推理未完但播完了，此时扫描推理缓冲中最新的未执行逻辑段并发起新的报幕。

推理早完成指思考器先做完，此时取消所有尚未合成的触发，已在播的一句允许播完并追加进上下文，再生成终答。该规则同时控制等待与多说的代价。

### 在什么数据与基线上测，指标方向是什么？

实验分两类任务。推理能力用 Spoken-MQA 的单步与多步子集，正确性由大模型裁判 3 次投票判定，指标是准确率，越高越好。常识与事实性用 Web Questions 与 TriviaQA。

在语音到语音与语音到文本两种设置下测精确匹配包含率，指标也是准确率。基线设置需要仔细区分。直接答复基线是没有报幕模块、只在直接答复数据上微调的模型。

它用于衡量无推理助手与完整推理系统的差距。串行推理基线共享推理增强监督但按先想后说串行执行，是设计层面的直接对照。外部同期语音模型只作参考，因为训练数据与实验条件不同，不构成同条件胜负。

训练语料是约 200000 段单多轮对话、约 5000 小时语音的内部数据，覆盖常识问答、推理演绎与通用求助，因治理限制不公开。评估之外还测了语音质量与人工偏好。

语音质量在单步推理子集上对比基座，用可懂度与感知质量指标，方向是越高越好。人工评价在多步子集随机抽 50 例、每例 3 名标注，盲测比较本文系统与思考期静默只播终答的版本。

### 精度保住了吗，等待压低了吗，听感如何？

先看知识问答的主结果表。比较的问题是：在相同的语音到语音条件下，异步报幕是否接近串行推理的精度，同时明显高于直接答复。公平条件是三行内部基线共享骨干与训练框架。

指标方向是准确率越高越好。表中包含直接基线、串行推理与本文方法，满足可运行策略对照的要求，外部模型仅供参考不参与胜负判定。

| Speech-to-Speech (S2S) | Speech-to-Speech (S2S) | Speech-to-Speech (S2S) | Speech-to-Speech (S2S) |
| --- | --- | --- | --- |
| Baseline | 32.1 | 36.1 | 34.1 |
| Baseline + CoT | 40.3 | 39.2 | 39.8 |
| Baseline + Think-Aloud CoT (ours) | 40.3 | 38.7 | 39.5 |

表后需要同时读出收益与代价。语音到语音下，本文方法明显高于直接基线，与串行推理基线基本持平，支持边说边想没有实质损害事实准确性的判断。但这张表不能证明延迟改善。

延迟需要下一张表与延迟曲线共同支持。表中未胜出的细节也要看到：部分问答上本文略低于串行基线，说明报幕的介入并非全无扰动，只是差距很小。

推理精度的整理如下，重点是多步任务上推理带来的增益是否被保留。表中条件列区分任务类别，指标列统一为准确率，基线列与本文列保留原文报告的平均值对照。

| 任务类别 | 指标方向 | 本文平均精度 | 串行推理平均精度 | 相对直接基线的提升 |
| --- | --- | --- | --- | --- |
| Spoken-MQA 推理 | 越高越好 | 87.6% | 88.5% | 高度可比 |
| 语音到语音问答 | 越高越好 | +5.4% average accuracy in S2S | baseline with reasoning | 明显高于直接基线 |

表后解释要增加机制信息。原文报告本文方法在平均精度上与串行推理高度可比，同时在语音到语音平均精度上高于直接基线约 5 个百分点以上。这支持报幕话语没有把推理带偏的解释。

报幕被追加进终答上下文，终答生成时能看到已说内容，从而保持一致。但多步子集上本文仍略低于串行基线，提示长推理的后期里程碑可能引入轻微的注意力分散。

延迟曲线的导读如下，横轴是按推理时长排序的样本，纵轴是秒。该曲线展示了推理时长与用户可感知延迟之间的遮盖关系，是理解动态调度的关键证据。

> **看图路径：** 1. 先确认横轴是按推理时长排序的样本、纵轴是秒级时间；2. 对比蓝色推理时长线与绿色可感知延迟线的高度差；3. 注意最右侧少数绿色尖峰代表仍未完全盖住的离群样本

[![原论文 Figure 3：Impact of think-aloud utterances on perceived latency.](https://arxiv.org/html/2609.26488v1/figure/waiting_time2.png)](https://arxiv.org/html/2609.26488v1/figure/waiting_time2.png)

*论文图 3。原论文 Figure 3:：“Impact of think-aloud utterances on perceived latency.”。*

从像素上看，蓝色推理时长线从左到右单调爬升，最右端超过 30 秒，绿色可感知延迟线在大多数位置贴近零线，浅绿填充是被报幕盖住的时间。这一形态说明对多数样本，报幕语音的总时长足以覆盖推理时长。

但最右侧有两三个绿色尖峰，其中最高者超过 10 秒，表明极长推理仍有个别样本盖不住。论文正文也承认少数离群样本仍有可感知的等待，因此总体趋势不等于每个样本都成立。

标准运行案例的导读如下，题面是池塘金鱼与鲶鱼问题。该案例展示了推理速度较快时动态策略如何取消多余触发，是理解发音开销控制的实例。

> **看图路径：** 1. 先读灰底用户题面确认是 7 加 12 再减 15 的两步算术；2. 再看推理段中第一个触发符保留、后两个触发符被划线取消；3. 最后对比浅蓝报幕句与深蓝终答句在数字 4 上的一致性

[![原论文 Figure 4：Case 1 demonstrates thinking while speaking.](https://arxiv.org/html/2609.26488v1/figure_wreasoning_c1.png)](https://arxiv.org/html/2609.26488v1/figure_wreasoning_c1.png)

*论文图 4。原论文 Figure 4:：“Case 1 demonstrates thinking while speaking.”。*

从像素上看，用户题面为灰底，推理段包含三处触发符，其中后两处被划线表示取消，系统答复中浅蓝是报幕句、深蓝是终答句。推理文本先算 7 加 12 得 19，再算 19 减 15 得 4。

由于当前推理速度下第一句报幕已足以覆盖推理期，动态策略取消了后两个触发，避免终答就绪后还继续说话。这正是发音开销控制的实例：少说比多说更重要。

### 拿掉动态调度会怎样，不同推理速度下还稳吗？

延迟消融要回答两个问题：静态触发是否足够，调度是否适应不同推理速度。比较条件是同一推理基准与同一延迟定义，指标方向是两项延迟越低越好。

原文用表格对比了串行基线、无调度版本与完整模型在多档生成速度下的表现，结论是无调度版本虽把静音压低，却带来很大的发音开销。完整模型通过补话与取消把两项延迟同时压低。

下表把原文连续句子中的延迟数字整理为五列宽表，便于对照串行等待、无调度代价与完整调度的运行条件，数字与单位保留原文写法。

| 运行条件 | 串行推理等待 | 无调度发音开销 | 推理生成速度 | 论文判断 |
| --- | --- | --- | --- | --- |
| serial reasoning baseline | 12.82s | prolong the turn | 40 tok/s | less suitable for fluid spoken interaction |
| ablation without dynamic balance | reduces silence | 19.92s | 40 tok/s | unnecessarily prolong the turn |

表后要读出反证价值。串行基线的等待是本文要解决的痛点，无调度版本的开销是反面教材，说明只加报幕不加调度会从一个极端走向另一个极端。完整模型的优势不是某一个固定数字。

而是在不同生成速度下都能触发或取消。未评测的边界是：如果推理极短，是否还需要第一句报幕；如果推理极长且里程碑稀疏，补话是否会重复。

论文把打断纠错作为未来部署场景单独展示，明确说明外部语音活动检测与轮流控制不在本文实现与评测范围内，因此不能把该案例当作已验证的能力。

### 哪些结论有边界，哪些数字不能混读？

首先是数据与可比性边界。训练语料是内部 5000 小时数据且不公开，外部模型的训练数据与评测设置不同，因此主结果表中的外部行只能看作参考。不能据此得出同条件胜负。

其次是指标口径边界。推理精度用大模型裁判投票，知识问答用精确匹配，两者不是同一准确率，数值相同也不代表能力相同。百分点差值与相对百分比不同，阅读时应保留原文的平均精度写法。

再次是延迟度量边界。未遮盖静音与发音开销分别衡量等待与多说，不能只看其一。无调度版本的精度看似接近完整模型，但其发音开销极大，若只报精度会误导为可部署。

语音质量与人工偏好的整理如下，该表同时呈现客观声学指标与主观偏好比例，便于区分听感改善与波形误差的不同口径。

| 评价维度 | 具体指标 | 基座数值 | 本文数值 | 结论方向 |
| --- | --- | --- | --- | --- |
| 感知质量 PESQ | 越高越好 | from 3.69 | to 3.97 | better perceptual quality |
| 感知质量 NISQA | 越高越好 | from 4.65 | to 4.95 | better perceptual quality |
| 总体偏好与响应感 | 偏好比例 | 85.3% of the cases | 99.3% of the cases | preferred overall |
| 流畅自然度 | 5 分制 | 4.01 | 4.01 | smooth transition |

表后需要分开讨论两类指标。语音质量方面，本文模型在感知质量上高于基座，但信号失真指标略低，说明听感好不等于波形误差小。人工评价显示总体偏好与响应感很高。

但样本仅 50 例且对照是静默思考版本，没有与通用填充语做受控对比，论文在结尾也把与填充语的对照列为未来工作。最后是能力边界。报幕被限制为一句话以控制时长。

打断纠错只是示意场景，依赖的外部打断机制未实现，因此不应承诺误判率或交互成功率的改善。

### 复现先做什么，需要哪些超参数与信息条件？

复现应先从数据管道做起，而不是直接搭模型。第一步按附录提示词复刻 3 步推理数据流程：5 次投票选推理密集轮次，用大模型生成推理文本并丢弃终答。

再 5 次投票过滤与真值不一致的推理。第二步复刻 4 步报幕流程：按双换行切段并投票定触发点，在不预支后续段落的约束下生成每句不超过 10 词的报幕。

再把原终答改写为报幕的自然延续，最后统一合成为单说话人语音。第 3 步搭三部件：思考器与音频编码器、0.5B 报幕模型、流式说话器与解码器。输入输出交错比保持不变。

训练与调度的关键设置整理如下，条件列区分环节，对象列给出初始化来源，规模列保留原文步数与批量，冻结列明确编码器固定。

| 环节 | 对象与规模 | 批量与步数 | 学习率与预热 | 冻结与监督来源 |
| --- | --- | --- | --- | --- |
| 模型训练 | 64 H100 GPUs | 10,000 steps | 1\times 10^{-5} | audio encoder is fixed |
| 批量与调度 | batch size of 64 | 10,000 steps | 500-step warm-up phase | thinker plus talker |

表后说明复现的执行顺序。先在小规模上验证触发符能否在段落边界稳定出现，再验证报幕追加进终答上下文后的一致性。最后再接入动态调度的两个事件。

播放结束而推理未完则补一条，推理结束则取消未合成触发。评估时先跑语音到文本以排除合成波动，再跑语音到语音。延迟要在多档速度下分别记录两项延迟。

缺失项要如实记录：原文未给出三项损失的权重、投影层维度与优化器细节之外的超参数，未报告处不应猜测实现，改用原文已给的采样与调度逻辑作为最小可运行闭环。

### 何时值得尝试，还需补哪项验证？

当系统已具备可用的推理能力，但用户抱怨回答前等待过长，且任务属于多步推理或知识密集问答时，值得尝试这种异步报幕。它的适用条件是推理时长明显超过一句确认话语的时长。

且报幕内容能从已完成的推理段中找到依据；若任务是短闲聊或对中间过程敏感的场景，则应缩短或跳过推理，而不是强行报幕。复现的最小价值在于验证两个可操作命题。

第一句与问题相关的确认能否替代固定填充语，第二句之后的进度话语是否随推理里程碑单调提供新信息。还需补的验证包括与通用填充语的受控对比、真实多轮打断下的可用性。

以及报幕对终答事实性的细粒度影响分析。总体上，论文报告的是在保持串行推理精度基本相当的前提下，用轻量支路与运行时调度换取更低的可感知等待。

支持这一判断的是问答精度对照与延迟对照，可能但待验证的是长期部署中的用户留存与纠错收益，不应提前承诺。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.26488)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-24/)
