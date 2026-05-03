---
title: "ICLR 2026 - 基准测试 论文列表"
date: 2026-05-04
draft: false
tags: ["基准测试"]
categories: [iclr-2026]
description: "共 10 篇 ICLR 2026 基准测试 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 基准测试

共 **10** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [JointAVBench: A Benchmark for Joint Audio-Visual Reasoning E](/audio-paper-digest-blog/posts/2026-05-04-jointavbench-a-benchmark-for-joint-audio-visual) | 9.0分 | 前25% |
| 🥈 | [MCIF: Multimodal Crosslingual Instruction-Following Benchmar](/audio-paper-digest-blog/posts/2026-05-04-mcif-multimodal-crosslingual-instruction) | 8.5分 | 前25% |
| 🥉 | [WearVox: An Egocentric Multichannel Voice Assistant Benchmar](/audio-paper-digest-blog/posts/2026-05-04-wearvox-an-egocentric-multichannel-voice) | 8.5分 | 前25% |
| 4. | [AudioTrust: Benchmarking The Multifaceted Trustworthiness of](/audio-paper-digest-blog/posts/2026-05-04-audiotrust-benchmarking-the-multifaceted) | 8.3分 | 前25% |
| 5. | [STAR-Bench: Probing Deep Spatio-Temporal Reasoning as Audio ](/audio-paper-digest-blog/posts/2026-05-04-star-bench-probing-deep-spatio-temporal-reasoning) | 8.0分 | 前25% |
| 6. | [XModBench: Benchmarking Cross-Modal Capabilities and Consist](/audio-paper-digest-blog/posts/2026-05-04-xmodbench-benchmarking-cross-modal-capabilities) | 7.5分 | 前25% |
| 7. | [Seeing, Listening, Remembering, and Reasoning: A Multimodal ](/audio-paper-digest-blog/posts/2026-05-04-seeing-listening-remembering-and-reasoning-a) | 7.5分 | 前25% |
| 8. | [Human Behavior Atlas: Benchmarking Unified Psychological And](/audio-paper-digest-blog/posts/2026-05-04-human-behavior-atlas-benchmarking-unified) | 7.5分 | 前10% |
| 9. | [MMSU: A Massive Multi-task Spoken Language Understanding and](/audio-paper-digest-blog/posts/2026-05-04-mmsu-a-massive-multi-task-spoken-language) | 7.0分 | 前25% |
| 10. | [EchoMind: An Interrelated Multi-level Benchmark for Evaluati](/audio-paper-digest-blog/posts/2026-05-04-echomind-an-interrelated-multi-level-benchmark) | 6.5分 | 前50% |

---

## 📋 论文详情

### 🥇 [JointAVBench: A Benchmark for Joint Audio-Visual Reasoning Evaluation](/audio-paper-digest-blog/posts/2026-05-04-jointavbench-a-benchmark-for-joint-audio-visual)

🔥 **9.0/10** | 前25% | #基准测试 | #多模态模型 | #音视频 #模型评估

👥 **作者与机构**

- 第一作者：Jianghan Chao（中国人民大学高瓴人工智能学院）
- 通讯作者：Ruihua Song（中国人民大学高瓴人工智能学院）
- 作者列表：Jianghan Chao（中国人民大学高瓴人工智能学院）、Jianzhang Gao（中国人民大学高瓴人工智能学院）、Wenhui Tan（中国人民大学高瓴人工智能学院）、Yuchong Sun（中国人民大学高瓴人工智能学院）、Ruihua Song（中国人民大学高瓴人工智能学院）、Liyun Ru（百川智能）

#

💡 **毒舌点评**

本文最大的贡献是“立规矩”——为评估多模态大模型最核心也最容易被取巧的“音视频联合推理”能力，设立了一个高门槛、系统化的考卷（JointAVBench），其严格的音视频依赖性控制（100%相关）和多层次任务分类学设计堪称标杆。短板在于，这份“考卷”的命题素材（短片数据集SF20K）来源相对单一，可能无法完全代表现实世界中音视频交织的无限复杂性，且流水线高度依赖当前最强的LLM，其生成质量上限受限于“教师模型”的能力。

#

🔗 **开源详情**

- 代码：论文中未提及核心生成代码或评估脚本的开源链接。
- 模型权重：未提及。评估使用的是公开的商业模型（如Gemini）或开源模型（如Qwen系列）。
- 数据集：已公开。项目主页（https://jointavbench.github.io）提供数据集访问。采用 CC BY-NC-SA 4.0 许可证。
- Demo：未提及。
- 复现材料：论文在附录中详细提供了数据生成流水线中使用的所有提示模板（图10-16），这是复现数据构建过程的关键。描述了人工验证的流程和标准。评估实验的硬件（H-100）和超参数设置（采样帧数、解码参数）也有说明。
- 论文中引用的开源项目：
    - 视频处理：PySceneDetect（用于场景分割）。
    - 视觉描述生成：Qwen2.5-VL。
    - 音频描述生成：Qwen2.5-Omni。
    - 语音转录：Whisper-v3。
    - 文本生成与质量控制：Qwen2.5 (通义千问2.5)。
    - 数据来源：Short-Films 20K (SF20K) 数据集。

📌 **核心摘要**

1.  解决的问题：现有用于评估多模态大语言模型（Omni-LLMs）音视频联合理解能力的基准测试存在不足，或缺乏严格的音视频依赖性控制，或覆盖的音频类型单一，或忽略了多场景推理的复杂性，导致无法对模型进行严格全面的评估。
2.  方法核心：提出JointAVBench，这是一个全新的基准。其核心在于一个精心设计的三维分类体系：5种认知维度（如时序、情节）、4种音频信息类型（语音、声学事件、音乐、人声特征）和3种场景跨度（单场景、跨场景、全场景）。基于此构建了15个需要严格音视频联合推理的任务。同时，提出一个三阶段半自动流水线来生成高质量问题-答案对：全模态描述生成、问答对创建、严格的质量控制（通用检查+任务特定检查+干扰项生成），并辅以人工验证。
3.  创新点：这是首个专注于严格音视频关联和多场景推理的综合评估基准。其分类体系系统且全面，半自动构建流水线在保证数据质量（100%音视频相关率）的同时降低了成本。
4.  主要实验结果：评估了主流模型，最好的Omni-LLM（Gemini2.5-Pro）平均准确率仅为62.6%，虽显著优于单模态基线，但仍表明巨大提升空间。Omni-LLMs在大多数任务上优于Video-LLMs和Audio-LLMs，但在情感识别和空间推理等任务上反而落后。跨场景任务性能显著低于单场景任务，且场景数量增加会导致性能急剧下降。
5.  实际意义：为评估和推动具有真正音视频联合推理能力的Omni-LLMs提供了一个关键工具和方向标。揭示了当前模型在跨场景、情感和空间音视频融合方面的关键短板。
6.  主要局限性：数据集完全源自SF20K一个数据集，可能存在分布偏差。任务分类虽全面，但可能未涵盖所有音视频联合推理的维度。实验受计算资源限制，未能评估所有可能的模型。

