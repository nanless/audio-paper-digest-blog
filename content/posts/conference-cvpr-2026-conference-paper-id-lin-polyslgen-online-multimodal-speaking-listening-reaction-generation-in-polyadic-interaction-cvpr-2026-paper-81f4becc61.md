---
title: "PolySLGen: Online Multimodal Speaking-Listening Reaction Generation in Polyadic Interaction"
date: 2026-09-13
draft: false
description: "针对多人交互中只建模说话或只建模双人的不足，PolySLGen 用过去全组语音与动作为条件联合生成目标人的文本、语音风格、身体动作和说话状态分，证据是动作与说话状态预测上优于多个基线，代价是推理约 5 帧每秒且说话状态预测仍困难。"
tags: ["多模态学习", "语音对话系统", "语音合成", "轮次切换"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Lin_PolySLGen_Online_Multimodal_Speaking-Listening_Reaction_Generation_in_Polyadic_Interaction_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Lin_PolySLGen_Online_Multimodal_Speaking-Listening_Reaction_Generation_in_Polyadic_Interaction_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Lin_PolySLGen_Online_Multimodal_Speaking-Listening_Reaction_Generation_in_Polyadic_Interaction_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "7523260757241dff264b0cf1edaef02d426da1e553743be0c201798038c7dd59"
paper_digest_api_reader_plan_sha256: "21f7ef59a15819903a6eb3e92d6e6dd4d3ff809522ada174723d2b179af7bae7"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "b02509f01e460c7099fdc0e9bb8009b062495d2a2928589f305941cffc9113e1"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "51e542e49d96529ed028198c5eba077532e14c070b21fb7a5e9156c23d092308"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "47a4647ecb8efc30aa39572dffbd18cd656ec438e8141fd0c905585312fa3866"
paper_digest_api_reader_author_count: 4
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "243a98000e06d7664d9bdc7bfeafc290a89ef52a762c9f8078c3bb9f4be73cc2"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"task","id":"task.speech-dialogue","label":"语音对话系统"},{"facet":"task","id":"task.speech-synthesis","label":"语音合成"},{"facet":"task","id":"task.turn-taking","label":"轮次切换"}]
paper_digest_primary_task: "语音对话系统"
paper_digest_primary_method: "多模态学习"
paper_digest_score: 6.1
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 多人同时说话时，目标人该接话还是倾听：PolySLGen 的在线多模态反应生成

> 英文题目：*PolySLGen: Online Multimodal Speaking-Listening Reaction Generation in Polyadic Interaction*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Lin_PolySLGen_Online_Multimodal_Speaking-Listening_Reaction_Generation_in_Polyadic_Interaction_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Lin_PolySLGen_Online_Multimodal_Speaking-Listening_Reaction_Generation_in_Polyadic_Interaction_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Lin_PolySLGen_Online_Multimodal_Speaking-Listening_Reaction_Generation_in_Polyadic_Interaction_CVPR_2026_paper.pdf)

标签：#多模态学习 #语音对话系统 #语音合成 #轮次切换

评分：**6.1/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Zhi-Yi Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Thomas Markhorst：机构信息未能从会议 PDF 纯文本可靠映射
- Jouh Yeong Chew：机构信息未能从会议 PDF 纯文本可靠映射
- Xucong Zhang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

多人在线反应需以全部参与者历史语音与身体动作为输入，为目标人物联合生成未来说话文本语音与身体动作及说话状态分，难点在于多人依赖建模、语音动作协同与轮次切换时机判断。PolySLGen先将历史语音经说话人分割与语音识别转写为文本并经StyleTTS 2提取风格特征，同时将多人物体姿态经姿态融合压缩为紧凑嵌入并由头朝向计算社交线索嵌入。上述文本、风格、运动与社交嵌入一并送入LoRA微调的Llama3-8B-Instruct进行统一推理，其输出再经模态解码器分别还原为文本、语音风格、身体动作与说话状态分。与先前双人或仅说话方法不同，该设计显式联合非说话者动作与注视朝向并以软分数管理轮次，具有实际多人群聊连贯性意义。在DnD Group Gesture测试集下，PolySLGen的说话状态指标AP为0.67，高于Random基线的说话状态指标AP 0.50。该结论适用边界受限于五人桌面角色扮演场景与地下城主目标角色，尚未验证开放域会议或日常群聊。其推理开销在A100硬件上约5 FPS且约82%延迟来自语言模型，尚未完全实时。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，哪些信息不能丢？

