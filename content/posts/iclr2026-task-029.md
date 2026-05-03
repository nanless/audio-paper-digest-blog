---
title: "ICLR 2026 - 语音识别 论文列表"
date: 2026-05-04
draft: false
tags: ["语音识别"]
categories: [iclr-2026]
description: "共 5 篇 ICLR 2026 语音识别 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音识别

共 **5** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [CTC-DRO: Robust Optimization for Reducing Language Dispariti](/audio-paper-digest-blog/posts/2026-05-04-ctc-dro-robust-optimization-for-reducing-language) | 8.5分 | 前25% |
| 🥈 | [Speech-to-LaTeX: New Models and Datasets for Converting Spok](/audio-paper-digest-blog/posts/2026-05-04-speech-to-latex-new-models-and-datasets-for) | 8.0分 | 前25% |
| 🥉 | [Pay Attention to CTC: Fast and Robust Pseudo-Labelling for U](/audio-paper-digest-blog/posts/2026-05-04-pay-attention-to-ctc-fast-and-robust-pseudo) | 7.5分 | 前25% |
| 4. | [SumRA: Parameter Efficient Fine-tuning with Singular Value D](/audio-paper-digest-blog/posts/2026-05-04-sumra-parameter-efficient-fine-tuning-with) | 7.5分 | 前25% |
| 5. | [Confident and Adaptive Generative Speech Recognition via Ris](/audio-paper-digest-blog/posts/2026-05-04-confident-and-adaptive-generative-speech) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [CTC-DRO: Robust Optimization for Reducing Language Disparities in Speech Recognition](/audio-paper-digest-blog/posts/2026-05-04-ctc-dro-robust-optimization-for-reducing-language)

🔥 **8.5/10** | 前25% | #语音识别 | #鲁棒性 | #多语言 #公平性

👥 **作者与机构**

- 第一作者：Martijn Bartelds（斯坦福大学计算机系）
- 通讯作者：未明确说明，但论文中提供的联系邮箱为 bartelds@stanford.edu。
- 作者列表：Martijn Bartelds（斯坦福大学计算机系）、Ananjan Nandi（斯坦福大学计算机系）、Moussa Koulako Bala Doumbouya（斯坦福大学计算机系）、Dan Jurafsky（斯坦福大学计算机系）、Tatsunori Hashimoto（斯坦福大学计算机系）、Karen Livescu（丰田技术学院芝加哥分校）

#

💡 **毒舌点评**

这篇论文巧妙地将通用的鲁棒优化理论（Group DRO）与具体的损失函数特性（CTC）相结合，针对性地解决了“理论很美好，实践不匹配”的痛点。消融实验和组权重分析图直观地展示了方法的有效性，证明了作者对问题的深刻理解。不过，虽然最差语言性能大幅提升，但绝对数值（如部分语言CER仍高达60-70%）表明多语言ASR的“公平”之路依然漫长，该方法更像是一个重要的进步而非终极方案。

#

🔗 **开源详情**

- 代码：提供公开代码仓库链接：https://github.com/Bartelds/ctc-dro
- 模型权重：论文中承诺“our code and newly trained models are publicly available”，表明将公开训练好的模型权重。
- 数据集：使用公开基准数据集ML-SUPERB 2.0，并在附录中提供了所用语言集的详细构成。
- Demo：论文中未提及在线演示。
- 复现材料：提供了非常详细的实验设置描述（见Section 4, Appendix F, G, H），包括超参数选择、��练时间、批量时长统计等，有助于复现。
- 引用的开源项目/工具：依赖预训练模型 XLS-R 和 MMS。实验框架可能基于或参考了 ESPnet 工具包（致谢中提及）。数据处理和评估可能使用了标准语音处理工具（如计算CER）。

📌 **核心摘要**

