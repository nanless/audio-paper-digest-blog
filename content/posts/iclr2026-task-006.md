---
title: "ICLR 2026 - 多模态问答 论文列表"
date: 2026-05-03
draft: false
tags: ["多模态问答"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 多模态问答 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 多模态问答

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Seeing, Listening, Remembering, and Reasoning: A Multimodal ](/audio-paper-digest-blog/posts/2026-05-03-seeing-listening-remembering-and-reasoning-a) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Seeing, Listening, Remembering, and Reasoning: A Multimodal Agent with Long-Term Memory](/audio-paper-digest-blog/posts/2026-05-03-seeing-listening-remembering-and-reasoning-a)

✅ **7.5/10** | 前25% | #多模态问答 | #多模态模型 | #大语言模型 #记忆网络

👥 **作者与机构**

-   第一作者：Lin Long（浙江大学）
-   通讯作者：Yuan Lin（字节跳动种子团队）
-   作者列表：
    -   Lin Long（浙江大学）
    -   Yichen He（字节跳动种子团队）
    -   Wentao Ye（浙江大学）
    -   Yiyuan Pan（卡内基梅隆大学机器人研究所）
    -   Yuan Lin（字节跳动种子团队）
    -   Hang Li（字节跳动种子团队）
    -   Junbo Zhao（浙江大学）
    -   Wei Li（字节跳动种子团队）

💡 **毒舌点评**

亮点在于其系统性：从感知、记忆、推理到评估（新基准）形成了一个闭环，并且记忆设计（情景/语义记忆、实体中心）巧妙地模仿了人类认知，不是简单的特征缓存。短板则是整个“感知-记忆”管线目前高度依赖一系列工具链（人脸识别、说话人日志），这些工具的鲁棒性和效率瓶颈可能限制其在复杂真实场景中的扩展性，且论文未深入分析记忆检索的实时性能。

🔗 **开源详情**

-   代码：提供代码仓库链接（https://github.com/ByteDance-Seed/m3-agent）。
-   模型权重：承诺发布记忆化模型（memory-7b-sft）和控制模型（control-32b-rl）的检查点。
-   数据集：承诺发布完整的M3-Bench基准（包括视频和QA标注）。
-   Demo：论文中未提及在线演示。
-   复现材料：提供了详细的训练数据合成流程、工具实现细节（人脸识别、说话人分离）、提示词模板（附录M）、超参数设置（附录H），支持复现。
-   论文中引用的开源项目：InsightFace（人脸识别）、ERes2NetV2（说话人嵌入模型）、Gemini-1.5-Pro和GPT-4o（用于数据合成和评估）、Qwen系列模型（作为基础模型）。

📌 **核心摘要**

1.  要解决的问题：现有面向长视频的多模态模型或智能体缺乏如人类般可持续积累、组织并基于长期记忆进行推理的能力，难以在长期交互中保持一致性并执行复杂任务。
2.  方法核心：提出M3-Agent框架，它包含两个并行流程：记忆化（持续感知视频/音频流，生成情景记忆和语义记忆，并维护一个实体中心的多模态长期记忆图谱）和控制（接收指令后，通过强化学习训练的多轮推理策略，自主检索相关记忆来回答问题）。
3.  创新点：
    -   设计并实现了模拟人类记忆（情景/语义）的实体中心长期记忆架构，支持跨模态（脸、声音、文本）信息整合与一致性维护。
    -   提出了多轮记忆检索与推理的控制策略，并通过强化学习（DAPO算法）进行优化，而非传统的单次检索增强生成（RAG）。
    -   创建了M3-Bench基准测试，包含机器人视角和网络视频，专门评估智能体基于长期记忆的推理能力（如人物理解、跨模态推理）。
4.  主要实验结果：在M3-Bench-robot、M3-Bench-web和VideoMME-long三个基准上，M3-Agent均显著超越了最强基线。例如，在M3-Bench-robot上比最强基线（MA-LMM）高6.3%，在M3-Bench-web和VideoMME-long上比最强基线（Gemini-GPT4o-Hybrid）分别高7.7%和5.3%。消融实验证明了语义记忆和强化学习控制策略的关键作用。

    | 方法 | M3-Bench-robot | M3-Bench-web | Video-MME-Long |
    | :--- | :---: | :---: | :---: |
    | 最强基线 | 24.4 (MA-LMM) | 41.2 (Gemini-GPT4o-Hybrid) | 56.5 (Gemini-GPT4o-Hybrid) |
    | M3-Agent | 30.7 | 48.9 | 61.8 |
    | 提升 | +6.3 | +7.7 | +5.3 |

5.  实际意义：为构建能够从长期经验中学习、具备一致世界模型和自主推理能力的多模态智能体提供了可行的框架和评估工具，对服务机器人、个人助手等应用有直接启示。
6.   主要局限性：记忆构建和检索依赖一系列工具链，其错误会传播；长期记忆的计算效率和可扩展性（随记忆增长的检索速度）未被充分讨论；在极端复杂或模糊场景下的推理鲁棒性有待进一步验证。

---

