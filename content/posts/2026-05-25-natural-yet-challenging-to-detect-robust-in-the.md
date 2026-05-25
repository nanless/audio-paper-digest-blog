---
title: "Natural Yet Challenging to Detect: Robust In-the-Wild TTS through EMA and Dual-Scoring Prompt Selection -- Submission for WildSpoof 2026 TTS Track"
date: 2026-05-25
draft: false
tags: [语音合成, TTS, 反欺骗, 语音克隆, 提示选择, EMA, WildSpoof, 竞赛提交]
categories: [论文速递]
description: "语音合成 | 4.1/10"
hiddenInHomeList: true
---

# 📄 Natural Yet Challenging to Detect: Robust In-the-Wild TTS through EMA and Dual-Scoring Prompt Selection -- Submission for WildSpoof 2026 TTS Track

#语音合成 #TTS #反欺骗 #语音克隆 #提示选择 #EMA #WildSpoof #竞赛提交

📝 **4.1/10** | 后50% | #语音合成 | #EMA监督微调 #双评分提示选择 | #TTS #反欺骗 | [arxiv](https://arxiv.org/abs/2605.23859v1)

学术质量 3.1/7 | 影响力 1/2 | 可复现性 0/2


### 👥 作者与机构

- 作者: Renhe Sun, Jiayi Zhou, Haolin He, Yueying Feng, Jian Liu
- 机构: 未说明
- 通讯信息: 未说明
- 致谢: 未说明
- 利益冲突: 未说明
- 伦理声明: 未说明

### 💡 毒舌点评

一篇把"用EMA做微调"和"调用两个Qwen API打分"包装成"two key innovations"的竞赛技术报告，却敢声称自己的合成语音具有"the highest degree of naturalness and authenticity"——这种自我认知与客观数据之间的鸿沟，本身就是对学术诚实度的压力测试。当UTMOS 3.20在八支队伍中排名第五、WER 8.65%几乎是冠军T02（5.50%）的1.6倍、SPK-sim 0.2798在seen speakers上被T03/T06（0.478）甩开近一倍时，作者选择用a-DCF这单一指标来定义"最优"，这种选择性报告的娴熟程度，或许比他们的TTS模型更值得"研究"。更讽刺的是，a-DCF的"难以检测"与SPK-sim的崩塌很可能互为因果——检测器抓不住一个连说话人身份都模糊化的合成样本，这究竟是"自然"的胜利，还是"不像任何人"的投机？论文将Qwen2.5-Omni和Qwen3-30B-A3B的API调用描述为"novel dual-scoring prompt selection mechanism"，却对过滤阈值、保留比例、候选集构建等关键工程细节讳莫如深；把EMA这种1990年代就存在的训练技巧标榜为"successful integration"，却对beta=0.99的敏感性分析只字不提。如果这就是WildSpoof 2026的头部提交，那么该反思的或许不只是这支队伍的方法论，还有整个赛道对"欺骗能力"与"感知质量"之间trade-off的评估框架本身。

### 📌 核心摘要

本文是WildSpoof 2026挑战赛TTS赛道的技术报告，提出F5-TTS-DPS模型。以F5-TTS v1 Base为基模型，在TITW-easy和TITW-hard野外语音数据集上进行监督微调，引入EMA（指数移动平均，beta=0.99）稳定训练动态，并设计双评分提示选择机制：先用Qwen2.5-Omni（LALM）对参考音频的情感丰富度、声音表现力、提示适合度进行10分制评分过滤，再用Qwen3-30B-A3B（LLM）验证目标文本与参考文本的语义对齐。实验显示，完整系统在开发集上取得UTMOS 3.20、WER 8.65%、SPK-sim 0.508、SDS 0.108；在测试集seen speakers上获a-DCF 0.1582/0.5233/0.2562（T01/T02/T08），为所有提交中最优，但UTMOS、WER、SPK-sim均显著落后于其他顶尖队伍。

### 🔗 开源详情

/ 1.5 → 0/1.5

完全未开源。论文未提及代码链接；模型权重未释放（仅基模型F5-TTS v1 Base开源）；数据集为挑战官方数据，论文未提供获取链接；无demo页面。附录虽提供prompt模板，但核心训练代码、DPS实现、EMA集成细节均未公开，可复现性极差。

### 可复现性 / 0.5 → 0.1/0.5

