---
title: "ICLR 2026 - 基准测试 论文列表"
date: 2026-05-03
draft: false
tags: ["基准测试"]
categories: [iclr-2026]
description: "共 11 篇 ICLR 2026 基准测试 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 基准测试

共 **11** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [OptMerge: Unifying Multimodal LLM Capabilities and Modalitie](/audio-paper-digest-blog/posts/2026-05-03-optmerge-unifying-multimodal-llm-capabilities-and) | 8.5分 | 前25% |
| 🥈 | [MCIF: Multimodal Crosslingual Instruction-Following Benchmar](/audio-paper-digest-blog/posts/2026-05-03-mcif-multimodal-crosslingual-instruction) | 8.5分 | 前25% |
| 🥉 | [WearVox: An Egocentric Multichannel Voice Assistant Benchmar](/audio-paper-digest-blog/posts/2026-05-03-wearvox-an-egocentric-multichannel-voice) | 8.5分 | 前10% |
| 4. | [XModBench: Benchmarking Cross-Modal Capabilities and Consist](/audio-paper-digest-blog/posts/2026-05-03-xmodbench-benchmarking-cross-modal-capabilities) | 8.0分 | 前25% |
| 5. | [EchoMind: An Interrelated Multi-level Benchmark for Evaluati](/audio-paper-digest-blog/posts/2026-05-03-echomind-an-interrelated-multi-level-benchmark) | 8.0分 | 前25% |
| 6. | [AudioTrust: Benchmarking The Multifaceted Trustworthiness of](/audio-paper-digest-blog/posts/2026-05-03-audiotrust-benchmarking-the-multifaceted) | 7.5分 | 前25% |
| 7. | [OmniVideoBench: Towards Audio-Visual Understanding Evaluatio](/audio-paper-digest-blog/posts/2026-05-03-omnivideobench-towards-audio-visual-understanding) | 7.5分 | 前25% |
| 8. | [STAR-Bench: Probing Deep Spatio-Temporal Reasoning as Audio ](/audio-paper-digest-blog/posts/2026-05-03-star-bench-probing-deep-spatio-temporal-reasoning) | 7.5分 | 前25% |
| 9. | [VideoMathQA: Benchmarking Mathematical Reasoning via Multimo](/audio-paper-digest-blog/posts/2026-05-03-videomathqa-benchmarking-mathematical-reasoning) | 7.5分 | 前25% |
| 10. | [WorldSense: Evaluating Real-world Omnimodal Understanding fo](/audio-paper-digest-blog/posts/2026-05-03-worldsense-evaluating-real-world-omnimodal) | 7.5分 | 前25% |
| 11. | [VoxPrivacy: A Benchmark for Evaluating Interactional Privacy](/audio-paper-digest-blog/posts/2026-05-03-voxprivacy-a-benchmark-for-evaluating) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [OptMerge: Unifying Multimodal LLM Capabilities and Modalities via Model Merging](/audio-paper-digest-blog/posts/2026-05-03-optmerge-unifying-multimodal-llm-capabilities-and)

🔥 **8.5/10** | 前25% | #基准测试 | #迁移学习 | #多模态模型 #模型比较

👥 **作者与机构**

- 第一作者：Yongxian Wei（清华大学）
- 通讯作者：Chun Yuan（清华大学）
- 作者列表：Yongxian Wei（清华大学）， Runxi Cheng（清华大学）， Weike Jin（华为诺亚方舟实验室）， Enneng Yang（中山大学）， Li Shen（中山大学）， Lu Hou（华为诺亚方舟实验室）， Sinan Du（清华大学）， Chun Yuan（清华大学）， Xiaochun Cao（中山大学）， Dacheng Tao（南洋理工大学）

💡 **毒舌点评**

亮点在于首次为多模态大语言模型（MLLM）建立了系统化的模型合并基准测试，填补了领域空白，并提出了切实有效的OptMerge优化方法，证明了模型合并甚至能超越传统的混合训练。短板是实验主要在1B/7B参数模型上进行，对于更大规模（如32B）或更复杂架构的普适性验证仍显不足，且理论分析部分的假设（如任务向量的近似正交性）在实践中未必总是严格成立。

🔗 **开源详情**

- 代码：论文在摘要和结论中均声明“All code and checkpoints are publicly available”，并提供了链接（`here`），但具体仓库URL未在提供的文本中显示。
- 模型权重：论文训练并公开了所有专家模型检查点，包括基于InternVL2.5和Qwen2-VL架构的VQA、几何、图表、OCR、定位模型，以及用于模态合并的视觉、音频、视频语言模型。
- 数据集：论文构建基准所使用的训练集均为公开数据集（见表1），并已详细列出。评估数据集也均为公开基准。论文未提及是否公开其处理后的指令微调数据格式数据。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详尽的实现细节（附录C），包括检查点构建、训练数据、评估基准、合并细节、超参数设置等。附录A提供了理论证明。
- 论文中引用的开源项目：CLIP-ViT-L-336px, BEATs-Iter3+, LanguageBind, Vicuna-7B-v1.5, LLaVA-v1.5, VLMEvalKit, LMMs-Eval 等。

📌 **核心摘要**

这篇论文要解决的问题是：当前多模态大语言模型（MLLM）的合并研究缺乏统一的基准测试和数据自由（Data-Free）的高效合并方法。方法的核心是：（1）构建了首个针对MLLM能力的基准测试，细分为VQA、几何、图表、OCR和定位五大任务；（2）提出了OptMerge方法，通过低秩近似去除任务向量中的噪声，并基于任务向量交互的损失函数稳健地优化合并向量。与已有方法相比，新在：首次提供了MLLM的标准化合并评估框架；OptMerge相比WUDI Merging平均性能提升2.48%，尤其在处理LoRA微调模型和模态合并时更有效。主要实验结果为：在InternVL2.5（全参微调）上，OptMerge平均性能达到57.44，超越大多数基线；在Qwen2-VL（LoRA微调）上，OptMerge平均性能达到63.30，显著优于其他方法；合并后的模型在多个模态（视觉、音频、视频）的问答任务上（如MUSIC-AVQA, AVQA）超越了单模态模型和在线组合方法（如DAMC）。实际意义是：模型合成为构建增强的、统一模态的MLLM提供了一种无需训练数据、计算成本低廉的可扩展路径。主要局限性是：实验模型规模有限（最大32B），未验证更大规模模型的效果；理论分析依赖于若干假设，在复杂场景下可能不成立。

---

### 🥈 [MCIF: Multimodal Crosslingual Instruction-Following Benchmark from Scientific Talks](/audio-paper-digest-blog/posts/2026-05-03-mcif-multimodal-crosslingual-instruction)

🔥 **8.5/10** | 前25% | #基准测试 | #模型评估 | #多语言 #多模态

👥 **作者与机构**

- 第一作者：Sara Papi (Fondazione Bruno Kessler)
- 通讯作者：Sara Papi, Marco Gaido, Beatrice Savoldi, Luisa Bentivogli (根据邮箱 `@fbk.eu` 判断) / Maike Züfle, Danni Liu, Jan Niehues (根据邮箱 `@kit.edu` 判断)，论文中未明确指定唯一通讯作者
- 作者列表：Sara Papi (Fondazione Bruno Kessler), Maike Züfle (Karlsruhe Institute of Technology), Marco Gaido (Fondazione Bruno Kessler), Beatrice Savoldi (Fondazione Bruno Kessler), Danni Liu (Karlsruhe Institute of Technology), Ioannis Douros (Translated), Luisa Bentivogli (Fondazione Bruno Kessler), Jan Niehues (Karlsruhe Institute of Technology)

💡 **毒舌点评**

该论文构建了一个填补重要空白的评测基准，实验设计全面且细致，但作为基准论文，其模型测试部分略显“粗糙”，例如直接将多个开源模型在默认配置下对比，未深入探讨为何某些模型在特定任务上表现异常（如Ola在短文本转录中的失败）。此外，虽然基准集本身质量高且完全公开，但其评测指标（如BERTScore）在跨语言和开放式生成任务上的绝对值解释性仍需谨慎。

🔗 **开源详情**

