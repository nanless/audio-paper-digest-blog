---
title: "Do Text-to-Music Models Really Follow Instructions? A Counterfactual Evaluation of Key and Beat Grouping"
date: 2026-08-13
draft: false
tags: [音乐生成, 生成模型, 模型评估, 基准测试]
categories: [论文速递]
description: "音乐生成 | 6.8/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.11899"
---

# 📄 Do Text-to-Music Models Really Follow Instructions? A Counterfactual Evaluation of Key and Beat Grouping

标签：#音乐生成 #生成模型 #模型评估 #基准测试

**6.8/10** | 创新 1.3/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 1/1.5

✅ **6.8/10** | 前50% | 文档类型：数据集与基准 | 评分置信度：中 | #音乐生成 | #生成模型 | #模型评估 #基准测试 | [arxiv](https://arxiv.org/abs/2608.11899)


### 👥 作者与机构

- 第一作者：Yining Wang（单位未说明）
- 通讯作者：未说明
- 作者列表：Yining Wang（单位未说明）

### 💡 毒舌点评

这篇工作用 matched neutral–A–B 三元组把“模型本来就常生成该目标”与“指令让模型改出来”拆开，直击音乐生成评测里长期被忽略的 base-rate 混淆；Stable Audio 3 四拍从 96.9% 掉到 56.3% 的反直觉结果尤其有说服力。短板是基准范围较窄，关键识别器在真实音乐上的绝对准确率不算高，自动指标与人类标注之间的偏差让部分精确数值只能作为趋势而非定论。

### 📌 核心摘要

该论文要解决的核心问题是：文本到音乐模型评测中，常用 prompt attribute agreement 会把“目标本身在输出分布中常见”误判为指令跟随能力。方法核心是引入 matched neutral–A–B 反事实对比族：同一 family 固定体裁、配器、BPM、时长、解码设置和种子，neutral 省略目标属性，A/B 交换指定目标值，并用 Occurrence/Δ/Margin 分开描述“是否出现”“是否相对中性输出增强”“是否随目标值切换而重定向”。进一步，目标先验也约束增强幅度：\(\Delta_t \in [-p_t^0, 1-p_t^0]\)，当 neutral 先验高达 0.97 时向上空间只有 0.03，因此四拍的大幅下降本质上是高先验下的反向响应而非普通“失败”。与已有工作相比，该工作不依赖孤立 prompt 命中率，而是估计 context-matched output prior，并通过目标交换度量重定向。主要结果是：key 控制上，ACE-Step 1.5 与 Stable Audio 3 Medium 的 treatment agreement 分别为 0.667 和 0.674，Δ 为 0.612 和 0.646，而 LeVo2 仅 0.055、Δ 0.026；beat grouping 上，三拍目标 Δ 在 ACE-Step 和 Stable Audio 3 上分别为 +0.250 和 +0.469，四拍目标在 Stable Audio 3 上为 -0.406。实际意义是，controllability 评测应同时报告 occurrence、enhancement 和 differentiation，否则高一致率可能被 output prior 污染。主要局限性包括：neutral 变化同时改变目标语义与 carrier、全矩阵只使用一个确定性种子、自动识别器存在可测量误差，以及范围仅限 key 和 beat grouping。

### 🔗 开源详情

