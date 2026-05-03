---
title: "ICLR 2026 - 基准测试 论文列表"
date: 2026-05-03
draft: false
tags: ["基准测试"]
categories: [iclr-2026]
description: "共 8 篇 ICLR 2026 基准测试 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 基准测试

共 **8** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [WorldSense: Evaluating Real-world Omnimodal Understanding fo](/audio-paper-digest-blog/posts/2026-05-03-worldsense-evaluating-real-world-omnimodal) | 9.0分 | 前25% |
| 🥈 | [XModBench: Benchmarking Cross-Modal Capabilities and Consist](/audio-paper-digest-blog/posts/2026-05-03-xmodbench-benchmarking-cross-modal-capabilities) | 8.5分 | 前25% |
| 🥉 | [STAR-Bench: Probing Deep Spatio-Temporal Reasoning as Audio ](/audio-paper-digest-blog/posts/2026-05-03-star-bench-probing-deep-spatio-temporal-reasoning) | 8.5分 | 前25% |
| 4. | [Omni-Reward: Towards Generalist Omni-Modal Reward Modeling w](/audio-paper-digest-blog/posts/2026-05-03-omni-reward-towards-generalist-omni-modal-reward) | 8.0分 | 前25% |
| 5. | [MCIF: Multimodal Crosslingual Instruction-Following Benchmar](/audio-paper-digest-blog/posts/2026-05-03-mcif-multimodal-crosslingual-instruction) | 8.0分 | 前25% |
| 6. | [OmniVideoBench: Towards Audio-Visual Understanding Evaluatio](/audio-paper-digest-blog/posts/2026-05-03-omnivideobench-towards-audio-visual-understanding) | 7.5分 | 前50% |
| 7. | [VideoMathQA: Benchmarking Mathematical Reasoning via Multimo](/audio-paper-digest-blog/posts/2026-05-03-videomathqa-benchmarking-mathematical-reasoning) | 7.5分 | 前25% |
| 8. | [EchoMind: An Interrelated Multi-level Benchmark for Evaluati](/audio-paper-digest-blog/posts/2026-05-03-echomind-an-interrelated-multi-level-benchmark) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [WorldSense: Evaluating Real-world Omnimodal Understanding for Multimodal LLMs](/audio-paper-digest-blog/posts/2026-05-03-worldsense-evaluating-real-world-omnimodal)

🔥 **9.0/10** | 前25% | #基准测试 | #多模态模型 | #音视频 #模型评估

👥 **作者与机构**

- 第一作者：Jack Hong (Xiaohongshu Inc.)
- 通讯作者：Weidi Xie (Shanghai Jiao Tong University)
- 作者列表：Jack Hong (Xiaohongshu Inc.)， Shilin Yan (Xiaohongshu Inc.)， Jiayin Cai (Xiaohongshu Inc.)， Xiaolong Jiang (Xiaohongshu Inc.)， Yao Hu (Xiaohongshu Inc.)， Weidi Xie (Shanghai Jiao Tong University)

💡 **毒舌点评**

这篇论文精准地戳中了当前多模态大模型“偏科视觉，忽视听觉”的痛点，其提出的WorldSense基准设计严谨、任务多样，成功构建了一个揭示模型短板的“考卷”。然而，论文本身并非提出新模型，而是一个评估工具，因此其技术贡献集中在数据与实验设计，而非算法突破；同时，尽管评估结论深刻，但给出的改进路线图（如耦合数据、架构改进）略显宽泛，缺乏具体的技术方案验证。

🔗 **开源详情**

- 代码：论文中未提及代码链接。项目主页为 https://jaaackhongggg.github.io/WorldSense，可能包含数据集获取方式，但未明确说明代码仓库。
- 模型权重：未提及。论文评估的是现有模型，未发布新模型。
- 数据集：是。WorldSense数据集已公开发布，可通过项目主页或GitHub获取。
- Demo：未提及。
- 复现材料：论文提供了详细的评估提示模板（附录A.4）和数据集统计信息（表1），但未提供训练细节（因其为评估基准）。
- 论文中引用的开源项目：论文中引用了多个作为评估对象的开源模型和基准，如：Unified-IO-2, OneLLM, VideoLLaMA2, VITA-1.5, Qwen2.5-Omni, video-SALMONN, Video-LLaVA, Qwen2-VL, mPLUG-Owl3, LLaVA-OneVision, InternVL2.5, LLaVA-Video，以及用于数据构建的FineVideo和Music-AVQA数据集。
- 论文中未提及开源计划：未明确提及未来是否会开源更多资源（如代码、训练脚本等）。

📌 **核心摘要**

