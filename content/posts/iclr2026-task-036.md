---
title: "ICLR 2026 - 音视频 论文列表"
date: 2026-05-03
draft: false
tags: ["音视频"]
categories: [iclr-2026]
description: "共 5 篇 ICLR 2026 音视频 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音视频

共 **5** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [JavisDiT++: Unified Modeling and Optimization for Joint Audi](/audio-paper-digest-blog/posts/2026-05-03-javisdit-unified-modeling-and-optimization-for) | 9.0分 | 前10% |
| 🥈 | [Instilling an Active Mind in Avatars via Cognitive Simulatio](/audio-paper-digest-blog/posts/2026-05-03-instilling-an-active-mind-in-avatars-via) | 7.5分 | 前25% |
| 🥉 | [Entropy-Monitored Kernelized Token Distillation for Audio-Vi](/audio-paper-digest-blog/posts/2026-05-03-entropy-monitored-kernelized-token-distillation) | 7.5分 | 前25% |
| 4. | [AVoCaDO: An Audiovisual Video Captioner Driven by Temporal O](/audio-paper-digest-blog/posts/2026-05-03-avocado-an-audiovisual-video-captioner-driven-by) | 7.5分 | 前25% |
| 5. | [Syncphony: Synchronized Audio-to-Video Generation with Diffu](/audio-paper-digest-blog/posts/2026-05-03-syncphony-synchronized-audio-to-video-generation) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [JavisDiT++: Unified Modeling and Optimization for Joint Audio-Video Generation](/audio-paper-digest-blog/posts/2026-05-03-javisdit-unified-modeling-and-optimization-for)

🔥 **9.0/10** | 前10% | #音视频 | #流匹配 | #音频生成 #扩散模型

👥 **作者与机构**

- 第一作者：Kai Liu（浙江大学，HiThink Research）
- 通讯作者：Hao Fei（新加坡国立大学）
- 作者列表：Kai Liu（浙江大学，HiThink Research）、Yanhao Zheng（未说明）、Kai Wang（多伦多大学）、Shengqiong Wu（新加坡国立大学）、Rongjunchen Zhang（HiThink Research）、Jiebo Luo（罗切斯特大学）、Dimitrios Hatzinakos（多伦多大学）、Ziwei Liu（南洋理工大学）、Hao Fei（新加坡国立大学）、Tat-Seng Chua（新加坡国立大学）

💡 **毒舌点评**

亮点：架构设计优雅，将跨模态交互（共享Attention）与模态特定处理（分离FFN）解耦，同步机制（TA-RoPE）直截了当且高效，首次将偏好对齐（DPO）引入音视频联合生成，系统性地解决了该领域的关键痛点。短板：实验规模受限于公开数据量（约1M），与Veo3等顶级商业模型在定性效果上仍有可见差距，且在更长时长、更高分辨率上的泛化能力与可控性有待进一步验证。

🔗 **开源详情**

- 代码：论文明确承诺将公开所有代码，代码仓库链接将在论文接受后提供。附录中提到代码将发布于 `https://JavisVerse.github.io/JavisDiT2-page`。
- 模型权重：将公开预训练模型权重。
- 数据集：将公开训练所用的数据集，包括用于DPO的偏好数据。
- Demo：未提及在线演示。
- 复现材料：提供了极其详细的三阶段训练设置（表A1），包括可训练模块、学习率、epoch、GPU时长等。详细说明了数据来源（图A2）和筛选流程。附录中包含多个消融实验，提供了复现所需的所有关键信息和超参数分析。
- 引用的开源项目：论文依赖并使用了以下开源模型和工具：Wan2.1-1.3B-T2V（视频生成骨干）、AudioLDM2（音频VAE）、umT5-xxl（文本编码器）、ImageBind（跨模态对齐评估）、CLIP/CLAP（文本-视频/音频评估）、Syncformer（同步性评估）、VideoAlign（视频奖励模型）、AudioBox（音频奖励模型）、FunASR（语音检测过滤）、OpenSora的数据筛选工具等。
- 开源计划：论文明确表示将开源代码、模型和数据集，以确保研究的可复现性。

📌 **核心摘要**

