---
title: "MERaLiON-GR: Speech Gender Recognition Model for English and SEA Languages"
date: 2026-08-06
draft: false
tags: [语音属性识别, LoRA, 多语言, 预训练, 音频理解]
categories: [论文速递]
description: "语音属性识别 | 7.5/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.04433"
---

# 📄 MERaLiON-GR: Speech Gender Recognition Model for English and SEA Languages

标签：#语音属性识别 #LoRA #多语言 #预训练 #音频理解

**7.5/10** | 创新 1.2/2 | 严谨 1.1/1.5 | 实验 1/1.5 | 清晰 0.8/1 | 影响 1/1.5 | 开源 1/1.5 | 复现 0.3/0.5 | 工程 1.1/1.5

✅ **7.5/10** | 前25% | 文档类型：模型报告 | 评分置信度：中 | #语音属性识别 | #LoRA | #多语言 #预训练 | [arxiv](https://arxiv.org/abs/2608.04433)


### 👥 作者与机构

- 第一作者：未说明。论文按 MERaLiON Team 字母顺序署名，无法据此认定第一作者。
- 通讯作者：Qiongqiong Wang（wang_qiongqiong@a-star.edu.sg）
- 作者列表（论文 Section 8，字母序）：Aw Ai Ti、Chen Fang Yih Nancy、Chiu Ying Lay、Ding Yang、He Yingxu、Jiang Ridong、Liu Zhuohan、Lu Yanfeng、Ma Yi、Muhammad Huzaifah Bin Md Shahrin、Nabilah Binte Md Johan、Nattadaporn Lertcheva、Pham Minh Duc、Sailor Hardik Bhupendra、Siti Umairah Binte Mohammad Salleh、Sun Shuo、Tarun Kumar Vangani、Wang Qiongqiong、Wong Heng Meng Jeremy、Wu Jinyang、Zhang Longyin
- 机构：Institute of Advanced Intelligence and Computing (IAIC), A*STAR, Singapore

### 💡 毒舌点评

把 LoRA 微调的大 Conformer 与 ECAPA-TDNN 下游网络拼起来做性别识别，系统集成和评测覆盖度确实比一般任务报告完整，模型权重和 demo 也开放了。但方法本身没有提出新的学习范式或模型模块，缺少消融、缺少统计显著性检验、缺少模型规模与推理效率数据，训练数据和内部评测集也不开放。所谓“consistent surpasses SOTA”实际是 15 个测试集上 12 胜、1 平、2 负，只能算限定条件下的工程优势，不能被视为方法层面的突破。

### 📌 核心摘要

论文提出 MERaLiON-GR，一个面向英语和东南亚语言的语音性别识别模型。该模型以 MERaLiON-SpeechEncoder-2 的 24 层 Conformer 为骨干，通过 LoRA 做参数高效微调，并用层注意力融合 25 个隐层表示，再接 ECAPA-TDNN 和轻量线性分类头输出女性/男性。模型在 15 个公开多语言测试集上相比 Vox-Profile 取得 12 个更高、1 个持平、2 个更低的结果；在内部新加坡四语 2 秒段级评测中均超过 Vox-Profile，最高提升 4.32 个百分点。将预测性别作为元数据注入 Audio-LLM 后，在报告的 8 个测试集上均提升了性别相关问答准确率，例如越南语 Common Voice 从 36.08% 提升到 96.08%。主要局限是训练数据和内部评测集未公开，缺少消融实验与显著性检验，创新以系统组合为主。

### 🔗 开源详情

- 代码：论文中未提及代码链接，未提供 MERaLiON-GR 的 GitHub 或其他代码仓库链接。
- 模型权重：
  - MERaLiON-GR-v1：https://huggingface.co/MERaLiON/MERaLiON-GR-v1
  - 骨干模型 MERaLiON-SpeechEncoder-2：https://huggingface.co/MERaLiON/MERaLiON-SpeechEncoder-2
  - 对比模型 MERaLiON-v2 / MERaLiON-2-10B：https://huggingface.co/MERaLiON/MERaLiON-2-10B
  - 论文未提及上述模型的具体开源协议。