1.  要解决什么问题：现有针对多模态大语言模型（MLLMs）的评估基准大多局限于视觉-文本，或无法充分评估模型整合音频、视频、文本等全模态信息以理解真实世界场景的能力。
2.  方法核心是什么：提出WorldSense，首个专注于评估MLLM在真实世界场景中进行全模态视频理解的基准。其核心是设计强耦合音视频的问答任务，确保正确回答必须同时依赖视觉和听觉信息。
3.  与已有方法相比新在哪里：WorldSense的特点是：（i）全模态强耦合：任务设计强调音视频协同感知，移除任一模态则无法正确回答；（ii）内容与任务多样化：包含1,662个音视频同步视频，覆盖8大类67子类场景，设计3,172个多选问答对，涉及26种任务，从基础感知到高级推理；（iii）高质量人工标注：所有问答对由80位专家标注员经过多轮校正完成。
4.  主要实验结果如何：在WorldSense上评估了多种最先进模型。实验表明，现有模型在理解真实世界场景时面临巨大挑战。最佳模型Gemini 2.5 Pro准确率仅为65.1%。开源音视频模型（如Video-LLaMA2）表现接近随机猜测（~25%），甚至低于纯视频模型。消融实验显示，原始音频信号比字幕文本能提供更多信息（尤其对于音乐），且视觉输入对性能提升至关重要。
    - 主要结果表格（表2核心数据）：

    | 模型类型 | 方法 | 平均准确率 |
    | :--- | :--- | :--- |
    | 开源音视频模型 | Unified-IO-2 XXL (7B) | 25.9% |
    | | VideoLLaMA2 (7B) | 25.4% |
    | | VITA-1.5 (7B) | 36.9% |
    | | Qwen2.5-Omni (7B) | 45.4% |
    | | video-SALMONN 2+ (72B) | 56.5% |
    | 开源视频模型 | LLaVA-OneVision (7B) | 37.7% |
    | | InternVL2.5 (8B) | 39.1% |
    | | LLaVA-Video (7B) | 40.2% |
    | 闭源模型 | Claude 3.5 Sonnet | 34.8% |
    | | GPT 4o | 42.6% |
    | | Gemini 1.5 Pro | 48.0% |
    | | Gemini 2.5 Pro | 65.1% |
    - 图表结论：图4和图5展示了模型在不同任务类别和音频类型上的性能差异，暴露了模型在音频理解、空间推理、情感识别等方面的普遍短板。
5.  实际意义是什么：为评估和推动MLLM的真实世界全模态理解能力提供了一个高质量、标准化的平台。揭示了当前模型在多模态融合方面的显著不足，为未来模型设计和训练指明了方向。
6.  主要局限性是什么：基准采用多选题形式，一定程度上限制了对模型生成能力的评估；无法完全涵盖真实世界理解所需的开放式回答和复杂推理。

---

### 🥈 [XModBench: Benchmarking Cross-Modal Capabilities and Consistency in Omni-Language Models](/audio-paper-digest-blog/posts/2026-05-03-xmodbench-benchmarking-cross-modal-capabilities)

🔥 **8.5/10** | 前25% | #基准测试 | #模型评估 | #多模态模型 #大语言模型

👥 **作者与机构**

- 第一作者：Xingrui Wang (1, 2) （1: Advanced Micro Devices, 2: Johns Hopkins University）
- 通讯作者：Jiang Liu (1B) （1: Advanced Micro Devices）
- 作者列表：Xingrui Wang (Advanced Micro Devices; Johns Hopkins University), Jiang Liu (Advanced Micro Devices), Chao Huang (Advanced Micro Devices; University of Rochester), Xiaodong Yu (Advanced Micro Devices), Ze Wang (Advanced Micro Devices), Ximeng Sun (Advanced Micro Devices), Jialian Wu (Advanced Micro Devices), Alan Yuille (Johns Hopkins University), Emad Barsoum (Advanced Micro Devices), Zicheng Liu (Advanced Micro Devices)

💡 **毒舌点评**

亮点在于其“手术刀”般的诊断设计：通过系统置换上下文与候选模态（如V→T vs T→V），该基准无情地撕开了当前最强模型（如Gemini 2.5 Pro）在看似统一的框架下，实际上对不同模态的“厚此薄彼”和推理路径不对称，尤其是对音频的“二等公民”待遇。短板则是作为评测基准，它本身不解决任何能力短板，更像是给模型“做体检并出具详细报告”，但报告中揭示的“空间时间推理”等顽疾，需要模型架构和训练方法层面的根本性革新，而论文对此的处方仅限于建议增加交错数据和任务覆盖，略显宏观。

🔗 **开源详情**

- 代码：论文提供了GitHub仓库链接：https://github.com/XingruiWang/XModBench。论文中未提及代码的具体内容（如是否包含评估脚本、数据生成代码）。
- 模型权重：未提及（因为是评测基准，不发布模型）。
- 数据集：论文承诺将公开所有数据，可通过上述GitHub链接获取。
- Demo：未提及。
- 复现材料：论文提到了附录（如Appendix F, G）中包含更详细的人类评估、数据来源和处理方法，但未在正文中说明是否提供完整的训练/评估配置文件、检查点等。
- 引用的开源项目：论文在数据生成和质量控制中引用了FireRedTTS、GPT-5等工具，并在相关工作中引用了众多开源数据集和模型（如VGG-Sound, STARSS23, Qwen2.5-Omni等）。

📌 **核心摘要**

