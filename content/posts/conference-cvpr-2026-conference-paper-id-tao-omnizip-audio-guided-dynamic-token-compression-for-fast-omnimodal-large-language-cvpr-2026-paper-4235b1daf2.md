---
title: "OmniZip: Audio-Guided Dynamic Token Compression for Fast Omnimodal Large Language Models"
date: 2026-09-13
draft: false
description: "针对全模态大模型音频加视频序列过长问题，OmniZip 用免训练的音频引导加交错时空压缩做推理时剪枝，最强证据是在 Qwen2.5-Omni 上保持接近满词元精度的同时实现 2.51-3.42×预填充加速与约 10G 显存下降，代价是剪枝率需按任务平衡且依赖音频编码器注意力。"
tags: ["模型剪枝", "高效推理", "音视频", "音视频理解"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Tao_OmniZip_Audio-Guided_Dynamic_Token_Compression_for_Fast_Omnimodal_Large_Language_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Tao_OmniZip_Audio-Guided_Dynamic_Token_Compression_for_Fast_Omnimodal_Large_Language_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Tao_OmniZip_Audio-Guided_Dynamic_Token_Compression_for_Fast_Omnimodal_Large_Language_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "42bf4d852d652320a6446b97d090c1bef383197e46060e007438c201e7016e42"
paper_digest_api_reader_plan_sha256: "e261ab9d279eebb02157d0c3b97821aeb7c3ba12a5423fd2684bb9c267600369"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d6a3cb63e05c351ea79f17f747c44a356c4f5fbf163ab4f5f22b7df4413c2e8d"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "d5ec5c23b36c44010d69e9ffcfd09c502c83137f43d6eb03dedeabe3df7d60ac"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "5317a9bc84adf464e8022aba8b5672bbed001a228e549814ef2389b38f2c15c0"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "73b129e5d2bfb31a5e6eba9a414377383acd2af9af9a4078ca5188776b2bf70d"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.pruning","label":"模型剪枝"},{"facet":"research_focus","id":"research_focus.efficiency","label":"高效推理"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.av-understanding","label":"音视频理解"}]
paper_digest_primary_task: "音视频理解"
paper_digest_primary_method: "模型剪枝"
paper_digest_score: 8.0
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 听音再剪视频：OmniZip 用音频保留率动态分配视频剪枝

> 英文题目：*OmniZip: Audio-Guided Dynamic Token Compression for Fast Omnimodal Large Language Models*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Tao_OmniZip_Audio-Guided_Dynamic_Token_Compression_for_Fast_Omnimodal_Large_Language_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Tao_OmniZip_Audio-Guided_Dynamic_Token_Compression_for_Fast_Omnimodal_Large_Language_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Tao_OmniZip_Audio-Guided_Dynamic_Token_Compression_for_Fast_Omnimodal_Large_Language_CVPR_2026_paper.pdf)

标签：#模型剪枝 #高效推理 #音视频 #音视频理解

评分：**8.0/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：方法研究

## 👥 作者与机构

- Keda Tao：机构信息未能从会议 PDF 纯文本可靠映射
- Kele Shao：机构信息未能从会议 PDF 纯文本可靠映射
- Bohan Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Weiqiang Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jian Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Huan Wang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

全模态大语言模型以固定时长窗切分同步音频与视频流并拼接成长序列输入大语言模型完成音视频问答，万级令牌的二次注意力导致预填充延迟与显存恶化，且音频主导注意力使单模态剪枝破坏跨窗时序对齐。OmniZip为训练无关的推理时压缩器，在投影后、语言模型前按窗操作，先利用音频编码器末层自注意力筛选显著音频令牌并输出每窗音频保留率。接着以该保留率作为信息密度先验动态分配各窗视频剪枝预算，并通过跨模态相似度合并音频锚点邻域令牌以保持语义对齐。最后将分配结果送入交错空时压缩模块完成视频令牌精简，形成音频筛选至视频分配再至空时压缩的方法链。与依赖语言模型内部注意力或视觉编码器注意力的单模态剪枝不同，该链路完全避免物化语言模型注意力矩阵并兼容闪注意力，因而可直接部署于现有推理栈并避免内存溢出。在WorldSense基准下，OmniZip的准确率为45.9，高于DyCoke的准确率45.0。该结论的适用边界尚未验证于无声视频、长时跨窗推理与非Qwen系架构，存在受限的外推范围。在A6000硬件上保留45%令牌时预填充延迟从291ms降至116ms、显存从35G降至28G，推理开销显著降低。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/KD-TAO/OmniZip> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，哪些信息不能丢？