#

---

### 🥈 [MCIF: Multimodal Crosslingual Instruction-Following Benchmark from Scientific Talks](/audio-paper-digest-blog/posts/2026-05-04-mcif-multimodal-crosslingual-instruction)

🔥 **8.5/10** | 前25% | #基准测试 | #模型评估 | #多模态模型 #多语言

👥 **作者与机构**

- 第一作者：Sara Papi（Fondazione Bruno Kessler (FBK)，意大利）
- 通讯作者：未明确说明（论文末尾作者邮箱按顺序排列，Jan Niehues为最后一位作者）
- 作者列表：Sara Papi（Fondazione Bruno Kessler (FBK)），Maike Züfle（Karlsruhe Institute of Technology (KIT)，德国），Marco Gaido（Fondazione Bruno Kessler (FBK)），Beatrice Savoldi（Fondazione Bruno Kessler (FBK)），Danni Liu（Karlsruhe Institute of Technology (KIT)），Ioannis Douros（Translated (Italy)），Luisa Bentivogli（Fondazione Bruno Kessler (FBK)），Jan Niehues（Karlsruhe Institute of Technology (KIT)）

💡 **毒舌点评**

亮点：该基准设计极其全面和系统，首次将多模态（文本、语音、视频）、跨语言（4种语言）、长短上下文以及人工标注的科学演讲内容整合到一个统一的指令跟随评估框架中，并进行了大规模的模型横评。
短板：评估结果揭示了当前模型在长上下文、多模态融合和鲁棒性方面的普遍短板，但论文本身并未提出解决这些短板的新模型方法，其价值更多在于“诊断”而非“治疗”。此外，基准数据源聚焦于科学演讲，可能对日常对话等场景的覆盖不足。

🔗 **开源详情**

- 代码：论文中明确提供了代码仓库链接 `github.com/hlt-mt/mcif`，包含推理和评估脚本。
- 模型权重：评测的模型均为公开的开源模型（托管在HuggingFace），论文中列出了完整的模型列表和权重链接。
- 数据集：MCIF数据集在HuggingFace上公开发布，链接为 `hf.co/datasets/FBK-MT/MCIF`，采用CC-BY 4.0许可。包含原始视频、转录、翻译、摘要和QA对。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详尽的复现信息，包括：
    - 所有基线模型在MCIF上的输出结果（链接：`github.com/hlt-mt/mcif/tree/main/baselines/outputs`）。
    - 详细的标注指南（转录、翻译、QA）。
    - 模型列表、推理设置（生成参数、HuggingFace版本、硬件）及Prompt列表。
- 论文中引用的开源项目：评测中使用的开源模型包括但不限于：Aya Expanse, Gemma 3, Llama 3.1, GPT-oss, Phi-4系列, Qwen2-Audio, Qwen2-VL, Qwen2.5-Omni, InternVL3, VideoLLaMA3, Video-XL2, Ola, Ming-Lite-Omni, MiniCPM-v等。

📌 **核心摘要**

1.  要解决什么问题：当前多模态大语言模型（MLLM）的评估基准存在明显缺陷，如局限于英语、仅关注单模态、依赖短上下文或缺乏人工标注，无法全面评估模型在跨语言、多模态、长上下文下的指令跟随能力。
2.  方法核心是什么：提出并构建了MCIF基准。该基准基于ACL 2023的科学演讲视频，由人工创建了高质量的英语转录、翻译（德、意、中）、摘要和问答对，确保了内容在模态（文本、语音、视频）和语言间的完全平行对齐。包含13个任务（分为识别、翻译、问答、总结四大类）和两个Prompt变体（固定与混合）。
3.  与已有方法相比新在哪里：这是首个同时满足多模态、跨语言、人类标注、覆盖长短上下文，并在科学领域内进行平行对齐的指令跟随评测基准。其平行设计支持系统性的消融研究，而MCIFfix与MCIFmix的对比则专门用于评估模型对指令表述的鲁棒性。
4.  主要实验结果如何：对23个模型（7个LLM，5个SpeechLLM，5个VideoLLM，6个MLLM）的测评发现：a) 总结任务最具挑战性，部分模型表现甚至低于随机基线；b) 长上下文输入导致多数模型性能显著下降；c) 模型在多模态融合上效果不佳，联合处理语音和视频常无增益甚至有害；d) 模型对Prompt的变体普遍敏感。Gemini 2.5 Flash在长上下文问答等任务中表现突出。

    关键结果对比表：
    | 任务类型 | 上下文 | 最佳模型（MCIFmix） | 核心指标（数值） | 次佳模型（MLLM） | 核心指标（数值） |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | 识别 (WER↓) | 短 | Phi4-Multimodal | 6.7 | Ola | 98.8 |
    | 翻译 (COMET↑) | 短 | Phi4-Multimodal | 80.1 | Qwen2.5-Omni | 76.5 |
    | 问答 (BERTS↑) | 长 | Gemini 2.5 Flash | 45.9 | Ola | 36.2 |
    | 总结 (BERTS↑) | 长 | Gemini 2.5 Flash | 21.8 | Phi4-Multimodal | 17.9 |

5.  实际意义是什么：MCIF为评估下一代通用MLLM在复杂真实场景（如国际会议）中的综合能力提供了一个标准化的、严格的基准，指出了模型在长上下文处理、多模态信息整合和指令鲁棒性方面的关键改进方向。
6.  主要局限性是什么：a) 基准数据源限于科学演讲，可能无法完全代表所有领域的对话交互场景；b) 任务均为单轮指令，未涉及多轮对话或更复杂的交互；c) 评估指标（如BERTScore）在跨语言、生成式任务上的绝对值解释需谨慎。

---

