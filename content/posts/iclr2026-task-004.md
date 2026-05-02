---
title: "ICLR 2026 - 基准测试 论文列表"
date: 2026-05-03
draft: false
tags: ["基准测试"]
categories: [iclr-2026]
description: "共 9 篇 ICLR 2026 基准测试 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 基准测试

共 **9** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [MCIF: Multimodal Crosslingual Instruction-Following Benchmar](/audio-paper-digest-blog/posts/2026-05-03-mcif-multimodal-crosslingual-instruction) | 8.5分 | 前25% |
| 🥈 | [Omni-Reward: Towards Generalist Omni-Modal Reward Modeling w](/audio-paper-digest-blog/posts/2026-05-03-omni-reward-towards-generalist-omni-modal-reward) | 8.0分 | 前25% |
| 🥉 | [OmniVideoBench: Towards Audio-Visual Understanding Evaluatio](/audio-paper-digest-blog/posts/2026-05-03-omnivideobench-towards-audio-visual-understanding) | 8.0分 | 前25% |
| 4. | [VideoMathQA: Benchmarking Mathematical Reasoning via Multimo](/audio-paper-digest-blog/posts/2026-05-03-videomathqa-benchmarking-mathematical-reasoning) | 8.0分 | 前25% |
| 5. | [XModBench: Benchmarking Cross-Modal Capabilities and Consist](/audio-paper-digest-blog/posts/2026-05-03-xmodbench-benchmarking-cross-modal-capabilities) | 7.5分 | 前25% |
| 6. | [STAR-Bench: Probing Deep Spatio-Temporal Reasoning as Audio ](/audio-paper-digest-blog/posts/2026-05-03-star-bench-probing-deep-spatio-temporal-reasoning) | 7.5分 | 前25% |
| 7. | [Human Behavior Atlas: Benchmarking Unified Psychological And](/audio-paper-digest-blog/posts/2026-05-03-human-behavior-atlas-benchmarking-unified) | 7.5分 | 前25% |
| 8. | [JointAVBench: A Benchmark for Joint Audio-Visual Reasoning E](/audio-paper-digest-blog/posts/2026-05-03-jointavbench-a-benchmark-for-joint-audio-visual) | 7.5分 | 前25% |
| 9. | [MMSU: A Massive Multi-task Spoken Language Understanding and](/audio-paper-digest-blog/posts/2026-05-03-mmsu-a-massive-multi-task-spoken-language) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [MCIF: Multimodal Crosslingual Instruction-Following Benchmark from Scientific Talks](/audio-paper-digest-blog/posts/2026-05-03-mcif-multimodal-crosslingual-instruction)

🔥 **8.5/10** | 前25% | #基准测试 | #模型评估 | #多模态模型 #多语言

👥 **作者与机构**

- 第一作者：Sara Papi（Fondazione Bruno Kessler (FBK)，意大利）
- 通讯作者：未说明（论文作者列表按字母序，未明确标注通讯作者）
- 作者列表：Sara Papi（FBK），Maike Züfle（Karlsruhe Institute of Technology (KIT)，德国），Marco Gaido（FBK），Beatrice Savoldi（FBK），Danni Liu（KIT），Ioannis Douros（未明确机构），Luisa Bentivogli（FBK），Jan Niehues（KIT）。注：论文同时列出了两个机构单位。

#

💡 **毒舌点评**

亮点：MCIF的构建堪称“评估工程”的典范，其在模态、语言、上下文长度、任务类型和提示变体上的系统性覆盖，为多模态跨语言研究提供了目前最全面、最严格的“标尺”，直接戳中了当前模型在长文本摘要和音视频融合上的软肋。
短板：作为一个数据集与基准论文，它揭示了问题但并未提供解决方案；其数据源（ACL 2023科学报告）虽然质量高且避免了污染，但也可能限制了基准在非学术、更口语化场景下的泛化性。

#

🔗 **开源详情**

- 代码：提供评估和推理代码仓库链接：`github.com/hlt-mt/mcif`。
- 模型权重：未提及提供论文提出的模型权重（因论文未提出新模型）。但评估所使用的23个基线模型均为公开可用的权重。
- 数据集：MCIF数据集将在HuggingFace以CC-BY 4.0协议发布：`hf.co/datasets/FBK-MT/MCIF`。
- Demo：未提及。
- 复现材料：提供了详细的附录说明（标注指南、完整模型列表、生成设置、所有提示词）、评估脚本以及所有基线模型的输出结果。
- 引用的开源项目：论文中引用并可能依赖的开源工具/模型包括：HuggingFace Transformers、jiWER、COMET、BERTScore、SHAS等。

📌 **核心摘要**

1.  解决的问题：现有基准在评估多模态大语言模型（MLLMs）时，存在覆盖语言单一、模态割裂、输入长度偏短、缺乏高质量人工标注等缺陷，无法全面、可靠地评估模型在跨语言、多模态指令跟随上的真实能力。
2.  方法核心：构建了MCIF基准，从ACL 2023会议的科学报告中收集原始音视频，通过专业人员创建平行的多语言（英、德、意、中）、多模态（语音、视频、文本）文本数据（转录、翻译、问答、摘要），并设计了固定（MCIFfix）和多样（MCIFmix）两套指令提示，形成一个系统性的评估框架。
3.  与已有方法相比新在哪里：它是首个同时整合了跨语言、多模态（语音、视频、文本）、长短上下文以及人工标注指令与问答的指令跟随基准。其完全平行的设计允许进行跨模态、跨语言的控制变量消融研究。
4.  主要实验结果：对23个模型（7 LLMs, 5 SpeechLLMs, 5 VideoLLMs, 6 MLLMs）的基准测试表明：
    *   总结是最难的任务，部分模型表现甚至低于随机基线。
    *   问答任务能受益于语音或视频模态，而总结则不然，显示了当前模型多模态融合的局限性。
    *   长上下文普遍导致性能下降，尤其在语音识别和翻译任务上，许多模型出现“欠生成”。
    *   模型对提示的措辞变化敏感，稳健性不足。
    *   商业模型 Gemini 2.5 Flash 在多数任务上表现最佳，尤其在长上下文问答上优势明显。具体关键结果见下表（摘自论文Table 2，平均分）：