- 数据集：
  - 训练数据：VoxCeleb1、IMDA PART1–5（新加坡 IMDA 大规模语音语料，衍生自 NSC）。论文未给出这些数据的直接下载 URL，也未说明训练切分方式。
  - 评估数据：SG-ECMT（专有数据，未公开）、FLEURS、IEMOCAP、Common Voice、SMALDUSC、OpenSLR SLR65、EmoTa、THAI-SER、Thai Elderly Speech、IndoWaveSentiment、Khmer FLEURS。
  - 论文中未提供这些公开数据集的具体下载链接或开源协议说明。
- Demo：https://meralion.org/analysis
- 复现材料：论文包含较详细的训练配置，包括：使用 VoxCeleb1 + IMDA PART1–5；batch size 为 32；训练 15 epochs；单张 NVIDIA H100；LoRA 适配器学习率 \(5\times10^{-5}\)、权重衰减 \(5\times10^{-4}\)；下游分类网络学习率 \(6\times10^{-4}\)、权重衰减 \(8\times10^{-5}\)；余弦学习率调度，线性 warm-up 比例 0.08；标签平滑 \(\epsilon=0.1\)；使用类别平衡加权交叉熵损失；最终对验证集损失最低的 4 个 checkpoint 进行权重平均。未提及完整训练代码或配置文件链接。
- 论文中引用的开源项目：
  - wenet-e2e/wespeaker：https://github.com/wenet-e2e/wespeaker（用于 WavLM-ECAPA 基线模型）
  - 其他提及但论文中未给出链接的开源模型/方法：HuBERT、wav2vec 2.0、WavLM、ECAPA-TDNN、Best-RQ、LoRA、Vox-Profile、MERaLiON-AudioLLM framework。

### 🏗️ 方法概述和架构

MERaLiON-GR 是一个可联合训练的多阶段语音分类模型。输入语音经过 MERaLiON-SpeechEncoder-2 骨干编码，骨干为 24 层 Conformer，训练时保持冻结；性别适配由 LoRA 低秩更新和 ECAPA-TDNN 下游网络完成。整体数据流为：语音 → Conformer 各层隐藏表示 → 时间维池化 → 层注意力加权聚合 → 512 维投影 → 三个 SE-Res2Net 块 → attention pooling → 256 维 embedding → RMSNorm + GELU 分类头 → female/male logits。

第一，骨干网络 MERaLiON-SpeechEncoder-2。它是基于 Conformer 的 Transformer 编码器，使用 Best-RQ 预训练目标，训练语料包含英语和多种东南亚语言，尤其包含较大比例的新加坡英语。论文未说明模型总参数量、输入特征形式、采样率、帧长帧移和隐藏维度，只明确骨干有 24 个 Transformer 层，并保留输入 embedding 加上 24 层输出共 25 个隐状态。为降低全量微调的计算成本和灾难性遗忘风险，论文只在注意力投影层插入 LoRA 适配器；LoRA rank 和 scaling factor 均设为 16，使用 rsLoRA 归一化，LoRA dropout 为 0.05。

第二，层注意力聚合模块。25 个隐状态先各自在时间维上取平均，得到 25 个 per-layer 均值表示；然后通过一个可学习的 soft attention 机制计算权重 \(a_l\)，得到加权组合 \(H=\sum_{l} a_l h_l\)。论文没有给出 attention 权重计算的具体形式，也没有说明是否按层归一化，但动机是不同层分别携带声学、音色、说话人和语言等不同粒度的信息，简单使用最后一层会丢失互补信息，固定加权平均又不如自适应权重灵活。

