---
title: "MOSS-Audio Technical Report"
date: 2026-06-02
draft: false
tags: [语音识别, 音频问答, 多模态模型, 自监督学习, 强化学习]
categories: [论文速递]
description: "语音识别 | 9.5/10"
hiddenInHomeList: true
---

# 📄 MOSS-Audio Technical Report

#语音识别 #音频问答 #多模态模型 #自监督学习 #强化学习

**9.5/10** | 创新 2/2 | 严谨 1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 1.5/1.5 | 开源 1.5/1.5 | 复现 0.3/0.5 | 工程 1.4/1.5

🔥 **9.5/10** | 前25% | #语音识别 | #自监督学习 | #音频问答 #多模态模型 | [arxiv](https://arxiv.org/abs/2606.01802)


### 👥 作者与机构

核心贡献者：Chen Yang, Chufan Yu, Hanfu Chen, Jie Zhu, Jingqi Chen, Ke Chen, Wenxuan Wang, Yang Wang, Yaozhou Jiang, Yi Jiang, Zhengyuan Lin, Ziqi Chen, Zhaoye Fei
贡献者：Chenghao Liu, Jun Zhan, Kang Yu, Kexin Huang, Mingshu Chen, Qinyuan Cheng, Ruixiao Li, Shimin Li, Songlin Wang, Yang Gao, Yiyang Zhang
顾问：Xipeng Qiu
附属机构：Shanghai Innovation Institute, MOSI Intelligence, Fudan University

### 💡 毒舌点评

这篇技术报告“用力过猛”，试图在一篇文档里塞进架构、数据、训练、评估的全部细节，结果就像一个塞满行李的箱子——东西都有，但想找把瑞士军刀却得翻半天。核心问题不在于模型没效果，而在于它把“技术报告”写成了“工程日志”与“实验记录”的混合体，深度不足。所谓的“统一音频理解”在实验上被拆解成四个独立的赛道，更像是四个专家模型的汇报总结，而非一个真正统一、交互理解的证明。创新点（DeepStack、时间标记）有启发性，但实现细节的不透明（到底注入哪几层？奖励函数到底长什么样？）严重削弱了其学术价值和可复现性。最讽刺的是，作为一篇技术报告，其对自身数据流水线——这一核心资产——的描述充满“黑盒”（如多个外部模型的具体选择标准、最终数据规模、质量分布），这让“百万小时数据”的宣称显得底气不足。总之，它是一项扎实的工程，但作为一篇旨在启发研究的技术报告，它选择性地“留白”了太多关键信息，更像是为产品发布准备的宣传材料。

### 📌 核心摘要

MOSS-Audio是一个旨在统一理解语音、环境声和音乐的音频-语言模型家族，提供4B和8B参数规模的Instruct（指令跟随）和Thinking（推理）变体。其核心架构采用编码器-适配器-解码器设计，音频编码器从零开始训练，以12.5Hz产生时间表示。两大关键技术为DeepStack跨层特征注入（将编码器多层特征注入解码器）和显式时间标记（插入音频流中以支持时序理解）。训练数据来自一个大规模、分支式的标注流水线，该流水线先对音频进行事件保留分割，再分由语音、音乐、通用音频的专项标注器处理，最后融合成统一标注。模型经过预训练和多阶段后训练（包括SFT、推理冷启动和基于DAPO的强化学习）。评估覆盖通用音频理解、语音描述、ASR和时间戳ASR，MOSS-Audio-8B-Thinking在通用理解任务上达到开源最佳，而MOSS-Audio-8B-Instruct在后三项任务上表现最优。

### 🔗 开源详情

- 代码：论文中未提及代码仓库链接。
- 模型权重：
    - HuggingFace：https://huggingface.co/collections/OpenMOSS-Team/moss-audio
    - ModelScope：https://modelscope.cn/collections/openmoss/MOSS-Audio
