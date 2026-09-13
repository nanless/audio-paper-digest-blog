---
title: "HumanVBench: Probing Human-Centric Video Understanding in MLLMs with Automatically Synthesized Benchmarks"
date: 2026-09-13
draft: false
description: "论文针对视频多模态大模型看人不细的问题，用两条自动标注与组装干扰项的流水线合成 16 个细粒度选择题，并在 30 个模型与人类基线上显示情绪与声画对齐仍远落后于人，且开放流水线把人工从出题转为验题。"
tags: ["基准测试", "基准设计", "模型评估", "音视频", "音视频问答"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Zhou_HumanVBench_Probing_Human-Centric_Video_Understanding_in_MLLMs_with_Automatically_Synthesized_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Zhou_HumanVBench_Probing_Human-Centric_Video_Understanding_in_MLLMs_with_Automatically_Synthesized_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhou_HumanVBench_Probing_Human-Centric_Video_Understanding_in_MLLMs_with_Automatically_Synthesized_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "21ff8ea0eeb59132ea84aba7b78bb596887ed129a3da6cb3d4e5540911c87732"
paper_digest_api_reader_plan_sha256: "ef6eb523cbdb3587d7f9ff25a103465da2bce017296df730364814d7f4b74d10"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d9ec52f6c62fcf1662b8b89c621dfbc456ac77a2539fef1537a70c30d5b03e91"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8a6ccb33fc849760b8d1c8946939b235bfc20562cea444f9f8baef00081772fd"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "4070b56aeb915a369375f8f07c439ec797df41e093447c349d7bd651ccb8c3e1"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "0f8cdec0c82858448513a986ead122a5330d7f525a01465ff790d811af858200"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.benchmark","label":"基准测试"},{"facet":"method","id":"method.benchmark-design","label":"基准设计"},{"facet":"research_focus","id":"research_focus.evaluation","label":"模型评估"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.av-question-answering","label":"音视频问答"}]
paper_digest_primary_task: "音视频问答"
paper_digest_primary_method: "基准设计"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 从标注到干扰项：HumanVBench 用人为可核查的流水线逼问视频模型的看人能力

> 英文题目：*HumanVBench: Probing Human-Centric Video Understanding in MLLMs with Automatically Synthesized Benchmarks*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Zhou_HumanVBench_Probing_Human-Centric_Video_Understanding_in_MLLMs_with_Automatically_Synthesized_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhou_HumanVBench_Probing_Human-Centric_Video_Understanding_in_MLLMs_with_Automatically_Synthesized_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhou_HumanVBench_Probing_Human-Centric_Video_Understanding_in_MLLMs_with_Automatically_Synthesized_CVPR_2026_paper.pdf)

标签：#基准测试 #基准设计 #模型评估 #音视频 #音视频问答

评分：**6.3/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准

## 👥 作者与机构

- Ting Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Daoyuan Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Qirui Jiao：机构信息未能从会议 PDF 纯文本可靠映射
- Bolin Ding：机构信息未能从会议 PDF 纯文本可靠映射
- Yaliang Li：机构信息未能从会议 PDF 纯文本可靠映射
- Ying Shen：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

以人为中心视频理解要求模型同时解析内在情绪与外在表征，并实现语音与唇动视觉的精确对齐，输出多选题答案，难点在于表情细微、时序变化快且多说话人配音干扰大。作者先用以人为中心视频标注流水线从Pexels版权免费视频与公有领域电影素材切分场景，经时长、运动幅度与人脸占比过滤得到以人为中心片段，再提取人体轨迹、人口属性、外观行为、面部表情、事件氛围及语音转写、语音情绪等密集多模态标签；再由干扰项内含问答合成流水线对计数、时刻与匹配类任务按规则出题，对6类描述性任务用红框或人脸裁剪构造标记视频并调用视频大模型生成描述，经大语言模型抽取属性并均衡分布后生成题干，再用Gemini、VideoLLaMA3、ShareGPT4Video等集成投票排序候选答案，首位为正确答案，其余语义相异者直接保留为干扰项，语义重复者做任务特定扰动，最后经答案泄露过滤、乱序与人工校验形成基准。与依赖全人工出题或复用旧标注的已有基准相比，该机制把模型典型误判转化为高迷惑性选项。在包含2475道题目的16任务评测中，Gemini-2.5-Pro总平均准确率为73.4%，仍低于人类基线88.6%，差距集中在情绪感知与声画对齐。该结论仅适用于短片段N选1多选感知层评测，未验证长时叙事推理与开放生成能力。原文未披露训练与部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要保留哪些可核对信息？

