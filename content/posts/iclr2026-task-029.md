---
title: "ICLR 2026 - 语音识别 论文列表"
date: 2026-05-03
draft: false
tags: ["语音识别"]
categories: [iclr-2026]
description: "共 8 篇 ICLR 2026 语音识别 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音识别

共 **8** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Scaling Speech Tokenizers with Diffusion Autoencoders](/audio-paper-digest-blog/posts/2026-05-03-scaling-speech-tokenizers-with-diffusion) | 8.5分 | 前25% |
| 🥈 | [CTC-DRO: Robust Optimization for Reducing Language Dispariti](/audio-paper-digest-blog/posts/2026-05-03-ctc-dro-robust-optimization-for-reducing-language) | 8.5分 | 前25% |
| 🥉 | [A cross-species neural foundation model for end-to-end speec](/audio-paper-digest-blog/posts/2026-05-03-a-cross-species-neural-foundation-model-for-end) | 8.0分 | 前10% |
| 4. | [Pay Attention to CTC: Fast and Robust Pseudo-Labelling for U](/audio-paper-digest-blog/posts/2026-05-03-pay-attention-to-ctc-fast-and-robust-pseudo) | 8.0分 | 前25% |
| 5. | [A Brain-Inspired Gating Mechanism Unlocks Robust Computation](/audio-paper-digest-blog/posts/2026-05-03-a-brain-inspired-gating-mechanism-unlocks-robust) | 7.5分 | 前25% |
| 6. | [Confident and Adaptive Generative Speech Recognition via Ris](/audio-paper-digest-blog/posts/2026-05-03-confident-and-adaptive-generative-speech) | 7.5分 | 前25% |
| 7. | [Speech-to-LaTeX: New Models and Datasets for Converting Spok](/audio-paper-digest-blog/posts/2026-05-03-speech-to-latex-new-models-and-datasets-for) | 7.5分 | 前25% |
| 8. | [SumRA: Parameter Efficient Fine-tuning with Singular Value D](/audio-paper-digest-blog/posts/2026-05-03-sumra-parameter-efficient-fine-tuning-with) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Scaling Speech Tokenizers with Diffusion Autoencoders](/audio-paper-digest-blog/posts/2026-05-03-scaling-speech-tokenizers-with-diffusion)

🔥 **8.5/10** | 前25% | #语音识别 | #扩散模型 | #零样本 #语音大模型

👥 **作者与机构**

- 第一作者：Yuancheng Wang（Meta Superintelligence Labs, The Chinese University of Hong Kong, Shenzhen）
- 通讯作者：未明确说明（论文脚注说明实习期间完成，提供了联系邮箱 yuanchengwang@link.cuhk.edu.cn）
- 作者列表：Yuancheng Wang（Meta Superintelligence Labs, The Chinese University of Hong Kong, Shenzhen）、Zhenyu Tang（Meta Superintelligence Labs）、Yun Wang（Meta Superintelligence Labs）、Arthur Hinsvark（Meta Superintelligence Labs）、Yingru Liu（Meta Superintelligence Labs）、Yinghao Aaron Li（Meta Superintelligence Labs）、Kainan Peng（Meta Superintelligence Labs）、Junyi Ao（Meta Superintelligence Labs, The Chinese University of Hong Kong, Shenzhen）、Mingbo Ma（Meta Superintelligence Labs）、Mike Seltzer（Meta Superintelligence Labs）、Qing He（Meta Superintelligence Labs）、Xubo Liu（Meta Superintelligence Labs）

💡 **毒舌点评**

亮点：在极低比特率（200 bps， 12.5 Hz）的苛刻设定下，SiTok通过端到端的扩散自编码器训练与语义正则化，在重建质量和下游理解任务上均取得了显著超越基线的性能，证明了该范式在统一压缩、重建与语义表示方面的巨大潜力。短板：论文承认在下游理解任务上，其离散表示性能仍落后于连续特征表示；此外，基于迭代采样的扩散解码器架构天然不利于流式生成，论文对此也无解决方案，这在实际应用（如实时语音交互）中可能成为瓶颈。

🔗 **开源详情**

- 代码：论文中承诺“upon publication”将发布完整推理代码和预训练模型检查点，并提供了在线演示链接 `https://sitok-demo.github.io/`。当前PDF中未提供具体的代码仓库链接。
- 模型权重：提及将提供预训练模型权重。
- 数据集：未提及公开数据集。论文使用200万小时内部数据训练。
- Demo：提供在线演示链接 `https://sitok-demo.github.io/`。
- 复现材料：提供了非常详细的附录（A-D），包括模型架构细节、伪代码、训练循环、数据预处理参数、超参数配置等，复现指引充分。
- 论文中引用的开源项目：提到了使用 Llama风格Transformer、Vocos声码器。

