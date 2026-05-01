---
title: "HATS: An Open data set Integrating Human Perception Applied to the Evaluation of Automatic Speech Recognition Metrics"
date: 2026-05-01
draft: false
tags: [语音识别, 模型评估, 数据集, 模型比较]
categories: [论文速递]
description: "语音识别 | 7.0/10"
hiddenInHomeList: true
---

# 📄 HATS: An Open data set Integrating Human Perception Applied to the Evaluation of Automatic Speech Recognition Metrics

#语音识别 #模型评估 #数据集 #模型比较

✅ **7.0/10** | 前25% | #语音识别 | #模型评估 | #数据集 #模型比较 | [arxiv](https://arxiv.org/abs/2604.27542v1)

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 1.0 | 置信度 高


### 👥 作者与机构

- 第一作者：Thibault Bañeras Roux（南特大学 LS2N）
- 通讯作者：Thibault Bañeras Roux（thibault.roux@univ-nantes.fr）和 Richard Dufour（richard.dufour@univ-nantes.fr）（根据邮箱和作者列表推断）
- 作者列表：
    - Thibault Bañeras Roux（南特大学 LS2N）
    - Jane Wottawa（勒芒大学 LIUM）
    - Mickael Rouvier（阿维尼翁大学 LIA）
    - Teva Merlin（阿维尼翁大学 LIA）
    - Richard Dufour（南特大学 LS2N）

### 💡 毒舌点评

亮点：HATS数据集设计巧妙，通过严格的刺激物选择标准（如迫使系统在“分歧点”上比较）和side-by-side协议，有效构建了研究“人类认知与机器指标差异”的高质量数据集，其发布对社区是实实在在的贡献。短板：研究对象局限于法语和特定错误类型的数据集，结论的普适性有待验证；虽然评估了多种指标，但并未提出一个超越现有最佳（SemDist with Sentence-BERT）的新指标，更像是为现有指标“排座次”。

### 🔗 开源详情

## 开源详情
- 代码：https://github.com/thibault-roux/metric-evaluator
- 模型权重：论文中未提及
- 数据集：HATS (Human-Assessed Transcription Side-by-Side)；获取链接为代码仓库 https://github.com/thibault-roux/metric-evaluator；论文中指出该数据集被“freely released to the scientific community”，但未明确具体的开源协议。
- Demo：论文中未提及
- 复现材料：论文中未提及。论文描述了实验设置、ASR系统（如使用Speechbrain和Kaldi）及评估指标，但未提供具体的训练配置、检查点或完整的复现脚本。
- 论文中引用的开源项目：
    - SpeechBrain toolkit: https://github.com/speechbrain/speechbrain
    - Kaldi toolkit: https://github.com/kaldi-asr/kaldi
    - wav2vec 2.0 models: 论文提及使用了French wav2vec 2.0模型 [6]，但未给出具体模型链接。
    - fastText: 论文中用于EmbER指标 [14, 3]，但未给出具体链接。
    - CamemBERT: https://camembert-model.fr (论文中给出的链接) [24]
    - FlauBERT: 论文提及 [22]，但未给出具体链接。
    - SentenceBERT: 论文提及 [31]，但未给出具体链接。
    - BERT (multilingual): 论文提及使用BERT-base-multilingual [4]，但未给出具体链接。
    - PoemesProfonds (文本转音素工具): https://github.com/Remiphilius/PoemesProfonds
    - 用于训练的数据集：ESTER 1 [10]、ESTER 2 [11]、EPAC [5]、ETAPE [15]、REPERE [12]，论文未提供这些数据集的获取链接。

## 补充信息

- [细节详述] 补充：论文原文明确提供了用于训练10个ASR系统的具体数据集名称（ESTER 1/2, EPAC, ETAPE, REPERE）及其总时长（约940小时），并说明用于生成HATS数据集的转录来源是REPERE测试集（约10小时音频）。这些信息为ASR系统和数据集提供了关键背景。

- [细节详述] 补充：论文虽然未做传统消融实验，但通过系统性地比较同一指标框架下不同嵌入模型（如CamemBERT-base vs FlauBERT-base, CamemBERT-base vs CamemBERT-large）的表现（见Table 2及第5节讨论），构成了一种针对“嵌入模型选择”的隐含消融分析。分析结果中提及了“嵌入模型的重要性”，但未明确指出这构成了对指标关键组件的对比验证。

