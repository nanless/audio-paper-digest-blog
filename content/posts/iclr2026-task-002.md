---
title: "ICLR 2026 - 基准测试 论文列表"
date: 2026-05-04
draft: false
tags: ["基准测试"]
categories: [iclr-2026]
description: "共 9 篇 ICLR 2026 基准测试 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 基准测试

共 **9** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [OmniVideoBench: Towards Audio-Visual Understanding Evaluatio](/audio-paper-digest-blog/posts/2026-05-04-omnivideobench-towards-audio-visual-understanding) | 8.5分 | 前25% |
| 🥈 | [MCIF: Multimodal Crosslingual Instruction-Following Benchmar](/audio-paper-digest-blog/posts/2026-05-04-mcif-multimodal-crosslingual-instruction) | 8.5分 | 前25% |
| 🥉 | [WearVox: An Egocentric Multichannel Voice Assistant Benchmar](/audio-paper-digest-blog/posts/2026-05-04-wearvox-an-egocentric-multichannel-voice) | 8.0分 | 前25% |
| 4. | [AudioTrust: Benchmarking The Multifaceted Trustworthiness of](/audio-paper-digest-blog/posts/2026-05-04-audiotrust-benchmarking-the-multifaceted) | 7.5分 | 前25% |
| 5. | [XModBench: Benchmarking Cross-Modal Capabilities and Consist](/audio-paper-digest-blog/posts/2026-05-04-xmodbench-benchmarking-cross-modal-capabilities) | 7.5分 | 前25% |
| 6. | [MMSU: A Massive Multi-task Spoken Language Understanding and](/audio-paper-digest-blog/posts/2026-05-04-mmsu-a-massive-multi-task-spoken-language) | 7.5分 | 前50% |
| 7. | [VideoMathQA: Benchmarking Mathematical Reasoning via Multimo](/audio-paper-digest-blog/posts/2026-05-04-videomathqa-benchmarking-mathematical-reasoning) | 7.0分 | 前25% |
| 8. | [EchoMind: An Interrelated Multi-level Benchmark for Evaluati](/audio-paper-digest-blog/posts/2026-05-04-echomind-an-interrelated-multi-level-benchmark) | 7.0分 | 前25% |
| 9. | [STAR-Bench: Probing Deep Spatio-Temporal Reasoning as Audio ](/audio-paper-digest-blog/posts/2026-05-04-star-bench-probing-deep-spatio-temporal-reasoning) | 6.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [OmniVideoBench: Towards Audio-Visual Understanding Evaluation for Omni MLLMs](/audio-paper-digest-blog/posts/2026-05-04-omnivideobench-towards-audio-visual-understanding)

🔥 **8.5/10** | 前25% | #基准测试 | #多模态模型 | #跨模态 #模型评估

👥 **作者与机构**

- 第一作者：Caorui Li（东南大学、南京大学）
- 通讯作者：Jiaheng Liu（南京大学）
- 作者列表：Caorui Li（东南大学、南京大学）、Yu Chen（东南大学、南京大学）、Yiyan Ji（南京大学）、Jin Xu（阿里巴巴集团）、Zhenyu Cui（东南大学）、Shihao Li（南京大学）、Yuanxing Zhang（快手科技）、Zhenghao Song（M-A-P）、Dingling Zhang（南京大学）、Ying He（北京科技大学）、Haoxiang Liu（北京科技大学）、Yuxuan Wang（阿里巴巴集团）、Qiufeng Wang（东南大学）、Jiafu Tang（南京大学）、Zhenhe Wu（M-A-P）、Jiehui Luo（中央音乐学院）、Zhiyu Pan（南京大学）、Weihao Xie（华中科技大学）、Chenchen Zhang（M-A-P）、Zhaohui Wang（南京大学）、Jiayi Tian（阿里巴巴集团）、Yanghai Wang（南京大学）、Zhe Cao（南京大学）、Minxin Dai（南京大学）、Ke Wang（M-A-P）、Runzhe Wen（南京大学）、Yinghao Ma（伦敦玛丽女王大学）、Yaning Pan（复旦大学）、Sungkyun Chang（伦敦玛丽女王大学）、Termeh Taheri（伦敦玛丽女王大学）、Haiwen Xia（北京大学）、Christos Plachouras（伦敦玛丽女王大学）、Emmanouil Benetos（伦敦玛丽女王大学）、Yizhi Li（曼彻斯特大学）、Ge Zhang（M-A-P）、Jian Yang（M-A-P）、Tianhao Peng（M-A-P）、Zili Wang（M-A-P）、Minghao Liu（2077AI）、Junran Peng（北京科技大学）、Zhaoxiang Zhang（中国科学院）、Jiaheng Liu（南京大学）

💡 **毒舌点评**

该工作系统性地定义了评估全模态大语言模型音频-视觉协同推理能力的难题，并通过一套严谨的“人-模型”协作流程构建了一个高质量的评测集，其发现揭示了当前模型在“真正理解”音视频内容上的巨大鸿沟。然而，其核心贡献是一个评测基准（Benchmark）而非一个解决该难题的新模型，且目前数据集尚未完全公开，这限制了其即时影响力。

🔗 **开源详情**

- 代码：论文中提到将发布评估代码，提供了GitHub链接（https://github.com/NJU-LINK/OmniVideoBench），但未说明当前是否已开源。
- 模型权重：未提及。本文档为评测基准，不涉及新模型训练。
- 数据集：论文承诺将发布OmniVideoBench数据集（包含视频和标注），但未提及具体的发布平台或时间。论文中引用了数据集链接。
- Demo：未提及。
- 复现材料：提供了极其详细的数据集构建流程（附录B）、任务定义、评估提示词（附录C）和统计信息，复现基础扎实。
- 论文中引用的开源项目：在数据集构建和评估中引用了Gemini 2.0 Flash、DeepSeek-V3.1、Voxtral-Mini-3B（用于ASR）等模型。

📌 **核心摘要**

