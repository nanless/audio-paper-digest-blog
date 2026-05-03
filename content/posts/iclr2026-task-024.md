---
title: "ICLR 2026 - 语音增强 论文列表"
date: 2026-05-04
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
| 🥇 | [SpeechOp: Inference-Time Task Composition for Generative Spe](/audio-paper-digest-blog/posts/2026-05-04-speechop-inference-time-task-composition-for) | 8.5分 | 前25% |
| 🥈 | [Are Deep Speech Denoising Models Robust to Adversarial Noise](/audio-paper-digest-blog/posts/2026-05-04-are-deep-speech-denoising-models-robust-to) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [SpeechOp: Inference-Time Task Composition for Generative Speech Processing](/audio-paper-digest-blog/posts/2026-05-04-speechop-inference-time-task-composition-for)

🔥 **8.5/10** | 前25% | #语音增强 | #扩散模型 #多任务学习 | #扩散模型 #多任务学习

👥 **作者与机构**

- 第一作者：Justin Lovelace (Cornell University)
- 通讯作者：未说明
- 作者列表：
  - Justin Lovelace (Cornell University)
  - Rithesh Kumar (Adobe Research)
  - Jiaqi Su (Adobe Research)
  - Ke Chen (Adobe Research)
  - Kilian Q. Weinberger (Cornell University)
  - Zeyu Jin (Adobe Research)

💡 **毒舌点评**

亮点：成功地将数据丰富的TTS模型知识迁移至数据稀缺的语音增强/分离任务，并创新性地提出基于贝叶斯分解的TC-CFG进行推理时任务组合，避免了简单的分数平均导致的质量退化。
短板：在说话人分离任务上，其信号保真度指标（如SI-SDRi）显著低于专用分离模型（如SepFormer），反映了生成式方法在严格遵循混合信号一致性方面的固有挑战；同时，其核心组合能力高度依赖外部ASR模型（如Whisper）的转录质量。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及是否公开预训练模型权重。
- 数据集：训练和评估使用的数据集（MLS, LibriTTS, LibriTTS-R等）均为公开数据集，论文未提及提供处理后的数据集。
- Demo：提供了在线音频示例：https://justinlovelace.github.io/projects/speechop。
- 复现材料：附录中给出了非常详细的训练配置、模型架构参数、数据增强流程、采样配置和噪声调度细节，为复现提供了充分信息。
- 论文中引用的开源项目：
  - 模型：DiT (Peebles & Xie, 2023)， ByT5 (Xue et al., 2022)， DAC (Kumar et al., 2023)。
  - ASR：Whisper (Radford et al., 2023)， WhisperX (Bain et al., 2023)， HuBERT (Hsu et al., 2021)。
  - 基线模型：VoiceCraft (Peng et al., 2024)， DiTTo-TTS (Lee et al., 2024)， SepFormer (Subakan et al., 2021)， HiFi-GAN-2 (Su et al., 2021a)， SGMSE+ (Richter et al., 2023)等。

📌 **核心摘要**

1. 问题：文本到语音（TTS）能利用海量“野外”数据训练，而语音到语音（S2S）任务（如增强、分离）因需要配对数据而受限，导致生成式S2S方法容易扭曲内容和说话人身份。
2. 方法核心：提出SpeechOp，一个基于潜在扩散的多任务模型。它通过迁移学习，将预训练的TTS模型改造为通用语音处理器，并通过可学习的“任务嵌入”来切换任务。核心创新是提出任务组合分类器自由引导（TC-CFG）用于推理时组合不同能力。
3. 新在何处：与传统方法不同，SpeechOp通过迁移TTS预训练来解决S2S的数据瓶颈。TC-CFG利用贝叶斯分解，将TTS模型作为判别式指导（判断内容是否匹配转录）而非混合其生成先验，从而在组合任务（如增强+转录引导）时避免质量下降。此外，提出了隐式任务组合（ITC）流程，利用Whisper转录引导增强。
4. 主要结果：SpeechOp在多个任务上取得优异成绩。语音编辑在各项MOS指标上大幅超越VoiceCraft。语音增强中，ITC流程将词错误率（WER）从增强前的3.3%和无引导增强的8.1%降至2.9%，达到SOTA内容保真度。说话人分离在主观MOS上显著优于SepFormer基线。消融实验证明TTS预训练加速收敛4-8倍，且TC-CFG在组合任务时全面优于分数平均（TC-Avg）。

