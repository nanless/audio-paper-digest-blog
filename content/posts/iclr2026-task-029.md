---
title: "ICLR 2026 - 语音识别 论文列表"
date: 2026-05-03
draft: false
tags: ["语音识别"]
categories: [iclr-2026]
description: "共 6 篇 ICLR 2026 语音识别 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音识别

共 **6** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [A Brain-Inspired Gating Mechanism Unlocks Robust Computation](/audio-paper-digest-blog/posts/2026-05-03-a-brain-inspired-gating-mechanism-unlocks-robust) | 8.0分 | 前25% |
| 🥈 | [Speech-to-LaTeX: New Models and Datasets for Converting Spok](/audio-paper-digest-blog/posts/2026-05-03-speech-to-latex-new-models-and-datasets-for) | 8.0分 | 前25% |
| 🥉 | [SumRA: Parameter Efficient Fine-tuning with Singular Value D](/audio-paper-digest-blog/posts/2026-05-03-sumra-parameter-efficient-fine-tuning-with) | 8.0分 | 前25% |
| 4. | [Pay Attention to CTC: Fast and Robust Pseudo-Labelling for U](/audio-paper-digest-blog/posts/2026-05-03-pay-attention-to-ctc-fast-and-robust-pseudo) | 7.5分 | 前25% |
| 5. | [CTC-DRO: Robust Optimization for Reducing Language Dispariti](/audio-paper-digest-blog/posts/2026-05-03-ctc-dro-robust-optimization-for-reducing-language) | 7.5分 | 前25% |
| 6. | [Confident and Adaptive Generative Speech Recognition via Ris](/audio-paper-digest-blog/posts/2026-05-03-confident-and-adaptive-generative-speech) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [A Brain-Inspired Gating Mechanism Unlocks Robust Computation in Spiking Neural Networks](/audio-paper-digest-blog/posts/2026-05-03-a-brain-inspired-gating-mechanism-unlocks-robust)

🔥 **8.0/10** | 前25% | #语音识别 | #脉冲神经网络 | #鲁棒性 #动态系统

👥 **作者与机构**

- 第一作者：Qianyi Bai (天津大学智能与计算学院，天津大学计算机科学与技术学院)
- 通讯作者：Qiang Yu (天津大学智能与计算学院，认知计算与应用天津市重点实验室)
- 作者列表：Qianyi Bai（天津大学智能与计算学院，天津大学计算机科学与技术学院）、Haiteng Wang（天津大学智能与计算学院，天津大学未来技术学院）、Qiang Yu（天津大学智能与计算学院，认知计算与应用天津市重点实验室）

💡 **毒舌点评**

论文的亮点在于将生物学上合理的动态电导机制与工程上的门控思想巧妙结合，并提供了从理论（随机稳定性分析）到实践（噪声与对抗攻击鲁棒性实验）的完整证据链，说服力强。然而，DGN模型引入的额外计算（动态电导的递推计算）在能量效率评估中虽低于LSTM，但仍高于基础LIF模型，其“生物启发”的效率优势在具体硬件实现层面尚待进一步证明，且理论分析的普适性（如对不同噪声类型）仍有探讨空间。

🔗 **开源详情**

- 代码：论文中未提及DGN模型的代码仓库链接。文中提到对比实验使用了公开代码进行复现，但未指明DGN的实现是否开源。
- 模型权重：未提及公开权重。
- 数据集：所用数据集（TI46Alpha, TIDIGITS, SHD, SSC）均为公开标准数据集。
- Demo：未提供在线演示。
- 复现材料：提供了非常详细的训练细节、超参数配置（表5）、噪声生成算法（算法2-4）以及附录中的理论推导和伪代码（算法1），复现指导性很强。
- 论文中引用的开源项目：引用了SpikingJelly（Fang et al., 2023）作为SNN训练基础设施平台，可能在其基础上进行了实验。
- 总体而言，论文在方法描述和实验细节上极为透明，为复现奠定了坚实基础，但未明确承诺开源核心代码。