1.  要解决什么问题：现有的多模态大语言模型基准测试无法全面评估模型在音频和视觉模态上的协同推理能力，往往忽视其中一个模态，或将两个模态以逻辑不一致的方式简单结合。
2.  方法核心是什么：提出OmniVideoBench，一个大规模、精心设计的评测基准。核心方法包括：从YouTube和Bilibili收集628个多样化视频；设计严格的数据收集原则确保模态互补性；通过“人工标注-模型过滤-人工精修”的流程构建1000个高质量问答对，每个问答对附带明确的、标注了模态和证据的逐步推理链；定义13种任务类型覆盖核心视频理解挑战。
3.  与已有方法相比新在哪里：与现有基准相比，OmniVideoBench强调模态互补性和推理逻辑一致性，覆盖长视频（最长达30分钟）、多种真实世界视频类型和音频类型（语音、声音、音乐），并为每个问题提供可追溯的原子级推理步骤，更侧重于评估真正的跨模态协同推理能力，而非单一模态感知或短时理解。
4.  主要实验结果如何：评估了多种闭源和开源模型。结果显示，当前最佳模型（Gemini-2.5-Pro）准确率仅为58.90%，远低于人类表现（82.69%），表明模型在音频-视觉协同推理上存在显著差距。开源模型表现更差，接近随机猜测水平。模型在音乐理解任务上表现尤其不佳（如Gemini-2.5-Pro在音乐视频上准确率为38.46%）。详细结果见下表：

| 模型 | 音乐 | 声音 | 语音 | (0,1]分钟 | (1,5]分钟 | (5,10]分钟 | (10,30]分钟 | 平均 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Gemini-2.5-Pro | 38.46 | 57.72 | 61.66 | 57.83 | 64.43 | 55.02 | 55.94 | 58.90 |
| Gemini-2.0-Flash | 29.67 | 40.27 | 43.21 | 49.40 | 43.15 | 41.05 | 34.87 | 41.50 |
| Qwen3-Omni-30B-A3B | 37.36 | 34.67 | 39.26 | 45.78 | 37.03 | 38.86 | 35.11 | 38.40 |
| Qwen2.5-Omni-7B | 23.07 | 25.33 | 30.70 | 41.57 | 27.41 | 25.33 | 26.72 | 29.30 |

5.  实际意义是什么：该基准测试揭示了当前多模态大语言模型在音频-视觉协同推理方面的严重不足，特别是在处理音乐等非语音音频、长视频以及需要复杂跨模态整合的任务时，为未来研究指明了关键改进方向。
6.  主要局限性是什么：基准测试本身规模（1000个问答对）相对于海量视频数据仍然有限；部分视频分辨率和帧率被限制在较低水平（480p）；评测主要基于多选题形式，可能无法完全反映模型的开放式生成能力；目前代码和数据集尚未完全开源。

---

### 🥈 [MCIF: Multimodal Crosslingual Instruction-Following Benchmark from Scientific Talks](/audio-paper-digest-blog/posts/2026-05-04-mcif-multimodal-crosslingual-instruction)

🔥 **8.5/10** | 前25% | #基准测试 | #多模态模型 | #多语言 #大语言模型

👥 **作者与机构**

- 第一作者：Sara Papi（Fondazione Bruno Kessler (Italy)）
- 通讯作者：未说明（论文未明确指定通讯作者）
- 作者列表：Sara Papi (Fondazione Bruno Kessler)， Maike Züfle (Karlsruhe Institute of Technology)， Marco Gaido (Fondazione Bruno Kessler)， Beatrice Savoldi (Fondazione Bruno Kessler)， Danni Liu (Karlsruhe Institute of Technology)， Ioannis Douros (Fondazione Bruno Kessler)， Luisa Bentivogli (Fondazione Bruno Kessler)， Jan Niehues (Karlsruhe Institute of Technology)

💡 **毒舌点评**

亮点：论文填补了多模态、跨语言、长上下文指令跟随评测的关键空白，创建了一个系统对齐、人工标注的高质量基准，对推动通用多模态大模型发展有明确价值。  
短板：论文的核心贡献是建立评测基准，而非提出新的建模方法，对现有模型“能力不足”的诊断虽清晰，但并未直接提供解决方案；评测模型均为已发表的开源或商用模型，缺乏对自身新方法的验证。

🔗 **开源详情**

*   代码：提供。论文明确给出了两个代码仓库：
    *   评估与推理代码：`github.com/hlt-mt/mcif`（Apache 2.0许可）。
    *   数据构建与标注指南：`https://github.com/hlt-mt/mcif/tree/main/dataset_build/annotation_guidelines`。
*   模型权重：部分提供。论文中评测的开源模型权重均通过HuggingFace链接公开。论文本身未提出新的模型权重。
*   数据集：公开。MCIF数据集在HuggingFace以CC-BY 4.0许可发布：`hf.co/datasets/FBK-MT/MCIF`。模型在测试集上的输出也以相同许可发布。
*   Demo：未提及。
*   复现材料：提供了完整的训练/推理细节（附录D）、超参数、提示词库（附录C）、标注指南和评估脚本，复现材料极其充分。
*   论文中引用的开源项目：依赖并提及了HuggingFace Transformers库用于模型推理，以及SHAS工具用于音频分段。

📌 **核心摘要**

这篇论文旨在解决当前多模态大语言模型评测基准在跨语言、多模态联合处理及长上下文理解方面存在的覆盖不足、缺乏人工标注、评测维度单一等问题。方法核心是提出了MCIF（Multimodal Crosslingual Instruction Following） 基准，该基准基于科学演讲视频，平行覆盖三种模态（语音、视频、文本）、四种语言（英语、德语、意大利语、中文） 和13个任务（分为识别、翻译、问答、摘要四大类），并提供了短上下文和长上下文两种版本。与已有基准相比，MCIF的独特之处在于其完全平行的跨维度设计，允许系统评估模型在不同语言、模态和任务复杂度下遵循指令的能力。论文对23个模型（包括LLM、SpeechLLM、VideoLLM和MLLM）进行了基准测试。主要结果显示：摘要任务最具挑战性（部分模型得分甚至低于随机基线）；当前MLLMs难以有效融合语音和视频模态，联合处理常无增益甚至有害；长上下文处理是普遍弱点，多数模型性能显著下降；以及模型对提示词的微小变化敏感性高。该基准的发布旨在为评估和改进跨语言多模态指令跟随系统提供一个全面框架。主要局限性在于，它本身是一个评测基准，而非一个能直接提升模型性能的新方法，其发现揭示了当前模型的普遍短板。