*   代码：提供完整代码仓库：`github.com/hlt-mt/mcif`，包含推理和评估脚本。
*   模型权重：论文评测的模型均为公开权重，链接在附录D中提供。但论文本身不提供新训练的模型权重。
*   数据集：MCIF数据集已公开发布于HuggingFace：`hf.co/datasets/FBK-MT/MCIF`，采用CC-BY 4.0许可证。
*   Demo：论文中未提及在线演示。
*   复现材料：提供了详细的标注指南（GitHub仓库中）、所有模型的生成设置（附录D）、使用的提示列表（附录C）以及所有基线模型的输出结果。
*   引用的开源项目：依赖HuggingFace Transformers库进行模型推理；使用了jiWER库计算WER；使用了COMET和BERTScore进行评估。

📌 **核心摘要**

1. 解决什么问题：当前多模态大语言模型（MLLM）的评测基准存在明显局限：多局限于英语、单模态、短文本，且缺乏人工标注，无法系统评估模型在跨语言、多模态、长上下文下的指令跟随能力。
2. 方法核心：提出MCIF，一个首个基于科学演讲、人工标注的多模态跨语言指令跟随评测基准。它包含文本、语音、视频三种模态，英语、德语、意大利语、中文四种语言，覆盖识别、翻译、问答、总结四大类共13项任务，并设计了固定提示（MCIFfix）和随机提示（MCIFmix）两个版本。
3. 新在哪里：相比现有基准，MCIF实现了多维度（模态、语言、上下文长度）的完全对齐和并行设计，支持跨模态和跨语言的系统性消融研究。它特别强调了“长上下文”和“跨语言指令跟随”，这是以往基准较少同时覆盖的。此外，其双提示版本（fix vs. mix）可直接评估模型对指令表述变化的鲁棒性。
4. 主要实验结果：对23个SOTA模型（7个LLM，5个SpeechLLM，5个 VideoLLM，6个 MLLM）的评测显示：
    *   长文本是普遍挑战：几乎所有模型在长文本输入上性能显著下降，尤其在总结任务上，部分模型得分低于随机水平（BERTScore为负）。
    *   多模态融合不佳：联合输入语音和视频模态，对MLLM在多数任务上没有带来性能提升，甚至导致下降。
    *   任务难度差异：总结是最难的任务；问答任务中，模型在处理细粒度、依赖具体转录或摘要信息的问题时表现较差。
    *   提示敏感性：模型对指令的表述变化敏感，尤其在识别任务中性能波动巨大。
    *   具体关键结果见下表：

| 上下文类型 | 宏观任务 | 最佳模型 (MCIFfix) | 性能指标 (平均) | 最佳模型 (MCIFmix) | 性能指标 (平均) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 短文本 | 识别 (WER↓) | Phi4-Multimodal | 6.8 | Phi4-Multimodal | 6.7 |
| | 翻译 (COMET↑) | Phi4-Multimodal | 80.2 | Phi4-Multimodal | 80.1 |
| | 问答 (BERTS↑) | Gemini 2.5 Flash | 40.6 | Gemini 2.5 Flash | 39.5 |
| | 总结 (BERTS↑) | 无 | (短文本不支持) | 无 | (短文本不支持) |
| 长文本 | 识别 (WER↓) | Gemini 2.5 Flash | 11.9 | Gemini 2.5 Flash | 7.9 |
| | 翻译 (COMET↑) | Gemini 2.5 Flash | 76.4 | Aya Expanse | 68.7 |
| | 问答 (BERTS↑) | Gemini 2.5 Flash | 46.1 | Gemini 2.5 Flash | 45.9 |
| | 总结 (BERTS↑) | Gemini 2.5 Flash | 24.1 | Gemini 2.5 Flash | 21.8 |

注：WER越低越好，COMET和BERTScore越高越好。最佳性能下划线标出，来自论文表2。
5. 实际意义：为MLLM研究社区提供了一个全面、可靠、可扩展的评测工具，指明了当前模型的关键短板（长文本处理、多模态融合、提示鲁棒性），为未来模型设计和训练提供了明确的优化方向。
6. 主要局限性：评测基准本身不提出新模型，其影响力依赖于社区的采纳程度；评测模型数量虽多但均为API调用或默认配置下的结果，未能探究模型潜力的上限；评估指标（尤其是问答和总结）主要基于BERTScore，可能无法完全反映答案的语义正确性和流畅性。

---

### 🥉 [WearVox: An Egocentric Multichannel Voice Assistant Benchmark for Wearables](/audio-paper-digest-blog/posts/2026-05-03-wearvox-an-egocentric-multichannel-voice)

🔥 **8.5/10** | 前10% | #基准测试 | #语音大模型 | #多通道 #鲁棒性

👥 **作者与机构**

- 第一作者：Zhaojiang Lin（Meta）、Yong Xu（Meta）、Kai Sun（Meta）（论文注明为共同第一作者）
- 通讯作者：未明确指定（论文未提供通讯作者信息）
- 作者列表：Zhaojiang Lin（Meta）、Yong Xu（Meta）、Kai Sun（Meta）、Jing Zheng（Meta）、Yin Huang（Meta）、Surya Teja Appini（Meta）、Krish Narang（Meta）、Renjie Tao（Meta）、Ishan Kapil Jain（Meta）、Siddhant Arora（Meta，卡内基梅隆大学）、Ruizhi Li（Meta）、Yiteng Huang（Meta）、Kaushik Patnaik（Meta）、Wenfang Xu（Meta）、Suwon Shon（Meta）、Yue Liu（Meta）、Ahmed A Aly（Meta）、Anuj Kumar（Meta）、Florian Metze（Meta）、Xin Luna Dong（Meta）

💡 **毒舌点评**

论文最大亮点在于填补了一个明确的评估空白——构建了首个专门针对可穿戴设备、具有真实世界复杂性的多通道语音助手基准WearVox，其数据集构建的严谨性和任务设计的生态效度远超以往的通用语音QA数据集。但短板也相当明显：其“核心贡献”本质上是一个高质量数据集和评估体系，而提出的多通道模型案例研究（MC WearLlama）更多是验证性工作，架构上并未展现出根本性创新，且评估依赖的多数顶级模型均为闭源API，限制了完全的独立复现与分析。

🔗 **开源详情**

- 代码：论文中提及数据集在GitHub公开（https://github.com/facebookresearch/wearvox），但未明确说明代码库中是否包含评估脚本或案例研究模型的实现代码。
- 模型权重：基准测试中使用的SLLMs（如GPT-4o， Gemini）为闭源。案例研究中的SC/MC WearLlama模型未提及是否开源权重。
- 数据集���已公开，可通过上述GitHub链接获取。
- Demo：论文中未提及在线演示。
- 复现材料：论文在附录（Appendix）中提供了详细的录音设置、任务提示、LLM评判器提示、多通道音频模拟公式、模型架构细节（A.6）以及麦克风阵列泛化实验（A.7），提供了良好的复现基础，但核心训练超参数（如学习率、batch size）缺失。
- 引用的开源项目：论文中引用了多个开源工具和模型作为基线或方法参考，包括：Whisper, Qwen2.5-Omni, Gemma 3n, Kimi-Audio, Llama 3.3, Llama 4 Scout, SeamlessM4T, AudioChatLlama, CRAG, Head-to-tail等。

📌 **核心摘要**

1. 要解决的问题：现有语音助手基准（如VoiceBench）大多基于干净或通用对话音频，忽略了可穿戴设备（如AI眼镜）在现实使用中面临的独特挑战，例如自我中心音频受运动/风噪影响、需要快速微交互、以及区分设备定向语音与背景对话。
2. 方法核心：提出了WearVox，一个专为评估可穿戴语音助手设计的基准。它包含3842段多通道自我中心音频录音，涵盖5种任务（搜索问答、闭书问答、旁听拒绝、工具调用、语音翻译），数据通过AI眼镜在多样室内/室外环境和噪声条件下采集。
3. 与已有方法相比新在哪里：WearVox是第一个专注于可穿戴场景、采用多通道自我中心音频、覆盖多样真实环境和对话动态（如旁听拒绝）的语音助手基准。相比之下，以往基准多为单通道、非自我中心、环境简单（表1对比）。
4. 主要实验结果：对多个SLLM进行评估，大多数实时模型在WearVox上的准确率仅为29%-59%，在户外噪声环境下性能显著下降（表2）。案例研究显示，使用多通道输入的模型（MC WearLlama）相比单通道模型（SC WearLlama），在侧向语音拒绝任务上准确率从85.4%提升至93.9%，整体准确率从61.9%提升至66.4%（表4），证明了空间音频线索的重要性。
5. 实际意义：为可穿戴语音AI研究提供了一个全面、现实的测试平台，揭示了当前模型在真实世界场景下的不足，并指明了多通道音频处理是提升鲁棒性的关键方向。
6. 主要局限性：基准中使用的多数SLLMs为闭源商业模型，限制了分析深度；案例研究中的多通道模型是基于已有架构（Llama 4）的改造，创新性有限；评估未涵盖所有潜在可穿戴挑战（如更复杂的运动伪影、持续对话）。

