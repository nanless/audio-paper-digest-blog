---
title: "ICLR 2026 - 多模态模型 论文列表"
date: 2026-05-02
draft: false
tags: ["多模态模型"]
categories: [iclr-2026]
description: "共 7 篇 ICLR 2026 多模态模型 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 多模态模型

共 **7** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Omni-Reward: Towards Generalist Omni-Modal Reward Modeling w](/audio-paper-digest-blog/posts/2026-05-02-omni-reward-towards-generalist-omni-modal-reward) | 8.5分 | 前25% |
| 🥈 | [NExT-OMNI: Towards Any-to-Any Omnimodal Foundation Models wi](/audio-paper-digest-blog/posts/2026-05-02-next-omni-towards-any-to-any-omnimodal-foundation) | 8.5分 | 前25% |
| 🥉 | [OptMerge: Unifying Multimodal LLM Capabilities and Modalitie](/audio-paper-digest-blog/posts/2026-05-02-optmerge-unifying-multimodal-llm-capabilities-and) | 8.0分 | 前25% |
| 4. | [Human Behavior Atlas: Benchmarking Unified Psychological And](/audio-paper-digest-blog/posts/2026-05-02-human-behavior-atlas-benchmarking-unified) | 7.5分 | 前25% |
| 5. | [Better Together: Leveraging Unpaired Multimodal Data for Str](/audio-paper-digest-blog/posts/2026-05-02-better-together-leveraging-unpaired-multimodal) | 7.0分 | 前25% |
| 6. | [VideoMathQA: Benchmarking Mathematical Reasoning via Multimo](/audio-paper-digest-blog/posts/2026-05-02-videomathqa-benchmarking-mathematical-reasoning) | 7.0分 | 前25% |
| 7. | [TINY BUT MIGHTY: A SOFTWARE-HARDWARE CO- DESIGN APPROACH FOR](/audio-paper-digest-blog/posts/2026-05-02-tiny-but-mighty-a-software-hardware-co-design) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Omni-Reward: Towards Generalist Omni-Modal Reward Modeling with Free-Form Preferences](/audio-paper-digest-blog/posts/2026-05-02-omni-reward-towards-generalist-omni-modal-reward)

🔥 **8.5/10** | 前25% | #多模态模型 | #强化学习 | #数据集 #基准测试

👥 **作者与机构**

- 第一作者：Zhuoran Jin（中国科学院大学人工智能学院、中国科学院自动化研究所）
- 通讯作者：Jun Zhao（中国科学院大学人工智能学院、中国科学院自动化研究所）
- 作者列表：Zhuoran Jin（中国科学院大学人工智能学院、中国科学院自动化研究所）， Hongbang Yuan（中国科学院大学人工智能学院、中国科学院自动化研究所）， Kejian Zhu（中国科学院大学人工智能学院、中国科学院自动化研究所）， Jiachun Li（中国科学院大学人工智能学院、中国科学院自动化研究所）， Pengfei Cao（中国科学院大学人工智能学院、中国科学院自动化研究所）， Yubo Chen（中国科学院大学人工智能学院、中国科学院自动化研究所）， Kang Liu（中国科学院大学人工智能学院、中国科学院自动化研究所）， Jun Zhao（中国科学院大学人工智能学院、中国科学院自动化研究所）

💡 **毒舌点评**

亮点：这篇论文最大的价值在于“系统性”和“开创性”，它首次将奖励模型（RM）的评估范围从传统的文本/图像扩展到了包括视频、音频、3D在内的全模态，并引入了自由形式的偏好描述，填补了一个重要的空白。短板：虽然构建了庞大的框架，但其核心生成式奖励模型（R1）的探索稍显初步，仅用了3%的数据进行训练，且论文中对训练的具体超参数和硬件环境交代不够清晰，使得这个最具野心的部分在可复现性上打了一丝折扣。

🔗 **开源详情**

- 代码：论文提供了代码仓库链接：https://github.com/HongbangYuan/OmniReward
- 模型权重：论文提及将发布Omni-RewardModel，但未在正文中直接提供权重下载链接，通常这些链接会包含在代码仓库的README中。
- 数据集：Omni-RewardBench和Omni-RewardData均已公开，并提供了HuggingFace链接：
    - https://hf.co/datasets/HongbangYuan/OmniRewardBench
    - https://hf.co/datasets/jinzhuoran/OmniRewardData
