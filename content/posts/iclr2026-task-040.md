---
title: "ICLR 2026 - 音频分类 论文列表"
date: 2026-05-03
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
| 🥇 | [A Brain-Inspired Gating Mechanism Unlocks Robust Computation](/audio-paper-digest-blog/posts/2026-05-03-a-brain-inspired-gating-mechanism-unlocks-robust) | 8.5分 | 前25% |
| 🥈 | [PACE: Pretrained Audio Continual Learning](/audio-paper-digest-blog/posts/2026-05-03-pace-pretrained-audio-continual-learning) | 8.0分 | 前25% |
| 🥉 | [Unmute the Patch Tokens: Rethinking Probing in Multi-Label A](/audio-paper-digest-blog/posts/2026-05-03-unmute-the-patch-tokens-rethinking-probing-in) | 7.5分 | 前25% |
| 4. | [Resp-Agent: An Agent-Based System for Multimodal Respiratory](/audio-paper-digest-blog/posts/2026-05-03-resp-agent-an-agent-based-system-for-multimodal) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [A Brain-Inspired Gating Mechanism Unlocks Robust Computation in Spiking Neural Networks](/audio-paper-digest-blog/posts/2026-05-03-a-brain-inspired-gating-mechanism-unlocks-robust)

🔥 **8.5/10** | 前25% | #音频分类 | #脉冲神经网络 | #鲁棒性 #神经形态计算

👥 **作者与机构**

- 第一作者：Qianyi Bai（天津大学智能与计算学院；天津大学计算机科学与技术学院）
- 通讯作者：Qiang Yu（天津大学智能与计算学院，认知计算与应用天津市重点实验室）
- 作者列表：Qianyi Bai（天津大学智能与计算学院；天津大学计算机科学与技术学院）、Haiteng Wang（天津大学智能与计算学院；天津大学未来技术学院）、Qiang Yu（天津大学智能与计算学院，认知计算与应用天津市重点实验室）

💡 **毒舌点评**

亮点：将生物神经元的动态电导机制形式化为功能性的“门控”，并建立了与LSTM的理论联系，为SNN的鲁棒性提供了生物可信的增强方案，实验设计（特别是未见噪声评估）严谨。  
短板：核心创新偏向于模型改进，在任务广度（仅限音频分类）和硬件部署验证（仅理论能耗估算）上存在明显短板，离真正的“解锁”鲁棒计算和广泛实用性尚有距离。

🔗 **开源详情**

- 代码：论文中承诺公开代码仓库，但未在文中提供具体链接。
- 模型权重：未提及公开具体权重。
- 数据集：使用的是公开的基准数据集（TI46Alpha, TIDIGITS, SHD, SSC），论文未提供自有数据集。
- Demo：未提及在线演示。
- 复现材料：论文提供了极其详细的超参数设置表（表5）、网络结构、训练策略（优化器、学习率、轮数）以及基线模型的复现指导，附录中还包含了算法伪代码和梯度推导，复现信息非常充分。
- 论文中引用的开源项目：论文中引用的开源工作包括GLIF, ALIF, Heterogeneous LIF, TC-LIF等模型的公开实现，以及SpikingJelly框架。

📌 **核心摘要**

1. 问题：传统脉冲神经网络（SNN）采用简化的LIF神经元模型，缺乏生物神经元中动态的电导调节机制，导致其对噪声和时间变化的适应性及鲁棒性不足。
2. 方法核心：提出动态门控神经元（DGN）模型。其核心是在神经元膜电位方程中引入一个由突触输入活动动态调制的电导项（C_i * D_i），该机制功能上等效于生物启发的“门控”，能自适应地调节膜电位衰减率和信息流。
3. 新意：与传统静态门控（如GLIF）或简单阈值适应（如ALIF）不同，DGN的门控机制直接源于对生物神经元动态电导的重新建模，且从理论上证明了其在随机扰动下的稳定性优于LIF。论文首次将生物启发的动态门控确立为提升SNN鲁棒计算的关键机制。
4. 主要实验：在音频分类数据集（TI46Alpha， TIDIGITS）和神经形态数据集（SHD， SSC）上进行评估。在干净数据上，DGN达到或超过了现有SOTA（例如在TIDIGITS上，前馈DGN准确率98.59%，循环DGN达99.10%）。在未见噪声和对抗攻击评估中，DGN表现出显著优势，例如在TIDIGITS数据集上，前馈DGN在加性噪声(p=0.006)下准确率仍保持95.34%，而LIF仅为46.83%；在FGSM攻击(ε=0.003)下，DGN准确率90.35%，LIF仅为39.53%。
5. 实际意义：为设计更鲁棒、更适应动态环境的脉冲神经网络提供了新的神经元设计范式，桥接了生物机制与人工神经网络中的门控概念，有望提升神经形态芯片在噪声环境下的可靠性。
6. 主要局限：实验主要集中在语音/音频分类任务，未在视觉等其他SNN主流领域验证泛化性；虽然提供了能耗估算，但缺乏在真实神经形态硬件上的部署和能效实测验证。

