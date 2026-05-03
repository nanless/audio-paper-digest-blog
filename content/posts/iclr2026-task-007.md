---
title: "ICLR 2026 - 多模态模型 论文列表"
date: 2026-05-04
draft: false
tags: ["多模态模型"]
categories: [iclr-2026]
description: "共 6 篇 ICLR 2026 多模态模型 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 多模态模型

共 **6** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [NExT-OMNI: Towards Any-to-Any Omnimodal Foundation Models wi](/audio-paper-digest-blog/posts/2026-05-04-next-omni-towards-any-to-any-omnimodal-foundation) | 8.5分 | 前25% |
| 🥈 | [FlowBind: Efficient Any-to-Any Generation with Bidirectional](/audio-paper-digest-blog/posts/2026-05-04-flowbind-efficient-any-to-any-generation-with) | 8.0分 | 前25% |
| 🥉 | [Seeing, Listening, Remembering, and Reasoning: A Multimodal ](/audio-paper-digest-blog/posts/2026-05-04-seeing-listening-remembering-and-reasoning-a) | 7.8分 | 前25% |
| 4. | [Better Together: Leveraging Unpaired Multimodal Data for Str](/audio-paper-digest-blog/posts/2026-05-04-better-together-leveraging-unpaired-multimodal) | 7.5分 | 前25% |
| 5. | [Learning multimodal dictionary decompositions with group-spa](/audio-paper-digest-blog/posts/2026-05-04-learning-multimodal-dictionary-decompositions) | 7.5分 | 前25% |
| 6. | [AVERE: Improving Audiovisual Emotion Reasoning with Preferen](/audio-paper-digest-blog/posts/2026-05-04-avere-improving-audiovisual-emotion-reasoning) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [NExT-OMNI: Towards Any-to-Any Omnimodal Foundation Models with Discrete Flow Matching](/audio-paper-digest-blog/posts/2026-05-04-next-omni-towards-any-to-any-omnimodal-foundation)

🔥 **8.5/10** | 前25% | #多模态模型 | #流匹配 | #预训练 #端到端

👥 **作者与机构**

- 第一作者：Run Luo（1. 深圳先进技术研究院，中国科学院；2. 中国科学院大学）
- 通讯作者：Xiaobo Xia（3. 新加坡国立大学；4. 中国科学技术大学），Min Yang（1. 深圳先进技术研究院，中国科学院；6. 深圳大学先进技术研究院）
- 作者列表：Run Luo（1，2），Xiaobo Xia（3，4），Lu Wang（5. Rtizz-AI），Longze Chen（1，2），Renke Shan（5），Jing Luo（1，2），Min Yang（1，2，6），Tat-Seng Chua（3）

💡 **毒舌点评**

论文亮点在于用一套“离散流匹配”架构啃下了全能模态统一建模这块硬骨头，实测在多项任务上超越了AR家族和一些复杂的混合架构，证明了“大道至简”的可能性。短板则在于其7B的“小身板”可能限制了潜力的完全释放，且其宣称的“更快推理”很大程度上依赖于一个看似通用实则需针对性优化的缓存策略，在更复杂的实际场景中效果有待验证。

🔗 **开源详情**

- 代码：论文中明确提供了代码仓库链接：`https://github.com/ritzz-ai/Next-OMNI`。
- 模型权重：论文中提及“The code is available at...”，并指出发布模型检查点（checkpoints），表明模型权重将开源。但当前未提供直接的下载链接，需访问其GitHub获取。
- 数据集：论文中详细描述了训练数据的来源和构建过程（详见附录E和表8），但未提及将发布完整的训练数据集。使用了大量公开数据集，具体名称在文中列出。
- Demo：论文中未提及提供在线演示（Demo）。
- 复现材料：提供了极其充分的复现材料。包括：详细的三阶段训练流程（PT, CPT, SFT）、数据配方（表8）、模型配置和训练超参数（表9）、模型架构描述（附录D）、以及补充实验结果（附录G, H, I）。
- 论文中引用的开源项目/模型：CLIP-ViT-Large, Whisper-Turbo, Qwen2.5系列模型（作为初始化骨干和辅助工具），LAION, DataComp, LibriSpeech等数据集，UniTok, WavTokenizer等作为对比基准。

