---
title: "SAFE-QAQ: End-to-End Slow-Thinking Audio-Text Fraud Detection via Reinforcement Learning"
date: 2026-09-12
draft: false
description: "针对转写文本丢失语气与环境线索且难以拆解分层话术的问题，SAFE-QAQ 用端到端音频大模型加三阶段规则奖励强化学习做慢思考推理，在 TeleAntiFraud-Bench 上以 SAFE-LS 取得场景 84.64、欺诈 89.61、类型 88.23 的加权 F1，代价是仍依赖单一数据集且实时版类型精度有所下降。"
tags: ["强化学习", "音频大模型", "端到端", "音频分类"]
categories: ["acl-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:acl:2026:conference-paper-id:2026.acl-long.1201"
paper_digest_source_kind: conference
paper_digest_conference_id: "acl-2026"
paper_digest_conference_record_url: "https://aclanthology.org/2026.acl-long.1201/"
paper_digest_conference_pdf_url: "https://aclanthology.org/2026.acl-long.1201.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "61964a4b32ec9cb1e3de1fdc068c628dd4b6df79a6d08b2f9a22a95a2aff5528"
paper_digest_api_reader_plan_sha256: "318a5fdbfd7784cc334785858aea4efc63fc76a16a9d258819039afa2fa326f9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "13f1f75f5135a65963f5d81fa872f476d59ef6e3f45349ecbc160630edf4becf"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "5b0e27b71c5021560bb8a622d811df043db2716c90c9dd68f4a1796c2bc30366"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "11777f8fac248c05aec05e8558260a1bc62aa7c05ef0732c01c1d78d909f054d"
paper_digest_api_reader_author_count: 11
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "d374c1542c70e5b008dfc9dbe46a34be02ff17b6987a7d48d4dc96721f666a75"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"model_family","id":"model_family.audio-language","label":"音频大模型"},{"facet":"setting","id":"setting.end-to-end","label":"端到端"},{"facet":"task","id":"task.audio-classification","label":"音频分类"}]
paper_digest_primary_task: "音频分类"
paper_digest_primary_method: "强化学习"
paper_digest_score: 7.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 不转写直接听：用慢思考强化学习把诈骗电话的声音细节留下来

> 英文题目：*SAFE-QAQ: End-to-End Slow-Thinking Audio-Text Fraud Detection via Reinforcement Learning*

> 会议身份：`conference:acl:2026:conference-paper-id:2026.acl-long.1201`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1201/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1201.pdf)

标签：#强化学习 #音频大模型 #端到端 #音频分类

评分：**7.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.3/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Peidong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiming Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Xin Dai：机构信息未能从会议 PDF 纯文本可靠映射
- YongKang Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Shi Feng：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaocui Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Wenxing Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhihao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Mingjun Pan：机构信息未能从会议 PDF 纯文本可靠映射
- Li Yuan：机构信息未能从会议 PDF 纯文本可靠映射
- Daling Wang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为原始通话音频与文本指令，输出为7类场景分类、2类是否诈骗、7类诈骗类型三组标签及逐步推理链，难点在于自动语音识别转写误差会掩盖语气与环境线索，而多层伪装骗术需要迭代核查才能识破。第一阶段以规则奖励的组相对策略优化训练慢思考模型，直接从音频捕捉细粒度线索并生成分类与长推理链。第二阶段经拒绝采样微调压缩推理链，将前一阶段筛选后的高质量长推理样本作为监督数据，在保持精度下缩短推理长度。第三阶段以长度约束强化学习微调出支持早期介入的实时模型，继承前阶段权重与推理风格并以阶段奖励优化决策时机与效率平衡。相对先转写后判定的级联路线，关键机制差异在于省去中间文本瓶颈，并用准确率加格式加深度加阶段加效率奖励显式塑造推理长度与决策时机，具有保留声学线索的实际意义。在TeleAntiFraud-Bench基准下，SAFE-LS的AVG F1分数为87.49，高于Gemini-3.0-Pro的83.94。该结论适用边界受限于TeleAntiFraud-28k分布与高风险电话子集，对强噪声、信号退化与新型话术的泛化尚未验证。训练成本对应硬件为4卡NVIDIA A100集群，推理开销以推理词元长度、延迟与吞吐衡量，极端部署下的失败条件仍需系统检验。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/modelscope/ms-swift> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，为什么转写文本不够用？

