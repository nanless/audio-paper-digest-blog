---
title: "The ISCSLP 2026 Real-World Audio-Visual Speech Enhancement Challenge"
date: 2026-08-26
draft: false
tags: [音视频语音分离, 基准测试, 鲁棒性, 数据集, 开源工具]
categories: [论文速递]
description: "音视频语音分离 | 8.8/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.23759"
paper_digest_manual_depth: "full-text-evidence-v5"
---

# 📄 The ISCSLP 2026 Real-World Audio-Visual Speech Enhancement Challenge

标签：#音视频语音分离 #基准测试 #鲁棒性 #数据集 #开源工具

**8.8/10** | 创新 1.4/2 | 严谨 1.3/1.5 | 实验 1.3/1.5 | 清晰 0.9/1 | 影响 1.2/1.5 | 开源 1.5/1.5 | 复现 0.5/0.5 | 工程 0.7/1.5

🔥 **8.8/10** | 前25% | 文档类型：数据集与基准 | 评分置信度：高 | #音视频语音分离 | #基准测试 | #鲁棒性 #数据集 | [arxiv](https://arxiv.org/abs/2608.23759)


### 👥 作者与机构

第一作者：Kai Li（Tsinghua University）
通讯作者：正文仅以星号标注核心贡献者，未明确通讯作者
作者列表：Kai Li、Wenze Ren、Junjie Li、Cheng Yu、Peijun Yang、Chien-yu Huang、Haibin Wu、Szu-Wei Fu、Wen-Chin Huang、Hsin-Min Wang、Xiaolin Hu、Ming Li、DeLiang Wang、Yu Tsao（机构：Tsinghua University、National Taiwan University、The Hong Kong Polytechnic University、Ohio State University、Wuhan University、Carnegie Mellon University、Meta、NVIDIA、Nagoya University、Academia Sinica、The Chinese University of Hong Kong, Shenzhen）

### 📌 核心摘要

这篇论文的可证伪判断是：只有把 mix、remix 与失真视频放在同一协议里，研究者才看得见系统在哪种证据条件下失效。挑战的输出始终是被目标视频指认的 1 路波形，而不是无条件地把所有说话人都分离出来。它把 AVSE 从“合成混音上的分离分数”改写为彼此制约的实验问题：自然录制是否仍可工作、干净参考下波形是否保真、视频变坏时目标条件是否还可信。

Track 1 用自然同录的 mix 保留重叠、房间与采集链，同时用有干净目标的 remix 提供信号级参照；Track 2 把低质、遮挡、冻结、不同步、黑屏和远场置入目标视频条件。开发与测试说话人互斥，堵住了直接记忆身份的捷径，其适用域限定在 14 名中文说话人的语料内。

官方 AV-ConvTasNet 的角色也应读准：它是可复跑的起点而非挑战的结论。Table 5 在各自赛道检查点内显示 mix 的 DNS-OVRL 更高、CER 更低；Track 2 的 CER 仅呈轻微变化。这正是实验解读应回到条件而非追逐单分数的理由：指标必须结合场景解读，跨赛道数值无法单独估计视频退化效应。

### 🏗️ 方法概述和架构

先把对象画清楚。给定混合波形 \(x(t)\) 和目标人的视频流 \(v_k(\tau)\)，系统输出 \(\hat{s}_k(t)=f_\theta(x(t),v_k(\tau))\)。remix 保留组织方的目标波形，因而可以问“波形是否接近参考”；mix 缺少这条参考，只能问预测质量、转写内容和说话人身份是否仍合理。双场景承担互补测试，为同一输出建立不同强度的证据。

数据构造把这层张力落到录制方式上。7 组双人中，3 组进入 Dev、4 组进入 Test，且说话人不交叠；每段双人片段为每个目标人各产生 1 个 item。mix 让 2 人现场同时说话，保留共同录制的声学与互动；remix 从分录单人片段按 -5 dB 到 5 dB 的 SNR 相加，把目标源留作参考。

