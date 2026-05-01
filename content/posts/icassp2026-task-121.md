---
title: "ICASSP 2026 - 音频场景理解 论文列表"
date: 2026-04-29
draft: false
tags: ["音频场景理解"]
categories: [icassp-2026]
description: "共 3 篇 ICASSP 2026 音频场景理解 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 音频场景理解

共 **3** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Lightweight and Generalizable Acoustic Scene Representations](/audio-paper-digest-blog/posts/2026-04-29-lightweight-and-generalizable-acoustic-scene) | 8.0分 | 前25% |
| 🥈 | [From Contrast to Commonality: Audio Commonality Captioning f](/audio-paper-digest-blog/posts/2026-04-29-from-contrast-to-commonality-audio-commonality) | 7.5分 | 前25% |
| 🥉 | [Class-Aware Permutation-Invariant Signal-to-Distortion Ratio](/audio-paper-digest-blog/posts/2026-04-29-class-aware-permutation-invariant-signal-to) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Lightweight and Generalizable Acoustic Scene Representations Via Contrastive Fine-Tuning and Distillation](/audio-paper-digest-blog/posts/2026-04-29-lightweight-and-generalizable-acoustic-scene)

🔥 **8.0/10** | 前25% | #音频场景理解 | #对比学习 | #知识蒸馏 #少样本学习

👥 **作者与机构**

- 第一作者：Kuang Yuan（卡内基梅隆大学，实习期间于Meta Reality Labs完成）
- 通讯作者：未说明
- 作者列表：Kuang Yuan（卡内基梅隆大学，Meta Reality Labs）、Yang Gao（Meta Reality Labs）、Xilin Li（Meta Reality Labs）、Xinhao Mei（Meta Reality Labs）、Syavosh Zadissa（Meta Reality Labs）、Tarun Pruthi（Meta Reality Labs）、Saeed Bagheri Sereshki（Meta Reality Labs）

💡 **毒舌点评**

亮点：精准地抓住了传统声学场景分类（ASC）模型“类别固定、无法迁移”的痛点，并将对比学习与表征蒸馏巧妙结合，从理论（结构化嵌入空间）到实验（开放集少样本适应）都给出了令人信服的解决方案。短板：论文自称为“轻量级”，但最轻的CP-Mobile学生模型也有6K参数，而用于对比的教师模型BEATs本身并非轻量级模型，这使得“轻量级”的对比语境稍显模糊；另外，实验仅在一个主要数据集（TAU22）上进行全量训练和蒸馏，开放集评估虽跨了两个数据集，但规模有限，泛化性的论证还可以更强。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开权重。
- 数据集：使用了公开数据集TAU22、TUT17和ICME24，但未在论文中提供获取链接（可从Zenodo等平台获取）。
- Demo：未提及。
- 复现材料：论文提供了非常详尽的训练细节、超参数配置和消融实验设置，有助于复现。但未提供预训练检查点或具体配置文件。
- 引用的开源项目：主要依赖预训练的BEATs模型和CP-Mobile模型作为基线和骨架。论文中未提供这些模型的具体开源链接，但它们是已知的公开模型。
- 总结：论文中未提及明确的开源计划，但提供了充分的文字细节以供复现。

📌 **核心摘要**

本文旨在解决部署在边缘设备的声学场景分类（ASC）模型无法适应新类别（如新增“电车”场景）的问题。核心方法是提出ContrastASC两阶段框架：首先，使用监督对比损失（改进了Mixup兼容性）微调预训练的BEATs教师模型，以构建保留场景语义结构的嵌入空间；然后，采用对比表征蒸馏（CRD）将该结构化知识迁移到轻量级的CP-Mobile学生模型。与传统仅用交叉熵损失微调再蒸馏的方法相比，本方法在保持TAU22数据集上封闭集分类性能（教师62.5%，学生60.6%）的同时，显著提升了在TUT17和ICME24数据集上的开放集少样本适应能力。例如，在126K参数的学生模型上，5-shot准确率在TUT17上从传统方法（FT+KD）的53.0%提升至56.3%，在ICME24上从62.6%提升至64.5%。该工作的实际意义在于为资源受限设备提供了能随需求扩展的场景感知能力。其主要局限性在于实验规模相对有限，且未公开代码与模型权重。

主要实验结果表格：

表1：教师模型（BEATs）性能对比
| 方法 | TAU22 (封闭集) | TUT17 (开放集) 5-shot | TUT17 (开放集) 20-shot | TUT17 mAP |
| :--- | :---: | :---: | :---: | :---: |
| BEATs (冻结) | 55.8 | 55.9 | 67.6 | 0.48 |
| FT (仅CE) | 62.5 | 60.1 | 70.4 | 0.54 |
| 对比学习FT | 62.5 | 62.3 | 72.4 | 0.58 |

