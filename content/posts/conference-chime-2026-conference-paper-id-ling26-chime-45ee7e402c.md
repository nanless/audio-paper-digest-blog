---
title: "The SUSTech AILab System Description for CHiME-9 MCoRec Challenge"
date: 2026-09-14
draft: false
description: "针对多人多会话同时进行的真实鸡尾酒会转写与会话聚类问题，论文采用先用 CTRnet 消除近讲串扰再用其输出做伪标签微调 AV-TFGridNet 视听目标说话人提取的两阶段路线，在开发集上用 AV-HuBERT 转写达到 33.78% 联合错误率，代价是仍依赖说话人活动时间戳弱监督与未做提取后 ASR 适配时约 48% 说话人词错误率。"
tags: ["会议转录", "弱监督学习", "音视频", "音视频语音识别", "目标说话人提取"]
categories: ["chime-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:chime:2026:conference-paper-id:ling26_chime"
paper_digest_source_kind: conference
paper_digest_conference_id: "chime-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/chime_2026/ling26_chime.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/chime_2026/ling26_chime.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "83c78ed56b58e70615ec9ae071235771907021bc2a7569f912126d6ce1bf31ce"
paper_digest_api_reader_plan_sha256: "0cb3db9c46e74f7bedb5013ac5cfe4e272dd8063499734aa790217253795fe28"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "2b2316f25220b9060c60c87115ebfff92168db36f7f534f3b71e80b25127857d"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "4ecb237b34cb9339fd635a2bff91d54b1fce71f06a3e48132e0229c9f6e9599c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "3230f0369ba4f466ea730793be7cca0eb9c2adbc892c47ba8663ae0444e21adc"
paper_digest_api_reader_author_count: 3
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "92081efba88c28ce43a0137b60a2672d1d4f91d4974b50e44198f8122282ff5c"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"application","id":"application.meeting","label":"会议转录"},{"facet":"method","id":"method.weak-supervised","label":"弱监督学习"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"task","id":"task.av-asr","label":"音视频语音识别"},{"facet":"task","id":"task.target-speaker","label":"目标说话人提取"}]
paper_digest_primary_task: "音视频语音识别"
paper_digest_primary_method: "弱监督学习"
paper_digest_score: 6.2
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "系统技术报告"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 先消近讲串扰再做视听提取：用增强近讲语音做伪标签弥合仿真与真实鸡尾酒会差距

> 英文题目：*The SUSTech AILab System Description for CHiME-9 MCoRec Challenge*

> 会议身份：`conference:chime:2026:conference-paper-id:ling26_chime`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://www.isca-archive.org/chime_2026/ling26_chime.html) · [官方 PDF](https://www.isca-archive.org/chime_2026/ling26_chime.pdf)

标签：#会议转录 #弱监督学习 #音视频 #音视频语音识别 #目标说话人提取

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告

## 👥 作者与机构

- Tongtao Ling：机构信息未能从会议 PDF 纯文本可靠映射
- Pengjie Shen：机构信息未能从会议 PDF 纯文本可靠映射
- Zhong-Qiu Wang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

多模态上下文感知识别需从单通道远场音频与全景视频中转写鸡尾酒会场景下每位说话人的语音并判断说话人所属会话，难点在于真实重叠、混响与近场麦克风串音使直接音视频语音识别错误率极高。所提两阶段框架先以跨串音降低网络堆叠近场与远场信号无监督抑制近场串音，得到更干净的近场语音。再经前向卷积预测对齐到远场后作为伪标签，用于将在仿真数据预训练的视听目标说话人提取网络微调到真实会议条件。最后对提取的目标语音做主动说话人检测、音视频识别转写与基于时间的会话聚类，形成完整链路。相对仅微调识别器的基线，该前端显式分离与后端识别互补，避免了把含串音的近场信号直接当监督。在MCoRec开发集评测任务下，PuL-AVTSE结合AV-HuBERT CTC/Attention的Joint ASR-Clustering Error Rate为33.78%，低于基线AV-HuBERT CTC/Attention的Joint ASR-Clustering Error Rate 38.21%。该结论适用边界受限于MCoRec真实会议场景且对标注时间戳噪声敏感，在已做域适应的识别器上增益明显收窄，原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，本文要解决哪一步？

