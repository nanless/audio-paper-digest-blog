---
title: "ICLR 2026 - 多模态模型 论文列表"
date: 2026-05-04
draft: false
tags: ["多模态模型"]
categories: [iclr-2026]
description: "共 4 篇 ICLR 2026 多模态模型 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 多模态模型

共 **4** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [FlowBind: Efficient Any-to-Any Generation with Bidirectional](/audio-paper-digest-blog/posts/2026-05-04-flowbind-efficient-any-to-any-generation-with) | 8.5分 | 前25% |
| 🥈 | [NExT-OMNI: Towards Any-to-Any Omnimodal Foundation Models wi](/audio-paper-digest-blog/posts/2026-05-04-next-omni-towards-any-to-any-omnimodal-foundation) | 8.5分 | 前25% |
| 🥉 | [Learning multimodal dictionary decompositions with group-spa](/audio-paper-digest-blog/posts/2026-05-04-learning-multimodal-dictionary-decompositions) | 7.5分 | 前25% |
| 4. | [AVERE: Improving Audiovisual Emotion Reasoning with Preferen](/audio-paper-digest-blog/posts/2026-05-04-avere-improving-audiovisual-emotion-reasoning) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [FlowBind: Efficient Any-to-Any Generation with Bidirectional Flows](/audio-paper-digest-blog/posts/2026-05-04-flowbind-efficient-any-to-any-generation-with)

🔥 **8.5/10** | 前25% | #多模态模型 | #流匹配 | #音频生成 #图像生成

👥 **作者与机构**

- 第一作者：Yeonwoo Cha（KAIST）
- 通讯作者：Seunghoon Hong（KAIST）
- 作者列表：Yeonwoo Cha（KAIST）、Semin Kim（KAIST）、Jinhyeon Kwon（KAIST）、Seunghoon Hong（KAIST）

💡 **毒舌点评**

亮点在于其框架的简洁性——用一个可学习的共享潜在空间统一所有模态，避免了复杂的多阶段训练和模态对约束，实现了用极少数据和参数完成高质量的任意模态转换。短板则在于其“高效”的代价是完全依赖于冻结的、预训练的模态编码器-解码器，这牺牲了端到端的潜力，并可能限制其在新模态或特定领域（如高保真音频合成）上的表现上限，使其更像是一个灵活的“跨模态对齐器”而非全能的生成基座。

🔗 **开源详情**

- 代码：提供项目页面和代码仓库链接：https://yeonwoo378.github.io/official_flowbind。
- 模型权重：论文中未明确提及是否公开预训练的FlowBind模型权重。
- 数据集：论文中提及的训练数据集（LAION-COCO, Flickr-30k, AudioCaps v2, VGGSound）均为公开数据集，并给出了具体子集信息（Table 8）。
- Demo：项目页面可能包含演示，但论文正文中未明确提及。
- 复现材料：论文在附录C中详细说明了模型架构、训练数据集、训练配方（优化器、batch size、时间采样策略等）以及评估设置，复现信息较为充分。
- 论文中引用的开源项目/模型：CLIP, Stable-UnCLIP, CLAP, EmbeddingGemma, Gemma3-1B, FLUX.1, AudioLDM等。

📌 **核心摘要**

本文旨在解决现有流式多模态生成模型在实现“任意到任意”生成时面临的效率低下、需要严格模态配对数据以及训练过程复杂等挑战。方法核心是提出FlowBind框架，它通过引入一个可学习的共享潜在空间来捕获跨模态共性，并为每种模态设计独立的可逆流（invertible flow）网络，将该模态连接到共享空间。所有组件在一个统一的流匹配（flow matching）目标下联合优化。推理时，通过模态特定的流网络对共享潜在空间进行编解码，即可实现任意模态间的直接翻译。与以往需要以文本为中心或建模复杂联合分布的方法不同，FlowBind通过因式分解交互，天然支持任意部分配对数据进行训练，并大幅降低了计算成本。实验表明，FlowBind在文本、图像和音频的多种生成任务上达到了与CoDi、OmniFlow等基线相当甚至更优的质量，同时所需参数减少6倍，训练速度提升10倍。该工作的实际意义在于为构建高效、灵活且数据需求低的通用多模态生成模型提供了一种简洁有效的范式。主要局限性是其生成能力上限受限于冻结的预训练模态编解码器，且共享潜在空间在处理语义冲突的输入条件时，其简单的平均聚合策略可能并非最优。

