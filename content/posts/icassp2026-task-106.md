---
title: "ICASSP 2026 - 音乐混合 论文列表"
date: 2026-04-29
draft: false
tags: ["音乐混合"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 音乐混合 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音乐混合

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Ailive Mixer: A Deep Learning Based Zero Latency Automatic M](/audio-paper-digest-blog/posts/2026-04-29-ailive-mixer-a-deep-learning-based-zero-latency) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Ailive Mixer: A Deep Learning Based Zero Latency Automatic Music Mixer for Live Music Performances](/audio-paper-digest-blog/posts/2026-04-29-ailive-mixer-a-deep-learning-based-zero-latency)

✅ **7.0/10** | 前25% | #音乐混合 | #深度学习 | #实时处理 #串音消除

👥 **作者与机构**

- 第一作者：Devansh Zurale（Shure Incorporated）
- 通讯作者：未说明
- 作者列表：Devansh Zurale（Shure Incorporated）、Iris Lorente（Shure Incorporated）、Michael Lester（Shure Incorporated）、Alex Mitchell（Shure Incorporated）

💡 **毒舌点评**

亮点：该工作首次将端到端深度学习应用于实时音乐混合，并通过“多速率处理”和“预测未来帧”的策略巧妙绕过了模型延迟问题，工程思路清晰。短板：尽管实验声称“零延迟”，但评估完全依赖主观听音测试且样本量小，缺乏如频谱图一致性、增益曲线平滑度等客观量化分析，使得“显著优于基线”的结论说服力打了折扣。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开模型权重。
- 数据集：训练数据基于公开的MedleyDB，但论文中模拟串音的具体脚本或工具未公开。评估使用的内部现场表演数据集未公开。
- Demo：提供了音频结果在线演示：https://dzurale.github.io/ailive_mixer_icassp2026/。
- 复现材料：给出了详细的架构描述、训练超参数（学习率、调度、epoch数）、损失函数选择（窗长、FFT大小）、数据增强方法（pyroomacoustics随机模拟）。这些信息对复现研究至关重要。
- 论文中引用的开源项目：
    - VGGish：音频嵌入模型 [12]。
    - pyroomacoustics：用于模拟房间声学和串音 [17]。
    - auraloss：用于计算多分辨率STFT损失的PyTorch库 [19]。
    - Web Audio Evaluation Tool：用于主观听音测试的框架 [21]。
- 总结：论文未提及开源计划，核心系统（ALM）的代码和模型未开源。复现工作主要依赖论文描述和上述开源工具的重新实现。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

这篇论文提出了一种名为AiLive Mixer（ALM）的深度学习系统，用于解决现场音乐表演中自动混音面临的两大核心挑战：乐器间的声学串音和严格的零延迟要求。其方法核心是采用多速率（Multi-Rate）处理架构，将需要大时域上下文的VGGish音频嵌入模块（975ms帧）与需要快速响应的特征提取（50ms帧）解耦，并引入零延迟训练策略（模型预测下一帧的增益参数）。与已有方法（如DMC）相比，ALM的创新在于增加了RMS条件化、用于学习通道间关系的Transformer编码器、用于学习时序上下文的GRU模块，并专门设计用于处理训练时的模拟串音数据。实验基于主观听音测试（15名参与者，8段现场录音），结果显示多速率模型ALM-MR在感知评分上显著优于单速率模型（ALM-SR）、改进版DMC（DMC-B-0L）、原版DMC（DMC-OG）以及原始混音（RAW），且能更稳定地避免增益突变和削波。该研究的实际意义在于为智能现场扩声、直播等应用提供了自动化混音的可行框架。主要局限性在于仅预测了声道增益这一单一混音参数，且验证集规模较小，缺乏客观评估指标。

---

