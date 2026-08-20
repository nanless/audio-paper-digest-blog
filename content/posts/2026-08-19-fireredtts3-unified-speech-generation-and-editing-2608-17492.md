---
title: "FireRedTTS3: Unified Speech Generation and Editing with Semantically Enriched Speech Representations"
date: 2026-08-19
draft: false
tags: [语音合成, 语音克隆, 语音编辑, 生成模型, 多语言]
categories: [论文速递]
description: "语音合成 | 9.0/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.17492"
---

# 📄 FireRedTTS3: Unified Speech Generation and Editing with Semantically Enriched Speech Representations

标签：#语音合成 #语音克隆 #语音编辑 #生成模型 #多语言

**9.0/10** | 创新 1.6/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 清晰 0.9/1 | 影响 1.3/1.5 | 开源 1.2/1.5 | 复现 0.4/0.5 | 工程 1.1/1.5

🔥 **9.0/10** | 前10% | 文档类型：方法研究 | 评分置信度：高 | #语音合成 | #生成模型 | #语音克隆 #语音编辑 | [arxiv](https://arxiv.org/abs/2608.17492)


### 👥 作者与机构

- 第一作者：Feiyu Shen（小红书）
- 作者团队：Kun Xie、Yichen Wu、Ziqi Dai、Yichen Han、Junjie Li 等；机构为小红书及合作团队。

### 💡 毒舌点评

这项工作抓住了连续语音表征的关键矛盾：既想保留声学细节，又想借助文本 LLM 的指令能力。RedAE 的语义教师设计确实漂亮，公开模型和多任务评测也很完整；但“简单”并不等于没有工程代价，训练 tokenizer、LLM-DiT 和多种编辑评测的成本很高，开放域音色、长文本和极端方言仍需要独立验证。

### 📌 核心摘要

FireRedTTS3 以冻结的语音理解 Audio Encoder 作为语义教师，训练 RedAE 连续语音自动编码器，把语义与细粒度声学信息共同压进可建模的连续 latent。其上使用轻量 LLM-DiT，自回归生成 25 Hz/50 Hz 表征，提供 Base 版多语言多方言零样本克隆和 Instruct 版语音设计、内容编辑及音高、音量、语速控制。Seed-TTS-Eval 上 Base 的平均 WER/CER 为 3.04、平均说话人相似度为 78.8，论文报告其平均错误率最低且相似度最高；编辑评测还使用 WER/CER、编辑准确率、RDE、RAE 和相似度。

2 Method FireRedTTS3 consists of two key components: the RedAE Tokenizer, a semantically enriched speech tokenizer, and a lightweight LLM-DiT generation framework.。

For the first direction, Ming-UniAudio [41] extracts semantic features from VAE features with an additional module; VibeVoice [35] uses a separate semantic VAE to guide LLM modeling; and dots.tts [8] adds an ASR objective during VAE training for explicit semantic supervision.。

We use Whisper-large-v3 [36] for English WER, Paraformer-ZH [13] for Chinese CER, and WavLM-Large for speaker similarity.。

The high Cantonese CER is attributed to the limited recognition capability of Whisper-large-v3. CER/WER(%)↓\downarrow Speaker Similarity(%)↑\uparrow Language MiniMax ElevenLabs VoxCPM2 FishAudioS2 dots.tts(Pre.) FireRedTTS3 MiniMax ElevenLabs VoxCPM2 FishAudioS2 dots.tts(Pre.) FireRedTTS3 Arabic 1.67 1.67 13.05 3.50 37.91 1.75 73.6 70.6 79.1 75.0 7.5 78.9 Cantonese 34.1 51.51 38.58 30.67 37.91 40.32 7.8 67.0 83.5 80.5 84.7 83.9 Chinese 2.25 16.03 1.14 0.73 1.08 0.91 78.0 67.7 82.5 81.6 82.3 84.2 Czech 3.8 2.1 24.13 2.84 5.05 3.17 79.6 68.5 78.3 79.8 83.8 86.1 Dutch 1.14 0.80 0.91 0.9 1.20 1.15 73.8 68.0 80.8 73.0 81.4 84.3 English 2.16 2.34 2.29 1.62 1.06 2.12 75.6 61.3 85.4 79.7 86.9 86.8 Finnish 4.67 2.96 2.63 3.3 3.4 3.10 83.5 75.9 89.0 81.9 8.0 89.9 French 4.10 5.2 4.53 3.05 3.82 5.28 62.8 53.5 73.5 69.8 78.2 81.0 German 1.91 0.57 0.68 0.5 1.03 0.69 73.3 61.4 80.3 76.7 79.5 83.3 Greek 2.02 0.9 2.84 5.74 2.97 1.24 82.6 73.3 86.0 79.5 87.6 89.3 Hindi 6.96 5.83 19.70 14.64 14.32 7.02 81.8 73.0 85.6 82.1 84.5 87.2 Indonesian 1.24 1.06 1.08 1.46 2.71 1.42 72.9 6.0 80.0 76.3 80.8 83.3 Italian 1.54 1.74 1.56 1.27 3.16 2.28 69.9 57.9 78.0 74.7 84.5 83.6 Japanese 3.52 10.65 4.63 2.76 7.16 3.60 7.6 73.8 82.8 79.6 83.1 82.8 Korean 1.75 1.87 1.96 1.18 5.30 2.42 7.6 70.0 83.3 81.7 84.3 86。

