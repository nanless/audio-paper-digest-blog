---
title: "LAION-Audio-XL: A Web-Scale Corpus and Scaling Studies for Contrastive Language-Audio Pretraining"
date: 2026-11-12
draft: false
tags: [音频检索, 对比学习, 数据集, 模型评估]
categories: [论文速递]
description: "论文要解决音频文本对比学习缺大规模公开数据的问题，用 1.48B 原始音频经去重筛选加字幕生成得到 365M 对并训练 27M 到 340M 的 CLAP2，在 MAEB-30 上随计算量呈约每翻倍涨 1.8 点的趋势，但长音频训练更贵而效果更差。"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2611.11592"
paper_digest_workbench_contract: "researcher-workbench"
paper_digest_workbench_schema_fingerprint: "1f09b594c317cc38e934de27a5b0e8ceb4baa50ef79bd4f8683dd9adea720fe7"
paper_digest_reader_title: "用三点六五亿条音频文本对做对比学习：LAION-Audio-XL 如何搭数据与测缩放"
paper_digest_original_title: "LAION-Audio-XL: A Web-Scale Corpus and Scaling Studies for Contrastive Language-Audio Pretraining"
paper_digest_arxiv_version: 1
paper_digest_arxiv_versioned_id: "2611.11592v1"
paper_digest_arxiv_abs_url: "https://arxiv.org/abs/2611.11592v1"
paper_digest_arxiv_pdf_url: "https://arxiv.org/pdf/2611.11592v1.pdf"
paper_digest_primary_task: "音频检索"
paper_digest_tags_contract: "paper-tag-flat-tags"
paper_digest_tags_schema_fingerprint: "27e36280a4b8d3df62ebe54d3ab037920f4d69feb2b554163f01bbae2caf4338"
paper_digest_tags_selection_contract: "paper-tag-selection"
paper_digest_tags_registry_version: "paper-tag-catalog"
paper_digest_tags_registry_sha256: "9673bc0122e1905a5dcfd8b223675400cc2fa4c36095bc0e5f817edf99a0ec5c"
paper_digest_tags_concepts: [{"facet":"task","id":"task.audio-retrieval","label":"音频检索"},{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"research_focus","id":"research_focus.evaluation","label":"模型评估"}]
paper_digest_primary_method: "对比学习"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_one_sentence: "论文要解决音频文本对比学习缺大规模公开数据的问题，用 1.48B 原始音频经去重筛选加字幕生成得到 365M 对并训练 27M 到 340M 的 CLAP2，在 MAEB-30 上随计算量呈约每翻倍涨 1.8 点的趋势，但长音频训练更贵而效果更差。"
paper_digest_authors: [{"affiliations":["Jülich Supercomputing Center (JSC), Forschungszentrum Jülich (FZJ)","LAION"],"name":"Gijs Wijngaard"},{"affiliations":["Technical University of Munich, MCML"],"name":"Felix Förster"},{"affiliations":["LAION"],"name":"Ross Wightman"},{"affiliations":["Jülich Supercomputing Center (JSC), Forschungszentrum Jülich (FZJ)","LAION"],"name":"Marianna Nezhurina"},{"affiliations":["LAION"],"name":"Christoph Schuhmann"},{"affiliations":["Jülich Supercomputing Center (JSC), Forschungszentrum Jülich (FZJ)","LAION"],"name":"Jenia Jitsev"},{"affiliations":["Technical University of Munich, MCML","University of Tübingen, Tübingen AI Center"],"name":"A. Sophia Koepke"}]
paper_digest_abstract_sha256: "e3b671fe566fff42074d79e0dc11a24cabdf46e178d70151f6419f10633d7c5b"
paper_digest_sidecars: {"citation.bib":{"sha256":"3d4825a916145a16ace33cfdb453d12adf3bd47a8dc4ead11659a943714e7a17","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11592/citation.bib"},"citation.json":{"sha256":"29e435fbbec716b4512e243a2e69ecaa60dad0bfb8a5636b03d2f8f14818f3bf","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11592/citation.json"},"citation.ris":{"sha256":"f8b8a470bb26f264d8d741bd4a5e548b09a6b50943b3a98e75d1dd5df38d7e11","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11592/citation.ris"},"rethink-context.json":{"contract":"paper-research-context","schemaFingerprint":"5d4e79f7d3ee65b39ccb38281548bf20a1b2041ab7a27625eaf97ab9909a8383","sha256":"849bae95ec8df55f14d17f8785cba12e8a1aa441355731616fcb20cd0dc458be","url":"/audio-paper-digest-blog/client/papers/2026-11-12/2611-11592/rethink-context.json"}}
paper_digest_api_reader_contract: "beginner-researcher"
paper_digest_api_reader_schema_fingerprint: "cd8baf5b8bda3a49eec64f6005931af63de4e9a13148cba5f354c661ca6e9df2"
paper_digest_api_reader_article_sha256: "b058762c3388321c01edce9212b635754d03d1bae7b739d2afc7d8bdd6c341d9"
paper_digest_api_reader_plan_sha256: "506f53ad0a2aac40780b1b14e781bf08c773273339fd61b699e18ea14ecc6e73"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings"
paper_digest_api_reader_source_binding_schema_fingerprint: "d2a2607a6e561909473022eb43f56332ee357af8568566a095c29083ffdec9cc"
paper_digest_api_reader_source_bindings_sha256: "e612ef99034642ffe40895d30e8afaa7c5f095a354ac5f80f7e5f00a995b7344"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 3
paper_digest_api_reader_structured_artifacts_sha256: "6ec1da324cb70825cccf78b18b4ebe1b22171d9bb4d346e10c7f01813bc81013"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity"
paper_digest_api_reader_author_identity_schema_fingerprint: "1e3fd3a9a56c9a5bf52df8df5022690b9a3fa92e83e934f295af87c0e258ed2f"
paper_digest_api_reader_author_identity_sha256: "19873ea8272381bda0fe4c516ff5d84c9285efdc0c9443f20e7ecedfaa2e2630"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity"
paper_digest_api_reader_resource_identity_schema_fingerprint: "33b0be17118be61f39b85ce690c8da17e91f2864bb65e85284f60c40067328e0"
paper_digest_api_reader_resource_identity_sha256: "e0e52a4d24477c3b6f29ff9efecdb0549cc93fedf3033d6f2a2f3bbaa01015d7"
paper_digest_api_reader_resource_count: 4
paper_digest_api_reader_figure_persistence: "ephemeral-no-persisted-figure-assets-v1"
paper_digest_api_reader_decision_projection: "api-reader-decision-projection"
paper_digest_api_reader_decision_projection_schema_fingerprint: "e56feb5ab75c8710904916b898f73dab9bb18bdf65bb60b7ed2edf7f99cea860"
---