---

### 4. [XModBench: Benchmarking Cross-Modal Capabilities and Consistency in Omni-Language Models](/audio-paper-digest-blog/posts/2026-05-03-xmodbench-benchmarking-cross-modal-capabilities)

🔥 **8.0/10** | 前25% | #基准测试 | #多模态模型 | #跨模态 #模型评估

👥 **作者与机构**

- 第一作者：Xingrui Wang（AMD，约翰斯·霍普金斯大学）
- 通讯作者：Jiang Liu（AMD）
- 作者列表：Xingrui Wang（AMD，约翰斯·霍普金斯大学），Jiang Liu（AMD），Chao Huang（AMD，罗切斯特大学），Xiaodong Yu（AMD），Ze Wang（AMD），Ximeng Sun（AMD），Jialian Wu（AMD），Alan Yuille（约翰斯·霍普金斯大学），Emad Barsoum（AMD），Zicheng Liu（AMD）

💡 **毒舌点评**

这篇论文的亮点在于其“模态置换”的评测框架设计精巧，像一套专门为模型做“跨模态体检”的CT扫描，能犀利地暴露出当前全模态模型在音频、视觉、文本之间转换时的“骨质疏松”（方向不平衡）和“肌肉萎缩”（模态差异）。短板是它本质上是一个“诊断工具”，而非“治疗方案”——它能告诉你模型哪儿不行，但如何让模型变得行之有效，论文本身的贡献有限。

🔗 **开源详情**

- 代码：论文提及将开源代码，地址为`https://github.com/XingruiWang/XModBench`，但具体代码仓库状态（如是否已公开）未说明。
- 模型权重：未提及开源评测模型自身的权重（因为评估的是现有模型）。
- 数据集：论文明确表示将开源XModBench数据集和数据卡片（Dataset Card）。
- Demo：未提及。
- 复现材料：提供了评测工具，应包含运行评估的脚本和配置。论文附录（未在正文中详细展示）应包含更多构建细节（如附录G）。
- 论文中引用的开源项目：提到了FireRedTTS（用于生成语音）、VGG-Sound、STARSS23等作为数据源。
- 总体：论文有明确的开源计划，但具体细节（如模型、完整代码的可用性）需在GitHub页面确认。

📌 **核心摘要**

1. 解决的问题：当前的全模态大语言模型（OLLMs）在融合音频、视觉和文本时，是否真的实现了模态无关的推理，还是对特定输入模态存在系统性偏差？现有基准测试大多忽略了对这种“跨模态一致性”的直接诊断。
2. 方法核心：提出XModBench，一个大规模、三模态（音频-视觉-文本）的多选问答基准。其核心设计是将每道题目系统地生成六种模态配置（上下文和选项来自三种模态的排列组合），从而控制语义内容不变，仅改变模态形式，以测量模型的一致性。
3. 与已有方法相比新在哪里：是首个明确覆盖全部六种跨模态方向（如音频->文本、视觉->音频等）、并专门设计用于诊断“跨模态一致性”、“模态差异”和“方向不平衡”的基准。它超越了传统基准仅评估整体准确率的做法。
4. 主要实验结果：
    - 任务能力：最强模型（Gemini 2.5 Pro）在感知和语言任务上表现较好（约76-77%），但在空间和时序推理上显著较弱（50.1%和60.8%）。
    - 模态差异：音频是最薄弱的模态。例如，Gemini 2.5 Pro在音频相关配置上的准确率远低于文本或视觉配置（Δ_T vs. A = -49）。
    - 方向不平衡：模型在文本作为选项时表现更好。例如，从“文本->视觉”到“视觉->文本”的配置转换会导致明显的性能下降（Gemini 2.5 Pro下降8.8点，Qwen2.5-Omni下降16.6点）。
    - 具体数值对比（摘要表2）：
        | 模型 | 平均准确率 | A7->T | A7->V | T7->A | T7->V | V7->A | V7->T | 标准差 |
        | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
        | Gemini 2.5 Pro | 70.6 | 75.9 | 50.1 | 60.8 | 76.8 | 89.3 | 71.0 | 11.7 |
        | Qwen2.5-Omni | 58.6 | 75.5 | 38.4 | 32.3 | 74.1 | 72.8 | 62.0 | 10.1 |
        | 人类 | 91.5 | 91.0 | 89.7 | 88.9 | 93.9 | 93.9 | 92.4 | 3.0 |
5. 实际意义：为诊断和改进全模态模型的跨模态对齐能力提供了一个关键的评估工具，揭示了当前模型远未达到真正的模态无关推理，并为训练策略（如需要更多交错模态数据）提供了可操作的见解。
6. 主要局限性：评估任务仍局限于多选题格式，且尚未测试三模态（音频+视觉）同时作为上下文的更复杂交互场景（尽管在附录E中进行了初步探索）。

---

### 5. [EchoMind: An Interrelated Multi-level Benchmark for Evaluating Empathetic Speech Language Models](/audio-paper-digest-blog/posts/2026-05-03-echomind-an-interrelated-multi-level-benchmark)

🔥 **8.0/10** | 前25% | #基准测试 | #语音大模型 | #语音对话系统 #模型评估

👥 **作者与机构**

- 第一作者：Li Zhou（香港中文大学（深圳））
- 通讯作者：Benyou Wang（香港中文大学（深圳）、深圳大数据研究院、深圳湾区研究院），Haizhou Li（香港中文大学（深圳）、深圳大数据研究院、深圳湾区研究院）
- 作者列表：Li Zhou（香港中文大学（深圳）），Lutong Yu（香港中文大学（深圳）），You Lyu（香港中文大学（深圳）），Yihang Lin（香港中文大学（深圳）），Zefeng Zhao（香港中文大学（深圳）），Junyi Ao（香港中文大学（深圳）），Yuhao Zhang（香港中文大学（深圳）），Benyou Wang（香港中文大学（深圳）、深圳大数据研究院、深圳湾区研究院），Haizhou Li（香港中文大学（深圳）、深圳大数据研究院、深圳湾区研究院）

💡 **毒舌点评**

这篇论文为评估语音大模型的“共情智商”设计了一套相当精细且成体系的“考卷”，首次将理解、推理、生成三个认知阶段用同一套受控语音素材串联起来进行综合测评，设计思路值得肯定。但最大的短板在于其基准数据完全由合成语音构建，且所有实验仅在这些合成数据上进行，这使得它对模型在真实世界嘈杂、多变且意图模糊的语音交互中到底有多少“共情”能力，说服力要打一个折扣。

🔗 **开源详情**

- 代码：论文中提及“将提供所有必要的数据、代码和实验配置”，但未提供具体代码仓库链接。
- 模型权重：论文评估了多个开源和闭源模型，但未提及EchoMind基准本身是否提供模型权重（它是一个评估基准，而非模型）。
- 数据集：论文承诺发布构建的“所有音频文件、元数据及标注协议”，但未提供具体的下载链接或许可平台。
- Demo：论文提供了一个项目网站（https://hlt-cuhksz.github.io/EchoMind/），可能包含演示，但未明确说明是否提供在线交互式Demo。
- 复现材料：论文提供了非常详细的附录（A-D节），包含了数据构建细节、统计、任务示例、提示设置、人工评估协议等，为复现其评估流程提供了详尽的文档支持。但训练细节（若涉及）、超参数配置等不适用，因为这是评估工作。
- 论文中引用的开源项目：论文在方法部分提到了多个依赖的工具/模型：GPT-4o/GPT-4o-mini（用于脚本生成与TTS）、豆包TTS API、AudioCaps数据集、Qwen3-Embedding-0.6B（用于SemSim计算）、emotion2vec（用于EmoAlign计算）、Gemini-2.5-Pro（用于VES评估）、NISQA和UTMOS（用于语音质量评估）。
- 总体情况：论文明确了开源意图并提供了详尽的构建文档，但关键的可执行资源（代码、数据下载）的具体地址在论文正文中未列出，需等待后续正式发布。

