---
title: "Efficient and Adaptive Simultaneous Speech Translation with Fully Unidirectional Architecture"
date: 2026-09-11
draft: false
description: "针对同声传译需在部分语音下增量输出的问题，EASiST 用多延迟语义分块构造单调交错数据、全单向语音编码器加 LLM 与轻量读写策略头经三阶段训练实现自适应低重算推理，在 MuST-C 与 Europarl-ST 英德英西上取得更好的延迟质量权衡，但自适应增益依赖分块对齐质量与阈值调节。"
tags: ["多任务学习", "大语言模型", "高效推理", "流式处理", "语音翻译"]
categories: ["aaai-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:aaai:2026:conference-paper-id:40330"
paper_digest_source_kind: conference
paper_digest_conference_id: "aaai-2026"
paper_digest_conference_record_url: "https://ojs.aaai.org/index.php/AAAI/article/view/40330"
paper_digest_conference_pdf_url: "https://ojs.aaai.org/index.php/AAAI/article/view/40330/44291"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "1ab07a377e16bb3fceb784881e1869a8918fae30efeb853234d7b7d2fe7cae48"
paper_digest_api_reader_plan_sha256: "869b98d5bad4f03bd8b8ea9473a6e688e48b5ec202d3ebe75d25a03543783796"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2de974bfeb72673aa690f7ec6cacc245f5bcd2296eadf60663a711c208f90bba"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 5
paper_digest_api_reader_structured_artifacts_sha256: "ffea88afdfdc1c129a5b904d7f02ba1408268105747d6fcd734792baee3bb8da"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "bc2959ffab4087e3a051bf65765beb2dad0a9c4c7d3c94f4cedf57929ddd3094"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "b6485790fa3d103b1e0843a06a3341ebb8ae97ad25b461c67f3ba8b1fe0d17a6"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.multitask","label":"多任务学习"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"setting","id":"setting.streaming","label":"流式处理"},{"facet":"task","id":"task.speech-translation","label":"语音翻译"}]
paper_digest_primary_task: "语音翻译"
paper_digest_primary_method: "多任务学习"
paper_digest_score: 8.2
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 边听边译不重算：全单向架构如何让大模型学会何时读、何时写

> 英文题目：*Efficient and Adaptive Simultaneous Speech Translation with Fully Unidirectional Architecture*

> 会议身份：`conference:aaai:2026:conference-paper-id:40330`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40330) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40330/44291)

标签：#多任务学习 #大语言模型 #高效推理 #流式处理 #语音翻译

评分：**8.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究

## 👥 作者与机构

- Biao Fu：机构信息未能从会议 PDF 纯文本可靠映射
- Donglei Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Minpeng Liao：机构信息未能从会议 PDF 纯文本可靠映射
- Chengxi Li：机构信息未能从会议 PDF 纯文本可靠映射
- Xinjie Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yidong Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Kai Fan：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaodong Shi：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

同步语音翻译以流式语音为输入增量生成译文，需在仅见语音前缀时决策读写以平衡翻译质量与延迟。在多延迟数据构造中，EASiST先用大语言模型在三档延迟下将离线三元组切分为语义块并经强制对齐得到语音块，构造单调交错训练样本。接着将语音块与译文块交错排列并插入读写标记，以完全单向的流式编码器与大语言模型建模增量生成，语音块输出直接进入下一步翻译。然后经三阶段训练依次学习交错格式、语音文本对齐与联合翻译加策略，轻量策略头依据隐状态自适应预测读写并复用双侧缓存。与依赖双向编码器重复编码或固定读写策略的方法不同，该设计避免历史反复重算并实现延迟自适应，具有降低计算量的实际意义。在单卡A100硬件推理开销评测设置下，EASiST的推理速度指标为28.95 ms/token，低于wait-k基线的38.51 ms/token。在MuST-C英德低延迟与Europarl-ST英西中低延迟任务中分别取得1个以上和3个以上BLEU增益，验证跨域鲁棒性。该结论适用边界受限于英德与英西朗读式议会语音，尚未验证长语音无界流与噪声场景，训练成本共33小时且流式延迟接近离线速度。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/biaofuxmu/EASiST> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么不能等听完再翻？