第三，ECAPA-TDNN 下游网络。聚合表示先投影到 512 维，再进入三个 SE-Res2Net 块，dilation 分别为 1、2、3，SE 通道注意力 reduction factor 为 8。论文特别注明将原始 ECAPA-TDNN 中的 BatchNorm 层替换为 GroupNorm。SE-Res2Net 之后使用 attention pooling 将时变帧聚合成固定维度话语级 embedding \(\mathbf{e}\)；该 embedding 被投影到 256 维，最后通过 RMSNorm 和 GELU 的线性 head 输出两个类别 logits：
\[
\hat{y}=W_{2}\,g\!\left(\mathrm{RMSNorm}(W_{1}\mathbf{e})\right)
\]
其中 \(g(\cdot)\) 表示 GELU 激活。

第四，训练目标与优化。模型使用类别加权交叉熵损失，权重由每类训练样本的有效数量计算，以缓解男女样本不均：
\[
\mathcal{L}_{\text{CE}}=-\sum_{i=1}^{C}w_{i}\,y_{i}\log(\hat{y}_{i})
\]
其中 \(C\) 是类别数，\(y_i\) 和 \(\hat{y}_i\) 分别是第 \(i\) 类的真实标签和预测概率，\(w_i\) 是类别权重。训练时采用 32 样本单数据集 batch 采样，数据集按规模成比例抽样；使用余弦学习率调度和 0.08 线性 warmup；label smoothing 设为 0.1；训练 15 个 epoch，并以开发集 categorical loss 早停。最终模型取验证损失最低的 4 个 checkpoint 做权重平均。

整体结构是单向无反馈的：骨干和各层输出 → 时间池化 → 层注意力加权 → 512 维投影 → SE-Res2Net 块 → attention pooling → 256 维 embedding → RMSNorm + GELU → 2 类 logits。设计上的关键取舍在于：用 LoRA 而非全量微调大模型，降低了显存和数据拟合压力；保留层注意力而非只用最后一层，以利用不同层级的表示；引入 ECAPA-TDNN 而非简单线性池化，是为了获得更强的 speaker-aware 时域建模；用 GroupNorm 代替 BatchNorm 则提高了训练稳定性和对 batch size 的鲁棒性。

### 💡 核心创新点

1. 将 LoRA 参数高效微调引入大规模语音编码器的性别识别任务。论文采用冻结 24 层 Conformer + LoRA 的方式，只更新注意力投影层的低秩增量，配合 rsLoRA 归一化，降低了训练成本和过拟合风险，并在多语言测试集上以较少可训练参数超过 Vox-Profile。

2. 使用层注意力聚合 25 个隐层表示。不同于只取最后一层或简单拼接，论文在 per-layer mean 表示上学习 soft attention 权重，使模型在训练中自适应选择与性别最相关的层。该设计没有单独消融验证，但论文认为其合理性能在 ECAPA-TDNN 前端的整体性能中体现。

3. 在预训练 Conformer 表示之上叠加 ECAPA-TDNN 作为性别识别后端。ECAPA-TDNN 的 SE-Res2Net 和 attention pooling 原本用于说话人识别，论文将其复用到性别识别，并将 BatchNorm 替换为 GroupNorm，以增强短语音片段上的稳定性。

4. 建立英语与东南亚语言的多语言性别识别评测体系。论文覆盖英语、中文、马来语、泰米尔语、泰语、越南语、印尼语、高棉语共 15 个公开测试集和一个内部新加坡四语评测集，跨语言证据比单一语言评测更有说服力。

5. 将预测性别作为 paralinguistic metadata 注入 Audio-LLM，显著提升性别相关问答准确率。该结果与作者在 CPQA 上的前期工作一致，说明显式性别元数据可以作为通用语音大模型的有效条件信号，具有工程实用价值。

### 📊 实验结果

