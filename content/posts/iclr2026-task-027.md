---
title: "ICLR 2026 - 语音生物标志物 论文列表"
date: 2026-05-04
draft: false
tags: ["语音生物标志物"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音生物标志物 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音生物标志物

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [A cross-species neural foundation model for end-to-end speec](/audio-paper-digest-blog/posts/2026-05-04-a-cross-species-neural-foundation-model-for-end) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [A cross-species neural foundation model for end-to-end speech decoding](/audio-paper-digest-blog/posts/2026-05-04-a-cross-species-neural-foundation-model-for-end)

🔥 **8.5/10** | 前25% | #语音生物标志物 | #预训练 | #自监督学习 #对比学习

👥 **作者与机构**

- 第一作者：Yizi Zhang (哥伦比亚大学), Linyang He (哥伦比亚大学) [论文中注明 *Equal contribution]
- 通讯作者：未明确说明（论文提供了yz4123, lh3288@columbia.edu作为联系邮箱）
- 作者列表：Yizi Zhang (哥伦比亚大学), Linyang He (哥伦比亚大学), Chaofei Fan (斯坦福大学), Tingkai Liu (微软), Han Yu (哥伦比亚大学), Trung Le (华盛顿大学), Jingyuan Li (亚马逊), Scott Linderman (斯坦福大学), Lea Duncker (哥伦比亚大学), Francis R Willett (斯坦福大学), Nima Mesgarani (哥伦比亚大学), Liam Paninski (哥伦比亚大学)

#

💡 **毒舌点评**

这篇论文将“预训练+微调”的成功范式成功迁移到了神经解码领域，构建了一个统一的端到端框架，并通过跨物种数据扩充了训练基础，思路清晰且实验结果显著。然而，其宣称的“端到端”解码在实时性和计算效率上（每句约0.95秒）与临床部署需求仍有明显差距，且对高质量、大规模人类神经数据的依赖，使得其普惠性面临现实挑战。

#

🔗 **开源详情**

- 代码：论文中未提及具体代码链接，但表示将在后续公开代码。
- 模型权重：未提及公开预训练模型权重。
- 数据集：论文中使用的预训练数据和解码数据集均为公开可用（具体链接见附录A）。
- Demo：未提及。
- 复现材料：提供了极其详细的训练细节、超参数、数据预处理方法（详见附录Q-S），并说明使用Ray Tune进行超参数搜索。硬件信息（GPU型号、数量、训练时长）明确。
- 论文中引用的开源项目：LLaVA (Liu et al., 2023b), LoRA (Hu et al., 2022), Ray Tune (Liaw et al., 2018), DeepSpeed ZeRO-3。
- 论文中提到代码将在后续开源，但未在本文提供具体链接。

📌 **核心摘要**

这篇论文旨在解决现有脑机接口（BCI）语音解码系统依赖级联框架（先解码音素，再用语言模型组装句子）导致无法全局优化的问题。核心方法是提出一个名为BIT（BraIn-to-Text） 的端到端解码框架，该框架包含一个跨物种、跨任务预训练的Transformer神经编码器和一个音频大语言模型（Audio-LLM）解码器。编码器使用自监督掩码建模在来自人类和猴子的约367小时神经记录数据上进行预训练，以学习通用神经表示；解码器则通过对比学习与编码器输出进行跨模态对齐，直接从神经活动生成句子。与已有方法相比，BIT的新颖之处在于：1）实现了完全可微的端到端训练；2）利用大规模跨物种数据进行预训练，提升了模型的泛化能力，尤其在低数据量的想象语音任务上效果显著；3）证明了小型音频大语言模型在神经解码任务上优于纯文本大模型。

主要实验结果如下：在Brain-to-Text基准测试中，BIT的级联框架在两个榜单上均取得第一（WER 5.10%和1.76%，含模型集成）；其端到端框架相较于之前最佳方法（Feng et al. 2024）将词错误率（WER）从24.69%大幅降低至10.22%（含集成），性能提升超过50%。该工作的实际意义在于推动了更易优化和部署的端到端神经语音接口的发展，为瘫痪患者恢复交流能力提供了新范式。主要局限性包括：1）端到端推理速度较慢，难以满足实时应用需求；2）模型仍需大量未标注神经数据进行预训练，且对标注数据需求量大；3）跨物种迁移中，人类数据的贡献远大于猴子数据，表明神经任务相关性至关重要。

#

---

