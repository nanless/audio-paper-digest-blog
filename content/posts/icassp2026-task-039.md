---
title: "ICASSP 2026 - 生物声学 论文列表"
date: 2026-04-29
draft: false
tags: ["生物声学"]
categories: [icassp-2026]
description: "共 12 篇 ICASSP 2026 生物声学 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 生物声学

共 **12** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Enabling Multi-Species Bird Classification on Low-Power Bioa](/audio-paper-digest-blog/posts/2026-04-29-enabling-multi-species-bird-classification-on-low) | 8.0分 | 前25% |
| 🥈 | [Multi-Layer Attentive Probing Improves Transfer of Audio Rep](/audio-paper-digest-blog/posts/2026-04-29-multi-layer-attentive-probing-improves-transfer) | 7.5分 | 前25% |
| 🥉 | [Learning Domain-Robust Bioacoustic Representations for Mosqu](/audio-paper-digest-blog/posts/2026-04-29-learning-domain-robust-bioacoustic) | 7.5分 | 前25% |
| 4. | [Unsupervised Discovery and Analysis of the Vocal Repertoires](/audio-paper-digest-blog/posts/2026-04-29-unsupervised-discovery-and-analysis-of-the-vocal) | 7.5分 | 前50% |
| 5. | [BioSEN: A Bio-Acoustic Signal Enhancement Network for Animal](/audio-paper-digest-blog/posts/2026-04-29-biosen-a-bio-acoustic-signal-enhancement-network) | 7.5分 | 前25% |
| 6. | [Testing The Efficient Coding Hypothesis Beyond Humans: The A](/audio-paper-digest-blog/posts/2026-04-29-testing-the-efficient-coding-hypothesis-beyond) | 7.5分 | 前25% |
| 7. | [Random Matrix-Driven Graph Representation Learning For Bioac](/audio-paper-digest-blog/posts/2026-04-29-random-matrix-driven-graph-representation) | 7.5分 | 前25% |
| 8. | [Fusion of Multimodal Estimations by Extended State Hidden Ma](/audio-paper-digest-blog/posts/2026-04-29-fusion-of-multimodal-estimations-by-extended) | 7.0分 | 前50% |
| 9. | [Identifying Birdsong Syllables without Labelled Data](/audio-paper-digest-blog/posts/2026-04-29-identifying-birdsong-syllables-without-labelled) | 7.0分 | 前50% |
| 10. | [Representation-Diverse Self-Supervision for Cross-Domain Bio](/audio-paper-digest-blog/posts/2026-04-29-representation-diverse-self-supervision-for-cross) | 7.0分 | 前25% |
| 11. | [Domain-Invariant Representation Learning of Bird Sounds](/audio-paper-digest-blog/posts/2026-04-29-domain-invariant-representation-learning-of-bird) | 6.5分 | 前50% |
| 12. | [Utilizing Information Theoretic Approach to Study Cochlear N](/audio-paper-digest-blog/posts/2026-04-29-utilizing-information-theoretic-approach-to-study) | 6.5分 | 前50% |

---

## 📋 论文详情

### 🥇 [Enabling Multi-Species Bird Classification on Low-Power Bioacoustic Loggers](/audio-paper-digest-blog/posts/2026-04-29-enabling-multi-species-bird-classification-on-low)

🔥 **8.0/10** | 前25% | #生物声学 | #知识蒸馏 | #时频分析 #边缘计算

👥 **作者与机构**

- 第一作者：Stefano Ciapponi（Fondazione Bruno Kessler, University of Trento）
- 通讯作者：未说明
- 作者列表：Stefano Ciapponi（Fondazione Bruno Kessler, University of Trento），Leonardo Mannini（Fondazione Bruno Kessler），Jarek Scanferla（Eurac Research），Matteo Anderle（Eurac Research），Elisabetta Farella（Fondazione Bruno Kessler, University of Trento）

#

💡 **毒舌点评**

亮点：论文首次在AudioMoth这类极低功耗微控制器上实现了多物种鸟类分类，将理论创新（半可学习滤波器组）与严格的硬件约束验证（77mJ/推理）紧密结合，工程实用性很强。短板：70种鸟类的全景分类准确率（70.1%）与BirdNET在特定子集上的表现相比仍有差距，对于生物声学实际应用而言，高难度物种的识别鲁棒性可能是更关键的瓶颈。

#

🔗 **开源详情**

- 代码：论文提供了公开代码仓库链接：`https://github.com/wren-framework/wrennet`，包含数据集创建、训练、蒸馏和模型导出脚本。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：论文中未明确说明该70种鸟类数据集是否公开，但提及了音频来源（Xeno-Canto）和预处理方法，部分数据可能需要根据方法自行构建。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了详细的训练配置、损失函数权重、优化器设置、数据增强方法以及模型架构参数，复现信息较为充分。
- 论文中引用的开源项目：引用了AudioMoth（硬件平台）、BirdNET（教师模型）、ESC-50（环境声数据集）、CMSIS-NN（推理库）等开源项目或标准工具。

📌 **核心摘要**

这篇论文旨在解决在资源极度受限的低功耗边缘设备（如AudioMoth，内存≤1MB）上实现连续、实时的多物种鸟类声音分类的难题。其核心方法是提出了WrenNet神经网络架构，该架构采用流式兼容的因果卷积和GRU进行高效时序建模，并创新性地设计了一种半可学习（Semi-learnable）频谱特征提取器，通过可微的参数化频率映射自适应优化鸟类叫声的频谱分辨率。与固定梅尔尺度的特征提取相比，该设计能自动学习适合不同物种的频率过渡点。在由鸟类学家策划的70种阿尔卑斯鸟类数据集上，WrenNet对声学特征明显的物种准确率达90.8%，全任务准确率为70.1%。在AudioMoth设备上部署时，单次3秒推理仅消耗77mJ，比BirdNET在树莓派上运行能效高出16倍以上。这标志着首个在微控制器硬件上实现多物种鸟类分类的实用框架。主要局限性在于对声学相似的复杂物种组（如莺类、雀类）识别准确率（约77%）仍有提升空间。

#

---

### 🥈 [Multi-Layer Attentive Probing Improves Transfer of Audio Representations for Bioacoustics](/audio-paper-digest-blog/posts/2026-04-29-multi-layer-attentive-probing-improves-transfer)

✅ **7.5/10** | 前25% | #生物声学 | #自监督学习 #迁移学习 | #自监督学习 #迁移学习

👥 **作者与机构**