- Demo：论文中未提及在线演示。
- 复现材料：论文详细描述了数据集构建流程、模型架构和评估协议，并在附录中提供了标注指南、质量控制细节等。但如前所述，缺乏训练硬件、具体超参数配置（如学习率、batch size、训练轮数）等细节。
- 引用的开源项目：论文基于并引用了MiniCPM-o-2.6、Qwen2.5-VL-7B-Instruct等开源模型作为基础模型，并使用了GPT-4o进行数据生成。

📌 **核心摘要**

这篇论文旨在解决当前奖励模型（RM）面临的模态不平衡（主要支持文本和图像）和偏好刚性（仅学习固定二元偏好）两大挑战，提出了一个面向全模态、支持自由形式偏好的奖励建模框架——Omni-Reward。其核心贡献包括三部分：（1）Omni-RewardBench：首个覆盖文本、图像、视频、音频和3D五种模态、九种任务、并支持自由形式偏好标注的奖励模型评估基准，包含3725个高质量人工标注对；（2）Omni-RewardData：一个大规模多模态偏好数据集，包含248K通用偏好对和69K指令微调对，以提升模型对跨模态任务和动态偏好的泛化能力；（3）Omni-RewardModel：基于上述数据训练的两种全模态奖励模型，包括判别式（BT）和生成式（R1）版本。实验表明，Omni-RewardModel在Omni-RewardBench上取得了最优性能（w/ Ties设置下准确率65.36%），在VL-RewardBench等公开基准上也达到了或超过了SOTA水平，证明了其有效性。论文指出现有模型在音频生成、3D生成等任务上表现不佳，凸显了模态不平衡问题。该工作为构建更通用、更个性化的多模态AI对齐工具奠定了重要基础，但其目前的基准规模、任务分类粒度以及对多轮对话偏好的支持仍有局限。

---

### 🥈 [NExT-OMNI: Towards Any-to-Any Omnimodal Foundation Models with Discrete Flow Matching](/audio-paper-digest-blog/posts/2026-05-02-next-omni-towards-any-to-any-omnimodal-foundation)

🔥 **8.5/10** | 前25% | #多模态模型 | #流匹配 | #音频生成 #语音对话系统

👥 **作者与机构**

- 第一作者：Run Luo（中国科学院深圳先进技术研究院，中国科学院大学）
- 通讯作者：Xiaobo Xia（新加坡国立大学，中国科学技术大学）；Min Yang（中国科学院深圳先进技术研究院，深圳大学先进技术研究院）
- 作者列表：Run Luo（中国科学院深圳先进技术研究院，中国科学院大学）、Xiaobo Xia（新加坡国立大学，中国科学技术大学）、Lu Wang（Rtizz-AI）、Longze Chen（中国科学院深圳先进技术研究院，中国科学院大学）、Renke Shan（Rtizz-AI）、Jing Luo（中国科学院深圳先进技术研究院，中国科学院大学）、Min Yang（中国科学院深圳先进技术研究院，深圳大学先进技术研究院）、Tat-Seng Chua（新加坡国立大学）

#

💡 **毒舌点评**

亮点在于其架构的简洁与统一性，用单一DFM骨干取代了常见的AR+Diffusion混合或解耦设计，这在处理需要深度融合的多模态检索任务时确实显示出优势，实验也验证了这一点。短板则受限于“论文中未说明”训练硬件的具体规格和训练总时长，且其核心贡献——DFM在统一建模上的潜力——受限于仅7B的参数规模，大规模Scaling下的表现未知，使得“下一代范式”的论断稍显仓促。

#

🔗 **开源详情**

- 代码：是，提供了GitHub仓库链接：https://github.com/ritzz-ai/Next-OMNI
- 模型权重：是，论文明确提到“开源”模型检查点，并提供了链接。
- 数据集：部分公开。论文中使用的大部分数据集为公开数据集（如LAION, LibriSpeech等），但也包含“私有数据”。论文未提供统一的训练数据下载链接，但详细列出了数据来源和构成（表8）。
- Demo：论文中未提及在线演示。
- 复现材料：非常充分。附录中提供了模型设计细节（D）、数据策展详情（E）、训练配方（F，表9）和额外的实验与可视化结果（G, H, I）。
- 论文中引用的开源项目：主要包括：Qwen2.5系列（骨干/对齐损失）、CLIP-ViT（视觉编码器初始化）、Whisper（音频编码器初始化）、FLUX（图像生成数据合成）、MMEvol（指令数据增强）、以及训练数据相关的多个公开数据集工具（如LAION, Common Crawl）。

📌 **核心摘要**

