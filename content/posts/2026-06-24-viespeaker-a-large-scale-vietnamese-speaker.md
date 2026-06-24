---
title: "VieSpeaker: A Large-Scale Vietnamese Speaker Recognition Dataset Beyond Visual Dependency"
date: 2026-06-24
draft: false
tags: [说话人识别, 大语言模型, 预训练]
categories: [论文速递]
description: "说话人识别 | 7.5/10"
hiddenInHomeList: true
---

# 📄 VieSpeaker: A Large-Scale Vietnamese Speaker Recognition Dataset Beyond Visual Dependency

#说话人识别 #大语言模型 #预训练

**7.5/10** | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.1/1.5 | 清晰 1/1 | 影响 1.2/1.5 | 开源 0/1.5 | 复现 0.5/0.5 | 工程 1/1.5

✅ **7.5/10** | 前25% | #说话人识别 | #预训练 | #大语言模型 | [arxiv](https://arxiv.org/abs/2606.24066)


### 👥 作者与机构

作者：Viet Hoang Pham, Tran Trung Nguyen, Bao Thu Ho, Phuong Tuan Dat, Thi Thu Trang Nguyen
机构：Hanoi University of Science and Technology, Hanoi, Vietnam

### 💡 毒舌点评

这篇论文切中了低资源语言（越南语）数据集构建的痛点，并提出了一个有趣的“去视觉化”方案。其核心贡献——一个大规模的、基于LLM推理构建的越南语说话人数据集——本身是有价值的。然而，论文在方法描述上存在“黑箱”嫌疑，在实验评估上显得“偷懒”，且对潜在风险避而不谈。最大的隐患在于将数据集质量完全押注在一个商用LLM（Gemini 2.5 Pro）的推理结果上，却缺乏严谨的、大规模的人工验证或置信度分析，这让人对其标注的长期可靠性心存疑虑。此外，与CN-Celeb2等国际数据集的“对比”更像是在强调“我人多”，而非深入探讨数据质量或任务挑战性的差异。这更像是一篇工程报告，而非一篇方法论扎实的顶会论文。

### 📌 核心摘要

现有大规模越南语说话人识别数据集稀缺，且普遍依赖视觉（人脸）信息进行说话人身份标注，这限制了数据来源和多样性。本文提出了一种基于文本元数据和大语言模型（LLM）推理的去视觉化数据集构建流程，并据此构建了VieSpeaker数据集。VieSpeaker包含来自4,715位说话人的约902小时越南语音频，数据来源于YouTube上的访谈、娱乐和播客视频。实验表明，使用VieSpeaker训练或作为预训练数据，能够提升说话人识别模型在现有基准（Vietnam-Celeb, VoxVietnam）上的性能和鲁棒性。该工作验证了不依赖视觉的构建流程的可行性，为构建大规模语音资源提供了新方向。

### 🔗 开源详情

- 代码：论文中未提及代码开源。
- 模型权重：论文中未提及模型权重的具体开源链接。
- 数据集：VieSpeaker 数据集，获取链接为 https://huggingface.co/datasets/hustep-lab/VieSpeaker-Dataset（论文中未明确提及开源协议）。
- Demo：论文中未提及。
- 复现材料：论文中未提及训练配置、检查点等复现材料的具体获取链接。
- 论文中引用的开源项目：
    - Pyannote (speaker diarization)：https://huggingface.co/pyannote/speaker-diarization-3.1
    - WeSpeaker：论文中提及为训练框架，但未给出具体链接。
    - ECAPA-TDNN：论文中提及为模型架构，但未给出具体链接。

### 🏗️ 方法概述和架构

本文提出的数据集构建流水线如图1所示，主要包含五个核心阶段，旨在从公开视频中自动构建大规模、去视觉化的说话人识别数据集。

1.  数据收集：从YouTube公开频道中，人工策划了访谈、娱乐和播客三个领域的播放列表。一个自动化流水线检索视频链接及其关联的元数据（标题、频道名、描述、转录文本）。关键点在于，本设计因不依赖视觉，所以能包含那些说话人未出镜或视觉信息不一致的录音（如广播访谈、电话节目、纯音频播客等），扩大了数据覆盖范围。原始媒体文件不随数据集分发。

