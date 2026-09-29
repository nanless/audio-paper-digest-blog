---
title: "Decoding the Ear (DeEAR): A Framework for Objectifying Expressiveness from Human Preference Through Efficient Alignment"
date: 2026-09-27
draft: false
description: "针对语音对话模型能说清但不够生动且缺客观表现力度量的问题，DeEAR 把表现力拆成情感、韵律、自发性三维分别建模再用 XGBoost 非线性融合，仅用 480 个标注在整体表现力上达到 SRCC 0.85 并以 14K 筛选数据把基座模型表现力从 2.0 提升到 23.4，代价是依赖启发式伪标签与小规模专家评测。"
tags: ["数据集", "主观评测", "语音", "语音质量评估"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:lin26l_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/lin26l_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/lin26l_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "d58f0a30880ab44eda66d25af330f28836325baadd1a2322946c680ff88b423f"
paper_digest_api_reader_plan_sha256: "12995216749147caa855264b10e220bebe990c9c51e36f8c0475baccaa205ee9"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "5dcfd0ce5cb9f8effb0b00d5e4e71eec29898d0f5b7a1d495bae018224578adf"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "d3fc9ecd2f9f87c9894946a1042aa4701bdaa5174959e0c04a2c7e51c5338d65"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "992929d02ab523658b3a2595f655d1b2dc55df32e256490fa1fc1149af2749d8"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "ed5ab6e07b7aae2f8ce8d0135b9c790075c8908317d509212e4cc84802b63473"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"artifact","id":"artifact.dataset","label":"数据集"},{"facet":"method","id":"method.subjective-evaluation","label":"主观评测"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.speech-quality","label":"语音质量评估"}]
paper_digest_primary_task: "语音质量评估"
paper_digest_primary_method: "主观评测"
paper_digest_score: 6.6
paper_digest_rank_bucket: "前50%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 把好听变成可算分：DeEAR 用三维打分加小样本对齐逼近人类听感

> 英文题目：*Decoding the Ear (DeEAR): A Framework for Objectifying Expressiveness from Human Preference Through Efficient Alignment*

> 会议身份：`conference:interspeech:2026:conference-paper-id:lin26l_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/lin26l_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/lin26l_interspeech.pdf)

标签：#数据集 #主观评测 #语音 #语音质量评估

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究

## 👥 作者与机构

- Zhiyu Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Jingwen Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiale Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Meng Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Sunzhu Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengjun Yue：机构信息未能从会议 PDF 纯文本可靠映射
- Benyou Wang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

语音到语音系统输入为对话上下文并输出连续语音，难点在于表现力高度主观且缺乏可扩展客观度量，传统声学特征与通用质量分难以反映感知差异。该工作先将表现力解耦为情感强度、韵律丰富度与自发性三个可建模维度，再为各维度训练专用代理打分器，接着用480条人类标注学习非线性融合函数，最后将教师系统蒸馏为统一学生模型以支撑规模化打分。与直接回归整体分或复用去噪质量分不同，该框架显式建模维度间瓶颈制约并用感知不一致惩罚处理过干净合成音。在4组各100条专家标注测试集上，DeEAR整体表现力与人类评分的皮尔逊相关系数达到0.91、斯皮尔曼秩相关系数达到0.85，而DNSMOS与UTMOS均呈负相关。在7系统基准上其排序与人类排序的斯皮尔曼秩相关系数为0.93。在100条盲测A/B中，基于其策展数据微调的模型以78.5%显著优于基线。该结论限于中英双语对话语音与7款语音到语音系统的评测协议，跨语言与跨风格外推尚未验证。原文未披露训练推理硬件与部署成本，生成式AI仅用于语言润色。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，这篇解读要交付什么？

本文解读的对象是 Interspeech 2026 论文 Decoding the Ear，简称 DeEAR。输入是原始论文正文与本次收到的官方原图像素，目标是让刚进入语音音乐音频领域的研究生能核对方法并复述流程。必须保留的信息包括 3 维定义、各自建模手段、融合与蒸馏步骤、数据筛选阈值、评测协议与关键数字，输出是按学习依赖展开的中文技术解读。当前资源状态为未发现来源绑定且完成验证的资源，因此不得声称代码模型数据已公开，原文中项目页链接本次未能确认可达，只按正文描述转述。

全文分数统一在 0 到 100 分范围，子分与总分都由模型输出，不是人工直接打的 100 分制。后续先讲任务与相关路线，再讲方法全景，然后沿一个样本走完输入到输出，接着讲训练构造与实验条件，最后讲结果反证与复现要点。教学用的举例会明确标为例子，不引入无源数值。

### 为什么通用语音质量分管不好表现力？

语音到语音模型已经能把字说清楚，但在角色扮演和陪伴场景里听起来发机器人味，缺的是自然的表现力。已有路线分两类。第一类是主观评测，以平均意见分 MOS 为代表，通常量的是整体质量和自然度，要评表现力还需兼顾语调情感等多维属性，做法是请专家听并给 1 到 5 分，优点是贴近真实听感，缺点是贵且不可扩展。第二类是客观近似，一端是基频方差能量等浅层声学特征，另一端是通用质量模型如 DNSMOS 和 UTMOS，以及窄的情绪识别。

前者抓不住交际意图，后者在本文验证中反而与人类表现力评分呈负相关，因为为干净而生的模型会惩罚富有动态变化的表现力语音。Blizzard 和 VoiceMOS 等挑战赛推动了通用质量评测，但可扩展的表现力量化仍是空白。DeEAR 的选择不是再训一个端到端黑盒，而是先分解再对齐，用不到 500 个标注把客观分往专家偏好上靠。

### 要解决的判断题是什么，输出长什么样？

论文要回答的是如何把主观的表现力偏好变成自动可算的客观分，并证明这个分能用于选模型和选数据。形式化一点，输入是一段 16 kHz 单声道单说话人语音，输出是 4 个 0 到 100 分，分别是情感分 Semo、韵律分 Sprosody、自发性分 Sspon 和总体表现力分 Sexpr。举例说明，假如输入是一句你回来了，文本相同但一种是平直朗读，一种是带惊喜上扬和气口停顿的即兴感说法，理想输出是后者 3 维分和总分都更高，且总分不是 3 维简单平均。

难点有三，一是表现力抽象且标注稀缺，直接回归容易过拟合，二是 3 维到整体的映射是非线性的，某 1 维短板会封顶整体听感，三是部署时不能每次都调 3 个大模型加一个大语言模型。评价标准是与专家评分的皮尔逊相关 PCC 和斯皮尔曼秩相关 SRCC，越高表示排序越一致，系统级排序还看 SRCC 能否接近 0.9 以上。

### 四阶段流水线如何把一个样本变成四个分数？

DeEAR 按分解、代理建模、对齐、提效 4 步组织，原文图 1 称之为 4S 流水线。第一步 S1 把表现力拆成情感、韵律、自发性，理论依据分别是情感环状模型的唤醒度、节律重音的自含节律音系学对意图结构信号的强调、言语感知质量中的自发维度。第二步 S2 为每维训练专用打分器，情感用微调 wav2vec2 学唤醒，韵律用 Gemini-2.5-Pro 按思维链打分，自发性用启发式伪标签蒸馏 wav2vec2。第三步 S3 学统一器，用 20,000 条教师系统伪标签训跨语言 xlsr-53 多任务回归，1 次前向同时预测 3 维。

第 4 步 S4 用 XGBoost 把 3 维分融成总分，在 480 条人工标注上学到瓶颈效应。下面先看原图建立整体位置感，再分节展开每块计算。
图中上半是训练，下半是用法，上半纵向箭头就是样本到分数的主路径，下半三列说明同一打分器可当指标、当过滤器、当奖励模型。

> **看图路径：** 1. 先沿顶部蓝色三维框到黄色统一器再到绿色表现力分的纵向主箭头走一遍；2. 再看左侧小字统一器取代三维系统的标注理解蒸馏替代关系；3. 对照下方面板中指标、数据过滤、奖励模型三列看同一 DeEAR 的不同用法；4. 注意数据过滤列中拒绝 0.2 选择 0.8 的取舍示意与奖励建模的对应

[![原论文 Figure 1：The DeEAR Framework: (A) The training follows a four-stage (4S) pipeline: S1 decomposes…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/5e755d0a713f/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/5e755d0a713f/figure-1.png)

*论文图 1。原论文 Figure 1：“The DeEAR Framework: (A) The training follows a four-stage (4S) pipeline: S1 decomposes expressiveness into Emotion, Prosody, and Spontaneity; S2 trains a scorer for each…”。*

读图时注意上半蓝色框内 3 个打分器的实现差异很大，情感和自发性都是微调 Wav2Vec 而韵律是提示大模型，黄色统一器标注了取代 3 维系统，绿色 XGBoost 只做 3 维到 1 维的融合。下半左侧把文本对应词错率、质量对应 MOS、表现力对应 ES 并列，中间是原始数据经 DeEAR 选出表现力数据再训语音合成与语音对话，右侧是 3 个候选分别得 0.2、0.8、0.3 并拒绝选择拒绝，说明分数可直接做偏好选择。

### 情感分如何从波形学到唤醒度？

情感在这里先用白话说就是听起来有多激动，英文是 Emotion Intensity，操作化为唤醒度 Arousal。只看音高能量等浅层特征不够，因为音色等副语言 nuances 是非线性的。做法是拿 audeering 的 wav2vec2-large-robust-12-ft-emotion-msp-dim 做起点，在 12000 条中文 CNSCED 样本和 2000 条英文 IEMOCAP 样本上微调，保证中英双语鲁棒。输入是原始音频波形， backbone 输出深层表示后回归到情感分。监督来源是开源唤醒度标注，不是本文新采的大规模表现力标注。原文未报告该微调的学习率轮数冻结策略等细节，这是复现时的缺项，不能从模型名字推定哪层冻结或梯度路径。

**情感强度 × 唤醒度：** 情感强度在本研究中被操作化为唤醒度，即声音听起来激动还是平淡的程度，分工是捕捉音色、能量等非线性副语言线索；唤醒度提供心理学上的连续标尺，搭配理由是基频方差等浅层特征抓不住复杂情绪，组合后微调 wav2vec2 从原始波形学深层表示，直接输出情感分 Semo。

沿样本走一遍，输入一段带哭腔的你怎么才来，模型不看文字含义，只从波形表示预测一个偏高的 Semo，后续融合时若其他维很低，总分仍可能被压住，这正是后面要用非线性融合的原因。

### 韵律分为何不用基频方差而请大模型按步骤打分？

韵律丰富度白话说是说话的起伏停顿是否有意图，英文是 Prosodic Richness，覆盖音高、语速、响度、停顿四方面。预实验发现基频方差等规则启发式抓不住交际意图，单调加速减速的表面统计相同但听感不同。于是用 Gemini-2.5-Pro 当自动专家，设计思维链提示强制模型先写下可观察声学现象，例如单调音高或节奏加速，再按固定权重打分。关键约束是语义中立原则，只评怎么送达不评说了什么，避免文案感人拉高分。该打分器报告与人类达到 SRCC 0.73，可作为可扩展的人工替代。原文未给出提示全文与权重细节，只说明先现象后打分与固定权重，这是复现需补的验证项。

**韵律丰富度 × 语义中立性：** 韵律丰富度分工是评价音高、语速、响度和停顿如何服务于意图的结构性变化，语义中立性分工是强制打分只看怎么说而不看说了什么内容，搭配理由是防止大模型被感人文案误导而给平淡朗读高分，组合后 Gemini-2.5-Pro 先记录可观察声学现象再按固定权重打分，输出韵律分 Sprosody。

沿样本走一遍，同样的文本用平直语速读与有重音停顿读，前者现象记录为单调，后者记录为重音与停顿有意图，即使文本情绪词相同，后者 Sprosody 更高。教学例子明确标为例子，不附加无源分值。

### 自发性分如何惩罚又干净又假的声音？

自发性白话说是听起来像没照稿子的聊天，英文是 Spontaneity。假设是感知的自发需要先感知为真人，技术完美但僵硬朗读会触发语音恐怖谷，原文称为感知不一致，即高声学质量配非人类风格。实现分 2 个阶段。第一阶段按数据集人工指定基础等级 Lbase 取 1、3、5、7、9 中之一，Lmax 为 9，再算 4 个 DNSMOS 输出的均值 Mavg。若最小值 Qmin 超过阈值 Tq 且 Lbase 小于 9 则判为超干净，用惩罚映射把 Mavg 反向压到很窄的低区间，例如 Lbase 为 1 时压到 0.0 到 0.5，否则用正常映射把 1 到 5 分的 Mavg 线性映到 Lbase 正负 1 区间。

阈值 Tq 选 3.4 的依据是 4756 条合成音频池的 Qmin 分布，3.4 到 3.5 区间占 35.7%，取 3.4 保留 62.7% 为超干净，取 3.5 只保留 26.9%，前者更严但稳定。第二阶段用这些伪标签微调与情感相同的 wav2vec2-large-robust backbone，把显式启发式蒸馏成鲁棒模型得到最终自发打分器。

**自发性 × 感知不一致：** 自发性分工是判断听起来像即兴交谈还是照稿念，感知不一致分工是解释为何音质极干净但风格僵硬的合成音反而自发性极低，分工搭配理由是只奖音质会错判恐怖谷样本，组合后启发式函数对超干净且基础等级低的样本用反向惩罚映射压到 0.0 到 0.5 区间，否则用正常映射奖励音质，再蒸馏为 wav2vec2 打分器输出 Sspon。

沿样本走一遍，一段录音室级干净但一字一顿的朗读，Mavg 很高但 Lbase 很低且 Qmin 超阈，于是触发惩罚得极低 Sspon，而一段略有气口但节奏自然的聊天录音走正常映射得较高分。

### 融合与蒸馏如何用小标注对齐人类整体听感？

融合要学的是从 3 维到整体的函数，原文观察到瓶颈效应，即某 1 维 robotic 会封顶总分，因此线性不够。用 480 条人工标注做 5 折交叉验证比较线性回归、随机森林、XGBoost，XGBoost 均值 R2 从 0.75 提到 0.83，均方误差 MSE 从 0.016 降到 0.011，降幅超 30%，配对 t 检验 p 小于 0.01，证明非线性必要。蒸馏是为部署提效，教师是 3 个专用打分器，先在 20,000 条无标注上跑出 Semo、Spros、Sspon 伪标签，再训跨语言 wav2vec2-large-xlsr-53 做多任务回归， backbone 需兼顾中英，最终输出 3 维再进已训好的 XGBoost 得 Sexpr。原文明确融合只用不到 500 标注，蒸馏用 2 万伪标签加跨语言 backbone，但未报告优化器、轮数、冻结层与多任务权重，这是复现缺项。

**统一学生模型 × XGBoost 融合：** 统一学生模型分工是用一个 xlsr-53 多任务回归网络同时预测 3 个维度分以便高效部署，XGBoost 融合分工是学习 3 维到整体表现力的非线性瓶颈关系，搭配理由是单网络输出仍需贴合人类整体听感而线性加权压不住短板效应，组合后学生模型先出 3 维分再经 XGBoost 得到 0 到 100 分的 Sexpr，兼顾效率与可解释。

训练阶段没有训语音对话大模型本身，融合与统一器的训练才是本节的训练含义，语音对话模型的微调放在应用验证节。

### 在什么数据和协议下验证与人类的一致性？

验证分 4 组主观评测，分别对情感、韵律、自发性、整体表现力各备 100 条测试，来源是源语料留出集与 S2S-Arena，覆盖真实对话、专业录音与合成语音。请 10 位语音处理专家按 5 分 MOS 量表只评目标维度，配标准化流程与锚例，平均 Krippendorff alpha 为 0.75，可靠性较强。整体任务还对比 DNSMOS 与 UTMOS 作基线。系统级基准测试用 20 条多样对话提示，让 7 个前沿语音对话系统发声，10 位专家评整体表现力 MOS 并按 MOS 减 1 除以 4 乘 100 线性归一到 0 到 100 以便与 DeEAR 同尺度比较。

数据构造侧用 Expresso、NCSSD、M3ED、MultiDialog、IEMOCAP 五库聚合，16 kHz 单声道切单说话人，用 ClearerVoice 做增强与分离，DNSMOS P.835 OVRL 均值 3.17 保质量，DeEAR 3 维打分后取前 15% 即 63.5 分以上，人工抽查 95% 符合高表现力感知，扩到前 20% 会混入模糊样本。最终 ExpressiveSpeech 约 14K 条 51 小时中英均衡，平均表现力 80.2 远高于源库的 39.4 到 62.9。

### DeEAR 在多大程度上复刻了专家的排序？

先看与人类评分的相关性，问题是客观分能否替代专家排序，公平条件是同一 100 条集同一维度，指标越大越好。通用质量基线呈负相关，说明干净不等于生动，而 DeEAR 整体 PCC 0.91、SRCC 0.85，3 维也在 0.65 到 0.84 之间，支持其捕捉感知 nuances 的判断。融合对比中 XGBoost 相对线性回归 R2 提升约 0.08，MSE 下降约 30%，支持非线性假设。系统级排序 SRCC 达 0.93，95% 置信区间 0.71 到 0.95，最高与最低系统分差近 70 分，Wilcoxon p 小于 0.01，区分力强。
下表把核心相关性与融合增益放在同一 5 列框架下比较，最后一列给原文支持的定性判断而非新算的差值。

| 条件 | 指标 | 基线 | 本方法 | 比较对象 |
| --- | --- | --- | --- | --- |
| 整体表现力人类一致性 | PCC | 通用质量基线呈负相关 | 0.91 | DeEAR 整体 |
| 整体表现力人类一致性 | SRCC | 通用质量基线呈负相关 | 0.85 | DeEAR 整体 |
| 韵律人类一致性 | SRCC | 规则基频方差无效 | 0.73 | 提示大模型 |
| 融合 5 折均值 | R2 | 0.75 | 0.83 | XGBoost |
| 融合 5 折均值 | MSE | 0.016 | 0.011 | XGBoost |

表后解释，主要收益是整体排序高度保真且 3 维一致为正，代价是韵律仍依赖大模型提示且融合只在 480 条上验证，泛化边界待补。未胜出项是 DNSMOS 与 UTMOS 在表现力任务上为负相关，不能当表现力指标用。不同指标差值未放入模型列，自动分不等于人评，只作佐证。

### 用 DeEAR 选数据训出的模型真的更生动吗？

第二个应用是评价驱动的数据筛选。基座 S2S-Base 沿 MinMo 与 Qwen2.5-Omni 架构，用 7B 大语言模型加 1.5B 音频语言模型经 S3 分词器连接，音频模型预训 230K 小时后训 4K 小时。微调模型 S2S-FT 只在 51 小时 ExpressiveSpeech 上以 1e-5 学习率训一轮。测试 100 条分域内留出与域外 Emilia 未见文本，10 位母语者盲听 A/B 只问哪段更生动，可选平局。主观上 78.5% 选微调版，10.0% 选基线，11.5% 平局，p 小于 0.001。

客观上总分从 2.0 到 23.4，提升主要在情感与自发，与筛选标准一致，且域外仅小幅回落，支持泛化。
下表汇总可部署策略的客观与主观对照，最后一列标明人类还是 DeEAR 来源以免混淆。

| 条件 | 指标 | 基线 S2S-Base | 本方法 S2S-FT | 比较对象 |
| --- | --- | --- | --- | --- |
| 整体测试集 | Sexpr | 2.0 | 23.4 | DeEAR 客观分 |
| 盲听偏好 | 选择率 | 10.0% | 78.5% | 人类主观 |
| 盲听平局 | 平局率 | 11.5% | 11.5% | 人类主观 |
| 系统级排序 | SRCC | 人工排序基准 | 0.93 | DeEAR 排序 |
| 数据规模 | 时长条数 | 源库混合未筛 | 51 小时约 14K 条 | 筛选后 |

表后解释，最大增益是听感偏好与客观分同向，代价是只训一轮且未测多轮或强化学习效果，11.5% 平局说明仍有样本难分高下。未评测边界包括延迟误判率与成本，原文未测量则不承诺改善。

### 拿掉非线性与惩罚机制会发生什么？

论文的对照围绕融合器选择与自发性阈值展开。融合侧线性回归 R2 均值 0.75 加减 0.021，随机森林 0.814 加减 0.018，XGBoost 0.832 加减 0.015，MSE 分别为 0.016、0.012、0.011，XGBoost 显著最优，支持瓶颈效应的有限解释，但相关性不是因果，不能说线性必然在所有语种失效。自发性侧阈值 Tq 取 3.4 与 3.5 的权衡是保留 62.7% 对 26.9% 为超干净，前者更严但稳定，若放宽到前 20% 表现力区间则人工抽查发现模糊样本混入，损害纯度。韵律侧规则基频方差被报告无效，但未给出完整数字，只能定性引用。失败条件上，通用质量分在表现力任务上为负相关，若误拿 DNSMOS 选生动数据会反向筛选。原文未做逐维消融去掉某 1 维后总分变化的系统报告，因此不补写拿掉后必然怎样，只指出该缺项待验证。

### 哪些结论还不能下，缺了哪些证据？

首先是标注规模与覆盖，有效对齐只基于 480 条融合标注与每维 100 条验证，10 位专家虽一致性 0.75 但仍是小样本，跨口音年龄场景的稳定性未验证。其次是实现透明度，韵律提示全文与权重、自发性 Lbase 逐库赋值、融合与蒸馏的优化器轮数冻结策略、多任务损失权重均未报告，复现需向作者索取或自行搜索。第三是因果边界，SRCC 高只说明排序一致，不说明 DeEAR 能直接优化生成，也不说明误判率延迟成本，训练资源只给了基座预训时长而无 DeEAR 推理开销与帧率。

第四是数据许可，ExpressiveSpeech 源于公开匿名学术集并遵循原协议，以 CC BY-NC-SA 4.0 非商业发布，不能用于商业闭源训练。最后是资源可达性，本次未验证代码模型数据链接可达，不得视为已公开，项目页本次未能确认可达。

### 要复现应先跑通哪三步，最小核对清单是什么？

第一步复现 3 维打分器，情感与自发用同一 wav2vec2-large-robust 起点分别在唤醒标注与启发式伪标签上微调，韵律按先现象后打分加语义中立原则调 Gemini-2.5-Pro，阈值先固定 Tq 为 3.4，Qmin 取 4 个 DNSMOS 最小值，Mavg 取均值，惩罚区间示例按 Lbase 为 1 时 0.0 到 0.5 实现，正常区间按 Lbase 正负 1 实现。第二步复现融合，在 480 条规模的人标上做 5 折交叉验证对比线性回归与 XGBoost，核对 R2 从 0.75 到 0.83、MSE 从 0.016 到 0.011 的方向而非死磕小数后 2 位。第三步复现数据筛选，按 16 kHz 单声道单说话人切分，用 ClearerVoice 增强，保 OVRL 约 3.17，取 DeEAR 总分 63.5 以上约前 15%，人工抽查高表现力比例是否接近 95%。

硬件预算原文未给 DeEAR 训练成本，只给了语音对话基座的 230K 加 4K 小时量级，复现时应先在小集上验证流程再放大。常见误解是把 63.5 当通用阈值，它只是在该混合池前 15% 分位下的取值，换池需重标定。

### 何时值得尝试 DeEAR，何时应谨慎？

当任务是给语音对话或有声书选更生动的样本、给多个系统排表现力名次、或需要可解释的 3 维诊断时值得尝试，因为它用小标注实现了与专家 0.85 以上的排序一致，并把筛选直接转化为 78.5% 的人类偏好胜率。当任务是保字准率、保降噪干净度或卡实时延迟时应谨慎，因为 DeEAR 与 DNSMOS 负相关且未报告延迟成本，不能替代词错率与 MOS。复现先做融合与阈值 2 处验证，再补韵律提示与蒸馏细节的缺项。

未来方向按原文是把该分数扩展到强化学习的奖励模型，但本次只验证了过滤加微调，未验证端到端优化效果，可能待验证。总体判断是报告显示评价驱动的数据筛选是可行范式，支持可靠指标能带动表现力进展，但局限在小规模专家评测与启发式伪标签之内。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
