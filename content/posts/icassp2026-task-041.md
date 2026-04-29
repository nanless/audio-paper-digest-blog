---
title: "ICASSP 2026 - 神经解码 论文列表"
date: 2026-04-29
draft: false
tags: ["神经解码"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 神经解码 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 神经解码

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Condition-Invariant fMRI decoding of speech intelligibility ](/audio-paper-digest-blog/posts/2026-04-29-condition-invariant-fmri-decoding-of-speech) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Condition-Invariant fMRI decoding of speech intelligibility with deep state space model](/audio-paper-digest-blog/posts/2026-04-29-condition-invariant-fmri-decoding-of-speech)

✅ **7.0/10** | 前25% | #神经解码 | #状态空间模型 | #语音可懂度解码 #跨条件迁移

👥 **作者与机构**

- 第一作者：论文中提到Ching-Chih Sung, Shuntaro Suzuki, Francis Pingfan Chien贡献相等，未明确第一作者。
- 通讯作者：论文中未明确标注通讯作者。
- 作者列表：Ching-Chih Sung (Academia Sinica, Taiwan; Graduate Institute of Communication Engineering, National Taiwan University, Taiwan), Shuntaro Suzuki (Keio University, Japan), Francis Pingfan Chien (Academia Sinica, Taiwan; Taiwan International Graduate Program in Interdisciplinary Neuroscience, National Taiwan University, Taiwan), Komei Sugiura (Keio University, Japan), Yu Tsao (Academia Sinica, Taiwan)。

💡 **毒舌点评**

亮点在于首次尝试在嘈杂和增强语音等多种声学条件下解码大脑对语音可懂度的神经表征，并验证了其“条件不变”性，这比仅在干净语音上做解码更有科学意义。短板是fMRI数据量（25名被试）在深度学习时代略显单薄，且论文未开源代码和数据，极大限制了该方法的验证与推广。

📌 **核心摘要**

本论文旨在解决一个关键问题：大脑在不同声学环境（如噪声、不同语音增强算法）下，是否使用一套“条件不变”的神经编码来表征语音的可懂度？为解决此问题，作者提出了一种基于双向深度状态空间模型（Deep SSM）的新架构，用于从fMRI体素时序信号中解码可懂度。与传统MVPA+SVM或Transformer方法相比，新方法在多个脑区（特别是颞叶、额叶和顶叶）的解码准确率上持续优于基线，首次实现了跨声学条件的解码。主要结果表明：1) 该模型在三种条件下（嘈杂、DNN增强、经典增强）的12个脑区中均表现出竞争力或最优的解码性能（Table 1），例如在嘈杂条件下右侧PreCG达到73.00%；2) 从嘈杂条件训练的模型可以成功迁移到两种增强条件（Table 2），表明存在条件不变的神经码；3) 消融实验证实双向扫描和S5层对性能有贡献（Table 3）。这项研究为理解大脑抽象语言表征提供了新工具，并启示了利用神经信号指导语音增强的潜力。主要局限在于fMRI数据规模有限，且未涉及实时或高时间分辨率神经信号的整合。

---

