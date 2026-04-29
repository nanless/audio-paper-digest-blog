---
title: "ICASSP 2026 - 语音评估 论文列表"
date: 2026-04-29
draft: false
tags: ["语音评估"]
categories: [icassp-2026]
description: "共 5 篇 ICASSP 2026 语音评估 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音评估

共 **5** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Mispronunciation Detection and Diagnosis Without Model Train](/audio-paper-digest-blog/posts/2026-04-29-mispronunciation-detection-and-diagnosis-without) | 8.0分 | 前25% |
| 🥈 | [Matrix-Structured Hierarchical Convolutional Modeling for Pr](/audio-paper-digest-blog/posts/2026-04-29-matrix-structured-hierarchical-convolutional) | 8.0分 | 前25% |
| 🥉 | [Reference-Aware SFM Layers for Intrusive Intelligibility Pre](/audio-paper-digest-blog/posts/2026-04-29-reference-aware-sfm-layers-for-intrusive) | 7.5分 | 前10% |
| 4. | [Session-Level Spoken Language Assessment with A Multimodal F](/audio-paper-digest-blog/posts/2026-04-29-session-level-spoken-language-assessment-with-a) | 7.5分 | 前25% |
| 5. | [Fine-Tuning Large Multimodal Models for Automatic Pronunciat](/audio-paper-digest-blog/posts/2026-04-29-fine-tuning-large-multimodal-models-for-automatic) | 7.0分 | 前50% |

---

## 📋 论文详情

### 🥇 [Mispronunciation Detection and Diagnosis Without Model Training: A Retrieval-Based Approach](/audio-paper-digest-blog/posts/2026-04-29-mispronunciation-detection-and-diagnosis-without)

🔥 **8.0/10** | 前25% | #语音评估 | #检索增强 | #预训练 #零样本

👥 **作者与机构**

- 第一作者：Huu Tuong Tu（河内科技大学，VNPT AI/VNPT集团）
- 通讯作者：Nguyen Thi Thu Trang（河内科技大学）
- 作者列表：Huu Tuong Tu（河内科技大学，VNPT AI/VNPT集团）、Ha Viet Khanh（河内科技大学）、Tran Tien Dat（河内科技大学）、Vu Huan（国家经济大学）、Thien Van Luong（国家经济大学）、Nguyen Tien Cuong（VNPT AI/VNPT集团）、Nguyen Thi Thu Trang（河内科技大学）

#

💡 **毒舌点评**

亮点：论文巧妙地将“检索”这一思想从生成领域迁移到了评估任务，构建音素嵌入池替代了复杂的模型训练，思路清新且在FRR等关键指标上效果显著，证明了预训练模型蕴含的语音知识足以支持细粒度的发音诊断。短板：作为一篇强调“无训练”的方法，其在大规模真实场景下的鲁棒性存疑，且论文承认的高插入错误率（PER高达104%）暴露出检索式方法在序列生成上的固有短板，这与其说是一个“特性”，不如说是一个待解决的“问题”。

#

📌 **核心摘要**

