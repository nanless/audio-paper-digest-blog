---
title: "OSMO: Open-vocabulary Self-eMOtion Tracking"
date: 2026-09-13
draft: false
description: "论文提出第一人称自我情绪追踪任务，用 110 小时智能眼镜数据的开放词表时间线与五任务基准支撑 OSIRIS 模型，该模型以对话历史加情绪记忆加分步推理取得领先，但仍受日常社交场景与文化覆盖限制。"
tags: ["数据集", "多模态学习", "音视频", "语音情感识别"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Abdelfattah_OSMO_Open-vocabulary_Self-eMOtion_Tracking_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Abdelfattah_OSMO_Open-vocabulary_Self-eMOtion_Tracking_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Abdelfattah_OSMO_Open-vocabulary_Self-eMOtion_Tracking_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "ce397d2fb28633437df5eab09f544e9d0c13dedfe4db785bc4381f5e163454e9"
paper_digest_api_reader_plan_sha256: "2b598e45427a06991ab6cb5ba85f14a83d13653759501587dcb3eada7465e82f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "32bce640a270eb95e10ca29f6bc384f00c2684100bf45a99576f4f2c20beda80"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "6970a676517f9279188a157a36f8a50828d83f21797800c371a887032a4b3fb0"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "c3a4bbf5828ae739ae9fd898b27e56cf8883e6160fcb277dd2d231a0f929c7ec"
paper_digest_api_reader_author_count: 8
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "a1352395963edd4cf70dd399a92c6628a526167206edc0c2321d5f740c887e9e"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.emotion-recognition","label":"语音情感识别"}]
paper_digest_primary_task: "语音情感识别"
paper_digest_primary_method: "多模态学习"
paper_digest_score: 7.8
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "数据集与基准"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 从离散分类到连续追踪：OSMO 把自我情绪做成时间线

> 英文题目：*OSMO: Open-vocabulary Self-eMOtion Tracking*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Abdelfattah_OSMO_Open-vocabulary_Self-eMOtion_Tracking_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Abdelfattah_OSMO_Open-vocabulary_Self-eMOtion_Tracking_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Abdelfattah_OSMO_Open-vocabulary_Self-eMOtion_Tracking_CVPR_2026_paper.pdf)

标签：#数据集 #多模态学习 #音视频 #语音情感识别

评分：**7.8/10** | 创新 1.6/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准

## 👥 作者与机构

- Mohamed Abdelfattah：机构信息未能从会议 PDF 纯文本可靠映射
- Bugra Tekin：机构信息未能从会议 PDF 纯文本可靠映射
- Fadime Sener：机构信息未能从会议 PDF 纯文本可靠映射
- Necati Cihan Camgoz：机构信息未能从会议 PDF 纯文本可靠映射
- Eric Sauser：机构信息未能从会议 PDF 纯文本可靠映射
- Shugao Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Alexandre Alahi：机构信息未能从会议 PDF 纯文本可靠映射
- Edoardo Remelli：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

本文任务是以智能眼镜采集的第一人称视频、音频、对话文本与眼动信号为输入，输出佩戴者开放词表情感、极性、强度、时间边界与成因解释，难点在于表情微弱自发、语义依赖社交上下文且情感具有跨时段惯性。方法先用冻结编码器抽取各模态表征并经适配器映射到语言空间，为后续统一推理提供接地输入；接着记忆模块检索近期情感文本并与多模态查询融合建模延续性，使当前判断继承个人情感史。然后SENSE框架将人工情感描述与机器感知细节融合生成结构化推理链，再由低秩微调的大语言模型先推理后预测情感标签。与孤立话语分类的情感大模型相比，该设计以显式历史建模与感知接地减少脱离语境误判，并支持连贯情感时间线追踪。在OSMO-XSub评测协议下，微调Emotion-LLaMa的OVER HR指标为66.0，高于零样本Emotion-LLaMa的OVER HR指标53.4。该结论适用边界限于日常社交互动中的可观测具身情感，极端情绪、更多文化与生理信号下的外推尚未验证。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

