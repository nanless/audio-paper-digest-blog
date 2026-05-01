---
title: "ICASSP 2026 - 说话人生成 论文列表"
date: 2026-04-29
draft: false
tags: ["说话人生成"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 说话人生成 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 说话人生成

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [DepthTalk: Few-Shot Talking Head Generation with Depth-Aware](/audio-paper-digest-blog/posts/2026-04-29-depthtalk-few-shot-talking-head-generation-with) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [DepthTalk: Few-Shot Talking Head Generation with Depth-Aware 3D Gaussian Field Motion](/audio-paper-digest-blog/posts/2026-04-29-depthtalk-few-shot-talking-head-generation-with)

✅ **7.0/10** | 前25% | #说话人生成 | #3D高斯溅射 | #少样本学习 #音视频

👥 **作者与机构**

- 第一作者：Shucheng Ji（澳门理工大学应用科学学院）
- 通讯作者：Xiaochen Yuan（澳门理工大学应用科学学院）
- 作者列表：Shucheng Ji（澳门理工大学应用科学学院）、Junqing Huang（澳门理工大学应用科学学院）、Yang Lian（澳门理工大学应用科学学院）、Xiaochen Yuan（澳门理工大学应用科学学院）

💡 **毒舌点评**

亮点在于其“深度梯度损失”设计很巧妙，通过监督深度图的梯度而非绝对值来防止尺度不一致导致的深度崩塌，这是一个对实际工程问题有深刻洞察的解决方案。短板是其整体框架建立在强大的预训练深度先验模型（Sapiens）之上，这在一定程度上限制了方法的通用性和在无此类先验场景下的可用性，且论文未提供代码，复现门槛较高。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开模型权重。
- 数据集：使用了HDTF和公开数据集，但未说明这些数据集是否在本工作专属发布或如何获取。
- Demo：未提及在线演示。
- 复现材料：提供了训练时长（预训练2小时）、优化器、学习率、损失权重等关键超参数，但缺乏batch size、数据预处理细节等，复现信息不够充分。
- 论文中引用的开源项目：引用了InsTaG（[2]）、SyncTalk（[10]）、GeneFace（[14]）、MimicTalk（[15]）等开源工作作为基线或技术参考。
- 总体：论文中未提及开源计划。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1. 问题：基于3D高斯溅射（3DGS）的说话人生成模型在优化时存在深度歧义，导致在渲染新视角（尤其是大角度偏转）时产生模糊、暗区等视觉伪影。现有方法仅在训练阶段引入深度监督，缺乏重建时的深度感知机制。
2. 方法核心：提出DepthTalk框架。其核心是深度感知高斯运动网络（DAGM），采用双管道架构：一个“深度感知管道”整合深度先验、表情和音频特征预测深度相关的高斯场变换；另一个“几何感知管道”专注于利用表情和音频预测面部运动变换。两者通过自适应运动融合（MF） 模块结合。此外，提出了深度梯度损失（DGL），通过Sobel算子计算并比较渲染深度图与先验深度图的梯度幅度来施加监督，避免因绝对尺度差异造成的深度崩塌。
3. 新意：将深度感知直接嵌入到高斯场的重建（变换预测）过程中，而非仅用于训练正则化；解耦了深度对齐与面部运动建模；提出基于梯度的深度损失函数。
4. 实验：在仅5秒视频的少样本设定下进行实验。定量结果：DepthTalk在图像质量指标（PSNR: 29.8974, LPIPS: 0.0530, SSIM: 0.9226）上优于所有对比方法（包括InsTaG），唇部运动精度（LMD: 3.0836）也达到最佳。消融研究表明，DAGM、MF和DGL三个组件共同作用才能达到最佳性能。定性结果（图3）显示，DepthTalk在生成新视角面部时，光照更真实，伪影更少。
5. 意义：在数据受限（少样本）场景下，实现了更高质量、更几何一致的说话人头部视频合成，对数字人、虚拟现实等应用有潜在价值。
6. 局限性：依赖外部预训练的深度先验模型（Sapiens）；实验数据集（HDTF等）的规模和多样性有限；推理速度（32.66 FPS）虽实时但略低于InsTaG。

---

