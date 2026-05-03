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
| 🥇 | [RoboOmni: Proactive Robot Manipulation in Omni-modal Context](/audio-paper-digest-blog/posts/2026-05-04-roboomni-proactive-robot-manipulation-in-omni) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [RoboOmni: Proactive Robot Manipulation in Omni-modal Context](/audio-paper-digest-blog/posts/2026-05-04-roboomni-proactive-robot-manipulation-in-omni)

🔥 **8.0/10** | 前25% | #机器人操作 | #多模态模型 | #数据集 #端到端

👥 **作者与机构**

- 第一作者：Siyin Wang（复旦大学，上海创新研究院）
- 通讯作者：Jinlan Fu（新加坡国立大学），Xipeng Qiu（复旦大学）
- 作者列表：Siyin Wang（复旦大学，上海创新研究院），Jinlan Fu（新加坡国立大学），Feihong Liu（复旦大学），Xinzhe He（复旦大学），Huangxuan Wu（复旦大学），Junhao Shi（复旦大学，上海创新研究院），Kexin Huang（复旦大学），Zhaoye Fei（复旦大学），Jingjing Gong（上海创新研究院），Zuxuan Wu（复旦大学，上海创新研究院），Yu-Gang Jiang（复旦大学），See-Kiong Ng（新加坡国立大学），Tat-Seng Chua（新加坡国立大学），Xipeng Qiu（复旦大学）

💡 **毒舌点评**

这篇论文的核心亮点在于清晰定义了“主动意图推理”这一关键问题，并构建了迄今最大规模的、包含丰富副语言信息的机器人操作数据集（OmniAction），推动机器人从“指令执行者”向“对话合作者”演进。但其短板也明显：大规模数据集（140k episodes）主要通过TTS和模板合成，与真实世界复杂、嘈杂、充满即兴互动的家庭环境仍可能存在显著差距（domain gap），这使得在模拟（LIBERO）上的亮眼结果（85.6%）转换到真实场景（73.9%）时出现了不小的衰减，主动交互的鲁棒性尚需更多真实长期验证。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：`https://github.com/OpenMOSS/RoboOmni`。
- 模型权重：论文中提及将开源模型权重，但未提供具体下载链接。
- 数据集：OmniAction数据集承诺将公开，论文中未说明具体发布平台或获取方式。
- Demo：论文中未提及在线演示。
- 复现材料：论文在附录和正文中提供了非常详细的数据集构建流程（包括TTS引擎、声音库来源）、模型架构细节、训练超参数、硬件配置和评估设置，复现信息充分。
- 论文中引用的开源项目：依赖了多个开源项目，包括：LIBERO基准（仿真环境）、Qwen2.5-Omni（多模态LLM骨干）、FAST+（动作分词器）、OpenVLA、NORA、π0（基线模型）、Whisper（ASR基线）、MOSS-TTSD、CosyVoice、Gemini-TTS（语音合成）、DINOv2、SigLIP（视觉编码器）等。

📌 **核心摘要**

1. 要解决什么问题：现有机器人操作模型大多依赖于明确的文本指令，缺乏从多模态上下文（语音对话、环境声音、视觉线索）中主动推断用户潜在意图并进行交互确认的能力。
2. 方法核心是什么：提出RoboOmni，一个端到端的全模态大语言模型框架，采用“感知器-思考者-对话者-执行者”（Perceiver-Thinker-Talker-Executor）架构，统一处理视觉、音频和文本输入，直接生成文本回复（用于交互确认）和动作token（用于操作）。
3. 与已有方法相比新在哪里：(1) 提出“跨模态上下文指令”新范式，强调从多模态线索主动推理意图。(2) 设计端到端框架，直接处理原始音频，保留副语言信息（语调、情感、说话人身份），避免了ASR流水线的误差和信息损失。(3) 构建了首个大规模（140k episodes）专注于主动意图推理的多模态数据集OmniAction。
4. 主要实验结果如何：在OmniAction-LIBERO-TTS仿真基准上，RoboOmni平均成功率（85.6%）大幅超越最强基线（ASR+NORA，25.9%）。在真实人类语音指令下，平均成功率达76.6%，优于最强文本基线π0（73.8%）。在真实机器人（WidowX 250S）实验中，成功率为73.9%，显著高于ASR+VLA基线（52.2%）。消融实验证明了视觉、音频和副语言信息的重要性。

   | 任务套件 | Ground-truth文本 (最佳基线) | ASR转文本 (最佳基线) | RoboOmni |
   | :--- | :--- | :--- | :--- |
   | Spatial | 49.8% (NORA) | 56.5% (NORA) | 93.0% |
   | Goal | 12.5% (NORA) | 16.3% (NORA) | 85.8% |
   | Object | 7.2% (OpenVLA) | 13.8% (NORA) | 84.0% |
   | Long | 32.3% (NORA) | 51.0% (NORA) | 79.5% |
   | Average | 16.3% | 25.9% | 85.6% |

5. 实际意义是什么：为实现更自然、主动的人机协作机器人提供了关键的技术路径和评估基准。数据集OmniAction的发布将有力推动该领域的研究。
6. 主要局限性是什么：数据集主要基于合成语音和模板对话构建，与真实世界的交互多样性存在差距；框架的推理效率虽然优于级联系统，但在实时性要求极高的场景下可能仍需优化；失败分析显示，意图理解错误和低层抓取失败是主要瓶颈。

---

