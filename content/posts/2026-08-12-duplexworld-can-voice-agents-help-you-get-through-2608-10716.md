---
title: "DuplexWorld: Can voice agents help you get through the day?"
date: 2026-08-12
draft: false
tags: [语音交互, 端到端, 基准测试, 模型评估, 大语言模型]
categories: [论文速递]
description: "语音交互 | 8.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.10716"
---

# 📄 DuplexWorld: Can voice agents help you get through the day?

标签：#语音交互 #端到端 #基准测试 #模型评估 #大语言模型

**8.5/10** | 创新 1.4/2 | 严谨 1.1/1.5 | 实验 1/1.5 | 清晰 0.9/1 | 影响 1/1.5 | 开源 1.5/1.5 | 复现 0.3/0.5 | 工程 1.3/1.5

🔥 **8.5/10** | 前25% | 文档类型：数据集与基准 | 评分置信度：高 | #语音交互 | #端到端 | #基准测试 #模型评估 | [arxiv](https://arxiv.org/abs/2608.10716)


### 👥 作者与机构

- 第一作者：Aryan Vijay Bhosale（Centific Global Solutions Inc.；University of Maryland，标注为在 Centific 实习期间完成工作）
- 通讯作者：未说明（论文未明确标注通讯作者；Abhishek Mukherji 与 Dinesh Manocha 被标注为 † 共同指导）
- 合作者标注：Aryan Vijay Bhosale、Harshit Rajgarhia、Akhil Pothanapalli 为 ∗ 平等贡献
- 作者列表：
  - Aryan Vijay Bhosale（Centific Global Solutions Inc.；University of Maryland）
  - Harshit Rajgarhia（Centific Global Solutions Inc.）
  - Akhil Pothanapalli（Centific Global Solutions Inc.）
  - Asif Shaik（Centific Global Solutions Inc.）
  - Abhishek Mukherji（Centific Global Solutions Inc.）
  - Dinesh Manocha（University of Maryland）

### 💡 毒舌点评

把导航世界装进语音智能体评测、并在同一 harness 下用 12 个指标横扫六个世界，这套基准的设计纪律和工程完成度在同类工作中罕见地高，"探索越多到达越少"的反转结论尤其有洞察力。但全部被测系统都是闭源商业 API、judge 指标未经本语料上的人类评分校验、模拟用户比真人耐心得多，三者叠加让任何"真实部署能力"的外推都底气不足；更讽刺的是，作者自己承认 GS 可以被"不作为"通过，且 Pathfinding 中从不行动的 Nova 2 Sonic 在选择性上几乎满分，说明指标体系的对抗性设计还差最后一公里。

### 📌 核心摘要

DuplexWorld 旨在解决现有全双工语音智能体评测过度偏向"数据库工具调用"、无法覆盖日常对话多样性与超数据库操作任务的问题。其核心是构建一个包含银行、保险、旅行、医疗、物流与导航六个世界、十一种对话类型、156 个场景（144 个承载本论文全部数字）的统一评测基准，并在同一 harness 下用"agentic / 对话动态 / 自然度"三大支柱共 12 个指标打分。与已有工作（τ-Voice、EVA-Bench、Full-Duplex-Bench）相比，它首次为全双工语音智能体引入导航世界（Pathfinding），并把可靠性指标 Pass\(^3\)、努力度指标 π⁻ 与多维度自然度评测放进同一套件。在 5 个商用实时语音系统、3,825 段对话（387 小时）上的评测显示，最强系统在全部六世界上的 Pass@1 仅 0.490、turn-taking 0.653、DNSMOS 3.378，三类能力明显不共变：最会聊天的系统不是最能完成任务的，声学质量与任务能力几乎无关，π⁻ 与成功率的 Spearman 相关达 -0.85，导航世界中探索比例最高的系统反而从未到达目的地。可靠性衰减快：Pass\(^3\) 仅为 Pass@1 的约一半（领头系统 0.266 vs 0.490），没有系统能在多数场景上三试三过。实际意义在于为语音智能体的部署选型提供跨维度、可复现的评测协议，并揭示了"沉默即可赢得对话类指标"的评测漏洞。主要局限包括：所有被测系统为闭源商业 API、语音为合成而非真实录音、judge 指标未做人类评分验证、仅覆盖英语。

