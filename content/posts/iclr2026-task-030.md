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
| 🥇 | [Speech-to-LaTeX: New Models and Datasets for Converting Spok](/audio-paper-digest-blog/posts/2026-05-04-speech-to-latex-new-models-and-datasets-for) | 8.5分 | 前25% |
| 🥈 | [CTC-DRO: Robust Optimization for Reducing Language Dispariti](/audio-paper-digest-blog/posts/2026-05-04-ctc-dro-robust-optimization-for-reducing-language) | 8.5分 | 前25% |
| 🥉 | [Pay Attention to CTC: Fast and Robust Pseudo-Labelling for U](/audio-paper-digest-blog/posts/2026-05-04-pay-attention-to-ctc-fast-and-robust-pseudo) | 8.0分 | 前25% |
| 4. | [SumRA: Parameter Efficient Fine-tuning with Singular Value D](/audio-paper-digest-blog/posts/2026-05-04-sumra-parameter-efficient-fine-tuning-with) | 7.5分 | 前25% |
| 5. | [Confident and Adaptive Generative Speech Recognition via Ris](/audio-paper-digest-blog/posts/2026-05-04-confident-and-adaptive-generative-speech) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences](/audio-paper-digest-blog/posts/2026-05-04-speech-to-latex-new-models-and-datasets-for)

🔥 **8.5/10** | 前25% | #语音识别 | #语音大模型 | #多语言 #数据集

👥 **作者与机构**

- 第一作者：Dmitrii Korzh (AXXX, Moscow, Russia; MTUCI, Moscow, Russia)
- 通讯作者：未说明
- 作者列表：Dmitrii Korzh (AXXX, MTUCI)， Dmitrii Tarasov (FusionBrain Lab, AXXX; HSE University)， Artyom Iudin (MTUCI)， Elvir Karimov (MTUCI; Applied AI Institute)， Matvey Skripkin (FusionBrain Lab, AXXX; Applied AI Institute)， Nikita Kuzmin (MTUCI; Applied AI Institute)， Andrey Kuznetsov (FusionBrain Lab, AXXX; Innopolis University)， Oleg Y. Rogov (AXXX, MTUCI; Applied AI Institute)， Ivan Oseledets (AXXX; Moscow State University)。

💡 **毒舌点评**

亮点：论文的最大价值在于其完全开源的“基础设施”——一个涵盖6.6万+真实人类录音和57万+合成音频的、标注规范的双语数据集，外加完整的代码和模型权重，这对于一个此前数据匮乏的垂直任务（口语数学转LaTeX）而言是“功德无量”的贡献，直接拉高了该领域的研究门槛。短板：尽管数据集规模大，但其构建（大量TTS合成+GPT生成发音）与真实世界、即兴授课的口语数学表达仍有差距；另外，评估指标（如CER）对于LaTeX这种高度结构化的输出来说，可能无法完全反映其语义等价性（例如`a+b`和`b+a`），尽管作者引入了TeXBLEU进行部分弥补。

🔗 **开源详情**

- 代码：提供代码仓库链接（https://github.com/dkorzh10/speech2latex）。
- 模型权重：论文中提到模型是公开的（如SALMONN），并提供了复现结果的细节。未明确说明所有微调权重是否均上传，但实验设置和代码的开源性使得权重可被轻易复现。
- 数据集：完全开源，托管于Hugging Face（https://huggingface.co/datasets/marsianin500/Speech2Latex）。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详尽的训练超参数（附录B）、评估指标定义、数据集划分统计、消融实验结果以及错误分析，复现指引非常充分。
- 论文中引用的开源项目：使用了Whisper（ASR）、Qwen2.5系列和SALMONN（作为多模态模型）、KaTeX（LaTeX渲染与验证）、XTTSv2（TTS）、LoRA（高效微调）等开源工具和模型。

📌 **核心摘要**

本文针对将口语数学表达式转换为结构化LaTeX格式这一具有挑战性的任务，旨在解决现有方法数据稀缺、依赖多阶段ASR、缺乏多语言支持和端到端模型等问题。核心贡献是构建并开源了首个大规模、多语言的Speech-to-LaTeX（S2L）数据集，包含约6.6万个人工标注和57.1万个合成的音频样本，涵盖英语和俄语的数学方程与句子。方法上，论文系统评估了两种技术路线：1）基于Whisper ASR转录后，用微调的大语言模型（如Qwen2.5系列）进行后校正与转换；2）使用多模态音频大模型（如SALMONN）进行端到端的直接生成。主要实验结果显示，在作者提出的S2L-equations基准测试上，其端到端模型SALMONN-13B取得了17.5%的字符错误率（CER），显著优于MathSpeech基线模型的64.0%；在更难的S2L-sentences基准上，其方程部分CER为39.7%。该工作的实际意义在于为教育技术、学术辅助和科研笔记自动化提供了基础工具和评测标准。主要局限性在于数据集虽然规模大且多样，但合成数据与真实讲座场景的口语表达仍存在差距，且模型性能在处理嵌入在文本中的复杂数学表达式时仍有提升空间。

