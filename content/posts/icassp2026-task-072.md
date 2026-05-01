---
title: "ICASSP 2026 - 语音编码 论文列表"
date: 2026-04-29
draft: false
tags: ["语音编码"]
categories: [icassp-2026]
description: "共 5 篇 ICASSP 2026 语音编码 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音编码

共 **5** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Lisa: Lightweight Yet Superb Neural Speech Coding](/audio-paper-digest-blog/posts/2026-04-29-lisa-lightweight-yet-superb-neural-speech-coding) | 8.5分 | 前25% |
| 🥈 | [FocalCodec-Stream: Streaming Low-Bitrate Speech Coding via C](/audio-paper-digest-blog/posts/2026-04-29-focalcodec-stream-streaming-low-bitrate-speech) | 8.0分 | 前25% |
| 🥉 | [CodecSlime: Temporal Redundancy Compression of Neural Speech](/audio-paper-digest-blog/posts/2026-04-29-codecslime-temporal-redundancy-compression-of) | 7.5分 | 前10% |
| 4. | [Speaking Clearly: A Simplified Whisper-Based Codec for Low-B](/audio-paper-digest-blog/posts/2026-04-29-speaking-clearly-a-simplified-whisper-based-codec) | 7.5分 | 前25% |
| 5. | [IBPCodec : A Low-Bitrate Lightweight Speech Codec With Inter](/audio-paper-digest-blog/posts/2026-04-29-ibpcodec-a-low-bitrate-lightweight-speech-codec) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Lisa: Lightweight Yet Superb Neural Speech Coding](/audio-paper-digest-blog/posts/2026-04-29-lisa-lightweight-yet-superb-neural-speech-coding)

🔥 **8.5/10** | 前25% | #语音编码 | #信号处理 | #向量量化 #实时处理

👥 **作者与机构**

- 第一作者：Jiankai Huang (南京大学)
- 通讯作者：Xun Cao (南京大学)， Zhan Ma (南京大学)
- 作者列表：Jiankai Huang (南京大学)， Junteng Zhang (南京大学)， Ming Lu (南京大学)， Xun Cao (南京大学)， Zhan Ma (南京大学)

💡 **毒舌点评**

论文提出的“调节残差使其更利于量化”这一核心思想非常巧妙且实用，直击传统RVQ在后续阶段效率低下的痛点，最终实现了在超低比特率下用极小的模型超越一众巨型模型（如参数量4.98M vs 872M的SemantiCodec）。不过，实验部分略显“基础”，虽然对比了多个模型，但缺乏对更复杂噪声环境、不同语言或说话人风格下鲁棒性的分析，也缺乏直接的主观听感（MOS）测试，说服力上稍打折扣。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://arsx958.github.io/Lisa-Lightweight-Yet-Superb-Neural-Speech-Coding/
- 模型权重：提供预训练模型下载（论文中提及“pretrained model can be downloaded from our GitHub repository”）。
- 数据集：使用公开的LibriTTS数据集，未说明是否提供额外处理后的数据。
- Demo：论文页面链接可能包含演示，但文中未明确说明。
- 复现材料：提供了详细的训练配置（数据集、优化器、学习率、步长、硬件），足以支持复现。代码仓库应包含模型定义和训练脚本。
- 引用的开源项目：论文引用了多个作为基线的开源项目/工具，如FunCodec [12]。

📌 **核心摘要**

1.  问题：现有神经语音编码器在低/超低比特率下，编码效率受限于特征表示能力和量化过程的不足，特别是传统残差向量量化（RVQ）在初始阶段后，残差变得不规则，导致量化损失高、效率低下。
2.  方法核心：提出轻量级编码器-解码器Lisa，其核心是引入两个创新模块：(1) 带Inception残差块（IRB）的因果频域编码器，用于提取多尺度特征；(2) 受调节残差向量量化（R-RVQ），在每个量化阶段前通过一个可学习模块将残差“调节”为更规整、更适合量化的形式。
3.  新在哪里：R-RVQ首次在量化前主动对残差进行结构化重塑，而非被动处理原始残差。这与传统RVQ直接堆叠量化器有本质区别，确保了每个阶段都能有效降低量化误差。
4.  实验结果：在LibriTTS数据集上，Lisa在500 bps时ViSQOL达3.90，在1500 bps时达4.43，超越了FunCodec、MUFFIN、StreamCodec等基线模型，同时模型参数仅4.98M，计算量为2.83G MACs，适合实时流式应用。
5.  实际意义：为在极低带宽下实现高质量、低延迟的实时语音通信（如视频会议、云游戏）提供了高效可行的解决方案。
6.  主要局限性：实验主要在干净语音（LibriTTS）上验证，对噪声、失真或实际网络传输环境的鲁棒性未作评估；评估指标依赖客观分数，缺少主观听感测试；对模型在极低延迟（<10ms）场景下的性能未做专门探讨。

