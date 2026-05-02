---
title: "ICLR 2026 - 语音增强 论文列表"
date: 2026-05-02
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
| 🥇 | [Are Deep Speech Denoising Models Robust to Adversarial Noise](/audio-paper-digest-blog/posts/2026-05-02-are-deep-speech-denoising-models-robust-to) | 7.5分 | 前25% |
| 🥈 | [SpeechOp: Inference-Time Task Composition for Generative Spe](/audio-paper-digest-blog/posts/2026-05-02-speechop-inference-time-task-composition-for) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Are Deep Speech Denoising Models Robust to Adversarial Noise?](/audio-paper-digest-blog/posts/2026-05-02-are-deep-speech-denoising-models-robust-to)

✅ **7.5/10** | 前25% | #语音增强 | #对抗样本 | #鲁棒性 #音频安全

👥 **作者与机构**

- 第一作者：Will Schwarzer（University of Massachusetts）
- 通讯作者：未明确说明（第一作者邮箱为wschwarzer@umass.edu，但论文未明确标注“通讯作者”）
- 作者列表：
  - Will Schwarzer（University of Massachusetts）
  - Philip S. Thomas（University of Massachusetts）
  - Andrea Fanelli（Dolby Laboratories）
  - Xiaoyu Liu（Dolby Laboratories，论文注释“Work done while at Dolby Laboratories”，现所属机构为Meta）

💡 **毒舌点评**

本文系统性地揭示了当前主流开源深度语音降噪（DNS）模型在面对心理声学隐藏的对抗噪声时的普遍脆弱性，其“攻击成功且不可感知”的结论对安全关键场景（如助听器、应急通信）的模型部署敲响了警钟，实验设计严谨且多维度验证令人信服。然而，攻击目前严重依赖白盒梯度访问，且通用对抗扰动（UAP）效果有限，这使得论文揭示的威胁在真实复杂对抗环境中的可实现性打了折扣，防御部分也仅探索了最简单的高斯噪声。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/willschwarzer/adv-dns-public
- 模型权重：论文测试的四个DNS模型（Demucs, FRCRN, MP-SENet, Full-SubNet+）均为开源，权重公开。
- 数据集：使用公开的ICASSP 2022 DNS Challenge 4数据集。
- Demo：论文中未提及在线演示链接。
- 复现材料：论文正文和附录提供了详细的实验设置、超参数、优化细节、攻击样本链接以及复现声明。
- 论文中引用的开源项目：Whisper (ASR), Denoiser (Demucs), FullSubNet-Plus, FRCRN (ClearerVoice-Studio), MP-SENet, MaskGCT (Amphion), DNS-Challenge数据集与代码, DNSMOS P.835, NISQA, ViSQOL。其许可证信息已在表4中列出。

📌 **核心摘要**

1. 问题：本文研究广泛使用的深度语音降噪（DNS）模型是否对精心构造的、心理声学上不可感知的对抗性噪声具有鲁棒性。
2. 方法：作者提出了一种结合心理声学掩蔽模型（增强时间前后掩蔽）和房间脉冲响应（RIR）感知的攻击框架。核心是利用投影梯度下降（PGD）优化扰动，以短时客观可懂度（STOI）为损失函数，使DNS模型的输出从清晰语音变为无法理解的乱码，同时确保扰动能量低于听觉掩蔽阈值。
3. 创新：与先前工作相比，本文首次对多个SOTA开源DNS模型在多种声学环境（从极干净到嘈杂混响）和模拟空中传播条件下，进行了系统性的不可感知攻击研究；建立了结合心理声学和RIR感知的攻击优化流程；并通过人类研究验证了攻击的成功性和不可感知性。
4. 结果：对四个模型（Demucs, FRCRN, MP-SENet, Full-SubNet+）的测试表明，除Full-SubNet+因梯度爆炸问题表现出一定“伪鲁棒性”外，其他三个模型在所有测试环境（包括70 dB SNR无混响的近乎干净场景）下均可被成功攻击，使其输出STOI显著下降（例如，图1显示攻击后STOI增强量ΔSTOI从正值变为显著负值）。人类听辨实验（15名音频专家）证实攻击后输出词准确率接近0（图6a），且攻击扰动与干净样本的区分率仅略高于随机猜测（ABX准确率59%，图6b）。简单高斯噪声防御仅能提供部分保护（图4）。
5. 意义：研究警示，开源DNS模型在安全关键应用（如助听器、应急通信、空管）中的部署存在严重安全隐患，亟需开发更强的防御机制。
6. 局限：攻击需要白盒梯度访问；朴素的模型迁移攻击无效；目标攻击虽在客观指标上成功，但主观听感上目标语音仅隐约可闻；通用对抗扰动（UAP）效果有限；防御评估仅限于简单的高斯噪声。

---

### 🥈 [SpeechOp: Inference-Time Task Composition for Generative Speech Processing](/audio-paper-digest-blog/posts/2026-05-02-speechop-inference-time-task-composition-for)