### 🥉 [WearVox: An Egocentric Multichannel Voice Assistant Benchmark for Wearables](/audio-paper-digest-blog/posts/2026-05-04-wearvox-an-egocentric-multichannel-voice)

🔥 **8.5/10** | 前25% | #基准测试 | #语音大模型 | #语音对话系统 #语音翻译

👥 **作者与机构**

- 第一作者：Zhaojiang Lin (Meta)
- 通讯作者：未明确说明，但邮箱 `zhaojiang@meta.com` 与第一作者相同，且 `lunadong@meta.com` (Xin Luna Dong) 在作者列表末尾。
- 作者列表：Zhaojiang Lin (Meta), Yong Xu (Meta), Kai Sun (Meta), Jing Zheng (Meta), Yin Huang (Meta), Surya Teja Appini (Meta), Krish Narang (Meta), Renjie Tao (Meta), Ishan Kapil Jain (Meta), Siddhant Arora (Carnegie Mellon University, 工作于Meta), Ruizhi Li (Meta), Yiteng Huang (Meta), Kaushik Patnaik (Meta), Wenfang Xu (Meta), Suwon Shon (Meta), Yue Liu (Meta), Ahmed A Aly (Meta), Anuj Kumar (Meta), Florian Metze (Meta), Xin Luna Dong (Meta)

💡 **毒舌点评**

这篇论文为可穿戴语音助手评测“开山立派”，数据集设计考虑周全，涵盖了从室内到户外、从安静到嘈杂的真实场景，任务设置（如侧语拒绝）也紧贴实际需求，这是其最大亮点。不过，基准规模（~3.8K条）相对有限，且提出的案例模型（WearLlama）在架构上并无颠覆性创新，其核心贡献更多是“定义问题”和“揭示现状”，而非提供一个性能上碾压所有基线的终极解决方案。

🔗 **开源详情**

- 代码：是。论文提供了数据集和评估代码的GitHub链接：`https://github.com/facebookresearch/wearvox`。
- 模型权重：未提及。论文未说明案例模型（SC/MC WearLlama）或其他基线模型的权重是否公开。
- 数据集：是。WearVox数据集通过上述GitHub仓库开源。
- Demo：未提及。
- 复现材料：提供了部分复现细节。数据集收集流程、评估协议（LLM Judge提示、AST评估）、案例模型的架构和训练数据来源在正文和附录中有说明。但缺失关键的训练超参数（如学习率、优化器配置）、训练硬件信息。
- 论文中引用的开源项目：Whisper (Radford et al., 2023)， Llama 3.3 70B (Dubey et al., 2024)， Llama-4-Scout (Team, 2025b)， BEST-RQ (Chiu et al., 2022)， Conformer (Gulati et al., 2020)， CRAG (Yang et al., 2024)， Head-to-Tail (Sun et al., 2024)。

📌 **核心摘要**

1.  要解决什么问题：现有的语音助手评测基准主要关注干净或通用对话音频，忽略了可穿戴设备（如AI眼镜）在实际使用中面临的独特挑战，包括自中心视角的噪声和运动干扰、快速微交互、以及区分设备指令与旁人对话等。
2.  方法核心是什么：提出WearVox，首个专为可穿戴场景设计的语音助手基准。它包含3842条通过AI眼镜采集的多通道、自中心音频记录，涵盖搜索增强问答、闭卷问答、侧语拒绝、工具调用和语音翻译五类任务。同时，构建了单通道和多通道两个案例模型来评估多通道音频的价值。
3.  与已有方法相比新在哪里：WearVox是首个整合了自中心视角、多通道音频、复杂对话动态（如侧语）和真实环境声学的语音助手基准。它使用了来自真实可穿戴设备的录音，而非模拟或TTS音频，更贴近实际应用场景。
4.  主要实验结果如何：现有领先的语音大模型（如GPT-4o Audio, Gemini 2.5 Flash）在WearVox上的表现并不理想，轮次级平均准确率在29%到59%之间，且在户外噪声环境下性能显著下降。案例研究表明，利用多通道音频的模型（MC WearLlama）相比单通道模型（SC WearLlama）在工具调用（63.9% vs 58.5%）和侧语拒绝（93.9% vs 85.4%）任务上取得了明显提升，整体准确率也从61.9%提高到66.4%。
    *   主要结果表（Table 2节选）：
        | 模型 | 搜索增强QA | 闭卷QA | 工具调用 | 侧语拒绝 | 轮次平均 |
        | :--- | :---: | :---: | :---: | :---: | :---: |
        | Qwen2.5-Omni | 35.8 | 29.8 | 7.3 | 60.4 | 33.1 |
        | GPT-4o Audio | 50.5 | 59.4 | 8.9 | 66.0 | 43.1 |
        | Gemini 2.5 Flash | 49.0 | 46.8 | 44.4 | 88.2 | 59.8 |
        | GPT-5 w/ Whisper | 57.8 | 70.6 | 35.7 | 73.8 | 57.8 |
        | Gemini 2.5 Flash Thinking | 48.8 | 61.4 | 68.1 | 91.4 | 71.3 |
    *   多通道案例研究结果表（Table 4）：
        | 模型 | 搜索增强QA | 闭卷QA | 工具调用 | 侧语拒绝 | 轮次平均 |
        | :--- | :---: | :---: | :---: | :---: | :---: |
        | SC WearLlama | 43.3 | 42.5 | 58.5 | 85.4 | 61.9 |
        | MC WearLlama | 43.3 | 42.2 | 63.9 | 93.9 | 66.4 |
5.  实际意义是什么：WearVox为开发和评估下一代可穿戴语音AI提供了一个关键测试平台，揭示了当前模型的不足（如噪声鲁棒性差），并指明了重要研究方向——利用多通道空间音频信息来提升上下文感知能力。其开源将推动该领域的研究。
6.  主要局限性是什么：数据集规模相对有限（~3.8K条），可能无法覆盖所有边缘情况。任务类型虽多样，但未包含同时翻译、主动助手等更复杂的交互。案例模型（WearLlama）的训练细节（如硬件、超参数）未完全公开，限制了完全复现。

---

### 4. [AudioTrust: Benchmarking The Multifaceted Trustworthiness of Audio Large Language Models](/audio-paper-digest-blog/posts/2026-05-04-audiotrust-benchmarking-the-multifaceted)

🔥 **8.3/10** | 前25% | #基准测试 | #模型评估 | #音频大模型 #鲁棒性

👥 **作者与机构**