2.  说话人分割：使用Pyannote框架中的`speaker-diarization-3.1`预训练模型，将原始音频分割为说话人同质的片段，并为每个片段分配匿名的说话人标识符（`SPEAKER_ID`）。该模型输出带有时间戳的语音片段边界。

3.  说话人身份识别：这是流程的核心创新点。本模块使用Gemini 2.5 Pro LLM（通过Google AI Studio API调用）来推断匿名说话人的真实身份。对于一个视频中所有的`SPEAKER_ID`，模型接收两个输入：(a) 视频的文本元数据（标题、频道、描述）；(b) 每个`SPEAKER_ID`对应的转录文本片段（每个说话人最多采样7段）。LLM被要求根据明确的文本证据（如自我介绍、直接称呼）将`SPEAKER_ID`映射到真实的越南语姓名，并输出一个包含姓名和证据文本的JSON对象。该设计旨在通过约束LLM只进行基于证据的推理，来最小化错误标注。此外，它还能隐式地纠正因过度分割导致的同一说话人被标记为不同ID的情况。

4.  说话人合并：解决同一说话人跨视频出现导致的身份碎片化问题。首先，使用另一个LLM步骤对检测到的姓名进行标准化（如去除前缀“ca sĩ”、统一格式）。然后，移除非越南语说话人。对于需要合并的身份，使用在Vietnam-Celeb上训练的ECAPA-TDNN模型提取声纹嵌入，并基于嵌入余弦相似度进行凝聚层次聚类。合并和分割阈值分别为0.7和0.2。对于不确定或存在别名的情况，采用人工验证。

5.  数据清洗：遵循相关工作，使用四分位距法基于嵌入余弦相似度移除异常语音片段。过滤掉短于1.0秒的片段，以及总语音时长低于30秒的说话人。对于主导说话人（如主持人），在累计时长过大时进行随机下采样，以平衡训练分布。

