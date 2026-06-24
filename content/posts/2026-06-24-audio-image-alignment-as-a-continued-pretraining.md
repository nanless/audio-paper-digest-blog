---
title: "Audio--Image Alignment as a Continued-Pretraining Stage Improves Low-Resource ASR"
date: 2026-06-24
draft: false
tags: [语音识别, 自监督学习, 对比学习, 低资源, 多模态模型]
categories: [论文速递]
description: "语音识别 | 6.2/10"
hiddenInHomeList: true
---

# 📄 Audio--Image Alignment as a Continued-Pretraining Stage Improves Low-Resource ASR

#语音识别 #自监督学习 #对比学习 #低资源 #多模态模型

**6.2/10** | 创新 1.2/2 | 严谨 1.3/1.5 | 实验 1/1.5 | 清晰 1/1 | 影响 0.5/1.5 | 开源 0.2/1.5 | 复现 0.4/0.5 | 工程 0.6/1.5

✅ **6.2/10** | 前50% | #语音识别 | #自监督学习 | #对比学习 #低资源 | [arxiv](https://arxiv.org/abs/2606.24080)


### 👥 作者与机构

作者：Sujith Pulikodan, Nihar Desai, Prasanta Kumar Ghosh。
机构：论文中未明确说明作者所属机构。根据作者姓名和研究领域推测，可能来自印度的相关研究机构（例如印度科学研究所 IISc Bangalore）。

### 💡 毒舌点评

1.  改进幅度的“相对性”：论文在FLEURS上的21.26%相对WER降低听起来很惊人，但这主要是因为基线模型在FLEURS（未见语言）上表现极差（WER 67.78%）。从绝对数值看，最佳模型将WER从0.68降到0.53，仍属于“不可用”到“勉强可读”的范畴。在资源更丰富的Vaani上，改进仅在1-2%之间，这种“蚊子腿”级别的增益在实际部署中几乎无感。
2.  数据集依赖性过强：核心假设——易获取的音频-图像对——严重依赖于Vaani这个特定收集范式（图片提示说话）。在绝大多数真实低资源场景中，这种精心配对的多模态数据并不存在。方法泛化能力存疑。
3.  成本转嫁而非消除：声称“无需转录”，但获取数十万小时高质量且配对的音频-图像数据，其成本真的远低于获取转录文本吗？Vaani数据集本身的收集就是一项巨大的工程。这更像是将一种稀缺资源（转录文本）的成本转嫁到了另一种稀缺资源（配对多模态数据）上。
4.  消融不足：声称改进来自“对齐阶段”而非更多数据，但对比实验仅用了三个检查点的微小差异。更彻底的消融应包括：a) 使用相同音频但随机配对图像的模型；b) 使用相同音频但无图像（纯文本描述）的模型。现有证据链不够强。
5.  工程细节模糊：虽然描述了架构，但关键超参数（如对齐阶段各组件的学习率缩放因子0.05的具体依据）未解释。三种对齐配置的对比更像是超参搜索，而非对不同模态交互机制的深度分析。

### 📌 核心摘要

本文针对低资源语音识别问题，提出了一种在自监督音频预训练和监督微调之间引入“音频-图像对齐”的中间适应阶段。该方法利用预先冻结的视觉编码器（如SigLIP2、Qwen3-VL）提取图像语义特征，通过对比学习（SigLIP损失）训练音频编码器，使其输出表示与图像特征对齐，全程无需转录文本。实验在Vaani（48种语言）和FLEURS（14种南亚语言）数据集上进行。结果表明，经过对齐的模型在两个基准上均优于直接微调的基线，尤其是在FLEURS这种更极端低资源场景下，最佳模型的词错误率（WER）实现了21.26%的相对下降，且统计检验显示该提升具有显著性。论文认为，此对齐阶段有效提升了音频表示的鲁棒性和泛化能力。

### 🔗 开源详情

- 代码：论文中未提供任何指向代码仓库（如GitHub）的链接。结论：无开源代码。
- 模型权重：论文中未提供任何预训练检查点、对齐模型或微调后模型的下载链接。结论：无开源模型。
- 数据集：主要使用 Vaani 数据集 [18] 和 FLEURS 数据集。论文未提供直接的下载URL，但明确指出这些是公开可用的数据集，读者可从原出处获取。
- Demo：论文中未提及任何在线演示或交互接口。
- 复现材料：论文提供了详细的训练配置（优化器参数、学习率、训练步数、硬件环境等），但这些信息不足以独立复现，因为核心数据（Vaani的音频-图像对）未公开。
- 论文中引用的开源项目：
    - NeMo: NVIDIA 的对话式 AI 工具包，用于 ASR 模型的训练和评估 [15]。
    - FastConformer: 论文所采用的音频编码器架构 [7]。
    - BPE Tokenizer: 词表大小为2,000的字节对编码分词器 [21]。
    - SigLIP / SigLIP2: 作为视觉编码器 [10]。
    - Qwen3-VL: 作为视觉编码器 [9]。
    - wav2vec 2.0 / HuBERT / Best-RQ: 论文中作为相关自监督学习方法的引用 [1, 2, 5]。
    - CLIP / AudioCLIP / SpeechCLIP: 论文中作为相关多模态模型的引用 [8, 12, 13]。
    - AdamW / SpecAugment / CTC / TDT: 引用的标准优化器、数据增强、解码组件 [16, 17, 19, 20]。

- 补充链接（自动提取）：
  - 代码仓库：https://github.com/jitsi/jiwer

### 🏗️ 方法概述和架构

本文提出的方法是一个端到端的三阶段ASR训练流水线，核心创新在于插入了第二阶段——音频-图像对齐。整体架构如图1所示。

第一阶段：音频自监督预训练
使用FastConformer音频编码器（17层）在大型无标注语音语料（Vaani全集，约31k小时）上进行自监督预训练，获得强大的初始音频表示。

第二阶段：音频-图像对齐（核心贡献）
这是本文提出的无监督适应阶段，旨在利用已有的音频-图像配对数据，进一步优化第一阶段获得的音频编码器，而无需任何文本转录。
1.  数据：使用来自Vaani数据集的11,848,593个音频-图像对（287K张唯一图像，16,580小时语音）。这些数据在预训练时音频部分已见过，但图像信息未被利用。
2.  图像分支（冻结）：使用预训练的视觉编码器提取图像特征，并完全冻结参数。论文探索了三种变体：
    *   SigLIP (SigLIP2-base)：图像编码器输出经池化得到单个768维向量。
    *   SigLIP-MT (SigLIP2-large)：图像编码器输出576个patch token，通过L2范数选择top-16个token作为视觉表示，每个token维度为1024。
    *   Qwen-MT (Qwen3-VL)：图像编码器输出经2x2空间合并，产生最多16个token，每个token维度为2048。