这篇论文研究的输入是一段同时带有画面与声音的视频，加上人写的文本提问。输出是由全模态大语言模型生成的文本回答，需要同时利用看到的动作与听到的事件来讲清答案。举例来说，提问可以是画面中的人在说话时正在做什么，模型既要看喝咖啡的动作朝向，也要听语音内容。论文把这类输入称为全模态大语言模型的音视频理解任务，与只看画面的视频问答不同，声音不是可选项。

必须保留的信息包括 3 类。第一是时间对齐关系，即哪一段声音与哪几帧画面属于同一时刻。第二是事件密度差异，即哪些时间段信息密集、可能是事件边界，哪些时间段相对稀疏。第三是跨模态互补线索，即声音能提示画面中不易判断的动作，画面能锚定声音的来源。输出时模型要生成连贯回答，同时推理过程要能处理很长的音视频词元序列。

论文报告一个视频会产生 10 到 20k 量级的词元，这直接带来注意力 2 次复杂度和显存压力。因此任务目标不是单纯提高问答分数，而是在尽量不损失精度的前提下，大幅减少送入大语言模型的音视频词元数量，并降低首词元前的预填充时间与显存占用。理解这一点很关键，后续所有压缩动作都要在保留对齐与密度结构的前提下进行，不能把声音与画面拆开各自随机丢弃。

### 已有路线做了什么，为什么还缺音视频联合压缩？

在相关路线上，论文梳理了两条线。第一条是全模态大语言模型本身，例如 Qwen2.5-Omni 这类能同时感知多种模态的端到端模型，以及面向音视频多轮对话与理解的系列工作。它们让回答更贴近真实场景，但也引入了视频词元与音频词元叠加后的超长序列问题。第二条是词元压缩，已有工作分别在图像、视频、音频上做过尝试。常见做法是先定一个重要性度量，再做剪枝或合并，例如利用某一层的注意力矩阵评估词元相关性。

这类方法多为免微调的后处理，可以在推理时直接使用。论文指出，已有单模态压缩没有解决联合压缩的需求。音频与视频具有不同时间尺度与稀疏性，既有冗余又有互补，剪枝对两者都很敏感。更重要的是实现层面的兼容性问题。许多主流方法依赖取出大语言模型内部或视觉编码器内部的完整注意力矩阵，这与加速推理常用的闪速注意力思路冲突。

需要物化大矩阵时，在超长视觉序列下容易出现显存溢出。论文明确报告 FastV 在 7B 模型上因需要显式计算注意力矩阵而出现显存溢出，无法在单张显存较小的卡上运行。音频编码器相对轻量，而视觉编码器多为基于视觉变换器的结构，取其注意力同样可能溢出。因此论文把设计约束定为不取大语言模型内部注意力、不取视觉编码器注意力，只用音频编码器末层的注意力，并保持多轮对话能力与推理框架兼容。

### 瓶颈在哪里，观察到了什么可利用的结构？

瓶颈来自拼接方式与序列长度。论文说明，全模态模型的音视频词元按固定时长的时间窗组织。音频与视频流先被切成多个等时长窗口，每个窗口内同时刻的多模态词元对齐拼接成一个交叉模态块，再按时间顺序把多个块连成送入大语言模型的长序列。在这种组织下，词元数量随帧数与音频时长快速膨胀，注意力计算与键值缓存开销随之上升。

