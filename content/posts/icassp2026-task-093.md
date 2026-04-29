---
title: "ICASSP 2026 - 说话人识别 论文列表"
date: 2026-04-29
draft: false
tags: ["说话人识别"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 说话人识别 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 说话人识别

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [DPO-Regularized Regression for Age Prediction](/audio-paper-digest-blog/posts/2026-04-29-dpo-regularized-regression-for-age-prediction) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [DPO-Regularized Regression for Age Prediction](/audio-paper-digest-blog/posts/2026-04-29-dpo-regularized-regression-for-age-prediction)

✅ **7.5/10** | 前25% | #说话人识别 | #回归模型 | #偏好学习 #DPO

👥 **作者与机构**

- 第一作者：Mahsa Zamani（卡内基梅隆大学语言技术研究所）
- 通讯作者：Bhiksha Raj（卡内基梅隆大学语言技术研究所）
- 作者列表：Mahsa Zamani（卡内基梅隆大学语言技术研究所）、Rita Singh（卡内基梅隆大学语言技术研究所）、Bhiksha Raj（卡内基梅隆大学语言技术研究所）

#

💡 **毒舌点评**

亮点：将偏好优化（DPO）从语言模型对齐巧妙迁移到连续值回归问题，作为序数损失的监督信号，思路新颖且理论上有说服力，为传统MSE回归提供了有价值的补充。短板：实验仅在TIMIT（630人，20-58岁）这一个相对较小且年龄范围受限的数据集上验证，说服力有限；且未开源代码和模型，对于声称的“state-of-the-art”缺乏与同期最先进方法的直接横向对比。

📌 **核心摘要**

本文针对说话人年龄估计这一回归任务中，均方误差（MSE）损失无法有效建模年龄序数关系的问题，提出了一种结合MSE与直接偏好优化（DPO）的混合训练方法。方法的核心是将连续年龄目标离散化为分位数桶，并为每个样本构建偏好对（预测更接近真实年龄的桶为“偏好”，更远的为“非偏好”），通过DPO损失鼓励模型学习这种序数偏好。这不同于传统MSE对误差分布的假设，也不同于简单的分类方法。主要实验在TIMIT数据集上进行，结果表明，结合MSE和DPO的回归+DPO（RD）配置，使用12个桶和30个偏好对时，取得了最佳的平均绝对误差（MAE）3.98，优于仅使用MSE的基线（4.05）和纯分类方法，并接近该数据集上报告的最优水平（3.97）。该方法的意义在于首次将DPO应用于非分类的回归任务，为需要利用序数信息的连续值预测问题提供了一种新思路。主要局限性是实验数据集规模较小、年龄范围不包含青少年和老年，且未与更多现代方法进行对比验证。

表1：不同损失配置在TIMIT数据集上的MAE对比（关键结果）

| 损失配置 | MAE | 桶数量 | 偏好对数量 |
| :--- | :--- | :--- | :--- |
| RO (仅回归/MSE) | 4.0543 | - | - |
| RD (回归+DPO) | 4.0737 | 6 | 6 |
| RD (回归+DPO) | 4.0454 | 8 | 8 |
| RD (回归+DPO) | 3.9801 | 12 | 30 |
| RD (回归+DPO) | 4.0892 | 12 | 40 |
| RCD (回归+分类+DPO) | 4.0326 | 8 | 30 |

---

