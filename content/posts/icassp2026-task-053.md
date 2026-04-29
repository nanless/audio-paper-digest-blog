---
title: "ICASSP 2026 - 视频设备识别 论文列表"
date: 2026-04-29
draft: false
tags: ["视频设备识别"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 视频设备识别 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 视频设备识别

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [MFF-RVRDI: Multimodal Fusion Framework for Robust Video Reco](/audio-paper-digest-blog/posts/2026-04-29-mff-rvrdi-multimodal-fusion-framework-for-robust) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [MFF-RVRDI: Multimodal Fusion Framework for Robust Video Recording Device Identification](/audio-paper-digest-blog/posts/2026-04-29-mff-rvrdi-multimodal-fusion-framework-for-robust)

✅ **7.5/10** | 前25% | #视频设备识别 | #多模态融合 | #注意力机制 #鲁棒性

👥 **作者与机构**

- 第一作者：Wei Li（杭州电子科技大学计算机科学与技术学院）
- 通讯作者：Xingfa Shen（杭州电子科技大学计算机科学与技术学院，shenxf@hdu.edu.cn）
- 作者列表：Wei Li（杭州电子科技大学计算机科学与技术学院）、Yu Cao（杭州电子科技大学计算机科学与技术学院）、Xingfa Shen（杭州电子科技大学计算机科学与技术学院）

💡 **毒舌点评**

亮点：论文敏锐地抓住了“真实噪声下视频设备识别”这一实际痛点，并创新性地设计了SD-BCA模块来解决音视频对齐与融合的核心难题，实验数据也确实显示了其在低信噪比下的强大鲁棒性。短板：作为一篇顶会论文，在模型轻量化和效率上着墨不多，且完全缺少代码、模型和训练细节的公开，这对于一个强调“实用”和“部署”的框架来说，极大地削弱了其可验证性和后续影响力。

📌 **核心摘要**

1.  要解决什么问题：现有视频录制设备识别方法大多仅依赖视觉信息，在真实世界存在的压缩、降噪等处理导致信噪比（SNR）降低时，性能会显著下降。
2.  方法核心是什么：提出一个多模态融合框架MFF-RVRDI，同时利用视频和音频信息进行设备识别。其核心是一个名为“同步-可变形双向跨模态注意力”（SD-BCA）的模块，用于对齐音视频时间偏移并实现双向细粒度交互；以及一个“集成指纹增强模块”（IFEM），用于在压缩场景下增强设备特有残差。
3.  与已有方法相比新在哪里：新在多模态融合视角（引入音频作为补充）和专门设计的跨模态交互模块（SD-BCA）。相比以往仅优化视觉特征或进行简单拼接融合的方法，SD-BCA显式建模了模态间的时间对齐和空间选择性注意力。
4.  主要实验结果如何：
    - 在标准数据集（QUFVD， Daxing）上，MFF-RVRDI达到了99.9%的Top-1准确率。
    - 在模拟真实噪声的增强数据集（QUFVD-NA， Daxing-NA）上，MFF-RVRDI的准确率分别为88.6%和89.3%，比最强的单模态基线（图像仅）高出超过12个百分点，比之前的SOTA方法（如CNN+Fusion）高出超过24个百分点。
    - 消融实验证明，SD-BCA中的时间同步、可变形采样和双向注意力设计分别带来了性能提升，完整模块比单向基线提升12-15个百分点。
5.  实际意义是什么：为低质量、高噪声环境下的视频来源设备识别提供了一种更鲁棒的解决方案，提升了数字取证在现实复杂场景中的可靠性和实用性。
6.  主要局限性是什么：论文未讨论模型的计算复杂度和推理速度；实验在构建的噪声增强数据集上进行，其与真实世界复杂降质的匹配度有待验证；未提供开源代码和模型，可复现性不足。

---

