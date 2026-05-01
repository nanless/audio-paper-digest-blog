---
title: "ICASSP 2026 - 音频增强 论文列表"
date: 2026-04-29
draft: false
tags: ["音频增强"]
categories: [icassp-2026]
description: "共 3 篇 ICASSP 2026 音频增强 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音频增强

共 **3** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [MixGAN-based Non-blind Bandwidth Extension for Audio Codec](/audio-paper-digest-blog/posts/2026-04-29-mixgan-based-non-blind-bandwidth-extension-for) | 8.0分 | 前25% |
| 🥈 | [SAGA-SR: Semantically and Acoustically Guided Audio Super-Re](/audio-paper-digest-blog/posts/2026-04-29-saga-sr-semantically-and-acoustically-guided) | 7.5分 | 前25% |
| 🥉 | [Subspace Hybrid Adaptive Filtering for Phonocardiogram Signa](/audio-paper-digest-blog/posts/2026-04-29-subspace-hybrid-adaptive-filtering-for) | 7.0分 | 前50% |

---

## 📋 论文详情

### 🥇 [MixGAN-based Non-blind Bandwidth Extension for Audio Codec](/audio-paper-digest-blog/posts/2026-04-29-mixgan-based-non-blind-bandwidth-extension-for)

🔥 **8.0/10** | 前25% | #音频增强 | #生成对抗网络 | #音频编解码器 #非盲

👥 **作者与机构**

- 第一作者：Hao Guo（华为中央媒体技术研究院，清华大学深圳国际研究生院）
- 通讯作者：Wenbo Ding（清华大学深圳国际研究生院，邮箱：ding.wenbo@sz.tsinghua.edu.cn）
- 作者列表：Hao Guo（华为中央媒体技术研究院，清华大学深圳国际研究生院）、BingYin Xia（华为中央媒体技术研究院）、Xiao-Ping Zhang（清华大学深圳国际研究生院）、Wenbo Ding（清华大学深圳国际研究生院）

💡 **毒舌点评**

本文首次将非盲AI带宽扩展（BWE）方案系统性地落地到音频编解码器框架中，并通过MixGAN创新性地解决了GAN训练在频谱扩展任务上易崩溃的难题，工程导向明确且效果显著。然而，论文对核心侧信息模型（side model）的“AI-based”部分描述过于简略（仅提到5个ConvM和1个MLP），且训练数据集描述模糊（“130小时以中文歌曲为主”），这给工作通用性的评估和完整复现埋下了隐患。

🔗 **开源详情**

*   代码：论文中未提及代码链接。
*   模型权重：未提及。
*   数据集：未提及公开数据集或获取方式。
*   Demo：未提及。
*   复现材料：论文提供了详细的模型结构、训练策略（三阶段）、关键超参数（学习率、Batch size等）和训练硬件信息，但缺乏最终的训练细节和配置文件。
*   论文中引用的开源项目：论文引用了以下开源项目作为对比或依赖：
    *   HiFi-GAN+ 的复现代码：https://github.com/brentspell/hifi-gan-bwe
    *   NU-Wave2 的官方实现：https://github.com/maum-ai/nuwave2
*   总体开源情况：论文本身未提及任何开源计划，但对复现有一定的指导意义。

📌 **核心摘要**

1.  问题：现有的AI带宽扩展（BWE）方法很少考虑集成到实际音频编解码器时面临的约束，如比特流兼容性、处理延迟和解码失真。
2.  方法：本文提出了首个面向音频编解码器的非盲AI-BWE框架。该框架在编码端提取少量比特的侧信息（包括频带包络和侧特征），在解码端以低延迟帧处理方式（2048样本，43ms）利用该信息引导从低频重建高频。核心创新是提出了MixGAN框架（通过线性插值混合真实与生成帧来训练判别器）和三阶段训练策略（单帧预热、单帧对抗、重叠优化）。
3.  创新点：1) 首个解决编解码器实际约束的非盲AI-BWE方案；2) MixGAN稳定了对抗训练，提升了重建保真度；3) 模型对量化失真具有固有鲁棒性。
4.  实验：在8kHz->24kHz的BWE任务上，与多种AI方法（HiFi-GAN+, NU-Wave2）和标准方法（EVS）对比。在语音和音频测试集上，所提方法（Non-blind BWE）取得了最佳的MUSHRA主观评分（语音84.44，音频84.28）和最低的LSD客观指标（语音0.846，音频0.663）。同时，其浮点运算量（FLOPs）和实时因子（RTF）远低于其他AI基线，计算效率高。

