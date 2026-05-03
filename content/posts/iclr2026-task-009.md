---
title: "ICLR 2026 - 机器人操作 论文列表"
date: 2026-05-03
draft: false
tags: ["机器人操作"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 机器人操作 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 机器人操作

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [RoboOmni: Proactive Robot Manipulation in Omni-modal Context](/audio-paper-digest-blog/posts/2026-05-03-roboomni-proactive-robot-manipulation-in-omni) | 8.0分 | 前10% |

---

## 📋 论文详情

### 🥇 [RoboOmni: Proactive Robot Manipulation in Omni-modal Context](/audio-paper-digest-blog/posts/2026-05-03-roboomni-proactive-robot-manipulation-in-omni)

🔥 **8.0/10** | 前10% | #机器人操作 | #多模态模型 | #端到端 #数据集

👥 **作者与机构**

- 第一作者：Siyin Wang（复旦大学，上海创新研究院）
- 通讯作者：Jinlan Fu（新加坡国立大学），Xipeng Qiu（复旦大学，上海创新研究院）
- 作者列表：Siyin Wang（复旦大学，上海创新研究院），Jinlan Fu†（新加坡国立大学），Feihong Liu（复旦大学），Xinzhe He（复旦大学），Huangxuan Wu（复旦大学），Junhao Shi（复旦大学，上海创新研究院），Kexin Huang（复旦大学），Zhaoye Fei（复旦大学），Jingjing Gong（上海创新研究院），Zuxuan Wu（复旦大学，上海创新研究院），Yu-Gang Jiang（复旦大学），See-Kiong Ng（新加坡国立大学），Tat-Seng Chua（新加坡国立大学），Xipeng Qiu†（复旦大学，上海创新研究院）

💡 **毒舌点评**

**亮点**：它敏锐地抓住了当前VLA模型“等指令”的呆板痛点，并构建了一整套从“新问题定义”到“新架构”再到“新数据集”的解决方案闭环，特别是将语音中的**副语言特征**（如情感、说话人身份）作为关键推理线索，而非丢弃给ASR，这是一次重要的认知升级。**短板**：目前的实验场景仍以相对简单的“单步/少步抓取放置”为主，在更复杂的多步骤、长序列任务中，其“主动推理”的准确率和稳定性如何，以及如何处理复杂对话中的误解与修正，论文未做深入探讨，距离真正的“管家式”智能仍有距离。

🔗 **开源详情**

- **代码**：是。提供GitHub仓库链接：https://github.com/OpenMOSS/RoboOmni。
- **模型权重**：是。论文中提及将开源模型检查点。
- **数据集**：是。论文中明确表示将开源OmniAction数据集和OmniAction-LIBERO基准。
- **Demo**：论文中未提及在线演示链接。
- **复现材料**：非常充分。论文详细说明了训练配置（GPU数量、学习率、batch size、epoch等）、数据集构建三阶段流程、评估指标和设置，并在附录中提供了更多示例和细节。
- **依赖的开源项目**：论文依赖了多个开源模型和工具作为基线或组件，包括：OpenVLA, OpenVLA-OFT, π0, NORA, Qwen2.5-Omni, Whisper (for ASR baseline), DINOv2, SigLIP, PaliGemma, Llama-2等。此外，数据集构建使用了MOSS-TTS, CosyVoice等TTS引擎。

📌 **核心摘要**

1. **解决问题**：针对现有视觉-语言-动作（VLA）模型依赖显式指令、无法主动从多模态上下文（语音、环境声、视觉）中推断用户潜在意图的局限性，提出了“跨模态上下文指令”这一新问题设置。
2. **方法核心**：提出RoboOmni，一个基于端到端全模态大语言模型的“感知器-思考器-对话器-执行器”（Perceiver-Thinker-Talker-Executor）统一框架。它直接处理语音波形和环境声音（而非ASR文本），融合视觉信号，进行意图推理、确认交互，并生成动作。
3. **新贡献**：相比仅处理文本或ASR文本的方法，RoboOmni能保留语音的副语言线索（情感、身份、语调），并具备主动对话能力。为解决数据匮乏，构建了包含14万集、覆盖6种上下文指令类型的大规模OmniAction数据集。
4. **实验结果**：在OmniAction-LIBERO仿真基准上，RoboOmni平均成功率（85.6%）显著超过最强文本基线NORA（25.9%）。在真实WidowX机械臂实验中，成功率（73.9%）超过最佳ASR+VLA基线（52.2%）。消融实验证实了音频、视觉和副语言线索的互补性至关重要（如移除音频，意图识别准确率从88.89%暴跌至11.11%）。具体实验结果对比如下表所示：

| 模型/方法 | OmniAction-LIBERO-TTS 平均成功率 | OmniAction-LIBERO-Real 平均成功率 |
| :--- | :--- | :--- |
| OpenVLA (Ground-truth Text) | 2.6% | - |
| NORA (Audio → ASR → Text) | 25.9% | 17.4% |
| π0 (Ground-truth Text) | 4.4% | 73.8% |
| **RoboOmni (Ours)** | **85.6%** | **76.6%** |

![论文中的实验结果对比图](icassp-img://OJh7oBCYhL/4.png)
*图5内容：该图展示了在真实世界实验中，RoboOmni与ASR+VLA基线在六种上下文指令类型上的成功率对比，RoboOmni在所有类别上均显著领先。*

5. **实际意义**：为创建更自然、主动、能“察言观色”的服务机器人提供了新的技术路径和基准，推动了机器人从被动执行向主动协作的范式转变。
6. **主要局限性**：实验验证的任务复杂度有限，多集中于单次抓取；“主动交互”的质量和效率评估指标尚显简单；模型对长对话历史和高噪声环境的鲁棒性有待进一步验证。

---

