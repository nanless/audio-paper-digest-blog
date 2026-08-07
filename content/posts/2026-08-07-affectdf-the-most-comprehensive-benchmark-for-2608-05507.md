---
title: "AffectDF: The Most Comprehensive Benchmark for Speech Deepfake Detection against Emotionally Expressive Attacks"
date: 2026-08-07
draft: false
tags: [语音伪造检测, 基准测试, 语音合成, 语音转换, 音频理解]
categories: [论文速递]
description: "语音伪造检测 | 8.4/10"
hiddenInHomeList: true
paper_digest_pipeline_owned: true
paper_digest_page_type: paper
paper_digest_arxiv_id: "2608.05507"
---

# 📄 AffectDF: The Most Comprehensive Benchmark for Speech Deepfake Detection against Emotionally Expressive Attacks

标签：#语音伪造检测 #基准测试 #语音合成 #语音转换 #音频理解

**8.4/10** | 创新 1.4/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 清晰 0.8/1 | 影响 1.3/1.5 | 开源 1.2/1.5 | 复现 0.3/0.5 | 工程 1/1.5

🔥 **8.4/10** | 前25% | 文档类型：数据集与基准 | 评分置信度：高 | #语音伪造检测 | #基准测试 | #语音合成 #语音转换 | [arxiv](https://arxiv.org/abs/2608.05507)


### 👥 作者与机构

- 第一作者：Aurosweta Mahapatra（Johns Hopkins University）
- 通讯作者：Berrak Sisman（Johns Hopkins University）
- 作者列表：Aurosweta Mahapatra（Johns Hopkins University）、Xiutian Zhao（Johns Hopkins University）、Shreeram Suresh Chandra（Johns Hopkins University）、Zihan Zhang（Johns Hopkins University）、Zongyang Du（Johns Hopkins University）、Ismail Rasim Ulgen（Johns Hopkins University）、Kong Aik Lee（Hong Kong Polytechnic University）、Nicholas Andrews（Johns Hopkins University）、Carlos Busso（Carnegie Mellon University）、Berrak Sisman（Johns Hopkins University）

### 💡 毒舌点评

AffectDF 在情感伪造攻击的覆盖广度上确实做出了有分量的贡献：21种攻击、约260小时、五种情绪、同时含表演性与自发性语音，直接填补了现有情感伪造基准规模小、攻击范式单一的空白。但训练集仅有4个说话人、LALM微调只验证了Voxtral一个模型、所有EER均为点估计且无置信区间，基准的"全面性"尚未完全转化为结论的"稳健性"。更关键的是，"情感训练无法一致提升跨域鲁棒性"这一核心反直觉发现主要建立在少数模型的行为分歧之上，论文未能说明训练数据变化为何会反转表演/自发风格的难度方向。

### 📌 核心摘要

该论文构建了当前规模最大的情感表达语音伪造检测基准 AffectDF，含约260小时语音、21种伪造攻击、五种情绪状态，并同时覆盖表演性（ESD）与自发性（MSP-Podcast）情感语音。与现有情感伪造数据集的本质区别在于，AffectDF 首次系统性纳入TTS、VC、EVC、VC+EVC、LALM-based五种生成范式（原文attack taxonomy列为TTS、VC、EVC、VC+EVC、LALM-based EVC五类），并包含LALM神经元引导（ESN steered）攻击变体。实验表明，现有SDD系统在该基准上性能严重下降：基于ASVspoof2019训练的模型在AffectDF上EER高达29.78%~59.71%，多个系统接近随机水平；训练在ASVspoof5上的ProSDD表现最佳、EER为12.49%，但仍显著高于其在ASVspoof5上的7.38%。关键反直觉发现是，即使在AffectDF上训练，跨数据集泛化仍不一致（如RawNet2在AffectDF训练后ASVspoof2019 EER升至43.02%），说明当前模型依赖的仍是领域与攻击特定线索而非通用伪造表征。该基准为情感伪造检测研究提供了可靠的评测平台，其局限在于训练集说话人数量偏少（4人）、LALM微调仅验证了Voxtral一个模型，以及未进行系统的提示敏感性分析。