为了决定如何压缩，论文先做了词元注意力分布分析。第一个观察是大多数词元获得的注意力较低，且对音视频词元的注意力随层数加深而下降，说明谨慎剪枝有可能保留推理能力。第二个观察是注意力热图上出现与音频词元位置对齐的规律性竖亮带，表明音频词元在各层持续获得比视频词元更高的注意力，而大片视频词元注意力较低，冗余更大。

第 3 个观察是局部块结构，即同一时间窗内音视频互注意力最强，跨窗迅速衰减，说明短程时序依赖占主导。基于这三点，论文得出设计结论。压缩应以时间窗为粒度逐窗进行，而不是全局排序一刀切。应由音频侧的显著性来推断每个窗的信息密度与事件边界可能性，再动态分配该窗视频的剪枝强度。同时音频剪枝应比视频更保守，以守住对齐线索。这个从观察到粒度的推导是后续 3 阶段流程的依据。

### OmniZip 的三步全景如何走完一个样本？

OmniZip 是一个免训练的推理时压缩器，放在编码器与大语言模型之间。沿一个样本走一遍有助于建立整体感。输入仍是视频帧片段与音频片段，分别经过视觉编码器与音频编码器得到词元嵌入，再经过投影器映射到大语言模型的嵌入空间。此时每个时间窗内含有若干音频词元与视频词元。OmniZip 按窗分 3 步重组这些词元，然后再与文本词元一起送入大语言模型生成回答。

第一步是音频词元选择，利用音频编码器末层注意力算出每个音频词元被其他音频词元平均关注的程度，保留得分最高的代表性部分。第二步是音频锚点巩固，从非显著音频中均匀采样锚点，再用跨模态相似度挑出与视频最相关的若干词元合并进锚点。第 3 步是音频引导的视频动态压缩，把每窗音频保留率映射为信息密度，先得到初始视频剪枝率，再按全局预算归一化，最后对视频执行交错时空压缩。以下示意图展示完整路径与总体效果，可先看主路径再看两类对比。

> **看图路径：** 1. 先沿左侧从视频帧和音频波形经双编码器到大模型的箭头确认主路径；2. 再看中间雷达图上三条包络线的相对位置与图例数值差异；3. 最后看右侧平均分柱显存柱与预填充折线的升降方向

