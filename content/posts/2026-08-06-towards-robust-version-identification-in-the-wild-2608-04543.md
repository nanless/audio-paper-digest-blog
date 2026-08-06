---
title: "Towards Robust Version Identification in the Wild: A Dataset, Benchmark, and Fine-Tuning Study"
date: 2026-08-06
draft: false
tags: [音乐检索, 对比学习, 音频理解, Transformer, 模型评估]
categories: [论文速递]
description: "音乐检索 | 8.0/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.04543"
---

# 📄 Towards Robust Version Identification in the Wild: A Dataset, Benchmark, and Fine-Tuning Study

标签：#音乐检索 #对比学习 #音频理解 #Transformer #模型评估

**8.0/10** | 创新 1.3/2 | 严谨 1.1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 1.3/1.5 | 开源 1/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

🔥 **8.0/10** | 前25% | 文档类型：数据集与基准 | 评分置信度：高 | #音乐检索 | #对比学习 | #音频理解 #Transformer | [arxiv](https://arxiv.org/abs/2608.04543)


### 👥 作者与机构

- 第一作者：Simon Hachmeier（机构未在论文中明确说明）
- 通讯作者：未说明
- 作者列表：Simon Hachmeier、R. Oguz Araz、Dmitry Bogdanov、Robert Jäschke、Xavier Serra
- 署名单位信息：论文中未提供作者所属机构的完整列表。致谢部分提到柏林图书与信息学学院的学生助理，并提到 R. Oguz Araz 受加泰罗尼亚 AGAUR-FI Joan Oró 博士预科资助及 Cátedra IA y Música 项目资助，据此可推断部分作者可能与柏林相关机构及西班牙加泰罗尼亚音乐技术研究机构有关，但论文本身未明确列出作者所属单位，因此仍以"未说明"为准。

### 💡 毒舌点评

用 1.1M 条版本把 VI 从"官方录音温室"推到了野生 YouTube 场景，数据规模与配套评测本身是扎实且有价值的贡献；但版本匹配主要依赖标题/表演者的文本模糊匹配，人工抽检只有 320 对，底层标注噪声可能被低估。标签自动匹配只评估了 precision 未评估 recall，且 rock、blues、solo 三个高频标签精度不达标。更值得注意的是，微调带来的鲁棒性提升并不是免费的：在 DVI* 上 MAP 从 0.793 降至 0.781，只有组合评测中才表现为净收益。

### 📌 核心摘要

论文针对现有 VI 数据集主要来自 SHS/Discogs 等策展来源、缺乏真实世界中业余与用户生成内容的问题，构建了 DiVers 数据集。DiVers 以 DVI 为种子，在 YouTube 上搜索非官方版本，经时长过滤、官方版本排除、Rapidfuzz 模糊匹配、soundalike 去重等步骤，得到包含 1,102,317 个版本的 DiVers-L。除版本级标注外，论文还提供 PANN 得到的逐段音乐/非音乐预测，以及由 MTG-Jamendo、MagnaTagATune 和自定义规则合并出的 329 个标签集合。实验表明，在 DiVers 上训练/微调可提升对噪声、非音乐片段和多样化输入的鲁棒性；例如 CLEWS 微调加 L2 归一化后在 YVI-L 上 MAP 从 0.816 提升到 0.842。但微调在更干净的 DVI* 上 MAP 反而从 0.793 下降到 0.781，说明鲁棒性与策展数据性能之间存在权衡。实际意义是提供了一个大规模、兼容既有 VI 基准的训练与评测资源，并揭示了现有 VI 系统对真实世界音频退化的敏感来源。主要局限是自动匹配与自动标签仍存在标注噪声，音频特征并非完全公开下载，且未发布模型权重。

下图概述了 DiVers 与 YouTube-VI（YVI）数据集的整体构建流程。

