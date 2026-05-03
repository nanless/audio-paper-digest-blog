---
title: "Latent Speech-Text Transformer"
date: 2026-05-04
draft: false
tags: [语音大模型, 预训练, 自回归模型, 语音合成, 语音识别]
categories: [iclr-2026]
description: "语音大模型 | 8.0/10"
hiddenInHomeList: true
---

# 📄 Latent Speech-Text Transformer

#语音大模型 #预训练 #自回归模型 #语音合成 #语音识别

🔥 **8.0/10** | 前25% | #语音大模型 | #预训练 #自回归模型 | #预训练 #自回归模型

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高

### 👥 作者与机构

- 第一作者：Yen-Ju Lu（Johns Hopkins University, Center for Language and Speech Processing）
- 通讯作者：Srinivasan Iyer（Meta Superintelligence Labs），Duc Le（Meta Superintelligence Labs）
- 作者列表：Yen-Ju Lu（Johns Hopkins University），Yashesh Gaur（Meta Superintelligence Labs），Wei Zhou（Meta Superintelligence Labs），Benjamin Muller（Meta Superintelligence Labs），Jesus Villalba（Johns Hopkins University），Najim Dehak（Johns Hopkins University），Luke Zettlemoyer（Meta Superintelligence Labs），Gargi Ghosh（Meta Superintelligence Labs），Mike Lewis（Meta Superintelligence Labs），Srinivasan Iyer（Meta Superintelligence Labs），Duc Le（Meta Superintelligence Labs）

### 💡 毒舌点评

这篇论文的架构设计逻辑清晰、实验验证相当扎实，针对语音大模型“序列长度不平衡”这一真实痛点，提出的“潜语音块”方案有效且优雅，在计算效率与模型性能间取得了不错的平衡。然而，其最佳性能（如对齐补丁、课程学习）严重依赖于外部强制对齐模型的质量与可用性，这在预训练和推理阶段都引入了额外的复杂性和潜在的误差传播，限制了方案的通用性和在资源受限场景下的实用性。

### 🔗 开源详情

- 代码：论文提供了代码仓库链接 `https://github.com/facebookresearch/lst`。
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：预训练所用语音数据（LibriLight, People’s Speech, MLS, Spotify Podcast）均为公开数据集，论文在附录中提供了许可证信息。评估所用的语音版HellaSwag、StoryCloze、TopicStoryCloze由论文使用Kokoro TTS重新合成，但论文未提及是否公开这些增强后的评估集。
- Demo：论文中未提及提供在线演示。
- 复现材料：论文在正文和附录中提供了非常详细的模型架构配置（表7）、优化器参数、训练硬件与时间、数据处理流程（附录A.1.1）、不同实验的设置细节等，复现材料充分。
- 论文中引用的开源项目：主要依赖的开源项目包括Llama 2 tokenizer、HuBERT模型、Wav2Vec2+CTC模型、HiFi-GAN声码器、Kokoro TTS模型等。

### 📌 核心摘要

