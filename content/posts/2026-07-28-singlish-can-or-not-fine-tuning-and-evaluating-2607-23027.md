---
title: "Singlish, Can or Not? Fine-Tuning and Evaluating Zero-Shot TTS for Singapore English"
date: 2026-07-28
draft: false
tags: [语音合成, 领域适应, 低资源, 音频理解, Transformer]
categories: [论文速递]
description: "语音合成 | 6.3/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2607.23027"
---

# 📄 Singlish, Can or Not? Fine-Tuning and Evaluating Zero-Shot TTS for Singapore English

标签：#语音合成 #领域适应 #低资源 #音频理解 #Transformer

**6.3/10** | 创新 1/2 | 严谨 1.2/1.5 | 实验 0.8/1.5 | 清晰 1/1 | 影响 1/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 1/1.5

✅ **6.3/10** | 前50% | 文档类型：应用研究 | 评分置信度：中 | #语音合成 | #领域适应 | #低资源 #音频理解 | [arxiv](https://arxiv.org/abs/2607.23027)


### 👥 作者与机构

- 第一作者：Ivan Kukanov（未说明机构）
- 通讯作者：未说明
- 作者列表：Ivan Kukanov（未说明机构）、Zheng Xin Chai（未说明机构）

### 💡 毒舌点评

本文首次将零样本 TTS 微调应用于 Singlish 这一长期被忽略的低资源英语变体，adaptation-vs-consistency 的评估拆分做出了清晰的概念贡献。然而，实验仅涉及两个预训练模型的简单全参微调，方法层面几无新意，且完全没有系统的主观听力测试，在感知说服力上明显不足。对 RADAR 2026 深伪检测挑战的数据贡献有一定实际价值，但不能弥补学术创新性的缺乏。

### 📌 核心摘要

本文针对现有零样本 TTS 系统无法复现新加坡英语（Singlish）口音的问题，系统地研究了通过针对性微调来恢复口音特征的方法。作者选取 Chatterbox 和 CosyVoice 3 两个主流零样本 TTS 模型，在 IMDA National Speech Corpus 的 50 名 Singlish 说话人上做全参微调（Chatterbox 仅微调 T3 模块，CosyVoice 3 微调 LLM 与 Flow Matching）。评估采用 CodecMOS‑Accent 协议，从自然度（UT‑MOS）、可懂度（WER）、说话人相似度（SPK‑SIM）和口音相似度（ACC‑SIM）四个维度进行客观评测，每维度计算 prompt（与参考提示比）和 match（与同文本真实语音比）两种相似度，以分离克隆保真度与口音真实性。将说话人分为 in‑domain（微调见过的 50 人）和 out‑of‑domain（完全未见的 42 人）以分离说话人记忆与口音泛化。主要结果如下表所示：

| System | Subset | UT‑MOS | WER, % | SPK‑SIM prompt | SPK‑SIM match | ACC‑SIM prompt | ACC‑SIM match |
|--------|--------|--------|--------|----------------|---------------|----------------|---------------|
| Ground Truth | in‑domain | 2.50 | 17.31 | 0.7083 | 1.0000 | 0.6277 | 1.0000 |
| Ground Truth | out‑of‑domain | 2.37 | 21.08 | 0.6543 | 1.0000 | 0.5802 | 1.0000 |
| Chatterbox | in‑domain | 3.34 | 11.48 | 0.7238 | 0.6036 | 0.5890 | 0.5114 |
| Chatterbox | out‑of‑domain | 3.33 | 13.73 | 0.6882 | 0.5364 | 0.5541 | 0.4697 |
| CosyVoice | in‑domain | 3.33 | 19.20 | 0.7774 | 0.6581 | 0.6368 | 0.5771 |
| CosyVoice | out‑of‑domain | 3.35 | 21.66 | 0.7425 | 0.5845 | 0.5959 | 0.5212 |
| F‑Chatterbox | in‑domain | 2.75 | 15.39 | 0.7913 | 0.6949 | 0.6748 | 0.6376 |
| F‑Chatterbox | out‑of‑domain | 2.76 | 16.59 | 0.7463 | 0.6055 | 0.6324 | 0.5617 |
| F‑CosyVoice | in‑domain | 3.24 | 14.68 | 0.7576 | 0.6739 | 0.6200 | 0.6036 |
| F‑CosyVoice | out‑of‑domain | 3.28 | 16.27 | 0.7148 | 0.5928 | 0.5820 | 0.5489 |
| F‑CosyVoice‑idx | in‑domain | 3.25 | 11.92 | 0.7043 | 0.7383 | 0.5811 | 0.6565 |

