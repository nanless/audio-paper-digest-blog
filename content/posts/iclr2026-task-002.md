---
title: "ICLR 2026 - 听觉注意力解码 论文列表"
date: 2026-05-03
draft: false
tags: ["听觉注意力解码"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 听觉注意力解码 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 听觉注意力解码

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [MindMix: A Multimodal Foundation Model for Auditory Percepti](/audio-paper-digest-blog/posts/2026-05-03-mindmix-a-multimodal-foundation-model-for) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [MindMix: A Multimodal Foundation Model for Auditory Perception Decoding via Deep Neural-Acoustic Alignment](/audio-paper-digest-blog/posts/2026-05-03-mindmix-a-multimodal-foundation-model-for)

✅ **7.5/10** | 前25% | #听觉注意力解码 | #预训练 | #多模态模型 #自监督学习

👥 **作者与机构**

- 第一作者：Rui Liu（香港理工大学）
- 通讯作者：Jibin Wu（香港理工大学）、Kay Chen Tan（香港理工大学）
- 作者列表：Rui Liu（香港理工大学），Zhige Chen（香港理工大学），Shu Peng（香港理工大学），Wenlong You（香港理工大学），Zhi-An Huang（香港城市大学东莞校区），Jibin Wu（香港理工大学），Kay Chen Tan（香港理工大学）

💡 **毒舌点评**

本文将多模态对齐技术引入EEG听觉解码，提出了一个新颖的CALRA模块进行精细交互，实验结果在特定协议下极其亮眼。但核心性能（如99.82%的AAD准确率）在严格的跨试验评估下出现断崖式下跌，且模型总参数达97M，实际部署的复杂度和数据需求存疑。

🔗 **开源详情**

- 代码：提供代码仓库链接：`https://github.com/CookieMikeLiu/MindMix`
- 模型权重：论文中未提及是否公开预训练或微调后的模型权重。
- 数据集：论文中使用的数据集均为公开数据集，但未提供统一的下载脚本或处理好的数据。获取方式需参考各原始数据集出处。
- Demo：未提供在线演示。
- 复现材料：论文在附录中提供了详细的实现细节（A.3），包括优化器配置、学习率调度、批次大小、关键超参数（表A2）、负采样策略以及模型复杂度分析（表A3），这些信息对复现有重要帮助。
- 论文中引用的开源项目：使用了`Wav2Vec 2.0`作为音频编码器。依赖的框架包括PyTorch。

📌 **核心摘要**

这篇论文旨在解决从非侵入式EEG信号解码复杂听觉体验时，现有单模态基础模型因缺乏与听觉刺激的深度耦合而导致跨任务泛化能力不足的问题。其核心方法是提出一个多模态基础模型MindMix，采用两阶段训练：首先在3500多小时EEG数据上预训练一个高容量EEG编码器；其次在100多小时配对数据上，通过新颖的跨注意力低秩对齐模块学习神经-声学映射，并用对比学习优化整个框架。与已有方法相比，MindMix是首个专门设计用于学习细粒度、深度对齐的神经-声学表示的多模态基础模型。实验结果显示，MindMix在听觉注意力解码、听觉情感识别和跨模态检索等多个任务上显著超越现有基线，例如在KUL数据集上达到了99.82%的平衡准确率。这项工作为多模态大脑解码和听觉脑机接口的未来研究奠定了基础。主要局限性在于，其惊人的性能主要是在受控的、可能存在数据泄露风险的帧级评估协议下取得的；当采用更严格的跨试验评估协议时，性能会显著下降，且模型计算成本较高。

### 关键实验结果对比表
| 任务 | 数据集 | 方法 | 指标 | 结果 |
| :--- | :--- | :--- | :--- | :--- |
| 语音听觉注意力解码 (AAD) | KUL | DARNet (SOTA) | 平衡准确率 | 0.9481 ± 0.036 |
| | | MindMix (Ours) | 平衡准确率 | 0.9982 ± 0.008* |
| | DTU | AADNet | 平衡准确率 | 0.6875 ± 0.057 |
| | | MindMix (Ours) | 平衡准确率 | 0.9993 ± 0.009* |
| | ESAA | DARNet | 平衡准确率 | 0.9089 ± 0.054 |
| | | MindMix (Ours) | 平衡准确率 | 1.0000 ± 0.000* |
| 情感分析 | PME4 | MusicAAD | 平衡准确率 | 0.6142 ± 0.062 |
| | | MindMix (Ours) | 平衡准确率 | 0.7256 ± 0.123* |
| | HR-EEG4EMO | DARNet | 平衡准确率 | 0.8052 ± 0.081 |
| | | MindMix (Ours) | 平衡准确率 | 0.8878 ± 0.045* |
| 音乐检索 | MAD-EEG | AADNet | Duo准确率 | 0.8824 ± 0.071 |
| | | MindMix (Ours) | Duo准确率 | 0.9475 ± 0.025* |

注：标有表示基于配对t检验 (p-value correction, α = 0.05)，该方法显著优于比较方法。*

![MindMix 框架概览](icassp-img://1ifQzlETeG/0.png)
图1展示了MindMix的整体框架，包括从头训练的EEG编码器、预训练的音频编码器（Wav2Vec 2.0）以及用于跨模态对齐的核心CALRA模块。整个框架通过对比学习目标在大规模配对数据上进行预训练，学习统一的EEG-音频表示空间。

---