1.  解决的问题：自回归语音-文本大模型中，语音token序列远长于文本token，导致计算资源分配不均，严重阻碍了高效的跨模态对齐和模型性能的规模化提升。
2.  方法核心：提出潜语音-文本转换器（LST），其核心是一个“潜语音块”（Latent Speech Patch）机制。该机制通过一个轻量级的块编码器，将冗长的语音token序列动态或静态地聚合为更紧凑的“块”（Patch），然后将这些块与文本token一起输入全局Transformer进行自回归建模。
3.  与已有方法相比新在哪里：不同于直接处理原始语音token或简单使用BPE压缩语音，LST引入了受BLT启发的层级化编解码结构。它提出了多种补丁策略（静态、对齐、课程学习），其中对齐补丁能根据文本边界（词/子词）切分语音，使语音和文本在语义单元上对齐；课程学习则在训练中逐渐从对齐补丁过渡到静态补丁，以摆脱推理时对对齐工具的依赖。
4.  主要实验结果：在故事续写基准（HellaSwag, StoryCloze, TopicStoryCloze）上，LST（课程学习策略）在计算控制设置下，语音HellaSwag准确率比基线提升6.5%（绝对），同时文本性能也提升5.2%。在数据控制设置下，LST以约20%的计算节省实现了相当的性能提升。模型缩放实验（420M到1.8B参数）表明，LST的优势随模型规模增长而扩大。在下游任务中，LST稳定了ASR微调，并将TTS推理的生成步长减少了约4倍，同时保持重建质量。关键结果表格如下：
    | 模型 | HellaSwag (S→S) | HellaSwag (T→T) | StoryCloze (S→S) | StoryCloze (T→T) | TopicStoryCloze (S→S) | TopicStoryCloze (T→T) |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | 表3：计算控制设置 |
    | Base SpeechLLM | 39.0 | 47.0 | 59.1 | 67.8 | 87.5 | 95.7 |
    | LST (Curriculum) | 45.5 | 52.2 | 61.2 | 71.6 | 87.9 | 96.1 |
    | 表4：数据控制设置 |
    | Base SpeechLLM | 40.2 | 49.6 | 60.2 | 69.1 | 87.5 | 95.2 |
    | LST (Curriculum) | 45.5 | 52.2 | 61.2 | 71.6 | 87.9 | 96.1 |
5.  实际意义：LST通过压缩语音序列长度，显著提升了语音-文本大模型在预训练和推理阶段的计算效率，使得在相同计算预算下能处理更多数据或构建更大模型，加速了统一语音-文本基础模型的发展，对语音理解与生成（如ASR、TTS）的实用化部署有直接帮助。
6.  主要局限性：研究局限于半双工（交替发言）建模，未涉及实时全双工对话；分析集中在预训练阶段，未探索指令微调；最佳性能的补丁策略（对齐、课程）仍依赖预训练时的强制对齐信息，尽管课程学习旨在降低推理时的依赖，但完全无对齐的方法仍是挑战。

### 🏗️ 模型架构

LST是一个包含编码器-全局转换器-解码器的层级化架构。

Latent Speech-Text Transformer (LST)的整体架构是：模型将BPE文本token和HuBERT语音token编码到一个共享的潜空间。一个块编码器将局部语音段压缩为块表示（Latent Representation），这些块表示与文本token一起被联合处理（由全局Transformer完成）。一个块解码器从潜表示中预测未来的语音token，从而实现跨模态的对齐和迁移。

完整输入输出流程：
1.  输入：原始语音波形和文本。
2.  分词：语音被HuBERT模型（501-entry codebook, 25Hz）离散化为语音token序列`{s0,..., sn}`；文本被Llama 2 tokenizer（32K词表）分词为文本token序列`{t0,..., tm}`。
3.  补丁化（核心创新）：语音token序列经过“块编码器”，根据特定策略（静态/对齐/课程）被聚合为一系列更短的“潜语音块”表示`Z = [z0,..., zT']`。
4.  全局建模：文本token表示与潜语音块表示被拼接成一个交错序列，输入一个大型的全局Transformer（解码器架构，使用因果自注意力）进行自回归语言建模，预测下一个单元（可能是文本token或语音块）。
5.  语音token恢复：全局Transformer输出的潜语音块表示被送入“块解码器”，该解码器是一个轻量级Transformer，通过交叉注意力机制逐步还原出语音token序列。
6.  输出：模型可以输出文本token序列（用于T→T, S→T任务），也可以输出语音token序列（用于T→S, S→S任务），再经声码器（HiFi-GAN）恢复为波形。

主要组件：
- 块编码器：采用滑动窗口自注意力和交叉注意力层。它将语音token嵌入序列`X`根据补丁策略`{Pi}`分组，并通过交叉注意力（以分组内token嵌入的池化作为查询，token特征作为键值）将每组聚合为一个单独的块嵌入`zi`。
- 全局Transformer：标准的解码器Transformer（25层，隐藏维度2048，16头），使用因果注意力掩码和RoPE位置编码。这是计算的主要消耗部分，LST通过在此层级处理更短的块序列来节省计算。
- 块解码器：一个9层、1024隐藏维度的轻量级Transformer。其关键设计是每一层包含：(i) 对过去512个token的因果自注意力；(ii) 交叉注意力，其中当前token作为查询，之前生成的语音块和所有文本token作为键值。这使解码器能同时利用高层的块信息和细粒度的token上下文进行自回归预测。

