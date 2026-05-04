---
title: "ICLR 2026 - 基准测试 #数据集 论文列表"
date: 2026-05-04
draft: false
tags: ["基准测试 #数据集"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 基准测试 #数据集 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 基准测试 #数据集

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Omni-Reward: Towards Generalist Omni-Modal Reward Modeling w](/audio-paper-digest-blog/posts/2026-05-04-omni-reward-towards-generalist-omni-modal-reward) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Omni-Reward: Towards Generalist Omni-Modal Reward Modeling with Free-Form Preferences](/audio-paper-digest-blog/posts/2026-05-04-omni-reward-towards-generalist-omni-modal-reward)

🔥 **8.0/10** | 前25% | #基准测试 #数据集 | #强化学习 #多任务学习 | #多模态模型 #基准测试

👥 **作者与机构**

- 第一作者：Zhuoran Jin（中国科学院大学人工智能学院，中国科学院自动化研究所，国家认知与决策智能重点实验室）
- 通讯作者：Jun Zhao（中国科学院大学人工智能学院，中国科学院自动化研究所，国家认知与决策智能重点实验室）
- 作者列表：Zhuoran Jin（中国科学院大学人工智能学院，中国科学院自动化研究所）， Hongbang Yuan（中国科学院大学人工智能学院，中国科学院自动化研究所）， Kejian Zhu（中国科学院大学人工智能学院，中国科学院自动化研究所）， Jiachun Li（中国科学院大学人工智能学院，中国科学院自动化研究所）， Pengfei Cao（中国科学院大学人工智能学院，中国科学院自动化研究所）， Yubo Chen（中国科学院大学人工智能学院，中国科学院自动化研究所）， Kang Liu（中国科学院大学人工智能学院，中国科学院自动化研究所）， Jun Zhao（中国科学院大学人工智能学院，中国科学院自动化研究所）

💡 **毒舌点评**

这篇论文最大的贡献是“立规矩、搭台子”——提出了首个覆盖全模态且支持自由格式偏好的奖励建模基准和数据集，填补了领域空白，为后续研究提供了标准评测场。其短板在于模型架构本身（Omni-RewardModel）是现有技术（如Bradley-Terry框架、GRPO强化学习）在更大规模多模态数据上的直接应用，缺乏针对“自由格式偏好”理解的独创性建模机制。

🔗 **开源详情**

- 代码：提供了GitHub仓库链接：https://github.com/HongbangYuan/OmniReward
- 模型权重：提及了公开Omni-RewardModel权重，下载链接为：https://hf.co/datasets/HongbangYuan/OmniRewardBench (注：此处链接标签为Dataset，但文中暗示模型权重也可能在此或类似路径)
- 数据集：明确公开两个数据集：Omni-RewardBench (https://hf.co/datasets/HongbangYuan/OmniRewardBench) 和 Omni-RewardData (https://hf.co/datasets/jinzhuoran/OmniRewardData)，均托管于HuggingFace。
- Demo：论文中未提及在线演示。
- 复现材料：论文在正文和附录中描述了数据收集、标注流程、模型训练细节（如骨干模型选择、训练数据比例、强化学习算法）以及评估协议，复现信息较为充分。
- 引用的开源项目：模型构建依赖MiniCPM-o-2.6和Qwen2.5-VL等开源多模态模型。训练数据整合了多个公开数据集，如Skywork-Reward-Preference, RLAIF-V, HPDv2, VideoDPO等。

📌 **核心摘要**

1.  要解决什么问题：现有的奖励模型存在两个核心挑战：一是模态不平衡，主要关注文本和图像，对音频、视频、3D等模态支持不足；二是偏好刚性，基于固定的二元偏好对训练，无法捕捉复杂多样的个性化偏好。
2.  方法核心是什么：提出Omni-Reward框架，包含三个核心组件：(1) 评测基准Omni-RewardBench，首个支持自由格式偏好描述、覆盖9类任务5种模态的奖励模型评测集；(2) 训练数据集Omni-RewardData，包含248K通用偏好对和69K用于指令微调的自由格式偏好对；(3) 模型Omni-RewardModel，包括判别式（BT）和生成式（R1）两种全模态奖励模型。
3.  与已有方法相比新在哪里：(1) 首次系统性地将奖励建模扩展到全模态场景（包括音频、3D）；(2) 首次在奖励建模中引入自由形式的自然语言偏好描述，替代传统的二元选择，以支持动态、个性化的偏好对齐；(3) 构建了迄今为止最全面的多模态奖励建模训练数据集。
4.  主要实验结果如何：
    *   在自有基准Omni-RewardBench（w/ Ties设置）上，Omni-RewardModel-BT达到65.36% 准确率，超越最强基线（Claude 3.5 Sonnet的66.54%已属顶级，但模型整体仍有提升空间）。
    *   在公开基准VL-RewardBench上，Omni-RewardModel-BT达到76.3% 准确率，取得SOTA性能。
    *   消融实验证明，使用混合多模态数据进行训练比单模态数据显著提升泛化能力；指令微调数据对于处理自由格式偏好至关重要。

| 模型 | Omni-RewardBench (w/ Ties) | VL-RewardBench |
| :--- | :--- | :--- |
| Claude 3.5 Sonnet (最强基线) | 66.54% | 55.3% |
| Omni-RewardModel-BT | 65.36% | 76.3% |
| Omni-RewardModel-R1 | 60.18% | 未报告 |

5.  实际意义是什么：为未来的全模态大模型（如GPT-4o, Qwen2.5-Omni）提供了对齐所需的关键基础设施——评测标准和训练数据。推动了奖励建模从“固定偏好”向“个性化偏好”的范式转变，使AI系统能更灵活地适应不同用户或场景的具体需求。
6.  主要局限性是什么：(1) Omni-RewardBench的规模（3.7K对）相对较小，可能不足以全面评估超大规模模型；(2) 任务定义相对粗粒度，每种模态任务内的多样性还可进一步细分；(3) 当前数据仅限单轮交互，未涵盖多轮对话偏好。

---

