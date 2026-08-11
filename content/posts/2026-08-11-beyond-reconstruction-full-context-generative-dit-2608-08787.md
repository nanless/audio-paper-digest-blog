---
title: "Beyond Reconstruction: Full-Context Generative DiT for Music Generation"
date: 2026-08-11
draft: false
tags: [音乐生成, 流匹配, 音频生成, 生成模型]
categories: [论文速递]
description: "音乐生成 | 7.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.08787"
---

# 📄 Beyond Reconstruction: Full-Context Generative DiT for Music Generation

标签：#音乐生成 #流匹配 #音频生成 #生成模型

**7.5/10** | 创新 1.4/2 | 严谨 1.2/1.5 | 实验 1.1/1.5 | 清晰 1/1 | 影响 1/1.5 | 开源 0.2/1.5 | 复现 0.3/0.5 | 工程 1.3/1.5

✅ **7.5/10** | 前25% | 文档类型：系统技术报告 | 评分置信度：中 | #音乐生成 | #流匹配 | #音频生成 #生成模型 | [arxiv](https://arxiv.org/abs/2608.08787v1)


### 👥 作者与机构

- 第一作者：Yunjia Li（核心作者，未提供机构信息）
- 其他核心作者：Menglin Wu、Junyu Dai、Xinyue Fan、Xiangang Li、Haoxu Wang、Jianwei Yu、Huaicheng Zhang、Han Zhao
- 贡献者：Weiqin Li、Yufei Shi、Cheng Wen、Sitong Zhao、Qixi Zheng、Haina Zhu、Wei Li
- 通讯作者：未说明
- 机构信息：原文未给出任何作者的机构归属

### 💡 毒舌点评

1. **亮点**：FullDiT 将声学渲染器从“重建干净 codec token”的被动解码器，重定义为“从不完美离散计划进行全上下文生成”的主动条件流模型；EMDC 按码本预测难度匹配替换率，并用余弦 KNN 近错 token 模拟语言模型真实误差形态；4-CFG 将文本与离散计划的引导增量分开控制。问题定义、训练干预、架构调整和推理控制形成了较完整的工程闭环。
2. **短板**：8B 完整系统与 1.5B 受控消融之间存在规模鸿沟，EMDC 在最终系统上的独立贡献无法直接验证；自动指标虽在 18 项中赢下 15 项，但若干优势幅度很小，且外部盲听 Elo 点估计仅列第三；无代码、权重、数据开源，削弱了该工作的可参考与可复现价值。

### 📌 核心摘要

1. 本文聚焦混合式音乐生成系统中“声学渲染器训练时使用干净 codec token、部署时面对语言模型不完美预测”的 codec-interface exposure bias 问题。
2. 核心方法为 FullDiT，一个以非因果完全上下文条件 DiT 为骨架的流匹配渲染器，输入 8 路帧对齐 RVQ token、独立编码的歌词与全局 caption，在完整歌曲长度的连续 VAE latent 上执行生成式声学渲染。
3. 新意在于：将渲染任务从“重建”重定义为“从不完美离散计划进行全上下文生成”；提出 EMDC，按各码本教师强制 top-1 错误率进行随机替换，并从余弦 KNN 近邻中采样语义近错 token，同时保持声学目标不变；推理时提出 4-CFG，独立调节 codec、lyrics、caption 三个引导增量。
4. 主要结果：在合成损坏条件下，EMDC 使 ViSQOL 从 2.4342 提升到 3.2036；在固定语言模型 token 的盲听非平局对比中，M1 对 M3 胜率 69.7%；完整系统在 18 项自动指标中 15 项超过五个商业系统，并在 Artificial Analysis Music with Vocals Leaderboard 快照中获得 1129 Elo，点估计排名第三。
5. 实际意义：针对混合式音乐生成管线的接口失配，提供了一套从训练扰动、全上下文声学建模到推理引导的工程化解决方案，对数分钟级带词歌曲的渲染有较强参考价值。
6. 主要局限：受控消融均在 1.5B 规模完成，8B 系统只有端到端评测；自动指标优势普遍偏小，外部盲听排名非第一；未提供可复现代码、模型权重或数据集。

### 🔗 开源详情

未披露。机器摘要资源状态为 has_code=未说明、has_model=未说明、has_dataset=未说明。论文仅提供 demo 页面链接（https://selinacloudl.github.io/fulldit-demo/），未提供代码仓库、模型权重、数据集或预训练检查点；未提及任何开源许可证或计划。

