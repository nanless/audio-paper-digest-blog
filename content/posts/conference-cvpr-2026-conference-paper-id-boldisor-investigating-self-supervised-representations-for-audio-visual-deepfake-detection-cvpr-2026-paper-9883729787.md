---
title: "Investigating Self-Supervised Representations for Audio-Visual Deepfake Detection"
date: 2026-09-13
draft: false
description: "论文把多种自监督音频、视觉和音画特征冻结后只训练线性分类头，在科学数据集与野外数据上比较检测、异常检测、可解释定位与互补融合，发现含音频信息的表示泛化最好但野外数据仍困难，且随机特征也能靠捷径得高分。"
tags: ["自监督学习", "模型评估", "可解释性", "音视频", "音频深度伪造检测"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Boldisor_Investigating_Self-Supervised_Representations_for_Audio-Visual_Deepfake_Detection_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Boldisor_Investigating_Self-Supervised_Representations_for_Audio-Visual_Deepfake_Detection_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Boldisor_Investigating_Self-Supervised_Representations_for_Audio-Visual_Deepfake_Detection_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "9cb330d8f777d26cfb3ed0876fbf084582034c3fb1ef0f60ecba1ef1a603249b"
paper_digest_api_reader_plan_sha256: "56e66b1fd2c6641cf89d7f5851ab1938849b37820f55d42131d1a4c86bf16ec1"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "c17e7a94d032f20b1bbff8ac5b2e98f21cf2366292b45b03fdf7f63ced4f8912"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "0355afa0982133ef87cce55fbb0e678a466e59c842101343b672dc4bf55cf64f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "2ea71eb38b3e2599d6b5afdc6e79e2403fa189e1e7642bd5d0054ace49af9354"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "4037cc82db11595826b2bc0680c73b0d52feaadf234b2bc92477bbcf0e354a28"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.self-supervised","label":"自监督学习"},{"facet":"research_focus","id":"research_focus.evaluation","label":"模型评估"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.audio-deepfake","label":"音频深度伪造检测"}]
paper_digest_primary_task: "音频深度伪造检测"
paper_digest_primary_method: "自监督学习"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 自监督表示真能看穿音画伪造吗：冻结特征加线性头能走多远

> 英文题目：*Investigating Self-Supervised Representations for Audio-Visual Deepfake Detection*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Boldisor_Investigating_Self-Supervised_Representations_for_Audio-Visual_Deepfake_Detection_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Boldisor_Investigating_Self-Supervised_Representations_for_Audio-Visual_Deepfake_Detection_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Boldisor_Investigating_Self-Supervised_Representations_for_Audio-Visual_Deepfake_Detection_CVPR_2026_paper.pdf)

标签：#自监督学习 #模型评估 #可解释性 #音视频 #音频深度伪造检测

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Dragos-Alexandru Boldisor：机构信息未能从会议 PDF 纯文本可靠映射
- Stefan Smeu：机构信息未能从会议 PDF 纯文本可靠映射
- Dan Oneata：机构信息未能从会议 PDF 纯文本可靠映射
- Elisabeta Oneata：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该任务将说话人音视频映射为真伪二分类标签，难点在于局部篡改信号细微且跨数据集生成方式多变，前导静音等分布偏移还会被分类器利用形成虚假关联。方法链第一步用冻结的音频、视觉及多模态自监督编码器抽取帧级嵌入，保留原始表示的信息量以供直接评估。第二步在其上训练带对数求和指数池化的线性探针，将帧级证据聚合为视频级伪造分数，使单个伪造片段即可触发判真为假。第三步以仅真数据训练的异常检测检验表示是否依赖伪影，并用时间与空间解释对齐局部篡改标注，再以预测相关性与晚融合验证跨模态互补性。相对把特征埋入复杂监督架构而难以归因的做法，该线性评估直接度量表示本身的取证信息量及其泛化能力。在AV1M数据集训练并在FakeAVCeleb评测的设置下，BRAVEn视觉分支的AUC为98.8%，高于AVFF的AUC89.2%。其适用边界是野外数据的泛化仍显著受限，音频表示在缺少音频篡改的数据上亦不适用。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 复现相关资源：<https://bit-ml.github.io/ssr-dfd> → <https://bit-ml.github.io/ssr-dfd/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/JoeLeelyf/OpenAVFF> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，为什么专盯说话人视频？

