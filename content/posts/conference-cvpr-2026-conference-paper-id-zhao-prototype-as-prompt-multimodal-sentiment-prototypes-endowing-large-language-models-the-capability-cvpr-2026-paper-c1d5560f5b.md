---
title: "Prototype-as-Prompt: Multimodal Sentiment Prototypes Endowing Large Language Models the Capability to Perform Multimodal Sentiment Analysis"
date: 2026-09-13
draft: false
description: "针对可学习查询缺乏显式情感语义的问题，论文用固定数量的多模态情感原型作软提示并冻结大模型主干，在四个数据集和三种大模型上取得可复述的精度提升，而可训练参数仅占极小比例。"
tags: ["提示学习", "大语言模型", "音视频", "语音情感识别"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Zhao_Prototype-as-Prompt_Multimodal_Sentiment_Prototypes_Endowing_Large_Language_Models_the_Capability_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Zhao_Prototype-as-Prompt_Multimodal_Sentiment_Prototypes_Endowing_Large_Language_Models_the_Capability_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_Prototype-as-Prompt_Multimodal_Sentiment_Prototypes_Endowing_Large_Language_Models_the_Capability_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "92f040d205d1f6581fc4b48d17231f219204a4170a996284eab36bef52938ce8"
paper_digest_api_reader_plan_sha256: "321b6019e81ea0a9bbec745ec2e5a4d1849e0ef813e17bc8f94027850a279f22"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "7a1a9c9d7dae978346e3990eba46cf5f6ff235900b63c4178fa6b7e70828076c"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "c3fa2e30d2ae4b0a12ecb208b6328bee39c87923fdb1d4440ece5cd9459cf10c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "f867ba83b71be9d3bcabde5fec9e7aec5ce5ae6480f9fdea9048079e35cb0dc2"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "c90bfc27ddaf1ae0a702e797c9c79f5585b7d87a17ffb86829cfcb9a6efe2a28"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.prompt-learning","label":"提示学习"},{"facet":"model_family","id":"model_family.llm","label":"大语言模型"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"}]
paper_digest_primary_task: "语音情感识别"
paper_digest_primary_method: "提示学习"
paper_digest_score: 6.0
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 把可学习的查询换成有情感含义的原型：冻结大模型做多模态情感分析

> 英文题目：*Prototype-as-Prompt: Multimodal Sentiment Prototypes Endowing Large Language Models the Capability to Perform Multimodal Sentiment Analysis*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Zhao_Prototype-as-Prompt_Multimodal_Sentiment_Prototypes_Endowing_Large_Language_Models_the_Capability_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhao_Prototype-as-Prompt_Multimodal_Sentiment_Prototypes_Endowing_Large_Language_Models_the_Capability_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_Prototype-as-Prompt_Multimodal_Sentiment_Prototypes_Endowing_Large_Language_Models_the_Capability_CVPR_2026_paper.pdf)

标签：#提示学习 #大语言模型 #音视频 #语音情感识别

评分：**6.0/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.6/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.2/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Xianbing Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Lan Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Hengyang Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Buzhou Tang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

多模态情感分析以文本、视觉与音频序列为输入，输出情感极性或强度分数，难点在于视听序列冗长冗余且与文本存在异构鸿沟，难以直接对齐注入大语言模型。该文提出原型即提示，先为视觉和音频各维护固定数K的可学习情感原型，并与文本特征拼接做自注意力，得到文本条件化原型以压缩话语相关线索。接着以该条件化原型为查询对原始视听特征做交叉注意力重采样，将非文本证据注入对应原型槽位，并与文本特征共同构成软提示送入冻结主干做下一词预测。然后以情感分类交叉熵绑定每个原型槽位到明确情感语义，以K阶中心矩差异对齐视听原型分布，并以距离加权正交维持同模态原型多样性。与投影式和查询即提示式不同，该机制为每个提示位显式绑定情感类别并强制跨模态一致与类内可分，因而更可解释且参数高效。在MOSEI基准下，PaP(L)的Acc-2为87.17，高于PaP(Q)的Acc-2 86.00。该结论在MOSEI、SIMS-V2、MELD与CHERMA语料上验证，其适用边界受限于完整三模态影评与对话场景，尚未验证缺失模态、强噪声与开放域外推。训练与评估的硬件为32GB显存V100 GPU，批量大小为16并经30轮暖机与早停控制，其推理开销随原型数与主干规模增长。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要解决的情感判断难在哪里？

