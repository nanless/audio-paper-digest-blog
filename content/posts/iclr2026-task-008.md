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
| 🥇 | [RoboOmni: Proactive Robot Manipulation in Omni-modal Context](/audio-paper-digest-blog/posts/2026-05-03-roboomni-proactive-robot-manipulation-in-omni) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [RoboOmni: Proactive Robot Manipulation in Omni-modal Context](/audio-paper-digest-blog/posts/2026-05-03-roboomni-proactive-robot-manipulation-in-omni)

✅ **7.0/10** | 前25% | #机器人操作 | #多模态模型 | #端到端 #数据集

👥 **作者与机构**

- 第一作者：Siyin Wang（复旦大学计算机科学技术学院，上海创新研究院）
- 通讯作者：Jinlan Fu（新加坡国立大学计算学院），Xipeng Qiu（复旦大学计算机科学技术学院，上海创新研究院）
- 作者列表：Siyin Wang（复旦大学，上海创新研究院），Jinlan Fu†（新加坡国立大学），Feihong Liu（复旦大学），Xinzhe He（复旦大学），Huangxuan Wu（复旦大学），Junhao Shi（复旦大学，上海创新研究院），Kexin Huang（复旦大学），Zhaoye Fei（复旦大学），Jingjing Gong（上海创新研究院），Zuxuan Wu（复旦大学，上海创新研究院），Yu-Gang Jiang（复旦大学），See-Kiong Ng（新加坡国立大学），Tat-Seng Chua（新加坡国立大学），Xipeng Qiu†（复旦大学，上海创新研究院）。

💡 **毒舌点评**

论文提出了一个非常有意义的机器人主动意图理解新范式（跨模态上下文指令），并给出了一个完整的端到端解决方案和专用数据集，实验验证充分，效果显著优于现有ASR+VLA管线，是“多模态驱动具身智能”领域一次扎实且有价值的推进；但论文在真实复杂动态环境中的泛化能力验证仍显不足（如极端噪声、多人同时说话、快速场景变化），且主要评估指标为离散任务成功率，对于交互流畅性、理解深度等更“智能”的维度缺乏量化度量。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接 `https://github.com/OpenMOSS/RoboOmni`，表明计划开源。
- 模型权重：论文中提及“公开所有数据集和代码”，未明确说明是否公开模型权重检查点，但基于开源承诺，很可能包含。
- 数据集：明确声明开源OmniAction数据集（14万条数据）和仿真评估基准OmniAction-LIBERO。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的模型架构描述（第4节）、训练超参数（第5.1节）、数据集构建流程（第3节及附录C），复现信息较为充分。
- 论文中引用的开源项目：主要依赖了Qwen2.5-Omni（全模态基座模型）、FAST+（动作分词器）、Open-X-Embodiment（数据源）、LIBERO（仿真基准）、Whisper（ASR基线）、OpenVLA/π0/NORA（VLA对比模型）等开源工作。

📌 **核心摘要**

1.  要解决什么问题：当前机器人操作模型大多依赖于明确的文本或语音指令，无法像人一样从多模态上下文（对话、环境声、视觉）中主动推断用户的潜在意图并采取行动。
2.  方法核心是什么：提出了“跨模态上下文指令”这一新问题设置，并设计了RoboOmni框架。该框架采用Perceiver-Thinker-Talker-Executor的端到端全模态大语言模型架构，能直接处理语音、环境音频和视觉信息，统一进行意图推理、确认交互和动作生成。
3.  与已有方法相比新在哪里：(1) 问题定义：从“被动接收显式指令”转向“主动推断隐式意图”。(2) 模型架构：端到端处理全模态输入（语音、环境声、视觉），避免了传统ASR+VLA管线中信息的丢失（如语调、情感、说话人身份）。(3) 数据构建：创建了首个专门针对主动意图推理的大规模多模态数据集OmniAction。
4.  主要实验结果如何：在模拟（OmniAction-LIBERO-TTS）和真实世界（OmniAction-LIBERO-Real， WidowX 250S机器人）上，RoboOmni均显著优于最强基线。在模拟测试中，RoboOmni平均成功率达到85.6%，而最强文本基线NORA仅为25.9%。在真实人类语音指令测试中，RoboOmni平均成功率76.6%，优于π0（73.8%）和OpenVLA（40.1%）。在主动意图识别能力上，RoboOmni得分88.89%，远超ASR+GPT-4o（55.56%）和基座模型Qwen2.5-Omni-3B（27.78%）。消融实验证明，视觉、音频和副语言线索对性能均有关键贡献。
5.  实际意义是什么：该工作推动了机器人从“工具”向“协作者”的进化，使其能够更自然、主动地理解人类需求，提升了人机交互的效率和体验，在家庭服务、护理、辅助机器人等领域有广阔应用前景。
6.  主要局限性是什么：(1) 数据集构建依赖模拟和合成语音，尽管包含真实语音评估，但与真实世界中完全自由的对话仍有差距。(2) 实验环境仍相对受控，对动态变化、遮挡、极端噪声等复杂现实条件的鲁棒性有待进一步验证。(3) 当前评估主要围绕任务成功率，对交互过程的自然性、智能性缺乏更细致的度量。

---

