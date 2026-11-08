---
title: "Confucius4-R2T2: A Stable-Prefix Streaming ASR Model for Real Real-Time Transcription"
date: 2026-11-06
draft: false
tags: [语音识别, SFT, 强化学习, 流式处理]
categories: [论文速递]
description: "针对边听边出的识别结果会被反复修改的问题，R2T2 用最长稳定前缀从全上下文模型提炼出只增不改的流式输出，在 160 ms 小块下接近全量音频的准确率并保持低延迟，代价是标注更保守、需要等待更多证据。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.06043"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "不再改口的流式语音识别：Confucius4-R2T2 如何学会有把握才开口"
paper_digest_original_title: "Confucius4-R2T2: A Stable-Prefix Streaming ASR Model for Real Real-Time Transcription"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.06043v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.06043v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.06043v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.sft","label":"SFT"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"setting","id":"setting.streaming","label":"流式处理"}]
paper_digest_primary_method: "SFT"
paper_digest_score: 7.9
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "模型报告"
paper_digest_one_sentence: "针对边听边出的识别结果会被反复修改的问题，R2T2 用最长稳定前缀从全上下文模型提炼出只增不改的流式输出，在 160 ms 小块下接近全量音频的准确率并保持低延迟，代价是标注更保守、需要等待更多证据。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Daniel Huang"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qi He"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shaoxiong Duan"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yingjie Li"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Qiao Cheng"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Yitao Duan"}]
paper_digest_abstract_sha256: "48c998f656270d6246a4aca8f14dca4b321b8550d5e9aa55924cef811ab5ac81"
paper_digest_sidecars: {"citation.bib":{"sha256":"c0875bed4621d0c8330b46e18ba6dcf8ecb7691780b609f5203bb7a634fec739","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06043/citation.bib"},"citation.json":{"sha256":"40e7f7f261391264c3b8ef0ff40ff04fe6f0f31b44d70f757d81a3ce968dabc4","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06043/citation.json"},"citation.ris":{"sha256":"a3c86ce8030f1bda9b282e1053396820e7178bc74856280fcc99e9ccc3160c25","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06043/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"51f69ab841e3f834ecde3c11f46e9acff5084c8da0bcf127c2433ce9e47920b1","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06043/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "d2fa58e52c7eb0ae6e7cc5ac7dace65c4a5b77a827c51ca0f1b660ae7bc6f1ba"
paper_digest_api_reader_plan_sha256: "ea6a099ebc3369418589031171c57a5258f08758d4fd2642fd64e5eaa49cc170"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "df2ed75c64e224a1ca8d2f81840d4e52ab9407a66f015092a82ef5644993e5ae"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "54adf3bb8be3f8e7389605e1597ad7d9a177a47c1c782bc67045e3f5ebe0901d"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "2c4189ac309e699c0beb8df74e8999a3bde34615a6679bf290ed45b0440d2fc8"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "542fb971659123d69192a74976f81f3d3fc6aa3da1bdec947bebc348d305f2aa"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 不再改口的流式语音识别：Confucius4-R2T2 如何学会有把握才开口

> 英文题目：*[Confucius4-R2T2: A Stable-Prefix Streaming ASR Model for Real Real-Time Transcription](https://arxiv.org/abs/2611.06043v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)
- **研究方法**：[SFT](/audio-paper-digest-blog/papers/?concept=method.sft)；[强化学习](/audio-paper-digest-blog/papers/?concept=method.reinforcement)
- **研究条件**：[流式处理](/audio-paper-digest-blog/papers/?concept=setting.streaming)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.9/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Daniel Huang：机构信息未能在本次解析中与作者逐人可靠绑定
- Qi He：机构信息未能在本次解析中与作者逐人可靠绑定
- Shaoxiong Duan：机构信息未能在本次解析中与作者逐人可靠绑定
- Yingjie Li：机构信息未能在本次解析中与作者逐人可靠绑定
- Qiao Cheng：机构信息未能在本次解析中与作者逐人可靠绑定
- Yitao Duan：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

流式语音识别要在音频到达过程中逐块输出文字，输出供翻译和语音智能体直接消费，一旦修改已输出的词就会造成重复计算或错误动作。论文把输入记为每 80 ms 一帧的音频序列，把模型在前缀音频上的输出记为部分假设，把在完整音频上的输出记为全量输出，难点是决定何时已有音频足以确定下一个词。作者引入的最长稳定前缀指模型过去输出中与全量输出完全一致的最长者，训练时在稳定区间内监督转写，在不稳定间隙监督输出等待标记 `Wait`。模型基于 Qwen3-ASR-1.7B 冻结音频编码器和投影层，只训练语言解码器，先做监督微调再做分组相对策略优化。在 160 ms 分块和保留 1 个临时词的设置下，总平均错误率为 5.76%，与该模型的 160 ms 基线 21.01% 相比大幅下降，与自身全量解码的 5.15% 相差约 0.6 个百分点。结论适用于中英文短语音和 RealSI 长语音的稳定输出场景，对 10 种未训练语言的 18 个测试集也有迁移，但回顾性延迟不等于服务端实测延迟，原文未披露训练设备与耗时。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/netease-youdao/Confucius4-R2T2> — 链接可访问（HTTP 200）

- 模型相关资源：<https://huggingface.co/netease-youdao/Confucius4-R2T2> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 流式识别要解决什么：边听边出且不能改口

输入是一段随时间增长的音频，模型每隔一小块就要给出当前文字。目标有 3 个：文字要准，出的要快，已经交出的文字以后不能再改。论文强调第 3 点是因为下游消费者是机器：翻译、字幕、语音助手会在每个词出现时立刻行动，改口意味着已做的工作作废，甚至产生错误的外部动作。

已有流式方案多用因果编码器或分块注意力控制声学上下文，但论文指出这只决定看到多少音频，不保证已发文本不再被改。另一类方法在推理时做局部一致、保留最后几个词不发，或训练时见随机截断音频，都降低了修改频率，但没有做到永不修改。本文要做的就是把不修改作为硬约束，同时把准确率和延迟做到接近全量识别。

### 已有路线为何还留着改口问题

按论文的整理，已有工作分别控制 3 件事中的 1 件。架构类通过单调注意力、分块或双模式模型限制编码器看到的声学范围；输出稳定类分为测量、推理时修复和训练 3 组，测量估计每个词以后不再变的概率，修复类提交连续假设的公共前缀或丢掉尾部几个词，训练类让模型见过截断样本以改善闪烁与延迟的折中。

这些路线与本文的输入、目标和运行阶段不完全相同：推理规则不改变模型本身，模型仍在不断修正；按词时间戳要求准时输出会迫使模型猜测；同时翻译中按完整源文锚定目标的做法与本文最接近，但原文指出其允许提交从未完整出现过的部分串，而本文要求标签必须是模型过去完整输出过的一整段。比较时不能把类别差异直接读成同条件胜负。

### 难点在哪里：该等多久才算证据足够

把全上下文模型直接用于流式会遇到 2 个困难。第 1 个是词的声学片段往往不足以确定它，后文才能消歧，若按强制对齐的时间戳要求一到就输出，等于让模型猜。第 2 个是论文称为残差干扰的现象：逐段喂入更多音频时，正确词数并不单调增加，新来的尾巴会扰动前文表示，导致本已正确的词被改掉。

因此关键不是切分音频，而是决定何时提交。提交早了会错，提交晚了延迟高，提交后又改则违反稳定约束。论文把问题定义为预测最终 transcript 会以什么开头，而不是转写当前片段，这就引出了最长稳定前缀。

**残差干扰 × 右上下文滞后：** 残差干扰指新追加的音频尾巴扰动已解码的前文，使正确词数不单调增长；右上下文滞后指仅靠词音频时间戳决定提交会迫使模型猜测需要后文才能消歧的内容，二者共同说明不能按时间戳硬切提交点。

### 整体思路：冻结编码器，只教解码器何时等待

R2T2 从 Qwen3-ASR-1.7B 后训练而来，音频编码器和投影层全程冻结，只更新语言解码器。编码器仍对已收到的音频做双向处理，不做因果化，也不加注意力掩码。输入音频每 80 ms 产生 1 个音频 token，推理时按可配置的块大小查询，例如 160 ms 更新 1 次。

训练与推理围绕一个分工：内容判断与时机判断分开。解码器学会在证据不足时输出特殊的 Wait 词，相当于说这一块先不提交；证据足够时输出稳定前缀。推理时一旦预测 Wait 就结束本次更新，不再串行解码。块大小和临时后缀预算 U 在推理时可调，不用重新训练，从而在质量优先与延迟优先之间切换。

**临时令牌预算 × 已提交文本：** 已提交文本是永不修改的历史，只增不减；临时令牌预算 U 是允许暂缓提交的尾部长度，解码器内部可用它等待更多音频，但只有通过验证的部分才转入已提交，二者组合在不破坏稳定性的前提下调节准确率与延迟。

### 最长稳定前缀是什么：过去输出中能保留的那部分

记全量音频输出为最终答案，记每个时刻用已到音频解码出的输出为当前假设。最长稳定前缀的含义是：在过去所有假设中，找出那些整体都是最终答案前缀的完整输出，取其中最长的一个。若过去没有一段完全符合，则为空。它随时间只增不改，最终等于全量输出。

论文证明了 3 条性质：对前缀序单调，不会收回已提交内容；与全量输出一致；是在同时满足自洽与模型可实现条件的所有候选中最长的。模型可实现在这里是严格含义，指标签必须等于过去某个时刻的完整输出，而不是截一段或拼几段。

\[m_{t}\;=\;\max_{j\leq t}\;n_{j}\cdot\mathbf{1}\!\left[\,y_{j}\preceq\bar{y}\,\right],\]

**稳定前缀 × 最长稳定前缀：** 稳定前缀是行为约束，要求已发布文本只增不改；最长稳定前缀是在此约束下能安全提交的具体标签，指过去某个时刻模型完整输出过、且整体都是最终全量输出前缀的最长一段，二者是要求与可执行答案的关系。

与另外 2 种历史定义相比，最终锚定允许取部分一致头的最长公共前缀，可能给出模型从未完整输出过的串；全未来准则还要求与中间每个输出都一致，会被中途偏离又返回的输出拉短。本文的选择更保守，1 个词分歧就使该步得 0 分，偏向晚提交，但换来了标签一定是模型自己能解码出的东西，避免用未来音频的证据要求当前提交。

### 推理如何做到不改口又不重复算太多

解码器输入包括提示头、保留音频的编码输出、提示尾、已提交文本和至多 U 个可修正后缀。已提交文本永不修改，可修正后缀只在预填充阶段验证：把上一轮后缀作为草稿，用新音频下的预填充 logits 保留最长一致前缀，在首个分歧处截断并继续解码。若后缀仍正确，则不消耗串行步骤。

为控制每步代价，编码器按 8 s 窗口缓存，已完成的窗口直接复用，只重算当前活动窗口；解码器复用提示头与已完成窗口的键值缓存，活动窗口、提示尾和保留文本每步重新预填充。只保留最近 1 个完整窗口加活动窗口，上下文限定在约 16 s 音频及其 transcript，每 8 s 重建 1 次保留窗口的缓存。U 等于 0 时追求最低延迟，U 等于 1 时允许 1 个词的延迟换取准确率，但 2 种模式都只释放已提交文本。

下面这张表比较了 3 种设计每步要做的工作，说明保留原架构的代价与边界。要回答的问题是：在不改模型、不改单调性的前提下，每步重算多少、串行解码多少、哪段可改。

| Design | Encoder | Decoder pre-fill | Serial steps | Revisable | Trained |
| --- | --- | --- | --- | --- | --- |
| QS† | all audio | all audio + text | 5+5\,+ new | last 5 | — |
| R2T2 | active window | active window + text | new | last UU | language decoder |

表中 R2T2 每步只处理活动窗口与保留文本，新生成词数为零时对应 Wait 提前结束；Qwen3 流式基线每步重编码全部音频并再生 5 个词；因果交错设计只是理论参照，需要重训编码器与解码器，本文并未实现。R2T2 的代价是保留文本仍要每步预填充，但长度有界且可并行处理。

**Wait × 稳定区间：** 稳定区间是按 80 ms 步进回放音频后，模型输出与最长稳定前缀一致的时间段；Wait 是落在区间之外时监督模型输出的等待标记，二者分工为能提交时提交、证据不足时明确等待。

### 训练标签怎么做：区间内提交，区间外学等待

标注时把同一条音频按 80 ms 步进逐步喂给教师模型，得到一系列完整假设，再与最终全量输出比较得到每时刻的最长稳定前缀。把输出与该前缀一致的连续检查点合并为稳定区间，落在区间外的检查点视为不确定延续。训练时随机切一条前缀，只给模型切点之前的音频，标签按切点位置决定：若在稳定区间内，监督为该时刻的最长稳定前缀；若在区间间隙，则在前缀后附加 Wait。切在第 1 个端点之前时只有 Wait，切在末尾时用完整转写保留离线能力。

下图是论文用 I have two cats 为例的示意，读图时注意它不是实测准确率，而是标签构造过程。图中横轴为音频时间，每行是 1 个更长前缀对应的完整假设，蓝色与橙色区分可提交与待等待，右侧区间标出稳定前缀的持续范围。

> **看图路径：** 1. 先看横轴时间与每行完整假设，区分蓝色稳定词与橙色不确定延续；2. 再看右侧区间如何把连续稳定的检查点合并为一段；3. 最后看落在区间外的时间点为何对应等待监督

![原论文 Figure 2：Stable-prefix interval extraction.](/audio-paper-digest-blog/images/papers/2611.06043/figure-2-6a94242971cb44e9.png)

*论文图 2。原论文 Figure 2:：“Stable-prefix interval extraction. A teacher ASR model decodes progressively longer audio prefixes every 80 ms.”。*

图中蓝色表示与稳定参考一致、可提交的词，橙色表示尚不确定的延续，需要等待。区间记录了每个稳定前缀持续的时间范围，落在间隙的切点会额外监督 Wait。这样词法识别与提交时机在同一目标中联合学习，模型既保留已认文本，又学会在残差干扰下不提前提交尾巴。

\[y_{t}^{*}=\begin{cases}\mathrm{LSP}(\mathcal{M},x,t),&\exists i:\ s_{i}\leq t\leq e_{i},\\[2.0pt] \mathrm{LSP}(\mathcal{M},x,t)\oplus\textnormal{{Wait}}{},&\text{otherwise}.\end{cases}\]

上式即切点标签的规则，圆圈加号表示在前缀后接 Wait。论文还引入流可塑性度量，按时间或归一化时间平均最长稳定前缀长度，曲线下面积越大说明该模型越适合被改造成流式，Qwen3-ASR-1.7B 在此最高，但这只是对标注质量的指示，不是最终识别准确率。

### 两阶段训练如何从模仿走到质量与速度折中

第 1 阶段有监督微调让模型熟悉最长稳定前缀格式与 Wait，训练 1 个轮次，只更新语言解码器。采样上 10% 用完整 utterance 学离线识别，90% 用前缀切分模拟流式；切分中一半落在稳定区间内，一半落在间隙，时间戳可落在标注端点之间。音频注意力窗口在 1 s 到 8 s 之间动态采样，另加噪声、混响与语言标签翻转等增强，针对幻觉、噪声和语言混淆。

第 2 阶段用分组相对策略优化进一步约束行为，奖励含 8 个分量，侧重字符错误率，同时惩罚冗余、重复、语言不一致与区间内的超长尾巴，并监督 Wait 的位置。每轮可展开 1 到 4 轮流式轨迹，让延续在更多音频到来后被评估。最终奖励经平滑非线性压缩，避免极端值主导。

\[R(y_{t},y_{t}^{\ast})=\tanh\!\left(3R_{\mathrm{raw}}(y_{t},y_{t}^{\ast})\right),\]

上式是最终奖励的压缩形式，原始加权和先按空、精确匹配等特殊情况分支处理，再经双曲正切放缩。训练配置与奖励权重的具体取值见下 2 个表，读表时注意它们回答的是复现所需的优化与监督条件，不是性能结论。

| Setting | SFT run |
| --- | --- |
| Initialization | Qwen3-ASR-1.7B |
| Objective | Cross-entropy on LSP transcription and Wait targets |
| Optimizer | Fused AdamW |
| Learning rate | \(10^{-5}\) |
| LR schedule | Linear decay after 2% warmup |

上表是微调的优化器、学习率与批量设置，编码器与投影冻结、只训练解码器是关键约束，动态音频注意力保留了不同上下文下的提交行为，批量与学习率决定了该阶段的优化预算。

| Component | Weight | Role |
| --- | --- | --- |
| CER | 0.300 | Normalized character-level recognition accuracy |
| Precision | 0.150 | Edit-distance precision surrogate |
| Length | 0.150 | Excess output length |

上表是强化阶段 8 个奖励的权重，字符错误率权重最高，尾部与词级局部准确率只在稳定区间内起作用，切标记权重最小但负责 Wait 的有无与位置。各分量的独立贡献需要受控消融才能确认，原文未提供逐项拿掉后的效果。

### 实验如何测准与测快：数据、指标与延迟定义

主评测用 8 个英文集与 5 个中文集，英文报词错误率，中文报字符错误率，都经标准文本归一化，宏平均对每个数据集等权，总宏平均合并 2 类错误率而非合并编辑次数。另有 10 个未参与后训练的语言、18 个测试集单独评估迁移，不计入中英宏平均。后训练只用自有中英数据，评测集未加入，但基座预训练可能见过部分评测数据。

延迟用回顾性延迟衡量：只对经对齐匹配的相同单位，计算从参考词结束到对应前缀永久稳定的音频时间差。高错误样本不计入延迟，需与错误率一起看。论文明确它不含执行、排队、传输与渲染耗时，也不验证真实 serving 延迟。

**回顾性延迟 × 实时系数：** 回顾性延迟是音频时间轴上从参考词结束到对应前缀永久稳定的间隔，不含机器执行与传输耗时；实时系数是每次更新是否在下一块音频到来前算完，二者分别回答内容何时够格提交与系统能否跟上音频流速。

下图解释了延迟的计时方式，读图时先分清圆圈与方块分别代表参考结束与永久固定，再看箭头跨越的音频时间，最后确认该度量与机器 serving 耗时无关。

> **看图路径：** 1. 先找到圆圈表示的参考词结束时刻与方块表示的永久稳定时刻；2. 再比较 a、blue、cat 三处箭头长度的差异；3. 最后确认延迟量在音频时间轴上度量，不含 serving 耗时

![原论文 Figure 4：Retrospective lag from Qwen-aligned reference word ends (circles) to the end times when the…](/audio-paper-digest-blog/images/papers/2611.06043/figure-4-c13dfd18f3861217.png)

*论文图 4。原论文 Figure 4:：“Retrospective lag from Qwen-aligned reference word ends (circles) to the end times when the corresponding transcript prefixes become permanently stable (squares).”。*

图中横轴是音频时间，圆圈是参考词结束，方块是前缀固定，箭头长度即该词的延迟，例如 cat 的 0.24 s。这说明延迟反映内容何时够格永久提交，而不是系统每步算得有多快。允许修改的系统可用后文修正前文，其首次出现时间也可能被计入，因此回顾性延迟不直接等于闪烁频率。

### 主结果：在小块下接近全量准确率且不再改口

要回答的核心问题是：在流式推理中 3 种设计的单次更新工作量如何构成，R2T2 相对已有流式基线与因果交错参考有何不同。下表是原文工作量对比表，比较对象是同样解码器输入把音频放在文本之前的 3 种可运行设计。

| Design | Encoder | Decoder pre-fill | Serial steps | Revisable | Trained |
| --- | --- | --- | --- | --- | --- |
| QS† | all audio | all audio + text | 5+5\,+ new | last 5 | — |
| R2T2 | active window | active window + text | new | last UU | language decoder |
| CI‡ | new chunk | new chunk | new | none | enc. + dec. |

该表显示，全部音频随流以每秒 12.5 个位置增长，激活窗口至多 8 秒即 100 个位置，文本为保留转录本且仅在 R2T2 中有界。QS 每次重编码全部音频并预填充全部音频加文本，串行步数为 5 加新生词，可改后缀为最后 5 个；R2T2 只重编码激活窗口并预填充激活窗口加文本，串行步数仅为新生词且在预测 Wait 时为零，可改后缀为最后 U 个并在预填充中校验；CI 理论上只处理新块且不可改写。训练列上 R2T2 仅训练语言解码器，音频编码器与投影保持冻结。

代价与限制是：该结论只在表所列编码器、解码器预填充、串行步数、可改后缀与训练部件范围内成立；R2T2 每 160 毫秒约 6.25 次更新且小于 1 的实时系数假设每次更新在下一块到达前完成，本文不以实测服务延迟验证；CI 为理论参考并未实现，不能作为可运行基线。

### 跨语言迁移：没练过的语言是否也变好

要回答的问题是：只用中英后训练的检查点，在未见过的语言上是否仍优于同设置基线。原文报告迁移评估覆盖 10 个额外语言共 18 个测试集，在 160 ms、U 等于 1 时每个集的误差都低于基线同设置，比较双方是同一块大小、同一 U 下的可运行策略。

这支持改造学到的是何时等待的通用行为，而非仅记住中英词形。后训练音频为 1,500 小时的中英数据，迁移分数不计入中英宏平均。限制同样明确：日韩泰用字符错误率、其余用词错误率，不可直接跨指标相减；基座可能见过部分评测数据；更强的教师是否带来更强流式模型仍是开放问题。

流可塑性筛选为选基座提供了依据：在 1,860 条 Buckeye 语音上的归一化面积比较中，Qwen3-ASR-1.7B 最高，为 0.493，支持选它做基座，但这只是改造潜力的指示，不是最终识别准确率的保证。

### 块大小与保留词数如何影响误差与延迟

论文用同一检查点扫描块大小与 U，回答推理时旋钮的作用。在 160 ms 下，暂缓提交 1 个词使总宏识别误差有所下降，同时使平均回顾性延迟有所增加；即使 U 等于 0，R2T2 在 2 类语言上的宏误差仍低于同为 160 ms 的其他开源基线，尽管其中一些延迟更低但误差高得多。把块从 160 ms 翻倍到 320 ms 时，U 等于 1 的增益很小，U 等于 0 则更敏感，说明后缀预算让模型等到更多音频再提交。

到 2 s 大块时，块内已含更多上下文，U 对总宏识别误差和平均回顾性延迟的作用变小；与 160 ms 相比，识别误差小幅下降，平均回顾性延迟明显更高。80 ms、U 等于 0 提供延迟优先档，2 类语言平均回顾性延迟在 0.5 s 以下，但识别付出代价。块时长本身不决定响应快慢，语速、词边界与停顿会影响何时攒够提交证据。非稳定前缀模型可用后文修正前文，最终误差可能更好，但其前缀固定更晚，回顾性延迟不占优，且闪烁本身未被直接测量。

### 哪些结论还不能下：延迟、成本与泛化边界

首先，回顾性延迟是音频时间轴上的可提交时刻，不是端到端 serving 延迟，实时系数小于 1 只说明单步计算能在下一块到来前完成，论文未用运行时测量验证。其次，缓存、有界上下文与后缀验证降低了每步重算，但编码器仍要重编码活动窗口、保留文本仍要每步预填充，长流的总成本与显存行为未单独成表。

第 3 点是中文优势需分开看：部分商业系统在中文最终误差更低，但稳定更晚；Nemotron 与 Voxtral 虽支持中文但在此 cohort 上明显更差，WhisperRT 不支持中文故无中文分数。第 4 点是流可塑性曲线的末段超过时间戳参考，只表示相对自身最终 transcript 的进度，不能直接读成提前正确预测了对应词，需词级对齐才能确认。缺证据不等于技术有错，但相关不等于因果，部署前需补真实延迟与长语音压力测试。

### 复现第 1 步做什么：数据、冻结与评估要对齐

值得尝试的场景是下游按词增量消费、改口代价高的任务，如实时字幕、增量翻译与语音助手。复现先对齐 3 件事：用同一基座 Qwen3-ASR-1.7B 并冻结编码器与投影，只训练语言解码器；按 80 ms 步进自蒸馏生成最长稳定前缀与稳定区间，区间内监督前缀、间隙监督 Wait；评估时固定块大小、U 与保留窗口数，只释放已提交文本，并用相同的归一化与宏平均报告词或字符错误率。

关键超参数包括微调学习率、批量、1 s 到 8 s 动态注意力窗口，以及强化阶段的温度、每提示采样数与 Wait 标记。作者资源当前可用，已公开模型权重与代码，分别位于 Hugging Face 与 GitHub，但权重可下载不等于评测集可复用，后训练数据为自有数据。还需补的验证是真实 serving 延迟、长语音 RealSI 之外的持续语音表现，以及更多语言与噪声下的稳定性。

### 一句话总结与何时选用

R2T2 把稳定输出从推理规则变成可学习的提交行为，用过去完整输出中最长的最终前缀做标签，用 Wait 显式建模不确定，既保留了冻结编码器的表示能力，又让小块流式接近全量准确率。选用它意味着接受更保守的提交与额外的标注、2 阶段训练代价，换来已发文本永不修改与可调的误差延迟折中。若任务允许修正历史或只看最终误差，不稳定的大块或离线方案可能更合适；若下游按词行动，则稳定前缀与低回顾性延迟的组合更值得优先验证。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：模型报告 | [arXiv 原文](https://arxiv.org/abs/2611.06043v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-06/)
