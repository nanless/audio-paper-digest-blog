---
title: "ICASSP 2026 - 语音驱动动作生成 论文列表"
date: 2026-04-29
draft: false
tags: ["语音驱动动作生成"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 语音驱动动作生成 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音驱动动作生成

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Style-Disentangled Diffusion for Controllable and Identity-G](/audio-paper-digest-blog/posts/2026-04-29-style-disentangled-diffusion-for-controllable-and) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Style-Disentangled Diffusion for Controllable and Identity-Generalized Speech-Driven Body Motion Generation](/audio-paper-digest-blog/posts/2026-04-29-style-disentangled-diffusion-for-controllable-and)

✅ **7.0/10** | 前25% | #语音驱动动作生成 | #扩散模型 | #对比学习 #解耦学习

👥 **作者与机构**

- 第一作者：Zixiang Lu（西安电子科技大学计算机科学与技术学院）
- 通讯作者：Zhitong He， Qiguang Miao（西安电子科技大学计算机科学与技术学院）
- 作者列表：Zixiang Lu（西安电子科技大学计算机科学与技术学院）、Zhitong He（西安电子科技大学计算机科学与技术学院）、Zixuan Wang（未说明）、Yunan Li（未说明）、Qiguang Miao（西安电子科技大学计算机科学与技术学院）

💡 **毒舌点评**

亮点：风格解耦模块的设计很巧妙，通过对比学习拉近同一说话人风格码的距离，并用梯度反转从内容特征中剥离身份信息，理论上提升了可控性和可解释性。短板：论文声称的“Identity-Generalized”能力仅在单一数据集（BEATX）的同一说话人测试集上进行定量评估，缺乏跨数据集或对未知说话人的严格泛化验证，说服力稍显不足。

📌 **核心摘要**

本文针对现有语音驱动身体动作生成方法难以生成匹配抽象个人风格、解耦不充分、可解释性差的问题，提出了名为DSfusion的可控与身份泛化动作生成框架。其核心是通过一个风格解耦模块，从参考动作序列中学习并分离出个人风格特征，同时从语音中提取内容特征，并利用对比学习、梯度反转等技术增强分离效果。与已有方法相比，该模型首次在多身份（Multi-ID）数据集上进行训练，并引入了一个运动精炼模块，以防止解耦后的风格信号在融合过程中被平均化动作所覆盖。在BEATX数据集上的实验表明，该方法在Fréchet Gesture Distance（FGD，5.144 vs 次优5.423）和运动多样性（Diversity，13.912 vs 次优13.057）指标上均优于现有SOTA方法（见表1）。该研究的意义在于提升了语音驱动动画的个性化控制能力和动作的多样性与真实感。主要局限性在于扩散模型带来的推理延迟，以及泛化能力验证的场景有限。

### 表1：在BEATX测试集上的定量结果对比
| 方法 | FGD ↓ | BC ↑ | Diversity ↑ |
| :--- | :--- | :--- | :--- |
| Trimodal | 19.759 | 6.442 | 8.894 |
| DisCo | 21.170 | 6.571 | 10.378 |
| CaMN | 8.752 | 6.731 | 9.279 |
| DiffStyleGesture | 10.137 | 6.891 | 11.075 |
| TalkShow | 7.313 | 6.783 | 12.859 |
| EMAGE | 5.423 | 6.794 | 13.057 |
| SynTalker | 6.413 | 7.971 | 12.721 |
| Ours | 5.144 | 7.029 | 13.912 |
(FGD ×10⁻¹， BC ×10⁻¹)

---

