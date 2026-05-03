---
title: "ICLR 2026 - 多模态模型 论文列表"
date: 2026-05-03
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
| 🥇 | [From Natural Alignment to Conditional Controllability in Mul](/audio-paper-digest-blog/posts/2026-05-03-from-natural-alignment-to-conditional) | 8.5分 | 前25% |
| 🥈 | [OptMerge: Unifying Multimodal LLM Capabilities and Modalitie](/audio-paper-digest-blog/posts/2026-05-03-optmerge-unifying-multimodal-llm-capabilities-and) | 8.3分 | 前25% |
| 🥉 | [Learning multimodal dictionary decompositions with group-spa](/audio-paper-digest-blog/posts/2026-05-03-learning-multimodal-dictionary-decompositions) | 8.0分 | 前25% |
| 4. | [NExT-OMNI: Towards Any-to-Any Omnimodal Foundation Models wi](/audio-paper-digest-blog/posts/2026-05-03-next-omni-towards-any-to-any-omnimodal-foundation) | 8.0分 | 前25% |
| 5. | [AVERE: Improving Audiovisual Emotion Reasoning with Preferen](/audio-paper-digest-blog/posts/2026-05-03-avere-improving-audiovisual-emotion-reasoning) | 8.0分 | 前25% |
| 6. | [MIAM: Modality Imbalance-Aware Masking for Multimodal Ecolog](/audio-paper-digest-blog/posts/2026-05-03-miam-modality-imbalance-aware-masking-for) | 7.5分 | 前25% |
| 7. | [TINY BUT MIGHTY: A SOFTWARE-HARDWARE CO- DESIGN APPROACH FOR](/audio-paper-digest-blog/posts/2026-05-03-tiny-but-mighty-a-software-hardware-co-design) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [From Natural Alignment to Conditional Controllability in Multimodal Dialogue](/audio-paper-digest-blog/posts/2026-05-03-from-natural-alignment-to-conditional)

🔥 **8.5/10** | 前25% | #多模态模型 | #预训练 | #语音合成 #视频生成

👥 **作者与机构**

- 第一作者：Zeyu Jin (清华大学计算机科学与技术系)
- 通讯作者：Xiaoyu Qin (清华大学计算机科学与技术系)，Jia Jia (清华大学计算机科学与技术系, BNRist)
- 作者列表：Zeyu Jin (清华大学计算机科学与技术系)，Songtao Zhou (清华大学计算机科学与技术系)，Haoyu Wang (清华大学计算机科学与技术系)，Minghao Tian (Rice University)，Kaifeng Yun (清华大学深圳国际研究生院)，Zhuo Chen (ByteDance)，Xiaoyu Qin (清华大学计算机科学与技术系)，Jia Jia (清华大学计算机科学与技术系, BNRist)

💡 **毒舌点评**

**亮点**��这篇论文最大的贡献是提出了一个从“数据-任务-评估”全链路出发的系统性解决方案，其精心设计的MM-DIA数据集及其情感三元组/自由描述的标注范式，为“可控”和“富有表现力”的多模态对话生成提供了稀缺的基础设施。**短板**：论文更像是一个出色的“数据工程”和“基准构建”工作，而非模型架构的突破；其在三个下游任务上的实验主要验证了数据集的有效性，但并未提出新的端到端生成模型，对跨模态一致性这一核心难题的解决方案仍显不足，更多是暴露了问题。

🔗 **开源详情**

- **代码**：论文在摘要中提供了项目主页链接（https://github.com/jessyjinzy/MM-Dia），并在结论部分提到“实验代码和数据策展流水线将在论文被接收后公开”，表明**计划开源**。
- **模型权重**：论文中未提及是否公开微调后的模型权重（如Higgs-Audio-V2-SFT）。
- **数据集**：MM-DIA数据集**计划公开**。论文提供了详细统计信息，并说明将公开标注信息（如转录、情感三元组、对话描述、说话人身份、带活跃说话人的关键帧等），但不直接发布原始视频/音频片段。研究者需自行获取对应媒体内容并与提供的时间戳对齐。
- **Demo**：论文提供了一个演示页面链接（https://mmdiaiclr26.github.io/mmdiaiclr26/），用于展示模型在Out-of-Domain场景下的控制效果。
- **复现材料**：论文提供了详尽的附录，包含数据处理流水线的具体实现细节（如字幕校准、缓冲机制伪代码）、评估协议、指标解释以及部分实验结果的补充表格。这为复现提供了很好的指引，但关键模型训练的超参数未说明。
- **论文中引用的开源项目**：引用了Higgs-Audio-V2, Dia, CosyVoice, UTMOS, InsightFace, Gemini等模型和工具作为基线或组件。
- **总体开源计划**：论文中明确提及了在接收后开源数据集和代码的计划，因此属于“是”。