📌 **核心摘要**

这篇论文旨在解决现有语音分词器在压缩率、重建质量和语义丰富性之间难以兼顾的核心矛盾，尤其是在低令牌率下信息承载的瓶颈。论文提出了SiTok，一种基于扩散自编码器的语音分词器，其核心创新在于：1）采用端到端的联合训练框架，将向量量化与基于扩散模型的波形重建过程统一优化，避免了传统两阶段方法的次优性；2）引入CTC语义正则化，直接在离散潜在空间施加文本监督，强制令牌保留语义信息。SiTok被扩展到1.6B参数，并在200万小时语音数据上训练。实验表明，在极具挑战性的12.5 Hz令牌率和200 bps比特率下，SiTok在语音重建（WER 3.34， SIM 0.682）和多项下游理解任务（如ASR WER 4.95）上均显著优于多个强劲基线。此外，论文还探索了快捷微调等高效解码技术，将扩散步数减少至2-4步，极大提升了推理效率。SiTok的实际意义在于为语音大语言模型提供了一种高效、高质量的统一接口，既能支持高保真生成，也能服务于理解任务。主要局限性在于离散表示在理解任务上与连续表示仍有差距，且扩散解码器对流式应用不友好。

---

### 🥈 [CTC-DRO: Robust Optimization for Reducing Language Disparities in Speech Recognition](/audio-paper-digest-blog/posts/2026-05-03-ctc-dro-robust-optimization-for-reducing-language)

🔥 **8.5/10** | 前25% | #语音识别 | #分布鲁棒优化 | #多语言 #公平性

👥 **作者与机构**

- 第一作者：Martijn Bartelds (斯坦福大学计算机系)， Ananjan Nandi (斯坦福大学计算机系) （论文注明共同第一作者）
- 通讯作者：未明确说明（论文提供联系邮箱为bartelds@stanford.edu）
- 作者列表：
  - Martijn Bartelds（斯坦福大学计算机系）
  - Ananjan Nandi（斯坦福大学计算机系）
  - Moussa Koulako Bala Doumbouya（斯坦福大学计算机系）
  - Dan Jurafsky（斯坦福大学计算机系）
  - Tatsunori Hashimoto（斯坦福大学计算机系）
  - Karen Livescu（丰田技术学院芝加哥分校）

#

💡 **毒舌点评**

亮点：本文对“标准工具”group DRO在语音CTC损失上为何失效进行了近乎病理学的细致剖析（损失不可比性），并提出了极其简洁优雅的两处“手术式”修改（长度匹配+权重平滑），最终取得了显著且稳定的收益，堪称问题驱动型研究的典范。短板：该方法深度绑定了CTC框架，对于当前基于注意力机制或解码器主导的端到端ASR（如Whisper范式）的公平性问题，其适用性未做任何探讨，这使得其影响力被限定在了一个特定的技术路线上。

#

🔗 **开源详情**

- 代码：是，论文提供了公开的代码仓库链接：`https://github.com/Bartelds/ctc-dro`。
- 模型权重：是，论文声明“我们的代码和新训练的模型是公开可用的”，并提供了链接。
- 数据集：实验使用公开的ML-SUPERB 2.0基准数据集，论文未提供该数据集本身，但指明了其来源和获取方式（如链接`https://github.com/Bartelds/ctc-dro`中可能包含指引）。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了极其充分的复现信息，包括详细的算法描述（算法1、2）、完整的实验设置（数据集划分、超参数范围、硬件、训练时间）、关键实验结果的完整表格（表1-3，表9-12）、以及多个附录（消融、归一化实验、缩放实验等）。
- 引用的开源项目：论文依赖并评估了基于XLS-R和MMS的预训练模型（如`https://github.com/facebookresearch/fairseq`），以及用于数据处理的ESPnet工具包（`https://github.com/espnet/espnet`）。

📌 **核心摘要**