---

### 🥈 [CTC-DRO: Robust Optimization for Reducing Language Disparities in Speech Recognition](/audio-paper-digest-blog/posts/2026-05-04-ctc-dro-robust-optimization-for-reducing-language)

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

### 🥉 [Pay Attention to CTC: Fast and Robust Pseudo-Labelling for Unified Speech Recognition](/audio-paper-digest-blog/posts/2026-05-04-pay-attention-to-ctc-fast-and-robust-pseudo)

🔥 **8.0/10** | 前25% | #语音识别 | #自监督学习 | #多任务学习 #低资源

👥 **作者与机构**

- 第一作者：Alexandros Haliassos (NatWest AI Research, Imperial College London)
- 通讯作者：未明确说明（根据邮箱信息推测为Alexandros Haliassos）
- 作者列表：Alexandros Haliassos（NatWest AI Research, Imperial College London）、Rodrigo Mira（NatWest AI Research）、Stavros Petridis（NatWest AI Research, Imperial College London）

💡 **毒舌点评**

本文提出的“CTC驱动的教师强制”思想非常巧妙，通过将慢速的自回归伪标签生成过程替换为快速的CTC条件生成，同时利用CTC的鲁棒性来“拯救”在分布偏移下脆弱的注意力解码器，实现了训练加速和鲁棒性提升的双赢。然而，论文在声称“统一模型”的同时，模态特定的编码器和投影层依然存在，虽然共享编码器和解码器，但其“统一”的深度和参数共享程度仍受限；此外，对于已有良好表现的ASR和AVSR任务，半监督学习带来的提升相对VSR更为有限，这可能暗示了伪标签质量瓶颈对不同任务的非对称影响。

🔗 **开源详情**

*   代码：论文未在正文或提供的文本中明确给出其USR 2.0代码的公开仓库链接。但附录中提到“Training configs, dataset prep, and evaluation code are included in the supplementary material.”，并引用了基线方法的代码仓库（如AV-HuBERT, BRAVEn, USR）。
*   模型权重：论文未提及是否公开训练好的模型权重。
*   数据集：使用了多个公开数据集（LRS3, LRS2, VoxCeleb2, AVSpeech, LibriSpeech, WildVSR），并说明了获取方式。
*   Demo：论文中未提及提供在线演示。
*   复现材料：提供了非常充分的复现信息，包括详细的模型架构参数（表5）、各实验的训练超参数（表6及正文）、数据预处理步骤、损失函数公式、评估脚本引用等。
*   论文中引用的开源项目：ESPnet (Watanabe et al., 2018)，以及基线方法的官方代码仓库（AV-HuBERT, BRAVEn, USR）。

📌 **核心摘要**

这篇论文针对统一语音识别框架在半监督学习中面临的训练效率低下和分布外鲁棒性差的问题进行了改进。其核心方法是提出USR 2.0，通过两项关键技术实现突破：一是CTC驱动的教师强制，即使用教师模型快速生成的CTC伪标签序列作为输入，通过单次前向传播生成注意力分支的目标，从而完全避免了耗时的自回归解码；二是混合采样策略，在训练中交替使用CTC驱动模式和传统的自回归模式，以缓解训练-测试不匹配的曝光偏差。该方法在LRS3、LRS2和WildVSR等基准测试上取得了新的最先进结果，并在分布外数据（如长语音、噪声环境、未见数据集）上展现出显著的鲁棒性提升。具体而言，USR 2.0将训练时间减少了近一半，同时在LRS3基准上实现了17.6% (VSR)、0.9% (ASR) 和 0.8% (AVSR) 的词错误率。其实��意义在于为使用单一模型高效处理多模态语音识别任务提供了一条更实用、更鲁棒的路径。主要局限性在于模型架构中仍保留了模态特定的组件，且对伪标签质量的依赖仍是进一步提升的瓶颈。

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

