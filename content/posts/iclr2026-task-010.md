---
title: "ICLR 2026 - 模型可解释性 论文列表"
date: 2026-05-04
draft: false
tags: ["模型可解释性"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 模型可解释性 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 模型可解释性

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [The Deleuzian Representation Hypothesis](/audio-paper-digest-blog/posts/2026-05-04-the-deleuzian-representation-hypothesis) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [The Deleuzian Representation Hypothesis](/audio-paper-digest-blog/posts/2026-05-04-the-deleuzian-representation-hypothesis)

🔥 **8.5/10** | 前25% | #模型可解释性 | #概念提取 | #对比学习 #自监督学习

👥 **作者与机构**

- 第一作者：Clément Cornet (Université Paris-Saclay, CEA, List)
- 通讯作者：Clément Cornet (论文未明确标注通讯作者，根据单位信息推断)
- 作者列表：Clément Cornet (Université Paris-Saclay, CEA, List)、Romaric Besançon (Université Paris-Saclay, CEA, List)、Hervé Le Borgne (Université Paris-Saclay, CEA, List)

💡 **毒舌点评**

这篇论文将哲学思想（德勒兹的差异论）包装成了一个工程上简洁、实验上有效的概念提取新范式，确实超越了现有稀疏自编码器方法。其核心创新——聚类激活差异而非重建激活——思路清晰且有启发性。但最大的短板在于其评估高度依赖现有的有标签数据集（用于计算探针损失），对于真正无监督的、超越已知属性的“新概念”发现能力缺乏评估框架，且对语音/音频任务本身的方法论贡献有限。

🔗 **开源详情**

- 代码：提供。论文明确给出了代码仓库链接：https://github.com/ClementCornet/Deleuzian-Hypothesis。
- 模型权重：未提及。论文未公开其提取的概念向量词典或修改后的模型权重。
- 数据集：论文使用的数据集（ImageNet, WikiArt, IMDB, CoNLL-2003, AudioSet）均为公开数据集，并在附录B中给出了获取信息。
- Demo：未提及。
- 复现材料：提供了详尽的复现信息，包括实现细节（附录A：所有基线方法的超参数设置）、实验设置细节（附录B：数据集描述、模型版本、数据划分）、以及方法核心代码。
- 引用的开源项目：论文引用了多个开源项目/模型作为基线或工具，包括：scikit-learn (用于ICA)、ViT-Prisma (预训练SAE)、EleutherAI (预训练SAE)、OpenClip (CLIP实现)、PyTorch Hub (DinoV2)、HuggingFace上的多个模型（DeBERTa, BART, Pythia, AST）。

📌 **核心摘要**

1.  问题：现有的稀疏自编码器（SAE）在提取神经网络内部可解释概念时面临训练困难、特征多义性以及依赖稀疏性作为可解释性代理等问题，需要一种更简单、更直接的概念提取方法。
2.  方法核心：提出“德勒兹表征假说”，将概念定义为激活空间中数据样本之间的“差异”。具体方法是：随机采样激活差异向量，然后使用带有偏度逆权重（以促进多样性）的K-means聚类算法对这些差异进行聚类，聚类中心即为概念向量。
3.  与已有方法的对比：与主流SAE方法（如重建+稀疏）不同，本方法不进行激活重建，而是直接识别和聚类“重复出现的差异”。它被形式化为一种无监督的判别分析，并在保持概念向量位于原始激活空间（便于无损引导）的同时，仅需一个可解释的超参数（概念数量k）。
4.  主要实验结果：在涵盖视觉、语言、音频三个模态的五个模型和五个数据集上进行了广泛评估。结果显示，在探针损失（Probe Loss）指标上，该方法在13/20个任务中超越了所有SAE变体，其表现接近有监督的线性判别分析（LDA）基线。在跨运行一致性（MPPC）上也表现优异。关键实验数据对比如下表所示：
    
    | 方法 | CLIP (WikiArt Artist) | DinoV2 (WikiArt Artist) | DeBERTa (CoNLL-2003 NER) | BART (CoNLL-2003 POS) | AST (AudioSet) | 平均排名 ↓ |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | Deleuzian (Ours) | 0.0119 | 0.0055 | 0.0665 | 0.2148 | 0.0164 | 1.65±0.85 |
    | Tk-SAE | 0.0125 | 0.0096 | 0.0839 | 0.3478 | 0.0169 | 2.65±1.01 |
    | A-SAE | 0.0130 | 0.0143 | 0.0775 | 0.3754 | 0.0169 | 3.20±1.72 |
    | LDA (监督基线) | 0.0084 | 0.0044 | 0.0429 | 0.6326 | 0.0164 | - |
5.  实际意义：提供了一种更简洁、可解释性更强的概念提取工具，可用于分析模型内部表征、进行概念引导（Steering）以可控地修改模型行为（如图像风格迁移、文本生成控制），为理解和调试大规模神经网络提供了新途径。
6.  主要局限性：方法的评估依赖于带有语义标签的数据集，可能无法评估与已知标签无关的“新颖”概念。假设概念可在线性方向上表示，这一假设可能在某些模型中不成立。引导效果虽为定性展示，但系统性量化仍需更多研究。

---