- 数据集：论文中提及了使用大规模音频语言数据进行预训练和多阶段后训练，但未提供公开的数据集获取链接或具体名称。文中提到了用于评估的内部构建的语音描述基准数据集。
- Demo：https://openmoss.github.io/MOSS-Audio/
- 复现材料：论文附录中提供了评估提示、时间戳序列化示例和详细的评估结果表格，但未明确提及公开的训练配置、超参数或训练检查点。
- 论文中引用的开源项目：
    - BEATs：https://github.com/microsoft/unilm/tree/master/beats
    - PretrainedSED：https://github.com/RicherMinds/PretrainedSED （注：链接基于论文引用推测，需核实）
    - TorchAudio MMS_FA：https://pytorch.org/audio/stable/tutorials/forced_alignment_tutorial.html （基于论文提及的`TorchAudio MMS_FA forced-alignment model`）
    - DiariZen：论文中未提供链接。
    - Qwen3-Omni：https://github.com/QwenLM/Qwen2.5-Omni
    - FunASR Nano：https://github.com/modelscope/FunASR
    - Qwen3-ASR：论文中未提供链接。
    - fastText：https://github.com/facebookresearch/fastText
    - MMS-LID：https://github.com/facebookresearch/fairseq/tree/main/examples/mms
    - Chordino：http://www.isophonics.net/chordino
    - BeatNet：https://github.com/Jarvis73/BeatNet
    - madmom：https://madmom.readthedocs.io/
    - Essentia：https://essentia.upf.edu/
    - JukeMIR：https://github.com/JoshEngels/JukeMIR
    - SongFormer：论文中未提供链接。
    - XARES-LLM：论文中未提供链接。
    - MECAT-Caption：论文中未提供链接。

### 🏗️ 方法概述和架构

MOSS-Audio采用模块化的编码器-适配器-解码器架构，旨在将专用音频感知能力与大型语言模型的指令遵循和生成能力相结合。
1.  MOSS音频编码器：这是一个从零开始训练的~0.6B参数Transformer模型。它处理128通道对数梅尔频谱图，经过三个步幅为2的Conv2D层，实现8倍时间下采样，最终以12.5Hz的速率产生连续时间表示。为处理长音频，编码器使用滑动窗口自注意力（窗口大小为100帧，即8秒），线性扩展内存开销。
2.  适配器：包括两个GatedMLP投影模块。
    *   主适配器：接收编码器最终层的输出，将其投影到语言模型的隐藏空间。
    *   合并适配器：这是DeepStack机制的关键。它从编码器的多个中间层提取隐藏状态，进行聚合后，通过相同的GatedMLP结构投影到语言模型隐藏空间。
3.  解码器：一个大型语言模型，作为自回归文本生成的主干。它接收来自指令的文本嵌入和来自适配器的音频特征。
4.  DeepStack跨层特征注入：该机制不依赖于编码器单一的最终层表示，而是同时利用主适配器和合并适配器的输出。主适配器提供高层次的语义表示，而合并适配器提供来自编码器中间层的低层次和中层次声学证据（如瞬态事件、韵律线索）。这些特征被注入到解码器的早期层，使解码器能获得多粒度的音频视图。论文指出此设计借鉴了视觉语言模型中的DeepStack和Qwen3-VL思想。
5.  时间感知建模：为了提供明确的绝对时间信息，MOSS-Audio在音频特征流中插入了显式的时间标记。由于编码器输出为12.5Hz，每25个连续音频特征对应2秒，因此在每25个特征后插入一个表示已用秒数的数值标记（如“2”， “4”，“6”）。这些标记与音频表示共同嵌入并由语言模型处理，为时间戳转录、事件定位和时间感知问答提供显式的时间锚点。
6.  训练流程：分为预训练和后训练。
    *   预训练：分为两个阶段。阶段1主要训练适配器和DeepStack模块，音频编码器和语言模型相对稳定。阶段2对全部组件进行端到端优化。预训练任务混合了ASR相关任务（普通ASR、词级时间戳ASR、句级时间戳ASR）、音频描述（使用流水线生成的统一标注）和纯文本语言建模，采用平方根混合采样策略。
    *   后训练：包括三个阶段：监督微调（SFT）以适应指令格式；推理冷启动，引入音频推理和纯文本推理数据，初始化模型的推理行为；以及基于DAPO的强化学习（RL）。RL阶段针对每个提示采样16个响应（温度1.0），使用奖励函数评估答案正确性、响应质量和格式合规性，通过裁剪目标进行策略优化，并动态过滤奖励标准差为零的组。

