---
title: "ICASSP 2026 - 语音转换 #语音增强 论文列表"
date: 2026-04-29
draft: false
tags: ["语音转换 #语音增强"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 语音转换 #语音增强 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音转换 #语音增强

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [VChangeCodec: An Ultra Low-Complexity Neural Speech Codec wi](/audio-paper-digest-blog/posts/2026-04-29-vchangecodec-an-ultra-low-complexity-neural) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [VChangeCodec: An Ultra Low-Complexity Neural Speech Codec with Built-In Voice Changer for Customized Real-Time Communication](/audio-paper-digest-blog/posts/2026-04-29-vchangecodec-an-ultra-low-complexity-neural)

🔥 **8.0/10** | 前25% | #语音转换 #语音增强 | #端到端 | #语音转换 #语音增强

👥 **作者与机构**

- 第一作者：Xusheng Yang (⋆†) (北京大学深圳研究生院，超高清沉浸式媒体技术广东省重点实验室；ADSPLAB，电子与计算机工程学院)
- 通讯作者：Yuexian Zou (⋆†B) (北京大学深圳研究生院，超高清沉浸式媒体技术广东省重点实验室；ADSPLAB，电子与计算机工程学院)
- 作者列表：
  - Xusheng Yang (北京大学深圳研究生院，超高清沉浸式媒体技术广东省重点实验室；ADSPLAB，电子与计算机工程学院)
  - Wei Xiao (⋄) (腾讯天籁音频实验室)
  - Bang Yang (‡) (鹏城实验室)
  - Shidong Shang (⋄) (腾讯天籁音频实验室)
  - Yuexian Zou (⋆†B) (北京大学深圳研究生院，超高清沉浸式媒体技术广东省重点实验室；ADSPLAB，电子与计算机工程学院)

💡 **毒舌点评**

本文提出的“编解码器内建变声器”架构确实是个聪明的集成创新，将语音转换从额外的级联模块变为编解码管道的一部分，从而将端到端延迟砍到了40ms，这对实时通信场景是实质性的提升。不过，论文在“超低复杂度”上做得更极致，但在“音质竞争力”和“变声效果竞争力”上更像是“足够好”而非“令人惊叹”，POLQA分数虽然不错但并未拉开与DAC等模型的差距，语音转换的自然度（N-MOS）也逊色于QuickVC。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开预训练模型权重。
- 数据集：论文中提到的自定义变声数据集（基于VCTK, AISHELL-3生成）未说明是否公开及获取方式。
- Demo：论文提供了一个演示页面链接：`https://anonymous666-speech.github.io/Demo-VChangeCodec/`。
- 复现材料：论文给出了相当详细的架构描述、训练数据配方（数据集名称、比例）、损失函数公式、优化器、学习率、批大小等训练细节。消融实验结果也有详细表格。但未提供具体的代码配置文件、检查点或更详尽的附录。
- 引用的开源项目：论文中提到了使用并依赖以下开源工具/模型：
    - LibriTTS, DNS Challenge: 用于编解码器预训练的数据集。
    - VCTK, AISHELL-3: 用于构建变声训练数据集的基础数据集。
    - OpenSmile2: 用于提取目标说话人元数据（eGeMAPSv02特征集）。
    - RVC (Retrieval-based Voice Conversion): 用于生成近乎平行的源-目标语音对。
    - Whisper: 用于评估转换后语音的可懂度（WER/CER）。
    - Resemblyzer: 用于评估说话人相似度。
    - DNSMOS: 用于评估语音自然度。
    - Lyra2 (官方C实现): 用于基准测试实时因子。

📌 **核心摘要**

1.  要解决什么问题？ 现有的实时通信（RTC）中实现个性化音色定制（变声）面临高延迟问题，因为通常需要将流式语音转换（VC）系统与神经语音编解码器（NSC）级联，总算法延迟远超RTC要求的几十毫秒。
2.  方法核心是什么？ 提出VChangeCodec，一种集成了内置变声器的超低复杂度神经语音编解码器。它采用全因果卷积网络将语音压缩为紧凑令牌，并使用标量量化（SQ）降低复杂度。变声功能通过一个轻量级的因果投影网络（Converter）在令牌域直接实现，该网络接收目标说话人嵌入来调整源语音令牌，从而在编解码器内部完成音色转换。
3.  与已有方法相比新在哪里？
    *   范式转换：首次将VC模块深度集成到NSC的令牌域，打破了传统的“VC–编解码器”级联流水线模式。
    *   延迟极低：通过因果设计，将变声集成到编解码流程中，实现了仅40ms的算法延迟（总延迟约140ms），满足ITU-T G.114标准。
    *   参数极度压缩：相比SOTA编解码器DAC，模型参数减少了96.3%（原始模式<1M参数）。
4.  主要实验结果如何？
    *   编解码性能：在相似或更低比特率下（6/9.5 kbps），POLQA、ViSQOL、STOI等客观指标优于OPUS、EVS、Lyra2和EnCodec，接近或略低于DAC（见表1）。主观MOS评分与DAC（8kbps）和EnCodec（12kbps）具有竞争力（见表2）。
    *   变声性能：与级联多种VC模型的方案相比，在说话人相似度（Resemblyzer）上表现最佳（88.07%），MCD和可懂度也较好（见表3）。主观评估中，其说话人相似度（S-MOS）高于QuickVC，但自然度（N-MOS）稍低。
    *   效率与延迟：在M1 Pro芯片上的实时因子（RTF）优于Lyra2，证明了其高效率（见表4）。
5.  实际意义是什么？ 为实时通信场景提供了一个高效、灵活且集成的解决方案，允许用户在发送端无缝切换原始语音和定制音色语音，同时满足低延迟、低算力的部署要求。平台集中管理VC模块的设计也有助于保护语音版权。
6.  主要局限性是什么？ 编解码的音质（POLQA等）虽好但并未超越DAC；变声的自然度（N-MOS）非最优；论文未提供代码和预训练模型，限制了直接复现和快速验证。

---