- 代码：论文中未提及代码链接，但明确提到发布了“released code-and-data package”，并包含 validate/generate/score/aggregate/verify 五阶段可执行流程、locked environment、checkpoint acquisition instructions、smoke test 和 artifact index。正文未给出具体 URL。
- 模型权重：论文中未提及新模型权重下载链接，因为本工作未训练或发布新模型。使用的模型/检查点标识为：ACE-Step 1.5 使用 `acestep-v15-xl-sft`（LM 为 `acestep-5Hz-lm-4B`）；Stable Audio 3 Medium 使用 repository revision `5866e5b415a2`；LeVo2 使用 `SongGeneration-v2-large`，revision `653cbcf47161`；Mustango 使用 `declare-lab/mustango`，scheduler revision `bb2154823665`。
- 数据集：论文中未提及数据集下载链接或开源协议。自建的 counterfactual benchmark（256 families、每个 primary system 768 个 first-pass outputs）作为 code-and-data package 一部分发布；真实音乐验证数据集包括 GiantSteps（经 CMI-Bench，EDM，N=2,406）、GTZAN Keys（fault-filtered，multi-genre，N=769）、Ballroom（不含 Samba，dance，N=602）、RWC Classical + AIST（classical，N=37）、GTZAN-Rhythm v2（fault-filtered，multi-genre，N=619）；另有 CAL48 校准集和专家审计集。
- Demo：论文中未提及。
- 复现材料：论文提到附录 A 提供 instantiated cases、prompts、configurations、predictions、analysis outputs；A.2–A.3 包含 literal renderings、checkpoint/repository identifiers、full decoding settings、output modes、durations、seed handling。主矩阵为 256 families（192 key + 64 beat），每个 primary system 768 个 first-pass outputs，另有 48-family sentinel subset 重复三次。种子公式为 `seed(f,r) = int(SHA256(f:r),16) mod 2^31`，neutral/A/B 共享同一种子。解码参数样例：ACE-Step 8 steps、DiT guidance 7.0、Euler ODE、LM temperature 0.85、CFG 2.0、top-p 0.9；Stable Audio 3 8 steps、CFG 1.0、half precision、chunked decode；LeVo2 BGM、CFG 1.5、temperature 0.9、top-k 50、top-p 0、stride 5；Mustango 100 steps、guidance 3.0。论文提到包内提供 locked environment、checkpoint acquisition instructions、smoke test、reference-dataset preparation scripts、artifact index，但未给出 URL。
- 论文中引用的开源项目：ACE-Step（`acestep-v15-xl-sft`）、Stable Audio 3 Medium、LeVo2（`SongGeneration-v2-large`）、Mustango（`declare-lab/mustango`）、Beat This、CMI-Bench、GTZAN Keys、GiantSteps、Ballroom、RWC Classical、AIST、GTZAN-Rhythm v2。以上项目名称来自论文，但论文中未提及这些项目的具体链接。

### 🏗️ 方法概述和架构

该工作是一个面向文本到音乐生成模型的评测基准与反事实归因框架，而不是新生成模型。整体流程为：frozen canonical case → native-interface adapter 渲染 → 同一 family seed 下生成 neutral/A/B 三个音频 → 任务特定识别器自动评分 → family 级统计推断与外部人工/参考验证。

基本单位是 contrast family。每个 family 固定 genre、instrumentation、BPM、duration、输出模式、解码设置与 seed；neutral 成员省略被评属性，A/B 成员在同一模板上指定两个不同目标值。典型例子是 beat family：neutral 没有拍号 token，A 指定 3/4 或三拍分组，B 指定 4/4 或四拍分组。canonical record 存储 case_id、family_id、condition_role、task_type、target_a/target_b、genre、instrumentation、bpm、duration_sec 和 sentinel 等字段，以便系统无关地描述实验条件。主矩阵包含 256 个 family：key 任务 192 个（24 调 × 4 体裁 × 4 平衡 pair/context slots），beat grouping 任务 64 个（3- vs. 4-beat 目标对 × 4 体裁 × 4 palettes × 4 BPM 值），每系统对应 768 个 first-pass outputs。

不同系统通过 frozen native-interface adapters 渲染：ACE-Step 1.5 使用 keyscale 与 timesignature 原生字段；Stable Audio 3 Medium 将 “A major”“3/4 time signature” 等以文本追加到 prompt；LeVo 2 使用 pure-music 前缀与逗号分隔配器，lyrics 设为 `'.'`；Mustango 是辅助短音频接口。所有渲染均在 benchmark 冻结后不再修改，而不是为了提升结果临时调 prompt。生成时 neutral、A、B 共享同一个 family seed；种子由 `seed(f,r) = int(SHA256(f:r), 16) mod 2^31` 截断到 31 位，以控制生成噪声。

