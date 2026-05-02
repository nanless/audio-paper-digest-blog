---
title: "ICLR 2026 - 音视频 论文列表"
date: 2026-05-03
draft: false
tags: ["音视频"]
categories: [iclr-2026]
description: "共 3 篇 ICLR 2026 音视频 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音视频

共 **3** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [SpeakerVid-5M: A Large-Scale High-Quality Dataset for Audio-](/audio-paper-digest-blog/posts/2026-05-03-speakervid-5m-a-large-scale-high-quality-dataset) | 8.5分 | 前10% |
| 🥈 | [Instilling an Active Mind in Avatars via Cognitive Simulatio](/audio-paper-digest-blog/posts/2026-05-03-instilling-an-active-mind-in-avatars-via) | 7.5分 | 前25% |
| 🥉 | [Entropy-Monitored Kernelized Token Distillation for Audio-Vi](/audio-paper-digest-blog/posts/2026-05-03-entropy-monitored-kernelized-token-distillation) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [SpeakerVid-5M: A Large-Scale High-Quality Dataset for Audio-Visual Dyadic Interactive Human Generation](/audio-paper-digest-blog/posts/2026-05-03-speakervid-5m-a-large-scale-high-quality-dataset)

🔥 **8.5/10** | 前10% | #音视频 | #数据集 | #多模态模型 #生成模型

👥 **作者与机构**

- 第一作者：Youliang Zhang (清华大学)
- 通讯作者：Duomin Wang (StepFun), Xiu Li (清华大学)
- 作者列表：
  - Youliang Zhang (清华大学, StepFun)
  - Zhaoyang Li (StepFun)
  - Duomin Wang (StepFun)
  - Jiahe Zhang (未说明)
  - Deyu Zhou (StepFun, 香港科技大学)
  - Zixin Yin (StepFun, 香港科技大学)
  - Xili Dai (香港科技大学)
  - Gang Yu (StepFun)
  - Xiu Li (清华大学)

💡 **毒舌点评**

这篇论文最大的亮点在于其“基建狂魔”式的数据集构建工作：从YouTube收集了海量原始数据，通过一套涉及场景分割、说话人日志、人脸检测、唇形同步、ID校正等多步骤的自动化流水线，并辅以丰富的多模态标注和严苛的质量过滤，最终搭建起一个专用于“交互”场景的5M级数据集，这为整个社区做了一个很好的开路工作。短板在于，其配套提出的基线模型在架构上属于组合现有技术（Qwen2.5-Omni理解 + AR生成 + 扩散优化），在核心视频生成质量指标上并未达到SOTA，更像是一个“Demo”而非一个性能标杆，且论文未明确模型权重和代码库的开放细节，略显遗憾。

🔗 **开源详情**

- 代码：论文中承诺将开源“数据处理代码”，但未提供具体的GitHub仓库链接。
- 模型权重：论文中提供了基线模型的架构和训练细节，但未明确提及是否公开训练好的模型权重。
- 数据集：论文中明确承诺将公开整个数据集，包括“原始数据（YouTube视频URL和时间戳）、标注和数据处理代码”，采用CC-BY-NC 4.0许可。获取方式应为通过URL索引自行下载原始视频。
- Demo：论文中未提及在线演示。
- 复现材料：论文详细描述了数据集构建流程、标注内容（附录A.11）、基线模型架构、训练细节（附录A.7，硬件、超参数、三阶段训练），以及评测基准的构成和评估方法，复现信息较为充分。
- 引用的开源项目：论文中引用了大量开源工具和模型，包括：
    *   数据处理：PySceneDetect（场景分割）、3D-Speaker（说话人分离）、YOLO（人脸检测）、SyncNet（唇音同步校验）、ArcFace（人脸识别）、DWpose（姿态估计）、Whisper（ASR）、Qwen2.5-VL/Qwen3（多模态标注）。
    *   质量评估：DOVER（视频质量）、PaddleOCR（文本检测）。
    *   基线模型：Qwen2.5-Omni（多模态理解）、CosyVoice2（音频分词与解码）、3D-VAE（视频编解码）、NOVA中的空间转换器组件。
    *   级联对比：Sonic, Hallo3。

📌 **核心摘要**

