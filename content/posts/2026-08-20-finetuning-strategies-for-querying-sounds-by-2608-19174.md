---
title: "Finetuning Strategies for Querying Sounds by Vocal Imitation"
date: 2026-08-20
draft: false
tags: [音频检索, 对比学习, CNN, 模型比较]
categories: [论文速递]
description: "音频检索 | 7.3/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.19174"
---

# 📄 Finetuning Strategies for Querying Sounds by Vocal Imitation

标签：#音频检索 #对比学习 #CNN #模型比较

**7.3/10** | 创新 1.3/2 | 严谨 1/1.5 | 实验 1.1/1.5 | 清晰 0.8/1 | 影响 0.7/1.5 | 开源 1/1.5 | 复现 0.3/0.5 | 工程 1.1/1.5

✅ **7.3/10** | 前50% | 文档类型：系统技术报告 | 评分置信度：中 | #音频检索 | #对比学习 | #CNN #模型比较 | [arxiv](https://arxiv.org/abs/2608.19174)


### 👥 作者与机构

第一作者：Aditya Bhattacharjee（机构未说明）
通讯作者：未说明
作者列表：Aditya Bhattacharjee、Christos Plachouras、Sungkyun Chang、Emmanouil Benetos（机构信息未在当前正文中完整说明）

### 💡 毒舌点评

任务清楚、路线有对照且工程味足；但“获胜”缺少可核验指标，读者不能仅凭摘要判断领先幅度。 亮点是一是把 vocal imitation 作为声音检索查询而非传统文本标签；二是比较冻结 CED 与联合 triplet 训练两种互补策略；三是以挑战赛完整系统为工程验证载体；短板是挑战赛设置可能不能覆盖口音、模仿风格和真实录音设备的变化；报告若缺少失败案例，也无法判断相似音色与相似事件之间的混淆。

### 📌 核心摘要

这份技术报告讨论的是 Query by Vocal Imitation：用户不用描述‘玻璃碎裂’或‘引擎启动’，只需用嘴模仿声音，系统就从音效库里检索对应参考音频。难点在于人声模仿与真实声源之间存在很大的模态鸿沟，而且不同人会用完全不同的方式模仿同一事件。

作者提交了两条路线。Submission #1 冻结 AudioSet 预训练的 CED-base，只训练 768→256 的投影头，用 VimSketch 配对数据做 supervised contrastive learning；Submission #2 共享并微调 MobileNetV3，在对比损失之外加入来自 VocalSketch 排除集的 semi-hard triplet negatives。

qvim-dev 上，Submission #1 的 MRR/NDCG 为 0.2876/0.6600，Submission #2 为 0.2932/0.6468。后者 MRR 最高并成为 AES AIMLA 2025 Challenge 获胜提交，但它的 NDCG 低于 Submission #1；两种路线体现的是 pair ranking 与类别级排序之间的不同取舍。

训练链还包含两支独立采样的波形及时频增强、VimSketch 配对正例，以及按共享 AudioSet ontology 挖掘的困难负例；部署时可预计算 gallery，只对新模仿编码并做余弦排序。最值得肯定的是报告给出了这些执行细节，而不是只写‘获胜’。最需要克制的是：两条 submission 同时改变 encoder、采样率、是否冻结、embedding 维度、数据和 loss，因而现有对比不能单独证明 triplet regularization 是提升来源。正文也未给最终 challenge test 的完整客观、主观数字，以及真实 gallery 规模、在线延迟和跨模仿者错误分析；适用边界仍是受控开发集上的音效检索。

如何用人声模仿查询目标音效并在音效库中检索。

该技术报告针对 AES AIMLA 2025 音效查询挑战，输入是一段人声模仿，输出是与其声学语义相近的音效检索结果。第一条路线冻结预训练 CED 音频编码器，通过对比学习把 vocal imitation 与目标音效拉近；第二条路线用 MobileNetV3 编码器联合 contrastive-triplet loss，并用 semi-hard negatives 增强难例区分。