1. 问题：当前全能语言模型（OLLM）声称能统一处理文本、视觉和音频，但其是否真正实现了与输入模态无关的推理，还是存在系统性的模态偏差，尚不清楚。
2. 方法核心：提出XModBench，一个大规模的三模态多项选择问答基准。其核心是模态平衡设计：每个语义相同的“上下文-候选”问题，都会被系统地实例化为六种模态配置（如文本→视觉、音频→文本等），从而能精确测量模型在感知、空间推理等五个任务家族上的跨模态一致性。
3. 与已有方法相比新在哪里：不同于现有基准多固定上下文或候选模态，XModBench是首个全面覆盖音频、视觉、文本所有六种跨模态方向，并专门引入“模态差异”和“方向不平衡”两个新指标来量化诊断跨模态一致性的基准。
4. 主要实验结果：对15个OLLM的评估显示，即使是SOTA的Gemini 2.5 Pro（平均准确率70.6%），也存在显著问题：(a) 任务短板：空间和时空推理任务准确率低于60%，远低于感知和语言任务（~76%）；(b) 模态差异：当相同语义由音频而非文本传递时，性能大幅下降（例如，在文本→音频与文本→视觉配置中，差距可达49%）；(c) 方向不平衡：当视觉作为上下文、文本作为选项时，性能通常优于反向设置（文本上下文、视觉选项）。
5. 实际意义：XModBench为评估和诊断OLLM的跨模态能力提供了一个强大、系统的工具，其揭示的普遍弱点为未来模型架构改进（如加强音频表征、提升空间推理）和训练策略（如增加交错数据）提供了明确方向。
6. 主要局限性：基准本身是评估工具，其价值依赖于所测试模型的质量和多样性。论文中对模型弱点的诊断虽清晰，但提出的改进建议（如使用交错数据）较为宏观，缺乏具体的算法或训练方法层面的解决方案。

---

### 🥉 [STAR-Bench: Probing Deep Spatio-Temporal Reasoning as Audio 4D Intelligence](/audio-paper-digest-blog/posts/2026-05-03-star-bench-probing-deep-spatio-temporal-reasoning)

🔥 **8.5/10** | 前25% | #基准测试 | #模型评估 | #音频大模型 #空间音频

👥 **作者与机构**

- 第一作者：Zihan Liu（北京航空航天大学，上海人工智能实验室）
- 通讯作者：Jiaqi Wang（上海人工智能实验室，香港中文大学），Dahua Lin（香港中文大学，上海人工智能实验室）
- 作者列表：Zihan Liu（北京航空航天大学，上海人工智能实验室）、Zhikang Niu（上海交通大学，上海创新研究院）、Qiuyang Xiao（上海交通大学，上海创新研究院）、Zhisheng Zheng（上海交通大学，上海创新研究院）、Ruoqi Yuan（北京航空航天大学）、Yuhang Zang（上海人工智能实验室）、Yuhang Cao（上海人工智能实验室）、Xiaoyi Dong（上海人工智能实验室，香港中文大学）、Jianze Liang（上海人工智能实验室）、Xie Chen（上海交通大学，上海创新研究院）、Leilei Sun（北京航空航天大学）、Dahua Lin（香港中文大学，上海人工智能实验室）、Jiaqi Wang（上海人工智能实验室，香港中文大学，上海创新研究院）

💡 **毒舌点评**

亮点：这篇工作精准地抓住了当前音频大模型“语义理解尚可，物理感知不足”的软肋，提出的“音频4D智能”概念和配套的STAR-Bench基准测试设计得非常系统、严谨，从基础感知到复杂推理层层递进，为评估和改进模型提供了极具价值的标尺。短板：论文的震撼力更多来自于“诊断出病症”——即19个模型在基准上集体“翻车”，尤其是开源模型的表现甚至不如随机猜测，但这恰恰暴露了当前整个音频理解领域在底层物理建模上的普遍缺失，而本文作为基准提出者并未给出治疗方案。

🔗 **开源详情**

*   代码：提供了GitHub代码仓库链接：https://github.com/InternLM/StarBench。
*   模型权重：论文未提及提供在STAR-Bench上训练或优化的模型权重。
*   数据集：提供了HuggingFace数据集链接：https://huggingface.co/datasets/internlm/STAR-Bench。
*   Demo：论文中未提及在线演示。
*   复现材料：论文提供了详细的数据构建流程描述（包括标注指南、提示词示例）、评估协议（循环评测、多次运行）以及完整的模型评估结果表格，复现信息充分。附录中包含更多案例分析和结果细节。
*   论文中引用的开源项目：明确提到了依赖 Pyroomacoustics 进行空间音频模拟，并引用了 Clotho、FSD50K、STARSS23 等开源数据集作为整体推理任务的数据源。评估的模型包括多个开源模型（如SALMONN, Qwen2-Audio, Audio Flamingo等）和闭源模型（Gemini 2.5, GPT-4o）。
*   论文中未提及开源计划：未提及开源计划，因为其本身已提供了核心资源。

📌 **核心摘要**

1.  问题：现有音频大模型的基准测试主要评估可通过文本描述的语义内容，忽略了对声音在时间和三维空间中动态进行推理的能力（即“音频4D智能”）。实验表明，模型仅依靠文本描述就能在现有基准上取得接近原始音频的效果，证明这些基准未能测试细粒度、非语言的声学线索。
2.  方法核心：本文提出了STAR-Bench基准，包含两个层级：基础声学感知（对音高、响度、时长、方位角、仰角、距离等属性的绝对范围与相对区分敏感度测试）和整体时空推理（包含需要因果、物理知识的音频片段重排序任务，以及复杂场景下的静态定位、多源关系、动态轨迹追踪等空间任务）。
3.  创新点：首次形式化并实证检验了“音频4D智能”评估的必要性；设计了结合程序化合成与高质量人工标注的严谨数据构建流程；提供了涵盖闭源与开源模型的首个全面评测。
4.  主要实验结果：评估了19个模型。人类基准在各项任务上表现优异（如时间推理88%准确率），而最强的闭源模型Gemini 2.5 Pro平均准确率仅49.59%，开源模型大多接近随机水平。误差分析显示，模型主要在细粒度感知（如Gemini 2.5 Pro在时间任务中84%错误源于感知错误）、物理世界知识和多音频信息整合上存在严重缺陷。
5.  实际意义：为音频大模型的发展提供了清晰的“体检报告”和改进方向，强调了未来模型需要原生支持多通道音频输入、提升细粒度感知能力和整合物理知识，对推动模型向更真实的物理世界理解迈进有重要意义。
6.  主要局限性：作为一个评估基准，其本身不解决模型性能问题；任务设计可能仍未能完全覆盖真实世界所有复杂的音频时空推理场景；对多通道音频的评估揭示了当前模型架构的普遍缺陷，但未提出新的建模方法。