### 🔗 开源详情

- 代码：论文中未提及 AffectDF 专用的代码仓库链接；AffectDF 数据集与相关资源入口为：https://affectdf33-data.github.io/AffectDF-Data/
- 模型权重：论文中未提及 AffectDF 自身训练/微调模型的权重发布；文中使用的第三方模型权重来源包括：
  - Qwen2.5-Omni-7B：https://huggingface.co/Qwen/Qwen2.5-Omni-7B
  - Kimi-Audio：https://huggingface.co/moonshotai/Kimi-Audio-7B-Instruct
  - MiniCPM-o 4.5：https://huggingface.co/openbmb/MiniCPM-o-4_5
  - CosyVoice2：https://huggingface.co/FunAudioLLM/CosyVoice2-0.5B
  - CosyVoice3：https://huggingface.co/FunAudioLLM/Fun-CosyVoice3-0.5B-2512
  - Qwen3-TTS：https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-Base
  - Vevo2：https://huggingface.co/RMSnow/Vevo2
  - Qwen3-Omni-30B：https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Instruct
  - Voxtral-Mini-3B：https://huggingface.co/mistralai/Voxtral-Mini-3B-2507
- 数据集：AffectDF 数据集，主页：https://affectdf33-data.github.io/AffectDF-Data/；以 CC BY-NC 4.0 协议发布，仅限研究与非商业用途，包含生成的音频文件和 protocol 文件。论文提到 AffectDF 基于 ESD 和 MSP 构建，但未给出这两个源语料库的下载链接。评估中还使用了 ASVspoof2019-LA、ASVspoof2021、ASVspoof5-Track1、EmoFake、EmoSpoof-TTS 等基准，但论文中未给出这些数据集的链接。
- Demo：论文中未提及在线 Demo 链接（仅有上述 AffectDF 数据项目主页）。
- 复现材料：论文附录中提供了检测模型的可复现训练配置，包括：
  - RawNet2 / AASIST：16 kHz mono，裁剪/填充至 64,600 样本；50 epochs，batch size 32，Adam，学习率 \(1 \times 10^{-4}\)，权重衰减 \(1 \times 10^{-4}\)，weighted cross-entropy，按最低 development loss 选 checkpoint。
  - XLSR-SLS：16 kHz mono，64,600 样本，使用 RawBoost 增强；最多 50 epochs，batch size 5，学习率 \(1 \times 10^{-6}\)，权重衰减 \(1 \times 10^{-4}\)，weighted cross-entropy。
  - XLSR-Mamba：16 kHz mono，66,800 样本，使用 RawBoost 增强；7 epochs，batch size 20，学习率 \(1 \times 10^{-6}\)，权重衰减 \(1 \times 10^{-4}\)，weighted cross-entropy，使用 final-epoch checkpoint。
  - ProSDD：使用已发布的 Stage-I checkpoint 初始化；16 kHz mono，64,000 样本；Stage-II 训练 50 epochs，batch size 64，学习率分别为 XLS-R backbone \(1 \times 10^{-6}\)、projection \(1 \times 10^{-4}\)、classifier \(1 \times 10^{-5}\)；权重衰减 \(1 \times 10^{-4}\)；weighted cross-entropy + supervised masked-prediction loss；speaker/prosodic embeddings 使用发布代码提取。ProSDD 项目页：https://prosdd.github.io/ProSDD_website/
  - LALM 检测：Qwen-2.5-Omni 推理时让模型输出 [0,1] 分数作为伪造概率；Voxtral-FT 推理时计算候选输出 '0' 与 '1' 的负对数似然并做 softmax，取 '1' 的归一化概率作为伪造分数。
  - 附录 C/D 还提供了生成与检测的完整 prompt 和 LALM fine-tuning 细节。