本文旨在解决现有统一多模态模型在理解和生成任务间存在固有冲突、架构冗余（混合/解耦设计）导致难以支持跨模态检索等更通用场景的问题。核心方法是提出NExT-OMNI，首个完全基于离散流匹配（DFM）的开源全能态基础模型。与已有的自回归或混合架构相比，其新在：1）完全摒弃自回归范式，采用DFM进行并行去噪，原生支持双向信息融合；2）设计了带有重建损失的统一表征编码器，为生成、理解和检索任务提供一体化特征；3）引入动态长度生成策略和自适应缓存机制以提升效率。主要实验结果如下：在全能态理解基准（OmniBench, WorldSense, AV-Odyssey）上，平均得分39.7，优于OpenOmni（36.5）；在多轮视觉交互（OpenING）上，平均分55.0，显著高于前代模型；在多模态检索（MMEBEDIR子集）上，平均Top-5准确率32.9，优于所有对比模型（MMaDA为31.8）；在语音交互（Spoken QA）上取得有竞争力的结果。实际意义在于，它为构建更统一、高效的全能态基础模型提供了一个有前景的新范式。主要局限性在于，受限于计算资源，模型仅在7B规模上训练和验证，其在大规模下的潜力尚未证明。

#

---

### 🥉 [OptMerge: Unifying Multimodal LLM Capabilities and Modalities via Model Merging](/audio-paper-digest-blog/posts/2026-05-02-optmerge-unifying-multimodal-llm-capabilities-and)

🔥 **8.0/10** | 前25% | #多模态模型 | #模型合并 | #基准测试 #开源工具

👥 **作者与机构**

-   第一作者：Yongxian Wei（清华大学）
-   通讯作者：Lu Hou（华为诺亚方舟实验室），Chun Yuan（清华大学）
-   作者列表：Yongxian Wei（清华大学），Runxi Cheng（清华大学），Weike Jin（华为诺亚方舟实验室），Enneng Yang（中山大学），Li Shen（中山大学），Lu Hou（华为诺亚方舟实验室），Sinan Du（清华大学），Chun Yuan（清华大学），Xiaochun Cao（中山大学），Dacheng Tao（南洋理工大学）

#

💡 **毒舌点评**

亮点：论文最大的价值在于系统性地填补了MLLM模型合并领域“无标准基准”的空白，并基于此提出了针对全微调和LoRA微调两种不同场景的、有理论支撑的优化方法（OptMerge），实验充分且开源承诺良好。  
短板：实验规模主要集中在1B和7B参数的模型上，对于当前主流的大参数量（如70B以上）多模态模型的合并效果、以及合并后模型的长期稳定性（如对话能力衰减）缺乏更深入的探讨。

#

🔗 **开源详情**

-   代码：论文明确提及“All code and checkpoints are publicly available here”，并提供了链接（`here`应为超链接，但当前文本中未显示具体URL）。因此，代码将开源。
-   模型权重：论文明确提及公开“checkpoints”，包括为基准训练的所有专家模型（VQA, Geometry, Chart, OCR, Grounding）在InternVL2.5和Qwen2-VL上的权重，以及模态合并实验中使用的视觉、音频、视频模型权重。
-   数据集：基准中使用的所有训练数据和评估数据均来自公开数据集（如Table 1所列），论文提供了详细的列表。评估使用VLMEvalKit和LMMs-Eval等公开工具。
-   Demo：论文中未提及提供在线演示。
-   复现材料：论文提供了详细的实现细节（附录C），包括微调参数、合并设置、优化器配置等。所有实验在8×V100 GPU上进行，提供了硬件参考。
-   引用的开源项目：论文依赖并引用了多个开源工具和模型，包括：
    -   模型：InternVL2.5, Qwen2-VL, Vicuna, CLIP, BEATs, LanguageBind, LLaVA系列, CogVLM, InstructBLIP等。
    -   评估工具：VLMEvalKit, LMMs-Eval。
    -   合并工具：提到MergeKit。
    -   框架：HuggingFace Transformers。

📌 **核心摘要**

