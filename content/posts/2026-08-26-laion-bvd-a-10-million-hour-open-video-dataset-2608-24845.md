---
title: "LAION-BVD: A 10-Million-Hour Open Video Dataset for Multimodal Pre-training"
date: 2026-08-26
draft: false
tags: [音视频理解, 数据集, 预训练, 对比学习, 多模态模型]
categories: [论文速递]
description: "音视频理解 | 9.4/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.24845"
paper_digest_manual_depth: "full-text-evidence-v5"
---

# 📄 LAION-BVD: A 10-Million-Hour Open Video Dataset for Multimodal Pre-training

标签：#音视频理解 #数据集 #预训练 #对比学习 #多模态模型

**9.4/10** | 创新 1.7/2 | 严谨 1.3/1.5 | 实验 1.4/1.5 | 清晰 0.9/1 | 影响 1.5/1.5 | 开源 1.2/1.5 | 复现 0.4/0.5 | 工程 1/1.5

🔥 **9.4/10** | 前10% | 文档类型：数据集与基准 | 评分置信度：高 | #音视频理解 | #预训练 | #数据集 #对比学习 | [arxiv](https://arxiv.org/abs/2608.24845)


### 👥 作者与机构

第一作者：Andreas Hochlehnert（University of Tübingen, Tübingen AI Center）
通讯作者：正文未明确标注通讯作者；A. Sophia Koepke、Jenia Jitsev、Matthias Bethge 标为共同末位作者
作者列表：Andreas Hochlehnert、Marianna Nezhurina、Mehdi Cherti、Andrej Radonjic、Thaddäus Wiedemer、Christoph Schuhmann、Romain Beaumont、Wieland Brendel、Bernhard Schölkopf、A. Sophia Koepke、Jenia Jitsev、Matthias Bethge（机构：University of Tübingen, Tübingen AI Center；LAION；JSC, FZJ；Wynd Labs；MPI for Intelligent Systems, ELLIS Institute Tübingen；Technical University of Munich, MCML）

### 📌 核心摘要

这篇论文的核心不是“网页视频很多”，而是把候选 URL、成功下载、可训练片段和可复验结论组织为连续的数据生产链。作者先从 CommonCrawl 的 4.7B 候选链接筛出 1.3B 平台 URL，再用分布式下载取得 80M 视频、合计 10M 小时；这解决了规模入口，却没有把每条链接自动变成训练样本。

1.3B 平台 URL、80M 下载视频和 10M 小时描述的是资源池；当前训练验证实际依赖 2.4M 视频导出的 55M clips，以及独立抽取的 300M frames。前者提供共享场景边界下的视频—文本和音频—文本配对，后者提供帧—文本对。因而 LAION-BVD 的贡献应读作“将巨大但脆弱的 URL 池加工为可训练、可比较的模态子集”，而不是“10M 小时都已同等标注并参与训练”。

对音频研究者，最重要的新增物不是更长的视频清单，而是同一场景中可直接使用的声轨监督。作者以 ViCLIP、CLAP 和 CLIP 分别检验视频、音频、帧的路径，结果支持其作为预训练来源；但小模型重复训练退化、帧分类不占优和音频 caption 误差也说明规模没有替代数据治理。结论因此是有条件的：LAION-BVD 为开放多模态预训练扩充了供给，却仍受自动标注、平台内容和访问条款的约束。

### 🏗️ 方法概述和架构

先把规模口径固定下来。cc2dataset 与 Spark 读取截至 March 2024 的 CommonCrawl WAT，从 4.7B 候选链接中用 yt-dlp extractor 识别 YouTube、Vimeo、Dailymotion，留下 1.3B 平台 URL。这个集合只是可尝试获取的入口，不是本地持有、更不是已标注的语料；论文由此把“网页索引”与“可训练数据”分开。

接着是把 URL 变成字节的工程层。Celery 协调 2000 台虚拟服务器，配合住宅代理和 yt-dlp 尝试下载 130M 视频，约 60% 成功，得到 80M 视频与 10M 小时。下载成功率说明平台链接并非稳定库存，且论文未拆解失败原因、网络费用或存储费用，所以这一步能说明规模可达，不能承诺任意机构可低成本重建。