- 数据相关资源：<https://osmo-emos.github.io> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么要用眼镜被动记录自己的情绪？

这篇论文的起点不是做更准的表情分类，而是解决情绪记录的摩擦问题。引言给出的数据是：自我情绪追踪能把抑郁症状降低 34%，焦虑降低 20%，并让超过 85% 的人觉得更能掌控情绪，但手机应用要求手动打卡，坚持不下来。智能眼镜的设想是全天佩戴、被动连续采集，不需要用户停下来填写量表。对于刚进入语音音乐音频领域的读者，关键是把情绪分成两类：内在情绪需要侵入式传感才能测，具身情绪是可以通过声音、眼动、身体语言观察到的外显生理表达，论文只做后者。

传统做法是把一段剪好的视频丢给模型输出一个标签，论文认为这不够。真实情绪是连续演变的，有延续效应，前一刻的惊喜会留下余温，影响下一刻的判断；同一句话 That is just great 在不同语境下可能是真诚也可能是讽刺；只看人脸在第一人称视角下经常看不到脸。因此作者把任务定义为自我情绪追踪：用眼镜端的多模态流，包括第一人称视频、音频、对话文本和眼动信号，构造佩戴者本人的情绪时间线，每个事件要回答感到什么、强度多大、起止时间是什么、依据是什么。项目网站当前可用，地址是<https://osmo-emos.github.io>，资源状态为 available，本次解读的事实只来自论文正文与官方原图像素。

### 已有情绪数据集和模型缺了哪几块？

论文把已有情绪数据集按来源分成两类。第一类是互联网来源，包括电影片段和社交媒体短视频；第二类是实验室控制采集，在固定环境下诱发或表演情绪。这些数据推动了情感计算，但有两个结构性缺陷：一是多为第三人称视角或短而孤立的片段，无法建模情绪的连续性；二是来源多为实验室、电影和网络播客，表情夸张摆拍，与日常自然发生的微妙自发情绪差距大。唯一的例外 E3 用了第一人称播客视频，但存在手持抖动噪声、缺少眼动和主体级时间线、采用封闭集标签 3 个问题。

模型侧分为单模态和多模态。单模态只看视频、眼动、音频或文本一种，缺少跨模态上下文，例如只看文本不知道语气。近期大模型如 AffectGPT 做音频视频前融合，E3 Emotion-LlaMA 做第一人称视觉声学结合，Emotion-LLaMA 做自适应融合，能力更强，但论文指出它们仍有 4 个短板：依赖人脸、在第一人称下失效；孤立处理一句话，误读语境相关含义；忽略先前情绪，不建模延续效应。

缺少可解释推理，输出难以溯源。OSMO 的对照思路是同输入、同目标、同运行阶段比较：要在眼镜端多传感器、自然长时、主体级连续追踪条件下比，而不是把电影片段上的分类分数直接搬过来当胜负。

### 自我情绪追踪到底要输出什么？

任务输入是同步的第一人称多模态流：佩戴者视角的 RGB 视频、麦克风音频、眼动红外视频与注视信号、语音转写的对话文本。输出不是单个标签，而是一条按时间排列的主体级情绪时间线。图 1 把这个定义画得很直白，右侧 1 次推断要同时给出情绪词、情感极性、强度、时间段和原因，底部时间轴展示焦虑、喜悦、惊讶、自豪等状态如何随时间切换。

> **看图路径：** 1. 先看左侧智能眼镜到右侧五个输出的连线，确认输入是眼镜端信号；2. 再看底部 14 点到 20 点时间轴上不同颜色情绪段的切换位置；3. 对照右上 Happy 加 Positive 加 High 的组合，理解一次输出包含哪些维度

