---
title: "ReFrame: Silence-Aware Compute Reclamation for Full-Duplex Speech Models"
date: 2026-11-03
draft: false
tags: [全双工语音交互, 语音对话系统, 动态计算与早退, 检索增强]
categories: [论文速递]
description: "ReFrame 针对全双工语音模型每帧都做稠密推理的问题，用双方静音时的推测执行和用户说话时的折叠并行来省 GPU 时间，并把省出的帧预算用于可恢复的检索与语言模型查询，在 1225 段对话上省 18.80-31.01% 执行时间并保持文本基本一致。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.01835"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "静音时省算力、听人说话时并行算：ReFrame 如何复用全双工对话的沉默结构"
paper_digest_original_title: "ReFrame: Silence-Aware Compute Reclamation for Full-Duplex Speech Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.01835v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.01835v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.01835v1.pdf"
paper_digest_primary_task: "全双工语音交互"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"task","id":"task.speech-dialogue","label":"语音对话系统"},{"facet":"method","id":"method.dynamic-computation","label":"动态计算与早退"},{"facet":"method","id":"method.retrieval-augmented","label":"检索增强"}]
paper_digest_primary_method: "动态计算与早退"
paper_digest_score: 6.5
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "ReFrame 针对全双工语音模型每帧都做稠密推理的问题，用双方静音时的推测执行和用户说话时的折叠并行来省 GPU 时间，并把省出的帧预算用于可恢复的检索与语言模型查询，在 1225 段对话上省 18.80-31.01% 执行时间并保持文本基本一致。"
paper_digest_authors: [{"affiliations":["Tsinghua University"],"name":"Zheng Zhou"},{"affiliations":["The Hong Kong University of Science and Technology (Guangzhou)","ScaleX-IO"],"name":"Guanyi Chen"},{"affiliations":["Sun Yat-sen University","ScaleX-IO"],"name":"Jing Wei"},{"affiliations":["Tsinghua University"],"name":"Haoyuan Liang"},{"affiliations":["The Hong Kong University of Science and Technology (Guangzhou)","ScaleX-IO"],"name":"Jian Zhang"},{"affiliations":["Tsinghua University"],"name":"Haohuan Fu"}]
paper_digest_abstract_sha256: "616f7b4832837783867b8848e763bfa164506e1e4b296c2e91d26ae046bb7165"
paper_digest_sidecars: {"citation.bib":{"sha256":"7f4c630d507802e9e71fec92a53d3cf035db5d149b68c22eb4b4eb1b1572bc77","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01835/citation.bib"},"citation.json":{"sha256":"90baad4afb826e57aacab6d0486d60087556cec68b754ec09a605fec050561c6","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01835/citation.json"},"citation.ris":{"sha256":"ee1b518b49bf5495314e72342e48640d0e9f5dbc258591828703c469e1867342","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01835/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"01f890eedadc601474b8f70f9aa944c87c2d71a4e049d0f59eb8d7f4c1410b8a","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01835/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "ca37e6fa4e855af07a423f307ffe4be83d54c2e4c86a0861f4a15f8ca4ca52b3"
paper_digest_api_reader_plan_sha256: "6cc1df00eb1b6bb338add643f3e666ac9b98bab7bf77f957520da4f17113e3f4"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "c3d05aca9e562b61c449ef94ccfaa913ca0fbd2fc287c4ab80114788fcbd674d"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "29e6f8d0ab53f724c39ea91c4b64ff39ed83338a71dc959bda2decd144939de9"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "3799d4415dfe661880373a91f523adf6db9b21faab1ad2377bb56319a8699f33"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "988a80d203b194a3eaff7458d09e1ecdb2db26ea3336d62ef5e4d1e71e4c8e10"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 静音时省算力、听人说话时并行算：ReFrame 如何复用全双工对话的沉默结构

> 英文题目：*[ReFrame: Silence-Aware Compute Reclamation for Full-Duplex Speech Models](https://arxiv.org/abs/2611.01835v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-paper-digest-blog/papers/?concept=task.full-duplex)；[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [语音对话系统](/audio-paper-digest-blog/papers/?concept=task.speech-dialogue)
- **研究方法**：[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression) → [动态计算与早退](/audio-paper-digest-blog/papers/?concept=method.dynamic-computation)；[检索增强](/audio-paper-digest-blog/papers/?concept=method.retrieval-augmented)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.5/10** | 创新 1.3/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Zheng Zhou：Tsinghua University
- Guanyi Chen：The Hong Kong University of Science and Technology (Guangzhou)；ScaleX-IO
- Jing Wei：Sun Yat-sen University；ScaleX-IO
- Haoyuan Liang：Tsinghua University
- Jian Zhang：The Hong Kong University of Science and Technology (Guangzhou)；ScaleX-IO
- Haohuan Fu：Tsinghua University

## 📌 核心摘要

全双工语音模型需要在固定帧率下同时接收用户音频并生成智能体音频，每帧都要执行完整的跨帧与帧内生成，静默期间也持续占用计算。论文把输入表示为逐帧到达的用户音频帧、上一帧智能体反馈和循环状态，输出是当前帧的文本预测与多层音频记号，难点在于未来用户输入不可预知且多路音频记号之间存在依赖。互静默推测负责在双方持续静默时提出多帧静默延续并做块验证，只提交通过文本与表示稳定性检查的前缀。聆听帧折叠负责把已经到达的多帧用户输入折叠为一次带掩码的跨帧运算，并用一次成帧的帧内生成产生候选音频，再保留与原有反馈一致的前缀并修复后缀。帧预算再投资把省出的帧内时间切分为可恢复的块，用于推进检索与语言模型查询并在条件满足时注入引用，其与已有推测解码的区别在于验证对象是状态特定的静默延续而非任意文本延续，且输出顺序由持久队列维持。在NVIDIA A100-40GB上运行完整1225段交互FDBench的配对比较中，联合执行相对逐帧稠密执行的Time saved指标对应GPU执行时间减少18.80%至31.01%，Text指标的全位置文本一致性在三个Moshi检查点为99.328%至99.446%、另两个模型为100%轨迹一致。在采用Moshika-RAG并搭配相同外部参考编码服务的500个HaluEval问题评测中，联合执行相对逐帧稠密执行的Correct generated spoken answers指标从86个提高到205个。结论适用于静默占比高且静默表示稳定的全双工交互，在打断密集时收益下降；原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 全双工语音交互的输入输出与每帧必须完成的事

刚接触语音对话的读者可以先把全双工理解为双方可以同时说话的电话式交互。模型在固定帧率下不断接收用户音频帧，同时不断产生智能体的音频帧。以 Moshi 为例，它每 80 毫秒在 12.5 赫兹下产生一个 Mimi 帧，这意味着每 1 帧都留给模型推理的时间是固定的，超时就会影响实时播放。

每帧的输入是当前到达的用户音频帧，输出是智能体本帧要播放的音频帧和对应的文本预测，模型内部还有跨帧传递的循环状态，用来记住历史上下文和注意力缓存。论文把稠密推理定义为每 1 帧都完整执行一次前向与生成，这在智能体长时间沉默时也很重。作者统计常规服务中智能体最多在 84% 的交互帧保持沉默，但现有系统仍对沉默帧和说话帧一视同仁地全量计算。

因此任务目标很具体：在不改变固定帧率播放的前提下，减少沉默相关帧的前台模型计算，并把省出的时间用来做更有用的辅助计算。必须保留的信息是对话状态的连续性，包括文本语义何时开始、何时保持沉默，以及音频波形在听感上是否仍是沉默。输出仍然是逐帧的智能体文本与音频，不能因为省算力而提前或推迟回应。

### 已有路线为何只加算力或只处理单侧聆听

全双工语音模型有两类典型结构。一类是 Moshi 及其相关多流结构，用分层的 Temporal 与 Depth 结构分别处理跨帧上下文和帧内多码本音频；另一类如 BayLing-Duplex 把用户语音、助手文本和助手语音交织成一个自回归序列，用单个语言模型处理。PersonaPlex 则在类似全双工结构上做可控角色与音色。它们都要满足严格的每帧时延。

已有改进多沿着增加计算的方向走，例如在静音区间做链式思考式的隐式推理以提高回答质量，但这会进一步挤占每帧预算。另一条线是推测解码，用小模型或多头提前给出多个候选再由大模型并行验证。然而全双工的未来用户帧是外部输入，到达之前不可见，而且语音生成耦合了语义与多路编码 token，跨帧状态和帧内码本依赖都可能因失配而需要恢复。

辅助计算方面，MoshiRAG 研究了异步调用外部语言模型增强事实性，检索增强则有检索、重排与融合生成等成熟做法。但论文指出，这些工作通常增加而非减少推理代价，也没有回答省出的前台算力如何在每帧时限内被安全复用。ReFrame 的区别是同时处理双方静音和用户说话两种沉默结构，并把省出的预算变成帧内可调度的辅助任务。

### 两种沉默为何要分开处理

论文把用户是否说话记为 ut，智能体是否说话记为 at，它们的组合决定路由器走哪条路径。双方静音对应两者都不说话，智能体聆听对应用户说话而智能体沉默，智能体说话则保留稠密执行。这种划分不是为了分类而分类，而是因为两者的时间结构不同。

在持续的双方静音里，模型反复输出静音文本 token，相邻帧的 Temporal 隐状态高度相似，Mimi 音频虽有小波动但解码后听感仍是沉默。这意味着未来几帧大概率还是沉默，可以整块提出再验证。

而在智能体聆听时，每帧都有新的用户音频到来，上 1 帧的静音输入无法预测下 1 帧，简单重复上 1 帧就会错。但智能体侧往往连续多帧保持沉默反馈，这种稳定的智能体反馈是可以复用的。于是问题变成：如何对已到达的用户帧做并行计算，同时保证自回归依赖不被破坏，并在验证失败时只修复受影响的后缀。

### ReFrame 的三条路径如何分工与汇合

ReFrame 的总体流程是按对话状态路由。双方静音走 Mutual Silence Speculation，简称 MSS；用户说话而智能体沉默走 Listening Frame Folding，简称 LFF；其余主要是智能体说话，走原来的稠密推理。MSS 与 LFF 省出的帧内时间由 Frame-Budget Reinvestment，简称 FBR，分配给可恢复的外部检索和语言模型工作者，再通过 Moshi 的条件接口注入正在进行的回答。

下图展示了这种状态感知执行：顶部是 3 种对话状态，中部是对应的执行模块，底部是省出时间后的辅助计算，智能体说话的稠密路径不参与省算力。读图时重点看静音与聆听两条路径如何汇入同一段省出时间。

> **看图路径：** 1. 先看顶部三列的对话状态划分：双方静音、用户说话、智能体说话各自指向哪条执行路径；2. 再看中部省出的模型时间与保护间隔如何汇入下方的辅助计算；3. 最后看辅助计算从模型查询到检索与语言模型查询再到模型回答的流向

[![原论文 Figure 1：ReFrame routes mutual silence to MSS and agent-listening intervals to LFF, while retaining dense…](https://arxiv.org/html/2611.01835v1/reframe_overview.png)](https://arxiv.org/html/2611.01835v1/reframe_overview.png)

*论文图 1。原论文 Figure 1:：“ReFrame routes mutual silence to MSS and agent-listening intervals to LFF, while retaining dense execution during agent speech.”。*

上图确实可见三列从对话波形指向不同执行框，蓝色与黄色两路汇入粉色的帧预算条，帧预算条分为模型时间、省出时间和保护间隔，再向下指向包含模型查询、语言模型查询、检索与模型回答的辅助计算框。这说明省算力与用算力是解耦的，前台先保证帧率，后台再利用剩余时间。

路由规则本身可以用活动对的形式写清，MSS、LFF 与稠密分别对应不同的活动组合。

\[\pi(u_{t},a_{t})=\begin{cases}\textsc{MSS{}},&(u_{t},a_{t})=(0,0),\\ \textsc{LFF{}},&(u_{t},a_{t})=(1,0),\\ \textsc{Dense},&\text{otherwise}.\end{cases}\]

该式中 pi 是路由器，ut 和 at 分别是用户与智能体语音活动，取值为 0 或 1。它的作用是把每 1 帧的执行方式变成状态的函数，后续所有验证、队列与预算分配都依赖这个分支判断。

**相互静音 × 智能体聆听：** 相互静音指用户与智能体都不说话，输入可预期为沉默延续，适合整块推测；智能体聆听指用户说话而智能体沉默，用户输入每帧都在变，不能复用上一帧来猜。两者是互补的对话状态，前者靠稳定复用省算力，后者靠把已到达帧并行折叠省算力，合在一起才覆盖论文统计中超过一半的帧。

### 稠密推理的基准：每帧算什么、状态存在哪里

要理解省算力的效果，先要知道稠密推理每帧做了什么。模型用 xt 表示用户音频帧，用 yt-1 表示上 1 帧智能体反馈，用 st 表示循环状态。Temporal 部分根据这三者算出当前隐状态 ht 与文本预测 lt 并更新到 st+1，Depth 部分再根据 ht 与 lt 生成本帧音频。

\[(h_{t},\ell_{t},s_{t+1})=\mathcal{T}_{\theta}(x_{t},y_{t-1};s_{t}),y_{t}=\mathcal{D}_{\theta}(h_{t},\ell_{t}),\]

该式中 T 是跨帧的 Temporal Transformer，D 是帧内的 Depth Transformer。ht 是跨帧隐状态，lt 是文本预测，st+1 是带缓存的下一状态。在 Moshi 类多流结构中，跨帧历史放在 Temporal 的键值缓存里，而 Depformer 的键值只在帧内码本生成期间使用、跨帧重置，这一点决定了后面 MSS 修正后不需要重放整个序列。

在多通道交织结构如 BayLing-Duplex 中，用户语音、助手文本与助手语音组成一个统一自回归序列，由单个语言模型处理，没有独立的 Depth 模块。论文对两类结构做了适配，但核心思想一致：稠密是逐帧串行，优化是多帧并行加验证。

**Temporal Transformer × Depth Transformer：** Temporal Transformer 负责跨帧传播对话上下文，每帧根据用户帧和上一帧智能体反馈更新隐状态；Depth Transformer 是帧内自回归的 Mimi 音频 token 生成器，在 Moshi 类结构中根据当前帧隐状态逐码本层生成音频。二者分工是先定跨帧语义与状态，再定帧内声学细节，组合起来才完成一帧的文本与音频输出。

### 双方静音时如何推测、验证与批量修正音频

MSS 只在双方持续静音且满足稳定性条件时激活，包括已静音多帧、Temporal 隐状态相似度高、用户能量低。它把最近验证过的静音用户输入与静音文本重复 KR 个候选帧，一起做一次多位置 Temporal 块执行。随着静音加深，KR 窗口会动态增大以提高块执行效率。

验证按时间顺序扫描文本预测与隐状态。只有文本仍是静音延续，且候选隐状态与静音锚点的余弦相似度超过阈值，该位置才加入已接受前缀。一旦第 j 个位置失败，只保留前 j-1 个，后缀回到稠密逐帧执行。这种前缀接受保证了跨帧依赖的有效部分被保留。

通过 Temporal 接受后，用一次批量的 Depformer 对已接受位置做音频修正。对 Moshi 是把前 Nv 等于 3 层的码本值换成实际计算值，即 CB0 到 CB2，剩余的高残差层保留推测的静音值。论文的理由是这些高层只描述在该状态下听感仍为沉默的细微变化。修正后的隐状态与缓存条目被保留，不再按修正 token 顺序重放。

已接受帧先进入候选缓冲，每到一个真实用户帧到达就确认是否仍是沉默并释放对应的智能体帧。一旦用户开始说话，MSS 提交已验证前缀，丢弃剩余候选，从前缀端点恢复 Temporal 缓存并回到稠密执行。PersonaPlex 用其稳定的周期为 2 的静音模式提出交替双帧块并验证文本与 8 个智能体 Mimi 音频 token，多通道交织模型则提出静音 token 块并做精确前缀验证。

### 用户说话时如何把已到达帧折叠并行算

LFF 的输入都是已经观察到的用户 Mimi 帧，困难在于用户内容每帧都变。它的办法是把 KL 个已到达帧打包，用一次带因果掩码的 Temporal 操作同时算出它们的隐状态与文本，再用一次按帧批量的 Depformer 生成候选音频，最后检查智能体侧反馈是否与预设的沉默反馈一致。

下图展示了折叠执行与持久输出队列：上半是逐帧输入，中部是两次块执行，下半是队列按时间释放。读图时注意块执行一次覆盖多帧，但释放仍是逐帧按帧率进行。

> **看图路径：** 1. 看顶部每帧的用户输入与智能体沉默反馈如何向下进入掩码执行；2. 看中部掩码 Temporal 与批量 Depformer 如何一次产生多个帧；3. 看底部队列缓冲如何按时间顺序释放帧并与后续块衔接

[![原论文 Figure 2：LFF folds already-arrived user-conditioned positions into masked Temporal and frame-batched…](https://arxiv.org/html/2611.01835v1/listening_frame_folding.svg)](https://arxiv.org/html/2611.01835v1/listening_frame_folding.svg)

*论文图 2。原论文 Figure 2:：“LFF folds already-arrived user-conditioned positions into masked Temporal and frame-batched Depformer execution, then releases validated outputs through a persistent output queue.”。*

上图确实可见顶部每帧标注的用户输入与智能体沉默进入带时间轴的掩码 Temporal 框，再进入批量自回归 Depformer 框，生成的多帧先进入队列结构缓冲，再按顺序释放为沉默帧与对应帧。这对应了论文所说的并行计算与有序播放分离。

折叠执行的跨帧计算可以写成掩码形式，输入是用户帧与上 1 位置的临时沉默反馈。

\[\bigl(\hat{h}_{i},\hat{\ell}_{i}\bigr)_{i=1}^{K_{L}}=\mathcal{T}_{\theta}^{\mathrm{mask}}\!\left(\{(x_{i},q_{i-1})\}_{i=1}^{K_{L}};s_{t}\right).\]

该式中 xi 是块内第 i 个已观察用户帧，qi-1 是其临时智能体反馈，hat 表示折叠算出的隐状态与文本，掩码保证第 i 个位置只能看到之前位置，保持与逐帧执行相同的依赖顺序。

帧内音频的候选生成是按码本深度自回归、按帧位置并行。

\[z_{i,d}=\mathcal{D}_{\theta,d}\!\left(\hat{h}_{i},\hat{\ell}_{i},z_{i,<d}\right),\qquad i=1{:}K_{L}.\]

该式中 zi,d 是第 i 帧第 d 层码本的候选，d 维度串行而 i 维度并行。验证时比较文本与全部 8 个智能体码本，若第 r 个位置首次出现反馈不一致，则接受前 r 个并从 r 处恢复状态、只重放后缀。若整块一致，则一次执行替代了 KL 次 Temporal 与 KL 次帧内生成。

队列方面，LFF 在会话首次激活时用 KL 减 1 个最近验证沉默帧初始化持久输出队列，用来覆盖首个折叠块到达期间的播放空档。论文强调这些初始化帧只进输出队列，不进入自回归上下文，因此不改变后续对话状态。之后每个折叠块按码本延迟组装后入队，按帧率依次释放。

**Mutual Silence Speculation × Listening Frame Folding：** Mutual Silence Speculation 处理双方静音，一次提出多个未来静音帧并用文本与隐状态稳定性做验证；Listening Frame Folding 处理用户说话，把已经到达的用户帧用带掩码的并行执行一次算完并只保留验证通过的前缀。两者都把多次串行前向变成一次块执行加验证修复，只是适用输入条件和验证对象不同。

**Mimi 音频 token × 文本 token：** 文本 token 决定对话语义与静音延续判断，是验证是否接受推测的主要依据；Mimi 音频 token 决定实际波形，前几层码本携带主要声学内容。在相互静音段文本高度可预测而音频仍有小波动，因此论文对文本做严格匹配，对音频只批量修正前 Nv 层，其余残差层保留推测的静音值。

### 省出的帧时间如何变成可恢复的检索与问答

MSS 与 LFF 缩短了模型执行时间，但输出仍按固定帧率播放，每帧内就剩下一段可用 GPU 时间。FBR 把每个任务切成有界可恢复的小块，每帧先跑 Moshi，再在剩余预算内跑能装下的块数，未完成状态带到下 1 帧。若有更新的请求完成，可以在块边界替换旧的未完成工作。

每帧可给工作者的预算由帧周期减去实测模型时间再减去保护间隔决定，取非负值。

\[B_{w,t}=\max\!\left(0,T_{\mathrm{frame}}-T_{\mathrm{model},t}-G_{w,t}\right).\]

该式中 Tframe 是帧周期，Tmodel,t 是第 t 帧实测模型执行时间，Gw,t 是按负载选的保护间隔，Bw,t 是工作者可用时间。每个小块必须在扣除保护的预算内装下，迟到或未完成的参考不计为成功注入。

检索工作者在用户说话期间用流式转录逐步形成查询，边形成边检索并随新词刷新候选，最后在 Moshi 发出检索标记时定稿。先在百万级文档上做初排，再用 GPU 重排器按可恢复块处理并维护当前 top-k，压缩成参考后经 MoshiRAG 条件接口送入。语言模型查询工作者与 Moshi 常驻同一 GPU，聆听开始即构造提示，检索标记定稿请求，前缀按 token 块推进、解码逐 token 推进，键值缓存跨帧保留。只有在配置的条件窗口内到达的完成参考才会被注入。

**Frame-Budget Reinvestment × Moshi 条件接口：** Frame-Budget Reinvestment 把省出的每帧 GPU 空闲切成可恢复的小块任务，用来跑检索与语言模型查询；Moshi 条件接口是把算出的参考资料注入正在进行的全双工生成的入口。前者负责在帧预算内断续推进辅助计算，后者负责在请求窗口内及时消费参考，两者衔接才把省下的算力变成更正确的口语回答。

### 本文有没有训练模型，实际执行的计算是什么

这篇论文没有训练新的语音或语言模型，也没有更新任何模型权重。它实际执行的是推理时计算重排：在满足帧率与自回归依赖的前提下，用块执行替代部分逐帧执行，并用验证与修复保证输出接近稠密结果。

因此不存在优化器、学习率、梯度更新或训练数据划分。论文报告的参数如静音持续帧数、隐状态相似度阈值、提议窗口长度与码本修正层数，都是推理时路由与验证的超参数，不是可训练参数。附录给出的 Moshi 检查点用 dwell 16 与 KR 等于 6 等设置，BayLing-Duplex 用用户静音阈值与 15 token 块，PersonaPlex 用周期 2 块，这些都是执行配置。

FBR 部分调用的是已有的外部检索服务与常驻语言模型，论文做的是把它们切成帧内可调度的块并控制注入时机，而不是训练检索器或微调语言模型。评分用的转录与判分模型也只是评测工具，不参与方法本身。

### 在哪些对话、模型与指标下比较省算力与保真度

主实验用完整的 FDBench 共 1225 段全双工口语交互，覆盖轮流、打断、反向通道、重叠与智能体对他人说话等 9 种模式，能同时暴露双方静音与用户说话区间。模型覆盖 Moshiko、Moshika、Moshika-RL、BayLing-Duplex 与 PersonaPlex，包含 Moshi 家族、阶段结构与扁平自回归生成。FBR 在 HaluEval、OpenAudioBench、WebQuestions、SVAMP 与 ASDiv 等口语知识与推理任务上评测，其中检索用百万级维基与证据段落库。

比较方法是 Dense 每帧全量执行，MSS 只开双方静音推测，LFF 只开聆听折叠，Joint 按状态在两者间路由。FBR 对比中 Dense 与 Joint 跑同一检索工作者、同一等待配置与同一服务分配。FDBench 跑在 A100 40 GB 上，GPU 代价用 CUDA 事件累计的执行时间衡量。

下表说明 FDBench 的类别构成与段数，这是理解覆盖率与分指标分母的基础，表中 All 对应完整集 1225 段。表前已交代比较对象，表后将结合省算力表解释不同类别为何节省不同。

| Abbr. | FDBench category | Conversations |
| --- | --- | --- |
| CPH | Candor Pause Handling | 216 |
| CTT | Candor Turn Taking | 119 |
| IBC | ICC Backchannel | 55 |
| SPH | Synthetic Pause Handling | 137 |
| SUI | Synthetic User Interruption | 200 |
| BGS | Background Speech | 100 |
| TTO | Talking to Other | 100 |
| UBC | User Backchannel | 98 |
| UI | User Interruption | 200 |
| All | Complete FDBench | 1,225 |

上表列出 9 类交互的缩写、全称与段数，从 Candor 停顿处理到用户打断，段数从 55 到 216 不等。它的作用是说明主结果是在多样打断与重叠条件下平均得到的，而分表可以进一步看中断密集类别是否更难保持一致。质量指标以 Dense 为参照：Text 是对应帧位置智能体文本完全一致率，Codebook 差异是 Dense 说话帧中完整输出帧不同的比例，WER 差异是两路波形经同一 Whisper 转录后的归一化词编辑距离，Onset@3 是 Dense 文本起始在 3 帧内被复现的比例，SNR 与 SI-SDR 是对齐位置的音频差异指标。

### 完整集上省了多少时间，文本与音频保真度如何

完整 FDBench 上的核心比较问题是：在同一交互轨迹回放下，Joint 相对 Dense 能减少多少 CUDA 执行时间，同时文本与音频偏离多少。指标方向是省时越高越好，文本一致与起始准时越高越好，码本差异与词错误差异越低越好。

| Model | Method | Time saved ↑ | Share | ncn_{c} ↑ | Text ↑ | Exact ↑ |
| --- | --- | --- | --- | --- | --- | --- |
| Moshiko | MSS | 10.86% | 46.49% | 4.69 | 99.418% | 527/1225 |
|  | LFF | 10.92% | 40.27% | 2.23 | 100% | 1224/1225 |
|  | Joint | 22.09% | 86.75% | – | 99.418% | 527/1225 |
| Moshika | MSS | 10.96% | 46.52% | 3.62 | 99.331% | 505/1225 |
|  | LFF | 11.31% | 40.14% | 2.26 | 99.996% | 1224/1225 |
|  | Joint | 22.65% | 86.67% | – | 99.328% | 504/1225 |
| Moshika-RL | MSS | 7.52% | 45.66% | 3.39 | 99.446% | 579/1225 |
|  | LFF | 10.92% | 40.51% | 2.23 | 100% | 1225/1225 |
|  | Joint | 18.80% | 86.19% | – | 99.446% | 579/1225 |
| BayLing-Duplex | MSS | 1.54% | 11.12% | 1.58 | 100% | 1225/1225 |
|  | LFF | 28.62% | 42.22% | 4.20 | 100% | 1225/1225 |
|  | Joint | 31.01% | 53.34% | – | 100% | 1225/1225 |
| PersonaPlex | MSS | 17.42% | 30.69% | 3.25 | 100% | 1225/1225 |
|  | LFF | 3.45% | 36.80% | 1.41 | 100% | 1225/1225 |
|  | Joint | 20.63% | 67.49% | – | 100% | 1225/1225 |

上表是论文主表，保留了 5 个模型各自的 MSS、LFF 与 Joint 的省时、覆盖帧占比、平均每次优化执行确认的帧数、文本一致率与完全一致轨迹数。Joint 在 Moshiko、Moshika、Moshika-RL、BayLing-Duplex 与 PersonaPlex 上分别省 22.09%、22.65%、18.80%、31.01% 与 20.63%，对应路由状态覆盖 53.34% 到 86.75% 的帧。三 Moshi 的全位置文本一致在 99.328% 到 99.446%，BayLing-Duplex 与 PersonaPlex 在全部 1225 段上与 Dense 轨迹完全一致。论文摘要另给出三 Moshi 的非填充文本一致为 96.92% 到 98.12%，摘要的联合省时范围为 18.80% 到 31.01%。

下图把 FBR 的效果按任务展开，每数据集 300 题，比较 Dense 与 Joint 的准时参考数与准时且正确数。读图前先明确柱子含义：同色实心与斜纹分别表示准时与准时且正确。

> **看图路径：** 1. 对比每组四个柱子中 Dense 准时与 Joint 准时的高度差异；2. 再对比准时且正确两组柱子的提升是否在五个任务上都出现；3. 注意左右两幅分别对应检索任务与语言模型问答任务

[![原论文 Figure 3：FBR results on two RAG retrieval and three LLM-query workloads.](https://arxiv.org/html/2611.01835v1/fbr_service_results.svg)](https://arxiv.org/html/2611.01835v1/fbr_service_results.svg)

*论文图 3。原论文 Figure 3:：“FBR results on two RAG retrieval and three LLM-query workloads.”。*

上图确实可见左侧两组检索任务与右侧 3 组语言模型问答任务中，Joint 准时与 Joint 正确的柱子在每个数据集上都高于对应的 Dense 柱子。论文正文概括为检索任务最多增加 23 个准时参考与 20 个准时正确，语言模型任务最多增加 106 个准时回答与 61 个准时正确。HaluEval 500 题的口语终答从 Dense 的 86 个正确增加到 Joint 的 205 个，实际注入从 112 增加到 356，口语准确率从 17.20% 升到 41.00%。这些提升只在相同辅助服务预算与相同等待配置下成立，且只有按时到达并被消费的参考才计入。

需要同时看到限制：三 Moshi 的码本差异在 Dense 说话期间占全帧的 0.63% 到 0.76%，WER 差异 2.58% 到 3.94%，Onset@3 在三 Moshi 为 97.75% 到 98.31%，而 LFF 单独在 5 模型上 Onset@3 为 100%。这说明偏离主要来自 MSS 路径与中断密集段，不是均匀分布的。

### 简单基线、超参数与分路径贡献说明了什么

要判断 MSS 与 LFF 是否真的必要，论文在 Moshiko 上做了同后端、同 1225 输入的简单基线比较，指标包括省时、非填充文本一致与码本差异。比较问题是：严格重复验证、跳过前向的语音活动检测旁路、整块重算能否以更简单的方式拿到同样的节省。

| Execution policy | Time saved | Non-PAD text agreement | CB difference |
| --- | --- | --- | --- |
| Fixed repeat, strict verification | 1.84 | 100.00 | 0.00 |
| VAD bypass | 24.27 | 85.18 | 26.73 |
| MSS | 10.86 | 96.92 | 5.35 |
| Whole-block replay | 2.13 | 100.00 | 0.00 |
| LFF | 10.92 | 100.00 | 0.00 |
| Joint | 22.09 | 96.92 | 5.35 |

上表显示固定重复加严格验证只省 1.84% 时间但保持完全一致，语音活动检测旁路省 24.27% 但非填充文本一致掉到 85.18%、码本差异达 26.73，而 MSS 省 10.86% 且非填充一致 96.92%。整块重算只省 2.13%，LFF 省 10.92% 且保持 100% 非填充一致与零码本差异。这支持论文的解释：保留依赖有效前缀比整块丢弃更省，盲目跳过前向虽省但保真代价大。LFF 在三 Moshi 的平均保留前缀为 2.23 到 2.26 帧，超过依赖结构保证的 1 帧，说明用户变化时智能体反馈仍有可复用性。

超参数方面，Moshika 上 MSS 的 dwell 越小越早触发，省时更高但文本一致下降；dwell 20 更稳但省时降到 9.47% 附近。KR 从 4 到 8 增大了每次确认帧数，但 KR 等于 8 比 6 只多约 0.25 个百分点的节省且质量下降，因此选 KR 等于 6、dwell 16。LFF 的 KL 从 2 到 8 增大了每次确认帧数，但队列加深带来起始延迟，KL 等于 4 到 6 只增加 0.39 个百分点而平均起始延迟从 2.78 帧升到 4.62 帧，KL 等于 8 反而因修复与欠满块开销下降，因此选 KL 等于 4。

分模型看，BayLing-Duplex 主要靠 LFF 省 28.62%，PersonaPlex 主要靠 MSS 省 17.42%，三 Moshi 两路各省约 7 到 11%。这与结构有关：前者是扁平交织序列适合折叠聆听块，后者有规则静音模式适合推测。下表按 9 类交互给出 Joint 省时的分布，可验证节省不是只来自某一类停顿。

| Model | CPH | CTT | IBC | SPH | SUI | BGS | TTO | UBC | UI |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Moshiko | 26.37 | 24.33 | 26.19 | 17.33 | 14.50 | 26.80 | 22.79 | 32.07 | 20.09 |
| Moshika | 27.57 | 27.12 | 22.95 | 19.01 | 14.02 | 27.23 | 23.17 | 30.06 | 22.01 |
| Moshika-RL | 25.33 | 24.01 | 25.42 | 20.41 | 13.40 | 16.01 | 14.94 | 18.99 | 16.99 |
| BayLing-Duplex | 58.35 | 44.98 | 63.94 | 62.16 | 13.19 | 7.18 | 7.16 | 9.28 | 14.19 |
| PersonaPlex | 10.50 | 20.42 | 4.42 | 11.91 | 18.62 | 36.14 | 32.73 | 45.96 | 23.09 |

上表显示节省遍布 9 类，但在中断与背景语音类上差异明显，例如 BayLing-Duplex 在停顿类省 50% 以上而在背景与对他人说话类只省约 7%，PersonaPlex 则相反。这提醒读者把平均省时推广到特定部署前，先看自身对话中两类沉默的占比。本表数值与单位依据论文 PDF。

| Task | BayLing-Duplex | PersonaPlex |
| --- | --- | --- |
| CPH | 216/216 | 216/216 |
| CTT | 119/119 | 119/119 |
| IBC | 55/55 | 55/55 |
| SPH | 137/137 | 137/137 |
| SUI | 200/200 | 200/200 |
| BGS | 100/100 | 100/100 |
| TTO | 100/100 | 100/100 |
| UBC | 98/98 | 98/98 |
| UI | 200/200 | 200/200 |

上表给出 BayLing-Duplex 与 PersonaPlex 在每类上完全一致的轨迹数，均为全对，如 CPH 216 对 216、UI 200 对 200。这与三 Moshi 在中断类出现小幅文本与 WER 偏离形成对照，说明保真结论是有结构条件的：交织与周期静音结构可做到精确一致，Moshi 层次音频结构在说话重叠处会有小幅偏离。

### 结论在什么条件下才成立，还有哪些没测到

主结论的适用条件要讲清。省时数字是 CUDA 执行时间相对下降，不是端到端延迟或整机功耗，也不是输出帧率变化，因为输出仍按固定帧率播放。文本一致是与 Dense 在对应帧位置的比较，不是与人工参考的正确率，因此高一致只说明接近原模型行为，不说明原模型回答本身正确。

音频指标同样以 Dense 波形为参照，转录用 Whisper-base 贪心解码并经同一归一化，SNR 与 SI-SDR 是对齐位置的交互级分贝平均。分表显示中断密集的 SUI 与 UI 类 WER 差异与起始延迟更大，说明在频繁打断下偏离会集中出现，不能把平均保真度当成每段对话都一样。

FBR 的正确数提升依赖相同检索库、同一编码服务、同一条件窗口与同一判分流程，转录用 Whisper large-v3-turbo，判分是本地 Qwen2.5-14B-Instruct 按答案 rubric 只判所需答案是否正确。500 题中 81 题双方都对、124 题仅 Joint 对、5 题仅 Dense 对、290 题都不对，说明仍有多数题未答对，提升是有预算与任务范围的。论文未报告误判率、长时运行稳定性与多人同时在线的调度开销，这些都不能从现有证据推出。

### 复现第一步做什么，需要哪些配置与数据

复现应从回放式评测做起，而不是直接上线实时系统。第一步是拿到 FDBench 完整 1225 段的交互轨迹与 5 个模型的 Dense 输出，然后按论文路由实现 MSS、LFF 与 Joint，保证 Dense 与优化跑同一轨迹、同一后端与同一 CUDA 计时方式。计时只累计推理阶段，文本、码本与起始指标按论文的对齐与聚合方式计算，类别聚合先对时间求和再算下降率。

关键超参数要按附录原样设置：三 Moshi 的 MSS 用 dwell 16 或 24、隐相似度 0.990 或 0.995、KR 等于 6 与 CB0 到 CB2 批量修正；LFF 用 KL 等于 4、队列深 3 与前缀验证加后缀修复。BayLing-Duplex 用 15 token 块对应 5 个逻辑帧，PersonaPlex 用周期 2 块与 dwell 4。FBR 复现需要同一 A100 上的模型与检索服务、同一 1000000 段落库、检索触发后多给 1 帧的预算，以及条件窗口内到达才注入的判定。

本文未发现来源绑定且完成验证的公开代码、模型或数据资源，因此不能声称作者资源当前可用或已公开。复现缺口主要是官方实现细节与完整评测脚本，需要按论文公式与附录参数自行实现块执行、掩码、队列与预算调度，并补上分表与显著性检查。

### 什么时候值得尝试，以及还需补哪项验证

如果你的全双工服务中智能体沉默占比高、用户轮流说话多，且每帧 GPU 时间紧张到放不下检索或大模型查询，ReFrame 的思路值得尝试。双方静音长的场景优先看 MSS，聆听占比高的场景优先看 LFF，两者都有的场景再用 Joint 路由。预期收益是帧内省出可调度的零散时间，而不是降低模型参数或减少输出帧数。

动手时先测自身对话的沉默占比与中断频率，再选 KR、dwell 与 KL。KL 增大会增加起始延迟，对打断敏感的助手应保守选择。FBR 只有在参考能在条件窗口内完成编码与消费时才有效，迟到参考不应计为收益。

还需补的验证包括：在真实流式到达而非回放轨迹下的稳定性、频繁打断时的听感与语义影响、检索库变化后的问答增益是否持续，以及多路并发下的调度与显存行为。只有补上这些，才能把论文在 1225 段回放与 500 题 HaluEval 上的结论推广到线上服务。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.01835v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-03 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-03/)