本文的输入是真实录制的鸡尾酒会场景多模态记录：一路单通道 16 千赫兹远场麦克风信号，多路近讲麦克风信号，以及中央全景相机捕获的人脸视频流和每人面前的手机自拍视角唇动视频。目标是双重的：把每 1 位说话人说了什么转写成文字，同时判断哪些说话人属于同一个会话。必须保留的关键信息是数据规模与难度：训练、开发、评测各有 56、25、69 个会话，约 5.6、2.5、6.9 小时，每个会话约 6 分钟，围桌而坐的有 2 至 8 位说话人，自然形成 2 至 4 个会话组。输出是每位说话人的转写文本加会话分组结果，考核用说话人词错误率、会话聚类 F1 和两者结合的联合错误率。

对刚入门的读者，白话解释是：视听语音识别指同时看嘴和听声音来认字，目标说话人提取指给定目标人的嘴动视频，只把他的声音从混合声中捞出来。本文不走端到端直接识别混合声的路线，而是走 2 阶段路线：先把每个人的声音提取干净，再调用现有的视听识别模型转写，最后按时间关系聚类分组。选择这条路线的原因在原文中有明确证据：基线中即使基于自监督学习的最先进视听识别模型，在开发集上仍有约 55% 词错误率，直接在真实数据上微调识别模型也只能降低约 5%，说明重叠和混响是主要瓶颈。

本解读的输出安排是：先讲任务与相关路线，再讲 2 阶段全景，然后拆开近讲串扰消除和伪标签视听提取 2 个组件，接着讲训练构造与推理流程，再讲实验条件，最后讲结果、反证、局限与复现要点。所有数字只用原文报告的版本，不做跨表换算。

### 同输入同目标的已有路线为何在真实数据上失灵？

同输入同目标的路线有两类。第一类是端到端视听识别，例如自动标注的 Auto-AVSR、多语种的 Muavic-EN 和鸡尾酒会场景的 AV-HuBERT 变体，它们直接拿混合语音加唇动视频做识别。第二类是视听目标说话人提取，例如 MuSE 和 AV-TFGridNet，它们用目标人唇动做条件，从混合中提取目标语音，不需要预先知道混合中有几个人，因此更适合开放条件的真实场景。原文引用了大量基于仿真数据的监督学习进展：在干净语音上人工混入竞争说话人，构造混合与干净配对来训练。

这些路线在真实录音下面临相同的监督缺失问题：混响多麦克风真实混合没有逐点的干净标注，无法直接做监督训练。近讲麦克风虽然信噪比较高，但仍含有大量串扰，直接当干净标签会引入噪声。原文还提到近期的近讲串扰消除思路和协同学习框架：在真实数据上做无监督学习，在仿真数据上做有监督学习，交替训练同一个模型。本文的定位是把该思路扩展到视听模态：先用无监督方式净化近讲，再用净化结果做伪标签微调视听提取模型。

需要区分的是，本文不是提出新的识别器，而是做前端净化。识别器沿用已有的 Auto-AVSR、Muavic-EN 和 AV-HuBERT，对比时保持识别器不变，只换前端是否经过提取。这种对照设计使读者能把词错误率下降归因到前端提取，而不是识别器本身变强。

### 混合信号的数学形式如何对应到麦克风？

原文用短时傅里叶变换域描述观测。假设有 C 位说话人，每人配一个近讲麦克风，另有 P 个远场麦克风，全景相机提供所有人的人脸流。近讲麦克风 d 的观测是目标说话人 c 在该麦克风的混响像，加上其他说话人 c 撇在同一麦克风的混响像，再加非语音噪声。远场麦克风 p 的观测是所有说话人在该麦克风的混响像之和加噪声。下标 t 和 f 分别表示时间帧和频率点，Y 表示观测混合，X 表示某说话人的混响像，埃普西隆表示非语音信号。

