---
title: "Audio-Visual Flamingo: Open Audio-Visual Intelligence for Long and Complex Videos"
date: 2026-07-20
draft: false
tags: [音视频理解, 多模态模型, 音视频问答, 数据集, 课程学习]
categories: [论文速递]
description: "音视频理解 | 6.0/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2607.16107"
---

# 📄 Audio-Visual Flamingo: Open Audio-Visual Intelligence for Long and Complex Videos

标签：#音视频理解 #多模态模型 #音视频问答 #数据集 #课程学习

**6.0/10** | 创新 1.2/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 0.5/1.5 | 开源 0/1.5 | 复现 0.3/0.5 | 工程 1.2/1.5

✅ **6.0/10** | 前50% | 文档类型：系统技术报告 | 评分置信度：高 | #音视频理解 | #多模态模型 | #音视频问答 #数据集 | [arxiv](https://arxiv.org/abs/2607.16107)


### 👥 作者与机构

- 第一作者：Sreyan Ghosh（NVIDIA, USA；University of Maryland, USA）
- 通讯作者：未说明
- 作者列表：Sreyan Ghosh（NVIDIA, USA；University of Maryland, USA）、Arushi Goel（NVIDIA, USA；University of Maryland, USA）、Kaousheik Jayakumar（University of Maryland, USA）、Lasha Koroshinadze（University of Maryland, USA）、Nishit Anand（University of Maryland, USA）、Siddharth Gururani（NVIDIA, USA）、Hanrong Ye（NVIDIA, USA）、Pritam Biswas（NVIDIA, USA）、Yuanhang Su（NVIDIA, USA）、Ehsan Hosseini-Asl（NVIDIA, USA）、Sang-gil Lee（NVIDIA, USA）、Zhifeng Kong（NVIDIA, USA）、Jaehyeon Kim（NVIDIA, USA）、Sungwon Kim（NVIDIA, USA）、Karan Sapra（NVIDIA, USA）、S Sakshi（University of Maryland, USA）、Ramani Duraiswami（University of Maryland, USA）、Dinesh Manocha（University of Maryland, USA）、Andrew Tao（NVIDIA, USA）、Mohammad Shoeybi（NVIDIA, USA）、Bryan Catanzaro（NVIDIA, USA）、Ming-Yu Liu（NVIDIA, USA）、Wei Ping（NVIDIA, USA）

### 💡 毒舌点评

论文在工程和开源上堪称模范生，提供了从数据集、训练代码到模型权重的完整“全家桶”，对音视频理解领域的研究者极具实用价值。然而，其核心创新更接近于一个精心设计的系统集成和工程优化，而非原理性突破，方法的新颖性相对有限。

### 📌 核心摘要

本文提出了AV-Flamingo，一个完全开源的音视频大语言模型，旨在解决长且复杂的真实世界视频（包含音频和视觉）的理解与推理问题。其核心方法包含三个部分：1）构建了名为“Audio-Visual-Skills”（AV-Skills）的大规模数据集，包含约700万针对音视频联合推理的标注实例；2）设计了一个包含预训练、中期训练和后训练的三阶段课程学习框架；3）提出了“时序音视频交错思维链”（TAVIT）推理框架，将推理步骤锚定到时间戳。实验表明，在15+个音频、视觉和多模态基准测试中，AV-Flamingo显著优于同等规模的开源模型，并在部分任务上超越或比肩更大规模的开闭源模型（如Gemini、GPT-4o），尤其在MMOU等长视频复杂任务上表现突出。其意义在于提供了一个可复现的、全开源的强基线系统，推动了开放音视频智能的研究。主要局限包括数据集可能引入的偏差以及在极长、稀疏视频上的推理挑战。

**关键实验结果对比表（部分）**

