---
title: "VoiceChat-TTS: A Low-Latency Continuous Speech Synthesis Model for Interactive Agents"
date: 2026-08-17
draft: false
tags: [语音合成, 语音大模型, 流式处理, 实时处理, 语音交互]
categories: [论文速递]
description: "语音合成 | 8.2/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.13831"
---

# 📄 VoiceChat-TTS: A Low-Latency Continuous Speech Synthesis Model for Interactive Agents

标签：#语音合成 #语音大模型 #流式处理 #实时处理 #语音交互

**8.2/10** | 创新 1.1/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 1.5/1.5 | 复现 0.3/0.5 | 工程 1.3/1.5

🔥 **8.2/10** | 前25% | 文档类型：模型报告 | 评分置信度：中 | #语音合成 | #语音大模型 | #流式处理 #实时处理 | [arxiv](https://arxiv.org/abs/2608.13831)


### 👥 作者与机构

- 第一作者：Edresson Casanova（NVIDIA Corporation）
- 通讯作者：Edresson Casanova（NVIDIA Corporation，论文提供邮箱 ecasanova@nvidia.com；正文未单独标注通讯作者）
- 作者列表：Edresson Casanova（NVIDIA Corporation）、Jaehyeon Kim（NVIDIA Corporation）、Mariana Graterol Fuenmayor（NVIDIA Corporation）、Shehzeen Hussain（NVIDIA Corporation）、Viacheslav Klimkov（NVIDIA Corporation）、Valentin Mendelev（NVIDIA Corporation）、Mikyas Desta（NVIDIA Corporation）、Paarth Neekhara（NVIDIA Corporation）、Piotr Zelasko（NVIDIA Corporation）、Chen Chen（NVIDIA Corporation）、Elena Rastorgueva（NVIDIA Corporation）、Ke Hu（NVIDIA Corporation）、Ankita Pasad（NVIDIA Corporation）、Xuesong Yang（NVIDIA Corporation）、Aya Alja'fari（NVIDIA Corporation）、Rajarshi Roy（NVIDIA Corporation）、Rohan Badlani（NVIDIA Corporation）、Jason Roche（NVIDIA Corporation）、Jason Li（NVIDIA Corporation）、Zhehuai Chen（NVIDIA Corporation）

### 💡 毒舌点评

这项工作把始终在线的流式语音合成从"能做"推进到"可部署"的完成度，interruption token 加确定性静音强制在 200 例中断测试中实现 100% 的 320ms 服从率和 89.9ms 停止延迟，同时 977M 模型延迟反超 1.7B 强基线，工程闭环很扎实。但论文自己承认没有组件消融，Character-Aware Subword Encoder、gated fusion、audio prompt 等多个改动绑在一起只能看总账，单个贡献无法验证；且 unseen speaker 多轮 SECS 从 0.757 滑到 0.685，长会话身份一致性仍是明显短板。

### 📌 核心摘要

该论文针对交互式代理中大多数语音语言模型只支持轮次式对话、缺乏用户 barge-in 与连续在线合成能力的问题，提出 VoiceChat-TTS 这一低延迟、连续、可流式 TTS 模型。模型直接消费 LLM 文本 token 流，在 12.5 Hz、每帧 80ms 的 31-codebook RVQ 音频编解码器上生成语音，并通过 BOS 与 interruption 控制 token 支持静音与中断。其新颖之处在于利用 Character-Aware Subword Encoder 缓解 LLM 子词与 TTS 语料不匹配，引入 3 秒参考音频提示条件、边界嵌入与 gated fusion 以稳定多轮对话和数值精度。实验表明，在 unseen speaker 单轮测试中 WER 为 2.00%、Squim-MOS 为 4.38，相比最接近的 Audio Flamingo 3-Chat streaming decoder 显著改善，但仍低于 Qwen3-TTS-12Hz；中断实验中 Force Silence 可使 stop latency 降至 89.9ms、IOR@320ms 达 100%。延迟方面，977M 模型在 RTX A6000 上总每帧延迟为 9.62ms，约为 1.7B Qwen3-TTS 的 2.1 倍速。该模型已开源并集成到 NVIDIA Nemotron VoiceChat-11B duplex S2S 系统中，实际意义突出；主要局限是缺少组件级消融、无用户音频条件，以及 unseen speaker 长多轮身份一致性下降。