本文解读的对象是 1 篇以视频为输入、以人为中心的评测论文。输入是原始视频像素与伴随音频，目标是判断多模态大语言模型是否具备接近人的基础感知能力。论文把这种能力拆成可出题的动作：识别情绪、识别人物、分析行为、对齐语音与画面。

初学者需要先建立一个白话概念：多模态大语言模型是指能同时接受文本、图像、视频帧乃至音频并用语言作答的模型，英文为 Multimodal Large Language Models，后文简称 MLLM。视频 MLLM 通常先对视频做等间隔采样得到若干帧，再与文本问题一起送入模型，最后从给定选项中选出一个字母。输出是选择题准确率，不是开放式打分。

解读全程只使用论文正文给出的任务定义、流水线步骤与评测数字，不引入外部经验判断。必须保留的信息包括任务划分依据、两条流水线的输入输出、人工核验比例、评测的模型范围与人类基线，以及关键数字的比较条件与指标方向。

论文还提到数据来源与后处理去泄漏操作，这些决定了数字能否复述，同样需要保留。本文不声称代码、模型或数据当前可下载，因为本次未获得可验证的资源可达状态，只按正文描述其设计与流程。

### 已有视频评测走了哪几条路线，各自缺了什么？

论文把相关工作按输入、目标与监督方式分成 3 类。第一类是通用视频理解评测，以 Video-MME 等为代表，输入是开放域视频，目标是测时间推理与场景理解，监督是人工撰写或整理的多选题。这类工作包含少量人物内容，但没有把情绪、身份、行为与声画对齐组织成系统的诊断维度。

因此这类评测难以定位是情绪看错还是人找错，只能给出总体分数。第二类是人类可观测行为评测与情感数据集，前者如动作识别与姿态估计，后者如 IEMOCAP、MELD 与 VEATIC。它们的输入多为剪辑好的片段，目标是分类固定情绪标签或识别动作，监督依赖历史人工标注。

论文指出这类工作缺少情绪变化、强度比较与跨人比较等多维任务，也缺少与语音对齐的考察。第 3 类是高层社会智能评测，如 Social-IQ 与 TVQA，目标是叙事推理与意图推断，往往把感知与推理混在一起考，不能单独回答基础感知是否过关。

在问答构建方法上，论文归纳为全人工撰写、复用已有数据集标注、以及用商用大语言模型直接生成问答。复用路线如 ActivityNet-QA 依赖已有时序标注，难以从野外原始视频从零扩展。自动生成干扰项多基于语义相似度或单个微调模型，缺少利用视频模型真实失败模式的机制。

HumanVBench 的定位是补基础感知层，用可复用的算子先做多模态标注，再用模型集成错误做干扰项，人工只做最后仲裁。这种分工把扩展性、难度与可靠性分开处理。

### 16 个任务如何从一个看人样本展开？

论文从人类观察者的习惯出发，把任务按可观察性分成两大枝。内层情绪对应不易直接看见的状态，需要综合表情、身体与言语线索。外在表现对应可定位、可计数的身份、动作与声画同步。

先沿一个样本走完流程有助于理解。假设输入是一段 3 人聚会视频，目标人物被红框标出。第一步是表示：系统要给出该人物在连续帧中的边界框序列、人脸裁剪、外观描述与面部表情描述，以及音频中的说话内容与声纹属性。

第二步是组件：不同任务读取不同的标签子集。情绪识别读取面部描述，人物定位读取外观与位置，行为分析读取动作时序，声画匹配读取视觉人口属性与声音人口属性。第三步是目标与输出：所有任务都收敛为 N 选一的选择题，模型输出选项字母，用准确率衡量，准确率越高越好。

**内层情绪 × 外在表现：** 内层情绪指不易直接观察的情感状态，需要从表情、语言和上下文推断，分工是考抽象解读；外在表现指可直接定位的身份、动作与声画对应，分工是考可观测定位与对齐；二者搭配的原因是只测其一会漏掉另一类失败，组合意义是用同一批视频同时诊断感受与看见的能力。

