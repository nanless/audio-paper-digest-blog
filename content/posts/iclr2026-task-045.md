---
title: "ICLR 2026 - 音频分离 论文列表"
date: 2026-05-04
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
| 🥇 | [AlignSep: Temporally-Aligned Video-Queried Sound Separation ](/audio-paper-digest-blog/posts/2026-05-04-alignsep-temporally-aligned-video-queried-sound) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [AlignSep: Temporally-Aligned Video-Queried Sound Separation with Flow Matching](/audio-paper-digest-blog/posts/2026-05-04-alignsep-temporally-aligned-video-queried-sound)

✅ **7.5/10** | 前25% | #音频分离 | #流匹配 | #音视频 #基准测试

👥 **作者与机构**

- 第一作者：未说明（论文声明Xize Cheng, Chenyuhao Wen, Tianhao Wang为共同第一作者“Equal Contribution”）
- 通讯作者：未说明
- 作者列表：Xize Cheng (浙江大学1), Chenyuhao Wen (浙江大学1), Tianhao Wang (独立作者2), Yongqi Wang (浙江大学1), Zehan Wang (浙江大学1), Rongjie Huang (浙江大学1), Tao Jin (浙江大学1), Zhou Zhao (浙江大学1)。（注：1指浙江大学，2指独立作者，具体实验室或部门未在文中提供）

💡 **毒舌点评**

亮点：这是首个将流匹配范式成功引入视频引导声音分离的工作，并敏锐地指出了其与传统文本生成任务在“多条件生成”上的本质差异，为后续研究者提供了清晰的思路和新的挑战性基准。
短板：模型架构（拼接+FFN Transformer）略显“直给”，缺乏更精巧的跨模态交互设计；虽然实验充分，但“流匹配”相对于“扩散模型”在本任务中的具体优势论证（如表7所示）并不构成压倒性差距，说服力有提升空间。

🔗 **开源详情**

- 代码：论文中提及“More results and audio examples are available at: https://AlignSep.github.io”，并承诺“All code, pretrained models, and related resources will be publicly released upon paper acceptance”。但当前文本中未提供具体的代码仓库链接（如GitHub URL）。
- 模型权重：同上，承诺将开源预训练模型。
- 数据集：VGGSound-Hard基准已描述构建过程，但未明确说明是否提供现成下载链接，可能需根据描述自行构建。
- Demo：提供了项目主页链接，可能包含在线演示示例。
- 复现材料：附录提供了非常详细的超参数表（表4，表5）、MOS评估详细协议（表7）、消融实验设置等，复现信息充分。
- 引用的开源项目：论文中提到的依赖开源工具/模型包括：CAVP视觉编码器、音频VAE（来自Make-An-Audio）、BigVGAN声码器、CLAP编码器、ImageBind模型、CLIPSep的合成流程。

📌 **核心摘要**

本文针对视频查询声音分离（VQSS）任务中存在的同类声源干扰和重叠音轨难以分离的问题，提出了AlignSep——一个基于条件流匹配（Flow Matching）的生成式分离模型。与以往基于掩码的判别式方法不同，AlignSep将分离过程建模为从混合音频分布到干净音频分布的生成式流动，其核心创新在于设计了时序对齐的向量场估计器，通过特征拼接和前馈Transformer来显式地保持跨模态的时序一致性，并分析了流匹配在多条件生成任务中的独特挑战。此外，论文构建了新的挑战性基准VGGSound-Hard，专门测试模型在同类干扰和强时间线索依赖下的性能。实验表明，AlignSep在MUSIC-Clean、VGGSound-Clean以及新提出的VGGSound-Hard基准上，在语义一致性（如ImageBind、CLAP分数）和时序对齐精度（Acc）等指标上均显著优于现有基线，并取得了更好的感知质量（MOS）。该工作的实际意义在于推动了生成式模型在复杂视听场景分离中的应用，并提供了更贴近现实的评估标准；其局限性在于模型架构相对简单，且在极致推理效率上可能不如轻量级判别模型。

---

