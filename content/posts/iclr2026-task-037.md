---
title: "ICLR 2026 - 音频分离 论文列表"
date: 2026-05-03
draft: false
tags: ["音频分离"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频分离 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频分离

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [AlignSep: Temporally-Aligned Video-Queried Sound Separation ](/audio-paper-digest-blog/posts/2026-05-03-alignsep-temporally-aligned-video-queried-sound) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [AlignSep: Temporally-Aligned Video-Queried Sound Separation with Flow Matching](/audio-paper-digest-blog/posts/2026-05-03-alignsep-temporally-aligned-video-queried-sound)

✅ **7.5/10** | 前25% | #音频分离 | #流匹配 | #音视频 #基准测试

👥 **作者与机构**

- 第一作者：未明确说明（论文标题页显示Xize Cheng, Chenyuhao Wen, Tianhao Wang并列为第一作者，并标注“Equal Contribution”）
- 通讯作者：未明确说明
- 作者列表：Xize Cheng（浙江大学）、Chenyuhao Wen（浙江大学）、Tianhao Wang（独立作者）、Yongqi Wang（未说明机构）、Zehan Wang（未说明机构）、Rongjie Huang（未说明机构）、Tao Jin（未说明机构）、Zhou Zhao（未说明机构）

💡 **毒舌点评**

论文将流匹配这一生成范式首次引入视频查询声音分离任务，并针对其多条件特性提出了时间对齐的向量场估计器，有效缓解了传统掩膜方法中的谱洞和时间错位问题。然而，其核心创新——拼接融合策略——在技术上相对直白，且论文声称的“首个生成式VQSS模型”的定位可能忽略了同期工作（如Davis-flow）的类似探索，实验部分虽全面，但新提出的VGGSound-Hard基准集规模（118个样本）稍显局限，可能影响结论的普适性。

🔗 **开源详情**

- **代码**：论文在结论和复现声明中承诺将公开代码，但**论文中未提供代码仓库链接**。
- **模型权重**：未提及是否公开��训练模型权重。
- **数据集**：VGGSound-Hard基准将随论文发布，但**论文中未说明具体获取方式**。训练所用数据集（MUSIC, VGGSound）为公开数据集。
- **Demo**：论文提供了项目主页链接 https://AlignSep.github.io ，可能包含演示示例，但**论文中未明确说明提供在线Demo**。
- **复现材料**：提供了详细的实现细节（附录A，包括VAE和向量场估计器的超参数表格）、MOS评估协议（附录B）和主要实验代码的开源承诺，有利于复现。
- **依赖的开源项目/模型**：论文中明确引用或使用的开源项目包括：
    - **视觉编码器**：CAVP (来自 Luo et al., 2023)
    - **声码器**：BigVGAN (Lee et al., 2022)
    - **文本/音频嵌入**：CLAP, ImageBind (用于评估指标)
    - **流匹配/生成模型**：基础框架参考 Lipman et al., 2022 (CFM)，并对比了 Rectified Flow (Lipman et al., 2022; Yuan et al., 2024)

📌 **核心摘要**

本文针对视频查询声音分离（VQSS）任务中存在的同质干扰和重叠音轨难以分离的问题，提出了AlignSep——首个基于流匹配（Flow Matching）的生成式VQSS模型。其核心方法是构建一个条件流匹配框架，通过设计一个时间拼接融合的向量场估计器，并利用带有时间同步预训练的视觉编码器（CAVP），显式建模音视频的时间对齐关系，从而引导模型从混合音频的潜在表示中逐步去噪，生成与查询视频时间对齐的目标音频。与先前基于语义或掩膜的方法相比，AlignSep在生成过程中能更好地利用细粒度时间线索并避免谱洞伪影。为评估此类困难场景，作者构建了VGGSound-Hard基准，包含118个具有同质干扰且强依赖时间线索的样本。实验表明，在MUSIC-Clean、VGGSound-Clean和VGGSound-Hard三个基准上，AlignSep在语义一致性（SA-A, SA-V）和时间对齐（TA-V）指标上均达到最优。例如，在最具挑战性的VGGSound-Hard上，AlignSep的TA-V达到95.76%，远超基线OmniSep的76.27%；在主观MOS评估中，其总体得分（OA）也持续领先。该工作的实际意义在于为复杂音频场景的精准分离提供了新思路，但其局限性在于新基准规模较小，且模型效率（每秒处理帧数）随去噪步数增加而显著下降，25步设置为质量与速度的最佳折中。

---

