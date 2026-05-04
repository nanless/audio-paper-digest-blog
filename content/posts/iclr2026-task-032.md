---
title: "ICLR 2026 - 语音识别 论文列表"
date: 2026-05-04
draft: false
tags: ["语音识别"]
categories: [iclr-2026]
description: "共 9 篇 ICLR 2026 语音识别 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音识别

共 **9** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [CTC-DRO: Robust Optimization for Reducing Language Dispariti](/audio-paper-digest-blog/posts/2026-05-04-ctc-dro-robust-optimization-for-reducing-language) | 9.0分 | 前25% |
| 🥈 | [Scaling Speech Tokenizers with Diffusion Autoencoders](/audio-paper-digest-blog/posts/2026-05-04-scaling-speech-tokenizers-with-diffusion) | 8.5分 | 前25% |
| 🥉 | [StableToken: A Noise-Robust Semantic Speech Tokenizer for Re](/audio-paper-digest-blog/posts/2026-05-04-stabletoken-a-noise-robust-semantic-speech) | 8.0分 | 前25% |
| 4. | [Pay Attention to CTC: Fast and Robust Pseudo-Labelling for U](/audio-paper-digest-blog/posts/2026-05-04-pay-attention-to-ctc-fast-and-robust-pseudo) | 8.0分 | 前10% |
| 5. | [A Brain-Inspired Gating Mechanism Unlocks Robust Computation](/audio-paper-digest-blog/posts/2026-05-04-a-brain-inspired-gating-mechanism-unlocks-robust) | 7.5分 | 前25% |
| 6. | [A cross-species neural foundation model for end-to-end speec](/audio-paper-digest-blog/posts/2026-05-04-a-cross-species-neural-foundation-model-for-end) | 7.5分 | 前25% |
| 7. | [Confident and Adaptive Generative Speech Recognition via Ris](/audio-paper-digest-blog/posts/2026-05-04-confident-and-adaptive-generative-speech) | 7.5分 | 前25% |
| 8. | [Speech-to-LaTeX: New Models and Datasets for Converting Spok](/audio-paper-digest-blog/posts/2026-05-04-speech-to-latex-new-models-and-datasets-for) | 7.5分 | 前25% |
| 9. | [SumRA: Parameter Efficient Fine-tuning with Singular Value D](/audio-paper-digest-blog/posts/2026-05-04-sumra-parameter-efficient-fine-tuning-with) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [CTC-DRO: Robust Optimization for Reducing Language Disparities in Speech Recognition](/audio-paper-digest-blog/posts/2026-05-04-ctc-dro-robust-optimization-for-reducing-language)

🔥 **9.0/10** | 前25% | #语音识别 | #鲁棒性 | #多语言 #自监督学习

👥 **作者与机构**

- 第一作者：Martijn Bartelds (斯坦福大学计算机科学系) & Ananjan Nandi (斯坦福大学计算机科学系)，并列第一作者
- 通讯作者：Martijn Bartelds (bartelds@stanford.edu) & Ananjan Nandi
- 作者列表：Martijn Bartelds (斯坦福大学计算机科学系)、Ananjan Nandi (斯坦福大学计算机科学系)、Moussa Koulako Bala Doumbouya (斯坦福大学计算机科学系)、Dan Jurafsky (斯坦福大学计算机科学系)、Tatsunori Hashimoto (斯坦福大学计算机科学系)、Karen Livescu (丰田技术学院芝加哥分校)

💡 **毒舌点评**

亮点：论文精准地戳中了将标准Group DRO应用于CTC损失时“损失值不可比”这一致命痛点，并设计了“长度匹配+平滑目标”这套组合拳来解决，理论分析扎实，实验结果显著（最差语言CER降低高达47.1%）。短板：方法虽然有效，但“平滑最大化目标”的启发式成分较重（α参数），其理论最优性证明有限；此外，“长度匹配”依赖一个目标时长的超参数，其敏感性分析在附录中，可能限制其在新场景的即插即用性。

🔗 **开源详情**

- 代码：是，提供GitHub仓库链接：https://github.com/Bartelds/ctc-dro
- 模型权重：是，论文中提到“新训练的模型”已公开提供。
- 数据集：否，使用的是公开的ML-SUPERB 2.0基准，论文本身未发布新数据集。
- Demo：论文中未提及在线演示。
- 复现材料：非常充分。论文详细描述了算法（算法1）、实验设置（第4节）、超参数选择范围（开发集调优）、硬件信息（NVIDIA A6000）以及训练时间（附录表22）。所有语言集的具体构成见附录表4和表17。
- 引用的开源项目：论文基于并引用了XLS-R和MMS预训练模型及其相关代码库。评估使用了ML-SUPERB 2.0基准工具链。
- 论文中明确提供了开源信息。

📌 **核心摘要**

本文针对多语言自动语音识别（ASR）中普遍存在的语言间性能差异问题，分析了标准组分布鲁棒优化（Group DRO）方法失效的原因。核心问题在于，广泛使用的连接主义时序分类（CTC）损失值受输入序列长度以及语言的语音、文本特性影响，导致不同语言组的训练损失值不可直接比较，从而使得Group DRO的权重更新机制失效。为此，论文提出了CTC-DRO方法。其核心创新有二：一是设计了长度匹配的批处理策略，通过确保每个语言组的训练批次具有相似的总音频时长来缓解CTC损失的长度缩放效应；二是提出了平滑最大化目标，通过修改组权重更新公式（引入平滑参数α），防止对持续高损失的语言组过度赋权，从而稳定训练过程。在ML-SUPERB 2.0基准上的大量实验表明，CTC-DRO持续优于基线模型和原始Group DRO，在五个语言集上将最差语言的字符错误率（CER）最高降低了47.1%，平均CER最高降低了32.9%，同时几乎不损害最佳语言的性能。该方法计算开销小，有望应用于其他存在组损失不可比问题的序列建模任务。

