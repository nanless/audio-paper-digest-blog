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

✅ **7.5/10** | 前25% | #音频分离 | #流匹配 | #音视频 #时序对齐

👥 **作者与机构**

- 第一作者：Xize Cheng（论文注明“Equal Contribution”，并列第一作者），所属机构：浙江大学（Zhejiang University）
- 通讯作者：未说明（论文未明确指定通讯作者）
- 作者列表：Xize Cheng（浙江大学），Chenyuhao Wen（未说明，可能为独立作者），Tianhao Wang（未说明，可能为独立作者），Yongqi Wang（浙江大学），Zehan Wang（浙江大学），Rongjie Huang（浙江大学），Tao Jin（浙江大学），Zhou Zhao（浙江大学）。注：论文标题页显示“Independent Author 2”，但作者列表后标注“1 Zhejiang University”，机构归属略有模糊，以作者列表为准。

💡 **毒舌点评**

亮点是成功地将流匹配生成范式引入视频引导的声音分离任务，并通过简单的时序拼接策略（而非复杂的交叉注意力）有效捕获了帧级音视频对齐，这在处理同质干扰场景时显示出优势。短板在于生成式分离的固有效率问题（即使是25步推理也显著慢于掩膜方法）以及新基准VGGSound-Hard的数据量较小（118个样本），其统计显著性和普适性有待更广泛验证。

🔗 **开源详情**

- 代码：论文承诺“All code, pretrained models, and related resources will be publicly released upon paper acceptance”，但未在文中提供具体链接。论文中未提及代码链接。
- 模型权重：论文承诺将公开预训练模型，但当前未提供下载方式。
- 数据集：VGGSound-Hard 基准是论文的贡献，论文描述了其构建方法，并暗示将公开。原始训练集为MUSIC和VGGSound（公开数据集）。
- Demo：论文提到“More results and audio examples are available at: https://AlignSep.github.io”，提供了一个项目主页链接，可能包含演示。
- 复现材料：提供了详细的超参数设置（附录表4、表5）、MOS评估标准（附录表6）、VAE架构细节等，复现所需信息非常充分。
- 论文中引用的开源项目：
  - 音频VAE：来自论文 (Liu et al., 2023a)。
  - 时序视觉编码器（CAVP）：来自论文 (Luo et al., 2023)。
  - 声码器：BigVGAN (Lee et al., 2022)。
  - 其他基线模型：CLIPSep (Dong et al., 2022), i-Query (Chen et al., 2023), OmniSep (Cheng et al., 2024), Davis (Huang et al., 2024)。

📌 **核心摘要**

1.  要解决的问题：视频查询声音分离（VQSS）任务中，现有方法在面对同质干扰（如多个相同类别的声源）和重叠音轨时，因缺乏时序建模和弱音视频对齐能力，容易产生频谱空洞、不完全分离和时序错位等问题。
2.  方法核心：提出AlignSep，一个基于条件流匹配的生成式VQSS框架。其核心是设计一个时序对齐的向量场估计器，通过时序拼接策略融合音频和视频特征，并采用无分类器引导来平衡生成质量与多样性。
3.  与已有方法相比新在哪里：是首个将流匹配用于VQSS的生成式模型，克服了传统掩膜方法在重叠信号上的缺陷。相比基于语义的方法，它显式地建模了帧级时序对应关系，能更好地区分屏幕内外相同类别的声源。
4.  主要实验结果：在MUSIC-Clean和VGGSound-Clean基准上，AlignSep在语义一致性（SA-V, SA-A）和时序对齐（TA-V）指标上均达到最优。特别是在更具挑战性的VGGSound-Hard基准上，AlignSep的TA-V达到95.76%，远超最强基线OmniSep的76.27%。MOS主观评分也全面领先。

主要实验结果表格（摘自论文Table 1和Table 2）：

| 方法 | VGGSound-Clean (SA-A) | VGGSound-Clean (SA-V) | VGGSound-Clean (TA-V) | VGGSound-Hard (TA-V) |
| :--- | :---: | :---: | :---: | :---: |
| CLIPSep | 66.74 | 24.21 | 79.17 | 85.59 |
| i-Query | 68.14 | 26.93 | 80.78 | 79.52 |
| OmniSep | 70.83 | 27.57 | 81.25 | 76.27 |
| AlignSep (ours) | 73.38 | 27.89 | 96.88 | 95.76 |

| 方法 | VGGSound-Clean (MOS: AVC) | VGGSound-Clean (MOS: OA) | VGGSound-Hard (MOS: AVC) | VGGSound-Hard (MOS: OA) |
| :--- | :---: | :---: | :---: | :---: |
| CLIPSep | 3.31 | 3.85 | 4.36 | 4.14 |
| OmniSep | 3.69 | 3.62 | 4.29 | 4.07 |
| AlignSep | 4.53 | 4.31 | 4.64 | 4.43 |

![论文中的实验结果图](icassp-img://DVDkFcxU1D/2.png)
上图（图3）展示了在VGGSound-Hard基准上，AlignSep的时序对齐性能随输入视频帧率（FPS）提升而显著改善，验证了其利用细粒度时序信息的能力。

5.  实际意义：为复杂真实场景（如同类声源重叠）中的音视频内容编辑、增强和分析提供了更鲁棒的技术基础，并推动了VQSS任务评估标准的完善。
6.  主要局限性：生成式方法的推理速度较慢（25步约2.17 FPS），实时性受限；构建的VGGSound-Hard基准规模较小（118样本），可能影响评估结论的普适性；模型对高质量视频时序编码器（如CAVP）的依赖较强。

---

