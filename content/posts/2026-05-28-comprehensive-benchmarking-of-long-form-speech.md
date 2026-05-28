---
title: "Comprehensive Benchmarking of Long-Form Speech Generation in Diverse Scenarios"
date: 2026-05-28
draft: false
tags: [语音合成, 情感语音合成]
categories: [论文速递]
description: "语音合成 | 9.9/10"
hiddenInHomeList: true
---

# 📄 Comprehensive Benchmarking of Long-Form Speech Generation in Diverse Scenarios

#语音合成 #情感语音合成

🔥 **9.9/10** | 前25% | #语音合成 | #情感语音合成 | [arxiv](https://arxiv.org/abs/2605.28618v1)

学术质量 6.4/7 | 影响力 2/2 | 可复现性 1.5/2 | 置信度 高


### 👥 作者与机构

第一作者：Changhao Pan (浙江大学)。通讯作者：Zhou Zhao (浙江大学)。作者单位包括浙江大学和字节跳动。

### 💡 毒舌点评

一篇扎实、必要且组织良好的基准测试论文。它成功地将“长语音生成质量”这个模糊概念拆解为可量化的维度，并提供了目前最全面的评估框架。然而，它的“杀手锏”——基于Gemini Pro的表达力评估——却是一个黑盒，这为基准的长期可复现性埋下了隐患。实验规模宏大，但闭源模型的“遥遥领先”与开源模型的“努力追赶”形成了鲜明对比，清晰地勾勒出了技术差距。数据构建流程详尽得令人印象深刻，甚至用上了GPT-5和DeepSeek V3.2，堪称“用前沿AI评测前沿AI”的典范。总体而言，这是一份对社区贡献极大的资源，但它的价值很大程度上依赖于所用闭源评估器的持续稳定和可用性。

### 📌 核心摘要

本文提出了SwanBench-Speech，一个针对长语音生成（包括单说话人长文本和对话生成）的综合性评估基准。该基准覆盖了17种下游应用场景，基于声学、语义和表现力三大核心挑战，构建了包含1101个样本的测试集。论文设计了一个包含7个自动评估指标（音色一致性、混响一致性、声音保真度、内容准确率、韵律连贯性、表现丰富性、表现层次性）的评估协议，并通过人类感知测试验证了指标与人类评分的相关性。通过对16个单说话人模型和10个对话生成模型的广泛实验，论文揭示了当前模型的优势与不足：在保真度和准确率上已接近人类水平，但在混响一致性、韵律连贯性和表现层次性上仍有显著差距；模型在高表现力场景中性能下降；自回归（AR）与非自回归（NAR）模型在表现力和内容准确率上存在权衡；训练数据质量（如片段长度、声场稳定性）比数量更重要。

### 🔗 开源详情

*   代码： 论文承诺开源全部代码库，包括数据处理和评估脚本。项目主页已提供（https://swanaigc.github.io/#bench），但GitHub具体仓库链接在当前版本中尚未明确给出。
*   模型权重： 不涉及。SwanBench-Speech是评估基准，不包含模型。论文评估的开源模型（如CosyVoice, FishSpeech等）有其各自的开源仓库，但论文未在本文中集中提供链接。
*   数据集： 论文明确承诺在HuggingFace上以CC BY-NC-SA 4.0许可证开源SwanBench-Speech测试集（1101个样本）。
*   Demo： 在线演示链接为 https://swanaigc.github.io/#bench。
*   复现材料： 论文提供了极其详尽的附录，涵盖了数据构建流程、评估协议细节、实验设置、消融研究、更多结果分析等。评估使用的所有第三方工具（如FunASR Nano, WhisperX, SRMRpy等）均已列出其开源地址。
*   论文中引用的关键开源项目：
    *   SenseVoice (转写): https://huggingface.co/FunAudioLLM/SenseVoiceSmall
    *   Paraformer (对齐，中文): https://modelscope.cn/models/iic/speech_timestamp_prediction-v1-16k-offline
    *   WhisperX (对齐，英文): https://github.com/m-bain/whisperX
    *   FunASR Nano (ASR): https://github.com/FunAudioLLM/Fun-ASR-Nano-2512
    *   WavLM TDCNN (说话人嵌入): https://github.com/microsoft/UniSpeech/tree/main/downstreams/speaker_verification
    *   SRMRpy (混响评估): https://github.com/jfsantos/SRMRpy
    *   SpeechJudge (韵律评估模型，基于Qwen2.5-Omni-7B): 论文提及为微调模型，未提供独立开源链接。
    *   SentenceBERT (去重): https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2
    *   VAD模型: https://modelscope.cn/models/iic/speech_fsmn_vad_zh-cn-16k-common-pytorch 和 https://github.com/snakers4/silero-vad
    *   Torchaudio SQUIM: https://docs.pytorch.org/audio/main/tutorials/squim_tutorial.html
    *   JiWER (WER/CER计算): https://pypi.org/project/jiwer/

### 🏗️ 方法概述和架构

SwanBench-Speech的构建是一个系统化、多阶段的工程，其核心架构可分为三个相互关联的模块：测试集构建、评估协议设计与大规模实验分析。

1. 测试集构建模块： 这是基准的基石。其数据来源多样化，结合了在线文本语料（如用于有声书、新闻）、在线音频媒体（如YouTube、Bilibili上的播客、访谈）以及LLM生成（使用GPT-5生成结构化脚本，如讲座、演示文稿）。原始数据经过一个严格的精炼流水线：首先使用SentenceBERT进行语义去重，去除高相似度样本；接着使用GPT-5对表达清晰度和内容连贯性进行质量评估，过滤低分样本；然后使用DeepSeek V3.2结合思维链提示进行隐私伦理审查，检测PII并修正或删除风险内容；最后进行人工审核与数据增补。这一流程最终产出了1101个样本，按三大挑战（声学、语义、表现力）组织，并映射到17种具体应用场景（如客户服务、播客、新闻、戏剧、体育解说等）。

