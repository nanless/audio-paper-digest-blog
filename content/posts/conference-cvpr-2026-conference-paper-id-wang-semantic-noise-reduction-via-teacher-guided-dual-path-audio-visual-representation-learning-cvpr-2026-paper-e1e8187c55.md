---
title: "Semantic Noise Reduction via Teacher-Guided Dual-Path Audio-Visual Representation Learning"
date: 2026-09-13
draft: false
description: "针对对比掩码自编码中随机可见块污染全局表示的问题，TG-DP 把重建与对比拆成两条掩码不同的前向路径并用全量教师做蒸馏与引导掩码，在 AudioSet 检索上把 R@1 从 35.2% 提升到 37.4% 和从 27.9% 提升到 37.1%，代价是每轮预训练时间从 730 s 增加到 1045 s 且推理前需丢弃教师分支。"
tags: ["对比学习", "知识蒸馏", "预训练", "音视频", "音频检索"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Wang_Semantic_Noise_Reduction_via_Teacher-Guided_Dual-Path_Audio-Visual_Representation_Learning_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Wang_Semantic_Noise_Reduction_via_Teacher-Guided_Dual-Path_Audio-Visual_Representation_Learning_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_Semantic_Noise_Reduction_via_Teacher-Guided_Dual-Path_Audio-Visual_Representation_Learning_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "d733857f455e4fdaceb9756489b00ab786446a6a1fdcbb1d07a11e0046edd79f"
paper_digest_api_reader_plan_sha256: "329fa0f6d5125d2d30be13efce0b8b33749907a41560f2d9121b7e0a4e43905c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d3e83eeff267a17ec1d58d778c584e24d77092ea0f783fd096478e3c18f96fa4"
paper_digest_api_reader_source_table_count: 5
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "c823a26e62a8409e486ff781b9bd5304772c4d5b41feadc9cb0e9397a5330493"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "6bec32f4f5f9d4e94ed5d4dc8c4813afaa75c5d3a94a4a3536700381c6540aad"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "0303fb38d115741f02ad2fcaf6a5fb2a22d1ee604eeb643e88cea7b7b55dbd8d"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"method","id":"method.distillation","label":"知识蒸馏"},{"facet":"setting","id":"setting.pretraining","label":"预训练"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.audio-retrieval","label":"音频检索"}]
paper_digest_primary_task: "音频检索"
paper_digest_primary_method: "知识蒸馏"
paper_digest_score: 6.8
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把重建和对齐分开做：教师引导的双路径如何减少语义噪声

> 英文题目：*Semantic Noise Reduction via Teacher-Guided Dual-Path Audio-Visual Representation Learning*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Wang_Semantic_Noise_Reduction_via_Teacher-Guided_Dual-Path_Audio-Visual_Representation_Learning_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Wang_Semantic_Noise_Reduction_via_Teacher-Guided_Dual-Path_Audio-Visual_Representation_Learning_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_Semantic_Noise_Reduction_via_Teacher-Guided_Dual-Path_Audio-Visual_Representation_Learning_CVPR_2026_paper.pdf)

标签：#对比学习 #知识蒸馏 #预训练 #音视频 #音频检索

评分：**6.8/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Linge Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yingying Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Bingke Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Lu Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Jinqiao Wang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

音视频表示学习以10秒视频帧与时间对齐对数梅尔谱为输入，输出可跨模态检索且可冻结分类的全局表示，难点在于随机高掩码常保留静音谱区与无效背景且重建与对比共享同一掩码视图时梯度互扰。重建分支以约75%高随机掩码建模模态内生成结构并输出重建损失。指数滑动平均教师观测全量无掩码输入，输出全局表示与全局到补丁注意力优先级以锚定语义。对比分支按优先级确定性保留Top-k可见令牌，以50%低掩码学习跨模态对齐并联合优化三项损失，上一步的优先级直接决定下一步可见集构成。与CAV-MAE Sync相比关键差异是不再共享同一掩码视图做双目标优化，其实质是将生成与判别解耦以保留更完整的对齐上下文。在AudioSet零样本检索评测任务下，Ours的指标R@1为37.4%，高于CAV-MAE Sync的指标R@1 35.2%。该结论适用边界受限于AudioSet-2M约139万可用对预训练与冻结编码器评测，对离屏声源与长时错位的外推尚未验证。预训练每轮训练成本从730秒增至1045秒，总时长从7.1小时增至10.2小时，推理开销可因丢弃教师与额外前向而消除。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要解决哪类噪声？

