---
title: "ICLR 2026 - 音频修复 论文列表"
date: 2026-05-03
draft: false
tags: ["音频修复"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频修复 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频修复

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Token-Based Audio Inpainting via Discrete Diffusion](/audio-paper-digest-blog/posts/2026-05-03-token-based-audio-inpainting-via-discrete) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Token-Based Audio Inpainting via Discrete Diffusion](/audio-paper-digest-blog/posts/2026-05-03-token-based-audio-inpainting-via-discrete)

✅ **7.5/10** | 前25% | #音频修复 | #离散扩散 | #预训练 #音乐处理

👥 **作者与机构**

- 第一作者：Tali Dror（Ben-Gurion University of the Negev，电气与计算机工程学院）、Iftach Shoham（Ben-Gurion University of the Negev，计算机与信息科学学院，数据科学研究中心）
- 通讯作者：Eliya Nachmani（Ben-Gurion University of the Negev，电气与计算机工程学院）
- 作者列表：Tali Dror（Ben-Gurion University of the Negev，电气与计算机工程学院）、Iftach Shoham（Ben-Gurion University of the Negev，计算机与信息科学学院，数据科学研究中心）、Moshe Buchris（Ben-Gurion University of the Negev，电气与计算机工程学院）、Oren Gal（University of Haifa）、Haim Permuter（Ben-Gurion University of the Negev，电气与计算机工程学院）、Gilad Katz（Ben-Gurion University of the Negev，计算机与信息科学学院，数据科学研究中心）、Eliya Nachmani（Ben-Gurion University of the Negev，电气与计算机工程学院）

💡 **毒舌点评**

这篇论文为音频修复这个“老”问题提供了“新”解法，巧妙地将离散扩散与预训练音频tokenizer结合，在长缺失段修复上展现了不错的潜力，且实验对比和消融做得非常扎实。然而，其性能上界似乎被WavTokenizer这类离散编解码器的质量所束缚，这或许暗示着“基于token”的范式在追求极致音频保真度时面临的共同天花板。

🔗 **开源详情**

- **代码**：论文中提供了代码仓库链接：`https://github.com/iftachShoham/AIDD`。
- **模型权重**：论文中未提及是否公开预训练模型权重。
- **数据集**：使用了公开的数据集MusicNet和MAESTRO，并说明了遵循各自的标准划分。未提供额外数据。
- **Demo**：论文中未提及在线演示（Demo）链接。
- **复现材料**：论文在附录（Supplementary Material）中提供了详尽的复现说明，包括关键超参数表（Table 8）、训练环境（单卡A6000 GPU）和训练时长。
- **论文中引用的开源项目**：
    1.  **WavTokenizer**（Ji et al., 2024）：用于音频分词与解码。
    2.  **Diffusion Transformer (DiT)**（Peebles & Xie, 2023）：作为扩散模型的架构基础。
    3.  **离散扩散建模框架**（Lou et al., 2024）：提供了DWDSE损失等核心理论。
    4.  **UniCodec**（Jiang et al., 2025）：作为替代tokenizer进行对比实验。
    5.  **旋转位置编码 (RoPE)**（Su et al., 2024）。

📌 **核心摘要**

1.  **问题**：音频修复旨在恢复音频信号中缺失或损坏的片段，特别是在缺失区域较大时，现有方法（如连续扩散模型）性能会下降，难以保持语义连贯性和时间平滑性。
2.  **核心方法**：提出AIDD，首个将离散扩散模型应用于token化音乐表示的音频修复框架。它首先使用预训练的WavTokenizer将音频压缩为离散token序列，然后在离散空间中应用基于Transformer的扩散模型进行修复。
3.  **创新性**：方法的新颖之处在于：1）首次在离散token空间执行音频修复的扩散过程；2）提出基于跨度的掩蔽策略，模拟从局部到全局的结构化损坏；3）引入基于导数的正则化损失，约束预测token序列的时间平滑性。
4.  **主要结果**：在MusicNet和MAESTRO数据集上，对于150ms至750ms的缺失段，AIDD在FAD、LSD、ODG等客观指标和MOS主观评分上均优于或匹配多个强基线。例如，在MusicNet上300ms缺失段，AIDD的FAD比CQT-Diff+低约25%（3.549 vs. 4.652）；在MAESTRO上375ms缺失段，AIDD的ODG得分为-2.303，优于所有基线。消融实验证实了所提损失和策略的有效性。
5.  **实际意义**：为音乐录音修复、数据丢失填补等场景提供了新方案，并证明了离散扩散模型在音频序列建模上的可行性，为token-based生成模型开辟了新方向。
6.  **主要局限性**：修复效果受限于底层tokenizer（WavTokenizer）的质量和带宽（24kHz）；存在训练与推理时掩蔽顺序不匹配的问题；与基于波形或频谱图的方法进行跨域比较存在偏差。

---

