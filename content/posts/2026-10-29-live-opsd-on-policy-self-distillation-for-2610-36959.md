---
title: "Live-OPSD: On-Policy Self-Distillation for Proactive Streaming Large Video Models"
date: 2026-10-29
draft: false
tags: [音视频理解, 知识蒸馏, 音视频, 流式处理]
categories: [论文速递]
description: "Live-OPSD 让流式策略先自己生成回应，再用训练时特权提示给出分布目标并做决策感知筛选，在 LiveProBench 30B 上达到 59.64 分，但结论只在同协议同数据受控对比下成立。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2610.36959"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "流式视频助手何时该说话：Live-OPSD 的特权自蒸馏解读"
paper_digest_original_title: "Live-OPSD: On-Policy Self-Distillation for Proactive Streaming Large Video Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2610.36959v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2610.36959v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2610.36959v1.pdf"
paper_digest_primary_task: "音视频理解"
paper_digest_tags_contract: "paper-tag-flat-tags-v2"
paper_digest_tags_selection_contract: "paper-tag-selection-v2"
paper_digest_tags_registry_version: "paper-tag-catalog-v2"
paper_digest_tags_registry_sha256: "cdef54423b5dfc00a1d017ef6639446d2ecd1d9c1acf71c8eb4f6219a46b7ba8"
paper_digest_tags_concepts: [{"facet":"task","id":"task.av-understanding","label":"音视频理解"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"setting","id":"setting.streaming","label":"流式处理"}]
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 5.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "Live-OPSD 让流式策略先自己生成回应，再用训练时特权提示给出分布目标并做决策感知筛选，在 LiveProBench 30B 上达到 59.64 分，但结论只在同协议同数据受控对比下成立。"
paper_digest_authors: [{"affiliations":["Qwen Business Unit of AlibabaEqual contribution.Work done during an internship at Alibaba.Corresponding author."],"name":"Kaixuan Du"},{"affiliations":["Qwen Business Unit of AlibabaEqual contribution.Work done during an internship at Alibaba.Corresponding author."],"name":"Xin Wan"},{"affiliations":["Qwen Business Unit of AlibabaEqual contribution.Work done during an internship at Alibaba.Corresponding author."],"name":"Dai Guan"},{"affiliations":["Qwen Business Unit of AlibabaEqual contribution.Work done during an internship at Alibaba.Corresponding author."],"name":"Ming Chen"},{"affiliations":["Qwen Business Unit of AlibabaEqual contribution.Work done during an internship at Alibaba.Corresponding author."],"name":"Xiaoxi Jiang"},{"affiliations":["Qwen Business Unit of AlibabaEqual contribution.Work done during an internship at Alibaba.Corresponding author."],"name":"Guanjun Jiang"}]
paper_digest_abstract_sha256: "be838da28bbcbc3b9801758f12bc5990fd81f5ffe04f9d504d19b12fc3f72bb7"
paper_digest_sidecars: {"citation.bib":{"sha256":"6e012a39d816f940266727ec24d82e9c34700d2a8f2b8e0bb566d47e8063ae1b","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-36959/citation.bib"},"citation.json":{"sha256":"63d60b59b8a05ab168bbcbbf22182df22c090ab1bf360297775f2c95e8256623","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-36959/citation.json"},"citation.ris":{"sha256":"50f92042791c1fac294c5a3b54eff597be86b194a3de2b2371ed0ed97e83b517","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-36959/citation.ris"},"rethink-context.json":{"contract":"paper-research-context-v2","sha256":"6c9e4bb8b4a8e6c7fbf4b2eaa4e95f1e66945a4daa059c3d9289621e3dd347b8","url":"/audio-paper-digest-blog/data/papers/2026-10-29/2610-36959/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "4b88da64b4eb8adbb75abfcf3154fc705e05bf4ff4847df3972cf38ba26dd974"
paper_digest_api_reader_plan_sha256: "decb83c995b24c72fe58ef720f5c211b564dc8c2e894942ddb92ae90fb034cbb"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "0cbd1a8402d7b59a597c4e802163803c9548e2d3f90f9162812c59e15d9bfb5a"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "62f559d4e048e59279c747cb41f0281851b0952690371b57a5a1180baf4b7ec8"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "6486962172be105110030740d3ba5cb408bc80746540b21b39c0c49b6a24b7c0"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "9ecf8d9d229127d54006843939f2f770bf2cb478125ccaddbf9c2b73e4a4dfd4"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 流式视频助手何时该说话：Live-OPSD 的特权自蒸馏解读

> 英文题目：*[Live-OPSD: On-Policy Self-Distillation for Proactive Streaming Large Video Models](https://arxiv.org/abs/2610.36959v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音视频理解](/audio-paper-digest-blog/papers/?concept=task.av-understanding)
- **研究方法**：[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)
- **信号**：[音视频](/audio-paper-digest-blog/papers/?concept=signal.audiovisual)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.4/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Kaixuan Du：Qwen Business Unit of AlibabaEqual contribution.Work done during an internship at Alibaba.Corresponding author.
- Xin Wan：Qwen Business Unit of AlibabaEqual contribution.Work done during an internship at Alibaba.Corresponding author.
- Dai Guan：Qwen Business Unit of AlibabaEqual contribution.Work done during an internship at Alibaba.Corresponding author.
- Ming Chen：Qwen Business Unit of AlibabaEqual contribution.Work done during an internship at Alibaba.Corresponding author.
- Xiaoxi Jiang：Qwen Business Unit of AlibabaEqual contribution.Work done during an internship at Alibaba.Corresponding author.
- Guanjun Jiang：Qwen Business Unit of AlibabaEqual contribution.Work done during an internship at Alibaba.Corresponding author.

## 📌 核心摘要

流式助手面对不断到达的视频块和用户话语，需要在每个时刻决定说话还是沉默，以及在说话时生成什么内容，困难在于证据尚不完整，说早会打断交互，说晚或不说会错过时机。论文提出Live-OPSD，先让当前策略只看流式上下文生成一段延续，再让同一模型在附加一段说明相关证据的特权提示下对这段延续的每个位置给出目标分布，最后用分布匹配损失更新无提示的策略，该更新只作用于策略自身已访问的前缀。哪些时刻参与更新由决策感知选择决定，它优先保留当前决策与标注决策不一致的点，再补充一致的说话和沉默点。在LiveProBench上同骨干Qwen3-Omni-30B-A3B对照中，六项任务平均分指标Avg.上Live-OPSD为59.64%，高于Vanilla-SFT的54.38%。在OVO-Bench评测中总体准确率指标All上Live-OPSD为65.84%，高于其骨干Qwen3-Omni-30B-A3B的61.00%，表明定时训练未损害已有理解能力。该结论依赖已对齐决策监督和提示的流式协议，外部提示质量、录制历史与部署历史的差异尚未消除。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 流式助手为什么难在时机而不仅是答对

这篇论文研究的不是离线视频问答，而是一边看视频流一边决定要不要插话的助手。输入是不断到达的事件，每一步要么是一段音视频块，要么是一句用户话。输出在用户说话时必须回应，在视频块后可以说话也可以保持沉默。难点在于证据还在展开，说早了会打断，说晚了或一直沉默会错过帮忙的机会，答对内容但时机错仍然算不合适。

已有流式模型解决了把长历史压缩记忆、把视频和对话交错表示、支持边看边答的接口，但训练大多只学标注好的助手轮次。也就是说，模型在标注要求说话的位置学参考回答，在标注沉默的位置学沉默标记，却没有直接在自己当前会说错的位置上被纠正。论文要补的正是这一块：让策略在自己生成的前缀上接受指导，同时学会何时说和如何说。

### 已有路线在何处分叉

按论文的梳理，第一条路线是流式感知与交互，例如 VideoLLM-online 学时间对齐对话，Flash-VStream 等做法压缩或检索历史视觉状态，MMDuet 把视频和文本做成交错轮次。它们提供了流式接口，但主要贡献不是面向当前策略的后训练目标。

第二条路线是把回应决策放在不同位置的主动系统，例如 Dispider 拆感知、决策和反应，StreamBridge 另训激活模型，StreamMind 用事件门控决定是否调用语言模型，还有学就绪信号、结构化视觉提案匹配和向前规划等做法。它们改的是推理时的门控、规划、记忆或计算，Live-OPSD 则不动原生推理机制，只给已有流式策略加一个后训练目标。

第三条路线是学时机的监督目标，AURA 用屏蔽加权平衡沉默与说话，StreamPro 的 CB-Stream Loss 平衡决策位置和回应文本，之后还有用奖励优化时机的强化学习。它们的目标仍绑在标注动作和标注前缀上，需要长序列 rollout 和显式奖励定义。Live-OPSD 的分解不同：由当前回应决策决定在哪些上下文上更新，由带特权提示的教师分布提供词级别信号。

### 任务的状态、动作与监督是什么

论文把时刻 t 到达的事件记为 x_t，可能是音视频块或用户话，可见历史记为 s_t，包含之前所有事件和助手完整轮次。动作空间包括自然语言回应集合与沉默动作。关键规则是用户话后必须回应，可以是确认或说明证据不足，视频块后可以回应也可以沉默。形式上写为两类状态的可选动作不同，语言模型解码器仍可能输出不符合规则的动作。

\[\mathcal{A}(s_{t})=\begin{cases}\mathcal{A}_{\mathrm{speak}},&x_{t}\text{ is a user utterance},\\[2.0pt] \mathcal{A}_{\mathrm{speak}}\cup\{\varnothing\},&x_{t}\text{ is a stream chunk}.\end{cases}\]

每个训练点有记录上下文、监督决策 b_t 和特权提示 h_t。b_t 只说是二值的该说还是该沉默，不规定完整回答。在视频块步骤 b_t 为 1 表示应主动回应，为 0 表示应沉默。h_t 是简短文字，说明相关视觉或声音证据及其与预期行为的关系。流式微调学的是与 b_t 对应的记录动作，而 Live-OPSD 只把 h_t 给教师。

**流式上下文 × 回应决策：** 流式上下文指到当前时刻为止可见的视频块和对话历史，看不到未来；回应决策指在每个视频块后选择说话还是保持沉默。两者搭配的意义是，模型必须只用已到证据判断现在是否值得打断用户，理解与时机被绑在同一步动作上。

### Live-OPSD 的整体流程是怎样的

方法可以沿一个候选决策点走一遍。当前无提示策略只看流式上下文，自己生成一段延续，可能是说话也可能是沉默。同一模型在加上特权提示后，对这段自己生成的前缀逐位置给出教师分布。决策感知筛选从已打分的点中选出至多 K 个点，用反向 KL 把无提示学生向教师分布拉近。更新后的参数同时成为下一轮的采样器和教师，因此教师目标每轮重算，离线提示文字复用。

下面这张训练总览图把两条分支画得很清楚，读图时注意提示只走上面一条路，更新梯度只经过学生。

> **看图路径：** 1. 先看下方时间线与状态如何进入无提示的学生分支；2. 再看上方分析器给出的特权提示如何只进入教师分支；3. 最后看动作经决策感知筛选后如何回到学习目标形成闭环

[![原论文 Figure 1：Live-OPSD training. The unhinted policy generates a continuation, while the same current model…](https://arxiv.org/html/2610.36959v1/framework.png)](https://arxiv.org/html/2610.36959v1/framework.png)

*论文图 1。原论文 Figure 1:：“Live-OPSD training. The unhinted policy generates a continuation, while the same current model uses a privileged hint to score its prefixes.”。*

图中下方是随时间展开的状态，包含用户 standing 指令与视频帧，上方分析器给出例如锅中出现裂开鸡蛋所以该回应的提示。教师看到状态加提示，学生只看到状态，两者共用同一策略模型。学生采样出的动作再经决策感知筛选进入学习目标，目标注明梯度只流过学生的 logits。更新箭头回到策略模型，表示下一轮 rollout 与打分都用新参数。这种设计把特权信息蒸馏与同策略蒸馏结合起来，学习位置来自自己，学习方向来自有提示的自己。

### 特权提示如何只帮教师不直接教学生

提示举例能说明分工。例如对报告白衬衫人员进入某区域的指令，提示可能写深色衬衫的人在区域外、白衬衫的人还没进入所以应沉默。教师在系统上下文中收到这段话，学生收到同样的流式观察和部署指令但没有这段话。实现上提示由外部模型离线标注，蒸馏时的教师是当前策略加上这段文字，而不是外部模型本身。

下面这张监督示意图展示了交错块与用户轮如何各带决策与提示，读图时重点看中间一行特权数据与下面一行推荐动作的对应。

> **看图路径：** 1. 对照视频流一行与特权数据一行，看同一时刻证据描述如何变化；2. 看用户提问与视频块后推荐动作在说话和沉默间的切换

[![原论文 Figure 2：Supervision at streaming decision points.](https://arxiv.org/html/2610.36959v1/data.png)](https://arxiv.org/html/2610.36959v1/data.png)

*论文图 2。原论文 Figure 2:：“Supervision at streaming decision points.”。*

图中上一行是视频流与用户查询，中间一行是每步的特权描述，下一行是推荐动作。当用户说看到男子加冰块时请告诉我，块 1 仍在倒酒对应沉默，块 2 正在加冰块对应主动回应，块 3 在加柠檬皮与当前指令无关对应沉默，最后用户直接提问则必须回答。流式微调学的是下面一行的记录动作，Live-OPSD 则把中间一行的提示只给教师打分用。附录还说明提示是分析而不是答案，参考回答不会出现在提示里，教师与学生共享聊天模板、分词器和媒体表示，只是提示长度不同，回应位置按提示尾部对齐。

**特权提示 × 教师分布：** 特权提示是训练时才有的简短文字，说明当前证据与该说还是该沉默的关系；教师分布是同一模型在看到该提示后对下一个词的概率分布。搭配后，提示只改变教师的判断依据，不直接教学生背答案，学生要学的是有依据时的概率形状。

### 决策感知筛选如何分配有限的更新名额

每轮能更新的点是有预算的，记为至多 K 个。候选是视频块步骤，用户话与其回应保留在上下文中不参与选择。对采样动作算是否与监督决策不一致的指示，不一致点记为集合 I，一致回应记为 R，一致沉默先做与策略无关的子采样再打分。打分覆盖 I、R 与子采样沉默，然后按优先级取至多 K 个：先取不一致配额且 2 个方向轮流交替，再取一致回应，再取跨视频轮转的一致沉默。若已打分沉默很少则放宽到全预算。重要细节是决策标签只控制选哪些点，不引入逆频率加权，一致的动作仍可能有蒸馏信号，因为决策一致不等于词分布一致。

下面这张图用切芒果的例子把 4 类结果与优先级画了出来，读图时先看分类再看入选顺序。

> **看图路径：** 1. 先看左图三行如何把采样决策与标注决策组合成四类结果；2. 再看右图被选批次中不一致、一致回应、一致沉默的优先级从高到低排列

[![原论文 Figure 3：Decision-Aware Selection. (a) Sampled decisions are grouped as the two inconsistency directions,…](https://arxiv.org/html/2610.36959v1/das.png)](https://arxiv.org/html/2610.36959v1/das.png)

*论文图 3。原论文 Figure 3:：“Decision-Aware Selection. (a) Sampled decisions are grouped as the two inconsistency directions, consistent responses, or consistent silence.”。*

左图一行视频对应 10 个块步骤，每列标出监督决策 b_t、采样决策与结果类。不一致的 2 个方向分别记为 D0 与 D1，一致回应为 R，一致沉默为 S。右图先把已打分池写成 3 组，再按优先级从高到低排成被选批次，不一致在最上，沉默在最下。推理时策略用骨干原生回应接口，不带提示、筛选或额外分类器。论文还用命题分析说明，不一致池能否带来更大教师优势取决于学生分歧概率与教师优势的协方差是否为正，若两者在同样困难上下文上都差，分歧本身不代表有教学信号。

**同策略前缀 × 蒸馏更新：** 同策略前缀指当前策略在无提示情况下自己采样出的回应或沉默序列的前缀；蒸馏更新指把教师在相同前缀后的分布作为目标来调整学生。组合起来，学习发生在模型自己会走到的位置上，正好补上只学标注回答时见不到的说太早、该说没说等情况。

**决策不一致 × 决策感知筛选：** 决策不一致指采样动作的说或沉默与标注决策不一致；决策感知筛选指按不一致、一致回应、一致沉默的优先级在每轮至多 K 个点中选更新集合。搭配的意义是用分歧定位当前最需要纠正的上下文，同时保留一部分一致样本维持行为覆盖，筛选只决定用哪些点，不改变梯度加权。

### 分布目标、截断表示与起点模型如何衔接

在每个被选点，学生生成延续后，教师与学生在同一前缀后预测下一个词，不需要单独生成教师回答。默认用反向 KL，即学生相对教师的 KL，梯度只经过学生，教师固定。更新是对生成延续的词平均，包含沉默动作，每个点按延续长度占全局词均值。回应超过决策解决位置之后的词仍受监督，但主要影响内容而非二值决策。

\[\mathcal{L}_{\mathcal{D}}(\theta;\theta_{0})=\frac{1}{\sum_{t\in\mathcal{B}_{\mathrm{sel}}}L_{t}}\sum_{t\in\mathcal{B}_{\mathrm{sel}}}\sum_{\ell=1}^{L_{t}}\mathcal{D}\!\left(P_{t}^{(\ell)},Q_{\theta,t}^{(\ell)}\right).\]

实现上不存全词表分布，只保留教师概率最高的 k 个词并在该支持集上重归一化，存储从词表规模降到与 k 乘长度成正比，但得到概率所需的前向计算并不省掉。形式如下，训练时所有散度变体共用同一支持集、归一化和掩码。

\[\widetilde{P}_{t}^{(\ell)}(v)=\frac{P_{t}^{(\ell)}(v)}{\sum_{u\in\mathcal{K}_{t}^{(\ell)}}P_{t}^{(\ell)}(u)},\qquad\widetilde{Q}_{\theta,t}^{(\ell)}(v)=\frac{Q_{\theta,t}^{(\ell)}(v)}{\sum_{u\in\mathcal{K}_{t}^{(\ell)}}Q_{\theta,t}^{(\ell)}(u)},\]

起点模型也很重要。先用流式微调得到 Live-SFT-Zero，监督该实例中所有沉默消息与最后一个非沉默消息，早期非沉默消息因窗口截断可能丢失证据而被排除，沉默消息内每个词权重为沉默消息数的倒数以免被数量淹没。Live-OPSD 从该 checkpoint 出发，之前助手轮仍用记录历史，只在当前记录上下文处做回应级同策略采样，因此不是全轨迹在策略分布上展开，部署时历史才真正变为模型自己生成的前轮。

### 在什么骨干、数据和基线上比较

实验用 Qwen2.5-Omni-7B 与 Qwen3-Omni-30B-A3B，统一到相同流式交互协议，音视频块与用户和助手轮交错。训练语料含直接提问与需要主动回应的 standing 指令，对话展开为因果决策上下文并配监督决策与提示，源视频定划分边界以免同一来源跨划分。Live-OPSD 数据含 3712 个训练实例，之前流式微调阶段约 196000 个实例，来源均为公开数据集。

受控基线是同一骨干上的 3 种继续微调：Vanilla-SFT 对保留参考消息等权交叉熵，CB-SFT 迁移 StreamPro 的 CB-Stream 目标，SSB-SFT 用 AURA 的静音语音平衡目标并与 Live-SFT-Zero 同目标。Live-OPSD 从同一起点再做后训练。主表骨干行在音频关闭下评测，30B 主结果用反向 KL。另有已发布主动系统的系统级对比，保留各自推理配置，不与受控目标对比混为一谈。评测用 LiveProBench 看事件触发与沉默，OmniMMI 的主动报警看是否在需要时提醒，OVO-Bench 看过去与现在理解及向前主动回应。

### LiveProBench 主结果在说什么

下表比较的问题是，在同一骨干与同一音频关闭条件下，不同训练目标的六任务平均分谁更高。LiveProBench 报告事件敏感度、起始回应、窗口回应、异常报警、持续沉默和重复计数六项，平均为六项算术均值，含重复计数。事件敏感度同时看报警覆盖与沉默准确，几何均值只在两者都高时才高。指标方向都是越高越好。

| Qwen3-Omni-30B-A3B |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Method or model | Event Sensitivity | OR | WR | AA | SS | DC | Avg. |
| Live-SFT-Zero-30B | 59.36 | 52.29 | 43.75 | 73.11 | 42.39 | 37.31 | 51.37 |
| + Vanilla-SFT | 64.29 | 63.30 | 67.50 | 57.56 | 70.65 | 2.99 | 54.38 |
| + CB-SFT | 76.58 | 72.94 | 45.00 | 68.07 | 31.52 | 23.88 | 53.00 |
| + SSB-SFT | 75.32 | 64.68 | 41.25 | 65.55 | 23.91 | 32.84 | 50.59 |
| + Live-OPSD | 63.34 | 61.93 | 70.00 | 68.49 | 59.78 | 34.33 | 59.64 |

表中 30B 的 Live-OPSD 平均 59.64，超过 Vanilla-SFT 的 54.38、CB-SFT 的 53.00 与 SSB-SFT 的 50.59，相对最强继续微调高 5.26 个百分点。7B 的 Live-OPSD 平均 48.97，也高于同骨干 3 个基线的 48.33、44.98 与 33.78，但领先幅度很小，且在事件敏感度、起始回应等单项上并非最好，7B 上 CB-SFT 在事件敏感度 73.26、起始回应 61.47 和重复计数 26.87 上领先，Vanilla-SFT 在窗口回应 65.00 和持续沉默 53.26 上领先，Live-OPSD 只在异常报警 65.13 上领先。限制是这是点估计比较，论文未给出显著性与多次种子方差，且音频关闭条件与完整系统部署条件不同，不能直接推广到开音频或换协议的胜负。

### 主动报警与综合理解是否被保住

这两个表回答的是系统级能力有没有因为学时机而丢掉。OmniMMI 的主动报警只看无提示时是否该提醒，OVO-Bench 看总体准确率。它们用各自外部基准协议，已发布系统保留各自推理配置，因此不是严格同条件目标对比，只能看完整模型水平。

| Model | PA |
| --- | --- |
| AURA | 37.50 |
| Live-SFT-Zero-7B | 31.50 |
| + Live-OPSD | 56.50 (+25.0) |
| Live-SFT-Zero-30B | 39.50 |
| + Live-OPSD | 59.00 (+19.5) |

上表显示 7B 的 Live-OPSD 在主动报警上为 56.50，比起点 31.50 高 25.0 个百分点，30B 为 59.00，比起点 39.50 高 19.5 个百分点，均高于表中 AURA 的 37.50。但论文明确这些系统级结果用不同推理配置，受控目标对比只在 LiveProBench 表中。

| Model | All |
| --- | --- |
| AURA | 65.30 |
| Qwen2.5-Omni-7B | 50.30 |
| + Live-SFT & Live-OPSD | 61.97 |
| Qwen3-Omni-30B-A3B | 61.00 |
| + Live-SFT & Live-OPSD | 65.84 |

上表显示 OVO-Bench 总体上 7B 从 50.30 到 61.97，30B 从 61.00 到 65.84，30B 超过表中 AURA 的 65.30。附录细表指出这种总体领先主要来自实时视觉感知与回溯，直接比较时向前主动回应仍低于最强已发布系统。也就是说，时机后训练没有把综合理解拉垮，但在需要等待信息再答的子能力上仍有短板，结论依赖视频单模态本地评测与所用基准版本。

### 散度选择与有无筛选带来什么变化

消融要回答两个问题：概率加权方式是否重要，自适应筛选是否比固定位置好。比较在相同训练设置与相同预算下进行，主结果用反向 KL，去筛选对照保留 JSD 并换成每源视频固定后缀选择。指标仍是 LiveProBench 六项与均值，越高越好。

| Variant | ES | OR | WR | AA | SS | DC | Avg. |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Reverse KL | 63.34 | 61.93 | 70.00 | 68.49 | 59.78 | 34.33 | 59.64 |
| Forward KL | 43.03 | 31.19 | 58.75 | 11.34 | 54.35 | 17.91 | 36.10 |
| JSD | 67.08 | 67.43 | 66.25 | 70.17 | 61.96 | 22.39 | 59.21 |
| w/o DAS | 59.58 | 55.50 | 51.25 | 54.20 | 44.57 | 0.00 | 44.18 |

表中反向 KL 均值 59.64，JSD 为 59.21，两者接近，但反向 KL 在窗口回应 70.00 对 66.25 与重复计数 34.33 对 22.39 上更高。前向 KL 均值只有 36.10，事件敏感度 43.03 与异常报警 11.34 明显偏低，表现为欠触发、错过多数回应窗口。去掉筛选后均值从 59.21 降到 44.18，重复计数降到 0.00。本表数值与单位依据论文 PDF。

下图是 Qwen3 上窗口决策的时机 verdict 分布，读图时注意过早、窗内、漏检 3 段占比之和为 100%。

> **看图路径：** 1. 横向比较反向 KL、前向 KL 与无筛选在正确时机占比上的差异；2. 注意前向 KL 的漏检段与 SSB-SFT 的过早段分别偏向哪一侧

[![原论文 Figure 4：LiveProBench timing outcomes for Qwen3-Omni.](https://arxiv.org/html/2610.36959v1/timing_verdicts.svg)](https://arxiv.org/html/2610.36959v1/timing_verdicts.svg)

*论文图 4。原论文 Figure 4:：“LiveProBench timing outcomes for Qwen3-Omni.”。*

图中可见前向 KL 的漏检段最长，窗内仅 31%、漏检达 68%，CB-SFT 与 SSB-SFT 的过早段明显更长，分别为 29% 和 39%，反向 KL 与 JSD 的窗内段更长，分别为 65% 和 68%，反向 KL 3 段为 10%、65%、25%，JSD 3 段为 11%、68%、21%，去筛选 3 段为 13%、53%、34%，漏检也明显变宽，Vanilla-SFT 3 段为 8%、63%、30%，CB-SFT 3 段为 29%、61%、10%，SSB-SFT 过早 39%、窗内 56%。这种分布解释了均值差异的来源：前向 KL 偏保守少说，平衡类基线偏激进早说。限制是消融固定在 Qwen3 与所用 held-out 上，110 步内曲线显示反向 KL 多数时间领先但并非全程每步最优，不能把末步结论推广为训练全程或另一骨干必然相同。

**反向 KL × 前向 KL：** 前向 KL 是让学生覆盖教师支持的各种可能，反向 KL 是让学生集中到自己当前更倾向且教师也认可的方向。论文在共享参数的师生设置下对比两者，发现反向 KL 在保持窗口内回应和计数任务上更稳，前向 KL 更容易欠触发，这说明概率加权方式直接影响时机保守程度。

### held-out 曲线补充了什么稳定性信息

除终点分数外，论文在 1458 个固定决策点上跟踪主动 F1、事件漏检率、误报率与每幕精确匹配随训练步的变化，箭头标出改进方向，集合固定因此跨腿可比。曲线显示反向 KL 在主动 F1、误报与精确匹配上多数时间领先，以更高漏检为代价，前向 KL 与去筛选波动更大。

这意味着终点均值接近的反向 KL 与 JSD 在过程稳定性上仍有差别，而前向 KL 的欠触发不是偶然单点。未胜出项也要记住：反向 KL 的保守 trade-off 是漏检更高，若任务更惩罚漏检，其优势可能缩小。固定 held-out 与真实部署的模型生成历史仍有差距，因此曲线只能说明在记录上下文上的决策质量，不能证明长轨迹自主交互同样稳定。

### 哪些条件变了结论就可能不成立

首先，提示依赖外部模型离线标注，试点发现 Qwen3-Omni 自己做多轮提示标注不一致，因此不能说方法是完全自监督，换标注质量或换提示写法，教师优势可能变化。其次，训练在记录历史处采样，只做到回应级同策略，部署历史是模型自己生成的前轮，存在历史来源错位，在线提示生成与轨迹级采样仍是未来工作。

再次，理论界把学生分歧用教师分歧加累积反向 KL 控制，并给出截断支持与筛选的修正项，但从实现到界需要样本覆盖相关上下文、前缀与词表，实际只用固定样本与全局词均值，因此是分布层充分条件而非每步保证。最后，资源侧只验证了 30B 反向 KL 运行的部分配置，7B 与基线超参、种子、硬件时间等未完整保留，StreamingBench 等系统级对比开音频而主表关音频，跨表不能直接比大小。

### 要复现第一步该做什么

先把流式表示固定下来：每秒一切块，每块 2 帧加 16 kHz 单声道音频，帧缩放到至多 448×448，上下文窗 65536，Qwen2.5 需用 YaRN 扩到同窗。按 standing 指令与直接提问把对话展开为因果决策上下文，每个保留点配二值决策与离线提示，源视频定划分并检查与基准无重叠。

再训出 Live-SFT-Zero 作为起点，监督同实例中沉默消息与最后非沉默消息并对沉默加权。然后按算法循环做生成、打分、筛选与反向 KL 更新，每轮刷新采样与教师目标，推理保持原生接口。复现时要记录学习率、K 预算、教师支持 k、概率截断、解码方式与随机种子，论文因产物缺失未报告部分基线系数与 7B 细节，不要从脚本默认猜。未发现来源绑定且完成验证的资源，因此不得声称代码、模型或数据已公开，复现应按论文附录从公开视频数据集与骨干出发重建。

### 什么时候值得试以及还缺什么验证

当你的流式助手已有可用感知与原生沉默接口，主要问题是说太早、该说没说或开头方式不对，且能在训练时写出证据相关的简短提示，Live-OPSD 值得一试。它不动推理门控，只在后训练阶段用自己采样的前缀学有提示时的分布，预算花在分歧与一致样本的组合上。

使用时注意三点：提示要说证据与该沉默或该说的理由而非直接给答案，筛选配额要保证不一致方向轮换与跨视频沉默覆盖，散度优先试反向 KL 并同时看漏检与误报。还缺的验证是开音频下的主结果、多次种子的方差、长轨迹自主历史下的时机稳定性，以及换标注模型后提升是否保持。论文的 5.26 分提升只在 Qwen3-Omni 同协议继续微调对比下成立，跨系统排名需回到各自基准协议单独看。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2610.36959v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-10-29 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-10-29/)