- 第一作者：未说明（论文按作者列表排序，未明确标注第一作者）
- 通讯作者：未说明（论文未明确标注通讯作者）
- 作者列表：Marius Miron, David Robinson, Masato Hagiwara, Titouan Parcollet, Jules Cauzinille, Gagan Narula, Milad Alizadeh, Ellen Gilsenan-McMahon, Sara Keen, Emmanuel Chemla, Benjamin Hoffman, Maddie Cusimano, Diane Kim, Felix Effenberger, Jane K. Lawton, Aza Raskin, Olivier Pietquin, Matthieu Geist （均来自Earth Species Project）

💡 **毒舌点评**

论文系统性地揭示了在生物声学任务中，简单的线性探针会系统性低估优秀编码器的能力，这为改进该领域的模型评估标准提供了有力证据。然而，研究主要集中在对已有模型的“再评估”，而非提出新的编码器或解决更具挑战性的任务，创新维度略显单一。

🔗 **开源详情**

- 代码：提供了Python库的开源链接：https://github.com/earthspecies/avex。
- 模型权重：论文中未提及是否公开其评估所用的所有基座模型的检查点权重。
- 数据集：评估所用的BEANs和BirdSet是公开基准数据集，论文未提及自己发布新数据。
- Demo：论文中未提及提供在线演示。
- 复现材料：论文提供了实验的核心方法描述（如适配器设计、探针头结构、训练策略概要），但部分细节（如具体超参数值、数据增强方法、硬件配置）未在正文完全列出，可能包含在开源库中。
- 引用的开源项目/模型：论文明确使用了以下开源或公开模型：BEATs, EAT, BirdAVES (AVES), EfficientNet, NatureBEATs。这些模型本身是公开可用的。

📌 **核心摘要**

1.  要解决什么问题： 当前生物声学领域的基准测试普遍采用固定、低容量的“探针头”（如最后一层输出的线性层）来评估不同音频编码器的性能，这可能导致评估结果有偏差，无法准确反映编码器的真实质量。
2.  方法核心是什么： 系统性地比较了多种探针策略（最后一层探针 vs. 多层探针）和探针头类型（线性探针 vs. 注意力探针）在不同音频编码器（自监督SSL和监督SL模型）和两个生物声学基准（BEANs， BirdSet）上的表现。引入了适配器模块来处理不同层输出维度不一致的问题。
3.  与已有方法相比新在哪里： 相较于以往工作仅用线性探针评估最后一层，本文首次在生物声学领域全面研究了多层探针和注意力探针的有效性，并适配了处理异构层输出的适配器模块。这借鉴了语音领域的评测思想，但针对生物声学任务和模型特性进行了适配。
4.  主要实验结果如何： 关键发现包括：a) 多层探针一致性优于单层探针：对于所有模型，使用所有层的加权融合比仅使用最后一层效果更好，在BEANs分类/检测任务上平均提升约0.08精度，在BirdSet上提升约0.03 mAP。b) 注意力探针对自监督Transformer模型效果显著：注意力探针能更好地利用SSL模型（如BEATs, EAT, BirdAVES）学习到的时序依赖关系，性能提升明显。c) 监督模型与鸟类数据高度相关：通过分析学习到的层权重，发现SL模型的权重更集中在专用于鸟类分类的高层，而SSL模型的权重分布更均匀。
5.  实际意义是什么： 本研究建议生物声学社区更新其基准测试标准，采用更强大、更灵活的探针策略（如多层注意力探针）来更公平地评估和比较不同的音频基础模型，从而推动该领域模型性能的真实提升。
6.  主要局限性是什么： 研究的计算开销较大（需提取多层特征）；对部分CNN模型（如EfficientNet）的分析不如Transformer模型深入；未与最新发表的一些强大模型（如Perch 2.0）进行直接性能对比。

---

### 🥉 [Learning Domain-Robust Bioacoustic Representations for Mosquito Species Classification with Contrastive Learning and Distribution Alignment](/audio-paper-digest-blog/posts/2026-04-29-learning-domain-robust-bioacoustic)

✅ **7.5/10** | 前25% | #生物声学 | #对比学习 | #领域适应 #音频分类

👥 **作者与机构**

- 第一作者：Yuanbo Hou（University of Oxford, UK）
- 通讯作者：Yuanbo Hou（Yuanbo.Hou@eng.ox.ac.uk， University of Oxford, UK）
- 作者列表：Yuanbo Hou（University of Oxford, UK）、Zhaoyi Liu（KU Leuven, Belgium）、Xin Shen（University of Oxford, UK）、Stephen Roberts（University of Oxford, UK）

#

💡 **毒舌点评**

亮点在于针对生物声学数据的特性（物种间声学特征相似、域间差异大）设计了包含对比学习和条件分布对齐的多损失函数框架，消融实验设计合理。短板是方法的理论分析部分较弱，更多是现象驱动；实验中的“非严格留一域外评估”设计是一个明显妥协，削弱了“跨域泛化”这一核心主张的证明力度。

#

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/Yuanbo2020/DR-BioL。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：论文中使用的数据集来自已公开的HumBugDB、Kasetsart、UFRGS、Abuzz数据集。论文未提及是否提供了组合后的数据集下载链接。
- Demo：论文中未提及提供在线演示。
- 复现材料：论文给出了主要训练超参数（优化器、学习率、batch size、早停策略）、模型架构描述（CNN块结构）和损失函数定义，但未提供完整的训练脚本、配置文件或详细日志。
- 引用的开源项目：论文依赖了多个公开数据集（HumBugDB, Kasetsart, UFRGS, Abuzz）。模型部分参考了VGG架构、PANNs、YAMNet、MobileNetV2等经典模型或预训练模型。

📌 **核心摘要**

