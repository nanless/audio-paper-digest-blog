---
title: "ICLR 2026 - 模型评估 论文列表"
date: 2026-05-04
draft: false
tags: ["模型评估"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 模型评估 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 模型评估

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [VoxPrivacy: A Benchmark for Evaluating Interactional Privacy](/audio-paper-digest-blog/posts/2026-05-04-voxprivacy-a-benchmark-for-evaluating) | 9.5分 | 前10% |
| 🥈 | [MAPSS: Manifold-based Assessment of Perceptual Source Separa](/audio-paper-digest-blog/posts/2026-05-04-mapss-manifold-based-assessment-of-perceptual) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [VoxPrivacy: A Benchmark for Evaluating Interactional Privacy of Speech Language Models](/audio-paper-digest-blog/posts/2026-05-04-voxprivacy-a-benchmark-for-evaluating)

🔥 **9.5/10** | 前10% | #模型评估 | #基准测试 | #语音大模型 #数据集

👥 **作者与机构**

- 第一作者：Yuxiang Wang（香港中文大学（深圳））
- 通讯作者：未明确说明（根据惯例和贡献推断，Zhizheng Wu可能性较大）
- 作者列表：Yuxiang Wang¹, Hongyu Liu¹, Dekun Chen¹, Xueyao Zhang¹, Zhizheng Wu¹,²,³,⁴
    ¹ 香港中文大学（深圳）
    ² 深圳大数据研究院
    ³ 澳门城市大学
    ⁴ Amphion Technology Co., Ltd.（星尘智能科技有限公司）

#

💡 **毒舌点评**

这篇论文精准地刺中了当前语音大模型（SLM）在走向多用户共享场景时一个被严重忽视的“阿喀琉斯之踵”——交互隐私。其最大亮点在于不仅诊断了“病症”（模型无法将语音身份与隐私规则关联），更通过精心设计的三层评估体系“量化了病情”，并指出了“病理”（是上下文推理能力不足，而非基础对话能力问题）。短板在于，目前提出的“药方”（监督微调）虽有效但相对传统，未来如何让模型在更复杂的社交场景中自主、灵活地做出符合伦理的隐私决策，而非仅机械遵循规则，仍是开放挑战。

#

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。但根据论文末尾的声明“we are releasing the VoxPrivacy benchmark, the large-scale training set, and the fine-tuned model”，预计相关资源会通过项目页面（https://myflashbarry.github.io/VoxPrivacy.github.io/）或代码托管平台发布。
- 模型权重：是。论文明确声明将公开其微调后的模型（Ours: Kimi-Audio-sft）。
- 数据集：是。论文明确声明将公开VoxPrivacy基准测试（32小时数据）和4000小时的大规模训练集。
- Demo：是。提供了在线演示页面：https://myflashbarry.github.io/VoxPrivacy.github.io/
- 复现材料：论文提供了丰富的复现信息，包括：完整的数据构建流程（附录A给出了生成提示词）、评估标准与LLM评委提示词（附录F、G）、训练超参数（8xA800 GPU，lr=1e-5等）、以及详细的实验设置。
- 论文中引用的开源项目：
    - 模型：Kimi-Audio, Qwen2.5-Omni, MiniCPM2.6-o, Gemini系列, Deepseek系列, Qwen2Audio, Voxtral3B, Baichuan-Omni-1.5, GLM4Voice。
    - 工具/数据集：CosyVoice2 (TTS), Whisper-large-v3 (ASR), AISHELL-2, WenetSpeech, LibriSpeech, CommonVoice, Fleurs, SAVEE, IEMOCAP, ESD, RAVDESS, MELD, CREMA-D, ESC50, AudioSet, FSD50K, VocalSound, UrbanSound8K, ClothoAQA, MusicAVQA, AVQA等。

📌 **核心摘要**

1.  解决的问题：本文针对语音语言模型（SLM）从个人设备走向智能家居、车载等共享多用户环境时面临的新挑战——“交互隐私”问题，即模型需要区分不同用户，防止将一个用户的私人信息泄露给另一个用户。现有基准测试忽略了这种基于说话人身份的条件隐私保护能力评估。
2.  方法核心：提出首个评估交互隐私的基准测试VoxPrivacy。它设计了三个难度递增的层级：Tier 1（直接命令保密）、Tier 2（基于说话人验证的保密）、Tier 3（主动隐私保护）。基于此构建了一个包含7107个样本、32.86小时的双语（中/英）合成数据集，并包含一个由18人录制的真实语音验证子集（Real-VoxPrivacy）。
3.  创新点：首次系统定义和评估SLM的“交互隐私”能力；设计了分层的评估任务以衡量从指令跟随到自主推理的完整能力谱；通过合成数据与真实语音的对齐验证，证明了评估结论的可靠性。
4.  主要实验结果：对9个SLM的评估显示，大多数开源模型在Tier 2/3任务上的准确率接近随机猜测（~50%），表明其根本无法将说话人声音与隐私规则关联。即使是强大的闭源模型（如Gemini-2.5-Pro）在Tier 3（主动推断）上也有明显性能下降。通过对比实验，证明失败根源是“对话上下文处理能力的缺失”，而非基础对话能力。通过微调，本文提出的模型在所有层级上显著优于其他开源模型，达到了与顶级闭源模型相当的水平。关键性能数据对比见下表：

Tier 1 任务准确率（%）
| 模型 | 英语 | 中语 |
| :--- | :--- | :--- |
| LLM (上界) | 98.01 | 99.10 |
| Gemini-2.5-pro | 81.95 | 84.03 |
| Kimi-Audio | 71.38 | 40.77 |
| 本文模型 | 87.92 | 80.23 |

Tier 2 任务 F1 分数
| 模型 | 英语 | 中语 |
| :--- | :--- | :--- |
| LLM (上界) | 90.64 | 93.64 |
| Gemini-2.5-pro | 76.39 | 76.31 |
| Kimi-Audio | 59.14 | 26.47 |
| 本文模型 | 82.65 | 78.50 |

5.  实际意义：该工作揭示了当前语音大模型在安全部署方面的重大缺陷，为业界敲响了警钟。它提供的评测基准、数据集和初步解决方案，为开发更安全、尊重隐私的下一代共享环境语音助手指明了方向和提供了研究工具。
6.  主要局限性：1) 依赖合成数据进行大规模评估，尽管有真实数据验证，但仍可能无法完全模拟现实世界中复杂的对话动态和副语言线索；2) 提出的解决方案基于监督微调，未来可能需要更先进的强化学习或上下文学习方法来处理更细粒度、更动态的隐私决策；3) 评估主要关注二元（披露/不披露）决策，未深入探讨隐私保护的程度或信息流的细微差别。

