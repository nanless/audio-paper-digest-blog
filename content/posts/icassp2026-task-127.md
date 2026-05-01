---
title: "ICASSP 2026 - 音频效果估计 论文列表"
date: 2026-04-29
draft: false
tags: ["音频效果估计"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音频效果估计 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音频效果估计

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Audio Effect Estimation with DNN-Based Prediction and Search](/audio-paper-digest-blog/posts/2026-04-29-audio-effect-estimation-with-dnn-based-prediction) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Audio Effect Estimation with DNN-Based Prediction and Search Algorithm](/audio-paper-digest-blog/posts/2026-04-29-audio-effect-estimation-with-dnn-based-prediction)

✅ **7.0/10** | 前25% | #音频效果估计 | #深度神经网络 #优化算法 | #音乐信息检索 #深度神经网络

👥 **作者与机构**

- 第一作者：Youichi Okita（关西学院大学 理工学研究科）
- 通讯作者：Haruhiro Katayose（关西学院大学 工学部）
- 作者列表：Youichi Okita（关西学院大学 理工学研究科）、Haruhiro Katayose（关西学院大学 工学部）

💡 **毒舌点评**

这篇论文的亮点在于它优雅地模拟了人类音频工程师“先猜后调”的工作流程，将数据驱动的预测与基于信号相似度的搜索有机结合，实验证明这种“两阶段法”确实优于纯预测方法。短板在于其研究的问题场景（吉他效果链）相对垂直窄众，虽然方法论扎实，但能否推广到更复杂、更多样的现实音频处理场景（如流行音乐、混音工程）还有待验证，且未与该领域所有可能的最新方法进行对比。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开的模型权重。
- 数据集：论文中提及使用了公开的吉他数据集（IDMT-SMT-Guitar， GuitarSet， EGDB， Guitar-TECHS），但用于生成湿信号的效果参数和生成脚本未提及是否公开。
- Demo：提供了一个在线演示网站：https://okitayouichi.github.io/afx-pred-sch-demo/
- 复现材料：论文提供了较为详细的训练超参数、网络架构描述和损失函数公式，但缺乏硬件配置、训练时长、以及完整的配置文件或检查点信息。
- 论文中引用的开源项目：使用了`pedalboard`库（由Spotify开源）来生成数据，使用了`Optuna`框架来进行搜索算法实现。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  解决的问题：解决“音频效果估计”任务，即从经过效果处理的湿信号中，推断出所应用的效果器类型、顺序及其参数设置。
2.  方法核心：提出一种两阶段方法。第一阶段，使用DNN预测干信号和/或效果配置的部分信息（如类型组合）；第二阶段，以预测的干信号为基础，通过优化算法（如CMA-ES）搜索最佳参数，使得应用预测效果链后重建的信号与原始湿信号的相似度最大化。
3.  与已有方法相比新在何处：突破了现有方法要么纯预测（依赖大量标注数据，可能不准）、要么纯搜索（需要已知干信号）的局限。通过先预测干信号，为搜索阶段提供了关键输入，从而能够利用重建相似度这一客观目标来优化预测结果，实现了两类方法的互补。
4.  主要实验结果：在吉他效果链数据集上，该两阶段方法在湿信号重建任务上显著优于纯预测基线（例如，SI-SDR从18.18提升至23.07）。同时，研究发现将“预测效果类型组合”与“搜索估计顺序和参数”结合的任务划分策略，在多项指标（类型分类F1、重建SI-SDR等）上表现最佳。关键结果表格如下：

| 任务 | 方法 | 核心指标 | 数值 |
| :--- | :--- | :--- | :--- |
| 单效果类型分类 | Bypass-Type-Iter | Macro F1 | 0.919 |
| | Bypass-Config-Iter | Macro F1 | 0.917 |
| 效果链类型分类 | Dry-Type-Direct + Search | Macro F1 | 0.958 |
| | Bypass-Type-Iter | Macro F1 | 0.949 |
| | Bypass-Config-Iter | Macro F1 | 0.942 |
| 单效果移除 | Bypass-Type-Iter | SI-SDR | 26.32 |
| 效果链移除 | Dry-Type-Direct | SI-SDR | 13.96 |
| | Bypass-Type-Iter | SI-SDR | 14.95 |
| 湿信号重建 | Bypass-Config-Iter (基线) | SI-SDR | 18.18 |
| | Dry-Type-Direct + Search | SI-SDR | 23.07 |
| | Bypass-Type-Iter + Search | SI-SDR | 22.68 |

5.  实际意义：为自动化音频效果复制与分析提供了新思路，有望帮助音乐初学者学习音色设计，或辅助音频工程师快速复现复杂效果。
6.  主要局限性：实验仅覆盖三种吉他效果（合唱、失真、混响）和较短的效果链，未涉及更多样化的效果类型和更长的链，其实用性和泛化能力有待进一步验证。

---

