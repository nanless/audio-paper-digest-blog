---
title: "JaiTTS: A Thai Voice Cloning Model"
date: 2026-05-01
draft: false
tags: [语音合成, 语音克隆, 自回归模型, 流匹配, 低资源]
categories: [论文速递]
description: "语音合成 | 7.5/10"
hiddenInHomeList: true
---

# 📄 JaiTTS: A Thai Voice Cloning Model

#语音合成 #语音克隆 #自回归模型 #流匹配 #低资源

✅ **7.5/10** | 前25% | #语音合成 | #自回归模型 | #语音克隆 #流匹配 | [arxiv](https://arxiv.org/abs/2604.27607v1)

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 0.0 | 置信度 中


### 👥 作者与机构

- 第一作者：Jullajak Karnjanaekarin (Jasmine Technology Solution)
- 通讯作者：未明确说明（论文提供了共同邮箱 jts.ai.team@gmail.com）
- 作者列表：
    - Jullajak Karnjanaekarin (Jasmine Technology Solution)
    - Pontakorn Trakuekul (Jasmine Technology Solution)
    - Narongkorn Panitsrisit (Jasmine Technology Solution)
    - Sumana Sumanakul (Jasmine Technology Solution)
    - Vichayuth Nitayasomboon (Jasmine Technology Solution)
    - Nithid Guntasin (Sirindhorn International Institute of Technology)
    - Thanavin Denkavin (Sirindhorn International Institute of Technology)
    - Attapol T. Rutherford (Jasmine Technology Solution, Chulalongkorn University Department of Linguistics)

### 💡 毒舌点评

JaiTTS在泰语这一垂直赛道上确实“秀了一把肌肉”，性能数据（如CER低于人类基准）和人类盲测胜率都相当漂亮，证明了其在目标语言上的强大实力。然而，论文对模型“黑箱”的保护可谓严密，除了引用VoxCPM作为骨架，核心训练细节（如参数规模、优化器设置）几乎全部隐去，且没有任何开源复现的迹象，这使得其卓越的性能更像一个无法验证的“展示柜”，而非可供学术共同体推进的“开放工具”。

### 🔗 开源详情

- 代码：论文中未提及代码链接
- 模型权重：论文中未提及模型权重链接
- 数据集：论文中未提及数据集公开链接。论文中描述了一个内部泰语语音语料库（约10,000小时）及评估集（短时评估集源自Thai Common Voice，长时评估集源自YouTube），但未提供任何公开获取方式。
- Demo：论文中未提及在线演示链接
- 复现材料：论文中未提及训练配置、检查点等具体复现材料。论文指出模型架构基于`VoxCPM`并使用`MiniCPM-4`进行初始化，但未提供实现这些步骤的具体代码或权重。
- 论文中引用的开源项目：
    - Qwen3-TTS系列：论文作为基线对比的开源多语言TTS模型。
    - ThonburianTTS：论文作为基线对比的开源泰语TTS模型，基于`F5-TTS`。
    - VoxCPM：论文的模型架构来源，一个无分词器的自回归TTS模型。
    - MiniCPM-4：论文的`TSLM`模块初始化来源，一个解码器-only Transformer语言模型。
    - Typhoon-Whisper-Large-v3：论文用作ASR模型，用于计算CER指标。
    - WavLM-Large：论文用作说话人嵌入提取模型，用于计算SIM指标。

## 补充信息

- [核心摘要] 补充：论文明确指出，这是首个在泰语上实现并系统评估 VoxCPM 架构的模型。这强调了其在特定语言和技术路径上的开创性。
- [模型架构] 补充：论文明确说明其架构改编自 VoxCPM (Zhou et al., 2025)，并在图1注释中注明“Figure adapted from Zhou et al. (2025)”。这进一步确认了其核心架构的来源和与原创工作的关系。
- [细节详述] 补充：论文明确指出未进行消融实验（“We do not conduct ablation studies”）。这意味着论文未验证其架构中如RALM、FSQ等具体组件的必要性或贡献。
- [实验结果] 补充：
    1.  CER优于人类基准的解释：论文在结果部分解释，合成音频的CER略优于人类基准，“likely because synthesized audio tends to be cleaner than natural human speech”。
    2.  人类评估细分结果：提供了与每个商业模型对比的详细票数：
        - 对阵 ElevenLabs eleven_v3：胜161，平19，负20（共200次）。
        - 对阵 MiniMax speech-2.8-hd：胜122，平40，负38（共200次）。
    3.  ThonburianTTS 失败原因：论文指出，ThonburianTTS在长时长基准上失败，“possibly because it is not trained on the longer speech snippets”，因此被排除在长时长评估之外。