📌 **核心摘要**

1.  **问题**：现有的多模态对话生成研究侧重于单一模态的逼真性，忽略了跨模态交互风格的系统建模，导致生成内容表现力和可控性不足。主要瓶颈在于缺乏高质量、带细粒度交互标注的原生多模态对话数据集和系统性评估基准。
2.  **方法核心**：提出了一套从电影/电视中自动提取并标注多模态对话的流程，构建了大规模数据集MM-DIA（360+小时，5.47万段对话）。创新性地定义了两种互补的对话表现力标注范式：“情感三元组”（结构化标签）和“自由描述”（自然语言描述）。基于此，将多模态对话生成（MDG）形式化为条件生成任务，并定义了风格可控对话语音合成（显式控制）、视觉条件对话语音合成和语音驱动对话视频生成（隐式控制）三个任务。
3.  **创新点**：首次提出关注“对话级”跨模态表现力的多模态对话数据集构建框架；设计了两种灵活可控的标注范式以支持细粒度风格控制；建立了首个专注于评估跨模态风格一致性的基准MM-DIA-BENCH。
4.  **实验结果**：在显式控制任务上，基于MM-DIA微调的模型（如Higgs-Audio-V2-SFT）在WER（从31.3降至4.5）和对话质量指标上显著提升。在隐式控制任务上，基准测试MM-DIA-BENCH揭示了当前模型在维持跨模态风格一致性（如音视频一致性）方面的明显不足（例如，视觉条件语音合成的指令遵循得分从显式控制的4.7降至隐式控制的3.5左右）。
5.  **实际意义**：为可控的多模态内容生成（如影视制作、数字人交互）提供了关键数据与评估工具，推动了该领域向更自然、更可控的方向发展。
6.  **主要局限性**：1）数据来源于电影电视，可能存在分布偏移，与日常对话有差异；2）当前评估主要依赖Gemini作为评判，人工评估规模有限；3）论文未提出新的端到端生成模型，主要验证数据效用，解决跨模态一致性挑战仍需进一步工作。

---

### 🥈 [OptMerge: Unifying Multimodal LLM Capabilities and Modalities via Model Merging](/audio-paper-digest-blog/posts/2026-05-03-optmerge-unifying-multimodal-llm-capabilities-and)

🔥 **8.3/10** | 前25% | #多模态模型 | #模型合并 | #低秩适应 #基准测试

👥 **作者与机构**

- 第一作者：Yongxian Wei（清华大学）
- 通讯作者：Chun Yuan（清华大学）
- 作者列表：Yongxian Wei（清华大学），Runxi Cheng（清华大学），Weike Jin（华为诺亚方舟实验室），Enneng Yang（中山大学），Li Shen（中山大学），Lu Hou（华为诺亚方舟实验室），Sinan Du（清华大学），Chun Yuan（清华大学），Xiaochun Cao（中山大学），Dacheng Tao（南洋理工大学）

💡 **毒舌点评**

**亮点**：填补了多模态大语言模型（MLLM）领域缺乏标准化模型合并基准的空白，OptMerge方法通过针对性地优化任务向量交互，在能力和模态合并上均取得了稳定且具有竞争力的性能提升。  
**短板**：整个工作（包括基准构建、方法设计、实验评估）高度偏向视觉-语言模态，与音频/语音领域的交叉点仅在于模态合并的概念层面，缺乏直接的音频任务验证，对本领域读者的即时启发性有限。

🔗 **开源详情**

