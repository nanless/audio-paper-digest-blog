---
title: "ICASSP 2026 - 语音增强 #对抗防御 论文列表"
date: 2026-04-29
draft: false
tags: ["语音增强 #对抗防御"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 语音增强 #对抗防御 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音增强 #对抗防御

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Adversarial Defense via Generative Speech Enhancement Module](/audio-paper-digest-blog/posts/2026-04-29-adversarial-defense-via-generative-speech) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Adversarial Defense via Generative Speech Enhancement Module](/audio-paper-digest-blog/posts/2026-04-29-adversarial-defense-via-generative-speech)

✅ **7.5/10** | 前25% | #语音增强 #对抗防御 | #语音增强 #数据增强 | #语音增强 #对抗防御

👥 **作者与机构**

- 第一作者：未说明
- 通讯作者：未说明
- 作者列表：Chi-Tao Chen（国立中央大学资讯工程学系），Chun-Shien Lu（中央研究院资讯科技研究所），Jia-Ching Wang（国立中央大学资讯工程学系）

💡 **毒舌点评**

本文巧妙地将对抗防御问题转化为语音增强任务，使用一个轻量级（2M参数）且高效的生成模型（MP-SENet）实现了在多个数据集和攻击类型下的出色防御效果，推理速度远超基于扩散模型的竞品。然而，其核心防御机制（高斯噪声注入+增强）在理论上可能不够“坚固”，面对精心设计的自适应攻击时（如论文表5），性能仍有显著下降，且在SC09这一基准上并未超越最强的对比方法AudioPure。

📌 **核心摘要**

本文旨在解决深度学习语音模型（如语音命令识别、说话人识别）易受对抗攻击威胁的安全问题。核心方法是将对抗防御重新定义为语音增强任务：在输入波形中先加入可控高斯噪声，再利用一个基于MP-SENet的轻量级生成模型对受污染的语音进行增强（净化），最后送入下游分类器。与已有的基于扩散模型（如AudioPure）或GAN（如DefenseGAN）的净化方法相比，本方法的核心优势在于效率和模型轻量化。主要实验结果（见下表）表明，该方法在VCTK（说话人识别）和QKWS（关键词检测）任务上，面对多种白盒（PGD）和黑盒（FakeBob）攻击时，取得了最优或次优的鲁棒准确率，尤其在长语音（VCTK）上优势明显。该框架仅需2M参数，推理速度快，实际意义在于为实时、资源受限场景下的语音系统提供了一种可行的对抗防御方案。主要局限性在于：防御性能对噪声注入的dBFS超参数敏感，且在特定数据集（SC09）上未达到绝对最优。

---

