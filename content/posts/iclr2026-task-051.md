---
title: "ICLR 2026 - 音频问答 论文列表"
date: 2026-05-03
draft: false
tags: ["音频问答"]
categories: [iclr-2026]
description: "共 7 篇 ICLR 2026 音频问答 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频问答

共 **7** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Query-Guided Spatial–Temporal–Frequency Interaction for Musi](/audio-paper-digest-blog/posts/2026-05-03-query-guided-spatialtemporalfrequency-interaction) | 8.5分 | 前25% |
| 🥈 | [Incentivizing Consistent, Effective and Scalable Reasoning C](/audio-paper-digest-blog/posts/2026-05-03-incentivizing-consistent-effective-and-scalable) | 8.0分 | 前25% |
| 🥉 | [OmniVinci: Enhancing Architecture and Data for Omni-Modal Un](/audio-paper-digest-blog/posts/2026-05-03-omnivinci-enhancing-architecture-and-data-for) | 8.0分 | 前25% |
| 4. | [JointAVBench: A Benchmark for Joint Audio-Visual Reasoning E](/audio-paper-digest-blog/posts/2026-05-03-jointavbench-a-benchmark-for-joint-audio-visual) | 8.0分 | 前25% |
| 5. | [Echo: Towards Advanced Audio Comprehension via Audio-Interle](/audio-paper-digest-blog/posts/2026-05-03-echo-towards-advanced-audio-comprehension-via) | 8.0分 | 前25% |
| 6. | [Measuring Audio's Impact on Correctness: Audio-Contribution-](/audio-paper-digest-blog/posts/2026-05-03-measuring-audios-impact-on-correctness-audio) | 7.5分 | 前25% |
| 7. | [Can Vision-Language Models Answer Face to Face Questions in ](/audio-paper-digest-blog/posts/2026-05-03-can-vision-language-models-answer-face-to-face) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Query-Guided Spatial–Temporal–Frequency Interaction for Music Audio–Visual Question Answering](/audio-paper-digest-blog/posts/2026-05-03-query-guided-spatialtemporalfrequency-interaction)

🔥 **8.5/10** | 前25% | #音频问答 | #多模态模型 | #音乐理解 #时频分析

👥 **作者与机构**

- 第一作者：Kun Li（特文特大学；论文撰写时在IT大学哥本哈根）
- 通讯作者：Sami Sebastian Brandt（IT大学哥本哈根）
- 作者列表：Kun Li（特文特大学， IT大学哥本哈根）， Michael Ying Yang（巴斯大学）， Sami Sebastian Brandt（IT大学哥本哈根）

💡 **毒舌点评**

论文核心亮点在于**首次系统性地在AVQA任务中引入了频率域交互模块**，并通过早期、中期、晚期三阶段的查询引导设计，将问题信息深度融入视听特征提取过程，逻辑清晰且实验验证充分。然而，其**视觉空间感知部分仍较为基础**（主要依赖CLIP patch特征和简单注意力），在需要精确空间定位的视觉问题上（如Location类）与SOTA仍有差距，且未能展示对更大规模开源多模态模型（如Qwen2-VL）的对比优势。

🔗 **开源详情**

- **代码**：提供了GitHub仓库链接 `https://github.com/lik1996/QSTar`。
- **模型权重**：论文中未提及是否公开预训练模型权重。
- **数据集**：使用的是公开的**MUSIC-AVQA**数据集。论文中未提及自己发布新数据集。
- **Demo**：论文中未提及提供在线演示。
- **复现材料**：论文在**Implementation Details**部分和附录中提供了详细的训练细节（优化器、学习率、epoch数）、模型配置（预训练模型选择、特征维度）和硬件信息（单张H100 GPU），复现指南清晰。
- **论文中引用的开源项目**：明确依赖并提及了预训练模型**CLIP**、**VGGish**和**AST**的开源实现。代码基于PyTorch构建。

📌 **核心摘要**

