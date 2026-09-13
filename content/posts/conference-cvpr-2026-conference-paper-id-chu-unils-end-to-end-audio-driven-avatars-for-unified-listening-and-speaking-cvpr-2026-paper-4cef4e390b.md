---
title: "UniLS: End-to-End Audio-Driven Avatars for Unified Listening and Speaking"
date: 2026-09-13
draft: false
description: "针对直接联合训练让倾听分支塌缩为静态表情的问题，UniLS 用无音频自回归预训练学习内在运动先验，再用双轨音频交叉注意力微调实现端到端说听生成，在 Seamless Interaction 测试与 25 人偏好比较中报告说话对齐与倾听分布同时改善，代价是更大算量与仍缺语义理解。"
tags: ["自回归模型", "端到端学习", "语音", "音视频交互"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Chu_UniLS_End-to-End_Audio-Driven_Avatars_for_Unified_Listening_and_Speaking_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Chu_UniLS_End-to-End_Audio-Driven_Avatars_for_Unified_Listening_and_Speaking_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Chu_UniLS_End-to-End_Audio-Driven_Avatars_for_Unified_Listening_and_Speaking_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "dd6e166fe3d8bab0e0ee286ea5ba1fbb77ca7bee1843d600866411d2d4512a07"
paper_digest_api_reader_plan_sha256: "8eae45b2833193e160947e1793f98a7b4fc2abda9199ddaa88c48041a26a5d45"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "d8db6db3e856557bcbdded11d53c89de11f165688980e7feaee01302ede9b69b"
paper_digest_api_reader_source_table_count: 3
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "cf9257bd1d796085b1014dba84654247a1219dbd08309a253709792d685628a2"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "1cad93946bfdce64aa7ee2c8b81be93e7d4172c7c22d4431378863bce797a4d9"
paper_digest_api_reader_author_count: 6
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "40a0abe4a559763b7581cf8934dc5767cc5686a183b027f86837e839578c20cf"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.autoregressive","label":"自回归模型"},{"facet":"method","id":"method.end-to-end-learning","label":"端到端学习"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.av-interaction","label":"音视频交互"}]
paper_digest_primary_task: "音视频交互"
paper_digest_primary_method: "端到端学习"
paper_digest_score: 6.9
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 倾听塌缩的拆解：先学自发先验再用双轨音频调制的 UniLS

> 英文题目：*UniLS: End-to-End Audio-Driven Avatars for Unified Listening and Speaking*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Chu_UniLS_End-to-End_Audio-Driven_Avatars_for_Unified_Listening_and_Speaking_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Chu_UniLS_End-to-End_Audio-Driven_Avatars_for_Unified_Listening_and_Speaking_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Chu_UniLS_End-to-End_Audio-Driven_Avatars_for_Unified_Listening_and_Speaking_CVPR_2026_paper.pdf)

标签：#自回归模型 #端到端学习 #语音 #音视频交互

评分：**6.9/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Xuangeng Chu：机构信息未能从会议 PDF 纯文本可靠映射
- Ruicong Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yifei Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Yun Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yichen Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Bo Zheng：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

统一倾听与说话头像以双人语音为输入，同时生成说话者精准口型与倾听者自然反应，难点在于倾听动作与音频弱相关，直接联合训练会坍缩为僵硬扑克脸。第一步在多场景数据上训练无音频块状自回归生成器，学习眨眼点头头部漂移等内部运动先验。第二步冻结主干与wav2vec语音编码器，在每个Transformer块新增分别关注双说话人的双交叉注意力分支，用双音轨语音特征调制先验以实现听说统一驱动。与单向说话模型及非端到端DualTalk不同，该设计保留自发运动多样性同时注入韵律线索，推理时仅需双人音频即可端到端输出双侧FLAME参数序列。在Seamless Interaction测试集下，UniLS的F-FID为4.304，低于DualTalk的F-FID 13.143。其结论适用边界受限于韵律驱动的反应性倾听，尚未验证语义一致的赞同点头或否定摇头，且块状建模偶发细微不连续。训练成本约为四卡H200上共计40 GPU小时，推理吞吐在单卡上达560.6 FPS并支持实时运行。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，输出是什么，什么信息必须保留？

