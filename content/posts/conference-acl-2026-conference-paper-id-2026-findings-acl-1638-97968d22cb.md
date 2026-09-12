---
title: "From Scores to Preferences: Redefining Evaluation Paradigm for Speech Quality Reward Modeling"
date: 2026-09-12
draft: false
description: "论文把语音质量评估从跨库不可比的平均意见分回归改为库内偏好比较，用 55333 对训练偏好的 MOS-Pref 统一训练三类奖励模型，最强标量模型整体准确率达 80.04%，而 MOS 感知的生成式奖励模型在小分差上进一步提升，代价是生成式路径仍弱于标量排序且依赖偏好标注质量。"
tags: ["数据集", "偏好优化", "强化学习", "语音质量评估"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.findings-acl.1638"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.findings-acl.1638/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.findings-acl.1638.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "9422f8128003968f3e8fc5e075f80e87f52afc38eb92d74f7f4aa83212036e5b"
paper_digest_api_reader_plan_sha256: "dd945f38edc4a7bbd1c02dd214b88d3243d654ddd78d2bee7bdbb899b6d2d7a2"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2fea5b975bd36e7a6e11055091fc7503e745240950d16b39b4f51f3514157070"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 1
paper_digest_api_reader_structured_artifacts_sha256: "53fe1837373747a98318022b960631f15cb13aad9336717c8a9aea442328527a"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "da76a9e68285ed61b92b82443cc55a6f51325b98108de74614d3dc02909b3925"
paper_digest_api_reader_author_count: 14
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "71b11e357c33006487d8659af85ba6f339e5123db4f47265e3f56f6e0e3be0fa"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.preference-optimization","label":"偏好优化"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"task","id":"task.speech-quality","label":"语音质量评估"}]
paper_digest_primary_task: "语音质量评估"
paper_digest_primary_method: "偏好优化"
paper_digest_score: 7.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 从绝对打分到相对偏好：语音质量奖励建模的范式转换与细粒度难例

> 英文题目：*From Scores to Preferences: Redefining Evaluation Paradigm for Speech Quality Reward Modeling*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.findings-acl.1638`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1638/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1638.pdf)

标签：#数据集 #偏好优化 #强化学习 #语音质量评估

评分：**7.0/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Yifei Cao：机构信息未能从会议 PDF 纯文本可靠映射
- Changhao Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiabao Zhuang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiajun Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Ming Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiheng Xi：机构信息未能从会议 PDF 纯文本可靠映射
- Hui Li：机构信息未能从会议 PDF 纯文本可靠映射
- Shihan Dou：机构信息未能从会议 PDF 纯文本可靠映射
- Yuran Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yunke Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Tao Ji：机构信息未能从会议 PDF 纯文本可靠映射
- Tao Gui：机构信息未能从会议 PDF 纯文本可靠映射
- Qi Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xuanjing Huang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

语音质量评估需要对噪声、失真、连续性与自然度各异的语音判断相对优劣，难点在于不同数据集的绝对均值意见分标尺不可比且细粒度差异难以分辨。该工作先将BVCC、NISQA、SingMOS、SOMOS、TMHINT-QI统一为16 kHz并按相同内容不同系统、相同说话人或系统不同内容、两者皆不同三类关系组内构造偏好对，再用Gemini-2.5-Pro生成单样本与成对四维度文本评价并校验成对分数与偏好标签一致，最后在统一偏好任务上训练标量、半标量与生成式三类奖励模型并引入均值意见分差异感知奖励做强化学习优化。相对直接回归绝对分的做法，偏好建模以排序目标消除了跨库绝对分偏移，使跨域训练与评测使用同一二元选择监督信号。与已有方法相比的关键机制差异在于把难度信号显式编码进奖励而非均匀对待所有样本对。在MOS-Pref全部测试对上经典标量Bradley-Terry模型总体准确率达到80.04%，明显高于UTMOS等回归基线与大语言模型裁判范式。该结论在均值意见分差异小于0.2的极细粒度对上明显弱化，绝对准确率仅55.33%左右，且验证集中于5种语言与合成、增强、歌声等受控场景，未覆盖更广泛真实声学条件。原文未披露训练时长与部署成本，未提供代码、权重与数据集下载链接。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要解决什么学习依赖？

本文输入是语音波形及其所在数据集的听感标注，目标是判断任意两条语音哪一条感知质量更高。传统做法是让模型回归平均意见分，也就是 Mean Opinion Score，缩写为 MOS，输出是单条语音的绝对分。不同数据集的打分人、量表理解和系统分布不同，直接合并绝对分会引入标准不一致，这是跨库训练必须先解决的学习依赖。

本文把输出改为偏好对上的二选一正确率，只要求在同一对中给质量更高者更高分。读者需要先保留 3 个信息：回归学的是数值本身，偏好学的是顺序，而评估时随机交换两条音频的呈现顺序以减少位置偏置。本文的解读目标是让研究生能复述从数据构造、3 类奖励模型、评估协议到 MOS 感知改进的完整链路。

本文不声称代码、模型或数据已公开，资源状态证据为 NONE，因此复现讨论只依据论文文字描述的构造规则与超参数，不做可下载假设。后续按任务与相关路线、方法全景、组件与计算、训练与构造、实验条件、结果与反证、复现与收束展开，每一步的前置概念先于依赖它的结论出现。

### 同输入同目标的已有路线为何不够用？

语音质量评估的已有路线与本文同输入、同目标，但监督与运行阶段不同。早期 MOSNet 与 Quality-Net 用卷积或循环网络直接回归分数，近期转向 wav2vec 2.0、HuBERT 等自监督表示，再到 UTMOS、LE-SSL-MOS 等在 VoiceMOS 挑战内外域赛道取得较强结果的系统，以及基于音频大语言模型的描述式评估。

为处理跨库偏差，已有工作尝试偏差感知的损失和 AlignNet 这类分数对齐函数，但论文指出异构标注协议仍限制进展。奖励建模路线来自语言与视觉领域：从标量奖励模型到 Critique-out-Loud 先写评价再打分，再到自原则评价调优在推理时生成原则与评价，视觉侧有 GPT-4V 与 LLaVA-Critic 统一逐点与成对打分。

语音侧的奖励建模尚缺少可扩展的细粒度偏好对齐框架。本文的定位不是再调一个回归器，而是在同一偏好比较设置下统一训练与评估，使多数据集能提供一致的监督信号。这一定位决定了后文要用同一偏好准确率比较回归模型、裁判模型与 3 类奖励模型。

### 为什么从打分回归改为偏好比较？

问题可以拆成一句话：绝对分学的是数值本身，偏好比较学的是顺序。若甲库整体打分偏高、乙库整体偏严，回归模型会把库间偏移当成质量差异，跨库训练与评估都会失真。改为库内配对后，监督只要求同一对中更高 MOS 者得分更高，整体偏移在相减中被削弱。

论文的构造进一步按内容与说话人或系统关系分组：同内容不同说话人或系统、同说话人或系统不同内容、两者都不同，前两类在组内配对，第 3 类直接在库内配对，且要求两条 MOS 不同，MOS 高者记为 chosen，低者记为 rejected，并平衡各源数据集的对数。举例来说，同一句话由两个合成系统各合成 1 次，若系统甲 MOS 更高则构成甲为 chosen 的训练对，这只是帮助理解分组的例子。

**平均意见分 × 偏好比较：** 平均意见分负责记录同一批听音人对单条语音的绝对质量印象，偏好比较负责在同一数据集内把两条语音的相对高低抽出来做监督；两者搭配的原因是绝对分跨库标准不一致无法直接合并训练，而相对顺序受整体偏移影响更小，组合后得到可跨库统一使用的偏好监督信号。

偏好化并不能消除主观性。论文用 100 对随机样本做人工验证，4 位标注者与 MOS 导出标签的一致率为 82%，说明导出偏好大体反映人类感知，但仍有分歧空间。自然语言评价的一致性更低，论文报告 70% 与人类感知一致，并明确评价只是辅助结构化表示，核心优化目标仍是 MOS 导出的偏好标签。理解这一点才能正确看待后续半标量与生成式模型的增益来源。

### MOS-Pref 与三类奖励模型的全景如何走通？

先沿一个样本走完全程有助于建立依赖。取一条 16 kHz 波形，先经元数据过滤，去掉缺少说话人、内容或系统标识的不可靠样本；再按上述分组与另一条同库样本组成 1 对，比较原始 MOS 得到 chosen 与 rejected 标签；然后用 Gemini-2.5-Pro 按噪声、失真、自然度、连续性 4 维生成单条描述与成对对比评价及 1 到 10 分，过滤掉与偏好标签矛盾的标注；最后该对进入统一的二选一评估，模型需给 chosen 更高分才算正确。

数据覆盖 BVCC、NISQA、SingMOS、SOMOS、TMHINT-QI 5 个训练与域内测试源，外加 VMC23 做域外测试，场景含自然语音、文本转语音、变声、歌声合成与转换、语音增强及真实或仿真噪声，语言含英语、中文、日语、法语、德语。下图是理解全景的关键，阅读时先看左右分栏再看中间标注流。

> **看图路径：** 1. 先从左栏原始音频与平均意见分出发，沿过滤漏斗看到保留音频如何进入三种配对分组；2. 再看中栏 chosen 与 rejected 对如何经 Gemini 生成原始评价并过滤为逐点与成对评价；3. 最后对照右栏经典标量、半标量、生成式与 MOS 感知生成式四条路径的输入输出差异

[![原论文 Figure 1：Overview of MOS-Pref and reward modeling paradigms.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f909e0840bb0/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f909e0840bb0/figure-1.png)

*论文图 1。原论文 Figure 1：“Overview of MOS-Pref and reward modeling paradigms.”。*

上图把上述流程分为三栏。左栏显示多源原始音频与 MOS 经漏斗过滤为保留音频，并按说话人与内容关系分为 3 组；中栏显示 chosen 与 rejected 对经 Gemini 生成原始评价再过滤为逐点与成对评价；右栏显示 4 条建模路径：经典标量直接输出分数，半标量先输出评价再输出分数，生成式同时输出评价与分数，MOS 感知生成式在准确率奖励之外再加 MOS 差值奖励。记住输入输出差异是理解后续训练目标的前提：标量类 1 次看一条音频，生成式 1 次看两条音频。

### 三类模型各算什么，MOS 感知奖励如何计算？

经典标量奖励模型 1 次读一条音频，输出单个质量分，训练用 Bradley-Terry 损失或均方误差损失，前者优化相对顺序，后者回归绝对 MOS。半标量奖励模型先在 MOS-Pref 单样本评价上学会生成 4 维描述，再把输出经奖励头映射为分数，同样可用两种损失，总损失为奖励损失加权重为 1.25 的语言模型损失。生成式奖励模型 1 次读两条音频，先在成对对比评价上做监督微调学会生成偏好判断文本，再用 GRPO 或 DAPO 强化学习优化，奖励最初只用准确率奖励。

**标量奖励模型 × 半标量奖励模型：** 标量奖励模型分工是为单条音频直接输出一个质量分数并用排序或回归目标优化，半标量奖励模型分工是先生成噪声、失真、连续性、自然度 4 维文字评价再经奖励头输出分数；搭配理由是检验文字解释是否带来额外增益，组合意义在于把生成能力与标量排序放在同一基座上对照，论文报告中半标量并未超过经典标量。

生成式路径的输入表示是双音频加提示词，输出是评价文本加可解析的分数对，目标是文本偏好判断与分数顺序同时正确。准确率奖励只关心排对与否，把所有对同等对待，这正是论文认为难以学到小差距细粒度差异的原因。

**生成式奖励模型 × 准确率奖励：** 生成式奖励模型分工是 1 次读入两个音频并生成对比评价与各自打分，准确率奖励分工是在强化学习阶段只看是否排对 chosen 与 rejected 并给 1 或 -1；搭配原因是生成式输出需要规则化、可解析的成败信号，组合后使模型学会先说理再给出可抽取的分数对。

MOS 感知设计引入 MOS 差距信息。记配对原始 MOS 差经数据集 90 分位数归一化并截断到 0 到 1 区间为差值变量，差值奖励在排对时为余弦 shaping 的正分，排错时为对应负分，最终奖励为两项相加。符号含义是：Sc 与 Sr 分别为模型给 chosen 与 rejected 的分数，差值越大表示原始差距越大、难度越低。计算目标是让小差距答对获得相对更大的奖励、答错承受相对更小的惩罚，大差距则反向调节，且余弦形式保证两端平滑过渡。原文未给出梯度路径的逐层细节，此处不猜测停止梯度或优势估计的具体实现。

\[RMOS−aware = RACC + R∆MOS\]

上式为最终 MOS 感知奖励的原文形式，论文同时给出准确率奖励与差值奖励的分段定义，复现时应以原文两式为准。组合后生成式模型在强化学习中同时收到成败信号与难度信号，这是后续在小分差子集上提升的机制来源。

**MOS 差值奖励 × MOS 感知奖励：** MOS 差值奖励分工是把原始 MOS 差距归一化后用余弦 shaping 给出难度相关的附加分，MOS 感知奖励分工是把该附加分与准确率奖励相加得到最终奖励；搭配原因是小差距样本答对给更大奖励、答错给更小惩罚，组合意义是让强化学习按难度自适应分配学习信号以改善细粒度区分。

该组合的教学意义在于区分均匀监督与难度自适应监督：前者把难例与易例同等对待，后者按原始差距调节奖励幅度。研究生复述时应先说清输入是双音频与归一化差距，输出是评价加分数，再说奖励如何相加。

### 数据如何构造，模型如何训练与推理？

构造侧的动作为统一格式、过滤、分组配对、生成评价与校验。所有样本转为 16 kHz 波形，按说话人、内容、系统标识过滤；组内要求 MOS 不同并按高低定 chosen 与 rejected；平衡各源对数；用 Gemini-2.5-Pro 生成单条与成对 4 维评价，成对评价还需给出 1 到 10 整数分并与偏好标签一致，否则过滤。训练侧均基于 Qwen2-Audio-7B 全参数训练。

经典标量两种损失各训练 1 轮，批量 32，AdamW 初始学习率 5e-6、权重衰减 5e-6；半标量训练 1 轮，批量 32，初始学习率 1e-6、权重衰减 1e-6；生成式 GRPO 与 DAPO 各训练 1 轮，批量 64，每提示生成 4 个补全，温度 1.0，AdamW 学习率 1e-6，采用 ZeRO-2 优化。推理时所有模型温度设为 0.0，标量类用单音频提示输出分数，生成式用双音频提示输出评价与分数对。硬件为 8 卡 H20。

**Bradley-Terry 损失 × 均方误差损失：** Bradley-Terry 损失分工是最大化 chosen 分数高于 rejected 分数的相对排序似然，均方误差损失分工是最小化预测分与原始 MOS 绝对值的平方差；搭配比较的原因是检验相对排序与绝对回归哪种监督更适合跨库质量建模，论文报告显示 Bradley-Terry 在整体与域外集上更优。

该节未报告搜索网格、早停阈值与随机种子方差，复现时应把这些记为缺项，不从模型名推定默认实现。评价侧的动作为随机交换顺序、严格大于才算正确、按数据集与总体分别统计准确率，总体为全部正确对占全部对的比例。

### 测什么，与谁比，在什么条件下比？

评估任务是二元偏好比较：给定 1 对语音，模型或给两条打分或直接选优，指标为准确率，方向为越高越好。比较对象包括 MOS 预测模型 UTMOS、UTMOSv2、NISQA v2.0，LLM-as-a-judge 的 Gemini-2.5-Pro、Qwen2-Audio-7B-Instruct、Qwen2.5-Omni-7B、Qwen3-Omni-30B-A3B-Instruct，以及本文实现的经典标量、半标量与生成式奖励模型。

训练与测试条件是同一 MOS-Pref 划分，域内为五源测试集，域外为 VMC23 的 3000 对，测试对的 MOS 差多在 1.5 以内，大量对感知接近。基座一致性方面，3 类奖励模型均基于 Qwen2-Audio-7B，而外部 MOS 预测与裁判模型来自各自已有系统，因此跨范式比较包含基座与训练数据的差异，不能解读为纯损失函数的因果效应。下图先建立对数据分布的直观认识。

> **看图路径：** 1. 先比较左绿与中红直方图的峰位，确认 chosen 集中在 3 分以上而 rejected 分布更低更散；2. 再看右蓝直方图随 MOS 差增大频数下降的长尾形状，确认小分差样本占测试主体；3. 最后核对横轴 MOS 与差值范围，明确细粒度区间是后续误差分析的重点

[![原论文 Figure 2：Distribution of MOS scores in MOS-Pref.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f909e0840bb0/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f909e0840bb0/figure-2.png)

*论文图 2。原论文 Figure 2：“Distribution of MOS scores in MOS-Pref. Figures (a) and (b) show the MOS distributions of chosen and rejected samples. Figure (c) presents the distribution of ∆MOS in the test set.”。*

上图左中两幅直方图显示 chosen 峰偏向高分段而 rejected 分布更低，右图显示测试集差值集中在小值区并向大值拖尾。绿色 chosen 分布的高峰与粉色 rejected 分布的分散形成对照，蓝色差值分布的左高右低说明测试主体正是难区分的小差距对。这解释了为何后续误差分析要按 MOS 差分位展开，也为 MOS 感知奖励的难度加权提供了动机。

### 主结果显示了什么，误差集中在哪里？

本节回答 3 个问题：哪类范式整体最强，回归与偏好何者更好，误差集中在哪里。论文报告经典标量 BT 损失整体最高，半标量次之，生成式经强化学习后仍略低；MOS 预测模型在各自源域强而在他域明显下降；裁判模型整体多在 70% 以下。下表整理论文文字报告的核心可运行策略对照，逐库数字见原文大表，此处只保留奖励模型范式间的总体对照以避免混放不同条件。

| 范式与训练目标 | 总体准确率指标 | 基线对照 | 论文报告的判断 |
| --- | --- | --- | --- |
| 经典标量 BT 损失 | 80.04% | 同范式 MSE 损失 | 整体最高，偏好排序优于回归 |
| 半标量 BT 损失 | 78.82% | 经典标量 BT 损失 | 加入评价文本未超过经典标量 |
| 生成式 DAPO | 77.60% | 生成式 SFT | 强化学习明显优于仅监督微调 |
| 生成式 GRPO | 76.94% | 生成式 DAPO | 两强化策略总体接近，DAPO 略高 |

上表显示主要收益是偏好排序与强化学习的增益，具体代价是生成式路径总体仍落后标量约 2 到 3 个百分点，且 UTMOS 类模型跨库泛化下降、裁判模型在多数集低于 70% 构成未胜出反例。百分点差为算术差，不换算为相对百分比。BT 损失在经典与半标量内均优于 MSE 损失，尤其在域外集差距更明显，支持相对排序比绝对回归更鲁棒的判断，但该判断受基座与数据一致性限制。

为交代聚合口径，下表给出数据划分与人工验证条件，说明主结果的总体准确率是全部测试对上的正确比例，而非逐库平均。

| 数据划分 | 训练对 | 开发对 | 测试对与验证 |
| --- | --- | --- | --- |
| 五源域内划分 | 55,333 | 9,905 | 域内测试 6,240 对 |
| VMC23 域外测试 | 未用于训练 | 未用于训练 | 域外测试 3,000 对 |
| 人工验证抽样 | 不适用 | 不适用 | 100 对上偏好一致率 82% |

上表交代数据规模与人工验证条件，人工验证只覆盖偏好标签，未覆盖全部评价文本的因果作用。测试集差值多在小值区，这直接引出按分位展开的误差分析。下图是误差随难度变化的核心证据。

> **看图路径：** 1. 先确认每子图横轴为按 MOS 差从小到大划分的百分位，纵轴为该区间的错误率；2. 再比较六个数据集上各曲线左高右低的共同趋势，并定位最低百分位 40% 以上的误差；3. 最后观察中段百分位的交叉波动，确认总体趋势不等于每段单调下降

[![原论文 Figure 3：Percentile-based error analysis across datasets: error rates are highest for pairs with small MOS…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f909e0840bb0/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f909e0840bb0/figure-3.png)

*论文图 3。原论文 Figure 3：“Percentile-based error analysis across datasets: error rates are highest for pairs with small MOS differences and decline markedly as the MOS gap widens.”。*

上图 6 个子图分别对应 BVCC、NISQA、SingMOS、SOMOS、TMHINT-QI 与 VMC23，横轴为 MOS 差由小到大的百分位，纵轴为错误率。可以看到各模型曲线总体左高右低，最低分位即使最强模型错误率也在 40% 左右，但在个别中段百分位存在交叉与波动，说明总体趋势不等于每个区间都单调成立。该图支持细粒度区分是共同瓶颈的判断，可能与待验证的感知阈值机制有关。

### MOS 感知奖励与偏好循环对照说明了什么？

本节把 MOS 感知改进与偏好循环分析放在同一问题下：生成式模型能否既保持传递性又提升小差距区分。偏好循环指出现甲优于乙、乙优于丙但丙优于甲的不可传递判断。标量与半标量在温度为 0 时对单样本独立打分，天然无循环；生成式直接对每对打分，可能出现循环。论文用满足 MOS 递减的三元组构造 565 个三元组共 1695 对做循环检测。

下表为原表选择的循环与难例对照的第一部分，阅读时以行标签与数值语义为准。

| Model | BVCC | NISQA | SingMOS | SOMOS | TMHINT-QI | VMC’23 | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GRMSFT | 2.00 | 2.00 | 2.00 | 1.54 | 0.00 | 9.00 | 2.83 |
| GRMGRPO | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 1.00 | 0.18 |
| GRMDAPO | 0.00 | 0.00 | 0.00 | 0.00 | 1.00 | 0.00 | 0.18 |

上表呈现原表矩阵的完整行列，覆盖 BVCC、NISQA、SingMOS、SOMOS、TMHINT-QI、VMC23 与总体列，用于对照不同训练策略下的成对表现。报告显示监督微调生成式循环率整体较高，而强化学习后循环大幅下降，同时成对准确率提升，支持强化学习既对齐偏好又抑制循环的判断。该对照的样本量有限，推广到全量分布时需谨慎。

为进一步检验难度自适应信号，下表给出第二组原表对照，条件与上一表不同，不可直接比较数值大小。

| Model | BVCC | NISQA | SingMOS | SOMOS | TMHINT-QI | VMC’23 | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GRMGRPO | 56.79 | 52.85 | 60.98 | 58.19 | 43.24 | 53.20 | 54.41 |
| MOS-aware GRMGRPO | 58.02 | 54.40 | 63.41 | 57.63 | 48.65 | 53.78 | 55.33 |

上表延续同一评价框架下的逐库对照，显示 MOS 感知模型在多数栏持平或提升，但在个别栏可能出现回退，说明难度加权并非每组都胜出。总体趋势不等于每组都成立，这一点需要在复述时明确保留。最后看极小差距子集的第 3 组对照。

| Model | BVCC | NISQA | SingMOS | SOMOS | TMHINT-QI | VMC’23 | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GRMDAPO | 58.02 | 54.40 | 63.41 | 57.06 | 48.65 | 52.62 | 54.75 |
| MOS-aware GRMDAPO | 58.02 | 55.44 | 63.41 | 59.32 | 48.65 | 53.49 | 55.78 |

上表为更难的极小差距子集的逐库对照，MOS 感知模型整体仍有有限增益，但绝对准确率仍处于较低区间，说明改进未改变小差距任务仍难的总体格局。下图对应 MOS 差不超过 0.5 的子集，与上表阈值不同。

> **看图路径：** 1. 先区分左图 GRPO 与右图 DAPO 两种训练策略的子图与图例颜色；2. 再逐数据集比较深色 MOS 感知柱与浅色基线柱的高低，重点看 TMHINT-QI 与域外集差距；3. 最后核对纵轴准确率区间，确认小分差子集整体仍处于较低水平

[![原论文 Figure 4：Performance comparison of MOS-aware GRMs and baseline GRMs trained with different reinforcement…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f909e0840bb0/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/f909e0840bb0/figure-4.png)

*论文图 4。原论文 Figure 4：“Performance comparison of MOS-aware GRMs and baseline GRMs trained with different reinforcement learning methods on samples with MOS difference ≤0.5.”。*

上图左右两幅柱状图分别对应 GRPO 与 DAPO 策略下 MOS 差不超过 0.5 的子集，深色为 MOS 感知模型，浅色为仅用准确率奖励的基线。可以看到 6 个数据集上深色柱均不低于浅色柱，其中 TMHINT-QI 与域外集的绝对提升较明显，但该子集准确率仍在 55% 到 65% 区间。两类难例切分共同支持 MOS 差距信息有稳定但幅度有限的增益，可能与待验证的难度加权机制有关，不宜夸大为已解决细粒度问题。

### 哪些边界尚未验证，不能承诺什么？

论文明确列出三项局限。第一，MOS-Pref 依赖主观听感，偏好化只能缓解而不能消除听音人差异；第二，当前只建模感知质量，未建模韵律、情感与说话风格等副语言属性，对表现力强的生成语音评估不全面；第三，语言与场景覆盖仍有限，需扩展更多语言与真实声学条件才能检验更广的泛化与鲁棒性。

未测量项包括误判率分解、延迟、推理开销与训练成本的完整预算，推理帧率与实际延迟应分别讨论，不能从总体准确率承诺这些量得到改善。相关性不等于因果：BT 优于 MSE、强化优于监督微调的观察支持偏好与强化路径的价值，但在基座与数据不完全一致的跨范式比较中不能当作纯方法因果。

附录的循环与极小差距分析样本量有限，推广到全量分布时需谨慎。自然语言评价的 70% 一致率也提示评价文本存在主观变异，不能把评价质量直接等同于偏好标签质量。

### 复现应先做什么，需要哪些信息条件？

复现先做数据管线而非直接调模型。第一步按 16 kHz 统一格式并检查说话人、内容、系统标识的完整性，缺失者剔除；第二步在各源库内按 3 类分组构造 MOS 不同的配对，MOS 高者为 chosen 并平衡各源对数；第三步按噪声、失真、自然度、连续性 4 维生成单条与成对评价，成对评价需给出 1 到 10 整数分并过滤掉与偏好标签矛盾者；第四步实现随机交换顺序、严格大于判正确、按库与总体统计准确率的评估脚本。

模型侧以 Qwen2-Audio-7B 为基座，按论文给出的轮数、批量、学习率与生成数复现 3 类路径，半标量注意语言模型损失权重 1.25，生成式注意每提示 4 补全与温度设置，推理温度设 0。MOS 感知奖励需按数据集 90 分位数归一化差值并截断到 0 到 1 区间，再与准确率奖励相加。

由于本次无可用资源状态，不得声称代码、权重或数据已公开；缺失的种子、早停与统计显著性检验需在复现报告中明确记为待补验证。训练在 8 卡 H20 上完成，复现时应分别记录训练资源与推理开销，不把总体准确率当成延迟或成本的证据。

### 何时值得尝试这套方法，如何一句话记住它？

当手头有多个 MOS 数据集但量表不可比，且下游需要为语音生成做偏好排序或奖励建模时，值得尝试库内偏好化加统一比较评估；若目标是精确预测绝对 MOS 或已有多库对齐的标定实验，则不应直接套用本文结论。实践顺序建议先用经典标量 BT 损失建立强基线，再视可解释性需求尝试半标量与生成式路径，最后在小差距难例上引入 MOS 感知奖励并用循环检测与分位误差分析检验副作用。

一句话记住：把不可比的分数换成可比的顺序，用难度感知的奖励去补小差距的短板，但生成式路径的总体精度与成本仍需权衡。研究生复述时应能说清输入如何分组配对、表示是单音频分数还是双音频评价加分数、目标是偏好准确率、输出如何判定正确，以及 MOS 感知项在何处介入强化学习。

未来验证应补足更多语言与真实声学条件、副语言属性建模，以及统计显著性与成本预算，才能把当前报告的有限增益推广为可部署的结论。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