这篇论文的输入是一段通话原始音频加一段文字指令，输出是分步思考过程加分类结论，思考过程放在`<think>`标签里，结论放在`<answer>`标签里。目标同时有 3 个：判断通话属于哪种生活场景，判断是否涉及欺诈，如果涉及再判断属于 7 种欺诈类型中的哪一种。必须保留的信息是声音本身的细节，包括语气起伏、情绪压力和背景环境声，以及骗子常用的分层话术，例如伪造客服身份、制造退款补偿借口、引导点击链接。

以往做法是先用自动语音识别把声音转成文字，再把文字交给大语言模型判断。这种做法会丢掉两类东西：一是转写错误引入的噪声，二是文字无法承载的副语言线索。更麻烦的是，现代诈骗往往把平静的播音腔与紧急的索取信息意图绑在一起，单看文字会觉得礼貌正常，听到声音才能发现标准化、无情绪波动的背稿感。论文因此主张不经过转写，直接让大音频语言模型听原声做判断。

本解读的输出是把方法走通到可复述：先讲任务与相关路线，再讲 3 阶段全景，然后拆每个组件的计算与奖励，接着讲训练与实时推理的构造，最后按实验条件讲结果、反证、成本与复现步骤。例子会明确标为例子，不虚构论文之外的数字。

下图把以往级联与本文端到端放在同一版式里对比，左侧是音频到文本再到大语言模型的纵向链路，右侧是本文的 3 阶段演进，读图时重点看输入保留物与推理长度控制在哪里发生变化。

> **看图路径：** 1. 先看左侧以往方法的纵向箭头：音频经自动语音识别变为文本再送大语言模型；2. 再看右侧三阶段横向箭头：阶段一生成慢思考，阶段二压缩思考长度，阶段三用音频块做实时检测；3. 对比两条路径的输入保留物：左侧只保留文字，右侧同时保留音频指令与思考长度控制；4. 记录模型演进名称：大音频语言模型到 SAFE-RL 再到 SAFE-RS、SAFE-LS 和 SAFE-Real