微调后，Chatterbox 的 in‑domain ACC‑SIM match 从 0.5114 提升至 0.6376（+0.1262），CosyVoice 从 0.5771 提升至 0.6036（+0.0265），且提升在 out‑of‑domain 上依然保持，证明模型学到了口音而非仅仅记忆说话人。实际意义在于为低资源英语变体 TTS 提供了一套可复现的微调与评估流程，并且两种微调系统为 RADAR 2026 深伪检测挑战赛提供了数据生成。主要局限是缺少系统的主观评测、仅测试两种模型，且 UT‑MOS 在自然语音与合成语音之间的评分偏差虽被谨慎解释，但仍未得到量化控制。

### 🔗 开源详情

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及模型权重链接。
- 数据集：IMDA National Speech Corpus Part 3（通过 HuggingFace 镜像获取）  
  链接：https://huggingface.co/datasets/mesolitica/IMDA-STT
- Demo：论文中未提及。
- 复现材料：论文在实验部分给出了完整的训练配置、超参数、数据预处理流程、评估指标及推理设置，但未单独提供复现代码仓库或配置文件。
- 论文中引用的开源项目：
  - Chatterbox：https://github.com/resemble-ai/chatterbox
  - CosyVoice 3（及 CosyVoice 系列）：https://github.com/FunAudioLLM/CosyVoice
  - ECAPA-TDNN（speechbrain 实现，用于说话人相似度）：https://github.com/speechbrain/speechbrain
  - CommonAccent ECAPA-TDNN（口音相似度模型）：https://huggingface.co/Jzuluaga/accent-id-commonaccent_ecapa
  - Singlish Whisper（用于 WER 计算和过滤）：https://huggingface.co/mjwong/whisper-large-v3-turbo-singlish
  - UT-MOS（自然度预测器，VoiceMOS Challenge 系列）：https://github.com/nii-yamagishilab/mos-finetune-ssl
  - IMDA-STT 数据集 HuggingFace 版本：https://huggingface.co/datasets/mesolitica/IMDA-STT

### 🏗️ 方法概述和架构

整体流程分为三个阶段：数据预处理、微调训练、零样本推理与客观评测。输入为 Singlish 语音及其文本，输出为合成语音和一系列客观指标。

整体流程分为三个阶段，下图清晰地展示了这三个阶段及其之间的联系。