具体到 16 个任务，情绪感知有 4 个：情绪识别判断最贴切的情绪描述，情绪时序分析跟踪情绪随时间的变化。态度识别判断对事件的积极消极中性立场，情绪强度比较区分不同人的强度。

人物识别有 4 个：文本到人按文字描述找人，人到文本为目标人物选择正确文字描述。人数计数统计不同个体，外观时间检测定位指定人物出现的时间。行为分析有 4 个：行为时序分析跟踪行为变化，行为因果分析解释行为原因。

指定时刻动作识别给定时间点的动作，特定动作时刻定位动作发生的时刻。跨模态语音视觉对齐有 4 个：音画面部说话人匹配按声音性别年龄找对应人物，主动说话人检测判断当前谁在说话。音画对齐检测判断唇动与音频是否同步，语音内容匹配考转写或唇读。

论文在总览图中为每个任务标注了题量，全库共 2475 题，题目数量按任务分布，这是复述时核对覆盖面的依据。

### 两条流水线如何把原始视频变成有难度的选择题？

论文的方法全景由两条流水线组成，不包含神经网络权重训练，而是数据构建方法。第一条是人类中心视频标注流水线，输入是原始视频集合，输出是带 11 类标签的视频。第二条是含干扰项问答合成流水线，输入是带标签视频，输出是经人工核验的多选题。

两条流水线通过标签衔接，前者备料，后者出题。视频来源主要是 Pexels 的免版权野外视频与 MF2 电影数据中的公共领域部分，论文强调只用原始视觉数据，不用预先附带的字幕或元数据。所有标注由内部流水线生成，以避免数据泄漏。

视频先按场景切分，再按时长与光流等过滤，并用人脸比例过滤保证多数帧可见人脸，从而得到人类中心视频。这种过滤保证了后续人物轨迹与表情标注有足够的可见帧。

**人类中心视频标注流水线 × 含干扰项问答合成流水线：** 人类中心视频标注流水线分工是把原始视频变成带人物轨迹、属性、语音和氛围的多模态标签，为出题备料；含干扰项问答合成流水线分工是把标签变成有难度的多选题，用模型错误做干扰项；搭配原因是先有可复用的标签才能按任务筛选视频，组合意义是把出题从手工写作变为可重复执行的机器流程。

要读懂方法总览图，需要把左侧构造过程与中间评测维度对应起来看，左侧上下分支分别负责备料与出题，中间负责任务分解，右侧负责题面展示。

> **看图路径：** 1. 先看左上紫色标注流水线如何从视频源经过切分与人脸比例过滤得到人类中心视频；2. 再看左下绿色问答合成流水线如何从带标签视频走向问题生成与集成排序；3. 对照中间蓝色评测维度，数清内层情绪与外在表现下 16 个任务的题量分布；4. 观察右侧三类示例题如何用红框标定目标人物并给出多选项题面