- **代码**：论文明确声明“All code and checkpoints are publicly available here.”，表明计划开源代码仓库，但文中提供的链接为占位符，**未提供具体代码仓库链接**。
- **模型权重**：论文提到会公开所有检查点（checkpoints），但**未提供具体的模型权重下载地址**。
- **数据集**：论文中详细列出了用于训练和评估的各个公开数据集（如表1所示），并说明将公开其收集的训练数据。因此，**数据集是公开可获取的**。
- **Demo**：**论文中未提及**提供在线演示。
- **复现材料**：论文在附录和正文提供了非常详细的复现信息，包括：基准构建流程、数据预处理、所有训练和优化的超参数（学习率、优化器、迭代次数、warmup比例等）、硬件配置（8×V100）、评估工具（VLMEvalKit, LMMs-Eval）等。这构成了完整的复现指南。
- **论文中引用的开源项目**：论文依赖并引用了多个开源项目作为基础，包括：基础模型（InternVL2.5, Qwen2-VL, Vicuna），评估工具（VLMEvalKit, LMMs-Eval），以及相关的模型合并研究（Task Arithmetic, TIES-Merging, DARE, WUDI Merging等）。

📌 **核心摘要**

1. **问题**：模型合并（Model Merging）作为一种无需额外训练数据即可整合多个专家模型能力的技术，在多模态大语言模型（MLLM）领域缺乏系统性的基准研究。现有MLLM合并方法（如AdaMMS, UQ-Merge）存在限制，例如只能合并两个模型、需要测试集、或对任务划分不够精细。
2. **方法核心**：论文提出了OptMerge方法，旨在改进基于任务向量（Task Vector）的优化式合并。针对全量微调模型，OptMerge通过低秩近似去除任务向量中的噪声和冗余，然后优化一个基于任务向量交互（用SVD截断后的主成分表示输入子空间）的损失函数。针对LoRA微调模型，OptMerge采用SGD优化器（而非Adam）以避免梯度在零空间停滞，并用任务向量均值初始化合并向量，以控制其幅值增长。
3. **新在哪里**：
   * 提出了第一个专注于MLLM能力（VQA、几何、图表、OCR、定位）和模态（视觉-语言、音频-语言、视频-语言）合并的基准。
   * 提出了OptMerge方法，其核心创新是通过任务向量去噪和针对LoRA特性的优化策略，提升了合并的稳定性和最终性能。
   * 从理论上分析了微调的学习率和迭代次数如何通过跨任务干扰和曲率误差影响合并性能上限（定理3.1）。
4. **主要实验结果**：
   * **能力合并**：在InternVL2.5（全量微调）和Qwen2-VL（LoRA微调）基准上，OptMerge平均性能分别比最强基线高0.44%和4.65%，甚至接近或超过使用所有数据混合训练的模型（表2, 3）。
   * **模态合并**：将视觉、音频、视频语言模型合并为Omni语言模型，在Audio-VQA任务上平均性能优于任何单模态模型（66.88 vs. 最高64.11），并优于在线组合方法（表5）。
   * **通用任务**：合并后的模型在需要多种能力的通用多模态问答基准（如MMMU, DocVQA）上，平均性能比最好的单能力专家模型高10.85%（表10）。
   * **效率**：与混合训练相比，OptMerge在计算时间（小时级 vs. 20+小时）和GPU内存占用（个位数GB vs. 200+GB）上具有巨大优势（表7）。
5. **实际意义**：提供了一种高效、低成本、无需训练数据的后验方法，用于构建更强大的多模态大语言模型。它促进了开源社区去中心化开发的模型的整合，为构建全模态（Omni）模型提供了可行路径。
6. **主要局限性**：实验主要限于7B参数级别的模型。收集的公开训练数据可能包含低质量样本。基准评估集中在视觉-语言任务，对其他模态（如本文涉及的音频、视频）的评估深度有限。

---

### 🥉 [Learning multimodal dictionary decompositions with group-sparse autoencoders](/audio-paper-digest-blog/posts/2026-05-03-learning-multimodal-dictionary-decompositions)

🔥 **8.0/10** | 前25% | #多模态模型 | #自编码器 | #零样本 #音乐理解

👥 **作者与机构**

- 第一作者：Chiraag Kaushik（佐治亚理工学院电气与计算机工程学院）
- 通讯作者：Davis Barch（Dolby Laboratories）， Andrea Fanelli（Dolby Laboratories）
- 作者列表：Chiraag Kaushik（佐治亚理工学院电气与计算机工程学院）、Davis Barch（Dolby Laboratories）、Andrea Fanelli（Dolby Laboratories）

💡 **毒舌点评**

本文对音频-文本多模态嵌入（CLAP）的SAE分析是填补领域空白的扎实工作，且所提出的分组稀疏方法在多个跨模态任务上带来了显著且一致的提升。但论文在“概念”的具体语义解释和“多模态对齐”为何导致性能提升的机理剖析上，仍停留在相关性描述，未深入到模型内部动力学层面。