📌 **核心摘要**

本文针对传统脉冲神经网络（SNN）中泄漏积分发放（LIF）神经元模型过于简化、缺乏生物神经元中固有的动态门控机制，导致其鲁棒性和时序处理能力受限的问题，提出了一种受生物动态电导启发的新型神经元模型——动态门控神经元（DGN）。

该模型的核心创新在于引入了随输入活动动态变化的突触电导项 `CiDi`，与固定的泄漏电导 `gl` 共同构成一个自适应的门控因子 `ρt = φ(1 - gl·Δt - Δt∑CiDi)`。这个因子动态调节膜电位的衰减率，从而实现对输入信息的选择性过滤和对噪声的自适应抑制，功能上类比于LSTM中的门控机制。

与已有工作（如固定的LIF、参数化的ALIF/HeterLIF或静态门控的GLIF）相比，DGN的新颖之处在于：1）其门控机制是动态的、输入依赖的，且具有明确的生物对应物；2）作者提供了理论证明，表明DGN的动态电导作为干扰抑制机制，使其比标准LIF模型具有更强的随机稳定性。

主要实验结果显示，DGN在多个语音相关基准上取得了优异的性能和显著的鲁棒性提升。例如，在TIDIGITS数据集上，前馈DGN网络仅用100个隐藏神经元就达到了98.59%的干净准确率，复发式DGN更是达到了99.10%（表1）。在噪声和对抗攻击下，DGN的鲁棒性远超基线模型。如表2所示，在TIDIGITS数据集的加性噪声（p=0.006）条件下，前馈DGN准确率保持95.34%，而LIF仅为46.83%；在FGSM攻击（ε=0.003）下，前馈DGN准确率为90.35%，LIF仅为39.53%。

本文的实际意义在于，为设计更鲁棒、更具生物合理性的SNN提供了一种新的、有理论支撑的神经元建模范式，有望推动SNN在噪声环境和动态时序任务中的应用。其主要局限性在于：1）动态电导机制增加了少量计算开销（附录A.4.1显示其能量消耗仍远低于LSTM，但高于基础LIF）；2）理论分析基于线性噪声近似，其结论在复杂、非线性扰动下的普适性需进一步验证；3）实验主要集中在语音相关任务，在更广泛的视觉或控制任务上的泛化能力有待探索。

---

### 🥈 [Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences](/audio-paper-digest-blog/posts/2026-05-03-speech-to-latex-new-models-and-datasets-for)

🔥 **8.0/10** | 前25% | #语音识别 | #端到端 | #多语言 #数据集

👥 **作者与机构**

- 第一作者：Dmitrii Korzh (AXXX, Moscow, Russia; MTUCI, Moscow, Russia)
- 通讯作者：未明确说明
- 作者列表：Dmitrii Korzh (AXXX, Moscow, Russia; MTUCI, Moscow, Russia), Dmitrii Tarasov (FusionBrain Lab, AXXX, Moscow, Russia; HSE University, Moscow, Russia), Artyom Iudin (MTUCI, Moscow, Russia), Elvir Karimov (MTUCI, Moscow, Russia; Applied AI Institute, Moscow, Russia), Matvey Skripkin (FusionBrain Lab, AXXX, Moscow, Russia; Applied AI Institute, Moscow, Russia), Nikita Kuzmin (MTUCI, Moscow, Russia; Applied AI Institute, Moscow, Russia), Andrey Kuznetsov (FusionBrain Lab, AXXX, Moscow, Russia; Innopolis University, Innopolis, Russia), Oleg Y. Rogov (AXXX, Moscow, Russia; MTUCI, Moscow, Russia; Applied AI Institute, Moscow, Russia), Ivan Oseledets (AXXX, Moscow, Russia; Moscow State University, Moscow, Russia)

💡 **毒舌点评**

