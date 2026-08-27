---
title: "EmoTra-TTS: Smooth Intra-Utterance Emotion Transitions for Speech Synthesis"
date: 2026-08-26
draft: false
tags: [语音合成, 流匹配, 生成模型, 可解释性]
categories: [论文速递]
description: "语音合成 | 9.6/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.23791"
paper_digest_manual_depth: "full-text-evidence-v5"
---

# 📄 EmoTra-TTS: Smooth Intra-Utterance Emotion Transitions for Speech Synthesis

标签：#语音合成 #流匹配 #生成模型 #可解释性

**9.6/10** | 创新 1.7/2 | 严谨 1.4/1.5 | 实验 1.5/1.5 | 清晰 0.9/1 | 影响 1.2/1.5 | 开源 1.2/1.5 | 复现 0.4/0.5 | 工程 1.3/1.5

🔥 **9.6/10** | 前10% | 文档类型：方法研究 | 评分置信度：高 | #语音合成 | #流匹配 | #生成模型 #可解释性 | [arxiv](https://arxiv.org/abs/2608.23791)


### 👥 作者与机构

第一作者：Tianchi Liu（LIGHTSPEED）
通讯作者：Tianchi Liu；Zeyang Song
作者列表：Tianchi Liu、Zeyang Song、Tianrui Wang、Zhipeng Li、Chenglin Xu、Yiwen Guo（机构：LIGHTSPEED；National University of Singapore；Nanyang Technological University；Independent Researcher）

### 📌 核心摘要

这篇论文的核心判断是：连续情感控制并非给整句换 1 个标签，而是让用户指定的 VAD 轨迹在句内真正落到声学帧上。静态标签只指定终态，词级离散切换容易留下边界断层，LLM 从文本猜韵律又不宜指定何时发生。矛盾在于控制必须精确到时间轴，冻结生成器又要维持内容与身份。

作者把共享放在内容、把分工放在时间控制：离线用共享 token 解出对齐 mel 并生成监督，在线由 LLM 安排轨迹、Flow 执行帧级声学实现。LayerNorm 加固定尺度把情感方向和幅度分开。完整系统 MOS-Tra 为 3.63，公开显式情感基线最高为 2.80；去掉 Flow SFT 时 MOS-Tra 只有 2.58，说明轨迹规划并不宜替代帧级执行。

工程上的关键取舍是把 4 次 Flow 的昂贵路径留在离线数据工厂，成品模型保持单次解码，延迟为 1.74±0.42 s，接近 CosyVoice2 的 1.75±0.39 s。注入范数约束还避免情感增强变成内容损坏，并维持说话人通道稳定。结论仍绑定有限语料、逐声音训练和线性轨迹，不宜外推成开放说话人能力。这里不展开情感心理学的谱系；它只说明 VAD 轨迹需要随时间变化。

### 🏗️ 方法概述和架构

输入是文本、起始 VAD 与结果 VAD，其中 VAD 为 Valence、Arousal、Dominance 的 3 维连续坐标。连续情感控制并非给整句换 1 个标签，而是让用户指定的 VAD 轨迹在句内真正落到声学帧上。

系统先固定一串语音 token，再让 3 次 Flow 解码产生能逐帧对齐的 mel。 第 1 次用初始条件，第 2 次保留初始提示而换结果说话人嵌入作为桥接，第 3 次使用结果条件；随后在 mel 域 sigmoid crossfade 并接上结果情感尾段。共享 token 把内容边界锁在相同帧位，避免音素错位被误当成情感变化。

如下图请追踪 Part 1 到 Part 4 的同一 speech token 如何维持内容对齐，并观察顶部 crossfade 曲线怎样只在中间过渡区混合。

