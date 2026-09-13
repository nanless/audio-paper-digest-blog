---
title: "Cross-Modal Emotion Transfer for Emotion Editing in Talking Face Video"
date: 2026-09-13
draft: false
description: "针对说话人视频中情绪编辑受限于离散标签和参考图像的问题，C-MET 用语音与表情空间的情绪语义向量差做跨模态回归，在 MEAD 上把情绪准确率做到最高，同时保留唇动与身份，且能处理训练未见的扩展情绪。"
tags: ["对比学习", "多模态学习", "音视频", "语音", "音视频生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Choi_Cross-Modal_Emotion_Transfer_for_Emotion_Editing_in_Talking_Face_Video_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Choi_Cross-Modal_Emotion_Transfer_for_Emotion_Editing_in_Talking_Face_Video_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Choi_Cross-Modal_Emotion_Transfer_for_Emotion_Editing_in_Talking_Face_Video_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "24ad1e0509082ac93e8fd038447ac7ab07d6f9ac035752e7c93e3fb5a1e61c72"
paper_digest_api_reader_plan_sha256: "a6817b0d6286ab1b00dba5bc72ad3734387c6497a0f97b191a7d57c656fe0bb5"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "3a113149dacf80fdb21cfd86665169b1ac841152b1e9f77979b5ce884fbb2ffe"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "87da077a2e121e741592b1b1b50680d782f907e102108775e76cedd9dc0d4015"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "5fa8c06cc4bf23853185dc755bf404ef21692e52da93c1b7bdb9014128101582"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "27bd6d6769f629bcf265c498a560226c43f810dbe492c39f0feca75c917b649c"
paper_digest_api_reader_resource_count: 2
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.contrastive","label":"对比学习"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.av-generation","label":"音视频生成"}]
paper_digest_primary_task: "音视频生成"
paper_digest_primary_method: "多模态学习"
paper_digest_score: 7.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 不用表情图片，只用情感语音的差向量去改脸：C-MET 的跨模态情绪编辑

> 英文题目：*Cross-Modal Emotion Transfer for Emotion Editing in Talking Face Video*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Choi_Cross-Modal_Emotion_Transfer_for_Emotion_Editing_in_Talking_Face_Video_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Choi_Cross-Modal_Emotion_Transfer_for_Emotion_Editing_in_Talking_Face_Video_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Choi_Cross-Modal_Emotion_Transfer_for_Emotion_Editing_in_Talking_Face_Video_CVPR_2026_paper.pdf)

标签：#对比学习 #多模态学习 #音视频 #语音 #音视频生成

评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Chanhyuk Choi：机构信息未能从会议 PDF 纯文本可靠映射
- Taesoo Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Donggyu Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Siyeol Jung：机构信息未能从会议 PDF 纯文本可靠映射
- Taehwan Kim：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

情感编辑说话人脸视频（Emotion Editing in Talking Face Video）任务输入为中性说话视频与目标情感语音，输出为保留唇动与头部姿态但表情转向目标情感的视频，难点在于语音中语言内容与情感纠缠、音频与视觉情感表征存在模态鸿沟。本文跨模态情感迁移（Cross-Modal Emotion Transfer，C-MET）将流程拆为三环：先用冻结的预训练音频编码器与解耦表情编码器分别抽取音频与视觉嵌入并做差得到情感语义向量（emotion semantic vector），再经可学习分词器与双向对比学习对齐多模态表征，最后由多模态 Transformer 编码器以语音差向量为条件回归视觉目标差向量，叠加到输入表情嵌入后送入预训练视觉解码器合成。与标签法离散受限、音频法内容情感未解耦、图像法依赖正面参考图不同，该方法直接建模差向量间映射并可作为轻量插件替换重型表情编码器。在 MEAD 上其情感准确率 Accemo 达到 55.91%，相对最强基线 EDTalk 的 41.99% 高 13.92 个百分点，但 FID 为 90.804 弱于 EDTalk 的 76.423，FVD 为 329.862 弱于 293.904，存在表情动态增强伴随重建指标劣化的权衡。扩展情感语音由 Gemini TTS 合成，无真值视频，仅靠用户研究评估。原文披露单卡 RTX 3090 与优化器配置，未披露学习率、批量大小与训练轮数。

## 🔗 开源与复现资源

- 代码相关资源：<https://chanhyeok-choi.github.io/> — 链接可访问（HTTP 200）
- 演示资源：<https://chanhyeok-choi.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么：先把情绪编辑任务摆清楚

