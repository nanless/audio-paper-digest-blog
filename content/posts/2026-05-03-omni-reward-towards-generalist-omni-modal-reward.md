---
title: "Omni-Reward: Towards Generalist Omni-Modal Reward Modeling with Free-Form Preferences"
date: 2026-05-03
draft: false
tags: [多模态模型, 强化学习, 基准测试, 数据集, 跨模态]
categories: [iclr-2026]
description: "基准测试 | 8.0/10"
hiddenInHomeList: true
---

# 📄 Omni-Reward: Towards Generalist Omni-Modal Reward Modeling with Free-Form Preferences

#多模态模型 #强化学习 #基准测试 #数据集 #跨模态

🔥 **8.0/10** | 前25% | #基准测试 | #多模态模型 | #强化学习 #数据集

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Zhuoran Jin（中国科学院自动化研究所/中国科学院大学）
- 通讯作者：Jun Zhao（中国科学院自动化研究所）
- 作者列表：Zhuoran Jin（中国科学院自动化研究所/中国科学院大学）、Hongbang Yuan（中国科学院自动化研究所/中国科学院大学）、Kejian Zhu（中国科学院自动化研究所/中国科学院大学）、Jiachun Li（中国科学院自动化研究所/中国科学院大学）、Pengfei Cao（中国科学院自动化研究所/中国科学院大学）、Yubo Chen（中国科学院自动化研究所/中国科学院大学）、Kang Liu（中国科学院自动化研究所/中国科学院大学）、Jun Zhao（中国科学院自动化研究所）

### 💡 毒舌点评

亮点在于系统性地提出了一个解决多模态奖励建模中“模态不平衡”和“偏好僵化”两大核心问题的完整框架（基准、数据集、模型），设计思路清晰且实验全面。短板是虽然提出了生成式奖励模型，但其训练仅用了3%的数据且基于GRPO的强化学习探索较为初步，模型在部分生成任务（如T2A）上的表现仍有明显提升空间。

### 🔗 开源详情

- 代码：提供GitHub仓库链接：https://github.com/HongbangYuan/OmniReward
- 模型权重：论文中提及将发布Omni-RewardModel，但未提供直接下载链接（可能随代码仓库发布）。
- 数据集：Omni-RewardBench 和 Omni-RewardData 均提供Hugging Face链接：
    - 基准：https://hf.co/datasets/HongbangYuan/OmniRewardBench
    - 数据集：https://hf.co/datasets/jinzhuoran/OmniRewardData
- Demo：论文中未提及在线演示。
- 复现材料：论文有专门的“Reproducibility Statement”，并在附录中详细说明了标注流程、质量控制等。但具体的训练超参数（学习率、batch size等）未在主文中提供，需查看附录。
- 引用的开源项目：基座模型包括MiniCPM-o-2.6、Qwen2.5-VL-7B-Instruct等；数据集构建引用了Skywork-Reward-Preference, RLAIF-V, HPDv2, GenAI-Bench等多个现有开源数据集。

### 📌 核心摘要

1. 问题：当前的奖励模型（RM）面临两大挑战：(1) 模态不平衡，主要关注文本和图像，对视频、音频、3D等模态支持不足；(2) 偏好僵化，基于固定二元偏好对训练，难以捕捉用户个性化、自由形式的偏好。
2. 方法核心：提出 Omni-Reward 框架，包含三个部分：(1) Omni-RewardBench：首个覆盖五种模态（文本、图像、视频、音频、3D）九个任务、支持自由形式偏好的RM基准；(2) Omni-RewardData：包含248K通用偏好对和69K指令微调对的多模态偏好数据集；(3) Omni-RewardModel：包括判别式（BT）和生成式（R1）两种RM。
3. 新意：与现有工作相比，其创新在于：首次在统一框架下处理全模态奖励建模；通过指令微调数据使RM能根据自由形式的文本标准动态调整评分；并探索了使用强化学习训练可解释的生成式RM。
4. 主要实验结果：Omni-RewardModel-BT在自有基准Omni-RewardBench上达到73.68%（w/o Ties）和65.36%（w/ Ties）的准确率，比基座模型MiniCPM-o-2.6（46.67%）提升显著。在公开基准VL-RewardBench上，其准确率达到76.3%，超越了GPT-4o（65.8%）和UnifiedReward（66.1%）等模型，取得SOTA。消融实验证实了多模态混合数据和指令微调数据的重要性。