表2：学生模型（CP-Mobile 126K）性能及消融实验
| 教师 | 蒸馏方法 | TAU22 | TUT17 | ICME24 |
| :--- | :--- | :---: | :---: | :---: |
| | | | 5-shot | 20-shot | 5-shot | 20-shot |
| 无 | 无KD | 57.4 | 50.7 | 61.2 | 58.2 | 72.2 |
| FT | KD | 59.3 | 53.0 | 62.9 | 62.6 | 75.4 |
| FT | CRD | 60.0 | 55.1 | 65.8 | 61.7 | 76.0 |
| C-FT | KD | 59.9 | 56.1 | 64.5 | 63.5 | 76.1 |
| C-FT | CRD | 60.6 | 56.3 | 66.5 | 64.5 | 77.7 |
| C-FT | CRD (无LN) | 60.4 | 56.4 | 65.9 | 63.8 | 76.5 |
| C-FT | CRD (用BN) | 60.0 | 54.9 | 65.8 | 62.2 | 76.3 |

表3：5-shot准确率在已见/未见类别上的分解
| 方法 | TUT17 已见 | TUT17 未见 | ICME24 已见 | ICME24 未见 |
| :--- | :---: | :---: | :---: | :---: |
| 无KD | 44.1 | 53.2 | 59.6 | 57.7 |
| FT+KD | 48.7 | 54.8 | 64.3 | 61.2 |
| C-FT+CRD | 47.9 | 59.6 | 65.8 | 64.3 |