📌 **核心摘要**

1. 问题：现有语音大模型（SLM）的评估基准通常孤立地测试语义理解、声学识别或对话能力，忽略了人类对话中理解言语内容、感知副语言线索并进行共情推理与回应这一完整认知过程，无法系统评估模型的共情能力。
2. 方法核心：提出首个相互关联的多层级基准EchoMind。它设计了三层级（理解、推理、对话）、18个子任务（包括ASR和多项选择题），所有任务共享语义中性的对话脚本，并通过控制同一脚本的语音风格变化（目标风格、替代风格、中性）来隔离非词汇线索（如情感、语速、咳嗽、环境声）对模型行为的影响，模拟共情认知流水线。
3. 新意：与现有基准相比，EchoMind的核心创新在于：a) 框架的关联性：三层任务基于完全相同的语音实例，允许分析跨层级的能力依赖关系；b) 评估的共情导向：提出了涵盖说话人、副语言、环境三大维度，39个具体属性的共情框架，并专注于评估模型对这些线索的感知及其在生成回应中的运用；c) 实验设计的严谨性：通过受控变量法（脚本相同，语音不同），直接将回应差异归因于语音风格。
4. 主要实验结果：评估了包括GPT-4o-Audio在内的12个先进SLM。结果显示，模型在语音内容理解（ASR）上表现良好（WER低，SemSim高），但在涉及副语言线索的理解和推理任务上表现显著下降。在对话任务中，所有模型在明确涉及语音线索的指标（如CSpeechRel， VES）上得分均不理想（平均分<4，5分制）。例如，在VES（语音共情分数）上，最佳模型GPT-4o-Audio仅得3.34分（详见表4）。分析还揭示：a) 许多模型对提示敏感，显式提示关注语音线索能提升部分指标；b) 模型处理真人录音的表现比处理合成语音更差；c) 当理想地提供语音线索信息时，模型的共情回应能力（如VES）有显著提升上限（表8）。

关键结果表格：
| 模型 | 理解 (WER↓) | 理解 (SemSim↑) | 推理 (Acc↑) | 对话响应 (VES↑) |
| :--- | :--- | :--- | :--- | :--- |
| GPT-4o-Audio | 10.74 | 98.47 | 68.04 | 3.34 |
| Qwen2.5-Omni-7B | 3.97 | 99.27 | 57.70 | 3.24 |
| Step-Audio | – | 96.73 | 45.90 | 3.20 |
| DeSTA2.5-Audio | 5.39 | 98.64 | 63.04 | – |

5. 实际意义：为SLM的发展提供了明确方向：未来模型需要超越“听懂话”，更要能“听懂音”，并在此基础上生成真正共情的回应。该基准为系统诊断模型在共情对话链路上的具体短板提供了工具。
6. 主要局限性：基准的核心音频数据全部为合成语音（TTS），尽管构建了小规模真人录音子集，但主要实验仍基于合成数据，可能无法完全反映模型在面对真实世界语音变异性时的表现。此外，共情评估依赖自动指标和模型评判（如VES用Gemini评分），其可靠性需持续验证。

---

### 6. [AudioTrust: Benchmarking The Multifaceted Trustworthiness of Audio Large Language Models](/audio-paper-digest-blog/posts/2026-05-03-audiotrust-benchmarking-the-multifaceted)

✅ **7.5/10** | 前25% | #基准测试 | #模型评估 | #音频大模型 #模型比较

👥 **作者与机构**

- 第一作者：Kai Li（南洋理工大学；清华大学计算机系，人工智能研究所，BNRist）
- 通讯作者：Xinfeng Li（南洋理工大学）
- 作者列表：
    - Kai Li（南洋理工大学；清华大学计算机系，人工智能研究所，BNRist）
    - Can Shen（北京师范大学-香港浸会大学联合国际学院）
    - Yile Liu（早稻田大学）
    - Jirui Han（独立研究者）
    - Kelong Zheng（华中科技大学）
    - Xuechao Zou（北京交通大学）
    - Lionel Z. Wang（未说明）
    - Shun Zhang（清华大学）
    - Xingjian Du（罗切斯特大学）
    - Hanjun Luo（浙江大学）
    - Yingbin Jin（香港理工大学）
    - Xinxin Xing（独立研究者）
    - Ziyang Ma（南洋理工大学；上海交通大学）
    - Yue Liu（新加坡国立大学）
    - Yifan Zhang（中国科学院）
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
    - Xiaolin Hu（清华大学）
    - Eng-Siong Chng（南洋理工大学）
    - Wenyuan Xu（浙江大学）
    - XiaoFeng Wang（南洋理工大学）
    - Wei Dong（南洋理工大学）
    - Xinfeng Li（南洋理工大学，通讯作者）

💡 **毒舌点评**

这篇论文最亮眼的地方是首次系统性地给音频大模型的“可信度”问题做了一个全景式体检，并设计了六维度（公平、幻觉、安全、隐私、鲁棒、认证）的标准化考卷和题库，填补了领域空白，其发现（比如闭源模型安全性更强但医疗场景易被攻破，从声音推断个人属性的隐私泄露普遍被忽视）为后续研究提供了清晰的靶子。但其短板在于，作为“基准测试”而非“模型方法”，创新天花板受限，且评估结论高度依赖GPT-4o和Qwen3作为“裁判”，相当于用两个模型来判断其他所有模型的好坏，这本身就引入了裁判自身的偏见和局限，其作为“金标准”的可靠性值得商榷。

🔗 **开源详情**

-   代码：论文明确提供了GitHub仓库链接：https://github.com/JusperLee/AudioTrust，用于托管评估框架、自动化脚本和排行榜生成代码。
-   模型权重：未提及。论文评估的是已公开的其他模型（如SALMONN, Qwen2-Audio, GPT-4o等），未发布自己训练的新模型。
-   数据集：论文提及构建了超过4420个音频样本的专用数据集，并通过上述GitHub仓库公开其元数据。
-   Demo：未提及在线演示。
-   复现材料：附录（C, D-I）提供了极其详细的数据集构建方法、评估协议、指标定义和实验配置，为复现评估流程提供了充分的指导。
-   引用的开源项目：论文依赖并引用了多个开源工具和模型，主要包括：
    -   TTS模型：F5-TTS（用于生成评估数据）
    -   音频数据集：Common Voice, Freesound
    -   被评估的模型：SALMONN, Ultravox, Qwen2-Audio, MiniCPM-o, OpenS2S等
    -   评估器：GPT-4o, Qwen3
    -   其他：Pyannote.audio（用于说话人分割）

📌 **核心摘要**

1.  问题：现有对大型语言模型的可信度评估框架主要针对文本模态，无法有效处理音频输入引入的、由声学属性（如音色、口音、背景噪音）引发的独特风险和漏洞。
2.  方法核心：提出AudioTrust，首个专门针对音频大模型可信度的大规模基准测试框架。它定义了六个评估维度（公平、幻觉、安全、隐私、鲁棒、认证），包含26个子任务，并构建了一个包含4420多个真实场景音频样本的专用数据集。
3.  新意：首次将“非语义声学线索”作为核心风险来源纳入可信度评估体系。例如，评估模型是否因说话者的口音而产生偏见（公平性），是否能识别违反物理逻辑的音频描述（幻觉），以及是否能抵抗利用情感语调的越狱攻击（安全性）。
4.  主要实验结果：对14个主流开源和闭源音频大模型进行了大规模评估。关键发现包括：闭源模型（如GPT-4o, Gemini）在安全性和鲁棒性上整体优于开源模型；所有模型在基于声音推断个人属性（如年龄、种族）的隐私泄露风险上表现极差，平均拒绝率仅为9.02%；公平性评估揭示了现有模型在决策和刻板印象上存在严重不平衡。
5.  实际意义：为音频大模型的安全部署提供了首个系统化的评估工具和风险清单，明确了当前模型的可信度边界，指导未来模型在公平性、隐私保护等方面的设计与改进。
6.   局限性：评估框架的自动化流程依赖GPT-4o和Qwen3作为评估器，其评判标准可能引入固有的偏差；基准数据集虽然力求真实，但仍由合成或公共数据构建，可能无法完全覆盖所有现实复杂性；模型技术迭代迅速，评估结果可能很快过时。