这篇论文研究的是说话人视频中的情绪编辑。输入是一个已经能对上口型的中性说话视频，以及一段携带目标情绪的语音。目标是只改变脸上的情绪表达，不改变说话人是谁，也不改变嘴型与语音内容的对应关系。

头部姿态的大体走势同样需要保持。研究生容易把这个任务误解为直接用情绪语音驱动整张脸，原文的设定更严格。唇动用的中性语音与情绪来源用的情绪语音是分开的。

模型必须在唇动音频不变的情况下，仅从情绪语音中提取情绪变化。为什么不用离散标签直接指定愤怒或高兴？原文指出标签方法只能表达预先定义的几类基本情绪。讽刺、魅力这类扩展情绪无法用 8 类标签覆盖。

为何不用一张高兴的脸做参考？图像方法需要正面高质量参考图，对未见情绪很难采集。为何不直接用情绪语音驱动？已有音频方法把情绪与语言内容缠在一起。当唇动音频与情绪音频不一致时，输出往往退回中性。

于是论文把问题重新定义为跨模态的差向量映射。先分别在语音空间和表情空间算出从中性到情绪的变化，再学会从语音的变化预测表情的变化。本解读的输入是论文原文证据与本次收到的官方原图像素。

目标是让读者能复述方法与实验条件，输出是 1 篇可核对的技术讲解。必须保留的信息包括编码器是否冻结、令牌如何构造、损失由哪几项组成。训练与评测各用哪个数据集、比较基线用了何种情绪源同样必须保留。

下面先看一张跨方法对比图，它把任务难点浓缩在一个讽刺例子上。该图左侧给出语音空间与表情空间的语义向量示意。右侧给出同一身份在不同方法下的输出，身份、唇动、姿态都取自中性视频。

情绪源来自对话语料中的讽刺 utterance。导读到此结束，图中左右对照的含义需要结合像素仔细辨认。

> **看图路径：** 1. 先看左侧语音空间与表情空间两个方框内的橙色差向量箭头；2. 再看右侧五行四列人脸在橙框嘴角处的张开程度差异；3. 对照左下标注为中性的波形与标注为讽刺的人脸小图