![图1：ContrastASC两阶段训练框架与传统方法的对比](https://ieeexplore.ieee.org/primaryPDF/getPDF.jsp?tp=&arnumber=11464295&ref=)

图表说明：图1清晰展示了本文提出的两阶段框架（右）与传统方法（左）的区别。传统方法是“微调+蒸馏”，最终目标都是分类损失。而本文方法第一阶段在微调中加入对比损失（`LSoft-SupCon`）和余弦分类头，第二阶段使用CRD损失（`LCRD`）直接对齐教师和学生的表征空间，而不仅仅是最终预测。

![图2：不同规模学生模型的性能对比](https://ieeexplore.ieee.org/primaryPDF/getPDF.jsp?tp=&arnumber=11464295&ref=)

图表说明：图2展示了在CP-Mobile不同参数规模（6K至126K）上，本文方法（C-FT + CRD）相比基线方法（FT + KD）的性能提升。可以观察到，无论在封闭集（TAU22）还是开放集（ICME24 5-shot）任务上，本文方法都带来了稳定且随模型规模增大而维持的增益，证明了其有效性可扩展。

---

### 🥈 [From Contrast to Commonality: Audio Commonality Captioning for Enhanced Audio-Text Cross-Modal Understanding in Multimodal LLMS](/audio-paper-digest-blog/posts/2026-04-29-from-contrast-to-commonality-audio-commonality)

✅ **7.5/10** | 前25% | #音频场景理解 | #多任务学习 | #跨模态 #音频大模型

👥 **作者与机构**

- 第一作者：Yuhang Jia（南开大学计算机学院TMCC）
- 通讯作者：Shiwan Zhao（南开大学计算机学院TMCC，Email: zhaosw@gmail.com）
- 作者列表：Yuhang Jia（南开大学计算机学院TMCC）、Xu Zhang（南开大学计算机学院TMCC）、Yujie Guo（南开大学计算机学院TMCC）、Yang Chen（南开大学计算机学院TMCC）、Shiwan Zhao（南开大学计算机学院TMCC）

#

💡 **毒舌点评**

这篇论文用一个直觉上更“温和”、更符合预训练目标的共性描述任务，漂亮地“击败”了看似更具挑战性但可能“用力过猛”的差异描述任务，证明在多模态大模型微调中，“顺毛捋”有时比“找不同”更有效且稳健。不过，其共性描述的生成规则（尤其是替换操作）依赖于简单的字面重叠，可能在面对更复杂、语义更抽象的音频对时显得脆弱，这限制了该方法向更通用方向发展的潜力。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权���：未提及是否公开微调后的模型权重。
- 数据集：论文中提及构建了148，500对训练数据，但未提供数据集下载链接或公开计划。
- Demo：未提及。
- 复现材料：论文给出了训练的关键超参数（LoRA参数、优化器设置、批次大小等），但未提供完整的训练配置文件、数据样本或更详细的生成脚本。
- 论文中引用的开源项目：
    - Qwen2-Audio：作为基座模型（`https://huggingface.co/Qwen/Qwen2-Audio-7B`）。
    - Audit：用于数据构造的参考框架。
    - ms-swift：用于实现LoRA微调的工具库。
- 论文中未提及完整的开源计划。

📌 **核心摘要**

这篇论文旨在解决多模态大语言模型（MLLM）在采用音频差异描述（ADC）任务进行微调时，因输出与预训练目标不匹配而导致的语义差距和灾难性遗忘问题。为此，作者提出了一种新的训练范式——音频共性描述（ACC），该任务引导模型学习并描述成对音频之间的共享语义，而非差异。与基于音频混合的数据构建方法（源自音频编辑任务）相结合，ACC提供了一个与标准音频描述（AC）更一致的训练目标。主要实验结果表明，在Qwen2-Audio模型上，ACC在AudioCaps和Clotho基准测试上的多个指标（如CIDEr-D， SPIDEr）均显著优于仅用AC或ADC微调的方法。同时，ACC在下游语音和音乐任务（如人声分类、情感识别、乐器分类）上表现出更强的通用能力保留，避免了ADC导致的性能下降。该工作的核心意义在于，提出了一个更鲁棒的音频文本跨模态对齐训练策略，平衡了任务专用性能与模型通用性。其主要局限性在于，用于构建共性描述的规则（如替换操作中提取最长连续重叠短语）可能过于简单，无法处理所有复杂的语义对齐情况，且实验评估主要集中在描述任务，对更细粒度的跨模态推理能力验证不足。

#

---

### 🥉 [Class-Aware Permutation-Invariant Signal-to-Distortion Ratio for Semantic Segmentation of Sound Scene with Same-Class Sources](/audio-paper-digest-blog/posts/2026-04-29-class-aware-permutation-invariant-signal-to)

✅ **7.5/10** | 前25% | #音频场景理解 | #多任务学习 | #置换不变训练 #空间音频

👥 **作者与机构**

- 第一作者：Binh Thien Nguyen（NTT, Inc.）
- 通讯作者：未说明
- 作者列表：Binh Thien Nguyen（NTT, Inc.）、Masahiro Yasuda（NTT, Inc.）、Daiki Takeuchi（NTT, Inc.）、Daisuke Niizumi（NTT, Inc.）、Noboru Harada（NTT, Inc.）

#

💡 **毒舌点评**

这篇论文精准地解决了DCASE挑战赛简化假设带来的“皇帝的新衣”问题——当混音里有两个“说话人”时，原本优雅的基线系统就集体宕机。其提出的损失函数和评估指标就像一副专用的眼镜，让系统能看清并区分同名的声源，技术上无懈可击。但短板在于，它本质上是在为一条专为理想情况设计的道路打补丁，实验也局限在合成的“完美场景”中，对于真实世界里更混沌的同名声源（比如一群叽叽喳喳的鸟或远处重叠的警报）是否依然有效，论文并未给出答案。

#

🔗 **开源详情**

- 代码：论文中未提及具体的代码仓库链接，但文中提到“源代码将作为DCASE 2026挑战赛基线系统和评估指标的一部分发布”。
- 模型权重：未提及公开的预训练模型权重。
- 数据集：合成数据，基于现有公开数据集（如FOA-MEIR、Veluri et al.的数据）。论文未提供独立的数据集下载链接。
- Demo：未提及。
- 复现材料：论文提供了详细的训练设置（优化器、学习率、批大小、训练轮数）、损失函数公式、评估指标定义以及数据合成方法的描述，为复现提供了较好的基础。
- 论文中引用的开源项目：引用了SpatialScaper工具用于数据合成，以及M2D预训练模型。

📌 **核心摘要**

1.  问题：当前的DCASE 2025 Task 4 基线S5系统（如ResUNetK）假设混音中的每个声音类别标签只出现一次。然而，在真实场景中，同一类别（如多个说话人）的声源经常同时出现。这会导致标签查询源分离（LQSS）模型在训练时产生歧义，并且官方的评估指标（CA-SDRi）也无法正确处理这种情况。
2.  方法核心：作者提出了两项关键改进：a) 损失函数：引入“类别感知置换不变SDR（CA-PI-SDR）”损失，在训练LQSS模型时，对于相同类别的输出源，允许在置换不变的约束下寻找与参考源的最佳匹配，从而解决标签重复带来的对齐歧义。b) 评估指标：设计了“类别感知置换不变SDRi（CA-PI-SDRi）”指标，采用类似的置换不变原理，使其能公平地评估包含重复标签的混合场景的性能。
3.  与已有方法相比新在哪里：与基线系统使用的随机对齐同类声源的损失（LCA-SDR）相比，新损失函数通过最小化损失的置换选择来优化训练；与完全置换不变训练（LPI-SDR）相比，新方法利用了标签信息进行约束，性能更优。新指标是CA-SDRi的扩展，解决了其在重复标签情况下的模糊性。
4.  主要实验结果：
    *   音频标签模型：在4通道输入下，对含重复标签的数据集（DupSet）的源准确率为77.9%，混合准确率为55.4%；对无重复标签的数据集（NoDupSet）分别为79.4%和68.3%。
    *   分离模型损失对比：提出的LCA-PI-SDR损失函数在平均性能上优于LCA-SDR和LPI-SDR。LCA-SDR在DupSet上性能显著下降，LPI-SDR在NoDupSet上性能较差。
    *   端到端系统：CA-PI-SDRi指标能有效同时反映标签预测准确率（x轴）和分离性能（y轴），最佳系统位于图5的右上角。
5.  实际意义：为沉浸式通信和空间音频分割领域提供了一种能处理现实中常见同类别多声源场景的解决方案，使基线系统和评估框架更加完备和实用。
6.  主要局限性：性能仍严重依赖第一阶段音频标签预测的准确性，而该模型在识别相同类别声源时仍具挑战性。此外，所有实验均基于合成数据，未在真实录音上进行验证。

#

---

