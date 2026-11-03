---
title: "How Close to the Theme? Similarity-Label Conditioning for Game Music Generation"
date: 2026-11-03
draft: false
tags: [符号音乐生成, 前缀微调, 音乐, 游戏音频, 主观评测]
categories: [论文速递]
description: "论文把同一首马里奥曲子里的段落配成上下文与目标，用复合相似度打出高中低三档标签来微调 Moonbeam，让高相似请求在平均上更贴近原段，主要靠更多复述原旋律，但幅度远小于真实段落差异且听感实验未能检出单次差异。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.01047"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "想要多像就多像：用相似度标签控制游戏音乐续写"
paper_digest_original_title: "How Close to the Theme? Similarity-Label Conditioning for Game Music Generation"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.01047v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.01047v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.01047v1.pdf"
paper_digest_primary_task: "符号音乐生成"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.symbolic-music","label":"符号音乐生成"},{"facet":"method","id":"method.prefix-tuning","label":"前缀微调"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"application","id":"application.games","label":"游戏音频"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"}]
paper_digest_primary_method: "前缀微调"
paper_digest_score: 5.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "论文把同一首马里奥曲子里的段落配成上下文与目标，用复合相似度打出高中低三档标签来微调 Moonbeam，让高相似请求在平均上更贴近原段，主要靠更多复述原旋律，但幅度远小于真实段落差异且听感实验未能检出单次差异。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Shangxuan Luo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Zixun Guo"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jinjie Shi"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Joshua Reiss"}]
paper_digest_abstract_sha256: "50bcef1949168fd29920658a617a86351dbfa8771cbaf00db3488cc5338188db"
paper_digest_sidecars: {"citation.bib":{"sha256":"aff4e949a85c436e2c95943a4440e3a45daadf19fdfa2b67f32b6d57e3a45313","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01047/citation.bib"},"citation.json":{"sha256":"b3fa90ce70ff399a17457389768721b233f5290410731102fad3ef3ee05d534f","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01047/citation.json"},"citation.ris":{"sha256":"f4a5f9a36ddadaea0839227a0e34fa40e04fe4b35f9327ed3e7471bcb6f528a3","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01047/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"e7d81287f3b1cc4a01596cdc8a5df4b2f47421f5823981a2c16b88ffbfa29874","url":"/audio-paper-digest-blog/client/papers/2026-11-03/2611-01047/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "dd95cb22df4e3eb796fc9d5598cb87cbb44522749e926be26038107b13cb10e3"
paper_digest_api_reader_plan_sha256: "09e036ac9c62a6ae272d6f428f978e16c632269c2c281f47643a505cbce52433"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "2c68b2f00219423cbb58cb6002316739da7c178d157664ab2aff43829a86f268"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "974532a96b7ceee959942bb76c13ab6dafecead798112ba6e8a2815f7eb1aefc"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "a5045f4da7f69ba24dadc03554d3dd9594e0db11b1eedc8bdac2e49950c5d2c1"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "3820ba6a4cc1e461cafd795b7bb6508480b3fb7dda683e9f759c3d3addddf113"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 想要多像就多像：用相似度标签控制游戏音乐续写

> 英文题目：*[How Close to the Theme? Similarity-Label Conditioning for Game Music Generation](https://arxiv.org/abs/2611.01047v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音乐生成](/audio-paper-digest-blog/papers/?concept=task.music-generation) → [符号音乐生成](/audio-paper-digest-blog/papers/?concept=task.symbolic-music)
- **研究方法**：[参数高效微调](/audio-paper-digest-blog/papers/?concept=method.peft) → [前缀微调](/audio-paper-digest-blog/papers/?concept=method.prefix-tuning)；[人类参与评测](/audio-paper-digest-blog/papers/?concept=method.human-evaluation) → [主观评测](/audio-paper-digest-blog/papers/?concept=method.subjective-evaluation)
- **信号**：[音乐](/audio-paper-digest-blog/papers/?concept=signal.music)
- **应用**：[游戏音频](/audio-paper-digest-blog/papers/?concept=application.games)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5


## 👥 作者与机构

- Shangxuan Luo：机构信息未能在本次解析中与作者逐人可靠绑定
- Zixun Guo：机构信息未能在本次解析中与作者逐人可靠绑定
- Jinjie Shi：机构信息未能在本次解析中与作者逐人可靠绑定
- Joshua Reiss：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

游戏音乐需要在长时间游玩中重复同一素材又避免单调，作曲者希望指定新段落与给定段落有多贴近，已有符号音乐模型只会流畅续写而缺少这种分级控制。论文把任务定为给定上下文段落和相似度要求，输出一段长度受限的新段落，难点是相似度没有公认定义且旋律、音高、节奏、时值需要分别衡量。方法先把同一首超级马里奥钢琴谱内的段落两两配对，用自设的复合相似度（compound similarity，CS）算分并按三分位切成高、中、低三档标签；再把上下文音符、分隔符、标签词、目标音符串成一个序列训练，只在目标音符上算损失；同时把主干网络对上下文的隐层平均后经线性映射得到上下文向量，在目标每小节边界以特殊词嵌入送入。相对已有变奏学习只在固定相似度区间内学习，本文标签覆盖全部配对范围并区分程度，还分离了标签与上下文向量的作用。在157个测试上下文、每种标签6次抽样平均的条件下，高相似度输出在Melody上比低相似度输出平均高于0.0080，12个指标方向均偏向高相似度一侧。听测以20名听众对30组单次抽样的10秒片段打分，高相似度输出仅比低相似度输出高2.9分（95%区间-2.0至+7.7，p=0.24），未检出标签效应，且中档标签未居中、单次波动大。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 游戏音乐为什么要控制像到什么程度

游戏音乐不是放 1 次就结束，它由循环、分支和分层在游玩中反复拼接。作曲家会围绕同一素材写出可以互换的段落，让游戏在不同状态间切换，又不让玩家觉得突兀或厌烦。太死板的重复在长时间游玩中会被察觉，完全写新素材又会失去主题联系。

论文要解决的就是这个分寸问题：给定已经播放的一段，给出一段新的延续，并让作曲家能指定新段落与旧段落有多像，从几乎重复到基本换新。输入是符号化的 MIDI 段落，输出是另一段符号音乐，约束是输出要保持可演奏的段落形态，同时相似程度听从外部请求。已有续写模型能把音乐接下去，但不提供这种分档选择；已有变奏方法多用模型内部的破坏强度或属性滑杆来调变化，少有用真实曲子中段落之间的实际远近来学习分档。

### 已有路线在输入目标和监督上差在哪里

游戏音乐生成多按玩家或游戏状态条件化，比如情绪、唤醒度或玩法变量，没有条件直接要求新段落与已播段落的相似程度。可控符号生成一方用滑杆或文字式描述控制节奏密度、和弦等单段属性，结构条件模型决定是否重复主题，但不决定新旧两段之间有多接近。

与本文最接近的是两条变奏路线。一条在隐空间插值或用破坏强度控制偏离，比如 MusicVAE 和 ImprovNet，它们的远近由机制定义，不是向真实段落对学来的。另一条从真实主题变奏对中学习，比如 Variation Transformer，但只学固定相似范围内的对子，不分档。本文的不同在于监督来自真实段落对的全范围：同一首曲子里任意两个主体段落组成有序对，用一个相似度函数打分再分三档，模型要学会标签与两段关系之间的对应。

### 数据从哪里来，段落和标签如何定义

数据是 NinSheetMusic 上的 554 首超级马里奥钢琴谱，去掉双钢琴和混编后剩 515 首，其中 334 首有两段以上主体段落可组成配对。配对按段落数分层划为 236 首训练、49 首验证、49 首测试，同一改编曲 stays 在同一集合。段落划分先由 Gemini 3.1 Pro 读 ABC 谱标注，主体段落内旋律核心与节奏相同者同字母，2 名标注者在 47 首上独立做嵌套层级标注来校验，一致性用 Cohen kappa 衡量，AI 与 2 人分别达到 0.59 和 0.68，2 人之间 0.58。

在 3304 个有序对上计算复合相似度后，按三分位数 0.60 和 0.78 切成高中低三档，分别对应 1090、1172 和 1042 对。切点用全部配对含测试集 1 次性固定，只定标签不泄露音频生成。下面先看该分布的实际形状，它决定了中低档是否真的可分。

> **看图路径：** 1. 看横轴复合相似度从 0.4 到 1.0 的分布形状与两条虚线阈值；2. 比较红灰蓝三段各自的对数与覆盖区间宽窄；3. 注意高标签右侧高耸与低中标签挤在 0.6 附近的密集峰

[![原论文 Figure 1：Most pairs are moderately similar, and the low and middle labels split one dense peak.](https://arxiv.org/html/2611.01047v1/dataset_dist.svg)](https://arxiv.org/html/2611.01047v1/dataset_dist.svg)

*论文图 1。原论文 Figure 1:：“Most pairs are moderately similar, and the low and middle labels split one dense peak.”。*

该图横轴是上下文与目标之间的复合相似度，纵轴是配对数，红灰蓝分别标出低中高三档。可见大量配对挤在 0.6 附近，低档与中档切开了同一个密集峰，高档则横跨很宽且在 0.9 附近另有一个尖峰。这预示中低档天然难分，高档内部差异也很大，后文高标签只与低中拉开而不分程度，与此形状直接相关。

### SimLlama 的输入输出与整体流程是什么

SimLlama 在 Moonbeam 839M 这个 MIDI 基础模型上做进一步训练。Moonbeam 主干是 LLaMA 结构加自有相对注意力，每个音符用 onset、duration、octave、pitch class、instrument、velocity 6 个域表示。生成任务是：读入上下文段落音符，读入一个三选一标签，再自回归生成目标段落。损失只算目标段落部分。

为防止标签离上下文太远而够不着，模型另设一条直接通路：用主干编码上下文，取最后一层在上下文上的平均，再经可学习的线性投影得到上下文向量，在目标每小节边界以 CTX token 的嵌入注入。下面的结构图把这条通路画得很清楚，阅读时先分清冻结与可训练部分。

**上下文 × 目标：** 上下文是给定的一段，作为被模仿的对象；目标是要生成的新段落。两者来自同一首曲子的主体段落，模型续写时先读上下文再按标签生成目标，评价时比较目标与自己上下文的相似，而不是跨曲子比较。

以下导读帮你看懂结构图的主路径与条件注入点，重点是上下文信息走了哪两条路，标签信息出现在哪里。

> **看图路径：** 1. 先沿下方上下文段到平均加投影的虚线看上下文向量从哪里来；2. 再看目标段中标签块与每小节前 CTX 块的交替位置；3. 对照上方冻结主干与只训练适配器和投影的标注

[![原论文 Figure S2：Figure S2: A label and a context vector condition a frozen pretrained model.](https://arxiv.org/html/2611.01047v1/architecture.png)](https://arxiv.org/html/2611.01047v1/architecture.png)

*论文图 6。原论文 Figure S2:：“Figure S2: A label and a context vector condition a frozen pretrained model.”。*

图中下方虚线框是输入序列：左侧上下文段从起始符到上下文结束符，上方箭头把上下文送入冻结的 Transformer 主干并经平均加投影形成上下文向量；右侧目标段以标签开头，之后每小节前插入携带该向量的 CTX 再接本小节音符。上方蓝色大框内主干冻结，紫色适配器可训练，右侧 GRU 解码器冻结并逐音输出 MIDI。这种安排让长距离的内容提醒不依赖标签 token 的注意力距离，而标签只负责选择相似档位。

### 标签和上下文向量各自解决什么困难

如果只有标签 token，模型要在数百个音符之后还记住要模仿哪一段，条件信号容易被稀释。上下文向量把整段上下文压缩成一个向量并在每一小节重复出现，相当于每写一小节就被提醒 1 次原段是什么。对照实验也为此设计：去掉标签就得到无标签对照，去掉两者就得到无条件对照，标签恒错就得到错标签对照。

**相似度标签 × 上下文向量：** 相似度标签是离散请求，告诉模型这次要多像，分为高、中、低三档；上下文向量是对上下文音符序列的连续总结，在目标每小节开头注入。标签管方向选择，向量管持续提醒内容，两者配合才让长距离条件生效。

生成时每个上下文与每个标签各采样 6 次，音符预算统一设为该上下文测试目标平均长度的 1.2 倍，采样温度 0.8 加核采样 p 为 0.9。输出截到上下文长度并修复一 tick 时值，以便与上下文逐段比较。测试共 157 个上下文，929 个有效配对取平均，每次比较都在同一上下文内做高减低的差值，再经整首曲子为单位的重采样得到区间和检验。

### 打标签的复合相似度到底比较了什么

由于音乐相似没有统一定义，论文自定复合相似度只看 4 个分布。CS-Chroma 是按时值加权的十二音级分布，在 12 个移调中取最佳余弦相似，对移调不变；CS-Duration 是 16 个对数 bins 的时值分布余弦相似，但 bins 取各自段落的最短到最长之间，所以比的是形状而非绝对时值；CS-Register 比较平均音高差除以 48 半音后取一减；CS-Density 比较单位时间音数差除以较大者后取一减。前三者权重为 4、3、1、1 加权平均，权重在任何评测前启发式固定，未调参。

关键是它没有旋律分量。作者称当时认为很多游戏音乐无清晰旋律，且音高分布与音域可近似旋律的音高内容，但后文听感结果并不支持后一半判断。阈值 3 分位切分后，同字母段落占高档 38.2%、中档 17.6%、低档仅 1.2%，随机同字母对超越异字母对的概率为 0.834，说明该函数能区分同一素材与不同素材，但高档只有不到四成是同字母，目标本身就很宽松。

**复合相似度 × 评价指标：** 复合相似度是训练用的打标签函数，由音高分布、时值分布、平均音高和密度四个分量加权而成；评价指标是另一套独立计算的旋律、音高内容、节奏和时值重叠度。训练标签与评价指标刻意不同，是为了检验模型学到的是相似关系而不是背下某个公式。

### 哪些参数训练，哪些冻结，早停如何定

主干与音符解码器全部冻结，只训练三处：加在全部 15 层查询与值投影上的秩为 8 的低秩适配器、上下文向量的线性投影、新加的标签与特殊 token 嵌入，共 4,600,000 参数，其中投影占 3,690,000。优化用 AdamW 恒定学习率 3 乘 10 的负 5 次方，批量 2，种子 42，最多 200 轮、耐心 20 轮按验证损失早停，SimLlama 在第 11 轮停下，对照分别为 17、14 和 18 轮。

训练序列把上下文与目标各截到 509 音符以塞进 1024 长度，每目标小节额外加一个 CTX。配对共 2398 训练、478 验证、428 测试。论文只跑了 1 次训练，没有多种子方差，这是复现时要注意的不确定性来源。无上下文向量的纯标签模型只在补充中以不同秩单次采样测试，不可直接比参数量。

### 用什么指标评判生成段落与原段有多像

评价不用训练标签本身，而是 4 个主指标各管一个维度，外加复合相似度作为学到训练目标的检查。旋律取每时刻最高音的 skyline，比较两段三音程序列集合的 Jaccard 重叠；Chroma 是每音计数 1 次的音级分布余弦相似，在十二移调取最佳；Rhythm 是十六分音符为单位的音头间隔分布经 Mallows 距离转相似；Duration 是固定八 bins 从三十二分到全音符的时值直方图重叠。

全部归一到 0 到 1，越大越相似，前三者及旋律对移调不变。补充另有 7 个指标共 12 个，其中 3 个与复合相似度分量相关。

指标先过两道人类标准：一是同字母段落应得分高于异字母段落，二是应随听众评分上升。下表给出主指标在这两道标准上的表现，它决定了后文为何以旋律为核心结论。

**Melody × Chroma：** Melody 比较两段最高音构成的旋律中三音程序列的集合重叠，看顺序是否被复述；Chroma 比较忽略八度后十二个音级的分布余弦相似，看用了哪些音而不看顺序。前者对顺序敏感且与听感最相关，后者接近训练标签中的音高分量，用来区分模型是复述了旋律还是只用了相似的音。

该表比较 4 个主指标与训练用复合相似度：计算方式一列说明各自比较什么，标注一列是随机同字母对胜过异字母对的概率，听众一列是与 60 个片段平均评分的相关。方向都是越大越好，听众列来自后文听感数据故属探索性，不能反过来证明指标选择无偏。

| Measure | Computation | Annotation | Listeners |
| --- | --- | --- | --- |
| Melody | Jaccard overlap of the three-interval sequences of the two melodies | 0.92 | 0.62 |
| Chroma | Cosine similarity of pitch-class histograms, each note counted once, at the best of 12 transpositions | 0.90 | 0.27 |
| Rhythm | One minus the Mallows distance between inter-onset intervals in sixteenth notes, capped at one bar, over the cap | 0.75 | 0.23 |
| Duration | Overlap of note-length histograms with eight fixed bins, from a thirty-second to a double whole note | 0.77 | 0.14 |

旋律在两列都是最高，标注 0.92、听众 0.62，音高分布次之但听众相关仅 0.27，节奏与时值更低。这意味着若只看训练标签最接近的音高分布，会错过听众最在意的旋律重叠。论文因此把结论主要放在旋律上，音高分布作为接近训练目标的参照，节奏与时值用来看控制是否超出旋律维度。

### 高相似请求是否让输出更贴近原段

对 157 个测试上下文，每个取 6 次采样的平均，先比高标签与低标签。12 个指标全部偏向高标签，4 个主指标加复合相似度在 Holm 校正后仍显著。旋律平均差距 0.0080，区间 0.0045 到 0.0121，62.7% 上下文中高标签更近；音高、节奏、时值与复合相似度同样显著但绝对值都很小。

下表把生成差距与真实目标差距并置，问题是标签设定的是方向还是程度，公平条件是同上下文截断后比较，指标方向越大越相似。

| Measure | Generated Gap | 95% Interval | Real Gap | Ratio |
| --- | --- | --- | --- | --- |
| Melody | 0.0080 | 0.0045 to 0.0121 | 0.249 | 3.2% |
| Chroma | 0.0137 | 0.0048 to 0.0227 | 0.065 | 21.1% |
| Rhythm | 0.0050 | 0.0019 to 0.0082 | 0.051 | 9.8% |
| Duration | 0.0154 | 0.0023 to 0.0294 | 0.168 | 9.2% |
| CS (ours) | 0.0132 | 0.0030 to 0.0231 | 0.355 | 3.7% |

生成差距只占真实高中低差距的 3.2% 到 21.1%，在训练目标本身也只占 3.7%。真实高、中、低目标均值在复合相似度上为 0.918、0.658、0.556，而三档生成输出均值挤在 0.654、0.638、0.641 之间，恰落在真实中低之间。单次采样的旋律差距标准差 0.044，是均值差距的 5 倍，单次高标签仅在 54% 到 63% 上下文中更近。因此证据支持的是均值方向上的偏移，不是每段必现的程度控制。

以下导读帮你读森林图：三列分别对应高对低、高对中、中对低，圆点是某指标下前者更近的上下文占比，横线是 95% 区间，实心为均值差距校正后显著。

> **看图路径：** 1. 先看三列面板分别比较高对低、高对中、中对低；2. 看每行圆点相对 0.5 虚线的位置与横线区间是否跨过虚线；3. 区分实心与空心圆点代表的多重校正后是否显著

[![原论文 Figure 2：High-similarity outputs are closest to the context; mid-similarity outputs are no closer than low.](https://arxiv.org/html/2611.01047v1/forest_labels.svg)](https://arxiv.org/html/2611.01047v1/forest_labels.svg)

*论文图 2。原论文 Figure 2:：“High-similarity outputs are closest to the context; mid-similarity outputs are no closer than low.”。*

可见前两列圆点多在 0.5 右侧且多为实心，高标签同时胜过低与中；第三列中对低的圆点多在 0.5 附近或左侧且为空心，中标签并未居中。旋律、音高、节奏、时值四行在前两列一致偏向高标签，这与表格的均值差距结论互相印证，但第三列说明三档标签实际只实现两档控制。

### 标签相对无标签多做了什么，语义是否重要

无标签对照共享上下文向量只缺标签，最能分离标签增量。下表的问题是各标签相对无标签是否把输出推近或推远，以及错标签是否反转、无条件对照是否说明向量作用，每格是前者更近的上下文占比加均值差距的校正 p，方向仍是越大越贴近自己上下文。

| Measure | High > No Label | No Label > Low | No Label > Mid | Wrong Label: High > Low | No Label > Unconditioned |
| --- | --- | --- | --- | --- | --- |
| Melody | 66% (0.003) | 49% (1.000) | 54% (0.993) | 36% (0.020) | 57% (0.453) |
| Chroma | 58% (0.024) | 54% (0.922) | 59% (0.016) | 45% (0.044) | 68% (0.003) |
| Rhythm | 69% (0.003) | 49% (1.000) | 53% (0.993) | 52% (1.000) | 57% (0.196) |
| Duration | 53% (0.067) | 54% (0.923) | 65% (0.005) | 46% (0.231) | 62% (0.010) |

只有高标签稳定带来增益：旋律上 66.2% 上下文中高于无标签，平均多 0.0106，节奏、音高与复合相似度同样显著，时值未达显著。低标签在旋律上仅近 0.0026 且区间含零，远小于高标签的偏移；中标签在音高与时值上反而被无标签推远，部分来自不稳定输出。错标签对照的高标签恒标错，其高对低顺序在旋律与音高上反转，说明标签语义被模型使用，不是任意符号。

**无标签对照 × 错标签对照：** 无标签对照保留上下文向量但去掉标签，用来看标签本身带来多少增量；错标签对照保留两者但训练时标签恒为错误，用来看标签语义是否被真正使用。前者分离有无选择，后者验证高标签不是任意符号，只有语义正确时高请求才应更相似。

附带比较是选 12 个无标签输出中按复合相似度最贴近者，与单次高标签输出比。在旋律、节奏、时值上两者不可区分，旋律差距仅 0.0008 但区间与标签效应同宽；在音高上选择更近 0.020，因选择标准本身含四分之九权重的音高分量。对作曲者而言，单次高标签在旋律上约等于十二选一，但省去人工挑选。

### 听众能听出高低标签的差别吗，什么指标最贴近听感

听感用 30 个上下文各一高一低首采样，共 60 个 10 秒独奏钢琴片段，20 名有效听众盲听打分。设计先过滤不稳定片段以免把质量当相似，并用槽位项校正先播段偏好。结果是高标签平均高 2.9 分，区间负 2.0 到 7.9，p 为 0.24，未检出。原因在刺激本身：这 30 对单次采样在所听 10 秒上仅 12 对旋律更高，而全部采样平均在 67.1% 上下文中偏向高标签；以 20 人 30 试次的规模，80% 功效只能检出约 7 分效应。

下表的问题是在所听 10 秒上哪个客观指标最能预测单条评分，条件是混合模型加槽位与随机截距，指标标准化后看每标准差带来多少分，方向越大表示越跟随听感。

| Measure | Rise per SD | 95% Interval | p | Holm p |
| --- | --- | --- | --- | --- |
| Melody | +6.7 | 4.6 to 8.9 | < 0.001 | < 0.001 |
| Chroma | +2.9 | 0.2 to 5.5 | 0.035 | 0.21 |
| Rhythm | +2.7 | -0.04 to 5.4 | 0.054 | 0.22 |
| Duration | +1.5 | -1.2 to 4.3 | 0.28 | 0.44 |
| CS (ours) | +3.4 | 0.9 to 6.0 | 0.009 | 0.060 |

只有旋律每标准差带来 6.7 分且校正后显著，复合相似度 3.4 分校正后未过，音高与节奏仅名义显著。扩展到十二指标时另有两个旋律变体及音域与密度显著，但与旋律联立后三者失去效应，旋律保持 5.9 分。去掉 4 个复述片段后旋律仍显著但降到 3.6 分，28 个零分片段与天花板效应说明该指标仍粗糙。

以下导读帮你看散点：横轴是两输出的旋律差距，纵轴是去槽位偏置后的听众差距，每点一试次，竖线是 20 人间的区间。

> **看图路径：** 1. 看横轴旋律差距与纵轴听众评分差距是否同向变化；2. 注意横轴零附近聚集的大量小差距试次；3. 观察右端大旋律差距点是否对应最高的听众差距

[![原论文 Figure 4：Listeners hear the output that shares more melody with the context as more similar.](https://arxiv.org/html/2611.01047v1/listening_test_per_trial.svg)](https://arxiv.org/html/2611.01047v1/listening_test_per_trial.svg)

*论文图 4。原论文 Figure 4:：“Listeners hear the output that shares more melody with the context as more similar.”。*

可见点云整体右上倾斜：在全部 30 个试次上，旋律差距与听众差距的排序关联为 Spearman ρ=0.55（p=0.002）；排除含复述片段的 3 个试次后，该关联为 0.50（p=0.009）。横轴零附近堆积说明多数试次客观差距很小，这与标签效应未被听出一致；右端大旋律差距点对应较高的听众差距，左端负差距点对应较低的听众差距，表现为旋律重叠与听感评分的关联，而训练标签恰未包含旋律。

### 贴近的是特定上下文还是一般风格，靠复述吗

若标签只是让输出更像全库的典型风格，那么对其他曲子上下文的差距也应同样大。论文把每个输出同时与自己上下文和 3 个异曲上下文比较。高减低差距在自己上下文上旋律为 0.0080，在异曲上为负 0.0001，差值 0.0081 且校正显著；音高、节奏与复合相似度同样成立，时值差值区间含零。这说明旋律、音高与节奏的增益属于特定上下文，不是整体风格漂移。

机制上统计八音以上逐音复述原旋律的比例。高标签输出复述占 12.4%，中、低、无标签为 6.0%、7.1%、7.0%，等相似度的真实目标为 17.4%，输出并无过度抄袭。去掉所有复述输出后旋律差距从 0.0080 掉到 0.0027 且区间触零，而音高与节奏保持显著；相对无标签的高标签旋律优势仍剩 0.0059。也就是说旋律维度的标签作用主要由更频繁的片段复述携带，而非整体分布微调。去重叠检查也显示无测试上下文在旋律上与任一训练段达到 0.5 以上，基本排除整段搬运。

### 结论在什么条件下才成立，还有哪些缺口

结论依赖特定范围：全部是马里奥单系列钢琴谱，自由续写且不控制循环点、调性边界与配器，指标也忽略这些；模型只跑 1 次训练，适配器秩与早停轮数固定；统计以曲子为单位重采样，显著性经 Holm 校正，换校正范围结论强度会变。过滤不稳定输出后高对低仍正向，但中对低的负向部分来自不稳定，说明失败样本影响中档估计。

标签设计有三处事前选择值得注意。一是未纳入旋律，后文听感恰指向旋律；二是权重 4、3、1、1 先验固定，单用音高分量反而比复合更能区分同字母对；三是三分位把低中切在同一密集峰，高档又过宽过松，只有 38.2% 高对共享段落字母，这解释了为何只有高对 rest 有效。听感零结果不是证明无听感差异，而是单次采样散布大加试次少导致的灵敏度不足，且先播段偏好达 7.9 分不可忽略。

### 要复现第一步做什么，需要哪些信息

复现先拿配对与标签：按论文的 ABC 切分与主体段落筛选重建 3304 有序对，用 4 个分量公式算复合相似度并按 0.60 与 0.78 取整阈值切三档，注意阈值含测试集且固定 1 次。上下文截 509 音符、目标截 509 音符加每小节 CTX，音符六域、预算 1.2 倍均长、温度 0.8 与 p0.9、截断到上下文长度与一 tick 修复都要照做，否则长度与不稳定率会变。

训练冻结 15 层 1920 维主干与 GRU 解码器，只训适配器、投影与新嵌入共 4,600,000 参数，早停看验证损失。评测对 157 上下文各 6 次采样取平均，重采样以整曲为单位 2000 次，Holm 校正分五主指标与十二指标两版。关于资源可用性，本篇未发现来源绑定且完成验证的资源，不得声称代码模型数据已公开；谱面来自第三方不 redistributed，标注与配对列表称将发布但本次无可验证链接。

### 什么时候值得尝试，还缺哪项验证

当你需要围绕同一主题批量写可互换段落，且能接受多次采样再挑时，高相似标签值得一试：它在平均上让旋律、音高与节奏更贴近指定段，相对无标签的旋律增益约 0.01，且复述率未超同等真实目标，没有整段复制风险。但不要指望它精确设定像的程度，也不要用单次输出赌每段必更像；中标签目前不居中，实际只有高对其余的两档。

下一步最该补的是含旋律的标签函数与分离声部的旋律提取，并在作曲家在环的任务中评音乐可用性，而不仅是相似分数。若沿用本标签，建议改阈值或用连续值重训，并报告多种子与不稳定率，因为中档估计对失败样本敏感。常见误解是把听感零结果读成标签无用：原文显示的是单次 10 秒试次散布盖住了小均值效应，而听众评分恰恰最跟随旋律，这反而指明了标签缺旋律的改进方向。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2611.01047v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-03 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-03/)