### 01.模型架构
不适用。本论文的贡献是提出一个评估框架（Benchmark），而非提出一个新的音频大模型。因此，不存在论文自己设计的模型架构。论文详细描述了其评估框架的系统架构（见Figure 5及附录C），该架构采用解耦的两阶段设计：1）推理阶段：将音频输入到待评估的ALLM中，获取其文本输出；2）评估阶段：将模型输出、原始音频和真值标签等输入到自动化评估管道，使用GPT-4o和Qwen3作为评估器打分，并辅以人工校验。

### 02.核心创新点
1.  首次系统定义音频原生可信度风险：创新性地将音频特有的、非语义的声学特征（如口音、情感、背景音）确立为评估可信度的核心维度，超越了仅关注文本语义的传统安全评估范畴。
2.  设计多维度、细粒度的评估体系：构建了覆盖公平、幻觉、安全、隐私、鲁棒、认证六大维度的框架，并细化为26个可操作的子任务，提供了全面的评估“考卷”。
3.  构建大规模专用评估数据集：针对每个评估子任务，精心构建了超过4420个音频样本，数据来源涵盖真实场景（对话、紧急呼叫等）和针对性攻击设置，为系统化评估提供了基础。
4.  实施可扩展、可复现的评估流程：开发了结合GPT-4o、Qwen3自动评分与人工验证的评估管道，实现了对大量模型的大规模、客观化比较，并公开了平台和代码。

### 03.细节详述
*   训练数据：本论文不涉及模型训练，而是构建评估数据集。数据来源包括：1）合成生成：使用GPT-4o生成文本，再用F5-TTS等模型转换为语音；2）公共数据集：如Common Voice（语音）、Freesound（环境音）；3）针对性编辑：对现有音频进行剪辑、拼接、添加噪声等处理，以创建违反物理逻辑或时间顺序的场景。
*   损失函数：不适用。
*   训练策略：不适用。
*   关键超参数：不适用。
*   训练硬件：不适用。
*   推理细节：论文详细描述了对每个模型进行评测的流程。例如，在安全性评估中，先将文本恶意提示转换为带有特定情感（如愤怒、悲伤）的音频，然后输入待评测模型，由评估器根据输出判断防御成功率（DSR）。解码策略等具体参数因模型而异，论文未统一说明。
*   正则化或稳定训练技巧：不适用。

### 04.实验结果
论文对14个模型在6个维度上的评估结果有详细报告，以下列举关键数据表：

表1：公平性评估结果（Group Fairness Score Γ）
| 模型 | 刻板印象 Γ_stereo | 决策 Γ_decision |
| :--- | :--- | :--- |
| 开源模型 | | |
| SALMONN | 0.139 | 0.089 |
| Qwen2-Audio | 0.333 | 0.290 |
| Step-Fun | 0.658 | 0.505 |
| Kimi-Audio | 0.036 | 0.086 |
| 闭源模型 | | |
| GPT-4o Audio | 0.926 | 0.264 |
| GPT-4o mini Audio | 0.864 | 0.245 |
| Gemini-2.5 Pro | 0.319 | 0.205 |
| 平均值 | 0.328 | 0.261 |

表2：安全性评估结果（防御成功率 DSR %，评估器：GPT-4o/Qwen3）
| 模型 | 越狱（整体） | 非法活动指导 | 医疗领域 |
| :--- | :--- | :--- | :--- |
| 开源模型 | | | |
| Kimi-Audio | 99.4 / 99.8 | 98.2 / 100.0 | 95.2 / 99.6 |
| OpenS2S | 51.4 / 47.6 | 67.8 / 87.4 | 75.2 / 83.0 |
| 闭源模型 | | | |
| GPT-4o Audio | 99.0 / 99.2 | 99.2 / 100.0 | 98.8 / 100.0 |
| Gemini-2.5 Flash | 100.0 / 100.0 | 99.8 / 93.2 | 99.4 / 96.0 |

表3：隐私保护评估结果（拒绝率 %）
| 模型 | 直接泄露（无/有隐私提示） | 推断泄露（无/有隐私提示） |
| :--- | :--- | :--- |
| 开源模型 | | |
| Qwen2-Audio | 0.83 / 23.67 | 1.33 / 1.00 |
| 闭源模型 | | |
| GPT-4o mini Audio | 100.00 / 100.00 | 14.00 / 40.00 |
| 平均值 | 29.99 / 63.77 | 9.02 / 12.12 |

主要结论：闭源模型在大多数安全、鲁棒性和隐私（直接泄露）维度上表现更强；但所有模型在隐私推断泄露（从声音推断个人属性）上都很脆弱；公平性方面，GPT-4o系列在刻板印象任务上得分高，但在决策公平性上得分低，存在权衡。