1.  要解决什么问题：当前数字人生成技术正在从被动驱动向主动交互演进，但学术界缺乏专门为“音频-视觉双人交互”任务设计的大规模、高质量训练数据集。
2.  方法核心是什么：提出了SpeakerVid-5M数据集构建流程。核心是从YouTube收集原始视频，通过自动化预处理（场景分割、说话人分离、人脸检测与跟踪、唇音同步、ID校正）、丰富的多模态标注（结构化文本、ASR、骨骼、模糊度分数等）以及严格的多维度质量过滤（亮度、视频质量、清晰度、模糊度、音频质量），系统化地产出训练数据。
3.  与已有方法相比新在哪里：1) 首个专门面向音频-视觉双人交互生成的数据集，提供了完整的问答对，而不仅是单人说话数据。2) 规模最大：包含5.2M单人片段（8.7K小时）和770K对话对（1.8K小时）。3) 标注最丰富：集成了ASR、人脸/手模糊度、运动度评分、结构化文本等多维度信息。4) 分层设计：分为大规模预训练子集和高质量SFT子集。
4.  主要实验结果如何：论文提供了一个基于自回归框架的基线模型，并在新构建的VidChatBench基准上进行了评估。关键结果见表2：
    | 方法 | 设置 | FID ↓ | FVD ↓ | PSNR ↑ | SSIM ↑ | ArcFace ↑ | FIDEmotion ↓ |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | 基线（仅音频） | 条件 | 57.03 | 55.16 | 15.31 | 0.62 | 0.630 | 3.45 |
    | 基线（完整） | 条件 | 34.72 | 30.43 | 17.39 | 0.65 | 0.758 | 3.23 |
    | 基线（完整） | 双人 | 32.35 | 28.82 | 17.55 | 0.66 | 0.772 | 3.22 |
    结论：在更自然的“双人”设置下，模型性能全面优于基于文本条件的“条件”设置，且音视频联合生成并未损害视觉质量。
5.  实际意义是什么：为音视频交互式数字人生成这一前沿任务奠定了关键的数据基础和评估标准，有望加速该领域的研究进展，推动更自然的虚拟助手、直播电商、在线教育等应用的发展。
6.  主要局限性是什么：1) 数据集存在互联网数据固有的地理、语言和人口统计偏见（如英语、白人占比高）。2) 提出的基线模型架构相对简单，且在部分视觉保真度指标上不如大型级联扩散模型（如表4所示）。3) 论文未提供代码库的具体链接，模型权重的公开细节也不明确。

---

### 🥈 [Instilling an Active Mind in Avatars via Cognitive Simulation](/audio-paper-digest-blog/posts/2026-05-03-instilling-an-active-mind-in-avatars-via)

✅ **7.5/10** | 前25% | #音视频 | #扩散模型 | #多模态模型 #大语言模型

👥 **作者与机构**

- 第一作者：Jianwen Jiang（ByteDance）
- 通讯作者：Jianwen Jiang（ByteDance）
- 作者列表：Jianwen Jiang（ByteDance）， Weihong Zeng（ByteDance）， Zerong Zheng（ByteDance）， Jiaqi Yang（ByteDance）， Chao Liang（ByteDance）， Wang Liao（ByteDance）， Han Liang（ByteDance）， Weifeng Chen（ByteDance）， Xing Wang（ByteDance）， Yuan Zhang（ByteDance）， Mingyuan Gao（ByteDance）

#

💡 **毒舌点评**

亮点在于将认知科学的“双系统理论”巧妙地映射到生成模型架构中，为视频头像注入“意图”提供了新颖且符合直觉的理论框架；短板是其训练依赖的海量（1.5万小时）视频数据完全未公开，且整体框架需要调用强大的MLLM（如miniCPM-o， Seed-1.5-VL）进行“思考”，这使得复现和部署成本极高，更像是一份面向工业巨头的技术蓝图而非学术社区的即用工具。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开权重。
- 数据集：未提及公开。
- Demo：未提及。
- 复现材料：论文在附录中提供了非���详细的实施细节、训练策略、超参数配置和评估协议，这对理论复现有一定帮助。但核心组件（预训练的MMDiT基础模型、清洗后的训练数据）的缺失，使得完整复现几乎不可能。
- 论文中引用的开源项目：Whisper（用于音频编码）， Raft（用于光流计算）， SyncNet（用于过滤）， PySceneDetect， PaddleOCR， Q-align（用于数据过滤和评估）。

📌 **核心摘要**

1. 问题：现有视频头像模型主要学习音频到口型的低层关联，缺乏对情感、意图等高层语义的理解，导致生成的动作重复、缺乏情境合理性。
2. 方法核心：提出一个基于认知“双系统理论”的新框架。系统2（审慎思考）：使用多模态大语言模型（MLLM）代理分析输入（图像、音频、文本），推理人物情感和意图，生成一个结构化的动作“计划”。系统1（快速反应）：采用新颖的多模态扩散Transformer（MMDiT）架构，将上述文本计划与音频、图像等信号进行深度融合，生成最终视频。
3. 创新：首次将认知科学理论引入视频头像建模；提出了专门设计的MMDiT架构，并创新性地使用“伪最后帧”（Pseudo Last Frame）策略替代传统参考图像条件，以在保持身份的同时允许更动态的运动。
4. 实验结果：在唇形同步精度、视频质量、动作自然度和语义一致性上达到领先水平。关键消融实验证明，移除推理模块（仅保留系统1）会导致手部动作方差（HKV）显著下降（从168.9降至122.4）。在主观用户研究中，其完整模型相比无推理版本，GSB得分提升0.58（-0.29至+0.29），运动不自然度（MU）显著降低。与OmniHuman-1等SOTA方法对比，在多个基准（CelebV-HQ， CyberHost）上指标持平或更优。
5. 实际意义：为创建更可信、更具表现力的数字人/虚拟角色提供了新范式，可应用于AI电影制作、虚拟助手、游戏NPC等。
6. 主要局限：框架复杂，依赖MLLM推理，带来额外延迟（约20-30秒）；训练需要巨大的计算资源和大规模高质量视频数据（论文未公开）；评估指标（如Sync-C）可能无法完全捕捉其语义优势。