统计量有三个核心指标。Treatment agreement \(\operatorname{Acc}_f\) 衡量指定目标是否出现；\(\Delta_f\) 衡量 treatment 相对 neutral 的增强，具体为 A/B 两臂各自 treatment 得分减去 neutral 对同一目标的得分后取平均；\(\operatorname{Margin}_f\) 衡量目标交换是否重定向输出，即同一输出在 A/B 两个目标上得分的差异。目标特定版本 \(\Delta_t\) 用于三拍和四拍各自分析。Strict Acc 则要求两臂都严格偏好请求目标。论文将“有效控制”预注册为：95% 区间上 \(\Delta_t\) 和 family Margin 均大于零，并明确 Acc 只是描述性达成率。先验约束方面，对二分目标得分，neutral 先验 \(p_t^0=\mathbb{E}_f[s(y_f^0,t)]\) 将响应限制在 \(\Delta_t \in [-p_t^0, 1-p_t^0]\)；论文拒绝用剩余 headroom 归一化，因为接近 1 时不稳定，且会掩盖常见目标上的大幅负响应。

自动评分方面，key 使用 S-KEY 估计大小调，exact 为 24 类 tonic-mode 一致，MIREX 给相关调部分分；beat grouping 使用 Beat This 提取 beat/downbeat，在相邻 downbeat 区间内统计模态 beat 数，三拍或四拍之外不计入。少于两个 downbeat 或无有效区间记为零。

推断层面，primary estimand 是固定 family/context 分布与 replicate-0 seed schedule 下的条件平均响应。主要区间采用 genre 内完整 family 的 bootstrap；跨模型比较共享 family ID 进行配对 bootstrap；sentinel 则在 48 family、三个 seed 上做有限 replicate 平均。验证链路包括外部真实音乐参考（GTZAN Keys、GiantSteps、Ballroom、RWC Classical、GTZAN-Rhythm）、盲审专家标注、完整三元组人工重标，以及 off-attribute placebo 和 seed sentinel。

该方法的关键设计动机是：不能只看 prompt 命中率，因为高先验目标（如四拍分组）天然容易命中。通过 neutral 基线估计 output prior，通过 A/B 交换估计指令是否重定向，从而把“模型本来就会生成”和“指令产生了控制”分离开。

### 💡 核心创新点

- 提出 prior-aware matched neutral–A–B 反事实归因框架。之前 attribute agreement 只检查目标是否出现，无法排除输出先验；该框架用同一 family 下 neutral、target A、target B 的配对生成，分别定义 Δ_t 和 Margin，从而区分 occurrence、enhancement、differentiation。
- 将 counterfactual/minimal pair 思想迁移到音乐生成评测。区别于 NLP 中文本最小对，该工作利用生成模型可共享 seed 和 native adapters，构造可重复的 context-matched output prior 估计。
- 提出了目标分层而非模型平均的响应剖面。通过三拍与四拍对照揭示高先验目标可能毫无增强甚至负响应；例如 Stable Audio 3 四拍 Δ 为 -0.406，而三拍 Δ 为 +0.469，若只看聚合 beat Δ 会掩盖该模式。
- 明确 occurrence、enhancement、differentiation 三种非互换属性，并用先验 headroom 约束解释为何常见目标的大幅反向响应与稀有目标的正向增强不能被简单比较。
- 建立可复现的 benchmark 与诊断控制。canonical case schema、frozen adapters、完整 family inference、外部识别器验证、盲审标注、off-attribute placebo、三 seed sentinel 构成一套可审计 pipeline。

### 📊 实验结果

主要 benchmark 是自建的 key/beat grouping 反事实评测，覆盖 ACE-Step 1.5、Stable Audio 3 Medium 和 LeVo 2；每个系统 256 个 family、768 首轮输出。论文没有与传统生成模型方法论文中的 SOTA 基线对比，而是比较 neutral 与 treatment 条件、不同系统间的 Δ/Margin。表中保留主方法、最强基线与关键消融项（在此对应三类生成系统的关键目标行）。