| 上下文 | 模态 | 模型 | WER↓ (REC) | COMET↑ (TRANS) | BERTS.↑ (QA) | BERTS.↑ (SUM) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| SHORT | SpeechLLM | Phi4-Multimodal | 6.8 | 80.2 | 37.1 | × |
| | VideoLLM | Qwen2.5-VL | - | - | 37.8 | - |
| | MLLM | Gemini 2.5 Flash | 14.9 | 67.0 | 40.6 | × |
| LONG | LLM | Qwen3 | 84.8 | 37.9 | 19.9 | - |
| | SpeechLLM | Phi4-Multimodal | 39.2 | 59.7 | 37.6 | 7.4 |
| | MLLM | Ola | 14.0 | 63.2 | 36.2 | 12.3 |
| | MLLM | Gemini 2.5 Flash | 11.9 | 76.4 | 46.1 | 24.1 |

    注：×表示任务不可行，-表示未报告。WER越低越好，COMET和BERTScore越高越好。
5.  实际意义：为评估和推动通用、跨语言、多模态AI助手的发展提供了关键工具和基准，指明了未来模型需要在多模态深度整合、长上下文处理及指令鲁棒性方面重点改进。
6.  主要局限性：基准数据源自特定领域的科学报告，可能无法完全代表通用对话场景；评估任务均为单轮指令，未涉及更复杂的交互模式；部分评估指标（如BERTScore）可能无法完全捕捉生成内容的细微差别。

#

---

### 🥈 [Omni-Reward: Towards Generalist Omni-Modal Reward Modeling with Free-Form Preferences](/audio-paper-digest-blog/posts/2026-05-03-omni-reward-towards-generalist-omni-modal-reward)

🔥 **8.0/10** | 前25% | #基准测试 | #强化学习 | #数据集 #多模态模型

👥 **作者与机构**

- 第一作者：Zhuoran Jin（中国科学院大学人工智能学院，中国科学院自动化研究所）
- 通讯作者：Jun Zhao（中国科学院大学人工智能学院，中国科学院自动化研究所）
- 作者列表：Zhuoran Jin（中国科学院大学人工智能学院，中国科学院自动化研究所）、Hongbang Yuan（中国科学院大学人工智能学院，中国科学院自动化研究所）、Kejian Zhu（中国科学院大学人工智能学院，中国科学院自动化研究所）、Jiachun Li（中国科学院大学人工智能学院，中国科学院自动化研究所）、Pengfei Cao（中国科学院大学人工智能学院，中国科学院自动化研究所）、Yubo Chen（中国科学院大学人工智能学院，中国科学院自动化研究所）、Kang Liu（中国科学院大学人工智能学院，中国科学院自动化研究所）、Jun Zhao（中国科学院大学人工智能学院，中国科学院自动化研究所）

💡 **毒舌点评**

本文最大亮点在于系统性地构建了首个覆盖五种模态（文本、图像、视频、音频、3D）的奖励模型评测基准与训练数据集，并提出了支持“自由形式偏好”的新范式，填补了该领域从评测到建模的空白。其短板在于，作为一篇方法论文，其核心的模型架构（如Omni-RewardModel-BT和-R1）主要基于现有成熟框架（Bradley-Terry、GRPO）进行适配与组合，创新深度有限，更像是一篇“系统性工程”或“资源构建”论文。

🔗 **开源详情**

*   代码：提供GitHub仓库链接：https://github.com/HongbangYuan/OmniReward。
*   模型权重：论文中提及并提供了Omni-RewardModel的权重，可能托管在HuggingFace。
*   数据集：
    *   Omni-RewardBench: https://hf.co/datasets/HongbangYuan/OmniRewardBench
    *   Omni-RewardData: https://hf.co/datasets/jinzhuoran/OmniRewardData
*   Demo：论文中未提及在线演示。
*   复现材料：论文在附录中详细说明了数据标注流程、质量控制方法，并提供了标注指南和平台截图，有助于理解数据构建过程。训练的具体配置可能需要参考代码仓库。
*   引用的开源项目：论文依赖并微调了多个开源基础模型，包括MiniCPM-o-2.6、Qwen2.5-VL-7B-Instruct等，也使用了多个公开的偏好数据集（如Skywork-Reward-Preference, RLAIF-V, HPDv2等）。

📌 **核心摘要**

1.  解决问题：现有奖励模型（RM）面临两大挑战：一是模态不平衡，主要局限于文本和图像，对视频、音频、3D等模态支持不足；二是偏好刚性，基于固定二元偏好对训练，无法捕捉复杂多样的个性化偏好。
2.  方法核心：提出Omni-Reward框架，包含三个部分：（1）Omni-RewardBench：首个支持自由形式偏好的全模态RM基准，包含3,725个人工标注的偏好对，覆盖9个任务、5种模态；（2）Omni-RewardData：大规模多模态偏好数据集，包含248K通用偏好对和69K用于指令微调的偏好对；（3）Omni-RewardModel：基于上述数据训练的判别式（BT）和生成式（R1）奖励模型。
3.  创新与不同：与以往工作相比，本文首次将奖励建模系统地扩展到全模态（特别是音频和3D），并创新性地引入自由形式文本描述的偏好标准（而非固定的如“helpfulness”），使RM能根据动态、具体的用户指令调整评分。
4.  主要实验结果：
    *   在自建基准Omni-RewardBench（w/ Ties设置）上，Omni-RewardModel-BT达到65.36% 准确率，超过最强的专有模型Claude 3.5 Sonnet（66.54%）和开源模型Gemma-3 27B（65.12%），相比基线MiniCPM-o-2.6（46.67%）有巨大提升。
    *   在公开基准VL-RewardBench上，Omni-RewardModel-BT达到76.3% 的准确率，达到SOTA水平。
    *   消融实验证明，混合多模态数据和指令微调对提升性能和泛化性至关重要。
5.  实际意义：为全模态大模型的对齐提供了更通用、更灵活的奖励建模工具与评测标准，有助于推动AI模型在更广泛的交互场景中符合多样化的用户偏好。
6.  主要局限性：Omni-RewardBench规模（约3.7K）尚不足以支持大规模评测；任务定义相对粗粒度；偏好数据为单轮交互，未涵盖多轮对话；生成式RM的RL训练仅为初步探索。

---

### 🥉 [OmniVideoBench: Towards Audio-Visual Understanding Evaluation for Omni MLLMs](/audio-paper-digest-blog/posts/2026-05-03-omnivideobench-towards-audio-visual-understanding)

