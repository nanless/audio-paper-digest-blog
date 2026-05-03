---
title: "ICLR 2026 - 音频分类 论文列表"
date: 2026-05-04
draft: false
tags: ["音频分类"]
categories: [iclr-2026]
description: "共 4 篇 ICLR 2026 音频分类 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频分类

共 **4** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Unmute the Patch Tokens: Rethinking Probing in Multi-Label A](/audio-paper-digest-blog/posts/2026-05-04-unmute-the-patch-tokens-rethinking-probing-in) | 8.0分 | 前25% |
| 🥈 | [PACE: Pretrained Audio Continual Learning](/audio-paper-digest-blog/posts/2026-05-04-pace-pretrained-audio-continual-learning) | 8.0分 | 前25% |
| 🥉 | [A Brain-Inspired Gating Mechanism Unlocks Robust Computation](/audio-paper-digest-blog/posts/2026-05-04-a-brain-inspired-gating-mechanism-unlocks-robust) | 7.5分 | 前25% |
| 4. | [Resp-Agent: An Agent-Based System for Multimodal Respiratory](/audio-paper-digest-blog/posts/2026-05-04-resp-agent-an-agent-based-system-for-multimodal) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Unmute the Patch Tokens: Rethinking Probing in Multi-Label Audio Classification](/audio-paper-digest-blog/posts/2026-05-04-unmute-the-patch-tokens-rethinking-probing-in)

🔥 **8.0/10** | 前25% | #音频分类 | #模型评估 | #自监督学习 #多标签学习

👥 **作者与机构**

- 第一作者：Lukas Rauch（University of Kassel）
- 通讯作者：未说明
- 作者列表：Lukas Rauch（University of Kassel）、René Heinrich（University of Kassel， Fraunhofer IEE）、Houtan Ghaffari（Ghent University）、Lukas Miklautz（ML and Systems Biology, Max Planck Institute of Biochemistry）、Ilyass Moummad（INRIA Montpellier）、Bernhard Sick（University of Kassel）、Christoph Scholz（University of Kassel， Fraunhofer IEE）

#

💡 **毒舌点评**

亮点：论文通过一个全面得令人发指的基准测试（几乎穷举了当前主流音频SSL编码器和探针方法），以压倒性的实验证据，证明了简单的二值化原型探针就能系统性地“击败”精心设计的注意力池化，这对该领域“越复杂越好”的思维定式是一次很好的纠偏。短板：尽管性能显著提升，但“探针”范式与最终微调SOTA之间仍存在可见的性能鸿沟（例如，在as20k上protobin最高约31%，而微调可达40%），这可能意味着冻结的预训练表示本身仍有局限性，或当前探针设计尚未完全挖掘其潜力，论文对此的探讨稍显不足。

#

🔗 **开源详情**

- 代码：提供了完整的代码仓库链接：`https://github.com/lurauch/unmute-patch-tokens/`。
- 模型权重：未提及提供预训练模型权重，但评估使用的是公开的SSL编码器（如EAT, BEATs等）的权重。
- 数据集：提供了部分数据集的托管链接：`https://huggingface.co/datasets/lrauch/desed`， `https://huggingface.co/datasets/lrauch/spass`， `https://huggingface.co/datasets/lrauch/urban-sed`。其他数据集（如AudioSet子集、BirdSet）为公开数据集。
- Demo：未提及。
- 复现材料：非常充分。论文在附录中详细描述了：
    - 所有14个下游数据集的详细信息（表8）。
    - 所有11种池化方法的架构概述和参数量（表9）。
    - 超参数搜索的完整设置（范围、策略、调度）和固定超参数（表10）。
    - 计算资源消耗的详细估算（附录C）。
    - 消融实验的设置与结果（附录B，表7）。
- 论文中引用的开源项目：依赖的主要开源工具/模型包括：所评估的6个SSL编码器（A-MAE, BEATs, ASiT, EAT, Dasheng, SSLAM）及其相关代码库；以及PyTorch、Hugging Face datasets等库。论文中未明确列出所有引用项目。

📌 **核心摘要**

