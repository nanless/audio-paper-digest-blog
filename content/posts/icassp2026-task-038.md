---
title: "ICASSP 2026 - 水下声学目标识别 论文列表"
date: 2026-04-29
draft: false
tags: ["水下声学目标识别"]
categories: [icassp-2026]
description: "共 2 篇 ICASSP 2026 水下声学目标识别 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 水下声学目标识别

共 **2** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [From Human Speech to Ocean Signals: Transferring Speech Larg](/audio-paper-digest-blog/posts/2026-04-29-from-human-speech-to-ocean-signals-transferring) | 7.0分 | 前25% |
| 🥈 | [Adaptive Task-Incremental Learning For Underwater Acoustic R](/audio-paper-digest-blog/posts/2026-04-29-adaptive-task-incremental-learning-for-underwater) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [From Human Speech to Ocean Signals: Transferring Speech Large Models for Underwater Acoustic Target Recognition](/audio-paper-digest-blog/posts/2026-04-29-from-human-speech-to-ocean-signals-transferring)

✅ **7.0/10** | 前25% | #水下声学目标识别 | #迁移学习 | #语音大模型 #跨域泛化

👥 **作者与机构**

- 第一作者：Mengcheng Huang（哈尔滨工程大学计算机科学与技术学院）
- 通讯作者：Chen Xu*（哈尔滨工程大学计算机科学与技术学院，邮箱：chen.xu@hrbeu.edu.cn）
- 作者列表：Mengcheng Huang（哈尔滨工程大学计算机科学与技术学院）、Xue Zhou（哈尔滨工程大学计算机科学与技术学院）、Chen Xu*（哈尔滨工程大学计算机科学与技术学院）、Dapeng Man（哈尔滨工程大学计算机科学与技术学院）

💡 **毒舌点评**

亮点：这篇论文做了一件很聪明的事——把在大规模人类语音上训练好的“耳朵”（SenseVoice）直接拿去听海洋，结果发现这个“耳朵”不仅能听懂人话，还能精准识别不同船只，甚至在陌生海域也能工作得很好（跨域96.67%），证明了SOTA语音模型作为通用声学编码器的巨大潜力。短板：然而，整个框架就是“预训练模型+平均池化+线性层”的简单拼接，缺乏针对水声特性（如多径传播、海洋噪声）的深入适配和机制解释；更关键的是，论文声称进行了消融实验来验证设计选择，却“因篇幅限制”只字未提，这让其最优性能的结论打了折扣，也影响了工作的透明度和严谨性。

📌 **核心摘要**

这篇论文针对水下声学目标识别（UATR）中数据稀缺和环境复杂的两大挑战，探索能否将大规模语音模型（SLM）的知识迁移过来。方法核心是提出UATR-SLM框架：复用语音特征提取流程，将训练好的语音大模型（具体使用SenseVoiceSmall）作为通用声学编码器，并替换其解码器为轻量级分类头（平均池化+线性层）进行微调。与传统方法从头训练或仅使用有限数据增强不同，该工作的创新在于首次系统性地利用SOTA语音基础模型来“跨界”解决水声问题。在DeepShip和ShipsEar两个基准测试中，UATR-SLM的F1分数分别达到99.32%和99.09%，超越了所有对比的ResNet等基线方法；在变长信号测试中表现出强鲁棒性（1秒音频准确率95.87%）；在零样本跨域评估中，从DeepShip迁移到ShipsEar，准确率高达96.67%，而ResNet基线仅53%-70%。这证明了SLM编码的声学表征具有强大的域不变性和可迁移性。其实际意义在于为资源受限的水声应用开辟了新范式，可能大幅降低对大量标注水声数据的依赖。主要局限在于框架设计简单直接，未深入探讨迁移成功的内部机理，且关键实验细节（如消融研究）缺失。

---

### 🥈 [Adaptive Task-Incremental Learning For Underwater Acoustic Recognition Based on Mixture-of-Experts Adapter](/audio-paper-digest-blog/posts/2026-04-29-adaptive-task-incremental-learning-for-underwater)

✅ **7.0/10** | 前25% | #水下声学目标识别 | #混合专家 | #增量学习 #适配器

👥 **作者与机构**

- 第一作者：Yang Zhang（国防科技大学计算机学院，与Changjian Wang并列第一作者）
- 通讯作者：Weiguo Chen（国防科技大学计算机学院）
- 作者列表：Yang Zhang†（国防科技大学计算机学院）、Changjian Wang†（国防科技大学计算机学院）、Weiguo Chen*（国防科技大学计算机学院）、Yuan Yuan（国防科技大学计算机学院）、Yingzhi Chen（国防科技大学计算机学院）

#

💡 **毒舌点评**

亮点： 将混合专家（MoE）与参数高效适配器结合，并创新性地引入基于重放数据分布的自适应任务识别模块（RA-TID），为无需显式任务标签的增量学习提供了优雅的解决方案，在多个水声数据集上取得了优异的遗忘控制性能。
短板： 论文声称“自适应”和“未知任务”感知，但所有实验都是在固定的、任务ID明确的序列上进行的，缺乏在真正动态、任务边界模糊或未知任务出现的真实场景下的验证；此外，实验部分完全缺乏对计算资源、训练时长的描述，且未开源，极大削弱了其说服力。

#

📌 **核心摘要**

这篇论文针对水下声学目标识别（UATR）中增量学习（IL）场景下，现有参数隔离方法依赖显式任务标签且忽略任务关联性的问题，提出了一种基于混合专家适配器（MoE-Adapter）的自适应任务增量学习框架。其核心方法是将预训练声学模型与稀疏门控的MoE-Adapter结合，通过轻量级路由器动态选择专家以实现跨任务知识共享；同时，设计了一个基于重放数据分布的任务识别模块（RA-TID），通过匹配输入特征与历史任务原型来自动推断任务身份，从而无需外部标签。实验在DeepShip等五个公开水声数据集上进行，结果显示，该方法在平均性能退化（PD）指标上达到了最低的1.93%，显著优于对比方法（如Meta-SC的2.86%），同时其可训练参数量仅为4.9M，相比全参数微调减少了90%以上。该工作的实际意义在于为水声系统在实际部署中应对新出现的目标类别提供了一种参数高效、自适应的增量学习方案。主要局限性在于缺乏对真实动态增量场景（如任务顺序未知、重叠）的验证，且复现信息严重不足。

#

---