1.  解决的问题：在多语言自动语音识别（ASR）中，广泛使用的群分布鲁棒优化（group DRO）方法旨在提升最差语言群体的性能，但直接应用于基于连接主义时序分类（CTC）损失的训练时会失效。这是因为CTC损失不仅与识别错误相关，还随输入语音长度、转录长度及语言的声学特性变化，导致不同语言间的损失值不可比，使得group DRO的权重更新机制失衡，反而可能损害整体性能。
2.  方法核心：提出CTC-DRO算法。其核心是针对上述问题的两个关键修改：(1) 长度匹配批处理：在计算每个语言群体的组损失时，确保每个批次包含大致相同总时长的音频，以缓解CTC损失随输入长度增长而增大的问题。(2) 平滑最大化目标：在更新语言群体权重时，引入一个平滑参数α，修改了权重更新公式，防止某个因固有高损失（如长音频）而持续获得高权重的语言群体权重过大，从而稳定训练过程。
3.  新意所在：与直接应用group DRO或简单归一化CTC损失不同，CTC-DRO从算法层面修正了group DRO的优化目标，使其更适用于CTC损失的特殊性。平滑化更新规则在理论上优化了一个更平衡的加权目标（∑log(q_g + α)L_g），在实践上防止了“赢者通吃”的权重分配，这是之前工作未针对CTC提出过的。
4.  主要实验结果：在ML-SUPERB 2.0基准的五个语言集上，CTC-DRO一致优于基线模型和原始group DRO。具体地，它能将最差语言的错误率（CER）降低最高达47.1%，同时将平均错误率降低最高达32.9%。消融实验证明两个组件都必不可少，且组权重动态分析显示CTC-DRO训练更稳定。即使在扩展到18种语言时，该方法依然有效。
5.  实际意义：该方法以极小的额外计算开销，显著提升了多语言ASR系统中表现最差语言群体的性能，有助于构建更公平、更具包容性的语音技术。其核心思想（针对不可比损失的鲁棒优化）为其他存在类似挑战的领域（如医疗AI、其他序列任务）提供了参考。
6.  主要局限性：方法主要设计和验证于基于CTC的微调范式。对于其他类型的ASR解码器（如基于注意力的端到端模型），其适用性尚未探索。此外，该方法依赖于预定义的组（如语言），在缺乏可靠语言标签或需发现隐含子群体时无法直接应用。

#

---

### 🥉 [A cross-species neural foundation model for end-to-end speech decoding](/audio-paper-digest-blog/posts/2026-05-03-a-cross-species-neural-foundation-model-for-end)

🔥 **8.0/10** | 前10% | #语音识别 | #预训练 | #对比学习 #端到端

👥 **作者与机构**

- 第一作者：Yizi Zhang (哥伦比亚大学)，Linyang He (哥伦比亚大学) (共同第一作者)
- 通讯作者：未明确指定，但提供了联系邮箱 {yz4123, lh3288}@columbia.edu，可推断来自哥伦比亚大学团队。
- 作者列表：Yizi Zhang (哥伦比亚大学)，Linyang He (哥伦比亚大学)，Chaofei Fan (斯坦福大学)，Tingkai Liu (微软)，Han Yu (哥伦比亚大学)，Trung Le (华盛顿大学)，Jingyuan Li (亚马逊)，Scott Linderman (斯坦福大学)，Lea Duncker (哥伦比亚大学)，Francis R Willett (斯坦福大学)，Nima Mesgarani (哥伦比亚大学)，Liam Paninski (哥伦比亚大学)。

💡 **毒舌点评**

这篇论文的最大亮点在于它用一个优雅的“神经编码器+音频LLM”管道，将跨物种、跨任务的预训练范式成功引入神经语音解码领域，并在级联设置下刷新了竞赛SOTA，证明了大规模预训练对提升解码性能（尤其在想象语音这种小数据任务上）的关键作用。短板则相当明显：其引以为傲的“端到端”框架性能（10.22% WER）仍大幅落后于其自身的级联版本（5.10% WER），且推理速度慢了一个数量级，这使得其“端到端”宣言在实际部署层面打了折扣；此外，跨物种预训练带来的增益似乎远不如人类数据本身（见图8），这削弱了“跨物种”这一宣传点的必要性。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开预训练或微调后的模型权重。
- 数据集：论文使用了多个公开数据集（如Brain-to-Text Benchmark， Kunz et al. inner speech dataset），并引用了它们在DRYAD, DANDI等平台上的来源。但BIT模型本身及其生成的资源（如预训练权重）的开源情况未说明。
- Demo：未提供在线演示。
- 复现材料：提供了极其详细的超参数表（表10-13）、训练策略、数据预处理步骤、评估指标定义和附录中的大量技术细节，复现信息非常充分。
- 论文中引用的开源项目：引用了PyTorch实现的RNN基线（来自benchmark官方仓库）、Ray Tune用于超参数搜索、scikit-learn用于LDA分析。使用了Qwen2.5, Qwen3, Aero1-Audio, Qwen2-Audio等公开LLM作为解码器。
- 总体开源情况：论文中未提及针对BIT模型本身的开源计划。

📌 **核心摘要**

