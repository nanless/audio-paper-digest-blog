---
title: "ChiroEcho: extending automated bat vocalisation classification beyond the learned taxonomy"
date: 2026-08-20
draft: false
tags: [音频分类, 迁移学习, 低资源, 模型评估]
categories: [论文速递]
description: "音频分类 | 6.7/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.18191"
---

# 📄 ChiroEcho: extending automated bat vocalisation classification beyond the learned taxonomy

标签：#音频分类 #迁移学习 #低资源 #模型评估

**6.7/10** | 创新 1.4/2 | 严谨 1.2/1.5 | 实验 1.1/1.5 | 清晰 0.8/1 | 影响 0.6/1.5 | 开源 0.5/1.5 | 复现 0.3/0.5 | 工程 0.8/1.5

✅ **6.7/10** | 前50% | 文档类型：方法研究 | 评分置信度：中 | #音频分类 | #迁移学习 | #低资源 #模型评估 | [arxiv](https://arxiv.org/abs/2608.18191)


### 👥 作者与机构

第一作者：Burooj Ghani（机构未说明）
通讯作者：未说明
作者列表：Burooj Ghani、Welmoed Eversteijn、Milan van Hirtum、Juan Sebastián Cañas、Vincent J. Kalkman、Dan Stowell、A. Leonie Baier（机构信息未在当前正文中完整说明）

### 💡 毒舌点评

生态声学问题很重要且迁移方向合理，但证据与配置披露有限，影响力主要集中在生物声学。 亮点是一是把自动蝙蝠声分类从封闭 taxonomy 推向开放生态变化；二是显式处理叫声随行为和环境改变的问题；三是将算法评估与保护监测的可用性连接起来；短板是作者指出叫声会随行为和环境变化且不同物种可能重叠。

### 📌 核心摘要

ChiroEcho 解决的不是简单的 35 类蝙蝠闭集分类，而是训练 taxonomy 不完整时，如何利用可靠的属级声学判断和地理分布知识恢复训练集中从未出现的物种。

模型使用共享 EfficientNet-B3 编码器和相互独立的 species/genus 两个分类头。推理时，若属预测超过阈值，且该属在录音地区只有一个物种，透明的地理规则就用该物种替换对应属的 species-head 输出；否则保留原预测。

ChirosetEurope 包含 32 个国家、35 个欧洲蝙蝠物种的 11,517 条录音。闭集测试中，ImageNet 初始化版本的 species F1/mAP/AUROC 为 0.836/0.694/0.990，genus 为 0.880/0.923/0.992；Perch 2.0 初始化获得略高 F1，但 mAP 与 AUROC 略低。

把 P. kuhlii 与 P. maderensis 完全移出训练数据和 species label space 后，species head 不可能直接答对；genus head 加地理规则仍分别得到 69.5% 与 95.4% 的录音级物种准确率。现有 11 个 region–genus 映射可解析 8 个物种，其中 6 个不在训练 taxonomy，使运行覆盖从 35/48（73%）扩到 41/48（85%）。

这是一种适用条件很窄但可解释的开放 taxonomy 扩展：只有属预测可靠、位置准确、分布表最新且区域内属到种为一对一时才能解析。它不能替代真正的开放集识别，也不能处理同一地区共存的同属物种。P. kuhlii 的地理位置还是为实验人为赋值，真实部署需用可信定位、持续更新的分布表和地区级误报监测重新验证。

如何在蝙蝠叫声跨行为、跨环境变化时保持物种识别可靠。

ChiroEcho 面向被动声学监测，把夜间录音切成蝙蝠 echolocation call 片段，使用预训练声学表示作为起点，再针对物种与行为变化进行分类适配。输入是带环境噪声和重叠叫声的声学片段，编码器产生时频表示，分类头输出超出原有 taxonomy 的类别。论文强调行为和环境会改变叫声分布，因此训练和测试不能只依赖单一录音地点评估。

论文在被动声学监测数据上比较扩展 taxonomy 前后的分类表现，并讨论叫声变化和重叠。摘要没有列出完整物种级准确率、F1 或基线表，因此正文未报告具体数值；可确认结论集中在跨类别泛化而非单一场地峰值。

作者指出叫声会随行为和环境变化且不同物种可能重叠。潜在问题是开放集未知物种、季节迁徙和设备域偏移仍可能超出实验覆盖，保护决策还需要人工复核。

### 🔗 开源详情

论文中未提及代码、模型权重或数据下载地址，也未说明数据许可。

### 🏗️ 方法概述和架构