| 任务 | 数据集 | 指标 | AVF-Instruct | 最强基线（同规模） | 最强基线（更大规模/闭源） |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 全模态理解 | WorldSense | ACC ↑ | 50.3 | OmniVinci (48.2) | - |
| 全模态理解 | DailyOmni | ACC ↑ | 72.4 | OmniVinci (66.5) | - |
| 全模态理解 | OmniBench | ACC ↑ | 48.5 | - | Gemini-1.5 Pro (47.6) |
| 全模态理解 | MMOU | ACC ↑ | 56.9 | Minicpm-o 4.5 (46.8) | Gemini-2.5 Pro (64.2) |
| 全模态理解 | AVHBench (A->V) | ACC ↑ | 77.0 | - | Gemini-2.0 Flash (83.3) |
| 全模态理解 | AVHBench (V->A) | ACC ↑ | 81.1 | - | Gemini-2.0 Flash (63.3) |
| 音频理解 | MMAR | ACC ↑ | 60.1 | OmniVinci (58.4) | - |
| 音频理解 | MMSU | ACC ↑ | 61.5 | - | Gemini 1.5 Pro (60.7) |
| 音频理解 | MMAU (test) Avg | ACC ↑ | 73.49 | OmniVinci (71.60) | Audio Flamingo 3 (72.42) |
| 音频理解 | CMM Hallucination | ACC ↑ | 86.7 | - | Gemini 2.5 Pro (82.0) |
| 视频理解 | Video-MME (w/o sub) | ACC ↑ | 70.7 | OmniVinci (67.3) | NVILA (64.2) |
| 视频理解 | Video-MME (w/ sub) | ACC ↑ | 71.2 | OmniVinci (68.6) | - |
| 视频理解 | LongVideoBench | ACC ↑ | 60.1 | OmniVinci (62.0) | NVILA (58.7) |
| 视频理解 | MVHBench | ACC ↑ | 71.7 | OmniVinci (70.6) | - |
| 语音识别 | LibriSpeech (test-clean) | WER ↓ | 1.64 | - | Phi-4-mm (1.67) |
| 语音识别 | SPGISpeech | WER ↓ | 2.8 | Qwen2-A-Inst (3.0) | - |
| 语音识别 | VoxPopuli | WER ↓ | 5.8 | - | Phi-4-mm (5.9) |
| 语音识别 | TEDLIUM | WER ↓ | 3.0 | - | Phi-4-mm (2.9) |
| 语音识别 | GigaSpeech | WER ↓ | 10.2 | - | Phi-4-mm (9.78) |

### 🔗 开源详情

- 代码：论文中提供了代码链接（论文开头有“Code”链接）。
- 模型权重：论文中提供了模型链接（论文开头有“Model”链接）。
- 数据集：论文中提及构建了名为**Audio-Visual-Skills**的数据集，包含**AV-Skills-Short**和**AV-Skills-Long**两部分，以及用于推理的**AV-Think**数据集。论文开头提供了数据集链接。
- Demo：论文中提供了Demo链接（论文开头有“Demo”链接）。
- 复现材料：论文中提供了项目页面链接。正文提及了三阶段课程的大致数据混合和模型架构，但具体训练超参数指向附录，未在正文提供。
- 论文中引用的关键开源项目：
    1.  **OmniVinci**：作为AV-Flamingo的基座模型初始化。
    2.  **Qwen2.5-7B**：作为核心语言模型。
    3.  **SigLip**：作为视觉编码器。
    4.  **AF-Whisper**：作为音频编码器。
    5.  **混合序列并行（Hybrid Sequence Parallelism）**：使用了Ulysses和Ring-Attention。
    6.  **GRPO-based RL**：用于强化学习阶段。
    7.  **评估数据集**：论文中提及了多个用于评估的基准数据集（如WorldSense, DailyOmni, Video-MME, LibriSpeech等）。

### 🏗️ 方法概述和架构

AV-Flamingo是一个端到端的音视频大语言模型，其核心流程为：输入原始视频（含音频），通过视觉和音频编码器提取特征，经由跨模态对齐模块融合后，送入大型语言模型进行理解和推理，最终输出文本（或语音）响应。该架构主要包含五个关键组件：

