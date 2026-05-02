---
title: "ICLR 2026 - 模型可解释性 论文列表"
date: 2026-05-03
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
| 🥇 | [The Deleuzian Representation Hypothesis](/audio-paper-digest-blog/posts/2026-05-03-the-deleuzian-representation-hypothesis) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [The Deleuzian Representation Hypothesis](/audio-paper-digest-blog/posts/2026-05-03-the-deleuzian-representation-hypothesis)

✅ **7.5/10** | 前25% | #模型可解释性 | #无监督学习 | #聚类 #多模态

👥 **作者与机构**

- 第一作者：Clément Cornet（Université Paris-Saclay, CEA, List）
- 通讯作者：未说明（论文中未明确标注通讯作者）
- 作者列表：Clément Cornet（Université Paris-Saclay, CEA, List）、Romaric Besançon（Université Paris-Saclay, CEA, List）、Hervé Le Borgne（Université Paris-Saclay, CEA, List）

💡 **毒舌点评**

论文最大的亮点在于将一个略显冷门的哲学概念（德勒兹的差异论）成功转化为一个在多个模态上都表现出色的、简洁且有效的技术方案，实验设计严谨且规模庞大。短板则在于，其理论支撑（线性判别分析）可能过于简化，虽然实验结果很好，但对复杂模型内部非线性结构的建模能力存疑，且依赖于大量有标注的“属性”进行评估，限制了其在无标注场景下的应用评价。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：`https://github.com/ClementCornet/Deleuzian-Hypothesis`。
- 模型权重：未提及是否公开提取的概念模型权重。
- 数据集：论文使用了多个公开数据集（ImageNet， WikiArt， IMDB， CoNLL-2003， AudioSet），并提供了来源URL。
- Demo：未提及。
- 复现材料：提供了非常详尽的复现材料，包括：
    - 附录A：详细的实现细节（如ICA、各种SAE的超参数设置）。
    - 附录B：完整的实验设置（数据集详情表4、模型详情表5）。
    - 附录C/D：统计显著性分析。
    - 附录E/F/G：定性示例和扩展方法的额外结果。
- 论文中引用的开源项目：
    - 使用OpenClip库获取CLIP模型。
    - 使用PyTorch Hub获取DinoV2模型。
    - 使用scikit-learn库实现FastICA。
    - 使用了Hugging Face上的预训练模型（DeBERTa, BART, Pythia, AST）。
    - 使用了其他团队独立训练的SAE作为基线（ViT-Prisma， EleutherAI的SAE）。

📌 **核心摘要**

本文针对当前神经网络可解释性工具——稀疏自编码器（SAE）存在的训练困难、多义特征及稀疏性假设不合理等问题，提出了一种新的无监督概念提取方法。该方法的核心思想源于哲学家德勒兹的观点，即“概念即差异”，因此不直接对激活值本身建模，而是聚类模型在不同样本间的激活差异向量。具体实现上，通过随机采样激活差异，使用对偏度加权的KMeans聚类来发现重复出现的差异模式，从而获得概念向量。这可以被视为一种无监督的判别分析。与SAE等方法相比，该方法更简单、透明（仅有一个超参数），并且提取的概念向量直接位于激活空间中，便于进行无信息损失的模型引导。实验在五个模型（包括CLIP、DinoV2、DeBERTa等）、三个模态（图像、文本、音频）的八个数据集上进行，评估了概念质量（探测损失）、多样性和跨运行一致性。结果显示，该方法在探测损失指标上平均排名优于所有对比的SAE变体，尤其在多个任务上接近有监督的线性判别分析基线。同时，提取的概念能成功引导模型内部表征（如改变图像风格、替换文本中的地理概念），证明了其因果影响。该工作的主要局限性在于其评估依赖于带标签的数据集，可能无法全面衡量与标签无关的、更微妙的概念。

| 模型/方法 | 数据集-任务 | 指标：探测损失（↓） |
| :--- | :--- | :--- |
| LDA (有监督) | CLIP-ImageNet | 0.0083 |
| Tk-SAE | CLIP-ImageNet | 0.0154 |
| Deleuzian (Ours) | CLIP-ImageNet | 0.0128 |
| Tk-SAE | CLIP-WikiArt-Artist | 0.0096 |
| Deleuzian (Ours) | CLIP-WikiArt-Artist | 0.0055 |
| Tk-SAE | DinoV2-ImageNet | 0.0558 |
| Deleuzian (Ours) | DinoV2-ImageNet | 0.0560 |
| Tk-SAE | DinoV2-WikiArt-Genre | 0.1577 |
| Deleuzian (Ours) | DinoV2-WikiArt-Genre | 0.1538 |
| Tk-SAE | DeBERTa-IMDB | 0.6858 |
| Deleuzian (Ours) | DeBERTa-IMDB | 0.6849 |
| Tk-SAE | DeBERTa-CoNLL-POS | 0.0839 |
| Deleuzian (Ours) | DeBERTa-CoNLL-POS | 0.0665 |
| Tk-SAE | AST-AudioSet | 0.0169 |
| Deleuzian (Ours) | AST-AudioSet | 0.0164 |
| Tk-SAE | Pythia-CoNLL-NER | 0.1321 |
| Deleuzian (Ours) | Pythia-CoNLL-NER | 0.1121 |
| 平均排名（↓） | 所有任务 | 1.65 ± 0.85 |

---