### 主要实验结果（平衡数据设置，MMS模型）

| 语言集 | 模型 | 最差语言CER (↓) | 平均CER (↓) | LID准确率 (↑) |
| :--- | :--- | :--- | :--- | :--- |
| Set 1 | Baseline | 60.8% (NAN) | 23.4% | 97.4% |
| | Group DRO | 86.6% (NAN) | 30.5% | 78.7% |
| | CTC-DRO (Ours) | 56.8% (NAN) | 22.9% | 95.8% |
| Set 5 | Baseline | 90.0% (JPN) | 26.0% | 96.3% |
| | Group DRO | 62.2% (JPN) | 29.2% | 67.0% |
| | CTC-DRO (Ours) | 57.5% (JPN) | 24.3% | 90.5% |

注：完整结果见论文表1和表2。

本文的消融实验（表3）证实，移除长度匹配或平滑目标都会导致性能显著下降。此外，图2展示了训练过程中组权重的变化，显示CTC-DRO能维持更稳定、均衡的权重分布。

### 实际意义与局限性
该方法的实际意义在于能以极小的额外计算成本，显著提升多语言ASR系统中低资源或高难度语言的性能，促进技术的包容性。局限性包括：1）虽然缓解了CTC损失的不可比性，但并未完全消除其根源；2）方法性能部分依赖于平滑参数α的调优；3）假设语言组已知，在完全未知的语言分布场景下需要额外处理。

---

### 🥈 [Scaling Speech Tokenizers with Diffusion Autoencoders](/audio-paper-digest-blog/posts/2026-05-04-scaling-speech-tokenizers-with-diffusion)

🔥 **8.5/10** | 前25% | #语音识别 | #扩散模型 | #语音合成 #流匹配

👥 **作者与机构**

- 第一作者：Yuancheng Wang (Meta超级智能实验室、香港中文大学（深圳）)
- 通讯作者：未明确说明（论文中注明“*Work done during an internship at Meta”，但未指明通讯作者）
- 作者列表：Yuancheng Wang（Meta超级智能实验室、香港中文大学（深圳）），Zhenyu Tang（Meta超级智能实验室），Yun Wang（Meta超级智能实验室），Arthur Hinsvark（Meta超级智能实验室），Yingru Liu（Meta超级智能实验室），Yinghao Aaron Li（Meta超级智能实验室），Kainan Peng（Meta超级智能实验室），Junyi Ao（Meta超级智能实验室、香港中文大学（深圳）），Mingbo Ma（Meta超级智能实验室），Mike Seltzer（Meta超级智能实验室），Qing He（Meta超级智能实验室），Xubo Liu（Meta超级智能实验室）

💡 **毒舌点评**

亮点：论文抓住了语音标记化器“既要压缩效率，又要重建质量，还要语义丰富”的“不可能三角”，用一个统一的扩散自编码器框架给出了一个极具竞争力的解，并在12.5Hz的极低帧率下将多项指标推向了新高度。短板：尽管提出了shortcut fine-tuning等解码加速方案，但扩散模型固有的多步采样本质仍是其在实时流式应用中的阿喀琉斯之踵，论文对此的解决方案（如轻量扩散头）效果有待更严苛场景的验证。

🔗 **开源详情**

- 代码：论文未提及具体代码仓库链接，但在附录D提供了详细的伪代码，并承诺在发表后发布。
- 模型权重：承诺在发表后发布预训练模型检查点（在公开研究数据集上）。
- 数据集：使用200万小时内部数据，未提及公开。
- Demo：提供了演示样例的链接 https://sitok-demo.github.io/。
- 复现材料：提供了非常详细的模型架构（附录A）、训练循环伪代码（附录D.2）、超参数（附录D.3）和评估协议。
- 依赖的开源项目：论文提到了依赖的开源项目或工具，如Llama Transformer架构、Vocos声码器、Whisper-large-v3用于评估。

📌 **核心摘要**

本文针对语音标记化器在低比特率下面临的语义编码、声学重建与压缩效率难以兼顾的核心问题，提出了Speech Diffusion Tokenizer (SiTok)。其核心是将向量量化与扩散自编码器进行端到端联合优化，使离散编码既能高度压缩，又与生成式解码器的分布显式对齐。与先前两阶段或仅依赖重建损失的方法相比，SiTok创新性地引入了CTC语义正则化，直接对量化后的潜在空间施加文本监督，迫使离散token保留丰富的语言结构。实验表明，在极端的12.5 Hz token率和200 bits/s比特率下，SiTok在语音重建（如WER 3.34， SIM 0.682）和下游理解任务（如ASR WER 4.95）上均显著优于强基线。此外，通过快捷微调技术，解码步骤可缩减至2-4步而几乎不损质量。该工作为构建统一的语音语言模型提供了一个高效且全面的接口，但其在流式生成和多语言支持上的潜力有待进一步挖掘。

