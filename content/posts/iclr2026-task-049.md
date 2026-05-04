---
title: "ICLR 2026 - 音频检索 论文列表"
date: 2026-05-04
draft: false
tags: ["音频检索"]
categories: [iclr-2026]
description: "共 4 篇 ICLR 2026 音频检索 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频检索

共 **4** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [WAVE: Learning Unified & Versatile Audio-Visual Embeddings w](/audio-paper-digest-blog/posts/2026-05-04-wave-learning-unified-versatile-audio-visual) | 8.0分 | 前25% |
| 🥈 | [Beyond Instance-Level Alignment: Dual-Level Optimal Transpor](/audio-paper-digest-blog/posts/2026-05-04-beyond-instance-level-alignment-dual-level) | 7.5分 | 前25% |
| 🥉 | [OmniCVR: A Benchmark for Omni-Composed Video Retrieval with ](/audio-paper-digest-blog/posts/2026-05-04-omnicvr-a-benchmark-for-omni-composed-video) | 7.0分 | 前25% |
| 4. | [SupCLAP: Controlling Optimization Trajectory Drift in Audio-](/audio-paper-digest-blog/posts/2026-05-04-supclap-controlling-optimization-trajectory-drift) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [WAVE: Learning Unified & Versatile Audio-Visual Embeddings with Multimodal LLM](/audio-paper-digest-blog/posts/2026-05-04-wave-learning-unified-versatile-audio-visual)

🔥 **8.0/10** | 前25% | #音频检索 | #对比学习 | #多模态模型 #视频检索

👥 **作者与机构**

- 第一作者：Changli Tang (清华大学)
- 通讯作者：Chao Zhang (清华大学)
- 作者列表：Changli Tang (清华大学), Qinfan Xiao (清华大学), Ke Mei (腾讯微信视觉), Tianyi Wang (腾讯微信视觉), Fengyun Rao (腾讯微信视觉), Chao Zhang (清华大学)

💡 **毒舌点评**

这篇论文最大的亮点在于“敢为人先”，首次将文本、音频、视频统一到同一个LLM嵌入空间，打破了传统双编码器的限制，其联合训练策略带来的跨模态性能提升也令人印象深刻。然而，其创新性更多体现在对现有技术（LLM backbone，分层融合，多任务训练）的精巧集成与验证，而非提出颠覆性的新概念，因此对于追求“首个”或“全新范式”的读者而言可能略显不足。

🔗 **开源详情**

- 代码：论文中提到代码和检查点将在 `https://github.com/TCL606/WAVE` 发布。但当前论文PDF中未提供该链接。
- 模型权重：论文承诺将发布模型检查点（checkpoints）。
- 数据集：论文使用了多个公开数据集（如Panda-70M, MSR-VTT, AudioCaps等），但未提及发布新的数据集。
- Demo：论文中未提及在线演示。
- 复现材料：论文在Section 3.1, 3.2, 4.1, 4.2中详细描述了模型架构、训练流程、训练数据和超参数，提供了足够的复现信息。
- 论文中引用的开源项目：
    - 基础模型：Qwen2.5-Omni (Xu et al., 2025)
    - 音频编码器：BEATs (Chen et al., 2022b)
    - 训练数据：WavCaps, AudioCaps, Clotho, Panda-70M等。
    - 其他工具/模型：LoRA (Hu et al., 2022), InternVL-2.5-8B (Chen et al., 2024c) 用于重新标注。

📌 **核心摘要**

