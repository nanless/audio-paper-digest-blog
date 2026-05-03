---
title: "ICLR 2026 - 多模态模型 论文列表"
date: 2026-05-03
draft: false
tags: ["多模态模型"]
categories: [iclr-2026]
description: "共 5 篇 ICLR 2026 多模态模型 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 多模态模型

共 **5** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Human Behavior Atlas: Benchmarking Unified Psychological And](/audio-paper-digest-blog/posts/2026-05-03-human-behavior-atlas-benchmarking-unified) | 8.5分 | 前25% |
| 🥈 | [Learning multimodal dictionary decompositions with group-spa](/audio-paper-digest-blog/posts/2026-05-03-learning-multimodal-dictionary-decompositions) | 8.0分 | 前25% |
| 🥉 | [NExT-OMNI: Towards Any-to-Any Omnimodal Foundation Models wi](/audio-paper-digest-blog/posts/2026-05-03-next-omni-towards-any-to-any-omnimodal-foundation) | 8.0分 | 前25% |
| 4. | [MIAM: Modality Imbalance-Aware Masking for Multimodal Ecolog](/audio-paper-digest-blog/posts/2026-05-03-miam-modality-imbalance-aware-masking-for) | 7.5分 | 前25% |
| 5. | [TINY BUT MIGHTY: A SOFTWARE-HARDWARE CO- DESIGN APPROACH FOR](/audio-paper-digest-blog/posts/2026-05-03-tiny-but-mighty-a-software-hardware-co-design) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Human Behavior Atlas: Benchmarking Unified Psychological And Social Behavior Understanding](/audio-paper-digest-blog/posts/2026-05-03-human-behavior-atlas-benchmarking-unified)

🔥 **8.5/10** | 前25% | #多模态模型 | #预训练 | #强化学习 #音频问答

👥 **作者与机构**

- 第一作者：Keane Ong (MIT, National University of Singapore)、Wei Dai (MIT)（共同第一作者）
- 通讯作者：未明确说明（Paul Pu Liang作为资深作者，可能为通讯作者）
- 作者列表：Keane Ong（MIT, NUS）、Wei Dai（MIT）、Carol Li（MIT）、Dewei Feng（MIT）、Hengzhi Li（MIT, Imperial College London）、Jingyao Wu（MIT）、Jiaee Cheong（Harvard University）、Rui Mao（NTU）、Gianmarco Mengaldo（NUS）、Erik Cambria（NTU）、Paul Pu Liang（MIT）

💡 **毒舌点评**

这篇论文的核心亮点在于其系统性的整合与标准化工作，它将心理学和社会行为理解这个长期碎片化的研究领域，通过定义清晰的行为分类法和统一的数据格式，凝聚成了一个可训练单一基础模型的大型多模态基准，解决了领域内“各自为战”的核心痛点。然而，其短板在于单点技术创新的深度有限，无论是数据标准化、模型架构（在现有LLM上添加适配器）还是实验方法（SFT/RL），都更多是成熟的工程整合与应用，而非提出全新的理论或算法；此外，其定义的“行为理解”任务过于庞杂，导致模型更像是在多个独立任务上微调，而非真正习得统一的“行为认知”能力。

🔗 **开源详情**

- 代码：论文明确提供代码仓库链接：`https://github.com/MIT-MI/human_behavior_atlas`。
- 模型权重：论文明确提到将发布训练好的OMNISAPIENS-7B模型权重。
- 数据集：论文明确指出将发布整理好的HUMAN BEHAVIOR ATLAS基准数据集。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了极其充分的复现材料。包括：(1) 详细的超参数配置（学习率、批次大小、LoRA设置等）；(2) 每个数据集的确切训练/验证/测试样本数（Table 7）；(3) 评估指标的详细计算公式；(4) LLM评委使用的完整提示词模板；(5) 训练硬件信息（8x H200 GPU）。
- 论文中引用的开源项目：Qwen2.5-Omni (Xu et al., 2025a), MediaPipe (Lugaresi et al., 2019), OpenSMILE (Eyben et al., 2010), Whisper (Radford et al., 2023), GRPO/DeepSeekMath (Shao et al., 2024)。

📌 **核心摘要**