📌 **核心摘要**

1.  要解决的问题：现有全能模态模型大多基于自回归架构，难以平衡理解与生成任务，且常采用冗余的解耦设计，限制了跨模态检索等更广泛的应用场景。
2.  方法核心：提出NExT-OMNI，一个完全基于离散流匹配的全能模态基础模型。通过统一表示建模和轻量级模态头，实现了一个简洁的统一架构。关键技术创新包括：1) 使用度量诱导概率路径和运动最优速度的离散流匹配建模；2) 重建增强的统一表示，通过中间特征融合提升跨模态检索；3) 动态长度生成策略和自适应缓存加速推理。
3.  与已有方法相比新在哪里：首次将离散流匹配完全应用于全能模态统一建模，避免了AR架构的固有冲突。相比AR或混合架构，它通过并行去噪和更丰富的双向信息融合，在架构上更统一、更简洁，同时原生支持跨模态检索。
4.  主要实验结果：在多个基准测试上取得最优或可比性能。例如，在全能模态理解（OmniBench, WorldSense, AV-Odyssey）上平均分达39.7，比次优的OpenOmni高3.2分（见表1）；在多轮语音交互（Spoken QA）上平均准确率62.0，领先Stream-Omni（表2）；在多轮视觉交互（OpenING）上平均分55.0，大幅领先VILA-U（表3）；在多模态检索（InfoSeek, OVEN等）上平均Top5准确率32.9，超越所有对比模型（表4）。消融实验表明，引入动态生成策略和重建损失项显著提升了各项性能（表5）。
5.  实际意义：为构建更通用、统一的下一代多模态AI提供了新的范式，证明了离散流匹配在统一建模上的巨大潜力，能以更简洁的架构实现理解、生成和检索的全面优异性能。
6.  主要局限性：当前模型仅在7B参数规模和2T token上训练，其更大规模的潜力未被验证。动态生成策略和缓存加速的具体效果和通用性有待在更多场景下考察。

---

### 🥈 [FlowBind: Efficient Any-to-Any Generation with Bidirectional Flows](/audio-paper-digest-blog/posts/2026-05-04-flowbind-efficient-any-to-any-generation-with)

🔥 **8.0/10** | 前25% | #多模态模型 | #流匹配 | #音频生成 #图像生成

👥 **作者与机构**

- 第一作者：Yeonwoo Cha（KAIST）（论文中与Semin Kim同为第一作者）
- 通讯作者：未明确说明（通讯作者邮箱通常为机构邮箱，但论文未指定）
- 作者列表：Yeonwoo Cha（KAIST）、Semin Kim（KAIST）、Jinhyeon Kwon（KAIST）、Seunghoon Hong（KAIST）

💡 **毒舌点评**

这篇论文用一个极其简洁优美的统一框架（共享潜空间 + 可逆流）巧妙解决了多模态生成中数据必须全配对或依赖文本锚点的顽疾，效率提升惊人（参数少6倍，训练快10倍）。然而，其“万能”的宣称主要在三个模态（文本、图像、音频）上得到验证，对于更复杂或动态的模态（如视频）其扩展能力仍需打个问号，且当前开源情况尚不明确。

📌 **核心摘要**

本文针对现有任意到任意多模态生成方法（如CoDi， OmniFlow）存在训练复杂、依赖全配对或文本锚定数据、计算开销大等问题，提出了一个名为FlowBind的高效统一框架。其核心创新在于引入一个可学习的共享潜空间作为跨模态信息的“锚点”，并为每个模态配备一个独立的可逆流网络，将其数据分布与共享潜空间连接起来。所有组件（共享潜空间编码器和各模态流网络）在单一的流匹配目标下联合训练，自然支持任意子集的模态数据进行部分配对训练。推理时，仅通过求解各模态的流ODE即可实现任意模态间的直接转换。

与CoDi和OmniFlow相比，FlowBind的主要新意在于：
1.  架构简化：用共享潜空间替代了文本中心锚或复杂联合速度场，实现了模态间的解耦与统一。
2.  训练统一：采用单阶段联合优化，��免了多阶段训练的复杂性。
3.  效率大幅提升：通过操作紧凑的语义表征（非高维像素/波形），模型参数量（568M）仅为OmniFlow（3.2B）的1/6，训练时间（48 GPU-hr）仅为OmniFlow（480hr）的1/10，且使用数据量不到CoDi的0.2%。

