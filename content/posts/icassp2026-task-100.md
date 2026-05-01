---
title: "ICASSP 2026 - 零样本关键词检测 论文列表"
date: 2026-04-29
draft: false
tags: ["零样本关键词检测"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 零样本关键词检测 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 零样本关键词检测

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Malefa: Multi-Granularity Learning and Effective False Alarm](/audio-paper-digest-blog/posts/2026-04-29-malefa-multi-granularity-learning-and-effective) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Malefa: Multi-Granularity Learning and Effective False Alarm Suppression for Zero-Shot Keyword Spotting](/audio-paper-digest-blog/posts/2026-04-29-malefa-multi-granularity-learning-and-effective)

✅ **7.5/10** | 前25% | #零样本关键词检测 | #对比学习 #多任务学习 | #对比学习 #多任务学习

👥 **作者与机构**

- 第一作者：Lo-Ya Li（台湾师范大学，标记为*）
- 通讯作者：未明确说明（根据贡献描述和标记，Berlin Chen（*）和Jeih-Weih Hung（†）可能为主要指导者）
- 作者列表：Lo-Ya Li（台湾师范大学），Tien-Hong Lo（台湾师范大学），Jeih-Weih Hung†（暨南国际大学），Shih-Chieh Huang¶（瑞昱半导体），Berlin Chen*（台湾师范大学）

#

💡 **毒舌点评**

这篇论文的亮点在于它没有盲目追求模型规模，而是用轻量级架构（0.7M参数）通过更精细的学习目标（音素级对齐+误报惩罚）在核心指标（特别是误报率）上实现了数量级的改进，这对实际部署极具吸引力。短板是其创新主要是现有技术（CTC、对比学习、注意力机制）的工程化组合，在模型架构原理上缺乏颠覆性，且实验仅限于特定的英文数据集，其泛化能力（如跨语言、复杂声学场景）有待进一步证明。

#

🔗 **开源详情**

- 代码：提供了GitHub仓库链接：https://github.com/Debbyyy10158/MALEFA。
- 模型权重：未提及是否公开预训练模型权重。
- 数据集：训练数据（LibriPhrase子集+MUSAN）和评估数据集均为公开数据集，论文中提供了引用。
- Demo：未提及在线演示。
- 复现材料：论文中给出了训练超参数（优化器Adam、学习率1e-3、批大小1000、训练50 epochs、UCL批大小M=5）、损失函数公式及权重（均等为1）、硬件环境（RTX 4090 GPU）。这些信息为复现提供了基础。
- 论文中引用的开源项目：
    1.  预训练音频编码器：Google Speech Embeddings [19]。
    2.  G2P转换器：g2pe [20]。
- 论文中未提及开源计划：关于模型权重、更详细的配置文件、以及除代码外的其他复现材料，论文中未明确说明开源计划。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1. 问题：现有零样本关键词检测（ZSKWS）方法依赖粗粒度的全局表示，难以区分发音相似的关键词（如“call mom”与“come on”），导致较高的误报率（FAR），同时模型复杂度高，不利于资源受限设备上的实时部署。
2. 方法核心：提出MALEFA框架，其核心是通过交叉注意力机制实现音频与音素序列的细粒度对齐，并采用多粒度对比学习目标（全局语句级UCL + 局部音素级PCL）来增强判别能力。同时，设计了一种显式的误报感知损失（LFA），直接优化模型的精确度以抑制假阳性。
3. 新在何处：区别于以往仅优化全局匹配的方法，MALEFA首次在ZSKWS中联合引入了音素级对比学习和精确的误报优化目标，实现了从全局语义到局部发音的多层次对齐与判别，是一种更精细化的建模范式。
4. 主要实验结果：在四个公开基准数据集（LibriPhrase Easy/Hard， Google Speech Commands， Qualcomm）上，MALEFA取得了90%的平均准确率（ACC4），并在AMI数据集上将误报率（FAR）大幅降低至0.007%（相比基线PhonMatchNet的17.879%）。模型仅有0.7M参数和93M FLOPs，满足轻量化要求。消融实验证明，UCL、PCL和LFA三个组件缺一不可，共同贡献了性能提升。
5. 实际意义：MALEFA为在智能手机、IoT设备等资源受限平台上实现低误报、高准确的个性化语音唤醒/命令检测提供了可行的技术方案，有助于提升语音助手的用户体验和可靠性。
6. 主要局限性：研究主要基于英文数据集，未验证跨语言性能；训练数据（LibriPhrase+MUSAN）与真实复杂声学环境（如多人会议、户外嘈杂）可能存在差距；模型在极端低信噪比或方言口音下的鲁棒性未充分评估。

---