数据层以 ChirosetEurope 为核心，包含 11,517 条、35 个欧洲蝙蝠物种的弱标签录音，另从 ECOSoundSet 构造无蝙蝠噪声类。所有录音先按元数据统一 time-expansion factor 10，再重采样到 32 kHz，裁成 20 秒片段；短录音平铺，长录音切成互不重叠片段，尾段少于 2 秒则舍弃。多片段录音在预测后按类别 max pooling 得到录音级分数。前端采用 Perch 2.0 配置：20 ms 窗、10 ms hop、1024 点 FFT、128 个 HTK mel bin，覆盖 60 Hz–16 kHz，幅度按窗口和归一化后以 1e-5 floor 做 log 压缩。

共享主干是 EfficientNet-B3。ChiroEchoIN 从 ImageNet-1k 初始化，并把期待三通道的首层卷积改成单通道；ChiroEchoPerch 把 Perch 2.0 的 JAX/Flax backbone 逐层映射到 timm/PyTorch，舍弃原先面向 14,795 个物种的分类头，映射后 stem、各 MBConv block 与末端激活余弦相似度均超过 0.999。两种初始化共享同一前端，比较时不会把谱图配置差异错当成预训练收益。

全局池化后的 embedding 接入两个独立线性头，分别预测 35 个物种和从它们映射出的 11 个属。总损失是 species multi-label BCE 与 genus multi-label BCE 之和；它不是 genus 条件化 species 的层级网络，也没有 gating，两个输出只通过共享 encoder 相互影响。这样 genus head 既给训练增加粗粒度监督，也为训练 taxonomy 外的地理解析提供直接、可阈值化的分数。

训练端到端更新主干与两个头：AdamW 学习率和 weight decay 均为 1e-4，batch size 32，梯度裁剪 1.0；验证 species mAP 连续 4 epoch 不升则学习率乘 0.1，连续 5 epoch 不升早停。类别长尾通过 min(nc,1000)^-0.5 的 capped inverse-frequency sampler 缓解；waveform mixup 以 p=0.1 使用 Beta(10,10)，目标保留两项 hard multi-label，另对每个谱图施加最大 48 bins 的频率遮挡和 192 frames 的时间遮挡。录音级 F1 使用统一阈值 0.5，mAP 和 AUROC 则跨阈值评价。

地理解析逐个 predicted genus 执行。只有 genus confidence c≥用户阈值 τ 且 GeoResolveSpecies(genus, location) 返回该地区唯一物种时，才让该物种继承属置信度并覆盖同属 species predictions；其余属不受影响。当前表有 11 个 region–genus 条目，覆盖 Gibraltar、Malta、Pantelleria、Azores、Cyprus、Canary Islands 与 Madeira。若属低于阈值、地区内同属多物种或 lookup 无答案，系统回退到原 species head，不强行解析。规则与神经网络解耦，分布变化或 taxonomy 修订可直接更新，不必重训模型。评估既比较完整 35 类模型，也构造删除目标物种的 held-out label space，检查 genus 加位置能否恢复训练 taxonomy 外的种。地理实验分别报告原始 species head、应用解析规则后的结果和错误解析风险；其中 P. maderensis 使用真实 Madeira 元数据，而 P. kuhlii 的位置是为检验规则人为赋值，不能直接当成现场部署性能。

系统数据流由被动采集、调用检测、预训练表示、分类器和生态监测输出组成；核心是把“学到的类别边界”扩展到新的叫声类型，而不是只扩大最后一层。跨物种、跨行为和跨环境测试用于区分真正的泛化与录音条件记忆。摘要没有公开网络层数、冻结层范围或采样率，故只陈述可核验的处理链。

选择迁移学习的动机是蝙蝠数据标注昂贵且生态场景难以重复采集；选择被动声学监测则避免夜间人工捕获。代价是预训练表示可能携带原 taxonomy 偏差，新的物种/行为若没有足够覆盖仍会产生漏检。