🔗 **开源详情**

- **代码**：论文中未提及提供本研究提出的组稀疏自编码器（GSAE/MGSAE）的实现代码链接。但论文引用了用于基线SAE训练的开源代码库（Marks et al., 2024）。
- **模型权重**：未提及公开本研究训练的GSAE/MGSAE模型权重。
- **数据集**：使用了公开数据集（CC3M, JamendoMaxCaps, MusicBench, MS COCO等），未提供新数据集。
- **Demo**：未提供在线演示。
- **复现材料**：在附录A.2中提供了详细的实验设置，包括超参数选择过程（λ, p, K, 扩展因子）、训练步数、数据集描述、以及用于概念命名的词汇表来源。这为复现提供了充分信息，但缺少最终训练脚本和配置文件。
- **引用的开源项目**：引用了字典学习代码库（Marks et al., 2024），以及SAE变体的实现（BatchTopK SAE， Matryoshka SAE）。
- **论文中未提及开源计划**：对于本文核心贡献的代码和模型，未明确提及是否开源。

📌 **核心摘要**

1.  **问题**：标准稀疏自编码器（SAE）应用于CLIP等多模态嵌入空间时，会学习到“分裂字典”，即绝大多数特征（神经元）仅对单一模态激活，破坏了跨模态语义对齐，限制了其在跨模态任务中的可解释性与控制能力。
2.  **方法核心**：提出分组稀疏自编码器（GSAE/MGSAE），核心是在训练损失中加入**分组稀疏（L2,1范数）正则项**，强制成对的跨模态样本（如图像-文本对）的稀疏编码具有重叠的支撑集。同时，引入**跨模态随机掩码**技术，进一步促使编码器利用共享的特征维度，并减少死神经元。
3.  **创新点**：
    - 首次从理论上证明（定理1）：在对齐的嵌入空间上，存在一个分裂字典就必然存在一个模态对齐更好的非分裂字典。
    - 提出了新的评估指标**多模态单义性分数（MMS）**，可同时量化单个神经元的语义性和跨模态性。
    - 将组稀疏学习与掩码技术结合应用于多模态嵌入分解，并验证了其有效性。
4.  **主要实验结果**：
    - 在**CLIP（图像-文本）和CLAP（音频-文本）** 嵌入上，MGSAE相比标准SAE，**多模态激活神经元数量显著增加，死神经元大幅减少**（图3）。
    - MMS分数表明MGSAE学到了更多高语义性、跨模态的概念特征（图4）。
    - **零样本跨模态任务性能大幅提升**：在CIFAR-10/100、ImageNet分类上，MGSAE比标准SAE提升最高达18.5个百分点；在音乐/文本任务上，MGSAE性能接近甚至超越原始CLAP嵌入（表1、表2）。
    - 案例研究显示，MGSAE能更准确地识别线性分类器依赖的“金发”概念，并发现潜在的性别偏见（图5）；在CLAP上可实现有效的文本到音乐检索引导（图7）。
5.  **实际意义**：为理解和控制多模态表示空间提供了更强大的工具，使得通过操作稀疏编码来实现跨模态生成、检索和公平性分析成为可能。
6.  **主要局限性**：所提出的方法严重依赖**成对的多模态数据**；对于未配对数据如何利用（尽管文末提及）未做深入研究；对“概念”的自动命名（图5）仍依赖外部模型（CLIP），存在噪声。

---

### 4. [NExT-OMNI: Towards Any-to-Any Omnimodal Foundation Models with Discrete Flow Matching](/audio-paper-digest-blog/posts/2026-05-03-next-omni-towards-any-to-any-omnimodal-foundation)

🔥 **8.0/10** | 前25% | #多模态模型 | #流匹配 | #语音合成 #音频生成

👥 **作者与机构**

- 第一作者：Run Luo（中国科学院深圳先进技术研究院，中国科学院大学）
- 通讯作者：Xiaobo Xia（新加坡国立大学，中国科学技术大学），Min Yang（中国科学院深圳先进技术研究院，深圳大学高等研究院）
- 作者列表：Run Luo（中国科学院深圳先进技术研究院，中国科学院大学）、Xiaobo Xia（新加坡国立大学，中国科学技术大学）、Lu Wang（Rtizz-AI）、Longze Chen（中国科学院深圳先进技术研究院，中国科学院大学）、Renke Shan（Rtizz-AI）、Jing Luo（中国科学院深圳先进技术研究院，中国科学院大学）、Min Yang（中国科学院深圳先进技术研究院，深圳大学高等研究院）、Tat-Seng Chua（新加坡国立大学）

