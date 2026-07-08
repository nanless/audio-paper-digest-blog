---
title: "WordVoice: Explicit and Decoupled Multi-Dimensional Word-Level Control for LLM-Based TTS"
date: 2026-07-08
draft: false
tags: [语音合成, 语音大模型, 自回归模型, 流匹配, 数据集]
categories: [论文速递]
description: "语音合成 | 7.2/10"
hiddenInHomeList: true
---

# 📄 WordVoice: Explicit and Decoupled Multi-Dimensional Word-Level Control for LLM-Based TTS

#语音合成 #语音大模型 #自回归模型 #流匹配 #数据集

**7.2/10** | 创新 1/2 | 严谨 1.1/1.5 | 实验 0.9/1.5 | 清晰 0.8/1 | 影响 0.9/1.5 | 开源 1/1.5 | 复现 0.4/0.5 | 工程 1.1/1.5

✅ **7.2/10** | 前50% | #语音合成 | #语音大模型 | #自回归模型 #流匹配 | [arxiv](https://arxiv.org/abs/2607.06461)


### 👥 作者与机构

- 第一作者：Sihang Nie（未说明）
- 通讯作者：未说明
- 作者列表：Sihang Nie（未说明）、Jinxin Ji（未说明）、Xiaofen Xing（未说明）、Deyi Tuo（未说明）、Chengbin Jin（未说明）、Jialong Mai（未说明）、Xiangmin Xu（未说明）

### 💡 毒舌点评

亮点在于构建了大规模词级声学标注数据集WordVoice-5A，并设计了LLM内显式“声学规划”与流匹配阶段帧级风格调制的协同框架，首次在LLM-TTS中实现了多维、可解耦的词级控制，工程一致性良好。短板则令人失望：baseline选择极度贫乏，全程仅与一个CosyVoice3比较，缺乏与MagicTTS（仅部分子集测了时间维度）、P-Flow、InstructTTS等具有细粒度控制能力的近期SOTA系统进行系统、公平的比较。“多维同时控制优越性”的声称因此大打折扣。此外，说话人相似度的损失在所有模式中均未追平基线，作者对此仅是轻描淡写地称之为“值得的权衡”，未提供任何缓解策略的分析。语调控制虽被定义为7类离散形态，但其解耦性的分析过于乐观，本质上并未解决动态轮廓与标量属性间的根本纠缠。

### 📌 核心摘要

论文旨在解决LLM-based TTS中缺乏显式、细粒度、多维词级声学控制的问题。作者首先构建了一个名为WordVoice-5A的4.7k小时中英双语数据集，通过一个语言学指导的严格流水线，自动标注了时长、边界、能量、基频和语调五维词级属性。基于此，提出了WordVoice框架，其核心包含两级创新：在自回归LLM中引入bound-token机制，将生成过程重构为“预测词边界→多属性声学规划→条件化语音块生成”的显式流程；在流匹配（Flow Matching，FM）阶段，引入一个词级风格调制模块，通过时长对齐上采样和帧级仿射变换，弥补离散语音token量化带来的微声学细节损失。实验表明，WordVoice首次在单一框架内实现了五维的显式、可解耦词级控制。在控制模式下，客观指标如中文能量MAE从0.1030降至0.0486，边界错误率从32.47%降至12.72%，主观Ctrl-MOS显著提升，但说话人相似度和字错率（WER）存在轻微妥协。公开的数据集为细粒度可控TTS提供了基准。