这篇论文只做一件事：给一段包含声音和画面的说话人视频，判断它是真人录制还是机器合成的音画伪造。输入是完整视频，输出是一个视频级真假分数，分数越高越可能是假。作者把重点放在人说话场景，理由是这类内容消费量大且一旦造假后果直接，涉及谣言与诈骗。研究对象不是纯图像换脸，也不是纯音频克隆，而是两者可能同时或局部被改的音画视频。

初学者容易把问题想成训练一个越深越好的分类器，但论文把问题拆成三问：表示里有没有用、模型到底在看哪里、不同表示是否互补。白话说，自监督表示是指在大规模无标注音视频或图像上先做遮挡预测或对比任务学到的向量，英文是 self-supervised representation；线性探测是指把表示冻住只训练一个线性层加池化，英文是 linear probing。这样做的目标是公平比较表示本身的信息量，而不是比较谁的下游网络更复杂。论文报告说多数自监督特征都能编码与伪造相关的信息，且信息之间互补。

含音频信息的表示泛化最好并达到最优结果，但野外数据仍然困难。项目网页当前可用，地址是 <https://bit-ml.github.io/ssr-dfd>，资源状态为 available，本文写作时可访问。另一份第三方实现链接 <https://github.com/JoeLeelyf/OpenAVFF> 状态也是 available，但它只是论文用作基线的非官方实现，不能当作本文方法的官方代码。

### 术语小抄：初次见到的词如何一次记牢？

自监督学习是指不靠人工真假标签，而是靠遮挡预测或对齐等代理任务从无标注数据学表示，英文是 self-supervised learning。模态是指数据的通道，音频、视觉与音画即不同模态；预训练内容是指权重当初见过唇动还是通用图像，这决定它对什么线索敏感。伪相关或捷径是指与伪造本质无关却能分开真假的分布差，英文是 spurious correlation，典型例子是开头静音。log-sum-exp 池化是把多帧分数聚成一个视频分数的光滑最大值，含义是有局部很假就判整段假。

AUC 是阈值无关的排序指标，50% 为随机，越高越好；平均绝对误差是空间对齐误差，越小越好。Grad-CAM 是一种把决策梯度回传到特征图得到热力图的方法，用于空间解释。late 融合是指各模型先各自打分再平均，不在特征层拼接，简单但能检验互补。异常检测的两条支路要分工记忆：下 1 帧预测检验时间可预测性，只看单模态历史能否推出下 1 帧。

音视频同步检验跨模态一致性，只看同一时刻声音与画面是否对齐；两者组合原因是它们都只用真样本建模正常分布，一个管时间动态、一个管模态对齐，正交互补才能共同排除捷径。这些词在后文简称固定：表示指冻结向量，头指线性层加池化，同步指音视频同步分支，预测指下 1 帧预测分支。记住分工与组合原因后，再看表格就不会把不同条件下的数字混为一谈。

### 已有路线在用什么特征，为什么还要系统比较？

按相同输入与相同目标，已有音画伪造检测大致分两路。一路是判别式分类器，直接学真假分界；另一路是找跨模态不一致，例如口型与音素对不上、表情与情绪对不上，或稠密音画表示对不齐。按监督方式，已有工作有用自监督特征的：图像侧常用 CLIP，音频侧常用 Wav2Vec2，音画侧常用 AV-HuBERT，有的冻结后只加线性层，有的放在复杂结构里。论文指出前人多是孤立用一种特征或埋在复杂架构中，没有在统一条件下比较音频、视觉、多模态以及唇动与通用视觉两类内容。

教学上可以这样理解：同是看嘴，唇动模型关注嘴部运动与语音的对应，通用视觉模型关注整帧纹理与伪影；同是听声音，纯音频模型关注声学可预测性，多模态预训练的音频分支还见过唇动。论文的对照价值在于把这些不同预训练模态与输入模态的表示放在同一线性头、同一数据集划分与同一指标下比较，并补了异常检测与解释两类检验，避免只看域内准确率就下结论。