1. 要解决什么问题：蚊子物种分类（MSC）模型在不同录音环境（域）下性能急剧下降，因为模型倾向于学习易于区分的“域特征”（如背景噪声、设备差异）而非真正的物种声学特征，导致跨域泛化能力差。
2. 方法核心是什么：提出DR-BioL框架，结合监督对比学习和物种条件分布对齐。对比学习通过两个损失（物种内聚损失ScoL、域不变损失DicL）拉近同类样本、推远异类样本，同时抑制域差异；条件分布对齐损失（SdaL）使用最大均值差异（MMD）对齐同一物种在不同域的表示分布。
3. 与已有方法相比新在哪里：不同于传统域对抗训练（DAT）通过梯度反转层强制消除所有域特征（可能损害物种判别性），DR-BioL采用更灵活的对比学习策略，旨在引导模型优先学习物种判别特征，并选择性地抑制域差异。这是针对生物声学数据特性的定制化设计。
4. 主要实验结果如何：在一个包含4个域、8个物种、约33小时的多域蚊子音频数据集上进行实验。
   - 表1（跨域泛化示例）：
     | 训练集 | 测试集 | CNN | DR-BioL CNN |
     | :--- | :--- | :--- | :--- |
     | D1 + D2 | D1 + D2 | 99.79% | 92.81% |
     | D1 + D2 | D3 | 41.40% | 74.92% |
     注：在同分布测试时CNN准确率更高，但在新域D3上DR-BioL显著更优，证明了其鲁棒性。
   - 表2（消融实验）：逐步移除物种相关损失（#2， #3），验证集准确率从82.19%降至80.57%；移除域相关损失（#5），准确率升至82.68%，表明模型利用域特征获得“虚假”提升。
   - 表3（权重调优）：调整损失权重，最佳组合（#3）将验证集准确率从82.19%提升至84.64%。
   - 表4（主要对比结果）：
     | 模型 | 参数量(M) | FLOPs(G) | 准确率(%) | AUC | AP |
     | :--- | :--- | :--- | :--- | :--- | :--- |
     | Baseline CNN | 4.9530 | 2.6152 | 80.031 | 0.9680 | 0.8616 |
     | PANNs | 79.6902 | 3.9787 | 81.679 | 0.9653 | 0.8511 |
     | DAT CNN | 5.0854 | 2.6155 | 79.583 | 0.9607 | 0.8481 |
     | DR-BioL | 5.0854 | 2.6155 | 85.345 | 0.9732 | 0.9002 |
     DR-BioL在准确率、AUC、AP上均优于所有基线，包括参数效率模型（YAMNet， MobileNetV2）和强大的预训练模型（PANNs）。
   - 图4：t-SNE可视化显示，DAT将域嵌入混合成模糊曲线，而DR-BioL的嵌入虽跨域收敛但保留了部分结构，表明其学习到了更平衡的表示。
5. 实际意义是什么：该工作推动了生物声学监测技术在真实多变环境中的可靠性，使基于声音的蚊子监控更有可能从实验室走向大规模野外部署，辅助疟疾等疾病防控。
6. 主要局限性是什么：实验数据集中部分物种（4-7）仅存在于单一域（D1），导致测试集与训练集无法完全分离，存在一定程度的域重叠，这虽然被论文提及并部分归因于数据稀缺，但仍是对“跨域”评估严格性的一个妥协。

---

### 4. [Unsupervised Discovery and Analysis of the Vocal Repertoires and Patterns of Select Corvid Species](/audio-paper-digest-blog/posts/2026-04-29-unsupervised-discovery-and-analysis-of-the-vocal)

✅ **7.5/10** | 前50% | #生物声学 | #聚类 | #时频分析 #音频分类

👥 **作者与机构**

- 第一作者：未说明（论文作者列表为并列排序，未明确第一作者）
- 通讯作者：未说明（论文未提供通讯作者信息）
- 作者列表：Nitin Sudarsanam（布朗大学 Brown University）、Sahla Kader（德克萨斯大学阿灵顿分校 University of Texas at Arlington）、Isaac Fernandezlopez（布朗大学 Brown University）、Sophie Huang（德克萨斯大学阿灵顿分校 University of Texas at Arlington）、Tuan M. Dang（德克萨斯大学阿灵顿分校 University of Texas at Arlington）、Theron S. Wang（德克萨斯大学阿灵顿分校 University of Texas at Arlington）、Hridayesh Lekhak（德克萨斯大学阿灵顿分校 University of Texas at Arlington）、Kenny Q. Zhu（德克萨斯大学阿灵顿分校 University of Texas at Arlington）

💡 **毒舌点评**

亮点： 该研究在生物声学领域展现了严谨的“大数据”方法论，通过处理380小时、8.7万余条叫声的超大规模数据集，首次对五种鸦科动物进行了跨物种的系统声学分析，其数据规模和分析深度在同类研究中较为突出。
短板： 论文的核心创新主要体现在将已有技术（GMM聚类、N-gram模型）应用于特定数据集，方法上的原创性有限；且分析完全依赖公开数据库，缺乏对个体乌鸦身份的追踪，可能混淆了物种差异与个体差异，结论的生物学解释力度受限。

🔗 **开源详情**

- 代码：提供代码仓库链接（https://github.com/UTA-ACL2/corvids_vocal_repertoire）。
- 模型权重：未提及。
- 数据集：数据来源于公开的Macaulay Library。论文指出其处理后的数据（或指向原始数据的脚本）通过上述GitHub仓库提供。
- Demo：未提及。
- 复现材料：论文详细描述了实验设置、超参数（如静音阈值、峰值计数参数）、评估方法（自助法、统计检验）。提供了GitHub仓库链接，推测包含复现所需代码和数据获取/处理脚本。
- 论文中引用的开源项目：依赖的开源工具/模型包括：`AudioSep`（音频分离基础模型）、`biodenoising`（Earth Species Project的降噪模型）、`noisereduce`（Python降噪库）、`PANNs`（预训练音频神经网络，用于SED）。

📌 **核心摘要**

这篇论文旨在解决对鸦科动物（Corvus属）复杂发声系统结构理解不足的问题。方法核心是采用无监督学习方法，从大规模原始音频中自动提取、聚类和分析叫声单元及其序列模式。与已有方法相比，新在三个方面：1）这是首次对五种乌鸦进行如此大规模的跨物种声学分析（380小时，87，747条叫声）；2）提出了一种新的“峰值计数”（Peak Count）特征，用于量化单个叫声内部的重复单元；3）通过大规模实证分析，揭示了鸦科动物发声中显著的物种内多样性，且区分物种与区分叫声聚类的声学特征不同。主要实验结果包括：使用Bigram模型对四个物种的叫声序列建模效果最好（困惑度最低），其中美国乌鸦（American Crow）的高阶模型（3-gram， 4-gram）表现也相对较好（困惑度分别为10.86， 14.13），表明其叫声序列可能具有更复杂的结构。聚类分析发现，区分不同叫声聚类的声学特征与区分物种的特征存在差异。实际意义在于证明了利用大规模数据和机器学习方法研究动物复杂通讯系统的可行性，并为探索鸦科动物潜在的语言演化基础提供了线索。主要局限性包括：使用的音频数据存在噪声和不平衡，缺乏个体乌鸦的标识信息，以及当前分析模型（如N-gram）相对简单。

---

### 5. [BioSEN: A Bio-Acoustic Signal Enhancement Network for Animal Vocalizations](/audio-paper-digest-blog/posts/2026-04-29-biosen-a-bio-acoustic-signal-enhancement-network)

