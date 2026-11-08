---
title: "Decode Before You Hear: Speculative Listening for Chunk-Interleaved Full-Duplex Speech Language Models"
date: 2026-11-06
draft: false
tags: [全双工语音交互, 语音代理规划与工具使用, 动态计算与早退, 基准测试, 实时处理]
categories: [论文速递]
description: "针对固定时长分块同时听说的语音语言模型在说话与工具调用块上串行解码超时的问题，论文用听块空闲时间在静音假设下预写下一块输出并在真实音频到达时一次验证，在八任务回放基准上把说话块延迟降到约三分之一并把最大落后时间平均减少 94.4%，代价是空闲期要多做草稿计算且高并发下收益下降。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.06982"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "没听到下一块音频时模型能先写好要说的话吗"
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
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "针对固定时长分块同时听说的语音语言模型在说话与工具调用块上串行解码超时的问题，论文用听块空闲时间在静音假设下预写下一块输出并在真实音频到达时一次验证，在八任务回放基准上把说话块延迟降到约三分之一并把最大落后时间平均减少 94.4%，代价是空闲期要多做草稿计算且高并发下收益下降。"
paper_digest_authors: [{"affiliations":["The Chinese University of Hong Kong, Shenzhen, China","Amphion Technology Co., Ltd"],"name":"Yutong Bian"},{"affiliations":["Amphion Technology Co., Ltd"],"name":"Yanglin Zhang"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen, China"],"name":"Yuxiang Wang"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen, China"],"name":"Luoyuan Zhang"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen, China"],"name":"Rongshen He"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen, China"],"name":"Zihao Wang"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen, China"],"name":"Junwen Qiu"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen, China","Amphion Technology Co., Ltd"],"name":"Jiaqi Li"},{"affiliations":["The Chinese University of Hong Kong, Shenzhen, China","Amphion Technology Co., Ltd"],"name":"Zhizheng Wu"}]
paper_digest_abstract_sha256: "eeb8995e1aae4057971cadc3fec6efbe9fcf8ba8cbeea9b89bd009097a63c6e0"
paper_digest_sidecars: {"citation.bib":{"sha256":"31a440a3dbf4da406f2c0ce89250713d5e5dea3c40338bf2d8f42e348b217375","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06982/citation.bib"},"citation.json":{"sha256":"b0cd7c73b5fc7e9bf658a7b2ba83887e1967e6e6a1e67e75aee307ce863a6869","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06982/citation.json"},"citation.ris":{"sha256":"9e699ee95796c2a4bcb7787c219b219dbad6ded71b7b56584ed0c00dc1513a38","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06982/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"ab7f4a0c436659ca31b4b3f7dce8e30c70125bb6593078cb2e3208b6d0e82ab5","url":"/audio-paper-digest-blog/client/papers/2026-11-06/2611-06982/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "4db3692b384f2f7718585a70af9d01c6b8e7d6540ade2850ed00e6ecadee35a1"
paper_digest_api_reader_plan_sha256: "093c3592469f2e3475a32c62ff1eb2f8cc2b542b048589c36a03999e7c83097a"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "071f0dddf3d884079bc8ff4bf7554b7f6a37039accbd23014c409138755c5032"
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

# 📄 没听到下一块音频时模型能先写好要说的话吗

> 英文题目：*[Decode Before You Hear: Speculative Listening for Chunk-Interleaved Full-Duplex Speech Language Models](https://arxiv.org/abs/2611.06982v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [全双工语音交互](/audio-paper-digest-blog/papers/?concept=task.full-duplex)；[语音交互](/audio-paper-digest-blog/papers/?concept=task.speech-interaction) → [语音代理规划与工具使用](/audio-paper-digest-blog/papers/?concept=task.voice-agent-planning)
- **研究方法**：[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression) → [动态计算与早退](/audio-paper-digest-blog/papers/?concept=method.dynamic-computation)
- **研究条件**：[实时处理](/audio-paper-digest-blog/papers/?concept=setting.real-time)
- **研究产物**：[基准测试](/audio-paper-digest-blog/papers/?concept=artifact.benchmark)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


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

块交织全双工语音语言模型把对话切成固定时长的数据块，每块要在下一块音频到达前完成编码与解码，超时会让后续块整体滞后。听块只处理音频而留下70%-89%的等待时间，说块和工具调用块则需逐词元串行生成，长工具调用在自回归解码下需要数十次前向传播。Speculative Listening先在空闲窗口内用目标模型自身按静默输入为下一块起草输出，在真实音频到达时用一次音频预填充前向传播同时验证草稿，只保留匹配前缀并从失配处继续解码。跨四模型的预言式探测发现95.3%的数据块在静默假设下输出逐词元相同，失配块中约88%在首个输出词元即分叉，正文pooled统计为87.7%，方法据此把先前窗口的未采纳草稿存入跨块假设池供后续块验证，并为次优首词元增加分支。在TickTock-Bench上该方法把说块平均延迟加速2.6-2.8倍，把Streaming SLM工具调用块加速23.41倍，把响应起始延迟平均降低73%至74-241 ms，把每会话最大滞后平均降低94.4%。该结论只适用于低并发时延敏感的块交织部署，多会话共享GPU时空闲窗口缩小使长调用加速下降，只评测了文本思考器而未比较语音合成器差异，也未验证Moshi类并行流架构。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 全双工语音模型要同时听和说难在哪

刚进入语音对话的读者可以先把任务想成一条不断到来的音频流。用户一直在说话，模型也要在合适的时候插话、回答，还可能调用工具查信息。论文研究的是其中一类实现，称为块交织全双工语音语言模型。它把时间切成固定时长的小块，例如每块 1 s。每块到达一段新的音频编码和可能并行的文本输入，模型要结合之前所有块的历史，解出本块的输出词元。输出可能是继续听的控制词元，也可能是要说的内容，还可能是结构化的工具调用。

关键约束是实时性。下一块音频会按真实时间到达，块时长就是硬截止。如果本块算得太久，下一块只能推迟处理，对话就整体落后于真实时间。用户会感觉模型反应迟钝，听到的用户语音也是过时的，回答就显得文不对题。论文把从本块音频到达开始到本块算完的时间称为音频到达后延迟，缩短它就是本文的直接目标。

这里的输出最终要变成声音。4 个被测模型都分成两部分：负责写文本词元的主干和把文本变成音频的语音解码器。论文只优化和测量前者，因为不同模型的语音合成方式不同，放在一起比会混入无关因素。理解这一点很重要，后面所有加速比、延迟数字都是主干解码的耗时，不含语音合成。

### 已有加速方法为什么没用到听话时的空闲

经典的无损推测解码是等输入齐了再加速。它先用小模型、额外预测头或上下文中找 n-gram 便宜地写几个候选词元，再用目标模型 1 次前向验证接受前缀，1 次提交多个词元，输出分布不变。提示查找解码、词元回收、前瞻解码都属于这一路，它们都在音频到达之后才开始写草稿。

语音对话里也有人利用听的时间，但路线不同。一种是训练模型在听的时候输出思考词元，另一种是在级联式轮流系统中用不完整用户输入预生成候选回答，还有用快速双工模型先写回答开头。这些方法需要额外训练、级联流水线或独立草稿模型。在端到端的块交织模型里，听块中等待下一块音频的那段空闲还没有被用来写下一块的输出，论文正是补上这一环。

比较时要注意运行阶段是否相同。等输入齐了再写草稿，和在输入到达前就假设输入写草稿，是两种不同的输入条件。论文的基线特意选了 3 种训练无关、无需额外模型、音频到达后才运行的方法，与自回归放在同一回放装置和同一 GPU 上比较，这样才能看出提前写草稿带来的增量。

### 不同块的工作量为什么差别这么大

论文先对 4 个块交织模型按块逐个测量自回归解码。听块只处理新到音频并输出很少的控制词元，算完后要等下一块音频，在块时长中闲置了 70–89% 的时间。说话块和工具调用块则要逐个词元串行生成，每多一个输出词元就多 1 次前向，而 1 次处理几个词元的前向耗时与处理一个词元差不多，主要受加载权重和 KV 缓存的访存带宽限制。工具调用往往有几十个词元，测到音频到达后 1.8–2.6 s 才完成，全部错过截止。带书面通道的模型在 95% 的说话块上也错过截止。回答开始前的解码延迟在自回归下平均增加 417–1089 ms，而人类轮替间隙约 200 ms。

**时间块 × 空闲窗口：** 时间块是把连续对话切成固定时长的处理单位，每块到点必须交出输出；空闲窗口是听块处理完新到音频后等待下一块音频的时间，本文把它从被浪费的等待变成提前写草稿的算力。

**音频到达后延迟 × 块截止时间：** 音频到达后延迟是从本块音频到达算起到本块计算结束的时间，随输出变长线性增长；块截止时间就是块时长，超过它会拖慢后面所有块，论文的加速都是为了把前者压到后者以内。

下面这张图把上述不对称和预言探测结果画在一起，读图时重点看空闲与超时的对比以及接受率的高低。

> **看图路径：** 1. 看左图虚线截止线与工具调用柱超出截止线的高度；2. 看中图静音草稿在全部块和说话块上的接受率高度；3. 看右图不匹配块中首词元分歧占比的高度

[![原论文 Figure 3：Chunk profile and oracle probe.](https://arxiv.org/html/2611.06982v1/fig_observations.svg)](https://arxiv.org/html/2611.06982v1/fig_observations.svg)

*论文图 3。原论文 Figure 3:：“Chunk profile and oracle probe. (a) Mean post-audio latency by chunk type under AR; dashed line: 1 s deadline.”。*

左图显示工具调用块远高于 1 s 截止线，中图显示静音草稿在多数块上接受率高，右图显示不匹配几乎都发生在首词元。结合原文说明，工具调用柱和部分模型的左图柱用的是工具调用任务，其余用的是问答任务，Realtime-Venus 和 LWS 没有工具调用块。也就是说，闲的块很闲，忙的块忙到超时，这是后面把闲时算力挪给忙块的依据。

### 核心想法是没听到时先按静音写听到后一次验完

既然听块有大段空闲，能否用它写下一块的输出。难点是下一块音频还没到。论文取最简单的假设：把下一块音频替换成一段静音且无文本输入，称为静音假设。模型在空闲里按这个假设往下写，真实音频到达后，再用 1 次处理音频加草稿的前向验证整条草稿，接受到第一个不匹配为止并纠正那个位置，然后从纠正处继续。

为判断这个简单假设是否可行，论文做了一个不限时的预言探测：每个块解两次，1 次用真实音频，1 次用静音，看输出是否逐词元完全相同。4 模型汇总后，95.3% 的块完全相同；在不相同的块中，87.7% 在第一个输出词元就分叉，而首词元在多数模型里正是决定继续听还是开始输出的位置。这个分布直接决定了方法的形状：主草稿按静音写，再加一条从次优首词元出发的分支覆盖首词元分歧。

读下面示意图时，把上下两排当成同一时间线的两种跑法来对比，它说明时间从哪里省出来。

> **看图路径：** 1. 先看上排自回归在块 t 如何一个词元一次前向并错过截止线；2. 再看下排如何把虚线草稿移到空闲窗口并在块 t 用一次前向验证；3. 对比两排在块 t 加 1 开始时刻的对齐位置理解落后如何累积

[![原论文 Figure 1：Decoding in a chunk-interleaved full-duplex speech language model.](https://arxiv.org/html/2611.06982v1/fig1_overview.drawio.svg)](https://arxiv.org/html/2611.06982v1/fig1_overview.drawio.svg)

*论文图 1。原论文 Figure 1:：“Decoding in a chunk-interleaved full-duplex speech language model.”。*

上排自回归在块 t 逐词元各做 1 次前向，长输出拖过截止线并让块 t 加 1 推迟；下排在前一块的空闲里按静音写虚线草稿，本块到达后用 1 次前向全部验证并标出接受，整体在截止线内完成。草稿的前向发生在音频到达前，音频到达后的前向次数不再随输出长度线性增长，这是全文加速的来源。

### 静音草稿怎么写真实音频到后如何验证

先明确自回归的计算。记第 t 块输入为音频编码加并行文本，输出为若干词元，历史为之前所有块的输入输出序列。在贪心解码下，第 i 个输出词元取在历史、本块真实输入和本块已写前缀条件下概率最大的词。

\[y_{i}=\arg\max_{y\in\mathcal{V}}\,p_{\theta}\left(y\mid\mathbf{x}_{\lt t},\mathbf{a}_{t},\mathbf{y}_{\lt i}\right).\]

公式中 p 是模型参数决定的下一个词元分布，历史、本块真实输入和已写前缀是条件。它要表达的是逐词元向前、每步依赖前文的因果过程。

**静音假设 × 验证：** 静音假设是用一段无语音无文本的输入代替还没到达的下一块音频，让模型先按历史上下文往下写；验证是真实音频到达后用一次前向同时处理音频和草稿，只保留与真实输入下输出一致的前缀，组合后提前写不改变最终输出。

静音草稿把上式中的真实输入换成静音输入，其余相同，贪心地写到块结束或空闲用完，得到长度为 γ 的主草稿。

\[\tilde{y}_{i}=\arg\max_{y\in\mathcal{V}}\,p_{\theta}\left(y\mid\mathbf{x}_{\lt t},\mathbf{a}_{\text{sil}},\tilde{\mathbf{y}}_{\lt i}\right),\quad i=1,\dots,\gamma,\]

其中波浪线表示草稿词元，静音块输入代替真实输入。写草稿的前向都发生在音频到达前，不计入音频到达后延迟。音频到达后，把 KV 缓存回滚到历史末尾，用 1 次前向处理真实音频加整条草稿，得到每个草稿位置的目标分布。贪心验证按顺序接受，直到第一个与目标最优不一致的位置，提交已接受前缀加纠正词元，后续继续解码。

\[n=\min\left(\left\{\,i-1\mid 1\leq i\leq\gamma,\ \tilde{y}_{i}\neq\arg\max p_{i}\,\right\}\cup\{\gamma\}\right).\]

公式中 n 是接受的词元数，大括号里找第一个不匹配位置的前 1 位，若全匹配则取 γ。它保证每次前向至少提交一个词元，音频到达后前向数不会超过自回归，且全匹配时音频到达后只需很少前向。随机采样时改用推测采样验证，以保持目标分布，贪心只是其特例。

下面这张总览图把静音、分支、假设池和两次前向的配合画全了，重点看数据从左向右如何流动。

> **看图路径：** 1. 看左上静音与真实音频得到相同输出的示意对应第一个观察；2. 看右上首词元不同的示意对应第二个观察；3. 沿下方从上下文加静音到假设池再到两个前向的箭头看数据流

[![原论文 Figure 2：Overview of Speculative Listening.](https://arxiv.org/html/2611.06982v1/fig_method.drawio.svg)](https://arxiv.org/html/2611.06982v1/fig_method.drawio.svg)

*论文图 2。原论文 Figure 2:：“Overview of Speculative Listening. Observation 1 motivates drafting under silence and verifying the draft in the audio prefill pass.”。*

上半两格分别对应两个观察：多数块静音与真实输出相同，剩下少数多在首词元不同。下半左框在空闲里用同一模型写主草稿和次优分支并送入假设池，右框在音频到达后第 1 次前向做预填加验证，第二次前向从纠正处继续。被标红纠正的词元是验证改写的位置，后面打勾的是继续接受的词元。

### 长工具调用写不完时历史草稿和第二分支如何补上

一个空闲窗口能写完短说话块，但几十词元的工具调用往往写不完。论文的办法是把会话中所有历史草稿留下来，组成按 n-gram 索引的假设池。用户请求跨多个块，前面块按静音写的草稿里可能已包含后来调用的大部分内容。每次前向后，运行时用当前输出后缀在池中和会话历史输出中找最长匹配的 n-gram，把它的后续拼到下 1 次前向之前，这样音频到达后的前向只随所有草稿都没有的词元和拼入的池片段增长。

**假设池 × 次优首词元分支：** 假设池保存会话中所有历史草稿及其后续，供后续前向按后缀匹配续写；次优首词元分支是从静音下概率第二高的首词元再写一条草稿，专门覆盖真实音频把首词元改掉的分歧，两者配合让长工具调用也能复用旧片段。

当主草稿在空闲结束前写完，模型再从静音下概率第二高的首词元出发写第二条草稿并加入池中。这条分支不增加音频到达后的必做工作，只在主草稿首词元被真实音频推翻时提供一条现成的替代起点。消融显示它在主草稿分歧多的模型上提升明显，在池已覆盖绝大部分的模型上增量较小，符合其定位是补首词元分歧而非重写整段。

举例来说，用户连说三块要订早班机，模型在用户还在说的块里按静音写的草稿就已包含带已听细节的调用，虽在当时被验证在首词元拒绝，但留在池中。等用户说完的那一块到达，音频前向直接验证通过整段调用，只用约 0.1 s，而自回归要逐词元写 2.6 s 并错过截止。这种跨块复用是工具调用加速远高于说话块的原因。

### 没有训练时实际执行的是哪些计算

本论文没有训练任何新模型，也没有为草稿训练额外预测头，4 个被测模型的参数全程冻结。所谓训练无关是指方法不改权重、不加参数，直接用目标模型自身当草稿模型。实际执行的计算分为两类。音频到达前，用同一模型在静音输入下自回归写主草稿和可能的次优分支，并维护假设池的 n-gram 索引。音频到达后，用目标模型做音频预填加草稿验证的前向，按接受数提交并纠正，必要时从池中取续写片段拼入下 1 次前向。

需要提醒的是，无训练不等于输出确定。在 bfloat16 下舍入可能改变输出，论文用 float32 对比证明在精确算术下与自回归逐词元相同，在 bfloat16 下用 AlpacaEval 评委分验证差距小于 0.1 分。参数冻结只说明没有学习步骤，不能推出系统延迟或并发下一定稳定，后面的多会话实验正是为此而做。原文未报告梯度路径、优化器或超参数，因为根本没有训练过程，缺的不是实现细节，而是本来就不存在的训练环节。

### 在什么任务模型和计时规则下比较

为在相同块截止下比较解码方法，论文引入 TickTock-Bench。它覆盖语音推理、对话动态和智能体工具 3 类共 8 个任务，包括事实问答、开放回答、多步推理、轮替行为、重叠语音和工具调用，总计 760 个会话、15883 个 1 s 块。回放装置按会话逐块送入模型自带运行时，1 次跑一个会话，单张 A100，按输出把每块标为听、说或工具调用块。主要指标是每类块音频到达后延迟相对自回归的加速比，墙钟计时且不含语音合成。空闲前计算计入空闲窗口，超出空闲预算的部分计入音频到达后延迟。自回归和基线在空闲里让 GPU 空闲。

**Thinker × Talker：** Thinker 是负责解码文本词元的主干，决定听还是说以及说什么，本文所有方法只比较这一部分；Talker 是把文本词元或隐状态转成声音的语音解码器，四个模型的 Talker 实现不同，评测时不计入比较以避免混淆。

4 个模型块时长都是 1 s，包括自训的 Streaming SLM、公开的 Gander 和 Realtime-Venus，以及可在说话块同时解书面通道的 LWS。基线是自回归加 3 种音频到达后才写草稿的免训练方法，均以链式验证运行以适配模型运行时。解码用贪心、batch 为 1、bfloat16，只测主干。工具调用在 FDB v3 上对 Streaming SLM 和 Gander 报告工具调用块，对另 2 模型因无调用而报告说话块。延迟落后按每块超时累积计算，回答开始和工具调用延迟包含此前累积的落后。

### 说话块和工具调用块到底快了多少

要回答的核心问题是把空闲算力提前用掉后，音频到达后的串行前向减少了多少。论文在 4 模型八任务上统一测了平均音频到达后延迟的加速比，并报告每次目标前向提交的词元数。下面的表摘出 Streaming SLM 上 Llama 问答、工具任务和平均加速等列，比较条件是同一回放、同一硬件、贪心解码，指标越大越好。

| Model | Method | Llama Q. | FDB v3† | #MAT | Avg. |
| --- | --- | --- | --- | --- | --- |
| Streaming SLM | PLD | 1.01 | 1.01 | 1.01 | 1.02 |
| Streaming SLM | Token Recycling | 1.00 | 1.02 | 1.01 | 1.02 |
| Streaming SLM | Lookahead | 0.98 | 1.07 | 1.03 | 0.99 |
| Streaming SLM | Speculative Listening | 2.87 | 23.41 | 2.63 | 2.76 |

表中本方法在说话任务上达到 2.6 左右的加速，而 3 个上下文 n-gram 类基线多在 1.0 附近。机制解释是目标模型按静音写的草稿大多与真实输出一致，验证在音频前向内 1 次省掉每个词元的 1 次前向，输出越长省得越多；基线在音频到达后从上下文找 n-gram，很少命中新回答。限制是 Realtime-Venus 在用户说话时接受率明显更低，LWS 的书面通道使说话块更长，加速形态与另 2 模型不完全相同，完整八任务数值见原文大表。

### 整体落后真实时间的情况改善了吗

加速最终要落到是否跟得上实时音频。论文按每块超时累积计算落后，报告每个会话最大落后于音频的时间，包括均值、最大值和超过 1 s 的会话占比。下面比较自回归与本方法在工具调用任务上的毫秒数与占比，数值越小越好。

| Model | Mean | Lagging | Mean | Lagging |
| --- | --- | --- | --- | --- |
| Streaming SLM | 568 | 35 | 0 | 0 |
| Gander | 444 | 9 | 42 | 0 |
| Realtime-Venus | 1 | 0 | 0 | 0 |
| LWS | 430 | 20 | 55 | 1 |

表中自回归在 Streaming SLM 上平均落后 568 ms、最大达 2619 ms、35% 会话落后超 1 s，在 LWS 上最大达 3966 ms；本方法在 2 模型上均值清零或降到 42–55 ms，最多 1% 会话落后超 1 s，平均减少 94.4%。这说明长输出省下的前向直接减少了跨块累积的排队。但要注意这是单会话单卡贪心下的结果，换硬件、换精度或高并发都会改变绝对毫秒数，加速比的方向保留但大小会变。

### 用户听到的等待减少到了什么水平

论文还测了用户感知的两个延迟。回答开始延迟是从回答首个说话块音频到达算到主干输出结束，工具调用延迟是从调用块音频到达算到调用结束，均含此前累积落后。下面比较自回归与本方法在墙钟下的毫秒数，数值越小越好，横线表示该模型无工具通道。

| Model | Onset | Tool | Onset | Tool |
| --- | --- | --- | --- | --- |
| Streaming SLM | 417 | 2623 | 74 | 112 |
| Gander | 763 | 1827 | 228 | 513 |
| Realtime-Venus | 565 | – | 241 | – |
| LWS | 1089 | – | 204 | – |

本方法把回答开始延迟平均降低 73%，从 417–1089 ms 降到 74–241 ms，接近人类约 200 ms 的轮替间隙；工具调用从 2623 ms 降到 112 ms、从 1827 ms 降到 513 ms，平均在块时长内就绪。这说明音频到达后前向的减少直接提前了首包语音和工具发出的时刻。但评测只测主干不含语音合成，若直接测到喇叭出声，会得到更大的绝对延迟，不能与本表直接对比。

### 静音草稿本身在哪些块上容易被接受

上述延迟下降的前提是静音草稿本身可接受。论文用不限时预言探测报告按块类型的接受率，以及不匹配块中首词元分歧的占比。下面摘出全部块、工具调用、用户说话和首词元四列，数值越大表示静音假设越成立，最后一列越大表示越值得只补首词元分支。

| Model | All | Tool call | User speech | First token |
| --- | --- | --- | --- | --- |
| Streaming SLM | 98.3 | 80.0 | 94.2 | 95.8 |
| Gander | 99.5 | 34.0 | 99.5 | 85.7 |
| Realtime-Venus | 83.3 | – | 37.9 | 86.9 |
| LWS | 99.9 | – | 100.0 | 100.0 |

表中全部块接受率在 3 模型上达 98% 以上，在 Realtime-Venus 上为 83.3%，用户说话时仅 37.9%，说明来话更新上下文时会推翻静音假设；不匹配块中首词元分歧占 85.7–100%，支持只加一条次优首词元分支的设计。但要注意这是不限时探测的上限，实际部署中空闲预算、并发和采样都会打折，不能把接受率直接当成在线加速比。

### 输出越长采样越随机并发越高时还成立吗

深入分析要看前向次数与输出长度、采样温度和并发的关系。左图按输出长度统计音频到达后前向次数，中图改变采样温度看加速比，右图增加单卡并发会话数看墙钟加速，读图时注意纵轴是对数或加速比方向。

> **看图路径：** 1. 看左图输出变长时自回归前向次数上升而本方法保持在 1 附近；2. 看中图温度升高时说话块与工具调用块加速比如何回落；3. 看右图并发会话数增加时两类块加速比的下降幅度

[![原论文 Figure 4：In-depth analysis on Streaming SLM (FDB v3).](https://arxiv.org/html/2611.06982v1/fig_analysis.svg)](https://arxiv.org/html/2611.06982v1/fig_analysis.svg)

*论文图 4。原论文 Figure 4:：“In-depth analysis on Streaming SLM (FDB v3).”。*

左图本方法在 2–128 词元输出下音频到达后只需 1.0–1.4 次前向，而自回归从 2 次涨到 73.6 次；中图温度从 0.3 升到 1.0 时说话块加速从 2.1 倍降到 1.4 倍、工具调用从 13.3 倍降到 5.4 倍，因为采样越随机越偏离贪心草稿；右图单会话到 4 并发时说话块从 2.9 倍降到 2.0 倍、工具调用从 22.7 倍降到 10.5 倍，因为并发拖慢草稿书写，长调用写不完。这些边界说明加速成立依赖低并发、低温或贪心以及足够的空闲预算。

### 哪些情况下方法会打折或不适用

论文明确了三点限制。第一，面向低并发、延迟敏感部署。空闲窗口随共享 GPU 的会话数或组 batch 增大而缩小，多会话实验已显示 4 并发时工具调用加速减半，工具调用块超时率从 100% 降到 2.9% 但仍非零。高并发吞吐优先的服务需要另行权衡，因为草稿计算本身占用本可服务其他会话的算力。

第二，只比较主干。语音解码器在 4 模型中实现不同，若计入端到端声音延迟，数字会混入与解码方法无关的差异。复现时若直接测到喇叭出声，会得到更大的绝对延迟，不能与论文表格直接对比。

第三，只针对块交织且块间有空闲的架构。像每 80 ms 音频帧都解码的并行流架构没有这样的空闲窗口，需要另一套形式化。此外评测用单 A100、bfloat16、贪心为主，换硬件、换精度或高温采样都会改变绝对毫秒数，加速比的方向保留但大小会变。

### 复现第一步做什么需要补哪些验证

值得尝试的场景是块时长固定、听块空闲明显、回答或工具调用偏长且对首字延迟敏感的实时对话。如果你的系统听块已很忙或并发很高，应先测空闲占比，低于论文的 70–89% 时预期收益要下调。

复现第一步是搭回放：按会话逐块送音频，用模型自带运行时记录每块音频到达后延迟、超时率和最大落后，单会话单卡先跑自回归基线。确认听块确有空闲后，再实现静音替换、KV 回滚、1 次前向验证和 n-gram 假设池，空闲超预算的部分必须计入音频到达后延迟，否则会虚高加速比。随机采样评测要切换到推测采样验证并固定温度。

还需要补的验证包括换硬件和精度的延迟重测、高并发下的超时分布、用户说话打断时的接受率，以及端到端含语音合成的主观听感。论文未公开代码模型数据，来源清单显示没有完成 HTTPS 验证的作者资源，因此不能声称可直接下载运行，一切需按原文重写。评委分只在 AlpacaEval 上用单一评委测开放回答，不能当成全面质量证明。

### 一句话总结什么时候用代价是什么

把全文压缩成可操作的判断：当对话按固定块推进、听时有空可借、输出偏长时，用目标模型自身在静音假设下提前写草稿并在真实音频到达时 1 次验证，能把音频到达后的串行前向压到接近常数。证据支持的是 4 个模型、八任务、单卡贪心下的说话块约 2.6–2.8 倍、工具调用最高 23 倍、回答开始延迟降 73% 到 74–241 ms、最大落后平均降 94.4%，且 float32 下与自回归逐词元一致。

代价是空闲期要多做草稿前向和池查找，高温采样、用户强打断、多会话共享都会侵蚀收益。容易产生的误解是把预言探测的 95.3% 接受率当成在线保证，或把工具调用 23 倍当成所有任务的平均，实际上前者是不限时的上限，后者是长输出省前向多的特例。下一步值得验证的是用流式声学特征等更准的假设代替纯静音，以及在保持低延迟的同时如何与并发吞吐共存。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.06982v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-06/)