1.  问题：现代多语言自动语音识别（ASR）模型在不同语言上的性能存在显著差异。标准的Group DRO方法旨在提升最差组的性能，但在ASR中因CTC损失的特性（随输入长度、语言声学特性变化）而失效，导致组间损失不可比，Group DRO会过度强调那些因“难测度”而非“真正性能差”而具有高损失的语言。
2.  方法：本文提出CTC-DRO算法，包含两个核心组件：a) 长度匹配批量处理：构建总音频时长相近的单语言批次，以计算更公平的组级CTC损失和。b) 平滑最大化目标：修改Group DRO的权重更新规则，引入平滑参数α，防止权重过度集中于具有持续高损失的组。
3.  创新：与标准Group DRO相比，CTC-DRO首次系统性地解决了CTC损失固有的不可比性问题。与简单的损失归一化（如按长度或标签数归一化）相比，它从批量采样和优化目标两个层面进行校正，实验表明简单归一化无效。
4.  结果：在ML-SUPERB 2.0基准的5个六语言集上，CTC-DRO在XLS-R和MMS两个预训练模型上均一致性优于基线模型和标准Group DRO。它能将最差语言的字符错误率（CER）降低高达47.1%，同时将平均CER降低高达32.9%。消融实验（见表3）证实，移除任何一个组件都会导致性能大幅下降。

    | 模型 | 设置 | 方法 | 最差语言CER (↓) | 平均CER (↓) |
    | :--- | :--- | :--- | :--- | :--- |
    | XLS-R | Set 1 (Balanced) | Baseline | 64.9 (CMN) | 25.2 |
    | | | CTC-DRO | 57.6 (NAN) | 22.5 |
    | MMS | Set 5 (Balanced) | Baseline | 90.0 (JPN) | 26.0 |
    | | | CTC-DRO | 57.5 (JPN) | 24.3 |
    | XLS-R | Set 2 (Additional Data) | Baseline | 97.2 (YUE) | 28.0 |
    | | | CTC-DRO | 51.4 (YUE) | 18.8 |

    （表1：关键实验结果摘录，展示在部分设置下，CTC-DRO相比基线在最差语言和平均CER上的显著提升）

5.  意义：该方法计算开销极小，可轻松集成到现有训练流程中，为提升多语言ASR的公平性和可用性提供了实用方案，对惠及低资源语言用户有直接价值。
6.  局限：尽管性能差距被缩小，但不同语言间的性能差异依然显著。实验的多为相对小规模（6-18种语言）的设置，其在大规模（数百种）语言上的效果有待进一步验证。

#

---

### 🥈 [Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences](/audio-paper-digest-blog/posts/2026-05-04-speech-to-latex-new-models-and-datasets-for)

🔥 **8.0/10** | 前25% | #语音识别 | #多模态模型 | #端到端 #多语言

👥 **作者与机构**

- 第一作者：Dmitrii Korzh（AXXX， Moscow, Russia； MTUCI， Moscow, Russia）
- 通讯作者：未说明（论文未明确标注）
- 作者列表：
  - Dmitrii Korzh（AXXX， MTUCI）
  - Dmitrii Tarasov（FusionBrain Lab， AXXX； HSE University）
  - Artyom Iudin（AXXX， MTUCI）
  - Elvir Karimov（MTUCI， Applied AI Institute）
  - Matvey Skripkin（FusionBrain Lab， Applied AI Institute）
  - Nikita Kuzmin（MTUCI， Applied AI Institute）
  - Andrey Kuznetsov（FusionBrain Lab， Innopolis University）
  - Oleg Y. Rogov（AXXX， MTUCI， Applied AI Institute）
  - Ivan Oseledets（AXXX， Moscow State University）
- 机构信息：涉及多家莫斯科的科研机构，包括AXXX（具体全称论文未说明）、MTUCI、FusionBrain Lab、HSE University、Applied AI Institute、Innopolis University以及Moscow State University。

💡 **毒舌点评**

亮点：论文最大的贡献在于“填坑”——为长期缺乏公开数据和基准的“语音转LaTeX”任务，提供了迄今最完整、最大规模的开源数据集与评估体系，这对社区而言是“基建级”贡献。  
短板：在方法创新上显得保守，主要依赖对现有ASR、LLM和Audio-LLM（如SALMONN）的微调与拼接，缺乏针对数学语音独特性（如符号歧义、嵌套结构）设计的端到端模型或专用编码器，略显“集成有余，创造不足”。

🔗 **开源详情**