本文的输入是同时包含文本、声音和画面的视频片段，目标是判断说话人的情感极性或情感类别。输出在英文情感强度数据集上是连续分数与离散类别，在中文情感与对话情感数据集上是类别标签。必须保留的关键信息是：文本通常携带最直接的语义，音频的韵律与视觉的表情姿态提供补充线索，但三者在时长、采样率和噪声水平上并不对齐。

对于刚进入语音与音频方向的研究生，一个可操作的理解是：先把一个样本走通。假设一条影评视频包含字幕文本、一串音频帧和一串人脸帧，模型需要先把三者变成等维的特征序列，再把它们融合成一个判断。难点在于，如果把全部音频帧和视频帧直接拼给大语言模型，序列很长且冗余很多；如果用少量可学习向量去压缩，又不知道每个向量到底代表积极还是消极。

论文要解决的正是第二个难点。已有做法把非文本信息压缩成若干可学习标记再送入大模型，但这些标记的训练是隐式的，没有明确规定哪个标记对应哪种情感。本文提出把压缩目标固定为一组有情感含义的原型，让每个原型对应一个情感等级，再把原型作为提示交给冻结的大模型。这样做的好处是压缩过程受到显式监督，复述时可以检查每个原型是否学到了应有的情感分布。本文不声称代码或数据已公开，资源状态为未发现可用绑定，因此复现讨论只依据正文描述的流程与超参数。

### 已有的三类大模型情感分析路线有何不同？

按输入、目标和运行阶段划分，与本文同任务的工作可分为传统多模态融合与基于大模型的 3 类做法。传统做法设计复杂的跨模态交互网络或在几何空间中设计对齐损失，目标是让不同模态的表示更一致。它们不依赖大语言模型，训练与推理都在自有编码器内完成。

基于大模型的做法在正文图 1 中被归纳为 3 类。第一类是投影式：把视觉和音频特征经投影层映射到大模型的嵌入空间，再微调适配器保持语言能力，代价是需要送入全长模态序列。第二类是查询式：用独立的重采样器把模态特征压缩成少量可学习标记，参数量随模态数量增长。第 3 类是查询即提示：用文本条件的重采样器把非文本特征变成文本引导的隐表示，降低跨模态交互复杂度，但提示本身仍缺乏显式情感语义，且常需额外适配器。

本文属于第四类，即原型即提示。它与第 3 类的区别在于压缩目标不是任意的可学习查询，而是数量固定、类别明确的情感原型。白话说，软提示是指一段连续的、不对应真实词的向量上下文，模型会像读提示词一样读它；适配器微调是指冻结主干、只更新插入的小模块。本文用原型充当软提示，目标是用更少的可训练参数获得可解释的压缩。

**软提示 × 适配器微调：** 适配器微调负责在保持大模型主干冻结的同时更新插入的前馈或注意力旁路；软提示负责提供连续的、可学习的上下文向量来引导冻结模型的推理，二者搭配的原因是论文希望以极少可训练参数引入多模态信息，组合后原型作为软提示替代了全长序列投影和大量适配器。

### 为什么可学习查询需要被替换成原型？

问题可以表述为：在冻结大语言模型主干的前提下，如何把变长的音频序列和视觉序列压缩成定长的、情感语义明确的提示，使模型能完成情感判断。输入是文本序列、视觉特征序列和音频特征序列，输出是情感分数或类别。约束是只允许更新原型构建与原型学习相关的少量参数，大模型参数保持冻结。

可学习查询的不足在于分工不明。查询向量在训练开始时是随机的，训练目标主要是最终的情感预测损失，模型可以把任意信息塞进任意查询，复述者无法断言第一个查询代表积极、第二个查询代表消极。教学例子是：这好比让学生做笔记但不规定每页记什么，最后虽然能答题，却说不清笔记结构。

原型的改进是事先规定槽位含义。在英文强度数据集上，原型数量对应强负、负、弱负、中性、弱正、正、强正 7 类；在对话情感数据集上，对应怒、厌恶、恐惧、高兴、中性、悲伤、惊讶等 7 类。每个原型在训练中都收到对应类别的分类监督，因此复述时可以检查音频原型与视觉原型的概率分布是否落在正确类别上。这种固定槽位加显式监督的设计，是后文 3 个约束能够施加的前提。

