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
| 🥇 | [Unmute the Patch Tokens: Rethinking Probing in Multi-Label A](/audio-paper-digest-blog/posts/2026-05-03-unmute-the-patch-tokens-rethinking-probing-in) | 8.5分 | 前25% |
| 🥈 | [Resp-Agent: An Agent-Based System for Multimodal Respiratory](/audio-paper-digest-blog/posts/2026-05-03-resp-agent-an-agent-based-system-for-multimodal) | 8.5分 | 前25% |
| 🥉 | [PACE: Pretrained Audio Continual Learning](/audio-paper-digest-blog/posts/2026-05-03-pace-pretrained-audio-continual-learning) | 7.5分 | 前25% |
| 4. | [MindMix: A Multimodal Foundation Model for Auditory Percepti](/audio-paper-digest-blog/posts/2026-05-03-mindmix-a-multimodal-foundation-model-for) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Unmute the Patch Tokens: Rethinking Probing in Multi-Label Audio Classification](/audio-paper-digest-blog/posts/2026-05-03-unmute-the-patch-tokens-rethinking-probing-in)

🔥 **8.5/10** | 前25% | #音频分类 | #自监督学习 #模型评估 | #自监督学习 #模型评估

👥 **作者与机构**

- 第一作者：Lukas Rauch（University of Kassel）
- 通讯作者：未明确说明（论文中提供了作者邮箱，但未明确指定通讯作者；Christoph Scholz作为资深作者可能负责通讯，但未明确标注）
- 作者列表：
    - Lukas Rauch（University of Kassel）
    - René Heinrich（University of Kassel, Fraunhofer IEE）
    - Houtan Ghaffari（Ghent University）
    - Lukas Miklautz（Max Planck Institute of Biochemistry）
    - Ilyass Moummad（INRIA Montpellier）
    - Bernhard Sick（University of Kassel）
    - Christoph Scholz（University of Kassel, Fraunhofer IEE）

💡 **毒舌点评**

亮点：论文像一位严谨的侦探，系统性地揭露了音频SSL评估中被忽视的“池化瓶颈”问题，并提出了“二值化原型探针”这一轻量却有效的“破案工具”，其基准测试的全面性（13个数据集）为该领域树立了新的评估标准。短板：所提方法本质上仍是对冻结特征的聚合，天花板受限于预训练模型本身；且所有实验均基于频谱图输入的ViT编码器，对其他音频表示（如波形、神经音频编码器）的适用性有待验证。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：`https://github.com/lurauch/unmute-patch-tokens/`。
- 模型权重：论文未明确说明是否提供所有用于评估的预训练SSL模型权重，但提到使用的均为公开发布的检查点（如EAT， BEATs等），其权重可能需从原论文渠道获取。
- 数据集：论文明确提供了部分未公开数据集的托管地址：`https://huggingface.co/datasets/lrauch/desed`， `https://huggingface.co/datasets/lrauch/spass`， `https://huggingface.co/datasets/lrauch/urban-sed`。其他标准数据集（如AudioSet， FSD50K等）假定可公开获取。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极其详尽的复现材料，包括：1) 完整的基准测试实施细节（附录D）；2) 所有数据集的详细描述（表8）；3) 所有池化方法的详细说明和参数量（表9）；4) 超参数选择的具体协议和固定参数（表10）；5) 完整的消融实验结果（表7）。
- 论文中引用的开源项目：论文代码可能依赖于常见的深度学习框架（如PyTorch）和音频处理工具，但未在文中明确列出具体的依赖项目。论文中提及并比较的SSL模型（如Audio-MAE， BEATs， EAT， SSLAM等）均为先前发表的工作，其代码和模型可能各自有独立仓库。

📌 **核心摘要**

1. 要解决什么问题：在音频自监督学习（SSL）中，尽管冻结模型加探针的评估范式高效且能反映嵌入质量，但该领域在追求State-of-the-Art性能时仍普遍采用计算成本高的微调方法。论文指出，核心原因是标准的全局池化（如使用[cls]令牌）创建了信息瓶颈，导致线性探针无法准确评估嵌入质量，尤其是对于分散、局部化的多标签音频事件。
2. 方法核心是什么：论文提出“二值化原型探针”（Protobin）作为一种新的池化方法。它通过一组可学习的、二值化的原型（+/-1）对冻结模型输出的所有令牌进行相似度匹配和最大池化聚合，实现按类别的多向量信息提取，从而克服单向量瓶颈。该方法简单、高效（内存减少32倍），且无需显式的正交性损失。
3. 与已有方法相比新在哪里：与使用单一[cls]令牌或全局可学习注意力池化相比，Protobin 能够激活不同的原型来捕捉同一音频片段中不同的声音事件，更适合多标签场景。与先前的原型方法相比，它简化了架构（解耦原型与类别，去除正交损失），并通过二值化实现了极高的内存效率，同时保持了竞争力。
4. 主要实验结果如何：论文在一个覆盖5个通用多标签数据集、7个少样本生物声学数据集和2个多类别控制数据集的综合基准上，对6个SSL编码器（及3个监督微调版本）测试了11种池化方法。主要结果如下表所示（以通用多标签数据集`as20k`和`urban`上的EAT编码器为例）：

