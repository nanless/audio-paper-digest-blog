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
| 🥇 | [Are Deep Speech Denoising Models Robust to Adversarial Noise](/audio-paper-digest-blog/posts/2026-05-03-are-deep-speech-denoising-models-robust-to) | 8.5分 | 前25% |
| 🥈 | [SpeechOp: Inference-Time Task Composition for Generative Spe](/audio-paper-digest-blog/posts/2026-05-03-speechop-inference-time-task-composition-for) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Are Deep Speech Denoising Models Robust to Adversarial Noise?](/audio-paper-digest-blog/posts/2026-05-03-are-deep-speech-denoising-models-robust-to)

🔥 **8.5/10** | 前25% | #语音增强 | #对抗样本 | #鲁棒性 #音频安全

👥 **作者与机构**

- 第一作者：Will Schwarzer（马萨诸塞大学阿默斯特分校）
- 通讯作者：Will Schwarzer（wschwarzer@umass.edu，马萨诸塞大学阿默斯特分校）
- 作者列表：Will Schwarzer（马萨诸塞大学阿默斯特分校）、Philip S. Thomas（马萨诸塞大学阿默斯特分校）、Andrea Fanelli（Dolby Laboratories）、Xiaou Liu（Meta，论文工作在Dolby Laboratories完成）

💡 **毒舌点评**

本文成功地将一个通常被视为“清理器”的语音增强模型，转变成了潜在的“破坏器”，其攻击方法（心理声学隐藏对抗噪声）设计精巧，且在多种真实场景设置下被证明有效，这为语音增强系统的安全评估敲响了警钟。然而，论文测试的模型参数量均在35M以下，可能无法完全代表当前或未来更大规模的DNS模型的鲁棒性，结论的普适性有待进一步验证。

🔗 **开源详情**

- 代码：论文提供了公开的代码仓库链接：https://github.com/willschwarzer/adv-dns-public。
- 模型权重：论文中未提供预训练��DNS模型权重链接，但明确说明使用了开源检查点（来自Demucs, Full-SubNet+, FRCRN, MP-SENet的官方发布）。
- 数据集：实验数据来自公开的ICASSP 2022 DNS Challenge 4主赛道数据集，论文未提供专门的下载链接。
- Demo：论文中未提及在线演示。
- 复现材料：论文正文和附录提供了大量细节，包括所有超参数、优化设置、心理声学模型的具体实现、人工研究协议、统计检验方法以及所有依赖项的版本和许可证（表4），复现信息非常充分。
- 论文中引用的开源项目：OpenAI Whisper (用于过滤和评估), MP-SENet, Denoiser (Demucs), FRCRN (ClearerVoice-Studio), MaskGCT (Amphion), DNS-Challenge (数据集与代码), DNSMOS P.835, FullSubNet-Plus, NISQA, ViSQOL。

📌 **核心摘要**

1. 问题：广泛应用于视频会议、助听器和空管通信等高风险场景的深度语音降噪（DNS）模型，其对抗鲁棒性尚未得到充分研究。作者质疑这些模型是否会被难以察觉的对抗性噪声干扰，导致输出不可理解的语音。
2. 方法核心：设计了一种结合心理声学模型（利用听觉掩蔽效应隐藏扰动）和房间脉冲响应（RIR）感知的投影梯度下降攻击框架。以STOI（短时客观可懂度）为损失函数，生成在人类听觉上不可察觉、但能使DNS模型输出严重失真的对抗性扰动。
3. 新意：与之前针对DNS模型的研究（扰动可感知、场景有限）相比，本文首次系统研究了在严格心理声学约束下、跨多种信噪比（从70dB到-10dB）和混响设置、包含模拟空中传播场景的隐藏对抗攻击。同时评估了有目标攻击、模型迁移和基础防御措施。
4. 主要结果：在四个开源DNS模型（Demucs, Full-SubNet+, FRCRN, MP-SENet）上，攻击均能有效降低输出语音的可懂度，使其变得“胡言乱语”（图1）。人工听辨研究（15名音频专家）证实，攻击后的输出几乎无法转录（词准确率接近0），而攻击噪声本身通常难以察觉（ABX测试准确率不显著高于50%）。一个反直觉的发现是，模型鲁棒性与大小无关，Full-SubNet+的部分保护源于其梯度爆炸问题（一种易被绕过的虚假防御）。基础高斯噪声防御仅能提供有限且会损害性能的保护（图4）。
5. 实际意义：研究揭示了开源DNS模型在安全关键应用中存在的严重安全隐患，表明在部署此类系统前必须开发和评估更有效的防御措施，如推理时模型集成或随机化架构切换。
6. 主要局限性：攻击主要依赖白盒梯度访问；跨架构的朴素迁移效果不佳（表2）；通用对抗扰动（UAP）在严格感知约束下效果有限；攻击是离线且针对特定语音片段的，实时流式攻击需要进一步研究；所测试的模型规模相对较小。

