---
title: "InfinityHuman: Towards Long-Term Audio-Driven Human Animation"
date: 2026-09-13
draft: false
description: "针对长时长音频驱动全身动画的身份漂移与手部畸变问题，论文采用先生成低分辨率同步视频再用姿态引导精炼器恢复高分辨率的由粗到精路线，在全身集上报告图像距离 60.71 与手部置信度 0.90 等结果，代价是两阶段训练与大规模单人数据依赖。"
tags: ["流匹配", "强化学习", "音视频", "语音", "音视频生成"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Li_InfinityHuman_Towards_Long-Term_Audio-Driven_Human_Animation_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Li_InfinityHuman_Towards_Long-Term_Audio-Driven_Human_Animation_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Li_InfinityHuman_Towards_Long-Term_Audio-Driven_Human_Animation_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "bc8899e799d0fabd23097c3a9c643b432470d940c055a392fe828a30446e2600"
paper_digest_api_reader_plan_sha256: "8897b627ab7c0f5dc616dc2ac7aae03e3e0ee66e328770072d5660691cb825be"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "9d693d62113b7e4db20f36ee8a70efc59c641cca51ae889237c532d657f810c4"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "0143d4b9133b90b8d1da24074081737aada79b3af14daced3727619df1261130"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "159af6c26c987644ce1fae33ae9cbb5430660799bf6ac965e4f4b83be9360f14"
paper_digest_api_reader_author_count: 9
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "f7f534baad51d4380132a2c3eb8280a44e6720ac0b26fd3e7399d9ed3efc867d"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.flow-matching","label":"流匹配"},{"facet":"method","id":"method.reinforcement","label":"强化学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.av-generation","label":"音视频生成"}]
paper_digest_primary_task: "音视频生成"
paper_digest_primary_method: "流匹配"
paper_digest_score: 6.3
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 长视频越播越走样：先定低分辨率动作再用姿态锚定外观的音频驱动动画

> 英文题目：*InfinityHuman: Towards Long-Term Audio-Driven Human Animation*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Li_InfinityHuman_Towards_Long-Term_Audio-Driven_Human_Animation_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Li_InfinityHuman_Towards_Long-Term_Audio-Driven_Human_Animation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_InfinityHuman_Towards_Long-Term_Audio-Driven_Human_Animation_CVPR_2026_paper.pdf)

标签：#流匹配 #强化学习 #音视频 #语音 #音视频生成

评分：**6.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Xiaodi Li：机构信息未能从会议 PDF 纯文本可靠映射
- Pan Xie：机构信息未能从会议 PDF 纯文本可靠映射
- Yi Ren：机构信息未能从会议 PDF 纯文本可靠映射
- Qijun Gan：机构信息未能从会议 PDF 纯文本可靠映射
- Chen Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Fangyuan Kong：机构信息未能从会议 PDF 纯文本可靠映射
- Xiang Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Zehuan Yuan：机构信息未能从会议 PDF 纯文本可靠映射
- Bingyue Peng：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

音频驱动人体动画需以单张参考图像、语音音频与可选文本为输入，生成高分辨长时全身视频，难点在于重叠运动帧自回归延拓会累积误差导致身份漂移、颜色偏移与场景失稳，且手部小幅高速运动易出现手指数量错误与音画错位。InfinityHuman采用粗到细两阶段链路，先由低分辨音频到视频扩散变换器经流匹配生成语音同步的粗运动潜变量，再将退化低分辨潜变量输入姿态引导精修器，结合像素级姿态序列与无噪声参考前缀潜变量重建高分辨视频。低分辨阶段还引入基于高质量手部数据训练的手部奖励反馈，以约束手部解剖合理性与时序一致性，其输出的粗潜变量与姿态表征经投影融合后进入精修器完成细节恢复与结构纠错。与直接延拓高分辨视频的方法不同，该框架以与外观解耦且抗时序退化的姿态作稳定结构条件，并以首帧无噪声潜变量作视觉锚点，从而减少漂移并改善唇同步。在EMTD基准下，InfinityHuman的FID为60.71，低于OmniAvatar的FID 82.54。消融显示去掉精修器会导致面部模糊与时序一致性下降，去掉手部奖励反馈则手部伪影增多，验证了两模块对清晰度与长时一致性的关键作用。该结论适用边界限于单人连续镜头场景，尚未验证多人交互与镜头切换，训练硬件为128块NVIDIA GPU且精修器推理需20步去噪。

