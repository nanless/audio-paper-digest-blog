---
title: "Decode Before You Hear: Speculative Listening for Chunk-Interleaved Full-Duplex Speech Language Models"
date: 2026-11-09
draft: false
tags: [全双工语音交互, 语音代理规划与工具使用, 动态计算与早退, 基准测试, 实时处理]
categories: [论文速递]
description: "针对块交错全双工语音模型在固定时长块内又要等音频又要串行生成的问题，论文用静音假设提前起草并在音频到达时一次验证，在八任务基准上把说话块延迟降到原来的约三分之一并把工具调用延迟大幅缩短，代价是需要空闲算力和跨块保存草稿。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.06982"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "没听到下一秒声音之前，先把下一秒的话打好草稿：推测性聆听如何加速块交错全双工语音模型"
paper_digest_original_title: "Decode Before You Hear: Speculative Listening for Chunk-Interleaved Full-Duplex Speech Language Models"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.06982v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.06982v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.06982v1.pdf"
paper_digest_primary_task: "全双工语音交互"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.full-duplex","label":"全双工语音交互"},{"facet":"task","id":"task.voice-agent-planning","label":"语音代理规划与工具使用"},{"facet":"method","id":"method.dynamic-computation","label":"动态计算与早退"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"setting","id":"setting.real-time","label":"实时处理"}]
paper_digest_primary_method: "动态计算与早退"
paper_digest_score: 7.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对块交错全双工语音模型在固定时长块内又要等音频又要串行生成的问题，论文用静音假设提前起草并在音频到达时一次验证，在八任务基准上把说话块延迟降到原来的约三分之一并把工具调用延迟大幅缩短，代价是需要空闲算力和跨块保存草稿。"
paper_digest_authors: [{"affiliations":["The Chinese University of Hong Kong, Shenzhen, China","Amphion Technology Co., Ltd"],"name":"Yutong Bian"},{"affiliations":["Amphion Technology Co., Ltd"],"name":"Yanglin Zhang"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen, China"],"name":"Yuxiang Wang"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen, China"],"name":"Luoyuan Zhang"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen, China"],"name":"Rongshen He"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen, China"],"name":"Zihao Wang"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen, China"],"name":"Junwen Qiu"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen, China","Amphion Technology Co., Ltd"],"name":"Jiaqi Li"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen, China","Amphion Technology Co., Ltd"],"name":"Zhizheng Wu"}]
paper_digest_abstract_sha256: "eeb8995e1aae4057971cadc3fec6efbe9fcf8ba8cbeea9b89bd009097a63c6e0"
paper_digest_sidecars: {"citation.bib":{"sha256":"31a440a3dbf4da406f2c0ce89250713d5e5dea3c40338bf2d8f42e348b217375","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06982/citation.bib"},"citation.json":{"sha256":"b0cd7c73b5fc7e9bf658a7b2ba83887e1967e6e6a1e67e75aee307ce863a6869","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06982/citation.json"},"citation.ris":{"sha256":"9e699ee95796c2a4bcb7787c219b219dbad6ded71b7b56584ed0c00dc1513a38","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06982/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"468812915ee450b9acd684c95563f74cc73571a42d6a9dd855eac998dd0124db","url":"/audio-paper-digest-blog/client/papers/2026-11-09/2611-06982/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "da7b6ff85d07d4742d00447e4a1b496dd5a6839becfff0d7de4fcd5076fb19e2"
paper_digest_api_reader_plan_sha256: "db703b61446ae4a181fcac3ca77568c7cba7f6bb546583cd484242b8c399a852"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "d79a95cdc6f1ba01b0d5a537c698dfcc9ded8b0e8734367053638ff0cd76875a"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "150cac6b829b3af842a849ec11ea2e2656636ab0900cc6ef5dbf1efd526909c3"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "3d0568e3bc896b59fc18b203ccb7decd4946989369fd744dfeb21af9a04df207"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "57ff7c61302d963d933af6353d2522d56128364a6f71d125dd09fa92435fa267"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 没听到下一秒声音之前，先把下一秒的话打好草稿：推测性聆听如何加速块交错全双工语音模型

> 英文题目：*[Decode Before You Hear: Speculative Listening for Chunk-Interleaved Full-Duplex Speech Language Models](https://arxiv.org/abs/2611.06982v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-paper-digest-blog/papers/?concept=task.full-duplex)；[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [语音代理规划与工具使用](/audio-paper-digest-blog/papers/?concept=task.voice-agent-planning)
- **研究方法**：[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression) → [动态计算与早退](/audio-paper-digest-blog/papers/?concept=method.dynamic-computation)
- **研究条件**：[实时处理](/audio-paper-digest-blog/papers/?concept=setting.real-time)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Yutong Bian：The Chinese University of Hong Kong, Shenzhen, China；Amphion Technology Co., Ltd
- Yanglin Zhang：Amphion Technology Co., Ltd
- Yuxiang Wang：The Chinese University of Hong Kong, Shenzhen, China
- Luoyuan Zhang：The Chinese University of Hong Kong, Shenzhen, China
- Rongshen He：The Chinese University of Hong Kong, Shenzhen, China
- Zihao Wang：The Chinese University of Hong Kong, Shenzhen, China
- Junwen Qiu：The Chinese University of Hong Kong, Shenzhen, China
- Jiaqi Li：The Chinese University of Hong Kong, Shenzhen, China；Amphion Technology Co., Ltd
- Zhizheng Wu：The Chinese University of Hong Kong, Shenzhen, China；Amphion Technology Co., Ltd

## 📌 核心摘要

块交织全双工语音语言模型把对话切成固定时长块，每块读入新到音频并解码输出，块时长是硬截止，超时累积为落后于实时。听块只处理音频而把块时长70-89%空耗为闲置窗口，发言块和工具调用块需逐词串行解码且工具调用可达数十步，因而要利用闲置窗口就必须在音频到达前假设输入起草下一块。论文发现静默假设下的草稿多与真实输出一致，而不一致多分歧于首词，先用目标模型自身以静默输入在上一块结束后的闲置窗口内起草下一块输出。再在真实音频到达时用一次前向同时完成音频预填并验证草稿，验证接受的词直接提交为本块输出以省去逐词前向。最后对首词分歧另设次优首词分支起草备选，并用跨块假设池保留用户说话期间各块已含部分工具调用的草稿供后续验证承接长输出，该做法把起草提前到输入到达前且不改变输出分布，不同于音频到达后用上下文词组起草的基线。在TickTock-Bench上相对自回归解码，发言块平均加速2.6-2.8倍，Streaming SLM工具调用加速23.41倍，回应起始延迟平均降低73%至74-241 ms，最大落后平均降低94.4%。结论适用于1 s块、低并发、思考器解码阶段，并行流式架构与高并发服务尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 全双工语音模型要同时听和说，输入输出是什么

刚进入语音对话方向的读者可以先把任务想成一条不断到来的声音流。用户一直在说话，模型也要随时能开口，两种声音在时间上重叠。论文研究的块交错结构把时间切成固定长度的块，例如每块 1 秒。每块的输入是这 1 秒内编码后的音频词元，加上可能并行的文字输入；输出是模型在本块要解码的词元，可能是继续聆听的控制词元，也可能是要说的话对应的文本词元，还可能是结构化工具调用。

关键约束是实时性。下一块音频会按真实时间到达，本块计算必须在块时长内结束，否则后面所有块都被推迟。模型看到用户说话晚了，回答也就过时了。论文只研究负责理解和生成文本的思考部分，不比较把文本转成声音波形的说话部分，因为 4 个模型的说话部分实现不同，放在一起会混淆解码方法的对比。思考部分解码文本词元，语音合成部分再据此生成声音，本文的延迟测量只针对前者。

对研究生而言，这里要保留的信息是块的边界和因果顺序。所有块组成一个因果序列，当前块只能看到历史块和当前音频，不能看到未来音频。输出的第一个词元往往决定是继续听还是开始说，后面才是具体内容。这种结构决定了后文为什么可以在不知道当前音频时先假设一个输入来起草。

### 已有加速方法为什么没有用上等待音频的时间

推测解码是文本生成里常用的无损加速思路：先用便宜方式起草几个词元，再用目标模型 1 次前向验证，接受连续正确的部分。草稿可以来自小模型、来自在目标隐藏状态上训练的预测头，也可以直接从上下文里找重复片段。语音对话里也有提前起稿的想法，例如让快速模型先写回答开头，或者边合成边验证。但这些方法都是在输入已经拿到之后才起草。

另一类工作利用聆听时间做推理，例如训练模型在听的时候输出思考词元，或者在级联管线里根据不完整输入预生成候选回答。论文指出，在端到端的块交错模型里，聆听块等待音频的那段时间还没有被用来解码下一块的输出。本文的方法正好补上这个空位，而且不需要额外训练，也不需要小模型。

比较的公平条件值得注意。文本推测解码的基线都是在音频到达后才开始工作，而本文方法把工作提前到音频到达前。两者输入条件不同，加速来源也不同。后文表格中基线加速接近 1，并不是说基线实现有误，而是对话中新回应的词元很少能在历史上下文中找到重复，符合这类方法的适用边界。

### 为什么有的块很闲，有的块却赶不上截止时间

论文把 4 个块交错模型的解码按块逐个测量，发现负载很不均匀。聆听块只需要处理新到音频并输出很少的控制词元，计算结束后要等下一块音频，在块时长里空出 70% 到 89% 的时间。说话块和工具调用块则需要一个词元一个词元地串行生成，每次前向都要重新加载模型权重和缓存，开销受显存带宽限制。工具调用往往有几十个词元，音频到达后需要 1.8 秒到 2.6 秒才能完成，全部超过 1 秒的块截止时间。带有书写通道的模型在 95% 的说话块上也会超期。

下图把这种对比画得很直观，上面是串行解码等音频加逐词元生成的过程，下面是提前起草加 1 次验证的过程。

**块交错 × 空闲窗口：** 块交错指把连续对话切成固定时长块，每块先处理新到音频再解码输出；空闲窗口指聆听块只处理很少输出控制记号、剩下等待下一块音频的时间，本文正是把这段时间拿来提前解码下一块。

**音频到达后延迟 × 块截止时间：** 音频到达后延迟指从本块音频到达算起、到本块计算结束的时间；块截止时间指块时长本身构成的硬期限，超期会拖慢后面所有块，本文的加速目标就是把前者压到后者以内。

读图说明：下面这张总览图对比了自回归解码与推测性聆听在时间轴上的区别，重点看空闲窗口、逐词元前向与 1 次验证前向的差异，以及长输出是否超过红色截止线。

> **看图路径：** 1. 先看上面一行自回归解码中每个块的音频方块与输出方块的对应关系；2. 再看聆听块里标为空闲窗口的空白段有多长；3. 最后对比下面一行提前起草的虚线方块如何在音频到达时一次被确认

[![原论文 Figure 1：Decoding in a chunk-interleaved full-duplex speech language model.](https://arxiv.org/html/2611.06982v1/fig1_overview.drawio.svg)](https://arxiv.org/html/2611.06982v1/fig1_overview.drawio.svg)

*论文图 1。原论文 Figure 1:：“Decoding in a chunk-interleaved full-duplex speech language model.”。*

这张图确实可见的是，上半部分每个块的音频到达后要跟多个输出方块，每个方块对应 1 次前向，聆听块后留出很长的空白等待段，长输出块则明显拖过红色虚线截止时间。下半部分在等待段里用虚线画出提前草稿，音频到达后只用 1 次前向就确认多个词元，长输出不再拖过截止线。它帮助理解本文的核心转换：把等待时间变成起草时间，把音频到达后的串行次数变成验证次数。超期还会累积，当前块晚了，下一块音频已经到达，滞后会越积越大。

### 推测性聆听的整体流程是怎样的

方法可以沿着一个块的时间线理解。上一个块算完后、下一个块音频还没到，模型用自己的权重在静音假设下起草下一块的输出，并把历史上所有块的草稿留在一个池子里。如果还有剩余等待时间，再从概率第二高的首词元起草第二条分支。等真实音频到达，把缓存回滚到块边界，用 1 次前向同时处理音频并验证整条草稿，接受连续正确的部分并纠正第一个错误词元，后续只需补生成缺失部分。

这个流程不改变模型参数，也不引入外部草稿模型。起草用的就是目标模型自己，因此称为输入时刻的自推测解码。关键在于起草发生在音频到达前，验证发生在音频到达后的 1 次预填前向里。若草稿全对，音频到达后的前向次数就不再随输出长度增长；若部分错，只需补生成错后部分。

读图说明：下面这张方法总览图把两个观察与 3 个组件对应起来，适合对照着看静音起草为何可行、首词元分支和假设池为何必要，以及验证时两次前向分别做什么。

> **看图路径：** 1. 先看左上静音与真实音频得到相同输出的示意；2. 再看右上首词元不同的分叉示意；3. 最后沿下面主流程看起草、假设池与两步前向验证的连接

[![原论文 Figure 2：Overview of Speculative Listening.](https://arxiv.org/html/2611.06982v1/fig_method.drawio.svg)](https://arxiv.org/html/2611.06982v1/fig_method.drawio.svg)

*论文图 2。原论文 Figure 2:：“Overview of Speculative Listening. Observation 1 motivates drafting under silence and verifying the draft in the audio prefill pass.”。*

这张图确实可见的是，顶部左右两小图分别表示大多数块静音与真实音频输出相同、少数块在首词元分叉；下方左侧在等待时间里画出主草稿与次优分支并指向假设池，右侧画出音频到达后的第 1 次预填加验证前向与第二次补生成前向，正确词元打勾、错误词元标为纠正。它帮助理解后文的 3 个机制：起草解决等待时间的利用问题，分支与池子解决长输出与首词元分叉问题，验证保证输出与自回归一致。

### 静音假设下如何起草，音频到达后如何验证

论文把块 t 之前的全部历史记为上下文，块 t 的输入记为音频词元，输出记为若干个词元序列。自回归贪心解码的含义是，每个输出词元取在历史、当前音频和已生成前缀条件下概率最大的词。1 次前向可以处理一块输入词元并给出每个位置的下一个词元分布，但自回归每次只敢提交一个词元，因为下一个词元依赖上一个词元的选择。

静音假设把还没到达的当前音频替换成一段静音对应的输入词元。模型在自己的缓存上贪心解码，直到块结束或等待时间用完，得到主草稿。音频到达后回滚缓存，用 1 次前向处理真实音频加整条草稿，得到每个草稿位置的目标分布。按贪心验证规则，从前向后找到第一个与目标最优选择不一致的位置，保留之前全部正确的草稿，并把该位置换成目标的选择。这样每次前向至少提交一个词元，音频到达后的前向次数不会超过自回归。随机采样时则用保持目标分布的推测采样验证。

\[y_{i}=\arg\max_{y\in\mathcal{V}}\,p_{\theta}\left(y\mid\mathbf{x}_{\lt t},\mathbf{a}_{t},\mathbf{y}_{\lt i}\right).\]

上式计算的是自回归下每个输出词元的选择，它依赖历史上下文、当前真实音频和已生成的输出前缀，是后文验证时判断草稿是否正确的基准。

\[\tilde{y}_{i}=\arg\max_{y\in\mathcal{V}}\,p_{\theta}\left(y\mid\mathbf{x}_{\lt t},\mathbf{a}_{\text{sil}},\tilde{\mathbf{y}}_{\lt i}\right),\quad i=1,\dots,\gamma,\]

上式计算的是静音假设下的草稿词元，它把真实音频换成静音输入，其余条件与上式对应，说明草稿完全由目标模型自己在等待时间里生成。

\[n=\min\left(\left\{\,i-1\mid 1\leq i\leq\gamma,\ \tilde{y}_{i}\neq\arg\max p_{i}\,\right\}\cup\{\gamma\}\right).\]

上式计算的是验证后接受的词元数，它找到草稿中第一个与目标分布最优选择不一致的位置，保留其之前全部词元，若全对则保留整条草稿，保证提交结果与自回归一致。

**静音假设 × 验证：** 静音假设指用一段无声输入代替还没到达的真实音频来起草下一块输出；验证指音频到达后用一次前向同时处理真实音频并检查草稿，只有草稿与真实输出一致的部分才被保留，组合后把本该串行的生成搬到等待时间里。

### 假设池和次优首词元分支解决什么困难

一个等待窗口往往只够起草短的说话块，不够起草几十个词元的工具调用。但用户请求会跨越多个块， earlier 块等待时间里已经起草过包含部分工具调用内容的草稿。论文把会话中所有草稿按词元片段索引存入假设池，并在每次前向后用输出后缀的最长匹配片段续写后续前向。这样音频到达后的前向次数只随所有草稿都没有覆盖的词元增长。

论文用无时间限制的预探针发现，4 个模型合在一起，95.3% 的块在静音与真实音频下输出逐词元完全相同；而不匹配的块里，88% 在首词元就分叉，这通常是继续聆听还是开始回应的决策变化。因此在主草稿完成后若等待时间还有剩余，模型从静音下概率第二高的首词元再解码一条分支存入池中。验证偏离主草稿时，后续前向可以从池中匹配的分支继续，例如次优分支，从而减少补生成。

**假设池 × 次优首词元分支：** 假设池指把会话中所有历史草稿按词元片段索引保存，供后续前向续写；次优首词元分支指从静音下概率第二高的首词元再起草一条分支，专门覆盖在首词元就分叉的情况，两者配合让长工具调用也能从旧草稿中找到可续写部分。

举一个教学例子帮助理解，但不代表实测数值。假设工具调用需要连续输出多个参数字段，当前块的等待时间只够写出前两个字段，而前两个块的草稿已经写出过类似字段组合。验证时当前草稿的前缀被接受，缺失的后半部分可以直接从池中找到最长后缀匹配来续写，而不必逐词元重新生成。若分叉发生在首词元，例如静音下选择继续听而真实音频下选择开口，则主草稿整体不可用，此时次优分支恰好从开口词元开始，反而能被接受。分支与池子的分工正在于此。

### 这个方法需要训练吗，实际执行了哪些计算

这篇论文的方法不需要训练，也不需要新增模型或预测头。4 个评估模型本身是已有的块交错全双工模型，其中自研的 Streaming SLM 由 Qwen2.5-Omni-7B 的思考部分改造而来，另 3 个是公开模型的发布运行时。推测性聆听只改变解码时序：等待时间里用冻结的目标模型做贪心起草，音频到达后用同模型做预填加验证，缓存回滚与池子查找属于运行时操作。

需要说明的缺口是，论文没有报告训练梯度路径或参数更新，因为本来就没有训练；无训练也不意味着输出确定，随机采样下输出仍服从目标分布，只是分布保持不变。复现时不需要准备训练数据或优化器，需要的是各模型自身的推理运行时、音频编码器开销的计时，以及假设池的片段匹配逻辑。

从计算代价看，起草消耗的是原本闲置的算力，验证的 1 次大前向处理音频加整条草稿，其耗时约等于解码一个词元的 1 次前向。超出等待窗口的起草会被计入音频到达后延迟，因此等待窗口的长度直接决定能提前写多少。若并发会话增多，等待窗口被压缩，起草量也会下降，这是后文多会话分析的前提。

### TickTock-Bench 在什么条件下测量延迟

论文引入的 TickTock-Bench 是面向块截止时间的回放基准，共 8 个任务，覆盖语音推理、对话动态和工具调用。语音推理包括事实问答与开放回答，对话动态考察停顿、轮次结束与重叠语音附近的听答行为，工具调用考察完整调用的生成。每个会话按块逐块送入模型自带运行时，1 次跑一个会话，在单张 A100 上测量不含语音合成的墙钟时间。

测量按块输出标为聆听、说话或工具调用块。主要指标是相对自回归的音频到达后平均延迟加速比。等待时间里做的计算计入空闲窗口，超出窗口的部分计入音频到达后延迟。还报告截止时间错过率、每会话相对音频的最大滞后，以及每次目标前向提交的词元数。所有对比方法都是无损的，在精确算术下输出与自回归相同。基线是音频到达后才起草的 3 种免训练方法：从上下文找重复片段的提示查找解码、复用历史候选的词元回收，以及用雅可比迭代收集片段的前瞻解码。

**说话块 × 工具调用块：** 说话块指模型在本块输出语音对应文本的块，通常只有几个词元；工具调用块指输出结构化工具调用的块，通常有几十个词元，两类块的串行生成代价不同，因此论文分开测量加速比。

理解这些条件才能复述结论。块时长固定为 1 秒，贪心解码，批量为 1。工具任务列对部分模型报告的是工具调用块，对另一些模型因无工具调用而报告说话块。滞后按块累积，若某块超期，后续块的开始都会被推迟。回应起始延迟与工具调用延迟都包含这种累积滞后，而不只是单块的解码时间。

### 说话块和工具调用块到底快了多少

先看主要加速问题：在相同会话、相同硬件与贪心解码下，提前起草是否比音频到达后才起草更快。下表比较 4 种方法相对自回归在说话块平均音频到达后延迟上的加速比，数值越大越好，同时给出每次目标前向提交词元数与 7 个非工具任务的平均加速。工具任务列对部分模型报告的是工具调用块。

| Model | Method | Llama Q. | FDB v3† | #MAT | Avg. |
| --- | --- | --- | --- | --- | --- |
| Streaming SLM | Speculative Listening | 2.87 | 23.41 | 2.63 | 2.76 |
| Gander | Speculative Listening | 3.00 | 3.45 | 2.20 | 2.60 |
| Realtime- Venus | Speculative Listening | 2.81 | 2.41 | 2.15 | 2.69 |
| LWS | Speculative Listening | 2.95 | 1.60 | 2.52 | 2.68 |

表中可见推测性聆听在 4 个模型上全面快于自回归与 3 个基线。说话块平均加速在 2.6 倍到 2.8 倍之间，工具调用在 Streaming SLM 上达到 23.41 倍，在 Gander 上为 3.45 倍，而 3 个基线大多在 0.96 倍到 1.23 倍之间。每次前向提交词元数也拉开差距，本文方法为 2.15 到 2.63，基线接近 1。限制是加速随输出长度变化，短说话块节省的前向次数少，长工具调用节省得多；且该表主要反映贪心、单会话条件，随机采样与多会话的保持情况需看后文分析。

读图说明：下面这张预探针与画像图解释了上述加速的来源，重点看自回归下哪类块超期、静音草稿在哪类块接受率高，以及分叉位置是否集中在首词元。

> **看图路径：** 1. 先看左图不同块类型在自回归下相对虚线截止时间的高度；2. 再看中图静音草稿在全部块与说话块上的接受率；3. 最后看右图不匹配块中首词元分叉的比例

[![原论文 Figure 3：Chunk profile and oracle probe.](https://arxiv.org/html/2611.06982v1/fig_observations.svg)](https://arxiv.org/html/2611.06982v1/fig_observations.svg)

*论文图 3。原论文 Figure 3:：“Chunk profile and oracle probe. (a) Mean post-audio latency by chunk type under AR; dashed line: 1 s deadline.”。*

这张图确实可见的是，左图工具调用块的平均音频到达后延迟远高于 1 秒虚线，聆听块则很低；中图静音草稿在全部块与说话块上接受率接近满格，在工具调用与用户说话时段有所下降；右图不匹配块中首词元分叉占比很高。它支持论文的两个判断：大多数块可用静音起草覆盖，分叉集中在首词元因而可用一条次优分支覆盖，但也说明在用户正在说话的时段接受率会下降，这是后文温度与并发分析需要留意的适用边界。

### 用户感受到的等待变短了吗，最大滞后如何

论文进一步测量用户能感知的两种延迟。回应起始延迟指从回答的第一个说话块音频到达，到思考部分输出结束的时间；工具调用延迟指从工具调用块音频到达，到调用结束的时间。下表比较自回归与本文方法在这两种延迟上的墙钟时间，数值越小越好。

| Model | All | Tool call | User speech | First token |
| --- | --- | --- | --- | --- |
| Streaming SLM | 98.3 | 80.0 | 94.2 | 95.8 |
| Gander | 99.5 | 34.0 | 99.5 | 85.7 |
| Realtime-Venus | 83.3 | – | 37.9 | 86.9 |
| LWS | 99.9 | – | 100.0 | 100.0 |

表中可见回应起始延迟平均下降约 73%，从自回归下的 417 毫秒到 1089 毫秒降到 74 毫秒到 241 毫秒，接近人类轮次间隔约 200 毫秒。工具调用延迟从 2623 毫秒和 1827 毫秒分别降到 112 毫秒和 513 毫秒。限制是 Realtime-Venus 与 LWS 在这些会话的贪心解码下没有工具调用可比，且回应起始延迟是八任务平均，单任务波动需查附录。

另一组最大滞后比较回答了是否跟上实时的问题。下表比较每会话相对音频的最大滞后，报告会话平均、会话最大值与滞后超 1 秒的会话占比，三者都是越小越好，数据来自工具调用任务。

| Model | Mean | Lagging | Mean | Max | Lagging |
| --- | --- | --- | --- | --- | --- |
| Streaming SLM | 568 | 35 | 0 | 0 | 0 |
| Gander | 444 | 9 | 42 | 675 | 0 |
| Realtime-Venus | 1 | 0 | 0 | 0 | 0 |
| LWS | 430 | 20 | 55 | 2168 | 1 |

自回归下 Streaming SLM 最大滞后达到 2619 毫秒，35% 会话滞后超 1 秒，LWS 最大滞后达到 3966 毫秒；本文方法在 2 个模型上把平均滞后降到 0，把 Gander 与 LWS 的平均滞后降到 42 毫秒和 55 毫秒，滞后超 1 秒的会话最多占 1%。论文据此报告平均最大滞后下降 94.4%。限制是这是在单会话回放与 1 秒块条件下的结果，并发增加或块时长改变时滞后会变化。未胜出的基线在这里没有改变滞后趋势，因为它们在说话块上很少 1 次接受多个词元。

### 静音起草、假设池与分支各自贡献了什么

消融按 Llama Questions 测说话块、按工具任务测工具调用块，逐步加入 3 个组件。下表报告相对自回归的加速比，数值越大越好，用于区分短输出与长输出对不同组件的依赖。

| Model | Onset | Tool | Onset | Tool |
| --- | --- | --- | --- | --- |
| Streaming SLM | 417 | 2623 | 74 | 112 |
| Gander | 763 | 1827 | 228 | 513 |
| Realtime-Venus | 565 | – | 241 | – |
| LWS | 1089 | – | 204 | – |

只加静音起草时，说话块已有 2.64 倍到 2.88 倍加速，工具调用只有 1.21 倍到 1.42 倍，说明单个等待窗口够覆盖短输出，不够覆盖几十词元的调用。加入假设池后，Streaming SLM 工具调用从 1.42 倍升到 22.04 倍，Gander 从 1.21 倍升到 2.04 倍，说明跨块旧草稿已包含调用的大部分内容。再加次优分支后，Gander 工具调用从 2.04 倍升到 3.45 倍，Streaming SLM 从 22.04 倍升到 23.41 倍，说明分支主要处理首词元分叉，而池子已覆盖充分时分支增量较小。未胜出项是 3 个音频到达后才起草的基线，它们在说话块上很少匹配新回应，因而加速接近 1。

读图说明：下面这张深入分析图把输出长度、采样温度与并发数放在一起，适合判断方法在偏离主设置时是否仍然有效。

> **看图路径：** 1. 先看左图输出变长时自回归所需前向次数的上升趋势；2. 再看中图温度升高时两类块加速比的变化；3. 最后看右图并发会话数增加时加速比的保持情况

[![原论文 Figure 4：In-depth analysis on Streaming SLM (FDB v3).](https://arxiv.org/html/2611.06982v1/fig_analysis.svg)](https://arxiv.org/html/2611.06982v1/fig_analysis.svg)

*论文图 4。原论文 Figure 4:：“In-depth analysis on Streaming SLM (FDB v3).”。*

这张图确实可见的是，左图自回归所需前向随输出长度快速上升到几十次，而本文方法在 2 到 128 词元范围内只需约 1.0 到 1.4 次；中图温度从 0.3 升到 1.0 时说话与工具调用加速比下降但仍大于 1；右图单卡并发从 1 增到 4 时说话块仍有约 2.0 倍加速，工具调用从约 22.7 倍降到约 10.5 倍。它说明长输出是方法最占优的区间，温度升高与并发增加会缩短可接受前缀与起草时间，但尚未改变快于自回归的结论，代价是长调用的增益对并发更敏感。

### 哪些条件下结论不再成立

论文明确了 3 个适用边界。第一，方法面向低并发、延迟敏感部署，等待窗口随共享显卡的会话数增加而缩小，多会话实验里并发增加会减慢起草，长工具调用的增益下降较多。第二，评估只比较思考部分，不比较语音合成部分，因为 4 个模型的合成方式不同。第三，公式针对块之间有等待窗口的块交错结构，像每 80 毫秒解码 1 帧的并行流结构需要另行设计。

还有两点需要研究生注意。回应质量对比在 bfloat16 下用 AlpacaEval 评委打分，两种方法差距在 0.1 分以内，float32 下几乎逐词元相同，但这不等于人工听感评价，自动分不能替代人工评价。工具调用的极高加速依赖用户请求跨越多块、旧草稿已包含调用内容的条件，若调用完全突发且历史无覆盖，增益会回落到单窗口起草的水平。

采样温度也是边界之一。温度升高后，采样词元更常偏离贪心草稿，可接受前缀变短，加速比下降。论文在 0.3 到 1.0 范围内仍快于自回归，但更高温度或更开放的采样策略需要重新测量，不能直接推广。

### 复现第一步要做什么，需要哪些信息

复现应从回放装置做起：按论文的会话清单把音频按 1 秒块逐块送入各模型自带运行时，在单张 A100、bfloat16、贪心、批量为 1 的条件下，先复现自回归按块类型的音频到达后延迟与截止时间错过情况，再接入静音起草与验证。关键超参数是块时长、起草上限、池子片段长度与匹配规则，以及起草预算按块时长减去上一块实测延迟的计算方式，超出预算要计入音频到达后延迟，不能只算验证时间。

来源方面，论文提到会发布会话清单、回放装置与评测脚本，但本次收到的证据中没有完成链接验证的作者资源，因此不能写成代码或模型已公开。4 个模型里公开模型的运行时与自研模型的权重需分别确认，思考部分与说话部分的拆分也要与论文一致，否则延迟不可比。评委打分用的模型与量表需按附录固定，否则质量对比会漂移。

复现时建议先跑通一个语音问答任务的说话块加速，再跑工具调用任务的长调用加速。前者验证静音起草与验证逻辑，后者验证假设池的跨块续写。若长调用加速远低于论文值，应检查池子是否保留了 earlier 块的草稿，以及片段匹配是否按后缀最长匹配实现，而不是只验证当前块的草稿。

### 什么时候值得尝试，还缺哪项验证

当你的全双工模型已采用固定块交错结构、聆听块有明显等待时间，而说话与工具调用的串行生成成为主要延迟时，这个方法值得尝试。短回应能更快起稿，跨越多块的长工具调用更能从假设池受益，且它是无损的，贪心下输出与自回归一致，随机采样下保持目标分布。代价是运行时要维护缓存回滚、池子索引与分支解码，并发高时等待窗口会被压缩。

还缺的验证包括：不同块时长与不同硬件下的滞后曲线、用户说话重叠更严重时静音假设的接受率、人工听感与任务成功率是否随延迟缩短而提升，以及思考部分加速传导到端到端语音的实际体验。下一步可按论文建议尝试超越数字静音的输入假设，例如利用流式声学特征起草，但那已超出本文证据，只能作为待验证方向。

对刚入门的读者，最可复述的关键步骤是四句：等音频时用静音先写草稿，留好历史草稿池并加一条次优首词元分支，音频到了用 1 次前向验证，错了只补错后部分。记住成立条件：低并发、块交错、有空闲窗口、贪心或低温采样下效果最稳，长调用需要跨块历史覆盖。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.06982v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-09 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-09/)