---

### 🥈 [SpeechOp: Inference-Time Task Composition for Generative Speech Processing](/audio-paper-digest-blog/posts/2026-05-03-speechop-inference-time-task-composition-for)

✅ **7.5/10** | 前25% | #语音增强 | #扩散模型 | #语音分离 #语音合成

👥 **作者与机构**

- 第一作者：Justin Lovelace (Cornell University)
- 通讯作者：未说明
- 作者列表：Justin Lovelace (Cornell University), Rithesh Kumar (Adobe Research), Jiaqi Su (Adobe Research), Ke Chen (Adobe Research), Kilian Q. Weinberger (Cornell University), Zeyu Jin (Adobe Research)

💡 **毒舌点评**

论文巧妙地将TTS模型“废物利用”为多任务语音处理器，并提出了一套原理清晰的推理时任务组合方案（TC-CFG），在“用语音先验增强语音信号”这个思路上做得很漂亮；但其“万能工具”的单点性能（如说话人分离的信号失真指标）似乎被牺牲了，且目前更像一个强大的研究框架而非开箱即用的解决方案。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开权重。
- 数据集：使用了多个公开数据集（MLS, LibriTTS, LibriTTS-R, DNS Challenge, EchoThief等），论文中说明了如何获取或生成。
- Demo：提供了音频样例网站：https://justinlovelace.github.io/projects/speechop。
- 复现材料：提供了详细的附录，包含模型架构表、训练配置（学习率、批次大小、迭代次数等）、噪声模拟流程、评估细节、消融实验结果以及任务组合的数学推导，复现信息非常充分。
- 论文中引用的开源项目：提到了依赖的开源工具/模型包括：ByT5 (Xue et al., 2022), Whisper/WhisperX (Radford et al., 2023; Bain et al., 2023), DAC (Kumar et al., 2023), DPM-Solver++ (Lu et al., 2022) 等。

📌 **核心摘要**

1.  解决的问题：文本到语音（TTS）系统拥有海量数据，而语音到语音（S2S）处理任务（如语音增强、说话人分离）受限于昂贵的配对数据，导致数据驱动的生成方法容易扭曲原始语音内容和说话人身份。
2.  方法核心：提出SpeechOp，一个基于潜扩散的多任务模型。它首先在海量TTS数据上进行预训练，然后通过多任务微调，将预训练的TTS模型转化为能执行多种S2S任务的通用语音处理器。
3.  创新点：
    *   TTS到S2S的迁移：证明并利用TTS预训练能显著加速S2S任务训练并提升其质量。
    *   推理时任务组合（TC-CFG）：提出一种新的指导策略，在推理时组合已学任务（如增强+文本引导），而无需联合训练。该方法将TTS模型用作判别式指导，而非混合生成先验。
    *   隐式任务组合（ITC）：通过TC-CFG将外部ASR模型（如Whisper）生成的转录文本作为指导，实现了无需配对文本数据的、具有最先进内容保持能力的语音增强。
4.  主要实验结果：
    *   TTS：SpeechOp在零样本TTS和语音编辑任务上取得了与专业模型相当甚至更优的性能（例如，语音编辑MOS-Q为4.15，优于VoiceCraft的3.62）。
    *   语音增强：ITC管线将词错率（WER）从噪声源的3.3%降至2.9%，显著优于无文本引导的SpeechOp（WER 8.1%），并在主观质量（MOS）上与基线HiFi-GAN-2持平（3.89 vs. 3.90）。
    *   说话人分离：在主观MOS评估中，SpeechOp（No Transcript）在所有数据集上平均得分（3.57）优于最强SepFormer基线（3.28）。但其信号失真指标（如SI-SDRi）较低，反映了生成模型与判别模型的不同优化目标。
    *   任务组合消融：TC-CFG方法在所有指标上均优于简单的分数平均方法（TC-Avg），例如WER从3.4%降至2.1%，PESQ从1.88提升至2.06。
5.  实际意义：提供了一个统一、灵活的语音处理框架，能够通过简单组合在推理时完成复杂任务（如个性化增强、文本引导分离），为解决S2S任务数据稀缺问题提供了新思路，并展示了TTS预训练对下游任务的通用价值。
6.  主要局限性：模型规模较大（419M参数）；在某些任务上的客观信号失真指标低于传统判别模型，表明感知质量和信号保真度之间存在权衡；对依赖转录文本的任务，其性能受限于上游ASR的质量；论文未明确提及开源计划。

---

