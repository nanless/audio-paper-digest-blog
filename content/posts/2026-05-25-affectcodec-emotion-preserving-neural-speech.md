---
title: "AffectCodec: Emotion-Preserving Neural Speech Codec with Block-Diagonal Residual FSQ"
date: 2026-05-25
draft: false
tags: []
categories: [论文速递]
description: "AffectCodec: Emotion-Preserving Neural Speech Codec with Block-Diagonal Residual FSQ"
hiddenInHomeList: true
---

# 📄 AffectCodec: Emotion-Preserving Neural Speech Codec with Block-Diagonal Residual FSQ

✅ **7.2/10** | 前50% | [arxiv](https://arxiv.org/abs/2605.23373v1)


### 🔗 开源详情

- 代码：论文中未提及代码链接（仅提到"We will release the full training code upon acceptance"，无具体URL）
- 模型权重：论文中未提及
- 数据集：
  - LibriSpeech：公开可用，论文中未给出具体下载链接，仅标注引用[17]
  - IEMOCAP：需要USC许可协议，论文中未给出具体申请链接，仅标注引用[2]
  - CREMA-D：公开可用，论文中未给出具体下载链接，仅标注引用[4]
  - ESD：公开可用，论文中未给出具体下载链接，仅标注引用[30]
  - MSP-Podcast：用于V/A/D MSE评估，论文中未给出具体下载链接，仅标注引用[3]
- Demo：论文中未提及
- 复现材料：
  - 训练配置：附录F提供了详细超参数（学习率调度、批量大小、损失权重、硬件配置等）
  - 检查点：论文中未提及
  - 伪代码：附录A提供BD-RFSQ前向传播算法，附录E提供仿射归一化子程序
  - 计算资源：4×NVIDIA RTX 4090 24GB GPUs，约72小时
  - 承诺："We will release the full training code upon acceptance"
- 论文中引用的开源项目：
  - emotion2vec-large：ModelScope/FunASR（论文中提到"available from ModelScope/FunASR"，无具体URL）
  - HuBERT-Large：HuggingFace（论文中提到"available from HuggingFace"，无具体URL）
  - WavLM-Large：HuggingFace（论文中提到"available from HuggingFace"，无具体URL）
  - Wav2Vec 2.0-Large：HuggingFace（论文中提到"available from HuggingFace"，无具体URL）
  - Whisper-Large-v3：OpenAI（论文中提到"available from OpenAI"，无具体URL）
  - S3PRL/SUPERB：论文中未给出具体链接，仅标注引用[24]

### 📷 论文图片

![图1](https://arxiv.org/html/2605.23373v1/x1.png)

![图2](https://arxiv.org/html/2605.23373v1/x2.png)

![图3](https://arxiv.org/html/2605.23373v1/x3.png)


---

[← 返回 2026-05-25 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-05-25/)