1. 问题：现有的开源联合音视频生成（JAVG）方法在生成质量、时间同步性和与人类偏好对齐方面，与先进的商业模型（如Veo3）存在显著差距。
2. 方法核心：本文提出了JavisDiT++，一个统一的建模与优化框架。主要包括三个技术：1）模态特定混合专家（MS-MoE），通过共享注意力层进行跨模态交互，再通过独立的FFN层处理各模态，兼顾了交互效率与单模态质量；2）时间对齐旋转位置编码（TA-RoPE），在音频和视频token的时间轴上施加绝对对齐的位置ID，实现显式的帧级同步；3）音视频直接偏好优化（AV-DPO），首次在JAVG任务中引入人类偏好对齐，利用多奖励模型从质量、一致性和同步性多个维度构建偏好数据。
3. 新意：相较于之前的双流DiT（如JavisDiT）或拼接策略（如UniVerse-1），JavisDiT++提供了一个更简洁、高效、统一的架构；TA-RoPE比隐式的同步机制（如ST-Prior）更直接精确；AV-DPO是JAVG领域的首次偏好对齐尝试。
4. 主要结果：在JavisBench基准测试上（生成240p 4秒视频），JavisDiT++（2.1B参数）在所有维度上显著超越了之前的SOTA。与最强基线UniVerse-1（6.4B参数）相比，其视频质量（FVD）从194.2降至141.5，音频质量（FAD）从8.7降至5.5，音视频同步度（DeSync）从0.929降至0.832，同时推理速度更快（10s vs 13s）。人类评估显示，其输出在74%的情况下优于JavisDiT和UniVerse-1。关键对比数据如下表所示：
| 模型 | FVD↓ | FAD↓ | TV-IB↑ | AV-IB↑ | JavisScore↑ | DeSync↓ | 运行时间↓ |
|---|---|---|---|---|---|---|---|
| JavisDiT (3.1B) | 204.1 | 7.2 | 0.263 | 0.197 | 0.154 | 1.039 | 30s |
| UniVerse-1 (6.4B) | 194.2 | 8.7 | 0.272 | 0.104 | 0.077 | 0.929 | 13s |
| Ours (2.1B) | 141.5 | 5.5 | 0.282 | 0.198 | 0.159 | 0.832 | 10s |
5. 实际意义：该工作为原生联合音视频生成设立了新的性能标杆，证明了通过简洁的架构设计和针对性的同步与对齐策略，可以在相对有限的公开数据上训练出性能卓越的模型，推动了该领域的开源发展。
6. 局限性：训练数据规模（~1M）可能限制了模型的泛化能力；模型尺寸相对较小，在捕捉更细微的跨模态关联上或有上限；当前聚焦于文本到音视频生成，可控性（如音乐节奏、语音内容）和更广泛的多模态生成任务（如A2V, V2A）有待探索。

---

### 🥈 [Instilling an Active Mind in Avatars via Cognitive Simulation](/audio-paper-digest-blog/posts/2026-05-03-instilling-an-active-mind-in-avatars-via)

✅ **7.5/10** | 前25% | #音视频 | #多模态模型 #扩散模型 | #多模态模型 #扩散模型

👥 **作者与机构**

- 第一作者：Jianwen Jiang (ByteDance)
- 通讯作者：Jianwen Jiang (根据“†Project Lead and Corresponding author.”标注)
- 作者列表：Jianwen Jiang†, Weihong Zeng, Zerong Zheng, Jiaqi Yang, Chao Liang, Wang Liao, Han Liang*, Weifeng Chen, Xing Wang, Yuan Zhang, Mingyuan Gao (均为 ByteDance)

💡 **毒舌点评**

亮点：将认知科学中的“双系统”理论引入视频头像生成，为单纯依赖音频反应的模型注入了高级语义规划能力，这种跨学科的框架设计颇具启发性，且生成的动态确实更贴合语义。
短板：实现上高度依赖现成的多模态大语言模型进行推理，导致生成前需额外20-30秒的“思考”延迟，这在追求实时或流式生成的场景下是个硬伤，也让方法的创新性打了折扣。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。但项目页面（文中提到）可能包含相关信息。
- 模型权重：未提及是否公开预训练模型权重。
- 数据集：论文详细描述了自建的15，000小时训练数据集和两个挑战性测试集（单主体150例，多主体57例）的构建方法，但未提及这些数据集是否开源。
- Demo：论文提到有项目页面链接，可能包含演示视频，但未明确说明。
- 复现材料：提供了极其详尽的附录（B-H节），涵盖了模型架构、实现细节、数据处理、评估协议、推理延迟分析等，为复现提供了充分的文字指导。
- 论文中引用的开源项目：包括PySceneDetect、PaddleOCR、Q-Align、RAFT、SyncNet、Whisper、miniCPM-o、Seed-1.5-VL等。
- 开源计划：论文中未提及明确的开源计划。