[![原论文 Figure 1：Self-emotion tracking. Using multimodal inputs from smart glasses (egocentric video, audio, eyes,…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eabeb5019415/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eabeb5019415/figure-1.png)

*论文图 1。原论文 Figure 1：“Self-emotion tracking. Using multimodal inputs from smart glasses (egocentric video, audio, eyes, and text), our goal is to construct a timeline of the user’s affective states.”。*

上图说明追踪是连续过程而非单次分类。读图时不要把它当成系统架构，它只规定输出规格：每个情绪事件都带语义、极性和强度与时间边界，原因必须能回溯到可观察证据。论文为此定义 5 个基准任务：开放词表情绪识别、情感极性分析、强度预测、时间定位、情绪推理。开放词表意味着不限制标签集合，允许标注者写细粒度词，再用集合重叠和命中率评测；强度分低中高三档。

定位用时间交并比；推理用人评加自动指标检验解释是否包含可观察触发器。

**开放词表情绪识别 × 封闭集分类：** 封闭集分类只在愤怒、快乐等几个固定标签里单选，适合剪辑好的表演片段；开放词表情绪识别允许标注者用自然词自由描述主次情绪，再以集合重叠度量对错，分工是前者求规范可比，后者求保留真实连续状态，搭配理由是日常情绪多为羞怯、犹豫等混合渐变，组合意义是让评测从选标签变为比对情绪集合的覆盖情况。

### OSMO 数据集的一个样本长什么样？

理解全篇最省力的方法是先跟一个样本走完全程。论文图 2 给了一个户外吉他聚会的例子。中间是原始同步数据：眼动红外显示闭眼、第一人称视频显示有人弹吉他、对话文本记录了 Shure 问你真的喜欢他吗和佩戴者的哈哈哈。左侧是各模态的文字化描述，右侧是人工标注的情绪时间线与 6 步思维链。

> **看图路径：** 1. 沿中间原始视频帧向左右两侧展开，看原始信号如何对应到描述；2. 比较左侧眼动文本与右侧音频文本的粒度差异；3. 核对右下六步推理如何把场景、声音、对话、眼动收敛到最终情绪

[![原论文 Figure 2：OSMO dataset sample. Given synchronized raw egocentric data (video, audio, eyes), OSMO adds…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eabeb5019415/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eabeb5019415/figure-2.png)

*论文图 2。原论文 Figure 2：“OSMO dataset sample. Given synchronized raw egocentric data (video, audio, eyes), OSMO adds human-annotated subject-wise emotion timelines, detailed LMM-generated modality…”。*

这个样本的走线是输入到表示到目标到输出。输入是视频帧加音频波形加眼动加对话轮次；表示是把每种信号先转成文字描述或向量；目标是 17 点 24 分 08 秒这个事件；输出是感到快乐且 playful，原因是男士弹吉他唱歌引发大笑，证据链写清场景、笑声、对话 amusement、脸颊抬起闭眼、既往 amusement 好奇心，最后收敛到 Happy、正面、高强度。初学者要记住这个顺序：先有可观察信号，再有分步解释，最后才是情绪词，顺序不能反，因为论文的监督与评测都要求理由先于结论。

### OSIRIS 的编码与适配做了什么？

OSIRIS 的全称是 Omnimodal Self-emotion Inference with Reasoning on Input Signals，核心是同时吃视频、音频、对话文本、眼动红外和既往情绪 5 个输入，再生成带推理的文本回答。流程分 5 步：编码、适配、记忆、SENSE 生成、预测。编码层用冻结的专家编码器分别处理各模态，第一人称视频提供环境上下文，例如热闹聚会对应快乐、杂乱昏暗对应低落；音频提供副语言信息；眼动红外捕捉睁大、闭眼等与情绪强相关的眼部动作；对话文本保留说话人与时间戳的多轮历史。

适配层为每个非文本模态学一个投影器，把不同维度的特征映射到大语言模型的嵌入维度，使跨模态推理可以在同一语言空间内进行。对话音频一方面用冻结声学模型编码成声学帧，另一方面对话文本用语言模型的词嵌入层编码，保留两种形态。论文明确写了编码器冻结、适配器可学，但没有报告各编码器的具体参数量与帧率细节，这是复现时需要补看代码的缺项，不能从模型名字推定实现。

> **看图路径：** 1. 从底部编码层向上看三路信号如何进入适配与记忆模块；2. 找到记忆更新与投影分支的分叉与汇合位置；3. 确认顶部 SENSE 生成标签再向下监督预测分支的箭头方向

[![原论文 Figure 5：Overview of OSIRIS. OSIRIS integrates multimodal inputs, video (Xv), eyes (Xe), audio (Xa), text…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eabeb5019415/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eabeb5019415/figure-5.png)

*论文图 5。原论文 Figure 5：“Overview of OSIRIS. OSIRIS integrates multimodal inputs, video (Xv), eyes (Xe), audio (Xa), text (Xc), and prior emotions (Xemo), to infer affective states in five steps: (1)…”。*

上图把底部编码、中间适配记忆、顶部 SENSE 监督与预测的层级画了出来。注意雪花表示冻结、火焰表示可训练，记忆更新与投影是可学的，文本编码与模态编码是冻结的。读图时重点看数据流向：原始信号向上投影后，一路进记忆做检索与更新，一路与对话历史拼接进语言模型，最终生成带推理的回答。

**个人情绪历史 × 多模态表达签名：** 个人情绪历史负责记住了什么，用前 N 个事件的文字情绪词与时间间隔给出语义和时间上下文；多模态表达签名负责记当时怎么表现，把视频、眼动红外、音频和对话文本的投影特征加权拼接后再用可学习查询压缩成紧凑向量，分工是语义可读与信号可算，搭配理由是情绪有惯性，当前大笑是延续还是转折要看前文，组合意义是让模型把离散事件连成有延续性的轨迹。

**对话上下文 × 声学线索：** 对话上下文负责消解字面歧义，判断 Wonderful 是真心喜悦还是失望反讽要看前后轮次；声学线索负责提供副语言证据，如大笑的响度、 playful 的语调、语速快慢，分工是语义关系与发声方式，搭配理由是只看文本会丢掉语气，只听声音会丢掉所指，组合意义是让情绪判断同时 grounded 在说了什么和怎么说的上。

### 记忆模块如何表示一次情绪事件？

记忆是 OSIRIS 区别于孤立分类的关键。论文把情绪看作有惯性的渐变过程，不是瞬时离散点。记忆库保存佩戴者个人的情绪日志，每个事件包含三部分：是什么，用开放词自然语言写感到什么，例如 happy 或 disappointed；怎么表现，把各模态投影后池化归一化再加门控加权，用可学习查询做交叉注意力压缩成紧凑多模态码；何时，记录时间戳与持续时长。这样语义、表达与时间被存在同一条目里。

推理时取最近 Np 个文字情绪与 Nq 个多模态查询，连同时间间隔一起送入语言模型，使模型把当前状态理解为轨迹上的一点。例如困惑到沮丧的延续、惊喜后的余温，都需要前文才能判断。论文报告把 Np 从 0 加到 4 时开放词表命中率（%）增益从 7.6 升到 10.9，Nq 加到 32 时达到峰值，而记忆槽数超过 1 后增益趋平，说明历史情绪文本与检索到的表达码有用，但过度压缩或拉长并不会无限变好。未报告的是记忆何时清空、跨天如何重置，这部分需按原文缺项处理，不自行假设。

### SENSE 标签如何造出来又如何教模型？

直接让人写 6 步多模态推理太贵，直接让描述模型写又抓不住情绪重点。SENSE 的做法是拼接两者：先用视频与音频描述模型抽视觉与声学细节，再把眼动映射为眼部动作单元描述，然后把人类情感标注、这些感知描述、对话文本与既往情绪一起喂给 LLaMA3，让它做认知代理，输出 6 步链：视觉、音频、对话、眼动、既往情绪、最终推断。训练时 OSIRIS 不是直接分类，而是学习生成这段链，目标是最大化在多模态上下文与指令条件下的自回归似然。

优化方式是冻结大模型主体，只用 LoRA 在注意力与前馈层插入低秩可训练适配器，高效微调情绪推理能力。论文没有给出 LoRA 秩、学习率、训练步数与硬件预算的具体数值，这是明确缺项，复现时必须去代码与附录核对，不能从 LLaMA 名字推定超参数。需要强调的是 SENSE 标签生成阶段的大模型是冻结的描述与推理工具，真正更新的是 OSIRIS 端的投影、记忆更新与 LoRA 参数，梯度路径只在这些可学部件上，原文未画出完整计算图时不猜测其他路径。

**SENSE × 思维链监督：** SENSE 是数据生成框架，负责把人类情感标注的正确结论与视频音频描述模型的感知细节拼起来；思维链监督是训练目标，负责要求模型先分 6 步写视觉、音频、对话、眼动、既往情绪再做最终推断，分工是前者造出分步标签，后者用这些标签教模型先想后判，搭配理由是直接分类容易学到眼泪等于悲伤这类捷径，组合意义是把推理过程变成可检查、可微调的中间输出。

### 数据从哪来，划分与指标如何保证可比？

OSMO 没有重新采集，而是标注了 3 个已有的智能眼镜长时数据集：EgoLife、Nymeria 和 Aria Everyday Activities。选择理由是它们已满足野外、长时、主体身份、眼镜多传感器 4 个要求，只缺情绪标签，且被试未被要求表演，情绪自然自发。标注分 3 个阶段：先用 Whisper 转写并切成 20 万话语级片段，再用 4 个音频视频大模型多数投票筛出 1.78 万高置信非中性片段，扩成 30 秒上下文得到 125 小时候选；然后 41 名标注者按 Plutchik 轮扩展的开放词表标主次情绪、情感极性、强度、起止秒与原因，全程隐藏模型预测以防偏置；最后用规则加 LLaMA 打分初筛再人工复核类别、定位与推理，不合格迭代重标。

下表把构造规模的关键数字放在一起，便于核对数据集量级与筛选漏斗，阅读时注意单位与聚合对象不同，不能跨行相减。

| 环节 | 对象 | 规模 | 说明 | 条件 |
| --- | --- | --- | --- | --- |
| 原始候选 | 眼镜录制 | 750 小时 | 3 个开源集总和 | 未筛选 |
| 候选过滤 | 高置信片段 | 17.8K | 多数投票非中性 | 话语级 |
| 人工核验 | 待标上下文 | 125 小时 | 扩成 30 秒段 | 送标注 |
| 最终发布 | 情绪时间线 | 110 小时 | 双语主体级 | 公开集 |
| 人力投入 | 标注工时 | 8000 小时 | 41 人培训校准 | 全流程 |

上表说明筛选是漏斗形的，大量中性段被机器预筛掉，人工只做高价值段的精标与质检。论文报告机器预筛保留率 88.0% 但与人工的精确类别重叠仅 48.6，支持机器适合找候选、人适合定类别的分工判断。局限是预筛本身偏向有声情绪，沉默或微表情可能漏掉，这是未评测边界。

**情绪定位 × 情绪推理：** 情绪定位负责回答何时，用预测起止时间与真值的平均交并比衡量时间边界准不准；情绪推理负责回答为何，用生成的原因解释与人工标注在信息正确性、细节、上下文和时间一致性上打分，分工是时间精度与因果可解释性，搭配理由是只认对情绪词但给错时间或给不出触发事件，仍不能用于连续追踪，组合意义是把评测从单点命中扩展为时间加理由的联合检验。

### 四种泛化协议与五个任务如何对应？

评测设 4 个协议：跨被试训练验证被试不重叠，检验对新人的泛化；跨时间按天划分，检验跨天鲁棒性；跨语言分中英互转与内转，检验文化语言迁移；跨集合在未见过的 AEA 子集上测，检验对新场景的迁移。5 个任务各有指标：开放词表用集合重叠与命中率，情感与强度用准确率与加权 F1，定位用平均交并比，推理用 BLEU、ROUGE-L、METEOR 加 LLaMA 打分的信息正确性、细节、上下文与时间一致性。比较时必须核对基线是否微调：零样本的情绪大模型在 OSMO 上普遍偏低，微调后才可比，论文表格中高亮行是微调行，不能拿零样本行当可部署收益。

### 主结果在说什么，谁是可运行的最强基线？

主结果要回答 3 个问题：测什么、与谁比、条件是否一致。测的是跨被试与跨时间下的五任务平均表现；比的是零样本音频视频大模型与微调后的 Emotion-LLaMA、E3-LLaMA、AffectGPT；条件一致指都在 OSMO 划分上训练或测试，微调行之间可比。下表整理论文报告的平均增益，方向都是越高越好，数值是相对零样本 LLaMA3 基线的平均提升百分点，不是相对百分比，阅读时不要混淆。

| 协议 | 最强可运行基线 | 基线平均增益 | OSIRIS 平均增益 | 差距含义 |
| --- | --- | --- | --- | --- |
| XSub 跨被试 | 微调 AffectGPT | 24.4 | 35.1 | 高约 10.7 点 |
| XTime 跨天 | 微调 AffectGPT | 25.5 | 35.6 | 高约 10.1 点 |
| XLang 英英 | 微调 AffectGPT | 74.2 LAS | 88.9 LAS | 推理优势大 |
| XLang 中中 | 微调 AffectGPT | 77.0 LAS | 90.6 LAS | 中文集更高 |
| 跨集 SOS | E3 训练模型 | 52.8 | 60.7 | 数据泛化好 |

上表显示 OSIRIS 在两个主协议上都领先已微调的最强基线约 10 个点，推理维度领先约 14.1 点，支持分步推理与情绪历史的组合判断。未胜出项也要看到：零样本模型在 OSMO 上远低于微调，说明电影表演数据训出的模型不能直接搬到眼镜自然情绪上；跨语言呈现英到中好于中到英的不对称，论文解释为英文集被试多样性更高，提示多样性比时长更重要，这仍是有限解释，待更多文化数据验证。跨集上 OSMO 训的模型优于 E3 训的模型，支持标注质量与时间线带来的泛化，但不等于每组都赢，总体趋势不推广到每步。

### 拿掉对话、音频、视频、眼动会发生什么？

消融要验证每个部件是否必要以及代价在哪。论文以微调 AffectGPT 为参照，逐步加入既往情绪、记忆查询、对话与 SENSE，报告平均提升分别为 3.6、6.8、7.7 与 8.2 点，合在一起约 10.5 点，其中 SENSE 单项最大。对话轮数从只用当前一句到用 16 轮，命中率（%）增益从 6.4 升到 11.4，说明 This is incredible 是喜是悲要看前文是赢了还是失败了。记忆长度也有饱和，Np 到 4、Nq 到 32 后增益趋平，槽数加多帮助很小。

> **看图路径：** 1. 先看左图各组件柱状增益，确认哪个组件柱最高；2. 再看中图随历史长度增加的曲线何时趋平；3. 对照右图去掉对话文本时向下柱的长度与其他模态比较

[![原论文 Figure 7：Ablation insights: (a) All components help, with SENSE contributing most.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eabeb5019415/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/eabeb5019415/figure-7.png)

*论文图 7。原论文 Figure 7：“Ablation insights: (a) All components help, with SENSE contributing most.”。*

上图左中右分别回答组件贡献、历史长度与模态缺失。左图注意 SENSE 柱最高但不是全部，记忆与对话也有独立增益；中图注意曲线上升后趋平，不是越长越好；右图注意去掉任一模态都下降，但幅度不同。下表把去掉模态的代价量化，负号表示相对完整模型的下降，幅度越大越关键。

| 去掉模态 | 平均下降 | 定位影响 | 推理影响 | 解读 |
| --- | --- | --- | --- | --- |
| 去掉对话文本 | -8.5 | 下降明显 | -11.8 LAS | 最关键直接证据 |
| 去掉音频 | -6.8 | 中等下降 | 下降较大 | 副语言不可替 |
| 去掉视频 | -4.6 | 中等下降 | 中等下降 | 场景 situate 作用 |
| 只用当前句 | +6.4 增益 | 低于全对话 | 低于全对话 | 历史仍有增益 |

上表支持对话文本最关键、音频次之、眼动虽平均影响小但能改善细粒度定位的判断。反例是眼动单独看平均只降 1.6 点，容易被误读为无用，但定位指标下降 3.9 点说明它在时间边界上有精修价值。未评测边界是极端情绪与生理模态，论文明确说日常社交为主，缺极端与多文化覆盖。

### 哪些结论还不能下，缺了什么验证？

论文结论是直接报告：OSMO 是最大且首个带主体级时间线与眼动的眼镜情绪数据，OSIRIS 在五任务上领先。这部分有数字支撑。有限解释是跨语言不对称归因于被试多样性，以及 SENSE 带来可解释性提升，这有对照但样本仍集中在中英日常社交，需更多文化验证。未验证推测是眼镜长期佩戴能否真正降低记录摩擦并改善心理健康，论文引了既往干预研究但本研究未测延迟、功耗、误报率与长期依从，不能承诺这些量得到改善。

数据局限有三：场景偏日常社交，极端情绪少；语言只有中英 41.3% 与 58.7% 两部分；预筛偏向有声片段，沉默情绪可能漏检。模型局限是仍需对话历史与记忆，单句或冷启动时增益打折；眼动与视频编码器冻结，极端光照与遮挡下的鲁棒性未单独测。读数时注意百分点与相对百分比不同，不同指标差值不能混放一列，自动指标不能当人评，表头冲突时以原文说明为准。

### 要复述与复现，先准备什么、按什么顺序跑？

复述时先背样本走线：输入 5 路信号，编码冻结，适配投影到语言空间，记忆存语义加表达加时间，SENSE 造 6 步标签，LoRA 微调生成推理与情绪。术语首次出现要白话加英文，例如个人情绪历史、开放词表情绪识别、SENSE 结构化情绪推理，之后简称固定。组合机制要说清分工与搭配理由，不能只说结合更好。

复现先做三件事：从项目网站拉取 OSMO 划分与评测脚本，核对跨被试、跨时间、跨语言、跨集合的被试与天数划分；按论文条件复跑微调 AffectGPT 作为可运行基线，再跑 OSIRIS 完整版，不要用零样本分数代替微调收益；评测时同时跑自动指标与 LLaMA 打分，记录强度加权 F1、定位交并比与推理 4 维分。关键超参数与信息条件在原文缺失较多，如 LoRA 秩、学习率、音频视频采样率、记忆清空策略，需以代码为准并在报告中标出缺项。代码开源不等于权重可下载，更不等于眼镜端可实时运行，训练资源、推理开销与实际延迟要分开讨论。

### 何时值得尝试 OSIRIS 路线，还需补哪项验证？

当你的任务满足 3 个条件时值得尝试：输入是长时第一人称多模态且有对话历史；目标是连续时间线而非单图分类；需要给出可检查的原因而不只是标签。这时先用对话历史加情绪记忆搭基线，再引入分步推理，因为论文显示对话与记忆各有数点增益，SENSE 增益最大但依赖标签质量。如果只有单句音频或无历史，要预期增益打折，先补上下文再谈模型。

还需补的验证是跨文化多场景扩展、沉默与微表情召回、眼镜端延迟功耗与误报实测，以及记忆跨天重置策略的对比。教学例子明确标为例子：吉他聚会的大笑对应快乐只是帮助理解流程，不代表大笑必然是快乐，眼泪也可能是喜极而泣，判断必须回到 6 步证据。对于音频方向的研究生，重点带走两点：副语言是仅次于文本的关键信号，去掉音频平均降 6.8 点；情绪有惯性，建模前 4 步历史就能拿到主要增益，拉更长要看饱和曲线而非盲目加长。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/947406ff4236/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/947406ff4236/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Abdelfattah_OSMO_Open-vocabulary_Self-eMOtion_Tracking_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 2，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/947406ff4236/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/947406ff4236/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Abdelfattah_OSMO_Open-vocabulary_Self-eMOtion_Tracking_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 3，PDF 第 6 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/947406ff4236/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/947406ff4236/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Abdelfattah_OSMO_Open-vocabulary_Self-eMOtion_Tracking_CVPR_2026_paper.pdf#page=6)

另有 17 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Abdelfattah_OSMO_Open-vocabulary_Self-eMOtion_Tracking_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