3.  音频分支（训练）：完全更新第一阶段预训练好的FastConformer音频编码器（17层）。音频波形经对数梅尔滤波器组预处理后输入编码器。编码器输出后接一个可训练的“对齐头”：
    *   单向量配置：使用单查询注意力池化（Attention Pool）将编码器输出聚合为一个向量，再经MLP投影到与视觉向量匹配的维度（如768）。
    *   多向量配置：使用多查询注意力池化（\(K_a=16\)）产生16个音频查询向量，再分别经MLP投影到与视觉token匹配的维度（1024或2048）。
4.  对齐损失与交互：
    *   相似性计算：对于单向量配置，计算投影后音频向量\(\mathbf{a}\)与视觉向量\(\mathbf{v}\)的余弦相似度。对于多向量配置，采用非对称MaxSim：对每个音频查询\(\mathbf{q}_a\)，计算其与所有视觉token \(\mathbf{V}_v\)的最大余���相似度，然后对16个音频查询取平均。
    *   损失函数：使用Sigmoid对比损失（SigLIP loss），其形式为 \(-\log \sigma(y_{ij}(t \cdot s_{ij} + b))\)，其中\(s_{ij}\)是相似度分数，\(y_{ij}\)为标签（正对为1，负对为-1），\(t\)和\(b\)是可学习的温度和偏置参数。负样本通过跨所有GPU的批次内采样获得。
5.  训练配置：批次大小64，优化器AdamW（\(\beta_1=0.9\), \(\beta_2=0.95\)），权重衰减0.01，梯度裁剪1.0，bfloat16精度。学习率策略为1000步预热后衰减。对齐头使用基础学习率（\(3 \times 10^{-4}\)），预训练编码器使用缩小的学习率（因子0.05）。所有变体训练200k步。

第三阶段：监督ASR微调
将对齐后的音频编码器与混合CTC-TDT解码器结合，使用带转录的语音数据进行监督微调。论文考虑了两种微调设置：1) Vaani内的1,894小时多语言转录数据；2) FLEURS数据集的124.35小时训练数据。微调在8张H100 GPU上进行，使用AdamW优化器、Noam学习率调度、2000步预热、批次大小16/卡、学习率\(1 \times 10^{-4}\)，并应用SpecAugment。最大训练30个epoch。

