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
| 🥇 | [TTSDS2: Resources and Benchmark for Evaluating Human-Quality](/audio-paper-digest-blog/posts/2026-05-03-ttsds2-resources-and-benchmark-for-evaluating) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [TTSDS2: Resources and Benchmark for Evaluating Human-Quality Text to Speech Systems](/audio-paper-digest-blog/posts/2026-05-03-ttsds2-resources-and-benchmark-for-evaluating)

🔥 **8.5/10** | 前25% | #语音合成评估 | #分布度量 | #语音合成 #模型评估

👥 **作者与机构**

- 第一作者：Christoph Minixhofer（爱丁堡大学语音技术研究中心）
- 通讯作者：Christoph Minixhofer（christoph.minixhofer@ed.ac.uk）， Ondrej Klejch（o.klejch@ed.ac.uk）， Peter Bell（peter.bell@ed.ac.uk）（论文未明确区分第一作者和通讯作者，三位作者并列于标题下方，邮箱格式一致，视为共同通讯作者）
- 作者列表：Christoph Minixhofer（爱丁堡大学语音技术研究中心）， Ondrej Klejch（爱丁堡大学语音技术研究中心）， Peter Bell（爱丁堡大学语音技术研究中心）

💡 **毒舌点评**

本文为快速发展的TTS评估领域提供了稀缺的、跨领域且跨语言的稳定性验证，并慷慨地开源了大规模评估资源和自动化流水线，堪称当前TTS评估领域的“基准测试圣经”。然而，其核心计算依赖CPU密集型的Wasserstein距离，计算成本显著高于同类指标，且作为一种分布度量，它无法诊断单个合成样本的具体失败模式（如转录错误）。

🔗 **开源详情**

- 代码：提供代码仓库链接：github.com/ttsds/pipeline （用于自动化数据收集和评估）。
- 模型权重：TTSDS2作为评估指标不提供权重。论文中使用的所有特征提取模型（如HuBERT， wav2vec 2.0， WavLM， mHuBERT， Whisper等）均为公开可用的预训练模型，论文已给出引用。
- 数据集：公开。主观评估数据集可访问：hf.co/datasets/ttsds/listening_test。
- Demo：论文中未提及在线演示。基准测试结果公布在 ttsdsbenchmark.com。
- 复现材料：非常充分。论文提供了：1) 完整的实验设置描述；2) 主观测试问卷全文（附录B）；3) 所有20个系统的详细评测结果表格（附录C， Table 7）；4) 关键超参数（如计算时间）；5) 伦理审批信息。
- 论文中引用的开源项目：列举了大量依赖的开源工具和模型，包括：Pyannote（说话人分离）、Demucs（音源分离）、FastText（语言识别）、Whisper（语音识别/分割）、XNLI（文本分类）、VERSA（评估工具包）等。

📌 **核心摘要**

1.  问题：当前文本转语音（TTS）系统质量已接近人类，使得传统评估方法（如MOS）和客观指标在跨研究、跨领域时变得不稳定且难以比较，评估方法本身的发展已滞后于模型进步。
2.  方法核心：本文提出TTSDS2，一种改进的、基于分布相似度的客观评估指标。它通过比较合成语音与真实语音在多个感知维度（通用性、说话人、韵律、可懂度）特征分布的Wasserstein距离，生成一个0-100的综合得分。
3.  与已有方法相比新在哪里：与众多依赖单一音频或预测单个MOS的指标不同，TTSDS2是分布式的、多维度的。关键创新在于其跨领域和跨语言的鲁棒性——通过特征集改进和因子分解设计，它在干净、嘈杂、野外及儿童语音等不同域上均能稳定地与人类评分相关，这是其他16种被比较指标无法做到的。
4.  主要实验结果：在对20个开源TTS系统、4种语音域、14种语言的评估中，TTSDS2是唯一一个在所有12个评估组合（4个域 x 3个主观指标）中与主观评分Spearman相关系数ρ均大于0.50的指标，平均相关性为0.67。具体结果见下表（来自论文Table 3， 仅展示部分关键指标）：
    | 指标 | Clean MOS | Noisy MOS | Wild MOS | Kids MOS | 平均相关性 |
    | :--- | :---: | :---: | :---: | :---: | :---: |
    | TTSDS2 (Ours) | 0.75 | 0.59 | 0.75 | 0.61 | 0.67 |
    | TTSDS (旧版) | 0.60 | 0.49 | 0.67 | 0.70 | 0.61 |
    | RawNet3 (说话人相似度) | 0.36 | 0.44 | 0.85 | 0.73 | 0.60 |
    | SQUIM (MOS预测) | 0.68 | 0.48 | 0.62 | 0.57 | 0.57 |
    | UTMOSv2 (MOS预测) | 0.39 | 0.34 | 0.16 | 0.05 | 0.24 |
    | STOI (信号指标) | -0.11 | -0.06 | 0.07 | -0.32 | -0.11 |
5.  实际意义：为TTS领域提供了首个稳定可靠的跨域客观评估标准和开源基准测试平台（覆盖14种语言），能有效追踪技术进步，避免数据泄漏，并可用于改进MOS预测网络等下游任务。
6.  主要局限性：计算成本较高（CPU密集型）；作为分布指标，无法定位单个样本的具体缺陷（如转录错误）；相关性虽稳定但未超过0.8，表明主观评价中仍有未被任何客观指标捕捉的成分。

---

