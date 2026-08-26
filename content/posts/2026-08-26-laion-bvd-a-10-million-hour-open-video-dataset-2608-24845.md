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

🔥 **9.4/10** | 前10% | 文档类型：数据集与基准 | 评分置信度：高 | #音视频理解 | #数据集 | #预训练 #对比学习 | [arxiv](https://arxiv.org/abs/2608.24845)


### 👥 作者与机构

第一作者：Andreas Hochlehnert（University of Tübingen, Tübingen AI Center）
通讯作者：正文未明确标注通讯作者；A. Sophia Koepke、Jenia Jitsev、Matthias Bethge 标为共同末位作者
作者列表：Andreas Hochlehnert、Marianna Nezhurina、Mehdi Cherti、Andrej Radonjic、Thaddäus Wiedemer、Christoph Schuhmann、Romain Beaumont、Wieland Brendel、Bernhard Schölkopf、A. Sophia Koepke、Jenia Jitsev、Matthias Bethge（机构：University of Tübingen, Tübingen AI Center；LAION；JSC, FZJ；Wynd Labs；MPI for Intelligent Systems, ELLIS Institute Tübingen；Technical University of Munich, MCML）

### 📌 核心摘要

LAION-BVD 要解决的不是网上有没有视频，而是如何把网页链接变成可下载、可分段、可标注并能经公开任务检验的多模态预训练资源。作者从 CommonCrawl 的 4.7B 候选链接筛出 1.3B 平台 URL，下载得到 80M 视频、合计 10M 小时。真正进入当前验证的是从 2.4M 视频得到的 55M captioned clips，以及另行抽取的 300M 场景变化帧；10M 小时总池并未全部完成同等标注。视频、对应声轨和静态帧分别生成 caption，再用 ViCLIP、CLAP 与 CLIP 检验视频—文本、音频—文本和图像—文本监督。

对音频研究者而言，关键变化是声轨不再只作为视频附属信息，而是按场景切段并由 Audio Flamingo 3 单独生成文本监督，从而可以直接训练 CLAP。视频综合 Avg 与音频公开任务显示这批弱过滤数据能支撑有竞争力的对比预训练，帧数据则在 COCO retrieval 上尤其强。与此同时，小 CLAP 的重复训练退化、ImageNet 分类落后和音频 caption 人工误差说明规模不会自动消除标签偏差。数据价值来自规模、配对模态与可审计验证的组合，而不是任一单项数字。该资源开放了此前罕见的音视频体量，但 raw data 的机构与条款门槛、平台链接稳定性和最小安全过滤仍决定其可复现上限。

### 🏗️ 方法概述和架构

输入层读取截至 March 2024 的 CommonCrawl WAT 元数据。cc2dataset 与 Apache Spark 先处理 4.7B 候选 URL，再利用 yt-dlp extractor 只保留 YouTube、Vimeo 和 Dailymotion 链接，形成 1.3B 平台 URL 池；这个设计提升可下载性，却把来源分布绑定到少数商业平台。

下载层用 Celery 协调 2000 台虚拟服务器，并借助住宅代理调用 yt-dlp。系统实际尝试 130M 视频，约 60% 成功，最终取得 80M 视频和 10M 小时；失败链接的类型与总网络成本未分解，因此 1.3B 是可选 URL 总池，不是已落盘视频数。

下载成功的视频不直接进入训练，而是分成相互关联的 3 条处理路径：场景视频、同场景音频和场景变化静态帧。视频—音频路径先去除短于 10 秒或长于 30 分钟的源视频，用 PySceneDetect threshold 30 切出场景段，再以低分辨率帧间运动剔除几乎静态的片段；从 2.4M 视频最终得到 55M clips。

音频分支与视频分支共享场景边界，Audio Flamingo 3 读取每段对应声轨并按提示生成不超过 10 words 的描述。视频分支用 Qwen3-VL-2B-Instruct 均匀读取最多 32 帧，生成不超过 20 words 的 caption。共享切分保留视觉与听觉时间对应关系，但当前训练只分别使用 2 种 caption，没有联合建模同步事件。

帧分支从完整视频池随机抽样，用 ffmpeg 去除黑帧并以 scene threshold 0.1 留下变化帧，直至形成 BVD-I-300M。DeepSeek-VL2-tiny 再生成 caption；帧来自视频而非网页图片，因此其类别词分布与 DataComp、Re-LAION 明显不同。帧 captioner 的选择只保留结论：DeepSeek-VL2-tiny 在受限候选中兼顾最高 CLIPScore 与次高吞吐。

