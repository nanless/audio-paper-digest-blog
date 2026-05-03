---
title: "ICLR 2026 - 音视频 论文列表"
date: 2026-05-03
draft: false
tags: ["音视频"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 音视频 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音视频

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Entropy-Monitored Kernelized Token Distillation for Audio-Vi](/audio-paper-digest-blog/posts/2026-05-03-entropy-monitored-kernelized-token-distillation) | 8.0分 | 前25% |
| 🥈 | [JavisDiT++: Unified Modeling and Optimization for Joint Audi](/audio-paper-digest-blog/posts/2026-05-03-javisdit-unified-modeling-and-optimization-for) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Entropy-Monitored Kernelized Token Distillation for Audio-Visual Compression](/audio-paper-digest-blog/posts/2026-05-03-entropy-monitored-kernelized-token-distillation)

🔥 **8.0/10** | 前25% | #音视频 | #知识蒸馏 | #多模态模型 #模型评估

👥 **作者与机构**

- 第一作者：Hyoungseob Park（Yale University）
- 通讯作者：未明确说明，但Alex Wong（Yale University）为最后作者，通常为通讯作者。
- 作者列表：Hyoungseob Park（Yale University）、Lipeng Ke（Amazon AGI）、Pritish Mohapatra（Amazon AGI）、Huajun Ying（Amazon AGI）、Sankar Venkataraman（Amazon AGI）、Alex Wong（Yale University）

💡 **毒舌点评**

亮点在于“核化标记蒸馏（KTD）”提供了一个优雅的视角：不模仿教师特征，而是模仿特征间的结构关系，从而自然解耦了教师与学生的架构差异。然而，熵监控机制虽然有效，但其引入的额外线性探测头增加了训练阶段的复杂性，且其有效性高度依赖于“熵与信息量成反比”的假设，在回归任务中需要重新设计（论文提及但未验证），限制了其即插即用的普适性。

🔗 **开源详情**

- 代码：论文在“REPRODUCIBILITY STATEMENT”中明确承诺“将发布代码和预训练权重”，但未提供具体的代码仓库链接（如GitHub）。
- 模型权重：同上，承诺发布但未提供下载链接。
- 数据集：使用公开数据集VGGSound和AVS-Bench，并给出了获取和划分信息。
- Demo：未提及。
- 复现材料：提供了非常详细的实验设置，包括模型架构规格（表14）、所有超参数（学习率、损失权重等）、训练策略、评估指标、数据增强方法，以及关键的消融实验设计，复现信息充分。
- 论文中引用的开源项目：论文依赖或对比了以下开源工作：
    - 教师模型：CAVMAE (Gong et al., 2022b)， UFE-AVS (Liu et al., 2024a)。
    - 数据集：VGGSound (Chen et al., 2020)， AVS-Bench (Zhou et al., 2022c)。
    - 基线方法：KD (Hinton et al., 2015)， AT (Zagoruyko & Komodakis, 2016)， SPKD (Tung & Mori, 2019)， MTST (Choi et al., 2023)， VKD (Miles et al., 2024)。
- 开源状态：根据当前文本，代码和模型权重处于“承诺发布”状态，尚未提供直接链接。论文中未提及开源计划的其他部分（如Demo）。

📌 **核心摘要**

1.  解决的问题：大型音视频模型参数量巨大，难以部署到边缘设备。现有知识蒸馏方法要么需要教师与学生模型架构/维度匹配（潜层蒸馏），要么性能损失较大（输出蒸馏），无法灵活高效地进行压缩。
2.  方法核心：提出“核化标记蒸馏（KTD）”。该方法不直接蒸馏潜层嵌入或模型输出，而是蒸馏同一模态内，不同标记（token）嵌入向量两两之间的相似性关系（通过计算Gram矩阵实现）。这避免了特征维度匹配问题。进一步，提出“熵监控（Entropy-Monitor）”，通过为每个模态添加一个分类头，计算其预测熵，并以此作为权重自适应地调制KTD损失，使学生模型更专注于从信息量高的模态学习。
3.  与已有方法相比新在哪里：1）与基于输出的蒸馏（如KD）相比，KTD在潜层空间操作，能传递更丰富的结构信息。2）与基于潜层特征的蒸馏（如AT， 或需要投影层的VKD）相比，KTD无需匹配维度或增加额外投影层，是架构无关的。3）与最接近的MTST方法相比，KTD直接对齐原始的相似性得分矩阵（通过Huber损失），而非像MTST那样对相似性得分进行Softmax归一化和随机掩码，从而保留了更完整的教师信息。
4.  主要实验结果：在VGGSound音视频事件分类上，使用仅6%参数的ViT-Tiny学生模型，EM-KTD+KD方法保留了教师模型96.9%的准确率（62.0% vs. 63.9%）。在AVS-Bench音视频分割任务上，学生模型（视觉编码器参数为教师的4.5%）在S4任务上保留了教师97.1%的性能，在MS3任务上甚至有所超越。消融实验表明，RBF核优于线性核和多项式核；熵监控对KD和KTD均有提升。
5.  实际意义：为在资源受限的边缘设备上部署强大的音视频理解模型提供了一种高效的压缩方案，且该方法具有架构通用性，理论上可扩展到其他多模态任务。
6.  主要局限性：KTD的计算复杂度为O(N^2)，其中N是标记数量。虽然论文通过实例内计算和滑动窗口策略来缓解，但相比线性复杂度的方法仍有开销。熵监控的引入增加了训练阶段的模块和计算。此外，方法的验证范围目前集中在音视频分类和分割，其在更复杂的多模态生成或理解任务上的效果有待探索。

