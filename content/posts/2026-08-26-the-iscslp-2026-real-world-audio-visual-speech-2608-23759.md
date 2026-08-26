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

音视频语音增强（AVSE）常在分开录制的语音上合成混音，并默认目标人脸视频可靠；这样的协议容易把自然互动、房间响应、录音链和视觉故障排除在评价之外。ISCSLP 2026 Real-World AVSE Challenge 把问题重新界定为：参赛系统接收单声道混合语音与指定说话人的视频，输出该说话人的单路估计波形。它解决的核心不是新增合成混音方案，而是让自然重叠、可控重混与不可靠视觉在同一可复现框架内接受互补评测。

Track 1 同时保留自然同录的 mix 和具有干净目标的 remix，Track 2 则针对目标视频引入显式退化并补充远场录制。开发与测试按说话人隔离，降低系统记住目标身份造成的直接泄漏；但这项设计只检验语料内部的留出说话人，并不自动代表开放语言与设备域。按同一赛道检查点汇总 Dev 与 Test 后，2 条赛道的 mix 都得到更高 DNS-OVRL 和更低 CER；不过 Track 2 的 CER 仅从 remix 的 0.8776 分（score）降到 mix 的 0.8657 分（score），差异很小。

官方 AV-ConvTasNet 在部分 remix 条件下仍得到负 SI-SDR，说明这套基线首先是挑战起点，而不是成熟上限。场景结果仍需与 UTMOS、SPK-SIM 等指标合读，上述 2 项只描述局部指标，不构成 mix 全面更容易的判断；Track 2 又使用单独检查点且含额外远场样本，所以跨赛道差异同时受检查点和样本构成影响。

### 🏗️ 方法概述和架构

任务对象是目标说话人条件下的波形估计。给定单声道混合波形 \(x(t)\) 与目标说话人的视觉流 \(v_k(\tau)\)，系统学习 \(\hat{s}_k(t)=f_\theta(x(t),v_k(\tau))\)。remix 的输出对应组织方保留的单人干净波形；mix 不存在隔离目标，只能借助无参考质量、转写和声纹身份评估。这一差别决定同一系统在 2 类场景中能回答的问题并不相同。

数据协议先把现实性与可控性拆开。语料由 7 组双人组成，开发集使用其中 3 组，测试集使用其余 4 组；每段双人视频对每名说话人各形成 1 个目标 item，且开发与测试说话人不重叠。mix 让 2 名说话人现场同时说话，保留互动、房间响应、环境声和采集链；remix 则把分开录制的单人片段以 -5 dB 到 5 dB 的 SNR 相加，并保留目标源。

Track 2 把视觉可靠性变成显式变量。对与 Track 1 共享的片段，它保持混合音频不变，只改目标视频，扰动覆盖高斯噪声或模糊、口部遮挡、连续帧冻结、音画时移和黑屏；另有约 3 m 条件下现场采集的远场子集。共享片段使未退化与退化视频可以在相同音频上比较，但远场录制会同时改变成像距离和声学输入，不能与前述离线扰动合并成单变量实验。

观察下图时，可沿每个面板的 visual frames 与音频波形追踪 Track 2 究竟改动了哪些输入证据。