1.  要解决什么问题：现有针对人类心理和社会行为（如情感、认知、病理、社交过程）的理解系统通常局限于单任务、特定数据集，导致模型碎片化、难以扩展、跨任务迁移能力弱，无法构建通用的行为理解基础模型。
2.  方法核心是什么：本文构建了“Human Behavior Atlas”大规模统一基准，包含13个公开数据集、超过10万个多模态样本（文本、音频、视频）。其核心方法论包括：定义四维行为分类法、将所有样本标准化为统一的“prompt-target”格式、制定跨数据集的一致性评估指标。基于此，训练了三个名为“Omnisapiens-7B”的模型变体（SFT、BAM、RL）。
3.  与已有方法相比新在哪里：与之前碎片化的工作相比，新在三个方面：(1) 系统性的统一：首次将情感、认知、病理、社交四大行为维度下的多种任务整合到一个标准化基准中；(2) 灵活的模型架构：提出了一个轻量级的残差式“行为适配器模块（BAM）”，可选择性、非侵入性地融合传统行为描述符（如面部关键点、韵律特征）到端到端模型中；(3) 全面的迁移能力验证：系统评估了在统一基准上预训练对下游新数据集和新任务（如讽刺检测）的零样本和微调迁移效果。
4.  主要实验结果如何：实验表明，(1) 在统一基准上预训练的Omnisapiens-7B三个变体，在大多数行为任务（如情绪识别、抑郁检测）上持续优于现有的通用多模态大模型（如Qwen2.5-Omni, HumanOmniV2）。在Table 4的多任务结果中，Omnisapiens-7B SFT/BAM在8/10的任务上平均分最优；(2) 预训练带来了显著的迁移学习收益：在仅1个epoch的微调后，模型在未见过的数据集（如DAIC-WOZ抑郁检测）上比未预训练的基线高出29.4%（Table 5）；(3) BAM模块在特定依赖细微行为线索的任务（如非言语交流NVC、讽刺检测SAR）上带来最高33%的性能提升（Table 6）。
5.  实际意义是什么：该工作为构建统一、可扩展的心理与社会行为AI系统提供了重要的基础设施（基准和方法论）。它降低了领域内研究重复造轮子的成本，证明了多任务预训练对提升模型通用性和迁移能力的有效性，并为未来在医疗健康（如抑郁症筛查）、人机交互、社会计算等场景下开发更鲁棒、更全面的行为感知模型奠定了基础。
6.  主要局限性是什么：(1) 任务过于庞杂：试图用一个模型覆盖过多差异巨大的任务，可能导致对每个子任务的建模深度不足；(2) 数据集偏差：所用数据集主要来自特定文化、语言和媒体类型（如美剧），可能影响模型的跨文化泛化能力；(3) 评估标准争议：自由文本任务依赖LLM作为评委，其可靠性受评委模型自身偏见影响；(4) 计算与工程复杂度：训练和维护如此大规模的多模态统一模型需要巨大资源。

---

### 🥈 [Learning multimodal dictionary decompositions with group-sparse autoencoders](/audio-paper-digest-blog/posts/2026-05-03-learning-multimodal-dictionary-decompositions)

🔥 **8.0/10** | 前25% | #多模态模型 | #自编码器 | #零样本 #音乐理解

👥 **作者与机构**

- 第一作者：Chiraag Kaushik（佐治亚理工学院电气与计算机工程学院）
- 通讯作者：Davis Barch（Dolby Laboratories）， Andrea Fanelli（Dolby Laboratories）
- 作者列表：Chiraag Kaushik（佐治亚理工学院电气与计算机工程学院）、Davis Barch（Dolby Laboratories）、Andrea Fanelli（Dolby Laboratories）

💡 **毒舌点评**

本文对音频-文本多模态嵌入（CLAP）的SAE分析是填补领域空白的扎实工作，且所提出的分组稀疏方法在多个跨模态任务上带来了显著且一致的提升。但论文在“概念”的具体语义解释和“多模态对齐”为何导致性能提升的机理剖析上，仍停留在相关性描述，未深入到模型内部动力学层面。

🔗 **开源详情**