- [评分理由/论文自我声明的局限性] 补充：论文在结论部分明确自我声明了主要局限性：“We acknowledge that the primary limitation of this work is the lack of open-source release.” 这直接印证了分析中关于开源加成为0分的核心理由。
- [细节详述 - 训练细节] 补充：论文未提及任何训练硬件、具体优化器、学习率等信息。分析已准确指出此遗漏，此处确认论文原文确实未提供这些细节。

### 📌 核心摘要

1.  解决的问题：现有开源多语言TTS模型对泰语支持不足，而专用泰语模型在零样本克隆和长时合成上能力有限，且传统流程需复杂文本规范化以处理泰英语混用和数字输入。
2.  方法核心：基于VoxCPM无tokenizer架构，构建JaiTTS-v1.0。模型采用分层语义-声学建模，核心包括规划语义韵律的TSLM、用于正则化的FSQ层、精修声学细节的RALM，以及通过流匹配生成连续语音潜在块的LocDiT。模型直接处理原始文本，无需显式文本规范化。
3.  新颖之处：这是首个在泰语上实现并系统评估VoxCPM架构的模型；提出了涵盖1-30秒语音的泰语新基准；实现了端到端处理未经规范化的、包含数字和泰英语混杂的文本。
4.  主要实验结果：在短时长基准上，JaiTTS-v1.0的CER为1.94%，优于所有基线并略超人类基准(1.98%)；在长时长基准上，CER为2.55%，接近人类(2.47%)。其RTF为0.1136，合成速度比Qwen3-TTS快约13倍。在与商业模型的400次人类盲测中，JaiTTS-v1.0赢得了283次。

| 模型 | 短时长 (1-15s) CER (%) ↓ | 短时长 SIM ↑ | 长时长 (16-30s) CER (%) ↓ | 长时长 SIM ↑ | RTF ↓ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Human (Ground Truth) | 1.98 | 0.61 | 2.47 | 0.83 | - |
| Qwen3-TTS-0.6B | 3.14 | 0.62 | 6.10 | 0.79 | 1.5092 |
| Qwen3-TTS-1.7B | 2.56 | 0.62 | 3.64 | 0.78 | 1.5409 |
| ThonburianTTS | 6.26 | 0.48 | – | – | 0.1150 |
| JaiTTS-v1.0 | 1.94 | 0.62 | 2.55 | 0.76 | 0.1136 |

