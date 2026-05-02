---
title: "ICLR 2026 - 语音克隆 论文列表"
date: 2026-05-02
draft: false
tags: ["语音克隆"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音克隆 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音克隆

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [MambaVoiceCloning: Efficient and Expressive Text-to-Speech v](/audio-paper-digest-blog/posts/2026-05-02-mambavoicecloning-efficient-and-expressive-text) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [MambaVoiceCloning: Efficient and Expressive Text-to-Speech via State-Space Modeling and Diffusion Control](/audio-paper-digest-blog/posts/2026-05-02-mambavoicecloning-efficient-and-expressive-text)

✅ **7.5/10** | 前25% | #语音克隆 | #状态空间模型 | #语音合成 #语音大模型

👥 **作者与机构**

- 第一作者：Sahil Kumar（Yeshiva University, Department of Mathematics）
- 通讯作者：Youshan Zhang（Chuzhou University, School of Artificial Intelligence）
- 作者列表：Sahil Kumar（Yeshiva University, Department of Mathematics）、Namrataben Patel（Yeshiva University, Department of Mathematics）、Honggang Wang（Yeshiva University, Department of Computer Science & Engineering）、Youshan Zhang（Chuzhou University, School of Artificial Intelligence）

💡 **毒舌点评**

亮点： 架构设计全面且理论动机清晰，通过引入门控双向融合与AdaLN调制，在完全移除推理时注意力的同时，有效提升了长文本的韵律稳定性和跨语言泛化能力，是Mamba在TTS领域一次扎实的工程化探索。
短板： 尽管声称改进，但核心性能增益（MOS +0.07， RTF -0.0005）绝对值很小，被扩散解码器主导的延迟瓶颈严重掩盖了SSM-only编码器的理论优势，实际部署价值提升有限。

🔗 **开源详情**

- 代码： 提供了GitHub仓库链接（https://github.com/sahilkumar15/MVC）。
- 模型权重： 论文未提及是否公开预训练模型权重。
- 数据集： 使用的LJSpeech, LibriTTS, VCTK, CSS10, Gutenberg均为公开或可公开获取的数据集，但论文未提供具体获取链接。
- Demo： 论文中未提及在线演示链接。
- 复现材料： 论文提供了极其详细的复现信息，包括：完整的训练算法（Algorithm 1）、所有优化器超参数（学习率、批大小、warmup步数等）、模型所有层的具体配置（维度、层数、核大小）、详细的消融实验设置（表14， 附录B.6）、扩散步数消融（表13）、以及SSM超参数敏感性分析（表19-21）。附录中对每个组件和实验设置都有详尽说明。
- 依赖的开源项目： 论文代码基于并比较了多个开源项目，包括：StyleTTS2（���解码器骨架）、VITS、JETS、HiFi-GAN/iSTFTNet（声码器）、phonemizer（文本音素化）、Mamba（核心SSM实现）。

📌 **核心摘要**

1.  问题： 传统基于Transformer的TTS条件建模路径存在二次复杂度与内存问题，现有Mamba混合架构在推理时仍保留注意力或循环层，阻碍了流式合成的稳定性和效率。
2.  方法核心： 提出MVC，一个完全在推理时采用状态空间模型（SSM）的条件建模栈。核心组件包括：门控双向Mamba文本编码器、受轻量级对齐教师监督的时序双向Mamba、以及带有AdaLN调制的表达性Mamba。该设计旨在实现线性时间复杂度的条件处理。
3.  创新点： 与现有Mamba-TTS混合系统不同，MVC在文本、节奏和韵律的所有条件路径中完全移除了推理时的注意力与循环层，仅保留一个训练时使用的轻量级注意力对齐器。它用门控双向融合替代了简单的拼接，并结合了AdaLN。
4.  主要实验结果： 在严格匹配的解码器/声码器设置下（固定StyleTTS2扩散骨架），MVC在多个数据集上取得了稳定但幅度不大的提升。在LibriTTS未见说话人上，MOS-N达到4.22（StyleTTS2为4.15）；在LJSpeech上，RTF为0.0169（StyleTTS2为0.0174），PESQ为3.85（StyleTTS2为3.79）。在长文本和跨语言（CSS10）任务上也表现出稳健性。
5.  实际意义： 验证了在TTS系统中实现完全SSM-only推理路径的可行性，为需要低内存占用、高吞吐量和稳定长文本合成的边缘部署提供了新的架构选择。
6.  主要局限性： 性能改进幅度微小；扩散解码器仍是延迟的主要来源；模型仅在英语数据上训练，对精细情感控制支持有限。

---

