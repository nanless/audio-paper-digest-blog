---
title: "ICLR 2026 - 音频分类 论文列表"
date: 2026-05-03
draft: false
tags: ["音频分类"]
categories: [iclr-2026]
description: "共 3 篇 ICLR 2026 音频分类 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频分类

共 **3** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Unmute the Patch Tokens: Rethinking Probing in Multi-Label A](/audio-paper-digest-blog/posts/2026-05-03-unmute-the-patch-tokens-rethinking-probing-in) | 8.5分 | 前25% |
| 🥈 | [PACE: Pretrained Audio Continual Learning](/audio-paper-digest-blog/posts/2026-05-03-pace-pretrained-audio-continual-learning) | 8.0分 | 前25% |
| 🥉 | [SNAP-UQ: Self-supervised Next-Activation Prediction for Sing](/audio-paper-digest-blog/posts/2026-05-03-snap-uq-self-supervised-next-activation) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Unmute the Patch Tokens: Rethinking Probing in Multi-Label Audio Classification](/audio-paper-digest-blog/posts/2026-05-03-unmute-the-patch-tokens-rethinking-probing-in)

🔥 **8.5/10** | 前25% | #音频分类 | #自监督学习 | #探针评估 #生物声学

👥 **作者与机构**

- 第一作者：Lukas Rauch（University of Kassel）
- 通讯作者：未说明（论文未明确标注通讯作者，但Christoph Scholz承担了概念化、资助获取和写作编辑工作，可能是负责人）
- 作者列表：
    - Lukas Rauch（University of Kassel）
    - René Heinrich（University of Kassel, Fraunhofer IEE）
    - Houtan Ghaffari（Ghent University）
    - Lukas Miklautz（ML and Systems Biology, MPI of Biochemistry）
    - Ilyass Moummad（INRIA Montpellier）
    - Bernhard Sick（University of Kassel，提供资金与资源）
    - Christoph Scholz（University of Kassel, Fraunhofer IEE）

💡 **毒舌点评**

本文的亮点在于其系统性的基准测试和清晰的工程洞察，它用无可辩驳的实验数据揭示了标准线性探针在多标签音频SSL评估中的“虚假无能”，并提出了一个简洁有效的解决方案。但短板也很明显：提出的二值化原型探针虽有效，其性能上限仍未超越微调，这使得其“替代微调作为SOTA评估范式”的终极目标略显乏力；此外，对探针本身如何进一步逼近或揭示模型潜力上限的理论探讨相对有限。

🔗 **开源详情**

-   代码：提供完整代码仓库链接：`https://github.com/lurauch/unmute-patch-tokens/`。
-   模型权重：论文未提供作者训练的探针模型权重。但所有使用的预训练编码器（A-MAE, ASiT等）均为公开模型，论文假设使用它们的官方权重。
-   数据集：提供了三个新构建数据集的Hugging Face Hub链接：`https://huggingface.co/datasets/lrauch/desed`, `https://huggingface.co/datasets/lrauch/spass`, `https://huggingface.co/datasets/lrauch/urban-sed`。
-   Demo：未提及在线演示。
-   复现材料：提供了极其详细的复现信息，包括：
    -   完整的实验设置（编码器、数据集、池化方法）。
    -   详尽的超参数搜索范围和协议。
    -   训练配置（优化器、学习率调度、损失函数等）。
    -   计算资源消耗的详细估算。
    -   所有基准测试的完整结果表格（附录A）。
-   引用的开源项目：论文依赖于其评估的6个预训练编码器的公开实现和权重。未明确列出其他依赖库。

📌 **核心摘要**

这篇论文旨在解决音频自监督学习（SSL）模型评估中的一个核心矛盾：为何在计算机视觉中常用的轻量级探针评估范式，在音频SSL（特别是多标签分类任务）中却表现不佳，无法反映模型真实潜力并替代昂贵的微调？作者诊断该问题为“全局池化瓶颈”，即标准的[cls]-token或全局注意力等单向量描述符，无法有效聚合音频频谱图中分散、局部化的声音事件信息，导致信息丢失。

其核心方法是提出一种名为“二值化原型探针”的新池化方法。该方法不再将所有令牌压缩为一个全局向量，而是使用一组可学习的、二值化的原型（-1或+1向量），计算每个原型与所有令牌的余弦相似度，并通过最大池化聚合每个原型的匹配分数，最终通过一个线性层将这些分数映射到类别标签。这实现了逐类、多向量的信息聚合。

与已有方法相比，其新颖性在于：1）将原型方法从计算机视觉和生物声学适配到通用音频SSL评估；2）通过二值化（使用STE）实现32倍内存压缩；3）将原型从类别依赖解耦为类别无关，简化了设计。实验证明，该方法在13个数据集、6个编码器的全面基准测试中，系统性地超越了线性探针、注意力池化等所有单向量方法。