1. **要解决什么问题**：现有音乐音视频问答（AVQA）方法大多将音频视为视频的补充，且问题信息仅在最后阶段简单融合，导致对音频特性（尤其是频率特性）利用不足，以及跨模态语义对齐不充分。
2. **方法核心是什么**：提出了QSTar框架，核心是三个模块：**查询引导多模态关联（QGMC）模块**，在早期利用问题特征精炼视听特征；**空间-时间-频率交互（STFI）模块**，其中**时间-频率交互（TFI）子模块**利用AST模型提取的频率特征来区分乐器；**查询上下文推理（QCR）块**，使用基于提示的上下文在最后引导预测。
3. **与已有方法相比新在哪里**：a) **查询引导贯穿始终**，而非仅在末尾；b) **显式建模频率维度**，利用AST和频率注意力来捕捉乐器独特的频谱“指纹”；c) **引入提示驱动的上下文推理**，将任务相关的关键维度（如乐器类型、持续时间）作为提示。
4. **主要实验结果如何**：在MUSIC-AVQA基准上，QSTar的整体平均准确率达到**78.98%**，显著超越之前的SOTA方法QA-TIGER（77.62%）和TSPM（76.79%）。尤其在需要区分乐器和时序变化的**Audio-Visual QA**（+2.24% vs QA-TIGER）和**Comparative**问题（+4.2% vs QA-TIGER）上提升明显。消融实验证明每个模块（QGMC, STI, TFI, QCR）均有贡献。
5. **实际意义是什么**：提升了对复杂音乐场景（尤其是多乐器、微妙动作场景）的理解能力，对增强人机交互、音乐信息检索等应用有潜在价值。
6. **主要局限性是什么**：a) 视觉空间定位精度有待提升；b) 未与更大规模、开源的视觉语言模型进行充分对比；c) 方法目前聚焦于音乐场景，其泛化性到其他AVQA场景（如日常事件）有待进一步验证（虽然在附录的AVQA数据集上也有提升）。

---

### 🥈 [Incentivizing Consistent, Effective and Scalable Reasoning Capability in Audio LLMs via Reasoning Process Rewards](/audio-paper-digest-blog/posts/2026-05-03-incentivizing-consistent-effective-and-scalable)

🔥 **8.0/10** | 前25% | #音频问答 | #强化学习 | #音频大模型 #模型评估

👥 **作者与机构**

- 第一作者：Jiajun Fan（伊利诺伊大学厄巴纳-香槟分校，Siebel School of Computing and Data Science） (论文注明为实习期间完成)
- 通讯作者：未明确说明（作者列表未区分）
- 作者列表：
  - Jiajun Fan（伊利诺伊大学厄巴纳-香槟分校） (♢)
  - Roger Ren（Amazon） (△)
  - Jingyuan Li（Amazon） (△)
  - Rahul Pandey（Amazon） (△)
  - Prashanth Gurunath Shivakumar（Amazon） (△)
  - Ivan Bulyko（Amazon） (△)
  - Ankur Gandhe（Amazon） (△)
  - Ge Liu（伊利诺伊大学厄巴纳-香槟分校） (♢)
  - Yile Gu（Amazon） (△)

💡 **毒舌点评**

这篇论文最亮眼的地方在于它不仅指出了“皇帝没穿衣服”（音频LLM推理反而降低性能），还递上了一套裁缝工具（多过程奖励的GRPO训练）把它修好了。然而，这套工具包虽然精良，但论文在结尾处承认，它更像是给听不清声音的人配了一副逻辑清晰的眼镜——看得再明白，源头的“感知瓶颈”没解决，天花板依然肉眼可见。

🔗 **开源详情**

- **代码**：论文中提到“将在论文发表后公开所有源代码和训练模型”，但当前文本中**未提供具体的代码仓库链接**。
- **模型权重**：同上，承诺公开训练好的CESAR模型，但未给出当前获取方式。
- **数据集**：主要训练数据为公开的AVQA数据集。论文中提到“数据增强”的模板将在附录中提供。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文在附录中提供了极其详尽的复现信息，包括：完整的算法伪代码、所有奖励函数的计算细节与关键词表、训练超参数（学习率、batch size等）、硬件配置、推理提示模板、AI-as-Judge评估的Prompt等。**复现材料非常充分**。
- **引用的开源项目**：论文构建于开源基础模型**Qwen2.5-Omni-7B**之上，并参考了**Ke-Omni-R**的代码库（作为训练基线）。