- 论文中引用的开源项目：
  - F5-TTS：https://github.com/swivid/f5-tts
  - StyleTTS2：https://github.com/yl4579/StyleTTS2
  - CosyVoice：https://github.com/FunAudioLLM/CosyVoice
  - GenVC：https://github.com/caizexin/GenVC
  - TriAAN-VC：https://github.com/winddori2002/TriAAN-VC
  - DDDMVC：https://github.com/hayeong0/DDDM-VC
  - RawNet2（ASVspoof 2021 baseline）：https://github.com/asvspoof-challenge/2021/tree/main/LA/Baseline-RawNet2
  - AASIST：https://github.com/clovaai/aasist
  - XLSR-SLS：https://github.com/QiShanZhang/SLSforASVspoof-2021-DF
  - XLSR-Mamba：https://github.com/swagshaw/XLSR-Mamba
  - ProSDD：https://prosdd.github.io/ProSDD_website/
  - RawBoost：论文中仅提到名称，未给出链接
  - 另有上述 HuggingFace 模型权重来源，均属于论文引用的第三方开源模型。

### 🏗️ 方法概述和架构

AffectDF 是一个以数据为中心的基准工作，核心贡献并非提出单一模型，而是搭建了一套**"多源数据→多范式攻击生成→跨说话人/跨攻击分割→多维度评估协议"**的完整评测框架。整体流程为：选取表演性与自发性情感语音作为基础数据，利用21种生成模型构造伪造样本，按照攻击不重叠、说话人不重叠的原则划分训练/开发/测试集，并提供包含情绪标签、攻击ID、生成模型、说话人ID、源语料库等细粒度元数据的协议文件，支持"情绪维度分析、跨域泛化、攻击族对比、表演/自发对比"等六类评估。

下图以总览形式呈现了AffectDF基准的整体结构。

