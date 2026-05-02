---
title: "Latent Speech-Text Transformer"
date: 2026-05-03
draft: false
tags: [语音大模型, 多模态模型, 自回归模型, 预训练, 计算效率]
categories: [iclr-2026]
description: "语音大模型 | 7.5/10"
hiddenInHomeList: true
---

# 📄 Latent Speech-Text Transformer

#语音大模型 #多模态模型 #自回归模型 #预训练 #计算效率

✅ **7.5/10** | 前25% | #语音大模型 | #自回归模型 | #多模态模型 #预训练

学术质量 6.5/7 | 选题价值 1.0/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Yen-Ju Lu（JHU Center for Language and Speech Processing）
- 通讯作者：Srinivasan Iyer（Meta Superintelligence Labs）， Duc Le（Meta Superintelligence Labs）
- 作者列表：
    - Yen-Ju Lu（JHU Center for Language and Speech Processing）
    - Yashesh Gaur（Meta Superintelligence Labs）
    - Wei Zhou（Meta Superintelligence Labs）
    - Benjamin Muller（Meta Superintelligence Labs）
    - Jesus Villalba（JHU Center for Language and Speech Processing）
    - Najim Dehak（JHU Center for Language and Speech Processing）
    - Luke Zettlemoyer（Meta Superintelligence Labs）
    - Gargi Ghosh（Meta Superintelligence Labs）
    - Mike Lewis（Meta Superintelligence Labs）
    - Srinivasan Iyer（Meta Superintelligence Labs）
    - Duc Le（Meta Superintelligence Labs）

### 💡 毒舌点评

亮点：精准切中了语音-文本大模型效率低下的核心痛点，提出的“潜在语音补丁”机制设计巧妙，并通过“课程补丁”策略平衡了性能与工程复杂度，实验数据扎实且结论一致。  
短板：论文主要依赖现有HuBERT和Wav2Vec2模型，核心创新集中于“如何压缩序列”，而对压缩后潜空间本身的表示学习与结构探索较少；此外，对齐策略对辅助模型的依赖可能限制其在端到端系统中的应用便利性。

### 🔗 开源详情

- 代码：提供了GitHub仓库链接：https://github.com/facebookresearch/lst。
- 模型权重：论文中未提及是否公开预训练或微调后的模型权重。
- 数据集：训练使用的数据集（LibriLight, People’s Speech, MLS, Spotify）均为公开或半公开数据集，论文中提及了来源。评估使用了自建的Speech HellaSwag以及公开的Speech StoryCloze/TopicStoryCloze，并提供了改进的TTS版本用于评估。
- Demo：未提及提供在线演示。
- 复现材料：提供了非常详细的复现材料，包括：完整的模型架构配置（表7）、优化器与学习率设置、训练硬件与批次大小、数据混合比例、补丁策略的伪代码与调度描述、关键的消融实验设置。
- 论文中引用的开源项目/模型：Llama 2（分词器）， HuBERT（语音离散化）， Wav2Vec2+CTC（强制对齐）， Kokoro TTS（评估用）， Whisper（TTS评估转录）， HiFi-GAN（声码器，作为背景提及）。
- 总结：论文代码已开源，复现细节极为详尽，是高质量的可复现研究。主要缺失是预训练模型权重的发布。

### 📌 核心摘要