![图1](data:image/svg+xml;base64,PHN2ZyBpZD0iUzMuRjEucGljMSIgY2xhc3M9Imx0eF9waWN0dXJlIGx0eF9jZW50ZXJpbmciIGhlaWdodD0iMjgwLjg4IiBvdmVyZmxvdz0idmlzaWJsZSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjYwLjk1IDI4MC44OCIgd2lkdGg9IjI2MC45NSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyODAuODgpIG1hdHJpeCgxIDAgMCAtMSAwIDApIHRyYW5zbGF0ZSgxMzAuNDcsMCkgdHJhbnNsYXRlKDAsMjQzLjkxKSI+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMzc1QThDOy0tbHR4LWZpbGwtY29sb3I6I0VERjBGNTsiIHN0cm9rZT0iIzM3NUE4QyIgZmlsbD0iI0VERjBGNSIgc3Ryb2tlLXdpZHRoPSIwLjhwdCI+PHBhdGggZD0iTSAxMjUuMDggMzYuNDIgTCAtMTI1LjA4IDM2LjQyIEMgLTEyNy43NSAzNi40MiAtMTI5LjkyIDM0LjI1IC0xMjkuOTIgMzEuNTcgTCAtMTI5LjkyIC0zMS41NyBDIC0xMjkuOTIgLTM0LjI1IC0xMjcuNzUgLTM2LjQyIC0xMjUuMDggLTM2LjQyIEwgMTI1LjA4IC0zNi40MiBDIDEyNy43NSAtMzYuNDIgMTI5LjkyIC0zNC4yNSAxMjkuOTIgLTMxLjU3IEwgMTI5LjkyIDMxLjU3IEMgMTI5LjkyIDM0LjI1IDEyNy43NSAzNi40MiAxMjUuMDggMzYuNDIgWiBNIC0xMjkuOTIgLTM2LjQyIj48L3BhdGg+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzM3NUE4QzstLWx0eC1maWxsLWNvbG9yOiNFN0VCRjE7IiBzdHJva2U9IiMzNzVBOEMiIGZpbGw9IiNFN0VCRjEiIHN0cm9rZS13aWR0aD0iMC44cHQiPjxwYXRoIGQ9Ik0gLTEwNC45NyAyMy4yNyBDIC0xMDQuOTcgMjkuMzYgLTEwOS45IDM0LjMgLTExNS45OSAzNC4zIEMgLTEyMi4wOCAzNC4zIC0xMjcuMDEgMjkuMzYgLTEyNy4wMSAyMy4yNyBDIC0xMjcuMDEgMTcuMTggLTEyMi4wOCAxMi4yNSAtMTE1Ljk5IDEyLjI1IEMgLTEwOS45IDEyLjI1IC0xMDQuOTcgMTcuMTggLTEwNC45NyAyMy4yNyBaIE0gLTExNS45OSAyMy4yNyI+PC9wYXRoPjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiMzNzVBOEM7LS1sdHgtZmlsbC1jb2xvcjojMzc1QThDOyIgc3Ryb2tlLXdpZHRoPSIwLjhwdCIgZmlsbD0iIzM3NUE4QyIgc3Ryb2tlPSIjMzc1QThDIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgLTExOS4xMiAyMC4xNSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mZy1jb2xvcjojMzc1QThDOy0tbHR4LWZvLXdpZHRoOjAuNWVtOy0tbHR4LWZvLWhlaWdodDowLjVlbTstLWx0eC1mby1kZXB0aDowZW07IiB3aWR0aD0iNi4yNyIgaGVpZ2h0PSI2LjI0IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDYuMjQpIiBvdmVyZmxvdz0idmlzaWJsZSIgY29sb3I9IiMzNzVBOEMiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250YWluZXIiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250ZW50Ij48c3BhbiBpZD0iUzMuRjEucGljMS4xLjEuMS4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIiBzdHlsZT0iZm9udC1zaXplOjcwJTsiPjE8L3NwYW4+PC9zcGFuPjwvc3Bhbj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzAwMDAwMDstLWx0eC1maWxsLWNvbG9yOiMwMDAwMDA7IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC40cHQiPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzI2MkEzMDstLWx0eC1maWxsLWNvbG9yOiMyNjJBMzA7IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgLTM5Ljg0IDE3LjgpIiBmaWxsPSIjMjYyQTMwIiBzdHJva2U9IiMyNjJBMzAiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mZy1jb2xvcjojMjYyQTMwOy0tbHR4LWZvLXdpZHRoOjUuMDFlbTstLWx0eC1mby1oZWlnaHQ6MC42ZW07LS1sdHgtZm8tZGVwdGg6MC4xN2VtOyIgd2lkdGg9Ijc5LjY4IiBoZWlnaHQ9IjEyLjMiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgOS42MSkiIG92ZXJmbG93PSJ2aXNpYmxlIiBjb2xvcj0iIzI2MkEzMCI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJTMy5GMS5waWMxLjIuMi4yLjEuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+UHJldHJhaW5pbmc8L3NwYW4+PC9zcGFuPjwvc3Bhbj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzYxNjE2MTstLWx0eC1maWxsLWNvbG9yOiM2MTYxNjE7IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgLTcxLjI4IDIuOTQpIiBmaWxsPSIjNjE2MTYxIiBzdHJva2U9IiM2MTYxNjEiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mZy1jb2xvcjojNjE2MTYxOy0tbHR4LWZvLXdpZHRoOjEyLjllbTstLWx0eC1mby1oZWlnaHQ6MC42MWVtOy0tbHR4LWZvLWRlcHRoOjBlbTsiIHdpZHRoPSIxNDIuMjYiIGhlaWdodD0iNi43MyIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA2LjczKSIgb3ZlcmZsb3c9InZpc2libGUiIGNvbG9yPSIjNjE2MTYxIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IlMzLkYxLnBpYzEuMy4zLjMuMi4xLjEiIGNsYXNzPSJsdHhfdGV4dCIgc3R5bGU9ImZvbnQtc2l6ZTo3MCU7LS1sdHgtZmctY29sb3I6IzYxNjE2MTsiPkZhc3RDb25mb3JtZXIgYXVkaW8gZW5jb2Rlcjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMzM5Mzg4Oy0tbHR4LWZpbGwtY29sb3I6I0Q2RTlFNzsiIHN0cm9rZT0iIzMzOTM4OCIgZmlsbD0iI0Q2RTlFNyIgc3Ryb2tlLXdpZHRoPSIwLjVwdCI+PHBhdGggZD0iTSAyMS43NiAtOC4yNyBMIC0yMS43NiAtOC4yNyBDIC0yMy42NyAtOC4yNyAtMjUuMjIgLTkuODIgLTI1LjIyIC0xMS43MyBMIC0yNS4yMiAtMjIuOTIgQyAtMjUuMjIgLTI0LjgzIC0yMy42NyAtMjYuMzggLTIxLjc2IC0yNi4zOCBMIDIxLjc2IC0yNi4zOCBDIDIzLjY3IC0yNi4zOCAyNS4yMiAtMjQuODMgMjUuMjIgLTIyLjkyIEwgMjUuMjIgLTExLjczIEMgMjUuMjIgLTkuODIgMjMuNjcgLTguMjcgMjEuNzYgLTguMjcgWiBNIC0yNS4yMiAtMjYuMzgiPjwvcGF0aD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMDA0ODQwOy0tbHR4LWZpbGwtY29sb3I6IzAwNDg0MDsiIHN0cm9rZS13aWR0aD0iMC41cHQiIGZpbGw9IiMwMDQ4NDAiIHN0cm9rZT0iIzAwNDg0MCIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIC0yMS4wNyAtMjAuNjUpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0iLS1sdHgtZmctY29sb3I6IzAwNDg0MDstLWx0eC1mby13aWR0aDozLjM2ZW07LS1sdHgtZm8taGVpZ2h0OjAuNTNlbTstLWx0eC1mby1kZXB0aDowZW07IiB3aWR0aD0iNDIuMTMiIGhlaWdodD0iNi42NSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA2LjY1KSIgb3ZlcmZsb3c9InZpc2libGUiIGNvbG9yPSIjMDA0ODQwIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IlMzLkYxLnBpYzEuNC40LjQuMy4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIiBzdHlsZT0iZm9udC1zaXplOjcwJTstLWx0eC1mZy1jb2xvcjojMDA0ODQwOyI+QVVESU88L3NwYW4+PC9zcGFuPjwvc3Bhbj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzJENzg2RTstLWx0eC1maWxsLWNvbG9yOiNFQ0YzRjI7IiBzdHJva2U9IiMyRDc4NkUiIGZpbGw9IiNFQ0YzRjIiIHN0cm9rZS13aWR0aD0iMC44cHQiPjxwYXRoIGQ9Ik0gMTI1LjA4IC02Ny4wNSBMIC0xMjUuMDggLTY3LjA1IEMgLTEyNy43NSAtNjcuMDUgLTEyOS45MiAtNjkuMjIgLTEyOS45MiAtNzEuODkgTCAtMTI5LjkyIC0xMzUuMDQgQyAtMTI5LjkyIC0xMzcuNzIgLTEyNy43NSAtMTM5Ljg5IC0xMjUuMDggLTEzOS44OSBMIDEyNS4wOCAtMTM5Ljg5IEMgMTI3Ljc1IC0xMzkuODkgMTI5LjkyIC0xMzcuNzIgMTI5LjkyIC0xMzUuMDQgTCAxMjkuOTIgLTcxLjg5IEMgMTI5LjkyIC02OS4yMiAxMjcuNzUgLTY3LjA1IDEyNS4wOCAtNjcuMDUgWiBNIC0xMjkuOTIgLTEzOS44OSI+PC9wYXRoPjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiMyRDc4NkU7LS1sdHgtZmlsbC1jb2xvcjojRTZFRkVFOyIgc3Ryb2tlPSIjMkQ3ODZFIiBmaWxsPSIjRTZFRkVFIiBzdHJva2Utd2lkdGg9IjAuOHB0Ij48cGF0aCBkPSJNIC0xMDQuOTcgLTgwLjIgQyAtMTA0Ljk3IC03NC4xMSAtMTA5LjkgLTY5LjE3IC0xMTUuOTkgLTY5LjE3IEMgLTEyMi4wOCAtNjkuMTcgLTEyNy4wMSAtNzQuMTEgLTEyNy4wMSAtODAuMiBDIC0xMjcuMDEgLTg2LjI4IC0xMjIuMDggLTkxLjIyIC0xMTUuOTkgLTkxLjIyIEMgLTEwOS45IC05MS4yMiAtMTA0Ljk3IC04Ni4yOCAtMTA0Ljk3IC04MC4yIFogTSAtMTE1Ljk5IC04MC4yIj48L3BhdGg+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzJENzg2RTstLWx0eC1maWxsLWNvbG9yOiMyRDc4NkU7IiBzdHJva2Utd2lkdGg9IjAuOHB0IiBmaWxsPSIjMkQ3ODZFIiBzdHJva2U9IiMyRDc4NkUiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAtMTE5LjEyIC04My4zMikiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mZy1jb2xvcjojMkQ3ODZFOy0tbHR4LWZvLXdpZHRoOjAuNWVtOy0tbHR4LWZvLWhlaWdodDowLjVlbTstLWx0eC1mby1kZXB0aDowZW07IiB3aWR0aD0iNi4yNyIgaGVpZ2h0PSI2LjI0IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDYuMjQpIiBvdmVyZmxvdz0idmlzaWJsZSIgY29sb3I9IiMyRDc4NkUiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250YWluZXIiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250ZW50Ij48c3BhbiBpZD0iUzMuRjEucGljMS41LjUuNS40LjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQiIHN0eWxlPSJmb250LXNpemU6NzAlOyI+Mjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMjYyQTMwOy0tbHR4LWZpbGwtY29sb3I6IzI2MkEzMDsiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAtODYuNTQgLTg1LjY3KSIgZmlsbD0iIzI2MkEzMCIgc3Ryb2tlPSIjMjYyQTMwIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0iLS1sdHgtZmctY29sb3I6IzI2MkEzMDstLWx0eC1mby13aWR0aDoxMC45MWVtOy0tbHR4LWZvLWhlaWdodDowLjZlbTstLWx0eC1mby1kZXB0aDowLjE3ZW07IiB3aWR0aD0iMTczLjUzIiBoZWlnaHQ9IjEyLjMiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgOS42MSkiIG92ZXJmbG93PSJ2aXNpYmxlIiBjb2xvcj0iIzI2MkEzMCI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJTMy5GMS5waWMxLjYuNi42LjUuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+QXVkaW/igJNJbWFnZSBBbGlnbm1lbnQ8L3NwYW4+PC9zcGFuPjwvc3Bhbj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzYxNjE2MTstLWx0eC1maWxsLWNvbG9yOiM2MTYxNjE7IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgLTc3Ljk2IC05OS41OSkiIGZpbGw9IiM2MTYxNjEiIHN0cm9rZT0iIzYxNjE2MSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Ii0tbHR4LWZnLWNvbG9yOiM2MTYxNjE7LS1sdHgtZm8td2lkdGg6MTQuMTllbTstLWx0eC1mby1oZWlnaHQ6MC42MWVtOy0tbHR4LWZvLWRlcHRoOjAuMTdlbTsiIHdpZHRoPSIxNTYuNTIiIGhlaWdodD0iOC42MSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA2LjczKSIgb3ZlcmZsb3c9InZpc2libGUiIGNvbG9yPSIjNjE2MTYxIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IlMzLkYxLnBpYzEuNy43LjcuNi4xLjEiIGNsYXNzPSJsdHhfdGV4dCIgc3R5bGU9ImZvbnQtc2l6ZTo3MCU7LS1sdHgtZmctY29sb3I6IzYxNjE2MTsiPkNvbnRyYXN0aXZlIGFsaWduLiB0byB2aXNpb24gZW5jLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMzM5Mzg4Oy0tbHR4LWZpbGwtY29sb3I6I0Q2RTlFNzsiIHN0cm9rZT0iIzMzOTM4OCIgZmlsbD0iI0Q2RTlFNyIgc3Ryb2tlLXdpZHRoPSIwLjVwdCI+PHBhdGggZD0iTSAtOC4xNCAtMTExLjc0IEwgLTUxLjY1IC0xMTEuNzQgQyAtNTMuNTYgLTExMS43NCAtNTUuMTEgLTExMy4yOSAtNTUuMTEgLTExNS4yIEwgLTU1LjExIC0xMjYuMzkgQyAtNTUuMTEgLTEyOC4zIC01My41NiAtMTI5Ljg1IC01MS42NSAtMTI5Ljg1IEwgLTguMTQgLTEyOS44NSBDIC02LjIzIC0xMjkuODUgLTQuNjggLTEyOC4zIC00LjY4IC0xMjYuMzkgTCAtNC42OCAtMTE1LjIgQyAtNC42OCAtMTEzLjI5IC02LjIzIC0xMTEuNzQgLTguMTQgLTExMS43NCBaIE0gLTU1LjExIC0xMjkuODUiPjwvcGF0aD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMDA0ODQwOy0tbHR4LWZpbGwtY29sb3I6IzAwNDg0MDsiIHN0cm9rZS13aWR0aD0iMC41cHQiIGZpbGw9IiMwMDQ4NDAiIHN0cm9rZT0iIzAwNDg0MCIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIC01MC45NiAtMTI0LjExKSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Ii0tbHR4LWZnLWNvbG9yOiMwMDQ4NDA7LS1sdHgtZm8td2lkdGg6My4zNmVtOy0tbHR4LWZvLWhlaWdodDowLjUzZW07LS1sdHgtZm8tZGVwdGg6MGVtOyIgd2lkdGg9IjQyLjEzIiBoZWlnaHQ9IjYuNjUiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNi42NSkiIG92ZXJmbG93PSJ2aXNpYmxlIiBjb2xvcj0iIzAwNDg0MCI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJTMy5GMS5waWMxLjguOC44LjcuMS4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCIgc3R5bGU9ImZvbnQtc2l6ZTo3MCU7LS1sdHgtZmctY29sb3I6IzAwNDg0MDsiPkFVRElPPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiNEMjk2MzM7LS1sdHgtZmlsbC1jb2xvcjojRjZFQUQ2OyIgc3Ryb2tlPSIjRDI5NjMzIiBmaWxsPSIjRjZFQUQ2IiBzdHJva2Utd2lkdGg9IjAuNXB0Ij48cGF0aCBkPSJNIDUyLjk0IC0xMTEuNzQgTCA4LjE0IC0xMTEuNzQgQyA2LjIzIC0xMTEuNzQgNC42OCAtMTEzLjI5IDQuNjggLTExNS4yIEwgNC42OCAtMTI2LjM5IEMgNC42OCAtMTI4LjMgNi4yMyAtMTI5Ljg1IDguMTQgLTEyOS44NSBMIDUyLjk0IC0xMjkuODUgQyA1NC44NSAtMTI5Ljg1IDU2LjQgLTEyOC4zIDU2LjQgLTEyNi4zOSBMIDU2LjQgLTExNS4yIEMgNTYuNCAtMTEzLjI5IDU0Ljg1IC0xMTEuNzQgNTIuOTQgLTExMS43NCBaIE0gNC42OCAtMTI5Ljg1Ij48L3BhdGg+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6Izc3NEEwMDstLWx0eC1maWxsLWNvbG9yOiM3NzRBMDA7IiBzdHJva2Utd2lkdGg9IjAuNXB0IiBmaWxsPSIjNzc0QTAwIiBzdHJva2U9IiM3NzRBMDAiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCA4LjgzIC0xMjQuMTEpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0iLS1sdHgtZmctY29sb3I6Izc3NEEwMDstLWx0eC1mby13aWR0aDozLjQ5ZW07LS1sdHgtZm8taGVpZ2h0OjAuNTNlbTstLWx0eC1mby1kZXB0aDowZW07IiB3aWR0aD0iNDMuNzYiIGhlaWdodD0iNi42NSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA2LjY1KSIgb3ZlcmZsb3c9InZpc2libGUiIGNvbG9yPSIjNzc0QTAwIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IlMzLkYxLnBpYzEuOS45LjkuOC4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIiBzdHlsZT0iZm9udC1zaXplOjcwJTstLWx0eC1mZy1jb2xvcjojNzc0QTAwOyI+SU1BR0U8L3NwYW4+PC9zcGFuPjwvc3Bhbj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzZFNDY4QzstLWx0eC1maWxsLWNvbG9yOiNGMkVFRjU7IiBzdHJva2U9IiM2RTQ2OEMiIGZpbGw9IiNGMkVFRjUiIHN0cm9rZS13aWR0aD0iMC44cHQiPjxwYXRoIGQ9Ik0gMTI1LjA4IC0xNzAuNTIgTCAtMTI1LjA4IC0xNzAuNTIgQyAtMTI3Ljc1IC0xNzAuNTIgLTEyOS45MiAtMTcyLjY5IC0xMjkuOTIgLTE3NS4zNiBMIC0xMjkuOTIgLTIzOC41MSBDIC0xMjkuOTIgLTI0MS4xOSAtMTI3Ljc1IC0yNDMuMzYgLTEyNS4wOCAtMjQzLjM2IEwgMTI1LjA4IC0yNDMuMzYgQyAxMjcuNzUgLTI0My4zNiAxMjkuOTIgLTI0MS4xOSAxMjkuOTIgLTIzOC41MSBMIDEyOS45MiAtMTc1LjM2IEMgMTI5LjkyIC0xNzIuNjkgMTI3Ljc1IC0xNzAuNTIgMTI1LjA4IC0xNzAuNTIgWiBNIC0xMjkuOTIgLTI0My4zNiI+PC9wYXRoPjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiM2RTQ2OEM7LS1sdHgtZmlsbC1jb2xvcjojRUVFOUYxOyIgc3Ryb2tlPSIjNkU0NjhDIiBmaWxsPSIjRUVFOUYxIiBzdHJva2Utd2lkdGg9IjAuOHB0Ij48cGF0aCBkPSJNIC0xMDQuOTcgLTE4My42NyBDIC0xMDQuOTcgLTE3Ny41OCAtMTA5LjkgLTE3Mi42NCAtMTE1Ljk5IC0xNzIuNjQgQyAtMTIyLjA4IC0xNzIuNjQgLTEyNy4wMSAtMTc3LjU4IC0xMjcuMDEgLTE4My42NyBDIC0xMjcuMDEgLTE4OS43NSAtMTIyLjA4IC0xOTQuNjkgLTExNS45OSAtMTk0LjY5IEMgLTEwOS45IC0xOTQuNjkgLTEwNC45NyAtMTg5Ljc1IC0xMDQuOTcgLTE4My42NyBaIE0gLTExNS45OSAtMTgzLjY3Ij48L3BhdGg+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzZFNDY4QzstLWx0eC1maWxsLWNvbG9yOiM2RTQ2OEM7IiBzdHJva2Utd2lkdGg9IjAuOHB0IiBmaWxsPSIjNkU0NjhDIiBzdHJva2U9IiM2RTQ2OEMiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAtMTE5LjEyIC0xODYuNzkpIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0iLS1sdHgtZmctY29sb3I6IzZFNDY4QzstLWx0eC1mby13aWR0aDowLjVlbTstLWx0eC1mby1oZWlnaHQ6MC41ZW07LS1sdHgtZm8tZGVwdGg6MGVtOyIgd2lkdGg9IjYuMjciIGhlaWdodD0iNi4yNCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA2LjI0KSIgb3ZlcmZsb3c9InZpc2libGUiIGNvbG9yPSIjNkU0NjhDIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IlMzLkYxLnBpYzEuMTAuMTAuMTAuOS4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIiBzdHlsZT0iZm9udC1zaXplOjcwJTsiPjM8L3NwYW4+PC9zcGFuPjwvc3Bhbj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzI2MkEzMDstLWx0eC1maWxsLWNvbG9yOiMyNjJBMzA7IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgLTY1LjcyIC0xODkuMTQpIiBmaWxsPSIjMjYyQTMwIiBzdHJva2U9IiMyNjJBMzAiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mZy1jb2xvcjojMjYyQTMwOy0tbHR4LWZvLXdpZHRoOjguMjZlbTstLWx0eC1mby1oZWlnaHQ6MC42NWVtOy0tbHR4LWZvLWRlcHRoOjAuMjJlbTsiIHdpZHRoPSIxMzEuNDQiIGhlaWdodD0iMTMuODQiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMTAuMzgpIiBvdmVyZmxvdz0idmlzaWJsZSIgY29sb3I9IiMyNjJBMzAiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250YWluZXIiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250ZW50Ij48c3BhbiBpZD0iUzMuRjEucGljMS4xMS4xMS4xMS4xMC4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIj5GaW5lLXR1bmluZyAoQVNSKTwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojNjE2MTYxOy0tbHR4LWZpbGwtY29sb3I6IzYxNjE2MTsiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAtMTA5LjM2IC0yMDMuMDYpIiBmaWxsPSIjNjE2MTYxIiBzdHJva2U9IiM2MTYxNjEiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mZy1jb2xvcjojNjE2MTYxOy0tbHR4LWZvLXdpZHRoOjE5LjgzZW07LS1sdHgtZm8taGVpZ2h0OjAuNjFlbTstLWx0eC1mby1kZXB0aDowLjE3ZW07IiB3aWR0aD0iMjE4LjcxIiBoZWlnaHQ9IjguNjEiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNi43MykiIG92ZXJmbG93PSJ2aXNpYmxlIiBjb2xvcj0iIzYxNjE2MSI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJTMy5GMS5waWMxLjEyLjEyLjEyLjExLjEuMSIgY2xhc3M9Imx0eF90ZXh0IiBzdHlsZT0iZm9udC1zaXplOjcwJTstLWx0eC1mZy1jb2xvcjojNjE2MTYxOyI+RmFzdENvbmZvcm1lciArIGh5YnJpZCBDVEPigJNURFQgZGVjb2Rlcjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMzM5Mzg4Oy0tbHR4LWZpbGwtY29sb3I6I0Q2RTlFNzsiIHN0cm9rZT0iIzMzOTM4OCIgZmlsbD0iI0Q2RTlFNyIgc3Ryb2tlLXdpZHRoPSIwLjVwdCI+PHBhdGggZD0iTSAtOC4xNCAtMjE1LjIxIEwgLTUxLjY1IC0yMTUuMjEgQyAtNTMuNTYgLTIxNS4yMSAtNTUuMTEgLTIxNi43NSAtNTUuMTEgLTIxOC42NyBMIC01NS4xMSAtMjI5Ljg2IEMgLTU1LjExIC0yMzEuNzcgLTUzLjU2IC0yMzMuMzIgLTUxLjY1IC0yMzMuMzIgTCAtOC4xNCAtMjMzLjMyIEMgLTYuMjMgLTIzMy4zMiAtNC42OCAtMjMxLjc3IC00LjY4IC0yMjkuODYgTCAtNC42OCAtMjE4LjY3IEMgLTQuNjggLTIxNi43NSAtNi4yMyAtMjE1LjIxIC04LjE0IC0yMTUuMjEgWiBNIC01NS4xMSAtMjMzLjMyIj48L3BhdGg+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzAwNDg0MDstLWx0eC1maWxsLWNvbG9yOiMwMDQ4NDA7IiBzdHJva2Utd2lkdGg9IjAuNXB0IiBmaWxsPSIjMDA0ODQwIiBzdHJva2U9IiMwMDQ4NDAiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAtNTAuOTYgLTIyNy41OCkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mZy1jb2xvcjojMDA0ODQwOy0tbHR4LWZvLXdpZHRoOjMuMzZlbTstLWx0eC1mby1oZWlnaHQ6MC41M2VtOy0tbHR4LWZvLWRlcHRoOjBlbTsiIHdpZHRoPSI0Mi4xMyIgaGVpZ2h0PSI2LjY1IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDYuNjUpIiBvdmVyZmxvdz0idmlzaWJsZSIgY29sb3I9IiMwMDQ4NDAiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250YWluZXIiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250ZW50Ij48c3BhbiBpZD0iUzMuRjEucGljMS4xMy4xMy4xMy4xMi4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIiBzdHlsZT0iZm9udC1zaXplOjcwJTstLWx0eC1mZy1jb2xvcjojMDA0ODQwOyI+QVVESU88L3NwYW4+PC9zcGFuPjwvc3Bhbj48L2ZvcmVpZ25PYmplY3Q+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzcyN0NCMzstLWx0eC1maWxsLWNvbG9yOiNFM0U1RjA7IiBzdHJva2U9IiM3MjdDQjMiIGZpbGw9IiNFM0U1RjAiIHN0cm9rZS13aWR0aD0iMC41cHQiPjxwYXRoIGQ9Ik0gOTMuNzEgLTIxNS4yMSBMIDguMTQgLTIxNS4yMSBDIDYuMjMgLTIxNS4yMSA0LjY4IC0yMTYuNzUgNC42OCAtMjE4LjY3IEwgNC42OCAtMjI5Ljg2IEMgNC42OCAtMjMxLjc3IDYuMjMgLTIzMy4zMiA4LjE0IC0yMzMuMzIgTCA5My43MSAtMjMzLjMyIEMgOTUuNjIgLTIzMy4zMiA5Ny4xNyAtMjMxLjc3IDk3LjE3IC0yMjkuODYgTCA5Ny4xNyAtMjE4LjY3IEMgOTcuMTcgLTIxNi43NSA5NS42MiAtMjE1LjIxIDkzLjcxIC0yMTUuMjEgWiBNIDQuNjggLTIzMy4zMiI+PC9wYXRoPjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiMyRjM2NjA7LS1sdHgtZmlsbC1jb2xvcjojMkYzNjYwOyIgc3Ryb2tlLXdpZHRoPSIwLjVwdCIgZmlsbD0iIzJGMzY2MCIgc3Ryb2tlPSIjMkYzNjYwIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgOC44MyAtMjI3LjU4KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Ii0tbHR4LWZnLWNvbG9yOiMyRjM2NjA7LS1sdHgtZm8td2lkdGg6Ni43MWVtOy0tbHR4LWZvLWhlaWdodDowLjUzZW07LS1sdHgtZm8tZGVwdGg6MGVtOyIgd2lkdGg9Ijg0LjE5IiBoZWlnaHQ9IjYuNjUiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNi42NSkiIG92ZXJmbG93PSJ2aXNpYmxlIiBjb2xvcj0iIzJGMzY2MCI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJTMy5GMS5waWMxLjE0LjE0LjE0LjEzLjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQiIHN0eWxlPSJmb250LXNpemU6NzAlOy0tbHR4LWZnLWNvbG9yOiMyRjM2NjA7Ij5UUkFOU0NSSVBUPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiM1MTU0NTk7IiBzdHJva2Utd2lkdGg9IjEuMHB0IiBzdHJva2U9IiM1MTU0NTkiPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmUiIGQ9Ik0gMCAtMzYuOTcgTCAwIC02MC4yNiI+PC9wYXRoPjxnIHN0eWxlPSItLWx0eC1maWxsLWNvbG9yOiM1MTU0NTk7IiBmaWxsPSIjNTE1NDU5IiBzdHJva2UtZGFzaGFycmF5PSJub25lIiBzdHJva2UtZGFzaG9mZnNldD0iMC4wcHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHRyYW5zZm9ybT0ibWF0cml4KDAuMCAtMS4wIDEuMCAwLjAgMCAtNTcuMDUpIj48cGF0aCBkPSJNIDcuOTQgMCBMIDEuOTkgMi42OSBMIDMuNTYgMCBMIDEuOTkgLTIuNjkgWiI+PC9wYXRoPjwvZz48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojNTE1NDU5OyIgc3Ryb2tlLXdpZHRoPSIxLjBwdCIgc3Ryb2tlPSIjNTE1NDU5Ij48cGF0aCBzdHlsZT0iZmlsbDpub25lIiBkPSJNIDAgLTE0MC40NCBMIDAgLTE2My43MyI+PC9wYXRoPjxnIHN0eWxlPSItLWx0eC1maWxsLWNvbG9yOiM1MTU0NTk7IiBmaWxsPSIjNTE1NDU5IiBzdHJva2UtZGFzaGFycmF5PSJub25lIiBzdHJva2UtZGFzaG9mZnNldD0iMC4wcHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHRyYW5zZm9ybT0ibWF0cml4KDAuMCAtMS4wIDEuMCAwLjAgMCAtMTYwLjUyKSI+PHBhdGggZD0iTSA3Ljk0IDAgTCAxLjk5IDIuNjkgTCAzLjU2IDAgTCAxLjk5IC0yLjY5IFoiPjwvcGF0aD48L2c+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzZCNkI2QjstLWx0eC1maWxsLWNvbG9yOiM2QjZCNkI7IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgNy42NiAtNTQuMTYpIiBmaWxsPSIjNkI2QjZCIiBzdHJva2U9IiM2QjZCNkIiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mZy1jb2xvcjojNkI2QjZCOy0tbHR4LWZvLXdpZHRoOjUuMzhlbTstLWx0eC1mby1oZWlnaHQ6MC41OGVtOy0tbHR4LWZvLWRlcHRoOjAuMTZlbTsiIHdpZHRoPSI2Mi44NyIgaGVpZ2h0PSI4LjYxIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDYuNzMpIiBvdmVyZmxvdz0idmlzaWJsZSIgY29sb3I9IiM2QjZCNkIiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250YWluZXIiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250ZW50Ij48c3BhbiBpZD0iUzMuRjEucGljMS4xNS4xNS4xNS4xNC4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9pdGFsaWMiIHN0eWxlPSJmb250LXNpemU6NzAlOy0tbHR4LWZnLWNvbG9yOiM2QjZCNkI7Ij5pbml0LiB3ZWlnaHRzPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiM2QjZCNkI7LS1sdHgtZmlsbC1jb2xvcjojNkI2QjZCOyIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIDcuNjYgLTE1Ny42MykiIGZpbGw9IiM2QjZCNkIiIHN0cm9rZT0iIzZCNkI2QiI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Ii0tbHR4LWZnLWNvbG9yOiM2QjZCNkI7LS1sdHgtZm8td2lkdGg6NS4zOGVtOy0tbHR4LWZvLWhlaWdodDowLjU4ZW07LS1sdHgtZm8tZGVwdGg6MC4xNmVtOyIgd2lkdGg9IjYyLjg3IiBoZWlnaHQ9IjguNjEiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNi43MykiIG92ZXJmbG93PSJ2aXNpYmxlIiBjb2xvcj0iIzZCNkI2QiI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJTMy5GMS5waWMxLjE2LjE2LjE2LjE1LjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2l0YWxpYyIgc3R5bGU9ImZvbnQtc2l6ZTo3MCU7LS1sdHgtZmctY29sb3I6IzZCNkI2QjsiPmluaXQuIHdlaWdodHM8L3NwYW4+PC9zcGFuPjwvc3Bhbj48L2ZvcmVpZ25PYmplY3Q+PC9nPjwvZz48L2c+PC9zdmc+)