![Figure 2: Three-phase experimental pipeline: fine-tuning TTS models on 50 in-domain Singlish speakers with per-speaker 60%/20%/20% splits (Phase 1); inference on in-domain eval split utterances and unseen out-of-domain speakers, with prompt](https://arxiv.org/html/2607.23027v1/x2.png)

图中详细展示了Phase 1的数据划分与微调训练、Phase 2的域内与域外推理设置，以及Phase 3中分别评估模型对已见说话人的‘适应性’和对未见说话人的‘一致性’。


**数据预处理**：从 IMDA NSC Part 3 的 ∼1000 小时对话数据出发，使用 Huggingface 版本 `mesolitica/IMDA-STT`。首先对每条语音运行 Singlish Whisper ASR（`whisper-large-v3-turbo-singlish`）计算 WER，丢弃 WER > 50% 的样本以去除语音‑文本对齐较差的句段，最终保留 85.7% 的语句。然后按说话人切分，选出 50 人作为 in‑domain 集（男 25、女 25，总 55.50 小时，平均每人 1.11 小时），42 人作为 out‑of‑domain 集（总 31.32 小时，男 14,女 28），两组说话人互不重叠。In‑domain 内部按每说话人 60%/20%/20% 划分训练、验证、评估集，确保评估集的音频提示与合成目标分离，即提示句本身不被合成。

**微调 Chatterbox**：仅微调 T3 模块（自回归 Llama‑style transformer，将文本映射到离散语音 token，即 S3 语音 token），其余组件（S3Gen 流匹配解码器、VoiceEncoder）保持冻结。文本词汇表扩展至 2454 个 token。每个训练样本包含预计算的文本 token、约 25 Hz 的 S3 语音 token、句子级说话人嵌入以及 3 秒参考音提示 token。训练使用文本交叉熵损失 + 语音交叉熵损失的联合优化，优化器为 AdamW，学习率 \(1 \times 10^{-5}\)，线性衰减、无 warmup，batch size 16，训练 100 个 epoch（共 73,600 步），损失从 6.0 降至 \(\sim 10^{-3}\)。推理时沿用 Chatterbox 的零样本克隆流程：给出一条参考音频（每说话人选取该说话人的平均时长，约 8 秒），控制温度 0.75、CFG weight 0.50、重复惩罚 1.35、夸张度 0.40。训练过程中进行主观听力检查以确认模型适应性。

**微调 CosyVoice 3**：基于官方训练脚本，渐进式调整可训练组件。最初逐个评估微调 LLM、Flow Matching 和声码器的效果，发现微调 LLM 对口音适应提升最显著，Flow Matching 的微调未产生可感知变化，而微调声码器引入静电噪声且降低质量，因此最终只微调 LLM 和 Flow Matching 模块，冻结声码器。使用两种提示模板：“Speaker ID prompt”（“You are speaker {speaker ID}.<|endofprompt|>”）和“Default prompt”（“You are a helpful assistant.<|endofprompt|>”）。Speaker ID 模式同时使用说话人嵌入，适合复用已学说话人表征，但仅能用于 in‑domain 说话人；Default 模式关闭说话人嵌入以适应纯粹的零样本推理。训练采用 Adam 优化器，恒定学习率 \(5 \times 10^{-7}\)，warmup 2500 步，梯度裁剪 5，梯度累积 2，最大批帧数 2000，训练 200 个 epoch；最终模型权重取验证集表现最好的 5 个 epoch 的均值。推理时，零样本模式（F‑CosyVoice）根据参考音频及其对应转录合成语音；SFT 模式（F‑CosyVoice‑idx）仅依据说话人 ID 生成，无需参考音频。所有其他解码参数保持官方默认值。

**评估协议**：采用 CodecMOS‑Accent 客观评测方案。自然度用 UT‑MOS（基于 SSL ensemble 的 MOS 预测器）；可懂度用 Singlish Whisper ASR 计算 WER；说话人相似度（SPK‑SIM）用 ECAPA‑TDNN 计算合成语音与提示/真实语音的余弦相似度；口音相似度（ACC‑SIM）用 CommonAccent ECAPA‑TDNN（在包含 Singlish 的口音分类任务上微调）计算同一度量。每种相似度都分别计算 prompt 版本（与参考提示比）和 match 版本（与同文本真实语音比），前者度量克隆保真度，后者度量口音真实性。Ground‑truth 语音在 match 上为 1.0，其 prompt 值提供跨内容同说话人的理论上限。

### 💡 核心创新点

1. **首次 Singlish TTS 系统研究**：填补了 Singlish 这一低资源英语变体在零样本 TTS 方面的空白，量化了开源模型在口音保持上的失败（ACC‑SIM match 仅 0.47–0.58），并通过微调将口音相似度提升 0.03–0.13。
2. **Adaptation vs. Consistency 评估拆分**：将评测划分为 in‑domain（见过的说话人）和 out‑of‑domain（完全未见的说话人），有效区分“记忆特定说话人”与“学到口音特征”，证明微调带来的口音泛化能力，而非仅记忆说话人。
3. **应用 CodecMOS‑Accent 评测协议于 Singlish**：首次将对齐主客观的相关客观指标（UT‑MOS、WER、SPK‑SIM、ACC‑SIM，含 prompt/match 双维度）引入 Singlish TTS 评测，为后续工作提供可比较的基准。
4. **可复现的数据处理与训练流水线**：给出了从原始 IMDA NSC 对话数据到干净微调集的完整流程（ASR 过滤、说话人平衡），具有较强的实际参考价值。
5. **社区贡献**：微调后的两个 Singlish TTS 系统被用于 RADAR 2026 音频深伪检测挑战赛的数据生成，为相关社区提供了资源。

### 📊 实验结果

表 V 汇总了所有系统在四个客观指标上的评估结果，涵盖真实语音（Ground Truth）、未微调的基础模型以及微调后的模型，分别在微调中见过的说话人（in-domain）和未见过的说话人（out-of-domain）上进行评测。相似度同时报告 prompt 版本（与参考提示比较）和 match 版本（与同文本真实语音比较）。

| System | Subset | UT‑MOS | WER, % | SPK‑SIM prompt | SPK‑SIM match | ACC‑SIM prompt | ACC‑SIM match |
|--------|--------|--------|--------|----------------|---------------|----------------|---------------|
| Ground Truth | in‑domain | 2.50 | 17.31 | 0.7083 | 1.0000 | 0.6277 | 1.0000 |
| Ground Truth | out‑of‑domain | 2.37 | 21.08 | 0.6543 | 1.0000 | 0.5802 | 1.0000 |
| Chatterbox | in‑domain | 3.34 | 11.48 | 0.7238 | 0.6036 | 0.5890 | 0.5114 |
| Chatterbox | out‑of‑domain | 3.33 | 13.73 | 0.6882 | 0.5364 | 0.5541 | 0.4697 |
| CosyVoice | in‑domain | 3.33 | 19.20 | 0.7774 | 0.6581 | 0.6368 | 0.5771 |
| CosyVoice | out‑of‑domain | 3.35 | 21.66 | 0.7425 | 0.5845 | 0.5959 | 0.5212 |
| F‑Chatterbox | in‑domain | 2.75 | 15.39 | 0.7913 | 0.6949 | 0.6748 | 0.6376 |
| F‑Chatterbox | out‑of‑domain | 2.76 | 16.59 | 0.7463 | 0.6055 | 0.6324 | 0.5617 |
| F‑CosyVoice | in‑domain | 3.24 | 14.68 | 0.7576 | 0.6739 | 0.6200 | 0.6036 |
| F‑CosyVoice | out‑of‑domain | 3.28 | 16.27 | 0.7148 | 0.5928 | 0.5820 | 0.5489 |
| F‑CosyVoice‑idx | in‑domain | 3.25 | 11.92 | 0.7043 | 0.7383 | 0.5811 | 0.6565 |

**口音相似度（ACC‑SIM match）**：这是口音迁移的主要指标。未微调时，Chatterbox 的口音相似度最低（in‑domain 仅 0.5114），表明单次提示无法诱导出 Singlish 口音；微调后提升幅度最大（+0.1262，至 0.6376）。CosyVoice 起点较高（0.5771），提升较小（+0.0265），符合其基座模型对 Singlish 已有一定覆盖的判断。在 out‑of‑domain 上，F‑Chatterbox 的 ACC‑SIM match 达到 0.5617，甚至超过微调前 in‑domain 的得分（0.5114），说明模型学到了泛化的口音特征而非仅仅记忆说话人。值得注意的是，F‑Chatterbox 的 prompt ACC‑SIM（0.6748）超过了 Ground Truth 的同一指标（0.6277），暗示模型可能趋向于生成一种口音平均化的语调，而非精确复刻特定提示说话人的特征。

下图展示了各系统在in-domain和out-of-domain说话人集上的口音相似度（ACC-SIM）分布，可直观对比微调前后的效果。

![Figure 5: In-/out-of-domain distribution across systems.](https://arxiv.org/html/2607.23027v1/x6.png)

图中可见，微调后的F-Chatterbox在两个子集上的分布均向高分偏移，且在out-of-domain上的分布甚至优于微调前Chatterbox在in-domain上的表现，这与主模型分析中口音泛化的结论一致。


**说话人相似度（SPK‑SIM match）**：微调后，Chatterbox 的 in‑domain 说话人相似度从 0.6036 提升至 0.6949，CosyVoice 则相对平坦。F‑CosyVoice‑idx 利用学到的说话人 ID 而非音频提示，获得了最高的 match 相似度（SPK‑SIM 0.7383，ACC‑SIM 0.6565），但无法用于新说话人，且其 prompt 相似度最低（0.7043），表明在追求口音泛化的同时可能牺牲了对提示的忠实度。

**可懂度（WER）**：真实 Singlish 的 WER 较高（17.31–21.08%），部分源于 Singlish Whisper 本身对口语变体的识别困难。未微调的 Chatterbox 生成过于干净的“中性”英语，WER（11.48%）甚至低于真实语音；微调后 WER 上升至 15.39%，更接近真实分布。CosyVoice 未微调时 WER 高达 19.20%，在短句上稳定性差且存在幻觉现象，微调后显著降至 14.68%。

**自然度（UT‑MOS）**：真实 Singlish 得分最低（2.50/2.37），未微调模型得分最高（3.33–3.35），反映了该指标对干净合成语音的偏向。微调后，F‑Chatterbox 的 UT‑MOS 从 3.34 降至 2.75，F‑CosyVoice 亦有小幅下降，表明合成语音在声学特征上更接近带噪声的真实 Singlish，而非质量下降。因此，UT‑MOS 在此仅作为距离“干净合成规范”的偏差诊断，而非绝对质量指标。

综合来看，微调使口音相似度和说话人相似度整体提升，且在未见过说话人上仍保持优势，证明模型泛化了 Singlish 口音。两种基础模型在失败模式和恢复路径上存在差异：Chatterbox 牺牲了原有的过度清晰度以换取更地道的 Singlish 表达，CosyVoice 的微调则同时修复了幻觉导致的高 WER。基于说话人 ID 的 F‑CosyVoice‑idx 在已知说话人上将口音和说话人保真度推向最高，但以无法泛化到新说话人和降低提示忠实度为代价。

### 🔬 细节详述

- **训练数据**：IMDA NSC Part 3 对话数据，经 Singlish Whisper WER \(\leq\) 50% 过滤后保留约 85.7% 语句；in‑domain 共 50 说话人，55.50 小时，19,626 句；out‑of‑domain 42 说话人，31.32 小时，13,505 句。数据预处理包括 VAD（隐含在原始切分中）和 WER 过滤。
- **损失函数**：Chatterbox 使用“文本 Cross‑Entropy + 语音 Cross‑Entropy”联合损失，权重均为 1；CosyVoice 3 损失未明确说明，但推测为 LLM 的标准 next‑token prediction CE 与 Flow Matching 的扩散匹配损失，权重保持默认。
- **Chatterbox 训练策略**：优化器 AdamW，学习率 \(1 \times 10^{-5}\)，线性衰减，无 warmup，bf16 精度，batch size 16，100 epochs（73,600 步），训练至损失 \(6.0 \rightarrow \sim 10^{-3}\)。
- **CosyVoice 3 训练策略**：优化器 Adam，学习率 \(5 \times 10^{-7}\)，恒定学习率，warmup 2500 步，梯度裁剪 5，梯度累积 2，max batch frames 2000，200 epochs，取 top‑5 验证 epoch 的权重平均。微调组件由渐进式感知评估决定，未进行网格搜索。
- **关键超参数**：Chatterbox 词表扩展至 2,454；推理温度 0.75，CFG weight 0.50，重复惩罚 1.35，夸张度 0.40。CosyVoice 3 除提示模板外其余均使用官方默认配置。两种模型均未提及模型隐层大小、层数等结构细节。
- **训练硬件**：论文中未给出任何 GPU 型号或训练时长。
- **推理细节**：均为零样本克隆模式：每条合成使用同一说话人的一段约 8 秒音频作为提示，提示与目标语句不重叠；Chatterbox 的输出由自回归 T3 生成 S3 token 后经 S3Gen 声码；CosyVoice 由 LLM 生成语音 token 再经 Flow Matching 解码和声码器合成。推理参数在 in‑domain 验证集上选定。
- **正则化与稳定技巧**：CosyVoice 采用元素级权重平均；Chatterbox 未特别说明额外正则化。

### ⚖️ 评分理由

*   创新性 (1.0/2)：首次将零样本TTS微调应用于Singlish这一低资源英语变体，并提出adaptation-vs-consistency评估拆分，概念贡献清晰，但方法上仅为对两个预训练模型的全参微调，无新方法贡献，因此创新性一般。

*   技术严谨性 (1.2/1.5)：微调模块的选择（仅微调T3或LLM+Flow Matching）基于渐进式感知检查，训练超参数明确，无推导错误或不合理假设，整体技术实施正确。

*   实验充分性 (0.8/1.5)：实验设计了in/out-domain分离和四项客观指标，但完全缺少系统的主观听力测试（见A_LIMITS-1），WER仅依赖单一Singlish Whisper且解释存在偏差（A_LIMITS-2），缺少与LoRA等适配方法的对比（A_LIMITS-3），口音泛化未跨语料库验证（A_LIMITS-4），Acc-SIM可能对细粒度语音变化不敏感（A_LIMITS-5），这些不足限制了结论的生态效度。

*   清晰度 (1.0/1)：论文结构清晰，方法论、实验设置和结果分析叙述详尽，图表及表格呈现有效，便于读者理解和复现思路。

*   影响力 (1.0/1.5)：作为首篇系统性Singlish TTS研究，为低资源英语变体TTS提供了可复现的基准与评估流程，微调系统被用于RADAR 2026深伪检测挑战赛数据生成，对语音合成与口音研究社区有实际影响，但限于单一语言变体，且缺乏主观评估削弱了其影响力。

*   开源 (0.0/1.5)：论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：论文详细报告了训练超参数、学习率、批大小、数据预处理和评估协议，但未公开训练硬件型号与时长，且缺少可执行的复现代码仓库或配置文件，复现需要靠读者自行实现。

*   工程/实践价值 (1.0/1.5)：实现并验证了两个Singlish TTS微调系统，形成了一套完整的数据处理、微调和评测流水线，并实际应用于深伪检测挑战赛数据生成，具有明确的工程落地价值。

### 🚨 局限与问题

**论文明确承认的局限**：
- UT‑MOS 偏向干净合成语音，不宜直接解释为感知质量，仅作为偏差诊断工具。
- F‑CosyVoice‑idx 基于说话人 ID，无法用于新说话人。
- 仅测试了两个模型架构，尚未验证方法在其他 TTS 系统上的泛化性。

**审稿人发现的潜在问题**：
1. **无标准主观听力测试**：口音相似度和自然度最终依赖于人类感知，纯客观指标（特别是 Acc‑SIM）虽已验证与主观评分相关，但未进行任何正式的主观实验，结论的生态效度存疑。即使训练中有非正式主观检查，也不构成科学评估。
2. **WER 指标的解释偏差**：使用 Singlish Whisper 计算 WER，微调后 WER 上升可能只是合成语音更匹配该 ASR 的声学特征，而非真正可懂度下降。缺乏其他 ASR 或人类转录验证，使可懂度变化的因果链条不清晰。
3. **微调策略过于简单**：缺少与其他适配方法（如 LoRA、adapter、仅微调部分层）的对比或消融研究，无法证明全参微调的必要性或效率。从实用角度看，全参微调计算成本高，可能限制推广。
4. **口音泛化的数据限制**：out‑of‑domain 说话人虽未见于训练，但仍来自同一语料库（IMDA NSC Part 3），说话风格和录音条件可能与 in‑domain 高度相似。真实跨语料库的泛化能力未经验证，可能高估泛化性。
5. **评估指标的局限性**：CodecMOS-Accent 协议虽已校准，但 Acc‑SIM 仅基于一个口音分类模型，可能对细粒度的语音学变化不敏感，无法区分“音段正确”和“超音段自然”。论文未报告分类置信度或类别概率，仅使用余弦相似度可能简化问题。

---

[← 返回 2026-07-28 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-28/)