举一个具体例子帮助理解：设某会话有 4 人，C 等于 4，远场只有单通道故 P 等于 1。1 号说话人的近讲麦克风主要收到 1 号人的直达声和早期反射，同时收到 2、3、4 号人的串扰声和房间噪声；远场麦克风则收到 4 人混响像的叠加。任务要求对 c 等于 1 到 4 逐人提取其在远场的像，再转写。例子中数字仅为说明结构，不是原文实验配置。

这个建模直接决定了 2 阶段分工：第一阶段处理近讲观测中的求和项，把非目标人的混响像去掉；第二阶段处理远场观测中的求和项，在唇动条件下只保留目标人。2 阶段都可看作从加法混合中恢复加性分量，只是输入模态和监督来源不同。

### 两阶段伪监督框架让一个样本走完需要哪几步？

沿一个目标说话人 c 走完全流程。输入是该会话的远场单通道混合、c 的唇动视频流，以及训练阶段才有的多路近讲混合。第一阶段把近讲多通道和远场信号堆叠送入语音分离网络 DNN1，估计出每位说话人的近讲语音。第二阶段把增强后的近讲语音经滤波映射为远场域的伪标签，再把远场混合与 c 的唇嵌入送入视听提取网络 DNN2，输出 c 在远场的估计。推理时对提取语音做主动说话人检测切出有效片段，送识别器转写，再按时间重叠做会话聚类。

**近讲串扰消除 × 视听目标说话人提取：** 近讲串扰消除负责把每人领夹麦克风里混入的他人声音压掉，输出相对干净的单人语音做伪标签；视听目标说话人提取负责以远场混合语音加目标人唇动为输入，直接提取该人在远场的混响像。两者搭配的理由是真实远场没有干净监督，而近讲增强后可提供可用的监督，组合后新增的作用是让在仿真数据上预训练的提取模型能被真实数据微调，缩小仿真到真实的失配。

原文强调的关键差异是与纯音频伪标签系统的区别：本文第二阶段利用了视觉唇动，而第一阶段的 CTRnet 仍是纯音频。这种安排的理由是唇动与目标语音同步，能在不知道说话人总数时提供目标选择性，而纯音频分离在说话人数可变时更困难。虚线与实线在原文图 1 中分别表示第一阶段和第二阶段，但本次未收到图像像素，此处只依据正文文字归因，不描述图中颜色或位置。

### 近讲串扰消除组件做了什么计算？

该组件采用 CTRnet。输入是堆叠后的近讲多通道频谱与远场频谱，网络输出是每位说话人的近讲估计。训练时没有干净标签，做法是把估计出的近讲语音用前向卷积预测滤波器建模其到不同麦克风的传播，得到滤波后的信号，再检查这些信号能否加起来解释观测到的近讲和远场混合，这就是混合约束损失。直观讲，如果估计多了串扰或漏了目标成分，加起来就对不上观测，损失会变大。

**伪标签 × 前向卷积预测：** 伪标签指用 CTRnet 增强后的近讲语音代替人工标注的干净语音；前向卷积预测负责把该伪标签从近讲域线性滤波映射到远场麦克风域，得到说话人在远场的像。搭配原因是近讲与远场存在时间不同步和信道差异，不能直接做逐点监督，组合后新增的作用是给出时间对齐、域匹配的训练目标，使远场提取网络能用监督损失训练。

实现细节按原文交代：短时傅里叶变换窗长 16 毫秒，帧移 8 毫秒，分析窗为平方根汉恩窗，音频采样率 16 千赫兹，视频 25 帧每秒，每帧视觉用预训练 3 维残差网络编码为 512 维表示。DNN1 骨干为 TF-GridNet，超参数沿用原文引用的 CTRnet 设置。训练时把每会话切成 4 秒块、2 秒重叠，说话人数从 2 到 8 不等，用补零对齐到最大 8 路近讲混合。MCoRec 每会话只有单通道远场，故 P 等于 1。推理时同样按 4 秒块分块处理。