极低。训练配置（lr、batch size、epoch、EMA beta）虽给出，但关键缺失包括：DPS的完整实现逻辑、过滤阈值、候选集构建、Qwen API调用参数、随机种子、硬件环境、训练时间。未开源代码且关键方法细节模糊，独立复现几乎不可能。

## 局限与问题

1. 核心方法缺乏原创性，创新声称过度：EMA和API调用过滤均为现有技术，论文将其包装为"two key innovations"和"novel mechanism"，存在严重的自我夸大。顶会审稿人将直接质疑其是否构成可发表的学术贡献。

2. a-DCF最优与感知质量劣质的矛盾未解释：a-DCF反映检测逃避能力，但UTMOS 3.20（第5/7）、DNSMOS 2.6078（第6/7）、SPK-sim 0.2798（第5/7）均处于下游水平。论文未分析是否通过牺牲说话人相似度（SPK-sim极低）来换取检测不可区分性——一种"不像任何人故难以检测"的投机策略。若属实，则"naturalness and authenticity"的声称具有误导性。

3. SPK-sim崩溃的可能机制未探究：T05的SPK-sim（0.2798）仅为T03/T06（0.478）的58%，说话人相似度严重不足。论文未分析这是否源于：（a）EMA过度平滑导致个性特征丢失；（b）DPS的音频评分偏好"通用表现力"而非"特定说话人特征"；（c）野外数据本身的说话人标签噪声。这一缺陷对语音克隆任务的实用性是致命的。

4. DPS的工程黑箱：两阶段的过滤阈值、保留比例、候选集规模、处理延迟、API成本完全未披露。作为方法核心组件，这种不透明性使方法不可复现、不可改进。特别地，Qwen2.5-Omni的"音频评分"是否可靠？其训练数据与TITW野外数据的分布差异是否导致系统性偏差？论文未验证。

5. EMA参数选择无依据：beta=0.99在10 epoch短训练中可能使EMA几乎未偏离初始化值，其实际作用存疑。未与beta=0.999、0.9、无EMA等设置对比，无法排除"EMA在此配置下为伪作用"的可能性。

6. Unseen speakers泛化性完全未知：Table 2仅标注seen speakers，未提供unseen speakers结果。语音合成系统的核心挑战之一是说话人泛化，此遗漏使方法实用性大打折扣。

7. WER 8.65%的"competitive"声称存疑：该值高于T01（6.48%）、T02（5.50%）约25-57%，论文却称其为"competitive"，标准模糊。

8. 未与最强基线系统充分对比：T01/T02在多项感知指标上显著领先，但论文未分析其方法差异，未提供可借鉴的改进方向。

9. 未来工作空洞："reinforcement learning approaches"、"co-evolution of synthesis and detection models"等表述无具体技术路径，为泛泛而谈。

10. 伦理与安全考量缺失：作为专门优化"欺骗检测逃避"的TTS系统，论文未讨论潜在的深度伪造滥用风险、技术伦理边界或防范措施。在WildSpoof竞赛框架下此讨论或许非必需，但顶会发表需更审慎。

## 开源详情

- 代码：论文中未提及代码链接
- 模型权重：未释放训练后模型；基模型预训练权重见 https://huggingface.co/SWivid/F5-TTS/tree/main/F5TTS_v1_Base
- 数据集：TITW (Text-To-Speech Synthesis In The Wild)，含TITW-easy和TITW-hard子集，为WildSpoof Challenge 2026官方数据，论文中未提供公开获取链接
- Demo：论文中未提及
- 复现材料：
  - 训练配置：最大64 sequences per batch，batch size 38,400 frames per device，EMA beta=0.99，10 epochs，learning rate \(1\times 10^{-6}\)，20,000 warmup updates，gradient accumulation steps=1，gradient clipping max norm=1.0
  - 基模型检查点：F5-TTS v1 Base（见上链接）
  - 附录A：完整的prompt模板（Audio-scoring Prompt Selection和Text-scoring Prompt Selection）
- 论文中引用的开源项目（均无直接链接）：
  - F5-TTS [1]：大规模非自回归TTS基础模型
  - CosyVoice2 [2]：基线对比模型
  - Qwen2.5-Omni [13]：LALM，用于音频评分
  - Qwen3-30B-A3B [14]：LLM，用于语义对齐验证
  - Whisper ASR [6]：WER计算
  - ESPnet2 [4]：说话人嵌入提取
  - VERSA [9]：评估工具包
  - DNSMOS [7]：语音质量评估
  - UTMOS [8]：语音自然度评估
  - AASIST [11]：反欺骗检测模型（ASVspoof 2019 LA训练）

