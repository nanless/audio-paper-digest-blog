---
title: "Multimodal Unlearning Across Vision, Language, Video, and Audio: Survey of Methods, Datasets, and Benchmarks"
date: 2026-07-10
draft: false
tags: []
categories: [论文速递]
description: "音视频理解 | 6.3/10"
hiddenInHomeList: true
---

# 📄 Multimodal Unlearning Across Vision, Language, Video, and Audio: Survey of Methods, Datasets, and Benchmarks

**6.3/10** | 创新 1/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 0.5/1.5 | 开源 1/1.5 | 复现 0/0.5 | 工程 1/1.5

✅ **6.3/10** | 前50% | #音视频理解 | #多模态模型 | [arxiv](https://arxiv.org/abs/2607.07907)


### 👥 作者与机构

- 第一作者：Nobin Sarwar（University of Maryland, Baltimore County）
- 通讯作者：未说明
- 作者列表：Nobin Sarwar（University of Maryland, Baltimore County）、Shubhashis Roy Dipta（University of Maryland, Baltimore County）、Zheyuan Liu（University of Notre Dame）、Vaidehi Patil（UNC Chapel Hill）
- 致谢中提到感谢 Prof. Sijia Liu（Michigan State University）的反馈，并获 Google PhD Fellowship 部分资助

### 💡 毒舌点评

这篇综述以"系统优先"（system-first）为卖点，对多模态机器遗忘进行了全景式梳理，taxonomy 设计有实用性，尤其对想快速进入该领域的研究者是一份不错的地图。但作为一篇目标 ACL 的综述，它缺乏对方法的深度定量比较和理论批判，更多是"列举+分类"而非"反思+提炼"；对音频/语音模态的覆盖极为单薄（正文中音频/语音的具体方法讨论不足半页，仅个别条目出现在表格中），与其宣称的"跨视觉、语言、视频、音频"全模态覆盖严重不符，论文核心价值仍集中在视觉-语言领域。

### 📌 核心摘要

1. 论文旨在为跨视觉、语言、视频、音频的多模态基础模型的机器遗忘（unlearning）提供一个系统化的、以干预阶段为导向的统一视角。
2. 核心方法不是提出新算法，而是构建了一种"系统优先"（system-first）的分类法，将现有遗忘方法按干预点划分：数据侧干预（§3.1）、训练时编辑（§3.2）、架构约束（§3.3）、训练无关遗忘（§3.4）、解码时遗忘（§3.5），顶层按遗忘目标粒度分裂为实例级和概念级遗忘。
3. 与已有综述相比，本文首次尝试覆盖四种模态，并强调跨模态比较和系统级部署考量，同时整理了大量数据集和基准测试表格（Tables 2-6 及 Appendix A）。
4. 论文对主流遗忘方法提供了形式化模板（如约束风险最小化框架、表示投影的正交投影公式），并抽象出"定位-再遗忘"（locate-then-unlearn）的工作流范式，以揭示不同方法在删除强度、效用保持、效率和可逆性上的权衡。
5. 作为综述，论文没有自身实验数据；所有表格仅列出数据集/基准的名称、规模及引文出处，未提供任何性能数值对比或元分析结论。
6. 实际意义在于为研究者部署遗忘流水线提供一张"干预地图"，并指出六大开放挑战：理论保证、跨模态泛化、评估可靠性、对抗鲁棒性、效用权衡、统一基准。
7. 主要局限性包括：严重缺乏方法间的定量对比分析；音频/语音部分覆盖极浅，正文对音频方法的讨论仅局限于 §3.2 中个别工作的简要引用（如 speaker identity unlearning、speech recognition unlearning），与其宣称的全模态覆盖不符；且论文提出的 taxonomy 能否真正指导更优遗忘方法的设计尚待验证。此外，作者自认未覆盖时序、表格、传感器等数据类型。

### 🔗 开源详情

- 代码：https://smsnobin77.github.io/Awesome-Multimodal-Unlearning/（论文提供的 curated repository，包含方法、数据集与基准的整理列表，含文献条目索引）
- 模型权重：论文中未提及
- 数据集：论文中未提及
- Demo：论文中未提及
- 复现材料：论文中未提及
- 论文中引用的开源项目：该综述引用了大量多模态遗忘方法、数据集与基准，具体项目索引可通过上述 curated repository 查阅；论文正文未提供各项目的独立链接。

### 🏗️ 方法概述和架构

该综述采用系统化文献整理的方法框架，其"核心架构"即作者所宣称的系统优先分类法（system-first taxonomy）。该方法论不生成任何模型或算法，而是提供一种可扩展的逻辑结构来安置和对比现有工作。具体而言：

顶层分裂：分类首先按遗忘目标的粒度进行顶层分裂——实例级遗忘（instance-level）和概念级遗忘（concept-level）。