[![Synthetic emotion transition data generation pipeline. Samples are available on the demo page.](https://arxiv.org/html/2608.23791v1/EmoTra-emodata.png)](https://arxiv.org/html/2608.23791v1/EmoTra-emodata.png)

图中 4 个彩色段把初始情感、2 段桥接 mel 和结果情感排在同一时间轴；下方条件图标显示 token 共享而条件逐步切换。它支持可控过渡的帧对齐监督，但只用于离线合成，4 次 Flow 是明确成本边界。


这样得到的监督把可控过渡留在 mel 空间，而并非把 4 次 Flow 推理带到部署端。

上线时，5 个 VAD token 先交给语言模型规划，再由 Flow 把同一轨迹写进每 1 帧 mel。 端点间均匀加入 3 个中间点，交叉熵预测 speech token，隐藏重建把 VAD 投影锚到 wav2vec2 情感空间。Flow 将轨迹扩展到每个 mel 帧，经降维 MLP 后加到说话人通道，内容通道仍负责“说什么”。

如下图请追踪 VAD token、Projection 与 Reconstruction 到 80×T 情感嵌入的路径，并观察它怎样沿说话人分支进入 Flow Matching。

[![Overview of the EmoTra-TTS. Lower part: LLM stage with temporal VAD tokens (§3.3). Upper part: Flow decoder with frame-level emotion injection via direction–magnitude decoupled injection (§3.4).](https://arxiv.org/html/2608.23791v1/EmoTrav2.png)](https://arxiv.org/html/2608.23791v1/EmoTrav2.png)

图中下部把彩色 VAD token、文本 token 和语音 token 并排送入语言模型；右侧箭头分支上的雪花覆盖 HiFiGAN 与既有模块，火焰只标在 VAD Projection、Downsampling 和 Flow Matching 支路。这个可见的冻结范围说明语言模型安排何时转变、Flow 执行逐帧 mel，边界限于当前双阶段条件。


更具体地说，用户给出的起止 VAD 先经同一投影与重建链变成可被语言模型理解的条件表示；语言模型据此生成带有过渡韵律的语音 token。Flow 不再重新推断情感类别，而是读取按时间展开的同源表示，在初始段保持起点条件、在过渡带逐步移动、在尾段保持结果条件，再把带条件的速度场积分为连续 mel。随后声码器把 mel 还原为波形，因此过渡既受 token 层的韵律计划约束，也受帧级注入的声学轨迹约束。

训练分工也保持明确：Stage 1 学习 VAD 表示；Stage 2 冻结解码器和前 1 阶段模块，只适配注入分支。由此，语言模型安排何时转变，Flow 只把定义轨迹落实为逐帧 mel。

Stage 1 的序列把起止端点和均匀采样的中间条件置于文本 token 之前；交叉熵要求语言模型继续预测语音 token，隐藏状态重建则将 2 个端点映回 wav2vec2 特征，避免数值不同却缺乏可感知情感含义的条件表示。Stage 2 不更新主干：它从目标 mel、噪声和随机时间构造插值样本，学习在内容条件与时变说话人条件下预测速度。推理时只需单次 Flow；主干结合已生成 token 与按时间展开的注入条件还原 mel，再经声码器输出波形，离线多次解码的职责不进入用户侧生成路径。

### 💡 核心创新点

1. 针对的并非情感类别不够多，而是尚无能指定起点、终点和发生时刻的帧对齐监督。作者先让同一 speech token 在初始、桥接和结果条件下完成 3 次 Flow 解码，再在 mel 域用 sigmoid crossfade 混合，并把纯结果段接在末尾。共享 token 让不同情感下的内容边界对齐，因而能把过渡位置和形状写进训练样本。合成监督的 MOS-Emo 为 4.05、MOS-Tra 为 3.55，表明它同时保住明显情感和可听过渡；但这份证据只说明离线样本有效，仍继承底座合成偏差，也不等于在线推理需要或能够承担多次 Flow。

2. 把“何时转变”与“怎样发声”明确交给不同层。静态 VAD 只能像标签一样描述整句，只有 2 个端点又会让中间路径由模型猜测；论文在 LLM 前置端点和 3 个中间 VAD token，再把同一条轨迹插值到 Flow 的每个 mel 帧。仅 LLM SFT 的 MOS-Tra 为 2.58，加入 Flow SFT 后为 3.63，支持语言模型做韵律计划、Flow 做声学落地的互补关系。边界也同样明确：实验只验证分段线性单调过渡，尚无覆盖回落、反转、多峰情感或临时改变过渡时刻的交互控制。

3. 方向—幅度解耦的创新是把情感向量的方向与注入幅度硬拆开，而并非给 MLP 再加一项软正则。冻结解码器的说话人通道能承受什么尺度并不由 Flow Matching 损失直接约束；普通 MLP 可以靠放大范数换情感分数，最后伤害可懂度。作者以 LayerNorm 规定方向表示，再用不可训练的 epsilon=0.07 固定强度，使有效范数约 0.626，接近说话人范数 0.622。固定尺度消融在 MOS-Tra 上得到 3.63，epsilon=0.10 则把 WER 推到 5.30；这解释了“相近尺度”在当前底座的作用，但并非可直接带到其他声码器的普适定理。

4. 失败架构作为机制证据是把失败架构当作机制证据，而非只报告最优分数。Linear 注入保住了 1.65% WER，却只有 3.33 的 MOS-Tra；MLP-Add 的 WER 为 20.09%，FiLM 为 53.35%，Dir–Mag 为 1.77%。这组对照把内容崩溃与无界或可共适应的条件幅度关联起来，并说明情感更强不自动等于过渡更自然。它仍不宜排除参数量、适配范围或特定实现带来的影响，因此最稳妥的结论是：方向—幅度解耦在本文冻结 CosyVoice2 设置中是被负结果支持的工程约束。

### 📊 实验结果

MOS-Qua 评音质，MOS-Emo 评起止情感，MOS-Tra 专门评估转变是否平滑自然，因此直接检验句内轨迹。 MOS 评测有 10 名评者、每系统 200 条语音和约 250 次评分；公开基线与商业 A/B 分别使用 11 名评者 160 对、12 名评者 80 对，胜率不宜横比。

公开系统测试集的显式情感控制类别 d、e 中，EmoTra-TTS 与 Qwen3-TTS、MOSS-TTS、CosyVoice2、WeSCon 对比，MOS-Tra 为 3.63 分（越高越好）。

| 系统 | 控制方式 | WER (%) ↓ | MOS-Emo ↑ | MOS-Tra ↑ |
|---|---|---:|---:|---:|
| Qwen3-TTS | 分段提示 | 0.92 | 3.70 | 2.80 |
| MOSS-TTS | 分段提示 | 2.64 | 3.89 | 1.94 |
| WeSCon | 词级离散控制 | 2.92 | 3.53 | 2.39 |
| Synth. Data | 4 次 Flow 离线路径 | 1.49 | 4.05 | 3.55 |
| EmoTra-TTS | 连续 VAD、单次解码 | 1.77 | 3.52 | 3.63 |

MOSS-TTS 的 MOS-Emo 为 3.89 却只有 1.94 的 MOS-Tra，说明强情感会放大边界失真；完整模型超过公开显式情感基线，但尚无在 WER 上压过 Qwen3-TTS。仅 LLM SFT 的 MOS-Tra 为 2.58，加入 Flow SFT 后为 3.63。类别 d、e 的过渡测试中，EmoTra-TTS 相对 Synth. Data 的 JR-F0 为 0.025（越低越好），合成监督为 0.030。

失败表显示，情感方向学对并不够：注入幅度越界时内容可懂度会先崩。

| 固定尺度消融 | 条件 | WER (%) ↓ | MOS-Tra ↑ |
|---|---|---:|---:|
| epsilon=0.04 | 范数比 0.58 | 1.43 | 3.33 |
| epsilon=0.07 | 范数比约 1 | 1.77 | 3.63 |
| epsilon=0.10 | 范数比 1.44 | 5.30 | 1.85 |

固定尺度消融中，epsilon=0.07，范数比约 1 的 Dir–Mag 相对 epsilon=0.04 与 epsilon=0.10，MOS-Tra 为 3.63 分（越高越好）。MLP-Add WER 为 20.09%，FiLM 为 53.35%。商业系统成对偏好中，EmoTra-TTS 相对 GPT-4o mini TTS 的 Overall 偏好胜率为 72.0%（越高越好），相对 ElevenLabs v3 为 64.4%。商业接口只保留控制范式：GPT-4o mini TTS 用自然语言，ElevenLabs v3 用离散标签。

EmoTra-TTS 延迟为 1.74±0.42 s，CosyVoice2 为 1.75±0.39 s，只多 0.43% 参数；离线合成监督需 4 次 Flow、延迟 2.92±0.47 s。

### 🔬 细节详述

复现从数据筛选开始。EmoVoice-DB 有 5 名说话人和 7 类情感，作者先用 wav2vec2 VAD 预测器筛掉类别标签与连续坐标不一致的样本；起止 VAD 的 Chebyshev 距离至少为 0.35。随后枚举情感对，通过多次 Flow 合成约 100K 条过渡语音，以 Whisper large-v3 的 CER 阈值 0.10 过滤含混发音，并按 90/10 划分训练与验证。不宜跳过共享 token：若每段独立生成 token，mel 的音素边界无法对齐，crossfade 会把内容切换误作为情感过渡。

离线数据工厂的 sigmoid steepness 为 12，片段比例为 60%/15%/25%，crossfade 最长取 0.4 s 与语句时长 10% 的较小者。3 个数字分别控制初始情感、过渡带和结果情感所占的时间；它们与在线推理的 40%/30%/30% 帧级轨迹不同，前者用于生成监督，后者用于模型执行用户指定轨迹。

Stage 1 使用 3 个中间 VAD token，总计 5 个；投影网络维度为 3→256→896，重建目标空间为 1024 维。优化器是 Adam，学习率 \(1.0\times10^{-5}\)，梯度裁剪 5.0，隐藏重建损失权重 0.1。交叉熵只要求模型预测 speech token，重建项才把 VAD 表示拉回 wav2vec2 的感知情感空间，两项不宜互相替代。

Stage 2 的注入 MLP 为 1024→256→80，LayerNorm 维度 80，条件丢弃概率 0.2、梯度累积 2；解码器与 Stage 1 投影、重建模块冻结。推理按 40%/30%/30% 保持起点、线性过渡和终点，epsilon=0.07 对应约 0.626 的有效范数，接近 0.622 的说话人范数。评测还应分别保留音质、情感端点与过渡平滑度，避免用单一听感分数掩盖内容退化。论文未说明 Stage 2 学习率、batch size、训练轮数、硬件、采样步数与随机种子，完整复现仍需补齐这些配置。

### 🚨 局限与问题

每个声音单独训练，未验证任意未见说话人的零样本泛化；语种和说话人覆盖有限。细微 VAD 差异下控制不稳定，分段线性插值只是 1 阶近似。商业与公开基线评测使用不同听评池，胜率不能直接横比。

### 进一步审视

更有区分力的检验是固定说话人、文本提示与目标情感，只改变轨迹生成方式，并预先注册以下终点：轨迹误差、交接处伪影，以及盲听者是否能把转变时刻和方向辨认为指定条件。若候选方法在这些判据上均优于端点直连或离线合成参照，且没有提高 WER，才支持它确实实现了可控的句内过渡；若只改善 JR-F0、却出现可闻断裂或听者无法辨认指定变化，则应视为声学代理指标失效，而不是方法成功。

部署层面还需警惕合成情感语音的误用风险。虽然训练数据不含真人录音，连续控制能力仍可能被用于误导性表达；公开代码与后续模型发布应配合用途说明、可追溯生成标记和人工审核流程。

### 🔗 开源与复现资源

代码仓库 https://github.com/Liu-Tianchi/EmoTra-TTS 和试听页 https://liu-tianchi.github.io/EmoTra_DemoPage/ 已给出数据合成、双阶段训练、推理与评测流程。模型权重和约 100K 条合成语音未直接交付；复现还需 CosyVoice2、Whisper 与 VAD 依赖，许可限于非商业学术研究。

### 💡 研究者判断

最有力的证据并非“情绪更强”，而是把内容崩溃钉到注入范数，并让 Linear、MLP-Add、FiLM 与 epsilon 扫描给出反证。它用昂贵多次解码生产监督，再用单次冻结主干上的受限注入完成部署；代价是还并非开放说话人、任意语言、任意轨迹的通用解法。

<details>
<summary>⚖️ 评分理由（展开查看）</summary>

* 创新性 (1.7/2)：用户可指定句内连续 VAD 轨迹，且共享 token 的合成监督、双阶段条件与固定范数约束形成完整路线；轨迹仍限于端点间插值，未覆盖更复杂的真实情感动力学。

* 技术严谨性 (1.4/1.5)：论文给出问题形式化、2 阶段冻结与训练分工，并以 7 种注入架构及失效现象检验范数约束；安全范数边界只在该底座和数据设置中验证。

* 实验充分性 (1.5/1.5)：21 名听评者的分维 MOS、公开与商业对照、双阶段和尺度消融、JR-F0 与效率表共同覆盖核心主张；未见说话人和跨语言泛化没有测试，故不超过满分。

* 清晰度 (0.9/1)：从共享 token 到帧级 VAD 注入的数据流、主结果与消融的职责分明，公式和表注可追溯；部分 PDF 公式在抽取文本中粘连，降低了快速核读性。

* 影响力 (1.2/1.5)：连续过渡控制对应有声书、配音等明确场景，并以 MOS-Tra 直接评测；证据仅来自 EmoVoice-DB 的逐声音训练，尚不能据此声称广泛说话人或语言适用性。

* 开源 (1.2/1.5)：作者直接提供代码、数据合成和训练管线以及 Demo，足以复查主要流程；模型权重与约 100K 条合成训练数据未作为本文交付物，按资源完整度扣分。

* 可复现性 (0.4/0.5)：网络维度、损失、优化器、学习率、过滤阈值和尺度均有报告，代码也补强操作可追溯性；训练轮数、batch size 与硬件配置未报告，复现实验成本仍不透明。

* 工程/实践价值 (1.3/1.5)：单次解码在延迟、RTF、显存和 +0.43% 参数增量上有实测，支持在线推理开销有限；离线合成监督需多次 Flow 推理且每个声音单独训练，限制端到端部署价值。

</details>

---

[← 返回 2026-08-26 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-26/)
