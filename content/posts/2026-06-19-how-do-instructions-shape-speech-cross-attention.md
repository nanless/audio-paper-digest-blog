---
title: "How Do Instructions Shape Speech? Cross-Attention Attribution for Style-Captioned Text-to-Speech"
date: 2026-06-19
draft: false
tags: [语音合成, 扩散模型, 流匹配]
categories: [论文速递]
description: "语音合成 | 7.7/10"
hiddenInHomeList: true
---

# 📄 How Do Instructions Shape Speech? Cross-Attention Attribution for Style-Captioned Text-to-Speech

#语音合成 #扩散模型 #流匹配

**7.7/10** | 创新 1.5/2 | 严谨 1/1.5 | 实验 1.5/1.5 | 清晰 1/1 | 影响 1.5/1.5 | 开源 0/1.5 | 复现 0.2/0.5 | 工程 1/1.5

✅ **7.7/10** | 前50% | #语音合成 | #扩散模型 | #流匹配 | [arxiv](https://arxiv.org/abs/2606.20532)


### 👥 作者与机构

Nityanand Mathur, Wasim Hamees, Apoorv Madha, Sameer Singh, Akshat Khurana, Sudarshan Mandloi, Nityanand Kamath
Smallest.ai

### 💡 毒舌点评

1. 论文提出了一个有价值的问题：风格描述中的词语如何影响语音合成。将DAAM适配到语音领域（具体是流匹配模型）的思路是新颖的，且实验规模（3600组合）值得肯定。
2. 然而，“可解释性”工作的核心在于解释的深度和普适性。本文的解释停留在“统计关联”层面（如方差低=全局调节），缺乏对机制本身的因果探索（如注意力编辑实验）。所揭示的规律（早期步骤重要）在扩散模型中并非全新发现。
3. 最大的硬伤在于其“可复现性”和“可扩展性”。分析完全基于单一、未公开的商业模型（CapSpeech），使用的是精心构造的合成提示（120个模板化句子）。这严重限制了结论的泛化能力。读者无法验证、复现或在自己的模型上应用该方法。
4. 部分分析结论（如函数token在后期步骤重要性上升）虽然有趣，但缺乏更深入的解释，只是现象描述。整体而言，这篇论文像是一份详尽的“模型行为观察报告”，而非一篇能提供新方法或深刻洞见的可解释性研究。

### 📌 核心摘要

本文首次将扩散模型注意力归因方法（DAAM）适配到语音合成领域，用于分析风格描述词如何影响基于流匹配的TTS模型（CapSpeech-TTS）的输出。通过对大量（风格描述，文本转录）组合生成的跨注意力图进行系统性分析，论文发现：风格标记通过注意力机制扮演全局调节角色，其注意力模式在时间上分布均匀，与生成语音的基频和能量具有语义一致的统计相关性，且其影响力在生成过程的早期ODE步骤和深层Transformer层中达到峰值。

### 🔗 开源详情

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及模型权重下载链接（如HuggingFace/ModelScope）。
- 数据集：论文中描述了数据集构建方法（120个风格说明与30个文本记录的组合），但未提供数据集的公开获取链接或下载地址。
- Demo：论文中未提及在线演示链接。
- 复现材料：论文中未提及训练配置、检查点、附录等具体复现材料的链接或获取方式。
- 论文中引用的开源项目：CapSpeech， VoiceBox， NaturalSpeech 3， DAAM， T5编码器， CLAP编码器， HiFi-GAN声码器， pYIN算法， librosa库， Flow matching， Diffusion Transformer (DiT)。论文中均未提供其具体的代码或模型仓库链接。

### 🏗️ 方法概述和架构

论文提出的方法核心是将用于图像生成的DAAM框架适配到基于流匹配的语音扩散模型CapSpeech-TTS中，并进行系统性分析。