| 数据集 | 模型 | 线性探针 (基线) | MHCA (最佳注意力) | Proto (类依赖) | Protobin (本文) | 微调 (上界) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| as20k | EAT | 17.29 | 26.11 | 31.06 | 31.67 | 40.2 |
| urban | EAT | 77.76 | 86.43 | 89.11 | 89.24 | 未说明 |

关键结论：Protobin 在绝大多数配置下显著优于线性和注意力探针，并在多标签任务上建立了清晰的方法层次：原型探针 > 注意力探针 > 固定全局探针。它弥合了探针与微调之间高达63%的性能差距。
5. 实际意义是什么：该工作确立了探针作为一种有竞争力的、高效的音频SSL模型评估范式，挑战了对昂贵微调的依赖。它为研究者提供了一个更可靠、更轻量的工具来评估和比较预训练音频模型的真实嵌入质量，并可能启发面向多标签音频事件检测/定位任务的架构设计。
6. 主要局限性是什么：探针性能的天花板仍然受制于预训练模型本身的质量。所有实验均基于频谱图和ViT编码器，对于其他音频输入形式或编码器架构的适用性未被验证。此外，原型数量（J）是一个需要针对任务调整的超参数。

---

### 🥈 [Resp-Agent: An Agent-Based System for Multimodal Respiratory Sound Generation and Disease Diagnosis](/audio-paper-digest-blog/posts/2026-05-03-resp-agent-an-agent-based-system-for-multimodal)

🔥 **8.5/10** | 前25% | #音频分类 | #多模态模型 | #音频生成 #流匹配

👥 **作者与机构**

- 第一作者：Pengfei ZHANG（香港科技大学（广州））
- 通讯作者：Li Liu（香港科技大学（广州））
- 作者列表：Pengfei ZHANG（香港科技大学（广州））、Tianxin XIE（未说明）、Minghao YANG（未说明）、Li Liu（香港科技大学（广州））

#

💡 **毒舌点评**

亮点在于其“分析-生成闭环”的系统设计哲学非常优雅，将生成模型从被动数据增强工具升级为主动识别模型弱点并生成针对性训练数据的“对手”，这超越了多数同类工作的思路。短板是尽管提供了详尽的下游任务评估，但对合成呼吸音的“临床真实性”仍停留在间接证明（模型能学会），缺乏由呼吸科医生进行的直接听感评估，这是医疗AI落地的关键一环。

#

🔗 **开源详情**

*   代码：提供了GitHub仓库链接：https://github.com/zpforlove/Resp-Agent
*   模型权重：提及了公开的模型检查点：https://huggingface.co/AustinZhang/resp-agent-models
*   数据集：提及了公开的Resp-229k数据集：https://huggingface.co/datasets/AustinZhang/resp-agent-dataset
*   Demo：论文中未提及在线演示。
*   复现材料：论文提供了详细的实验设置（附录C）、超参数配置，并声称所有脚本和配置已开源。复现声明中明确指出了可复现性资源的地址。
*   论文中引用的开源项目：依赖的开源项目/模型包括：BEATs, DeepSeek-V3.2-Exp (智能体核心), DeepSeek-R1-Distill-Qwen-7B (文本生成), Qwen3-0.6B-Base (生成器骨干), Longformer, Vocos (声码器), PANNs, AST, CLAP, HTS-AT, Conformer 等。

📌 **核心摘要**