🔥 **8.0/10** | 前25% | #基准测试 | #多模态模型 | #音视频 #音频理解

👥 **作者与机构**

- 第一作者：Caorui Li (Nanjing University, Southeast University)
- 通讯作者：Jiaheng Liu (Nanjing University)
- 作者列表：Caorui Li (Nanjing University, Southeast University)、Yu Chen (Nanjing University, Southeast University)、Yiyan Ji (Nanjing University, Southeast University)、Jin Xu (Alibaba Group)、Zhenyu Cui (Southeast University)、Shihao Li (Nanjing University, Southeast University)、Yuanxing Zhang (Kuaishou Technology)、Zhenghao Song (M-A-P)、Dingling Zhang (Nanjing University, Southeast University)、Ying He (University of Science and Technology Beijing)、Haoxiang Liu (University of Science and Technology Beijing)、Yuxuan Wang (Alibaba Group)、Qiufeng Wang (Southeast University)、Jiafu Tang (Nanjing University, Southeast University)、Zhenhe Wu (M-A-P)、Jiehui Luo (Central Conservatory of Music)、Zhiyu Pan (Nanjing University, Southeast University)、Weihao Xie (Huazhong University of Science and Technology)、Chenchen Zhang (M-A-P)、Zhaohui Wang (Nanjing University, Southeast University)、Jiayi Tian (Alibaba Group)、Yanghai Wang (Nanjing University, Southeast University)、Zhe Cao (Nanjing University, Southeast University)、Minxin Dai (Nanjing University, Southeast University)、Ke Wang (M-A-P)、Runzhe Wen (Nanjing University, Southeast University)、Yinghao Ma (Queen Mary University of London)、Yaning Pan (Fudan University)、Sungkyun Chang (Queen Mary University of London)、Termeh Taheri (Queen Mary University of London)、Haiwen Xia (Peking University)、Christos Plachouras (Queen Mary University of London)、Emmanouil Benetos (Queen Mary University of London)、Yizhi Li (University of Manchester)、Ge Zhang (M-A-P)、Jian Yang (M-A-P)、Tianhao Peng (M-A-P)、Zili Wang (M-A-P)、Minghao Liu (2077AI)、Junran Peng (University of Science and Technology Beijing)、Zhaoxiang Zhang (Chinese Academy of Sciences)、Jiaheng Liu (Nanjing University)

#

💡 **毒舌点评**

亮点：数据构建流水线堪称严谨典范——从视频筛选、多轮人工标注到基于先进模型的过滤，最终为每个问题都附带了原子化的推理链，这使得评估结果既可靠又能深入诊断模型弱点。短板：作为评测集本身，其设计虽全面，但“创新”主要体现在工程整合与规则设计上，缺乏理论层面的突破；此外，评估完全依赖选择题格式，对模型开放式生成能力的考察略显不足。

#

🔗 **开源详情**

- 代码：论文提供了GitHub仓库链接 `https://github.com/NJU-LINK/OmniVideoBench`，但说明将在未来发布代码和数据。论文中未提及当前是否有可用代码。
- 模型权重：论文评估了多个开源模型（如Qwen3-Omni， Qwen2.5-Omni， Baichuan-Omni等），这些模型的权重由其原始团队发布。本文不提供新的模型权重。
- 数据集：论文的核心贡献是OmniVideoBench数据集，承诺将公开发布。论文中未提供直接的下载链接，但提供了获取方式（通过GitHub仓库）。
- Demo：论文中未提及提供在线演示。
- 复现材料：提供了详细的复现声明，涵盖了数据构建、统计、任务定义、提示词和实验稳定性说明。附录中给出了视频分类表（表5）、收集原则（附录B）和完整的提示词模板（附录C）。
- 论文中引用的开源项目/模型：Gemini系列（闭源）、Qwen系列（开源）、Baichuan-Omni（开源）、HumanOmni（开源）、MiniCPM-o（开源）、VideoLLaMA2（开源）、VITA-1.5（开源）、DeepSeek-V3/V3.1（开源）、Voxtral-Mini-3B（用于ASR，开源）。

📌 **核心摘要**

1. 问题：现有的多模态大模型（MLLMs）音视频理解评估基准存在明显缺陷：要么忽视音频，要么模态整合逻辑不一致，无法全面评估模型的协同推理能力。
2. 方法核心：构建了OmniVideoBench，一个大规模、高质量的评测集。它包含628个时长可达30分钟的真实视频，1000个精心设计的多选题，并为每个问题标注了逐步的、分模态的推理链。
3. 创新点：与已有基准相比，新在三点：a) 强调模态互补性与逻辑一致性，强制要求答案依赖音视频协同信息；b) 覆盖长视频和多样化的音频类型（语音、环境音、音乐）；c) 提供显式的推理轨迹，便于分析模型的推理过程。
4. 主要实验结果：当前顶尖模型（如Gemini-2.5-Pro）在本基准上的准确率仅为58.90%，远低于人类水平的82.69%。开源模型（如Qwen2.5-Omni-7B）表现接近随机猜测（约29.3%）。具体而言，模型在音乐理解（最佳准确率38.46%）和背景理解任务上表现尤其糟糕，而在关系推理和摘要任务上较好。下表列出了部分关键结果：

| 模型 | 平均准确率 | 音乐准确率 | 语音准确率 | (0,1]分钟视频准确率 | (10,30]分钟视频准确率 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Gemini-2.5-Pro | 58.90% | 38.46% | 61.66% | 57.83% | 55.94% |
| Gemini-2.0-Flash | 41.50% | 29.67% | 43.21% | 49.40% | 34.87% |
| Qwen3-Omni-30B-A3B | 38.40% | 37.36% | 39.26% | 45.78% | 35.11% |
| Qwen2.5-Omni-7B | 29.30% | 23.07% | 30.70% | 41.57% | 26.72% |
| 人类性能 | 82.69% | 未提供 | 未提供 | 未提供 | 未提供 |

