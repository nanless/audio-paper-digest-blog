---
title: "AQA-TTRL: Self-Adaptation in Audio Question Answering with Test-Time Reinforcement Learning"
date: 2026-09-28
draft: false
description: "针对音频问答在测试时遇到新分布而无标注可用的问题，AQA-TTRL 用多数投票生成伪标签再做置信度加权的 GRPO 强化学习，在 MMAU、MMAR 和 MMSU 上让 Qwen2.5-Omni 7B 平均提升 4.42%、3B 平均提升 11.04%，代价是测试时需要多轮采样和 500 步左右的参数更新开销。"
tags: ["强化学习", "测试时自适应", "音频大模型", "音频问答"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:zhang26c_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/zhang26c_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/zhang26c_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "1443a7196da96c3284755fd8c5f559900e0a314e1ea4ed5d75360afda9a712f5"
paper_digest_api_reader_plan_sha256: "2802b19dfc0b2702dfaef20565f79169e20399601882b740f085aea2fc7ca6a0"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "611474fea45f2bec9bf9a08a177c9f6f78419fd3a6aa3cb4d81cec87dbb88ad6"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "5af70b01be4baed582ccafdd2783c5046a2fdf649597b3bca38ea9b265f23c81"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "69ab64b121bc19ed702535e414772926feee3e687b81bae73b975736e63a64dc"
paper_digest_api_reader_author_count: 5
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "12c84fc49da4cdcfa36e1628d1dc2128fffbc0f7fc8de33c4b311f9191019a6d"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"method","id":"method.test-time-adaptation","label":"测试时自适应"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"task","id":"task.audio-question-answering","label":"音频问答"}]
paper_digest_primary_task: "音频问答"
paper_digest_primary_method: "测试时自适应"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 无标注测试数据上自己给自己出题：AQA-TTRL 如何让音频问答模型边测边学

> 英文题目：*AQA-TTRL: Self-Adaptation in Audio Question Answering with Test-Time Reinforcement Learning*