该组件的输出质量直接决定伪标签质量。原文在训练集上用真实时间戳切分有效段，比较原始近讲与增强近讲送识别器的词错误率，发现增强后各类识别器错误率一致下降，说明串扰确实被压制。但原文也报告标注噪声会影响该组件，因为它依赖说话人活动时间戳做弱监督，若时间戳错位或转写文本与实际发音不符，就会引入噪声监督。

### 伪标签视听提取组件如何使用唇动？

第二阶段称为 PuL-AVTSE。先解决域失配：增强近讲与远场存在时间不同步，不能直接做标签，因此先用前向卷积预测把增强近讲映射为其在远场麦克风的像，记为伪标签。然后给定目标人唇动视频，用预训练人脸编码器计算每帧唇嵌入，再把远场混合与唇嵌入送入 DNN2 估计目标在远场的像。损失是在指定参考麦克风上比较估计与伪标签的实部、虚部和幅度分量，并按混合幅度归一化。

骨干网络为 AV-TFGridNet，原文给出的超参数为 D 等于 128，B 等于 4，I 等于 2，J 等于 2，H 等于 200，L 等于 4，E 等于 8，并按原方法加入视觉时间卷积网络层以适配唇嵌入。视觉编码器为在唇读任务上预训练的 3 维残差网络。由于真实训练数据有限，该网络不是从零训练，而是先在 VoxCeleb2 双人混合数据上预训练，每次双人混合再随机混入 0 至 6 个干扰说话人，然后用 CTRnet 增强的近讲伪标签做微调。

**主动说话人检测 × 基于时间的会话聚类：** 主动说话人检测负责从提取后的单人语音中找出有语音活动的片段，排除静音和残留干扰；基于时间的会话聚类负责按官方脚本依据这些活动片段的时间重叠关系把属于同一会话的说话人分到一组。搭配原因是转写需要先切分有效片段，聚类需要依赖切分后的时间证据，组合后新增的作用是把前端增强的收益同时传到词错误率和会话聚类 F1 两类指标上。

下游衔接按原文交代：提取后的单人语音先经轻量主动说话人检测模型找出活动段，再送视听识别系统转写，最后用官方脚本按时间做会话聚类。原文明确指出，下游识别模型是直接 applied 到增强信号而没有进一步适配，这为解释为何说话人词错误率仍接近 48% 留下空间。

### 协同训练如何交替使用真实数据与仿真数据？

训练分为 DNN1 和 DNN2 两条线。DNN1 即 CTRnet 只用 MCoRec 训练集的 56 个会话，其中选出 5 个会话做验证，剩余 51 个做训练。由于真实数据仅 5.6 小时，原文用 Pyroomacoustics 工具按每会话相同的说话人活动时间戳，用 VoxCeleb2 语料生成仿真数据以匹配真实声学条件。训练遵循协同学习策略，在真实数据上做无监督混合约束训练，在仿真数据上做有监督训练，交替训练同一个模型。优化器为 Adam，初始学习率 5 乘 10 的负 4 次方，验证集 3 个轮次无改善则乘以 0.8 衰减，最多 100 轮。

**混合约束损失 × 有监督学习：** 混合约束损失负责检查估计出的各近讲语音经滤波后能否加起来还原观测到的近讲和远场混合，属于无监督约束；有监督学习负责在仿真数据上用合成的干净与混合配对直接计算重构误差。搭配原因是真实数据无干净标签而仿真数据有，组合后新增的作用是交替进行无监督真实训练与有监督仿真训练的协同学习，稳定 CTRnet 并防止其偏离可解释的混合物理。

DNN2 即视听提取先在 VoxCeleb2 双人混合上预训练，再用真实伪标签微调，优化器与学习率调度与 DNN1 相同。原文未报告梯度是否在视觉编码器中回传，也未说明唇嵌入分支是否冻结，因此此处不推定参数冻结范围，只按证据说明 DNN2 整体被微调。若需复现，应把视觉编码器是否更新记为缺项，需查代码或补实验确认。