报告称该系统获得 AES AIMLA 2025 Challenge 的获胜提交，并比较两条微调路线；

挑战赛设置可能不能覆盖口音、模仿风格和真实录音设备的变化；报告若缺少失败案例，也无法判断相似音色与相似事件之间的混淆。

### 🔗 开源详情

论文文本未提供代码仓库、模型权重或数据下载链接；挑战赛后补充细节不等于完整开源。

### 🏗️ 方法概述和架构

任务输入是一段人声模仿 query 和一个参考音效 gallery，输出不是封闭类别，而是按 embedding cosine similarity 排序的候选列表。两条 submission 都让 query imitation 与 reference sound 进入共享参数空间，正样本来自 VimSketch 中已知 correspondence 的配对；差异在于是否冻结 encoder、如何使用无配对数据以及损失结构。

共同的在线增强独立作用在 query/reference 两侧，每个样本至多随机选择一种变换：时间偏移 ±30%、增益 -10 到 +10 dB、音高 ±3 semitones、速度 0.8–1.2、Gaussian noise 0.001–0.015，以及帧复制、静音、删除或时频 masking。两端不共享同一随机变换，迫使模型把配对关系与具体录音扰动分开，而不是记住波形级相似性。

triplet anchor 与 positive 来自已知配对，negative 优先从共享 AudioSet ontology label 中选择，使负例声学相关却不是真正 reference；找不到同类时退回随机采样。semi-hard mining 选择比 easy negative 更接近 anchor、但仍比 positive 更远的样本。有效 semi-hard triplets 数量会动态缩放 triplet loss 权重，避免少数偶然难例破坏 contrastive 主目标。

第二条路线联合微调 MobileNetV3，使用 AdamW、cosine schedule 和一轮 warmup，最大 LR 2e-4、最小 5e-5、batch 64、训练 30 epochs，contrastive temperature 0.07、triplet margin 0.6。部署时两条路线都预计算 reference gallery embeddings；新 query 只需编码、归一化并做 cosine ranking。评测用 qvim-dev 的 pair-level MRR 与 class-level NDCG，分别观察首个正确 reference 和同类候选整体排序。第一条路线以较低可训练参数量换取稳定迁移，第二条路线则让 encoder 适应模仿声音，并把无配对的 rejected recordings 转成结构化负例；两者不是只差一个损失项。开发集比较因此同时混合了 16/32 kHz 前端、CED/MobileNetV3 容量、冻结/微调、256/960 维表示和额外数据来源。实际选型应分别看首个配对命中的 MRR 与类别排序的 NDCG，不能仅凭 Submission #2 的最高 MRR 判定所有检索目标都更好。上线前还需在目标 gallery 规模下测量索引内存、编码延迟和检索吞吐，并用不同模仿者与录音设备检查同类难负例是否引入系统性偏差。

两条路线都把查询和候选音效映射到共享嵌入空间，再按相似度排序；冻结 CED 路线强调利用通用音频表示，MobileNetV3 路线则允许任务适配。triplet 约束让正例距离小于难负例，半难负样本避免训练只看容易区分的声音。报告还记录了挑战赛后补充的细节，但未把全部数据处理和检索库规模写入摘要。

方法取舍是预训练表示稳定性与任务专用适应性的对照，而非盲目追求更大模型。报告型工作最大的工程价值在于给出可落地的训练和检索组合，最大的风险是挑战赛数据与真实声音库之间存在域差。

### 💡 核心创新点

用大规模 AudioSet 预训练表示桥接人声模仿与真实音效，而不是依赖手工声学特征。Submission #1 复用冻结的 ViT-based CED-base，把时序表示平均池化为 768 维，只训练 768→256 的投影；这验证了强预训练 encoder 在很少可训练参数下已经能形成可用的跨模态检索空间。