📌 **核心摘要**

1.  **解决的问题**：论文首次系统性地诊断并命名了音频大语言模型（Audio LLM）中的“测试时反向缩放”现象，即引入链式思维（CoT）推理非但不能提升性能，反而导致其随着推理链增长而持续下降。
2.  **方法核心**：提出CESAR框架，核心是从奖励推理结果转向奖励推理过程。采用群相对策略优化（GRPO）算法，设计了一套多维度的奖励函数，综合评估答案准确性、格式、推理-答案一致性、结构化分析模式、因果推理、领域知识集成，并惩罚冗余的过度思考。
3.  **相比已有方法的新颖之处**：不同于仅奖励最终答案的强化学习（如Ke-Omni-R），CESAR显式地、细粒度地监督和塑造推理过程本身，将其从一种不确定的“涌现现象”转化为可控制、可训练的“技能”。同时，它引入了“推理最佳点”的概念，通过测试时缩放找到最优推理长度。
4.  **主要实验结果**：在MMAU Test-mini基准上达到SOTA（77.1%），超越GPT-4o Audio（62.5%）和Gemini 2.5 Pro（71.6%）；在MMSU推理任务上达到接近人类水平（81.07%）。消融研究证明了各组件的有效性，人类评估显示其推理过程大幅优于基线。关键结果见下表：
    | 方法 | MMAU Test-mini 总准确率 |
    | :--- | :--- |
    | CESAR (Ours) | **77.10%** |
    | Ke-Omni-R (RL baseline) | 74.60% |
    | Gemini 2.5 Pro | 71.60% |
    | GPT-4o Audio | 62.50% |
    | Qwen2.5-Omni-7B (Base) | 65.20% (直接回答) |
5.  **实际意义**：为训练Audio LLM进行有效推理提供了原则性方法，解决了推理有害的悖论，使推理成为可从训练和推理两方面获益的可靠资产，推动了音频AI向更可信、更强能力的理性智能体发展。
6.  **主要局限性**：论文明确指出并验证了“感知瓶颈”是当前模型性能的天花板，即即使推理能力接近人类，基础音频感知能力仍与人类有巨大差距（MMSU感知任务：48.45% vs 人类91.24%）。CESAR方法本身也带来了较高的计算开销。

---

### 🥉 [OmniVinci: Enhancing Architecture and Data for Omni-Modal Understanding LLM](/audio-paper-digest-blog/posts/2026-05-03-omnivinci-enhancing-architecture-and-data-for)

🔥 **8.0/10** | 前25% | #音频问答 | #多模态模型 | #音频理解 #预训练

👥 **作者与机构**

- 第一作者：Hanrong Ye†* (NVIDIA) （†标注为通讯作者）
- 通讯作者：Hanrong Ye†* (NVIDIA), Hongxu Yin§†* (NVIDIA)
- 作者列表：Hanrong Ye (NVIDIA), Chao-Han Huck Yang (NVIDIA), Arushi Goel (NVIDIA), Wei Huang (NVIDIA), Ligeng Zhu (NVIDIA), Yuanhang Su (NVIDIA), Sean Lin (NVIDIA), An-Chieh Cheng (NVIDIA), Zhen Wan (NVIDIA), Jinchuan Tian (NVIDIA), Yuming Lou (NVIDIA), Dong Yang (NVIDIA), Zhijian Liu (NVIDIA), Yukang Chen (NVIDIA), Ambrish Dantrey (NVIDIA), Ehsan Jahangiri (NVIDIA), Sreyan Ghosh (NVIDIA), Daguang Xu (NVIDIA), Ehsan Hosseini-Asl (NVIDIA), Danial Mohseni Taheri (NVIDIA), Vidya Murali (NVIDIA), Sifei Liu (NVIDIA), Yao Lu (NVIDIA), Oluwatobi Olabiyi (NVIDIA), Yu-Chiang Frank Wang (NVIDIA), Rafael Valle (NVIDIA), Bryan Catanzaro (NVIDIA), Andrew Tao (NVIDIA), Song Han (NVIDIA), Jan Kautz (NVIDIA), Hongxu Yin (NVIDIA), Pavlo Molchanov (NVIDIA)