![Fig. 1: WordVoice framework. By introducing explicit word-level control, WordVoice supports a dual-mode synthesis paradigm. Users can either rely on the model’s autonomous prosodic planning or explicitly manipulate five-dimensional acoustic attributes for specific words to achieve highly expressive and precise stylistic interventions.](https://arxiv.org/html/2607.06461v1/Figures/mot.png)



上图直观展示了WordVoice的核心理念：通过引入词级控制，用户可以在“自由生成”和“受控生成”两种模式间切换，对文本中特定词（如“precise”、“is”、“WordVoice”）的声学属性进行精细干预，从而生成表达更符合需求的语音。

### 🔗 开源详情

- 代码：项目主页（https://xxh333.github.io/wordvoice-demo/）包含代码链接。
- 模型权重：论文未提及。
- 数据集：WordVoice-5A，论文声称将随代码一起开源，但未提供具体下载链接。
- Demo页面：https://xxh333.github.io/wordvoice-demo/
- 复现材料：论文正文说明了7和20个epoch、8×A800、Adam优化器等，但缺少详细训练配置。
- 论文中使用的开源项目：
  - Montreal Forced Aligner (MFA): https://pypi.org/project/Montreal-Forced-Aligner/
  - Qwen3 Forced Aligner (Qwen3FA): https://huggingface.co/Qwen/Qwen3-ForcedAligner-0.6B
  - Qwen3-ASR: https://huggingface.co/Qwen/Qwen3-ASR-1.7B

### 🏗️ 方法概述和架构

WordVoice以CosyVoice3为基础骨架，将传统的句子级、隐式生成改造为“词级声学规划 + 块生成 + 微声学调制”的显式可控范式，架构分为两级。

第一级：WordVoice-LLM（自回归语言模型）。这是实现词级显式控制的核心。在输入的文本序列中，每个词之后插入一个特殊的boundary token `⟨b⟩`。在自回归解码时，一旦LLM预测出 `⟨b⟩`，表示一个词的语义编码结束，其当前的隐藏状态立刻被送入一个轻量级的词解码器（一个2层MLP）。该解码器并行预测当前词的五个声学属性\(\mathcal{A}_i = \{dur_i, bnd_i, eng_i, pit_i, ton_i\}\)（时长、边界、能量、基频、语调）。这五个属性被各自嵌入并拼接，形成一个稠密的词级风格token \(\mathbf{c}_i\)。随后，该风格token \(\mathbf{c}_i\)与当前词的语义嵌入 \(\mathbf{e}(w_i)\) 拼接，构成统一的控制条件向量 \(\mathbf{v}_i = [\mathbf{e}(w_i) \oplus \mathbf{c}_i]\)。LLM在 \(\mathbf{v}_i\) 的指导下，自回归地生成该词对应的离散语音块 \(\mathbf{s}_i\)。最终的序列以 `[初始静音段s_0, ⟨b⟩, v_1, s_1, ..., ⟨b⟩, v_N, s_N]` 的形式组织。这赋予了模型“先规划后执行”的生成步态，并天然支持两种模式：1）自由模式（Free Mode），模型自主预测属性，作为智能韵律规划器；2）控制模式（Control Mode），用户可直接指定任意词的属性值，绕过词解码器构建风格token，实现零样本的词级精确干预。



![Fig. 3: Overall architecture of WordVoice. (a) WordVoice-LLM: During autoregressive decoding, the bound token ⟨b⟩\langle b\rangle triggers the prediction of five acoustic attributes. These form a word-level style token to explicitly guide the chunked generation of speech tokens. (b) WordVoice-FM: The style tokens are LLM-based upsampled and injected into the Flow Matching backbone, providing fine-grained word style modulation for high-fidelity waveform synthesis.](https://arxiv.org/html/2607.06461v1/Figures/wordvoice.png)



上图（a）部分详细展示了WordVoice-LLM的工作流程：文本经过嵌入后，与语音分词器的输出共同作为输入。序列中插入的边界token `<B>` 触发词解码器（WDec.）并行预测五个声学属性，这些属性经嵌入和拼接后形成风格token `<style>`，与语义信息一同指导后续语音块 `<speech token>` 的生成。

第二级：WordVoice-FM（流匹配）。为解决LLM生成的离散语音token因矢量量化而丢失微声学细节的问题，在流匹配波形合成阶段引入了词级风格调制。首先，将LLM生成的词级风格token \(\mathbf{c}_i\) 按照LLM自身预测的时长（词的发音段及其后续暂停）进行逐帧复制上采样，形成帧级风格序列 \(\mathbf{C}_f\)。然后，在每个时间帧 \(t\)，\(\mathbf{C}_f\) 中对应的向量通过线性投影产生尺度参数 \(\gamma_t\) 和偏移参数 \(\beta_t\)，对离散语音token的嵌入 \(\mathbf{x}_t\) 进行条件调制：\(\mathbf{\hat{x}}_t = \gamma_t \odot \text{LayerNorm}(\mathbf{x}_t) + \beta_t\)。调制后的表征作为FM主干的输入，迫使波形生成过程严格受控于LLM规划的音量、基频和时间结构。训练时，还随机遮罩30%的输入语音token，强制FM模型依赖词级风格条件进行细节重建。总损失由LLM端的自回归负对数似然损失和五个属性的交叉熵损失通过可学习的观测噪声参数 \(\sigma_k\) 进行不确定性加权组合而成。

[图3]

上图（b）部分详细展示了WordVoice-FM的工作流程：来自LLM的词级风格token经过基于时长的“LLM-based Upsample”被扩展为帧级序列，随后通过线性投影层（Linear）生成调制参数（γ, β），对语音token嵌入进行逐帧的仿射变换（Word Style Modulation），从而将宏观风格信息注入连续波形合成过程，补偿离散token的量化损失。

### 💡 核心创新点

1.  词级声学规划与bound-token引导机制：首次在LLM-TTS中通过引入 `⟨b⟩` token，将自回归解码过程重构为显式的、多步的“声学规划”与“条件化语音生成”两步走范式。这为LLM内部提供了一个可被用户直接访问和干预的显式声学中间层，从根本上改变了LLM-TTS的黑箱生成模式。
2.  大规模五维可解耦词级数据集WordVoice-5A：提出了一个融合双模强制对齐、响度优化修剪、语言学边界分级（5级）和专家形态语调归类（7类）的全自动高质量标注流水线，构建了4.7k小时中英双语词级标注数据集。这是支撑细粒度可控研究的核心数据基础。



![Fig. 2: The linguistically-guided annotation pipeline. (a) Alignment & Clean: Refining MFA and Qwen3FA timestamps via loudness optimization and consistency checks. (b) Temporal Attributes: Extracting duration and 5-level acoustic boundaries. (c) Acoustic & Prosodic Attributes: Extracting energy, pitch, and 7-category tone via truncation and morphological modeling.](https://arxiv.org/html/2607.06461v1/Figures/pipeline.png)



上图清晰展示了构建WordVoice-5A数据集的三阶段流水线：(a) 对齐与清理阶段，通过双对齐器（MFA/Qwen3FA）、响度优化搜索、以及严格的一致性检查（重叠、时长发散、边缘发散），从58K小时原始数据中筛选出约4.7K小时高质量样本；(b) 时间属性提取阶段；(c) 声学与韵律属性提取阶段，包括通过截尾和归一化处理能量、基频，以及通过重采样、拟合和规则分类器生成7类语调标签。

3.  流匹配阶段的帧级词风格调制：提出了一种在FM阶段通过LLM预测的时长进行上采样并对语音token嵌入进行帧级仿射变换的方法。此设计巧妙地补偿了离散token的量化损失，让连续波形合成严格对齐LLM的韵律规划，消融实验证实其对能量和基频准确度的关键作用。
4.  双模式统一的架构设计：同一框架下无缝支持“自由预测”和“精确干预”两种模式，无需切换模型或调整权重，工程价值明确。

### 📊 实验结果

主要结果基于WordVoice-5A的中文（约2000句）和英文（约1500句）测试集，使用前30%内容的音频作为零样本音色提示。

表3 主观MOS结果：

| 方法 | CN N-MOS↑ | CN Spk-MOS↑ | CN Ctrl-MOS↑ | EN N-MOS↑ | EN Spk-MOS↑ | EN Ctrl-MOS↑ |
|------|-----------|-------------|--------------|-----------|-------------|--------------|
| Mel-Recon | 3.961±0.074 | 3.672±0.083 | 4.074±0.077 | 3.974±0.077 | 3.884±0.078 | 4.084±0.076 |
| CosyVoice3 | 3.550±0.081 | 3.527±0.088 | 3.028±0.095 | 3.643±0.086 | 3.838±0.078 | 3.324±0.094 |
| WordVoice-Free | 3.645±0.083* | 3.326±0.089 | 3.383±0.092 | 3.725±0.081 | 3.869±0.078 | 3.512±0.088 |
| WordVoice-Control | 3.689±0.081 | 3.324±0.088 | 3.446±0.092 | 3.773±0.082 | 3.846±0.077 | 3.645±0.085* |

结论：在所有模式下，WordVoice的Ctrl-MOS相对CosyVoice3均有极显著提升（p<0.01），验证了其显式控制能力。但Spk-MOS均略低于基线，暴露了控制与音色保持间的权衡。

表4 客观评估结果：

| 方法 | CN WER↓ | CN Dur-MAE↓ | CN Eng-MAE↓ | CN Pit-MAE↓ | CN Bnd-ER↓ | CN Ton-RER↓ | EN WER↓ | EN Dur-MAE↓ | EN Eng-MAE↓ | EN Pit-MAE↓ | EN Bnd-ER↓ | EN Ton-RER↓ |
|------|---------|-------------|-------------|-------------|------------|-------------|---------|-------------|-------------|-------------|------------|-------------|
| Ground-Truth | - | 0.0142 | 0.0116 | 0.0094 | 5.20% | 5.85% | - | 0.0188 | 0.0091 | 0.0081 | 11.58% | 7.01% |
| Mel-Recon | 1.19% | 0.0257 | 0.0266 | 0.0552 | 13.98% | 13.90% | 0.34% | 0.0393 | 0.0247 | 0.0365 | 21.39% | 16.20% |
| CosyVoice3 | 2.31% | 0.0549 | 0.1030 | 0.2030 | 32.47% | 32.31% | 1.06% | 0.0806 | 0.0899 | 0.1765 | 43.81% | 40.92% |
| WordVoice-Free | 2.58% | 0.0500 | 0.0963 | 0.1855 | 31.33% | 30.97% | 1.31% | 0.0696 | 0.0850 | 0.1568 | 42.37% | 39.98% |
| WordVoice-Control | 2.86% | 0.0349 | 0.0486 | 0.1100 | 12.72% | 20.25% | 1.57% | 0.0450 | 0.0475 | 0.0782 | 23.23% | 26.58% |

结论：WordVoice-Control在所有控制指标上取得最大幅度优化，定量证实了精确干预能力。然而，WER相比CosyVoice3有所升高，印证了结构条件干扰语言建模稳定性的副作用。

表5 与MagicTTS显式时间控制对比（100句子集）：
WordVoice在中文、英文上的时长MAE和边界错误率均低于MagicTTS的专用变体（Dur-MAE 0.0383 vs 0.0438，Bnd-ER 12.82% vs 16.10%），证明了统一的联合框架优于单一属性专用模型。

表6 解耦控制与消融实验：
- 单属性控制（Part 1）：当仅干预一个属性时，该属性的误差急剧下降，而其他属性几乎不受影响（如仅控能量时，中文Eng-MAE降至0.0498，与全自由模式0.0963相比大幅下降，但其他MAE基本不变）。唯一例外是语调，因其动态轮廓特性，与其他声学属性存在天然耦合。
- FM模块消融（Part 2）：移除WordVoice-FM模块后，能量和基频的MAE显著上升（例如在Token-Recon任务中，中文Eng-MAE从0.0422劣化至0.0796），而时长和边界几乎无变化。证明了FM模块专门负责补偿量化丢失的连续声学细节，与LLM的宏观韵律规划形成分工。

[图像补充] 语调控制的有效性不仅体现在客观的Ton-RER下降，还体现在生成语调分布与目标条件的对齐上。下图通过2D密度热力图直观地展示了这一对比。



![Fig. 4: 2D density heatmaps of generated versus target category-specific tones.](https://arxiv.org/html/2607.06461v1/Figures/tone.png)



上图展示了CosyVoice3与WordVoice在中英文测试集上，生成语调类别与目标条件类别的分布对比。可以清晰看到，CosyVoice3的生成分布（a, b）较为弥散，偏离对角线较多，表明其对离散语调的控制能力有限。而WordVoice的生成分布（c, d）则更集中地沿着对角线分布，红色高密度区域与目标类别匹配度更高，直观证明了其在语调属性上更强的控制能力和更低的错误率（与表4中Ton-RER下降对应）。这也从视觉上支持了语调与其他属性存在耦合（分布仍有扩散）的观点。

### 🔬 细节详述

- 训练数据：WordVoice-5A，总计约4684小时，源自LEMAS数据集的重标注。使用MFA和Qwen3FA双重对齐，经响度优化和严格的一致性过滤（仅保留top 8%最高质量数据）。时长基于40ms帧率离散化；基频和能量经截尾并均匀离散化为20个bin；语调由15点重采样、二次多项式拟合及专家决策树映射为7类形态。测试集中文约2000句，英文约1500句。
- 损失函数：LLM端的\(\mathcal{L}_{LLM}\)由自回归NLL损失和五个属性各自的交叉熵损失，通过不确定性加权系数\(1/(2\sigma_k^2)\)和正则项\(\log \sigma_k\)组合而成。FM端为标准流匹配目标\(\mathcal{L}_{FM}\)，优化预测的速度场。
- 训练策略：LLM基于Qwen2.5-0.5B初始化，Adam优化，训练7 epoch；FM训练20 epoch；硬件为8块NVIDIA A800 GPU。详细的batch size、学习率、warmup等超参数未提及。FM训练时对输入语音token进行30%随机mask。
- 关键超参数：词解码器为2层MLP；风格token维度未说明；LLM和FM的主干均沿用各自开源版本的默认配置或未说明。量化bin：能量20，基频20，时长按40ms帧率。
- 训练硬件：8×A800 GPU。单次训练时长未说明。
- 推理细节：零样本推理使用MMS-FA从参考音频提取属性。控制模式下，用户直接指定属性值。FM利用LLM生成的时长进行上采样，无需外部对齐器。
- 正则化与稳定训练：LLM端通过可学习参数\(\sigma\)进行多任务不确定性加权；FM端通过对语音token进行30%的mask，强迫模型依赖风格信息。

### ⚖️ 评分理由

*   创新性 (1.0/2)：将显式多属性规划引入LLM-TTS并为此构建专用数据集是一次有意义的架构尝试。bound-token机制与配套的FM微声学调制在思路上具备一定的新颖性。但整体方案仍然是对CosyVoice3框架的延伸和重构，属于组合式与精细化创新，缺乏理论或算法上的本质性突破。
*   技术严谨性 (1.1/1.5)：方法定义、公式描述和数据预处理流程清晰且合理，不确定性加权、mask训练等策略运用得当。不足之处在于，缺乏对LLM内部bound-token、风格条件如何具体影响注意力机制和序列生成行为的分析；对级联错误（如错误的时长预测如何影响FM调制）也未有讨论，严谨性有提升空间。
*   实验充分性 (0.9/1.5)：包含主客观评测、消融和解耦实验，体系设计合理。但最大硬伤是基线对比严重不足。全文核心对照仅一个CosyVoice3，与MagicTTS的比较仅是时间维度的局部对比。完全没有与InstructTTS、P-Flow等同样具备细粒度控制能力的指令式或基于prompt的SOTA系统进行公平对比。这使得其“多维同时控制优越性”的核心贡献缺乏实证支撑。此外，对不同语速、噪声等鲁棒性测试也完全空白。
*   清晰度 (0.8/1)：论文结构清晰，图文并茂。但关键实现细节（如模型维度、具体训练超参数）的缺失，降低了可复现性。
*   影响力 (0.9/1.5)：为LLM-TTS提供了一套完整的细粒度控制方案，对有声书、配音等应用有直接工程价值。但性能上存在Spk-MOS和WER的明确权衡，且仅在单一LLM-TTS架构上验证，尚难断定其在更广泛TTS领域内的普适影响力。
*   开源 (1.0/1.5)：项目主页提供代码和音频样本，数据集WordVoice-5A亦声明公开，构成了可获取的基础。但模型权重未说明是否公开，文档完善度未知。
*   可复现性 (0.4/0.5)：虽提供了开源代码、数据集、训练总epoch数和核心策略，但缺乏具体的batch size、learning rate等关键训练细节，他人复现仍需要较多工程摸索。
*   工程/实践价值 (1.1/1.5)：构建了从大规模双语词级标注、质量过滤到双模式推理的完整工业流水线，对细粒度可控TTS的开发有直接的参考和复用价值。非纯理论探索，工程贡献明显。

### 🚨 局限与问题

论文自我声明的局限
- 控制模式因结构条件干扰，导致WER轻微上升和说话人相似度下降，作者视其为可接受的权衡。
- 语调属性动态性强，与其他声学特征存在内在纠缠，绝对解耦困难。
- 当前仅在CosyVoice3上验证，尚未扩展到其他LLM-TTS架构。

审稿人发现的潜在问题
1.  基线对比极度薄弱：这是论文最致命的问题。实验部分仅在CosyVoice3一个baseline上进行主要对比，与MagicTTS的对比也仅限于时间维度。论文声称实现了独特的多维控制，却未与InstructTTS等通过文本指令实现局部控制的SOTA系统进行任何形式的主观或客观比较，其“superior”的断言远未得到证实。
2.  评价指标存在信息泄露风险：在WordVoice-Control模式中，直接使用ground-truth属性作为输入来评估控制精度。这种设定虽然是一种评估控制效果的手段，但过于理想化，无法体现模型在用户指定“非自然”或“不合理”的属性组合时的鲁棒性、泛化能力以及生成语音的自然度。
3.  级联错误分析缺失：FM阶段的上采样完全依赖LLM预测的时长。当LLM的时间预测出现偏差时，会导致风格调制序列与语音块在时间上错位。论文未对这种潜在的级联错误模型及其导致的听觉后果进行分析。
4.  数据偏差问题：数据流水线为追求高质量对齐，仅保留了top 8%的数据。如此高比例的过滤必然会引入强烈的数据分布偏差，即保留的数据均为对齐“容易”的样本，这可能导致模型在对齐“困难”的长尾场景（如快语速、口语化、嘈杂风格音频）下性能显著退化，论文未对此进行任何讨论。
5.  语调和说话人相似度：语调控制虽是亮点，但7类的离散化本质上掩盖了对连续F0轮廓控制的不足。Spk-MOS在所有变体下均未追平基线，说明文中的框架会改变说话人音色，这在实际应用中可能成为比WER更敏感的限制因素。

---

[← 返回 2026-07-08 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-08/)
