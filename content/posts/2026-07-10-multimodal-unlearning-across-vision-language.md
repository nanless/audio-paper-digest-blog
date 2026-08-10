---
title: "Multimodal Unlearning Across Vision, Language, Video, and Audio: Survey of Methods, Datasets, and Benchmarks"
date: 2026-07-10
draft: false
tags: [多模态模型, 基准测试, 数据集]
categories: [论文速递]
description: "多模态模型 | 6.3/10"
hiddenInHomeList: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2607.07907"
---

# 📄 Multimodal Unlearning Across Vision, Language, Video, and Audio: Survey of Methods, Datasets, and Benchmarks

标签：#多模态模型 #基准测试 #数据集

**6.3/10** | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 0.8/1.5 | 清晰 0.8/1 | 影响 0.5/1.5 | 开源 0.2/1.5 | 复现 0.3/0.5 | 工程 1/1.5

✅ **6.3/10** | 前50% | 文档类型：综述 | 评分置信度：高 | #多模态模型 | #基准测试 #数据集 | [arxiv](https://arxiv.org/abs/2607.07907)


### 👥 作者与机构

- 第一作者：Nobin Sarwar（University of Maryland, Baltimore County）
- 通讯作者：未说明
- 作者列表：Nobin Sarwar（University of Maryland, Baltimore County），Shubhashis Roy Dipta（University of Maryland, Baltimore County），Zheyuan Liu（University of Notre Dame），Vaidehi Patil（University of North Carolina at Chapel Hill）

### 💡 毒舌点评

亮点在于提出了一个“系统导向”的统一分类法，将方法按“干预阶段”和“控制路径”组织，为跨模态比较提供了一个清晰稳定的脚手架，比算法导向的综述更贴近实际部署考量。短板是作为一篇标题涵盖“视频和音频”的综述，其对音频和视频模态的覆盖深度明显弱于视觉和语言，大量篇幅仍聚焦于图像-文本系统，对新兴的音频和视频遗忘方法梳理不够充分，有些“综述其名，视觉为主”。此外，虽提供了分类框架，但缺乏对不同类别方法在相同任务或基准上的性能对比分析或元分析洞察，降低了其指导具体技术选择的直接效用。

### 📌 核心摘要

1.  问题：多模态基础模型（如VLM、DM、AFM）会从训练数据中记忆并编码敏感、有版权、带偏见或不安全的跨模态关联。当收到数据删除请求或策略更新时，从头重训不切实际，而定向遗忘因知识在共享表示中的分布而极具挑战。现有综述往往局限于单模态或狭窄的文本-图像系统，且采用算法中心分类，不利于系统性比较。
2.  方法核心：本文是一篇系统综述。其核心是提出一个“系统导向”的分类法，根据“干预阶段”（如数据侧、训练时、架构约束、训练无关、解码时）和“控制路径”（如引导路径、条件路径）来组织和比较跨视觉、语言、视频、音频的多模态遗忘方法。论文还形式化了多模态遗忘的目标，并系统整理了相关数据集、基准和评估指标。
3.  新在哪里：与既有算法中心的综述不同，本文采用系统导向视角，强调从端到端多模态管道的角度看待遗忘干预点。它提供了跨越四种模态的统一框架，使比较不同模型架构和优化家族的方法成为可能，并清晰地揭示了遗忘强度、保持力、效率、可逆性和鲁棒性之间的权衡。
4.  实验结果：本文为综述论文，没有提出新方法，因此无自身实验结果。它汇总并比较了现有工作，通过多个表格（表1-6，附录表4-6）系统梳理了不同模态、不同遗忘目标下的方法、常用数据集和代表性基准。其价值在于对现有文献、数据集、基准和评估框架的系统性梳理、归类和组织。
5.  实际意义：为研究者和从业者提供了一个理解和比较多模态遗忘方法的统一框架和路线图，有助于选择适合特定干预点和控制目标的技术，并指明了评估和部署中的关键考量与挑战。
6.  主要局限性：作者明确承认，由于领域发展迅速，可能遗漏部分近期工作；分析侧重系统层面视角，未深入算法优化细节；对音频、视频、时间序列等模态的覆盖深度有限。审稿人进一步发现，论文对音频和视频遗忘方法的具体案例和引用深度远不及视觉和语言模态。

### 🔗 开源详情