![Figure 2: Head-to-head human judgment results](https://arxiv.org/html/2604.27607v1/voxcpm_architecture.png)
图1：展示了JaiTTS-v1.0的核心架构（VoxCPM）。文本和参考语音嵌入输入TSLM，规划出语义-韵律表征；经FSQ层量化为半离散骨架后，由RALM补充细粒度的声学和说话人特征；最后，LocDiT利用融合后的条件信息，通过流匹配过程解码生成连续的语音潜在块。这一分层设计将语义规划与声学渲染解耦。

5.  实际意义：为泰语生态提供了当前最先进的开源语音克隆技术基础，显著降低了处理现实世界混乱文本（混杂英文、数字）的语音合成门槛，可能赋能教育、金融、医疗等多个领域的泰语语音应用。
6.  主要局限性：模型架构并非全新提出，而是对VoxCPM的适配；训练数据规模（约10，000小时）和具体构成细节披露有限；最关键的是，论文未提供模型权重、代码或任何可复现的资源，严重阻碍了学术验证和后续研究。

### 🏗️ 模型架构

JaiTTS-v1.0的整体架构是自回归式的，以分层方式生成连续的语音潜在块（latent patches）。其完整流程为：输入原始文本和一段参考语音波形，模型输出对应的语音序列。

核心组件及数据流如下：
1.  局部音频编码器 (LocEnc)：将历史生成的VAE潜在块序列 \( \mathbf{Z}_{<i} \) 压缩为紧凑的声学嵌入序列 \( \mathbf{E}_{<i} \)，为后续模块提供高效声学上下文。
2.  文本-语义语言模型 (TSLM)：这是一个从MiniCPM-4初始化的仅解码器Transformer。它接收经过BPE分词的文本 \( \mathbf{T} \) 和历史声学嵌入 \( \mathbf{E}_{<i} \)，输出连续的语义-韵律表征 \( h_i^{\text{TSLM}} \)。它负责“说什么”和“怎么说”的高层规划。
3.  有限标量量化 (FSQ)：将TSLM输出 \( h_i^{\text{TSLM}} \) 投影到一个结构化格点上，生成半离散骨架 \( h_i^{\text{FSQ}} \)。这是一个有损瓶颈，但通过直通估计器保持可微分性，起到正则化作用，稳定了语义信号。
4.  残差声学语言模型 (RALM)：另一个仅解码器Transformer，专注于声学表达和说话人特征。它条件化于TSLM的文本侧隐藏状态、历史FSQ骨架 \( H_{<i}^{\text{FSQ}} \) 和历史声学嵌入 \( \mathbf{E}_{<i} \)，生成残差表征 \( h_i^{\text{res}} \)。它弥补了离散瓶颈（FSQ）无法表达的连续声学细节。
5.  最终条件融合：将骨架与残差相加，得到最终条件信号 \( h_i^{\text{final}} = h_i^{\text{FSQ}} + h_i^{\text{res}} \)。
6.  局部扩散Transformer (LocDiT)：一个双向Transformer，通过流匹配（Flow Matching）去噪过程解码下一个语音潜在块 \( z_i \)。它接收最终条件 \( h_i^{\text{final}} \)、前一个块 \( z_{i-1} \) 和扩散时间步。将前一块纳入条件使每个局部解码都成为一个“外绘”任务，改善了跨块的连续性。
7.  停止预测器：一个轻量级模块，消费FSQ骨架 \( h_i^{\text{FSQ}} \) 并输出一个二值logit，预测当前块是否为序列末尾，用于决定何时终止自回归生成。

![JaiTTS Architecture](https://arxiv.org/html/2604.27607v1/voxcpm_architecture.png)
图1: JaiTTS-v1.0的架构图（源自VoxCPM）。此图清晰展示了上述分层流程：TSLM（规划）→ FSQ（量化）→ RALM（精修）→ LocDiT（解码）。Stop-prediction head从FSQ输出后引出，控制生成长度。

关键设计选择及动机：无tokenizer设计，直接操作连续语音潜在空间，避免了离散语音编解码器（如VQ-VAE）可能带来的信息损失和泰语音素（如声调、辅音丛）建模不足的问题。TSLM与RALM的显式分离，将语义规划与声学渲染解耦，避免了任务纠缠，理论上能提升模型对两者各自特性的建模能力。

### 💡 核心创新点

1.  面向泰语的端到端无归一化TTS系统：首次将VoxCPM的无tokenizer、自回归连续生成架构成功应用于泰语，并实现了直接处理原始文本（含未规范化数字、泰英语混用）的能力。之前方法的局限在于，泰语TTS管线要么依赖复杂的文本规范化预处理，要么在多语言模型中泰语性能不佳。该创新简化了部署流程并提升了现实场景适用性。
2.  泰语语音克隆新基准与SOTA性能：提出了划分短时长(1-15s)与长时长(16-30s)的泰语语音克隆评估基准，并在该基准上证明了JaiTTS-v1.0在CER、SIM和RTF上全面超越现有开源模型，CER甚至略优于人类基准。收益是为该领域树立了新的、更贴近实际的评估标准和性能标杆。
3.  分层语义-声学建模与高效推理：延续了VoxCPM的TSLM-FSQ-RALM-LocDiT分层设计，通过FSQ瓶颈将规划与渲染解耦。收益是带来了极高的推理效率（RTF=0.1136），在保持高质量的同时，合成速度比主流自回归模型快一个数量级。

### 🔬 细节详述

- 训练数据：约10，000小时的泰语中心语音语料库。数据来自通用领域（如播客）和四个垂直领域（金融、医疗、教育、法律）。包含录音棚高质量音频和众包音频。所有音频通过ASR管线自动转录，并经过多步后处理和验证。未说明具体的音频采样率、说话人数量分布、数据去重方法等细节。
- 损失函数：主要损失为两项之和：
    1.  流匹配损失 \( \mathcal{L}_{\text{FM}} \) (公式4)：用于训练LocDiT的速度场 \( v_{\theta} \)，目标是回归给定时间步t下语音潜在块从噪声到干净样本的插值路径的时间导数。
    2.  停止预测损失 \( \mathcal{L}_{\text{Stop}} \) (公式5)：二元交叉熵损失，训练停止预测器 \( s_{\theta} \) 判断当前块是否为最后一个。
    组合损失为 \( \mathcal{L} = \mathcal{L}_{\text{FM}} + \lambda \mathcal{L}_{\text{Stop}} \)，通过直通估计器端到端反向传播。
- 训练策略：论文未提及学习率、warmup、batch size、优化器、总训练步数/轮数、调度策略等具体训练超参数。说明为了支持分类器自由引导，训练时以0.1的概率随机丢弃输入到LocDiT的语言模型条件。
- 关键超参数：未说明模型的具体参数量（TSLM、RALM、LocDiT的层数、隐藏维度等）、FSQ的量化步长Δ和范围L的具体值。仅提及TSLM初始化自MiniCPM-4。
- 训练硬件：未说明使用的GPU/TPU型号、数量及总训练时长。
- 推理细节：使用条件器自由引导（cfg_value=2.5），LocDiT的推理去噪步数为10。推理时，模型自回归生成潜在块，直到停止预测器发出结束信号。
- 正则化或稳定训练技巧：除了FSQ层本身的正则化作用，训练中对LocDiT条件输入进行随机丢弃（概率0.1）以支持推理时的引导。

### 📊 实验结果

- 主要基准与指标：在两个自建的泰语语音克隆基准上评估：
    1.  短时长基准（1-15秒）：1，000条来自过滤后Common Voice测试集的语句。
    2.  长时长基准（16-30秒）：231条来自YouTube的、转录经过人工核对的语句。
    评估指标为：字符错误率（CER，使用Typhoon-Whisper-Large-v3 ASR模型计算）和说话人相似度（SIM，使用WavLM-Large模型）。
- 与最强基线对比：在短时长任务上，JaiTTS-v1.0 (CER 1.94%) 优于最强开源基线Qwen3-TTS-1.7B (2.56%)，并微弱超越人类基准 (1.98%)。在长时长任务上，JaiTTS-v1.0 (CER 2.55%) 远优于Qwen3-TTS-1.7B (3.64%) 和 Qwen3-TTS-0.6B (6.10%)，接近人类水平 (2.47%)。
- 消融实验：论文未提供任何消融实验来验证其架构中各个组件（如RALM、FSQ）的必要性。
- 细分结果：
    - 计算效率：在RTF对比中（表2），JaiTTS-v1.0 (0.1136) 比Qwen3-TTS系列模型快约13倍，与NAR模型ThonburianTTS相当。
    - 人类评估：在针对泰语的、包含混杂输入文本的400次成对盲听比较中（图2），JaiTTS-v1.0对阵ElevenLabs eleven_v3胜161/200次，对阵MiniMax speech-2.8-hd胜122/200次。总胜率283/400 (70.75%)。
    - SIM对比：在短时长任务上，JaiTTS-v1.0的SIM (0.62) 与人类 (0.61) 和Qwen3-TTS系列持平。在长时长任务上，其SIM (0.76) 略低于人类 (0.83) 但高于Qwen3-TTS-0.6B (0.79)。
- 图表引用：
    - 表格1：客观评估结果见上文摘要部分。
    - 表格2：实时因子(RTF)对比。
    | 模型 | RTF ↓ |
    | :--- | :---: |
    | Autoregressive (AR) |
    | Qwen3-TTS-0.6B | 1.5092 |
    | Qwen3-TTS-1.7B | 1.5409 |
    | JaiTTS-v1.0 | 0.1136 |
    | Non-Autoregressive (NAR) |
    | ThonburianTTS | 0.1150 |
    - 图2（人类评估投票结果）：由于提供的图片URL是架构图，此处根据论文文字描述说明。该图应为柱状图，展示了JaiTTS-v1.0与两个商业模型在人类盲测中的胜、平、负次数分布，直观体现了其优势。

### ⚖️ 评分理由

- 学术质量：6.0/7。论文在解决一个具体的工程与科学问题（高质量泰语TTS）上取得了坚实成果，实验设计合理（包含新基准和人类评估），结果可信且优异。主要扣分项在于：架构为借鉴而非原创；关键训练细节完全缺失，可复现性极差；未进行消融研究来深入验证其设计选择。
- 选题价值：1.5/2。在低资源语言（泰语）领域实现SOTA具有明确的应用价值和学术填补空白的意义。该工作直接面向实际需求（处理混乱文本），潜在影响明确。但相对于更广泛的多模态或基础模型研究，其选题的前沿性和普适影响力稍弱。
- 开源与复现加成：0.0/1。论文未提供代码、模型权重、数据集或详尽的训练配置。这是最大的缺陷，导致一项优秀的实验工作几乎无法被验证、比较或利用，严重削弱了其学术贡献的扩散潜力。

---

[← 返回 2026-05-01 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-05-01/)
