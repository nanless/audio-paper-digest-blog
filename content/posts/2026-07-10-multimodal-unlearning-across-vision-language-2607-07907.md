---
title: "Multimodal Unlearning Across Vision, Language, Video, and Audio: Survey of Methods, Datasets, and Benchmarks"
date: 2026-07-10
draft: false
tags: [Transformer, 多模态模型, 模型评估, 数据集, 基准测试]
categories: [论文速递]
description: "多模态模型 | 6.9/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2607.07907"
---

# 📄 Multimodal Unlearning Across Vision, Language, Video, and Audio: Survey of Methods, Datasets, and Benchmarks

标签：#Transformer #多模态模型 #模型评估 #数据集 #基准测试

**6.9/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 0.5/1.5 | 开源 1.5/1.5 | 复现 0.3/0.5 | 工程 0.6/1.5

✅ **6.9/10** | 前50% | 文档类型：综述 | 评分置信度：高 | #多模态模型 | #Transformer | #模型评估 #数据集 | [arxiv](https://arxiv.org/abs/2607.07907)


### 👥 作者与机构

- 第一作者：Nobin Sarwar（马里兰大学巴尔的摩县分校）
- 通讯作者：未说明
- 作者列表：Nobin Sarwar（马里兰大学巴尔的摩县分校）、Shubhashis Roy Dipta（马里兰大学巴尔的摩县分校）、Zheyuan Liu（圣母大学）、Vaidehi Patil（北卡罗来纳大学教堂山分校）

### 💡 毒舌点评

这篇综述最大的亮点在于其“系统第一”的分类视角，试图为跨模态的遗忘学习建立一个从数据到推理的统一技术栈，这比传统的算法中心分类更具工程洞察力。然而，其最大的硬伤在于其宣称的“跨视觉、语言、视频、音频”四大模态覆盖名不副实。尽管框架摆在那里，但对音频和视频模态的方法、数据集、评估的深入剖析和案例分析严重不足，更像是一种为了满足“四大模态”标签而进行的例行列举，而非平衡的深度综述。这使得其宣称的价值大打折扣，尤其对音频/音乐领域的研究者而言，参考价值有限。

### 📌 核心摘要

本文是一篇关于多模态基础模型（包括VLM、DM、LLM、AFM）中“多模态遗忘学习”的综合性综述。其核心目标是提供一个统一的系统性框架，以选择性地移除模型中敏感、版权或有害的跨模态关联，同时保留整体效用。论文的主要贡献是提出并详细阐述了一个“系统第一”的分类体系，该体系按照干预阶段（数据侧、训练时、架构约束、训练无关、解码时）和控制路径来组织现有方法。论文还系统性地梳理了相关的数据集、评估基准和指标体系，并指出了理论保证缺失、跨模态泛化困难、评估不可靠、对抗鲁棒性不足、效用权衡以及统一基准缺乏六大关键挑战。本文未提出新算法或进行新实验，其“方法”即为这套分类框架及文献综合分析。论文的实际意义在于为快速发展的多模态遗忘学习领域提供了一个导航地图和未来研究路线图。

### 🔗 开源详情

- 代码：https://github.com/smsnobin77/Awesome-Multimodal-Unlearning/
- 模型权重：论文中未提及提出新模型，故无。
- 数据集：论文中未提出新的基准数据集。论文中列举并引用了多个用于评估多模态遗忘的现有公开数据集（如 CelebA, UCF101, MU-Bench, MLLMU-Bench 等），但这些数据集均由其他工作提出，本论文仅作为综述引用。
- Demo：论文中未提及
- 复现材料：论文中未提及除上述代码仓库外的训练配置、检查点或其他具体复现材料。
- 论文中引用的开源项目：
  - **NudeNet**: https://github.com/bedapudi6788/NudeNet
  - **Cursor**: https://cursor.com/
  - **Grammarly**: https://grammarly.com/

### 🏗️ 方法概述和架构