## 🔗 开源与复现资源

- 第三方资源：<https://github.com/ultralytics/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，要输出什么，什么信息必须保留？

这篇论文研究的任务是音频驱动的人体动画。输入是一张参考图像、一段音频和一个可选的文本提示，输出是一段高分辨率的全身说话视频。参考图像决定人物长相、服装和背景，音频决定嘴型开合、节奏和手势起伏，文本提示补充场景或动作描述，例如在舞台上说话并做手势。

对刚入门的读者，白话理解就是把静态照片变成会按声音说话做动作的人。必须保留的信息有 3 类。第一是身份外观，包括脸部比例、发型、衣服颜色和背景布局，在几十秒内不能漂移。第二是唇音同步，嘴部动作要与音频音素对齐。第三是手部合理性，手指数量、关节弯曲和纹理不能出现明显畸变。论文首页展示了 4 个能力，长时身份一致、富有表现力的手势、人与物体交互和可控情感，这些都是围绕上述 3 类信息展开的。

输出的难点在于长时与高分辨率同时要求。短片段可以用重叠运动帧自回归续写，但每一段的小误差会传给下一段。论文把这种现象称为累积误差导致的渐进退化，表现为脸变了、衣服变色、背景物体消失或抖动。理解后文方法时，要始终抓住一个样本的完整链条，同一个人的参考帧加上同一段语音，经过低分辨率运动生成，再经过精炼恢复细节，最终得到与音频对齐的高清长视频。

### 已有路线如何延长视频，为何仍会走样？

长视频生成已有 3 条常见路线。第一条是改造扩散目标或结构以直接生成更长视频，第二条是免训练的滑动窗口注意力与噪声重排，第 3 条是短视频模型加前序运动帧做自回归延续。论文采用第 3 条的变体，但指出其推理时误差累积会导致保真度下降和身份偏移。教学上可以这样记，前两条省训练成本但时序建模弱，第 3 条灵活但需要纠错机制。

音频驱动人物动画路线从只动脸发展到动全身。早期工作关注唇同步与表情，例如用 3 维渲染或面部关键点约束，后来加入多模态训练保证身份，再扩展到半身与全身的手势同步。论文认为全身阶段对手部的处理仍粗糙，手是小幅度高速运动，人眼对指节错误非常敏感，已有方法容易出现手指粘连、手掌断裂或与音频错位。

与同输入同目标的工作对照，论文在实验中选择了可实际运行的长视频基线，包括幻想谈话、肖像动画、多人对话生成和自适应全身动画等，并在半身长视频集与谈话头数据集上比较。需要明确的是，类别差异不能当作同条件胜负，例如只做头部的模型与做全身的模型在评价手部时本就不在同一任务上，论文用星号标出仅限谈话头的模型，这一点在读表时必须注意。

### 长时退化具体长什么样？

论文把长时视觉一致性拆成 3 个可观察症状。第一是人物身份不一致，例如脸部比例变化。第二是全局颜色不连贯，例如头发或衣服色调突变。第三是场景不稳定，例如背景墙砖纹理或挂画移位。手部自然性是另一类问题，大幅度手势常伴随扭曲和伪影。

下图用两行人物随时间展开的方式把退化摆出来，左侧是参考帧，右侧随秒数增加出现更多黄色虚线标注框，是理解后文为何需要姿态与首帧双约束的最直接证据。

> **看图路径：** 1. 先对比同一行参考帧与 3 秒后的人脸与服装是否还一致；2. 再看 10 秒后黄色虚线框标注的背景变化与手部畸变位置；3. 最后比较上下两行不同人物是否都随时间出现同类退化