验证阶段不训练统一模型，而是用 ViCLIP、CLAP 与 OpenCLIP 分别测试视频、音频和帧 caption 的对比学习信号。评测证据分为视频公开基准组、音频公开基准组和帧公开基准组，所有表内的 accuracy、Recall 与 Avg 都按越高越好读取。这套输出将原始总池、captioned 子集与训练样本量分开发布。

最终产物不是单一下载包：视频 URL 与部分 caption 通过 Hugging Face 提供，原始视频则面向接受 terms of use 的研究机构。对复现者而言，URL 层适合重建可访问样本，captioned 子集适合直接训练，而原始视频层还要承担链接失效、地域访问和平台内容变更带来的可复现性不确定性与样本组成漂移风险。研究设计因此把获取层与分析层拆开，允许后续只更新可访问视频，而不必改写既有 caption 和评测协议。

### 💡 核心创新点

1. 既有开放视频—文本资源通常远小于现代图文语料，且音轨常未被当成平行监督。LAION-BVD 把同一平台视频同时保留为场景视频、对应音频和静态帧 3 条路径；ViCLIP、CLAP 和 CLIP 的结果证明每条路径都能形成训练信号，但联合音视频学习尚未验证。对音频研究者而言，这让通用网络视频首次同时成为可规模化的声学语料与视觉上下文来源。

2. 1.3B URL 本身不等于训练集。本文明确区分 1.3B URL、80M 视频、10M 小时总池、55M captioned clips 与 300M captioned frames，并报告约 60% 下载成功率；不过失败原因、链接腐化速度和重新抓取成本仍缺量化。这种分层发布让使用者能够根据算力与合规条件选择 URL、已标注子集或原始视频层。

3. 大规模合成 caption 容易只用单一 benchmark 自证质量。作者用视频、音频和图文的分类与检索交叉验证，并加入 5-run 置信区间、视频 ID 去污染、Audio Flamingo 3 训练重叠检查和人工 caption 质量抽查；这些证据降低了泄漏解释，却没有覆盖生成式任务或安全测评。

4. 视频帧常被视为低成本图像来源，本文进一步揭示其迁移偏好：BVD-I 在 COCO/Flickr retrieval 上强，在 ImageNet 类别分类上弱，synthetic captions 的 class-name coverage 远低于 DataComp。这个负结果把 caption 风格与预训练用途联系起来，但还未证明改写 prompt 就能修复类别对齐。

### 📊 实验结果

先看同训练框架下的数据来源比较。下面只保留能回答 BVD 是否胜过强外部语料的行；视频 Avg 是分类均值与 4 个检索指标均值的再平均，音频 Avg 汇总 UrbanSound8K 与 AudioCaps/Clotho retrieval，帧侧保留 COCO I2T R@5。

| 实验组 | 条件 | 方法 | 强基线/对照 | 指标 ↑ | 方法值 | 基线值 | 单位 |
|---|---|---|---|---:|---:|---:|---|
| 视频公开基准组 | 50M samples seen | BVD-V-50M + WiSE-FT | InternVid-10M-FLT + WiSE-FT | Avg ↑ | 62.6 | 60.2 | score |
| 音频公开基准组 | 30M samples seen | BVD-A-10M | LAION-Audio | Avg ↑ | 46.8 | 44.8 | score |
| 帧公开基准组 | 300M samples | LAION-BVD / ViT-B/16 | DataComp / ViT-B/16 | COCO I2T R@5 ↑ | 0.80 | 0.70 | unitless |

视频结果说明在 WiSE-FT 对齐后，BVD-V-50M 仍比强 InternVid 基线高 2.4 points。音频结果更克制：BVD-A-10M 高于 LAION-Audio，却低于加入 curated AudioSet 的 LA+AS 56.6，说明网页视频声轨可用但不能替代专门音频语料。相较既有开放语料，LAION-BVD 的独特价值是保留视频、声轨与帧之间的共同来源，而不是再罗列一遍数据集谱系。

规模收益并非无条件成立：158M CLAP 在重复训练到 110M samples seen 后 Avg 从 42.9 降至 40.0，而较大模型才获得收益。帧 caption 也呈任务分化；下表把音频容量瓶颈、caption 类型消融与 caption 质量抽查放在一起。