![图1](https://arxiv.org/html/2606.01802v1/figures/moss-audio-image.png)

![图2](https://arxiv.org/html/2606.01802v1/x1.png)


### 💡 核心创新点

1.  DeepStack跨层特征注入在音频领域的应用：首次将视觉语言模型中的跨层特征注入思想明确引入音频-语言模型，旨在解决单一最终层表示损失低层次声学细节的问题，为解码器提供多粒度声学证据。
2.  显式时间标记集成：将绝对时间信息作为模型上下文的一部分，直接嵌入音频表示流中，使模型能更直接地学习时间对齐，支持时间戳转录和时间感知问答等任务。
3.  事件保留、分支专项、融合统一的大规模数据流水线：设计了一套系统化的数据构造流程，包括基于事件检测的分割、针对语音/音乐/通用音频的不同标注策略，以及最终融合为统一标注的机制。该流水线旨在为异构音频生成高质量、信息密集的监督信号。

### 📊 实验结果

表1：通用音频理解结果（MMAU, MMAU-Pro, MMAR, MMSU，平均分）
| 模型 | 规模 | MMAU | MMAU-Pro | MMAR | MMSU | 平均 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 闭源模型 | | | | | | |
| GPT4o-Audio | – | 65.66 | 52.30 | 59.78 | 58.76 | 59.13 |
| Gemini-3-Pro | – | 80.15 | 68.28 | 81.73 | 81.28 | 77.86 |
| Gemini-3.1-Pro | – | 81.10 | 73.47 | 83.70 | 81.30 | 79.89 |
| 开源模型 | | | | | | |
| Qwen3-Omni-30B-A3B-Instruct | 30B | 75.00 | 61.22 | 66.40 | 69.00 | 67.91 |
| Step-Audio-R1.1 | 33B | 72.18 | 60.80 | 68.75 | 64.18 | 66.48 |
| Step-Audio-R1 | 33B | 78.67 | 59.68 | 69.15 | 75.18 | 70.67 |
| Kimi-Audio | 7B | 72.41 | 56.58 | 60.82 | 54.74 | 61.14 |
| Qwen2.5-Omni | 7B | 65.60 | 52.20 | 56.70 | 61.32 | 58.96 |
| Audio Flamingo 3 | 7B | 61.23 | 51.70 | 57.96 | 60.04 | 57.73 |
| Audio Flamingo Next | 8B | 76.10 | 56.34 | 51.01 | 57.20 | 60.16 |
| MiMo-Audio-7B | 7B | 74.90 | 53.35 | 61.70 | 61.94 | 62.97 |
| MiniCPM-o-4.5 | 9B | 70.97 | 39.65 | 55.75 | 60.96 | 56.83 |
| MOSS-Audio-4B-Instruct | 4B | 75.79 | 58.16 | 62.54 | 59.68 | 64.04 |
| MOSS-Audio-4B-Thinking | 4B | 77.64 | 60.75 | 63.91 | 71.20 | 68.37 |
| MOSS-Audio-8B-Instruct | 8B | 77.03 | 57.48 | 64.42 | 66.36 | 66.32 |
| MOSS-Audio-8B-Thinking | 8B | 77.33 | 64.92 | 66.53 | 75.52 | 71.08 |

表2：语音描述结果（13个维度平均分）
| 模型 | 平均分 |
| :--- | :--- |
| Audio-Flamingo-Next | 2.683 |
| Qwen3-Omni-Instruct | 3.599 |
| Qwen3-Omni-Thinking | 3.567 |
| Gemini-3-Pro | 3.376 |
| Gemini-3.1-Pro | 3.577 |
| MOSS-Audio-4B-Instruct | 3.711 |
| MOSS-Audio-8B-Instruct | 3.725 |

表3：ASR结果（12个维度平均CER）
| 模型 | 平均CER |
| :--- | :--- |
| Paraformer-Large | 15.77 |
| GLM-ASR-Nano | 17.29 |
| Fun-ASR-Nano | 12.04 |
| SenseVoice-Small | 14.50 |
| Kimi-Audio-7B-Instruct | 14.12 |
| Audio-Flamingo-Next | 30.19 |
| Qwen2.5-Omni-3B | 15.26 |
| Qwen2.5-Omni-7B | 15.05 |
| Qwen3-Omni-Instruct | 11.39 |
| MOSS-Audio-4B-Instruct | 11.58 |
| MOSS-Audio-8B-Instruct | 11.30 |

表4：时间戳ASR结果（AAS，毫秒，越低越好）
| 模型 | AISHELL-1 (zh) | LibriSpeech (en) |
| :--- | :--- | :--- |
| Audio-Flamingo-Next | – | 211.15 |
| Qwen3-Omni-Instruct | 833.66 | 646.95 |
| Gemini-3.1-Pro | 708.24 | 871.19 |
| MOSS-Audio-4B-Instruct | 76.96 | 358.13 |
| MOSS-Audio-8B-Instruct | 35.77 | 131.61 |

表5：详细ASR结果（CER%） （仅列出部分关键数据集）
| 数据集 | Paraformer-Large | Fun-ASR-Nano | Qwen3-Omni-Instruct | MOSS-Audio-4B-Instruct | MOSS-Audio-8B-Instruct |
| :--- | :--- | :--- | :--- | :--- | :--- |
| AISHELL-1 | 1.98 | 2.16 | 0.95 | 2.26 | 1.82 |
| THCHS-30 | 4.07 | 3.65 | 2.21 | 3.53 | 2.82 |
| MAGICDATA-READ | 4.67 | 3.46 | 2.47 | 3.72 | 3.20 |
| AliMeeting (far|near) | 25.64|9.27 | 27.21|9.55 | 18.15|20.33 | 20.33|18.15 | 24.36|24.04 |
| SeniorTalk (sentence) | 17.31 | 16.96 | 14.13 | 16.93 | 17.42 |
| MIR-1K (Singing) | 57.70 | 35.85 | 30.81 | 18.47 | 17.24 |
| Openc-pop | 6.98 | 2.84 | 1.21 | 3.10 | 2.39 |

表6：音频编码器表示能力评估（XARES-LLM框架）
| 编码器 | Task 1: 音频理解平均分 | Task 2: 语音与生成平均分 |
| :--- | :--- | :--- |
| Whisper-large-v3 | 0.743 | 0.492 |
| AuT (Qwen3-Omni) | 0.809 | 0.661 |
| MOSS Audio Encoder | 0.760 | 0.673 |

表7：深度ASR能力对比（AuT vs. MOSS Audio Encoder，CER/WER%）
| 指标 | AuT | MOSS Audio Encoder |
| :--- | :--- | :--- |
| 38个数据集总平均CER/WER | 17.61 | 16.31 |
| AISHELL-1 | 3.28 | 2.58 |
| AISHELL6-Whisper/whisper | 12.45 | 7.87 |
| AISHELL-6A/Stammer/severe | 17.31 | 14.99 |
| Opencpop (Singing) | 4.91 | 3.43 |

表8：DeepStack消融实验（MECAT-Caption测试集，DATE分数）
| 方法 | 纯语音 | 混合语音 | 纯音乐 | 混合音乐 | 纯声学环境 | 混合声学环境 | 环境声 | 总体 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Baseline (仅最终层) | 0.4861 | 0.4922 | 0.4705 | 0.2800 | 0.4015 | 0.1936 | 0.1586 | 0.4823 |
| DeepStack | 0.4791 | 0.4838 | 0.4927 | 0.2844 | 0.4255 | 0.1938 | 0.1594 | 0.4831 |

![图3](https://arxiv.org/html/2606.01802v1/x2.png)

![图4](https://arxiv.org/html/2606.01802v1/x3.png)


### 🔬 细节详述

*   DeepStack实现细节：原文提到“extract intermediate hidden states from encoder layers and pass them through a separate merge adapter, and inject the resulting features into selected early layers of the decoder”，但未说明具体从哪些层提取特征（例如，是均匀采样还是特定深度？），也未说明注入到解码器的哪些“早期层”（例如，前几层？），以及注入的具体方式（如加性、门控）。
*   强化学习奖励函数：原文仅提到奖励反映“task correctness, response quality, format compliance, and the usefulness of the reasoning process”，但未具体说明这些奖励是如何量化或生成的（例如，是否有独立的奖励模型？正确性如何判定？）。
*   训练数据规模：论文在摘要和贡献中提及数据规模为“millions of hours”，但在方法章节和附录中均未给出具体的预训练数据（音频-文本对）数量、来源分布或最终清洗后的样本数。
*   数据流水线外部依赖：流水线重度依赖外部模型（如Qwen3-Omni, FunASR Nano, Qwen3-ASR），但未讨论这些模型的偏差如何传播到最终标注数据中，也未说明如何保证流水线的鲁棒性和结果的可复现性。
*   语音描述评估集：论文构建了2000样本的评估集，并描述了平衡采样过程，但未提供参考标注的一致性指标（如人类标注者间一致性分数），也未说明标注的具体质量控制流程。
*   时间戳ASR参考标签生成：论文指出为AISHELL-1和LibriSpeech生成了参考时间戳，但未说明使用的具体CTC对齐模型及其精度，这会影响评估的基准可靠性。

### ⚖️ 评分理由

*   创新性 (2.0/2.0)：将DeepStack跨层注入和显式时间标记结合应用于音频-语言模型，设计了一套复杂但逻辑自洽的数据流水线，在当前音频-语言模型架构和数据构建方面有明确贡献。
*   技术严谨性 (1.0/1.5)：整体方法设计合理，消融实验验证了部分组件。但关键实现细节（如DeepStack层选择、RL奖励函数）缺失，数据流水线对外部模型的依赖性未充分讨论，削弱了技术深度和透明度。
*   实验充分性 (1.0/1.5)：评估任务全面，覆盖多个领域和基准，基线比较广泛。但关键实验缺乏统计显著性分析（如多次运行的方差），自制评估集的质量控制细节缺失，部分消融实验（如表8）的设计（使用轻量级LLM和特定数据集）与主要模型训练设置不完全一致，外部效度存疑。
*   清晰度 (0.8/1.0)：论文结构清晰，图表质量高。但存在部分内容重复，且如前所述，关键技术的实现细节和数据集细节有大量留白，影响全文的透明���和可理解性。
*   影响力 (1.5/1.5)：专注于构建统一的音频理解基础模型，对语音助手等下游应用有直接推动作用，在领域内具有明确影响力。
*   开源 (1.5/1.5)：提供了模型权重的HuggingFace和ModelScope链接，以及在线Demo，开源了模型本身，极大方便了社区的使用和评估。
*   可复现性 (0.3/0.5)：开源了模型权重和评估提示，但关键的训练数据（来源、规模、处理方式）和训练代码（特别是数据流水线和RL部分）未开源，导致完整复现极其困难。
*   工程/实践价值 (1.4/1.5)：模型性能强劲，参数效率高（4B模型表现优异），提供了多种变体（Instruct/Thinking），对工业界部署有较高参考价值。数据流水线的设计虽复杂但系统性强，具有工程借鉴意义。

### 🚨 局限与问题

1.  架构透明度不足：DeepStack作为核心创新之一，其具体实现（特征提取层、注入层、注入方式）未明确说明，阻碍了该方法的广泛采纳和改进。
2.  训练数据黑箱：作为技术报告的核心贡献之一，“大规模音频-语言数据”的具体构成、规模、清洗过程几乎未公开，使得“百万小时”的宣称难以被独立验证和评估，也使得模型的能力边界不清晰。
3.  评估集独立性存疑：语音描述基准（2000样本）完全由作者构建，未提供独立的质量验证或与其他公开基准的对比，评估结果的权威性可能受损。时间戳ASR的参考标签由CTC生成，其精度本身存在误差。
4.  消融实验设计局限：对DeepStack的消融（表8）使用了一个完全不同的轻量级设置（Qwen3-0.6B），且评估数据集（MECAT-Caption）并非论文主要评估集。该消融结果显示DeepStack在语音任务上略有下降，在非语音任务上提升，这与DeepStack旨在保留多粒度信息的初衷部分吻合，但论文未深入讨论这种权衡是否可接受，以及为何在主要模型训练中仍坚持使用。
5.  强化学习细节模糊：RL阶段的奖励函数设计是决定优化方向的关键，但论文未提供任何具体细节（如是否使用了奖励模型、规则判定等），使得该部分的可复现性和科学价值大打折扣。
6.  结论可能过强：论文声称“单一模型可以兼顾广泛的音频理解与精确的语音任务”，但实验将各项任务分开评估，缺乏展示模型在复杂、混合任务（如“请分析这段音频中说话人的情绪，并转录其内容，最后总结背景音乐”）上端到端能力的实验证据。

### 📷 论文图片

![图5](https://arxiv.org/html/2606.01802v1/x4.png)


---

[← 返回 2026-06-02 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-06-02/)