| 任务/目标 | 系统 | Neutral | Treatment | Δ [95% CI] | Margin [95% CI] |
|---|---|---|---|---|---|
| Key all | ACE-Step 1.5 | 0.055 | 0.667 | 0.612 [0.563, 0.659] | 0.628 [0.570, 0.685] |
| Key all | Stable Audio 3 | 0.029 | 0.674 | 0.646 [0.599, 0.693] | 0.635 [0.581, 0.688] |
| Key all | LeVo2 | 0.029 | 0.055 | 0.026 [0.003, 0.049] | 0.021 [-0.005, 0.047] |
| Beat 3-beat | ACE-Step 1.5 | 0.016 | 0.266 | 0.250 [0.156, 0.344] | 0.398 [0.313, 0.484] |
| Beat 3-beat | Stable Audio 3 | 0.016 | 0.484 | 0.469 [0.344, 0.594] | 0.328 [0.211, 0.445] |
| Beat 3-beat | LeVo2 | 0.047 | 0.031 | -0.016 [-0.063, 0.031] | -0.023 [-0.078, 0.024] |
| Beat 4-beat | ACE-Step 1.5 | 0.812 | 0.859 | 0.047 [0.000, 0.109] | 0.398 [0.313, 0.484] |
| Beat 4-beat | Stable Audio 3 | 0.969 | 0.563 | -0.406 [-0.516, -0.297] | 0.328 [0.211, 0.445] |
| Beat 4-beat | LeVo2 | 0.906 | 0.859 | -0.047 [-0.109, 0.016] | -0.023 [-0.078, 0.024] |

关键结果是 key 控制：ACE-Step 与 Stable Audio 3 有高 Δ 和高 Margin，LeVo2 几乎无归因响应。MIREX 评分同样保留这一分离：ACE-Step 与 Stable Audio 3 的 treatment 分数分别为 0.763 和 0.739，LeVo2 仍接近 neutral；直接配对 ACE−Stable 的 key 指标区间均包含零，因此证据支持两个响应系统，而非 key 排行榜。

Beat grouping 中，三拍是稀有目标，ACE-Step 与 Stable Audio 3 能显著增强三拍；四拍在 neutral 中已极普遍，其高 treatment agreement 主要继承自先验。Stable Audio 3 四拍 neutral 0.969 降到 treatment 0.563，说明显式四拍指令反而降低四拍达成率。配对跨模型比较进一步显示 ACE−Stable 三拍 Δ 为 -0.219 [-0.359, -0.078]，四拍 Δ 为 +0.453 [0.344, 0.563]，说明不存在不区分目标的整体排序。

测量可信度方面，S-KEY 在 GiantSteps 和 GTZAN Keys 上 exact 为 0.506 和 0.656，MIREX 为 0.626 和 0.765。Beat This 的 balanced grouping accuracy 在 Ballroom、RWC Classical、GTZAN-Rhythm 上分别为 0.998、0.734、0.806。生成音频人类审计中，自动指标与稳定专家多数在 key 上 exact 一致率为 0.808、beat grouping 为 0.643；人口重加权后分别为 0.796 和 0.745。完整三元组人工重标后，key Δ 自动为 0.429、人工为 0.286，beat Δ 均为 0.036。三 seed sentinel 上，ACE-Step key Δ 0.609 [0.515, 0.708]，Stable Audio 3 为 0.698 [0.578, 0.807]，LeVo2 为 0.010 [0.000, 0.031]，且 Stable Audio 3 三拍/四拍符号在每个 seed 中都保持相反。

替代解释方面，off-attribute placebo 的三拍变化仅在 +0.003 到 +0.008 之间，远低于真实三拍效应；Stable Audio 3 四拍 placebo 漂移为 -0.060 [-0.109, -0.013]，也远小于真实 -0.406。Key placebo 中，ACE-Step 在无关 beat 指令扰动下 85.9% 保持 neutral key，而在真实 key treatment 下只有 9.6% 保持；Stable Audio 3 对相关和无关文本都改变 key，因此其大 Margin 比单纯移动更有证据力；LeVo2 在 placebo 下变化反而比真实 key 指令更多。