cc2dataset 与 Spark 提取候选 URL，Celery 与 yt-dlp 完成下载；成功视频随后分叉为场景视频、同场景音频和去黑的 scene-change frames。视频—音频支路先剔除短于 10 秒或长于 30 分钟的源视频，以 PySceneDetect 的 threshold 30 按内容切场景，再用低分辨率帧间运动滤掉近乎静止的段。作者从 2.4M 视频形成 55M clips，故视频和声轨不是独立采样后碰巧配对，而是共享同一片段边界。

同一场景边界先把画面与声轨配对；Audio Flamingo 3 为声轨生成短 caption，CLAP 再把 48 kHz waveform 的 log Mel 表示与文本投到同一空间。与之并行，Qwen3-VL-2B-Instruct 均匀读取每段最多 32 帧，产出不超过 20 words 的视频描述。这里的共享只到切分为止：训练时没有联合 audio-visual encoder，也没有用同步事件作为额外目标。

图文支路服务帧—文本而非音视频对比学习。系统从完整池随机抽取视频，用 ffmpeg 去黑、以 scene threshold 0.1 留下变化帧，直到 BVD-I-300M；DeepSeek-VL2-tiny 为这些帧补写 caption。帧路径只保留选择理由：DeepSeek-VL2-tiny 在候选中兼顾最高 CLIPScore 与次高吞吐，无需逐项重述未入选模型。

训练不把视频、音频与帧混成统一端到端模型：ViCLIP 学视频—文本，CLAP 学音频—文本，OpenCLIP 学帧—文本，各自用对比学习检查对应 caption 的可用性。这样的分工让读者能定位效果来自哪条监督路径，同时也意味着不同任务的好结果不能直接推出模型已经学到紧密的视听同步。

输出也分层：URL 与部分 caption 放在 Hugging Face，raw video 仅供接受 terms of use 的研究机构下载。对于复现者，已有 caption 子集最接近可直接训练的输入；从 URL 重建则会遇到链接删除、区域访问和平台内容漂移。

### 💡 核心创新点

1. 数据结构上的创新不是新的对比学习损失。作者让每条下载成功的视频在相同场景边界上生成视频片段、对应声轨和变化帧：前两者保留时间上的共同来源，后者扩展为图文对。传统视频语料常只把视觉片段配文本；本文把声轨单列成可训练的语言监督，并为各路径分别选择 captioner。证据是 ViCLIP、CLAP、OpenCLIP 均得到可用结果，边界是它们从未训练可同时消费画面和声音的模型。

2. 规模表达的创新在于可操作的层级。1.3B URL 是平台链接池，80M 视频与 10M 小时是成功下载的原始总池，55M clips 与 300M frames 才是已 caption 的分析子集。这个表达防止“10M 小时”遮蔽训练实际，也让使用者按访问权限和算力决定取 URL、子集还是 raw video；代价是 URL 的可用性随平台变化，且下载失败和重抓成本没有量化。

3. 质量验证的创新是多模态、跨任务的反证检查，而不依赖单一 leader board。视频结果加上 5-run 区间和 YouTube ID 去污染，音频结果补查 Audio Flamingo 3 与 AudioCaps 的训练重叠，134 条随机样本检查再暴露 caption 错误。它们降低了“分数仅由泄漏造成”的解释，但不构成安全、版权或生成式能力的验证。

4. 视频帧的创新是将其视作不同于网页 alt-text 的图像来源。BVD-I 的检索强、ImageNet 分类弱，说明合成描述带来的不是统一提升，而是偏向相似性检索的表征。这里不逐项罗列数据集谱系，只把 InternVid、LAION-Audio 与 DataComp 留作三根证据柱的强对照。

### 📊 实验结果

证据必须按模态分柱，而非把不同任务压成单一“多模态 SOTA”。视频柱在同一 ViCLIP L-14 与 WiSE-FT 条件下比较，音频柱固定 431M CLAP 和 30M samples seen，帧柱固定 ViT-B/16 与 300M 训练样本。表中的指标均为越高越好，因此每一行都能直接看到设置、方法、强基线、数值与方向。