1.  解决的问题：深度学习在呼吸音分析中面临两大根本挑战：一是将音频转为频谱图会导致瞬态事件和临床信息丢失；二是数据稀缺且类别严重不平衡，阻碍了模型的诊断鲁棒性。
2.  方法核心：提出了 Resp-Agent，一个由新型“主动对抗课程智能体”(Thinker-A2CA) 调度的闭环多模态系统。该系统包含一个基于流匹配的可控呼吸音生成器（用于合成特定病理的音频）和一个基于模态编织的诊断器（融合临床文本与音频特征进行诊断）。智能体能主动分析诊断弱点，并调度生成器进行针对性合成，形成“诊断-合成”闭环。
3.  与已有方法相比新在哪里：与静态管道或单纯的数据增强不同，Resp-Agent 实现了生成与诊断的协同设计；引入了首个用于可控呼吸音合成的多模态大语言模型（Resp-MLLM），解耦了病理内容与声学风格；提出了带有稀疏音频锚点的模态编织诊断架构，以线性复杂度捕捉长程依赖和毫秒级瞬态事件。
4.  主要实验结果：在ICBHI官方测试集上，诊断器取得了72.70的Score，显著超越先前SOTA。在自建的大规模跨域基准Resp-229k上，完整的Resp-Agent系统在跨域测试集（Test-CD）上取得了0.8870的准确率和0.5980的宏F1分数，相比无合成基线提升了+0.3862。生成器在可控性和保真度上也优于c-WaveGAN、AudioLDM 2等基线（FAD=1.13）。
5.  实际意义：为数据稀缺的医疗音频领域提供了一个端到端的解决范式，展示了通过智能体协调的可控生成来主动解决数据不平衡问题的巨大潜力，对推动医疗AI的公平性和鲁棒性有重要意义。
6.  主要局限性：尽管提供了客观指标和下游任务验证，但合成音频的临床真实性仍需医学专家直接评估；系统涉及多个复杂组件（LLM、流匹配、长上下文Transformer），实际部署和训练成本较高；基准测试主要基于回顾性数据，前瞻性临床验证缺失。

#

---

### 🥉 [PACE: Pretrained Audio Continual Learning](/audio-paper-digest-blog/posts/2026-05-03-pace-pretrained-audio-continual-learning)

✅ **7.5/10** | 前25% | #音频分类 | #持续学习 | #预训练 #参数高效微调

👥 **作者与机构**

- 第一作者：Chang Li（清华大学心理与认知科学系），Kanglei Zhou（清华大学心理与认知科学系）（共同第一作者）
- 通讯作者：Liyuan Wang（清华大学心理与认知科学系）
- 作者列表：Chang Li（清华大学心理与认知科学系），Kanglei Zhou（清华大学心理与认知科学系），Liyuan Wang（清华大学心理与认知科学系）

💡 **毒舌点评**

亮点：论文首次系统性地揭示了预训练音频模型在持续学习场景中面临的核心挑战——表示饱和与表示偏移，并设计了针对性的两阶段（FSA+MSA）框架PACE，在多个基准上取得了显著且稳定的性能提升。
短板：虽然实验充分，但核心基线（如RanPAC）本身在音频CL上的有效性已被揭示，PACE的创新更多体现在工程化的模块组合（LoRA、梯度投影、边界扰动）而非原理性突破；此外，所有实验基于单一自监督预训练模型（EAT），其泛化性虽在附录中用SSLAM验证，但仍是基于ViT架构，对卷积或其他音频骨干的适用性未知。

🔗 **开源详情**

- 代码：论文结论部分提及“我们将发布所有构建的基准和复现的基线以及我们的代码库”，但未提供具体代码仓库链接。当前状态：论文中提及将开源，但未提供具体链接。
- 模型权重：未提及公开预训练或微调后的模型权重。
- 数据集：使用了公开数据集（ESC-50, US8K, SC2, TIMIT, VocalSet），未创建新数据集。
- Demo：未提及在线演示。
- 复现材料：论文提供了详细的超参数设置（附录D）、算法伪代码（附录B）和实验细节，有助于复现。
- 引用的开源项目：论文依赖了多个开源模型和工具，包括：EAT (Chen et al., 2024), SSLAM (Alex et al., 2025), LoRA (Hu et al., 2021), SpecAugment (Park et al., 2019), ViT架构等。

📌 **核心摘要**

1. 要解决什么问题：解决预训练音频模型在持续学习中，因强调低级频谱细节而非结构化语义，导致严重的上下游任务不对齐，进而引发灾难性遗忘的问题。
2. 方法核心是什么：提出PACE框架，包含改进的首次适应（FSA）、自适应多会话子空间正交PEFT（MSA）和基于频谱图的边界感知扰动正则化。FSA通过分层LoRA和解析分类器稳定初始表征；MSA通过梯度投影到历史表征的零空间实现增量适应；边界扰动则用于增强类间可分性。
3. 与已有方法相比新在哪里：不同于直接迁移视觉CL方法（如提示学习）到音频的失败做法，也超越了简单冻结骨干+解析分类器（如RanPAC）的基线。PACE是首个针对音频CL特点设计的、统一处理粗粒度和细粒度场景的框架。
4. 主要实验结果如何：在三个粗粒度（ESC-50, US8K, SC2）和三个细粒度（TIMIT-2, TIMIT-3, VocalSet）音频CL基准上，PACE显著超越所有基线。例如，在细粒度任务上比RanPAC分别高出+5.3%（TIMIT-2）、+4.1%（TIMIT-3）和+6.3%（VocalSet）。与联合训练上界的差距也被大幅缩小（如在ESC-50上仅差0.75%）。关键消融实验证明每个核心模块（FSA, MSA, 梯度投影GP，边界损失Lreg）都不可或缺。
   - 主要性能对比如表2所示（见详细分析部分）。
   - 消融实验如表3和表4所示（见详细分析部分）。