---

### 🥉 [Entropy-Monitored Kernelized Token Distillation for Audio-Visual Compression](/audio-paper-digest-blog/posts/2026-05-03-entropy-monitored-kernelized-token-distillation)

✅ **7.5/10** | 前25% | #音视频 | #知识蒸馏 | #多模态模型

👥 **作者与机构**

- 第一作者：Hyoungseob Park（Yale University；Amazon AGI 实习期间完成）
- 通讯作者：未说明
- 作者列表：Hyoungseob Park（Yale University, Amazon AGI）、Lipeng Ke（Amazon AGI）、Pritish Mohapatra（Amazon AGI）、Huajun Ying（Amazon AGI）、Sankar Venkataraman（Amazon AGI）、Alex Wong（Yale University）

💡 **毒舌点评**

亮点：论文提出的“核化token蒸馏”思路确实巧妙，将知识蒸馏从直接模仿特征或输出分布，提升到了学习“特征空间的结构关系”层面，且通过核函数设计获得了很好的架构灵活性，实验结果也扎实地证明了其优越性。短板：尽管声称方法是模态无关的，但所有实验和评估都严格局限于音视频任务，对于“通用多模态压缩”的声称缺乏跨模态验证，通用性声明略显超前。此外，熵监控依赖于在每个模态后增加一个任务头，这在一定程度上引入了额外的架构依赖。

🔗 **开源详情**

- 代码：论文中未提及代码链接，但承诺将发布代码。
- 模型权重：未提及是否公开预训练权重。
- 数据集：使用公开的VGGSound和AVS-Bench数据集。
- Demo：未提供在线演示。
- 复现材料：论文附录E提供了详细的实验设置、超参数、基线细节和评估指标，为复现提供了良好基础。
- 论文中引用的开源项目：引用了CAVMAE (Gong et al., 2022b)、UFE-AVS (Liu et al., 2024a)、AVSegFormer (Gao et al., 2023)等教师模型的实现。

📌 **核心摘要**

1.  问题：大型音视频模型难以部署到计算资源受限的边缘设备，需要将其知识蒸馏到参数量小得多的学生模型中。现有的潜在空间蒸馏方法受限于教师和学生模型需匹配特征维度，而输出空间蒸馏方法性能有限。
2.  方法核心：提出核化token蒸馏（KTD），不直接模仿教师的潜在嵌入或输出，而是蒸馏同一模态内所有token之间的成对关系（以Gram矩阵表示）。该方法支持线性、多项式、RBF等多种核函数，无需匹配模型架构。进一步提出熵监控机制，通过测量每个模态预测输出的熵来衡量其信息量，自适应地调整不同模态在蒸馏损失中的权重，形成EM-KTD框架。
3.  新在何处：1) 蒸馏对象：从蒸馏特征值或分布转变为蒸馏特征关系（Gram矩阵），实现架构无关的潜在空间蒸馏。2) 自适应加权：引入基于熵的监控，使蒸馏过程能感知不同模态在不同样本上的信息价值，避免噪声监督信号。
4.  实验结果：在VGGSound音频-视觉事件识别上，EM-KTD使用6%教师参数，保留了96.9%的性能（准确率62.0%）。在AVS-Bench音频-视觉分割任务上，学生模型视觉编码器仅用教师4%的参数，在多声源分割任务上性能甚至超越教师。
   *   VGGSound对比（Table 1）

| 方法                     | 教师参数 | 学生骨干 | 学生参数 | Acc  | mAP  | mAUC |
|------------------------|----------|----------|----------|------|------|------|
| KD                     | 164M     | ViT-Tiny | 10M      | 56.1 | 57.3 | 97.1 |
| MTST+KD                | 164M     | ViT-Tiny | 10M      | 57.6 | 58.5 | 97.0 |
| EM-KTD+KD (Ours) | 164M     | ViT-Tiny | 10M      | 62.0 | 63.4 | 97.9 |

   *   AVS-Bench MS3子任务对比（Table 2部分）

| 方法                     | 教师视觉骨干 | 教师音频骨干 | 学生视觉骨干 | MJ   | MF   |
|------------------------|--------------|--------------|--------------|------|------|
| MTST                   | UFE-AVS      | VGGish       | PVTv2-b0     | 59.60| 69.89|
| EM-KTD (Ours)    | UFE-AVS      | VGGish       | PVTv2-b0     | 64.43| 74.73|

5.  实际意义：为在资源受限设备上部署高性能音视频理解模型提供了一种高效且灵活的压缩方案，具有明确的工业应用前景。
6.  局限性：核函数（特别是RBF）增加了计算复杂度。熵监控模块需要为每个模态增加一个任务头。论文未探讨在更复杂多模态任务（如视频描述、问答）上的有效性。

---