![图2](data:image/svg+xml;base64,PHN2ZyBpZD0iUzMuRjIuMS5waWMxIiBjbGFzcz0ibHR4X3BpY3R1cmUiIGhlaWdodD0iNjk4Lj...[truncated 145488 chars]...)


### 💡 核心创新点

1.  流水线创新：首次系统地将无监督的音频-图像对齐作为预训练与微调之间的独立中间阶段，用于适配预训练音频模型。这不同于传统的多模态融合推理或端到端多模态训练。
2.  无需转录的适应：利用易获取的音频-图像配对数据作为“伪标签”信号，为缺乏转录文本的低资源语言提供了一种额外的适应途径。
3.  架构灵活性：提出了多种对齐配置（单向量/多向量、不同视觉骨干），展示了方法在不同模态交互粒度下的适用性。
4.  显著的跨域泛化：实验证明该对齐阶段带来的提升在跨域场景（从Vaani到FLEURS）中尤为显著，表明其增强了表示的泛化能力。

### 📊 实验结果

论文在Vaani（多语言，48种语言）和FLEURS（低资源南亚语言，14种语言）两个基准上评估了所提方法。

1. Vaani多语言结果（48种语言，表II）
模型整体WER及相对改善如下表所示。所有对齐模型均优于基线，且改善具有统计显著性（\(p<10^{-4}\)）。SigLIP2-large变体效果最好。