2. 评估协议设计模块： 论文将长语音生成质量解耦为7个正交的自动化指标，形成了分层评估框架。
*   声学维度：
    *   音色一致性： 对于单说话人，使用WavLM TDCNN提取滑动窗口（3秒窗口，2秒步长）下的说话人嵌入，计算所有嵌入对的平均余弦相似度。对于对话，先使用强制对齐（Paraformer用于中文，WhisperX用于英文）分割说话人片段，再分别计算每个说话人片段的一致性并取平均。
    *   混响一致性： 使用SRMRpy工具包计算滑动窗口下的SRMR（语音混响调制能量比）值序列，计算该序列的标准差作为指标，标准差越小表示混响环境越稳定。窗口设置同样为3秒窗口，2秒步长。
    *   声音保真度： 采用非侵入式的SQUIM-PESQ（通过TorchAudio实现）对合成音频进行参考无关的客观质量评分。
*   语义维度：
    *   内容准确率： 使用高性能的FunASR Nano进行自动语音识别，然后计算转写结果与真实文本之间的字符错误率（CER，用于中文） 和词错误率（WER，用于英文）。
    *   韵律连贯性： 使用专门针对音频评估微调的模型SpeechJudge（基于Qwen2.5-Omni-7B），并修改提示以强调长语境下的韵律一致性，输出1-5分。对每个样本进行10次独立评估取平均以减少方差。
*   表现力维度：
    *   表现丰富性： 使用大型音频语言模型（Gemini 3 Pro）作为评估器。将音频分割为10秒片段，使用综合提示（评估情感共鸣、角色刻画、故事讲述）对每个片段打分，最后取平均分。
    *   表现层次性： 同样使用Gemini 3 Pro，但评估时输入完整音频，通过提示评估其情感变化、声音动态和场景适配度，捕捉段落级别的动态变化，输出1-5分。

该协议的有效性通过人类感知测试得到验证：韵律评估的人类偏好分数与模型指标的Spearman相关系数达到0.82；表现力评估中，Gemini 3 Pro与人类MOS的相关性在丰富性（SRCC=0.71）和层次性（SRCC=0.62）上均为最高。

3. 大规模实验与分析模块： 论文使用构建的基准评估了20余个模型，包括10个开源和6个闭源单说话人模型，以及6个开源和4个闭源对话模型。实验不仅报告了多维度结果（见表格），还进行了深入分析，包括：对比真实语音/对话的上界、分析不同场景（声学挑战、语义挑战、高表现力场景）下的性能变化、研究输入长度对性能的影响，以及从AR/NAR架构选择和训练数据质量两个角度探讨模型设计的权衡与未来方向。

