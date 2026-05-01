---
title: "ICASSP 2026 - 脑机接口 论文列表"
date: 2026-04-29
draft: false
tags: ["脑机接口"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 脑机接口 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 脑机接口

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [SAASDNet: An EEG-Based Streaming Auditory Attention Switch D](/audio-paper-digest-blog/posts/2026-04-29-saasdnet-an-eeg-based-streaming-auditory) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [SAASDNet: An EEG-Based Streaming Auditory Attention Switch Decoding Network for Self-Initiated Attention Switching in Mixed Speech](/audio-paper-digest-blog/posts/2026-04-29-saasdnet-an-eeg-based-streaming-auditory)

🔥 **8.0/10** | 前25% | #脑机接口 | #端到端 | #流式处理 #数据集

👥 **作者与机构**

- 第一作者：Yuting Ding（南方科技大学电子与电气工程系）
- 通讯作者：Fei Chen（南方科技大学电子与电气工程系）
- 作者列表：Yuting Ding（南方科技大学电子与电气工程系），Siyu Yu（南方科技大学电子与电气工程系），Ximin Chen（南方科技大学电子与电气工程系），Xuefei Wang（南方科技大学电子与电气工程系），Yueting Ban（南方科技大学电子与电气工程系），Fei Chen（南方科技大学电子与电气工程系）

#

💡 **毒舌点评**

亮点：论文抓住了一个非常实际且尚未被充分建模的痛点——在无提示线索、无空间分离的混合语音中进行自发起的注意力切换解码，其构建的MS-AASD数据集和提出的流式解码框架（SAASDNet）为这个更具生态效度的场景提供了首个系统性基准。短板：SAASDNet的架构（多尺度卷积+Transformer+门控循环）在脑电信号建模中已属常见组合，其核心创新点“稳定性感知门控”依赖的“置信度”和“波动性”指标设计相对启发式，缺乏更深入的理论或神经机制支撑，模型整体的“新颖性”相较于其“工程整合性”稍弱。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开的模型权重。
- 数据集：公开。MS-AASD数据集可通过Zenodo链接（https://doi.org/10.5281/zenodo.17149387）获取。
- Demo：未提及在线演示。
- 复现材料：论文提供了详尽的训练细节（三阶段协议、优化器、学习率、批大小、TBPTT参数、损失函数公式等）和评估设置，为复现提供了良好的文本基础。
- 论文中引用的开源项目：
    1.  wav2vec 2.0：用于语音特征提取。
    2.  AISHELL：作为语音材料来源。
    3.  E-Prime 3.0：用于实验刺激控制。
    4.  AdamW：优化器。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  问题：现有的EEG听觉注意力切换解码（AASD）范式大多依赖外部提示线索（如蜂鸣声）和空间化音频，无法捕捉自然状态下由听者自发发起的注意力切换，且可能引入非听觉伪迹。
2.  方法核心：提出一个新的混合语音AASD数据集（MS-AASD）和一个端到端的流式解码网络SAASDNet。SAASDNet包含三个核心组件：多频带多分辨率聚合EEG编码器（MMAEnc）、简单的语音编码器，以及流式稳定性感知门控（StreamSAG）单元。
3.  创新点：1）新范式与新数据集：首次构建支持自发起切换、无空间线索的混合语音EEG数据集MS-AASD。2）针对性架构设计：MMAEnc通过多尺度时域卷积和自适应频带聚合来应对EEG的非平稳性；StreamSAG单元利用说话人分类的置信度和短期波动性作为稳定性分数，自适应地加权历史信息，避免显式的切换点检测。
4.  主要实验结果：在MS-AASD数据集上，使用wav2vec 2.0特征和1秒决策窗口时，SAASDNet的流式解码准确率达到83.6%，非流式准确率为79.9%。相比多种先进基线（DARNet, ListenNet等）和其自身的非流式版本（AASDNet）均有显著提升。消融实验证明了StreamSAG单元（特别是其中的置信度和波动性成分）、多分辨率卷积（GMR）和自适应频带聚合（MBA）的贡献。关键对比数据如下：

| 模型 | 决策窗口长度 | | | | | |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| | 0.5 s | | 1 s | | 2 s | |
| | Mel | W2V | Mel | W2V | Mel | W2V |
| DARNet | 70.3 | 74.1 | 71.5 | 76.8 | 72.0 | 77.9 |
| ListenNet | 71.4 | 74.0 | 71.8 | 76.4 | 72.7 | 76.9 |
| ResCNN | 71.8 | 76.2 | 72.1 | 77.2 | 73.7 | 78.0 |
| TransCNN | 72.3 | 77.5 | 73.8 | 78.4 | 74.4 | 79.7 |
| AASDNet (ours) | 72.9 | 78.4 | 74.3 | 79.9 | 76.7 | 81.1 |
| SAASDNet (ours) | 75.8 | 81.5 | 78.2 | 83.6 | 80.1 | 84.5 |

5.  实际意义：这项工作为开发更自然、更鲁棒的下一代神经调控助听器提供了关键的数据基础和算法参考，展示了在复杂真实场景中利用EEG解码动态注意力的可行性。
6.  主要局限性：数据集规模较小（13名被试），且均为母语中文，模型的泛化能力有待验证。模型虽然有效，但其组件的神经科学可解释性可以进一步深化。

#

---