1. 要解决的问题：现有的多模态嵌入模型多基于独立编码器，缺乏一个能同时处理文本、音频、视频，并将它们统一到同一语义空间的通用模型。这对于需要动态模态（如音视频）深度理解的跨模态检索和生成任务是一个瓶颈。
2. 方法核心：提出了WAVE，一个基于Qwen2.5-Omni多模态大语言模型的统一音视频嵌入模型。其核心设计包括：1) 双音频编码器（语音+音频事件）全面捕获音频信息；2) 一种分层特征融合策略，聚合LLM多层隐藏状态以获得更鲁棒的表示；3) 联合多模态多任务训练策略，同时优化检索与问答任务。
3. 与已有方法相比新在哪里：WAVE是首个能够为文本、静音视频、音频以及同步音视频输入生成统一嵌入的LLM-based模型。与现有双编码器模型（如CLIP系列）或专注图像的LLM嵌入模型（如VLM2Vec）不同，WAVE真正实现了对动态音视频模态的统一建模，并具备生成提示感知（prompt-aware）嵌入的能力。
4. 主要实验结果：
    - 视频理解：在MMEB-v2视频基准整体得分59.9%，全面超越LamRA、GME等开源模型，甚至优于工业级模型Seed-1.6-Embedding（55.3%）。
    - 音频/音视频检索：在AudioCaps（文本到音频R@1: 44.2%）、Clotho（25.6%）、VGGSound（视频到音频R@1: 25.0%）等任务上达到SOTA。
    - 提示感知能力：在视频问答任务中，使用单独问题作为提示时平均准确率达72.5%，远超使用通用提示（51.8%），显著优于其他嵌入模型。
    - 消融实验：联合训练优于分别训练（7/8任务上提升）；分层特征融合（All-layer MLP）优于单层池化（如在MSR-VTT上，视频检索R@1从54.7%提升至56.1%）。
    主要实验结果见下表：

| 任务类别 | 基准 | 指标 | WAVE 7B | 最强基线/参考模型 | 参考值 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 视频嵌入 | MMEB-v2-Video Overall | Acc% | 59.9 | Seed-1.6-Embedding | 55.3 |
| | MMEB-v2-Video RET | R@1 | 72.5 | Seed-1.6-Embedding | 60.9 |
| | LoVR (theme-to-clip) | R@25 | 66.0 | LamRA 7B | 60.2 |
| 音频检索 | AudioCaps | R@1 | 44.2 | Reference Model | 42.2 |
| | Clotho | R@1 | 25.6 | Reference Model | 21.5 |
| 音视频检索 | VGGSound | R@1 | 25.0 | encoder-only | 10.3 |
| 音频问答 | MMAU | Acc% | 76.6 | Qwen2.5-Omni 7B | 71.5 |
| 视频问答 | MMEB-v2-Video QA (w/ questions) | Acc% | 72.5 | Seed-1.6-Embedding | 60.9 |

5. 实际意义：WAVE提供了一个强大的基线模型，使得在单一模型中处理任意模态组合的检索、分类和问答成为可能，极大地推动了跨模态应用（如通用多模态搜索、内容理解）的发展。
6. 主要局限性：论文未详细讨论模型在面对更复杂、更长或噪声更大的真实世界音视频场景下的鲁棒性。此外，其统一的嵌入空间是否能无缝支持所有下游生成任务（如图像生成）也未验证。

---

### 🥈 [Beyond Instance-Level Alignment: Dual-Level Optimal Transport for Audio-Text Retrieval](/audio-paper-digest-blog/posts/2026-05-04-beyond-instance-level-alignment-dual-level)

✅ **7.5/10** | 前25% | #音频检索 | #最优传输 | #对比学习 #跨模态

👥 **作者与机构**

- 第一作者：Wenqi Guo（上海交通大学）
- 通讯作者：Shikui Tu（上海交通大学），Lei Xu（上海交通大学，广东省人工智能与数字经济实验室（深圳））
- 作者列表：Wenqi Guo（上海交通大学）、Shikui Tu（上海交通大学）、Lei Xu（上海交通大学，广东省人工智能与数字经济实验室（深圳））

💡 **毒舌点评**

亮点：论文从“特征通道可靠性”这一细粒度视角切入，用最优传输的语言重新定义了跨模态对齐问题，理论推导（集中界分析）为小批次下的不稳定性提供了有说服力的解释，这比单纯堆砌模块更显功力。短板：虽然实验全面，但核心创新（双层对齐+可靠性边际）的物理直觉略显复杂，且声称“特征级OT计算开销可忽略”这一论断，在真实部署场景（如视频检索、超长音频）下的泛化能力值得商榷。

🔗 **开源详情**