💡 **毒舌点评**

**亮点**：这篇论文为多模态统一建模提供了一个异常干净且强大的新范式——用DFM彻底取代AR，并通过统一的编码器与轻量头设计，首次在开源模型中实现了在理解、生成、交互和检索上的全面高分，架构的简洁性本身就很有说服力。**短板**：尽管在7B规模上验证了有效性，但论文缺乏在更大模型规模（如70B+）上的探索，其DFM范式在超大规模下是否依然高效稳定，以及能否真正挑战顶级闭源多模态模型的绝对性能，尚未可知。

🔗 **开源详情**

*   **代码**：提供完整代码仓库链接：https://github.com/ritzz-ai/Next-OMNI。
*   **模型权重**：论文中明确提到“fully open-source omnimodal foundation model”，表明模型权重已开源。
*   **数据集**：论文详细描述了所使用的公开数据集（如LAION, LibriSpeech等）及其规模，并在附录E中提供了更完整的列表。部分专有数据未公开。
*   **Demo**：论文中未提及在线演示链接。
*   **复现材料**：提供了极为详尽的训练细节（三阶段策略、损失函数、超参数）、模型设计（编码器、头结构）、数据集构建流程（附录D, E, F），以及消融实验配置，复现指导性很强。
*   **引用的开源项目**：依赖的主要开源项目包括：Qwen2.5系列（LLM基座）、CLIP-ViT（视觉编码器初始化）、Whisper-Turbo（音频编码器初始化）、VQ-VAE（量化工具）、FLUX（合成数据生成）等。

📌 **核心摘要**

1. 本文旨在解决现有自回归（AR）范式在统一多模态理解与生成任务中面临的内在冲突与架构冗余问题。
2. 方法核心是提出首个完全基于**离散流匹配（DFM）** 的全模态基础模型**NExT-OMNI**。它使用统一的模态编码器（支持理解与生成）和轻量级解码头，通过多层跨模态自注意力深度融合特征，并利用重建损失增强统一表示，最终在一个简洁的架构内支持任意模态间的理解与生成。
3. 与已有方法相比，新在：a) 首次将DFM完整应用于全模态统一建模；b) 抛弃了AR或AR+扩散的混合架构，采用单一DFM范式；c) 设计了重建增强的统一表示，无需多个编码器或复杂的解耦模块（如MoE）。
4. 主要实验结果（见表1、2、3、4）显示：在多模态理解（OmniBench, WorldSense, AV-Odyssey）上平均分39.7，超过SOTA模型OpenOmni的36.5；在语音交互（Spoken QA）、视觉交互（OpenING）和跨模态检索（InfoSeek, OVEN, FashionIQ, CIRR）任务上均达到或接近最优。消融实验（表5）证实了DFM、统一表示、动态生成策略和重建损失的关键作用。
5. 实际意义：为构建下一代全模态、高效率、支持广泛跨模态任务（包括检索）的基础模型提供了一个有前景的新范式，并通过开源推动该领域发展。
6. 主要局限性：模型规模受限于7B参数，未展示在更大规模下的性能；其多步去噪的推理延迟虽优于AR，但绝对速度是否满足实时交互需求需进一步验证。

---

### 5. [AVERE: Improving Audiovisual Emotion Reasoning with Preference Optimization](/audio-paper-digest-blog/posts/2026-05-03-avere-improving-audiovisual-emotion-reasoning)

🔥 **8.0/10** | 前25% | #多模态模型 | #强化学习 | #情感推理 #偏好优化

👥 **作者与机构**

- 第一作者：Ashutosh Chaubey（南加州大学，信息通信技术研究所）
- 通讯作者：Mohammad Soleymani（南加州大学，信息通信技术研究所）
- 作者列表：Ashutosh Chaubey（南加州大学，信息通信技术研究所）、Jiacheng Pang（未说明）、Maksim Siniukov（未说明）、Mohammad Soleymani（南加州大学，信息通信技术研究所）

💡 **毒舌点评**