- 代码：论文提供了代码仓库链接：`https://github.com/dkorzh10/speech2latex`。
- 模型权重：论文中未明确提及是否公开训练好的模型权重。
- 数据集：论文明确声明并提供了首个大规模开源S2L数据集，托管于HuggingFace：`https://huggingface.co/datasets/marsianin500/Speech2Latex`，包含66k人工和571k合成音频样本。
- Demo：论文中未提及提供在线演示。
- 复现材料：论文在附录中详细列出了训练超参数（优化器、学习率、批次大小、LoRA配置）、硬件配置（A100, H100 GPU）以及数据切分策略，复现信息较为充分。
- 引用的开源项目：依赖了多个开源工具和模型，包括：
    - ASR模型：Whisper (OpenAI)
    - Audio-LLM：SALMONN, Qwen-Audio, Flamingo-3, Gemma-3n
    - LLM：Qwen2.5系列, LLaMA
    - TTS模型：XTTSv2
    - 工具：KaTeX (LaTeX标准化), LoRA (高效微调)
- 论文中未提及开源计划：模型权重的公开计划未说明。

📌 **核心摘要**

1.  问题：将口语化的数学表达式和句子准确转换为LaTeX格式是一个挑战，涉及语音识别、符号歧义消解和结构化表示生成。现有工作存在依赖多重转录、仅处理孤立公式、缺乏多语言支持、未提供训练数据等问题。
2.  方法核心：提出并构建了首个大规模、多语言（英/俄）的Speech-to-LaTeX（S2L）数据集，包含66k人工标注和571k合成音频。同时，评估了两类方法：基于Whisper的ASR后接LLM（如Qwen2.5）的ASR后处理，以及直接使用Audio-LLM（如SALMONN）的多模态端到端方法。
3.  新意：主要新意在于数据集建设（规模、质量、多语言）和建立首个标准化基准（S2L-equations， S2L-sentences），而非提出全新的模型架构。首次系统对比了ASR后处理与端到端Audio-LLM在该任务上的表现。
4.  主要实验结果：
    - 在自建的S2L-equations基准上，最佳模型（SALMONN-13B）的字符错误率（CER）为17.5%，而作为基线的MathSpeech模型在该测试集上CER高达64.0%。
    - 在作者提出的S2L-sentences基准（含上下文的数学句子）上，最佳模型的公式部分CER为39.7%，揭示了该任务的更大难度。
    - 消融实验表明，混合（人工+合成）数据训练通常能取得最佳效果，且模型在俄语上的表现常优于英语。

| 模型 | 训练数据 | 测试集 | CER (%) | TeXBLEU |
| :--- | :--- | :--- | :--- | :--- |
| MathSpeech | MS-train | S2L-equations (Eng) | 64.04 | 83.71 |
| Qwen2.5-0.5B | Mix-full | S2L-equations (Eng) | 27.21 | 90.20 |
| SALMONN-13B | Mix-full | S2L-equations (Eng) | 17.50 | 93.68 |
| (来源：论文表2、表4) | | | | |

5.  实际意义：为自动课堂笔记生成、数学文献语音辅助等应用奠定了基础。公开的数据集和代码将加速该垂直领域的研究。
6.  主要局限性：数据集未完全模拟真实讲座场景（如口述不完整、结合板书）；模型在面对发音歧义和深层嵌套结构时仍会出错；合成数据虽有助于增强，但其复杂度仍低于真实人声。

---

### 🥉 [Pay Attention to CTC: Fast and Robust Pseudo-Labelling for Unified Speech Recognition](/audio-paper-digest-blog/posts/2026-05-04-pay-attention-to-ctc-fast-and-robust-pseudo)

✅ **7.5/10** | 前25% | #语音识别 | #半监督学习 | #音视频 #自监督学习

👥 **作者与机构**

- 第一作者：Alexandros Haliassos（NatWest AI Research， Imperial College London）
- 通讯作者：Alexandros Haliassos（alexandros.haliassos@natwest.com）
- 作者列表：Alexandros Haliassos（NatWest AI Research； Imperial College London）、Rodrigo Mira（NatWest AI Research）、Stavros Petridis（NatWest AI Research； Imperial College London）

💡 **毒舌点评**

这篇论文的巧妙之处在于，它利用了CTC和注意力机制各自在鲁棒性和表达能力上的“不对称优势”，通过一种成本极低的“教师强制”手段进行嫁接，实现了训练速度翻倍的同时，还意外收获了更强的跨域稳定性。但需要警惕的是，其核心收益高度依赖于LRS3这类相对“干净”且标准的TED演讲数据，在真正嘈杂、说话人风格多变的工业场景（如会议记录、客服电话）中，其声称的鲁棒性优势是否能完全兑现，还需打上一个问号。

🔗 **开源详情**

