---
title: "ICASSP 2026 - 音频安全 论文列表"
date: 2026-04-29
draft: false
tags: ["音频安全"]
categories: [icassp-2026]
description: "共 11 篇 ICASSP 2026 音频安全 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音频安全

共 **11** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [HVAC-EAR: Eavesdropping Human Speech Using HVAC Systems](/audio-paper-digest-blog/posts/2026-04-29-hvac-ear-eavesdropping-human-speech-using-hvac) | 8.5分 | 前25% |
| 🥈 | [RoCo: Robust Code for Fast and Effective Proactive Defense a](/audio-paper-digest-blog/posts/2026-04-29-roco-robust-code-for-fast-and-effective-proactive) | 7.5分 | 前25% |
| 🥉 | [Membership Inference Attack against Music Diffusion Models v](/audio-paper-digest-blog/posts/2026-04-29-membership-inference-attack-against-music) | 7.5分 | 前25% |
| 4. | [A Feature-Optimized Audio Watermarking Algorithm with Adapti](/audio-paper-digest-blog/posts/2026-04-29-a-feature-optimized-audio-watermarking-algorithm) | 7.5分 | 前25% |
| 5. | [Co-Initialization of Control Filter and Secondary Path via M](/audio-paper-digest-blog/posts/2026-04-29-co-initialization-of-control-filter-and-secondary) | 7.5分 | 前25% |
| 6. | [LenslessMic: Audio Encryption and Authentication via Lensles](/audio-paper-digest-blog/posts/2026-04-29-lenslessmic-audio-encryption-and-authentication) | 7.5分 | 前25% |
| 7. | [Bloodroot: When Watermarking Turns Poisonous for Stealthy Ba](/audio-paper-digest-blog/posts/2026-04-29-bloodroot-when-watermarking-turns-poisonous-for) | 7.5分 | 前25% |
| 8. | [Emotional Damage: Investigating Safety Vulnerabilities of La](/audio-paper-digest-blog/posts/2026-04-29-emotional-damage-investigating-safety) | 7.5分 | 前25% |
| 9. | [Audio-Text Jailbreak Attack on Large Audio-Language Models: ](/audio-paper-digest-blog/posts/2026-04-29-audio-text-jailbreak-attack-on-large-audio) | 7.0分 | 前25% |
| 10. | [PRoADS: Provably Secure And Robust Audio Diffusion Steganogr](/audio-paper-digest-blog/posts/2026-04-29-proads-provably-secure-and-robust-audio-diffusion) | 6.5分 | 前50% |
| 11. | [Linguard: Authenticating Speech Recordings Using Speech Reco](/audio-paper-digest-blog/posts/2026-04-29-linguard-authenticating-speech-recordings-using) | 6.5分 | 前50% |

---

## 📋 论文详情

### 🥇 [HVAC-EAR: Eavesdropping Human Speech Using HVAC Systems](/audio-paper-digest-blog/posts/2026-04-29-hvac-ear-eavesdropping-human-speech-using-hvac)

🔥 **8.5/10** | 前25% | #音频安全 | #时频分析 | #端到端 #工业应用

👥 **作者与机构**

- 第一作者：Tarikul Islam Tamiti（George Mason University, 网络安全工程系）
- 通讯作者：未说明
- 作者列表：Tarikul Islam Tamiti（George Mason University, 网络安全工程系）、Biraj Joshi（George Mason University, 网络安全工程系）、Rida Hasan（George Mason University, 网络安全工程系）、Anomadarshi Barua（George Mason University, 网络安全工程系）

💡 **毒舌点评**

亮点：这是一篇视角独特的安全研究论文，揭示了HVAC系统这一庞大基础设施中潜在的、令人意想不到的语音窃听渠道，并给出了从低质量信号中恢复可理解语音的完整技术方案，具有很强的现实警示意义。短板：其威胁模型的通用性值得商榷，评估仅限于特定距离（0.5m训练，1.2m测试）、单一语言（英语）和受控环境，实际复杂场景（如多重噪声、多说话人）下的鲁棒性尚未验证，可能简化了现实世界的攻击难度。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：论文中提到“The dataset will be made open source after acceptance of the paper.”，即数据集计划在论文被接受后开源。
- Demo：未提及。
- 复现材料：论文在附录或正文中提供了部分训练细节，如模型大小（61.6M）、损失函数的具体设计（复数多分辨率STFT损失，S=3，具体分辨率参数）、硬件（NVIDIA 4090 GPU）。但学习率、优化器、训练轮数等关键训练超参数未在提供的文本中说明。
- 论文中引用的开源项目：论文引用了多个作为基线的开源工作，包括NU-Wave [22]、AP-BWE [23]、AERO [24] 和 PHASEN [15]，但未提及使用了其他特定的开源代码库或工具。
- 总结：论文有明确的开源数据集计划，并提供了部分复现信息，但整体复现材料（尤其是代码和模型权重）不完整。

📌 **核心摘要**

本文旨在揭示并解决利用暖通空调（HVAC）系统中的差压传感器（DPS）进行语音窃听的新型隐私威胁。核心方法是提出了HVAC-EAR，一个基于复数域U-Net的语音重建模型，它能将低采样率（0.5-2 kHz）、高噪声的DPS压力数据，重构为采样率高达8 kHz的可理解语音。与之前仅能进行关键词检测或依赖特定振动传感器的工作相比，HVAC-EAR的新颖之处在于：（1）设计了复杂统一注意力模块（CUAB），能够捕捉时频谱图上的全局音素依赖关系；（2）采用复数多分辨率短时傅里叶变换（STFT）损失，联合重建幅度和相位，有效抑制了HVAC系统的瞬态噪声。主要实验结果表明，在真实HVAC设施中，HVAC-EAR在0.5m距离下训练的模型，能在1.2m距离内重构出具有显著可懂度的语音（以STOI、PESQ、NISQA-MOS等指标衡量），性能优于NU-Wave、AERO等基线模型。例如，在0.5 kHz → 8 kHz上采样任务中，其SI-SDR为8.88 dB，显著高于原始压力数据的4.24 dB。这项工作的实际意义是首次实证了HVAC DPS可能被用作窃听工具，对医院、洁净室等敏感环境的语音隐私构成了新威胁。主要局限性是其评估距离有限（超过1.2m性能急剧下降），且仅在英语数据集上进行验证。

### 实验结果关键数据表

表2：不同采样率上采样至8 kHz的性能对比（60 dB音频）

