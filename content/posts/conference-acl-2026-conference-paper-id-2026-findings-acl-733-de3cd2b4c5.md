---
title: "Temporal Contrastive Decoding: A Training-Free Method for Large Audio-Language Models"
date: 2026-09-12
draft: false
description: "针对统一大音频语言模型偏向平滑上下文而漏掉短暂声学线索的问题，论文提出只在推理时对比原始与时域模糊音频的对数几率并做门控稀疏修正，在 MMAU 上 Qwen2.5-Omni 平均达 73.2%，代价是每样本多一次慢路径预填充前向与双路解码缓存。"
tags: ["测试时自适应", "统一音频模型", "语音", "音频问答"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.findings-acl.733"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.findings-acl.733/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.findings-acl.733.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "b92989fcd34f21456f1c84412973e613a21897a51e70af046729c89683ddd820"
paper_digest_api_reader_plan_sha256: "30d9da9b140e80a044a74ea18c2ca641e56f30373b773db642a1fe50de149782"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "a8703903acb0acc6118bd39e29c4872077f7dd99c8a4c8508fc61458a90f9d7a"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "606f5813381479c6f5f8a02650f3fd08cbc1feee15066001983039400bf26354"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "acaf2f45ec7813fd296feb16a804f6c9edcb8275990fadd9beb5e89821bf4593"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "fbaffe9d69dca47ba9927f1a6398bbda86546caaef8b7852d08e3389fd70716d"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.test-time-adaptation","label":"测试时自适应"},{"facet":"model_family","id":"model_family.unified-audio","label":"统一音频模型"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_task: "音频问答"
paper_digest_primary_method: "测试时自适应"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 平滑偏置之下：用模糊视图逼出瞬态证据的解码修正

> 英文题目：*Temporal Contrastive Decoding: A Training-Free Method for Large Audio-Language Models*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.findings-acl.733`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.733/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.733.pdf)

标签：#测试时自适应 #统一音频模型 #语音 #音频问答

评分：**6.6/10** | 创新 1.2/2 | 技术严谨 1.3/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Yanda Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhan Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Zirui Song：机构信息未能从会议 PDF 纯文本可靠映射
- Yunchao Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Martin Takáč：机构信息未能从会议 PDF 纯文本可靠映射
- Salem Lahlou：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

统一大音频语言模型以音频波形与文本问题为输入生成开放式回答，实际难点是自回归解码易被时间平滑上下文与语言先验主导，使短暂瞬态线索在生成全程得不到利用。TCD先用归一化汉宁窗平滑输入波形并保持全局幅度，再重编码得到保留粗粒度上下文的慢路径表示。接着将原始表示与慢路径表示在相同文本前缀下并行计算下一步词元逻辑值，其差值作为瞬态证据信号进入下一步。与无音频分支做全局对比的音频感知解码不同，TCD对比同一解码上下文下原始与时间模糊视图，并经层级稳定性分数设定模糊窗口，再由音频依赖与不确定性门控计算更新强度后，将正向差值稀疏注入小候选集，意义在于只在音频相关且不确定的步骤保守增强瞬态支持。在MMAU test-mini多选设置下，Qwen2.5-Omni+TCD的准确率为73.2%，高于基线Qwen2.5-Omni的71.5%。该结论适用边界受限于解码器可见时间对齐音频序列的统一架构，在语义瓶颈或层级压缩架构上变化均在0.3个百分点以内。推理开销上需额外一次慢路径预填充并维护双分支键值缓存，预填充延迟约为基线的2.04倍而解码单步开销可忽略。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么？要解决的困难为什么在解码时出现？

本文的输入是一段音频波形加一段文本问题，目标是让大音频语言模型生成紧扣音频的文本答案，输出用准确率衡量。读者需要先保留 3 个信息：模型在生成时每一步都能看到音频表示，解码采用标准的自回归逐词预测，以及作者要处理的时间平滑偏置是在解码阶段才显现的取舍问题。举例来说，问题问电话响了几次，答案取决于几个短暂的振铃起始，但模型可能被更平滑的背景和语言习惯带偏而数错。

**时间平滑偏置 × 瞬态声学线索：** 时间平滑偏置指解码时模型更依赖时间上平滑、语言先验支撑好的上下文，而把短促、局部的声音证据权重放低；瞬态声学线索指电话振铃起始、鼓点进入、和弦切换这类持续很短但决定答案的证据，二者搭配的意义在于论文把问答错误归因从感知不行转为解码时对两类证据的取舍失衡，从而引出只在解码侧放大瞬态差异的干预。

对刚入门的同学，白话是模型不是听不见，而是生成时更相信说得通的顺滑上下文，不愿为一闪而过的声音改口。论文因此不去重新训练编码器或语言模型，而是想在推理时给解码器一个能突出短暂证据的参照。为此它构造第二路被时间模糊的音频，让两路在相同文本前缀下各自算出下一词的偏好，再看偏好差异。后续所有组件都是为了让这个差异可计算、可控制、只在需要时生效。

### 同输入同目标的相关路线有何不同？

第一条路线是大音频语言模型本身。从早期把音频编码器接到自回归解码器的做法，到统一或交错式结构把音频表示成与文本共享因果解码器的类标记序列，再到压缩成少量语义查询或层次聚合表示的做法，输入都是音频加文本，目标都是音频问答与理解。论文明确把自己放在统一结构一侧，要求解码器能访问时间有序的音频序列，而不是只看到几个抽象查询。

第二条路线是解码时干预。在文本大模型中有对比浅深层、对比强弱模型的做法，在视觉语言模型中有对比原始与扰动图像以抑制幻觉的做法，在音频语言模型中有无音频对比的有声感知解码和跨音频视觉模态对比的做法。相同运行阶段都是冻结参数只改对数几率，但监督来源不同：前人用整模态缺失或静态扰动做参照，本文用同一音频的不同时间尺度做参照。教学例子是前人问有没有听到声音，本文问声音在时间上哪里不一样，因此不能把类别差异直接当成同条件胜负，论文也用独立的音频感知解码基线做了对照。

### 问题如何形式化？什么算成功？

设输入波形为原始音频，已生成文本为前缀，编码器把波形映射为时间结构化的隐表示序列，解码器每步输出词表上的对数几率。成功不是转录更准，而是下一词预测对时间局部证据更敏感，同时在语言主导的步骤上不添乱。论文用选择题与基础理解任务的准确率作为可核对的成功标准，方向是越高越好。

沿一个样本走一遍有助于建立依赖：输入电话铃声音频与计数问题，进入编码器得到帧序列，进入解码器得到原始对数几率；同一音频经平滑重编码得到慢路径表示，再得到慢路径对数几率；两者的差经整流、候选集限制与门控加权后修正原始对数几率，最后采样。若门控接近零，流程退化为基线。这个走通顺序说明后文的稳定性分数、候选集与门都是为控制修正服务的，而不是独立技巧。

### 时间对比解码的全景是什么？

全景可分为 4 步。第一步构造慢路径音频：用归一化汉宁窗对原始波形做时域平滑并保持全局幅度，再重编码得到保留粗上下文但削弱瞬态的表示，原文把原始减慢路径的残差视为被削弱的瞬态结构的代理。第二步在相同文本前缀下算两路对数几率并相减，差为正的词被认为在原始音频下得到瞬态的额外支撑。第三步用自归一化稳定性分数自适应设定模糊窗宽与更新强度。第 4 步用基于音频依赖与不确定性的步进门，把整流差值稀疏地加到小候选集上。

**统一大音频语言模型 × 慢路径视图：** 统一大音频语言模型负责把音频编码为随时间排列的表示序列并让因果解码器在生成全程都能访问它，慢路径视图负责把同一波形做汉宁窗平滑再重编码以保留粗粒度上下文但削弱瞬态变化，二者搭配的理由是只有解码器可见时间结构时原始与模糊的对数几率之差才能分离出瞬态支撑，组合后得到无需改参数的时域对比信号。

下图是全流程的核对锚点，阅读时先看主路径再看控制边，有助于把文字描述与实现对应起来。

> **看图路径：** 1. 从左侧音频输入分叉为蓝色原始波形与橙色模糊波形两条支路；2. 确认两路波形与文本一起进入中间统一大音频语言模型框；3. 比较右侧原始对数几率与模糊对数几率经减法与整流汇入乘法门；4. 跟踪顶部门控信号与虚线稳定性信号分别控制哪一条加法边

[![原论文 Figure 1：Overview of Temporal Contrastive Decoding (TCD).](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/08630a396192/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/08630a396192/figure-1.png)

*论文图 1。原论文 Figure 1：“Overview of Temporal Contrastive Decoding (TCD).”。*

从像素可见，左侧音频输入分出上下两路波形，上路蓝色标注原始，下路橙色标注模糊并受稳定性控制，文本从下方汇入中间的统一模型框；框右侧分出蓝色原始对数几率与橙色模糊对数几率，两者经减法、整流与前列筛选后与顶部门控相乘，再加回原始对数几率得到最终对数几率。虚线回路表示稳定性与原始分支对加法的约束。这张图不支持逐数值读出，只确认分支、汇合点与门的位置，后续公式与超参数节给出可复述的计算。

### 模糊、稳定性与门控如何计算？

模糊算子用持续时间为窗宽毫秒的汉宁窗在局部时间邻域内加权平均，得到模糊波形后再编码。窗宽不是固定常数，而是由稳定性分数在最小到最大值之间线性映射得到。稳定性分数本身从编码器各层的平均幅度与平均帧间变化量构造比值，再按各层音频注意力比例做加权平均。直觉是轨迹越稳定，允许更强的模糊与更大的更新；变化剧烈时保持保守。更新强度同样由该分数在给定上下界之间映射得到。

**自归一化稳定性分数 × 门控对数几率融合：** 自归一化稳定性分数负责从编码器各层轨迹的幅度与帧间变化量算出有界分数并按音频注意力加权，用以自适应设定模糊窗宽与修正强度，门控对数几率融合负责在每一步按音频依赖与不确定性决定是否把整流后的差值加到小候选集上，二者搭配使模糊强度与修正时机都随样本和步骤变化，避免在语言主导的步骤上乱改。

候选集与门控是保守性的关键。候选集取原始对数几率前列与慢路径对数几率前列的并集，解耦选择与打分：慢路径决定看哪些词，整流差决定加多少分。音频依赖分数取顶层解码器层分配给音频标记的注意力比例，不确定性取原始分布在前列上重归一化后的熵并做指数缩放，两者相乘再经增益截断得到步进门。最终只对候选集内的词加上强度与门加权的正向差值，其余位置不变。

**音频依赖分数 × 不确定性门：** 音频依赖分数负责度量当前步解码器顶层注意力中有多少质量落在音频标记上，不确定性门负责用原始对数几率经柔性最大值后的前列熵度量模型有多犹豫，二者相乘再经增益截断构成步进门，只有同时依赖音频又不确定时才放大瞬态修正，否则退化为原始基线解码。

需要强调的是论文用正向截断而非有正有负的对比，这是有意为之：只增强原始音频支撑的候选，避免压制慢路径上下文或文本前缀支持的词，从而减少在接近候选项之间的不稳定切换。消融节会用可运行变体验证这一选择。

### 有训练吗？实际计算与冻结关系是什么？

本研究没有训练阶段，不更新编码器与解码器的任何参数，也不采集新数据做监督。真实计算全部在推理时发生：先编码原始音频以估计稳定性，再生成并编码模糊音频得到慢路径表示，接着维护两路键值缓存做双分支解码，最后做轻量的对数几率掩码与偏置加法。梯度路径不存在，监督来源不存在，重置时机是按样本独立进行，样本间不共享自适应状态。

未报告的缺项要明确指出：原文未给出按层注意力与熵计算的完整代码级细节之外的逐层阈值，也未报告除门增益外按主干微调的其他搜索过程。不能从模型名称推定分词、采样核或注意力实现，也不能把参数冻结等同于输出确定，因为解码仍受提示模板与贪心或采样策略影响。复现时应把本方法理解为推理包装器，而不是可训练模块。

### 在什么数据、模型与协议上验证？

数据侧用两个公开基准。语音音乐音频理解基准用官方测试小集合的多选设置，按声音、音乐、语音分域报告准确率；音频基准的基础部分测通用语音与声音理解，并从中取出 3 个具时间结构的子任务做针对性探针，分别对应意图分类、声场景分类与环境声音问答，论文称使用各基准官方评测脚本与协议。硬件上主实验在 4 卡 40 吉显存加速卡上运行，效率分析在单卡 80 吉显存加速卡上用朴素注意力实现做公平比较，输入统一为 3 秒音频加系统提示并生成 100 个词。

模型侧覆盖两类设计以划定边界。统一类是解码器能访问时间有序音频标记的三者：小型统一模型、音频指令模型与更强的全模态模型；非统一类是先压缩为少量语义查询或层次聚合表示的四者。提示格式遵循各模型官方聊天模板与基准官方多选格式，不按模型或数据集调提示，解码默认贪心。超参数上只按主干设 1 次门增益以适配注意力锐度，其余保持默认，窗宽范围为 8.0 到 30.0 毫秒，更新强度范围为 0.3 到 1.5，候选集大小分别为原始 16 与模糊 8，熵前列取 5。资源状态方面，本次未发现来源绑定且完成验证的开源资源，不得声称代码模型数据已公开。

### 主结果：增益出现在哪里？代价是什么？

比较问题是统一主干上时间对比解码是否在相同提示与贪心解码下提高准确率，指标方向为越高越好。下表是论文报告的时间结构探针结果，基线为更强全模态模型直接解码，本方法为同模型加解码时修正，最后一列为论文给出的增量。表前公平条件是同一模型、同一官方协议与 1000 例测试子集，不做任务特定训练。

| Dataset | Baseline | +TCD (Ours) | ∆ |
| --- | --- | --- | --- |
| SLURP | 75.5 | 81.5 | +6.0 |
| CochlScene | 73.8 | 81.5 | +7.7 |
| Clotho-AQA | 71.7 | 74.4 | +2.7 |

表后解释需要同时看到收益与边界。3 个任务都报告为正向，声场景与意图分类增量更大，环境声音问答增量较小，论文的有限解释是前两者更依赖韵律模式、背景源变化与事件混合的时间组织，而以静态属性为主的子集变化很小。这支持时间对比在时间局部证据关键时有用，但总体趋势不等于每步都生效。

为覆盖核心的多选与基础理解结果，另整理两张宽表。先看多选基准上的对照，公平条件是同一测试小集合与多选设置，比较对象包括无音频对比的音频感知解码在两种对比强度下的可运行策略。

| 领域 | 强全模态基线准确率 | 音频感知解码 0.5 准确率 | 音频感知解码 1.0 准确率 | 时间对比解码准确率 |
| --- | --- | --- | --- | --- |
| 声音 | 78.1 | 78.1 | 75.1 | 79.0 |
| 音乐 | 65.9 | 68.0 | 68.6 | 71.0 |
| 语音 | 70.6 | 67.0 | 67.6 | 69.7 |
| 平均 | 71.5 | 71.0 | 70.4 | 73.2 |

表后要点是增益分布不均匀且存在未胜出项。论文报告时间对比解码在声音与音乐上持续改进，在更强主干的音乐上提升约 5.1 个百分点并取得 73.2% 的最佳平均分，而语音域变化较小甚至在最强主干上略低于基线，但平均仍上升；音频感知解码在该多选设置下略降，论文解释为全局无音频对比会影响全词表每一步的排序，不如候选集受限的局部修正稳妥。这说明方法不是全面压制，而是在瞬态关键域占优。

| 基准与主干 | 语音准确率 | 声音准确率 | 总体准确率 | 同实验另一主干对照 |
| --- | --- | --- | --- | --- |
| 基础基准强全模态基线 | 61.8 | 71.6 | 64.8 | 音频指令基线 62.3 |
| 基础基准加时间对比 | 63.2 | 74.5 | 66.7 | 音频指令加时间对比 63.8 |
| 多选基准音频指令基线 | 60.0 | 65.1 | 62.3 | 强全模态基线 71.5 |
| 多选基准加时间对比 | 62.5 | 66.1 | 63.8 | 强全模态加时间对比 73.2 |

表后代价要与收益并列。精度侧在基础基准上语音与声音都提高且声音更明显，论文称短事件与重叠源在标准解码下不易反映；成本侧预填充延迟约为 2.04 倍，因为需先编码原始音频算稳定性再编码模糊视图，但解码步延迟约为 0.99 倍且峰值显存仅从 15.85 吉增至 16.05 吉，论文归因于小批量下解码受显存带宽限制而非计算限制。未测量误判率与真实时延分布时，不承诺这些量同步改善。

### 拿掉结构化模糊、门控与正向截断会怎样？

消融在多选测试小集合上以音频指令模型为基线，基线平均为 62.3%，完整方法为 63.8%，3 个变体均为实际可运行策略。第一个变体把慢路径换成波形加高斯噪声再重编码，结果大幅低于基线并在音乐与语音上退化明显，论文的判断是无结构噪声不构成粗时间尺度参照，对数几率差只反映噪声敏感而非时域意义证据。第二个变体去掉门控而每步固定强度修正，声音虽升但语音明显下降，总体仅微升，支持门控对域平衡的作用。第 3 个变体改用可正可负的有符号对比，总体回落且在音乐语音上倒退，论文解释为负向更新会压制文本前缀或粗上下文支持的词，导致接近候选项之间抖动。

架构适用性分析进一步做反证。在语义瓶颈与层次聚合的 4 种非统一模型上，相同设置下准确率几乎不变，论文报告音频依赖分数持续偏低且门很少激活，原因是解码器看到的是少量抽象查询或粗块而非帧级序列，慢路径对比缺乏可利用的逐时间步信号。这不是实现失误，而是方法依赖解码器可见时间结构的前提不满足。复现时若在压缩型模型上直接套用而未重定义依赖信号与慢路径参照，不应期待同等增益。

### 边界与未验证之处有哪些？

适用边界首先是架构。论文明确方法最适合解码器在生成全程保留时间有序音频表示的统一设计；当音频被重度下采样或压缩为粗表示时，时间细节与稳定性统计的尺度都会变化，增益空间变小。

**语义瓶颈编码器 × 时间对齐表示：** 语义瓶颈编码器指用查询变换器或层次聚合把音频先压缩成少量抽象查询或粗粒度块再交给文本解码器的设计，时间对齐表示指解码器能直接访问的按帧排序的音频序列，二者搭配的结论是当瓶颈切断时间索引后慢路径对比失去可利用的逐时间步信号且门控很少激活，因此论文把方法适用边界划在保留时间对齐表示的统一架构一侧。

其次是成本。慢路径需要额外前向得到其对数几率，双路键值缓存与双分支解码带来预填充开销，论文称对数几率更新本身因稀疏候选集而轻量，但双遍成本在吞吐敏感时仍是约束，未来可用复用缓存或只在选中步骤上应用来缓解，该缓解在本文未实测。

未验证之处包括流式解码、编码器时间分辨率与解码器注意力模式如何定量影响效果，以及除准确率外的公平性与隐私风险。论文声明作为解码时过程不引入超出底层模型与数据的新风险，但这属于声明而非测量。缺失证据不是技术错误，相关性也不是因果，阅读时应把静态属性任务上的保守表现理解为方法定位而非失败。

### 复现先做什么？关键信息条件是什么？

先按主干准备官方评测环境与聊天模板，保持基准默认提示与多选格式，不单独调提示；解码先用贪心以对齐主结果。实现顺序建议为编码原始音频并按层统计幅度与帧间变化得到稳定性分数，再映射窗宽与强度生成模糊波形并重编码，然后在每步取两路前列并集为候选集，算音频注意力比例与前列熵得门控，最后只对候选集加正向差值。默认窗宽上下界、强度上下界、候选集大小与熵前列数见实验条件节，门增益按主干设 1 次以使门处于可比工作区。

核对清单包括数据集划分是否为官方测试小集合与 1000 例子集、指标是否为分域准确率及其平均、基线是否为同模型同协议直接解码、比较中是否保留音频感知解码等可运行策略而非事后最优值。百分点与相对百分比不可混用，不同指标差值不可并入模型列。若复现压缩型模型，需先补做依赖信号与慢路径参照的重定义验证，否则应报告未激活率与注意力分布作为边界证据。

### 何时值得尝试？还需补哪项验证？

当任务答案取决于短事件计数、进入时刻、和弦持续或重叠源区分，且模型是统一结构并在不确定步骤上仍关注音频时，值得尝试这种训练无关的解码修正；当任务以说话人静态属性为主或模型已把音频压缩为少量查询时，预期改动很小，不必强行套用。重提结果时新增的判断是音乐与声音域的增益可与门控的保守性并存，而语音域在最强主干上的轻微回落提醒局部修正仍需与语言上下文权衡。

还需补的验证包括长音频与流式下的分步开销分解、不同模糊尺度与门增益的敏感性曲线，以及除准确率外对误判分布的人工核查。总体上，本文的贡献在于用可复述的双视图对比把瞬态证据的利用问题从训练侧移到解码侧，并用门控与候选集限制把干预范围收窄，后续工作可沿时间分辨率与注意力模式继续刻画何时解码时干预真正有效。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-1.png)

区域 1 · [查看论文原页](https://aclanthology.org/2026.findings-acl.733.pdf#page=3)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-2.png)

区域 2 · [查看论文原页](https://aclanthology.org/2026.findings-acl.733.pdf#page=4)

[![原文数学表达区域 3，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-3.png)

区域 3 · [查看论文原页](https://aclanthology.org/2026.findings-acl.733.pdf#page=4)

[![原文数学表达区域 4，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-4.png)

区域 4 · [查看论文原页](https://aclanthology.org/2026.findings-acl.733.pdf#page=4)

[![原文数学表达区域 5，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-5.png)

区域 5 · [查看论文原页](https://aclanthology.org/2026.findings-acl.733.pdf#page=4)

[![原文数学表达区域 6，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-6.png)

区域 6 · [查看论文原页](https://aclanthology.org/2026.findings-acl.733.pdf#page=4)

[![原文数学表达区域 7，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-7.png)

区域 7 · [查看论文原页](https://aclanthology.org/2026.findings-acl.733.pdf#page=4)

[![原文数学表达区域 8，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-8.png)

区域 8 · [查看论文原页](https://aclanthology.org/2026.findings-acl.733.pdf#page=4)

[![原文数学表达区域 9，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-9.png)

区域 9 · [查看论文原页](https://aclanthology.org/2026.findings-acl.733.pdf#page=4)

[![原文数学表达区域 10，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-10.png)

区域 10 · [查看论文原页](https://aclanthology.org/2026.findings-acl.733.pdf#page=5)

[![原文数学表达区域 11，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-11.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-11.png)

区域 11 · [查看论文原页](https://aclanthology.org/2026.findings-acl.733.pdf#page=5)

[![原文数学表达区域 12，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-12.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-12.png)

区域 12 · [查看论文原页](https://aclanthology.org/2026.findings-acl.733.pdf#page=5)

[![原文数学表达区域 13，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-13.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-13.png)

区域 13 · [查看论文原页](https://aclanthology.org/2026.findings-acl.733.pdf#page=5)

[![原文数学表达区域 14，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-14.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-14.png)

区域 14 · [查看论文原页](https://aclanthology.org/2026.findings-acl.733.pdf#page=5)

[![原文数学表达区域 15，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-15.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/27ad19ce74bb/figure-15.png)

区域 15 · [查看论文原页](https://aclanthology.org/2026.findings-acl.733.pdf#page=5)

另有 12 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://aclanthology.org/2026.findings-acl.733.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