- 代码：论文中提及提供了代码仓库（https://github.com/ahaliassos/usr），用于复现实验。
- 模型权重：论文中未明确提及是否公开预训练或最终模型的权重。
- 数据集：论文使用了多个公开数据集（LRS3, LRS2, VoxCeleb2, AVSpeech, LibriSpeech, WildVSR），并给出了下载和筛选的引用，但具体的处理脚本是否开源未提及。
- Demo：未提及。
- 复现材料：论文在附录A中提供了非常详细的实验设置，包括数据集描述、模型超参数（表5-6）、训练细节（优化器、学习率、调度、数据增强、硬件资源），以及代码库链接，为复现提供了充分的信息。
- 论文中引用的开源项目：AV-HuBERT， BRAVEn， USR， SentencePiece， ESPnet。

📌 **核心摘要**

1. 解决的问题：统一语音识别（USR）框架通过单一模型处理音频、视觉和音视频语音识别，但存在两个关键瓶颈：自回归伪标签生成导致训练效率低下；CTC和注意力分支的解耦训练使得模型在面对序列更长、有噪声或跨数据集等分布外（OOD）输入时，容易因自强化错误而鲁棒性不足。
2. 方法核心：提出USR 2.0，其核心是CTC驱动的教师强制。教师模型首先对无标注数据进行CTC贪心解码，得到伪标签序列，然后将其作为输入，通过一次前向传播（而非自回归生成）直接生成注意力伪标签。学生解码器在训练时同时预测这两种对齐的伪标签。此外，引入混合采样策略，以50%的概率交替使用上述CTC驱动模式和原始自回归模式，以缓解训练与推理之间的不匹配。
3. 创新点：a) CTC驱动的教师强制：用快速、鲁棒的CTC伪标签替代慢速、脆弱的自回归解码，为注意力分支提供训练目标，大幅加速伪标签生成。b) 联合预测与对齐：由于CTC和注意力伪标签长度对齐，学生解码器可以在一次前向传播中同时学习预测两者，结合了CTC的鲁棒性和注意力的表达力。c) 混合采样策略：简单有效地平衡了效率、鲁棒性与训练-测试一致性。
4. 主要实验结果：
    - 训练效率：相比USR，训练时间缩短约一半。
    - 分布外鲁棒性：在VoxCeleb2长序列（>400帧）上，USR 2.0的AVSR WER显著低于USR和其他基线。在不同噪声等级（SNR从10dB到-5dB）下，USR 2.0在ASR和AVSR任务上均优于基线。
    - 跨数据集性能：在LibriSpeech（ASR）、WildVSR（VSR）和AVSpeech（AVSR）上，USR 2.0（贪心解码）的WER大幅低于USR和AV-HuBERT等基线。
    - 分布内性能与SOTA：在LRS3/LRS2/WildVSR上达到SOTA。例如，在LRS3高资源设置下，Huge模型（USR 2.0）的VSR/A/AV WER为17.6%/0.9%/0.8%。
    - 关键消融：表4显示，CTC驱动模式下，解码器同时预测CTC和注意力伪标签对OOD性能至关重要；混合采样概率（图4）影响ID和OOD性能的权衡。

| 数据集 | 模型 | 任务 | 指标 | 数值 | 说明 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| LRS3 (低资源) | USR 2.0 (Base) | AVSR | WER (%) | 2.9 | 对比USR的3.0 |
| LRS3 (高资源) | USR 2.0 (Large) | AVSR | WER (%) | 2.2 | 对比USR的2.4 |
| LRS3 | USR 2.0 (Huge) | VSR/ASR/AVSR | WER (%) | 17.6 / 0.9 / 0.8 | SOTA，与使用Whisper的大规模监督模型可比 |
| LibriSpeech (OOD) | USR 2.0 (Base) | ASR | WER (%) | 15.4 | 对比USR的25.3 |
| WildVSR (OOD) | USR 2.0 (Base) | VSR | WER (%) | 73.7 | 对比USR的80.0 |

5. 实际意义：USR 2.0通过提升训练效率和鲁棒性，使得训练一个强大的、统一的多任务语音识别模型更加可行和经济。这降低了部署成本，并增强了模型在真实世界复杂环境中的适用性。
6. 主要局限性：a) 理论疑虑：CTC驱动教师强制生成的注意力伪标签在序列层面可能不连贯（如图7所示），虽然论文论证了其在训练中有效，但这仍是一个理论上的弱点。b) 混合采样策略简单：固定0.5概率虽有效，但未深入探索自适应调度（附录提及效果类似）。c) 场景验证：主要验证在英语TED演讲和电视节目数据上，在更极端的噪声、方言或低资源语言场景下的有效性有待证明。

