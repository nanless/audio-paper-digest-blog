---
title: "ICLR 2026 - 多模态奖励建模 论文列表"
date: 2026-05-04
draft: false
tags: ["多模态奖励建模"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 多模态奖励建模 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 多模态奖励建模

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Omni-Reward: Towards Generalist Omni-Modal Reward Modeling w](/audio-paper-digest-blog/posts/2026-05-04-omni-reward-towards-generalist-omni-modal-reward) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Omni-Reward: Towards Generalist Omni-Modal Reward Modeling with Free-Form Preferences](/audio-paper-digest-blog/posts/2026-05-04-omni-reward-towards-generalist-omni-modal-reward)

🔥 **8.0/10** | 前25% | #多模态奖励建模 | #奖励模型 | #多模态模型 #基准测试

👥 **作者与机构**

- 第一作者：Zhuoran Jin, Hongbang Yuan, Kejian Zhu (共同第一作者)
- 通讯作者：Jun Zhao
- 作者列表：
    - Zhuoran Jin（中国科学院大学人工智能学院; 中国科学院自动化研究所认知与决策智能重点实验室）
    - Hongbang Yuan（中国科学院大学人工智能学院; 中国科学院自动化研究所认知与决策智能重点实验室）
    - Kejian Zhu（中国科学院大学人工智能学院; 中国科学院自动化研究所认知与决策智能重点实验室）
    - Jiachun Li（中国科学院大学人工智能学院; 中国科学院自动化研究所认知与决策智能重点实验室）
    - Pengfei Cao（中国科学院大学人工智能学院; 中国科学院自动化研究所认知与决策智能重点实验室）
    - Yubo Chen（中国科学院大学人工智能学院; 中国科学院自动化研究所认知与决策智能重点实验室）
    - Kang Liu（中国科学院大学人工智能学院; 中国科学院自动化研究所认知与决策智能重点实验室）
    - Jun Zhao（中国科学院大学人工智能学院; 中国科学院自动化研究所认知与决策智能重点实验室）

💡 **毒舌点评**

该工作精准地指出了当前奖励模型在“模态覆盖”与“偏好表达”上的两大痛点，并提出了首个覆盖五种模态、支持自由形式偏好的Benchmark和Dataset，为多模态对齐研究提供了急需的基础设施，这是其最大亮点。然而，其生成式奖励模型（Omni-RewardModel-R1）的训练仅用了3%的数据，虽然强调了可解释性，但这也意味着其性能上限可能受限于小数据规模，且论文中“自由形式偏好”的指令调优数据主要由GPT-4o生成，其质量与多样性是否足以代表真实人类偏好的复杂性存疑。

🔗 **开源详情**

-   代码：提供代码仓库链接：https://github.com/HongbangYuan/OmniReward
-   模型权重：论文中提及提供了Omni-RewardModel-BT和Omni-RewardModel-R1的权重。
-   数据集：
    -   Omni-RewardBench: https://hf.co/datasets/HongbangYuan/OmniRewardBench
    -   Omni-RewardData: https://hf.co/datasets/jinzhuoran/OmniRewardData
-   Demo：论文中未提及在线演示。
-   复现材料：论文在正文和附录中详细描述了模型架构、训练流程（包括数据处理、标注指南）、评估协议、伦理与质量控制措施，复现信息较为充分。
-   论文中引用的开源项目：主要依赖的开源模型/框架包括：MiniCPM-o-2.6, Qwen2.5-VL-7B-Instruct, Qwen2.5-Omni-7B, LLaVA-OneVision, InternVL2.5/3, Gemma-3等；使用的基准数据集如Skywork-Reward-Preference, RLAIF-V, HPDv2, VideoDPO等。

📌 **核心摘要**

1. 要解决的问题：现有奖励模型存在“模态不平衡”（主要集中于文本和图像，忽视视频、音频、3D）和“偏好刚性”（仅基于固定的二元偏好对训练，无法适应多样化的个性化偏好）两大核心挑战。
2. 方法核心：提出“Omni-Reward”框架，通过构建Benchmark（Omni-RewardBench）、Dataset（Omni-RewardData）和Model（Omni-RewardModel）三位一体的方案来应对上述挑战。
3. 与已有方法相比新在哪里：首次提出覆盖文本、图像、视频、音频、3D五种模态的奖励建模Benchmark，且引入自由形式文本描述的评价标准。构建了包含通用偏好和指令调优数据的大型多模态偏好数据集。模型同时包含判别式（基于Bradley-Terry损失）和生成式（基于强化学习的Chain-of-Thought推理）两种范式。
4. 主要实验结果：Omni-RewardModel-BT在自建的Omni-RewardBench（w/o Ties设置）上达到73.68%的准确率，超越最强基线模型Claude 3.5 Sonnet（66.54%）超过7个百分点。在外部基准VL-RewardBench上也达到76.3%的SOTA性能。消融实验表明，混合多模态数据和指令调优数据对性能提升至关重要。具体结果如下表所示：
| 模型 | Omni-RewardBench (w/o Ties) | Omni-RewardBench (w/ Ties) | VL-RewardBench |
| :--- | :--- | :--- | :--- |
| Claude 3.5 Sonnet | 未提供 | 66.54% | 55.3% |
| Omni-RewardModel-BT | 73.68% | 65.36% | 76.3% |
| Omni-RewardModel-R1 | 未提供 | 60.18% | 未提供 |
5. 实际意义：为构建能理解和适应复杂、个性化人类偏好的通用型多模态AI系统提供了关键的基础模型、数据集和评估工具，推动了对齐技术向更通用、更灵活的方向发展。
6. 主要局限性：Omni-RewardBench规模较小（3,725对），任务分类相对粗糙；偏好数据仅限于单轮交互；生成式奖励模型的强化学习探索尚处初步阶段；模态扩展性（如热成像、雷达等）有待验证。

---