1.  问题：传统的发音错误检测与诊断（MDD）系统通常需要训练或微调专门的声学模型（如音素识别器），过程复杂且依赖大量标注数据。
2.  方法核心：提出了一种基于检索的免训练框架（PER-MDD）。首先，利用预训练的HuBERT模型，为训练集中的每个音素片段提取其中心帧的嵌入向量，构建一个“音素嵌入池”。在推理时，对测试语音的每一帧提取嵌入，在池中通过余弦相似度检索最相似的k个候选音素，通过投票和阈值筛选确定预测的音素，最后与标准音素序列对齐以检测错误。
3.  新在哪里：首次将检索增强生成（RAG）的范式应用于MDD任务，避免了任何音素级模型的训练，完全依赖一个预训练的、通用的ASR模型（HuBERT）和一个检索过程。
4.  主要实验结果：在L2-ARCTIC数据集上，PER-MDD在MDD的核心指标上表现优异：错误拒绝率（FRR）为4.43%（最低），F1分数为69.60%（最高），检测准确率（DA）为91.57%。与强基线MDDGCN相比，F1提升了约13个百分点。消融实验证明了HuBERT模型、中间帧池化策略和适度的检索池大小（500条语料）的有效性。
5.  实际意义：为CAPT系统提供了一种更简单、轻量、易于部署的MDD方案，降低了构建发音诊断系统的门槛。
6.  主要局限性：该方法会产生较多的插入错误，导致语音识别的词错误率（PER）远高于基线方法（104.08% vs ~17%），虽然论文认为这对MDD影响不大，但这仍然是其技术路线的一个明显缺陷。此外，性能依赖于检索池的质量和大小，对新领域或新说话人的泛化能力有待验证。

#

---

### 🥈 [Matrix-Structured Hierarchical Convolutional Modeling for Pronunciation Assessment and Mispronunciation Detection](/audio-paper-digest-blog/posts/2026-04-29-matrix-structured-hierarchical-convolutional)

🔥 **8.0/10** | 前25% | #语音评估 | #卷积神经网络 | #错音检测 #自监督学习

👥 **作者与机构**

- 第一作者：David Fernández-García（西班牙巴利亚多利德大学 ECA-SIMM 研究组）
- 通讯作者：未说明
- 作者列表：David Fernández-García（西班牙巴利亚多利德大学 ECA-SIMM 研究组）、César González-Ferreras（西班牙巴利亚多利德大学 ECA-SIMM 研究组）、Valentín Cardeñoso-Payo（西班牙巴利亚多利德大学 ECA-SIMM 研究组）、Mario Corrales-Astorgano（西班牙巴利亚多利德大学 ECA-SIMM 研究组）

#

💡 **毒舌点评**

这篇论文成功地用CNN的“锤子”敲打了注意力机制的“钉子”，通过精心的矩阵特征工程和层次化卷积设计，在词级评估和错音检测上取得了显著提升，证明了在发音评估任务中，对音素局部上下文的显式建模（如三音素窗口）有时比堆砌更复杂的全局注意力更有效、更直接。然而，与当前最强的SOTA模型（如HMAMBA）相比，其在多个基础指标上（如音素MSE、语句准确率）仍有明显差距，这提示其模型容量或特征融合方式可能存在瓶颈，创新性更多体现在建模范式而非绝对性能的登顶。

#

📌 **核心摘要**

1.  问题：现有自动发音评估（APA）和错音检测（MDD）系统大多依赖注意力机制，且对异构特征（如GoP、SSL表征、韵律特征）处理方式简单（直接拼接），忽略了结构化信息，并将不同音位类别（元音/辅音）同等对待，未能充分建模音素级错音与更高层面评分之间的关联。
2.  方法核心：提出M3C框架，核心是将多种异构特征重组为矩阵结构输入（列对齐、行代表不同视角），并设计了紧凑卷积压缩器（CCC） 对矩阵进行跨特征维度的列向卷积压缩。模型采用层次化结构，在音素、词、语句级别堆叠CCC模块，并在各级引入多方面注意力关联不同预测目标，最终与MDD任务联合训练。
3.  创新性：主要创新在于：1）矩阵化特征表示，保留特征间的结构关系；2）设计CCC模块替代主流注意力，专注局部关系建模；3）将元音和辅音的GoP特征分开处理，并在融合时标注类别；4）显式使用三音素上下文窗口。
4.  主要实验结果：在speechocean762数据集上：
    - 在仅使用GoP特征的公平对比中，M3C在词级总分上相对GOPT基线提升+19.4%，相对近期CNN模型提升+7.2%。
    - 使用全部特征时，M3C在词级总分和MDD F1上相比SOTA（HMAMBA）分别提升+15%（绝对值从0.721到0.816）和+15%（绝对值从63.8%到78.8%）。
    - 消融实验表明，移除矩阵特征提取和三音素上下文会导致性能大幅下降，而移除音素级方面注意力影响较小。
    关键数据对比表：
    | 类别 | 模型 | Phone Score (MSE↓) | Word Score Total (PCC↑) | Utterance Score Total (PCC↑) | MDD F1↑ |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | Baseline (GoP only) | GOPT [1] | 0.085 | 0.549 | 0.742 | - |
    | CNN-Based (GoP only) | M3C | 0.074 | 0.676 | 0.779 | - |
    | SOTA | HMAMBA [6] | 0.062 | 0.718 | 0.829 | 63.8% |
    | SOTA (本文对比) | M3C | 0.066 | 0.721 | 0.816 | 78.8% |
