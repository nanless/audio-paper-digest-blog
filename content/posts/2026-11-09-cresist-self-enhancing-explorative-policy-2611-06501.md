---
title: "CRESiST: Self-Enhancing Explorative Policy Learning for Simultaneous Speech Translation"
date: 2026-11-09
draft: false
tags: [语音翻译, 强化学习, 知识蒸馏, 流式处理]
categories: [论文速递]
description: "针对同声传译要在听与写之间做节奏决策的问题，CRESiST 用交错读写序列保留 KV 缓存并以 RNN-T 探索轨迹加语音大模型评价来自我发现策略，在句子级与无切分长音频评测上取得质量延迟新前沿，但结论依赖特定数据构造与指标条件。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.06501"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "不等听完再翻：CRESiST 怎样学会边听边译"
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
paper_digest_tags_concepts: [{"facet":"task","id":"task.speech-translation","label":"语音翻译"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"setting","id":"setting.streaming","label":"流式处理"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对同声传译要在听与写之间做节奏决策的问题，CRESiST 用交错读写序列保留 KV 缓存并以 RNN-T 探索轨迹加语音大模型评价来自我发现策略，在句子级与无切分长音频评测上取得质量延迟新前沿，但结论依赖特定数据构造与指标条件。"
paper_digest_authors: [{"affiliations":["Shanghai Jiao Tong University"],"name":"Chenyang Le"},{"affiliations":["Alibaba Token Hub, Alibaba Group","University of Macau"],"name":"Pei Zhang"},{"affiliations":["University College London"],"name":"Yuxiang Chen"},{"affiliations":["Shanghai Jiao Tong University","Alibaba Token Hub, Alibaba Group"],"name":"Bing Han"},{"affiliations":["University of Macau"],"name":"Derek F. Wong"},{"affiliations":["Alibaba Token Hub, Alibaba Group"],"name":"Baosong Yang"},{"affiliations":["Shanghai Jiao Tong University"],"name":"Yanmin Qian"}]
paper_digest_abstract_sha256: "53bfe23dfc0435e4b966e3c3ece1771b5e896f632cd64f17f82940e7bd0c4cb8"
paper_digest_sidecars: {"citation.bib":{"sha256":"249d8575b3515f44eb6bb53d8a135135169497886ca2332a6be187c092d4f69f","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06501/citation.bib"},"citation.json":{"sha256":"86da7aa02bbda222e0705d513a1cfbe6b29a873b12e6e5a2090874aa68576dd4","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06501/citation.json"},"citation.ris":{"sha256":"6b47c3a0015714618dc19915198ea5a82d539afab64167f696bc70e96e723ca3","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06501/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"ba7d608ba695bbed27f2dcc6c7f557aaa6bb690691585a966ca2f026d55e9bf6","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06501/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "504d5fdbaff2876f1a9c3e78944ff131366fb277211a6dcfebfbba6f398b8d03"
paper_digest_api_reader_plan_sha256: "3481d0007d1c4e99834876cea1b74aa81011c8ef5079c6b4b597391a3a21c358"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "389ffe71201bcfa38b8f84e287feb286d8ca45eb9582cfcd23a6e44d544575bc"
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

# 📄 不等听完再翻：CRESiST 怎样学会边听边译

> 英文题目：*[CRESiST: Self-Enhancing Explorative Policy Learning for Simultaneous Speech Translation](https://arxiv.org/abs/2611.06501v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音翻译](/audio-paper-digest-blog/papers/?concept=task.speech-translation)
- **研究方法**：[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)；[知识蒸馏](/audio-paper-digest-blog/papers/?concept=method.distillation)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)

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

同时语音翻译要求把不断到达的语音流增量译成另一种语言，既要忠实又要及时。已有大语言模型方案多采用前缀增量生成，每到新语音块就重算历史前缀，导致键值缓存失效和二次计算，并依赖外部语音活动检测切分长流，切断跨句上下文。论文把源语音按400ms块与目标词交错排成统一序列，使推理可沿序列追加并复用缓存，支持不切分的无限长输入。先由辅助换能器采样读写轨迹并输出候选交错序列，再由语音大语言模型内的价值评估模型以内容一致性和时延奖励评估轨迹并输出读写偏好，最后以二元交叉熵把该偏好蒸馏回探索器以更新其采样策略。在ACL 60/60英德无切分流式设置下，以XCOMET-XXL质量与LongYAAL时延为指标，方法取得85.59分、1.08秒，质量高于InfiniSST的63.52分、时延低于其1.46秒，也优于StreamATT的70.61分、1.89秒。该结论仅在上述无切分连续流评测且阈值τ=0.5下成立，无切分相对切分仅下降1–2个COMET点，理论上不保证全局收敛或等同真实最优策略。若去掉轴向注意力而用常规换能器，对齐将退化为句尾集中输出而接近离线翻译，时延惩罚过大损伤质量、过小引发时延尖峰，原文还提示对非标准口音与低资源方言可能存在偏差且未在医疗法律等高风险场景验证，原文未披露训练、推理或部署成本。

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

### 同声传译要同时保住质量和速度

同声传译的输入是一段不断变长的语音流，目标是在说话人还没说完时就开始输出译文。读者可以把任务拆成两个必须保留的信息：一是已经听到的声音内容，二是已经写出的译文前缀。输出是下一个动作，要么继续听，要么马上写一个词。

困难在于 2 个方向互相牵制。听得太少就写，容易把还没出现的动词或指代猜错；听得太多再写，延迟就会累积，长音频还会让历史上下文越来越长。论文把已有大模型同传路线的瓶颈定位在前缀增量生成上：每来一个语音块就拼到历史前缀之后，导致注意力键值缓存失效而重复计算，并依赖外部语音活动检测来切句，这会打断跨句指代并难以处理无限长流。

### 已有路线为何依赖外部对齐或切分

第一类路线用静态对齐构造监督轨迹，例如借助外部强制对齐工具或概率突变得到读写位置，再让模型模仿。这种做法把节奏固定下来，难以体现人类译员那种根据语种结构提前或延后输出的预测性。

第二类路线用固定启发式控制节奏，例如持续积分触发、等待若干词再写或注意力边界指示。这类方法在相同输入与监督下可以比较延迟，但阈值本身不学习语义是否足够。第三类路线处理无限长音频时依赖外部切分或只保留固定长度历史，例如用语音活动检测切句，或只保留若干文本词及其覆盖的语音帧。切分一旦出错，上下文连贯性就被破坏，长流中的延迟也会被低估或高估。

### 论文把节奏决策抽象成什么问题

论文把何时读写抽象成马尔可夫决策过程。状态是已经读入的语音块数与已经写出的目标词数，动作只有读与写两种。读使语音指针前进一步，写使文本指针前进一步。一次完整轨迹是从起点到终点在对齐格点上的单调路径，不会跳过任何目标词。

评价一条轨迹需要两个视角。数据动态指真实译文分布，模型动态指语音大模型在当前已听语音与已写译文下的预测分布。好的写动作应使二者一致，同时不让用户等太久。论文因此把奖励拆成一致性与延迟两部分，后文的训练循环就是围绕如何计算这两部分并把偏好传回探索器展开的。

**读动作（Read） × 写动作（Write）：** 读动作（Read）指再多听一段 400 毫秒语音块，写动作（Write）指根据已听语音产生下一个译文词；二者分工是控制信息是否足够，搭配成二元动作序列后，模型就多了一种可学习的节奏，组合意义在于把何时翻译与翻译什么分开优化。

### 整体流程如何从离线数据走到在线交错

尽管训练只用离线语音文本对，推理却要做在线交错读写。论文的做法是先由辅助 RNN-T 采样一条读写路径，把语音块与文本词合并成统一交错序列，再把该序列交给语音大模型评价与生成。评价好的路径经二值化变成伪标签，回传给 RNN-T 学习，形成探索与评价的闭环。

输入处理粒度是 400 毫秒微块。语音编码器输出约 2.5 赫兹特征，语音大模型侧用 20 块局部注意力窗口形成约 8 秒感受野，并每 2 秒加一次循环正弦位置编码。对话格式把每个语音块及其交错文本动作当作一轮，系统提示放任务指令。推理时只用 Router 的阈值决定读写，不再使用需要全局语音的 Refiner。

**Actor × Critic：** Actor 指负责探索读写轨迹的辅助 RNN-T，Critic 指负责评价轨迹并生成的语音大模型加 Router 与 Refiner；Actor 解决轨迹从哪里来，Critic 解决轨迹好不好，二者通过反向蒸馏搭配，使探索到的节奏向大模型偏好的节奏靠拢。

**交错序列 × KV 缓存复用：** 交错序列指把语音块与文本词按读写轨迹排成统一的一维输入，KV 缓存复用指推理时不再把新语音拼到历史前缀前而重算注意力；前者是格式，后者是收益，搭配后系统可以不做外部切分而连续处理无限长音频。

下面是训练与推理示意图的读图说明，重点看采样轨迹、评价分支与蒸馏回路三者的连接方式。

> **看图路径：** 1. 先看左下 RNN-T 对齐器如何输入语音块与文本词并输出采样轨迹；2. 再看中部交错序列如何进入语音大模型与 Router 分支；3. 对比右上蒸馏分支的二值化与右下推理分支的阈值判断

[![原论文 Figure 1：Training and inference diagram of CRESiST.](https://arxiv.org/html/2611.06501v1/diagram.png)](https://arxiv.org/html/2611.06501v1/diagram.png)

*论文图 1。原论文 Figure 1:：“Training and inference diagram of CRESiST.”。*

左半训练部分可见 RNN-T 对齐器下方输入语音块与文本词，上方策略格点采样出交错轨迹，中部该轨迹进入语音大模型并分出 Router 分数与 Refiner 分支，Router 分数经阈值判断后决定大模型损失是否在该文本位置计算，右上蒸馏分支把 Router 分数二值化后与 RNN-T 读概率算交叉熵，右下推理分支只保留 Router 阈值判断读写。这张图帮助理解为何同一真实词会同时成为两个预测头的目标，以及伪标签的梯度为何不回流到评价器。

### 探索器如何产生可用的读写轨迹

探索器是一个带 2 维轴向注意力的 RNN-T，包含声学编码器、文本预测器与联合网络。声学编码器用预训练语音编码器初始化并下采样到 400 毫秒 1 帧，文本预测器与轴向模块借用小参数语言模型初始化，其中音频轴注意力与联合网络随机初始化。轴向模块沿文本轴与语音轴各做一次因果自注意力，再接多层感知机，目的是加强两种模态的交互。

构造轨迹时，模型在文本长度与语音长度构成的格点上游走。在每个格点输出空白即读的概率，并按伯努利采样决定是沿语音轴前进还是沿文本轴发射词。采样路径单调且覆盖全部目标词，因此交错序列不会丢失译文。论文指出直接用语音大模型滚动采样会有冷启动与效率问题，所以用这个小 RNN-T 先做探索。

**Router × Refiner：** Router 指根据隐状态输出读概率的轻量二层网络，Refiner 指融合全局与局部声学信息再做生成的精修模块；Router 管节奏快慢，Refiner 管在当前节奏下把词写准，二者搭配让延迟奖励与一致性奖励落在同一条序列上。

### 评价器如何同时判断写得准与写得快

评价器以全模态大模型为主体，输入交错序列后得到局部隐状态，并对整段语音做平均池化得到全局声学表示。Refiner 与大模型本体分别计算生成损失，预测越准则一致性奖励越高。Router 则把前一步隐状态映射为读概率，读概率越接近 1 表示倾向继续听，越接近 0 表示倾向马上写。

一致性奖励取两部分生成损失的负值，其含义是模型动态与数据动态越接近越好。

\[\mathcal{R}_{consistency}=-(\mathcal{L}_{refiner}+\mathcal{L}_{body})\]

延迟奖励被写成从当前步起期望连续写多少词的形式，每多连续写一个词的概率是后续写概率的连乘，再对允许的最大轮内长度求和。最大化它会促使策略尽早输出更长的文本段，从而压缩延迟。

\[\mathcal{R}_{latency}^{(k)}=\mathbb{E}[W_{k}]=\sum_{m=1}^{M}\prod_{j=1}^{m}\big(1-p_{k+j}\big)\]

**一致性奖励 × 延迟奖励：** 一致性奖励指在给定已听语音和已写译文下把正确词预测准的程度，延迟奖励指期望一次能连续写多少词的长度；前者防止为求快而乱写，后者防止为求准而久等，组合后 Critic 的优化目标同时约束保真与及时。

结构上 Refiner 用 Router 概率做自适应门控，分别缩放全局与局部声学增益，使生成上下文与当前节奏状态同步。训练时两部分损失相加，推理时因缺少全局信息而停用 Refiner，仅保留 Router 做策略。

### 三阶段训练与反向蒸馏如何闭环

训练分 3 段。第一段只训练 RNN-T 建立基本声文对齐，底层文本层冻结，上层加音频轴注意力。第二段冻结 RNN-T，用其采样轨迹构造交错序列，训练语音大模型适应流式输入格式。第 3 段全部放开，做联合自增强。

评价器的优化目标是负的一致性奖励与负的延迟奖励再加负载均衡约束，延迟项与均衡项各有权重系数。

\[\mathcal{J}_{critic}=-\mathcal{R}_{consistency}-\alpha\mathcal{R}_{latency}+\beta\mathcal{L}_{balance}\]

探索器的优化目标以蒸馏损失为主，标准 RNN-T 损失为辅并带缩小系数。蒸馏时把优化后的 Router 概率按阈值二值化为目标动作，再用交叉熵迫使 RNN-T 的读概率向该目标靠拢，伪标签对评价器参数做停止梯度。

\[\mathcal{J}_{actor}=\mathcal{L}_{distill}+\lambda\mathcal{L}_{rnnt}\]

\[\mathcal{L}_{distill}=\sum_{k}\text{BCE}\Big(\hat{a}_{k},\pi_{act}(a_{k}=\phi\mid\cdot;\theta_{act})\Big)\]

外层循环按 8 次评价器更新加 1 次探索器更新的节奏进行。论文附录给出在光滑性、二次增长、间隔条件与有界方差等局部假设下的收敛分析，结论是跟踪误差几何收缩而探索器间隙随之下降，但作者明确不声称全局收敛，也不声称均衡点等于真实最优策略。

### 数据、基线与指标在什么条件下可比

训练数据来自 3 个开源语音识别语料的转写文本，再用大指令模型生成伪译文，覆盖中英与其他 4 个欧洲语言，中英占比过半。部分长音频由连续片段拼接到最长 30 秒。训练时还多任务保留离线语音翻译与文本翻译以维持离线能力。

评测分句子级与文档级。句子级用 FLEURS 与 CoVoST 2，长流用 MuST-C 与 ACL 60/60，并在是否使用人工句级切分下分别报告。基线包括开源流式系统、商用实时翻译接口与基于同一语音大模型的注意力对齐方法。实现上句子级只用语音活动检测去掉开头静音，文档级只过滤过长无声停顿，特征窗均为 400 毫秒，解码均为贪心加窗口去重复。

质量用神经指标 XCOMET-XXL，值越高越好；句子级延迟用长度自适应平均滞后，文档级用长流延迟指标，值越小越好。阈值变化画出质量延迟前沿，比较时需注意各基线调延迟的旋钮不同，商业接口还受网络往返时间限制。

### 句子级前沿显示了什么优势

句子级比较的问题是：在相近延迟下谁的质量更高，在相近质量下谁的延迟更低。论文通过改变决策阈值得到 CRESiST 曲线，通过改变各自基线阈值或边界得到对照曲线，指标方向为质量越高越好、延迟越低越好。下图三幅子图分别对应不同语言子集，纵轴为质量，横轴为延迟。

> **看图路径：** 1. 比较三幅子图中横轴延迟与纵轴质量的走向；2. 观察绿色 CRESiST 点相对紫色与蓝色基线的位置；3. 注意中间子图中红色星形商业系统点与绿色点的相对关系

[![原论文 Figure 3：Sentence-level quality-latency trade-off curves on the CoVoST2 and FLEURS datasets.](https://arxiv.org/html/2611.06501v1/main_sent.png)](https://arxiv.org/html/2611.06501v1/main_sent.png)

*论文图 3。原论文 Figure 3:：“Sentence-level quality-latency trade-off curves on the CoVoST2 and FLEURS datasets.”。*

三幅子图均可见绿色 CRESiST 曲线位于紫色与蓝色基线之上，意味着在各延迟区间取得更好的前沿；在中英方向上其流式点达到或超过红色星形商业系统点。该图支持在该评测与解码配置下学到的细粒度策略有效，但不能推广到未评测语种或不同语音活动检测与分词条件。

文档级比较的问题更严格：不用人工切分时能否保持质量并控制累积延迟。下表保留离线、有切分流式与无切分流式 3 种条件，指标为同一神经质量分与长流延迟。

|  | MuST-C | MuST-C | MuST-C | MuST-C | ACL 60/60 | ACL 60/60 | ACL 60/60 | ACL 60/60 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | en-zh | en-zh | en-de | en-de | en-zh | en-zh | en-de | en-de |
| Method | COMET | LongYAAL | COMET | LongYAAL | COMET | LongYAAL | COMET | LongYAAL |
| Offline w/ Oracle Segmentation |  |  |  |  |  |  |  |  |
| Qwen2.5-Omni | 79.41 | / | 91.47 | / | 84.42 | / | 91.72 | / |
| CRESiST | 79.11 | / | 91.35 | / | 83.36 | / | 90.03 | / |
| Streaming w/ Oracle Segmentation |  |  |  |  |  |  |  |  |
| InfiniSST (m=3) | 68.46 | 2.18 | 79.22 | 1.93 | 59.71 | 2.17 | 65.09 | 2.17 |
| AlignATT (ff=30) | 73.45 | 1.39 | 84.10 | 1.10 | 76.94 | 1.74 | 80.83 | 1.57 |
| CRESiST (τ\tau=0.5) | 75.30 | 1.29 | 87.75 | 0.80 | 80.06 | 1.49 | 87.23 | 1.00 |
| Streaming w/o Segmentation |  |  |  |  |  |  |  |  |
| StreamUni (k=3) | 52.96 | 2.91 | 73.45 | 2.01 | 41.90 | 1.64 | 71.03 | 1.64 |
| InfiniSST (m=3) | 70.66 | 1.88 | 78.74 | 1.46 | 68.62 | 1.80 | 63.52 | 1.46 |
| StreamATT (ff=30) | 70.23 | 2.05 | 74.35 | 2.42 | 76.63 | 2.15 | 70.61 | 1.89 |
| CRESiST (τ\tau=0.5) | 73.73 | 1.14 | 85.96 | 0.76 | 79.45 | 1.49 | 85.59 | 1.08 |

表中无切分条件下 CRESiST 在 4 个语言方向上质量最高且延迟最低，例如 ACL 60/60 英德方向质量明显高于注意力基线，而有切分流式下亦领先。无切分相对有切分的下降仅 1 到 2 分左右，支持其对无限上下文的鲁棒性判断。但该结论依赖原文的人工句时间戳作为切分参考、统一贪心解码与词级延迟统计，换指标或换切分方式结果可能变化，且个别基线在特定语言对上仍具竞争力。

### 长音频与逐词时序能否说明细粒度策略

本节回答无切分长流是否稳定，以及细粒度输出在时间轴上长什么样。论文除主表外还报告与强化学习后训练的兼容性：在同一主干上直接监督微调加分组策略优化仍明显落后于 CRESiST，而 CRESiST 再加同类优化还能小幅提升。这说明在线策略发现与后续强化优化是互补的，不能把后者的增益当作前者的替代。

下表比较 4 种系统在无切分英中长流上的质量与延迟，行名区分是否经过后训练，指标方向与上表相同。

|  | ACL 60/60 | ACL 60/60 | MuST-C | MuST-C |
| --- | --- | --- | --- | --- |
| System | COMET | LongYAAL | COMET | LongYAAL |
| SFT (InfiniSST-style) | 68.43 | 2.27 | 66.16 | 2.34 |
| SFT + GRPO (HPO recipe) | 73.64 | 2.15 | 69.71 | 2.15 |
| CRESiST | 79.45 | 1.49 | 73.73 | 1.14 |
| CRESiST + GRPO | 80.04 | 1.37 | 78.47 | 1.23 |

上表显示本方法在未做强化后训练时已超过基线加优化版本，且继续优化后质量仍有提升而延迟未明显恶化。但增益幅度小于原优化论文的报告，作者归因于起点更强，该解释依赖跨论文比较，训练步数与语料并不完全一致。

下面是同一英文转中文样本的时间线读图说明，上排为商业接口，中下排为本方法两种延迟统计口径。

> **看图路径：** 1. 先看灰色波形与红色音频结束线确定时间基准；2. 对比上排整句输出时刻与中下排逐词输出时刻的疏密；3. 观察同一译文片段在两种策略下首次出现时间的早晚

[![原论文 Figure 7：Translation timing visualization for a sample from the FLEURS EN-ZH test set.](https://arxiv.org/html/2611.06501v1/latency_case.png)](https://arxiv.org/html/2611.06501v1/latency_case.png)

*论文图 6。原论文 Figure 7:：“Translation timing visualization for a sample from the FLEURS EN-ZH test set.”。*

图中上排仅在较晚时刻出现两个整句气泡，中下排则在音频进行中陆续出现多个词级气泡，且首个译文片段远早于上排。这支持本方法是词级自适应而非子句级缓冲，但这只是单样本可视化，不能据此计算平均延迟或证明所有句式都有相同行为，图中计算感知与非感知两种口径的差异也需结合原文延迟定义理解。

### 联合优化与延迟权重各自起了什么作用

消融要回答增益来自联合自增强还是仅来自数据与结构。论文固定总步数比较三者：直接用 RNN-T 对齐数据做监督微调、2 阶段流水线训练、完整联合训练。下图横轴延迟越左越好，纵轴质量越高越好，三幅子图覆盖不同语言子集。

> **看图路径：** 1. 对比绿色完整训练与粉色两阶段与橙色直接微调三条曲线的高低；2. 观察橙色曲线在低延迟端质量下降是否更快；3. 注意中间子图中文与英文方向上绿色相对粉色的延迟左移

[![原论文 Figure 4：Ablation on training strategies.](https://arxiv.org/html/2611.06501v1/ablation.png)](https://arxiv.org/html/2611.06501v1/ablation.png)

*论文图 4。原论文 Figure 4:：“Ablation on training strategies. “Direct SFT” uses RNN-T aligned data directly (similar to InfiniSST).”。*

图中橙色直接微调曲线整体最低，尤其在低延迟端质量下滑更快；粉色 2 阶段居中；绿色完整方法在各子图上最高，且在中英方向延迟压缩更明显。这支持联合优化对策略质量有实质贡献，但该结论只在相同主干、相同步数与相同阈值扫描方式下成立。

下表比较两种 RNN-T 探索器的对齐质量，指标为验证集上目标文本困惑度越低越好与平均滞后秒数越低越好。

| Model | PPL | AL |
| --- | --- | --- |
| Conventional | 22.3 | 8.03 |
| Proposed | 6.03 | 1.81 |

表中引入轴向块后困惑度从 22.3 降到 6.03，平均滞后从 8.03 秒降到 1.81 秒，说明双轴交互显著改善增量对齐。论文还可视化发射概率，称常规结构把多数预测拖到语音尾部而退化为离线翻译，但该可视化为个例，需与上表平均指标一起理解。

延迟权重系数的敏感性分析显示，权重过大压缩延迟但损伤质量，过小则在某些阈值下延迟尖峰。这说明阈值与权重需联合调节，不能只看单点最优。

### 探索器本身能否直接当翻译器

本节回答策略与质量是否解耦，即蒸馏把什么传给了探索器。下表在 FLEURS 上直接用 RNN-T 探索器做流式贪心解码，比较蒸馏前后与完整语音大模型的质量与延迟，质量越高越好，延迟越低越好。

| Inference model | COMET | LAAL | COMET | LAAL |
| --- | --- | --- | --- | --- |
| RNN-T Actor, before distillation | 43.7 | 3.20 | 55.5 | 2.29 |
| RNN-T Actor, after distillation | 44.1 | 3.02 | 55.1 | 1.52 |
| CRESiST (Speech LLM) | 80.5 | 1.78 | 88.6 | 1.54 |

表中探索器蒸馏前后质量几乎不变，英中约 43.7 到 44.1，中英约 55.5 到 55.1，但中英延迟从 2.29 秒降到 1.52 秒，已接近完整模型的 1.54 秒，而质量仍落后 30 分以上。这支持反向蒸馏传递的是何时读写的行为而非写什么的语言能力，0.6B 预测器的命名实体幻觉是主要短板。

该结果也说明保留小 RNN-T 做探索器加预训练大模型做生成器的分工是合理的。若把换能器放大到 70 亿量级，其每步沿格点行列评估联合网络的解码代价将随音频与文本长度乘积增长，仍缺乏预训练大模型的语言知识，因此论文未把探索器作为最终翻译器。

### 哪些结论不能超出原文证据

首先是数据与领域瓶颈。作者明确训练侧重策略优化而未做严格数据工程，绝对质量受主干能力与离线平行数据限制，在学术领域开发集上离线性能相对原版主干有所下降，存在分布失配与灾难性遗忘。这意味着质量数字不能直接理解为模型上限，换数据可能改变排名。

其次是文档级延迟控制。句子级调阈值能有效移动前沿，但在无切分长流中阈值调节作用变弱，累积动态可能需要上下文感知的延迟乘子等机制。因此不能把句子级阈值扫描的最优点当作长流部署可直接获得的 operating 点。

此外理论分析是局部的，依赖光滑、增长、间隔与有界方差等假设，不声称全局收敛，也不保证均衡点等于真实最优策略。商业接口比较受预算限制仅覆盖 FLEURS 子集与特定网络条件，跨语言与跨领域泛化仍待验证。

### 复现第一步要固定什么

复现应先固定输入与评价条件：400 毫秒特征窗、20 块局部窗口、贪心解码加窗口去重复、词级或中日韩字符级延迟统计，以及句子级仅去开头静音、文档级仅过滤超长停顿的处理。阈值扫描建议覆盖 0.3 到 0.7，主表对照点取 0.5，以便与原文曲线对齐。

训练按 3 阶段复现：先训 RNN-T 对齐，冻结底层文本层；再冻结 RNN-T 训练语音大模型适应交错格式，同时多任务保留离线能力；最后按 8 次评价器加 1 次探索器做联合蒸馏。优化器、LoRA 秩与分阶段峰值学习率按原文附录设置，单阶段约 8 卡 80 GB 环境下 8 小时量级，资源不足时应先缩小音频时长上限而非改变阈值逻辑。

关于可用性，论文正文与附录给出的是数据集、模型与代码库的第三方链接与许可信息，当前是否可达需自行核验，不能把论文提到链接等同于作者已开源本项目代码或权重。报告结果时需同时给出质量与延迟、是否使用人工切分、阈值与解码配置，否则无法判断是否复现了同一前沿。

### 什么时候值得尝试还缺哪项验证

当任务是中英输入到多目标语言的连续同传，且不能依赖外部切分、希望保留 KV 缓存做无限长推理时，该方法值得尝试。其细粒度策略在低延迟区退化更平缓，适合对首词延迟敏感的场景；若已有强离线主干，可先复用其语言能力而只学习节奏。

还缺的验证包括：更多口音与非正式领域的长流测试、人工听感与误译率评估、不同延迟指标下排名是否稳定，以及阈值之外的文档级延迟控制器。计算代价方面，训练需 3 阶段与联合循环，推理虽省去重算但仍需维护声文缓存与 Router 判断，实际端到端延迟需在目标硬件上实测，不能用离线前沿直接承诺在线效果。

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

[← 返回 2026-11-09 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-09/)