**亮点**：本文的系统性值得称赞，不仅提出了针对具体问题（情感推理错误）的优化方法（AVEm-DPO），还配套设计了专门的评测基准（EmoReAlM），形成了一个“发现问题-量化问题-解决问题-验证效果”的闭环，这在应用驱动的研究中显得格外扎实。**短板**：核心方法（AVEm-DPO）本质上是现有技术（DPO、LoRA）在特定任务上的组合与适配，缺乏类似网络架构层面的根本性创新。此外，情感本身的标注和评估主观性很强，虽然用了人工验证，但基准的“正确性”仍存在灰色地带。

🔗 **开源详情**

- **代码**：论文中提到将开源代码，项目主页为 `avere-iclr.github.io`。
- **模型权重**：论文中提到将开源训练好的模型权重。
- **数据集**：EmoReAlM基准将开源（仅包含QA对，用户需自行获取原视频）。偏好优化数据未明确是否开源。
- **Demo**：未提及在线演示。
- **复现材料**：论文附录提供了极其详尽的复现信息，包括所有数据创建提示（B.1）、人类验证细节（B.2）、基准统计（B.3）、实现细节（C.3）、评估指标（D.1）、参考模型构建（D.2）、基线实现（D.3, D.4）以及消融实验设置（D.5）。
- **引用的开源项目**：Whisper (Radford et al., 2023), LanguageBind (Zhu et al., 2024), GPT-4o (OpenAI et al., 2024), Gemini 2.5 (Gemini-Team et al., 2025), Qwen2.5 (Qwen-Team et al., 2025), LoRA (Hu et al., 2022), Sentence-BERT (Reimers & Gurevych, 2019), BERTScore (Zhang et al.) 等。

📌 **核心摘要**

1. **问题**：多模态大语言模型在情感推理中存在两类关键错误：推理错误（将情感与无关视听线索错误关联）和感知错误（为解释情感而幻觉出不存在的视听线索，主要由语言模型的文本先验驱动）。
2. **方法核心**：提出AVEm-DPO偏好优化技术，包含三个关键组件：基于提示的模态偏好（PMP），强制模型对特定模态的查询基于正确模态输入生成响应；基于情感的响应偏好（ERP），构建针对虚假关联和幻觉的拒绝样本对；文本先验去偏（TPD），通过正则化惩罚仅基于文本先验生成的响应。同时，引入了包含4000个人工验证样本的EmoReAlM基准，用于系统评估上述问题。
3. **与已有方法相比新在哪里**：现有工作多关注通用多模态幻觉或情感识别，本文首次针对“情感推理”场景下的多模态特异性错误（跨模态诱导的幻觉、虚假线索关联）设计了专门的优化目标和评估体系。特别是TPD组件，明确针对语言模型骨干中的文本偏见。
4. **主要实验结果**：在EmoReAlM基准上，AVEm-DPO将参考基线模型的平均准确率提升了12.6%（相对）。在现有情感识别数据集（DFEW， RAVDESS）和推理数据集（EMER）的零样本评估中，也实现了显著提升（例如在DFEW上的UAR/WAR分别提升1.66%和4.10%）。消融实验显示，移除TPD会导致幻觉压力测试F1分数大幅下降。
5. **实际意义**：为构建更可靠、可解释的社交AI系统提供了方法论和评估工具。通过减少推理和感知错误，可以使模型的情感响应更真实地锚定在输入的多模态证据上。
6. **主要局限性**：基准和训练数据来源于现有数据集（如DFEW），可能存在文化偏差和时长限制（短视频）。模型对某些模糊情感（如厌恶）的识别仍有不足，且在缓解音频线索的虚假关联方面仍有提升空间。

---

### 6. [MIAM: Modality Imbalance-Aware Masking for Multimodal Ecological Applications](/audio-paper-digest-blog/posts/2026-05-03-miam-modality-imbalance-aware-masking-for)

✅ **7.5/10** | 前25% | #多模态模型 | #自监督学习 | #数据增强 #鲁棒性

👥 **作者与机构**

- 第一作者：Robin Zbinden（洛桑联邦理工学院，EPFL）
- 通讯作者：Robin Zbinden（robin.zbinden@epfl.ch）
- 作者列表：Robin Zbinden（洛桑联邦理工学院，EPFL）、Wesley Monteith-Finas（洛桑联邦理工学院，EPFL，共同第一作者）、Gencer Sumbul（洛桑联邦理工学院，EPFL）、Nina van Tiel（洛桑联邦理工学院，EPFL）、Chiara Vanalli（洛桑联邦理工学院，EPFL）、Devis Tuia（洛桑联邦理工学院，EPFL）