因此，结论应限定在论文实际报告的数据、模型与评价协议内。

### 🔗 开源详情

代码与模型：论文明确给出 https://github.com/FireRedTeam/FireRedTTS3。
评测材料：Seed-TTS-Eval、MiniMax-MLS-Test、InstructTTS-Eval，以及编辑基线 Ming-Freeform-Audio-Edit 均给出链接或数据入口。
复现状态：推理和评测较可复现，完整训练语料、硬件和训练日志未完全公开。

### 🏗️ 方法概述和架构

系统输入 24 kHz 波形，先按 480 个采样点切成 50 Hz 帧。RedAE 的编码器提取连续表示，再以 25 Hz latent 作为 LLM-DiT 的建模目标；解码器把低速 latent 上采样到 50 Hz，预测 STFT 频谱并通过 iSTFT 重建波形。 RedAE 是混合自动编码器：语义 Audio Encoder 在训练时冻结，提供来自 ASR、说话人验证等任务的语义监督；主编码器和解码器联合优化重建、对抗、mel、特征匹配等损失，避免 VQ/RVQ 把音色和瞬态细节离散化丢失。语义教师只参与 tokenizer 训练，之后被移除，使下游 LLM-DiT 不必额外携带语义分支。 FireRedTTS3 的生成器采用 Qwen3 风格 Transformer 与 DiT 头，在文本 hidden states 条件下预测连续帧并用 stop 预测结束。Base 处理多语言、多方言零样本克隆；Instruct 将任务、参考语音和编辑指令映射到统一序列，支持插入、删除、替换以及音高、音量、语速等局部控制。训练和推理沿用自回归上下文，因此能复用文本 LLM 的指令跟随能力，但也需要控制误差累积。

In this work, we propose FireRedTTS3, an LLM-DiT speech synthesis framework that mitigates error accumulation at the representation level, without additional semantic modules, multi-stage tokenizer training pipelines, or complex architectures.。

The resulting representations stabilize downstream LLM-DiT modeling, enabling FireRedTTS3 to maintain a simple autoregressive architecture. • Robust multilingual and multi-dialect voice cloning.。

2.1 RedAE Tokenizer RedAE provides semantically enriched continuous speech representations for stable LLM-DiT modeling.。