### 🏗️ 方法概述和架构

**1. 系统级定位与整体流程**

完整系统由语义感知 RVQ tokenizer、层次化自回归语言模型、可选的两级旋律模块和 FullDiT 构成。tokenizer 经 Conformer 骨架与 BEST-RQ 式预训练、多任务微调和离散 token 训练，将音乐映射为 8 路 RVQ token。层次化语言模型由一个 8B 全局 LLM 预测第一层 token 流，再由一个 0.4B 局部 LLM 预测残差流，支持人声与乐器生成；封面生成场景中，旋律模块将音符级与帧级音高线索离散化为粗、细 token。FullDiT 是该系统下的声学渲染组件，参数量为 8B；受控实验使用单独训练、规模匹配的 1.5B 变体。

FullDiT 是一个非因果 DiT，在连续 VAE latent 空间中执行全曲流匹配。训练样本为配对三元组 \((x, y_{\mathrm{cap}}, y_{\mathrm{lyr}})\)，tokenizer 提取 \(c^{\mathrm{gt}} = Q_{\mathrm{RVQ}}(x)\)，固定 VAE 编码器得到 \(z_0 = E_{\mathrm{VAE}}(x)\)，EMDC 采样得到带噪条件 \(\widetilde{c} \sim q_{\mathrm{EMDC}}(\cdot \mid c^{\mathrm{gt}})\)。模型学习 \(p_\theta(z_0 \mid \widetilde{c}, y_{\mathrm{cap}}, y_{\mathrm{lyr}})\)。推理时，语言模型预测的 \(\widehat{c}\) 替换 \(\widetilde{c}\) 作为渲染器输入，FullDiT 生成连续 VAE latent，再由冻结 VAE 解码器映射为 48kHz 双声道波形。

下图展示了FullDiT声学渲染器的整体架构，包括输入条件和生成流程。