💡 **毒舌点评**

本文精准地抓住了多模态生态建模中“模态不平衡”这个痛点，并用一套优雅的数学框架（混合Beta乘积分布）和动态调整机制来解决，理论自洽且实验扎实；但将如此通用的方法论首先应用于相对垂直的生态领域，可能会让更广泛的机器学习社区关注度打折扣，其在通用视觉-语言任务上的潜力有待进一步验证。

🔗 **开源详情**

- **代码**：提供GitHub仓库链接 `https://github.com/zbirobin/MIAM`。
- **模型权重**：提供HuggingFace链接 `https://huggingface.co/zbirobin/MIAM`，已公开。
- **数据集**：GeoPlant和TaxaBench均为公开数据集，论文提供了获取指引和划分代码（图7，图8）。
- **Demo**：论文中未提及在线演示。
- **复现材料**：提供了完整的训练细节、配置、超参数（附录A.1）、数据划分代码，以及敏感性分析结果（图10，图11），复现支持非常充分。
- **论文中引用的开源项目**：使用了verde库进行空间块交叉验证，采用了AdamW优化器和schedule-free训练策略。

📌 **核心摘要**

1. **解决问题**：多模态生态应用（如物种分布建模）常面临数据在跨模态和模态内均不完整的问题，且不同模态间存在**模态不平衡**（主导模态阻碍其他模态优化）。现有掩码策略（如均匀、狄利克雷分布）无法充分探索输入组合空间，且静态分布无法适应训练动态，未能有效解决此挑战。
2. **方法核心**：提出**MIAM（模态失衡感知掩码）**，一种动态掩码策略。它通过**混合Beta乘积分布**定义掩码概率，在超立方体上满足三个原则：(i) **全覆盖**（任何输入组合概率非零），(ii) **角优先**（频繁采样接近全保留或全掩码的组合，尤其强调全空和全满两个角），(iii) **失衡感知**（根据各模态的相对性能和学习速度动态调整其被掩码的概率）。
3. **创新点**：与以往静态或仅调整模态级概率（如OPM）的方法相比，MIAM首次将掩码分布正式化为概率分布，并引入了基于**性能得分（sm）**和**性能变化率（dm）**的动态、细粒度（token级）调整机制，能更有效地平衡主导与弱势模态的学习。
4. **主要实验结果**：在GeoPlant（物种分布预测）和TaxaBench（物种分类）两个多模态生态数据集上，MIAM在所有输入子集的平均性能上均优于现有掩码策略（如均匀、Dirichlet、Modality dropout、OPM）。具体见下表：

| 方法 | GeoPlant 平均 AUC | TaxaBench 平均 Top-1 Accuracy |
| :--- | :---: | :---: |
| Constant | 80.4 | - |
| Uniform | 83.2 | 37.7 |
| Dirichlet | 80.6 | 37.4 |
| Modality dropout | 81.5 | 35.9 |
| OPM | 83.8 | 31.2 |
| **MIAM (ours)** | **86.1** | **38.7** |
| Oracle (上限) | 87.2 | 40.0 |

MIAM显著缩小了与Oracle（每种输入子集单独训练的模型）的差距，尤其在原本受模态不平衡影响严重的单模态（如卫星影像）评估中提升显著。
5. **实际意义**：MIAM不仅提升了模型在不完整数据上的鲁棒性和预测性能，其动态掩码机制还支持**细粒度贡献分析**（如图5所示，揭示了NDVI相关波段和历史极端气候事件的关键作用），为生态决策提供了可解释性工具。
6. **主要局限性**：方法引入了额外的超参数（λ, κ）和每个epoch计算模态性能的计算开销；动态调整依赖于验证集性能，其有效性可能对验证数据质量敏感；虽然提出了自监督学习的初步尝试，但核心实验均基于有标签数据，在无监督或跨领域通用性上未充分验证。

---

### 7. [TINY BUT MIGHTY: A SOFTWARE-HARDWARE CO- DESIGN APPROACH FOR EFFICIENT MULTIMODAL IN- FERENCE ON BATTERY-POWERED SMALL DEVICES](/audio-paper-digest-blog/posts/2026-05-03-tiny-but-mighty-a-software-hardware-co-design)

✅ **7.5/10** | 前25% | #多模态模型 | #系统优化 | #边缘计算 #模型压缩

👥 **作者与机构**

