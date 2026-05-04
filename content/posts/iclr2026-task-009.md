---
title: "ICLR 2026 - 机器人操作 论文列表"
date: 2026-05-04
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
| 🥇 | [RoboOmni: Proactive Robot Manipulation in Omni-modal Context](/audio-paper-digest-blog/posts/2026-05-04-roboomni-proactive-robot-manipulation-in-omni) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [RoboOmni: Proactive Robot Manipulation in Omni-modal Context](/audio-paper-digest-blog/posts/2026-05-04-roboomni-proactive-robot-manipulation-in-omni)

✅ **7.5/10** | 前25% | #机器人操作 | #端到端 | #多模态模型 #数据集

👥 **作者与机构**

- 第一作者：Siyin Wang（复旦大学、上海创新研究院）
- 通讯作者：Jinlan Fu（未说明具体机构，对应邮箱jinlanjonna@gmail.com），Xipeng Qiu（复旦大学、上海创新研究院）
- 作者列表：
    - Siyin Wang（复旦大学、上海创新研究院）
    - Jinlan Fu（国家大学新加坡）
    - Feihong Liu（复旦大学）
    - Xinzhe He（复旦大学）
    - Huangxuan Wu（复旦大学）
    - Junhao Shi（复旦大学、上海创新研究院）
    - Kexin Huang（复旦大学）
    - Zhaoye Fei（复旦大学）
    - Jingjing Gong（上海创新研究院）
    - Zuxuan Wu（复旦大学、上海创新研究院）
    - Yu-Gang Jiang（复旦大学）
    - See-Kiong Ng（国家大学新加坡）
    - Tat-Seng Chua（国家大学新加坡）
    - Xipeng Qiu（复旦大学、上海创新研究院）

#

💡 **毒舌点评**

这篇论文的亮点在于其极具前瞻性的选题——让机器人从多模态对话和环境音中“听出”意图并主动询问，而非被动接受指令，这比单纯提升操作成功率更有意义。然而，其真实世界评估仅在单一机器人平台（WidowX 250S）上进行，且失败分析显示执行错误（如抓取失败）占比过半，凸显了当前端到端模型在感知推理与底层控制能力之间的巨大鸿沟，离“家庭管家”的理想距离尚远。

#

🔗 **开源详情**

- 代码：论文提供了GitHub仓库链接：`https://github.com/OpenMOSS/RoboOmni`，表明计划开源。
- 模型权重：论文中提到“make all our datasets and code publicly available”，暗示模型权重也可能开源，但未明确说明具体开源哪些检查点。
- 数据集：明确将开源OmniAction数据集和OmniAction-LIBERO基准。
- Demo：论文中未提及在线演示。
- 复现材料：论文在第5.1节详细说明了训练细节（硬件、批大小、学习率、训练时长等），并在附录中提供了数据构建、基线模型、失败分析等补充信息，复现信息较为充分。
- 论文中引用的开源项目：论文依赖或对比了多个开源项目，包括OpenVLA, π0, NORA, LIBERO, Open-X Embodiment, Whisper, Qwen2.5-Omni, DINOv2, SigLIP, PaliGemma, FAST+分词器等。

📌 **核心摘要**

1.  问题：现有VLA模型主要依赖明确的文字或语音指令，但真实人机交互中，用户意图往往隐含在对话、语气、环境音等多模态上下文中，机器人需要具备主动推理和确认的能力。
2.  方法核心：提出RoboOmni框架，采用Perceiver-Thinker-Talker-Executor四模块端到端架构，直接处理原始音频（语音+环境音）和视觉输入，通过统一的token空间联合建模，实现意图识别、语音交互和动作生成。
3.  创新之处：1）定义了“跨模态上下文指令”新范式；2）设计了端到端的多模态感知-推理-交互-执行框架，避免了级联系统的信息损失；3）构建了首个大规模、多说话人、多声音事件的机器人操作数据集OmniAction（140k episodes）。
4.  实验结果：在OmniAction-LIBERO-TTS模拟基准上，RoboOmni平均成功率85.6%，大幅超越最强基线NORA（25.9%）。在真实人类语音指令（OmniAction-LIBERO-Real）上，成功率76.6%，优于π0（73.8%）。消融实验显示，移除音频、视觉或副语言线索会显著降低意图识别准确率（从88.89%降至11.11%-58.89%）。
5.  实际意义：推动了更自然、主动的人机协作机器人发展，其方法和数据集对多模态具身智能研究有重要价值。
6.  主要局限：真实世界评估场景和机器人平台单一；执行层面的失败率（如抓取、定位）仍较高，表明底层控制能力是瓶颈；生成对话和动作的长期连贯性与复杂性有待进一步验证。

#

---

