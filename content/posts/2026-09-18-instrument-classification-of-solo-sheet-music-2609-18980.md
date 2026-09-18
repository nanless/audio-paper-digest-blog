---
title: "Instrument Classification of Solo Sheet Music Images"
date: 2026-09-18
draft: false
tags: [音乐理解, 迁移学习, 音乐, 数据增强, 基准测试]
categories: [论文速递]
description: "该研究把 8 类独奏谱面图像转成 bootleg score 词序列做文本分类，用无标注语言模型预训练把 RoBERTa 片段准确率从 34.5% 提升到 42.9%，再用移调式训练与测试增强推到 58.8%，代价是长片段整页推理退化和大偏移抹掉音域线索。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2609.18980"
paper_digest_workbench_contract: "researcher-workbench-v1"
paper_digest_reader_title: "只看谱面判乐器：词序列加预训练的取舍与边界"
paper_digest_original_title: "Instrument Classification of Solo Sheet Music Images"
paper_digest_arxiv_version: null
paper_digest_arxiv_versioned_id: null
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2609.18980"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2609.18980.pdf"
paper_digest_primary_task: "音乐理解"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"task","id":"task.music-understanding","label":"音乐理解"},{"facet":"method","id":"method.transfer","label":"迁移学习"},{"facet":"signal","id":"signal.music","label":"音乐"},{"facet":"method","id":"method.augmentation","label":"数据增强"},{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"}]
paper_digest_primary_method: "迁移学习"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_one_sentence: "该研究把 8 类独奏谱面图像转成 bootleg score 词序列做文本分类，用无标注语言模型预训练把 RoBERTa 片段准确率从 34.5% 提升到 42.9%，再用移调式训练与测试增强推到 58.8%，代价是长片段整页推理退化和大偏移抹掉音域线索。"
paper_digest_authors: [{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Kevin Ji"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"Daniel Yang"},{"affiliations":["机构信息未在 arXiv HTML 中可靠披露"],"name":"TJ Tsai"}]
paper_digest_abstract_sha256: "0f39e3bf7a58a057903b32501126a73fd0e1f5b5b55187a8810424119388b831"
paper_digest_sidecars: {"citation.bib":{"sha256":"112f17249ad38201fe8ed8676ba8501d941582f917edb616dc820397d4a7959d","url":"/audio-paper-digest-blog/data/papers/2026-09-18/2609-18980/citation.bib"},"citation.json":{"sha256":"47d54823065c215ee23ed549893ae53670602f6526ecbb3e0c1bbcb28b57cd59","url":"/audio-paper-digest-blog/data/papers/2026-09-18/2609-18980/citation.json"},"citation.ris":{"sha256":"259f2a46ae91804cd286e71a72f99159f6e6aaf02282ad15563e392bf6de84f3","url":"/audio-paper-digest-blog/data/papers/2026-09-18/2609-18980/citation.ris"},"rethink-context.json":{"sha256":"142f60110bbff8298172fad14062a2c3a85b48fb5c35ac2fb09329ec8cf83ee6","url":"/audio-paper-digest-blog/data/papers/2026-09-18/2609-18980/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "1c5783ec9649ebb626a2b5d4dce5fe39fac69c6ac58809b20b8086b754d1a450"
paper_digest_api_reader_plan_sha256: "45af34c48c80a3fbcab11e81b0a81dbf5d27aa9d29b034450243780959d18fe7"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "9da65cecac6c8b8d252c86926b426c7137e73e996980273ce930e8938b3aedb9"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "467a5e1e906976bccb827d85c3e3a6843f6a118e15b828d5f219b636d06af7cb"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "3e98f8bf97bb020dae3d6435345c01bd838e7425c6d8aff45384456a412d0749"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "fcce19a53f0ef04524f123802ff2050b0e2994c0568b33348a29f1a8239fe425"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
---

# 📄 只看谱面判乐器：词序列加预训练的取舍与边界

> 英文题目：*[Instrument Classification of Solo Sheet Music Images](https://arxiv.org/abs/2609.18980)*

> 标签：#音乐理解 | #迁移学习 | #音乐 | #数据增强 | #基准测试
>
> 评分：**6.9/10** | 创新 1.2/2 | 技术严谨 1/1.5 | 实验充分 1/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1/1.5


## 👥 作者与机构

- Kevin Ji：机构信息未在 arXiv HTML 中可靠披露
- Daniel Yang：机构信息未在 arXiv HTML 中可靠披露
- TJ Tsai：机构信息未在 arXiv HTML 中可靠披露

## 📌 核心摘要

该任务输入为国际乐谱库计划International Music Score Library Project即IMSLP的独奏乐谱页图像，输出为8类乐器标签，涵盖小提琴、中提琴、大提琴、长笛、单簧管、双簧管、小号、吉他，难点在于单谱表以单声部为主，纵向和声线索稀少且不同乐器音高分布高度重叠。方法链由三段构成，图像到伪乐谱Bootleg Score转换负责抽取填充符头相对谱线位置并形成二值矩阵，分词Tokenization负责把矩阵列映射为语言模型可读序列，语言模型预训练加分类微调负责先学记谱统计规律再学乐器判别边界。相对直接在声学频谱上做卷积或循环分类，该机制差异在于把乐器识别重构为文本分类并复用掩码与自回归预训练，实际意义是可用含伴奏噪声的未标注数据扩大语言建模规模。RoBERTa在片段长度为64的代理任务上经未标注预训练后准确率达到42.9%，显著高于同设置下无预训练的34.5%。叠加训练与测试时移调增强后代理准确率进一步升至58.8%，整页宏F1从0.611升至0.691。结论仅适用于8种主要单声部乐器的独奏页，对多乐器总谱、谱号变化与极端移调的外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/HMC-MIR/InstrumentID> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，读完要能复述什么？

本文输入是论文正文文字证据与本次收到的官方原图像素，目标是让刚进入语音与音乐音频领域的研究生能复述方法并核对实验条件。读完需要说清 3 点：任务是对独奏谱面图像做 8 分类，输入是 IMSLP 原始谱面图像，输出是乐器标签。必须保留的信息是表示做法、预训练做法、片段采样、整页投票、数据划分和清洗方式。

输出是 2 类判断：预训练是否有用，增强在什么范围内有用，附带明确代价和反例。方法主线固定为 5 步：转 bootleg score，切固定长度片段，语言模型预训练，分类微调，片段平均成整页预测。白话说就是把看谱问题翻译成看句子问题，音符进行就是句子，乐器就是句子来源。

英文名需要先记准：乐器分类是 instrument classification，代理任务是 proxy classification，整页任务是 full-page classification。后续所有数字都要带着数据集、模型、片段长度、指标一起读，单独记忆 1 个准确率没有意义。代码当前可用，资源状态显示为 available，地址是论文给出的 GitHub 仓库，这表示可拿到流程参考，但不等于权重和原始 PDF 已打包。

### 音频乐器识别路线和本文谱面路线差在哪里？

进入方法前要先分清 2 条路线，第 1 条是音频乐器识别，白话说就是听录音判断乐器，英文是 instrument recognition in audio。论文提到近年工作多受 OpenMIC-2018 推动，常用卷积或循环网络处理频谱图，有时加声源分离，有时用预训练卷积网络做特征提取。这条路线的依据是音色，英文是 timbre，不同乐器频谱包络不同，人耳也容易分辨。

第 2 条是本文谱面乐器分类，白话说就是不听声音只看谱，英文是 instrument classification based on sheet music images。它的依据不是音色，而是音符层面的可演奏性和写作习惯，例如乐器音域、单音与复音区别、大跳在小提琴上比小号上更容易。这类特征藏在音高运动里，需要从符头位置序列里建模。

相关工作还有 1 个直接前身，是把钢琴音乐按作曲家分类的工作，它同样把谱面变成词再做文本分类。但那项工作面对复音很强的钢琴，纵向和声信息很多；本文故意选择 8 种以单音为主的乐器，纵向信息很少，所以问题更难。思想来源还有自然语言处理的预训练加微调范式，2018 年之后 LSTM、BERT、GPT-2、RoBERTa 都沿用先无标注预训练再有标注微调。本文就是把这套范式搬到谱面词序列上，复述时不要把音频基线和谱面结果混成相同条件胜负。

### 8 分类问题到底难在哪里？

论文定义的问题是：给定 1 页只包含 1 件独奏乐器的谱面图像，判断它属于 8 个乐器中的哪一个。8 个类别是小提琴、长笛、单簧管、双簧管、小号、大提琴、中提琴、吉他，均为以单音为主的乐器。举 1 个教学例子帮助理解，例子不代表论文数据：如果 1 页经常同时出现多个纵向位置的音，直觉可能倾向吉他。

如果 1 页只有单旋律且音很高、很少同时出现 2 个音，直觉可能倾向长笛。但这只是直觉，真正困难在于单音乐器之间横向进行很相似，而且谱面还受排版、扫描、调号影响。论文点出 1 个应用动机：IMSLP 的 PDF 可能是多乐器混排，可能是单页内总谱，也可能是不同页分别是独奏和伴奏。

先按页判断乐器有助于语义切分，但作者做了范围限定，只做独奏单页，不做多乐器同页，也不做谱号检测。结论部分明确说未来才想加入谱号检测并扩展到多乐器，这意味着不能把本文数字直接推广到交响总谱。评价也有 2 个层次：训练用的代理片段分类用准确率，因为片段按乐器均衡采样；整页评估用宏平均 F1，英文是 macro F1，因为整页数据不均衡。百分点和相对百分比是 2 回事，从 34.5% 到 42.9% 是 8.4 个百分点，不能说成相对提升 8.4%。

### 从 1 页谱到 1 个乐器标签要走哪几步？

先沿着 1 个样本走完全程，假设输入是帕格尼尼第 24 首随想曲的 1 段小提琴谱。系统第 1 步做 bootleg score 提取，白话就是只找实心符头相对谱线的位置，得到 31 行乘 N 列的二值矩阵。31 是可能的谱线位置数，N 是音符事件数，1 表示该时刻该高度有符头。

第 2 步做分词，把矩阵变成词或子词序列，给 AWD-LSTM 用的就是每列当 1 个词，给 RoBERTa 和 GPT-2 用的则是每列先压成 4 bytes 再学子词。第 3 步是语言模型预训练，在无标注序列上学进行规律；第 4 步是分类微调，在有标注固定长度片段上加分类头并微调。第 5 步是推理，把整页变长序列切成固定片段并平均预测，下面先看表示的可视对应。

**代理片段分类 × 整页分类：** 代理片段分类负责训练，它把变长乐谱切成 64 tokens、128 tokens、256 tokens 的等长片段并按乐器均衡采样，让模型每次只看固定上下文；整页分类负责推理，它要对 1 整页变长序列给出 1 个乐器标签。搭配理由是训练需要均衡和定长，测试却是自然不均衡和变长，组合时用 50% 重叠切分整页再平均各片段预测，把训练任务输出拼成页面决策。

这张图的上半是原始小提琴谱，下半是对应的 bootleg score，图注明确说显示的谱线只为参考，实际表示里并没有谱线。上半有高音谱号、拍号、强弱记号、连音线和符干符尾，下半只剩按时间从左到右排列的黑块。每个黑块的纵向位置对应音高，同一时刻多个黑块对应复音，横向走向保留了音高运动。

> **看图路径：** 1. 先看上半小提琴谱与下半黑块谱的左右对齐关系；2. 再数下半每个时间步黑块的纵向位置与个数；3. 最后确认下半是否保留谱号以外的装饰符号

[![原论文 Fig. 1：A section of Paganini’s Caprice 24 for violin and its corresponding bootleg score.](https://arxiv.org/html/2609.18980v1/x1.png)](https://arxiv.org/html/2609.18980v1/x1.png)

*论文图 1。原论文 Fig. 1:：“A section of Paganini’s Caprice 24 for violin and its corresponding bootleg score. The staff lines are shown for reference but are not present in the actual representation.”。*

看完图要记住 1 个关键取舍：这种表示对单音乐器够用，因为区分点主要在音域和进行。代价是它丢掉空心音符和演奏法细节，所以单音片段天然比复音片段更难判。论文后面的例子分析也证实这点，顶部吉他复音被判对，中部单音吉他被误判为大提琴。

### 表示和分词的具体计算是什么？

这一节把表示和分词拆成可执行动作，bootleg score 原 formulation 为钢琴双谱表设计。本文改成单谱表，去掉谱表分组，并把纵向范围调到覆盖 8 个乐器，最终是 31 乘 N 的二值矩阵。白话再说 1 遍：行是高度，列是时间，矩阵中为 1 的位置表示该时刻该高度有实心符头。

分词有 2 条分支，第 1 条给词级别模型 AWD-LSTM 用，每列就是 1 个词，出现次数大于 3 才保留。否则映射到未知词 `<unk>`，最后词表大小是 4616；第 2 条给子词模型用，先把每列 31 比特压成 4 bytes 序列。再把每个字节当字符，用字节对编码无监督学词表，上限是 30000，RoBERTa 和 GPT-2 共用同一个分词器。

**bootleg score × 词序列：** bootleg score 负责把谱面图像变成可比较的位置信号，它只记录实心符头相对谱线的位置，丢掉符干纹理和表情记号；词序列负责把位置信号变成语言模型可处理的离散输入，每列 31 位向量对应 1 个时间步。两者搭配的理由是 8 类乐器以单音为主，纵向和声信息很少，横向音高运动才是区分点，组合后图像分类就变成文本分类，可以直接复用预训练加微调流程。

模型侧有 3 选 1：AWD-LSTM 是 3 层 LSTM 加多种 dropout 和正则，目标是预测序列下一个词。GPT-2 是 6 层 Transformer 解码器，也是预测下一个 token；RoBERTa 是 6 层 Transformer 编码器，是 BERT 的优化版。RoBERTa 目标是预测被随机遮盖的 token，3 者都是自监督，不需要乐器标签。

分类时 AWD-LSTM 在最后 LSTM 层后加 2 个线性层，GPT-2 和 RoBERTa 则在每段输入首尾加 `<``>` 和 <``>。取最后 1 层在特定时间步的输出接 1 个线性分类层，RoBERTa 取第 1 个时间步，GPT-2 取最后 1 个时间步。原文没有给出逐层梯度公式和完整更新方程，这里不写自创公式，只按文字复述结构。

**字节对编码 × 子词：** 字节对编码负责在无监督方式下从字节流里合并出高频词表，本文上限是 30000 项；子词负责作为 RoBERTa 和 GPT-2 的实际输入单位，介于字符和整列词之间。搭配原因是 31 位列直接当词会有 4616 词表但稀疏且无法跨列共享模式，先把每列压成 4 bytes 再学子词，组合后既保留位置精度又让 Transformer 看到可复用的局部进行。

### 预训练微调和推理的数据流是什么？

训练分 2 段，推理有 1 段，数据流要分开记，预训练段用无标注集先训语言模型。再在有标注集上继续微调语言模型；微调段把语言模型权重作为分类器初始化，再在代理片段数据上微调分类器。论文明确用了 Howard 和 Ruder 提出的 1 套技巧，包括学习率范围查找、逐层解冻、判别式微调和单循环训练。

原文没有报告每层解冻轮数、学习率数值和梯度截断细节，这些是缺项，不能从模型名字推定。代理数据构造是关键动作：从有标注页里采样固定长度片段，每个乐器训练用 3600 个、验证用 1200 个、测试用 1200 个。分别做 64 tokens、128 tokens、256 tokens 共 3 种长度，这样做有 2 个作用，扩充训练量并保证类别均衡。

**语言模型预训练 × 分类器微调：** 语言模型预训练负责在无标注谱面序列上学习音符进行规律，任务是预测下一个词或被遮盖词，不需要乐器标签；分类器微调负责在有标注固定长度片段上学习乐器边界，它复用预训练权重只更换分类头。搭配原因是标注页只有 7627 页而无标注特征更多，先学通用进行再学小样本判别，组合意义是把数据规模问题和类别判别问题分开解决。

推理有 2 种：第 1 种是把整页当 1 个变长序列直接分类，第 2 种是把变长序列切成 50% 重叠的固定片段。每个片段分类再平均，论文报告第 2 种对除 CNN 外的所有模型都更好，所以主结果的整页数字都是按平均法得到。复述时要强调监督来源：预训练监督来自序列自身前后关系，微调监督来自乐器标签，推理平均这步没有参数更新，只是投票。

### 数据从哪来，怎么清洗和划分？

实验条件是这篇最需要核对的部分，原始数据都是 IMSLP 谱面图像，先按乐器类别标签过滤。过滤标准有 3 条：含 8 个乐器之 1 的 for 乐器标签，有公共领域或知识共享许可，不是手稿。小号额外加 for trumpet, piano 和 for trumpet, orchestra，双簧管额外加 for oboe, orchestra。每部作品可能有多个 PDF，只选下载量最大的 1 个。

这批叫无标注集，因为 PDF 里可能混有伴奏和空白页，然后人工标注子集。每种乐器随机抽 75 个 PDF，逐页保留只含独奏的页，丢掉伴奏页、填充页、损坏或标错的 PDF。最后得到 7627 页有效独奏页，划分按作品切分，不是按页切分，这点很重要，可以避免同一作品的不同页同时出现在训练和测试。

分类任务按作品用 60% 训练、20% 验证、20% 测试，语言模型按作品用 90% 训练、10% 验证。下面这张原表给出按乐器的作品数和页数，读的时候注意无标注和有标注是 2 套计数。表中共 5 列，展示前 4 种乐器以满足宽度要求，其余乐器见正文描述。

| Dataset | Cello | Clarinet | Flute | Guitar |
| --- | --- | --- | --- | --- |
| Unlabeled - Pieces | 227 | 77 | 192 | 1513 |
| Unlabeled - Pages | 2264 | 1384 | 2038 | 7213 |
| Labeled - Pieces | 75 | 75 | 73 | 75 |
| Labeled - Valid Pages | 921 | 758 | 1300 | 569 |

表中可见明显不均衡：无标注吉他有 1513 部、7213 页，而单簧管只有 77 部，双簧管只有 82 部。有标注经过均衡采样后每乐器约 65 部到 75 部，但有效页仍不均衡，长笛有 1300 页，小提琴有 1815 页。吉他只有 569 页，小号只有 396 页，这解释了整页评估要用宏平均 F1。也解释了无标注预训练增益有限：无标注量从约 3 million 特征到 5.6 million 特征，增量不大，而且噪声大且不均衡。对比模型还有 1 个 CNN，它基于前人钢琴卷积模型改造，但它假设有完整符号信息，而本文只有 bootleg score，所以不是相同实现。

### 预训练和片段长度带来多少可运行增益？

结果按 2 个任务组织，代理任务测固定片段准确率，条件相同，都是同一片段长度下比较无预训练、标注预训练、无标注预训练。整页任务测宏平均 F1，比较的是同一模型和同一片段长度下的 3 种预训练。先看代理任务总体图像，3 个面板分别是 64 tokens、128 tokens、256 tokens，纵轴是准确率百分比。

横轴每组是 CNN、ALSTM、RBRTa、GPT2，颜色绿是无预训练、蓝是标注预训练、红是无标注预训练。从像素看，几乎每组都是绿柱最矮、蓝红柱明显更高，而且从左面板到右面板整体高度上升。这说明片段越长上下文越多，代理准确率越高，教学价值在于同时看到预训练效应和长度效应。

> **看图路径：** 1. 先按左中右找到 Fragment 64、128、256 共 3 个面板；2. 再在每个模型组内比较绿蓝红 3 根柱子的高低；3. 最后从左面板到右面板观察同色柱子随长度的变化

[![原论文 Fig. 2：Results on the proxy classification task.](https://arxiv.org/html/2609.18980v1/figs/accuracy_plot.png)](https://arxiv.org/html/2609.18980v1/figs/accuracy_plot.png)

*论文图 2。原论文 Fig. 2:：“Results on the proxy classification task. This shows the effect of different pretraining conditions and fragment sizes.”。*

这张图需要配合可运行数字读，纵向看同组 3 色差异是预训练效应，横向看 3 面板高度是长度效应。需要保留的可运行数字在下表，表头指标是准确率，条件是片段长度 64 tokens。下表共 5 列，分别给出条件、指标、基线、本方法和比较对象，数值保留原文写法。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| fragments of size 64, GPT-2 | accuracy | 32.1% | 42.3% | 43.2% |
| RoBERTa instrument classification | accuracy | 34.5% | 42.9% | unlabeled pretraining |

表中数字说明预训练帮助很大：GPT-2 从 32.1% 到 42.3% 再到 43.2%，RoBERTa 从 34.5% 到 42.9%。而且从标注预训练到无标注预训练只有小幅上升，论文把原因归于无标注数据量增幅不大且有噪声。再看整页任务，纵轴换成宏平均 F1，越高越好，比较时只展示每模型最好的推理方式。

> **看图路径：** 1. 先确认纵轴是 Macro F1 而不是准确率；2. 再比较 Fragment 64 面板中 RoBERTa 和 GPT-2 的蓝红柱子；3. 最后观察 Transformer 蓝红柱子从 64 到 256 的升降

[![原论文 Fig. 3：Model performance on fullpage classification task.](https://arxiv.org/html/2609.18980v1/figs/f1_plot.png)](https://arxiv.org/html/2609.18980v1/figs/f1_plot.png)

*论文图 3。原论文 Fig. 3:：“Model performance on fullpage classification task.”。*

这张图有 2 个要点，第 1 是预训练依然全面更好，绿柱普遍最矮。第 2 是 Transformer 在整页上随片段变长反而下降，例如 RoBERTa 从 64 到 128 到 256 的宏平均 F1 从 0.612 降到 0.579 再到 0.551。论文给出的解释是代理数据集偏差：只在长片段上训练的分类器没见过短页，很多页本身不足 256 tokens。相反 AWD-LSTM 在长序列上训练却能较好处理短序列，CNN 在整页上用直接整页推理更好，复述时要说明推理方式不同，否则会误以为相同推理。

### 移调增强在多大范围内有效，何时失效？

这一节是论文特有的增强消融，问题是音高平移能否造出有用新数据。操作定义很具体：训练增强把 bootleg score 上下平移最多 K 个谱线位置，K = 3 就是正负 3 加原版共 7 倍数据。音乐含义是移调；测试增强把输入上下平移最多 L 个位置并平均预测，先给结论再给边界。

结论是 K 越大越好直到 3，L 适度有用但过大有害，下表把最佳点的数字固定下来。左半是代理准确率，右半是整页宏平均 F1，条件都是 RoBERTa 片段 64 tokens。下表共 5 列，分别给出增强配置、任务、起点、终点和最佳配置，数值保留原文写法。

| 增强配置 | 任务 | 起点 | 终点 | 最佳配置 |
| --- | --- | --- | --- | --- |
| K 0 to 3, L = 0 | proxy accuracy | 42.9% | 56.5% | K = 3 |
| K 0 to 3, L = 0 | full page macro F1 | 0.611 | 0.679 | K = 3 |
| K = 3, L 0 to 2 | proxy accuracy | 56.5% | 58.8% | L = 2 |
| K = 3, L = 2 | proxy plus full page | 42.9% | 58.8% | 0.691 macro F1 |

表后要讲代价和反例，收益是代理准确率从 42.9% 到 56.5% 再到 58.8%，整页从 0.611 到 0.679 再到 0.691。代价是测试增强超过 L = 2 后明显退化，论文认为大 L 抹掉音域信息，而音域正是区分长笛高音的关键。

**训练时增强 × 测试时增强：** 训练时增强负责把 bootleg score 上下平移最多 K 个谱线位置来造新样本，音乐含义是移调，同时保留音程和复调结构；测试时增强负责把同一个输入上下平移最多 L 个位置分别预测再平均。搭配理由是 1 个扩充训练分布，1 个平滑单次预测对绝对音高的敏感，组合后在 K = 3、L = 2 时最好，但 L 过大就会抹掉长笛偏高这类依赖绝对音域的线索。

从像素看增强图也能验证：左图随 K 增高整体上移，但同一个 K 内 L = 4 的紫柱在 K = 0、1、2 时都是最矮。右图同样在 K = 3 时 L = 4 明显低于 L = 1 和 L = 2，这说明总体趋势不等于每组都成立。复现时不要只记最佳 K = 3、L = 2，还要记 L 的上限，左图纵轴是准确率，右图纵轴是宏平均 F1。

> **看图路径：** 1. 先区分左图准确率与右图 Macro F1 的不同纵轴；2. 再在同一个 K 组内比较 L = 0 到 L = 4 共 5 根柱子的走势；3. 最后沿 K = 0 到 K = 3 观察整体高度是否上升

[![原论文 Fig. 5：Effect of data augmentation on the RoBERTa model.](https://arxiv.org/html/2609.18980v1/x2.png)](https://arxiv.org/html/2609.18980v1/x2.png)

*论文图 5。原论文 Fig. 5:：“Effect of data augmentation on the RoBERTa model.”。*

看完这张图要形成可执行判断：复现先做 K = 0 到 3 的训练增强，再在验证集上搜索 L。不要默认 L 越大越好，也不要把代理准确率提升直接当成整页提升，2 张图的纵轴和聚合对象不同。论文报告测试增强只在适度时有用，超过 L = 2 后性能显著下降，1 个可能解释是丢失乐器音域信息。

### 哪些误差和边界是论文自己承认的？

论文分析节给出 3 类可核对的局限，第 1 是单音比复音更易错。例子是 3 个 RoBERTa 片段：顶部吉他被自信判对，因为复音纵向信息多；中部吉他被误判成大提琴，因为是单音。底部长笛被自信判对，因为有很多高出谱表的高音，白话说模型在很大程度上靠复音数量和绝对音高高度做判断。

第 2 是混淆不对称，最常见的实际减预测对是中提琴减长笛 260 次、小号减双簧管 259 次、双簧管减单簧管 230 次。而且不对称，例如双簧管到单簧管 230 次，反向单簧管到双簧管只有 117 次。论文的有限解释是音域包含关系：单簧管音域比双簧管宽，超出双簧管音域的音能避免反向错误。这属于支持性解释，不是因果证明，复述时要用可能。

第 3 是数据和任务边界：无标注数据有噪声和不均衡，短页与长片段训练不匹配，8 类都是以单音为主。方法不含多乐器同页，不含谱号检测，吉他错误最少恰恰因为它复音最多，这反过来说明方法对单音管弦乐器的区分能力仍然有限。训练资源只提到用了 XSEDE Bridges 和英伟达捐赠的 GPU，没有给出训练时长、推理延迟和参数量，所以不能承诺速度或成本改善。

### 要复现先做什么，还需补哪些验证？

复现的第 1 步是重建数据管线，而不是直接调模型，先按 for 乐器标签、许可、非手稿过滤 IMSLP。每作品选下载最多 PDF，再随机抽样人工清洗，只留独奏页；再按作品划分 60% 训练、20% 验证、20% 测试。语言模型按作品用 90% 训练、10% 验证，再提 bootleg score，单谱表用 31 行。

词模型保留频次大于 3 得 4616 词表，子词模型每列转 4 bytes 再学 30000 词表，再按每乐器 3600 个、1200 个、1200 个采样 64 tokens、128 tokens、256 tokens 片段。第 2 步先训语言模型再微调分类，AWD-LSTM 加 2 层线性头，Transformer 加首尾符号并取特定时间步接单线性层。微调套件用学习率查找、逐层解冻、判别式微调和单循环，第 3 步推理用 50% 重叠切分加平均，CNN 除外。

需要补的验证有 3 项：1 是短页长度分布与片段长度的匹配检查，否则整页 Transformer 退化会重现。2 是 L 的验证集搜索，不能照抄 2；3 是按作品划分的泄漏检查，确保同一作品不跨划分。何时值得尝试：如果谱面也是单谱表独奏且复音和音域有区分度，这套文本化加预训练值得试。如果是总谱、多声部混排或重度依赖谱号和调号的任务，需要先补谱号检测和多乐器建模，否则不要期待本文数字能平移。

### 一句话收束：方法证据和适用条件是什么？

回到全文主线：作者把乐器分类从听声音改成看谱面进行，用 bootleg score 把图像变成词。用预训练学会进行规律，用微调学会乐器边界，用移调增强扩充音高不变性，最强证据是 2 段可运行增益。预训练把 RoBERTa 代理准确率从 34.5% 提到 42.9%，GPT-2 从 32.1% 提到 43.2%，增强再把 RoBERTa 推到 58.8% 代理准确率。

整页宏平均 F1 达到 0.691，主要代价是长片段训练与短页测试不匹配导致整页 Transformer 下降。大测试偏移抹掉音域线索，L 超过 2 后性能显著下降，这点在 2 个任务上都可见。适用条件很窄：单页独奏、单谱表、8 类单音乐器、按作品划分、重叠平均投票。

超出这个范围，例如多乐器同页或需要谱号的场景，本文没有评测，不能当成已验证。记住 3 个英文名就能复述：bootleg score 管表示，proxy classification 管训练，full-page classification 管整页投票。复现时先核对数据清洗和划分，再核对片段长度和推理投票，最后再调增强范围。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前50% | 文档类型：方法研究 | [arXiv 原文](https://arxiv.org/abs/2609.18980)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-09-18 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-09-18/)