1.  解决的问题：现有的语音脑机接口（BCI）大多采用级联框架（先解码音素，再用语言模型组句），无法端到端联合优化，且性能受限。本文旨在开发一个端到端的神经活动到文本（Brain-to-Text）的解码框架。
2.  方法核心：提出BIT框架，核心是一个跨任务、跨物种预训练的Transformer神经编码器，将Utah阵列记录的神经活动嵌入表示，再通过一个浅层MLP投影器连接到一个音频大语言模型（LLM）解码器，最终直接生成句子。训练采用对比学习进行跨模态对齐。
3.  与已有方法相比新在哪里：首次在神经语音解码中结合了大规模的跨物种（人类+猴子）、跨任务（语音+运动）自监督预训练Transformer编码器；首次系统性地将音频LLM作为解码器引入，并证明其优于文本LLM；实现了从神经活动到句子的完全端到端可微分优化；通过表征分析证明了编码器能对齐尝试语音和想象语音的神经嵌入，实现跨任务泛化。
4.  主要实验结果：在Brain-to-Text ’24基准测试中，BIT级联模型（使用5-gram LM）达到SOTA的6.35% WER（使用集成后为5.10%）。在端到端设置下，BIT（使用Aero1-Audio 1.5B）将先前端到端方法（Feng et al.）的24.69% WER大幅降低至10.22%（集成后）。消融实验证明，使用音频LLM（如Aero1-Audio 1.5B）优于同等大小的文本LLM，且对比学习能进一步提升性能。在低资源的想象语音任务上，预训练带来的收益尤为显著。

| 模型/框架 | Brain-to-Text ‘24 WER (尝试语音) | Brain-to-Text ‘25 WER (尝试语音) | 备注 |
| :--- | :--- | :--- | :--- |
| 级联框架 | | | |
| BIT Cascaded (BIT-All) | 6.35% | 4.06% | SOTA (单模型) |
| BIT Cascaded + Ensemble | 5.10% | 1.76% | SOTA (集成) |
| 先前最佳 (Feghhi et al., 2025) | 7.98% | - | |
| 先前最佳 + Ensemble (Feghhi et al., 2025) | 5.68% | - | |
| 端到端框架 | | | |
| BIT End-to-End (Aero1-Audio 1.5B) | 15.67% | 11.06% | |
| BIT End-to-End + Ensemble | 10.22% | 7.76% | |
| 先前最佳 (Feng et al., 2024) | 24.69% | - | |

5.  实际意义：该工作为瘫痪患者的高级通信恢复提供了新的技术路径。端到端的框架简化了系统优化流程，有望推动更自然、更准确的神经语音假体的发展。
6.  主要局限性：端到端解码的实时性较差（平均0.95秒/句），且性能仍显著落后于级联方法。模型使用双向注意力，不适合在线解码。跨物种数据的增益有限，且严重依赖大规模无标签数据。

---

### 4. [Pay Attention to CTC: Fast and Robust Pseudo-Labelling for Unified Speech Recognition](/audio-paper-digest-blog/posts/2026-05-03-pay-attention-to-ctc-fast-and-robust-pseudo)

🔥 **8.0/10** | 前25% | #语音识别 | #CTC | #注意力机制 #端到端

👥 **作者与机构**

- 第一作者：Alexandros Haliassos（NatWest AI Research; Imperial College London）
- 通讯作者：未说明
- 作者列表：Alexandros Haliassos（NatWest AI Research; Imperial College London）、Rodrigo Mira（NatWest AI Research; Imperial College London）、Stavros Petridis（NatWest AI Research; Imperial College London）

💡 **毒舌点评**

亮点：本文将CTC的“快速而稳健”与注意力的“高精度”在伪标记阶段巧妙地“各取所需”，用CTC输出硬“喂”给注意力解码器作为目标，既绕过了自回归解码的慢，又通过联合预测传递了CTC的鲁棒性，是“螺蛳壳里做道场”的典范。短板：CTC驱动的教师强制生成的注意力目标在序列级上缺乏全局连贯性（如附录图7所示），虽然不影响训练，但这也暗示了该方法依赖于“师生同源”的强假设，其泛化能力在更复杂的分布外任务中（如口型变化极大的WildVSR）是否完全可靠，仍需更严苛场景的检验。

🔗 **开源详情**

- 代码：提供了完整的开源代码仓库链接：https://github.com/ahaliassos/usr2。
- 模型权重：论文中提到了使用先前工作的预训练检查点初始化，并训练了Huge模型，但未明确提及是否公开所有尺寸模型的最终权重。
- 数据集：使用了公开数据集（LRS3, LRS2, VoxCeleb2, AVSpeech, LibriSpeech, WildVSR），并提供了预处理和采样列表的详细说明。
- Demo：论文中未提及在线演示。
- 复现材料：在附录和代码中提供了所有模型超参数（表5、表6）、训练配置、数据集准备和评估脚本，复现细节非常充分。
- 引用的开源项目：明确使用了ESPnet（用于解码）、SentencePiece（词汇表）、PyTorch等框架。基准模型使用了AV-HuBERT、BRAVEn和原USR的官方代码。