# 📄 用三点六五亿条音频文本对做对比学习：LAION-Audio-XL 如何搭数据与测缩放

> 英文题目：*[LAION-Audio-XL: A Web-Scale Corpus and Scaling Studies for Contrastive Language-Audio Pretraining](https://arxiv.org/abs/2611.11592v1)*

<!--paper-tag-hierarchy-v1:start-->

**研究分类**

- **研究任务**：[音频检索](/audio-paper-digest-blog/papers/?concept=task.audio-retrieval)
- **研究方法**：[对比学习](/audio-paper-digest-blog/papers/?concept=method.contrastive)
- **研究重点**：[模型评估](/audio-paper-digest-blog/papers/?concept=research_focus.evaluation)
- **研究产物**：[数据集](/audio-paper-digest-blog/papers/?concept=artifact.dataset)

<!--paper-tag-hierarchy-v1:end-->

> 评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.2/1.5 | 开源 0/1.5 | 可复现 0.5/0.5 | 工程/实践 1.2/1.5


## 👥 作者与机构

- Gijs Wijngaard：Jülich Supercomputing Center (JSC), Forschungszentrum Jülich (FZJ)；LAION
- Felix Förster：Technical University of Munich, MCML
- Ross Wightman：LAION
- Marianna Nezhurina：Jülich Supercomputing Center (JSC), Forschungszentrum Jülich (FZJ)；LAION
- Christoph Schuhmann：LAION
- Jenia Jitsev：Jülich Supercomputing Center (JSC), Forschungszentrum Jülich (FZJ)；LAION
- A. Sophia Koepke：Technical University of Munich, MCML；University of Tübingen, Tübingen AI Center

## 📌 核心摘要

对比语言音频预训练要把一段音频和描述它的文字映射到同一向量空间，以便做文本找音频、音频分类和条件生成，难点是音频来源杂、时长差异大、文字缺失多且重复拷贝会污染评测。作者先收集网络与公开集合的原始音频并输出可解码候选，再经过精确去重、声纹与语义去重和评测泄漏筛查输出洁净候选，最后用声音分类体系筛选保持覆盖并对缺文字样本生成长短字幕送入训练。音频编码器用可变长视觉变换结构改成的音频编码器处理对数梅尔谱块，文本编码器用双向变换结构，两者用对称对比目标从零联合训练。相对依赖预训练主干和较小混合来源的已有对比音频文本模型，该工作统一了数据规模、筛选记录和从零训练的缩放分析。在MAEB-30评测下，与同类最强的对比基线GLAP相比，CLAP2-L在MAEB-30平均分指标上以53.6%超过44.1%。在MAEB评测和128M样本训练设置下，短长字幕各半混合训练的模型在MAEB平均分指标上以39.1%高于只用短字幕训练的38.6%。去掉120秒时长桶前后相比，单样本训练成本指标从1.94×10¹² FLOPs降至0.56×10¹² FLOPs。结论适用于30秒截断评测和网络音频分布，声音子域在较大算力后趋于饱和，超过1024M样本和更大模型的趋势尚未验证。

## 🔗 开源与复现资源

- 第三方资源：<https://projects.laion.ai/clap2> → <https://projects.laion.ai/clap2/> — 链接可访问（HTTP 200）

可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 对比学习要把什么音频和什么文字对齐

这篇论文做的任务是对比语言音频预训练。输入是一段音频加一段描述它的文字，目标是让配对的音频文字在向量空间里靠近，不配对的远离。做完后同一套向量可以直接做文本找音频、音频分类和零样本分类，还能给文本生成音频与音频分离提供条件向量。

要保留的信息是声音内容本身：是语音还是音乐还是环境声，语音说了什么语言、什么情绪，音乐是什么风格，环境声是什么事件。输出是两个编码器，音频侧输出一个片段向量，文本侧输出一个字幕向量。评价时不重新训练分类头，主要比相似度，所以训练数据的覆盖面和字幕准确度直接决定上限。

**对比语言音频预训练 × 共享嵌入空间：** 对比语言音频预训练指把一段音频和一段文字分别编码后再拉近配对样本、推远非配对样本的学习方式；共享嵌入空间指音频编码与文本编码被映射到的同一个向量空间，检索时直接比余弦相似度，分类时比音频与各类别描述文本的相似度，二者搭配才让文本到音频检索和零样本分类可用同一种比相似度实现。

### 已有音频文本数据和缩放研究卡在哪里

在数据一侧，早期 Clotho 和 AudioCaps 只有单来源，后来 LAION-CLAP 用了 11 个来源，MS-CLAP 用了 4 个，再往后多用 20 多个来源。公开可复现的规模最大到 AutoReCap-XL 的 47M 对，Bagpiper 报 392M 但基本是语音加单一字幕模型，AF-Next 约 108M 样本，MiDasheng 用 1,100,000 小时。私有的音频基础模型报 100M 小时以上但不公开，别人无法复现。

在模型一侧，音频编码器有多尺寸传统，但多是换预训练骨干，数据量和模型大小如何分预算没有在对比音频语言模型上系统测过。图像文本侧已有按计算量划分模型与数据的拟合方法，音频侧 Tseng 等人只做到 10M 量级且发现小规模靠预训练、大规模从零训练更好。本文就是在公开可追溯的前提下把数据推到 365M 对，再在 27M 到 340M 之间测五档模型。

### 论文要解决的具体困难是什么

第一个困难是量不够且杂。YouTube 和 Common Crawl 量大但重复多、静音多、无字幕多，直接全量训练浪费计算还会记住重复项。第二个困难是分布偏。原始池按预测类别看 75.3% 是语音、11.7% 是音乐，直接训练会偏向常见内容，稀有语言、稀有物种和稀有情感会被淹没。

第 3 个困难是预算怎么分。同样的计算量是该把参数做大还是多看样本，语音、音乐、环境声三域的饱和点是否一样，原文都没有现成答案。论文把这三件事绑在一起：先做可记录的收集去重筛选加字幕流水线，再固定流水线做缩放网格，最后用 MAEB-30、HEAR 和 MSEB 看结论在什么条件下成立。

### 从 1.48B 到 365M 的流水线总览

先看整体再看细节会更清楚。收集从学术集、互联网集、网络爬取与合集、YouTube 四组来，共 425 个来源。原始存档约 1,480,000,000 段，先转 32 kHz 单声道并把超长录音切开，再做精确去重、声学指纹去重、语义去重和评测集隔离，剩 1,280,000,000 段。然后用分类体系加专家标注做覆盖保护选择，得到 500M 段。再对其中无文字的 471M 段各生成一条短字幕和一条长字幕，得到 500M 带字幕选择。最后只保留不超过 30 秒的 366,006,046 段，即 LAION-Audio-XL。

下图是论文给出的流程框，数字与上文对应，重点看数量收缩和标注进入字幕提示词的那条虚线。

> **看图路径：** 1. 沿左上云到收集中间框再到右上框，看音频数量如何收缩；2. 对比去重池与 500M 选择与 365M 终版三处的小时数变化；3. 找到标注框指向字幕框的虚线，确认元数据进入提示词的位置

[![原论文 Figure 2：Overview of the LAION-Audio-XL dataset curation pipeline.](https://arxiv.org/html/2611.11592v1/fig2_pipeline.png)](https://arxiv.org/html/2611.11592v1/fig2_pipeline.png)

*论文图 2。原论文 Figure 2:：“Overview of the LAION-Audio-XL dataset curation pipeline.”。*

该图确实可见左侧云收进收集中间框，再经静音过滤进右上去重框，去重池标 1.28B 段与 7.96M 小时，选择框标 500M 段与 3.38M 小时，字幕框标 471M 段已加字幕，终版红框标 365M 段与 1.39M 小时。标注框列出分类、语言、说话人、情感、音乐和物种，虚线指向字幕框，说明元数据以提示词形式参与生成。这帮助理解后文每一步的输入输出，而不是只记住总数。

### 去重三步各去掉什么

第一步是信号检查与精确匹配。解码失败、读不出、短于 0.5 秒或长于 120 秒、有效可听不足 0.5 秒的去掉。剩下的转 16 kHz 单声道有符号 16 位脉冲编码，用音频时长加 MD5 哈希做键，完全相同的字节去掉 151,056,336 段。纯静音也有 16.3M 段。这一步省计算，也减少重复记忆。

第二步是声学指纹。用 Olaf 方法取 64 毫秒汉明窗、8 毫秒跳的谱峰几何，两个片段在同一偏移上共享足够多哈希才算边。匹配分定义如下，m 是同偏移共享哈希数，na 和 nb 是两侧指纹数，分母是几何平均，阈值 0.50，连通分支只留一段，优先留公开数据集。

\[q(a,b)=\frac{m}{\sqrt{n_{a}n_{b}}},\]

该式要算的是两段录音是否为重编码、变电平、裁剪或补齐后的同一录音。分子是同偏移命中数，分母归一化长度，短对长全包含时要求短的至少有 1/4 被命中，避免小碎片误连。这一步在精确去重之外再去 1,196,096 段。

第三步是语义近重复。用与 CLAP 无关的 Dasheng-base 编码，每段取前 10 秒，帧特征平均池化后归一化，用 k 均值聚成 65536 簇，簇内两两比余弦相似度，大于 0.995 才成组，每组留一段，优先留有字幕的公开集。这一步去掉 18.2M 段，多是很短的唤醒词、单句和自切分副本。同一套声学加语义加标识符匹配还对 MAEB、HEAR 和 MSEB 评测集做隔离，波形互相关复核后命中即删，但偶然撞上的短通用声保留。

**声学指纹去重 × 语义近重复筛选：** 声学指纹去重用 Olaf 谱峰几何匹配找重编码、裁剪或加长后的同一录音，解决波形略变但内容相同的问题；语义近重复筛选先用与 CLAP 无关的 Dasheng-base 编码加 k 均值聚类再在簇内比余弦相似度，解决翻录、唤醒词等听感重复但指纹未命中的小片段问题，前者管信号级复制，后者管语义级重复，二者互补。

### 分类加专家标注如何支撑选择与字幕

去重后需要知道每段是什么，才能压常见、保稀有，也才能给字幕模型提示。分类体系共 4416 节点、4085 叶、11 个顶层、深至 5 层，分类器只用到深 3 以内的 3718 叶。训练是用冻结 Dasheng-0.6B 特征平均池化后的 1280 维向量，加 1024 维隐层多层感知机，数据是 232,728 段经字幕蒸馏的标注音频，按档分训练验证测试，顶层准确率在测试集达 85.6%。

专家标注按顶层路由：语音走语言、情感、年龄性别与基频，音乐走流派风格、速度与调式，动物走 Perch 2.0 的 14795 类中前 5 名，外加响度、静音比、削波和带宽等 40 项信号统计。选择概率公式如下，gi 是质量门，ri 是最小保留概率，ci 是簇密度因子，wi 是类别混合调整。

\[p_{i}=g_{i}\left[r_{i}+(1-r_{i})c_{i}w_{i}\right],\qquad c_{i}=\min\left(1,\frac{2^{14.5}}{n_{k(i)}}\right).\]

该式要算的是每段被选中的概率。ci 把大簇的权重压到 2 的 14.5 次方除以簇大小，最小保留给稀有语言、稀有情感、稀有物种和双顶层高置信段直接置 1，再按组预算把大类往公共上限压，最后用音频标识哈希出的均匀随机数决定去留，保证可复现。结果是语音从 75.3% 降到 44.8%，音乐提到 22.4%，设计音效 16.6%，其余 16.2%。

**分类体系 × 覆盖保护选择：** 分类体系指 4416 节点、3718 叶类的声音层级加在冻结 Dasheng 特征上训练的多层感知机分类器，给每段音频一个预测类别；覆盖保护选择指按有效性门、最小保留概率、簇密度因子和类别混合因子算保留概率并用哈希决定去留，分类体系提供按类保护稀有语音语言、情感和物种的依据，选择机制据此压掉 YouTube 常见内容，二者组合才把 1.28B 变成 500M 而不丢长尾。

### 音频和文本两个塔具体怎么算

音频侧把 32 kHz 音频转 128 梅尔 bins、50 Hz 到 16 kHz、1024 窗 320 跳，每秒 100 帧，再按 16 乘 16 无重叠切块，每秒 50 个 token，每 0.16 秒 8 个 token。用 2 维轴向旋转位置编码记频时坐标，加 1 个寄存器 token，经预归一化均方根归一化、SwiGLU 和层缩放的 Transformer 块，再经多头注意力池化加线性-GELU-线性得到片段向量。文本侧是双向 Transformer，GPT-2 字节对编码 50260 词表、256 上下文，1 维旋转位置编码，同样用均方根归一化与 SwiGLU，经注意力池化加无偏线性映射到同一空间。

5 个尺寸从 XXS 27.3M 到 L 340.1M，音频加文本的前向浮点运算从每片段 26.1 GFLOPs 到 357.9 GFLOPs，其中约八成在音频塔，因为长输入的注意力是二次代价。训练按长度分桶装批，桶边界 6.88、8.96、12.96、22.56 和 30.08 秒，每桶约占 20% 样本，短桶每卡 136 段、30 秒桶每卡 32 段，用掩码补齐。温度参数初值 1 除以 0.07、上限 300，对称 InfoNCE 在全局批上算。

**NaFlex 音频编码器 × ModernBERT 文本编码器：** NaFlex 音频编码器负责把可变长对数梅尔谱块序列变成一个音频片段向量，处理时长变化与频时结构；ModernBERT 文本编码器负责把字幕变成一个文本向量，处理 256 词元内的语义，论文把两者都从零训练而不沿用预训练权重，是为了让缩放比较不受外部权重混淆，二者经对称 InfoNCE 损失对齐后才进入同一空间。

### 缩放网格与拟合函数如何设置

缩放实验固定用 365M 数据集内有放回采样，样本量从 1M、2M 直到 1024M 共 11 档，5 个尺寸各跑。学习率调度分两批，一批是热身稳定衰减，允许从同一次长跑分叉出不同冷却终点，另一批是早期余弦调度且音频文本配比更偏音频。正式表格都用前者，后者只进缩放散点以扩大覆盖。峰值学习率、热身步数和批大小按数据量分档，32M 以下小批、32M 及以上大批。

拟合沿用对比图文的误差幂律思路，但加了小计算饱和与不可约误差，误差指 1 减 MAEB-30 均分。函数形式如下，C 是计算量，Ac、B c、Ec 与指数 αc 是拟合参数，要求严格正、单调降、有下界。

\[\mathcal{L}(C)=A_{c}\cdot(C+B_{c})^{-\alpha_{c}}+E_{c},\quad\text{for }\alpha_{c}>0,\]

该式要刻画的是帕累托前沿上误差随计算量的下降。拟合只用前沿点并做 1000 次自助得 95% 区间，还做了留出检验：去掉大于等于 1e11 GFLOPs 的点再预测那 5 个大算力点，平均绝对误差 0.64 个 MAEB-30 点。最优分配则在长跑前沿上对模型大小与样本量分别拟合幂律，短跑因最小尺寸恒最优而不用，避免把尺寸范围边界当成趋势。

### 用什么数据评，用什么指标比

主基准 MAEB-30 是 30 个任务的无加权平均，多子集任务先在内部平均。分域看是 18 个语音、6 个音乐、6 个环境声，分任务看是 12 个分类、2 个零样本分类、3 个配对分类、3 个聚类、10 个检索含 1 个重排。分数越高越好，缩放图里画的是 1 减均分，越低越好。音频截到 30 秒评测，与训练一致，文本全大写转小写，音频向量不归一化。

HEAR 取除蜂巢与 Maestro 5h 外的 17 个任务平均，只评音频向量。MSEB 取 52 个任务 62 个英文分数平均，稳定性是干净与加噪嵌入的连续编辑距离，越低越好，不计入均分。比较时看参数是否只计音频加文本部分，是否同为音频文本模型，是否同尺寸段，纯音频模型在 HEAR 上天然占优，不能直接当跨模态胜负。

**MAEB-30 × HEAR：** MAEB-30 是 30 个任务取无加权平均的音频文本综合基准，含 18 个语音、6 个音乐、6 个环境声任务，覆盖分类、零样本分类、配对分类、聚类和检索，直接考音频向量与文本向量的对齐；HEAR 是 17 个任务取平均的纯音频表示基准，不考文本，只考音频向量本身质量，二者搭配才能分清是跨模态对齐好还是单模态特征好。

### 主结果在同尺寸下处于什么位置

要回答的是同样参数量下 CLAP2 是否更好，以及大模型是否被小很多的模型追上。条件是各尺寸都用 1024M 样本的冷却终点，对手是榜单同类，指标方向均为越高越好。下表取小模型组与 CLAP2 五档的均分与三域分，完整任务分见原文大表。

该表比较小参数段的 MAEB 均分与分域分，公平条件是同为音频文本嵌入、参数只计音频加文本、分数均为百分比均值，数值越大越好。

| Small models (<<1B parameters) |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| CLAP2-XXS | 27M | 46.2 | 46.0 | 69.2 | 23.9 |
| CLAP2-XS | 48M | 49.1 | 48.8 | 72.1 | 26.9 |
| CLAP2-S | 104M | 51.8 | 52.4 | 74.2 | 27.6 |
| CLAP2-M | 153M | 52.3 | 52.4 | 76.1 | 28.1 |
| CLAP2-L | 340M | 53.6 | 54.6 | 76.2 | 27.9 |

表中可见 CLAP2-XXS 27M 均分 46.2，已超同段 LAION-CLAP 35.2 与 MS-CLAP 37.3；CLAP2-S 104M 均分 51.8，CLAP2-M 153M 均分 52.3，CLAP2-L 340M 均分 53.6，最高超过 7.7B 的 LCO 53.5。分域上音乐三档超 76，语音 54.6，环境声 27.9 左右。限制是聚类一列 CLAP2 只有 3 到 10，而 M2D 等有 20 以上，说明均分高不等于每类都高；环境声在 1.5e10 GFLOPs 后即饱和，继续加算力主要涨语音和音乐。

下图左中右分别对应来源到声音的带状、雷达包络与随样本量的曲线，重点看 CLAP2-S 的包络是否大于两个基线，以及右图曲线是否持续上行。

> **看图路径：** 1. 看左侧带状宽度，确认哪类来源和哪类声音占比最大；2. 看中间雷达图上 CLAP2-S 与两个基线的包络大小；3. 看右侧随样本量增加的曲线斜率是否放缓

[![原论文 Figure 1：Our training dataset consists of many sources, spanning diverse sound categories, and our models…](https://arxiv.org/html/2611.11592v1/fig1_overview.svg)](https://arxiv.org/html/2611.11592v1/fig1_overview.svg)

*论文图 1。原论文 Figure 1:：“Our training dataset consists of many sources, spanning diverse sound categories, and our models achieve strong performance that improves with training scale.”。*

该图确实可见左侧 YouTube 带最宽，语音带占 44.8%；中间 CLAP2-S 的检索与分类角向外撑大，超过 LAION Larger CLAP 与 MS-CLAP 2023；右侧 MAEB-30 均分随样本量从 1M 到 512M 持续爬升，斜率在 256M 后放缓但未平。这支持数据规模有效，但也说明用均分一条线会掩盖聚类与环境声的饱和。

下图按模型大小画 MAEB 与 HEAR 平均分，蓝方块是本文五档，实心是音频文本，空心是纯音频。

> **看图路径：** 1. 在左图按横轴模型大小找到蓝色方块与灰色圆点的位置高低；2. 在右图对比蓝色方块与空心圆点的上下关系；3. 注意虚线包络只统计音频文本模型，不含纯音频模型

[![原论文 Figure 6：Embedding model performance by size.](https://arxiv.org/html/2611.11592v1/size_vs_score.svg)](https://arxiv.org/html/2611.11592v1/size_vs_score.svg)

*论文图 5。原论文 Figure 6:：“Embedding model performance by size. Average score across the individual tasks of MAEB (all 30 tasks) and HEAR (17 tasks).”。*

该图确实可见左图蓝方块在 0.03B 到 0.34B 之间高于同横轴灰圆点，右图 CLAP2-S 到 L 在 81.4 到 81.9 之间高于所有灰圆点音频文本模型的最高 81.2，但低于 USAD 等空心纯音频模型的 86.8。这说明跨模态同条件比是赢的，跨到纯音频比则条件不同，不能说全面最强。

### 计算量翻倍带来多少提升，何时该选大模型

拟合前沿显示计算量每翻倍，MAEB-30 误差降约 4%，在最大预算处约合涨 1.8 个点，指数 α 为 0.0574。分域看语音和音乐在 1.1e12 GFLOPs 内未饱和，环境声在 1.5e10 附近饱和。按尺寸看 XXS 与 XS 在 256M 样本内是计算最优，S、M、L 要到 512M 样本后才上前沿，说明小样本时堆参数不划算。

最优分配拟合为模型大小正比于 C 的 0.405 次方，样本量正比于 C 的 0.583 次方，两指数和约 0.99，样本增速约是模型的 1.4 倍。外推到 1e12 GFLOPs 约需 180M 参数配 1.8B 样本，2e12 约需 240M 配 2.7B，在 365M 库上对应约 5 到 7 个 epoch，超过 4 个 epoch 后重复样本是否还等价于新数据，原文提醒需要更多数据验证。这与语言模型两侧均衡不同，更接近 SODA 的结论，可能与音频信息密度低、网络字幕噪声大有关，但原文强调只有 3 个内部最优点加边界点，指数是指示性的。

### 音频文本配比小样本下是否敏感

要回答的是把参数在音频塔与文本塔之间挪动是否影响均分。条件是固定非嵌入总数，只改层宽深与头数，文本嵌入按层宽适配但不计入容量，评测同为 MAEB-30。

长度与字幕的取舍来自同一批 M-C 对照。256M 样本下丢掉 30 秒以上音频得 47.1%，裁到 30 秒得 46.5%，用到 120 秒只得 43.0%。128M 样本下长短各半得 39.1%，只用短得 38.6%，只用长得 38.5%。256M 重平衡得 41.7%，低于不平衡的 43.0%。

| 对照组 | 样本量 | MAEB 均分 | 条件 |
| --- | --- | --- | --- |
| 丢掉 30 秒以上音频 | 256M | 47.1% | 最长 30 秒 |
| 裁到 30 秒 | 30 秒 | 46.5% | 最长 30 秒 |
| 用到 120 秒音频 | 256M | 43.0% | 最长 120 秒 |
| 长短字幕各半 | 128M | 39.1% | 50/50 混合 |
| 只用短字幕 | 128M | 38.6% | 短字幕 |
| 只用长字幕 | 128M | 38.5% | 长字幕 |
| 重平衡后训练 | 256M | 41.7% | 均衡采样 |
| 原分布训练 | 256M | 43.0% | 原分布 |

该对照说明 30 秒截断省算力且分数更高，字幕长短差异在波动范围内，重平衡反而降低均分，因此后文固定用 30 秒内音频、长短各半与原分布。音频文本配比在 64M 内从 2.36 比 1 到 1 比 2 无显著差，XS 在 512M 时 1.5 比 1 得 47.3 而 1 比 1 得 45.1，差 2.2 点，说明大样本才显现，原文因算力未追完。最终选音频占 51% 到 57% 的保守配比，推理快至多约 22%。

### 切分、时长与字幕策略的代价差异

要回答的是同样样本数下哪种处理更省且更好。先看切分，3 种方法各用约 1M 同源片段加 Qwen3-Omni 字幕训 XS 3 种子、每轮看 8M 样本。静音切分在 -40 dB 持续 0.5 秒处切，短于 5 秒合并，长于 120 秒按 30 秒目标在静帧处再切。结果是静音切分 32.57 ± 0.18%，质量过滤裁剪 32.33 ± 0.09%，随机裁剪 32.18 ± 0.39%，静音切分最高且只需 CPU 扫 8 kHz 能量。

下表比较音频文本容量配比在不同样本量下的 MAEB 均分，公平条件是同档总数一致、同一评测，数值越大越好。

| XS tier |  |  |  |  |
| --- | --- | --- | --- | --- |
| 16M | 34.6 | 34.6 | 34.4 | 33.5 |
| 32M | 36.4 | 36.2 | 36.5 | 35.9 |
| 64M | 38.5 | 38.8 | 37.9 | 37.7 |
| 512M | 47.3 | – | 45.1 | – |

该对照显示 XS 在 16M 时 34.6、34.6、34.4、33.5，32M 时 36.4、36.2、36.5、35.9，64M 时 38.5、38.8、37.9、37.7，M 在 64M 时 39.5、38.7、39.6、39.3，64M 内最大差不足 1 点。XS 在 512M 时 47.3 对 45.1 才拉开 2.2 点，这支持小预算下不必纠结配比，大预算再偏音频可能有用，但证据只有两个 512M 点。

下图横轴是 MAEB-30 百分比，菱形是均值、须是标准差、空心圆是单次，右侧是每写 1 小时片段的秒数。

> **看图路径：** 1. 对比三种切分方式菱形均值在横轴上的左右顺序；2. 看须线长度判断三次种子的波动大小；3. 看右侧每写一小时片段所需的秒数差异

[![原论文 Figure 7：Segmentation comparison after 8M samples per run.](https://arxiv.org/html/2611.11592v1/segmentation_comparison.svg)](https://arxiv.org/html/2611.11592v1/segmentation_comparison.svg)

*论文图 6。原论文 Figure 7:：“Segmentation comparison after 8M samples per run.”。*

该图确实可见静音切分菱形最靠右，随机裁剪须线最长，右侧三行耗时 2.46、2.98、2.99 差异不大。这支持全库用静音切分，但结论只在 8M 小预算 3 种子下测过，能否推广到 1024M 仍是外推。

### 哪些结论还不能推广

第一，聚类与部分分类任务不随计算单调变好，聚类甚至反向，原文未拟合该子集，均分提升不能读成所有任务提升。第二，环境声早饱和，语音在约 1e9 GFLOPs 以下提升很慢，统一指数掩盖了分域差异。第三，最优分配指数依赖 5 个离散尺寸与部分边界最优，低预算最优本可能小于 XXS，高预算又撞 1024M 数据上限，0.405 与 0.583 只是指示。

第四，字幕质量的人评只有 50 段、2 人标注，相互一致仅 12 段并列第一，Kendall tau 约 0.295，LLM 法官与人的 0.345 与 0.265 落在人际波动内，只能说趋势一致，不能当排行榜。多样性用 80k 与 400k 词元内的独特词数，MOSS-Thinking 最高但最慢，Qwen3-Omni 最快，最终各包一半数据、3884 节点小时完成，这种搭配的性价比只在本文分布下测过。

### 复现第一步做什么，需要什么资源

先按附录 H 的 425 源清单与 3 阶段计数对齐：存档 1,430,000,000 段 10,950,000 小时，500M 选择 499,000,000 段 3,340,000 小时，终版 366,000,000 段 1,380,000 小时，其中 YouTube 占大头，Common Crawl 第二。只复现方法可用已选的 500M 与 365M 划分，不必重爬 3.3B 链接。去重要复现 MD5、Olaf 阈值 0.50 与 SemDeDup 余弦 0.995 三阈值，以及评测隔离的波形复核，否则数字对不上。

训练复现从 XXS 或 XS、32M 样本、长度桶与 20% 均匀桶概率、短长字幕对半开始，音频截 30 秒，批按每卡 49152 音频 token 装，峰值学习率按预算查表。作者资源方面，本次只确认 projects.laion.ai 的 clap2 第三方链接可达，未确认作者已开源的权重与代码，来源未确认不是技术缺陷，需要时以原文仓库与附录为准。硬件上原文用 JUWELS、JUPITER 与 JURECA 超算，长跑 1024M 需多节点，单机只能跑小预算验证。

### 什么时候值得尝试，还缺哪项验证

当任务是文本找音频、零样本分类或需要小尺寸跨模态向量做筛选时，值得尝试 CLAP2-S 到 M，因为同尺寸下 MAEB 与 HEAR 的音频文本最优点都在这里，且推理比大塔快。当任务重聚类或纯环境声时要谨慎，本文聚类与环境声并不随算力涨。还缺的验证是超 1024M 样本与超 L 尺寸的外推，以及重复多 epoch 是否等价新数据，原文预测 5 到 7 个 epoch 已近边界。字幕侧缺更大规模人听验证，元数据 JSON 直贴虽在 976 段上平均秩最优，但只用 Gemini 3.6 Flash 判过，换领域需重测。

下表把流水线各阶段的去留规模放在一起，便于对照复现时的收缩是否正常。该表比较去重与字幕各阶段的音频段数，公平条件是同一原始池与同一计数口径，数值越大表示保留越多。

| 环节 | 保留或去除规模 |
| --- | --- |
| 精确 MD5 去重去除 | 151,056,336 audio samples in total |
| 语义去重 SemDeDup 去除 | 18.2M audio samples |
| 去重与筛查后保留 | 1.28B audio samples |
| 按分类选出 | 500M audio samples |
| 双字幕覆盖 | 471,237,555 audio samples with both caption lengths (94.40% of the full 500M selection) |

表中精确去重去掉 151,000,000，语义去重去掉 18.2M，从 1.47B 进到 1.28B，再选到 500M，其中 471,237,555 段有双字幕占 94.40%。代价是全量字幕需数千节点小时，本文用快慢搭配压到 3884 节点小时。限制是 Common Crawl 的 141,523,038 进、51,453,212 留只是其中一部分，全量仍需重跑第二波爬取。

<details>
<summary>📎 论文与评分元数据</summary>

排名：前25% | 文档类型：数据集与基准 | [arXiv 原文](https://arxiv.org/abs/2611.11592v1)

</details>

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。

- 评分规则：type-aware-v1

- 评分模型：muse-spark-1.3-contributor

- 评分请求协议：openai_responses

---

[← 返回 2026-11-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-11-12/)
