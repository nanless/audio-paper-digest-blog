---
title: "FC-TTS: Style and Timbre Control in Zero-Shot Text-to-Speech with Disentangled Speech Representations"
date: 2026-05-26
draft: false
tags: [语音合成]
categories: [论文速递]
description: "语音合成 | 8.4/10"
hiddenInHomeList: true
---

# 📄 FC-TTS: Style and Timbre Control in Zero-Shot Text-to-Speech with Disentangled Speech Representations

#语音合成

🔥 **8.4/10** | 前50% | #语音合成 | #语音合成 | [arxiv](https://arxiv.org/abs/2605.24618v1)

学术质量 5.3/7 | 影响力 1.8/2 | 可复现性 1.3/2 | 置信度 高


### 👥 作者与机构

论文标题：FC-TTS: Style and Timbre Control in Zero-Shot Text-to-Speech with Disentangled Speech Representations
arXiv ID: 2605.24618v1
作者单位：Qualcomm AI Research（高通AI研究部门，隶属于Qualcomm Technologies, Inc.）

### 💡 毒舌点评

这篇工作动机清晰，试图解决零样本TTS中风格与音色独立控制的痛点，技术路线（双参考输入、两阶段生成、条件一致性损失）也具备一定创新性。然而，其核心构建于预训练的FACodec之上，使得系统的最终上限与可控性高度受限于这个“前人栽树”的组件，原创性打了一定折扣。实验评估看似全面，但依赖商用LLM（Gemini）作为“法官”存在可解释性风险，且绝对合成质量指标（UTMOS 4.22）仍略逊于最新的SOTA（NaturalSpeech 3的4.30），这说明在追求“可控”的同时，牺牲了部分“自然度”。对于顶会而言，这更像是一个扎实的系统工程贡献，而非理论或方法上的重大突破。

### 📌 核心摘要

本文提出了FC-TTS，一个基于解耦语音表示的零样本文本到语音（TTS）框架，旨在实现使用两个独立参考音频对说话风格（韵律）和音色进行独立且精确的控制。为克服现有解耦表示（如FACodec）在实践中解耦不完美、难以应对未见过组合的局限，FC-TTS引入了三项关键设计：1) 一个两阶段频谱图生成流程，先由音色条件生成“模糊”频谱图，再由风格条件细化，以提高鲁棒性；2) 一个基于VQ-VAE的分层风格编码器（TCF模块），用于捕获音素和帧级的细粒度风格特征并避免短路学习；3) 一个条件一致性损失（CCL），通过联合预测器加强属性间的解耦与一致性。实验在LibriSpeech（零样本TTS性能）和RAVDESS（可控性评估）数据集上进行，结果表明，FC-TTS在保持有竞争力的零样本自然度（UTMOS 4.22, WER 1.88）的同时，能够实现精确且独立的风格与音色操控，其性能在主观和客观评估中均优于FACodec语音转换基线和支持独立控制的F5-TTS。

### 🔗 开源详情

- 代码：论文未提及代码开源链接。
- 模型权重：论文未提及模型权重开源。
- 数据集：
    1.  Libriheavy：训练数据集。链接：https://github.com/k2-fsa/libriheavy；许可：Apache-2.0。
    2.  LibriSpeech：测试数据集（test-clean子集）。许可：CC-BY 4.0。
    3.  RAVDESS：可控性评估数据集。许可：CC BY-NC-SA 4.0。
- 演示：提供了演示音频页面：https://qualcomm-ai-research.github.io/fc-tts
- 复现材料：提供了详细的训练超参数（表6）、模型架构细节（附录A、表7）和评估设置（附录D），但未提供预训练模型或检查点。
- 论文中引用的开源项目：
    1.  FACodec (ns3_codec)：核心解耦表示提取器。链接：https://github.com/open-mmlab/Amphion/tree/main/models/codec/ns3_codec
    2.  UTMOS：语音质量评估工具。链接：https://huggingface.co/spaces/sarulab-speech/UTMOS-demo
    3.  HuBERT (用于WER计算)：ASR模型。链接：https://huggingface.co/facebook/hubert-large-ls960-ft
    4.  UniSpeech (用于说话人相似度计算)：说话人验证模型。链接：https://github.com/microsoft/UniSpeech/tree/main/downstreams/speaker_verification
    5.  HiFi-GAN：声码器（论文未给出具体开源链接）。
    6.  Gemini 2.5 Pro：用于AudioLLM-as-a-Judge评估（非开源项目）。