这篇论文研究的输入是双轨语音，也就是对话中说话人 A 与说话人 B 各自的音频流。目标是同时生成两个虚拟人的 3 维面部动作，既包括说话时的口型与表情，也包括倾听时的眨眼、点头与微表情。输出不是视频像素，而是 FLAME 3 维可变形人头模型的参数序列。白话说，FLAME 就是一组参数化的人头模板，英文名为 FLAME 3D deformable model，后文简称 FLAME，后续可以重建出具有 5 千量级顶点的网格。

初学者容易把这件事理解成声音到嘴型的回归。论文强调必须保留的信息有 3 类。第一类是说话人自身的强对齐信息，音素与节奏直接决定嘴部开合。第二类是倾听者的弱关联信息，对方说话的节奏与强调只松散地影响点头与表情时机，大量眨眼与微动作本来就独立发生。第三类是身份风格信息，不同人说话与倾听的幅度习惯不同，不能混成平均脸。

下面这张图先给出核心动机的实证依据，它对比了说话与倾听两种条件下音频特征与表情参数在降维空间中的距离分布，是理解后文 2 阶段设计的起点，图前导读到此结束，标记之后将解释可见的分布差异。

> **看图路径：** 1. 先看上排左侧说话散点中红色音频与蓝色动作的重叠程度；2. 再看上排右侧倾听散点中跨越全图的连线长度与颜色；3. 最后看下排直方图中红色说话峰与蓝色倾听拖尾的位置差异