### 🏗️ 方法概述和架构

F5-TTS-DPS采用三阶段渐进式构建：基模型初始化 → EMA稳定微调 → 双评分提示选择增强。系统以F5-TTS v1 Base为起点，通过全参数微调适配野外语音域，最终形成"基模型+EMA稳定器+提示过滤器"的串联架构。

### 基模型：F5-TTS v1 Base

F5-TTS [1] 是大规模非自回归TTS基础模型，核心采用流匹配（flow matching）技术与扩散Transformer（diffusion transformer）架构。流匹配通过直接回归条件概率路径上的向量场，替代传统��散模型的迭代去噪过程，实现高效并行生成；扩散Transformer将语音表示的生成建模为在潜在空间中逐步细化的确定性过程。该模型在Emilia数据集上预训练，具备跨多种说话风格、语言和声学条件的强泛化能力。输入为文本序列与参考音频（prompt speech），输出为目标合成语音；具体而言，F5-TTS采用语音克隆范式：以提示语音后接掩码token，预测这些掩码区域以生成目标语音。

### EMA稳定微调模块

功能与动机：野外数据（in-the-wild data）的多样性与噪声会扰乱训练动态，导致梯度不稳定、过拟合于特定录音伪影。EMA通过维护模型参数的指数移动平均，平滑参数更新轨迹，抑制噪声引起的震荡。

实现细节：设第 \(t\) 步模型参数为 \(\theta_t\)，EMA参数 \(\hat{\theta}_t\) 按 \(\hat{\theta}_t = \beta \cdot \hat{\theta}_{t-1} + (1-\beta) \cdot \theta_t\) 更新，其中 \(\beta = 0.99\)。该高beta值意味着EMA轨迹极度平滑，对近期参数变化的响应迟缓，理论上增强对噪声的鲁棒性，但也可能延缓对真实信号的学习。

训练配置：从F5-TTS v1 Base公开检查点初始化，在TITW-easy和TITW-hard上全参数训练。最大64 sequences per batch，batch size 38,400 frames per device，10 epochs，learning rate \(1\times 10^{-6}\)，20,000 warmup updates，gradient accumulation steps=1，gradient clipping max norm=1.0。

### 双评分提示选择（Dual-Scoring Prompt Selection, DPS）

核心功能：优化F5-TTS的参考音频与文本提示选择，解决野外场景中提示质量参差不齐、文本-音频对齐困难的问题。

第一阶段：音频评分提示选择（Audio-scoring Prompt Selection）

- 模型：Qwen2.5-Omni [13]（大型音频语言模型，LALM）
- 输入：候选音频样本及其对应文本
- 评分维度（10分制，总分10分）：
  1. Emotional Richness（情感丰富度，4分）：情感表达清晰度、动态范围、引人入胜的语调
  2. Voice Expressiveness（声音表现力，3分）：语调变化、自然重音、有吸引力的表达
  3. Prompt Suitability（提示适合度，3分）：特征鲜明性、记忆度、参考质量
- 评分标准：9-10分"高度表现力，优秀提示材料"；7-8分"良好表现力，适合作为提示"；5-6分"中等表现力，可接受"；0-4分"低表现力，不适合作为提示"
- 输出：单一总分（0-10的整数）
- 过滤机制：论文未明确说明阈值或保留比例

第二阶段：文本评分提示选择（Text-scoring Prompt Selection）

- 模型：Qwen3-30B-A3B [14]（大型语言模型，LLM）
- 功能：语义对齐验证，比较目标文本与参考文本
- 评分维度（各0-10分）：
  1. Prosodic Alignment（韵律对齐）：节奏模式、重音分布、语调流、音节时长
  2. Emotional Congruence（情感一致性）：情感强度、情感极性、表现力质量
  3. Linguistic Compatibility（语言兼容性）：句子结构、短语边界、句法复杂度
  4. TTS Reference Suitability（TTS参考适合度）：作为韵律模板的整体有效性
- 输入格式：`<Target Text>` 和 `<Reference Candidates>`
- 输出格式：在 `<answer> </answer>` 标签中直接输出选中的参考句子，要求 `<no-think>`（禁止思考过程输出）
- 选择机制：论文未说明是单选还是排序，未说明候选集大小