💡 **毒舌点评**

论文在构建“全能感知”的全模态大模型上做了系统且扎实的工程探索，提出的OmniAlignNet与时间建模方案有明确的设计动机和实证支持；但其宣称的“开源”在论文发布时仅停留在承诺层面，且在与Gemini等顶级闭源模型的直接对比上仍有差距，实际部署效果与效率需在具体场景中验证。

🔗 **开源详情**

- **代码**：论文中承诺提供代码链接（Code图标），但在提供的文本中未提及具体代码仓库链接。
- **模型权重**：论文中承诺提供模型链接（Model图标），但在提供的文本中未提及具体模型权重下载地址。
- **数据集**：论文详细描述了2400万对话的训练数据构成和分布，但未说明是否会公开这些数据。仅提到使用了公开的数据集作为来源。
- **Demo**：论文中承诺提供网页链接（Webpage图标），但在提供的文本中未提及具体演示地址。
- **复现材料**：论文在方法章节和附录中详细说明了模型架构（图2， 3）、训练数据分布（图5）、消融实验设置（表1， 2），以及强化学习的具体配置（公式6-7， 表8），提供了丰富的复现指导。
- **论文中引用的开源项目**：提到了使用Magpie TTS模型合成语音提示。依赖的编码器（视觉、音频）、LLM骨干网络等具体型号未在摘要中明确说明，应在论文附录或全文中查看。
- **开源计划**：论文明确表示本项目将作为开源软件公开发布（Reproducibility Statement），但未给出具体的时间线或平台信息。

📌 **核心摘要**

本文旨在解决当前大语言模型在**同时理解视觉、音频（包含语音和自然声音）和文本多种模态信息**时面临的挑战，特别是跨模态对齐、时间同步建模以及高质量全模态数据稀缺的问题。核心方法是构建名为**OmniVinci**的开源全模态大模型，其架构包含三项关键创新：1) **OmniAlignNet**：通过对比学习在共享潜在空间中对齐视觉和音频嵌入；2) **时间嵌入分组 (TEG)**：基于时间戳对视觉和音频嵌入进行分组，注入相对时序信息；3) **约束旋转时间嵌入 (CRTE)**：在嵌入向量中注入绝对时间戳信息。数据方面，提出了一种**全模态数据引擎**，通过结合单模态标注、LLM修正与合成，生成了2400万条高质量对话数据，并区分了隐式与显式全模态学习。实验结果表明，OmniVinci以仅0.2T的训练Token（相比Qwen2.5-Omni减少6倍），在DailyOmni（+19.05）、MMAR（+1.7）、Video-MME（+3.9）等关键基准上取得了显著性能提升，并展示了在机器人导航、体育分析、医疗影像理解等下游任务中的应用潜力。主要局限性在于，尽管取得了有竞争力的结果，但与最顶级的闭源模型（如Gemini-2.5-Pro）相比仍有差距，且其开源计划的具体落实情况有待观察。

---

### 4. [JointAVBench: A Benchmark for Joint Audio-Visual Reasoning Evaluation](/audio-paper-digest-blog/posts/2026-05-03-jointavbench-a-benchmark-for-joint-audio-visual)

🔥 **8.0/10** | 前25% | #音频问答 | #模型评估 | #基准测试 #多模态模型

👥 **作者与机构**

- 第一作者：Jianghan Chao（中国人民大学 高瓴人工智能学院）
- 通讯作者：Ruihua Song（中国人民大学 高瓴人工智能学院）
- 作者列表：Jianghan Chao（中国人民大学 高瓴人工智能学院）、Jianzhang Gao（中国人民大学 高瓴人工智能学院）、Wenhui Tan（中国人民大学 高瓴人工智能学院）、Yuchong Sun（中国人民大学 高瓴人工智能学院）、Ruihua Song（中国人民大学 高瓴人工智能学院）、Liyun Ru（百川智能）

💡 **毒舌点评**