1. 要解决的问题：音频自监督学习（SSL）模型在追求AudioSet基准的SOTA时，普遍依赖计算成本高昂的微调（fine-tuning），而轻量级的探针（probing）评估方法却不可靠。论文指出，核心原因是标准的全局池化（如使用[cls] token）造成了信息瓶颈，无法有效捕捉多标签音频中稀疏、分散的声音事件信息。
2. 方法核心：提出了“二值化原型探针”（Binarized Prototypical Probes）。该方法不将整个标记（token）地图压缩为一个向量，而是通过一组可学习的、类别无关的原型向量（被二值化以鼓励多样性）与所有标记计算余弦相似度，然后进行最大池化，为每个原型生成一个分数，最后通过一个线性分类器映射到类别logit。这实现了按类别、多向量的信息聚合。
3. 与已有方法相比新在哪里：与常用的线性探针（使用[cls] token）和复杂的注意力池化（如mhca）相比，该方法在架构上更简单（参数少，内存效率高，因二值化可实现32倍压缩），且无需正交性损失项。关键思想转变是：从学习一个全局摘要向量，转变为学习一组能匹配不同声音事件模式的原型探测器。
4. 主要实验结果：在一个涵盖13个数据集（多标签、少样本生物声学、多类别）、6个音频SSL编码器的广泛基准测试中，二值化原型探针（protobin）显著且一致地超越了所有单向量池化方法。例如，在多标签数据集as20k上，protobin相比标准线性探针平均提升+14.41% mAP；在少样本生物声学数据集上平均提升+12.16% mAP。它显著缩小了探针评估与微调性能之间的差距（在as20k上，protobin消除了约63%的性能差距）。

关键实验结果表（以部分数据集和编码器为例）：

| 数据集 | 编码器 | linear (mAP) | mhca (mAP) | protobin (mAP) | 微调 SOTA (mAP) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| as20k | A-MAE | 8.36 | 17.09 | 22.32 | 37.1 |
| | EAT | 17.29 | 26.11 | 31.67 | 40.2 |
| | SSLAM | 17.04 | 24.45 | 30.94 | 40.9 |
| urban | A-MAE | 58.72 | 82.49 | 85.17 | - |
| | EAT | 77.76 | 86.43 | 89.24 | - |
| esc50 (单标签) | EAT | 75.33 (Acc) | 89.83 (Acc) | 86.83 (Acc) | 95.9 (Acc) |

注：微调SOTA数值来自各原始论文；-表示论文未提供。