1. 要解决什么问题：现有的自回归语音-文本大模型由于语音token序列过长，导致计算效率远低于纯文本模型，这不仅浪费算力，也阻碍了有效的跨模态对齐和性能扩展。
2. 方法核心是什么：提出“潜在语音-文本Transformer”（LST），其核心是通过一个轻量级编码器将冗长的语音token序列动态聚合为更高级的“语音补丁”（Speech Patches）。一个全局Transformer在这些压缩后的补丁和文本token上进行自回归建模，然后通过一个解码器将补丁还原为语音token。
3. 与已有方法相比新在哪里：不同于直接使用BPE等方法压缩语音token（效果不佳），LST借鉴了文本领域的“字节潜在Transformer”（BLT），但专门针对语音特性设计了静态、基于文本对齐的以及课程学习的补丁策略。其中，“课程补丁”（Curriculum Patching）通过训练过程中逐步从依赖对齐的补丁策略过渡到简单的静态补丁策略，既利用了语义对齐信息，又无需在推理时依赖外部对齐模型。
4. 主要实验结果如何：在故事续写基准上，LST（课程补丁）在计算量控制下比基线绝对提升最高达6.5%（Speech HellaSwag），并同时提升了文本性能。在固定数据预算下，LST以约20%的计算节省实现了性能提升。在420M到1.8B的规模扩展中，LST的优势随模型增大而增加。在下游任务中，LST使ASR适配更稳定，并将TTS推理的自回归步长减少了约4倍，且未损失重建质量。

    | 模型 | HellaSwag (S→S) | HellaSwag (T→T) | StoryCloze (S→S) | StoryCloze (T→T) | TopicStoryCloze (S→S) | TopicStoryCloze (T→T) |
    | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
    | 计算量控制实验 (表3) | | | | | | |
    | Base SpeechLLM | 39.0 | 47.0 | 59.1 | 67.8 | 87.5 | 95.7 |
    | LST (Curriculum) | 45.5 | 52.2 | 61.2 | 71.6 | 87.9 | 96.1 |
    | 数据量控制实验 (表4) | | | | | | |
    | Base SpeechLLM | 40.2 | 49.6 | 60.2 | 69.1 | 87.5 | 95.2 |
    | LST (Curriculum) | 45.5 | 52.2 | 61.2 | 71.6 | 87.9 | 96.1 |
    | 下游迁移 (表5， 1B模型) | | | | | | |
    | ASR (LibriSpeech WER%) | | | | | | |
    | Baseline (1k iter) | 140 / 202 | | | | | |
    | LST (1k iter) | 6.8 / 10.4 | | | | | |
    | TTS (LibriSpeech CER%) | | | | | | |
    | Baseline (20k iter) | 14.1 / 15.1 | | | | | |
    | LST (20k iter) | 14.1 / 16.2 | | | | | |

5. 实际意义是什么：LST为构建更高效、可扩展的语音-文本基础模型提供了实用方案。它能降低语音大模型的训练和推理成本，同时提升性能，有望加速语音理解和生成技术的实际应用。
6. 主要局限性是什么：研究目前局限于半双工（轮流交互）建模，未涉及实时对话；对齐补丁策略依赖于外部强制对齐工具，增加了系统依赖；尚未探索指令微调、全双工或扩展到图像/视频等更多模态。

### 🏗️ 模型架构

Latent Speech-Text Transformer (LST) 的整体架构如图2所示，它是一个层次化的序列到序列模型，核心思想是在全局Transformer中对压缩后的“语音补丁”进行建模。

![图2：LST架构概览](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/krGpQzo8Mz-1.png)

整体流程：
1.  输入：模型的输入是交织的文本token序列（使用Llama 2 BPE分词器）和语音token序列（由HuBERT模型以25Hz速率量化得到，码本大小501）。
2.  补丁编码器 (Patch Encoder)：这是一个轻量级的Transformer模块。它只作用于语音token序列。根据预设的补丁策略（静态、对齐或课程），它将连续的语音token序列（图中`[s1, s2, s3, s4, s5...]`）分割成多个组（`P_i`）。对于每个组内的语音token嵌入，编码器通过滑动窗口自注意力和交叉注意力机制，将其聚合成一个单一的、信息密集的“语音补丁”嵌入`z_i`（图中“Latent Representation”）。
3.  全局Transformer (Global Transformer)：这是一个大型的、使用因果自注意力（Block-causal）的Transformer。它处理由“文本token”和聚合后的“语音补丁”交错组成的序列（图中`[“_text”, “_speech”, “_to”, “Silence”, “spoken”, “word 1”, ...]`）。这个模块承担了绝大部分的计算，其目标是自回归地预测下一个单元（可能是文本token，也可能是语音补丁）。
4.  补丁解码器 (Patch Decoder)：当全局Transformer预测出一个语音补丁时，这个轻量级的Transformer解码器负责将其“还原”为一系列具体的语音token。解码器在每一层都包含因果自注意力（关注过去512个token）和交叉注意力（交叉注意力机制中，查询来自当前token的隐藏状态，键和值来自全局Transformer输出的语音补丁以及文本token）。这确保了生成语音token时，既依赖于高层的补丁表示，也依赖于文本上下文。