![Figure 1: Dataset creation overview. Our proposed dataset DiVers integrates the existing DVI \[6\] with our proposed YouTube-VI (YVI) dataset.](https://arxiv.org/html/2608.04543v1/x1.png)

图中可见，从 DVI 元数据出发，经 YouTube 检索、候选过滤、模糊匹配、去噪与声学去重后得到 YVI，再与 DVI 合并形成 DiVers。

### 🔗 开源详情

- 论文在摘要和引言中声明公开数据集元数据、构建代码和实验代码。
- 提供两个 GitHub 仓库：一个用于数据集构建（divers_dataset），另一个用于实验（divers_benchmark）。
- 数据集发布内容包括：元数据（如作品、版本、标签）、自动标签、逐段音乐/非音乐预测以及派生特征表示。
- 原始音频不重新分发；论文伦理声明明确“不重新分发受版权保护的音频”，发布内容仅限元数据、注释和派生特征，面向非商业音乐检索研究。
- 提取的音频特征可供研究目的申请获取（原文：“Extracted audio features are available for research purposes upon request”），未说明具体申请流程和开放程度。
- 模型权重：论文未明确说明是否发布训练或微调后的模型权重；在发布内容描述中未提及权重文件。
- 数据集许可证：未披露。
- 构建过程遵循 YouTube 公平使用政策，且数据收集使用 youtube-search-python 库并控制检索配额。

### 🏗️ 方法概述和架构

本文的核心贡献不是新的音频模型，而是一套从种子元数据到大规模"在野"版本数据的构建、标注、评测与微调分析流水线。整体流程为：先以 Discogs-VI-YT（DVI）作为基础，重新下载可获得的约 96% 版本形成 DVI*；对每个 DVI* 作品的规范化曲名在 YouTube 上检索候选；经过多层过滤与模糊匹配识别新版本；再通过声学指纹去重；最终形成 YVI-L 并与 DVI* 合并成 DiVers-L。该流程不是端到端系统，而是一个多阶段数据构建与基准验证框架。

主要组件和关键步骤：

1. **DVI\* 种子集**。DVI 含有按 Discogs 元数据搜索得到的官方版本。论文不新增音乐作品，而是沿用 DVI 原始 train/validation/test 划分，只保留能重新下载的版本，得到 DVI*。其作用是为后续搜索提供规范化曲名、表演者名以及作品级标签。

2. **YouTube 候选检索与过滤**。对每个标准化曲名使用 youtube-search-python 检索 top 500 结果，并遵循 YouTube 公平使用政策。过滤条件包括：时长小于 10 秒或大于 20 分钟；YouTube ID 已存在于 DVI、SHS100K、Da-TACOS；候选满足论文引用的"官方版本"定义；标题含 lyric video 或 remaster；每 query 仅保留 top 100。该步骤的目的是尽量排除官方版本与已知基准污染，集中收集非官方、用户生成内容。

3. **模糊匹配**。使用 Rapidfuzz token ratio，阈值 80%，将 DVI* 中的规范曲名和任一关联表演者与 YouTube 视频标题/描述匹配。一次匹配成功即可将候选视为新版本。由于 YouTube 元数据不规范，模糊匹配是识别"在野版本"的核心手段。匹配后无法下载音频的候选被排除，每个作品至少保留 2 个版本。

4. **soundalike 去重**。为避免匹配到的候选只是其他官方版本或近似重复，使用基于 Chromaprint 的 soundalike 系统在全曲层面计算相似度，阈值 0.8，其余参数为默认配置。同一重复组内优先保留 DVI* 版本，否则随机保留一个。该步骤删除了 31% 的候选，最终得到 629,536 个 YVI-L 版本。手动抽检 320 对，显示 96.25% 的作品分配正确；其中正确匹配中 6.82% 被识别为近重复，作者认为这类近重复（如 reaction videos）可能仍有保留价值。

5. **音乐/非音乐分段预测**。使用 PANN 声音事件分类模型，在 10 秒窗口、1 秒 hop 的滑动窗口上预测每段 top-5 音频类别。根据论文所引用的音频类别层级分析，将包含任意音乐相关类别的段标为音乐段，否则为非音乐段。该步骤一方面用于删去完全没有音乐段的候选（占比不足 1%），另一方面为下游按非音乐比例分层评测提供逐段标签。

6. **标签匹配**。标签集由 MTG-Jamendo（195 个）与 MagnaTagATune（188 个）合并得到 315 个标签，再加入 14 个 YouTube 特化标签，合计 329 个。标签被用 GPT-5 翻译成法语、德语、意大利语、葡萄牙语、西班牙语，并经人工校对；在视频标题上做精确匹配，匹配结果若出现在曲名或表演者名中则排除，以减少上下文偏见。手动评估（每标签 30 条、共 450 条，双人标注 Cohen's \(\kappa=0.75\)）显示除 rock、blues、solo 外，绝大多数标签 precision 超过 80%。

下图展示了 DiVers-L 中匹配频率最高的若干标签分布。

![Figure 2: Most frequent matched tags in DiVers-L.](https://arxiv.org/html/2608.04543v1/x2.png)

图中可见，cover 与 live 是最频繁的标签，分别占 6.37% 和 5.16%；guitar、karaoke、tutorial 等标签占比均不足 2%，整体呈现长尾分布。


7. **训练与微调基准**。论文在 DiVers-S/DiVers-L 上训练 DVINetX，并对 CLEWS 进行微调。DVINetX 是 DVINet+ 的放大版，参数 20.7M，CQT 输入经时间下采样和 \([0,1]\) 归一化，使用 triplet loss 与 hard triplet mining（margin \(m=0.3\)）。CLEWS 微调采用 best-pair-without-replacement（bpwr-5），在 20 秒段上选择 best pairs，用 AdamW 与余弦调度训练。评测采用 full-track embedding 与 segment-level matching 两种策略，报告 MAP 与 NAR。

组件之间的数据流是：DVI 元数据 → YouTube 检索 → 文本过滤/匹配 → 音频下载 → 声学去重 → YVI-L；YVI-L + DVI* → DiVers-L；DiVers-S 是由标题含标签的 YVI-S 与 DVI* 组成的子集。关键设计选择包括用"非官方"过滤提高在野样本比例、用多语言标签扩展覆盖、用 PANN 分段预测提供非音乐比例维度，以及用 L2 归一化提升 full-track 检索稳定性。

### 💡 核心创新点

- 构建了当前最大规模的 VI 数据集 DiVers。它包含 1,102,317 个版本，并在不增加新音乐作品的前提下引入了大量非官方、用户生成的 YouTube 版本。针对现有 SHS/Discogs 策展来源与真实场景的偏差，这一规模为训练鲁棒 VI 模型提供了直接资源。
- 提出了可复现的在野版本挖掘流水线。包括官方版本候选过滤、Rapidfuzz 模糊匹配、soundalike 去重等步骤，并用手动标注验证了流水线精度（96.25%）。这使得其他研究者可以基于元数据重建同类数据集。
- 引入音乐/非音乐分段预测和多语言标签作为辅助标注。PANN 预测的非音乐比例被用于分层评测，揭示了非音乐内容对 VI 性能的显著影响；标签集合则为按 live、tutorial、karaoke、cover 等版本类型分析表示偏差提供了工具。
- 系统比较了在 DiVers 上从零训练 DVINetX 与微调 CLEWS 的收益和代价。结果显示 DiVers 提升在野鲁棒性，但会降低干净策展集 DVI* 上的 MAP；该权衡被嵌入空间分离度指标进一步解释。
- 在工程上给出可直接复用的完整评测协议：full-track 与 segment-level 检索、MAP/NAR 指标、L2 归一化、基于非音乐比例和标签的分层评估，对后续 VI 基准研究具有参考价值。

### 📊 实验结果

以下是论文 Table 3 中主要模型在多个测试子集上的 MAP（越高越好）与 NAR（越低越好）结果：

| 模型 | 训练集 | DVI* MAP | DVI* NAR | SHS100K* MAP | SHS100K* NAR | YVI-S MAP | YVI-S NAR | YVI-L MAP | YVI-L NAR | DiVers-S MAP | DiVers-S NAR | DiVers-L MAP | DiVers-L NAR |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ByteCover2† [11] | DVI | 0.562 | 5.89 | 0.760 | 2.75 | 0.667 | 5.14 | 0.707 | 4.15 | 0.573 | 5.64 | 0.615 | 5.04 |
| CLEWS [26] | DVI | 0.781 | 3.09 | 0.841 | 1.55 | 0.775 | 2.54 | 0.796 | 2.40 | 0.769 | 2.94 | 0.778 | 2.78 |
| CLEWS^L2 [26] | DVI | 0.793 | 3.03 | 0.849 | 1.37 | 0.802 | 1.77 | 0.816 | 1.91 | 0.785 | 2.73 | 0.793 | 2.54 |
| CQTNet [33] | DVI | 0.488 | 6.67 | 0.669 | 4.28 | 0.644 | 6.06 | 0.647 | 5.90 | 0.509 | 6.49 | 0.544 | 6.29 |
| DVINet+ [5] | DVI | 0.653 | 3.74 | 0.775 | 2.10 | 0.720 | 3.40 | 0.724 | 3.24 | 0.655 | 3.63 | 0.670 | 3.49 |
| CLEWS^FT | DiVers-S | 0.770 | 3.24 | 0.844 | 1.66 | 0.819 | 1.99 | 0.824 | 1.99 | 0.771 | 2.94 | 0.784 | 2.65 |
| CLEWS^FT+L2 | DiVers-S | 0.781 | 3.00 | 0.857* | 1.33* | 0.845* | 1.31* | 0.842* | 1.53* | 0.787 | 2.61 | 0.799* | 2.34* |
| DVINetX | DVI* | 0.669 | 3.67 | 0.791 | 1.91 | 0.752 | 2.44 | 0.756 | 2.47 | 0.674 | 3.37 | 0.693 | 3.13 |
| DVINetX | DiVers-S | 0.645 | 3.89 | 0.780 | 1.89 | 0.790 | 1.68 | 0.771 | 1.95 | 0.665 | 3.34 | 0.687 | 2.98 |
| DVINetX | DiVers-L | 0.654 | 3.83 | 0.796 | 1.67 | 0.804 | 1.45 | 0.788 | 1.68 | 0.676 | 3.23 | 0.701 | 2.82 |

论文标注称，CLEWS^FT+L2 相对 CLEWS^L2 在 SHS100K*、YVI-S、YVI-L、DiVers-L 上的 MAP/NAR 提升具有统计显著性（Wilcoxon 符号秩检验，Holm-Bonferroni 校正后 p<0.05），表中以 * 标出。在 DVI* 上，CLEWS^FT+L2 的 MAP 为 0.781，低于 CLEWS^L2 的 0.793；NAR 为 3.00，略优于 CLEWS^L2 的 3.03。在 DiVers-S 上两者 MAP/NAR 接近（0.787/2.61 vs 0.785/2.73）。这说明微调的收益主要体现在 DiVers-L 和 YVI 等含更多在野内容的子集上。

在 SHS-YT+ 上，CLEWS^L2 的 MAP 为 0.686、NAR 为 10.22；CLEWS^FT+L2 的 MAP 提升到 0.708，但 NAR 略差为 10.59；DVINetX 在 DiVers-S 上 MAP/NAR 为 0.636/9.87，在 DiVers-L 上为 0.665/9.61。DVINetX 虽然参数更少（20.7M vs 约 200M），却在 NAR 上优于 CLEWS 变体。

Table 4 给出 CLEWS^FT+L2 相对 CLEWS^L2 的分层差异（ΔMAP、ΔNAR）：

| 查询域 | 候选标签 | ΔMAP ↑ | ΔNAR ↓ |
|---|---|---|---|
| DVI* | cover & guitar | 0.022* | -0.20* |
| DVI* | karaoke | 0.024* | -0.08* |
| DVI* | live | 0.018* | -0.20* |
| DVI* | official | -0.002* | -0.42* |
| DVI* | tutorial | 0.056* | -1.14* |
| DVI* | tutorial & guitar | 0.080* | -0.67* |
| YVI | cover & guitar | 0.028* | -0.12* |
| YVI | karaoke | 0.027* | -0.20* |
| YVI | live | 0.013* | -0.20* |
| YVI | official | 0.005* | -0.36* |
| YVI | tutorial | 0.080* | -0.96* |
| YVI | tutorial & guitar | 0.080* | -0.71* |

总体来看，微调对 tutorial、karaoke、cover 等非官方类型提升更明显，对 live 和 official 的提升较弱。以 DVI* 为查询时 official 候选的 ΔMAP 为 -0.002，说明微调并未提升官方版本检索。

论文还测试了非音乐比例对性能的影响（Figure 3）。CLEWS^FT+L2 在 full-track 与 segment-level 两种检索策略、所有非音乐比例区间上均优于 CLEWS^L2。NAR 差距随非音乐比例上升而扩大，MAP 增益保持在 0.03 到 0.05 绝对差异附近。full-track CLEWS^FT+L2 在每个比例下都能匹配或超过 segment-level 的 CLEWS^L2，说明时间聚合也对鲁棒性有贡献。L2 归一化对 full-track 检索提升明显（MAP 提高 0.024–0.048，NAR 最多降低 3.13），对 segment-level 匹配帮助有限，高非音乐比例下甚至可能轻微降低 CLEWS^L2 的 NAR。

下图以热力图形式展示了不同非音乐比例下 CLEWS 各变体的 MAP 与 NAR 表现。

![Figure 3: Retrieval performance of CLEWS variants compared across full track retrieval and segment-level matching with subsequent bpwr-10 reduction as proposed by \[26\].](https://arxiv.org/html/2608.04543v1/x3.png)

图中可见，随着非音乐比例升高，MAP 整体下降、NAR 上升；FT+L2 在 full-track 与 segment-level 两种策略下均优于 L2，且在高非音乐比例区间的优势更为明显。


嵌入空间分析结果如下（50,000 条随机测试版本，full-track embedding）：微调使 YVI 上 inter/intra 距离比从 3.87 上升到 4.00，使 DVI* 上从 3.43 下降到 3.21，与 MAP 变化方向一致。无归一化时，微调后两个距离都收缩但 intra 收缩更多；L2 归一化对基线提升明显但微调后提升有限，这与微调后 embedding 范数分布变得更均匀有关。

### 🔬 细节详述

- 训练数据：DVI* 为种子数据；YVI-L 由 YouTube 候选经模糊匹配与去重得到，共 629,536 个版本；DiVers-L 为二者合并，共 1,102,317 个版本。DiVers-S 是 DVI* 与 YVI-S（标题含至少一个标签的 YVI-L 子集）的并。测试集包括 DVI*、SHS100K*、SHS-YT+。SHS100K* 是从 SHS100K 可重新下载约 81% 的版本；SHS-YT+ 限制为至少含两个版本的作品。所有附加数据集与 DVI 仅在测试划分上有作品交集，避免数据泄漏。
- 信号处理：CQT hop 20ms，7 个八度，从 C1 起，每八度 12 bins；时间轴按因子 5 下采样；归一化到 \([0,1]\)。训练时每版本取随机 2.5 分钟片段。
- 数据增强：采用 SpecAugment、pitch roll 和 time-stretch 增强，遵循论文引用的现有配置。
- 损失函数：DVINetX 使用 triplet loss 与 hard triplet mining，margin \(m=0.3\)。
- 优化器与调度：DVINetX 使用 Adam，初始学习率 \(3\times 10^{-4}\)，reduce-on-plateau 调度，patience 10 epochs；CLEWS 微调使用 AdamW，初始学习率 \(5\times 10^{-5}\)，余弦调度，weight decay \(10^{-3}\)。
- 训练轮数/批量：DVINetX 的一个 epoch 定义为所有版本作为 anchor；batch 包含 24 个作品、每作品 5 个版本；版本不足时随机重复采样。CLEWS 微调最多 40 epochs，一个 epoch 以 DVI* 所有版本作为 anchor；batch 包含 25 个作品、每作品 4 个版本。
- 模型规模：DVINetX 参数 20.7M，channel 数 64，embedding 维度 1024；CLEWS 约 200M 参数。
- 训练硬件：DVINetX 在单张 NVIDIA H100 NVL 上训练 5 天（DiVers-S）或 7.5 天（DiVers-L）；CLEWS 微调在两块 NVIDIA H100 NVL 上训练 4 天。
- 推理细节：full-track retrieval 将每条版本用单个 embedding 表示；segment-level matching 使用 20 秒窗口、5 秒 hop，评分时采用 bpwr-10 归约。检索时将版本裁剪到前 10 分钟。CLEWS 变体会比较有/无 L2 归一化；DVINet+/DVINetX 训练中已包含 L2 归一化。
- 评测指标：MAP 与 NAR；论文提到模型选择使用二者几何平均值作为综合验证指标。
- 正则化/训练稳定性：DVINetX 依赖数据增强与 triplet hard mining；CLEWS 微调使用 AdamW weight decay，论文未明确提及 warmup 设置。

### ⚖️ 评分理由

*   创新性 (1.3/2)：依据[A_SUMMARY]和[SCORING_SOURCE_3/17]，构建了包含1,102,317个版本的当前最大规模VI数据集，提出可复现的模糊匹配、声学去重、多语言标签和分段预测流水线，解决策展数据与真实场景偏差，创新贡献明确。

*   技术严谨性 (1.1/1.5)：依据[A_METHOD]和[A_LIMITS]，自动匹配仅320对人工抽检（96.25%正确），自动标签只评估precision未评估recall，PANN分段预测无精度验证，标注噪声未被全面量化，构建方法在验证严谨性上有明显缺口。

*   实验充分性 (1.0/1.5)：依据[A_RESULTS]和[A_LIMITS]，有多个基线、统计显著性和分层评估，但CLEWS仅在小规模DiVers-S上微调，未在DiVers-L上验证，且DVINetX与CLEWS规模差异使比较不能完全分离数据与模型容量影响，实验覆盖不完整。

*   清晰度 (0.8/1)：依据[A_SUMMARY]和[A_LIMITS]，论文结构和表格清晰，但没有独立的Limitations章节，权衡与局限分散在伦理声明等位置，整体组织不够一目了然。

*   影响力 (1.3/1.5)：依据[A_SUMMARY]和[SCORING_SOURCE_3/17]，直接为音乐检索社区提供大规模真实分布数据集，揭示微调鲁棒性与策展数据性能权衡，具有较高的领域影响力。

*   开源 (1.0/1.5)：依据[A_OPEN]，元数据、标注和代码公开发布，但原始音频不重新分发、特征需申请、模型权重未说明且许可证未披露，属于只开放部分核心产物，按锚点给1.0。

*   可复现性 (0.3/0.5)：依据[SCORING_SOURCE_9/17]和[SCORING_SOURCE_10/17]，论文充分披露CQT参数、增强、优化器、调度、批量、硬件、评测协议，但未明确warmup设置，存在少量缺失，按锚点给0.3。

*   工程/实践价值 (1.2/1.5)：依据[A_METHOD]和[A_OPEN]，提供了完整的构建与评测流水线、两个GitHub仓库、大规模数据处理和分层评测协议，工程实践价值高，可操作性强。

### 🚨 局限与问题

- 论文没有单独的“Limitations”章节，但在数据构建、评估方法和伦理声明中显式或隐式地承认了以下局限。
- 自动匹配存在标注噪声：版本分配仅通过 320 对人工抽检验证，正确率为 96.25%；依赖标题/表演者文本模糊匹配，对 YouTube 元数据的缺失、拼写和排版变化敏感，错误分配没有被全面量化。
- 自动标签只评估了 precision，未评估 recall：论文为 15 个最频繁标签各标注 30 条，共 450 条，双人标注 Cohen's \(\kappa=0.75\)；除 rock、blues、solo 外，precision 超过 80%，但没有报告召回率，因此标签覆盖的完整性未知。
- 手动检验发现部分近重复（正确匹配中 6.82% 被识别为近重复），论文选择保留这类样本（如 reaction videos），但这也意味着“版本”定义比传统 VI 更宽泛，可能引入与音乐版本无关的重复内容。
- 微调在干净策展数据上性能下降：CLEWS^FT+L2 相对 CLEWS^L2 在 DVI* 上的 MAP 从 0.793 降至 0.781，表明面向在野数据的鲁棒性提升与策展数据上的检索精度之间存在权衡。
- 算力限制导致实验覆盖不完整：CLEWS 只在 DiVers-S 上微调，未在更大的 DiVers-L 上微调；DVINetX 虽然覆盖了 DiVers-L，但模型规模远小于 CLEWS，两者之间的比较不能完全分离数据和模型容量的影响。
- PANN 音乐/非音乐预测是自动生成的，论文未提供该预测在 DiVers 上的精度评估；该预测被用于删除无音乐段候选和分层评测，其误差会传入下游分析和版本筛选。
- 数据集存在平台偏见：DiVers 全部来自 YouTube，数据分布受上传行为、搜索和推荐机制影响，可能继承语言、流派和表演风格上的偏好；模型在这些数据上训练可能放大这些偏见。
- 版权与数据获取限制：论文不重新分发原始音频，只发布元数据、注释和派生特征；特征需申请获取，这增加了完全复现和二次分发的难度。模型权重未在论文中说明是否公开，进一步限制了在线可用性。

---

[← 返回 2026-08-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-06/)