5.  实际意义：为计算机辅助发音训练系统提供了一个新的、有效的建模框架，强调了在语音评估任务中对特征结构和局部音素上下文进行显式建模的重要性。其代码开源有助于后续研究。
6.  主要局限性：虽然与部分基线相比有优势，但与最强的SOTA（如基于状态空间模型的HMAMBA）在音素级MSE、语句级准确率等基础指标上仍有差距，表明其绝对性能上限有待进一步挖掘。论文未提供模型参数量、训练时间等效率信息。

#

---

### 🥉 [Reference-Aware SFM Layers for Intrusive Intelligibility Prediction](/audio-paper-digest-blog/posts/2026-04-29-reference-aware-sfm-layers-for-intrusive)

✅ **7.5/10** | 前10% | #语音评估 | #语音大模型 | #预训练 #模型评估

👥 **作者与机构**

- 第一作者：Hanlin Yu（UBC ECE, Canada）
- 通讯作者：Linkai Li（Stanford EE, USA）、Shan X. Wang（Stanford EE, USA）
- 作者列表：Hanlin Yu（UBC ECE, Canada），Haoshuai Zhou（Orka Labs Inc., China），Boxuan Cao（Orka Labs Inc., China），Changgeng Mo（Orka Labs Inc., China），Linkai Li（Stanford EE, USA），Shan X. Wang（Stanford EE, USA）

💡 **毒舌点评**

亮点：本文在CPC3挑战赛中成功夺冠，证明了系统整合SFM多层特征与显式参考信号对于侵入式可懂度预测任务的有效性，且消融实验设计系统、结论清晰。短板：核心创新点更偏向于对现有组件的精巧组合与工程优化，缺乏在模型原理层面的根本性突破，且论文未开源代码或模型，限制了其作为可复现基准的价值。

📌 **核心摘要**

1.  问题：传统的侵入式语音可懂度预测方法（依赖于干净参考信号）性能上未能稳定超越非侵入式系统，作者认为主要原因是未能充分利用语音基础模型（SFM）强大的内部表征。
2.  方法核心：提出一个侵入式预测框架，将双耳助听器信号与干净参考信号分别输入冻结的SFM（Canary-1B-flash和parakeet-tdt-0.6b-v2）提取中深层（10-16层）表征，并通过多尺度卷积神经网络（MSCNN）前端注入细粒度声学特征。之后，通过跨参考注意力、跨耳注意力以及温度控制的“最佳耳”池化机制进行融合与打分。
3.  新意：与之前简单使用SFM的CLS token或浅层特征不同，本文系统探索了SFM的多层聚合策略（通过severity token读出）、显式参考条件化以及双耳融合方式，证明了这些设计选择的协同作用。
4.  实验结果：在CPC3的开发集和评估集上，模型RMSE分别达到22.36和24.98，排名第一。消融实验证实了使用SFM中深层特征（优于单层）、包含参考信号、使用severity token进行听者条件化以及“最佳耳”池化（优于双耳平均）的有效性。具体实验结果见下表：
    | 方法/变体 | 开发集 RMSE | 评估集 RMSE |
    | :--- | :--- | :--- |
    | HASPI 基线 | 28.00 | 29.50 |
    | 本文方法 (CPC3冠军) | 22.36 | 24.98 |
    | CPC3 第二名 [9] | 21.87 | 25.31 |
    | CPC3 第三名 [9] | 22.80 | 25.54 |
    | 使用PTA4数值替代severity token | 22.29 | 25.11 |
    | 使用PTA8数值替代severity token | 23.20 | 25.30 |
    | 无severity条件（用CLS替代） | 23.88 | 25.69 |
    | 无参考信号 | 22.82 | 25.39 |
    | 双耳特征平均池化 | 22.82 | 25.29 |