---

### 🥈 [FocalCodec-Stream: Streaming Low-Bitrate Speech Coding via Causal Distillation](/audio-paper-digest-blog/posts/2026-04-29-focalcodec-stream-streaming-low-bitrate-speech)

🔥 **8.0/10** | 前25% | #语音编码 | #知识蒸馏 | #流式处理 #语音大模型

👥 **作者与机构**

- 第一作者：Luca Della Libera（Concordia University, Mila-Quebec AI Institute）
- 通讯作者：未说明
- 作者列表：Luca Della Libera（Concordia University, Mila-Quebec AI Institute），Cem Subakan（Universit´e Laval, Concordia University, Mila-Quebec AI Institute），Mirco Ravanelli（Concordia University, Mila-Quebec AI Institute）

#

💡 **毒舌点评**

本文巧妙地将非流式的WavLM“蒸”成一个能实时处理的语音编码器，通过多阶段训练和一个轻巧的“精修工”模块，在80毫秒的低延迟下实现了比肩甚至超越同类流式编解码器的音质和下游性能，堪称工程实践的典范。不过，为了塞进WavLM这个大块头，模型参数量几乎翻倍（249M vs. 142M），其在资源受限设备上的部署可能是个挑战，且多语言泛化能力虽优于部分基线，但仍有明显下滑。

#

🔗 **开源详情**

- 代码：论文明确表示将在GitHub（https://github.com/lucadellalib/focalcodec）发布代码。
- 模型权重：论文提到会发布“检查点（checkpoints）”，但未提供直接下载链接。
- 数据集：论文使用的训练和评估数据集（LibriTTS, Libri-Light, MLS, LibriSpeech, IEMOCAP等）均为公开数据集，但未提供处理后的版本。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了架构图和主要的训练阶段描述，但具体的超参数配置、训练脚本、依赖环境等细节需参考代码仓库。
- 论文中引用的开源项目：主要依赖WavLM、Vocos等开源模型或架构。

📌 **核心摘要**

1.  问题：现有的神经音频编解码器大多不支持流式处理，难以用于语音助手、实时对话等低延迟应用；而已有的流式编解码器往往需要在比特率、语义信息保留、下游任务性能等方面做出妥协。
2.  方法核心：提出FocalCodec-Stream，一个基于WavLM和焦点调制（Focal Modulation）的混合编解码器。核心是采用多阶段因果蒸馏策略，将预训练的非流式WavLM逐层改造为流式编码器，并引入一个轻量级的“细化模块”（Refiner）来弥补因因果约束造成的质量损失。
3.  创新点：首次实现了将强大的自监督模型（WavLM）通过蒸馏有效适配为流式、低比特率（0.55-0.80 kbps）、单码本的语音编码器，同时保持了语义和声学信息的统一。
4.  主要实验结果：
    *   在80ms延迟、0.80 kbps比特率下，其重构语音质量（UTMOS=3.85）接近非流式版本（4.05），并显著优于所有对比的流式基线（如Mimi6为3.44）。
    *   在语音转换任务中，其dWER（3.68%）和说话人相似度（Sim=97.0）均为最佳。
    *   在多个下游任务（ASR， SI， SE等）中，其离散表示的有效性整体优于其他流式编码器，在部分任务上甚至接近或超越非流式版本。
    *   消融实验证实，细化模块和最终微调阶段对提升性能至关重要。
5.  实际意义：为构建支持高质量、低延迟实时语音交互的系统（如语音大模型、实时语音翻译）提供了关键的基础设施。其单码本、低比特率特性尤其适合用于训练语音语言模型。
6.  主要局限性：模型参数量较大（249M），可能影响在边缘设备的部署；在多语言语音重构任务上，性能相比英语有明显下降，泛化能力有待提升；与非流式最佳版本相比，仍存在一定性能差距。