- 代码：论文中未提及提供本研究提出的组稀疏自编码器（GSAE/MGSAE）的实现代码链接。但论文引用了用于基线SAE训练的开源代码库（Marks et al., 2024）。
- 模型权重：未提及公开本研究训练的GSAE/MGSAE模型权重。
- 数据集：使用了公开数据集（CC3M, JamendoMaxCaps, MusicBench, MS COCO等），未提供新数据集。
- Demo：未提供在线演示。
- 复现材料：在附录A.2中提供了详细的实验设置，包括超参数选择过程（λ, p, K, 扩展因子）、训练步数、数据集描述、以及用于概念命名的词汇表来源。这为复现提供了充分信息，但缺少最终训练脚本和配置文件。
- 引用的开源项目：引用了字典学习代码库（Marks et al., 2024），以及SAE变体的实现（BatchTopK SAE， Matryoshka SAE）。
- 论文中未提及开源计划：对于本文核心贡献的代码和模型，未明确提及是否开源。

📌 **核心摘要**

1.  问题：标准稀疏自编码器（SAE）应用于CLIP等多模态嵌入空间时，会学习到“分裂字典”，即绝大多数特征（神经元）仅对单一模态激活，破坏了跨模态语义对齐，限制了其在跨模态任务中的可解释性与控制能力。
2.  方法核心：提出分组稀疏自编码器（GSAE/MGSAE），核心是在训练损失中加入分组稀疏（L2,1范数）正则项，强制成对的跨模态样本（如图像-文本对）的稀疏编码具有重叠的支撑集。同时，引入跨模态随机掩码技术，进一步促使编码器利用共享的特征维度，并减少死神经元。
3.  创新点：
    - 首次从理论上证明（定理1）：在对齐的嵌入空间上，存在一个分裂字典就必然存在一个模态对齐更好的非分裂字典。
    - 提出了新的评估指标多模态单义性分数（MMS），可同时量化单个神经元的语义性和跨模态性。
    - 将组稀疏学习与掩码技术结合应用于多模态嵌入分解，并验证了其有效性。
4.  主要实验结果：
    - 在CLIP（图像-文本）和CLAP（音频-文本） 嵌入上，MGSAE相比标准SAE，多模态激活神经元数量显著增加，死神经元大幅减少（图3）。
    - MMS分数表明MGSAE学到了更多高语义性、跨模态的概念特征（图4）。
    - 零样本跨模态任务性能大幅提升：在CIFAR-10/100、ImageNet分类上，MGSAE比标准SAE提升最高达18.5个百分点；在音乐/文本任务上，MGSAE性能接近甚至超越原始CLAP嵌入（表1、表2）。
    - 案例研究显示，MGSAE能更准确地识别线性分类器依赖的“金发”概念，并发现潜在的性别偏见（图5）；在CLAP上可实现有效的文本到音乐检索引导（图7）。
5.  实际意义：为理解和控制多模态表示空间提供了更强大的工具，使得通过操作稀疏编码来实现跨模态生成、检索和公平性分析成为可能。
6.  主要局限性：所提出的方法严重依赖成对的多模态数据；对于未配对数据如何利用（尽管文末提及）未做深入研究；对“概念”的自动命名（图5）仍依赖外部模型（CLIP），存在噪声。

---

### 🥉 [NExT-OMNI: Towards Any-to-Any Omnimodal Foundation Models with Discrete Flow Matching](/audio-paper-digest-blog/posts/2026-05-03-next-omni-towards-any-to-any-omnimodal-foundation)

🔥 **8.0/10** | 前25% | #多模态模型 | #流匹配 | #音频生成 #跨模态

👥 **作者与机构**

- 第一作者：Run Luo（中国科学院深圳先进技术研究院，中国科学院大学；新加坡国立大学）
- 通讯作者：Xiaobo Xia（新加坡国立大学，中国科学技术大学）、Min Yang（中国科学院深圳先进技术研究院，中国科学院大学，深圳大学先进技术研究院）
- 作者列表：Run Luo（中国科学院深圳先进技术研究院，中国科学院大学，新加坡国立大学）、Xiaobo Xia（新加坡国立大学，中国科学技术大学）、Lu Wang（Rtizz-AI）、Longze Chen（中国科学院深圳先进技术研究院，中国科学院大学）、Renke Shan（Rtizz-AI）、Jing Luo（中国科学院深圳先进技术研究院，中国科学院大学）、Min Yang（中国科学院深圳先进技术研究院，中国科学院大学，深圳大学先进技术研究院）、Tat-Seng Chua（新加坡国立大学）

