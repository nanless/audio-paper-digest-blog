---
title: "Semantic Audio-Visual Navigation in Continuous Environments"
date: 2026-09-13
draft: false
description: "论文提出连续环境语义视听导航任务 SAVN-CE 与记忆增强模型 MAGNet，用自运动线索加情景记忆维持静音后目标推理，直接报告最高 12.1 个百分点成功率提升，代价是 128 线程加 4 卡约 14 天训练与干扰声下增益收窄。"
tags: ["多模态学习", "Transformer", "音视频", "空间音频信号", "联合声音事件检测定位"]
categories: ["cvpr-2026 论文"]
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_paper_id: "conference:cvpr:2026:conference-paper-id:Zeng_Semantic_Audio-Visual_Navigation_in_Continuous_Environments_CVPR_2026_paper"
paper_digest_source_kind: conference
paper_digest_conference_id: "cvpr-2026"
paper_digest_conference_record_url: "https://openaccess.thecvf.com/content/CVPR2026/html/Zeng_Semantic_Audio-Visual_Navigation_in_Continuous_Environments_CVPR_2026_paper.html"
paper_digest_conference_pdf_url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Zeng_Semantic_Audio-Visual_Navigation_in_Continuous_Environments_CVPR_2026_paper.pdf"
paper_digest_api_reader_contract: "beginner-researcher-v3"
paper_digest_api_reader_article_sha256: "a4bd4c960bdfb6a822960d17cf62042c773e9ec51a577397052add3be5a701eb"
paper_digest_api_reader_plan_sha256: "5a143da4980f06982910ebf789220a54fa4e45bf018eaff4af8c203c0f9ea7f8"
paper_digest_api_reader_source_binding_contract: "api-reader-source-bindings-v4"
paper_digest_api_reader_source_bindings_sha256: "72f76f4905688579075526a5e0999d333bc9b1cf32dd05d28c14ef6211691648"
paper_digest_api_reader_source_table_count: 4
paper_digest_api_reader_source_formula_count: 0
paper_digest_api_reader_structured_artifacts_sha256: "9e56fbed15cc467a545191b2ded69f71a55a4299a50f14c2a77eec149d738359"
paper_digest_api_reader_author_identity_contract: "api-reader-author-identity-v1"
paper_digest_api_reader_author_identity_sha256: "ac6138c62f176b829bbef91e1165a0eaee84a8f23c5a826dc8c35ad311b97fb6"
paper_digest_api_reader_author_count: 7
paper_digest_api_reader_resource_identity_contract: "api-reader-resource-identity-v1"
paper_digest_api_reader_resource_identity_sha256: "14042a2cff3aec28fe04b253dae156f6000f545edffb1dc61bff2757f8a8f786"
paper_digest_api_reader_resource_count: 1
paper_digest_api_reader_decision_projection: "api-reader-decision-projection-v2"
paper_digest_scoring_contract: "api-scoring-audit-v2"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_concepts: [{"facet":"method","id":"method.multimodal-learning","label":"多模态学习"},{"facet":"method","id":"method.transformer","label":"Transformer"},{"facet":"signal","id":"signal.audiovisual","label":"音视频"},{"facet":"signal","id":"signal.spatial-audio","label":"空间音频信号"},{"facet":"task","id":"task.seld","label":"联合声音事件检测定位"}]
paper_digest_primary_task: "联合声音事件检测定位"
paper_digest_primary_method: "多模态学习"
paper_digest_score: 7.5
paper_digest_rank_bucket: "前25%"
paper_digest_document_type: "方法研究"
paper_digest_conference_structure: replayable-pdf-layout-v1
---

# 📄 声音停了之后还怎么找：连续环境语义视听导航与记忆增强目标推理

> 英文题目：*Semantic Audio-Visual Navigation in Continuous Environments*

> 会议身份：`conference:cvpr:2026:conference-paper-id:Zeng_Semantic_Audio-Visual_Navigation_in_Continuous_Environments_CVPR_2026_paper`


> ✅ 来源为官方会议 PDF；表格与 Figure 按原文证据绑定。PDF 公式以原页区域图片展示，未冒称作者原始 TeX。