---

### 🥉 [CodecSlime: Temporal Redundancy Compression of Neural Speech Codec via Dynamic Frame Rate](/audio-paper-digest-blog/posts/2026-04-29-codecslime-temporal-redundancy-compression-of)

✅ **7.5/10** | 前10% | #语音编码 | #动态帧率 | #VQ-GAN #插件式方法

👥 **作者与机构**

- 第一作者：Hankun Wang（上海交通大学计算机科学与技术学院，X-LANCE实验室）
- 通讯作者：Kai Yu（上海交通大学计算机科学与技术学院，X-LANCE实验室）
- 作者列表：Hankun Wang（上海交通大学 X-LANCE实验室），Yiwei Guo（上海交通大学 X-LANCE实验室），Chongtian Shao（上海交通大学 X-LANCE实验室），Bohan Li（上海交通大学 X-LANCE实验室），Kai Yu（上海交通大学 X-LANCE实验室）

💡 **毒舌点评**

亮点：CodecSlime 提出了一种优雅的“动态帧率”压缩方案，通过自适应地合并信息密度低的语音帧（如长元音），在不增加码本容量的前提下显著降低了重建WER（相对降低32%），为低比特率语音编码提供了新思路。  
短板：其训练过程需要两阶段的“熔化-冷却”微调，相比直接训练固定帧率模型增加了复杂度；且动态压缩比受限于最大合并窗口（U=4），对于超长冗余段的压缩能力可能有限。

🔗 **开源详情**

-   代码：论文中提及训练代码基于BigCodec的官方实现（`https://github.com/Aria-K-Alethia/BigCodec`），并提供了CodecSlime的示例代码链接（`https://x-lance.github.io/codecslime/`）。未明确承诺提供CodecSlime独立的完整代码仓库。
-   模型权重：未提及公开预训练模型权重。
-   数据集：使用LibriSpeech和LibriTTS，均为公开数据集。评测使用UniCATS测试集B。
-   Demo：提供了在线音频样本演示页面（`https://x-lance.github.io/codecslime/`）。
-   复现材料：论文中详细给出了骨干模型、CodecSlime各阶段的超参数设置、训练步数、硬件配置等，复现信息较为充分。
-   引用的开源项目：明确引用了BigCodec、EnCodec等项目的代码实现，以及多种评估工具（NeMo ASR, pystoi, PESQ, Resemblyzer等）。

📌 **核心摘要**

1.  问题：当前主流的固定帧率（FFR）神经语音编码器在编码信息密度不均匀的语音信号（如长元音、静音段）时，会浪费大量token在冗余部分，导致编码效率低于理论极限。
2.  方法核心：提出了一种插件式方法CodecSlime，包含两个核心技术：ScheDFR（可调度动态帧率）在推理时利用动态规划算法自适应地合并特征相似的连续帧；Melt-and-Cool训练方案（包括后训练和微调）将预训练的FFR模型适配到动态帧率（DFR）模式。
3.  创新性：该方法完全无监督，且与编码器骨干架构无关。与此前尝试DFR的方法（如基于层次量化或依赖复杂语义蒸馏）相比，CodecSlime更简单、通用，且实现了端到端的重建质量优化，而非仅用于语义发现。
4.  实验结果：在以80Hz FFR骨干（VQ-GAN架构）为目标、推理时采用40Hz DFR的设定下，CodecSlime在标准测试集上的WER相比同等比特率的40Hz FFR基线降低了最高32%（相对值），其他指标（STOI, PESQ, UTMOS, MUSHRA）也具有竞争力。具体关键数据见下表：
    | 模型 | 帧率(Hz) | 内容码本大小 | 内容比特率(kbps) | WER(%)↓ | MUSHRA↑ |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | BigCodec-VQ8k (FFR) | 40×1 | 8192 | 0.52 | 4.89 | 73.45±2.81 |
    | CodecSlime-VQ8k (DFR) | 40×1 | 8192 | 0.52 | 4.25 | 84.01±1.59 |
    | BigCodec-FSQ18k (FFR) | 40×1 | 18225 | 0.57 | 5.59 | 74.42±2.14 |
    | CodecSlime-FSQ18k (DFR) | 40×1 | 18225 | 0.57 | 3.80 | 81.24±1.88 |
    此外，单个CodecSlime模型在40-80Hz的多个目标帧率上进行推理时，性能均优于分别在各目标帧率上训练的FFR模型。