![Figure 1: An overview of FireRedTTS3, including (a) the RedAE Tokenizer with semantic supervision, (b) FireRedTTS3-Base for multilingual and multi-dialect voice cloning, and (c) FireRedTTS3-Instruct for voice cloning, instruction-controlled voice design, and speech editing.](https://arxiv.org/html/2608.17492v1/image/fireredtts3_arch.png)

从实现边界看，系统的输入、表示、核心模块、训练或推理路径和输出评价需要连成一条可复核的数据流：输入先经过论文定义的预处理或表示，再进入模型、检索框架或评估协议；中间状态承载特征变换、对齐、重构、生成或决策信息，最后由明确的预测、分数、序列或部署信号完成任务。训练目标、推理顺序、数据划分、资源限制和失败条件共同决定结果能否复现。正文没有披露的网络尺寸、优化器、随机种子、硬件或阈值保持为未说明，不能用常见实现替代；对于实时系统，还应同时核对窗口、上下文、延迟、内存和功耗约束。

### 💡 核心创新点

1. 用冻结语音理解编码器提供语义教师，构造连续且语义增强的 RedAE 表征。 具体体现在2 Method FireRedTTS3 consists of two key components: the RedAE Tokenizer, a semantically enriched speech tokenizer, and a lightweight LLM-DiT generation framework.。该贡献同时限定了训练信号、数据条件与部署前提。

2. 在同一 LLM-DiT 框架中覆盖克隆、语音设计和语音编辑，而不再为每个任务单独堆叠语义模块。 论文给出的实现边界是For the first direction, Ming-UniAudio [41] extracts semantic features from VAE features with an additional module; VibeVoice [35] uses a separate semantic VAE to guide LLM modeling; and dots.tts [8] adds an ASR objective during VAE training for explicit semantic supervision.。收益来源仍需在相同数据、后处理和评价协议下验证。

3. 以连续 latent 替代多级量化 token，兼顾文本指令建模与声学保真。 实验或消融显示We use Whisper-large-v3 [36] for English WER, Paraformer-ZH [13] for Chinese CER, and WavLM-Large for speaker similarity.。比较结果仅适用于相应数据、基线和指标口径；未报告独立消融时不作组件因果归因。

4. 工程含义必须和条件一起解读：The high Cantonese CER is attributed to the limited recognition capability of Whisper-large-v3. CER/WER(%)↓\downarrow Speaker Similarity(%)↑\uparrow Language MiniMax ElevenLabs VoxCPM2 FishAudioS2 dots.tts(Pre.) FireRedTTS3 MiniMax ElevenLabs VoxCPM2 FishAudioS2 dots.tts(Pre.) FireRedTTS3 Arabic 1.67 1.67 13.05 3.50 37.91 1.75 73.6 70.6 79.1 75.0 7.5 78.9 Cantonese 34.1 51.51 38.58 30.67 37.91 40.32 7.8 67.0 83.5 80.5 84.7 83.9 Chinese 2.25 16.03 1.14 0.73 1.08 0.91 78.0 67.7 82.5 81.6 82.3 84.2 Czech 3.8 2.1 24.13 2.84 5.05 3.17 79.6 68.5 78.3 79.8 83.8 86.1 Dutch 1.14 0.80 0.91 0.9 1.20 1.15 73.8 68.0 80.8 73.0 81.4 84.3 English 2.16 2.34 2.29 1.62 1.06 2.12 75.6 61.3 85.4 79.7 86.9 86.8 Finnish 4.67 2.96 2.63 3.3 3.4 3.10 83.5 75.9 89.0 81.9 8.0 89.9 French 4.10 5.2 4.53 3.05 3.82 5.28 62.8 53.5 73.5 69.8 78.2 81.0 German 1.91 0.57 0.68 0.5 1.03 0.69 73.3 61.4 80.3 76.7 79.5 83.3 Greek 2.02 0.9 2.84 5.74 2.97 1.24 82.6 73.3 86.0 79.5 87.6 89.3 Hindi 6.96 5.83 19.70 14.64 14.32 7.02 81.8 73.0 85.6 82.1 84.5 87.2 Indonesian 1.24 1.06 1.08 1.46 2.71 1.42 72.9 6.0 80.0 76.3 80.8 83.3 Italian 1.54 1.74 1.56 1.27 3.16 2.28 69.9 57.9 78.0 74.7 84.5 83.6 Japanese 3.52 10.65 4.63 2.76 7.16 3.60 7.6 73.8 82.8 79.6 83.1 82.8 Korean 1.75 1.87 1.96 1.18 5.30 2.42 7.6 70.0 83.3 81.7 84.3 86。测量结果与作者解释仍需和未覆盖的部署条件区分。

5. 可复现边界是上述证据中的数据规模、输入预处理、训练/推理设置和评价指标；这些条件若没有同步满足，不能把论文的局部结果概括成普遍能力。

因此，缺失的配置、样本范围和统计检验会影响复现性与外部有效性。

### 📊 实验结果

Seed-TTS-Eval 的 Test-EN/Test-ZH/Test-Hard 平均错误率为 3.04%，平均相似度为 78.8%；Base 在 Test-ZH 和 Test-EN 的相似度分别为 80.9 和 77.2。与 CosyVoice3、Qwen3-TTS、VoxCPM2 等系统相比，论文报告 Base 的平均错误率最低、平均相似度最高。编辑实验覆盖语义插入/删除/替换、自由指令以及音高、音量、语速控制，并用 Gemini 评估指令一致性。

3.4 Instruction-Controlled Voice Design Table 3: Instruction-following accuracy on InstructTTSEval.。

Experimental Setup We evaluate FireRedTTS3-Base and FireRedTTS3-Instruct on four benchmarks covering multilingual voice cloning, instruction-controlled voice design, and speech editing.。
| 实验维度 | 全文报告（保留原条件与指标） |
|---|---|
| 数据/训练设置 | We use Whisper-large-v3 [36] for English WER, Paraformer-ZH [13] for Chinese CER, and WavLM-Large for speaker similarity. |
主要结果 | The high Cantonese CER is attributed to the limited recognition capability of Whisper-large-v3. CER/WER(%)↓\downarrow Speaker Similarity(%)↑\uparrow Language MiniMax ElevenLabs VoxCPM2 FishAudioS2 dots.tts(Pre.) FireRedTTS3 MiniMax ElevenLabs VoxCPM2 FishAudioS2 dots.tts(Pre.) FireRedTTS3 Arabic 1.67 1.67 13.05 3.50 37.91 1.75 73.6 70.6 79.1 75.0 7.5 78.9 Cantonese 34.1 51.51 38.58 30.67 37.91 40.32 7.8 67.0 83.5 80.5 84.7 83.9 Chinese 2.25 16.03 1.14 0.73 1.08 0.91 78.0 67.7 82.5 81.6 82.3 84.2 Czech 3.8 2.1 24.13 2.84 5.05 3.17 79.6 68.5 78.3 79.8 83.8 86.1 Dutch 1.14 0.80 0.91 0.9 1.20 1.15 |
| 对照、消融或部署指标 | 3.4 Instruction-Controlled Voice Design Table 3: Instruction-following accuracy on InstructTTSEval. |

上述结果应结合数据集、基线、指标方向和测量条件理解。

### 🔬 细节详述

评测使用 Seed-TTS-Eval、MiniMax-MLS-Test 和 InstructTTS-Eval；语音识别采用英文 WER、中文 CER，身份保持使用 WavLM-Large。语速控制报告相对时长误差，音量控制报告相对振幅误差。RedAE 训练阶段采用冻结教师、重建与 GAN 目标；LLM-DiT 阶段由文本和参考语音条件生成连续表示。公开仓库还链接 Seed-TTS-Eval、MiniMax 数据集与 Ming-Freeform-Audio-Edit。

数据、训练、实现和部署条件共同决定结果的可复现范围。

- In this work, we propose FireRedTTS3, an LLM-DiT speech synthesis framework that mitigates error accumulation at the representation level, without additional semantic modules, multi-stage tokenizer training pipelines, or complex architectures.。

- The resulting representations stabilize downstream LLM-DiT modeling, enabling FireRedTTS3 to maintain a simple autoregressive architecture. • Robust multilingual and multi-dialect voice cloning.。

- 2.1 RedAE Tokenizer RedAE provides semantically enriched continuous speech representations for stable LLM-DiT modeling.。

- 3.4 Instruction-Controlled Voice Design Table 3: Instruction-following accuracy on InstructTTSEval.。

- Experimental Setup We evaluate FireRedTTS3-Base and FireRedTTS3-Instruct on four benchmarks covering multilingual voice cloning, instruction-controlled voice design, and speech editing.。

- Experiments show that FireRedTTS3-Base achieves the best average speech intelligibility and speaker similarity among compared systems on Seed-TTS-Eval and MiniMax-MLS-Test, while FireRedTTS3-Instruct outperforms competing systems on InstructTTSEval and Ming-Freeform-Audio-Edit.。

论文未报告的参数、硬件、随机种子和失败案例仍是复现与外推的不确定性。

上述实现条件共同限定了结果的复现边界。

### ⚖️ 评分理由

创新性: 1.6/2 RedAE 把语义教师蒸馏到连续声学表征，减少量化损失并统一克隆、设计和编辑。 技术严谨性: 1.2/1.5 架构、损失和多个任务的评测定义清楚，但部分训练细节仍依赖附录和外部评测脚本。 实验充分性: 1.3/1.5 Seed-TTS-Eval、MiniMax-MLS-Test 和编辑任务覆盖较全，包含多语言、声学控制与指令一致性。 清晰度: 0.9/1 方法图和 Base/Instruct 两种变体边界清楚，术语组织良好。 影响力: 1.3/1.5 连续表征与 LLM-DiT 对语音编辑和零样本克隆都有较强应用价值。 开源: 1.2/1.5 论文给出 FireRedTTS3 GitHub，代码和模型均声明可用。 可复现性: 0.4/0.5 公开评测脚本、数据集入口和模型链接提高了复现性，但训练硬件和完整配置仍不充分。 工程/实践价值: 1.1/1.5 24 kHz、50 Hz 连续表征和统一编辑接口具有直接工程落地意义。

* 技术严谨性（1.2/1.5）： 方法的输入、训练目标、推理输出和假设基本一致；未披露的实现条件仍限制独立复现。

* 实验充分性（1.3/1.5）： 实验覆盖范围以正文报告的数据、基线、消融和统计口径为准；未报告部分不作外推。

* 清晰度（0.9/1）：检查读者能否沿数据流复述输入、模块、中间表示和输出。

* 影响力（1.3/1.5）： 影响力受问题范围、证据强度和外部有效性限制，单一数据集结果不直接外推。

* 开源（1.2/1.5）： 只依据论文明确提供的代码、模型、数据或可验证链接评分。

* 可复现性（0.4/0.5）： 依据数据、预处理、训练或推理配置、硬件和随机性披露评分。

* 工程/实践价值（1.1/1.5）： 结合延迟、吞吐、资源、稳定性和真实部署限制评分。

### 🚨 局限与问题

1. 连续自回归表示仍可能累积误差，长文本、长段编辑和多说话人混合场景的稳定性需要更多报告。 2. 主要自动指标不能完全刻画指令遵循、自然度和编辑边界的主观质量。 3. 多语言测试覆盖有限，低资源方言和真实噪声录音的公平比较仍不足。 4. 公开模型虽提高复现性，但训练数据许可、算力成本和商业使用边界需要进一步说明。

此外，The high Cantonese CER is attributed to the limited recognition capability of Whisper-large-v3. CER/WER(%)↓\downarrow Speaker Similarity(%)↑\uparrow Language MiniMax ElevenLabs VoxCPM2 FishAudioS2 dots.tts(Pre.) FireRedTTS3 MiniMax ElevenLabs VoxCPM2 FishAudioS2 dots.tts(Pre.) FireRedTTS3 Arabic 1.67 1.67 13.05 3.50 37.91 1.75 73.6 70.6 79.1 75.0 7.5 78.9 Cantonese 34.1 51.51 38.58 30.67 37.91 40.32 7.8 67.0 83.5 80.5 84.7 83.9 Chinese 2.25 16.03 1.14 0.73 1.08 0.91 78.0 67.7 82.5 81.6 82.3 84.2 Czech 3.8 2.1 24.13 2.84 5.05 3.17 79.6 68.5 78.3 79.8 83.8 86.1 Dutch 1.14 0.80 0.91 0.9 1.20 1.15 73.8 68.0 80.8 73.0 81.4 84.3 English 2.16 2.34 2.29 1.62 1.06 2.12 75.6 61.3 85.4 79.7 86.9 86.8 Finnish 4.67 2.96 2.63 3.3 3.4 3.10 83.5 75.9 89.0 81.9 8.0 89.9 French 4.10 5.2 4.53 3.05 3.82 5.28 62.8 53.5 73.5 69.8 78.2 81.0 German 1.91 0.57 0.68 0.5 1.03 0.69 73.3 61.4 80.3 76.7 79.5 83.3 Greek 2.02 0.9 2.84 5.74 2.97 1.24 82.6 73.3 86.0 79.5 87.6 89.3 Hindi 6.96 5.83 19.70 14.64 14.32 7.02 81.8 73.0 85.6 82.1 84.5 87.2 Indonesian 1.24 1.06 1.08 1.46 2.71 1.42 72.9 6.0 80.0 76.3 80.8 83.3 Italian 1.54 1.74 1.56 1.27 3.16 2.28 69.9 57.9 78.0 74.7 84.5 83.6 Japanese 3.52 10.65 4.63 2.76 7.16 3.60 7.6 73.8 82.8 79.6 83.1 82.8 Korean 1.75 1.87 1.96 1.18 5.30 2.42 7.6 70.0 83.3 81.7 84.3 86 当前结果只在论文报告的数据、模型、硬件和评价协议下成立。

因此，局限不仅包括作者明确承认的缺口，也包括样本规模、数据分布、基线选择、统计不确定性、资源消耗和真实场景迁移尚未被实验覆盖的部分。对于未报告的失败样例、显著性检验、跨设备测试和长期稳定性，读者只能把它们视为待验证问题，不能从单一数据集的结果推导出普遍部署保证。还需要区分作者没有测量的因素与已经证明不存在的问题，避免把沉默误读成正面结论。

---

[← 返回 2026-08-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-19/)