表 1 是公开多语言基准上的性别识别准确率。MERaLiON-GR 在 15 个测试集中有 12 个超过 Vox-Profile，1 个持平（Khmer FLEURS，99.74%），2 个下降（Malay SMALDUSC 下降 4.40 个百分点，Thai THAI-SER 下降 2.09 个百分点）。通用 Audio-LLM MERaLiON-v2 在大多数测试集上明显低于专用模型。最大提升出现在 Tamil EmoTa（+4.71 个百分点）、Vietnamese Common Voice（+3.14 个百分点）和 Indonesian IndoWave（+3.00 个百分点）。

### 表 1：公开数据集准确率（%）
| 语言 | 测试集 | Vox-Profile | MERaLiON-GR | Audio-LLM |
|---|---|---|---|---|
| English | FLEURS | 99.69 | 100.00 | 49.61 |
| English | IEMOCAP | 97.31 | 98.90 | 97.21 |
| English | Common Voice | 92.60 | 93.90 | 52.10 |
| Chinese | Common Voice | 96.10 | 98.10 | 64.80 |
| Malay | SMALDUSC | 97.60 | 93.20 | 57.10 |
| Tamil | OpenSLR | 98.30 | 100.00 | 53.70 |
| Tamil | EmoTa | 94.44 | 99.15 | 69.98 |
| Tamil | Common Voice | 92.30 | 94.00 | 51.60 |
| Thai | THAI-SER | 89.32 | 87.23 | 79.05 |
| Thai | Thai Elderly | 96.57 | 100.00 | 72.18 |
| Thai | Common Voice | 96.52 | 97.86 | 59.97 |
| Vietnamese | Common Voice | 96.08 | 99.22 | 36.08 |
| Indonesian | IndoWave | 95.33 | 98.33 | 71.00 |
| Indonesian | Common Voice | 95.00 | 97.40 | 50.02 |
| Khmer | FLEURS | 99.74 | 99.74 | 69.80 |

表 2 展示将 MERaLiON-GR 预测的性别标签注入 Audio-LLM 后的性别相关问答准确率。GR-AudioLLM 在报告的全部 8 个测试集上都超过未注入的 Audio-LLM，提升最大的有 Vietnamese Common Voice（+60.00）、English FLEURS（+47.70）和 Malay SMALDUSC（+41.20）。需要注意，表 2 只有 8 个测试集，不是表 1 的完整 15 个。

### 表 2：注入性别元数据后的 Audio-LLM 准确率（%）
| 语言 | 测试集 | Audio-LLM | MERaLiON-GR | GR-AudioLLM |
|---|---|---|---|---|
| English | FLEURS | 49.61 | 100.00 | 97.31 |
| English | IEMOCAP | 97.21 | 98.90 | 97.97 |
| Malay | SMALDUSC | 57.10 | 93.20 | 98.30 |
| Tamil | EmoTa | 69.98 | 99.15 | 92.30 |
| Tamil | Common Voice | 51.60 | 94.00 | 89.32 |
| Thai | Common Voice | 59.97 | 97.86 | 72.90 |
| Vietnamese | Common Voice | 36.08 | 99.22 | 96.08 |
| Khmer | FLEURS | 69.80 | 99.74 | 99.74 |

表 3 是内部 SG-ECMT 评测集上的 2 秒段级结果。该评测集覆盖 Singlish、中文、马来语、泰米尔语，每个样本来自 10–30 秒的 in-the-wild 语音。MERaLiON-GR 在四个语言上均超过 Vox-Profile，最大提升为马来语（+4.32 个百分点），其次是泰米尔语（+4.16 个百分点）。

### 表 3：内部 Singapore in-the-wild 数据集准确率（%）
| 语言 | 测试集 | Vox-Profile | MERaLiON-GR |
|---|---|---|---|
| Chinese | SG-ECMT-Chinese | 89.25 | 91.85 |
| Singlish | SG-ECMT-Singlish | 88.45 | 92.10 |
| Malay | SG-ECMT-Malay | 86.56 | 90.88 |
| Tamil | SG-ECMT-Tamil | 90.57 | 94.73 |