📌 **核心摘要**

1.  要解决什么问题：当前音频驱动的视频头像模型主要实现低层次的唇形同步（论文称为“系统1”反应），无法理解语义、情感和意图，导致生成的动画缺乏多样性和上下文恰当性。
2.  方法核心是什么：提出一个受认知“双系统理论”启发的框架。利用多模态大语言模型（MLLM）作为“系统2”，对输入的音频、图像和文本进行推理，生成一个高层次的动作计划（文本描述）。然后，设计了一个专门的多模态扩散Transformer（MMDiT）作为“系统1”，将该计划与反应性信号（如音频）融合，生成最终视频。
3.  与已有方法相比新在哪里：
    - 范式创新：首次将视频头像问题明确框定为“系统1”（反应式）与“系统2”（审议式）认知过程的模拟。
    - 技术创新：为解决多模态融合中的冲突，提出了“伪最后帧”策略来替代传统的参考图像条件化，避免了模型对静态图像的过拟合；引入了“模态预热”训练策略来平衡文本、音频和视频分支的影响力。
4.  主要实验结果如何：在多个基准测试中，该方法在唇形同步（Sync-C）、图像质量（IQA）等客观指标上与SOTA方法持平或略有优势。关键的是，主观用户研究（GSB评分）显示本方法被显著偏好，尤其在运动自然度（MU）和上下文连贯性上优势明显。例如，在与基线对比中，本方法将GSB分数从-0.29提升至+0.29（表2a），并将多主体场景中的驱动准确性（DA）从0.88提升至0.94（表3）。
5.  实际意义是什么：为创建更生动、更具表现力和逻辑一致性的数字人/虚拟角色提供了新思路，有望应用于虚拟主播、电影制作、交互式游戏等需要角色深度表达的领域。
6.  主要局限性是什么：推理过程引入了额外的20-30秒延迟；对MLLM推理能力的依赖可能导致计划质量不稳定；在极端复杂的非人类或罕见场景下，计划的合理性仍受限于MLLM的理解能力。

---

### 🥉 [Entropy-Monitored Kernelized Token Distillation for Audio-Visual Compression](/audio-paper-digest-blog/posts/2026-05-03-entropy-monitored-kernelized-token-distillation)

✅ **7.5/10** | 前25% | #音视频 | #知识蒸馏 | #音频事件检测 #模型评估

👥 **作者与机构**

- 第一作者：Hyoungseob Park（耶鲁大学）（注：论文提到该工作是在Amazon AGI实习期间完成）
- 通讯作者：论文中未明确说明
- 作者列表：Hyoungseob Park（耶鲁大学）、Lipeng Ke（Amazon AGI）、Pritish Mohapatra（Amazon AGI）、Huajun Ying（Amazon AGI）、Sankar Venkataraman（Amazon AGI）、Alex Wong（耶鲁大学）

💡 **毒舌点评**

这篇论文的亮点在于其“核化”的思路巧妙地绕开了传统知识蒸馏中师生网络维度必须匹配的难题，通过蒸馏token间的Gram矩阵，实现了真正的架构无关蒸馏，这在理论上是优雅的。然而，其熵监控机制需要为每个模态额外训练一个线性探测头，这增加了蒸馏阶段的超参数和训练步骤；此外，为了降低Gram矩阵的O(N²)复杂度，论文提出的滑动窗口方法可能会牺牲对长程token依赖的建模能力，这在处理需要全局上下文的复杂场景时可能成为隐患。

🔗 **开源详情**

- 代码：论文中提到“we will release the code and the pretrained weights”，但未提供具体链接。因此，根据当前文本，论文中未提及代码链接。
- 模型权重：论文中提到会发布预训练权重，但未提及当前是否可下载。
- 数据集：实验使用公开数据集VGGSound和AVSBench，论文未提及会发布新数据集。
- Demo：论文中未提及在线演示。
- 复现材料：论文在附录E中详细提供了实验数据集信息、模型配置（表14）、数据增强策略、关键超参数（学习率、损失权重等）、评估指标和基线方法细节，复现信息非常充分。
- 论文中引用的开源项目：论文依赖的主要开源工作包括CAV-MAE (Gong et al., 2022b)、UFE-AVS (Liu et al., 2024a)、PVT (Wang et al., 2021)等模型架构，以及VGGSound、AVSBench数据集。