两阶段交互关系：音频评分先过滤低质量音频候选，文本评分再从通过音频筛选的候选中选择与目标文本语义最匹配的参考，形成"质量门→对齐门"的级联过滤。最终选定的提示对（音频+文本）输入F5-TTS进行语音合成。

### 关键缺失信息

论文未说明：（1）DPS应用于训练阶段、推理阶段或两者；（2）提示库的构建方式与候选集规模；（3）两阶段的过滤阈值与保留比例；（4）Qwen模型的API调用成本与延迟；（5）音频评分中"低分样本"的具体处理（丢弃/降级使用/替换）。

### 💡 核心创新点

1. EMA集成用于野外TTS稳定训练：将EMA应用于F5-TTS在噪声野外数据上的监督微调，声称缓解训练不稳定和过拟合（但EMA为通用技术，非TTS领域首创）。

2. 双评分提示选择机制：串联LALM音频质量评估与LLM语义对齐验证的两阶段提示过滤（但核心为现成API调用，无模型架构创新）。

3. 竞赛成绩：a-DCF在三个SASV系统上取得所有提交中的最优值（但其他感知指标显著落后）。

### 📊 实验结果

| Model Configuration | UTMOS | DNSMOS | WER (%) | SPK-sim | SDS |
|:---|:---:|:---:|:---:|:---:|:---:|
| CosyVoice2 | 3.65 | 2.79 | 7.76 | 0.403 | 0.343 |
| baseline (F5-TTS) | 3.06 | 2.91 | 12.31 | 0.450 | 0.283 |
| + SFT | 3.06 | 2.54 | 10.60 | 0.489 | 0.226 |
| + SFT + EMA | 3.18 | 2.61 | 9.32 | 0.492 | 0.181 |
| + SFT + EMA + DPS (Ours) | 3.20 | 2.61 | 8.65 | 0.508 | 0.108 |

关键观察：
- SFT带来SPK-sim +8.7%（0.450→0.489），WER -13.9%（12.31→10.60），但DNSMOS下降（2.91→2.54）
- EMA带来UTMOS +3.9%（3.06→3.18），WER -12.1%（10.60→9.32%），SDS -19.9%（0.226→0.181）
- DPS带来SPK-sim +3.3%（0.492→0.508），SDS -40.3%（0.181→0.108），为最大单组件增益
- 完整系统较baseline：UTMOS +4.6%，WER -29.7%，SPK-sim +12.9%，SDS -61.8%
- CosyVoice2对比：F5-TTS-DPS在UTMOS（3.20 vs 3.65）、DNSMOS（2.61 vs 2.79）、WER（8.65% vs 7.76%）上均落后，仅SPK-sim（0.508 vs 0.403）和SDS（0.108 vs 0.343）更优

### 测试集Seen Speakers结果（Table 2）

| Team ID | UTMOS | DNSMOS | WER (%) | SPK-sim | a-DCF (T01/T02/T08) |
|:---|:---:|:---:|:---:|:---:|:---|
| B01 | 2.2429 | 2.4572 | 30.26 | N/A | N/A |
| T01 | 3.9559 | 3.2270 | 6.48 | 0.2564 | 0.0453 / 0.1782 / 0.1125 |
| T02 | 3.7390 | 3.0780 | 5.50 | 0.3511 | 0.0471 / 0.1232 / 0.1125 |
| T03 | 3.4540 | 3.0261 | 33.79 | 0.4782 | 0.0445 / 0.0294 / 0.1125 |
| T04 | 2.6786 | 2.7354 | 99.28 | 0.2320 | 0.0417 / 0.0266 / 0.1098 |
| T05 (Ours) | 3.2016 | 2.6078 | 8.65 | 0.2798 | 0.1582 / 0.5233 / 0.2562 |
| T06 | 3.4909 | 2.9336 | 9.45 | 0.4775 | 0.1527 / 0.3786 / 0.2292 |
| T07 | 3.5292 | 2.7434 | 20.46 | 0.2895 | 0.0446 / 0.0266 / 0.1125 |

