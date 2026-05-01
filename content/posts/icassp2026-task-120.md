---
title: "ICASSP 2026 - 音频场景分类 论文列表"
date: 2026-04-29
draft: false
tags: ["音频场景分类"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音频场景分类 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音频场景分类

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [DDSC: Dynamic Dual-Signal Curriculum for Data-Efficient Acou](/audio-paper-digest-blog/posts/2026-04-29-ddsc-dynamic-dual-signal-curriculum-for-data) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [DDSC: Dynamic Dual-Signal Curriculum for Data-Efficient Acoustic Scene Classification Under Domain Shift](/audio-paper-digest-blog/posts/2026-04-29-ddsc-dynamic-dual-signal-curriculum-for-data)

✅ **7.0/10** | 前25% | #音频场景分类 | #课程学习 | #领域适应 #低资源

👥 **作者与机构**

- 第一作者：Peihong Zhang（School of Advanced Technology, Xi’an Jiaotong-Liverpool University, Suzhou, China）
- 通讯作者：未说明（论文中未明确标注通讯作者）
- 作者列表：Peihong Zhang（School of Advanced Technology, Xi’an Jiaotong-Liverpool University, Suzhou, China）、Yuxuan Liu（同上）、Rui Sang（同上）、Zhixin Li（同上）、Yiqiang Cai（同上）、Yizhou Tan（同上）、Shengchen Li（同上）

💡 **毒舌点评**

亮点在于巧妙地将“领域不变性”和“学习进度”两个动态信号融合成自适应的课程权重，避免了传统课程学习静态排序的僵化，设计轻量且即插即用。短板则是其动态调整高度依赖已知的设备标签进行原型计算，一旦面对完全无标签或设备信息未知的真实场景，该方法的适用性将面临直接挑战。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及。
- 数据集：使用的是公开的 DCASE 2024 Task 1 数据集，但论文未提供获取链接（可通过 DCASE Challenge 官网获取）。
- Demo：未提及。
- 复现材料：论文给出了算法伪代码（Algorithm 1）和核心公式，但缺失关键超参数的具体数值和完整的训练脚本/配置。
- 论文中引用的开源项目：论文在基线介绍中提到了几个来自挑战赛的提交系统（如 DS-FlexiNet），但未明确说明这些是否为开源项目及其链接。主要依赖的工具（如具体框架 PyTorch/TensorFlow）也未说明。

📌 **核心摘要**

1.  要解决的问题：声学场景分类（ASC）中由录音设备差异引起的领域偏移问题，特别是在可用标注数据有限的低资源场景下，模型性能会严重下降。
2.  方法核心：提出动态双信号课程（DDSC）训练策略。该方法不修改模型架构，而是在每个训练 epoch 动态计算并融合两个信号来为每个样本分配训练权重：一个基于设备原型熵的“领域不变性信号”，用于识别与设备无关的样本；一个基于损失平滑变化的“学习进度信号”，用于衡量样本的边际学习价值。
3.  新在何处：与之前静态的课程学习方法（如EGCL, SSPL, LCL, CLDG）固定样本排序或权重不同，DDSC 能够根据训练过程中模型表示和决策边界的演变，在线调整每个样本的重要性，实现了真正动态的、由易到难的学习过程。
4.  主要实验结果：在 DCASE 2024 Task 1 官方数据集和协议下，DDSC 在多个基线模型和不同标注预算（5%-100%）上均取得一致提升。在最具挑战性的 5% 标注预算下，DDSC 相较于基线平均提升约 4.2% 的总体准确率和 3.9% 的未见设备准确率。 关键结果对比如下表所示：

| 系统                     | 总体准确率 (5%) | 未见设备准确率 (5%) | 总体准确率 (100%) | 未见设备准确率 (100%) |
| :----------------------- | :-------------: | :-----------------: | :---------------: | :-------------------: |
| DCASE2024 Baseline       |     44.00%      |       42.40%        |      56.84%       |        46.70%         |
| +DDSC (ours)             |     48.17%      |       46.10%        |      58.19%       |        46.10%         |
| Cai XJTLU (Baseline)     |     48.91%      |       46.70%        |      62.12%       |        46.70%         |
| +DDSC (ours)             |     53.70%      |       51.68%        |      64.25%       |        51.68%         |
| Han SJTUTHU (Baseline)   |     54.35%      |       52.70%        |      61.82%       |        52.70%         |
| +DDSC (ours)             |     57.86%      |       56.42%        |      63.03%       |        56.42%         |

5.  实际意义：为低资源、跨设备音频分类提供了一种有效的即插即用训练策略，能与数据增强、特征对齐等方法互补，提升模型泛化能力，具有实际应用价值。
6.  主要局限性：计算领域不变性信号需要每个样本的设备标签，限制了其在完全无监督或设备信息缺失场景下的应用；其动态权重的融合调度函数（如余弦衰减）的超参数需要调优。

---

