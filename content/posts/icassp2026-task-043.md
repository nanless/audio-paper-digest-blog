---
title: "ICASSP 2026 - 联邦学习 论文列表"
date: 2026-04-29
draft: false
tags: ["联邦学习"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 联邦学习 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 联邦学习

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Cooperative Multi-Agent Reinforcement Learning for Adaptive ](/audio-paper-digest-blog/posts/2026-04-29-cooperative-multi-agent-reinforcement-learning) | 7.0分 | 前50% |

---

## 📋 论文详情

### 🥇 [Cooperative Multi-Agent Reinforcement Learning for Adaptive Aggregation in Semi-Supervised Federated Learning with non-IID Data](/audio-paper-digest-blog/posts/2026-04-29-cooperative-multi-agent-reinforcement-learning)

✅ **7.0/10** | 前50% | #联邦学习 | #强化学习 | #音频分类 #对抗样本

👥 **作者与机构**

- 第一作者：Rene Glitza（波鸿鲁尔大学通信声学研究所）
- 通讯作者：论文中未明确指出，未说明
- 作者列表：Rene Glitza（波鸿鲁尔大学通信声学研究所）、Luca Becker（波鸿鲁尔大学通信声学研究所）、Rainer Martin（波鸿鲁尔大学通信声学研究所）

💡 **毒舌点评**

本文巧妙地将TD3算法应用于联邦学习的服务器与客户端双层决策，构建了一个能同时“抵御坏人”和“发展个性”的自适应系统，实验设计考虑了三种非独立同分布场景和对抗设置，相当全面。但实验仅局限于一个450k参数的小型音频Transformer预训练任务，就宣称“适用于真实世界部署”略显仓促，且未与同样使用强化学习的FedAA、FedDRL进行充分直接的性能对比，说服力打了折扣。

🔗 **开源详情**

- 代码：论文中提及代码仓库链接为 `github.com/NexuFed/pFedMARL`。
- 模型权重：未提及公开模型权重。
- 数据集：实验使用DCASE Task 2数据集，但论文未说明是否公开处理后的数据集或如何获取，仅提及了原始数据集来源。
- Demo：未提供在线演示。
- 复现材料：论文提供了部分训练细节（网络结构、超参数、数据集描述），但缺少完整的配置文件、训练脚本、环境依赖列表和检查点。
- 论文中引用的开源项目：论文引用了Twin Delayed DDPG (TD3)算法[12]、优先级经验回放[19]、Audio Spectrogram Transformer (AST)[17, 18]等，表明实现可能依赖这些概念或现有库。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

本文旨在解决联邦学习在非独立同分布数据下全局模型性能下降及模型偏差问题，以及对抗性客户端威胁模型鲁棒性的挑战。核心方法是提出pFedMARL，一个多智能体强化学习框架，使用Twin Delayed DDPG（TD3） 算法。该框架包含一个服务器端代理，动态调整客户端聚合权重以优化全局模型鲁棒性；以及客户端代理，平衡全局与局部更新以实现个性化模型，且无需预训练代理。与传统方法（如FedAvg）相比，其新在将联邦学习过程建模为多智能体协同决策问题，实现了聚合策略的动态自适应。与Ditto相比，其新在通过强化学习自动学习个性化平衡参数，并额外增强了对抗鲁棒性。主要实验结��（见下表）表明，在三种非独立同分布数据场景下，pFedMARL在本地数据和全局数据上的MSE和F1-score指标上均优于或媲美FedAvg和Ditto，并能有效抑制对抗性客户端的影响。其实际意义在于为隐私敏感、数据异构的真实世界（如IoT设备协同训练）提供了一个灵活、可扩展的联邦学习解决方案。主要局限性在于验证局限于单一的半监督音频预训练任务，且缺乏对更多标准联邦学习基准（如计算机视觉数据集）的验证。

关键实验结果表1：客户端模型在本地测试集（L）和全局测试集（G）上的平均性能（部分）

| 算法 | 数据场景 | MSE Mean ↓ (L) | MSE Mean ↓ (G) | F1 Mean ↑ (L) | F1 Mean ↑ (G) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| pFedMARL | QS | 0.10 | 0.11 | 0.77 | 0.73 |
| | LS | 0.10 | 0.11 | 0.87 | 0.60 |
| | CS | 0.06 | 0.12 | 0.96 | 0.21 |
| Ditto | QS | 0.17 | 0.17 | 0.75 | 0.71 |
| | LS | 0.17 | 0.18 | 0.69 | 0.34 |
| | CS | 0.15 | 0.19 | 0.91 | 0.19 |
| FedAvg | QS | 1.17 | 1.17 | 0.17 | 0.17 |
| | LS | 0.96 | 0.96 | 0.13 | 0.13 |
| | CS | 1.25 | 1.25 | 0.02 | 0.02 |
| Local | QS | 0.10 | 0.10 | 0.84 | 0.80 |
| | LS | 0.08 | 0.11 | 0.92 | 0.59 |
| | CS | 0.03 | 0.07 | 0.98 | 0.21 |

关键实验结果表2：服务器模型在全局测试集上的F1分数

| 场景 | CS | LS | QS |
| :--- | :--- | :--- | :--- |
| pFedMARL | 0.22 | 0.38 | 0.61 |
| Ditto | 0.11 | 0.07 | 0.22 |
| FedAvg | 0.03 | 0.12 | 0.17 |
| Baseline (Oracle) | 0.97 | 0.01 | 低标签不平衡(未给出具体值) |

![图4描述：在CS非独立同分布场景下，pFedMARL、Ditto、FedAvg和本地训练的平均验证准确率（上图）、服务器F1准确率（中图）以及平均动作值（下图）随通信轮数的变化曲线。](pdf-image-page2-idx3)
图4说明：该图直观展示了pFedMARL的动态适应过程。客户端准确率（上图）在约50轮后超过Ditto，逼近本地训练。服务器准确率（中图）在初始阶段后稳步提升。下图显示，良性客户端的动作值（聚合权重）稳定在0.5左右，而对抗性客户端的动作值被迅速抑制至约0.1，证明了框架的鲁棒性。

---