论文未报告测试集样本量、置信区间或显著性检验。15 个公开测试集上的提升多在 1–5 个百分点之间，并且存在两个下降数据集，因此“consistently surpasses SOTA”的表述需要限定在具体测试集范围内。

### 🔬 细节详述

- 训练数据：训练集由 VoxCeleb1 和 IMDA PART1–5 组成。IMDA PART1–5 来自新加坡 IMDA 开发的大规模语音语料，衍生自新加坡国家语音语料库（NSC），覆盖带本地口音的朗读语音、日常话题句子、自发对话、新加坡英语与华语/马来语/泰米尔语代码混合语音，以及辩论、金融、情绪等风格化语音。论文未说明每个 partition 的时长、说话人数、男女比例和切分方式。
- 数据预处理：未说明。论文未明确输入特征形式（波形或 log-Mel）、采样率、帧长、帧移、归一化方式，也未提及数据增强。
- 损失函数：类别加权交叉熵，权重基于每类有效样本数（Cui et al., 2019）计算；使用 label smoothing，\(\epsilon=0.1\)。
- 训练策略：batch size 为 32，单 batch 内样本来自同一数据集；数据集按规模成比例采样。训练 15 个 epoch；余弦学习率调度，线性 warmup 比率 0.08；早停依据开发集 categorical loss。最终模型为验证损失最低的 4 个 checkpoint 权重平均。
- 优化器：论文未说明使用 Adam/AdamW 等具体优化器，也未说明梯度裁剪策略。
- 学习率与权重衰减：LoRA 参数组学习率 \(5\times10^{-5}\)、权重衰减 \(5\times10^{-4}\)；下游分类网络学习率 \(6\times10^{-4}\)、权重衰减 \(8\times10^{-5}\)。
- LoRA 超参数：rank=16，scaling factor=16，dropout=0.05，使用 rsLoRA 归一化；插入到注意力投影层。
- 下游网络超参数：ECAPA-TDNN 投影维度 512；三个 SE-Res2Net 块，dilation 为 {1,2,3}；SE reduction factor 8；attention pooling 后 embedding 投影到 256 维；分类头使用 RMSNorm + GELU。论文未给出 SE-Res2Net 的通道数、attention pooling 内部结构、GroupNorm 的 group 数。
- 模型规模：未说明。论文只说明骨干有 24 层和 25 个隐状态，没有给出总参数量、可训练参数量、FLOPs、embedding 维度和模型大小。
- 训练硬件：1 张 NVIDIA H100 GPU。
- 推理细节：未说明。论文没有给出推理时是否使用滑动窗口、单段时长、batch 策略或自动混合精度设置。内部 SG-ECMT 的自动标签生成使用 WavLM-ECAPA 模型，采用 3 秒窗口和 1 秒重叠（即 2 秒 hop）产生逐 2 秒预测，但这不等同于 MERaLiON-GR 的推理配置。
- 内部 SG-ECMT 评测集规模：466 条 Singlish、466 条中文、479 条马来语、469 条泰米尔语。标签由 WavLM-ECAPA 自动估计后经母语标注者人工复核修正。
- 正则化与稳定训练技巧：LoRA dropout 0.05、label smoothing 0.1、checkpoint averaging、GroupNorm、rsLoRA。

### ⚖️ 评分理由

*   创新性 (1.2/2)：将冻结的24层Conformer与LoRA、层注意力聚合及ECAPA-TDNN后端组合成可联合训练的多语言性别识别流水线，并验证性别元数据可增强Audio-LLM；属于有证据的系统级组合创新，但未提出全新学习范式或模块。[A_SUMMARY][A_METHOD]

*   技术严谨性 (1.1/1.5)：架构内部逻辑自洽：LoRA只更新注意力投影，层注意力加权后接ECAPA-TDNN、RMSNorm+GELU分类头的处理链路完整，损失函数和优化目标与任务一致；未发现推导错误或不合理系统假设。[A_METHOD]