关键设计选择与动机：
*   层次化设计：将序列建模（全局Transformer）与局部表示转换（编码器/解码器）分离。全局Transformer在压缩的补丁空间工作，极大减少了计算复杂度（FLOPs与序列长度平方成正比）。
*   仅对语音进行补丁：文本token本身已经比较紧凑，无需压缩。补丁操作仅针对冗长的语音序列，直接解决了效率瓶颈。
*   轻量级编解码器：确保大部分模型容量用于全局序列理解，而非局部转换。
*   补丁策略：这是灵活性的关键，允许在训练中使用对齐信息（alignment patching）来获得更好的语义对齐，而在推理时切换到简单的静态补丁（static patching），避免对外部对齐模型的依赖（通过课程补丁实现）。

### 💡 核心创新点

1.  潜在语音补丁机制：针对语音-文本模态不平衡问题，创造性地将文本领域的动态补丁方法（如BLT）迁移到语音-文本建模中。通过将语音token聚合为更高层次的补丁，显著缩短了自回归建模的有效序列长度，同时保留了足够的语音信息。
2.  基于语义对齐的补丁策略与课程学习：提出了“对齐补丁”策略，利用强制对齐时间戳将语音片段与对应的文本单元（词/BPE）对齐分组，增强了补丁的语义一致性。更重要的是，设计了“课程补丁”策略，在训练过程中逐步从需要对齐信息的对齐补丁过渡到不需要的静态补丁，巧妙地在训练中受益于对齐指导，又在推理时保持系统简洁高效。
3.  统一且高效的跨模态处理框架：LST架构在一个统一的框架内，使用同一个模型处理纯语音（S→S）、纯文本（T→T）、语音到文本（S→T）和文本到语音（T→S）任务。通过补丁化，不仅提升了计算效率，还因为补丁可以捕获如静音等重复模式，使得模型更容易学习跨模态的共享表示。

### 🔬 细节详述

*   训练数据：
    *   文本数据：来自Llama 2预训练数据集的一个子集，总计1.8T个token。使用Llama 2的SentencePiece BPE分词器（32K词汇表）。
    *   语音数据：包括LibriLight (44k小时)， People’s Speech (15k小时)， Multilingual LibriSpeech (51k小时)， Spotify (55k小时)，共计约16.5万小时。语音使用HuBERT模型（25Hz， 501条目码本）离散化为token。所有语音数据集均使用Wav2Vec2 + CTC框架进行强制对齐，以获得词级时间戳（用于对齐补丁和交错数据构造）。
    *   数据混合与构造：训练数据中，语音token约占总训练token的1/3（33%），文本token占2/3（67%）。交错序列（用于T→S, S→T等任务）在训练时动态生成：从对齐的并行语音-文本数据中，随机选择一段文本替换对应的语音片段，并插入模态标记`<t>`和`<s>`。
*   损失函数：标准的自回归下一token预测（NTP）损失。无论是全局Transformer预测补丁，还是补丁解码器预测语音token，都使用交叉熵损失。总损失是两者之和，端到端训练。
*   训练策略：
    *   优化器：AdamW (β1=0.9, β2=0.95, 权重衰减=0.1)。
    *   学习率：峰值学习率为4e-4，采用余弦退火调度，包含2000步的warmup，最终学习率衰减至峰值的0.01。
    *   批次大小：在1B模型上，使用32张H100 GPU，每卡4个序列，序列长度4096，总批次大小约为0.5M单位。
    *   训练步数：1B模型训练200k步，约对应1万亿单位（tokens/patches）。
    *   课程补丁调度：概率`P(u)`从1（完全使用对齐补丁）线性下降到0（完全使用静态补丁）。`τ1`和`τ2`的具体值论文未明确说明，但描述为训练的前三分之一使用对齐，中间三分之一混合，最后三分之一使用静态。