---

### 4. [Omni-Reward: Towards Generalist Omni-Modal Reward Modeling with Free-Form Preferences](/audio-paper-digest-blog/posts/2026-05-03-omni-reward-towards-generalist-omni-modal-reward)

🔥 **8.0/10** | 前25% | #基准测试 | #强化学习 | #数据集 #大语言模型

👥 **作者与机构**

- 第一作者：Zhuoran Jin（中国科学院大学人工智能学院，中国科学院自动化研究所）
- 通讯作者：Jun Zhao（中国科学院大学人工智能学院，中国科学院自动化研究所）
- 作者列表：
    - Zhuoran Jin（中国科学院大学人工智能学院，中国科学院自动化研究所）
    - Hongbang Yuan（中国科学院大学人工智能学院，中国科学院自动化研究所）
    - Kejian Zhu（中国科学院大学人工智能学院，中国科学院自动化研究所）
    - Jiachun Li（中国科学院大学人工智能学院，中国科学院自动化研究所）
    - Pengfei Cao（中国科学院大学人工智能学院，中国科学院自动化研究所）
    - Yubo Chen（中国科学院大学人工智能学院，中国科学院自动化研究所）
    - Kang Liu（中国科学院大学人工智能学院，中国科学院自动化研究所）
    - Jun Zhao（中国科学院大学人工智能学院，中国科学院自动化研究所）

💡 **毒舌点评**

这篇论文的框架搭得很完整，从基准、数据到模型，是一个“一站式解决方案”，对推动多模态奖励建模的公平评测和进一步研究很有价值。但核心的“Omni-RewardModel”本身（尤其是判别式版）在架构创新上显得比较常规，更像是一个性能优异的“集大成者”，而非一个方法论上的“开创者”。

🔗 **开源详情**

*   代码：提供了GitHub仓库链接：`https://github.com/HongbangYuan/OmniReward`
*   模型权重：论文提到了训练得到的Omni-RewardModel-BT和Omni-RewardModel-R1，并提供了基准数据集的Hugging Face链接：`https://hf.co/datasets/HongbangYuan/OmniRewardBench`。代码仓库可能包含相关权重或训练脚本。
*   数据集：论文明确开源了评测基准（Omni-RewardBench）和训练数据集（Omni-RewardData），并通过Hugging Face链接提供下载。
*   Demo：论文中未提及在线演示链接。
*   复现材料：论文详细描述了数据构建流程（附录D）、标注指南、模型训练基座（MiniCPM-o, Qwen2.5-VL）和评估设置。提供了评估的Prompt模板（附录K）。但部分具体的训练超参数（如学习率、批大小）需查看附录或代码仓库。
*   依赖的开源项目/模型：主要依赖的开源基座模型包括MiniCPM-o-2.6、Qwen2.5-VL系列、InternVL系列、Gemma-3系列等多模态大语言模型。

📌 **核心摘要**

1. 问题：当前奖励模型（RM）面临两大挑战：一是模态不平衡，主要关注文本和图像，对视频、音频、3D支持不足；二是偏好刚性，基于固定二元偏好对训练，无法捕捉个性化、多样的自由形式偏好。
2. 方法：提出Omni-Reward框架，包含三部分：（1）评估：Omni-RewardBench，首个覆盖5种模态、9个任务且支持自由形式偏好的RM基准；（2）数据：Omni-RewardData，包含248K通用偏好对和69K用于理解自由形式偏好的指令微调数据；（3）模型：Omni-RewardModel，包括判别式（Omni-RewardModel-BT）和生成式（Omni-RewardModel-R1）两种RM。
3. 创新点：核心创新在于首次构建了全模态、支持自由形式偏好的统一评估基准和训练数据集，并据此训练出性能优越的通用RM。生成式RM（R1）通过强化学习训练，能输出推理过程，提高了透明度。
4. 主要实验结果：
    - 在自建基准Omni-RewardBench上，Omni-RewardModel-BT以65.36%的准确率（w/ Ties设置）超过了最强的专有模型Claude 3.5 Sonnet (66.54%)和开源模型Gemma-3 27B (65.12%)，并在文本-音频、3D等任务上表现出色。
    - 在公开基准VL-RewardBench上，Omni-RewardModel-BT达到76.3%准确率，超越了所有对比方法，达到SOTA。
    - 消融实验证明了混合多模态数据训练和指令微调（用于理解自由偏好）对提升模型泛化能力至关重要。
5. 实际意义：为多模态大模型的对齐（RLHF）提供了更全面、更灵活的奖励信号建模工具，有助于构建更符合多样化人类偏好的AI系统。
6. 主要局限性：基准规模（3725对）相对有限；当前任务划分仍较粗粒度；偏好数据仅限于单轮交互；生成式RM的训练技术尚属初步探索。