- 第一作者：Kai Li（南洋理工大学）
- 通讯作者：Xinfeng Li（清华大学计算机系、人工智能研究院、BNRist）
- 作者列表：
    - Kai Li (南洋理工大学)
    - Can Shen (北京师范大学-香港浸会大学联合国际学院)
    - Yile Liu (早稻田大学)
    - Jirui Han (独立研究者)
    - Kelong Zheng (华中科技大学)
    - Xuechao Zou (北京交通大学)
    - Lionel Z. Wang (南洋理工大学)
    - Shun Zhang (清华大学)
    - Xingjian Du (罗切斯特大学)
    - Hanjun Luo (浙江大学)
    - Yingbin Jin (香港理工大学)
    - Xinxin Xing (独立研究者)
    - Ziyang Ma (上海交通大学，同人工智能研究院)
    - Yue Liu (新加坡国立大学)
    - Yifan Zhang (中国科学院)
    - Junfeng Fang (新加坡国立大学)
    - Kun Wang (南洋理工大学)
    - Yibo Yan (香港科技大学(广州))
    - Gelei Deng (南洋理工大学)
    - Haoyang Li (香港理工大学)
    - Yiming Li (南洋理工大学)
    - Xiaobin Zhuang (字节跳动)
    - Tianlong Chen (北卡罗来纳大学教堂山分校)
    - Qingsong Wen (松鼠AI)
    - Tianwei Zhang (南洋理工大学)
    - Yang Liu (南洋理工大学)
    - Haibo Hu (香港理工大学)
    - Zhizheng Wu (香港中文大学(深圳))
    - Xiaolin Hu (清华大学计算机系)
    - Eng-Siong Chng (南洋理工大学)
    - Wenyuan Xu (浙江大学)
    - XiaoFeng Wang (南洋理工大学)
    - Wei Dong (南洋理工大学)
    - Xinfeng Li (清华大学计算机系)

#

💡 **毒舌点评**

这篇论文在“评估”这个通常吃力不讨好的赛道上做到了系统化和全面性，其提出的AudioTrust框架是第一个专门针对音频大模型可信度的多维度基准，数据集构建也考虑了真实场景，这点值得肯定。然而，用GPT-4o等大模型来评判被评估的大模型，其公平性和准确性本身就是一个需要验证的“黑箱问题”，论文对此的讨论略显不足；另外，对部分开源模型表现不佳的归因（如“脆弱的音频编码器”）流于表面，未能深挖架构或训练数据层面的根本原因，分析深度可以更进一步。

#

📌 **核心摘要**

要解决什么问题：现有的针对大语言模型的安全可信评估框架主要针对文本模态，无法有效捕捉音频模态引入的独特风险（如基于音色、口音、环境音的偏见和攻击），缺乏系统性的评估标准。
方法核心：本文提出了AudioTrust，一个针对音频大语言模型可信度的综合评估框架。该框架覆盖了公平性、幻觉、安全、隐私、鲁棒性和认证六个核心维度，细分为26个子任务。研究者构建了一个包含超过4420个来自真实场景（如日常对话、紧急呼叫、语音助手交互）的音频样本的数据集，并开发了结合自动化评估管道（使用GPT-4o/Qwen3打分）与人工验证的大规模评估流程。
与已有方法相比新在哪里：1) 首次系统化：首次为音频大模型构建了多维度、大规模的可信度评估基准。2) 聚焦音频特异性：重点评估由声学特性（而非语义内容）引发的风险，如口音偏见、声学幻觉、情感欺骗攻击、语音克隆等。3) 全面数据集：构建了涵盖多种高风险场景的专用音频数据集。
主要实验结果如何：论文对14个主流开源和闭源音频大模型进行了评估。关键发现包括：
- 公平性：所有模型均表现出显著的不公平性（平均群组公平分数Γ仅0.328）。闭源模型决策偏差更强，开源模型更易受刻板印象关联影响。
- 幻觉：模型在检测物理/时间逻辑矛盾（如“水瓶落地时发出撞击声”）时表现尚可，但在识别更微妙的跨模态内容不匹配时较为脆弱。
- 安全：闭源模型整体防御能力更强，但医疗领域仍是弱点；开源模型（如Kimi-Audio）表现差异巨大。
- 隐私：模型对直接信息泄露（如银行账号）有较好拒绝率（通过提示工程可提升约25%），但对从副语言线索推断隐私属性（如年龄、种族）的防御极弱（拒绝率约9%）。
- 鲁棒性：闭源模型在噪声、多人说话等复杂声学条件下显著优于开源模型，后者常因“过度文本化”而性能骤降。
- 认证：在身份验证绕过（IVB）和混合欺骗（HS）任务中，闭源模型平均成功率高达97%，开源模型仅约55%。语音克隆欺骗（VCS）任务中模型表现分化明显。
实际意义：为音频大模型的安全部署提供了关键的评估工具和基准，揭示了当前模型在公平性、隐私保护（特别是副语言推断）和鲁棒性方面的普遍短板，为未来模型改进和安全对齐指明了方向。
主要局限性：1) 评估方法偏差：高度依赖LLM-as-Judge（GPT-4o, Qwen3）进行自动化评估，可能引入评估模型自身的偏见和不一致性。2) 分析深度有限：对于模型表现差异的归因（如开源模型为何在某些任务上表现差）多停留在现象描述，缺乏对模型架构、训练数据或对齐方法等根本原因的深入剖析。3) 场景覆盖：数据集虽力求真实，但仍无法穷尽所有音频交互风险，例如未涉及多语言公平性或特定方言的深入评估。

#

---

### 5. [STAR-Bench: Probing Deep Spatio-Temporal Reasoning as Audio 4D Intelligence](/audio-paper-digest-blog/posts/2026-05-04-star-bench-probing-deep-spatio-temporal-reasoning)

🔥 **8.0/10** | 前25% | #基准测试 | #音频大模型 | #空间音频 #3D音频

🔗 **开源详情**