---

### 🥉 [WearVox: An Egocentric Multichannel Voice Assistant Benchmark for Wearables](/audio-paper-digest-blog/posts/2026-05-04-wearvox-an-egocentric-multichannel-voice)

🔥 **8.0/10** | 前25% | #基准测试 | #麦克风阵列 | #多通道 #语音大模型

👥 **作者与机构**

- 第一作者：Zhaojiang Lin（Meta），Yong Xu（Meta），Kai Sun（Meta）（论文明确标注三位为共同第一作者：Joint first author）
- 通讯作者：未明确说明（但Zhaojiang Lin提供了联系邮箱zhaojiang@meta.com）
- 作者列表：Zhaojiang Lin（Meta），Yong Xu（Meta），Kai Sun（Meta），Jing Zheng（Meta），Yin Huang（Meta），Surya Teja Appini（Meta），Krish Narang（Meta），Renjie Tao（Meta），Ishan Kapil Jain（Meta），Siddhant Arora（Carnegie Mellon University，标注工作在Meta完成），Ruizhi Li（Meta），Yiteng Huang（Meta），Kaushik Patnaik（Meta），Wenfang Xu（Meta），Suwon Shon（Meta），Yue Liu（Meta），Ahmed A Aly（Meta），Anuj Kumar（Meta），Florian Metze（Meta），Xin Luna Dong（Meta）

💡 **毒舌点评**

亮点在于首次针对可穿戴场景定义了多通道、自我中心语音助手评测标准，数据基于真实AI眼镜采集，任务设计紧贴现实痛点（如侧向对话拒绝）。短板是数据集规模相对有限（3.8k样本），且评估的大部分现有SLLM只能基于波束成形后的单通道音频输入，未能充分验证多通道架构的潜力，论文中提出的MC WearLlama也仅是案例研究，非核心贡献。

🔗 **开源详情**

- 代码：提供数据集代码仓库链接：`https://github.com/facebookresearch/wearvox`。
- 模型权重：未提及公开任何模型权重（包括论文中评估的商业模型和案例研究的WearLlama模型）。
- 数据集：WearVox数据集通过上述GitHub仓库公开。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了详细的基准任务提示（附录A.1）、LLM评判提示（附录A.2）、数据采集细节（附录A.3）和分布统计（附录A.4），但未提供完整的训练细节、配置、检查点或超参数设置。
- 论文中引用的开源项目：论文中引用的开源模型/框架包括：Whisper ASR、Llama 3.3 70B（用作LLM评判）、Llama-4-Scout、Conformer、BEST-RQ、AudioChatLlama、SeamlessM4T。

📌 **核心摘要**

这篇论文旨在解决现有语音助手评测基准忽略可穿戴设备特有挑战（如自我中心音频、运动噪声、区分设备指令与背景对话）的问题。核心方法是提出了WearVox，首个专门针对可穿戴场景的基准数据集，包含3,842条通过AI眼镜采集的多通道自我中心音频录音，涵盖五类任务（搜索问答、闭卷问答、工具调用、侧向对话拒绝、双向语音翻译）及多样化室内外声学环境。与已有基准相比，WearVox首次引入了多通道音频、丰富的说话人角色（佩戴者、对话伙伴、旁观者）和真实世界噪声环境。实验评估了多个先进的语音大语言模型，发现当前最先进模型在嘈杂户外环境性能显著下降，准确率在29%至59%之间。一个案例研究表明，基于多通道输入的SLLM（MC WearLlama）相比单通道版本，在抗噪声和区分设备指令方面表现出显著优势，侧向对话拒绝准确率从85.6%提升至93.9%。该工作填补了可穿戴语音AI评测的空白，揭示了空间音频线索对上下文感知助手的重要性。主要局限在于数据集规模仍属中等，且提出的多通道模型仅为案例研究，未成为可直接复用的开源SOTA模型。

---

### 4. [AudioTrust: Benchmarking The Multifaceted Trustworthiness of Audio Large Language Models](/audio-paper-digest-blog/posts/2026-05-04-audiotrust-benchmarking-the-multifaceted)

✅ **7.5/10** | 前25% | #基准测试 | #基准测试 | #模型评估 #音频大模型

👥 **作者与机构**

- 第一作者：Kai Li（论文中标注为共同第一作者，其机构为清华大学计算机系）
- 通讯作者：Xinfeng Li（论文中标注为†，其机构为南洋理工大学）
- 作者列表：
  - Kai Li（清华大学计算机系， Institute for AI, BNRist）
  - Can Shen（北京师范大学-香港浸会大学联合国际学院，BNBU）
  - Yile Liu（早稻田大学，Waseda University）
  - Jirui Han（独立研究者）
  - Kelong Zheng（华中科技大学，HUST）
  - Xuechao Zou（北京交通大学，BJTU）
  - Lionel Z. Wang（未说明具体机构，作者列表归属南洋理工大学）
  - Shun Zhang（清华大学）
  - Xingjian Du（罗切斯特大学）
  - Hanjun Luo（浙江大学）
  - Yingbin Jin（香港理工大学）
  - Xinxin Xing（独立研究者）
  - Ziyang Ma（上海交通大学，及12号单位）
  - Yue Liu（新加坡国立大学）
  - Yifan Zhang（中国科学院，CAS）
  - Junfeng Fang（新加坡国立大学）
  - Kun Wang（南洋理工大学）
  - Yibo Yan（香港科技大学（广州））
  - Gelei Deng（南洋理工大学）
  - Haoyang Li（香港理工大学）
  - Yiming Li（南洋理工大学）
  - Xiaobin Zhuang（字节跳动）
  - Tianlong Chen（北卡罗来纳大学教堂山分校）
  - Qingsong Wen（松鼠AI学习）
  - Tianwei Zhang（南洋理工大学）
  - Yang Liu（南洋理工大学）
  - Haibo Hu（香港理工大学）
  - Zhizheng Wu（香港中文大学（深圳））
  - Xiaolin Hu（清华大学计算机系， Institute for AI, BNRist）
  - Eng-Siong Chng（南洋理工大学）
  - Wenyuan Xu（浙江大学）
  - XiaoFeng Wang（南洋理工大学）
  - Wei Dong（南洋理工大学）
  - Xinfeng Li（南洋理工大学）