5. 实际意义是什么：为动态变化的现实音频应用（如智能家居声音监控、自适应语音识别、在线音乐分类）提供了使预训练模型能够持续学习新类而不遗忘旧类的有效解决方案。
6. 主要局限性是什么：方法的计算开销高于纯冻结骨干的方法（如RanPAC）；超参数（如停止会话数`Nstop`、层冻结阈值`ρlayer`）需要针对任务进行调优；主要验证基于ViT架构的预训练音频模型，未在更广泛的音频模型架构上进行测试。

---

### 4. [MindMix: A Multimodal Foundation Model for Auditory Perception Decoding via Deep Neural-Acoustic Alignment](/audio-paper-digest-blog/posts/2026-05-03-mindmix-a-multimodal-foundation-model-for)

✅ **7.0/10** | 前25% | #音频分类 | #对比学习 | #多模态模型 #音频检索

👥 **作者与机构**

- 第一作者：RUI LIU（香港理工大学）
- 通讯作者：Jibin Wu（香港理工大学）（论文中明确标注*Corresponding authors）
- 作者列表：RUI LIU（香港理工大学），Zhige Chen（香港理工大学），Shu Peng（香港理工大学），Wenlong You（香港理工大学），Zhi-An Huang（香港城市大学（东莞）），Jibin Wu（香港理工大学），KC Tan（香港理工大学）

💡 **毒舌点评**

MindMix的核心亮点在于其CALRA模块，通过引入类型特定对齐和低秩融合，实现了EEG与音频表征的深度交互，而非简单的投影匹配，这在多模态BCI中是一个关键且有效的创新。然而，论文报告的近乎完美的分类准确率（如KUL数据集上的99.82%）在存在巨大个体差异和噪声的非侵入式EEG解码中令人惊讶，这强烈提示实验设置（如数据划分）可能过于理想化，其在真实世界复杂场景（如新被试、新环境）下的泛化能力仍需更严格的验证。

🔗 **开源详情**

- 代码：提供了代码仓库链接：https://github.com/CookieMikeLiu/MindMix。
- 模型权重：论文中未提及公开预训练模型权重。
- 数据集：论文中使用的数据集（如KUL, DTU, ESAA等）均为公开数据集，文中给出了引用。
- Demo：论文中未提及在线演示。
- 复现材料：论文在正文和附录中提供了详尽的超参数配置（表A2）、训练硬件、优化器设置、数据预处理步骤、负采样策略和模型复杂度分析（表A3），复现指引充分。
- 引用的开源项目：主要依赖了Wav2Vec 2.0作为音频编码器。EEG基础模型基线（LaBraM, CBraMod等）也引用了其官方实现。

📌 **核心摘要**

1. 问题：现有的EEG基础模型（如LaBraM, EEGPT）是单模态的，缺乏与听觉刺激的深度耦合，导致其在多样化的听觉解码任务（如注意解码、情感识别）上泛化能力不足。
2. 方法核心：提出MindMix，一个两阶段训练的多模态基础模型。第一阶段在3500+小时EEG数据上预训练一个高容量EEG编码器；第二阶段利用CALRA（交叉注意力低秩对齐）模块，在100+小时配对EEG-音频数据上，通过对比学习进行深度跨模态对齐。
3. 创新点：核心创新是CALRA模块，它包含类型特定对齐器（处理不同听觉刺激）、双向交叉注意力（全局上下文融合）和共享低秩对齐（强制双线性交互），超越了传统的浅层投影或拼接融合。
4. 主要结果：在多个下游任务上显著超越基线。例如，在KUL听觉注意解码（AAD）任务上，MindMix达到99.82%的平衡准确率，远超最强基线DARNet（94.81%）和单模态基础模型LaBraM（63.30%）。在音乐检索任务上，Trio准确率达到88.24%，同样优于所有对比方法。
5. 实际意义：为非侵入式听觉脑机接口（BCI）和认知神经科学研究提供了强大的基础模型，证明了深度跨模态对齐对神经解码的关键作用。
6. 主要局限性：论文承认大规模配对EEG-音频数据集稀缺是主要瓶颈，限制了对模型缩放定律的探索；报告的极高性能可能受限于特定的实验评估设置，真实世界鲁棒性有待验证。

#

---