5.  实际意义：为构建基于SFM的侵入式可懂度预测器提供了实用的设计指南，推动了助听器语音质量评估技术的发展。
6.  主要局限：模型依赖于大型冻结SFM，计算成本可能较高；实验仅在特定挑战赛数据集（CPC3）上进行，泛化性需更多验证；论文未提供开源代码或模型，限制了可复现性。

---

### 4. [Session-Level Spoken Language Assessment with A Multimodal Foundation Model Via Multi-Target Learning](/audio-paper-digest-blog/posts/2026-04-29-session-level-spoken-language-assessment-with-a)

✅ **7.5/10** | 前25% | #语音评估 | #多任务学习 | #语音大模型 #多模态模型

👥 **作者与机构**

- 第一作者：Hong-Yun Lin
- 通讯作者：未说明
- 作者列表：Hong-Yun Lin, Jhen-Ke Lin, Chung-Chun Wang, Hao-Chien Lu, Berlin Chen（均来自Department of Computer Science and Information Engineering, National Taiwan Normal University）

#

💡 **毒舌点评**

亮点：该论文最漂亮的一手是将“评估人类评估过程”这个理念贯彻到底——不是去分数个片段再拼接，而是设计一个能“一口气”看完考生整个作答会话的模型，这从架构层面就对齐了人类考官的认知习惯。短板：虽然方法在特定基准上效果拔群，但这种高度定制化的会话级评估模型，在面对更开放、更多样化的口语任务或语言时，其泛化能力和实际部署的灵活性尚未得到证明，更像一个“专用冠军”而非“通用强者”。

#

📌 **核心摘要**

1.  问题：现有的自动口语语言评估（SLA）系统要么采用易产生误差传播的级联管道，要么使用只能处理短时音频的端到端模型，无法像人类考官那样整合整个测试会话的语篇级证据进行综合评分。
2.  方法核心：提出一种基于多模态基础模型（Phi-4-Multimodal）的会话级评估框架。该模型将整个测试会话（包含多个音频响应）格式化为对话序列一次性输入，通过多任务学习（MTL）直接联合预测四个部分的分数和一个总体分数。同时，引入了一个并行的、基于冻结Whisper模型的“声学能力先验”（APP），将其作为前缀令牌注入模型，以显式增强对流利度、停顿等副语言特征的感知。
3.  与已有方法相比新在哪里：新在建模范式上：1）实现了真正的会话级、端到端、单次前向传播的评估，避免了分段评估和后期融合带来的误差。2）提出了声学先验注入机制，将外部声学模型的知识作为可学习的先验融入多模态大模型，无需手工特征工程。
4.  主要实验结果：在Speak & Improve 2025基准测试中，所提出的Phi-4-MTL-APP模型取得了最优性能，总体RMSE为0.360，皮尔逊相关系数（PCC）为0.827。它超越了当时最强的集成系统（Perezoso， RMSE 0.364）和自己的基线系统（Phi-4-CTG， RMSE 0.412）。消融实验表明，MTL比CTG（RMSE 0.412）误差降低超过12%，而添加APP模块在长语音部分（P3/P4）带来了进一步的稳定提升。
5.  实际意义：该研究为计算机辅助语言学习（CALL）提供了一个更准确、更接近人类评估过程、且模型更紧凑（单模型）的自动口语评分方案，有助于降低对人工评分的依赖。
6.  主要局限性：1）模型的性能验证局限于特定的Speak & Improve基准测试，其跨任务、跨语言的泛化能力有待进一步研究。2）虽然承诺开源，但论文发表时未提供代码，依赖于特定的商业基础模型（Phi-4）和数据集。