这篇论文研究的是多人面对面场景下具身智能体的反应生成。输入是过去一段时间内所有参与者的语音对话与身体动作，目标是为其中一个指定目标人生成未来一小段反应。输出不是单一模态，而是三部分一起给出：未来文本与对应语音、身体与手部动作，以及一个说话状态分。这个分数表示模型认为目标人应该说话的置信度，用来软性引导轮次，而不是硬切换说话与倾听。

学习时必须保留的信息包括谁说了什么、说话方式如何、多人动作如何相互影响，以及谁在注意谁。论文强调在线与因果条件，即只能用过去观察，不能偷看未来上下文，这对应真实部署中机器人必须边听边看边做决定的约束。数据集采用桌游角色扮演的多人同步音频、视频与 3 维全身手部动作，目标人选为地下城主，因为其交互更频繁多样。

需要先说明的是，当前没有发现来源绑定且完成验证的代码与数据资源，因此本解读不声称代码或模型已公开，只按论文正文讲方法与实验条件。

### 已有路线在输入、目标与运行阶段上有何不同？

第一条路线是指令驱动的动作生成，例如给定文本描述或音频生成动作。这类方法需要明确说明要做什么动作，而本任务要求直接从过去交互推断合适的未来反应，不给预设动作指令。第二条路线是交互动作生成，例如根据对方文本、语音或动作生成回应动作，但多数只处理双人，且需要过去加未来上下文做离线生成，不满足在线因果要求。

第三条路线是多模态反应生成，近期有工作同时生成语音与动作，但仍限于双人且只生成说话反应，不说话时回退到默认动作。第 4 条路线是把大语言模型扩展到非文本模态，例如学习轻量适配器对齐语音风格与动作，而不单独预训练每种模态的编码器与解码器。按同输入、同目标、同监督与同运行阶段对照，本文与上述路线的区别在于同时满足多人、在线、说话加倾听、多模态 4 个条件。理解这一点可以避免把双人离线指标直接当成同条件胜负。

### 为什么多人场景需要同时生成说话与倾听？

在双人对话里轮次相对简单，而在多人协作、教育与社交支持等场景中，参与者数量增加会带来高阶依赖：手势、朝向、语音内容与注意方向共同决定下一个人是否接话。如果模型只会说话，一到不该说话的时刻就会出现动作跳变；如果只看动作不听语音，又无法参与有意义的对话。论文把问题形式化为给定过去文本、语音风格、身体手部动作，预测目标人未来文本、语音风格、动作与说话状态分。举例来说，这只是一个教学例子，不是论文数值：当多人正在讨论证据归属，目标人可能接一句短评并看向物品，也可能保持倾听姿态，两者都是合法反应，关键是与上下文在语义与节拍上一致。

**说话反应 × 倾听反应：** 说话反应指目标人产生有词语句子并伴随手势的输出，倾听反应指目标人无 spoken words 但有点头、注视与姿态保持的输出，前者分工是参与内容推进，后者分工是维持参与与连贯，二者搭配的理由是真实多人对话不断在两者间切换，组合后新增的作用是避免不说话时切到默认动作造成的不自然断裂。

以下示意图先给出任务全貌，左侧为过去的多人语音与动作，右侧为目标人未来两种可能的反应分支，中间用推理模块连接，并显式标出说话疑问判断。

> **看图路径：** 1. 先看上部过去观察区多人骨架与多条不同颜色语音气泡的对应关系；2. 再看中部推理区过去语音加动作箭头进入方框并分出说话疑问分支；3. 最后对比下部未来反应区左侧有词句子加动作与右侧倾听加静止动作的差异