---

### 🥉 [StableToken: A Noise-Robust Semantic Speech Tokenizer for Resilient SpeechLLMs](/audio-paper-digest-blog/posts/2026-05-04-stabletoken-a-noise-robust-semantic-speech)

🔥 **8.0/10** | 前25% | #语音识别 | #预训练 | #语音大模型 #鲁棒性

👥 **作者与机构**

- 第一作者：Yuhan Song（北京大学计算机科学学院，多媒体信息处理国家重点实验室）
- 通讯作者：Linhao Zhang（张林浩，未提供机构，推测为微信AI基础模型技术中心）、Houfeng Wang（王厚峰，北京大学计算机科学学院，多媒体信息处理国家重点实验室）
- 作者列表：Yuhan Song（北京大学计算机科学学院，多媒体信息处理国家重点实验室）、Linhao Zhang（未说明具体机构）、Chuhan Wu（微信AI基础模型技术中心）、Aiwei Liu（微信AI基础模型技术中心）、Wei Jia（微信AI基础模型技术中心）、Houfeng Wang（北京大学计算机科学学院，多媒体信息处理国家重点实验室）、Xiao Zhou（微信AI基础模型技术中心）

💡 **毒舌点评**

这篇论文精准地抓住了现有语义语音分词器在噪声下“一碰就碎”的痛点，并提出了一个巧妙且工程友好的“位级投票”解决方案，实验结果对比非常亮眼，是解决一个实际问题的好工作。然而，其多分支结构在训练时引入的额外计算成本和复杂性未被深入讨论，且对“共识损失”的理论依据和不同变体的探索也显得较为基础。

🔗 **开源详情**

- 代码：提供GitHub仓库链接 `https://github.com/Tencent/StableToken`，论文中声明代码将公开。
- 模型权重：论文中声明模型检查点将在接受后公开。
- 数据集：训练使用的主要开源数据集列表已公开（表7）。评估使用FLEURS、LibriSpeech、CHiME-4、ESD、SEED-TTS等公开数据集。
- Demo：论文中未提及在线演示。
- 复现材料：提供了训练超参数（表8）、噪声增强配置（表9）、模型详细架构描述、消融实验设置（附录C）等详尽信息。
- 论文中引用的开源项目：骨干网络使用了Whisper-large-v3，对比基线包括HuBERT、NAST、R-Spin、SpeechTokenizer等。

📌 **核心摘要**

本文旨在解决当前语义语音分词器在面对微小声学扰动（即使语音清晰可辨）时输出序列极不稳定的问题，这种不稳定性严重增加了下游语音大语言模型的学习负担。论文指出问题的根源在于两个方面：脆弱的单路径量化架构和仅监督最终转录文本的遥远训练信号。为此，作者提出了StableToken，一种基于共识机制的鲁棒分词器。其核心方法包含两个相互协同的部分：(1) Voting-LFQ模块，一种多分支量化器，每个分支独立处理输入并生成二进制表示，最后通过位级多数投票机制聚合成一个稳定的输出；(2) 噪声感知共识训练策略，在训练时为部分分支提供带噪声的输入（多视图），并通过一个共识损失强制所有分支的表示保持一致，从而显式地学习对噪声不变的特征。实验表明，StableToken在单元编辑距离（UED）指标上取得了当前最优结果，相对于最佳基线（S3 Tokenizer，26.17%）将平均UED降低了60%以上至10.17%，同时保持了高质量的音频重建能力。这种基础稳定性的提升直接转化为下游语音大模型在语音识别（ASR）、语音情感识别（SER）和文本到语音（TTS）任务上的鲁棒性收益，尤其在严重噪声下性能优势显著。主要局限性在于，多分支的数量选择是经验性的，且论文未深入探讨其在不同硬件上的实际推理效率开销。

---

### 4. [Pay Attention to CTC: Fast and Robust Pseudo-Labelling for Unified Speech Recognition](/audio-paper-digest-blog/posts/2026-05-04-pay-attention-to-ctc-fast-and-robust-pseudo)

🔥 **8.0/10** | 前10% | #语音识别 | #CTC #注意力机制 | #CTC #注意力机制

👥 **作者与机构**

- 第一作者：Alexandros Haliassos（NatWest AI Research, Imperial College London）
- 通讯作者：未说明
- 作者列表：Alexandros Haliassos（NatWest AI Research, Imperial College London）， Rodrigo Mira（NatWest AI Research）， Stavros Petridis（NatWest AI Research, Imperial College London）

#

💡 **毒舌点评**

这篇论文通过巧妙地将CTC的快速鲁棒解码与Teacher Forcing结合，一举解决了原USR框架中自回归伪标签生成缓慢且易受分布偏移影响的痛点，同时通过混合采样策略平衡了训练与测试的差异，是典型的“工程智慧”推动方法进步的案例；但其核心贡献更偏向于训练策略的优化而非模型架构的根本性突破，且混合采样策略带来的增益在消融实验中并不总是显著。

#

🔗 **开源详情**