📌 **核心摘要**

本文针对统一语音识别（USR）框架中自回归伪标记（PL）计算慢和CTC与注意力分支解耦监督导致分布外鲁棒性差两大痛点，提出了USR 2.0。
1. 要解决的问题：原USR方法需要在每个训练步通过缓慢的自回归解码生成注意力PL，成为训练瓶颈；同时CTC和注意力PL分开监督学生模型，使得注意力分支在长语音、噪声等分布外（OOD）场景下易受教师错误级联影响，鲁棒性不足。
2. 方法核心：提出CTC驱动的教师强制（CTC-driven teacher forcing）：教师模型用CTC头快速贪心解码出伪标签，经合并去重后，直接作为输入“强迫”教师注意力解码器在单次前向中生成对应的注意力PL，彻底消除了自回归瓶颈。由于CTC和注意力PL长度对齐，学生解码器可在一个前向中同时预测两者。为缓解由此引入的训练-测试不匹配（暴露偏差），进一步采用混合采样策略，在训练中交替使用CTC驱动模式和标准自回归模式。
3. 新意：改变了传统自回归生成注意力PL的范式，利用CTC的稳健性为注意力解码器提供强引导目标，并在学生侧进行耦合监督。
4. 主要实验结果：
   - 效率：训练时间减少约50%（图5）。
   - 鲁棒性：在长语音（VoxCeleb2）、噪声（LRS3加噪）、OOD数据集（LibriSpeech, WildVSR, AVSpeech）上显著优于原USR及AV-HuBERT等自监督基线。例如，在LRS3测试集上，当输入长度>400帧时，USR 2.0的AVSR WER（贪婪解码）保持稳定，而USR急剧上升（图3a）；在-5dB噪声下，AVSR WER为14.1%，优于USR的15.4%（表1）。
   - 性能：在LRS3、LRS2、WildVSR多个任务上达到SOTA。例如，在LRS3低资源设置下，AVSR WER为2.9%，优于USR的3.0%（表2）；Huge模型在LRS3上AVSR WER达0.8%。
5. 实际意义：使得高效、鲁棒地训练统一多任务语音识别模型成为可能，降低了对大规模无标签数据和计算资源的需求。
6. 主要局限性：
   - 对ASR/AVSR任务，由于其本身WER较低，通过增加无标签数据和伪标记带来的提升幅度有限，性能可能受伪标签质量而非数量制约。
   - CTC驱动的教师强制主要用于迭代自训练场景，在非迭代的离线伪标记或实时推理中，自回归或束搜索解码仍是更合适的选择。

---

### 5. [A Brain-Inspired Gating Mechanism Unlocks Robust Computation in Spiking Neural Networks](/audio-paper-digest-blog/posts/2026-05-03-a-brain-inspired-gating-mechanism-unlocks-robust)

✅ **7.5/10** | 前25% | #语音识别 | #脉冲神经网络 | #神经元模型 #鲁棒性

👥 **作者与机构**

- 第一作者：Qianyi Bai（天津大学智能与计算学院/人工智能学院）
- 通讯作者：Qiang Yu（天津大学智能与计算学院/人工智能学院）
- 作者列表：Qianyi Bai（天津大学智能与计算学院/人工智能学院， 天津大学计算机科学与技术学院）、Haiteng Wang（天津大学智能与计算学院/人工智能学院， 天津大学未来技术学院）、Qiang Yu（天津大学智能与计算学院/人工智能学院）

💡 **毒舌点评**

这篇论文巧妙地将生物神经元中“动态电导”这一看似复杂的生理特性，转化为神经网络模型中可计算的“动态门控”机制，理论推导和实验验证都做得相当扎实，其抗噪性能的提升令人信服。不过，作者声称“首次”建立生物启发门控与鲁棒计算的联系可能有些绝对，且实验主要局限于SNN内部对比，未能与当时更前沿的、同样强调时序建模的Transformer变体进行正面较量，显得格局稍小。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接或任何开源计划。
- 模型权重：未提及是否公开预训练模型权重。
- 数据集：使用公开数据集（TI-46, TIDIGITS, SHD, SSC），但论文未提供获取链接（通常可通过数据联盟获取）。
- Demo：未提供在线演示。
- 复现材料：提供了详细的超参数表（Tab. 5）、训练设置和伪代码（Algorithm 1），理论上可复现，但缺乏实际代码。
- 引用的开源项目：论文引用了SpikingJelly（Fang et al., 2023）作为SNN基础设施平台，但未说明是否基于其构建。

📌 **核心摘要**