关键设计选择及动机：
- 对语音补丁、文本不补丁：动机是解决信息密度失衡问题。文本token本身已很紧凑，而语音token冗长。仅对语音进行压缩能直接对齐二者的序列长度。
- 避免对语音使用BPE：论文实验（表6）和引述（Cuervo & Marxer, 2024）表明，对语音token进行子词分词（BPE）效果不佳。LST的补丁机制是一种更灵活、基于上下文的聚合。
- 块解码器中的交叉注意力：使解码器在生成每个语音token时，都能“看到”全局的块级语义信息（通过交叉注意力）和局部的token级声学细节（通过滑动窗口自注意力），实现了层级信息的有效融合。

### 💡 核心创新点

1.  提出“潜语音块”（Latent Speech Patch）作为统一的压缩与对齐机制：
    - 之前局限：语音token序列过长导致计算效率低下，且与文本token在粒度上严重不匹配，阻碍了有效的跨模态学习。简单的BPE压缩语音token效果不佳。
    - 如何起作用：借鉴BLT思想，设计了一个端到端可训练的块编码器，将连续的语音token动态或静态地聚合成更高层次的语义块。这些块可以对应于文本中的词/子词或静音段，从而在表示层面实现了语音和文本的对齐。
    - 收益：在计算控制设置下，将HellaSwag语音准确率从39.0%提升至45.5%；在数据控制设置下，以约20%的计算节省达到了相当或更优的性能。使模型能以更低的计算成本处理更长的语音上下文。

2.  引入多种补丁策略，特别是“课程补丁”（Curriculum Patching）：
    - 之前局限：对齐补丁在推理时依赖外部强制对齐工具，引入了误差和复杂性；静态补丁则无法获得精细的语义对齐。
    - 如何起作用：提出了静态、对齐和混合三种基础策略。核心创新是课程补丁，它在训练早期使用对齐补丁（学习语义对齐），中期混合使用，后期完全过渡到静态补丁（适应推理时无对齐工具的场景）。
    - 收益：课程补丁结合了对齐补丁的语义优势和静态补丁的推理鲁棒性，在实验中取得了最佳且最稳定的性能（表3，表6）。它使得对齐带来的收益能在推理时保留，而无需依赖辅助模型。

3.  设计高效的块级自回归架构与训练：
    - 之前局限：标准自回归语音模型在处理长序列时效率极低，且难以同时优化语音生成和文本理解。
    - 如何起作用：架构上，采用“编码器-全局Transformer-解码器”的层级设计，将大部分计算集中在处理紧凑块表示的全局Transformer上。训练上，使用交错的语音-文本数据，并确保语音token约占总训练数据的33%，以平衡两种模态的学习。
    - 收益：显著降低了训练和推理的FLOPs（约20%），稳定了ASR微调过程（1k步WER从>140%降至6.8%），并将TTS推理的生成步长减少了约4倍（表5），同时保持了生成质量。

### 🔬 细节详述

- 训练数据：
    - 文本：来自Llama 2预训练集合的子集，包含网络和学术语料，总计1.8T tokens。使用Llama 2 SentencePiece BPE分词器（32K词表）。
    - 语音：包括LibriLight (60k小时)、People’s Speech (30k小时)、Multilingual LibriSpeech (50k小时)、Spotify (60k小时)，共计约200k小时。所有语音均使用HuBERT模型（501-entry codebook, 25Hz）离散化为token。同时，使用Wav2Vec2+CTC模型为所有语音-文本对生成帧级对齐信息，用于构建交错数据和对齐补丁。
    - 预处理与数据增强：动态生成交错序列。步骤为：(1) 获取对齐；(2) 随机选择一��文本span替换为文本token，其后约一半长度的span保持为语音token；(3) 插入模态标记`<t>`和`<s>`；(4) 每个epoch动态生成不同的交错模式以增加鲁棒性。