---

### 4. [SumRA: Parameter Efficient Fine-tuning with Singular Value Decomposition and Summed Orthogonal Basis](/audio-paper-digest-blog/posts/2026-05-04-sumra-parameter-efficient-fine-tuning-with)

✅ **7.5/10** | 前25% | #语音识别 | #参数高效微调 | #多语言 #低资源

👥 **作者与机构**

- 第一作者：Chin Yuen Kwok（南洋理工大学数字信任中心、南洋理工大学计算与数据科学学院）
- 通讯作者：Yongsen Zheng（南洋理工大学数字信任中心、南洋理工大学计算与数据科学学院）
- 作者列表：Chin Yuen Kwok（南洋理工大学数字信任中心、南洋理工大学计算与数据科学学院）、Yongsen Zheng（南洋理工大学数字信任中心、南洋理工大学计算与数据科学学院）、Jia Qi Yip（南洋理工大学计算与数据科学学院）、Kwok-Yan Lam（南洋理工大学数字信任中心、南洋理工大学计算与数据科学学院）、Eng Siong Chng（南洋理工大学数字信任中心、南洋理工大学计算与数据科学学院）

💡 **毒舌点评**

本文提出的SumRA通过一个直观且数学上优雅的“求和正交基”初始化策略，显著提升了LoRA在低资源多语言ASR任务上的性能和参数效率，是“站在巨人肩膀上”的务实创新。然而，该方法在NLP基准任务（GLUE）上效果不佳，这暴露了其可能更依赖于对预训练权重中“全局知识”（如口音、风格）的调整，而非学习全新的任务决策边界，其泛化价值因此打了一定折扣。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及。
- 数据集：使用了Common Voice数据集，未提及是否提供处理好的子集；原始数据集为公开数据集。
- Demo：未提供在线演示。
- 复现材料：提供了详细的训练配置（如优化器AdamW、学习率调度ReduceLROnPlateau变体、batch size=4、epochs=2、验证频率、模型冻结策略等）。
- 论文中引用的开源项目：依赖Whisper模型和Common Voice数据集。

📌 **核心摘要**

本文旨在解决为大规模预训练语音模型（如Whisper）适配多种新语言时，现有参数高效微调（PEFT）方法（如LoRA）存在的参数存储开销大、初始化信息利用不充分的问题。核心方法是提出SumRA：在进行奇异值分解（SVD）获取预训练权重矩阵的主要成分后，将多个奇异向量求和来初始化LoRA中的下投影矩阵A的每一行，而非仅使用前r个主成分。这扩展了A所能影响的知识子空间。进一步，论文提出了交错求和和贪婪求和策略，以平衡地分配奇异向量，减少重要向量间的干扰。通过冻结矩阵A，仅训练B，实现了参数减半且共享A。实验在Common Voice数据集的五种低资源语言上进行，将Whisper模型适配至新语言。结果显示，与标准LoRA相比，SumRA在参数减少50% 的情况下，词错误率（WER）平均降低约14%（如从14.42%降至12.41%），并优于PiSSA、CorDA等其他SVD初始化基线。该工作的实际意义在于为大规模、多任务的语音模型部署提供了更高效的微调方案。主要局限性在于其优势主要体现在需要更新全局属性的语音任务上，对于需要学习局部决策边界的NLP任务效果有限。

主要实验结果表格 (Whisper-large-v2, Rank=32):

| 方法 | 额外参数 | eo | ia | fy-NL | mhr | kmr |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| LoRA (基线) | 34.3M | 14.42 | 8.67 | 24.75 | 32.39 | 37.72 |
| PiSSA | 34.3M | 13.00 | 8.82 | 22.43 | 29.97 | 34.26 |
| CorDA | 34.3M | 13.13 | 9.18 | 22.96 | 29.20 | 36.33 |
| SumRA (ours) | 17.6M | 12.41 | 8.17 | 22.27 | 27.19 | 34.21 |

表中数值为词错误率（WER，%），越低越好。