Submission #2 不再使用双塔，而让 query imitation 与 reference sound 共享同一个 MobileNetV3 encoder，并对 960 维输出做 L2 normalization，使训练损失与部署时 cosine retrieval 完全同口径。32 kHz、10 秒、128-band log-mel 前端保持 AudioSet 习惯，也便于继承预训练表示。

把未进入配对训练集的 practice/rejected imitations 转化为结构化 negatives，利用原本会被丢弃的数据。VimSketch 继续提供准确的 positive pairs；VocalSketch 排除集只有 class label，因此只承担 triplet negative，不被错误当作具有 reference correspondence 的正监督。

negative mining 优先从相同 AudioSet ontology 类中选择 semi-hard 样本，迫使模型区分声学上相近却并非同一 reference 的候选；无同类时才回退随机负例。triplet margin 固定为 0.6，并按 batch 内 active semi-hard triplets 数动态缩放辅助 loss，避免有效负例太少时不稳定梯度压过 supervised contrastive objective。

增强在 query/reference 两支独立采样，覆盖时间偏移、增益、音高、速度、Gaussian noise、帧复制/静音/删除和时频遮挡。独立增强要求共享空间保留事件身份而忽略两端不一致的录音与模仿扰动，比对一对样本施加同一变换更接近真实查询。

两套系统展示冻结强 encoder 的轻量路线与联合微调的高适配路线。qvim-dev 上 Submission #2 的 MRR 0.2932 高于 #1 的 0.2876，但 NDCG 0.6468 低于 #1 的 0.6600，说明改进集中在首个正确结果的位置，而非整个类别排序都变好；这一指标分歧也是方法取舍的重要组成。

报告称该系统获得 AES AIMLA 2025 Challenge 的获胜提交，并比较两条微调路线；

### 📊 实验结果

随机排序 MRR 0.0444、NDCG 0.337；2DFT 为 0.1262/0.4793；Greif et al. 基线为 0.2726/0.6463。两项 submission 都提高 MRR。

Submission #1 相比 Greif MRR 提高 0.0150，NDCG 提高 0.0137；Submission #2 MRR 再提高到 0.2932，但 NDCG 0.6468 仅略高于 Greif、低于 Submission #1 的 0.6600。

获胜结论来自 challenge 最终评测，但报告正文只在 qvim-dev 表中给出上述数值；最终 objective/subjective test 细节需要到 challenge 页面查阅。因此可直接比较的证据是 dev ranking，而非完整 test 优势幅度。

**QVIM 2025 qvim-dev**

| 系统 | MRR_ex↑ | NDCG_cat↑ |
| --- | --- | --- |
| Random | 0.0444 | 0.3370 |
| 2DFT | 0.1262 | 0.4793 |
| Greif et al. | 0.2726 | 0.6463 |
| Submission #1: frozen CED | 0.2876 | 0.6600 |
| Submission #2: MobileNetV3 + contrastive/triplet | 0.2932 | 0.6468 |

报告称该系统获得 AES AIMLA 2025 Challenge 的获胜提交，并比较两条微调路线；

已知组件为 CED、MobileNetV3、对比损失、triplet 损失和半难负样本；训练轮数、学习率、候选库规模、音频裁剪和硬件未在摘要中完整说明。推理阶段是嵌入计算加近邻排序。

### 🔬 细节详述

VimSketch 提供有 correspondence 的 reference/imitation pairs；VocalSketch 排除集只有 sound-class 标签，没有匹配 reference。Submission #2 因此把它用于 triplet negatives，而不把它伪装成 positive supervision。相同 ontology 类中的 rejected imitation 是难负例来源，但也可能携带练习录音质量或人工筛除规则，需要额外失败分析确认模型学到的是声音差异。

共享增强池包含波形时间偏移 ±30%、增益 -10 到 +10 dB、音高 ±3 semitones、time stretch 0.8–1.2、幅度 0.001–0.015 的 Gaussian noise，以及 frame duplication、silencing、removal 与时频 masking。每个样本至多随机采用一种变换，并在 query/reference 两支独立抽取；它主要覆盖录音和发声变化，没有模拟口音、年龄或模仿策略等更高层的人群差异。