这篇论文研究的任务是同时语音翻译。输入是一段随时间不断到来的英文语音，输出是德文或西班牙文译文，而且输出必须在语音还没有结束时就开始产生。目标读者可以这样理解学习依赖：先要明白离线语音翻译是等整句语音到齐再翻译，延迟高但信息完整；同时翻译则要求在只听到前缀时就决定是继续听还是先输出，这就引入质量与延迟的权衡。论文要解决的矛盾是，大语言模型在离线翻译上很强，但直接搬到流式场景会遇到两个困难。

第一，如果语音编码器是双向的，每次新语音到来都要对历史重新编码，计算浪费大。第二，如果读写策略是固定的，例如每固定时长输出一个词，就无法根据语义完整性自适应等待。论文必须保留的信息包括任务定义、端到端与级联的区别、自适应与固定策略的区别，以及后续方法为何要同时改编码器、数据格式和策略头。输出是 1 篇能让研究生复述数据构造、3 阶段训练和推理决策的解读，而不是对效果的笼统赞美。

### 初学者易混淆的概念如何区分？

初学者常把语音识别加机器翻译的级联系统与端到端同时语音翻译混淆。级联是先把流式语音转写成文字再把文字送入大语言模型，误差会从识别传导到翻译且历史提示反复编码。端到端是直接把语音表示送入大语言模型生成译文，避免中间文本瓶颈。另一个易混点是固定等待 k 与自适应读写的区别，前者按块数或时间决定输出，后者按语义完整性决定输出，EASiST 属于后者。还有人把普通延迟与计算感知延迟混为一谈，前者只计语义等待，后者还计模型计算，前者好看不等于部署快。最后单调性分数越低表示语序越适合流式，而 CometKiwi 越高表示质量越好，二者方向相反不可混读。

### 同输入同目标下已有路线如何取舍？

在相同输入输出和相同流式运行阶段下，传统同时语音翻译分为固定策略和自适应策略。固定策略按预定规则读写，例如每固定长度语音段输出一个目标词，或在检测到词边界后执行等待 k 个词的策略。自适应策略根据上下文决定动作，证据中列举了数据驱动学习、信息传输理论、基于注意力的对齐、发散引导决策和 transducer 架构等做法。

另一条路线是基于大语言模型的同时机器翻译，常作为级联系统的翻译模块，用固定等待 k 不断更新提示词，或接入传统自适应模型做策略模块，但反复更新提示会导致键值缓存失效而重算。端到端大模型同时语音翻译已有两种代表。FASST 引入注意力掩码模拟流式以复用大语言模型缓存，但仍用固定策略且掩码训练不充分可能影响翻译。

InfiniSST 把同时翻译重构为多轮对话以支持增量输入输出和缓存复用，但依赖词对齐工具从离线数据构造数据，可能带来领域失配和对齐误差。EASiST 与它们同输入同目标，但监督来源和运行机制不同：它不用词对齐工具，而用大语言模型做多延迟语义分块加 Montreal Forced Aligner 对齐语音；它不用固定策略，而用轻量策略头；它把编码器和大语言模型都做成单向以实现双侧缓存复用。

### 为什么不用词对齐工具切分数据？

词对齐工具是在离线平行句上学习词与词对应，再按对应切块，这种做法的监督来自整句上下文，包含为等句尾信息而做的长距离调序，与流式前缀可用的信息不一致，且工具误差会直接变成块边界误差。EASiST 改用大语言模型按延迟要求做语义切分并同时生成译文，再用强制对齐把源块映射到语音时间轴，监督来源是为流式设计的单调块而非离线整句。论文用单调性分数与 CometKiwi 验证构造数据比离线数据单调性显著更好且质量相当或更好，这支持构造数据更适合同时训练的判断。但这不证明大语言模型切分在所有领域都可靠，域外泛化仍需在目标域抽检切分合理性。

### 一个样本如何从语音走到译文？