![OmniVideoBench与现有基准的对比](icassp-img://ItRYEe8E61/3.png)
图4展示了OmniVideoBench相较于其他基准（如Daily-Omni）对模型更具挑战性，多数模型表现接近随机水平（红线）。

5. 实际意义：为音视频大模型的评估设立了更严格、更贴近真实需求的标准，揭示了当前模型在跨模态融合、长程时序建模及非语音音频理解上的重大不足，为后续研究指明了方向。
6. 主要局限性：评测集本身的规模（1000个QA对）相对有限；评估方式限于选择题，可能无法完全反映模型开放式回答的综合能力；数据集构建依赖了部分先进模型（如Gemini）进行过滤，可能存在一定的偏差。

#

---

### 4. [VideoMathQA: Benchmarking Mathematical Reasoning via Multimodal Understanding in Video](/audio-paper-digest-blog/posts/2026-05-03-videomathqa-benchmarking-mathematical-reasoning)

🔥 **8.0/10** | 前25% | #基准测试 | #多模态模型 | #视频理解 #数学推理

👥 **作者与机构**

- 第一作者：Hanoona Rasheed（MBZUAI）
- 通讯作者：未明确说明（论文中 Fahad Shahbaz Khan 在作者列表末位，且标注为单位5的负责人，可能为通讯作者，但未明确声明）
- 作者列表：
    - Hanoona Rasheed（MBZUAI）
    - Abdelrahman Shaker（MBZUAI）
    - Anqi Tang（MBZUAI）
    - Muhammad Maaz（MBZUAI）
    - Ming-Hsuan Yang（University of California Merced, Google Research）
    - Salman Khan（MBZUAI, Australian National University）
    - Fahad Shahbaz Khan（MBZUAI, Linköping University）

💡 **毒舌点评**

亮点：该基准构建极其“硬核”，标注耗时（平均每样本2-2.5小时）、流程严谨（三阶段专家审核）、评估维度丰富（多粒度推理步骤分析），为评估模型“真推理”还是“假感知”提供了一套精细的标尺。短板：尽管评估了30个模型，但最强模型（GPT-o4-mini）的MBin准确率也仅44.8%，人类则为80.7%，这揭示了当前多模态模型在视频深度推理上的巨大鸿沟，但也使得基准显得“过难”，可能短期内难以有效驱动模型迭代。

🔗 **开源详情**

- 代码：提供。论文中明确指出代码实现集成在`lmms-eval`项目中，并提供了运行评估的脚本。项目主页为`https://mbzuai-oryx.github.io/VideoMathQA`。
- 模型权重：未提及。本文不涉及训练新模型。
- 数据集：提供。基准包含420个视频-问题对及标注，可通过项目主页获取。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的评估设置、所有使用的提示词（Appendix F）、模型采样帧数、硬件信息（8xA100），以及步骤评估模型的可靠性验证。
- 引用的开源项目：`lmms-eval`（评估框架）、`VLLM`（用于纯文本模型评估）、`Qwen3`（用作评估Judge和后处理）、多个被评估的多模态模型（如LLaVA系列、Qwen2.5-VL、InternVL系列等）。

📌 **核心摘要**

1.  问题：现有数学推理基准局限于静态图像或文本，无法评估模型在真实教育视频中进行时序性、跨模态（视觉、文本、语音）数学推理的能力。
2.  方法核心：构建了VideoMathQA基准。该基准包含420个从YouTube精心挑选的视频-问题对，涵盖10个数学领域，视频时长从10秒到1小时。每个样本由研究生专家标注了问题、答案及4-10个分步骤推理链（共2945步），并配有时间戳。
3.  创新点：首次系统定义并评估视频数学推理的三大核心场景：问题直接求解、概念迁移应用、深度教学理解。与已有基准相比，它引入了时间维度，并强制要求多模态信息整合（如需结合板书、讲解和动态图表）。
4.  实验结果：评估了30个模型（5个闭源，25个开源）。人类平均准确率为80.7%。当前最佳模型GPT-o4-mini在CoT+MBin+Sub设置下准确率为44.8%，最强开源模型Qwen2.5-VL-72B为28.6%。模型在算术/微积分上表现相对较好（~32%），在拓扑、图论等领域表现很差（~17%）。错误分析显示，“问题误解”是最常见的失败原因。主要结果见表1（直接回答）和表2（思维链回答）。

表1: 直接回答评估（MBin+Sub，部分模型）
| 模型 | 大小 | 准确率(%) |
| :--- | :--- | :--- |
| GPT-o4-mini | - | 44.8 |
| Qwen2.5-VL | 72B | 28.6 |
| InternVL3 | 78B | 27.9 |
| Gemini-2.0-Flash | - | 24.8 |
| Human | - | 80.7 |

表2: 思维链回答评估（CoT+MBin+Sub，部分模型）
| 模型 | 大小 | 准确率(%) | 步骤评分(0-10) |
| :--- | :--- | :--- | :--- |
| GPT-o4-mini | - | 44.8 | 6.9 |
| Qwen2.5-VL | 72B | 28.6 | 5.0 |
| InternVL3 | 78B | 27.9 | 4.9 |
| Gemini-2.0-Flash | - | 24.8 | 4.7 |
| Human | - | 80.7 | - |

5.  实际意义：为评估和推进面向教育场景的多模态智能体（如自动辅导、视频内容分析）提供了高难度的测试平台和诊断工具。
6.  主要局限性：标注成本极高（总耗时920+人时），导致基准规模有限（420样本）。模型整体表现远低于人类，说明当前技术距离解决此问题尚有很长的路要走。

---

### 5. [XModBench: Benchmarking Cross-Modal Capabilities and Consistency in Omni-Language Models](/audio-paper-digest-blog/posts/2026-05-03-xmodbench-benchmarking-cross-modal-capabilities)

✅ **7.5/10** | 前25% | #基准测试 | #多模态模型 | #跨模态 #模型评估

👥 **作者与机构**

- 第一作者：Xingrui Wang (1, 2)
- 通讯作者：Jiang Liu (1)
- 作者列表：Xingrui Wang (Advanced Micro Devices, Johns Hopkins University), Jiang Liu (Advanced Micro Devices), Chao Huang (Advanced Micro Devices, University of Rochester), Xiaodong Yu (Advanced Micro Devices), Ze Wang (Advanced Micro Devices), Ximeng Sun (Advanced Micro Devices), Jialian Wu (Advanced Micro Devices), Alan Yuille (Johns Hopkins University), Emad Barsoum (Advanced Micro Devices), Zicheng Liu (Advanced Micro Devices)

💡 **毒舌点评**

亮点在于其系统性的“模态互换”评估设计，首次在统一框架下量化了全模态模型的“偏科”程度和回答一致性，诊断性很强。短板则是分析部分偏重描述性（如“音频最难”），对于造成这些不一致性的模型内部机制（如不同模态的表征对齐质量）缺乏更深层次的探讨，略显遗憾。

🔗 **开源详情**

- 代码：论文承诺将开源评估代码，链接为 https://github.com/XingruiWang/XModBench。
- 模型权重：未提及。
- 数据集：论文承诺将开源XModBench数据集，并提供了“Dataset Card”链接（位于项目主页）。
- Demo：未提及。
- 复现材料：论文提及了附录中包含更多细节（如附录F的人类评估细节、附录G的数据处理流程），但核心的训练超参数等不适用。
- 引用的开源项目：论文引用了多个作为数据来源或基线的开源项目/模型，如VGG-Sound、STARSS23、FireRedTTS、Whisper、GPT-5（用于辅助生成）、Qwen2.5-Omni、Baichuan Omni 1.5、VideoLLaMA 2等。

📌 **核心摘要**

1.  问题：当前全模态大语言模型（OLLMs）虽然能处理多种模态输入，但其是否真正实现了“模态不变性”推理（即对相同语义内容，无论以何种模态呈现都能给出稳定答案）尚不明确。现有基准测试缺乏对跨模态一致性的系统评估。
2.  方法核心：提出XModBench，一个大规模三模态（文本、图像、音频）基准测试。其核心设计是：基于语义对齐的三元组数据，系统性地对问题的“上下文”和“候选答案”进行模态置换，生成6种配置，以评估模型在感知、空间、时间、语言和外部知识五大任务上的表现。
3.  创新点：相比以往仅关注跨模态问答能力的基准，XModBench首次明确将“跨模态一致性”作为评估核心。其创新体现在：覆盖所有模态组合的系统性设计；引入“模态差异”和“方向不平衡”作为量化一致性的诊断指标；以及在17个子任务上进行大规模、细粒度的评估。
4.  主要实验结果：对多个主流OLLMs（包括闭源的Gemini系列和开源的Qwen2.5-Omni等）进行了评估。结果显示，即使最强的Gemini 2.5 Pro（平均准确率70.6%），在空间和时间推理任务上准确率也低于60%；音频模态是明显短板，当答案从文本变为音频时，性能大幅下降；同时存在方向不平衡，当视觉作为上下文时性能通常低于其作为候选答案时。
    *   关键结果表格（Table 2 摘录）：

| 模型 | 平均准确率 | 各任务族平均准确率（感知/空间/时间/语言/知识） | 标准差 |
| :--- | :---: | :---: | :---: |
| Gemini 2.5 Pro | 70.6 | 75.9/50.1/60.8/76.8/89.3 | 11.7 |
| Qwen2.5-Omni | 58.6 | 75.5/38.4/32.3/74.1/72.8 | 10.1 |
| Human | 91.5 | 91.0/89.7/88.9/93.9/93.9 | 3.0 |

    *   关键分析图表：图4显示了模态差异，其中音频与文本的差异（ΔT vs. A）最大（-49）；图5显示了方向不平衡，如Qwen2.5-Omni在V→T和T→V任务间有16.6%的准确率差。
![XModBench 概览图](icassp-img://HaL9EZovFg/0.png)
![模态差异分析图](icassp-img://HaL9EZovFg/3.png)
![方向不平衡分析图](icassp-img://HaL9EZovFg/4.png)

5.  实际意义：XModBench为诊断和改进全模态模型的跨模态对齐能力提供了关键工具。其揭示的弱点（如空间/时间推理、音频理解、方向不平衡）为下一代模型训练（如需要更多交织模态数据）指明了具体方向。
6.  主要局限性：基准本身无法解释模型不一致的根本原因（是数据问题还是架构问题）；评估主要基于多选题格式，可能无法完全反映开放式推理能力；部分任务（如外部知识）的平衡性高度依赖于候选答案的设计。

---

### 6. [STAR-Bench: Probing Deep Spatio-Temporal Reasoning as Audio 4D Intelligence](/audio-paper-digest-blog/posts/2026-05-03-star-bench-probing-deep-spatio-temporal-reasoning)

✅ **7.5/10** | 前25% | #基准测试 | #模型评估 | #音频大模型 #空间音频

👥 **作者与机构**

- 第一作者：Zihan Liu (1,2∗) — 北京航空航天大学 (1)，上海人工智能实验室 (2) （注：根据作者顺序与星号标注推断）
- 通讯作者：Yuhang Zang (2B)，Jiaqi Wang (2,5B) — 上海人工智能实验室 (2)，上海创新研究院 (5) （注：根据作者列表后缀“B”及常见通讯作者标注习惯推断）
- 作者列表：
    Zihan Liu (北京航空航天大学，上海人工智能实验室)
    Zhikang Niu (上海交通大学，上海创新研究院)
    Qiuyang Xiao (上海交通大学)
    Zhisheng Zheng (上海交通大学)
    Ruoqi Yuan (北京航空航天大学)
    Yuhang Zang (上海人工智能实验室)
    Yuhang Cao (上海人工智能实验室)
    Xiaoyi Dong (上海人工智能实验室，香港中文大学)
    Jianze Liang (上海人工智能实验室)
    Xie Chen (上海交通大学)
    Leilei Sun (北京航空航天大学)
    Dahua Lin (上海人工智能实验室，香港中文大学)
    Jiaqi Wang (上海人工智能实验室，上海创新研究院)

💡 **毒舌点评**

这篇论文最大的亮点在于一针见血地指出了当前音频评估“隔靴搔痒”的问题——模型答对了题目，但可能根本没“听懂”，只是在做文字游戏。它设计的评估任务（如听声辨水位、判断多车轨迹）巧妙地将物理世界常识与音频感知绑定，逼出了模型的真实短板。然而，短板在于它本身是一个“裁判”工具，而非“运动员”；虽然诊断了病因（如模型空间感知弱、多音频推理差），但并未开出具体的“药方”（新模型架构），其影响力将高度依赖社区采纳其基准的速度。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/InternLM/StarBench
- 模型权重：论文中未提及公开任何新的模型权重。评估的是现有模型。
- 数据集：提供数据集链接：https://huggingface.co/datasets/internlm/STAR-Bench
- Demo：提供项目主页链接：https://internlm.github.io/StarBench （主页可能包含演示，但论文未明确说明）
- 复现材料：论文在附录中详细说明了数据标注流程、评估设置（如循环评估法）、鲁棒性评估方法，并提供了完整的评估代码，复现信息较为充分。
- 引用的开源项目：主要依赖的开源工具有Pyroomacoustics（用于物理仿真音频生成），以及作为数据源的Clotho， FSD50K， STARSS23等音频数据集。

📌 **核心摘要**

1.  要解决什么问题：现有音频基准主要评估可以通过文本描述捕获的语义内容，忽略了人类能够从声音中获取的、难以用语言精确描述的细粒度时空动态信息（即“音频4D智能”）。这导致模型评估结果可能虚高，无法反映模型对物理世界的真正理解能力。
2.  方法核心是什么：提出了STAR-Bench基准，通过分层任务框架系统性地评估音频4D智能。它包含两部分：(1) 基础声学感知：利用程序化合成与物理仿真音频，定量评估模型对音高、响度、持续时间、方位角、仰角和距离六个属性的绝对感知范围与相对区分敏感度；(2) 整体时空推理：使用真实世界音频，评估模型在时序（连续过程演化、离散事件排序）和空间（静态定位、多源关系、动态轨迹）上的深度推理能力。
3.  与已有方法相比新在哪里：与先前基准相比，STAR-Bench首次正式定义并聚焦于“音频4D智能”；其任务设计明确针对“语言难以描述的音频线索”，实验显示仅使用文本描述会导致模型性能暴跌（时空任务下降超30%），这与以往基准性能轻微下降形成鲜明对比；采用了结合物理仿真、大规模数据挖掘、多轮人工标注与专家验证的严格数据制作流程。
4.  主要实验结果如何：评估了19个模型（16个开源，3个闭源）。结果揭示：a) 模型性能与人类存在巨大差距（如最强闭源模型Gemini 2.5 Pro平均准确率49.59%，人类为79.11%）；b) 闭源与开源模型存在能力层级：闭源模型（如Gemini 2.5 Pro）在知识和推理上较强，但细粒度感知成为瓶颈；开源模型则在感知、知识和推理上全面薄弱；c) 多数模型在空间任务上表现接近随机猜测，根本原因在于其将多声道音频预处理为单声道，丢失了关键空间信息。关键实验结果对比见下表：

| 模型 | 类别 | 基础感知 (AA%) | 时序推理 (OA%) | 空间推理 (OA%) | 平均准确率 (AA%) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 人类 | - | 75.60 | 88.00 | 73.72 | 79.11 |
| Gemini 2.5 Pro | 闭源 | 46.64 | 58.52 | 43.62 | 49.59 |
| Gemini 2.5 Flash | 闭源 | 39.72 | 30.70 | 28.35 | 32.92 |
| GPT-4o Audio | 闭源 | 31.76 | 19.44 | 41.70 | 30.97 |
| MiDashengLM | 开源 | 33.24 | 16.30 | 44.29 | 31.28 |
| Xiaomi-MiMo-Audio | 开源 | 32.93 | 18.63 | 39.24 | 30.27 |
| Qwen-2.5-Omni | 开源 | 30.90 | 16.96 | 37.25 | 28.37 |

5.  实际意义是什么：为音频多模态大模型（LALM/OLM）的发展提供了关键的评估标尺和明确的改进方向（如增强密集描述能力、改进多音频推理、支持原生多通道处理）。对于推动模型从“听懂语义”到“理解世界”的跨越，特别是在具身智能、机器人等需要空间感知的领域，具有重要指导意义。
6.  主要局限性是什么：a) 作为基准测试，其价值取决于社区的采纳程度；b) 部分真实世界时空推理数据的获取与验证成本高昂，基准规模相对有限；c) 随着模型快速演进，基准可能需要不断更新以维持挑战性；d) 论文分析指出了模型的问题，但并未提出新的模型架构或训练方法来直接解决这些问题。