1.  问题：现有的脉冲神经网络（SNN）模型（如LIF）过于简化，忽略了生物神经元中动态电导的调节作用，导致其在处理噪声和时序变化时鲁棒性不足，也未能利用生物神经元固有的动态优势。
2.  核心方法：受生物神经元离子通道电导可被活动动态调节的启发，提出了动态门控神经元（DGN）。DGN的核心在于其膜电导会根据输入突触电流的动态累积而变化，从而形成一个自适应的信息门控机制，能够选择性过滤输入并自适应抑制噪声。
3.  新意：与传统LIF模型（固定衰减）和现有GLIF模型（静态、通道级门控）不同，DGN的门控机制是动态的、输入依赖的、且具有生物合理性。论文从功能上建立了该机制与LSTM门控结构的类比，为SNN的门控设计提供了生物神经科学的理论基础。
4.  主要结果：在TIDIGITS、SHD等语音/音频分类基准上，DGN（尤其是循环版本）在干净数据和添加各种噪声/对抗攻击的条件下，均显著优于LIF、ALIF、HeterLIF等主流SNN模型以及RNN、LSTM。例如，在TIDIGITS上，循环DGN在干净数据集达到99.10% 准确率；在加性噪声（p=0.006）下，前馈DGN准确率保持95.34%，而LIF降至46.83%。理论分析（通过SDE推导电压方差）表明DGN的动态电导能提供额外的噪声抑制。
5.  意义：该工作为提升SNN的鲁棒性提供了一种新颖、有效且有生物理论支撑的神经元设计范式，有望推动更强大、更稳定的类脑计算模型发展。
6.  局限性：实验主要与SNN和传统RNN/LSTM对比，未与当时更先进的SNN-Transformer混合架构对比。论文未开源代码，限制了可复现性和社区进一步验证与扩展。此外，DGN相比LIF引入了更多参数和计算（尽管效率仍远高于LSTM），其硬件部署的能效权衡需要更深入探讨。

---

### 6. [Confident and Adaptive Generative Speech Recognition via Risk Control](/audio-paper-digest-blog/posts/2026-05-03-confident-and-adaptive-generative-speech)

✅ **7.5/10** | 前25% | #语音识别 | #大语言模型 | #风险控制 #自适应系统

👥 **作者与机构**

- 第一作者：Amit Damri（特拉维夫大学电气与计算机工程学院）
- 通讯作者：Bracha Laufer-Goldshtein（特拉维夫大学电气与计算机工程学院）
- 作者列表：Amit Damri（特拉维夫大学电气与计算机工程学院）、Bracha Laufer-Goldshtein（特拉维夫大学电气与计算机工程学院）

#

💡 **毒舌点评**

亮点：论文巧妙地将“学习然后测试”（LTT）这一统计风险控制框架应用于动态选择语音识别假设集，为生成式错误校正（GER）提供了首次理论性能保证，逻辑链条严密。短板：方法的实用效果高度依赖上游ASR模型提供的置信分数是否可靠，而论文承认这并非总是成立；此外，实验仅与固定大小的基线对比，未与同期可能更先进的检索增强GER方法对比，说服力稍显不足。

#

🔗 **开源详情**

- 代码：提供代码仓库链接：`https://github.com/amitdamritau/adaptive-ger`。
- 模型权重：未提及公开微调后的LLM权重。
- 数据集：使用公开的HyPoradise基准数据集（TedLium-3, CHiME-4, CommonVoice），论文中给出了获取方式和划分说明。
- Demo：未提及在线演示。
- 复现材料：非常充分。附录C详细说明了LLM的超参数配置、提示模板；附录A详述了分数设计、风险目标选择等实现细节；附录D探讨了其他框架扩展。
- 论文中引用的开源项目：Whisper（ASR模型），LLaMA-2（LLM基座），LoRA/PEFT（高效微调），evaluate包（计算语料级WER）。

📌 **核心摘要**

1.  问题：当前基于大语言模型（LLM）的生成式语音识别错误校正（GER）方法通常对所有输入使用固定数量的假设集（N-best列表），这既可能为简单音频引入冗余噪声、增加计算开销，也可能因假设不足而无法有效纠错复杂音频，且缺乏理论性能保证。
2.  方法核心：提出一个自适应框架，使用基于ASR置信分数的阈值规则，动态决定每个输入音频应送入LLM的最佳假设集大小。该阈值通过“学习然后测试”（LTT）方法在校准集上确定，该方法控制期望的相对WER性能下降，提供高概率界。
3.  新颖之处：首次将分布无关的风险控制理论（特别是LTT）应用于GER的假设选择问题，将问题从“选择固定N”转化为“校准一个满足风险约束的阈值”，实现了从“一刀切”到“因材施教”的转变，并提供了严格的理论保证。
4.  主要结果：在三个不同难度的基准测试上，该方法平均假设集大小显著减少（TedLium-3减少50.08%，CommonVoice减少34.2%），同时WER保持与或略优于固定N=5的基线（例如在TedLium-3上WER改善0.13%）。风险控制的经验成功率（Success Rate）均超过95%，验证了理论保证的有效性。
5.  实际意义：可以在不损害识别质量的前提下，大幅降低基于LLM的语音识别后处理系统的计算成本（平均使用更少的假设），并为性能提供可量化的可靠性保证，有利于实际部署。
6.  主要局限性：方法性能依赖于ASR提供的置信分数质量；校准过程需要额外的校准集；理论保证是分布无关的，在有限校准数据下可能过于保守；未与更新的、可能更强的基线（如检索增强的GER）进行对比。