主要结果：在核心的as20k多标签数据集上，二值化原型探针比线性探针平均提升14.41%的mAP（见表2）。它显著缩小了冻结模型探针与微调之间的性能差距，例如在as20k上缩小了63%的差距（见图2）。更重要的是，它纠正了线性探针对模型排名的严重扭曲，例如使SSLAM（微调SOTA）从线性探针下的中游跃升至第二名，而ASiT则从第二跌至末位（见图6）。

该工作的实际意义在于，它为音频SSL领域建立了一个更可靠、高效且计算友好的模型评估基准，挑战了追求SOTA性能时对微调的过度依赖。其主要局限性是：1）所提出的探针方法性能仍低于微调，表明池化瓶颈虽被缓解但未完全消除；2）研究主要关注评估方法，对编码器本身如何改进以适应更好的探针探讨有限。

---

### 🥈 [PACE: Pretrained Audio Continual Learning](/audio-paper-digest-blog/posts/2026-05-03-pace-pretrained-audio-continual-learning)

🔥 **8.0/10** | 前25% | #音频分类 | #预训练 #迁移学习 | #预训练 #迁移学习

👥 **作者与机构**

- 第一作者：Chang Li（清华大学心理与认知科学系）
- 通讯作者：Liyuan Wang（清华大学心理与认知科学系）
- 作者列表：Chang Li（清华大学心理与认知科学系）、Kanglei Zhou（清华大学心理与认知科学系）、Liyuan Wang（清华大学心理与认知科学系）

💡 **毒舌点评**

这篇论文系统性地诊断了预训练音频模型在持续学习（CL）中的“水土不服”症状，并针对性地设计了一套“组合疗法”，其分析深入且方法设计合理。短板在于其核心的“多会话适应”阶段需要额外的计算开销，且对预训练模型的质量高度依赖，可能在更复杂的下游任务中受限。

📌 **核心摘要**

1.  问题：预训练音频模型在面对数据分布随时间变化的真实场景时，直接应用视觉领域的参数高效微调（PEFT）持续学习（CL）方法会导致性能严重下降。其根本原因是音频骨干网络侧重于低层频谱细节而非结构化语义，导致严重的上游-下游表征不对齐。
2.  方法核心：论文提出了PACE框架，包含三个阶段：改进的第一阶段适应（FSA），通过分层LoRA和受限分类头训练缓解表征饱和；自适应多会话子空间正交PEFT，通过梯度投影在新增任务上适应性学习，同时约束对旧表征的破坏；以及基于频谱图的边界感知扰动，通过拉近类内、推远类边界来增强表征可分性。
3.  与已有方法相比新在哪里：与将视觉CL方法直接迁移不同，PACE是首个针对音频CL特性设计的系统框架。它克服了现有方法（如冻结骨干+分析分类器）在细粒度任务上的表征饱和与偏移局限，通过分阶段的自适应与稳定化策略实现了更好的平衡。
4.  主要实验结果：在6个音频CL基准测试（3个粗粒度：ESC-50、US8K、SC2；3个细粒度：TIMIT-2、TIMIT-3、VocalSet）上，PACE全面超越现有SOTA。例如，在细粒度任务上，相对于最强基线，TIMIT-2提升+5.3%，TIMIT-3提升+4.1%，VocalSet提升+6.3%。同时，PACE显著缩小了与联合训练上界的差距，在ESC-50上仅差0.8%。
5.  实际意义：该工作为构建能在现实动态音频环境（如智能家居、监控、在线语音服务）中可靠、持续学习的音频AI系统提供了关键的方法论基础和基准。
6.  主要局限性：PACE方法（尤其是MSA阶段）相比完全冻结骨干的简单分析分类器（如RanPAC）需要更多的计算开销。此外，其性能上限仍受限于预训练骨干的初始表征质量。

---

### 🥉 [SNAP-UQ: Self-supervised Next-Activation Prediction for Single-Pass Uncertainty in TinyML](/audio-paper-digest-blog/posts/2026-05-03-snap-uq-self-supervised-next-activation)

✅ **7.0/10** | 前25% | #音频分类 | #自监督学习 | #低资源 #鲁棒性

👥 **作者与机构**

- 第一作者：Ismail Lamaakal（Mohammed First University, Oujda, Morocco，Multidisciplinary Faculty of Nador）
- 通讯作者：未明确说明（论文中所有作者邮箱均列出，但未指明通讯作者；按照惯例，可推测第一作者或多位作者共同负责）
- 作者列表：
    1. Ismail Lamaakal（Mohammed First University, Oujda, Morocco，Multidisciplinary Faculty of Nador）共同第一作者
    2. Chaymae Yahyati（Mohammed First University, Oujda, Morocco，Multidisciplinary Faculty of Nador）共同第一作者
    3. Khalid El Makkaoui（Mohammed First University, Oujda, Morocco，Multidisciplinary Faculty of Nador）
    4. Ibrahim Ouahbi（Mohammed First University, Oujda, Morocco，Multidisciplinary Faculty of Nador）
    5. Yassine Maleh（Sultan Moulay Slimane University, Khouribga, Morocco，Laboratory LaSTI, ENSAK）

