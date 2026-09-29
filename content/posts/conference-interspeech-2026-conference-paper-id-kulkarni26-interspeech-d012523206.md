---
title: "A Closer Look at Failure Modes in Temporal Understanding of Large Audio-Language Models"
date: 2026-09-27
draft: false
description: "论文用 1657 题的三任务受控基准诊断时间推理失败，行为与因果干预显示模型在有文本时欠用音频，而重分配音频注意力比单纯增大音频注意力更有效，但瓶颈层缩放仅将平均准确率从 55.9% 提升到 59.1% 且需逐架构调参。"
tags: ["注意力机制", "音频大模型", "可解释性", "音频问答"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:kulkarni26_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/kulkarni26_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/kulkarni26_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "754c6b935e252860666d8c6563bfd2cd56ee7c5a640f65305d27aa3c2650fdb8"
paper_digest_api_reader_plan_sha256: "de1db98a24fdb38f9cce88c1c95eb018e1e729b14e563ebb65e55e24a409e954"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "bdd53d8086250bc029ac805218a0edcba1573302a188174e3ff395b744dd7ef0"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "525b11c856713db780aa257fc59abbbf7f350f0e21fb2c36ee192069aff3f01f"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "44d58c2d8f8475f27730f1203dd166f9c3a78a649321e2686be466e8a137a4c5"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "54645e6076052d0699c4e6afe9145260f3de1ce155b2459bd0ce5dcb43184dfa"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.attention","label":"注意力机制"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"research_focus","id":"research_focus.interpretability","label":"可解释性"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_task: "音频问答"
paper_digest_primary_method: "注意力机制"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 时间听不清不是没听见：大音频语言模型的时间推理为何失灵

> 英文题目：*A Closer Look at Failure Modes in Temporal Understanding of Large Audio-Language Models*

> 会议身份：`conference:interspeech:2026:conference-paper-id:kulkarni26_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/kulkarni26_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/kulkarni26_interspeech.pdf)

标签：#注意力机制 #音频大模型 #可解释性 #音频问答

评分：**6.4/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Apoorva Kulkarni：机构信息未能从会议 PDF 纯文本可靠映射
- Kaousheik Jayakumar：机构信息未能从会议 PDF 纯文本可靠映射
- Sreyan Ghosh：机构信息未能从会议 PDF 纯文本可靠映射
- Sarah Wiegreffe：机构信息未能从会议 PDF 纯文本可靠映射
- Dinesh Manocha：机构信息未能从会议 PDF 纯文本可靠映射
- Ramani Duraiswami：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该工作研究大型音频语言模型 Large Audio-Language Models，简称 LALMs 的基础时间推理，输入为真实环境录音加四选一问题，输出为最早起始 Earliest Onset、简称 EO，最晚结束 Latest Offset、简称 LO，或最长持续 Longest Duration、简称 LD，要求在重叠与间断事件中定位边界。方法链分为三步：首先基于 TACOS 构建 1657 题受控基准并用静音替换验证音频必要性，其次对比音频、字幕与双模态输入并统计层级注意力分配以刻画行为相关性，最后施加免训练注意力干预检验因果性。与增大音频总注意力的上加权相比，缩放音频词元间分布更能纠正错误，且叠加任务关键词词元可进一步获益。在跨模型三任务平均准确率基准下，瓶颈层注意力缩放的准确率为59.1%，高于干预前基线的准确率55.9%，表明瓶颈在分布精度而非总量不足。全层统一缩放反而损害准确率，而单层定点干预保留正确样本并实现免训练提升，说明干预粒度决定成败。结论仅适用于三类基础边界任务与所测开源架构，复杂组合推理与编码器表征缺陷尚未排除。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 研究要回答什么问题？输入输出是什么？

这篇论文的输入是真实环境录音与四选一文字问题，输出是选项字母对应的事件类别，目标是在必须听出时间边界时给出正确答案。作者强调大音频语言模型已经能识别和描述声音事件，但在定位事件在时间上的位置、比较先后与长短时仍然薄弱，这种薄弱会传导到带时间 grounding 的描述、声音事件检测和说话人日志等下游任务。

对刚入门的读者，白话解释是：模型不是听不见声音，而是听不清时间。英文术语是大音频语言模型 Large Audio-Language Models，缩写 LALMs，指把音频编码器与大语言模型连接起来的多模态系统；时间推理 Temporal Reasoning，指基于起始、结束与持续时间的判断。本文只研究 3 个最基础的子能力，不研究开放式描述或复杂多跳推理。

**大音频语言模型 × 时间推理：** 大音频语言模型负责把音频编码与文本大模型对齐并回答问题，时间推理负责判断事件何时开始、何时结束和持续多久，二者搭配的难点在于前者要提供可定位的时间表示，后者要基于该表示做边界比较，组合意义是只有当音频时间信息真正进入推理，模型才能超越文本猜测。

本文的输出承诺很克制：提供一个可复述的受控基准与可核对的干预对照，不承诺解决全部时间推理问题。资源状态方面，本次收到的证据中没有发现来源绑定且完成验证的资源，因此不得声称代码、模型或数据已公开，只能按论文文字复述方法与数字。

### 已有路线分别解释了什么？本论文补哪一块？

第一条路线是综合评测。MMAU、MMAU-Pro 与 MMAR 等基准报告大模型在时间推理子项上偏弱，姚等人分析时间推理如何随音频特性变化，巴塔查亚等人用合成基准考察性能与不确定性。这类工作告诉我们差距存在，但不揭示是哪一层计算出了问题。

第二条路线是模态不平衡解释。已有观察指出模型过度依赖文本线索，有时会在音频与文本冲突时压倒音频信号，并由此提出训练时鼓励音频贡献的方法。但论文明确指出这些结论多来自行为分析，只能显示相关，不能建立因果。

第 3 条路线是视觉语言模型的可解释性。刘等人与陈等人把幻觉与空间推理失败与注意力机制联系起来，并提出免训练的注意力干预。音频领域的类似分析较少，本文的动机就是把这种因果干预思路第一次系统地用于音频时间推理。

因此本论文的定位是诊断性工作：先用窄而干净的任务隔离最小时间能力，再用对照输入与注意力干预区分总量不足与分布不当两种机制。

### 三个时间任务到底让模型做什么？

论文构造了 3 个四选一任务。最早起始 Earliest Onset 要求选出开始时间最早的事件，最晚结束 Latest Offset 要求选出结束时间最晚的事件，最长持续 Longest Duration 要求选出持续时间最长的事件。每个样本都给出同一段音频的 4 个不同类别选项，正确答案在选项位置上均匀分布，避免模型靠猜位置得分。

下图用时间轴示意了题目的真实形态，是理解后续全部实验的前提，请先看任务目标再看色块位置。

> **看图路径：** 1. 先看三列标题确认三个子任务的提问目标各不相同；2. 再沿每列的时间轴比较色块的左端、右端与长度；3. 核对每列底部高亮答案与时间轴上最左、最右或最长色块是否一致；4. 注意同一行色块可能重叠或断续，说明事件不是顺序排列的

[![原论文 Figure 1：Example questions from the three temporal reasoning tasks with event timelines.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a911d9c36447/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a911d9c36447/figure-1.png)

*论文图 1。原论文 Figure 1：“Example questions from the three temporal reasoning tasks with event timelines.”。*

从像素可见，左列最早起始的 4 个色块起点不同，紫色 Bird Chirps 起点最左，对应答案为该选项；中列最晚结束的紫色 Church Bell 右端最右，对应答案为该选项；右列最长持续的红色 Ticking 横向长度明显大于其他色块，对应答案为该选项。图中事件存在重叠与间断，例如左列 Barking 与 Thunder 在时间上部分交错，说明模型不能靠事件是否共存判断，必须比较具体边界。教学例子：若只看文字知道有鸟叫和雷声，仍无法知道谁先开始，必须回到音频时间线，这正是论文要求音频贡献的原因。

### 诊断链条分几步？行为与机制如何衔接？

全流程沿一个样本走一遍更容易复述。输入是一段来自 Freesound 的真实录音、一个弱描述文本与一个四选一问题。模型先把音频切成音频标记、把文字切成文本标记，再由 Transformer 逐层计算注意力并输出选项。诊断先固定这条通路，改变输入条件看输出，再固定输入，直接改注意力计算看错误是否被修复。

**行为分析 × 机制分析：** 行为分析分工是固定输入条件观察输出变化，用以发现模态利用偏好，机制分析分工是直接干预注意力计算并观察错误是否被修复，用以检验因果，搭配理由是前者提出文本主导的假设，后者验证该假设是否足以解释失败，组合意义是从相关性走向因果诊断。

具体分为 4 步。第一步是构造受控题目并验证音频必要性。第二步是 3 条件行为比较：只给音频、只给弱描述、两者都给。第三步是观察最终输入标记对音频与文本的注意力份额。第 4 步是在错误样本上做两种注意力干预并比较修复率，最后尝试单层定点干预能否转化为整体准确率提升。方法全景的要点是前两步只产生假设，最后两步才做因果检验。

### 两种注意力干预在算什么？从哪里改？

两种干预都作用于从查询标记到音频键标记的注意力 logits，即 softmax 之前的分数，干预后重新归一化，不改权重参数。查询位置有 3 种设置：只用最终提示标记，只用任务关键词标记，以及两者同时用。关键词指问题中的 earliest、latest、longest 等指示目标的词，最终提示标记指输入序列末尾用于聚合决策的位置。

**注意力上加权 × 注意力缩放：** 注意力上加权分工是增大分配给全部音频标记的总注意力质量，试图纠正模态不平衡，注意力缩放分工是乘性调整音频注意力分布的 sharp 程度，试图纠正分布不准，搭配理由是二者分别对应总量不足与分配不当两种假设，组合意义是通过对比修复率判断失败主因是量不够还是分布不对。

论文的文字描述是：上加权通过加性放大音频 logits 来增加音频总注意力，缩放通过乘性系数改变音频注意力分布的集中程度，大于 1 为锐化，小于 1 为平滑。直觉是如果注意力大方向正确但不够精确，锐化可能有帮助；如果注意力本身对错了位置，平滑重分配可能有帮助。

**关键词标记 × 最终提示标记：** 关键词标记分工是从问题中定位 earliest、latest、longest 等任务指示词的查询位置，最终提示标记分工是提供聚合全部上下文后做选择的查询位置，搭配理由是时间推理既需要理解任务目标又需要整合证据，组合意义是同时从两处干预可以互补地重塑音频注意力的读取路径。

实现上干预均匀施加到所有注意力头，先做全层干预比较机制类型，再做单层干预寻找瓶颈层。原文未给出完整的 TeX 公式可供绑定，这里只按文字复述计算目标，不补充公式符号与梯度路径。关键复现细节是评估对象为模型原本答错的样本，指标为修复率，即被纠正的比例，而不是全量准确率。

### 本研究训练了什么？没有训练时实际计算是什么？

本研究没有训练任何新模型，也没有微调权重，4 个被测模型均为现成开源大音频语言模型：Qwen2-Audio-7B-Instruct、Kimi-Audio-7B-Instruct、Audio-Flamingo-3 与 DeSTA2.5-Audio-Llama-3.1-8B。机制分析阶段只用后两者，理由是它们权重、训练代码与训练数据完全开源，可复现且可排除数据混杂。

**弱描述 × 静音消融：** 弱描述分工是提供不含精确时间边界的通用音频文本说明，作为文本线索的受控来源，静音消融分工是用静音替换音频输入以切断音频贡献，搭配理由是只有对照有无音频时的表现才能验证题目是否必须听音频，组合意义是为后续 3 条件比较建立音频必要性的前提。

实际计算分为构造与推理两类。构造侧基于 TACOS 数据集，该数据集提供带精确起始与结束标注的时间对齐音频片段与文本描述，外加每段音频的弱描述。作者只保留时间差足够大的样本：最早起始与最晚结束任务要求正确事件与其他事件相隔至少 1 秒，最长持续任务要求正确事件比其他事件长至少 1 秒；干扰项先取同段音频中的其他事件，不足 3 个再从其他类别采样。推理侧是调用已有模型完成选择题，并在干预条件下重新前向计算，不涉及梯度更新、优化器与训练损失。未报告的内容是音频编码器内部表示质量与训练超参数，论文明确承认不能排除编码器表示偏弱的影响。

### 数据量、对照条件与指标如何设置？

数据规模与组成为理解结果的前提。基准共 1657 题，其中最早起始 528 题，最晚结束 499 题，最长持续 630 题，覆盖 7 个超类与 59 个细粒度类别的真实录音，事件可重叠或间歇出现。题目经过时间间隔过滤，意图是让边界比较不受标注抖动主导。

对照条件分两组。第一组验证音频必要性：把音频替换为静音，只留问题文字，看模型是否还能答对。第二组是三输入比较：音频问答只给音频与问题，描述问答只给弱描述与问题，音频加描述问答两者都给。指标均为四选一准确率，随机基线为 25%，数值越大越好；机制阶段指标为修复率，只在原本答错的样本上计算，能被纠正的比例越高说明干预越对症。

下表整理数据构成，表中数字与单位均保留原文写法，阅读时注意总数含千分位逗号。

| 评价维度 | 最早起始题数 | 最晚结束题数 | 最长持续题数 | 题目总数 |
| --- | --- | --- | --- | --- |
| 受控时间基准 | 528 | 499 | 630 | 1,657 |

表中总数 1,657 为 3 类题目之和，类别划分对应后续所有分任务报告口径。该表只交代数据量，不代表模型性能，性能比较见结果部分的 3 条件表与干预表。未报告的细节是具体划分的训练测试切分与统计显著性检验，复现时应按全量题目重跑并保留随机种子。

### 模型是否欠用音频？注意力份额说明了什么？

先看必要性验证。静音消融后所有模型在三任务上都跌到接近随机水平，说明仅靠问题文字无法猜出答案，题目确实需要音频或描述中的事件信息。论文同时提醒，该结果与后文描述问答准确率较高并不矛盾，因为后文的弱描述提供了静音条件下没有的事件线索。

再看 3 条件比较。主要发现有两点。第一，时间推理整体偏难，即使在综合基准上表现好的模型，在本基准上也明显更低。第二，多数模型与任务上只给弱描述优于只给音频，同时给音频与描述相对只给描述提升很小，有时反而下降，只有 Kimi-Audio 例外。这支持模型在有文本可用时欠用音频的判断，也说明简单拼接音频并不能自动改善时间判断。

注意力份额为上述行为提供了相关证据。下图展示 Audio-Flamingo-3 在最早起始任务上按层平均的音频与文本注意力比例，导读时先分清两条曲线的含义再看趋势。

> **看图路径：** 1. 先确认横轴为层编号、纵轴为注意力份额及红蓝图例含义；2. 再比较各层蓝色文本份额与红色音频份额的相对高度；3. 观察第 4 层附近红色小峰是否为唯一的音频份额抬升

[![原论文 Figure 2：Layer-wise attention distribution between audio and text modalities for Audio-Flamingo-3 for…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a911d9c36447/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a911d9c36447/figure-2.png)

*论文图 2。原论文 Figure 2：“Layer-wise attention distribution between audio and text modalities for Audio-Flamingo-3 for Earliest Onset (EO) task.”。*

从像素可见，蓝色文本份额在 0 到 27 层几乎贴近 1.0，红色音频份额贴近 0，仅在第 4 层附近出现一个约 0.12 的小峰，其余层均很低。论文报告其他模型与其他任务也有类似的文本主导模式，与已有模态不平衡观察一致。但作者强调这仍是相关性证据，不能证明增大音频注意力就能修复时间推理，这正是下一节做因果干预的原因。

### 重分配与增大音频注意力，谁更能修复错误？

本节的比较问题是：在相同的查询位置与层覆盖下，改变音频注意力总量与改变音频注意力分布，哪一种能纠正更多原本答错的样本。公平条件是干预都均匀施加到所有头与所有层，只在错误样本上计算修复率，修复率越高越好。最优系数为事后选择，部署时不能直接当作免调参收益。

下表汇总论文直接报告的平均修复率与瓶颈层整体提升，数值与百分号保留原文写法，阅读时注意修复率的分母是错误样本而非全部样本。

| 模型 | 最优缩放设置与平均修复率 | 最优上加权平均修复率 | 瓶颈层干预前平均准确率 | 瓶颈层干预后平均准确率 |
| --- | --- | --- | --- | --- |
| Audio-Flamingo-3 | 20.5% | 15.8% | 55.9% | 59.1% |
| DeSTA2.5-Audio | 20.1% | 10.1% | 55.9% | 59.1% |

表中可见缩放优于上加权，且 DeSTA 的差距更大；最后一列的 55.9% 到 59.1% 是跨模型跨任务的平均准确率变化，来自单层定点缩放而非全层干预。该结果支持总量不足不是唯一解释，音频标记之间的分布同样关键。代价是全层同时缩放反而使准确率下降，说明无差别干预会破坏原本答对的样本。

单层效果进一步显示架构依赖性。下图按层展示平均准确率变化，红色为提升，灰色为下降，导读时先区分模型面板再定位峰值层。

> **看图路径：** 1. 先确认上下两面板分别对应两个模型且纵轴为准确率变化量；2. 再找出每面板中最高的红色正向柱对应的层编号；3. 比较正向改善柱与负向灰色柱的分布是集中还是分散

[![原论文 Figure 3：3](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a911d9c36447/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/a911d9c36447/figure-3.png)

*论文图 3。原论文 Figure 3：“3”。*

从像素可见，上方面板 Audio-Flamingo-3 在第 20 层出现最高的红色柱，约 4% 以上，第 17、18 层也有约 2% 的提升，第 19 层则为明显的灰色负向柱；下方面板 DeSTA2.5-Audio 提升更分散，在第 6 层与第 9 层附近出现约 1% 到 2% 的红色柱，第 18 层与第 20 层附近有灰色下降。论文据此选择 Audio-Flamingo-3 第 20 层锐化与 DeSTA 第 9 层平滑作为瓶颈层，分别对应注意力正确但不精确与注意力错位需重分配两种诊断。未胜出项是关键词单独干预弱于最终标记单独干预，但两者联合最优，说明任务词定位与全局聚合互补。

### 哪些结论不能推广？还有什么机制未排除？

论文明确把工作限定为诊断而非完整因果链。注意力分布是一个促成因素，但修复率只有约 20%，说明大部分错误仍未被解释。替代机制如音频编码器表示本身偏弱并未被排除，单靠注意力干预无法证明编码器没有问题。

第二个限制是干预的脆弱性。全层全头缩放导致所有配置准确率下降，只有定位到单层才有平均约 3.2 个百分点的提升，且最优层与最优系数随架构而变：一个需要锐化，一个需要平滑。这意味着该方法目前是事后诊断与推理时缓解的探索，不能当作开箱即用的通用插件。

第 3 个限制是任务与模型覆盖。基准故意做窄，只测 3 个基础边界任务，没有覆盖更复杂的多事件排序、持续重叠推理与开放式 grounding；机制分析只在两个完全开源模型上完成，另 2 个模型的结果仅限行为层面。未测量的量包括推理延迟、计算开销与误判率变化，因此不能承诺该干预改善了效率或可靠性。

### 要复现这篇工作，先做什么、核对什么？

第一步是重建题目。下载 TACOS 的时间对齐标注与弱描述，按论文阈值过滤：最早起始与最晚结束要求正确事件与其他事件间隔至少 1 秒，最长持续要求长出至少 1 秒；干扰项优先同段音频其他事件，不足补其他类别，并保证四选项类别不同且答案位置均衡。核对总数是否为 1657 题及 3 类分布是否匹配。

第二步是重跑行为对照。用同一解码设置分别跑静音、只音频、只描述、音频加描述 4 种输入，核对静音是否接近 25%，以及只描述是否多数情况下高于只音频。注意力份额需按最终输入标记对音频与文本标记的比例逐层平均，注意平均对象是头与样本，不要把单头峰值当作整体趋势。

第三步是复现干预。只在错误样本上计算修复率，分别实现加性上加权与乘性缩放，查询位置覆盖最终标记、关键词标记与两者联合，系数覆盖锐化与平滑两侧。全层干预用于机制比较，单层扫描用于寻找瓶颈层，找到峰值层后再报告全量准确率变化。保留系数与层编号的事后选择属性，不要把最优值写成可部署收益。

### 何时值得尝试缩放注意力？一句话收束

当你的大音频语言模型在有文本描述时音频几乎帮不上忙，且注意力份额呈现文本主导时，值得按本文流程先做静音与 3 条件对照，再在错误样本上比较上加权与缩放的修复率。如果缩放明显占优且单层扫描出现稳定峰值，可以考虑在该瓶颈层做推理时缩放作为临时缓解，尤其适合无训练数据或无微调预算的场景。

反之，如果全层干预普遍下降、峰值层随任务剧烈漂移，或编码器本身的时间分辨率不足，则应优先补音频编码与训练侧的改进，而不是反复调注意力系数。回到中心判断：模态不平衡存在，但只增大音频注意力不够，音频标记之间的分布精度同样是时间推理失败的一个可干预环节，而完整的因果通路仍待验证。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