> 会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zeng_Semantic_Audio-Visual_Navigation_in_Continuous_Environments_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zeng_Semantic_Audio-Visual_Navigation_in_Continuous_Environments_CVPR_2026_paper.pdf)

标签：#多模态学习 #Transformer #音视频 #空间音频信号 #联合声音事件检测定位

评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前25% | 文档类型：方法研究

## 👥 作者与机构

- Yichen Zeng：机构信息未能从会议 PDF 纯文本可靠映射
- Hebaixu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Meng Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Chen Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Kehan Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Gongping Huang：机构信息未能从会议 PDF 纯文本可靠映射

## 📌 核心摘要

连续语义视听导航（Semantic Audio-Visual Navigation in Continuous Environments，SAVN-CE）要求智能体在Matterport3D连续室内场景中仅凭双耳音频、128x128 RGB-D与相对初始位姿，在目标间歇发声甚至彻底静默后仍定位语义目标并执行0.25 m前进与15度转向细粒度动作。所提记忆增强目标描述子网络（Memory-Augmented Goal descriptor Network，MAGNet）先由多模态观测编码器抽取视觉、音频、动作与位姿特征并写入场景记忆，再由目标描述子网络（Goal Descriptor Network，GDN）融合双耳线索、自运动线索与情景记忆输出空间语义表征，最后由上下文感知策略网络对场景记忆编解码并输出动作分布。相对SAVi仅凭当前音频独立估计位置类别的做法，MAGNet用因果Transformer建模历史目标嵌入与位姿变化的时空连续性，因而在静默期仍可外推目标方位。在1000回合干净测试集上MAGNet成功率（Success Rate，SR）达37.7%，相对SAVi的25.6%提升12.1个百分点。结论仅适用于单静态目标与至多单干扰源的室内仿真，动态声源与多目标尚未验证。原文未披露推理时延与部署成本。

## 🔗 开源与复现资源

- 代码相关资源：<https://github.com/yichenzeng24/SAVN-CE> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

## 🧭 深度解读

### 输入是什么，目标是什么，为什么声音会消失？

本文输入是连续室内 embodied 导航的感官流，目标是找到语义上有落点的发声物体。初学者先建立白话图像：智能体被随机放到未见过的 Matterport3D 房间里，不知道目标在哪、目标何时响，只带着双耳波形、第一视角彩色深度图、上一步动作与相对位姿行走。目标不是任意坐标，而是有类别的物体，例如一把会间歇吱呀作响的椅子。

必须保留的关键信息是声音的时间结构。目标在回合开始时不响，只在 onset 之后响一段有限时长，响的过程中还可能因大时间间隔与 0.25 秒细仿真步长而断续，接近目标时可能彻底停止。原文用黄色表示发声期、蓝色表示静音期来划分轨迹，强调智能体先要在无目标信息下探索，听到后做长程导航，静音后仍要到达。输出是离散低层动作序列与停止判定，成功要求在目标声源 1 米内执行停止，停在干扰源或同类其他实例都算失败。

下图把三代任务放在同一俯视走廊场景下对比，重点不是谁的轨迹更短，而是约束如何收紧。

**语义视听导航 × 连续环境：** 语义视听导航负责把短时声音与视觉物体类别对应起来，解决找什么的问题；连续环境负责允许自由位姿与细粒度动作并动态渲染连贯音视频，解决在哪里以什么步长移动的问题；两者搭配是因为只有连续运动才能暴露声音间歇与混响尾迹带来的目标丢失，组合后新增了在发声窗口外仍需保持语义与方位估计的要求。

> **看图路径：** 1. 先看三幅俯视图的红色网格点在何处出现、何处消失；2. 再对比黄色发声段与蓝色静音段在轨迹上的占比变化；3. 最后确认起点紫块与终点绿块的空间关系是否跨房间