1.  要解决什么问题：现有模型合并研究缺乏针对多模态大语言模型（MLLM）的、能清晰划分其多种能力（如VQA、几何推理、图表理解等）并评估其模态融合效果的专用基准。同时，现有的数据驱动合并方法成本高昂，需要一种数据高效的后处理方法来统一不同专家模型的能力或不同模态。
2.  方法核心是什么：本文提出了OptMerge基准，包含从VQA到Grounding五类能力的训练数据集和评估集，覆盖了InternVL2.5（全微调）和Qwen2-VL（LoRA）两种设置。同时，提出了OptMerge算法，通过对任务向量进行低秩近似去噪，并基于任务向量间的交互损失来鲁棒地优化合并向量，以应对全微调和LoRA微调模型参数特性不同的挑战。
3.  与已有方法相比新在哪里：(1) 首次构建了细粒度划分MLLM能力并评估模态融合的专用模型合并基准。(2) 提出了针对MLLM特性的新合并算法OptMerge，通过SVD去噪和针对性的优化策略（全微调用Adam+中心化，LoRA用SGD+初始化为平均值）来提升稳定性与性能。(3) 首次在基准上系统性地探索了通过合并来融合视觉、音频、视频多种模态，构建“全模态”语言模型。
4.  主要实验结果如何：
    *   能力合并：OptMerge在基准上平均性能提升2.48%，在InternVL2.5（全微调）上达到57.44分（最佳），在Qwen2-VL（LoRA）上达到63.30分（最佳），超越了需要数据混合训练的基线（如InternVL2.5混合训练为57.66分）。
    *   模态合并：合并视觉、音频、视频三个模态模型后，在Audio-VQA任务上平均得分66.88，显著高于单个模态模型（视觉63.16，音频37.75，视频64.11）。
    *   消融实验：对LoRA合并，从WUDI Merging（58.65）逐步加入SGD（降至48.88）、初始化（升至63.08）、低秩近似（最终63.30）各组件，验证了各设计的有效性。
    *   实际模型：合并从Hugging Face收集的4个不同专长模型（如GRPO数学模型、Pokemon模型），平均分达66.70，超过了最强单体模型（63.17）。
5.  实际意义是什么：证明了模型合并是一种数据高效、计算成本低的构建增强版MLLM的有效路径。它不仅能融合同一基础模型的不同能力版本，还能通过“数据free”的方式整合不同模态的编码器，为快速集成社区开源模型、构建全模态模型提供了新思路。
6.  主要局限性是什么：实验主要在中等规模模型（1B， 7B）上进行，对更大规模模型（如32B以上）的验证（虽然补充了32B实验但不深入）和计算效率的更全面评估有待加强。此外，基准所用的训练数据均为公开数据集，可能无法完全代表工业界复杂的私有数据场景。

---

### 4. [Human Behavior Atlas: Benchmarking Unified Psychological And Social Behavior Understanding](/audio-paper-digest-blog/posts/2026-05-02-human-behavior-atlas-benchmarking-unified)

✅ **7.5/10** | 前25% | #多模态模型 | #多任务学习 | #基准测试 #强化学习

👥 **作者与机构**

- 第一作者：Keane Ong（MIT， 新加坡国立大学）
- 通讯作者：论文中未明确标注通讯作者。
- 作者列表：
    - Keane Ong (MIT， 新加坡国立大学)
    - Wei Dai (MIT)
    - Carol Li (MIT)
    - Dewei Feng (MIT)
    - Hengzhi Li (MIT， 帝国理工学院)
    - Jingyao Wu (MIT)
    - Jiaee Cheong (哈佛大学)
    - Rui Mao (南洋理工大学)
    - Gianmarco Mengaldo (新加坡国立大学)
    - Erik Cambria (南洋理工大学)
    - Paul Pu Liang (MIT)

💡 **毒舌点评**

亮点：堪称“基建狂魔”，首次将13个异构、多模态的行为理解数据集统一成10万+样本的标准化基准，系统性地填补了该领域缺乏统一评估平台的空白，方法论上的“标准化实践”价值极高。
短板：模型架构创新有限，核心是微调现有LLM；在SOC（社交推理）、INT（意图识别）等开放生成任务上，即使最好的模型（OMNISAPIENS-7B RL）准确率也仅约0.3，离实际应用还有相当距离，暴露了当前大模型在深层行为理解上的瓶颈。

🔗 **开源详情**

- 代码：提供GitHub仓库链接：https://github.com/MIT-MI/human_behavior_atlas
- 模型权重：论文中明确提到将发布OMNISAPIENS-7B SFT、BAM和RL三个模型的权重。
- 数据集：Human Behavior Atlas基准数据集公开，可通过上述GitHub仓库获取。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了完整的实验细节（附录B， C），包括模型架构、训练超参数（学习率、批次大小、LoRA配置、训练轮数）、数据集划分、评估指标公式与LLM-Judge提示模板，复现指导性极强。
- 引用的开源项目/工具：
    - 骨干模型：Qwen2.5-Omni-7B
    - 特征提取：MediaPipe (面部/身体关键点)， OpenSMILE (声学特征)， Whisper v3 Large (语音转录)
    - 强化学习：GRPO算法
    - 评估：GPT-5-nano作为LLM-Judge
    - 训练框架：PyTorch， Accelerate， LoRA

📌 **核心摘要**