干预点维度：在每种粒度下，沿模型生命周期定义五个核心干预阶段作为一级分类，构成完整的控制通路视图：
1. 数据侧干预（§3.1）：含数据路径扰动遗忘（如 UCs、MEM、UnSeg、MetaCloak）和数据卫生与提示规范化（如 CleanCLIP、Homoglyph Bias）；
2. 训练时编辑（§3.2）：含直接梯度法、约束更新、掩码驱动选择性遗忘（如 SalUn、Forget-Me-Not、MMUnlearner）、蒸馏法（如 SSD、SFD、SKD-CAG）；
3. 架构约束（§3.3）：含架构编辑遗忘（如 FreezeAsGuard、MANU、Audio Unlearning）和层级约束更新（如 SLUG、Model Integrity）；
4. 训练无关遗忘（§3.4）：含权重空间线性编辑（如 Task Arithmetic、NegMerge、Diffusion Soup、Video Unlearning）和表示投影（如 Safe-CLIP、CURE、Motion Unlearning）；
5. 解码时遗忘（§3.5）：含引导路径控制（如 UnGuide、SAFREE、DNG、Detect-and-Guide）和条件路径控制（如 SteerDiff、CPR、Moderator、SuppressEOT）。

二级控制机制：每个干预阶段内，再按具体控制机制细分。论文为每一类提供了形式化描述：例如，约束更新以约束风险最小化框架表达，权重空间线性编辑以线性变换形式表达，表示投影以正交投影公式 \(h' = (I - U U^\top) h\) 表达。

"定位-再遗忘"范式：综述将遗忘流程抽象为"定位-再遗忘"（locate-then-unlearn）范式贯穿全文，强调多数方法先定位与遗忘信号相关的参数或表示，再进行针对性修改。例如，掩码驱动方法通过显著性掩码 \(S\) 限定更新区域 \(\Delta\theta = -\eta S \odot \nabla_\theta(\mathcal{L}_{forget} + \lambda \mathcal{L}_{retain})\)。

跨模态适配：该框架的动机是便利用于真实部署链路的横向比较——不同模态和架构的方法可通过"干预阶段+控制通路"这一稳定坐标对齐，暴露它们在删除强度、效用保持、效率、可逆性和鲁棒性上的权衡。论文通过 Figure 2 和多个表格将几十篇方法映射到分类法的相应位置。对于音频等覆盖较少的模态，该框架主要作为前景方向的占位符，尚缺乏足够的深度分析。

形式化基础：论文在 §2 中提供了统一的遗忘形式化，包括 \((\epsilon,\delta)\) 遗忘准则（与差分隐私稳定性概念对齐）和通用的优化目标 \(\min_\theta \mathcal{J}(\theta) = \mathcal{F}_{forget}(\theta; \mathcal{D}_f) + \lambda \mathcal{F}_{retain}(\theta; \mathcal{D}_r)\)，并分别针对 VLM 和 DM 给出了模态特定的遗忘公式。

### 💡 核心创新点

1. 系统优先的分类学视角：不同于以往按优化目标（如梯度上升 vs 知识蒸馏）的分类，以"干预阶段+控制通路"为骨架，连接了模型全生命周期的遗忘操作点，有助于从工程系统角度理解遗忘而非仅从算法损失层面。
2. 跨四模态的统一框架：首次尝试将视觉、语言、视频和音频的遗忘方法纳入同一套术语和结构下对比，指出了哪些干预点跨模态通用（如权重空间线性编辑），哪些具有模态特异性（如音频的说话人嵌入消除）。
3. 形式化抽象各类方法：为数据侧扰动、约束更新、训练无关投影等子类提供了简洁的数学抽象模板，使读者能把握不同实现背后的共同数学意图。
4. 详尽的基准和数据集编目：论文在 Tables 2-6 中整理了按应用场景（身份、版权、安全鲁棒性、语音、类别遗忘等）分组的大量多模态遗忘评测基准和数据集，为后续标准化评估提供了集中式参考。

局限性在于，之前已有工作尝试系统化整理（如 Liu et al., 2024f; Feng et al., 2025b），本文的创新更多是覆盖范围和分类标准的调整，并未提供实质性新理论或自动化分析工具。

### 📊 实验结果

作为综述，论文未进行任何模型训练或实验评测，因此无实验数值。论文以表格形式展示了现有工作的数据集和基准配置。主要基准表格（Table 3）完整列出了评测基准的名称、模态、遗忘目标、任务类型、关键统计量和评测目标。代表性条目包括：

| Benchmark | Modality | Unlearning Target | Task Type | Key Statistics | Evaluation Objective |
|---|---|---|---|---|---|
| MU-Bench | Multimodal | Mixed (instances, datasets, modalities) | Multi-task | 9 datasets, 20 architectures | Unified unlearning evaluation (efficacy, utility, efficiency) |
| MLLMU-Bench | VLM | Private data (fictitious & real identities) | Multi-task QA | 500 fictitious and 153 public celebrities, 20.7K QA pairs | Privacy unlearning across efficacy, generalization, utility |
| PEBench | VLM | Synthetic identities & events | Multi-task | 200 identities, 8K images, 16K QA pairs | Privacy and event unlearning with controlled scope and audits |
| UMU-Bench | VLM | Knowledge instances | Multi-task | 500 fictitious, 153 real | Modality-aligned unlearning completeness and utility |
| CLEAR | VLM | Identity | VQA | 200 synthetic IDs, 3.7K images, 4K QA pairs | Identity leakage reduction with VQA accuracy retention |
| FIUBench | VLM | Identity | VQA | 400 synthetic IDs, 8K QA pairs | Right-to-be-forgotten under privacy constraints |
| UnSLU-BENCH | Audio | Speaker | Intent classification | Multi-speaker data, 4 languages | Speaker erasure with intent accuracy retention |
| CPDM | DM | Styles/portraits | Generation | 2.1K anchors, 18.9K generated images | Copyright similarity reduction with quality retention |
| UnlearnCanvas | DM | Artistic styles | Generation | 60 styles, 20 objects, high-res stylized images | Style forgetting with retention and generation fidelity/diversity |
| Holistic Unlearning | DM | Mixed concepts | Generation | 33 target concepts, 16k prompts per concept | Faithfulness, alignment, robustness, efficiency |
| Six-CD | DM | Concept removal | Generation | Six concept categories, dual-version prompts | Cross-category concept suppression with retainability checks |
| MMUBench | VLM | Concept-level visual recognition | VQA | 20 concepts, 50 images per concept | Concept-level visual unlearning with multimodal utility retention |
| UnLOK-VQA | VLM | Targeted pretrained multimodal knowledge | VQA | 500 samples with rephrase and neighborhood data | Privacy leakage reduction under attack-and-defense evaluation |
| SafeEraser | VLM | Harmful knowledge | VQA | 3K images, 28.8K QA pairs | Harmful response reduction while preserving VQA utility |

论文还在附录 Tables 4-6 中进一步按应用场景（个人化设置与版权遗忘、语音遗忘与安全鲁棒性、类别遗忘）整理了额外数据集。所有数据均为原始基准的统计量，未进行作者自身的对比分析或元评估，因此无法报告"达到多好的遗忘"、"与 SOTA 基线差距"等性能结论。

### 🔬 细节详述

- 训练数据：不适用，无模型训练。
- 损失函数：不适用。论文在 §2 中给出了通用遗忘优化目标的形式化 \(J(\theta) = \mathcal{F}_{forget}(\theta;\mathcal{D}_f) + \lambda\mathcal{F}_{retain}(\theta;\mathcal{D}_r)\)，并在 §2.1 和 §2.2 中分别针对 VLM 和 DM 给出了具体形式，但均为对已有工作的抽象而非论文自身实验。
- 训练策略：不适用。
- 关键超参数：不适用。
- 训练硬件：未说明。
- 推理细节：不适用。
- 正则化技巧：不适用。
- 致谢与工具声明：作者感谢 Prof. Sijia Liu 的反馈，部分工作获 Google PhD Fellowship 资助。附录 G 声明使用 Cursor 辅助代码开发、Grammarly 辅助语言润色。
- 论文在"Limitations"部分承认覆盖速度跟不上最新进展，音频和视频遗忘覆盖不足，且分类法优先考虑系统层级视角而牺牲了细粒度算法优化视角。此外明确声明未涵盖时序、表格、传感器等数据类型。

### ⚖️ 评分理由

*   创新性 (1.0/2)：提出按干预点分类的系统视角有一定新意，比单纯按算法分类的综述更有工程启发性，且尝试跨四模态统一语言。但本质仍是文献整理和归类，没有提出新理论、新评估方法论或自动化分析工具，与已有综述（如 Liu et al., 2024f; Feng et al., 2025b）的核心差异更多在于覆盖范围和分类标准调整，创新程度中等。

*   技术严谨性 (1.0/1.5)：分类体系逻辑自洽，形式化公式（如 \((\epsilon,\delta)\) 遗忘准则、约束风险最小化、正交投影）对已有工作的抽象基本准确。但缺少对各类方法边界、适用条件以及形式化假设严格性的批判性讨论；对音频和视频方法的技术细节涵盖过浅（正文对音频的具体讨论仅在 §3.2 中以一两句带过 speaker identity unlearning 和 speech recognition unlearning），使得所谓"全模态"论证的严谨性打折扣。

*   实验充分性 (1.0/1.5)：作为综述，它未提供元分析、数值对比或系统基准复现结果，仅以表格陈列现有数据集和基准名称，没有性能数字。文献覆盖广度尚可，但缺乏深度对比和统计性结论，使得综述的指导价值部分停留在"文献索引"层面。

*   清晰度 (0.8/1)：写作结构清晰，图示（Figure 1-5）和表格（Tables 1-6）辅佐效果好，公式定义也较规范。但部分术语前后稍有跳跃（如对干预点的描述细节在不同章节存在轻微重复），正文对音频等弱模态的具体技术细节语焉不详，大量数据集和评测细节被放到附录，降低了正文的自包含性。

*   影响力 (0.5/1.5)：论文整理的统一框架对机器遗忘研究者有一定参考价值，列出了开放挑战和未来方向（§8-9）。然而，该综述对音频内容的覆盖极为有限——正文中音频/语音相关的具体方法讨论不足半页，仅在表格中出现了 VoxCeleb1、Speech Commands、AudioMNIST、LibriSpeech 等数据集条目和 UnSLU-BENCH 一个音频专项基准。核心贡献集中在视觉-语言领域，对音频/语音/音乐领域研究者的直接推动力和实用价值很低，因此影响力显著扣分。

*   开源 (1.0/1.5)：作者提供了一个 curated repository（GitHub Page: https://smsnobin77.github.io/Awesome-Multimodal-Unlearning/），内含方法、数据集与基准的整理列表，属于开源成果。但未提供任何可执行代码、模型权重或数据集下载，仅为文献列表的网页托管，文档也较为简单，故未给满分。

*   可复现性 (0.0/0.5)：综述无实验流程，不涉及训练或评测的复现，此维度不适用，计 0 分。

*   工程/实践价值 (1.0/1.5)：把遗忘方法按照"数据侧→训练时→架构约束→训练无关→解码时"的工程干预链组织，针对部署、版权删除、安全编辑等场景有直接的实践参考价值，分类法可作为构建遗忘流水线的蓝图。不足之处是缺少与工业标准（如 GDPR 合规验证）的衔接分析，且对具体算法的部署计算量和延迟缺乏量化讨论。

### 🚨 局限与问题

论文明确承认的局限
- 由于领域进展迅速，可能遗漏一些最新或曝光度较低的工作。
- 分类法优先考虑系统层级视角，牺牲了细粒度的算法优化视角。
- 未深入算法设计细节和优化，依赖读者追踪原始论文。
- 音频和视频遗忘仍"相对探索不足"，且该调查未涵盖时序、表格、传感器等数据类型。
- 随着方法、数据集和评测协议快速演进，维持完全最新的 taxonomy 具有挑战性。

审稿人发现的潜在问题
- 严重缺乏性能数据支撑：作为一篇以"统一"和"比较"为卖点的综述，全文无任何方法间的性能对比数值，甚至连简单的性能趋势总结（如"A 方法在 B 数据集上一般比 C 方法好 X%"）都没有，大大削弱了其对方法选择的指导力。读者无法从本文判断哪些遗忘方法在实际中更有效。
- 音频部分徒有其表：论文声称覆盖音频，但音频相关内容在正文中的具体技术讨论极为有限——仅在 §3.2 中以一两句话提及 speaker identity unlearning (Kim et al., 2025b)、speech recognition unlearning (Liu, 2025)、music unlearning (Kim et al., 2025a) 和 memorized transcript suppression (Pathak et al., 2025)，在 §3.3 中提及 prune-and-regrow 策略的音频应用 (Mason-Williams et al., 2025)。语音/音频本身的独特挑战（如时频结构、流式遗忘、多说话人场景）几乎未展开，与其标题中的"Audio"和"全模态"宣称严重不符，容易误导音频领域读者。
- Taxonomy 实用性未经验证：新的分类系统是否确实能帮助研究者设计出更优的遗忘方法，或更容易定位问题，论文没有提供任何用户研究或案例研究来证明其"系统视角"优于传统分类（如按优化目标分类）的价值。
- 前瞻性不足：对"遗忘与隐私/安全的对抗"讨论仍较泛，缺乏对"不可逆遗忘"、理论遗忘保证（如可证明的删除认证）、概念重涌现（concept resurgence）等关键前沿问题的深度计算性洞见。论文在 §8 和 §9 中列出了开放挑战和未来方向，但分析深度较浅，更像是对问题的枚举而非深入的技术洞察。
- 跨模态比较流于表面：虽然声称提供"跨模态比较"，但实际上各模态的方法讨论基本是并行的，真正的跨模态对比分析（如"为什么某干预点在视觉中有效而在音频中失效"）极少。
- 缺少对"遗忘"与"隐藏"的辨析：论文未充分讨论当前方法是否真正实现了遗忘，还是仅仅在表面行为上隐藏了目标信息——这一区分对隐私合规至关重要，已有工作（如 Sharma et al., 2024）对此有所警示。

---

[← 返回 2026-07-10 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-10/)