- [实验结果] 补充：对Table 2的解读需结合表注完整信息。分析结果中的核心摘要和实验结果部分均提及了指标的一致性比例，但遗漏了Table 2括号中的数据。论文表注明确说明，括号内的数字表示“该指标对两个假设给出相同分数的百分比”。这是一个重要细节，揭示了指标的区分能力。例如，WER在23%的情况下无法区分假设，而SemDist (CamemBERT-large) 在所有情况下仅10%无法区分。

- [核心摘要/开源详情] 补充：论文在“Conclusion and Perspectives”部分明确提出了一个具体的未来研究计划：“replicating the current experiment using an audio reference instead of a textual reference”，以研究在多模态设置下，CER是否仍优于WER。这补充了分析结果中“主要局限性”部分提到的“使用文本参考而非音频”问题，并指明了论文作者认可的后续验证方向。

- [毒舌点评/评分理由] 补充：论文在最后设独立的“Ethics Statement”章节，讨论了该研究可能存在的公平性伦理考量。论文指出，如果仅针对特定人群的感知优化评估指标，可能无法推广到整个人群，从而造成不公平。这是一个值得在分析中提及的、关于研究社会影响的视角。

### 📌 核心摘要

1.  问题：传统的ASR评估指标（如WER）无法充分反映人类对转录错误的实际感知和可理解性，而新兴的语义指标与人类判断的相关性尚未在真实场景下得到充分验证。
2.  方法核心：构建了HATS数据集，包含1000个由不同ASR系统产生的错误转录对（针对同一参考文本），并通过线上实验收集了143名人类评估者的侧边比较偏好选择，总计7150条标注。
3.  创新之处：a) 创建了一个专注于“人类对错误感知”的开放评估基准，而非传统ASR或MT数据集；b) 刺激物选择并非随机，而是基于指标分数精心策划，旨在研究指标失效或争议的困难案例；c) 系统性地将多种词汇级、字符级和语义级（BERTScore, SemDist）指标与人类选择进行对比。
4.  主要实验结果：
    | 指标 | 100%人类共识 | 70%人类共识 | 全部数据(0%) |
    | :--- | :--- | :--- | :--- |
    | WER | 63% | 53% | 49% |
    | CER | 77% | 64% | 60% |
    | EmbER | 73% | 62% | 57% |
    | BERTScore (BERT-multilingual) | 84% | 75% | 70% |
    | BERTScore (CamemBERT-base) | 81% | 72% | 68% |
    | SemDist (CamemBERT-base) | 86% | 74% | 70% |
    | SemDist Sentence (CamemBERT-large) | 90% | 78% | 73% |
    | PhonER | 80% | 69% | 64% |
    > 表2：各指标与人类选择的一致性比例（取自论文Table 2）。结果显示，基于句子嵌入的SemDist Sentence (CamemBERT-large) 在所有条件下表现最佳，其次是BERTScore。传统的WER表现最差，而CER优于WER。
5.  实际意义：证明了基于句子嵌入的语义相似度指标（尤其是使用专为语义设计的Sentence-BERT）能更好地模拟人类对转录质量的判断。HATS数据集和工具为未来开发和校准ASR评估指标提供了重要参考。
6.  主要局限性：a) 数据集选择基于特定筛选标准，可能无法代表所有常见ASR错误类型；b) 结论可能特定于法语；c) 实验中使用文本参考而非音频，可能影响人类感知（例如，CER表现异常好可能与此有关）。

### 🏗️ 模型架构

本文未提出新的生成或识别模型，其核心工作是数据集构建与指标评估。因此，“模型架构”部分不适用。