1.  要解决什么问题：当前用于理解和分析人类心理与社会行为（如情感、认知、病理、社交过程）的AI系统，大多局限于单一任务和数据集，导致模型难以扩展、跨任务迁移和泛化，且存在数据格式和评估标准不统一的问题。
2.  方法核心是什么：构建了一个名为Human Behavior Atlas的大规模多模态统一基准，包含来自13个数据集、超过10万样本，统一为“提示-目标”格式。基于此基准，训练并评估了三个模型变体：OMNISAPIENS-7B SFT（监督微调）、OMNISAPIENS-7B BAM（通过行为适配器模块集成行为描述符）和OMNISAPIENS-7B RL（基于GRPO的强化学习）。
3.  与已有方法相比新在哪里：新在系统性统一：首次提出了一个覆盖情感、认知、病理、社交四大维度的广义行为分类体系，并将异构数据集标准化。新在基准规模与多样性：提供了包含真实音频、视频、文本及提取的行为描述符的大规模基准。新在模型对比与洞察：系统比较了SFT、RL以及特征增强（BAM）三种范式在统一基准上的表现与权衡。
4.  主要实验结果如何：
    - 多任务学习：在10项行为任务中，三个Omnisapiens模型在7-8项任务上超越了Qwen2.5-Omni-7B， Qwen2.5-VL-7B， Gemma-3-4B和HumanOmniV2-7B等基线。例如在情感（EMO）任务CREMA-D上，BAM模型达到0.548（基线最高0.560）；在抑郁检测（DEP）任务MMPSY(D)上，SFT模型达到0.813（基线最高0.813）。关键数据见表4。
    ![图2: 多任务结果对比](icassp-img://ZKE23BBvlQ/1.png)
    - 迁移学习：在留出数据集上，预训练后的Omnisapiens-7B SFT在微调后全面超越未经行为数据预训练的Qwen2.5-Omni-7B。例如在MUStARD（讽刺检测）上，准确率从0.473提升至0.658（+39.1%）。关键数据见表5。
    - 行为描述符效果：BAM模块在NVC（非言语沟通，+33%）、SAR（讽刺检测，+29%）等任务上带来显著提升，但在SOC和INT任务上性能下降。关键数据见表6。
    - 零样本迁移：预训练后的OMNISAPIENS-7B RL在四个留出数据集上进行零样本评估，均大幅超越Qwen2.5-Omni-7B，例如在抑郁检测（DAIC-WOZ）上从0.108提升至0.499（+362%）。关键数据见表8。
5.  实际意义是什么：该工作为心理与社会行为理解领域建立了事实上的标准基准和评估协议，降低了后续研究的入门门槛。它证明了大规模多任务预训练能显著提升模型的跨任务泛化能力，并为如何整合领域知识（行为描述符）与大模型提供了实践方案（BAM），具有重要的工具价值和方法论指导意义。
6.  主要局限性：1) 绝对性能天花板：在SOC， INT等需要复杂推理的任务上，最佳模型性能仍低于0.3，表明统一预训练并未解决任务本身的深层挑战。2) 模型创新性：核心模型基于现有开源LLM，创新点更多在应用和系统层面。3) 评估依赖LLM-Judge：部分开放任务的评估依赖外部LLM，其可靠性和公平性可能引入偏差。

---

### 5. [Better Together: Leveraging Unpaired Multimodal Data for Stronger Unimodal Models](/audio-paper-digest-blog/posts/2026-05-02-better-together-leveraging-unpaired-multimodal)

✅ **7.0/10** | 前25% | #多模态模型 | #自监督学习 | #跨模态 #少样本

👥 **作者与机构**

- 第一作者：Sharut Gupta (MIT CSAIL)
- 通讯作者：Phillip Isola (MIT CSAIL)
- 作者列表：Sharut Gupta (MIT CSAIL), Shobhita Sundaram (MIT CSAIL), Chenyu Wang (MIT CSAIL), Stefanie Jegelka (TU Munich, MIT CSAIL), Phillip Isola (MIT CSAIL)

💡 **毒舌点评**