### 原型即提示的整体数据流是怎样的？

整体流程沿一个样本可以走通。底部是 3 路输入：文本经过大模型的嵌入层得到文本嵌入，音频经过特征提取得到音频特征序列，视觉经过特征提取得到视频特征序列。中部是文本条件的原型构建：初始的音频原型与视觉原型先与文本嵌入交互，得到受文本约束的原型。左侧进一步用多头交叉注意力，以受约束原型为查询读取原始视听特征，得到最终的音频原型表示与视觉原型表示。顶部把最终原型与文本特征一起送入冻结的大模型变换层，输出情感强度或类别。

下图把本文与 3 类已有路线的结构差异并置，绿色表示可训练，灰色表示冻结，虚线框表示大模型范围，是理解参数效率与信息路径的关键对照。

> **看图路径：** 1. 先看四个子图从上到下的输入箭头，确认视觉、音频、文本分别进入哪里；2. 再对比绿色可训练块与灰色冻结块在四个方案中的位置差异；3. 重点看子图 d 中情感原型提示如何同时接收文本与视听输入；4. 注意子图 d 右上角预测表情与其他子图的差异所暗示的结论

[![原论文 Figure 1：Four distinct approaches empower LLMs with mul- timodal sentiment analysis capabilities: (a)…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1457ad3bf144/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1457ad3bf144/figure-1.png)

*论文图 1。原论文 Figure 1：“Four distinct approaches empower LLMs with mul- timodal sentiment analysis capabilities: (a) Projection-based method: Non-textual modalities are projected into the semantic space…”。*

从图中可以读出，投影式需要为每个模态保留投影与适配器，查询式需要维护查询模块与适配器，查询即提示仍保留可学习的任意查询，而本文把可学习部分收敛为文本条件的原型学习模块。右侧任务提示例如要求在负 3 到正 3 之间预测情感强度，说明最终的大模型调用是带任务说明的生成式预测，而非在外部加分类头。这种先压缩再提示的安排，理由是减少送入大模型的序列长度，同时让压缩结果带有可检查的情感含义。

### 文本条件的原型如何构建与读取视听细节？

第一个组件是文本条件的多模态原型构建。白话说，重采样是指用少量查询向量通过注意力从长序列中挑出重要信息，形成短序列。输入符号包括文本特征、视觉特征、音频特征，以及初始的视觉情感原型与音频情感原型。操作是把文本特征与两组原型在序列维度拼接，再做自注意力，使原型能够感知文本语境。输出是受文本约束的视觉原型与音频原型。

第二个组件是多模态情感原型学习中的读取步骤。它以受约束原型为查询，以原始视听特征为键和值，做跨模态注意力，生成新的伪标记。音频路与视觉路各有一套查询、键、值参数，分别生成最终的音频原型与视觉原型。这样做的理由是：只与文本交互的原型尚未真正看到声学与视觉细节，必须再回读原始特征才能携带非文本证据。

下图展示了左右对称的两路实现与自上而下的 3 类约束位置，是复述方法时最应对照的结构图。

> **看图路径：** 1. 先沿右侧从下往上追踪文本模态与任务提示进入嵌入层再到原型构建的路径；2. 再看左侧音频与视觉两路各自经过特征提取与多头交叉注意力的对称结构；3. 确认三种损失在左侧顶部分别作用于哪一组原型表示；4. 观察最终进入上层大模型的序列由哪几类标记拼接而成

[![原论文 Figure 2：Schematic illustration of the proposed PaP framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1457ad3bf144/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1457ad3bf144/figure-2.png)

*论文图 2。原论文 Figure 2：“Schematic illustration of the proposed PaP framework.”。*

从像素可见，右侧底部有两个输入框，分别是文本内容与任务提示，向上经过嵌入层后分为文本嵌入与初始原型两路；左侧底部是波形与视频帧，向上经过特征提取与交叉注意力；中上部是原型学习，顶部是冻结的大模型变换层。复述时应先说清每条箭头的起点与终点，再说每个模块的可训练与冻结状态，不要把嵌入层与变换层混为一层。

**文本条件原型构建 × 多模态情感原型学习：** 文本条件原型构建负责把文本表示和初始情感原型拼接后做自注意力，得到受文本约束的视觉和音频原型；多模态情感原型学习负责用这些受约束原型去交叉注意力读取原始视听特征并绑定情感类别监督，二者搭配的原因是先对齐到文本语义空间再回填非文本细节，组合后形成可直接送入大模型的原型提示。

**情感感知原型学习 × 交叉注意力重采样：** 交叉注意力重采样负责以原型为查询、以视听特征为键和值生成新的伪标记，弥合模态间隙；情感感知原型学习负责把生成的原型经全连接和分类器对应到具体情感类别并用交叉熵监督，二者搭配的原因是无约束的重采样容易学到无意义的压缩，组合后每个原型获得明确的情感分工。

### 三个约束如何让原型又对齐又分开？

在得到最终原型后，论文施加 3 个约束。第一个是情感感知原型学习：把视觉原型与音频原型分别经全连接加非线性激活，再经分类器预测情感类别分布，用交叉熵与离散真值比较。它的作用是给每个原型槽位明确的类别监督，避免所有原型学到相同的混合语义。

第二个是跨模态原型对齐。白话说，中心矩差异是指比较两个分布的均值与各阶中心矩，差异越小说明分布越一致。论文用该度量比较视觉原型分布与音频原型分布，目标是让同一情感在声音和画面中落在相近的语义位置。第 3 个是距离加权的原型多样性：计算同一模态内原型间的余弦相似矩阵，只在相似为正时惩罚偏离单位矩阵的程度，并按原型间距离加权，避免对语义相近的原型过度惩罚。它的作用是让弱正、正、强正这类相邻情感保持可区分。

三者的分工是：第一个管每个原型像不像该像的情感，第二个管声音与画面说的是不是同一种情感，第 3 个管同模态内不同情感不要混在一起。缺少任何一个，都可能出现原型无意义、对齐错位或原型坍缩，消融部分将用数据验证这一点。

### 训练时更新哪些参数，总目标如何加权？

训练时冻结的是大语言模型主干，包括嵌入层之后的主变换层，可训练的是原型构建中的自注意力参数、跨模态注意力参数、全连接分类参数以及原型向量本身。正文明确大模型参数保持冻结，只有原型相关模块的参数可训练，这是参数效率声明的前提。梯度路径来自四项损失的加权和：任务的下一个词预测损失、语义的原型分类损失、模态间的对齐损失、模态内的多样性损失。

超参数按验证集选择，权重分别设为 1、0.1、0.1、0.05 与 0.05 对应原文列出的 5 个值中的后四项加首项，批量大小为 16，先进行 30 轮热身，若验证集平均绝对误差连续 10 轮无改善则早停。优化器类型与学习率在所给证据中未报告，这是复现时的缺项，不应从模型名称推定。监督来源包括最终情感标记用于生成损失，以及离散情感类别用于原型分类损失；对齐与多样性损失是无额外标注的正则项。

**跨模态原型对齐 × 模态内原型多样性：** 跨模态原型对齐负责用中心矩差异约束让视觉原型分布与音频原型分布在情感语义空间一致；模态内原型多样性负责用距离加权的正交约束让同一模态内不同情感原型彼此分开，二者搭配的原因是只对齐会导致原型坍缩到一起、只分开会导致模态间语义错位，组合后实现模态间一致而模态内可分。

需要指出，未报告学习率与优化器意味着无法完整复现训练曲线，只能复现流程结构。早停以平均绝对误差为监控指标，说明训练更关注强度误差而非单纯分类正确率，这与主结果同时报告准确率、F1、平均绝对误差和相关系数的安排是一致的。

### 在哪些数据与模型条件下比较，结果如何聚合？

实验覆盖 4 个数据集。英文影评数据集包含 22856 个视频片段，情感分数从负 3 到正 3，按 16326 训练、1871 验证、4659 测试划分。中文情感数据集包含 4403 个视频片段，分数从负 1 到正 1，按 2722 训练、647 验证、1034 测试划分。对话情感数据集包含 1400 多段对话、13708 条话语，中文戏剧情感数据集包含 28717 个片段，来源包括电视剧、综艺与电影，两者都使用 7 类情感标签。

大模型主干采用 ChatGLM3-6B、Llama-2-7B 与 Qwen-1.5B，非文本特征提取与前人工作保持一致。所有实验用 5 个随机种子重复并报告均值，运行于 32 GB 显存的图形处理器。指标方面，英文强度数据集用七分类准确率、二分类准确率、平均绝对误差、皮尔逊相关与 F1；中文强度数据集增加弱样本准确率，考察强度在负 0.4 到 0.4 区间内的表现；对话情感数据集用七分类准确率与加权 F1。平均绝对误差越小越好，其余准确率与相关系数越大越好。

比较条件上，基线包括传统融合方法与基于大模型的方法，其中与本文运行阶段最接近的是同样冻结主干、用文本过滤非文本特征作提示的方法。保留该可运行基线是判断原型是否带来增益的关键，不应只与传统小模型比较。

### 主结果在四个数据集上显示了什么增益与代价？

要回答的核心问题是：在相同冻结主干与相同特征提取条件下，把提示换成情感原型是否稳定提升。公平条件是基线与本文都使用大模型且特征来源一致，指标方向按上节所述判断。下表整理英文强度数据集上的关键数字，列数满足宽表要求，数值保留原文写法。

| 数据集与条件 | 指标 | 传统基线 | 强可运行基线 | 本方法 |
| --- | --- | --- | --- | --- |
| 英文强度数据集 | 二分类准确率 | 78.50 | 86.91 | 87.17 |
| 英文强度数据集 | F1 分数 | 78.96 | 86.77 | 86.91 |
| 英文强度数据集 | 七分类准确率 | 51.60 | 54.56 | 56.24 |
| 英文强度数据集 | 平均绝对误差 | 0.573 | 0.515 | 0.493 |
| 英文强度数据集 | 相关系数 | 0.714 | 0.783 | 0.796 |

上表提出的问题是原型提示是否在强基线之上继续提升，公平条件是同数据集与同类大模型提示范式，指标方向为准确率越高越好、误差越小越好。表后解释是：本方法在二分类与七分类准确率上报告为最高，平均绝对误差报告为最低，支持原型携带显式情感语义的判断。代价是仍需训练原型模块，且七分类绝对值仍在 56 左右，说明细粒度强度区分依然困难。未胜出项是部分配置下七分类准确率并非全部第一，例如另一主干配置报告为 54.82，需要按主干分别看待，不能把最好的一组推广到所有主干。

下表进一步给出中文强度与对话情感数据集的对照，同样保留五列以便核对条件与指标。

| 数据集与条件 | 指标 | 传统基线 | 可运行基线 | 本方法 |
| --- | --- | --- | --- | --- |
| 中文强度数据集 | 二分类准确率 | 76.51 | 83.77 | 84.75 |
| 中文强度数据集 | F1 分数 | 76.31 | 83.76 | 84.80 |
| 中文强度数据集 | 弱样本准确率 | 66.27 | 75.24 | 76.18 |
| 对话情感数据集 | 七分类准确率 | 60.77 | 66.23 | 67.47 |
| 对话情感数据集 | 加权 F1 | 57.74 | 65.13 | 65.97 |

该表要验证的是跨语言与跨任务的稳定性，条件是不同数据集但同为冻结主干加提示的范式。表后解释是：中文强度数据集上本方法在 3 个主干中均报告优于对应基线，对话情感数据集上同样报告最高，支持方法的通用性。限制是中文强度数据集上某一主干的本方法结果明显偏低，说明主干选择影响显著；此外对话情感的绝对准确率（%）仍在 60 多，离实用仍有差距，不能只看相对提升。

**原型提示 × 下一个词预测：** 原型提示负责把学到的视觉原型、音频原型与文本特征一起作为输入上下文；下一个词预测负责让冻结的大模型在该上下文条件下生成情感极性或强度标记，二者搭配的原因是原型携带了压缩后的非文本情感证据，组合后大模型无需更新主干即可完成多模态情感判断。

以下像素展示了两个具体样本的原型概率分布，是把数字与机制联系起来的关键证据。

> **看图路径：** 1. 先对比上下两个样本的真实标签与预测值，确认一个为弱正、一个为负；2. 再看每个样本内音频原型分布与视觉原型分布的最高柱是否落在同一情感类；3. 观察非目标类的概率高度是否明显低于目标类；4. 注意音频波形与视频帧只是上下文，判断依据是下方柱状分布

[![原论文 Figure 3：Visualization of sentiment prototype distributions for audio and visual modalities on CMU-MOSEI…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1457ad3bf144/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1457ad3bf144/figure-3.png)

*论文图 3。原论文 Figure 3：“Visualization of sentiment prototype distributions for audio and visual modalities on CMU-MOSEI dataset.”。*

从像素可见，上排样本真实为正 1.33、预测为正 1.29，音频与视觉原型都在弱正柱最高，中性次高；下排样本真实为负 2.00、预测为负 1.70，音频与视觉原型都在负类最高。解释是：原型分布的峰值与真实标签一致，且音频与视觉两路分布形状相近，支持对齐约束有效；不同原型柱高度差异明显，支持多样性约束使原型可分。但这只是两个样本的可视化，不能代替全量统计显著性。

### 拿掉每个约束后性能下降多少，说明了什么？

消融要回答的是 3 个约束是否各自必要。操作是分别去掉情感感知学习、跨模态对齐、距离加权多样性，其余流程不变，在同一数据集与同一主干下比较。指标仍用准确率与 F1，方向为越高越好。下表整理中文戏剧数据集上的消融数字，保留原文的小数精度。

| 模型变体 | 数据集 | 准确率 | F1 分数 | 对照 |
| --- | --- | --- | --- | --- |
| 完整方法 | 中文戏剧集 | 75.33 | 75.28 | 基准 |
| 另一主干完整 | 中文戏剧集 | 73.93 | 73.87 | 跨主干对照 |

表前问题是每个约束的边际贡献有多大，公平条件是同数据、同主干、仅去掉一项。表后解释是：去掉情感监督与跨模态对齐下降最多，支持显式语义绑定与分布一致是关键；去掉多样性下降较小但仍为负，支持原型间保持距离有帮助。反例是不同主干的绝对值不同，说明贡献大小依赖主干，不能把某一主干的差值当成普适常数。此外消融只报告了准确率类指标，未报告误差与相关系数，这是未评测的边界。
下图从表示层面补充了对齐与可分的证据，与数字消融形成互补。

> **看图路径：** 1. 先看左图红色与蓝色散点是否高度重叠，判断跨模态是否对齐；2. 再看右图蓝色、橙色系三组点是否形成各自的聚集区域；3. 对比左右两图得出对齐与可分的双重效果；4. 注意图例区分的是模态与情感极性，不要把颜色直接当成同一对象

[![原论文 Figure 4：Visualization of the intra-modal diversity and cross- modal alignment of sentiment prototypes…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1457ad3bf144/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/1457ad3bf144/figure-4.png)

*论文图 4。原论文 Figure 4：“Visualization of the intra-modal diversity and cross- modal alignment of sentiment prototypes across audio and visual modalities.”。*

从像素可见，左图正向视觉原型与正向音频原型散点高度交织、无清晰边界，报告为跨模态对齐的效果；右图正、中性、负 3 组视觉原型各自聚集且边界相对清晰，报告为多样性约束的效果。解释时需注意：左图比较的是跨模态同情感，右图比较的是同模态不同情感，两者不是同一比较，不能混为一谈。该可视化支持约束的设计目标，但未给出定量的分离度指标，属于有限解释而非严格证明。

### 哪些结论尚未被验证，复述时容易误读什么？

论文直接报告的是精度与误差指标上的提升，以及可训练参数占比极小。有限解释是原型分布可视化与 2 维投影显示了对齐与可分，但这些是定性观察，未报告误判率、延迟、推理吞吐或统计显著性检验，因此不能承诺推理更快或部署成本更低。训练资源只提到图形处理器型号与显存，推理开销与输出帧率未分别讨论，总体趋势不等于每组样本都成立。

常见误解有三。其一，把冻结参数等同于输出确定，实际上生成仍受采样与任务提示影响，冻结只说明主干不更新。其二，把原型数量直接当成情感类别数之外的超参数随意增减，实际上原型槽位与类别监督是一一绑定的，改变数量需要重设监督。其三，把个别最优主干的结果当成所有主干的结果，实际上不同主干的绝对值差异明显，复述时必须注明主干名称。

证据缺项方面，优化器、学习率、特征提取细节在所给证据中未完整交代，非文本特征仅说与前人一致而无具体维度与归一化说明。原文表头与算术未发现可核实的冲突，但部分超参数列出 5 个值对应 4 个损失权重的写法需要按原文核对，不应自行重新解释。没有像素的性能柱状图与参数比例图只能按图注引用，不能猜测具体柱高数值。

### 若要复现，应先准备什么并按什么顺序检查？

复现前先明确信息条件：当前无可用代码与模型绑定，不可写已公开，只能按正文流程自行实现。先准备 4 个数据集的官方划分与特征：英文强度按训练验证测试的样本数切分，中文强度注意弱样本区间的定义，对话情感注意 7 类标签的一致性。文本走大模型嵌入，视听特征按与前人一致的方式提取并统一到相同维度，原型数量按数据集的情感类别数设定。

实现顺序建议为：先实现文本条件拼接与自注意力，检查输出维度是否为文本长度加 2 倍原型数；再实现两路交叉注意力读取，检查音频原型与视觉原型是否分别只读对应模态；再接全连接分类与交叉熵，检查每个原型是否收到正确类别监督；最后加入中心矩对齐与距离加权多样性，检查损失是否随训练下降。训练时冻结大模型，只更新原型相关参数，批量大小设 16，热身 30 轮，以验证集平均绝对误差早停，权重按 1、0.1、0.1、0.05 量级设置并在验证集上微调。

先跑通单一种子与单个主干，再扩展到 5 个种子取均值。缺失学习率时，可从小学习率网格搜索并固定随机种子记录，避免把搜索最优当成可部署收益报告。复现成功的标志不仅是最终准确率接近，还应复现原型分布峰值落在正确类别且双模态分布相近，否则可能是原型监督未生效。

### 何时值得尝试原型即提示，还需补哪项验证？

当任务满足 3 个条件时值得尝试：输入包含文本主干加变长视听补充，大模型主干希望冻结以节省训练成本，且情感类别可以事先枚举为固定槽位。此时用原型替代任意查询，能以较少参数获得可检查的压缩。若模态缺失严重或类别无法枚举，原型的固定槽位假设不再成立，应谨慎采用。

还需补的验证包括：在同一特征与同一主干下报告多次运行的方差与显著性，补充推理延迟与显存占用，补充原型数量增减的敏感性分析，以及在噪声音频或遮挡人脸下的鲁棒性。教学上应记住的核心是：先用文本约束原型，再用原型读取视听，最后用三项约束让原型既对齐又分开，冻结的大模型只负责在原型加文本的上下文中生成判断。这一链条中的每一步都有对应的损失与可视化检查点，复述时沿样本走一遍，比背诵结构更可靠。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/aa53b632a5f3/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/aa53b632a5f3/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_Prototype-as-Prompt_Multimodal_Sentiment_Prototypes_Endowing_Large_Language_Models_the_Capability_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/aa53b632a5f3/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/aa53b632a5f3/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_Prototype-as-Prompt_Multimodal_Sentiment_Prototypes_Endowing_Large_Language_Models_the_Capability_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 3，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/aa53b632a5f3/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/aa53b632a5f3/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_Prototype-as-Prompt_Multimodal_Sentiment_Prototypes_Endowing_Large_Language_Models_the_Capability_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/aa53b632a5f3/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/aa53b632a5f3/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_Prototype-as-Prompt_Multimodal_Sentiment_Prototypes_Endowing_Large_Language_Models_the_Capability_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 5，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/aa53b632a5f3/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/aa53b632a5f3/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_Prototype-as-Prompt_Multimodal_Sentiment_Prototypes_Endowing_Large_Language_Models_the_Capability_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 6，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/aa53b632a5f3/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/aa53b632a5f3/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_Prototype-as-Prompt_Multimodal_Sentiment_Prototypes_Endowing_Large_Language_Models_the_Capability_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 7，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/aa53b632a5f3/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/aa53b632a5f3/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_Prototype-as-Prompt_Multimodal_Sentiment_Prototypes_Endowing_Large_Language_Models_the_Capability_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 8，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/aa53b632a5f3/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/aa53b632a5f3/figure-8.png)

区域 8 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_Prototype-as-Prompt_Multimodal_Sentiment_Prototypes_Endowing_Large_Language_Models_the_Capability_CVPR_2026_paper.pdf#page=4)

另有 14 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_Prototype-as-Prompt_Multimodal_Sentiment_Prototypes_Endowing_Large_Language_Models_the_Capability_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