沿论文例子走一遍有助于建立全链路概念。输入语音对应转写是 We saw him last night，离线德文翻译是 Wir haben ihn letzte Nacht gesehen，其中动词 gesehen 被放在句尾，这对流式输出不友好，因为听到前半段语音时还无法确定句尾动词。EASiST 的数据构造会把转写切成语义独立块，例如 We saw him 与 last night，同时生成单调对应的译文块 Wir sahen ihn 与 letzte Nacht，使每个语音前缀都有可输出的译文前缀。随后语音用强制对齐工具按转写块切成对应语音块，得到块级对齐的同时语音翻译样本。

模型训练时把这些块排成语音块、读结束符、译文块、写结束符交替出现的序列，让模型学会读到读结束符就写译文，写到写结束符就继续读。推理时每收到一个语音块，策略头根据隐状态判断继续读还是开始写，写时自回归生成译文直到写结束符。这种走法把全局语序重排问题转化为块内局部单调问题，是后续所有训练目标的前提。

### 整体框架包含哪三条流水线？

EASiST 的全景可以分成底部数据构造与顶部 3 阶段训练两大部分，推理则是训练顺序的在线复现。底部负责把离线语音翻译三元组变成可用于流式训练的交错样本，顶部负责分阶段教会模型格式、模态对齐和策略。流式编码器负责增量编码语音，适配器负责压缩并映射到大语言模型空间，大语言模型负责按交错格式生成译文，策略头负责在每个决策点输出读写概率。下图给出了 3 阶段的冻结与更新安排以及数据构造的输入输出关系，阅读时应先区分可训练与冻结模块，再看数据如何从离线流向同时样本。

下图概述了本文提出的 EASiST 框架，底部为从离线语料生成单调交错数据的数据构造流水线，顶部为 3 阶段训练策略，阅读时请按从数据到模型再到策略的顺序跟踪箭头。

> **看图路径：** 1. 先沿底部数据构造箭头看离线三元组如何变成语义块；2. 再看顶部三阶段中火焰与雪花标记分别表示可训练与冻结；3. 对照图例中语音符号、源词符号、目标词符号与读写标记的颜色形状；4. 跟踪右侧策略头输出的 0 与 1 序列与语音块边界的对应关系