[![原论文 Figure 1：HUMANVBENCH is a benchmark for human-centric video understanding that features 16 fine-grained…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9cf35b725f02/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9cf35b725f02/figure-1.png)

*论文图 1。原论文 Figure 1：“HUMANVBENCH is a benchmark for human-centric video understanding that features 16 fine-grained tasks, each denoted by its acronym and the number of included QA instances (middle…”。*

该图左侧上方紫色分支完成视频切分、人脸过滤与人物属性标注，左下方绿色分支完成问题生成、集成排序与人工核验。中间蓝色树状结构把评测展开为内层情绪与外在表现，再细化为情绪感知、人物识别、行为分析与跨模态对齐 4 个子类及其题量。右侧用深色西装男士情绪题、红框红发人物描述题与按声音找人题展示题面形态。读图后应明确，标注流水线解决可扩展性，问答流水线解决难度与区分度，人工核验解决可靠性。

### 标注流水线中每个算子读什么、写什么？

标注流水线的计算过程是多个数据处理算子的串联，论文基于 Data-Juicer 框架实现，部分为已有算子，部分为新增。视觉分支的起点是视频人物轨迹提取算子，它在连续帧间关联检测到的人脸与人体框，依据重叠阈值形成人物轨迹。同时它给出镜头内人数估计，对应标签 1 与标签 2。

在轨迹基础上，人口属性算子对人脸裁剪估计年龄、性别与种族，对应标签 3。为保留细节，系统支持全身框与仅人脸两种裁剪。随后人物外观描述算子用 MLLM 描述外观与姿态，面部描述算子聚焦表情及其变化，对应标签 4 与标签 5。

为减少背景与其他人物干扰，描述时使用带框标注或裁剪后的人脸视频。音频分支先由音频标签算子判断声音类型，对应标签 6。若判断为语音，则依次调用主动说话人检测融合视听线索定位说话人，对应标签 7。

语音识别转写内容，对应标签 8；语音情绪识别，对应标签 9；声音人口属性估计声音的性别年龄，对应标签 10。最后视频描述算子汇总事件氛围，对应标签 11。

这些标签支持按条件筛选出题视频，例如音画面部说话人匹配要求恰有 1 人的视觉人口属性与音频人口属性一致，其余人物不一致，以此确定正确人物标识。

**集成答案选择 × 干扰项生成：** 集成答案选择分工是用多个视频模型分别作答再投票排序，挑出最被认可的答案做正确项，降低单模型幻觉；干扰项生成分工是把落选但语义可区分的模型错误直接保留为干扰项，不可区分时再由语言模型做任务相关扰动；搭配原因是错误答案恰好反映模型的真实弱点，组合意义是让干扰项既合理又有区分度，而不是随意编造。

要核对算子读写关系，可以先把该流水线图当作施工路线图来读，上排负责视觉标注，下排负责音频标注，箭头表示标签的流向与分支条件。

> **看图路径：** 1. 沿上排箭头追踪从场景切分到人物轨迹再到人口属性与外观描述的标签顺序；2. 注意下排从声音类型判断是否为语音，再分叉进入说话人检测与语音识别分支；3. 核对每个白色算子方框下方对应的紫色标签编号与具体内容落点

[![原论文 Figure 2：The Human-Centric Video Annotation Pipeline involves obtaining videos featuring people and…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9cf35b725f02/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9cf35b725f02/figure-2.png)

*论文图 2。原论文 Figure 2：“The Human-Centric Video Annotation Pipeline involves obtaining videos featuring people and annotating both visual and auditory information as well as overall event atmospheres.”。*

该图上排从视频源经过场景切分与人脸比例过滤得到含人视频，再依次经过轨迹提取与人口属性等算子形成标签 1 至标签 5。下排从声音类型判断进入语音分支，再经过说话人检测与语音识别等算子形成标签 6 至标签 11。两条分支最终汇入带标签视频池，供后续任务按条件取用，而不是直接输出题目。

### 没有权重训练时，真正的计算与人工动作在哪里？

本研究没有训练新的视频 MLLM，也就没有梯度更新、参数冻结与优化器配置可报告。该节的教学任务是讲清实际发生的计算：模型调用、筛选、采样与人工改写。问答合成流水线分 4 步，每步的输入输出都可以复述。

第一步是选出题视频，按任务特性用标签过滤，例如行为时序分析需要较长片段，人到文本需要至少 2 人同框。第二步是生成问题与初步答案，先用轨迹框定位目标人物，对情绪任务重构裁剪人脸视频，对其他任务生成红框标记视频。

再把标记视频送入视频 MLLM，按任务提示得到面向任务的描述。为防止模型注意错人，提示中加入标签 4 的外观线索。随后分析描述抽取任务属性并做属性均衡采样，例如保持正负情绪比例接近，再由语言模型按均衡后描述生成问答对。

第三步是集成答案选择与干扰项生成，把标记视频与问题同时交给多个视频 MLLM 作答，论文工作流中提到 Gemini、VideoLLaMA3 与 ShareGPT4Video 等参与候选作答。经偏好投票汇总排序，排名首位做正确项，其余若语义可区分则直接保留为干扰项。

否则由语言模型做任务相关扰动改写，并要求改写后与正确项明显区分且干扰项之间互不相同。第 4 步是人工对齐与修正，打乱选项后由标注者选出正确项，若无正确项则手写正确句并作为真值。论文报告约 25% 需重写，约 75% 可直接确认其一。

240 题双人独立标注的 Cohen Kappa 为 0.8833，支持可靠性判断。后处理还包括无图测试去泄漏，去掉无视觉输入也能频繁答对的约 6% 题目，使随机猜测水平回归预期。关于开源与可运行性，论文正文写了仓库地址与发布意图，但本次没有获得可验证的资源可达证据，因此不作当前可用判断。

要理解 4 步之间的数据流转，需要对照合成流水线图来看输入如何从带标签视频变为标记视频，再变为候选答案与最终选项，人工在末端只做仲裁。

> **看图路径：** 1. 先看左上按任务标签筛选出题视频的入口条件与过滤动作；2. 再看右上如何用裁剪人脸或红框标记视频构造面向任务的描述；3. 跟踪右下多个视频大模型作答并汇总排序形成答案与干扰项的过程

[![原论文 Figure 3：The Distractor-Included QA Synthesis Pipeline facilitates four steps: selecting “question videos”,…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9cf35b725f02/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9cf35b725f02/figure-3.png)

*论文图 3。原论文 Figure 3：“The Distractor-Included QA Synthesis Pipeline facilitates four steps: selecting “question videos”, generating Questions, ensemble-based options generation with model-derived…”。*

该图左上按描述性任务标签过滤得到出题视频，右上从目标标注经裁剪或标记视频到视频模型描述，再经属性均衡到问答对。右下从多模型作答到汇总排序再到干扰项改写，左下展示人工二选一修正与 72% 对 28% 的分流。读图后应能复述每个箭头的输入输出，而不是只记住模块名称，复现时还应按附录核对算子版本与模型调用方式。

### 评测比较了谁，在什么条件下算分？

实验要回答的问题是当前视频 MLLM 在基础看人能力上离人多远，以及短板集中在情绪还是声画对齐。比较对象包括 30 个流行的视频 MLLM，覆盖纯视觉模型如 Qwen-VL 系列、InternVL 系列与 VideoLLaMA3。

视听模型如 Qwen2.5-Omni 与 Video-LLaMA 系列，以及 GPT-4o、GPT-5 与 Gemini 系列商用模型也纳入比较。人类基线为研究生作答。所有任务统一为 N 选一选择题，N 可变，指标为准确率，方向为越高越好。

随机猜测基线按选项数给出预期水平，用于判断模型是否真正利用视觉。论文说明纯视觉模型在需要音频的对齐任务上只能退化为动作识别，商用模型中 GPT 系列在部分声画任务上因能力缺失而拒绝作答。表格中以横线表示，这属于未评测边界，不应按零分理解。

评测细节如采样帧数、提示模板与解码设置在附录中交代，正文强调去泄漏后保留视觉相关性。初学者容易混淆百分点与相对百分比，本文所有差距均指百分点相减，例如从 53.4% 到 73.4% 记为高 20.0 个百分点。不同任务的差值不能混入模型列下比较，自动准确率也不能等同于人工评价，这是核对表格时的基本纪律。

### 主结果显示谁领先，差距最大处在哪里？

比较的问题是纯视觉 3 类任务的平均水平与跨模态对齐水平是否一致，公平条件是同一题库与同一选择题协议，指标方向为准确率越高越好。下表选择原结果总表中的代表行与关键列，保留随机猜测、开源纯视觉、开源视听、商用视听与人类基线。

列覆盖情绪、12 个纯视觉任务平均、说话人匹配、跨模态平均与 16 任务总平均，便于同时看到整体与短板。

| Random Guess | 24.4 | 24.2 | 42.8 | 31.2 | 25.9 |
| --- | --- | --- | --- | --- | --- |
| Qwen-VL3 (7B) V | 43.2 | 55.0 | 71.1 | 48.3 | 53.4 |
| Gemini-1.5-Pro V+A | 50.9 | 61.0 | 90.1 | 79.5 | 65.6 |
| Gemini-2.5-Pro V+A | 52.9 | 69.0 | 96.7 | 86.5 | 73.4 |
| Human (Graduate) | 84.6 | 86.7 | 96.0 | 94.4 | 88.6 |

表中可见人类研究生在 16 任务总平均达 88.6%，12 个纯视觉任务平均 86.7%，跨模态平均 94.4%，说明题目对人可解。商用 Gemini-2.5-Pro 总平均 73.4%，12 个纯视觉任务平均 69.0%，跨模态平均 86.5%，是全场最接近人的系统。但它在情绪类仍只有 52.9%，与人的 84.6% 相差超过 30 个百分点。

开源纯视觉 Qwen-VL3 总平均 53.4%，情绪 43.2%，人物 67.6%，行为 54.3%，已超过 GPT-4o 的纯视觉平均 48.9%，但离人仍远。开源视听 Qwen2.5-Omni 总平均 43.2%，跨模态 54.6%，虽在语音内容匹配单项达 71.8%，但整体仍低于纯视觉开源模型。随机猜测总平均 25.9%，跨模态 31.2%，为判断是否有效利用视频提供下界。

**语音视觉对齐 × 纯视觉理解：** 纯视觉理解分工是只看画面判断情绪、身份和行为，考查帧内与时序视觉线索；语音视觉对齐分工是把声音的人声属性、说话内容与唇动和人物外观对应起来，考查跨模态绑定；搭配原因是人看视频天然同时用眼和耳，组合意义是能分离出模型是看不懂还是对不齐，为后续补唇读与时间对齐机制提供定位。

为解释情绪失败的原因，需要对照说话人采样帧与模型误选情况来看，固定采样如何把发音口型放大为表情噪声，这是连接现象与机制的关键证据。

> **看图路径：** 1. 对比上下两组各 8 帧等间隔采样的人物说话帧，观察张嘴动作出现的帧位置；2. 对照右侧表格中正确项与多个模型共同误选为惊讶类选项的对应关系；3. 注意同一说话人在不同帧表情起伏如何被固定采样放大为噪声

[![原论文 Figure 4：Two examples of 8-frame speaker videos sampled evenly for the emotion recognition task, with…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9cf35b725f02/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/9cf35b725f02/figure-4.png)

*论文图 4。原论文 Figure 4：“Two examples of 8-frame speaker videos sampled evenly for the emotion recognition task, with responses from various MLLMs.”。*

该图左右对照明显，左侧两行各 8 帧显示说话人张嘴、皱眉与视线偏移的连续变化，右侧表格列出误选惊讶及相关组合的模型名单。正确项为担忧或急躁、自豪与兴奋，而多个模型误选含惊讶的选项。解释是固定采样把张嘴发音帧当作惊讶表情，引入时序噪声，导致说话子集上所有模型平均下降约 3.3 个百分点。未胜出项同样重要：几乎所有模型在音画对齐检测与语音内容匹配上接近随机，说明精细唇读能力普遍缺失。

### 哪些对照能证伪直觉，时间戳与声画输入真的有用吗？

本节按问题组织反证。首先是时间戳对照，问题是模型在指定时刻动作、特定动作时刻与外观时间检测上失败，是因为看不见时间还是不会对齐。论文对原生不支持时间戳的开源模型在输入中加入文本时间戳，结果多数模型在 3 类时间任务上提升数个百分点。

但它们仍落后于原生支持时间事件对齐的模型，说明外部时间提示有帮助但不能替代设计时的时间推理机制。其次是说话状态对照，情绪识别全集与说话子集的比较显示，说话时准确率一致下降，证伪了有语音就更好判断情绪的直觉。原因是发音口型干扰表情判断。

第三是声画对照，问题是加入音频是否自动提升对齐。下表聚焦跨模态四项，保留随机猜测、两个开源视听模型与商用领先模型，列为说话人匹配、主动说话人检测、对齐检测、内容匹配与总平均。公平条件仍是同一选择题协议，指标方向为准确率越高越好。

| Random Guess | 42.8 | 23.6 | 33.3 | 25.0 | 25.9 |
| --- | --- | --- | --- | --- | --- |
| VideoLLaMA (7B) V+A | 40.1 | 26.6 | 33.1 | 26.2 | 25.5 |
| VideoLLaMA2.1 (7B) V+A | 44.0 | 31.6 | 32.1 | 23.7 | 37.4 |
| Qwen2.5-Omni (7B) V+A | 71.1 | 48.4 | 27.0 | 71.8 | 43.2 |
| Gemini-2.5-Pro V+A | 96.7 | 78.7 | 72.3 | 98.3 | 73.4 |

表中开源视听 VideoLLaMA 与 VideoLLaMA2.1 在说话人匹配与主动说话人检测上接近随机，分别为 40.1% 与 26.6%、44.0% 与 31.6%，甚至低于纯视觉模型的 60% 以上水平。这说明缺乏精细唇动理解与语音到唇的时间对齐机制时，多模态输入反而成为噪声。

Qwen2.5-Omni 在说话人匹配 71.1% 与内容匹配 71.8% 上明显更好，但对齐检测仅 27.0%，仍未解决同步判断。Gemini-2.5-Pro 在四项上分别为 96.7%、78.7%、72.3% 与 98.3%，是唯一在对齐检测上远超随机的系统。代价是这类能力集中在闭源大模型，开放模型复现仍需补音频视觉词级映射数据与评测。

论文还在附录给出干扰项质量评估与无图去泄漏分析，说明难度并非来自语言偏置，这是理解反证时不可省略的边界。

### 哪些结论有直接证据，哪些仍是待验证推测？

论文直接报告的是准确率数字、人工核验比例与一致性系数，这些属于可复述的事实。有限解释是指对失败原因的归因，例如把惊讶误判归因于张嘴帧噪声，把时间任务失败归因于缺少时间线关联能力。

把开源视听模型落后归因于唇动理解不足与缺少细粒度对齐机制，这些解释有对照支持，但未做因果干预实验，因此用支持而不用证明来表达。未验证推测包括换更大采样帧数或更强唇读编码器是否一定解决问题，论文未报告延迟、算力成本与误判率分布。

它也未测量开放域长视频上的稳定性，因此不能承诺这些量得到改善。数据层面，视频来源以 Pexels 野外片段与电影为主，虽多样但不覆盖监控、医疗或低光等特殊场景，人口属性模型的系统偏差可能传入标签。人工修正只能保证选项正确，不能保证所有中间标签无偏。

评测层面，N 选一协议便于自动算分，但不能反映开放式描述质量；GPT 系列在部分声画任务拒绝作答，跨表平均时需注意缺失项处理。相关性不等于因果，例如内容匹配高分不代表真正读唇，可能是借助音频转写走捷径，解读时应区分看懂与对齐两类能力。

### 要复述与复现，先做什么，需要补哪项验证？

复述先做三件事。第一，按任务定义复述 16 个任务的首字母缩写与题量归属，避免把情绪时序分析与行为时序分析混淆。第二，按流水线复述从场景切分、人脸过滤、轨迹提取、视听标注到筛选出题的顺序。

还需复述标记视频描述、属性均衡、集成排序与人工仲裁的顺序，指代要能唯一回指，例如标签 4 指外观行为描述，标签 10 指声音性别年龄。第三，按比较条件复述数字，每次同时说清数据集子集、模型输入模态、指标与聚合对象。

例如 Gemini-2.5-Pro 的 73.4% 是 16 任务总平均，52.9% 是情绪四任务平均，不能混用。复现若要执行，需准备视频源、场景切分与人脸检测、轨迹关联、人口属性与描述模型、语音检测识别与情绪模型。以及多个视频 MLLM 的调用接口，论文提到基于 Data-Juicer 组织算子，具体版本与阈值见附录。

人工环节需执行打乱后二选一仲裁，并记录无需改写比例与 Kappa。还需执行无图测试，剔除无视觉也能答对的题目。缺项方面，论文未给出各算子的计算开销与整体出题耗时，也未报告多次采样的方差。

因此复现报告应补标准差与人工时长，并说明商用模型版本漂移对集成排序的影响。何时值得尝试该方法：当需要从零为野外视频快速搭建诊断性选择题，并希望干扰项反映真实模型弱点时。当只需要通用问答而不关心难度区分时，直接用单模型生成即可，不必引入集成与扰动流程。

### 核心判断与可带走的方法是什么？

综合全部证据，值得带走的判断是视频 MLLM 的基础看人能力尚未达人，差距最大处不在找人与数人，而在细粒度情绪与声画精细对齐。商用领先模型在人物识别上接近人，在情绪上仍落后 30 个百分点以上。

在对齐检测上只有极少数系统远超随机，多数开源视听模型甚至不如纯视觉模型，说明多模态不等于已对齐。方法上可带走的是两段式构造思想：先用可替换检测器与属性模型把视频变成结构化标签，再用多模型错误做干扰项。

这种做法把人工从创作者变为仲裁者。论文用狗与车辆的例子展示了可迁移性，更换检测器即可做物体属性识别与出现时段定位，用同样的集成排序可做因果问答。这支持该框架的通用性判断，但具体到新领域仍需验证标签质量与干扰项难度。

本文的教学例子均为解释用，不添加无源数值。所有数字均按原表写法保留精度与含义，比较均保留可运行基线与人类上界，未胜出项与失败条件已就近说明，避免把单项高分推广为整体解决。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