- 代码：提供代码仓库链接 `https://github.com/InternLM/StarBench`。
- 模型权重：本文为评测基准，未提出新模型，故未提及模型权重。
- 数据集：基准数据集已发布在HuggingFace: `https://huggingface.co/datasets/internlm/STAR-Bench`。
- Demo：论文提供了项目主页 `https://internlm.github.io/StarBench`，但未明确说明是否提供在线交互式Demo。
- 复现材料：论文提供了详细的数据标注流程描述（附录B.3）、评估策略说明（附录C）、完整的实验结果分解（附录D）以及错误案例研究（附录F），这些为复现其评测过程和分析提供了良好材料。
- 论文中引用的开源项目：
    - 评测基准：MMAU, MMAR
    - 被评测模型：SALMONN, Qwen2-Audio, Audio Flamingo, Kimi-Audio, Step-Audio, MiDashengLM, Xiaomi-MiMo-Audio, BAT, Phi4-MM, Gemma-3n, Ming-Lite-Omni, Qwen-2.5-Omni, MiniCPM-O, GPT-4o, Gemini 2.5
    - 数据处理工具：Pyroomacoustics, DeepSeek-V3

📌 **核心摘要**

本文针对当前多模态/音频大语言模型评测基准普遍侧重于可通过文本描述恢复的粗粒度语义、而忽略需要深度物理推理的细粒度音频线索的问题，提出了“音频4D智能”的新范式——即对声音在时间和三维空间中动态变化进行推理的能力。为此，作者构建了STAR-Bench基准，包含“基础声学感知”和“整体时空推理”两大层级。前者使用合成音频定量评估音高、响度、时长、方位角、仰角和距离等六个核心属性的绝对感知范围和相对辨别敏感度；后者使用真实音频评估时序推理（连续过程和离散事件排序）和空间推理（静态定位、多源关系、动态轨迹）。数据制作采用了程序化合成与严格的人类标注、验证流程。对19个模型的评估表明，STAR-Bench极具挑战性，即使是领先的闭源模型（如Gemini 2.5 Pro）也远低于人类水平（例如在时序任务上人类准确率88.0% vs Gemini 58.52%）。研究发现，闭源模型的主要瓶颈在于细粒度感知，而开源模型则在感知、知识和推理能力上全面落后。本文为开发具备更健壮物理世界理解能力的未来模型提供了关键洞见和清晰路径。

---

### 6. [XModBench: Benchmarking Cross-Modal Capabilities and Consistency in Omni-Language Models](/audio-paper-digest-blog/posts/2026-05-04-xmodbench-benchmarking-cross-modal-capabilities)

✅ **7.5/10** | 前25% | #基准测试 | #多模态模型 | #跨模态 #音频问答

👥 **作者与机构**

- 第一作者：Xingrui Wang（Johns Hopkins University, Advanced Micro Devices）
- 通讯作者：Jiang Liu（Advanced Micro Devices）
- 作者列表：Xingrui Wang（Johns Hopkins University, Advanced Micro Devices）、Jiang Liu（Advanced Micro Devices）、Chao Huang（University of Rochester）、Xiaodong Yu（Advanced Micro Devices）、Ze Wang（Advanced Micro Devices）、Ximeng Sun（Advanced Micro Devices）、Jialian Wu（Advanced Micro Devices）、Alan Yuille（Johns Hopkins University）、Emad Barsoum（Advanced Micro Devices）、Zicheng Liu（Advanced Micro Devices）

💡 **毒舌点评**

亮点：论文的模态平衡设计非常巧妙，通过排列组合生成语义一致但模态配置不同的题目，能精确诊断出模型是真正理解了概念，还是仅记住了特定模态下的表面模式。短板：虽然诊断揭示了诸多问题，但论文对于“如何解决”这些问题，给出的模型开发启示（第5节）略显泛泛，更多是基于观测的推测，缺乏基于新基准的、可控的消融实验来验证其关于数据构成和训练策略的假设。

🔗 **开源详情**

- 代码：论文中提供了GitHub仓库链接：https://github.com/XingruiWang/XModBench，表明将开源评估工具。
- 模型权重：未提及。本文是基准论文，不发布自己的模型。
- 数据集：论文明确表示所有数据和评估工具将会开源（见摘要和结论）。
- Demo：未提及。
- 复现材料：论文提供了任务示例（图1, 3），并指出数据构建细节在附录G中。评估结果已完整报告。对于复现评估过程，需等待工具和数据开源。
- 论文中引用的开源项目：论文提到了使用的开源数据集和工具，如FireRedTTS（用于文本转语音），以及用于空间推理的STARSS23数据集。

📌 **核心摘要**

1.  问题：当前的全语言模型（OLLM）是否具备真正的跨模态不变推理能力，还是会表现出对特定输入模态的系统性偏差？现有基准大多忽略了对这种“跨模态一致性”的评估。
2.  方法核心：提出了XModBench，一个大规模的多选问答基准，专门用于评估跨模态一致性。其核心设计是模态平衡：每个问题实例都由对齐的文本-图像-音频三元组构成，并通过排列上下文与选项的模态，系统性地生成六种模态配置的变体。基准涵盖感知、空间推理、时间推理、语言理解和外部知识五大任务族，共计61,320个问题。
3.  创新点：(1) 首个系统性覆盖音频、视觉、文本三模态间所有六种问答方向，并专注评估跨模态一致性的基准；(2) 提出了模态差异和方向不平衡等诊断指标，用于量化模型对特定模态的依赖和不对称的跨模态对齐能力；(3) 对当前顶尖OLLMs进行了全面评估，揭示了它们在模态不变性上的普遍缺陷。
4.  主要实验结果：
    *   最强模型（Gemini 2.5 Pro）在空间和时间推理任务上表现不佳（<60%）。
    *   存在持久的模态差异：当相同语义内容通过音频而非文本传递时，性能显著下降（例如，在模态差异指标ΔT vs. A上达到-49）。
    *   表现出系统性的方向不平衡：当视觉作为上下文（V→T）时的表现通常优于文本作为上下文（T→V），表明模态间双向对齐不完整。
    *   整体排名：Gemini 2.5 Pro（平均70.6%）领先，开源模型中Qwen2.5-Omni（58.6%）和EchoInk-R1（59.2%）表现最好，但人类表现（平均91.5%）仍远高于所有模型。
5.  实际意义：XModBench为诊断和改进多模态模型的跨模态理解能力提供了一个关键工具。它揭示了当前模型在音频理解、空间/时间推理以及模态对称性方面的短板，为未来模型架构和训练策略的改进指明了方向。
6.  主要局限性：基准本身是评估工具，其结论揭示了问题但未提供解决方案。部分任务（如空间推理）依赖特定类型的数据（如全景视频、空间化音频），可能无法完全代表所有应用场景。实验分析中对于模型行为差异的归因（如训练数据构成）部分基于公开信息的推测，缺乏直接的控制变量实验证据。