Genre 分析中，ACE-Step key Δ 从 pop 0.563 到 rock 0.688，Stable Audio 3 从 rock 0.521 到 classical 0.729，LeVo2 保持在 0.010 到 0.042。Beat 响应主要按 target 而非 genre 组织，genre-level aggregate 可以接近零但只是正负 target-specific effects 的抵消，而不是系统无视 beat 指令。

### 🔬 细节详述

- 训练数据：本论文不训练新生成模型，因此未提供训练集、数据增强或预训练细节。用于外部识别器验证的数据集包括 GiantSteps via CMI-Bench、GTZAN Keys、Ballroom、RWC Classical + AIST、GTZAN-Rhythm v2；部分数据集使用已发布 fault filter 删除重复或标注异常。
- 损失函数：未说明，不适用于该评测工作。
- 训练策略：未说明学习率、warmup、batch size、优化器、调度策略、训练轮数，因为该工作直接使用预训练系统。
- 关键超参数：ACE-Step 1.5 使用 `acestep-v15-xl-sft` DiT 与 `acestep-5Hz-lm-4B`，8 steps，DiT guidance 7.0，Euler ODE，LM temperature 0.85，CFG 2.0，top-p 0.9，thinking=True，batch 1。Stable Audio 3 Medium 使用 revision `5866e5b415a2`，8 steps，CFG 1.0，half precision，chunked decode。LeVo2 使用 `SongGeneration-v2-large`，revision `653cbcf47161`，BGM，CFG 1.5，temperature 0.9，top-k 50，top-p 0，stride 5，chunked decode。Mustango 是 auxiliary，使用 `declare-lab/mustango`，scheduler revision `bb2154823665`，100 steps，guidance 3.0。
- 训练硬件：未说明。
- 推理细节：neutral、A、B 共享同一 family seed；`seed(f,r) = int(SHA256(f:r), 16) mod 2^31`。若公开接口无 seed 参数，则在生成前立即重置随机状态。评测使用检测到 onset 后前 30 秒；15-30 秒剩余部分不循环、不 padding 地评分；不足 15 秒或无 onset 为 invalid 并得零。ACE-Step 与 Stable Audio 使用 instrumental mode；LeVo2 使用 pure-music 渲染，lyrics 为 `'.'`。
- 正则化或稳定训练技巧：未说明，因为无训练过程。生成端只使用系统自带的 CFG、temperature、top-k/top-p 等解码控制。
- 评分规则：key exact 为 24 类 tonic-mode 一致；MIREX 关系按 fifth 0.5、relative 0.3、parallel 0.2 给部分分，测试顺序为 exact、fifth、relative、parallel。Beat This 对每个检测到的 downbeat 区间计算 beat 数，模态计数为 grouping，ties 按最早出现解决；非 3/4 计数不得分。外部验证中 Ballroom 等数据集的 balanced grouping accuracy 给出定位能力。Genotype 等未说明是否使用数据增强。

### ⚖️ 评分理由

*   创新性 (1.3/2)：[A_SUMMARY][A_METHOD] 提出 prior-aware matched neutral–A–B 反事实评测框架，用 Occurrence/Δ/Margin 拆分 occurrence、enhancement、differentiation，并用目标先验 headroom 解释高先验目标的负响应；该协议明显超出传统 prompted attribute agreement 的单点命中评测，构成方法学创新。

*   技术严谨性 (1.2/1.5)：[A_METHOD][A_LIMITS] 通过 frozen native-interface adapters、共享 family seed、预注册有效控制规则和先验边界 Δ_t ∈ [-p_t^0, 1-p_t^0] 建立严谨的配对归因；统计量定义一致，未发现推导或系统逻辑错误，联合规则的解释不稳定已在方法层面用响应剖面缓解。