💡 **毒舌点评**

本文最大的亮点在于其雄心和系统性：它是第一个为ALLM量身定做可信度评估框架的工作，直指音频模态引入的“非语义”攻击面，如情绪操纵、口音偏见和环境声伪造，这比单纯评估文本安全要深刻得多。然而，其短板也相当明显：作为一个“评估”工作，它严重依赖GPT-4o和Qwen3作为评估器，这本质上是用一个黑箱模型去评判另一个黑箱模型的可信度，其评估结果本身的“可信度”值得打个问号；此外，部分实验（如隐私推断）的自动化评估结果与常识或直觉可能存在偏差（如论文所示，所有模型在隐私推断上几乎全部失败），需要更深入的人类评估来验证。

🔗 **开源详情**

- 代码：论文提供了公开的GitHub仓库链接（https://github.com/JusperLee/AudioTrust），包含评估框架代码、自动化脚本和排行榜生成代码。
- 模型权重：未提及公开被评估的14个ALLMs的模型权重。
- 数据集：论文声明数据集公开，但具体获取方式需参考其GitHub仓库。
- Demo：未提及在线演示。
- 复现材料：提供了极其详尽的附录（占全文大部分篇幅），完整说明了每个评估维度的数据分类标准、构建方法、实验设计、评估指标和具体结果，复现材料非常充分。
- 论文中引用的开源项目/工具：F5-TTS（用于语音合成）、Common Voice（数据集）、Freesound（数据集）、GPT-4o和Qwen3（作为评估器）。

📌 **核心摘要**

1. 要解决什么问题：随着音频大语言模型（ALLMs）的快速发展，亟需一个系统性的评估框架来量化其在真实世界高风险场景下的可信度风险，但现有评估主要针对文本模态，忽略了音频特有属性（如声学线索、情感、环境声）引入的独特脆弱性。
2. 方法核心是什么：本文提出了AudioTrust，首个全面评估ALLMs可信度的基准测试框架。该框架涵盖六个核心维度：公平性、幻觉、安全性、隐私、鲁棒性和认证。它构建了一个包含4420多个真实场景音频样本的数据集，并设计了26个具体子任务，结合自动化评估流水线（由GPT-4o和Qwen3驱动）和人工验证，对14个先进的开源和闭源ALLMs进行大规模评估。
3. 与已有方法相比新在哪里：1) 首次将评估焦点专门对准ALLMs；2) 明确定义了音频模态特有的可信度风险（如基于音色/口音的公平性风险、基于环境声的隐私泄露、基于语音克隆的认证攻击）；3) 构建了首个大规模、多维度、涵盖真实场景的ALLM可信度评估数据集和任务集；4) 提出了针对音频特性的专用评估指标（如Group Fairness Score Γ， Imposter Rejection Rate IRR）。
4. 主要实验结果如何：
   - 总体发现：所有评估的ALLMs在面对音频特有的高风险场景时，均表现出显著的局限性和安全边界。
   - 公平性：模型在基于声音特征的决策中存在严重偏见，闭源模型（如GPT-4o）在决策公平性上表现更稳定，但开源模型（如Step-Fun）在某些任务上能接近闭源模型水平。平均Group Fairness Score Γ仅约0.3。
   - 幻觉：模型对违反物理规律（如水下燃烧）的检测较好，但对跨模态语义矛盾（如音频内容与描述文本矛盾）的检测普遍较弱。闭源模型（如Gemini系列）整体表现优于多数开源模型。
   - 安全性：利用情感语音的“情绪欺骗”攻击对许多模型有效。闭源模型整体防御能力更强（如GPT-4o Audio在多数任务上DSR > 99%），但开源模型（如Kimi-Audio）也能达到接近水平，而OpenS2S等模型则非常脆弱。
   - 隐私：模型在直接内容泄露上通过提示工程可以较好防御（如GPT-4o mini Audio拒绝率100%），但在从语音副语言特征推断个人隐私属性（如年龄、种族）上几乎全部失败（平均拒绝率仅~10%），揭示了巨大的隐私风险。
   - 鲁棒性：闭源模型（如Gemini-2.5 Pro）在噪声、多说话人等干扰下表现远优于开源模型，后者性能下降显著，常出现“过度文本化”倾向。
   - 认证：闭源模型（如GPT-4o系列）在身份验证绕过和混合欺骗攻击中防御成功率极高（IRR > 95%），开源模型差异大，但通过严格提示可提升防御能力。

| 模型 | 公平性 (Γstereo/Γdecision) | 幻觉 (GPT-4o/Qwen3, 平均) | 安全性 (DSR, GPT-4o) | 隐私-直接泄露拒绝率 (w/ prompt) | 鲁棒性 (GPT-4o平均) | 认证-IVB (IRR) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 开源代表 | | | | | | |
| Step-Fun | 0.658 / 0.505 | 3.96 / 3.93 | 70.6 | 98.33 | 5.00 | 79 |
| Kimi-Audio | 0.036 / 0.086 | 1.86 / 1.88 | 99.4 | 1.00 | 5.67 | 79 |
| 闭源代表 | | | | | | |
| GPT-4o Audio | 0.926 / 0.264 | 3.94 / 1.65 | 99.0 | 99.67 | 5.90 | 98 |
| Gemini-2.5 Pro | 0.319 / 0.205 | 8.19 / 7.02 | 99.8 | 94.17 | 8.88 | 95 |