这篇论文最实在的贡献是贡献了一个目前最大规模的开源Speech-to-LaTeX数据集，并围绕它建立了相对全面的基准测试，这对后续研究很有价值；但论文在方法创新性上略显不足，更多是现有ASR后校正与Audio-LLM技术在特定垂直领域的应用和调优，且在模拟真实课堂场景（如伴随板书、不完整表述）的泛化能力上尚未验证。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/dkorzh10/speech2latex。
- 模型权重：论文中未明确提及所有实验模型（如微调后的Qwen2.5, SALMONN）的权重是否公开，仅提到数据集和代码的链接。
- 数据集：公开，可通过Hugging Face获取：https://huggingface.co/datasets/marsianin500/Speech2Latex。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的训练超参数（附录B）、评估指标定义（附录A.2）以及数据集统计信息（附录A.1），复现指导性较强。
- 论文中引用的开源项目：依赖的开源工具/模型包括：Whisper、BEATs、LLaMA、Qwen2.5系列、SALMONN、XTTSv2、KaTeX、Proof-Pile、TextTeller等。

📌 **核心摘要**

1. 解决的问题：将口语化的数学表达式和句子准确转换为结构化的LaTeX符号表示。现有方法存在数据量小、仅支持孤立方程、依赖多阶段ASR转录、缺乏端到端多模态方案等问题。
2. 方法核心：提出并构建了一个大规模的开源S2L数据集（包含英语和俄语），包含超过6.6万个由人标注、57.1万个由TTS合成的音频样本。基于此数据集，评估了多种技术路线：以Whisper为前端的ASR后校正（接微调的LLM，如Qwen2.5）、少样本提示、以及端到端的音频语言模型（如SALMONN）。
3. 与已有方法相比新在哪里：a) 提供了首个大规模、开源、多语言（英/俄）、包含句子级上下文的S2L数据集；b) 首次系统评估并对比了端到端Audio-LLM与ASR后校正流水线在S2L任务上的性能；c) 建立了首个数学句子识别的基准（S2L-sentences）。
4. 主要实验结果：在提出的S2L-equations基准上，最佳的端到端模型（SALMONN-13B）在英语测试集上的方程CER达到17.5%，显著优于此前最佳基线MathSpeech模型的64.0%。在MathSpeech自己的基准测试集上，本文模型（如Qwen2.5）取得了30.0%的CER，与MathSpeech的27.7%相当。在更难的S2L-sentences任务上，最佳模型（SALMONN-13B）的方程CER为39.7%。关键对比数据见下表：

    | 模型 | 在MathSpeech基准上的CER | 在S2L-equations (英语) 上的CER |
    | :--- | :--- | :--- |
    | MathSpeech | 27.7% | 64.0% |
    | Qwen2.5-0.5B (后校正) | 30.0% | 27.2% |
    | SALMONN-13B (端到端) | 27.7% | 17.5% |

5. 实际意义：为教育技术（如讲座自动转录、笔记生成）、无障碍辅助以及多模态AI理解数学内容奠定了数据集和基准基础。
6. 主要局限性：数据集虽大，但未完全覆盖真实课堂的复杂场景（如口语化表述、与视觉内容的结合）；口语数学表达本身存在固有的歧义（如“one over x plus two”的不同LaTeX解读），这限制了评估指标的绝对意义。

---

### 🥉 [SumRA: Parameter Efficient Fine-tuning with Singular Value Decomposition and Summed Orthogonal Basis](/audio-paper-digest-blog/posts/2026-05-03-sumra-parameter-efficient-fine-tuning-with)

🔥 **8.0/10** | 前25% | #语音识别 | #迁移学习 | #多语言 #低资源

👥 **作者与机构**

- 第一作者：Chin Yuen Kwok (南洋理工大学数字信任中心，南洋理工大学计算与数据科学学院)
- 通讯作者：Yongsen Zheng (南洋理工大学数字信任中心，南洋理工大学计算与数据科学学院)
- 作者列表：Chin Yuen Kwok (南洋理工大学数字信任中心，南洋理工大学计算与数据科学学院)、Yongsen Zheng (南洋理工大学数字信任中心，南洋理工大学计算与数据科学学院)、Jia Qi Yip (南洋理工大学计算与数据科学学院)、Kwok-Yan Lam (南洋理工大学数字信任中心，南洋理工大学计算与数据科学学院)、Eng Siong Chng (南洋理工大学计算与数据科学学院)

