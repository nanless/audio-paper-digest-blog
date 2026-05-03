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
| 🥈 | [Automatic Stage Lighting Control: Is it a Rule-Driven Proces](/audio-paper-digest-blog/posts/2026-05-03-automatic-stage-lighting-control-is-it-a-rule) | 7.5分 | 前25% |

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

✅ **7.5/10** | 前25% | #音乐信息检索 | #自回归模型 | #生成模型 #迁移学习

👥 **作者与机构**

- 第一作者：Zijian Zhao（The Hong Kong University of Science and Technology，香港科技大学）
- 通讯作者：Xiaoyu Zhang（City University of Hong Kong，香港城市大学）
- 作者列表：Zijian Zhao（The Hong Kong University of Science and Technology）、Dian Jin（The Hong Kong Polytechnic University，香港理工大学）、Zijing Zhou（The University of Hong Kong，香港大学）、Xiaoyu Zhang（City University of Hong Kong）

💡 **毒舌点评**

**亮点：** 论文首次将自动舞台灯光控制（ASLC）从传统的“分类-映射”范式重新定义为“生成任务”，并构建了首个公开的领域数据集，思路清晰，对ASLC的后续研究具有启发性。**短板：** 虽然声称生成任务，但核心模型（Skip-BART）本质上是对已有BART架构的适配与改进，其针对音频-灯光对齐的“Skip Connection”设计略显常规，且任务定义仍局限于“单主灯光”的离线生成，离真正的“舞台灯光设计”复杂度有较大差距。

🔗 **开源详情**

- **代码**：提供完整代码仓库链接：`https://github.com/RS2002/Skip-BART`
- **模型权重**：提供训练好的模型参数。
- **数据集**：提供自建的RPMC-L2数据集（已处理为HDF5特征文件）。
- **Demo**：论文中未提及在线演示。
- **复现材料**：提供了详细的附录，包括预训练细节（A）、实验设置（B）、数据集细节（C）、可视化结果（D）和人类研究细节（E），包含完整的问卷、统计方法和配置参数。
- **引用的开源项目**：BART, PianoBART, OpenL3, PyTorch, DARE, LoRA, DEAM数据集等。

📌 **核心摘要**

1.  **问题**：现有的自动舞台灯光控制（ASLC）方法大多基于规则，将音乐分类为有限类别（如情绪、风格）后映射到预定义灯光模式，结果单调、缺乏合理性，且受限于粗粒度分类和映射关系的争议。
2.  **方法核心**：提出首个将ASLC建模为端到端生成任务的方法，设计了Skip-BART模型。该模型基于BART架构，通过修改嵌入层适配音乐和灯光输入，并引入“跳跃连接”机制显式增强音乐帧与灯光帧的对应关系。此外，采用了预训练、迁移学习（从PianoBART）和受限随机温度控制（RSTC）采样来应对数据稀缺和控制生成多样性。
3.  **创新点**：核心创新在于**任务定义**的转变（从分类到生成）。技术方法上，构建了首个公开的ASLC数据集RPMC-L2，并设计了针对音频-灯光对齐的Skip-BART框架。
4.  **实验结果**：在自建的RPMC-L2数据集上，Skip-BART在定量指标（RMSE， MAE， corr(|Δ|)）上全面优于基线规则方法和消融模型。人类评估（38名参与者）显示，Skip-BART的生成效果与真实灯光工程师无显著差异（p=0.72），且显著优于规则方法（p<0.001）。跨域评估（民谣、R&B、爵士）也展示了方法的泛化能力。
5.  **实际意义**：为ASLC领域提供了新的研究范式，并提供了一个可供后续研究使用的基准数据集和基线模型。
6.  **主要局限性**：模型专注于离线的单主灯光生成，未涉及实时控制与多灯光协调；生成序列偶有局部过强波动；任务定义虽新颖，但“单主灯光”仍是舞台灯光设计的简化模型。

**关键实验结果表格：**

| 方法 | RMSE (Hue) ↓ | RMSE (Value) ↓ | MAE (Hue) ↓ | MAE (Value) ↓ | corr(|Δ|) (Hue) ↑ | corr(|Δ|) (Value) ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Rule-based | 48.67 | 93.39 | 43.43 | 86.55 | 0.50 | 0.58 |
| **Skip-BART** | **36.13** | **60.74** | **28.72** | **51.27** | **0.88** | **2.94** |
| w/o skip connection | 36.89 | 68.33 | 29.44 | 58.34 | 1.15 | 0.30 |

*表1：定量评估结果。Skip-BART在所有指标上均为最优。*

**人类评估（域内）综合得分：**
- Ground Truth: 4.51 ± 0.88
- Skip-BART: 4.35 ± 0.87
- Ablation Study: 4.11 ± 0.84
- Rule-based: 2.67 ± 1.29

---