[![原论文 Figure 1：Comparison between our method and baseline ap- proaches.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/57760501231e/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/57760501231e/figure-1.png)

*论文图 1。原论文 Figure 1：“Comparison between our method and baseline ap- proaches.”。*

这张图的可读点在于第一行自家方法在橙框标记的嘴角处张开更明显。而标签方法、已有音频方法与图像方法在同一帧上表情更平。像素显示左侧用波形与人脸小图区分了标注为中性的语音和实际为讽刺的情绪源。

箭头把语音差向量经由 C-MET 指向表情差向量。读者复述时应抓住一句话：控制变量是身份与唇动。唯一变量是情绪源的模态与处理方式，评价看谁更接近讽刺语音传达的嘴角变化。

### 三条已有路线各自卡在哪里？

第一条是音频驱动的说话脸生成。早期工作关注保真、保身份与唇同步，后来出现 2 阶段方法先预测中间表示再重建。端到端的重建方法与解耦框架随后成为主流，解耦框架把姿态、唇动、表情分开表示。

本文直接依赖这类解耦框架。原文明确说采用 EDTalk 的解耦表情编码器与生成器分别作为视觉编码器与解码器。训练时在同一说话人内采样以隔离身份特有的表情差异。

这个选择决定了后续所有表情操作都在解耦后的表情嵌入上进行，而不是在像素上直接改。第二条是情绪编辑的 3 类条件。标签方法如 EAT 用轻量变换器加离散标签控制情绪，优点是可控但类别有限。

音频方法如 FLOAT 用语音同时做唇动与情绪源。原文指出当唇同步音频与情绪源不同时不能准确反映目标情绪，说明内容与情绪未解开。图像方法如 EAMM、StyleTalk、EDTalk 直接参考表情图像。

EDTalk 用解耦框架分离唇动、姿态与表情，但仍依赖高质量情绪视频。MoEE 试图用混合专家处理复杂情绪，但仍需大量带标签的复杂情绪数据。与上述路线相比，本文的差异不是换一个更大的生成器。

而是增加一个中间网络：学习从语音情绪语义向量到表情情绪语义向量的映射。原文把灵感归于语音侧的细粒度控制工作 Emoknob，将其扩展到视觉域与生成任务。这样做的好处是训练只用 MEAD 数据集。

却能借助大规模语音预训练模型带来的连续情绪表示去表达未见情绪。理解这点后，就不会把本文误读为又一个端到端说话脸模型。它本质是一个可插拔的情绪条件模块。

### 要学的是什么映射：从语音差到表情差

形式化地说，给定输入与目标的音频对与视频对，目标是学习跨语音与视觉空间的情绪语义向量之间的关联。情绪语义向量定义为两个不同情绪嵌入相减的结果。训练时同时有音频对与视频对，可以算出两侧的真值差向量。

推理时只有中性视频与目标情绪语音。模型根据语音差向量预测视觉差向量，再加回输入视觉嵌入并解码。举一个教学例子帮助理解，但例子中的数值仅为示意。

不代表论文报告的效果。假设中性语音嵌入指向原点附近，讽刺语音嵌入偏向某个方向，两者相减得到语音差向量。同样，中性表情嵌入与讽刺表情嵌入相减得到表情差向量。

模型要学的不是讽刺本身长什么样，而是语音偏移对应表情偏移的规律。学会后，遇到训练未见的浪漫或嫉妒语音，只要语音编码器能给出合理的偏移方向，就能推出表情偏移。这个建模隐含两个假设。

第一，减法能去掉内容与身份的公共部分，留下情绪变化。论文通过在语音侧跨说话人与内容随机采样平均、在视频侧同一说话人内采样平均来逼近这个效果。第二，语音偏移与表情偏移之间存在可回归的对应。

论文用对比学习先对齐令牌空间，再用变换器回归具体向量。并用方向损失约束可逆性。后续方法节将沿一个样本走完这条链路。

### 全景：推理时情绪条件模块插在哪里？

推理管线可分为主干与情绪条件模块。主干负责把身份、语音内容、姿态送入视频生成器，情绪条件模块负责向生成器注入目标表情。不同方法的差别只在情绪条件模块的输入形态。

自家方法用中性语音加情绪语音经由 C-MET。标签方法用情绪词经由文本编码器，已有音频方法用单段情绪语音经由语音到情绪模块。图像方法用表情图像经由视觉编码器。

主干的身份、唇动、姿态输入在比较时保持固定。这样才能公平比较情绪编辑能力。下图展示了这种插拔关系，上半是主干，下半是 4 种条件模块的并列。读图时注意蓝色情绪条件模块是唯一的变量插槽。

自家分支是唯一使用两段语音的分支。下面这段是该管线图的导读，重点看主干与 4 个分支的输入差异。

> **看图路径：** 1. 先沿上半部分身份、语音、姿态三编码器到视频生成器的主路径看；2. 再看下半部分四种情绪条件模块的输入形态差异；3. 重点比较自家双语音输入与已有单情绪语音输入的区别

[![原论文 Figure 2：The comparison of emotion condition modules in the pipeline of emotion editing in talking face…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/57760501231e/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/57760501231e/figure-2.png)

*论文图 2。原论文 Figure 2：“The comparison of emotion condition modules in the pipeline of emotion editing in talking face video at inference.”。*

像素显示上半部分从左到右有身份编码器、语音编码器、姿态编码器汇入视频生成器，输出右侧人脸。下半部分 4 个小框分别标注双语音加 C-MET、情绪标签加文本编码器、单情绪语音加语音到情绪、表情图像加视觉编码器。

自家分支用黄色箭头强调双输入，虚线蓝框标出情绪源。这种图示对应原文的即插即用主张：把原来解耦框架中笨重的表情编码器替换为轻量变换器模块。既增强表达又降低推理时间。

再看训练与推理的总体计算图，它分为 3 个子过程。子图 a 负责用冻结的音频与视觉编码器提取输入与目标嵌入并相减得到语义向量。子图 b 负责用可学习的音频投影与视觉 1 维卷积做分词，并用双向对比损失对齐。

子图 c 负责用多模态变换器回归目标表情向量。加回输入视觉嵌入后送入冻结的视觉解码器重建目标视频。图例用火焰表示可训练参数，用雪花表示冻结参数。

下面这段是总体计算图的导读，需要沿着减法、对比、回归加解码的顺序观察。

> **看图路径：** 1. 先看子图 a 中音频与视频两侧做减法得到语义向量的位置；2. 再看子图 b 中对比损失连接音频令牌与视觉令牌的虚线；3. 最后沿子图 c 的变换器到加法再到解码器的路径走一遍

[![原论文 Figure 3：Overview of the proposed Cross-Modal Emotion Transfer (C-MET).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/57760501231e/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/57760501231e/figure-3.png)

*论文图 3。原论文 Figure 3：“Overview of the proposed Cross-Modal Emotion Transfer (C-MET).”。*

像素显示子图 a 上半两路语音经同一音频编码器后相减，得到目标语音语义向量。下半两路视频经同一视觉编码器后逐帧相减，得到目标视觉语义向量。子图 b 在编码器后各加一个分词器并用红色虚线连接对比损失。

子图 c 下方变换器接收参考视觉语义向量、目标语音语义向量与输入视觉嵌入。上方经视觉预测头输出预测向量并与真值向量算重建加方向损失，右侧经加法与解码器得到目标视频。记住这条主路径后，下一节逐个拆开组件的输入输出与维度处理。

### 编码器、分词器与变换器各自做什么？

先沿一个样本走完输入到输出。假设输入是 5 帧中性视频与一段中性语音，目标是同句的愤怒语音与愤怒视频。音频编码器采用 emotion2vec+large，对输入与目标语音各输出一个嵌入。

相减得到音频语义向量。视觉编码器采用 EDTalk 的解耦表情编码器，对输入与目标视频各输出逐帧嵌入，相减得到逐帧的视觉语义向量。注意音频侧最终是一个向量，视觉侧是 5 帧的序列。

这是后续分词要处理的不对称。分词器的作用是把变长、不同分布的嵌入变成同一维度的令牌。视觉分词器用 1 维卷积，音频分词器用投影层，输出维度都是 1024。

视觉令牌还要做相邻 5 帧的时间平均池化，音频令牌直接投影。原文用余弦相似度与温度系数构造双向对比损失，分别从视觉到音频与从音频到视觉计算，再取平均。这个损失只对齐令牌，不直接生成表情。

**情绪语义向量 × 解耦表情编码器：** 情绪语义向量分工是表示从输入情绪到目标情绪的变化方向，用目标嵌入减输入嵌入得到；解耦表情编码器分工是把视频帧中的唇动、姿态、身份与表情分开，只输出表情嵌入。两者搭配的理由是直接对绝对嵌入做回归会混入说话内容和身份，而对差向量回归只学变化，便于跨说话人平均与跨模态对齐，组合后语音差向量可以指导表情差向量的预测。

变换器的输入由 3 类令牌拼接而成：参考视觉语义向量加位置与类型嵌入，目标语音语义向量加类型嵌入，输入视觉嵌入加位置与类型嵌入。3 种可学习的类型嵌入用于区分来源，正弦位置编码用于区分帧序。

拼接后送入堆叠的变换器编码器层。取最后对应输入视觉的令牌经投影层预测目标视觉语义向量。预测向量加回输入视觉嵌入，得到预测的目标视觉嵌入，再送入冻结的视觉解码器。

推理时参考向量用零填充初始化，并以自回归方式把预测向量喂回。

**emotion2vec+large × 对比学习：** emotion2vec+large 分工是提供在大规模语音上自监督预训练的情感表示，作为音频侧冻结的特征来源；对比学习分工是把音频令牌和视觉令牌拉到同一隐空间，让同情绪的视听令牌相近、不同情绪远离。搭配原因是预训练音频空间与表情空间本来分布不一致，直接回归差距大，对比对齐先缩小模态间隙，再做向量回归更稳定。

需要强调冻结与可训练的边界。音频编码器、视觉编码器、视觉解码器冻结，只训练分词器、变换器编码器与视觉预测头。原文未报告这些冻结模块的梯度细节之外的优化器内部状态。

也未给出变换器层数与头数的完整配置。复现时应以官方代码为准，不从模型名称推定层数。

### 训练时如何构造差向量并计算三项损失？

训练数据的构造关键在采样平均。语音侧随机采样 10 段中性与 10 段情绪语音，不限制说话人与文本内容，对每对算差向量再平均，得到稳健的语音情绪表示。视频侧在同一说话人内随机采样 10 段中性与 10 段情绪视频。

不限制头部运动，同样平均差向量。原文称这种策略经验证可降噪并稳定学习。研究生应注意这里的平均对象是差向量，不是原始嵌入。目的是让内容与身份的随机变化在平均中抵消。

损失由三项组成。重建损失是预测与目标视觉语义向量之间的均方误差，考虑正反 2 个方向求和。对比损失是双向令牌对比的平均，系数为 0.1。方向损失鼓励正向与反向预测向量互为相反方向。

形式为余弦相似度加一，系数为 0.05。总损失是三者加权和。原文的消融显示只用重建损失是合理基线但不足以捕捉细粒度语义。加入对比损失提升跨模态对齐，再加入方向损失达到最好。

**多模态变换器编码器 × 方向损失：** 多模态变换器编码器分工是接收参考视觉语义向量、目标语音语义向量和输入视觉嵌入，建模模态内与模态间依赖并输出目标视觉语义向量；方向损失分工是约束正向向量与反向向量方向相反。搭配原因是仅用均方误差只能逼近数值大小，方向损失显式要求情绪变化可逆，从而让学到的差向量更符合语义向量的定义。

实现细节按原文交代：多模态令牌维度与隐维度均为 1024。参考与输入均用 5 帧，优化器为 AdamW，单卡 RTX 3090 24 GB，PyTorch 实现。音频 16 kHz 采样，梅尔谱窗长 800、跳长 200。

人脸裁剪并缩放到 256×256，遵循 EDTalk 预处理。原文未报告学习率、批量大小、训练轮数与温度系数的具体取值。这些是复现时的缺项，需要查代码补齐，不自行猜测。

### 在什么数据与协议下比较：测什么、和谁比、条件齐否？

训练用 MEAD 训练集，评测用 MEAD 测试集与 CREMA-D。MEAD 是目前最大的公开情绪说话视听数据集，CREMA-D 说话人多样，适合测泛化。定性还用了 HDTF 视频与模型生成的肖像图。

基本情绪评测用 MEAD 测试集中同一句话跨 8 种情绪的子集，聚焦从中性到情绪的变化。编辑时除情绪源外全部固定，用中性音视频做唇与姿态驱动。扩展情绪包括渴望、嫉妒、浪漫、讽刺、魅力、共情。

用 Gemini TTS 合成情绪语音做情绪源。无真值视频故用人评。

**中性视频驱动 × 情绪源语音：** 中性视频驱动分工是固定身份、唇动和姿态的基准，实验中用中性音视频作为唇形与姿态输入；情绪源语音分工是只提供要转到的情绪，不提供唇动。两者搭配的理由是把内容控制与情绪控制分离，才能检验模型是否真正把情绪从语音内容中解开，而不是靠换唇动音频蒙混过关。

基线覆盖 3 种情绪源：标签方法 EAT，图像方法 EAMM 与 EDTalk-A，音频方法 FLOAT。自家方法情绪源为音频。为公平，扩展情绪下非音频基线无法直接吃语音。

原文先用 emotion2vec+large 预测情绪标签再检索参考视频作为其情绪源，并说明此举为缩小域差距。指标方向需记牢：FID 越低越好，FVD 越低越好，SyncNet 置信度越高越好。情绪准确率越高越好，平均每视频推理时间越低越好。

情绪准确率用在各基准上微调的 Emotion-FAN 计算。下表整理训练与预处理的关键可运行配置，数字与单位保留原文写法。阅读该表时先明确比较问题是复现需要哪些固定配置。公平条件是同一预处理与同一冻结边界，指标方向不适用于此表。

| 配置项 | 取值 | 单位 | 说明 | 证据来源 |
| --- | --- | --- | --- | --- |
| 令牌维度与隐藏维度 | 1024 | 维 | 变换器多模态令牌维度与隐藏维度 | 原文实现细节 |
| 参考与输入帧数 | 5 | 帧 | 参考视觉语义向量与输入嵌入帧窗 | 原文实现细节 |
| 对比损失系数 | 0.1 | 加权系数 | 对比损失权重 | 原文实现细节 |
| 方向损失系数 | 0.05 | 加权系数 | 方向损失权重 | 原文实现细节 |
| 音频采样率 | 16 | kHz | 音频采样率 | 原文预处理 |
| 谱窗长与跳长 | 800, 200 | 采样点 | 梅尔谱窗长与跳长 | 原文预处理 |
| 人脸尺寸 | 256×256 | 像素 | 裁剪并缩放尺寸 | 原文预处理 |

表后需说明该表只解决可复现的配置子集。未报告学习率与批量大小等缺项，复现时必须以代码为准。表中 0.1 与 0.05 是加权系数而非准确率，1024 是维度而非帧数。16 kHz 是采样率，800 与 200 是谱计算参数。256×256 是空间尺寸，聚合对象各不相同，不能跨行比较大小。

### 主结果：情绪准确率最高，视觉质量的代价是什么？

主定量比较的问题是：在输入同为中性视频、仅情绪源模态不同的条件下，谁的情绪编辑更准，视觉属性退化多少。公平条件是唇与姿态驱动固定，指标方向如上节所述。结果显示自家方法在 MEAD 与 CREMA-D 上情绪准确率均为最高。

推理时间低于图像方法中较重的编码器分支。但在 FID、FVD 与同步置信度上略逊于 EDTalk。原文明确指出这是情绪强度与重建指标之间的内在权衡：更动态的表情带来更大的运动与像素偏差。

重建类指标会轻微变差。用户研究则在人类感知层面补充了表达、质量与同步三项偏好。下表转录原文主结果矩阵的全部数字，单位与精度保留原文。阅读时注意数值相同不代表同一指标，百分点与相对百分比含义不同。

比较问题是情绪准确率优先、其他感知属性尽量不退化。公平条件是同为中性视频输入、仅情绪源不同，指标方向为情绪准确率越高越好、FID 与 FVD 越低越好。

| 方法 | 情绪源 | MEAD AITV | MEAD FID | MEAD FVD | MEAD Syncconf | MEAD Accemo | CREMA-D AITV | CREMA-D FID | CREMA-D FVD | CREMA-D Syncconf | CREMA-D Accemo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EAMM | Images | 3.745 | 161.602 | 474.446 | 6.0609 | 18.81 | 6.481 | 206.168 | 628.344 | 4.1134 | 19.15 |
| EAT | Label | 12.575 | 90.974 | 330.722 | 8.0528 | 41.56 | 8.055 | 50.855 | 320.795 | 5.9862 | 39.97 |
| EDTalk | Images | 2.827 | 76.423 | 293.904 | 8.0529 | 41.99 | 1.590 | 42.376 | 288.162 | 6.3569 | 29.69 |
| FLOAT | Audio | 1.434 | 92.799 | 368.081 | 7.1632 | 13.21 | 0.846 | 52.933 | 365.770 | 4.9860 | 29.11 |
| C-MET | Audio | 2.643 | 90.804 | 329.862 | 7.9996 | 55.91 | 1.561 | 50.028 | 309.828 | 6.2887 | 43.47 |

表后解释主要收益与具体代价。自家方法在 MEAD 上的情绪准确率指标为 55.91%，次优 EDTalk 的情绪准确率指标为 41.99%，两者相差 13.92 个百分点。在 CREMA-D 上的情绪准确率指标为 43.47%，次优 EAT 的情绪准确率指标为 39.97%，两者相差 3.50 个百分点。

这支持跨数据集泛化的判断。但在 MEAD 的 FID 上 90.804 不如 EDTalk 的 76.423，FVD 指标 329.862 不如 293.904，同步指标 7.9996 略低于 8.0529。在 CREMA-D 上 FID 指标 50.028 不如 42.376，同步指标 6.2887 略低于 6.3569。

未胜出项必须正视：若任务首要目标是像素保真而非情绪强度，EDTalk 仍是更优选择。FLOAT 在两集上情绪准确率指标分别为 13.21% 与 29.11%，显著偏低，支持原文关于内容与情绪未解开的解释。EAT 在 MEAD 上的推理时间指标 12.575 明显偏高，提示标签扩散管线的成本。

**基本情绪 × 扩展情绪：** 基本情绪分工是训练集中已有的 8 类离散情绪，用于定量比较情绪分类准确率；扩展情绪分工是训练未见的复杂情绪如讽刺、魅力、渴望等，用于检验泛化。搭配原因是只测基本情绪看不出跨模态语义是否连续，只有扩展情绪能验证语音差向量是否把未见情绪映射到了合理的表情变化上。

定性层面，愤怒与讽刺两组最有教学价值。愤怒组看皱眉与眉间收缩是否动态出现，讽刺组看是否有单侧微笑等不对称细节。原文报告自家方法在讽刺上嘴角张开更明显，基线多退回中性或用轻蔑代替。

连续情绪编辑通过每 5 帧切换语音语义向量实现平滑过渡。下面这段是愤怒与讽刺定性图的导读，重点看放大框标记的眉间与嘴部动作。

> **看图路径：** 1. 先看左侧愤怒组眉间与嘴部的放大框随帧的变化；2. 再看右侧讽刺组在无真值视频时表情是否仍有不对称变化；3. 比较上下不同行之间皱眉与闭眼等动作的强度差异

[![原论文 Figure 4：Qualitative results for angry (left) and sarcastic (right), respectively.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/57760501231e/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/57760501231e/figure-4.png)

*论文图 4。原论文 Figure 4：“Qualitative results for angry (left) and sarcastic (right), respectively.”。*

像素显示左侧愤怒组按第 10、20、30 帧排列并附放大框。眉间红圈与嘴部红框标记皱眉与张嘴程度，上下行对比可看出自家方法皱眉更深。右侧讽刺组按第 0、10、20 帧排列，不同行在嘴角不对称性上有差异。

解释时只能说可见行之间的动作强度不同。不能把单帧差异推广为全程最优，也不能从截图读出精确的分类分数。用户研究进一步报告在基本与扩展情绪上，自家方法在表达、质量、同步三项均获更高偏好。但自动指标不能替代人评，两者应分别讨论。

### 拿掉对比与方向损失会发生什么：消融如何读？

消融要回答训练三项中每一项是否必要。实验在 MEAD 上固定其他条件，仅改变损失组合，以情绪准确率为主要观察。原文报告只用重建损失是合理基线，加入对比损失后提升跨模态对齐。

再加入方向损失达到最好。定性图显示仅重建时表情较平，对比加入后面部动作更准，方向加入后细节更贴合目标。具体数字按原文转述为情绪准确率指标 49.43% 到情绪准确率指标 53.46% 再到情绪准确率指标 55.91% 的递增。

从 49.43% 到 53.46% 相差 4.03 个百分点，从 53.46% 到 55.91% 相差 2.45 个百分点。这支持两项附加损失均有正向贡献的判断。但需注意这是在 MEAD 基本情绪上的结果。

不能直接推广到扩展情绪或 CREMA-D。原文还提到对音频编码器选择的附加消融在补充材料中，正文未给出完整数字。此处只能指出缺项，不猜测哪种编码器最优。

另一组泛化实验把 C-MET 接入不同解耦网络。在 PD-FGC 主干上，情绪准确率指标为 33.36%，接入后情绪准确率指标为 36.82%，共提升 3.46 个百分点。平均每视频推理时间指标为 1.247（AITV），接入后平均每视频推理时间指标为 1.180（AITV），时间有所下降。

在 EDTalk 主干上，情绪准确率指标为 41.99%，接入后情绪准确率指标为 55.91%，共提升 13.92 个百分点。平均每视频推理时间指标为 2.827（AITV），接入后平均每视频推理时间指标为 2.643（AITV），时间同样下降。这支持即插即用与轻量化的主张。

效率来自用轻量变换器替代笨重编码器。但同样要说明代价：提升幅度在不同主干上不一致，PD-FGC 提升较小。说明主干本身的解耦质量仍是上限，C-MET 不能无条件弥补主干缺陷。

### 哪些结论还不能下：边界与未测项

首先，重建类指标的轻微退化是已报告的代价，不能宣称所有质量维度全面最优。其次，扩展情绪没有真值视频，定量只能靠人评，自动的情绪分类器在未见情绪上是否可靠原文未验证。

因此不能把基本情绪上的准确率数字直接外推为扩展情绪的准确率。第三，用户研究显示偏好更高，但偏好不等于误判率、延迟或成本的测量，原文未报告误判率与逐帧延迟分布，不能承诺这些量得到改善。

第四，训练资源只报告单卡型号与部分超参数，未报告总时长、显存峰值与推理帧率，训练成本与部署成本应分别讨论。第五，冻结参数的设定意味着语音与视觉主干的质量决定上限。

若未来出现更强的解耦网络，C-MET 需要重新适配。原文的随着主干进步而继承改进的说法是可能而非已验证。第六，采样平均策略在语音侧跨说话人、在视频侧同说话人。

这种不对称是经验选择，其对口音、语言与极端头动的鲁棒性未系统评测。相关性不等于因果：对比损失与准确率提升同时出现，支持对齐有帮助，但不能证明没有其他混杂因素。

缺失证据不是技术错误。读者在复述时应对未测量项使用可能与待验证的措辞，对已报告项使用报告与显示的措辞。

### 要复现先做什么：代码、权重与检查点

复现的第一步是确认资源状态。本次收到的资源状态显示代码与演示链接当前可用，状态码均为 200，地址为项目主页。按原文说法代码、检查点与演示均在该主页提供。

复现时应以该页面实际列出的版本为准。区分代码开源、权重下载与系统可运行三件事：有代码不等于有权重，能跑演示不等于能一键训练。第二步是还原数据与预处理。

训练只用 MEAD 训练集，评测用 MEAD 测试集与 CREMA-D。基本情绪用同句跨八情绪子集，扩展情绪用合成语音。预处理需严格对齐人脸裁剪缩放、音频采样与谱参数，否则差向量的分布会偏移。

第三步是冻结与训练边界：冻结 emotion2vec+large、EDTalk 表情编码器与解码器，只训练分词器、变换器与预测头，令牌维度 1024，帧窗 5，损失系数 0.1 与 0.05。缺失的学习率、批量、轮数与温度需从代码读取。

第四步是公平比较的检查清单：输入中性视频是否同一份，唇动音频是否固定为中性，情绪源是否为目标情绪语音或按原文方式检索的参考，指标计算是否用各自微调的分类器与同一同步模型，推理时间是否按每视频平均。任何一项不一致都会让准确率与 FID 的比较失效。

建议先复跑基本情绪的主表，再做损失消融。最后才试扩展情绪的人评，避免把主观偏好当成早期调试信号。

### 何时值得尝试这种差向量思路？

当你的任务满足 3 个条件时值得尝试：已有可靠的解耦表情空间可用，情绪语音容易获取或可用 TTS 合成，而表情图像难采集或类别覆盖不足。此时学习语音差到表情差的映射，比收集大量配对视听数据更经济。

且天然支持未见情绪的连续表达。反之，若首要目标是像素保真或同步分数，且情绪类别固定可枚举，标签或图像方法可能更直接。对语音与音乐背景的研究生而言，关键启发是把情绪看作方向而非位置。

位置受内容与身份污染严重，方向经减法与平均后更干净，也更容易跨模态对齐。对比学习负责把两个空间的方向摆到同一坐标系，重建损失负责把数值推准，方向损失负责保证可逆性。

三者缺一会导致对齐、精度或一致性上的短板。收束时回到可核对的事实：方法只在 MEAD 上训练，用冻结的大规模语音表示与解耦表情编码器，在 MEAD 与 CREMA-D 上取得最高的报告情绪准确率。

代价是重建类指标略低于最保真的基线。并以更轻的模块降低推理时间。扩展情绪的证据来自合成语音与人评，支持泛化但待更多验证。

复述时保留冻结、可训练、采样、损失系数与评测固定条件。读者即可独立判断该方法是否适合自己的管线。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d6a6d53c214a/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d6a6d53c214a/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Choi_Cross-Modal_Emotion_Transfer_for_Emotion_Editing_in_Talking_Face_Video_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d6a6d53c214a/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d6a6d53c214a/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Choi_Cross-Modal_Emotion_Transfer_for_Emotion_Editing_in_Talking_Face_Video_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 3，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d6a6d53c214a/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d6a6d53c214a/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Choi_Cross-Modal_Emotion_Transfer_for_Emotion_Editing_in_Talking_Face_Video_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 4，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d6a6d53c214a/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d6a6d53c214a/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Choi_Cross-Modal_Emotion_Transfer_for_Emotion_Editing_in_Talking_Face_Video_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 5，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d6a6d53c214a/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d6a6d53c214a/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Choi_Cross-Modal_Emotion_Transfer_for_Emotion_Editing_in_Talking_Face_Video_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 6，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d6a6d53c214a/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d6a6d53c214a/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Choi_Cross-Modal_Emotion_Transfer_for_Emotion_Editing_in_Talking_Face_Video_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 7，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d6a6d53c214a/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d6a6d53c214a/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Choi_Cross-Modal_Emotion_Transfer_for_Emotion_Editing_in_Talking_Face_Video_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 8，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d6a6d53c214a/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d6a6d53c214a/figure-8.png)

区域 8 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Choi_Cross-Modal_Emotion_Transfer_for_Emotion_Editing_in_Talking_Face_Video_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 9，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d6a6d53c214a/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/d6a6d53c214a/figure-9.png)

区域 9 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Choi_Cross-Modal_Emotion_Transfer_for_Emotion_Editing_in_Talking_Face_Video_CVPR_2026_paper.pdf#page=5)

另有 11 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Choi_Cross-Modal_Emotion_Transfer_for_Emotion_Editing_in_Talking_Face_Video_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
