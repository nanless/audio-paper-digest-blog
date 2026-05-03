---
title: "ICLR 2026 - 音乐信息检索 论文列表"
date: 2026-05-03
draft: false
tags: ["音乐信息检索"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 音乐信息检索 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音乐信息检索

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Bridging Piano Transcription and Rendering via Disentangled ](/audio-paper-digest-blog/posts/2026-05-03-bridging-piano-transcription-and-rendering-via) | 8.0分 | 前25% |
| 🥈 | [Automatic Stage Lighting Control: Is it a Rule-Driven Proces](/audio-paper-digest-blog/posts/2026-05-03-automatic-stage-lighting-control-is-it-a-rule) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Bridging Piano Transcription and Rendering via Disentangled Score Content and Style](/audio-paper-digest-blog/posts/2026-05-03-bridging-piano-transcription-and-rendering-via)

🔥 **8.0/10** | 前25% | #音乐信息检索 | #扩散模型 | #解耦表示学习 #多任务学习

👥 **作者与机构**

- 第一作者：Wei Zeng (National University of Singapore, Integrative Sciences and Engineering Programme, NUS Graduate School & School of Computing)
- 通讯作者：Ye Wang (National University of Singapore, School of Computing)
- 作者列表：Wei Zeng (National University of Singapore, Integrative Sciences and Engineering Programme, NUS Graduate School & School of Computing), Junchuan Zhao (National University of Singapore, School of Computing), Ye Wang (National University of Singapore, School of Computing)

💡 **毒舌点评**

这篇论文在方法融合上做得很扎实，将两个看似对立的音乐任务统一到一个框架里，并引入扩散模型做风格推荐，思路清晰且实验充分。不过，其研究范围局限于古典钢琴，在流行音乐等更广泛、更商业化的场景下的潜力尚未被证明，可能限制了其影响力。

🔗 **开源详情**

- **代码**：论文承诺在论文接受后发布代码，并提供了GitHub项目页面链接：https://wei-zeng98.github.io/joint-apt-epr/。
- **模型权重**：论文中未明确提及是否公开预训练模型权重。
- **数据集**：使用了公共数据集ASAP和ATEPP，并描述了自建非配对数据集的构建过程，但未提及会公开这些自建数据。
- **Demo**：提供了在线演示页面：https://wei-zeng98.github.io/joint-apt-epr/。
- **复现材料**：提供了极为详尽的复现指南，包括数据处理规则（附录A）、模型架构细节（附录B）、训练配置（学习率、优化器、batch size、步数等）、超参数、硬件信息、主观测试细节（附录C）以及消融研究（附录D）。
- **论文中引用的开源项目**：MidiTok库（用于性能MIDI的分词化）， Aria AMT模型（用于从YouTube视频转录MIDI）。

📌 **核心摘要**

这篇论文旨在解决音乐信息检索（MIR）中两个基础但任务相反的问题：从乐谱生成具有表现力的演奏（EPR）和从演奏音频/谱面恢复原始乐谱（APT）。以往研究通常将二者独立处理，本文则提出一个统一的、基于Transformer的序列到序列（Seq2Seq）框架，通过分离**乐谱内容**（音高、节奏）和**演奏风格**（整体表现力）的潜在表示，实现了对EPR和APT的联合建模。该方法仅需序列级对齐数据，无需传统的音符级精细对齐，同时支持配对和非配对数据的训练。为了自动化风格选择，论文还引入了一个独立的、基于扩散模型的**演奏风格推荐（PSR）模块**，能够仅从乐谱内容生成合适的风格嵌入。实验表明，该联合模型在EPR和APT任务上均达到了与现有最先进方法相当的性能（例如，在ASAP数据集上的APT评估中，多数指标优于或媲美基线），同时验证了内容与风格的有效分离、可靠的内容跨风格迁移以及PSR模块生成合适风格的能力。

---

### 🥈 [Automatic Stage Lighting Control: Is it a Rule-Driven Process or Generative Task?](/audio-paper-digest-blog/posts/2026-05-03-automatic-stage-lighting-control-is-it-a-rule)

🔥 **8.0/10** | 前25% | #音乐信息检索 | #自回归模型 | #生成模型 #迁移学习

👥 **作者与机构**

- 第一作者：Zijian Zhao（The Hong Kong University of Science and Technology）
- 通讯作者：Xiaoyu Zhang（City University of Hong Kong， xiaoyu.zhang@cityu.edu.hk）
- 作者列表：Zijian Zhao（The Hong Kong University of Science and Technology）， Dian Jin（The Hong Kong Polytechnic University）， Zijing Zhou（The University of Hong Kong）， Xiaoyu Zhang（City University of Hong Kong）

💡 **毒舌点评**