相关工作中还提到零样本与无监督用法，以及从头训练音画表示的做法，但本文不训练新的自监督骨干，只复用公开预训练权重做探测与分析。

### 同输入同目标的对照：本文与现有方法差在哪？

按同输入同目标同运行阶段对照，本文不是新检测器，而是统一评估协议。AVAD 与 SpeechForensics 同样用自监督表示做异常或同步，但本文同时比较十余种表示并补了解释与互补，而非只推一种。AVFF 是复杂音画融合的有监督模型，本文用其非官方实现在同数据微调后发现简单线性头在 AV1M 域内与跨域上不输甚至更好，支持特征更重要的判断，但这不构成同条件胜负的普遍结论，因为训练数据量与实现差异仍存在。

RealForensics 与 AuViRe 分别在野外与局部定位上有各自优势，本文表格显示它们在不同列各有胜负，没有全胜者。教学意义是：类别差异不能当胜负，例如拿通用图像模型去比唇动模型在无声数据上的音频分支毫无意义；只有在相同训练测试划分、相同真假定义与相同指标下，数字才可比。本文的增量正在于把这些条件对齐，并用随机基线与异常检测揭示高分的来源不同。

### 要回答的三个问题是什么，难在哪里？

论文围绕 3 个研究问题展开。第一，表示有没有用且是否稳健：在域内与跨域数据上能否分开真假，在只见过真样本的异常检测任务上是否还有效。第二，模型在看哪里：时间上的分数峰是否落在真实篡改段内，空间上的热力图是否与人类点击的伪影位置一致。第三，表示之间是否互补：预测相关性低且融合能涨点，才说明编码了不同线索。难点有 3 层。

第一层是局部篡改，AV-Deepfake1M 这类数据只有短片段被改，全视频池化容易被平均掉，需要帧级分数再池化。第二层是捷径，也就是 spurious correlation，白话是真假样本在采集或合成流程上留下的与伪造本质无关的分布差，例如开头静音长度不同，分类器一旦利用它就能在多个数据集上都显得很准。第 3 层是野外数据的多样性，语言、场景、压缩与缺模态都可能变化，域内高分不代表野外可用。论文因此设计多面评估：线性探测测上限，异常检测断捷径，时间与空间解释看对齐，相关与融合看互补。

例子是帮助理解的例子：好比考试既看总分，也看是否靠漏题得分、答题步骤是否写在关键处、不同科目是否各有贡献，不能只看总分。

### 全景如何从一段视频走到一个分数与多份解释？

沿一个样本走一遍最清楚。输入是一段待测视频，包含音频波形与视频帧。第一步是特征提取，对每一时间位置得到一个局部时间特征向量，记作该帧的嵌入。不同表示的上下文不同，有的只看单帧，有的看小片段，有的看全片上下文，但输出都对齐到帧级时间轴以便比较。第二步是线性分类头，对每帧向量做 1 次线性打分，得到帧级伪造分。

第三步是池化，把所有帧分聚成一个视频级分数，论文用对数求和指数池化，英文是 log-sum-exp，它近似取最大值，含义是只要有一个局部区域很假就判整段为假。训练时只用视频级真假标签算交叉熵，更新的只是线性层的极少参数，骨干全部冻结。测试时除了输出视频分数，还能直接拿帧级分数做时间解释，再把帧内块特征的贡献展开做空间解释。另有两条异常检测支路不走真假分类，而是只用真样本学正常：一条学时间预测，下 1 帧难预测则异常。

一条学音画对齐，对不齐则判假。右侧的互补分析不改变单模型，只是比较多个单模型的预测相关并试 late 融合。

**自监督表示 × 线性探测：** 自监督表示负责把输入视频或音频变成每帧向量，它在大规模无标注数据上预训练并在本研究中冻结；线性探测负责在该向量上只学一个线性权重加池化来打假，两者搭配的理由是把检测能力归因到表示本身而非复杂分类器，组合意义是可以用同一极简头公平比较不同模态和预训练来源的信息量。