[![原论文 Figure 1：Overview of the proposed EASiST framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/89dcd1b6d6f2/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/89dcd1b6d6f2/figure-1.png)

*论文图 1。原论文 Figure 1：“Overview of the proposed EASiST framework.”。*

该图显示底部左侧为离线语音、转写和翻译，中间经大语言模型语义分块与强制对齐后得到右侧的同时语音翻译数据与同时机器翻译数据，顶部左侧第一阶段同时训练离线机器翻译与交错机器翻译任务，中间第二阶段用离线语音翻译任务训练编码器与适配器而冻结大语言模型，右侧第 3 阶段在冻结大语言模型下联合优化同时语音翻译任务与策略决策任务，策略头输出的读写标签与语音块边界对齐，这种安排使训练与推理的读写顺序保持一致，也为后续缓存复用奠定结构基础。

### 编码器、适配器与策略头各自算什么？

语音编码器采用 wav2vec-S，它是对 wav2vec 2.0 为流式改造的版本。原文指出原始 wav2vec 2.0 是双向设计且依赖未来上下文，不复用历史键值缓存，每次增量输入都要全量重算。wav2vec-S 的改动包括用层归一化代替组归一化，用绝对正弦位置编码代替基于卷积的相对编码，用块内自注意力代替双向自注意力，从而支持分块增量处理。

适配器先用两个 1 维卷积层压缩编码器输出，每个卷积核大小为 5 步长为 2，两层共把长度压缩为原来的 1/4，且卷积在每个语音块内独立应用以保持单向性，再用线性层投影到大语言模型表示空间。大语言模型在推理时接收部分语音表示并自回归生成译文，训练时则看到交错序列并学习在读结束符后写、在写结束符后读。

**同时语音翻译 × 交错生成：** 同时语音翻译的分工是在只听到语音前缀时就要开始输出译文，交错生成的分工是把语音块和译文块按顺序排成一个序列并用显式读写标记分隔，二者搭配的理由是把何时读、何时写变成序列中可学习的标记预测，组合意义是让大语言模型可以直接按训练时的顺序在推理时复现读一块写一块的行为。

**流式编码器 × 键值缓存复用：** 流式编码器的分工是只用过去和当前语音块计算表示而不看未来，键值缓存复用的分工是把已算过的注意力键值存下来供后续步骤直接使用，二者搭配的理由是只有单向计算历史才不会失效，组合意义是每来一个新语音块只需增量计算，避免对整段语音反复重编码。

策略头是与大语言模型词预测层并行的一个线性层，根据最后一层隐状态计算读写概率，用于自适应决策。符号含义是隐状态为当前步的大语言模型表示，可学习矩阵把该表示映射为两类 logits 再经 softmax 得到概率，计算目标是在每个语音块末尾与译文 token 位置给出读或写的判断。

\[pt = softmax(Wpht),\]

该公式只说明策略头的计算形式，不包含阈值比较，阈值是推理阶段的超参数。原文明确用该概率与阈值比较决定停止读取并追加读结束符，还是继续读取下一个语音块。

**策略头 × 读写阈值：** 策略头的分工是根据大语言模型最后一层隐状态输出继续读还是开始写的二分类概率，读写阈值的分工是在推理时把该概率与预设数值比较以决定动作，二者搭配的理由是训练学到的是概率而推理需要离散决策，组合意义是用一个可调阈值在同一模型上实现不同延迟质量档位。

### 三阶段训练如何分步教会模型？

第一阶段是同时机器翻译预训练，目标是让大语言模型先在纯文本上学会交错源文目标文格式。给定交错序列，训练目标是自回归预测序列中每个 token，条件包括提示词与此前所有 token，损失对源文、目标文和特殊标记都计算。同时为了保持整句翻译能力，还加入离线机器翻译目标，给定源句预测目标句。两项损失相加构成第一阶段损失，此时对大语言模型做全参数微调。符号中源块目标块与特殊标记的排列顺序就是监督来源，梯度路径只更新大语言模型。

\[log pθ(ˆyt|o, ˆy≤t−1), LSimulMT = −\]

**多延迟数据构造 × 单调对齐：** 多延迟数据构造的分工是用大语言模型把同一转写按低中高 3 种延迟要求切成不同粒度的语义块并生成对应译文块，单调对齐的分工是要求第 i 个语音块只对应第 i 个译文块且顺序不交叉，二者搭配的理由是离线语料本身存在全局语序调换不适合流式训练，组合意义是得到语音前缀与译文前缀语义对应、可直接用于交错训练的样本。

第二阶段是语音文本模态对齐，用离线语音翻译任务训练。给定完整语音与目标译文，损失是给定语音与此前译文预测当前译文。此时冻结大语言模型，只训练流式编码器与适配器，使语音表示对齐到大语言模型的文本空间而不破坏已学到的翻译能力。

\[LStage-II = LST = − log pϕ(yt|s\]

第 3 阶段是多任务监督微调，联合优化 3 个目标。同时语音翻译任务的损失是在前 i 个语音块与前 i 减 1 个译文块条件下预测第 i 个译文块，实际还对特殊标记计算损失。策略决策任务是二分类交叉熵，标签来自对齐数据的块边界：每个语音块被切成 n 个流式块，前 n 减 1 个块的末位置标为读，第 n 个块末位置标为写，对应译文块内所有 token 也标为写，只在这些标注位置计算损失，其他语音内部位置不计入。离线语音翻译损失作为正则保留以维持翻译精度。三者加权相加，策略损失权重设为 1，此时大语言模型冻结，只微调编码器、适配器与策略头。

\[Lpolicy = −\]

\[LStage-III = LSimulST + LST + λLpolicy\]

推理时每收到一个语音块就把其末位置隐状态送入策略头，若概率超过阈值则追加读结束符并自回归生成直到写结束符，否则继续读下一块。阈值越低越早输出，越高则等待更多语音。由于编码器与大语言模型均为单向，历史键值缓存可复用，避免冗余计算。

### 在什么数据、模型和指标下比较？

实验覆盖域内与域外 2 个条件。离线机器翻译与语音翻译训练用 MuST-C 第一版英德与英西训练集的三元组，同时机器翻译与同时语音翻译训练用本文多延迟切分构造的同时数据集。评估用 MuST-C 的 tst-COMMON 作为域内测试，另用 Europarl-ST 英德与英西测试集评估域外泛化。模型实现上流式编码器用微调后的 wav2vec-S-Large，主干大语言模型用 Llama-3-8B-Instruct，适配器为两层 1 维卷积加线性投影。训练批量大小为 128 并用余弦学习率与 AdamW，所有实验在 8 块英伟达 A100 80G 上各运行 1 次。

质量指标用区分大小写的去词化 SacreBLEU，延迟指标用 LAAL 及其计算感知版本 LAAL-CA，评估用贪心解码，EASiST 通过阈值在 0.1 到 0.6 之间调节延迟质量权衡。基线包括按相同离线系统实现并加不同策略的 wait-k、EDAtt、AlignAtt，以及用官方权重评估的 InfiniSST，离线系统本身由 wav2vec 2.0 编码器、卷积适配器与大语言模型组成并经同样前 2 阶段训练。比较公平性在于除 InfiniSST 外其余基线共享同一离线底座，硬件上计算感知延迟均在同一单卡 A100 机器上测得。

下表整理了 3 阶段的训练对象与原文报告的超参数，它回答了复现时每阶段更新谁、用多少数据量级的问题，阅读时应把可训练参数量与冻结安排结合起来看。

| 阶段 | 更新部件 | 训练轮数与批量 | 学习率与预热 | 可训练参数与数据规模 |
| --- | --- | --- | --- | --- |
| 第一阶段 | 大语言模型全参数 | 1 轮，微批量 16 | 学习率 1e-5，预热比 0.1 | 8.03B 参数 |
| 第二阶段 | 编码器加适配器 | 6 轮，微批量 4 | 学习率 2e-4，预热比 0.03 | 323M 参数 |
| 第 3 个阶段 | 编码器加适配器加策略头 | 1 轮，微批量 4 | 学习率 2e-5 | 323M 参数，英德 217K 条，英西 294K 条 |

上表显示第一阶段用较大学习参数量学习交错格式但只训 1 轮，第二阶段用 6 轮对齐模态，第 3 阶段只用 1 轮联合优化策略与翻译，这种递进安排使文本序列短的第一阶段承担大语言模型更新，从而节省总训练时间，数据规模两列的差异也提示英西构造样本多于英德，复现时不应混用。

### 主结果在何种延迟下领先，代价是什么？

主结果要回答的是在相同延迟下谁的 BLEU 更高，以及把计算开销计入后优势是否还存在。论文报告在 MuST-C 英德与英西上 EASiST 在各延迟段持平或领先基线，尤其在低延迟区延迟约 1 秒时领先超过 1 个 BLEU。在域外 Europarl-ST 上优势更明显，在中低延迟约 2 秒时英德领先超过 2 个 BLEU，英西领先超过 3 个 BLEU，这支持跨域鲁棒性的判断。计算感知评估下优势进一步拉大，原因是基线每步重算而 EASiST 可复用双侧缓存。原文还报告平均每生成 token 的计算时间为 EASiST 显著快于同时基线且接近离线系统。

下图为 4 组延迟质量曲线，横轴为普通延迟，纵轴为翻译质量，阅读时先看低延迟左侧再看高延迟右侧。

> **看图路径：** 1. 先确认横轴为延迟、纵轴为 BLEU 以及四幅子图对应的域内域外语言对；2. 再比较同一横轴位置下红色 EASiST 曲线与其他四条基线的高低；3. 观察低延迟左侧区间各曲线间距是否大于高延迟右侧

[![原论文 Figure 2：The translation quality (BLEU) against the latency metric (LAAL) on both in-domain (MuST-C…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/89dcd1b6d6f2/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/89dcd1b6d6f2/figure-2.png)

*论文图 2。原论文 Figure 2：“The translation quality (BLEU) against the latency metric (LAAL) on both in-domain (MuST-C En→De/Es) and out-of-domain (Europarl-ST En→De/Es) test sets.”。*

从可见内容看，在最左侧低延迟区间红色 EASiST 点位普遍高于黄色 wait-k 与其他曲线，随着延迟增大各曲线差距收窄但 EASiST 仍保持在上包络附近，域外两幅子图的红色曲线在中段的领先幅度大于域内，这与正文报告的域外增益更大的描述一致，但像素无法精确读出每点数值，具体数值应以正文文字报告为准。

下图把横轴换成计算感知延迟，比较问题是理论等待相同的系统在计入计算后谁更可用。

> **看图路径：** 1. 先确认横轴已变为计算感知延迟再看纵轴仍为 BLEU；2. 比较 EASiST 曲线在左侧低耗时区是否仍保持在最上方；3. 观察基线曲线向右平移的幅度是否大于 EASiST

[![原论文 Figure 3：The translation quality (BLEU) against the computational-aware latency metric (LAAL-CA) on both…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/89dcd1b6d6f2/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/89dcd1b6d6f2/figure-3.png)

*论文图 3。原论文 Figure 3：“The translation quality (BLEU) against the computational-aware latency metric (LAAL-CA) on both in-domain (MuST-C En→De/Es) and out-of-domain (Europarl-ST En→De/Es) test sets.”。*

从可见内容看，计入计算后基线曲线整体右移更明显，而红色 EASiST 曲线仍在左侧保持较高 BLEU，说明其单向缓存设计减少了推理开销，但这不意味着每一步都更快，总体趋势不等于每个阈值档位都同等领先。

**计算感知延迟 × 普通延迟：** 普通延迟的分工是只衡量为了等语义信息而必须等待的语音时间，计算感知延迟的分工是再把模型实际计算耗时计入延迟，二者搭配的理由是有些方法理论等待短但每步重算导致实际变慢，组合意义是能区分算法等待与工程开销，更真实地比较流式系统的可部署性。

下表把推理速度与可调阈值等可运行条件放在一起，它回答了部署时如何选档位的问题。

| 条件 | 指标 | 本方法数值 | 对照系统数值 | 适用说明 |
| --- | --- | --- | --- | --- |
| 单卡推理 | 每 token 耗时 | 28.95 ms/token | 离线系统 23.25 ms/token | EASiST 接近离线速度 |
| 延迟调节 | 读写阈值档位 | τ 从 0.1 到 0.6 | 策略权重 λ 为 1 | 阈值越低输出越早 |
| 数据规模 | 构造样本量 | 英德 217K 条，英西 294K 条 | 离线三元组为源 | 多延迟切分得到 |

上表的主要收益是 EASiST 的每 token 耗时显著低于同时基线且接近离线系统，代价是仍略高于离线系统且需要通过阈值权衡质量与延迟，未胜出项是部分高延迟点上基线可能追平，复现时应报告整条曲线而非单点最优。

### 拿掉策略损失与分阶段会发生什么？

消融要验证策略自适应与多阶段各自是否必要。去掉第 3 阶段策略损失后推理改用固定读固定块数再生成直到写结束符，结果是在低延迟区与完整模型相近，但随延迟增大性能明显下降，论文解释为训练用语义变长块而推理用固定块，块越大失配越严重。去掉第 3 阶段离线语音翻译正则后中高延迟下降 1 到 2 个 BLEU，说明保留离线目标有助于维持翻译精度。

去掉第二阶段并在第 3 阶段补训同样轮数后全延迟段都变差，去掉第一阶段并在第 3 阶段全参数微调 1 轮后也全段下降，同时去掉第一与第二阶段直接全参数微调 6 轮则下降最显著，这支持交错格式、模态对齐与策略难以单阶段同时学好的判断。训练成本上多阶段比单阶段与 2 阶段分别节省超过 75% 与 25% 时间，因为文本预训练序列远短于语音。

微调对象消融显示编码器加适配器默认设置在全延迟段最好，仅适配器也接近可作为资源受限替代，仅编码器因与冻结大语言模型表示失配而明显较差，更新大语言模型则因计算成本高且可能过拟合而下降。

下图比较了第 3 阶段微调不同模块组合的曲线，阅读时重点看默认组合是否在全段保持上方。

> **看图路径：** 1. 先确认图例中七种第三阶段微调组合的含义；2. 再跟踪红色编码器加适配器曲线在全延迟段的位置；3. 比较仅编码器曲线在高延迟段是否明显偏低

[![原论文 Figure 4：BLEU-LAAL curves on En→De tst-COMMON set when fine-tuning different modules during Stage III.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/89dcd1b6d6f2/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/89dcd1b6d6f2/figure-4.png)

*论文图 4。原论文 Figure 4：“BLEU-LAAL curves on En→De tst-COMMON set when fine-tuning different modules during Stage III.”。*

从可见内容看，红色编码器加适配器曲线在低延迟起点略高并在中高延迟保持上包络，橙色仅适配器曲线紧随其后，红色偏浅的仅编码器曲线在高延迟段相对偏低，含大语言模型更新的多条曲线居中但未超越默认组合，这支持轻量调优已足够的结论，但该图只覆盖英德 tst-COMMON，不能推广到其他语言对与域外集。

### 哪些边界没有被测到？

论文直接报告的局限首先是数据构造依赖大语言模型语义分块与强制对齐，若切分错误或对齐漂移会传导到策略标签，但未报告切分错误率与对齐失败比例。其次流利度评估用 DeepSeek-V3-0324 打分，显示阈值增大时英德与英西流利度稳步提升并接近离线，但自动打分不能代替人评，且未测量误译率与幻觉率。再次延迟指标覆盖 LAAL 与 LAAL-CA，但未报告实时因子、首包延迟与长语音无界输入下的内存增长，InfiniSST 所强调的无界语音场景在本文未做同条件对比。

最后所有实验各运行 1 次，未报告方差与显著性检验，阈值档位为事后可调，单点最优不能代替可部署的固定阈值收益。相关性不等于因果，域外增益可能来自数据单调性而非策略本身，仍待验证。

### 复现应先准备什么，按什么顺序跑？

复现先做数据与环境确认。代码当前可用，地址为论文给出的仓库链接，资源状态显示可用且状态码为 200，可据此认为当前已公开，但权重下载与可运行性仍需按仓库说明验证。先准备 MuST-C 第一版英德英西三元组与 Europarl-ST 测试集，按论文用大语言模型做 3 种延迟语义分块再用 Montreal Forced Aligner 对齐语音块，得到英德约 217K 与英西约 294K 样本。模型用微调后的 wav2vec-S-Large 与 Llama-3-8B-Instruct，两层卷积核 5 步长 2 加线性投影构成适配器。

按第一阶段全参数微调大语言模型 1 轮学习率 1e-5，第二阶段冻结大语言模型训练编码器与适配器 6 轮学习率 2e-4，第 3 阶段冻结大语言模型训练编码器适配器与策略头 1 轮学习率 2e-5 且策略权重为 1。推理用贪心解码，阈值从 0.1 到 0.6 扫描画出整条曲线，质量用 SacreBLEU 去词化区分大小写，延迟同时报告 LAAL 与 LAAL-CA，且计算感知延迟需在同一单卡 A100 上测得。还需补的验证包括对齐质量抽检、多次随机种子的方差、人评流利度与长语音稳定性。

### 何时值得尝试这种做法？

当任务要求在语音未结束时就输出且计算预算有限时，值得尝试全单向加交错标记加策略头的组合，因为它把等待决策变成可学习的块边界分类，并用缓存复用降低每步重算。当已有高质量离线语料但缺乏流式标注时，可借鉴多延迟语义分块构造单调样本，但需先抽检分块与对齐质量再训练策略。当资源受限时可先只调适配器，论文显示其接近默认组合的效果。

当追求高延迟下的最高质量时，不应默认自适应一定优于固定策略，应在自己的延迟区间复测整条曲线后再选阈值。总结是，EASiST 的贡献在于数据单调性、架构单向性与训练渐进性的配合，而非单一模块的胜出，复现与应用都应保留这种配合关系。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 aaai-2026 论文汇总](/posts/conference-aaai-2026/)