主要实验结果（关键数据见表2、表3）显示，在文本、图像、音频的六种一对一生成任务中，FlowBind在多数质量指标（FID， FAD， CIDEr）和对齐指标（CLIP， CLAP， AIS）上取得最佳或相近成绩。特别是在图像-音频生成任务上表现突出（如图像生成AIS达26.60， 音频生成AIS达78.17）。在更复杂的一对多、多对一生成任务中，FlowBind也展现出优越的跨模态条件融合能力。其实际意义在于提供了一个数据高效、计算友好、易于训练的多模态生成基础框架。主要局限性是当前实验仅验证了文本、图像、音频三种模态，对于更多模态或视频等时序性更强的模态，其效果有待进一步探索。

---

### 🥉 [Seeing, Listening, Remembering, and Reasoning: A Multimodal Agent with Long-Term Memory](/audio-paper-digest-blog/posts/2026-05-04-seeing-listening-remembering-and-reasoning-a)

✅ **7.8/10** | 前25% | #多模态模型 | #多模态模型 | #音频问答 #强化学习

👥 **作者与机构**

- 第一作者：Lin Long (浙江大学)
- 通讯作者：Yuan Lin (字节跳动 Seed)
- 作者列表：Lin Long (浙江大学)、Yichen He (字节跳动 Seed)、Wentao Ye (浙江大学)、Yiyuan Pan (卡内基梅隆大学机器人研究所)、Yuan Lin (字节跳动 Seed)、Hang Li (字节跳动 Seed)、Junbo Zhao (浙江大学)、Wei Li (字节跳动 Seed)

💡 **毒舌点评**

这篇论文的亮点在于提出了一套从记忆构建、管理到推理检索的完整智能体框架，并配套发布了高质量的评测基准M3-Bench，为“类人记忆”这一方向树立了一个扎实的工程化标杆。但其短板同样明显：所谓的“长期记忆”核心能力仍严重依赖于闭源前沿模型（Gemini，GPT-4o）来合成训练数据，且在控制阶段使用了参数量较大的开源模型（32B），使得整个框架的“自主性”打了折扣，更像一个精心设计的、用大模型模拟记忆的管道系统。

🔗 **开源详情**

- 代码：论文承诺开源，代码仓库链接为：https://github.com/ByteDance-Seed/m3-agent。
- 模型权重：论文承诺将发布记忆化模型（memory-7b-sft）和控制模型（control-32b-rl）的检查点。
- 数据集：论文承诺将完整发布M3-Bench基准，包含所有视频和问答标注。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详尽的训练细节、超参数、附录中的数据合成流程、提示模板等，复现材料非常充分。
- 论文中引用的开源项目：InsightFace（用于人脸识别）、ERes2NetV2（用于说话人嵌入）、Qwen2.5-Omni、Qwen3、GPT-4o、Gemini-1.5-Pro（用于数据合成和评估）。

📌 **核心摘要**

