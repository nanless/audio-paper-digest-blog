---
title: "ICLR 2026 - 模型评估 论文列表"
date: 2026-05-04
draft: false
tags: ["模型评估"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 模型评估 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 模型评估

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [The Deleuzian Representation Hypothesis](/audio-paper-digest-blog/posts/2026-05-04-the-deleuzian-representation-hypothesis) | 7.5分 | 前25% |
| 🥈 | [TINY BUT MIGHTY: A SOFTWARE-HARDWARE CO- DESIGN APPROACH FOR](/audio-paper-digest-blog/posts/2026-05-04-tiny-but-mighty-a-software-hardware-co-design) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [The Deleuzian Representation Hypothesis](/audio-paper-digest-blog/posts/2026-05-04-the-deleuzian-representation-hypothesis)

✅ **7.5/10** | 前25% | #模型评估 | #概念提取 | #多模态模型 #基准测试

👥 **作者与机构**

- 第一作者：Clément Cornet（Université Paris-Saclay, CEA, List）
- 通讯作者：未说明
- 作者列表：Clément Cornet（Université Paris-Saclay, CEA, List）、Romaric Besançon（Université Paris-Saclay, CEA, List）、Hervé Le Borgne（Université Paris-Saclay, CEA, List）

💡 **毒舌点评**

这篇论文的理论优雅（将德勒兹哲学与判别分析结合）和跨模态广泛实验（覆盖视觉、语言、音频）是显著亮点，但其核心假设“概念是线性投影”以及评估方法强依赖标签数据（可能导致无监督方法被标签偏见左右）也构成了明显局限，且未能解决概念自动命名这一关键下游任务。

🔗 **开源详情**

- 代码：是，论文提供了GitHub仓库链接（https://github.com/ClementCornet/Deleuzian-Hypothesis）。
- 模型权重：未提及。方法本身不产出新模型，而是分析现有模型。
- 数据集：是，所有使用的数据集均为公开标准基准（ImageNet, WikiArt, IMDB, CoNLL-2003, AudioSet）。
- Demo：未提及。
- 复现材料：是。论文附录A提供了详细的实现细节（包括TopKSAE等基线的超参数设置），附录B详述了数据集和模型信息，提供了所有实验所需的设置。
- 论文中引用的开源项目：使用了scikit-learn (ICA), OpenClip (CLIP), PyTorch Hub (DinoV2), Hugging Face Transformers (DeBERTa, BART, AST, Pythia)等。

📌 **核心摘要**

1.  要解决什么问题：现有无监督概念提取方法（如稀疏自编码器SAE）存在训练困难、可能产生多义特征、且依赖“稀疏性即解释性”这一存疑假设。
2.  方法核心是什么：提出一种受德勒兹哲学启发的新框架，将“概念”建模为激活向量空间中的“差异方向”。方法通过随机采样激活差异、利用偏度加权的KMeans聚类来提取重复的差异模式。
3.  与已有方法相比新在哪里：与SAE的“重建激活方差”思路不同，本方法专注于捕捉“样本间差异”。它无需优化重构损失，仅依赖聚类，更简单透明，唯一超参数是概念数量`k`。理论推导表明其等价于在等方差假设下的无监督判别分析。
4.  主要实验结果如何：在五个模型、三个模态（视觉、语言、音频）的大规模评估中，本方法在概念质量（Probe Loss）上超越了所有对比的SAE变体（平均排名1.65），并与有监督的LDA接近。在概念一致性（MPPC）上也表现优异。消融实验验证了“使用差异”和“偏度加权”的关键作用。引导实验证明了提取概念对模型行为的因果影响。关键数据见下表：

| 任务/数据集 | 方法 | CLIP (WikiArt Artist) | DinoV2 (WikiArt Artist) | DeBERTa (CoNLL NER) | BART (CoNLL NER) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 概念质量 (Probe Loss ↓) | LDA (有监督) | 0.0044 | 0.0055 | 0.0429 | 0.0164 |
| | TopKSAE | 0.0096 | 0.0137 | 0.0839 | 0.1321 |
| | Deleuzian (本方法) | 0.0055 | 0.0137 | 0.0665 | 0.1121 |
| 平均排名 | | | | | 1.65 ± 0.85 |

| 数据集 | 方法 | CLIP (WikiArt) | DeBERTa (CoNLL) |
| :--- | :--- | :--- | :--- |
| 概念一致性 (MPPC ↑) | VanSAE | 0.918 | 0.437 |
| | TopKSAE | 0.861 | 0.594 |
| | Deleuzian (本方法) | 0.856 | 0.588 |

5.  实际意义是什么：提供了一种更简单、理论依据扎实的无监督概念提取新范式，提取的概念可直接用于无损模型行为引导（Steering），为理解、控制和修正神经网络内部表征提供了新工具。
6.  主要局限性是什么：评估仍强依赖于带标签数据集，可能无法发现与现有标签无关但有意义的概念；假设概念在激活空间中是线性投影（尽管实验验证了此假设在多种模型上成立）；未解决自动为提取的无监督概念命名的问题。

---

### 🥈 [TINY BUT MIGHTY: A SOFTWARE-HARDWARE CO- DESIGN APPROACH FOR EFFICIENT MULTIMODAL IN- FERENCE ON BATTERY-POWERED SMALL DEVICES](/audio-paper-digest-blog/posts/2026-05-04-tiny-but-mighty-a-software-hardware-co-design)

✅ **7.0/10** | 前25% | #模型评估 | #信号处理 | #多模态模型 #实时处理

👥 **作者与机构**

- 第一作者：Yilong Li（University of Wisconsin – Madison）
- 通讯作者：未说明
- 作者列表：Yilong Li (University of Wisconsin – Madison), Shuai Zhang (Amazon Web Services AI), Yijing Zeng (University of Wisconsin – Madison), Chengpo Yan (University of Wisconsin – Madison), Hao Zhang (University of Wisconsin – Madison), Xinmiao Xiong (University of Wisconsin – Madison), Jingyu Liu (University of Wisconsin – Madison), Pan Hu (Uber), Suman Banerjee (University of Wisconsin – Madison)

#

💡 **毒舌点评**

亮点：论文不仅停留在算法优化，而是构建了一个从定制硬件、驱动、内核到调度策略的完整端到端系统，并在真实电池设备上实现了数小时的自主运行，这种“从沙箱到原型”的工程完整性值得赞赏。短板：然而，整个框架高度绑定特定硬件（Rockchip SoC）和预训练模型，其“通用性”声明更多基于设计哲学而非广泛实验证据；开源信息的缺失也使得这项耗资不小（PCB设计、焊接、测试）的工作对社区的可复用价值大打折扣。

#

🔗 **开源详情**

- 代码：论文中未提及NANOMIND框架本身的代码仓库链接。
- 模型权重：未提及，论文使用已公开的预训练模型（如LLaVA-OneVision-Qwen2-0.5B from Hugging Face）。
- 数据集：未提供新数据集，使用公开benchmark（InfoVQA, DocVQA, MMBench, MME）进行评估。
- Demo：论文提及制作了电池供电的硬件原型（图11），并进行了为期一周的头戴式设备实测（图12），但未提供公开的在线演示或硬件设计文件。
- 复现材料：论文附录提供了一些补充实验细节（如测量方法、数据集、llama.cpp机制分析），但核心的硬件PCB设计、定制驱动、计算内核源码未提供。
- 论文中引用的开源项目：llama.cpp, Whisper.cpp, Piper, RKNN Toolkit2, Qualcomm AI Hub, MLC-LLM, PowerInfer-2, nanoVLM。

📌 **核心摘要**

1.  要解决什么问题：在电池供电的边缘小型设备上高效运行大型多模态模型（LMMs），面临计算资源异构（CPU/GPU/NPU）、统一内存架构下的调度冲突、高延迟和功耗瓶颈。
2.  方法核心是什么：提出NANOMIND软硬件协同设计框架。其核心思想是将LMMs分解为模块化“砖块”（视觉、语言、音频编码器等），并基于统一内存架构，将每个模块动态卸载到最适合的异构加速器上执行。具体包括：定制硬件（基于RK3566，带并行内存与PMU）、开发零拷贝的Token感知缓冲管理器（TABM）、针对GPU/NPU优化的低比特计算内核（如融合反量化GEMM）、以及电池感知的三级功耗调度策略。
3.  与已有方法相比新在哪里：区别于主流的纯软件优化（如仅量化）或针对单一加速器的部署，本文强调跨加速器的模块级动态调度和配套的系统级优化（如TABM实现零拷贝）。此外，它包含一个完整的定制硬件原型，实现了软件算法、系统驱动、内核与硬件的协同设计。
4.  主要实验结果如何：实验表明，NANOMIND在资源受限设备上显著优于现有框架。相比llama.cpp，能耗降低42.3%，GPU内存使用减少11.2%。在定制设备上，能以低功耗模式（平均0.375W）运行LlaVA-OneVision-qwen2-0.5B模型长达20.8小时。与更强大的Orange Pi 5 Ultra（RK3588）相比，端到端延迟降低36.2%。系统分解实验显示，TABM相比传统拷贝方式降低了CPU利用率和内存占用；NPU在运行SigLip视觉编码器时延迟远低于GPU和CPU；自定义GEMM内核在GPU上的吞吐量优于llama.cpp和MLC-LLM。
5.  实际意义是什么：证明了在低成本、低功耗的边缘设备上完全本地化运行多模态AI助手的可行性，为隐私敏感、离线或低网络环境下的智能应用（如可穿戴设备、机器人）提供了实用路径。
6.  主要局限性是什么：框架的具体实现与Rockchip RK3566/RK3588平台深度绑定，其向其他SoC（如高通、苹果）的迁移能力虽被提及但未充分验证；实验主要使用现有预训练模型（如LLaVA-OneVision），未探讨模型压缩或架构协同设计；硬件原型为定制设计，不利于大规模复现与推广；未提供开源代码，限制了学术界和工业界的快速复现与改进。

---

