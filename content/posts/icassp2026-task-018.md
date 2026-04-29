---
title: "ICASSP 2026 - 多模态情感识别 论文列表"
date: 2026-04-29
draft: false
tags: ["多模态情感识别"]
categories: [icassp-2026]
description: "共 2 篇 ICASSP 2026 多模态情感识别 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 多模态情感识别

共 **2** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [NeuroSIFT: A Biologically-Inspired Framework with Explicit S](/audio-paper-digest-blog/posts/2026-04-29-neurosift-a-biologically-inspired-framework-with) | 8.0分 | 前25% |
| 🥈 | [Graph-Based Emotion Consensus Perception Learning for Multim](/audio-paper-digest-blog/posts/2026-04-29-graph-based-emotion-consensus-perception-learning) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [NeuroSIFT: A Biologically-Inspired Framework with Explicit Signal-Noise Separation for Robust Multimodal Emotion Recognition](/audio-paper-digest-blog/posts/2026-04-29-neurosift-a-biologically-inspired-framework-with)

🔥 **8.0/10** | 前25% | #多模态情感识别 | #神经形态计算 | #多任务学习 #鲁棒性

👥 **作者与机构**

- 第一作者：Gang Xie（杭州电子科技大学计算机学院）
- 通讯作者：Wanzeng Kong（杭州电子科技大学计算机学院）
- 作者列表：Gang Xie（杭州电子科技大学计算机学院）、Jiajia Tang（杭州电子科技大学计算机学院）、Tianyang Qin（杭州电子科技大学计算机学院）、Yiwen Shen（杭州电子科技大学计算机学院）、Wanzeng Kong（杭州电子科技大学计算机学院）

💡 **毒舌点评**

这篇论文最亮眼的地方是它“仿生”不玩虚的，直接模仿海马体神经回路的选择性抑制机制来做信号分离，并在两个主流数据集上取得了显著的性能提升（如CH-SIMSv2上F1值提升5.44%），证明了思路的有效性。但短板也很明显：一是生物启发到计算模型的映射稍显简单化（如将复杂的神经元交互简化为两个门控信号），理论解释有待深化；二是全文未开源任何代码或模型，对于一篇强调“框架”和“复现”的论文来说，这严重削弱了其影响力。

📌 **核心摘要**

1.  问题：现有多模态情感识别（MER）方法因无法显式分离真实世界中的复杂噪声（感知、结构、语义噪声）而性能下降，多依赖隐式的噪声适应策略。
2.  方法核心：提出NeuroSIFT框架，受海马体-前额叶回路中SST+、PV+和VIP+中间神经元的选择性抑制机制启发。框架包含三个核心组件：语义模拟噪声生成器（生成与输入语义对齐的噪声参考）、神经回路选择性抑制模块（利用噪声参考显式分解输入为情感信号和结构化噪声）、双流对抗训练框架（分别处理并利用分解后的信号与噪声流）。
3.  创新点：与已有方法相比，核心创新在于实现了显式的信号-噪声分离，而非隐式适应。具体创新包括：1) 基于批次负采样的语义噪声生成；2) 模仿生物神经抑制与去抑制的分离模块；3) 利用噪声流增强对抗鲁棒性的双流训练。
4.  主要实验结果：在CH-SIMSv2和MUStARD数据集上全面超越现有SOTA方法。具体如下表所示：
    | 数据集 | 方法 | 主要指标 |
    | :--- | :--- | :--- |
    | CH-SIMSv2 | NeuroSIFT (Ours) | Acc-2: 89.13, F1-2: 89.14, Corr: 0.835 |
    | | 最佳基线 (Coupled Mamba) | Acc-2: 83.40, F1-2: 83.50, Corr: 0.758 |
    | | 提升 | +5.33% (Acc), +5.44% (F1) |
    | MUStARD | NeuroSIFT (Ours) | Acc: 77.68, F1: 77.51 |
    | | 最佳基线 (CAF-I) | Acc: 75.50, F1: 75.20 |
    | | 提升 | +1.95% (Acc), +2.12% (F1) |