1.  要解决的问题：现有长视频理解方法多为处理有限长度的离线视频，无法像人类一样持续感知、记忆并从无限长的在线视频流中构建世界知识，也缺乏评估智能体基于长期记忆进行推理的能力的基准。
2.  方法核心：提出了M3-Agent，一个具备长期记忆的多模态智能体框架。其核心包括：a) 记忆化过程：以类似人脑的“情景记忆”（具体事件）和“语义记忆”（抽象知识）方式，增量构建并更新以实体为中心的多模态记忆图谱。b) 控制过程：采用强化学习训练，使智能体能基于当前指令，通过多轮推理自主检索记忆并回答问题。
3.  与已有方法相比新在哪里：a) 记忆结构：提出了以实体（人、物）为中心、融合多模态信息（人脸、语音、文本）的长期记忆图谱，确保跨时间、跨模态的一致性。b) 推理范式：从单次检索增强生成（RAG）升级为基于强化学习的、可多轮交互的检索与推理过程。c) 评测基准：创建了首个专注于评估记忆有效性和基于记忆推理能力的长视频问答数据集M3-Bench。
4.  主要实验结果：在M3-Bench-robot， M3-Bench-web和VideoMME-long三个基准上，M3-Agent均取得了最佳性能。以最强基线Gemini-GPT4o-Hybrid为例，M3-Agent在其上的准确率分别高出6.7%， 7.7%， 和5.3%。消融实验证明，语义记忆、实体ID一致性处理以及强化学习控制过程对性能至关重要。
5.  实际意义：该工作为开发具备长期交互和记忆能力的具身智能体（如家庭服务机器人）提供了重要的框架设计思路和评测工具，推动了AI向更接近人类的“持续学习与记忆”范式迈进。
6.  主要局限性：a) 框架高度依赖外部工具（人脸识别、说话人分离）和闭源大模型（用于合成训练数据），其独立性和鲁棒性有待验证。b) 记忆图谱的构建和检索效率在面对极长时间流或复杂场景时可能成为瓶颈。c) 当前评估场景仍相对结构化，与现实世界复杂、开放的交互环境存在差距。

---

### 4. [Better Together: Leveraging Unpaired Multimodal Data for Stronger Unimodal Models](/audio-paper-digest-blog/posts/2026-05-04-better-together-leveraging-unpaired-multimodal)

✅ **7.5/10** | 前25% | #多模态模型 | #迁移学习 | #自监督学习 #音频分类

👥 **作者与机构**

- 第一作者：Sharut Gupta (MIT CSAIL)
- 通讯作者：未明确说明（所有作者邮箱均为机构邮箱）
- 作者列表：
    - Sharut Gupta (MIT CSAIL)
    - Shobhita Sundaram (MIT CSAIL)
    - Chenyu Wang (MIT CSAIL)
    - Stefanie Jegelka (TU Munich, MIT CSAIL)
    - Phillip Isola (MIT CSAIL)

💡 **毒舌点评**

本文漂亮地证明了“他山之石，可以攻玉”在多模态学习中的有效性，理论分析严谨，实验设计全面，为解决数据配对瓶颈提供了优美的新视角。然而，它回避了权重共享在大规模、非线性模型中可能引发的优化冲突与模态坍缩问题，更像是一次理想的“存在性证明”，其工程鲁棒性有待更严峻的现实场景检验。

🔗 **开源详情**

- 代码：论文提供了项目主页链接 `https://unpaired-multimodal.github.io/`，并声明代码将在此发布（论文ID提及“本地PDF”，暗示代码可能已开源或即将开源）。
- 模型权重：未提及公开预训练权重。
- 数据集：使用公开数据集（MultiBench, ImageNet, Oxford Pets等），论文未创建新数据集。
- Demo：未提及在线演示。
- 复现材料：附录B和E提供了非常详尽的实验细节，包括超参数搜索范围、数据集划分、训练脚本伪代码、硬件配置等，复现信息充分。
- 论文中引用的开源项目：CLIP, DINOv2, OpenLLaMA, AudioCLIP等预训练模型。

📌 **核心摘要**

1.  问题：传统多模态学习严重依赖成对数据（如图片-文本对），而高质量配对数据收集成本高昂，限制了模型规模和应用范围。
2.  方法核心：提出UML（未配对多模态学习器），一个模态无关的训练范式。单一模型交替处理来自不同模态（如图像和文本）的输入并共享所有参数（权重共享），无需显式对齐或配对。
3.  新意：与依赖配对数据或推断对齐关系的方法不同，UML直接在未配对数据上通过权重共享来累积梯度，隐式地学习跨模态结构。理论上，在线性假设下证明了未配对辅助数据能严格增加共享参数的Fisher信息，从而提升目标模态的表示质量。
4.  主要实验结果：
    - 在MultiBench（情感、幽默检测等）和多个标准视觉分类基准上，UML在自监督和监督设置下均稳定提升未配对图像表示的下游性能。例如，在Stanford Cars全微调设置下，准确率从79.45%提升至86.39%（见下表）。
    - 在few-shot设置下收益尤为明显（如1-shot平均准确率从45.52%提升至51.36%）。
    - 扩展至音频-视觉-文本任务，未配对的图像和文本数据能提升音频分类性能，且三种模态互补。
    - 量化了模态间的“汇率”，例如使用CLIP编码器时，1张图像约等于228个单词的训练价值。

