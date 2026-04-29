---
title: "ICASSP 2026 - 数据集对齐 论文列表"
date: 2026-04-29
draft: false
tags: ["数据集对齐"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 数据集对齐 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 数据集对齐

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Structure-Aware Diffusion Schrödinger Bridge](/audio-paper-digest-blog/posts/2026-04-29-structure-aware-diffusion-schrdinger-bridge) | 7.7分 | 前50% |

---

## 📋 论文详情

### 🥇 [Structure-Aware Diffusion Schrödinger Bridge](/audio-paper-digest-blog/posts/2026-04-29-structure-aware-diffusion-schrdinger-bridge)

✅ **7.7/10** | 前50% | #数据集对齐 | #扩散模型 | #领域适应

👥 **作者与机构**

- 第一作者：未说明
- 通讯作者：未说明
- 作者列表：Dawnlicity Charls (新南威尔士大学电气工程与电信学院)、Tharmakulasingam Sirojan (新南威尔士大学电气工程与电信学院)、Vidhyasaharan Sethu (新南威尔士大学电气工程与电信学院)、Beena Ahmed (新南威尔士大学电气工程与电信学院)

💡 **毒舌点评**

亮点：巧妙地将Gromov-Wasserstein距离的核心思想（保持相对结构）转化为一个可直接加入扩散模型训练的正则化损失项，用最小的“补丁”解决了Schrödinger Bridge在数据对齐中破坏数据拓扑的实际痛点。短板：整篇论文的实验说服力严重依赖“在合成数据上效果好”这一环，若没有在如MRI-CT转换、跨域图像翻译等真实且公认的挑战性任务上展示其“结构保持”带来的下游性能提升（如分类准确率），这篇工作更像一个“技术上可行、但尚未证明实用价值”的实验性探索。

📌 **核心摘要**

1.  解决什么问题：现有的基于Schrödinger Bridge (SB)的数据集对齐方法在学习分布间的映射时，缺乏对数据内在几何结构（如聚类、相对距离）的感知，可能导致在传输过程中破坏这些对下游任务至关重要的结构。
2.  方法核心：提出Structure-aware Diffusion Schrödinger Bridge (SDSB)，在原始Diffusion Schrödinger Bridge (DSB)的训练损失中，加入一个基于Gromov-Wasserstein (GW) 距离的结构正则化项。该正则化项通过最小化每个扩散步前后样本距离矩阵的差异，迫使模型在传输分布的同时保持样本间的相对关系。
3.  与已有方法相比新在哪里：与需要成对数据的SB-ALIGN相比，SDSB完全无监督；与解决离散最优传输的Gromov-Wasserstein方法相比，SDSB能在连续空间操作；最重要的是，与标准DSB相比，SDSB通过显式约束改变了优化目标，从纯粹的熵最优传输变为结构感知的传输。
4.  主要实验结果：在合成数据集（双月形、高斯混合）上验证了SDSB的有效性。
    *   几何保持：将月牙数据旋转60°时，DSB会分裂月牙，而SDSB保持了其完整形状（如图2所示）。
    *   尺度不变性：将月牙数据旋转并缩放时，SDSB能更好地学习旋转变换，生成的样本更贴合目标分布（如图4所示）。
    *   聚类保持：在高斯混合模型传输实验中，SDSB的聚类传输分数显著高于DSB，更接近理想值，表明其更好地保持了聚类结构（定量结果见下表）。

| 维度 | DSB | SDSB (本文) | 真实分布 |
| :--- | :--- | :--- | :--- |
| 2 | -21.8 | -3.8 | -2.8 |
| 5 | -31.3 | -9.3 | -7.1 |
| 10 | -38.8 | -17.4 | -14.2 |
| 20 | -50.2 | -32.7 | -28.4 |
| 50 | -100.8 | -76.7 | -71.0 |
表：高斯混合模型聚类传输分数（越高越好）。
5.  实际意义：为需要保持数据内在结构（如类别、相对关系）的数据集对齐任务（如无监督域适应、跨域图像翻译）提供了一种新的、完全无监督的算法选择。
6.  主要局限性：论文所有验证均在低维合成数据集上进行，未在任何真实世界的高维数据集（如图像、语音）上进行评估，其实用性和泛化能力未得到证明。训练时间加倍也是潜在的应用障碍。

---