- 代码：论文中明确提供了一个策展资源库链接：https://smsnobin77.github.io/Awesome-Multimodal-Unlearning/。此仓库为一个“策展的仓库”，旨在汇总相关论文与资源，并非作者原创模型的完整实现代码库。
- 模型权重：论文中未提及。本论文为综述性文章，并未提出一个全新的模型，因此未提供自行训练的模型权重链接。
- 数据集：论文中详细列举了用于多模态遗忘研究的大量数据集（见表2、4、5、6）。获取方式通常是引用相关原始论文或访问公开的数据集基准测试网站。
- Demo：论文中未提及任何在线演示链接。
- 复现材料：论文中未提供具体的训练配置、超参数或检查点。作为综述，其复现材料主要来自其所引用的原始研究。论文附录B提供了详细的评估指标定义，可作为复现实验评估框架的参考。

### 🏗️ 方法概述和架构

本文作为一篇综述，其核心“方法”在于它提出的系统导向分类框架和文献组织方式，而非一个具体的端到端模型。

整体流程概述：论文没有提出新的遗忘算法，而是构建了一个分析框架。它首先形式化多模态遗忘问题（第2节），然后提出一个基于干预阶段和控制路径的分类法（图1，2），最后运用此框架对现有方法（第3节）、数据集（第4节，表2，4-6）、基准（第5节，表3）和评估指标（第6节，附录B，图3）进行系统梳理和比较。

主要组件/模块详解：
1.  形式化框架（第2节）：
    *   功能：定义多模态遗忘的理论目标和优化目标。
    *   内部结构：将多模态训练数据定义为图像-文本对（可推广到视频、音频），区分遗忘集\(D_f\)与保留集\(D_r\)。核心目标是使遗忘后的模型分布接近仅在保留集上重训的模型分布，即\(P_r(A(D_r)) \approx P_u(\mathcal{U}(A(D), D, D_f))\)。论文引入了\((\epsilon, \delta)\)遗忘准则（与差分隐私理论联系）来提供理论保证。通用优化目标为\(\min_\theta J(\theta) = \mathcal{F}_{\text{forget}}(\theta; D_f) + \lambda \mathcal{F}_{\text{retain}}(\theta; D_r)\)，并分别针对VLM和DM给出了具体形式。
2.  系统导向分类法（核心组件，第3节）：
    *   功能：将各类遗忘方法组织到一个统一的树状结构中，便于横向比较。
    *   内部结构：如图2所示，论文按干预阶段将方法分为五大类：
        *   数据侧干预：在数据层面进行扰动或清洗。细分为“数据路径扰动”（如UCs, MEM）和“数据卫生与提示规范化”（如CleanCLIP）。
        *   训练时编辑：在模型训练过程中进行干预。细分为“直接梯度更新”、“约束更新”、“基于掩码的选择性遗忘”、“基于蒸馏的遗忘”。
        *   架构约束：通过修改网络结构（如剪枝、冻结）来限制遗忘信号路径。细分为“架构编辑”和“层级约束更新”。
        *   训练无关遗忘：不进行迭代优化，通过闭式解在参数或表示空间进行编辑。细分为“权重空间线性遗忘”（如任务向量算术）和“表示空间投影遗忘”（如CURE）。
        *   解码时遗忘：在生成/推理阶段通过控制采样或条件信号抑制目标概念。细分为“引导路径控制”和“条件路径控制”。
3.  评估框架整合（附录B，图3）：
    *   功能：系统整理评估多模态遗忘性能的维度和指标。
    *   内部结构：归纳了六大评估维度：遗忘质量与安全性、安全与内容遗忘、基于攻击的隐私、模型效用与保真度、对抗鲁棒性、计算与环境开销。每个维度下列举了代表性指标及其定义（如Unlearning Accuracy, FA@K, Refusal Rate, ASR, FID等）。

组件间的数据流与交互：论文的结构是层层递进的：首先定义问题（形式化框架），然后提出组织工具（分类法），接着运用此工具对“方法”、“数据集”、“基准”和“评估”这四大模块进行分类综述。分类法是贯穿全文的主线，将分散的研究工作串联起来。

关键设计选择及动机：作者选择“系统导向”而非“算法导向”的视角，是因为他们认为前者的组织方式更贴近实际部署流程，能帮助研究者识别在管道哪个环节（数据？训练？解码？）进行干预最有效，从而更好地权衡遗忘强度与效用保持。

专业术语解释：“定位后遗忘”是论文中反复出现的一个模式，指先定位需要遗忘的信息在模型中的存储位置（通过梯度、掩码、结构分析等），再执行有针对性的更新以移除。文中大部分训练时、架构约束和训练无关方法都遵循此模式。

### 💡 核心创新点