5.  实际意义：为构建对真实世界噪声更鲁棒的多模态情感识别系统提供了一种新的生物启发设计范式，其“分离-再利用”的思路可能对其他多模态感知任务有借鉴意义。
6.  主要局限性：1) 生物机制到算法的映射是高度简化的，可能未能完全捕捉真实神经回路的复杂性；2) 论文承认双流设计引入了计算开销；3) 未开源代码与模型，限制了可复现性。

---

### 🥈 [Graph-Based Emotion Consensus Perception Learning for Multimodal Emotion Recognition in Conversation](/audio-paper-digest-blog/posts/2026-04-29-graph-based-emotion-consensus-perception-learning)

✅ **7.5/10** | 前25% | #多模态情感识别 | #图神经网络 | #对比学习 #会话理解

👥 **作者与机构**

- 第一作者：Huan Zhao (论文中作者列表首位，但未明确标注“第一作者”，因此按惯例推断)
- 通讯作者：Yingxue Gao (论文明确标注“*Corresponding authors: Y. Gao”)
- 作者列表：Huan Zhao (湖南大学计算机科学与电子工程学院)、Gong Chen (湖南大学计算机科学与电子工程学院)、Zhijie Yu (湖南大学计算机科学与电子工程学院)、Yingxue Gao* (湖南大学计算机科学与电子工程学院)

#

💡 **毒舌点评**

该论文的亮点在于其“共识感知学习模块”设计得相当精巧，通过原型学习和说话人对比损失双管齐下，直击多模态情感识别中“模态冲突”这一核心痛点，理论动机清晰且有效。短板在于其创新更多是增量式的改进而非范式突破，且“共识原型”的学习本质上还是依赖于有监督的类别标签，对于完全未知的、细粒度的或混合情感表达，其泛化能力有待进一步验证。

#

📌 **核心摘要**

1.  要解决的问题：现有对话多模态情感识别（MERC）方法常忽略同一情感类别在不同模态（如声音、语言、表情）下所体现的“情感共识”，导致模态间冲突信号影响识别精度，且难以处理类别混淆和样本不均衡问题。
2.  方法核心：提出图基情感共识感知（GECP）框架。其核心是共识感知学习（CAL）模块，包含两阶段：1) 构建多模态传播图以捕获跨模态共享信号与特有差异；2) 通过情感共识学习单元将各模态信号与共同的“情感原型”对齐，提炼类别本质特征。
3.  与已有方法相比新在何处：不同于以往主要关注上下文依赖或简单融合的方法，GECP显式地建模并学习了类别级的情感共识原型，并通过引入说话人引导的对比学习损失，在对齐跨模态语义的同时，保留了个体表达的多样性。
4.  主要实验结果：在IEMOCAP和MELD数据集上，GECP均取得了最佳性能。
    - IEMOCAP：Weighted-F1 72.85%， Accuracy 72.91%， 较之前最优模型（Frame-SCN）分别提升约1.85%和1.93%。
    - MELD：Weighted-F1 66.96%， Accuracy 68.08%， 较之前最优模型（FrameERC）分别提升约0.33%和0.46%。消融实验证明，移除CA单元或任一损失函数（Lc, LSpk）都会导致性能下降，其中移除CA单元下降最明显。
5.  实际意义：提升了机器在复杂对话场景中理解人类情感的能力，尤其在处理情感类别易混淆和样本分布不平衡的情况下更为有效，可直接应用于提升智能客服、社交机器人等系统的交互体验。
6.  主要局限性：论文中未深入讨论。潜在局限可能包括：对动态演变的情感共识建模不足（未来工作已提及）、模型复杂度较高、以及在跨文化、跨语言场景下的泛化能力未被验证。

#

---

