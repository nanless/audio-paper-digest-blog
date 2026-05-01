---
title: "ICASSP 2026 - 音频分类 #零样本学习 论文列表"
date: 2026-04-29
draft: false
tags: ["音频分类 #零样本学习"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音频分类 #零样本学习 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音频分类 #零样本学习

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Semantic-Guided Pseudo-Feature Attention Network for Audio-V](/audio-paper-digest-blog/posts/2026-04-29-semantic-guided-pseudo-feature-attention-network) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Semantic-Guided Pseudo-Feature Attention Network for Audio-Visual Zero-Shot Learning](/audio-paper-digest-blog/posts/2026-04-29-semantic-guided-pseudo-feature-attention-network)

✅ **7.0/10** | 前25% | #音频分类 #零样本学习 | #多模态模型 #对比学习 | #音频分类 #零样本学习

👥 **作者与机构**

- 第一作者：Siteng Ma（苏州大学）
- 通讯作者：Wenrui Li（哈尔滨工业大学）
- 作者列表：Siteng Ma（苏州大学）、Wenrui Li（哈尔滨工业大学）、Haocheng Tang（北京大学）、Yeyu Chai（哈尔滨工业大学）、Jisheng Chu（哈尔滨工业大学）、Xingtao Wang（哈尔滨工业大学）

💡 **毒舌点评**

本文的亮点在于将自适应模态加权、语义引导的变分生成与语义对齐的对比学习巧妙融合，形成了一个逻辑自洽的统一框架来解决GZSL中的核心矛盾，并在两个基准数据集上取得了SOTA。然而，其短板在于对SVG模块中具体网络结构的描述较为简略，且未提供任何开源代码或详细的超参数搜索过程，使得完全复现该工作的细节变得困难。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用了ActivityNet, VGGSound, UCF等公开基准数据集，但论文中未提供具体获取方式。
- Demo：未提及。
- 复现材料：论文中提及了部分超参数（损失函数权重λ1-λ5），但缺乏训练细节（如学习率、batch size、优化器、训练轮数）、模型具体配置（如编码器/解码器结构、隐藏维度）以及预训练骨干网络信息。
- 论文中引用的开源项目：论文引用了多个相关工作，但未明确说明其SGPAN实现依赖了哪些具体的开源代码库或工具。
- 总结：论文中未提及开源计划。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

这篇论文旨在解决音频-视觉广义零样本学习（GZSL）中因模态竞争和类间分布重叠导致的对可见类过度偏置问题。核心方法是提出一个名为SGPAN的多模态框架，它集成了三个关键组件：1）自适应模态重加权（AMR），动态调整音频和视觉分支的损失权重以平衡学习；2）语义引导变分生成（SVG），利用文本语义条件化的VAE生成伪特征，以扩大类内覆盖并缓解类别混淆；3）语义对齐对比损失（SACL），在投影空间中对齐跨模态特征并扩大类间距。与已有方法相比，新在将特征生成、动态模态平衡与对比学习在同一个端到端框架内协同优化。实验表明，SGPAN在UCF-GZSL和VGGSound-GZSL数据集上的调和平均精度（HM）上取得了当时最优的结果。该工作的实际意义在于为开放世界下的多模态视频理解提供了一个更鲁棒的零样本识别方案。主要局限性包括模型性能对语义标签的质量以及batch统计量的依赖。

---