关键观察：
- a-DCF：T05在三项上均为最优（T01: 0.1582 vs 次优0.1527；T02: 0.5233 vs 次优0.3786；T08: 0.2562 vs 次优0.2292），但领先优势在T01/T08上微弱
- UTMOS排名：T05（3.2016）位列第5/7（低于T01 3.9559、T02 3.7390、T07 3.5292、T06 3.4909、T03 3.4540），仅高于T04 2.6786和B01 2.2429
- WER排名：T05（8.65%）位列第4/7（优于T07 20.46%、B01 30.26%、T04 99.28%），但显著差于T02（5.50%）、T01（6.48%）、T06（9.45%）
- SPK-sim排名：T05（0.2798）位列第5/7，仅高于T01（0.2564）、T04（0.2320）、B01（N/A），远低于T03（0.4782）、T06（0.4775）、T02（0.3511）、T07（0.2895）
- DNSMOS排名：T05（2.6078）位列第6/7，仅高于B01（2.4572）

### 指标说明

- UTMOS [8]：语音自然度评估，越高越好
- DNSMOS [7]：语音质量评估，越高越好
- WER [6]：基于Whisper ASR的词错误率，越低越好
- SPK-sim [4]：基于ESPnet2说话人嵌入的余弦相似度，越高越好
- SDS [11]：基于AASIST反欺骗模型的检测置信度（ASVspoof 2019 LA训练），越高越可能为合成，越低越好
- a-DCF [shim2025adcfarchitectureagnosticmetric]：基于SASV（Spoofing-Aware Speaker Verification）系统的架构无关检测代价函数，评估反欺骗鲁棒性，具体计算方式未在论文中详述

### 🔬 细节详述

- 初始化：F5-TTS v1 Base公开检查点（Emilia数据集预训练）
- 数据：TITW-easy + TITW-hard（WildSpoof Challenge官方发布）
- 优化器配置：learning rate \(1\times 10^{-6}\)，20,000 warmup steps
- EMA：\(\beta = 0.99\)，应用于全参数
- 稳定性措施：gradient clipping max norm=1.0
- 硬件/并行：未说明GPU型号、数量、分布式策略

### 评估细节
- 工具链：VERSA [9] 用于UTMOS/DNSMOS/WER/SPK-sim；AASIST [11] 用于SDS
- WER计算：Whisper ASR [6]
- SPK-sim计算：ESPnet2说话人嵌入 [4]
- a-DCF评估：对抗T01、T02、T08三个SASV系统，具体系统架构未说明

### 未报告内容
- Unseen speakers结果：Table 2明确标注"Seen Speakers"，但未提供unseen speakers的任何结果
- 统计显著性：无
- 失败案例分析：无
- 计算成本：训练时间、推理延迟、API调用开销均无
- 超参数敏感性：EMA beta、learning rate、batch size均无消融

### ⚖️ 评分理由

严重缺陷。两项所谓"核心创新"均缺乏原创性：（1）EMA是深度学习最基础的训练技巧之一，自Polyak averaging [5]以来广泛应用于生成模型，将其作为"key innovation"是对学术贡献度的严重高估；（2）双评分提示选择本质是调用两个现成Qwen API进行数据过滤，无任何模型架构、损失函数或训练算法的创新，属于工程pipeline搭建而非方法论贡献。论文自我定位为"technical report"是诚实的，但摘要和结论中"two key innovations"、"novel dual-scoring"等表述与实质内容严重不匹配。唯一可称"新"的是将这两个现有技术组合应用于WildSpoof特定场景，但这种组合性贡献不足以支撑顶会级别发表。

### 技术严谨性 / 1.5 → 0.8/1.5

多处关键缺失。DPS的核心工程细节（过滤阈值、保留比例、候选集大小、两阶段级联的具体逻辑）完���未披露，导致方法不可复现；EMA beta=0.99的选择无理论或实证依据，高beta值在仅10 epoch训练中的实际效果存疑（EMA几乎未充分累积）；论文声称a-DCF最优反映"superior naturalness and authenticity"，但该指标本质是检测逃避能力，与UTMOS/DNSMOS/SPK-sim的显著劣势直接矛盾，存在结论过度推断。此外，引用格式混乱（"[shim2025adcfarchitectureagnosticmetric]"未按标准格式），技术报告定位使其缺乏严格的Related Work和Method形式化描述。

### 实验充分性 / 1.5 → 0.7/1.5

明显不足。消融实验仅展示三组件渐进添加（SFT→+EMA→+DPS），缺乏：（1）EMA beta值的敏感性分析；（2）DPS单组件的独立贡献（DPS仅在EMA基础上添加，未测试SFT+DPS无EMA）；（3）unseen speakers的任何结果，泛化性完全未知；（4）与TITW数据集上其他公开方法的系统对比；（5）统计显著性检验；（6）失败案例分析。最严峻的是选择性报告问题：论文在摘要和结论中反复强调a-DCF最优，却对UTMOS排名第五、DNSMOS排名第六、SPK-sim排名第五的劣势避而不谈，这种"冠军叙事"与数据现实的割裂损害学术诚信。