表II(a)：整体WER
| 模型 | WER ↓ | ΔWER | 相对改善(%) | Δ的95%置信区间 |
| :--- | :--- | :--- | :--- | :--- |
| 基线 (无对齐) | 0.2809 | – | – | – |
| Qwen3-VL (多图) | 0.2768 | +0.0041 | +1.47† | [+0.0033, +0.0049] |
| SigLIP2-base (单图) | 0.2771 | +0.0038 | +1.35† | [+0.0030, +0.0046] |
| SigLIP2-large (多图) | 0.2740 | +0.0069 | +2.47† | [+0.0062, +0.0078] |

表II(b)：每种语言结果统计（48种语言）
| 模型 | 子集 | 改善数 | 显著改善 (\(p<10^{-4}\)) | 退化数 | 显著退化 (\(p<10^{-4}\)) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Qwen3-VL | 全部 | 33/48 | 15/48 | 14/48 | 1/48 |
| | 计划内语言 | 13/15 | 8/15 | 2/15 | 0/15 |
| | 非计划内语言 | 20/33 | 7/33 | 12/33 | 1/33 |
| SigLIP2-base | 全部 | 37/48 | 14/48 | 11/48 | 0/48 |
| | 计划内语言 | 15/15 | 9/15 | 0/15 | 0/15 |
| | 非计划内语言 | 22/33 | 5/33 | 11/33 | 0/33 |
| SigLIP2-large | 全部 | 37/48 | 20/48 | 10/48 | 0/48 |
| | 计划内语言 | 15/15 | 12/15 | 8/15 | 0/15 |
| | 非计划内语言 | 22/33 | 8/33 | 10/33 | 0/33 |