- 代码：论文提及代码仓库链接为 `https://github.com/ahaliassos/usr`。
- 模型权重：未明确提及是否公开USR 2.0的预训练或微调模型权重。
- 数据集：论文使用了多个公开数据集（LRS3, LRS2, VoxCeleb2, AVSpeech, LibriSpeech, WildVSR），并说明了其获取与使用方式。未提及新发布数据集。
- Demo：未提及。
- 复现材料：论文附录提供了详细的实验设置（数据集、预处理、模型变体、训练超参数），并指出训练配置、数据集准备和评估代码包含在补充材料中。
- 引用的开源项目：AV-HuBERT, BRAVEn, USR（原始版本），ESPnet。

📌 **核心摘要**

1. 问题：现有的统一语音识别（USR）框架通过自回归解码生成注意力分支的伪标签，导致训练效率低下（自回归是瓶颈），且CTC和注意力分支的解耦监督使其在分布外数据（如长语音、噪声、跨域数据）上鲁棒性差，容易因自回归错误累积而性能下降。
2. 方法核心：提出USR 2.0，其核心是CTC驱动的Teacher Forcing：教师模型用贪心CTC解码生成伪标签，然后将其作为解码器输入，通过单次前向传播并行生成注意力伪标签，避免了自回归解码。这使得CTC和注意力伪标签长度对齐，学生解码器可以同时预测两者，从而耦合两个分支。此外，为缓解训练-测试不匹配（训练时用CTC输入，推理时自回归），引入混合采样策略，在训练时以50%概率交替使用标准AR模式和CTC驱动模式。
3. 与已有方法相比新在哪里：与USR相比，USR 2.0将伪标签生成从耗时的逐token自回归解码变为一次性的Teacher Forcing并行解码，速度大幅提升。同时，它改变了监督范式：在CTC驱动模式下，解码器同时被CTC和注意力伪标签监督，使注意力分支获得了CTC的鲁棒性。在AR模式下，CTC分支则被两种伪标签监督，实现了信息互补。
4. 主要实验结果：
    - 训练效率：训练时间减少约2倍（见图5）。
    - 鲁棒性：在长语音（VoxCeleb2）上，USR 2.0的WER显著低于USR等基线（见图3）；在噪声环境（LRS3加噪）和多个OOD数据集（LibriSpeech, WildVSR, AVSpeech）上均大幅超越原始USR和自监督基线（见表1，表3）。
    - 性能：在LRS3、LRS2和WildVSR数据集上，USR 2.0（Huge模型）使用单一统一模型在ASR、VSR和AVSR任务上均达到或超越当时的最优水平（SOTA）。关键数据如下表所示：

| 数据集 | 方法 | VSR WER (%) | ASR WER (%) | AVSR WER (%) |
| :--- | :--- | :--- | :--- | :--- |
| LRS3 (Base, Low-res) | USR | 36.0 | 3.2 | 3.0 |
| | USR 2.0 | 36.2 | 3.0 | 2.9 |
| LRS3 (Large, High-res) | USR | 26.9 | 2.4 | 2.4 |
| | USR 2.0 | 23.7 | 2.3 | 2.2 |
| LRS3 (Huge) | USR 2.0 | 17.6 | 0.9 | 0.8 |
| LRS2 (Large) | USR | 22.3 | 1.2 | 1.1 |
| | USR 2.0 | 21.5 | 1.3 | 1.0 |
| WildVSR (Large) | USR | 46.4 | - | - |
| | USR 2.0 | 38.5 | - | - |

5. 实际意义：USR 2.0显著提升了统一语音识别模型的训练效率与在复杂真实场景下的鲁棒性，使其更实用。单一模型处理ASR/VSR/AVSR任务降低了部署复杂度。该训练范式（CTC驱动的Teacher Forcing与混合采样）也可推广至其他序列到序列的自训练任务。
6. 主要局限性：
    - 相比完全监督的微调方法，其整体训练时长仍然较长。
    - 对于ASR和AVSR等本身性能已很高的任务，性能提升更多依赖无标签数据质量，而非数量，当前使用的贪心解码伪标签可能限制其上限。
    - CTC驱动的Teacher Forcing生成的注意力伪标签在序列层面可能缺乏全局连贯性，但这在自训练框架下被证明是可接受的。

---

### 5. [A Brain-Inspired Gating Mechanism Unlocks Robust Computation in Spiking Neural Networks](/audio-paper-digest-blog/posts/2026-05-04-a-brain-inspired-gating-mechanism-unlocks-robust)

✅ **7.5/10** | 前25% | #语音识别 | #脉冲神经网络 | #鲁棒性 #生物启发

👥 **作者与机构**

- 第一作者：Qianyi Bai（天津大学智能与计算学院/计算机科学与技术学院）
- 通讯作者：Qiang Yu（天津大学智能与计算学院）
- 作者列表：Qianyi Bai（天津大学智能与计算学院/计算机科学与技术学院）、Haiteng Wang（天津大学智能与计算学院/未来技术学院）、Qiang Yu（天津大学智能与计算学院）

💡 **毒舌点评**

论文的亮点在于为脉冲神经网络（SNN）引入了一个有扎实神经生物学背景的门控机制（动态电导），并通过理论分析和丰富的语音/时序任务实验，有力地证明了该机制对提升网络鲁棒性的显著效果，实验数据翔实。短板则在于，虽然方法有生物学启发，但实验评估高度集中在语音/音频时序任务，对于其在更广泛的视觉、多模态任务中的通用性和优势验证不足；此外，动态电导的引入增加了计算开销，论文对能效优势的分析略显单薄。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用了公开的Ti46Alpha， TIDIGITS， SHD， SSC数据集，论文未提及额外发布数据。
- Demo：未提及。
- 复现材料：提供了详细的数学公式、伪代码（算法1）、网络架构描述、训练超参数（表5）和实验设置，复现指南较为充分。
- 论文中引用的开源项目：未明确引用。