本文的亮点在于，它从一个极其简洁且违反直觉的假设（“未配对的模态也能相互教化”）出发，构建了一套从理论到实验的完整论证，证明了通过简单的权重共享就能利用异质数据提升单模态表征。其短板在于，尽管框架通用，但其大规模验证几乎全部集中在图像和纹理分类等相对“传统”的视觉任务上，对于论文中提到的语音、医疗等更前沿、更需要多模态融合的垂直领域，实验深度和说服力略显不足，更像是概念验证。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及是否公开UML训练后的模型权重。
- 数据集：使用公开数据集（如MultiBench, ImageNet系列, Oxford Pets等），但未提供新的数据集。
- Demo：未提及在线演示。
- 复现材料：提供了详细的附录（Appendix B, C, D, E, F），包含训练协议、超参数网格、算法伪代码（Algorithm 1, 2）和硬件环境，复现细节较为充分。
- 论文中引用的开源项目：主要依赖预训练模型，如ViT（Dosovitskiy et al., 2020）、BERT（Devlin et al., 2019）、DINOv2、OpenLLaMA-3B、CLIP、AudioCLIP等。
- 总体开源计划：论文中未提及具体的开源计划（如未来发布代码）。

📌 **核心摘要**

1.  问题：传统多模态学习依赖昂贵且领域受限的配对数据（如图文对），而现实中存在海量未配对的多模态数据（独立的图片库和文本库）。本文的核心问题是：能否利用来自辅助模态（如文本）的未配对数据，直接提升目标模态（如图像）的模型表征能力？
2.  方法核心：提出UML框架，其核心是参数共享。一个单一模型通过不同的编码器处理不同模态的输入（如图像patch嵌入和文本token嵌入），并共享后续网络层的权重。模型交替处理来自不同模态的数据，并使用各自的损失函数（如自监督的重建/预测损失或监督的分类损失）进行训练。
3.  新在何处：与以往需要显式对齐或配对的方法不同，UML不推断跨模态对齐，也不依赖任何配对数据。它理论证明（在线性假设下），只要模态共享底层现实的某些方面，未配对的辅助模态数据就能严格增加Fisher信息，减少共享参数估计的方差。
4.  主要实验结果：在多个图像分类基准（如Stanford Cars, Oxford Pets）上，使用未配对文本数据的UML在自监督和监督（全量微调和少样本线性探针）设置下，均优于仅使用图像的基线。例如，在1-shot线性探针上，平均准确率从45.52%提升至51.36%。在音频分类任务（ImageNet-ESC）上，使用未配对的图像和文本数据也能提升音频分类性能。实验还量化了模态间的“汇率”，如对齐的CLIP编码器中，1张图像约等于228个单词的信息量。
    关键实验结果表格（来自论文表2）：

| 数据集 | Shot | 方法 | Stanford Cars | SUN397 | FGVC Aircraft | DTD | UCF101 | Food101 | Oxford Pets | Oxford Flowers | Caltech101 | 平均 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Full-finetuning | - | Unimodal | 79.45 | 66.20 | 66.99 | 72.16 | 83.18 | 80.65 | 90.67 | 99.18 | 95.45 | 81.54 |
| | - | Ours (UML) | 86.39 ↑ | 66.03 ↓ | 73.44 ↑ | 74.27 ↑ | 84.69 ↑ | 81.97 ↑ | 91.72 ↑ | 99.82 ↑ | 97.60 ↑ | 83.99 ↑ |
| Few-shot Linear Probing | 1 | Unimodal | 13.18 | 34.15 | 14.09 | 36.60 | 46.74 | 35.18 | 63.51 | 89.62 | 76.66 | 45.52 |
| | 1 | Ours (UML) | 16.49 ↑ | 41.79 ↑ | 15.63 ↑ | 42.04 ↑ | 52.33 ↑ | 42.27 ↑ | 73.59 ↑ | 93.64 ↑ | 84.52 ↑ | 51.36 ↑ |
| | 2 | Unimodal | 24.68 | 47.88 | 23.09 | 47.75 | 56.81 | 48.54 | 75.32 | 96.02 | 86.90 | 56.33 |
| | 2 | Ours (UML) | 28.65 ↑ | 53.15 ↑ | 24.78 ↑ | 53.25 ↑ | 63.86 ↑ | 54.44 ↑ | 81.41 ↑ | 97.63 ↑ | 90.55 ↑ | 60.85 ↑ |
| | 4 | Unimodal | 38.76 | 57.51 | 32.10 | 59.69 | 67.75 | 60.79 | 83.89 | 98.59 | 93.48 | 65.84 |
| | 4 | Ours (UML) | 43.17 ↑ | 60.89 ↑ | 33.86 ↑ | 62.43 ↑ | 71.13 ↑ | 63.88 ↑ | 87.36 ↑ | 99.17 ↑ | 94.96 ↑ | 68.53 ↑ |