---

### 7. [Seeing, Listening, Remembering, and Reasoning: A Multimodal Agent with Long-Term Memory](/audio-paper-digest-blog/posts/2026-05-04-seeing-listening-remembering-and-reasoning-a)

✅ **7.5/10** | 前25% | #基准测试 | #多模态模型 | #数据集 #长期记忆

👥 **作者与机构**

- 第一作者：Lin Long (浙江大学)、Yichen He (字节跳动 Seed) （论文明确标注“Equal contribution”，两位共同第一）
- 通讯作者：Yuan Lin (字节跳动 Seed) （论文明确标注“Corresponding author”）
- 作者列表：Lin Long (浙江大学)、Yichen He (字节跳动 Seed)、Wentao Ye (浙江大学)、Yiyuan Pan (卡内基梅隆大学机器人研究所)、Yuan Lin (字节跳动 Seed)、Hang Li (字节跳动 Seed)、Junbo Zhao (浙江大学)、Wei Li (字节跳动 Seed)

💡 **毒舌点评**

亮点：该工作不仅提出一个完整的智能体记忆框架，更重要的是贡献了高质量的、针对长期记忆推理能力评测的基准数据集（M3-Bench），填补了现有长视频QA在“高阶认知能力”评估上的空白。
短板：模型架构图展示了复杂的交互，但核心记忆机制（如实体中心图的更新与检索）的工程实现细节主要依赖附录中的工具描述，对于追求算法创新的研究者来说，其“新颖性”更多体现在系统设计而非一个可独立复用的核心模块。

🔗 **开源详情**

- 代码：论文提供了GitHub仓库链接：https://github.com/ByteDance-Seed/m3-agent ，承诺将公开代码。
- 模型权重：论文明确表示将提供记忆模型（memory-7b-sft）和控制模型（control-32b-rl）的检查点。
- 数据集：M3-Bench基准（包含视频和QA标注）将开源。训练用私有数据集未提及开源。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了极其详细的附录，包括：所有算法的伪代码（Algorithm 1, 2）、所有工具的具体实现说明（Appendix E）、合成数据的详细流程与提示模板（Appendix F）、强化学习的超参数（Appendix H）、以及评估用的提示（Appendix M）。这些材料对复现至关重要。
- 引用的开源项目/模型：InsightFace（面部识别）、Qwen系列模型（Qwen2.5-Omni, Qwen2.5-VL, Qwen3）、Gemini-1.5-Pro、GPT-4o、OpenAI text-embedding-3-large、ERes2NetV2（说话人验证）、DAPO/GRPO（强化学习算法）。

📌 **核心摘要**

1. 问题：现有长视频理解方法多关注有限长度视频的感知，而缺乏对在线、无限流式多模态输入的处理能力，也难以构建和利用类人的长期记忆来完成需要世界知识和跨模态推理的复杂任务。
2. 方法核心：提出M3-Agent框架，其包含并行工作的记忆化与控制两大过程。记忆化过程持续处理视频流，生成情景记忆和语义记忆，并构建实体中心的长期记忆图；控制过程则根据指令，通过强化学习训练的多轮推理自主检索并利用记忆完成任务。
3. 创新点：与已有方法相比，新在：(1) 模拟人类认知的双类型（情景/语义）记忆生成；(2) 以实体为中心组织记忆，保持身份一致性；(3) 通过强化学习训练多轮迭代检索与推理的控制策略。
4. 实验结果：论文提出了M3-Bench基准（含机器人视角和网络视频子集）。M3-Agent在M3-Bench-robot、M3-Bench-web和VideoMME-long上，分别以6.7%、7.7%和5.3%的准确率优势超过了最强基线（Gemini-GPT4o-Hybrid）。关键结果如下表：

| 方法 | M3-Bench-robot | M3-Bench-web | VideoMME-Long |
| :--- | :---: | :---: | :---: |
| Gemini-GPT4o-Hybrid (最强基线) | 24.0 | 41.2 | 56.5 |
| M3-Agent | 30.7 | 48.9 | 61.8 |

5. 实际意义：推动多模态智能体向具备长期记忆和推理能力的“类人”智能体发展，为家庭机器人、助手等实际应用场景提供了基础框架和评估标准。
6. 主要局限性：记忆生成的质量依赖于底层多模态模型；训练数据为私有数据集；实验场景虽多样，但仍未完全覆盖所有真实世界复杂交互；强化学习训练成本较高。

---

### 8. [Human Behavior Atlas: Benchmarking Unified Psychological And Social Behavior Understanding](/audio-paper-digest-blog/posts/2026-05-04-human-behavior-atlas-benchmarking-unified)

✅ **7.5/10** | 前10% | #基准测试 | #多任务学习 | #多模态模型 #强化学习

👥 **作者与机构**

- 第一作者：Keane Ong（MIT; National University of Singapore）
- 通讯作者：Paul Pu Liang（MIT）
- 作者列表：Keane Ong（MIT; NUS）、Wei Dai（MIT）、Carol Li（MIT）、Dewei Feng（MIT）、Hengzhi Li（MIT; Imperial College London）、Jingyao Wu（MIT）、Jiaee Cheong（Harvard University）、Rui Mao（Nanyang Technological University）、Gianmarco Mengaldo（National University of Singapore）、Erik Cambria（Nanyang Technological University）、Paul Pu Liang（MIT）

💡 **毒舌点评**

亮点：在行为理解领域“各自为政”的现状下，论文做了一件极具价值的“基建”工作——将分散的情感、认知、病理、社交任务及其数据集用一套标准（prompt-target格式、统一评估指标）缝合成一个宏大的统一基准，并证明了在其上训练的模型能获得显著的泛化能力提升。
短板：论文的核心贡献更偏向于“工程化”的基准构建与模型验证，而非提出颠覆性的新算法。BAM模块作为关键创新点，其设计相对简单（一个残差连接的前馈网络），且在开放生成任务上表现不佳，其普适性和深度值得进一步探讨。

🔗 **开源详情**