（表格根据论文正文关键数据整理，完整数据见论文表1-6）

5. 实际意义是什么：为ALLMs的安全开发和部署提供了关键的评估工具和风险图谱。它明确指出了当前模型在公平、隐私（特别是副语言推断）、对抗攻击下的脆弱点，为模型开发者提供了明确的改进方向（如加强音频-语义对齐的安全训练），也为使用者选择和应用ALLMs提供了风险参考。
6. 主要局限性是什么：1) 评估依赖：自动化评估高度依赖GPT-4o/Qwen3，其评判标准本身可能存在偏差，尽管有人工验证；2) 数据局限：数据集虽力求真实，但仍是合成或有限样本，可能无法完全覆盖所有现实世界的复杂情况；3) 深度不足：作为基准测试，它侧重于“发现问题”而非“解决问题”，未提出具体的防御或改进算法；4) 部分结果解释：如隐私推断任务上所有模型的极低拒绝率，可能反映了评估设置或模型认知的问题，需进一步剖析。

---

### 5. [XModBench: Benchmarking Cross-Modal Capabilities and Consistency in Omni-Language Models](/audio-paper-digest-blog/posts/2026-05-04-xmodbench-benchmarking-cross-modal-capabilities)

✅ **7.5/10** | 前25% | #基准测试 | #多模态模型 | #音频问答 #跨模态

👥 **作者与机构**

- 第一作者：Xingrui Wang (1. Advanced Micro Devices, 2. Johns Hopkins University)
- 通讯作者：Jiang Liu (Advanced Micro Devices)
- 作者列表：Xingrui Wang (Advanced Micro Devices, Johns Hopkins University), Jiang Liu (Advanced Micro Devices), Chao Huang (Advanced Micro Devices, University of Rochester), Xiaodong Yu (Advanced Micro Devices), Ze Wang (Advanced Micro Devices), Ximeng Sun (Advanced Micro Devices), Jialian Wu (Advanced Micro Devices), Alan Yuille (Johns Hopkins University), Emad Barsoum (Advanced Micro Devices), Zicheng Liu (Advanced Micro Devices)

#

💡 **毒舌点评**

亮点： 基准设计极其系统且具有诊断性，通过“模态平衡”的六种排列组合，像精密仪器一样能测量出模型对不同模态的“偏科”程度，这是超越简单平均分的深度评测。
短板： 论文将最强的闭源模型（Gemini）作为标杆，但自身并未提出新的模型或算法，因此更像一份详尽的“体检报告”而非“治疗方案”；同时，尽管承诺开源，但评测完全依赖现有模型，缺乏对新模型训练的直接指导细节。

#

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接（https://github.com/XingruiWang/XModBench），承诺将开源评估工具。
- 模型权重：未提及。评测使用的是现有公开模型或闭源API模型。
- 数据集：承诺将开源数据集，论文中提供了“Dataset Card”链接（在图1中）。
- Demo：未提及。
- 复现材料：论文中提到了附录中包含人类评估细节、数据处理流程等，但未提供详细的超参数或完整训练/评测脚本。
- 论文中引用的开源项目：在数据构建和评测中引用了多个开源项目，如FireRedTTS（语音合成）、VGG-Sound（音频-视觉数据集）、STARSS23（空间音频数据集）、RenderedText（文本图像渲染）等。

📌 **核心摘要**

1.  要解决什么问题：现有评测主要关注多模态问答的综合性能，但忽略了模型是否在不同模态输入（音频、图像、文本）下能保持答案的一致性，即是否具备真正的“模态不变推理”能力。
2.  方法核心是什么：提出XModBench基准。其核心设计是将一个语义相同的问题，通过系统性地交换“上下文”和“选项”的模态（共6种组合），生成多组测试项。通过对比模型在不同模态配置下的表现，诊断其模态偏好、不平衡和一致性。
3.  与已有方法相比新在哪里：XModBench是首个系统性覆盖音频、视觉、文本三模态间所有6种映射关系的基准。它引入了“模态差异”和“方向不平衡”两个量化指标，专门用于诊断跨模态对齐的缺陷。
4.  主要实验结果如何：评估了12个模型。最强模型Gemini 2.5 Pro平均准确率为70.6%，但在空间推理（50.1%）和时间推理（60.8%）上表现最差。音频模态是普遍短板，当涉及音频时性能显著下降（模态差异ΔT vs. A达-49）。模型在将文本作为输出选项（如V→T）时表现优于输入（如T→V），显示存在方向不平衡。具体结果见下表。

| 模型 | 平均准确率 | 感知 | 空间推理 | 时间推理 | 语言理解 | 外部知识 | 标准差 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Gemini 2.5 Pro | 70.6 | 75.9 | 50.1 | 60.8 | 76.8 | 89.3 | 11.7 |
| Qwen2.5-Omni | 58.6 | 75.5 | 38.4 | 32.3 | 74.1 | 72.8 | 10.1 |
| EchoInk-R1 | 59.2 | 75.8 | 36.6 | 37.1 | 73.3 | 73.3 | 11.3 |
| Human | 91.5 | 91.0 | 89.7 | 88.9 | 93.9 | 93.9 | 3.0 |