[![原论文 Figure 2：Progressive Degradation in Long Video Animation by Previous Methods.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c1002384e137/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c1002384e137/figure-2.png)

*论文图 2。原论文 Figure 2：“Progressive Degradation in Long Video Animation by Previous Methods.”。*

从像素可见，上行穿蓝西装人物在 10 秒后手部出现畸变框，20 秒后背景变化与脸部身份同时被标出，30 秒后头发颜色、西装颜色与背景变化都被标出。下行人物在 10 秒后背景与手部被标出，18 秒与 25 秒脸部与背景反复被标出。这说明退化不是单点噪声，而是随时间累积的多部位同时漂移。论文据此提出，仅靠重叠运动帧续写不足以长期锚定外观，需要与外观解耦且自身稳定的信号来纠偏，这就引出姿态序列的作用。

### 由粗到精的两阶段全景是什么？

论文提出名为无限人类的由粗到精框架。第一阶段是低分辨率音频到视频模块，用参考图、文本、音频生成粗糙但与语音同步的低分辨率视频。第二阶段是姿态引导精炼器，以低分辨率视频及其姿态序列和参考图为条件，生成高分辨率视频。另有手部修正策略叠加在训练中改善手部。

**低分辨率音频到视频 × 姿态引导精炼器：** 低分辨率音频到视频负责把音频与文本转成同步但粗糙的运动，姿态引导精炼器负责把粗糙运动恢复为清晰稳定的高分辨率视频，二者搭配的原因是前者擅长时序对齐但易累积外观误差，后者用与外观解耦的姿态和首帧锚点纠偏，组合后实现长时运动连贯与外观一致的分工。

下图展示了 2 阶段的数据流，上半是低分辨率生成，下半是精炼器展开，箭头标明了编码、注意力、隐变量与解码的关系，是复述方法时应对照的主图。

> **看图路径：** 1. 先沿左上音频与文本经编码器进入中间多块变换器的主路径看低分辨率隐变量产出；2. 再看右上参考图与右下低分辨率视频如何汇入姿态引导精炼器；3. 最后对照下方框内姿态估计与三维编码器两条支路的相加与拼接位置

[![原论文 Figure 3：InfinityHuman Pipeline. The pipeline generates high-resolution (HR) audio-driven full-body videos…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c1002384e137/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c1002384e137/figure-3.png)

*论文图 3。原论文 Figure 3：“InfinityHuman Pipeline. The pipeline generates high-resolution (HR) audio-driven full-body videos through a two-stage coarse- to-fine process.”。*

按图执行 1 次前向过程如下。音频经语音编码器与适配器得到音频条件，文本经文本编码器得到文本嵌入，参考图经 3 维变分自编码器编码后加噪，与上述条件一起送入多块扩散变换器，输出低分辨率隐变量并解码为低分辨率视频。随后低分辨率视频一路经姿态估计得到姿态图并上采样，另一路经 3 维编码器得到隐变量并做退化增强，再与高分辨率参考编码拼接融合，最后与姿态特征相加送入渲染用的变换器块并解码为高分辨率视频。这种安排的理由是先用低成本保证长时运动与同步，再用高成本恢复细节与一致性。

### 低分辨率阶段如何让声音真正控制画面？

低分辨率阶段的骨干是扩散变换器，训练目标采用流匹配。白话说，流匹配是让模型学习从高斯噪声沿直线走到真实视频隐变量的速度场。带噪隐变量由噪声与真实隐变量按时间步加权得到，目标速度是二者之差，模型对所有帧联合预测速度并最小化平方误差。输入包括参考图、文本条件、音频条件和连续时间步。

为让音频不被文本淹没，论文把音频条件从其他模态解耦，单独开一条交叉注意力分支。身份感知的交叉注意力被扩展为文本分支与音频分支之和，这样可以更精细地控制多模态交互，使音频线索与视觉动态对齐。实现细节上，模型从预训练视频生成模型初始化，训练时文本与音频各自以一定概率丢弃，参考图与首帧也以一定概率丢弃，以增强多条件鲁棒性。

推理时低分辨率阶段使用音频与文本的无分类器引导并做多步去噪。教学例子是，同一张舞台女性参考图配同一段语音，若音频分支被丢弃，嘴型与手势将更多受文本描述支配，反之则更跟随语音节奏。论文未给出该丢弃的单独消融数值，因此不能断言具体提升幅度，只能说这是原文明确采用的训练与推理设置。

### 精炼器靠什么纠偏，姿态与首帧各管什么？

精炼器要解决的是低分辨率长视频随时间偏离参考图的问题。它的条件有三样，参考图作为身份先验，低分辨率视频隐变量作为语义与风格延续，姿态序列作为结构约束。论文强调姿态与外观解耦，自身不易累积外观误差，且保留唇动等细粒度运动，因此是可靠的条件信号。

**姿态序列 × 首帧视觉锚点：** 姿态序列提供与颜色纹理无关的人体结构与细粒度运动约束，首帧视觉锚点提供身份与场景的外观基准，搭配理由是仅有姿态会丢失人物长相，仅有首帧无法约束长时运动，二者相加后精炼器同时获得怎么动和长成什么样两个参考。

具体构造上，先对低分辨率隐变量做低通滤波保留低频并加高斯噪声，模拟时序退化，增强模型恢复细节与纠正结构错误的能力。姿态方面，从低分辨率视频提取人体与背景关键点，形成姿态序列。为避免不同分辨率下的尺度错位与重叠，采用 8 通道像素级表示，前 7 通道编码人体关键点，最后 1 通道编码最多 20 个背景关键点，再沿时空做分块得到姿态令牌，经可学习投影与高分辨率隐特征相加，得到姿态感知的隐表示。

**低通滤波退化 × 前缀隐变量参考：** 低通滤波退化是在训练时对低分辨率隐变量滤除高频并加噪以模拟长时漂移，前缀隐变量参考是在高分辨率序列前保留无噪参考帧与前序运动帧，二者搭配是前者制造需要修复的误差分布，后者提供修复时可依赖的干净身份与衔接，组合使模型学会在连续续写中纠错而不丢失身份。

身份保持采用前缀隐变量参考策略，不依赖结构对齐的参考网络，而是利用变换器的 3 维全局注意力直接从前缀隐变量提取身份特征。高分辨率隐序列的首帧来自参考图编码且保留更多细节不做时间压缩，前序片段的运动隐变量也保持无噪，推理时新片段的前若干隐变量取自上一片段的末尾若干隐变量，保证衔接平滑。训练时只对未来隐变量加噪并计算速度预测误差，掩码向量将参考与运动引导帧的损失权重设为零，以维持参考稳定。

### 手部为何单列优化，奖励从哪里来？

手部单列优化的理由是人眼对错误手指数、不自然关节和破损纹理有清晰感知边界，而通用视频损失对这些局部结构不敏感。论文引入手部专用奖励反馈，先人工构建 10000 对图像数据，再在开源多维偏好模型上微调，使其能捕捉手部结构特征，然后用该图像级奖励模型评价视频解码后随机抽取的 1 帧。

**手部奖励反馈 × 高质量手部数据：** 手部奖励反馈是用预训练图像评价器对手部真实感打分并引导扩散模型，高质量手部数据是经人工筛选标注的 10000 对手部结构图像对，二者搭配是数据先把评价器教会什么是正确手指结构，评价器再在视频训练中给出无需额外标注的细粒度监督，组合后针对性改善小幅度高速手势的畸变。

训练目标是让解码帧的手部奖励超过阈值，形式上是奖励与阈值之差的负期望。这种做法无需额外标注即可引入细粒度的手部监督，鼓励模型产生时序一致且正确的手势。需要区分的是，这是偏好微调而非直接的手部关键点回归，监督来源是学到的评价器打分，不是人工关键点坐标。论文同时在数据筛选阶段按手部清晰度过滤，并保留手部动作幅度大的片段，以保证手部优化有足够训练分布支撑。

复述时不要把手部奖励说成解决了所有手部问题。原文消融显示去掉该机制后手部关键点置信度下降，且复杂高速手势仍是困难情形，后文实验节会给出具体数字与可视对比。

### 数据如何筛选，两个模型各练什么？

数据处理管线按动作执行。先用场景检测做时间裁剪，再用检测器跟踪单人并做时空裁剪，随后按视频质量、美学、运动幅度、手部清晰度、嘴部清晰度和人物占比过滤，最终得到 7700 小时单人片段用于训练姿态引导精炼器。在此基础上用同步网络评估音唇同步，过滤出 1800 小时片段训练低分辨率音频驱动生成，每段 4 秒。手部奖励模型的数据是 10 名标注者从 4 万候选图中标注筛选出的 1 万高质量样本，针对手部畸变维度构造偏好对。

**流匹配 × 扩散变换器：** 流匹配定义了从高斯噪声到数据隐变量的直线速度场学习目标，扩散变换器是预测该速度场的骨干网络，搭配理由是流匹配给出连续时间动力学的训练形式，变换器的 3 维全局注意力提供跨帧与跨模态建模能力，组合后实现多条件联合的低分辨率视频生成。

两个生成模型都从预训练模型初始化并用 128 卡训练，学习率都是 5e-5。低分辨率模型暴露参考图、首帧、音频和文本多条件，精炼器暴露姿态、低分辨率隐变量和首帧参考图，姿态与低分辨率隐变量各自以一定概率丢弃，并采用多分辨率训练策略以适应不同清晰度与尺寸。精炼器推理时使用姿态无分类器引导并做较少步数去噪，还被蒸馏为一步模型以在保持质量的同时加速，附录给出推理速度对比。

缺项必须指出。原文未报告批量大小、总步数、优化器种类与显存占用，也未说明手部奖励微调时阈值的具体取值与采样帧策略的随机种子。因此复现时只能先按已报告的学习率、丢弃概率、引导强度与去噪步数搭建，缺失项需自行记录并做敏感性检查，不能从模型名称推定实现。

### 在什么数据与指标下比较，方向如何看？

评估用 2 个数据集。长时全身与手部评估用 110 段 720P 语音视频集，最长 74 秒，约 23.64% 超过 15 秒，适合检验高分辨率长时生成。泛化与谈话头评估用高分辨率音视数据集的 100 个 512 分辨率样本。基线包括全身模型与仅限谈话头的模型，后者用星号标出，手部指标对其为空。

指标按问题组织。视频质量用图像质量、视频动态距离与视觉质量美学分，数值方向是前两者越低越好，后两者越高越好。唇同步用同步置信度与距离，一个越高越好，一个越低越好。身份一致用面部相似度，越高越好。手部用平均手部关键点置信度与方差，前者越高表示检测越确信，后者反映运动幅度与多样性，需结合可视判断，不能单看方差大就说好。

公平条件上，论文说明排除了仅支持 15 秒且无长时延续支持的模型，避免把短视频截断结果与长时延续结果混比。用户研究放在附录。资源状态方面，本次收到的第三方链接为超轻量检测器仓库且可达，但它只是数据处理中引用的人体检测环节，不能据此说论文整体代码已公开，论文主页在原文中给出地址，复现前需自行确认可达性。

### 主结果在哪些指标上领先，代价是什么？

先提出比较问题。在相同长时全身任务下，由粗到精加手部优化是否在质量、身份与手部上同时优于可运行的自回归延续基线。公平条件是同一全身长视频集上的数据集级评估，指标方向是图像与视频距离越低越好，面部相似度与手部置信度越高越好。

下图按行展示不同秒数与音素下的多方法对比，黄色框标手部畸变，蓝色框标脸部身份偏差，可先看长时后谁的框更少。

> **看图路径：** 1. 先按列找到真值与三种基线及本方法在 1 秒时的初始状态；2. 再纵向比较 20 秒与 40 秒时蓝色人脸框与黄色手部框的出现频率；3. 最后观察本方法列在长时后背景幕布与服装是否保持稳定

[![原论文 Figure 4：Qualitative Results of Audio-Driven Animation Methods on EMTD.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c1002384e137/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c1002384e137/figure-4.png)

*论文图 4。原论文 Figure 4：“Qualitative Results of Audio-Driven Animation Methods on EMTD.”。*

从像素可见，在 20 秒与 40 秒行，基线列出现多个人脸与手部虚线框，而本方法列在相同行保持服装、背景与手势稳定。原文报告在全身集上本方法取得最低的图像与视频距离，并在身份与手部上取得高分，具体数字见下表整理。表后解释是，姿态约束减少了手指粘连与运动扭曲，首帧锚点减少了肤色发色漂移，但代价是 2 阶段推理与额外姿态估计开销。

比较问题已在表前说明，公平条件为同一全身集与相同评估口径，指标方向是距离越低越好、相似度与置信度越高越好，下表整理原文连续句中的关键数字。

| 实验 | 指标方向 | 本方法 | 对照方法 | 对照值 |
| --- | --- | --- | --- | --- |
| 全身集 | 图像距离越低越好 | 60.71 | OmniAvatar | 82.54 |
| 全身集 | 视频距离越低越好 | 979.88 | MultiTalk | 1040.43 |
| 全身集 | 面部相似度越高越好 | 0.84 | Hallo3 | 0.73 |
| 全身集 | 手部置信度越高越好 | 0.90 | 全方法最高 | 0.90 |
| 消融子集 | 图像距离越低越好 | 91.74 | 去掉精炼器 | 109.54 |
| 消融子集 | 面部相似度越高越好 | 0.88 | 去掉精炼器 | 0.79 |
| 消融子集 | 手部置信度越高越好 | 0.87 | 去掉手部反馈 | 0.85 |

表后需要强调收益与未胜出项。上述数字显示本方法在该全身集上同时改善质量、身份与手部，其中手部置信度为全部方法中最高。未胜出项也要说明，在谈话头集的唇同步置信度上，本方法并非所有基线中的最高值，说明保外观与保同步之间仍需权衡。适用条件限于单人连续全身说话场景，原文结论节明确说当前仅训练于连续单人素材，不支持多人与复杂转场。

### 长视频越播越久，指标会崩吗？

第二个比较问题是稳定性。把输出按每 10 秒累积计算指标，看随时间增加是否缓慢退化。公平条件是同一子集上的累积评估，指标方向与主结果一致，图像与视频距离越低越好，面部相似度、手部置信度与同步置信度越高越好。

下表为原文长时稳定性评估的原表选择，覆盖 10 秒到 50 秒的累积指标，可直接观察退化速度是否被压低。

| Duration | FID↓ | FVD↓ | FSIM↑ | HKC↑ | Sync-C↑ |
| --- | --- | --- | --- | --- | --- |
| 10s | 36.83 | 1015.36 | 0.8357 | 0.9224 | 7.23 |
| 20s | 37.07 | 1156.05 | 0.8323 | 0.9062 | 7.36 |
| 30s | 35.02 | 1315.40 | 0.8266 | 0.8991 | 7.62 |
| 40s | 35.92 | 1260.71 | 0.8154 | 0.9007 | 7.81 |
| 50s | 35.50 | 945.84 | 0.8057 | 0.9059 | 7.46 |

表后解释如下。随着时长从 10 秒到 50 秒，图像距离在三十多之间波动，未见单调恶化，面部相似度缓慢下降，手部置信度保持在较高水平，同步置信度维持稳定。这支持长时鲁棒的判断，但要注意视频距离在 30 秒附近出现高点，说明中间段仍有波动，总体趋势不等于每段都好。未评测边界是超过 50 秒到 60 秒以上的累积曲线，以及多人或遮挡下的稳定性，原文未给出这些条件下的数字，不能外推。

### 拿掉精炼器、姿态与手部反馈会发生什么？

消融按去掉哪一路来组织。第一个问题是精炼器整体是否必要，第二个是低分辨率隐变量与姿态条件各自的贡献，第 3 个是手部反馈的增益。条件是同一子集上的相同解码与评估，指标方向同前，距离越低越好，相似度与置信度越高越好。

下图用三列人物展示参考帧与 20 秒帧的对比，是定位颜色偏移与结构退化的关键证据。

> **看图路径：** 1. 先看首行参考帧确定三位人物的服装与场景基准；2. 再逐行比较去掉精炼器与低分辨率条件后 20 秒帧的清晰度变化；3. 最后对比去掉姿态条件与去掉手部反馈后服装颜色与手部区域的差异

[![原论文 Figure 5：Visualization of Ablation Study. Demonstrating the effects of key components on animation quality.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c1002384e137/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/c1002384e137/figure-5.png)

*论文图 5。原论文 Figure 5：“Visualization of Ablation Study. Demonstrating the effects of key components on animation quality.”。*

从像素可见，去掉精炼器后 20 秒帧面部细节变糊，去掉低分辨率条件或姿态后出现衣服变色与背景色偏，中间人物在去掉姿态后上衣明显偏红，右侧人物背景明显偏黄，去掉手部反馈后手部合拢区域不如完整模型稳定。结合上一节表格数字，去掉精炼器后图像距离从 91.74 升至 109.54，面部相似度从 0.88 降至 0.79，去掉手部反馈后手部置信度从 0.87 降至 0.85。这支持姿态提供解剖约束、低分辨率隐变量保留整体内容的解释。但原文未报告引导强度与噪声强度的扫参曲线，也未给出多次随机的方差，因此不能断言每个超参数的最优性。

### 哪些场景还做不了，缺了什么证据？

论文在结论中明确报告了局限。当前框架仅在连续单人视频上训练，因此处理多人交互与复杂场景切换如镜头变化或剪辑的能力受限，扩展到多人生成与场景过渡是未来工作。这意味着首页展示的人物与物体交互仍是单人拿持物体的情形，不能推广为多人对话或多人遮挡。

缺失证据不是技术错误，但必须列出以防误读。原文未测量误判率、端到端延迟、输出帧率与实际部署成本，未报告长时超过 60 秒的系统性误差，也未公开完整的训练超参数与统计方法。因此不能承诺延迟或成本得到改善，也不能把自动指标的提升等同于人工偏好的全面胜利。相关性不等于因果，例如手部置信度提升与奖励反馈同时出现，但若无随机种子与重复实验，不能排除数据筛选本身的贡献。

教学上要区分 3 类表述。直接报告的是数据集上的距离与相似度数字，有限解释的是姿态稳定与首帧锚定减少漂移的机制分析，未验证推测的是蒸馏一步模型在所有场景下保持质量的泛化，原文仅说在保持质量的同时加速，细节在附录，需自行验证后再引用。

### 要复述与复现，先做什么，后补什么？

复述方法时建议沿一个样本走完全程。选一张参考图与一段 4 秒语音，先经语音与文本编码得到条件，再经变换器得到低分辨率隐变量并解码，接着从低分辨率视频估计姿态并编码低分辨率隐变量做退化增强，最后与参考编码拼接并加姿态特征，渲染解码为高分辨率视频。每一步的输入输出形状与条件丢弃概率按原文记录，时间步采样与速度目标按流匹配定义实现。

复现先做三件事。第一，按原文管线复刻数据筛选，包括场景检测、单人跟踪、质量与手嘴清晰度过滤，以及同步网络的音唇筛选，记录保留率与时长分布。第二，用已报告的学习率、128 卡设置、丢弃概率、引导强度与去噪步数搭建 2 阶段训练，固定随机种子并保存中间低分辨率视频以便定位误差来源。第三，单独复现手部评价器的微调，核对 10000 对数据的标注规范与阈值选择，再接入视频训练。

还需补的验证包括重复实验的均值方差、不同引导强度与噪声强度的扫参、50 秒以上长时的累积曲线，以及在另一谈话头集上的交叉验证。代码与权重方面，不要把检测器仓库的可达等同于本论文系统可运行，论文主页地址需自行确认，权重下载与推理脚本以实际可达页面为准。

### 何时值得尝试这个路线，如何一句话记住它？

当任务同时要求长时、多秒身份不变、手部可见且与语音同步时，这条由粗到精加姿态锚定的路线值得尝试。它的核心判断是，把难做的长时外观保持从运动生成中剥离，交给与外观解耦的姿态和干净的首帧来管，运动生成只负责便宜地定节奏与口型。这种分工降低了自回归续写的累积误差，但增加了精炼与姿态估计的计算与实现复杂度。

一句话记住，先用低分辨率定动作同步，再用姿态与首帧把走样的外观拉回来，并用学到的手部打分专治手指畸变。重提结果时增加适用条件，在单人连续全身说话场景下，本方法在质量、身份与手部上取得数据集级领先且 50 秒内退化缓慢，但多人、剪辑与实时部署仍是未验证边界，后续工作应先补重复性与成本测量，再谈更大规模推广。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0ab581f89f49/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0ab581f89f49/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_InfinityHuman_Towards_Long-Term_Audio-Driven_Human_Animation_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 2，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0ab581f89f49/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0ab581f89f49/figure-2.png)

区域 2 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_InfinityHuman_Towards_Long-Term_Audio-Driven_Human_Animation_CVPR_2026_paper.pdf#page=3)

[![原文数学表达区域 3，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0ab581f89f49/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0ab581f89f49/figure-3.png)

区域 3 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_InfinityHuman_Towards_Long-Term_Audio-Driven_Human_Animation_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 4，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0ab581f89f49/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0ab581f89f49/figure-4.png)

区域 4 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_InfinityHuman_Towards_Long-Term_Audio-Driven_Human_Animation_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 5，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0ab581f89f49/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0ab581f89f49/figure-5.png)

区域 5 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_InfinityHuman_Towards_Long-Term_Audio-Driven_Human_Animation_CVPR_2026_paper.pdf#page=5)

[![原文数学表达区域 6，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0ab581f89f49/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/0ab581f89f49/figure-6.png)

区域 6 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_InfinityHuman_Towards_Long-Term_Audio-Driven_Human_Animation_CVPR_2026_paper.pdf#page=5)

另有 15 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_InfinityHuman_Towards_Long-Term_Audio-Driven_Human_Animation_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