下面这张总览图把上述主路径与 3 组评估放在一张图里，左边是输入与冻结表示加可训练头，右边是 3 类探针，初学时建议先认清哪条箭头是推理主路径，哪几个框只是分析工具。

> **看图路径：** 1. 先从左侧输入视频箭头看到冻结的自监督表示块与可训练的头块；2. 再看右侧三组评估分支如何对应三个研究问题；3. 注意下方预训练数据图标表示输入模态与预训练模态可以不同

[![原论文 Figure 1：We evaluate a wide array of self-supervised represen- tations for audio-visual deepfake detection.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/45cc70913e47/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/45cc70913e47/figure-1.png)

*论文图 1。原论文 Figure 1：“We evaluate a wide array of self-supervised represen- tations for audio-visual deepfake detection.”。*

这张图的可执行读法是：主路径从输入视频指向冻结的自监督表示再指向小的分类头，说明性能差异主要来自表示；右侧第一排线性探测与异常检测对应有用性与稳健性，第二排时间与空间解释对应可解释性，第三排相关与融合对应互补性；下方预训练数据图标提醒输入模态与预训练模态可以分离，例如用多模态预训练的模型只取其视觉分支。理解这点后，后文所有表格都是在换表示而保持头极简，比较才公平。

### 用了哪些表示，它们在输入与预训练上有何不同？

论文共用十余种表示，可按输入模态分成 3 组。音频组包括 Wav2Vec XLS-R、Auto-AVSR 的音频编码器、AV-HuBERT 音频分支与 BRAVEn 音频分支；视觉组包括 CLIP、FSFM、VideoMAE、Auto-AVSR 视觉编码器、AV-HuBERT 视觉分支与 BRAVEn 视觉分支；音画组包括 Auto-AVSR 融合与 AV-HuBERT 融合。关键是要区分输入模态与预训练模态。

输入模态指推理时喂给编码器的是声音还是画面；预训练模态指该权重当初见过什么数据，例如 AV-HuBERT 视觉分支在推理时只看唇部画面，但预训练时同时见过唇动与语音，因此是音频告知的视觉表示，英文可记作 audio-informed visual representation。上下文也不同：CLIP 与 FSFM 是帧级，VideoMAE 是片段级，其余多为全片上下文。论文还加入随机初始化的 AV-HuBERT 作基线，目的是检验结构本身是否就带可利用的偏置。

实现细节上，音频特征按 50 Hz 抽取再拼成 25 FPS 以对齐视频，视觉多取唇部区域，维度与参数量随模型而异，但这些都不参与训练，只是决定冻结向量的形状。初学者常见误解是把参数量大等同于一定更好，论文后文显示小而对路的唇动视觉表示在跨域上反而更稳，说明预训练内容与任务的匹配比单纯规模更重要。

为理解跨域难度，先把 4 个评估数据集的规模与来源对齐，音频是否被篡改直接决定音频特征列是否可比，避免把不可比的灰色列当成性能差距。

### 真正训练了什么，异常检测两条支路如何计算？

本研究没有训练任何自监督骨干，所有骨干权重冻结，唯一有监督训练的是线性头与两类异常检测的小网络，这点必须先说清，避免误以为论文提出了新预训练模型。线性头的训练过程是：冻结帧向量，学一个向量权重，对每帧点乘得帧分，再经 log-sum-exp 得视频分，用视频标签算交叉熵更新权重。异常检测第一条是下 1 帧预测，用解码器 Transformer 看历史帧表示预测下 1 帧表示，只在真视频上用均方误差训练，测试时预测误差大的帧更可能是篡改，取帧误差的最大值经池化得视频分。

网络结构按原文是 4 layers each containing 4 heads, a feature dimension of 512 and a feed-forward dimension of 1024，前后加投影以对齐输入维度。第二条是音视频同步，先把音频与视觉帧表示做归一化并拼接，送入 4 层带层归一化与激活的多层感知机，训练目标是让音频帧与同时间视频帧的对齐概率高于邻近帧，测试时把对齐分取反再池化，对不齐则判假。两条支路都只用真数据，常用真人说话数据子集，因此天然避开了真假捷径。

**异常检测 × 有监督分类：** 有监督分类同时看真和假样本学分界，容易利用真假分布差如开头静音等捷径；异常检测只用真样本建模正常分布，把偏离当作假，两者搭配的理由是前者测表示的上限，后者检验该上限是否依赖伪相关，组合意义是区分表示真有取证线索还是只记住了数据集偏置。

下 1 帧预测与音视频同步的分工也要分清，下 1 帧预测检验时间可预测性，只看单模态历史能否推出下 1 帧，音视频同步检验跨模态一致性，只看同一时刻声音与画面是否对齐；两者组合原因是它们都只用真样本建模正常分布，一个管时间动态、一个管模态对齐，正交互补才能共同排除捷径而非重复同一线索。

**音视频同步 × 下 1 帧预测：** 下 1 帧预测负责用历史帧表示预测下 1 帧表示，预测误差大则判异常，它只用单流时间规律；音视频同步负责学习音频帧与对应视频帧是否对齐，对不齐则判异常，它用跨模态一致性，两者搭配的理由是分别检验时间动态建模与跨模态对齐两种正常性假设，组合意义是看哪种无监督代理任务更需要特定特征组合才能接近有监督效果。

### 在哪些数据与指标上比，条件是否对齐？

实验用 4 个音画数据集，覆盖学术与野外、全局与局部篡改。FakeAVCeleb 来自 VoxCeleb2 的真视频与换脸加唇同步加声音克隆的假视频，按七三分划分训练验证与测试。AV-Deepfake1M 超百万量级，用大语言模型改文本再用唇动与语音合成做局部替换，论文抽样子集训练验证并在原验证集中取 5133 条评估。AVLips 含真假数千条，真源包括 LRS3 等，假用多种说话头生成。DeepfakeEval 2024 是 2024 年网上流传的真实野外视频，按单人片段预处理后得 70 真 507 假，平均约 14 秒，语言多达数十种，篡改类型未知。

评估主指标是 AUC，即受试者工作特征曲线下面积，英文是 area under ROC curve，它与阈值无关，随机为 50%，越高越好；另有平均精度在附录。公平条件上，只在有标注时取同时含音频与视觉篡改的假样本，避免单模态缺失造成不公平；域内指同数据集训练测试，跨域指换数据集测试。基线包括随机初始化模型与 5 个现有方法，其中 AVFF 用非官方实现并在同数据上微调，其余用预训练模型。

时间定位指标是把每帧分数当预测、篡改段当标签算 AUC 再按视频平均；空间对齐用人类点击与热力图最大值的平均绝对误差，误差越小越好。硬件与统计显著性在正文证据中未交代，这是复现时需注意的缺项。

### 谁在域内强，谁在跨域稳，随机特征为何不随机？

先看比较问题：在同一极简头下，哪类表示域内可分且跨域仍有效，指标方向是 AUC 越高越好。下表把训练在 AV-Deepfake1M 上的各方法放在 4 个测试集上比较，包含每模态最优的自监督线性探测与现有方法，平均栏同时给出全平均与去掉域内的平均，表中数值为原文报告的 AUC 百分比，裸值不另加单位。

| 条件与指标 | Wav2Vec2 音频 | BRAVEn 视觉 | AV-HuBERT 音画 | 现有最优对照 |
| --- | --- | --- | --- | --- |
| AV1M 域内 AUC | 100 | 93.0 | 99.9 | 100 |
| FAVC 跨域 AUC | 99.9 | 98.8 | 99.5 | 100 |
| AVLips 跨域 AUC | 56.3 | 96.7 | 84.4 | 92.7 |
| DFE 野外 AUC | 58.6 | 76.0 | 54.3 | 75.6 |
| 四集平均 AUC | 78.7 | 91.1 | 84.5 | 84.1 |
| 去域内三集平均 | 71.6 | 90.5 | 79.4 | 89.4 |

表后解释要同时讲收益与代价。

收益是多数表示域内都很强，音频在同时有语音篡改的 FAVC 与 AV1M 上最好，音频告知的视觉分支在缺音频篡改的 AVLips 与野外集上最好，其中 BRAVEn 视觉分支跨域平均最高，论文称达到最优。代价有三：其一，音频表示一旦遇到无音频篡改的数据就掉到 50% 附近，说明强是条件强；其二，野外集即使域内训练也只有 75.5% 左右，跨域最好 76.0%，说明野外不仅是分布 shift，更是本身更难；其三，随机音频特征域内可达 99.8% 且跨域非随机，说明有监督 AUC 会被捷径推高，不能单看它就说表示学会了取证。

未胜出项也要点名：FSFM 与 VideoMAE 等通用视觉在跨域上弱，Auto-AVSR 融合整体偏弱，RealForensics 在野外相对稳但在 AV1M 域内低，这些反例说明没有一种表示全场景通吃。

**时间解释 × 空间解释：** 时间解释负责指出视频中哪几帧推高了假的分数，它来自帧级线性分数；空间解释负责指出 1 帧内哪个图像块推高了该帧分数，它来自块平均或梯度定位，两者搭配的理由是局部篡改既有时间范围也有画面位置，组合意义是同时检验模型是否在正确时间看向与人类标注相近的面部区域。

时间解释负责回答篡改在何时出现，用帧级分数对齐局部篡改段以检验分类是否落在真凭据上；空间解释负责回答模型在画面何处取证，用热力峰值对齐人类点击以检验是否看对面部语义区而非背景捷径。两者必须组合的原因是时间对了而空间错仍可能是捷径，只有时间定位与空间对齐同时成立，才能说明表示既找对时刻又看对位置。

时间定位的总体图先看分类与定位是否同涨同跌，若定位紧跟分类说明帧分确实落在篡改段而非捷径上。

> **看图路径：** 1. 对比每组浅色分类柱与深色斜线定位柱的高度差；2. 观察随机特征组定位柱明显塌陷而训练特征组基本保持；3. 注意蓝色音频组与绿色视觉组在分类与定位上的一致性差异

[![原论文 Figure 2：Temporal localization of explanations (solid bars) and deepfake classification (hatched bars) on…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/45cc70913e47/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/45cc70913e47/figure-2.png)

*论文图 2。原论文 Figure 2：“Temporal localization of explanations (solid bars) and deepfake classification (hatched bars) on AV1M. Colors indicate modality: blue (audio), green (visual), red (audio-visual).”。*

这张柱状图的读法是：横轴是不同表示，纵轴是 AUC 百分比，浅柱为分类，深斜线柱为定位；音频组两者都高且接近，视觉组中 AV-HuBERT 与 BRAVEn 的视觉分支两者都高，而随机音频的深柱明显矮一截，随机视觉两者都低；FSFM 定位远低于分类，提示其分类分可能未对准篡改时间。空间对齐的曲线与样例进一步显示，CLIP 解释随置信度提高而误差下降，优于帧中心与随机位置，但仍弱于直接拟合点击的模型，且热力多集中在面部额头而人类多标眼睛与嘴唇，说明看对了大致区域但未精确复刻人类。

> **看图路径：** 1. 先看左侧曲线横轴为最小伪造分数纵轴为平均绝对误差的下降趋势；2. 再对比解释曲线与帧中心人脸中心与点击模型三条基线的位置；3. 最后看右侧上下两排人标红圈与模型热力图绿圈是否落在同一面部区域

[![原论文 Figure 4：Alignment of spatial explanations to human annotations.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/45cc70913e47/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/45cc70913e47/figure-4.png)

*论文图 4。原论文 Figure 4：“Alignment of spatial explanations to human annotations.”。*

这张图的读法是：左侧横轴最小伪造分数越大表示越确信，纵轴误差下降表示越确信越接近人标，但样本变少方差变大；右侧上排红圈为人标，下排热力绿圈为模型峰值，多数落在脸上而非背景，证明未依赖背景捷径，但具体落点与人标仍有偏差。

### 去掉监督或换特征组合后，什么还成立什么塌了？

本节的比较问题是：只用真数据时哪些特征组合还能用，融合是否总带来提升。下表比较有监督与两种异常检测在 AV1M 与 FAVC 上的表现，训练条件不同因此不能直接比绝对值，重点看塌陷程度与组合必要性，数值仍为原文 AUC 百分比。

| 特征与训练条件 | AV1M 有监督 | AV1M 下 1 帧预测 | AV1M 同步 | FAVC 有监督 | FAVC 下 1 帧预测 | FAVC 同步 |
| --- | --- | --- | --- | --- | --- | --- |
| AV-HuBERT 音频单特征 | 99.0 | 90.6 | 不适用 | 100 | 80.5 | 不适用 |
| Wav2Vec2 单特征 | 96.6 | 56.6 | 不适用 | 99.9 | 59.4 | 不适用 |
| AV-HuBERT 视觉单特征 | 64.1 | 46.1 | 不适用 | 95.5 | 55.3 | 不适用 |
| AV-HuBERT 音加视 | 97.2 | 84.5 | 87.3 | 100 | 91.2 | 96.3 |
| AV-HuBERT 音频加 CLIP | 99.0 | 86.9 | 50.0 | 100 | 79.6 | 54.4 |
| Wav2Vec2 加 AV-HuBERT 视觉 | 96.2 | 60.6 | 86.5 | 100 | 79.4 | 94.6 |

表后解释先讲稳健性：随机特征在同步任务上掉到 50% 附近，在下 1 帧预测上也只有中等，证明异常检测确实断掉了有监督利用的捷径，这是收益。代价是单特征异常检测普遍弱，下 1 帧预测必须有 AV-HuBERT 音频才好，同步必须有 AV-HuBERT 视觉才好，CLIP 或随机特征做同步几乎无效，唯一接近有监督的是 AV-HuBERT 音加视的同步模型。

失败条件很具体：把 CLIP 换进同步组合会塌到 50% 左右，说明同步需要能对齐唇动时间动态的表示，通用图像表示给不出对齐信号。论文还试过更强的 Transformer 后端，结果相似，支持特征比分类器更重要的判断，但这只是有限解释而非因果证明。
互补性分析看相关与融合是否一致，左矩阵为预测 Pearson 相关，右矩阵为融合相对提升。

> **看图路径：** 1. 先读左侧相关矩阵中音频对之间高值与跨模态低值的分布；2. 再读右侧相对提升矩阵中弱模型行提升大而强模型行接近零；3. 注意同一列中互补强但性能相近的组合并未总带来更大增益

[![原论文 Figure 5：Correlations between models (left) and downstream performance (right).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/45cc70913e47/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/45cc70913e47/figure-5.png)

*论文图 5。原论文 Figure 5：“Correlations between models (left) and downstream performance (right).”。*

这张图的读法是：左侧音频对之间相关最高，视觉对之间次之，AV-HuBERT 视觉与音频的相关反而高于与其他视觉的相关，因为它只看唇动且与音频联合训练；右侧弱模型如 VideoMAE 与任何强音频融合都有大幅度的相对提升，而强模型之间融合几乎为零甚至为负；例外是 VideoMAE 与 CLIP 更相关却比与 AV-HuBERT 视觉融合提升更大，说明融合效果不只由互补决定，还与基线高低与线索质量有关。

**互补性 × late 融合：** 互补性负责度量 2 个模型预测是否不一致，相关低说明编码线索不同，它是分析量；late 融合负责把两个已训练探头的预测平均后输出，它是使用互补性的动作，两者搭配的理由是只有线索不同且都有效时平均才可能提升，组合意义是把相关系数与融合增益对照，判断多特征组合是否值得部署。

就近的未胜出项是音频之间互补小、融合增益小，视觉之间互补大、融合增益大，但也有上述例外，因此不能把低相关直接承诺为高增益。

### 哪些结论有边界，野外差距来自哪里？

论文明确承认野外差距仍大，既有表示也有现有方法在 DeepfakeEval 上都不好，跨域最好仅 76% 左右。作者的解释是数据本身难且多样，而非特征只记捷径，证据是时间与空间解释显示模型多看向语义相关区域而非背景或静音之外的纯偏置。但这属于有限解释，因为解释对齐好不等于野外可分，野外还有缺模态、语言多、压缩与场景变化等问题未被建模。

另一边界是音频告知的视觉表示依赖唇部裁剪与说话人可见，若视频无清晰人脸或无语音，该路线直接失效，而通用视觉在此时也未显示足够稳健性。随机特征的发现既是贡献也是警告：它证明标准有监督评估会被捷径驱动，但论文对 FSFM 等定位差的原因未找到可见偏置，说明还有未解释的失败模式。统计上，定位平均与 MAE 随阈值的曲线都受样本量影响，高置信区方差大，不能把尾部一两个点当作整体结论。

此外，训练与推理开销、延迟与帧率在正文证据中未报告，不能承诺线性头就一定更快更便宜，总体趋势也不等于每组视频都成立。

### 要复现这套比较，先准备什么，按什么顺序跑？

复现先做三件事。第一，拿数据与划分：FakeAVCeleb 按七三划分，AV-Deepfake1M 用抽样子集并保留 5133 条评估，AVLips 全量评估，野外集按单人片段预处理后得 70 真 507 假，平均 14 秒；注意只在有标注时评估同时含音画篡改的假样本，否则音频与视觉不可比。第二，准备冻结权重：Wav2Vec XLS-R、AV-HuBERT、BRAVEn、CLIP、FSFM、VideoMAE 与 Auto-AVSR 的音频视觉分支，音频按 50 Hz 抽后拼成 25 FPS，视觉按唇部裁剪，维度按各自模型来，不微调骨干。第三，实现极简头：帧级线性加 log-sum-exp 池化，用视频标签交叉熵训练。

异常检测另起小网络，下 1 帧预测用 4 层 4 头 Transformer，同步用 4 层多层感知机，都只用真数据。先跑域内线性探测得到上限，再跑跨域得到泛化，再跑异常检测检验捷径，再跑时间定位与空间 Grad-CAM 对齐，最后算预测相关并试 late 平均融合。关键超参数与预处理细节正文未全给，需核对附录与项目页。代码层面，官方项目页当前可用，第三方 AVFF 非官方实现当前可用但只用于基线，不能替代本文方法。

权重下载与系统可运行是两回事：即使权重可下，唇动裁剪、对齐与评估脚本仍需补齐才能跑通全流程。

### 何时值得试这套表示，何时不要指望它？

值得试的场景很具体：输入是说话人音画、有清晰唇部与可用音频，且任务是学术集上的检测或局部篡改定位，此时优先试音频告知的表示，例如 AV-HuBERT 或 BRAVEn 的视觉分支，音频本身有篡改时再加 Wav2Vec 类音频分支，头先用线性即可，因为论文显示换强分类器提升不大。若数据缺音频篡改或多为无声画面，不要指望纯音频分支，它会掉到随机附近。

若目标是野外多语言多场景，不要把域内高分当作可部署收益，论文野外最好仅七成多，且本身难度大，需要额外处理缺模态与领域多样性。做论文特有的防坑检查时，务必加随机初始化对照与只训真样本的异常检测：若随机也能高分，说明评估有捷径；若异常检测塌了而有监督很高，更要看时间解释是否落在篡改段。还需补的验证是误判率、延迟与成本，以及在更多野外切片上的稳定性，这些原文未测量，不能承诺改善。

一句话收束：冻结自监督表示加小头是低成本试探表示信息量的好方法，含音频信息的唇动表示目前最稳，但野外音画打假仍未解决，复现应从对齐评估条件与断捷径检验开始。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/675f25469063/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/675f25469063/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Boldisor_Investigating_Self-Supervised_Representations_for_Audio-Visual_Deepfake_Detection_CVPR_2026_paper.pdf#page=3)

另有 2 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Boldisor_Investigating_Self-Supervised_Representations_for_Audio-Visual_Deepfake_Detection_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