- 第一作者：Yilong Li（University of Wisconsin – Madison）
- 通讯作者：未说明
- 作者列表：Yilong Li¹, Shuai Zhang², Yijing Zeng¹, Chengpo Yan¹, Hao Zhang¹, Xinmiao Xiong¹, Jingyu Liu¹, Pan Hu³, Suman Banerjee¹ （¹University of Wisconsin – Madison, ²Amazon Web Services AI, ³Uber）

💡 **毒舌点评**

亮点在于提出并验证了一个从模型分解、跨加速器调度到定制硬件的完整端到端软硬件协同设计框架，让一个不到12美元的低功耗SoC跑起了多模态大模型，这种“螺丝壳里做道场”的系统工程能力值得肯定。短板则是该框架深度绑定了特定的开源芯片（RK3566）和工具链，其“不绑定特定SoC”的宣称在论文中更多是愿景而非扎实的跨平台实验验证，限制了工作的即时通用影响力。

🔗 **开源详情**

- **代码**：论文中未提及提供NANOMIND框架的开源代码仓库链接。它明确引用了作为基础或对比的开源项目：llama.cpp, whisper.cpp, Piper, MLC-LLM, PowerInfer-2, NanoVLM。
- **模型权重**：未提及提供经其框架优化或训练的模型权重。使用的模型（如LLaVA-OneVision， Qwen2-VL）来自Hugging Face等平台。
- **数据集**：未提供新数据集。评估使用了公开基准数据集：InfoVQA, DocVQA, MMBench, MME。
- **Demo**：论文展示了在定制硬件原型（PCB， 头带设备）上的运行效果（Fig. 11, 12），但未提及提供在线演示或远程访问。
- **复现材料**：论文详细描述了硬件设计（SoC选型， 内存并联， PMU）、软件架构、TABM机制、功耗管理策略和内核优化思路，为复现提供了较高层次的蓝图，但缺乏具体的代码、配置文件和硬件制造文件。
- **论文中引用的开源项目**：llama.cpp, whisper.cpp, Piper, MLC-LLM, RKNN Toolkit2, Hugging Face模型库中的多个模型。

📌 **核心摘要**

1.  **解决的问题**：如何在电池供电的、资源受限的小型边缘设备上，高效、低功耗地运行大型多模态模型（LMMs），以解决云端部署的隐私和延迟问题，同时克服现有软件/算法优化（如量化）无法充分利用SoC异构计算单元（NPU、GPU）的缺陷。
2.  **方法核心**：提出了NANOMIND框架，通过软件-硬件协同设计。核心是将LMM分解为独立的“模块砖块”（视觉编码器、语言解码器等），并基于统一内存架构，将每个模块动态调度到最适合的加速器（如NPU跑视觉编码，GPU跑语言解码）上执行。
3.  **与已有方法相比新在哪里**：超越了单纯的模型压缩或单一加速器部署，转向**系统级**的模块化分解与跨加速器动态调度。它设计了一整套协同机制：定制硬件（并行内存、专用PMU）、零拷贝的Token感知缓冲区管理器（TABM）实现高效嵌入传递、针对硬件优化的计算内核（如GPU上的融合反量化-GEMM内核），以及基于电池状态的动态执行策略。
4.  **主要实验结果**：在基于RK3566的定制设备上，运行LlaVA-OneVision-qwen2-0.5B模型：
    *   **能耗**：相比基线（llama.cpp）降低42.3%。
    *   **内存**：GPU内存使用减少11.2%。
    *   **续航**：在低功耗按需推理模式下，使用2000mAh电池可连续运行约20.8小时。
    *   **性能**：在Qwen2-VL-2B模型上，端到端延迟比使用RK3588的Orange Pi 5 Ultra降低36.2%，吞吐量与Jetson Nano（使用NanoVLM）相当（约35.7 tok/s）。
5.  **实际意义**：证明了在严格成本与功耗约束的边缘硬件上，通过深度的软硬件协同设计，实现具备视觉、语音交互能力的独立智能助手的可行性，为隐私优先的离线多模态AI应用铺平了道路。
6.  **主要局限性**：框架在当前形态下与特定硬件（Rockchip RK3566/RK3588）及工具链（RKNN）耦合较深；论文主要验证了0.5B-2B级别的小模型，对于更大规模模型的适用性未探索；跨平台（如Qualcomm、Apple Silicon）的兼容性停留在初步讨论阶段。

---