✅ **7.5/10** | 前25% | #生物声学 | #时频分析 | #模型比较 #数据集

👥 **作者与机构**

基于当前提供的论文内容：
- 第一作者：Tianyu Song (九州大学 生物资源与生物环境科学研究生院)
- 通讯作者：Ton Viet Ta (九州大学 农学院)
- 作者列表：Tianyu Song (九州大学 生物资源与生物环境科学研究生院)，Ton Viet Ta (九州大学 农学院)，Ngamta Thamwattana (纽卡斯尔大学 信息与物理科学学院)，Hisako Nomura (九州大学 农学院)，Linh Thi Hoai Nguyen (九州大学 国际碳中和能源研究所)

💡 **毒舌点评**

本文精准地瞄准了生物声学信号增强这一“蓝海”问题，并通过三个针对性设计的模块（MSDA， BHME， EAGC）有效提升了性能，其计算效率优势显著，体现了扎实的工程优化能力。然而，论文中的消融实验结果存在明显的指标矛盾（如CSCConv-AE+MSDA的SNR为负），且核心贡献主要是在现有语音增强框架上的适配与组合创新，缺乏根本性的理论或架构突破，代码和模型权重的缺失也削弱了其即时影响力。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及公开模型权重。
- 数据集：论文中引用的数据集（Xeno-canto, Earth Species Library, Biodenoising）为公开数据集，论文未提供新的自建数据集。如何获取已在[14]-[18]中说明。
- Demo：论文中未提及在线演示。
- 复现材料：提供了模型架构描述、损失函数、初始学习率、衰减系数和Batch Size。但缺少优化器、具体训练时长、各模块的详细超参数（如MSDA的头数、BHME的核尺寸）等，复现材料不完全充分。
- 论文中引用的开源项目：引用了FSPEN[19]、LiSenNet[20]、Demucs[21]、DCCRN[22]、FullSubNet[23]等作为对比基线，但未明确说明依赖的开源工具。
- 论文中未提及开源计划。

📌 **核心摘要**

本文旨在解决生物声学信号增强领域中，因动物叫声特性复杂（谐波结构、稀疏时序）和训练数据缺乏“干净”样本而带来的挑战。为此，作者提出了BioSEN模型，一个轻量级的专用去噪网络。其核心方法是在复杂卷积自编码器基线上，集成了三个关键模块：多尺度双轴注意力机制（MSDA）联合提取时频和通道特征；生物谐波多尺度增强模块（BHME）通过各向异性卷积捕捉谐波结构；以及能量自适应门控连接（EAGC）智能融合编解码器特征以抑制噪声传递。与已有的语音增强方法相比，BioSEN的新颖之处在于其完全针对生物声学信号的独特属性进行模块设计，并利用伪干净数据进行训练。在三个多样化的生物声学测试集（鸟类声音、混合动物声音）上的实验表明，BioSEN在感知质量（SNR）和信号保真度（SI-SDR）上匹配或超越了多种先进的语音增强模型（如DCCRN， FullSubNet），同时计算开销大幅降低（例如在Bird Song数据集上仅需3.15 GFLOPs，远低于FullSubNet的93.82 GFLOPs）。这证明了其为生物多样性监测提供高效、鲁棒音频处理工具的潜力。主要局限性在于消融实验中部分模块组合出现指标矛盾，且模型依赖于预训练生成的伪干净数据，其在真实极端噪声下的泛化能力有待进一步验证。

---

### 6. [Testing The Efficient Coding Hypothesis Beyond Humans: The Auditory Kernels of Bat Vocalizations](/audio-paper-digest-blog/posts/2026-04-29-testing-the-efficient-coding-hypothesis-beyond)

✅ **7.5/10** | 前25% | #生物声学 | #稀疏编码 | #信号处理 #音频分类

👥 **作者与机构**

- 第一作者：未说明
- 通讯作者：未说明
- 作者列表：Aleksandra Savova（代尔夫特理工大学电气工程、数学与计算机科学学院）、Dimme de Groot（代尔夫特理工大学电气工程、数学与计算机学院）、Jorge Martinez（代尔夫特理工大学电气工程、数学与计算机学院）

#

💡 **毒舌点评**

亮点：方法新颖，首次将稀疏编码（Matching Pursuit）应用于蝙蝠回声定位信号的“听觉核”分析，成功提取出与叫声结构（CF-FM）高度对应的功能特化表示，为“高效编码假说”跨越物种边界提供了有力的计算证据。短板：结论的生物学说服力受限于缺乏真实的蝙蝠听觉神经生理数据（如revcor函数）作为验证基准，目前只能证明叫声结构本身“适合”被稀疏编码，而非“证实”蝙蝠大脑正是如此编码。

#

🔗 **开源详情**

- 代码：提供了GitHub仓库链接（https://github.com/D1mme/rp_auditory_kernels/tree/main），包含字典学习和匹配追踪的实现。
- 模型权重：论文中未提及公开训练好的“听觉核”字典权重。
- 数据集：使用公开的ChiroVox数据集（https://chirovox.org/）。
- Demo：论文中未提及在线演示。
- 复现材料：论文详细说明了数据预处理步骤、模型参数（字典大小、初始化长度、MP率）和评估指标。引用了具体的MP算法实现库[38]。
- 论文中引用的开源项目：引用了匹配追踪的具体实现[38]。

📌 **核心摘要**

1.  问题：高效编码假说（生物感知系统最大化信息传输并最小化神经消耗）在人类语音中得到验证，但其在非人类（特别是依赖复杂回声定位的蝙蝠）听觉感知中的作用尚不明确。
2.  方法：采用基于匹配追踪（Matching Pursuit）的稀疏编码方法，以大菊头蝠（Rhinolophus affinis）的回声定位叫声为数据，通过数据驱动学习得到一组“听觉核”字典，并分析其特性。
3.  创新：与以往使用黑盒模型研究蝙蝠声音不同，本研究专注于从叫声结构本身出发，在早期听觉处理层面（独立于高级神经处理）检验其是否内禀地优化了稀疏表示。
4.  结果：学习到的核具有紧凑、稀疏和功能专化的特点。它们能高效重建叫声（例如，图1显示200个激活即可达到SNR 20.62 dB），且核的激活模式能编码叫声特定形状。定量比较显示，对于R. affinis叫声，该方法的比特率-保真度（SNR）优于傅里叶和小波变换（图4）。聚类分析（27类）揭示了叫声多样性，包括主要谐波结构、伪影和窄CF成分（图6）。所有稀疏度指标（Gini指数≈0.99）均很高。
5.  意义：为动物发声信号的计算建模提供了基础，支持未来在解码动物声音和跨物种通信领域的研究。证明了高效表示可以从非人类发声中涌现，且哺乳动物的听觉编码策略可能具有共享的进化基础。
6.  局限：缺乏生物学验证数据（如蝙蝠听觉神经元的调谐特性）。聚类结果缺乏生物学标签进行验证。跨物种泛化性有限（对近缘种R. pearsonii效果较差）。

