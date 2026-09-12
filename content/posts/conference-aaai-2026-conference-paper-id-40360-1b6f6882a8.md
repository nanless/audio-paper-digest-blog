---
title: "REINA: Regularized Entropy Information-Based Loss for Efficient Simultaneous Speech Translation"
date: 2026-09-11
draft: false
description: "针对同传要在质量与延迟之间选读或写的问题，REINA 用完整音频与截断音频下对数概率之差估计信息增益来训练独立策略网络，在 MUST-C 与 CVSS-C 上提升归一化流效率，但截断适配训练与单调约束不可缺且德语高延迟点仍有反例。"
tags: ["正则化", "多语言", "流式处理", "语音翻译"]
categories: ["aaai-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:aaai:2026:conference-paper-id:40360"
paper_digest_source_kind: conference
paper_digest_conference_id: "aaai-2026"
paper_digest_conference_record_url: "https://ojs.aaai.org/index.php/AAAI/article/view/40360"
paper_digest_conference_pdf_url: "https://ojs.aaai.org/index.php/AAAI/article/view/40360/44321"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ff042697ccbc46ef52f860a9ba069ce83d037315de963b4a5e67f681f6b08b6f"
paper_digest_api_reader_plan_sha256: "84a46ea1112ea17adecf1ea591be573edcb586c83fcd86d7dc48de8ae1641fc3"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "cbad499446729855d4c98687a62cdf74558794c1e02d4e3243b2fbb99f8394b9"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "49731b3fac9f3c910162fa87c00ed37bd048340199a85c8b5a15dd6904e19439"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "51f3163651a8d5c37bde45f3e1c1b5d62c30e30531dfdbc2a221e133c055092d"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "50fc859aae573dcdcf4ec06c6b9e63c2c96261b43cb3afb6b0c85a89e80a1e48"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.regularization","label":"正则化"},{"facet":"setting","id":"setting.multilingual","label":"多语言"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"task","id":"task.speech-translation","label":"语音翻译"}]
paper_digest_primary_task: "语音翻译"
paper_digest_primary_method: "正则化"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 等还是说：REINA 用信息增益把非流式翻译模型改成同传模型

> 英文题目：*REINA: Regularized Entropy Information-Based Loss for Efficient Simultaneous Speech Translation*

> 会议身份：`conference:aaai:2026:conference-paper-id:40360`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40360) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40360/44321)

标签：#正则化 #多语言 #流式处理 #语音翻译

评分：**6.8/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Nameer Hirschkind：机构信息未能从会议 PDF 纯文本可靠映射
- Joseph Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiao Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Mahesh Kumar Nandwana：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

同时语音翻译以流式音频为输入并逐词输出目标文本，需在每个时刻决定等待读取还是立即写出，难点在于跨语言词序差异使所需上下文不定，质量与延迟直接冲突。该方法先以多任务训练非流式语音到文本翻译基座，编码器采用Whisper Medium并联合机器翻译与语音识别数据优化解码器，输出完整音频下的翻译分布；再用部分截断音频微调同一基座，使其能估计部分音频下的下一词元对数概率，输出适配流式部分输入的模型；最后冻结基座训练轻量策略网络，将全音频与部分音频交叉熵差的批量归一化值与策略分数协方差最大化，并以单调性与L2正则约束推理一致性，输出阈值可调的读写真策略。与仅比较部分与完整输入输出分布散度的DiG-SST不同，该目标直接利用真实标签计算信息增益，使等待决策对应互信息的阈值判断，具有更直接的优化意义。在MUST-C基准评测任务下，REINA (MUST-C only)的NoSE指标为0.940，高于Dig-SST (Original)的0.888。结论适用边界受限于英法德西六个方向、0.25秒分块与束宽3的流式束搜索，长语音与语音到语音外推尚未验证。训练成本已披露为24卡A100-80G硬件下第一阶段5天、第二阶段2天、策略阶段20轮12小时内完成。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，为什么必须边听边决定？