| 实验组 | 条件 | 方法 | 对照 | 指标 ↑/↓ | 方法值 | 对照值 | 单位 |
|---|---|---|---|---:|---:|---:|---|
| 音频规模负结果 | 158M params | BVD-A-10M / 110M seen | BVD-A-10M / 30M seen | Avg ↑ | 40.0 | 42.9 | score |
| caption 类型消融 | 128M samples | Recap / CLIP ViT-B/32 | Original / CLIP ViT-B/32 | ImageNet-1k Acc@1 ↑ | 0.23 | 0.40 | unitless |
| caption 质量抽查 | 134 clips | Audio caption | Video caption | Major error ↓ | 6.0 | 2.2 | % |

BVD-I 的 retrieval 优势因此不能解读成全面优于 web-image 数据。DataComp caption 含约 141M 次 ImageNet class-name mentions，而 BVD-I-300M caption 约 21M 次；类别词覆盖差异与分类退化一致。质量抽查也给出噪声边界：音频 major error 为 6.0%，高于视频的 2.2%。视频侧 5-run 分析更稳健，BVD-V-50M 相对 BVD-V-10M 的 Overall Avg 差为 +0.58，95% CI 为 [+0.40, +0.76]，但 K400 与 UCF-101 差异仍不清晰。

### 🔬 细节详述

ViCLIP 从 DataComp-1B 的 CLIP checkpoint 初始化，每段均匀采 8 帧，使用标准 InfoNCE；训练 recipe 还公开了学习率搜索、batch、AdamW、warmup 和 GPU 资源。学习率为 1e-6、4e-6、1e-5、4e-5、1e-4、4e-4，global batch size 为 8k 或 32k，β1=0.9、β2=0.98、weight decay 0.2、gradient clipping norm 1、warmup 100。训练使用 100 NVIDIA GH200 GPUs，L-14 在 50M samples seen 时报告 455 GPU-hours。

模型选择不是直接读取测试集最优值。作者从 K400、UCF-101、HMDB51、MSR-VTT 与 MSVD 的训练集各随机抽取最多 10K examples 组成 validation sets，按综合 Avg 选择超参数后再报告测试结果。WiSE-FT 对 InternVid 使用 α=0.5；BVD-V-50M 则在 α={0.5, 0.6, 0.7, 0.8, 0.9} 中以验证集选值，这个额外选择自由度应与未合并 checkpoint 结果一起读取。

CLAP 将 waveform 重采样到 48 kHz，转换为 log Mel spectrogram 后送入 audio encoder，文本 caption 进入 text encoder，二者以 symmetric contrastive loss 对齐。公开表列出 158M、200M、388M 与 431M 参数规模，并比较约 30M 和 110M samples seen；正文未说明音频窗口长度、Mel bin 数、hop size、数据增强和每个 CLAP run 的优化器超参数。音频 caption 的目标长度参考 AudioCaps 约 8 words 与 Clotho 约 11 words，但实际 BVD caption 分布更宽，不能把 prompt 上限当成严格输出长度。

帧 caption 使用 vLLM 与 Ray 分布式生成，256 NVIDIA-A100 GPUs 处理 300M frames。DeepSeek-VL2-tiny 为 3.4B 参数，参数是 temperature 0.5、max model length 4096、max sequences 16、max tokens 20；CLIPScore 为 0.62、吞吐为 8.20 img/s，captioning 共计 12200 GPU-hours，CLIP training 共计 2187 GPU-hours。候选模型先在 DataComp-1B 的 100k images 上用 CLIP L-14-336 计算 CLIPScore，再以同训练 recipe 验证 caption 质量。

数据去污染按 YouTube video ID 检查 BVD-V-55M 与 K400、MSR-VTT、MSVD，重叠率分别为 0.26%、5.5% 与 6.3%；移除重叠条目后结果接近。音频侧发现 Audio Flamingo 3 与 AudioCaps 测试音频重叠，再以 607 个 clean clips 对固定同规模 control 重评；BVD-trained pooled 的 aR@5 变化为 -1.20 points，non-BVD pooled 为 -2.56 points。

公开资源能降低获取门槛，却无法让完整重建变轻量。下载依赖住宅代理与 2000 台虚拟服务器，caption 和训练依赖大规模 GH200/A100 集群；全文未报告分布式下载的总网络成本、存储成本或失败原因构成。

### 🚨 局限与问题

所有 caption 都由较小模型自动生成且被刻意压短，人类质量评估中视频 caption 的 major error 为 2.2%，音频 caption 为 6.0%，后者更容易误判声事件、语音内容与音乐属性。评测把视频—文本、音频—文本和图像—文本分开，没有训练联合音视频模型，也没有覆盖生成式视频语言模型或 diffusion。原始采集仅依赖平台既有 moderation，未增加安全过滤，因此语言、地区、主题与刻板印象偏差仍可能进入模型；平台 URL 也可能失效。