#

💡 **毒舌点评**

亮点：该方法巧妙地利用了SVD的“全部”信息来初始化一个可共享的固定基，实现了“用更少参数达到更好效果”的目标，其求和策略的提出简洁且具有启发性。短板：论文承认了其方法对“局部适应”（如新增少量专业词汇）任务效果有限，且未能在更广泛的NLP基准（如GLUE）上验证其普适性，限制了其作为通用PEFT方法的声望。

#

🔗 **开源详情**

- 代码：论文中未提及任何代码仓库链接或开源计划。
- 模型权重：未提及公开的经过SumRA适配的模型权重。
- 数据集：使用公开的Common Voice MASR数据集，但论文未提供具体下载或处理脚本。
- Demo：未提供在线演示。
- 复现材料：提供了较完整的训练配置细节（见“训练策略”和“关键超参数”部分），以及所有关键实验数据（表2、3、4），有助于他人复现实验设置。
- 论文中引用的开源项目：
    - 模型：Whisper (Radford et al., 2023)。
    - 数据集：Common Voice (Ardila et al., 2020)。
    - 优化器/调度器：AdamW (Loshchilov & Hutter, 2019), ReduceLROnPlateau (引用了SpeechBrain的实现)。
    - 对比基线方法：LoRA, LoRA-FA, PiSSA, CorDA, VeRA, DoRA。

📌 **核心摘要**

1. 问题：现有的参数高效微调（PEFT）方法，特别是PiSSA，仅使用预训练权重SVD分解中的前几个主导奇异向量来初始化适配矩阵A，这限制了模型知识更新的空间范围，仅能影响模型知识的一小部分。同时，在个性化或大规模多语言部署中，为每个任务/用户存储独立的LoRA适配器会带来高昂的存储成本。
2. 方法核心：提出SumRA，通过将预训练权重的所有奇异向量（经奇异值缩放后）求和到低秩矩阵A的每一行中进行初始化。这使得A矩阵能代表更广泛的知识空间。同时，冻结A矩阵，只更新B矩阵，使得共享的A矩阵可用于所有任务，大幅减少存储开销。
3. 创新点：与已有方法（LoRA随机初始化、PiSSA仅用主导奇异向量）相比，核心创新在于通过求和聚合所有奇异向量信息来初始化A。为平衡重要奇异向量的分配，提出了交错求和（interleave sum）和贪心求和（greedy sum）策略，并证明了后者能最小化最大行负载。
4. 实验结果：在Whisper模型上的多语言ASR实验（Common Voice数据集，5种新语言，每种10小时数据）表明，SumRA在使用50%更少可训练参数（通过冻结A实现）的情况下，持续优于LoRA、LoRA-FA、PiSSA、CorDA等基线。例如，对于Whisper-large-v2（rank=32），SumRA将平均WER从LoRA的14.42%降至12.41%（相对降低约14%），同时参数量从34.3M降至17.6M。

| 方法 | 模型 | LoRA配置(参数/排名) | WER (↓, %) - eo | ia | fy-NL | mhr | kmr |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| LoRA | whisper-large-v2 | 34.3M / 32 | 14.42 | 8.67 | 24.75 | 32.39 | 37.72 |
| SumRA (ours) | whisper-large-v2 | 17.6M / 32 | 12.41 | 8.17 | 22.27 | 27.19 | 34.21 |
表2主要结果摘录

5. 实际意义：为在资源受限环境下（如低数据、高并发部署）适配大型语音模型提供了更优的解决方案，特别适合需要为大量语言或用户个性化部署的场景，能显著降低存储和部署成本。
6. 主要局限性：该方法对需要“局部”知识更新的任务（如添加少量领域术语）效果不明显，实验也表明其在NLP任务（GLUE）上未能带来显著提升。