2. FLEURS南亚语言结果（14种语言，表III）
此设置评估跨域泛化能力。基线WER高达0.6778，对齐模型带来大幅提升。SigLIP2-base配置效果最佳。

表III(a)：模型整体表现
| 模型 | WER (改善语言数) | 显著改善 (\(p<10^{-4}\)) | 退化语言数 | 显著退化 (\(p<10^{-4}\)) |
| :--- | :--- | :--- | :--- | :--- |
| 基线 (仅SSL) | 0.6778 (–) | – | – | – |
| Qwen3-VL (多图) | 0.5683 (12/14) | 10/14 | 2/14 | 2/14 |
| SigLIP2-large (多图) | 0.5358 (13/14) | 13/14 | 1/14 | 1/14 |
| SigLIP2-base (单图) | 0.5338 (13/14) | 13/14 | 1/14 | 0/14 |

表III(b)：SigLIP2-base逐语言WER细节
| 语言 | 测试量 | WER_base | WER_aln | Δ | 相对改善(%) | Δ的95%置信区间 | p值 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 马拉地语 | 1,015 | 0.7571 | 0.5188 | +0.2383 | +31.48† | [+0.2280, +0.2489] | <10⁻⁴ |
| 古吉拉特语 | 1,000 | 0.4855 | 0.4433 | +0.0422 | +8.69† | [+0.0334, +0.0510] | <10⁻⁴ |
| 阿萨姆语 | 984 | 0.5853 | 0.5319 | +0.0534 | +9.13† | [+0.0459, +0.0606] | <10⁻⁴ |
| 信德语 | 980 | 0.7735 | 0.5413 | +0.2322 | +30.02† | [+0.2145, +0.2505] | <10⁻⁴ |
| 马拉雅拉姆语 | 958 | 0.9733 | 0.5428 | +0.4305 | +44.23† | [+0.4134, +0.4466] | <10⁻⁴ |
| 孟加拉语 | 920 | 0.4348 | 0.4121 | +0.0227 | +5.22† | [+0.0157, +0.0299] | <10⁻⁴ |
| 奥里亚语 | 883 | 0.8172 | 0.6234 | +0.1939 | +23.72† | [+0.1784, +0.2084] | <10⁻⁴ |
| 卡纳达语 | 838 | 0.7231 | 0.4984 | +0.2247 | +31.07† | [+0.2067, +0.2434] | <10⁻⁴ |
| 尼泊尔语 | 726 | 0.6390 | 0.5459 | +0.0931 | +14.57† | [+0.0816, +0.1048] | <10⁻⁴ |
| 泰米尔语 | 591 | 0.7346 | 0.6526 | +0.0820 | +11.17† | [+0.0671, +0.0965] | <10⁻⁴ |
| 旁遮普语 | 574 | 0.5864 | 0.4837 | +0.1027 | +17.52† | [+0.0864, +0.1200] | <10⁻⁴ |
| 泰卢固语 | 472 | 0.6215 | 0.5678 | +0.0537 | +8.64† | [+0.0398, +0.0674] | <10⁻⁴ |
| 印地语 | 418 | 0.4743 | 0.3520 | +0.1223 | +25.79† | [+0.1011, +0.1442] | <10⁻⁴ |
| 乌尔都语 | 299 | 1.0005 | 1.0021 | -0.0017 | -0.17 | [-0.0069, +0.0035] | 0.523 |
| 总体 | 10,658 | 0.6778 | 0.5338 | +0.1441 | +21.26† | [+0.1396, +0.1482] | <10⁻⁴ |

