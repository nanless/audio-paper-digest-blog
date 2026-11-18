---
title: "High-Throughput Serving of Nemotron 3.5 Transcribe with Regime-Aware Megakernels and Kernel Fusion"
date: 2026-11-17
draft: false
tags: [语音识别, 动态计算与早退, 实时处理, 高效推理]
categories: [论文速递]
description: "针对 Nemotron 3.5 Transcribe 转录服务中每轮工作量都在变的论文，论文用按 pass 大小在持久大内核与融合内核链之间切换的 regime-aware 设计，在保持词错误率基本不变下把 H100 SXM 峰值做到 4345 倍实时并把 400 毫秒预算内容许的并发数提高到 8 倍。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.20095"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "转录大模型上线时为什么越忙越要换内核"
paper_digest_original_title: "High-Throughput Serving of Nemotron 3.5 Transcribe with Regime-Aware Megakernels and Kernel Fusion"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.20095v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.20095v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.20095v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.dynamic-computation","label":"动态计算与早退"},{"facet":"setting","id":"setting.real-time","label":"实时处理"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"}]
paper_digest_primary_method: "动态计算与早退"
paper_digest_score: 7.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对 Nemotron 3.5 Transcribe 转录服务中每轮工作量都在变的论文，论文用按 pass 大小在持久大内核与融合内核链之间切换的 regime-aware 设计，在保持词错误率基本不变下把 H100 SXM 峰值做到 4345 倍实时并把 400 毫秒预算内容许的并发数提高到 8 倍。"
paper_digest_authors: [{"affiliations":["NVIDIA, Bangalore, India"],"name":"Aditya Chatterjee"},{"affiliations":["NVIDIA, Pune, India"],"name":"Sanjay Singh Chauhan"},{"affiliations":["NVIDIA, Pune, India"],"name":"Mayank Jain"},{"affiliations":["NVIDIA, Pune, India"],"name":"Arushi Dhingra"},{"affiliations":["NVIDIA, Pune, India"],"name":"Sahin Chowdhury"},{"affiliations":["NVIDIA, Pune, India"],"name":"Rahul Mittal"}]
paper_digest_abstract_sha256: "b482ea061e9751a2b306d79f74c90adc0248d62ffe320a0640db280961ec3583"
paper_digest_sidecars: {"citation.bib":{"sha256":"93cd6b66434eb8f1d772ad6965317521afa5091d8c1db586b3aa2ed47b0580fc","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-20095/citation.bib"},"citation.json":{"sha256":"c3da40286192ac0a142a29acf854ee9ec146af774c9da2a5ce0750b3cd46f686","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-20095/citation.json"},"citation.ris":{"sha256":"b3374b17ffd37e7d41c5136baea84e41d1e48d94af667776b6e4709844fde53e","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-20095/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"7440e5c7a93501194c2425dba7d50c7e9e30e247695f63ea821297596a7e99d5","url":"/audio-paper-digest-blog/client/papers/2026-11-17/2611-20095/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "43476385580113b5d22f3847218226aedde0c965204f8adb631f7243d51e271f"
paper_digest_api_reader_plan_sha256: "cd83ecb392ca48469b006b09d2e3543862286eb3ea59e4ccf111369895d3f5ee"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "52a22d90ade2967e2a59a8b48524cbd190363b8b1d5d5fb5d3d18940ff9bf96e"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 2
paper_digest_api_reader_structured_artifacts_sha256: "71de199bee159ac5afa573d27f4ab9cf0090b090ac8e136a1c7498aea3342b31"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "50fc43aa3e5174304852e7acd23b7afa5c719b9100666638c3bee08452315f1a"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "3299ea60088a1582508ffa22550420cf65a73bc89a8c487b51d983aeb69630b5"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 转录大模型上线时为什么越忙越要换内核

> 英文题目：*[High-Throughput Serving of Nemotron 3.5 Transcribe with Regime-Aware Megakernels and Kernel Fusion](https://arxiv.org/abs/2611.20095v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)
- **研究方法**：[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression) → [动态计算与早退](/audio-paper-digest-blog/papers/?concept=method.dynamic-computation)
- **研究条件**：[实时处理](/audio-paper-digest-blog/papers/?concept=setting.real-time)
- **研究重点**：[高效推理](/audio-paper-digest-blog/papers/?concept=research_focus.efficiency)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.1/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.3/1.5


## 👥 作者与机构

- Aditya Chatterjee：NVIDIA, Bangalore, India
- Sanjay Singh Chauhan：NVIDIA, Pune, India
- Mayank Jain：NVIDIA, Pune, India
- Arushi Dhingra：NVIDIA, Pune, India
- Sahin Chowdhury：NVIDIA, Pune, India
- Rahul Mittal：NVIDIA, Pune, India

## 📌 核心摘要

语音转写要把最长一小时的长段语音变为带说话人归属的文字，连续批处理使每一轮编码器词元数与解码行数都在变化，固定融合粒度难以兼顾大小负载。Nemotron 3.5 Transcribe先把音频算成128维对数梅尔特征，再让32层Transformer语音识别分支与冻结说话人分支并行提取并相加，经线性适配器投影到语言模型宽度送入混合Mamba-Transformer混合专家语言模型，输出逐词文字与对齐时间戳。本文服务引擎先按单轮工作量度量区域规模，再依据离线测得的交叉点为每次执行选择实现：小负载用一次启动覆盖整个区域的持久化巨内核，大负载用保留独立启动配置的短链融合内核并以程序化依赖启动衔接。最后提示行与解码行在混合步中共享权重一次读入，多步草稿在图形处理器上生成并用CTC提示验证，减少全局内存搬运和启动间隔，这是与以算子为单位启动内核的vLLM基线的关键差异。在英文Bias语料的B200单卡评测中，本文方法的词错误率（WER）为1.92%至1.93%，高于vLLM基线的1.89%至1.91%。在H100 SXM单卡上以英文Bias语料评测端到端RTFx，保精度服务的峰值达4345倍实时，约为调优后vLLM峰值的1.39倍，低并发下最高快4.39倍，在400毫秒p95完成时间预算内可服务并发数为基线8倍，B200上峰值达6367倍实时。结论适用于单卡离线归档转写与在线语音助手转写，允许词错误率上升的可选开关能进一步提速，原文未披露训练成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 转录任务的输入、输出和必须保住的信息

Nemotron 3.5 Transcribe 要做的是把语音变成文字，而且不只是听写。它的输入是 128 维对数梅尔特征，最长支持 1 小时录音，输出则受自然语言指令控制，可以是逐字稿或书面化文本，还可以带上下文、说话人归属、丰富格式、翻译和语种识别，覆盖 40 种语言。对刚接触语音的研究生来说，关键是理解这里有两路信息要同时保住：一路是说了什么，由自动语音识别编码器负责；另一路是谁在什么时候说，由 Sortformer 说话人分离分支负责。

论文把模型画得很具体。音频先走并行专家编码器，一边是 32 层、宽度 1280、约 0.6B 参数的 Transformer 识别编码器，一边是冻结的 Sortformer 分离模型约 0.1B 参数，输入都是 128 维对数梅尔特征，后者输出最多 8 个说话人每帧的活跃度，再经过固定正弦核加到识别状态上，最后用线性适配器把 1280 维映射到语言模型宽度 2688。语言模型主干是 Nemotron 3.5 Lightning 30B-A3B，共 52 层，其中 23 层 Mamba-2、23 层混合专家、只有 6 层分组查询注意力，每词元只激活 31.6B 中的约 3.5B 参数，加上音频部分约 4.3B 激活参数，总参数约 34B。另外还有 1.3B 参数的多词预测模块做草稿模型，以及编码器上的 50M 参数 CTC 适配器做词与音频对齐。

评价要看 3 类指标。第一是端到端 RTFx，即转录的音频秒数除以实际花费的墙钟秒数，整轮包含爬坡和排空，数值越大离线吞吐越高。第二是每个请求的延迟，论文主要看 95 分位端到端完成时间，越小越好，在线语音助手场景要求压在 400 毫秒以内，这是从 1 秒端到端预算里扣掉语音合成 100 毫秒和大模型 500 毫秒后留给识别的部分。第三是词错误率与字错误率，越小越好，用来约束加速不能以掉精度为代价。理解这三者的分工，后面才能看懂为什么论文既报吞吐表又报延迟曲线。

### 连续组批为什么让固定融合粒度失效

论文解决的不是单个算子更快，而是上线后每一步的工作量和配比都在变。连续组批下，每个迭代新接纳的请求数量不同，老请求有的结束有的还在解码，所以编码器一次要编多少音频、解码器一步要验多少行，每次都不一样。基线 vLLM 按算子粒度执行，每个算子或 torch.compile 融的一小撮算子就是一次内核启动，相邻内核靠全局内存传中间结果。这种做法在负载小时启动开销和内存搬运占比很高，在负载大时又需要充分的并行和专门的矩阵乘法排布。

融合能省搬运和同步，但会占用更多寄存器、降低占用率和计算效率。做成一个把整个区域包进一次启动的持久大内核，小负载下很赚，因为一次启动替代几百次启动；大负载下反而会输，因为输出分块太少填不满 GPU，或者为了迁就小负载的排布而用错了大分块。论文引用此前的大内核组合分析，把区域分成大内核稳定型和大内核衰退型，后者是小到交叉点之前赢、大了就输。Nemotron 3.5 Transcribe 恰好是预填充主导的大内核衰退架构，5 个大内核主导了端到端时间，阈值必须按 pass 大小在运行时切换。

具体难在三处。第一，编码器一次 pass 的大小就是本轮接纳的音频量，1 秒音频变成 12.5 个编码器词元，轻载时一个 5 到 10 秒句子只有 63 到 125 词元，重载 B128 稳态时受解码步 2048 行提示预算限制，一次 pass 中位数 1690 词元约 135 秒音频，占 H100 NVL 上 55 毫秒迭代里的 8.8 毫秒。第二，主干里提示词行远多于解码行，每秒音频给主干约 21 个待预填充词元，但只产生约 3.6 个转录词元，验证只需约 4.4 解码行，即使复用共享前缀后提示词仍占主干行的 76%。第三，推测解码的验证行还要回放 Mamba 状态，混合提示与解码行的步骤必须只读一次 29.8 GB 的 FP8 专家权重，否则每个迭代把权重流两遍就把带宽吃光。

### 总体做法：每次 pass 按大小选大内核还是融合链

引擎的做法可以一句话概括：每个区域保留两套实现，每次 pass 只看工作量大小走其中一套，切换点离线测好。持久大内核指整个区域一次常驻启动跑完，阶段之间用软件网格屏障分隔；融合内核链指把选中算子融成短链，每个链节是定制内核或带尾处理的 CUTLASS 通用矩阵乘法，用程序化依赖启动让下一个内核在 GPU 上等上一个的结果，省掉主机端启动间隙。两种都处理提示与验证工作，都把专家计算适配实际被路由到的人群，都把起草和选词留在 GPU 上。

**持久大内核 × 融合内核链：** 持久大内核指把一个模型区域放在一次常驻启动里跑完，用网格屏障分隔阶段，省掉大量启动和全局内存中转，适合小工作量；融合内核链指把若干算子融成几个定制内核加 CUTLASS 矩阵乘法尾处理并用程序化依赖启动串起来，每个内核保留自己的启动配置，适合大工作量；两者搭配后引擎可以按每一次 pass 的大小选省启动还是保并行。

为理解整体结构，先看模型与数据流向的示意图。读图时不要只记方块名字，要沿着样本走一遍：音频与指令分别从哪里进，在哪里第一次分叉，又在哪里汇合为音频嵌入，再进入主干产出带说话人标签的文本与时间戳。

> **看图路径：** 1. 先从顶部指令与音频两路输入看并行专家编码器在哪里分叉；2. 再看说话人融合与适配器把两路编码结果变成音频嵌入的位置；3. 接着数主干里 Mamba、MoE、GQA 三种层的数量配比；4. 最后看 MTP 草稿与 CTC 时间戳头分别连回哪里

[![原论文 Figure 2.：Nemotron 3.5 Transcribe model architecture.Audio flows through parallel Sortformer and ASR…](https://arxiv.org/html/2611.20095v1/model-architecture.svg)](https://arxiv.org/html/2611.20095v1/model-architecture.svg)

*论文图 2。原论文 Figure 2.：“Nemotron 3.5 Transcribe model architecture.Audio flows through parallel Sortformer and ASR encoders, speaker fusion, the modality adapter, and the hybrid Mamba, MoE, and GQA…”。*

这张架构图确实可见顶部左右两路输入，中间虚框内左右并排的 Sortformer 与识别编码器，下方说话人融合加适配器把两路结果变成每秒 12.5 个嵌入，再与指令文本拼成提示进入主干。主干下方一侧输出转录文本与说话人标签，另一侧是 MTP 模块向上回连做验证，底部 CTC 适配器在解码后把词对齐回音频。它帮助理解后文为什么编码器要分 2 分支并发、主干为什么要同时处理提示与解码行、草稿与提示为什么是两条独立的加速路径。

下表是切换规则的总览，也是后文所有选择的依据。两类常驻大内核一直跑，5 类衰退大内核按阈值切换，其中三处在运行时按词元或行数判断，两处按服务配置决定是否可用。阈值只看本次 pass 大小，不看实时路由直方图，这是有意为之的简化，后文会验证它在 B200 上偏移很小。

| Megakernel | Class | Selection threshold |
| --- | --- | --- |
| ASR encoder | Receding | T = 384 tokens per encoder pass (input T × 1,280) (runtime) |
| Sortformer | Receding | T = 384 tokens per encoder pass (input T × 512) (runtime) |
| Prefill | Receding | Prompt-only execution; at most 64 requests and 2,048 packed tokens per launch. Configuration-dependent availability. |
| Decoder - Mamba | Receding | Verification specialization supporting at most four rows per request. |
| Decoder - GQA | Stable | Retained across the evaluated eligible shapes. |
| Decoder - MoE | Receding | R = 448 rows per decoder step (input R × 2,688) (runtime) |
| MTP draft | Stable | Retained across the evaluated eligible shapes. |

这张表支撑的判断是，没有一种粒度能通吃所有负载。编码器与 Sortformer 共用 384 词元的运行时切换点，解码器 MoE 用 448 行的运行时切换点，预填充大内核只接受纯提示批且上限 64 请求与 2048 打包词元，解码器 Mamba 大内核只支持每请求最多 4 行的验证特化，解码器 GQA 与 MTP 草稿则在测过的形状里一直保留。读者拿它对照后文的加速比表，就能明白为什么轻载排空阶段大内核接管、128 并发以上大 pass 走常规路径，而 GQA 与草稿大内核几乎每步都在跑。

### 编码器如何跨过 384 词元的切换点

编码器一次 pass 的流程是固定的。前端内核先给本轮接纳的所有请求算对数梅尔特征，然后并行专家编码器的 2 分支并发执行：识别分支 32 层、宽度 1280、FP8 投影走主数据流，Sortformer 分支 31 层、宽度 512、BF16 走侧数据流，尾内核把说话人活跃度加到识别状态并经适配器投影到语言模型宽度。CTC 时间戳头放在最低优先级流最后跑，与解码步重叠，它的输出还会喂给草稿提示。主机侧在上一步 MTP 草稿后面排队建下一批，所以 GPU 编码时主机也在准备。前端的对数梅尔计算是独立的前端内核，不能和 Sortformer 分支混为一谈。

要读懂切换，先看这张按时间展开的编码器执行图。上半是小 pass 的固定切分，下半是大 pass 的多流共享，中间用菱形标出切换点，时间轴单位是毫秒。

> **看图路径：** 1. 对比 384 词元上下两半部分的启动数与流划分差异；2. 看大 pass 里主分支、侧分支与 CTC 流的时间重叠关系；3. 注意小 pass 固定切分 94 个 SM 与 38 个 SM 与大 pass 共享全部 132 个 SM 的区别

[![原论文 Figure 3.：Encoder execution across the 384-token crossover; CTC span measured during B128 serving (median…](https://arxiv.org/html/2611.20095v1/encoder-pass.svg)](https://arxiv.org/html/2611.20095v1/encoder-pass.svg)

*论文图 3。原论文 Figure 3.：“Encoder execution across the 384-token crossover; CTC span measured during B128 serving (median 1,690 tokens per pass).Small encoder passes use concurrent ASR and Sortformer…”。*

这张图上半确实可见固定切分下 ASR 大内核与 Sortformer 大内核分别占用 94 个 SM 与 38 个 SM 的分区，94 加 38 正好是 H100 的 132 个 SM，一次 pass 仅 4 次启动而非 549 次；下半确实可见主侧与侧侧两条等优先级流分别跑 258 个内核的 ASR 分支与 289 个内核的 Sortformer 分支，尾部说话人融合加适配器后接解码步，而 CTC 时间戳头在低优先级流上与解码重叠，大 pass 中位数 1690 词元。它直接解释了为什么小 pass 要按 94 个 SM 与 38 个 SM 固定切分来省启动、大 pass 要改为共享全部 132 个 SM 来填空闲。

小 pass 的两套大内核都用生产者加消费者结构。每组线程块里生产者用张量内存加速器把权重与激活分块搬进 6 级共享内存环，消费者线程束组用 wgmma 指令做乘法，识别用 FP8、Sortformer 用 BF16。每层是一串阶段，阶段间用网格屏障分隔。论文特意对比了更细的瓦片级数据流，即下一算子的每个瓦片只等它读到的瓦片，用计数器提前重叠，结果在 B128 形状下反而慢 4 到 10%，因为小 pass 每阶段只有一两波瓦片，且归一化、注意力、下投影都要读整行，下 1 阶段瓦片的依赖散在大多数线程块上，提前量很小却给每个瓦片加了释放与获取开销。

大到 384 词元以上，识别分支每层拆成 8 个内核。4 组投影是 H100 上的 CUTLASS SM90 FP8 矩阵乘法，128 乘 128 乘 128 分块，尾处理树做按通道权重缩放，输出与前馈下投影顺手读残差做偏置加残差，前馈上投影顺手做偏置、激活与 FP8 量化给下一个乘法。另有 4 个定制内核完成 QK 归一化加旋转位置编码、可变长 FlashAttention-3 写 FP8 给输出投影、以及两组归一化加 FP8 内核。整链用程序化依赖启动，258 个内核的启动间隙被大幅压缩。Sortformer 分支则是 289 个内核的 cuBLASLt BF16 乘法加行内核，2 分支按层排在两条等优先级流上，谁空谁填。

下面两组加速比是理解切换点的关键证据。它比较的是同一区域大内核相对融合链的速度，大于 1 倍偏向大内核。

| Region | Pass size: speedup |
| --- | --- |
| ASR encoder (tokens) | 64: 1.8× ⋅· 128: 1.6× ⋅· 256: 1.25× ⋅· 384: 1.0× ⋅· 1,024: 0.79× |
| MoE layer (rows) | 64: 1.16× ⋅· 128: 1.12× ⋅· 256: 1.07× ⋅· 448: 1.0× ⋅· 1,024: 0.88× |

这张表的含义不是越大越好，而是看交叉点在哪里。编码器在 64 词元时 1.8 倍、128 词元 1.6 倍、256 词元 1.25 倍，到 384 词元恰好 1.0 倍，到 1024 词元跌到 0.79 倍；MoE 层在 64 行 1.16 倍、128 行 1.12 倍、256 行 1.07 倍，到 448 行 1.0 倍，到 1024 行 0.88 倍。它支撑按大小切换的合理性，也划出限制：阈值是离线测的，路由与准入变了可能漂移，B200 上复测漂移在 32 词元与 32 行以内所以沿用同一阈值，换模型或换批策略要重测。

### 主干怎样让提示行与解码行共享一次权重读取

主干占端到端计算时间的 45% 到 61%，是必须啃的硬骨头。它做两件事。预填充把新请求的提示处理一遍，典型 6.8 秒请求在复用共享前缀后约 99 行，包含指令、85 个音频嵌入和短文本后缀，填好 Mamba 状态与键值缓存并产出首词；解码扩展转录，带推测解码时每轮验证上次已接受词加每请求最多 15 个草稿，平均约 9 行，一个请求要 3 到 4 轮，约 30 解码行。引擎把两者放在同一步里，每步权重只读一次，同时服务本轮新接纳的提示行与所有在飞请求的解码行。

**prefill × decode：** prefill 指把新请求的提示词一次性算完，填好 Mamba 状态和键值缓存并产出首个词；decode 指带着已生成文本逐轮扩展转录，本文还用推测解码一次验证多个草稿词；两者共用同一套主干权重，所以论文把两类行拼在同一步里只读一次权重，提示词行多时省下的权重读取就是主要收益。

工作量是预填充主导的。批量 1 到 512 下预填充行占端到端时间的 24.1% 到 46.2%，只有批量 1 时解码行以 35.3% 超过预填充的 24.1%。在调优过的 vLLM 里，一个转录词的主干时间约是提示词的 4 倍，60 微秒对 16 微秒，但因为行数悬殊，预填充仍以 36% 对 22% 超过解码。这解释了为什么论文把预填充大内核与解码器 MoE 都做成衰退型：省提示行的权重读取就是省大头。

预填充大内核是一次 132 个常驻线程块的协作启动，H100 每 SM 一个，跑最多 64 个提示、2048 词元打包批，走完 52 层。生产者用异步批量拷贝把 128 乘 128 的 FP8 权重与激活瓦片流进 6 乘 32 KB 的共享内存环，区别在于一条管线同时跑 Mamba-2、注意力与 MoE 三族算子。MoE 用交换式分块，让权重占 wgmma 的 M 侧、某专家的 8 到 128 词元占 N 侧，按专家实际人群选块，不再补齐到 128 行，上投影与下投影之间用按专家就绪计数器代替屏障。但它只接受纯提示批，在飞行组批里很少单独出现，B128 下 90% 步骤是提示加解码混合，9% 纯解码是排空尾巴，1% 纯提示，所以新提示跟在编码器 pass 后进入混合步，走解码器的 regime-aware 设计。

解码步的组成如下图所示，虚框表示本次服务没走的那条验证特化路径。读图时重点看 MoE 的双路径与 Mamba 的双流。

> **看图路径：** 1. 先看每层共用的投影与行内核是什么颜色；2. 再看 Mamba 主侧两条流与 GQA 常驻大内核的分工；3. 最后看 MoE 按 448 行切换的两条路径如何汇合到收尾内核

[![原论文 Figure 6.：Regime-aware kernel composition for the decoder step.Each decoder layer uses fused projections…](https://arxiv.org/html/2611.20095v1/decoder-composition.svg)](https://arxiv.org/html/2611.20095v1/decoder-composition.svg)

*论文图 6。原论文 Figure 6.：“Regime-aware kernel composition for the decoder step.Each decoder layer uses fused projections and row kernels.”。*

这张图确实可见每层先有投影加行内核，Mamba 混合器里主数据流跑提示行的卷积加分块状态空间计算、侧流跑解码行状态回放，注意力 6 层是 GQA 大内核，MoE 23 层在路由器之后按 448 行分叉为大内核或分组矩阵乘法加融合收尾，最后 52 层后是词头加贪心选词。它帮助理解为什么提示与解码行能共享同一次专家权重流，以及虚框所示的每请求最多 4 行的 Mamba 大内核在本次服务形态下未走融合主路径。

**Mamba-2 × MoE × GQA：** Mamba-2 是带状态的状态空间层，需要回放每条请求的状态来验证多个位置；MoE 是 128 选 6 加共享专家的稀疏层，计算量随被路由到的专家人群变化；GQA 是数量很少的分组查询注意力层；三者算子形态不同，论文在预填充大内核里用同一套生产者与共享内存环路去喂三种层，在解码步里则分别给不同切换策略。

具体实现上，解码步在最高优先级非阻塞流上按层启动，CUTLASS 乘法带网格依赖控制。稠密投影是 SM90 FP8 矩阵乘法，每层先有一个行内核做残差加、均方根归一化与 FP8 转换，MoE 层后由收尾内核吸收。Mamba 层里提示行在主数据流跑融合卷积与块并行计算，侧流用事件分叉汇合回放解码行，每层每请求约 1 MB BF16 状态读进寄存器，从 16 元环里验证最多 16 行，环满才写回；Mamba 大内核把同样回放融进一次启动但每请求最多 4 行。GQA 大内核量化查询、写分页 FP8 缓存、用 16 行 M 维容纳共享同一键值头的 16 个查询头。

MoE 在 448 行以下走一次常驻启动，直接把每词元 FP8 拷贝写到 6 个专家位置加共享专家，用 8 到 64 词元的交换块跑双投影并提前发权重；448 行以上走指针数组分组 FP8 乘法，共享专家作第 129 组，上投影尾处理融 ReLU2 与 FP8，1200 行以上换 128 乘 128 块并用广播省词元分块读取，专家权重流到 2.5 到 2.8TB 每秒。最后收尾内核合并专家并做下一层残差加、归一化与量化，词头是 cuBLAS BF16 乘法加贪心取最大。

### 草稿模型为什么能常驻大内核

草稿模型是多词预测模块，一块注意力加一块共享权重的 MoE，从主干最后隐状态预测下一个词，可反复套用。每轮为每请求提 K 个词，下一解码步验证。平均接受长度定义为每次验证产出的词数，含奖励或纠正词，公式对 K 个草稿按条件接受概率连乘求和再加 1。实测前 5 个位置接受概率 0.971、0.977、0.939、0.931 和 0.931，对应平均接受长度 5.41 词，说明草稿质量足够撑起深推测。

它被判定为大内核稳定型，即测过的形状里大内核一直赢。实现是一次 264 个常驻线程块的协作启动，每 SM 两个，网格屏障最多 16 个分隔 MTP 块的阶段。路由专家交换 A 与 B，专家权重占 64 行 M 侧、最多 32 词元占 N 侧，8 级环上跑 64 乘 32 乘 16 的 wgmma；4 行以上共享专家并进这次乘法作多一个专家，省掉 2 阶段与屏障。注意力把同键值头的 16 个查询头放 M 等于 16 侧，FP8 查询直转寄存器，32 键 FP8 缓存块双缓冲进共享内存，4 个 warp 分上下文并在共享内存合并柔性最大与求和，长上下文再切段合并。128 行下激活每缓冲不到 3 MB，一次 pass 的访存主要是权重加每上下文词元每请求 512 字节。

**MTP 草稿 × CTC 提示：** MTP 草稿指用多词预测模块从主干隐状态连续提出 K 个候选词；CTC 提示指编码器侧的时间戳头给出的词级提示文本；当 K 个草稿一致且提示置信度够高时把提示词直接拼到草稿后，可把一次验证的行数撑到最多 16 行，用编码器本来就算出的信息换更少的解码轮数。

周围 6 个定制内核负责喂入与收尾，思路是只算提示行需要的、把词表归约压进尾处理、让词元 ID 留在 GPU 上。词头从不反量化，每行按绝对值最大值缩放到 448 即 FP8 E4M3 最大值再丢掉缩放，因为全词表共用正缩放不改变取最大结果。所有 K 乘 128 的词 ID 一次 6 KB 拷贝回主机，pass 间隙每迭代共 0.13 毫秒，所以保持每 pass 一次启动。CTC 侧在每次编码器 pass 后给出编码器侧提示，计时采用 1152 词元 pass，主机侧把一致的草稿用提示词扩展，最多到 15 个草稿，再进下一解码步最多每请求 16 行的验证窗，用编码器本来就算出的信息换更少的解码轮数。

### 在什么数据、基线和计时口径下比较

主评测是英伟达英文偏置语料测试集，4820 条单说话人录音共 15.36 小时，时长 3.5 到 58.8 秒、平均 11.5 秒、平均每条 25 词，四域与 6 种美英口音及性别均衡划分。另用 LibriSpeech 测试集干净与困难两部分共 5559 条 10.75 小时，平均 6.96 秒，比偏置语料的 11.47 秒短，到达顺序冻结打乱，两轮实测取均，计时边界与主评测一致。调参用的 512 条 LibriSpeech 开发集话语只用于可选模式的专家与层排序，偏置语料从不参与选择，这点对理解可选模式的泛化很关键。

硬件是单卡 H100 SXM 700 瓦、H100 NVL 400 瓦与 B200 144 个 SM 1000 瓦，同 GPU 配对比较。基线是英伟达生产配置的 vLLM 0.29.0，加 NeMo 语音插件与 CUDA 13.0.2，跑同一份 ModelOpt FP8 检查点，线性层、专家与键值缓存皆 FP8，3 词元 MTP 推测，FlashInfer 注意力、CUTLASS 稠密乘法、FlashInfer-CUTLASS MoE、BF16 Mamba 状态 16 步回放解码，torch.compile 加 Inductor 图划分预编译解码尺寸 512 到 768、CUDA 图到 768 序列、编码器图与打包 Sortformer 图，限 768 并发序列、每步 19456 打包词元、20GiB 键值缓存、0.88 显存利用率与 4 个接口服务。B200 用同样限额加 SM100 FP8 配置。两系统同卡同 HTTP 客户端，客户端先备好 4820 请求再计时，按时长降序 4 秒斜坡发送，RTFx 按整轮含斜坡排空计算。

B200 跑的是同一引擎的 SM100 个分支，不是简单重编。Blackwell 没有 wgmma，张量核路径、大内核、词头与融合乘法都改用累加进张量内存的 UMMA 重写，要分配张量内存、等乘法完成屏障、尾处理前排空累加器，寄存器级注意力路径沿用。常驻网格按启动时查到的 SM 数定尺寸，144 而非 132，并发 2 分支从 94 个 SM 加 38 个 SM 改成 72 个 SM 加 72 个 SM，前者相加是 H100 的 132 个 SM，后者相加是 B200 的 144 个 SM。调度、切换点、准入、MTP 深度与数值配方不变，B200 复测交叉点漂移在 32 词元与 32 行内所以沿用 384 词元与 448 行。唯一重要的 B200 特改是草稿折叠专家路径从 128 行扩到 256 行，去掉草稿 pass 超 128 请求后的减速，256 并发以上提速 26% 到 36%，1280 并发从 4688 倍到 6367 倍实时。

### 吞吐与延迟在什么并发下成立

先说指标方向。RTFx 越大越好，p95 完成时间越小越好，词错误率越小越好。比较成立的前提是同卡、同检查点、同工作负载与同文本归一化，论文明确两系统都不是比特精确，因为批组成改变 FP8 乘法分块与归约顺序。

**RTFx × p95 完成时间：** RTFx 指整轮测得的音频秒数除以墙钟秒数，包含爬坡和排空，越大说明离线吞吐越高；p95 完成时间指 95 分位请求的端到端耗时，越小说明在线体验越好；两者分工不同，论文同时报告是因为高并发下吞吐可以靠堆批上去，但在线能否用还要看延迟是否压在 400 毫秒预算内。

延迟曲线的读法是理解在线可用的钥匙。横轴是对数刻度的客户端并发，纵轴是秒级的端到端 p95，虚线是 vLLM，实线是新引擎，颜色区分三款硬件。

> **看图路径：** 1. 横轴是客户端并发的对数刻度，从 32 看到 1280；2. 纵轴是端到端 p95 秒数，越低越好；3. 对比同一硬件上两条线的差距随并发如何变化

[![原论文 Figure 1.：p95 end-to-end completion time across client concurrency.Completion time versus client…](https://arxiv.org/html/2611.20095v1/completion-latency.svg)](https://arxiv.org/html/2611.20095v1/completion-latency.svg)

*论文图 1。原论文 Figure 1.：“p95 end-to-end completion time across client concurrency.Completion time versus client concurrency for vLLM and the regime-aware engine on H100 NVL, H100 SXM, and B200.”。*

这张图确实可见三款硬件上实线在已绘并发下都低于同色虚线，随并发增大两组线都上扬但实线更平缓。它支撑论文的延迟结论，但也要看到它只画了 32 到 1280 并发，不支持外推到单流或超大并发。

H100 上的吞吐表是核心证据。表头给出两款 H100 的功率，行是并发请求数，列是 vLLM 与优化引擎的 RTFx。

| RTFx | H100 SXM 700 W | H100 SXM 700 W | H100 NVL 400 W | H100 NVL 400 W |
| --- | --- | --- | --- | --- |
| Concurrent requests | vLLM | Optimized | vLLM | Optimized |
| 32 | 467 | 2,052 | 799 | 1,815 |
| 64 | 788 | 2,990 | 1,025 | 2,451 |
| 128 | 1,372 | 3,754 | 1,584 | 3,033 |
| 256 | 2,241 | 4,181 | 2,054 | 3,316 |
| 512 | 2,973 | 4,287 | 2,336 | 3,351 |
| 768 | 3,127 | 4,324 | 2,410 | 3,369 |
| 1,024 | 3,116 | 4,342 | 2,385 | 3,374 |
| 1,280 | 3,020 | 4,345 | 2,402 | 3,381 |

这张表支撑保精度加速的判断。H100 SXM 上 32 并发 467 对 2052、128 并发 1372 对 3754、1280 并发 3020 对 4345；H100 NVL 上 32 并发 799 对 1815、128 并发 1584 对 3033、1280 并发 2402 对 3381。按论文汇总即 SXM 高 1.38 到 4.39 倍、NVL 高 1.40 到 2.39 倍，峰值各为 vLLM 峰值的 1.39 与 1.40 倍。限制也要讲清：vLLM 在 SXM 上 256 并发以下反而慢于 NVL，32 并发 GPU 利用率 SXM 主机 45% 对 NVL 主机 78%，而新引擎两侧都是 98%，论文归因于主机 CPU 代际、分配与内核差异但未分离到具体哪一项，所以跨主机比 SXM 与 NVL 绝对值要谨慎。

精度侧词错误率 1.91 到 1.92% 对 1.88 到 1.93%，基本持平。128 并发 p95 从 SXM 1.501 秒降到 0.545 秒、NVL 1.308 秒降到 0.712 秒。

B200 上的表把加速延续到新硬件，最后一列是相对加速比，方向越大越好。

| RTFx on B200 |  |  |  |
| --- | --- | --- | --- |
| Concurrent requests | vLLM | Optimized | Speedup |
| 32 | 870 | 2,675 | 3.07× |
| 64 | 1,041 | 4,011 | 3.85× |
| 128 | 1,591 | 5,124 | 3.22× |
| 256 | 2,565 | 5,958 | 2.32× |
| 512 | 3,549 | 6,220 | 1.75× |
| 768 | 3,777 | 6,297 | 1.67× |
| 1,024 | 3,850 | 6,350 | 1.65× |
| 1,280 | 3,894 | 6,367 | 1.64× |

这张表支撑新硬件上仍赢且高并发收窄的判断。32 并发 870 对 2675 为 3.07 倍、64 并发 1041 对 4011 为 3.85 倍、128 并发 1591 对 5124 为 3.22 倍，到 512 并发 3549 对 6220 为 1.75 倍、1280 并发 3894 对 6367 为 1.64 倍。新引擎在 512 并发以上稳定在 6200 倍实时之上，1280 并发 6367 倍对应每秒 555 请求，而 vLLM 还在向 3894 倍爬升。延迟低 1.9 到 3.8 倍，32 并发 0.21 秒对 0.63 秒，峰值显存 56.0GiB 对 73.3GiB。词错误率 1.92 到 1.93% 对 1.89 到 1.91%，差 0.04 个百分点以内。

400 毫秒预算下新引擎 SXM 可到 64 并发 0.365 秒、128 并发已 0.545 秒超限，B200 可到 128 并发 0.368 秒、256 并发 0.595 秒超限，而 vLLM 只到 SXM 8 并发与 B200 16 并发，即同预算 8 倍并发。论文还强调 SXM 新引擎比 B200 vLLM 更快，意为软件优化跨过一代硬件差距，但这只在该工作负载与该基线配置下成立。

机制分解上，按 pass 选择比单用一种好：8 请求时比只用融合链快 9%，到 1280 并发收窄到 2%，因为 pass 变大；128 请求时比只用大内核快 23%，到 1280 并发拉大到 32%；32 请求时两种 pass 大小混杂，比两者各快 5% 与 9%。即使只用融合链，新引擎 32 请求仍比 vLLM 快 4.2 倍、1280 请求快 1.41 倍，差距来自无 Python 主机路径、GPU 端特征提取、融合尾处理与带 CTC 提示的更深推测。LibriSpeech 短句打乱到达下，SXM 为 vLLM 的 1.60 到 3.52 倍到 3739 倍实时，B200 为 1.82 到 3.90 倍到 5219 倍实时，128 并发 p95 SXM 1.587 到 0.454 秒、B200 1.356 到 0.328 秒，合并词错误率 2.437 到 2.457% 对 2.449 到 2.485%，说明收益不限于原工业负载，但平均时长与到达顺序变了仍要重测阈值。

### 哪些可选优化涨点掉点，哪些试了没成

可选模式是给能接受更高词错误率的离线任务准备的，不是默认精度。专家掩码去掉每层最少被路由的 32 个专家，权重不再被流送，涨 3.0% 吞吐、相对词错误率涨 4.2%；每词元专家从 6 降到 5 涨 1.5% 吞吐、相对涨 1.7%，降到 4 涨 3.5% 吞吐、相对涨 6.2%；单说话人跳过 Sortformer 分支在 LibriSpeech 开发集上零词错误变化涨 2.1%；整层跳过用贪心前向选择，在 512 条开发集上每轮加词错误增加最小的层，超 2.55% 校准词错误就停，选中 23 层中的 7 层即 6、8、13、20、27、38 与 43，涨 11% 吞吐。

合在一起 B200 涨 13% 到 16% 到 1280 并发 7414 倍实时，但词错误率从 1.92% 升到 3.44 到 3.48%；轻量预设只开 Sortformer 旁路加 top-5 涨 3.6%、相对涨 1.7%。选择全程不用偏置语料，避免用评测集调开关。

没成的优化同样重要，因为它们指向功率墙。专家主导 MoE 内核把词元分块常驻，比分组 CUTLASS 慢 1% 到 3%，原因是 H100 NVL 400 瓦封顶下权重流送时 SM 时钟掉到 0.82 到 1.18 吉赫；INT4 专家把字节减半，但混合输入分组乘法每调用 400 到 630 微秒对 FP8 的 230 到 245 微秒；草稿与编码器间绿色上下文 SM 分区最好 1818 倍对共享全部 132 个 SM 的 1809 倍，在噪声内没赢；把解码大内核搬进 vLLM 只加速纯解码步 7.6% 到 16.4%，但那些步只带 0.3% 词元，吞吐变 0.9965 倍。

更快的 Sortformer 分支缩不短识别分支更长的编码器 pass；编码器大分块在 1152 词元只有 90 分块，SM 空转；每词元 2 专家词错误到 5.4% 还更慢。

论文用能量屋顶线解释功率墙。经典屋顶线只看带宽与算力谁更长。

\[t\geq\max\!\left(\frac{B}{\mathrm{BW}_{\mathrm{peak}}},\frac{\Phi}{F_{\mathrm{peak}}}\right).\]

它假设显存与算术能同时跑到峰值，短板被长板掩盖。功率封顶时两者抢同一份瓦数，时间相加而非重叠。

\[t\approx\frac{e_{b}B+e_{f}\Phi}{P}.\]

其中分子是搬运能加计算能，分母是可用功率即封顶减静态。1280 请求整 pass 在 H100 NVL 上 96% 的 10 赫采样紧贴 400 瓦上下 2%，SM 时钟平均 1.32 吉赫对最高 1.785 吉赫。结论是封顶时提速靠少搬字节与少算，而不是更好重叠，这也解释了为什么大分块、常驻与分区这类调度优化没赢。临界路径与填满 GPU 是另两条经验：并行分支看最长者，瓦片数要匹配工作量，这正是小负载大内核赢、大负载融合链赢的原因。

### 结论的边界与尚未解决的问题

先划边界。所有加速都是单卡、同检查点、同客户端与同计时口径下的配对比较，不支持跨功率与跨主机直接比绝对值。阈值离线测、运行时只看 pass 大小，路由与准入变了可能漂移，B200 上验证过漂移小，但换模型、换提示模板、换到达分布都要重测。精度持平只在保精度模式下成立，开可选开关词错误率会到 3.44% 以上，只适合成本优先的离线归档。LibriSpeech 验证了短句与打乱到达，但仍是英文朗读，40 个语言、多说话人与 1 小时长音的覆盖要另测。

论文自己提出 3 个开放问题。第一，交叉点离线定，实时路由与准入会移动它，在线最优定点方法是什么。第二，动态粒度只做到算子级，对所有大内核衰退架构是否就是最优性能模型。第三，本文是预填充主导，若换成解码或其他部件主导，优化策略与算子粒度如何变化。对初学者来说，这意味着不要把 384 词元与 448 行当成通用常数，它们是该模型、该批策略与该硬件下的测量值。

还有两处易误解要澄清。vLLM 在 SXM 低并发反而慢于 NVL，不是 SXM 卡更弱，而是该基线在该 SXM 主机上主机侧受限，利用率只有 45%，论文明确说没分离到 CPU 代际、分配与内核中的哪一项。B200 的 72 加 72 切分与 256 行折叠路径是 SM 数与行为变化后的针对性修改，不是免费搬运。这些都说明服务端优化的结论离不开主机、功率与批策略，换环境要连带重报利用率、时钟与显存。

### 什么时候值得试，第一步做什么，还缺哪项验证

如果你在做语音、大模型或音频系统的毕业课题，值得试的信号很具体：主干提示行占比高、每步批大小抖动大、性能剖析显示启动数以百计且小 pass 访存碎、功率已贴墙但时钟还有波动。这篇的思路是先区分稳定与衰退区域，再给衰退区域准备两套实现并按 pass 大小切换，而不是一上来就把所有东西融进一个大内核。混合专家模型、带状态空间层的混合主干、编码器加 Sortformer 双分支，都是容易出现衰退的候选。

复现第一步不是复刻全部内核，而是复刻测量与切换框架。用同一 FP8 检查点与同一客户端，先跑通调优 vLLM 基线的吞吐、延迟与词错误率 3 条基线，再按 64、128、256、384、1024 词元与行数扫编码器与 MoE 的大内核相对加速比，找到 1.0 倍交叉点。接着实现最薄的切换：小 pass 走大内核、大 pass 走融合链，保持提示与解码行共享一次权重读取与 CTC 与解码重叠，验证 128 并发附近是否有论文所述量级的 20% 左右切换收益，再逐步加预填充大内核、GQA 常驻与 MTP 草稿。

论文说优化引擎跑在生产推理服务器进程内经 C 接口、无 Python 服务路径并与 vLLM 参考做奇偶校验，未来随 NIM 发布，但本次没有给出可验证的公开代码、模型或数据链接，所以不要把可运行性当成已开源，复现仍要自己搭基线与语料。

还缺的验证要补在自己的数据上。至少重报 3 组：不同平均时长与到达顺序下的交叉点是否漂移，不同功率封顶下的时钟与能耗分解，以及开可选开关前后在你领域语料上的词错误率与字错误率。没有测误判率、尾延迟分布与成本，就不要承诺它们会改善。训练资源、推理开销、输出帧率与实际延迟要分开记，总体加速推不到每一步。把这些补齐后，才能说 regime-aware 在你的负载上是否成立，以及 400 毫秒预算内到底能多撑多少并发。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2611.20095v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-17 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-17/)