![图1](https://arxiv.org/html/2605.28618v1/x2.png)

![图2](https://arxiv.org/html/2605.28618v1/x3.png)


### 💡 核心创新点

1.  全面的基准框架： 首次同时覆盖长文本生成与对话生成两大范式，构建了迄今场景覆盖最广（17种）、样本量最大（1101个）、评估维度最全（7个自动指标）的长语音生成评估基准SwanBench-Speech。
2.  面向长特性的评估指标设计： 超越传统保真度和准确率，明确定义并引入了针对长语音关键特性的新指标，包括混响一致性（评估声场稳定性）、韵律连贯性（评估段落级自然度）和表现层次性（评估动态变化），并通过人类研究验证其有效性。
3.  系统性的社区洞察： 通过大规模实验，首次系统性地揭示了当前SOTA模型在长语音生成任务上的普遍弱点（如高表现力场景衰退、混响与韵律的缺陷），并深入探讨了模型架构（AR vs. NAR）和训练数据策略对长语音生成性能的深层影响，为未来研究提供了清晰的路线图。

### 📊 实验结果

论文对单说话人长文本生成和对话生成分别进行了评估，结果如下。

表1：单说话人长文本生成模型评估结果（来自原文表2）
| 模型 | 音色一致性(↑) | 混响一致性(↓) | 声音保真度(↑) | CER/WER(↓) | 韵律连贯性(↑) | 表现丰富性(↑) | 表现层次性(↑) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 开源模型 | | | | | | | |
| CosyVoice-2 | 0.92±0.018 | 2.35±0.78 | 3.80±0.27 | 0.032 / 0.168 | 3.23±1.01 | 3.02±0.68 | 2.76±0.88 |
| CosyVoice-3 | 0.94±0.008 | 2.26±0.59 | 3.83±0.10 | 0.034 / 0.141 | 3.31±0.71 | 2.80±0.70 | 2.45±0.75 |
| FishSpeech | 0.93±0.014 | 1.79±0.65 | 4.10±0.09 | 0.043 / 0.113 | 3.80±0.86 | 2.66±0.78 | 2.90±0.74 |
| F5TTS | 0.90±0.022 | 1.82±0.77 | 3.39±0.33 | 0.072 / 0.113 | 3.41±0.99 | 3.07±0.63 | 2.77±0.84 |
| GLM-TTS | 0.94±0.010 | 1.62±0.61 | 3.95±0.13 | 0.035 / 0.118 | 3.64±0.87 | 2.68±0.71 | 2.54±0.88 |
| IndexTTS-2 | 0.94±0.008 | 1.72±0.53 | 2.77±0.41 | 0.033 / 0.135 | 3.64±0.52 | 3.59±0.72 | 2.96±0.81 |
| MegaTTS-3 | 0.93±0.008 | 1.81±0.45 | 3.55±0.19 | 0.035 / 0.108 | 3.61±0.84 | 2.81±0.55 | 2.53±0.63 |
| SparkTTS | 0.93±0.033 | 1.79±1.70 | 3.59±0.40 | 0.329 / 0.240 | 2.58±1.24 | 3.47±0.58 | 2.38±0.83 |
| VibeVoice | 0.93±0.024 | 2.15±0.88 | 3.82±0.42 | 0.047 / 0.111 | 3.90±0.79 | 3.71±0.58 | 3.34±0.88 |
| ZipVoice | 0.90±0.011 | 2.06±1.08 | 3.51±0.19 | 0.072 / 0.396 | 3.19±1.11 | 2.44±0.85 | 2.11±1.05 |
| 开源平均 | 0.93 | 1.95 | 3.63 | 0.073 / 0.164 | 3.43 | 3.03 | 2.67 |
| 闭源模型 | | | | | | | |
| ElevenLabs V2 | 0.96±0.008 | 3.05±0.59 | 4.02±0.11 | 0.100 / 0.115 | 3.50±0.73 | 2.33±0.74 | 2.68±0.81 |
| Gemini-2.5-pro-tts | 0.91±0.018 | 1.44±0.50 | 3.16±0.36 | 0.058 / 0.169 | 3.91±0.72 | 4.14±0.65 | 3.51±0.84 |
| Inworld-TTS-1-max | 0.93±0.025 | 2.19±0.64 | 3.73±0.17 | 0.053 / 0.113 | 3.71±0.51 | 3.68±0.86 | 3.03±0.92 |
| Minimax-Speech-02-hd | 0.93±0.010 | 1.38±0.35 | 3.82±0.09 | 0.032 / 0.119 | 3.95±0.73 | 3.80±0.44 | 3.26±0.79 |
| OpenAI-tts-01-hd | 0.92±0.011 | 1.74±0.42 | 2.68±0.12 | 0.043 / 0.119 | 3.91±0.52 | 3.46±0.62 | 3.25±0.81 |
| SeedTTS-2 | 0.94±0.022 | 1.95±0.74 | 3.88±0.18 | 0.106 / 0.193 | 3.74±0.44 | 3.10±0.80 | 2.34±0.65 |
| 闭源平均 | 0.93 | 1.96 | 3.55 | 0.065 / 0.138 | 3.79 | 3.42 | 3.01 |
| 真实语音 | 0.96 | 1.91 | 3.62 | 0.070 / 0.074 | 4.04 | 4.35 | 3.94 |

表2：对话生成模型评估结果（来自原文表3）
| 模型 | 音色一致性(↑) | 混响一致性(↓) | 声音保真度(↑) | CER/WER(↓) | 韵律连贯性(↑) | 表现丰富性(↑) | 表现层次性(↑) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 开源模型 | | | | | | | |
| FireRedTTS-2 | 0.93±0.017 | 3.48±1.06 | 2.62±0.69 | 0.075 / 0.131 | 3.24±1.04 | 2.72±0.75 | 2.81±0.97 |
| MoonCast | 0.90±0.022 | 3.06±1.84 | 2.62±0.37 | 0.313 / 0.125 | 3.16±1.18 | 2.68±0.68 | 2.70±0.99 |
| MOSS-TTSD | 0.91±0.028 | 3.55±1.16 | 2.89±0.55 | 0.148 / 0.239 | 2.79±1.14 | 3.21±0.79 | 2.99±1.06 |
| SoulX-Podcast | 0.93±0.016 | 3.51±0.80 | 3.96±0.09 | 0.061 / 0.090 | 4.01±0.78 | 3.44±0.69 | 3.71±0.81 |
| VibeVoice | 0.91±0.028 | 3.59±0.85 | 3.35±0.72 | 0.106 / 0.125 | 3.57±1.05 | 3.76±0.63 | 3.37±0.83 |
| ZipVoice-Dialog | 0.91±0.021 | 3.53±0.85 | 2.66±0.24 | 0.069 / 0.114 | 3.67±0.89 | 2.62±0.60 | 2.80±0.88 |
| 开源平均 | 0.92 | 3.45 | 3.02 | 0.129 / 0.137 | 3.41 | 3.07 | 3.06 |
| 闭源模型 | | | | | | | |
| ElevenLabs V2 | 0.93±0.016 | 4.43±1.01 | 3.48±0.44 | 0.127 / 0.109 | 3.67±0.78 | 2.84±0.79 | 3.46±0.87 |
| Gemini-2.5-pro-tts | 0.92±0.017 | 3.17±0.68 | 3.01±0.24 | 0.086 / 0.092 | 4.06±0.39 | 4.06±0.48 | 4.02±0.68 |
| OpenAI-tts-1-hd | 0.93±0.013 | 2.98±0.63 | 2.28±0.17 | 0.104 / 0.103 | 3.69±0.62 | 3.29±0.75 | 3.70±0.88 |
| SeedTTS-Podcast | 0.91±0.017 | 2.85±0.78 | 3.89±0.17 | 0.063 / 0.108 | 3.93±0.46 | 3.84±0.72 | 3.84±0.88 |
| 闭源平均 | 0.92 | 3.36 | 3.17 | 0.095 / 0.103 | 3.83 | 3.51 | 3.76 |
| 真实对话 | 0.95 | 2.73 | 2.94 | 0.050 / 0.137 | 3.95 | 4.42 | 4.17 |

关键发现：
1.  与真实数据的差距： 最佳模型在保真度和准确率上已接近人类，但在表现力（尤其是丰富性和层次性）和韵律连贯性上仍有显著差距。对话生成在混响一致性上（闭源平均3.36 vs. 真实2.73）差距尤为明显。
2.  场景影响： 高表现力场景（如脱口秀、体育解说）导致模型性能普遍下降。
3.  架构权衡： AR模型（如SparkTTS）表现力可能更好但内容准确率易随长度下降；NAR模型（如F5TTS）则更稳健，但表现层次性得分较低。
4.  数据重要性： 训练数据质量（短片段导致长程依赖差，如SparkTTS；不稳定声场导致混响差，如CosyVoice-3）是关键瓶颈。

![图3](https://arxiv.org/html/2605.28618v1/x4.png)

![图4](data:image/svg+xml;base64,PHN2ZyBpZD0iQTEuRjUucGljMSIgY2xhc3M9Imx0eF9waWN0dXJlIGx0eF9jZW50ZXJpbmciIGhlaWdodD0iMTAzOC4yIiBvdmVyZmxvdz0idmlzaWJsZSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDc3LjM4IDEwMzguMiIgd2lkdGg9IjQ3Ny4zOCI+PGcgc3R5bGU9Ii0tbHR4LXN0cm9rZS1jb2xvcjojMDAwMDAwOy0tbHR4LWZpbGwtY29sb3I6IzAwMDAwMDsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMTAzOC4yKSBtYXRyaXgoMSAwIDAgLTEgMCAwKSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNHB0Ij48ZyBzdHlsZT0iLS1sdHgtZmlsbC1jb2xvcjojMUE0RDFBOyIgZmlsbD0iIzFBNEQxQSIgZmlsbC1vcGFjaXR5PSIxLjAiPjxwYXRoIHN0eWxlPSJzdHJva2U6bm9uZSIgZD0iTSAwIDUuOTEgTCAwIDEwMzIuMyBDIDAgMTAzNS41NiAyLjY0IDEwMzguMiA1LjkxIDEwMzguMiBMIDQ3MS40NyAxMDM4LjIgQyA0NzQuNzMgMTAzOC4yIDQ3Ny4zOCAxMDM1LjU2IDQ3Ny4zOCAxMDMyLjMgTCA0NzcuMzggNS45MSBDIDQ3Ny4zOCAyLjY0IDQ3NC43MyAwIDQ3MS40NyAwIEwgNS45MSAwIEMgMi42NCAwIDAgMi42NCAwIDUuOTEgWiI+PC9wYXRoPjwvZz48ZyBzdHlsZT0iLS1sdHgtZmlsbC1jb2xvcjojRkZGRkZGOyIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1vcGFjaXR5PSIxLjAiPjxwYXRoIHN0eWxlPSJzdHJva2U6bm9uZSIgZD0iTSAxLjk3IDUuOTEgTCAxLjk3IDEwMTQuMDkgTCA0NzUuNDEgMTAxNC4wOSBMIDQ3NS40MSA1LjkxIEMgNDc1LjQxIDMuNzMgNDczLjY1IDEuOTcgNDcxLjQ3IDEuOTcgTCA1LjkxIDEuOTcgQyAzLjczIDEuOTcgMS45NyAzLjczIDEuOTcgNS45MSBaIj48L3BhdGg+PC9nPjxnIGZpbGwtb3BhY2l0eT0iMS4wIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgMjEuNjUgMTAyMi42OSkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mZy1jb2xvcjojRkZGRkZGOy0tbHR4LWZvLXdpZHRoOjMxLjM3ZW07LS1sdHgtZm8taGVpZ2h0OjAuNjllbTstLWx0eC1mby1kZXB0aDowLjE5ZW07IiB3aWR0aD0iNDM0LjA3IiBoZWlnaHQ9IjEyLjMiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgOS42MSkiIG92ZXJmbG93PSJ2aXNpYmxlIiBjb2xvcj0iI0ZGRkZGRiI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJBMS5GNS5waWMxLjEuMS4xLjEuMSIgY2xhc3M9Imx0eF9pbmxpbmUtYmxvY2sgbHR4X21pbmlwYWdlIGx0eF9hbGlnbl9ib3R0b20iIHN0eWxlPSJ3aWR0aDozMS4zN2VtOyI+PHNwYW4gaWQ9IkExLkY1LnBpYzEuMS4xLjEuMS4xLjEiIGNsYXNzPSJsdHhfcCI+UHJvbXB0IGZvciBnZW5lcmF0aW5nIHN0cnVjdHVyZWQgcHJlc2VudGF0aW9uIGRhdGE8L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48ZyBmaWxsLW9wYWNpdHk9IjEuMCIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wIDAuMCAwLjAgMS4wIDIxLjY1IDE3LjI0KSI+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Ii0tbHR4LWZnLWNvbG9yOiMwMDAwMDA7LS1sdHgtZm8td2lkdGg6MzEuMzdlbTstLWx0eC1mby1oZWlnaHQ6NzEuMTllbTstLWx0eC1mby1kZXB0aDowLjI1ZW07IiB3aWR0aD0iNDM0LjA3IiBoZWlnaHQ9Ijk4OC41IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDk4NS4wNCkiIG92ZXJmbG93PSJ2aXNpYmxlIiBjb2xvcj0iIzAwMDAwMCI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJBMS5GNS5waWMxLjIuMi4yLjEuMSIgY2xhc3M9Imx0eF9pbmxpbmUtYmxvY2sgbHR4X21pbmlwYWdlIGx0eF9hbGlnbl9ib3R0b20iIHN0eWxlPSJ3aWR0aDozMS4zN2VtOyI+PHNwYW4gaWQ9IkExLkY1LnBpYzEuMi4yLjIuMS4xLjEiIGNsYXNzPSJsdHhfcCI+WW91IGFyZSBhbiBleHBlcnQgY29tcHV0ZXIgc2NpZW5jZSBwcm9mZXNzb3IgYW5kIGNvbnRlbnQgY3JlYXRvci4gWW91ciB0YXNrIGlzIHRvIGdlbmVyYXRlIGEgaGlnaC1xdWFsaXR5LCBsb25nLWZvcm0gcHJlc2VudGF0aW9uIHNjcmlwdCBvbiB0aGUgdG9waWM6IDxzcGFuIGlkPSJBMS5GNS5waWMxLjIuMi4yLjEuMS4xLjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIj5bSW5zZXJ0IFRvcGljIEhlcmVdPC9zcGFuPi48L3NwYW4+PHNwYW4gaWQ9IkExLkY1LnBpYzEuMi4yLjIuMS4xLjIiIGNsYXNzPSJsdHhfcCI+PHNwYW4gaWQ9IkExLkY1LnBpYzEuMi4yLjIuMS4xLjIuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQiPkdlbmVyYXRpb24gUmVxdWlyZW1lbnRzOjwvc3Bhbj4KMS4gPHNwYW4gaWQ9IkExLkY1LnBpYzEuMi4yLjIuMS4xLjIuMiIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQiPkNvbXBsZXhpdHk8L3NwYW4+OiBUaGUgY29udGVudCBtdXN0IGJlIGFjYWRlbWljYWxseSByaWdvcm91cywgc3VpdGFibGUgZm9yIGNvbXB1dGVyIHNjaWVuY2Ugc3R1ZGVudHMuIEluY2x1ZGUgdGVjaG5pY2FsIHRlcm1pbm9sb2d5IGFuZCBsb2dpY2FsIHJlYXNvbmluZy4KMi4gPHNwYW4gaWQ9IkExLkY1LnBpYzEuMi4yLjIuMS4xLjIuMyIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQiPlN0cnVjdHVyZTwvc3Bhbj46IFRoZSBzcGVlY2ggc2hvdWxkIGJlIGNvaGVyZW50IGJ1dCBzZWdtZW50ZWQgaW50byBsb2dpY2FsIHBhcmFncmFwaHMuCjMuIDxzcGFuIGlkPSJBMS5GNS5waWMxLjIuMi4yLjEuMS4yLjQiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIj5Gb3JtYXQ8L3NwYW4+OiBZb3UgbXVzdCBzdHJpY3RseSBvdXRwdXQgYSB2YWxpZCBKU09OIG9iamVjdCB3aXRob3V0IGFueSBNYXJrZG93biBmb3JtYXR0aW5nLjwvc3Bhbj48c3BhbiBpZD0iQTEuRjUucGljMS4yLjIuMi4xLjEuMyIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iQTEuRjUucGljMS4yLjIuMi4xLjEuMy4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+SlNPTiBTY2hlbWE6PC9zcGFuPjwvc3Bhbj48c3BhbiBpZD0iQTEuRjUucGljMS4yLjIuMi4xLjEuNCIgY2xhc3M9Imx0eF9wIj57PC9zcGFuPjxzcGFuIGlkPSJBMS5GNS5waWMxLjIuMi4yLjEuMS41IiBjbGFzcz0ibHR4X3AiPiJjb250ZW50IjogWzwvc3Bhbj48c3BhbiBpZD0iQTEuRjUucGljMS4yLjIuMi4xLjEuNiIgY2xhc3M9Imx0eF9wIj57PC9zcGFuPjxzcGFuIGlkPSJBMS5GNS5waWMxLjIuMi4yLjEuMS43IiBjbGFzcz0ibHR4X3AiPiJzcGVha2VyIjogIlNwZWFrZXIxIiw8L3NwYW4+PHNwYW4gaWQ9IkExLkY1LnBpYzEuMi4yLjIuMS4xLjgiIGNsYXNzPSJsdHhfcCI+InRleHQiOiAiVGhlIGZpcnN0IHBhcmFncmFwaCBvZiB0aGUgc3BlZWNo4oCmIjwvc3Bhbj48c3BhbiBpZD0iQTEuRjUucGljMS4yLjIuMi4xLjEuOSIgY2xhc3M9Imx0eF9wIj59LDwvc3Bhbj48c3BhbiBpZD0iQTEuRjUucGljMS4yLjIuMi4xLjEuMTAiIGNsYXNzPSJsdHhfcCI+ezwvc3Bhbj48c3BhbiBpZD0iQTEuRjUucGljMS4yLjIuMi4xLjEuMTEiIGNsYXNzPSJsdHhfcCI+InNwZWFrZXIiOiAiU3BlYWtlcjEiLDwvc3Bhbj48c3BhbiBpZD0iQTEuRjUucGljMS4yLjIuMi4xLjEuMTIiIGNsYXNzPSJsdHhfcCI+InRleHQiOiAiVGhlIHNlY29uZCBwYXJhZ3JhcGggb2YgdGhlIHNwZWVjaOKApiI8L3NwYW4+PHNwYW4gaWQ9IkExLkY1LnBpYzEuMi4yLjIuMS4xLjEzIiBjbGFzcz0ibHR4X3AiPn08L3NwYW4+PHNwYW4gaWQ9IkExLkY1LnBpYzEuMi4yLjIuMS4xLjE0IiBjbGFzcz0ibHR4X3AiPl0sPC9zcGFuPjxzcGFuIGlkPSJBMS5GNS5waWMxLjIuMi4yLjEuMS4xNSIgY2xhc3M9Imx0eF9wIj4ibnVtX3NwZWFrZXJzIjogMSw8L3NwYW4+PHNwYW4gaWQ9IkExLkY1LnBpYzEuMi4yLjIuMS4xLjE2IiBjbGFzcz0ibHR4X3AiPiJ0aGVtZSI6ICJbSW5zZXJ0IFRvcGljIEhlcmVdIiw8L3NwYW4+PHNwYW4gaWQ9IkExLkY1LnBpYzEuMi4yLjIuMS4xLjE3IiBjbGFzcz0ibHR4X3AiPiJzb3VyY2UiOiAiTExNIEdlbmVyYXRpb24iLDwvc3Bhbj48c3BhbiBpZD0iQTEuRjUucGljMS4yLjIuMi4xLjEuMTgiIGNsYXNzPSJsdHhfcCI+IlRMRFIiOiAiQSBvbmUtc2VudGVuY2Ugc3VtbWFyeSBvZiB0aGUgcHJlc2VudGF0aW9uLiI8L3NwYW4+PHNwYW4gaWQ9IkExLkY1LnBpYzEuMi4yLjIuMS4xLjE5IiBjbGFzcz0ibHR4X3AiPn08L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48L2c+PC9zdmc+)


### 🔬 细节详述

1.  数据精炼的先进技术： 论文详细描述了使用GPT-5和DeepSeek V3.2进行自动化数据筛选和净化的过程，这体现了利用前沿大语言模型构建高质量评测集的趋势。具体流程包括语义去重（基于SentenceBERT）、质量评分（GPT-5评估表达与连贯性）、隐私伦理审查（DeepSeek V3.2结合思维链进行PII匿名化和风险评估），最后是人工审核与增补。
2.  评估指标的消融研究： 论文在附录中提供了关键的消融实验。例如，对音色一致性和混响一致性评估的滑动窗口大小和步长进行了系统测试（见表11和表12）。结果发现，窗口过小（≤2s）会导致对真实数据的一致性评估偏低；窗口过大（≥4s）则会平滑掉瞬时变化，减小模型间差异。最终选择了3秒窗口、2秒步长的折中方案，并证明该设置下模型排名保持稳定。
3.  生成长度影响的扩展分析： 除了主文图4，附录F.3提供了更详细的长度影响实验（图10）。结果表明，随着生成句子数增加，几乎所有指标（尤其是混响一致性、韵律连贯性、表现层次性）都呈下降趋势。有趣的是，音色相似度和一致性相对稳定，说明当前模型在“上下文学习”范式下保持说话人身份的能力较强。内容准确率则因模型而异，AR架构的SparkTTS下降明显。
4.  语言间性能差异： 附录G.3和表14/15提供了按语言（中文/英文）拆分���实验结果。论文指出，尽管多数模型声称支持双语，但语言对性能有显著影响。例如，ElevenLabs在表现丰富性上中英文差距巨大（中文1.79 vs. 英文2.87）。Gemini-2.5-pro-tts则表现出较好的跨语言平衡性。
5.  开源详情与许可： 论文明确承诺将在HuggingFace上以CC BY-NC-SA 4.0许可证发布测试集（包括1101个样本）。完整代码库（数据处理、评估脚本与提示）将在GitHub上开源（项目主页：https://swanaigc.github.io/#bench）。评估所用的核心工具链（如WavLM TDCNN, SRMRpy, FunASR Nano, SpeechJudge等）均为开源项目，但SpeechJudge本身是基于Qwen2.5-Omni-7B微调，其独立开源状态未明确说明。

### ⚖️ 评分理由

*   创新性 (2.5/3): 主要创新在于提出了一个全面、系统化且实用的长语音生成评估框架。它将“质量”概念解构为可测量的新维度（混响一致性、表现层次性），并覆盖了单说话人与对话两大范式。这并非提出新颖的生成算法，而是一项对社区至关重要的基础设施建设。扣分点在于评估协议本身（尤其是使用闭源Gemini作为评估器）的独创性有限。
*   技术严谨性 (1.4/1.5): 评估协议设计严谨，考虑了滑动窗口、VAD过滤、多次评估取均值等技术细节，并通过人类研究进行了充分验证。数据构建流程极其详尽，采用了多级自动化与人工混合的精炼策略。主要扣分点在于核心表达力评估依赖于未公开的闭源模型（Gemini 3 Pro），这损害了技术的完全可验证性和未来可复现性。
*   实验充分性 (1.5/1.5): 实验设计堪称典范。评估了超过20个模型（10个开源+6个闭源单说话人，6个开源+4个闭源对话），模型覆盖面广。提供了多角度分析：维度对比、场景对比、长度影响、语言对比、架构权衡。所有关键结果都配有清晰的表格和图表。
*   清晰度 (1.0/1.0): 论文写作清晰，结构从问题到解决方案、从基准构建到实验分析层层递进。图表（尤其是图1、图3、图4）直观有效地支持了核心论点。附录提供了所有必要的细节。
*   影响力 (2.0/2.0): 作为一项资源型工作，其潜在影响力巨大。它为快速增长的长语音生成领域提供了急需的标准化评测工具，将直接推动模型改进和公平比较。实验得出的洞察（如数据质量的重要性、AR/NAR权衡）对社区有直接指导意义。
*   开源 (1.2/1.5): 论文明确承诺开源数据集和代码，这是对社区的重大贡献。扣分点在于评估管道的关键组件（表现力评估器）是闭源的，这降低了整体开源完整性。此外，评估中使用的其他商业闭源生成模型也限制了完全在开源环境中复现核心实验的可能性。
*   可复现性 (0.3/0.5): 论文提供了详细的设置、工具链接和提示模板，尽最大努力保证了可复现性。然而，由于生成模型本身包含多个未开源的商业系统，且评估协议依赖未开源的Gemini 3 Pro，研究者无法在完全开源的环境中复现论文的所有核心实验和结果。这给可复现性带来了不可忽视的障碍。

总分计算： 2.5 + 1.4 + 1.5 + 1.0 + 2.0 + 1.2 + 0.3 = 9.9 / 14 = 7.07 ≈ 7.5 (考虑到其作为基准的极高实用价值，向上微调至7.5)。

### 🚨 局限与问题

1.  评估器依赖闭源模型： 这是论文最根本的局限。使用Gemini 3 Pro作为表现力（丰富性、层次性）和韵律连贯性的主要评估器，使得整个评估协议的长期稳定性和可复现性高度依赖于Google的服务与模型版本。论文自身也承认了这一风险，并提到未来将致力于蒸馏开源评估器，但目前该风险是现实存在的。
2.  数据代表性偏差： 虽然构建了17种场景，但测试集的平均文本长度（约200-400词）主要对应分钟级合成，可能无法完全反映超长文本（如数分钟或更长）生成中的全部挑战。此外，提示语音仅来自25个开源数据集的参考音频，其多样性可能无法完全代表真实世界中所有目标用户群的音色、口音和录音条件，可能引入评估偏差。
3.  评估维度的初步性： 论文在语义维度的评估相对薄弱。内容准确率（WER/CER）和韵律连贯性（基于LALM）未能深入评估长文本的深层语义一致性（如情节连贯性、论点推进、情感弧线）。论文承认了这一点，并指出缺乏基于深度语义理解的自动化评估框架。
4.  局限性讨论不够深入： 作者自己提到的局限（语言范围、语义评估、说话人多样性）是合理的。但作为审稿人，还需指出：
    *   实验公平性问题： 对开源模型使用零样本设置，对闭源模型使用官方预设声音，这可能导致比较不在完全相同的起点上。开源模型的性能可能因参考音频的选择而大幅波动（论文也提到了这一点）。
    *   “真实数据”作为上界的局限性： 将Web爬取的真实录音（可能含噪）作为质量上界，本身并不完全公平。合成语音在保真度上超越这些“真实数据”是可能的，但这是否意味着合成语音达到了“理想”的录音棚质量？评估中的“真实语音/对话”基线应更谨慎地解释。
    *   场景划分的模糊性： 17种场景被映射到三大挑战，但某些场景可能同时涉及多个挑战（如“辩论”既有声学挑战也有语义挑战），这种硬性映射在分析时可能引入混淆。
5.  对新型指令跟随能力的评估缺失： 论文主要评估传统的零样本长语音生成。对于近期出现的、能遵循复杂指令（如情感、节奏、风格）进行生成的“指令式语音合成”（InstructTTS）模型，SwanBench-Speech目前的评估协议并不直接适用，这是一个待补充的方向。

### 📷 论文图片

![图5](data:image/svg+xml;base64,PHN2ZyBpZD0iQTEuRjYucGljMSIgY2xhc3M9Imx0eF9waWN0dXJlIGx0eF9jZW50ZXJpbmciIGhlaWdodD0iMTAzMS45NyIgb3ZlcmZsb3c9InZpc2libGUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ3Ny4zOCAxMDMxLjk3IiB3aWR0aD0iNDc3LjM4Ij48ZyBzdHlsZT0iLS1sdHgtc3Ryb2tlLWNvbG9yOiMwMDAwMDA7LS1sdHgtZmlsbC1jb2xvcjojMDAwMDAwOyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwxMDMxLjk3KSBtYXRyaXgoMSAwIDAgLTEgMCAwKSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNHB0Ij48ZyBzdHlsZT0iLS1sdHgtZmlsbC1jb2xvcjojMUE0RDFBOyIgZmlsbD0iIzFBNEQxQSIgZmlsbC1vcGFjaXR5PSIxLjAiPjxwYXRoIHN0eWxlPSJzdHJva2U6bm9uZSIgZD0iTSAwIDUuOTEgTCAwIDEwMjYuMDcgQyAwIDEwMjkuMzMgMi42NCAxMDMxLjk3IDUuOTEgMTAzMS45NyBMIDQ3MS40NyAxMDMxLjk3IEMgNDc0LjczIDEwMzEuOTcgNDc3LjM4IDEwMjkuMzMgNDc3LjM4IDEwMjYuMDcgTCA0NzcuMzggNS45MSBDIDQ3Ny4zOCAyLjY0IDQ3NC43MyAwIDQ3MS40NyAwIEwgNS45MSAwIEMgMi42NCAwIDAgMi42NCAwIDUuOTEgWiI+PC9wYXRoPjwvZz48ZyBzdHlsZT0iLS1sdHgtZmlsbC1jb2xvcjojRkZGRkZGOyIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1vcGFjaXR5PSIxLjAiPjxwYXRoIHN0eWxlPSJzdHJva2U6bm9uZSIgZD0iTSAxLjk3IDUuOTEgTCAxLjk3IDEwMDcuODYgTCA0NzUuNDEgMTAwNy44NiBMIDQ3NS40MSA1LjkxIEMgNDc1LjQxIDMuNzMgNDczLjY1IDEuOTcgNDcxLjQ3IDEuOTcgTCA1LjkxIDEuOTcgQyAzLjczIDEuOTcgMS45NyAzLjczIDEuOTcgNS45MSBaIj48L3BhdGg+PC9nPjxnIGZpbGwtb3BhY2l0eT0iMS4wIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAgMC4wIDAuMCAxLjAgMjEuNjUgMTAxNi40NikiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mZy1jb2xvcjojRkZGRkZGOy0tbHR4LWZvLXdpZHRoOjMxLjM3ZW07LS1sdHgtZm8taGVpZ2h0OjAuNjllbTstLWx0eC1mby1kZXB0aDowLjE5ZW07IiB3aWR0aD0iNDM0LjA3IiBoZWlnaHQ9IjEyLjMiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgOS42MSkiIG92ZXJmbG93PSJ2aXNpYmxlIiBjb2xvcj0iI0ZGRkZGRiI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRhaW5lciI+PHNwYW4gY2xhc3M9Imx0eF9mb3JlaWdub2JqZWN0X2NvbnRlbnQiPjxzcGFuIGlkPSJBMS5GNi5waWMxLjEuMS4xLjEuMSIgY2xhc3M9Imx0eF9pbmxpbmUtYmxvY2sgbHR4X21pbmlwYWdlIGx0eF9hbGlnbl9ib3R0b20iIHN0eWxlPSJ3aWR0aDozMS4zN2VtOyI+PHNwYW4gaWQ9IkExLkY2LnBpYzEuMS4xLjEuMS4xLjEiIGNsYXNzPSJsdHhfcCI+UHJvbXB0IGZvciB0aGUgZXZhbHVhdGlvbiBvZiBsb25nLWZvcm0gaW5zdGFuY2VzPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvZm9yZWlnbk9iamVjdD48L2c+PGcgZmlsbC1vcGFjaXR5PSIxLjAiIHRyYW5zZm9ybT0ibWF0cml4KDEuMCAwLjAgMC4wIDEuMCAyMS42NSAxNy4yNCkiPjxmb3JlaWduT2JqZWN0IHN0eWxlPSItLWx0eC1mZy1jb2xvcjojMDAwMDAwOy0tbHR4LWZvLXdpZHRoOjMxLjM3ZW07LS1sdHgtZm8taGVpZ2h0OjcwLjc0ZW07LS1sdHgtZm8tZGVwdGg6MC4yNWVtOyIgd2lkdGg9IjQzNC4wNyIgaGVpZ2h0PSI5ODIuMjciIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgOTc4LjgxKSIgb3ZlcmZsb3c9InZpc2libGUiIGNvbG9yPSIjMDAwMDAwIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGFpbmVyIj48c3BhbiBjbGFzcz0ibHR4X2ZvcmVpZ25vYmplY3RfY29udGVudCI+PHNwYW4gaWQ9IkExLkY2LnBpYzEuMi4yLjIuMS4xIiBjbGFzcz0ibHR4X2lubGluZS1ibG9jayBsdHhfbWluaXBhZ2UgbHR4X2FsaWduX2JvdHRvbSIgc3R5bGU9IndpZHRoOjMxLjM3ZW07Ij48c3BhbiBpZD0iQTEuRjYucGljMS4yLjIuMi4xLjEuMSIgY2xhc3M9Imx0eF9wIj5Zb3UgYXJlIGFuIGV4cGVydCBsaW5ndWlzdCBhbmQgZGF0YSBxdWFsaXR5IGV2YWx1YXRvci4gWW91ciB0YXNrIGlzIHRvIGFzc2VzcyB0aGUgc3VpdGFiaWxpdHkgb2YgdGhlIGZvbGxvd2luZyB0ZXh0IHNhbXBsZSBmb3IgPHNwYW4gaWQ9IkExLkY2LnBpYzEuMi4yLjIuMS4xLjEuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQiPmxvbmctZm9ybSBzcGVlY2ggZ2VuZXJhdGlvbjwvc3Bhbj4uPC9zcGFuPjxzcGFuIGlkPSJBMS5GNi5waWMxLjIuMi4yLjEuMS4yIiBjbGFzcz0ibHR4X3AiPlBsZWFzZSBldmFsdWF0ZSB0aGUgdGV4dCBiYXNlZCBvbiB0aGUgZm9sbG93aW5nIHR3byBjcml0ZXJpYTo8L3NwYW4+PHNwYW4gaWQ9IkExLkY2LnBpYzEuMi4yLjIuMS4xLjMiIGNsYXNzPSJsdHhfcCI+MS4gPHNwYW4gaWQ9IkExLkY2LnBpYzEuMi4yLjIuMS4xLjMuMSIgY2xhc3M9Imx0eF90ZXh0IGx0eF9mb250X2JvbGQiPlRleHR1YWwgRXhwcmVzc2l2ZW5lc3M8L3NwYW4+OiBBc3Nlc3MgdGhlIGZsdWVuY3ksIG5hdHVyYWxuZXNzLCBhbmQgcmhldG9yaWNhbCBxdWFsaXR5IG9mIHRoZSB0ZXh0LiBJcyB0aGUgbGFuZ3VhZ2Ugdml2aWQgYW5kIHJoeXRobWljYWxseSBzdWl0YWJsZSBmb3IgbG9uZy1kdXJhdGlvbiBzcGVlY2ggc3ludGhlc2lzPzwvc3Bhbj48c3BhbiBpZD0iQTEuRjYucGljMS4yLjIuMi4xLjEuNCIgY2xhc3M9Imx0eF9wIj4yLiA8c3BhbiBpZD0iQTEuRjYucGljMS4yLjIuMi4xLjEuNC4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+Q29udGVudCBDb25zaXN0ZW5jeTwvc3Bhbj46IEFzc2VzcyB0aGUgbG9naWNhbCBjb2hlcmVuY2UgYW5kIHNlbWFudGljIHN0YWJpbGl0eSBvZiB0aGUgdGV4dC4gSXMgdGhlIG5hcnJhdGl2ZSBvciBhcmd1bWVudCBjb25zaXN0ZW50IHRocm91Z2hvdXQgd2l0aG91dCBjb250cmFkaWN0aW9ucyBvciBhYnJ1cHQgdG9waWMgc2hpZnRzPzwvc3Bhbj48c3BhbiBpZD0iQTEuRjYucGljMS4yLjIuMi4xLjEuNSIgY2xhc3M9Imx0eF9wIj5SYXRlIGVhY2ggY3JpdGVyaW9uIG9uIGEgc2NhbGUgb2YgMSB0byA1ICgxID0gUG9vciwgNSA9IEV4Y2VsbGVudCkuIEJhc2VkIG9uIHRoZXNlLCBwcm92aWRlIGFuIDxzcGFuIGlkPSJBMS5GNi5waWMxLjIuMi4yLjEuMS41LjEiIGNsYXNzPSJsdHhfdGV4dCBsdHhfZm9udF9ib2xkIj5PdmVyYWxsIFNjb3JlPC9zcGFuPiAoMS01KSByZXByZXNlbnRpbmcgeW91ciByZWNvbW1lbmRhdGlvbiBmb3IgcmV0YWluaW5nIHRoaXMgc2FtcGxlLjwvc3Bhbj48c3BhbiBpZD0iQTEuRjYucGljMS4yLjIuMi4xLjEuNiIgY2xhc3M9Imx0eF9wIj48c3BhbiBpZD0iQTEuRjYucGljMS4yLjIuMi4xLjEuNi4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+T3V0cHV0IFJlcXVpcmVtZW50Ojwvc3Bhbj48L3NwYW4+PHNwYW4gaWQ9IkExLkY2LnBpYzEuMi4yLjIuMS4xLjciIGNsYXNzPSJsdHhfcCI+WW91IG11c3Qgb3V0cHV0IHRoZSByZXN1bHQgc3RyaWN0bHkgaW4gdGhlIGZvbGxvd2luZyBKU09OIGZvcm1hdDo8L3NwYW4+PHNwYW4gaWQ9IkExLkY2LnBpYzEuMi4yLjIuMS4xLjgiIGNsYXNzPSJsdHhfcCI+ezwvc3Bhbj48c3BhbiBpZD0iQTEuRjYucGljMS4yLjIuMi4xLjEuOSIgY2xhc3M9Imx0eF9wIj4icmVhc29uaW5nIjogIlByb3ZpZGUgYSBicmllZiBhbmFseXNpcyBleHBsYWluaW5nIHRoZSBzY29yZXMsIGhpZ2hsaWdodGluZyBwcm9zIGFuZCBjb25zLiIsPC9zcGFuPjxzcGFuIGlkPSJBMS5GNi5waWMxLjIuMi4yLjEuMS4xMCIgY2xhc3M9Imx0eF9wIj4idGV4dHVhbF9leHByZXNzaXZlbmVzc19zY29yZSI6ICZsdDtpbnRlZ2VyIGJldHdlZW4gMSBhbmQgNSZndDssPC9zcGFuPjxzcGFuIGlkPSJBMS5GNi5waWMxLjIuMi4yLjEuMS4xMSIgY2xhc3M9Imx0eF9wIj4iY29udGVudF9jb25zaXN0ZW5jeV9zY29yZSI6ICZsdDtpbnRlZ2VyIGJldHdlZW4gMSBhbmQgNSZndDssPC9zcGFuPjxzcGFuIGlkPSJBMS5GNi5waWMxLjIuMi4yLjEuMS4xMiIgY2xhc3M9Imx0eF9wIj4ib3ZlcmFsbF9zY29yZSI6ICZsdDtpbnRlZ2VyIGJldHdlZW4gMSBhbmQgNSZndDs8L3NwYW4+PHNwYW4gaWQ9IkExLkY2LnBpYzEuMi4yLjIuMS4xLjEzIiBjbGFzcz0ibHR4X3AiPn08L3NwYW4+PHNwYW4gaWQ9IkExLkY2LnBpYzEuMi4yLjIuMS4xLjE0IiBjbGFzcz0ibHR4X3AiPjxzcGFuIGlkPSJBMS5GNi5waWMxLjIuMi4yLjEuMS4xNC4xIiBjbGFzcz0ibHR4X3RleHQgbHR4X2ZvbnRfYm9sZCI+VGV4dCB0byBFdmFsdWF0ZTo8L3NwYW4+PC9zcGFuPjxzcGFuIGlkPSJBMS5GNi5waWMxLjIuMi4yLjEuMS4xNSIgY2xhc3M9Imx0eF9wIj5bSW5zZXJ0IFRleHQgSGVyZV08L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9mb3JlaWduT2JqZWN0PjwvZz48L2c+PC9zdmc+)


---

[← 返回 2026-05-28 语音/音乐/音频论文速递](/your-blog-base-path/posts/2026-05-28/)