#

---

### 4. [Pay Attention to CTC: Fast and Robust Pseudo-Labelling for Unified Speech Recognition](/audio-paper-digest-blog/posts/2026-05-03-pay-attention-to-ctc-fast-and-robust-pseudo)

✅ **7.5/10** | 前25% | #语音识别 | #伪标签 | #半监督学习 #多模态模型

👥 **作者与机构**

- 第一作者：Alexandros Haliassos (NatWest AI Research, Imperial College London)
- 通讯作者：Alexandros Haliassos (alexandros.haliassos@natwest.com)
- 作者列表：Alexandros Haliassos（NatWest AI Research 和 Imperial College London）、Rodrigo Mira（NatWest AI Research）、Stavros Petridis（NatWest AI Research 和 Imperial College London）

💡 **毒舌点评**

这篇论文成功地将CTC的“快且稳”特性嫁接到注意力分支的训练中，巧妙地绕开了自回归伪标签的速度瓶颈，是工程思维与学术创新的一次漂亮结合；但美中不足的是，论文将核心创新（CTC条件教师强制）严格限定在了自训练范式内，其在静态数据集离线伪标注或直接推理时的通用性与价值未被充分探讨，使得该技术的想象空间略打折扣。

🔗 **开源详情**

- 代码：论文中未提及本文方法（USR 2.0）的官方代码仓库链接。文中引用了基线方法的代码库（AV-HuBERT， BRAVEn， USR）。
- 模型权重：未提及公开的USR 2.0预训练模型权重。
- 数据集：论文使用的数据集（LRS3， LRS2， VoxCeleb2， AVSpeech， LibriSpeech， WildVSR）均为公开学术数据集，文中提供了获取和使用的详细说明（附录A.1）。
- Demo：未提供在线演示。
- 复现材料：论文附录提供了非常详尽的实验细节，包括数据集描述（A.1）、预处理流程（A.3）、所有模型变体的尺寸参数（A.4， 表5）、完整的训练超参数表（A.5， 表6），以及核心消融实验（C.2）。这些信息足以支撑研究人员复现论文中的主要实验。
- 论文中引用的开源项目：AV-HuBERT (https://github.com/facebookresearch/av_hubert), BRAVEn (https://github.com/ahaliassos/raven), USR (https://github.com/ahaliassos/usr), ESPnet (用于推理解码)。

📌 **核心摘要**

本文针对统一语音识别（USR）框架中，使用自回归（AR）解码生成注意力伪标签（PL）导致的训练速度慢、且模型对长语音和分布偏移（OOD）鲁棒性差的问题，提出了USR 2.0。其核心方法是CTC驱动的教师强制：将教师模型CTC分支的贪婪解码输出，作为条件输入来并行生成注意力分支的伪标签，从而在单次前向传播中完成，避免了耗时的自回归过程。同时，通过混合采样策略，在训练中随机交替使用CTC驱动模式和传统的AR模式，以缓解因训练/推理输入不匹配带来的曝光偏差。与基线USR相比，USR 2.0在训练效率上提升近一倍（见图5），并在多个基准上取得了更优的性能，特别是在长语音（图3）、噪声（表1）和跨数据集（表3）的OOD场景下展现出更强的鲁棒性。例如，在LRS3低资源设置下，其Base模型AVSR WER为2.9%，优于USR的3.0%；在WildVSR上，其Huge模型VSR WER达到38.5%，显著优于之前最优的46.4%。该工作证明了改进伪标签策略能同时提升半监督学习框架的效率、鲁棒性和最终性能。其主要局限性在于，该改进主要针对自训练迭代过程，在非迭代或推理场景下应用有限。

---

### 5. [CTC-DRO: Robust Optimization for Reducing Language Disparities in Speech Recognition](/audio-paper-digest-blog/posts/2026-05-03-ctc-dro-robust-optimization-for-reducing-language)

✅ **7.5/10** | 前25% | #语音识别 | #分布鲁棒优化 | #多语言 #鲁棒性

👥 **作者与机构**

- 第一作者：Martijn Bartelds（斯坦福大学计算机科学系）
- 通讯作者：Karen Livescu（丰田技术研究所芝加哥分校）
- 作者列表：
    - Martijn Bartelds（斯坦福大学计算机科学系，共同第一作者）
    - Ananjan Nandi（斯坦福大学计算机科学系，共同第一作者）
    - Moussa Koulako Bala Doumbouya（斯坦福大学计算机科学系）
    - Dan Jurafsky（斯坦福大学计算机科学系）
    - Tatsunori Hashimoto（斯坦福大学计算机科学系）
    - Karen Livescu（丰田技术研究所芝加哥分校）

💡 **毒舌点评**

亮点：论文精准抓住了将标准群分布鲁棒优化（Group DRO）应用于基于CTC损失的多语言ASR时，因损失值不可比而导致训练失败的核心痛点，并提出了简洁有效的解决方案。  
短板：方法的有效性高度依赖于预定义的语言分组，且仅在ASR任务上验证；虽然代码开源，但核心创新更多是针对特定损失函数的“工程化”优化，缺乏更普适的理论突破。

🔗 **开源详情**

- 代码：是，提供公开代码仓库链接：https://github.com/Bartelds/ctc-dro。
- 模型权重：论文中未提及是否公开预训练或微调后的模型权重。
- 数据集：实验使用公开的ML-SUPERB 2.0基准数据集，并提供了构建特定语言集的详细信息。
- Demo：未提供在线演示。
- 复现材料：论文提供了详尽的复现信息，包括：完整的算法描述（算法1）、实验设置细节（第4节）、超参数搜索空间（ηq, α）、开发集结果以供选择（附录F.1）、数据集统计（附录D）、训练时间（附录I）以及关键的消融实验设计。
- 引用的开源项目：论文基于并比较了公开的预训练模型XLS-R和MMS。实验框架部分参考了ESPnet工具包（致谢中提及）。
- 开源计划：论文中未提及未来的模型权重开源计划。

📌 **核心摘要**

1. 问题：现代深度学习模型在整体上性能良好，但在特定子群（如多语言ASR中的不同语言）上表现持续不佳。标准群分布鲁棒优化（Group DRO）旨在缓解此问题，但在语音识别领域因使用的连接主义时序分类（CTC）损失存在长度缩放和语言声学特性导致的不可比性而失效。
2. 方法核心：提出CTC-DRO算法，包含两个关键改进：a) 长度匹配批处理，使每个语言组的批次具有大致相同的总音频时长，从而缓解CTC损失随输入长度增长的问题；b) 平滑最大化目标，在更新组权重时引入平滑参数，防止对持续高损失的组（可能因其不可比的损失而非真实性能差）过度加权。
3. 与已有方法相比新在哪里：不同于直接对CTC损失进行简单归一化（已被证明无效），CTC-DRO从优化目标层面进行改进。它通过设计新的批采样策略和加权更新规则，使Group DRO能适应CTC损失的特殊性质。
4. 主要实验结果：在ML-SUPERB 2.0基准测试的五个语言集上，CTC-DRO在平衡和非平衡数据设置下，均一致优于基线模型和标准Group DRO模型。其将最差语言的字符错误率（CER）最多降低47.1%，同时将平均CER最多降低32.9%。
5. 实际意义：为构建更公平、更包容的多语言语音识别系统提供了实用的训练方法，有望提升低资源语言的数字可及性，且计算成本增加极小。
6. 主要局限性：性能改善依赖于预定义的语言分组；目前仅在ASR任务上进行验证，其泛化性有待考察；尽管减少了差异，但不同语言间的性能差距依然存在。