#

💡 **毒舌点评**

亮点在于其架构的“极简主义”与“全能性”：抛弃了常见的混合或解耦架构，用一个基于离散流匹配的单一骨干网络统合理解、生成与检索，这在理念上很优雅且实验数据支撑了其有效性。短板则在于，尽管实验全面，但论文对模型在“理解”与“生成”任务间可能存在的根本性权衡（trade-off）探讨不够深入，消融实验（Table 5）中统一表征在理解任务上初期下滑的现象暗示了更深层的冲突，未来大规模模型是否真的能完美调和这一点仍需观察。

#

📌 **核心摘要**

1.  要解决的问题：现有统一多模态基础模型主要基于自回归（AR）架构，其顺序生成特性导致在处理需要全局理解的“理解”任务和需要并行去噪的“生成”任务时存在内在冲突。混合或解耦策略增加了模型复杂度，且难以支持需要深度融合的跨模态检索等任务。
2.  方法核心：提出NExT-OMNI，首个完全基于离散流匹配（DFM）的开源全模态基础模型。它通过度量诱导的概率路径和动力学最优速度，实现从完全损坏的序列到目标序列的并行迭代去噪，从而天然支持any-to-any的跨模态生成与理解。架构采用统一表征，通过单编码器同时服务理解和生成，并利用深度双向注意力实现多模态特征的深度融合。
3.  与已有方法相比新在哪里：
    - 范式革新：放弃了AR及其混合变体，全面拥抱DFM，实现了从“下一token预测”到“并行去噪”的范式转变。
    - 架构统一：不同于需要多个编码器或MoE/MoT解耦机制的方法，使用单一编码器产生统一表征，结构更简洁，更利于跨模态检索。
    - 训练创新：引入了重建增强的统一表征（在DFM训练中重用编码器的重建损失）和动态长度生成策略，分别用于保留细粒度信息和提升文本生成性能。
4.  主要实验结果：
    - 全模态理解：在OmniBench、WorldSense、AV-Odyssey三个基准上平均得分39.7，超越之前最佳的OpenOmni（36.5）。
    - 语音交互：在Spoken QA基准上，语音到语音（S→S）平均分47.4，与Stream-Omni（46.3）、OpenOmni（48.1）性能相当或更优。
    - 视觉交互：在OpenING基准上，GPT评估平均分55.0，显著优于VILA-U（48.4）、SEED-X（50.2）等AR基线。
    - 多模态检索：在InfoSeek、OVEN等4个基准上平均准确率32.9，优于包括MMaDA（31.8）在内的所有对比模型。
    - 消融实验：证明了DFM范式、统一表征、动态生成策略和重建损失的引入，对提升生成、检索及综合性能有明确贡献。
5.  实际意义：为构建下一代AGI核心组件——统一全模态基础模型——提供了一个有潜力且高效的范式。其架构简洁、推理快速（结合并行解码和缓存，比AR快1.2x）、能力强，有望在需要跨模态交互、创作与检索的复杂应用场景中发挥重要作用。
6.  主要局限性：目前仅在7B参数规模和2T token上进行训练，其规模效应和潜力未完全释放。论文承认，构建统一模型可能在某些单一任务上带来性能权衡，未来需要更大规模实验验证其通用能力的上限。

#

---

### 4. [MIAM: Modality Imbalance-Aware Masking for Multimodal Ecological Applications](/audio-paper-digest-blog/posts/2026-05-03-miam-modality-imbalance-aware-masking-for)

✅ **7.5/10** | 前25% | #多模态模型 | #自监督学习 | #数据增强 #鲁棒性

👥 **作者与机构**

- 第一作者：Robin Zbinden（洛桑联邦理工学院，EPFL）
- 通讯作者：Robin Zbinden（robin.zbinden@epfl.ch）
- 作者列表：Robin Zbinden（洛桑联邦理工学院，EPFL）、Wesley Monteith-Finas（洛桑联邦理工学院，EPFL，共同第一作者）、Gencer Sumbul（洛桑联邦理工学院，EPFL）、Nina van Tiel（洛桑联邦理工学院，EPFL）、Chiara Vanalli（洛桑联邦理工学院，EPFL）、Devis Tuia（洛桑联邦理工学院，EPFL）

💡 **毒舌点评**

