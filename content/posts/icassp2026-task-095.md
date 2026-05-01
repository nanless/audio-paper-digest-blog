---
title: "ICASSP 2026 - 课堂阶段分割 论文列表"
date: 2026-04-29
draft: false
tags: ["课堂阶段分割"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 课堂阶段分割 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 课堂阶段分割

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [A New Method and Dataset for Classroom Teaching Stage Segmen](/audio-paper-digest-blog/posts/2026-04-29-a-new-method-and-dataset-for-classroom-teaching) | 6.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [A New Method and Dataset for Classroom Teaching Stage Segmentation](/audio-paper-digest-blog/posts/2026-04-29-a-new-method-and-dataset-for-classroom-teaching)

✅ **6.5/10** | 前25% | #课堂阶段分割 | #多模态融合 | #教育技术 #数据集

👥 **作者与机构**

- 第一作者：Shihao Yang（东北师范大学信息科学学院）
- 通讯作者：Shuhua Liu（东北师范大学信息科学学院，邮箱：liush129@nenu.edu.cn）
- 作者列表：Shihao Yang（东北师范大学信息科学学院）、Nan Zhang（东北师范大学信息科学学院）、Yue Jiang（东北师范大学信息科学学院）、Ziyi Zhang（东北师范大学信息科学学院）、Shuhua Liu（东北师范大学信息科学学院）

💡 **毒舌点评**

本文最大亮点是首次明确定义了“课堂教学阶段分割”这一任务并构建了首个大规模多模态数据集，为教育过程分析提供了重要的基准和基础设施。然而，其提出的“多模态聚类-分离损失”与“熵权动态加权”方法在技术原创性上略显保守，更多是已有技巧在特定任务上的组合应用，动态加权策略带来的性能提升（如表2中从63.17到66.85）虽显著但幅度有限。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：论文构建并介绍了TSS数据集，包含1,928节课和详细划分，但未提及数据集的具体公开或获取方式。
- Demo：未提及。
- 复现材料：提供了训练的主要超参数（学习率、batch size、epoch数、损失权重）和硬件配置，但部分细节（如优化器、数据预处理代码）未说明。
- 论文中引用的开源项目：提到了使用的预训练模型（Bart, Longformer, TimeSformer, wav2vec2）和工具（讯飞语音转写API）。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

这篇论文首次聚焦于“课堂教学阶段分割”任务，旨在将完整的教学过程自动划分为复习、导入、讲解、总结和布置作业等逻辑阶段，以支持师范生培训和教学评估。为此，作者构建了一个包含1928节课、涵盖文本、音频、视频三种模态的大规模数据集（TSS），这是该领域的首个专用数据集。方法上，提出了一种多模态融合框架，其核心创新在于设计了“聚类损失”和“分离损失”以增强阶段内语义一致性与阶段间区分度，并采用基于信息熵的动态加权策略来融合多模态信息，自适应抑制噪声模态。实验表明，该多模态方法在Pk、WD、MacroF1等指标上显著优于仅使用文本的基线及最新的大语言模型（如Longformer基线在多模态动态加权下MacroF1达到66.85）。该研究为智能教育提供了新的技术路径，但其方法的普适性及数据集在不同文化、学科背景下的泛化能力仍需进一步验证。

---

