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

🔥 **8.0/10** | 前25% | #语音增强 | #对抗样本 | #鲁棒性 #音频安全

👥 **作者与机构**

- 第一作者：Will Schwarzer（University of Massachusetts）
- 通讯作者：Will Schwarzer（wschwarzer@umass.edu）
- 作者列表：Will Schwarzer（University of Massachusetts）， Philip S. Thomas（University of Massachusetts）， Andrea Fanelli（Dolby Laboratories）， Xiaoyu Liu†（Dolby Laboratories / Meta）

💡 **毒舌点评**

这篇论文像一个严谨的“安全审计员”，用标准工具（心理声学模型、PGD）系统地测试了四款热门语音去噪产品的“防黑客”能力，结果令人警醒——在近乎无声的实验室环境下都能轻易攻破，这揭示了一个被忽视的巨大安全漏洞。不过，作者提出的“加点高斯白噪声”这种防御方案，听起来就像是给精密的瑞士银行金库换了个木头门锁，显得有些基础和仓促。

🔗 **开源详情**

- 代码：是，论文明确提供了公开代码仓库链接：https://github.com/willschwarzer/adv-dns-public。
- 模型权重：论文测试的DNS模型（Demucs， Full-SubNet+， FRCRN， MP-SENet）均为已有公开权重，论文中未提及提供其攻击后的模型权重。
- 数据集：使用了公开的ICASSP 2022 DNS Challenge 4数据集（Dubey et al., 2022）和OpenSLR28 RIR数据集。
- Demo：论文提及提供了在线样本供读者评估（https://sites.google.com/view/adv-dns/），但非交互式Demo。
- 复现材料：论文在附录中提供了极其详细的实验设置、超参数、数据集处理、优化算法细节、人类研究方案及统计检验方法。
- 论文中引用的开源项目：Whisper (ASR评估), MP-SENet, Denoiser (Demucs), FRCRN (ClearerVoice-Studio), MaskGCT (语音克隆), DNSMOS P.835, NISQA, ViSQOL, FullSubNet-Plus。

📌 **核心摘要**

1. 问题：深度语音去噪（DNS）模型在语音通信、助听器等关键应用中广泛使用，但其对抗鲁棒性未经充分验证。本文系统性地研究这些模型是否能被心理声学上不可察觉的扰动攻击至输出不可懂的语音。
2. 方法：采用基于心理声学掩蔽阈值的约束，结合投影梯度下降（PGD）优化算法，生成对抗性扰动。攻击目标包括使模型输出质量低于原始带噪输入（无目标攻击）和注入特定目标语音（有目标攻击）。同时评估了模型转移性、通用扰动和高斯噪声防御。
3. 创新：a) 首次系统性地对多个最新DNS模型在多种环境（包括模拟空旷环境）下进行心理声学隐藏攻击研究；b) 提出了结合心理声学模型与梯度投影的攻击框架；c) 揭示模型鲁棒性与大小无关，而与梯度稳定性（如爆炸梯度）相关。
4. 实验结果：四个测试模型（Demucs， Full-SubNet+， FRCRN， MP-SENet）均可被攻击至输出严重退化甚至无意义的语音，即使在70dB SNR的无回声环境下。人类听辨研究证实攻击后输出可懂度接近零，而扰动通常不可感知。模型转移攻击效果不佳。高斯噪声能部分缓解攻击，但会降低正常性能。
   关键转移攻击结果表（STOI增强值，攻击-评估对角线为白盒攻击效果）：
   | 训练攻击模型 | 评估模型：Demucs | FSN+ | FRCRN | MPSE |
   |---|---|---|---|---|
   | Demucs | -1.08 | 0.04 | 0.06 | 0.08 |
   | FSN+ | 0.05 | -0.49 | 0.05 | 0.08 |
   | FRCRN | 0.06 | 0.04 | -0.99 | 0.08 |
   | MPSE | 0.03 | 0.03 | 0.05 | -1.25 |
   （表中数值接近0表示跨架构转移攻击几乎无效）
5. 实际意义：明确警告了将开源DNS模型直接部署在安全关键语音应用中的风险，呼吁在部署前必须开发更有效的防御措施。
6. 主要局限性：攻击为白盒、需逐样本优化；有目标攻击在主观听感上效果有限；提出的防御方案（高斯噪声）较为基础，可能被自适应攻击绕过；未涉及基于非连续输出（如token-based）的DNS模型。

---