需要强调的是，伪标签的监督来源是估计值而非人工干净语音，其误差会传给 DNN2。原文用识别词错误率下降来间接证明伪标签更干净，但没有给出信号级信噪比或尺度不变信噪比等客观分离指标，因此不能把伪标签等同于干净标签。

### 数据划分、基线与指标如何保证可比？

数据按官方划分：训练 56 会话、开发 25 会话、评测 69 会话。近讲语音仅在训练集中可用，开发集用于报告会话聚类 F1、平均说话人词错误率和联合错误率。基线识别器包括 Auto-AVSR、Muavic-EN 和 AV-HuBERT 的连接时序分类加注意力版本，以及在 MCoRec 上微调过的 AV-HuBERT 版本。本文方法记为 PuL-AVTSE，分别搭配上述 4 种识别器，与不做前端提取的基线在同一开发集、同一识别器下比较，因此识别器条件一致，差异可归因到前端。

指标方向需明确：词错误率和联合错误率越低越好，聚类 F1 越高越好。近讲增强实验用训练集的真实时间戳直接切分，不做主动说话人检测，以隔离前端效果；开发集端到端实验则包含检测、识别、聚类全链路。原文未报告多次随机种子的方差，也未报告统计显著性检验，因此比较时应把小幅差异看作报告值而非确定性优劣。

关于资源可达性，本次收到的证据中资源状态为无绑定来源，未发现完成超文本传输安全协议状态验证的资源，因此不得声称代码、模型或数据已公开。复现时应以论文文字和官方挑战仓库为准，本解读不提供下载链接。

### 近讲增强是否让伪标签更干净？

要回答的问题是：原始近讲直接当监督是否可用，CTRnet 增强后送识别器的词错误率是否下降。比较条件是同一训练集、同一真实时间戳切分、同一识别器，只换输入是原始近讲还是增强近讲。指标是按说话人数分组的平均说话人词错误率，越低表示串扰越少、伪标签越干净。

| 条件 | 识别模型 | 原始近讲词错误率 | 增强后词错误率 | 变化方向 |
| --- | --- | --- | --- | --- |
| 训练集 56 会话真实时间戳切分 | AV-HuBERT 连接时序分类加注意力 | 66.8% | 59.5% | 下降 |

上表只整理原文正文中有连续原句覆盖的 AV-HuBERT 一行，用于说明趋势，不代表全部识别器。原文报告显示基线识别器随说话人数增加而严重退化，即使最强的 AV-HuBERT 在原始近讲上平均仍有 66.8% 词错误率，说明近讲仍含大量串扰。经 CTRnet 增强后该值降至 59.5%，支持增强语音更干净、更适合做伪标签的判断。但原文也显示增强后仍有约六成错误，说明伪标签仍有噪声，不能视为干净。未胜出项是 Muavic-EN 等在增强后仍高达 70% 左右，表明不同识别器对残留串扰的鲁棒性不同，这是选择 AV-HuBERT 做主识别器的依据之一。

### 端到端开发集上前端提取带来多少可部署收益？

要回答的问题是：在开发集全链路上，加 PuL-AVTSE 前端后，相同识别器下的说话人词错误率和联合错误率是否降低。比较条件是同一开发集、同一识别器，基线直接识别，本文方法先提取再识别。指标方向是词错误率和联合错误率越低越好，聚类 F1 越高越好。

| 系统条件 | 识别骨干 | 会话聚类 F1 | 说话人词错误率 | 联合错误率 |
| --- | --- | --- | --- | --- |
| 基线直接识别 | AV-HuBERT | 未在正文句子中报告 | 55.4% | 38.2% |
| 本文 PuL-AVTSE | AV-HuBERT | 82.85% | 48.1% | 33.8% |
| 本文 PuL-AVTSE 摘要值 | AV-HuBERT | 未在正文句子中报告 | 未在正文句子中报告 | 33.78% |