| 数据集 | 设置 | 未配对基线 (Unimodal) | UML (Ours) |
| :--- | :--- | :--- | :--- |
| Stanford Cars | Full-finetuning | 79.45 | 86.39 ↑ |
| FGVC Aircraft | Full-finetuning | 66.99 | 73.44 ↑ |
| Oxford Pets | Full-finetuning | 90.67 | 91.72 ↑ |
| Stanford Cars | 1-shot Linear Probing | 13.18 | 16.49 ↑ |
| Oxford Pets | 1-shot Linear Probing | 63.51 | 73.59 ↑ |

5.  实际意义：为利用互联网上海量的、未对齐的文本、图像、音频数据来增强特定模态（如视觉、音频）模型提供了简单有效的方法，有望降低对昂贵配对数据的依赖。
6.  主要局限性：理论分析基于线性数据生成假设；实验主要评估分类任务；未深入探讨和解决在大规模非线性模型中可能出现的梯度干扰、模态冲突等优化难题。

---

### 5. [Learning multimodal dictionary decompositions with group-sparse autoencoders](/audio-paper-digest-blog/posts/2026-05-04-learning-multimodal-dictionary-decompositions)

✅ **7.5/10** | 前25% | #多模态模型 | #自监督学习 | #跨模态 #对比学习

👥 **作者与机构**

- 第一作者：Chiraag Kaushik（Georgia Institute of Technology, School of Electrical and Computer Engineering）
- 通讯作者：Davis Barch（Dolby Laboratories），Andrea Fanelli（Dolby Laboratories）
- 作者列表：Chiraag Kaushik（Georgia Institute of Technology）、Davis Barch（Dolby Laboratories）、Andrea Fanelli（Dolby Laboratories）

💡 **毒舌点评**

论文精准地诊断了多模态SAE的“分裂字典”顽疾，并给出了一套有理论铺垫、实验扎实的“组合疗法”（组稀疏损失+掩码），效果立竿见影，尤其是在音频文本任务上的首次尝试值得关注。然而，其核心创新（组稀疏正则）更多是经典稀疏学习方法的“场景迁移”，而非原理层面的突破，且完全依赖现成的CLIP/CLAP编码器，未能触及嵌入空间本身的质量问题。

🔗 **开源详情**

-   代码：论文中未提及代码链接。
-   模型权重：未提及。
-   数据集：论文中使用的CC3M、JamendoMaxCaps、MusicBench、MS COCO等均为公开或可公开获取的数据集。
-   Demo：未提及。
-   复现材料：论文附录（A.2节）提供了非常详细的训练细节，包括超参数选择范围与具体值、优化器设置、字典大小、稀疏度K等，复现基础良好。
-   引用的开源项目：论文中提到了用于SAE训练和字典学习的开源实现 `dictionary_learning` (Marks et al., 2024)。
-   总体开源计划：论文中未提及具体的开源计划。

📌 **核心摘要**

本文旨在解决将稀疏自编码器应用于多模态嵌入空间（如CLIP、CLAP）时出现的“分裂字典”问题，即学习到的特征大多只对单一模态激活，破坏了语义对齐。作者首先从理论上证明，在对齐的嵌入空间中，存在分裂字典意味着也存在对齐更好的非分裂字典。为此，他们提出一种基于组稀疏自编码器的新方法，核心是在训练中引入针对配对数据的组稀疏损失和跨模态随机掩码，以鼓励为不同模态的语义一致样本学习共享的稀疏表示。实验表明，与标准SAE相比，该方法（尤其是MGSAE变体）显著增加了多模态激活的神经元数量、减少了死神经元，并提升了特征的多模态单义性分数（MMS）。在CLIP图像/文本和CLAP音频/文本嵌入空间上的多项零样本跨模态任务（如分类、检索）中，其性能大幅超越标准SAE及其他变体（例如，在ImageNet零样本分类上，MGSAE比标准SAE高出7%）。论文还展示了该方法能更准确地识别线性探针中的概念贡献，并在检索任务中实现可控的概念操纵。其主要局限在于方法创新基于已有技术的组合，且评估主要限于重构和零样本任务，未深入探索对模型内在理解的影响。该工作首次将SAE分析扩展到音频文本联合空间，为理解与控制多模态表示提供了新工具。