5.  实际意义：为利用丰富、易得的未配对多模态数据提供了简单有效的训练范式，降低了对昂贵配对数据的依赖，有望在医疗影像、机器人感知等存在辅助模态但难以对齐的领域发挥作用。
6.  主要局限性：① 理论分析基于线性模型假设，对非线性神经网络的泛化性未完全证明；② 论文明确提到未建模和控制优化过程中的梯度干扰、模态坍缩等问题，这些在多模态学习中常见；③ 主要评估任务是分类，对于生成、检索等任务的有效性未验证；④ 性能提升依赖于模态间存在共享的语义信息，对于语义无关的模态无效。

---

### 6. [VideoMathQA: Benchmarking Mathematical Reasoning via Multimodal Understanding in Video](/audio-paper-digest-blog/posts/2026-05-02-videomathqa-benchmarking-mathematical-reasoning)

✅ **7.0/10** | 前25% | #多模态模型 | #基准测试 | #大语言模型

👥 **作者与机构**

- 第一作者：Hanoona Rasheed (MBZUAI)
- 通讯作者：未说明
- 作者列表：Hanoona Rasheed (MBZUAI), Abdelrahman Shaker (MBZUAI), Anqi Tang (MBZUAI), Muhammad Maaz (MBZUAI), Ming-Hsuan Yang (University of California Merced, Google Research), Salman Khan (MBZUAI, Australian National University), Fahad Shahbaz Khan (MBZUAI, Linköping University)

#

💡 **毒舌点评**

这篇论文精准地定义了视频理解领域一个“棘手但重要”的评测缺口——多步数学推理，并构建了迄今最贴合该场景的基准，其细粒度的步骤标注和错误分类为模型诊断提供了手术刀级别的工具。然而，其本质仍是一篇“数据集论文”，在模型创新和算法突破上着墨为零，且高度依赖LLM-as-a-Judge的评估方式也可能引入新的评估偏差。

#

🔗 **开源详情**

- 代码：论文中未明确提及代码是否开源，仅提供了项目主页链接：https://mbzuai-oryx.github.io/VideoMathQA。
- 模型权重：未提及。本文评估现有模型，未提出新模型。
- 数据集：根据项目主页描述，VideoMathQA数据集应可获取，但具体下载方式和许可协议需查阅主页确认。
- Demo：论文中未提及。
- 复现材料：论文提供了详尽的评估协议描述和附录中的提示词（Appendix F），为复现评测提供了关键信息。但评估所用模型的具体推理配置（如采样帧数）需参照各模型官方指南。
- 引用的开源项目：论文在实现和评估中引用了lmms-eval（评估框架）、vLLM（语言模型推理）以及多个被评测的开源模型（如Qwen2.5-VL, InternVL系列等）。
- 开源计划：论文中未提及具体的开源计划，但项目主页的存在暗示了相关资源可能会共享。

📌 **核心摘要**

1.  问题：现有的数学推理基准主要针对静态图像或文本，无法评估模型在真实教学视频中进行的、需要整合动态视觉、语音和文本信息并进行长时间序列推理的能力。
2.  方法：构建了VideoMathQA基准，包含420个精心标注的视频问答对，每个问题配有4-10个带时间戳的推理步骤。评测涵盖问题解决、概念迁移和深度理解三类推理场景，涉及10个数学领域。
3.  创新：首次系统性地针对视频中的数学推理提出评测方案，其创新点在于：(1) 定义了结合时间推理、多模态融合与专业知识的评测问题；(2) 提供了精细的步骤级推理标注，支持对模型中间过程的诊断；(3) 设计了多维度的评估协议（MCQ、MBin、CoT、步骤评分）。
4.  主要实验结果：评估了30个模型，发现当前模型性能远低于人类（人类准确率80.7%，最强模型GPT-o4-mini CoT MBin+Sub为44.8%）。模型规模越大、使用CoT提示和字幕输入通常能提升性能，但在长视频、复杂推理类型（如拓扑、图表阅读）上表现普遍不佳。
    关键数据表格（表1节选，CoT MBin +Sub设置）：
    | 模型 | 参数量 | MCQ | MBin |
    | :--- | :--- | :--- | :--- |
    | Human | - | - | 80.7 |
    | GPT-o4-mini | - | 61.4 | 44.8 |
    | InternVL3 | 78B | 37.1 | 27.9 |
    | Qwen2.5-VL | 72B | 36.9 | 28.6 |
    | Gemini-2.0-Flash | - | 38.8 | 24.8 |
5.  实际意义：为评估和提升多模态大模型在复杂、真实教学场景中的理解与推理能力提供了标准化的工具和方向。
6.  主要局限性：数据集规模有限（420个样本），构建和标注耗时巨大（约115人日）；评估结果部分依赖于LLM-as-a-Judge；模型与人类性能差距巨大，表明该领域仍处于早期探索阶段。

#

---