- 代码：论文中未提及代码链接。附录A提供了伪代码，但未指明完整实现代码的发布渠道。
- 模型权重：未提及。
- 数据集：使用了公开的AudioCaps、Clotho、ESC-50数据集，但论文中未提供获取链接或特殊处理说明。
- Demo：未提及。
- 复现材料：论文附录提供了极其详细的超参数设置（表6）、训练算法伪代码、理论证明、数据集统计、评估指标定义等，复现所需的信息非常充分。
- 论文中引用的开源项目：未明确列出。提到了使用预训练的编码器（如ResNet38, BERT, Beats等），但未指定具体版本或来源。
- 总体评估：论文具备高质量的复现指南，但缺少最直接的开源代码和权重链接，对快速复现构成障碍。论文中未提及明确的开源计划。

📌 **核心摘要**

1. 问题：现有的跨模态检索方法（如对比学习、逆最优传输IOT）主要进行实例级对齐，隐含假设所有嵌入维度同等重要。在小批次训练中，这种假设会放大噪声和偏差，导致对齐信号不稳定。
2. 方法核心：提出DART（双层对齐鲁棒传输）框架。它在实例级保留IOT目标以对齐样本对，同时引入特征级正则化。该正则化将每个特征维度视为一个分布，并使用非平衡Wasserstein距离（UWD） 来对齐音频和文本的特征分布。此外，设计了可靠性感知边际（RAM），基于方差、峰度和跨模态相关性动态加权特征通道，抑制噪声通道。
3. 与已有方法相比新在哪里：1）超越单一的实例级对齐，增加特征级分布对齐，提供细粒度的正则化。2）RAM能自适应地识别并强调跨模态一致且稳定的语义通道。3）提供了理论分析，证明实例级损失受最大距离控制，而特征级损失受传输计划的Frobenius范数控制，后者在小批次下更鲁棒。
4. 主要实验结果：在AudioCaps和Clotho两个主要基准上，DART在多个编码器设置下均达到或超越SOTA。例如，在AudioCaps（ResNet38+BERT）上，相比最强基线Luong et al. (2024)，文本到音频检索R@1提升1.1个百分点，音频到文本提升4.5个百分点。在模拟小批次（k=8, 32）和噪声/半监督标签（20%，40%）的严苛条件下，DART展现出显著更强的鲁棒性。详见下表。

| 条件 | 方法 | 文本->音频 (R@1) | 音频->文本 (R@1) |
| :--- | :--- | :--- | :--- |
| 标准设置 (Batch=256, AuC) | Luong et al. (2024) | 39.10 | 49.94 |
| | DART w/ RAM | 41.67 | 55.27 |
| 小批次 (Batch=8, AuC) | Luong et al. (2024) | 20.44 | 32.91 |
| | DART (LIOT+LUWD) | 24.24 | 35.21 |
| 40%噪声标签 (Batch=32, AuC) | Luong et al. (2024) | 26.20 | 34.37 |
| | DART | 29.67 | 37.09 |
| 零样本声音事件检测 (ESC-50) | IOT (Luong et al.) | - | 79.25 (R@1) |
| | DART | - | 80.75 (R@1) |

5. 实际意义：该方法为在资源受限（小批次、标注稀缺）或噪声数据环境下的跨模态检索提供了更鲁棒的解决方案，具有实际部署价值。其思想可推广至其他跨模态任务（如图文检索已验证）。
6. 主要局限性：特征级OT的计算复杂度随特征维度平方增长，虽在文中声称开销小，但在超高维嵌入或极大批次下可能成为瓶颈；理论分析基于一系列理想化假设，与实际情况可能有差距。

---

### 🥉 [OmniCVR: A Benchmark for Omni-Composed Video Retrieval with Vision, Audio, and Text](/audio-paper-digest-blog/posts/2026-05-04-omnicvr-a-benchmark-for-omni-composed-video)

✅ **7.0/10** | 前25% | #音频检索 | #多模态模型 | #基准测试 #数据集

👥 **作者与机构**