[![原论文 Figure 1：Comparison of (a) Previous Method and (b) Our Proposed Method: End-to-End Call Fraud Detec- tion…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/0e4b2bab848b/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/0e4b2bab848b/figure-1.png)

*论文图 1。原论文 Figure 1：“Comparison of (a) Previous Method and (b) Our Proposed Method: End-to-End Call Fraud Detec- tion via Reinforcement Learning (RL).”。*

从像素上看，左侧只有一条蓝色虚线隔开的单列流程，箭头依次穿过音频、文本和大语言模型图标。右侧用三块底色区分阶段一到阶段三，阶段一标注指令加音频进入大音频语言模型并经组相对策略优化得到 SAFE-RL，阶段二标注思考长度条从长变短并经拒绝采样与长度约束强化学习得到 SAFE-RS 和 SAFE-LS，阶段三标注音频块进入并经组相对策略优化得到 SAFE-Real。这张图的作用是先建立全篇的演进名词，后文所有缩写都回指到这里。

### 同输入同目标的已有路线差在哪里？

如果按同输入、同目标、同监督来划分，已有电信诈骗检测大多属于转写文本加检索增强或意图预警。它们用大语言模型的语义能力跟进最新政策与话术，优点是文本推理成熟、易于更新知识，但缺点是完全丢掉了声学模态。论文引用的 TeleAntiFraud-28k 是一个音频文本慢思考数据集，它提供了 28511 个音频文本对，试图补上多模态缺口，但其监督微调做法没有充分激发推理能力。

大音频语言模型路线包括 Qwen2-Audio、GLM-4-Voice、GPT-4o 和 Step-Audio 等，它们能捕捉语气、情绪与意图，但在诈骗检测上仍是通用模型，论文报告它们容易被背稿式平静欺骗，即文字上是正常客服流程，声音上却缺少应有的情绪变化。SAFE-QAQ 与它们的区别在于用领域化的规则奖励强化学习做对齐，而不是只做 1 次监督微调。

慢思考强化学习路线包括 OpenAI o1、DeepSeek R1 等，它们用蒙特卡洛树搜索或奖励引导生成更长的逐步推理，在数学与逻辑任务上有效，但主要集中在纯文本。论文指出这类方法在音频文本融合上探索不足，且存在过度思考与动态场景低效的问题。本文的定位正是把慢思考搬到音频模态，并用 Long2Short 解决想得太长的问题。

### 三个分类任务如何定义，模型要生成什么？

论文把问题定义为给定音频 u 与文本指令 t，策略模型生成输出 o 等于思考链与结果的二元组。思考链用 τ 表示，结果用 y 表示，y 里同时包含分类依据与最终标签。3 个任务分别是七分类场景识别、二分类是否欺诈、七分类欺诈类型。训练时强化学习阶段只用原始音频与上下文，不依赖人工书写的推理标注，这是为了做数据高效的自我演进。

实时检测是同一个问题的分段版本。把完整通话的轮次记为 u 的 1 到 n，前半记为早期，中间记为后期，最后记为最终期。模型在第 i 轮只看到 u 的 1 到 i，需要先识别所处阶段，再判断当前信息是否足够下结论，足够则提前判定，不足够则请求新音频块，最终期必须给出决策。这种定义把准确率与决策时机绑在一起，后文的阶段奖励就是为此设计的。

举一个教学例子：假设来电自称速递客服谈丢件退款，这只是帮助理解的例子。模型要做的不是匹配退款关键词，而是同时检查声学证据与语义流程是否矛盾，例如对方用标准播音腔催促点击链接，而正常客服不会索取银行账户细节。论文的案例正是丢失包裹退款骗局，后文消融会回到这个样本看推理如何变短但要点更密。

### 三阶段全景如何从一个样本走通到输出？

沿一个样本走一遍有助于记住全景。输入是原始通话音频与任务指令，先进入阶段一的规则强化学习得到 SAFE-RL，它学会写长而细的慢思考；再进入阶段二的 Long2Short 微调，先经拒绝采样得到 SAFE-RS，再经长度约束强化学习得到 SAFE-LS，思考链被压缩但精度保持；最后进入阶段三的实时微调，在音频块上训练阶段感知与提前决策能力，得到 SAFE-Real。骨干始终是 AntiFraud-Qwen2Audio，也就是在 Qwen2-Audio-7B-Instruct 上做过领域监督微调的版本，后续阶段不换数据分布，只换优化目标，以降低阶段性遗忘风险。

下图是方法总览，包含三块虚线框与奖励分支，读图时按阶段一到阶段三的箭头走主路径，再看每块下方挂了哪些奖励。

> **看图路径：** 1. 沿阶段一从左向右看：音频加文本指令进入大音频语言模型，多路采样后经规则奖励再经组相对策略优化得到 SAFE-RL；2. 看阶段二中间的筛选示意：多候选按正确性筛选再按长度选择最短正确项，拒绝长而冗余的推理；3. 看阶段三下方的循环：音频块逐步输入，模型先判阶段再判信息是否充分，不充分则请求新块

[![原论文 Figure 2：Overview of Our Method. Starting from an LALM, we: (i) apply rule-based RL to obtain SAFE-RL with…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/0e4b2bab848b/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/0e4b2bab848b/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of Our Method. Starting from an LALM, we: (i) apply rule-based RL to obtain SAFE-RL with slow-thinking capabilities; (ii) refine it using rejection sampling (SAFE-RS)…”。*

从像素上看，阶段一左上角显示音频加文本指令进入大音频语言模型，多路采样得到多个输出，再经基于规则的奖励算出多个分数，最后经组相对策略优化指向 SAFE-RL，下方挂着深度推理奖励、格式奖励与准确率奖励 3 个色块。阶段二中间显示 SAFE-RL 对同一输入采样多个候选，按正确性与长度筛选，最短正确项被选中并经长度约束强化学习得到 SAFE-LS，下方挂着长度约束奖励、准确率奖励、格式奖励与效率奖励。

阶段三左下显示音频块序列逐步输入，模型先问处于哪个阶段再问信息是否充分，充分则判定否则请求新块，右侧写出阶段奖励的分段定义。这种版式说明 3 个阶段共用同一套准确与格式约束，只在深度、效率与阶段感知上各有侧重。

### 规则奖励与组相对优化各自算什么？

先把白话与英文名对齐。大音频语言模型是大规模音频语言模型，能同时处理声音与文字；组相对策略优化是 Group Relative Policy Optimization，一种不用单独评论家模型的策略优化方法；慢思考是指显式的分步推理。组合机制在下面两个概念桥里分别说明。

**大音频语言模型 × 端到端欺诈检测：** 大音频语言模型负责直接从原始波形中保留语调、情绪和环境声等细粒度听觉表示，端到端欺诈检测负责取消自动语音识别转写再送大语言模型的级联环节，二者搭配的理由是避免转写误差累积并让推理能同时看到说什么和怎么说，组合后新增的作用是模型可以在同一前向过程中对声音证据和语义话术做联合归因。

**慢思考推理 × 规则奖励强化学习：** 慢思考推理负责输出分步的`<think>`思考链再给出`<answer>`结论，让层层伪装的话术被逐步拆开，规则奖励强化学习负责用准确率、格式和深度等可验证规则给每条采样打分并做组内相对优化，二者搭配的理由是不需要训练神经网络奖励模型也能稳定引导长推理，组合后新增的作用是得到能系统捕捉平静语气与紧急意图矛盾的 SAFE-RL。

具体计算上，策略对每个音频指令采样 G 个回答，每个回答得到规则分数，组内相对优势用该分数减组均值再除以组标准差得到。目标函数对每个样本取当前策略与旧采样策略的比率做裁剪，再减去与参考模型的散度惩罚。论文沿用 ms-swift 框架的默认值，裁剪系数为 0.2，散度系数为 0.04，组大小为 9，生成用核采样 top_p 为 0.9、top_k 为 50、温度为 0.9。作者报告若去掉散度惩罚会出现严重不稳定与模式崩溃，因此保留了该默认值。

奖励一共 4 种。准确率奖励检查`<answer>`中最终答案是否正确，权重记为 5。格式奖励检查是否同时存在`<think>`与`<answer>`标签且顺序正确，权重记为 1。深度推理奖励用对数归一化鼓励更长的思考链，分子是思考 token 数加 1 的对数，分母是上限加 1 的对数，再乘以奖励上限，权重记为非监督微调指示函数，即只对非监督微调起点鼓励长思考。阶段奖励用于实时微调，正确识别阶段给正奖励，在最终阶段仍不决策给惩罚，否则为 0，权重记为 5。阶段一总奖励是准确率、格式与深度三项加权，阶段三总奖励是准确率、格式、深度与阶段四项加权。

**阶段感知奖励 × 准确率奖励：** 阶段感知奖励负责奖励正确识别早期、后期和最终阶段并在最终阶段仍不决策时施加惩罚，准确率奖励负责只看`<answer>`中分类结果是否正确，二者搭配的理由是实时场景中答对但答得太晚等于没有止损，组合后新增的作用是让 SAFE-Real 学会在信息不足时请求新音频块、在信息足够时提前判定欺诈，平衡检出率与误报代价。

需要提醒的是，深度奖励对已做过监督微调的模型几乎是常数，因为它们的推理本来就远长于奖励的有效区间。论文因此在主训练中对监督微调起点关闭深度奖励，附录用消融验证打开后精度几乎不变而长度略增，支持了这一安排。

### Long2Short 与实时训练如何构造数据与更新参数？

Long2Short 分两步。第一步拒绝采样微调对每个输入采样 16 个候选，目标分布正比于正确指示乘以长度加 1 的倒数，即正确且越短越好，选中最短正确项组成新数据集做监督微调，得到 SAFE-RS。第二步长度约束强化学习在准确率与格式之外加入效率奖励，对超出阈值的多余 token 做对数惩罚，阈值与上限均取 200，曲率控制取 1000，惩罚幅度上限取 5，效率权重取 1，得到 SAFE-LS。两步都不引入新数据分布，只改变优化目标。

**组相对策略优化 × 拒绝采样微调：** 组相对策略优化负责对同一音频指令采样多个回答并用组内均值方差算优势来更新策略，拒绝采样微调负责从 16 个候选中只保留正确且思考链最短的一条做监督微调，二者搭配的理由是先用强化学习拉出能力上限再用短正确样本把冗余压缩掉，组合后新增的作用是在不明显掉点的前提下把平均思考 token 从 205.76 量级压到 181.33 量级，为后续长度约束强化学习打底。

**长度约束强化学习 × 实时分段检测：** 长度约束强化学习负责在准确率和格式奖励之外加入效率奖励以对数形式惩罚超长思考链，实时分段检测负责把完整通话切成早期、中后期和末期音频块并要求模型判断信息是否足够，二者搭配的理由是既要推理简洁又要在通话进行中尽早决策，组合后新增的作用是得到 SAFE-LS 和 SAFE-Real，前者兼顾精度与延迟，后者在平均 8.98 秒和 1.25 轮时就能拦截。

实时微调把轮次切成早期、后期与最终期，用结构化提示引导模型允许早期判断、后期形成结论、最终期必须决策。训练时同时优化准确率、格式、深度与阶段感知，阶段权重取 5。推理时模型先输出阶段，再输出信息是否充分，充分则直接判定，否则等待下一音频块。这种构造让 SAFE-Real 在只听两轮时也能给出可解释结论，后文案例会展示它如何用 177 个 token 在早期阶段定性。

超参数方面，训练在 4 张 80 GB 的 A100 上进行，全局批量为 12，学习率经网格搜索选为 3e-5。论文报告在合成子集上 1e-5 欠拟合、5e-5 震荡掉点，3e-5 的平均 F1 最高，因此主实验统一用 3e-5。训练框架基于 ms-swift，官方资源状态显示该第三方仓库当前可用，状态码为 200，链接为<https://github.com/modelscope/ms-swift>，可作为复现时的起点核查。

### 数据、基线、指标与硬件条件是否可比？

数据用 TeleAntiFraud-28k 做训练，共 28511 个音频文本对，覆盖 7 类场景与 7 类欺诈类型。评测用分布保持的 TeleAntiFraud-Bench。文本基线用的是该数据集提供的人工校正转写，而不是外部识别输出，这样比较的是模态差距而非转写噪声。基线覆盖专有模型与开源模型，包括 GPT-4o、Gemini-2-Flash、Doubao-1.5、DeepSeek V3 与 R1、GLM-4-Voice、Step-Audio、Qwen2-Audio 系列，以及领域微调的 AntiFraud-Qwen2Audio。

指标分 3 层。分类层对场景、欺诈与类型分别报告加权 F1，再平均为 AVG。推理质量层用 DeepSeek-R1 做评委，在逻辑严谨、实用价值与表达质量上各打 0 到 5 分，加总为 0 到 15 的 SUM，每样本取 3 次独立打分的均值。最终分定义为 0.75 乘 AVG 加 0.25 乘 SUM 除以 15，论文同时保留 AVG 与 SUM 以暴露任务性能与推理质量的权衡。附录报告评委与 5 位反诈专家的秩相关在 0.75 以上，且分数与长度的相关仅 0.18 左右，支持 SUM 不是在奖励啰嗦。

硬件与效率方面，延迟评测在 A100 上用贪心解码测中位与 95 分位延迟及吞吐。论文还定义思考效率 TEM 为 AVG 除以思考 token 数的对数，用于硬件无关地比较推理经济性。实时版另报告平均时长与平均轮次，以及在 10,000 条高风险通话子集上的精确率、召回率、误报率与漏报率，便于理解部署时的 operating point。

### 主结果在什么条件下赢，代价是什么？

比较问题是：在同一评测集与同一三任务平均下，端到端音频慢思考是否同时赢过转写加文本路线与通用音频模型。公平条件是文本基线用人工校正转写，音频模型直接听原声，指标方向都是越高越好。思考效率越高意味着同等精度下 token 越少。下图先看性能与效率的散点，横轴是平均思考 token 数，纵轴是平均性能分。

> **看图路径：** 1. 先确认横轴为平均思考 token 数，纵轴为平均性能分，左上为高效高性能区；2. 找到红色星标的 SAFE-LS 与绿色星标的 GPT4-o，对比垂直方向 7.76 点的性能差距；3. 沿红色虚线看模型演进轨迹：从 AntiFraud-Qwen2Audio 经 SAFE-RL、SAFE-RS 到 SAFE-LS 向左上移动

[![原论文 Figure 4：Performance-Efficiency Trade-off: Scatter Plot of Average Thinking Tokens vs.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/0e4b2bab848b/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/0e4b2bab848b/figure-4.png)

*论文图 4。原论文 Figure 4：“Performance-Efficiency Trade-off: Scatter Plot of Average Thinking Tokens vs.”。*

从像素上看，横轴从左向右 token 增多，纵轴从下向上性能增高。左上绿色框标注更高性能更少 token，红色虚线串起 AntiFraud-Qwen2Audio 到 SAFE-RL、SAFE-RS 再到左上红星的 SAFE-LS，绿色箭头从 GPT4-o 的绿星向上指向 SAFE-LS 并标注 7.76 点。蓝色点为转写加文本路线，绿色点为通用音频模型，红色点为本文模型，右下灰色虚线为趋势线。这说明本文的优化轨迹是先拉高性能再向左压缩 token，打破了随 token 对数增长的扩展趋势。

下表比较去掉音频后的退化，问题是增益是否真的来自声音而非更强的文本推理。表中同时给出领域骨干与最终模型的完整音频版与纯文本版。

| Model | Scene | Fraud | Type | Avg F1 |
| --- | --- | --- | --- | --- |
| AntiFraud-Qwen2Audio | 81.31 | 84.78 | 82.91 | 83.00 |
| w/o Audio (Text-only) | 71.55 | 71.25 | 77.93 | 73.58 |
| SAFE-LS | 84.64 | 89.61 | 88.23 | 87.49 |

表后解释需要同时看到收益与代价。收益是去掉音频后 2 模型在三任务上全面下降，欺诈检测掉得最多，AntiFraud-Qwen2Audio 平均掉 9.42 点，SAFE-LS 平均掉 8.32 点，其中欺诈项分别掉 13.53 点和 12.11 点，支持声音提供了转写之外的互补证据。代价是场景分类上 massive 文本模型仍有优势，论文报告 DeepSeek V3 达 88.53，SAFE-LS 为 84.64，说明语言主导的场景任务上纯文本大模型的规模红利仍在。

下表把最新专有模型纳入比较，问题是面对新一代 Gemini 是否仍保持领先。

| Gemini-3.0-Pro | 83.64 | 81.93 | 86.25 | 83.94 |
| --- | --- | --- | --- | --- |
| Gemini-3.0-Flash | 81.73 | 72.50 | 87.05 | 80.43 |
| SAFE-LS | 84.64 | 89.61 | 88.23 | 87.49 |

表后解释是 SAFE-LS 在场景、欺诈、类型与平均上全面高于 Gemini-3.0-Pro 与 Flash，平均领先更强的 Pro 达 3.55 点，达 87.49 对 83.94。这支持端到端强化学习框架对最新专有系统的有效性，但需注意这仍是同一评测集上的结果，未覆盖极端噪声与新骗术的系统性泛化，后文局限会继续说明。论文还报告 SAFE-LS 在欺诈类型上达 88.23，超过 GPT4-o 的 86.26，而欺诈检测从通用 Qwen2-Audio 的 58.51 经领域微调到 84.78 再经强化学习到 90.20，验证了 3 段各自的增量。

### 拿掉监督微调、拒绝采样与音频会发生什么？

消融问题是每段优化是否必要。论文报告去掉监督微调起点后 SAFE-RL 平均掉 5.68 点到 80.66，推理质量掉 1.87 点到 6.24，加入深度奖励可部分回升到 82.05 与 6.76，但仍明显低于完整版。SAFE-RS 与 SAFE-LS 去掉监督微调也分别掉到 83.59 与 87.13，推理质量同步下降，说明监督微调提供了后续强化学习增强而非替代的基础能力。去掉拒绝采样后 SAFE-LS 从 87.49 掉到 86.31 且推理质量下降，说明先选短正确样本再做长度约束是必要的。

下图回到丢失包裹退款样本，看推理长度与要点密度的变化，左侧为 4 轮对话，右侧为 4 段思考。

> **看图路径：** 1. 先看左侧四轮对话：左侧声道冒充速递客服谈丢件退款，右侧用户从疑问到配合；2. 再看右侧四段推理的 token 长度标注：从 207 经 185 压缩到 107，SAFE-Real 用 2 轮 177 token 提前判断；3. 对比紫色关键推理点：冒充客服、点击链接、标准化无情绪波动语言与平静语气降低警惕的矛盾

[![原论文 Figure 5：Model Output Case Study: Input with Text Instruction and Audio (ASR Results for Clarity, Left),…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/0e4b2bab848b/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/0e4b2bab848b/figure-5.png)

*论文图 5。原论文 Figure 5：“Model Output Case Study: Input with Text Instruction and Audio (ASR Results for Clarity, Left), Reasoning Process of SAFE-QAQ Series (Right).”。*

从像素上看，左侧黄蓝相间的对话块按左 1 到左 4 与右 1 到右 4 排列，内容为丢件、退款补偿、点击链接与添加客服微信。右侧从上到下依次为 SAFE-RL、SAFE-RS、SAFE-LS 与 SAFE-Real，每段下方标注 token 长度与轮次，分别为 207 配 4 轮、185 配 4 轮、107 配 4 轮、177 配 2 轮。紫色高亮集中在冒充客服、索取个人信息与银行账户、点击链接、标准化无情绪波动语言，橙色高亮为最终判定为诈骗。SAFE-LS 用约一半长度保留了核心归因，SAFE-Real 仅用两轮就结合早期阶段与中性语调特征提前判定，说明压缩没有丢掉关键矛盾点。

下表报告延迟与吞吐，问题是 token 减少是否转化为真实时间节省。

| Model | p50 | p95 | Throughput |
| --- | --- | --- | --- |
| SAFE-RL | 1243.9 | 1895.7 | 0.76 |
| SAFE-RS | 1204.0 | 1263.4 | 0.85 |
| SAFE-LS | 916.2 | 1207.8 | 1.10 |

表后解释是 SAFE-LS 中位延迟 916.2 毫秒、95 分位 1207.8 毫秒、吞吐 1.10 样本每秒，相对 SAFE-RL 中位下降约 26.34%，且 95 分位从 1895.7 毫秒大幅收敛，说明长尾过度思考被明显抑制。未胜出项是 SAFE-RS 的中位改进较小，从 1243.9 毫秒到 1204.0 毫秒，说明仅靠筛选不足以彻底解决冗长，还需长度约束强化学习。

下表检验评委分数与客观性能的关系，问题是推理质量分是否只是文风分。

| (a) | Score Accuracy Correlation | (b) Score Length Correlation |
| --- | --- | --- |
| Pearson r = 0.84, p < | 0.001 | 0.19 |
| Spearman = 0.77, p < | 0.001 | 9 |

表后解释是左子图分数与精度的强正相关与右子图分数与长度的弱相关在像素上清晰可辨，论文给出分数与正确性的斯皮尔曼 0.77、皮尔逊 0.84，分数与长度的皮尔逊仅 0.18 到 0.19，支持 SUM 反映的是逻辑与实用价值而非啰嗦。反例是 DeepSeek R1 用 397 以上 token 换取高精度但思考效率仅 16.03，而 SAFE-LS 用约 25.85% 的 token 达到相近或更高精度，说明穷举式长思考在部署成本上不占优。

### 哪些边界没有测，实时版的取舍是什么？

论文明确承认实验范围受限于 TeleAntiFraud-28k 是当前唯一适合训练诈骗检测大音频语言模型的开源数据集，因此对高度多样骗术与严重信道退化的泛化仍需系统验证。附录给出 2297 条生产流量的屏幕共享新骗术的初步结果，精度 87.96、召回 97.30、F1 为 92.39，作为可迁移的初步证据，但作者定性为初步，完整的留一类型重训因成本过高尚未展开。

实时版的取舍是 early 检测优先于精确分型。SAFE-Real 平均时长 8.98 秒，比非实时快 81.4%，平均仅 1.25 轮，场景达 91.40，欺诈保持 88.93，但欺诈类型从 SAFE-LS 的水平下降 12.2% 到 77.56。论文认为在止损场景下先拦停比先分型更重要，这一判断依赖于运营假设，即误报可由人工复核消化，而漏报直接造成资金损失。在 10,000 条高风险子集上 SAFE-LS 召回 98.00%、精确率 88.24%、漏报率 2.00%、误报率约 0.19%，即 143 起欺诈中漏约 3 起，9857 起正常中误报约 19 起，体现了宁可多审也不漏放的设计。

### 复现先做什么，需要哪些信息条件？

复现先固定骨干与数据。骨干是 AntiFraud-Qwen2Audio，即 Qwen2-Audio-7B-Instruct 的领域监督微调版，训练语料在 3 阶段保持一致，只换优化目标。数据用 TeleAntiFraud-28k 的原始音频与上下文做强化学习，不需要推理标注，评测用 TeleAntiFraud-Bench 并保留场景、欺诈、类型的加权 F1 与 AVG。文本基线必须用数据集自带的人工校正转写，以隔离模态差距。

再按顺序跑 3 个阶段。阶段一用组相对策略优化，组大小 9，裁剪 0.2，散度 0.04，核采样 top_p 为 0.9、top_k 为 50、温度为 0.9，奖励权重准确率 5、格式 1、深度按非监督微调指示开启。阶段二先以候选数 16 做拒绝采样选最短正确项做监督微调，再以效率权重 1、阈值 200、上限 200、曲率 1000、幅度上限 5 做长度约束强化学习。阶段三按早期、后期与最终期切分音频块，阶段权重 5，准确率权重 5，提示中要求先判阶段再判信息充分性，最终期强制决策。

代码层面，论文给出仓库链接为<https://github.com/Control-derek/SAFE-QAQ>，训练框架指向 ms-swift 且本次核查该第三方资源当前可用。需要区分代码开源、权重下载与系统可运行：论文报告日均处理超 7 万通的生产管线，涉及运营商中间号隐私保护与级联过滤，实验室复现通常只能跑到 Bench 评测与延迟剖析，无法直接复刻全量生产流量。评委复现用 DeepSeek-R1，温度 0.6、top-p 为 0.95、top-k 为 50，每样本 3 次取均值。

### 何时值得尝试这种做法，还需补哪项验证？

当任务同时满足三点时值得尝试：输入是带口音、情绪与环境声的通话音频，转写错误会伤及关键实体，骗术靠平静语气掩盖紧急索取意图。此时端到端加慢思考的价值最大，因为模型能把说什么与怎么说放在同一推理链里对质。反之，若任务几乎纯靠文本政策理解且音频质量极差， massive 文本模型的规模优势可能更直接，论文中场景分类的对比就是提醒。

复现后还需补两项验证。一是噪声与信道退化下的稳健性，包括重度背景干扰与压缩失真，因为现有评测仍是分布保持的 Bench。二是新骗术的系统性留一泛化，现有屏幕共享结果只是初步，需要覆盖更多未见类型并报告误报与漏报的运营成本。总体上，SAFE-QAQ 报告显示多模态慢思考可以既准又快，但准的边界仍系于数据集，快的收益仍需在真实延迟与人工复核工作量上持续度量。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9d24b0234992/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/acl-2026/9d24b0234992/figure-1.png)

区域 1 · [查看论文原页](https://aclanthology.org/2026.acl-long.1201.pdf#page=4)

另有 63 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://aclanthology.org/2026.acl-long.1201.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 acl-2026 论文汇总](/posts/conference-acl-2026/)
