---
title: "ICLR 2026 - 音频问答 #视频理解 论文列表"
date: 2026-05-03
draft: false
tags: ["音频问答 #视频理解"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 音频问答 #视频理解 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频问答 #视频理解

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Seeing, Listening, Remembering, and Reasoning: A Multimodal ](/audio-paper-digest-blog/posts/2026-05-03-seeing-listening-remembering-and-reasoning-a) | 8.5分 | 前10% |
| 🥈 | [OmniVinci: Enhancing Architecture and Data for Omni-Modal Un](/audio-paper-digest-blog/posts/2026-05-03-omnivinci-enhancing-architecture-and-data-for) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Seeing, Listening, Remembering, and Reasoning: A Multimodal Agent with Long-Term Memory](/audio-paper-digest-blog/posts/2026-05-03-seeing-listening-remembering-and-reasoning-a)

🔥 **8.5/10** | 前10% | #音频问答 #视频理解 | #强化学习 #多模态模型 | #多模态模型 #强化学习

👥 **作者与机构**

- 第一作者：Lin Long (浙江大学， 字节跳动Seed)
- 通讯作者：Junbo Zhao (浙江大学)
- 作者列表：
  - Lin Long (浙江大学， 字节跳动Seed)
  - Yichen He (字节跳动Seed)
  - Wentao Ye (浙江大学， 字节跳动Seed)
  - Yiyuan Pan (卡内基梅隆大学机器人研究所， 字节跳动Seed)
  - Yuan Lin (字节跳动Seed)
  - Hang Li (字节跳动Seed)
  - Junbo Zhao (浙江大学)
  - Wei Li (字节跳动Seed)

💡 **毒舌点评**

亮点：该工作非常系统化，不仅提出了一个设计精巧的“感知-记忆-推理”智能体框架，更重要的是为其量身打造了高质量的评估基准M3-Bench，填补了评估长期记忆推理能力的空白。短板：目前的记忆更新机制（加权投票）仍属静态图谱维护，论文未验证智能体在动态、持续变化的真实世界中通过“遗忘”或“修正”旧记忆来进行在线学习的能力，这离“真正的人类式长期记忆”还有一步之遥。

🔗 **开源详情**

- 代码：论文中明确提供代码仓库链接：`https://github.com/ByteDance-Seed/m3-agent`。
- 模型权重：论文承诺发布记忆化模型（`memory-7b-sft`）和控制模型（`control-32b-rl`）的检查点。
- 数据集：论文承诺发布完整的M3-Bench数据集，包含机器人视角视频、网络视频及详细的问答标注。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了极其详尽的复现材料，包括：
    - 所有基线和自身模型的实现细节（附录I）。
    - 自动评估器使用的GPT-4o提示模板（表23）。
    - M3-Agent控制过程的完整提示模板（表27）。
    - 记忆化模型演示数据的合成流程与提示（表10-12）。
    - DAPO和GRPO的训练超参数（附录H）。
    - 详细的数据集构建指南与质量控制流程（附录B， C）。
- 论文中引用的开源项目：
    - 模型：Qwen2.5-Omni, Qwen3。
    - 工具库：InsightFace（人脸识别）。
    - 模型/库：ERes2NetV2（语音嵌入）。
    - 训练算法：DAPO。
- 复现计划：论文在“Reproducibility Statement”中明确承诺将在发表后公开所有资源。

📌 **核心摘要**

本文针对多模态智能体缺乏类人长期记忆和基于记忆的推理能力这一问题，提出了M3-Agent框架。其核心方法是设计了一个双过程系统：1）记忆化过程：以30秒片段为单位处理音视频流，生成情景记忆（事件）和语义记忆（人物属性、关系、知识），并构建以实体为中心的图谱式长期记忆；2）控制过程：接收指令后，通过强化学习训练的策略进行多轮自主推理，迭代检索记忆图谱以回答问题。与现有方法（如将视频转为静态文本描述后检索）相比，M3-Agent新在在线流式记忆构建和强化学习驱动的多轮推理检索。为评估该能力，作者构建了包含机器人视角和网络视频的M3-Bench基准。实验结果显示，经RL训练的M3-Agent在M3-Bench-robot、M3-Bench-web和VideoMME-long三个基准上，分别比最强基线（Gemini-1.5-pro + GPT-4o混合）高出6.7%、7.7%和5.3%的准确率。该工作推动了多模态智能体向更实用的长期记忆方向发展。主要局限性在于记忆更新机制较简单，且对动态环境下的学习和适应能力未进行探讨。

---

### 🥈 [OmniVinci: Enhancing Architecture and Data for Omni-Modal Understanding LLM](/audio-paper-digest-blog/posts/2026-05-03-omnivinci-enhancing-architecture-and-data-for)

✅ **7.0/10** | 前25% | #音频问答 #视频理解 | #多模态模型 #对比学习 | #多模态模型 #音频问答

👥 **作者与机构**