补充实验：论文通过图3说明，随着微调数据增加（10小时到50小时），对齐模型与基线的WER差距逐渐缩小，表明对齐益处在极低资源下最明显。此外，通过比较预训练阶段三个连续检查点微调后的性能（WER几乎无差异），论证了改进源于对齐阶段而非单纯更多预训练。

![图3](https://arxiv.org/html/2606.24080v1/x1.png)


### ⚖️ 评分理由

*   创新性 (1.2/2)： 提出将音频-图像对齐作为独立中间阶段是一个清晰且合理的idea，但技术本身（对比学习）并非新颖。创新更多体现在将其应用于特定低资源ASR流水线的新颖性，而非方法论上的重大突破。思路有一定启发性。
*   技术严谨性 (1.3/1.5)： 实验设计合理，控制了计算量（统一训练epoch），使用了多种对齐配置进行对比，并进行了严格的统计显著性检验（bootstrap test），增强了结果的可信度。然而，对齐阶段的关键设计选择（如为何选择特定的池化方式、学习率缩放因子）缺乏充分的理论或实验依据讨论。
*   实验充分性 (1.0/1.5)： 在两个数据集上验证了有效性，并进行了数据量影响的分析和部分消融实验。不足之处在于：1) 缺乏更彻底的消融，如随机图像配对基线；2) 未在更多样的低资源数据集（非Vaani采集范式）上验证；3) 未与更新的SOTA低资源ASR方法进行直接比较，仅与自身基线对比。
*   清晰度 (1.3/1.5)： 论文结构清晰，方法描述较为详细（包括三种配置的细节），实验结果呈现完整（提供了置信区间和p值）。图表（如Figure 1, 2）对理解方法有帮助。公式表述规范。
*   影响力 (0.5/1.5)： 对特定领域（使用图片提示收集语音的语言项目）的ASR有直接价值。但方法的广泛影响力受限于其对特定类型多模态数据（语义对齐的音频-图像对）的强依赖，在大多数现有低资源数据场景中难以直接应用。对于语音社区，提供了一种新的表示适应思路，但实用门槛较高。
*   开源 (0.2/1)： 论文未提供任何代码、模型权重或训练检查点。仅引用了若干开源库和模型作为工具或基线。完全的黑箱状态，严重阻碍了后续研究和复现。
*   可复现性 (0.4/1.5)： 论文详细报告了关键超参数（优化器、学习率、训练步数、批次大小等）和硬件配置（8xH100），为复现提供了基础。但由于核心数据（Vaani）和代码均未公开，实际复现几乎不可能。
*   工程/实践价值 (0.6/1)： 思路新颖，为ASR预训练提供了新维度。但在工程实践中，需要额外收集和处理大量音频-图像对数据，增加了数据管线的复杂性和成本。模型本身（17层FastConformer）的推理开销未讨论，可能不适合资源受限的部署场景。