亮点在于其构建了一个“强迫模型真正听+看”的严格评测体系，通过多维度任务分类和自动化流水线，有效暴露了当前多模态大模型在复杂音视频联合推理上的短板。短板是基准数据集全部来源于短片（SF20K），场景和叙事的多样性可能受限，且“自动化生成”在追求严格AV相关性的同时，也可能引入模型自身的偏见或幻觉，需警惕“用模型评估模型”的循环。

🔗 **开源详情**

-   **代码**：论文中未提及完整的代码仓库链接。但提供了项目主页 `https://jointavbench.github.io`，可能包含相关信息。
-   **模型权重**：论文未提及公开任何自研模型权重。
-   **数据集**：论文明确发布了JointAVBench数据集，并说明了其构成（2853个MCQs）。获取方式应通过其项目主页。
-   **Demo**：论文中未提及在线演示。
-   **复现材料**：论文详细描述了数据集构建的三阶段流水线，并提供了大量的Prompt设计示例（见附录及Figure 10-16），这对于复现其数据生成过程至关重要。
-   **引用的开源项目**：论文明确使用了以下开源工具/模型：
    *   **数据集**：Short-Films 20K (SF20K)
    *   **视频分割**：PySceneDetect
    *   **视觉描述**：Qwen2.5-VL
    *   **音频描述与理解**：Qwen2.5-Omni, Qwen2-Audio
    *   **语音识别**：Whisper-v3
    *   **通用LLM（用于生成与校验）**：Qwen-2.5
    *   **评测模型**：Qwen系列、Gemini系列、VideoLLaMA系列、InternVL系列、GPT-4o、SALMONN系列、OneLLM、AVicuna、LLaVA-Video、Kimi-Audio等。

📌 **核心摘要**

本文针对现有评测基准无法全面评估Omni-LLMs（能同时处理音频和视觉的大模型）音视频联合推理能力的问题，提出了一个新的基准测试JointAVBench。其核心创新在于构建了一个涵盖5个认知维度、4种音频信息类型（语音、人声特征、声音事件、音乐）和3种场景跨度（单场景、跨场景、全文）的系统性任务分类体系，共设计了15个需要严格音视频协同才能回答的任务。为克服高昂的人工标注成本，论文提出了一套三阶段的自动化/半自动化QA对生成流水线（多模态描述生成、QA对创建、严格质量控制），最终构建了2853个高质量的选择题。实验表明，表现最佳的Omni-LLM（如Gemini2.5-Pro）在基准上的平均准确率仅为62.6%，显著优于单模态基线，但在人声特征理解、跨场景推理等方面仍存在明显不足，揭示了当前模型在真正融合音视频信息进行复杂推理方面的巨大改进空间。

---

### 5. [Echo: Towards Advanced Audio Comprehension via Audio-Interleaved Reasoning](/audio-paper-digest-blog/posts/2026-05-03-echo-towards-advanced-audio-comprehension-via)

🔥 **8.0/10** | 前25% | #音频问答 | #强化学习 | #音频大模型 #自回归模型

👥 **作者与机构**

- 第一作者：Daiqing Wu（IIE, Chinese Academy of Sciences； University of Chinese Academy of Sciences）
- 通讯作者：Yangyang Kang（ByteDance China）， Yu Zhou（VCIP & TMCC & DISSec, College of Computer Science, Nankai University）
- 作者列表：Daiqing Wu（IIE, Chinese Academy of Sciences； University of Chinese Academy of Sciences）， Xuan Zhang（ByteDance China）， Dongbao Yang（IIE, Chinese Academy of Sciences）， Jiashu Yao（ByteDance China）， Longfei Chen（School of Information Science and Technology, ShanghaiTech University）， Qingsong Liu（ByteDance China）， Sicheng Zhao（Department of Psychological and Cognitive Sciences, Tsinghua University）， Can Ma（IIE, Chinese Academy of Sciences）， Yangyang Kang（ByteDance China；Zhejiang University）， Yu Zhou（VCIP & TMCC & DISSec, College of Computer Science, Nankai University）

💡 **毒舌点评**

亮点在于其核心思想——“音频交错推理”——非常直观且符合人类听觉认知，将音频从“静态上下文”提升为“动态推理组件”的设计范式很新颖。然而，论文的整个训练框架，尤其是SFT数据，高度依赖DeepSeek-R1进行合成与过滤，这种“用LLM造数据训LLM”的范式虽然高效，但存在潜在的偏差传播和“自证循环”风险，其长期可靠性与可解释性有待更严谨的审视。