| 模型/方法 | 500 Hz → 8 kHz | | | | | 1 kHz → 8 kHz | | | | | 2 kHz → 8 kHz | | | | |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| | LSD↓ | N↑ | S↑ | P↑ | ST↑ | LSD↓ | N↑ | S↑ | P↑ | ST↑ | LSD↓ | N↑ | S↑ | P↑ | ST↑ |
| Raw pressure data | 3.48 | 0.82 | 4.24 | 0.85 | 0.69 | 3.11 | 0.97 | 6.54 | 0.94 | 0.72 | 2.91 | 1.22 | 8.87 | 1.17 | 0.74 |
| NU-Wave [22] | 1.58 | 1.41 | 5.24 | 1.32 | 0.71 | 1.42 | 1.78 | 7.44 | 1.44 | 0.77 | 1.27 | 1.99 | 9.87 | 1.57 | 0.79 |
| AP-BWE [23] | 1.43 | 1.95 | 7.74 | 1.45 | 0.75 | 1.31 | 2.13 | 9.54 | 1.54 | 0.79 | 1.11 | 2.39 | 11.89 | 1.72 | 0.82 |
| AERO [24] | 1.34 | 1.96 | 7.94 | 1.47 | 0.75 | 1.22 | 2.17 | 9.84 | 1.57 | 0.79 | 1.07 | 2.41 | 12.45 | 1.77 | 0.82 |
| HVAC-EAR | 1.29 | 2.01 | 8.88 | 1.58 | 0.76 | 1.19 | 2.24 | 10.22 | 1.61 | 0.80 | 1.01 | 2.54 | 13.38 | 1.97 | 0.83 |

（注：L=LSD, N=NISQA-MOS, S=SI-SDR, P=PESQ, ST=STOI）

表3：消融研究（0.5-8 kHz 重建）

| 模型 | LSD↓ | STOI↑ | PESQ↑ | SI-SDR↑ | NISQA-MOS↑ | 大小(M) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Raw pressure data | 3.48 | 0.69 | 0.85 | 4.24 | 0.82 | – |
| w/ FTB [15] | 1.32 | 0.74 | 1.45 | 7.54 | 1.78 | 10.1 |
| w/ CUAB in each encoder | 1.21 | 0.77 | 1.60 | 9.12 | 1.99 | 80.2 |
| w/ snake activation | 1.34 | 0.75 | 1.51 | 7.77 | 1.85 | 61.6 |
| w/ transformer in bottleneck | 1.33 | 0.73 | 1.38 | 7.94 | 1.89 | 57.6 |
| HVAC-EAR | 1.29 | 0.76 | 1.58 | 8.88 | 2.01 | 61.6 |