![实验界面截图](https://arxiv.org/html/2604.27542v1/perceptualexp.png)
图1：感知实验界面示意图。展示了人类评估者看到的界面：上方是参考文本，下方是两个待比较的假设文本（A和B）。评估者需要点击选择他们认为更好的一个。

### 💡 核心创新点

1.  创建HATS（Human Assessed Transcription Side-by-side）数据集：这是一个全新的、专为研究“人类对ASR转录错误感知”而设计的公开数据集。它包含由10个不同架构的ASR系统对同一法语音频语料（REPERE测试集）产生的错误转录对，以及基于143名评估者的人类偏好标注。这解决了以往研究依赖人工注入错误或单一系统输出进行比较的局限性。
2.  设计并执行了针对指标失效点的刺激物选择协议：为了深入研究指标与人类判断的差异，论文没有随机选择转录对，而是依据不同指标（WER, CER, EmbER, SemDist, BERTScore）的得分情况，精心挑选了三类“困难”案例：(A)指标自身得分差异大/小，(B)不同指标得分矛盾，(C)指标预测与人类偏好可能相左。这使得评估更具针对性和深度。
3.  系统性评估多种ASR指标与人类感知的一致性：论文首次在一个统一的、基于真实ASR错误的人类偏好数据集上，全面对比了从词汇到语义层级的多种主流指标（WER, CER, EmbER, BERTScore, SemDist, PhonER）的性能，并量化了其与人类选择的一致性比例。为选择更优的评估指标提供了直接的实证依据。

### 🔬 细节详述

- 训练数据：不适用。本文不涉及模型训练。论文中提及的ASR系统训练数据为ESTER, EPAC, ETAPE, REPERE等法语语料，约940小时。HATS数据集本身基于REPERE测试集（约10小时音频）。
- 损失函数：论文中未提及。
- 训练策略：论文中未提及（针对本文评估任务）。
- 关键超参数：论文中未提及（针对本文评估任务）。
- 训练硬件：论文中未提及。
- 推理细节：论文中未提及（ASR系统推理）。
- 正则化或稳定训练技巧：论文中未提及。
- HATS数据集构建细节：
    - 规模：1000个参考句，每个参考句对应一个转录对，共1000个三元组（stimuli）。
    - 标注：7150条人类偏好标注。每个三元组由至少7名评估者（总计143人）评价。
    - 评估者：平均年龄34岁，均为法语流利者。每位评估者评估50个三元组，耗时约15分钟。
    - 一致性：Fleiss‘ Kappa为0.46。82%的三元组一致性≥71.4%，60%≥85.7%。
    - 筛选：根据人类投票的一致性（公式1），可筛选出高共识子集（如100%共识：371个三元组）。
- 评估指标：
    - 词汇级：WER, CER
    - 音素级：PhonER（使用PoemesProfonds转换）
    - 语义级（嵌入）：
        - EmbER：基于fastText词向量的加权WER。
        - SemDist：计算参考与假设的句子嵌入余弦相似度。对比了CamemBERT、FlauBERT、Sentence-BERT的嵌入。
        - BERTScore：使用多语言BERT、CamemBERT-base/large计算上下文token相似度。

### 📊 实验结果

主要实验结果集中于比较各指标与人类选择的一致性，结果汇总于表2（已在“核心摘要”中列出）。关键发现包括：

1.  最佳指标：基于句子嵌入的SemDist Sentence (CamemBERT-large) 在所有人类共识级别下（100%，70%，全数据）都取得了最高的与人类选择的一致性（90%， 78%， 73%）。
2.  语义 vs. 词汇指标：基于BERT/CamemBERT的语义指标（BERTScore, SemDist）普遍优于传统的词汇/字符级指标（WER, CER）。这验证了假设。
3.  WER的局限性：WER在人类共识较高时（100%）一致性仅63%，在全数据下甚至接近随机选择（49%），因为它无法区分许多具有相同WER但质量不同的错误。
4.  CER与WER的对比：在本研究中，CER（77%/64%/60%）显著优于WER（63%/53%/49%），这与一些先前研究结论相反。作者推测可能与使用文本参考而非音频，或法语特性（多不发音字母）有关。
5.  嵌入模型的重要性：相同的指标框架下，嵌入模型的选择至关重要。例如，SemDist使用FlauBERT-base时表现（65%）甚至不如CER，而使用Sentence CamemBERT-large时则达到最佳。
6.  PhonER的表现：音素错误率PhonER表现良好（80%/69%/64%），优于WER和CER，暗示人类在阅读文本时也会考虑语音相似性。

![参与者语言背景分布](https://arxiv.org/html/2604.27542v1/HATS_lang.png)
图2：参与评估的人员所会说语言的数量分布。显示大多数评估者会说2-3种语言，且都会说法语。

![参与者教育水平分布](https://arxiv.org/html/2604.27542v1/level_education.png)
图3：参与评估的人员的教育水平分布。显示参与者的教育水平分布较广。

### ⚖️ 评分理由

- 学术质量：6.0/7。论文在研究设计和执行上非常严谨，数据集构建工作扎实，为社区提供了高质量的评估基准和分析。其主要贡献在于“测量和基准”而非“方法创新”，因此未给出更高分数。技术正确，实验充分，证据链完整。
- 选题价值：1.5/2。直面ASR评估的核心痛点，提供的数据集和工具具有直接的实用价值，对改进ASR系统评估范式有潜在推动作用。选题前沿且具体。
- 开源与复现加成：1.0/1。完全公开了数据集和评估工具的代码，极大促进了结果的可复现性和后续研究，是加分项。

---

[← 返回 2026-05-01 论文速递](/audio-paper-digest-blog/posts/2026-05-01/)
