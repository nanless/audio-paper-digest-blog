---
title: "ICASSP 2026 - 歌唱语音转换 论文列表"
date: 2026-04-29
draft: false
tags: ["歌唱语音转换"]
categories: [icassp-2026]
description: "共 3 篇 ICASSP 2026 歌唱语音转换 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 歌唱语音转换

共 **3** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [The Singing Voice Conversion Challenge 2025: From Singer Ide](/audio-paper-digest-blog/posts/2026-04-29-the-singing-voice-conversion-challenge-2025-from) | 7.0分 | 前50% |
| 🥈 | [S2Voice: Style-Aware Autoregressive Modeling with Enhanced C](/audio-paper-digest-blog/posts/2026-04-29-s2voice-style-aware-autoregressive-modeling-with) | 7.0分 | 前25% |
| 🥉 | [Poly-SVC: Polyphony-Aware Singing Voice Conversion with Harm](/audio-paper-digest-blog/posts/2026-04-29-poly-svc-polyphony-aware-singing-voice-conversion) | 6.5分 | 前50% |

---

## 📋 论文详情

### 🥇 [The Singing Voice Conversion Challenge 2025: From Singer Identity Conversion to Singing Style Conversion](/audio-paper-digest-blog/posts/2026-04-29-the-singing-voice-conversion-challenge-2025-from)

✅ **7.0/10** | 前50% | #歌唱语音转换 | #基准测试 | #数据集 #开源工具

👥 **作者与机构**

- 第一作者：Lester Phillip Violeta（Nagoya University, Japan）
- 通讯作者：未说明
- 作者列表：Lester Phillip Violeta（Nagoya University, Japan），Xueyao Zhang（The Chinese University of Hong Kong, Shenzhen, China），Jiatong Shi（Carnegie Mellon University, USA），Yusuke Yasuda（National Institute of Informatics, Japan），Wen-Chin Huang（Nagoya University, Japan），Zhizheng Wu（The Chinese University of Hong Kong, Shenzhen, China），Tomoki Toda（Nagoya University, Japan）

💡 **毒舌点评**

这篇论文的核心价值在于清晰地将“歌唱风格转换”确立为一个独立的、系统性的研究基准，并提供了精心设计的任务和评估框架，这对推动领域从单纯的“歌手克隆”向更精细的控制迈进具有导航意义。然而，作为一项挑战赛报告，其主要贡献在于提出问题、组织比赛和总结现有方法的表现，而非提出一个能显著超越现有技术的新模型或算法，论文中也坦承“歌唱风格转换仍然挑战重重”，未能给出引领性的解决方案。

📌 **核心摘要**

本文介绍了2025年歌唱语音转换挑战赛（SVCC 2025）的研究发现，其核心目标是推动歌唱语音转换研究从单一的歌手身份转换转向更具挑战性的歌唱风格转换。为此，挑战赛设计了两个任务：同域歌唱风格转换（任务1）和零样本歌唱风格转换（任务2），并基于GTSinger数据集构建了专门的评估集。论文开放了三个基线系统并评估了总计26个参赛系统。主要实验结果表明：1) 在歌手身份相似度上，最佳系统已接近真实录音水平；2) 但在歌唱风格相似度和自然度上，所有系统与真实录音仍有明显差距，其中动态特征显著的风格（如气声、滑音、颤音）最难建模。图1展示了自然度与风格相似度的总体关系，图2的箱线图则具体呈现了三项主观评估指标的分布。该挑战赛揭示了当前技术在联合建模歌手身份与歌唱风格，特别是动态风格特征方面的局限性，指明了未来的重要改进方向。

---

### 🥈 [S2Voice: Style-Aware Autoregressive Modeling with Enhanced Conditioning for Singing Style Conversion](/audio-paper-digest-blog/posts/2026-04-29-s2voice-style-aware-autoregressive-modeling-with)

✅ **7.0/10** | 前25% | #歌唱语音转换 | #流匹配 | #语音转换 #自回归模型