- 代码：论文中提供了GitHub仓库链接：https://github.com/MIT-MI/human_behavior_atlas。
- 模型权重：论文提到将开源三个OMNISAPIENS-7B模型变体的权重。
- 数据集：Human Behavior Atlas基准将开源，基于13个公开数据集构建。
- Demo：论文中未提及在线演示。
- 复现材料：论文附录（A-E）提供了极其详尽的数据集说明、训练/验证/测试集划分、评估指标公式、LLM评判提示、模型架构细节、所有实验的超参数设置（学习率、批次大小、训练轮数、硬件配置等）。
- 引用的开源项目：主要依赖Qwen2.5-Omni-7B作为骨干模型，并使用了MediaPipe、OpenSMILE、Whisper等工具进行特征提取。

📌 **核心摘要**

1.  要解决什么问题：现有的心理和社会行为理解研究局限于特定任务和专用数据集，导致模型缺乏通用性，无法实现跨任务的知识迁移和统一建模，且评估标准不一。
2.  方法核心是什么：构建了“Human Behavior Atlas”，一个统一的大规模多模态基准。它将13个公开数据集（涵盖情感、认知、病理、社会过程4大维度，10个子任务）重新组织为标准化的prompt-target格式，并统一了评估指标。基于此基准，训练了三个模型变体：SFT（监督微调）、BAM（通过行为描述符适配器增强）、RL（强化学习）。
3.  与已有方法相比新在哪里：1) 统一性：首次将如此广泛异构的行为任务与数据集整合到一个框架下。2) 标准化：统一了模型输入输出格式和评估标准，为开发基础行为模型奠定了基础。3) 行为描述符增强：提出BAM模块，探索性地将结构化的行为特征（面部关键点、声学特征）以插件方式融入大模型，补充原始模态信息。
4.  主要实验结果：在多任务训练中，三个OMNISAPIENS-7B变体在10个任务中的7-8个上超越了Qwen2.5-Omni-7B等基线。例如，在抑郁检测（DAIC-WOZ）上，SFT模型加权F1达到1.00（vs. 基线0.256）。迁移学习实验证明，预先在Atlas上训练能显著提升对新数据集的适应能力，例如在讽刺检测（MUStARD）上，零样本性能提升33.9%。BAM在非语言沟通（NVC）等任务上带来最高33%的性能增益。
5.  实际意义：为构建能够理解人类复杂、多维行为的通用AI系统提供了关键的数据基础和评估平台，有望加速心理健康监测、人机交互、社交智能等应用的发展。
6.  主要局限性：1) 基准中部分数据集（如DAIC-WOZ, MUStARD）规模较小，可能影响模型在该特定任务上的泛化性结论。2) BAM的益处不均衡，在开放生成任务（SOC, INT）上反而导致性能下降。3) 模型对行为的理解深度尚未被充分挖掘（例如，是否真正理解了病理背后的认知过程）。

---

### 9. [MMSU: A Massive Multi-task Spoken Language Understanding and Reasoning Benchmark](/audio-paper-digest-blog/posts/2026-05-04-mmsu-a-massive-multi-task-spoken-language)

✅ **7.0/10** | 前25% | #基准测试 | #模型评估 | #语音大模型 #多任务学习

👥 **作者与机构**

- 第一作者：Dingdong Wang (中国香港中文大学)
- 通讯作者：Dingdong Wang (中国香港中文大学)
- 作者列表：Dingdong Wang (中国香港中文大学), Junan Li (中国香港中文大学), Jincenzi Wu (中国香港中文大学), Dongchao Yang (中国香港中文大学), Xueyuan Chen (中国香港中文大学), Tianhua Zhang (中国香港中文大学), Helen M. Meng (中国香港中文大学)

#

💡 **毒舌点评**

亮点：MMSU系统性地将语言学理论引入语音大模型评测，构建了涵盖47个任务、覆盖语音学、韵律学、修辞学等多个维度的庞大评测集，直指当前模型在细粒度声学感知和复杂推理上的软肋，为社区提供了一个更贴近真实交流复杂性的“试金石”。短板：作为一篇基准测试论文，其核心贡献在于“评测”而非“建模”；5000个样本的规模在当今海量数据时代略显不足，且部分任务（如对联匹配）对模型的要求可能超出了通用语音理解的范畴，略显小众。

#

🔗 **开源详情**

- 代码：论文中未提及评测代码或相关工具的仓库链接。
- 模型权重：论文评估了多个现有模型，但未提供其自身模型的权重（因为本身是基准）。
- 数据集：已公开。论文提供了MMSU数据集的HuggingFace主页链接：https://huggingface.co/datasets/ddwang2000/MMSU。
- Demo：论文中未提及在线演示。
- 复现材料：论文在附录中提供了任务定义、示例、数据来源、错误分析定义等详细信息，有助于理解评测设计。但未给出运行完整评测的详细配置（如具体的推理代码、脚本、环境依赖）。
- 论文中引用的开源项目：论文引用了大量用于构建数据集的开源音频数据集（如CommonVoice, GigaSpeech, MELD等）以及被评估的开源模型（如Qwen-Audio, Kimi-Audio等）。

📌 **核心摘要**

1.  要解决什么问题：现有针对语音大模型（SpeechLLMs）的基准测试（如VoiceBench， ADU-Bench）普遍存在三大局限：忽略日常语音中的关键现象（如口吃、讽刺、重音变化）、过度依赖合成语音而缺乏真实性、以及缺乏基于语言学理论的系统性评测设计。
2.  方法核心是什么：提出MMSU（Massive Multi-task Spoken Language Understanding and Reasoning Benchmark），一个系统性整合语言学理论（涵盖音系学、韵律学、修辞学、句法学、语义学和副语言学）的评测框架。包含5000个精心标注的音频-问答三元组，分为感知（24个任务）和推理（23个任务）两大类，共47个具体任务。
3.  与已有方法相比新在哪里：MMSU是首个将语言学理论系统性地融入任务设计的语音理解基准；它覆盖了最广泛的细微声学特征（如非言语声音、口音、停顿、语调、延长音）；它使用了以真实录音为主（76.74%）的高质量音频数据，并经过专家多轮审核。
4.  主要实验结果如何：对22个前沿模型（包括12个SpeechLLMs和10个OmniLLMs）进行评估。最强模型Gemini-1.5-Pro的平均准确率仅为60.68%，远低于人类表现（89.72%），表明现有模型在全面理解语音方面仍有巨大差距。模型在音系学相关的感知任务上表现尤其薄弱（最佳模型仅53.60%）。开源模型（如Qwen2.5-Omni-7B， 60.57%）表现与顶级闭源模型接近。
    | 模型 | 平均准确率 (%) |
    | :--- | :--- |
    | Human | 89.72 |
    | Gemini-1.5-Pro | 60.68 |
    | Qwen2.5-Omni-7B | 60.57 |
    | Kimi-Audio | 59.28 |
    | MiniCPM-O | 56.53 |
    | GPT-4o-Audio | 56.38 |