🔗 **开源详情**

- **代码**：提供了代码仓库链接 https://github.com/wdqqdw/Echo，论文中提供了训练代码和脚本。
- **模型权重**：论文中未明确提及是否公开预训练或微调后的Echo模型权重。
- **数据集**：论文构建了EAQA-SFT和EAQA-RL数据集，但未明确说明是否会公开发布。其使用的源数据（AudioSet-Strong, MusicBench）为公开数据集。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文在附录中提供了详细的实现细节、伪代码、提示模板、数据集统计以及更多实验设置，复现信息较为充分。
- **论文中引用的开源项目**：Qwen2.5-Omni（基础模型），DeepSeek-R1（数据合成），ms-swift（SFT引擎），VERL（RL框架），vLLM（推理引擎）。

📌 **核心摘要**

本文旨在解决当前大型音频语言模型（LALM）在复杂音频理解中面临的信息瓶颈问题，即传统“音频条件文本推理”将音频一次性编码后仅在文本空间推理，容易丢失细粒度信息。为解决此问题，论文提出“音频交错推理”的新范式，模仿人类听觉认知中循环重听关键片段的过程，使模型能在推理中按需直接访问原始音频片段。方法上，论文提出一个两阶段训练框架：第一阶段通过监督微调（SFT）在高质量Audio-QA数据上让模型学会定位和引用音频片段；第二阶段通过强化学习（RL）优化模型动态、策略性地重听音频片段的能力。同时，设计了结构化的数据生成管道以产生训练数据。实验表明，Echo模型在多个强调专家级推理的音频理解基准（MMAR, MMAU, MMAU-mini）上取得了整体最优性能，超越了GPT-4o和Gemini-2.0-Flash等先进商业系统。主要贡献包括提出了模拟人类认知的音频交错推理格式、实现了具备此能力的Echo模型，并通过系统评估验证了该方法的高效性与泛化性。局限性在于当前实现相对简单（如重听片段仅作原始回放），且训练数据完全由LLM自动合成，缺乏人工启发式监督。

---

### 6. [Measuring Audio's Impact on Correctness: Audio-Contribution-Aware Post-Training of Large Audio Language Models](/audio-paper-digest-blog/posts/2026-05-03-measuring-audios-impact-on-correctness-audio)

✅ **7.5/10** | 前25% | #音频问答 | #强化学习 | #音频大模型 #数据集

👥 **作者与机构**

- 第一作者：Haolin He（香港中文大学、蚂蚁集团）
- 通讯作者：Jian Liu（蚂蚁集团）、Qiuqiang Kong（香港中文大学）
- 作者列表：Haolin He（香港中文大学、蚂蚁集团）、Xingjian Du（罗切斯特大学）、Renhe Sun（蚂蚁集团）、Zheqi Dai（香港中文大学）、Yujia Xiao（香港中文大学）、Mingru Yang（蚂蚁集团）、Jiayi Zhou（蚂蚁集团）、Xiquan Li（上海交通大学）、Zhengxi Liu（香港中文大学）、Zining Liang（香港中文大学）、Chunyat Wu（香港中文大学）、Qianhua He（华南理工大学）、Tan Lee（香港中文大学）、Xie Chen（上海交通大学）、Wei-Long Zheng（上海交通大学）、Weiqiang Wang（蚂蚁集团）、Mark D Plumbley（伦敦国王学院）、Jian Liu（蚂蚁集团）、Qiuqiang Kong（香港中文大学）

💡 **毒舌点评**

亮点在于发现了大型音频语言模型中普遍存在的“零音频贡献”现象，并据此提出了“音频贡献过滤”这一简洁而有效的训练数据划分方法，为多阶段后训练中的数据分配提供了新思路。短板是论文中数据集构建流程强依赖大语言模型（Qwen3-235B）进行问题生成、CoT生成和质量过滤，虽然设定了规则，但不可避免地引入了模型偏见，且未提供人工验证比例等更严格的质量控制数据，使得数据集的“高质量”声称部分依赖于模型自身的评估。

