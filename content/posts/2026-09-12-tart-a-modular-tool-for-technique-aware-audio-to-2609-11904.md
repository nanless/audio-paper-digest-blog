---
title: "TART: A Modular Tool for Technique-Aware Audio-to-Tablature Guitar Transcription"
date: 2026-09-12
draft: false
tags: [音乐转录, Transformer, 音乐, 零样本]
categories: [论文速递]
description: "TART 把吉他音频转谱拆成音频转 MIDI、九类技巧分类、音频条件弦品指派和 MusicXML 生成四步，用 81.35% 的平均音频转 MIDI F50 与 71.8% 的弦品 Tab F1 实现零样本领先，代价是第一步误差会向后传播约 17.75 个百分点。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.11904"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "从波形到可弹指法：TART 如何把音高、技巧与弦品分四步拼成谱"
paper_digest_original_title: "TART: A Modular Tool for Technique-Aware Audio-to-Tablature Guitar Transcription"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.11904"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.11904.pdf"
paper_digest_primary_task: "音乐转录"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.transcription","label":"音乐转录"},{"facet":"method","id":"method.transformer","label":"Transformer"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"setting","id":"setting.zero-shot","label":"零样本"}]
paper_digest_primary_method: "Transformer"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "TART 把吉他音频转谱拆成音频转 MIDI、九类技巧分类、音频条件弦品指派和 MusicXML 生成四步，用 81.35% 的平均音频转 MIDI F50 与 71.8% 的弦品 Tab F1 实现零样本领先，代价是第一步误差会向后传播约 17.75 个百分点。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Akshaj Gupta"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Hwi Joo Park"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Andrea Guzman"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Shamak Gowda"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Samhita Konduri"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Jiachen Lian"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Robin Netzorg"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Gopala Anumanchipalli"}]
paper_digest_abstract_sha256: "914dff1cb2646198b76eb4b5b201643add4ef522fd33880e9396b5dd00c1a1a6"
paper_digest_sidecars: {"citation.bib":{"sha256":"d0783cd8c75a3d03bf831e756e742b21ef46c65298c103dd5cf5b41e44922065","url":"/audio-paper-digest-blog/data/papers/2026-09-12/2609-11904/citation.bib"},"citation.json":{"sha256":"3a37fa437658452b8336e99bc8c7332f9c202499f577957fb55d23b2dbefcff1","url":"/audio-paper-digest-blog/data/papers/2026-09-12/2609-11904/citation.json"},"citation.ris":{"sha256":"85a5d792eff8307d4ba10a2ef1b412ab3900eeb465abc12f15b2a226fcb88188","url":"/audio-paper-digest-blog/data/papers/2026-09-12/2609-11904/citation.ris"},"rethink-context.json":{"sha256":"dc4b2095d16baaa8935f322fdaf586bb5bf2c254dea78d1d08d365b74e3b29e8","url":"/audio-paper-digest-blog/data/papers/2026-09-12/2609-11904/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "de116f0330efc945ebd1e05ef8dbbf3f299bcdb2c9021f48a816850d8eb5344d"
paper_digest_api_reader_plan_sha256: "bca337dadfac4677a350a999c9dcfe756edd5bd29d644f8f474947b33d7ab29c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "4b56047681eeb87d578b277bb1c3e0b30c8d40f7a2b5c9b05d182087b6c39dce"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 4
paper_digest_api_reader_structured_artifacts_sha256: "382307f0248edd20ca6e76c4e815af275347df95aca2de41c7da41da36b28b77"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "4f2dfb212d5ebf126e0c83167834b21c046e6abfa13e18c7ec8d136d4e66d791"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "1f6154ff3317a465057f2b43458749d7d39de24ffe942a3b5c80602cbb12bc75"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 从波形到可弹指法：TART 如何把音高、技巧与弦品分四步拼成谱

> 英文题目：*[TART: A Modular Tool for Technique-Aware Audio-to-Tablature Guitar Transcription](https://arxiv.org/abs/2609.11904)*

> 标签：#音乐转录 | #Transformer | #音乐 | #零样本
>
> 评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 1/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Akshaj Gupta：机构信息未在 arXiv HTML 中可靠披露
- Hwi Joo Park：机构信息未在 arXiv HTML 中可靠披露
- Andrea Guzman：机构信息未在 arXiv HTML 中可靠披露
- Shamak Gowda：机构信息未在 arXiv HTML 中可靠披露
- Samhita Konduri：机构信息未在 arXiv HTML 中可靠披露
- Jiachen Lian：机构信息未在 arXiv HTML 中可靠披露
- Robin Netzorg：机构信息未在 arXiv HTML 中可靠披露
- Gopala Anumanchipalli：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

吉他音频到指板谱转录需将原始波形映射为带弦品位置与演奏技法的可演奏谱面，难点在于表现技法多样、同一音高对应多组弦品以及真实录音噪声严重。TART以四阶段流水线处理该任务：高分辨率卷积循环网络将音频转为带起止时间的音符序列，时序卷积双向长短时记忆网络为每个音符标注九类技法，音频条件化T5编码器解码器结合音符符号与音色线索分配弦品并经束搜索约束保证可弹奏性，最后用节拍估计与量化渲染为MusicXML谱面。与纯符号指法模型不同，该方法在编码器前拼接基于起音的频谱嵌入，使自注意力可利用弦径与泛音差异区分同音异弦。四个零样本基准平均结果显示音频到MIDI的F50达到81.35%，相对最强基线提升6.67个百分点，预言MIDI下弦品Tab F1达到71.8%，相对原Fretting-Transformer提升8.5个百分点，端到端Tab F1为54.08%。该结论仅适用于标准六弦吉他独奏与所测数据集分布，对无音高打击乐、多技法叠加与复杂节奏量化仍会失效。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出必须保留什么？

输入是一段 16 kHz 采样的吉他录音波形，可能是木吉他、电吉他直录，也可能是带房间混响与手机麦克风噪声的实拍。目标是输出可直接照着弹的吉他谱，即指板谱。初学者容易把这件事理解成听出音高就行，但论文强调谱必须同时保留 3 类信息。第一是时间与音高：每个音何时开始、何时结束、对应哪个 MIDI 音高、力度多大。第二是演奏技巧：这个音是滑音、推弦、泛音、闷音、颤音、击勾弦，还是无技巧的普通拨弦，甚至是否混入了脚鼓与军鼓式的打击声。第三是弦品位置：这个音高到底用哪根弦的第几品弹出，因为吉他上同一音高常常有多种按法，选错按法会让谱弹不顺。

沿一个样本走一遍有助于建立整体感。假设输入是《Tears In Heaven》副歌的一小段，包含双音与空弦低音。系统先把波形变成对数梅尔频谱，再逐帧判断 onset 与持续帧，得到一串带时间的 MIDI 音。接着对每个音截取它持续时间内的音频，算出梅尔、倒谱与色度特征，判断它是滑音还是击勾弦。同时，另一路把 MIDI 音高序列与每个音 onset 附近 200 毫秒的音色特征一起送入编码器解码器，选出每根弦按几品。

最后用节拍估计把时间对齐到十六分音符网格，把技巧符号与弦品数字一起画成 MusicXML 谱。白话说，自动音乐转录就是把声音变成符号乐谱；音频转 MIDI 只管音高时间，不管怎么按；弦品指派不管有没有听对，只管按法是否像演奏者；技巧分类是给每个音贴表情标签。

### 钢琴能做、吉他难做的三件事是什么？

钢琴转录已经有成熟路线。论文回顾了 Hawthorne 等人的双目标卷积循环网络，同时检测 onset 与帧级音高，以及 Kong 等人的高分辨率回归模型，能更精确预测起止时间。这条路线搬到吉他上遇到 3 个特有困难。第一是表情缺失：吉他大量依赖滑音、推弦、泛音与打击，以往系统只输出音高，直接丢掉演奏法。第二是音高冗余：钢琴一个键对应一个音，吉他同一音高可在不同弦品发出，现有系统常给出物理上别扭的指法。第三是录音域偏移：在干净录音室数据上训练的模型，遇到电吉他拾音器、失真与消费级噪声就明显退化。

在技巧识别一侧，已有 IDMT、AGPT、EG-IPT 等数据集分别覆盖弯音、滑音、泛音与打击的不同子集，但标签体系互不兼容。以往分类器多是前馈网络，对固定长特征向量做 1 次映射，丢掉了区分相似技巧所需的时间起伏。在弦品一侧有两条路线。音频直推路线如 TabCNN 与 FretNet，直接从帧级音频特征预测谱，没有显式音高监督，跨数据集泛化弱。符号翻译路线如 BART 式弦预测与 Fretting-Transformer，把 MIDI token 翻译成弦品 token，能给出可弹指法，但用不到同一音高在不同弦上音色不同的线索。理解这个对照很重要：TART 不是发明全新单模型，而是把噪声鲁棒的音高、时序技巧分类与音频条件指派拼成可运行流水线。

### 论文把任务拆成哪四个可检验的子问题？

论文把音频到指板谱定义为 4 个顺序子问题，每个都有明确输入输出，便于单独评测。第一个子问题是音频到 MIDI：在容差正负 50 毫秒与正负 50 音分下，正确找回尽量多的音符 onset 与音高。第二个子问题是表情技巧分类：给定已知的音符起止时间与对应音频，为每个音从 9 类中选一个技巧标签，包括弯音、击勾弦、泛音、脚鼓、闷音、普通拨弦、滑音、军鼓与颤音。第 3 个子问题是弦品指派：给定音高序列与原始音频，为每个音选 1 对弦与品，要求 onset、音高与弦都对才算对。第 4 个子问题是谱面生成：把音高、技巧、弦品与 tempo 合并，做节拍对齐与十六分音符量化，输出 MusicXML。

这种拆分的学习依赖很清晰。必须先理解 onset 容差与音高容差如何定义正确，再理解技巧标签是逐音的、弦品是逐音的，最后才能理解端到端 Tab F1 为什么同时要求三者都对。例子是教学用的：比如一个 7 品滑到 9 品的双音，如果第一步把 onset 听晚了 80 毫秒，即使第二步猜对滑音、第三步猜对弦品，端到端仍算错，因为时间已经出界。这解释了为什么流水线要单独报告 Oracle 与端到端两种分数。

### 四阶段流水线如何连接？

TART 的全称是 Technique-Aware Audio-to-Tablature Representation Tool，中文可理解为感知技巧的音频到指板谱工具。数据从左向右走 4 步。第一步用高分辨率卷积循环网络把波形变成 MIDI 事件集合。第二步用时序卷积加双向循环网络给每个事件加技巧标签。第三步用音频条件的 T5 编码器解码器给每个事件加弦品。

第 4 步用 BeatNet 估计 tempo，把两路标注与 tempo 合并成 JAMS 中间文件，再量化渲染为 MusicXML。图 1 在原文中展示了这个流程，但本次只收到图 4 像素，因此这里只用文字讲连接关系。

**音频转 MIDI × 弦品指派：** 音频转 MIDI 负责从波形中恢复每个音的音高与起止时间，解决有没有音和是什么音的问题；弦品指派负责把已知的音高映射到 1 至 6 弦与 0 至 24 品的具体按法，解决怎么弹的问题。二者搭配的原因是吉他具有音高冗余，同一音高可在多处演奏，仅靠音高无法确定指法；组合意义在于先用声学模型锁定时间音高，再用音乐上下文与音色线索恢复演奏者一致的指法，使后者不再重复做 onset 检测。

关键设计是并行后合并。第二步与第三步都依赖第一步的 MIDI，但彼此独立：一个只关心表情，一个只关心按法。第 4 步再把它们按音符身份对齐。如果第一步漏音，后两步就没有对象可标；如果第一步多检出假音，后两步会给假音也编出技巧与指法，最终谱就会多出音符。

这就是后文传播代价的来源。模块化带来的好处是可替换：换更好的 MIDI 模型可以直接提升最终谱，而不必重训技巧与指派。

### 第一步如何从频谱得到带时间的 MIDI？

第一步沿用 Kong 等人的 note-only 高分辨率卷积循环网络，输入是对数梅尔频谱，采样率 16 kHz，每秒 100 帧，229 个梅尔带。网络每帧每音高输出 4 张图：onset 置信度、offset 置信度、帧激活与力度。论文没有改主干结构，改的是训练数据与后处理。训练时汇集 GAPS、Guitar-TECHS、François Leduc 与 GOAT 的直录子集，覆盖木吉他、电吉他与不同录音环境。推理后处理丢弃短于 30 毫秒的预测音，理由是即使每秒 15 个音的极速演奏，完整发音的吉他音通常也长于 50 毫秒。

\[\mathcal{E}=\{(p_{i},t_{i}^{\mathrm{on}},t_{i}^{\mathrm{off}},v_{i})\}_{i=1}^{|\mathcal{E}|},\]

上式是第一步的输出定义。其中 p 是音高，t_on 与 t_off 是起止时间，v 是力度，E 是全部事件集合。先理解符号再看计算：模型并不直接输出这个集合，而是先输出帧级概率，再经阈值与回归后处理拼成事件。原文明确的实现是保留 Kong 的回归式起止时间预测，不从模型名推定其他改动。白话说，onset 置信度管敲门时刻，帧激活管门开着多久，offset 管关门时刻，力度管敲多重。

### 第二步如何给每个音贴技巧标签？

第二步的输入是第一步的事件集合与原始波形，输出是每个事件多一个技巧标签。实现上先按每个音的起止时间截取音频块，采样率 22.05 kHz，FFT 窗 1024，跳长约 23 毫秒。每帧拼 40 维梅尔倒谱系数、40 维对数梅尔带与 12 维色度，组成 92 维向量，再按时间做 z 归一化。序列统一补齐或截断到 128 帧，约 3 秒，形成 128 乘 92 的张量。网络是两层 1 维卷积加双向长短期记忆网络：64 与 128 滤波器、核 3、批归一化、2 倍最大池化、0.3 丢弃，随后是每方向 64 单元的双向循环层，最后是 128 单元全连接头与九分类 softmax，总参数约 160,000。

**时序卷积 × 双向长短期记忆网络：** 时序卷积负责在 128 帧特征序列上提取局部频谱与滑音、颤音起伏等短时模式，并通过池化压缩时间；双向长短期记忆网络负责在压缩后的序列上同时看前向与后向上下文，区分弯音与颤音这类需要较长包络才能分辨的技巧。搭配原因是前馈模型丢弃了技巧的时间动态，而纯循环模型直接处理 92 维长序列效率低；组合意义是以卷积降维加循环建模时序，用约 160,000 参数实现 95.9% 宏 F1。

\[\mathcal{E}^{\tau}=\{(p_{i},t_{i}^{\mathrm{on}},t_{i}^{\mathrm{off}},v_{i},\tau_{i})\}_{i=1}^{|\mathcal{E}|}.\]

上式是加技巧后的事件定义，tau 是 9 类之一。需要先有 E 才能定义 E_tau，说明第二步依赖第一步的时间切割。如果切割偏了，截到的音频块就会混入前后音，这是流水线的固有脆弱点。训练时论文合并 5 个技巧数据集并统一成 9 类标签，用分层划分保证同一演奏的不同麦克风版本不跨训练验证测试集，用逆频率类别权重处理不均衡。

### 第三步如何用音色解决同一音高多处可按？

第三步要解决音高冗余。同一 MIDI 音高可在弦集合 1 至 6 与品集合 0 至 24 的多种组合发出。论文在 Fretting-Transformer 的 T5 式编码器解码器上做两处放大。第一是把主干从 d_model 128、3 层放大到 d_model 256、6 层、8 头、约 15,000,000 参数，并用门控 GELU 前馈层，目的是提升跨数据集泛化。第二是加入逐音音频条件：对每个音取 onset 附近 200 毫秒梅尔谱，过 3 层轻量卷积编码成向量，经线性映射到 256 维并做层归一化，然后作为连续块拼在 MIDI token 序列之前，放在变调夹与调弦条件 token 之后。T5 自注意力在编码端直接融合符号与声学信息，不需要手设融合权重。

**符号 MIDI 序列 × 逐音音频嵌入：** 符号 MIDI 序列提供音高进行、和弦结构与调弦变调条件，决定哪些弦品组合在乐理上可行；逐音音频嵌入提供每个 onset 附近 200 毫秒的频谱特征，反映不同弦粗细与张力带来的泛音差异。搭配原因是纯符号模型看不到音色，纯音频弦分类器看不到前后指法连贯性；组合意义是在 T5 编码器前把音频 token 拼在 MIDI token 之前，用自注意力端到端融合，让同一音高在不同弦上的细微频谱差直接参与指法选择。

\[\mathcal{E}^{sf}=\{(p_{i},t_{i}^{\mathrm{on}},t_{i}^{\mathrm{off}},v_{i},s_{i},f_{i})\}_{i=1}^{|\mathcal{E}|}.\]

上式是加弦品后的事件定义，s 与 f 分别是弦与品。推理时用束宽 4 的束搜索，并加两条硬约束：每音后必须跟合法时值 token，同一和弦内一根弦最多用 1 次；任何需要跨越大于 5 品的和弦组合被直接屏蔽，对应人手实际伸展极限。

**受约束束搜索 × 五品跨度限制：** 受约束束搜索负责在生成 TAB 与时值 token 时保留 4 条候选并强制语法合法；五品跨度限制负责在每一步屏蔽掉需要手跨越大于 5 品的和弦组合。搭配原因是神经解码器本身不保证可弹性，会产生同和弦内重复用弦或跨度过大的指法；组合意义是把演奏物理约束写成解码掩码，使输出在保持模型概率排序的同时只保留人手可达的指法。

\[\mathcal{E}^{\text{final}}=\{(p_{i},t_{i}^{\mathrm{on}},t_{i}^{\mathrm{off}},v_{i},\tau_{i},s_{i},f_{i})\}_{i=1}^{|\mathcal{E}|}.\]

上式是第 4 步合并后的最终事件，包含音高、时间、力度、技巧、弦品。第 4 步先把 onset 在 30 毫秒内聚类去微时差，再用 BeatNet tempo 量化到十六分音符网格，同量化 onset 的音组成和弦，同弦冲突保留时值更长的音。单音技巧直接写入，多音技巧如击勾弦与滑音则通过同弦下一拍内配对推断。

### 训练与增强分哪几段，每段更新什么？

第一阶段用 Adam、权重衰减 0.0001、批大小 4、学习率 0.00001，在 30 秒片段上训练，片段步移 10 秒，每 10,000 步把学习率乘 0.9，按验证集选最优。随后做噪声增强微调：以 0.5 概率加零相位 80 Hz 高通与白噪声、粉噪声、60 Hz 交流声的随机子集，信噪比在 25 至 45 dB 均匀采样，再峰值归一化到 0.9。做法是从无增强最优模型前 2000 步的检查点再训 10,000 步，每 5000 步衰减 0.9。原文明确说钢琴常用的混响与激进均衡对吉他有害，会抹掉 attack 瞬态与泛音，因此只保留保 onset 对齐的加性噪声。

第二阶段用 Adam、学习率 0.001 训 200 轮，稀疏类别交叉熵加逆频率权重，验证损失 5 轮不降则学习率减半，15 轮无提升早停。第三阶段分两段：先在 SynthTab 与 DadaGP 共 17255 训练轨与 1859 验证轨上用 Adafactor 预训练符号主干，学习率 0.0001 量级，批大小 16，最多 120 轮，变调夹 0 至 7 与 4 种调弦做符号增强；再在 GAPS、GOAT 直录与 Guitar-TECHS 上先把卷积音频编码器当弦分类器预训练 40 轮，然后与 T5 主干端到端联合微调 30 轮，主干学习率 0.00005 量级、音频编码器 0.00025 量级，批大小 8，权重衰减 0.01，早停耐心 8。未报告梯度是否截断与具体阈值选择细节，这部分属于缺项，不从模型名推定。

### 在什么数据与容差下评测，指标方向如何？

评测全部是零样本，训练与测试集不重叠。音频到 MIDI 在 GuitarSet、EGDB 及其噪声版上评测。噪声版的构造是把训练增强的加性噪声加上 EchoThief 房间脉冲响应卷积，并截断到原长以保持帧对齐，模拟自然、教堂、演出场地与手机笔记本麦克风。技巧分类在合并 5 数据集后的 72/8/20 分层测试集上评测，共 11372 个样本。弦品指派在 Oracle 设置下评测，即给模型真实 MIDI 加对应音频，只看指派本身。

指标方向都是越高越好。音频到 MIDI 用 onset 容差正负 50 毫秒、音高容差正负 50 音分的 F50。弦品 Tab F1 更严，要求 onset、音高与弦同时对。端到端 Tab F1 要求用第一步预测 MIDI 时仍满足上述三者。百分点差与相对百分比不同，论文报告的加多少点都是百分点。

硬件与推理延迟原文未给出预算，不能承诺实时性。资源可用性方面，本次未发现完成 HTTPS 验证的开源资源，不得声称代码模型数据已公开。

### 主结果在干净与噪声下各赢在哪里？

先看音频到 MIDI 的比较问题：在 4 个零样本集上，谁的平均 F50 更高，且在噪声下是否更稳。公平条件是同一容差与同一零样本协议，指标越高越好。下表是原文表 1 的直接选择，保留全部基线与平均列。

| Model | GS | EGDB | GS noi | EGDB noi | Avg |
| --- | --- | --- | --- | --- | --- |
| FretNet [13] | 69.10 | 40.90 | 37.30 | 23.60 | 42.73 |
| NoteEM [6] | 82.90 | 59.00 | 70.00 | 67.60 | 69.88 |
| Riley et al. [15] | 88.10 | 68.90 | 74.20 | 67.50 | 74.68 |
| TART (Ours) | 87.40 | 79.00 | 82.20 | 76.80 | 81.35 |

表后解释需要同时看到收益与代价。TART 平均 81.35%，比次优的 Riley 等人 74.68% 高 6.67 个百分点，优势主要来自 EGDB 高 10.1 个百分点、噪声 GuitarSet 高 8.0 个百分点、噪声 EGDB 高 9.3 个百分点。但在干净 GuitarSet 上 Riley 以 88.1% 对 87.4% 略胜 TART，说明 TART 为换泛化付出了在单集最优阈值上的小代价。FretNet 平均仅 42.73%，NoteEM 为 69.88%，都明显低于 TART。

再看技巧分类。比较问题是时序建模是否比前馈更准且更省参数。下表是原文表 3 的直接选择，同划分下比较准确率与宏 F1。

| Model | Params | Accuracy | Macro F1 |
| --- | --- | --- | --- |
| Fiorini et al. [10] | 3.70M | 64.3% | 62.7% |
| Stefani et al. [11] | 2.08M | 86.7% | 71.6% |
| TART (Ours) | 160K | 97.4% | 95.9% |

TART 以 160,000 参数实现 97.4% 准确率与 95.9% 宏 F1，明显高于 Fiorini 的 64.3% 与 62.7%，以及 Stefani 的 86.7% 与 71.6%，且参数量分别为对方的约二十分之一与十三分之一。代价是 vibrato 最难，F1 89.4%，主要与弯音混淆，这与二者共享音高抖动包络有关。

弦品指派的比较问题是放大主干与加入音频各带来多少增益。下表是原文表 4 的直接选择，TabCNN 因在 GuitarSet 上训练过只报告 EGDB 两列。

| Model | GS | GS noi | EGDB | EGDB noi | Avg |
| --- | --- | --- | --- | --- | --- |
| TabCNN [12] | – | – | 30.4 | 25.4 | 27.9 |
| Fretting-Transformer [5] | 60.4 | 60.4 | 66.3 | 66.3 | 63.3 |
| Audio-only (ours) | 54.8 | 55.2 | 64.8 | 58.9 | 58.4 |
| Symbolic-only (ours) | 61.3 | 61.3 | 72.7 | 72.7 | 67.0 |
| AudioFret (ours) | 69.2 | 69.5 | 74.8 | 73.7 | 71.8 |

AudioFret 平均 71.8%，比原始 Fretting-Transformer 的 63.3% 高 8.5 个百分点。其中仅放大符号主干就从 63.3% 到 67.0%，加音频条件再到 71.8%，说明两步都有独立贡献。未胜出项是纯音频变体平均仅 58.4%，证明没有符号上下文时单靠音色不够。

下面导读本次唯一收到像素的图。该图是《Tears In Heaven》副歌片段，上方为 TART 输出，下方为吉他手 Kenneth Acoustic 的真实谱，包含五线谱与六线谱对照。

> **看图路径：** 1. 先区分上下两套六线谱哪套是人工演奏、哪套是 TART 输出；2. 再看 7 至 9 品位置的连线记号是弧线还是斜线，确认滑音与击勾弦的混淆点；3. 最后核对低音声部 0 品空弦音的对齐情况，判断节奏量化是否分组正确

[![原论文 Figure 4：A sample of the chorus of “Tears In Heaven” by Eric Clapton, played by YouTube guitarist Kenneth…](https://arxiv.org/html/2609.11904v1/tih.png)](https://arxiv.org/html/2609.11904v1/tih.png)

*论文图 4。原论文 Figure 4:：“A sample of the chorus of “Tears In Heaven” by Eric Clapton, played by YouTube guitarist Kenneth Acoustic (bottom) and the transcription by TART (top).”。*

从像素可见，两套谱在 10 品与 12 品双音、7 品与 9 品进行以及低音 0 品空弦的布局上大体对齐，说明弦品与节奏量化基本正确。差异集中在 7 滑到 9 的记号：真实谱用弧线表示击勾弦或连音，TART 输出用斜线记成滑音。原文图注也明确说 TART 偶尔把滑音与击勾弦混淆，但其他部分接近真实谱。这与技巧分类中滑音、击勾弦、弯音易混的结论一致，不能把该单片段推广为全集指标。

### 拿掉音频或拿掉符号会怎样，端到端损失多少？

论文做了两组可运行消融。第一组在弦品上比较纯符号与纯音频。纯符号变体平均 67.0%，纯音频变体平均 58.4%，完整 AudioFret 为 71.8%。这支持音频与符号互补的判断：符号保证进行连贯，音频解决同音异弦的音色歧义。第二组比较 Oracle 与端到端，定义传播代价为二者差值。

**Oracle Tab F1 × 端到端 Tab F1：** Oracle Tab F1 给弦品模型输入真实 MIDI，只测指派本身的好坏；端到端 Tab F1 给它输入第一阶段预测的 MIDI，测全链路在真实使用中的好坏。搭配原因是流水线中技巧与弦品都依赖第一步的 MIDI，前步漏检或音高错误会直接传导；组合意义是用二者差值定义传播代价，定量回答第一阶段不完美到底让最终谱损失了多少。

下表用原文连续句整理总体数字，条件是 4 个零样本集的平均，指标是 Tab F1，越高越好。

| 条件 | 指标 | Oracle 输入 | 端到端输入 | 总体含义 |
| --- | --- | --- | --- | --- |
| 四集平均 | 音频到 MIDI F50 | 81.35% | 81.35% | 第一步平均检出水平 |
| 四集平均 | 弦品 Tab F1 | 71.8% | 54.08% | 指派本身与全链路的差距 |
| 四集平均 | 传播代价 | 17.75 个百分点 | 17.75 个百分点 | 第一步不完美造成的损失 |

表后解释要看到具体代价。完整链路端到端为 54.08%，比 Oracle 的 71.83% 低 17.75 个百分点，且噪声集的传播代价更大，GuitarSet 噪声达 18.4，EGDB 两项约 19.7 与 19.8。这说明第一步在噪声与电吉他上的漏检错检是当前瓶颈。反证是即使给真实 MIDI，指派也只有 71.83%，说明指法本身仍有约三成错误空间，不是全由第一步背锅。

### 哪些情况论文明确说还做不好？

论文在结论中列了三项明确局限。第一是音频到 MIDI 不检测无音高打击音，因此下游无法给这些打击标注技巧。尽管技巧表里有脚鼓与军鼓类，但如果第一步根本没检出对应事件，第二步就没有对象可标。第二是技巧分类每音只给一个标签，无法表示同时发生的复合技巧，例如带颤音的推弦。第三是谱面生成依赖固定十六分音符量化做和弦分组，偶尔会分错组。

还有两项边界需要初学者注意。技巧的高分是在合并数据集的测试集上取得，类别支持极不均衡，普通拨弦有 3919 个，弯音仅 183 个，颤音仅 242 个，宏平均高不代表稀有类在真实歌曲中同样稳。噪声评测虽然加了脉冲响应，但仍是合成噪声加卷积，不是真实手机实录的独立采集，因此不能直接承诺在任意酒吧或街头录音上都有同样提升。缺失证据不是技术错误，但复现时要补真实噪声验证。

### 要复述方法先做什么，需要哪些超参数？

复现应按依赖顺序先跑通数据再跑模型。先准备 GuitarSet 十六分音去 bleed 子集与 EGDB 直录子集用于零样本测试，按原文方法合成噪声版：加性噪声信噪比 25 至 45 dB、高通 80 Hz，再从 EchoThief 采样脉冲响应卷积并截断对齐。第一步训练汇集 4 数据集做 80/20 划分，30 秒窗、10 秒步移、批大小 4、学习率 0.00001、每 10,000 步乘 0.9，短于 30 毫秒的音丢弃。第二步按 23 毫秒跳长提取 40 维倒谱加 40 维梅尔加 12 维色度，统一 128 帧，类别逆频率加权，200 轮早停。第三步先在 SynthTab 与 DadaGP 上预训练符号主干，变调夹 0 至 7 与 4 种调弦增强，再联合微调音频编码器与主干，束宽 4，加同弦不重复与 5 品跨度掩码。第 4 步用 BeatNet 估计 tempo，30 毫秒聚类后量化到十六分音符。

信息条件要保留：变调夹、调弦与 tempo 若已知可直接给出，否则默认标准调弦无变调夹。评估时严格用正负 50 毫秒与正负 50 音分，弦品要求弦也对。当前无可用资源声明，因此应把本解读当作方法复述，不声称可下载权重或一键运行。

### 何时值得尝试这条路线？

当你的录音不是录音室干净信号，而是带房间混响与设备噪声的练习实拍，且你需要的不只是音高而是能照着弹的指法与表情记号时，TART 的拆分值得尝试。它的最强证据是在 4 个零样本集上同时提升音高与指派，尤其在 EGDB 与噪声集上拉开差距，且技巧分类用很小参数达到高宏 F1。主要代价是流水线误差累积，端到端比 Oracle 低约 17.75 个百分点，意味着改进第一步的检出仍是性价比最高的方向。

不适合的情况也要明确。如果音乐包含大量无音高打击或复合技巧，或需要精确到三连音与自由节奏的记谱，固定量化与单标签假设会成为瓶颈。此时应先补真实场景的误检率与可弹率人工评估，而不是只看自动 F1。下一步验证建议做三件：用真实手机实录测噪声泛化，用演奏者盲评测指法可弹性，用逐类错误矩阵重点看颤音对弯音、滑音对击勾弦的混淆，再决定是加数据还是改解码约束。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2609.11904)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-12/)