CapSpeech架构概述： CapSpeech是一个非自回归TTS模型，采用流匹配（flow matching）技术，其核心是一个扩散Transformer（DiT）。整个流程包含四个组件：
1.  T5文本编码器：接收输入的风格描述文本（例如“a calm, deep voice speaking slowly”），将其编码为一系列上下文嵌入向量\(\mathbf{E}_{c} \in \mathbb{R}^{T_{c} \times d}\)。这些嵌入携带了丰富的语义信息。
2.  CLAP音频编码器：从简短的风格标签中提取一个全局风格嵌入\(\mathbf{e}_{\text{clap}} \in \mathbb{R}^{d'}\)，为模型提供声学层面的条件补充。
3.  流匹配DiT核心：这是一个包含\(L=25\)层Transformer的生成模型。它以一个高斯噪声潜变量\(\mathbf{x}_{0} \sim \mathcal{N}(0,I)\)作为起点，通过求解概率流常微分方程（ODE），在\(S=24\)个步骤内迭代地将其精炼为梅尔频谱图潜变量\(\mathbf{x}_{s}\)。在每一层、每一个ODE步骤中，DiT都包含自注意力、交叉注意力和前馈网络子层。其中，交叉注意力是风格调节的关键位置：查询（Q）来自当前的音频潜变量\(\mathbf{x}_{s}\)，而键（K）和值（V）则来自由T5编码器输出的风格描述嵌入\(\mathbf{E}_{c}\)。模型学习的条件速度场\(v_{\theta}(\mathbf{x}_{s}, s, \mathbf{E}_{c})\)定义了这一传输过程。
4.  HiFi-GAN声码器：将精炼后的梅尔频谱图最终转换为人耳可听的波形输出\(\mathbf{w}\)。

DAAM适配与归因方法： 为了量化每个风格词对音频生成的影响，作者在DiT的每一个交叉注意力模块上注册了前向钩子，以拦截每个注意力头在每个层\(l\)和每个ODE步骤\(s\)计算出的注意力图\(A^{(l,s)}_h \in \mathbb{R}^{T_{a} \times T_{c}}\)。具体归因过程为：
1.  头部平均：对于每个注意力张量，首先对\(H\)个注意力头进行平均，得到\(\bar{A}^{(l,s)} \in \mathbb{R}^{T_{a} \times T_{c}}\)。
2.  全局聚合：为了得到每个标记\(j\)在整个生成过程中的总体影响，将上述矩阵在所有\(L\)层和\(S\)步上进行平均，得到一个一维的时序归因热图\(M_{j} \in \mathbb{R}^{T_{a}}\)。该热图显示了模型在整个生成过程中对特定标记\(j\)在音频时间轴各处的平均关注度。
3.  标记分类与分析指标：论文将风格描述中的标记分为三类：风格标记（30个形容词）、内容标记（20个名词）和功能标记（冠词、介词等）。基于聚合后的热图\(M_{j}\)，定义了五个关键分析指标：时序方差\(\sigma^{2}_{j}\)（衡量注意力在时间上的集中度）、峰均比\(\text{PMR}_{j}\)（衡量注意力峰值的尖锐程度）、时序熵\(H_{j}\)（衡量注意力分布的均匀性）、声学相关性（计算\(M_{j}\)与生成音频的帧级基频F0和能量的皮尔逊相关系数\(r\)），以及层级/步骤重要性\(I_{\mathcal{C}}^{(l)}\)和\(I_{\mathcal{C}}^{(s)}\)（衡量不同类别标记在不同深度和生成阶段的平均注意力权重）。

通过这套方法，论文从海量生成实例中提取了约211万个注意力矩阵，对每个风格标记的全局、局部及声学影响进行了量化刻画。

![图1](data:image/svg+xml;base64,PHN2ZyBpZD0iUzMuRjEuMS5waWMxIiBjbGFzcz0ibHR4X3BpY3R1cmUiIGhlaWdodD0iMTc0Ljg5IiBvdmVyZmxvdz0idmlzaWJsZSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTQzLjg4IDE3NC44OSIgd2lkdGg9IjU0My44OCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwxNzQuODkpIG1hdHJpeCgxIDAgMCAtMSAwIDApIHRyYW5zbGF0ZSgxMzIuNzIsMCkgdHJhbnNsYXRlKDAsODcuNDQpIj48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiMwMDAwMDA7LS1sdHgtZmlsbC1jb2xvcjojMDAwMDAwOyIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjMDAwMDAwIj48ZyBzdHJva2Utd2lkdGg9IjAuNHB0Ij48ZyBzdHlsZT0iLS1sdHgtZmlsbC1jb2xvcjojRUJFQkZGOyIgZmlsbD0iI0VCRUJGRiI+PHBhdGggZD0iTSAyMTIuOTcgMjUuODcgTCAtMzguNjMgMjUuODcgQyAtNDIuNDUgMjUuODcgLTQ1LjU1IDIyLjc3IC00NS41NSAxOC45NSBMIC00NS41NSAtMTguOTUgQyAtNDUuNTUgLTIyLjc3IC00Mi40NSAtMjUuODcgLTM4LjYzIC0yNS44NyBMIDIxMi45NyAtMjUuODcgQyAyMTYuNzkgLTI1Ljg3IDIxOS44OSAtMjIuNzcgMjE5Ljg5IC0xOC45NSBMIDIxOS44OSAxOC45NSBDIDIxOS44OSAyMi43NyAyMTYuNzkgMjUuODcgMjEyLjk3IDI1Ljg3IFogTSAtNDUuNTUgLTI1Ljg3Ij48L3BhdGg+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzAwMDAwMDstLWx0eC1maWxsLWNvbG9yOiMwMDAwMDA7IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgLTM1LjcxIDApIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mby13aWR0aDoxNy43NmVtOy0tbHR4LWZvLWhlaWdodDoxLjE2ZW07LS1sdHgtZm8tZGVwdGg6MS4xNmVtOyIgd2lkdGg9IjI0NS43NSIgaGVpZ2h0PSIzMi4wNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAxNi4wMikiIG92ZXJmbG93PSJ2aXNpYmxlIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IlMzLkYxLjEucGljMS4zLjMuMy4zLjMuMS4xIiBjbGFzcz0ibHR4X2lubGluZS1ibG9jayBsdHhfbWluaXBhZ2UgbHR4X2FsaWduX3RvcCIgc3R5bGU9IndpZHRoOjE3Ljc2ZW07Ij48c3BhbiBpZD0iUzMuRjEuMS5waWMxLjMuMy4zLjMuMy4xLjEuMSIgY2xhc3M9Imx0eF9wIj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48ZyBzdHlsZT0iLS1sdHgtZmlsbC1jb2xvcjojRDlEOUZGOyIgZmlsbD0iI0Q5RDlGRiI+PHBhdGggZD0iTSAzMS4yOCAxNS43NSBMIC0zMS4yOCAxNS43NSBDIC0zMy41NyAxNS43NSAtMzUuNDMgMTMuODkgLTM1LjQzIDExLjYgTCAtMzUuNDMgLTExLjYgQyAtMzUuNDMgLTEzLjg5IC0zMy41NyAtMTUuNzUgLTMxLjI4IC0xNS43NSBMIDMxLjI4IC0xNS43NSBDIDMzLjU3IC0xNS43NSAzNS40MyAtMTMuODkgMzUuNDMgLTExLjYgTCAzNS40MyAxMS42IEMgMzUuNDMgMTMuODkgMzMuNTcgMTUuNzUgMzEuMjggMTUuNzUgWiBNIC0zNS40MyAtMTUuNzUiPjwvcGF0aD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMDAwMDAwOy0tbHR4LWZpbGwtY29sb3I6IzAwMDAwMDsiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAtMjMuMzUgLTMuODQpIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiPjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMCkiPlNlbGYtQXR0bjwvdGV4dD48L2c+PGcgc3R5bGU9Ii0tbHR4LWZpbGwtY29sb3I6I0IzQjNGRjsiIGZpbGw9IiNCM0IzRkYiPjxwYXRoIGQ9Ik0gMTE4LjQ1IDE1Ljc1IEwgNTUuODkgMTUuNzUgQyA1My41OSAxNS43NSA1MS43MyAxMy44OSA1MS43MyAxMS42IEwgNTEuNzMgLTExLjYgQyA1MS43MyAtMTMuODkgNTMuNTkgLTE1Ljc1IDU1Ljg5IC0xNS43NSBMIDExOC40NSAtMTUuNzUgQyAxMjAuNzQgLTE1Ljc1IDEyMi42IC0xMy44OSAxMjIuNiAtMTEuNiBMIDEyMi42IDExLjYgQyAxMjIuNiAxMy44OSAxMjAuNzQgMTUuNzUgMTE4LjQ1IDE1Ljc1IFogTSA1MS43MyAtMTUuNzUiPjwvcGF0aD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMDAwMDAwOy0tbHR4LWZpbGwtY29sb3I6IzAwMDAwMDsiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCA1OS4wMSAtMy43OCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCI+PHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAwKSI+Q3Jvc3MtQXR0bjwvdGV4dD48L2c+PGcgc3R5bGU9Ii0tbHR4LWZpbGwtY29sb3I6I0Q5RDlGRjsiIGZpbGw9IiNEOUQ5RkYiPjxwYXRoIGQ9Ik0gMjA1LjYyIDE1Ljc1IEwgMTQzLjA1IDE1Ljc1IEMgMTQwLjc2IDE1Ljc1IDEzOC45IDEzLjg5IDEzOC45IDExLjYgTCAxMzguOSAtMTEuNiBDIDEzOC45IC0xMy44OSAxNDAuNzYgLTE1Ljc1IDE0My4wNSAtMTUuNzUgTCAyMDUuNjIgLTE1Ljc1IEMgMjA3LjkxIC0xNS43NSAyMDkuNzcgLTEzLjg5IDIwOS43NyAtMTEuNiBMIDIwOS43NyAxMS42IEMgMjA5Ljc3IDEzLjg5IDIwNy45MSAxNS43NSAyMDUuNjIgMTUuNzUgWiBNIDEzOC45IC0xNS43NSI+PC9wYXRoPjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiMwMDAwMDA7LS1sdHgtZmlsbC1jb2xvcjojMDAwMDAwOyIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIDE2Mi4yNiAtMy43OCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCI+PHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAwKSI+RkZOPC90ZXh0PjwvZz48ZyBzdHlsZT0iLS1sdHgtZmlsbC1jb2xvcjojRkZEOUIzOyIgZmlsbD0iI0ZGRDlCMyI+PHBhdGggZD0iTSAxMTguNDUgODcuMTcgTCA1NS44OSA4Ny4xNyBDIDUzLjU5IDg3LjE3IDUxLjczIDg1LjMxIDUxLjczIDgzLjAyIEwgNTEuNzMgNTkuODIgQyA1MS43MyA1Ny41MyA1My41OSA1NS42NyA1NS44OSA1NS42NyBMIDExOC40NSA1NS42NyBDIDEyMC43NCA1NS42NyAxMjIuNiA1Ny41MyAxMjIuNiA1OS44MiBMIDEyMi42IDgzLjAyIEMgMTIyLjYgODUuMzEgMTIwLjc0IDg3LjE3IDExOC40NSA4Ny4xNyBaIE0gNTEuNzMgNTUuNjciPjwvcGF0aD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMDAwMDAwOy0tbHR4LWZpbGwtY29sb3I6IzAwMDAwMDsiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCA1Ni44NiA2Ny41OCkiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCI+PHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAwKSI+VDUgRW5jb2RlcjwvdGV4dD48L2c+PGcgc3R5bGU9Ii0tbHR4LWZpbGwtY29sb3I6I0ZGRUNEOTsiIGZpbGw9IiNGRkVDRDkiPjxwYXRoIGQ9Ik0gMjMuNDEgODcuMTcgTCAtNDguMDggODcuMTcgQyAtNTAuMzggODcuMTcgLTUyLjIzIDg1LjMxIC01Mi4yMyA4My4wMiBMIC01Mi4yMyA1OS44MiBDIC01Mi4yMyA1Ny41MyAtNTAuMzggNTUuNjcgLTQ4LjA4IDU1LjY3IEwgMjMuNDEgNTUuNjcgQyAyNS43IDU1LjY3IDI3LjU2IDU3LjUzIDI3LjU2IDU5LjgyIEwgMjcuNTYgODMuMDIgQyAyNy41NiA4NS4zMSAyNS43IDg3LjE3IDIzLjQxIDg3LjE3IFogTSAtNTIuMjMgNTUuNjciPjwvcGF0aD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMDAwMDAwOy0tbHR4LWZpbGwtY29sb3I6IzAwMDAwMDsiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAtNDcuNjIgNjguNjUpIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiPjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMCkiPlN0eWxlIENhcHRpb248L3RleHQ+PC9nPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmUiIGQ9Ik0gMzUuNzEgMCBMIDQ0LjkyIDAiPjwvcGF0aD48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgNDEuNjIgMCkiIHN0cm9rZS1kYXNoYXJyYXk9Im5vbmUiIHN0cm9rZS1kYXNob2Zmc2V0PSIwLjBwdCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PHBhdGggZD0iTSA5LjEgMCBMIDAuODkgMy4wNyBMIDMuNDQgMCBMIDAuODkgLTMuMDcgWiI+PC9wYXRoPjwvZz48cGF0aCBzdHlsZT0iZmlsbDpub25lIiBkPSJNIDEyMi44OCAwIEwgMTMyLjA4IDAiPjwvcGF0aD48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgMTI4Ljc4IDApIiBzdHJva2UtZGFzaGFycmF5PSJub25lIiBzdHJva2UtZGFzaG9mZnNldD0iMC4wcHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiPjxwYXRoIGQ9Ik0gOS4xIDAgTCAwLjg5IDMuMDcgTCAzLjQ0IDAgTCAwLjg5IC0zLjA3IFoiPjwvcGF0aD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojQjNCM0IzOy0tbHR4LWZpbGwtY29sb3I6I0IzQjNCMzstLWx0eC1mZy1jb2xvcjojQjNCM0IzOyIgc3Ryb2tlPSIjQjNCM0IzIiBmaWxsPSIjQjNCM0IzIiBzdHJva2Utd2lkdGg9IjAuNnB0IiBjb2xvcj0iI0IzQjNCMyI+PHBhdGggc3R5bGU9ImZpbGw6bm9uZSIgZD0iTSAtMTIyLjg4IC05Ljg0IEMgLTEyMi44OCAtOS44NCAtMTE4Ljk0IC05LjUxIC0xMTYuOTcgLTcuODcgQyAtMTE1LjAxIC02LjI0IC0xMTIuNzEgLTIuNjIgLTExMS4wNyAwIEMgLTEwOS40MyAyLjYyIC0xMDguMTEgNS45MSAtMTA3LjEzIDcuODcgQyAtMTA2LjE1IDkuODQgLTEwNS44MiAxMS44MSAtMTA1LjE2IDExLjgxIEMgLTEwNC41MSAxMS44MSAtMTA0LjE4IDkuODQgLTEwMy4xOSA3Ljg3IEMgLTEwMi4yMSA1LjkxIC0xMDAuODkgMi42MiAtOTkuMjYgMCBDIC05Ny42MiAtMi42MiAtOTUuMzIgLTYuMjQgLTkzLjM1IC03Ljg3IEMgLTkxLjM4IC05LjUxIC04Ny40NCAtOS44NCAtODcuNDQgLTkuODQiPjwvcGF0aD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojQTZBNkE2Oy0tbHR4LWZpbGwtY29sb3I6I0E2QTZBNjsiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAtMTIxLjg3IC0xOC4xNykiIGZpbGw9IiNBNkE2QTYiIHN0cm9rZT0iI0E2QTZBNiI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Ii0tbHR4LWZnLWNvbG9yOiNBNkE2QTY7LS1sdHgtZm8td2lkdGg6Mi45NWVtOy0tbHR4LWZvLWhlaWdodDowLjY0ZW07LS1sdHgtZm8tZGVwdGg6MC4yMWVtOyIgd2lkdGg9IjMzLjQzIiBoZWlnaHQ9IjkuNjkiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNy4yNikiIG92ZXJmbG93PSJ2aXNpYmxlIiBjb2xvcj0iI0E2QTZBNiI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxtYXRoIGlkPSJTMy5GMS4xLnBpYzEuMS4xLjEuMS4xLjEuMS4xLjEuMS4xLjEuMS4xLjEuMS4xLjEuMS4xLjEubTEiIGNsYXNzPSJsdHhfTWF0aCIgYWx0dGV4dD0iXG1hdGhjYWx7Tn0oMCxJKSIgZGlzcGxheT0iaW5saW5lIiBpbnRlbnQ9IjpsaXRlcmFsIj48c2VtYW50aWNzPjxtcm93PjxtaSBzdHlsZT0iLS1sdHgtZmctY29sb3I6I0E2QTZBNjsiIGNsYXNzPSJsdHhfZm9udF9tYXRoY2FsaWdyYXBoaWMiIG1hdGhjb2xvcj0iI0E2QTZBNiIgbWF0aHNpemU9IjAuNzAwZW0iPvCdkqk8L21pPjxtbyBsc3BhY2U9IjBlbSIgcnNwYWNlPSIwZW0iPuKAizwvbW8+PG1yb3c+PG1vIHN0eWxlPSItLWx0eC1mZy1jb2xvcjojQTZBNkE2OyIgbWF0aGNvbG9yPSIjQTZBNkE2IiBtYXhzaXplPSIwLjcwMGVtIiBtaW5zaXplPSIwLjcwMGVtIj4oPC9tbz48bW4gc3R5bGU9Ii0tbHR4LWZnLWNvbG9yOiNBNkE2QTY7IiBtYXRoY29sb3I9IiNBNkE2QTYiIG1hdGhzaXplPSIwLjcwMGVtIj4wPC9tbj48bW8gc3R5bGU9Ii0tbHR4LWZnLWNvbG9yOiNBNkE2QTY7IiBtYXRoY29sb3I9IiNBNkE2QTYiIG1hdGhzaXplPSIwLjcwMGVtIj4sPC9tbz48bWkgc3R5bGU9Ii0tbHR4LWZnLWNvbG9yOiNBNkE2QTY7IiBtYXRoY29sb3I9IiNBNkE2QTYiIG1hdGhzaXplPSIwLjcwMGVtIj5JPC9taT48bW8gc3R5bGU9Ii0tbHR4LWZnLWNvbG9yOiNBNkE2QTY7IiBtYXRoY29sb3I9IiNBNkE2QTYiIG1heHNpemU9IjAuNzAwZW0iIG1pbnNpemU9IjAuNzAwZW0iPik8L21vPjwvbXJvdz48L21yb3c+PGFubm90YXRpb24gZW5jb2Rpbmc9ImFwcGxpY2F0aW9uL3gtdGV4Ij5cbWF0aGNhbHtOfSgwLEkpPC9hbm5vdGF0aW9uPjwvc2VtYW50aWNzPjwvbWF0aD48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgc3R5bGU9Ii0tbHR4LWZpbGwtY29sb3I6I0YyQ0NEOTsiIGZpbGw9IiNGMkNDRDkiPjxwYXRoIGQ9Ik0gMzE4LjY1IDE1Ljc1IEwgMjU2LjA5IDE1Ljc1IEMgMjUzLjggMTUuNzUgMjUxLjk0IDEzLjg5IDI1MS45NCAxMS42IEwgMjUxLjk0IC0xMS42IEMgMjUxLjk0IC0xMy44OSAyNTMuOCAtMTUuNzUgMjU2LjA5IC0xNS43NSBMIDMxOC42NSAtMTUuNzUgQyAzMjAuOTQgLTE1Ljc1IDMyMi44IC0xMy44OSAzMjIuOCAtMTEuNiBMIDMyMi44IDExLjYgQyAzMjIuOCAxMy44OSAzMjAuOTQgMTUuNzUgMzE4LjY1IDE1Ljc1IFogTSAyNTEuOTQgLTE1Ljc1Ij48L3BhdGg+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzAwMDAwMDstLWx0eC1maWxsLWNvbG9yOiMwMDAwMDA7IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgMjY2LjQ2IC0zLjg0KSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIj48dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDApIj5Wb2NvZGVyPC90ZXh0PjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiNEOTY2OEM7LS1sdHgtZmlsbC1jb2xvcjojRDk2NjhDOy0tbHR4LWZnLWNvbG9yOiNEOTY2OEM7IiBzdHJva2U9IiNEOTY2OEMiIGZpbGw9IiNEOTY2OEMiIHN0cm9rZS13aWR0aD0iMC42cHQiIGNvbG9yPSIjRDk2NjhDIj48cGF0aCBzdHlsZT0iZmlsbDpub25lIiBkPSJNIDM2NC43IDAgQyAzNjQuNyAwIDM2OC4zMSA4LjI2IDM3MC42IDcuODcgQyAzNzIuOSA3LjQ5IDM3NC41OSAtMi41OCAzNzYuNTEgLTEuOTcgQyAzNzguNDIgLTEuMzYgMzc5LjMgMTAuNjQgMzgwLjQ0IDExLjAyIEMgMzgxLjU5IDExLjQxIDM4MS42NSA0LjEzIDM4Mi40MSAwIEMgMzgzLjE4IC00LjEzIDM4My4yMyAtMTAuNjIgMzg0LjM4IC0xMC4yNCBDIDM4NS41MyAtOS44NSAzODYuNDEgMS4xMyAzODguMzIgMS45NyBDIDM5MC4yMyAyLjgxIDM5MS45MyAtNS41MiAzOTQuMjIgLTUuOTEgQyAzOTYuNTIgLTYuMjkgNDAwLjEzIDAgNDAwLjEzIDAiPjwvcGF0aD48L2c+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojREY4MDlGOy0tbHR4LWZpbGwtY29sb3I6I0RGODA5RjsiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAzNTguMjggLTE5LjExKSIgZmlsbD0iI0RGODA5RiIgc3Ryb2tlPSIjREY4MDlGIj48Zm9yZWlnbk9iamVjdCBzdHlsZT0iLS1sdHgtZmctY29sb3I6I0RGODA5RjstLWx0eC1mby13aWR0aDo0LjQzZW07LS1sdHgtZm8taGVpZ2h0OjAuNjFlbTstLWx0eC1mby1kZXB0aDowZW07IiB3aWR0aD0iNDguODYiIGhlaWdodD0iNi43MyIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA2LjczKSIgb3ZlcmZsb3c9InZpc2libGUiIGNvbG9yPSIjREY4MDlGIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IlMzLkYxLjEucGljMS40LjQuNC40LjQuMS4xIiBjbGFzcz0ibHR4X3RleHQiIHN0eWxlPSJmb250LXNpemU6NzAlOy0tbHR4LWZnLWNvbG9yOiNERjgwOUY7Ij5XYXZlZm9ybTwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgc3R5bGU9Ii0tbHR4LWZpbGwtY29sb3I6I0ZGRDlEOTsiIGZpbGw9IiNGRkQ5RDkiPjxwYXRoIGQ9Ik0gMTI3LjM0IC01NS42NyBMIDQ2Ljk5IC01NS42NyBDIDQ0LjcgLTU1LjY3IDQyLjg0IC01Ny41MyA0Mi44NCAtNTkuODIgTCA0Mi44NCAtODMuMDIgQyA0Mi44NCAtODUuMzEgNDQuNyAtODcuMTcgNDYuOTkgLTg3LjE3IEwgMTI3LjM0IC04Ny4xNyBDIDEyOS42NCAtODcuMTcgMTMxLjUgLTg1LjMxIDEzMS41IC04My4wMiBMIDEzMS41IC01OS44MiBDIDEzMS41IC01Ny41MyAxMjkuNjQgLTU1LjY3IDEyNy4zNCAtNTUuNjcgWiBNIDQyLjg0IC04Ny4xNyI+PC9wYXRoPjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiMwMDAwMDA7LS1sdHgtZmlsbC1jb2xvcjojMDAwMDAwOyIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIDQ3LjQ1IC03NS4yNikiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Ii0tbHR4LWZvLXdpZHRoOjUuODNlbTstLWx0eC1mby1oZWlnaHQ6MC41N2VtOy0tbHR4LWZvLWRlcHRoOjBlbTsiIHdpZHRoPSI3OS4wNiIgaGVpZ2h0PSI3LjY5IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDcuNjkpIiBvdmVyZmxvdz0idmlzaWJsZSI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJTMy5GMS4xLnBpYzEuNS41LjUuNS41LjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQiIHN0eWxlPSJmb250LXNpemU6ODAlOyI+REFBTSBIb29rPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48ZyBzdHlsZT0iLS1sdHgtZmlsbC1jb2xvcjojRkZCRkJGOyIgZmlsbD0iI0ZGQkZCRiI+PHBhdGggZD0iTSAyMzQuMTkgLTU1LjY3IEwgMTU5LjgyIC01NS42NyBDIDE1Ny41MyAtNTUuNjcgMTU1LjY3IC01Ny41MyAxNTUuNjcgLTU5LjgyIEwgMTU1LjY3IC04My4wMiBDIDE1NS42NyAtODUuMzEgMTU3LjUzIC04Ny4xNyAxNTkuODIgLTg3LjE3IEwgMjM0LjE5IC04Ny4xNyBDIDIzNi40OSAtODcuMTcgMjM4LjM0IC04NS4zMSAyMzguMzQgLTgzLjAyIEwgMjM4LjM0IC01OS44MiBDIDIzOC4zNCAtNTcuNTMgMjM2LjQ5IC01NS42NyAyMzQuMTkgLTU1LjY3IFogTSAxNTUuNjcgLTg3LjE3Ij48L3BhdGg+PC9nPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6IzAwMDAwMDstLWx0eC1maWxsLWNvbG9yOiMwMDAwMDA7IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgMTYwLjI4IC03My43NikiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Ii0tbHR4LWZvLXdpZHRoOjYuMjRlbTstLWx0eC1mby1oZWlnaHQ6MC42NGVtOy0tbHR4LWZvLWRlcHRoOjAuMjVlbTsiIHdpZHRoPSI3My40NSIgaGVpZ2h0PSIxMC40NSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA3LjU2KSIgb3ZlcmZsb3c9InZpc2libGUiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250YWluZXIiPjxzcGFuIGNsYXNzPSJsdHhfZm9yZWlnbm9iamVjdF9jb250ZW50Ij48c3BhbiBpZD0iUzMuRjEuMS5waWMxLjYuNi42LjYuNi4yLjEiIGNsYXNzPSJsdHhfdGV4dCIgc3R5bGU9ImZvbnQtc2l6ZTo4MCU7Ij5IZWF0bWFwcyA8L3NwYW4+PG1hdGggaWQ9IlMzLkYxLjEucGljMS4yLjIuMi4yLjIuMi4yLjIuMi4yLjIuMi4xLjEuMS4xLjEuMS4xLjEuMS4xLjEubTEiIGNsYXNzPSJsdHhfTWF0aCIgYWx0dGV4dD0iTV97an0iIGRpc3BsYXk9ImlubGluZSIgaW50ZW50PSI6bGl0ZXJhbCI+PHNlbWFudGljcz48bXN1Yj48bWkgbWF0aHNpemU9IjAuODAwZW0iPk08L21pPjxtaSBtYXRoc2l6ZT0iMC44MDBlbSI+ajwvbWk+PC9tc3ViPjxhbm5vdGF0aW9uIGVuY29kaW5nPSJhcHBsaWNhdGlvbi94LXRleCI+TV97an08L2Fubm90YXRpb24+PC9zZW1hbnRpY3M+PC9tYXRoPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48L2c+PGcgc3Ryb2tlLXdpZHRoPSIwLjhwdCI+PHBhdGggc3R5bGU9ImZpbGw6bm9uZSIgZD0iTSAtNzcuMzMgMCBMIC01Mi4yNyAwIj48L3BhdGg+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIC01NS42NyAwKSIgc3Ryb2tlLWRhc2hhcnJheT0ibm9uZSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAuMHB0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIj48cGF0aCBkPSJNIDguMzcgMCBMIDEuNzkgMi40NSBMIDMuNjggMCBMIDEuNzkgLTIuNDUgWiI+PC9wYXRoPjwvZz48L2c+PGcgc3Ryb2tlLXdpZHRoPSIwLjhwdCI+PHBhdGggc3R5bGU9ImZpbGw6bm9uZSIgZD0iTSAyMjAuMTYgMCBMIDI0NS4yMiAwIj48L3BhdGg+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIDI0MS44MiAwKSIgc3Ryb2tlLWRhc2hhcnJheT0ibm9uZSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAuMHB0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIj48cGF0aCBkPSJNIDguMzcgMCBMIDEuNzkgMi40NSBMIDMuNjggMCBMIDEuNzkgLTIuNDUgWiI+PC9wYXRoPjwvZz48L2c+PGcgc3Ryb2tlLXdpZHRoPSIwLjhwdCI+PHBhdGggc3R5bGU9ImZpbGw6bm9uZSIgZD0iTSAzMjMuMDggMCBMIDM0OC4xNCAwIj48L3BhdGg+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIDM0NC43MyAwKSIgc3Ryb2tlLWRhc2hhcnJheT0ibm9uZSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAuMHB0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIj48cGF0aCBkPSJNIDguMzcgMCBMIDEuNzkgMi40NSBMIDMuNjggMCBMIDEuNzkgLTIuNDUgWiI+PC9wYXRoPjwvZz48L2c+PGcgc3Ryb2tlLXdpZHRoPSIwLjhwdCI+PHBhdGggc3R5bGU9ImZpbGw6bm9uZSIgZD0iTSAyNy44NCA3MS40MiBMIDQ1LjAyIDcxLjQyIj48L3BhdGg+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIDQxLjYyIDcxLjQyKSIgc3Ryb2tlLWRhc2hhcnJheT0ibm9uZSIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAuMHB0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIj48cGF0aCBkPSJNIDguMzcgMCBMIDEuNzkgMi40NSBMIDMuNjggMCBMIDEuNzkgLTIuNDUgWiI+PC9wYXRoPjwvZz48L2c+PGcgc3Ryb2tlLXdpZHRoPSIwLjhwdCI+PHBhdGggc3R5bGU9ImZpbGw6bm9uZSIgZD0iTSA4Ny4xNyA1NS4zOSBMIDg3LjE3IDIyLjQ3Ij48L3BhdGg+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wIC0xLjAgMS4wIDAuMCA4Ny4xNyAyNS44NykiIHN0cm9rZS1kYXNoYXJyYXk9Im5vbmUiIHN0cm9rZS1kYXNob2Zmc2V0PSIwLjBwdCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PHBhdGggZD0iTSA4LjM3IDAgTCAxLjc5IDIuNDUgTCAzLjY4IDAgTCAxLjc5IC0yLjQ1IFoiPjwvcGF0aD48L2c+PC9nPjxnIHN0cm9rZS13aWR0aD0iMC44cHQiIHN0cm9rZS1kYXNoYXJyYXk9IjMuMHB0LDMuMHB0IiBzdHJva2UtZGFzaG9mZnNldD0iMC4wcHQiPjxnIHN0eWxlPSItLWx0eC1zdHJva2UtY29sb3I6I0IzMDAwMDstLWx0eC1maWxsLWNvbG9yOiNCMzAwMDA7LS1sdHgtZmctY29sb3I6I0IzMDAwMDsiIHN0cm9rZT0iI0IzMDAwMCIgZmlsbD0iI0IzMDAwMCIgY29sb3I9IiNCMzAwMDAiPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmUiIGQ9Ik0gODcuMTcgLTE2LjAyIEwgODcuMTcgLTQ4Ljk1Ij48L3BhdGg+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wIC0xLjAgMS4wIDAuMCA4Ny4xNyAtNDUuNTUpIiBzdHJva2UtZGFzaGFycmF5PSJub25lIiBzdHJva2UtZGFzaG9mZnNldD0iMC4wcHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiPjxwYXRoIGQ9Ik0gOC4zNyAwIEwgMS43OSAyLjQ1IEwgMy42OCAwIEwgMS43OSAtMi40NSBaIj48L3BhdGg+PC9nPjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiM5OTAwMDA7LS1sdHgtZmlsbC1jb2xvcjojOTkwMDAwOy0tbHR4LWZnLWNvbG9yOiNCMzAwMDA7IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgOTIuMzMgLTM5LjA3KSIgZmlsbD0iIzk5MDAwMCIgc3Ryb2tlPSIjOTkwMDAwIiBjb2xvcj0iI0IzMDAwMCI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Ii0tbHR4LWZnLWNvbG9yOiM5OTAwMDA7LS1sdHgtZm8td2lkdGg6Mi4wOGVtOy0tbHR4LWZvLWhlaWdodDowLjYxZW07LS1sdHgtZm8tZGVwdGg6MGVtOyIgd2lkdGg9IjIyLjk2IiBoZWlnaHQ9IjYuNzMiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNi43MykiIG92ZXJmbG93PSJ2aXNpYmxlIiBjb2xvcj0iIzk5MDAwMCI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJTMy5GMS4xLnBpYzEuNy43LjcuNy4xLjEuMSIgY2xhc3M9Imx0eF90ZXh0IiBzdHlsZT0iZm9udC1zaXplOjcwJTstLWx0eC1mZy1jb2xvcjojOTkwMDAwOyI+aG9vazwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PC9nPjwvZz48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiNCMzAwMDA7LS1sdHgtZmlsbC1jb2xvcjojQjMwMDAwOy0tbHR4LWZnLWNvbG9yOiNCMzAwMDA7IiBzdHJva2Utd2lkdGg9IjAuOHB0IiBmaWxsPSIjQjMwMDAwIiBzdHJva2U9IiNCMzAwMDAiIHN0cm9rZS1kYXNoYXJyYXk9IjMuMHB0LDMuMHB0IiBzdHJva2UtZGFzaG9mZnNldD0iMC4wcHQiIGNvbG9yPSIjQjMwMDAwIj48cGF0aCBzdHlsZT0iZmlsbDpub25lIiBkPSJNIDEzMS43NyAtNzEuNDIgTCAxNDguOTUgLTcxLjQyIj48L3BhdGg+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIDE0NS41NSAtNzEuNDIpIiBzdHJva2UtZGFzaGFycmF5PSJub25lIiBzdHJva2UtZGFzaG9mZnNldD0iMC4wcHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiPjxwYXRoIGQ9Ik0gOC4zNyAwIEwgMS43OSAyLjQ1IEwgMy42OCAwIEwgMS43OSAtMi40NSBaIj48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+)

![图2](https://arxiv.org/html/2606.20532v1/x1.png)


### 💡 核心创新点

1.  首次跨注意力归因：首次将扩散模型的注意力归因分析方法（DAAM）应用于文本到语音（TTS）领域，为解释自然语言指令如何影响语音生成提供了工具。
2.  大规模实证分析：在3600种（风格描述，文本转录）组合上，系统性地提取并分析了跨注意力模式，揭示了风格标记的全局调节特性。
3.  揭示声学接地机制：定量证明了风格标记的注意力权重与生成语音的声学特征（如基频F0和能量）在语义上是连贯的，例如“loud”与能量的相关性\(r=+0.64\)。
4.  刻画层级与步骤动态：发现了风格条件化的动态调度过程：风格标记的重要性在生成的早期ODE步骤达到峰值（衰减5.2倍），并在较深的Transformer层（约第17层）深化，此时注意力熵也达到最小，表明网络的选择性聚焦。

### 📊 实验结果

论文通过三个实验验证其假设，核心结果如下：

实验一：全局与局部条件化
通过对比三类标记的时序方差、峰均比和熵，发现风格标记具有最低的时序方差（\(\bar{\sigma}^{2}=2.1\times 10^{-5}\)），显著低于内容标记（\(7.0\times 10^{-5}\)， \(p<10^{-43}\)， Cohen‘s \(d=-1.16\)）和功能标记（\(19.2\times 10^{-5}\)， \(p<10^{-44}\)， \(d=-0.72\)），证实了其全局、均匀的注意力分布。然而，风格标记的峰均比（1.74）却最高，表明其注意力模式虽然在时间上扩散，但具有特征性的峰值。

表1：三类标记的注意力指标统计
| 类别 | 样本数 \(n\) | 时序方差 \(\bar{\sigma}^{2}\) (\(\times 10^{-5}\)) | 峰均比 PMR | 时序熵 \(\bar{H}\) (bits) | 时序方差 Cohen’s \(d\) (相对于风格) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 风格 | 7,968 | 2.1 ± 2.2 | 1.74 ± 0.48 | 8.72 ± 0.36 | — |
| 内容 | 8,480 | 7.0 ± 5.6 | 1.48 ± 0.30 | 8.74 ± 0.36 | -1.16 |
| 功能 | 38,432 | 19.2 ± 33.5 | 1.36 ± 0.43 | 8.76 ± 0.36 | -0.72 |

表2：部分风格标记的个体时序方差 (\(\times 10^{-5}\))
| 单词 | 样本数 \(n\) | \(\bar{\sigma}^{2}\) | 单词 | 样本数 \(n\) | \(\bar{\sigma}^{2}\) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| cheerful | 640 | 1.0 | nervous | 352 | 2.2 |
| deep | 320 | 1.1 | calm | 224 | 2.4 |
| harsh | 320 | 1.1 | robotic | 384 | 2.7 |
| soft | 320 | 1.3 | clear | 416 | 3.7 |
| cold | 448 | 1.3 | dramatic | 544 | 3.7 |
| smooth | 416 | 1.4 | nasal | 288 | 4.2 |
| excited | 384 | 1.4 | loud | 256 | 6.3 |

实验二：声学特征相关性
风格标记的注意力与F0（\(\bar{r}=+0.21\)）和能量（\(\bar{r}=+0.28\)）呈中等正相关，显著强于功能标记（F0: \(+0.11\)， 能量: \(+0.09\)）。具体单词的分析显示出语义连贯性：如“loud”与能量相关性最强（\(r=+0.64\)），“nasal”也与能量高度相关（\(r=+0.67\)）。

表3：注意力与声学特征的皮尔逊相关系数 \(r\)
| 按类别 | \(\bar{r}_{\text{F0}}\) | \(\bar{r}_{\text{Energy}}\) | 样本数 \(n\) |
| :--- | :--- | :--- | :--- |
| 风格 | +0.21 | +0.28 | 7,968 |
| 内容 | +0.50 | +0.54 | 8,480 |
| 功能 | +0.11 | +0.09 | 38,432 |
| 选中的风格词 | \(\bar{r}_{\text{F0}}\) | \(\bar{r}_{\text{Energy}}\) | 样本数 \(n\) |
| loud | +0.49 | +0.64 | 256 |
| nasal | +0.41 | +0.67 | 288 |
| confident | +0.40 | +0.30 | 256 |
| nervous | +0.37 | +0.47 | 352 |
| robotic | +0.32 | +0.56 | 384 |
| dramatic | +0.30 | +0.46 | 544 |
| calm | +0.27 | +0.40 | 224 |

实验三：层级与步骤动态
- 层级动态：风格标记的重要性在第17层达到峰值（\(I^{(17)}_{\text{sty}}=0.034\)），晚期层（13-24层）的平均重要性比早期层高28%（\(R_{\text{sty}}=1.28\)）。内容标记在更深的第22层达峰。功能标记重要性随深度基本持平。
- 步骤动态：风格标记的重要性在早期ODE步骤（\(s=0\)）最高，随后衰减5.2倍。相反，功能标记的重要性随步骤进行而上升。
- 熵动态：层熵在第18层达到最小值（8.54 bits），与风格重要性峰值层（第17层）相邻，表明在此关键层网络选择性最强。

表4：层级与步骤动态总结
| 层级动态 | | | 步骤动态 | | |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 类别 | 峰值层 \(l\) | \(I^{(l)}_{\text{peak}}\) | \(R\) (晚期/早期) | 峰值步骤 \(s\) | \(D\) (首步/末步衰减) | 趋势 |
| 风格 | 17 | 0.034 | 1.28 | 0 | 5.2× | ↘ (衰减) |
| 内容 | 22 | 0.061 | 1.07 | 0 | 1.7× | ↘ (衰减) |
| 功能 | 18 | 0.108 | 0.98 | 23 | 0.84× | ↗ (上升) |

![图3](https://arxiv.org/html/2606.20532v1/x2.png)

![图4](https://arxiv.org/html/2606.20532v1/x3.png)


### ⚖️ 评分理由

*   创新性 (1.5/2)：将DAAM从图像领域适配到语音扩散模型是一个新颖且合理的切入点。首次为TTS提供基于注意力的归因分析，填补了该领域的空白。但方法本质是应用，核心创新有限。
*   技术严谨性 (1.0/1.5)：实验设计系统（3600组合），统计检验规范（报告p值和Cohen‘s d）。但分析深度不足，主要停留在统计关联层面，缺乏对注意力机制本身的更深入剖析或消融研究（如不同注意力头的作用）。
*   实验充分性 (1.5/1.5)：实验设计全面，覆盖了全局/局部、声学相关性和动态过程三个维度，数据规模大，结果可视化清晰，表格数据详实。这是论文最大的优点。
*   清晰度 (1.5/1.5)：论文结构清晰，方法描述准确，图表和公式易于理解，行文流畅。
*   影响力 (1.5/1.5)：对语音合成，特别是可解释性和可控性研究有直接参考价值。提出的分析方法可能被后续工作借鉴。但影响力受限于其分析的模型单一性。
*   开源 (0.0/1.5)：论文未公开代码、模型、数据集或任何复现材料。这对于一篇以实验分析为主的论文来说是重大缺陷，严重影响其价值和可验证性。
*   可复现性 (0.2/1.5)：由于未开源任何资源，且依赖于未公开的CapSpeech模型和构建的特定数据集，其他研究者几乎无法复现本文的任何实验。
*   工程/实践价值 (1.0/1.0)：为理解和调试风格化TTS模型提供了实用的可视化工具（注意力热图）和分析思路。但实用价值因缺乏开源工具和通用性证明而大打折扣。

#

### 🚨 局限与问题

1.  模型与数据泛化性缺失：分析完全基于单一、未公开的商业模型（CapSpeech）和精心构造的、模板化的合成提示（120个）。结论是否适用于其他TTS架构（如自回归、其他扩散模型）或自然语言用户提示，完全未知。
2.  分析深度有限：论文的“可解释性”本质上是现象关联的观察。例如，发现风格标记在早期步骤重要、在深层重要性高，但并未探究其背后的功能机制。为什么是这样？这与其他生成阶段的任务分工有何关系？论文未提供更深层的解释。
3.  缺乏因果验证：所有结论均基于相关性分析。论文在“局限性”部分提到的“因果干预”（如注意力编辑）实验并未进行，这使得结论停留在“模型做了什么”的层面，而非“为什么必须这么做”。
4.  标记分类与结果解读的潜在偏差：将风格、内容、功能标记严格三分类可能过于简化。例如，一些内容名词（如“male”、“female”）本身也承载了强烈的风格/身份属性，其高声学相关性可能混淆了“风格”与“内容”的区分。论文虽提及内容标记相关性强，但未充分讨论这种分类边界模糊带来的影响。
5.  对“全局调节”的定义过于宽泛：论文用“低时序方差”定义“全局调节”。然而，一个标记的注意力即使时间上均匀分布，其影响也可能在频谱或其他维度上局部化。缺乏对“全局性”更全面的多维度验证。
6.  结论声明较强：论文称“提供了首个定量证据，表明在流匹配TTS中，跨注意力的功能与自回归TTS中主要作为时序对齐的功能有根本不同。” 这一结论基于对单一模型的分析，宣称“根本不同”略显武断，缺乏与多种自回归模型的系统���比。
7.  开源与复现性灾难：如前所述，未开源任何资源使得这篇依赖复杂实验设置的论文的价值近乎腰斩。其他研究者无法验证、扩展或利用其方法。

---

[← 返回 2026-06-19 语音/音乐/音频论文速递](/audio-paper-digest-blog/posts/2026-06-19/)
