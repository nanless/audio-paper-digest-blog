---
title: "Convex Low-resource Accent-Robust Language Detection in Speech Recognition"
date: 2026-05-25
draft: false
tags: []
categories: [论文速递]
description: "Convex Low-resource Accent-Robust Language Detection in Speech Recognition"
hiddenInHomeList: true
---

# 📄 Convex Low-resource Accent-Robust Language Detection in Speech Recognition

✅ **6.8/10** | 前50% | [arxiv](https://arxiv.org/abs/2605.23235v1)


### 🔗 开源详情

- 代码：https://github.com/pilancilab/CLD
- 模型权重：论文中未提及
- 数据集：论文中未提及具体数据集下载链接或开源协议。论文提到使用的数据集包括：Mozilla Common Voice (v23) 数据集、新加坡国家语音语料库 (National Speech Corpus, NCS)（通过新加坡资讯通信媒体发展局获取）、Lahaja 数据集（12.5小时印地语语音，来自132名说话人，覆盖83个印度地区）。但未提供这些数据集的具体下载链接或开源协议信息。
- Demo：论文中未提及
- 复现材料：论文提供了 pip 可安装的 JAX 包 https://pypi.org/project/jaxcld/；附录 G 提供了详细的超参数配置（CLD 参数：rank=20, β=10⁻³, ρ=10⁻⁴, γ-ratio=1, ADMM iterations=6, PCG iterations=32, neuron count=10/32）和硬件设置（四块 NVIDIA A100-SXM4 40GB GPU）
- 论文中引用的开源项目：
  - JAX：https://github.com/google/jax （Bradbury et al., 2021）
  - Whisper：https://github.com/openai/whisper （Radford et al., 2023）
  - MMS (Massively Multilingual Speech)：论文未提供具体链接，仅引用 Pratap et al., 2024
  - MUSAN：论文未提供具体链接，仅引用 Snyder et al., 2015
  - CRONOS：论文未提供具体链接，仅引用 Feng et al., 2024

### 📷 论文图片

![图1](https://arxiv.org/html/2605.23235v1/fig/tikz_figure1.png)

![图2](https://arxiv.org/html/2605.23235v1/x1.png)

![图3](https://arxiv.org/html/2605.23235v1/fig/cvx_cm.png)

![图4](https://arxiv.org/html/2605.23235v1/x3.png)

![图5](https://arxiv.org/html/2605.23235v1/fig/wsp-sft_cm.png)


---

[← 返回 2026-05-25 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-05-25/)