![图2：掩码组稀疏自编码器（MGSAE）训练流程图](icassp-img://ZJlVXZ5dmK/1.png)
（注：此图为论文图2，展示了MGSAE的训练流程：从预训练编码器获取配对嵌入，通过共享的SAE编码器（含随机掩码）得到稀疏编码，再经解码器重构，损失包含重建损失和组稀疏损失。）

---

### 6. [AVERE: Improving Audiovisual Emotion Reasoning with Preference Optimization](/audio-paper-digest-blog/posts/2026-05-04-avere-improving-audiovisual-emotion-reasoning)

✅ **7.5/10** | 前25% | #多模态模型 | #强化学习 | #语音情感识别 #基准测试

👥 **作者与机构**

-   第一作者：Ashutosh Chaubey (University of Southern California, Institute for Creative Technologies)
-   通讯作者：未明确说明，但根据邮箱 `soleymani@ict.usc.edu`，可推断 Mohammad Soleymani 可能是通讯或资深作者。
-   作者列表：Ashutosh Chaubey (University of Southern California, Institute for Creative Technologies), Jiacheng Pang (University of Southern California, Institute for Creative Technologies), Maksim Siniukov (University of Southern California, Institute for Creative Technologies), Mohammad Soleymani (University of Southern California, Institute for Creative Technologies)

💡 **毒舌点评**

亮点是论文不仅发现了问题，还专门设计了针对情感推理的“压力测试”基准（EmoReAlM），让模型的缺陷无处遁形；短板在于其构建的基准和偏好数据集仍严重依赖现有的有限情感数据集（如DFEW）和GPT生成，可能继承源数据的文化偏差与标注噪声，限制了结论的普适性。

🔗 **开源详情**

-   代码：论文中提及代码将在项目页面 `avere-iclr.github.io` 公开，未提供具体仓库链接（如GitHub）。
-   模型权重：论文中提及模型将在项目页面公开，未说明具体平台。
-   数据集：论文中提及EmoReAlM基准数据集将在项目页面公开。
-   Demo：论文中未提及提供在线演示。
-   复现材料：论文附录详细提供了训练配置（学习率、batch size等）、评估指标、提示模板、消融实验设置，复现信息非常充分。
-   引用的开源项目：提到了依赖的基础模型或工具，如Whisper (Radford et al., 2023)、LanguageBind (Zhu et al., 2024)、LoRA (Hu et al., 2022)、Sentence-BERT (Reimers & Gurevych, 2019)、GPT-4o、Gemini-2.5等。

📌 **核心摘要**

这篇论文旨在解决多模态大语言模型（MLLMs）在情感理解中存在的两个关键问题：推理错误（将情绪与不相关的视听线索关联）和感知错误（为解释情绪而幻觉出不存在的线索）。为此，作者提出了两项核心贡献：1) EmoReAlM 基准测试，包含4000个人工验证的多项选择题样本，系统评估MLLMs在情感推理、模态一致性以及对虚假线索和幻觉线索的抵抗力；2) AVEm-DPO 优化方法，这是一种定制化的直接偏好优化技术。它通过构造基于提示的细粒度模态偏好（确保响应与正确的模态输入对齐）、基于情感的响应偏好（惩罚包含虚假关联或幻觉的回答），并引入文本先验去偏正则化项（减少模型对语言模型固有文本偏差的依赖），从而提升模型的情感推理能力。实验结果表明，在零样本设置下，AVEm-DPO显著提升了两个参考基线模型（EmotionLLaMA和作者自建模型）在EmoReAlM、DFEW、RAVDESS和EMER等多个基准上的性能，相对提升幅度达6-19%。该工作为评估和改进情感AI提供了坚实的基准与优化框架。主要局限性包括基准测试可能继承源数据集（DFEW）的偏差，以及主要针对短视频，对长视频情感理解有待探索。

---

