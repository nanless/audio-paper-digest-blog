---
title: "ICLR 2026 - 语音增强 论文列表"
date: 2026-05-03
draft: false
tags: ["语音增强"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 语音增强 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音增强

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Are Deep Speech Denoising Models Robust to Adversarial Noise](/audio-paper-digest-blog/posts/2026-05-03-are-deep-speech-denoising-models-robust-to) | 7.5分 | 前25% |
| 🥈 | [SpeechOp: Inference-Time Task Composition for Generative Spe](/audio-paper-digest-blog/posts/2026-05-03-speechop-inference-time-task-composition-for) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Are Deep Speech Denoising Models Robust to Adversarial Noise?](/audio-paper-digest-blog/posts/2026-05-03-are-deep-speech-denoising-models-robust-to)

✅ **7.5/10** | 前25% | #语音增强 | #对抗样本 | #鲁棒性 #模型评估

👥 **作者与机构**

- 第一作者：Will Schwarzer（University of Massachusetts）
- 通讯作者：Will Schwarzer（wschwarzer@umass.edu）
- 作者列表：Will Schwarzer（University of Massachusetts）、Philip S. Thomas（University of Massachusetts）、Andrea Fanelli（Dolby Laboratories）、Xiaoyu Liu（Meta）

💡 **毒舌点评**

亮点：论文对四个主流开源语音去噪模型进行了系统性的“黑客攻击”审计，实验设计严谨（覆盖多种声学环境，并引入真实人类专家进行主观评估），成功论证了即使是旨在消除噪声的模型，也可能被精心隐藏的噪声“毒害”而输出胡言乱语，这对安全关键应用敲响了警钟。
短板：尽管攻击在客观指标上成功，但让模型输出“特定目标语句”的攻击（目标攻击）在人类听感上效果甚微，这使得论文描述的威胁（如恶意篡改语音内容）在实际中大打折扣；同时，所有有效攻击都依赖于攻击者对模型梯度的“白盒”访问，这在一定程度上限制了威胁的普遍性。

📌 **核心摘要**

这篇论文系统地研究了深度语音去噪（DNS）模型对不可感知对抗性扰动的脆弱性。核心问题是：旨在净化语音的DNS模型，其自身是否容易受到对抗性噪声的攻击而失效？作者采用基于心理声学掩蔽阈值的投影梯度下降（PGD）方法生成不可感知的扰动，并以短时客观可懂度（STOI）作为损失函数，使模型输出尽可能偏离干净语音。与此前研究相比，本文将攻击扩展到了更多先进的开源模型（Demucs, Full-SubNet+, FRCRN, MP-SENet），并在更广泛的条件（从极干净到嘈杂、有无混响、模拟空中传输）下进行了验证。主要实验结果表明：四个模型在所有测试环境下均可被成功攻击，使输出可懂度大幅降低（STOI增益从正变为显著负值），甚至变成无法理解的胡言乱语；人类专家转录研究证实了攻击后输出的不可懂性，而ABX测试表明攻击噪声总体上难以察觉。研究揭示了开源DNS模型在助听器、空管通信等安全关键领域部署的重大风险。其局限性包括：目标攻击的实际效果有限，且最有效的攻击依赖于模型梯度信息。

---

### 🥈 [SpeechOp: Inference-Time Task Composition for Generative Speech Processing](/audio-paper-digest-blog/posts/2026-05-03-speechop-inference-time-task-composition-for)

✅ **7.0/10** | 前25% | #语音增强 | #扩散模型 | #语音合成 #语音分离

👥 **作者与机构**

- 第一作者：Justin Lovelace（Cornell University）
- 通讯作者：未明确说明（从作者列表和邮箱推测，Adobe Research的Rithesh Kumar, Jiaqi Su, Ke Chen, Zeyu Jin可能为共同通讯作者，但论文未明确指定）
- 作者列表：Justin Lovelace（Cornell University，实习于Adobe Research）、Rithesh Kumar（Adobe Research）、Jiaqi Su（Adobe Research）、Ke Chen（Adobe Research）、Kilian Q Weinberger（Cornell University）、Zeyu Jin（Adobe Research）