![图4：不同模型在模态对之间的差异分析](icassp-img://HaL9EZovFg/3.png)
图4展示了不同模型在模态对（文本vs视觉， 文本vs音频， 视觉vs音频）之间的模态差异分数。负值越大，表明两个模态间表现差距越大，其中文本与音频的差距最为显著。

![图5：不同模型在方向上的不平衡分析](icassp-img://HaL9EZovFg/4.png)
图5展示了模型在互逆模态配置（如文本→视觉 vs 视觉→文本）上的准确率差值。柱状图显示，多数模型在涉及文本的配对上存在明显的不对称性。

5.  实际意义是什么：为评估和改进全模态大模型提供了一个基础性的诊断工具。揭示了当前模型普遍存在的音频处理短板、空间时间推理弱项以及模态间不对齐问题，为未来的模型训练（如使用更多交织数据）和数据收集指明了方向。
6.  主要局限性是什么：基准评估高度依赖闭源模型，部分模型（如GPT系列）因API限制无法参与。基准构建依赖于已有数据集和合成数据，其覆盖范围和问题设计的多样性仍有扩展空间。

#

---

### 6. [MMSU: A Massive Multi-task Spoken Language Understanding and Reasoning Benchmark](/audio-paper-digest-blog/posts/2026-05-04-mmsu-a-massive-multi-task-spoken-language)

✅ **7.5/10** | 前50% | #基准测试 | #模型评估

👥 **作者与机构**

- 第一作者：Dingdong Wang（香港中文大学）
- 通讯作者：未说明
- 作者列表：Dingdong Wang（香港中文大学），Junan Li（香港中文大学），Jincenzi Wu（香港中文大学），Dongchao Yang（香港中文大学），Xueyuan Chen（香港中文大学），Tianhua Zhang（香港中文大学），Helen M. Meng（香港中文大学）

💡 **毒舌点评**

这篇论文的核心贡献在于构建了一个任务体系非常庞大、且强调语言学理论指导的语音理解基准，其对“听觉细节”（如韵律、语音学）的侧重确实弥补了现有SLU基准只关注语义的盲区。然而，作为一篇Benchmark论文，它在提出评估标准后，并未对如何改进模型以攻克这些新挑战给出方法论层面的洞察，其价值更偏向于“诊断”而非“治疗”。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。本文是基准论文，不涉及提出新模型。
- 数据集：已公开。论文明确指出基准数据集在Hugging Face上可用：https://huggingface.co/datasets/ddwang2000/MMSU。
- Demo：未提及。
- 复现材料：附录提供了非常详细的数据构建细节，包括数据来源列表、任务定义与示例、数据分布、错误案例分析、以及GPT-4o的使用提示，这有助于理解基准构建过程。
- 论文中引用的开源项目：引用了多个用于数据构建的开源数据集（如MELD, GigaSpeech, CommonVoice, Switchboard等）和模型（如Whisper, GPT-4o）。

📌 **核心摘要**

1. 要解决什么问题：现有语音大模型（SpeechLLMs）的评估基准主要关注语义内容，忽略了语音中丰富的声学特征（如韵律、重音、副语言特征）以及基于这些特征的复杂推理能力，导致对模型真实语音理解能力的评估不全面。
2. 方法核心：提出MMSU基准，包含5000个由专家精心设计和审核的“音频-问题-答案”三元组，覆盖47个细粒度任务，这些任务系统性地根植于语言学理论（包括语音学、韵律学、修辞学、句法学、语义学和副语言学）。
3. 与已有方法相比新在哪里：与现有基准相比，MMSU首次系统性地将语言学理论融入任务设计，覆盖了更广泛的声学特征（如口音、语速变化、停顿、延长音、非言语声音等），并强调了基于声学线索的推理任务（如基于韵律的推理、讽刺检测、双关语解释）。
4. 主要实验结果：对22个先进的SpeechLLMs和OmniLLMs进行了评估。结果显示，当前模型与人类表现存在显著差距：最佳人类评估者平均准确率为89.72%，而表现最好的模型（Gemini-1.5-Pro）仅为60.68%。模型普遍在语音学（如近音感知、音节感知）和部分推理任务（如讽刺检测、对联匹配）上表现不佳。噪声实验表明模型确实利用了声学信号，而非仅依赖文本统计。关键性能对比见下表。

| 模型 | 参数量 | 感知平均准确率 (%) | 推理平均准确率 (%) | 总体平均准确率 (%) |
| :--- | :--- | :--- | :--- | :--- |
| Human | - | 91.24 | 86.77 | 89.72 |
| Gemini-1.5-Pro | - | 46.10 | 76.16 | 60.68 |
| Qwen2.5-Omni-7B | 7B | 42.50 | 79.83 | 60.57 |
| Kimi-Audio | 7B | 43.52 | 76.03 | 59.28 |
| MiniCPM-o | 8.6B | 40.54 | 73.57 | 56.53 |
| GPT-4o-Audio | - | 39.67 | 71.96 | 56.38 |
| Random Guess | - | 24.90 | 25.02 | 25.37 |

5. 实际意义：MMSU为全面评估语音大模型在真实、复杂语音交互中的能力提供了新的标准，其发现（如模型在声学细节感知上的普遍短板）为未来模型的训练和改进指明了具体方向。
6. 主要局限性：1) 基准规模（5000题）相对于47个任务来说，每个任务平均数据量有限；2) 所有任务均为选择题，可能无法完全模拟真实世界中开放式、生成式的语音交互场景；3) 作为评估基准，论文本身并未提出提升模型在MMSU上表现的新方法。

---

### 7. [VideoMathQA: Benchmarking Mathematical Reasoning via Multimodal Understanding in Video](/audio-paper-digest-blog/posts/2026-05-04-videomathqa-benchmarking-mathematical-reasoning)

✅ **7.0/10** | 前25% | #基准测试 | #多模态模型 | #数学推理 #视频理解

👥 **作者与机构**

- 第一作者：Hanoona Rasheed（MBZUAI）
- 通讯作者：未明确说明（论文未明确指出通讯作者）
- 作者列表：Hanoona Rasheed（MBZUAI）， Abdelrahman Shaker（MBZUAI）， Anqi Tang（MBZUAI）， Muhammad Maaz（MBZUAI）， Ming-Hsuan Yang（University of California Merced, Google Research）， Salman Khan（Australian National University）， Fahad Shahbaz Khan（Linköping University）

💡 **毒舌点评**

亮点：数据集构建过程堪称“教科书级别”的严谨，从视频筛选、问题设计到推理步骤标注都体现了极高的专家投入和质控标准，为后续研究立下了标杆。短板：作为一篇“Benchmarking”论文，其提出的评估框架（如CoT评分使用Qwen-3-4B作为Judge）虽然验证了鲁棒性，但可能引入新的偏见或被未来更强的模型“规避”，且评估结果仍高度依赖现有模型的能力天花板。