[![原论文 Figure 1：Illustration of the three navigation tasks: (a) the agent is restricted to discrete grid points…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/4aeba0bf490d/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/4aeba0bf490d/figure-1.png)

*论文图 1。原论文 Figure 1：“Illustration of the three navigation tasks: (a) the agent is restricted to discrete grid points and the sound-emitting goal is placed arbitrarily; (b) the goal, which emits a…”。*

该图左侧离散音频视觉导航只允许落在红色网格点，目标位置任意；中间语义导航把目标固定到椅子但仍受网格约束；右侧连续语义导航取消网格，允许细粒度转向与前进，且发声窗口只占轨迹中段。这解释了后文为什么需要记忆：可走空间变大、发声时间变短，单帧音频不再足够。

### 同输入同目标的已有路线卡在哪里？

按同输入、同目标、同监督做有源对照。声音事件定位与检测统一了检测与定位，给出时间边界、类别与空间位置的联合表示，并扩展到多声源、运动声源与视听融合，但原文指出其多在仿真集或单房间录音上验证，复杂多房间仍少见。这说明只做单步定位不够，还要能在房间尺度连续行走中维持估计。

音频视觉导航与语义音频视觉导航是直接前身。前者用视听线索找任意位置声源，后者把短时声音 grounding 到视觉物体。原文梳理其 3 个历史局限：目标全程发声、目标位置任意缺乏视觉实体、依赖预计算房间脉冲响应而被锁在离散网格。语义导航解决了前两个，但第 3 个仍在。后续有多目标、运动声源、语言指令与大模型等扩展，但连续语义导航在 SoundSpaces 2.0 已支持连续渲染的条件下仍未被探索，难点在于双耳渲染计算贵导致仿真慢、训练流程复杂。

连续视觉语言导航是另一条参照。它取消导航图，用低层动作跟随语言指令，要求无全局拓扑与完美定位，因而绝对性能远低于离散版本，研究集中在航点预测与防碰撞。本文任务不同在于没有语言指令，目标信息只能从部分视听观测中推断，且声音停止后仍要推理。类别差异不能当成同条件胜负，只能说明记忆与自运动建模是本文特有的补位。

### 任务如何形式化，难在哪两个变量上？

形式化上每个回合由场景、智能体初始位姿、目标位置与语义类别、目标声音起始与持续时长决定；有干扰时还指定干扰源位置类别，且与目标共享相同时间边界。目标类别沿用 21 类，干扰候选是 102 种周期声且与目标类别不重叠，训练验证测试用不相交场景与未听过声音，要求泛化到未见环境与未闻声音。

难的第一个变量是动作比，即到达目标所需 oracle 动作数与发声期内可用动作数之比。比值越大，意味着更多动作必须在无声下执行。难的第二个变量是测地距离，距离越大，衰减与复杂布局越容易破坏估计。原文后文用累积成功率随这两个变量的变化来诊断，成功集中在发声更长、距离更近的回合。

教学例子：只为理解时间结构，假设目标在第 5 秒响、持续 10 秒，而最短路需 80 步，每步 0.25 秒对应 20 秒行走，那么后半程必然静音跟随。这只是例子，不代表论文的采样值，真实采样按均匀与高斯分布生成，细节见实验条件表。

### MAGNet 用哪三块解决静音后跟丢？

论文提出记忆增强目标描述符网络模型，简称 MAGNet，白话是带记忆的目标推理加导航策略。总体安排是三块串联。第一块多模态观测编码器把当前 RGB-D、前动作、位姿、双耳音频变成紧凑嵌入并写入长期场景记忆。第二块记忆增强目标描述符网络融合听觉线索、自运动线索与情景记忆，输出空间语义目标表示，即使声音完全停止也保持时间一致。第三块上下文感知策略网络对场景记忆做注意力，预测下一步动作。

沿一个样本走一遍：智能体在客厅随机朝向启动，第一视角未知、类别未知、方位距离未知；探索至椅子开始吱呀作响并伴随电话铃干扰；模型从多模态线索推断椅子在右前方远处并向其移动避障；声音在接近时停止，模型用历史目标表示加当前动作位姿继续更新相对位置，最终在椅子附近停止。右侧第一视角序列从未知经椅子在右前方远处到右方近处，直观对应了估计由粗到细。

下图是该流程的完整示意，黄色蓝线区分发声与静音，中间小图同步了波形、动作、位姿与类别方位距离曲线。

> **看图路径：** 1. 先沿 1 至 5 编号箭头走完探索、发声、接近、静音到达全程；2. 再看中间小图的目标声、干扰声、动作与位姿四条时间轴；3. 最后对照右侧五时刻第一视角与类别方位距离文字标签

[![原论文 Figure 2：Overview of the proposed SAVN-CE framework.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/4aeba0bf490d/figure-2.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/4aeba0bf490d/figure-2.png)

*论文图 2。原论文 Figure 2：“Overview of the proposed SAVN-CE framework.”。*

解释该图时注意时间范围覆盖 1 至 5 全程，不是单帧快照。左侧俯视图给出空间路径，中间曲线给出估计演化，右侧给出每时刻视觉与符号化判读。三者共同说明核心主张：静音后不靠新音频，而是靠历史加运动外推维持跟踪。

### 观测、目标记忆与策略各自算什么？

观测编码器先分模态处理。视觉用两个独立 ResNet-18 处理彩色与深度并拼接；动作用嵌入层映射上一动作；位姿先归一化为相对起点平移朝向与时间再经全连接；音频先把双耳波形经 512 点傅里叶变换、160 跳长的短时傅里叶变换变成复谱，再构造 4 个互补通道：平均幅度谱、耳间相位差正弦余弦、耳间强度差，然后经 3 层卷积加全连接得到音频嵌入。拼接后构成观测表示并按式 1 保留最近 Ns 步进场景记忆。

**情景记忆 × 自运动线索：** 情景记忆负责保存过去多步融合后的目标相关嵌入以维持时间连续性，自运动线索负责用上一动作与当前位姿说明智能体移动如何改变目标相对方位与距离；搭配理由是无声时仅靠当前双耳音频无法更新估计，必须用历史估计加运动变换外推，组合后新增了静音期仍能连贯跟踪目标的能力。

目标描述符网络是关键。输入是当前双耳音频、上一动作与当前位姿，音频分支用更高维嵌入以保留空间语义，三者经多层感知机融合成统一表示并按式 2 追加进容量 Ng 的情景记忆，加位置编码后进 Transformer 编码器。一支经全连接得到当前目标嵌入回写场景记忆，另一支经输出头回归活动耦合直角坐标方向格式的目标描述，用于训练损失与优化。原文明确转向动作改变相对方位 15 度、前进同时影响方位与距离，位姿提供相对起点平移朝向，这些是自运动参与双耳定位的依据。

**场景记忆 × 上下文感知策略网络：** 场景记忆负责存最近多步多模态观测嵌入以保留历史与当前感官信息，上下文感知策略网络负责用编码器汇总该记忆再用解码器生成隐状态并输出动作分布与价值；搭配是因为连续导航是部分可观察长时程决策，单帧不够，组合后新增了基于历史上下文的连贯动作采样。

策略网络用编码器汇总场景记忆得编码表示，解码器结合当前观测嵌入生成隐状态，再分别经行动者与评论家输出动作分布与价值并采样。训练时目标网络用因果注意力防止未来信息泄漏。

**活动耦合直角坐标方向 × 声音事件定位与检测：** 活动耦合直角坐标方向负责把每类声音的激活状态、单位方向向量与归一化距离写成统一回归目标，声音事件定位与检测负责用定位误差、F1、定位召回等联合评价类别与空间估计；搭配是因为导航既要知道是哪类物体在响又要知道在哪个方向多远，组合后新增了可用均方误差直接监督目标描述符网络的训练信号。

下图给出三块的连接与监督形式，左侧是 4 类观测，中间是两类记忆，右侧是策略，右下是方向球监督。

> **看图路径：** 1. 先沿左侧观测经中间编码器到右侧策略网络的主数据流向；2. 再看下方情景记忆经位置编码与多层编码器回写场景记忆的支路；3. 最后确认右下角方向球与距离箭头对应的监督标签形式

[![原论文 Figure 3：Overall architecture of MAGNet.](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/4aeba0bf490d/figure-3.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/4aeba0bf490d/figure-3.png)

*论文图 3。原论文 Figure 3：“Overall architecture of MAGNet. The multimodal observation encoder extracts multimodal features from current sensory inputs and updates the scene memory accordingly.”。*

看图时先确认主路径从观测到场景记忆到策略到环境动作，其次确认下方情景记忆经融合、位置编码、多层编码器后一路上行回写场景记忆、一路向右做输出头回归，右下球坐标同时标出类别、方向向量与距离，说明空间与语义是联合回归而非独立分类加回归。

### 监督从哪来， rollout 与更新如何交替？

训练分两路交替。每次迭代先用当前策略 rollout 150 步收集经验，再同时更新目标描述符网络与策略网络。目标网络是在线有监督，用完整回合构造：把上次未完成回合与新收集回合合并保证时间连续，丢弃短于 30 步的回合以保证回合结束时目标已响过，用 oracle 活动耦合方向距离标签做均方误差损失，Adam 学习率 1e-3。策略网络用分布式近端策略优化，按语义导航 2 阶段范式，用标准 PPO 损失，Adam 学习率 2.5e-4。奖励三项：到达成功加 10，测地距离变化的中间奖励，每步减 0.01 的时间惩罚。

原文未报告的内容要明确指出缺项：中间奖励的具体缩放系数、PPO 裁剪系数与价值损失权重、2 阶段各自步数划分、目标网络与策略网络更新频率比，均未在所给证据中给出，不能从模型名推定。梯度路径只明确两处：目标分支用因果注意力，策略经行动者评论家到采样动作；目标嵌入回写场景记忆后是否截断梯度未说明，不猜。

仿真侧为保证时间空间连贯，对当前步双耳脉冲响应卷积源声并累加此前所有步残响，而非只用相邻两步，以建模长尾混响。位姿与目标位置归一化用距离尺度 20 米。

下表整理仿真动作观测的原文配置，数字与单位保留原文写法，用于复现前核对接口。

表前说明：该表回答仿真步长、音频采样与动作粒度是否一致，公平比较要求所有基线共享同一动作空间与观测分辨率，指标方向是配置正确性而非性能高低。

| 配置项 | 音频采样 | 仿真步长 | 动作粒度 | 图像观测 |
| --- | --- | --- | --- | --- |
| 原文值 | 16 kHz | 0.25 s | MoveForward 0.25 m | 128×128 pixels |
| 原文值 | 4,000 audio samples per step | 0.25 s simulation step | TurnLeft 15◦ | 90◦field-of-view |
| 原文值 | binaural audio waveforms | 16 kHz audio sampling rate | TurnRight 15◦ | egocentric RGB-D images |

表后解释：采样率与步长乘积对应每步 4000 采样，保证音频与决策对齐；前进 0.25 米与转向 15 度是细粒度连续导航的执行基础；128 分辨率与 90 度视场是视觉分支输入约束。代价是渲染贵导致训练慢，限制是该表不含性能结论，不能用来判断谁导航更好。

### 数据、划分、基线与指标如何对齐？

数据集由 Matterport3D 上 SoundSpaces 2.0 动态渲染构建，训练验证测试为 0.5M、500、1000 回合，场景与源声不相交。目标声 onset 均匀采自 0 至 5 秒，持续时长高斯均值 15 秒标准差 9 秒，保证时间多样性与声学歧义。测试平均 oracle 动作 78.49，远高于离散设置的 26.52，说明长程占比大。成功判定与回合上限如表所示。

**干净环境 × 干扰环境：** 干净环境负责只让目标发声以检验基本定位与记忆能力，干扰环境负责让 1 个类别不同的干扰源与目标共享相同时间边界同时发声以检验抗混淆能力；搭配是因为真实室内常有多声源重叠，组合后新增了用干扰成功率诊断智能体是否跟错声源的评价维度。

基线覆盖可运行策略与 oracle 上界。随机按训练动作分布采样；ObjectGoal 给真值类别但无完美停止；AV-Nav 用门控循环单元编码历史；SMT 加音频用场景记忆 Transformer 但无显式目标推理。

SAVi 用目标描述符网络独立推位置类别再按权重聚合；Oracle1 仅发声期有真值标签，Oracle2 全程有真值标签，用于量化声音缺失的代价。所有学习方法最多训 240M 步，验证集无提升 24M 步早停，选验证集 SPL 最高点测 1000 回合取 5 次平均。

指标方向：成功率、路径加权成功率、动作数加权成功、静音成功率越高越好；终点测地距离越低越好；干扰成功率是诊断指标，越低说明越少跟错干扰源。

下表整理数据集构造与成功判定的原文口径，核对划分、采样、聚合与单位。

表前说明：该表回答测试难度与判定是否可比，公平条件是同一场景划分与未闻声音，指标方向是回合计数与距离，成功只认目标声源 1 米内停止。

| 构造项 | 采样分布 | 划分规模 | 成功判定 | 任务难度 |
| --- | --- | --- | --- | --- |
| 原文值 | [0, 5] s | 0.5M/500/1,000 episodes for train/val/test | within 1 m of the target sound source | 78.49 |
| 原文值 | mean of 15 s | 0.5M/500/1,000 episodes for train/val/test | at most 500 actions | 26.52 in the discrete setting |
| 原文值 | standard deviation of 9 s | disjoint sets of scenes and source sounds | Stop action within 1 m | oracle actions is 78.49 |

表后解释：onset 与持续分布制造短窗与长静音，划分不相交要求泛化，500 步上限与 1 米阈值是成功硬约束，78.49 对 26.52 显示连续任务显著更长。未胜出项是该表本身不含方法排名，干扰源位置类别与时间边界共享的细节需结合干扰环境定义理解，未评测边界是多目标与动态目标留作未来工作。

### 主结果测什么，谁在什么条件下赢了多少？

主结果测两类环境下的导航效率与静音到达能力。与谁比：随机、ObjectGoal、AV-Nav、SMT 加音频、SAVi，以及 Oracle1 与 Oracle2 上界。条件一致性：同一 SAVN-CE 数据集、同一动作观测接口、同一 500 步上限与 1 米判定，按验证集最优 SPL 选点。

论文直接报告：MAGNet 显著优于已有方法，最高绝对成功率提升 12.1 个百分点；在干净环境下全面领先，干扰环境下因干扰声增益收窄；Oracle2 大幅高于 Oracle1，说明声音持续时长是瓶颈；MAGNet 在静音成功率与路径效率上突出，但与 Oracle 仍有差距。有限解释是记忆增强与多模态融合支持了静音后估计维持；未验证推测是具体每回合误跟率与延迟改善，因原文未测延迟不能承诺。

下图显示累积成功率随动作比与测地距离的变化，实线干净、虚线干扰。

> **看图路径：** 1. 先区分实线干净环境与虚线干扰环境的整体高低；2. 再看红色本方法曲线相对蓝橙绿基线的上移幅度；3. 最后观察横轴增大后曲线趋平所对应的长时无声与远距离区间

[![原论文 Figure 5：Impact of (a) action ratio and (b) geodesic distance on the cumulative success rates of different…](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/4aeba0bf490d/figure-5.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/4aeba0bf490d/figure-5.png)

*论文图 5。原论文 Figure 5：“Impact of (a) action ratio and (b) geodesic distance on the cumulative success rates of different methods under Clean En- vironments (solid) and Distracted Environments (dashed).”。*

该图横轴左为动作比、右为测地距离米数，纵轴为累积成功率。可见横轴增大后各曲线趋平，说明成功集中在发声更长、距离更近区间；红色本方法在两子图均位于最上，虚线整体低于实线，说明干扰一致性拉低所有方法。像素不能精确读出的中间刻度值不硬写，只做趋势判断。

下表只用全文连续原句逐字覆盖的数字整理总体增益、任务难度、监督与奖励口径，不逐格复述原宽表，避免为凑宽度编造基线数字。

表前说明：该表回答最强证据是什么、在多大任务难度下取得，公平条件是同一连续渲染与同一奖励优化目标，指标方向是成功率越高越好、奖励鼓励高效到达。

| 报告项 | 总体增益 | 任务难度 | 监督学习率 | 奖励配置 |
| --- | --- | --- | --- | --- |
| 原文值 | 12.1% absolute improvement in success rate | 78.49 | 1 × 10−3 | +10 for reaching the goal |
| 原文值 | significantly outperforms state-of-the-art methods | 26.52 in the discrete setting | 2.5 × 10−4 | -0.01 per step |
| 原文值 | up to a 12.1% absolute improvement | oracle actions is 78.49 | MSE loss and the Adam optimizer | change in geodesic distance to the goal |

表后解释：12.1 个百分点是论文直接报告的最强总体增益，注意是百分点而非相对百分比；78.49 对 26.52 说明连续任务更长因而静音段更常见；两种学习率与三项奖励分别对应目标回归与策略优化。代价与反例是干扰下增益收窄且干扰成功率最高，说明声学相似干扰仍易误导；Oracle 对比显示静音后估计仍有提升空间，不能把总体趋势推广到每组每步都成立。

### 记忆与自运动各自贡献了什么，反证是什么？

消融按四配置比较：无目标描述符网络、仅目标网络无记忆、目标网络无自运动线索、完整记忆增强。测导航指标与定位检测指标两组。论文报告趋势：去掉目标网络导航明显下降但仍高于基线，说明其余模块已能捕获有效特征；单独加入情景记忆或自运动各自提升导航与定位检测，说明时间上下文与空间推理分工互补；两者结合进一步提升，且定位检测提升一致转化为导航提升。

目标网络评价用 20 度容差误差率与 F1，以及正确检测条件下的定位误差、定位召回与相对距离误差，类别上宏平均。报告显示干扰下定位检测下降，目标停止后两方法都下降但本方法仍具竞争力；原文特别提示极低 F1 伴随的低定位误差不具信息量，避免误读。

训练与记忆容量的原文口径如下表，用于复现消融时保持 rollout 与早停一致。

表前说明：该表回答消融的训练预算与记忆容量是否固定，公平条件是同一 rollout 步数与同一早停 patience，指标方向是复现一致性而非单项高低。

| 训练项 | 单次 rollout | 短回合过滤 | 记忆容量 | 训练预算 |
| --- | --- | --- | --- | --- |
| 原文值 | 150-step rollout | 30 steps | Ns = 150 | 240M steps |
| 原文值 | 150-step rollout with the current policy network | shorter than 30 steps are discarded | Ng = 128 | 24M consecutive steps |
| 原文值 | updates to both the GDN and the policy network | guarantee that the goal has emitted sound | Ns = 150 and Ng = 128 | 14 days on 128 CPU threads and 4 NVIDIA A800 GPUs |

表后解释：150 步 rollout 后双网更新保证经验复用，丢弃短回合保证监督见过发声，150 与 128 的容量界定历史长度，240M 与 24M 界定预算与早停，14 天 4 卡显示双耳渲染主导成本。未胜出项是无记忆配置在部分指标上接近有记忆，说明短距有声回合对记忆依赖小；未评测边界是更长记忆与在线适应的开销，原文未给推理帧率与延迟，不承诺实时性。

### 哪些结论有边界，什么不能承诺？

边界一是干扰环境。所有方法性能均下降，即使提供真值类别仍难精确定位，MAGNet 增益温和且干扰成功率最高，说明记忆增强能维持估计但不能可靠区分声学相似干扰源。相关性不等于因果，不能把干扰成功率高直接归因于记忆本身，还需控制干扰与目标的频谱重叠与空间夹角，而原文未分解该因素。

边界二是静音期定位检测。发声与静音 2 阶段指标均显示停止后下降，本方法相对保持但绝对值仍低，与 Oracle2 差距拉大，说明长静音外推仍有 room。原文用报告显示干扰增加难度，用支持表达记忆与自运动互补，用可能待验证留给多动态目标扩展，不把趋势当成每步成立。

不能承诺的是误判率、延迟与部署成本。原文未测量每步推理耗时、输出帧率与实际延迟，训练资源与推理开销需分别讨论。总体 14 天训练成本不等于推理成本，不能从训练贵推定推理慢，也不能从冻结参数推定输出确定。

### 复现先做什么，代码与权重如何区分？

先按接口对齐：16 kHz、0.25 秒步长、每步 4000 采样、前进 0.25 米转向 15 度、128 分辨率 90 度视场、位姿相对起点归一化、距离尺度 20 米。仿真必须累加历史残响而非仅用相邻两步，否则长尾混响建模不一致。数据按 0.5M、500、1000 与不相交场景未闻声音划分，onset 均匀 0 至 5 秒、持续高斯均值 15 秒标准差 9 秒，回合上限 500 步、1 米内停止。

再按训练对齐：150 步 rollout、短于 30 步丢弃、场景记忆 150、情景记忆 128、目标回归均方误差学习率 1e-3、策略 PPO 学习率 2.5e-4、成功加 10 加测地变化奖励减每步 0.01、最多 240M 步、验证无提升 24M 早停、验证 SPL 选点、测试 1000 回合 5 次平均。资源状态是正文开源声明的唯一依据，本次资源状态为可用，状态码 200，链接为 <https://github.com/yichenzeng24/SAVN-CE>，可写当前可用已公开；这代表代码可用，不等于权重下载与开箱可运行，运行还需 Habitat 与 SoundSpaces 2.0 及 Matterport3D 授权与音频渲染环境，需补验证推理延迟与多干扰鲁棒性。

常见误解是把 Oracle2 当成可部署收益。Oracle 全程有真值标签，只是上界，用于说明声音缺失的代价，不能代替实际策略。另一误解是把知道类别等同于能导航，ObjectGoal 仅小幅提升证明无音频仍不够。

### 何时值得尝试，还需补哪项验证？

当任务同时满足三点值得尝试：目标有视觉语义落点、声音短时断续且可能提前停止、智能体可用细粒度动作连续行走并能获得相对位姿。此时用情景记忆维持时间连续、用自运动外推方位距离、用场景记忆做上下文策略，比单帧音频回归更对症。短窗长距场景是本文显示增益最大的区间。

当环境存在强相似周期干扰、混响极重或需多动态目标时要谨慎，本文干扰下增益收窄且跟错率未降，未来工作才计划扩展多动态目标。复现后建议补两项验证：一是按动作比与测地距离分桶报告成功率与静音成功率，确认增益是否集中在长静音远距离；二是测干扰与目标频谱重叠度与空间夹角对干扰成功率的影响，并实测推理延迟与帧率，再谈部署。

收束：连续性把导航变难也把记忆变必要，MAGNet 的选择是用历史加运动弥补声音缺失，直接证据是最高 12.1 个百分点提升与长距短窗鲁棒性，主要代价是高训练成本与干扰下区分不足。

## 📐 原文公式与排版

以下展示论文原页中的数学表达区域，保留原始上下标、分式和符号排版。区域序号仅用于本文导航，不是论文公式编号。

[![原文数学表达区域 1，PDF 第 5 页](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8a9b42695bee/figure-1.png)](https://raw.githubusercontent.com/nanless/audio-paper-digest-images/main/cvpr-2026/8a9b42695bee/figure-1.png)

区域 1 · [查看论文原页](https://openaccess.thecvf.com/content/CVPR2026/papers/Zeng_Semantic_Audio-Visual_Navigation_in_Continuous_Environments_CVPR_2026_paper.pdf#page=5)

另有 20 个候选区域因边界不明确或图片数量、尺寸限制未展开；请[查看完整论文](https://openaccess.thecvf.com/content/CVPR2026/papers/Zeng_Semantic_Audio-Visual_Navigation_in_Continuous_Environments_CVPR_2026_paper.pdf)中的原始排版。

## ⚖️ 评分明细

评分属于系统判断，不是论文实验结果；八维数值与总分见页首，原始审计记录保留在后端。
- 评分规则：type-aware-v1
- 评分模型：muse-spark-1.3-contributor
- 评分请求协议：openai_responses

---

[← 返回 cvpr-2026 论文汇总](/posts/conference-cvpr-2026/)