| 证据柱 | 条件 | 方法 | 强基线 | 指标 | 方法值 | 基线值 | 单位 |
|---|---|---|---|---|---:|---:|---|
| 视频公开基准组 | 50M samples seen | BVD-V-50M + WiSE-FT | InternVid-10M-FLT + WiSE-FT | overall Avg ↑ | 62.6 | 60.2 | score |
| 音频公开基准组 | 30M samples seen | BVD-A-10M | LAION-Audio | overall Avg ↑ | 46.8 | 44.8 | score |
| 帧公开基准组 | 300M samples | LAION-BVD / ViT-B/16 | DataComp / ViT-B/16 | COCO I2T R@5 ↑ | 0.80 | 0.70 | unitless |

视频的 62.6 比 60.2 高 2.4 points，支持较大 BVD 视频子集可替代这一 InternVid 对照。音频的 46.8 高于 LAION-Audio 的 44.8，说明场景声轨和自动 caption 能形成有效的音频—文本监督；但 LA+AS 为 56.6，表示经过专门整理的 AudioSet 仍有明显价值。帧侧的 0.80 对 0.70 则说明视频帧特别适合 COCO 检索，而不是证明它在所有图文任务都更强。

下表专门保留与“规模一定更好”相矛盾的结果。它同时检查模型容量、caption 来源和标注质量，避免把大规模成功误读为弱过滤或合成描述已经没有代价。

| 反证或边界 | 条件 | 方法 | 对照 | 指标 | 方法值 | 对照值 | 单位 |
|---|---|---|---|---|---:|---:|---|
| 音频规模负结果 | 158M params | BVD-A-10M / 110M seen | BVD-A-10M / 30M seen | overall Avg ↑ | 40.0 | 42.9 | score |
| 帧分类代价 | 300M samples | LAION-BVD / ViT-B/16 | DataComp / ViT-B/16 | ImageNet-1k Acc@1 ↑ | 0.28 | 0.58 | unitless |
| caption 质量抽查 | 134 clips | Audio caption | Video caption | Major error ↓ | 6.0 | 2.2 | % |

规模并未自动修复弱标注：158M CLAP 从 30M 重复训练到 110M samples seen 时 Avg 由 42.9 降至 40.0，帧侧检索优势也没有转化为 ImageNet 分类优势。视频侧的去污染进一步削弱“记住测试视频”的解释：移除重叠 YouTube ID 后，MSR-VTT 与 MSVD 的结果仍接近原值；5-run 表明 BVD-V-50M 相对 BVD-V-10M 的 Overall Avg 差为 +0.58，95% CI 为 [+0.40, +0.76]，但 K400、UCF-101 并不清晰。

因此，视频、音频、帧的结果共同支持“BVD 提供了可用但带任务偏好的训练信号”。它们不足以支持“自动 caption 已解决所有下游任务”，也不足以证明视听联合模型、生成式模型或生产系统会从同一数据分布中获益。

### 🔬 细节详述

可复跑的核心 recipe 包含 ViCLIP 的 8 帧采样、InfoNCE、学习率 sweep 和 100 张 GH200，也包括 CLAP 的 48 kHz log Mel 前端与帧 caption 的 A100 生成配置。ViCLIP 从 DataComp-1B CLIP checkpoint 初始化；学习率覆盖 1e-6、4e-6、1e-5、4e-5、1e-4、4e-4，global batch size 为 8k 或 32k，AdamW 取 β1=0.9、β2=0.98、weight decay 0.2、gradient clipping norm 1、warmup 100。L-14 在 50M samples seen 时报告 455 GPU-hours。

视频超参数以 validation sets 选择，而非直接在测试集挑最高分：作者从 K400、UCF-101、HMDB51、MSR-VTT、MSVD 的训练数据各随机抽取最多 10K examples。WiSE-FT 对 InternVid 固定 α=0.5；BVD-V-50M 则从 α={0.5, 0.6, 0.7, 0.8, 0.9} 中用验证集选择。因此合并后结果应和未合并 checkpoint 一起判断，不能将额外选择自由度误算成纯数据收益。