本论文的核心方法论贡献是建立了一个用于系统性理解和比较“多模态遗忘学习”领域的分类框架。该框架摒弃了传统以优化目标为中心的“算法第一”视角，创新性地采用以模型部署流水线中干预点为核心的“系统第一”视角，将方法组织为一个从数据输入到最终输出的完整技术栈。

整体流程概述：该分类体系将遗忘学习方法按照其作用于多模态基础模型的阶段进行划分，形成一个覆盖模型生命周期的视图。输入是需要被遗忘的数据、概念或关联，输出是经过遗忘处理后的模型或生成内容。该框架的一级分类依据是遗忘目标范围（实例级或概念级），二级分类则按照干预阶段和控制机制展开。

主要组件/模块详解：
1.  **数据侧干预 (§3.1)**：作用于训练数据层面，阻止模型学习到目标内容。包含两个子类别：
    *   **数据路径扰动遗忘**：对训练数据（如图像、文本）施加受约束的扰动，使其“不可学习”，从而在源头上保护数据隐私或防止模型学习有害关联。输入是原始数据，输出是扰动后的、模型难以学习的数据。代表性工作包括UCs、MEM、UnSeg等。
    *   **数据卫生与提示规范化**：通过清洗训练数据或对输入提示进行规范化处理，以消除后门、触发词或偏差。主要操作是对可疑数据对进行降权或移除，以及将视觉或词汇相似的提示词映射到规范形式。代表性工作包括CleanCLIP、Homoglyph Bias等。
2.  **训练时编辑 (§3.2)**：在模型参数更新阶段进行干预。进一步细分为四个主要途径：
    *   **直接梯度法**：通过设计损失函数，显式地降低模型在遗忘集上的表现（遗忘项），同时优化保留集上的性能（保留项），并可能包含引导输出远离遗忘内容的重定向项和限制与参考模型偏差的正则化项。通用目标形式为\(J(\theta) = E(x_r,y_r) L_u + \alpha E(x_f,y_f) L_f + \beta D_a + \gamma \Omega(\theta, \theta_0)\)。
    *   **约束更新法**：将遗忘与保留的权衡显式化为带约束的优化问题。目标函数优化保留集上的风险和稳定性，同时通过约束条件强制遗忘效力和模型完整性。形式化为\(\min_\theta J_R(\theta) + \Omega(\theta, \theta_0) \text{ s.t. } C_f(\theta) \leq 0, C_i(\theta) \leq 0\)。
    *   **掩码驱动选择性遗忘**：遵循“定位-然后遗忘”范式，通过显著性、注意力或结构信息定位与遗忘信号最相关的参数、特征或区域（如空间区域、扩散时间步），并仅对这些部分进行更新，以限制附带影响。
    *   **蒸馏法**：利用教师-学生框架，引导学生模型向“安全”或“无害”的目标行为迁移，同时保留对非遗忘内容的能力。区别在于遗忘目标的定义和监督信号的获取方式。
3.  **架构约束遗忘 (§3.3)**：通过修改网络结构本身来限制遗忘信号的传播路径。包含：
    *   **架构编辑**：通过剪枝、冻结或受控再生来修改网络结构，直接干预计算图以限制编码遗忘信号的路径。包括模态感知剪枝、双层剪枝、适应关键张量冻结以及音频模型中的剪枝-再生策略等。
    *   **层作用域约束更新**：首先定位目标概念集中的层，然后将编辑限制在该层的支持范围内，以最小化参数漂移实现靶向移除。例如SLUG方法。