#

---

### 7. [Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences](/audio-paper-digest-blog/posts/2026-05-03-speech-to-latex-new-models-and-datasets-for)

✅ **7.5/10** | 前25% | #语音识别 | #端到端 | #基准测试 #多语言

👥 **作者与机构**

- 第一作者：Dmitrii Korzh (AXXX, Moscow, Russia; MTUCI, Moscow, Russia)
- 通讯作者：未说明
- 作者列表：Dmitrii Korzh (AXXX, MTUCI), Dmitrii Tarasov (FusionBrain Lab, HSE University), Artyom Iudin (AXXX, MTUCI), Elvir Karimov (MTUCI, Applied AI Institute), Matvey Skripkin (FusionBrain Lab, Applied AI Institute), Nikita Kuzmin (MTUCI, Applied AI Institute), Andrey Kuznetsov (FusionBrain Lab, Innopolis University), Oleg Y. Rogov (AXXX, MTUCI, Applied AI Institute), Ivan Oseledets (AXXX, Moscow State University)

💡 **毒舌点评**

亮点：首次大规模开源了涵盖方程和句子的双语（英/俄）语音到LaTeX数据集，并系统性地对比了后校正和端到端两种主流技术路线，建立了全面的基准。短板：模型在真实、嘈杂、带有复杂上下文的课堂等场景中的泛化能力未得到验证，错误分析停留在示例层面，对语言歧义的处理策略不够深入。

🔗 **开源详情**

-   代码：提供代码仓库链接 `https://github.com/dkorzh10/speech2latex`。
-   模型权重：论文中未明确提及是否公开微调后的模型权重。
-   数据集：公开，提供了Hugging Face数据集链接 `https://huggingface.co/datasets/marsianin500/Speech2Latex`。
-   Demo：未提及。
-   复现材料：提供了完整的训练细节（优化器、学习率、批量大小、LoRA配置等）、数据划分策略和评估指标定义（附录），支持复现。
-   引用的开源项目：主要依赖Whisper、Qwen2.5、SALMONN、XTTSv2、KaTeX等开源模型和工具。

📌 **核心摘要**

1.  问题：将口语数学表达式（方程和句子）准确转换为结构化的LaTeX格式，是自动转录、教育技术等领域的一个挑战，存在发音歧义、缺乏数据集等问题。
2.  方法核心：提出了首个大规模开源数据集S2L（含66k人工标注和571k合成音频），并系统评估了两种技术路线：ASR后校正（先用Whisper转写，再用LLM如Qwen2.5校正为LaTeX）和端到端多模态模型（如SALMONN，直接从音频生成LaTeX）。
3.  新在哪里：相比先前工作（如MathSpeech），提供了首个公开的大规模、双语、包含句子和方程的数据集；首次引入并评估了端到端Audio-LLM方案；建立了更全面的评估基准。
4.  主要结果：在自建的S2L-equations基准上，最佳后校正模型（Qwen2.5-1.5B）和端到端模型（SALMONN-13B）的CER分别为27.2%和17.5%，远优于MathSpeech模型的64.0%；在S2L-sentences基准上，方程部分的CER最低为39.7%（SALMONN）。在MathSpeech已有基准上，本文方法也达到了可比性能（CER 30.0% vs. 27.7%）。
5.  实际��义：推动了语音驱动的数学内容理解技术，为教育辅助、科学笔记等应用提供了数据基础和方法参考。
6.  主要局限性：数据集未完全覆盖真实课堂环境（如即兴讲解、视觉内容关联）；口语数学固有的歧义（如一式多解）使得CER指标无法完全反映语义正确性；合成数据与真实人声存在差距。

---

### 8. [SumRA: Parameter Efficient Fine-tuning with Singular Value Decomposition and Summed Orthogonal Basis](/audio-paper-digest-blog/posts/2026-05-03-sumra-parameter-efficient-fine-tuning-with)

✅ **7.5/10** | 前25% | #语音识别 | #迁移学习 | #多语言 #低资源

👥 **作者与机构**