---

### 7. [Human Behavior Atlas: Benchmarking Unified Psychological And Social Behavior Understanding](/audio-paper-digest-blog/posts/2026-05-03-human-behavior-atlas-benchmarking-unified)

✅ **7.5/10** | 前25% | #基准测试 | #多任务学习 | #多模态模型 #情感识别

👥 **作者与机构**

- 第一作者：Keane Ong（MIT， National University of Singapore）
- 通讯作者：未明确说明（Paul Pu Liang通常为团队负责人）
- 作者列表：Keane Ong¹²， Wei Dai¹， Carol Li¹， Dewei Feng¹， Hengzhi Li¹³， Jingyao Wu¹， Jiaee Cheong⁴， Rui Mao⁵， Gianmarco Mengaldo²， Erik Cambria⁵， Paul Pu Liang¹。其中，*表示同等贡献。¹MIT， ²National University of Singapore， ³Imperial College London， ⁴Harvard University， ⁵Nanyang Technological University。

💡 **毒舌点评**

亮点： 这项工作的价值在于“整理与统一”而非“颠覆性创造”——它将行为理解领域散落的13个数据集、10项任务用一套标准格式和评估框架“捆成一束”，为社区提供了一个即插即用的综合靶场，其工程完整度和开源诚意远超多数“换个数据集刷点”的论文。  
短板： 论文的“新”更多体现在数据组织和评估规范上，核心模型（OmniSapiens-7B）本质上是在现有商业模型（Qwen2.5-Omni-7B）上做微调和适配，缺乏原创的、针对行为理解特性的深度架构设计；此外，尽管声称覆盖广泛，但部分数据集（如PTSD-in-the-Wild仅634样本）的规模可能难以支撑其宣称的“基础模型”训练的稳健性。

