---
title: "TID System for Speech-COSER Challenge 2026: ASR Track"
date: 2026-11-12
draft: false
tags: [语音识别, 模型剪枝, LoRA, 课程学习, 模型集成]
categories: [论文速递]
description: "针对西班牙乡村老年自发语音的识别困难，论文用 CTC 对齐分数筛选数据、做两阶段 LoRA 微调加事后剪枝，再用七系统 ROVER 投票把官方 WER 降到 36.25%，代价是需要多模型训练解码和经验阈值选择。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.11497"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "乡村老年自发语音怎么做识别：对齐打分、两阶段微调与多系统投票"
paper_digest_original_title: "TID System for Speech-COSER Challenge 2026: ASR Track"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.11497v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.11497v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.11497v1.pdf"
paper_digest_primary_task: "语音识别"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.asr","label":"语音识别"},{"facet":"method","id":"method.pruning","label":"模型剪枝"},{"facet":"method","id":"method.lora","label":"LoRA"},{"facet":"method","id":"method.curriculum","label":"课程学习"},{"facet":"method","id":"method.model-ensemble","label":"模型集成"}]
paper_digest_primary_method: "模型剪枝"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_one_sentence: "针对西班牙乡村老年自发语音的识别困难，论文用 CTC 对齐分数筛选数据、做两阶段 LoRA 微调加事后剪枝，再用七系统 ROVER 投票把官方 WER 降到 36.25%，代价是需要多模型训练解码和经验阈值选择。"
paper_digest_authors: [{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Fernando López"},{"affiliations":["机构信息未能在本次解析中与作者逐人可靠绑定"],"name":"Jordi Luque"}]
paper_digest_abstract_sha256: "4658002b553e07bb381f29b1d06104dd906bb47a1ad34f2b354331b208c90fbc"
paper_digest_sidecars: {"citation.bib":{"sha256":"a7498b755c27161cf64fafec8a13d77bc3ba6eb6ac81098921041ed20db789ba","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11497/citation.bib"},"citation.json":{"sha256":"5ab5d24c1416aaec4f79dc745750109cdba94f89a6ff23c94dd6fb9a862fe165","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11497/citation.json"},"citation.ris":{"sha256":"c1b9032c20296d838d6b46776482961a1f0d73381efc17d65f9de032419eac13","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11497/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"15d8c554bbf548c0f2329f10a7ed74e9f17d1498b56eccc3cd2802f0a293f552","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11497/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "6c342112baad4a794865da7b36f57f0f957436f45a81d9dc4507d975a5e09593"
paper_digest_api_reader_plan_sha256: "8eda33f34ed8bc470b119208ea4bf525c57b6f45aa077e3e9ccf7ca005681753"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "fb39075ba734e22181b6ae4b34a77dbad67753557945a7eddbd837de1c6410f0"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "c8867b93407f27fbe8f29be2c8ee28f47b5e88bbee2e6515343db98669d066d7"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "86728b66c15f66dfd5b4d8b0dcfdb144b365f919d989e904ff0177cb487cfc48"
paper_digest_api_reader_author_count: 2
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "aefc150efb3e67ed959ecb4addafd90d60faaed85395a59e736857a6457e9249"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 乡村老年自发语音怎么做识别：对齐打分、两阶段微调与多系统投票

> 英文题目：*[TID System for Speech-COSER Challenge 2026: ASR Track](https://arxiv.org/abs/2611.11497v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[语音识别](/audio-paper-digest-blog/papers/?concept=task.asr)
- **研究方法**：[模型压缩](/audio-paper-digest-blog/papers/?concept=method.compression) → [模型剪枝](/audio-paper-digest-blog/papers/?concept=method.pruning)；[参数高效微调](/audio-paper-digest-blog/papers/?concept=method.peft) → [LoRA](/audio-paper-digest-blog/papers/?concept=method.lora)；[课程学习](/audio-paper-digest-blog/papers/?concept=method.curriculum)；[模型融合](/audio-paper-digest-blog/papers/?concept=method.model-combination) → [模型集成](/audio-paper-digest-blog/papers/?concept=method.model-ensemble)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**6.1/10** | 创新 1/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Fernando López：机构信息未能在本次解析中与作者逐人可靠绑定
- Jordi Luque：机构信息未能在本次解析中与作者逐人可靠绑定

## 📌 核心摘要

输入是西班牙乡村老年人的自发访谈录音，输出是对应会话的文字转写，难点在于高龄发音、方言变体、打断重叠、西班牙语与加泰罗尼亚语等地方语言混用，以及长录音中转写边界漂移。系统先用已训练的 CTC 模型把参考文本与音频后验概率对齐，得到每条语段的平均对数概率作为匹配质量分数，低于 -2.0 的语段被划为低置信并在第二阶段剔除。接着以 Voxtral-Mini-3B-2507 为基座做两阶段低秩适配，第一阶段用全部约 30 小时数据学习领域声学，第二阶段用约 23 小时高置信子集以更小学习率精修，随后对适配器因子矩阵做按幅度保留的后处理剪枝以抑制过拟合。长录音推理时先用语音活动检测切分成最长 25 秒的窗口分别解码，再用 ROVER 对七个系统的窗口假设投票融合，其中包含两个 Voxtral-Mini-3B 配置和五个其他架构。最终七系统融合在官方评测上达到未归一化词错率 36.25%，相对最佳单系统 38.22% 降低 1.97 个百分点，归一化词错率为 22.17%。结论适用于该赛事划分与评测流程，剪枝最优保留比例和阶段选择随架构变化，长窗口调优在内部预切分片段上不可见。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 这篇论文要解决什么样的语音识别任务

任务的输入是西班牙乡村老年人的自发访谈录音，输出是对应的西班牙语文字转录。挑战基于 COSER 语料，覆盖 1468 个乡村地点，1990 到 2025 年间录制，平均说话人年龄 74.2 岁，训练加开发一共约 34 小时。

这类语音难在三点。第一是口音和方言重，还有加泰罗尼亚语、加利西亚语、巴斯克语的无标注语码切换；第二是自发 conversational 现象多，频繁打断和重叠；第三是标注本身不干净，长文件只给到说话人轮次级别的起止时间和文本，没有人工精校。

评价用词错误率 WER。主指标是未归一化 WER，大小写和标点不同都算错，完全按原文逐字比；次指标是归一化 WERnorm，转成小写并去掉标点和匿名化标记后再比。官方在整场长录音转录上打分，内部则在 720 个预切分片段上调参。理解这一点很重要，后面窗口长度的影响只在长录音上看得出来。

### 论文站在哪些已有方法上

论文没有提出全新的声学模型结构，而是把已有的参数高效微调和系统融合路线组合到这个低资源方言任务上。基础模型选的是 Voxtral-Mini-3B-2507，一个音频大语言模型，用 Whisper 式音频编码器接 3,000,000,000 参数的 Ministral 3B 语言模型。

微调方法用 LoRA，只训练加在注意力和前馈投影以及音频到文本投影上的低秩矩阵，原权重冻结。剪枝方面的相关工作在论文里有明确区分：传统幅度剪枝常要迭代压缩加再训练，AdaLoRA 在训练中剪奇异值，SparseAdapter 在初始化前剪，ComPEFT 做事后稀疏化以降参数量，WiSE-FT、LASER、TIES、DARE 则是权重插值或增量合并。本文的不同点是直接对低秩因子矩阵 A 和 B 做事后非结构化幅度剪枝，目的不是压模型大小，而是当作域内正则化。

融合用的是经典的 ROVER，即多个识别结果词对齐后投票。候选模型的选择参考了一个覆盖 5 种伊比利亚语言的 11 模型零样本榜单，以及 ESCUCHA 多口音西班牙语理解榜单，但论文后面显示这些通用榜单成绩并不能直接预测在乡村老年语音上的效果。

### 数据里具体的错配问题是什么

挑战发了两部分数据。预切分部分是 35 个录音切出的 14487 个短片段，都在 30 秒以内，共 23 小时，带人工检查过的转录；长文件部分是 8 个完整录音约 11.5 小时，只给说话人轮次的起止、说话人和文本，没有清洗也没有人工验证。

作者人工抽查发现大体是对得上的，但有几类错配：文本被放到相邻片段、转录不全或写错、轮次边界漂移。如果直接全量训练，第二阶段想用的干净子集就无从定义。

因为没有人力全量重标，论文需要一个自动打分方法来判断每条音频文本对得有多好，并且要能同时处理预切分短句和长文件轮次两种形态。这个分数后面既决定丢掉哪些数据，也决定课程学习的第二阶段用什么数据。

### 整个系统分几步走

全流程可以沿着一条样本理解。先对所有训练文本做规则清洗，把方言写法映射到实际发音形式，展开重叠标记，删掉笑声和匿名化等非语音标记。然后用 CTC 伪强制对齐给每条 utterance 打一个 Segment_Score，按 -2.0 切出高低置信度两池。

接着是识别模型本身。先在全部训练数据上做第一阶段 LoRA 训练，再从第一阶段 checkpoint 出发，只用高置信度子集小学习率做第二阶段精修。训练完不直接用，而是对 LoRA 矩阵做幅度剪枝扫保留比例 k，在内部验证集上选 k。

解码时评测长录音先过 VAD 切成 25 秒以内的窗口，逐窗识别再拼成整场文本，过幻觉过滤。最后把 7 个不同结构模型的窗口假设用 ROVER 投票融合成最终文本。训练划分按录音分，避免同一说话人同时出现在训练和验证里。

### 对齐分数怎么算又怎么用

对齐用的是 omniASR-CTC-7B 给出的 CTC 后验概率，方法来自引用的迭代伪强制对齐。对预切分片段，保留原边界，把该片段音频和对应文本对齐，记录整条对齐路径上的平均对数概率；对长文件，从原始轮次时间戳出发，用 CTC 精修语音边界再打分。分数低可能来自声学不匹配、重叠语音、转录漂移，也可能只是序列太长，论文明确说低分不等于转录一定错。

**CTC 伪强制对齐 × Segment_Score：** CTC 伪强制对齐指把已有文本转录与音频的 CTC 后验概率做路径对齐，找出每句话最可能的起止对应；Segment_Score 是这条对齐路径上的平均对数概率，用来衡量音频和文本匹配得多好。两者搭配后，前者提供计算过程，后者给出可排序的分数，论文才能按分数过滤低置信度片段。

实际操作是听了不同分数段后定了一个经验阈值 -2.0。低于它的大约丢掉预切分片段的 23.6% 和长文件轮次的 18.7%，剩下叫高置信度，进入课程第二阶段。第一阶段训练量约 30 小时共 17473 段，第二阶段剩约 23 小时共 14328 段。这个阈值是听感加经验定的，只用了一个对齐模型，所以偏差会直接传给后面的数据划分，这是论文自己承认的局限。

### 剪枝为什么只动 LoRA 矩阵

动机是数据太少，训练损失还在降，验证指标已经走平，说明适配器过拟合。第一阶段只有约 30 小时 36 个录音，第二阶段过滤后更少。

做法很简单：训练结束后，在每个被适配层的 A 和 B 矩阵里，只保留绝对值最大的 k 比例元素，其余置零。不改结构，不重训，扫 k 的代价只有解码。对两个阶段的终点都扫，在内部分割上选 k。

**LoRA 幅度剪枝 × 保留比例 k：** LoRA 幅度剪枝指训练结束后只保留 A 和 B 矩阵中绝对值最大的部分元素，其余置零，不改结构也不重训；保留比例 k 就是保留多大的分数。两者搭配把 k 变成一个只需解码就能搜索的正则化旋钮，用来压制小数据下的适配器过拟合。

效果上 Voxtral-Mini-3B 的第二阶段适配器剪后有明显改善，r=4 时改善 1.75 个百分点，r=16 时改善 2.43 个百分点，但 k 低于 0.20 后急剧变差。Canary 改善最多可达 3.9 个百分点，Qwen 系列中等，Seamless 曲线较平，而 omniASR-LLM-7B-v2 在所有比例上都变差 7 到 13 个百分点，论文解释是该模型用同一套 recipe 还没收敛。所以剪枝不是对谁都有效，k 也不能跨模型照搬。

### 长录音解码和后处理做了什么

因为评测是整场录音，推理前必须先切分。用 Silero VAD 阈值 0.3 找语音，把小于 500 毫秒的间隙合并，再把连续语音打包成最长 25 秒的窗口。切点放在 VAD 激活最小值附近的搜索裕量内，尽量保留自然停顿，不把不同段硬拼起来。

**VAD 切分 × 解码窗口：** VAD 切分指用 Silero VAD 找出语音活动段并合并短间隙；解码窗口指把连续语音打包成最长 25 秒的输入块送给识别模型。两者组合解决评测是整场长录音而模型一次只能吃短音频的问题，窗口变长能减少把词从中间切断的错误。

窗口长度是解码端最大的影响因素。从 10 秒放到 25 秒，官方 WER 改善 3.15 个百分点，原因是被切断在边界上的词比例从 18.6% 降到 2.9%。这个现象在内部预切分片段上看不到，因为内部本来就是切好的。

窗口转录按场拼接后过一个基于规则的幻觉过滤：超过 20 个字符的词若有字符级重复就截到词根；3 个以上连续重复词压成一个；3 个以上重复的多词短语去重。正式提交是先把各投票者的原始窗口假设融合，再对合成文本做一次过滤；内部实验则是先过滤再融合，这点复现时要注意保持一致。

### 七个投票者怎么选怎么投

单个结构调不动后，论文转向跨模型晚融合。按通用榜单选了 SeamlessM4T-v2、Qwen3-ASR-1.7B、Omnilingual-ASR 的 1B 版本对应的 omniASR-LLM-7B-v2，再加 Canary-1B-v2 和在 ESCUCHA 上最好的 Qwen3-Omni-30B-A3B。最终 7 个投票者是两个不同秩的 Voxtral-Mini-3B 加上后面 5 种结构。

所有模型都走同样的 2 阶段课程和剪枝扫描，但目标模块有两处不同：omniASR-LLM-7B-v2 只在编码器顶 16 层和整个解码器加 LoRA；Qwen3-Omni-30B-A3B 的专家权重以 FP8 冻结，只对音频编码器和解码器注意力投影加 LoRA。每个结构的阶段和 k 按它对集成在内部测试上的边际贡献选，而不是按单系统 WER 选。

**ROVER 融合 × 主系统：** ROVER 融合指把多个系统的词序列对齐到同一个主系统输出上，再按槽位多数投票决定每个词，标点和大小写单独投票；主系统就是对齐时用的基准，即最好的单系统。组合后多样性带来纠错能力，即使单个较弱的投票者也能在投票中贡献不同错误模式的修正。

投票时所有模型解码相同的 VAD 片段，做到窗口级对齐。以最好的单系统为基准对齐，槽位多数投票，平票偏向基准。标点和大小写与词本身分开投，先定归一化后的词身份，再定该槽位的大小写和标点，这样比绑在一起投好 0.48 个百分点。奇数个投票者也能减少偶数投票时的平票问题。

### 两阶段 LoRA 具体怎么训练

基座是 Voxtral-Mini-3B-2507 时，LoRA 加在编码器和解码器的注意力与前馈投影以及音频到文本投影上，alpha 除以 r 等于 2，dropout 0.10，权重衰减 0.05，400 步热身，在开发集损失上早停。

**LoRA 微调 × 两阶段课程：** LoRA 微调指冻结原模型大权重，只在注意力和前馈等投影上加可训练的低秩矩阵 A 和 B；两阶段课程指先用全部数据学宽泛声学特性，再用高置信度子集小学习率精修。组合的意义是先见全貌再做精修，避免一开始就被噪声转录带偏。

第一阶段在全部训练数据上用 1.5×10-4 学习率训练，第二阶段从第一阶段 checkpoint 恢复，只用高置信度子集，以 3×10-5 学习率最多训两个 epoch。想法是先抓住宽泛的域声学特性，再在对齐更干净的数据上精修。

不加剪枝时，第二阶段终点与第一阶段持平或更差，说明只在干净子集上精修会让适配器过拟合。加上剪枝后，被剪的第二阶段反而稳定超过第一阶段，课程才算被验证。论文的训练 recipe 只在 Voxtral 上调过，其他大模型直接套用，所以 omniASR 欠收敛等问题与调参不足有关，不能理解为结构本身不行。

### 数据划分和分数分布是什么样的

为防说话人泄露，按录音划分。开发集是 4 个预切分录音，来自 Valencia、Lérida、Murcia、Canarias，共 1492 段；内部测试集是 3 个录音，来自 Asturias、Aragón、País Vasco，共 720 段；其余包括全部长文件都做训练，第一阶段 17473 段约 30 小时，第二阶段高置信度 14328 段约 23 小时。调参、剪枝扫描和融合候选都只看这 720 段。

下面这张图是理解数据筛选的关键，读图时先建立分数越高匹配越好的方向感，再看阈值切掉了多少尾部。

> **看图路径：** 1. 先看横轴对齐分数与纵轴密度，确认大部分集中在 -2 到 0 附近；2. 比较蓝色预切分与橙色长文件两条分布的拖尾差异；3. 看 -2.0 虚线左右两侧各剩多少，理解被丢掉的比例；4. 注意最左端 -6 附近的小尖峰，对应严重失配片段

[![原论文 Figure 1：CTC alignment score distributions for pre-segmented clips and long-file turns.](https://arxiv.org/html/2611.11497v1/alignment_score_distributions.svg)](https://arxiv.org/html/2611.11497v1/alignment_score_distributions.svg)

*论文图 1。原论文 Figure 1:：“CTC alignment score distributions for pre-segmented clips and long-file turns. The vertical line marks the -2.0 threshold separating low- and high-confidence utterances.”。*

这张图横轴是 CTC 对齐分数 Segment_Score，纵轴是密度，蓝色实线是预切分片段，橙色虚线是长文件轮次，中间虚线是 -2.0 阈值。可见主体都挤在 -2 到 0 之间，左侧有长拖尾，最左 -6 附近还有一个小尖峰，对应严重失配。阈值左边标为低置信度，图例给出预切分低置信度占 23.6%，长文件占 18.7%。它说明丢掉的是一小部分尾部，而不是一半数据，同时也说明分数反映的是声学加对齐综合难度，不能直接当转录错误率读。

### 单系统和七系统集成的成绩是多少

比较的问题是同一任务下训练和融合是否带来可复现的改善，公平条件是内部都用 720 段聚合的 MeetEval WER，官方都在整场转录上由组织方打分，指标都是 WER 越低越好，WERnorm 是去掉大小写标点后的版本。

| 系统 | 官方 WER | 说明 |
| --- | --- | --- |
| 初始 LoRA 提交 | 45.47% | 表 1 个基线，未经完整课程剪枝与长窗口优化 |
| 最佳单系统 | 38.22% | Voxtral r=4 第二阶段剪枝后 |

上表把官方成绩放在同一条件下对比，内部零样本 Voxtral 是 49.20% 未归一化 WER，说明任务本身很难。表后要强调三点。第一，从 45.47% 到 38.22% 的下降是文本清洗、课程、剪枝和窗口共同作用，不是某一步单独的功劳；第二，最终集成相对最佳单系统净增益 1.97 个百分点未归一化、1.89 个百分点归一化，内部验证的增益方向与官方基本一致，误差在 2 倍以内，比窗口调参更可靠；第三，内部测试是预切分，官方是长录音，所以窗口收益只在官方侧显现，读数时不能把两种评测直接等同。未胜出的例子是通用榜单上很好的 Seamless 在内部零样本只有 62.73%，反而融合后很有用，说明通用成绩不能直接迁移到老年乡村语音。

### 剪枝和投票各自贡献了多少

要回答的是剪枝的 k 怎么选，以及增加投票者是否稳定带来增益，条件是每个结构都扫 k 在 0.2 到 1.0 之间，投票按固定顺序累加，指标仍是 WER 越低越好。

| 改进来源 | 幅度 | 条件 |
| --- | --- | --- |
| 后续加 Seamless | 改善 0.44 个百分点 | 第 5 个投票者 |
| 后续加 Canary | 改善 0.17 个百分点 | 第 6 个投票者 |

下面这组曲线解释了为什么 k 必须逐模型搜索不能照抄，需结合所处阶段与收敛状态一起判断。

> **看图路径：** 1. 先看每个子图横轴保留比例 k 从 1.0 到 0.2，纵轴是内部测试 WER；2. 区分橙色 Stage1 与蓝色 Stage2 两条曲线随 k 变小的走向；3. 找出 Voxtral 和 Canary 上明显的先降后升最低点；4. 单独看右下 omniASR 子图与其他图相反的上升趋势

[![原论文 Figure 2：Post-hoc LoRA magnitude pruning on the internal test set.](https://arxiv.org/html/2611.11497v1/pruning_curves.svg)](https://arxiv.org/html/2611.11497v1/pruning_curves.svg)

*论文图 2。原论文 Figure 2:：“Post-hoc LoRA magnitude pruning on the internal test set. Curves show two stages WER across keep ratios k\in[0.2,1.0].”。*

这张图有 7 个子图，每个子图横轴是保留比例 k 从 1.0 到 0.2，纵轴是内部 WER，橙色是 Stage1，蓝色是高置信度精修的 Stage2。Voxtral 两个子图和 Canary 子图都是随 k 减小先明显下降再上升，有清晰最低点；Qwen3-ASR 和 Qwen3-Omni 下降较缓；Seamless 基本走平后才变差；只有 omniASR-LLM-7B 随剪枝一路上升 7 到 13 个百分点，与其他图方向相反。

结合正文，这正好对应欠收敛模型的例外，说明剪枝只在训练充分的适配器上起正则作用。执行上先在全部训练数据上以大学习率学到宽域声学特性，再从第一阶段断点以小学习率在高置信子集上精修至多两轮，剪枝时保留每个 LoRA 因子矩阵 A 和 B 中绝对值最大的 k 比例并在内部验证划分上选 k，只付解码代价而不改结构重训。

融合侧即使加入比最优单系统差 10 个百分点的投票者仍有增益，所有模型解码相同 VAD 切分后以最优单系统为轴对齐投票、平票归轴，标点大小写独立投票，但都是事后在内部集上选阶段和 k，实际部署时需要预留独立的验证划分。

### 这些结论在什么条件下才成立

第一，对齐过滤只用了一个 CTC 模型 omniASR-CTC-7B，它的声学偏差会直接进入高低置信度划分，换一个对齐模型阈值和留存比例都可能变。

第二，剪枝率 k 和课程终点都不跨模型通用。Voxtral、Qwen、Seamless、Canary 的最优点各不相同，omniASR 甚至不该剪。论文的训练超参只为 Voxtral 调过，其他模型直接套用，所以跨结构比较不是同等调优下的胜负。

第三，数据量和说话人覆盖很小，训练只有 36 个录音约 30 小时，内部测试只有 720 段，官方长录音也只有少量场次。窗口、VAD 和幻觉过滤的收益都依赖长录音评测条件，换成预切分短句评测会消失。没有报告延迟、计算成本和人工听感评价，不能把 WER 下降理解为可用性或实时性同样改善。

### 想复现第一步该做什么

复现时先按录音划分出开发和内部测试，不要按片段随机分，否则说话人泄露会虚高成绩。然后做文本清洗：方言对映射到口语形式、展开重叠标记、删掉非语音和匿名标记，再用 CTC 模型给每条打 Segment_Score，按分数分布和抽听定阈值，不要直接照搬 -2.0。

接着用小秩 LoRA 跑 2 阶段训练，第一阶段全量大学习率，第二阶段高置信度小学习率短训，两个终点都扫 k 选剪枝。解码先固定 VAD 和 25 秒窗口，再调融合。关键超参是 alpha/r=2、dropout 0.10、权重衰减 0.05、400 步热身、2 阶段学习率 1.5×10-4 和 3×10-5。

需要补的验证是换对齐模型看过滤稳定性、给每个大模型单独调学习率和目标模块、报告多次随机种子的方差，以及在官方长录音上单独消融窗口与幻觉过滤。关于资源，论文没有给出可用链接，本次也没有发现完成验证的作者代码模型数据资源，所以应按未公开处理，代码、权重、系统可运行要分开确认，不能默认能下载即能运行。

### 什么时候值得尝试这套做法

当你的任务也是小数据自发语音、转录有噪声但大体可用时，这套先全量适应再在高置信度子集上精修的思路值得试。CTC 对齐分数提供了一个便宜的自动筛选信号，事后 LoRA 剪枝提供了一个只需解码代价的正则化旋钮，ROVER 则用多结构多样性换稳定的 1 到 2 个百分点增益。

容易产生的误解有 3 个。一是把低对齐分直接当转录错误，原文明确说它还包含重叠、声学失配和长序列难度；二是把剪枝当成压缩模型，本文剪的是小适配器且不省多少推理，只是防过拟合；三是把通用榜单排名当选型依据，本文 Seamless 的例子说明在老年乡村语音上必须用域内验证重排。

总体看，论文的价值不在单点创新，而在于给出了一个在 34 小时方言老年语音上可走通的完整配方，并如实报告了剪枝失效和调参不通用的反例。后续工作应补模型专属优化和更稳的验证划分，而不是继续堆投票者数量。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：系统技术报告 | [arXiv 原文](https://arxiv.org/abs/2611.11497v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-12/)