🔗 **开源详情**

- **代码**：论文中未提及代码链接。
- **模型权重**：未提及公开发布微调后的模型权重。
- **数据集**：论文详细介绍了AudioMCQ数据集的构建方法和组成，但**未提供下载链接或开源获取方式**，表明数据集可能未公开。
- **Demo**：未提及在线演示。
- **复现材料**：提供了非常详细的超参数表、训练策略和评估协议，复现的理论门槛低。
- **论文中引用的开源项目**：依赖的开源模型包括Qwen2.5-Omni（基座）、Qwen3-235B（数据集构建）、以及作为ACF评估工具的A-Flamingo2, R1-AQA, Kimi-Audio。

📌 **核心摘要**

1.  **问题**：针对大型音频语言模型（LALMs）的多阶段后训练（如SFT+RL），数据如何在不同阶段进行最优分配以最大化模型性能，尚未被充分探索。同时，缺乏大规模、高质量的专用后训练数据集。
2.  **方法核心**：提出构建了大规模音频问答数据集AudioMCQ（57.1k样本）。在此过程中，发现并定义了“零音频贡献”现象（模型仅凭文本即可答对），并据此设计了“音频贡献过滤”方法，将数据划分为弱音频贡献和强音频贡献子集。基于此，提出了两种后训练范式：“弱到强”（在弱贡献数据上SFT，再在强贡献数据上RL）和“混合到强”（在混合贡献数据上SFT，再在强贡献数据上RL）。
3.  **创新**：首次系统性研究了LALMs后训练中的音频贡献问题，并提出了基于该特性的简单有效的两阶段训练数据分配策略，这与以往仅使用随机划分数据的方法形成对比。
4.  **主要实验结果**：使用所提出的策略微调Qwen2.5-Omni，在多个基准上达到新的SOTA。具体地，“弱到强”策略在MMAU-test-mini上达到78.2%，在MMAU上达到75.6%；“混合到强”策略在MMAR上达到67.0%，在MMSU上达到71.7%。详细结果见下表：

| 方法 | MMAU-test-mini | MMAU | MMAR | MMSU |
| :--- | :---: | :---: | :---: | :---: |
| 骨干模型 (Qwen2.5-Omni) | 71.5 | 71.0 | 56.7 | 60.6 |
| All Data SFT | 75.2 | 75.0 | 64.6 | 64.0 |
| All Data GRPO | 78.1 | 75.4 | 63.0 | 70.2 |
| Weak AC SFT + Strong AC GRPO | **78.2** | **75.6** | 65.3 | 69.3 |
| Mix AC SFT + Strong AC GRPO | 76.4 | 75.1 | **67.0** | **71.7** |

5.  **实际意义**：为LALMs的后训练阶段提供了清晰的数据分配指导原则（RL阶段应使用强音频贡献数据），并发布了大规模高质量数据集以推动后续研究。
6.  **局限性**：零音频贡献现象的分析和过滤方法强依赖于所选定的评估模型集合（A-Flamingo2, R1-AQA, Kimi-Audio）；数据集构建过程中的自动化生成可能导致问题类型分布不均或存在潜在的系统性偏见；提出的范式有效性高度依赖下游任务的音频贡献特性。

---

### 7. [Can Vision-Language Models Answer Face to Face Questions in the Real-World?](/audio-paper-digest-blog/posts/2026-05-03-can-vision-language-models-answer-face-to-face)

✅ **7.0/10** | 前25% | #音频问答 | #多模态模型 | #视觉问答 #基准测试

👥 **作者与机构**

- 第一作者：Reza Pourreza¹， Rishit Dagli² (共同贡献)
- 通讯作者：未明确说明（论文未明确指出）
- 作者列表：Reza Pourreza¹ (Qualcomm AI Research)， Rishit Dagli² (University of Toronto)， Apratim Bhattacharyya¹ (Qualcomm AI Research)， Sunny Panchal¹ (Qualcomm AI Research)， Guillaume Berger¹ (Qualcomm AI Research)， Roland Memisevic¹ (Qualcomm AI Research)

💡 **毒舌点评**