![Figure 1: Overview of AffectDF benchmark, including the proposed dataset, evaluated SDD models, and evaluation dimensions.](https://arxiv.org/html/2608.05507v1/x1.png)

图中将数据集按LALM-EVC、TTS、EVC、VC等生成范式组织，并列出常规SDD、SSL-based与LALM-based三类检测模型以及六项评测维度，直观展示了该基准的多源、多范式与多维评估框架。


**源数据层**：表演性情感语音采用 ESD 语料库，包含10个英语说话人、五个情绪类别（中性、高兴、愤怒、悲伤、惊讶）、平行文本设计，录音环境受控。自发性情感语音采用 MSP-Podcast 语料库，来源于自然播客，说话人、话题、录音条件高度多样化，情绪标注通过感知评估完成。两组语料在录音条件、文本平行性、说话人构成上均存在系统差异，论文将其整理为"表演性vs自发性"的对照变量，并在附录H中明确承认ESD与MSP-Podcast的差异还包括受控vs野外录音、平行vs非平行文本、阅读vs自然语音等。

**攻击生成层**：按生成范式分为五类（原文Table 1中的Generation Type列）：
1. **TTS 类**：包括 CosyVoice/CosyVoice2/CosyVoice3（基于LLM生成语义token与流匹配声学模型的零样本TTS）、StyleTTS2（风格扩散+对抗训练）、F5-TTS（流匹配+DiT非自回归TTS）、Qwen3-TTS（基于Qwen-TTS-Tokenizer-12.5Hz多码本tokenizer的码本语言建模）。TTS生成时输入目标文本与带情感的参考音频，依靠参考语音传导情绪。
2. **VC 类**：包括 GenVC（自监督离散语音token+Perceiver编码+GPT风格自回归解码）、ConsistencyVC（VITS结构，对联合训练的说话人编码器施加说话人一致性损失）、TriAAN-VC（三重自适应注意力归一化注入目标说话人信息）、DDDMVC（解耦去噪扩散模型分别建模内容、韵律、音色）。
3. **EVC 类**：GenVC 与 Vevo2 的情感版本。Vevo2 使用双离散 tokenizer——韵律 tokenizer（建模旋律与节奏）和内容风格 tokenizer（建模语言内容与说话风格），并用自回归内容风格语言模型（基于Qwen2.5-0.5B）+流匹配声学模型+Vocos神经声码器完成波形合成。
4. **VC+EVC 类**：Vevo2 同时以VC和EVC两种配置出现在攻击列表中（A10为VC+EVC，A11为VC），原文将其单列为一种生成类型。
5. **LALM-based EVC 类**：Qwen2.5-Omni、Qwen3-Omni、MiniCPM-o、Kimi-Audio 等端到端多模态模型。采用统一提示词"Repeat the audio word-for-word exactly. Speak with {target_emotion} emotion."实现情感化语音转换。此外，针对 Qwen2.5-Omni 和 Kimi-Audio 还构建了**神经元引导（Steered）变体**——通过情感敏感神经元（ESN）掩码在推理时进行激活干预，不修改任何模型参数，比纯提示词控制更显式地操纵目标情绪。

**数据集分割层**：训练集（A01-A05）含5种攻击、4个说话人、86,999样本（spoof 80,999 : real 6,000）；开发集（A06-A07）含2种攻击、2个说话人、23,330样本（spoof 20,330 : real 3,000）；测试集（A08-A21）含14种攻击、8个说话人（4个ESD+4个MSP-Podcast）、175,468样本（spoof 165,360 : real 10,108）。三个分割之间攻击系统与说话人均不重叠，迫使模型学习跨攻击、跨说话人的泛化伪迹。情绪类别在三个分割中保持近似均衡，排除了样本不均衡对情绪维度分析的影响。攻击家族的构建还设置了配对对照：GenVC、StyleTTS2、F5-TTS 分别同时作用于 ESD 与 MSP-Podcast，生成A13/A14、A18/A19、A20/A21三组"同生成模型、不同基础语料"的对照攻击，两个条件均含4个说话人且说话人身份不相交，用于隔离说话风格的影响。

**评估协议层**：主评估指标为 EER（等错误率），辅助指标为 min t-DCF（仅在ASVspoof2019评估集上计算，因为该数据集提供官方ASV分数与协议）。基准提供了极细粒度的协议文件，允许研究者按情绪标签、攻击ID、生成模型、基础语料库、说话人ID、真实/伪造标签等任意维度组合进行分组分析。论文对 5 个传统/SSL-based SDD 系统（RawNet2、AASIST、XLSR-SLS、XLSR-Mamba、ProSDD）在 3 种训练数据（ASVspoof2019、ASVspoof5、AffectDF）下进行了全量交叉评估，并对 3 个 LALM（Qwen-2.5-Omni、Qwen-3.0-Omni、Voxtral）采用无训练提示推理，对 Voxtral 另进行了 LoRA 微调。此外还设计了低层特征逻辑回归实验，验证 AffectDF 无法通过简单的 RMS、过零率、频谱滚降等低成本信号统计特征进行分类，排除了数据集存在低级捷径的可能性。

### 💡 核心创新点

1. **当前最全面的情感伪造攻击基准**：AffectDF 包含约260小时语音、21种攻击、5种情绪状态，覆盖 TTS、VC、EVC、VC+EVC、LALM-based 多种生成范式，规模是现有情感伪造数据集 EmoFake（42小时、7个EVC攻击）和 EmoSpoof-TTS（29小时、3个TTS攻击）的数倍。这一规模与多样性使跨攻击、跨范式的鲁棒性评估首次成为可能。
2. **首次系统性纳入 LALM 类攻击并区分两种情感控制方式**：除常规提示词引导（Qwen2.5-Omni、Kimi-Audio等）外，还包含基于情感敏感神经元（ESN）激活引导的 Steered 变体。该区分使基准能够评估"隐式提示控制"与"显式神经元干预"两类LALM攻击的检测难度差异。
3. **搭建"表演性 vs 自发性"情感语音对照评估框架**：使用 GenVC、StyleTTS2、F5-TTS 三种模型在 ESD 与 MSP-Podcast 上分别生成配对的表演性与自发性攻击，在控制生成模型不变的前提下改变基础说话风格，隔离出语音风格因素对检测性能的影响。
4. **揭示"情感训练无法一致提升跨域鲁棒性"的反直觉发现**：在 AffectDF 上训练后，RawNet2 对 AffectDF 测试集的 EER 从59.71%（ASVspoof2019训练）大幅降至23.17%，但其在 ASVspoof2019 上的 EER 从4.60%恶化至43.02%；XLSR-Mamba 与 ProSDD 在 AffectDF 训练后跨域性能均明显变差。该结果直接挑战了"更全面的训练数据带来更强泛化"的隐含假设。
5. **设计低层捷径排除验证**：用 RMS、过零率、频谱滚降等8个低层特征的逻辑回归分类器在 AffectDF 上仅达到53.16% EER，证明了数据集难以通过低成本信号统计特征被攻破，增强了基准对模型能力评估的有效性。

### 📊 实验结果

论文以 EER 为指标，在 ASVspoof2019、ASVspoof2021、ASVspoof5、EmoFake、EmoSpoof-TTS、AffectDF 六个数据集上进行了系统评估。以下表格汇总了主方法（5个传统/SSL模型 + 3个LALM配置）的跨域结果，保留主方法、最强基线与关键消融项；完整结果见论文 Table 2-5、Table 12 及附录。

| 模型 | 训练数据 | ASVspoof2019 | ASVspoof5 | EmoFake | AffectDF |
|---|---|---|---|---|---|
| RawNet2 | ASVspoof2019 | 4.60 | 40.67 | 21.71 | 59.71 |
| AASIST | ASVspoof2019 | 0.83 | 35.53 | 13.64 | 56.40 |
| XLSR-SLS | ASVspoof2019 | 0.56 | 25.43 | 8.84 | 44.91 |
| XLSR-Mamba | ASVspoof2019 | 0.20 | 15.54 | 0.69 | 29.78 |
| ProSDD | ASVspoof2019 | 0.42 | 16.14 | 3.70 | 31.04 |
| ProSDD | ASVspoof5 | 19.04 | 7.38 | 25.06 | **12.49** |
| RawNet2 | AffectDF | 43.02 | 44.65 | 6.59 | 23.17 |
| ProSDD | AffectDF | 58.15 | 63.16 | 22.08 | 48.14 |
| Voxtral-FT | ASVspoof2019 | 3.05 | 20.67 | 8.73 | 26.15 |
| Voxtral-FT | AffectDF | 19.52 | 56.54 | 28.96 | 26.09 |
| Qwen-2.5-Omni | 推理式 | 29.54 | 46.23 | 25.15 | 45.29 |

关键结果与最强基线差距：将 XLSR-Mamba 从 ASVspoof2019 切换到 ASVspoof5 训练后，AffectDF EER 从29.78%升至35.27%，而 ProSDD 从31.04%降至12.49%，表明模型间对不同训练域的泛化响应存在强烈分歧。Voxtral 经 ASVspoof2019 微调后在 AffectDF 上 EER 为26.15%，低于多数传统模型，但远未达到其在 ASVspoof2019 上的3.05%水平，说明 LALM 同样受情感分布漂移影响。训练在 ASVspoof5 上的 AASIST 在 AffectDF 上 EER 为18.00%，是仅次于 ProSDD 的第二好结果，但该模型在 EmoFake 上高达62.71%，说明 ASVspoof5 训练带来的情感泛化收益也不一致。

情绪维度分析方面，训练在 ASVspoof2019 上的 XLSR-Mamba 在 AffectDF 上的 sad 类 EER 为21.42%（最低），happy 类为31.78%（最高），差距10个百分点；而 AASIST 则在 sad 类表现最好（41.82%）而 neutral 类最差（65.45%），说明"最难情绪"未随模型稳定，而是受模型架构、训练数据与情绪的交互影响。训练在 AffectDF 上的 XLSR-Mamba 在 neutral 类 EER 高达57.60%，而 angry 类仅24.65%，差距超过30个百分点；ProSDD（AffectDF训练）则在 happy 类最高（50.02%）、surprise 类最低（35.23%）。表演性 vs 自发性对比中，存在显著风格效应：训练在 ASVspoof2019 的 XLSR-Mamba 对表演性 GenVC（A13）EER 仅6.43%，而对表演性 F5-TTS（A20）高达53.70%；同为训练在 ASVspoof5 的 XLSR-Mamba 对自发性 GenVC（A14）仅2.02%，但 A14 在 AffectDF 训练的 ProSDD 上 EER 高达51.86%。该结果证明，表演/自发差异并未形成一致的难度梯度，而是与生成模型和检测架构深度耦合。

下图展示了AffectDF中真实情绪标签与自动情感识别预测之间的混淆矩阵。

![Figure 3: Emotion confusion matrix for AffectDF using Emotion2Vec+-large predictions.](https://arxiv.org/html/2608.05507v1/Confusion_matrix.png)

图中对角线比例显示Neutral与Sad的识别准确率相对较高，而Happy、Angry与Surprise的非对角混淆更明显，说明这些情绪在自动识别中更易相互误判，进一步体现了情感维度对检测任务的挑战。


消融与辅助实验：低层特征逻辑回归在 AffectDF 上仅53.16% EER，接近随机，而同一特征集在 ASVspoof2019 上为33.24%，说明 AffectDF 对简单统计捷径具有鲁棒性。SER 分析（emotion2vec+large）显示 AffectDF 的自动预测情绪分布明显偏离 neutral 主导，而是分散在多个情绪类别中，表明 AffectDF 包含有意义的情感变异性。此外，AffectDF 训练对 EmoSpoof-TTS 的迁移效果显著：RawNet2 在 AffectDF 训练后于 EmoSpoof-TTS 上 EER 仅0.44%，ProSDD 为5.46%，表明 AffectDF 对情感TTS检测提供了可迁移的线索，但收益仍依赖架构。

下图对比了AffectDF与传统SDD基准在自动语音情感识别预测下的归一化情绪分布。

![Figure 2: Normalized emotion distribution from Emotion2Vec+-large predictions across AffectDF and conventional SDD benchmarks.](https://arxiv.org/html/2608.05507v1/SER_pred.png)

图中可见AffectDF在Happy、Angry、Sad、Surprise等非中性情绪上均占有显著比例，而ASVspoof2019与ASVspoof5则高度集中于Neutral，印证了AffectDF具备更丰富情感变异性的结论。

### 🔬 细节详述

- 训练数据：AffectDF 训练集含86,999样本（spoof 80,999 : real 6,000，比例93:07），开发集23,330（spoof 20,330 : real 3,000，比例87:13），测试集175,468（spoof 165,360 : real 10,108，比例94:06）。情感分布五个情绪近似均衡（训练集 neutral 11,800，happy/angry/sad 各18,800，surprise 18,799）。基础语料为 ESD（表演性）与 MSP-Podcast（自发性），ESD 含10个英语说话人，MSP-Podcast 为自发播客语音。配对攻击子集的时长差异显著：表演性 A13/A18/A20 平均时长2.78-3.33秒，自发性 A14/A19/A21 平均时长5.72-6.98秒。
- 损失函数：RawNet2/AASIST/XLSR-SLS/XLSR-Mamba 均使用加权交叉熵，具体权重未说明。ProSDD 使用加权交叉熵与监督掩码预测损失的加权组合，各损失具体权重未说明。Voxtral-FT 使用 LoRA + 仅目标token上的token级交叉熵。
- 训练策略：RawNet2、AASIST 训练50 epochs，batch size 32，Adam优化器，学习率1e-4，权重衰减1e-4，最佳checkpoint按开发集损失选取。XLSR-SLS 至多50 epochs，batch size 5，学习率1e-6，权重衰减1e-4，使用 RawBoost 增强。XLSR-Mamba 7 epochs，batch size 20，学习率1e-6，使用 RawBoost，取最终epoch checkpoint。ProSDD 使用发布的第一阶段checkpoint初始化，第二阶段50 epochs，batch size 64，backbone、projection、classifier 学习率分别为1e-6、1e-4、1e-5，权重衰减1e-4，50%样本应用RawBoost。Voxtral-FT：3 epochs，batch size 1/GPU，16步梯度累积，学习率1e-5，cosine调度与3% warmup，AdamW，LoRA rank 16、α 32、dropout 0.05，LoRA应用于注意力投影与前馈投影模块，最佳checkpoint按最低开发损失选取。
- 关键超参数：音频统一16kHz单声道；RawNet2/AASIST 裁剪/填充64,600样本（约4s）；XLSR-Mamba 66,800样本（约4.2s）；ProSDD 64,000样本（4s）。Voxtral 输入为24kHz单声道。Qwen-3.0-Omni 生成温度0.7、top-p 0.9；Voxtral 温度0.2、top-p 0.95。
- 训练硬件：NVIDIA A100/H100/H100-NVL，共享GPU集群，可访问最多8卡。传统/SSL模型单卡A100训练；Qwen-2.5-Omni 与 Qwen-3.0-Omni 推理需2-3张H100-NVL；Voxtral 推理需1张H100。训练总时长未说明。
- 推理细节：Qwen-2.5-Omni 最大生成6 tokens，3次运行；Qwen-3.0-Omni 采样解码、最大6 tokens、3次推理；Voxtral 最大10 tokens、3次推理。Voxtral-FT 不进行自由生成，而是计算候选token '0'与'1'的负对数似然，经softmax后取'1'的归一化概率作为伪造分数。
- 正则化或稳定训练技巧：RawBoost 用于 XLSR-SLS、XLSR-Mamba 与 ProSDD 第二阶段训练；LoRA 用于 Voxtral 参数高效微调；所有传统模型使用加权交叉熵缓解正负样本不平衡。
- 生成提示词：统一为 "Repeat the audio word-for-word exactly. Speak with {target_emotion} emotion. Do not add or remove any words. Output speech only."；LALM检测提示词要求模型仅返回一个0到1之间的浮点数作为伪造概率。

### ⚖️ 评分理由

*   创新性 (1.4/2)：AffectDF以约260小时、21种攻击、五种情绪和TTS/VC/EVC/VC+EVC/LALM-based五类生成范式，首次系统性纳入LALM及神经元引导变体，并构建表演vs自发性配对对照，覆盖范围和攻击多样性显著超过现有情感伪造基准，创新证据充分。

*   技术严谨性 (1.2/1.5)：数据构建采用攻击不重叠、说话人不重叠分割，提供细粒度元数据协议；但训练集仅4个说话人，且ESD与MSP-Podcast在录音环境、文本平行性等维度混杂，表演/自发结论存在训练数据切换后难度方向反转但未解释的矛盾，技术严谨性受限于这些控制不足。

*   实验充分性 (1.2/1.5)：对5个传统/SSL模型和3个LALM在6个数据集上进行了跨域评估，并补充低层特征捷径检验、SER分析和EmoSpoof-TTS迁移实验，基准覆盖充分；但全部EER为点估计、无置信区间或显著性检验，且缺少时长相匹配的配对子集验证，统计稳健性和混淆控制不足。

*   清晰度 (0.8/1)：对数据集分割、攻击生成范式、评估协议和六类评估维度的描述清晰，并在附录中给出生成提示词、训练配置和MSP-Podcast与ESD差异的明确说明；但表演/自发对照的时长混淆和跨域结果反转等关键结论缺少直观解释，影响读者理解。

*   影响力 (1.3/1.5)：AffectDF是当前规模最大、覆盖最广的情感表达语音伪造检测基准，填补了情感伪造数据集中在LALM攻击和表演/自发对照上的空白，并揭示情感训练无法一致提升跨域鲁棒性的反直觉现象，对语音伪造检测领域有较强推动作用。

*   开源 (1.2/1.5)：AffectDF数据集及protocol文件以CC BY-NC 4.0在项目主页公开，第三方生成/检测模型权重和多数开源项目均有链接，核心数据产物已开放；但论文未提供专用代码仓库、AffectDF自身模型权重、源语料库及ASVspoof等评估数据集下载链接，文档和配套资源不完整。

*   可复现性 (0.3/0.5)：附录提供了RawNet2/AASIST/XLSR-SLS/XLSR-Mamba/ProSDD的训练轮数、batch size、学习率、权重衰减、音频长度、RawBoost和LoRA微调等完整配置，以及LALM推理细节；但未说明训练总时长、部分损失权重，且论文未提供AffectDF专用代码仓库，关键复现步骤仍需依赖第三方实现。

*   工程/实践价值 (1.0/1.5)：构建了约260小时、21种攻击、约28万样本的多范式基准，并设计了攻击/说话人不重叠分割、配对攻击对照、低层捷径排除和多维度评估协议，工程规模和数据治理完整度高；但训练集仅4个说话人、LALM微调只验证Voxtral、无提示敏感性分析，降低了作为工程基准的实践覆盖。

### 🚨 局限与问题

1. **论文明确承认的局限**：
   - 训练集说话人多样性有限，主要原因是 ESD 中英语说话人数量少且需在训练与测试之间保持表演/自发条件的非重叠；少量说话人可能使训练集无法覆盖充分的说话人风格变化。
   - LALM微调仅验证了 Voxtral 一个模型，未对更广泛 LALM 家族进行统一微调比较，对 LALM 检测潜力的理解不完整。
   - 未开展系统的提示敏感性分析；未来需探索情感感知提示、攻击感知提示与多提示校准策略。
   - ESD 与 MSP-Podcast 的差异不只体现在表演/自发维度，也包含录音环境、文本平行性、说话人构成等，论文明确说明未来需进一步隔离这些因素。

2. **审稿人发现的潜在问题**：
   - **"表演性vs自发性"结论的内部矛盾未解释清楚**：在 AffectDF 训练下，RawNet2 的自发性攻击 EER 降至3.64%而表演性攻击仍为18.97%，但同样的模型在 ASVspoof2019 训练下表演性反而更差（55.51% vs 42.74%）。论文将这些变化归因于"模型/训练数据/生成系统交互"，但未提供足够分析解释"为何训练数据变化会反转风格难度方向"。
   - **配对对照的时长混淆未处理**：表演性子集平均时长2.78-3.33秒，自发性子集5.72-6.98秒，差距近一倍。不同检测模型使用固定长度裁剪/填充（4s或4.2s），时长差异会直接影响填充比例与有效语音内容量，但论文未使用时长相匹配的子集验证风格效应是否稳健。
   - **数据集隐私与伦理风险**：MSP-Podcast 的真实说话人语音被用于生成伪造样本，以 CC BY-NC 4.0 发布，但论文仅在伦理声明中说明"不额外发布超出源数据集已有的说话人信息"，未讨论声音肖像授权、说话人匿名化处理或被误用的二次攻击可能性——任何语音深度伪造数据集都应明确这些控制机制。
   - **缺少统计显著性验证**：全部EER报告均为点估计，不同测试子集之间的差异可能落入统计噪声，论文未报告置信区间或显著性检验结果。
   - **LALM推理设置不对称**：Qwen-2.5-Omni和Qwen-3.0-Omni在AffectDF上的推理式EER（45.29%和39.81%）远高于Voxtral微调后的26.15%，但推理式与微调式LALM的比较本身混杂了模型规模、训练数据与推理策略的差异，论文未对此进行控制。

---

[← 返回 2026-08-07 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-08-07/)