5.  实际意义：为语音编码器提供了更高效的时间压缩方式，能在相同重建质量下降低码率，或在相同码率下提升质量，对语音通信、大语言模型语音接口等低带宽/高效率场景有重要价值。
6.  主要局限性：训练需要两阶段微调，流程相对复杂；压缩能力受限于预设的最大合并窗口U；实验主要在LibriSpeech英文数据集上进行，跨语言泛化性虽有验证但程度有限。

---

### 4. [Speaking Clearly: A Simplified Whisper-Based Codec for Low-Bitrate Speech Coding](/audio-paper-digest-blog/posts/2026-04-29-speaking-clearly-a-simplified-whisper-based-codec)

✅ **7.5/10** | 前25% | #语音编码 | #预训练 | #语音增强 #Whisper模型

👥 **作者与机构**

- 第一作者：Xin Zhang（武汉理工大学计算机与人工智能学院）
- 通讯作者：Lin Li（武汉理工大学计算机与人工智能学院）
- 作者列表：Xin Zhang（武汉理工大学计算机与人工智能学院）、Lin Li（武汉理工大学计算机与人工智能学院）、Xiangni Lu（武汉理工大学计算机与人工智能学院）、Jianquan Liu（NEC Corporation）、Kong Aik Lee（香港理工大学电机及电子工程学系）

💡 **毒舌点评**

亮点是思路清奇，反其道而行之，没有在声学编解码器上叠加语义监督，而是把一个现成的ASR模型（Whisper）“改造”成编解码器，通过简单的架构简化（去掉GELU和位置编码）就解锁了其声学建模能力，实验结果也相当能打。短板在于，这种“简化”本质上是针对特定任务（编解码）的工程化调整，其理论解释（位置编码影响注意模式、GELU抑制频谱细节）略显粗浅，且论文声称的“State-of-the-art”结论仅在英语数据集（LibriSpeech）上得到验证，对于多语言、噪声环境等更复杂场景的泛化能力未做探讨。

🔗 **开源详情**

- 代码：是，提供GitHub仓库链接：https://github.com/ZhangXinWhut/SimWhisper-Codec。
- 模型权重：论文中未明确提及是否公开简化后的Whisper编码器或完整编解码器的预训练权重。
- 数据集：使用的是公开的LibriSpeech和LJSpeech数据集，但未提供处理后的数据或特定数据集的链接。
- Demo：论文中未提及在线演示。
- 复现材料：论文详细说明了模型架构、训练数据、损失函数、训练策略（优化器、学习率、步数）和关键超参数（模型大小、FSQ配置）。这些信息对于复现是充足的，但未提供具体的配置文件或检查点下载链接。
- 论文中引用的开源项目：提到了依赖或对比的开源项目，包括：HiFiGAN、Vocos、FSQ（来自“Low frame-rate speech codec”），以及基线模型EnCodec, DAC-RVQ3, SpeechTokenizer, Mimi-RVQ8, BigCodec, XCodec2.0, XY-Tokenizer等。

📌 **核心摘要**

1.  问题：当前语音编解码器面临语义内容保留和声学保真度之间的固有冲突，尤其在低比特率下更为突出。主流方法通过复杂的外部语义监督（如HuBERT蒸馏、多任务学习）来缓解此冲突。
2.  方法核心：本文提出相反的思路：从一个已经具备语义能力的模型（Whisper ASR模型）出发，通过目标明确的架构简化（移除卷积前端的GELU激活函数和Transformer中的绝对位置编码），使其适配高保真声学重建任务。基于此发现，提出了SimWhisper-Codec。
3.  与已有方法相比新在哪里：新在思路（“语义优先”而非“声学增强”）。无需额外的语义监督信号，直接利用冻结的、简化后的Whisper编码器作为强大的特征提取器，结合FSQ量化和对称解码器，实现单阶段训练。
4.  主要实验结果：在LibriSpeech test-clean上，SimWhisper-Codec以1.1 kbps的极低比特率实现了优秀的性能。关键指标对比见下表：

    | 模型 | 比特率 (BPS) | WER ↓ | SIM ↑ | STOI ↑ | PESQ-NB ↑ | PESQ-WB ↑ | 语义监督 |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | Mimi-RVQ8 | 1.1k | 3.24 | 0.73 | 0.90 | 2.79 | 2.24 | 是 |
    | XCodec2.0 | 0.8k | 2.61 | 0.82 | 0.92 | 3.04 | 2.43 | 是 |
    | XY-Tokenizer | 1.0k | 2.46 | 0.85 | 0.92 | 3.10 | 2.50 | 是 |
    | SimWhisper-Codec | 1.1k | 2.75 | 0.83 | 0.93 | 3.29 | 2.72 | 否 |

    该模型在声学质量（PESQ）上超越了所有对比的基线模型，在语义保留（WER）上也与需要复杂监督的基线模型相当。