*   关键超参数：全局Transformer为25层，隐藏维度2048，16个注意力头，使用RoPE位置编码（θ=5e5）。补丁编码器1层，补丁解码器9层，隐藏维度均为1024，16个注意力头。静态补丁的默认大小`p=4`（HuBERT token）。
*   训练硬件：1B模型在32张NVIDIA H100 GPU上训练约17小时。7B模型使用更大的批次（4.0M单位）。
*   推理细节：
    *   ASR/TTS微调：在LibriSpeech clean上微调，批量大小4，序列长度4096。ASR报告词错误率（WER），TTS报告字符错误率（CER，基于Whisper转录）。
    *   TTS生成：评估时使用Kokoro TTS模型将文本转为语音输入，并将模型生成的语音token再用Vocoder转为波形。
    *   评估模式：故事续写基准使用多选题形式，模型选择最合理的续写。
*   正则化：论文未提及使用Dropout或其他显式正则化技术。训练稳定性可能通过梯度裁剪（最大值1.0）和精心设计的课程策略来保证。

### 📊 实验结果

主要实验对比（计算量控制， 表3）

| 模型 | 语音Tokens(B) | 文本Tokens(B) | HellaSwag (S→S) | HellaSwag (T→T) | StoryCloze (S→S) | StoryCloze (T→T) | TopicStoryCloze (S→S) | TopicStoryCloze (T→T) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Base SpeechLLM | 87 | 175 | 39.0 | 47.0 | 59.1 | 67.8 | 87.5 | 95.7 |
| BPE SpeechLLM | 95 | 190 | 38.0 | 47.5 | 58.0 | 66.4 | 87.0 | 93.5 |
| LST (Static) | 108 | 217 | 44.3 | 51.1 | 60.5 | 70.3 | 87.7 | 96.2 |
| LST (Aligned) | 108 | 217 | 42.7 | 51.7 | 60.4 | 70.4 | 86.6 | 95.7 |
| LST (Mixed) | 108 | 217 | 44.3 | 51.9 | 61.4 | 70.8 | 88.0 | 95.9 |
| LST (Curriculum) | 108 | 217 | 45.5 | 52.2 | 61.2 | 71.6 | 87.9 | 96.1 |

关键结论：在相同计算预算（迭代次数和单步序列预算）下，所有LST变体均优于基线。课程补丁在Speech HellaSwag上取得最高提升（+6.5%），并在Text HellaSwag和StoryCloze上也取得最佳性能。BPE基线无效。

主要实验对比（数据量控制， 表4）

| 模型 | 计算节省(%) | HellaSwag (S→S) | HellaSwag (T→T) | StoryCloze (S→S) | StoryCloze (T→T) | TopicStoryCloze (S→S) | TopicStoryCloze (T→T) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Base SpeechLLM | - | 40.2 | 49.6 | 60.2 | 69.1 | 87.5 | 95.2 |
| BPE SpeechLLM | 8.2% | 39.4 | 48.4 | 58.3 | 66.3 | 86.5 | 93.9 |
| LST (Static) | 19.3% | 44.3 | 51.1 | 60.5 | 70.3 | 87.7 | 96.2 |
| LST (Curriculum) | 19.7% | 45.5 | 52.2 | 61.2 | 71.6 | 87.9 | 96.1 |

关键结论：在固定数据预算下，LST（课程补丁）以约20%的计算节省，实现了所有指标的提升。这证明了补丁化带来的样本效率增益。

下游任务与推理效率（表5）

| 任务 | 模型 | 迭代次数 | clean WER%↓ | other WER%↓ | 上下文单元 | 生成单元 |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| ASR | Baseline | 1k | 140 | 202 | 1.0× | – |
| | LST | 1k | 6.8 | 10.4 | 0.25× | – |
| TTS | Baseline | 20k | 14.1 | 15.1 | – | 1.0× |
| | LST | 20k | 14.1 | 16.2 | – | 0.25× |