| 模型 | 训练参数量 | GPU小时 | 训练数据量(#(T–I)/#(T–A)/#(I–A)) | 联合训练 |
| :--- | :--- | :--- | :--- | :--- |
| CoDi | 4.3B | - | 400M / 3.5M / 1.9M | NO |
| OmniFlow | 3.2B | 480hr* | 28M / 2.4M / - | NO |
| FlowBind | 568M | 48hr | 310K / 96K / 180K | YES |

*注：OmniFlow训练时间仅为最终联合训练阶段。

![FlowBind框架概览图](icassp-img://7DeARTwvwL/0.png)
图1：FlowBind框架概览。 (a) 训练阶段：联合学习共享潜在空间和各模态的漂移网络。(b) 推理阶段：利用学习到的漂移网络，通过在时间上前向或后向求解各模态的常微分方程（ODE），实现灵活的任意到任意生成。

---

### 🥈 [NExT-OMNI: Towards Any-to-Any Omnimodal Foundation Models with Discrete Flow Matching](/audio-paper-digest-blog/posts/2026-05-04-next-omni-towards-any-to-any-omnimodal-foundation)

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

### 🥉 [Learning multimodal dictionary decompositions with group-sparse autoencoders](/audio-paper-digest-blog/posts/2026-05-04-learning-multimodal-dictionary-decompositions)

✅ **7.5/10** | 前25% | #多模态模型 | #自编码器 | #音频检索 #跨模态

👥 **作者与机构**

- 第一作者：Chiraag Kaushik（Georgia Institute of Technology, School of Electrical and Computer Engineering）
- 通讯作者：未说明
- 作者列表：Chiraag Kaushik（Georgia Institute of Technology）， Davis Barch（Dolby Laboratories）， Andrea Fanelli（Dolby Laboratories）

💡 **毒舌点评**

亮点：论文清晰定义了多模态SAE的“字典分裂”问题，并从理论（定理证明其可解）和实践（提出群稀疏+掩码方案）两个层面进行了系统性改进，实验覆盖了图像-文本和音乐-文本两大类多模态场景，评估指标设计新颖且具有说服力。短板：所提出的“跨模态随机掩码”技巧更像是一个工程Trick，缺乏更深层的理论动机或严谨的消融分析来证明其不可或缺性；此外，论文的贡献更侧重于分析工具的改进，对于最终提升多模态大模型性能的实际影响尚不明确。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及公开预训练的GSAE/MGSAE模型权重。
- 数据集：使用了公开数据集（CC3M， JamendoMaxCaps， MS COCO， MusicBench， CelebA等），论文中给出了数据集引用和预处理方法。
- Demo：未提供在线演示。
- 复现材料：提供了详实的实验设置（附录A.2），包括训练数据、超参数选择方法、关键参数值（λ, p, K, 扩展因子）、优化器、训练步数等，并进行了超参数敏感性分析（表3）。还提供了补充实验（表4-9）和更多案例。
- 论文中引用的开源项目：提到了使用基于Marks et al. (2024)的SAE实现库，并引用了Bhalla et al. (2024a)的概念词汇表。

📌 **核心摘要**

1.  问题：标准的稀疏自编码器（SAE）在分解多模态对齐嵌入（如CLIP/CLAP）时，倾向于学习“分裂字典”，即大部分字典元素（概念）只对单一模态的输入激活，这损害了跨模态的概念对齐，限制了SAE在跨模态任务中的应用。
2.  方法：作者提出了一种群稀疏自编码器（GSAE）及其掩码变体（MGSAE）。核心思想是利用成对的跨模态数据（如一对图文），在训练时引入群稀疏损失（L2,1范数），鼓励配对样本的稀疏编码具有相同的激活模式（共享支撑集）。此外，还引入了跨模态随机掩码技术，在编码前对嵌入施加共享的随机掩码，进一步迫使TopK操作从相同的潜在空间子集中选择，促进多模态概念的学习。
3.  创新：与以往工作直接学习跨模态转换或后处理配对不同，该工作是从优化目标和训练流程上进行根本性改进，通过显式的正则化让SAE内部偏好多模态一致的稀疏表示。同时，提出了新的评估指标多模态单义性分数（MMS）来量化概念的跨模态语义一致性。
4.  实验：在CLIP（图文）、CLAP（音乐/音频-文）、SIGLIP2和AIMv2等多种模型嵌入上进行实验。结果表明，MGSAE相比标准SAE：(a) 大幅增加了同时对两种模态激活的神经元数量，减少了死神经元（见图3）；(b) MMS分数显著提高（见图4）；(c) 在多项零样本跨模态分类与检索任务上性能提升明显，如在CLIP-ImageNet上准确率从0.303提升至0.373（见表1），在CLAP-GTZAN上从0.376提升至0.672（见表2）；(d) 在概念命名与线性探针解释案例中，能更准确地识别与任务相关的语义概念（见图5）。
5.  意义：为理解和控制多模态表示空间提供了更优的解释工具。学习到的多模态字典使得通过操作特定概念向量来干预和引导跨模态任务（如检索）成为可能（见图7）。
6.  局限：方法依赖于高质量的成对多模态数据进行训练；理论定理的证明基于较强的简化假设（如理想对齐、精确稀疏分解）；在零样本任务上的性能仍显著低于原始的稠密嵌入，表明稀疏分解过程仍存在信息损失。

---

### 4. [AVERE: Improving Audiovisual Emotion Reasoning with Preference Optimization](/audio-paper-digest-blog/posts/2026-05-04-avere-improving-audiovisual-emotion-reasoning)

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