#

---

### 7. [Random Matrix-Driven Graph Representation Learning For Bioacoustic Recognition](/audio-paper-digest-blog/posts/2026-04-29-random-matrix-driven-graph-representation)

✅ **7.5/10** | 前25% | #生物声学 | #图表示学习 | #时频分析 #鲁棒性

👥 **作者与机构**

- 第一作者：Biaohang Yuan（西藏大学， 拉萨）
- 通讯作者：Jiangzhao Wang（湖南大学， 长沙）
- 作者列表：Biaohang Yuan（西藏大学）， Jiangzhao Wang（湖南大学）， YuKai Hao（武汉理工大学）， Ruzhen Chen（西藏大学）， Yan Zhou（北京理工大学， 珠海）

💡 **毒舌点评**

这篇论文的亮点在于巧妙地将随机矩阵理论融入图神经网络的构建过程，为处理低资源生物声学信号中的时频特征关联提供了一个有数学理论支撑的新颖视角，特别是通过可学习缩放因子α和超图结构来动态建模复杂谐波关系，立意很高。然而，短板在于其核心方法的“新颖性”更多体现在框架的复杂拼接上，对于随机矩阵理论如何具体且关键地提升了模型性能（而非仅作为理论背书）的阐述略显薄弱，且实验部分对训练细节的吝啬披露，让其宣称的优越性能打了折扣，复现门槛极高。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：提到了Birdsdata和牛蛙叫声数据集名称��来源，但未提供公开下载链接或获取方式说明。
- Demo：未提及。
- 复现材料：论文给出了算法伪代码（Algorithm 3.1）和部分超参数（如τ=0.3），但缺少大量关键训练细节（如网络具体层数、隐藏层维度、优化器参数、学习率等）。
- 论文中引用的开源项目：未明确提及依赖的开源项目。引用的基线方法（如MFTE， GraFPrint， BirdNET， METAAUDIO）本身是开源项目，但本文未说明是否复用了其代码。

📌 **核心摘要**

1. 问题：生态声学监测依赖生物声学识别，但面临训练数据稀缺、类别不平衡以及复杂声景中信号易受干扰等挑战，导致现有模型性能受限。
2. 方法核心：提出了随机矩阵驱动的图表示学习框架（RM-GRL）。该框架首先将三通道梅尔频谱图（Log-Mel, Delta, Delta-Delta）视为时频图，并利用随机矩阵理论指导图结构的构建，引入一个可学习的缩放因子α来动态调整跨通道权重。它结合了普通图和超图结构，其中超边连接同一谐波成分内的时频节点。
3. 创新点：与传统方法相比，新在：a) 将随机矩阵理论与图表示学习结合，通过低秩投影和JL引理保证特征投影的距离保持性；b) 构建时频超图以显式建模谐波结构；c) 在图卷积网络中引入Lipschitz常数约束和对抗扰动以增强局部判别特征；d) 采用ADD损失函数优化嵌入空间。
4. 实验结果：在Birdsdata和牛蛙叫声数据集上进行评估。实验设置了四组不平衡正负样本比例（1:1至1:4）。结果显示，该模型在精确率-召回率曲线（图3）上始终优于MFTE、GraFPrint、BirdNET和METAAUDIO四个基线。在ROC-AUC评估中，对21种生物声音均达到0.8以上（图4）。消融研究表明，随机矩阵驱动投影模块贡献最大（+2.3%），其次是超图构建（+1.5%）。在F1分数对比中，该方法在大多数物种上表现最佳（图5b）。
5. 实际意义：该工作为低资源、高噪声环境下的生物声学识别提供了一种新的图神经网络建模范式，有助于提升生态监测的自动化水平。
6. 主要局限性：论文未提供代码、模型权重和关键训练超参数（如学习率、批次大小、具体网络层数/维度），可复现性差；对随机矩阵理论在模型中发挥具体作用的理论分析相对表面，更多依赖引理陈述；实验仅在两个自述数据集上进行，缺乏更广泛的验证。

---

### 8. [Fusion of Multimodal Estimations by Extended State Hidden Markov Model: Application to Fetal Heart Rate Monitoring](/audio-paper-digest-blog/posts/2026-04-29-fusion-of-multimodal-estimations-by-extended)

✅ **7.0/10** | 前50% | #生物声学 | #信号处理 | #多任务学习 #医疗

👥 **作者与机构**

- 第一作者：Baptiste Rault（Université Grenoble Alpes, CNRS, UMR 5525, VetAgro Sup, Grenoble INP, TIMC）
- 通讯作者：Bertrand Rivet（未明确说明，但提供了邮箱；机构为Université Grenoble Alpes, CNRS, Grenoble INP, GIPSA-lab）
- 作者列表：Baptiste Rault（Université Grenoble Alpes, CNRS, UMR 5525, VetAgro Sup, Grenoble INP, TIMC）、Julie Fontecave-Jallon（Université Grenoble Alpes, CNRS, UMR 5525, VetAgro Sup, Grenoble INP, TIMC）、Bertrand Rivet（Université Grenoble Alpes, CNRS, Grenoble INP, GIPSA-lab）

💡 **毒舌点评**

亮点：扩展HMM状态变量以显式建模“观测是目标信号、混淆信号还是噪声”的思路巧妙且可解释，有效提升了融合算法在真实临床数据上的抗混淆能力（FuSEmHR的RMC中位数降至1.5%）。短板：算法复杂度急剧增加（融合1分钟数据从35ms升至8秒），且最终版本严重依赖可靠的参考信号（mHR），限制了其在未知或不稳定干扰下的应用；更遗憾的是，论文未开源任何代码或数据，让“可复现性”成了一纸空文。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：论文描述了一个来自格勒诺布尔大学医院的临床数据集，但未提供公开获取方式。
- Demo：未提供在线演示。
- 复现材料：论文描述了数据采集设置和性能指标，但未提供模型训练细节、超参数配置、预训练检查点或详细的附录说明。
- 论文中引用的开源项目：论文引用了前序工作[12, 16, 17]，但未明确说明依赖的开源工具或模型。
- 总结：论文中未提及任何开源计划。