✅ **7.5/10** | 前25% | #语音增强 | #扩散模型 | #语音分离 #多任务学习

👥 **作者与机构**

- 第一作者：Justin Lovelace（Cornell University）
- 通讯作者：未明确说明，但Zeyu Jin（Adobe Research）和Kilian Q. Weinberger（Cornell University）可能为共同通讯作者（论文未明确标注）。
- 作者列表：
    - Justin Lovelace（Cornell University）
    - Rithesh Kumar（Adobe Research）
    - Jiaqi Su（Adobe Research）
    - Ke Chen（Adobe Research）
    - Kilian Q. Weinberger（Cornell University）
    - Zeyu Jin（Adobe Research）

💡 **毒舌点评**

亮点在于将预训练TTS模型“逆向适配”为通用语音处理器，并提出了一种理论上更严谨的推理时任务组合方法（TC-CFG），为融合生成模型和判别模型知识提供了新思路。短板是，在作为核心评估场景的语音增强任务上，其使用Whisper转录本引导的ITC管线在内容保持（WER）上确实优异，但感知质量（MOS）与HiFi-GAN-2等强基线持平，并未形成决定性优势，且在一些客观信号保真度指标上表现平平。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及。
- 数据集：使用了多个公开数据集（MLS, Libri-TTS, LibriTTS-R, WHAMR!, WSJ0-2Mix, DNS Challenge, EchoThief等），并提供了详细的模拟退化流程描述。
- Demo：未提供在线演示链接。
- 复现材料：论文在附录和正文中提供了非常详细的模型架构（表8）、训练配置（超参数、优化器、两阶段训练细节）、采样配置和评估方法，复现指引充分。
- 论文中引用的开源项目：DAC (Kumar et al., 2023), ByT5, WhisperX, SDE-DPM-Solver++ (Lu et al., 2022), HiFi-GAN-2, SGMSE+, StoRm, SepFormer等。

📌 **核心摘要**

1.  解决的问题：文本到语音（TTS）模型因使用海量“野外”数据而性能优越，但语音到语音（S2S）处理任务（如增强、分离）受限于配对数据稀缺，导致生成式方法易扭曲语音内容和说话人身份。
2.  方法核心：提出SpeechOp，一个基于潜在扩散的多任务模型。它通过适配一个预训练的TTS模型，并在其上进行多任务微调（包括TTS、增强、分离等），将其转化为一个通用语音处理器。核心创新是提出任务组合分类器自由引导（TC-CFG），用于在推理时原则性地组合不同任务（如增强+文本引导），以及隐式任务组合（ITC）管线，利用ASR模型（如Whisper）的转录本指导增强过程。
3.  新在哪里：不同于直接从头训练多任务模型，SpeechOp充分利用了TTS预训练中学习到的丰富语音表示。TC-CFG方法避免了传统得分平均混合生成先验的缺陷，而是将TTS模型用作判别引导。ITC管线无需配对转录数据，即可在推理时利用ASR知识提升内容保持。
4.  主要实验结果：SpeechOp在零样本TTS和语音编辑上表现与当前SOTA相当或更优。在语音增强上，使用Whisper转录本的ITC管线将WER从基线的5.4-8.1%大幅降低至2.9%，实现SOTA内容保持，同时主观质量（MOS）与HiFi-GAN-2相当。在说话人分离上，其MOS显著优于SepFormer基线，但信号失真指标（如SI-SDRi）较低。消融实验证明TC-CFG在组合任务时优于得分平均方法。关键结果见下表：
    表3: 语音增强结果（部分）
    | 模型 | PESQ ↑ | WER ↓ | MOS ↑ |
    | :--- | :--- | :--- | :--- |
    | HiFi-GAN-2 | 2.23 | 5.4 | 3.90 ± 0.04 |
    | SpeechOp (无转录本) | 2.00 | 8.1 | 3.93 ± 0.04 |
    | SpeechOp-ITC (WhisperX) | 2.05 | 2.9 | 3.89 ± 0.04 |
    表6: 任务组合消融（使用黄金转录本）
    | 模型 | PESQ ↑ | WER ↓ |
    | :--- | :--- | :--- |
    | SpeechOp (无转录本) | 2.00 | 8.1 |
    | SpeechOp (TC-Avg) | 1.88 | 3.4 |
    | SpeechOp (TC-CFG) | 2.06 | 2.1 |
5.  实际意义：该工作为利用丰富的TTS数据解决数据受限的S2S任务提供了有效范式，并为需要同时考虑声学质量和内容恢复的场景（如嘈杂录音修复）提供了灵活可控的解决方案。
6.  主要局限性：1) 在信号保真度指标上，尤其在语音分离任务中，与专门优化这些指标的传统方法存在差距。2) ITC管线依赖外部ASR模型的质量和鲁棒性。3) 论文未明确提供代码和模型，限制了直接复现与应用。

---

