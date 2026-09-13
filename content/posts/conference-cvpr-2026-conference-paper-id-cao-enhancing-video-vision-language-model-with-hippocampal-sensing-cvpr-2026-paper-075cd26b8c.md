---
title: "Enhancing Video Vision Language Model with Hippocampal Sensing"
date: 2026-09-13
draft: false
description: "针对视频问答中被动看帧、忽视音频的问题，该工作用跨模态未来与过去摘要预测做监督微调，再用对比式强化学习约束双模态联合推理，在 16 帧与 64 帧条件下以 7B 与 8B 规模在四个音视频基准上达到与大闭源模型可比的水平，代价是两阶段推理延迟高于单阶段模型。"
tags: ["数据集", "强化学习", "音视频", "音视频问答"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "c93eeb93a53077e3ed942330f8f3f7970e8c2f82568239478494e0d1bd852c21"
paper_digest_api_reader_plan_sha256: "c33398d24099a009a239a893645d20381b1b33a1b678b81a918e1ed5b6c90e2c"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "96895e86a94696e4ddaaafe73fbfa98619b5009113282ed3978e48779f4e9414"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "47af8bb99d74073e6dd553e1cec30c020c8e817c57510b08c8e61074fb29f197"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "80739b1b066be9dd401bac04de0364ef6f42a942716568bef7c99158bf47e157"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "689955c06efdbac5e41478b2ac8ff3fdcc56003ea5348212055f41468a2ea4b5"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.av-question-answering","label":"音视频问答"}]
paper_digest_primary_task: "音视频问答"
paper_digest_primary_method: "强化学习"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 不暴力看全片：用跨模态预测逼模型补全听觉与视觉

> 英文题目：*Enhancing Video Vision Language Model with Hippocampal Sensing*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.pdf)

标签：#数据集 #强化学习 #音视频 #音视频问答

评分：**6.4/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Xu Cao：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该工作处理以视频流、音频流与自然语言问题为输入、输出多选答案的音视频问答任务，难点在于长叙事中视觉微表情与语音语调的细微协同或矛盾难以被单遍被动建模捕捉。先由感知阶段分别对相关音频与视频片段生成面向问题的跨模态浓缩摘要，并将摘要按时序切分为前后段以构造预测任务。接着通过跨模态时序预测联合指令微调，迫使模型用互补模态与时序上下文重构缺失模态摘要以内化世界模型。然后由推理阶段将摘要与原始视频联合输入大语言模型进行思维链推理作答，并用视频音频负感知优化对比强化学习对超越单模态捷径的正确联合推理显式奖励。与被动全量输入的视频视觉语言模型相比，其关键差异是用跨模态时序预测代替纯时序未来预测，实际意义在于显式抑制单模态捷径并奖励多模态联合推理。在Video-MME基准下，HippoVLM-7B的得分为62.5，高于Qwen2.5-VL-7B基线的得分53.1。该结论适用边界受限于含音频的四个视频问答基准，尚未验证纯视觉、强噪声音频或开放生成任务中的外推能力。单卡推理开销方面，HippoVLM-7B在16帧条件下的延迟为18.150秒，慢于基线但快于部分智能体式方法。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要保留哪些信息？

本文面向刚进入语音与音频方向的研究生，解读 1 篇视频问答论文的完整方法。输入是视频帧序列、音频流及其转录文本，以及一个自然语言问题，输出是对问题的选择或生成式回答。目标不是把所有帧和全部音频文本一次性塞进大模型，而是让模型主动判断需要什么信息，并把听觉与视觉证据联合起来推理。

解读必须保留的关键信息包括：模型如何分 2 阶段组织输入与输出，跨模态预测任务如何构造监督信号，强化学习奖励如何度量双模态协同，数据集如何生成与过滤，以及实验在多少帧、什么分辨率、什么基线条件下比较。资源状态是正文开源声明的唯一依据，本次未发现来源绑定且完成超文本传输安全协议状态验证的资源，因此不得声称代码、模型或数据已公开，只能按论文文字描述其构造为 10K 视频与 50K 思维链标注。