1.  系统导向的统一分类法：提出按“干预阶段”和“控制路径”组织多模态遗忘方法，取代传统的、围绕优化目标的算法中心分类。这为跨模型架构和模态的比较提供了稳定、可操作的脚手架，更利于部署决策。
2.  跨模态（四模态）的统一视角：首次在综述中系统地将视觉、语言、视频和音频的遗忘研究纳入同一框架进行分析和比较，揭示了不同模态间共享的挑战与机会。
3.  从实例到概念的完整形式化：不仅定义了实例级遗忘，还涵盖了概念级遗忘，并通过\((\epsilon, \delta)\)准则与差分隐私理论联系起来，为评估提供了理论基础。
4.  整合评估维度：将散落在各工作中的评估指标系统地整合为六大维度（图3），并详细说明了每个维度的典型指标和计算公式，为领域提供了全面的评估检查清单。

### 📊 实验结果

本文作为综述，没有进行独立的实验。其主要的“结果”体现为对现有工作的系统性梳理、分类和比较。
论文通过表格形式呈现了关键的比较信息：
1.  表1：比较了已有跨模态遗忘综述的覆盖范围。本文是唯一在“系统导向”分类（System-first）和四个模态（Text, Image, Video, Audio）上均打勾的综述。

| Survey Venue & Year | System-first | Text | Image | Video | Audio |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Si et al., 2023 (arXiv'23) | ✔ | | | | |
| Liu et al., 2024f (arXiv'24) | ✔ | ✔ | ✔ | | |
| Blanco-Justicia et al., 2025 (AIR'25) | ✔ | | ✔ | ✔ | |
| Liu et al., 2025b (NMI'25) | | ✔ | | | |
| Feng et al., 2025b (arXiv'25) | | ✔ | ✔ | ✔ | ✔ |
| Geng et al., 2025 (arXiv'25) | | ✔ | ✔ | ✔ | |
| Ours (ACL'26) | ✔ | ✔ | ✔ | ✔ | ✔ |

2.  图2：系统展示了基于干预阶段和控制路径的多模态遗忘方法分类树，列出了每个类别下的代表性方法。
3.  表2：列出了身份遗忘和情感视频遗忘常用的数据集。

| Modality | Dataset | Size | Used in |
| :--- | :--- | :--- | :--- |
| Identity Unlearning | | | |
| Image | CelebA | 202,599 images | Dai and Gifford, 2023; Dontsov et al., 2024; ... |
| Image | CelebA-HQ | 30K high-quality images | Huang et al., 2024a; Alberti et al., 2025; ... |
| Image | Flickr-Faces HQ | 70K face images | Nagasubramaniam et al., 2025 |
| Image | CASIA-WebFace | 494K face images | Dontsov et al., 2024 |
| Image | FairFace | 108,501 face images | Alabdulmohsin et al., 2024 |
| Image | MillionCelebs | 18.8M images | Dontsov et al., 2024 |
| Image | VGGFace2 | 3.3M face images | Liu et al., 2024e; Li et al., 2025a |
| Image | PinsFaces | 17.5K photos | Kravets and Namboodiri, 2025a,b |
| Audio | VoxCeleb1 | 150K utterances | Cheng and Amiri, 2025 |
| Affect and Video Unlearning | | | |
| Image | EmoSet | 3.3M images | Zhou et al., 2024 |
| Image | UnBiasedEmo | 3K affective images | Zhou et al., 2024 |
| Video | UCF101 | 13K videos | Cheng and Amiri, 2024a |

4.  表3：总结了代表性的多模态遗忘基准。

| Benchmark | Modality | Unlearning Target | Task Type | Key Statistics | Evaluation Objective |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Unified Benchmark Suites | | | | | |
| MU-Bench | Multimodal | Mixed | Multi-task | 9 datasets, 20 architectures | Unified evaluation |
| MLLMU-Bench | VLM | Private data | Multi-task QA | 500 fictitious, 153 real, 20.7K QA pairs | Privacy unlearning |
| PEBench | VLM | Synthetic identities & events | Multi-task | 200 identities, 8K images, 16K QA pairs | Privacy and event unlearning |
| UMU-Bench | VLM | Knowledge instances | Multi-task | 500 fictitious, 153 real | Modality-aligned unlearning |
| Identity and Privacy Unlearning | | | | | |
| CLEAR | VLM | Identity | VQA | 200 synthetic IDs, 3.7K images, 4K QA pairs | Identity leakage reduction |
| FIUBench | VLM | Identity | VQA | 400 synthetic IDs, 8K QA pairs | Right-to-be-forgotten |
| UnSLU-BENCH | Audio | Speaker | Intent classification | Multi-speaker data, 4 languages | Speaker erasure |
| Content and Knowledge Unlearning | | | | | |
| CPDM | DM | Styles/portraits | Generation | 2.1K anchors, 18.9K images | Copyright similarity reduction |
| UnlearnCanvas | DM | Artistic styles | Generation | 60 styles, 20 objects | Style forgetting |
| Holistic Unlearning | DM | Mixed concepts | Generation | 33 concepts, 16k prompts | Faithfulness, alignment, robustness |
| Six-CD | DM | Concept removal | Generation | Six concept categories | Cross category suppression |
| MMUBench | VLM | Concept-level visual recognition | VQA | 20 concepts, 50 images each | Concept-level visual unlearning |
| UnLOK-VQA | VLM | Targeted pretrained knowledge | VQA | 500 samples | Privacy leakage reduction |
| SafeEraser | VLM | Harmful knowledge | VQA | 3K images, 28.8K QA pairs | Harmful response reduction |

论文未提供针对所有遗忘方法在统一基准上的性能对比实验表格。

### 🔬 细节详述

*   训练数据：不适用。本综述讨论的是用于训练和评估各类遗忘方法的数据集，已汇总在表2、4、5、6及附录中。
*   损失函数：论文在形式化部分（2.1, 2.2节）给出了VLM和DM遗忘的通用优化目标公式，例如\(\min_\theta J(\theta) = \mathcal{F}_{\text{forget}}(\theta; D_f) + \lambda \mathcal{F}_{\text{retain}}(\theta; D_r)\)，并简要解释了各组成部分的含义。
*   训练策略：不适用。论文总结了不同遗忘方法的训练策略，如直接梯度更新、约束优化、基于掩码的选择性更新等。
*   关键超参数：未在综述中统一提供，各方法超参数需查阅原始论文。
*   训练硬件：未说明。
*   推理细节：论文在解码时遗忘部分（3.5节）讨论了采样时的引导控制和条件路径控制策略。
*   正则化或稳定训练技巧：论文在形式化框架中提到了正则化项\(\Omega(\theta, \theta_0)\)用于限制与参考模型的偏差。

### ⚖️ 评分理由

*   创新性 (1.5/2)：提出系统导向分类法，以干预阶段和控制路径组织多模态遗忘方法，提供跨模态比较的新视角，但非根本概念突破。

*   技术严谨性 (1.2/1.5)：分类体系逻辑清晰，形式化定义准确，但音频等模态覆盖的普适性有待验证，部分方法归类边界模糊。

*   实验充分性 (0.8/1.5)：系统梳理文献、数据集和基准，但音频和视频模态覆盖深度不足，缺乏跨方法性能对比元分析。

*   清晰度 (0.8/1)：整体结构清晰，分类图表有效，但具体方法描述有时过于简略，分类边界在部分子类别中模糊。

*   影响力 (0.5/1.5)：涵盖音频模态但覆盖较弱，对语音/音频读者影响力有限，核心贡献属CV/NLP等领域，符合领域相关性约束。

*   开源 (0.2/1.5)：提供策展资源库链接便于追踪文献，但非核心代码、模型或数据的完整开放，无Demo。

*   可复现性 (0.3/0.5)：分类框架和评估指标定义详细，但文献选择标准、归类过程透明度不足，缺少具体复现步骤。

*   工程/实践价值 (1/1.5)：系统导向视角直接服务于部署实践，提供评估维度清单和干预点选择指南，实用价值较高。

### 🚨 局限与问题

1.  论文明确承认的局限：可能遗漏部分最新或不太显眼的工作；分析侧重系统层面视角，未深入算法设计和优化细节；对音频、视频、时间序列等模态的覆盖深度有限。
2.  审稿人发现的潜在问题：
    *   覆盖不均衡：尽管标题涵盖四模态，但正文中大量篇幅和具体案例仍集中在图像-文本的扩散模型和CLIP类模型上，对纯音频、音乐、视频遗忘方法的讨论较浅，引用的代表性工作也较少。这削弱了其作为四模态统一综述的说服力。
    *   缺乏对比性洞察：作为综述，其主要工作是“组织”和“描述”，但未能深入提供关于不同类别方法在相同任务上性能对比的元分析或趋势性洞察。例如，没有讨论在类似遗忘目标下，训练时方法与解码时方法在效用-安全权衡上的典型表现差异，这限制了其指导性。
    *   分类的颗粒度问题：分类法在某些类别（如“训练时编辑”）下仍显得庞大，子类别间的边界有时模糊，例如“基于蒸馏”和“基于掩码”的方法可能存在交叉。
    *   理论保证的局限性：尽管引入了\((\epsilon,\delta)\)准则，但论文也承认大多数方法仍缺乏正式的遗忘保证。综述对此的讨论深度有限，未能充分阐明理论形式化与实践方法之间的鸿沟。

---

[← 返回 2026-07-10 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-10/)