- 第一作者：Junyang Ji（清华大学、南方科技大学、快手科技）
- 通讯作者：Zhihai He（南方科技大学）、Wenming Yang（清华大学）
- 作者列表：Junyang Ji（清华大学，南方科技大学，快手科技），Shengjun Zhang（快手科技），Da Li（快手科技，中国科学院大学），Yuxiao Luo（快手科技，北京大学），Yan Wang（快手科技），Di Xu（快手科技），Biao Yang（快手科技），Wei Yuan（快手科技，项目负责人），Fan Yang（快手科技，项目负责人），Zhihai He（南方科技大学，通讯作者），Wenming Yang（清华大学，通讯作者）

#

💡 **毒舌点评**

亮点：论文一针见血地指出了当前多模态模型“视觉-文本”偏科、严重忽视音频信息的普遍问题，并通过一个高质量、大规模的诊断基准（OmniCVR）将其量化，这比提出一个改进模型更有价值。短板：提出的解决方案“AudioVLM2Vec”本质上是把音频先转录/描述成文本再喂给视觉语言模型，这种“音频-文本化”的工程化方案虽然有效，但显得不够优雅，且引入了额外的延迟和潜在信息损失，算不上是最根本的端到端解决方案。

#

🔗 **开源详情**

- 代码：论文承诺将开源完整代码库，包括数据生成脚本、训练代码和评估协议。具体代码仓库链接在提供的论文全文中未直接显示，但提到数据将发布在HuggingFace（https://huggingface.co/datasets/Jun-Yang/OmniCVR），代码链接可能随发布同步公开。论文中未明确给出代码仓库的直接URL。
- 模型权重：论文承诺将公开AudioVLM2Vec模型权重。未提及具体模型权重的发布链接。
- 数据集：OmniCVR数据集（包括160K+片段、50K+三元组、5K测试集）将完全开源。获取方式为通过上述HuggingFace链接。
- Demo：论文中未提及是否提供在线演示。
- 复现材料：论文在附录（Appendix G）中提供了用于数据生成（如生成视频描述、修改指令）的完整提示词模板，以及详细的双重验证协议说明，这对于复现数据生成管线至关重要。然而，关于模型训练的具体细节（学习率、优化器、批次大小等）论文中未提及。
- 论文中引用的开源项目/模型：论文明确使用了以下开源模型作为组件或基线：
    *   Qwen2.5-Omni：用于视频音频标注生成。
    *   Gemini 2.5 Pro：用于数据验证。
    *   Qwen2-Audio-7B-Instruct：用于AudioVLM2Vec中的音频描述生成。
    *   Qwen2-VL：作为VLM2Vec和AudioVLM2Vec的视觉-语言骨干。
    *   CLIP、BLIP、BLIP-2、ImageBind 等作为基线模型。
    *   PySceneDetect：用于视频分割。
    *   所有使用的数据集（HowTo100M, MSR-VTT, VATEX, YouTube8M, YouCook2, VALOR）均为公开数据集。

📌 **核心摘要**

本文旨在解决现有视频检索基准和模型普遍忽视音频模态的关键问题。论文提出了首个全模态组合视频检索基准OmniCVR，该基准将视觉、音频和文本视为同等重要的第一类模态。核心方法是构建了一个包含50,000个三元组（源视频、修改文本、目标视频）的大规模数据集，其中超过57%的查询需要同时修改视觉和音频（集成查询）。为此，作者设计了一个可扩展的自动化数据生成管线，并通过大模型与人类专家的双重验证确保数据质量。为验证基准，论文提出了AudioVLM2Vec模型，其核心创新是利用音频理解大模型（Qwen2-Audio）将音频转为细粒度描述文本，再与视觉信息一同输入VLM2Vec框架。主要实验结果表明，AudioVLM2Vec在OmniCVR基准上取得了最优性能，尤其是在音频中心查询上，相比基线VLM2Vec实现了巨大的性能提升（R@1从12.4提升到77.2）。这证明了显式注入音频语义对于跨模态检索的关键作用，并暴露了现有“全模态”模型在音频推理上的根本缺陷。该工作的实际意义在于为更真实的多模态视频理解设立了新标准，推动研究向听觉-视觉-语言融合迈进。主要局限性在于提出的“音频转文本”方案带来了额外的推理延迟（约1.77倍），且该方案可能无法完美捕捉音频的所有非语义信息（如音色、节奏等）。