---

### 🥈 [PACE: Pretrained Audio Continual Learning](/audio-paper-digest-blog/posts/2026-05-03-pace-pretrained-audio-continual-learning)

🔥 **8.0/10** | 前25% | #音频分类 | #持续学习 | #预训练 #参数高效微调

👥 **作者与机构**

- 第一作者：Chang Li（清华大学心理与认知科学系）
- 通讯作者：Liyuan Wang（清华大学心理与认知科学系）
- 作者列表：Chang Li（清华大学心理与认知科学系）、Kanglei Zhou（清华大学心理与认知科学系）、Liyuan Wang（清华大学心理与认知科学系）

💡 **毒舌点评**

亮点： 论文没有简单地将视觉领域的持续学习方法套用到音频上，而是通过系统基准测试“诊断”出音频模型的特有病灶（如上游-下游表示失配导致的严重偏移和早期饱和），并据此设计了针对性的“药方”（如层感知适应和子空间投影），这种从问题分析到方法设计的闭环非常扎实。短板： 论文在技术细节上存在选择性模糊，例如，用于计算表示偏移的“未学习模型”的构建（LoRA减法）和梯度投影的SVD计算，其具体实现和计算复杂度对实际部署的影响讨论不足，使得方法的完整复现存在一个“黑箱”。

🔗 **开源详情**

- 代码： 论文在“Reproducibility statement”中表示将在接收后发布所有构建的基准、复现的基线以及我们的代码库（“we will release all constructed benchmarks and reproduced baselines along with our codebase”），但论文中未提供具体的代码仓库链接。
- 模型权重： 论文使用EAT和SSLAM作为预训练骨干，但未提及公开的预训练权重具体获取链接。
- 数据集： 使用的数据集（ESC-50, US8K, SC2, TIMIT, VocalSet）均为公开数据集，但论文构建的CL任务划分（会话划分）将在其代码库中发布。
- Demo： 未提及。
- 复现材料： 论文提供了详细的实验设置（硬件、超参数、数据集统计见Table 5），附录B给出了改进FSA的伪代码（Algorithm 1），有助于复现。
- 论文中引用的开源项目： 论文代码依赖于或对比了多个开源方法，包括L2P、DualPrompt、S-Prompt++、RanPAC、LoRASub、HiDe-Prompt等持续学习方法，以及EAT、SSLAM等预训练音频模型。

📌 **核心摘要**

1.  问题： 预训练音频模型在面临数据分布持续变化的真实场景时，直接应用视觉领域的参数高效微调（PEFT）持续学习策略会导致性能严重下降。这是因为音频模型侧重低级频谱细节而非结构化语义，导致了严重的上游-下游表示失配。
2.  方法核心： 提出PACE（Pretrained Audio Continual lEarning）框架。其核心是：1）改进首次会话适应（FSA），通过层感知LoRA和限制性头部学习来避免表示饱和；2）引入多会话适应（MSA），通过自适应子空间正交PEFT（利用LoRA减法和梯度投影）在多个会话中逐步对齐表示，同时约束对旧知识的干扰；3）设计基于频谱变换的边界感知扰动正则化，增强类内紧凑性和类间可分性。
3.  创新点： a) 首次系统建立音频持续学习基准并揭示其与视觉领域的根本差异；b) 针对音频特性，提出了分阶段的适应策略：前期通过改进FSA精细调整骨干网络，中期通过子空间投影进行受控适应，后期冻结骨干网络；c) 将表示偏移的几何约束（子空间正交）与决策边界的优化（边界感知扰动）相结合。
4.  主要实验结果： 在六个音频CL基准（3个粗粒度，3个细粒度）上，PACE大幅超越现有基线。例如，在细粒度任务TIMIT-2、TIMIT-3和VocalSet上，性能分别比最强基线提升至少5.3%、4.1%和6.3%，并将与联合训练上界的差距分别缩小至4.3%、1.2%和7.6%。关键消融实验证明每个核心组件（FSA， MSA， 梯度投影，边界感知损失）都带来了显著的性能增益。
5.  实际意义： 为预训练音频模型在动态环境（如不断变化的语音指令、环境声音）中的持续适应提供了有效且可扩展的解决方案，有助于提升智能语音助手、环境监测等系统的长期鲁棒性。
6.  主要局限性： 方法引入了额外的计算开销（尽管比其他PEFT方法小），且其性能（尤其是MSA阶段）可能对停止适应的阈值N_stop等超参数有一定敏感性。此外，依赖于二阶统计的解析分类器可能在任务类别数极大或分布极其复杂时面临挑战。