![SpeechOp系统概览图](icassp-img://eLsEjjFODE/0.png)
图1：展示了SpeechOp的多任务训练范式（上）、推理时任务组合能力（中）和隐式任务组合流程（下）。

![TTS预训练对收敛速度和性能的影响](icassp-img://eLsEjjFODE/1.png)
图2：TTS预训练使增强和分离任务的收敛速度分别快4倍和8倍，并提升了下游性能。

5. 实际意义：为语音处理提供了一个统一、灵活的框架，能通过推理时组合执行多种复杂操作（如个性化增强、文本引导分离），降低了开发和使用门槛。
6. 主要局限性：说话人分离任务的信号保真度客观指标仍低于专用判别式模型；任务组合流程的性能依赖于外部ASR模型的质量；当前评估主要针对完全重叠的合成混合语音。

---

### 🥈 [Are Deep Speech Denoising Models Robust to Adversarial Noise?](/audio-paper-digest-blog/posts/2026-05-04-are-deep-speech-denoising-models-robust-to)

🔥 **8.0/10** | 前25% | #语音增强 | #对抗样本 | #模型评估 #鲁棒性

👥 **作者与机构**

- 第一作者：Will Schwarzer (University of Massachusetts, Amherst)
- 通讯作者：Will Schwarzer (wschwarzer@umass.edu)
- 作者列表：Will Schwarzer (University of Massachusetts, Amherst)， Philip S. Thomas (University of Massachusetts, Amherst)， Andrea Fanelli (Dolby Laboratories)， Xiaoyu Liu (Meta，论文注释其工作在Dolby Laboratories完成)

💡 **毒舌点评**

这篇论文系统性地揭示了开源深度语音去噪（DNS）模型在面对精心设计的、心理声学掩蔽下的对抗噪声时，普遍存在严重的安全脆弱性，这一发现对于助听器、空管通信等安全关键应用场景具有直接的警醒意义。其亮点在于实验设计全面，结合了客观指标、主观听音测试和模拟过空气攻击，证据链扎实；短板在于攻击仍依赖白盒梯度访问，且通用扰动（UAP）效果不佳，离真正的“隐秘攻击”尚有距离。

🔗 **开源详情**

*   代码：提供公开代码仓库：`https://github.com/willschwarzer/adv-dns-public`。
*   模型权重：攻击代码依赖的原始DNS模型（Demucs, FSN+, FRCRN, MP-SENet）权重均为公开可用。论文未提供训练好的对抗攻击模型权重。
*   数据集：使用公开的ICASSP 2022 DNS Challenge 4数据集主赛道数据。
*   Demo：提供在线样本页面（`https://sites.google.com/view/adv-dns`）供试听。
*   复现材料：论文正文和附录提供了极其详细的实验设置、优化器参数、模型检查点版本、数据处理细节和超参数选择方法，复现指导充分。
*   引用的开源项目：列出了所有外部资产的来源、许可证和版本（见附录G表格），包括Whisper、DNS Challenge数据集、各DNS模型、NISQA、ViSQOL等。

📌 **核心摘要**

1.  问题：深度语音去噪（DNS）模型在安全关键应用（如助听器、紧急通信）中广泛使用，但其对抗鲁棒性未被充分研究。攻击者能否利用不可察觉的对抗噪声使这些模型输出无意义的内容？
2.  方法核心：提出了一种基于心理声学掩蔽（Auditory Masking）的攻击框架，利用短时傅里叶变换（STFT）域的掩蔽阈值作为投影算子，通过投影梯度下降（PGD）优化生成不可察觉的对抗扰动δ，以最大化模型输出与原始干净语音的短时客观可懂度（STOI）损失。
3.  新意：与先前工作相比，本研究使用了更严格的感知约束（包含时域前/后掩蔽和-12至-16 dB的偏移量），在更广泛的条件（从近乎干净到嘈杂混响，包括模拟过空气传播）下测试了更多（四个）SOTA开源DNS模型，并进行了包含音频专家的主观听转录和ABX测试。
4.  结果：所有四个模型（Demucs, Full-SubNet+, FRCRN, MP-SENet）均可被攻击至输出不可懂的“胡言乱语”，且在多种背景信噪比（SNR从-10dB到70dB）和混响条件下均成功。主观听音测试（图6）证实，攻击后音频的转录字准确率接近于零（<0.1），而ABX测试显示攻击扰动基本不可察觉（准确率均值约59%，不显著高于50%随机水平）。Full-SubNet+因梯度爆炸问题表现出一定“伪鲁棒性”。
5.  意义：证明了开源DNS模型在安全关键应用中部署前，必须应对对抗攻击的威胁，简单的高斯噪声防御效果有限。
6.  局限：攻击为白盒攻击，跨模型迁移性差；通用对抗扰动（UAP）效果不佳；目标性攻击在主观听感上并不成功；真实过空气场景中的非线性效应（如编解码压缩）未被建模。

---