📌 **核心摘要**

1.  要解决什么问题：非侵入式胎儿心率（fHR）监测中，单一模态（如腹部ECG或PCG）存在信号质量差、易与母体心率（mHR）混淆的问题。现有基于隐马尔可夫模型（HMM）的融合方法未能显式处理观测信号可能是目标信号、混淆信号或噪声这三种情况。
2.  方法核心是什么：提出一种扩展状态HMM（FuSE）用于融合ECG和PCG模态的fHR估计。核心是在原有隐藏状态（fHR）基础上，为每个模态增加一个离散变量Z，用于指示当前观测是真实fHR（H）、被mHR混淆（C）还是噪声（N）。进一步地，若mHR参考信号可用，可在模型中显式利用它来优化“混淆”情���下的发射概率，形成FuSEmHR变体。
3.  与已有方法相比新在哪里：相比传统的HMM融合方法（仅考虑“信号+噪声”或“纯噪声”两种情况），新方法引入了第三种关键状态“并发信号（混淆）”，并允许利用先验的干扰信号（mHR）信息来细化模型，从而更精确地区分和利用来自不同模态的观测。
4.  主要实验结果如何：在包含38名受试者、约20小时临床数据的集上测试。与基线HMM融合方法（Fus[12]）相比，FuSEmHR在准确度（RGA，与CTG参考的一致性）上中位数从79%提升至88%；在抗母体混淆率（RMC）上中位数从3%降至1.5%。其表现在大多数受试者上优于单模态ECG或PCG。关键实验数据如下表所示：

| 方法 | RGA中位数 (%) | RMC中位数 (%) | 备注 |
| :--- | :---: | :---: | :--- |
| ECG | 46 | 15.5 | 单模态 |
| PCG | 68.5 | 5 | 单模态 |
| Fus [12] | 79 | 3 | 基线融合方法 |
| FuSE | 82.5 | 3 | 本文方法（未用mHR信息） |
| FuSEmHR | 88 | 1.5 | 本文最终方法（用mHR信息） |

    注：数据来源于论文图2和图4的描述。

5.  实际意义是什么：该方法为结合ECG和PCG进行更鲁棒、准确的无创胎儿心率监测提供了一种有效框架，有望减少临床误判（如误将mHR当作fHR），从而降低不必要的医疗干预。
6.  主要局限性是什么：计算复杂度显著增加，不利于实时性要求极高的应用；FuSEmHR变体的性能依赖于可靠获取母体心率参考信号；模型参数需要从数据中学习，其泛化性有待更多样化数据验证。

---

### 9. [Identifying Birdsong Syllables without Labelled Data](/audio-paper-digest-blog/posts/2026-04-29-identifying-birdsong-syllables-without-labelled)

✅ **7.0/10** | 前50% | #生物声学 | #无监督学习 | #聚类 #信号处理

👥 **作者与机构**

- 第一作者：Mélisande Teng (Mila - Quebec AI Institute, Université de Montréal) (共同第一作者)
- 通讯作者：未说明
- 作者列表：Mélisande Teng (Mila - Quebec AI Institute, Université de Montréal), Julien Boussard (Mila - Quebec AI Institute, McGill University) (共同第一作者), David Rolnick (Mila - Quebec AI Institute, McGill University), Hugo Larochelle (Mila - Quebec AI Institute, Université de Montréal)

💡 **毒舌点评**

亮点：该方法是首个完全无监督的鸟鸣音节分解算法，巧妙地将电生理信号处理中的spike sorting思想迁移到生物声学，避免了对大量标注数据的依赖，实用性强。短板：整个流水线（特别是匹配追求部分）对预设的音节检测阈值和模板质量非常敏感，论文在复杂噪声环境下的表现讨论不足，更像一个优雅的“工程流水线”而非一个可学习的、具有强泛化能力的模型。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：论文使用了两个公开数据集（Bengalese Finch [16], Great Tit [17]），但未说明是否提供经其处理后的数据或额外资源。
- Demo：未提及。
- 复现材料：论文给出了关键超参数（η, h, HDBSCAN参数）和方法伪代码描述，但完整的处理流程、细节（如零填充尺寸、PCA的具体实现）和迭代停止条件不够详尽。
- 论文中引用的开源项目：引用了scikit-maad [13] (用于对比方法)、HDBSCAN [19] (用于聚类)、以及引用了Perch [7] 作为嵌入基线。论文本身的方法未明确声称基于某个现有开源工具包。

📌 **核心摘要**

1.  问题：研究鸟鸣音节序列对理解动物交流和个体识别至关重要，但现有机器学习方法严重依赖音节级别的标注数据，成本高且可扩展性差。
2.  方法核心：提出一个完全无监督的流水线：首先基于振幅阈值检测“音节事件”(SEs)，然后对SEs进行聚类并生成“音节模板”，最后使用匹配追求算法将完整录音分解为模板序列。
3.  新颖之处：是首个无需任何标签的端到端鸟鸣音节分解算法。其创新在于将信号处理中的“匹配追求”与无监督聚类（HDBSCAN）相结合，并通过分裂-合并步骤精炼模板，实现跨个体共享模板。
4.  主要实验结果：在Bengalese finch数据集上，多个体设置下平均检测精度0.82，微平均精度0.91（见下表）。在Great tit数据集上，方法提取的“音节袋”(BoS)表示能有效分离不同个体和歌曲类型（mAP=0.46， mAP@5=0.86），优于Perch嵌入。
    *   表1（Bengalese finch关键指标摘录）
| 设置 | 个体ID | 检测精度 | 检测召回率 | 微平均精度 |
| :--- | :--- | :--- | :--- | :--- |
| 单个体 | 平均 | 0.85 | 0.66 | 0.87 |
| 多个体 | 平均 | 0.82 | 0.57 | 0.91 |
5.  实际意义：为生物学家提供了一个快速探索和标注鸟鸣录音的工具，尤其适用于干净录音环境（如录音箱、焦点录音），能辅助个体识别和歌曲类型分析。
6.  主要局限性：方法可能对结构化噪声（如重叠鸟鸣、环境杂音）不够鲁棒；性能依赖于初始检测阈值η和聚类参数h的选择；召回率相对较低，可能遗漏低频次音节。

---

### 10. [Representation-Diverse Self-Supervision for Cross-Domain Bioacoustic Learning in Low-Resource Settings](/audio-paper-digest-blog/posts/2026-04-29-representation-diverse-self-supervision-for-cross)

✅ **7.0/10** | 前25% | #生物声学 | #对比学习 | #自监督学习 #迁移学习