![图1](https://arxiv.org/html/2606.24066v1/fullpipeline.png)

![图2](data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iMjEuNzkiIHdpZHRoPSIyMDcuNTYiIG92ZXJmbG93PSJ2aXNpYmxlIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDIxLjc5KSBzY2FsZSgxLC0xKSI+PHBhdGggc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMDAwMDAwOyIgZD0iTSAwLDIxLjc5IDIwNy41NiwwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC40Ij48L3BhdGg+PGcgY2xhc3M9Imx0eF9zdmdfZm9nIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDEyLjMpIHNjYWxlKDEsIC0xKSI+PGZvcmVpZ25PYmplY3Qgd2lkdGg9IjgzLjc0IiBoZWlnaHQ9IjEyLjMiIG92ZXJmbG93PSJ2aXNpYmxlIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IlMzLlQ1LjEuMS4xLnBpYzEuMS4xIiBjbGFzcz0ibHR4X2lubGluZS1ibG9jayI+PHNwYW4gaWQ9IlMzLlQ1LjEuMS4xLnBpYzEuMS4xLjEiIGNsYXNzPSJsdHhfaW5saW5lLWJsb2NrIGx0eF9hbGlnbl9sZWZ0Ij48c3BhbiBpZD0iUzMuVDUuMS4xLjEucGljMS4xLjEuMS4xIiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJTMy5UNS4xLjEuMS5waWMxLjEuMS4xLjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQiPlRyYWluaW5nIHNldDwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PC9nPjxnIGNsYXNzPSJsdHhfc3ZnX2ZvZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUyLjgyLDEyLjMpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDkuNDkpIHNjYWxlKDEsIC0xKSI+PGZvcmVpZ25PYmplY3Qgd2lkdGg9IjU0Ljc0IiBoZWlnaHQ9IjkuNDkiIG92ZXJmbG93PSJ2aXNpYmxlIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IlMzLlQ1LjEuMS4xLnBpYzEuMi4xIiBjbGFzcz0ibHR4X2lubGluZS1ibG9jayI+PHNwYW4gaWQ9IlMzLlQ1LjEuMS4xLnBpYzEuMi4xLjEiIGNsYXNzPSJsdHhfaW5saW5lLWJsb2NrIGx0eF9hbGlnbl9yaWdodCI+PHNwYW4gaWQ9IlMzLlQ1LjEuMS4xLnBpYzEuMi4xLjEuMSIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iUzMuVDUuMS4xLjEucGljMS4yLjEuMS4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIj5UZXN0IHNldDwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PC9nPjwvZz48L3N2Zz4=)


### 💡 核心创新点

1.  去视觉化构建流程：首次提出并验证了在大规模说话人数据集构建中，完全不依赖视觉模态（人脸检测、追踪）进行身份监督的可行性。这通过结合文本元数据与LLM推理实现，为从非视觉源（如广播、播客）构建数据集开辟了新途径。
2.  构建了迄今最大的越南语说话人数据集：VieSpeaker在说话人数量（4,715）和总时长（902小时）上均显著超过了之前最大的Vietnam-Celeb和VoxVietnam，为越南语说话人识别研究提供了更丰富的资源。
3.  验证了作为有效训练与预训练资源的价值：实验证明，不仅直接使用VieSpeaker训练能取得竞争力的性能，更关键的是，将其作为大规模预训练数据（在微调前）能有效提升模型在下游越南语基准上的泛化能力，其效果在部分设置下甚至优于使用更大规模的VoxCeleb2进行预训练。

### 📊 实验结果

实验使用WeSpeaker框架，采用ECAPA-TDNN架构（1024通道编码器块）。输入音频被随机裁剪为3秒片段，提取80维梅尔频谱特征。训练使用Additive Angular Margin Softmax损失，并应用了MUSAN和RIRs数据增强（60%概率）。模型在单张NVIDIA Tesla V100 GPU上训练150个epoch，批大小为128。性能指标为等错误率（EER）。

表5：在Vietnam-Celeb和VoxVietnam基准上的EER (%)

| 训练集 | 测试集 | Vietnam-Celeb-E | Vietnam-Celeb-H | VoxVietnam-E | VoxVietnam-H |
| :--- | :--- | :--- | :--- | :--- | :--- |
| VoxCeleb2 | | 14.79 | 17.80 | 21.00 | 28.06 |
| Vietnam-Celeb-T | | 6.53 | 7.92 | 13.48 | 22.59 |
| VoxVietnam-T | | 15.05 | 16.67 | 13.66 | 22.26 |
| VieSpeaker-T | | 9.28 | 11.19 | 13.19 | 21.78 |
| VoxCeleb2 ft. Vietnam-Celeb-T | | 5.79 | 6.91 | 13.36 | 22.06 |
| VieSpeaker-T ft. Vietnam-Celeb-T | | 5.45 | 6.74 | 13.28 | 22.00 |
| VoxCeleb2 ft. VoxVietnam-T | | 11.02 | 11.99 | 12.70 | 21.41 |
| VieSpeaker-T ft. VoxVietnam-T | | 9.97 | 11.08 | 12.65 | 21.43 |

关键发现：VieSpeaker-T直接训练在VoxVietnam上表现最佳。当作为预训练数据时，使用VieSpeaker-T初始化的模型在Vietnam-Celeb上微调后，获得了比VoxCeleb2预训练更低的EER（5.45% vs 5.79%，6.74% vs 6.91%），表明其作为预训练资源的有效性。

表6：在VieSpeaker测试协议上的EER (%)

| 训练集 | 测试集 | VieSpeaker-E | VieSpeaker-H |
| :--- | :--- | :--- | :--- |
| VoxCeleb2 | | 7.02 | 12.95 |
| Vietnam-Celeb-T | | 5.92 | 23.14 |
| VoxVietnam-T | | 7.99 | 26.61 |
| VieSpeaker-T | | 2.40 | 13.45 |
| VoxCeleb2 ft. VieSpeaker-T | | 1.81 | 9.83 |
| VoxCeleb2 ft. Vietnam-Celeb-T | | 3.89 | 16.38 |
| VieSpeaker-T ft. Vietnam-Celeb-T | | 3.24 | 19.29 |
| VoxCeleb2 ft. VoxVietnam-T | | 5.50 | 22.14 |
| VieSpeaker-T ft. VoxVietnam-T | | 3.66 | 18.85 |

关键发现：在自有更具挑战性的VieSpeaker-H测试集上，其他数据集训练的模型表现急剧下降（EER>23%），而VieSpeaker-T训练的模型表现更好（13.45%），证明了其覆盖了更困难的跨会话场景。VoxCeleb2预训练再在VieSpeaker-T上微调达到了最佳性能（1.81% EER on E）。

![图3](data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iMjEuNzkiIHdpZHRoPSIyMjguMzEiIG92ZXJmbG93PSJ2aXNpYmxlIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDIxLjc5KSBzY2FsZSgxLC0xKSI+PHBhdGggc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMDAwMDAwOyIgZD0iTSAwLDIxLjc5IDIyOC4zMSwwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC40Ij48L3BhdGg+PGcgY2xhc3M9Imx0eF9zdmdfZm9nIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDEyLjMpIHNjYWxlKDEsIC0xKSI+PGZvcmVpZ25PYmplY3Qgd2lkdGg9IjgzLjc0IiBoZWlnaHQ9IjEyLjMiIG92ZXJmbG93PSJ2aXNpYmxlIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IlMzLlQ2LjEuMS4xLjEuMS4xLnBpYzEuMS4xIiBjbGFzcz0ibHR4X2lubGluZS1ibG9jayI+PHNwYW4gaWQ9IlMzLlQ2LjEuMS4xLjEuMS4xLnBpYzEuMS4xLjEiIGNsYXNzPSJsdHhfaW5saW5lLWJsb2NrIGx0eF9hbGlnbl9sZWZ0Ij48c3BhbiBpZD0iUzMuVDYuMS4xLjEuMS4xLjEucGljMS4xLjEuMS4xIiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJTMy5UNi4xLjEuMS4xLjEuMS5waWMxLjEuMS4xLjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQiPlRyYWluaW5nIHNldDwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PC9nPjxnIGNsYXNzPSJsdHhfc3ZnX2ZvZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTczLjU3LDEyLjMpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDkuNDkpIHNjYWxlKDEsIC0xKSI+PGZvcmVpZ25PYmplY3Qgd2lkdGg9IjU0Ljc0IiBoZWlnaHQ9IjkuNDkiIG92ZXJmbG93PSJ2aXNpYmxlIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IlMzLlQ2LjEuMS4xLjEuMS4xLnBpYzEuMi4xIiBjbGFzcz0ibHR4X2lubGluZS1ibG9jayI+PHNwYW4gaWQ9IlMzLlQ2LjEuMS4xLjEuMS4xLnBpYzEuMi4xLjEiIGNsYXNzPSJsdHhfaW5saW5lLWJsb2NrIGx0eF9hbGlnbl9yaWdodCI+PHNwYW4gaWQ9IlMzLlQ2LjEuMS4xLjEuMS4xLnBpYzEuMi4xLjEuMSIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iUzMuVDYuMS4xLjEuMS4xLjEucGljMS4yLjEuMS4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIj5UZXN0IHNldDwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PC9nPjwvZz48L3N2Zz4=)


### ⚖️ 评分理由

*   创新性 (1.5/2)：提出将LLM用于说话人身份推理以替代视觉监督，这是一个有创意且符合技术趋势的思路。但方法本身并非原理性突破，更多是现有技术（LLM、说话人分割）的创新性组合应用。减分点在于“去视觉化”这个主张虽然明确，但缺乏与其他依赖视觉的方法在标注误差率、效率、成本上的定量对比分析。
*   技术严谨性 (1.2/1.5)：数据集构建流程描述较为清晰，包含具体工具和参数。但存在明显弱点：1）作为核心的LLM身份推理模块，其准确性、幻觉率、以及对越南语特定上下文的理解能力未经严格评估。论文仅提到使用确定性解码（temperature=0.0），但未报告LLM推理的准确性、召回率或与人工标注的一致性。2）说话人合并中阈值（0.7，0.2）的设定基于“小的干净验证集”，但该集的规模、选取标准未说明，其通用性存疑。3）清洗阶段的具体IQR阈值未给出。
*   实验充分性 (1.1/1.5)：实验设计有亮点，比较了直接训练和预训练+微调两种范式。但在评估上存在不足：1）主要对比仅在越南语内部数据集（Vietnam-Celeb, VoxVietnam）上进行，与VoxCeleb2等大规模数据集的对比仅限于“作为预训练源时的效果”，并未深入分析数据质量或任务难度上的差异。2）缺乏对VieSpeaker数据集本身的定量质量分析，例如：LLM标注的错误率、说话人聚类后的纯度、不同领域数据的信噪比分布等。3）未提供消融实验来验证流程中各阶段（如LLM推理 vs 简单启发式方法、数据清洗）的具体贡献。
*   清晰度 (1.5/1.5)：论文结构清晰，图表（如图1、表1-6）对理解方法和结果帮助很大。方法描述直观易懂。摘要和结论也很好地总结了工作。
*   影响力 (1.2/1.5)：对越南语语音社区有明确且重要的贡献，提供了目前最大规模的数据集，有望成为新的标准基准。提出的去视觉化构建思路对其他低资源语言也有参考价值。但影响力受限于任务的专属性（说话人识别）和语言的专属性（越南语），对更广泛的语音或AI社区影响有限。
*   开源 (1.5/1.5)：论文明确声明数据集在Hugging Face上开源，提供了具体链接。这对促进研究复现和后续工作至关重要。
*   可复现性 (1.0/1.5)：数据集开源极大提升了可复现性。但模型权重、训练代码均未开源，复现论文中的具体实验结果（如表5、6）需要读者自行准备数据、配置环境、调试训练流程，这会设置一定门槛。开源部分做得不错，但整体复现材料不完整。
*   工程/实践价值 (1.0/1.5)：流程展示了如何利用现有工具（Pyannote, LLM API）解决实际数据构建问题，具有工程实践意义。然而，核心的LLM推理依赖于商业API，这可能带来成本、速率限制和未来可用性的问题，对于希望构建类似大规模系统的社区而言，是一个现实的障碍。论文未讨论这些实际挑战。

### 🚨 局限与问题

1.  LLM依赖性带来的标注质量不确定性：整个流水线的标注质量高度依赖于Gemini 2.5 Pro的推理能力。论文未提供任何关于LLM标注错误率、幻觉情况（即“猜测”了不存在的关系）或在复杂场景（如多人对话、话题快速切换）下表现的评估。这是数据集可靠性的最大潜在风险点。
2.  缺乏人工评估与验证：虽然提到了对模糊情况使用“人工验证”，但并未说明人工验证的规模、标准以及最终人工修正的比例。读者无法判断整个标注过程在多大程度上得到了人工监督，以及LLM输出的原始质量。
3.  元数据依赖性强：该方法的成功高度依赖于YouTube视频提供高质量的、包含明确身份线索的文本元数据（标题、描述、转录）。对于元数据匮乏或质量低劣的视频来源，该方法可能失效。
4.  数据集平衡性与偏差未深入探讨：虽然提到了对主导说话人进行下采样，但数据集在三个领域（访谈、娱乐、播客）间的分布极不均衡（表2）。娱乐类说话人最多但时长少，访谈类时长最长但说话人较少。这种分布可能对模型训练产生未被充分讨论的偏差。
5.  实验对比深度不足：与CN-Celeb2等国际数据集的对比仅停留在说话人数量和总时长上。未从数据复杂性（如信道多样性、噪声水平、说话风格多样性）角度进行对比，因此“更优越”的结论基础稍显单薄。
6.  未报告负面结果：论文只展示了正面或改进的结果。例如，VieSpeaker直接训练在Vietnam-Celeb-H上（11.19%）不如Vietnam-Celeb-T训练（7.92%），这种“跨域退化”现象未被讨论，而其背后可能揭示了VieSpeaker与Vietnam-Celeb在数据分布上的差异。

---

[← 返回 2026-06-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-06-24/)
