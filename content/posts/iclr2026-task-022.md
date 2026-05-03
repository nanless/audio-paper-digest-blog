---
title: "ICLR 2026 - 语音合成评估 论文列表"
date: 2026-05-03
draft: false
tags: ["语音合成评估"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音合成评估 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音合成评估

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [TTSDS2: Resources and Benchmark for Evaluating Human-Quality](/audio-paper-digest-blog/posts/2026-05-03-ttsds2-resources-and-benchmark-for-evaluating) | 6.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [TTSDS2: Resources and Benchmark for Evaluating Human-Quality Text to Speech Systems](/audio-paper-digest-blog/posts/2026-05-03-ttsds2-resources-and-benchmark-for-evaluating)

✅ **6.5/10** | 前25% | #语音合成评估 | #基准测试 #分布度量 | #语音合成 #模型评估

👥 **作者与机构**

- 第一作者：Christoph Minixhofer（爱丁堡大学语音技术研究中心）
- 通讯作者：未说明
- 作者列表：Christoph Minixhofer（爱丁堡大学语音技术研究中心）、Ondrej Klejch（爱丁堡大学语音技术研究中心）、Peter Bell（爱丁堡大学语音技术研究中心）

💡 **毒舌点评**

亮点：论文通过构建包含20个系统、4个领域、14种语言的大规模评估实验，系统性地验证了现有客观评估指标的缺陷，并提出了一个在跨领域鲁棒性上显著优于所有对比方法的评估指标TTSDS2；同时，论文开源了包含���万条人工评分的数据集和可复现的多语言自动化评估流水线，为社区提供了宝贵的基础设施。短板：TTSDS2虽然相关性最高，但计算成本显著高于其他指标（每样本约9.4分钟CPU时间），这限制了其在快速迭代中的实用性；此外，该评估指标依然是对语音片段整体分布的度量，无法诊断或定位单个合成样本的具体问题（如转录错误）。

🔗 **开源详情**

- 代码：提供了完整的评测流水线代码仓库（`github.com/ttsds/pipeline`）。
- 模型权重：论文评估的是20个开源TTS系统的公开权重。TTSDS2本身所依赖的特征提取模型（如mHuBERT-147, XLSR-53, Whisper等）均为公开模型。
- 数据集：公开了核心的主观评分数据集（11,282条评分）：`hf.co/datasets/ttsds/listening_test`。评测基准的测试集通过自动化流水线持续更新，可从`ttsdsbenchmark.com`获取最新版本。噪声参考集也已公开：`hf.co/datasets/ttsds/noise-reference`。
- Demo：提供了基准评测结果展示网站：`ttsdsbenchmark.com`。
- 复现材料：提供了详细的实验设置（附录B、C、D）、完整的系统列表与结果表（附录A）、因子分析结果（表8）、计算成本估算（附录F）。
- 论文中引用的开源项目：大量依赖开源工具和模型，包括但不限于：Whisper, WhisperDiarization, mHuBERT-147, XLSR-53, WavLM, wav2vec 2.0, d-Vector, WeSpeaker, WORLD, Allosaurus, Pyannote, Demucs, XNLI, FastText, VERSA评测工具包，以及所有20个被评估的TTS系统（如E2-TTS, F5-TTS, VALL-E等）的开源代码和权重。

📌 **核心摘要**

1.  问题：随着现代TTS系统生成的语音质量接近甚至超越真人，现有的语音合成（TTS）客观评估指标（如MOS预测网络、信号处理指标）在不同数据领域（干净朗读、嘈杂、野外对话、儿童语音）之间无法保持与主观评价（MOS, CMOS, SMOS）的一致相关性，导致评估结果不可靠且不可比。
2.  方法核心：提出TTSDS2，一个基于分布比较的TTS评估指标。它将语音分解为“通用性”、“说话人”、“韵律”、“可懂度”四个感知维度，对每个维度提取多种特征（如SSL模型嵌入、说话人嵌入、基频），计算合成语音特征分布与真实语音特征分布以及噪声分布之间的2-Wasserstein距离，并通过公式归一化为0-100分。最终得分为各维度分数的简单平均。
3.  创新点：1）提出并验证了一个对多领域具有鲁棒性的评估框架；2）通过大规模人工评测构建了首个覆盖多种挑战性领域的大规模主观评分数据集；3）创建了一个可自动更新、覆盖14种语言的TTS基准和评测流水线，以防止数据泄漏。
4.  主要实验结果：在四种领域（CLEAN, NOISY, WILD, KIDS）的12项相关性评估中（针对MOS、CMOS、SMOS），TTSDS2是唯一一个在所有测试条件下与主观评分的Spearman相关系数（ρ）均高于0.50的指标，平均相关性为0.67。相比之下，表现第二好的指标（如X-Vector、RawNet3说话人相似度）仅在部分领域（如WILD）相关性高，在其他领域则显著下降。具体相关性数据见下表：

| 指标 | Clean (平均ρ) | Noisy (平均ρ) | Wild (平均ρ) | Kids (平均ρ) | 总平均ρ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TTSDS2 (本文) | 0.72 | 0.61 | 0.74 | 0.60 | 0.67 |
| TTSDS (前作) | 0.58 | 0.59 | 0.64 | 0.61 | 0.60 |
| SQUIM MOS | 0.50 | 0.52 | 0.72 | 0.52 | 0.57 |
| RawNet3 相似度 | 0.38 | 0.54 | 0.82 | 0.70 | 0.61 |
| X-Vector 相似度 | 0.48 | 0.49 | 0.75 | 0.67 | 0.60 |

5.  实际意义：为TTS研究社区提供了一个更可靠的客观评估标准和一套持续更新的多语言基准，有助于公平比较不同系统，加速技术迭代，并为检测大规模合成语音提供潜在工具。
6.  主要局限性：计算开销大；无法诊断单个合成样本的失败案例（如内容错误）；评估维度虽多但权重固定，可能无法捕捉所有主观感受；不能完全替代主观听测。

---