---

### 6. [Confident and Adaptive Generative Speech Recognition via Risk Control](/audio-paper-digest-blog/posts/2026-05-03-confident-and-adaptive-generative-speech)

✅ **7.0/10** | 前25% | #语音识别 | #自适应选择 | #大语言模型 #不确定性量化

👥 **作者与机构**

- 第一作者：Amit Damri（特拉维夫大学电气与计算机工程学院）
- 通讯作者：未明确说明（论文中未标注通讯作者符号，根据邮箱格式推断`blaufer@tauex.tau.ac.il`可能对应Bracha Laufer-Goldshtein，但未在文中明确声明）
- 作者列表：Amit Damri（特拉维夫大学电气与计算机工程学院）、Bracha Laufer-Goldshtein（特拉维夫大学电气与计算机工程学院）

💡 **毒舌点评**

这篇论文将“学习然后测试”（LTT）这一风险控制框架巧妙地应用到语音识别后处理的工程优化问题上，想法清晰且有效，成功实现了“少即是多”的计算节省。然而，其核心创新更多是框架的适配与应用，而非新理论的提出，并且自适应选择的性能上限仍受制于LLM本身对N-best列表的理解能力，对于“何时增加假设反而有害”这一关键现象的机理挖掘稍显不足。

🔗 **开源详情**