- 损失函数：标准的下一个token预测（NTP）交叉熵损失，公式为 `L(D; θ) = Σ_{s∈D} Σ_i log p_θ(s_i | s_{<i})`。模型在全局Transformer层和块解码器层都应用此损失。
- 训练策略：
    - 优化器：AdamW（β1=0.9，β2=0.95，权重衰减0.1）。
    - 学习率：初始学习率4e-4，使用余弦退火调度，包含2000步warmup，最小比率0.01。
    - Batch size：1B模型在32张H100 GPU上训练，每GPU batch size为4个序列（序列长度4096），总batch size为0.5M units。
    - 训练时长：1B模型训练200k步，约1万亿units，耗时约17小时。
    - 精度与并行：使用bfloat16混合精度训练，梯度裁剪1.0，无dropout。采用FSDP进行内存优化。
- 关键超参数：
    - 模型大小：实验涵盖420M至7B参数规模。
    - 块补丁大小：静态补丁固定为4个HuBERT token。
    - 全局Transformer：25层，隐藏维度2048，注意力头数16，使用RoPE（θ=5e5）。
    - 块解码器：9层，隐藏维度1024，注意力头数16。
    - 块编码器：1层，隐藏维度1024，注意力头数16，滑动窗口大小为512。
    - 语音/文本比例：训练数据中，语音token约占总units的1/3 (33%)，文本token占2/3 (67%)。
- 训练硬件：NVIDIA H100 GPU（训练1B模型使用32张）。
- 推理细节：在ASR和TTS下游任务评估中，ASR使用波束搜索解码（未明确beam size），TTS使用自回归逐token生成。LST通过预测块来减少自回归步长。

### 📊 实验结果

主要对比实验：
论文在故事续写基准上与两个强基线（Base SpeechLLM， BPE SpeechLLM）进行了系统对比。
表3：计算控制设置（相同训练迭代数）
| 模型 | 输入Token数 | HellaSwag (S→S) | HellaSwag (T→T) | StoryCloze (S→S) | StoryCloze (T→T) | TopicStoryCloze (S→S) | TopicStoryCloze (T→T) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Base SpeechLLM | 87B Speech + 175B Text | 39.0 | 47.0 | 59.1 | 67.8 | 87.5 | 95.7 |
| BPE SpeechLLM | 95B Speech + 190B Text | 38.0 | 47.5 | 58.0 | 66.4 | 87.0 | 93.5 |
| LST (Static) | 108B Speech + 217B Text | 44.3 | 51.1 | 60.5 | 70.3 | 87.7 | 96.2 |
| LST (Aligned) | 108B Speech + 217B Text | 42.7 | 51.7 | 60.4 | 70.4 | 86.6 | 95.7 |
| LST (Mixed) | 108B Speech + 217B Text | 44.3 | 51.9 | 61.4 | 70.8 | 88.0 | 95.9 |
| LST (Curriculum) | 108B Speech + 217B Text | 45.5 | 52.2 | 61.2 | 71.6 | 87.9 | 96.1 |

表4：数据控制设置（相同语音/文本token预算）
| 模型 | 计算节省 | HellaSwag (S→S) | HellaSwag (T→T) | StoryCloze (S→S) | StoryCloze (T→T) | TopicStoryCloze (S→S) | TopicStoryCloze (T→T) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Base SpeechLLM | - | 40.2 | 49.6 | 60.2 | 69.1 | 87.5 | 95.2 |
| BPE SpeechLLM | 8.2% | 39.4 | 48.4 | 58.3 | 66.3 | 86.5 | 93.9 |
| LST (Static) | 19.3% | 44.3 | 51.1 | 60.5 | 70.3 | 87.7 | 96.2 |
| LST (Curriculum) | 19.7% | 45.5 | 52.2 | 61.2 | 71.6 | 87.9 | 96.1 |