本文精准地抓住了多模态生态建模中“模态不平衡”这个痛点，并用一套优雅的数学框架（混合Beta乘积分布）和动态调整机制来解决，理论自洽且实验扎实；但将如此通用的方法论首先应用于相对垂直的生态领域，可能会让更广泛的机器学习社区关注度打折扣，其在通用视觉-语言任务上的潜力有待进一步验证。

🔗 **开源详情**

- 代码：提供GitHub仓库链接 `https://github.com/zbirobin/MIAM`。
- 模型权重：提供HuggingFace链接 `https://huggingface.co/zbirobin/MIAM`，已公开。
- 数据集：GeoPlant和TaxaBench均为公开数据集，论文提供了获取指引和划分代码（图7，图8）。
- Demo：论文中未提及在线演示。
- 复现材料：提供了完整的训练细节、配置、超参数（附录A.1）、数据划分代码，以及敏感性分析结果（图10，图11），复现支持非常充分。
- 论文中引用的开源项目：使用了verde库进行空间块交叉验证，采用了AdamW优化器和schedule-free训练策略。

📌 **核心摘要**

1. 解决问题：多模态生态应用（如物种分布建模）常面临数据在跨模态和模态内均不完整的问题，且不同模态间存在模态不平衡（主导模态阻碍其他模态优化）。现有掩码策略（如均匀、狄利克雷分布）无法充分探索输入组合空间，且静态分布无法适应训练动态，未能有效解决此挑战。
2. 方法核心：提出MIAM（模态失衡感知掩码），一种动态掩码策略。它通过混合Beta乘积分布定义掩码概率，在超立方体上满足三个原则：(i) 全覆盖（任何输入组合概率非零），(ii) 角优先（频繁采样接近全保留或全掩码的组合，尤其强调全空和全满两个角），(iii) 失衡感知（根据各模态的相对性能和学习速度动态调整其被掩码的概率）。
3. 创新点：与以往静态或仅调整模态级概率（如OPM）的方法相比，MIAM首次将掩码分布正式化为概率分布，并引入了基于性能得分（sm）和性能变化率（dm）的动态、细粒度（token级）调整机制，能更有效地平衡主导与弱势模态的学习。
4. 主要实验结果：在GeoPlant（物种分布预测）和TaxaBench（物种分类）两个多模态生态数据集上，MIAM在所有输入子集的平均性能上均优于现有掩码策略（如均匀、Dirichlet、Modality dropout、OPM）。具体见下表：

| 方法 | GeoPlant 平均 AUC | TaxaBench 平均 Top-1 Accuracy |
| :--- | :---: | :---: |
| Constant | 80.4 | - |
| Uniform | 83.2 | 37.7 |
| Dirichlet | 80.6 | 37.4 |
| Modality dropout | 81.5 | 35.9 |
| OPM | 83.8 | 31.2 |
| MIAM (ours) | 86.1 | 38.7 |
| Oracle (上限) | 87.2 | 40.0 |

MIAM显著缩小了与Oracle（每种输入子集单独训练的模型）的差距，尤其在原本受模态不平衡影响严重的单模态（如卫星影像）评估中提升显著。
5. 实际意义：MIAM不仅提升了模型在不完整数据上的鲁棒性和预测性能，其动态掩码机制还支持细粒度贡献分析（如图5所示，揭示了NDVI相关波段和历史极端气候事件的关键作用），为生态决策提供了可解释性工具。
6. 主要局限性：方法引入了额外的超参数（λ, κ）和每个epoch计算模态性能的计算开销；动态调整依赖于验证集性能，其有效性可能对验证数据质量敏感；虽然提出了自监督学习的初步尝试，但核心实验均基于有标签数据，在无监督或跨领域通用性上未充分验证。

---

### 5. [TINY BUT MIGHTY: A SOFTWARE-HARDWARE CO- DESIGN APPROACH FOR EFFICIENT MULTIMODAL IN- FERENCE ON BATTERY-POWERED SMALL DEVICES](/audio-paper-digest-blog/posts/2026-05-03-tiny-but-mighty-a-software-hardware-co-design)

✅ **7.5/10** | 前25% | #多模态模型 | #系统优化 | #边缘计算 #模型压缩

👥 **作者与机构**