### 🔗 开源详情

- 代码：https://github.com/NVIDIA-NeMo/Speech
- 模型权重：https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B
- 数据集：论文中提及的公开语料包括 LibriTTS（train-clean-360 与 train-clean-100 子集）、HiFiTTS、HiFiTTS-2（扩展 36.7k 小时子集）、Fisher 语料；合成多轮数据约 2.5k 小时（脚本由 NeMo Data Designer 用开源 LLM 生成，语音由 Chatterbox 与 Koel-TTS 合成，说话人来自 LibriTTS 训练集）；另有专有 62 小时双说话人数据、32k 小时基于 CC 许可 YouTube 视频的内部数据、以及少量内部对话数据。论文未提供公开数据集的直接下载链接，内部/专有数据未公开。
- Demo：论文中未提及
- 复现材料：论文给出代码与权重地址；训练数据组成及 50% 单轮数据前置 0.5–5.0 秒静音的数据增强；推理时使用 top-p=0.95、CFG scale=0.2、noise scale=0.001 的 MoG 采样，实验设置部分标注为 88 次 MoGH refinement iterations（与正文 4–8 次的说法矛盾）；未见说话者评测使用 LibriTTS test-clean，已见说话者使用训练中 5 位说话者。完整训练超参数、内部数据及除上述权重外的额外检查点未公开或论文未提及。
- 论文中引用的开源项目：
  - NVIDIA NeMo Speech：https://github.com/NVIDIA-NeMo/Speech
  - NVIDIA-NemotronLabs-VoiceChat-11B：https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B
  - Audio Flamingo 3-Chat：论文中引用 [5]，未提供链接
  - Chatterbox：论文中引用（表 1 标注为 [16]，数据部分标注为 [17]），未提供链接
  - Koel-TTS：论文中引用 [8]，未提供链接
  - NeMo Data Designer：论文中提及，未提供链接
  - Silero VAD：论文中提及用于中断检测评估，未提供链接
  - Squim-MOS：论文中引用 [11]，未提供链接
  - LibriTTS、HiFiTTS、HiFiTTS-2、Fisher：作为数据集/语料引用，论文未提供直接链接

### 🏗️ 方法概述和架构

VoiceChat-TTS 的整体流程是：LLM 输出文本 token 流经文本编码后，与因果音频编解码器产生的声学 token 序列进行跨模态融合，流式解码器预测 RVQ token 层级，再由 codec decoder 实时恢复 22kHz 波形。它不是纯端到端 S2S，而是一个模块化 speech decoder，可嵌入 duplex 交互框架或传统 S2S 管道，并允许在中断后不重置 KV cache 继续生成。

下图展示了VoiceChat-TTS的整体架构，包括输入、处理模块和输出流程。