### 🏗️ 方法概述和架构

FC-TTS系统旨在通过处理两个独立的条件输入——音色嵌入 `\(z_{\text{spk}}\)` 和韵律令牌 `\(\mathbf{c_p}\)`——来生成可控的语音频谱图。系统核心构建于预训练的FACodec解码器之外，采用基于条件流匹配（CFM）的频谱图生成框架。

1. 两阶段频谱图生成流程（Hierarchical Spectrogram Generation）
- 动机：直接使用FACodec解码器无法在未见过的风格-音色组合上保证鲁棒性。因此，设计了一个两阶段生成流程来实现功能分离。
- 第一阶段（音色锚定）：输入为音素序列 `\(\mathbf{y}\)` 和音色嵌入 `\(z_{\text{spk}}\)`。一个音色适配器（Timbre Adapter）将 `\(z_{\text{spk}}\)` 通过自适应层归一化（AdaLN）注入Transformer编码器，生成一个“模糊”的对数梅尔频谱图 `\(\mathbf{h}\)`。该阶段通过均绝对误差（MAE）损失 `\(\mathcal{L}_{\text{blur}} = \mathbb{E}\left[\left\|\bm{h}-\bm{x}_{0}\right\|\right]\)` 进行训练，旨在输出过度平滑的频谱图，以锚定音色特征并避免需要预生成的模糊频谱图。
- 第二阶段（风格细化）：输入为第一阶段生成的模糊频谱图 `\(\mathbf{h}\)` 和风格嵌入 `\(\mathbf{z}_{\text{sty}}\)`（由 `\(\mathbf{c_p}\)` 经TCF模块编码得到）。一个风格适配器（Style Adapter）通过交叉注意力机制将风格信息注入一个无因果掩码的Transformer解码器。随后，一个基于DiT块的CFM解码器将 `\(\mathbf{h}\)` 细化成最终的干净频谱图 `\(\hat{\mathbf{x}}\)`。该阶段通过CFM损失 `\(\mathcal{L}_{\text{CFM}}\)` 训练。为保持音色和录音条件一致，训练时 `\(z_{\text{spk}}\)` 会随机替换为同一长音频文件中的另一个片段。

2. 基于VQ-VAE的分层风格编码器（TCF模块）
- 动机：传统基于上下文学习（ICL）的TTS模型假设单个参考音频内风格一致，但这在实际中不成立（如图2所示）。直接以目标语音的风格作为条件可能导致模型短路学习，即复制表面声学特征而非捕获高层韵律模式。
- 设计：提出TCF（Transformer, Cross-attention, FSQ）模块，实例化两次以建模音素级和帧级的分层风格表示。输入仅为FACodec的韵律令牌 `\(\mathbf{c_p}\)`，刻意排除内容令牌 `\(\mathbf{c_c}\)` 和细节令牌 `\(\mathbf{c_d}\)`。模块内部包含：
    - Transformer编码器：处理输入的韵律表示。
    - Q-Former瓶颈：一组固定数量的可学习查询令牌通过交叉注意力压缩变长的编码器输出，丢弃帧级时间细节，迫使表示保留高层风格结构。
    - 有限标量量化（FSQ）层：将连续隐令牌离散化，作为信息瓶颈抑制低级声学残留，鼓励编码器输出离散的、语义化的风格码。
    - 为防止表示坍缩，一个辅助的ResNet模块被联合训练以从Transformer编码器的输出和残差信息重建梅尔频谱图。