📌 **核心摘要**

1.  问题：现有的脉冲神经网络（SNN）由于神经元模型过于简化（如LIF），缺乏生物神经元中动态电导所体现的门控机制，导致其在应对噪声和时序变化时的鲁棒性不足。
2.  方法核心：论文提出了动态门控神经元（DGN）。其核心是引入了与神经元活动相关的突触电导动态调节机制（公式3-8）。该机制根据输入脉冲历史自适应地调整膜电位衰减速率，实现了一种生物启发的“门控”功能，可选择性地过滤输入信息并抑制噪声。
3.  创新点：与之前SNN中静态或工程化的门控（如GLIF）不同，DGN的门控源于动态电导这一生物学原理，在功能上与LSTM中的遗忘门和输入门有理论上的相似性。论文为该模型的噪声稳定性提供了基于随机微分方程的理论分析（公式13）。
4.  实验结果：在多个语音识别基准测试中，DGN模型（无论是前馈还是循环版本）均取得了优异性能。例如，在TIDIGITS数据集上，前馈DGN达到98.59% 准确率，循环DGN达到99.10% 的SOTA水平。在抗噪和抗攻击实验中，DGN显著优于LIF、ALIF等传统神经元及LSTM。例如在TIDIGITS加性噪声（p=0.006）下，前馈DGN准确率（95.34%）比LIF（46.83%）高出约48个百分点。
5.  实际意义：该工作为构建更鲁棒、更具生物合理性的SNN提供了新范式，有望提升神经形态芯片在嘈杂、非结构化环境（如边缘计算、语音交互）中的可靠性和适应性。
6.  主要局限性：验证主要集中在语音/音频时序分类任务上；DGN相比标准LIF神经元增加了可学习参数（`C_i`）和计算步骤，会提升模型复杂度和推理开销；论文未提供与更先进、更复杂的SNN架构（如基于Transformer的SNN）的直接对比。

---

### 6. [A cross-species neural foundation model for end-to-end speech decoding](/audio-paper-digest-blog/posts/2026-05-04-a-cross-species-neural-foundation-model-for-end)

✅ **7.5/10** | 前25% | #语音识别 | #自监督学习 | #跨模态 #端到端

👥 **作者与机构**

- 第一作者：Yizi Zhang（Columbia University）， Linyang He（Columbia University）（*表示共同第一作者）
- 通讯作者：未明确说明（论文中提供了通讯邮箱，但未明确标注“Corresponding Author”）
- 作者列表：Yizi Zhang（Columbia University）， Linyang He（Columbia University）， Chaofei Fan（Stanford University）， Tingkai Liu（Microsoft）， Han Yu（Columbia University）， Trung Le（University of Washington）， Jingyuan Li（Amazon）， Scott Linderman（Stanford University）， Lea Duncker（Columbia University）， Francis R Willett（Stanford University）， Nima Mesgarani（Columbia University）， Liam Paninski（Columbia University）

#

💡 **毒舌点评**

这篇论文堪称BCI语音解码领域的“系统集成大师”，它巧妙地将跨物种预训练、Transformer编码器和音频LLM这几个当前最时髦的模块组装成一个性能SOTA的端到端框架，展现了强大的工程整合能力和扎实的实验功底。然而，其核心创新更多在于“组合”而非“发明”，且最终端到端性能仍未超越精心调优的级联系统，这或许暗示了“神经信号直接生成文本”这条路还有很长的坡要爬。

#

🔗 **开源详情**

- 代码：论文中未提及提供开源代码仓库链接。
- 模型权重：未提及公开预训练或微调后的模型权重。
- 数据集：论文中引用的大部分预训练数据集（如Churchland et al., 2012; Willett et al., 2023/2025; Kunz et al., 2025等）均为公开数据集，可通过DANDI、DRYAD、Zenodo等平台获取。竞赛数据集（Brain-to-Text ‘24, ‘25）为公开基准。
- Demo：未提及提供在线演示。
- 复现材料：论文提供了非常详尽的复现信息，包括：
    - 完整的模型架构细节（Transformer、MLP投影器）。
    - 所有训练超参数范围和最终选择值。
    - 损失函数的具体公式。
    - 数据预处理流程。
    - 基线模型（RNN）的具体配置。
    - 竞赛提交的具体流程（如集成策略）。
- 论文中引用的开源项目：引用了PyTorch作为深度学习框架；引用了Ray Tune用于超参数调优；引用了OPT、Qwen系列模型作为LLM基线；引用了DeepSpeed ZeRO-3用于大模型训练优化。

📌 **核心摘要**