🔗 **开源详情**

- 代码： 论文提供了GitHub仓库链接：https://github.com/MIT-MI/human_behavior_atlas。
- 模型权重： 论文中提到训练了OMNISAPIENS-7B系列模型，并承诺发布。代码仓库应包含相关信息。
- 数据集： Human Behavior Atlas基准测试本身即为核心产出，由13个公开数据集标准化整合而成，论文承诺公开发布。
- Demo： 论文中未提及在线演示。
- 复现材料： 非常充分。论文正文中概述了方法，附录（A-D）提供了几乎所有技术细节：数据集描述、划分、评估指标公式、LLM评估提示词、模型架构细节（SFT， RL）、训练超参数（学习率、批大小、LoRA配置等）、实验设置、以及额外的消融实验结果。
- 引用的开源项目/模型： 基于Qwen2.5-Omni-7B（骨干），使用MediaPipe（视觉描述符提取），OpenSMILE（音频描述符提取），Whisper v3（转录生成），以及GPT-5-nano（LLM评估器）。

📌 **核心摘要**

1. 问题： 当前对心理与社会行为的AI理解模型大多针对单一任务和单一数据集设计，导致系统碎片化、难以扩展和迁移，且缺乏统一的评估标准。
2. 方法核心： 论文构建了Human Behavior Atlas，一个统一的多模态（文本、音频、视频）基准测试，包含101,964个样本，覆盖情感、认知、病理、社会过程四大维度下的10项任务。所有数据被标准化为“提示-目标”格式，并统一了评估指标。在此基准上，论文训练了三个模型变体：OmniSapiens-7B SFT（监督微调）、OmniSapiens-7B BAM（通过残差适配器模块集成行为描述符）和OmniSapiens-7B RL（基于GRPO的强化学习）。
3. 新意： 与之前专注于单一维度或任务的基准不同，Human Behavior Atlas首次将广泛的心理社会行为任务整合到一个标准化框架下，并提供了配套的、经过专门行为数据训练的基础模型系列。它强调通过统一训练来捕获跨任务的行为共性。
4. 主要实验结果： 在多任务基准测试中，OmniSapiens-7B系列模型在大多数行为任务上超越了通用的多模态大模型（如Qwen2.5-Omni-7B， Gemma-3-4B）。例如，在情感识别（EMO）任务上，OmniSapiens-7B BAM平均得分0.65，高于Qwen2.5-Omni-7B的0.58。迁移学习实验表明，在Human Behavior Atlas上预训练能显著提升模型在未见过的新数据集（如DAIC-WOZ抑郁检测）和新任务（如MUStARD讽刺检测）上的性能，例如在DAIC-WOZ上取得0.749的F1分数，远高于基线的0.579。BAM模块在NVC（非语言沟通）、SAR（讽刺）等任务上带来了最高33%的性能提升。
![模型多任务性能对比](icassp-img://ZKE23BBvlQ/1.png)
图2：不同模型在10项行为任务上的平均性能对比。OmniSapiens-7B系列（尤其是BAM和SFT）在多数任务上优于通用基线。
![迁移学习结果](icassp-img://ZKE23BBvlQ/5.png)
表5：在Human Behavior Atlas上预训练的OmniSapiens-7B SFT在未见过的数据集上进行少样本微调后的性能，均优于未在行为数据上预训练的Qwen2.5-Omni-7B SFT。
5. 实际意义： 为情感计算、心理健康监测、人机交互等领域提供了一个可复用的开发和评估基础设施，有望加速能够综合理解人类复杂行为的下一代AI系统的发展。
6. 主要局限性： 1）数据集的语言多样性不足，主要为英文数据；2）部分数据集（如DAIC-WOZ， PTSD-in-the-Wild）样本量较小，可能限制模型训练的充分性；3）虽然评估指标统一，但使用LLM作为开放式回答的评估器可能存在偏差和不稳定性。

---

### 8. [JointAVBench: A Benchmark for Joint Audio-Visual Reasoning Evaluation](/audio-paper-digest-blog/posts/2026-05-03-jointavbench-a-benchmark-for-joint-audio-visual)

✅ **7.5/10** | 前25% | #基准测试 | #多模态模型 | #大语言模型 #音频事件检测

👥 **作者与机构**

- 第一作者：Jianghan Chao（中国人民大学高瓴人工智能学院）
- 通讯作者：Ruihua Song（中国人民大学高瓴人工智能学院）
- 作者列表：Jianghan Chao（中国人民大学高瓴人工智能学院）、Jianzhang Gao（中国人民大学高瓴人工智能学院）、Wenhui Tan（中国人民大学高瓴人工智能学院）、Yuchong Sun（中国人民大学高瓴人工智能学院）、Ruihua Song（中国人民大学高瓴人工智能学院）、Liyun Ru（百川智能）

💡 **毒舌点评**

这篇论文的亮点在于其构建的JointAVBench基准测试分类法系统性极强（覆盖认知、音频类型、场景复杂度三维度共15类任务），并设计了半自动化的构建流程，有效控制了音视频的严格依赖性（AV Corr. Ratio 100%）。短板在于其构建过程强依赖现有的音视频/语言模型进行“数据生成”而非“人工创作”，这在一定程度上削弱了基准的独立性与“终极试金石”的属性，且评估范围相对局限于短片场景。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：JointAVBench基准数据集已公开，可通过项目页面（https://jointavbench.github.io）获取。论文中明确说明在CC BY-NC-SA 4.0许可证下发布。
- Demo：未提及。
- 复现材料：提供了数据集。在附录A.5中给出了评估实验的关键设置细节（如模型选择、帧数、API参数）。但构建数据集所使用的三阶段自动化流程的具体代码、中间模型或配置未公开。
- 论文中引用的开源项目：
    - 视频处理：PySceneDetect（用于场景分割）。
    - 音频处理：Whisper-v3（用于语音转录）。
    - 模型：Qwen2.5-VL、Qwen2.5-Omni、Qwen2.5（用于数据生成和质量控制）。

📌 **核心摘要**

1. 解决什么问题：现有的多模态大语言模型（Omni-LLMs）评估基准缺乏对联合音视频推理能力的全面、严格评估。现有数据集在音视频依赖控制、音频信息类型多样性和场景跨度复杂性上存在不足。
2. 方法核心是什么：提出JointAVBench，一个全新的综合基准。其核心是一个三维分类法（5种认知维度 × 4种音频类型 × 3种场景复杂度，共15类任务）。为高效构建数据，设计了一个三阶段半自动化流程：① 使用多个模型生成全景描述（视频、语音、声学事件、音乐、声乐特征）；② 根据预定义的任务模板，基于所需模态信息的子集合成严格要求音视频联合推理的问答对；③ 通过多级质量验证和人工审核筛选，最终得到2,853个高质量多选题。
3. 与已有方法相比新在哪里：(1) 首次提供全面分类：系统性覆盖了音视频联合推理的多个核心方面。(2) 强调严格相关性：确保所有问题必须同时依赖音视频信息才能回答（AV Corr. Ratio 100%）。(3) 扩展场景复杂度：引入单场景、跨场景和全场景推理，模拟更真实复杂的理解任务。
4. 主要实验结果如何：论文评估了多类主流MLLMs。结果显示，即使表现最好的Omni-LLM（Gemini2.5-Pro）在JointAVBench上的平均准确率也仅为62.6%，显著高于单模态基线（如Video-LLM或Audio-LLM），但表明联合推理仍有巨大提升空间。关键发现包括：模型在不同音频类型上表现不均衡（对语音和声乐特征任务较差）；跨场景任务性能下降明显。主要对比结果见下表：
| 模型（类型） | STL | SPL | SOOG | SOER | SPER | MPTI | VSSR | CSA | MPO | PTG | AFA | PDP | AVDM | MESI | CRI | 平均 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Gemini2.5-Pro (Omni) | 73.0 | 59.4 | 60.8 | 68.9 | 35.2 | 68.1 | 76.5 | 43.8 | 66.0 | 60.7 | 65.5 | 45.7 | 75.5 | 66.1 | 81.9 | 62.6 |
| Qwen3-Omni (Omni) | 71.1 | 43.4 | 73.8 | 78.4 | 35.7 | 80.3 | 75.7 | 42.1 | 45.2 | 30.9 | 59.7 | 47.3 | 61.8 | 69.2 | 84.0 | 62.1 |
| Qwen2.5-VL (Video) | 33.9 | 38.8 | 55.3 | 59.3 | 22.9 | 57.2 | 47.2 | 31.7 | 40.4 | 32.2 | 62.5 | 39.8 | 40.7 | 62.9 | 61.6 | 47.1 |
| Kimi-Audio (Audio) | 56.5 | 21.9 | 48.6 | 61.7 | 32.9 | 53.3 | 34.3 | 38.0 | 33.0 | 26.2 | 65.3 | 38.7 | 40.2 | 56.1 | 69.5 | 45.9 |
5. 实际意义是什么：为评估和推动能真正理解现实世界中交织的音视频信息的Omni-LLM提供了标准化工具和方向。揭示了当前模型在复杂跨场景推理、声乐特征理解等方面的不足，为未来模型改进指明了重点。
6. 主要局限性是什么：(1) 基准数据完全来源于SF20K短片数据集，可能存在领域偏差。(2) 所设计的15类任务可能未穷尽所有音视频联合推理能力维度。(3) 实验评估仅选取了代表性模型，未进行穷尽测试。

---

### 9. [MMSU: A Massive Multi-task Spoken Language Understanding and Reasoning Benchmark](/audio-paper-digest-blog/posts/2026-05-03-mmsu-a-massive-multi-task-spoken-language)

✅ **7.5/10** | 前25% | #基准测试 | #模型评估 | #语音大模型 #语音理解

👥 **作者与机构**

- 第一作者：Dingdong Wang（香港中文大学， dingdongwang@link.cuhk.edu.hk）
- 通讯作者：未明确说明（根据邮箱格式判断第一作者可能为学生，通讯作者或为Helen Meng教授，但文中未明确标注）
- 作者列表：Dingdong Wang（香港中文大学）、Junan Li（香港中文大学）、Jincenzi Wu（香港中文大学）、Dongchao Yang（香港中文大学）、Xueyuan Chen（香港中文大学）、Tianhua Zhang（香港中文大学）、Helen Meng（香港中文大学）

💡 **毒舌点评**

这篇工作的亮点在于其系统性和理论深度，将语言学理论框架（音韵、韵律、修辞等）首次全面、结构化地植入语音理解评测，使得评估不再浮于语义表面，触及了“如何说”和“言外之意”的核心。然而，其短板也明显：47个任务的设计略显“学术理想主义”，部分任务（如“对联匹配”、“音节数统计”）在真实的人机语音交互场景中频次极低，可能导致评测结果与模型实际效用产生偏差。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及。
- 数据集：是。论文明确提供了数据集的HuggingFace链接：`https://huggingface.co/datasets/ddwang2000/MMSU`。
- Demo：论文中未提及在线演示。
- 复现材料：论文详细说明了数据构建流程、任务定义和评测设置，为复现其评测提供了文本层面的指导，但未提供脚本或配置文件。
- 论文中引用的开源项目/工具：论文在数据构建中引用了大量开源数据集（如MELD, CommonVoice, Emilia, CoVoST 2, VCTK等），并使用了Azure TTS服务。

📌 **核心摘要**

1. 问题：现有的语音大模型（SpeechLLMs）评测基准存在三大不足：忽视日常语音中的非语义现象（如口吃、反讽）、过度依赖合成语音导致缺乏真实性、以及缺乏语言学理论指导导致评估存在盲点。
2. 方法：提出MMSU（大规模多任务口语理解与推理基准）。这是一个包含5,000个精心标注的音频-问题-答案三元组的评测集，覆盖47个任务。其核心方法论是构建一个三层分类体系（感知/推理 -> 语言学/副语言学 -> 具体子领域），确保任务设计根植于语言学理论。
3. 新在哪里：1) 理论驱动：首次系统性地将音韵学、韵律学、修辞学、句法学等语言学理论融入基准任务设计。2) 覆盖全面：任务设计覆盖了语音现象的广度（如近音词、停顿、重音、情感语境推理）和深度（从感知到复杂推理）。3) 数据真实：强调使用真实世界录音（76.74%来自开源数据集）和高质量专业录音，减少合成语音偏差。
4. 主要实验结果：对22个主流语音大模型和全能大模型进行了评测。结果显示，当前模型能力与人类表现存在显著差距：最强模型Gemini-1.5-Pro的平均准确率仅为60.68%，而人类评估者平均准确率为89.72%。模型在音韵相关的感知任务（如近音词感知、辅音元音感知）上表现尤其糟糕。论文还通过噪声注入实验证明了模型确实在利用音频信号而非文本偏见。
5. 实际意义：MMSU为评估语音大模型的“深度理解”能力提供了全新的、更严格的标准化框架。它揭示了当前模型在音韵处理和精细声学感知上的核心瓶颈，为未来模型的优化（如增强声学特征编码、融合语言学知识）指明了具体方向。
6. 主要局限性：1) 任务实用性：部分任务（如“对联匹配”）可能过于学术化，与高频人机交互场景关联度有待商榷。2) 静态评测：作为静态数据集，可能无法完全捕捉动态、开放域对话中的复杂语音现象。3) 模型覆盖：虽评估了22个模型，但未包含部分最新的开源或闭源模型。

---