![Figure 1: Illustration of inference-stage geographic resolution using the example of Plecotus kolombatovici. (a, c) Echolocation call sequences of P. austriacus and P. kolombatovici, respectively. (b) Approximate Southern European distribution ranges of P. austriacus (orange) and P. kolombatovici (blue), with overlap shown by orange–blue hatching (ranges based on Dietz et al. [13]). Owing to insufficient acoustic recordings, P. kolombatovici is not included in the learned taxonomy. The species head may therefore assign such a recording to an acoustically similar congener class, illustrated here by P. austriacus. For a recording from Cyprus, a genus-level Plecotus prediction above the confidence threshold activates the geographic lookup (Table 1), which resolves the recording to P. kolombatovici because it is the sole regional representative of the genus.](https://arxiv.org/html/2608.18191v1/species_distribution.png)

![Figure S1: Recording abundance and relative geographic coverage across the 35 species in ChirosetEurope. Species are ordered by decreasing recording count, represented by bar height. Bar colour indicates the proportion of each species’ reported EUROBATS range states represented by at least one recording, with darker shades indicating greater coverage. Percentages are calculated against the full set of reported range states, including neighbouring countries and range states not represented in ChirosetEurope.](https://arxiv.org/html/2608.18191v1/recordings_and_relative_geographic_coverage.png)

### 💡 核心创新点

将地理先验从“在已知类别中排除不可能答案”改为“为训练 taxonomy 增加可解析的新物种”。现有 11 个 region–genus 映射横跨 7 个地区，可返回 8 个物种，其中 6 个没有进入训练 taxonomy，因此运行覆盖由 35/48 提升到 41/48，而不是仅在原有 35 类里重排概率。

显式训练 genus head，使系统在 species 不确定或缺类时仍能提供可阈值化的粗粒度证据，而不是事后聚合 species 分数。两个线性头共享 EfficientNet-B3 编码器却独立输出，以 species BCE 与 genus BCE 联合训练；这种设计不假装是端到端层级推理，也保留了两头不一致作为额外信号。

species 与 genus 推断在 97.74% 测试录音上一致；一致时 species top-1 accuracy 为 91.53%，不一致时只有 32.81%，odds ratio 22.1、p=1.2×10^-29。属头因此除了支持地理解析，还能在几乎不增加计算量的情况下提示哪些物种判断应进入人工复核。

resolve-when-unambiguous 规则完全透明且可更新：属置信度达到用户阈值后，只有地区内该属唯一对应某物种才覆盖 species head，否则原预测保持不变。分布表、taxonomy 或地方清单变化时可以独立更新 lookup，不必重新训练声学网络，适合保护监测中需要追责的决策链。

通过将 P. kuhlii 和 P. maderensis 的训练录音及输出类别全部剔除，构造了 species head 必错的 proof-of-principle，而不是把普通闭集准确率包装成开放集能力。与此同时，作者单列少于 10 个测试片段的九个稀有物种，展示 AP 可从 0.004 变为 0.335、或从 0.825 降为 0.374，避免总体 AUROC 掩盖长尾风险。

### 📊 实验结果

两种初始化整体接近：Perch 版本的 species/genus F1 分别为 0.845/0.886，略高于 ImageNet 的 0.836/0.880；ImageNet 版本则在 species mAP/AUROC（0.694/0.990）与 genus mAP/AUROC（0.923/0.992）领先。

稀有物种结果极不稳定。M. davidii 在仅 1 个 test segment 上 AP=1.000，不能据此认为可靠；M. emarginatus 从 test AP 0.004 变成 val+test 0.335，M. capaccinii 从 0.501 变成 0.817，P. austriacus 反而从 0.825 降到 0.374。

species 与 genus 两头在 97.74% 的测试录音上一致；一致时 top-1 species accuracy 为 91.53%，不一致时骤降至 32.81%，Fisher exact odds ratio 22.1、p=1.2×10^-29。两头不一致因此是很强的错误预警信号。

held-out 实验中，P. kuhlii 的 803 个 segment 最常被 species head 错分为 P. nathusii（37.4%），地理解析后的录音级准确率为 0.695；P. maderensis 的 44 个 segment 有 93.2% 最常错为 P. pipistrellus，但在 Madeira 位置下解析准确率达到 0.954。

**闭集录音级分类**

| 模型 | Species F1 | Species mAP | Species AUROC | Genus F1 | Genus mAP | Genus AUROC |
| --- | --- | --- | --- | --- | --- | --- |
| ChiroEchoIN | 0.836 | 0.694 | 0.990 | 0.880 | 0.923 | 0.992 |
| ChiroEchoPerch | 0.845 | 0.672 | 0.988 | 0.886 | 0.921 | 0.988 |

**训练 taxonomy 外物种的地理解析**

| held-out 物种 | segments | species head 最常见错误 | 错误占比 | geo-resolved accuracy↑ |
| --- | --- | --- | --- | --- |
| P. kuhlii | 803 | P. nathusii | 37.4% | 69.5% |
| P. maderensis | 44 | P. pipistrellus | 93.2% | 95.4% |

正文可确认使用蝙蝠声学片段、预训练声学编码器和分类适配；数据规模、采样率、增强、优化器、学习率和硬件未完整说明。跨环境测试的具体划分需要依论文表格核对，当前分析不把未给出的配置写成事实。

### 🔬 细节详述

ChirosetEurope 含 32 个国家、35 个欧洲蝙蝠物种的 11,517 条录音，并保留真实长尾。划分以生物夜晚和约 100 米位置组成 session group，整组只能进入一个 split，降低同场次近重复泄漏。噪声类来自 ECOSoundSet 的无蝙蝠录音；historical time-expansion 与原生 full-spectrum 录音被统一处理，而 heterodyne/frequency-division 录音因不可逆改变超声信号被排除。

录音统一到 time-expansion factor 10 和 32 kHz，再裁成 20 秒片段；不足者平铺，长录音拆为互不重叠片段，录音级分数由 segment predictions 按类别 max pooling。Perch 前端采用 20 ms 窗、10 ms hop、1024 点 FFT、128 个 HTK mel bins，覆盖 60 Hz–16 kHz。输入标准化让 ImageNet 与 Perch 初始化的比较不被前端差异混淆。

ChiroEchoIN 从 ImageNet-1k 初始化；ChiroEchoPerch 将 JAX/Flax 权重逐层映射到 timm EfficientNet-B3，stem、每个 MBConv block 与末端激活余弦相似度均超过 0.999。两者都端到端训练，AdamW 学习率和 weight decay 为 1e-4、batch 32、梯度裁剪 1.0；验证 species mAP 连续四轮不升则学习率乘 0.1，连续五轮不升早停，最终 checkpoint 分别在 epoch 14 和 22。

类别长尾通过 min(nc,1000)^-0.5 的 capped inverse-frequency sampling 缓解。waveform mixup 每个 batch 以 0.1 概率执行，系数来自 Beta(10,10)，标签保留为两个 hard multi-label；SpecAugment 每次使用最大 48 mel bins 与 192 frames 的频率/时间遮挡。评估统一阈值 0.5 计算 F1，mAP 与 AUROC 则跨阈值衡量。稀有类另列 test 与 val+test AP，避免仅凭一两个片段产生的 1.000 被误认为稳定性能。

地理 lookup 当前覆盖 7 个地区的 11 个 region–genus 映射，可返回 8 个物种。它不学习分布概率，只在唯一映射成立时覆盖，因此错误来源可以分解为 genus 预测错误、阈值设置、位置错误或分布知识错误。P. maderensis 使用真实 Madeira 位置；P. kuhlii 的 803 条录音并非来自唯一映射成立的 Pantelleria，实验人为赋予 Pantelleria 位置。这适合检验规则能否工作，却不能代表真实 Pantelleria 部署准确率。held-out 模型的 species label space 也同步删掉两类，确保恢复结果真正来自 genus 加位置，而不是分类头残留。

### ⚖️ 评分理由

* 创新性 (1.4/2)：创新点是把层级预测与外部知识组合成可扩展 taxonomy 的规则；网络本身是标准 EfficientNet 多任务分类。

* 技术严谨性 (1.2/1.5)：训练、划分、阈值逻辑和 held-out label-space 设计较严谨；P. kuhlii 使用人为位置使 proof-of-principle 与真实地理验证必须分开解读。

* 实验充分性 (1.1/1.5)：闭集、稀有类、head disagreement 与 held-out 新类均有实验，但真实开放声景和更多 region–genus 对尚未覆盖。

* 清晰度 (0.8/1)：神经预测与规则推理边界清楚，失败条件可追踪。

* 影响力 (0.6/1.5)：对欧洲蝙蝠被动监测直接有用，也能推广到其他层级物种识别；覆盖受地理唯一性强约束。

* 开源 (0.5/1.5)：正文给出 ChiroEcho GitHub 与 ChirosetEurope Zenodo，可获得代码和核心数据；训练权重开放状态仍需从仓库确认。

* 可复现性 (0.3/0.5)：前端、训练、初始化转换、划分和地理规则披露充分。

* 工程/实践价值 (0.8/1.5)：生态声学问题很重要且迁移方向合理，但证据与配置披露有限，影响力主要集中在生物声学。

### 🚨 局限与问题

地理解析只适用于一个地区内某属恰有一个物种的情况，无法解决同域同属多物种。

规则依赖位置元数据与分布表准确、及时；迁徙、边界种群、taxonomy 修订和定位误差都可能造成确定性误判。

P. kuhlii 使用人工赋予 Pantelleria 的位置，尚缺真实当地录音验证。

稀有物种每类只有 1–9 个 test segments 时 AP 波动极大，宏观指标掩盖了保护价值最高物种的不确定性。

训练与测试主要来自整理过的 repository recordings，真实长期声景中的重叠叫声、环境噪声和设备伪影仍构成明显域偏移。

论文中未提及代码、模型权重或数据下载地址，也未说明数据许可。

生态声学问题很重要且迁移方向合理，但证据与配置披露有限，影响力主要集中在生物声学。

---

[← 返回 2026-08-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-20/)
