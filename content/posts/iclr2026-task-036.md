---
title: "ICLR 2026 - 跨模态检索 论文列表"
date: 2026-05-04
draft: false
tags: ["跨模态检索"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 跨模态检索 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 跨模态检索

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Learning multimodal dictionary decompositions with group-spa](/audio-paper-digest-blog/posts/2026-05-04-learning-multimodal-dictionary-decompositions) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Learning multimodal dictionary decompositions with group-sparse autoencoders](/audio-paper-digest-blog/posts/2026-05-04-learning-multimodal-dictionary-decompositions)

✅ **7.5/10** | 前25% | #跨模态检索 | #自监督学习 | #多模态模型 #零样本

👥 **作者与机构**

- 第一作者：Chiraag Kaushik（Georgia Institute of Technology, School of Electrical and Computer Engineering）
- 通讯作者：未说明（论文中未明确标注通讯作者）
- 作者列表：Chiraag Kaushik（Georgia Institute of Technology）、Davis Barch（Dolby Laboratories）、Andrea Fanelli（Dolby Laboratories）

#

💡 **毒舌点评**

这篇论文理论与实践结合得不错，Theorem 1为“分裂字典”问题提供了理论保证，而提出的组稀疏+掩码方案在CLIP/CLAP上也确实有效提升了多模态概念的数量和语义性。但最大的短板是实验上缺乏代码开源，对于一篇方法论论文来说，这大大削弱了其即时影响力和社区复现验证的价值，使得“方法有效性”部分打了折扣。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开训练好的SAE/GSAE/MGSAE模型权重。
- 数据集：使用了公开数据集（CC3M, JamendoMaxCaps, MusicBench等），论文中未说明是否提供额外的处理脚本。
- Demo：未提及在线演示。
- 复现材料：论文在附录A.2中提供了较为详细的实验设置，包括数据集、超参数范围选择方法、训练步数等，有助于复现。
- 论文中引用的开源项目：引用了`dictionary_learning`工具库（Marks et al., 2024）作为TopK SAE的实现基础。

📌 **核心摘要**

这篇论文旨在解决稀疏自编码器（SAE）应用于多模态对齐嵌入（如CLIP）时产生的“分裂字典”问题，即学习到的稀疏特征大多只对单一模态激活，损害了跨模态对齐。核心方法包括：理论上证明了在对齐嵌入空间上，存在比分裂字典对齐性更好的非分裂字典；提出组稀疏自编码器（GSAE）和掩码组稀疏自编码器（MGSAE），通过组稀疏损失（鼓励配对样本的稀疏码具有相同支撑集）和跨模态随机掩码来引导学习多模态字典。与标准SAE相比，该方法显著增加了跨模态激活的神经元数量，减少了“死神经元”，并提升了跨模态零样本任务的性能。例如，在CLIP图像/文本任务上，MGSAE在CIFAR-10上的零样本分类准确率达到84.2%，比标准TopK SAE高出18.5个百分点；在CLAP音频/文本任务上，MGSAE在NSynth乐器分类上达到35.4%，远超SAE的26.5%。该工作的实际意义在于为多模态模型的可解释性分析和可控生成提供了更好的分解工具，其主要局限是依赖配对的多模态数据进行训练，且未提供开源代码。

#

---