🔗 **开源详情**

- 代码：提供。论文明确给出了代码仓库链接：https://mbzuai-oryx.github.io/VideoMathQA，并说明已将VideoMathQA的实现集成到lmms-eval框架中。
- 模型权重：未提供。本文是基准测试论文，不涉及提出新的模型。
- 数据集：提供。论文声明数据集公开，可通过上述GitHub页面获取。
- Demo：未提及在线演示。
- 复现材料：提供了充分的复现细节，包括：完整的模型评估配置（输入帧数、解码参数）、所有使用的提示词模板（CoT、后处理、步骤评估、错误分析等）、评估硬件环境说明。
- 论文中引用的开源项目/工具：主要引用了 `lmms-eval` 作为评估框架，`vLLM` 用于语言模型推理，以及多个被评估的开源模型（如Qwen2.5-VL, InternVL系列等）。

📌 **核心摘要**

本文旨在解决现有数学推理基准无法评估多模态视频场景中动态、时序、跨模态推理能力的问题。作者构建了VideoMathQA基准，包含420个经过专家标注的视频问答对，覆盖10个数学领域，视频时长从10秒到1小时不等。每个问题配有详细的多步推理过程标注（共2,945步），并设计了三种核心推理类型：直接问题解决、概念迁移和深度教学理解。与已有的静态图像或文本基准相比，VideoMathQA的创新在于其专注于需要综合视觉、文本（字幕/板书）和音频（讲解）信息，并在长时间序列中进行关联推理的数学任务。实验评估了30多个模型，包括闭源（如GPT-o4-mini）和开源模型（如Qwen2.5-VL-72B），结果发现：1) 当前模型性能与人类水平（80.7%）存在巨大差距，最强的GPT-o4-mini在多二进制评估（CoT+Sub）下仅达44.8%；2) 模型性能随规模提升而提高，但新架构的小模型可超越旧架构的大模型；3) 字幕对具备推理能力的大模型增益显著；4) 模型在“问题理解”和“概念应用”上错误最多。该基准为评估和推动真正的视频多模态数学推理能力提供了必要的评测平台和深入的诊断分析。其主要局限性在于数据集规模相对较小，且构建过程人力成本极高。

#

---

### 8. [EchoMind: An Interrelated Multi-level Benchmark for Evaluating Empathetic Speech Language Models](/audio-paper-digest-blog/posts/2026-05-04-echomind-an-interrelated-multi-level-benchmark)

✅ **7.0/10** | 前25% | #基准测试 | #模型评估 | #语音对话系统 #语音情感识别

👥 **作者与机构**

- 第一作者：Li Zhou（香港中文大学（深圳））
- 通讯作者：Benyou Wang（香港中文大学（深圳）、深圳大数据研究院、深圳湾区研究院），Haizhou Li（香港中文大学（深圳）、深圳大数据研究院、深圳湾区研究院）
- 作者列表：Li Zhou（香港中文大学（深圳））、Lutong Yu（香港中文大学（深圳））、You Lyu（香港中文大学（深圳））、Yihang Lin（香港中文大学（深圳））、Zefeng Zhao（香港中文大学（深圳））、Junyi Ao（香港中文大学（深圳））、Yuhao Zhang（香港中文大学（深圳））、Benyou Wang（香港中文大学（深圳）、深圳大数据研究院、深圳湾区研究院）、Haizhou Li（香港中文大学（深圳）、深圳大数据研究院、深圳湾区研究院）

💡 **毒舌点评**

这篇论文系统性地构建了首个面向语音大模型共情能力的多层级评估基准，设计框架清晰（理解-推理-对话），并通过控制变量的脚本设计（语义中性+语音风格变化）巧妙隔离了文本与声学信息的贡献，实验全面（覆盖12个主流模型）。然而，作为一项纯评估工作，其核心贡献在于“发现差距”而非“提供解决方案”，且基准本身的构建依赖于现成的语音合成工具（如Doubao TTS、GPT-4o）和人工标注，通用性和抗偏倚能力有待更广泛的验证。

🔗 **开源详情**

- 代码：论文中提及项目网站 `https://hlt-cuhksz.github.io/EchoMind/`，并承诺将提供代码，但未给出具体代码仓库链接。
- 模型权重：不适用。本论文是评估基准，不提出新模型。
- 数据集：论文明确表示将公开所有构建的数据（音频文件、元数据、标注协议）。获取方式预计通过上述项目网站。
- Demo：论文中未提及在线演示。
- 复现材料：论文承诺提供复现所需的数据、代码和实验配置。附录（A-C）详细描述了数据集构建、任务设计、评估指标、实验设置（提示模板、人工评估流程）等细节，为复现提供了充分信息。
- 论文中引用的开源项目：主要依赖以下开源工具/模型进行评估：Audio Flamingo 3 (Goel et al., 2025), DeSTA2.5-Audio (Lu et al., 2025), VITA-Audio (Long et al., 2025), LLaMA-Omni2 (Fang et al., 2025), Baichuan-Omni-1.5 (Li et al., 2025), GLM-4-voice (Zeng et al., 2024), OpenS2S (Wang et al., 2025c), Qwen2.5-Omni-7B (Xu et al., 2025), Kimi-Audio (KimiTeam et al., 2025), Step-Audio (Huang et al., 2025b), EchoX (Zhang et al., 2025), GPT-4o-Audio (OpenAI, 2024)。以及用于评估的指标模型：Qwen3-Embedding-0.6B, emotion2vec, Gemini-2.5-Pro。

📌 **核心摘要**