---

### 5. [MCIF: Multimodal Crosslingual Instruction-Following Benchmark from Scientific Talks](/audio-paper-digest-blog/posts/2026-05-03-mcif-multimodal-crosslingual-instruction)

🔥 **8.0/10** | 前25% | #基准测试 | #多模态模型 | #多语言 #大语言模型

👥 **作者与机构**

- 第一作者：Sara Papi（Fondazione Bruno Kessler (FBK)）
- 通讯作者：未说明
- 作者列表：Sara Papi（Fondazione Bruno Kessler (FBK)）， Maike Züfle（Karlsruhe Institute of Technology (KIT)）， Marco Gaido（Fondazione Bruno Kessler (FBK)）， Beatrice Savoldi（Fondazione Bruno Kessler (FBK)）， Danni Liu（Karlsruhe Institute of Technology (KIT)）， Ioannis Douros（Translated (Italy)）， Luisa Bentivogli（Fondazione Bruno Kessler (FBK)）， Jan Niehues（Karlsruhe Institute of Technology (KIT)）

💡 **毒舌点评**

亮点在于MCIF填补了多模态、跨语言、长短文指令跟随评测的关键空白，且全部数据由人工标注，质量可信度高。不足是它本质上是一个评测基准而非提出新的建模方法，其结论（“模型在多模态融合和长文本上表现差”）虽有意义但并不出人意料，核心价值更偏向“系统性量化已知问题”。

📌 **核心摘要**

1. 要解决的问题：现有评测基准在评估多模态大语言模型（MLLM）的跨语言和多模态指令跟随能力时存在不足，常局限于英语、单一模态、短文本或缺乏人工标注。
2. 方法核心：提出MCIF基准，这是一个从科学演讲中构建的、人工标注的平行数据集，覆盖文本、语音、视频三种模态，英语、德语、意大利语、中文四种语言，以及识别、翻译、问答、摘要四大类任务，并设计了固定（MCIFfix）和多样化（MCIFmix）两套提示词以评估模型鲁棒性。
3. 与已有方法相比新在哪里：这是首个同时覆盖三模态、四语言、包含长短文本输入、并完全基于人工标注的跨语言多模态指令跟随评测基准，实现了模态、语言、任务长度的系统性平行对比。
4. 主要实验结果：对23个模型（7个LLM，5个SpeechLLM，5个VideoLLM，6个MLLM）的评测显示，所有模型都面临挑战。摘要任务最难，部分模型表现甚至低于随机水平；问答任务受益于语音/视频输入；识别任务对提示词变化敏感；翻译任务由LLM主导；长文本输入普遍导致性能下降，尤其影响SpeechLLM和MLLM；MLLM在有效融合语音和视频模态方面仍然不足。关键结果见下表。

表2 评测主要结果摘录（平均值）

| 上下文 | 输入模态 | 模型 | 识别(WER↓) | 翻译(COMET↑) | 问答(BERTS.↑) | 摘要(BERTS.↑) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 短 | SpeechLLM | Phi4-Multimodal | 6.8 | 80.2 | 37.1 | - |
| 短 | MLLM | Gemini 2.5 Flash | 14.9 | 67.0 | 40.6 | × |
| 长 | LLM | Qwen3 | 84.8 | 37.9 | 19.9 | 未提供 |
| 长 | SpeechLLM | Phi4-Multimodal | 39.2 | 59.7 | 37.6 | 7.4 |
| 长 | MLLM | Gemini 2.5 Flash | 11.9 | 76.4 | 46.1 | 24.1 |

5. 实际意义：为开发更强的多模态、跨语言、指令跟随系统提供了一个全面、可靠的评测框架和清晰的改进方向（如提升多模态融合能力、增强长上下文处理、改善提示词鲁棒性）。
6. 主要局限性：该工作是构建评测基准，而非提出解决所发现问题的模型或方法。其结论揭示了现有技术的普遍短板，但未提供解决方案。

---

### 6. [OmniVideoBench: Towards Audio-Visual Understanding Evaluation for Omni MLLMs](/audio-paper-digest-blog/posts/2026-05-03-omnivideobench-towards-audio-visual-understanding)

✅ **7.5/10** | 前50% | #基准测试 | #多模态模型 | #音频理解 #问答任务

👥 **作者与机构**

- 第一作者：Caorui Li（南京大学、东南大学）
- 通讯作者：Jiaheng Liu（南京大学）
- 作者列表：
    - Caorui Li（南京大学，东南大学）（同等贡献）
    - Yu Chen（南京大学，东南大学）（同等贡献）
    - Yiyan Ji（南京大学）（同等贡献）
    - Jin Xu（阿里巴巴集团）
    - Zhenyu Cui（东南大学）
    - Shihao Li（南京大学）
    - Yuanxing Zhang（快手科技）
    - Zhenghao Song（M-A-P）
    - Dingling Zhang（南京大学）
    - Ying He（北京科技大学）
    - Haoxiang Liu（北京科技大学）
    - Yuxuan Wang（阿里巴巴集团）
    - Qiufeng Wang（东南大学）
    - Jiafu Tang（南京大学）
    - Zhenhe Wu（M-A-P）
    - Jiehui Luo（中央音乐学院）
    - Zhiyu Pan（南京大学）
    - Weihao Xie（华中科技大学）
    - Chenchen Zhang（M-A-P）
    - Zhaohui Wang（南京大学）
    - Jiayi Tian（阿里巴巴集团）
    - Yanghai Wang（南京大学）
    - Zhe Cao（南京大学）
    - Minxin Dai（南京大学）
    - Ke Wang（M-A-P）
    - Runzhe Wen（南京大学）
    - Yinghao Ma（Queen Mary University of London）
    - Yaning Pan（复旦大学）
    - Sungkyun Chang（Queen Mary University of London）
    - Termeh Taheri（Queen Mary University of London）
    - Haiwen Xia（北京大学）
    - Christos Plachouras（Queen Mary University of London）
    - Emmanouil Benetos（Queen Mary University of London）
    - Yizhi Li（Manchester大学）
    - Ge Zhang（M-A-P）
    - Jian Yang（M-A-P）
    - Tianhao Peng（M-A-P）
    - Zili Wang（M-A-P）
    - Minghao Liu（2077AI）
    - Junran Peng（北京科技大学）
    - Zhaoxiang Zhang（中国科学院）
    - Jiaheng Liu（南京大学）（通讯作者）