[![原论文 Figure 2：Correlation between facial expression parameters \[14\] and corresponding audio features \[2\].](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6cae149ddbde/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6cae149ddbde/figure-2.png)

*论文图 2。原论文 Figure 2：“Correlation between facial expression parameters [14] and corresponding audio features [2].”。*

上图上排左侧说话条件的红色音频点与蓝色动作点互相交叠，连线短而集中，说明自己声音与自己动作距离近。上排右侧倾听条件则布满横跨全图的长连线，颜色偏向表示大距离的暖色，说明用对方语音直接预测倾听动作缺乏足够约束。下排直方图中红色说话峰集中在较小距离区间，而蓝色倾听分布明显右移并拖出长尾。论文据此提出把倾听拆成内在先验加外部调制，而不是单一端到端映射。资源状态方面，本次未发现来源绑定且完成验证的代码、模型或数据资源，因此不能声称代码或数据已公开，所有复现讨论只依据论文文字描述的跟踪与训练流程。

### 同输入同目标的路线有哪些差异？

语音驱动 3 维面部动画的早期路线是过程式与规则式方法，把语音切成音素再映射到视素，用手工规则或运动图约束生成。这种路线输入也是语音，目标也是口型，但需要大量调参与特定采集数据，难以覆盖自然对话的多样性。教学例子：这好比先查发音字典再摆口型，遇到即兴对话就容易对不上。

深度学习兴起后，FaceFormer、CodeTalker、SelfTalk 等端到端结构直接学习音频到网格或顶点运动的映射，近期 UniTalker、ScanTalk 与 ARTalk 进一步提升跨身份泛化与可重定向能力。它们的共同局限是只建模说话行为，不处理说听交互。另一条线是只生成倾听反应，例如 Learning to Listen 根据说话人语音与网格生成点头或微笑，CustomListener 等引入文本引导，但输出多为短暂孤立反应，缺乏长时连贯的双向对话建模。

与 UniLS 最接近的是 DualTalk，它首次把说话与倾听放在统一框架里生成。但它的运行阶段不同，需要先得到对话对方预计算的面部序列，再生成另一方的说听动作，因此不是端到端，引入额外处理阶段与潜在时延。UniLS 的对照正是针对这一点，只用双轨音频同时生成两路动作，省去对外部动作输入的依赖。教学例子：可以把 DualTalk 想象成先请 1 位演员演一遍再让另 1 位配反应，而 UniLS 要求 2 人只听录音就同时演出。

从运行阶段看，前者属于两步流水线，后者属于单模型端到端。这种差异直接决定实时部署的可行性，也是后文图 1 要表达的系统结构对比。相关工作的胜负不能只看精度数字，还要看输入条件是否一致，是否允许使用真值动作作为额外输入。

### 为什么直接联合训练会让倾听变僵？

论文先做了一个观察。当用朴素端到端方式在说听数据上联合训练时，倾听表情会变僵。典型例子是当说话人 A 倾听、B 说话时，A 自己的音频接近静音，模型就学会输出极小或零动作，导致 A 呈现扑克脸，眨眼很少，头部几乎不动，缺乏注意力与参与感。这种僵硬不是单帧错误，而是整段时间内方差过低。

为解释该现象，论文分析了音频特征与表情参数的相关性。说话时音频是本人的语音，嵌入后与说话动作聚类靠近，成对距离持续偏小。倾听时音频来自对方，倾听动作散落在更远处，眨眼与微表情等本来就独立于语音信号。网络容易学到说话的强映射，却得不到倾听的充分指导，于是倾听分支塌缩成低方差的安全先验。论文用分布距离支持这一判断，但相关性本身不是因果证明。

下图把单向方法、前序说听方法与本文方法的输入输出依赖画了出来，有助于从系统结构上理解非端到端为何阻塞实时，图前导读到此结束，标记之后将对照 3 列结构的输入输出链路。

> **看图路径：** 1. 先沿左侧单向模型的音频到动作箭头确认缺失的一端；2. 再看中间方法中说话人 A 动作先生成再输入下一模型的串行链路；3. 最后对比右侧双音频直接进入同一模型并同时输出两路动作的结构

[![原论文 Figure 1：Comparison between previous methods and our proposed approach.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6cae149ddbde/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6cae149ddbde/figure-1.png)

*论文图 1。原论文 Figure 1：“Comparison between previous methods and our proposed approach.”。*

从左到右看，左列显示说话专用与倾听专用模型各缺一端，无法同时覆盖对话。中列显示前序方法必须先用说话专用模型由 A 音频生成 A 动作，再把 A 动作与双音频一起送入说听模型，这种串行依赖就是非端到端的来源。右列显示 UniLS 只以 A 音频与 B 音频为输入，由同一模型同时输出 A 动作与 B 动作，标注为端到端与支持实时使用。这张图没有给出精度数字，只界定任务形态与实时性约束。

### 两阶段方案的全景是什么？

UniLS 把自然倾听重新解释为两部分之和。一部分是内在运动先验，反映眨眼频率、轻微点头与肌肉协同等自发模式。另一部分是外部音频线索，根据对话上下文对先验做调制。对应地，训练分成 2 个阶段。第 1 阶段去掉音频输入，在无配对的多场景数据上训练无音频自回归生成器，学习由过去动作预测未来动作的能力。第二阶段在配对对话数据上微调，引入 A 与 B 的语音，通过交叉注意力调制已学到的先验，产生音频驱动的说听动作。

走完一个样本有助于建立整体感。以生成说话人 A 为例，模型拿到 A 过去 t 帧的运动块、风格嵌入以及 A 与 B 的音频。第 1 阶段只用前两者预测下一块自由运动，第二阶段再让双轨音频参与调制，输出下一块音频驱动运动。生成 B 时把两路音频角色互换，流程相同。表示层面始终是 FLAME 表情与姿态参数按时间堆成的运动矩阵，编解码在离散码空间进行。

下图展示了 2 阶段的数据、模块与输出对应关系，是后文组件细节的地图，图前导读到此结束，标记之后将说明上下两部分的数据来源与参数更新范围。

> **看图路径：** 1. 先看上半部分无音频输入时过去动作加风格嵌入到未来动作的主路径；2. 再看下半部分两路音频分别进入两个交叉注意力模块的位置；3. 最后对比上下两部分火焰标记，确认新增与低秩微调的模块

[![原论文 Figure 3：Overview of our two-stage training strategy.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6cae149ddbde/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6cae149ddbde/figure-3.png)

*论文图 3。原论文 Figure 3：“Overview of our two-stage training strategy.”。*

上半部分输入为无配对多场景视频对应的动作，风格嵌入与过去动作拼接后进入由自注意力与前馈网络堆叠的自回归模型，输出自由运动。下半部分输入为配对对话数据，同样位置加入 A 音频与 B 音频各自对应的交叉注意力，并在自注意力与前馈处标注低秩适配微调。两部分的输出分别为自由动作与音频驱动动作，虚线框表示多帧序列。这种画法把数据配对关系、新增模块与参数更新范围放在一张图里。

**自回归生成器 × 风格嵌入：** 自回归生成器负责根据过去运动块逐步预测下一块，保证时序连贯，风格嵌入负责携带说话人特有的幅度与头部习惯，搭配理由是同一段语音不同人反应不同，风格嵌入让同一生成器在保留通用先验的同时产生个性化轨迹。

### 表示与生成器各负责什么计算？

表示部分采用 FLAME 模型。每个运动块把连续 T 帧的表情系数与姿态系数拼接成运动矩阵，形状为时间乘特征维。监督目标不是直接回归该矩阵，而是先经多尺度编解码器得到离散码，再以离散码为自回归目标。多尺度编解码器白话说是一个先压缩再分级细化的量化器。编码器先提取时序特征，再用包含多个尺度的码本逐级量化与插值，每 1 级细化时间分辨率并累加成最终运动码。

生成器本体是基于 Transformer 的分块自回归模型。第 1 阶段每个块包含自注意力与前馈，输入为过去运动块与风格嵌入的拼接，输出下一块运动。第二阶段每个块在自注意力后增加 2 个交叉注意力，一个关注 A 音频对应说话行为，另一个关注 B 音频对应倾听行为，随后接前馈。音频特征来自冻结的 wav2vec 编码器。新增交叉注意力从零训练，继承自主干的权重用 LoRA 方式微调。白话说，LoRA 就是只训练小幅外挂参数而不改动大部分原始权重，英文名为 Low-Rank Adaptation，后文简称 LoRA。

论文未给出 LoRA 秩、作用层全集与梯度停止的逐层细节，这部分属于缺项，复现时只能按文字描述在自注意力与前馈加适配、交叉注意力全训的粒度实现，不从模型名推定更细实现。消融显示单交叉注意力处理混合音频时说话精度下降明显，支持双路分别关注的设计。

**内部运动先验 × 外部音频线索：** 内部运动先验负责维持眨眼、点头、微表情这类无声时也存在的自发节律，外部音频线索负责按对话节奏调制其时机与幅度，二者搭配的原因是倾听动作与对方语音只弱相关，直接映射会塌缩为不动，先独立建模先验再做调制才能兼顾多样性与响应性。

**FLAME 参数 × 多尺度 VQ 编解码器：** FLAME 参数用表情系数与姿态系数描述 3 维人头运动，是监督与评估的表示基础，多尺度 VQ 编解码器把连续运动块压缩为由粗到细的离散码，是自回归的预测目标，前者给出可解释的 3 维目标，后者给出紧凑且时序连贯的离散目标，组合后模型只需预测离散码。

### 两阶段如何组织数据与优化？

第 1 阶段使用无配对多场景数据，包括新闻、采访、直播与日常说话视频，覆盖多身份与多环境。输入不含音频，模型根据过去动作与风格嵌入预测未来自由运动块，损失为分块自回归重建损失，即预测块与真实块之差的范数按块求和。这 1 阶段的目标是让模型学会眨眼、头部微动与微表情等内在动态。优化器为 AdamW，学习率与批量在下表中与第二阶段并列给出。

第二阶段使用配对对话数据，其中 A 与 B 的视频与音频同步，提供自然对话动力学。以 A 为例，输入包含 A 过去动作、风格嵌入以及 A 与 B 音频，模型经自注意力建模历史依赖，再经 2 个交叉注意力分别引入双轨语音，最后输出 A 的下一块说听动作。损失仍为同样的分块重建损失。骨干继承第 1 阶段权重并用 LoRA 微调，新增交叉注意力从零训练。音频编码器冻结，只训练生成器侧。

下表整理了论文明确报告的编解码与 2 阶段训练配置，比较问题是 2 阶段各用什么批量、迭代多少次、花多少硬件预算，公平条件是同一优化器类型与同一学习率写法，指标方向不适用配置表，只核对可复现的预算与规模。

| 模块 | 码本配置 | 窗口配置 | 批量与迭代 | 学习率与硬件 |
| --- | --- | --- | --- | --- |
| 运动编解码器 | consists of 256 entries | each with a code dimension of 64 | The time window size is 100 frames (4 seconds) | with a total batch size of 64 for 100,000 iter |
| 双阶段生成器 | rate of 1.0e-4 and a batch size of 128 for 200,000 iterations | All training was conducted on four NVIDIA | H200 GPUs, requiring a total of approximately 40 GPU | hours (10 GPU hours for the stage 1 and 30 GPU hours for stage 2) |

表后需要说明代价与边界。该表只给出优化器类型与学习率，未报告学习率调度、权重衰减、梯度裁剪与早停条件，也未报告 LoRA 秩与丢弃率，因此不能据此推定训练稳定性或复现方差。实际复现应先按表中批量与迭代跑通流程，再补做调度与随机种子对照。硬件总量可拆分为 2 阶段之和，总量约为 40 GPU 小时。

### 数据划分、跟踪与指标如何定义？

配对对话数据来自 Seamless Interaction 大规模双人对话视频，多场景数据额外采用 CelebV、TalkingHead-1KH、TEDTalk 与 VFHQ。为得到 3 维监督，论文设计跟踪管线逐帧提取 FLAME 参数，包括眼球注视与头部姿态。过滤后得到对话数据与多场景数据两大部分，对话部分又分为说话与倾听两类运动。划分上对话数据分为训练、验证与测试 3 部分，测试用于后文主结果。

下表把论文连续正文报告的时长与帧数整理成可核对的形式，比较问题是评估用多少对话数据、倾听与说话占比如何、划分是否留出独立测试，公平条件是同一跟踪管线与同一过滤后集合，时长单位为小时，帧数保留原文 1000000 帧写法。

| 数据来源 | 总时长 | 说话运动 | 倾听运动 | 数据划分 |
| --- | --- | --- | --- | --- |
| Seamless Interaction 对话数据 | After filtering, we obtain 657.5 hours of con | includes 251.5 hours of speaking motions com prising 22.6M frames | and 406.0 hours of listening motions comprising 36.5M frames | we use 622.5 hours for training, 4.8 hours for validation, and 30.2 hours for testing |
| 多场景视频集合 | versational data from Seamless Interaction, and 546.5 hours | 新闻采访直播等混合来源 | 同左混合来源 | 用于第 1 阶段无音频训练 |

表后解释适用条件与限制。表中可见倾听时长多于说话时长，测试集为 30.2 小时，具有一定规模。论文未公开跟踪管线的阈值细节与过滤后身份数，也未报告测试集说话人与训练集是否不重叠，因此跨身份泛化的严格程度待验证。指标方面，说话侧用唇顶点误差、平均头部距离、上脸动态偏差以及头姿与下颌姿态动态偏差，方向均为越小越好。倾听侧计算同样动态偏差并增加表情与姿态的 FID，同样越小越好。

基线包括扩散式 DiffPoseTalk、自回归 ARTalk、为说听改造的 ARTalk 星号版本以及非端到端 DualTalk。其中 ARTalk 星号版本增加了额外音频输入，使其可在相同双轨条件下运行，是公平性较好的对照。所有主结果都在同一测试划分上报告。

### 主结果支持什么判断，不支持什么？

主结果同时报告说话与倾听。论文文字总结称方法在说话精度上达到最优，并在倾听分布指标上带来大幅改善，生成更多样自然的倾听表情。定量表显示 UniLS 在唇同步与整体头部精度上优于各基线，上脸与姿态动态也更接近真值。倾听侧动态偏差与 FID 同步下降，说明模型没有塌缩成中性静态姿态，而是产生多样表情与头部运动。定性图显示基线倾听序列随时间几乎不变，而 UniLS 头部、嘴型与微表情随时间变化。

用户研究进一步从主观侧验证。25 名参与者做成对比较，随机并排展示本方法与基线视频，分别评价唇同步、表情自然度、倾听反应自然度与头姿自然度，统计偏好本方法的比例。下表直接选用原文用户研究表，保留全部可运行基线对照，数值为百分比，越大表示越偏好本方法。表前明确比较问题与公平条件：在相同音频与身份条件下，哪种生成结果在 4 个主观维度更自然，指标方向为偏好比例越高越好。

| Method | Sync | Exp | React | Pose |
| --- | --- | --- | --- | --- |
| vs. ARTalk* [5] | 76.92 | 77.88 | 79.80 | 74.52 |
| vs. DualTalk [26] | 86.06 | 90.38 | 91.35 | 89.42 |

表后解释主要收益与具体代价。表中可见相对 ARTalk 星号版本，本方法在 4 个维度均超过 70%，相对 DualTalk 均超过 80%，其中倾听反应偏好达到 90% 以上，支持 2 阶段设计显著改善倾听主观感受。但也必须指出未胜出项与边界：用户研究只报告偏好比例，未报告评分方差、显著性检验与参与者背景，也未测量误判率与延迟，因此不能把主观偏好直接等同于自动指标提升，更不能承诺实时延迟已最优。

**说话精度 × 倾听自然度：** 说话精度用唇顶点误差与头部距离衡量语音到口型的强对齐，倾听自然度用动态偏差与 FID 衡量生成分布是否接近真人分布，搭配评价的原因是两者相关强度不同，单一指标无法暴露倾听塌缩，必须同时报告才能判断统一说听模型是否两端成立。

下面这张倾听定性对比把僵硬问题可视化，图前导读到此结束，标记之后将解释各行随时间的变化幅度，像素细节只描述可见的头部朝向与表情开合。

> **看图路径：** 1. 先按左侧行标签区分真值与 3 种生成结果；2. 再沿顶部时间箭头观察同一行 3 张脸的变化幅度；3. 最后对比中间两行红色虚线框内的头部姿态与表情差异

[![原论文 Figure 4：Qualitative comparison on listening motions.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6cae149ddbde/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/6cae149ddbde/figure-4.png)

*论文图 4。原论文 Figure 4：“Qualitative comparison on listening motions.”。*

图中顶部标出时间向右，真值行头部明显偏转且嘴部开合变化。中间 2 行基线在红色虚线框内几乎保持同一正脸与同一微笑幅度，随时间缺乏变化。底部本方法行头部偏转与嘴部开合随时间连续变化，更接近真值行的多样性。该图支持分布指标的结论，但属于单样本展示，不能推广为全测试集每段都成立。

### 拿掉哪个组件会付出什么代价？

消融围绕 3 个变体展开。第一是将双交叉注意力换成单交叉注意力并输入混合音频，此时说话性能大幅下降，尤其是唇同步误差上升，原因是混合流难以区分两路语音特征。第二是去掉第 1 个阶段，直接做第二阶段训练，此时倾听动态偏差与 FID 明显变差，说明没有先验时倾听自然度难以维持。第三是第 1 阶段只用对话数据而不用多场景数据，此时说话稳定性与倾听多样性都下降，动态偏差与 FID 同步变差，说明多样化无配对数据有助于学到更强的通用先验。

这些对照支持论文的安排理由。双路分别关注的设计保留了说话与倾听的不同条件，无音频预训练提供了自发动态的起点，多场景数据扩大了先验覆盖。论文未报告去掉多尺度码本或风格嵌入后的结果，也未报告只冻结骨干而不加 LoRA 的对照，因此不能推断这些部件的单独贡献。教学例子：单交叉注意力好比把 2 人的台词混成一轨再让演员分辨谁在说话，自然容易错位。

实时性方面，论文在单张 RTX 5090 上比较，报告 UniLS 达到 560.6 帧每秒，高于 ARTalk 星号版本，DualTalk 因非端到端无法给出对应帧率。计算量上 UniLS 的浮点运算高于对照但参数量更小，总体呈现高吞吐与小模型并存的权衡。但帧率不等于端到端延迟，论文未分解音频编码、前处理与渲染耗时，因此实际交互延迟仍待验证。

消融的未胜出项同样重要。去掉多场景数据后说话指标也有所变差，说明先验不仅帮助倾听，也稳定了说话表达。这提示 2 阶段并非只对一端有益，而是通过更好的初始化改善了整体优化起点。

### 哪些结论尚属推测，边界在哪里？

论文明确列出 2 点局限。第一是缺乏语义理解，倾听行为主要由声学线索如节奏与强调驱动，而非对话含义，因此尚不能产生语义 grounded 的反应，例如赞同时点头、反对时摇头。第二是分块建模限制了完全连续的运动生成，偶发细微不连续。未来方向是引入语义信息与发展连续长时模型，以实现更具上下文感知的平滑化身。

从证据等级看，直接报告的是指标数值与用户偏好比例，有限解释的是用 t-SNE 距离说明弱相关导致塌缩，相关性本身不是因果证明。未验证推测包括多场景先验必然带来语义泛化，以及高帧率必然带来低交互延迟，这些在未测量延迟分布与语义对照前只能表述为可能与待验证。缺失证据不是技术错误，例如未报告统计显著性与身份不重叠划分，只是意味着复现时需要补做相应验证。

另一个边界是评估条件。主结果基于同一测试划分的自动指标与小规模偏好比较，未测量长时间对话中的漂移，也未评估噪声音频或重叠语音下的鲁棒性。因此结论适用于论文所述的干净双轨对话条件，换到更复杂的声学环境需要重新验证。

### 复现应先做什么，还需补哪项验证？

值得尝试的时机是需要同时生成说话与倾听、且只能拿到双轨音频而拿不到对方动作的实时场景。如果已有说话专用模型且允许离线两步流水线，前序非端到端方案仍可运行，不必强行切换。选择前先确认是否有双人同步音频，以及是否接受论文所述的 FLAME 参数级输出而非直接视频像素。

复现先做 3 件事。第一是复刻 FLAME 跟踪，得到表情、头姿、下颌与视线参数，并按 100 帧窗口切块，码本设为 256 条目与 64 维，多尺度取 1、5、25、50 与 100。第二是先在多场景数据上跑通无音频自回归，确认能生成包含眨眼与头部微动的自由序列，再冻结音频编码器，新增双交叉注意力并用 LoRA 微调骨干。第三是固定同一测试划分，同时报告说话的唇误差与头部距离，以及倾听的动态偏差与 FID，避免只看单端指标。

还需补的验证包括说话人与测试身份是否不重叠、用户研究的方差与显著性、以及包含音频编码与渲染在内的端到端延迟。由于本次未发现可验证的公开代码与权重链接，不能声称当前可用或已公开，应以论文文字与官方渠道为准，复现预算可参考约 40 GPU 小时的总量做规划。训练时注意记录随机种子与学习率调度，以便判断方差来源。

### 一句话收束与可带走的方法清单

UniLS 的核心判断是倾听不应被当作强映射来学，而应先学自发动态再让双轨音频调制，2 阶段加双交叉注意力的组合在报告的自动指标与用户偏好上同时改善了说话与倾听。这一判断由分布距离分析引出，由消融对照支持，由定性序列可视化佐证。

可带走的清单包括双轨音频为唯一驱动、FLAME 加多尺度离散码为表示、无音频预训练为先验来源、双交叉注意力加 LoRA 为调制手段、说听双端指标加用户 4 维评价为验收。适用时记得保留身份风格条件，缺项处不要从模型名脑补实现，语义反应与连续长时建模留待后续工作验证。

初学者复述时可以沿单样本链条组织：双轨音频输入、FLAME 运动矩阵表示、多尺度码本离散化、自回归分块预测、风格嵌入个性化、双交叉注意力调制、说听双端评估。每个环节只讲论文实际给出的计算与数据，不添加无源的数值或效果承诺。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7689576b9781/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7689576b9781/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Chu_UniLS_End-to-End_Audio-Driven_Avatars_for_Unified_Listening_and_Speaking_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 2，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7689576b9781/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7689576b9781/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Chu_UniLS_End-to-End_Audio-Driven_Avatars_for_Unified_Listening_and_Speaking_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 3，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7689576b9781/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7689576b9781/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Chu_UniLS_End-to-End_Audio-Driven_Avatars_for_Unified_Listening_and_Speaking_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 4，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7689576b9781/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7689576b9781/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Chu_UniLS_End-to-End_Audio-Driven_Avatars_for_Unified_Listening_and_Speaking_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 5，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7689576b9781/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7689576b9781/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Chu_UniLS_End-to-End_Audio-Driven_Avatars_for_Unified_Listening_and_Speaking_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 6，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7689576b9781/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/7689576b9781/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Chu_UniLS_End-to-End_Audio-Driven_Avatars_for_Unified_Listening_and_Speaking_CVPR_2026_paper.pdf#page=5)

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