输入是一段源语言语音流，目标是实时生成目标语言文本。论文研究的是同时语音翻译，也就是音频还没有放完就必须开始输出译文。与离线语音到文本翻译不同，这里不能等整句说完再翻译，因为语音聊天等场景要求延迟足够低。白话说，离线翻译是听完全部再交卷，同时翻译是听一句写一句，写早了容易错，写晚了让人等。英文名分别为 Simultaneous Speech Translation，简称 SimulST，和 Speech-to-Text Translation，简称 S2TT。

必须保留的信息是策略只解决读或写时机，不改变基座翻译模型本身的词表与声学建模。本文输出是一套可复述的 3 阶段做法与可核对的延迟质量前沿。

**同时语音翻译 × 语音到文本翻译：** 语音到文本翻译指拿到整段语音后再给出完整译文，负责保证翻译质量上限；同时语音翻译指边听边译，负责在延迟约束下决定何时输出。两者搭配的原因是后者可以直接复用前者的编码器与解码器表示，组合意义在于把已训练好的非流式能力转化为流式能力，而新增的只是读或写的时机判断。

本解读默认只讲论文实际做的英法西德 4 个方向，不扩展到其他语种。教学例子明确标为例子：例如英语主语在前而德语动词可能在后，此时过早写动词就容易出错，这只是帮助理解语序差异的例子，不是论文报告的数值结论。

### 已有路线如何处理读或写，REINA 与哪条最接近？

已有路线大致分 3 类。第一类是固定策略，例如等待固定词数再开始的 wait-k，实现简单但音频帧与词频不匹配时次优，原文明确指出输入音频帧采样率与输出词频之间的不匹配是其系统性缺陷。第二类是把策略 baked 进架构，例如单调注意力与 Transducer，表达力强但训练昂贵且数值不稳定，论文称自己的前期尝试也验证了这一点，因此转向显式解耦路线。第 3 类是显式解耦策略，即在冻结或复用离线模型基础上另训练一个轻量策略模块，强化学习与 DiG-SST 都属此类。

DiG-SST 用部分输入与完整输入下输出分布的散度训练策略，高效但没有利用真实标签计算散度。REINA 与 DiG-SST 最接近，同样冻结基座、另训策略、同样比较部分与完整输入，但改用基于真实下一词的对数概率差估计信息增益，并加入单调与 L2 正则，分工上是基座负责翻译质量、策略只负责读或写时机，组合原因是避免重训大模型而只学何时等待。

论文还提到用大模型生成对齐数据再直接训练流模型的做法，这类做法受教师质量限制，与本文显式策略训练不在同一监督条件下，不宜直接当同条件胜负，公平比较时必须区分教师蒸馏与策略学习两条路线。

### 每个解码步要回答什么问题，理想答案如何定义？

每个解码步的问题是：在已听到 t 帧音频与已写出 n 个词的条件下，下一个动作是读入下一音频块还是写出第 n 加 1 个词。读的代价是延迟增加，收益是可能获得决定下一个词的关键信息；写的收益是延迟降低，风险是上下文不足导致错译。理想答案被定义为信息增益是否超过阈值，超过则读，否则写，调阈值就得到不同的延迟质量折中。白话说，只有多听能带来新信息才值得等。

**读动作 × 写动作：** 读动作指等待下一个 0.25s 音频块以获得更多声学上下文，分工是降低不确定性；写动作指基于已有音频与已生成词生成下一个目标词，分工是推进输出降低延迟。搭配理由是每个解码步只能二选一，组合意义在于用阈值比较策略值形成完整的流式搜索路径。

该定义依赖完整音频与完整参考译文，因此只能用于训练时构造监督，不能直接用于推理。

### REINAStream 整体由哪些部件组成，样本走一遍是什么顺序？

系统名为 REINAStream，基座是非流式端到端模型加一个小策略网络。基座包括声学编码器、文本解码器，训练时另有一个文本编码器用于机器翻译辅助任务。声学编码器采用 Whisper Medium 且训练时不冻结，解码器是随机初始化的 Transformer，用 Mistral 7B 的通用多语言分词器但自学嵌入，并加语言标识控制目标语言，声学编码器输出上加类似 Time2Vec 的学习位置编码。训练时文本编码器采用随机初始化可训练的 T5 编码器，源文本经其编码后由解码器交叉注意生成目标文本。