---

### 🥉 [Unmute the Patch Tokens: Rethinking Probing in Multi-Label Audio Classification](/audio-paper-digest-blog/posts/2026-05-03-unmute-the-patch-tokens-rethinking-probing-in)

✅ **7.5/10** | 前25% | #音频分类 | #自监督学习 | #原型学习 #模型评估

👥 **作者与机构**

- 第一作者：Lukas Rauch（University of Kassel）
- 通讯作者：未明确说明（从作者列表顺序和邮箱推测为第一作者 Lukas Rauch 或通讯作者 Bernhard Sick）
- 作者列表：
  - Lukas Rauch（University of Kassel）
  - René Heinrich（University of Kassel, Fraunhofer IEE）
  - Houtan Ghaffari（Ghent University）
  - Lukas Miklautz（ML and Systems Biology, MPI of Biochemistry）
  - Ilyass Moummad（INRIA Montpellier）
  - Bernhard Sick（University of Kassel）
  - Christoph Scholz（University of Kassel, Fraunhofer IEE）

💡 **毒舌点评**

亮点：论文用极其扎实的基准测试（13个数据集，6个模型）揭示了音频SSL领域一个长期被忽视但关键的问题——`[cls]`标记的全局池化瓶颈，并用简单有效的二值化原型探针（`protobin`）漂亮地解决了它，为社区提供了更可靠的模型评估范式。短板：虽然实验充分，但核心方法的理论新颖性有限，主要是对原型网络进行了架构简化（解耦类别、二值化），更像是一次出色的工程优化和系统验证，而非概念层面的突破。

🔗 **开源详情**

- 代码：提供代码仓库链接：`https://github.com/lurauch/unmute-patch-tokens/`
- 模型权重：未提及提供预训练骨干模型或`protobin`探针的权重。实验使用的是公开可用的SSL骨干模型（如EAT, BEATs）的官方检查点。
- 数据集：部分数据集（desed, spass, urban-sed）由作者上传至Hugging Face Hub，并提供了链接。
- Demo：未提及。
- 复现材料：非常充分。论文详细说明了训练设置（优化器、调度器、损失函数）、超参数搜索空间与策略、所有数据集划分细节，以及硬件使用情况。附录中提供了完整的结果表格和消融实验。
- 引用的开源项目：论文依赖并评估了多个开源的音频SSL模型（A-MAE, BEATs, ASiT, EAT, SSLAM等），以及HEAR、BirdSet等基准测试工具和数据集。

📌 **核心摘要**

1. 要解决的问题：在音频自监督学习（SSL）领域，使用冻结模型加轻量级探针（如线性探针）的评估范式，其性能远逊于全模型微调。作者认为根本原因是全局池化（尤其是使用`[cls]`标记）造成了信息瓶颈，无法有效利用音频表征中分散、局部化的声音事件信息，导致探针质量被低估。
2. 方法核心：提出二值化原型探针（`protobin`）。它不将整个表征压缩为单个向量，而是学习一组类无关的、二值化的原型（`p_j ∈ {-1, +1}^D`），通过计算每个原型与所有补丁令牌（patch tokens）的余弦相似度，并进行最大池化聚合，生成一个类条件化的、多向量的描述符，最后接线性分类器。
3. 与已有方法相比新在哪里：
   - 对抗标准的单向量探针（线性、注意力池化）的信息瓶颈，实现按类、多向量的信息聚合。
   - 相较于先前的类相关原型方法，进行了关键简化：原型与类别解耦（类无关）、移除了显式正交损失、并引入二值化以大幅减少内存占用（32倍）。简化后性能更鲁棒。
