---
title: "R-AVST: Empowering Video-LLMs with Fine-Grained Spatio-Temporal Reasoning in Complex Audio-Visual Scenarios"
date: 2026-09-11
draft: false
description: "针对未剪辑复杂视听场景中发声可见物体的时空定位问题，论文构建带细粒度时空标注的 R-AVST 并用多维奖励的 GRPO 训练 AVST-Zero，最强证据是在时序推理上达到 47.96% m tIoU 并在时空联合任务上同时提升时间与空间指标，代价是空间绝对精度仍很低且依赖自动标注加人工清洗的流水线。"
tags: ["基准测试", "数据集", "强化学习", "音视频", "音视频问答"]
categories: ["aaai-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:aaai:2026:conference-paper-id:37704"
paper_digest_source_kind: conference
paper_digest_conference_id: "aaai-2026"
paper_digest_conference_record_url: "https://ojs.aaai.org/index.php/AAAI/article/view/37704"
paper_digest_conference_pdf_url: "https://ojs.aaai.org/index.php/AAAI/article/view/37704/41666"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "3f1f86c6c6454967d1b5d0c27b040ac24916ca0f8b126e50f3a27ec5aa96e5db"
paper_digest_api_reader_plan_sha256: "16a34479803c721aef4915e2570a0d42b658d108fda2cceb634e1428415af4a6"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "432f29cf31a4b1f8a822f0efd2543287da4ac18ff57c28b522b4a13dcb6b7ce5"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "f318905f63116c60af3fd6fb42e6b4ffa222569c2fa6eb5fc048c76fea1af395"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "d36c1fbe0fd6f4b2f72ec8f8572da2b9b56db8ff14444046774cbd3728032614"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "72b30c2bb84c06494b272c6b2ce5d0f7ec0e47d9e6105a2efd00773e2b108608"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.av-question-answering","label":"音视频问答"}]
paper_digest_primary_task: "音视频问答"
paper_digest_primary_method: "强化学习"
paper_digest_score: 6.4
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 在又听又看的长视频里找准谁在响、何时响、在哪里：R-AVST 与 AVST-Zero

> 英文题目：*R-AVST: Empowering Video-LLMs with Fine-Grained Spatio-Temporal Reasoning in Complex Audio-Visual Scenarios*

> 会议身份：`conference:aaai:2026:conference-paper-id:37704`


> ✅ 来源为官方会议 PDF；可重放的表格、公式文本与 Figure 像素已按 PDF 抽取结果绑定，未成功恢复的结构不作推断。

> 会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37704) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37704/41666)

标签：#基准测试 #数据集 #强化学习 #音视频 #音视频问答

评分：**6.4/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Zhu Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Tiantian Geng：机构信息未能从会议 PDF 纯文本可靠映射
- Yangye Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Teng Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Ping Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Feng Zheng：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

输入为未剪辑音视频与指称对象的自然语言问题，输出为发声且可见的时间段与帧级边界框，难点在于多人、多事件与重叠声音下必须联合利用听觉与视觉线索定位目标。构建链先以大模型从事件描述抽取名词对象并标注可听可见属性，其属性化对象列表进入自动空间标注。再用接地分割模型生成时段内逐帧框并经人工清洗得到高质量时空真值，其问答对按时间、空间与联合三任务模板生成。模型链对每题采样多回答并用格式、对象语义、时间交并比与空间交并比四维加权奖励做组相对策略优化，直接更新策略而无需中间监督。关键机制差异是将奖励按任务解耦使时间与空间误差分别回传，避免纯监督微调对噪声框过拟合，因而更适合细粒度联合推理。在R-AVST测试集下，AVST-Zero的指标m tIoU为47.96%，高于Qwen2.5-VL(7B)的36.05%。该结论适用边界限于中等时长YouTube类音视频事件，长尾类别与强噪声场景尚未验证，硬件为四个NVIDIA RTX A6000 GPU上训练单轮。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，读完要能复述什么？