1.  问题：现有侵入式语音脑机接口（BCI）多采用“神经信号→音素→句子”的级联框架，各阶段独立优化，无法全局最优，且难以处理跨任务（如想象语音）的泛化问题。
2.  核心方法：本文提出名为BIT（BraIn-to-Text）的端到端框架。其核心是一个跨物种、跨任务预训练的Transformer神经编码器，该编码器在大量人类和猕猴Utah阵列记录数据上，通过自监督掩码建模进行预训练，学习通用的神经活动表征。编码器输出通过一个浅层MLP投影到文本嵌入空间，然后与一个音频大语言模型（Audio-LLM）解码器端到端连接，并通过对比学习进行模态对齐，直接生成句子。
3.  创新点：a) 首次提出跨物种、跨任务的神经编码器预训练范式，以解决神经数据稀疏和非平稳问题；b) 将音频LLM引入BCI，利用其在语音任务上的先验知识提升解码性能；c) 通过对比学习显式对齐神经与文本嵌入空间，实现跨任务（尝试语音与想象语音）的泛化。
4.  主要结果：在Brain-to-Text竞赛基准上：
    - 级联设置（编码器+ n-gram LM）：BIT达到了新的SOTA（WER 6.35%），并通过集成进一步降至5.10%（Brain-to-Text’24）和1.76%（Brain-to-Text’25）。
    - 端到端设置（编码器+ Audio-LLM）：BIT将之前最佳端到端方法的WER从24.69%大幅降低至10.22%（集成后），缩小了与级联系统的差距。
    - 跨任务迁移：在数据量极少的想象语音任务上，预训练带来的性能提升比尝试语音更显著，且跨物种预训练比单任务有监督预训练效果更好。代表结果见下表：

| 方法 | Brain-to-Text ‘24 WER (非集成) | Brain-to-Text ‘24 WER (集成) | Brain-to-Text ‘25 WER (非集成) | Brain-to-Text ‘25 WER (集成) |
| :--- | :--- | :--- | :--- | :--- |
| BIT (级联) | 6.35% | 5.10% | 4.06% | 1.76% |
| BIT (端到端) | 15.67% | 10.22% | 11.06% | 7.76% |
| 之前最佳级联 (Feghhi et al., 2025) | 7.98% | 5.68% | - | - |
| 之前最佳端到端 (Feng et al., 2024) | 24.69% | - | - | - |

5.  实际意义：为瘫痪患者的高精度交流提供了新的端到端技术路径，证明了基础模型思想在神经解码中的有效性，并为跨模态（神经-文本/音频）对齐研究提供了新范式。
6.  主要局限性：a) 端到端推理速度（~0.95秒/句）慢于级联（~0.24秒/句），难以实时应用；b) 高度依赖大规模、高质量的预训练数据，而人类侵入式BCI数据获取成本极高；c) 跨物种（猴）数据带来的增益有限，数据价值更多体现在物种内部的多样性。

---

### 7. [Confident and Adaptive Generative Speech Recognition via Risk Control](/audio-paper-digest-blog/posts/2026-05-04-confident-and-adaptive-generative-speech)

✅ **7.5/10** | 前25% | #语音识别 | #生成模型 | #大语言模型 #不确定性量化

👥 **作者与机构**

- 第一作者：Amit Damri (特拉维夫大学电气与计算机工程学院)
- 通讯作者：Bracha Laufer-Goldshtein (特拉维夫大学电气与计算机工程学院)
- 作者列表：Amit Damri (特拉维夫大学电气与计算机工程学院)、Bracha Laufer-Goldshtein (特拉维夫大学电气与计算机工程学院)

💡 **毒舌点评**

这篇论文把“先学习后测试”这一风险控制工具玩明白了，用在ASR纠错里动态调整假设集大小，理论上很优雅，也确实省了不少计算。但它的“自适应”更像一个聪明的调参模块，而非解决语音识别核心难题的“银弹”，实际部署可能还得先过数据集校准这一关，通用性有待观察。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：https://github.com/amitdamritau/adaptive-ger。
- 模型权重：论文未提及公开模型权重。训练使用的是公开的LLaMA-2-7B/13B模型及LoRA微调，但未提供微调后的权重。
- 数据集：使用了公开的HyPoradise基准数据集（TedLium-3， CHiME-4， CommonVoice）和FLEURS数据集，论文说明了数据获取方式和划分。
- Demo：论文中未提及在线演示。
- 复现材料：在附录C中提供了详细的LLM训练配置，包括超参数（学习率、batch size、LoRA设置）、提示模板、计算硬件要求。在附录A中提供了风险控制实现的详细算法和参数选择策略。提供了充分的复现信息。
- 论文中引用的开源项目：Whisper (Radford et al., 2023)， LLaMA-2 (Touvron et al., 2023)， PEFT库 (Mangrulkar et al., 2022)， evaluate库， HyPoradise基准 (Chen et al., 2023)， RobustGER (Hu et al., 2024a)， GenTranslate (Hu et al., 2024b)。

📌 **核心摘要**

1. 要解决什么问题：现有的生成式语音识别纠错方法通常为所有输入使用固定数量的候选转录文本（N-best列表），这在简单输入上造成计算浪费，在复杂输入上可能引入低质量候选而降低纠错性能。同时，这些方法缺乏性能的理论保证。
2. 方法核心是什么：提出一个自适应框架，利用ASR模型的置信度分数，动态决定每个音频输入应传递给LLM纠错模型的最优候选假设数量。核心是采用“学习后测试”框架，将候选集大小选择建模为风险控制问题，以可控的方式最小化相对于最佳可能性能（oracle）的预期性能退化。
3. 与已有方法相比新在哪里：首次将无分布假设的风险控制理论（特别是LTT框架）应用于生成式ASR纠错。它从固定的N值选择转变为基于输入复杂度的自适应选择，并提供了预期性能退化有界的高概率理论保证。
4. 主要实验结果如何：在HyPoradise基准的三个数据集（TedLium-3， CHiME-4， CommonVoice）上验证。结果表明，该方法平均可将假设集大小减少23%至52%，同时保持或略微提升（相对WER变化在-0.13%至+2.28%之间）纠错性能。风险控制成功率（超过理论最小值1-δ）得到实证验证。关键结果对比如下表所示：