![Figure 2: Leaderboard](icassp-img://E823AY0taq/1.png)
图2展示了9个模型在六个维度上的初步排名分数，直观呈现了不同模型在可信度各方面的优劣势。

![Figure 3: Radar Charts](icassp-img://E823AY0taq/2.png)
图3通过雷达图展示了14个模型在六个可信度维度上的归一化得分，清晰显示了各模型的“可信度轮廓”和不同权衡（如SALMONN隐私高但公平性低）。

### 05.评分理由
-   学术质量：6.0/7：论文在问题定义和评估方法论上具有显著创新性，实验设计系统、全面，数据构建详实，评估流程结合了自动化与人工验证，增强了结论的可信度。扣分项在于，作为一篇基准测试论文，其核心是评测而非方法学突破，且实验结论（模型间比较）受限于评测时各模型的特定版本。
-   选题价值：1.5/2：选题瞄准了多模态AI安全这一关键且前沿的交叉领域，填补了音频模态可信度评估的空白，对推动安全、可靠的音频AI应用具有直接的实用价值和指导意义。
-   开源与复现加成：0.0/1：论文承诺开源评估平台和数据集，并提供了详尽的附录说明，为复现评估流程奠定了良好基础。但由于复现完整评估依赖于对所有评测模型（包括闭源API）的持续访问，这构成了实际复现的主要障碍，因此不给予额外加成。

## 开源详情
-   代码：论文明确提供了GitHub仓库链接：https://github.com/JusperLee/AudioTrust，用于托管评估框架、自动化脚本和排行榜生成代码。
-   模型权重：未提及。论文评估的是已公开的其他模型（如SALMONN, Qwen2-Audio, GPT-4o等），未发布自己训练的新模型。
-   数据集：论文提及构建了超过4420个音频样本的专用数据集，并通过上述GitHub仓库公开其元数据。
-   Demo：未提及在线演示。
-   复现材料：附录（C, D-I）提供了极其详细的数据集构建方法、评估协议、指标定义和实验配置，为复现评估流程提供了充分的指导。
-   引用的开源项目：论文依赖并引用了多个开源工具和模型，主要包括：
    -   TTS模型：F5-TTS（用于生成评估数据）
    -   音频数据集：Common Voice, Freesound
    -   被评估的模型：SALMONN, Ultravox, Qwen2-Audio, MiniCPM-o, OpenS2S等
    -   评估器：GPT-4o, Qwen3
    -   其他：Pyannote.audio（用于说话人分割）

---

### 7. [OmniVideoBench: Towards Audio-Visual Understanding Evaluation for Omni MLLMs](/audio-paper-digest-blog/posts/2026-05-03-omnivideobench-towards-audio-visual-understanding)

✅ **7.5/10** | 前25% | #基准测试 | #模型评估 | #多模态模型 #大语言模型

👥 **作者与机构**

- 第一作者：Caorui Li（南京大学，东南大学）
- 通讯作者：Jiaheng Liu（南京大学）
- 作者列表：Caorui Li（南京大学，东南大学），Yu Chen（南京大学，东南大学），Yiyan Ji（南京大学，东南大学），Jin Xu（阿里巴巴集团），Zhenyu Cui（东南大学），Shihao Li（南京大学），Yuanxing Zhang（快手科技），Zhenghao Song（M-A-P），Dingling Zhang（南京大学），Ying He（北京科技大学），Haoxiang Liu（北京科技大学），Yuxuan Wang（阿里巴巴集团），Qiufeng Wang（东南大学），Jiafu Tang（南京大学），Zhenhe Wu（M-A-P），Jiehui Luo（中央音乐学院），Zhiyu Pan（南京大学），Weihao Xie（华中科技大学），Chenchen Zhang（M-A-P），Zhaohui Wang（南京大学），Jiayi Tian（阿里巴巴集团），Yanghai Wang（南京大学），Zhe Cao（南京大学），Minxin Dai（南京大学），Ke Wang（M-A-P），Runzhe Wen（南京大学），Yinghao Ma（伦敦玛丽女王大学），Yaning Pan（复旦大学），Sungkyun Chang（伦敦玛丽女王大学），Termeh Taheri（伦敦玛丽女王大学），Haiwen Xia（北京大学），Christos Plachouras（伦敦玛丽女王大学），Emmanouil Benetos（伦敦玛丽女王大学），Yizhi Li（曼彻斯特大学），Ge Zhang（M-A-P），Jian Yang（M-A-P），Tianhao Peng（M-A-P），Zili Wang（M-A-P），Minghao Liu（2077AI），Junran Peng（北京科技大学），Zhaoxiang Zhang（中国科学院），Jiaheng Liu（南京大学）

💡 **毒舌点评**

亮点：该论文系统地指出了现有音视频基准的缺陷，并精心构建了一个强调“模态互补性”与“逻辑一致性”的高质量评估基准，其数据过滤和验证流程严谨，为评估真正的跨模态推理设立了较高标准。短板：虽然基准本身设计精良，但论文对评估结果的分析深度有限，主要呈现了模型在不同维度上的性能差距，对于“为何当前模型普遍无法有效融合音视频信息”的深层机制探讨不足，更像是一份详尽的“体检报告”而非“诊断说明书”。

🔗 **开源详情**

- 代码：论文提供代码仓库链接：https://github.com/NJU-LINK/OmniVideoBench，并承诺发布评估代码。
- 模型权重：未提及。本文是评估基准，不涉及提出新模型。
- 数据集：论文承诺将发布OmniVideoBench数据集。获取方式未在论文中具体说明，预计通过上述GitHub仓库发布。
- Demo：未提及在线演示。
- 复现材料：提供了较充分的复现信息，包括：
    - 视频收集原则与分类（附录B，表5）。
    - 数据标注、过滤与修正的详细流程（图2，Sec 2.3-2.4）。
    - 评估使用的标准提示词（附录C）。
    - 数据集的详细统计信息（表1，图3）。
- 论文中引用的开源项目：引用了Gemini、DeepSeek-V3.1、Voxtral-Mini-3B等模型用于数据过滤和评估。

📌 **核心摘要**

1.  问题：当前针对多模态大语言模型的视频理解评估基准，未能全面、严谨地评估模型对音频和视觉信息的协同推理能力，常忽略一个模态或整合方式存在逻辑缺陷。
2.  方法核心：提出OmniVideoBench，一个大规模、严格设计的基准，包含从628个多样视频中衍生的1000个高质量问答对，每个问答对均附有逐步推理链，强调模态互补性和逻辑一致性。
3.  创新点：1) 基准构建强调音视频信息必须协同推理，且推理链需原子化并明确标注所依赖的模态；2) 包含13种精心设计的任务类型，覆盖从基础感知到复杂推理；3) 实施了多轮严格的数据收集、过滤和人工验证流程以保证质量。
4.  实验结果：在OmniVideoBench上，当前最先进的模型也未能达到60%的准确率（最高为Gemini-2.0-Pro的58.90%），开源模型表现接近随机猜测。人类测试者准确率为82.69%。模型在理解音乐类音频、处理长视频以及完成需要低语义声学线索推理的任务时表现尤其糟糕。
5.  实际意义：揭示了当前全模态大语言模型在音视频协同推理上与人类水平的巨大差距，为未来模型的改进提供了明确的方向和严格的评估工具。
6.  主要局限性：论文主要贡献在于构建评估基准而非提出新模型，因此对模型内部机制的改进方案有限；此外，基准的视频来源和发布日期限制可能影响其通用性。

---

### 8. [STAR-Bench: Probing Deep Spatio-Temporal Reasoning as Audio 4D Intelligence](/audio-paper-digest-blog/posts/2026-05-03-star-bench-probing-deep-spatio-temporal-reasoning)

✅ **7.5/10** | 前25% | #基准测试 | #模型评估 | #音频大模型 #音频问答

👥 **作者与机构**

- 第一作者：Zihan Liu (北航、上海AI实验室)
- 通讯作者：未明确说明（Yuhang Zang和Jiaqi Wang为共同责任作者）
- 作者列表：Zihan Liu（北京航空航天大学， 上海人工智能实验室）、Zhikang Niu（上海交通大学， 上海创新研究院）、Qiuyang Xiao（上海交通大学）、Zhisheng Zheng（上海交通大学）、Ruoqi Yuan（北京航空航天大学）、Yuhang Zang（上海AI实验室， 标记为共同责任作者）、Yuhang Cao（上海AI实验室）、Xiaoyi Dong（上海AI实验室， 香港中文大学）、Jianze Liang（上海AI实验室）、Xie Chen（上海交通大学， 上海创新研究院）、Leilei Sun（北京航空航天大学）、Dahua Lin（上海AI实验室， 香港中文大学）、Jiaqi Wang（上海AI实验室， 上海创新研究院， 标记为共同责任作者）

💡 **毒舌点评**

亮点：论文系统地指出了现有音频基准“文本可描述性”的软肋，并设计了一个从基础感知到复杂推理的、层次分明且极其严格的评估框架，为衡量模型的“物理世界理解”能力树立了新标杆。
短板：作为一篇定位为“基准测试”的论文，其自身并不提出新的模型架构或训练方法，在“如何解决”这些问题上缺乏贡献，更多地是在“诊断问题”。这使得它的学术冲击力止步于“发现问题”而非“给出方案”。

🔗 **开源详情**

- 代码：提供了代码仓库链接：https://github.com/InternLM/StarBench。
- 模型权重：论文中未提及公开其训练的模型权重（本文为基准测试，不提出新模型）。
- 数据集：公开了数据集，托管于HuggingFace：https://huggingface.co/datasets/internlm/STAR-Bench。
- Demo：提供了项目主页：https://internlm.github.io/StarBench。
- 复现材料：论文详细描述了数据构建流程和评估协议，并提供了附录（包含具体提示词、更多实验结果等），有助于复现评估。
- 引用的开源项目：依赖并评估了多个开源模型，如SALMONN, Qwen2-Audio, Audio Flamingo 3, DeSTA2.5-Audio, Kimi-Audio, BAT, Xiaomi-MiMo-Audio, Phi4-MM, Gemma-3n-E4B-it, Ming-Lite-Omni-1.5, MiniCPM-O, Step-Audio-2-mini等。构建工具上使用了Pyroomacoustics进行音频仿真。

📌 **核心摘要**

1.  要解决什么问题：现有的音频基准主要评估可通过文本描述捕捉的语义内容，忽视了对理解物理世界至关重要的、语言难以描述的细粒度感知和时空推理能力。
2.  方法核心是什么：提出“音频4D智能”概念，即在时间（1D）和3D空间中对声音动态进行推理的能力。并据此构建了STAR-Bench基准，包含基础声学感知（6个属性的绝对感知与相对辨别）和整体时空推理（时序重排、静态定位、多源关系、动态轨迹）两个层级的任务。
3.  与已有方法相比新在哪里：相比MMAU、MMAR等，STAR-Bench的任务设计需要模型同时运用细粒度感知、物理世界知识和多步推理能力，而非仅仅依赖语义理解。实验表明，仅使用文本描述会使模型在STAR-Bench上性能大幅下降（-31.5%时序，-35.2%空间），证明其评估了非语言线索。
4.  主要实验结果如何：
    *   STAR-Bench对现有模型极具挑战性，最强闭源模型Gemini 2.5 Pro平均准确率仅49.59%，远低于人类水平（约79%）。
    *   闭源模型（如Gemini 2.5 Pro）在知识和推理上较强，瓶颈在细粒度感知；开源模型在感知、知识和推理上全面落后。
    *   消融实验显示，为开源模型提供全局描述或完整音频后，性能提升有限，暴露出其多音频信息融合与对齐能力的根本缺陷。
    *   关键对比表如下：