💡 **毒舌点评**

这篇论文作为一份“考卷”出得相当用心，其亮点在于对“音视频融合推理”这一核心能力的精准定义和严谨考察，特别是强制要求的、区分模态的“原子推理链”标注，为黑箱模型提供了难得的诊断窗口。然而，短板也显而易见：作为纯评测工作，它能清晰指出“学生”（现有模型）哪里不行，但并未给出“教学方法”（如何改进模型），对社区的价值更多停留在指明方向而非提供解决方案。

🔗 **开源详情**

-   代码：论文中未提及代码链接。但在“Reproducibility Statement”中承诺“future release of experimental code for evaluation”。
-   模型权重：未提及。本工作评测现有模型，未提出新模型。
-   数据集：OmniVideoBench基准将开源。论文提供了GitHub仓库链接：`https://github.com/NJU-LINK/OmniVideoBench`。
-   Demo：未提及。
-   复现材料：提供了详细的视频收集原则（附录B）、完整的视频分类体系（表5）、评测Prompt（附录C），以及各实验的具体设置，复现细节较为充分。
-   论文中引用的开源项目：在模型评测中引用了Qwen系列、Baichuan-Omni、HumanOmni、MiniCPM-o、VideoLLaMA2、VITA等开源模型。在基准构建中使用了Voxtral-Mini-3B进行ASR，并使用DeepSeek-V3进行问题过滤。

📌 **核心摘要**

1.  问题：当前多模态大语言模型（MLLMs）缺乏专门针对音频和视频模态协同推理能力的全面评估。现有基准要么忽略音频，要么只是简单叠加，未能真正考察模型整合多模态信息并进行逻辑一致推理的能力。
2.  方法：本文提出了OmniVideoBench，一个大规模的音视频理解评测基准。它包含628个真实世界视频（时长数秒至30分钟），并基于此构建了1000个高质量的多项选择问答对。每个问答对都附有手动标注的、明确区分模态（视觉或听觉）的步骤式推理链，涵盖13种复杂推理任务（如时序、因果、关系推理等）。
3.  与已有方法区别：相比以往基准，OmniVideoBench的核心区别在于：a) 强调模态互补性与逻辑一致性，要求问题必须同时依赖音视频信息才能解答；b) 覆盖更长的视频时间跨度（最长30分钟）和多样化的音频类型（语音、环境音、音乐）；c) 提供了精细的推理过程标注，而非仅标注最终答案。
4.  实验结果：对14个主流MLLMs（包括开源和闭源模型）的评估显示，当前模型表现与人类（82.69%准确率）存在显著差距。最佳模型Gemini-2.5-Pro准确率仅为58.90%。具体发现包括：
    - 开源模型表现接近随机猜测（如Qwen2.5-Omni-7B为29.30%）。
    - 所有模型在音乐类音频上表现最差（Gemini-2.5-Pro仅38.46%），显著低于语音（61.66%）和环境音（57.72%）。
    - 模型在背景与音乐理解任务上表现最差（低于50%），而在关系推理和总结任务上表现较好（超过80%）。
    - 消融实验表明，提供ASR文本能在一定程度上提升纯视觉模型性能，但无法替代真正的音频理解能力，尤其在音乐/环境音任务上无效。增加输入帧数能提升模型在长视频上的表现。

    | 模型 | 平均准确率 (%) |
    | :--- | :--- |
    | Gemini-2.5-Pro | 58.90 |
    | Gemini-3.0-Flash | 55.10 |
    | Qwen3-Omni-30B-A3B | 38.40 |
    | Qwen2.5-Omni-7B | 29.30 |
    | (人类) | 82.69 |

5.  实际意义：OmniVideoBench为评估和推动下一代具备真正音视频协同推理能力的多模态模型提供了标准化的工具和明确的挑战。它揭示了当前模型在跨模态对齐、长时推理、非语义音频理解等方面的关键缺陷，指明了未来的改进方向。
6.  主要局限性：
    - 作为一个评测基准，它本身不包含解决所发现问题的模型或算法。
    - 视频虽然多样，但分辨率限制在480p-1080p，且全部为公开网络视频，可能无法完全代表所有真实场景（如监控、专业影视制作）。
    - 问答对为人工构造的多项选择题，其形式与真实世界开放式问答可能存在差异（论文中也验证了开放式问答难度更大）。

---