---

### 🥈 [JavisDiT++: Unified Modeling and Optimization for Joint Audio-Video Generation](/audio-paper-digest-blog/posts/2026-05-03-javisdit-unified-modeling-and-optimization-for)

✅ **7.5/10** | 前25% | #音视频 | #扩散模型 #流匹配 | #扩散模型 #流匹配

👥 **作者与机构**

- 第一作者：Kai Liu（浙江大学）
- 通讯作者：Hao Fei（新加坡国立大学）
- 作者列表：Kai Liu（浙江大学）、Yanhao Zheng（浙江大学）、Kai Wang（多伦多大学）、Shengqiong Wu（新加坡国立大学）、Rongjunchen Zhang（HiThink Research）、Jiebo Luo（罗切斯特大学）、Dimitrios Hatzinakos（多伦多大学）、Ziwei Liu（南洋理工大学）、Hao Fei（新加坡国立大学）、Tat-Seng Chua（新加坡国立大学）

💡 **毒舌点评**

亮点在于提出了简洁而高效的TA-RoPE策略，通过位置编码直接实现了音视频的帧级同步，避免了复杂的显式对齐模块。短板则在于，尽管在JavisBench上表现优异，但模型规模（2.1B）和训练数据规模（~1M）相对于顶尖商业模型（如Veo-3）仍有明显差距，限制了其在更复杂场景下的表现和泛化潜力。

🔗 **开源详情**

-   代码：论文明确承诺开源，提供了项目主页链接 https://JavisVerse.github.io/JavisDiT2-page。
-   模型权重：论文明确承诺开源预训练模型。
-   数据集：论文明确承诺开源处理后的训练数据和评估基准。
-   Demo：未提及。
-   复现材料：论文附录提供了极其详细的模型配置、三阶段训练细节、评估指标说明、数据来源与处理流程、消融实验设置等，复现信息充分。
-   论文中引用的开源项目：Wan2.1-1.3B-T2V（主干模型），AudioLDM2（音频VAE），FunASR（语音检测），OpenSora（数据过滤工具），ImageBind， CLIP， CLAP， VideoAlign， AudioBox， Synchformer（奖励模型/评估工具）。

📌 **核心摘要**

这篇论文旨在解决现有开源联合音视频生成（JAVG）方法在生成质量、时间同步性和人类偏好对齐方面的不足。其核心方法是提出JavisDiT++框架，主要包含三项技术：1）模态特定混合专家（MS-MoE）架构，通过共享注意力层进行跨模态交互，并通过独立的模态FFN增强单模态生成质量；2）时间对齐旋转位置编码（TA-RoPE），为音视频令牌分配在时间维度上对齐但空间维度上不重叠的位置ID，实现显式的帧级同步；3）音频-视频直接偏好优化（AV-DPO），首次将偏好学习引入JAVG，使用多个奖励模型构建偏好数据对。基于Wan2.1-1.3B-T2V构建的模型，在仅使用约1M公开数据训练后，在JavisBench基准测试的所有维度（质量、一致性、同步性）上均取得了最先进的性能，显著优于JavisDiT和UniVerse-1等先前开源方法。例如，在240p4s视频生成任务上，其FVD为141.5，FAD为5.5，DeSync为0.832。该工作的实际意义是为原生联合音视频生成领域设立了一个新的里程碑，并提供了开源的模型和工具。主要局限性包括训练数据规模相对较小（~1M）、模型规模有限（2.1B），以及对可控生成和更广泛跨模态任务的支持尚待探索。

---