3. 条件一致性损失（Conditional Consistency Loss， CCL）
- 动机：加强多条件设置下的属性解耦与一致性。通过联合预测来提供更可靠的监督信号。
- 设计：首先重新参数化CFM目标，使解码器直接生成梅尔频谱图。然后训练两个属性预测器：韵律预测器 `\(f(\cdot)\)` 和说话人预测器 `\(g(\cdot)\)`。关键在于，每个预测器不仅接收目标谱图 `\(\hat{\mathbf{x}}\)`，还接收非目标条件信号：韵律预测器接收 `\(z_{\text{spk}}\)`，说话人预测器接收 `\(\mathbf{c_p}\)`。如图3所示，这种交叉条件化能锐化后验概率，引导生成更准确的谱图。CCL定义为：
\[ \mathcal{L}_{\text{CCL}} = \lambda_{\text{ccl-pro}} \cdot \mathbb{E}\left[\text{CE}(\mathbf{c_{p}},f(\hat{\mathbf{x}},z_{\text{spk}}))\right] - \lambda_{\text{ccl-spk}} \cdot \mathbb{E}\left[\cos\left(z_{\text{spk}},g(\hat{\mathbf{x}},\mathbf{c_{p}})\right)\right] \]
其中 `\(\text{CE}\)` 是交叉熵损失，`\(\cos\)` 是余弦相似度。

整体架构与数据流：如图1所示，文本经音素编码器和对齐器得到音素序列 `\(\mathbf{y}\)`。训练时，目标语音同时提供 `\(z_{\text{spk}}\)` 和 `\(\mathbf{c_p}\)`，推理时可来自不同参考音频。`\(z_{\text{spk}}\)` 进入音色适配器生成模糊频谱图 `\(\mathbf{h}\)`，`\(\mathbf{c_p}\)` 进入TCF风格编码器得到 `\(\mathbf{z}_{\text{sty}}\)`，再由风格适配器和CFM解码器将 `\(\mathbf{h}\)` 细化为 `\(\hat{\mathbf{x}}\)`。最后通过预训练的HiFi-GAN声码器转换为波形。