![不同求和策略对比](icassp-img://v23Pqcm6qp/8.png)
图展示了不同求和策略（块求和、交错求和、贪婪求和）的消融实验结果。交错求和和贪婪求和显著优于块求和，验证了均匀分布奇异向量的重要性。

---

### 5. [Confident and Adaptive Generative Speech Recognition via Risk Control](/audio-paper-digest-blog/posts/2026-05-04-confident-and-adaptive-generative-speech)

✅ **7.0/10** | 前25% | #语音识别 | #风险控制 | #大语言模型 #自适应方法

👥 **作者与机构**

- 第一作者：Amit Damri（特拉维夫大学电气与计算机工程学院）
- 通讯作者：Bracha Laufer-Goldshtein（特拉维夫大学电气与计算机工程学院）
- 作者列表：Amit Damri（特拉维夫大学电气与计算机工程学院）、Bracha Laufer-Goldshtein（特拉维夫大学电气与计算机工程学院）

💡 **毒舌点评**

论文的亮点在于将分布无关的统计风险控制框架（LTT）巧妙地应用于动态调整语音识别后处理中的假设集大小，思路严谨且实验验证扎实，实现了显著的计算节省（最高达52%）同时保持甚至提升性能。然而，其核心创新是优化现有流程的“前置过滤器”，而非提升GER模型本身的纠错能力，且LTT框架的保守性（高成功率）在实际部署中可能意味着未能充分利用其声称的“最小化”假设集潜力，理论收益与实际收益之间存在可探讨的差距。

🔗 **开源详情**

- 代码：提供了代码仓库链接：https://github.com/amitdamritau/adaptive-ger
- 模型权重：论文中未提及是否公开微调后的LLM权重。
- 数据集：使用公开的HyPoradise基准数据集（TedLium-3, CHiME-4, CommonVoice），论文描述了数据获取和划分方式。
- Demo：论文中未提及在线演示。
- 复现材料：附录C详细说明了LLM训练配置（优化器、学习率、LoRA参数、批量大小、提示模板等）；附录A提供了分数归一化、风险校准等实现的详细说明；附录D讨论了不同风险控制框架的实现。
- 依赖的开源项目/模型：Whisper（用于ASR解码）、LLaMA-2（作为LLM骨干）、LoRA/PEFT库（用于高效微调）、evaluate包（用于计算WER）。

📌 **核心摘要**

1. 问题：当前基于大语言模型（LLM）的生成式语音识别错误纠正（GER）方法使用固定的N-best假设集，无论音频输入难易程度如何。这会导致对简单音频计算资源浪费，或对复杂音频引入噪声假设，且缺乏性能保证。
2. 方法核心：提出一个自适应框架，利用ASR模型的置信度分数，并结合Learn then Test（LTT）风险控制理论，动态为每个输入选择一个足够小且满足预期相对性能损失（相对于使用固定集的最佳可能性能）的假设子集。
3. 与已有方法相比新在哪里：首次将LTT风险控制应用于GER任务，取代了固定的N值选择。该框架能根据输入难度分配计算资源，并提供了高概率的性能上界保证，这是传统方法所不具备的。
4. 主要实验结果：在三个HyPoradise数据集上进行实验。与使用固定5个假设的GER基线相比，本方法在保持相当或略优词错率（WER）的同时，平均假设集规模显著减小。例如，在TedLium-3上，WER从7.53%降至7.52%，假设集规模减少50%；在CommonVoice上，WER从8.32%增至8.51%，假设集规模减少34%。风险控制成功率（满足R(̂λ) ≤ α）在所有试验中均超过理论下限1-δ，验证了其理论保证。
    | 数据集 | GER基线WER(%) | 本方法WER(%) | 平均假设集大小 | 相对大小减少 |
    | :--- | :---: | :---: | :---: | :---: |
    | TedLium-3 | 7.53 | 7.52 | 2.3 | -50.08% |
    | CHiME-4 | 6.24 | 6.37 | 2.7 | -22.68% |
    | CommonVoice | 8.32 | 8.51 | 1.9 | -34.2% |
5. 实际意义：为语音识别后处理提供了一种计算高效且具有理论保障的部署方案，尤其适用于需要平衡精度与延迟/能耗的端侧或大规模服务场景。
6. 主要局限性：需要额外的校准数据集和步骤；框架性能依赖于对分数函数参数（γ, τ）的预选择或通过更复杂的Pareto Testing进行联合优化；理论保证虽然严格，但在实际中可能表现为偏保守的阈值选择。

---