---

### 🥈 [MAPSS: Manifold-based Assessment of Perceptual Source Separation](/audio-paper-digest-blog/posts/2026-05-04-mapss-manifold-based-assessment-of-perceptual)

🔥 **8.5/10** | 前25% | #模型评估 | #自监督学习 | #信号处理 #语音分离

👥 **作者与机构**

- 第一作者：Amir Ivry（Technion - Israel Institute of Technology, Electrical and Computer Engineering）
- 通讯作者：未明确指定（根据邮箱顺序推测为Amir Ivry）
- 作者列表：Amir Ivry（Technion - Israel Institute of Technology）、Samuele Cornell（Carnegie Mellon University, Language Technologies Institute）、Shinji Watanabe（Carnegie Mellon University, Language Technologies Institute）

#

💡 **毒舌点评**

亮点在于其优雅的数学框架（流形+马氏距离）将“分离度”和“保真度”评估解耦，并为每个测量值提供了理论误差边界，这在音频评估指标中非常罕见。然而，其性能高度依赖一个预先定义的、手工设计的“失真库”来构建感知流形，这似乎将评估的泛化能力瓶颈从模型转移到了这个失真库的覆盖面上，且对时间对齐的敏感性可能限制其在实际延迟系统中的应用。

#

🔗 **开源详情**

- 代码：提供了完整的代码仓库链接：https://github.com/Amir-Ivry/MAPSS-measures 。论文明确说明代码包含完整的推理流程，包括帧级PS/PM计算及其确定性和概率误差边界。
- 模型权重：论文中未提供其使用的预训练自监督模型（wav2vec 2.0, MERT）的权重链接，但这些是公开模型，可从Hugging Face Hub等平台获取。
- 数据集：论文使用的SEBASS数据库是公开的，但需按照其原始发布渠道获取。论文中未重新分发数据。
- Demo：未提及在线演示。
- 复现材料：论文在附录和可复现性声明中提供了非常详细的计算过程、参数设置和实验细节，足以支持复现。开源代码是核心复现材料。
- 论文中引用的开源项目：主要依赖的开源工具/模型包括：wav2vec 2.0、WavLM、HuBERT（自监督语音模型）、MERT（自监督音乐模型）、SEBASS数据库、webMUSHRA（用于原始听力测试）。

📌 **核心摘要**

该论文针对音频源分离系统评估中，现有指标（如SDR、SI-SDR）无法区分“干扰泄漏”与“目标失真”这两种本质不同的失真模式的问题，提出了两个新的可微分、帧级评估指标：感知分离（Perceptual Separation, PS）和感知匹配（Perceptual Match, PM）。方法核心是，首先为每个参考信号生成一组覆盖广泛感知失真类型的变形版本，然后利用预训练的自监督模型（如wav2vec 2.0）将所有原始信号、失真信号及系统输出进行编码，再通过扩散映射（Diffusion Maps）将这些高维表示嵌入到一个低维流形空间。在此流形上，PM通过测量输出点与其自身“感知簇”的距离来量化自失真，而PS则通过比较该输出点与自身簇及非归属簇的相对距离来量化泄漏。与已有方法相比，新在：1）功能上解耦了泄漏与失真；2）操作在精细的帧级（75fps）并可微分；3）首次为音频评估指标提供了确定性误差半径和非渐近概率置信区间。实验表明，在SEBASS数据集（包含英语、西班牙语和音乐混合物）上，PS和PM在与人类主观评分的线性相关（PCC）和秩相关（SRCC）中，几乎总能排在18个对比指标的第一或第二。该指标的意义在于为源分离系统提供了更细粒度的诊断工具和潜在的损失函数，局限性在于其性能对时间对齐敏感，且依赖于预定义失真库的覆盖范围。

#

---