#

---

### 4. [SupCLAP: Controlling Optimization Trajectory Drift in Audio-Text Contrastive Learning with Support Vector Regularization](/audio-paper-digest-blog/posts/2026-05-04-supclap-controlling-optimization-trajectory-drift)

✅ **7.0/10** | 前25% | #音频检索 | #对比学习 | #多语言 #零样本

👥 **作者与机构**

- 第一作者：Jiehui Luo（中央音乐学院），Yuguo Yin（北京大学）（论文注明贡献相等）
- 通讯作者：Yuguo Yin（北京大学）
- 作者列表：
  - Jiehui Luo（中央音乐学院）
  - Yuguo Yin（北京大学）
  - Yuxin Xie（北京大学）
  - Jinghan Ru（北京大学）
  - Xianwei Zhuang（北京大学）
  - Minghua He（北京大学）
  - Aofan Liu（北京大学）
  - Zihan Xiong（电子科技大学）
  - Dongchao Yang（香港中文大学）

💡 **毒舌点评**

这篇论文的亮点在于将对比学习中的“力分解”具象化，并精准指出垂直分量是“双刃剑”，由此设计的SVR正则化方法理论自洽且实验增益稳定。短板则是其创新核心（一个可学习的正则化项）相对朴素，且论文未开源代码，使得这篇发表在顶会上的工作在社区传播和快速迭代上打了折扣。

🔗 **开源详情**

-   代码：论文中未提及代码链接。
-   模型权重：论文中未提及公开的预训练或微调后的模型权重。
-   数据集：使用了公开的AudioCaps和Clotho数据集。多语言翻译版本的数据集未提及是否公开。
-   Demo：未提及。
-   复现材料：论文提供了较为详细的实现细节（如编码器选择、优化器、学习率、批次大小、温度等），并在附录中补充了部分消融实验和统计显著性分析。
-   论文中引用的开源项目：CED-Base（音频编码器）， SONAR-TE（文本编码器）， Deepseek V3（用于翻译和回译分析）。

📌 **核心摘要**

本文针对音频-文本对比学习（CLAP）中标准InfoNCE损失存在的优化轨迹漂移问题展开研究。作者发现，来自负样本的推力可分解为与拉力方向平行和垂直的分量；其垂直分量虽包含丰富信息，但其不受控的特性会导致优化路径发生侧向偏移，影响训练稳定性和最终对齐质量。

为此，论文提出了SupCLAP框架，其核心是支持向量正则化（SVR）。SVR通过引入一个辅助的文本支持向量（由原始文本嵌入沿正样本方向偏移得到），构造额外的对比损失项。该损失项的梯度能选择性地抑制负样本推力中的垂直分量，同时保留平行分量，从而引导优化轨迹更稳定、更直接地收敛。

与现有方法（如InfoNCE、SigLIP）相比，SVR的新颖之处在于其从优化动态的几何角度入手，提供了可控的轨迹修正机制。论文进一步探索了关键参数“语义半径R”的无监督建模策略，提出了静态（StaticSVR）和动态自适应（DynamicSVR）两种版本，并为后者设计了约束项以提高预测稳定性。

主要实验结果表明：
1.  在单语音频文本检索（AudioCaps，Clotho）上，双向的动态SVR（bi-DynamicSVR）显著优于InfoNCE和SigLIP基线。例如，在AudioCaps文本到音频检索任务中，InfoNCE的R@1为41.87，而bi-DynamicSVR提升至44.16。
2.  在零样本音频分类（ESC-50，US8K）上，bi-DynamicSVR同样取得最佳准确率，如在ESC-50上达到92.1%（对比InfoNCE的89.6%）。
3.  在更具挑战性的多语言检索任务中，将SVR应用于现有方法（如ATRI-CACL）能带来显著增益。

该方法的实际意义在于提供了一种高效（训练开销可忽略，推理无额外计算）且通用的对比学习训练改进策略。主要局限性在于：1）论文未开源代码和模型，限制了社区的快速验证与应用；2）方法依赖于超参数（如α, β, R的建模策略）的选择，其最佳设置可能因数据和任务而异。

#

---