> 会议身份：`conference:interspeech:2026:conference-paper-id:zhang26c_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/zhang26c_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/zhang26c_interspeech.pdf)

标签：#强化学习 #测试时自适应 #音频大模型 #音频问答

评分：**6.4/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Haoyu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaxian Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Dong Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Yusuke Iwasawa：机构信息未能从会议 PDF 纯文本可靠映射
- Yutaka Matsuo：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

音频问答以音频与文本问题为输入并输出选项答案，难点在于部署时噪声、录音条件与说话人差异导致声学失配，而重标注成本高昂。该方法先对每条无标注测试样本多次采样并多数投票生成伪标签与置信度，为后续优化提供可验证目标。接着以伪标签为可验证奖励做组相对策略优化，将投票结果转化为策略更新信号。随后用置信度加权优势并以多次尝试采样缓解全同输出导致的更新停滞，使高可靠样本贡献更大。与直接模仿伪标签的监督微调不同，该路线以奖励优化容忍标签噪声并将多采样投票收益蒸馏回单次推理。在MMAU、MMAR与MMSU基准下，Qwen2.5-Omni 7B经AQA-TTRL适应的平均准确率为68.81，高于未适应直接推理的准确率64.39。该结论限于选择题型音频理解基准的测试集内适应，未验证开放式问答、跨数据集迁移与在线流式场景，且原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，读完要能复述什么？

本文的输入是一个音频片段加一个文字问题，输出是从给定选项中选出的文字答案，属于选择题形式的音频问答。目标读者是刚进入语音、音乐与音频理解的研究生，读完需要能复述在完全没有测试标签时模型如何自己产生训练信号、如何更新参数、以及实验在什么条件下报告了提升。本文只讲论文实际做的选择题音频问答自适应，不扩展到开放式作答或音频生成。文中所有教学用的小例子都会标明是例子，不代表论文报告的数值。

学习依赖是先理解任务与基线，再理解 2 阶段闭环，然后拆开置信度加权与多次尝试采样 2 个组件，最后核对实验条件与反证。必须保留的信息包括基座模型名称、4 个评测集合名称、伪标签投票数与强化学习采样数、优化器与步数、以及平均提升幅度与关键对照。本文没有收到可验证的代码与数据资源，因此不声称代码、模型或数据已公开，复现部分只整理论文写明的超参数与流程。

### 已有路线在同一任务上各自解决了什么？

第一条路线是大音频语言模型，白话说就是用音频编码器听声音再用大语言模型读问题并生成答案，英文名是 Large Audio Language Models，缩写为 LALMs。论文提到的代表包括 LTU、SALMONN、Audio Flamingo 系列、DeSTA 系列、Step-Audio 系列、Qwen Audio 系列和 Qwen Omni 系列。它们把多种音频任务统一为文本生成，本文直接沿用其中 Qwen2.5-Omni 的 7B 与 3B 版本作为待适应的基座。

第二条路线是带可验证奖励的强化学习，白话说就是答案对错可以用规则直接判定因而不需要再训练奖励模型，英文名是 Reinforcement Learning with Verifiable Rewards，缩写为 RLVR。DeepSeek Math 与 DeepSeek-R1-Zero 用它提升数学推理，R1-AQA 与 Omni-R1 把它用于有标注音频问答的 GRPO 后训练。本文的不同在于训练范式是无标签的测试时自适应，而不是依赖标注训练集做后训练。

第三条路线是测试时强化学习，白话说就是到了测试阶段还继续用测试数据更新自己，英文名是 Test-Time Reinforcement Learning，缩写为 TTRL。原文引用的 TTRL 在数学基准上用多数投票做测试时提升，但尚未处理音频的复杂性。本文要补的就是把该思想搬到音频问答，并处理伪标签噪声与优势坍缩两个音频场景下更突出的问题。

### 为什么测试时会出现必须现场适应的问题？

论文设定的问题是测试时自适应，白话说就是模型部署后只能看到无标注的测试音频与问题，却希望在这批数据上变得更准。原因是实际语音与音频输入会因背景噪声、录音条件与说话人差异而偏离训练分布，造成声学失配，直接推理的问答准确率会下降。常规做法是重新采集音频问题对并人工标注再做监督更新，但该过程耗时耗力，且新采集的数据仍可能与真实测试分布不一致。

因此本文把任务限定为无标签范式下的音频问答性能提升：不使用任何人工标注与外部数据，只允许使用当前测试集本身做自适应。比如一个例子是模型在测试集中反复听到带混响的乐器片段加风格选择题，例子中混响是教学假设而非论文报告的分布，模型需要在不看正确答案的前提下调整自己。问题设置只承诺提升这批同分布测试样本的准确率，不承诺同时降低延迟或适用于完全不同的新任务。

### AQA-TTRL 的两阶段闭环是如何转起来的？

AQA-TTRL 的全称是音频问答的测试时强化学习，白话说就是边测试边用自己投票的结果训练自己。第一阶段是伪标签生成，第二阶段是伪标签引导的模型更新，2 阶段构成图 1 所示的闭环。先沿一个样本走一遍：输入为 1 对音频与问题，冻结的模型先独立生成 M 个预测，再对候选答案做多数投票得到共识伪标签；随后可更新的策略模型对同一输入采样多个回答，每个回答与伪标签比对得到奖励，再经组内归一化得到优势并做策略优化。

以下导读帮助理解图 1 的三块对比：上半左侧是预训练用预训练数据更新模型，上半右侧是有标注微调或强化微调用标注数据更新模型，下半是本文测试时只用未见测试数据经伪标签走强化学习更新。请重点看虚线模型更新箭头的 supervision 来源是否需要人工标签。

> **看图路径：** 1. 先看上半两块预训练与有标注微调都依赖外部数据更新模型；2. 再看下半测试时分支只用未见测试数据经伪标签走强化学习更新；3. 对比三条虚线模型更新箭头的起点是否需要人工标签

[![原论文 Figure 1：Role of AQA-TTRL: When faced with unseen test data, AQA-TTRL enables an automatic, label-free…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/416f886444b6/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/416f886444b6/figure-1.png)

*论文图 1。原论文 Figure 1：“Role of AQA-TTRL: When faced with unseen test data, AQA-TTRL enables an automatic, label-free adaptation pipeline where model updates are driven by self-generated pseudo-labels,…”。*

图 1 显示预训练与有标注阶段的更新都从外部数据出发，而测试时分支的起点是未见测试数据加问题，中间经过一个生成伪标签的模型与一个经强化学习更新的模型。图中下半左侧模型带雪花含义是生成伪标签时参数不更新，右侧模型带火焰含义是该步允许更新。这种画法把无标签自适应的信息条件讲清楚了：学习信号完全来自模型自身的多次预测共识，而不是外部标注。

### 伪标签、奖励与优势在一个样本上如何计算？

先讲伪标签生成。设音频为 a、问题为 q，模型先生成 M 个预测，记为 y1 到 yM。对每个候选答案 c 统计它出现的次数，出现次数最多的 c 即为伪标签。置信度定义为投票给伪标签的比例，也就是 M 个预测中与伪标签相同的个数除以 M。直观上若 64 次里有 50 次都选 B，则伪标签为 B 且置信度较高；该数字例子是为解释比例含义而设，不是论文报告的个案。

再讲模型更新。论文采用组相对策略优化，白话说就是不学奖励模型而在每个问题内部比较多个回答的相对好坏，英文名是 Group Relative Policy Optimization，缩写为 GRPO。与直接模仿伪标签的监督微调不同，GRPO 只把伪标签当作奖励比对标准。奖励由两项二值精确匹配组成：格式奖励与准确率奖励之和，回答与伪标签一致则奖励高。随后把组内 G 个奖励做均值方差归一化得到优势，再用带裁剪与偏离惩罚的目标更新策略，原文超参数为裁剪系数 0.2 与偏离系数 0。

以下导读帮助理解图 2 的上下两路：下半蓝色框是标签生成与置信度估计，上半是从测试数据经策略模型到回答、奖励、优势再回到策略的优化环。请先看下路如何得到伪标签与置信度函数，再看上路如何得到回答组。

> **看图路径：** 1. 先沿左下蓝色框看预测再多数投票得到伪标签与置信度函数；2. 再沿上方主路看多次尝试采样得到回答组再算奖励与优势；3. 观察置信度函数与奖励汇合相乘后再回指模型策略的闭环

[![原论文 Figure 2：2](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/416f886444b6/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/416f886444b6/figure-2.png)

*论文图 2。原论文 Figure 2：“2”。*

图 2 显示下路用冻结模型预测得到 y1 到 yM，经多数投票得到伪标签，同时算出置信度函数；上路用可更新策略经多次尝试采样得到 o1 到 oG，分别与伪标签比对得到 r1 到 rG，再与置信度函数相乘汇合得到优势 A1 到 AG，最后虚线指回策略模型形成策略优化。图中交叉圆圈表示相乘放缩，含义是优势幅度要按伪标签可靠程度调整。该图把 2 个组件的分工位置标清楚了：置信度管放缩，采样管组内差异。

**伪标签 × 多数投票：** 伪标签负责在没有人工标注时提供可优化的替代目标，多数投票负责从 M 次随机预测中选出出现次数最多的答案作为共识；二者搭配的理由是单次生成受采样噪声影响大而多次生成的众数更稳定，组合后形成无需外部数据的自生成奖励来源。

**优势 × 优势坍缩：** 优势负责衡量同一组内某个回答相对组内平均奖励的好坏，优势坍缩指该组回答完全相同时归一化后优势变为零、更新停滞；二者搭配的意义在于揭示高置信样本最容易失去学习信号，因此需要多次尝试采样来恢复组内差异。

### 置信度加权与多次尝试采样各自修了哪处漏水？

第一个组件是置信度加权优势，白话说就是越确信的伪标签越值得大学习步子。计算上先算组内归一化优势，再乘以置信度的函数 f。论文在所有实验中使用指数形式，也就是 e 的置信度次方，其余线性和平方根形式也试过但总体不如指数。指数映射的值域在 1 到 e 之间，既保留不同置信度的相对差异，又避免对可能校准不良的高置信伪标签过度放大。原文的安排理由是高预测置信通常对应更高标签可靠度，因此只做相对重加权而不是过滤掉低置信样本。

第二个组件是多次尝试采样，白话说就是一组回答全相同时换一组再采，直到采出有差异的一组。原因是高置信问题容易采出完全相同的回答，此时组内奖励恒定，归一化后优势为零，更新停滞，即优势坍缩。增大组规模 G 可以缓解但音频 token 使序列更长、显存压力大，论文因此采用等规模多组顺序采样：依次生成 G1、G2、G33 组，选中第一组内部不完全相同的组，若都相同则用最后一组兜底。该策略不保证一定有多样性，但在有限计算下保留了高置信样本的信息价值。

**置信度加权 × 组相对策略优化：** 组相对策略优化负责在组内归一化奖励得到优势并做裁剪优化，置信度加权负责按伪标签的一致比例对优势做整体放缩；搭配理由是伪标签本身有噪声不能同等信任，组合后让高置信样本的梯度更大、低置信样本的梯度更小，从而对齐信号质量与更新幅度。

2 个组件是互补的：加权解决伪标签噪声导致的方向与幅度问题，采样解决组内无差异导致的零梯度问题。论文指出当优势坍缩发生时单纯加权会放大样本间不均衡，因此必须先用采样恢复有效更新，加权才有可放缩的对象。

### 训练时哪些参数更新，梯度从哪里来？

本研究的训练就是测试时自适应本身，没有独立的离线训练阶段。伪标签生成阶段使用冻结模型做 64 次预测，温度为 1，该阶段不产生梯度。随后的 GRPO 阶段微调全部模型参数，使用 AdamW 优化器，学习率为 1e-6，权重衰减为 0.01，全局批量为 8，在 4 卡上微 batch 为 1、梯度累积为 2，梯度裁剪为 1.0，精度为 bf16。GRPO rollout 为每次 4 个生成，温度为 1，共跑 500 个更新步。提示词要求模型从选项字符串中选择答案并把最终答案放在固定标签内，且关闭思考直接输出答案。

梯度路径来自伪标签比对奖励经组内归一化与置信度放缩后的优势，再经裁剪策略目标反传到策略模型。监督来源是自生成的多数投票伪标签，而不是人工标签。重置时机方面论文未报告跨数据集间的参数重置细节，只说明对每个数据集做自适应并在固定步数取结果，因此不能从模型名称推定是否为每批测试从头重置。未报告的缺项包括 KL 参考模型的具体同步方式与采样温度之外的解码细节，复现时应按原文超参数先跑通再做改动。

### 在哪些数据与协议下比较，结果才可比？

评测覆盖 4 个集合：MMAU 的 test-mini 与 test、MMAR 与 MMSU，任务均为选择题音频问答，指标为准确率，方向是越高越好。基座为 Qwen2.5-Omni 7B 与 3B。比较对象包括未适应模型的直接推理、带多数投票的直接推理、以及用同一批多数投票伪标签训练 3 个 epoch 的监督微调。论文说明直接推理结果为复现以保证推理设置一致，伪标签多数投票与适应后单遍评估的投票数含义不同，需要区分。

协议细节是伪标签提前用 64 次预测经多数投票得到，适应时 GRPO 用 4 生成，全部数据集跑 500 步，但小数据集在第 100 步取结果、大数据集在第 500 步取结果。MMSU 的案例说明测试集为 5000 样本、全局批量为 8，因而在完整遍历前就已稳定。以下表格把核心可运行策略的平均效果与关键对照放在一起，指标单位按原文保留为百分点形式的准确率数值。

比较的问题是：在相同基座与相同无标签测试数据下，测试时强化学习是否超过直接推理、推理时投票与同伪标签监督微调。公平条件是伪标签来源相同且适应后评估均为单遍，指标方向为准确率越高越好。

| 基座模型 | 评测范围 | 平均提升 | 关键对照 | 结论 |
| --- | --- | --- | --- | --- |
| Qwen2.5-Omni 7B | MMAU、MMAR 和 MMSU | 4.42% | 未适应 7B 直接推理 | 本方法平均提升显著 |
| Qwen2.5-Omni 3B | MMAU、MMAR 和 MMSU | 11.04% | 未适应 7B 直接推理 | 自适应 3B 超过未适应 7B |
| 自适应 3B | 全平均 | 64.86 | 未适应 7B 的 64.39 | 小模型经自适应可比大模型直接推理 |

表后解释需要同时讲收益与代价。本方法的收益是 7B 平均提升 4.42%、3B 平均提升 11.04%，且自适应 3B 平均 64.86 超过未适应 7B 的 64.39，支持小模型经现场适应可达到可比性能的判断。代价是测试时需要额外采样与多步更新，且该平均数是对 4 个集合的平均，不代表每个集合提升幅度相同。未胜出项在消融中体现：仅用多数投票的 GRPO 平均最低，说明两个新增模块并非冗余。

### 主结果显示了什么，相关性证据支持了什么？

主结果报告本方法在所有基准上超过直接推理，7B 与 3B 的平均提升如上表所示，同时超过带多数投票的直接推理与同伪标签监督微调。论文把原因归为强化学习能容忍一定标签不准确并拟合潜在分布，而不只是模仿。需要强调这是论文的有限解释，相关性证据支持但因果仍需更严格的反事实验证。

以下导读帮助理解置信度与准确率的关系图：横轴是伪标签置信度百分比，纵轴是该置信度区间内的伪标签准确率百分比，3 种标记分别对应 3 个数据集并各有一条拟合线。请观察散点是否沿对角上升。

> **看图路径：** 1. 先确认横轴是伪标签置信度而纵轴是该区间的伪标签准确率；2. 分别看三个数据集散点是否都随置信度升高而上升；3. 观察低置信区间散点分散而高置信区间三条拟合线都靠近右上角

[![原论文 Figure 4：Accuracy vs. Confidence of Pseudo-Label](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/416f886444b6/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/416f886444b6/figure-3.png)

*论文图 3。原论文 Figure 4：“Accuracy vs. Confidence of Pseudo-Label”。*

图 3 显示 3 个数据集的散点都随置信度升高而准确率升高，拟合线呈明显正斜率，高置信右上角点密集且准确率高，低置信左下角准确率低且更分散。论文因此认为高置信伪标签更可靠，应该在更新中占更大权重。由于 MMAU test 标签因在线评测不可用，该图只报告其余测试集。该相关性是置信度加权机制的核心依据，但相关性不等于因果，仍需结合消融看加权是否真实带来增益。

**直接推理 × 测试时强化学习：** 直接推理负责用冻结参数对每个测试样本做 1 次前向得到答案，测试时强化学习负责先在无标注测试数据上更新参数再做单遍评估；搭配比较的理由是二者输入和基座相同、区别只在是否允许测试时更新，组合意义是把多样本投票的增益内化为单遍模型能力，而不是在推理时永远多采 64 次。

训练动态案例显示 MMSU 上准确率快速上升后趋稳，支持在子集上适应即可惠及同分布剩余样本的判断。但总体趋势不等于每一步都上升，固定第 500 步报告是为保证无标签协议一致，而不是事后选最优点。

### 拿掉一个模块或换投票数会发生什么？

模块消融以多数投票加 GRPO 为起点，分别加入多次尝试采样与置信度加权。论文报告加入采样在多数基准提升但 MMAR 例外，加入加权在小集合提升明显而在大数据集增益有限，二者合用平均增益 1.31% 且最稳定。这支持两个模块互补的判断，同时给出反例：任一单模块都不是在所有集合上一致最优。音频类型消融进一步把适应限制在声音、音乐、语音子集，发现音乐单独适应平均最高，但单类型适应仍与全量基线可比，支持未对特定音频类型过拟合的判断。

以下导读帮助理解投票数 M 的影响图：横轴是多数投票样本数，纵轴是 MMAU test-mini 上适应后单遍评估的准确率，4 条线分别对应本方法、监督微调、推理时投票与直接推理。请对比蓝色线与其他线的高度与平坦程度。

> **看图路径：** 1. 先确认横轴是多数投票数 M 而纵轴是单遍评估准确率；2. 比较蓝色本方法曲线与橙色监督微调和绿色推理投票曲线的高低；3. 观察 M 等于 8 时本方法已高于对方 M 等于 64 时的位置

[![原论文 Figure 3：Accuracy vs. M on MMAU test-mini.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/416f886444b6/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/416f886444b6/figure-4.png)

*论文图 4。原论文 Figure 3：“Accuracy vs. M on MMAU test-mini. M is majority- vote sample count: inference-time voting for DIMV, adaptation- time pseudo-label voting for SFT/Ours (single-pass eval).”。*

图 4 显示本方法曲线始终在最上方且随 M 变化平坦，在 M 等于 8 时已达 76.6% 并超过对方 M 等于 64 推理投票的效果，而监督微调与推理投票曲线更低且随 M 波动更大。这支持增益来自把多样本投票转化为单遍能力，而不是依赖测试时大 M。代价是适应阶段仍需额外采样与 rollout，推理时省下的投票次数是以适应时多花计算换来的。

**监督微调 × 可验证奖励的强化学习：** 监督微调负责用交叉熵直接模仿多数投票伪标签，可验证奖励的强化学习负责只把伪标签当作比对奖励而不逐词模仿；搭配理由是二者使用同一批伪标签因而能分离优化方式的影响，组合意义是检验强化学习是否比硬模仿更能容忍标签噪声。

比较的问题是：同样伪标签下强化学习是否优于监督微调与推理投票，公平条件是伪标签投票数相同且最终均为单遍评估。表后解释是本方法在各 M 下一致领先，监督微调对 M 更敏感，说明硬模仿对噪声更脆弱。未评测边界包括开放式问答与流式部署，论文未给出相关数字。

### 还有哪些条件没测，哪些结论不能推广？

首先是协议固定性：结果取自第 100 步或第 500 步的固定步数，而不是用验证集早停或逐步最优，这保证了无标签协议的一致性，但也意味着报告值不是事后最优，不能直接当作可部署上限。其次是伪标签质量依赖：置信度与准确率的正相关在 3 个集合上成立，但低置信区仍有噪声，若测试分布使多数投票本身系统性偏错，加权也难以纠正，论文未测量此类对抗分布下的误判率。

其次是成本未充分量化：论文给出了批量、步数与采样数，但未报告墙钟时间、显存峰值与推理延迟，训练资源与推理开销需要分开讨论，不能从准确率提升推定效率也提升。最后是任务边界：全部证据来自选择题音频问答的准确率，不能把结论推广到开放式作答、音频生成或需要人工评价的维度，也不能把自动准确率差值当作人类感知提升。缺失证据不是技术错误，复现时应补测延迟与校准误差再做选型。

### 要复现先做什么，需要保留哪些超参数？

复现先做三件事：按原文提示词关闭思考并要求选项加固定标签输出，保证直接推理基线可比；先用 64 次预测生成伪标签并记录置信度分布，验证高置信区间是否更准；再用 GRPO 做小步数试跑，观察组内是否出现全相同回答以确认是否需要多次尝试采样。关键超参数必须保留：伪标签投票 64、温度 1，GRPO 每组 4 生成、温度 1，500 更新步、小集合取 100 步、大集合取 500 步，AdamW 学习率 1e-6、权重衰减 0.01、全局批量 8、梯度裁剪 1.0、bf16，裁剪系数 0.2、偏离系数 0。

以下表格把可直接照抄的构造与训练条件集中整理，数值写法保留原文精度与单位，裸值不擅自添加百分号。

比较的问题是：哪些构造决定了信息条件与计算量，复现时必须对齐。公平条件是同一基座与同一测试集，指标为准确率。

| 阶段 | 伪标签投票数 | GRPO rollout 数 | 更新步数与取值点 | 优化与批量 |
| --- | --- | --- | --- | --- |
| 伪标签生成 | 64 predictions | 4 generations | 500 update steps | global batch size 8 |
| 结果取值 | 64 predictions | 4 generations | step 100 for smaller datasets | 5,000 samples |
| 结果取值 | 64 predictions | 4 generations | step 500 for larger datasets | global batch size 8 |
| 投票预算 | M=8 | M=64 inference-time votes | 76.6% accuracy | average gain of 1.31% |
| 优化器 | lr=1e-6 | weight decay=0.01 | gradient clipping of 1.0 in bf16 | micro-batch=1，gradient accumulation=2 |

表后解释要讲清取舍：64 投票保证伪标签稳定但成本高，M 等于 8 时本方法已达 76.6% 说明小投票也可 work，但论文主结果仍用 64 以保稳定；4 生成加多组兜底在显存与多样性间折中；固定步数取值避免了用标签选最优，但可能错过更早或更晚的更好点。未胜出项是监督微调同条件 3 个 epoch 仍落后，说明同伪标签下优化方式是关键变量。系统可运行性方面，本文未提供可验证的开源代码与权重下载状态，因此只能按论文文字复现流程，不能声称开箱可运行。

### 何时值得尝试，一句话如何带走？

当部署环境与训练分布存在声学差异、且无法快速获得人工标注，但允许在测试集上多做采样与数百步全参数更新时，值得尝试 AQA-TTRL。反之，若测试延迟敏感、显存无法容纳音频长序列的多组采样，或任务是开放式生成而无可靠的精确匹配奖励，则应先补测成本与奖励设计再决定。复现时先对齐提示词与基线，再验证置信度与准确率的正相关是否在你的数据上成立，最后再打开两个模块做消融。

带走的一句话是：用多数投票的共识代替人工标签，用置信度加权与多次尝试采样修补噪声与零梯度，再用 GRPO 把多采的增益蒸馏为单遍能力，从而在 4 个音频问答集合上实现小模型超过大模型直接推理的效果，但代价是测试时的额外计算。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