👥 **作者与机构**

- 第一作者：Ziqian Wang（西北工业大学软件学院音频、语音与语言处理组 (ASLP@NPU)）
- 通讯作者：Lei Xie（西北工业大学软件学院音频、语音与语言处理组 (ASLP@NPU)）
- 作者列表：Ziqian Wang（西北工业大学软件学院音频、语音与语言处理组），Xianjun Xia（字节跳动），Chuanzeng Huang（字节跳动），Lei Xie（西北工业大学软件学院音频、语音与语言处理组）

#

💡 **毒舌点评**

亮点： 论文在SVCC 2025的两个赛道均取得冠军，系统性地将FiLM条件注入、全局说话人嵌入、大规模数据管线和SFT+DPO训练策略结合起来，在风格相似性和说话人相似性上取得了显著提升，实验设计完整，消融研究充分。  
短板： 核心创新（FiLM调制、交叉注意力）多为现有技术的迁移应用，原创性有限；论文未提供开源代码或模型权重，且数据管线依赖的外部模型（如Whisper, Qwen3）版本和具体实现细节模糊，限制了可复现性。

#

📌 **核心摘要**

1. 解决的问题： 歌唱风格转换（SSC）需要在改变演唱风格的同时保持歌词内容和歌手音色，现有方法存在风格与音色纠缠不完全、自回归模型捕捉细粒度风格能力有限、缺乏高质量训练数据和稳定训练策略等问题。
2. 方法核心： 提出S2Voice，一个基于Vevo的两阶段框架。第一阶段（AR LLM）通过FiLM风格的层归一化调制和风格感知交叉注意力将风格嵌入整合到自回归大语言模型中，实现精细的风格控制。第二阶段（声学模型）在流匹配变换器中引入全局说话人嵌入，以增强音色相似性。此外，构建了大规模高质量歌唱数据语料库，并采用SFT + DPO的多阶段训练策略。
3. 与已有方法相比新在哪里： （1）在AR LLM中引入了更精细的风格条件机制（FiLM+交叉注意力），相比直接拼接或简单注意力融合更有效；（2）在声学解码阶段明确使用预训练说话人���证网络提取的全局嵌入来指导音色，减少从音色参考中泄露风格；（3）构建了大规模、自动化的歌唱数据收集与清洗管线；（4）结合了DPO进行偏好优化，以解决推理中的失败模式，提升稳定性。
4. 主要实验结果： 在SVCC 2025的Task 1（领域内）和Task 2（零样本）上均排名第一。具体指标如下表所示：
    | 系统 | 任务 | 自然度 (MOS) | 风格相似度 (%) | 歌手相似度 (%) |
    | :--- | :--- | :--- | :--- | :--- |
    | GT (真值) | 1 | 3.90 ± 0.15 | 79 ± 3 | 63 ± 4 |
    | Vevo (基线) | 1 | 3.10 ± 0.12 | 30 ± 5 | 42 ± 5 |
    | S2Voice | 1 | 3.30 ± 0.10 | 59 ± 4 | 57 ± 4 |
    | GT (真值) | 2 | 4.10 ± 0.15 | 78 ± 3 | 60 ± 4 |
    | Vevo (基线) | 2 | 3.20 ± 0.12 | 32 ± 5 | 52 ± 5 |
    | S2Voice | 2 | 3.75 ± 0.11 | 70 ± 3 | 59 ± 4 |
    消融实验表明，各组件（数据、FiLM、交叉注意力、全局说话人嵌入、DPO）对最终性能均有贡献。
5. 实际意义： 该系统为可控的歌唱内容创作（如风格模仿、歌曲翻唱）提供了强大的技术支撑，并在零样本场景下表现出良好的泛化能力，推动了歌唱转换领域的实用化进展。
6. 主要局限性： （1）模型严重依赖大规模高质量数据，构建管线成本高；（2）DPO阶段虽然提升了稳定性，但略微降低了平均指标，表明“偏好”优化与“峰值性能”之间可能存在权衡；（3）论文未公开代码、模型和详细训练细节，阻碍了社区验证和应用。