👥 **作者与机构**

- 第一作者：Dimitris N. Makropoulos（HERON - Hellenic Robotics Center of Excellence; 国家技术大学雅典分校电气与计算机工程学院；雅典研究中心机器人研究所；希腊海洋研究中心海洋学研究所）
- 通讯作者：未说明（论文未明确标注）
- 作者列表：Dimitris N. Makropoulos（同上），Christos Garoufis（HERON; 国家技术大学雅典分校; 雅典研究中心），Antigoni Tsiami（雅典研究中心），Panagiotis P. Filntisis（HERON; 雅典研究中心），Petros Maragos（HERON; 国家技术大学雅典分校; 雅典研究中心）

#

💡 **毒舌点评**

亮点：其核心想法——让模型学习同一段海豚叫声的两种不同“画像”（频谱图与能量图）之间的联系——非常巧妙，不仅有效利用了信号本身的物理特性，还意外地在完全不同的鸟类叫声识别任务上取得了优异效果，展现了生物声学中“调制模式”跨物种共享的有趣洞察。短板：实验验证的“跨域”跨度仅限于海豚与鸟类，且数据集规模偏小（预训练仅15类海豚），论文未提供代码开源计划或预训练模型，极大地限制了其作为通用生物声学预训练方法的即时可用性和影响力。

#

🔗 **开源详情**

-   代码：论文中未提及代码链接或开源计划。
-   模型权重：未提及是否公开预训练或微调后的模型权重。
-   数据集：论文使用了公开数据集（WMMSD, RFCx, BirdCLEF），但未在论文中说明具体获取方式或提供处理后的数据脚本。
-   Demo：未提供在线演示。
-   复现材料：提供了较详细的训练超参数（epoch， batch size， 学习率， 优化器）、模型架构选择（ResNet18等）、数据处理流程（重采样率， 窗长， 谱图大小）以及关键算法公式（Gabor滤波， TKEO， InfoNCE loss），为复现提供了必要信息。
-   引用的开源项目：论文引用了SimCLR、COLA等自监督学习方法作为对比基线，但未明确说明其代码依赖。

📌 **核心摘要**

1.  解决的问题：在低资源生物声学领域，跨物种、跨数据集的迁移学习面临挑战，因为不同物种的发声信号虽有共性（如频率调制），但数据分布差异大。传统自监督学习（如SimCLR）依赖数据增强，可能未充分利用信号本身的多种物理表示。
2.  方法核心：提出一种“表示多样性”的对比自监督学习框架。在预训练阶段，模型（ResNet18， MobileNetV2， ViT-B/16）学习区分同一段海豚叫声的频谱图和由Teager-Kaiser能量算子（TKEO）派生的能量图。这两种表示分别捕捉信号的功率谱密度和瞬时能量-调制特性。之后，将预训练好的编码器在鸟类叫声数据集上进行微调。
3.  与已有方法的新颖之处：不同于SimCLR对同一表示进行随机数据增强，也不同于跨模态学习（如音频-文本），本方法首次利用同一信号的不同物理/数学表示（频谱图 vs. 能量图）构建正样本对进行对比学习。这种跨表示对比迫使模型学习更本质的、跨表示不变的声学特征。
4.  主要实验结果：
    在RFCx和BirdCLEF两个鸟类叫声数据集上，所有模型架构（ResNet18， MobileNetV2， ViT）均显示，从监督学习到SimCLR，再到对比不同窗口频谱图，最后到对比“频谱图-能量图”，性能持续提升。最佳配置（对比频谱图与离散TKEO能量图）显著优于监督基线和SimCLR。
    | 模型 | RFCx (加权F1) | BirdCLEF (加权F1) |
    | :--- | :--- | :--- |
    | ResNet18 | 82.38 ± 1.51% (最佳) | 73.72 ± 0.40% (最佳) |
    | MobileNetV2 | 77.95 ± 1.12% | 67.40 ± 0.68% |
    | ViT-B/16 | 82.10 ± 1.31% | 68.12 ± 0.67% |
    表1：不同模型在最佳配置（对比频谱图与离散TKEO能量图）下的加权F1分数对比（数据来源于论文Table 1）
    论文图2展示了虎鲸和旋转海豚的能量图与频谱图对比，直观显示了能量图对调制结构的增强效果。
5.  实际意义：为低资源生物声学监测提供了一种有效的预训练策略。通过利用海豚叫声数据（可能相对易获取）预训练，能够提升鸟类（或其他物种）叫声分类的性能，有助于生态保护和生物多样性监测。
6.  主要局限性：预训练数据（海豚）和下游任务数据（鸟类）虽然都包含调制成分，但物种差异巨大，框架的泛化能力到更多类群（如昆虫、蛙类）未被验证。数据集规模较小（预训练15类，下游测试集每类50-250样本），在大规模实际场景中的鲁棒性未知。论文未提供代码和预训练模型。

#

---

### 11. [Domain-Invariant Representation Learning of Bird Sounds](/audio-paper-digest-blog/posts/2026-04-29-domain-invariant-representation-learning-of-bird)

✅ **6.5/10** | 前50% | #生物声学 | #对比学习 | #自监督学习 #领域适应

👥 **作者与机构**

- 第一作者：Ilyass Moummad（INRIA, LIRMM, Université de Montpellier, France）
- 通讯作者：未说明
- 作者列表：Ilyass Moummad（INRIA, LIRMM, Université de Montpellier, France）、Romain Serizel（Université de Lorraine, Loria, Nancy, France）、Emmanouil Benetos（C4DM, Queen Mary University of London, UK）、Nicolas Farrugia（IMT Atlantique, Lab-STICC, Brest, France）

💡 **毒舌点评**

亮点：ProtoCLR通过将对比学习的复杂度从O(N²)降至O(N×C)，提供了一个在计算上更优雅、对生物声学这类大规模数据更实用的监督对比学习方案，并在特定评估基准上验证了其有效性。  
短板：改进幅度有限，平均准确率提升不足3个百分点，且面对更强的领域特定基线（如Perch）时优势并不明显，应用场景受限于鸟类声音这一细分领域。

🔗 **开源详情**