1.  **SigLip视觉编码器**：用于从图像或视频帧中提取丰富的空间特征。其采用“Spatial-Scale-then-Compress”动态S2模块，先在多空间尺度上编码输入，再将多尺度表示压缩为紧凑的token序列。这种设计允许模型在不显著增加LLM处理token数的情况下，编码更高分辨率的图像和更多帧的视频，从而保留细粒度的时空细节。输入为原始视觉输入（图像或视频帧）\(V\)，输出为压缩后的视觉特征 \(h_v = f_v(V)\)，其中 \(h_v \in \mathbb{R}^{HW \times d_v}\)， \(H\) 和 \(W\) 是压缩后视觉特征图的空间高度和宽度， \(d_v\) 是视觉编码器的隐藏维度。
2.  **AF-Whisper音频编码器**：基于Whisper架构改进，用于处理任意长度的音频。它将音频波形转换为128通道对数梅尔频谱图，并通过滑动窗口机制（30秒为一个非重叠块）分段独立编码后拼接，以处理长音频（如播客、电影原声）而不截断。输入为音频 \(A\)，首先重采样至16kHz单声道，然后转换为梅尔频谱图，最后由编码器处理得到音频特征 \(h_a = f_a(A)\)，其中 \(h_a \in \mathbb{R}^{N \times d_a}\)， \(N\) 是30秒音频块的总数， \(d_a\) 是Whisper编码器的隐藏维度。
3.  **视觉与音频适配器**：分别由两层MLP构成的投影层，将视觉特征 \(h_v\) 和音频特征 \(h_a\) 映射到大语言模型的嵌入空间，得到投影后的视觉嵌入 \(v = \mathcal{V}(h_v)\) 和音频嵌入 \(a = \mathcal{A}(h_a)\)。
4.  **跨模态对齐与时序交织模块**：这是融合音视频信息的核心。首先，将投影后的视觉和音频token序列沿时间维度切分成多个同步的时间块，然后根据时间戳将同一时间窗口内的视觉和音频token交错排列。这种交错结构使得LLM的自注意力机制能够自然地关注到时间上共现的视听事件。随后，通过**约束旋转时间嵌入**（CRTE）为这些交错的token嵌入注入绝对时序信息（如正弦旋转变换），使模型能够区分多模态事件的顺序和相对时间。
5.  **大型语言模型（LLM）骨干**：采用预训练的Qwen2.5-7B（70亿参数，36层，16注意力头）作为核心推理引擎。它接收上述时序对齐、交错的视觉-音频嵌入作为输入前缀，后接文本指令或问题，自回归地生成文本响应。为支持长达15分钟的视频训练，采用了混合序列并行（Ulysses + Ring-Attention）结合完全分片数据并行（FSDP）以减少内存占用。
6.  **流式文本转语音（TTS）模块（可选）**：为支持语音交互，AV-Flamingo集成了一个流式TTS模块。该模块是一个解码器-only的Transformer，根据来自LLM的子词文本token和先前生成的音频token，预测下一个音频token，从而实现实时语音输出。

**训练课程设计**：模型采用三阶段渐进式训练，旨在从短时感知逐步过渡到长时复杂推理：
- **阶段1：预训练**。此阶段包含两个子阶段：(1) 初始化阶段，从已具备视听对齐能力的OmniVinci模型初始化；(2) 短上下文训练阶段，在混合数据上微调，包括单模态数据（保留原有能力）和新构建的AV-Skills-Short数据（引入跨模态推理）。此阶段上下文长度上限为16K token。
- **阶段2：中期训练**。重点扩展模型对长时输入的理解能力。引入AV-Skills-Long数据集（视频时长达15分钟），并辅以部分下采样的AV-Skills-Short数据以防止遗忘。上下文长度扩展至32K token。完成此阶段的模型为AVF-Instruct。
- **阶段3：后训练**。旨在训练模型的时序推理能力。在构建的AV-Think数据集（包含时间戳锚定的推理链）上进行监督微调（SFT），随后通过基于GRPO的强化学习进一步优化推理质量。最终模型为AVF-Think。

AV-Flamingo的整体系统架构与训练流程如下图所示。