本文的输入是未剪辑的真实世界视频及其伴随音频，视频中包含一个到 3 个音频视觉事件，事件描述来自 UnAV-100 的原始 YouTube 视频与事件字幕。目标不是给整段视频打一个分类标签，而是对发声且可见的物体做细粒度推理：它在何时发声且可见，它在给定时间窗内的空间框在哪里，以及同时回答何时加在哪里。研究生读完应当能复述三件事：数据集如何从过滤、字幕分析、自动框标注、问答生成、人工质检 5 步得到；3 个任务的问法与答案格式如何区分时间、空间、时空。

AVST-Zero 如何用组内比较的强化学习直接优化格式、物体、时间、空间 4 个可计算奖励。需要保留的关键信息是规模与划分、奖励定义、训练基座与实验条件，修辞性判断不进入复述。资源状态方面，本次没有发现来源绑定且完成验证的开源资源，因此不能声称代码、模型或数据已公开，只能按论文文字讲方法与数据构造。

### 已有路线在时间和空间上各缺了哪一块？

路线 1 是只做时间理解的音频视觉数据集。论文点名的 AVE、UnAV-100、PU-VALOR 都引入了音频视觉信息，但主要做时间维度的定位，没有对可听物体的空间属性做标注。这意味着模型可以说出某段时间有吉他声，却说不出吉他在画面哪一格、跟随是否稳定。路线 2 是做时空定位但缺少真实音频视觉动态的视觉定位数据集。VidSTG、HC-STVG、V-STaR 提供时间和空间标注，但对象种类有限或缺少真实音频视觉内容，BOSTVG 虽有多目标但视频短，AVSBench、VPO、LU-AVS 关注可听物体的空间分割却忽视时间维度。

路线 3 是视频大模型的时空建模与强化学习增强。LLaVA-ST、GroundingGPT、Grounded-VideoLLM 扩展了时空能力但依赖大量高质量标注；VideoChat-R1、Video-R1、Omni-R1 开始用 GRPO 做强化微调，但奖励设计对时空推理覆盖不足，也没有为复杂音频视觉场景定制任务。本文的位置是同时补 2 块缺口：在数据侧给出覆盖 100 类事件的细粒度时空标注，在模型侧给出针对视听时空任务的多维奖励。

### 三个推理任务到底让模型回答什么？

论文把评估拆成 3 个任务，问法用 when、where、what 加以区分。音频视觉时间推理的输入是已知又可见又可听的物体名，问题是该物体何时发声且可见，答案是一个时间区间，例如竖琴在[0.0, 27.0]。音频视觉空间推理的输入是一个给定时间区间，问题分为 2 个分支：一是该区间内哪些可见物体发声且它们在哪里，二是哪些静音但可见的物体在哪里，答案是物体名加该区间内逐帧或抽帧的边框。

音频视觉时空推理的输入仍是已知可见可听的物体，但要求同时输出时间区间和该区间内的空间框，更接近人同时获取何时与何处的感知过程。3 个任务共用同一套底层真值，即事件级时间边界加帧级边框加物体听觉视觉属性，只是提问时遮住不同部分让模型补全。

图 1 所在小节的前导读需要说明该图把长视频波形、事件横条与 3 类问答并置，是理解任务切分的关键示意图，下段紧接对该图的逐项解读。

> **看图路径：** 1. 先看顶部胶片加波形加三条事件横条，确认是同一长视频内先后出现竖琴、男声、女声；2. 再看中部橙色时间问答只输出区间，绿色空间问答给定区间再问物体加逐帧框；3. 最后看底部蓝色时空问答同时要求输出 When 区间和 Where 逐帧框