- 第一作者：Hanrong Ye（NVIDIA）
- 通讯作者：Hanrong Ye（NVIDIA）、Hongxu Yin（NVIDIA）、Pavlo Molchanov（NVIDIA）
- 作者列表：Hanrong Ye（NVIDIA）、Chao-Han Huck Yang（NVIDIA）、Arushi Goel（NVIDIA）、Wei Huang（NVIDIA）、Ligeng Zhu（NVIDIA）、Yuanhang Su（NVIDIA）、Sean Lin（NVIDIA）、An-Chieh Cheng（NVIDIA）、Zhen Wan（NVIDIA）、Jinchuan Tian（NVIDIA）、Yuming Lou（NVIDIA）、Dong Yang（NVIDIA）、Zhijian Liu（NVIDIA）、Yukang Chen（NVIDIA）、Ambrish Dantrey（NVIDIA）、Ehsan Jahangiri（NVIDIA）、Sreyan Ghosh（NVIDIA）、Daguang Xu（NVIDIA）、Ehsan Hosseini-Asl（NVIDIA）、Danial Mohseni Taheri（NVIDIA）、Vidya Murali（NVIDIA）、Sifei Liu（NVIDIA）、Yao Lu（NVIDIA）、Oluwatobi Olabiyi（NVIDIA）、Yu-Chiang Frank Wang（NVIDIA）、Rafael Valle（NVIDIA）、Bryan Catanzaro（NVIDIA）、Andrew Tao（NVIDIA）、Song Han（NVIDIA）、Jan Kautz（NVIDIA）、Hongxu Yin（NVIDIA）、Pavlo Molchanov（NVIDIA）

💡 **毒舌点评**

亮点：论文在多模态LLM的“全模态”（视觉+音频+文本）对齐和时序建模上提出了非常系统且有针对性的技术方案（OmniAlignNet、TEG、CRTE），并通过精心设计的消融研究验证了每个组件的有效性，实验对比全面且结果强劲。
短板：作为一篇声称开源的旗舰工作，其关键训练数据（24M样本的具体混合策略）和完整的多阶段训练配方等细节在正文中“未说明”，需要读者深挖附录，这对于社区完全复现其“0.2T token训出高性能”的高效性故事设置了不小的门槛。

🔗 **开源详情**

- 代码：论文中提到“Code”链接，承诺将提供代码仓库，但具体链接在论文文本中未给出。
- 模型权重：论文中提到“Model”链接，承诺将公开模型权重，但具体链接在论文文本中未给出。
- 数据集：论文中提到构建了24M的训练数据集，但未明确说明该数据集是否将公开以及获取方式。论文中引用了大量开源数据集，但自身创建的数据部分未提及开源计划。
- Demo：论文中提到“Webpage”链接，可能包含演示，但未详细说明。
- 复现材料：论文详细描述了模型架构（第2节）、训练策略框架（第3节）和实验设置（第4节）。关键训练细节（如学习率、batch size具体值、完整数据混合比例）部分在正文提及，部分指向附录，整体信息较为丰富但不够完全透明。
- 论文中引用的开源项目：引用了大量开源模型和数据集，如LLaMA、ViT、Whisper、Qwen系列、VILA、CoVoST2、R2R-CE等。
- 论文中提及了开源计划，但具体的资源链接和数据集共享政策未在本文中完全说明。

📌 **核心摘要**

1.  问题：现有大语言模型在实现视觉、音频、文本多模态的深度协同理解（全模态理解）方面仍面临挑战，尤其是在有效对齐异构模态信号和建模其复杂时序关系方面。
2.  方法核心：本文提出OmniVinci，一个强大的开源全模态大模型。其核心是在架构上引入OmniAlignNet（用于在共享潜空间中对齐视觉和音频嵌入）、时间嵌入分组（TEG， 按时间戳对嵌入进行分组以建模相对时序）和受限旋转时间嵌入（CRTE， 嵌入绝对时间信息）；在数据上，构建了包含2400万单模态和全模态对话的数据集，并设计了数据引擎生成带有显式全模态标签的合成数据。
3.  创新点：相较于以往工作，OmniVinci的创新在于：（1） 提出了专门用于跨模态对齐的OmniAlignNet模块；（2） 设计了TEG和CRTE两种互补的技术，分别从序列结构和嵌入表示层面显式编码时序信息；（3） 通过隐式学习和显式合成数据相结合，系统性地解决了全模态训练数据稀缺的问题。
4.  实验结果：OmniVinci在多个基准上取得了领先成绩。关键数据如表所示：
    | 基准 | 模型 | 分数 | 备注 |
    | :--- | :--- | :--- | :--- |
    | DailyOmni (全模态) | Qwen2.5-Omni | 47.45 | |
    | DailyOmni (全模态) | OmniVinci | 66.50 | +19.05 |
    | Video-MME (视频) | Qwen2.5-VL-7B | 65.1 | |
    | Video-MME (视频) | OmniVinci | 68.2 | +3.1 |
    | MMAR (音频) | Qwen2.5-Omni | 56.70 | |
    | MMAR (音频) | OmniVinci | 58.40 | +1.7 |
    同时，模型仅使用0.2T训练token，相比Qwen2.5-Omni的1.2T token减少了约6倍。
5.  实际意义：该工作推动了开源全模态大模型的发展，为需要综合利用视觉、听觉信息的下游智能体应用（如机器人导航、医疗分析、智能制造）提供了更高效、更强大的基础模型。
6.  主要局限性：论文的训练细节（尤其是多阶段训练的完整配置和数据混合策略）透明度不足，可能影响完全复现；此外，其性能优势主要针对特定基准，在更广泛任务上的泛化能力有待进一步验证。

---