| 测试集 | GER基线 WER (%) | 本文方法 Set Size | 本文方法 WER (%) | 相对大小减少 | 相对WER变化 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| TedLium-3 | 7.53 | 2.3 | 7.52 | 54% | -0.13% |
| CHiME-4 | 6.24 | 2.7 | 6.37 | 46% | +2.06% |
| CommonVoice | 8.32 | 1.9 | 8.51 | 62% | +2.28% |

5. 实际意义是什么：为LLM增强的ASR纠错系统提供了一种高效且可靠的部署策略。通过动态分配计算资源（假设集大小），可以在不损害（甚至可能提升）识别质量的前提下，显著降低推理成本，对实时或资源受限的应用场景有价值。
6. 主要局限性是什么：框架的性能依赖于对分数归一化参数（γ， τ）的先验选择，虽然论文探索了基于熵的自动化选择和Pareto测试的多参数联合优化，但在完全未知的声学条件下部署仍需校准。此外，该方法优化的是假设集选择环节，其效果受限于底层ASR和LLM纠错模型的固有能力。

---

### 8. [Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences](/audio-paper-digest-blog/posts/2026-05-04-speech-to-latex-new-models-and-datasets-for)

✅ **7.5/10** | 前25% | #语音识别 | #大语言模型 | #数据集 #多模态模型

👥 **作者与机构**

- 第一作者：Dmitrii Korzh（AXXX, Moscow, Russia；MTUCI, Moscow, Russia）
- 通讯作者：论文中未明确标注通讯作者
- 作者列表：Dmitrii Korzh（AXXX, MTUCI），Dmitrii Tarasov（FusionBrain Lab, AXXX; HSE University），Artyom Iudin（AXXX; MTUCI），Elvir Karimov（AXXX; MTUCI; Applied AI Institute），Matvey Skripkin（FusionBrain Lab, AXXX; Applied AI Institute），Nikita Kuzmin（AXXX; MTUCI; Applied AI Institute），Andrey Kuznetsov（FusionBrain Lab, AXXX; Innopolis University），Oleg Y. Rogov（AXXX; MTUCI; Applied AI Institute），Ivan Oseledets（AXXX; Applied AI Institute; Moscow State University）

💡 **毒舌点评**

亮点在于，论文贡献了一个规模空前、标注细致的开源S2L数据集，并系统性地探索了从ASR后校正到端到端Audio-LLM的多种技术路线，为这个细分领域确立了坚实的基准和评估框架。短板是，无论是ASR后校正还是端到端方法，模型架构本身均无显著创新，更多是现有技术的组合与应用，其性能提升很大程度上依赖于新构建的高质量数据集。

🔗 **开源详情**

- 代码：提供代码仓库链接 `https://github.com/dkorzh10/speech2latex`。
- 模型权重：论文中未提及公开预训练模型权重。但基于开源数据集和代码，可进行训练复现。
- 数据集：完全开源，托管于Hugging Face：`https://huggingface.co/datasets/marsianin500/Speech2Latex`。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的训练超参数、模型配置（如LoRA设置）、数据集划分策略和附录说明。
- 论文中引用的开源项目：Whisper, BEATs, Qwen2.5, Qwen2.5-Math, SALMONN, LLaMA, XTTSv2, MathBridge, TextTeller, Proof-Pile, KaTeX。

📌 **核心摘要**

该论文旨在解决将语音中的数学表达式和句子准确转换为LaTeX格式的挑战，该任务在教育（如课堂转录）和科研中具有重要应用价值。论文的核心贡献是构建并开源了首个大规模、多语言（英语和俄语）的语音转LaTeX数据集S2L，包含约66k人类标注和571k TTS合成的音频样本，涵盖孤立方程（S2L-equations）和嵌入公式的句子（S2L-sentences）两种类型。方法上，论文系统评估了基于ASR后校正（使用Whisper转录后接微调的LLM）和端到端Audio-LLM（如SALMONN）的多种技术路径。主要实验结果表明，在S2L-equations基准上，其最佳模型（SALMONN-13B）的字符错误率（CER）达到17.5%，而基于后校正的Qwen2.5-0.5B模型CER为27.2%，均显著优于MathSpeech基线（64.0%）。在S2L-sentences基准上，模型在句子整体CER为15.4%，其中公式部分的CER为39.7%，揭示了处理上下文相关数学语音的更大难度。这项工作为语音驱动的数学内容理解提供了重要资源和强基线，但局限在于当前数据集未能完全覆盖真实课堂环境（如口头解释、视觉内容关联），且模型在高度歧义或复杂嵌套表达式上仍有提升空间。

---

### 9. [SumRA: Parameter Efficient Fine-tuning with Singular Value Decomposition and Summed Orthogonal Basis](/audio-paper-digest-blog/posts/2026-05-04-sumra-parameter-efficient-fine-tuning-with)

✅ **7.5/10** | 前25% | #语音识别 | #迁移学习 | #参数高效微调 #多语言

👥 **作者与机构**