### 7. [VideoMathQA: Benchmarking Mathematical Reasoning via Multimodal Understanding in Video](/audio-paper-digest-blog/posts/2026-05-03-videomathqa-benchmarking-mathematical-reasoning)

✅ **7.5/10** | 前25% | #基准测试 | #多模态模型 | #数据集 #跨模态

👥 **作者与机构**

- 第一作者：Hanoona Abdul Rasheed（MBZUAI）
- 通讯作者：未说明
- 作者列表：Hanoona Abdul Rasheed（MBZUAI）、Abdelrahman M Shaker（MBZUAI）、Anqi Tang（MBZUAI）、Muhammad Maaz（MBZUAI）、Ming-Hsuan Yang（University of California Merced， Google Research）、Salman Khan（MBZUAI， Australian National University）、Fahad Shahbaz Khan（MBZUAI， Linköping University）

💡 **毒舌点评**

这篇论文最大的价值在于其“侦察兵”角色——它精准地定义了一个被忽视的核心挑战（视频中的多模态数学推理），并构建了一个高质量、标注详尽的“试炼场”来暴露当前模型的软肋。但它的局限也很明显：任务定义相对狭窄（仅限数学推理），并且它本身并未提出解决该问题的模型或算法，更多是一篇扎实的“测评集”工作，缺乏方法论层面的创新。

🔗 **开源详情**

- 代码：提供了评估代码，基于开源的`lmms-eval`框架，并承诺在提交中包含运行脚本。链接：https://mbzuai-oryx.github.io/VideoMathQA （论文中提及）。
- 模型权重：未提及。本文是基准论文，不提供新模型。
- 数据集：是。论文提供了项目主页，数据集可从此获取。
- Demo：未提及。
- 复现材料：提供了详细的提示词（附录F）、评估协议和硬件配置（8x A100-80GB GPU）。训练细节不适用。
- 论文中引用的开源项目：`lmms-eval`（评估框架）， `vllm`（语言模型推理），以及所评估的多个开源模型（如Qwen2.5-VL， InternVL系列， LLaVA系列等）。

📌 **核心摘要**

1. 问题：现有的多模态模型在视频中进行数学推理的能力评估存在空白。视频数学推理需要整合动态视觉、音频（语音）和文本信息，并进行长时间跨度的多步逻辑推导，这与静态图像或文本推理有本质区别。
2. 方法：本文提出了一个名为VideoMathQA的新基准，包含420个精心策划的视频-问题对，覆盖10个数学领域。问题分为三类：直接问题解决、概念迁移和深度教学理解。每个问题都附有由研究生水平专家标注的4-10个详细推理步骤（共2945步）。
3. 新意：与现有基准（如MathQA， MathVista）主要关注静态图像不同，VideoMathQA专门针对视频，强调时间动态性、多模态信息整合（视觉、音频、文本）以及多层次推理。它提供了细粒度的推理步骤标注，不仅评估最终答案，还能诊断模型在推理过程中的具体错误。
4. 实验：评估了30多个模型（包括开源和闭源）。最佳模型GPT-o4-mini在MCQ+Sub设置下准确率为61.4%，而人类评估者的准确率为80.7%。模型性能随规模提升，但小模型（<9B）表现普遍较弱。加入字幕对强推理模型有显著帮助，但对小模型帮助有限。错误分析显示“问题误解”是最主要的错误类型。
   关键实验结果表格（表2摘录，CoT评估）：

