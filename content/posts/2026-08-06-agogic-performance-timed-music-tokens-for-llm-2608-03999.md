---
title: "Agogic: Performance-Timed Music Tokens for LLM-Native Text-to-Symbolic-Music Generation"
date: 2026-08-06
draft: false
tags: [音频理解, Transformer, 模型评估]
categories: [论文速递]
description: "音频理解 | 7.9/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.03999"
---

# 📄 Agogic: Performance-Timed Music Tokens for LLM-Native Text-to-Symbolic-Music Generation

标签：#音频理解 #Transformer #模型评估

**7.9/10** | 创新 1.5/2 | 严谨 1.4/1.5 | 实验 1.3/1.5 | 清晰 0.9/1 | 影响 1.2/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 1.3/1.5

✅ **7.9/10** | 前25% | 文档类型：方法研究 | 评分置信度：高 | #音频理解 | #Transformer | #模型评估 | [arxiv](https://arxiv.org/abs/2608.03999)


### 👥 作者与机构

作者列表：Junhao Chen、Mingjin Chen、Jingjia Mao、Lin Chen、Saining Zhang、Minglin Chen、Ruocheng Wu、Liaoyuan Fan、Wenyi Li、Mingju Gao、Henghaofan Zhang、Zhihao Li、Hao Zhao、Yufei Wang、Ruqi Huang。
通讯作者：Yufei Wang、Ruqi Huang。
机构信息：论文原文未披露机构名称。

### 💡 毒舌点评

这篇论文最漂亮的地方是把“表征 vs 规模”这对长期纠缠的变量用受控交换拆开，证据链包括天花板锚定、跨规模验证、从零训练骨干、多 seed 和协议控制，确实少见。但话要说回来：PMT 本身只是 performance-event 谱系上的工程整合，作者自己也承认不主张编码原创；而最响亮的卖点是“0.8B 打败 27B”，实际限定在分布保真度、CLaMP-2 FMD 和这套受控协议内，自动听感代理不显著，人听实验尚在收集中，听起来像结论的部分其实还悬着。另一个要记住的保留是 FMD 本身协议敏感：同一模型在不同参考集上得到 159 vs 114，优势倍率在 1.6–2.8 之间漂移，900-token 预算还会奖励短样本；“减半”“1.7–1.8 倍”这类数字是某组协议下的代表值，不是普适常数。结论在协议内成立，但被标题化的风险很高。

### 📌 核心摘要

本文研究 LLM 原生文本到符号音乐生成中的表征选择问题。作者指出，现有系统的 tokenization 通常与骨干网络、训练数据和训练配方纠缠在一起，因此其独立效应从未被单独测量；本文固定骨干（预训练 Qwen3.5，0.8B–27B）、数据、训练预算和解码策略，仅跨七种 tokenization 交换表示，并将纹理指标锚定到每种表示的无模型表达上限。结果表明，表示而非模型规模是分布保真度的绑定变量：将骨干从 0.8B 扩大到 27B（34×）几乎不改变 Fréchet Music Distance，而切换表示可使其减半。论文发布性能分辨率 token 流 PMT（10 ms 时值、逐音符力度、多轨纹理；609 符号），在 0.8B 规模下取得 FMD 159，对比节拍网格的 272–286（该协议下低 1.7–1.8 倍，其他协议最高低 2.8 倍，bootstrap 置信区间不重叠），因此 0.8B 性能分辨率模型胜过 27B 节拍网格模型。该排序在一个 26M 从头训练的骨干和另一个独立的性能分辨率 tokenizer 上重现，表明这是表示类别而非单个词汇的性质。论文强调效果是分布层面的；是否可听由自动探针留下开放问题，并由预注册、有充分功效的人体研究收集数据来裁定。标题依从性较弱但可分离：轻量解码时约束使 instrument-F1 从 0.28 升至 0.60、Correct-Key 从 0.16 升至 0.35，且无分布成本。伴随 harness 和 25+ checkpoints，论文发布两个语料库：一个 86.6k 的 caption/MIDI/ABC/audio 对齐集和一个 6.25M 的带标题语料库（迄今最大的音乐数据集，符号或音频；仅被通用音频语料超越）。

### 🔗 开源详情

- 论文明确声明发布：受控评估 harness、25+ checkpoints、两个新语料库。
- 数据集包括：86,598 首四模态对齐语料（英文 caption、切片 MIDI、ABC、渲染音频）和 6.25M caption-MIDI 对语料；语料根据各来源许可证发布。
- 6.25M 语料由 Qwen3-Omni-30B 自动生成 caption，经过质量门控，并已对冻结测试集做去重。
- 论文正文未披露具体代码仓库 URL、模型权重托管平台和统一许可证清单；这些资源的具体获取地址需以论文后续发布的资源页为准。