4. 主要实验结果：在跨越5个通用多标签音频数据集、6个主流音频SSL编码器（及其监督+变体）的广泛基准测试中，`protobin`一致性地超越了所有其他10种探针方法。例如，在as20k数据集上，`protobin`平均比线性探针高出14.41% mAP。它显著缩小了与微调性能的差距，且模型评估排名与线性探针完全不同，揭示了`[cls]`标记作为评估指标的不可靠性。
5. 实际意义：证明了轻量级探针可以可靠地评估SSL音频模型，挑战了追求AudioSet SOTA必须依赖昂贵微调的惯例，为社区提供了一个更高效、更公平的评估框架。
6. 主要局限性：方法目前仅在音频分类的评估阶段进行验证；虽然证明了探针可接近微调性能，但探针本身不作为最终部署的模型；研究范围限于音频频谱图模型。

---

### 4. [Resp-Agent: An Agent-Based System for Multimodal Respiratory Sound Generation and Disease Diagnosis](/audio-paper-digest-blog/posts/2026-05-03-resp-agent-an-agent-based-system-for-multimodal)

✅ **7.5/10** | 前25% | #音频分类 | #多模态模型 | #流匹配 #数据增强

👥 **作者与机构**

- 第一作者：Pengfei ZHANG（香港科技大学（广州））
- 通讯作者：Li Liu（香港科技大学（广州））
- 作者列表：Pengfei ZHANG（香港科技大学（广州））、Tianxin XIE（未说明）、Minghao YANG（未说明）、Li LIU（香港科技大学（广州））

💡 **毒舌点评**

这篇工作用LLM驱动的闭环代理系统将“诊断”与“生成”拧成一股绳，思路在医疗AI里很时髦；但任务垂直度高（呼吸音+罕见病），方法能否泛化到其他听觉病理场景尚存疑。

🔗 **开源详情**

- 代码：提供，GitHub仓库：https://github.com/zpforlove/Resp-Agent
- 模型权重：提供，托管于Hugging Face：https://huggingface.co/AustinZhang/resp-agent-models
- 数据集：公开，Resp-229k数据集托管于Hugging Face：https://huggingface.co/datasets/AustinZhang/resp-agent-dataset
- Demo：论文中未提及在线演示。
- 复现材料：提供了训练和推理脚本、配置文件以及附录中的详细超参数设置，足以支持复现主要结果。
- 依赖的开源项目/模型：DeepSeek-V3.2-Exp, DeepSeek-R1-Distill-Qwen-7B, Qwen3-0.6B-Base, BEATs, Longformer, Conformer, Vocos, StableAudio Open, AudioLDM 2, c-WaveGAN等。

📌 **核心摘要**

本文旨在解决基于深度学习的呼吸音听诊面临的三个核心挑战：单模态信息丢失、数据稀缺与类别不平衡、分析与生成脱节。为此，作者提出了Resp-Agent，一个由新型主动对抗课程代理（Thinker-A2CA）协调的自主多模态系统。该系统包含三个关键组件：（1）Resp-229k，一个包含22.9万条录音并配有LLM蒸馏临床叙述的大规模基准数据集；（2）生成器（Generator），通过模态注入将文本大语言模型（Qwen3-0.6B）改造为多模态单元生成器，并结合条件流匹配解码器合成高保真可控的呼吸音；（3）诊断器（Diagnoser），采用模态编织（Modality Weaving）策略，在Longformer骨干网络中将临床文本与音频嵌入早期融合，并通过战略全局注意力（Strategic Global Attention）和稀疏音频锚点（Audio Anchors）捕捉长程上下文与毫秒级瞬态事件。实验表明，Resp-Agent在ICBHI四分类任务上达到了72.7的ICBHI分数，超越先前最优方法；在自建的Resp-229k跨域测试集上，完整系统在类别不平衡和数据稀缺场景下均显著优于基线，宏观F1分数在平衡后达到0.598。该框架为医疗音频领域提供了一个分析与生成协同设计的范例，提升了诊断的鲁棒性。其主要局限性可能在于系统复杂度较高，且依赖高质量配对的文本-音频数据。

---