![二值化原型池化方法示意图](icassp-img://FbY5Co2NWk/2.png)
图3：二值化原型池化方法示意图。展示了从冻结的标记地图中，通过与多个二值化原型计算相似度、最大池化聚合，最终得到原型分数向量的过程。

5. 实际意义：该工作为音频SSL社区建立了一套更公平、更高效、更可靠的模型评估范式。研究者可以无需进行昂贵的微调，就能快速、准确地评估不同预训练编码器的表征质量，加速模型迭代与选择，并促进对预训练目标（如掩码预测）与下游任务之间匹配关系的理解。
6. 主要局限性：尽管探针性能大幅提升，但与全量微调的SOTA仍有一定差距，这可能表明冻结的预训练特征并非完美，或探针方法本身仍存在上限。此外，原型数量（J）是一个需要设定的超参数（尽管论文证明了其鲁棒性）。

#

---

### 🥈 [PACE: Pretrained Audio Continual Learning](/audio-paper-digest-blog/posts/2026-05-04-pace-pretrained-audio-continual-learning)

🔥 **8.0/10** | 前25% | #音频分类 | #持续学习 | #预训练 #音频大模型

👥 **作者与机构**

- 第一作者：Chang Li（清华大学心理与认知科学系）
- 通讯作者：Liyuan Wang（清华大学心理与认知科学系，邮箱 liyuanwang@tsinghua.edu.cn）
- 作者列表：Chang Li， Kanglei Zhou， Liyuan Wang†（*共同第一作者，†通讯作者）（清华大学心理与认知科学系）

💡 **毒舌点评**

本文最大的亮点在于问题诊断非常深刻且系统，明确指出直接将视觉CL方法用于音频会导致严重性能下降，并精准定位了音频预训练模型“重低频细节、轻结构语义”的特性是根本原因。方法设计上，将FSA（首次会话适应）与MSA（多会话适应）分阶段处理，并引入子空间正交投影来约束更新，思路巧妙。短板在于，实验虽然全面，但对所提出方法的计算开销和工程复杂度的讨论略显不足，尤其是在实际部署场景下的权衡分析可以更深入。

🔗 **开源详情**

-   代码：论文明确表示“we will release all constructed benchmarks and reproduced baselines along with our codebase”，但未提供当前链接。论文中未提及具体代码仓库链接。
-   模型权重：未提及公开预训练权重，但实验中使用了公开的EAT模型。
-   数据集：论文构建了6个基准测试，将在未来与代码一同发布。所用原始数据集均为公开数据集（如ESC-50， TIMIT等）。
-   Demo：未提及。
-   复现材料：提供了详尽的训练细节（学习率、batch size、epoch数）、超参数敏感性分析（附录E.6）和算法伪代码（附录B），复现信息非常充分。
-   论文中引用的开源项目：主要依赖预训练模型EAT（Chen et al., 2024），以及对比基线中涉及的方法如RanPAC（McDonnell et al., 2023）， LoRASub（Liu & Chang, 2025）等。

📌 **核心摘要**

1.  问题：预训练音频模型在真实世界的持续学习（CL）场景中表现脆弱，面临灾难性遗忘。直接迁移视觉领域的参数高效微调（PEFT）方法到音频领域效果很差，原因在于音频骨干网络强调低级频谱细节，导致严重的上下游任务表示错位。
2.  方法核心：提出PACE框架，分为三个阶段：(1) 改进的首次会话适应（FSA），通过限制头部学习率、仅微调深层LoRA模块及使用解析分类器，来缓解表示饱和；(2) 自适应多会话子空间正交PEFT（MSA），在后续会话中通过梯度投影到未学习子空间来允许受控的骨干网络更新，平衡可塑性与稳定性；(3) 边界感知正则化，利用频谱掩码生成扰动样本，增强类内紧凑性和类间分离度。
3.  新颖性：首次系统性地基准测试并分析了预训练音频模型的持续学习问题，揭示了与视觉CL不同的核心挑战（表示饱和与表示偏移）。PACE方法针对性地设计了音频特异的PEFT策略和多会话适应机制，突破了以往仅依赖冻结骨干+解析分类器的天花板。
4.  实验结果：在6个音频CL基准（3个粗粒度，3个细粒度）上，PACE大幅超越所有现有基线。例如，在细粒度任务TIMIT-2上比最佳基线（RanPAC）高出+5.32%，在VocalSet上高出+6.26%。同时，PACE显著缩小了与联合训练上界的差距，例如在ESC-50上仅差0.75%。
5.  实际意义：为在现实动态数据分布下部署稳健的音频智能系统（如语音识别、环境声音理解、音乐分析）提供了有效的持续学习解决方案，降低了模型定期重训练的成本。
6.  主要局限性：对于粗粒度任务，FSA可能已足够，MSA带来的提升有限；方法涉及多阶段和多项正则化，超参数调整可能较复杂；虽然计算开销低于提示类方法，但仍高于完全冻结骨干的基线。

---

### 🥉 [A Brain-Inspired Gating Mechanism Unlocks Robust Computation in Spiking Neural Networks](/audio-paper-digest-blog/posts/2026-05-04-a-brain-inspired-gating-mechanism-unlocks-robust)

✅ **7.5/10** | 前25% | #音频分类 | #神经形态计算 | #鲁棒性 #生物启发模型

👥 **作者与机构**

- 第一作者：Qianyi Bai（天津大学人工智能学院，天津大学计算机科学��技术学院）
- 通讯作者：Qiang Yu（天津大学人工智能学院，天津大学认知计算与应用天津市重点实验室）
- 作者列表：Qianyi Bai（天津大学人工智能学院、天津大学计算机科学与技术学院），Haiteng Wang（天津大学人工智能学院、天津大学未来技术学院），Qiang Yu（天津大学人工智能学院，天津大学认知计算与应用天津市重点实验室）

#

💡 **毒舌点评**

亮点：该论文最大亮点在于其“生物启发”的叙事逻辑非常完整——从生物学现象（动态电导）到数学建模（DGN），再到与人工网络经典结构（LSTM门控）的功能类比，最后落脚于实际优势（鲁棒性），形成了一个自洽且优雅的故事。短板：虽然实验全面，但模型的计算开销和参数量（尤其是完整DGN）相比标准LIF显著增加，论文对这种“性能提升”与“计算成本”之间的权衡讨论稍显不足，且主要在语音/音频任务上验证，对视觉等其他模态任务的泛化性未做探讨。

#

🔗 **开源详情**

- 代码：论文中未提供作者自己实现的DGN模型代码的开源仓库链接。但明确提到所有基线模型（LIF, HeterLIF, ALIF, RNN, LSTM）的结果均使用公开代码复现，以确保公平比较。
- 模型权重：未提及公开预训练模型权重。
- 数据集：使用的是公开数据集（TI46Alpha, TIDIGITS, SHD, SSC），论文中未提供数据获取链接，但可根据名称获取。
- Demo：未提供在线演示。
- 复现材料：提供了极其详尽的复现材料，包括：1) 所有数据集的预处理方法和数据增强策略（附录A.2.1, A.2.4）；2) 完整的网络架构和超参数配置表（附录表5）；3) 模型训练细节（优化器、学习率、epoch、硬件）；4) DGN模型的核心计算步骤伪代码（算法1）；5) BPTT中梯度的完整推导过程（附录A.1.4）。这些信息足以让同行复现论文的主要实验。
- 论文中引用的开源项目：论文使用了SpikingJelly框架（Fang et al., 2023）的组件（如时间编码）。在复现基线时，应使用了相关的公开SNN代码库。