![图1](https://arxiv.org/html/2605.24618v1/x1.png)

![图2](https://arxiv.org/html/2605.24618v1/x2.png)


### 💡 核心创新点

1.  首次实现基于两个独立参考的零样本TTS中风格与音色的独立控制：论文明确声称这是首次提出此类框架，解决了现有系统通常将两者纠缠在单一参考中的限制。
2.  针对双参考控制的架构与训练创新：提出了三项互补的设计以提升解耦可靠性和控制鲁棒性：
    - 两阶段生成流水线：通过先生成锚定音色的模糊谱图，再进行风格细化，提高了对未见过风格-音色组合的鲁棒性，代价是可能限制了自然度上限。
    - VQ-VAE分层风格编码器（TCF）：通过多层级、多瓶颈设计，旨在捕获精细且可泛化的韵律特征，避免模型短路学习。
    - 条件一致性损失（CCL）：将传统的正则化方法扩展到多条件设置，通过交叉条件化的预测器加强属性间的解耦与联合一致性。

### 📊 实验结果

论文在LibriSpeech test-clean（零样本TTS性能）和RAVDESS（可控性评估）上进行了全面评估。

零样本TTS性能（表1）
| 模型 | UTMOS ↑ | WER ↓ | SPK ↑ | 参数量 ↓ |
| :--- | :---: | :---: | :---: | :---: |
| Ground-truth | 4.10 | 2.07 | 0.71 | - |
| HiFi-GAN | 3.70 | 2.17 | 0.64 | - |
| NaturalSpeech 3 | 4.30 | 1.81 | 0.67 | 500M |
| F5-TTS | - | 2.42 | 0.66 | 336M |
| F5-TTS† | 4.03 | 3.30 | 0.67 | 205M |
| DiTTo-TTS | - | 2.69 | 0.60 | 508M |
| CLaM-TTS | - | 5.11 | 0.50 | 584M |
| FC-TTS (ours) | 4.22 | 1.88 | 0.60 | 204M |
†表示在LibriHeavy上重新训练且模型规模相当。FC-TTS在UTMOS和WER上取得了有竞争力的结果，SPK略低。

音色可控性评估（RAVDESS，表2）
| 模型 | UTMOS ↑ | SPK ↑ | WER ↓ | Win (%) ↑ |
| :--- | :---: | :---: | :---: | :---: |
| FACodec-VC | 3.19 | 0.27 | 8.40 | 10.7 |
| Ours | 4.03 | 0.48 | 0.18 | 66.1 |
FC-TTS在音色控制任务上全面优于作为上界的FACodec语音转换系统。

风格可控性评估（RAVDESS，表3 & 4）
| 模型 | UTMOS ↑ | SPK ↑ | WER ↓ | MCD ↓ | Win (%) ↑ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| F5-TTS | 3.40 | 0.57 | 4.39 | 3.43 | 8.9 |
| Ours† | 3.95 | 0.47 | 0.30 | 3.21 | 65.5 |

| 模型 | Win Ratio (%) ↑ | Style-MOS ↑ |
| :--- | :---: | :---: |
| F5-TTS | 8.3 | 1.50 |
| Ours | 91.7 | 3.92 |
在风格控制上，FC-TTS显著优于F5-TTS，主观ABX和AudioLLM评估均显示巨大优势。SPK略低是风格与音色解耦的预期权衡。

消融研究（表5）
| 模型变体 | LibriSpeech 零样本TTS | | | | Style Control on RAVDESS | | | |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| | UTMOS ↑ | WER ↓ | SPK ↑ | MCD ↓ | UTMOS ↑ | WER ↓ | SPK ↑ | MCD ↓ |
| FC-TTS | 4.22 | 1.88 | 0.60 | 5.60 | 3.91 | 0.30 | 0.37 | 3.33 |
| - two-stage generation | 4.15 | 1.93 | 0.60 | 5.83 | 3.57 | 0.30 | 0.37 | 3.26 |
| - VQ-VAE style encoding | 4.25 | 2.00 | 0.57 | 5.62 | 3.99 | 0.25 | 0.34 | 3.47 |
| - conditioning in consistency loss | 4.21 | 1.92 | 0.59 | 5.67 | 3.79 | 0.35 | 0.36 | 3.36 |
| - entire consistency loss | 3.95 | 5.88 | 0.48 | 6.34 | 3.70 | 9.36 | 0.21 | 3.75 |
消融研究证实了三个核心组件（尤其是整个一致性损失）对系统性能的贡献。移除整个一致性损失导致灾难性性能下降。

![图3](https://arxiv.org/html/2605.24618v1/x3.png)

![图4](https://arxiv.org/html/2605.24618v1/x4.png)


### 🔬 细节详述

- 训练细节：模型在LibriHeavy数据集上训练200k次迭代，使用AdamW优化器，批大小64，学习率0.0002（带线性预热和指数衰减）。在8块NVIDIA V100 GPU上训练116小时。总损失函数 `\(\mathcal{L}_{\text{total}}\)` 是多个损失项的加权和，包括 `\(\mathcal{L}_{\text{CFM}}\)`、`\(\mathcal{L}_{\text{blur}}\)`、`\(\mathcal{L}_{\text{CCL}}\)`、辅助的梅尔重建损失、对齐损失和持续时间预测损失，各项权重系数在附录C中给出。
- 推理细节：推理分为两阶段：1) 使用CFM持续时间预测器（NFE=8）预测音素持续时间；2) 使用CFM频谱图解码器（NFE=32，分类器引导尺度4.0）生成梅尔频谱图。训练时以15%概率随机丢弃条件输入以启用分类器引导。最后使用预训练的HiFi-GAN声码器将梅尔谱图转换为22kHz波形。
- 基线与评估：基线包括NaturalSpeech 3（NS3，最强FACodec模型）、在LibriHeavy上重新训练的F5-TTS、CLaM-TTS、DiTTo-TTS，以及作为上界的FACodec语音转换（VC）系统（使用真实离散令牌和不匹配说话人嵌入重建）。评估指标包括客观指标（UTMOS, WER, SPK, MCD）和主观评估（人类ABX测试，以及使用Gemini 2.5 Pro的AudioLLM-as-a-Judge评估，包括成对比较的Win Ratio和逐样本打分的Style-MOS）。
- 消融研究设计：系统性地移除两阶段生成、VQ-VAE风格编码、条件一致性损失中的交叉条件部分、以及整个一致性损失，观察在零样本TTS和RAVDESS风格控制任务上的性能变化，并辅以频谱图可视化（图4）进行定性分析。

### ⚖️ 评分理由

- 创新性 (2.0/3)：提出了一个明确的双参考独立控制框架，并针对该问题设计了三项互补的技术（两阶段生成、VQ-VAE风格编码、CCL）。这些设计有明确的动机和针对性。但核心构建于现有的FACodec解耦表示之上，原创性主要集中在系统集成与训练策略上，而非提出全新的解耦表示或生成范式。
- 技术严谨性 (1.2/1.5)：方法描述清晰，架构设计有据可依（如两阶段生成的鲁棒性动机、VQ-VAE避免短路学习、CCL的交叉条件化原理）。消融研究较充分地验证了各组件贡献。但整体系统对预训练组件（FACodec， HiFi-GAN）的依赖性强，最终性能上限受限于此。
- 实验充分性 (1.3/1.5)：评估全面，既包含标准零样本TTS基准（LibriSpeech），也包含专门设计的可控性评估（RAVDESS），并结合了客观指标与主观感知评估（包括人类和LLM裁判）。基线选择合理，包括了SOTA系统和作为上界的VC系统。但绝对性能指标（UTMOS）略逊于NS3，论文对此的解释（设计权衡）是合理的。
- 清晰度 (0.8/1)：论文写作总体清晰，图表（架构图、消融频谱图）有助于理解。但部分技术细节（如TCF模块内部工作原理）需要结合附录阅读。数学公式表述准确。
- 影响力 (1.8/2)：对语音合成领域的可控性这一具体方向有明确贡献。双参考独立控制的功能具有实际应用价值（如虚拟助手、个性化内容创作）。论文为解决预训练解耦表示在TTS中应用不完美的问题提供了实用的工��方案。
- 开源与可复现性 (1.2/2)：
    - 开源 (0.8/1.5)：论文未明确提供代码或模型权重的开源链接，仅提供了演示页面。引用的关键组件（FACodec, UTMOS, HuBERT, UniSpeech）是开源的，但作为论文核心的完整系统未开源。
    - 可复现性 (0.4/0.5)：训练细节（数据集、超参数、损失权重、硬件）、模型架构参数（表7）、评估流程描述详尽，理论上可复现。但缺少官方代码和检查点，完全复现门槛较高。

### 🚨 局限与问题

除了论文自我提及的局限（语言依赖、FACodec上限、属性定义模糊），从审稿人角度还需指出：
1.  对预训练解耦表示的强依赖：系统的成败高度依赖于FACodec的解耦质量。论文承认FACodec解耦不完美，残留信息泄漏可能影响性能（如表1中SPK分数偏低）。这种依赖性使得FC-TTS的进步难以完全独立于上游组件的改进。
2.  评估的潜在偏差：使用AudioLLM（Gemini 2.5 Pro）作为主观评估工具是新颖的，但其评分与人类评估的相关性、潜在偏见（如对特定合成特征的偏好）未经验证。主要的主观评估（ABX）由公司内部员工完成，可能存在样本选择偏差。
3.  两阶段设计的权衡：两阶段生成虽提高了鲁棒性，但论文也承认这可能限制了自然度上限（UTMOS低于NS3）。这种鲁棒性与绝对质量之间的权衡是否最优，缺乏更深入的探讨。是否存在其他能兼顾两者的架构？
4.  风格控制的评估深度：虽然RAVDESS提供了情绪化语音数据，但“风格”是一个更宽泛的概念（包括语速、节奏、重音等）。评估是否足以证明模型能控制所有风格维度？对“风格”的定义和度量仍然模糊。
5.  训练数据的局限：仅使用LibriHeavy（有声书）进行训练，其风格多样性可能不足以覆盖真实世界的所有口语风格。模型在极端或未见风格上的泛化能力有待验证。
6.  CCL的计算开销与收益：消融研究显示，仅移除交叉条件部分的影响相对较小，而整个CCL的影响巨大。那么，复杂的交叉条件设计带来的额外收益是否显著？其计算开销与收益比是否合理？

### 📷 论文图片

![图5](https://arxiv.org/html/2605.24618v1/x5.png)


---

[← 返回 2026-05-26 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-05-26/)