*   实验充分性 (1.2/1.5)：[A_RESULTS][A_LIMITS] 覆盖 256 个 family、3 个主系统与 768 首轮输出，并配有外部真实音乐验证、盲审、完整三元组人工重标、off-attribute placebo 与三 seed sentinel；但范围仅 key 和 beat grouping，S-KEY/Beat This 的真实音乐绝对准确率有限，且 open-text 系统的 carrier 长度混淆和缺少同协议传统 prompted agreement 对比削弱了公平性控制。

*   清晰度 (0.8/1)：[A_SUMMARY][A_LIMITS] 用 neutral/A/B 配对与 Occ/Δ/Margin 三属性把核心结论表达得较清楚，图 2 的 prior 与 treatment 对比直观；但有效控制的联合规则可能让正 Margin 与负 Δ_t 并存的解释对外部读者产生混淆。

*   影响力 (1.0/1.5)：[A_SUMMARY][A_RESULTS] 论文指出 controllability 评测不能只看 prompted agreement，而应同时报告 occurrence、enhancement 和 differentiation；其高先验目标导致高一致率被 output prior 污染的结论可推广到音乐生成及其他常见目标控制评测，对音频领域基准设计有实质影响。

*   开源 (0.0/1.5)：[A_OPEN] 论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：[A_OPEN][A_LIMITS] 论文披露了 canonical case schema、frozen adapters、完整解码参数、31 位种子公式和主矩阵/ sentinel 规模，复现材料较多；但 ACE-Step 历史运行缺少 contemporaneous repository/checkpoint pin，影响精确历史字节恢复，因此给 0.3。

*   工程/实践价值 (1.0/1.5)：[A_METHOD][A_OPEN] 该工作提供五阶段可执行评测管线，从依赖审计、生成、评分、聚合到验证均可复现运行，frozen adapters 和 artifact index 对后续可控生成基准工程化落地有直接价值；不训练新模型也无额外部署负担。

### 🚨 局限与问题

1. 论文明确承认的局限：
   - neutral 变化同时改变目标属性 semantics 和 carrier；A/B swap 更紧，但 off-attribute placebo 不等同于精确 carrier/tokenization 控制。
   - 自动结果继承识别器误差；beat 上接近零的效应应理解为“在当前识别器分辨率下无可检测响应”，而非精确等于零。
   - 完整三元组人类审计仅用一名 bridge rater，只能校准任务级方向与幅度，不足以支持逐模型人类排名。
   - 全矩阵只使用一个确定性 family seed；三 seed sentinel 用于诊断稳定性，不是无限制的 seed 平均。
   - 范围限于大小调 key 与三拍 vs 四拍 grouping，不包括调制、局部编辑、复合/不规则拍号等。
   - continuous controls、localized edits 以及移除约束会改变任务本身的场景可能需要另一种 neutral 参考条件。

2. 审稿人发现的潜在问题：
   - 关键识别器 S-KEY 在真实音乐上的 exact 准确率仅为约 0.51-0.66，primary key 估计存在明显测量噪声；论文没有对主结果做 de-attenuation，只报告了验证性能。
   - Open-text 系统的 neutral 是“不提 key/time signature”，而 treatment 是“追加文本字段”，因此 Δ 可能部分来自 prompt 长度、附加 token 或指令注意力变化，而非目标值本身。论文承认但未实验分离 carrier 长度效应。
   - 结果卡强调 Δ、Margin 和 target-specific response，但缺少与传统 prompted agreement 在同一生成协议下的直接对比表，读者难以量化新框架相对已有报告的修正程度。
   - 研究仅覆盖 3 个主系统与 2 个属性，泛化到更广泛 text-to-music 可控性评测仍需更多模型和属性验证。
   - “有效控制”的预注册联合规则对 beat 分组较合理，但应用中可能出现正 Margin 与负 Δ_t 并存的解释不稳定；论文用响应剖面缓解了该问题，但对外部读者仍可能造成混淆。
   - ACE-Step 的历史运行缺少 contemporaneous repository/checkpoint pin，虽不影响重跑协议，但影响精确历史字节恢复，可视为可复现性中的轻微瑕疵。

---

[← 返回 2026-08-13 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-13/)
