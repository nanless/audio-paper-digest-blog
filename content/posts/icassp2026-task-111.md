---
title: "ICASSP 2026 - 音乐转录 论文列表"
date: 2026-04-29
draft: false
tags: ["音乐转录"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音乐转录 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音乐转录

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [A Distribution Matching Approach to Neural Piano Transcripti](/audio-paper-digest-blog/posts/2026-04-29-a-distribution-matching-approach-to-neural-piano) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [A Distribution Matching Approach to Neural Piano Transcription with Optimal Transport](/audio-paper-digest-blog/posts/2026-04-29-a-distribution-matching-approach-to-neural-piano)

✅ **7.0/10** | 前25% | #音乐转录 | #最优传输 | #注意力机制 #循环神经网络

👥 **作者与机构**

- 第一作者：Weixing Wei（京都大学信息学研究生院）
- 通讯作者：未说明
- 作者列表：Weixing Wei（京都大学信息学研究生院）、Raynaldi Lalang（京都大学工程研究生院）、Dichucheng Li（独立研究者）、Kazuyoshi Yoshii（京都大学工程研究生院）

💡 **毒舌点评**

亮点是跳出了传统BCE损失“对齐即全对，错一位全错”的思维定式，用OT损失来容忍合理的时间偏差，理论上更优雅且实验效果显著。短板在于论文对OT损失计算复杂度的讨论几乎空白，且将钢琴转录中复杂的踏板问题简单归因于offset不准，未来提升路径仍需更扎实的论证。

🔗 **开源详情**

- 代码：论文在“Repo:”处提供了一个GitHub仓库链接（https://github.com/WX-Wei/AMT-optimal-transport），但论文正文中未描述该仓库的具体内容（如是否包含完整代码、模型权重、训练脚本等），因此其实际开放性和完整性未知。
- 模型权重：未提及。
- 数据集：MAESTRO为公开数据集，但论文中未说明如何获取或处理的具体细节。
- Demo：未提及。
- 复现材料：论文中提到了一些关键训练细节（数据集分割、CQT参数、优化器），但缺少batch size、具体epoch数、硬件信息等关键复现参数。
- 论文中引用的开源项目：提到了mir_eval库用于评估。

📌 **核心摘要**

1. 该论文要解决自动钢琴转录中传统帧级二分类交叉熵（BCE）损失对时间错位过于敏感、导致模型需过度拟合微小对齐误差的问题。
2. 核心方法是将钢琴转录形式化为最优传输（OT）问题，通过最小化预测音符分布到真实音符分布的运输成本来训练模型，从而自然地容忍合理的时间错位。
3. 与已有方法相比，新在：a) 将损失函数从BCE替换为OT，改变了优化目标；b) 提出了专门设计的SFT-CRNN模型，包含谐波感知注意力机制。
4. 主要实验结果：在MAESTRO数据集上，所提SFT-CRNN模型结合OT损失取得了音头F1分数98.36%的SOTA性能，相比使用BCE损失提升了0.75个百分点；在整体音符转录（���音头和音尾）上F1为90.78%。消融实验表明OT损失和模型中的LSTM、谐波注意力组件均带来显著性能提升。
5. 实际意义是提出了一种即插即用的、更符合音乐感知逻辑的OT损失函数，可替换BCE用于现有模型，并推动了钢琴转录性能的提升。
6. 主要局限性是当前模型未显式处理延音踏板，导致音尾（offset）转录性能（90.78% F1）尚未达到最佳，且OT损失的引入可能增加训练时的计算负担。

---

