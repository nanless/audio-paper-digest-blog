---
title: "What Do Deepfake Speech Detectors Actually Hear?"
date: 2026-06-10
draft: false
tags: []
categories: [论文速递]
description: "What Do Deepfake Speech Detectors Actually Hear?"
hiddenInHomeList: true
---

# 📄 What Do Deepfake Speech Detectors Actually Hear?

**7.6/10**

✅ **7.6/10** | 前25% | [arxiv](https://arxiv.org/abs/2606.10912)


### 🔗 开源详情

- 代码：https://github.com/Security-FIT/IG_for_SSL_detectors
- 模型权重：论文中未提及具体的模型权重链接（论文仅提及使用了预训练的WavLM Base+模型，但未提供其权重存储库的直接链接）。
- 数据集：ASVspoof 5 (论文中提及，但未提供具体获取链接；这是一个公开的学术基准数据集，可通过其官方渠道获取)。
- Demo：论文中未提及。
- 复现材料：论文提供了详细的训练配置（优化器、学习率、数据增强策略等），并在其GitHub仓库中包含了实施细节。未单独提供检查点链接。
- 论文中引用的开源项目：
    - WavLM (Base+)：论文中提及的预训练模型。论文中未提供权重链接。
    - Captum：用于实现集成梯度方法的库。链接：https://captum.ai/
    - AASIST：论文中分析的一种检测器架构。论文引用 [jung22aasist] 和 [borodin24_asvspoof]。
    - Context-Aware MHFA (CA-MHFA)：论文中分析的一种检测器架构。论文引用 [BUT198050] 和 [rohdin24_asvspoof]。
    - Sensitive Layer Selection (SLS)：论文中分析的一种检测器架构。论文引用 [sls]。
    - RawBoost：一种数据增强方法 (LnL-ISD)。论文中提及但未提供链接。
    - Wav2Vec 2.0：提及的预训练模型。论文中未提供权重链接。
    - ASVspoof 5：提及的评估数据集。论文中未提供具体获取链接。
    - YourTTS：提及的语音合成模型 (论文中提及为攻击A28)。论文中未提供链接。

### 📷 论文图片

![图1](https://arxiv.org/html/2606.10912v1/x1.png)


---

[← 返回 2026-06-10 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-06-10/)