亮点：论文漂亮地完成了一次“范式转变”——将灯光控制从死板的“分类-映射”规则中解放出来，用生成模型去捕捉专业灯光师的艺术直觉，这个思路本身就很酷，且实验验证有力。
短板：实验部分虽然全面，但对基线“规则方法”的复现细节（如具体映射规则）语焉不详，略显遗憾；另外，自建数据集虽填补了空白，但699个样本在深度学习时代仍显“袖珍”，泛化能力论证还可更强。

🔗 **开源详情**

*   **代码**：论文明确提供了代码仓库链接：https://github.com/RS2002/Skip-BART。
*   **模型权重**：论文声明提供了“trained model parameters”（训练好的模型参数），应可从上述GitHub仓库获取。
*   **数据集**：论文创建并提供了首个舞台灯光数据集**RPMC-L2**。为处理版权问题，提供的是约40GB的、已提取处理好的HDF5特征文件，而非原始视频。可通过GitHub链接获取。
*   **Demo**：论文中未提及在线演示（Demo）。
*   **复现材料**：附录提供了极其详细的复现信息，包括：
    *   **模型配置**：参数数量、层数、维度、词汇表大小等。
    *   **数据集构建**：详细的音频与灯光预处理流程、特征提取方法（如OpenL3, Mel频谱图）、数据增强、数据集划分标准。
    *   **训练流程**：预训练与微调的完整步骤、损失函数细节、超参数设置（学习率、批量大小、epoch数等）。
    *   **评估细节**：人类评估问卷设计、参与者信息、统计分析方法。
*   **论文中引用的开源项目**：
    *   **BART**：模型基础架构。
    *   **OpenL3**：用于提取音频嵌入特征。
    *   **PianoBART**：用于迁移学习的预训练模型骨干。
    *   **DARE**：用于融合多任务微调参数的技巧。
    *   **LoRA**：用于高效微调。
    *   **PyTorch**：深度学习框架。
    *   **Suno**：用于生成跨域评估所用的音乐。

📌 **核心摘要**

1.  **问题**：现有的自动舞台灯光控制（ASLC）方法大多依赖将音乐映射到有限的预定义类别和固定灯光模式，导致生成结果公式化、单调且缺乏合理性，无法复现专业灯光师的艺术性创作。
2.  **方法核心**：本文首次将ASLC重新定义为端到端的生成任务，而非分类任务。提出了Skip-BART模型，以音乐为输入，直接预测灯光的色相（Hue）和强度（Value）。模型基于BART架构，并引入了一个新颖的跳连接机制，以显式建模音乐帧与对应灯光帧之间的强关联。为解决数据匮乏问题，团队创建了首个ASLC数据集RPMC-L2，并采用了基于掩码语言建模的预训练和迁移学习策略。
3.  **新意**：与以往的“分类-规则映射”范式不同，本文是**首次**尝试直接从专业灯光师的真实操作数据中学习，将ASLC建模为一个从音频到灯光序列的生成问题。
4.  **主要实验结果**：在自建的RPMC-L2数据集上，Skip-BART在定量指标（RMSE， MAE， corr(|∆|)）上全面优于规则基线方法和消融版本（详见下表）。人类评估（38名参与者）显示，Skip-BART生成的灯光效果与专业灯光师的作品在整体得分上无显著差异（p=0.724），且显著优于规则方法（p<0.001）。

**表1：定量实验结果（来自论文Table 1）**

| 方法 | RMSE (Hue) ↓ | RMSE (Value) ↓ | MAE (Hue) ↓ | MAE (Value) ↓ | corr(|∆|) (Hue) ↑ | corr(|∆|) (Value) ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Rule-based | 48.67 | 93.39 | 43.43 | 86.55 | 0.50 | 0.58 |
| **Skip-BART** | **36.13** | **60.74** | **28.72** | **51.27** | **0.88** | **2.94** |
| w/o skip connection | 36.89 | 68.33 | 29.44 | 58.34 | 1.15 | 0.30 |
| w/o light embedding | 51.04 | 67.25 | 41.50 | 54.87 | 0.80 | 0.70 |
| train from scratch | 36.63 | 67.49 | 28.83 | 57.22 | 0.69 | 0.53 |
| pre-train w/o random [MASK] | 49.97 | 64.45 | 42.07 | 52.63 | 0.54 | 1.11 |
| pre-train w/o discriminator | 50.40 | 68.09 | 41.52 | 56.54 | 0.46 | 1.13 |

5.  **实际意义**：为现场演出、直播等场景提供了一种更智能、更富艺术感的自动化灯光控制新思路，证明了生成式方法在该任务上的潜力和优越性。
6.  **主要局限性**：研究聚焦于离线的、单主灯的生成场景，尚未解决实时控制和多灯协同的复杂问题。此外，模型偶尔会出现局部波动过强的情况，全局时间结构的建模仍有提升空间。

---