本文的输入是自然共现的音频视觉对。做法是每个训练样本取一段视频中的 1 帧图像与其时间对齐的音频段，音频先转成对数梅尔声谱图，再与图像一起切成块序列。目标是学到既能做跨模态检索又能做分类迁移的表示：检索时直接算音频全局向量与视觉全局向量的余弦相似度并排序，分类时冻结编码器只训练一个轻量头。

初学者需要先建立白话理解。语义噪声在这里不是麦克风底噪，而是指进入对比分支全局表示的可见块本身语义含量很低，例如静音段的声谱块、静态背景或发声体不在画面的图像块。把这些块平均或经注意力聚合进全局向量，就会稀释真正对应的吉他声与吉他外观的信号，削弱细粒度对齐。优化干扰是第二个关键词：掩码自编码希望从很少的可见块还原被遮挡内容，强调生成保真；对比学习希望不同遮挡下的同一视频仍有不变的跨模态语义，强调不变性。两者压在同一组令牌表示上梯度方向可能冲突。

本文的输出是一套预训练框架 TG-DP。它不改变检索时只用学生编码器的事实，训练后教师与解码器都可丢弃。必须保留的信息包括实验条件：预训练只用约 139 万有效 AudioSet 对而非完整 2,000,000，分类采用冻结编码器的注意力探测，下游检索是零样本无微调。资源状态方面，本次收到的证据中未发现完成 HTTPS 验证的开源资源，因此不能声称代码、模型或数据当前已公开，只能按论文正文转述其写法并提醒以实际可达性为准。

### 已有路线如何把重建与对齐放在一起？

按同输入、同目标、同监督来对照，音频视觉表示学习主要有 3 条线。第一条是对应预测，例如 L3-Net 判断图文是否来自同一视频，用共现做免费监督，能学到语义特征甚至定位能力。第二条是实例判别的对比学习，把同步音频视频对拉近、非同步对推远，后续加入多尺度与时间变换不变性，成为预训练的核心范式。第 3 条是掩码自编码，AV-MAE 对双模态做重建，CAV-MAE 把重建与跨模态对比放在同一框架，MaViL、CrossMAE、AVSiam、VAB 等改进掩码策略与融合方式。

教师学生学习是另一条正交路线。从知识蒸馏的软标签与中间层提示，到 BYOL、SimSiam、DINO 的指数滑动平均教师与停梯度自蒸馏，其作用是提供更平滑稳定的目标并抑制噪声。在多模态中，SoundNet 把视觉知识蒸馏给音频，CLIP 风格训练用教师提供更平滑的嵌入约束。

本文的继承与区别很明确。骨干直接采用 CAV-MAE Sync，它已引入全局令牌与寄存器令牌来减轻补丁令牌负担，并强调细粒度时间对齐。但原文指出其对比目标仍建立在受重建塑造的随机掩码表示上，同一掩码视图要同时满足重建与对齐。本文不是换骨干，而是换训练组织：把两个目标拆到 2 次前向、各自用不同掩码率，再引入全量教师做蒸馏与引导掩码。这与单纯调大模型或加数据不同，重点是训练视图的解耦。

### 为什么随机掩码会同时伤害重建之外的对齐？

沿一个样本走一遍现有流程最容易看清问题。输入是一张弹吉他的人像与一段吉他声谱图，切块后随机保留约 25% 的块用于编码，其余块要被解码器重建。编码器必须记住大量模态特有但跨模态无关的内容，才能从很少的上下文还原缺失，例如背景墙、静音帧。对比分支的全局令牌正是在这组为重建而随机保留的可见块上聚合出来的，它的视野是不完整且未按跨模态重要性筛选的。

下面这张示意图把上述矛盾画成了上下两行，上面是随机掩码导致的错位，下面是引导掩码期望的对齐，阅读时先看左右面板的输入输出关系，再看中间对齐箭头的成败标记。

> **看图路径：** 1. 先看左侧原始音频视觉对：上方声谱图与下方弹吉他人物照片的对应关系；2. 再看右上随机掩码面板中灰色遮挡下仅剩的稀疏可见块与中间红色叉号对齐箭头；3. 最后对比右下引导掩码面板中保留的吉他琴体区域与完整声谱能量区及绿色对号箭头