5.  实际意义：为构建低比特率、高质量的语音编解码器提供了一种更简洁、高效的新范式，有望简化语音大模型前端的设计。
6.  主要局限性：1) 极低比特率（1.1 kbps）可能限制了在高保真音乐或超宽带语音场景的应用；2) 实验仅在干净的英语语音上验证，对多语言、噪声环境等鲁棒性未做充分评估；3) 简化机制的理论解释仍需更深入的分析。

---

### 5. [IBPCodec : A Low-Bitrate Lightweight Speech Codec With Inter-Band Prediction](/audio-paper-digest-blog/posts/2026-04-29-ibpcodec-a-low-bitrate-lightweight-speech-codec)

✅ **7.0/10** | 前25% | #语音编码 | #信号处理 | #语音合成 #轻量模型

👥 **作者与机构**

- 第一作者：Peng Zhou（北京理工大学）
- 通讯作者：Shenghui Zhao*（北京理工大学）
- 作者列表：Peng Zhou（北京理工大学），Xiaojiao Chen（北京理工大学），Pincheng Lu（北京理工大学），Jing Wang（北京理工大学），Shenghui Zhao*（北京理工大学）

#

💡 **毒舌点评**

亮点：论文精准抓住了“低比特率下低频更重要”这一经典信号处理直觉，并将其与神经网络结合，通过一个轻量的带间预测模块（IBPM）在解码端“猜”出高频，以极小的计算代价（0.35 GMACs）实现了有竞争力的性能，这种“巧劲”值得在资源受限场景下借鉴。
短板：IBPM目前的结构（三层逐点卷积）过于简单，其预测能力存在明显天花板（当P=0.5时质量下降），本质上仍是低频信息的线性外推，论文未探讨更强大的生成式预测模型（如扩散模型）的可能性；此外，模型在1 kbps下的绝对质量（PESQ 2.2）距离“可用”仍有距离，创新性更多是工程上的巧妙设计而非原理性突破。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及。
- 数据集：使用了LibriTTS和VCTK公开数据集，但论文中未提供具体的数据预处理脚本或说明。
- Demo：论文中未提及。
- 复现材料：论文中提供了详细的训练硬件（单卡RTX 3090）、优化器参数、学习率调度、STFT参数、模型结构配置（层数、通道数、卷积核大小等），复现指导较为充分。
- 引用的开源项目：论文提到了FunCodec、FocalCodec、Hifi-codec等开源工具或相关工作，但未明确说明IBPCodec的代码是否基于或借鉴了这些项目。

📌 **核心摘要**

这篇论文针对当前神经语音编解码器计算复杂度过高、难以在边缘设备部署的问题，提出了一种名为IBPCodec的低比特率轻量级语音编解码器。其核心方法是优先对输入语音的低频部分（占比P=75%）进行编码和量化传输，在解码端利用一个轻量的带间预测模块（IBPM）从解码出的低频信息中预测高频成分，从而恢复完整语音。与先前直接丢弃高频或整体编码的方法相比，该创新点在于将频带优先传输与神经预测相结合。实验结果显示，在16 kHz采样率、1-3 kbps比特率下，IBPCodec的计算复杂度仅为0.35 GMACs（远低于DAC的55.66G和SpeechTokenizer的17.09G），其PESQ、SI-SDR等客观指标及MUSHRA主观评分均优于或持平FreqCodec、SpeechTokenizer等基线。该工作的实际意义在于为低功耗设备上的实时语音通信提供了一种高效的编解码方案。其主要局限性在于IBPM的预测能力有限，在更低频带占比（P=0.5）时性能下降，且模型在极低比特率下的绝对语音质量仍有提升空间。

#

---