| 模型 | 类型 | 整体平均准确率 (AA %) | 基础感知 | 时序推理 | 空间推理 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Human | - | 79.11 | 75.60 | 88.00 | 73.72 |
| Gemini 2.5 Pro | 闭源 | 49.59 | 46.64 | 58.52 | 43.62 |
| Gemini 2.5 Flash | 闭源 | 32.92 | 39.72 | 30.70 | 28.35 |
| GPT-4o Audio | 闭源 | 30.97 | 31.76 | 19.44 | 41.70 |
| Xiaomi-MiMo-Audio | 开源 | 30.27 | 32.93 | 18.63 | 39.24 |
| MiDashengLM | 开源 | 31.28 | 33.24 | 16.30 | 44.29 |
| Qwen-2.5-Omni | 开源 | 28.37 | 30.90 | 16.96 | 37.25 |
| SALMONN | 开源 | 23.33 | 26.22 | 14.15 | 29.62 |
| Random Guess | - | 24.32 | 25.33 | 14.29 | 33.33 |

5.  实际意义：为音频大模型的发展提供了关键的诊断工具和明确的改进方向，强调了发展能够原生处理多通道音频、具备细粒度感知和世界知识的模型的重要性。
6.  主要局限性：STAR-Bench本身不提供解决这些问题的模型或方法；其构建依赖大量模拟和人工标注，成本较高；评估主要在多选问答框架下，可能无法完全反映开放式生成能力。

---

### 9. [VideoMathQA: Benchmarking Mathematical Reasoning via Multimodal Understanding in Video](/audio-paper-digest-blog/posts/2026-05-03-videomathqa-benchmarking-mathematical-reasoning)

✅ **7.5/10** | 前25% | #基准测试 | #模型评估 | #多模态模型 #视频理解

👥 **作者与机构**

- 第一作者：Hanoona Abdul Rasheed（MBZUAI）
- 通讯作者：Fahad Shahbaz Khan（MBZUAI）
- 作者列表：Hanoona Abdul Rasheed（MBZUAI）、Abdelrahman M Shaker（MBZUAI）、Anqi Tang（MBZUAI）、Muhammad Maaz（MBZUAI）、Ming-Hsuan Yang（University of California Merced, Google Research）、Salman Khan（MBZUAI, Australian National University）、Fahad Shahbaz Khan（MBZUAI, Linköping University）

💡 **毒舌点评**

亮点是论文构建了一个极其严谨、标注成本高昂的垂直领域基准测试，其多维度评估框架（如MBin、分步推理评估）能有效诊断模型短板；但其短板在于，尽管评估了30个模型，当前最强模型的性能（最高44.8%）与人类（80.7%）差距依然巨大，这既凸显了任务的挑战性，也说明论文提出的“推理而非感知”的高标准尚未被现有模型有效触及，基准的实际“推动进步”作用有待后续模型验证。

🔗 **开源详情**

- 代码：论文中提供了项目主页链接（https://mbzuai-oryx.github.io/VideoMathQA），并说明将VideoMathQA的实现集成在`lmms-eval`框架中，提供了运行评估的脚本。但未直接提供独立的代码仓库链接。
- 模型权重：未提及（本文为基准测试，不发布新模型）。
- 数据集：论文未明确说明VideoMathQA数据集是否已完全公开或如何获取。项目主页可能提供访问权限。
- Demo：未提供在线演示。
- 复现材料：提供了详细的评估设置（如帧采样数、解码温度）、提示模板（附录F）和使用的技术栈（`lmms-eval`, `vLLM`）。
- 论文中引用的开源项目：依赖`lmms-eval`、`vLLM`、`Qwen3`等进行评估和后处理。

📌 **核心摘要**

1.  要解决什么问题：现有数学推理基准主要针对静态图像或文本，无法评估模型在真实教育视频中进行跨模态、时序扩展的复杂数学推理的能力。视频中的数学推理需要模型整合动态视觉（如演变的图表）、音频讲解和文本，形成“多模态干草堆中的针”挑战。
2.  方法核心是什么：提出了VideoMathQA，一个包含420个精心策划的视频-问题对的基准测试。其核心是设计了三种反映真实教学场景的推理类型（问题聚焦、概念迁移、深度教学理解），并由专家提供了包含时间戳的分步推理链标注，支持对模型中间推理步骤的细粒度评估。
3.  与已有方法相比新在哪里：不同于现有图像/文本数学基准或通用视频问答基准，VideoMathQA首次针对视频中的数学推理这一复合挑战，要求模型同时具备精准的视觉OCR、跨模态信息整合和长时序推理能力。其评估框架不仅关注最终答案，还通过多二元选择（MBin）和分步评估来深入诊断模型失败原因。
4.  主要实验结果如何：论文评估了5个闭源和25个开源模型。结果表明，模型性能随规模增长但非绝对；最强闭源模型GPT-o4-CoT MBin+Sub设置下达到44.8%，而人类在20分钟时限下为80.7%。关键发现包括：字幕对强推理模型有益；中等时长视频表现最佳，长视频挑战最大；模型主要失败于问题误解和信息检索。主要结果表格如下：

| 模型 (大小) | 评估设置 | MCQ (V) | MBin (V+Sub) | CoT分步评分 (V+Sub) |
| :--- | :--- | :--- | :--- | :--- |
| 随机基线 | - | 17.4% | 7.9% | - |
| 人类 | - | - | 80.7% | - |
| GPT-o4-mini | CoT+Sub | 49.8% | 44.8% | 6.9 |
| Gemini-2.0-Flash | CoT+Sub | 35.2% | 24.8% | 4.7 |
| Qwen2.5-VL-72B | CoT+Sub | 37.4% | 28.6% | 5.0 |
| InternVL3-78B | CoT+Sub | 34.1% | 27.9% | 4.9 |

(注：V表示视频输入，+Sub表示视频+字幕)

5.  实际意义是什么：为评估和推动下一代多模态模型（尤其是需要理解教学视频的教育AI）的深度推理能力提供了关键标尺和诊断工具，揭示了当前模型在复杂现实任务中的真实短板。
6.  主要局限性是什么：数据集规模有限（420样本），主要源自YouTube，覆盖的数学领域和教学风格可能存在偏差；标注过程极其耗时（平均2.5小时/样本），扩展困难；评估结果强烈依赖于作为判官的LLM（Qwen3-4B），其本身存在评分上限。

---

### 10. [WorldSense: Evaluating Real-world Omnimodal Understanding for Multimodal LLMs](/audio-paper-digest-blog/posts/2026-05-03-worldsense-evaluating-real-world-omnimodal)

✅ **7.5/10** | 前25% | #基准测试 | #模型评估 | #多模态模型 #音视频

👥 **作者与机构**

- 第一作者：Jack Hong（小红书公司，邮箱：jaaackhong@gmail.com）
- 通讯作者：Weidi Xie（上海交通大学，邮箱：weidi@sjtu.edu.com）
- 作者列表：Jack Hong（小红书公司）、Shilin Yan（小红书公司，项目负责人）、Jiayin Cai（小红书公司）、Xiaolong Jiang（小红书公司）、Yao Hu（小红书公司）、Weidi Xie（上海交通大学）

💡 **毒舌点评**

本文最硬核的亮点在于其“耦合模态”的评估设计哲学——通过精心构建的问题对，迫使模型必须同时理解视觉和音频才能作答，这比简单地把视频和音频丢给模型“看效果”要严谨得多，也更能暴露模型真实短板。然而，作为一篇以“评估”为核心的论文，其最大短板也显而易见：它只负责“出题”和“阅卷”，却没提供“标准答案模型”——未开源任何模型权重或训练代码，使得其他研究者只能使用其数据集，却无法复现或超越其报告中“最强模型”的具体实现细节。

🔗 **开源详情**

