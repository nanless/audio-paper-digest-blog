---
title: "The Role of Laryngeal Position in the Articulation of American English Velar Stop Consonants"
date: 2026-09-27
draft: false
description: "该研究用超声逐帧追踪舌背与舌骨并做多变量建模，报告/g/以更长更大更快的舌背抬升和舌骨后缩对应低 f0、/k/以舌骨上抬前移对应高 f0，代价是舌轮廓本身差异极小且无声带预振动可直接验证。"
tags: ["统计分析", "发声与构音", "语音学与音系", "语音", "语音属性识别"]
categories: ["interspeech-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:interspeech:2026:conference-paper-id:kim26b_interspeech"
paper_digest_source_kind: conference
paper_digest_conference_id: "interspeech-2026"
paper_digest_conference_record_url: "https://www.isca-archive.org/interspeech_2026/kim26b_interspeech.html"
paper_digest_conference_pdf_url: "https://www.isca-archive.org/interspeech_2026/kim26b_interspeech.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "8071c0276e560593ce6b46e92dde17eea94fe24985b8b67de161203870f9d694"
paper_digest_api_reader_plan_sha256: "74ae9fdaf0616931dc4e3dc2606cca56383c75f68a42151d58f1a0a89a3a181f"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "e8ebacfb29449aceca3573fbad8f077cb34825d886ec8a5320e8935e57776aff"
paper_digest_api_reader_source_table_count: 2
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "8cfb0d6bdb55ac5cab86bd173097daca86012b686c304562e7bd59fde619966c"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "1bd884bc64dacca1f32dcf52a87d6deda005f9a81c1aa0810287f4536bf33dd3"
paper_digest_api_reader_author_count: 1
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "015b5ac503e71fe838a4ebff536257ebfd2dcc2d33bb5924330869deda79c960"
paper_digest_api_reader_resource_count: 0
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.statistical-analysis","label":"统计分析"},{"facet":"scientific_topic","id":"scientific_topic.phonation","label":"发声与构音"},{"facet":"scientific_topic","id":"scientific_topic.phonetics","label":"语音学与音系"},{"facet":"signal","id":"signal.speech","label":"语音"},{"facet":"task","id":"task.speech-attributes","label":"语音属性识别"}]
paper_digest_primary_task: "语音属性识别"
paper_digest_primary_method: "统计分析"
paper_digest_score: 5.1
paper_digest_rank_bucket: "后50%"
paper_digest_document_type: "应用研究"
paper_digest_conference_structure: pdf-visual-quote-evidence-v1
---

# 📄 舌背抬得更多、喉却放得更低：美英语/k/与/g/的舌喉协同

> 英文题目：*The Role of Laryngeal Position in the Articulation of American English Velar Stop Consonants*

> 会议身份：`conference:interspeech:2026:conference-paper-id:kim26b_interspeech`



> 来源为官方会议 PDF；图片依据原页像素，表格数字依据原文引用。PDF 文字层不视为原始 TeX，未可靠恢复的结构不作推断。


> 会议来源：[官方记录](https://www.isca-archive.org/interspeech_2026/kim26b_interspeech.html) · [官方 PDF](https://www.isca-archive.org/interspeech_2026/kim26b_interspeech.pdf)

标签：#统计分析 #发声与构音 #语音学与音系 #语音 #语音属性识别

评分：**5.1/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.4/1.5

排名：后50% | 文档类型：应用研究

## 👥 作者与机构

- Daejin Kim：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

该研究输入为美国英语词首清浊软腭塞音/k/与/ɡ/在/i u ɑ/元音前的同步超声矢状面视频与音频，输出为舌背与舌骨运动学差异及其与后接元音基频峰值的关联判定，难点在于软腭接触遮挡真实接触量且喉位无法直接观测。首先用DeepLabCut在Articulate Assistant Advanced中逐帧追踪舌面样条T0-T10与舌骨与下颌阴影并做基于舌背-舌骨向量的旋转与等比归一化，其输出的舌骨到T4欧氏距离进入声学与发音地标标注，得到闭塞时长与嗓音起始时间与元音时长与基频峰值及起始点与目标点与偏移点与峰值速度后再进入混合模型检验。与既往只比舌轮廓高度的工作不同，该链条把舌骨作为舌外肌起点来度量舌扩张，并同步检验舌拉假说与气动嗓音约束两种对立机制。原文未提供可核对的关键定量结果。该结论仅适用于无预浊音的美国英语朗读变体与载体句中 /ə/ 后的词首塞音，未验证自发语速与跨语言外推。其适用边界受限于朗读载体句语料，尚未验证自发语速与跨语言外推。原文未披露训练、推理或部署成本。

## 🔗 开源与复现资源

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 为什么词首/k/与/g/听得出区别却看不清振动？

输入是美英语词首软腭塞音的发音与声音，目标是解释清音/k/与浊音/g/的对比靠什么实现，必须保留的信息是美英语词首浊塞音通常没有释放前声带振动，输出是对舌与喉运动的直接测量而非仅靠听感。本解读按学习依赖展开，先讲任务与两条竞争路线，再讲超声测量全景与舌骨为原点的计算，然后讲标注与统计构造，接着讲实验条件与声学结果，最后讲舌喉结果、反证与复现要点。

刚入门的读者需要先建立白话图像：舌背（英文 tongue dorsum，缩写 TD）是舌面朝向软腭咽口、抬起后接触软腭的那一段舌体；舌骨（英文 hyoid bone，缩写 HY）是舌根下方超声阴影指示的喉部结构骨块，下颌（英文 mandible，缩写 MD）是右侧另一处阴影，用作度量舌骨位移的参照。论文把二者都看作发音手势，即音系表达的基本动作单位，手势地标包括动作开始点 ONSET、空间目标点 TARGET、动作结束点 OFFSET，以及从开始到目标之间速度最大的峰速度点 PV。

美英语的难点在于音系上有清浊对立，语音上却缺少稳定的预振动，只能靠闭合到释放时长 CD、释放到声带起振的嗓音起始时间 VOT、相邻元音基频 f0 峰值与元音时长 VD 等相邻线索区分。已有工作知道/g/的舌体抬升更长且峰速度更高，但缺少舌与喉同时、同帧的精细测量。本文的动作就是补上这一环，用超声视频逐帧追踪舌轮廓与舌骨下颌向量，再把声学标注与运动地标对齐。

### 同输入同目标的前人工作给出了哪两条相反预测？

相关工作都用同类输入即软腭塞音发音、同类目标即解释清浊对比，但在监督与运行阶段不同。第一条路线是舌牵拉假说，来源是高元音比低元音 f0 更高的现象，机制是舌抬高牵拉喉部使声带变紧。若该机制适用于软腭塞音，因为软腭音主要靠舌背抬升完成，那么/k/应有更长更大的舌背抬升并伴随更靠上靠前的舌骨，同时对应后续元音更高的 f0，这就是论文的假设 1。

第二条路线是气动发声约束（英文 aerodynamic voicing constraint，缩写 AVC），机制是浊塞音闭合期口腔气压升高会减少气流从而难以维持声带振动，为绕开约束说话人会扩大声门上空间，例如降低舌与喉。已有英语与巴西葡萄牙语、法语变体的超声与核磁研究都报告浊塞音降低舌或喉，尽管美英语浊塞音语音上仍是清的。若该机制成立，/g/应是舌背抬升减小、舌骨降低，对应后续元音更低 f0，这就是论文的假设 2。

第 3 条路线是虚拟目标假说（英文 virtual target hypothesis），认为目标可以设在发音器官生理极限之外，舌会压迫接触面并推出额外位移，从而用接触时长、位移距离与关闭相速度差异体现辅音对比。前人报告/g/比/k/有更长更大的舌软腭接触与舌体位移，但说话人变异大且人数少。本文的不同在于不只比较舌形本身，还把从舌骨出发的舌背运动距离作为间接的接触度量，以检验目标虚拟性。

教学例子是：把手按在桌面上仍继续用力，手的位置读数会超过桌面，超出的部分就是虚拟目标的含义，但这只是例子，不代表本文测得具体超出毫米数。

### 本文要回答的具体问题与可检验的对立是什么？

本文研究的是词首音节中/k/与/g/的舌喉发音机制及其声学关联，输入是同步录制的超声舌视频与音频，输出是对两个竞争假设的检验与新的综合解释。问题可拆成三问：第一，舌骨在舌背到达目标时是否对/k/上抬前移、对/g/下降后缩，并与前后元音 f0 高低对应；第二，/g/是否以更长更大更快的舌背抬升实现充分的时空扩张与最大接触；第三，舌轮廓形状差异与以舌骨为原点的运动学差异是否指向不同机制。假设 1 预测/k/舌背更长更大、舌骨更高更前。

假设 2 预测/g/舌背更长更大更快但舌骨更低，且/k/舌骨更高。注意二者都涉及舌骨高度，但对舌背大小方向预测相反，这正是后文统计要裁决的。论文把发音手势地标间距离差与时长差作为检验量，把 f0 峰值、CD、VOT、VD 作为声学锚点。若只看舌形而忽略舌骨原点，可能得出舌差异可忽略的结论；若只看声学而不看运动地标，则无法区分牵拉还是喉位置直接调控。

因此后文必须同时保留舌形模型、舌骨向量模型与舌背运动学模型 3 条证据。

### 方法全景：从一句话录音到舌骨原点的运动曲线走了哪几步？

先沿一个样本走完全程。以 god /gɑd/ 为例，输入是说话人戴头架固定探头后录制的超声视频与同步音频，目标词出现在 I wrote a god on the paper 这类引出一般回答的载体句中，目标辅音前为/ə/，因此关闭与打开的舌背抬升轨迹清晰且变异小。表示阶段用 DeepLabCut 在 Articulate Assistant Advanced 软件中逐帧追踪舌面暗边下方的舌轮廓样条 T0 至 T10，以及舌根下方舌骨阴影与右侧下颌阴影构成的向量，所有坐标经由下方基准线计算笛卡尔坐标，再按每帧舌背舌骨向量旋转并按该向量长度等比缩放做归一化。

组件阶段把舌背运动定义为舌骨点到舌轮廓第五点 T4 的欧氏距离，舌骨位置定义为相对下颌的 2 维位移向量。目标阶段在 Praat 中标注声学闭合、释放与声带振动起止，换算为 CD、VOT、VD 与 VD 内 f0 峰值，同时在运动曲线上标注 ONSET、TARGET、OFFSET 与 PV，并计算地标间距离差与时长差及加速减速段。输出是每 token 的声学与运动学参数表，供后文混合模型估计辅音类型效应。下段图展示了超声原图与估计量的对应，是理解后文为何用舌骨作原点的关键。

为理解舌轮廓、舌骨、下颌与基准线的空间关系，请看下图原像素，先建立从图像到坐标的映射，再进入追踪细节。

> **看图路径：** 1. 先看(a) 原图红色舌轮廓与左右下方舌骨与下颌阴影的位置关系；2. 再看(b) 估计后的舌轮廓红线、舌骨下颌蓝向量与下方黄色基准线；3. 最后看(c) 从舌骨指向 T4 的红箭头与 T0 至 T3 蓝色扇形线的起点是否同一点

[![原论文 Figure 1：(a) Ultrasound tongue images with major linguolaryngeal landmarks at TARGET of /ɡ/ in god, all](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/af493c312c61/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/af493c312c61/figure-1.png)

*论文图 1。原论文 Figure 1：“(a) Ultrasound tongue images with major linguolaryngeal landmarks at TARGET of /ɡ/ in god, all”。*

上图(a) 是 TARGET 时刻 god 中/g/的原超声图，红色虚线为舌轮廓，左右下方阴影分别指示舌骨与下颌；(b) 是估计后的舌轮廓红线、上方软腭白亮区、舌骨下颌蓝向量与黄色基准线；(c) 是从舌骨指向 T4 的红箭头即舌背距离，蓝色扇形为 T0 至 T4 各点到舌骨的连线。可见舌面是弧形亮带，舌骨下颌是下方暗区中的可定位阴影，基准线用于统一坐标系。该图支持后文做法：即使看不清软腭硬边界，只要舌骨起点可靠，从该起点量的舌背距离仍能反映抬升与接触的相对变化。质量差到轮廓或双阴影完全不可见不可估计的 token 被排除，这是后文样本量减少的原因之一。

### 三个组件各自算什么？为什么要组合在一起？

第一个组件是舌轮廓形状，用广义加性混合模型 GAMM 估计在 ONSET、TARGET、OFFSET 3 个时刻沿 T0 至 T10 的纵轴形状及/k/减/g/的层间差，随机效应以说话人为因子平滑控制舌大小朝向差异。第二个组件是舌骨位置，用向量广义线性模型 VGLM 估计相对下颌的水平与垂直位移，再用两个线性混合模型 LMEM 分别估计水平与垂直分量并做事后比较，以弥补 VGLM 不支持随机截距斜率与重复测量的不足。

第 3 个组件是舌背运动学，用 LMEM 估计 ONSET 到 TARGET、ONSET 到 PV、PV 到 TARGET、TARGET 到 OFFSET 的距离与时长及 PV 大小，预测变量为辅音 C1 与元音 V，均做虚拟编码并只保留显著变量。组合的理由是单看舌形易受归一化与说话人差异掩盖，而单看舌骨不知舌扩张程度，只有把舌骨作原点的距离与舌骨自身向量并置，才能区分牵拉机制与喉直接调控。

**舌背 × 舌骨：** 舌背负责向软腭面抬升形成舌软腭接触，舌骨作为喉部结构与舌外肌起点反映喉位置，二者搭配的理由是超声看不清软腭硬边界但能同时看到舌面与舌骨下颌阴影，组合意义是以舌骨为原点度量舌背距离从而同时得到舌扩张与喉定位。

**气动发声约束 × 舌牵拉假说：** 气动发声约束分工是解释浊塞音闭合期气压升高难以维持声带振动，舌牵拉假说分工是解释舌抬高拉紧声带导致高元音高 f0，搭配理由是二者对/k/与/g/的舌背与舌骨运动方向给出相反预测，组合意义是形成假设 1 与假设 2 的竞争检验。

**虚拟目标 × 发音手势：** 虚拟目标分工是把舌目标设在软腭物理接触面之外以解释接触时长与位移差异，发音手势分工是把起始点、目标点、偏移点与峰速度之间的时空参数作为音位对比单位，搭配理由是舌可压迫软腭并超越极限，组合意义是用手势地标间距离与时长检验/g/是否时空扩张更大。

**基频峰值 × 闭合释放时长：** 基频峰值分工是记录相邻元音声带振动速率的声学结果，闭合释放时长与嗓音起始时间分工是记录闭合到释放与释放到起振的时序，搭配理由是美英语词首浊塞音少有释放前振动只能靠这些相邻线索区分，组合意义是把舌喉运动与可听对比锚定在同 1 token 上。

回到样本：god 的声学闭合释放点确定 CD，释放到元音起振确定 VOT，元音段内最高 f0 为峰值；运动上舌背距离开始增大为 ONSET，首次到达目标为 TARGET，开始朝向后续元音或结束为 OFFSET，TARGET 与 OFFSET 间舌形基本保持不变。PV 是 ONSET 到 TARGET 间距离变化率的最大值，单位为毫米每秒。距离与时长均取地标间差值，加速为 ONSET 到 PV，减速为 PV 到 TARGET。这种定义使声学与运动在时间上可对齐，为后文检验 f0 与舌骨位置的相关提供共同时钟。

### 本研究训练了什么？没有训练的部分如何完成计算？

本研究没有训练神经网络声学模型，也没有训练语音合成或识别器，因此不存在优化器、梯度路径、参数冻结更新或早停等训练环节，需要明确说明以免误解。实际计算分为 3 类。第一类是既有模型推理：用 DeepLabCut 在 AAA 软件中对舌面与阴影做无标记姿态估计，属于调用已有跟踪模型逐帧输出坐标，不在本研究内更新权重，原文未报告其训练集与超参数缺项。

第二类是人工标注与几何计算：作者比对舌形与运动轨迹标注 ONSET、TARGET、OFFSET，脚注说明它们不是定量最大最小值，例如/g/的 ONSET 是此前/ə/运动之后舌背重新开始的起点；距离为欧氏距离，速度为距离变化率，归一化为旋转加等比缩放。第 3 类是统计推断：LMEM 用 lmerTest 拟合，VGLM 用 vgam 拟合 2 维向量，GAMM 用 mgcv 拟合平滑并用 tidygam 绘图，说话人变异以因子平滑或随机效应控制，显著性阈值为 p 小于 0.05 并经模型比较保留显著变量。

未报告的缺项包括超声帧率、跟踪失败率明细之外的逐说话人剔除分布、以及 VGLM 固定效应估计中说话人方差被低估的具体校正量，这些缺项不影响已报告效应的方向判断，但限制对效应量跨研究泛化的精度。

### 实验条件：谁在什么句子中发了哪些音？如何保证可比？

参与者为 10 名美英语母语者，7 男 3 女，平均录制年龄 20.3 岁，出生并成长于科罗拉多、新墨西哥与得克萨斯州，自报无言语语言障碍，录制在新墨西哥大学语言学实验室隔音间进行。目标词为 keep、geek、coop、goop、cod、god，覆盖辅音/k/与/g/及元音/i、u、ɑ/，每词嵌入载体句并以听问答形式引出作为一般回答，每块随机呈现 6 句，重复 12 块，理想每人 72 个 token，共 720 个 token；舌坐标完全不可见不可估计的 174 个被排除。

声学用 Praat 标注闭合释放与振动起止，运动用地标法标注，条件一致性靠三点保证：目标辅音前均为/ə/以减少协同变异，头架固定探头与头部相对位置，坐标经旋转缩放归一化以减少探头与舌尺寸差异。指标方向为：CD 越长、VOT 越短、VD 越长、f0 峰值越低越偏向/g/的已知声学模式；运动上距离越大时长越长 PV 越高表示扩张更大更快。资源状态方面，本次未发现来源绑定且完成验证的资源，不得声称代码模型数据已公开。

为把声学地标与运动地标的对齐方式看清楚，请先读下图导读再对照像素解释。

> **看图路径：** 1. 先沿顶部声波从/ə/闭合/g/释放/ɑ/的顺序确认时间轴；2. 再比较蓝色实线舌背距离与蓝色虚线速度曲线的峰值先后；3. 最后核对左侧三张超声小图 ONSET、TARGET、OFFSET 与右侧圆点三角方块标记的对应

[![原论文 Figure 2：Schematic illustration of gestural landmarks](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/af493c312c61/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/af493c312c61/figure-2.png)

*论文图 2。原论文 Figure 2：“Schematic illustration of gestural landmarks”。*

上图左侧 3 张小超声图分别对应 ONSET 圆点、TARGET 三角、OFFSET 方块时刻的舌形与舌骨下颌位置，右侧上为/ə/闭合/g/释放/ɑ/的声波，中部蓝色实线为从舌骨量的舌背距离随时间先升后降，蓝色虚线为速度先升后降且峰值早于距离峰值。可见距离峰值即 TARGET 滞后于速度峰值 PV，OFFSET 后距离回落而速度已转向。该图说明后文为何分加速与减速段统计，以及为何 TARGET 到 OFFSET 距离为负向回落。像素不能精确读出毫秒与毫米数值，数值以后文模型估计为准。

### 主结果：声学对比成立吗？舌形差异有多大？

先回答声学是否复现已知模式。比较问题是：在相同载体句与相同标注口径下，/g/是否相对/k/有更长 CD、更短 VOT、更长 VD 与更低 f0，公平条件是同说话人混合模型同时控制元音类型，指标方向如前所述。下表整理模型估计的层间差异，基线为/k/，表中数字与单位均来自原文连续句，β 为/k/与/g/层间差估计，SE 为标准误。

| 条件 | 指标 | /g/相对/k/方向 | 估计值 | 标准误与显著性 |
| --- | --- | --- | --- | --- |
| 词首软腭塞音 | 闭合释放时长 CD | /g/更长 | -11.8 | SE 2.04，p 小于 0.001 |
| 词首软腭塞音 | 嗓音起始时间 VOT | /g/更短 | 62.8 | SE 2.81，p 小于 0.001 |
| 词首软腭塞音 | 后续元音时长 VD | /g/更长 | -26.0 | SE 1.75，p 小于 0.001 |
| 词首软腭塞音 | 后续元音 f0 峰值 | /g/更低 | 0.69 | SE 0.07，p 小于 0.001 |

上表显示声学四项全部显著且方向与前人一致，支持后文把 f0 高低与舌骨位置关联的合理性，代价是这些仍是相关而非因果，且未测量误判率延迟成本。接着看舌形。GAMM 估计在 ONSET 与 OFFSET 无显著层间差，在 TARGET 显著但实际差值在舌背区平均小于 0.05，脚注说明按探头直径 20 毫米换算约小于 1 毫米，且多数说话人舌骨下颌向量小于 20 毫米，因此解释为可忽略。下图给出三时刻形状与差值。

为确认舌形差异是否真可忽略，请按导读观察下图上下两排的对应关系。

> **看图路径：** 1. 先看上排三条几乎重合的舌形曲线确认整体差异很小；2. 再看下排(b') 中间舌背区黑色差值线是否上偏及粉色显著带位置；3. 最后比较(a') 与(c') 差值线是否贴近零线且置信带是否包含零

[![原论文 Figure 3：(a)-(c) Tongue contour shapes and their differences across tongue measurement points (T0- T10)…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/af493c312c61/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/af493c312c61/figure-3.png)

*论文图 3。原论文 Figure 3：“(a)-(c) Tongue contour shapes and their differences across tongue measurement points (T0- T10) between levels at ONSET, TARGET, and OFFSET of /k/ and /ɡ/ and (a')-(c') their…”。*

上图上排为 ONSET、TARGET、OFFSET 三时刻/k/黄绿与/g/紫红的舌形曲线，几乎重合；下排为/k/减/g/的差值黑虚线与置信带，粉色为显著区间。可见仅(b') 即 TARGET 在舌根与舌背区出现小幅偏离，其余贴零。该结果拒绝仅靠舌轮廓支持假设 1 的牵拉机制，因为若牵拉主导应有更大形状差；但它不否定运动学差异，因为形状是归一化后的静态截面，而距离时长速度是从舌骨原点量的动态过程。未胜出项是 ONSET 与 OFFSET 的舌形比较，二者均不显著，说明起点与结束姿态基本相同，差异集中在目标实现过程。

### 反证与分解：舌骨向量与舌背运动学是否给出相反方向？

本节承担反证与机制分解任务，相当于消融比较：若拿掉舌骨原点只看舌形会得到无差异结论，加上舌骨向量与运动学后结论是否反转。先看舌骨。VGLM 估计/g/在 TARGET 与 OFFSET 比/k/更靠后靠上而非更低，水平与垂直分量均显著，ONSET 无差异；地标间比较显示/g/从 ONSET 到 TARGET 与 OFFSET 进一步后缩，/k/则进一步上抬。作者解释为/g/后缩对应低 f0 并绕开 AVC，/k/上抬对应高 f0 与喉上移。为检验舌背扩张，下表整理运动学估计，方向为/g/相对/k/。

| 条件 | 指标 | /g/相对/k/方向 | 估计值 | 标准误与显著性 |
| --- | --- | --- | --- | --- |
| 关闭相 | ONSET 到 TARGET 距离 | /g/更长 | -1.01 | SE 0.24，p 小于 0.001 |
| 关闭相加速 | ONSET 到 PV 距离 | /g/更长 | -0.42 | SE 0.11，p 小于 0.001 |
| 关闭相减速 | PV 到 TARGET 距离 | /g/更大 | 0.60 | SE 0.15，p 小于 0.001 |
| 关闭相速度 | 峰速度 PV | /g/更快 | -6.22 | SE 2.55，p 小于 0.05 |
| 关闭相时长 | ONSET 到 TARGET 时长 | /g/更长 | -9.85 | SE 1.70，p 小于 0.001 |

上表显示/g/在关闭相距离时长速度 3 维同时更大，支持假设 2 的充分时空扩张与最大接触解释；代价是 TARGET 到 OFFSET 距离/k/更长为负向回落更大，时长/k/更长，说明/k/离 target 后回落更多，而/g/目标保持更紧。未显著项是 ONSET 到 PV 时长无辅音效应，说明加速段时长相同而距离速度不同，差异主要在减速段。为直观比较舌骨向量的组间与组内变化，请看下图。

为核对舌骨上抬与后缩分别是哪一组在哪个地标间发生的，请按导读观察下图。

> **看图路径：** 1. 先看上排 ONSET、TARGET、OFFSET 三面板中黄绿/k/与紫色/g/斜线的垂直高度差；2. 再看下排/k/内 ONSET 到 OFFSET 的垂直抬升幅度与/g/内几乎重合的三条线的对比；3. 最后核对横轴为水平位移、纵轴为垂直位移且原点为下颌的向量含义

[![原论文 Figure 5：Model estimates of the effect of consonant](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/af493c312c61/figure-4.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/interspeech-2026/af493c312c61/figure-4.png)

*论文图 4。原论文 Figure 5：“Model estimates of the effect of consonant”。*

上图上排三面板横轴为水平位移、纵轴为垂直位移，原点为下颌，斜线从下颌连向舌骨估计点，可见 TARGET 与 OFFSET 时/k/点更高更靠左即更上抬前移，/g/更低更靠右即相对后缩；下排左为/k/内 ONSET 到 OFFSET 明显上移，右为/g/内三线几乎重合且更水平。该图支持喉位置直接调控 f0 的解释，而非舌牵拉间接导致，因为舌形差异可忽略但舌骨差异显著。限制是超声阴影定位精度与归一化尺度假设，以及 VGLM 低估说话人变异后仅用 LMEM 事后比较弥补，效应量跨设备泛化待验证。

### 哪些结论是报告、哪些是推测？边界在哪里？

论文直接报告的是：声学四项显著、舌形在 TARGET 统计显著但幅度可忽略、舌骨在 TARGET 与 OFFSET 的水平垂直差异显著、舌背关闭相距离时长速度/g/更大。有限解释是：舌骨上抬前移与高 f0 相关、后缩与低 f0 及绕开 AVC 相关，这得到跨语言降低舌喉的文献支持，但本文无声带振动与气压直接测量，因此只能说支持而不能说证明因果。未验证推测是：f0 对比可能已音系化为语言特定语音语法的喉速率调控，或为跨语言增强模式的刻意编程，这些需跨语言与感知实验补证。

边界包括：仅词首 C1、仅 6 个词与 3 个元音、仅 10 名特定州说话人、剔除 174 个低质量 token 后的样本、超声看不清软腭硬边界故接触为间接估计、ONSET 与 TARGET 为作者比对形状与轨迹的人工标注而非定量极值。总体趋势不等于每组每步成立，例如元音/i、u、ɑ/的协同可能不同，但原文仅以元音为控制变量未展开交互效应量。未测量识别误判率、延迟与计算成本，不得承诺这些量改善。

### 何时值得尝试？复现先做什么？还需补哪项验证？

当研究目标是音系对立语音实现模糊的软腭塞音，尤其是缺少预振动而需舌喉协同解释时，值得尝试本文的舌骨原点度量与手势地标法。复现先做 4 步：第一，按相同载体句与/ə/前文收集/k/与/g/各配/i、u、ɑ/的同步超声音频，并固定头架与探头；第二，用相同软件逐帧追踪 T0 至 T10、舌骨下颌向量与基准线，做旋转等比归一化并定义舌骨到 T4 距离；第三，在 Praat 中按相同口径标注 CD、VOT、VD 与 f0 峰值，在运动曲线上按形状轨迹标注 ONSET、TARGET、OFFSET 与 PV；第四，用 LMEM、VGLM 加 LMEM 事后比较、GAMM 3 套模型分别估计运动学、向量与形状，阈值 p 小于 0.05。

关键信息条件是保留 β、SE、p 与基线/k/的编码方向，区分百分点与相对百分比时本文均为原始毫米毫秒与模型系数而非百分比。还需补的验证是同步喉部直接测量、气压气流记录、更多元音与语境及更大样本，以检验后缩绕开 AVC 的因果链。资源方面本次无可用开源声明，不得写代码数据已公开，复现应按原文软件版本与包名自行搭建。

### 综合判断：舌扩张与喉定位如何同时 conditioning 对比？

综合 3 条证据，/g/的舌背从舌骨出发的关闭相更长更大更快，舌骨相对下颌更靠后，声学上 CD 更长、VOT 更短、VD 更长、f0 更低；/k/的舌骨更高更靠前，声学上 f0 更高，而舌轮廓静态形状差异可忽略。这支持虚拟目标与 AVC 兼容的解释：舌在接触面处均压迫软腭并推出虚拟位移，但/g/的时空扩张更大且伴随舌骨后缩，/k/的喉位置更高。舌牵拉假说在本数据下不被支持，因为牵拉预测的舌形大差异与/k/更大扩张均未出现。

常见误解是把舌形无差异当作发音无差异，或把 f0 相关当作舌拉动声带的证明，本文的纠正是静态形状与动态原点距离不同，f0 更可能由喉位置直接调控。对初学者可复述的方法是：固定探头录超声同步音频，追踪舌轮廓与双阴影并归一化，以舌骨为原点量舌背距离并标注四地标，同步标注四声学量，再用 3 套统计分别回答形状、位置与运动学问题。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 interspeech-2026 论文汇总](/posts/conference-interspeech-2026/)