上表数字均来自正文连续原句，摘要中的 33.78% 与正文 33.8% 为同一结果的不同精度，保留原精度不做四舍五入。主要收益是：用 AV-HuBERT 时说话人词错误率从 55.4% 降至 48.1%，相对降低约 7% 量级表述按原文，联合错误率从 38.2% 降至 33.8%，聚类 F1 达 82.85% 高于基线，支持前端提取同时改善转写与分组的判断。具体代价与反例是：当识别器已在 MCoRec 上微调过，词错误率已降至 49.9%，再加前端仅到 48.85% 左右，原文描述为约 1% 相对改善，说明模型级域适配与前端提取部分冗余。另一个未胜出项是 Muavic-EN 搭配前端后联合错误率仍高达 44.11%，表明前端收益依赖识别器本身能力。

**说话人词错误率 × 联合识别聚类错误率：** 说话人词错误率负责衡量每位说话人转写文字与参考文字的差异；联合识别聚类错误率负责把转写错误与会话归属错误放在一起考核。搭配原因是鸡尾酒会任务既要求说对了什么，也要求分对了谁和谁在聊，组合后新增的作用是避免只优化转写而忽视分组错误，能反映前端提取对下游两条链路的综合影响。

### 哪些对照说明收益不是偶然，哪些失败条件仍存在？

原文没有做逐模块消融的独立表格，但提供了两类可作反证的对照。第一类是识别器对照：在 Auto-AVSR、Muavic-EN、AV-HuBERT 3 种识别器下，前端均带来联合错误率下降，但幅度不同，说明收益跨识别器存在，但非均匀。第二类是微调对照：未微调的 AV-HuBERT 加前端收益大，已微调的 AV-HuBERT 加前端收益小，支持两者部分解决同一重叠问题的解释。

失败条件方面，原文明确指出两点。一是标注噪声：部分说话人级转写标签存在从未说出的语句或时间戳错位，而 CTRnet 依赖活动时间戳做弱监督，噪声监督会降低其效果。二是下游未适配：识别器直接用于提取语音而未再微调，原文推测进一步微调识别器以匹配增强语音特性可能再降错误率，但该实验未做，因此当前约 48% 词错误率不应解读为前端上限。

从复述方法角度，缺失的消融是：若去掉视觉分支只用音频提取会怎样，若去掉前向卷积预测直接用近讲做标签会怎样，原文均未报告，因此不能断言视觉或映射的独立贡献，只能说完整组合在报告条件下有效。

### 在什么边界下结论不再成立，还缺哪些验证？

直接报告的局限是标注不准影响弱监督，以及下游识别未适配导致残留高错误率。有限解释是前端与微调冗余：已微调识别器隐式学会压制干扰声，因此前端增量变小，该解释有数字支持但未做机制验证，应表述为支持而非证明。未验证的推测是伪标签的信号级质量：原文只用识别词错误率间接证明，未测量信噪比、失真或误判率，也未报告延迟与计算开销，因此不能承诺该方法改善实时性或降低成本。

适用边界需明确：实验为单通道 16 千赫兹远场、2 至 8 人、2 至 4 会话组的围桌会议，全景相机提供人脸流。若说话人经常离座、遮挡严重或唇动不可用，视听提取的选择性可能下降，但原文未评测该边界，应记为待验证。总体趋势不等于每组都成立：近讲增强表显示说话人数多时错误率仍高，前端改善幅度随人数变化，不能把平均收益推广到每 1 会话。

相关性不等于因果：聚类 F1 提升与语音更干净同时出现，但聚类还依赖时间脚本与检测阈值，不能单独归因到信号质量。缺失证据不是技术错误，只是复现时需补的验证：应补信号级分离指标、多次种子的方差、不同人数分组的细化结果，以及推理耗时与模型参数量。

### 要复现应先准备什么，按什么顺序跑？

先按官方划分准备数据：训练 56 会话用于训练 CTRnet 与微调提取，开发 25 会话用于全链路评估，确认近讲仅训练集可用。采样与分块按原文：音频 16 千赫兹，短时傅里叶变换窗长 16 毫秒、帧移 8 毫秒、平方根汉恩窗，视频 25 帧每秒，每会话切 4 秒块、2 秒重叠，最大说话人数补零到 8。视觉编码用在唇读上预训练的 3 维残差网络输出 512 维，提取网络超参数按 D 等于 128 等原文值设置，优化器用 Adam 初始学习率 5 乘 10 的负 4 次方，3 轮无改善衰减 0.8，最多 100 轮。