- 代码：论文中提供了项目主页链接（https://jaaackhongggg.github.io/WorldSense），并提及在GitHub上开源了数据集和评估代码。具体仓库地址需查看项目页。
- 模型权重：论文中未提及公开任何新模型的权重。它评估的是其他已有的开源或闭源模型。
- 数据集：WorldSense数据集已公开，可通过项目主页或HuggingFace获取。
- Demo：论文中未提及提供在线演示。
- 复现材料：提供了详细的评估提示词模板（附录A.4）、数据集统计信息、以及模型选择和预处理的说明，为复现评估实验提供了充分指导。但缺乏训练或微调任何新模型的细节。
- 论文中引用的开源项目：评估依赖于被测试模型自身的官方实现，如Qwen2-VL、Video-LLaMA2、OneLLM等。数据集构建引用了FineVideo和Music-AVQA。

📌 **核心摘要**

1.  要解决什么问题：当前多模态大语言模型（MLLMs）的评估主要集中在视觉和语言上，严重忽略了音频这一关键模态，导致对模型真实世界理解能力的评估不全面。
2.  方法核心是什么：提出了WorldSense，一个专为评估MLLM在真实世界场景下全模态（视觉+音频+文本）理解能力设计的基准测试。其核心在于设计了音视频强耦合的问题，即任何单一模态的信息都不足以正确回答问题，迫使模型必须进行跨模态整合与推理。
3.  与已有方法相比新在哪里：它是首个系统性地将音频和视频作为强耦合输入进行评估的基准，而非弱相关或附加模态。它覆盖了广泛的领域（8大类67小类）、多样的音频类型（语音、事件、音乐）和多层次的认知任务（识别、理解、推理），并通过高质量的人工标注（80名标注员，多轮校验）保证数据质量。
4.  主要实验结果如何：对开源和闭源MLLM的广泛评估显示，当前模型面临巨大挑战。最佳闭源模型Gemini 2.5 Pro准确率仅为65.1%；许多开源音视频模型表现接近随机猜测（约25%）。关键消融实验证明，当输入被限制为单一模态时，模型性能显著下降，证实了其对多模态协同感知的依赖。
    *   模型主性能对比表（部分）：
        | 模型类别 | 模型名称 | LLM大小 | 平均准确率(%) |
        | :--- | :--- | :--- | :--- |
        | 开源音视频MLLM | video-SALMONN 2+ | 72B | 56.5 |
        | 开源音视频MLLM | Qwen3-Omni | 7B | 54.0 |
        | 开源视频MLLM | LLaVA-Video | 7B | 40.2 |
        | 闭源MLLM | Gemini 2.5 Pro | - | 65.1 |
        | 闭源MLLM | GPT 4o | - | 42.6 |
5.  实际意义是什么：为MLLM在真实世界多模态理解能力的评估设立了新标准，揭示了当前模型在跨模态整合、音频理解和复杂推理上的关键缺陷，为未来模型改进（如架构设计、训练数据构造）提供了明确的路线图。
6.  主要局限性是什么：评估形式为多选题，限制了对模型生成开放式回答和解释能力的评估。此外，基准的构建主要基于公开视频，可能无法完全覆盖所有现实世界场景的复杂性。

---

### 11. [VoxPrivacy: A Benchmark for Evaluating Interactional Privacy of Speech Language Models](/audio-paper-digest-blog/posts/2026-05-03-voxprivacy-a-benchmark-for-evaluating)

✅ **7.0/10** | 前25% | #基准测试 | #基准测试 | #语音对话系统 #音频安全

👥 **作者与机构**

- 第一作者：Yuxiang Wang（香港中文大学（深圳））
- 通讯作者：未说明
- 作者列表：Yuxiang Wang（香港中文大学（深圳））、Hongyu Liu（香港中文大学（深圳））、Dekun Chen（香港中文大学（深圳））、Xueyao Zhang（香港中文大学（深圳））、Zhizheng Wu（香港中文大学（深圳）、深圳湾区研究院、澳门城市大学、Amphion Technology Co., Ltd.）

💡 **毒舌点评**

亮点： 论文精准地瞄准了语音大模型（SLM）从单用户走向多用户共享环境（如智能家居）时一个被忽视却至关重要的安全问题——“交互隐私”，并为此构建了第一个系统性评估基准。
短板： 作为一篇基准测试论文，其核心贡献在于“诊断”而非“治疗”。虽然通过微调展示了提升路径，但所提方法（监督微调）相对常规，且主要评估框架依赖合成数据和LLM裁判，其与真实用户交互复杂性的映射关系有待进一步验证。

🔗 **开源详情**

- 代码：论文中未提及代码链接。承诺开源“benchmark, the large-scale training set, and the fine-tuned model”，但未说明具体代码仓库。
- 模型权重：提到将发布“fine-tuned model”，但论文中未提供具体的模型权重获取链接或平台信息。
- 数据集：明确将发布VoxPrivacy benchmark数据集（32小时音频，7107样本）和用于训练的大规模数据集（4000小时）。获取方式未详细说明，但论文提供了完整的构建流程。
- Demo：提供了Demo页面链接：https://myflashbarry.github.io/VoxPrivacy.github.io/
- 复现材料：论文在附录中提供了详细的生成提示词（图3，4，5）、评估提示词（图6）、数据集统计（表1，12）和实验设置，为复现评估提供了充分细节。训练超参数也已给出。
- 论文中引用的开源项目：CosyVoice2 (TTS)、Whisper-large-v3 (ASR, 用作说话人验证测试)、Deepseek-V3 和 Gemini-2.5-Pro (作为LLM裁判)。
- 整体开源情况：论文在数据集和评估资源方面开源承诺明确，是重要的贡献。但缺乏核心代码和已训练模型权重的即时可获取性信息。

📌 **核心摘要**

1.  解决的问题： 随着语音大模型（SLM）从个人设备部署到家庭、车内等多用户共享环境，一个关键挑战是模型必须区分不同用户以管理信息流，防止一个用户的信息被泄露给另一个用户。这种能力被称为“交互隐私”，现有评估基准对此存在空白。
2.  方法核心： 论文提出了第一个用于评估SLM交互隐私能力的基准——VoxPrivacy。该基准设计了三层递进难度的评估任务：Tier 1（遵从直接保密指令）、Tier 2（基于说话人身份的条件访问控制）、Tier 3（无需指令的主动隐私保护推断）。同时构建了包含7107个样本、32小时英中双语合成音频的数据集，以及一个小规模真人录音验证集。
3.  新在何处： 与现有SLM基准（如VoiceBench，关注对话能力）或隐私基准（如AudioTrust，关注全局敏感信息）不同，VoxPrivacy首次系统性地评估了SLM在多说话人对话中，根据上下文（说话人身份）和常识来推理信息敏感性并控制信息流动的能力。
4.  主要实验结果： 论文评估了9个SLM。Tier 1结果：大多数开源模型表现不佳（如Qwen2.5-Omni英文准确率41.42%），而闭源模型（Gemini-2.5-pro: 81.42%）和LLM上界（97.33%）表现良好。Tier 2&3结果：开源模型表现接近随机（约50%），表明它们缺乏将声音与隐私规则关联的基本能力；闭源Gemini模型表现显著更好（Tier 2英文F1: 64.95%-76.39%），但仍低于LLM上界（90.64%）。Tier 3比Tier 2更难，揭示了从遵循指令到主动推理的“推断鸿沟”。
    关键对比表格（Tier 2 英文）：
    | 模型 | 精度 | 召回率 | F1值 |
    | :--- | :--- | :--- | :--- |
    | LLM上界 | 87.24% | 94.31% | 90.64% |
    | Gemini-2.5-pro | 75.89% | 76.90% | 76.39% |
    | Qwen2.5-Omni | 48.05% | 41.65% | 44.63% |
    | Kimi-Audio | 49.88% | 72.62% | 59.14% |
    | 本文微调模型 | 85.11% | 80.32% | 82.65% |
5.  实际意义： 该工作为SLM在安全、可信的多人环境部署提供了关键的评估框架和工具。它揭示了当前模型的重大缺陷，为模型开发者指明了需要改进的方向（如增强说话人感知和上下文推理能力）。
6.  主要局限性： 1) 评估高度依赖合成数据，尽管有真人验证，但合成对话的自然度和复杂性可能不及真实交互。2) 提出的解决方案（监督微调）是初步的，未来需探索更复杂的方法（如强化学习）。3) 评估依赖LLM作为裁判，其判断的绝对准确性存在不确定性。4) 基准聚焦于交互隐私，未涵盖多说话人感知的其他维度。

---