![Figure 1: FullDiT acoustic renderer. Independently encoded lyrics and captions provide textual conditions,](https://arxiv.org/html/2608.08787v1/x1.png)

图中可见，歌词和caption作为文本条件独立编码，并与RVQ tokens一起输入FullDiT，最终通过VAE解码为波形，体现了条件注入和生成过程。


**2. 核心组件**

- **帧对齐多码本 RVQ 条件注入**：对每个码本 \(k\) 维护独立的 1024 项、32 维 embedding 表，初始化自 tokenizer codebook，前 5k 步冻结后参与训练。第 \(i\) 帧的 8 个码本 embedding 求和后经线性投影到模型宽度，再与第 \(i\) 帧音频 latent 相加，作为 Transformer 初始输入。帧级相加保证离散计划与音频 latent 在时间上一一对应。

- **非因果完整歌曲上下文 Transformer 骨干**：1.5B 消融配置为 28 层、隐藏宽度 1536、12 个 query 头、2 个 KV 头、头维度 128。注意力在完整音频 latent 序列上双向进行，因此后续副歌、远端动机等未来信息可参与当前帧声学决策。局部 30 秒窗口的 M2a 在语言模型条件下 PQ 从 8.213 降至 6.011，说明歌曲级上下文不可舍弃。

- **渲染侧文本条件编码**：
  - Caption 为紧凑 JSON 字符串，由冻结的 Qwen3-Embedding-0.6B 编码后投影到模型宽度；
  - Lyrics 经共享 token embedding 后送入 8 层 encoder；
  - 两者合并后总 token 上限 2048，其中 caption 与 lyrics 各最多 1024；
  - 在每一层 Transformer 中，音频状态作为 query，与歌词、caption、音频拼接后的 key/value 做注意力，文本条件从第 0 层到最后一层持续注入。

- **流匹配目标**：令 \(\epsilon \sim \mathcal{N}(0,I)\)，定义线性条件路径
\[
z_\sigma = (1-\sigma)z_0 + \sigma\epsilon, \qquad v^\star_\sigma = \epsilon - z_0,
\]
训练损失为
\[
\mathcal{L}_{\mathrm{FM}} = \mathbb{E}_{z_0,\widetilde{c},y,\epsilon,\sigma}\left[\|v_\theta(z_\sigma,\sigma,\widetilde{c},y) - v^\star_\sigma\|_2^2\right].
\]
其中 \(\sigma\) 从 shift=1.0 的 logit-normal 分布采样。EMDC 只改变条件 \(\widetilde{c}\)，不改变 \(z_0\) 与 \(v^\star_\sigma\)，因此替换 token 不会成为新的声学监督信号。

- **EMDC 错误匹配干扰条件**：对每一帧、每一码本独立采样替换掩码 \(M_{i,k} \sim \mathrm{Bernoulli}(p_k)\)，其中 \(p_k = 1 - \mathrm{Acc@1}_k\)。替换 token 按
\[
q_k(j \mid c) \propto \exp\left(\cos(e_k(j), e_k(c)) / \tau\right)
\]
从对应码本的余弦 top-\(K_k\) 邻域中采样，排除查询 token 自身。表 1 中 \(p_k\) 从码本 0 的 0.625 增至码本 7 的 0.892，\(K_k\) 从 20 增至 180。训练采用三阶段课程：0–30k 步使用干净条件；30k–40k 步替换率线性升至目标 \(p_k\)；40k–150k 步保持目标替换率。

- **4-CFG 四路无分类器引导**：同一模型与流状态输出四个预测：\(f_{klc}\) 使用 codec、lyrics、caption；\(f_{kl}\) 使用 codec、lyrics；\(f_k\) 仅使用 codec；\(f_u\) 为无条件。引导场为
\[
f_{\mathrm{4CFG}} = f_u + s_{\mathrm{codec}}(f_k - f_u) + s_{\mathrm{lyr}}(f_{kl} - f_k) + s_{\mathrm{cap}}(f_{klc} - f_{kl}).
\]
当所有尺度为 1 时，输出等价于 \(f_{klc}\)，即联合 2-way CFG scale=1；当 lyric 与 caption 尺度相等时退化为 3-way codec/联合文本 CFG。论文对 (1,1,1) 及分别把某一个尺度改为 0.5 或 2 的 7 个元组做自动筛选，盲听选出 \((s_{\mathrm{codec}}, s_{\mathrm{lyr}}, s_{\mathrm{cap}}) = (1,2,1)\) 作为默认配置。

**3. 数据流与交互**

训练时，`(x, y_cap, y_lyr)` 经 tokenizer 与 VAE 得到 `(c_gt, z_0)`，EMDC 从 `c_gt` 采样 `c~`，FullDiT 在 `(c~, y_cap, y_lyr)` 条件下预测速度场。推理时，`c~` 替换为语言模型预测的 `c_hat`。Caption 与 lyrics 除进入上游语言模型外，还被独立编码并逐层注入 FullDiT，避免离散计划成为文本信息的唯一接口。

**4. 关键设计动机**

- **非因果全歌上下文**：局部窗口训练无法为渲染器提供歌曲级结构信息；非因果注意力符合离线渲染的设定，能让远期乐段参与当前帧声学实现。
- **EMDC 按码本难度匹配**：更深残差码本的预测难度显著更高，统一扰动会低估残差级不确定性；余弦 KNN 近邻替换用于模拟“语言模型预测虽错，但仍在局部语义邻域内”的典型误差模式。
- **4-CFG 分离文本与离散计划引导**：codec 计划、歌词、caption 对声学细节的约束性质不同，分开控制可避免单一 CFG 尺度在“跟随计划”和“依据文本”之间被迫折中。

### 💡 核心创新点

1. **全上下文生成式声学渲染（FullDiT）**：将渲染器从“重建干净 codec token”改为“从语言模型预测的完整歌曲长度 8 路 RVQ 计划进行生成”，用非因果全序列注意力同时利用过去与未来信息。1.5B 消融中，M1 相对 M2a 在语言模型条件 PQ 上从 6.011 提升至 8.213，盲听非平局歌曲胜率 100%。

2. **EMDC（Error-Matched Distractor Conditioning）**：按各码本教师强制 top-1 错误率决定替换频率，从余弦 KNN 邻域采样近错 token，并保持声学目标不变。合成损坏下，ViSQOL 从 2.4342 提升到 3.2036，log-mel L1 从 2.2372 降至 1.1842；固定语言模型 token 下 PQ 从 8.122 提升到 8.213，盲听非平局胜率 69.7%。

3. **4-CFG（四路无分类器引导）**：将单尺度 CFG 扩展为 codec、lyrics、caption 三个独立增量场。盲听三选一测试中，(1,2,1) 获得 51.0% 的歌曲加权选择份额，成为最终工作点。

4. **渲染侧文本直接条件**：歌词与 caption 在 FullDiT 中独立编码并逐层注入，打破“离散计划是唯一文本信息接口”的假设。M1 对 M2b 在语言模型条件下 PQ 为 8.213 vs 8.135，盲听非平局歌曲胜率 100%。

5. **混合式音乐生成管线的系统级鲁棒化方案**：从 exposure bias 的问题定义、EMDC 训练扰动、全上下文架构与文本注入，到 4-CFG 推理控制，形成了针对混合管线接口失配的完整工程解法。

### 📊 实验结果

下表仅保留主方法 M1、无 EMDC 基线 M3、局部窗口基线 M2a 与去除文本条件基线 M2b，以覆盖干净条件、合成损坏、语言模型条件三类证据。

| 模型 / 条件 | ViSQOL (Clean↑) | Log-mel L1 (Clean↓) | MR-STFT (Clean↓) | ViSQOL (Corrupted↑) | Log-mel L1 (Corrupted↓) | MR-STFT (Corrupted↓) | PQ (LM)↑ | Preference |
|---|---|---|---|---|---|---|---|---|
| M1 (FullDiT + EMDC + text, full ctx) | **3.3388** | **1.1363** | **1.7806** | **3.2036** | **1.1842** | **1.7943** | **8.213** | Ref. |
| M2a (FullDiT + EMDC + text, 30s ctx) | 2.8863 | 1.5381 | 1.8707 | 2.6868 | 2.0034 | 2.0190 | 6.011 | 0.0% |
| M2b (FullDiT + EMDC, no text, full ctx) | 3.3021 | 1.1865 | 1.8253 | 3.1838 | 1.2069 | 1.8327 | 8.135 | 0.0% |
| M3 (FullDiT, no EMDC, text, full ctx) | 3.4578 | 0.9248 | 1.7896 | 2.4342 | 2.2372 | 2.3346 | 8.122 | 30.3% |

主方法与关键基线对比显示：**(1)** EMDC 在合成损坏下用少量干净条件重建质量换取大幅鲁棒性提升，clean ViSQOL 从 3.4578 小幅降至 3.3388，而 corrupted ViSQOL 从 2.4342 升至 3.2036；**(2)** 全歌上下文的贡献远大于渲染侧文本条件，局部窗口使 LM 条件 PQ 跌破 6.0；**(3)** 在语言模型实际输出的 token 条件下，EMDC 仍带来 PQ 提升（8.122→8.213）。

**完整系统自动评估（RQ4）**：在 500 首覆盖 8 个流派、5 种语言的带词歌曲集上，完整系统在 18 项自动指标中的 15 项取得最佳点估计：SongBench 中 Melody、Arrangement、Musicality、Instrument、Mixing 第一，Vocal 以 7.6234 微弱落后于 Mureka 8 的 7.6248，Structure 落后于 Lyria 3 Pro；SongEval 全部 5 项第一；Audiobox-Aesthetics 全部 4 项第一；CMI-RM Musicality 第一，Alignment 落后于 Mureka 8。多数指标领先幅度较小，且未报告置信区间与显著性检验。

**外部盲听评测**：论文引用 Artificial Analysis Music with Vocals Leaderboard 的存档快照，完整系统对应条目 Lucky-Dolphin-Music-WQ-0618，基于 2289 个样本获得 1129 Elo（95% 置信区间 ±14），点估计排名第 3，排名区间 2–3。该结论依据一张存档截图，论文未描述榜单的采样协议、评测流程或同期其他模型的完整配置。

下图是外部盲听评测的排行榜快照。

![Figure 3: Archived Artificial Analysis Music with Vocals Leaderboard snapshot used in this paper. The highlighted Lucky Dolphin entry, listed as Lucky-Dolphin-Music-WQ-0618, corresponds to our complete system.](https://arxiv.org/html/2608.08787v1/Figures/3.jpg)

图中可见，完整系统对应条目Lucky-Dolphin-Music-WQ-0618，Elo点估计为1129，排名第三，95%置信区间为±14。


**4-CFG 消融（RQ3）**：固定 M1，对 7 个引导元组做 Audiobox PQ 自动筛查，选出 (2,1,1)、(1,2,1)、(1,1,1) 三个候选进入盲听三选一。(1,2,1) 获得 51.0% 的歌曲加权选择份额，被选为最终配置。论文未报告其他候选的选择份额、置信区间或评审间一致性。

下图展示了4-CFG消融实验的客观筛选和盲听评估结果。

![Figure 2: Four-way CFG analysis: (a) Audiobox PQ screening of seven guidance tuples; (b) song-weighted selection shares from the blind three-way forced-choice evaluation of the three selected candidates.](https://arxiv.org/html/2608.08787v1/Figures/2_double_column.png)

图中显示了七种引导元组的Audiobox PQ得分，以及三个候选在盲听测试中的歌曲加权选择份额，其中(1,2,1)配置获得51.0%的份额，被选为最终工作点。


**实验设计不足**：
1. 所有受控组件消融均在 1.5B 规模完成，8B 规模只有端到端评测，EMDC、全歌上下文与文本注入在最终系统上的独立贡献未被单独验证；
2. 合成损坏序列的替换身份来自 M1 的 step-150k 余弦 KNN 表，虽然所有受控模型共享同一批损坏序列，但该构造可能对 M1 存在有利的选择偏差；
3. 盲听样本量为 100 首，评审 5 人，未报告评审间一致性、置信区间或显著性检验；
4. 自动指标中多项领先幅度很小，如 SongBench Vocal 与 CMI-RM Alignment 实际未获第一，Production Quality 仅领先 MiniMax 0.0063；
5. 与商业系统的对比仅说明各系统接收相同 caption 和 lyrics，未披露商业系统的推理配置、解码参数或运行版本差异可能带来的影响；
6. 论文提及补充材料中有跨码本压力测试，但正文未给出对应数据。

### 🔬 细节详述

- 训练数据：所有受控模型在相同规模的内部音乐数据上训练；未给出数据集名称、歌曲数量、时长分布、流派统计、版权来源或预处理细节。未提及数据增强策略。
- Audio 表示：48kHz 双声道；固定 LeVo VAE 编码为 25Hz、64 维 latent；RVQ token 与音频帧率一致。
- 模型配置：1.5B FullDiT 为 28 层、隐藏宽度 1536、12 个 query 头、2 个 KV 头、头维 128；8 个 RVQ codebook 各 1024 项、32 维 embedding 表。
- 文本条件：caption 经冻结 Qwen3-Embedding-0.6B 编码；lyrics 经共享 token embedding 和 8 层 encoder；组合文本上限 2048 token，各最多 1024。
- 训练配置：流匹配 \(\sigma\) 从 shift=1.0 的 logit-normal 分布采样；AdamW，peak LR=1e-4，\(\beta=(0.8,0.99)\)，weight decay=0.1，gradient clip=1.0；4k 步 warmup，余弦衰减；全局 batch size=384；150k 步；bfloat16；随机种子 666。
- 条件 dropout：M1、M2a、M3 对 codec、caption、lyrics 三个条件使用 0.1 的独立 dropout；M2b 将渲染侧文本条件替换为学习到的 null condition。
- EMDC 参数：\(p_k = 1-\mathrm{Acc@1}_k\)，各码本从 0.625 到 0.892；\(K_k\) 按约 \(2\exp(\mathrm{loss}_k)\) 取整，从 20 到 180；温度 \(\tau=1.0\)；KNN 表在对应码本内构建并排除查询 token 自身；课程为 0–30k 步干净、30k–40k 步线性升至 \(p_k\)、40k–150k 步保持。
- 推理配置：50 步 UniPC，sampling shift=3.0；4-CFG 默认 \((1,2,1)\)；无显式解码温度、beam search 或流式处理设置。
- 训练硬件：未提及 GPU/TPU 型号、数量、训练时长、峰值内存或总计算成本。
- VAE 与 tokenizer：未披露 LeVo VAE 的具体结构、训练数据或压缩率；语义感知 tokenizer 的详细训练流程仅以一句概括。
- 正则化：明确使用的稳定化技巧包括 EMDC 课程学习、codec embedding 前 5k 步冻结、条件 dropout；未说明其他正则化手段。

### ⚖️ 评分理由

*   创新性 (1.4/2)：[A_METHOD][SCORING_SOURCE_3/17] 将声学渲染从“重建干净token”重构为“从不完美离散计划做全上下文生成”，提出EMDC逐码本错误率匹配+余弦KNN近错替换，以及4-CFG分离codec/lyrics/caption增量引导；三种机制环环相扣，构成针对codec-interface exposure bias的系统级新方案。

*   技术严谨性 (1.2/1.5)：[A_METHOD][SCORING_SOURCE_8/17] 流匹配路径、EMDC替换分布与4-CFG增量场均有明确公式；4-CFG在scale=1时等价于联合2-way CFG，lyric/caption尺度相等时退化为3-way，且EMDC只扰动codec条件、不改变声学目标，逻辑自洽。作者也自述部分校准时为工程启发而非严格理论，构成一定严谨性保留。

*   实验充分性 (1.1/1.5)：[A_RESULTS][A_LIMITS] 受控实验覆盖干净GT、合成损坏和LM生成三种codec条件，并有完整系统对五个商业系统的18项自动指标和外部Elo榜；但8B系统只有端到端评测，1.5B受控消融跨尺度，合成损坏替换身份取自M1的KNN表存在选择偏差，自动指标无置信区间/显著性检验，盲听仅5人100首且未报一致性，实验证据强度受限。

*   清晰度 (1.0/1)：[A_METHOD] 摘要与引言清楚点出codec-interface exposure bias，方法按系统定位、核心组件、数据流、设计动机分层展开；EMDC采样、4-CFG公式、训练课程和推理配置均有编号和文字说明，整体组织清晰，没有发现明显的符号或结构混乱。

*   影响力 (1.0/1.5)：[A_SUMMARY][A_RESULTS] 解决混合式音乐生成中codec-interface exposure bias这一具体问题，完整系统在18项自动指标中15项超过五个商业系统，外部Elo点估计第三；虽未拿第一，仍对音乐生成渲染器设计与混合管线具有明确参考价值。

*   开源 (0.2/1.5)：[A_OPEN] 论文目前只提供可访问的在线演示页面，未发布核心代码、模型权重或训练数据。

*   可复现性 (0.3/0.5)：[A_METHOD] 架构、AdamW超参、batch size、步数、推理采样配置等大部分关键配置已披露；但训练数据名称/规模/来源、硬件与训练时长、计算成本以及VAE/tokenizer训练细节缺失，复现仍有关键缺口，因此给0.3。

*   工程/实践价值 (1.3/1.5)：[A_METHOD][A_RESULTS] 完整管线包含tokenizer、层次化LM、旋律模块与8B FullDiT，训练采用EMDC三阶段课程、条件dropout与codebook embedding冻结，推理用50步UniPC和4-CFG默认工作点，工程化程度较高；demo页面提供试听，系统在18项自动指标中15项超过商业系统，显示可落地的实践价值。

### 🚨 局限与问题

1. **规模鸿沟**：所有受控消融均在 1.5B 规模完成，8B 完整系统只有端到端评测。EMDC、全歌上下文、渲染侧文本条件在最终系统上的独立贡献未被单独验证，无法确认这些组件在 8B 规模下的实际收益。
2. **合成损坏的潜在选择偏差**：合成损坏序列的替换身份来自 M1 的 step-150k 余弦 KNN 表。虽然所有受控模型共享同一批损坏序列，但该构造可能对 M1 存在有利的选择偏差，使 EMDC 的优势被高估。
3. **外部盲听证据有限**：外部榜单位于第三方网站，论文仅引用一张存档截图，未描述榜单的采样协议、评测流程或同期其他模型的完整配置；Elo 点估计排名第三，排名区间 2–3，并非第一。受控盲听只有 5 名评审、100 首歌，未报告评审间一致性、置信区间或显著性检验。
4. **自动指标优势偏弱**：完整系统虽然赢得 18 项中的 15 项，但多项领先幅度很小，例如 SongBench Vocal 落后于 Mureka 8（7.6234 vs 7.6248），CMI-RM Alignment 落后于 Mureka 8，Production Quality 仅领先 MiniMax 0.0063。未报告置信区间与显著性检验，点估计优势可能不具统计意义。
5. **数据与训练细节缺失**：训练数据为“内部音乐数据”，未披露歌曲数量、时长分布、流派与语言统计、版权来源；VAE 与 tokenizer 的训练细节、计算成本、硬件配置均未给出，影响可复现性。
6. **商业系统对比不透明**：只说明五个商业系统接收相同的 caption 和 lyrics，未披露商业系统的版本、推理配置、解码参数等差异；各系统的输出长度、后处理方式也可能不同，比较的公平性难以完全确认。
7. **补充实验缺失**：论文提及补充材料中有跨码本压力测试，但正文未给出对应数据，使 EMDC 对不同码本替换率的敏感性无法在正文中核查。

---

[← 返回 2026-08-11 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-11/)