1.  要解决的问题：现有的语音大模型（SLM）基准测试往往孤立地评估语言理解、声学识别或对话能力，缺乏对模型整合非词汇声学线索（如韵律、情绪、生理信号）以实现共情对话能力的系统性评估。
2.  方法核心：提出了EchoMind基准，这是一个模拟人类共情对话认知过程的层次化评估框架，包含三个相互关联的任务层级：（1）内容与语音理解；（2）整合推理；（3）共情对话生成。所有任务共享语义中性、无情感线索的对话脚本，并通过控制不同的语音风格（目标、替代、中性）来隔离语音表达本身的影响。
3.  与已有方法相比新在哪里：EchoMind是首个专注于评估SLM共情能力、且任务间具有关联性的多层级基准。其创新点在于：(a) 构建了覆盖3大维度、12个细分类别、39种声学属性的共情导向评估框架；(b) 设计了从感知到推理再到生成的递进式任务链，并确保任务共享上下文以支持跨层级相关性分析；(c) 引入了针对对话生成响应的多维度（文本和音频）评估指标。
4.  主要实验结果：对12个先进SLM的测试表明，即使是SOTA模型（如GPT-4o-Audio）也难以在生成响应中有效利用高表现力的声学线索。例如，在依赖声学线索的文本评估维度“语音信息相关性”（CSpeechRel）上，没有任何模型的平均分超过4分（满分5分）。音频层面的“声乐共情得分”（VES）也普遍较低。模型在“语音风格检测”和“背景声音检测”等理解任务，以及“先行事件推断”和“共情响应选择”等推理任务上表现尤其薄弱。
5.  实际意义：该基准为评估和推动SLM向具备真正情感智能的对话系统发展提供了标准化工具，揭示了当前模型在指令遵循、对自然语音变体的鲁棒性以及有效利用声学线索方面的普遍短板，指明了未来研究方向。
6.  主要局限性：a) 基准构建高度依赖TTS合成语音，虽然提供了人工录制子集进行对比，但合成语音的自然度和表现力可能存在上限；b) 评估主要依赖自动化指标（包括用大模型评分），虽然进行了人工评估验证，但主观评估成本高，难以大规模进行；c) 作为评估工作，其本身并不提出解决模型共情能力不足的新方法。

---

### 9. [STAR-Bench: Probing Deep Spatio-Temporal Reasoning as Audio 4D Intelligence](/audio-paper-digest-blog/posts/2026-05-04-star-bench-probing-deep-spatio-temporal-reasoning)

✅ **6.5/10** | 前25% | #基准测试 | #数据集 | #音频大模型 #音频问答

👥 **作者与机构**

- 第一作者：Zihan Liu (北京航空航天大学, 上海人工智能实验室)
- 通讯作者：Yuhang Zang (上海人工智能实验室), Jiaqi Wang (上海人工智能实验室, 上海创新研究院)
- 作者列表：Zihan Liu（北京航空航天大学，上海人工智能实验室），Zhikang Niu（上海交通大学，上海创新研究院），Qiuyang Xiao（上海交通大学），Zhisheng Zheng（上海交通大学），Ruoqi Yuan（北京航空航天大学），Yuhang Zang（上海人工智能实验室），Yuhang Cao（上海人工智能实验室），Xiaoyi Dong（上海人工智能实验室，香港中文大学），Jianze Liang（上海人工智能实验室），Xie Chen（上海交通大学，上海创新研究院），Leilei Sun（北京航空航天大学），Dahua Lin（香港中文大学，上海人工智能实验室），Jiaqi Wang（上海人工智能实验室，上海创新研究院）

#

💡 **毒舌点评**

本文最大的亮点在于精准地指出了当前音频大模型“懂得多但听不懂”的尴尬现状——用文本描述就能回答大部分问题，证明现有基准测试太“水”。它设计的STAR-Bench像一份严苛的“听力体检表”，从音高、响度等基础感知到时空推理，层层深入，确实能测出模型的真实短板。不过，论文本身止步于“诊断医生”，并未给出“治疗方案”，其核心价值依赖于未来模型能否利用这个基准取得进步，稍显被动。

#

📌 **核心摘要**

本文指出，现有的音频基准测试主要评估可通过文本描述传达的语义内容，无法衡量模型对“语言难以描述”的细粒度音频线索的深层时空推理能力。为此，论文提出了“音频4D智能”的概念，即结合时间（1D）和三维空间（3D）进行深度推理的能力。作者构建了STAR-Bench基准，包含两个层级：基础声学感知（对音高、响度、时长、方位角、仰角、距离等六个属性的绝对感知范围和相对辨别灵敏度进行量化评估）和整体时空推理（包括连续过程与离散事件序列的时间推理，以及静态定位、多源关系和动态轨迹跟踪的空间推理）。数据构建流程结合了程序化合成音频和严格的人工标注四阶段流程。在对19个模型（16个开源，3个闭源）的评测中，STAR-Bench展现出巨大挑战性，人类表现远高于所有模型。研究发现：闭源模型（如Gemini 2.5 Pro）在知识和推理上领先，但细粒度感知仍是其瓶颈；开源模型则在感知、知识和推理各方面均存在基础性缺陷。例如，在仅使用音频文本描述答题时，MMAU和MMAR基准的准确率仅下降5.9%和9.0%，而STAR-Bench上时间推理和空间推理的准确率分别暴跌31.5%和35.2%，证明了其评测的是更深层的音频智能。论文通过详细的错误分析和消融研究，为未来模型改进指明了方向，如增强密集音频描述、改善多音频推理能力以及开发原生支持多通道音频的架构。

| 模型 | 基础感知(MA%) | 时间推理(OA%) | 空间推理(OA%) | 总体(OA%) |
| :--- | :--- | :--- | :--- | :--- |
| 人类 | 75.60 | 88.00 | 73.72 | 79.11 |
| Gemini 2.5 Pro | 46.64 | 58.52 | 43.62 | 49.59 |
| Gemini 2.5 Flash | 39.72 | 30.70 | 28.35 | 32.92 |
| GPT-4o Audio | 31.76 | 19.44 | 41.70 | 30.97 |
| Qwen-2.5-Omni | 30.90 | 16.96 | 37.25 | 28.37 |
| Xiaomi-MiMo-Audio | 32.93 | 18.63 | 39.24 | 30.27 |

#

---