- 代码：提供代码仓库链接：`https://github.com/ilyassmoummad/ProtoCLR`。
- 模型权重：未提及公开的预训练模型权重。
- 数据集：论文使用的训练集（Xeno-Canto）和测试集（BIRB子集）均为公开可用数据集，但论文中未提供直接下载链接或获取指引。
- Demo：未提供在线演示。
- 复现材料：提供了核心超参数、模型架构描述（CvT-13）、训练设置（300 epochs, batch size 256, AdamW）和数据增强方法，但未提供完整的训练配置文件、检查点或更详细的附录说明。
- 论文中引用的开源项目/模型：
    - 音频编码器：CvT-13 [29]
    - 预训练基准模型：BirdAVES [25] (biox-base, bioxn-large), BioLingual [27], Perch [13]
    - 数据增强方法：循环时间偏移 [30], SpecAugment [31], 频谱图混合 [32]
    - 评估方法：SimpleShot [24]
- 总结：论文在开源方面做得较好，提供了核心代码和可复现的实验设置，但未共享训练好的模型权重。

📌 **核心摘要**

1. 问题：在生物声学监测中，模型在公民科学平台的焦点录音上训练，但需要应用于被动监测的声景录音，这种域偏移导致性能显著下降。
2. 方法核心：提出ProtoCLR（原型对比学习），一种新的监督对比学习损失函数。它用每个类的原型（类内样本嵌入的均值）替代原始SupCon损失中的成对样本比较，从而降低计算复杂度并减少梯度方差。
3. 新颖之处：ProtoCLR是对SupCon的改进，通过类级原型进行对比，保留了域不变性学习的目标，同时将计算成本从批次内所有样本两两比较降低为样本与类原型的比较。
4. 主要实验结果：在BIRB基准衍生的Few-shot评估任务中，ProtoCLR在1-shot平均准确率（21.4%）和5-shot平均准确率（42.4%）上均优于SupCon（分别为20.5%和39.5%）和SimCLR（17.9%和31.3%），并略优于BioLingual（21.3%和39.6%），但仍低于最强基线Perch（24.9%和48.7%）。关键对比如下表所示：

| 模型 | 1-shot 平均准确率 | 5-shot 平均准确率 |
| :--- | :---: | :---: |
| Perch | 24.9% | 48.7% |
| CE | 24.2% | 45.3% |
| ProtoCLR | 21.4% | 42.4% |
| SupCon | 20.5% | 39.5% |
| SimCLR | 17.9% | 31.3% |
| BirdAVES-bioxn-large | 14.2% | 25.8% |

5. 实际意义：为从焦点录音预训练模型迁移到真实世界声景监测提供了一种更高效的特征学习方法，有助于生物多样性监测。
6. 主要局限性：方法假设每个样本属于单一类别，这与声景录音中常见的多标签重叠现实不符。此外，性能提升并非压倒性，且依赖特定的数据增强策略。

---

### 12. [Utilizing Information Theoretic Approach to Study Cochlear Neural Degeneration](/audio-paper-digest-blog/posts/2026-04-29-utilizing-information-theoretic-approach-to-study)

✅ **6.5/10** | 前50% | #生物声学 | #信息论 | #模型评估 #信号处理

👥 **作者与机构**

- 第一作者：Ahsan Jamal Cheema (Harvard University, Speech and Hearing Bioscience and Technology Program; Eaton-Peabody Laboratories, Massachusetts Eye and Ear)
- 通讯作者：未说明
- 作者列表：Ahsan Jamal Cheema (Harvard University, Speech and Hearing Bioscience and Technology Program; Eaton-Peabody Laboratories, Massachusetts Eye and Ear)、Sunil Puria (Harvard University, Speech and Hearing Bioscience and Technology Program; Eaton-Peabody Laboratories, Massachusetts Eye and Ear)

💡 **毒舌点评**

本文提出了一套新颖的基于信息论的框架来客观评估不同语音刺激对揭示“隐性听力损失”（耳蜗神经退化，CND）的有效性，其核心思想——利用互信息损失量化信息编码退化——在概念上清晰且具有理论价值。然而，该研究完全基于一个现成的听觉外周模型进行模拟，缺乏任何真实的人体行为实验或电生理数据的直接验证，使得结论停留在计算层面，其临床诊断意义的说服力大打折扣；此外，实验所用的语料库（50个CVC词）和听力损失模型都较为单一，限制了结论的普适性。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及（所用模型为已发表的学术模型，非本文产出）。
- 数据集：未提及开源。言语语料（NU6 CVC词表）是标准临床词表，但本文使用的具体合成版本（gTTS生成）未公开。
- Demo：未提及。
- 复现材料：论文提供了足够细节（模型引用、方法公式、参数描述）以进行理论复现，但未提供可直接运行的实验配置、脚本或检查点。
- 论文中引用的开源项目：明确引用了其使用的听觉外周模型（Bruce et al. 2018 [17], Zilany et al. 2014 [18]）以及Google Text-to-Speech API [20]。

📌 **核心摘要**

1. 要解决什么问题：耳蜗神经退化（CND）或称“隐性听力损失”是一种标准听力学检查无法发现的病症，它导致患者在复杂听觉环境下（如噪声中）言语理解困难。目前缺乏客观、定量的方法来评估哪种言语刺激最能敏感地揭示CND。
2. 方法核心是什么：提出一个基于信息论的框架，使用现象学听觉外周模型，计算内毛细胞（IHC）受体电位与听觉神经纤维（ANF）响应之间，以及声学输入与ANF响应之间的互信息（MI）。通过比较正常听力与不同程度CND模型下的MI损失（ΔAUC），来量化不同言语材料对CND的敏感性。
3. 与已有方法相比新在哪里：与以往通过ABR波I、EFR等电生理指标或行为测试（如噪声下言语识别）间接推断CND不同，本框架首次从信息传输的理论上界（MI）角度，系统性地、客观地量化和比较了多种“困难”言语条件（干净、压缩、混响、组合）对CND的揭示能力。
4. 主要实验结果如何：在90 dB SPL刺激下，与正常听力基线相比，40%时间压缩的言语在所有CND程度下均导致最大的互信息损失（ΔAUC最大，具体数值见图3，其中压缩言语的ΔAUC (MI: VIHC->AN) 在100% LS/MS损失下约为80 bits·log(Hz)）。混响条件下的信息损失反而较小或与干净语音相当。结果表明，快速、时间上密集的言语（如时间压缩语音）是揭示CND最敏感的探针。
5. 实际意义是什么：该研究为设计用于CND客观诊断的言语测试提供了理论依据和筛选标准，表明应优先选用时间压缩类的刺激。同时，它警告在诊断中使用混响语音可能会降低特异性，增加假阳性风险。
6. 主要局限性是什么：研究完全基于计算模拟，未进行人体实验验证；只使用了单一的听力损失模型和简单的CVC词汇语料库；未建模中枢听觉处理（如记忆、注意力）；互信息估计是通道独立的，未考虑跨通道的谱时调制依赖关系。

---