- 代码：论文提供了代码仓库链接：https://github.com/amitdamritau/adaptive-ger。
- 模型权重：未提及是否公开微调后的LLM权重。
- 数据集：使用了公开基准数据集（TedLium-3， CHiME-4， CommonVoice），论文中说明了获取和预处理方式。
- Demo：未提及。
- 复现材料：论文附录（Appendix C, D）提供了极其详细的LLM训练超参数、LoRA配置、提示模板、风险校准参数选择策略、计算资源需求，以及CRC和Pareto Testing扩展的实现细节，复现材料非常充分。
- 引用的开源项目：Whisper (ASR模型), LLaMA-2 (LLM), PEFT/LoRA (微调库), HyPoradise (基准框架), GenTranslate (翻译任务扩展)。

📌 **核心摘要**

1.  解决什么问题：当前生成式语音识别纠错（GER）方法普遍为每个输入音频固定使用相同大小（N）的ASR假设列表（N-best），这在简单音频上造成计算冗余，在复杂音频上可能因低质量假设引入噪声，且缺乏性能保证。
2.  方法核心：提出一个自适应假设选择框架，利用ASR模型的置信度分数，通过学习然后测试（LTT）风险控制机制，为每个输入动态确定最优的假设集大小。目标是最小化相对最佳性能（Oracle）的词错率（WER）退化。
3.  与已有方法相比新在哪里：首次将风险控制（具体为LTT框架）引入生成式语音识别纠错。不同于固定N的启发式方法，该框架为自适应选择提供了理论上的有限样本性能保证（高概率上界），实现了从固定资源分配到难度感知资源分配的转变。
4.  主要实验结果：在三个不同难度的基准数据集（TedLium-3, CHiME-4, CommonVoice）上，该方法平均减少23%-50%的假设使用量，同时WER与固定N=5的基线持平或略有改善（例如，在TedLium-3上集大小减少50%，WER从7.53%降至7.52%）。成功率实验验证了理论保证的有效性。

| 数据集 | 基线WER (%) | GER (固定N=5) WER (%) | 自适应方法 平均集大小 | 自适应方法 WER (%) | 相对集大小缩减 | 相对WER变化 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TedLium-3 | 9.3 | 7.53 | 2.3 | 7.52 | -50.08% | -0.13% |
| CHiME-4 | 11.49 | 6.24 | 2.7 | 6.37 | -22.68% | +2.06% |
| CommonVoice | 12.44 | 8.32 | 1.9 | 8.51 | -34.2% | +2.28% |

5.  实际意义：显著降低了GER管道的计算成本（假设集处理量），使大规模部署更高效。同时，为自适应系统提供了性能可控的理论框架。
6.  主要局限性：方法依赖于ASR提供的置信度分数的质量；训练LLM时仍使用固定大小的假设集，可能限制了模型对极小或极大动态集的最优利用；性能节省与理论保证之间存在一定权衡（更严格的保证可能导致更保守的选择）。

---