Submission #2 输入为 32 kHz 的 10 秒音频，window 800、hop 320、FFT 1024，得到 128-band log-mel。MobileNetV3 classifier head 被丢弃，encoder 参与微调；AdamW 配一轮 warmup 和 cosine schedule，学习率在 5e-5 到 2e-4 间变化，batch 64、30 epochs，contrastive temperature 0.07、triplet margin 0.6。它容量更强，但与 #1 同时改变了 encoder、采样率、训练数据、embedding 维度和 loss，当前比较无法隔离单个组件贡献。

官方 qvim-dev 用 MRR 衡量已知 query-reference pair 的首个正确排序，用 NDCG_cat 衡量类别相关结果的整体排序。Random 为 0.0444/0.3370，2DFT 为 0.1262/0.4793，Greif 为 0.2726/0.6463，两个 submission 分别为 0.2876/0.6600 和 0.2932/0.6468。获胜结论来自 challenge test，但完整客观与主观 test 数字只在外部 challenge 页面，正文表格不足以量化最终领先幅度。Submission #2 已部署在 thatsoundslike.me，可展示检索行为；代码、权重、gallery 规模和在线延迟则未在正文给出，工程可用性与完整可复现性应分开判断。尤其应补充按声音类别、模仿者与录音条件拆分的错误分析，才能判断难负例收益是否稳定覆盖真实用户差异。

报告称该系统获得 AES AIMLA 2025 Challenge 的获胜提交，并比较两条微调路线；

### ⚖️ 评分理由

* 创新性 (1.3/2)：semi-hard class-aware negatives 与动态 loss weighting 是扎实的任务适配，但主要组件沿用成熟对比/三元组学习。

* 技术严谨性 (1.0/1.5)：训练配置披露具体；两条 submission 改动因素过多，无法从当前表格做严格组件归因。

* 实验充分性 (1.1/1.5)：有官方 dev 指标和强基线，但缺随机种子方差、受试者/模仿风格细分、独立 loss ablation 与正文中的完整 test 表。

* 清晰度 (0.8/1)：数据角色、两条路线与指标定义清楚。

* 影响力 (0.7/1.5)：QbVI 对音效搜索和无障碍交互有明确应用，但任务仍较专门。

* 开源 (1.0/1.5)：提供在线部署页面与 challenge 链接；正文没有给出代码仓库、模型权重或训练产物下载。

* 可复现性 (0.3/0.5)：增强、输入特征、优化器和 loss 参数较完整，数据可得性与最终评测细节仍依赖外部站点。

* 工程/实践价值 (1.1/1.5)：任务清楚、路线有对照且工程味足；但“获胜”缺少可核验指标，读者不能仅凭摘要判断领先幅度。

### 🚨 局限与问题

两条 submission 同时改变 encoder、输入采样率、训练数据、冻结策略和 loss，不能把 MRR 差异单独归因于 triplet learning。

qvim-dev 上 Submission #2 的 MRR 只比 #1 高 0.0056，NDCG 反而低 0.0132；缺少多次运行方差，差异稳定性未知。

正文未列 challenge 最终 test 的 objective/subjective 数字，只给出获胜结论与外部链接。

VocalSketch negatives 包含 practice/rejected recordings，模型可能学习录制质量或人工筛除痕迹，而非真正的细粒度声学差异。

尚缺不同口音、年龄、模仿能力、录音设备和候选库规模下的失败分析与检索延迟。

论文文本未提供代码仓库、模型权重或数据下载链接；挑战赛后补充细节不等于完整开源。

任务清楚、路线有对照且工程味足；但“获胜”缺少可核验指标，读者不能仅凭摘要判断领先幅度。

---

[← 返回 2026-08-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-20/)