### 进一步审视

对 134 个样本的质量评估不足以覆盖语言与主题长尾；音频 caption 的错误还涉及声事件、语音内容、音乐描述和 speaker attribute，因此 6.0% major error 不能作为所有内容类型的稳定误差上限。

共享场景切分保留了视频与声轨的时间边界，但 ViCLIP、CLAP 与 CLIP 仍只分别验证视频—文本、音频—文本和图像—文本表征。紧密视听同步、video-language generation 与 diffusion 都未被检验，现有对比学习结果不能直接外推到这些任务。

People & Blogs、Music 以及英语内容占比较高，平台既有 moderation 也不能替代额外 safety filtering；这些分布特征可能把地区、主题与刻板印象偏差带入模型。资源的边界来自 3 个层面：自动 caption 的系统误差、平台最小过滤留下的内容偏差，以及 raw data 受 terms of use 和研究机构资格约束的获取条件。

平台 URL 会随删除、权限或地域变化而失效，住宅代理下载流程也未提供长期可用性统计。全文给出访问条款，却未写明许可证名称、删除请求处理、个人信息治理或内容再分发边界；这些缺口会同时影响长期复现、安全核查和生产部署。

### 🔗 开源与复现资源

作者发布项目页 https://projects.laion.ai/bvd/ 和 Hugging Face 集合 https://huggingface.co/collections/laion/bvd-big-video-dataset。正文明确交付视频 URL 与部分 caption，并说明研究机构接受 terms of use 后可以下载 raw data；这支持把核心数据资源认定为 released，而非未来承诺。

开放程度仍有边界。论文没有写出许可证名称，也没有说明平台原始内容的再分发权、链接删除同步机制或非研究机构获取路径。复现实验的主要超参数已在附录披露，但全文未明确发布训练 checkpoint，完整复制还需要住宅代理、2000 台虚拟服务器和大规模 GPU 集群。

### 💡 研究者判断

这项工作把‘公开视频很多’真正变成工程事实：采集规模、跨视频音频图像标注和公开基准都足够硬。最值得警惕的是 open 并不等于无条件再分发，且音频 caption 的 major error 明显高于视频 caption；若后续工作只追逐 10M 小时，会错过这套资源最需要继续治理的部分。

`<details>`
`<summary>`⚖️ 评分理由（展开查看）`</summary>`

* 创新性 (1.7/2)：从 CommonCrawl URL 到 3 模态 captioned 子集形成新的开放数据基础设施，并以 10M 小时总池显著扩大公开音视频预训练规模；scene detection 与现成 captioner 本身并非新算法。

* 技术严谨性 (1.3/1.5)：数据源、下载成功率、场景切分、captioner、3 套评测、5-run 置信区间与去污染分析相互支撑；安全过滤主要依赖平台 moderation，caption 审计规模仍偏小。

* 实验充分性 (1.4/1.5)：ViCLIP、CLAP、CLIP 覆盖分类与双向检索，并包含规模、caption 类型、统计波动和污染检查；没有联合音视频模型评测，也未验证生成式任务。

* 清晰度 (0.9/1)：正文用总池、captioned 子集和各实验子集分层叙述，表格与附录可追溯；标题容易让读者误把全部 10M 小时理解为已 caption 并参与训练。

* 影响力 (1.5/1.5)：80M 视频与 10M 小时总池直接服务视频、通用音频和图文预训练，且跨模态公开任务均展示可用性，对开放多模态研究的潜在影响很大。

* 开源 (1.2/1.5)：Hugging Face 已发布视频 URL、captioned 子集与数据集合；原始视频仅面向接受 terms of use 的研究机构，且全文未明确许可证名称。

* 可复现性 (0.4/0.5)：附录披露 ViCLIP、CLAP、CLIP 的主要超参数、硬件、训练量与 caption pipeline，但 2000 台虚拟服务器、住宅代理和大规模 GPU 资源使完整重建门槛很高。

* 工程/实践价值 (1.0/1.5)：分布式下载、场景级切片、视频音频图像 caption 与训练成本统计具有很强的数据工程价值；没有报告服务级吞吐、下载总成本、失败类型分解或真实部署性能。

`</details>`

---

[← 返回 2026-08-26 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-26/)