- 第一作者：Chin Yuen Kwok（新加坡南洋理工大学数字信任中心 & 计算与数据科学学院）
- 通讯作者：Yongsen Zheng（新加坡南洋理工大学数字信任中心 & 计算与数据科学学院）
- 作者列表：
    - Chin Yuen Kwok（新加坡南洋理工大学数字信任中心 & 计算与数据科学学院）
    - Yongsen Zheng（新加坡南洋理工大学数字信任中心 & 计算与数据科学学院）
    - Jia Qi Yip（新加坡南洋理工大学计算与数据科学学院）
    - Kwok-Yan Lam（新加坡南洋理工大学数字信任中心 & 计算与数据科学学院）
    - Eng Siong Chng（新加坡南洋理工大学计算与数据科学学院）

💡 **毒舌点评**

亮点：为解决LoRA在大规模部署时的存储“军备竞赛”问题提供了一个优雅且有效的方案，通过巧妙的初始化策略，将适应知识“压缩”到共享的A矩阵中，兼具效率与性能提升。短板：核心创新聚焦于初始化，对于需要适应全新概念（如完全陌生的词汇）或局部知识的场景可能力不从心，且论文承认在标准NLP任务上未能复现同样收益，通用性有待进一步验证。

🔗 **开源详情**

- 代码：论文中未提及代码链接或开源计划。
- 模型权重：未提及公开任何预训练模型或SumRA适配器权重。
- 数据集：实验使用的Common Voice数据集是公开的，但论文未提供处理后的具体数据脚本。
- Demo：未提及在线演示。
- 复现材料：提供了较详细的训练配置（模型、数据集划分、epoch数、batch size、优化器、解码策略等）和所有实验结果数据（表格），这有助于理解方法和部分复现。
- 论文中引用的开源项目：引用了Whisper模型、SpeechBrain库（用于学习率调度器）、Common Voice数据集等。

📌 **核心摘要**

1.  要解决什么问题：LoRA作为主流的参数高效微调（PEFT）方法，在需要为大量语言或用户部署独立适配器时，存储成本会线性增长（可达TB级）。此外，像LoRA-FA这样通过冻结A矩阵来降低存储的方法，由于A通常是随机初始化的，无法有效利用预训练模型中的知识，限制了适应性能。
2.  方法核心是什么：提出SumRA方法。它基于SVD对预训练权重W0进行分解，并提出了一种新的A矩阵初始化策略：将W0的多个奇异向量（包括非主要成分）求和后赋给A的每一行，使A能影响更广泛的知识子空间。同时，冻结A，只训练B，从而大幅减少可训练参数。为了最小化向量求和时的干扰，设计了“交错求和”和“贪婪求和”两种策略，确保各“重要性”（奇异值大小）均匀分布在A的各行。
3.  与已有方法相比新在哪里：相比随机初始化A的LoRA-FA，SumRA的A矩阵初始化融合了预训练模型的先验知识；相比只使用前r个主要奇异向量初始化的PiSSA，SumRA通过求和机制纳入了更多（甚至全部）奇异向量，使A的表征范围从“狭窄子空间”扩展到“更全局的知识空间”，从而增强了适应能力。
4.  主要实验结果如何：在Common Voice数据集上的5种新语言（每种仅10小时数据）多语言ASR任务中，使用Whisper-large-v2模型，SumRA（冻结A）相比标准LoRA，在可训练参数减少50%的情况下，平均词错率（WER）从14.42%降至12.41%（相对降低约14%），优于所有对比基线。消融实验表明，提出的求和策略优于朴素的“块求和”。（具体关键结果见下表）
5.  实际意义是什么：该方法在保持或提升多语言、低资源语音识别性能的同时，将适配器的存储开销降低了一半以上（仅需存储B矩阵），对于构建可扩展的、支持海量语言/用户的语音服务具有重要实际意义。
6.  主要局限性是什么：方法最适用于需要“全局”适应的场景（如口音、说话风格调整），对于仅需局部知识更新（如增加特定领域词汇）的任务收益有限。此外，论文初步实验表明，在将LLaMA模型适配到GLUE任务时，SumRA并未带来显著提升，表明其在需要学习新决策边界的NLP任务上可能不适用。

主要实验结果表格：

表2：Whisper-large-v2 (Rank=32) 在5种新语言上的WER对比

| 方法 | 额外参数量 | eo | ia | fy-NL | mhr | kmr |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| LoRA | 34.3M | 14.42% | 8.67% | 24.75% | 32.39% | 37.72% |
| PiSSA | 34.3M | 13.00% | 8.82% | 22.43% | 29.97% | 34.26% |
| CorDA | 34.3M | 13.13% | 9.18% | 22.96% | 29.20% | 36.33% |
| SumRA (ours) | 17.6M | 12.41% | 8.17% | 22.27% | 27.19% | 34.21% |

---