本文像一面镜子，照出了当前多模态大模型在“真实世界感知”这条路上的尴尬：能写诗能解题，却搞不清用户指了指哪儿、拍了几下手。其最大价值不在于提出了什么惊天模型，而在于用一个设计精巧的“照妖镜”（QIVD数据集）把GPT-4o等一众大模型的“情境理解”短板暴露无遗，迫使学界直面从“图像理解”到“实时交互”的鸿沟。然而，论文的软肋也很明显：数据集规模仅2900条，且未完全开源，更像个精心设计的概念验证（PoC）而非能推动领域飞跃的大规模基础设施。

📌 **核心摘要**

1.  **要解决什么问题**：现有视觉语言模型主要针对离线、静态的图像/视频问答进行优化，无法胜任在真实世界中与用户进行实时、面对面的视听问答交互。这体现在模型难以理解指代（如“这个”、“这里”）、整合音频线索、判断“何时回答”以及处理需要情境常识的问题。
2.  **方法核心是什么**：作者提出了QIVD（Qualcomm Interactive Video Dataset），一个全新的在线视听问答数据集。数据集中，用户使用手机实时录制视频并提问，问题和视频流实时生成，模型必须基于当时的视听输入给出答案。每个数据点包含视频、音频、问题文本转录、答案文本以及一个关键标注——“最优回答时间戳”，即视频中包含足够信息以正确回答问题的时刻。论文还提出了一个简单的基线流式处理架构：使用流式ASR检测问题结束，然后将截至该时刻的视频和转录文本送入多模态大模型生成答案。
3.  **与已有方法相比新在哪里**：QIVD是首个真正“在线”、“面对面”的视听问答基准。与大多数使用预制视频并事后标注的现有数据集不同，QIVD的问题与视频同步产生，捕捉了真实交互中的不确定性（如用户指向未来将出现的物体）。它首次系统性地将“回答时机”作为核心评估要素之一，这更符合真实对话的需求。
4.  **主要实验结果如何**：实验表明，即使是最先进的闭源模型（如GPT-4o）和开源模型，在QIVD上的表现也远低于人类（人类基线正确率~87%，最好的模型GPT-4o仅~59%）。模型的主要失败模式包括：错误理解指代（如指向错误）、动作计数错误、忽略音频信息、以及无法整合时间上下文。微调视频LLaMA2.1模型能在动作计数（+17%）、音频视觉任务（+17.4%）等类别上带来显著提升。关键对比数据见下表：

**表1：在QIVD数据集上，主要模型在离线设置（使用真实问题和时间戳）下的性能对比（Corr.代表LLM法官判断的正确率）**
| 模型 | 正确率 (Corr. ↑) | BERT ↑ | METEOR ↑ | BLEU ↑ | ROUGE-L ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **人类基线** | **87.33** | 93.01 | 53.21 | 17.40 | 49.76 |
| GPT-4o | 58.76 | 89.36 | 51.18 | 15.72 | 42.55 |
| Gemini-2.5-Flash | 58.07 | 90.43 | 43.07 | 8.33 | 36.05 |
| Qwen3-VL-8B | 60.07 | 87.58 | 36.72 | 6.64 | 35.89 |
| VideoLLaMA3-7B | 56.38 | 91.63 | 48.56 | 12.72 | 43.84 |
| VideoLLaMA2.1-7B-FT-AV (微调后) | 58.5* | - | - | - | - |

*（注：微调后模型的数据来自图2，为5折交叉验证的平均值，其他模型来自表5）
5.  **实际意义是什么**：QIVD基准和实验结果明确量化了当前AI在实时、开放式视听交互方面的巨大差距，为未来研究指明了具体方向（如改进情境理解、指代消解、时序推理和音视频融合）。它推动了多模态AI从“描述世界”向“实时与世界对话”的范式转变。
6.  **主要局限性是什么**：1）数据集规模较小（2900条），可能限制了复杂模型的泛化能力。2）论文主要贡献是数据集和评估，提出的基线方法（ASR+LMM）是现有模块的简单组合，缺乏架构创新。3）数据集场景相对集中（手机第一人称视角），多样性有待扩展。4）评估依赖LLM法官，可能引入偏差。

---