| 模型 | 规模 | MCQ+Sub | MBin+Sub |
| :--- | :--- | :--- | :--- |
| Random | - | 17.4 | 7.9 |
| Human | - | - | 80.7 |
| Qwen2.5-VL | 7B | 29.5 | 18.3 |
| InternVL3 | 78B | 37.1 | 27.9 |
| GPT-o4-mini | - | 61.4 | 44.8 |

   ![论文中的对比图](icassp-img://VI4kGUfPio/5.png)
   上图展示了模型在不同数学概念和视频时长上的表现差异。

   ![论文中的错误分析图](icassp-img://VI4kGUfPio/6.png)
   上图展示了模型在Chain-of-Thought推理中的主要错误类型分布。

5. 意义：该基准为评估和诊断多模态大模型在复杂、真实场景下的深度推理能力提供了一个重要的标准化工具，揭示了当前模型在长期上下文理解、多模态信息对齐和复杂逻辑推演方面的不足，指明了未来改进方向。
6. 局限：基准规模（420个样本）有限，构建过程耗时费力（约920人时）。任务仅限于数学推理，未涵盖其他需要类似推理能力的学科（如物理实验分析）。评估模型本身不包含提出新的模型架构。

---

### 8. [EchoMind: An Interrelated Multi-level Benchmark for Evaluating Empathetic Speech Language Models](/audio-paper-digest-blog/posts/2026-05-03-echomind-an-interrelated-multi-level-benchmark)

✅ **7.5/10** | 前25% | #基准测试 | #模型评估 | #语音情感识别 #语音大模型

👥 **作者与机构**

- 第一作者：Li Zhou（香港中文大学（深圳））
- 通讯作者：Benyou Wang（香港中文大学（深圳）、深圳大数据研究院、深圳环西丽湖国际科教城研究院）、Haizhou Li（香港中文大学（深圳）、深圳大数据研究院、深圳环西丽湖国际科教城研究院）
- 作者列表：Li Zhou（香港中文大学（深圳））、Lutong Yu（香港中文大学（深圳））、You Lyu（香港中文大学（深圳））、Yihang Lin（香港中文大学（深圳））、Zefeng Zhao（香港中文大学（深圳））、Junyi Ao（香港中文大学（深圳））、Yuhao Zhang（香港中文大学（深圳））、Benyou Wang（香港中文大学（深圳）、深圳大数据研究院、深圳环西丽湖国际科教城研究院）、Haizhou Li（香港中文大学（深圳）、深圳大数据研究院、深圳环西丽湖国际科教城研究院）

💡 **毒舌点评**

这篇论文最亮眼的地方在于它用极其精细的控制变量实验（同一句话，配上“咳嗽”、“叹气”、“正常”等不同声音），犀利地捅破了一个行业窗户纸：所谓的“多模态”大模型，其实对语音里的情绪和状态线索大多“听而不闻、答不相关”。然而，其短板也很明显：尽管构建了精美的TTS数据，但合成语音与真实人类语音的韵律、情感细微差别仍有鸿沟（实验已部分验证），用这个基准得出的结论，在多大程度上能代表模型对真实人类情感的理解能力，需要打个问号。

🔗 **开源详情**

- 代码：论文中未提及具体代码仓库链接，但明确承诺将发布所有必要代码和实验配置以供复现。
- 模型权重：未提及（本文为评估基准，不提供新模型权重）。
- 数据集：明确将公开EchoMind基准的全部音频文件、元数据和标注协议，并会发布人类录音版本（EchoMind-Human）。
- Demo：未提及。
- 复现材料：承诺提供完整的数据、代码、实验配置。附录中详细描述了数据集构建流程、MCQ示例、人类录音细节、评估指标定义等，为复现提供了充分信息。
- 引用的开源项目：论文依赖并评估了多个开源SLM（如Audio Flamingo3， DeSTA2.5-Audio， VITA-Audio， LLaMA-Omni2等），并使用了GPT-4o， Gemini-2.5-Pro等商业模型进行评估。评估指标使用了NISQA， UTMOS， emotion2vec， Qwen3-Embedding-0.6B等开源工具或模型。

📌 **核心摘要**

1.  要解决什么问题：现有语音语言模型（SLM）的基准测试通常孤立地评估语言理解、声学识别、推理或对话能力，缺乏对整合这些技能以进行人类般情感智能对话能力的系统性评估。
2.  方法核心是什么：提出EchoMind，首个用于评估SLM共情能力的多层次关联基准。其核心设计是模拟共情对话的认知过程（理解→推理→对话），所有任务共享语义中性且无显式情感线索的脚本，但通过控制同一脚本的语音风格变化（目标、替代、中性）来隔离和测试语音表达本身的影响。
3.  与已有方法相比新在哪里：a) 任务关联：首次将理解、推理、对话三级任务基于同一组音频实例进行关联评估，分析跨层级依赖。b) 控制变量：使用精心设计的、语义中性的脚本，确保对语音线索的感知完全依赖于非语言声学特征。c) 全面的共情维度：构建了一个包含3大类、12子类、39项具体语音属性的共情导向框架。
4.  主要实验结果如何：对12个先进SLM的测试揭示：a) SLMs在理解语音内容上表现良好，但在感知和利用语音线索（如生理状态、非语言表达）方面存在显著差距。b) 即使是顶尖模型（如GPT-4o-Audio），在生成回应时也难以有效整合语音线索（CSpeechRel指标普遍低于4分）。c) 模型性能对提示策略敏感，且处理人类自然语音比处理合成语音更具挑战性。d) 在理想化条件下（提供完美语音线索识别），模型生成共情回应的能力有显著提升上限。关键实验数据汇总如下：

| 模型 | 语音理解(ACC↑) | 推理(ACC↑) | 对话(文本-CSpeechRel↑) | 对话(音频-VES↑) |
| :--- | :---: | :---: | :---: | :---: |
| GPT-4o-Audio | 66.25 | 68.04 | 3.42 | 3.34 |
| Step-Audio | 40.74 | 45.90 | 3.09 | 3.20 |
| Qwen2.5-Omni-7B | 60.87 | 57.70 | 2.92 | 3.24 |
| DeSTA2.5-Audio | 56.68 | 63.04 | 3.36 | - |

![���文中的框架示例图](icassp-img://l5re5ppqrX/0.png)
图1：EchoMind框架与示例。(a) 多级认知过程模拟，从内容与声音理解，到整合推理，再到共情对话。(b) 同一脚本在不同控制语音风格下的回应示例。
![论文中的实验结果图](icassp-img://l5re5ppqrX/2.png)
图3：顶级模型在合成语音（TTS）和真实人类语音（Human）版本上的性能差异，显示真实语音更具挑战性。
![论文中的实验结果图](icassp-img://l5re5ppqrX/1.png)
图2：模型在语音线索感知、推理与共情回应质量之间的相关性分析。

5.  实际意义是什么：为评估和推动SLM的情感智能提供了首个系统、可控的基准，明确指出了当前SLM在“听懂弦外之音”和“做出有温度回应”方面的核心缺陷，为未来模型研发指明了方向。
6.  主要局限性是什么：a) 基准数据主要依赖TTS合成语音，尽管有人类录音版本进行对比，但规模较小，可能无法完全覆盖真实对话中语音的细微变异性。b) 评估框架的某些维度（如共情回应的“质量”）依赖于LLM作为评判器或主观评分，可能存在偏差。

---