![Figure 1: VoiceChat-TTS architecture overview.](https://arxiv.org/html/2608.13831v1/Images/VoiceChat-TTS.png)

图中可见文本token和音频token的输入，通过Character-Aware Subword Encoder、Transformer Decoder和MoGH生成音频token，最后由神经音频编解码器解码器输出波形，并包含音频提示条件。


**音频编解码器**采用全因果卷积自编码器，结构类似 Audio Flamingo 3-Chat，压缩 22kHz 波形到 12.5Hz 帧率，每帧对应 80ms 音频，使用 31-codebook Residual Vector Quantization 生成声学 token。推理时仅缓存卷积块感受野内的输入，实现高效流式解码。

**文本 Tokenizer** 使用 NVIDIA Nemotron Nano 2 子词分词器，并在词汇表中加入 Beginning-of-Sequence 与 interruption token。在 LibriTTS test-clean 上，文本 token 平均速率为 4.16Hz，约每 3 个声学帧对应 1 个文本 token。训练时文本流右 padding 到与声学序列相同长度，使模型可在整个交互过程中增量处理；同时引入一个 token 延迟，让文本流领先音频流，确保模型在生成对应语音前至少观察到两个子词 token，提供有限语言看。BOS token 标记每个 assistant turn 开始，interruption token 标记停止说话并转入静音。

**Character-Aware Subword Encoder** 用于解决 LLM 词汇与 TTS 训练语料不匹配的问题。每个输入子词先被拆成字符序列，由一个浅层 Transformer encoder 编码，然后对字符级输出做平均池化，得到字符感知嵌入。这样模型可泛化到未见过的子词。此外，专门加入 subword-continuation token 嵌入，以更连贯地处理长词或碎片化词，改善增量生成时的发音准确性。

下图详细展示了Character-Aware Subword Encoder的内部结构。

![Figure 2: Character-Aware Subword Encoder architecture overview.](https://arxiv.org/html/2608.13831v1/Images/CAS.png)

图中显示子词先被分解为字符序列，输入浅层Transformer编码器，再通过平均池化生成字符感知嵌入，这有助于处理未见子词并改善发音准确性。


**Mixture of Gaussian Estimation Head** 用于加速深层 RVQ token 生成。它不采用 31 步逐层自回归解码，而是迭代 unmask RVQ token：每次迭代用 MoG 估计被 mask token 的连续嵌入向量，再量化为离散 token，逐步细化。论文指出 4 到 8 次迭代即可获得较高质量。

**Audio Prompt Conditioning** 通过 3 秒参考音频提供显式说话人信息。训练时参考音频 token 预填充声学序列开头，并 mask 该区域的损失，使其仅作为条件；推理时同样的 prompt 初始化声学上下文。此举可缓解对话开始时缺少说话人信息、以及用户说话期间上下文以静音为主的问题。

**Boundary Embeddings and Gated Fusion** 中，BOS 与 interruption token 使用可学习的文本嵌入，提供显式对话边界信号。同时，文本嵌入与声学语音嵌入之间引入 gated fusion，以控制高幅值 RVQ embedding 带来的 FP16 溢出与早期层数值不稳定，增强训练稳定性。

组件间数据流为：文本通道与声学通道共享时间轴；模型接收流式 LLM token 并增量预测声学帧；当出现 interruption token 时，模型应停止生成语音并输出静音；若没有文本输入则自动保持静音状态。整体设计以低延迟、持续在线、可中断为核心目标，强调模块化与可部署性，而非牺牲质量换取端到端简化。

### 💡 核心创新点

**1. 面向 continuous always-on 交互的流式 TTS 框架。** 以往 streaming TTS 多局限于单次响应，不原生支持跨对话保持活跃、用户 barge-in 时及时静音。VoiceChat-TTS 引入显式 interruption token、静音建模与连续生成能力，使 TTS 能作为 duplex agent 的常驻解码器运行。实验显示 learned interruption 已有 96.8% IOR@320ms，Force Silence 后达 100%。

**2. Character-Aware Subword Encoder。** 传统 incremental TTS 直接使用 LLM 子词 token 时，很多子词在 TTS 语料中稀疏或缺失。该方法先把子词转成字符序列再经浅层 Transformer 编码并池化，能泛化到未见子词，并配合 continuation token 改善长词增量发音。论文虽未做该组件单独消融，但总体 CER/WER 相比 Audio Flamingo 3-Chat 显著下降。

**3. 统一单轮与多轮语音合成训练策略。** 单轮 TTS 与多轮对话数据存在显著分布差异，例如单轮开始时立即合成语音，而多轮常以静音开始。论文对 50% 单轮数据前置 0.5–5.0 秒静音，并通过 Lhotse 动态 bucketing 将单轮与多轮样本按同一格式处理，降低模态不匹配。这一策略帮助模型在多轮测试中保持稳定质量。

**4. Deterministic Force Silence 机制。** 推理时可在 interruption token 对齐位置注入固定静音声学帧，确定性将生成流导向静音。相比纯学习响应，Force Silence 将平均 stop latency 从 228.3ms 降至 89.9ms，Leakage@1s 从 169.1ms 降至 55.8ms，同时不损害后续 turn 的恢复能力。静音帧通过对长静音片段编码后选取最频繁的 31-token codec 帧获得。

**5. 模块化 duplex-compatible 解码器工程。** VoiceChat-TTS 不替代 ASR、VAD 或 S2S 主干，而是作为可插拔高质量 speech decoder，保留传统管道的模块化与可调试性。通过与 PersonaPlex 固定文本流联合测试，CER 从 4.06% 降到 2.05%，证明其可直接提升现有 duplex S2S 系统输出质量。

### 📊 实验结果

论文主要在 LibriTTS test-clean 上进行 seen/unseen speaker 单轮与多轮语音合成评估，指标包括 CER、WER、SECS 和 Squim-MOS。多轮测试通过将同一说话人的 LibriTTS 句子分组构造合成对话进行。表 1 保留主方法、最强基线与关键多轮结果：

| 模型 | 类型 | 轮数 | CER(%) ↓ | WER(%) ↓ | SECS ↑ | Squim-MOS ↑ |
|---|---|---|---|---|---|---|
| Ground Truth | - | - | 0.48 | 1.40 | 0.830 | 4.457 |
| Chatterbox-TTS | Offline | - | 0.45 | 1.24 | 0.887 | 4.27 |
| Audio Flamingo 3-Chat | Streaming | - | 2.85 | 4.51 | 0.761 | 3.60 |
| Qwen3-TTS-12Hz | Streaming | - | 0.34 | 1.01 | 0.827 | 4.45 |
| VoiceChat-TTS (unseen) | Streaming | 1 | 1.00 | 2.00 | 0.757 | 4.380 |
| VoiceChat-TTS (unseen) | Streaming | 2 | 1.00 | 1.90 | 0.710 | 4.377 |
| VoiceChat-TTS (unseen) | Streaming | 3 | 1.10 | 2.10 | 0.696 | 4.381 |
| VoiceChat-TTS (unseen) | Streaming | 4 | 1.20 | 2.20 | 0.685 | 4.376 |
| VoiceChat-TTS (seen) | Streaming | 1 | 1.20 | 2.40 | 0.785 | 4.365 |
| VoiceChat-TTS (seen) | Streaming | 2 | 0.80 | 1.90 | 0.789 | 4.358 |
| VoiceChat-TTS (seen) | Streaming | 3 | 0.80 | 1.80 | 0.778 | 4.362 |
| VoiceChat-TTS (seen) | Streaming | 4 | 0.80 | 1.80 | 0.778 | 4.359 |

可见 VoiceChat-TTS 显著优于同源 streaming decoder Audio Flamingo 3-Chat，但与 Qwen3-TTS-12Hz 相比仍有 CER/WER/SECS 差距。多轮方面，unseen SECS 随轮数下降较明显。

表 2 展示了 PersonaPlex 与 VoiceChat-TTS 在 Full-Duplex-Bench Smooth Turn Taking 子集上的对比：VoiceChat-TTS 将 CER 从 4.06% 降至 2.05%，WER 从 5.00% 降至 2.42%，Squim-MOS 从 4.094 提升到 4.292。该对比固定 PersonaPlex 预测的文本流与时间对齐，仅用 VoiceChat-TTS 重合成语音，以隔离 speech decoder 的贡献；因说话人身份不匹配，未报告 SECS。

中断评估中，learned interruption 达到 96.8% IOR@320ms、228.3ms 平均 stop latency、169.1ms Leakage@1s、0.255% AI-CER；Force Silence 后分别为 100.0%、89.9ms、55.8ms、0.095%。评估使用 FDB User Interruption 子集全部 200 个受控示例，Silero VAD 检测语音活动，相邻段间隔小于 0.6s（用户）和 0.5s（助手）时合并。

表 3 保留主方法与最强基线的延迟比较：

| 模型 | 并发 | 参数量 | Acoustic ITL (ms) | Codec (ms) | Total (ms) |
|---|---|---|---|---|---|
| Qwen3-TTS-12Hz | 1 | 1.7B | 15.44 | 4.90 | 20.34 |
| VoiceChat-TTS | 1 | 977M | 7.16 | 2.46 | 9.62 |
| Qwen3-TTS-12Hz | 4 | 1.7B | 17.09 | 4.99 | 22.08 |
| VoiceChat-TTS | 4 | 977M | 12.35 | 2.89 | 15.24 |

所有延迟均低于 80ms 帧时长，VoiceChat-TTS 在并发 1 和 4 下均快于 Qwen3-TTS-12Hz。论文未提供组件级消融实验。

### 🔬 细节详述

- **训练数据**：单轮 TTS 约 70,159 小时英语语音，包括 LibriTTS train-clean-360 与 train-clean-100、HiFiTTS、HiFiTTS-2 36.7k 小时子集、一个 62 小时专有双说话人数据集、约 32k 小时 Creative Commons YouTube 内部数据。多轮数据包括约 2.5k 小时合成对话、Fisher 语料库及一个内部真实对话数据集。合成对话由数百万条开源 LLM 生成脚本经 NeMo Data Designer 创建，使用 Chatterbox 与 Koel-TTS 合成，50% 包含重叠语音和 barge-in；另有专门的复杂词与专名多轮交互数据用于扩大语音覆盖，每回合含 4 个不同的词。数据增强：50% 单轮数据随机前置 0.5–5.0 秒静音。文本 token 在训练时右 padding 到与声学序列相同长度，并引入一个 token 延迟使文本流领先音频流。
- **损失函数**：论文中未说明具体损失函数名称、权重与公式。
- **训练策略**：两阶段训练。预训练使用单轮 TTS 数据，1.4M 步，8 块 NVIDIA A100 GPU；微调使用完整混合数据，200k 步，32 块 NVIDIA H100 GPU。优化器 AdamW，学习率 \(4 \times 10^{-5}\)。微调阶段 batch 使用 Lhotse 动态 bucketing，每批约 240 秒音频。混合比例为 40% 单轮 TTS、15% 词表与专名数据、10% 真实对话、35% 合成 duplex 对话。未说明 warmup、学习率调度、batch size 具体样本数及训练总时长。
- **关键超参数**：总参数量 977M，其中 778M Gemma 3-based streaming TTS 模块、199M codec 模型。音频帧率 12.5Hz，每帧 80ms，31-codebook RVQ。文本 token 在 LibriTTS test-clean 平均速率 4.16Hz。参考音频 3 秒。推理时原文实验设置部分写为 88 MoGH refinement iterations，但方法部分称 4–8 次迭代已足够，存在表述不一致。未说明层数、隐藏维度、注意力头数、码本维度等具体架构超参数。
- **训练硬件**：预训练 8 块 NVIDIA A100；微调 32 块 NVIDIA H100。推理延迟评测使用 RTX A6000 GPU。
- **推理细节**：multinomial top-p sampling，\(p=0.95\)；classifier-free guidance 尺度 \(0.2\)；噪声尺度 \(0.001\)；MoG sampling 使用 88 次迭代（原文实验设置如此标注）。每个实验重复 10 次，报告 95% 置信区间；固定参考输出仅评估一次。流式模式采用 vLLM-Omni 优化。Force Silence 时，在 interruption token 对齐位置注入编码自长静音的最常见 31-token codec 帧。模型支持不重置 KV cache 的中断恢复。未见 beam size 或温度相关说明。
- **正则化或稳定训练技巧**：gated fusion 用于抑制 RVQ embedding 高幅值引起的 FP16 溢出；参考音频提示区域损失被 mask；单轮数据前置静音以减轻分布偏差；预训练到微调的两阶段训练可视为训练稳定性手段。

### ⚖️ 评分理由

*   创新性 (1.1/2)：[A_METHOD] 在 Audio Flamingo 3-Chat 流式解码器基础上加入 interruption/BOS 控制 token、Character-Aware Subword Encoder、音频提示条件、gated fusion 与 MoGH 加速，[A_SUMMARY] 显示其目标从单轮流式推进到始终在线、可打断的 continuous TTS，构成有证据的工程组合与系统级新能力。

*   技术严谨性 (1.2/1.5)：[A_METHOD] 因果卷积编解码器的感受野缓存、MoGH 迭代 unmask 替代 31 步自回归、gated fusion 控制 RVQ 高幅值 FP16 溢出等设计机制明确，论文未呈现已公开方法中的推导错误或不合理假设。

*   实验充分性 (1.0/1.5)：[A_RESULTS] 实验覆盖 seen/unseen 单轮与多轮、PersonaPlex 集成、200 例中断和并发 1/4 延迟，端到端能力与工程权衡验证较全；[A_LIMITS] 同时显示无组件消融、Squim-MOS 自动预测替代主观、竞品延迟对比参数量不匹配、多轮/中断偏合成，公平性、压力与真实场景验证仍有缺口。

*   清晰度 (0.8/1)：[A_SUMMARY] 研究目标、架构流程和主要结果表达清晰；[A_LIMITS] 指出 88 MoGH refinement iterations 与正文 4–8 次足够存在设置表述冲突，造成阅读和推理配置理解障碍。

*   影响力 (1.0/1.5)：[A_SUMMARY] 面向语音交互中常驻在线、低延迟和 barge-in 需求，已集成到 NVIDIA Nemotron VoiceChat-11B duplex S2S 系统；[A_RESULTS] 显著优于同源流式 Audio Flamingo 3-Chat 并在中断服从率和延迟上有实际收益，但客观质量仍低于 Qwen3-TTS 且 unseen 身份随轮数下降。

*   开源 (1.5/1.5)：[A_OPEN] 代码托管在 NVIDIA-NeMo/Speech，模型权重在 Hugging Face 可获取，模型级核心产物完整开放，符合代码+模型完整公开的开源锚点。

*   可复现性 (0.3/0.5)：[A_OPEN]/[A_METHOD] 架构、数据组成、两阶段训练步数与 GPU 数、优化器与学习率、推理采样参数均有披露；但 [A_LIMITS] 未说明损失函数名称/权重/公式，且完整训练超参数与内部/专有数据未公开，训练复现需依赖开放权重与代码补足。

*   工程/实践价值 (1.3/1.5)：[A_RESULTS]/[A_SUMMARY] 977M 模型在并发 1/4 下总延迟 9.62/15.24 ms，均低于 80 ms 帧时长；Force Silence 将 stop latency 降至 89.9 ms、IOR@320ms 100%，并能无 KV cache 重置恢复，已集成于 Nemotron VoiceChat-11B 显示了较强部署价值。

### 🚨 局限与问题

**论文明确承认的局限**：
- 缺少用户音频条件，模型无法根据用户声学线索动态调整韵律。
- 没有系统化的组件级消融实验，多个架构改动的单独贡献未量化；作者称开发早期的初步实验表明增益可累积，但未在论文中系统报告。
- 连续 duplex TTS 缺少标准化 TTS 专用基准，当前评测需要借用 Full-Duplex-Bench 并自定义协议。
- unseen speaker 多轮生成中 SECS 随轮数增加下降，从 0.757 降至 0.685，长会话身份一致性仍有不足。
- 未来工作包括更强的 prompt conditioning 或显式 speaker-consistency 目标、长期连续生成和重复中断恢复协议。

**审稿人发现的潜在问题**：
- 未说明损失函数，训练目标缺失使完全复现和理论判断困难。
- 没有组件消融，Character-Aware Subword Encoder、gated fusion、audio prompt 等模块提升无法从总表中分离，存在"多组件绑定"的归因风险。作者将消融归入未来工作而非在本文中完成，对于宣称多个贡献的论文而言是显著实验缺口。
- Squim-MOS 是非侵入式自动质量估计，不能替代主观 MOS，语音自然度结论可能被高估；论文自己也承认这仅是预测质量而非直接自然度测量。
- 与 Qwen3-TTS 的延迟比较使用参数规模不同的模型（977M vs 1.7B），未能剥离模型容量和实现优化对延迟的贡献。
- 延迟测量在 RTX A6000 上单机完成，缺少生产环境 GPU、多租户压力、批处理和尾部延迟数据。
- 中断评测依赖 Silero VAD 和合成 FDB 响应，真实 VAD 错误、嘈杂环境及重叠语音下的鲁棒性未验证；Force Silence 依赖静音帧的确定性注入，在复杂声学条件下的泛化性存疑。
- PersonaPlex 对比中固定了原始预测文本流，只重合成语音，不能全面反映 VoiceChat-TTS 在完整 duplex S2S 系统中的误差传播。
- 论文实验设置中写"88 MoGH refinement iterations"，与正文"4 到 8 次迭代已足够"的说法互相矛盾，可能是排版错误，但未澄清；这增加了复现混淆。
- 评估中多轮测试是通过将同一说话人的 LibriTTS 单轮句子人工拼接而成，并非真实连续对话，对多轮一致性的结论仅限于合成连续场景，不能充分代表真实交互中的说话人保持能力。

---

[← 返回 2026-08-17 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-17/)