#

---

### 🥉 [Poly-SVC: Polyphony-Aware Singing Voice Conversion with Harmonic Modeling](/audio-paper-digest-blog/posts/2026-04-29-poly-svc-polyphony-aware-singing-voice-conversion)

✅ **6.5/10** | 前50% | #歌唱语音转换 | #流匹配 | #和声建模 #零样本

👥 **作者与机构**

- 第一作者：Chen Geng（北京建筑大学智能科学与技术学院；未说明具体实验室）
- 通讯作者：Ruohua Zhou（北京建筑大学智能科学与技术学院）
- 作者列表：Chen Geng（北京建筑大学智能科学与技术学院）， Meng Chen（腾讯音乐娱乐Lyra Lab）， Ruohua Zhou（北京建筑大学智能科学与技术学院）， Ruolan Liu（未说明）， Weifeng Zhao（腾讯音乐娱乐Lyra Lab）

💡 **毒舌点评**

亮点在于它跳出了SVC研究中“追求干净人声输入”的理想化假设，转而直接解决“脏”数据带来的音高提取难题，这种务实的问题导向值得肯定。但短板也明显：其核心“复音感知”能力主要归功于选用了CQT这一成熟工具，而非模型本身的革命性设计，且所有评估依赖主观听感，缺少客观的音高预测或和声保真度量化指标，使得“超越SOTA”的结论说服力打了折扣。

📌 **核心摘要**

1.  要解决什么问题：现有歌唱语音转换（SVC）系统严重依赖从干净人声中提取的F0（基频）来捕获旋律，但在真实场景中，人声分离工具（如Demucs）处理后的音频往往残留和声，这会干扰传统F0提取器，导致转换后歌声出现跑调或音质下降。
2.  方法核心是什么：论文提出了Poly-SVC框架，其核心是三个组件：(1) 基于CQT的音高提取器：利用常数Q变换（CQT）的时频表示，同时保留主旋律和残留和声的多音高信息；(2) 随机采样器：在训练时利用少量MIDI标注数据作为监督，从CQT特征中筛选出与音高相关的成分，抑制音色等无关信息；(3) 基于条件流匹配（CFM）的扩散解码器：将内容、音高和音色特征融合，生成高质量、保留下和声结构的歌唱语音。
3.  与已有方法相比新在哪里：主要新意在于：明确将“处理残留和声”作为系统设计目标，而非假定输入为干净人声；创新性地将CQT引入SVC的音高建模环节，以处理复音场景；并设计了一个简单的随机采样器来优化CQT特征的学习。
4.  主要实验结果如何：论文构建了一个包含70小时的多语种和声歌唱数据集进行测试。与基线模型（so-vits-svc， DDSP-SVC， SeedVC）相比，Poly-SVC在和声条件下的MOS（自然度）和SIM-MOS（音色相似度）得分显著更高（MOS: 3.75 vs. 最高基线3.35； SIM-MOS: 3.42 vs. 最高基线3.40）。消融实验显示，移除随机采样器（RS）或音色移位器（TS）均会导致性能下降。
5.  实际意义是什么：该工作提升了SVC系统在真实世界不完美输入条件下的鲁棒性和可用性，使其能更好地处理从完整混音歌曲中直接分离的人声，对于音乐制作、翻唱等应用有直接价值。
6.  主要局限性是什么：(1) 所用的“和声数据”是通过人声分离工具模拟生成的，并非真实录制的“原始带和声人声”，可能无法完全代表所有现实情况；(2) 评估完全依赖主观听感测试，缺乏客观的音高准确性或谐波失真量化评估；(3) 随机采样器的具体设计和作用机制描述不够详尽；(4) 未公开代码和模型，复现性存疑。

---