---

### 5. [Fine-Tuning Large Multimodal Models for Automatic Pronunciation Assessment](/audio-paper-digest-blog/posts/2026-04-29-fine-tuning-large-multimodal-models-for-automatic)

✅ **7.0/10** | 前50% | #语音评估 | #微调 | #语音大模型 #提示工程

👥 **作者与机构**

- 第一作者：Ke Wang（微软，北京）
- 通讯作者：未说明
- 作者列表：Ke Wang（微软），Wenning Wei（微软），Yan Deng（微软），Lei He（微软），Sheng Zhao（微软）

💡 **毒舌点评**

亮点在于其系统性：不是简单地把LMM丢进APA任务，而是细致地对比了多粒度与单粒度、多方面与单方面的性能差异，并敏锐地捕捉到PCC与SCC的指标分化现象，为后续评估提供了更优视角。短板则在于“重锤打棉花”——用强大的LMM去解决音素级评估这个“硬骨头”，效果却依然不理想，暴露了当前LMM在处理极端细粒度音频-文本对齐任务上的根本局限，单纯靠微调似乎遇到了天花板。

📌 **核心摘要**

1.  要解决什么问题：评估并提升大型多模态模型（LMM）在自动发音评估（APA）任务中的性能，尤其是在处理多粒度（音素、单词、句子）和多方面（准确度、流利度、韵律等）评估时的能力。
2.  方法核心是什么：以Qwen2-Audio-7B-Instruct作为基座模型，采用LoRA进行参数高效微调。设计了精细的提示（Prompt）以指导模型进行结构化多粒度评估。引入SimPO（一种无需参考模型的偏好优化）与交叉熵损失结合，进一步优化模型输出。
3.  与已有方法相比新在哪里：相比于之前专注于单粒度（如句子级）或依赖外部音频编码器的方法，本研究系统性地探索了LMM在统一框架内同时处理多粒度多方面APA的能力。同时，首次在该任务中分析并强调了SCC（斯皮尔曼秩相关）作为评估指标的重要性，指出其比PCC更能反映模型预测的序一致性。
4.  主要实验结果如何：
    - 多粒度多方面（SO762数据集）：微调后的模型在单词和句子级别评估上与商业系统（Azure PA）和专门模型（GOPT， HMamba）性能相当或更优（例如句子级流利度SCC：0.70 vs 商业系统0.62），但在音素级评估上存在明显差距（PCC 0.39 vs GOPT 0.29）。
    - 单粒度单方面：性能显著提升，例如单词准确度PCC达0.62，句子流利度PCC达0.79，接近甚至超过部分基线。
    - 指标分析（私有测试集）：PCC可达~0.9，表明线性相关性强；但SCC仅为~0.6，揭示了模型在预测排序一致性上的不足。具体数据见表4。
5.  实际意义是什么：证明了LMM经过微调可成为APA任务的有效且灵活的工具，尤其在句子和单词级别。为CALL系统的开发提供了新的技术路径，即利用一个统一的大模型处理复杂的多维度评估任务。对评估指标的讨论对APA乃至其他相关评分任务的评估体系构建有参考价值。
6.  主要局限性是什么：LMM在音素级极细粒度评估上能力不足，这可能源于其内部表示与声学-音素对齐的天然疏离。模型性能严重依赖训练数据的质量和分布（如“完整度”分数因数据偏斜无法评估）。使用模拟偏好数据（SimPO）的提升有限。

---