[![原论文 Figure 1：In existing contrastive masked autoencoder pretrain- ing frameworks, random masking may expose…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/37c9ae3c4dcd/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/37c9ae3c4dcd/figure-1.png)

*论文图 1。原论文 Figure 1：“In existing contrastive masked autoencoder pretrain- ing frameworks, random masking may expose patches with lim- ited cross-modal relevance, such as silent spectrogram regions or…”。*

图中左侧给出原始对：上方声谱图标注为吉他的声音，下方人物持吉他照片标注为弹吉他的人。右上常用策略面板中，视觉与声谱的可见块都是零散灰格中的少数亮块，视觉仅剩疑似脸部与背景碎片，声谱仅剩稀疏能量点，中间是标有对齐字样的双向箭头但被红色叉号否定，下方配有哭脸表情，两侧文字分别疑问是人与噪声。

右下本文策略面板中，视觉保留了吉他琴体连续区域，声谱保留了底部连续高能量区，中间同样是对齐箭头但配绿色对号与笑脸，两侧文字确认是吉他与吉他声。像素细节支持原文主张：随机可见集可能恰好错过发声体，而引导后的可见集在空间上更连续、在语义上更对应。这张图本身不证明检索增益，只解释语义噪声的来源假设，后续消融需要验证换视图是否真带来增益。

### 双路径全景：一次输入如何走完两条前向？

TG-DP 的全景可以按数据流复述。同一音频视觉对在一个训练步中被处理 2 次。左路是重建分支：双模态块经高比例随机掩码后只剩少部分可见块，分别经音频编码器与视觉编码器编码，再经联合编码器与解码器重建被遮挡块，产生重建损失。右路是对比分支：教师看全量未掩码块，输出全视角全局嵌入与注意力重要性图；学生看教师引导后的低掩码子集，经共享权重的编码器与联合层输出自己的全局向量，做跨模态对比损失，同时与教师全局向量做蒸馏均方误差。总损失是三项加权求和。

下图是论文给出的总体管线，阅读时先区分左右两大色块代表的分支，再追踪教师到学生的虚线引导与实线编码路径，最后落到 3 个红色损失框的汇合方式。

> **看图路径：** 1. 先沿左上原始输入的橙色与紫色箭头分别走向重建分支与对比分支；2. 再看右侧教师模型经注意力图产生引导虚线指向学生可见块的过程；3. 最后核对底部学生全局向量 gv 与 ga 分出对比损失与蒸馏损失以及右下角总损失加权式

[![原论文 Figure 3：Overall pipeline of our proposed framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/37c9ae3c4dcd/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/37c9ae3c4dcd/figure-3.png)

*论文图 3。原论文 Figure 3：“Overall pipeline of our proposed framework.”。*

图中左上灰色框为原始输入的声谱与人物图，向下紫色箭头进入粉色重建分支的随机掩码块，经音频视觉编码器与联合编码器、绿色解码器到达重建损失。向右橙色箭头进入蓝色对比分支，先到全量块，再经教师的音频视觉编码器与联合编码器，一路向下经注意力图虚线引导到教师引导可见块，另一路向右下经点线到教师全局向量。学生粉色编码器对引导可见块编码后输出学生全局向量，分别连向对比损失与蒸馏损失，右下角给出加权总损失公式。

关键可执行观察是重建与学生编码器之间标有共享权重的粉色虚线，说明 2 次前向用同一套编码器参数但各自的掩码视图与梯度来源不同；教师只在训练时提供目标与排序，推理时不再需要。这个设计把掩码策略的选择权从重建一方还给对比一方，是全文复现时最不能省略的结构。

### 骨干与令牌如何分工，重建损失算什么？

骨干沿用 CAV-MAE Sync。每个模态序列开头插入可学习全局令牌与若干寄存器令牌，补丁切分后按掩码保留可见子集。可见块经各自模态编码器得到表示，拼接后经联合编码器与解码器重建被遮挡块。重建损失按模态分别对掩码位置求均方误差，只在重建分支的视图上计算。全局令牌经过编码器与联合层后作为视频级与音频级描述子，进入对比分支的 InfoNCE 损失。

**掩码自编码 × 对比学习：** 掩码自编码负责从少部分可见块重建被遮挡的声谱图与图像块，分工是学习模态内部的结构与生成能力；对比学习负责把同一视频的音频全局表示与视觉全局表示拉近、把不同视频的表示推远，分工是学习跨模态对应。两者搭配的理由是前者提供细粒度内部约束、后者提供跨模态语义约束，但若共用同一随机掩码视图，生成目标需要的重遮挡会损害对齐需要的语义完整性，因此 TG-DP 让它们走不同掩码率的双路径，组合意义是各取所需视图并减少梯度干扰。

这一节的教学任务是区分两种令牌的用途，避免把所有向量混为一谈。补丁令牌承载局部细节，重建主要靠它们；全局令牌承载聚合语义，对比与检索主要靠它们；寄存器令牌是缓冲，避免补丁令牌被两个目标拉扯。原文明确重建分支用典型 75% 高掩码以迫使模型从有限上下文推断缺失，对比分支用 50% 较低掩码以保留更完整的语义上下文。实现上 2 次前向共享编码器与联合层权重，但损失只从各自视图计算，这是减少耦合的关键，而不是简单地把批量加倍。

**全局令牌 × 寄存器令牌：** 全局令牌是拼接在每个模态序列开头的可学习向量，分工是汇总该模态当前可见块的信息并作为对比损失与检索相似度的载体；寄存器令牌同样是插入序列开头的辅助向量，分工是分担重建过程中对块级细节的搬运压力，避免补丁令牌同时承担重建与对齐。两者搭配的原因是 CAV-MAE Sync 骨干希望把聚合功能与重建缓冲功能解耦，组合意义是让全局令牌更专注于视频级与音频级的语义描述，从而使后续对比更稳定。

需要提醒的缺项是原文未给出 3 个损失权重的具体数值，只说它们是固定超参数平衡三项目标；也未报告优化器、学习率与训练轮数的完整配置，复现时需回到官方实现核对，不能从模型名推定。

### 教师信号如何变成可见集与蒸馏目标？

对比分支的教师学生机制分两步。第一步是蒸馏锚定：教师吃全量块输出全局表示，学生吃掩码块输出全局表示，两者之间加均方误差，鼓励学生的部分观察仍靠近全视角语义。教师参数用学生参数的指数滑动平均更新，以获得时间上的平滑稳定。第二步是引导掩码：取教师联合编码器中全局令牌对各补丁的注意力权重，按模态内归一化后作为重要性分数，学生确定性地保留分数最高的前 k 个块，k 由对比分支掩码率决定。

**教师模型 × 学生模型：** 教师模型输入完整未掩码的音频与视频，分工是提供全视角的全局嵌入与基于注意力的块重要性排序；学生模型只看到教师引导后保留的掩码子集，分工是在缺失条件下编码并输出待对齐的全局表示。搭配理由是学生的部分观察容易丢失关键语义，而教师的全量观察可以给出平滑稳定的锚点，组合意义是通过蒸馏一致性损失把学生全局表示拉向教师表示，同时用注意力分数决定学生保留哪些块，实现结构化可见集。

与随机掩码的对比需要讲清代价。随机掩码实现简单且正则化强，但可能保留静音与背景；引导掩码更有结构，但需要 1 次教师全量前向与注意力提取，带来训练开销。原文还测试了在教师分数上加 Gumbel 噪声的概率化变体，结果不如确定性取前 k 稳定，原因是噪声扰动了排序的一致性，削弱了结构先验。

**随机掩码 × 教师引导掩码：** 随机掩码是均匀随机采样保留块，分工是为重建分支提供高遮挡的困难任务与正则化；教师引导掩码是按教师联合编码器中全局令牌对各补丁的注意力强度排序取前 k 个保留，分工是为对比分支构造信息量更高的可见集。搭配理由是重建需要难、对比需要全，同一随机策略无法同时满足，组合意义是重建支路保持 75% 左右高掩码，对比支路采用 50% 较低掩码并按教师分数确定性选择，从而减少静音谱段与无信息背景进入全局聚合的比例。

复述时要区分原始目标与近似：对比仍是主要的跨模态对齐目标，蒸馏是辅助的全视角一致性约束，重建是模态内部生成监督。三者不是同等地位，消融显示拿掉蒸馏仍有主体增益，说明解耦视图本身贡献更大。

### 训练时梯度从哪里来，推理时用哪条路？

训练的操作序列可以写成可执行步骤。第一步采样 1 帧与其对齐的音频段并切块；第二步做重建前向，高掩码随机遮挡，经共享编码器与解码器算重建损失；第三步做教师全量前向，不经梯度更新学生之外的参数，提取全局目标与注意力分数；第四步按分数构造学生的低掩码可见集，做学生前向，算对比损失与蒸馏损失。

第五步按加权总损失反传更新学生与共享编码器，再用滑动平均更新教师。两个分支的损失严格来自各自视图，重建不污染对比的全局聚合。

推理与下游使用是另一条路。检索时只用学生编码器抽取音频与视觉全局向量，算余弦相似度排序，不需要教师、注意力图与解码器，因此训练时的额外前向与教师参数不会带到推理。分类时冻结编码器，对每个时间步抽取视觉与音频全局向量并拼接成长度为 T 的序列，前置可学习分类令牌后送入两层 Transformer 加线性层的轻量头，AudioSet 多标签用二元交叉熵，VGGSound 单标签用交叉熵，只优化分类头。原文把该协议称为注意力探测，以区别于纯线性探测，复述方法时应保留这一命名差异。

### 训练成本增加多少，部署时能丢掉什么？

下面整理训练代价的来源证据，便于对照每轮耗时与总时长的数量级。

| 来源证据 | 量化值一 | 量化值二 | 量化值三 | 量化值四 |
| --- | --- | --- | --- | --- |
| 来源句一 | 730 s | 1045 s | — | — |

上表的主要代价是每轮增加约 315 秒，总时长从 7.1 小时到 10.2 小时，增幅不可忽略。对应的收益是前述检索与分类的提升，是否值得取决于算力预算与对音频到视觉方向的重视程度。部署时的结论相反：额外前向与教师仅在训练时存在，推理只用学生编码器，因此参数量与计算量无额外增加，检索排序的延迟与基线同量级。复现预算时应按训练侧留足时间，按推理侧不用预留教师显存，两者不可混为一谈。

### 数据、划分与指标如何保证可比？

预训练数据是 AudioSet-2M 的子集。原文说明该数据集原本为音频事件分类收集，约 2,000,000 条 10 秒 YouTube 片段，527 类，但并非为音频视觉对齐设计，存在离屏声源与静默场景等弱对应。实际可下载受视频下架与地区限制影响，约 350,000 条无法获取，再排除约 50,000 条缺音频或损坏帧，最终得到 1390395 个有效对。下游分类用 AudioSet-20K 平衡子集与 VGGSound 训练划分，检索用 AudioSet 与 VGGSound 的官方评测划分，其中 VGGSound 共 200,000 条 10 秒片段、309 类，且每段保证可见声源，对齐质量更高。

评估分两类。零样本检索按余弦相似度排序，报告双向的召回率 R@1、R@5、R@10，数值越高越好，比较时需注意 VAB-Encodec 是经目标检索集微调的参考，不与冻结嵌入的零样本方法直接比胜负。分类是冻结编码器的注意力探测，AS20K 用平均精度均值，VGGSound 用 Top-1 准确率。单模态迁移同样冻结编码器，只给音频或只给视觉。训练成本单独报告每轮秒数与总小时数，推理成本为零额外开销。复现时必须核对数据集有效子集、模型基线、实验阶段与聚合对象，数值相同不代表指标相同，百分点与相对百分比也不能混用。

### 主结果在什么条件下比基线好多少？

比较的问题是：在冻结嵌入、无微调的零样本检索条件下，解耦视图加教师引导是否同时提升双向召回与分类迁移。公平条件是与 CAV-MAE Sync 等训练无关的基线比，指标方向均为越高越好。下表先看单模态与跨模态分类的冻结编码器结果，它是原表直接选择的证据。

| Method | AS20K (Audio-only) mAP | AS20K (Vision-only) mAP |
| --- | --- | --- |
| CAV-MAE Sync | 29.3 | 14.3 |
| Ours (TG-DP) | 31.2 | 17.8 |

上表显示本文方法在音频单模态与视觉单模态上均高于同步基线，说明增益不限于跨模态对齐，也包含模态内部表示的增强。但这张表只是分类的一角，主张的检索增益需要下一张宽表来核对。

| 来源证据 | 量化值一 | 量化值二 | 量化值三 | 量化值四 |
| --- | --- | --- | --- | --- |
| 来源句一 | 35.2% | 37.4% | — | — |

上表的主要收益是 AudioSet 上双向 R@1 均提升，其中音频到视觉方向提升约 9.2 个百分点，幅度大于视觉到音频方向。原文解释该不对称可能与双编码器均从视觉预训练初始化以及音频语义更稀疏、更怕高掩码有关，较低掩码的对比视图保留了更完整的音频上下文。但这属于有限解释而非因果证明，仍待验证。代价与边界是 VGGSound 上的提升幅度较小，且灰色高亮的微调参考在部分指标上仍具竞争力，不能把零样本最优误读为全条件最优。

| 来源证据 | 量化值一 | 量化值二 | 量化值三 | 量化值四 |
| --- | --- | --- | --- | --- |
| 来源句一 | 29.3 | 14.3 | — | — |

上表说明跨模态解耦并未以牺牲单模态为代价，反而双模态均有提升，支持表示更鲁棒的判断。但需注意分类头本身含注意力层，不是纯线性层，跨论文对比线性探测数字时口径不一致。

### 哪部分真正起作用，换掉掩码率会怎样？

消融按机制组织：先看双前向本身，再看对比分支掩码率，最后看蒸馏与引导策略。双前向消融保持两路同为 75% 掩码，仅把单次前向拆成 2 次，结果是 VGGSound 检索在更难的音频到视觉方向 R@10 从 58.1 提升到 60.1，而 AS20K 基本持平。这支持拆分本身有益，但原文强调其更大作用是为后续差异化掩码提供结构基础。

掩码率消融固定重建分支，只变对比分支。很低掩码如 0.00 与 0.20 在 VGGSound 检索上最强，因为视图更完整，但 AS20K 分类明显变差，说明几乎去掉掩码会削弱正则化；很高掩码如 0.65 与 0.75 则显著损害检索，尤其音频侧稀疏语义更易被破坏。0.50 在检索与分类间取得最好平衡，且避免近全量视图的额外计算，因此被选为默认。

蒸馏消融固定对比分支掩码率为 0.50，仅比较有无教师蒸馏，下表汇总两行对照结果以便直接比较检索与分类变化。

| 蒸馏设置 | V→A R@1 | V→A R@5 | V→A R@10 | A→V R@1 | A→V R@5 | A→V R@10 | AS20K mAP |
| --- | --- | --- | --- | --- | --- | --- | --- |
| w/o | 29.5 | 54.7 | 63.9 | 29.1 | 53.1 | 63.5 | 30.5 |
| w/ | 31.3 | 54.4 | 63.9 | 30.3 | 53.1 | 64.3 | 32.0 |

上表的主要收益是蒸馏带来小而一致的提升，尤其音频到视觉与分类，但视觉到音频的提升相对微弱，说明蒸馏是轻量增强而非主导因素。未胜出项是概率化引导掩码：它在教师分数上加 Gumbel 噪声后取前 k，结果 consistently 低于确定性引导，有时甚至低于随机掩码，原因是排序被扰动后可见集跨样本不一致。确定性引导在检索与分类上更稳定，但优势幅度不大，复现时应保留随机掩码作为必备基线，不能只报最优变体。

### 还有哪些边界没有测，哪些推论不能做？

首先是数据边界。预训练只用了 139 万有效对，少于完整 AudioSet-2M，且 AudioSet 本身含大量弱对应，VGGSound 对齐质量更高但规模较小。结果在 2 个数据集上趋势一致是好信号，但不能推广到完全干净或完全噪声的未测分布。其次是协议边界。分类用的是带两层 Transformer 的注意力探测而非纯线性探测，与其他论文的线性数字口径不同；检索的微调参考不可比，训练无关的最优不等于微调后的最优。

其次是成本与超参数缺项。训练开销明确增加，推理开销为零，但原文未报告损失权重、学习率、优化器与轮数的完整取值，也未报告多次随机的方差与显著性，因此小幅消融增益应表述为支持而非证明。未测量的量包括误判率分解、实际延迟与不同硬件下的吞吐，不能承诺这些量同步改善。最后是机制解释的限度。音频到视觉提升更大的不对称现象，原文给出初始化与稀疏性的两点可能原因，但未做因果干预实验，应记为待验证假设。缺失证据不是技术错误，复现时应先补方差与超参数，再谈推广。

### 要复现先做什么，先核对哪些实现细节？

第一步先复现数据管线。按原文口径从 YouTube 收集 AudioSet-2M 后处理成 1390395 有效对，记录不可下载与损坏的排除逻辑；训练时每步随机选 1 帧与其对齐的音频段，转对数梅尔谱并切块。若数据子集不同，检索数字不可直接对比。第二步复现双视图。

重建分支固定高掩码随机遮挡，对比分支固定 0.50 掩码并按教师注意力确定性取前 k；2 次前向共享编码器与联合层，但损失各算各的。先跑同掩码 75% 的双前向基线，确认音频到视觉 R@10 确有小幅提升，再切到 0.50 验证主体增益，避免一步到位掩盖结构作用。

第三步复现教师。教师吃全量块，学生吃掩码块，两全局向量间加均方误差，教师用学生滑动平均更新；注意力分数取自教师联合编码器中全局对补丁的权重并按模态归一化。需核对停梯度位置与更新时机，原文未给出的权重与优化器细节必须以实际可运行代码为准，本次证据未验证代码可达性，因此不能写已公开，只能写需进一步确认。第四步复现评估。

检索冻结编码器算余弦排序，分类冻结编码器只训轻量注意力头，分别用二元交叉熵与交叉熵。先跑 CAV-MAE Sync 基线对齐口径，再跑本文方法，保留随机掩码与无蒸馏两个必备对照。

### 何时值得尝试这种解耦，还需补哪项验证？

当你的多目标预训练出现类似症状时值得尝试：重建需要高遮挡而对齐需要完整上下文，同一随机视图让全局表示混入静音与背景，且音频侧比视觉侧更脆弱。此时把两个目标拆到不同掩码率的前向，并用全量教师提供蒸馏锚点与确定性可见集，是简单有效的处方。VGGSound 与 AudioSet 的双向结果支持该处方在高质量与噪声数据上均有收益，尤其音频到视觉方向。

不值得盲目照搬的情况是：推理预算极敏感但训练预算充足反而无需担心，因为推理无额外 cost；训练预算极紧时则需权衡约 3 小时的额外预训练时间；若你的任务更依赖补丁级定位而非全局检索，还需补密集评估，因为本文主要报告全局检索与视频级分类。还需补的验证包括多次随机的方差、损失权重的敏感性、不同教师更新动量与 k 选择策略的对比，以及在完整 AudioSet-2M 与纯线性探测口径下的复测。只有补齐这些，才能把支持性证据升级为可部署的结论。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c73c75167f21/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c73c75167f21/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_Semantic_Noise_Reduction_via_Teacher-Guided_Dual-Path_Audio-Visual_Representation_Learning_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c73c75167f21/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c73c75167f21/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_Semantic_Noise_Reduction_via_Teacher-Guided_Dual-Path_Audio-Visual_Representation_Learning_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c73c75167f21/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c73c75167f21/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_Semantic_Noise_Reduction_via_Teacher-Guided_Dual-Path_Audio-Visual_Representation_Learning_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c73c75167f21/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c73c75167f21/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_Semantic_Noise_Reduction_via_Teacher-Guided_Dual-Path_Audio-Visual_Representation_Learning_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 5，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c73c75167f21/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c73c75167f21/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_Semantic_Noise_Reduction_via_Teacher-Guided_Dual-Path_Audio-Visual_Representation_Learning_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 6，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c73c75167f21/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c73c75167f21/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_Semantic_Noise_Reduction_via_Teacher-Guided_Dual-Path_Audio-Visual_Representation_Learning_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 7，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c73c75167f21/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c73c75167f21/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_Semantic_Noise_Reduction_via_Teacher-Guided_Dual-Path_Audio-Visual_Representation_Learning_CVPR_2026_paper.pdf#page=5)

另有 5 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_Semantic_Noise_Reduction_via_Teacher-Guided_Dual-Path_Audio-Visual_Representation_Learning_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