下图展示了DuplexWorld的整体架构，包括六个世界、十一种对话类型以及对话时间分布。

![Figure 2: DuplexWorld at a glance. (a) The six worlds of an ordinary day, the authored scenarios (one wedge per world), and conversation-time densities with hours of speech per world. (b) Six of the eleven conversation types (Section 3.2),](https://arxiv.org/html/2608.10716v1/fig_overview.png)

图中可见，基准涵盖从日常客服到复杂导航任务的多种场景，共计156个场景，语料规模达387小时。

### 🔗 开源详情

原文明确声明的发布内容：项目主页 https://duplexworld.github.io；发布用于研究使用的场景语料（scenario corpus）、标注（annotations）与评估代码（evaluation code），数据采用 CC BY 4.0，代码采用 MIT 许可。发布还包括 judge prompts、turn-taking 分段线性常数 φκ、persona 清单（含口音与语速属性）、噪声文件清单，以及四个 released-but-uncampaigned 的 Pathfinding 变体（b_reroute、e_twisty、c_crossing、d_vague）。论文未披露模型权重或推理代码；机器摘要资源状态为 has_code=是、has_model=否、has_dataset=是。具体数据集的托管平台、文件体积、下载统计等未披露。

### 🏗️ 方法概述和架构

DuplexWorld 是一个评测基准而非端到端模型，其核心方法论是"可验证世界的模拟"。一次 episode 将一名被测语音智能体与一名模拟用户在某个世界中配对，在有限 tick 内推进状态 \(s_t\)。每个世界暴露三样东西：状态对象、工具接口（tool interface）和带标注的黄金终态 \(s^*\)。智能体只能感知音频与工具返回值，只能发出音频与工具调用；状态按 \(s_{t+1}=T(s_t, a_t, u_t)\) 演进，其中 \(a_t\) 是智能体的工具调用，\(u_t\) 是模拟用户的行为。episode 结束时，终态被哈希并与黄金回放（gold replay）的终态比较——成功是世界状态的属性而非 transcript 的属性。

五大企业世界（银行、物流、医疗、保险、旅行）共享"电话客服"构造：来电者已被自助服务拒绝、智能体全权负责该通话且不得转接（该细节见原文 Section 3.1），管辖规则语料从 system prompt 中隐藏（因此"何时需要查询"本身是被测能力），凭证通过电话编解码器以语音传输（故意压力源）。五个世界仅由"什么决定正确性"区分：银行是金融犯罪法规（法定拒绝）、物流是合同拓扑（合同/物理拒绝）、医疗是依法披露矩阵（隐私拒绝）、保险是禁止理赔裁决的机构规则（机构拒绝）、旅行是平台在双方之间的有限权限（范围拒绝，模态正确的答案是"不做事"）。不安全行为在几个 regime 中被工具表面强制为不可表示，而非靠提示词劝阻：银行没有需要员工听一次性验证码的工具，医疗将索赔读取门控在已验证成员上，旅行通过负面断言与写计数而非终态检查来给"克制"打分。

Pathfinding 是一个 \(8\times 8\) 城市网格（64 个路口、105 条可走路段，两条超街区共移除 7 条边）的导航世界，街区间距均匀（大道 274 m、街道 81 m）。步行者拥有真实路口与朝向但对网格一无所知；copilot 拥有完整地图与约 40 m 精度的 GPS，但没有任何工具返回步行者的朝向，`directions()` 返回的是步行者无法执行的绝对方位角。把方位角翻译成"直走/掉头"并同时推断步行者朝向，是核心操作技能，结构上复刻了生产级路由 API 造成的信息不对称。到达评分要求通话结束时步行者正站在目的地节点（而非曾经路过），路线效率 \(\eta=\ell^\star/\ell\)（最优街区数/实际街区数）进入奖励因子（\(\eta\ge 0.75\)）。论文还报告了 heading-localisation trace：位置被所有系统基本解决（精度 0.93–1.00），而朝向没有（0.22–0.93），差距由遗漏主导而非错误断言。

Harness 参照 τ-Voice / τ²-bench 的 tick 设计：模拟时间以 200 ms 前进，模型延迟不改变事件在时间轴上的位置；工具结果下一 tick 送达，音频不会因工具延迟卡顿。用户模拟器（gpt-5.6-luna）负责写来电者/步行者的话；在 realistic 通道上，决策模型（claude-haiku-4.5）以约 2.0 s 节奏回答"是否打断/是否回馈"两个二分类问题；clean 通道禁用两者。Turn-taking 控制完全在用户侧，被测 agent 永远不会被告知任何阈值。基础设施故障重跑不计分；agent 无响应是合法计分终态；模拟器目标达成率被测量但不 gate reward。

指标套件是三大支柱 12 个指标、不构造任何 composite：对话动态（turn-taking TT、conversation progression CP、selectivity SEL，其中 CP 由四个二元维度取最小值得出：不必要工具调用、信息丢失、冗余、提问质量；SEL 是正确忽略的注入干扰比例）、agentic 能力（goal-state GS、单次奖励 Pass@1、三次至少一次 Pass@3、三次全过 Pass\(^3\)、过度努力比 ϱ⁺、努力不足占比 π⁻）、自然度（faithfulness FAI、DNSMOS/UTMOS/NISQA 三个无参考 MOS 预测器，FAI 为五个二元维度的最小值）。TT 从 EVA-Bench 逐字移植，含未应答用户话轮计数项。组件间数据流为：智能体产生的音频与工具调用 → tick 流推进世界状态 → 世界状态与模拟用户反应 → 下一 tick 的音频反馈；评测流水线从同一份三产物（合并 transcript、tick 流、隔离的 agent 音频）计算全部指标。关键设计取舍包括：固定 harness 跨六个世界以允许横向比较；用"状态哈希 vs 黄金回放"而非 transcript 判断成功；奖励是二元因子的乘积 \(r(\tau,x)=\prod_{f\in B(x)} f(\tau,x)\)，因子取自 \(\{\mathrm{GS},\mathrm{ACT},\mathrm{NLA}\}\)，Pathfinding 中为 \(\mathrm{GS}\cdot \mathbb{1}[\eta\ge 0.75]\)，不设部分分数；所有统计量带 95% percentile-bootstrap 区间。命名上，"world"指一个企业客服线或步行环境，"type"指 11 种对话形状（刻意不是难度阶梯），"scenario"指用户目标、人设、种子状态与黄金终态的联合体，"channel"指 clean/realistic 两条声学路径。

下图将三大支柱的11个指标以雷达图形式并排展示，直观呈现了各系统在不同维度上的性能权衡。

![Figure 9: All eleven metrics of Table 3, pooled over worlds and min–max scaled per axis; larger is better (SEL inverted). Sectors mark the three pillars.](https://arxiv.org/html/2608.10716v1/fig_radar11.png)

图中可见，系统在对话动态、智能体能力与自然度三个维度上的表现并非正相关，最能完成任务的系统未必最自然。

### 💡 核心创新点

1. 首个全双工语音智能体导航世界（Pathfinding）：此前所有 grounded 评测都是智能体操作数据库、世界在两次话语之间"什么也不发生"；Pathfinding 把执行器放到用户侧，世界在双方对话期间持续物理演进，智能体必须通过语言引导一个看不见网格的步行者，且没有任何工具能直接返回步行者朝向。该世界在结构上复刻了生产级路由 API 造成的信息不对称，是"超数据库操作任务"的实例化。
2. 首次在同一 harness 下将三大支柱 12 个指标并排评测：对话动态（TT/CP/SEL）、agentic 能力（GS/Pass@1/Pass@3/Pass\(^3\)/ϱ⁺/π⁻）、自然度（FAI/DNSMOS/UTMOS/NISQA），不构造 composite，允许直接观察三类能力是否共变。结果是它们明显不共变：最会聊天的系统不是最能完成任务的，声学质量与任务能力几乎无关。
3. 引入可靠性指标 Pass\(^3\) 与努力度指标 π⁻：Pass\(^3\) 要求三试三过，揭示所有系统的可靠性衰减远快于单次成功率；π⁻ 以任务自身的参考工作量为基准度量"不作为"，是唯一与成功率强负相关（ρ=-0.85）的过程指标，且不像 TT/SEL 那样可以被沉默刷高。
4. 状态哈希 vs 黄金回放的成功判定：episode 结束时的世界状态被哈希并与黄金回放终态比较，使"任务完成"成为世界状态属性而非 transcript 属性；同时将 GS 与 Pass@1 的差值分解为 ACT 与 NLA 因子，量化"到达正确状态≠做了任务"（25 个企业 cell 中 GS−Pass@1 平均 +0.255）。
5. 对 harness 配置效应的量化：公开了 VAD 阈值、用户模拟器模型、Pathfinding step cap 三个配置旋钮对 Pass@1 的移动幅度（分别可致静音、0.267→0.578、排除 capped runs 后系统差距从 3.5× 缩至 2.2×），这些旋钮此前没有被任何已发表语音基准报告过。

### 📊 实验结果

| 系统 | GS | Pass@1 | Pass\(^3\) | TT | CP | FAI | DNSMOS |
|---|---|---|---|---|---|---|---|
| Nova 2 Sonic | 0.263±.028 | 0.011±.007 | 0.006±.009 | 0.566±.021 | 1.019±.012 | 1.635±.054 | 3.172±.015 |
| Gemini-3.1-Flash-Live | 0.726±.029 | 0.398±.039 | 0.165±.054 | 0.388±.012 | 1.511±.043 | 1.720±.051 | 3.378±.008 |
| GPT-Realtime-2.1 | 0.619±.037 | 0.433±.035 | 0.212±.048 | 0.653±.018 | 1.543±.048 | 2.025±.057 | 3.350±.004 |
| GPT-Realtime-2.1-mini | 0.405±.038 | 0.188±.028 | 0.056±.028 | 0.521±.025 | 1.307±.041 | 1.631±.054 | 3.334±.009 |
| Grok Voice Think Fast 1.0 | 0.779±.031 | 0.490±.039 | 0.266±.057 | 0.635±.015 | 1.814±.051 | 1.880±.052 | 3.127±.007 |

### 关键分析与消融
| 分析项 | 数值/结论 |
|---|---|
| 可靠性衰减 | 领头系统 Pass\(^3\) 0.266 vs Pass@1 0.490；mini 系统 Pass\(^3\) 不足 Pass@1 的 1/3；无系统能在多数场景上三试三过 |
| 世界效应 | GPT-Realtime-2.1 的 Pass@1 在 Banking 0.200 到 Travel 0.674，跨度 0.474，大于任一世界内四系统最大间距（Healthcare 0.445） |
| Pathfinding 探索 vs 到达 | 探索比例：Nova 2 Sonic 51.2%、GPT-Realtime-2.1 43.4%、mini 40.3%、VTF 22.7%、Gemini 16.2%；探索比例与奖励 Spearman ρ=-0.80 |
| Pathfinding 失败归因 | 450 段对话中 88–100% 的非到达是 step-cap 结束而非走错目的地；仅约 12 段为真正错误终点 |
| 用户模拟器消融 | 固定 agent 为 Realtime-2.1，更换 caller 语言模型使 Pass@1 从 0.267 变到 0.578（跨度 0.31），MOS 预测器几乎不动 |
| VAD 阈值效应 | 默认 0.5 阈值下部分合成 persona 完全不可闻，一个 persona 在 27 次会话中 0 次触发 agent；阈值降至 0.2 后效应基本消失 |
| 指标-奖励关联 | π⁻ 与 Pass@1 的 Spearman ρ=-0.85（engaged-only -0.73）；TT ρ=-0.06；SEL ρ=-0.45（排除不行动系统后 +0.05）；CP +0.83、GS +0.77、FAI +0.58 |
| GS 与 Pass@1 的差距 | 25 个企业 cell 中 GS−Pass@1 平均 +0.255，每个 cell 均为正；最大在 Banking（平均 +0.381），最小在 Logistics（+0.093） |

### 🔬 细节详述

- 语料规模：156 个场景，其中 144 个承载论文全部数字（12 个为 released-but-uncampaigned variants 或第七世界 cut 的残留记录）；全部评测为 5 个商用实时语音系统 × 六个世界 × clean/realistic 双通道，共 3,825 段对话、387 小时（摘要数据；Abstract 中另载 "350++ hours"，以正文 387 小时为准）。企业世界每 cell 135 段对话、Pathfinding 每 cell 45 段对话。
- 对话类型：11 种 conversation types，刻意不是难度阶梯；其中仅两种需要 harness 层新增哨兵/标注机制，Pathfinding 的两种类型需要新世界而非 harness 改动。
- 模拟用户与决策模型：用户模拟器为 gpt-5.6-luna（Azure），负责写来电者/步行者的话；realistic 通道中决策模型 claude-haiku-4.5 以约 2.0 s 节奏回答"是否打断/是否回馈"两个二分类问题；clean 通道禁用两者。用户模拟器消融显示更换 caller LM 对 Pass@1 的影响超过两倍 bootstrap 半宽（0.31），而对 MOS 预测器几乎无影响。
- 语音与声学：来电者与步行者语音由 ElevenLabs 合成；control pool 为美音，regular pool 为口音多样；regular preset 以 0.7 次/分钟注入干扰事件（对照 0.0），按语料均值 14.9 分钟/通话每次约 10 个注入事件；realistic 通道还加入背景噪声、突发噪声、帧丢失、动态 muffling 与语音插入。噪声从命名录音库混合，不报告名义 SNR 而是随发布附带文件清单。
- 基础设施与计时：模拟时间以 200 ms tick 前进，模型延迟不改变事件时间轴位置；工具结果下一 tick 送达，音频不会因工具延迟卡顿。基础设施故障重跑不计分；agent 无响应是合法计分终态；agent 冻结通过 TT 的 unanswered-turn 项硬性归零。
- Pathfinding 细节：\(8\times8\) 网格（64 路口、105 条可走边，两条超街区共移除 7 条边）；大道 274 m、街道 81 m；GPS 精度约 40 m；`directions()` 返回绝对方位角而非步行者可执行的相对指令；到达要求通话结束时站在目的地节点（非曾经路过），效率阈值 \(\eta_0=0.75\)。450 段 Pathfinding 对话中 215 段在 6,000-tick 上限结束，无一达到 wall-clock cap；Nova 2 Sonic 另有提供商层 session cap 截断（Amazon Bedrock 终止会话）。
- 指标计算：TT 为 EVA-Bench 逐字移植，含未应答用户话轮计数项；CP 与 FAI 由 LLM judge 在 1–3 打分（CP 四维度取最小、FAI 五维度取最小）；三个 MOS 预测器 DNSMOS OVRL、UTMOS22、NISQA v2 mos_pred 运行在隔离的 agent 音频上；Pathfinding 的 CP/FAI 在 [0,1] 计算后仿射映射到 1–3。judge 模型分别为 gpt-5.2（CP）、claude-opus-4.6（FAI）、grok-4.3（NLA；Pathfinding 不运行 NLA）。
- 配置旋钮效应：VAD 阈值从 0.5 降到 0.2 可消除 persona 静音效应；排除 step-cap 截断的 runs 后，某系统 pooled Pass@1 从 0.383 升至 0.469，另一系统从 0.108 升至 0.213，报告的系统差距从 3.5× 缩至 2.2×。
- 企业世界深潜：88/135 场景携带 assertion（NLA 因子）；385 个 episode 无因子分解被排除，ACT/NLA 因此是上界，且排除与结果相关、对 mini 影响最大；no-tool 对话占比 2S 0.527、3.1 0.028、2.1 0.061、mini 0.052、VTF 0.041；凭证 WER（尝试凭证的 episode 上）从 2S 的 33.3% 到 2.1 的 10.4%，pooled 17.1%。
- 标题与发布：项目主页 https://duplexworld.github.io；数据集、场景语料、标注与评估代码发布供研究使用，数据 CC BY 4.0、代码 MIT；发布中包含 judge prompts、φκ 分段线性常数、persona 清单、噪声文件清单以及 released-but-uncampaigned 的四个变体（b_reroute、e_twisty、c_crossing、d_vague），这些变体没有产生论文中的任何数字。

### ⚖️ 评分理由

*   创新性 (1.4/2)：[A_METHOD] 首次引入 Pathfinding 导航世界，并首次在同一 harness 下并排评测 agentic/对话动态/自然度三大支柱共 12 个指标；[A_RESULTS] 引入 Pass^3、π⁻ 与状态哈希判定，量化 VAD 阈值等配置旋钮效应，创新点明确且可验证。

*   技术严谨性 (1.1/1.5)：[A_METHOD] 状态哈希对黄金回放、固定 tick、工具结果下一 tick 送达等协议设计严谨；但 [A_LIMITS] GS/TT/SEL 可被沉默或不作为刷高，且 Pathfinding 的 step-cap 使多数非到达是超时而非错误终点，指标协议仍有明显漏洞。

*   实验充分性 (1.0/1.5)：[A_RESULTS] 在六世界、5 个商用系统、3,825 段对话/387 小时上完成主表、双通道、消融与失败归因，基线规模充分；但 [A_LIMITS] judge 指标未在本语料上做人类评分验证，语音为合成且仅英语，模拟用户耐心过强，削弱外部效度。

*   清晰度 (0.9/1)：[A_METHOD] 对 world/type/scenario/channel 四层命名给出明确区分，指标定义、数据流和奖励因子交代清楚；[A_SUMMARY] 核心摘要准确概括六世界、12 指标与三类能力不共变的主要结论。

*   影响力 (1.0/1.5)：[A_SUMMARY] 构建面向全双工语音智能体的多世界统一评测基准，提供跨维度、可复现的评测协议；[A_RESULTS] 揭示最会聊天不等于最能完成任务、声学质量与任务能力几乎无关，对语音系统选型有直接参考价值。

*   开源 (1.5/1.5)：[A_OPEN] 明确发布场景语料、标注与评测代码，并附带 judge prompts、turn-taking 分段线性常数、persona 清单和噪声文件清单；数据采用 CC BY 4.0、代码采用 MIT，核心产物完整开放。

*   可复现性 (0.3/0.5)：[A_METHOD] 披露了 tick、通道、VAD 阈值、步数上限、固定种子、每场景 5 次等评测配置；但 [A_LIMITS] 未披露 provider 端采样参数与 API 并发设置等复现细节，属大部分充分但有少量缺失。

*   工程/实践价值 (1.3/1.5)：[A_METHOD] 同一 harness 横跨六个世界、以 tick 流和三产物统一计算全部指标，并包含 VAD preflight、基础设施故障重跑不计分、agent 无响应合法计终态等工程化设计；[A_RESULTS] 配置旋钮效应被量化，工程完成度高。

### 🚨 局限与问题

- 被测系统全部为闭源商业 API，无法复现或审计系统内部行为；不同系统的 provider 侧行为（如 Nova 2 Sonic 的 session cap）直接污染 Pathfinding 结果，作者按基础设施 censoring 处理，但该 cell 的低分无法完全归因于智能体能力。
- 所有来电者/步行者语音为合成（ElevenLabs），非真实录音，因此关于口音、人类 disfluency、真实打断模式的结论被削弱；作者指出可用的真实语音语料不提供带可验证终态的目标导向任务，这是 τ-Voice 和 EVA-Bench 共有的局限。
- judge 指标（CP、FAI、NLA）未在本语料上对人类评分做重新验证；论文报告的所有关联是"指标与指标"的关联，而非"指标与人类判断"的关联。
- 基准仅覆盖英语，不涉及其他语言与跨语言场景。
- 模拟用户比真人耐心得多：realistic 通道的打断/回馈由约 2.0 s 节奏的二元决策模型驱动，不是真实人类对话的复杂时序；模拟器目标达成率被测量但不 gate reward。
- 奖励为二元且无部分分数；GS 在黄金终态等于种子状态的场景中可通过"不作为"通过，Nova 2 Sonic 在四个企业中 34.1–41.5% 的对话达到黄金状态却几乎没有有效工具调用；TT/SEL 同样可被沉默刷高，论文承认按对话动力学单独排序会把最不具能力的系统排到前列。
- Pathfinding 的 step cap（6,000 tick）使 88–100% 的非到达事件是超时而非错误终点，导致所有 Pathfinding 零值都是下界而非测量值；排除 capped runs 会显著缩小系统间差距（3.5×→2.2×）。
- 工具是声明式 mock 且零延迟，与现实生产 API 的延迟、错误率和副作用分布有差距。
- 作者记录了一个第七世界在任务设计迭代中被移除，但未披露其具体设计细节与移除原因；12 个 released-but-uncampaigned 场景变体未参与评测，因此论文数字不能代表这些变体的难度。
- 未披露部分实现层面信息（如各商用系统具体版本化配置、provider 端采样参数、API 并发设置等），也未披露人类评分的具体规模与协议——因为它们根本未做。

---

[← 返回 2026-08-12 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-12/)