后续各节按学习依赖展开，先讲任务与相关路线，再讲方法全景与组件计算，然后讲数据构造与训练推理，最后讲实验条件、结果反证与复现要点。教学中举的例子会明确标为例子，不添加无来源的数值或效果断言。

### 视频大模型与海马启发路线各自解决了什么，还缺什么？

视频视觉语言模型方向已经在长视频压缩、音视频分支建模和时空感知上取得进展。论文提到压缩长视频以节省计算的方法，视频大语言模型系列通过增加音频分支和时序推理分支推进理解，以及用强化学习训练模型跟踪视频事件的做法。这些工作的共同局限是被动处理，即从头到尾看完全部视频再回答问题，不会像人一样聚焦关键时刻并结合听看到的内容。

另一条路线是超感知与预测性世界建模，主张从被动任务驱动转向主动预测感官输入、构建内部模型以组织和过滤信息，例如从 2 维像素推断 3 维物理、预测未来状态或回忆过去状态。海马在大脑中被描述为预测引擎，能从听觉线索生成视觉预期，桥接记忆与感觉系统，并通过模式补全在部分信息缺失时完成多模态整合。论文把这两条路线对照起来：前者提供视频问答的基座能力与评测基准，后者提供学习目标的思想来源。

本文的定位不是做下 1 帧视频预测，而是做跨模态时间预测，即用当前一模态加另一模态的未来或过去上下文，去预测缺失模态在错位时间段的摘要。这种对照说明为什么单纯增加帧数或上下文窗口不能解决社交 нюанс问题，因为缺的是显式的跨模态共现训练任务。

### 为什么只给模型更多帧和音频文本仍然不可靠？

论文指出的问题是静态感知范式。模型把视频展开成静态帧组成的胶片条，单遍推理，忽略时间连续性和跨模态信号，导致对长叙事、物体交互和社会动态理解不可靠。更具体的工程约束是：闭源大模型常作为智能体系统运行，除视频外还主动利用音频流和视频搜索引擎补充信息，而开源模型的上下文窗口难以同时处理大量音频数据与众多视频帧，尤其原始音频流常含大量与任务无关噪声。

举一个教学例子：例子中一个人视觉上微笑但语气愤怒，若模型只看帧会判为友好，只看转录会判为冲突，只有对齐表情、手势与语调才能判为讽刺或压抑的不满，这个例子只用于说明模态协同的必要性，不代表论文报告了该样本的数值提升。因此问题被形式化为两点：缺乏引导模型做音频与视频共现联合推理的预训练任务，以及缺乏在推理时主动选择信息的策略。

论文要验证的假设是，若训练时显式要求跨模态时间补全，并在后训练时奖励超越单模态捷径的联合推理，则小规模模型也能在需要双模态对齐的基准上获得竞争力。

### 两阶段推理如何把感知与推理分开？

整体框架建立在问答 2.5 视觉语言模型与问答 3 视觉语言模型家族之上，另加语音编码器处理音频。论文选择这两个基座的理由是其视频理解能力较强，视觉语言连接器沿用基座的多层感知机结构，音频特征从 Whisper 第三版线性投影到语言模型嵌入空间，使双模态映射到统一语义空间。推理时采用 2 阶段流水线。第一阶段为场景感知与摘要，大语言模型分别处理视觉与音频特征，抽取与主问题相关的简洁摘要。

第二阶段为推理，把信息密集摘要与原始视频流并发处理，指导模型聚焦核心推理成分而不被原始音频相关文本淹没。形式上第二阶段是自回归生成，答案序列的条件概率以原始视频流、主问题和第一阶段摘要为条件，逐词预测时依赖已生成的前缀。

下图展示 2 阶段架构中输入、编码器、摘要令牌与问答令牌的流向，是理解后文跨模态损失与奖励设计的前提。

> **看图路径：** 1. 先从顶部多模态输入沿箭头分别找到音频编码器与视觉编码器两条支路；2. 再看左侧大语言模型输出的信息令牌如何作为桥梁送入右侧第二阶段；3. 最后对照右侧问题框确认第二阶段同时接收原始视频、摘要与问题