| 方案 | 语音 MUSHRA↑ | 语音 LSD↓ | 音频 MUSHRA↑ | 音频 LSD↓ |
| :--- | :---: | :---: | :---: | :---: |
| 解码LF (基准) | 55.25 | 1.418 | 46.75 | 3.055 |
| HiFi-GAN+ | 54.84 | 1.561 | 40.63 | 1.686 |
| NU-Wave2 | 59.72 | 1.664 | 48.44 | 2.161 |
| EVS (规则) | 77.44 | 0.980 | 76.72 | 1.051 |
| Blind BWE | 74.66 | 1.077 | 74.56 | 0.840 |
| Non-blind BWE (Vanilla) | 69.52 | 0.915 | 66.32 | 0.725 |
| Non-blind BWE (Proposed) | 84.44 | 0.846 | 84.28 | 0.663 |

![图4：频谱图对比](pdf-image-page4-idx3)
（图4显示，在复杂频谱结构的交响乐片段中，所提方法（e）能准确恢复谐波细节，而HiFi-GAN+（a）和NU-Wave2（b）表现较差。）

5.  意义：为在低比特率通信系统中实现高质量、低延迟的通用音频编解码器提供了新的技术路径，特别是在蓝牙耳机、无线通话等场景中具有直接应用潜力。
6.  局限性：训练数据集规模（130小时）和多样性描述不足（以中文歌曲为主），可能影响模型在所有类型音频上的泛化能力。侧信息的AI模型结构描述过于简略，未公开代码和详细数据集信息，限制了可复现性。

---

### 🥈 [SAGA-SR: Semantically and Acoustically Guided Audio Super-Resolution](/audio-paper-digest-blog/posts/2026-04-29-saga-sr-semantically-and-acoustically-guided)

✅ **7.5/10** | 前25% | #音频增强 | #扩散模型 | #流匹配 #生成模型

👥 **作者与机构**

- 第一作者：Jaekwon Im（KAIST 文化技术研究生院）
- 通讯作者：未说明
- 作者列表：Jaekwon Im（KAIST 文化技术研究生院）、Juhan Nam（KAIST 文化技术研究生院）

💡 **毒舌点评**

这篇论文的亮点在于巧妙地将文本语义信息和频谱滚降这一物理特征结合，作为扩散模型的双重引导，有效解决了通用音频超分辨率中“对齐差”和“高频能量不稳定”这两大痛点。不过，论文在训练硬件、具体模型参数量等复现关键信息上完全缺失，对于想复现其成果的同行来说，这无异于只给了地图却没标比例尺，实用性打了折扣。

🔗 **开源详情**

*   代码：论文中提供了代码和示例的链接：`http://jakeoneijk.github.io/saga-sr-project`。
*   模型权重：论文中未明确提及是否公开预训练模型权重。
*   数据集：论文使用的训练数据集（FreeSound, MedleyDB等）均为公开数据集，但论文未说明具体如何组合和预处理。测试集（VCTK, FMA-small, ESC50）也是公开数据集。
*   Demo：项目主页链接可能包含声音示例（论文中提及“Sound examples...are available online”），但论文内未直接给出在线演示链接。
*   复现材料：论文提供了详细的训练超参数（学习率、batch size、优化器、步数、调度器参数等）、数据预处理方法（滤波器类型、截止频率范围）和推理设置（采样步数、引导尺度）。但未提供模型结构细节（如DiT具体配置）、训练硬件信息、检查点文件或完整的训练配置代码。
*   论文中引用的开源项目：依赖预训练的VAE（来自`[12]` Stable Audio Open）、Qwen2-Audio（用于音频字幕生成）、T5-base（文本编码器）、librosa（频谱滚降计算）以及参考了AudioSR、FlashSR等工作的代码实现（用于对比）。

📌 **核心摘要**