📌 **核心摘要**

本文针对音频-视觉多模态模型在边缘设备部署时参数量过大的问题，提出了一种名为“熵监控的核化token蒸馏”的新方法。该方法的核心是Kernelized Token Distillation (KTD)，它不直接蒸馏教师模型的潜在嵌入或输出，而是蒸馏同一实例内不同token之间的成对关系（表现为Gram矩阵）。这种方法避免了师生模型必须匹配特征维度的限制。为了解决不同模态信息量不均的问题，进一步引入了Entropy-Monitored (EM)策略，通过测量每个模态特征的熵（不确定性）来自适应地调整蒸馏权重，确保从信息量大的模态中蒸馏高保真度的监督信号。在VGGSound音频-视觉事件分类和AVS-Bench音频-视觉分割数据集上的实验表明，EM-KTD方法能让仅使用教师模型6%参数的学生模型，保留教师模型96.9%的分类性能和96.5%的分割性能。该方法的实际意义在于为资源受限的边缘设备部署高性能多模态模型提供了有效途径。其主要局限性在于计算Gram矩阵的二次复杂度，尽管提出了滑动窗口的缓解方案，但计算开销仍然较高。

---

### 4. [AVoCaDO: An Audiovisual Video Captioner Driven by Temporal Orchestration](/audio-paper-digest-blog/posts/2026-05-03-avocado-an-audiovisual-video-captioner-driven-by)

✅ **7.5/10** | 前25% | #音视频 | #多模态模型 | #强化学习 #数据集

👥 **作者与机构**

- 第一作者：Xinlong Chen（快手技术-可灵团队，中国科学院自动化研究所NLPR，中国科学院大学人工智能学院）
- 通讯作者：Qiang Liu（中国科学院自动化研究所NLPR，中国科学院大学人工智能学院）
- 作者列表：
    - Xinlong Chen（快手技术-可灵团队，中国科学院自动化研究所NLPR，中国科学院大学人工智能学院）
    - Yue Ding（中国科学院自动化研究所NLPR，中国科学院大学人工智能学院）
    - Weihong Lin（快手技术-可灵团队）
    - Jingyun Hua（快手技术-可灵团队）
    - Linli Yao（北京大学）
    - Yang Shi（北京大学）
    - Bozhou Li（北京大学）
    - Qiang Liu（中国科学院自动化研究所NLPR，中国科学院大学人工智能学院）
    - Yuanxing Zhang（快手技术-可灵团队）
    - Pengfei Wan（快手技术-可灵团队）
    - Liang Wang（中国科学院自动化研究所NLPR，中国科学院大学人工智能学院）

💡 **毒舌点评**

亮点在于其系统性工程：不仅设计了新颖的“三合一”奖励函数来优化多维度描述质量，还通过精心策划的SFT数据集构建流程，解决了高质量音视频对齐标注数据稀缺的痛点。短板则是对强基线模型（Qwen2.5-Omni）的依赖较深，且其核心的SFT数据集（107K）并未公开，这使得公平对比和完全复现打了一定折扣，更像是一个针对特定基线模型的“优秀优化套餐”。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：论文承诺将开源模型（AVoCaDO）。
- 数据集：论文中描述了用于SFT的107K数据集的构建方法和来源，但未提及是否公开该数据集本身。
- Demo：论文中未提及在线演示。
- 复现材料：在附录中提供了详细的训练超参数（学习率、批次大小、epoch数、GRPO采样设置等）、硬件信息（16x H200训练，H20推理）以及用于数据生成的Prompt。这些信息有助于复现训练过程。
- 论文中引用的开源项目：依赖的主要开源模型是Qwen2.5-Omni。数据来源包括TikTok-10M， Shot2Story等公开数据集。训练和评估中使用了Gemini-2.5-Pro， Gemini-2.5-Flash， GPT-4.1等商业API作为辅助工具。

📌 **核心摘要**