### 7. [TINY BUT MIGHTY: A SOFTWARE-HARDWARE CO- DESIGN APPROACH FOR EFFICIENT MULTIMODAL IN- FERENCE ON BATTERY-POWERED SMALL DEVICES](/audio-paper-digest-blog/posts/2026-05-02-tiny-but-mighty-a-software-hardware-co-design)

✅ **7.0/10** | 前25% | #多模态模型 | #实时处理 | #多通道 #开源工具

👥 **作者与机构**

- 第一作者：Yilong Li（University of Wisconsin – Madison）
- 通讯作者：未说明
- 作者列表：Yilong Li（University of Wisconsin – Madison）、Shuai Zhang（Amazon Web Services AI）、Yijing Zeng（University of Wisconsin – Madison）、Chengpo Yan（University of Wisconsin – Madison）、Hao Zhang（University of Wisconsin – Madison）、Xinmiao Xiong（University of Wisconsin – Madison）、Jingyu Liu（University of Wisconsin – Madison）、Pan Hu（Uber）、Suman Banerjee（University of Wisconsin – Madison）

💡 **毒舌点评**

这篇论文亮点在于提出了一个完整的、软硬件协同设计的系统框架（NANOMIND），并通过自研硬件原型机验证了其在电池供电设备上运行多模态大模型的可行性，实测的能效比数据（降低42.3%能耗）很有说服力。短板在于其对比实验主要聚焦于自身设计的硬件平台与不同软件框架的对比，缺乏与当前主流商用边缘设备（如最新款旗舰手机）上SOTA框架的公平、全面比较，这削弱了其结论的普适性和说服力。

🔗 **开源详情**

- 代码：论文中未提及NANOMIND框架本身的代码仓库链接。
- 模型权重：论文中未提及公开的、经过其框架优化后的模型权重。
- 数据集：实验使用了公开的基准数据集（InfoVQA, DocVQA, MMBench, MME），但论文未提供额外数据集。
- Demo：论文展示了硬件原型机（图11），但未提供在线演示或远程访问方式。
- 复现材料：论文提供了硬件设计框图（图4）、部分内核设计思路和性能数据，但未给出完整的构建指南、驱动源码、内核实现或检查点。
- 论文中引用的开源项目：llama.cpp, Whisper.cpp, Piper, Rockchip RKNN Toolkit2, Qualcomm AI Hub。
- 开源计划：论文中未提及开源计划。

📌 **核心摘要**

1. 问题：现有的大型多模态模型（LMM）在电池供电的小型设备上部署时，通常以单一整体方式运行，无法充分利用现代SoC中的异构加速器（NPU、GPU等），导致延迟高、能效低。
2. 方法核心：提出NANOMIND框架，核心是将LMM分解为独立的模块（如视觉编码器、语言解码器），并根据硬件特性（如NPU擅长低比特运算、GPU擅长并行浮点计算）将其动态调度到最合适的加速器上执行。同时，设计了专用硬件（基于RK3566 SoC）和配套的软件优化（如零拷贝的Token感知缓冲区管理器TABM、定制的低比特GEMM内核、电池感知调度策略）。
3. 与已有方法相比新在哪里：突破了现有框架（如llama.cpp）将模型视为单一负载在单个加速器上运行的局限，实现了跨异构加速器的模块级动态卸载。此外，它针对统一内存（UMA）架构进行了系统级优化，避免了传统PC架构设计在移动设备上的低效问题。
4. 主要实验结果：
    - 与使用llama.cpp的框架相比，NANOMIND将能耗降低了42.3%，GPU内存使用减少了11.2%。
    - 在一个2000mAh电池供电的原型设备上，低功耗模式下可运行近20.8小时。
    - 在Orange Pi 5（RK3588）上运行Qwen2-1.5B-W8A8模型时，其定制GPU内核的吞吐量（tok/s）高于llama.cpp、MLC-LLM和PowerInfer-2。
    - 运行Qwen2-VL-2B-Instruct模型，NANOMIND的端到端延迟比Orange Pi 5 Ultra使用官方rkllm降低了36.2%。
    （实验结果图表见下文“实验结果”部分）
5. 实际意义：为在严格资源受限的电池供电小型设备上部署隐私优先、低延迟的多模态AI助手提供了可行的软硬件协同设计方案，有助于推动边缘端AI的普及。
6. 主要局限性：框架目前主要在定制的RK3566/RK3588硬件上实现和验证，在其他商用SoC（如高通、苹果）上的支持仍在开发或仅为部分支持。与最先进商用设备上的框架对比不够充分。开源情况不明，复现门槛较高。

---