![图3](https://img2.imgtp.com/2024/05/29/QZpXl5xX.png) 图3展示了实验测试平台以及从含噪声压力数据（SNR=3.5dB）中重建出的清晰语音（SNR=12dB），直观体现了模型的降噪和重构能力。

![图4](https://img2.imgtp.com/2024/05/29/qL6XKqZk.png) 图4左侧展示了不同性别说话人的主观MOS评分，证明重建语音质量获得人类听众认可；右侧展示了说话人距离对模型性能（LSD和NISQA-MOS）的影响，表明有效窃听距离约为1.2米。

---

### 🥈 [RoCo: Robust Code for Fast and Effective Proactive Defense against Voice Cloning Attack](/audio-paper-digest-blog/posts/2026-04-29-roco-robust-code-for-fast-and-effective-proactive)

✅ **7.5/10** | 前25% | #音频安全 | #对抗样本 | #语音克隆 #语音合成

👥 **作者与机构**

- 第一作者：Seungmin Kim（松石大学， Soongsil University）
- 通讯作者：Daeseon Choi（松石大学， Soongsil University， sunchoi@ssu.ac.kr）
- 作者列表：Seungmin Kim（松石大学）、Dain Kim（松石大学）、Sohee Park（松石大学）、Daeseon Choi（松石大学）。论文指出Seungmin Kim和Dain Kim为共同第一作者。

💡 **毒舌点评**

RoCo巧妙地将主动防御的“战场”从脆弱的波形域转移到结构更稳定的编解码器潜在空间，并利用STE优雅地解决了离散优化问题，这是一个在架构层面令人耳目一新的设计。然而，该防御策略本质上是针对特定语音合成管线的“寄生式”扰动，其长期有效性高度依赖于攻击模型编解码器的结构稳定性，一旦遇到更强的自适应净化攻击或完全不同的合成架构，其鲁棒性承诺就可能大打折扣。

🔗 **开源详情**

- 代码：论文中提供了项目主页链接 (https://smerge0802.github.io/RoCo/)，该页面可能包含演示音频样本。但未提及任何公开的代码仓库（如GitHub）。
- 模型权重：未提及公开的预训练模型权重（包括编解码器模型和优化好的扰动码）。
- 数据集：论文中使用的多个数据集（VCTK, LibriSpeech等）是公开的，但论文未说明RoCo训练数据的具体情况及获取方式。
- Demo：提供了在线演示页面，可试听防御前后的语音样本。
- 复现材料：给出了方法的整体框架和损失函数公式，但缺失关键实现细节：扰动码本大小`N_P`、两阶段优化阈值`τ`的具体数值、说话人编码器`g(·)`在优化时的具体选择、优化器、学习率、训练步数等。
- 论文中引用的开源项目：引用了多个作为攻击和基线防御的开源项目，例如：SV2TTS（Real-time voice cloning）， YourTTS， AttackVC， AntiFake， VoiceGuard， DeepFilterNet， MP-SENet， De-antifake， ECAPA-TDNN， Resemblyzer， NISQA等。
- 开源计划：论文中未明确提及未来的开源计划。

📌 **核心摘要**

本文提出RoCo，一种基于神经音频编解码器（Neural Codec）的主动防御方法，旨在解决语音克隆攻击。该方法面临两大核心问题：1）现有防御注入的扰动易被语音增强技术去除；2）生成防御语音的速度过慢，不实用。RoCo的核心方法是：不在原始音频上直接添加扰动，而是在编解码器提取的离散潜在码序列后，额外追加一个专门优化的扰动码（Perturbation Code）。该扰动码使用直通估计器（STE）进行梯度优化，以干扰攻击模型中的说话人编码器。为平衡防御强度和音质，RoCo采用两阶段损失优化策略：先优化目标损失（Target Loss）以最大化防御效果，当扰动码强度达到阈值后，切换为信噪比损失（SNR Loss）以修复音质。与AntiFake、AttackVC、VoiceGuard等基线方法相比，RoCo在多个攻击模型（SV2TTS， YourTTS， AVC）和验证模型（ECAPA， ResNet， RSZ）上取得了更高的防御成功率（DSR）。更重要的是，经语音增强（如Spectral Masking， DeepFilterNet， MP-SENet）后，RoCo的DSR平均下降约15%，而基线方法平均下降约38%，表现出更强的鲁棒性。同时，RoCo生成防御语音的速度显著快于基线（例如在AVC模型上仅需13秒，而基线需要40-122秒）。该工作的实际意义在于提供了一种更快速、更抗干扰的语音隐私主动保护方案。其主要局限在于：方法的防御效果依赖于目标攻击模型采用的特定编解码器架构；论文未评估面对自适应净化攻击或更强大攻击模型时的性能。

---

### 🥉 [Membership Inference Attack against Music Diffusion Models via Generative Manifold Perturbation](/audio-paper-digest-blog/posts/2026-04-29-membership-inference-attack-against-music)

✅ **7.5/10** | 前25% | #音频安全 | #扩散模型 | #对抗样本 #鲁棒性

👥 **作者与机构**

- 第一作者：Yuxuan Liu（未明确标注，按署名顺序为首位）
- 通讯作者：未明确标注
- 作者列表：Yuxuan Liu, Peihong Zhang, Rui Sang, Zhixin Li, Yizhou Tan, Yiqiang Cai, Shengchen Li（均来自Xi’an Jiaotong-Liverpool University, Suzhou, China）

💡 **毒舌点评**

亮点：首次系统性地将成员推断攻击聚焦于音乐扩散模型，并聪明地将对抗鲁棒性差异转化为Membership Inference的信号，其提出的LSA-Probe在低误报率关键指标上取得了显著且一致的提升。
短板：攻击方法依赖于多轮二分搜索和PGD优化，计算开销巨大，这使其在现实世界中作为大规模审计工具的可行性大打折扣；同时，攻击效果的绝对数值（例如DiffWave上最高的20% TPR@1%FPR）距离“可靠”的审计标准仍有相当差距。

🔗 **开源详情**

- 代码：论文提供了项目Demo的GitHub仓库链接：https://github.com/kaslim/LSA-Probe。
- 模型权重：论文中未提及是否公开DiffWave和MusicLDM的模型权重。
- 数据集：论文使用了公开数据集MAESTRO v3和FMA-Large，但未说明其预处理脚本是否开源。
- Demo：未提及在线演示。
- 复现材料：论文提供了核心超参数（K, r, β, τ=P95等）、评估协议和部分实现细节。但未提供完整的训练细节、配置文件、检查点。
- 论文中引用的开源项目：DiffWave [13], MusicLDM [1]。攻击基线中的SecMI [22]等可能也依赖开源实现。

📌 **核心摘要**

1. 问题：扩散模型在音乐生成中表现出色，但其训练数据可能涉及版权与隐私问题。如何有效判断一段特定的音乐片段是否被用于训练某个音乐扩散模型（成员推断攻击，MIA），成为审计生成式音乐模型合规性的关键挑战。传统基于损失信号的MIA方法在音频领域效果不佳。
2. 方法核心：本文提出Latent Stability Adversarial Probe（LSA-Probe），一种白盒攻击方法。其核心思想是：训练集中的“成员”样本位于模型生成流形的更稳定区域。该方法通过测量在反向扩散过程的中间潜状态中，使生成质量下降到一个固定感知阈值所需的最小归一化扰动预算（对抗成本）来评估这种稳定性。成员样本需要更大的扰动成本才能被降质。
3. 创新点：与已有工作相比，LSA-Probe放弃了单一的端点重建损失信号，转而探测沿生成轨迹的动态几何稳定性。它是首个针对音乐扩散模型（包括波形DDPM和潜扩散模型LDM）的系统性MIA研究，并建立了局部生成稳定性与成员身份之间的联系。
4. 主要结果：在DiffWave和MusicLDM两个模型，以及MAESTRO v3和FMA-Large两个数据集上的实验表明，在匹配计算量的前提下，LSA-Probe在低误报率（FPR=1%）下的真阳性率（TPR）比最佳基线方法高3-8个百分点。例如，在DiffWave/MAESTRO上，TPR@1%FPR从0.12提升至0.20。消融实验显示，中段扩散时间步、中等扰动预算以及感知度量（CDPAM/MR-STFT）的效果最优。
5. 实际意义：为音乐版权持有者和审计方提供了一种潜在的技术工具，用于检测AI音乐生成模型是否未经授权使用了其作品进行训练，有助于规范生成式AI的发展。
6. 主要局限性：攻击方法计算成本高（涉及多次PGD优化和反向传播）；其有效性阈值（如TPR@1%FPR）虽有提升，但绝对值仍不高，在需要极低误报率的严格审计场景下实用性受限；评估模型和数据集范围有限。

---

### 4. [A Feature-Optimized Audio Watermarking Algorithm with Adaptive Embedding Strength](/audio-paper-digest-blog/posts/2026-04-29-a-feature-optimized-audio-watermarking-algorithm)

✅ **7.5/10** | 前25% | #音频安全 | #深度学习 | #鲁棒性 #信号处理

👥 **作者与机构**

- 第一作者：Weili Zhou（厦门大学信息学院、管理学院）
- 通讯作者：Shuangyuan Yang（厦门大学信息学院）
- 作者列表：Weili Zhou（厦门大学信息学院、管理学院，共同第一作者）、Jiabei Zhou（厦门大学信息学院，共同第一作者）、Shuangyuan Yang（厦门大学信息学院，通讯作者）

💡 **毒舌点评**

亮点在于将Transformer的特征提取能力与NSGA-II多目标优化框架巧妙结合，为“嵌入强度”这一传统难题提供了自适应解决方案，在实验数据上实现了容量、不可感知性与鲁棒性的较好平衡。短板是论文理论分析稍显薄弱，未能深入阐释Transformer编码器为何及如何在水印任务中优于传统模块，且优化策略（NSGA-II）的离线性质对实时性场景的适用性讨论不足。

🔗 **开源详情**

- 代码：论文中未提及代码链接或开源计划。
- 模型权重：未提及公开权重。
- 数据集：使用了公开的FMA和VCTK数据集，但论文未提供其具体使用版本或预处理脚本。
- Demo：未提及在线演示。
- 复现材料：未提供完整的训练细节、配置文件、检查点或附录说明。损失函数权重已给出，但优化器学习率等关键超参数未说明。
- 论文中引用的开源项目：未提及依赖的特定开源代码库或模型（如使用某个Transformer实现）。

📌 **核心摘要**

本文针对现有音频水印方法在嵌入容量、不可感知性和鲁棒性之间难以平衡，且跨音频类型泛化能力有限的问题，提出了一种名为AESAW的音频水印算法。该方法的核心是：1）利用Transformer编码器层来优化水印的特征表示，提升其与音频信号的融合质量；2）引入NSGA-II多目标优化算法，以信噪比（SNR）和误码率（BER）为目标，自适应地调整嵌入强度。实验在FMA音乐和VCTK语音数据集上进行，结果表明AESAW在保持较高嵌入容量（86 bps）的同时，实现了出色的不可感知性（音乐SNR 31.2 dB，语音SNR 26.7 dB）和强大的鲁棒性（在重采样、裁剪、重量化等攻击下BER接近0%）。与传统方法（SVD-DWT, SIFT-DWT）和现有深度学习方法（DeAR, AudioSeal）相比，AESAW在性能上具有明显优势。其实际意义在于为音频版权保护提供了一种更可靠的技术方案。主要局限性在于NSGA-II的优化过程是离线的，论文未详细探讨其对不同类型音频的实时嵌入适应性以及在实际部署中的计算开销。

实验结果关键数据对比表：

| 方法 | 数据集 | 容量 | SNR (dB) | 无攻击BER(%) | AWGN BER(%) | 重采样BER(%) | 重量化BER(%) | 回声BER(%) | 幅度缩放BER(%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| SVD-DWT | 音乐 | 102 bps | 25.3 | 0 | 1.79 | 0.10 | 1.01 | 1.46 | 0.10 |
| SIFT-DWT | 音乐 | 102 bps | 28.1 | 0 | 0.29 | 0.07 | 0 | 0 | 1.00 |
| DeAR | 音乐 | 9 bps | 23.2 | 0 | 0 | 0 | 0 | 4.20 | 0 |
| AudioSeal | 音乐 | 16 bps | 22.67 | 2.00 | 3.50 | 1.81 | 1.81 | 4.25 | 2.06 |
| AESAW | 音乐 | 86 bps | 31.2 | 0 | 0.14 | 0 | 0 | 0.01 | 0 |
| SVD-DWT | 语音 | 102 bps | 25.3 | 0 | 0.16 | 0 | 0 | 1.92 | 0 |
| SIFT-DWT | 语音 | 102 bps | 31.2 | 0 | 0.20 | 0.16 | 0.03 | - | 4.30 |
| DeAR | 语音 | 9 bps | 20.5 | 0 | 0 | 0 | 0 | 11.6 | 0 |
| AudioSeal | 语音 | 16 bps | 27.96 | 0 | 16.25 | 0 | 7.50 | 0 | 0 |
| AESAW | 语音 | 86 bps | 26.7 | 0 | 0.03 | 0 | 0 | 0.22 | 0 |

---

### 5. [Co-Initialization of Control Filter and Secondary Path via Meta-Learning for Active Noise Control](/audio-paper-digest-blog/posts/2026-04-29-co-initialization-of-control-filter-and-secondary)

✅ **7.5/10** | 前25% | #音频安全 | #元学习 | #信号处理 #少样本学习

👥 **作者与机构**

- 第一作者：Ziyi Yang (Smart Nation TRANS Lab, School of Electrical and Electronic Engineering, Nanyang Technological University, Singapore)
- 通讯作者：Zhengding Luo (Smart Nation TRANS Lab, School of Electrical and Electronic Engineering, Nanyang Technological University, Singapore)
- 作者列表：Ziyi Yang (南洋理工大学)、Li Rao (南京大学声学研究所现代声学重点实验室)、Zhengding Luo (南洋理工大学, 通讯作者)、Dongyuan Shi (西北工业大学)、Qirui Huang (南洋理工大学)、Woon-Seng Gan (南洋理工大学)

#

💡 **毒舌点评**

这篇论文的亮点在于其巧妙的工程切入点：不改变工业界广泛使用的FxLMS算法本身，而是通过一个“离线学习、在线简单设置”的元学习初始化模块来提升其性能，这种“即插即用”的兼容性思维非常务实。但其短板也很明显：验证场景过于“温和”和“干净”——仅在预录的路径切换实验上演示效果，缺乏对真实世界中连续、渐变、非平稳声学环境变化的长期跟踪评估，使得结论的鲁棒性打了折扣。

#

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：https://github.com/yzyzieee/ICASSP26_co-init_meta-learning （状态：论文中提及，承诺将开源）。
- 模型权重：未提及是否公开预训练好的元初始化权重`(Φ, Ψ)`。
- 数据集：实验使用的PANDAR数据库由外部机构（RWTH Aachen）发布，论文未提供直接获取方式。
- Demo：未提及。
- 复现材料：提供了算法伪代码（Algorithm 1）和详细的系统框图（图1），但缺乏完整的训练脚本、关键超参数的具体数值列表以及预训练配置文件。
- 论文中引用的开源项目：未提及依赖其他特定的开源代码库。所用基线算法（OSPM-FxLMS）是经典方法，无需特定引用。

📌 **核心摘要**

1.  问题：传统的前馈式主动噪声控制（FxLMS）系统在面对声学环境突变时，由于控制滤波器和次级路径模型都从零或固定值开始自适应，导致启动阶段降噪性能差、收敛慢、恢复时间长，且需要注入较高的辅助噪声进行在线辨识。
2.  方法：提出一种基于模型无关元学习（MAML）的联合初始化方法。在离线阶段，利用一组预采样的声学路径对，通过模拟“次级路径辨识（Phase A）”和“残差噪声消除（Phase B）”的两阶段内循环，共同训练出控制滤波器初始化系数（Φ）和次级路径模型初始化系数（Ψ）。在线部署时，仅在检测到环境变化时将系统重置为这对已学习的初始值，然后FxLMS的自适应更新过程保持不变。
3.  创新：与已有仅初始化控制滤波器的元学习方法相比，本方法首次实现了对FxLMS系统中两个核心组件（控制滤波器与次级路径模型）的联合初始化，且部署方式极简，无需修改现有自适应算法。
4.  实验结果：在基于实测耳机声学路径的OSPM-FxLMS测试平台上，相比基线（从零开始初始化），该方法实现了：更低的早期阶段误差（见图2）、更短的到达目标误差的时间、更少的辅助噪声能量消耗，以及路径切换后更快的恢复速度。路径多样性研究（表1）表明，次级路径的多样性对初始化性能提升贡献最大。
    | 训练集 | 主要路径离散度 (dB) | 次级路径离散度 (dB) | 未见条件平均降噪 (dB) |
    | :--- | :--- | :--- | :--- |
    | A (多样) | 6.17 | 6.75 | 26.1 |
    | B (紧凑) | 0.91 | 0.79 | 23.2 |
    | C (高主低次) | 5.37 | 0.67 | 23.7 |
    | D (低主高次) | 1.55 | 4.50 | 25.8 |
5.  实际意义：为耳机等消费级ANC产品提供了一种低成本的性能提升方案，能显著改善用户在佩戴调整或环境变化时的即时听感，减少自适应期的“噪声泄漏”和“刺耳探测音”。
6.  主要局限性：验证局限于固定的三次路径切换场景，未模拟真实使用中更复杂、连续的环境变化（如人头移动、门窗开关）。方法的有效性依赖于预训练路径集与真实环境的匹配程度，对超出训练分布的声学条件泛化能力未充分验证。

#

---

### 6. [LenslessMic: Audio Encryption and Authentication via Lensless Computational Imaging](/audio-paper-digest-blog/posts/2026-04-29-lenslessmic-audio-encryption-and-authentication)

✅ **7.5/10** | 前25% | #音频安全 | #无透镜成像 | #神经音频编码 #音频分类

👥 **作者与机构**

- 第一作者：Petr Grinberg (Audiovisual Communications Laboratory, EPFL)
- 通讯作者：未说明（作者列表未标注，邮箱为共通格式 first.last@epfl.ch）
- 作者列表：Petr Grinberg (EPFL), Eric Bezzam (EPFL), Paolo Prandoni (EPFL), Martin Vetterli (EPFL)。所有作者均隶属于 EPFL 的 Audiovisual Communications Laboratory。

#

💡 **毒舌点评**

亮点：本文巧妙地将“无透镜相机的视觉隐私”这一特性，逆向思维用于“音频的隐私保护”，构建了一个从声到光再到密文的全新物理安全链路，构思颇具巧思。短板：系统实用性受制于笨重的硬件原型（需要显示器作为光源）和缓慢的采集速度，其宣称的“物理层安全”优势，在“已知明文攻击”下可能因音频帧尺寸过小而受到挑战，迫使采用更复杂（且效果更差）的帧分组策略来弥补。

#

🔗 **开源详情**

- 代码：论文提供了项目主页链接 (https://blinorot.github.io/projects/LenslessMic)，并声明开源了代码。但论文文本中未直接给出代码仓库（如GitHub）的具体URL。
- 模型权重：论文中未明确提及是否公开预训练好的Learned等模型的具体权重文件。
- 数据集：论文明确开源了收集的多个数据集（见表1），包括Librispeech子集和SongDescriber音乐数据，以及对应的无透镜测量值。可通过项目主页获取。
- Demo：论文提供了一个在线演示页面 (https://blinorot.github.io/projects/LenslessMic)，可以试听重构的音频样本。
- 复现材料：论文提供了详细的训练数据收集方法、模型架构、损失函数、训练步数（50k）、学习率（1e-4）、batch大小（4个连续帧）等复现所需的关键信息。未提及检查点文件和详细的环境配置。
- 论文中引用的开源项目：
    - 神经音频编码器：DAC (Descript Audio Codec) [14]。
    - 音频评估：NVIDIA NeMo 工具包 [27] 中的Parakeet-TDT-0.6B-v2（用于转录）和TitaNet-L（用于说话人嵌入）。
    - 无透镜成像原型：DigiCam [15]。
    - 重建算法基线：ADMM [24]。

📌 **核心摘要**

1. 要解决什么问题：数字音频的安全传输目前主要依赖软件加密算法（如AES），论文旨在探索一种新的、基于物理硬件的补充性安全方案，为音频数据提供额外的保护层，以应对潜在的深度伪造、窃听等威胁。
2. 方法核心是什么：提出LenslessMic，一个混合硬件-软件系统。其核心流程是：将音频信号通过神经音频编码器（NAC，具体使用DAC）压缩为潜在表示，将该表示重塑为图像帧；利用无透镜相机（一个基于可编程掩模的低成本原型DigiCam）对这些图像帧进行拍摄，得到多重散射的测量值（密文）。解密时，必须使用正确的点扩散函数（PSF，由掩模图案决定）对测量值进行逆向重建，恢复出潜在表示图像，再输入音频解码器恢复音频。
3. 与已有方法相比新在哪里：(1) 跨模态安全范式：首次将无透镜成像的视觉隐私特性应用于音频加密，开辟了光学物理层安全在音频领域的新应用。(2) 融合架构创新：结合了NAC的鲁棒性（尤其是残差向量量化RVQ的容错能力）与无透镜成像的安全性，提出了完整的端到端加密-解密流程。(3) 主动安全机制：通过可编程掩模动态改变PSF，并结合帧分组（g）技术，主动增强系统对各类攻击的抵抗力。
4. 主要实验结果如何：论文在多个数据集上进行了验证。关键结果如表2所示：使用在域数据（train-clean）训练的Learned模型，解密语音的ViSQOL为4.50，STOI达0.96，接近无加密的Ground-truth。安全性方面，图2显示当正确PSF像素比例W=7%时，WER已达100%，搜索空间等效于AES-256。认证实验（图3）显示，正确PSF与随机PSF的恢复结果在WER和UTMOS指标上可完美区分，认证准确率达100%。帧分组消融表明，g=2足以防御已知明文攻击（NoPSF模型WER=100%），但会轻微降低重建质量。
5. 实际意义是什么：该研究为音频数据安全提供了一种新的防御维度——物理层安全。它证明了光学加密可以与先进的音频编码技术结合，在保证解密质量的同时，提供强大的加密强度和用户认证能力。其开源贡献有助于推动该交叉领域的研究。
6. 主要局限性是什么：(1) 硬件实用性：当前原型依赖电脑显示器作为光源，体积大，不适合实际部署；采集速度慢，存储开销大于原始音频。(2) 质量与安全的权衡：增强安全性（如增大g）会导致解密质量下降。(3) 泛化能力：模型在跨音频类型（语音到音乐）和跨编码器（DAC到X-Codec）时性能有下降，表明系统对特定编码格式有依赖性。(4) 潜在攻击面：论文承认小尺寸音频帧可能使已知明文攻击在理论上可行，尽管通过增大g进行了缓解。

---

### 7. [Bloodroot: When Watermarking Turns Poisonous for Stealthy Backdoor](/audio-paper-digest-blog/posts/2026-04-29-bloodroot-when-watermarking-turns-poisonous-for)

✅ **7.5/10** | 前25% | #音频安全 | #水印 | #鲁棒性

👥 **作者与机构**

-   第一作者：Kuan-Yu Chen（Kuan-Yu Chen^{1,2}，根据作者顺序判断）
-   通讯作者：Jeng-Lin Li^{2,⋆} 和 Jian-Jiun Ding^{1,⋆}（根据作者名后星号判断）
-   作者列表：Kuan-Yu Chen（台湾大学通讯工程研究所, Inventec公司AI研究中心）、Yi-Cheng Lin（台湾大学通讯工程研究所）、Jeng-Lin Li（Inventec公司AI研究中心）、Jian-Jiun Ding（台湾大学通讯工程研究所）

#

💡 **毒舌点评**

本文巧妙地将音频水印技术“黑化”为一种隐蔽后门，实现了“在眼皮子底下投毒”的效果，实验数据也显示其在感知质量和鲁棒性上确实优于传统土法炼钢的触发器。不过，这篇论文更像是把一个已知工具（水印）巧妙地应用到了一个已知场景（后门攻击），缺乏对水印本身可能被更复杂防御手段破解的深入探讨。

#

🔗 **开源详情**

-   代码：论文中提到“Code is available at GitHub”，但未提供具体的代码仓库URL链接。
-   模型权重：未提及是否公开微调后的Bloodroot-FT水印生成器权重。
-   数据集：使用的是公开的Speech Commands和VoxCeleb数据集，论文中未提供额外的数据集资源。
-   Demo：未提及在线演示。
-   复现材料：提供了较为详细的训练细节，包括损失函数权重（λsup, λstft, λmel, λamp）、优化器（Adam）、学习率（1e-4）、Batch size（32）、水印强度（α=5）等关键超参数。硬件环境（NVIDIA A16, A40）也已说明。
-   论文中引用的开源项目：主要依赖了AudioSeal水印模型。还使用了开源数据集Speech Commands和VoxCeleb，以及torch-pruning库进行模型剪枝实验。

📌 **核心摘要**

1.  要解决什么问题：现有音频后门攻击方法（如修改音高、插入超声波）在生成的有毒样本上会引入可被察觉的声音失真，且容易被常见的信号处理或模型剪枝防御手段所破坏。
2.  方法核心是什么：提出Bloodroot框架，将原本用于版权保护的音频水印技术重新用作后门触发器。其核心是利用预训练的音频水印模型（AudioSeal）生成不可感知的扰动，并嵌入到少量（1%）训练数据中。进一步提出Bloodroot-FT，通过LoRA对水印生成器进行微调，以优化触发器的鲁棒性和隐蔽性之间的平衡。
3.  与已有方法相比新在哪里：这是首个系统性地将音频水印作为后门触发器的研究。与传统的、针对性设计的声音模式（如超声波、环境音）相比，水印触发器天生具备更好的不可感知性和对常见信号处理的鲁棒性。
4.  主要实验结果如何：在语音识别（SC-10/30）和说话人识别（VoxCeleb-125/全集）任务上，Bloodroot-FT相比现有最优基线，在感知质量（PESQ）上提升了约2分，STOI提升了约0.5。同时保持了超过95%的攻击成功率（ASR）和接近基线的模型准确率（BA）。关键抗防御实验结果如下表：
| 方法 | ASR（无滤波） | ASR（带低通滤波） |
| :--- | :--- | :--- |
| PBSM | 92.62% | 9.52% |
| Ultrasonic | 97.26% | 1.28% |
| Bloodroot-FT | 93.85% | 53.49% |
在模型剪枝防御下，Bloodroot系列也能保留约70%的ASR，而其他方法在剪枝率增加时ASR迅速下降。
5.  实际意义是什么：一方面，它展示了如何利用水印技术实现更隐蔽、更鲁棒的数据所有权保护（正向应用）。另一方面，它警示了水印技术的“双刃剑”特性，可能被恶意利用进行更难检测的模型投毒攻击（反向风险），推动了AI安全领域对此类威胁的研究。
6.  主要局限性是什么：研究主要集中在特定的语音任务和模型架构上；对于更复杂的防御（如对抗训练、水印检测算法）未做深入探讨；虽然声称是第一个系统性工作，但水印本身作为“触发器”的潜力挖掘可能还未到极致。

---

### 8. [Emotional Damage: Investigating Safety Vulnerabilities of Large Audio-Language Models Under Speaker Emotional Variations](/audio-paper-digest-blog/posts/2026-04-29-emotional-damage-investigating-safety)

✅ **7.5/10** | 前25% | #音频安全 | #对抗样本 | #音频大模型 #语音合成

👥 **作者与机构**

- 第一作者：Bo-Han Feng（台湾大学）、Chien-Feng Liu（台湾大学）、Yu-Hsuan Li Liang（台湾大学）（注：论文标明三位为共同第一作者）
- 通讯作者：Hung-yi Lee（台湾大学）（注：论文未明确标注通讯作者，Hung-yi Lee为资深作者，按惯例推断）
- 作者列表：Bo-Han Feng（台湾大学）、Chien-Feng Liu（台湾大学）、Yu-Hsuan Li Liang（台湾大学）、Chih-Kai Yang（台湾大学）、Szu-Wei Fu（NVIDIA）、Zhehuai Chen（NVIDIA）、Ke-Han Lu（台湾大学）、Sung-Feng Huang（NVIDIA）、Chao-Han Huck Yang（NVIDIA）、Yu-Chiang Frank Wang（NVIDIA）、Yun-Nung Chen（台湾大学）、Hung-yi Lee（台湾大学）

#

💡 **毒舌点评**

这篇论文的“问题嗅觉”非常灵敏，精准地抓住了大型音频语言模型在“情绪化表达”这一软肋上的安全漏洞，并用一套严谨的控制变量实验（同一指令、同一说话人、不同情绪与强度）给出了令人信服的实证证据，这是其最大亮点。然而，论文在揭示问题后戛然而止，未能进一步探索漏洞产生的原因（如数据偏差、模型架构缺陷）或提出任何防御/改进方案，使其研究深度略显不足，更像是一个扎实的“安全审计报告”，而非一个完整的“攻防研究”。此外，模型评估的全面性可以进一步加强。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：论文明确提供数据集获取链接：https://huggingface.co/LALM-emotional-vulnerability。
- Demo：未提及。
- 复现材料：论文描述了数据集构建流程和评估指标，但未提供完整的训练细节、配置或检查点。
- 论文中引用的开源项目：主要依赖AdvBench（文本有害查询）、CREMA-D（情感语音参考）和CosyVoice 2（TTS模型）。

📌 **核心摘要**

1.  问题：大型音频语言模型（LALMs）的安全对齐在面对说话人情感（副语言信息）变化时，存在尚未被系统研究的脆弱性。
2.  方法核心：构建了一个可控的恶意语音指令数据集。使用TTS模型将相同的恶意文本指令合成为6种情绪（中性、愤怒、厌恶、恐惧、快乐、悲伤）及3种强度（低、中、高）的语音，确保语义、说话人身份一致。然后对10个主流LALMs进行安全测试。
3.  创新：首次系统性研究说话人情感对LALM安全对齐的影响；构建了首个专注于此问题的可控语音数据集；发现了“情绪类型”和“情绪强度”均会显著影响模型安全性，且强度影响呈非单调性（中等强度最危险）。
4.  主要实验结果：关键发现如下表所示。不同模型对不同情绪的反应不一，但普遍存在安全不一致性。与纯文本输入相比，语音输入通常会降低安全性（更高的NRR/UR）。情绪强度方面，中等强度的情绪表达在多个模型中引发了最高的不安全率（UR），而非预期的高强度。例如，MiniCPM-o-2.6在“愤怒”情绪下，中等强度的UR（3.65%）高于低强度（3.46%），但远低于高强度（16.92%）；而SALMONN 13B在“厌恶”情绪下，中等强度的UR（72.31%）则高于高强度（82.69%）和低强度（88.08%），体现了复杂的模式。总体，情感变化导致模型安全指标（NRR/UR）出现显著波动（如SALMONN 7B的UR标准差达5.15%）。

    表1：部分模型在不同情绪下的不安全率（UR， %）摘要
    | 模型 | 中性 | 愤怒 | 厌恶 | 恐惧 | 快乐 | 悲伤 | 平均(µ) | 标准差(σ) |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | Qwen2-Audio | 1.54 | 1.15 | 2.11 | 1.47 | 1.99 | 2.76 | 1.84 | 0.57 |
    | Qwen2.5-Omni | 0.19 | 0.13 | 0.25 | 0.26 | 0.25 | 0.38 | 0.24 | 0.08 |
    | SALMONN 7B | 34.23 | 22.31 | 28.08 | 21.73 | 32.18 | 30.19 | 28.12 | 5.15 |
    | SALMONN 13B | 72.88 | 70.77 | 81.03 | 72.88 | 71.15 | 72.56 | 73.55 | 3.78 |
    | Gemini-2.0-flash | 3.08 | 2.76 | 4.81 | 2.89 | 3.98 | 2.82 | 3.39 | 0.83 |

    表3：部分模型在特定情绪下，不同强度的不安全率（UR， %）
    | 模型（对应情绪） | 低强度 | 中强度 | 高强度 | 平均(µ) | 标准差(σ) |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | SALMONN 13B（厌恶） | 88.08 | 72.31 | 82.69 | 81.03 | 8.02 |
    | MiniCPM-o-2.6（愤怒） | 3.46 | 3.65 | 16.92 | 8.01 | 7.72 |
    | Gemini-2.0-flash（厌恶） | 3.27 | 6.15 | 5.00 | 4.81 | 1.45 |

    （注：表格数据直接源自论文Table 1和Table 3的关键行）
5.  实际意义：研究揭示了LALM安全对齐的一个关键盲点，强调在实际部署中必须考虑副语言信息的影响。为未来的模型安全训练、评测基准和防御策略（如情绪感知的过滤器）提供了明确的研究方向和数据基础。
6.  主要局限性：研究完全依赖合成语音，尽管经过人工验证，但可能无法完全代表真实世界中复杂、自然的情感表达。论文主要聚焦于发现问题，未深入分析漏洞成因，也未提出具体的缓解方案。

#

---

### 9. [Audio-Text Jailbreak Attack on Large Audio-Language Models: Towards Generality and Stealthiness](/audio-paper-digest-blog/posts/2026-04-29-audio-text-jailbreak-attack-on-large-audio)

✅ **7.0/10** | 前25% | #音频安全 | #对抗样本 | #多模态模型 #跨模态

👥 **作者与机构**

- 第一作者：Yuhong Li（太原工业大学工业互联网安全山西省重点实验室 & 计算机科学与技术学院）
- 通讯作者：Jianhua Wang（太原工业大学工业互联网安全山西省重点实验室 & 计算机科学与技术学院，邮箱：wangjianhua02@tyut.edu.cn）
- 作者列表：Yuhong Li（太原工业大学工业互联网安全山西省重点实验室 & 计算机科学与技术学院）、Jiabao Zhang（太原工业大学工业互联网安全山西省重点实验室 & 计算机科学与技术学院）、Yan Chen（太原工业大学计算机科学与技术学院）、Zhihui Zhao（太原工业大学工业互联网安全山西省重点实验室 & 计算机科学与技术学院）、Jianhua Wang（太原工业大学工业互联网安全山西省重点实验室 & 计算机科学与技术学院）

💡 **毒舌点评**

亮点在于首次开辟了“音频+文本”联合优化的多模态越狱攻击赛道，并在实验上取得了90%以上的攻击成功率，有力证明了当前LALM在多模态融合下的脆弱性，为安全研究提供了新方向。短板是论文对“隐身性”的论证略显单薄，仅通过提升成功率来间接证明，并未深入评估攻击音频在人类听觉或音频检测系统中的隐蔽程度，削弱了“Stealthiness”这一主张的力度。

🔗 **开源详情**

- 代码：是，论文提供了GitHub仓库链接：`https://github.com/SKLIIS-AIS/AudioTextJailbreak`。
- 模型权重：未提及。论文未说明是否公开攻击者使用的模型或攻击目标模型的权重获取方式。
- 数据集：是，但获取方式不明确。论文提到使用TTS技术创建了音频版AdvBench数据集，但未提供公开下载链接或详细生成脚本。
- Demo：未提及。
- 复现材料：论文中提及了代码，但未提供完整的训练配置、检查点或附录说明。对于攻击优化中的关键超参数细节未充分披露。
- 论文中引用的开源项目：TTS工具 `Coqui`；目标模型 `Qwen2-Audio-7B-Instruct`, `Qwen2.5-Omni-3B`；文本攻击基线 `GCG`；数据集 `AdvBench`。

📌 **核心摘要**

1.  问题：现有的针对大型音频语言模型（LALM）的越狱攻击多局限于单模态（纯文本或纯音频），且通用性和隐蔽性不足。
2.  方法核心：提出“音频-文本越狱攻击”（Audio-Text Jailbreak），首次联合优化微小的对抗音频扰动和恶意的文本后缀，共同诱导模型生成有害回应。同时设计了环境噪声添加和语速调整等隐身策略。
3.  与已有方法相比新在哪里：a) 首次实现音频和文本模态的深度融合攻击；b) 设计的单个对抗音频/文本后缀可泛化应用于不同用户指令；c) 引入针对性的音频层隐身策略。
4.  主要实验结果：在Qwen2-Audio和Qwen2.5-Omni两个模型上，攻击成功率（ASR）分别达到91.00% 和 92.73%，显著优于GCG、VoiceJailbreak、SpeechGuard等基线方法。关键实验结果如下表所示：

| 方法 | 非法活动 | 仇恨言论 | 人身伤害 | 欺诈 | 色情 | 隐私侵犯 | 平均 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Base (无攻击) | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| GCG (文本攻击) | 0.67 | 0.72 | 0.73 | 0.79 | 0.80 | 0.75 | 0.74 |
| VoiceJailbreak | 0 | 0.40 | 0.20 | 0.20 | 0.30 | 0 | 0.21 |
| SpeechGuard | 0.20 | 0.40 | 0.40 | 0.20 | 0.30 | 0 | 0.25 |
| Audio-Text JailBreak (本文) | 0.95 | 0.90 | 0.90 | 0.88 | 0.90 | 0.90 | 0.91 |

| 模型 | Noise | Rate | Rate + Noise | Ours |
| :--- | :---: | :---: | :---: | :---: |
| Qwen2-Audio | 84.00 | 83.30 | 86.61 | 91.00 |
| Qwen2.5-Omni | 82.50 | 85.65 | 73.91 | 92.73 |
| 平均 | 83.25 | 84.48 | 80.26 | 91.86 |

5.  实际意义：揭示了当前LALM在处理跨模态输入时存在的严重安全漏洞，为模型安全加固（如多模态对齐安全训练）提供了明确的攻击测试基准和方向。
6.  主要局限性：通用性验证实验仅在一个条件（K=10）下进行，泛化能力论证不够充分；隐身策略的实际效果（如是否易于被人耳察觉或被音频检测器识别）未通过直接的用户研究或客观度量进行评估。

---

### 10. [PRoADS: Provably Secure And Robust Audio Diffusion Steganography With Latent Optimization And Backward Euler Inversion](/audio-paper-digest-blog/posts/2026-04-29-proads-provably-secure-and-robust-audio-diffusion)

✅ **6.5/10** | 前50% | #音频安全 | #扩散模型 | #音频生成

👥 **作者与机构**

- 第一作者：Yongpeng Yan（武汉大学国家网络安全学院）
- 通讯作者：Yanzhen Ren（武汉大学国家网络安全学院）
- 作者列表：Yongpeng Yan（武汉大学国家网络安全学院），Yanan Li（武汉大学国家网络安全学院），Qiyang Xiao（武汉大学国家网络安全学院），Yanzhen Ren（武汉大学国家网络安全学院，武汉大学航空航天信息安全与可信计算教育部重点实验室）

💡 **毒舌点评**

亮点： 本文精准地抓住了“初始噪声嵌入式”扩散隐写方法在逆向提取时的痛点——重建误差，并针对性地提出了“潜在空间优化”和“后向欧拉反演”两个技术改进，实验结果也清晰地证明了其有效性（BER显著降低），是一篇问题导向明确、解决方案扎实的改进型工作。
短板： 论文最大的软肋在于其核心实验基础——EzAudio模型——的复现信息几乎完全缺失，且未开源任何代码，这使得其宣称的“可复现”和“高效”大打折扣；同时，提取过程的高计算开销（106秒 vs 6.8秒）限制了其实时应用场景，论文对此的讨论也较为轻描淡写。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开PRoADS模型的权重。实验使用的是预训练的EzAudio模型，但论文未给出其具体获取方式或版本。
- 数据集：使用了公开的AudioCaps数据集，但未说明具体版本和使用方式。
- Demo：未提供在线演示。
- 复现材料：未提供训练细节（本方法无需训练）、配置文件、检查点或附录说明。复现依赖于对论文算法描述的理解和对EzAudio模型的自行配置。
- 论文中引用的开源项目：明确依赖于EzAudio [7] 音频扩散模型进行实验。其他基线方法（如GSD, DiffStega, Gaussian Shading）也多为已发表的工作，但本文未提供其代码链接。

📌 **核心摘要**

本文旨在解决基于扩散模型的生成式音频隐写术中，由于扩散模型逆向过程误差导致的秘密消息提取比特错误率（BER）过高的问题。其核心方法是提出PRoADS框架，通过正交矩阵投影将消息嵌入扩散模型初始噪声，并引入两项关键技术来最小化逆向误差：一是在编码器将隐写音频转为潜在表示后，进行潜在空间梯度优化以逼近原始潜在变量；二是采用更精确的后向欧拉迭代法替代朴素的DDIM反演来求解扩散逆过程。与现有方法（如Hu[17]）相比，本文的主要新意在于同时从“潜在变量重构”和“扩散逆过程求解”两个层面减少误差。实验表明，在EzAudio模型上，PRoADS在64 kbps MP3压缩攻击下实现了0.15%的低BER，相比基线方法有显著提升（例如在DPMSolver下，较Hu[17]降低约0.5%）。该工作的实际意义在于为生成式音频隐写提供了更高鲁棒性的解决方案，主要局限性是提取过程计算开销大（106秒），且未提供开源代码和详细模型参数，限制了复现与应用。

---

### 11. [Linguard: Authenticating Speech Recordings Using Speech Recognition and Watermark](/audio-paper-digest-blog/posts/2026-04-29-linguard-authenticating-speech-recordings-using)

✅ **6.5/10** | 前50% | #音频安全 | #信号处理 | #语音识别 #说话人验证

👥 **作者与机构**

- 第一作者：Shameer Faziludeen（University College Cork， School of Computer Science and Information Technology）
- 通讯作者：未明确说明（论文提供的是所有作者的邮箱，未指定通讯作者）
- 作者列表：
  - Shameer Faziludeen（University College Cork）
  - Arun Sankar M. S.（South East Technological University， Department of Electronics and Communication Engineering）
  - Phillip L. De Leon（University of Colorado Denver， Department of Electrical Engineering）
  - Utz Roedig（University College Cork）

#

💡 **毒舌点评**

亮点：系统架构设计巧妙，将数字签名、水印和语音处理技术解耦又紧密结合，实现了“内容签名”而非“信号签名”的理念，概念上清晰且实用。  
短板：实验部分过于依赖单一数据集（TIMIT）且规模较小，缺乏对抗真实世界复杂攻击（如高质量语音克隆替换）的评估，结论的普适性存疑；同时，系统各环节的容错与性能边界分析不足。

#

🔗 **开源详情**

- 代码：论文中未提及任何代码仓库链接或开源计划。
- 模型权重：未提及。系统使用了公开的预训练模型（AudioSeal, Whisper, SpeechBrain），但论文本身未提供或链接其特定版本的权重。
- 数据集：评估使用了TIMIT数据集，这是一个公开的标准数据集。论文未提及是否公开了其他自定义数据或预处理脚本。
- Demo：未提及。
- 复现材料：未给出训练细节、配置、检查点或附录说明。
- 论文中引用的开源项目：明确使用了以下开源工具/模型：AudioSeal (水印)、OpenAI Whisper (ASR)、SpeechBrain (SV模型)。

📌 **核心摘要**

1. 解决的问题：如何检测语音录音在发布后是否经历了恶意篡改（如删除、插入、替换语音片段），特别是针对能保持音质的编辑和AI生成的伪造语音。
2. 方法核心：LinGuard框架结合了四个组件：1）使用OpenAI Whisper进行语音识别（ASR），提取录音的文本内容（语言信息）；2）基于该文本和说话人嵌入生成一个数字签名（使用Falcon 512算法）；3）将该签名的哈希值作为水印（使用AudioSeal）嵌入原始录音中；4）存储签名元数据。验证时，从录音中提取水印恢复哈希，重新识别文本，验证签名与文本的匹配性，并可选地通过说话人验证确认身份。
3. 新在哪里：与传统仅保护音频信号或元数据的方法不同，LinGuard将密码学签名直接与录音的语言内容绑定，并通过鲁棒水印将两者不可分割地链接。这使得系统能容忍不影响内容的信号处理（如加噪、压缩），但能检测内容变更。
4. 主要实验结果：
   - 水印鲁棒性：在干净语音中，水印段时长 >200ms 即可达到低于10⁻³的误码率（BER）；在35dB信噪比噪声下，需 >300ms 段长。实验数据来自TIMIT测试集1600个语音信号。
   - ASR鲁棒性：在TIMIT训练集（462位说话人）上，带水印和噪声的语音，其WER（词错误率）和CER（字符错误率）与原始语音相比几乎没有增加（见表1）。

表1：ASR性能对比
| 条件 | WER (%) | CER (%) |
| :--- | :--- | :--- |
| 原始语音 | 2.89 | 0.91 |
| 带水印语音 | 2.92 | 0.91 |
| 带水印及噪声语音 | 2.93 | 0.92 |

- SV（说话人验证）鲁棒性：在TIMIT数据集上，X-vector、ECAPA-TDNN和ResNet三种模型在带水印和噪声条件下，验证准确率与原始语音相比变化很小（见表2）。

表2：说话人验证准确率对比
| 模型 | 原始语音 | 带水印语音 | 带水印及噪声语音 |
| :--- | :--- | :--- | :--- |
| X-vector | 98.34% | 98.48% | 98.05% |
| ECAPA-TDNN | 100% | 99.86% | 99.93% |
| ResNet | 100% | 99.86% | 100% |

5. 实际意义：为新闻机构、法律取证、在线会议等领域提供了一种可验证录音语言内容真实性与说话人身份的技术框架，有助于应对深度伪造和录音篡改。
6. 主要局限性：实验评估场景单一（仅TIMIT，加性噪声）；未测试对抗性攻击（如基于水印的攻击或高级语音克隆替换）；系统依赖外部商业ASR服务，且水印容量限制导致需要分段嵌入，对短语音（<4.8秒）不适用。

#

---

