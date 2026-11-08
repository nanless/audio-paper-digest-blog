---
title: "CRESiST: Self-Enhancing Explorative Policy Learning for Simultaneous Speech Translation"
date: 2026-11-06
draft: false
tags: [语音翻译, 强化学习, 流式处理, 多语言]
categories: [论文速递]
description: "针对同声传译要在质量与延迟之间权衡且大模型难以处理无界语音流的问题，CRESiST 用语音文本交错序列加辅助对齐模型探索与语音大模型评价的闭环来自主发现读写时机，在句子级与文档级评测上取得更好的质量延迟折中，但结论依赖特定数据构造与指标条件。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.06501"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "CRESiST：不用外部对齐也能学会边听边译的交错读写策略"
paper_digest_original_title: "CRESiST: Self-Enhancing Explorative Policy Learning for Simultaneous Speech Translation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.06501v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.06501v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.06501v1.pdf"
paper_digest_primary_task: "语音翻译"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-translation","label":"语音翻译"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"setting","id":"setting.multilingual","label":"多语言"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对同声传译要在质量与延迟之间权衡且大模型难以处理无界语音流的问题，CRESiST 用语音文本交错序列加辅助对齐模型探索与语音大模型评价的闭环来自主发现读写时机，在句子级与文档级评测上取得更好的质量延迟折中，但结论依赖特定数据构造与指标条件。"
paper_digest_authors: [{"affiliations":["Shanghai Jiao Tong University"],"name":"Chenyang Le"},{"affiliations":["Alibaba Token Hub, Alibaba Group","University of Macau"],"name":"Pei Zhang"},{"affiliations":["University College London"],"name":"Yuxiang Chen"},{"affiliations":["Shanghai Jiao Tong University","Alibaba Token Hub, Alibaba Group"],"name":"Bing Han"},{"affiliations":["University of Macau"],"name":"Derek F. Wong"},{"affiliations":["Alibaba Token Hub, Alibaba Group"],"name":"Baosong Yang"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Yanmin Qian"}]
paper_digest_abstract_sha256: "53bfe23dfc0435e4b966e3c3ece1771b5e896f632cd64f17f82940e7bd0c4cb8"
paper_digest_sidecars: {"citation.bib":{"sha256":"249d8575b3515f44eb6bb53d8a135135169497886ca2332a6be187c092d4f69f","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06501/citation.bib"},"citation.json":{"sha256":"86da7aa02bbda222e0705d513a1cfbe6b29a873b12e6e5a2090874aa68576dd4","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06501/citation.json"},"citation.ris":{"sha256":"6b47c3a0015714618dc19915198ea5a82d539afab64167f696bc70e96e723ca3","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06501/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"e8da2bae1f0e2949cd6cbb5278107c6384b64bd528f6c5bd1cb011afcdf3092e","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06501/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "54bd8c1cac6e1ce21089be0e78bb1d5a58cbc21b0cb368ce1312955089c1de67"
paper_digest_api_reader_plan_sha256: "be913a5f231e3d5449210ceb5a7f993caa426a57b4f89f252c6b923b82a1aa5c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "2f69ab83676e2418e3885fdde7e9833e04c35f2cbe489df099c1bfac15280335"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "15f92f7d3002e624fceba0a56f504c7f9fdc85755b4e412d4958dacf8394c1b6"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "e778194581b7b0fccc87e2999907e5f1a899d0ade6e24602b898fbcbe1c19631"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "48a2c7eab70fa54c4ffe6dd73e99643bc13faac2f19290316da68447395d0a54"
paper_digest_api_reader_resource_count: 12
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 CRESiST：不用外部对齐也能学会边听边译的交错读写策略

> 英文题目：*[CRESiST: Self-Enhancing Explorative Policy Learning for Simultaneous Speech Translation](https://arxiv.org/abs/2611.06501v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音翻译](/audio-paper-digest-blog/papers/?concept=task.speech-translation)
- **研究方法**：[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)；[多语言](/audio-paper-digest-blog/papers/?concept=setting.multilingual)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Chenyang Le：Shanghai Jiao Tong University
- Pei Zhang：Alibaba Token Hub, Alibaba Group；University of Macau
- Yuxiang Chen：University College London
- Bing Han：Shanghai Jiao Tong University；Alibaba Token Hub, Alibaba Group
- Derek F. Wong：University of Macau
- Baosong Yang：Alibaba Token Hub, Alibaba Group
- Yanmin Qian：Shanghai Jiao Tong University

## 📌 核心摘要

同时语音翻译需要边听边译，在输入语音不断到达时决定读入还是写出，难点在于延迟与质量互相制约，且无限长音频不能依赖外部切分。已有大模型方案多把新语音拼接到历史前缀之前，导致键值缓存失效并需要语音活动检测，而固定对齐构造的读写轨迹又难以预测语序差异。论文提出交错读写框架，把400毫秒语音块与文本词元排成统一序列，使缓存可以复用并支持无分割推理。训练中辅助RNN-T换能器读入声学文本交互特征并采样候选读写轨迹，该轨迹与交错序列一同送入大模型侧Critic进行评价。Critic用两层路由模块由前一隐状态输出读写概率，并用全局与局部声学加权的精炼特征计算一致性奖励与延迟奖励以优化路由。路由概率经阈值二值化为目标动作序列后，以二元交叉熵蒸馏回辅助RNN-T换能器，按每8步Critic更新配合1步Actor更新的方式闭环，三阶段训练从离线平行语料过渡到在线交错形式。在MuST-C英译德无分割流式设置下，该方法取得85.96的XCOMET-XXL分数与0.76秒的LongYAAL延迟，高于InfiniSST的78.74分并低于其1.46秒延迟。结论适用于中英输入到六种目标语言的句子级与文档级评测，学术领域存在离线性能下降，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 第三方资源：<https://huggingface.co/datasets/amphion/Emilia-Dataset> — 链接可访问（HTTP 200）

- 第三方资源：<https://www.openslr.org/121/> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/SpeechColab/GigaSpeech> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/datasets/google/fleurs> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/datasets/facebook/covost2> — 链接可访问（HTTP 200）

- 第三方资源：<https://opendatalab.com/OpenDataLab/MuST-C> — 链接可访问（HTTP 200）

- 第三方资源：<https://aclanthology.org/attachments/2023.iwslt-1.2.dataset.zip> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/Qwen/Qwen2.5-Omni-7B> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/Qwen/Qwen3-0.6B> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/Qwen/Qwen3-235B-A22B-Instruct-2507> — 链接可访问（HTTP 200）

- 第三方资源：<https://github.com/openai/whisper> — 链接可访问（HTTP 200）

- 第三方资源：<https://huggingface.co/facebook/seamless-streaming> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 同时翻译要解决的输入输出与延迟难题

同时语音翻译的输入是一段不断变长的语音流，目标是在听的过程中陆续输出目标语言文本，最终译文要完整，过程中又不能等太久。难点在于每个词的证据到达时间不同，有的词听到一半就能猜，有的词如德语动词要等到句尾才明确，过早输出容易错，过晚输出则延迟高。

传统做法是把新到的语音不断拼到历史前缀后面再重新编码，这会导致键值缓存失效而重复计算，也难以处理没有预先切句的长音频。另一类做法依赖外部语音活动检测先切句，再逐句翻译，但切分会打断跨句指代和上下文，遇到长时间会议或讲座就容易累积误差。本文要解决的正是在无界流上如何以细粒度决定读与写，同时保持缓存可复用。

### 已有路线为何依赖外部对齐或切分

已有同时翻译策略大致分 3 类。第一类用外部强制对齐工具或注意力突变构造监督读写路径，把离线对齐直接当作在线时机，优点是训练简单，缺点是学到的是平均对齐而非面向预测的自适应等待。第二类用固定等待、连续积分发放或注意力边界启发式规则，规则透明但难以随语言调整。第 3 类尝试强化学习或在线离线分歧检测来发现边界，但仍多需要离线对齐数据且多语扩展困难。

在无界音频处理上，常见做法是保留固定长度文本与对应语音历史，或把长流切成多轮对话丢弃远端缓存。这些做法都引入了外部切分或强耦合的监督策略，一旦切错或历史选择不当，质量会明显下滑。CRESiST 的对比基线正是选自这些路线，包括基于注意力对齐的方法和为无穷流设计的系统，比较时任务、推理阶段与指标需保持一致才能说明策略本身的差异。

### 把读写时机写成马尔可夫决策过程

论文把时机学习形式化为马尔可夫决策过程。状态是已读语音块数与已写文本词数的组合，动作只有读与写两个选择。读意味着把下一个 400 毫秒语音块加入条件，写意味着在当前已听内容下追加一个目标词。转移是确定性的拼接过程，关键是评价哪个状态适合写。

评价拆成两部分。数据动态指真实译文分布，模型动态指语音大模型在当前前缀下的预测分布，写得越吻合说明当前已听内容已足够。另一部分是延迟惩罚，要求尽快输出。这样的拆分把内容生成与时机决策解耦，避免同时搜索说什么与何时说的巨大空间。训练只用离线语音文本对，不提供任何外部词级对齐，时机必须从奖励中自己发现。

### 整体流程如何从离线数据变成在线交错推理

方法的输入是离线语音文本对，输出是一个能在流上运行的交错读写系统。训练时先由辅助对齐模型采样一条从起点到终点的单调路径，把语音块与目标词交错成统一序列，再把该序列交给语音大模型评价并更新双方。推理时不再需要对齐模型，而是语音大模型一边读入 400 毫秒块，一边用门控决定写词，所有历史拼成一个序列从而复用缓存。

下图展示了训练与推理的对应关系，左侧是采样与评价闭环，右侧是推理时的阈值决策，理解该图就能抓住样本在各模块间的流向。

**同时语音翻译 × 交错读写序列：** 同时语音翻译要求音频还没放完就开始输出译文，关键是何时继续听、何时写译文；交错读写序列把语音块和文本词按实际执行顺序排成同一个序列，让模型直接在该序列上做语言建模，从而把时机决策变成序列中下一个位置是读还是写的问题。

读图前先明确任务：图中方块与圆圈分别代表语音块与文本词，箭头代表采样、拼接、评价与回传，右侧虚线分隔训练蒸馏与实际推理。

> **看图路径：** 1. 先看左侧训练分支中 RNN-T 采样如何变成底部交错序列；2. 再看中间语音大模型到 Router 与 Refiner 的两条输出箭头；3. 最后看右侧推理分支中 Router 阈值如何决定读新语音块还是写词

[![原论文 Figure 1：Training and inference diagram of CRESiST.](https://arxiv.org/html/2611.06501v1/diagram.png)](https://arxiv.org/html/2611.06501v1/diagram.png)

*论文图 1。原论文 Figure 1:：“Training and inference diagram of CRESiST.”。*

图中左侧 RNN-T 对齐器输出采样路径并拼成交错序列，底部序列送入语音大模型得到隐状态，再分给 Router 输出读写概率与 Refiner 输出内容概率；Router 的二值化结果又以损失形式回传给左侧对齐器。右侧推理只保留语音大模型与 Router，按阈值判断继续读还是立即写，因此长流不需要外部切句即可持续推进。

### Actor 如何采样出可行的交错路径

Actor 是一个带 2 维轴向注意力的 RNN-T，包含声学编码器、文本预测器与联合网络。声学编码器用 Whisper-medium 初始化并下采样到 2.5 赫兹特征，对应 400 毫秒窗口并加因果掩码；文本侧与轴向模块借用 Qwen3-0.6B 结构，其中底层冻结、上层加入新初始化的音频轴注意力。轴向注意沿文本轴与语音轴先后做因果自注意力，再经前馈融合，目的是增强两种模态的交互。

具体采样时，模型在文本长度乘语音块数的格点上移动，每个格点输出空白符即读的概率，按伯努利采样决定是沿语音轴前进一步还是沿文本轴写一个词。从原点到终点的单调路径唯一确定了交错序列的合并边界，且每条路径恰好包含全部目标词，不会丢词。采样得到的多条路径为下游评价提供了不同的时机假设。

**Actor × Critic：** Actor 指负责探索读写路径的辅助 RNN-T 对齐模型，它采样大量可能的读与写交错方式；Critic 指带 Router 与 Refiner 的语音大模型，它评价这些路径在当前已听内容下写词是否充分、是否拖延；两者搭配使探索与评价分离，Actor 提供候选，Critic 给出偏好并回传给 Actor。

### Critic 如何评价时机并生成译文

Critic 基于 Qwen2.5-Omni-7B 的思考者部分改造，语音编码加 400 毫秒分块因果掩码与 20 块局部窗口，形成约 8 秒感受野，并每 2 秒加循环正弦位置编码。输入按多轮对话组织，系统提示放任务指令，每轮放入一个语音块及其交错文本动作，主干输出局部隐状态，并对整段语音平均池化得到全局表示。

Router 是两层感知机加 Sigmoid，把前一隐状态映射为读概率，接近 1 表示倾向读，接近 0 表示倾向写。一致性奖励定义为 Refiner 损失与大模型本体损失之和的负数，预测越准则奖励越高，可写为以下形式。

\[\mathcal{R}_{consistency}=-(\mathcal{L}_{refiner}+\mathcal{L}_{body})\]

延迟奖励定义为从某步开始期望能连续写多少词，通过连乘后续写概率求和得到，鼓励尽早输出长文本段，可写为以下形式。

\[\mathcal{R}_{latency}^{(k)}=\mathbb{E}[W_{k}]=\sum_{m=1}^{M}\prod_{j=1}^{m}\big(1-p_{k+j}\big)\]

Refiner 把 Router 概率作为动态门，加权全局与局部声学增益后再投影计算生成概率，实现时机状态与生成上下文的同步。推理时没有全局信息，Router 独立决策且不再使用 Refiner。

**Router × Refiner：** Router 是一个轻量二分类门，根据已生成的隐状态预测下一步应读还是写，推理时直接用阈值做决策，训练时还提供延迟奖励信号；Refiner 是在全局与局部语音表示帮助下重新计算生成概率的模块，用于判断在给定已读语音下写词是否可靠，两者分别管节奏与管内容，共同构成 Critic 的评价能力。

**一致性奖励 × 延迟奖励：** 一致性奖励衡量在当前交错前缀下模型预测与真实译文的吻合程度，写得准则奖励高；延迟奖励衡量期望一次能连续写多少词，鼓励尽早成段输出；两者加权后同时要求译得对且等得少，避免只求快而乱写或只求准而一直等。

### 三阶段训练与反向蒸馏如何闭环

训练分 3 个阶段。第一阶段只训练 Actor 的常规 RNN-T 损失，建立基本声文对应；第二阶段冻结 Actor，用其采样路径构造交错序列来适配语音大模型含 Router 与 Refiner 的流式输入；第 3 阶段全部放开，按 8 步 Critic 更新加 1 步 Actor 更新交替进行联合自增强。语音大模型用秩为 16 的 LoRA 微调，并多任务保留离线翻译能力。

Critic 的目标是负的一致性奖励与延迟奖励加权和再加负载均衡项，权重分别控制延迟强度与路由稳定，可写为以下形式。

\[\mathcal{J}_{critic}=-\mathcal{R}_{consistency}-\alpha\mathcal{R}_{latency}+\beta\mathcal{L}_{balance}\]

Actor 的目标以蒸馏损失为主、RNN-T 损失为辅，权重下调辅助项，可写为以下形式。

\[\mathcal{J}_{actor}=\mathcal{L}_{distill}+\lambda\mathcal{L}_{rnnt}\]

蒸馏时把 Router 概率按阈值二值化为目标动作，再用二元交叉熵让 Actor 的读概率拟合该目标，可写为以下形式。

\[\mathcal{L}_{distill}=\sum_{k}\text{BCE}\Big(\hat{a}_{k},\pi_{act}(a_{k}=\phi\mid\cdot;\theta_{act})\Big)\]

伪标签对 Critic 做停止梯度，Actor 更新不回传经过 Critic。附录给出了在光滑性、二次增长、间隔条件与有界方差等局部假设下的线性收敛到噪声邻域的分析，强调 Actor 误差受 Critic 跟踪误差控制，但不声称全局收敛或达到真实最优策略。

**反向蒸馏 × RNN-T 损失：** 反向蒸馏指把 Critic 优化后的 Router 决策二值化为目标动作，再用交叉熵让 Actor 的读概率去拟合它，方向是从大模型到小对齐模型；RNN-T 损失是传统的转录对齐约束，防止 Actor 偏离基本语音文本对应；前者是主要的策略学习信号，后者是维持合理对齐的辅助约束。

### 数据构造、基线与指标如何对应比较问题

训练数据聚合 Emilia、WenetSpeech 与 GigaSpeech 3 个开源语音识别数据，用 Qwen3-235B 指令模型为转写文本生成伪译文，覆盖中英与其他 4 个欧洲语言，其中中英占一半以上，并把部分长音频拼接到最长 30 秒。评测分句子级与文档级，句子级用 FLEURS 与 CoVoST2 共 10 个方向，文档级用 MuST-C 与 ACL 60/60 的英中、英德连续流，并用 OmniSTEval 做长流评测。

基线包括 Seamless Streaming、AlignATT 与 StreamATT、StreamUni、InfiniSST 以及商业 Seed LiveInterpret 2.0，解码统一用贪心并加窗口 4 元组不重复处理器。质量用 XCOMET-XXL，数值越大越好；句子级延迟用长度自适应 LAAL，文档级用 LongYAAL，两者都是数值越小延迟越低。阈值变化用于画出质量延迟前沿，文档级还对比有人工切句与无切句两种运行方式，以检验无界处理能力。

### 句子级质量延迟前沿说明了什么

句子级要回答在不同延迟预算下谁的译文质量更高。比较在相同 LAAL 下 XCOMET 高低，曲线越靠上越好，越靠左延迟越低。原文通过调节阈值得到 CRESiST 曲线，调节注意力边界或能量阈值得到基线曲线，条件都是流式贪心解码。

> **看图路径：** 1. 比较三幅子图中横轴延迟与纵轴质量的走向；2. 观察绿色 CRESiST 曲线相对紫色与蓝色基线的位置；3. 注意中间子图中红色星形商业系统点与绿色点的相对关系

[![原论文 Figure 3：Sentence-level quality-latency trade-off curves on the CoVoST2 and FLEURS datasets.](https://arxiv.org/html/2611.06501v1/main_sent.png)](https://arxiv.org/html/2611.06501v1/main_sent.png)

*论文图 3。原论文 Figure 3:：“Sentence-level quality-latency trade-off curves on the CoVoST2 and FLEURS datasets.”。*

3 幅子图横轴都是延迟，纵轴都是质量，绿色 CRESiST 曲线在 CoVoST2 3 对、中英 2 对与其他 8 对上都位于紫色 AlignATT 与蓝色 Seamless 之上，说明在同等延迟下质量更高或同等质量下延迟更低。中间子图红色星形商业系统点低于绿色同延迟点，且绿色在极低延迟段下降平缓，支持细粒度策略在严格延迟下仍可用的判断。但该结论限于所用测试集、贪心解码与 XCOMET 评价，不代表人工评价或所有语种同样成立。

下例展示了细粒度与子句级缓冲的直观差别，上栏商业系统等较长上下文才整句输出，中下栏本方法随语音推进逐词输出，音频总长 8.764 秒的样本中译词出现时刻明显提前。

> **看图路径：** 1. 对比上栏整句等待输出与中下栏逐词陆续输出的时间点；2. 观察音频波形静音段与译文出现时刻的对应关系；3. 注意计算计入与不计入时橙绿两栏输出时刻的整体偏移

[![原论文 Figure 7：Translation timing visualization for a sample from the FLEURS EN-ZH test set.](https://arxiv.org/html/2611.06501v1/latency_case.png)](https://arxiv.org/html/2611.06501v1/latency_case.png)

*论文图 6。原论文 Figure 7:：“Translation timing visualization for a sample from the FLEURS EN-ZH test set.”。*

图中可见上栏只有 2 个整句时间戳，中栏与下栏则有多个词级时间戳沿波形分布，且计算是否计入时整体略有偏移。这帮助理解延迟优势来自更早的写决策，而非更快的计算，但单例不能推广为平均延迟降低的数值证据，平均结论仍需依赖前沿曲线与表格。

### 文档级无切句连续翻译能否保持质量

文档级要回答没有人工切句时系统能否处理无界流。比较分 3 种运行方式：离线加人工切句、有切句流式、无切句流式，指标为 XCOMET 越高越好与 LongYAAL 越低越好。无切句最能暴露历史遗忘与对齐漂移，理想情况是其质量接近有切句且延迟不膨胀。

下表选择 ACL 60/60 无切句段的英中与英德结果，并保留 StreamATT 作为未胜出对照，表前问题是同为无切句连续流时谁的质量更高且延迟更低。

| Streaming w/o Segmentation |  |  |  |  |
| --- | --- | --- | --- | --- |
| StreamATT (ff=30) | 76.63 | 2.15 | 70.61 | 1.89 |
| CRESiST (τ\tau=0.5) | 79.45 | 1.49 | 85.59 | 1.08 |

表中可见 CRESiST 在英中达到 79.45 分与 1.49 延迟，在英德达到 85.59 分与 1.08 延迟，均高于 StreamATT 的 76.63 分与 2.15 延迟及 70.61 分与 1.89 延迟，且与有切句时的 80.06 分与 87.23 分差距仅 1 到 2 分，支持其无需外部切分即可维持上下文的判断。限制是该表只展示 τ 为 0.5 的单点，阈值调节在文档级效果有限，且 MuST-C 段与句子级切句结果未在此子表中展开，完整差距需回看原文全表。表后还需注意 InfiniSST 在句子级切句下反而下降的现象，说明为无界设计的系统未必在孤立句上最优，比较时运行方式必须对齐。

### 训练策略与延迟权重各自带来什么变化

消融要回答联合自增强是否必要，以及延迟权重如何控制折中。比较固定相同训练步数下的直接微调、2 阶段流水线与完整 CRESiST，曲线越高越靠左越好。直接微调把 RNN-T 对齐数据直接用于监督微调，类似 InfiniSST 做法；2 阶段只做串行适配而不做最后联合优化。

读图时先找橙色最低曲线，再看粉色中间曲线，最后看绿色最高曲线在资源丰富的方向上拉开的差距。

> **看图路径：** 1. 对比橙色直接微调曲线与绿色完整框架曲线的高度与长度；2. 观察粉色两阶段流水线在中等延迟段与绿线的差距；3. 注意横轴极低延迟处各曲线能否维持质量

[![原论文 Figure 4：Ablation on training strategies.](https://arxiv.org/html/2611.06501v1/ablation.png)](https://arxiv.org/html/2611.06501v1/ablation.png)

*论文图 4。原论文 Figure 4:：“Ablation on training strategies. “Direct SFT” uses RNN-T aligned data directly (similar to InfiniSST).”。*

可见橙色曲线在低延迟段质量跌落明显，粉色有所提升，绿色在 CoVoST2 与 FLEURS 上全面居上，尤其在中英方向延迟显著降低而质量保持，支持联合优化对策略的改进作用。但该提升依赖相同的 400 毫秒粒度和相同的 LoRA 与数据配比，换粒度或换基座时幅度可能变化。

另 1 维是延迟惩罚系数，系数大则压缩延迟但损失质量，系数过小则在某些阈值下延迟尖峰，说明该系数直接决定前沿的位置与形状，实际部署需按延迟预算重新选择，而非沿用论文单点。

### 轴向注意力是否改善了对齐质量

该部分要回答 Actor 的结构改进是否给出更好的交错序列。比较常规 RNN-T 与加入 2 维轴向注意力块的模型，指标为目标文本困惑度越低越好与平均滞后秒数越低越好，两者都在验证集上以 600,000 步检查点测量。困惑度反映在给定交错前缀下写词的可预测性，滞后反映平均等待语音时长。

下表对比两种 Actor 在相同训练步数下的对齐质量，表前问题是结构相同、数据相同，仅有无轴向交互时路径质量是否不同。

| Model | PPL | AL |
| --- | --- | --- |
| Conventional | 22.3 | 8.03 |
| Proposed | 6.03 | 1.81 |

表中常规模型困惑度为 22.3 且滞后达 8.03 秒，几乎退化为等语音放完再写；加入 16 层轴向模块后困惑度降至 6.03，滞后降至 1.81 秒，说明跨模态交互使发射概率更尖锐、路径更单调。限制是这只是对齐质量而非最终翻译质量，Actor 本身翻译能力仍远弱于语音大模型，见下表直接用 Actor 解码的结果。

|  | ACL 60/60 | ACL 60/60 | MuST-C | MuST-C |
| --- | --- | --- | --- | --- |
| System | COMET | LongYAAL | COMET | LongYAAL |
| SFT (InfiniSST-style) | 68.43 | 2.27 | 66.16 | 2.34 |
| SFT + GRPO (HPO recipe) | 73.64 | 2.15 | 69.71 | 2.15 |
| CRESiST | 79.45 | 1.49 | 73.73 | 1.14 |
| CRESiST + GRPO | 80.04 | 1.37 | 78.47 | 1.23 |

上表为原文附录的 GRPO 后训练对照，完整保留 2 数据集的质量与延迟数值。可见 CRESiST 不加强化学习已超过加了 GRPO 的监督基线，而 CRESiST 再加 GRPO 仍能小幅提升且延迟不恶化，说明本方法是可继续做强化学习起点，而非替代强化学习。但 GRPO 增益小于原文引用的外部工作，作者归因于起点更强，且该实验仅在英中文档级无切句下报告，不宜推广到所有方向。

| Inference model | COMET | LAAL | COMET | LAAL |
| --- | --- | --- | --- | --- |
| RNN-T Actor, before distillation | 43.7 | 3.20 | 55.5 | 2.29 |
| RNN-T Actor, after distillation | 44.1 | 3.02 | 55.1 | 1.52 |
| CRESiST (Speech LLM) | 80.5 | 1.78 | 88.6 | 1.54 |

该表直接用 RNN-T 做推理，蒸馏前后英中质量仅 43.7 到 44.1 分，中英 55.5 到 55.1 分，远低于语音大模型的 80.5 与 88.6 分，但中英延迟从 2.29 秒降至 1.52 秒，接近大模型的 1.54 秒。这分离了两个角色：Actor 贡献时机，语音大模型贡献内容，保留小 RNN-T 做探索而用大模型做生成是合理的。代价是 RNN-T 每步要在格点行列上算联合网络，成本随音频与文本长度乘积增长，不适合直接放大到 7B 规模。

### 哪些结论超出证据就不成立

论文明确承认数据与领域是瓶颈。绝对质量受基座容量与离线伪译文质量限制，在 ACL 学术领域离线性能相比原始模型有所下降，存在领域分布失配与遗忘，说明当前数字不能直接视为通用学术会议场景的最优值。

文档级延迟控制也是局限。调节阈值在句子级能有效移动前沿，但在文档连续流中调节效果微弱，作者认为需要上下文感知的动态延迟乘子而非静态阈值。因此不能把句子级阈值曲线的灵活性直接推广到无界流部署。

此外质量结论依赖 XCOMET-XXL 自动指标与贪心解码，未报告人工评价与误判率，延迟结论依赖词级或中日韩字符级计算方式，换指标或换解码策略时排序可能变化。理论部分只给局部收敛到噪声邻域的界，依赖的正则条件与间隔假设较强，不支持全局最优或与真实最优策略一致的宣称。

### 复现第一步要准备什么与注意什么

复现应从数据与基座对齐做起。先按原文聚合开源语音识别数据并用大模型生成伪译文，注意中英占比过半且部分拼接至 30 秒，这决定了语言分布；再用 Whisper-medium 与 Qwen3-0.6B 搭建 Actor，用 Qwen2.5-Omni-7B 搭建 Critic，LoRA 秩 16、峰值学习率分阶段设置与每卡 30 秒音频上限需保持一致，否则延迟与质量不可比。

推理复现要注意句子级仅用语音活动检测截去开头静音，文档级仅过滤超过 2 秒的长静音，特征窗 400 毫秒并维护缓存，贪心加 4 元组不重复处理器。基线需用各自官方实现与相同评测协议，商业接口需控制往返时延并注意预算只测了 FLEURS。资源上原文用单节点 8 卡 A100 80G 并结合深度加速与梯度检查点，每阶段约 8 小时，硬件与并行方式不同会导致吞吐与延迟数字偏移。

关于可用性，本文证据只证明所列数据集与模型链接当前可达，不证明作者代码已公开；训练配置细节称将随开源代码发布，当前应以论文附录为准，不把第三方可达当作作者资源可用。

### 什么时候值得尝试与还缺哪项验证

当任务是中英输入到多目标语言的流式翻译，且要求无切句长流、低延迟与缓存可复用时，该方法值得尝试。它的价值在于不用外部词对齐即可学到细粒度自适应等待，尤其在中英资源丰富方向上前沿提升明显，且学到的策略可作为强化学习后训练的起点。

但若场景是专业学术领域、极低延迟下的绝对质量，或需要精确的文档级延迟旋钮，则需先补领域数据工程与动态延迟机制，并用人工评价复核自动指标。还缺的验证包括多语中低资源方向的稳定性、不同解码策略下的前沿变化，以及长时间真实会议流中累积延迟的统计。总体看，论文支持的是在给定数据、基座、贪心解码与所用指标下，交错加自增强能改善质量延迟折中，超出这些条件的效果仍待验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.06501v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-06/)