[![原论文 Figure 1：(a): We introduce OmniZip, an audio-video token compression method tailored for efficient OmniLLMs.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ac8b1fb1941f/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ac8b1fb1941f/figure-1.png)

*论文图 1。原论文 Figure 1：“(a): We introduce OmniZip, an audio-video token compression method tailored for efficient OmniLLMs.”。*

左图底部是胶片帧与声音波形，中间是视觉编码器与音频编码器，上方是压缩前后的词元带，最上方是大语言模型与示例回答。压缩后的词元带明显变短，但保留了文本、视频、音频 3 类色块的交替结构。中图雷达图显示 OmniZip 在多个领域上的包络处于最外层。右图同时给出平均分柱、显存柱与预填充时间折线，OmniZip 在分数接近基线的同时显存与时间明显下降。论文用该图传达核心判断，即听音指导剪视频可以在几乎不掉点的情况下换来显著加速。需要注意，这里的加速是在特定显卡与满词元基线下测得的挂钟时间对比，复现时应固定硬件与帧数上限再比较。

### 音频选择与锚点合并具体做了哪些计算？

第一步的输入是音频编码器对音频词元的查询与键矩阵。方法对其计算注意力矩阵，再对每个音频词元求它被所有其他音频词元关注的均值，得到每个词元的显著性分数。因为后续模型可能对音频词元做平均池化，方法对该分数向量做同样的池化以保持索引对齐。最后按压缩比保留分数最高的音频特征作为代表性信息密集词元，其余作为非显著。这里只用音频编码器注意力，不碰大语言模型内部注意力，因此与闪速注意力兼容。

第二步处理非显著音频。直接丢弃会损失语义覆盖与多模态一致性，因此方法为每个时间窗从非显著音频中均匀采样锚点，再计算归一化音频与视频序列之间的跨模态相似度矩阵。对每个锚点选出与配对视频段最相关的若干音频词元合并进去，合并数记为 G，其余非显著词元丢弃。论文在实现细节中给出 G 在不同评测上取不同值，说明对声音依赖更强的任务需要保留更多音频细节。该步输出数量减少但覆盖仍连续的音频集合，同时为第 3 步提供每窗保留率。

**音频保留率 × 视频剪枝率：** 音频保留率是每个时间窗内被保留的显著音频词元占比，用作信息密度与事件边界的代理信号；视频剪枝率是同一时间窗内要删减的视频词元比例。二者搭配的理由是音频在注意力中占主导且与视频按窗对齐，因此用前者动态决定后者：保留高的窗少剪视频、保留低的窗多剪视频，组合后在总预算不变下实现跨窗差异化压缩。

**音频锚点 × 跨模态相似度：** 音频锚点是从非显著音频词元中均匀采样的承载点，负责维持上下文覆盖；跨模态相似度是归一化音频与视频词元点积，用于挑选与视频最相关的次要音频词元。搭配原因是直接丢弃非显著音频会损失多模态一致性，因此用相似度把相关者合并进锚点，组合意义是在压缩音频的同时保留与画面对齐的语义。

下面这段导读先帮你定位细节图的三列结构，再对照右上与右下的数字与剪刀标记理解动态分配，值得逐块停留阅读。

> **看图路径：** 1. 先沿左侧从胶片与波形到编码器再到时间组的箭头确认主路径；2. 再看右上不同时间组的保留率与剪枝率数字如何反向变化；3. 最后看右下视频压缩四步中帧间与帧内操作的交替顺序

[![原论文 Figure 3：Detailed overview of our OmniZip method.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ac8b1fb1941f/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ac8b1fb1941f/figure-3.png)

*论文图 3。原论文 Figure 3：“Detailed overview of our OmniZip method.”。*

细节图右侧把 3 步的输入输出画得很细。右上部分显示每个时间组先算出音频保留率，再映射为视频压缩率，示例中保留率高的组对应较低的视频剪枝率，保留率低的组对应较高的视频剪枝率。右下部分显示视频压缩内部的 4 个子操作按帧间与帧内交替排列。左半部分强调压缩前后时间组结构保持不变，只是每组内词元变稀疏。阅读时应注意音频压缩比、每组音频保留率与视频压缩率是 3 组不同量，不要混为同一压缩率。

### 视频的交错时空压缩如何避免压偏一维？

第 3 步先解决分配问题。设总视频剪枝率为目标预算，方法在过滤音频后把分数映射回时间窗，得到每窗音频保留率。保留率高的窗被视为信息密集或可能是事件边界，对应视频应保守剪枝；保留率低的窗则激进剪枝。初始比率通过上下限做线性映射，上限与下限用来防止过度剪枝，论文取 0.75 与 0.35。

随后对初始比率做算法归一化，使最终各窗比率严格满足全局剪枝预算。总体上音频剪枝更保守，视频剪枝随时间自适应。

得到每窗预算后，视频压缩以 4 帧为最小处理单元交错执行。先算相邻帧同位置词元的余弦相似度，用它估计时间冗余，对第 2 帧与第 4 帧中相似度高的词元做压缩。再对第 1 帧与第 3 帧用基于密度的聚类剪枝处理空间冗余。具体是对每个视频词元算局部密度与其到更高密度最近邻的距离，两者乘积作为密度分数，保留显著者、丢弃空间冗余者。交错的意义在于轮换降低时间与空间冗余，避免沿单一维度过度删减。

**帧间合并 × 帧内剪枝：** 帧间合并负责处理相邻帧同位置词元的时间冗余，用余弦相似度判断后合并第 2 与第 4 帧的高相似词元；帧内剪枝负责处理单帧内部的空间冗余，用密度峰值聚类选出显著词元。搭配理由是只压时间或只压空间都会在某 1 维过度删减，交错执行可以在 4 帧为单元内轮换降冗余，组合后避免单维度坍缩。

**时间窗 × 注意力局部性：** 时间窗是把音频与视频流按等时长切分后拼接成交叉模态块的组织单位；注意力局部性指音频与视频词元主要在同一窗内互注意力、跨窗迅速衰减的观察。搭配原因是压缩若跨全序列全局选点会打乱时序对齐，因此以窗为单位独立执行选择与合并，组合意义是保留短程时序依赖与音画对应关系。

实现上视频剪枝在每个时间窗内独立进行，保持了前文注意力局部性所要求的粒度。论文还强调剪枝步骤耗时小于 40 毫秒，属于轻量操作，不会拖慢推理。该时间是方法自身开销，不是端到端延迟，复现时应分别计时压缩耗时与模型预填充耗时，避免把两者混为一谈。

### 没有训练阶段时，真正的计算发生在哪里？

这篇论文没有神经网络训练阶段，也就没有参数更新、梯度路径、损失函数与优化器配置。需要明确说明未训练的对象包括视觉编码器、音频编码器、投影器与大语言模型主干，它们全部冻结并直接调用已有开源模型。真正的计算发生在推理时的压缩与推理两段。第一段是音频编码器前向得到注意力矩阵并求均值排序，属于 1 次前向加轻量统计。

第二段是归一化、跨模态相似度矩阵计算、每窗保留率映射与归一化，以及视频侧余弦相似度与密度聚类计算。这些都是确定性数值运算加排序选择，没有学习。第三段是压缩后的长序列送入大语言模型做标准自回归推理，同样不更新权重。论文未报告梯度是否截断，因为根本不涉及反向传播；也未报告数据标注或仿真过程，因为方法不需要构造训练样本。

容易误解的是把免训练等同于输出确定。实际上大语言模型解码仍可受采样策略影响，压缩只是改变输入词元集合，不能保证每次输出逐字相同。另一个误解是从冻结参数推定系统无随机性。均匀采样锚点与聚类近邻的具体实现仍可能引入顺序或并行层面的非确定性，复现时应固定随机种子并记录解码参数。论文把兼容性作为设计目标，明确不取大语言模型内部注意力矩阵，因此可以在开启闪速注意力的推理框架下运行。

### 在什么数据、模型与预算下比较才算公平？

实验围绕音视频联合理解组织，测的是压缩后精度能否守住以及速度与显存是否下降。数据侧用了 4 个已建立的音视频理解评测。音频为主的评测关注事件定位、物体匹配、文字匹配、信息抽取、内容计数与人物匹配 6 类任务。通用视频评测与短视频评测分别覆盖较长与较短的真实视频，跨领域评测则覆盖科技、文化、日常、影视、游戏、体育、音乐等 8 个域。论文对视频输入做了帧数上限，通用长视频评测上限较高，其他数据集上限较低。

每个时间窗内音频与视频词元数固定，这是理解压缩比的基础。模型侧在 Qwen2.5-Omni 的 7B 与 3B 两个参数规模上实现，所有实验均开启闪速注意力以降低显存。比较对象是 3 类实际可运行策略。随机剪枝作为对照，FastV 作为利用某层注意力评估相关性的代表，DyCoke 的第一阶段时间合并模块同时作用于音频与视频作为视频侧动态压缩代表。论文说明由于尚无专为全模态设计的词元剪枝方法，只能从单模态方法适配比较。

公平条件用总体浮点预算比来对齐剪枝强度，而不是只对齐保留词元比例，因为音频与视频词元的计算权重与结构不同。指标方向是精度越高越好，浮点数、显存、预填充时间越低越好。硬件预算明确为单张显卡，7B 的失败项因显存溢出而在更大显存卡上补测，阅读结果时需注意该项的硬件不一致。超参数包括剪枝上下限、近邻数与每锚点合并数，论文给出了跨评测的取值差异，复现时应按评测分别设置而非全局同一值。

### 主结果在精度、速度与显存上各换来了什么？

主结果要回答 3 个问题。与谁比，条件是否一致，关键数字支持什么判断。比较在满词元基线与上述压缩方法之间进行，总体预算对齐，指标同时看精度与开销。论文报告 OmniZip 在最少词元下保持最优精度，即使计算量减少约 60%，平均精度仍接近满词元水平。随机剪枝带来明显退化，FastV 因音视频注意力分布不均与时间窗被打乱而效果不佳，DyCoke 虽保留时间窗结构但只压时间维而忽略空间冗余，在全模态下次优。跨领域评测上 OmniZip 在较低保留率下仍超过其他方法在较高保留率下的表现。

速度与显存方面，论文在跨领域评测上做了详细计时。7B 模型上总体推理加速约 1.4 倍，预填充加速可达 3 倍以上，3B 模型上预填充加速同样显著。显存下降约 10G，同时精度保持在约 97% 水平。数据集特性影响加速幅度，短视频评测序列较短而通用视频评测序列较长，后者加速更明显。下图把不同基准下的预填充时间对比画成柱状，可先确认基线柱再看压缩柱的下降幅度。

> **看图路径：** 1. 先确认横轴三个基准与纵轴预填充时间毫秒单位；2. 再比较每个基准下基线柱与蓝色压缩柱的高度差；3. 最后观察随序列变长右侧标注加速倍数如何增大

[![原论文 Figure 6：Achieving superior inference speedup.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ac8b1fb1941f/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ac8b1fb1941f/figure-6.png)

*论文图 6。原论文 Figure 6：“Achieving superior inference speedup.”。*

左中两组分别对应短视频与音频为主评测，右侧对应长视频评测。基线柱最高，蓝色压缩柱最低，中间两种对照介于其间。长视频上对照因显存溢出缺失，对应位置标注溢出。红色标注给出相对基线的加速倍数，随序列变长从约 2.7 倍增大到约 3.8 倍。这支持论文判断，即序列越长，压缩带来的预填充收益越明显。

但总体趋势不等于每组视频都同等加速，文本未给出逐样本延迟分布。下表把论文明确报告的效率数字整理成可核对的形式，阅读时注意加速口径分为挂钟推理、总体推理、预填充与相对基线 4 种，不要混用。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 单张 48G 卡跨领域评测 | 挂钟推理加速与显存下降 | 满词元基线 | 2.51-3.42×加速，1.4×显存下降 | 其他高精度方法 |
| 7B 跨领域评测 | 总体与预填充加速 | 满词元基线 | 1.42×总体加速，3.42×预填充加速 | 满词元基线 |
| 3B 跨领域评测 | 预填充加速 | 满词元基线 | 3.27×加速 | 满词元基线 |
| 相对基线多基准 | 预填充加速区间 | 基线 | 2.7–3.8×加速 | 基线 |
| 7B 跨领域评测 | 显存占用下降 | 满词元基线 | 下降 10G 显存 | 满词元基线 |

表后需要同时讲收益与代价。收益是精度接近满词元而速度与显存明显改善，且在两种参数规模上一致。代价一是 FastV 的对比在 7B 上硬件不一致，因其在小显存卡上溢出而换卡补测，跨方法比较时应标注该差异。代价二是加速主要来自预填充阶段，解码阶段收益相对较小。未胜出项方面，随机剪枝在所有表中均明显落后，说明音视频联合任务对剪枝敏感，不能用均匀随机代替。

### 拿掉动态分配与锚点合并会发生什么，剪枝率如何取舍？

消融围绕两个核心组件与两个剪枝率展开。第一个问题是动态视频剪枝与音频锚点巩固是否必要。论文报告去掉视频动态分配会显著降低精度，再去掉音频锚点巩固会进一步退化。这支持设计判断，即按窗分配预算与保留跨模态相关音频都有独立贡献。第二个问题是音频与视频剪枝率如何平衡。

论文在 7B 模型与跨领域评测上分别扫描音频压缩比与视频压缩比。结论是任一模态过度剪枝都会明显损害性能，适度平衡两者效果最好，且音频剪枝率应低于视频剪枝率。

第 3 个问题是压缩比变化时的鲁棒性。论文比较不同平均压缩比下本方法与随机剪枝及视频动态压缩的曲线，本方法下降更平缓，在各剪枝率下均领先。以下动态分配可视化显示了预算如何在时间组之间流动，阅读时可对照左右两图的起伏方向进行核对。

> **看图路径：** 1. 先看左图音频保留值随时间组序号的起伏范围；2. 再看右图视频剪枝比在同一序号附近是否反向起伏；3. 最后确认两图横轴均为时间组序号且总预算不变

[![原论文 Figure 5：Visualization of dynamic pruning ratios.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ac8b1fb1941f/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ac8b1fb1941f/figure-5.png)

*论文图 5。原论文 Figure 5：“Visualization of dynamic pruning ratios.”。*

左图为每组音频保留值，取值大多在较高区间，个别组明显偏低。右图为对应组的视频合并或剪枝比，低保留组对应较高剪枝比，高保留组对应较低剪枝比。两图横轴均为时间组序号，总剪枝率保持不变。这直观验证了保留低则多剪视频、保留高则少剪视频的规则。但这只是单样本可视化，不能当作所有视频的分布证明。下表整理论文明确给出的窗口粒度与超参数，便于复现时先对齐配置再调剪枝率。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 每个时间窗 | 音视频词元数 | 未压缩 | 50 音频词元，288 视频词元 | 时间窗结构 |
| 全局上下限 | 视频剪枝率区间 | 未压缩 | 0.75 上限，0.35 下限 | 全局预算 |
| 锚点合并数 | 每锚点合并词元 | 未压缩 | 音频评测 15，其他评测 3 | 不同评测 |
| 保留档位 | 音视频压缩比组合 | 未压缩 | 0.3 加 0.6 与 0.4 加 0.7 两档 | 不同保留率 |
| 近邻数 | 聚类近邻 | 未压缩 | 5 | 密度计算 |

表后补充反证与边界。视频侧用交错时空压缩优于直接套用视频动态压缩，全局选点的视觉压缩策略在全模态下次优，因其独立挑选音视频焦点而破坏语义对齐与时序结构，且取视觉注意力易溢出。论文还提示剪枝率可按任务对音频或视频的依赖动态调整，例如声音依赖强的任务应保留更多音频。这意味着表中两档组合不是万能最优，复现时应先在目标评测上小范围扫描。

### 哪些结论有边界，什么还没有被测量？

论文直接报告的是在给定模型、给定帧上限、给定硬件上的精度、浮点预算、显存与预填充时间对比。这些数字支持在相近条件下尝试音频引导压缩，但不支持无条件推广。第一个边界是硬件与配置依赖。加速是挂钟时间对比，随显卡型号、序列长度、帧上限与是否开启闪速注意力而变化。FastV 在 7B 上的缺失值正说明不同方法对显存的敏感度不同，换卡补测后的方法间比较需谨慎解读。

第二个边界是任务依赖。音频为主评测与通用评测的最优合并数不同，剪枝率平衡也需按任务调整，总体趋势不等于每组任务都成立。第 3 个边界是未测量项。论文未报告误判率分解、逐步骤延迟、输出帧率与多轮对话下的长期稳定性，也未报告压缩对幻觉或细粒度计数的具体影响机制。因此不能承诺这些量同步改善。缺失证据不是技术错误，但阅读时应使用支持与可能等分级表达。

例如可以说实验支持动态分配有助于守住精度，但尚待验证其在更长视频或更小模型上的稳定性。相关性也不等于因果，音频保留率与事件边界的相关只是代理信号，论文将其作为密度先验使用，并未证明保留率本身检测事件边界。最后，总体精度接近满词元不等于每类任务都接近，跨领域表格中不同域仍有波动，部署前应按目标域单独验证。

### 要复现应先固定什么，再跑哪组对照？

复现的第一步是固定信息条件与代码可用性。论文声明代码当前可用，给出的仓库链接在本次核验中状态可用，可以按仓库说明搭建环境。需要区分的是代码开源不等于权重可直接下载与系统可一键运行，复现前应确认模型权重获取方式、依赖版本与单卡显存是否满足 7B 或 3B 的运行需求。建议先跑 3B 以降低显存压力，再跑 7B 验证加速随规模放大的趋势。

第二步是固定实验条件。按论文设置视频帧上限，长视频评测与短视频评测取不同上限，每个时间窗按 50 音频词元与 288 视频词元理解输入规模。开启闪速注意力，保持解码参数一致，固定随机种子。超参数先按论文取值设置剪枝上下限为 0.75 与 0.35，近邻数为 5，合并数按评测分别取 15 与 3，再按保留档位设置两组音视频压缩比组合。

第 3 步是跑最小可核对闭环。先跑满词元基线记录平均分、显存与预填充时间，再跑随机剪枝作为下界对照，再跑本方法。此时应分别记录压缩自身耗时与模型推理耗时，避免把 40 毫秒量级的压缩开销与端到端延迟混淆。第四步是补验证。若目标任务更依赖声音，应小范围扫描音频压缩比。

若更依赖画面，应扫描视频压缩比，并观察跨领域各域分数而非只看平均分。还需补的验证包括长视频下的稳定性、多轮对话下的表现，以及不同显卡上的加速比。

### 何时值得尝试，一句话如何复述方法？

当输入同时包含声音与画面、序列过长导致预填充慢或显存紧张，且任务需要保留音画对齐时，值得尝试 OmniZip 这类先听后剪的思路。它的可复述做法是按等时长窗组织音视频词元，用音频编码器注意力选出显著音频并算出每窗保留率，保留率高的窗少剪视频、保留率低的窗多剪视频，同时用跨模态相似度把相关音频合并进均匀采样的锚点，最后对视频交错执行帧间相似合并与帧内密度剪枝，全程不训练、不取大语言模型内部注意力。

需要记住的适用条件有 3 条。第一，音频剪枝要比视频保守，过度压任一模态都会掉点。第二，超参数与剪枝率需按评测调整，不能跨任务照搬。第三，效率收益主要来自预填充阶段且随序列变长更明显，短视频上的体感加速会小于长视频。常见误解是把全局选点或纯视觉剪枝直接搬到全模态，这会破坏时间窗结构与跨模态对齐，论文的对照显示其精度与稳定性均不如按窗动态分配。

另一个误解是把免训练当作无需验证，实际上仍需在目标数据上核对精度、显存与延迟三者。总之，这篇工作的价值在于给出了一条与闪速注意力兼容、开销轻量、可直接在推理时部署的音视频联合压缩路径，复现时守住时间窗粒度与动态预算两处细节，就能抓住方法的主干。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c7d5b8538939/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c7d5b8538939/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Tao_OmniZip_Audio-Guided_Dynamic_Token_Compression_for_Fast_Omnimodal_Large_Language_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c7d5b8538939/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c7d5b8538939/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Tao_OmniZip_Audio-Guided_Dynamic_Token_Compression_for_Fast_Omnimodal_Large_Language_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c7d5b8538939/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c7d5b8538939/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Tao_OmniZip_Audio-Guided_Dynamic_Token_Compression_for_Fast_Omnimodal_Large_Language_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c7d5b8538939/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c7d5b8538939/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Tao_OmniZip_Audio-Guided_Dynamic_Token_Compression_for_Fast_Omnimodal_Large_Language_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 5，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c7d5b8538939/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c7d5b8538939/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Tao_OmniZip_Audio-Guided_Dynamic_Token_Compression_for_Fast_Omnimodal_Large_Language_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 6，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c7d5b8538939/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c7d5b8538939/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Tao_OmniZip_Audio-Guided_Dynamic_Token_Compression_for_Fast_Omnimodal_Large_Language_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 7，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c7d5b8538939/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c7d5b8538939/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Tao_OmniZip_Audio-Guided_Dynamic_Token_Compression_for_Fast_Omnimodal_Large_Language_CVPR_2026_paper.pdf#page=5)

另有 15 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Tao_OmniZip_Audio-Guided_Dynamic_Token_Compression_for_Fast_Omnimodal_Large_Language_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