[![原论文 Figure 1：Unlike previous datasets, R-AVST focuses on spatio-temporal reasoning in complex audio-visual…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/faf140c9981a/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/faf140c9981a/figure-1.png)

*论文图 1。原论文 Figure 1：“Unlike previous datasets, R-AVST focuses on spatio-temporal reasoning in complex audio-visual scenes of untrimmed videos, offering fine-grained temporal bound- ary and spatial…”。*

图 1 用一个包含竖琴演奏、男人说话、女人说话的长视频把 3 类问法并置。顶部可以看到波形与 3 条事件横条在时间上部分重叠，说明未剪辑视频需要先切分时间再定位空间。中部时间问答只返回区间，空间问答先给定 29.549 and 42.17942 这样的区间再返回物体与逐帧框，底部时空问答同时返回 When 区间与 Where 逐帧框。这种并置的教学价值在于让初学者一眼看清时间任务考查区间重叠，空间任务考查给定窗内的框准度，时空任务考查两者的联合，复述时不要把空间任务误说成也要预测时间。

### 从一条字幕到一道可评分问答要走哪五步？

跟着一个样本走完全程有助于理解全景。假设输入是一段网球视频与一句事件字幕，先经过数据过滤决定这段视频是否保留，再用大模型分析器从字幕中抽出网球拍与老人等名词并标听觉视觉属性，然后用 Grounded-SAM2 在事件时间段内的帧上按文本提示自动画框，再按任务模板把时间标注与空间标注转成问答对，最后经人工检查删掉标注错或问答错的视频。输出是带有时间区间、逐帧框、物体属性标签的问答样本，可直接用于评测与强化学习奖励计算。

5 个步骤的安排理由是成本与质量的折中：过滤保证事件占比与时长分布可用，语言模型分析解决听觉属性不可见的问题，自动框解决逐帧手标成本问题，程序化问答生成保证大规模与格式统一，人工质检兜底自动环节的错误。

**GPT-4o-mini 分析器 × Grounded-SAM2：** GPT-4o-mini 分析器负责从事件描述句中抽取名词性关键主体，并按提示标为 visible&audible 或 visible-only，例如把拉竖琴的人标为又可见又可听；Grounded-SAM2 负责把这些文本提示作为输入，在事件时间段内的逐帧上自动产生边框。前者分工是解决听觉属性无法直接从像素看出来的问题，后者分工是解决大规模逐帧手画框成本过高的问题，两者串起来才得到可用于问答生成的时空真值。

> **看图路径：** 1. 先沿下排五个箭头走完过滤、字幕分析、框标注、问答生成、质检的主路径；2. 再看上排三个任务卡片如何把同一视听输入分别变成 When、Where、When+Where 问法；3. 最后核对 Caption Analysis 框中网球拍与老人的可见属性标注差异

[![原论文 Figure 2：Data generation pipeline of R-AVST.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/faf140c9981a/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/faf140c9981a/figure-2.png)

*论文图 2。原论文 Figure 2：“Data generation pipeline of R-AVST. The tasks are explicitly designed to capture both spatial and temporal aspects of complex audio-visual scenes.”。*

图 2 上半部分展示任务定义如何从同一视频加音频分叉出 3 个问答卡片，下半部分展示 5 步流水线的输入输出。上排时间卡片答案只有一个区间，空间卡片区分静音可见与发声可见两问，时空卡片同时有 When 与 Where。下排从左到右依次是时长与事件数与事件占比过滤、字幕加提示进入大模型分析器得到关键主体、Grounded-SAM2 输出边框、基于可听可见标签生成带标签的问答、人工检查标注与问答准确性。初学者复述时要强调过滤阈值、分析器提示、自动框工具、问答标签是 4 个可核对的动作，而不是笼统说数据是爬来的。

### 过滤、分析与自动框各自做了什么具体动作？

数据过滤有 3 个可执行动作。第一是按时长分组为短 0 到 20 秒、中 20 到 40 秒、长 40 到 60 秒，排除极短片段并合并重叠事件。第二是把每视频事件数限制在至多 3 个，并保持含 1、2、3 个事件的视频分布均衡，便于场景级评估。第三是删掉事件占总时长比低于 0.08 的视频，保留有意义事件占比较大的样本，最终得到 5237 段高质量视频。字幕分析的具体动作是用 GPT-4o-mini 作为分析器，以名词为中心抽取物体，并用定制提示要求按标准化格式标注每个物体的听觉与视觉属性。

论文强调在提问时明确可听性的定义以提高准确性，例如银色帆船句中把一群人标为可见且可听，把帆船标为仅可见。最终共识别 27253 个物体，其中 50.88% 标为可见且可听。边框标注的具体动作是取出每个事件对应的帧，用字幕分析得到的物体信息构造文本提示，送入 Grounded-SAM2 做逐帧细粒度标注，避免大规模视频的手标成本。

问答生成的具体动作是按任务抽取物体标签并套用模板，时间问法问何时发声且可见，空间问法给定起止时间再分发声可见与静音可见两支提问，时空问法同时问何时与何处，答案用统一格式并按问题类型带不同标签。

**发声可见物体 × 静音可见物体：** 发声可见物体负责界定又被看到又发出当前事件声音的目标，是 3 类任务中需要给出时间段和边框的核心；静音可见物体负责刻画同一时间窗内看得见但不是声源的干扰物，只在空间推理任务中被提问。两者搭配的理由是真实场景里声源和非声源常常同框，只有同时标注两类才能让模型学会用声音区分找谁，而不是看见人或乐器就框。

**时间定位 × 空间定位：** 时间定位负责输出发声可见区间 Ipred 与真值 Igt 的重叠程度，用 IoU 衡量何时在响；空间定位负责在重叠时间内的每一时刻输出预测框 Bpred 与真值框 Bgt 的 2 维 IoU 并取平均，衡量在哪里。两者搭配是因为只对时间会导致框飘，只对空间会把静音时刻也框进来，时空联合任务要求先对齐时间再在对齐段内算空间。

两组概念桥放在这里是因为只有理解物体属性划分与时空评价拆分，才能看懂为什么空间任务要特意考查静音可见物体，以及为什么时空奖励要先算时间交并比再在重叠段内平均框交并比。

### 没有中间步骤监督时策略如何被更新？

AVST-Zero 的训练不是常规监督微调加大量人工链条标注，而是直接用规则可算的奖励做组相对策略优化。用白话说，对于同一个问题，策略模型先产生一组候选回答，例如产生 6 个不同的时间区间加边框加物体名组合，然后用奖励函数给每个候选打分，再在组内比较谁相对更好，用相对优势去推动策略向高分方向走，同时用与参考模型的 KL 散度约束走得不要太远。论文报告基于 Qwen2.5-VL 7B 与 Qwen2.5-Omni 7B 分别微调出 AVST-Zero 与 AVST-Zero-Omni 两个变体，在四块 NVIDIA RTX A6000 上训练一个轮次，每设备批量为 1，组生成数为 6。

奖励由四部分加权求和：格式奖励检查是否正确包含并匹配任务要求的标签对，物体奖励用 Word2Vec 计算预测物体名与真值物体名的余弦相似度并按阈值给 0 或 1，时间奖励计算预测区间与真值区间的交并比，空间奖励在重叠时间段内对每时刻的 2 维框交并比取平均。总奖励写作各分量乘以权重之和，其中格式权重恒为 1，其余权重按任务类型设置。

论文未报告阈值与各任务权重的具体数值、优化器与学习率、KL 系数与裁剪阈值的取值，这些是复现时需要补的缺项，不能从模型名字推定。

**GRPO × 多维奖励：** GRPO 负责在没有中间步骤监督的情况下，对同一问题采样一组输出并在组内比较相对优劣来更新策略，用 KL 项约束偏离参考模型；多维奖励负责把格式、物体语义、时间 IoU、空间 IoU 分别打分再加权求和，给出组内比较用的标量 r。两者搭配的理由是时空推理的对错是规则可算的，不需要学一个价值网络，用多维奖励直接把时间准不准、框准不准、名字对不对拆开反馈给 GRPO。

> **看图路径：** 1. 先沿 Question 加 Video 进入 Policy Model 再产生 O1 到 OG 的主路径向下看；2. 再看右侧 Reference Model 用 KL 虚线约束 Policy Model 的位置；3. 最后看 Reward Function 右侧分出的四个虚线框如何汇入同一奖励再做组内计算

[![原论文 Figure 4：Model architecture of our AVST-Zero model.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/faf140c9981a/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/faf140c9981a/figure-4.png)

*论文图 4。原论文 Figure 4：“Model architecture of our AVST-Zero model. The multi-dimensional reward design allows AVST-Zero to per- form exceptionally well in spatio-temporal reasoning tasks.”。*

图 4 把上述过程画成自上而下的闭环。顶部问题与视频进入策略模型，向下产生 O1 到 OG 一组输出，再进入奖励函数得到 R1 到 RG，再经组计算得到 A1 到 AG，最后沿左侧 GRPO 箭头回推更新策略模型。右侧参考模型经 KL 虚线约束策略模型，奖励函数右侧分出格式、物体、时间、空间 4 个虚线框。初学者应当沿着主路径先确认组内比较发生在奖励之后、更新之前，再确认 4 个奖励是并列输入到同一奖励函数，而不是 4 个独立模型。

### 在什么数据划分与指标下比较，方向如何判定？

数据划分按论文文字为训练 4171 段、测试 1066 段视频，对应 6533 与 1633 道问答。按任务拆分，训练集含时间 2663、空间 2666、时空 1204 问，测试集含时间 663、空间 664、时空 306 问。视频平均时长 42.17 秒，总时长超过 220833 秒，事件类别覆盖 100 类，图 3 展示了类别时长、视频时长、每视频事件数与词云分布。比较对象包括 Qwen2.5-VL、Qwen2.5-Omni、Video-LLaMA3、GroundingGPT、InternVL2.5、Video-R1、VideoChat-R1 等基线，以及本文的两个变体，评测在 R-AVST 测试集上进行。指标方向是越大越好：时间维用 m tIoU 与 R1@0.3、0.5、0.7，空间维用 m vIoU 与 AP@0.3、0.5，物体维用准确率，时空任务同时报告时间与空间两套。

需要区分百分点与相对百分比：论文说的时间准确率从 48.17% 降到 46.67% 是 1.5 个百分点的下降，不是 1.5% 的相对下降。硬件与训练预算按报告为 4 卡 A6000、单轮次、组大小 6，推理开销、延迟、输出帧率未报告，不能承诺改善。

**m tIoU × m vIoU：** m tIoU 负责衡量预测时间区间与真值区间的交并比在测试集上的平均，回答时间找得准不准；m vIoU 负责衡量在重叠时间上逐帧边框 IoU 的平均，回答位置跟得紧不紧。两者搭配是因为时空任务必须同时看时间召回和空间跟随，只看一个会掩盖另 1 维的失败，论文因此在时空任务中同时报告 m tIoU 和 m vIoU。

该概念桥放在实验条件节是因为只有先固定 m tIoU 管时间、m vIoU 管空间，才能在后文结果表中正确归因哪个变体赢在时间、哪个赢在空间。

### 主结果显示谁在时间上赢，谁在空间上赢？

先提出比较问题：在同一 R-AVST 测试集与同一指标定义下，AVST-Zero 及其 Omni 变体是否在 3 类任务上同时优于可运行的视频大模型基线，时间与空间的收益是否一致。公平条件是所有模型都在测试集的同类问答上评分，指标方向均为越大越好。下表先整理数据集规模以确认评测基础，再整理主结果的关键数字，数字与单位保留原文写法，裸值不擅自加百分号，带百分号的保留原精度，千分位逗号保留。

| 条件 | 指标 | 训练划分 | 测试划分 | 说明对象 |
| --- | --- | --- | --- | --- |
| R-AVST 全集 | 5,237 videos, 27,253 objects, 8,166 QAs | 4,171 videos, 6,533 QAs | 1,066 videos, 1,633 QAs | 未剪辑复杂视听场景 |
| 任务问答分布 | temporal / spatial / spatio-temporal | 2,663 / 2,666 / 1,204 questions | 663 / 664 / 306 questions | 3 类任务均衡分布 |
| 物体属性与时长 | 50.88% labeled in visible&audible, 42.17 seconds | 来自字幕分析与时长统计 | 同左 | 发声可见占比与平均时长 |
| 训练预算 | four NVIDIA RTX A6000 GPUs, single epoch, group 6 | Qwen2.5-VL 7B / Qwen2.5-Omni 7B | R-AVST 测试集 | 2 个可运行变体 |
| 主结果锚点 | 47.96% m tIoU, 46.04% m tIoU, 8.59% m vIoU | 时间任务最优 | 时空任务最优 | AVST-Zero |

表后解释需要同时讲收益与代价。报告显示 AVST-Zero 在音频视觉时间推理上以 47.96% m tIoU 领先，在时空推理上以 46.04% m tIoU 与 8.59% m vIoU 显著更好，在空间推理上以 3.12% AP@0.3 略超其他模型但 m vIoU 相近。AVST-Zero-Omni 在物体与空间维更高，但在时间维更差，论文解释为基座的音频视觉联合感知强而时间感知相对弱，这支持时间与空间能力可分离的判断。限制是空间绝对值仍然很低，m vIoU 个位数意味着框跟随远未解决；同时未胜出项明确存在，例如 VideoChat-R1 在部分 R1@0.7 上仍有竞争力，不能说全面碾压。

图 5 所在小节的前导读需要说明该图用 4 帧连续画面与 3 组模型回答对比空间跟随效果，是理解稠密框与稀疏框差异的关键定性证据，下段紧接对该图的逐项解读。

> **看图路径：** 1. 先看顶部四帧胶片中绿、蓝、红、黄四色框的包含关系和漂移程度；2. 再对比中部三条回答在物体词相同情况下 where 框坐标的稠密程度差异；3. 最后确认 AVST-Zero 条目标注为 A young girl 且给出从 0 到 30 的连续帧框

[![原论文 Figure 5：Qualitative results. For the bounding boxes in the video: green denotes the ground truth, blue…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/faf140c9981a/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/aaai-2026/faf140c9981a/figure-5.png)

*论文图 5。原论文 Figure 5：“Qualitative results. For the bounding boxes in the video: green denotes the ground truth, blue comes from VideoChat-R1, yellow from Qwen2.5-VL, and red from our AVST-Zero.”。*

图 5 用一个 0.0 and 59.9 找发声可见女孩的例子展示空间差异。顶部 4 帧中绿色为真值，蓝色为 VideoChat-R1，黄色为 Qwen2.5-VL，红色为 AVST-Zero，可以看到黄色框稀疏且偏小，蓝色框已找对女孩但仍有偏移，红色框更贴近绿色真值。下部 3 条回答都给出女孩，但 Qwen 只给 2 帧的占位坐标，VideoChat-R1 给出重复的固定坐标，AVST-Zero 给出从 0 到 30 的连续帧框且物体描述更具体为 A young girl。该图支持空间奖励带来更稠密更贴合的跟随，但仍是单样本定性展示，不能推广为全测试集每帧都如此。

### 拿掉时间或空间奖励后哪块指标先掉？

消融在 3 类任务比例 1 比 1 比 1 的子集上进行，比较问题是 4 个奖励中时间与空间分量是否各自对应时间与空间指标。公平条件是同一子集、同一基座、只开关某一奖励。下表用原文连续句覆盖的数字整理消融与监督微调对照，保留原文的任务缩写含义：AVTR 为时间推理，AVSR 为空间推理，AVSTR 为时空推理。

| 条件 | 时间指标 | 空间指标 | 时空时间 | 时空空间 | 对照含义 |
| --- | --- | --- | --- | --- | --- |
| 训练预算 | 1 epoch, batch 1, group 6 | 4x A6000 | 同左 | 同左 | 可运行成本 |

表后解释要讲交叉效应与反例。报告显示去掉时间奖励后时间准确率从 48.17% 降到 46.67%，去掉空间奖励后空间 m vIoU 从 4.62% 降到 3.28% 且时空空间从 10.87% 降到 9.23%，支持奖励与对应维度对齐的判断。同时观察到时空维度的相互依赖导致交叉影响，例如去空间奖励也拉低时空时间到 44.29%。反例是去掉某奖励后物体准确率反而升到 23.95% 与 23.17%，高于全奖励的 20.72%，说明单看物体准确率会误判，需要结合时空指标一起看。论文还报告直接用强化学习比简单监督微调在三任务上收益更大，这支持细粒度任务更适合规则奖励的解释，但该结论限于所用子集与基座，待在更大划分上验证。

### 哪些边界没有测，哪些数字不能当承诺？

第一，未评测边界包括极短视频、超过三事件的密集场景、事件占比低于 0.08 的稀疏场景，这些在过滤阶段已被删掉，因此结论不能推广到这些被排除的分布。第二，空间指标绝对值低且部分 AP@0.5 接近零，说明在严格阈值下几乎没有可靠框，不能把 AP@0.3 的微弱领先解读为空间问题已解决。第三，自动标注依赖 Grounded-SAM2 与大模型分析器，即使经过人工清洗，仍可能残留系统性偏差，例如小目标、遮挡、重叠说话人的框质量，论文未给出误标率与清洗通过率，不能承诺数据零噪声。

第四，成本只报告训练侧的卡数、轮次与组大小，未报告推理延迟、显存占用、输出帧率，也未做统计显著性与多次随机种子聚合，不能把单次最优当成稳定收益。第五，权重、代码、数据的可运行状态本次未能确认可达，复现前必须先核对官方链接当前是否可用。

### 要复现先做什么，需要补哪项验证？

先做数据复现：从 UnAV-100 取原始视频与事件字幕，按时长分组、事件数至多 3、事件占比不低于 0.08 共 3 条规则过滤并记录删掉的比例；用 GPT-4o-mini 按名词抽取加听觉视觉属性标注，保存提示词与原始输出以便核对可听性定义；用 Grounded-SAM2 按事件帧加文本提示生成逐帧框，保存提示构造方式与抽帧率；按 3 类模板程序化生成问答并保留标签格式，再做人工抽检并记录通过率与删片原因，最终核对是否得到 5,237 段、27,253 个物体、8,166 问答以及训练测试的视频与问答数。

再做模型复现：以 Qwen2.5-VL 7B 或 Qwen2.5-Omni 7B 为基座，实现格式、物体、时间、空间共 4 类奖励与加权求和，保持格式权重为 1，其余权重按任务设置但需先补论文未给的具体值；按组大小为 6 采样并做组内相对优势更新，保留 KL 约束，训练 1 个轮次。验证要补 3 项：同一测试集上固定随机种子的多次运行以看 m tIoU 与 m vIoU 的波动；去掉单奖励的完整测试集消融而不仅是子集；对空间严格阈值与长视频分段的误差分析，区分是时间切错还是框跟丢。

### 何时值得尝试这个方案，记住哪条主线？

当你的视频同时有声音与画面且需要回答谁在响、何时响、在哪里这三问时，值得尝试 R-AVST 的任务划分与问答模板，因为它把时间区间、给定窗内找框、同时找时间加框拆成可独立评分的三件事，避免用一个笼统的理解分数掩盖短板。当你没有中间推理链监督但对错可用规则计算时，值得尝试 GRPO 加多维奖励，因为时间交并比、框交并比、物体名相似度、格式匹配都是可程序化打分的信号，组内比较可以直接利用这些信号。

主线可以记成一句话：先用语言模型补听觉属性、用分割模型补空间框、用程序模板补问答规模，再用可计算的多维奖励把策略推向时间准、框跟得紧、名字对、格式合规。待验证的是空间跟随的绝对精度、Omni 基座的时间短板来源、以及在被过滤掉的稀疏与密集场景上的泛化，这些需要在复现时补上测量后再做取舍。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 aaai-2026 论文汇总](/posts/conference-aaai-2026/)