1.  问题：现有的通用音频超分辨率方法（如AudioSR、FlashSR）在重建高频时，常出现语义不匹配（如生成不自然的齿音）和高频能量分布不一致的问题。
2.  方法核心：提出SAGA-SR模型，基于DiT（Diffusion Transformer）架构和流匹配（Flow Matching）目标进行训练。其核心创新在于引入了双重条件引导：（1）由音频生成的文本描述提供的语义嵌入；（2）由输入和目标音频的频谱滚降频率提供的声学嵌入。
3.  新颖之处：首次在音频超分辨率任务中系统性地引入了基于文本的语义引导，解决了现有方法生成音频语义失真的问题；同时，引入了频谱滚降这一可量化的声学特征，为模型提供了明确的高频能量分布指导，并允许用户在推理时通过单一标量控制输出音频的高频能量。
4.  主要结果：在语音、音乐、音效三个领域的测试中，SAGA-SR在所有客观指标（LSD、FD）和主观评估分数上均优于AudioSR和FlashSR。例如，在主观评估中，SAGA-SR在音效任务上得分3.88，显著高于FlashSR的3.34。消融实验证实了文本嵌入和频谱滚降嵌入的有效性。
5.  实际意义：SAGA-SR提供了一个能够处理任意输入采样率（4-32 kHz）并统一上采样到44.1 kHz的通用音频增强工具，其可控的高频能量生成特性使其在音频修复、后期制作等场景中具有应用潜力。
6.  主要局限性：模型对于包含多个重叠声源的复杂音频的处理能力有限；后处理中的低频替换操作可能引入频段间的不自然连接。

---

### 🥉 [Subspace Hybrid Adaptive Filtering for Phonocardiogram Signal Denoising](/audio-paper-digest-blog/posts/2026-04-29-subspace-hybrid-adaptive-filtering-for)

✅ **7.0/10** | 前50% | #音频增强 | #信号处理 | #心音信号 #自适应滤波

👥 **作者与机构**

- 第一作者：Wageesha N. Manamperi (University of Moratuwa, Sri Lanka, Department of Electronic & Telecommunication Engineering)
- 通讯作者：论文中未明确标注通讯作者
- 作者列表：Wageesha N. Manamperi (University of Moratuwa, Sri Lanka, Department of Electronic & Telecommunication Engineering; Audio & Acoustic Signal Processing Group, Australian National University, Australia), Thushara D. Abhayapala (Audio & Acoustic Signal Processing Group, Australian National University, Australia)

#

💡 **毒舌点评**

亮点在于将经典的NLMS、GMM维纳滤波与多通道PCA子空间方法进行“混搭”，形成一个两阶段流水线，逻辑清晰且有实验验证，为传统信号处理方法在心音降噪领域的应用提供了新思路。短板是其核心创新（两阶段串联）更偏向于工程组合而非理论突破，且代码与训练细节完全未公开，对于希望复现或深入理解参数影响的读者极不友好，削弱了论文的实际影响力。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用了公开的PASCAL和PhysioNet心音数据集，论文中给出了参考文献。
- Demo：未提及。
- 复现材料：论文描述了算法流程和关键公式，但未提供训练细节配置、超参数列表或检查点。部分关键参数（如PCA的 `η` 和 `T0`）未明确给出。
- 论文中引用的开源项目：未提及。

📌 **核心摘要**

1. 问题：心血管疾病早期诊断依赖于心音（PCG）信号，但录制过程中存在的各种背景噪声严重影响诊断准确性。现有单通道降噪方法在低信噪比条件下性能不足或计算成本高。
2. 方法核心：提出一种两阶段子空间混合自适应滤波方法。第一阶段，结合归一化最小均方（NLMS）滤波器和基于高斯混合模型的维纳滤波器（GMM WF）进行初步降噪；第二阶段，将第一阶段的两个输出视为双通道信号，通过主成分分析（PCA）子空间投影来进一步抑制残留噪声。
3. 创新性：该方法是首次将GMM WF应用于心音降噪，并创新性地将NLMS和GMM WF的输出作为PCA的两个输入通道进行联合处理，利用信号子空间投影提升降噪效果。
4. 实验结果：在PASCAL和PhysioNet两个公开数据集上，于多种真实噪声和低信噪比（-10 dB至10 dB）条件下进行评估。结果显示，所提方法（SS-Hybrid）在信噪比提升（ΔSNR）上显著优于小波阈值（WT）、去噪自编码器（DAE）和U-Net等基线方法。在PASCAL数据集上，SS-Hybrid的ΔSNR达到5.0289 dB，而次优的U-Net为-2.4449 dB；在PhysioNet数据集消融实验中，SS-Hybrid的信号失真比（SDR）达到15.27±4.41 dB，优于单独使用NLMS（11.83±4.13 dB）或GMM WF（12.80±6.44 dB）。
5. 实际意义：该方法为单麦克风采集的心音信号提供了一种有效的降噪方案，有望提升基于PCG的心血管疾病诊断的准确性和可靠性，尤其在便携式或低成本医疗场景中具有应用潜力。
6. 局限性：论文未说明训练和推理的具体计算复杂度；未在真实临床场景中进行大规模验证；未提供代码和模型，可复现性存疑；方法对噪声GMM模型的依赖性较强，其泛化能力有待进一步考察。

#

---