关键结论：
*   ASR：LST模型在仅1k步微调后即可达到6.8% WER，而基线模型即使4k步后仍>20% WER，表明LST的预训练表示对下游任务适应更友好、更稳定。同时，LST在ASR推理时的上下文单元长度仅为基线的1/4。
*   TTS：LST在重建质量（CER）上与基线持平，但生成所需的自回归步长减少为1/4，显著提升了推理效率。

规模扩展行为（图4）
![图4：计算最优规模扩展 (a) 与次优token扩展 (b)](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/krGpQzo8Mz-3.png)
*   图4(a)计算最优扩展：在420M到1.8B参数范围内，LST在两个模态上均优于基线，且优势随模型规模增大而扩大（在1.8B时，Speech HellaSwag差距为3.7%）。
*   图4(b)次优token扩展（7B模型）：在固定处理token预算（70B， 低于最优≈140B）下，LST在整个训练过程中始终高于基线，展示了更快的收敛速度和更好的数据效率。

消融实验（补丁策略， 表6）

| 补丁策略 | 平均补丁大小(token) | HellaSwag (S→S) | HellaSwag (T→T) | StoryCloze (S→S) | StoryCloze (T→T) | TopicStoryCloze (S→S) | TopicStoryCloze (T→T) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Static (p=4) | 4 | 40.5 | 48.8 | 58.2 | 69.4 | 86.2 | 95.1 |
| Curriculum (sil sep.) | 5.8→4 | 41.3 | 49.2 | 58.6 | 67.8 | 86.6 | 95.4 |
| Curriculum (sil merged) | 9.4→4 | 40.3 | 48.9 | 58.7 | 68.9 | 86.8 | 95.4 |
| Align (sil sep.) | 5.8 | 39.9 | 49.3 | 60.3 | 69.9 | 85.7 | 95.3 |
| Static (p=6) | 6 | 39.4 | 49.2 | 58.7 | 69.6 | 84.9 | 94.9 |
| Static (p=9) | 9 | 37.2 | 49.4 | 57.5 | 69.7 | 84.7 | 95.9 |
| Align (sil merged) | 9.4 | 38.5 | 49.0 | 58.8 | 69.7 | 86.9 | 96.0 |

关键结论：
1.  在平均补丁大小相近时，对齐补丁（Align）通常优于静态补丁（Static），说明语义对齐有帮助。
2.  课程补丁（Curriculum）在Speech HellaSwag上性能最佳，证明了其从对齐到静态的平滑过渡策略是有效的。
3.  过大的静态补丁（p=9）会损害Speech理解性能。

可视化分析（图5）
![图5：对齐补丁模型的单词级语音补丁嵌入t-SNE可视化](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/krGpQzo8Mz-4.png)
*   结论：可视化显示，相同单词的补丁嵌入形成紧密的簇，不同单词的簇分离良好。语义相关的词（如“scissors”和“shears”）在空间中邻近。这定性地证实了LST学习到的语音补丁具有良好的语义分组特性。

### ⚖️ 评分理由

*   学术质量：6.5/7。论文在解决一个明确的实际问题（效率）上提出了有创见的解决方案（潜在补丁），并辅以极其全面和深入的实验验证（多设置、多规模、消融、可视化）。技术细节清晰，逻辑链条完整。主要失分点在于核心架构并非完全原创（借鉴BLT），且“对齐”部分引入了外部工具依赖。
*   选题价值：1.0/2。选题聚焦于提升语音-文本大模型的计算效率和可扩展性，这是当前该领域走向实用化和大规模化的关键瓶颈，具有明确的工程价值和前沿性。
*   开源与复现加成：0.5/1。论文明确开源了代码仓库，并提供了近乎全部的训练细节、超参数和配置，极大地支持了复现和后续研究。未提及模型权重，是主要的减分项。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