CLAP 的数据流是 waveform 重采样到 48 kHz，变为 log Mel spectrogram，经 audio encoder 与 text encoder 的投影后用 symmetric contrastive loss 对齐。论文报告 158M、200M、388M、431M 参数模型以及约 30M、110M samples seen，却没有给出音频窗口长度、Mel bin 数、hop size、增强策略或每个 run 的优化器细节。也就是说，主干比较可复核，独立重训练仍缺若干音频前端和优化配置。

帧 caption 的生成用 vLLM 与 Ray 在 256 张 NVIDIA A100 上处理 300M frames。DeepSeek-VL2-tiny 为 3.4B 参数，temperature 0.5、max model length 4096、max sequences 16、max tokens 20；报告 CLIPScore 0.62、吞吐 8.20 img/s、captioning 12200 GPU-hours 与 CLIP training 2187 GPU-hours。候选模型在 DataComp-1B 的 100k images 上先比较 CLIPScore，再以相同训练 recipe 检查其下游影响。

数据版图也会影响可迁移性。视频集合以 YouTube 为主，Vimeo 与 Dailymotion 只占较小份额；视频时长、语言和主题分布会随平台与采集时间改变。对训练者而言，训练前应冻结 URL 清单、下载日期、切分版本、caption 模型与提示词，并保留每轮成功和失败下载的日志；否则后来重建的同名子集很可能已经不是论文实际使用的样本。

污染处理也被纳入复现实验：BVD-V-55M 与 K400、MSR-VTT、MSVD 的 YouTube ID 重叠率为 0.26%、5.5%、6.3%，移除重叠后检索表现接近原值。Audio Flamingo 3 与 AudioCaps 测试音频的关系则用 607 个 clean clips 对同规模 control 重评，BVD-trained pooled 的 aR@5 变化为 -1.20 points，non-BVD pooled 为 -2.56 points。真正影响复现的是住宅代理、2000 台虚拟服务器和 GPU 集群；下载总网络成本、存储成本与失败原因构成并未报告。

### 🚨 局限与问题

所有 caption 都由较小模型自动生成且被刻意压短，人类质量评估中视频 caption 的 major error 为 2.2%，音频 caption 为 6.0%，后者更容易误判声事件、语音内容与音乐属性。评测把视频—文本、音频—文本和图像—文本分开，没有训练联合音视频模型，也没有覆盖生成式视频语言模型或 diffusion。原始采集仅依赖平台既有 moderation，未增加安全过滤，因此语言、地区、主题与刻板印象偏差仍可能进入模型；平台 URL 也可能失效。

### 进一步审视

自动标注的误差不能被平均值掩盖。134 个抽样中，音频 caption 的 major error 为 6.0%，高于视频 caption 的 2.2%；错误涉及声事件、语音内容、音乐和 speaker attribute。这个样本量无法覆盖语言、主题与长尾声学事件，故它是“存在可测噪声”的信号，而不是所有样本的统一误差率。

共享场景切分保住了时间边界，却没有证明模型学到跨模态同步。ViCLIP、CLAP、OpenCLIP 分别处理视频—文本、音频—文本和图像—文本，没有联合音视频训练；因此对检索和分类的结论不能直接延伸到声音与画面强耦合的理解、video-language generation 或 diffusion。

污染检查减弱了若干替代解释而没有消除全部风险。视频去掉重叠 YouTube ID 后表现接近原值，Audio Flamingo 3 与 AudioCaps 的重叠也被单独复评；但 captioner 本身的偏好、训练数据的未知覆盖和 benchmark 的 caption 风格仍会影响分数。帧侧在检索强而 ImageNet 弱正是这种任务偏好的可见例子。

数据治理与复现边界同样具体：来源集中于 YouTube、Vimeo、Dailymotion，平台 moderation 不是额外 safety filter，People & Blogs、Music 与英语内容占比较高。URL 可能因删除、权限和地域而失效，raw data 还要求研究机构接受 terms of use。论文未给出许可证名称、删除请求机制、个人信息治理、长期可用性统计或原始内容再分发范围；这些缺口限制研究结论向长期共享和生产部署外推。

