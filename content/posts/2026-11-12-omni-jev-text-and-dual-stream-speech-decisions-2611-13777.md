---
title: "Omni-JEV: Text and Dual-Stream Speech Decisions"
date: 2026-11-12
draft: false
tags: [全双工语音交互, 强化学习, 语音, 多语言, 弱监督学习]
categories: [论文速递]
description: "Omni-JEV 把收集到的用户语音片段和同一时段的助手参考语音放在决策端点，用同一个候选分布输出听、开始、保持、打断、恢复五个动作，在固定弱标签测试上高斯延续语音准确率 84.08%、文本 96.55%，而类别延续概率误差更低，两者各有取舍。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.13777"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "全双工语音助手何时该听、该说、该打断：Omni-JEV 的五动作决策"
paper_digest_original_title: "Omni-JEV: Text and Dual-Stream Speech Decisions"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.13777v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.13777v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.13777v1.pdf"
paper_digest_primary_task: "全双工语音交互"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"setting","id":"setting.multilingual","label":"多语言"},{"facet":"method","id":"method.weak-supervised","label":"弱监督学习"}]
paper_digest_primary_method: "强化学习"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "Omni-JEV 把收集到的用户语音片段和同一时段的助手参考语音放在决策端点，用同一个候选分布输出听、开始、保持、打断、恢复五个动作，在固定弱标签测试上高斯延续语音准确率 84.08%、文本 96.55%，而类别延续概率误差更低，两者各有取舍。"
paper_digest_authors: [{"affiliations":["Merit Interactive Research Institute"],"name":"Shengzhou Kong"}]
paper_digest_abstract_sha256: "3d818e84ebfcb2bf6885274c0c12043b01c5aec1c1966d91e7eeba5207a1c933"
paper_digest_sidecars: {"citation.bib":{"sha256":"8af6c3f6f7855d521c6326b200fa46086f593ab8bd880cc44e4f3c03550fc425","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-13777/citation.bib"},"citation.json":{"sha256":"a740964d01bc6943ca4eab2a3d14b709764e1394e8fb3872d12516d7e8c033a5","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-13777/citation.json"},"citation.ris":{"sha256":"9c294e38d0c4f58becfc12cadeba5b7c3362b7447e16631c0cd81c421a63971b","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-13777/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"f9ea61fd42984f222054fc522c4d7d091db986711d2a92782cbdac28b59f5012","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-13777/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "8aec7c9487d672172c3f8fc458288d55c602e3fb05b4f9c0b88c279eead24973"
paper_digest_api_reader_plan_sha256: "bafd427a0d3482ec661449e073819cf636ea49ad6b290965ead81a3f553892bc"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "a7b09f9acd40d974433d8d7249a92ee835f41effc86af3d6fc1e247eabc2e20e"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "c22f6ce6fb6a491e681b16cfd05d30fca630ae20ece77edd97e96ab2644c88cb"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "1ad5fb68eb9e74ed19e47bb5623d23b8ce3f66ab2ce2213f96885b9d650abb00"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "2f4bde83960be440af2a30a5c5e646da9ef9d68ae6a8ed601413c8e168d7e4c0"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 全双工语音助手何时该听、该说、该打断：Omni-JEV 的五动作决策

> 英文题目：*[Omni-JEV: Text and Dual-Stream Speech Decisions](https://arxiv.org/abs/2611.13777v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-paper-digest-blog/papers/?concept=task.full-duplex)
- **研究方法**：[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)；[弱监督学习](/audio-paper-digest-blog/papers/?concept=method.weak-supervised)
- **研究条件**：[多语言](/audio-paper-digest-blog/papers/?concept=setting.multilingual)
- **信号**：[语音](/audio-paper-digest-blog/papers/?concept=signal.speech)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5


## 👥 作者与机构

- Shengzhou Kong：Merit Interactive Research Institute

## 📌 核心摘要

读者需要理解的对象是全双工对话中用户话语与助手回应状态共同决定的下一步动作，困难在于话语完结、下一说话人、打断意图等线索含义随回应是否活跃、是否曾被打断而变化，处理过程要求在收集片段端点处结合文本或双路语音证据输出五个交互动作的概率分布。先复用语音到语音对齐的前端与思考模型，用同一编码器分别编码用户与助手参考语音并保留角色分段，将连续帧嵌入与指令、上下文及候选描述拼接后送入同一因果Transformer。再利用原始词表头在最终答案前缀隐状态处取出候选符号对应分量并归一化为动作概率，经交叉熵微调得到监督起点，使文本与语音共用同一读出目标。最后从同一监督起点出发，分别用高斯扰动完整概率向量与分类Choice采样候选位置估计负Brier误差的两种概率敏感决策强化学习延续训练，高斯探索相对分量而Choice探索候选位置。与复现的分类Choice分支音频准确率84.04%、文本准确率96.51%相比，高斯分支在固定测试集上音频准确率为84.08%，文本准确率为96.55%，而分类分支Brier误差与负对数似然更低，这种分类与概率质量的不一致是本文的关键实证结果。结论只适用于该弱标签自然频率划分，作者明确在线历史压缩、声学鲁棒性与多轮效用尚未测量。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 全双工对话为什么不能只做语音活动检测

全双工语音助手在播放回答的同时还在听用户。用户插一句话，可能是随口附和，也可能是要求改答案或换话题，系统要决定保持播放、打断还是稍后再说。只判断有没有人说话不够，还要判断这段话对当前回答意味着什么。

论文把问题放在收集片段的端点上：从语音起始开始收集，等暂停确认或原生切分点到达才决策。输入是端点之前的一段用户音频和同一段助手参考音频，加上助手状态和历史；输出是 5 个动作的概率。后续录音可以帮助标注这段话的意思，但不允许放进本次输入，这样才符合上线时只能看到过去信息的要求。

### 已有路线提供了证据，但还没有给出动作

语音活动投影预测未来谁说话，FastTurn 把流式语义和声学结合起来做轮次判断，X2-Turn 同时做转写和用户状态，SID-Bench 区分实质打断和客套附和。这些都是证据，不是直接的控制器动作。

另一条路线是直接给决策分布。AudioJev 给出候选概率并研究排序变化，Qwen-Audio-Jev 提供选择、判断和打分接口，其中类别分支用离散抽样优化决策分布。Omni-JEV 沿着这条路线，把文本和角色分开的语音接到同一个五动作读出上，并比较两种强化学习延续。通道复用、并行流和结构化动作的研究说明了双路建模的背景，但本文的输出不是下一段语音，而是端点处的动作分布。

### 端点、状态和五种动作如何定义任务

每个样本围绕一个收集到的用户片段建立。文本输入是状态、历史、助手文本和用户文本，音频输入是同一区间内的用户波形和助手波形再加通道可用标记。状态不是设备回传的播放器遥测，而是从端点前的观察重建的；短语音来源则按任务给定或假设的空闲、未知等状态补齐。历史由角色前缀、保留的状态标志和音频窗口之前的完整文本组成，不包含当前窗口的转写。

目标是判断收集片段应该如何影响回答。同样一句话，在助手空闲时可能要开始回答，在播放中可能是保持或打断，在刚被打断后可能要恢复。论文用 5 个动作统一表达，下一张小表会固定它们的操作含义。

**收集片段端点 × 交互状态 × 历史：** 收集片段端点是从语音起始开始收集、等暂停确认才做决策的时刻，它划定哪些证据可用；交互状态是助手当时空闲、正在播放还是刚被打断；历史是端点之前的角色音频和保留的状态标志。三者合在一起，才能判断同一句话是该开始新回答，还是保持、打断或恢复已有回答。

下面这张图把先收集后决策的过程画了出来，上半是时间轴，下半是意图决定动作的两个例子，重点是重叠本身不能决定动作。

> **看图路径：** 1. 先看上半部分从历史锚点到端点 e，两路音频如何共享同一因果区间；2. 再对比下半部分同样重叠下保持播放与停止播放的意图差别；3. 注意虚线 e 之后的行为只说明动作含义，不进入本次输入

[![原论文 Figure 1：Interaction decisions at collected-segment endpoints.](https://arxiv.org/html/2611.13777v1/vad_action_timeline_v2.svg)](https://arxiv.org/html/2611.13777v1/vad_action_timeline_v2.svg)

*论文图 1。原论文 Figure 1:：“Interaction decisions at collected-segment endpoints.”。*

图 1 上半显示用户轨和助手参考轨共享从历史锚点到端点的同一因果区间，端点处把配对音频加状态和历史一起提交给模型，推理后才执行动作；下半用示意波形对比了播放中听到附和时保持播放与听到打断请求时停止播放。两路锚点跟随来源策略，后续行为只说明语义，间距不表示延迟，波形和意图是示意而非实录。

### 文本和双流语音如何走同一条决策通路

Omni-JEV 复用了一个语音到语音模型的理解通路，包括 SenseVoice 编码器、可学习的声学前端和 Qwen3 为基础的 Thinker，生成语音的 Talker 不参与决策。前端和 Thinker 约有 59 万量级的上亿参数之外的可训练部分，宽度为 1024，SenseVoice 在动作适配时冻结。文本和语音进入同一个因果 Transformer，没有单独的通道融合块，区别只在于语音多了声学片段。

读懂这张结构图，就能复述一次前向过程：底部配对音频和文本问题、状态、候选描述拼成提示，音频帧变成连续嵌入后与文本嵌入串接，Thinker 算出最终答案前缀的隐状态，原词表头对候选符号做归一化。

> **看图路径：** 1. 从底部配对音频和文本输入出发，看两路如何经共享权重进入提示序列；2. 跟踪 Qwen3 Thinker 到原语言模型头的箭头，理解最终前缀隐状态的作用；3. 看顶部三步读出示例中候选 D 如何得到较高概率并映射到停止

[![原论文 Figure 2：Omni-JEV architecture. User and assistant-reference audio are independently encoded with shared…](https://arxiv.org/html/2611.13777v1/figures/omnijev_token_readout_nano_banana_corrected.png)](https://arxiv.org/html/2611.13777v1/figures/omnijev_token_readout_nano_banana_corrected.png)

*论文图 2。原论文 Figure 2:：“Omni-JEV architecture. User and assistant-reference audio are independently encoded with shared SenseVoice and frontend parameters, then serialized with text into one prompt.”。*

图 2 底部是配对因果音频前缀、文本问题与候选动作，中部是两路共享权重的 SenseVoice 加声学前端分别产出用户帧嵌入和助手帧嵌入，再与分词后的文本嵌入拼成提示序列，上部是原语言模型头从全词表 logits 中取出候选 logits 并只在候选内归一化的三步示例。图中 1 例给出 0.20、-0.40、0.80、2.10、-0.10 并得到 0.09、0.05、0.17、0.62、0.07，选中 D 对应停止，数值是该例的示意排序。

### 两路音频怎样分开编码又放在同一空间

关键是既要分清角色，又要能比较。模型对用户和助手波形各做一次 16 kHz 重采样和编码，得到各自的有效帧，再用同一套前端投影到 Thinker 维度。权重共享使两路落在同一声学表示空间，分开的片段位置保留身份，同一时间区间保留静音与语音的对照。最终决策隐状态可以同时注意到两路编码。

这种设计只是接口上的双流，证据强度取决于通道来源。原生分离轨道保留较强角色证据，单声道录音用角色时间掩码切分时，重叠段两路可能是同一混合声，不能分离混叠语音。单声道强重叠样本的角色区分能力因此受限。

**用户流 × 助手参考流 × 双流音频：** 用户流是新来的交互证据，助手参考流是同一时间区间内助手回答的参考录音，双流音频指把两路按角色分开编码但对齐到同一区间输入。分开编码保留谁在说话，共享编码器让两者落在同一表示空间，模型才能判断重叠是附和还是打断。

**声学前端 × Thinker × 候选读出：** 声学前端把 SenseVoice 输出的帧映射到语言模型维度，Thinker 是以 Qwen3 为基础的因果 Transformer，负责融合文本和音频，候选读出复用原词表头只对 A 到 E 五个符号做归一化。前端解决模态转换，Thinker 做推理，读出给分布，组合后文本和语音共用同一个动作目标。

### 候选概率如何从原词表头直接读出

提示把指令、用户音频、助手音频、上下文、候选描述和答案前缀串起来，每个音频片段占与有效帧数相同的连续位置。文本样本去掉声学片段但保留上下文和候选字段，缺失角色就在提示中明说并省略其片段。两种模态在同一个答案位置做决策。

读出时取最终前缀隐状态过原词表头得到全词表 logits，只取出候选符号对应的分量再做归一化。符号 A 到 E 只是位置，不固定对应哪个动作，训练时候选与目标位置一起打乱。每个符号是答案边界上的单个 token，不需要生成解释，也不新增分类器。音频样本同时更新前端和 Thinker，文本样本更新 Thinker 和共享读出。

\[z_{j}=\ell_{e}[v_{j}],\qquad p_{\theta}(C_{j}\mid x_{e})=\frac{\exp z_{j}}{\sum_{k=1}^{|C|}\exp z_{k}}.\]

该式说明候选概率的计算对象：先取候选符号的 logit，再只在候选集合内归一化。推理时直接返回这个未扰动的分布及其到动作的映射，供控制器使用。

### 监督适配之后两条概率优化路线有何不同

训练分两段。先用交叉熵把理解通路适配到动作任务，目标是跟随每个样本候选打乱的独热分布，做一个监督轮次得到共享初始化。再从该初始化分出两条概率敏感的强化学习延续，数据顺序、输入、参数和优化步数都对齐，区别在于探索什么和用什么打分。

高斯分支扰动相对候选 logit 得到多个完整概率向量，用对数加球形奖励对每个向量打分，再用留一基线算优势，最后经高斯密度的分数函数把更新传回 logit。类别分支从平滑后的分布中抽样离散候选位置，用重要性权重纠正期望，以负 Brier 误差为目标，用碰撞项估计概率范数，再对抽样到的对数概率加权更新。两者都不加辅助交叉熵。

**高斯扰动 × 类别抽样 × 留一基线：** 高斯扰动是对候选 logit 加中心化噪声，得到多个完整概率向量再打分；类别抽样是从平滑分布中抽出离散候选位置再估计负 Brier 误差；留一基线是用同组其他样本的平均奖励做对照，突出当前样本的好坏。三者都是为了在同一监督起点之后比较分布质量，区别在于探索对象和打分方式不同。

下图对比了两条完整策略的计算链，左侧是扰动向量，右侧是抽样位置，奖励都来自标签而非对话轨迹回报。

> **看图路径：** 1. 对比左右两列从共享监督初始化分叉后的扰动对象差异；2. 看中间独热目标如何同时给分布奖励和离散抽样奖励提供依据；3. 注意底部标注的冻结编码器和无辅助交叉熵的共同约束

[![原论文 Figure 3：RLCD continuations from one Omni-JEV SFT checkpoint.](https://arxiv.org/html/2611.13777v1/figures/rlcd_two_recipes_gpt.png)](https://arxiv.org/html/2611.13777v1/figures/rlcd_two_recipes_gpt.png)

*论文图 3。原论文 Figure 3:：“RLCD continuations from one Omni-JEV SFT checkpoint.”。*

图 3 顶部是共享的监督初始化，左侧高斯分支显示候选 logit 经中心化高斯噪声生成多个概率向量，再用对数加 0.75 倍球形分数组合打分并做留一优势；右侧类别分支显示从平滑分布中抽样离散候选，用重要性权重纠正并以负 Brier 为期望回报。图中 M 为 16 与 32、噪声与平滑系数等是配方示意值，具体以正文配方为准，柱高为示意而非训练观测。

\[\epsilon_{r}=\sigma P\xi_{r},\qquad\widetilde{z}_{r}=\operatorname{sg}(z)+\epsilon_{r},\qquad q_{r}=\operatorname{softmax}(\widetilde{z}_{r}),\quad r=1,\ldots,M.\]

该式说明高斯探索的生成顺序：以停止梯度的 logit 为中心加中心化噪声，再做归一化得到扰动分布。中心化去掉归一化不变的公共平移方向，不改变采样到的概率。

\[R(q_{r},t)=\sum_{k}t_{k}\log q_{rk}+\beta\frac{\langle t,q_{r}\rangle}{\|q_{r}\|_{2}},\qquad\beta=0.75.\]

该式是高斯分支的目标打分，对数项奖励目标概率，球形项衡量目标与向量方向的一致性，系数为 0.75。每个样本仍是完整分布，奖励同时看到目标质量和与其他动作的关系。

\[J_{C}(p,t)=-\|p-t\|_{2}^{2}.\]

该式是类别分支的目标，即负 Brier 误差。它直接惩罚概率向量与独热目标的平方距离，因此该分支在概率误差上更低与目标一致，但两条路线还同时改变了探索与估计器，不能只归因于估计器。

### 数据从哪里来，标签弱在哪里

语料把 9 个来源家族拼成中英双语的统一五动作任务，共 313486 训练和 34860 测试样本，音频约 217699 训练加 24287 测试，文本约 95787 训练加 10573 测试。意图文本、命令词、环境声、唤醒对话、合成对话和原生双通道对话都被转成同一端点加状态加动作的格式。翻译语音按自己的边界对齐，不继承源语言时间戳；相关录音、双语对应和完全相同的输入通过分组固定在同一侧划分。

弱监督的含义要讲清。银行意图文本是在假设空闲无可恢复回答下请文本教师判动作，不是照抄意图编号；孤立命令词用固定词到动作约定，播放兼容性未经验证；环境声在无识别任务假设下全标为等待；会话来源用原生切分或暂停确认端点，结合确定性时序规则或保存的转写加模型判断得到动作。不同来源没有统一标注算法，标签是派生的弱目标。

**准确率 × 宏平均 F1 × Brier 误差 × 负对数似然：** 准确率看选对最大概率动作的样本比例，宏平均 F1 对稀有动作更敏感，Brier 误差衡量整个概率向量与独热目标的平方距离，负对数似然只看目标动作分到的概率。分类好不等于概率准，决策接口既要报选哪个动作，也要用后两个指标检验概率质量。

### 评测如何划分模态、指标和对照条件

评测按模态分别报告，文本宏平均只在有支持的 4 个动作上平均，音频在 5 个动作上平均，汇总行是合并全部预测后重算而非模态分数平均。Brier 显示为乘以 10 的 4 次方的值，负对数似然看目标概率，准确率看最大概率是否选对。数据天然不平衡，音频等待样本远多而恢复极少，文本没有恢复样本，准确率易被大类主导，宏平均对稀有动作更敏感。

对照条件并不对等。外部系统是零样本且只用用户音频，Omni-JEV 是任务适配且可用助手参考音频，因此是任务层面的比较，不是同等输入下的结构优势证明。实时接口只用 2000 样本子集且分布不同，不能与全量系统直接配对排名。解析失败计入分母，Step-Audio2-mini 有大量解析无效答案，其分数也反映了格式依从性。

### 与外部系统相比能说什么，不能说什么

要回答的比较问题是：在各自适用范围和给定输入下，谁在端点动作分类上更高，以及失败如何计入分母。指标方向是准确率和宏平均越高越好，外部系统零样本单路音频，Omni-JEV 适配且可用双路参考。

| Model | Scope | NN | Fail/invalid | Audio ACC ↑ | Audio Macro-F1 ↑ | Text ACC ↑ | Text Macro-F1 ↑ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen3.1-Realtime API only; 2,000-row budget-limited subset |  |  |  |  |  |  |  |
| Qwen3.1-Realtime API | 2k API | 2,000 | 0/0 | 37.06 | 35.18 | 92.32 | 71.97 |
| Full frozen evaluation; AudioJev is audio-only |  |  |  |  |  |  |  |
| Qwen3-Omni | full test | 34,860 | 0/0 | 26.43 | 13.17 | 77.53 | 58.18 |
| MiniCPM-o4.5 | full test | 34,860 | 0/0 | 47.40 | 23.28 | 83.58 | 65.51 |
| MOSS-Audio4B | full test | 34,860 | 0/0 | 51.50 | 23.61 | 72.87 | 49.95 |
| Step-Audio2-mini | full test | 34,860 | 0/12941 | 16.54 | 12.13 | 40.40 | 38.21 |
| FireRedAudio | full audio | 24,287 | 0/0 | 37.44 | 30.99 | – | – |
| AudioJev | full audio | 24,287 | 0/0 | 15.76 | 12.59 | – | – |
| Omni-JEV Gaussian RLCD | full test | 34,860 | 0/0 | 84.08 | 76.00 | 96.55 | 80.56 |
| Omni-JEV categorical RLCD | full test | 34,860 | 0/0 | 84.04 | 75.23 | 96.51 | 81.41 |

上表是任务层面的全量与子集对照，高斯分支在音频和文本准确率上都处于高位，类别分支紧随其后，外部模型的低分同时包含未适配、只用单路音频和输出格式的影响。实时子集因采样不同不参与全量配对，若只看数字排名会误导，需要结合适用范围和输入条件理解，这也不是同等输入下的架构差距证明。

下面这组图把分类与概率质量放在一起看，圆点与菱形是单种子单次运行的估计，坐标轴经过放大，面板量程也不同。

> **看图路径：** 1. 先看上排准确率与宏平均中圆点与菱形的相对位置；2. 再看下排 Brier 与负对数似然的方向是越低越好；3. 注意坐标轴是放大而非从零开始，差距不宜目测夸大

[![原论文 Figure 5：Classification and probability quality after matched RLCD continuation.](https://arxiv.org/html/2611.13777v1/rlcd_current_comparison.svg)](https://arxiv.org/html/2611.13777v1/rlcd_current_comparison.svg)

*论文图 5。原论文 Figure 5:：“Classification and probability quality after matched RLCD continuation.”。*

图 5 分 4 个面板同时显示分类与概率质量，上排准确率与宏平均越高越好，下排 Brier 乘以 10 的 4 次方与负对数似然越低越好。可见 2 分支准确率几乎重合，但类别分支在 2 模态的概率误差都更低；文本宏平均只覆盖 4 个有支持的动作，音频覆盖 5 个。

### 同一初始化分出的两条延续如何取舍

这里的比较问题是：共享监督起点、数据顺序和更新预算时，高斯延续与类别延续在分类和概率质量上各有何表现。指标方向与上节相同，Brier 与负对数似然越低越好，准确率只差几个正确样本也如实保留。

| Modality | RLCD | NN | ACC ↑ | Macro-F1 ↑ | Brier ×104↓ | NLL ↓ |
| --- | --- | --- | --- | --- | --- | --- |
| Audio | Gaussian | 24,287 | 84.08 | 76.00 | 2806.99 | 0.5863 |
| Audio | Categorical | 24,287 | 84.04 | 75.23 | 2499.43 | 0.4376 |
| Text | Gaussian | 10,573 | 96.55 | 80.56 | 655.79 | 0.1834 |
| Text | Categorical | 10,573 | 96.51 | 81.41 | 616.87 | 0.1331 |
| Pooled | Gaussian | 34,860 | 87.86 | 80.93 | 2154.54 | 0.4641 |
| Pooled | Categorical | 34,860 | 87.83 | 80.32 | 1928.46 | 0.3452 |

上表是核心数字结果，包含两种实际可运行的延续、双模态与汇总行。高斯音频宏平均高 0.77 个百分点，文本类别分支高 0.85 个百分点；准确率只差 8 个音频正确和 4 个文本正确。概率质量一边倒向类别分支，音频 Brier 相对低约 10.96%，文本低约 5.93%，负对数似然在 2 模态也更低。最大概率决定准确率，整个向量决定 Brier，目标概率决定负对数似然，因此相近的选对数不保证概率同样可靠。类别分支直接优化负 Brier，其更低的 Brier 与目标一致，但奖励、探索和估计器是联合变化的，不能分离出估计器的功劳，也不能据此认定某个控制器更优或在每个状态下都校准。

### 来源和语言切分如何限定总分的含义

要回答的比较问题是：总分来自哪些异质子任务，以及不同延续是否在各来源一致。指标方向同上，单动作来源的高分需要结合支持数来读。

| Source | NN | G ACC | G F1 | C ACC | C F1 |
| --- | --- | --- | --- | --- | --- |
| BANKING77 | 2,509 | 99.64 | 49.91 | 99.60 | 49.90 |
| MASSIVE | 3,034 | 97.86 | 69.08 | 97.79 | 70.99 |
| Legacy turn text | 5,030 | 94.21 | 93.36 | 94.19 | 93.34 |
| Mini Speech Commands | 1,580 | 98.61 | 98.54 | 98.42 | 98.31 |
| MInDS-14 | 100 | 100.00 | 100.00 | 100.00 | 100.00 |
| ESC-10 | 40 | 100.00 | 100.00 | 100.00 | 100.00 |
| Wakeup | 7,380 | 92.56 | 69.13 | 92.43 | 67.25 |
| FD | 184 | 69.02 | 51.43 | 69.57 | 57.54 |
| SmoothConv | 15,003 | 78.41 | 55.26 | 78.44 | 54.74 |

上表按来源切分报告两种延续。孤立词命令按约定映射，Mini Speech Commands 接近 98.6% 准确率；SmoothConv 按会话时序规则派生目标，准确率约 78.4% 且宏平均仅 55% 左右。MInDS-14 和环境声各只有单一场景动作，准确率为 100% 但测的不是播放控制。唤醒对话约 92.5%，FD 只有 184 个测试样本且分数明显更低。

中文音频与英文的差距同时混入了来源构成、翻译、合成与通道质量，不能分离出语言效应；SmoothConv 的分数是对派生标注策略的一致性，不是可靠打断能力的直接证据；短命令来源不能为播放兼容性提供缺失的证据。读总分时必须连同构造规则和支持数一起看。

模型输入的上下文也需要下面这张小表来锚定，它说明文本、助手状态、策略场景和角色可用性字段，缺字段不表示否定状态。

| Action | Operational interpretation |
| --- | --- |
| listen | Await more evidence when no response is to be preserved or resumed. |
| start | Begin a response to the user when no existing response should be preserved. |
| continue | Preserve a response that remains active; the segment does not warrant interruption. |
| stop | Interrupt a response active during the segment because of the user’s intent. |
| recover | Resume a response after a preceding stop or recoverable interruption. |

上表固定了动作与上下文语义：附和保持播放对应保持，打断请求对应停止，刚被打断后恢复对应恢复，等待针对无可保持或恢复的情形，当前窗口转写被排除，助手在收集段是否发声用区间标志保留。图 1 下半的两个例子正是同一重叠下意图决定动作的教学对照。

### 哪些结论超出证据就不再成立

离线结果只说明在该弱标签划分下的学习情况，没有分离波形相对转写、双路相对单路或语音到语音初始化各自的增益。外部基线输入与适配不同，任务排序不能写成同等输入的架构胜利。

概率方面，理想打分规则的性质只针对理想分布，有限样本优化、平滑目标和弱标签使实际分布偏离理想，质量必须实测而非由性质推出。本文只用一个训练种子，测试集在诊断中被查看过，属于固定回顾评测而非盲测。同步、回声鲁棒、延迟、多轮效用、在线历史截断的影响都未测量，不能承诺闭环可用。

数据方面，类别不平衡、合成语音、稀少恢复样本、未知语义重复和预训练暴露都限制了总分的解释。文本与音频来源构成不同，2 模态准确率差距不能读成转写与波形的对比。单声道混合在重叠时仍是混合证据，许可也异质，FD v3 无独立许可记录，唤醒与 SmoothConv 限非商业，遗留文本是未公开内部来源，本文不分发原始录音、派生音频、完整标签或权重。

### 复现第一步要固定什么，代价在哪里

复现先固定划分与初始化。按来源身份、双语对应和完全相同输入分组，用固定种子做约九一划分并保持同组同侧；转接已训练的语音到语音前端与 Thinker 权重，冻结 SenseVoice，只适配前端与 Thinker。监督做一个自然频率轮次，再分别跑高斯与类别延续各全量样本、多万优化步，累积 4 步，前端与 Thinker 用不同的小学习率，带权重衰减、梯度裁剪、预热后余弦衰减。

代价主要在音频前缀长度与采样数。高斯每输入十余个向量计算，类别每输入数十个离散抽样，离线评测用完整前缀并放宽到 40960 token 上下文，与在线只保留完成边界前 40 秒音频的策略不同，离线分数不衡量在线压缩的影响。评测要检查测试覆盖完整、概率归一且预测与概率最大项一致，并从保存预测重算汇总。

### 什么时候值得试，还缺哪项验证

当控制器需要在端点同时拿到动作和分布，且能提供助手参考音频与状态时，这个统一读出值得试：文本与语音共用候选目标，适配后在固定划分上达到上述分类水平，类别延续还能给出更低的概率误差。若只能用单路用户音频或零样本部署，就不能直接套用本文数字，需要重测。

选择延续看优先级：更看重音频类别平衡选高斯，更看重概率误差选类别，文本平衡则类别略好。任何选择都只是单种子完整策略的比较，不是普适最优。

还缺的验证是闭环与等输入对照：同等输入下的结构消融、只用转写与用波形的对比、分离通道与混合通道的对比、监督后不做强化学习的增益、多轮延迟与回声下的表现，以及每个响应状态下的校准。只有补上这些，才能把端点决策接到真正可用的全双工控制上。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.13777v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-12/)