![Figure 2: AV-Flamingo training and architecture. Top: Starting from OmniVinci, AV-Flamingo is trained in three stages: pre-training on AV-Skills short-context data, mid-training on AV-Skills long-context data, and post-training on chain-of-](https://arxiv.org/html/2607.16107v1/x2.png)

该图清晰地展示了模型从OmniVinci初始化，经过预训练、中期训练和后训练三阶段演进至AVF-Instruct和AVF-Think的过程，并可视化了视觉/音频输入编码、时序对齐、与LLM交互及TTS输出的完整数据流。

### 💡 核心创新点

1.  **大规模、高质量的音视频联合推理数据集（AV-Skills）**：针对现有数据集在覆盖范围和任务复杂性上的不足，本文构建了包含约700万实例的AV-Skills数据集。它不仅规模大，更关键的是明确以“技能”为导向设计（如因果推理、时序推理、幻觉检测等），并覆盖从短视频到15分钟长视频的广泛时长，直接填补了用于训练长视频音视频推理模型的数据空白。
2.  **面向长视频的渐进式课程学习框架**：提出了“预训练-中期训练-后训练”的三阶段训练范式。其创新在于不同阶段使用不同特性的数据和上下文长度，模拟了模型能力从基础感知到高级推理的逐步构建过程，特别是中期训练专门扩展长上下文能力，这区别于以往单一阶段或简单混合数据的训练方式。
3.  **时序锚定的思维链推理（TAVIT）**：不同于传统文本思维链，TAVIT要求模型在推理时显式引用音视频流中的时间戳。这强制模型进行时序定位推理，增强了长视频理解中推理过程的准确性和可解释性。论文通过构建专门的AV-Think数据集和强化学习来优化这一能力。
4.  **完整的开源工程系统**：论文最大的实践贡献是提供了一个完整的、可复现的工程方案。它开源了从数据（AV-Skills）、训练代码、模型权重（AVF-Instruct, AVF-Think）到推理部署的全链条，为社区研究音视频理解提供了强大的基线和资源。
5.  **针对音频-视觉对齐的架构优化**：继承了OmniVinci的跨模态时间交织和CRTE模块，并通过Dynamic S2视觉编码和AF-Whisper音频编码适配长视频输入。这种设计选择在保持计算效率的同时，强化了模态间的时序关联。

### 📊 实验结果

本文在超过15个音频、视觉和多模态基准上进行了全面评估。实验结果表明，AV-Flamingo在大多数任务上显著优于同等规模的开源模型，并在部分关键任务上超越或比肩更大规模的闭源模型，尤其是在长视频和复杂场景的音视频联合理解任务上表现突出。

下图通过雷达图直观地对比了AV-Flamingo（AVF）与先前最强开源模型（Previous SOTA）在多个关键基准上的表现。

![Figure 1: Comparison of AVF with current SOTA model on various benchmarks.](https://arxiv.org/html/2607.16107v1/x1.png)

图中可见AVF在WorldSense、MMOU、Audio Understanding（MMAR, MMSU, MMAU）及Video-MME等大多数任务上均取得了明显的性能提升，直观印证了其全面领先的结论。


### 关键实验结果对比表
| 任务 | 数据集 | 指标 | AVF-Instruct | 最强基线（同规模） | 最强基线（更大规模/闭源） |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 全模态理解 | WorldSense | ACC ↑ | 50.3 | OmniVinci (48.2) | - |
| 全模态理解 | DailyOmni | ACC ↑ | 72.4 | OmniVinci (66.5) | - |
| 全模态理解 | OmniBench | ACC ↑ | 48.5 | - | Gemini-1.5 Pro (47.6) |
| 全模态理解 | MMOU | ACC ↑ | 56.9 | Minicpm-o 4.5 (46.8) | Gemini-2.5 Pro (64.2) |
| 全模态理解 | AVHBench (A->V) | ACC ↑ | 77.0 | - | Gemini-2.0 Flash (83.3) |
| 全模态理解 | AVHBench (V->A) | ACC ↑ | 81.1 | - | Gemini-2.0 Flash (63.3) |
| 音频理解 | MMAR | ACC ↑ | 60.1 | OmniVinci (58.4) | - |
| 音频理解 | MMSU | ACC ↑ | 61.5 | - | Gemini 1.5 Pro (60.7) |
| 音频理解 | MMAU (test) Avg | ACC ↑ | 73.49 | OmniVinci (71.60) | Audio Flamingo 3 (72.42) |
| 音频理解 | CMM Hallucination | ACC ↑ | 86.7 | - | Gemini 2.5 Pro (82.0) |
| 视频理解 | Video-MME (w/o sub) | ACC ↑ | 70.7 | OmniVinci (67.3) | NVILA (64.2) |
| 视频理解 | Video-MME (w/ sub) | ACC ↑ | 71.2 | OmniVinci (68.6) | - |
| 视频理解 | LongVideoBench | ACC ↑ | 60.1 | OmniVinci (62.0) | NVILA (58.7) |
| 视频理解 | MVHBench | ACC ↑ | 71.7 | OmniVinci (70.6) | - |
| 语音识别 | LibriSpeech (test-clean) | WER ↓ | 1.64 | - | Phi-4-mm (1.67) |
| 语音识别 | SPGISpeech | WER ↓ | 2.8 | Qwen2-A-Inst (3.0) | - |
| 语音识别 | VoxPopuli | WER ↓ | 5.8 | - | Phi-4-mm (5.9) |
| 语音识别 | TEDLIUM | WER ↓ | 3.0 | - | Phi-4-mm (2.9) |
| 语音识别 | GigaSpeech | WER ↓ | 10.2 | - | Phi-4-mm (9.78) |

### 关键结论
1.  **音视频联合理解能力领先**：在衡量音视频联合理解能力的WorldSense、DailyOmni和OmniBench基准上，AVF-Instruct全面超越同等规模的开源基线OmniVinci，并在OmniBench上击败了闭源的Gemini-1.5 Pro。
2.  **长视频复杂推理优势显著**：在聚焦于长视频复杂理解的MMOU任务上，AVF-Instruct远超其他开源模型，并与最强闭源模型Gemini-2.5 Pro展现出竞争力。这表明其三阶段课程和长上下文训练策略在目标场景下极为有效。
3.  **强大的音频理解与低幻觉**：在音频理解基准（MMAR, MMSU, MMAU）上表现优异，特别是MMAU平均分达到最优。在幻觉检测（CMM Hallucination）任务上大幅超越Gemini 2.5 Pro，显示其输出内容更忠实于音频输入。
4.  **视频理解性能全面**：在Video-MME基准上，无论是否有字幕，均取得最佳成绩，超越了专业的视频模型NVILA和基线OmniVinci。在LongVideoBench上略逊于OmniVinci，但依然优于NVILA。
5.  **语音识别精准**：在多个ASR基准上取得领先或极具竞争力的成绩，尤其在LibriSpeech test-clean、SPGISpeech和VoxPopuli上达到最优词错率。
6.  **后训练（AVF-Think）进一步提升**：论文中提及的AVF-Think模型在WorldSense、DailyOmni、OmniBench、MMOU等关键任务上，相比AVF-Instruct均取得了进一步的性能提升，证明了时序锚定思维链（TAVIT）训练的有效性。

### 🔬 细节详述

- **训练数据**：
  - **AV-Skills-Short**：100K小时视频，380万训练实例（100万字幕，280万QA对）。来源包括YouTube-8M、HD-VILA、InternVid、VidChapters等公开数据集及网络抓取。
  - **AV-Skills-Long**：140K小时视频，320万训练实例（120万字幕，200万QA对）。来源包括HarmonySet、LSMDC、MMTrail、MovieClips、MiraData等。
  - **AV-Think**：约2.4万个用于时序思维链训练的样本，平均推理链长635.7词。
  - **单模态数据**：主要沿用OmniVinci使用的音频、视觉单模态数据。
- **训练策略**：
  - 论文提及使用512块NVIDIA H100 GPU进行训练，并采用混合序列并行（Ulysses + Ring-Attention）结合FSDP处理长上下文。
  - **具体超参数**：各阶段的批量大小、学习率、优化器、训练步数等关键配置在正文未详细说明，指向附录。
- **损失函数**：未明确说明，推测为标准的自回归语言建模损失，后训练阶段结合了GRPO强化学习。
- **关键超参数**：
  - LLM骨干：Qwen2.5-7B，36层，16注意力头。
  - 视觉编码器：SigLip。
  - 音频编码器：AF-Whisper（Whisper-based）。
  - 上下文长度：预训练阶段16K tokens，中期训练扩展至32K tokens。
- **推理细节**：未说明解码策略、温度等具体参数。
- **正则化/稳定训练技巧**：未特别说明，但提到了使用课程学习和混合数据采样来稳定训练过程。

### ⚖️ 评分理由

*   创新性 (1.2/2)：针对系统级创新：构建了大规模的AV-Skills数据集、设计了面向长视频的三阶段渐进式课程学习框架、并提出了时序锚定的思维链推理（TAVIT）框架，这些工程与方法上的组合是完整的系统贡献 [A_SUMMARY] [A_METHOD]。

*   技术严谨性 (1.0/1.5)：系统架构描述清晰，流程完整。但论文明确承认缺乏在完全控制变量下的关键消融实验（如单阶段vs.三阶段课程；标准CoT vs. TAVIT），难以精确量化各创新组件的独立贡献，这在验证其核心主张的严谨性上存在不足 [A_LIMITS]。

*   实验充分性 (1.0/1.5)：在15+个音频、视觉和多模态基准上进行了全面评估，并提供了详细的实验结果对比表 [A_SUMMARY] [A_RESULTS]。然而，实验结果存在选择性呈现，部分关键任务结果并非最优且讨论不足，且用于时序推理训练的AV-Think数据集规模有限（约2.4万样本），可能影响对复杂长视频推理能力的充分验证 [A_LIMITS]。

*   清晰度 (0.8/1)：论文结构清晰，核心摘要、方法概述、实验结果和局限性各部分组织得当。提供了详细的架构图、数据示例和关键实验结果对比表，有效传达了系统细节 [A_SUMMARY] [A_METHOD] [S_HEAD]。

*   影响力 (0.5/1.5)：论文提供了一个完整的、可复现的开源音视频理解系统，对社区研究有实用价值。然而，其核心贡献（架构、课程学习）更多面向通用音视频多模态理解，音频/语音在其中并非核心创新模态。根据面向音频/语音读者的规则，且该贡献不属于音频/语音领域核心创新，影响力受限 [A_SUMMARY] [S_HEAD]。

*   开源 (0.0/1.5)：论文未发布核心代码、模型权重或数据资源，也未给出明确的后续开源承诺。

*   可复现性 (0.3/0.5)：论文描述了系统架构、数据构成和三阶段课程设计流程，但关键训练超参数（批量大小、学习率、优化器等）在正文中未提供，仅指向附录，属于大部分充分但有关键配置缺失 [A_LIMITS] [S_MIDDLE]。

*   工程/实践价值 (1.2/1.5)：构建了完整的、面向长视频的端到端音视频大语言模型系统工程。工程实践价值体现在大规模数据集构建、三阶段渐进式训练流程设计以及完整的开源部署方案上，提供了可复现的强基线系统 [A_SUMMARY] [A_METHOD] [A_OPEN]。

### 🚨 局限与问题

1.  **论文明确承认的局限**：
    - 数据偏差：AV-Skills基于公开数据集和网络数据，可能存在源偏差，并与已有训练数据重叠。
    - 长视频推理挑战：对于证据稀疏或时序高度分散的超长视频，模型推理仍存在困难。
    - 评估局限：现有基准无法完全捕捉开放世界的实际部署场景。

2.  **审稿人发现的潜在问题**：
    - **关键消融缺失**：论文的三阶段课程和TAVIT是核心主张，但缺乏在完全控制变量下的对比实验（例如，比较单阶段训练 vs. 三阶段课程；标准CoT训练 vs. TAVIT训练），难以精确量化各创新组件的独立贡献。
    - **与OmniVinci的关系**：模型从OmniVinci初始化，许多架构组件（如CRTE）直接沿用。在展示超越OmniVinci的结果时，需更谨慎地归因改进是来自于新数据、新训练课程，还是仅为更强的基座（如更长的训练）。
    - **实验结果选择性呈现**：虽然覆盖基准多，但部分关键任务（如LongVideoBench）的结果并非最优，论文对此讨论不足。在MMAU上对比Audio Flamingo 3时，平均分略有胜出，但音乐和语音单项分略低，分析可以更深入。
    - **TAVIT数据集规模有限**：用于训练时序推理能力的AV-Think数据集仅包含约2.4万个样本，相对较小，其能否充分支撑复杂长视频推理有待观察。

---

[← 返回 2026-07-20 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-07-20/)