### 🔗 开源与复现资源

可核实的交付包括项目页 https://projects.laion.ai/bvd/ 与 Hugging Face 集合 https://huggingface.co/collections/laion/bvd-big-video-dataset。正文明确发布视频 URL 和部分 caption，并写明研究机构接受 terms of use 后可下载 raw data，因此“released”指已有资源而不是未来承诺。

但开放不是无条件镜像。全文没有给出许可证名称，也没有说明平台原始内容的再分发权、链接删除同步、非研究机构的访问路径或训练 checkpoint。复现实验的超参数足以复查设计，而重新得到相同数据快照仍需要住宅代理、2000 台虚拟服务器和大规模 GPU；可复核与可轻量重建在这里是两件不同的事。

### 💡 研究者判断

LAION-BVD 最有价值的结论不是“10M 小时足够大”，而是把网络 URL 总池经过下载、场景切分、模态专用 caption 和独立训练验证后，变成研究者可具体使用的多模态训练输入。视频、音频、帧的结果证明这条生产线并非只有规模叙事；反例也同样清楚：小 CLAP 的重复训练会退化，视频帧的检索增益不等于分类增益。

因此，最合理的使用方式是把它当作开放多模态预训练的高容量来源，同时保留数据选择、补充高质量音频语料、污染复查和长期快照的步骤。若只把它当作“开放且可任意复现的 10M 小时数据集”，就会忽略平台 URL、自动 caption、许可条件和安全治理共同构成的现实成本。

<details>
<summary>⚖️ 评分理由（展开查看）</summary>

* 创新性 (1.7/2)：创新来自把 1.3B 平台 URL 经成功下载、共享场景边界和模态专用 caption 组织成可分别训练的视频、音频与帧数据路径；其新意是开放数据生产与规模，不是新的 scene detection、captioner 或对比学习算法。

* 技术严谨性 (1.3/1.5)：从 4.7B 候选到 1.3B URL、130M 下载尝试/约 60% 成功率，再到 80M 视频与 10M 小时的链条有明确方法证据，并以统计与去污染检查补强；但未加额外安全过滤，134 个样本的 caption 审计不能充分覆盖长尾偏差。

* 实验充分性 (1.4/1.5)：ViCLIP、CLAP、OpenCLIP 在公开分类和双向检索上分别验证视频、音频、帧 3 条数据路径，包含数据/模型规模趋势、5-run 不确定性、污染复评和小 CLAP 的负结果；仍未评测联合音视频表征、生成式任务或安全性。

* 清晰度 (0.9/1)：原文将 URL 池、80M/10M 小时 raw pool、55M captioned clips、300M frames 与各训练子集分层呈现，核心流程、表格和附录可定位；大量相近规模口径仍要求读者主动区分，标题也容易诱发把总池误作已标注训练集。

* 影响力 (1.5/1.5)：80M 视频和 10M 小时总池为开放视频、音频及图文预训练提供罕见的大容量来源，且视频、音频、帧 3 类公开基准均显示可用监督；影响力按已验证的对比学习用途评分，不把它外推为联合视听或生成式基础模型能力。

* 开源 (1.2/1.5)：项目页和 Hugging Face 集合已交付视频 URL 与部分 caption，故资源状态确为 released；raw data 仅限接受 terms of use 的研究机构，论文又未给出许可证名称或原始内容再分发边界，因此不按无条件完整开放计分。

* 可复现性 (0.4/0.5)：ViCLIP 的采样、学习率、batch、优化器和硬件，以及 CLAP 前端、帧 caption pipeline 均有披露，足以审查主要实验路线；同一数据快照的重建仍依赖会失效的平台 URL、住宅代理、2,000 台虚拟服务器和大规模 GPU，且部分音频训练细节未给出。

* 工程/实践价值 (1.0/1.5)：分布式下载、场景级切片、视频/音频/帧自动标注及大规模训练成本统计展示很强的研究工程价值；论文没有服务级延迟/吞吐、端到端下载成本、失败类型分解或真实部署测量，工程分不把资源规模直接当作生产性能。

</details>

---

[← 返回 2026-08-26 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-26/)