[![原论文 Figure 1：Overview of the online reaction generation task in polyadic interaction.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ee7e0bf39015/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ee7e0bf39015/figure-1.png)

*论文图 1。原论文 Figure 1：“Overview of the online reaction generation task in polyadic interaction.”。*

从像素可见，图分为过去观察、推理、未来反应三栏。过去观察栏有多人骨架围圈站立与 4 条彩色语音气泡，推理栏把过去语音加动作箭头送入深色方框并引出目标人骨架与说话疑问气泡，未来反应栏左侧为有词句子加连续动作序列，右侧为倾听标注加幅度更小的动作序列。这种画法把在线条件、单目标预测与说话倾听双分支 1 次讲清，后文方法图将展开方框内部如何编码 4 类输入。

### PolySLGen 如何走完从过去观察到未来反应的全流程？

沿一个样本走一遍有助于建立依赖顺序。先做语音处理：把过去约 20 秒音频按说话人切分话语，转写为文本，同时提取每段话语的语音风格特征，文本可直接作为语言模型输入，风格特征经适配器投影为同维嵌入。再做动作与社交处理：把过去约 2 秒半的多人身体手部动作送入姿态融合模块，把非目标人头部朝向送入社交线索编码器，分别得到动作嵌入与社交线索嵌入。

然后把文本嵌入、语音风格嵌入、动作嵌入、社交线索嵌入一起送入预训练语言模型做交互推理，模型输出 3 类隐藏表示，分别经各自解码头还原为未来文本、语音风格与动作，另从首个输出嵌入经多层感知机预测说话状态分。文本与语音风格的生成独立于该分数，该分数只做软提示。最后用预测风格与文本经语音合成器得到波形，用投影头得到关节表示。
以下为架构总览的导读，重点是 4 类输入如何汇入语言模型，以及输出如何分叉为 3 模态加一分数。

> **看图路径：** 1. 先沿底部五人动作序列向上看文本语音风格与动作社交线索四类嵌入的汇入顺序；2. 再看中部姿态融合内自注意力到交叉注意力再到多层感知机的堆叠方向；3. 最后看右侧大语言模型输出三类隐藏表示并分叉出说话判断与动作语音波形的路径

[![原论文 Figure 2：Overview of PolySLGen. Past multimodal group interactions are encoded into text et, speech style…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ee7e0bf39015/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ee7e0bf39015/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of PolySLGen. Past multimodal group interactions are encoded into text et, speech style es, motion em, and social cue ec embeddings as the inputs.”。*

从像素可见，顶部为四色嵌入序列送入右侧语言模型，底部左侧为 5 人动作序列分别指向姿态融合与文本风格分支，中部姿态融合标出自注意力在下、交叉注意力在中、多层感知机在上，右侧社交线索编码器标出俯视视角的朝向向量与相对位置向量及其余弦计算，右端输出 3 类隐藏表示并分叉出说话判断、骨架与声波。这种布局对应白话流程：低层动作先在模块内做跨人聚合，高层注意先做成分数矩阵再压缩，最后都以定长嵌入进入语言模型，从而支持可变人数而不随人数线性增长输入长度。

### 姿态融合与社交线索编码器各自算什么？

先讲白话。姿态融合可以理解为多人动作压缩器，社交线索编码器可以理解为谁看谁的注意统计器，英文分别为 pose fusion 与 social cue encoder。姿态融合内部先用自注意力编码目标人自身动作的时间动态，再用交叉注意力把其他人的动作作为键值聚合进来，最后经多层感知机输出融合嵌入。这样做的原因是若把多人动作逐帧拼接送入语言模型，既破坏跨人相干性建模，又占用语言上下文。

社交线索编码器对每个非目标人在每帧计算注意分，定义为头部朝向向量与指向目标人的相对位置向量之间的余弦值，越高表示越朝向目标人，再把所有过去帧的分数组成时间社交信号，经多阶段多层感知机在时间与参与者维度上聚合为定长嵌入。

**姿态融合 × 大语言模型推理：** 姿态融合负责把多人的身体与手部动作压缩为定长联合嵌入，解决多人输入过长和因果建模割裂的问题，大语言模型推理负责结合文本、语音风格与该嵌入做对话理解，二者搭配的理由是前者提供低层跨人交互基础，后者提供语义与轮次判断，组合后新增的作用是以固定长度接入可变人数而不挤占语言上下文。

**社交线索编码器 × 说话状态分：** 社交线索编码器负责从非目标人的头部朝向计算对目标人的注意分数并聚合成高层嵌入，说话状态分负责从首个输出嵌入预测目标人应说话的置信度，前者分工是提供谁在看谁的群体注意，后者分工是输出软性的轮次提示，二者搭配是因为注意信号有助于判断是否该接话，组合后使文本与语音生成独立于该分数而仍受其引导。

**语音风格 × 语音合成：** 语音风格负责用特征向量编码语速、语调与表现力等韵律情感特性，语音合成负责把生成的文本与预测的风格特征转为波形，前者分工是保留说话方式，后者分工是落实可听输出，二者搭配的理由是只生成文本无法还原语气，组合后新增的作用是使语音与动作在节拍对齐上保持一致。

补充语音侧细节：语音风格适配器把风格特征投影到语言模型维度，输出侧另有风格投影头映射回原风格空间，再与生成文本一起送入语音合成器解码器。动作侧另有动作投影头把输出姿态嵌入映射回原始动作表示。说话状态分由首个输出嵌入经多层感知机得到，总损失为文本交叉熵、风格均方误差、状态二元交叉熵与动作损失的加权和，动作损失还包含表示层损失、局部 3 维关键点损失、根节点位置损失与时序平滑及地面接触正则。原文未给出各权重具体数值与梯度停止细节，这部分属于缺项，不从模型名称推定。

### 模型哪些参数更新，训练与推理如何组织？

论文使用语言模型主干并做低秩适配微调，只调查询、键、值投影层，其余主干冻结，动作、风格、社交等新模块与解码头参与训练。优化器与批量、学习率、轮次与输入长度在下表中集中核对，训练在一块显卡上完成，取最后一轮为最终模型。推理时给定过去语音与动作即可在线生成未来反应，缺失参与者时可用零填充或忽略，架构支持可变人数。

需要区分的是，论文报告的运行速度约为每秒 5 帧，其中大部分时间花在语言模型上，这属于推理开销观察，不是训练成本，也不等于实际延迟已满足实时交互。原文未报告梯度路径是否截断、不同模态损失的权重取值与重置时机，这些缺项在复现时需要按原文补充材料核对，不自行假设。
下表提出的问题是训练配置是否完整可复述，公平条件是只收录原文连续句子中逐字出现的数值与单位，指标方向不适用，重点看批量、学习率、轮次与上下文长度是否齐备。

| 来源证据 | 量化值 1 | 量化值 2 | 量化值 3 | 量化值 4 |
| --- | --- | --- | --- | --- |
| 来源句 2 | 93 | 103350 | 2021 | 1；9942；9952；2023；2；4；16 |
| 来源句 3 | 2 | 38 | — | — |
| 来源句 4 | 3 | 16 | — | — |

表后解释如下。低秩适配的秩与系数及丢弃率决定了可调参数量级，批量与双学习率区分了语言模型与新模块的更新步长，20 轮与取末轮说明了停止规则，最大输入长度限制了过去语音文本能放多少。这些信息支持判断训练预算与复现起点，但不支持推断去掉任一超参数后必然如何。代价是原文未公开权重下载状态，按本次资源核验不得声称已公开，复现前应先确认补充材料中的损失权重与数据划分。
下表进一步核对输入表示维度与历史窗，同样只用原文连续句子覆盖数字，条件是同一数据集与同一目标人设置。

| 来源证据 | 量化值 1 | 量化值 2 | 量化值 3 | 量化值 4 |
| --- | --- | --- | --- | --- |
| 来源句 1 | 20 epochs | 256 | 327 | 6；23；3072；5；2 |
| 来源句 2 | 582 | 592 | 2024 | 3；9；13；774547；2022；2；21；2502.20370；2025；10；41；1；16；5 |

表后解释如下。风格、动作、朝向与语言隐藏维度决定了各适配器与投影头的矩阵形状，组大小与社交嵌入长度决定了融合与注意聚合的输入规模，语音与动作历史帧数及其对应秒数决定了过去观察的时间范围。这些维度共同解释了为什么多人动作必须先压缩再进入语言模型。未胜出项是原文未报告不同历史窗长度的对比，因此不能声称当前窗长最优，待验证的是更长语音上下文是否改善轮次判断。

### 数据、基线、指标与实现条件是什么？

数据采用多人桌游手势数据集，共四节约 6 小时，最后一段留作测试，组大小为 5 人，目标人为地下城主。论文说明其他数据集或缺模态、或缺 3 维姿态、或限于双人、或多人结构有限，因此不适合本任务。基线包括随机返回训练段、按输入检索最近邻、用语言模型生成文本再接离线动作生成、把双人表情反应方法扩展到全身与多人、把近期双人多模态反应方法扩展到多人并只在说话数据上训练，以及仅用过去动作预测未来动作的动作预测变体。

若基线未生成文本或文本无 spoken words，则视为倾听。动作指标用根节点误差与平均关节位置误差衡量空间精度，用距离与多样性衡量与真值分布的接近程度，用节拍对齐差衡量语音与动作同步。语音指标用语义相似度、词错率与说话人相似度，说话状态用平均精度，社交语义用头部平均角度误差与社交线索分误差。实现上语言模型最大输入长度与优化设置已在训练节列出，评估还包括人工打分，覆盖动作连贯、动作连续、语音语义、语音音色与总体自然度。

### 主结果在动作、语音、说话状态与人工感知上说明什么？

论文报告 PolySLGen 在多数动作误差、全部语音相关指标与说话状态平均精度上优于所列基线，多个双人方法扩展到多人后与随机或最近邻相当，动作预测变体虽优于直接扩展的双人方法但仍不及联合建模语音与动作的完整方法。语音侧的优势被解释为联合考虑全组言语与非言语线索有助于生成适时回应，而仅用语言模型生成文本再接动作的方法在多人适时性上不足。

说话状态预测上基线接近随机水平，完整方法达到更高平均精度，论文将其归因于姿态融合与社交编码提供的非言语线索。社交语义上完整方法在头部误差与各用户注意分误差上最低，但提升幅度相对较小。人工评价中完整方法在五项打分上均高于对比方法，动作连续性提升最大，并被解释为对目标人过去动作的建模带来平滑过渡。

以下可视对比先提出问题：在说话与倾听两种未来下，生成文本与动作谁更贴近真值，条件是同一过去观察与同一目标人，指标方向是文本语义贴近对话且动作与灰色真值重叠更多为好。

> **看图路径：** 1. 先看顶部观察行左右两列分别为多人讨论与游戏行动的文本加站位图；2. 再看中部真值行左侧短答与右侧倾听标注与两类方法的生成文本差异；3. 最后对比底部两行骨架序列与灰色真值重叠程度及说话状态分标注位置

[![原论文 Figure 3：Visual comparison between PolySLGen and SOLAMI.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ee7e0bf39015/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/ee7e0bf39015/figure-3.png)

*论文图 3。原论文 Figure 3：“Visual comparison between PolySLGen and SOLAMI.”。*

从像素可见，左列为说话反应，右列为倾听反应。观察行给出多轮彩色对话与站位，真值行左侧为短答右侧为倾听标注，对比方法在右侧倾听时仍生成有词句子且动作偏离较大，而本方法右侧输出倾听标注并给出极低说话状态分，左侧输出与 paperwork 相关的句子并给出高说话状态分，骨架与灰色真值重叠更好。这支持联合建模与状态预测有助于区分两种反应，但不支持把某一样本的语义差异推广为整体语义最优，因为桌游即兴对话本身允许多种合理回答。
下表为人工评价的逐项打分，条件是随机抽取五节并由二十余名参与者按 5 分量表打分，分数越高表示感知质量越好。

| Aspect | SOLAMI | [23] PolySLGen |
| --- | --- | --- |
| Motion Coherence | 2.7 ± 1.2 | 3.6 ± 1.1 |
| Motion Continuity | 2.4 ± 1.2 | 3.8 ± 1.2 |
| Speech Semantics | 2.3 ± 1.1 | 3.6 ± 1.3 |
| Speech Tone | 3.1 ± 1.2 | 3.9 ± 1.0 |
| Overall | 2.5 ± 1.0 | 3.4 ± 1.1 |

表后解释如下。主要收益是完整方法在动作连贯、动作连续、语音语义、语音音色与总体五项上均高于对比方法，其中动作连续差距最大。代价与反例是人工样本仅五节且评分方差较大，语音音色差距相对较小，且自动语音相似度指标曾显示对比方法因使用测试集音频提示而更高，这说明音色相似不等于语义与节拍对齐更好。未评测边界是更大人群与更自然领域下的泛化，原文也指出数据集领域有限。

### 去掉动作观察或模块后性能如何变化？

消融按增量组织。第一个问题是动作观察是否有用，条件是从纯语音观察起逐步加入说话人动作与非说话人动作，指标方向是根节点与关节误差、距离越低越好，多样性越接近真值越好。下表直接采用原表选择以保留行列原貌。

| w/o motion observation | 165.1 | 202.5 | 19.42 | 124.89 |
| --- | --- | --- | --- | --- |
| + verbal motion | 157.6 | 175.5 | 16.36 | 123.18 |
| + non-verbal motion | 126.1 | 153.3 | 14.01 | 121.37 |

表后解释如下。主要收益是加入说话人动作已能降低误差，再加入非说话人动作后在全部动作指标上达到最好，这支持说话与非说话人的动作都提供上下文与人际信息。代价是该表只覆盖动作侧，未同时报告语音与状态变化，不能据此断言语音必然同步改善。未胜出项是无动作观察基线误差最高，说明纯语音不足以定位身体反应。
第二个问题是姿态融合与社交线索编码器各自的贡献。

论文报告只加姿态融合在动作、语音语义声学相似与状态平均精度上均有明显提升，只加社交编码器则不一致，可能因高层特征缺乏动作动态 grounding，而两者合用在动作质量与状态平均精度上进一步提升，但在词错率与语义分上有轻微权衡。这支持低层多人动作理解是基础、高层社交线索需与之结合的判断。

第三个问题是缺失参与者的鲁棒性，随机去掉 1 至 3 名非目标人后误差上升，但即使缺失仍略优于全观察下的对比方法，状态平均精度在去掉 2 人后下降更多，可能因通常只有 2 名非目标人活跃。原文未报告缺失目标人本身或缺失语音的情形，属于未评测边界。

### 哪些结论还不能下，部署前还缺什么验证？

论文明确列出 3 类局限。第一，说话状态预测仍困难，未来可从更好转录理解与更丰富社交信号改进，这意味着当前平均精度的提升应表述为报告显示而非已解决轮次问题。第二，数据集领域限于桌游角色扮演，动作与对话风格特殊，需要更多样自然交互数据集做全面评估，因此跨领域泛化属于待验证。

第三，在线设置支持实时推理但尚未完全实时，在特定显卡上约每秒 5 帧且大部分耗时在语言模型，未来需优化语言模型推理以降低延迟，这意味着不能把在线因果等同于低延迟可用。此外，语音合成中对比方法使用测试集音频提示会抬高说话人相似度，直接比较该单项会不公平；多样性指标是越接近真值越好，不是越高越好；自动指标不能当作人工感知，百分点与相对百分比也需区分。

未测量误判率、端到端延迟分布与传感器失效组合时，不承诺这些量得到改善。

### 复现应先固定哪些信息条件与检查点？

复现先固定信息条件：只能用过去观察预测未来，不引入未来上下文；组大小为 5 人并以地下城主为目标人；语音历史与动作历史分别按原文帧数与秒数截取；文本经转写获得，风格经语音风格模型获得，动作与头部朝向按原文维度组织。先跑通动作预测变体与最近邻基线，确认动作误差与分布距离的计算口径，再加入姿态融合，最后加入社交线索编码器，观察动作误差、节拍对齐差、语义分与状态平均精度的联动。

检查点包括输入长度是否截断语音文本、缺失参与者是否零填充或忽略、说话状态分是否只做软提示而不强制切换、倾听样本是否按无 spoken words 判定。训练侧先按训练节表格固定批量、学习率、轮次与适配器秩系数，再核对补充材料中的损失权重与动作正则。若资源状态显示不可用，则不要假设可下载权重，应先复现数据处理与评测流程。

常见误解是把多样性越高当成越好，或把说话人相似度高当成整体语音更好，复现时应同时看语义、词错率与节拍对齐，并结合人工试看判断连贯与连续。

### 何时值得尝试 PolySLGen，何时应谨慎？

当任务同时满足多人、在线、多模态与说话倾听切换时，这套以融合嵌入加社交注意加状态分数的方案值得尝试，因为它用定长嵌入解决可变人数问题，用软分数保留轮次灵活性，并在动作、语音与状态三侧均有可核对的对照。当场景是双人离线、有明确动作指令、或只需要单模态输出时，不必照搬全套结构，可只借鉴其中一个模块。当输入经常缺失参与者或视角遮挡时，需先补测缺失组合下的稳定性，再谈部署。

还需补的验证包括自然多人对话数据上的泛化、更长语音上下文的影响、以及语言模型加速后的真实延迟与资源占用。总体判断是论文报告了一种更贴近真实社交的反应生成路径，但说话状态预测与实时性仍是主要代价，后续工作应在保留因果条件的前提下优化推理并丰富社交信号。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/e21e9c7786ce/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/e21e9c7786ce/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Lin_PolySLGen_Online_Multimodal_Speaking-Listening_Reaction_Generation_in_Polyadic_Interaction_CVPR_2026_paper.pdf#page=4)

[![原文数学表达区域 2，PDF 第 4 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/e21e9c7786ce/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/e21e9c7786ce/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Lin_PolySLGen_Online_Multimodal_Speaking-Listening_Reaction_Generation_in_Polyadic_Interaction_CVPR_2026_paper.pdf#page=4)

另有 21 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Lin_PolySLGen_Online_Multimodal_Speaking-Listening_Reaction_Generation_in_Polyadic_Interaction_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