[![原论文 Figure 1：The overall two-stage architecture of HippoVLM.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/46bd6c907304/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/46bd6c907304/figure-1.png)

*论文图 1。原论文 Figure 1：“The overall two-stage architecture of HippoVLM.”。*

从像素可见，顶部同时给出音频波形与胶片式视频帧，分别向下进入粉色音频编码器与蓝色视觉编码器。左侧大语言模型接收音频文本令牌与视觉令牌并向右输出绿色信息令牌，右侧大语言模型同时接收信息令牌、原始视觉流与黄色问题框，向下输出思考与答案令牌。这种布局对应文字描述的解耦思想：左侧只做压缩，右侧才做面向问题的联合推理。低帧采样带来的上下文缺口由预测性摘要部分弥补，而不是靠无差别增加帧数。

### 跨模态预测任务如何构造监督信号？

海马感知范式在训练中落实为联合学习。主任务是常规指令微调，生成输入视频的摘要或直接回答问题。辅助任务是 2 个方向的跨模态时间预测。视觉到音频感知要求模型在给定全量视频、当前音频和未来或过去音频相关查询时，生成异步音频摘要的真值。音频到视觉感知反之，要求在给定全量音频、当前视频帧和未来或过去视觉相关查询时，生成异步视频摘要的真值。

论文把摘要在时间上切分为前移与后移片段，例如用前段音频加全量视频预测后段音频摘要，用前段视频加全量音频预测后段视频摘要，未来 10 秒或过去 10 秒是原文给出的错位周期。总优化目标是主损失加两个辅助损失的加权和，两个权重在实验中均经验性设为 0.1。

沿一个样本走完流程有助于复述：输入为当前视频段、当前音频段与查询，模型先编码为统一空间令牌，再由大语言模型自回归生成错位时间段另一模态的摘要词序列，交叉熵损失只对该摘要的词计算，梯度回传更新语言模型与连接器，原文未明确说明视觉与音频编码器是否冻结，因此复现时应把该项记为缺项而不做推定。

**海马感知 × 跨模态预测感知：** 海马感知负责提出学习目标的方向，即像海马补全缺失模态一样从另一模态重建当前状态；跨模态预测感知负责把该方向落成可训练任务，即用视频加当前音频预测未来或过去音频摘要，反之亦然，二者搭配使模型不再只做时序下 1 帧预测，而是被迫建立音频与视频共现的内部世界模型。

下图展示跨模态学习部分的对称结构，有助于把上述文字对应到输入错位关系。

> **看图路径：** 1. 先区分上半未来预测与下半过去预测两排结构；2. 再核对每一排左侧输入与右侧监督端在当前与未来或过去片段上的错位；3. 最后看中间大脑图标汇合处理解双向预测的对称设计

[![原论文 Figure 2：The cross-modal learning part in the HippoSense SFT setup.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/46bd6c907304/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/46bd6c907304/figure-2.png)

*论文图 2。原论文 Figure 2：“The cross-modal learning part in the HippoSense SFT setup.”。*

上排为未来预测，下排为过去预测，每排左侧为预测端，右侧为提供真值上下文的完整端。左侧用当前音频加当前与未来视频去对齐右侧当前与未来音频，右侧用当前视频提供视觉锚点；下排则用当前音频加过去与当前视频去对齐过去与当前音频。这种左右错位正是辅助损失中条件与目标不对齐的来源。

**场景感知与摘要 × 联合推理：** 场景感知与摘要负责第一阶段的信息压缩，分别从音频流和视频流抽取与问题相关的简洁摘要；联合推理负责第二阶段把这些信息密集摘要与原始视频流一起送入大语言模型生成答案，二者分工使高层推理与原始转录感知解耦，避免长原始音频文本淹没推理。

**视觉到音频感知损失 × 音频到视觉感知损失：** 视觉到音频感知损失负责约束模型在给定全量视频和当前音频时生成异步音频摘要；音频到视觉感知损失负责约束模型在给定全量音频和当前视频时生成异步视频摘要，二者与主监督微调损失按权重相加，共同迫使模型双向利用互补模态上下文。

### 对比式强化学习如何奖励真正的双模态协同？

后训练采用组相对策略优化的变体，避免单独评论家模型。对每个问题、视觉输入与第一阶段摘要，当前策略采样 4 条候选推理路径，规则判定器打分后做组内标准化得到相对优势，高质量回答被上调，低质量被抑制，同时用与参考模型的散度惩罚防止灾难性漂移，重要性权重与截断操作构成替代目标。总奖励由四部分组成。格式奖励要求中间思考放在思考标签内、多模态洞察放在信息标签内，用正则表达式判定，符合得 1 否则得 0。

准确率奖励针对多选问答，若从答案块解析的预测等于真值则为 1。长度奖励若推理路径长度落在启发式区间内则给固定权重，用于平衡推理深度与过度思考。核心是负感知奖励：先离线用参考策略在遮蔽音频摘要与遮蔽视频摘要两种单模态条件下各解码多次，预计算视频摘要基线正确率与音频摘要基线正确率；训练时若当前策略组准确率同时严格超过两个单模态基线，则给组级加成，加成系数为可调超参数。

总奖励把格式与长度奖励相加，再加上被准确率门控的加成乘以准确率，保证只有答案正确时才拿到跨模态协同加成。该设计直接针对模态坍缩，即模型偷懒只靠视觉或只靠音频转录猜答案的行为。

**组相对策略优化 × 视频音频负感知优化：** 组相对策略优化负责提供无评论家模型的强化学习骨架，用组内归一化优势和与参考模型的散度惩罚更新策略；视频音频负感知优化负责在其上增加跨模态奖励设计，用单模态遮蔽基线对比出联合推理是否真正超越捷径，二者组合使后训练专门优化选择性共推理策略。

### 数据集与两阶段训练如何实际执行？

数据引擎从过滤原始视频开始，用大语音转录模型抽取音频转录本，连同原始音视频送入生成式模型生成初始独立音频与视频摘要。摘要经过 2 阶段校验：先用大语言模型做自动质量检查，再按每 1000 样本分批做人工校验，通过则入库，不通过则由人工写反馈并动态加入系统提示，用更强模型重新生成，形成持续改进闭环。

在此基础上整理出密集标注数据集，基础视频来自公开基准子集，论文文字列出大语言模型视频 178K 子集、感知测试集、社会智商 2.0 训练集与下一问答集，图示还包含更多时序与社交子集，分布按视频理解、时序推理与社会推理三大类组织。为支持跨模态预测，生成的摘要被程序化切分为前移与后移时间段，再用强模型合成显式桥接跨模态时间鸿沟的思维链 rationale。

质量控制要求每个训练样本向模型独立请求 3 次思维链生成，只有 3 次解析的最终答案完全准确且一致才保留，以剔除幻觉与不一致输出。

下图为数据集子集分布环图，阅读时先看大类再看具体来源有助于复现采样配比。

> **看图路径：** 1. 先确认圆环中心为数据集名称再向外看三类大扇区；2. 再沿外圈读出各子数据集名称在时序推理与社会推理中的归属；3. 最后比较绿色视频理解扇区与其他两类扇区的相对占比

[![原论文 Figure 4：Data subset distribution of Hippo-Think.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/46bd6c907304/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/46bd6c907304/figure-4.png)

*论文图 4。原论文 Figure 4：“Data subset distribution of Hippo-Think.”。*

像素显示中心为数据集名称与海马图形，外环按颜色分为绿色视频理解、蓝色时序推理与紫色社会推理三部分，外圈标注的来源包括烹饪、活动网、下一问答、社会智商等，内圈图标分别对应视频、胶片与人物交互，说明采样有意平衡 3 类能力而非只堆视频理解数据。

训练分 2 个阶段。冷启动监督微调做海马感知微调两轮，最大化正确推理步骤的似然；然后在同一数据集上做强化学习得到最终模型。优化器为 AdamW，峰值学习率约 1 乘 10 的负 6 次方，5% 步数线性预热后余弦衰减。硬件为 16 块 80 GB 显存的加速卡，混合精度，全局批量 16，每卡 1 样本。

训练时视频输入上限 16 帧，分辨率 256 乘 28 乘 28，借助高效旋转位置编码支持长达 32K 词元序列，并用梯度检查点与累积节省显存。强化学习组大小为 4，受计算限制只训练 1000 步。推理时评估 16 帧与 64 帧两种设置，分辨率提升至 512 乘 28 乘 28 以增强性能。

**思维链 × 信息标记：** 思维链负责承载中间推理过程，要求模型把推导步骤放在特定标签内以便检查结构依从性；信息标记负责承载抽取的多模态洞察，为第二阶段提供显式依据，二者分工使格式奖励可以用正则表达式判定结构正确性，准确率奖励只解析答案块判对错。

### 在哪些基准、基线与条件下比较，指标方向是什么？

评估覆盖 5 个音视频基准，论文正文表格集中报告 4 个主流视频问答基准：视频多模态理解、视频多模态评估无字幕版、视频大海捞针式定位与社会智商 2.0 测试集。选择理由是覆盖视觉推理、时间定位与复杂跨模态动态，刻意排除纯视觉基准，因为它们缺乏音频模态，无法检验核心主张。其中社会智商 2.0 被强调为关键，因为它评估人类社会行为与细微互动，语音与表情手势的对齐不可或缺。

基线包括闭源大模型、近期后训练视频模型、基础视觉语言模型与全模态模型，除闭源模型外均限制在 7B 或 8B 参数规模以保证公平。计算限制下基于问答 2.5 视觉语言模型与 InternVL3 的基线以 64 帧运行。指标为问答准确率，方向为越高越好。训练与部署成本分开讨论：训练预算为上述 16 卡与 1000 步强化学习，推理开销在单卡上单独测量，输出帧率与实际延迟不混为一谈。复现时需核对数据集、模型基线、实验阶段、指标与聚合对象，数值相同不代表同一指标，百分点与相对百分比含义不同。

### 主结果在公平条件下显示了什么？

比较的问题是：在相同参数规模与相近帧数下，显式跨模态预测加对比奖励的方法是否在需要听觉视觉对齐的基准上超越被动处理基线。公平条件是开源对比限制在 7B 或 8B，基线多以 64 帧运行，本文方法同时报告 16 帧与 64 帧，指标均为准确率且越高越好。下表整理主结果，保留闭源参考、直接基座与本文不同规模策略，避免只放最优值代替可部署收益。

| 模型与条件 | 参数基座 | 输入帧数 | 视频多模态理解准确率 | 视频多模态评估准确率 | 视频定位准确率 | 社会智商准确率 |
| --- | --- | --- | --- | --- | --- | --- |
| 闭源大模型参考 | 未公开 | 超过 180 帧 | 61.2 | 71.9 | 66.7 | 75.2 |
| 闭源多模态参考 | 未公开 | 超过 180 帧 | 53.9 | 75.0 | 64.4 | 71.8 |
| 开源基座 | 问答 2.5-7B | 64 帧 | 47.4 | 59.6 | 32.6 | 60.3 |
| 本文 7B | 问答 2.5-7B | 16 帧 | 49.9 | 62.5 | 66.0 | 69.5 |
| 本文 7B | 问答 2.5-7B | 64 帧 | 53.5 | 68.8 | 70.2 | 71.2 |
| 本文 8B | 问答 3-8B | 64 帧 | 62.7 | 70.4 | 72.0 | 73.4 |

表后解释需要同时说明收益与代价。论文报告显示，7B 模型在综合推理任务上明显超过其基座与同规模全模态基线，在社会智商基准上提升尤为显著，支持跨模态预测有助于捕捉视觉微笑与愤怒语气之间的矛盾或协同这一判断。8B 模型在 4 个基准上进一步达到与大闭源模型可比的水平。但代价与边界同样明确：闭源模型仍用超过 180 帧输入，本文方法在推理时依赖 2 阶段流水线，延迟高于单阶段模型。

总体趋势不等于每组都成立，具体未胜出项需看消融中的单模态基线与纯监督微调对照。像素证据的社会智商定性样本进一步展示机制：基线直接选错，中间推理模型长思考仍选错，而本文模型引用对话原文并排除选项后选对，说明摘要与联合推理共同起作用，但这是一个单样本演示，不能推广为全集性能证明。

下图为该定性样本的像素呈现，阅读时注意区分分布性结论与单样本标记。

> **看图路径：** 1. 先看顶部视频帧条与四选一问题确认任务为社交关系判断；2. 再逐段对比基线直接给答案与中间模型长推理仍选错的差异；3. 最后读底部模型输出如何引用对话原文再排除选项得到正确答案

[![原论文 Figure 5：Qualitative example of HippoVLM-7B’s reasoning output on the Social-IQ 2 benchmark.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/46bd6c907304/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/46bd6c907304/figure-5.png)

*论文图 5。原论文 Figure 5：“Qualitative example of HippoVLM-7B’s reasoning output on the Social-IQ 2 benchmark.”。*

图中顶部为办公室场景帧条与四选一问题，中部红色答案显示基座直接选 B，绿色长推理仍选 B，底部蓝色输出先复述动物控制与蝙蝠对话的权威关系，再逐项排除，最终选 C。这种可见的引用与排除动作对应第二阶段联合推理的设计，但数值判断仍以主结果表的全集准确率为准。

### 去掉跨模态目标或对比奖励后性能如何变化，延迟代价是多少？

消融要回答两个问题：监督阶段的跨模态目标是否带来超越普通微调的增益，强化学习阶段的对比奖励是否带来超越通用偏好优化的增益，以及 2 阶段推理的延迟代价。下表在 16 帧条件下对齐比较，保留基线、普通微调、偏好优化、组相对策略优化与本文 2 阶段策略，避免删除不利基线。

| 训练策略 | 输入帧数 | 视频多模态理解准确率 | 视频多模态评估准确率 | 视频定位准确率 | 社会智商准确率 |
| --- | --- | --- | --- | --- | --- |
| 基线无额外训练 | 16 帧 | 47.2 | 53.1 | 43.9 | 62.0 |
| 普通监督微调 | 16 帧 | 48.0 | 53.3 | 44.1 | 60.2 |
| 监督加直接偏好优化 | 16 帧 | 48.3 | 55.4 | 59.8 | 66.9 |
| 监督加通用组优化 | 16 帧 | 49.0 | 59.8 | 64.4 | 66.5 |
| 仅海马感知微调 | 16 帧 | 48.3 | 59.1 | 57.3 | 63.4 |
| 海马感知加对比优化 | 16 帧 | 49.9 | 62.5 | 66.0 | 69.5 |

表后解释应指出：仅海马感知微调两轮已超过原始基座，说明跨模态预测本身提供增益；叠加对比优化后进一步提升，尤其在视频定位与社会智商上，支持负感知奖励惩罚模态坍缩、迫使双模态协同的解释。但也要报告未胜出与代价侧：普通监督微调在社会智商上甚至低于基线，说明不加跨模态约束的微调可能无效；推理速度方面，2 阶段方法慢于单阶段模型但快于多轮智能体工具调用方法，具体数值受单卡型号与分辨率影响，训练资源、推理开销与实际延迟应分别讨论，不承诺未测量的误判率或成本改善。

### 哪些结论尚未验证，哪些条件限制了推广？

论文直接报告的是在 4 个音视频基准上的准确率提升与 1000 步强化学习内的快速改善，支持跨模态预测与对比奖励有效的判断。但以下属于有限解释或待验证推测，应使用可能与待验证表达。海马类比确有启发，但随后必须对应到真实信号与组件，即错位摘要预测与双模态奖励，不能把比喻当作性质证明。

训练细节存在缺项：原文未明确视觉与音频编码器在微调与强化学习中是否冻结，也未给出长度奖励区间、对比加成系数与散度惩罚系数的具体取值，复现时应记为缺项而不从模型名称推定实现。评估边界包括：纯视觉基准被刻意排除，因此不能推广到无音频任务；闭源对比使用超过 180 帧而开源对比多为 64 帧，帧数不一致限制了严格同条件胜负断言；强化学习仅训练 1000 步，长期训练是否持续提升未知；推理延迟在特定单卡上测量，更换硬件与分辨率后结论可能变化。

相关性不等于因果，未测量误判率、延迟分布与部署成本时，不承诺这些量得到改善。

### 若要复现，应先准备什么，先跑通哪一步？

复现先做信息条件核对。数据侧需准备论文列出的公开视频来源，并按视频理解、时序推理与社会推理 3 类平衡采样，音频转录用大语音模型抽取，再用生成式模型做独立音频与视频摘要。关键可重放步骤是把摘要切分为前移与后移时间段，构造双向预测监督对，并对每个样本独立生成 3 次思维链，只保留 3 次最终答案完全准确且一致的样本。模型侧以问答 2.5 或问答 3 视觉语言模型为基座，外加语音编码器并线性投影到统一空间，视觉连接器沿用基座结构。

训练超参数保留原文值：监督微调两轮，优化器峰值学习率约 1 乘 10 的负 6 次方，5% 预热后余弦衰减，全局批量 16，训练上限 16 帧与 256 乘 28 分辨率，强化学习组大小 4 并训练 1000 步，推理评估 16 帧与 64 帧且分辨率提升至 512 乘 28。下表整理可直接对照的预算与配置，避免把训练资源与推理延迟混为一谈。

| 配置项 | 取值 | 说明 | 适用阶段 | 备注 |
| --- | --- | --- | --- | --- |
| 训练硬件 | 16 卡 80 GB | 混合精度训练 | 监督与强化学习 | 需梯度检查点与累积 |
| 全局批量 | 16 | 每卡 1 样本 | 训练 | 长序列达 32K 词元 |
| 训练帧数与分辨率 | 16 帧 256 乘 28 | 效率优先 | 训练 | 推理时提升分辨率 |
| 推理帧数与分辨率 | 16 与 64 帧 512 乘 28 | 效果优先 | 推理 | 帧数影响延迟 |
| 强化学习组大小与步数 | 4 组 1000 步 | 有限预算 | 后训练 | 已见明显增益 |

表后补充验证建议：先跑通 16 帧下的基线、普通微调与海马感知微调三点，确认跨模态目标的独立增益，再加入对比奖励并检查组准确率是否真正超过两个单模态遮蔽基线，最后才扩展到 64 帧与 8B 规模。还需补做的验证包括报告编码器冻结状态、奖励权重与长度区间、多次随机种子的方差，以及在纯视觉与噪声音频条件下的边界测试。代码与权重可达性以资源状态为准，本次未能确认可达，因此复现应按文字描述从公开数据与基座出发，不假设官方实现已公开。

### 何时值得尝试这种方法，如何一句话记住它？

当任务同时依赖听觉与视觉且存在单模态捷径时值得尝试，例如社会互动问答中表情与语调矛盾、操作视频中动作与解说错位、长视频中关键信息只在某一模态短暂出现的情况。若任务为纯视觉定位或音频质量极差，则跨模态预测的收益可能受限，需先做边界测试。一句话记忆是：先用错位时间预测逼模型记住另一模态，再用超越单模态基线的奖励逼它真正使用两个模态。

对于语音与音频方向的研究生，可把该工作复述为输入到表示到组件到目标到输出的闭环：输入为当前与错位时间段的音视频，编码为统一令牌，经 2 阶段摘要与联合推理输出答案，监督来自双向摘要重建，策略优化来自组内对比与单模态遮蔽对照。这种从被动看全片到主动补全缺失模态的转变，是全文最核心的方法论启示。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 5，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 6，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 7，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-7.png)

区域 7 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 8，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-8.png)

区域 8 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 9，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-9.png)

区域 9 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 10，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-10.png)

区域 10 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 11，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-11.png)

区域 11 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 12，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/085a8ca5db2f/figure-12.png)

区域 12 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.pdf#page=5)

另有 16 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