5.  实际意义是什么：MMSU为评估语音大模型提供了更全面、更严格的标尺，揭示了当前模型在细粒度声学感知、多维度推理等方面的共同短板，为未来模型改进和更拟人化的人机语音交互系统开发提供了明确的研究方向。
6.  主要局限性是什么：论文中未明确提及。可能的局限包括：总数据量（5000样本）相对有限；部分自定义录制或合成的数据（共约23%）可能无法完全代表所有真实场景；任务设计虽系统，但部分任务（如对联匹配）的普适性值得商榷。

#

---

### 10. [EchoMind: An Interrelated Multi-level Benchmark for Evaluating Empathetic Speech Language Models](/audio-paper-digest-blog/posts/2026-05-04-echomind-an-interrelated-multi-level-benchmark)

✅ **6.5/10** | 前50% | #基准测试 | #模型评估 | #语音对话系统

👥 **作者与机构**

- 第一作者：Li Zhou（香港中文大学（深圳））
- 通讯作者：Benyou Wang（香港中文大学（深圳）、深圳大数据研究院、深圳环域研究院），Haizhou Li（香港中文大学（深圳）、深圳大数据研究院、深圳环域研究院）
- 作者列表：Li Zhou（香港中文大学（深圳）），Lutong Yu（香港中文大学（深圳）），You Lyu（香港中文大学（深圳）），Yihang Lin（香港中文大学（深圳）），Zefeng Zhao（香港中文大学（深圳）），Junyi Ao（香港中文大学（深圳）），Yuhao Zhang（香港中文大学（深圳）），Benyou Wang（香港中文大学（深圳）、深圳大数据研究院、深圳环域研究院），Haizhou Li（香港中文大学（深圳）、深圳大数据研究院、深圳环域研究院）

💡 **毒舌点评**

这篇论文精准地抓住了当前语音大模型（SLM）评估的一个关键盲区——共情能力，而非孤立的识别或生成任务，并提出了一个逻辑严密的“理解-推理-对话”评估框架，实验设计严谨（如控制语义中立脚本、合成-人声对比）。但其核心贡献是“评测集”而非“新模型”，且实验结论（现有模型远未及格）虽真实却略显沮丧，实际推动模型进步的直接抓手有限。

🔗 **开源详情**

- 代码：论文明确表示将提供代码以复现基准结果。项目网站：https://hlt-cuhksz.github.io/EchoMind/
- 模型权重：论文中评测了多个开源模型，但本研究本身未提出新模型，因此未提供新的模型权重。
- 数据集：EchoMind基准数据集（包括TTS和人声版本）承诺将发布。论文中提到了数据集的详细构建过程。
- Demo：论文中未提及在线演示链接。
- 复现材料：论文承诺提供数据、代码和实验配置。详细的附录（A-C）提供了数据统计、示例、MCQ构造细节和评估指标说明，为复现提供了充分信息。
- 论文中引用的开源项目/模型：
    - 文本生成与评估：GPT-4o， GPT-4o-mini-TTS， Gemini-2.5-Pro。
    - 语音合成：Doubao TTS API， Doubao Conversational Agent。
    - 语音与音频模型：Qwen3-Embedding-0.6B（用于计算语义相似度）， emotion2vec（用于情绪识别）， NISQA， UTMOS（用于音频质量评估）。
    - 被评测的开源SLM：Audio Flamingo 3， DeSTA2.5-Audio， VITA-Audio， LLaMA-Omni2， Baichuan-Omni-1.5， GLM-4-Voice， OpenS2S， Qwen2.5-Omni-7B， Kimi-Audio， Step-Audio， EchoX。
    - 数据来源：AudioCaps（用于环境背景音）。

📌 **核心摘要**

1.  问题：现有语音大模型（SLM）基准测试通常孤立评估语言理解、声学识别或对话生成，无法综合评估模型在对话中整合语言内容与非词汇声音线索（如语气、情绪、生理信号）以产生共情回应的能力。
2.  方法：提出EchoMind，一个首个关联的多层级基准，模拟人类共情对话的认知过程。它包含三个顺序且相互关联的任务层级：1）理解（内容与声音感知）；2）推理（整合内容与声音进行推理）；3）对话（生成上下文和情感适配的回应）。所有任务共享相同语义中立的脚本，并通过受控的语音风格变化来隔离“表达方式”的影响。
3.  新意：与以往基准不同，EchoMind是首个专注于共情能力且任务间相互关联的语音基准。它构建了一个覆盖3个粗粒度维度、12个细粒度维度、39个具体语音属性的共情评估框架，并设计了共享输入以支持跨层级依赖性分析。
4.  结果：对12个先进SLM的测试表明，即使是顶尖模型在处理高表达性声音线索时也表现挣扎。在对话任务中，没有模型在“语音信息相关性”（CSpeechRel）上的平均分超过4分（5分制），而“人声共鸣分数”（VES）最高仅为3.34。分析揭示了模型在指令遵循、应对自然语音变化及有效利用声音线索方面的普遍弱点。关键结果如下表所示（部分模型无音频生成能力）：

| 模型 | 理解ACC↑ | 推理ACC↑ | 对话-VES↑ | 对话-CSpeechRel↑ |
| :--- | :---: | :---: | :---: | :---: |
| GPT-4o-Audio | 66.25 | 68.04 | 3.34 | 3.42 |
| Qwen2.5-Omni-7B | 60.87 | 57.70 | 3.24 | 2.92 |
| Step-Audio | 40.74 | 45.90 | 3.20 | 3.09 |
| DeSTA2.5-Audio | 56.68 | 63.04 | – | 3.36 |
| Audio-Flamingo3 | 64.29 | 58.80 | – | 1.97 |

5.  意义：为评估和推动SLM的共情能力提供了首个专门且系统的工具，明确了当前模型的主要缺陷，指明了未来需要结合语言与多样声音线索的研究方向。
6.  局限性：基准主要基于TTS合成语音，可能无法完全反映真实人类语音的复杂性（尽管提供了人声版本用于对比）；评估指标（尤其是VES）依赖模型判断，存在主观性；框架虽提出，但模型的“共情能力”仍有待更本质的提升。

---