💡 **毒舌点评**

亮点：论文精准击中了TinyML部署中“如何用毫瓦级功耗感知模型是否在胡说八道”这一痛点，提出的“层间惊讶度”概念既优雅又极具工程思维，所有设计（int8、LUT、单次前传）都死死咬住MCU的严苛约束，不像某些工作只是把云端方法强行压缩。短板：核心思想虽新，但依赖对中间层的访问可能在某些极端黑盒部署中受限；虽然在小MCU上完胜集合法，但在能跑通集合法的大MCU上，其性能优势并非颠覆性的，更像是一种“足够好且更便宜”的妥协方案。

🔗 **开源详情**

- 代码：论文提供了代码仓库链接：https://github.com/Ism-ail11/SNAP-UQ。
- 模型权重：论文中未提及公开的预训练模型权重。
- 数据集：使用标准公开数据集（MNIST, CIFAR-10等），论文未提及自己发布新数据集。
- Demo：论文中未提及在线演示。
- 复现材料：提供了非常详细的复现材料，包括：
    - 完整的训练超参数（学习率、批次大小、优化器、损失权重λ_SS、调度策略）。
    - 具体的骨干网络架构和SNAP-UQ配置（截取层、投影器秩rℓ）。
    - MCU构建工具链和标志（-O3, CMSIS-NN）。
    - 详细的评估协议（流构建、事件标记、阈值选择方法）。
    - 附录包含大量消融实验和结果细节。
- 引用的开源项目：论文依赖的开源工具/模型可能包括：
    - CMSIS-NN（用于MCU上的高效神经网络推理）。
    - TVM（编译器，可能用于构建）。
    - TensorFlow Lite Micro（TinyML框架）。
    - 标准数据集工具包（如torchvision, torchaudio）。
- 总结：论文在开源方面做得很好，提供了可直接运行的代码和完备的复现指南，是其重要优势之一。

📌 **核心摘要**

1. 问题：在微控制器（MCU）上部署的TinyML模型需要可靠且低开销的不确定性估计，以检测数据分布漂移或模型错误。然而，传统方法（如深度集成、MC Dropout）因需要多次前传、额外分支或状态存储，在毫瓦级硬件上难以实现。
2. 方法核心：本文提出SNAP-UQ，一种基于自监督的逐层激活预测的单次前传不确定性估计方法。其核心是在网络骨干的少数层（如中间层、倒数第二层）附加轻量级头（int8量化），利用低秩投影从当前层激活预测下一层激活的统计量（均值和方差）。预测误差（标准化残差）形成“逐层惊讶度”信号，经聚合和单调映射后得到最终的不确定性分数。
3. 创新点：
    - 思路创新：将不确定性信号源从模型输出层或多次采样，转移到网络内部的层间动态转换上，认为分布偏移会先破坏层间特征流的平稳性。
    - 实现创新：设计完全适配MCU约束，所有计算在一次前传中完成，无需状态缓冲；使用1x1卷积+全局平均池化的投影器、int8量化头、查找表（LUT）替代指数运算。
    - 理论联系：证明了在特定假设下，其惊讶度分数等价于条件负对数似然和条件马氏距离，并具有对通道缩放的不变性。
4. 主要实验结果：
    - 部署效率：在Big-MCU上，SNAP-UQ相比早退集成和深度集成方法，Flash占用减少37-57%，延迟降低24-35%。在Small-MCU上，深度集成方法因内存溢出（OOM）无法运行，而SNAP-UQ仍能高效部署（如SpeechCommands上Flash 118KB，延迟113ms）。
    - 监控性能：在损坏数据流监控任务中（如MNIST-C），SNAP-UQ的AUPRC达到0.66，优于基线（BASE: 0.54， 深度集成: 0.56），且检测延迟最短（24帧）。其AUPRC随损坏严重度增加而增长最快（见图2）。
    - 故障检测：在ID正确与否检测（ID✓— ID×）上，SNAP-UQ在MNIST（AUROC 0.90）和SpeechCommands（0.94）上达到最优；在OOD检测（ID✓— OOD）上，在SpeechCommands（0.92）上与最佳基线持平，在CIFAR-10（0.94）上接近最佳（表3）。
    - 校准：在ID校准上，SNAP-UQ降低了MNIST和SpeechCommands上的NLL和ECE（表4）。
5. 实际意义：为TinyML设备提供了一种实用、轻量、单次前传的不确定性监控方案，使其能在资源严苛的条件下，实时感知自身预测的可信度，对安全可靠的边缘AI部署具有重要价值。
6. 主要局限性：依赖对网络中间层激活的访问，可能不适用于完全黑盒模型；对层投影器的秩（rank）和层选择（tap placement）敏感；协方差建模简单（对角/低秩），可能无法捕捉复杂的跨通道依赖。

---