[![Official examples of low quality (a), occlusion (b), frame freezing (c), audio-video desynchronization (d), blackout (e), and far-field recording (f). Desynchronization changes timing and is not visible in a single frame.](https://arxiv.org/html/2608.23759v1/visual_degradation.png)](https://arxiv.org/html/2608.23759v1/visual_degradation.png)

图中 6 个面板分别显示噪声或模糊、口部遮挡、连续帧冻结、带蓝色 Δt 箭头的音画错位、黑色帧块与小尺寸远场人脸。前 5 个面板都把共享片段的视觉异常置于相同音频波形之上，而远场面板只是缩小画面示意；因此 Figure 1 清楚区分扰动类型，却无法把远场的声学变化从视觉变化中分离。


官方基线只定义可复现起点，不限制参赛模型。音频支路先把波形编码为学习表示，时域卷积分离器在瓶颈域估计目标成分，解码器再还原单路目标波形。视觉支路采用冻结的 ResNet-34 唇读编码器，经 3D 卷积前端得到 512 维特征，与音频瓶颈时间对齐后按 F=256 的融合维度拼接。分离器使用非因果结构，与离线赛制一致。

训练并不直接复刻挑战录制：Track 1 从 VoxCeleb2 单人语音动态生成双人 remix，Track 2 再在线加入遮挡、低分辨率、冻结、丢帧和音画错位。目标采用置换不变的 SI-SDR/SNR，优化器为 Adam，并按验证表现降低学习率。2 条赛道分别发布检查点，因此比较 Track 1 与 Track 2 时，模型参数本身也是变化因素。

评测器依据参考是否可得进行分流。remix 可计算 SI-SDR、PESQ 与 STOI；mix 和 remix 都计算 UTMOSv2、DNSMOS、Fun-ASR 的 CER 以及 WeSpeaker 的 SPK-SIM。最终 OVRL 对所选指标的队内名次取算术平均，而不是把异构绝对分直接相加。这个设计鼓励多维均衡，却也意味着参赛队集合变化时，同一组绝对预测结果可能得到不同名次。

### 💡 核心创新点

1. 已有 AVSE 基准多依赖分开录音后相加，难以观察自然重叠中的互动、房间响应与采集链。本文以 mix 保存真实共同录制，以 remix 提供干净目标；Table 5 中 2 条赛道的 mix 都同时取得更高 DNS-OVRL 与更低 CER，但 UTMOS 和 SPK-SIM 并不都同向，因此双场景提供互补证据而非统一难度排序。自然 mix 仍因缺少干净波形而无法给出信号级真值。

2. 既有评测常把视频清晰且同步当作默认条件，实际系统却会遇到遮挡、冻结、黑屏和音画漂移。Track 2 将这些故障纳入明确定义的条件，Figure 1 也给出可检查的帧级示意；不过额外远场录制不是单纯视频变换，聚合分数不能估计某种视觉故障的独立影响。

3. 只看单一质量指标会掩盖目标身份、内容可懂度与听感预测之间的冲突。协议将干净参考的 SI-SDR、PESQ、STOI 与无参考的 UTMOSv2、DNSMOS、CER、SPK-SIM 并列，开发和测试结果确实出现方向不一致；多维性提升诊断价值，但 OVRL 仍是对参赛队名次的相对汇总。

4. 现实挑战最容易出现训练和测试说话人重合造成的身份捷径。开发集与测试集采用互斥说话人，并要求申报外部数据和预训练资源，从协议层降低直接目标泄漏；然而语料只有 14 名中文说话人，严谨切分并没有把结论扩展到开放说话人、语言和设备域。

### 📊 实验结果

先看具有干净目标的 remix：比较问题是同一官方 AV-ConvTasNet 在不同 split 与赛道检查点下，波形忠实度和可懂度如何变化。表中保留各赛道的 SI-SDR、PESQ 与 STOI，所有方向均为越高越好。

| 设置 | 条件 | 方法与对照 | 指标 ↑ | 指标值 | 单位 | 优化方向 | 补充指标 |
|---|---|---|---|---:|---|---|---|
| Track 1 remix | Dev | AV-ConvTasNet；同一基线的 Test | SI-SDR ↑ | -4.0691 | dB | 越高越好 | PESQ 1.1470；STOI 0.3882 |
| Track 1 remix | Test | AV-ConvTasNet；同一基线的 Dev | SI-SDR ↑ | -5.9252 | dB | 越高越好 | PESQ 1.1373；STOI 0.3036 |
| Track 2 remix | Dev | AV-ConvTasNet；同一基线的 Test | STOI ↑ | 0.4697 | score | 越高越好 | SI-SDR -2.8507 dB；PESQ 1.2556 |
| Track 2 remix | Test | AV-ConvTasNet；同一基线的 Dev | STOI ↑ | 0.5021 | score | 越高越好 | SI-SDR -1.6892 dB；PESQ 1.3036 |

Track 1 从 Dev 到 Test 的 SI-SDR 由 -4.0691 dB 下降到 -5.9252 dB，STOI 也从 0.3882 降至 0.3036；Track 2 却在 Test 获得更高的干净参考指标。但 2 条赛道使用不同检查点、样本集合也不同，因此反向变化不说明 Track 2 更稳健。

再看无干净波形指标：这里先保留 Table 4 的 split 观察，再用 Table 5 在每条赛道自己的检查点内成对比较 mix 与 remix。每行只绑定 1 个指标，避免把异构量纲拼成总分。

| 范围 | 条件 | 方法与对照 | 指标 | 指标值 | 单位 | 优化方向 | 评测口径 |
|---|---|---|---|---:|---|---|---|
| Track 1 mix+remix | Test | AV-ConvTasNet；同一基线的 Dev 0.7726 | CER ↓ | 1.0254 | score | 越低越好 | Table 4 split 平均 |
| Track 2 mix+remix | Test | AV-ConvTasNet；同一基线的 Dev 0.3704 | SPK-SIM ↑ | 0.3957 | score | 越高越好 | Table 4 split 平均 |
| Track 1 scene mix | Dev+Test | AV-ConvTasNet；同一检查点的 remix 1.4986 | DNS-OVRL ↑ | 1.6723 | score | 越高越好 | Table 5 scene 平均 |
| Track 1 scene mix | Dev+Test | AV-ConvTasNet；同一检查点的 remix 0.8252 | CER ↓ | 0.7345 | score | 越低越好 | Table 5 scene 平均 |
| Track 2 scene mix | Dev+Test | AV-ConvTasNet；同一检查点的 remix 1.3220 | DNS-OVRL ↑ | 1.4492 | score | 越高越好 | Table 5 scene 平均 |
| Track 2 scene mix | Dev+Test | AV-ConvTasNet；同一检查点的 remix 0.8776 | CER ↓ | 0.8657 | score | 越低越好 | Table 5 scene 平均 |

Track 1 的 Test CER 为 1.0254，较 Dev 的 0.7726 更差；Track 2 的 Test SPK-SIM 则由 Dev 的 0.3704 升至 0.3957。场景级上，Track 1 的 mix 相对 remix 是 DNS-OVRL 1.6723 对 1.4986、CER 0.7345 对 0.8252；Track 2 同样是更高 DNS-OVRL（1.4492 对 1.3220）和更低 CER（0.8657 对 0.8776），但后者差异很小，论文称其近乎不变。UTMOS 与 SPK-SIM 仍可能给出不同排序，因此不能据这 2 项断言 mix 全面更容易。

上述比较严格限于 Table 5 中每条赛道自己的检查点和 Dev+Test 场景平均，不能与跨赛道、remix 干净参考指标或不同检查点混作同一因果比较。论文也没有无处理、纯音频或同检查点视觉消融可用来隔离视觉贡献。OVRL 的构造还要求特别小心：CER 按升序排名，其余纳入指标按降序排名，DNS-P808、DNS-SIG 与 DNS-BAK 只展示，只有 DNS-OVRL 进入名次平均。由于平均的是团队相对名次，最终排行榜适合衡量同届多维均衡，却不适合跨参赛集合复用为固定绝对性能。

### 🔬 细节详述

数据侧，开发集与测试集来自互斥说话人组；Track 1 的 Dev 含 1,242 个 mix clip 和 900 个 remix clip，对应 4,284 个 target item，Test 对应 2,472、1,785 和 8,514。Track 2 在共享音频的视频退化之外加入远场材料，因此 Dev 有 5,250 个 target item，Test 有 9,882 个。音频统一为 16 kHz 单声道，原始人脸视频为 256 × 256 像素、25 fps，并可选提供面部关键点。

预处理侧，官方实现直接解码视频并提取归一化 88 × 88 唇区。低质条件在连续片段施加高斯噪声或模糊；遮挡将随机物体覆盖在人脸关键点区域；冻结重复连续帧；不同步在保持总帧数时让视频相对音频前移或后移；黑屏把连续帧替换为全黑。约 3 m 远场来自额外真实录制，复现实验时应单独分层。

基线音频编码器含 256 个长度为 40 个采样点的滤波器，瓶颈与跳连通道均为 256，卷积通道为 512，卷积核大小为 3，每次 repeat 含 8 个 block，共 4 次 repeat。视觉编码器是冻结的 ResNet-34，前端含 3D 卷积并输出 512 维特征；融合维度 F=256。该分离器非因果，适配离线挑战。

训练侧使用 PyTorch Lightning 与分布式数据并行。Track 1 基于 VoxCeleb2 单人源动态形成双人 remix；Track 2 在线添加视觉遮挡、低分辨率、冻结、丢帧与音画不同步。目标为置换不变 SI-SDR/SNR，优化器使用 Adam，学习率 10^-3，并由 ReduceLROnPlateau 调整。批大小、训练 epoch、随机种子和训练硬件未说明。

推理与提交侧，公开仓库提供分赛道配置和检查点、数据读取器、多 GPU 分片推理以及统一的离线增强或评分入口。提交端要求每个 target item 产出 1 路 16 kHz 单声道估计，并记录外部数据、预训练模型、视觉增强、预处理、损失函数和推理后处理。测试转写、干净 remix 目标、manifest 与注册声纹由组织方保管，正式 Test 只能由组织方评测。

论文把已有频谱掩码、时域分离、跨模态一致性与先分离后匹配路线压缩为背景，挑战本身不限定参赛架构。离线评估链整合 UTMOSv2、DNSMOS、Fun-ASR 与 WeSpeaker，具体版本应以公开仓库配置为准。提交打包目录可能随赛程调整，最终布局以实时 submission page 为准。论文未报告真实延迟、吞吐、显存占用、统计置信区间或人类听测，也未提供按每种视觉失真分别统计的官方基线表。

### 🚨 局限与问题

数据只含 14 名中文说话人，说话人不交叠只能证明该语料内部的留出说话人泛化。Table 5 中 2 条赛道的 mix 虽均为更高 DNS-OVRL 和更低 CER，但 Track 2 的 CER 差异很小，且其他指标未给出统一排序。多数 Track 2 失真是离线构造，远场子集还同时改变声学和视觉条件；mix 没有干净目标波形，质量依赖学习型预测器而非主观听测；OVRL 会随参赛队集合变化。

### 进一步审视

协议避免开发集与测试集的直接说话人重合，但 14 名中文说话人不足以覆盖开放语言、口音、设备和人群。允许外部开源数据也让榜单差异同时反映数据资源与算法，资源申报粒度不足时会影响公平比较。Table 5 虽显示 2 条赛道的 mix 均有更高 DNS-OVRL 与更低 CER，但 Track 2 的 CER 差异很小，且 UTMOS、SPK-SIM 并非一致排序，不能据此把 mix 判为整体更容易。

对共享音频片段，最有解释力的分析应固定同一检查点，逐类比较干净视频与退化视频；现有 Track 2 聚合结果还混入远场材料。未来应增加 no-processing 与 audio-only 控制、按失真类型分层结果、主观听测及置信区间，才能判断视觉条件在现实录制中的真实增益。

### 🔗 开源与复现资源

可直接使用的入口包括挑战网站 https://real-world-avse.github.io/ 与 Baseline 仓库 https://github.com/Real-World-AVSE/Baseline。已发布内容覆盖 AV-ConvTasNet 代码、Track 1 与 Track 2 检查点、数据读取、配置、多 GPU 离线推理、离线评估器以及开发集和测试集官方结果，研究者可以在 Dev 上重跑基线并检查指标链。

公开性仍有边界：组织方保留 Test 转写、干净 remix 目标、manifest 与注册声纹，外部无法独立重算正式 Test 分数。挑战数据下载和提交目录也应以官方网站为准；这些限制不削弱已发布起点，但意味着排行榜复核需要组织方参与。

### 💡 研究者判断

这篇基准真正有用的不是把 AV-ConvTasNet 包装成强模型，而是把现实 AVSE 中最容易被合成数据藏住的失败模式摆上台面：自然重叠没有干净目标，视频还会遮挡、冻结、黑屏和错位。可惜 Track 2 又把单独检查点与远场子集合进来，导致最诱人的跨赛道数字恰好最不适合做因果解释。认真参赛的团队应把官方榜单当入口，把同检查点、同音频、逐失真对照当成真正的研究实验。

`<details>`
`<summary>`⚖️ 评分理由（展开查看）`</summary>`

* 创新性 (1.4/2)：基准把自然同录 mix、可控 remix 与显式视觉故障纳入统一协议，切中既有 AVSE 评测偏向合成混音和可靠视频的缺口；底层任务和组件则多沿用已有路线。

* 技术严谨性 (1.3/1.5)：任务输入输出、场景参考条件、说话人切分、指标后端和相对排名公式均被明确给出，正文还主动说明跨赛道混入检查点与远场差异。

* 实验充分性 (1.3/1.5)：开发集、测试集、mix、remix 和 2 条赛道均有官方基线数字；Table 5 显示两赛道的 mix 均取得更高 DNS-OVRL 和更低 CER，但 Track 2 的 CER 差异很小，且仍缺少无处理、纯音频及同检查点视觉对照。

* 清晰度 (0.9/1)：论文按任务、数据、指标、基线和结果组织，表格方向与适用场景清楚，尤其对名次平均和跨赛道解释给出限定。

* 影响力 (1.2/1.5)：ISCSLP 挑战把现实 AVSE 的数据、评测与提交规范集中为可操作入口，对稳健多模态分离研究有直接牵引；影响仍受中文语音和 14 名说话人限制。

* 开源 (1.5/1.5)：挑战网站和 Baseline 仓库已公开，代码、分赛道检查点、离线评估器与官方结果均有明确交付，达到可直接使用的完整开源档位。

* 可复现性 (0.5/0.5)：论文披露音视频格式、唇区预处理、网络通道、训练目标、优化器、学习率、推理与提交格式，并提供配置和检查点；正式测试参考仍由组织方保留。

* 工程/实践价值 (0.7/1.5)：多 GPU 离线推理和统一增强或评分入口便于参赛工程接入，但基线为非因果离线系统，论文未报告延迟、吞吐、显存或真实部署资源。

`</details>`

---

[← 返回 2026-08-26 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-26/)