📌 **核心摘要**

这篇论文旨在解决传统脉冲神经网络（SNN）中神经元模型过于简化（如LIF）导致的对噪声和时变信号处理能力不足的问题。方法核心是提出了一种动态门控神经元（DGN），其灵感来源于生物神经元的动态电导特性，通过引入依赖于输入活动的膜电导动态变化，实现了类似门控机制的信息选择性过滤和自适应噪声抑制。与已有方法相比，DGN将生物学中的动态电导机制直接转化为可训练的功能性门控单元，区别于LIF的静态泄漏和现有门控LIF（GLIF）的非生物性静态门控。主要实验结果表明，DGN在多个时序分类任务（如TIDIGITS、SHD）上达到了最优精度（例如在TIDIGITS上以小网络达到99.10%），并且在面对各种噪声（加性、减性、混合）和对抗攻击（FGSM、PGD、BIM）时，表现出远超LIF、ALIF等基线模型的鲁棒性。实际意义在于为构建更鲁棒、更高效的脉冲神经网络提供了一种生物合理且有效的神经元设计新范式。主要局限性是DGN引入了额外的参数和计算步骤，其计算开销高于标准LIF模型，尽管论文进行了分析，但在资源极度受限的边缘部署场景中需权衡。

#

---

### 4. [Resp-Agent: An Agent-Based System for Multimodal Respiratory Sound Generation and Disease Diagnosis](/audio-paper-digest-blog/posts/2026-05-04-resp-agent-an-agent-based-system-for-multimodal)

✅ **7.5/10** | 前25% | #音频分类 | #多模态模型 | #流匹配 #音频生成

👥 **作者与机构**

- 第一作者：Pengfei ZHANG（香港科技大学（广州））
- 通讯作者：Li Liu（香港科技大学（广州），邮箱：avrillliu@hkust-gz.edu.cn）
- 作者列表：Pengfei ZHANG（香港科技大学（广州）），Tianxin XIE（香港科技大学（广州）），Minghao YANG（香港科技大学（广州）），Li LIU（香港科技大学（广州））

💡 **毒舌点评**

亮点在于提出了一个完整的“感知-决策-生成-再训练”闭环框架，用LLM作为中央调度器来主动平衡数据和诊断弱项，思路比静态的“分析+增强”流水线更先进。但其诊断器本身（Longformer+模态编织）在架构上创新有限，强依赖于BEATs预训练特征和精心设计的注意力机制，其优势部分来自于使用了强大的预训练模型和大量合成数据，而非纯粹的诊断模型设计突破。

🔗 **开源详情**

- 代码：提供了代码仓库链接：`https://github.com/zpforlove/Resp-Agent`。
- 模型权重：提供了训练好的模型检查点托管地址：`https://huggingface.co/AustinZhang/resp-agent-models`。
- 数据集：提供了策展的Resp-229k数据集的获取地址：`https://huggingface.co/datasets/AustinZhang/resp-agent-dataset`。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了详细的超参数、优化器设置和训练调度计划（见附录），并声明所有训练和推理脚本及配置文件均已开源。
- 引用的开源项目：论文中引用并依赖了多个开源模型/工具，包括：BEATs（音频特征提取）、Longformer（诊断器骨干）、DeepSeek-V3.2-Exp/R1-Distill-Qwen-7B（规划器与文本生成）、Vocos（声码器）、Qwen3-0.6B-Base（生成器骨干）、PANNs、AST、Conformer等（作为基线对比）。

📌 **核心摘要**

本文旨在解决呼吸音自动分析领域面临的三大挑战：单模态表示的信息损失、标注数据稀缺与类别不平衡、以及分析与生成任务脱节。论文提出了Resp-Agent，一个由中央控制器（Thinker-A2CA）协调的多智能体闭环系统，统一了可控呼吸音生成与多模态疾病诊断。方法核心是：1）基于LLM和条件流匹配的生成器（Generator），能根据疾病语义和参考音频风格合成高质量、可控的呼吸音；2）采用模态编织和稀疏全局注意力机制的诊断器（Diagnoser），将临床文本与音频特征深度融合。主要实验结果表明，在严格的跨域测试集（KAUH + COUGHVID）上，Resp-Agent在16类疾病分类任务中达到了0.887的准确率和0.598的宏F1分数（使用平衡数据），显著优于单模态基线和传统数据增强方法。该工作在ICBHI基准测试上也取得了72.7%的ICBHI Score，超越此前SOTA。本文还构建并发布了包含22.9万条录音和LLM生成临床描述的大规模多模态基准数据集Resp-229k。主要局限性在于系统复杂度高，对多个强预训练模型（DeepSeek, BEATs, Longformer）依赖性强，且闭环规划过程的计算开销未详细讨论。

---