- 第一作者：Chin Yuen Kwok（南洋理工大学 数字信任中心 & 计算与数据科学学院）
- 通讯作者：Yongsen Zheng（南洋理工大学 数字信任中心 & 计算与数据科学学院）
- 作者列表：
    - Chin Yuen Kwok（南洋理工大学 数字信任中心 & 计算与数据科学学院）
    - Yongsen Zheng（南洋理工大学 数字信任中心 & 计算与数据科学学院）
    - Jia Qi Yip（南洋理工大学 计算与数据科学学院）
    - Kwok-Yan Lam（南洋理工大学 数字信任中心 & 计算与数据科学学院）
    - Eng Siong Chng（南洋理工大学 数字信任中心 & 计算与数据科学学院）

---

💡 **毒舌点评**

亮点：论文巧妙地将“模型平均”的思想压缩到了单一LoRA适配器的初始化阶段，通过将多个奇异向量求和来构建更“博学”的冻结矩阵A，这个想法精巧且实现简单。短板：实验验证仅限于多语言ASR，作者自己也承认对需要“局部”知识适应的任务（如NLU）无效，这让人怀疑该方法是普适的参数高效技巧，还是一个仅对特定任务类型（全局风格/口音迁移）有效的“特解”。

---

🔗 **开源详情**

- 代码：论文中未提及任何代码仓库链接（如GitHub）。
- 模型权重：论文中未提及是否会公开训练好的适配器（B矩阵）或完整模型。
- 数据集：使用了公开的Common Voice MASR数据集（Mozilla），并说明了获取方式（网址），但未提供处理后的数据脚本。
- Demo：论文中未提及提供在线演示。
- 复现材料：提供了较详细的训练超参数（优化器AdamW、调度器ReduceLROnPlateau、batch size=4、epochs=2、验证频率等）和模型配置（适配器位置、α设置）。但缺乏如随机种子、具体的层归一化实现细节、SVD计算库（如PyTorch的`torch.linalg.svd`）的版本或参数设置等。
- 论文中引用的开源项目：引用了Whisper（模型）、SpeechBrain（学习率调度器实现）、Common Voice（数据集）、多个作为对比基线的PEFT方法（LoRA, PiSSA, CorDA等）的开源实现或论文。
- 总结：论文中未提及明确的开源计划（代码、模型、完整复现脚本）。

📌 **核心摘要**

1.  要解决什么问题：在参数高效微调（PEFT）中，低秩适应（LoRA）及其变体（如LoRA-FA）在面对数百万个个性化适配器（如多语言/多用户ASR）时，仍面临显著的存储开销挑战。现有基于SVD的初始化方法（如PiSSA）仅使用前几个主导奇异向量，限制了冻结矩阵A的影响范围。
2.  方法核心是什么：提出SumRA方法。核心是改进LoRA中冻结矩阵A的初始化：通过对预训练权重矩阵进行SVD分解，将得到的多个（而非仅前几个）奇异向量按特定策略（如交错求和、贪心求和）求和后，分配到矩阵A的每一行中。这样，A能同时编码更广泛的模型知识，且在微调时被冻结，仅更新矩阵B，从而大幅降低每个任务的存储成本。
3.  与已有方法相比新在哪里：
    - 相比标准LoRA：不再随机初始化A，而是利用预训练权重的结构化知识；同时冻结A，参数效率更高。
    - 相比LoRA-FA：解决了其随机初始化A的局限性，用有意义的SVD向量初始化。
    - 相比PiSSA/CorDA：关键创新在于求和策略。PiSSA仅用主导奇异向量初始化，而SumRA将更多的奇异向量（包括非主导的）压缩进A，使其能影响模型知识中更广阔的部分。此外，提出的“平衡求和”策略（贪心求和）避免了重要奇异向量聚集在同一行导致的干扰。
4.  主要实验结果如何：在低资源多语言ASR任务上验证了有效性。使用Whisper-large-v2模型，以秩32、每任务仅0.4M额外参数（相比LoRA的7.7M）在Common Voice数据集的5种新语言上微调，SumRA将平均词错误率（WER）从LoRA的37.69%降至34.09%（相对降低约9.6%）。消融实验表明，贪心/交错求和策略优于简单的分块求和。下表为关键结果（Whisper-small, rank=32）：

| 方法      | 额外参数 | Esperanto WER | Interlingua WER | Frisian WER | Meadow Mari WER | Kurmanji Kurdish WER |
|-----------|----------|---------------|-----------------|-------------|-----------------|----------------------|
| LoRA      | 7.7M     | 23.39%        | 15.31%          | 39.34%      | 40.63%          | 48.51%               |
| SumRA | 3.9M | 20.77%    | 13.38%      | 33.37%  | 36.30%      | 44.47%           |

5.  实际意义是什么：为大规模部署个性化或语言特定的语音模型提供了一种更高效的存储方案。通过共享一个精心初始化的冻结矩阵A，系统可以仅为每个新任务存储一个小型的矩阵B，从而显著降低内存和存储成本，对于云端多租户ASR服务有潜在价值。
6.  主要局限性是什么：方法的有效性高度依赖于“全局适应”的假设（如适应整体口音或风格）。作者指出，对于仅需学习局部新知识（如新增少量术语）的适应任务，该方法优势有限。此外，该方法在NLU任务上的初步实验效果不佳，进一步证实了其适用范围的局限性。

---

---