本文旨在解决现有视频描述模型普遍忽略音频信息、导致生成的描述缺乏音视频事件之间精确时间对齐的问题。为此，作者提出了AVoCaDO，一个由音视频时间编排驱动的描述模型。其核心方法是在基线模型Qwen2.5-Omni上实施一个两阶段后训练流程：首先，通过监督微调，在一个新构建的107K高质量、时序对齐的音视频描述数据集上训练；其次，利用组相对策略优化算法，设计三个互补的奖励函数（基于关键点检查表、对话准确性和长度正则化）来进一步优化描述的时序连贯性和细节。与已有方法相比，AVoCaDO的新意在于其针对音视频对齐的特定优化流程和奖励设计。实验结果表明，AVoCaDO在四个音视频描述基准测试上显著超越了现有开源模型（如在UGC-VideoCap上平均分73.2，超越Gemini-2.5-Pro的72.6），并且在仅视觉的描述任务上也能取得有竞争力的表现。该工作的实际意义在于为下游多模态理解与生成任务提供了更高质量、信息更丰富的描述基础。其主要局限性在于模型性能高度依赖强大的基线架构，且用于监督微调的大规模数据集未公开。

### 实验结果关键数据表（部分）

| 模型 | 模态 | video-SALMONN-2 Testset (Total ↓) | UGC-VideoCap (Avg. ↑) | Daily-Omni (QA Acc. ↑) |
| :--- | :---: | :---: | :---: | :---: |
| Gemini-2.5-Pro | A+V | 31.3 | 72.6 | 60.2 |
| Qwen2.5-Omni (基线) | A+V | 57.1 | 57.7 | 13.4 |
| video-SALMONN-2 | A+V | 38.8 | 67.2 | 29.9 |
| AVoCaDO (本文) | A+V | 37.3 | 73.2 | 50.1 |

---

### 5. [Syncphony: Synchronized Audio-to-Video Generation with Diffusion Transformers](/audio-paper-digest-blog/posts/2026-05-03-syncphony-synchronized-audio-to-video-generation)

✅ **7.0/10** | 前25% | #音视频 | #扩散模型 | #音频生成 #预训练

👥 **作者与机构**

- 第一作者：Jibin Song (机构未说明)
- 通讯作者：未说明
- 作者列表：Jibin Song (未说明), Mingi Kwon (未说明), Jaeseok Jeong (未说明), Youngjung Uh (未说明)
注：根据提供的摘要信息，无法确认任何作者的所属机构。

💡 **毒舌点评**

亮点：提出了CycleSync评估指标，将“同步质量”量化为从生成视频重建原音频的能力，这是一种巧妙且有洞察力的思路，超越了简单的帧级时间对齐。  
短板：核心方法（针对运动区域的损失加权、使用无音频模型进行引导）更像是对现有技术的组合与应用，缺乏足以重塑A2V领域的范式级创新；且论文未提及开源，对于一个依赖复杂扩散模型的工作，可复现性存疑。

🔗 **开源详情**

根据提供的论文摘要内容：
- 代码：论文中未提及代码链接。
- 模型权重：未提及是否公开。
- 数据集：实验使用了公开的AVSync15和The Greatest Hits数据集，但未说明是否提供了处理后的版本或额外数据。
- Demo：未提及。
- 复现材料：未提及训练细节、配置文件、检查点或附录说明。
- 论文中引用的开源项目：摘要中未提及任何依赖的开源项目或模型。

总结：论文中未提及任何开源计划或资源信息。

📌 **核心摘要**

1.  问题：现有文本到视频、图像到视频生成模型难以精确控制动作发生的时间点。音频提供了与视频运动对齐的时间线索，是解决此问题的关键条件，但现有音频到视频模型因间接的条件机制或有限的时序建模能力，同步效果不佳。
2.  方法核心：提出Syncphony模型，基于预训练的视频主干网络构建，包含两个关键组件：(1) Motion-aware Loss，在训练时侧重于学习高运动区域的损失，使模型更关注动态内容；(2) Audio Sync Guidance，在推理时，使用一个剥离了音频层、仅基于视觉对齐的“off-sync”模型来引导完整的Syncphony模型，从而更充分地利用音频线索。
3.  新意：与已有方法相比，本文不仅提出了针对性的训练与推理优化策略，还创新性地提出了CycleSync指标，从“生成的视频能多大程度还原原始音频”的角度来评估同步性，为该领域提供了新的评估视角。
4.  主要结果：在AVSync15和The Greatest Hits数据集上，Syncphony在同步准确性和视觉质量上均超越了现有方法。（论文未在摘要中提供具体数值）。
5.  实际意义：提升了AI生成视频的时间控制精度，使用户能通过音频更精确地“编排”视频内容，对多媒体内容创作、电影预览、音乐可视化等应用具有价值。
6.  主要局限性：方法严重依赖一个强大的预训练视频主干网络，其贡献更多在同步性的“适配”与“引导”上；CycleSync指标的有效性与通用性有待更广泛验证。

---