💡 **毒舌点评**

亮点在于它巧妙地将“知识富足”的TTS模型作为“导师”，通过一个优雅的推理时数学框架（TC-CFG）来指导“知识贫乏”的S2S任务，实现了灵活的任务组合和内容保真度的大幅提升，思路值得借鉴。短板是，当它试图成为“全能选手”时，在需要精细信号重建的说话人分离任务上，其生成模型的固有特性导致客观指标（如SI-SDRi）反而不敌专注于判别式优化的专用模型，暴露了“广度”与“深度”之间的权衡困境。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及是否公开预训练或微调后的模型权重。
- 数据集：使用了公开数据集（MLS, LibriTTS, LibriTTS-R等），但未提供新的数据集。
- Demo：论文中未提及在线演示。
- 复现材料：提供了非常详细的复现材料，包括完整的模型架构参数（表8）、两阶段训练配置（学习率、优化器、批量大小、步数）、采样配置、多任务训练权重和提示概率（表9），以及源音频条件化消融（附录F）和任务组合推导（附录G）。
- 论文中引用的开源项目：DAC音频编码器、ByT5文本编码器、Whisper/WhisperX ASR模型。

📌 **核心摘要**

1. 要解决什么问题：文本到语音（TTS）系统利用海量数据表现优异，但语音到语音（S2S）任务（如增强、分离）受限于配对数据稀缺，导致生成式方法容易失真并损害说话人身份与内容保真度。
2. 方法核心是什么：提出SpeechOp，一个多任务潜扩散模型。它通过微调一个预训练的TTS模型来学习执行多种S2S任务。核心创新是推理时任务组合（ITC） 流水线和任务组合分类器自由引导（TC-CFG） 策略。TC-CFG通过分解贝叶斯公式，利用TTS模型作为判别器来引导内容生成，而不是简单平均得分函数。
3. 与已有方法相比新在哪里：新在将TTS预训练模型系统性地适配为多任务处理器，并在推理时通过TC-CFG实现灵活的任务组合（如“转录引导增强”、“个性化增强”）。相比直接平均得分，TC-CFG能更好地结合增强任务的声学先验和TTS的内容判别能力，避免先验污染。
4. 主要实验结果如何：
    - TTS：SpeechOp在经过多任务微调后，零样本TTS的MOS各项指标（质量、自然度、语音相似度、风格相似度）均优于其TTS基线，且与更大模型竞争力相当。
    - 语音增强：使用隐式任务组合（ITC，即Whisper转录引导），WER从无转录的8.1%大幅降至2.9%，相比强基线HiFi-GAN-2（5.4%）也有显著提升。主观MOS与HiFi-GAN-2相当。
    - 说话人分离：在WSJ0-2Mix数据集上，使用金标准转录时WER为5.5%（无转录11.1%），但SI-SDRi仅为0.53，远低于SepFormer（11.86）。
    - 任务组合消融：TC-CFG在所有指标（PESQ， MCD， SpBS， WER）上均优于得分平均（TC-Avg）方法。
    ![SpeechOp的多任务训练与推理时组合能力概述](icassp-img://eLsEjjFODE/0.png)
    图1展示了SpeechOp的多任务训练范式（顶部）、推理时任务组合能力（中部）以及隐式任务组合流水线（底部）。它支持TTS、增强、分离等多种核心任务，并能在推理时通过组合这些能力创建新任务，例如使用转录引导增强。

5. 实际意义是什么：该工作弥合了数据丰富的TTS与数据稀缺的S2S任务之间的鸿沟，提供了一个统一、灵活的语音处理框架。它展示了如何通过迁移学习和推理时组合，利用现有大模型的“知识”来提升数据受限任务的性能，并为构建可组合的语音处理系统提供了新思路。
6. 主要局限性是什么：尽管在感知质量（MOS）上表现良好，但SpeechOp在需要精确信号重建的说话人分离任务上，客观信号保真度指标（如SI-SDRi）显著落后于专用判别模型。此外，当前评估主要基于完全重叠的合成数据，对真实对话场景的适用性有待验证。

---