顺序建议：先用仿真加真实交替训练 CTRnet，选 5 个指定会话做验证，检查增强近讲送识别器是否从 66.8% 量级下降到 59.5% 量级；再在 VoxCeleb2 双人混合上预训练 AV-TFGridNet 并混入 0 至 6 个干扰人；然后用增强近讲经前向卷积预测得到的远场像做伪标签微调；最后跑主动说话人检测、识别与时间聚类，在开发集上核对是否达到 48.1% 说话人词错误率、33.8% 联合错误率量级。注意保留原始精度，不自行四舍五入。

常见误解是把伪标签当干净标签直接计算逐点误差而不做域映射。正确做法是必须先经前向卷积预测映射到远场域再算损失，否则时间不同步会导致监督错位。另一个误解是把摘要的 33.78% 与正文的 33.8% 看作两个结果，它们是同一结果的不同小数精度，应分别保留原文写法。

### 何时值得尝试这种两阶段做法，如何收束？

当同时满足 3 个条件时值得尝试：有同步唇动视频可用，有多路近讲可做弱监督但无干净远场标签，且说话人数可变使纯音频分离困难。此时先净化近讲再微调视听提取的路线，能把仿真预训练模型搬到真实会议。若没有唇动或近讲不可用，则本文路线不适用，应考虑纯音频或端到端路线。

收束全篇：本文的核心动作是消除近讲串扰以制造可用监督，再用该监督把视听提取从仿真域搬到真实域，最后用现成识别器转写并按时间聚类。最强证据是开发集上 AV-HuBERT 搭配前端达到 33.78% 联合错误率，优于同识别器基线的 38.2% 和微调基线的 35.4%。主要代价是仍依赖活动时间戳、伪标签仍有噪声、下游未适配时说话人词错误率仍近 50%。下一步应补信号级指标、缺失消融与开销测量，再判断是否可部署。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-1.png)

区域 1 · [查看论文原页](https://www.isca-archive.org/chime_2026/ling26_chime.pdf#page=2)

[![原文数学表达区域 2，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-2.png)

区域 2 · [查看论文原页](https://www.isca-archive.org/chime_2026/ling26_chime.pdf#page=2)

[![原文数学表达区域 3，PDF 第 2 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-3.png)

区域 3 · [查看论文原页](https://www.isca-archive.org/chime_2026/ling26_chime.pdf#page=2)

[![原文数学表达区域 4，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-4.png)

区域 4 · [查看论文原页](https://www.isca-archive.org/chime_2026/ling26_chime.pdf#page=3)

[![原文数学表达区域 5，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-5.png)

区域 5 · [查看论文原页](https://www.isca-archive.org/chime_2026/ling26_chime.pdf#page=3)

[![原文数学表达区域 6，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-6.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-6.png)

区域 6 · [查看论文原页](https://www.isca-archive.org/chime_2026/ling26_chime.pdf#page=3)

[![原文数学表达区域 7，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-7.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-7.png)

区域 7 · [查看论文原页](https://www.isca-archive.org/chime_2026/ling26_chime.pdf#page=3)

[![原文数学表达区域 8，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-8.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-8.png)

区域 8 · [查看论文原页](https://www.isca-archive.org/chime_2026/ling26_chime.pdf#page=3)

[![原文数学表达区域 9，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-9.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-9.png)

区域 9 · [查看论文原页](https://www.isca-archive.org/chime_2026/ling26_chime.pdf#page=3)

[![原文数学表达区域 10，PDF 第 3 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-10.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/chime-2026/c121c9cd08f6/figure-10.png)

区域 10 · [查看论文原页](https://www.isca-archive.org/chime_2026/ling26_chime.pdf#page=3)

另有 6 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://www.isca-archive.org/chime_2026/ling26_chime.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 chime-2026 论文汇总](/posts/conference-chime-2026/)