![Omni-RewardBench任务示例]](https://nanless.github.io/audio-paper-digest-images/iclr-2026/2026-05-03/9C4gVbPqSy-0.png)
图1展示了Omni-RewardBench涵盖的九个任务及其自由形式偏好标注示例。

![模型架构概览]](https://nanless.github.io/audio-paper-digest-images/iclr-2026/2026-05-03/9C4gVbPqSy-1.png)
图2展示了Omni-RewardModel的两种架构：(1) 使用Bradley-Terry损失的判别式模型；(2) 使用强化学习的生成式模型。

5. 实际意义：为多模态AI系统的对齐提供了更全面的评估工具、数据资源和建模范式，推动了向能处理全模态且能适配个性化需求的通用奖励模型发展。
6. 主要局限性：基准规模（3725对）相对有限；任务定义尚属粗粒度；偏好数据为单轮对话，未涉及多轮交互；生成式模型的强化学习训练是初步探索。

### 🏗️ 模型架构

Omni-RewardModel基于多模态大语言模型（MLLM）架构，具体采用MiniCPM-o-2.6（判别式）和Qwen2.5-VL-7B-Instruct（生成式）作为基座。其整体流程为：将用户输入x（可能包含文本、图像、视频、音频、3D数据）、候选响应y1/y2以及可选的自由形式偏好指令c，共同输入到模型中。

- 判别式模型 (Omni-RewardModel-BT)：如图2(1)所示，模型冻结了视觉和音频编码器，仅微调语言模型解码器和价值头（Value Head）。输入序列被组织后，语言模型处理多模态特征，最终由价值头输出一个标量奖励分数，代表响应的优劣。
- 生成式模型 (Omni-RewardModel-R1)：如图2(2)所示，模型同样处理多模态输入，但目标不同。它被训练以先生成一个解释性的链式思考（CoT）文本e，然后基于该推理过程给出最终的偏好预测p'（如“Image 1”）。该模型通过基于GRPO的强化学习进行优化，奖励信号来自预测偏好p'与真实标签p的比较。

![任务间性能相关性热力图]](https://nanless.github.io/audio-paper-digest-images/iclr-2026/2026-05-03/9C4gVbPqSy-2.png)
图3展示了Omni-RewardBench中九个任务之间基于模型性能的Pearson相关系数，揭示了同类任务（如理解类、生成类）之间存在强相关性，暗示了跨模态泛化的可能性。

### 💡 核心创新点

1.  首个全模态奖励建模基准 (Omni-RewardBench)：覆盖文本、图像、视频、音频、3D五种模态下的九个理解与生成任务，并创新性地支持“自由形式偏好”评估（即为每对响应提供具体的文本评估标准c）。这解决了现有基准模态覆盖不全、评估标准单一的问题。
2.  大规模多模态偏好数据集 (Omni-RewardData)：不仅整合了大量现有通用偏好对（248K），还首次大规模构建了（69K）带有自由形式偏好描述的“指令微调”数据。这种数据设计使得RM能学习根据具体指令调整评分，直接针对“偏好僵化”问题。
3.  提出并比较两种多模态奖励模型：在统一的多模态数据上，系统训练并评估了判别式（Bradley-Terry）和生成式（GRPO强化学习）两类奖励模型。生成式模型通过显式推理提升了可解释性，是将“思考-验证”范式引入奖励建模的有益探索。

### 🔬 细节详述

- 训练数据：Omni-RewardData。通用部分包含248K对，来自Skywork-Reward-Preference (T2T)、RLAIF-V (TI2T)、HPDv2 (T2I)、VideoDPO (T2V)等。指令微调部分包含69K对，基于GPT-4o生成指令c，并使用GPT-4o-mini、Qwen2.5-VL-7B等进行一致性验证。
- 损失函数：判别式模型使用Bradley-Terry损失（公式1）。生成式模型使用基于GRPO的强化学习，奖励信号为离散的准确率奖励（预测正确得1分，否则0分）。
- 训练策略：判别式模型在Omni-RewardData全集上训练。生成式模型仅使用10K样本从头训练（基于Qwen2.5-VL-7B-Instruct），未使用蒸馏。具体的学习率、batch size、优化器等超参数未在正文中详细说明（可能在附录中）。
- 关键超参数：基座模型为MiniCPM-o-2.6（判别式）和Qwen2.5-VL-7B-Instruct（生成式）。
- 训练硬件/时长：论文中未说明。
- 推理细节：对于生成式RM，采用成对比较格式，先生成对两个响应的评论，再输出最终偏好。具体prompt模板见附录K。
- 正则化技巧：未明确提及，判别式模型训练冻结了编码器参数。

### 📊 实验结果

论文在自有基准Omni-RewardBench和多个公开基准上进行了全面评估。

表1: Omni-RewardBench评估结果 (w/ Ties设置)
| 模型 | T2T | TI2T | TV2T | TA2T | T2I | T2V | T2A | T23D | TI2I | Overall |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 最强开源 (Gemma-3-27B) | 77.22 | 61.17 | 67.04 | - | 59.14 | 61.44 | - | 63.91 | 65.94 | 65.12 |
| 最强商用 (Claude-3.5-Sonnet) | 76.74 | 61.55 | 67.04 | - | 61.69 | 64.27 | - | 68.54 | 65.94 | 66.54 |
| 专用模型 (UnifiedReward1.5) | 59.47 | 54.17 | 69.30 | - | 58.35 | 69.57 | - | 61.59 | 45.41 | 59.69 |
| Omni-RewardModel-R1 | 71.22 | 56.06 | 63.88 | - | 61.69 | 58.22 | - | 63.91 | 46.29 | 60.18 |
| Omni-RewardModel-BT | 75.30 | 60.23 | 68.85 | 70.59 | 58.35 | 64.08 | 63.99 | 67.88 | 58.95 | 65.36 |

表1表明，Omni-RewardModel-BT在整体准确率上超越了所有现有专用模型，并接近甚至超过了最强的开源和商用通用模型，尤其在音频理解（TA2T）和生成（T2A）任务上取得了显著优势。

表2: VL-RewardBench评估结果
| 模型 | Overall Acc | Macro Acc |
| :--- | :---: | :---: |
| GPT-4o | 65.8 | 62.4 |
| UnifiedReward | 66.1 | 66.5 |
| Skywork-VL-Reward | 73.1 | 69.0 |
| Omni-RewardModel-BT | 76.3 | 66.8 |

表2显示Omni-RewardModel-BT在通用视觉语言奖励建模基准上也达到了SOTA水平。

表3: Omni-RewardBench消融实验 (w/ Ties设置)
| 模型 | Overall |
| :--- | :---: |
| 基座 (MiniCPM-o-2.6) | 46.67 |
| w/ T2T数据 | 57.13 |
| w/ TI2T数据 | 58.84 |
| w/ T2I & T2V数据 | 57.50 |
| w/ Full数据 | 65.36 |
| w/ Preference-Only数据 | 58.67 |

表3的消融实验清晰地证明：(1) 混合多模态数据（Full）比单一模态数据训练效果更好；(2) 包含指令微调数据的完整数据集（Full）显著优于仅使用通用偏好数据（Preference-Only），验证了自由形式偏好建模的必要性。

![任务间性能相关性热力图]](https://nanless.github.io/audio-paper-digest-images/iclr-2026/2026-05-03/9C4gVbPqSy-2.png)
图3的热力图显示，文本理解、图像理解、视频理解任务之间具有很强的性能相关性（皮尔逊系数0.8-0.9），同样生成类任务之间也存在较强相关性，这表明模型在相似任务类别内具有一定的跨模态泛化能力。

### ⚖️ 评分理由

- 学术质量：6.0/7：论文提出了一个完整且设计精巧的框架，系统性地解决了多模态RM的两个关键问题。实验设计全面，包含了与众多强基线在自有基准和公开基准上的对比，以及深入的消融研究。主要扣分点在于：生成式模型的强化学习训练部分探索相对初步（仅10K数据，GRPO）；部分训练细节（如超参数）未在正文公开；“自由形式偏好”的定义和评估虽然新颖，但任务粒度仍可进一步细化。
- 选题价值：1.5/2：多模态奖励建模是当前大模型对齐领域的前沿热点，论文选题具有很强的时效性和潜在影响力。其工作为音频、3D等被忽视模态的对齐提供了重要基础。与语音/音频读者的相关性为中等，因为论文的核心对象是通用多模态模型，但其中涉及的音频任务（T2A, TA2T）以及奖励建模思想对音频生成与理解模型的对齐研究有直接借鉴意义。
- 开源与复现加成：+0.5/1：论文明确承诺开源完整的代码、模型、数据和基准，并给出了详细的复现声明。附录中包含了标注平台、质量控制等细节。这为社区复现和后续研究提供了极大便利，但部分核心训练细节（如超参数）需参考未提供的附录。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