### 清晰度 / 1 → 0.6/1

结构尚可，关键细节模糊。整体行文作为技术报告可读，但方法描述存在重大模糊：（1）DPS应用于训练时、推理时或两者？若仅训练时，则测试时提示选择机制不明；若仅推理时，则Table 1的消融逻辑不清；（2）"dual-scoring"的两阶段是串联还是并联？从描述推断为串联，但未明确说明；（3）Qwen模型的输入输出格式、API调用方式未说明；（4）a-DCF的具体计算方式、三个SASV系统的差异未解释。附录A的prompt模板虽完整，但无法弥补方法层面的描述缺失。

### 影响力 / 2 → 1.0/2

竞赛实用性有限，学术影响力低。作为竞赛提交，方法在特定评估框架下取得a-DCF最优，具有一定工程参考价值。但：（1）核心方法无泛化性，EMA+API过滤的组合难以迁移至其他TTS任务；（2）UTMOS/SPK-sim的显著落后表明该方法未推动语音合成感知质量的边界；（3）a-DCF与感知质量的trade-off未被诚实分析，对社区理解"欺骗能力"与"自然度"的关系无实质贡献；（4）论文未开源代码或模型，限制实际采用。对于语音/音频领域读者，该工作的直接受益有限。

#

### 🚨 局限与问题

1. 核心方法缺乏原创性，创新声称过度：EMA和API调用过滤均为现有技术，论文将其包装为"two key innovations"和"novel mechanism"，存在严重的自我夸大。顶会审稿人将直接质疑其是否构成可发表的学术贡献。

2. a-DCF最优与感知质量劣质的矛盾未解释：a-DCF反映检测逃避能力，但UTMOS 3.20（第5/7）、DNSMOS 2.6078（第6/7）、SPK-sim 0.2798（第5/7）均处于下游水平。论文未分析是否通过牺牲说话人相似度（SPK-sim极低）来换取检测不可区分性——一种"不像任何人故难以检测"的投机策略。若属实，则"naturalness and authenticity"的声称具有误导性。

3. SPK-sim崩溃的可能机制未探究：T05的SPK-sim（0.2798）仅为T03/T06（0.478）的58%，说话人相似度严重不足。论文未分析这是否源于：（a）EMA过度平滑导致个性特征丢失；（b）DPS的音频评分偏好"通用表现力"而非"特定说话人特征"；（c）野外数据本身的说话人标签噪声。这一缺陷对语音克隆任务的实用性是致命的。

4. DPS的工程黑箱：两阶段的过滤阈值、保留比例、候选集规模、处理延迟、API成本完全未披露。作为方法核心组件，这种不透明性使方法不可复现、不可改进。特别地，Qwen2.5-Omni的"音频评分"是否可靠？其训练数据与TITW野外数据的分布差异是否导致系统性偏差？论文未验证。

5. EMA参数选择无依据：beta=0.99在10 epoch短训练中可能使EMA几乎未偏离初始化值，其实际作用存疑。未与beta=0.999、0.9、无EMA等设置对比，无法排除"EMA在此配置下为伪作用"的可能性。

6. Unseen speakers泛化性完全未知：Table 2仅标注seen speakers，未提供unseen speakers结果。语音合成系统的核心挑战之一是说话人泛化，此遗漏使方法实用性大打折扣。

7. WER 8.65%的"competitive"声称存疑：该值高于T01（6.48%）、T02（5.50%）约25-57%，论文却称其为"competitive"，标准模糊。

8. 未与最强基线系统充分对比：T01/T02在多项感知指标上显著领先，但论文未分析其方法差异，未提供可借鉴的改进方向。

9. 未来工作空洞："reinforcement learning approaches"、"co-evolution of synthesis and detection models"等表述无具体技术路径，为泛泛而谈。

10. 伦理与安全考量缺失：作为专门优化"欺骗检测逃避"的TTS系统，论文未讨论潜在的深度伪造滥用风险、技术伦理边界或防范措施。在WildSpoof竞赛框架下此讨论或许非必需，但顶会发表需更审慎。

---

[← 返回 2026-05-25 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-05-25/)