4.  **训练无关遗忘 (§3.4)**：通过闭式解操作直接编辑模型参数或表征，无需迭代优化。
    *   **权空间线性遗忘 (WLU)**：通过线性操作（如任务向量减法/取反、符号一致性聚合、检查点平均）修改参考检查点，抑制不需要的行为。公式为\(\theta' = f_{linear}(\theta_0)\)。特点是训练自由、可组合、易于逆转。
    *   **表征投影遗忘 (RPU)**：通过正交投影操作，在表征空间内移除与遗忘概念相关的子空间分量，而不直接更新模型参数。核心操作是\(h' = (I - U U^\top) h\)，其中\(U\)是遗忘子空间的基。
5.  **解码时遗忘 (§3.5)**：仅在推理阶段修改生成过程，不改变模型参数。
    *   **引导路径控制**：通过修改去噪采样过程中的得分函数来抑制目标概念。通用形式为\(\hat{\epsilon}_t = \epsilon_\theta(x_t, c) + a_t [\epsilon_{alt} - \epsilon_\theta] - b_t M_t d_t\)。
    *   **条件路径控制**：通过修改引导生成的条件信号（如文本嵌入）来生成更安全的条件。构造变换后的条件\(c' = (1 - \alpha) c + \alpha T(c, R, \text{policy})\)，然后在去噪步骤中使用\(s_\theta(x_t | c')\)。

组件间的数据流与交互：这五个类别共同覆盖了一个多模态模型从数据准备、训练、架构设计到最终推理的完整生命周期。它们提供了在不同技术栈层面实施遗忘的多种途径，可能相互补充而非互斥。数据侧干预和训练时编辑作用于训练阶段，架构约束和训练无关方法作用于模型结构或参数空间，解码时方法则完全作用于推理阶段。

关键设计选择及动机：选择“系统第一”的分类视角，动机在于传统的“算法中心”分类容易忽略方法在实际部署流水线中的作用位置、集成难度和计算开销。本文的分类旨在澄清不同方法的适用场景、技术开销（如是否需要重训练）以及在端到端系统中的互补性，为工程师和研究者提供更直观的“选型指南”和系统集成路线图。

专业术语解释：论文核心的自创术语是其分类体系本身。“训练无关遗忘”特指那些不需要反向传播迭代优化的方法，通过线性组合或投影等闭式操作直接编辑模型。“条件路径控制”指在生成模型的条件输入（如文本嵌入）上进行变换，引导生成过程避开有害概念。

非模型工作的处理：本文作为一篇综述，其“方法”就是这套分类框架及其配套的资源梳理（数据集、基准、指标）。论文通过详细描述各类别的定义、代表性工作、核心机制，并利用图表（如Figure 1, 2, 3）和表格（如Table 1, 3）将分散的研究系统化，这就是其架构的核心。

### 💡 核心创新点

1.  **提出“系统第一”的分类体系**：这是本文最核心的贡献。区别于以往按优化目标（如梯度反转、正则化）组织的“算法中心”综述，本文创新性地以多模态模型流水线中的“干预点”（数据、训练、架构、训练无关、解码）作为一级分类轴。这有助于读者理解不同方法在系统集成时的实际约束、计算开销和优劣，提供了更具工程指导意义的视角。
2.  **全面覆盖四大模态的框架性尝试**：首次尝试将视觉、语言、视频和音频的遗忘学习方法整合到一个统一框架下进行对比。尽管深度不均，但这种跨模态的梳理有助于发现通用原理和模态特有挑战，为拓宽领域视野做出了努力。
3.  **系统化的配套资源梳理**：论文不仅梳理方法，还系统归纳了多模态遗忘学习所需的数据集（按应用场景分类，如身份遗忘、安全鲁棒性）、评估基准（Table 3）和评估指标体系（Figure 3），并发布了一个策展的代码仓库，为后续研究提供了实用的起点。
4.  **明确的挑战与路线图总结**：清晰地总结了理论保证缺失、跨模态泛化困难、评估不可靠、对抗鲁棒性不足、效用权衡和统一基准缺乏六大挑战，并指出了时序动态模态、大模型扩展、持续遗忘等未来方向，为领域发展提供了明确指引。

### 📊 实验结果

本综述旨在系统化地总结和对比多模态遗忘领域的现有工作，其核心贡献在于提出一个统一的分类框架（如图1和图2所示），并梳理了该领域常用的数据集和评估基准。论文并未进行新的对比实验，因此不包含在统一数据集上不同遗忘方法性能数值的直接比较表格。以下内容严格基于论文原文中可见的、总结现有研究成果的表格。

**Table 1: Comparison of multimodal unlearning surveys across modalities and system-first taxonomy coverage.**

| Survey Venue & Year | System-first | Text | Image | Video | Audio |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Si et al., 2023 | arXiv’23 | ✔ | | | |
| Liu et al., 2024f | arXiv’24 | ✔ | ✔ | ✔ | |
| Blanco-Justicia et al., 2025 | AIR’25 | ✔ | ✔ | | |
| Liu et al., 2025b | NMI’25 | ✔ | | | |
| Feng et al., 2025b | arXiv’25 | ✔ | ✔ | ✔ | ✔ |
| Geng et al., 2025 | arXiv’25 | ✔ | ✔ | ✔ | |
| **Ours** | **ACL’26** | **✔** | **✔** | **✔** | **✔** |

**Table 2: Key datasets commonly used in multimodal unlearning. Datasets are grouped by unlearning setting (identity unlearning; affect and video unlearning) and modality, with their sizes and representative studies. Additional dataset categories are provided in Tables 4, 5, and 6 (App. A).**

| Modality | Dataset | Size | Used in |
| :--- | :--- | :--- | :--- |
| **Identity Unlearning** | | | |
| Image | CelebA (Liu et al., 2015) | 202,599 images | Dai and Gifford, 2023; Dontsov et al., 2024; Huang et al., 2024a; Cai et al., 2025; Zhang et al., 2024c; Liu et al., 2025c |
| Image | CelebA-HQ (Karras et al., 2018) | 30K high-quality images from CelebA | Huang et al., 2024a; Alberti et al., 2025; Nagasubramaniam et al., 2025 |
| Image | Flickr-Faces HQ (Karras et al., 2019) | 70K face images | Nagasubramaniam et al., 2025 |
| Image | CASIA-WebFace (Yi et al., 2014) | 494K face images | Dontsov et al., 2024 |
| Image | FairFace (Karkkainen and Joo, 2021) | 108,501 face images | Alabdulmohsin et al., 2024 |
| Image | MillionCelebs (Zhang et al., 2020) | 18.8M images of 636K identities | Dontsov et al., 2024 |
| Image | VGGFace2 (Cao et al., 2018) | 3.3M face images | Liu et al., 2024e; Li et al., 2025a |
| Image | PinsFaces (Burak, 2020) | 17.5K cropped face photos | Kravets and Namboodiri, 2025a,b |
| Audio | VoxCeleb1 (Nagrani et al., 2017) | 150K utterances from 1.3k speakers | Cheng and Amiri, 2025 |
| **Affect and Video Unlearning** | | | |
| Image | EmoSet (Yang et al., 2023) | 3.3M images, 118K human-labeled with emotion and attributes. | Zhou et al., 2024 |
| Image | UnBiasedEmo (Panda et al., 2018) | 3K affective images (6 emotion classes) | Zhou et al., 2024 |
| Video | UCF101 (Soomro et al., 2012) | 13K videos across 101 action classes | Cheng and Amiri, 2024a |

**Table 3: Representative multimodal unlearning benchmarks grouped by unlearning target, reporting modality, task type, scale, and evaluation objective. Multimodal refers to image, text, audio, and video.**

| Benchmark | Modality | Unlearning Target | Task Type | Key Statistics | Evaluation Objective |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Unified Benchmark Suites** | | | | | |
| MU-Bench (Cheng and Amiri, 2024a) | Multimodal | Mixed (instances, datasets, modalities) | Multi-task | 9 datasets, 20 architectures | Unified unlearning evaluation (efficacy, utility, efficiency) |
| MLLMU-Bench (Liu et al., 2025c) | VLM | Private data (fictitious & real identities) | Multi-task QA | 500 fictitious and 153 public celebrities, 20.7K QA pairs | Privacy unlearning across efficacy, generalization, utility |
| PEBench (Xu et al., 2025b) | VLM | Synthetic identities & events | Multi-task | 200 identities, 8K images, 16K QA pairs | Privacy and event unlearning with controlled scope and audits |
| UMU-Bench (Wang et al., 2025a) | VLM | knowledge instances | Multi-task | 500 fictitious, 153 real | Modality-aligned unlearning completeness and utility |
| **Identity and Privacy Unlearning** | | | | | |
| CLEAR (Dontsov et al., 2024) | VLM | Identity | VQA | 200 synthetic IDs, 3.7K images, 4K QA pairs | Identity leakage reduction with VQA accuracy retention |
| FIUBench (Ma et al., 2025) | VLM | Identity | VQA | 400 synthetic IDs, 8K QA pairs | Right-to-be-forgotten under privacy constraints |
| UnSLU-BENCH (Koudounas et al., 2025) | Audio | Speaker | Intent classification | Multi-speaker data, 4 languages | Speaker erasure with intent accuracy retention |
| **Content and Knowledge Unlearning** | | | | | |
| CPDM (Ma et al., 2024) | DM | Styles/portraits | Generation | 2.1K anchors, 18.9K generated images | Copyright similarity reduction with quality retention |
| UnlearnCanvas (Zhang et al., 2024d) | DM | Artistic styles | Generation | 60 styles, 20 objects, high-res stylized images | Style forgetting with retention and generation fidelity/diversity |
| Holistic Unlearning (Moon et al., 2025) | DM | Mixed concepts | Generation | 33 target concepts, 16k prompts per concept | Faithfulness, alignment, robustness, efficiency |
| Six-CD (Ren et al., 2025) | DM | Concept removal | Generation | Six concept categories, dual-version prompts | Cross category concept suppression with retainability checks |
| MMUBench (Li et al., 2024b) | VLM | Concept-level visual recognition | VQA | 20 concepts, 50 images per concept | Concept-level visual unlearning with multimodal utility retention |
| UnLOK-VQA (Patil et al., 2024) | VLM | Targeted pretrained multimodal knowledge | VQA | 500 samples with rephrase and neighborhood data | Privacy leakage reduction under attack-and-defense evaluation |
| SafeEraser (Chen et al., 2025a) | VLM | Harmful knowledge | VQA | 3K images, 28.8K QA pairs | Harmful response reduction while preserving VQA utility |

**说明：**
1.  **关键结论**：作为一篇综述，本文的“实验结果”体现为对领域现状的全面梳理和系统化呈现，而非报告新实验的性能数字。Table 1 明确了本综述在模态覆盖（文本、图像、视频、音频）和采用“系统第一”分类法方面的独特优势。Table 2 和 Table 3 详细列举了支撑多模态遗忘研究的关键数据集和主流评估基准，涵盖了身份遗忘、隐私保护、内容删除、概念擦除等多种应用场景。这些表格共同为研究者提供了选择实验数据和评估方案的参考框架，突出了当前研究的热点（如VLM和DM上的遗忘）和尚未充分探索的领域（如音频和视频遗忘）。
2.  **数据完整性**：论文中还存在 Table 4、5、6 等在附录中提供的表格，分别总结了个性化与版权、安全与鲁棒性、类遗忘等主题的相关数据集。根据用户要求，因可见原文未提供这些表格的具体数值，此处不列出，论文原文中注明其详细内容位于附录。

### 🔬 细节详述

- **训练数据**：未适用，本文为综述。
- **损失函数**：未提出新损失，但在形式化部分（§2）讨论了遗忘学习的通用目标函数，包括遗忘项\(F_{forget}\)、保留项\(F_{retain}\)和正则化项\(\Omega(\theta)\)。在VLM和DM的具体形式化中给出了更详细的损失形式。
- **训练策略**：未适用。
- **关键超参数**：未适用。
- **训练硬件**：未适用。
- **推理细节**：未适用。
- **正则化或稳定训练技巧**：论文在形式化部分（§2）和方法分类中多次提及，优化目标中常包含与参考模型偏差的正则化项（如\(\Omega(\theta, \theta_0)\)），以平衡遗忘效力和模型稳定性。

### ⚖️ 评分理由

*   创新性 (1.2/2)：核心创新在于提出‘系统第一’的多模态遗忘学习分类体系，以干预阶段为组织轴，提供了更具工程洞察力的视角，属于显著整合性创新。

*   技术严谨性 (1.0/1.5)：分类框架逻辑自洽，形式化部分引入理论概念并给出通用优化目标，但未充分讨论分类边界与例外情况，严谨性主要体现在组织逻辑而非技术论证深度。

*   实验充分性 (1.0/1.5)：对音频和视频模态的覆盖深度严重不足，标题宣称的‘跨四大模态’内容支撑力弱，影响综述的综合性和平衡性，这是主要扣分点。

*   清晰度 (0.8/1)：论文结构清晰，图表增强可读性，但将四大模态融合讨论时行文深度不一，部分技术细节对非该子领域读者可能简略，影响整体一致性。

*   影响力 (0.5/1.5)：论文核心贡献属于跨模态学习领域，对音频/语音领域读者的直接参考价值有限，音频内容深度不足，符合领域相关性约束，影响力集中于计算机视觉社区。

*   开源 (1.5/1.5)：提供策展的GitHub仓库链接，用于维护和更新综述中的方法、数据集和基准，核心产物完整开放且文档相对完整，符合满分锚点。

*   可复现性 (0.3/0.5)：作为综述，分类框架描述明确可重现，但论文对系统性检索和筛选文献的方法学描述不够详细，关键配置部分缺失，根据规则给0.3分。

*   工程/实践价值 (0.6/1.5)：提供了按干预阶段分类的‘选型指南’和配套代码仓库，为系统集成提供导向价值，但未提供可直接部署的代码、模型或工具包，工程价值更多是导向性的。

### 🚨 局限与问题

**论文明确承认的局限：**
1.  可能遗漏一些最新或不太显眼的工作。
2.  分析优先考虑系统级视角，而非以方法或算法优化为中心的视角。
3.  受篇幅所限，未深入讨论算法设计细节，而是引导读者参阅原作。
4.  音频和视频遗忘学习仍属相对未被充分探索的领域。
5.  完全保持与最新发展的同步是挑战。
6.  数据类型和设置（如时间序列、表格数据等）不在范围内。

**审稿人发现的潜在问题：**
1.  **模态覆盖深度严重不均，标题与内容不符**：这是最突出和最根本的问题。标题宣称覆盖“Across Vision, Language, Video, and Audio”四大模态，但正文对音频和视频的讨论深度、案例数量和专门分析远不及前两者。音频和视频相关的内容更像是在视觉语言框架下的简要提及，而非深入剖析。这构成了一定的“标题党”嫌疑，使得论文对音频/视频领域读者的宣称价值大于实际价值。
2.  **分类框架的边界与例外情况未充分讨论**：尽管“系统第一”视角新颖，但某些方法可能同时涉及多个阶段（如一些同时在训练时和解码时进行干预的方法）。论文未充分讨论其分类框架的适用边界、可能的重叠情况以及例外处理，这影响了框架的完备性。
3.  **缺乏对自身框架有效性的验证**：作为提出新分类体系的综述，未通过案例研究、用户调研或与传统分类的对比实验，来验证该“系统第一”框架在帮助读者理解、比较方法或发现研究空白方面是否确实优于传统分类。其优越性目前仅停留在理论阐述层面。
4.  **资源仓库的长期可持续性未知**：虽然提供了GitHub链接，但未说明该仓库的长期维护计划、社区贡献机制或版本管理策略，其作为“持续更新”资源的价值存在不确定性。

---

[← 返回 2026-07-10 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-10/)