Track 2 的价值不在于另起 1 份含混的测试集，而在于共享片段把音频固定、把目标视频条件显式化。低质、口部遮挡、冻结、音画错位和黑屏都作用在目标视频上；约 3 m 远场则来自额外录制。前 5 类离线条件适合作为共享音频下的视频可靠性压力测试；远场条件则应单独报告。

阅读下图 Figure 1 时，请核对每个 visual frames 面板与下方 audio 波形：哪些条件只替换目标视频，远场又为何不能并入这条配对链。

[![Official examples of low quality (a), occlusion (b), frame freezing (c), audio-video desynchronization (d), blackout (e), and far-field recording (f). Desynchronization changes timing and is not visible in a single frame.](https://arxiv.org/html/2608.23759v1/visual_degradation.png)](https://arxiv.org/html/2608.23759v1/visual_degradation.png)

图的 (a) 至 (e) 分别把噪声或模糊、口部遮挡、冻结帧、带蓝色 Δt 箭头的不同步和连续黑帧放在同样的音频波形上；(f) 的小尺寸人脸来自远场录制。因而这张图能说明 Track 2 怎样构造视觉可靠性压力，却不能把远场里的声学距离效应归给任一视觉扰动。


官方 AV-ConvTasNet 提供可替换的实现路径。波形先经学习编码进入时域卷积分离器，目标成分在瓶颈域被估计后再由解码器还原。冻结的 ResNet-34 唇读编码器输出 512 维视觉特征；它与音频瓶颈对齐后，在 F=256 的融合维度拼接。

融合后的表示先让视觉支路提供目标人嘴部运动的条件线索，再与音频瓶颈放到同一时间轴；分离器据此从混合表示中估计目标成分，解码器才恢复最终波形。视频帮助识别目标，声学内容仍由混合波形承载；遮挡、冻结或不同步因而检验条件分支的可靠性。基线是非因果结构，正好匹配离线挑战，参赛方法可替换该基线。

训练与测试分布也要分开看。Track 1 用 VoxCeleb2 单人源动态合成 remix，Track 2 再在线注入视觉扰动，因此 2 条赛道各有独立检查点。训练目标是置换不变 SI-SDR/SNR，采用 Adam 和随验证表现调整的学习率；这给出了可重复起点，却不模拟自然共同录制的全部形成过程。

评测最后按“有没有参考”分流：remix 用 SI-SDR、PESQ、STOI，2 个场景都报告 UTMOSv2、DNSMOS、CER 和 SPK-SIM。OVRL 平均的是队内指标名次：CER 按升序，其余纳入项按降序，DNS-OVRL 才进入平均。因此它适合作为同届提交的汇总，其解释范围限于当前参赛队集合。

### 💡 核心创新点

1. 首项贡献是把“现实性”和“可核验性”分工，而非强行压成 1 个场景。以往分录相加方便算信号指标，却遗漏共同录制里的重叠、房间和采集链；这里的 mix 留住这些条件，remix 留住干净目标。Table 5 的 DNS-OVRL 与 CER 只说明不同场景会给出不同证据，不能让自然 mix 反过来获得波形级真值。

2. 另一项贡献是让视频失效成为协议变量。Figure 1 对应的低质、遮挡、冻结、不同步和黑屏都在共享片段上改变目标视频，因而可以检验模型是否过分依赖看似可靠的唇动线索。远场是额外真实录制而非离线视频变换；把它和前述条件合并报分，会失去“究竟是何种视觉故障造成变化”的解释力。

3. 随后贡献是把输出质量拆为互不替代的观察面。SI-SDR、PESQ、STOI 需要 remix 的干净源；UTMOSv2、DNSMOS、CER、SPK-SIM 让 mix 也能被诊断。该组合能暴露听感预测、内容可懂度和身份保持的冲突，但 OVRL 只是这些指标在参赛队中的名次平均，不能替代绝对指标表。

4. 最后的贡献在协议公平性而不在新网络。说话人隔离和外部资源申报降低了把目标身份记进训练集的风险，公开基线则把接入点给到参赛者。语料仅覆盖 14 名中文说话人，因而这些设计支持的是受控语料内的比较，不是对开放域 AVSE 的预先背书。

### 📊 实验结果

先回答最窄的问题：有干净目标时，官方基线在各赛道和 split 的波形恢复处于什么工作点？下表保留 SI-SDR、PESQ、STOI，不把这些不同量纲压成伪总分；所有指标均为越高越好。

| 设置 | 条件 | 方法与对照 | 指标 ↑ | 指标值 | 单位 | 优化方向 | 补充指标 |
|---|---|---|---|---:|---|---|---|
| Track 1 remix | Dev | AV-ConvTasNet；同一基线的 Test | SI-SDR ↑ | -4.0691 | dB | 越高越好 | PESQ 1.1470；STOI 0.3882 |
| Track 1 remix | Test | AV-ConvTasNet；同一基线的 Dev | SI-SDR ↑ | -5.9252 | dB | 越高越好 | PESQ 1.1373；STOI 0.3036 |
| Track 2 remix | Dev | AV-ConvTasNet；同一基线的 Test | STOI ↑ | 0.4697 | score | 越高越好 | SI-SDR -2.8507 dB；PESQ 1.2556 |
| Track 2 remix | Test | AV-ConvTasNet；同一基线的 Dev | STOI ↑ | 0.5021 | score | 越高越好 | SI-SDR -1.6892 dB；PESQ 1.3036 |

Track 1 从 Dev 到 Test 的 SI-SDR 由 -4.0691 dB 降为 -5.9252 dB，STOI 由 0.3882 降为 0.3036；Test 在这些指标上更差，是协议切分留下的负面证据。Track 2 的干净参考指标则朝相反方向变化。这个交叉并没有比较出哪个赛道更稳健，因为检查点和样本集合同时不同；它只说明基线的工作点对协议条件敏感。

自然 mix 没有干净波形，因而转而询问：在各自赛道的同一检查点内，场景改变后无参考质量、转写和身份指标怎样共同变化？Table 4 的 split 平均和 Table 5 的场景平均不能混用，后者才允许把同一赛道的 mix 与 remix 成对阅读。

| 范围 | 条件 | 方法与对照 | 指标 | 指标值 | 单位 | 优化方向 | 评测口径 |
|---|---|---|---|---:|---|---|---|
| Track 1 mix+remix | Test | AV-ConvTasNet；同一基线的 Dev 0.7726 | CER ↓ | 1.0254 | score | 越低越好 | Table 4 split 平均 |
| Track 2 mix+remix | Test | AV-ConvTasNet；同一基线的 Dev 0.3704 | SPK-SIM ↑ | 0.3957 | score | 越高越好 | Table 4 split 平均 |
| Track 1 scene mix | Dev+Test | AV-ConvTasNet；同一检查点的 remix 1.4986 | DNS-OVRL ↑ | 1.6723 | score | 越高越好 | Table 5 scene 平均 |
| Track 1 scene mix | Dev+Test | AV-ConvTasNet；同一检查点的 remix 0.8252 | CER ↓ | 0.7345 | score | 越低越好 | Table 5 scene 平均 |
| Track 2 scene mix | Dev+Test | AV-ConvTasNet；同一检查点的 remix 1.3220 | DNS-OVRL ↑ | 1.4492 | score | 越高越好 | Table 5 scene 平均 |
| Track 2 scene mix | Dev+Test | AV-ConvTasNet；同一检查点的 remix 0.8776 | CER ↓ | 0.8657 | score | 越低越好 | Table 5 scene 平均 |

Table 5 的证据很具体：Track 1 的 mix 对 remix 为 DNS-OVRL 1.6723 对 1.4986、CER 0.7345 对 0.8252；Track 2 为 1.4492 对 1.3220、0.8657 对 0.8776。前者说明这 2 个指标在该场景平均中同向，后者尤其接近不变；UTMOS 和 SPK-SIM 仍可能给出别的排序。于是最稳妥的结论是“多指标揭示不同工作面”，不是“mix 全面更容易”。

排行榜再补充排名口径：CER 采用升序名次，DNS-OVRL 与其余纳入项采用降序名次，再将各项名次求平均。DNS-P808、DNS-SIG、DNS-BAK 只展示。没有同检查点的 clean-video、audio-only 与 no-processing 对照，视觉贡献仍不可被单独识别。本篇是基准协议，未给出组件消融，故不存在可以归因于单个模块的增益。OVRL 也会随参赛队集合变化，故应与绝对指标和受控对照一起报告。

### 🔬 细节详述

先按数据边界复跑。Track 1 的 Dev 包含 1,242 个 mix clip、900 个 remix clip 和 4,284 个 target item；Test 对应 2,472、1,785 和 8,514。Track 2 在共享片段的视频退化外加入远场材料，Dev 和 Test 分别为 5,250、9,882 个 target item。输入音频固定为 16 kHz 单声道，视频为 256 × 256、25 fps，官方可选提供关键点。

视频前端直接解码并取归一化 88 × 88 唇区。低质对连续视频段加高斯噪声或模糊，遮挡覆盖面部关键点附近，冻结重复帧，不同步平移视频时序，黑屏置换连续帧。远场来自约 3 m 的现场采集，复跑时必须从共享片段的离线失真中单列，否则结果没有可解释的干预单位。

基线的音频编码器为 256 个长度 40 采样点的滤波器；瓶颈和跳连通道为 256，卷积通道为 512，核大小为 3，结构含每次 8 个 block、共 4 次 repeat。视觉前端是冻结 ResNet-34 加 3D 卷积，输出 512 维特征，融合维度 F=256。非因果分离器适合离线评测，不能被读作实时部署方案。

训练使用 PyTorch Lightning 和分布式数据并行，目标是置换不变 SI-SDR/SNR，Adam 的学习率为 10^-3，并用 ReduceLROnPlateau 调整。批大小、epoch、随机种子和硬件未说明。论文把已有频谱掩码、时域分离、跨模态一致性与先分离后匹配路线压缩为背景，挑战本身不限定参赛架构。

真正可操作的复现接口在公开仓库：分赛道配置、检查点、数据读取器、多 GPU 分片推理与离线增强或评分入口均已给出。提交为每个 target item 产出 1 路 16 kHz 单声道估计，并申报外部数据、预训练和推理处理。离线评估链整合 UTMOSv2、DNSMOS、Fun-ASR 与 WeSpeaker，具体版本应以公开仓库配置为准。

组织方仍保留 Test 转写、干净 remix 目标、manifest 和注册声纹，因此外部团队无法独立重算正式 Test。提交打包目录可能随赛程调整，最终布局以实时 submission page 为准。论文也没有给出延迟、吞吐、显存、置信区间、人类听测或逐失真类型的官方基线，复现结果应把这些缺口与分数一起报告。

### 🚨 局限与问题

数据只含 14 名中文说话人，说话人不交叠只能证明该语料内部的留出说话人泛化。Table 5 中 2 条赛道的 mix 虽均为更高 DNS-OVRL 和更低 CER，但 Track 2 的 CER 差异很小，且其他指标未给出统一排序。多数 Track 2 失真是离线构造，远场子集还同时改变声学和视觉条件；mix 没有干净目标波形，质量依赖学习型预测器而非主观听测；OVRL 会随参赛队集合变化。

### 进一步审视

论文证据直接支持的边界是，14 名中文说话人的说话人隔离只能证明语料内部的留出泛化，不能替代开放域部署证据。mix 没有干净目标，UTMOS 与 DNSMOS 是学习型预测器而非人类听感；允许外部开源资源时，榜单差异还可能来自数据规模而非算法。

Track 2 还应按同一检查点、共享音频和每类失真分层，远场样本另报；否则模型参数和样本构成会混入视频条件。Table 5 中 mix 的 DNS-OVRL 和 CER 方向一致也不足以消除这一问题，尤其 Track 2 的 CER 只发生很小变化。

下一步应在共享音频上逐类报告干净与退化视频，并把远场单列；再增加 audio-only、未处理控制、主观听测和置信区间。这样才能区分“视频条件真的带来增益”“模型只是适应了检查点或数据构成”以及“质量预测器与人耳不一致”这 3 种可能。

### 🔗 开源与复现资源

入口是挑战网站 https://real-world-avse.github.io/ 和 Baseline 仓库 https://github.com/Real-World-AVSE/Baseline。公开交付包括 AV-ConvTasNet、Track 1 与 Track 2 检查点、配置、数据读取、多 GPU 离线推理、统一评估器以及 Dev/Test 的官方基线结果；这足以让研究者从 Dev 开始复跑完整指标链。

开放并非等于可独立复核全部榜单。Test 的转写、干净 remix 源、manifest 和注册声纹由组织方保留，正式 Test 只能走组织方侧评测。数据下载和提交格式应以挑战页的实时说明为准，因此公开仓库是稳固的研究起点，最终排行榜仍需要组织方参与复核。

### 💡 研究者判断

别把这篇挑战稿误读成 AV-ConvTasNet 成绩单。它真正把人逼到墙角的问题是：没有干净目标的自然重叠，究竟该拿什么证明系统还在服务目标说话人；而视频一旦冻结、遮挡或错位，模型靠什么不被错误条件带偏。Track 2 很诚实地把这些麻烦端上来，却又把独立检查点和远场样本一起端上来。最值得做的后续工作不是庆祝跨赛道分差，而是在同一音频、同一检查点下把每类视频故障逐个拆开。

<details>
<summary>⚖️ 评分理由（展开查看）</summary>

* 创新性 (1.4/2)：自然同录 mix、带干净参考的 remix 与目标视频退化被置于同一挑战协议，确实补足了只用合成混音和可靠视频的评测缺口；但任务定义、AV-ConvTasNet 基线和多数扰动构件并非新的方法发明，因此创新性维持 1.4/2。

* 技术严谨性 (1.3/1.5)：输入输出、说话人互斥切分、参考可得性对应的指标分流和 OVRL 名次平均均有明确规定，且作者直接说明 Track 2 同时改变视频、检查点和样本构成；协议层严谨性可达 1.3/1.5，但不把未做的视觉因果对照误算为额外严谨性。

* 实验充分性 (1.3/1.5)：官方基线覆盖 Dev/Test、mix/remix、2 条赛道以及多类参考与无参考指标，且报告了按场景聚合的 Table 5；不过没有同检查点的 clean-video/坏视频、audio-only 或 no-processing 对照，无法量化视觉条件的独立贡献，故为 1.3/1.5 而非满分。

* 清晰度 (0.9/1)：论文从任务与数据协议依次写到基线、各指标结果、可复现入口和限制；指标的适用范围与方向、跨赛道不可归因和相对排名的含义均被明说，因而清晰度为 0.9/1。

* 影响力 (1.2/1.5)：把自然重叠、视觉失效、目标身份和多维评测放进可运行挑战，对稳健音视频分离具有直接公共研究价值；但语料仅有 14 名中文说话人，且排行榜受外部资源与参赛集合影响，影响力校准为 1.2/1.5。

* 开源 (1.5/1.5)：论文明确发布挑战网站与 Baseline 仓库，以及 2 条赛道检查点、离线评估器和 Dev/Test 官方基线结果；这些可直接取得的研究资产支持完整开源档位 1.5/1.5，组织方保留 Test 参考不改变已发布资产的事实。

* 可复现性 (0.5/0.5)：从 16 kHz 音视频格式、唇区输入、网络配置、训练目标和优化器，到分赛道配置、检查点、数据读取与离线入口均给出，足以重跑公开基线；Test 转写、干净目标、manifest 和声纹仍由组织方掌握，因此可复现性止于 0.5/0.5 的上限而非可独立复核正式榜单。

* 工程/实践价值 (0.7/1.5)：仓库的多 GPU 分片推理和统一离线增强/评分入口有实际接入价值；但官方模型非因果，且全文没有延迟、吞吐、显存、硬件或真实部署测量，工程分只给 0.7/1.5，并满足未报告部署测量时不得超过 1.0 的上限。

</details>

---

[← 返回 2026-08-26 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-26/)