- 第一作者：Yilong Li（University of Wisconsin – Madison）
- 通讯作者：未说明
- 作者列表：Yilong Li¹, Shuai Zhang², Yijing Zeng¹, Chengpo Yan¹, Hao Zhang¹, Xinmiao Xiong¹, Jingyu Liu¹, Pan Hu³, Suman Banerjee¹ （¹University of Wisconsin – Madison, ²Amazon Web Services AI, ³Uber）

💡 **毒舌点评**

亮点在于提出并验证了一个从模型分解、跨加速器调度到定制硬件的完整端到端软硬件协同设计框架，让一个不到12美元的低功耗SoC跑起了多模态大模型，这种“螺丝壳里做道场”的系统工程能力值得肯定。短板则是该框架深度绑定了特定的开源芯片（RK3566）和工具链，其“不绑定特定SoC”的宣称在论文中更多是愿景而非扎实的跨平台实验验证，限制了工作的即时通用影响力。

🔗 **开源详情**

- 代码：论文中未提及提供NANOMIND框架的开源代码仓库链接。它明确引用了作为基础或对比的开源项目：llama.cpp, whisper.cpp, Piper, MLC-LLM, PowerInfer-2, NanoVLM。
- 模型权重：未提及提供经其框架优化或训练的模型权重。使用的模型（如LLaVA-OneVision， Qwen2-VL）来自Hugging Face等平台。
- 数据集：未提供新数据集。评估使用了公开基准数据集：InfoVQA, DocVQA, MMBench, MME。
- Demo：论文展示了在定制硬件原型（PCB， 头带设备）上的运行效果（Fig. 11, 12），但未提及提供在线演示或远程访问。
- 复现材料：论文详细描述了硬件设计（SoC选型， 内存并联， PMU）、软件架构、TABM机制、功耗管理策略和内核优化思路，为复现提供了较高层次的蓝图，但缺乏具体的代码、配置文件和硬件制造文件。
- 论文中引用的开源项目：llama.cpp, whisper.cpp, Piper, MLC-LLM, RKNN Toolkit2, Hugging Face模型库中的多个模型。

📌 **核心摘要**

1.  解决的问题：如何在电池供电的、资源受限的小型边缘设备上，高效、低功耗地运行大型多模态模型（LMMs），以解决云端部署的隐私和延迟问题，同时克服现有软件/算法优化（如量化）无法充分利用SoC异构计算单元（NPU、GPU）的缺陷。
2.  方法核心：提出了NANOMIND框架，通过软件-硬件协同设计。核心是将LMM分解为独立的“模块砖块”（视觉编码器、语言解码器等），并基于统一内存架构，将每个模块动态调度到最适合的加速器（如NPU跑视觉编码，GPU跑语言解码）上执行。
3.  与已有方法相比新在哪里：超越了单纯的模型压缩或单一加速器部署，转向系统级的模块化分解与跨加速器动态调度。它设计了一整套协同机制：定制硬件（并行内存、专用PMU）、零拷贝的Token感知缓冲区管理器（TABM）实现高效嵌入传递、针对硬件优化的计算内核（如GPU上的融合反量化-GEMM内核），以及基于电池状态的动态执行策略。
4.  主要实验结果：在基于RK3566的定制设备上，运行LlaVA-OneVision-qwen2-0.5B模型：
    *   能耗：相比基线（llama.cpp）降低42.3%。
    *   内存：GPU内存使用减少11.2%。
    *   续航：在低功耗按需推理模式下，使用2000mAh电池可连续运行约20.8小时。
    *   性能：在Qwen2-VL-2B模型上，端到端延迟比使用RK3588的Orange Pi 5 Ultra降低36.2%，吞吐量与Jetson Nano（使用NanoVLM）相当（约35.7 tok/s）。
5.  实际意义：证明了在严格成本与功耗约束的边缘硬件上，通过深度的软硬件协同设计，实现具备视觉、语音交互能力的独立智能助手的可行性，为隐私优先的离线多模态AI应用铺平了道路。
6.  主要局限性：框架在当前形态下与特定硬件（Rockchip RK3566/RK3588）及工具链（RKNN）耦合较深；论文主要验证了0.5B-2B级别的小模型，对于更大规模模型的适用性未探索；跨平台（如Qualcomm、Apple Silicon）的兼容性停留在初步讨论阶段。

---