#

### 🚨 局限与问题

1.  数据依赖性陷阱：方法的成功极度依赖Vaani数据集特有的“图片提示”收集方式，这天然提供了高质量的音频-图像语义对。在绝大多数自然采集的低资源语音数据中，这种对齐数据并不存在。因此，该方法的普适性存疑，更像是为特定数据收集范式量身定制的方案，而非通用解决方案。
2.  对齐信号的有效性边界：论文未深入探讨图像语义与语音内容之间的对齐质量。例如，当说话者基于图片进行自由、发散的描述时，语音内容与图像的直接相关性可能很弱。对齐阶段是否在利用这种“松散关联”进行正则化，还是存在信息混淆？缺乏分析。
3.  与现有方法的对比缺失：论文声称是“transcription-free adaptation”，但未与同样无需转录文本的其他适应方法（如利用大量无转录语音继续预训练、或使用伪标签）进行充分对比。因此，无法断定“音频-图像对齐”这一特定信号源是否优于其他无监督信号。
4.  “改进”来源的归因不完全：尽管用预训练检查点实验部分排除了“更多预训练”的假设，但更严格的归因应包括一个关键对照：使用相同音频但随机打乱配对的图像进行对齐训练。如果该随机配对模型仍有提升，则说明改进可能部分源于模型在对齐阶段接受了更多的语音数据“曝光”和梯度更新，而不仅仅是来自跨模态对齐。
5.  性能上界问题：在FLEURS上21%的相对改善固然显著，但最终性能（WER 0.53）仍远未达到实用水平。论文未讨论如何与更强的单模态或其它多模态基线结合，以追求更低的绝对错误率。

---

[← 返回 2026-06-24 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-06-24/)