推理时声学编码器加解码器共 408M 参数，训练时再加文本编码器共 445M，策略网络另有 6M 参数。沿一个样本走一遍：源音频进声学编码器得到隐状态，解码器交叉注意该隐状态并在教师强制下预测目标词；若是机器翻译样本，则源文本进 T5 文本编码器再由同一解码器预测；流式阶段则同一音频走完整与截断两遍得到两组交叉熵，再由截断路解码器隐状态经策略网络得到读概率。
下面先看训练流程总图，理解 3 阶段从左到右如何衔接，再进入公式细节。

> **看图路径：** 1. 先从左到右看非流式、截断、流式三个大框的输入如何从完整变为截断再变为双路；2. 再看流式框中完整与截断两路解码器如何分别产生 CE Loss X 与 CE Loss Y；3. 接着看截断路解码器隐状态如何进入策略网络再经线性层得到预测 p；4. 最后看 BN(X-Y) 与 p 相乘的策略损失与单调性加 L2 损失如何汇合

[![原论文 Figure 1：Non-streaming and streaming training procedures for REINAStream.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/7aabc82431ea/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/7aabc82431ea/figure-1.png)

*论文图 1。原论文 Figure 1：“Non-streaming and streaming training procedures for REINAStream.”。*

该图左侧非流式训练框显示源音频走声学编码器、源文本走机器翻译编码器，两路汇入同一解码器并以教师强制计算交叉熵损失；中间截断训练框把源音频换成截断音频但结构不变；右侧流式训练框同时送入完整与截断音频得到两路交叉熵，截断路解码器隐状态送入由 Transformer 编码器加线性层组成的策略网络，输出与归一化概率差相乘形成策略损失，另有单调性与 L2 损失分支。图中解码器与编码器上的星号表示该阶段冻结，这与正文第 3 阶段冻结其他参数只训策略网络一致。

### 信息增益如何从互信息算到可训练的损失？

先定义符号。记 a 为完整音频，长度为 T，at 为前 t 帧截断音频，S 为参考译文序列，Sn 为前 n 个已写词，sn 加 1 为下一个真实词。信息增益 F 定义为等待剩余音频后关于 sn 加 1 的信息增加量，即完整条件互信息减去截断条件互信息。

\[F(a, S, n, t) = I(sn+1; aT , Sn) −I(sn+1; at, Sn)\]

该式是理想判据的起点，阈值为 alpha，F 大于 alpha 则读。接着用熵恒等式改写，两个边缘熵相消，剩下截断条件熵减完整条件熵，进一步写成对数概率差的期望。

\[F(a, S, n, t) = I(sn+1; aT , Sn) −I(sn+1; at, Sn) = H(sn+1) −H(sn+1|aT , Sn) = H(sn+1|at, Sn) −H(sn+1|aT , Sn) = E [log p(sn+1|aT , Sn) −log p(sn+1|at, Sn)]\]

原文用基座 S2TT 模型的对数概率估计真实对数概率，记完整与截断下的估计为 log pT 与 log pt，它们恰为两路交叉熵损失的负值。推理时无参考答案，故训练参数为 theta 的启发值 q 来估计增益，读当且仅当 q 大于 alpha。训练目标是最大化 q 与估计增益的协方差，经批内归一化使均值为零后，化简为最小化 q 与归一化概率差乘积的均值。符号 q 的定义为给定音频、参考、前 n 词与 t 时刻的函数。

\[θ = qθ(a, S, n, t|θ).\]

最终策略损失是对每个目标位置求平均，单调损失要求 qn 不小于此前最大值减 epsilon，L2 损失防止 q 爆炸到无穷，总损失为三者之和，其中 L2 权重 lambda 取 0.05 且论文称最终性能对 lambda 不敏感，单调容差 epsilon 取 0.5。组合机制见下段。

**互信息增益 × 策略网络：** 互信息增益负责定义理想判据，即等待剩余音频后关于下一个词的信息增加多少；策略网络负责在推理时无参考译文条件下估计该增益，分工是离线可计算的监督信号与在线可执行的启发值。搭配原因是直接计算增益需要完整答案，组合意义在于用协方差最大化把不可用的理想量蒸馏为可用的标量预测。

**策略损失 × 单调性正则：** 策略损失负责让策略预测与归一化后的对数概率差同向变化，分工是学到何时等待更有利；单调性正则负责让同一句内策略值近似非递减，分工是对齐推理时读后不再写新词的提交行为。搭配原因是纯相关目标可能在相邻词之间抖动，组合意义在于在低延迟区形成更明确的读或写分界。

### 三阶段各更新谁、冻结谁、用什么数据混合？

第一阶段学非流式 S2TT，每批混合 3 种任务：有音频与源转写的做语音识别，有源转写与目标转写的做神经机器翻译，有音频与目标转写的做语音翻译，三项交叉熵相加。数据混合比例为 MUST-C 占 1、CVSS 占 1、英到其他方向 MLS 占 2，其他方向 MLS、CCMatrix 与 Mosel 各占 4，CCMatrix 每语言对取 10M 共 60M。执行顺序上先完成该多任务非流式训练，再进入截断适配，最后才冻结基座训练策略，顺序不可颠倒。

第二阶段用同样损失与架构微调，但 20% 为完整音频、80% 为随机截断音频，目的是让截断条件对数概率估计更准，为策略损失提供可靠监督。第 3 阶段冻结除策略网络外所有参数，只在 S2TT 样本上最小化 REINA 损失。策略网络是 2 层 Transformer，嵌入 512 维、4 头、前馈 4 倍，训练用逆平方根调度加 5k 步热身，20 轮在 12 小时内完成，数据上调 MUST-C 与 CVSS 到 2、双向 MLS 到 6。

推理用流式束搜索，音频切成 0.25s 块，束大小 3、无长度惩罚、耐心因子 3，每轮对所有束跑策略，小于阈值则读并将该假设封存计零分，当读束超过束大小乘耐心因子或全部束同时读则结束本轮，到音频尾则停用策略直走到结束符。阈值靠试错扫描以画出前沿。
下表把原文明确给出的训练预算与配置放在一起，便于复现时先对齐硬件与批量，再谈策略。

表前问题是 3 阶段的计算代价与优化条件是否一致，公平条件是只用原文连续句子中的预算数字，指标方向是耗时越短、批量越大通常越省但不直接等于质量更好。

| 阶段 | 耗时 | 硬件 | 学习率与裁剪 | 批量与轮数 |
| --- | --- | --- | --- | --- |
| 第一阶段非流式 | 5 days | 24 A100-80G GPUs | 10−4，裁剪 10.0 | 768 |
| 第二阶段截断适配 | 2 days | 24 A100-80G GPUs | 10−4，裁剪 10.0 | 768 |
| 第 3 阶段策略 | under 12 hours | 未报告 | 逆平方根调度 5k 热身 | 20 epochs |

表后解释是主要代价在前 2 阶段共 7 天 24 卡，策略阶段不到 12 小时完成 20 轮，说明 REINA 的额外训练很轻。

代价是第二阶段仍需全模型微调且截断比例固定为 20% 完整加 80% 截断，复现时若跳过该阶段则策略监督失准，下节消融有直接证据。权重衰减原文为 10−4，梯度裁剪为 10.0，解码器标签平滑与丢弃率均为 0.1，复现时应先对齐该 3 阶段顺序与冻结范围再调阈值。

### 在哪些数据与指标上测，与谁比才算公平？

评估方向分英到法西德在 MUST-C，德法西到英在 CVSS-C。CVSS-C 平均语句约 4.9 秒，偏短，贴近对话场景，但论文称该集在同传文献中不常用，可比工作少。基线在 MUST-C 选 DiG-SST 与 DiSeg 加 EDAtt，在 CVSS-C 选 StreamSpeech 与 SimulS2S-LLM，均用原论文自报结果。指标用 SacreBLEU 计 BLEU，自实现平均延迟与长度自适应平均延迟。论文指出只看延迟 BLEU 曲线会混淆基座强弱，因此提出归一化流效率 NoSE，即在左右界 x 到 y 内延迟 BLEU 折线下面积除以非流式 BLEU 水平线下面积，界取所有对比模型都有定义的最宽公共区间，不同语言对界不同，未来用该指标需报告所用界。

**平均延迟 × 归一化流效率：** 平均延迟负责度量译文词相对源语音滞后多少秒，分工是刻画延迟轴；归一化流效率负责把延迟与 BLEU 曲线下面积除以非流式 BLEU 水平线下面积，分工是剥离基座翻译能力差异。搭配原因是只看曲线高低会把基座强误认为策略强，组合意义在于更公平地比较策略本身在整个前沿上的保持率。

复现要点是束 3、块 0.25s、耐心 3、无长度惩罚，阈值扫描靠试错。资源状态方面，本次未发现来源绑定且完成验证的资源，不得声称代码模型数据已公开。

### 主结果在低延迟区赢在哪里，高延迟区输在哪里？

总体报告是 REINA 在 2 数据集所有语言分支的低延迟区优于对比方法，且只在 MUST-C 上训策略的模型同样占优，支持增益来自目标改进而非单纯策略数据量扩大。NoSE 方面，MUST-C-only 模型比 DiG-SST 高 3.0%，比 DiSeg 高 8.9%，这是原文直接报告的相对表述。单调消融例子称在约 35 BLEU 处平均延迟从 1.95 降到 1.57，相对改善 19%，支持单调约束在激进流设置下有用。反例必须保留：德语高延迟点 DiG-SST 略好，EDAtt 在部分高延迟点 BLEU 更高，且自复现的 DiG-SST 实现表现最差，论文称可能遗漏复现细节，因此该自复现基线不能当作原方法的真实水平。

CVSS-C 上 StreamSpeech 只报 ASR-BLEU 而本文报文本 BLEU，原文明确称无法公平比较，只是因其强而列出，且 SimulS2S-LLM 未发表离线 BLEU 故未纳入 NoSE，比较时必须说明该口径差异。
下图是 MUST-C 三方向的前沿，读图时先看横纵轴再看低延迟段相对位置，不要把末端高延迟点推广为全程。

> **看图路径：** 1. 先确认三列分别为 En 到 De、Es、Fr，横轴为平均延迟秒，纵轴为 BLEU；2. 再对比每列中蓝色 REINA 与红色 MUST-C-only 在低延迟段相对绿色 DiG-SST 的位置；3. 最后看顶部虚线表示的非流式水平线与橙色自复现曲线的明显落差

[![原论文 Figure 2：Average Lagging (AL) vs.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/7aabc82431ea/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/7aabc82431ea/figure-2.png)

*论文图 2。原论文 Figure 2：“Average Lagging (AL) vs. BLEU score on MUST-C. Horizontal lines represent non-streaming performance.”。*

该图三面板横轴均为平均延迟秒，纵轴为 BLEU，顶部虚线为各自非流式上限。可见蓝色 REINA 与红色 MUST-C-only 在左侧低延迟段多位于绿色 DiG-SST 之上，尤其西语与法语中段差距明显；德语右端高延迟处绿色略有反超，与正文反例一致；橙色自复现曲线整体偏低，支持作者称复现缺细节的判断。
下表把原文连续句子中的相对收益与消融数字放在一起，避免把不同指标差值混入模型列。

表前问题是在控制基座与数据后策略本身带来多少可运行收益，公平条件是只用可部署的阈值扫描点而非事后最优，指标方向是 NoSE 越高越好、延迟越低越好。

| 对比 | 基线对象 | 本方法 | 差距 | 适用条件 |
| --- | --- | --- | --- | --- |
| NoSE 相对提升 | Dig-SST | REINA MUST-C-only | 3.0% higher | MUST-C |
| NoSE 相对提升 | DiSeg | REINA MUST-C-only | 8.9% higher | MUST-C |
| 低延迟消融 | 1.95 | 1.57 | 19% improvement | about 35 BLEU |
| 阶段划分 | Learn non-streaming S2TT | Learn a streaming policy | 3 stages | 全流程 |

表后解释是主要收益在归一化后仍保持 3% 到近 9% 的相对优势，且单调约束在约 35 分附近省约 0.38 秒。

代价是该 19% 只在该操作点成立，不等于全前沿每点都成立，德语高延迟与 EDAtt 局部最优仍是未胜出项，解读前沿时应分段看低延迟与高延迟。

### 拿掉单调约束与截断适配会发生什么？

单调消融比较 REINA 与无单调版本，论文称优势集中在低延迟区，高延迟区差异缩小，机制解释是单调迫使策略在增益抖动时做出明确提交，而非来回横跳。截断消融比较有无第二阶段，跳过截断训练导致策略性能下降，支持 REINA 的互信息形式依赖准确的截断条件概率估计。需注意原文未给出去掉 L2 后的数值，L2 的作用是防止预测爆炸，这属于已验证的训练稳定性安排而非可量化的质量消融。
下图是西到英 CVSS-C 的消融曲线，重点看左侧分叉而非右侧汇合。

> **看图路径：** 1. 先确认横轴为平均延迟秒，纵轴为 BLEU，顶部虚线为非流式上限；2. 再看深蓝 REINA 与棕色无单调性曲线在左侧低延迟段的分叉；3. 最后看下方浅蓝 StreamSpeech 曲线整体远低于上方两条曲线的纵轴位置

[![原论文 Figure 3：AL/BLEU curve on Es→En split of the CVSS-C dataset. We report ASR-BLEU only for StreamSpeech.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/7aabc82431ea/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/7aabc82431ea/figure-3.png)

*论文图 3。原论文 Figure 3：“AL/BLEU curve on Es→En split of the CVSS-C dataset. We report ASR-BLEU only for StreamSpeech.”。*

该图横轴为平均延迟秒，纵轴为 BLEU，顶部虚线为非流式上限。深蓝完整 REINA 与棕色无单调版本在左侧低延迟段分开，棕色在极低延迟下多一个更低延迟点但波动更大，深蓝更早爬升到高 BLEU；两者在 3 秒后基本重合逼近上限；下方浅蓝 StreamSpeech 曲线纵轴低十余分，但因其为 ASR-BLEU 而上方为文本 BLEU，纵向差距不能直接判为策略差距。

### 哪些边界没有测，哪些结论不能推广？

未评测边界包括仅覆盖英法西德六向，低资源语言未做；CVSS-C 可比工作少，MUST-C-only 与全数据模型的 NoSE 界不同，跨表比较需先对齐界。未测量项包括策略网络带来的每步推理开销、实际端到端帧率与误判率，总体前沿趋势不等于每步都省。相关性不等于因果，NoSE 高只显示流保持率高，不证明延迟本身降低的因果机制已分离。原文表头与算术若冲突应以原文界为准，本文 NoSE 界按语言对分别报告，不自行统一。德语高延迟反例与 EDAtt 局部最优表明阈值选择仍需试错，不存在一组阈值全语言最优。

### 要复现应先做什么，需要补哪项验证？

先复现非流式基座与截断微调，固定分词、语言标识、束 3、块 0.25s、耐心 3、无长度惩罚，再冻结基座只训策略。关键超参数是 lambda 为 0.05、epsilon 为 0.5、策略为 2 层 512 维 4 头、优化为逆平方根加 5k 热身、截断比为 20% 完整加 80% 截断。监督来源是完整与截断两路交叉熵之差经批归一化后与策略预测的乘积，梯度只进策略网络。还需补的验证是报告所用 NoSE 左右界、阈值扫描点数、多次种子的方差，以及策略在长语音与噪声下的延迟分布，而非仅均值曲线。数据方面按表 1 的 MLS、MUST-C、CVSS-C、Mosel 加 CCMatrix 与自译 MLS 组织，划分与小时数以原文表为准，本文因原表选择不可用未逐格复刻小时数，不编造划分口径。

### 何时值得尝试 REINA，何时不必？

当已有较强非流式 S2TT 且想以不到 12 小时的轻量训练获得流能力时值得尝试，尤其目标是低延迟对话场景且能接受阈值试错时。当基座本身较弱或目标语言语序高度依赖长上下文且延迟预算宽松时，不必强求激进流，高延迟点可能被其他方法反超。常见误解是把 NoSE 高当成翻译绝对强，实际上它是相对基座的保持率，基座弱而保持率高仍可能绝对 BLEU 低；另一误解是把自复现 DiG-SST 差当成原方法差，原文已提示复现可能缺细节。收束动作是先对齐基座 BLEU 与延迟定义，再在公共界内比较 NoSE，最后用可运行阈值而非事后最优点报告延迟质量对。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 aaai-2026 论文汇总](/posts/conference-aaai-2026/)