下游任务（ASR与TTS）
表5：LibriSpeech ASR (WER) 和 TTS (CER) 性能（1B模型）
| 任务 | 模型 | 微调迭代数 | clean WER (%) ↓ | other WER (%) ↓ | 上下文/生成单元数 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| ASR | Baseline | 1k | 140 | 202 | 1.0× |
| | Baseline | 2k | 44.7 | 73.2 | |
| | Baseline | 4k | 20.7 | 42.4 | |
| | LST | 1k | 6.8 | 10.4 | 0.25× |
| | LST | 2k | 6.0 | 13.3 | |
| TTS | Baseline | 20k | 14.1 | 15.1 | 1.0× |
| | LST | 20k | 14.1 | 16.2 | 0.25× |

模型缩放行为：

![模型缩放行为对比图](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/krGpQzo8Mz-2.png)

图4展示了LST与基线模型在HellaSwag上的缩放行为。(a) 在420M到1.8B参数的计算最优缩放中，LST优于基线，且优势随规模增长。(b) 在7B模型的次优token预算（70B tokens）下，LST始终保持更高的准确率。

- 计算最优缩放（420M-1.8B）：LST的优势随模型规模增长而扩大。在1.8B参数时，LST(Speech)达到39.0%，基线为35.3%；LST(Text)为46.3%，基线为45.7%。
- 次优token缩放（7B）：在固定70B token预算下（低于最优≈140B），LST在整个训练过程中始终优于基线，并保持上升趋势（图4b）。

消融实验：
表6：不同补丁策略消融对比
| 补丁策略 | 平均块大小(token) | HellaSwag (S→S) | HellaSwag (T→T) | StoryCloze (S→S) | StoryCloze (T→T) | TopicStoryCloze (S→S) | TopicStoryCloze (T→T) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Static | 4 | 40.5 | 48.8 | 58.2 | 69.4 | 86.2 | 95.1 |
| Curriculum (sil sep.) | 5.8*→4 | 41.3 | 49.2 | 58.6 | 67.8 | 86.6 | 95.4 |
| Curriculum (sil merged) | 9.4 →4 | 40.3 | 48.9 | 58.7 | 68.9 | 86.8 | 95.4 |
| Align (sil sep.) | 5.8* | 39.9 | 49.3 | 60.3 | 69.9 | 85.7 | 95.3 |
| Static | 6 | 39.4 | 49.2 | 58.7 | 69.6 | 84.9 | 94.9 |
| Static | 9 | 37.2 | 49.4 | 57.5 | 69.7 | 84.7 | 95.9 |
| Align, (sil merged) | 9.4 | 38.5 | 49.0 | 58.8 | 69.7 | 86.9 | 96.0 |

补丁嵌入可视化：

![不同语言类别词汇的补丁嵌入可视化](/audio-paper-digest-blog/images/iclr-2026/2026-05-04/krGpQzo8Mz-8.png)

图5展示了对齐补丁模型在HellaSwag语音数据上学到的词级语音块嵌入的t-SNE可视化。同一词汇的嵌入形成紧密且分离良好的聚类（如(a)人称代词、(b)锋利工具术语、(c)水上相关术语）。

### ⚖️ 评分理由

- 学术质量：6.0/7 - 论文针对语音-文本大模型的核心效率瓶颈，提出了一个完整、优雅且技术正确的解决方案（LST）。创新性在于将潜块机制系统地应用于跨模态建模，并设计了有效的课程学习策略。实验非常充分，覆盖了多种设置（计算/数据控制）、多尺度（420M-7B）、多种消融和下游任务，证据链条完整，结果具有说服力。
- 选题价值：1.5/2 - 聚焦语音大模型的效率与对齐问题，这是当前多模态基础模型发展的前沿和关键挑战。研究成果直接有助于降低训练和推理成本，提升模型性能，对构建更实用、可扩展的语音-文本统一模型有重要价值。
- 开源与复现加成：0.5/1 - 论文提供了明确的代码仓库链接（https://github.com/facebookresearch/lst），并附录中详细说明了模型架构、超参数、训练设置、数据处理等复现所需的关键信息，大大增强了可复现性。但论文未提及是否公开预训练模型权重，因此加成不能给满。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