*   实验充分性 (1.0/1.5)：公开基准覆盖8种语言15个测试集，与Vox-Profile和Audio-LLM做了端到端对比，并有内部SG-ECMT段级评测；但缺少消融、置信区间和显著性检验，表2只覆盖8个数据集，无法充分支撑“consistently surpasses”的强声明。[A_SUMMARY][A_RESULTS][A_LIMITS]

*   清晰度 (0.8/1)：整体组织清楚，骨干、LoRA、ECAPA-TDNN和训练目标均有说明；但层注意力权重计算的具体形式和是否按层归一化未给出，影响关键公式的可读性。[A_METHOD]

*   影响力 (1.0/1.5)：面向英语和东南亚多语言的性别识别，涵盖语音/音频社区关心的多语言与2秒短语音场景，并证明性别元数据注入Audio-LLM可大幅提升问答准确率；垂直应用价值明确，但影响范围主要集中在语音属性识别领域。[A_SUMMARY][A_RESULTS]

*   开源 (1.0/1.5)：模型权重已在Hugging Face开放（MERaLiON-GR-v1及骨干模型），并提供了在线Demo；但未提供代码仓库，训练数据和内部SG-ECMT评测集未公开，按固定锚点属于只开放部分核心产物，定为1.0。[A_OPEN]

*   可复现性 (0.3/0.5)：论文披露了batch size、epoch、学习率、权重衰减、warmup、label smoothing、checkpoint平均和单卡H100等较完整训练配置；但输入特征形式、模型总参数量、训练切分方式未披露，关键复现步骤仍不足。[A_METHOD][A_OPEN]

*   工程/实践价值 (1.1/1.5)：训练只需单张H100，2秒段级评测显示短语音稳健性，且性别元数据注入Audio-LLM展示系统集成价值；但未报告推理效率和训练显存开销，工程量化证据不足。[A_METHOD][A_RESULTS][A_LIMITS]

### 🚨 局限与问题

论文没有设立独立的“Limitations”章节。讨论部分明确指出，模型在 Malay SMALDUSC 上相比 Vox-Profile 下降 4.40 个百分点，在 Thai THAI-SER 上下降 2.09 个百分点，作者将其归因于 domain mismatch，即训练数据与这两个数据集在录制条件和说话风格上的差异。

### 审稿人发现的潜在问题
1. 缺少消融实验：论文没有验证 LoRA 相对全量微调、ECAPA-TDNN 相对简单池化、层注意力相对最后一层表示分别带来多少提升，因此许多组件级贡献无法被因果归因。

2. 统计证据不足：所有结果为单次准确率，没有置信区间、多次运行方差或显著性检验；12/15 的提升幅度多在 1–5 个百分点之间，可能不显著。

3. 训练数据与评测数据的披露不完整：IMDA/NSC 数据未在论文中提供获取方式，内部 SG-ECMT 评测集是专有的，外部研究者难以独立复现关键结果。

4. 表 2 的结论被过度推广：性别元数据注入 Audio-LLM 的实验只报告了 8 个数据集，但论文在摘要和总结中声称“显著提升性别相关问答”时没有强调这一子集限制。

5. 内部 SG-ECMT 标签由 WavLM-ECAPA 自动生成后人工修正，但论文没有说明自动标签的置信度筛选标准、人工修正比例和标注一致性，标签噪声可能影响段级评测的可靠性。

6. 论文未报告任何推理效率、模型参数量或训练显存开销，这使得“parameter-efficient fine-tuning”和“工程可落地”的说法缺少量化支撑。

7. 模型采用二元女性/男性分类，忽略了更广泛的 gender 分布和性别语音的流动性；这在技术论文中不一定是缺陷，但作为面向真实用户系统的模型，缺少对标签体系边界的讨论。

---

[← 返回 2026-08-06 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-06/)