### 🏗️ 方法概述和架构

论文将文本到符号音乐生成建模为：给定自然语言描述 \(c\)，生成符号乐谱 \(y\)；表示 \(R\) 把 \(y\) 序列化为 token 流，解码器 \(R^{-1}\) 把 token 流还原为乐谱。训练目标是建模 \(p_\theta(R(y)\mid c)\)。整体管道由三部分组成：

下图给出了 PMT 整体流水线的概览，展示文本标题、四模态语料、PMT token 流与解码输出之间的对应关系。

![Figure 1: PMT overview. Left: a caption paired with a piece from the four-modality corpus. Middle: the piece as a performance-timed token stream. Right: decoding back to MIDI.](https://arxiv.org/html/2608.03999v1/x1.png)

图中左侧为输入与编码模块，中间是扩展 Qwen3.5 词表后的垂直因果 Transformer 训练引擎，右侧为音乐范围受限采样与确定性 PMT 解码器，说明该表示可直接嵌入现有 LLM 架构而无需改动模型结构。


1. **PMT 表示**：每个音符按 onset 顺序编码为参数元组。词汇包括 PITCH（128）、DUR（200 bin，10 ms/格，覆盖 10–2000 ms）、VEL（32 级）、TSHIFT（100 bin，10 ms/格，超过 1 s 的间隔用重复 TSHIFT 表示）、TRACK（16）、PROG（129），外加四个特殊 token，共 609 个符号，约 4.0 tokens/note。量化是确定性的：\(q_t(\Delta)=\min(\lfloor \Delta/\tau\rceil,99)\)，\(q_d(d)=\mathrm{clip}(\lfloor d/\tau\rceil,1,200)\)，\(q_v(v)=\lfloor 32v/128\rfloor\)，其中 \(\tau=10\) ms。TRACK/PROG 仅在乐器变化时发射；同时发音的多个音符通过 TSHIFT0 表达。解码在量化格点上严格可逆。

下图展示了一段 MIDI 事件如何被序列化为 PMT token 流。

![Figure 2: One excerpt through the encoding. Top: MIDI event code; middle: the corresponding PMT token stream; bottom: the reconstructed music score.](https://arxiv.org/html/2608.03999v1/x2.png)

上方为 MIDI 文件存储的原始事件，中间为对应的 PMT token 序列，下方为解码得到的乐谱；可见 TRACK、PROG、PITCH、DUR、VEL 与 TSHIFT 六个参数族如何按 onset 顺序组合，且多轨与和弦信息通过 TSHIFT0 同时发音机制表达。


2. **LLM 集成配方**：扩展预训练 Qwen3.5 的词表，加入 609 个音乐符号作为均值初始化 embedding，不改变架构，单一 softmax。caption 截断到 640 tokens，训练时用 \(-100\) mask；音乐 token 流与 caption 拼接进 1024-token block，做单阶段 SFT。推理时给定 caption，自回归生成音乐 token。

3. **受控评估协议**：骨干、数据、训练预算和解码全部固定，只交换七种音乐表示，覆盖 MIDI-event（如 REMI、TSD）、grouped（如 Beat-TSD、MIDI-Like）和 ABC 编码。指标上使用天花板锚定：对每种表示先做无模型 round-trip 编解码，得到表达力上限；再计算训练模型达到该上限的比例（attainment）。分布保真度用 FMD（CLaMP-2）、JSD_ioi、Chord-time 等衡量，caption 对齐用 CLaMP-3 和属性指标衡量。

下图量化了各 tokenizer 在无模型情况下的 round-trip 保真度，即所谓天花板锚定。

![Figure 12: What each tokenizer preserves, model-free. Encode→\\rightarrowdecode of 8080 real pieces per representation; no model is involved.](https://arxiv.org/html/2608.03999v1/x15.png)

左图显示 PMT 的 onset 误差集中在 10 ms 格点内，而 Beat-TSD、REMI、MIDI-Like 的误差分布明显展宽；右图显示节拍网格表示的中位 onset 误差为 53 ms，约为 PMT（2 ms）的 23 倍，说明 PMT 在表达力上限上更接近真实演奏时序。


训练配置：10k 步（约 1.9 epochs），有效 batch 16，lr \(8\times10^{-5}\) cosine，3% warmup，bf16，block 1024。解码配置：temperature 0.95、top-k 60、最多 900 个音乐 token、音乐范围受限 logits；每单元使用 100 条冻结测试 caption，最多 3 seeds。

数据方面，论文构建并发布 86,598 首四模态对齐语料（caption/MIDI/ABC/渲染音频）和 6.25M 规模 caption-MIDI 对语料；受控实验使用 86.6k 对齐集，6.25M 语料作为扩展实验。

### 💡 核心创新点

1. **PMT tokenizer**：性能分辨率的音乐 token 流，10 ms 微时序、逐音符力度和多轨 texture；词表仅 609 符号，约 4.0 tokens/note。论文不主张 flat performance-event 编码本身全新，但首次把它放进受控交换框架与所有替代表示逐一比较。

2. **两个新数据集**：86,598 首真实音乐的四模态对齐语料，每个片段同时对齐英文 caption、MIDI、ABC 和渲染音频；以及 6.25M 规模带标题语料库，据称是迄今最大的带标题音乐数据集（符号或音频），约为 MidiCaps 的 37 倍。

3. **天花板锚定、跨家族的受控基准与发布 harness**：固定骨干、数据、预算和解码，跨 MIDI-event、grouped、ABC 三类七种 tokenization 比较。核心发现是表示在分布保真度上 Pareto 支配模型规模：0.8B PMT 胜过 27B 节拍网格，且跨规模曲线不交叉；该排序在 26M 从零训练骨干和第二个独立 performance-resolution tokenizer 上重现。

下图直观展示了在固定骨干、数据与训练预算下，不同表示如何生成截然不同的音乐纹理。

![Figure 3: Same caption, different representation (0.8B, identical backbone/data/budget). Piano rolls (colour == instrument,](https://arxiv.org/html/2608.03999v1/x7.png)

同一管弦乐配乐标题下，PMT 生成 8 轨、184 音符的织体，接近 11 轨、773 音符的真实参考；而 Beat-TSD 与 REMI 均塌陷为 5 轨稀疏轨道，说明纹理主要由表示而非模型规模决定。


4. **可操作的 caption 依从性改进**：诊断出 PMT 的 key 依从性弱是“绝对键条件差距”而非音调无能；通过解码时约束（限制 PROG token、抑制离调 PITCH），可在不重训练、不牺牲分布保真度的情况下将 instrument-F1 从 0.28 提升到 0.60，Correct-Key 从 0.16 提升到 0.35。

### 📊 实验结果

在 100 条冻结测试 caption 上，PMT 的 FMD 为 159±8，Beat-TSD 为 286±1，REMI 为 285±1；JSD_ioi 分别为 0.032±0.002 vs 0.152；Chord-time 为 36.2±5.6 vs 30.8±0.9 / 30.2±1.7（参考 36.7%）。天花板达到率 PMT 为 0.92，Beat-TSD 为 0.87，REMI 为 0.85。PerTok（另一性能分辨率 tokenizer）FMD 为 188±7，JSD_ioi 为 0.011；PerTok 的差距主要在完整性：6.8 tokens/note vs PMT 的 4.03，且单轨，无法表示多轨编配。

### 规模效应
跨 0.8B–27B，PMT 的 FMD 带为 152–159，每一节拍网格臂的 FMD 带为 272–286；曲线不交叉。对 log10 参数量拟合，各臂斜率都在噪声内接近平坦，留下约 125 点的恒定差距，规模不能侵蚀表示优势。0.8B PMT vs 27B REMI 的 FMD 差距（159 vs 272）超过 10 倍 per-seed std，被论文视为事实而非趋势。

### 从零训练验证
在 26M decoder-only Transformer 上从零训练，仅换 tokenization，PMT FMD 为 125.1±11.7（4 seeds），REMI 为 344.4±9.8；并在 POP909 上迁移成立。多乐器 1,208 首子集上，PMT FMD 为 287.9±1.0（3 seeds），Beat-TSD 为 395.3±1.1，区间不重叠。

### 消融与鲁棒性
将 PMT 的 onset 粗化到节拍网格分辨率后，它仍在 FMD 上领先节拍网格 67–129 点，说明 PMT 的优势不是“更细格点”的伪影。逐个移除性能字段会显著恶化：去掉 velocity 使 FMD 从 106.1 恶化到 697。不 mask caption、不做受限解码都不改变排序；把 MIDI-token 编码换成 ABC 会使天花板达到率从 0.69–0.92 降到 0.46–0.51，多声部数从 4.1–5.8 降到 3.0。

### MidiCaps 公共测试（200 captions）
在相同 extractor 和相同 FMD 协议下，PMT-4B（86.6k）FMD 为 196，Valid 1.00，TBT .44，CK .10，IF1 .46，Poly 10.6；PMT-4B（6.25M）FMD 为 211，CK .17，IF1 .47，Poly 10.2。已发布系统为：MIDI-LLM FMD 314、CK .32、IF1 .63；MIDILM FMD 351、TBT .70、CK .39；Amadeus FMD 380、TBT .90、CK .57；text2midi FMD 421、TBT .44、CK 无法解析；ChatMusician FMD 460、CK .36。PMT 在分布保真度上离真实音符分布最近，已发布系统远 1.5–2.3 倍。所有模型都表现出 caption-invariance 倾向；MIDI-LLM 在两个不相交 caption 域上发射几乎相同的 chord-time 分布（71% vs 72%），PMT 则随测试域移动。

### 解码时约束
在 \(n=80\) captions 上，限制 PROG token、抑制离调 PITCH 后，instrument-F1 从 0.28 升至 0.60，Correct-Key 从 0.16 升至 0.35，validity 从 .99 升至 1.00，FMD 从 266 变为 271（处于 \(n=80\) 噪声 floor 内），未重训模型。

### 结构与多样性
0.8B 下，PMT 在结构压缩率 CR 3.25（真实 3.52，节拍网格 3.01–3.09）、多样性 .403、新颖性 .075 上领先；和声转换 JSD（PCTM）几乎不随表示变化，ABC 最接近真实音符密度但在其他指标上最差。

### 🔬 细节详述

- **词表与量化**：PMT 的 music 词表是六个参数族的不交并：TRACK[0,16)、PROG[0,129)、PITCH[0,128)、DUR[1,201)、VEL[0,32)、TSHIFT[0,100)，加四个特殊 token，共 609 个符号。DUR 以 10 ms 为 bin，覆盖 10–2000 ms；TSHIFT 的 10 ms 格对超过 1 s 的间隔重复发射。
- **无损性定理**：编码器→解码器在量化格点上是恒等映射；Proposition 1 给出误差界：onset ±5 ms、duration ±5 ms、velocity ±2 级。因此生成偏离只可能来自量化格点，不来自序列化本身。
- **天花板测量**：round-trip chord-time 上限为 PMT 39.1%、REMI/Beat-TSD 35.5%、ABC 32.5%。论文提醒 chord-time 是粗略代理：PMT 在 folk 上过度和声化（25% vs 参考 13%），在 classical 上填充不足（50% vs 82%），整体 36% vs 36.7% 的匹配有混合抵消成分；因此质量结论主要放在 FMD 与 timing/duration divergence 上。
- **FMD 长度偏差**：900-token 预算下的 FMD 不能被直接理解为音乐完整性。把同一批 caption 的生成预算提高到 7000 token 后，中位音符数从 196 增至 704，FMD 从 231.2 恶化到 299.6；但按参考音符数截断后 FMD 为 229.3，与 900-token 臂相差 −1.9，远小于约 43 的 real-vs-real 噪声 floor。论文据此说明比较在协议内有效，但 FMD 对“更长生成”有度量伪影。
- **可编辑性**：PMT 是解耦的命名参数表示。在 120 首真实片段上，velocity +8 bins 实现 +26.1 的实测变化，pitch +5 精确实现 +5.00 semitone；配对 caption 实验显示 tempo、dynamics、mode 等单属性变化会按预期方向移动生成属性。
- **数据构建**：86.6k 语料来自 The Session folk、GiantMIDI、Lakh 子集和 jazz，按源分层划分（84,576 train / 2,022 test）。PMT 编码长度重尾，中位数 835 tokens，因此 1024-token block 可覆盖 58% 的片段。6.25M 语料由 Qwen3-Omni-30B 在确定性渲染音频上自动生成 caption，并经过五道 caption 质量门控（长度、不重复、音乐词项、英文比例、无拒绝/无音频伪影）。
- **训练与评估配置**：单阶段 SFT；caption 截断 640 tokens，\(-100\) mask；10k 步，有效 batch 16，lr \(8\times10^{-5}\) cosine，3% warmup，bf16，block 1024。解码 temperature 0.95、top-k 60、最多 900 个音乐 token；每个单元 100 条冻结 caption，最多 3 seeds。
- **排序分辨率**：论文明确区分“事实”和“趋势”：0.8B PMT vs 27B REMI 的差距是事实；更细粒度排序、跨规模单调性、PMT-vs-PerTok 的排序都落在噪声内，只能读作趋势。

### ⚖️ 评分理由

*   创新性 (1.5/2)：提出 PMT 性能分辨率 token 流（609 符号、约 4 tokens/note），并首次用天花板锚定的受控交换把表征与模型规模解耦，配套 86.6k 四模态语料和 6.25M 带标题语料 [A_SUMMARY][A_METHOD][S_22/86]；但作者明确不主张 flat performance-event 编码原创，故不给满分 [S_22/86]。

*   技术严谨性 (1.4/1.5)：量化器与可逆解码由确定性公式和误差界支撑，结论精确限定在分布保真度并区分事实与趋势 [A_METHOD][S_10/86][S_69/86]；FMD 协议敏感性和长度偏差被显式披露，未将协议内数字外推为普适常数 [A_LIMITS][S_13/86][S_43/86]。

*   实验充分性 (1.3/1.5)：受控交换覆盖 7 种 tokenization、0.8B–27B 骨干、26M 从零训练和 MidiCaps 公共测试，并有消融、bootstrap/seed 统计与误差分析 [A_RESULTS][S_17/86][S_44/86]；但受控主实验固定在 86.6k 语料，6.25M 仅一个未收敛 epoch，且自动 caption 未做事实准确性审计，故非满分 [A_LIMITS][S_70/86]。

*   清晰度 (0.9/1)：量化公式、词表、训练/解码超参与评估协议均写成可核对条目，附录组织完整 [A_METHOD][S_10/86][S_13/86]；正文结果表密度较高，完整协议需要跨附录交叉核对，增加一定阅读成本 [A_RESULTS][S_56/86]。

*   影响力 (1.2/1.5)：该工作给出“表征优先于规模”的可迁移结论，并建立迄今最大带标题音乐语料与跨家族受控基准，对音乐生成社区有直接方法/评测价值 [A_SUMMARY][S_20/86][S_22/86]；但当前 caption 依从性弱、可听性未验证，限制了系统级影响 [A_LIMITS]。

*   开源 (0.0/1.5)：论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：量化公式、训练步数/batch/lr/block、解码 temperature/top-k 和 100 条冻结 caption 协议均明确，足以按同样协议重跑受控交换 [A_METHOD][S_13/86]；但未给出精确随机种子，且 27B/35B 档 seed 覆盖不足，复现精确数值需自行补测 [A_LIMITS][S_69/86]。

*   工程/实践价值 (1.3/1.5)：PMT 词表仅 609 符号、约 4 tokens/note，可编辑性强；解码时约束无需重训即可将 instrument-F1 从 .28 提升到 .60、Correct-Key 从 .16 提升到 .35，并配套 86.6k/6.25M 两级语料构建流程 [A_SUMMARY][A_RESULTS][S_22/86]。

### 🚨 局限与问题

1. **近重复划分**：folk 源中同一曲调有多个社区 “settings”，划分是 setting 级而非 tune 级，近重复旋律可能跨 train/test，对大模型 NLL 造成虚高；论文已排除 >4B 模型进入 NLL 分析，并计划发布 tune 级去重划分。生成侧指标在 title 级去重控制下不受影响。
2. **可听性未验证**：自动 MLLM 强迫选择探针在表征对比上不显著（微时序 solo 钢琴控制 54/90，方向性 p=0.07；folk-heavy 生成对比 42%）；预注册的人体听感研究仍在收集中，论文不做任何方向的感知断言。
3. **大模型 seed 覆盖不足**：27B 行只有两个 seed，35B-A3B 只有单 seed；较小单元最多三个 seed。更细排序、跨规模单调性和 PMT-vs-PerTok 排序只能视为趋势。
4. **caption 依从性弱**：PMT 的 key 依从性弱（MidiCaps CK .10 vs MIDI-LLM .32），但这是绝对键条件差距而非音调无能；模型对大小调恢复高于随机，且随数据提升（exact-tonic 12%→26%，keyed-subset CK .08→.15）。解码时约束可显著改善。此外，caption 由单一 MLLM 自动生成，审计了 prompt leakage 但未审计事实准确性。
5. **受控实验规模有限**：受控比较使用 86.6k 语料，不是 6.25M；6.25M 模型只训练了一个 epoch，尚未收敛，论文不声称它是收敛模型。6.25M 初步结果已显示 held-out FMD 2.0× 改善（291.7→144.8），但完整多尺度网格仍是未来工作。
6. **FMD 协议敏感性**：同一模型在不同参考集上 FMD 不同（如 500 条分层参考 159 vs 475 条去重参考 114）；PMT 相对节拍网格的优势倍数随协议在 1.6–2.8 之间漂移；900-token 解码预算会奖励短样本，FMD 不适合直接读作完整性。论文对此有明确披露，但读者不应脱离协议引用“2 倍”结论。

---

[← 返回 2026-08-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-06/)
