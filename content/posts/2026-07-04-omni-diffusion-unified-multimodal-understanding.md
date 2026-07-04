---
title: "Omni-Diffusion: Unified Multimodal Understanding and Generation with Masked Discrete Diffusion"
date: 2026-07-04
draft: false
tags: []
categories: [icml-2026]
description: "Omni-Diffusion: Unified Multimodal Understanding and Generation with Masked Discrete Diffusion"
hiddenInHomeList: true
---

# 📄 Omni-Diffusion: Unified Multimodal Understanding and Generation with Masked Discrete Diffusion

**5.8/10** | 创新 0.9/2 | 严谨 0.9/1.5 | 实验 0.6/1.5 | 清晰 0.7/1 | 影响 0.8/1.5 | 开源 1/1.5 | 复现 0.3/0.5 | 工程 0.6/1.5

📝 **5.8/10** | 前50% | [arxiv](https://openreview.net/forum?id=EulXRTtFCd)


### 👥 作者与机构

- 第一作者：Lijiang Li（南京大学计算机软件新技术国家重点实验室、南京大学智能科学与技术学院）
- 通讯作者：Chaoyou Fu（南京大学计算机软件新技术国家重点实验室、南京大学智能科学与技术学院）
- 作者列表：Lijiang Li（南京大学）、Zuwei Long（腾讯优图实验室）、Yunhang Shen（腾讯优图实验室）、Heting Gao（腾讯优图实验室）、Haoyu Cao（腾讯优图实验室）、Xing Sun（腾讯优图实验室）、Caifeng Shan（南京大学）、Ran He（中国科学院自动化研究所）、Chaoyou Fu（南京大学）

### 💡 毒舌点评

本文提出将mask-based discrete diffusion应用于any-to-any多模态系统，这一方向选择确实体现了对非自回归范式潜力的洞察。三阶段渐进式训练、SDVI数据集构建以及position penalty等推理trick形成了一套相对完整的技术方案。但问题也很突出：实验对比基线严重过时（LLaVA、InstructBLIP均为2023年工作），text-to-image的CLIP分数（CLIP-T 0.236）远低于实用水平，ASR的WER 6.69%更是不可接受。作者声称的"comparable or even better"需要更充分的证据，与2024-2025年主流系统的对比完全缺失。SDVI数据集依赖语音合成，其质量对结论的影响未被讨论。某些关键设计（如自适应长度系数）过于经验化，缺乏敏感性分析。

### 📌 核心摘要

本文提出Omni-Diffusion，首个完全基于mask-based discrete diffusion的any-to-any多模态语言模型，统一处理文本、图像、语音的理解与生成。其核心方法是将多模态数据统一离散token化——使用MAGViT-v2作为图像tokenizer（下采样因子f=16，codebook size 8192）、SenseVoiceSmall作为语音编码器、GLM-4-Voice decoder作为语音解码器（token rate 12.5Hz，codebook size 16384）。在预训练的Dream-7B扩散语言模型上，通过扩展vocabulary来统一建模多模态离散token的联合分布，并在mask-token prediction框架下训练。与现有autoregressive多模态系统（如AnyGPT、NExT-GPT等）不同，Omni-Diffusion用扩散模型的并行解码替代自回归生成，天然支持图像inpainting等任务。

实验涵盖ASR、TTS、VQA、text-to-image、speech-to-image等任务。主要结果：LibriSpeech ASR WER 6.69%（弱于GLM-4-Voice的2.82%），LibriTTS TTS WER 2.22%（优于GLM-4-Voice的5.64%），POPE 76.4%、MME-Perception 1176.1（与2023年baseline相当），MSCOCO text-to-image CLIP-T 0.236/CLIP-I 0.662。在扩散模型的核心优势——采样效率方面，10步推理即可保持生成质量（CLIP-T从0.236降至0.233，TTS WER保持2.22%），验证了扩散模型的并行解码优势。

实际意义在于首次验证了mask-based discrete diffusion在统一多模态系统（含语音）中的可行性，为探索非自回归架构的多模态基础模型提供了有价值的实验证据和工程参考。主要局限是图像生成质量远低于专用扩散模型，ASR性能不佳，且未与2024-2025年的现代多模态系统对比，其实用价值有待进一步验证。

### 🔗 开源详情

- 代码：论文声明"Codes are released at GitHub"，但未给出具体仓库链接。
- 模型权重：论文未提及。
- 数据集：SDVI数据集构建流程有描述，但未提供下载链接或获取方式。
- Demo：论文未提及。
- 复现材料：附录A给出了训练配置（优化器、学习率、batch size等），但未提供预训练checkpoint或完整复现包。
- 论文中引用的开源项目：Dream-7B、MAGViT-v2、SenseVoiceSmall、GLM-4-Voice decoder、CosyVoice2、LLaVA-OneVision、Whisper-Large-V3等，论文未提供这些项目的具体链接。

### 🏗️ 方法概述和架构

整体流程：Omni-Diffusion是一个端到端的any-to-any多模态系统，输入可以是文本、图像、语音的任意组合，输出也可以是任意模态。系统首先将原始模态数据通过各自的专用tokenizer转换为离散token序列，所有模态的token序列在各自模态的特殊起始/结束token（如 `<|BoI|>`、`<|EoI|>`）包裹后拼接，送入统一的mask-based discrete diffusion模型进行联合建模。模型通过迭代式mask-prediction过程生成输出token序列，最后将预测的离散token通过对应的detokenizer还原为原始模态数据。该架构的核心优势在于：通过直接建模多模态离散token的联合分布，避免了现有方案（如NExT-GPT）中"LLM处理文本 + 外部扩散模型生成其他模态"造成的模态间语义鸿沟和架构不对称性。

![图11](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/EulXRTtFCd-p4-e17a653ba.jpg)

图像tokenization：使用预训练的MAGViT-v2作为图像tokenizer。MAGViT-v2首先通过下采样因子 \(f = 16\) 的视觉编码器将图像压缩为紧凑表示，再通过codebook大小为8192的quantizer将压缩表示转换为离散图像token。这些离散token同时服务于视觉理解和生成任务——即模型不仅从图像token中理解内容，也学习生成符合语义的图像token序列。图像序列前后分别插入 `<|BoI|>` 和 `<|EoI|>` 作为模态标识。

![图12](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/EulXRTtFCd-p4-e19c626da.jpg)

语音编码：采用SenseVoiceSmall作为语音编码器，提取富含语义的语音连续表示。SenseVoiceSmall底层使用memory-equipped self-attention网络。这些连续表示通过一个轻量级的MLP adapter投影到扩散模型backbone的隐藏维度，实现与文本、图像token的语义对齐。语音编码器在训练中保持冻结，仅训练adapter。

![图13](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/EulXRTtFCd-p4-e322ad2fb.jpg)

语音解码：使用GLM-4-Voice decoder进行语音合成。该解码器先将语音以12.5Hz的token rate通过finite scalar quantization（codebook size=16384）转换为离散token。Omni-Diffusion模型预测输出的语音token序列后，交由GLM-4-Voice decoder重建为波形。语音解码器同样训练保持冻结。

核心Backbone：基于Dream-7B，一个预训练的mask-based discrete diffusion语言模型。为支持多模态处理，模型vocabulary扩展了16384个speech tokens和8192个image tokens，相应地扩展了embedding层和output层的参数。其余Transformer架构保持不变。

![图14](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/EulXRTtFCd-p4-e3e4919a7.jpg)

训练过程（三阶段渐进式训练pipeline）：
- Stage 1（Visual-Language Pre-Alignment）：仅使用text-to-image和image captioning数据，将视觉模态对齐到预训练语言模型的语义空间。数据包括Laion-2B（10M图像-文本对）、JourneyDB（4M）、LLaVA-OneVision（820K）等。
- Stage 2（Speech–Vision–Language Joint Alignment）：引入ASR和TTS数据（LibriSpeech、GigaSpeech、LibriTTS、Emilia等总计约6000+小时），与Stage 1的图文数据联合训练，建立语音-文本的双向对齐。
- Stage 3（Speech-Driven Visual Interaction Capability Improvement）：在自建的SDVI数据集（30K spoken VQA + 30K speech-to-image样本）上微调，增强语音与视觉的跨模态交互能力。同时保留SQA和VQA数据以维持已有能力。

![图15](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/EulXRTtFCd-p4-e6d8dc25d.jpg)

Attenuated Tail-Pad Masking：为支持变长生成，训练时在每个样本尾部追加随机数量的pad token。对所有token（含pad）实施随机masking，但对pad token的mask ratio乘以衰减因子 \(\gamma\)（\(\gamma < 1\)，本文设为0.6）。这确保梯度更新的主导驱动力来自语义token，避免模型过拟合pad token，防止推理时生成过量的pad token。

![图16](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/EulXRTtFCd-p4-e6e8349bb.jpg)

推理策略：
- Entropy-based Decoding：每步计算各位置token概率的熵 \(H^i_t = -\sum_{v=1}^V p_t^{i,v} \cdot \log(p_t^{i,v})\)，取熵最低（置信度最高）的top-k tokens在当前步解码，其余保持 `[MASK]`。迭代重复直至所有token被解码。可结合repetition penalty和classifier-free guidance提升生成质量。
- Position Penalty：针对图像生成中出现的重复纹理问题，在推理早期对序列末尾 \(N_t\) 个token（设为 \(L-100\)，\(L\) 为总序列长度）的logits乘以衰减因子 \(\gamma_p\)（最小值0.5）。该策略通过软约束抑制两端同时解码导致的对称重复，与半自回归生成的刚性格局划分不同，本质是对解码顺序的软引导。
- Special Token Pre-Infilling：利用扩散模型可自由修改初始mask序列的特性，在初始mask序列25%位置处插入 `<|begin-of-speech|>` 特殊token。这指导模型在前25%位置生成文本响应，后75%位置生成对应语音，使语音合成过程显式attend到已生成的文本语义，提升spoken对话的逻辑性和连贯性。
- Adaptive Token Length Assignment：利用语音时长与文本长度的强相关性，TTS任务初始mask token长度设为文本token数的3.5倍，ASR任务设为语音token数的0.2倍。该策略在减少无效解码、提升效率的同时也改善了生成质量。

![图17](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/EulXRTtFCd-p4-e7ba8e505.jpg)

![图18](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/EulXRTtFCd-p4-eab07ba1f.jpg)

![图19](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/EulXRTtFCd-p4-ef6067cc9.jpg)

![图20](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/EulXRTtFCd-p4-ef7a33074.jpg)

![图21](https://nanless.github.io/audio-paper-digest-images/icml-2026/2026-07-04/EulXRTtFCd-p4-v48f932b4.jpg)

### 💡 核心创新点

1. 首次将mask-based discrete diffusion应用于any-to-any多模态系统：此前多模态系统几乎全部基于autoregressive架构（如AnyGPT）或需要外部扩散解码器（如NExT-GPT）。Omni-Diffusion统一用扩散模型建模多模态离散token的联合分布，消除了模态间的架构不对称性，使理解与生成在同一mask-prediction框架下完成。

2. 三阶段渐进式训练pipeline：为将纯文本扩散语言模型扩展为多模态系统，设计了视觉-文本对齐→语音-文本对齐→语音-视觉联合对齐的递进训练策略。这种课程式设计避免了同时引入所有模态可能导致的训练不收敛或灾难性遗忘。

3. SDVI数据集构建：面向speech-driven visual interaction这一未被充分探索的场景，从LLaVA-OneVision和JourneyDB出发，通过Cosyvoice2语音合成、多选题改写为开放问答、过滤数学/编程类和长答案样本等质量控制流程，构建了30K spoken VQA和30K speech-to-image数据。这为后续研究提供了task定义和数据构建范式的参考。

4. 面向扩散模型的推理优化tricks：position penalty通过软约束解码顺序缓解了mask扩散模型中的对称重复生成问题；special token pre-infilling将文本-语音双模态生成解耦为序列空间中的分区生成，提升了spoken对话的连贯性。

### 📊 实验结果

| Method | Model Type | LibriSpeech WER ↓ | LibriTTS WER ↓ |
|---|---|---|---|
| CosyVoice | TTS model | - | 2.89 |
| CosyVoice2 | TTS model | - | 2.47 |
| GLM-4-Voice | Speech LLM | 2.82 | 5.64 |
| AnyGPT | Any-to-Any | 8.5 | - |
| Omni-Diffusion | Any-to-Any | 6.69 | 2.22 |

### 视觉任务（VQA & Text-to-Image）

| Method | Model Type | #Params | POPE↑ | MME-P↑ | MMMU-val↑ | Seed-2-Plus↑ | CLIP-T↑ | CLIP-I↑ |
|---|---|---|---|---|---|---|---|---|
| mPLUG-Owl | Visual LLM† | 7B | - | 976.34 | - | 31.8 | - | - |
| LLaVA | Visual LLM† | 7B | 76.3 | 809.6 | - | 30.1 | - | - |
| InstructBLIP | Visual LLM† | 14B | 78.9 | 1212.8 | - | 29.2 | - | - |
| DreamLLM | Visual LLM | 7B | 69.2 | - | - | - | 0.238 | 0.697* |
| Emu‡ | Visual LLM | 14B | - | - | 30.7* | 33.5 | 0.286 | 0.656 |
| AnyGPT | Any-to-Any | 8B | 67.7* | - | - | - | - | 0.650 |
| NExT-GPT‡ | Any-to-Any | 7B | - | - | - | 26.2 | 0.225 | 0.691 |
| Omni-Diffusion | Any-to-Any | 7B | 76.4 | 1176.1 | 31.1 | 34.7 | 0.236 | 0.662 |

注：†表示仅支持理解的Visual LLM；‡表示借助外部预训练扩散模型的方法；*表示使用官方发布代码和checkpoint的复现结果。

### 语音-视觉对齐（Speech-to-Image）

| Condition | CLIP-T ↑ | CLIP-I ↑ |
|---|---|---|
| Text | 0.2360 | 0.6614 |
| Speech | 0.2322 | 0.6450 |

### Spoken VQA（MME转语音评估）

| Modality | MME-P ↑ |
|---|---|
| Text + Image → Text | 1176.1 |
| Speech + Image → Text | 997.1 |
| Speech + Image → Speech | 967.1 |

### 采样效率

| Task | Steps | Latency ↓ | Metrics |
|---|---|---|---|
| Text-to-Image | 256 | 28.57s | 0.2360 / 0.6614 |
| Text-to-Image | 50 | 5.52s | 0.2354 / 0.6593 |
| Text-to-Image | 10 | 1.29s | 0.2325 / 0.6524 |
| Speech-to-Image | 256 | 39.90s | 0.2322 / 0.6450 |
| Speech-to-Image | 10 | 4.25s | 0.2289 / 0.6376 |
| TTS | 0.5L | 0.427 RTF | 2.22 WER |
| TTS | 0.125L | 0.341 RTF | 5.54 WER |

注：Latency为Text-to-Image/Speech-to-Image的平均单张图像生成时间（秒），TTS为RTF。

### 与AR基线推理延迟对比
- Text-to-Image（MSCOCO）：Emu 3.02s (CLIP-T 0.286)，NExT-GPT 6.23s (CLIP-T 0.225)，Omni-Diffusion 256步28.5s/10步1.29s (CLIP-T 0.236/0.232)
- TTS（LibriTTS）：GLM-4-Voice 0.685 RTF (WER 5.64)，Omni-Diffusion 0.5L步0.427 RTF (WER 2.22)/0.125L步0.341 RTF (WER 5.54)

### 消融实验

Position Penalty对text-to-image的影响（COCO benchmark）：

| Method | CLIP-T ↑ | CLIP-I ↑ |
|---|---|---|
| w/o Position Penalty | 0.222 | 0.647 |
| w/ Position Penalty | 0.236 | 0.662 |

Special Token Pre-Infilling对spoken VQA的定性影响：无该策略时，模型倾向于生成过于简短的响应；有该策略时，响应更完整、连贯（论文以定性示例展示）。

### 🔬 细节详述

- 训练数据：Stage 1使用Laion-2B（10M）、LLaVA-OneVision（820K）、In-house Dataset（2M）、JourneyDB（4M）。Stage 2增加ASR数据（LibriSpeech 100h、CommonVoice17 100h、GigaSpeech 1000h、People’s Speech 100h、VoxPopuli 54h）和TTS数据（LibriTTS 58h、GLOBE 50h、Emilia 5000h）。Stage 3增加SDVI（30K spoken VQA + 30K speech-to-image）、VoiceAssistant-400K（250K）、AudioQA-1.0M（180K）。纯文本部分始终包含Tulu3 SFT mixture（670K）。
- 损失函数：交叉熵，仅计算masked position，\(L = -\mathbb{E}_t \left[ \sum_{i=1}^L \mathbb{I}[x_t^i = [\text{MASK}]] \log p_\theta(x_0^i | x_t) \right]\)。
- 优化器：AdamW，\(\beta_1 = 0.9\)，\(\beta_2 = 0.95\)，\(\epsilon = 1 \times 10^{-8}\)。Stage 1和2学习率 \(1 \times 10^{-4}\)，Stage 3降至 \(1 \times 10^{-5}\)。Batch size 128，最大序列长度3072。
- 关键超参数：Attenuated Tail-Pad Masking \(\gamma = 0.6\)；Position Penalty \(N_t = L - 100\)（\(L\)为总sequence length），\(\gamma_p\) 随token index递增而衰减，最小值0.5。图像tokenizer下采样因子 \(f = 16\)，codebook大小8192。语音codebook大小16384，token rate 12.5Hz。
- 模型规模：基于Dream-7B（7B参数），vocabulary扩展至原始 text vocab + 16384 speech tokens + 8192 image tokens。
- 训练硬件：未说明。
- 推理细节：entropy-based top-k解码（top-k具体值未说明），支持repetition penalty和classifier-free guidance（scale未明确）。TTS的adaptive length设为文本长度的3.5倍，ASR设为语音长度的0.2倍。Special token pre-infilling在初始 `[MASK]` 序列25%位置（\(0.25L\)）插入 `` `<|begin-of-speech|>` `` token。

### ⚖️ 评分理由

*   创新性 (0.9/2)：首次将mask-based discrete diffusion应用于any-to-any多模态系统，选题角度有洞察力。三阶段训练和若干推理trick构成了相对完整的方法体系。但核心insight更多是"将已有工具组合用于新场景"，扩散模型本身在NLP和图像生成中并非新概念，any-to-any多模态统一建模也已有AnyGPT等工作。与同期discrete flow matching路线（如NeXT-Omni）的差异仅在论文中以"解码机制不同"一句话带过，未提供实验或深入分析，削弱了创新性的说服力。
*   技术严谨性 (0.9/1.5)：Mask diffusion的数学推导正确，训练损失定义清晰，三阶段训练逻辑合理。但存在多个严谨性问题：(1) Attenuated tail-pad masking的 \(\gamma = 0.6\) 缺乏敏感性分析，仅凭经验设定；(2) Position penalty中 \(N_t = L - 100\) 的设定过于ad-hoc，不同分辨率图像可能需要不同参数，未讨论泛化性；(3) Adaptive token length的3.5倍和0.2倍系数来源未交代实验验证，对语速/语言/说话人的鲁棒性未知；(4) 重复纹理生成的原因分析（"从两端同时解码"）有一定合理性但缺乏理论或实验支撑。
*   实验充分性 (0.6/1.5)：(1) 对比基线过时：mPLUG-Owl、LLaVA、InstructBLIP均为2023年工作，2024-2025年的主流系统（Qwen2-VL、GPT-4o、Gemini等）完全缺失，这使得"comparable or even better"的结论缺乏在当代标准下的支撑；(2) ASR WER 6.69%在LibriSpeech上远非competitive，论文将其与GLM-4-Voice的2.82%放在同一语境下讨论有误导性，且未深入分析扩散模型在ASR上表现不佳的原因；(3) Text-to-image CLIP-T 0.236明显偏低，未与Stable Diffusion等专用系统对比或讨论差距原因；(4) 消融仅覆盖position penalty，attenuated tail-pad masking、adaptive length、pre-infilling的独立定量贡献未量化；(5) Spoken VQA评估仅通过CosyVoice2将MME文本题转为语音，无真正的spoken VQA benchmark对比。
*   清晰度 (0.7/1)：整体架构清晰，图1和图2较好地概括了系统设计。但存在多处模糊：(1) Dream-7B的具体架构（层数、hidden dim、attention heads）未给出，需查阅外部论文；(2) Entropy-based decoding中top-k的具体值、classifier-free guidance的scale未说明；(3) SDVI数据集构建的质量控制流程有描述，但最终数据集的统计特性（平均文本长度、语音时长分布等）缺失；(4) 训练硬件完全未说明，影响资源评估。
*   影响力 (0.8/1.5)：作为mask discrete diffusion在多模态any-to-any方向的早期探索，证明了非自回归架构在该场景下的可行性，对同时研究扩散模型和多模态的两类社区有交叉参考意义。与NExT-Omni（discrete flow matching路线）形成了互补的探索方向。南京大学与腾讯的合作增加了工业界关注的可能。但实际影响力受限：核心指标（CLIP-T 0.236、ASR WER 6.69%）远低于实用水平，难以推动落地或大幅改变研究方向。
*   开源 (1.0/1.5)：论文声明"Codes are released at GitHub"，提供了代码仓库，但未包含模型权重，SDVI数据集未公开。代码仓库的具体文档完整度无法从当前信息确认。有代码无权重，限制了即时的可用性和验证。
*   可复现性 (0.3/0.5)：训练细节较完整：优化器、学习率、batch size、各阶段数据配比均有说明，关键超参数（\(\gamma = 0.6\)等）明确给出。但训练硬件（GPU型号、数量、训练时长）完全缺失，对大规模多模态训练的复现至关重要。三阶段的精确epoch/step数未说明，阶段切换标准不明确。推理中top-k、CFG scale等关键参数缺位，无法完全复现论文报告的结果。
*   工程/实践价值 (0.6/1.5)：三阶段训练pipeline和SDVI数据构建流程有一定的工程参考价值，对想将扩散语言模型扩展到多模态的团队提供了可操作的方案。Attenuated tail-pad masking和adaptive length等trick可在类似项目中复用。但整体离工业级pipeline有较大距离：图像生成质量不足以替代专用模型，ASR性能显著落后于生产系统，训练资源需求不透明。

### 🚨 局限与问题

论文明确承认的局限：
1. 模型尚未扩展到instruction-based visual content editing等更复杂的下游任务，计划通过scale数据和模型参数解决（Section C）。
2. 当前仅覆盖text、image、speech三种模态，未涉及video、music等。

审稿人发现的潜在问题：
1. 对比基线严重过时：论文仅在2023年baseline上验证性能，未与Qwen2-VL、GPT-4o、Gemini、LLaMA-3.2-Vision等2024-2025年主流多模态系统对比。"comparable or even better"的结论建立在不充分的比较基础之上。
2. ASR性能的致命缺陷被淡化：LibriSpeech WER 6.69%是GLM-4-Voice（2.82%）的2.4倍，在标准benchmark上属于不可接受的指标。论文将ASR结果与TTS的优异表现并列，未专门分析扩散模型在语音识别任务上的根本性局限，有掩盖弱点的嫌疑。
3. 图像生成质量远离实用：CLIP-T 0.236、CLIP-I 0.662，远低于专用扩散模型（DALL-E 3、SDXL等通常在CLIP-T > 0.30、CLIP-I > 0.75的水平）。论文未与任何纯图像生成系统对比，也未讨论这一巨大差距的来源（是模型容量问题？扩散步数问题？还是离散token的固有信息损失？）。
4. 缺乏与discrete flow matching路线的实质性对比：NeXT-Omni等同期工作与Omni-Diffusion在技术上高度相关（均探索非自回归多模态建模），论文仅在related work中以"DFM一次refine全序列、MDM逐步解码top-k"的机制区别定性区分，未提供任何实验对比或深入分析优劣。
5. SDVI数据集的语音质量风险未受控：SDVI数据集完全依赖Cosyvoice2的TTS合成语音，合成语音可能存在音质退化、韵律不自然等问题。论文未评估合成语音的ASR WER或MOS分，无法排除"模型在SDVI上的表现部分源于对合成语音artifacts的过拟合"这一替代解释。
6. 自适应长度分配的鲁棒性未知：TTS的3.5倍系数和ASR的0.2倍系数完全经验设定，对不同语速（如快语速的VoxPopuli）、不同语言、不同性别的泛化性未经实验检验。错误估计长度可能导致语音截断或冗余空白。
7. 推理tricks的组合贡献未解耦：position penalty、special token pre-infilling、adaptive token length assignment三者叠加使用，但消融仅独立测试了position penalty。其余技巧是否互相依赖、是否存在负面交互、各自独立贡献多大均无量化分析，存在"堆trick过拟合评测设定"的风险。
8. 论文声称的"首个完全基于mask-based discrete diffusion的any-to-any系统"可能过于绝对：同期已有Dimple（Yu et al., 2025）、LLaDA-V（You et al., 2025）等工作探索扩散多模态模型，论文未明确区分这些工作的差异和自身"首个"claim的边界。

---

[← 返回 ICML 2026 论文速递](/audio-paper-digest-blog/posts/2026-07-04/)
