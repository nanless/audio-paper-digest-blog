---
title: "ICLR 2026 - 语音识别 论文列表"
date: 2026-05-02
draft: false
tags: ["语音识别"]
categories: [iclr-2026]
description: "共 6 篇 ICLR 2026 语音识别 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音识别

共 **6** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Speech-to-LaTeX: New Models and Datasets for Converting Spok](/audio-paper-digest-blog/posts/2026-05-02-speech-to-latex-new-models-and-datasets-for) | 8.5分 | 前25% |
| 🥈 | [Pay Attention to CTC: Fast and Robust Pseudo-Labelling for U](/audio-paper-digest-blog/posts/2026-05-02-pay-attention-to-ctc-fast-and-robust-pseudo) | 8.5分 | 前25% |
| 🥉 | [A cross-species neural foundation model for end-to-end speec](/audio-paper-digest-blog/posts/2026-05-02-a-cross-species-neural-foundation-model-for-end) | 8.0分 | 前25% |
| 4. | [Confident and Adaptive Generative Speech Recognition via Ris](/audio-paper-digest-blog/posts/2026-05-02-confident-and-adaptive-generative-speech) | 8.0分 | 前50% |
| 5. | [CTC-DRO: Robust Optimization for Reducing Language Dispariti](/audio-paper-digest-blog/posts/2026-05-02-ctc-dro-robust-optimization-for-reducing-language) | 8.0分 | 前25% |
| 6. | [SumRA: Parameter Efficient Fine-tuning with Singular Value D](/audio-paper-digest-blog/posts/2026-05-02-sumra-parameter-efficient-fine-tuning-with) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences](/audio-paper-digest-blog/posts/2026-05-02-speech-to-latex-new-models-and-datasets-for)

🔥 **8.5/10** | 前25% | #语音识别 | #多模态模型 | #数据集 #多语言

👥 **作者与机构**

- 第一作者：Dmitrii Korzh (1 AXXX, Moscow, Russia; 2 MTUCI, Moscow, Russia)
- 通讯作者：未说明
- 作者列表：
  - Dmitrii Korzh (AXXX, MTUCI)
  - Dmitrii Tarasov (FusionBrain Lab, AXXX; HSE University)
  - Artyom Iudin (AXXX, MTUCI)
  - Elvir Karimov (AXXX, MTUCI; Applied AI Institute)
  - Matvey Skripkin (FusionBrain Lab, AXXX; Applied AI Institute)
  - Nikita Kuzmin (AXXX, MTUCI; Applied AI Institute)
  - Andrey Kuznetsov (FusionBrain Lab, AXXX; Innopolis University)
  - Oleg Y. Rogov (AXXX, MTUCI; Applied AI Institute)
  - Ivan Oseledets (AXXX, MTUCI; Applied AI Institute; Moscow State University)

💡 **毒舌点评**

这篇论文的最大亮点在于“基建狂魔”式的工作——用超过63万个人工/合成音频样本，硬生生为一个垂直领域（语音转LaTeX）打造了首个大规模开源数据集和完整的方法论基准，其数据构建的严谨性和开源精神值得称赞。但短板也很明显：号称“端到端”的SALMONN模型（图1b）其实只是在现有音频LLM上微调，且其对复杂数学语句（Table 3）的预测仍显示模型对深层语义理解有限，多数时候只是在做更精准的“符号匹配”。

🔗 **开源详情**

- 代码：提供GitHub仓库链接：`https://github.com/dkorzh10/speech2latex`。
- 模型权重：论文中未提及是否公开微调后的模型权重。仅提到使用了Qwen2.5、SALMONN等基础模型的开源权重。
- 数据集：完整数据集已开源，可通过HuggingFace获取：`https://huggingface.co/datasets/marsianin500/Speech2Latex`。
- Demo：未提及在线演示。
- 复现材料：提供了详尽的训练超参数（附录B）、数据处理流程描述、评估指标说明（附录A.2）以及用于LaTeX归一化的KaTeX fork。复现信息非常充分。
- 论文中引用的开源项目：Whisper, BEATs, Qwen2.5/Qwen2.5-Math系列, SALMONN, LLaMA, Gemma 3n, Audio Flamingo-3, XTTSv2, KaTeX, LoRA。

📌 **核心摘要**

1. 要解决的问题：将语音（特别是包含复杂数学表达式和句子的语音）准确转换为结构化的LaTeX格式，现有方法局限于孤立方程、依赖多次ASR转录、且缺乏大规模开源数据集和多语言支持。
2. 方法核心：构建了首个大规模开源S2L数据集（S2L-equations和S2L-sentences，共约63k人工标注和571k合成音频）。提出了两种方法：a) ASR后处理管线（使用Whisper转录，然后用微调的语言模型如Qwen2.5将文本转换为LaTeX）；b) 多模态端到端模型（如SALMONN），直接将音频和文本提示输入音频大模型生成LaTeX。
3. 与已有方法相比新在哪里：a) 提供了首个覆盖英语和俄语、包含孤立方程和上下文句子的大规模开源数据集；b) 首次系统评估了多模端到端方法（Audio-LLM）在此任务上的可行性；c) 提出了更贴合实际应用的S2L-sentences基准（包含文本和内嵌公式）。
4. 主要实验结果：在孤立方程（S2L-equations）的英语测试集上，最佳后处理模型（Qwen2.5-1.5B）CER为27.2%，最佳端到端模型（SALMONN-13B）CER为17.5%，均显著优于MathSpeech基线（64.0%）。在数学语句（S2L-sentences）上，SALMONN-13B的方程CER达到39.7%，句子文本CER为9.6%。详见下表：

表2（节选）：S2L-Equations 英语测试集结果（CER↓, TeXBLEU↑）
| 模型 | 训练数据 | 测试集 | CER | TeXBLEU |
| :--- | :--- | :--- | :--- | :--- |
| MathSpeech | MS-train | Eng | 64.04 | 83.71 |
| Qwen2.5-0.5B | Mix-full | Eng | 27.21 | 90.20 |
| SALMONN-13B | Mix-full | Eng | 17.50 | 93.68 |

表5（节选）：S2L-Sentences 人类标注测试集结果（CER↓）
| 模型 | 训练数据 | 测试集 | 句子CER | 文本CER | 方程CER | 方程TeXBLEU |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Qwen2.5-0.5B | H | H | 29.18 | 23.13 | 56.93 | 83.22 |
| SALMONN-13B | Mix | H | 15.43 | 9.57 | 39.68 | 85.76 |

5. 实际意义：为教育（如讲座自动转录为LaTeX笔记）、辅助视障人士理解数学内容、以及推动多模态AI在科学领域的应用奠定了关键基础。
6. 主要局限性：数据集虽大但未完全覆盖真实讲座场景（如视觉依赖、不完整表达）；模型在处理语音歧义（如“one over x plus two”）和复杂嵌套结构时仍有挑战；端到端模型计算成本高，而轻量级后处理模型的性能依赖于ASR转录质量。

---

### 🥈 [Pay Attention to CTC: Fast and Robust Pseudo-Labelling for Unified Speech Recognition](/audio-paper-digest-blog/posts/2026-05-02-pay-attention-to-ctc-fast-and-robust-pseudo)

🔥 **8.5/10** | 前25% | #语音识别 | #自回归模型 | #音视频 #低资源

👥 **作者与机构**

- 第一作者：Alexandros Haliassos（NatWest AI Research & Imperial College London）
- 通讯作者：未明确说明
- 作者列表：Alexandros Haliassos（NatWest AI Research & Imperial College London），Rodrigo Mira（NatWest AI Research），Stavros Petridis（NatWest AI Research & Imperial College London）

💡 **毒舌点评**

这篇论文把CTC这个“老实人”的稳健和注意力“艺术家”的表达力在伪标签阶段强行撮合，用“老师傅带路”的方式训练学生，既省了计算又抗了噪，想法相当机灵。但可惜的是，这种“撮合”在分布外场景下也暴露了局限性，当CTC预测本身出错时，错误的传导依然存在，且论文对更极端的分布偏移（如完全不同的语言或方言）验证不足。

🔗 **开源详情**

- 代码：论文明确指出代码在补充材料中提供，并多次引用其GitHub仓库链接（例如https://github.com/ahaliassos/usr），表明代码会开源。
- 模型权重：未明确提及是否提供预训练模型权重的下载链接。
- 数据集：论文使用了多个公开数据集（LRS3, LRS2, VoxCeleb2, AVSpeech, WildVSR, LibriSpeech），并提供了数据采样列表（用于OOD评估）。
- Demo：未提及。
- 复现材料：提供了极其详细的复现材料，包括：不同模型大小和数据集的完整超参数表（表5、表6）、数据预处理步骤、训练代码配置（论文附带）、评估代码。附录提供了额外的实验细节和消融结果。
- 依赖的开源项目：ESPnet（用于联合CTC-注意力解码）、SentencePiece（分词器）。
- 开源计划：论文中明确提供了代码仓库信息，表明有开源计划。

📌 **核心摘要**

1. 要解决什么问题：现有的统一语音识别（USR）框架依赖自回归伪标签生成，计算成本高，且CTC与注意力分支解耦的监督方式使其在分布外输入（如长语音、噪声）上容易产生自我强化的错误。
2. 方法核心是什么：提出USR 2.0，其核心是CTC驱动的教师强制：用教师模型贪心解码的CTC输出作为输入，通过一次前向计算生成注意力伪标签，避免了自回归解码的瓶颈。同时，由于CTC和注意力伪标签长度对齐，学生解码器可以同时预测两者，耦合了两个分支。为缓解训练-测试不匹配的暴露偏差，引入了混合采样策略，交替使用CTC驱动模式和标准自回归模式进行伪标签生成。
3. 与已有方法相比新在哪里：首次在伪标签生成阶段，用CTC输出并行地、高效地生成注意力伪标签，替代了缓慢的自回归解码。通过让解码器同时监督CTC和注意力伪标签，将CTC的鲁棒性“注入”到解码器中，打破了原USR中两个分支的解耦状态。训练效率提升近2倍，且显著提升了模型在分布外场景的鲁棒性。
4. 主要实验结果如何：
    * 效率：训练时间减半（图5）。
    * 鲁棒性：在长语音（VoxCeleb2）、噪声（LRS3加噪）和分布外数据集（LibriSpeech, WildVSR, AVSpeech）上显著优于USR和AV-HuBERT等基线（图3，表1，表3）。例如在贪婪解码下，对长语音的WER保持稳定（图3a）。
    * 性能：在LRS3, LRS2, WildVSR上达到SOTA。如在LRS3低资源设置下，Base+模型的AVSR WER为2.4%（表2）；Huge模型（训练数据≈2500小时无标签）在LRS3上达到VSR 17.6%，ASR 0.9%，AVSR 0.8%（表7）。
    * 消融实验（表4，图4）：证明了CTC和注意力伪标签共同监督解码器对鲁棒性的重要性，以及混合采样概率对性能、效率和鲁棒性的平衡作用。
5. 实际意义是什么：能够用一个单一模型高效、鲁棒地处理音频、视频和音视频语音识别任务，大幅降低部署成本。训练效率的提升和对分布外数据的鲁棒性，使得利用大规模无标签数据进行迭代自训练变得更具可行性。
6. 主要局限性是什么：
    * 训练效率：虽然比USR快，但仍比纯监督微调的自监督方法慢，因为其需要迭代优化无标签数据。
    * 伪标签质量瓶颈：贪婪解码生成的伪标签质量限制了模型，尤其在对伪标签质量敏感的ASR和AVSR任务上。更高质量的伪标签生成策略有待探索。
    * CTC驱动模式的适用范围：该方法专为迭代自训练设计，在需要全局连贯性的离线伪标签或推理场景中并不适用，仍需标准的自回归或波束搜索解码。

---

### 🥉 [A cross-species neural foundation model for end-to-end speech decoding](/audio-paper-digest-blog/posts/2026-05-02-a-cross-species-neural-foundation-model-for-end)

🔥 **8.0/10** | 前25% | #语音识别 | #预训练 | #脑机接口 #端到端

👥 **作者与机构**

- 第一作者：Yizi Zhang（哥伦比亚大学），Linyang He（哥伦比亚大学） （*共同第一作者）
- 通讯作者：未说明（论文中未明确标注通讯作者）
- 作者列表：Yizi Zhang（哥伦比亚大学），Linyang He（哥伦比亚大学），Chaofei Fan（斯坦福大学），Tingkai Liu（微软），Han Yu（哥伦比亚大学），Trung Le（华盛顿大学），Jingyuan Li（亚马逊），Scott Linderman（斯坦福大学），Lea Duncker（哥伦比亚大学），Francis R Willett（斯坦福大学），Nima Mesgarani（哥伦比亚大学），Liam Paninski（哥伦比亚大学）

💡 **毒舌点评**

这篇论文的核心亮点是首次将跨物种、跨任务的自监督预训练成功应用于神经语音解码，并在竞赛基准上取得了双料第一，展示了在低数据场景（想象语音）下的强大迁移能力。然而，其短板在于端到端解码的实时性严重受限（单句需0.95秒），且推理依赖大型LLM，离真正的“实时、可穿戴、可部署”的临床应用还有很长的路要走，更像是一个概念验证的“实验室最优解”。

🔗 **开源详情**

- 代码：论文中未提及代码链接。未说明是否会开源。
- 模型权重：未提及公开模型权重。
- 数据集：明确使用了多个公开数据集（Brain-to-Text Benchmark '24/'25， Kunz et al. 2025，以及多个猴/人运动神经数据集），并提供了数据获取渠道（DRYAD, DANDI, Zenodo）。
- Demo：未提及在线演示。
- 复现材料：非常充分。论文附录（从A到R）详细描述了数据集详情、预处理、模型架构（所有超参数）、训练细节（优化器、硬件、时间）、评估指标、级联/端到端解码器细节、集成方法、消融实验设置、可解释性分析方法等。这是本文的一大优点。
- 论文中引用的开源项目：Ray Tune (Liaw et al., 2018) 用于超参数搜索；DeepSpeed ZeRO-3 用于大模型训练；AdamW 优化器；scikit-learn 用于LDA分析。

📌 **核心摘要**

1.  问题：现有语音脑机接口（BCI）多采用级联框架（先解码音素，再用语言模型组句），导致各阶段无法联合优化，性能受限。端到端方法此前性能不佳。
2.  方法核心：提出端到端脑-文本框架（BIT）。其核心是一个在人类和猴子多任务（语音、运动）Utah阵列数据上进行跨物种自监督预训练的Transformer神经编码器。该编码器与一个音频大语言模型（Audio-LLM） 解码器端到端连接，并使用对比学习对齐神经与文本嵌入空间。
3.  创新：首次在神经解码中实现跨物种预训练；首次将神经信号作为“音频”模态输入Audio-LLM；使用对比学习进行模态对齐，提升跨任务（尝试/想象语音）泛化能力。
4.  主要结果：
    *   在级联设置下，使用预训练编码器在Brain-to-Text '24和'25竞赛中取得最佳性能（WER：6.35% / 4.06%）。
    *   在端到端设置下，将字错率（WER）从先前最佳的24.69%大幅降低至10.22%（集成后）。
    *   在低资源的想象语音任务上，预训练带来巨大性能提升（WER降低39-45%），且跨物种预训练优于同任务监督预训练。

| 方法 | 基准 | 类型 | WER |
| :--- | :--- | :--- | :--- |
| Feng et al. (2024) | Brain-to-Text '24 | 端到端 | 24.69% |
| BIT End-to-End | Brain-to-Text '24 | 端到端 | 15.67% |
| BIT End-to-End + Ensemble | Brain-to-Text '24 | 端到端 | 10.22% |
| BIT Cascaded | Brain-to-Text '24 | 级联 | 6.35% |
| BIT Cascaded + Ensemble | Brain-to-Text '24 | 级联 | 5.10% |
| Feghhi et al. (2025) + Ensemble | Brain-to-Text '24 | 级联 | 5.68% |

![图2：不同基线模型在尝试和想象语音解码上的性能对比](icassp-img://Lp1noMpMUG/1.jpg)
图2展示了预训练（BIT-Human, BIT-All）相比从头训练（BIT-TFS）和RNN基线在两种任务和两种解码框架下的显著优势，尤其在想象语音任务上提升巨大。

5.  实际意义：显著推进了端到端神经语音解码的性能，使其首次接近甚至超越成熟的级联框架，为未来更强大、更易优化的语音BCI系统奠定了基础。
6.  主要局限性：端到端解码推理速度慢（~0.95秒/句），不适合实时应用；使用双向注意力，也无法用于在线流式解码；依赖大型LLM，设备端部署困难。

---

### 4. [Confident and Adaptive Generative Speech Recognition via Risk Control](/audio-paper-digest-blog/posts/2026-05-02-confident-and-adaptive-generative-speech)

🔥 **8.0/10** | 前50% | #语音识别 | #风险控制 | #大语言模型 #自适应

👥 **作者与机构**

- 第一作者：Amit Damri (amitdamti@mail.tau.ac.il)
- 通讯作者：Bracha Laufer-Goldshtein (blaufer@tauex.tau.ac.il)
- 作者列表：Amit Damri（特拉维夫大学电气与计算机工程学院）、Bracha Laufer-Goldshtein（特拉维夫大学电气与计算机工程学院）

💡 **毒舌点评**

亮点：这篇论文巧妙地将“学习-然后-测试”这一理论严谨的风险控制框架嫁接到语音识别后处理中，为“应该给LLM看几个假设”这个工程问题提供了有理论保证的解决方案，并在实验中实现了显著的计算节省（最高达52%）。短板：方法的理论根基扎实，但核心创新更偏向于一项应用良好的工程整合，对于追求全新模型架构或根本性算法突破的读者来说，可能会觉得“不过如此”；此外，框架的有效性高度依赖于ASR置信度分数的质量，论文对此讨论略显不足。

🔗 **开源详情**

- 代码：提供代码仓库链接：`https://github.com/amitdamritau/adaptive-ger`
- 模型权重：论文中未提及是否公开微调后的LLM权重。
- 数据集：实验使用了公开的基准数据集（TedLium-3, CHiME-4, CommonVoice, FLEURS），但论文中未说明是否提供经过处理的数据或专门的下载脚本。
- Demo：未提供在线演示。
- 复现材料：提供了非常详细的训练配置（超参数、优化器、学习率调度、硬件、训练时长）、风险校准流程细节（算法1）以及大量消融研究的设置和结果，复现材料充分。
- 论文中引用的开源项目：
    - Whisper（用于ASR）
    - LLaMA-2（作为LLM基础）
    - PEFT/LoRA（用于参数高效微调）
    - Hugging Face Transformers相关库（推断，用于模型实现）
    - evaluate2库（用于语料级WER计算）
    - HyPoradise、RobustGER等基准框架（用于数据和实验设置）

📌 **核心摘要**

这篇论文针对基于大语言模型的语音识别生成式错误纠正（GER）方法中，固定使用N-best假设集导致的计算资源浪费和性能不保证的问题，提出了一个自适应框架。该框架利用ASR模型的置信度分数，通过设定阈值动态决定每个输入音频所需的最优假设数量，并采用“学习-然后-测试”（LTT）风险控制方法来校准该阈值，从而以高概率保证纠正后的词错率（WER）相对于该模型在该假设集上的最佳可能性能的退化不超过预设水平。与已有固定大小的方法相比，本文的创新在于首次将风险控制理论引入GER任务，实现了难度感知的资源分配和理论性能保证。在三个不同难度的基准数据集（TedLium-3， CHiME-4， CommonVoice）上的实验表明，该方法在保持或略微提升纠正性能（WER变化在-0.13%到+2.28%相对值内）的同时，平均假设集使用量减少了23%至52%，实现了显著的计算节省，且实证风险控制成功率均超过理论最小值（1-δ）。其实际意义在于为ASR后处理提供了可量化风险、高效率的部署方案。主要局限性在于框架参数（如归一化参数γ）的选择需要基于数据集特性的预先分析，且其理论保证依赖于风险函数的有界性和一定条件下的单调性假设。

---

### 5. [CTC-DRO: Robust Optimization for Reducing Language Disparities in Speech Recognition](/audio-paper-digest-blog/posts/2026-05-02-ctc-dro-robust-optimization-for-reducing-language)

🔥 **8.0/10** | 前25% | #语音识别 | #分布鲁棒优化 | #多语言 #基准测试

👥 **作者与机构**

- 第一作者：Martijn Bartelds（斯坦福大学计算机科学系），Ananjan Nandi（斯坦福大学计算机科学系） （论文注明两位作者贡献均等）
- 通讯作者：Dan Jurafsky（斯坦福大学计算机科学系）
- 作者列表：
    - Martijn Bartelds（斯坦福大学计算机科学系）
    - Ananjan Nandi（斯坦福大学计算机科学系）
    - Moussa Koulako Bala Doumbouya（斯坦福大学计算机科学系）
    - Dan Jurafsky（斯坦福大学计算机科学系）
    - Tatsunori Hashimoto（斯坦福大学计算机科学系）
    - Karen Livescu（丰田芝加哥理工学院）

💡 **毒舌点评**

本文精准地诊断了Group DRO在CTC训练中失效的病因——损失值因序列长度和语言特性变得“不可比”，并开出了对症的“药方”（CTC-DRO），在多个语言集上实现了最差语言性能的显著提升，是一次理论动机清晰、工程实现扎实、效果立竿见影的应用创新。然而，CTC-DRO的疗效目前主要验证于6个语言一组的设定，当语言组规模扩大到几十甚至上百时，其权重的平滑机制和“最差语言”的定义是否依然有效，可能需要更严苛的检验；此外，该方法本质上是“优化权衡”，提升最差性能的同时，部分设置下最优语言的性能有轻微波动（尽管统计不显著），这在追求绝对平均或帕累托最优的场景下需谨慎考量。

🔗 **开源详情**

- 代码：论文提供了公开的代码仓库链接：https://github.com/Bartelds/ctc-dro。
- 模型权重：论文提到“newly trained models are publicly available”，并指向了上述GitHub仓库。
- 数据集：实验使用公开基准ML-SUPERB 2.0，论文详细描述了如何从原始数据中构建实验语言集（附录D），数据本身需从原始来源获取。
- Demo：论文中未提及在线演示。
- 复现材料：论文提供了极详细的复现信息，包括：
    - 算法伪代码（Algorithm 1）。
    - 详尽的实验设置：模型架构（XLS-R, MMS）、训练超参数（学习率、batch duration、梯度累积、epoch数、ηq、α）、评估指标。
    - 数据集划分的具体语言列表（表4）和统计信息（表5, 表6）。
    - 附录中包含更多开发集结果、消融实验细节、训练时间分析等。
- 论文中引用的开源项目：论文基于XLS-R和MMS预训练模型，使用ML-SUPERB 2.0基准，并提及了ESPnet工具包（用于讨论，非核心依赖）。

📌 **核心摘要**

1.  问题：现代深度学习模型常在特定子群体上表现不佳。在多语言自动语音识别（ASR）中，不同语言的性能差异显著。分布鲁棒优化（Group DRO）旨在最小化最差组损失，但在ASR中因广泛使用的CTC损失受输入长度及语言声学特性影响，导致各组损失不可比，使Group DRO失效甚至恶化性能。
2.  方法：提出CTC-DRO算法。核心改进有二：一是采用“长度匹配批处理”，确保每个语言组的损失是在大致相同的音频总时长下计算，缓解CTC损失随长度缩放的问题；二是引入“平滑最大化目标”，通过修改组权重更新规则，防止权重过度集中于损失持续偏高的组，从而使权重分布更均衡稳定。
3.  创新：与直接应用Group DRO相比，CTC-DRO首次系统性地解决了CTC损失在多语言场景下的不可比性问题。其平滑更新目标可通过拉格朗日乘数法证明，仍能保证权重与损失成正比，但调整更平滑。
4.  实验结果：在ML-SUPERB 2.0基准的五个语言集上进行评估。CTC-DRO在平衡与不平衡数据设置下均优于基线模型和标准Group DRO。关键结果如下：
    - 最差语言字符错误率（CER）相对基线最高降低47.1%。
    - 平均CER相对基线最高降低32.9%。
    - 标准Group DRO在超过一半的设置中反而提升了最差语言CER和平均CER。
    关键结果表格（平衡数据设置）：
    | 设置 | 模型 | ηq | α | 最差语言CER (↓) | 平均CER (↓) |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | 1 | MMS 基线 | - | - | 60.8% | 23.4% |
    | 1 | MMS Group DRO | 10⁻⁴ | - | 86.6% | 30.5% |
    | 1 | MMS CTC-DRO | 10⁻⁴ | 1.0 | 56.8% | 22.9% |
    | 2 | XLS-R 基线 | - | - | 68.8% | 19.0% |
    | 2 | XLS-R Group DRO | 10⁻⁴ | - | 58.8% | 21.6% |
    | 2 | XLS-R CTC-DRO | 10⁻⁴ | 0.5 | 45.0% | 15.8% |
    消融实验显示，移除平滑目标或长度匹配批处理都会导致性能大幅下降。
5.  意义：CTC-DRO以极小的计算开销，有效提升了多语言ASR的公平性，对促进数字包容性有积极作用。其思想可推广至其他损失不可比的群组鲁棒优化场景（如医疗AI）。
6.  局限：性能差距虽被缩小但未完全消除；算法性能依赖于预定义的语言组划分；在极端不平衡数据下效果需进一步验证。

---

### 6. [SumRA: Parameter Efficient Fine-tuning with Singular Value Decomposition and Summed Orthogonal Basis](/audio-paper-digest-blog/posts/2026-05-02-sumra-parameter-efficient-fine-tuning-with)

✅ **7.5/10** | 前25% | #语音识别 | #参数高效微调 | #多语言 #低资源

👥 **作者与机构**

- 第一作者：Chin Yuen Kwok（南洋理工大学数字信任中心 & 计算与数据科学学院）
- 通讯作者：Yongsen Zheng（南洋理工大学数字信任中心 & 计算与数据科学学院）
- 作者列表：Chin Yuen Kwok（南洋理工大学数字信任中心 & 计算与数据科学学院）、Yongsen Zheng（南洋理工大学数字信任中心 & 计算与数据科学学院）、Jia Qi Yip（南洋理工大学计算与数据科学学院）、Kwok-Yan Lam（南洋理工大学数字信任中心 & 计算与数据科学学院）、Eng Siong Chng（南洋理工大学数字信任中心 & 计算与数据科学学院）

💡 **毒舌点评**

本文巧妙地将SVD的数学结构与LoRA的参数效率需求结合，通过“求和奇异向量”这一简洁操作，在冻结A矩阵的同时显著提升了多语言ASR的微调效果，证明了好的初始化比训练时的参数自由度有时更重要。然而，论文的实验完全集中在语音领域，对方法在更广泛NLP任务（如摘要中提到的GLUE）上的失效缺乏深入剖析，且未开源任何代码或模型，使得其“参数高效”在可复现性和实际部署上打了折扣。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：使用了公开的Common Voice数据集，但未提供具体的划分脚本或处理后的数据。
- Demo：未提及。
- 复现材料：给出了模型配置（Whisper small/large-v2）、训练轮数、batch size、优化器、学习率调度器名称、LoRA插入位置、α设置等关键训练细节。提供了方法的数学公式和算法描述。
- 论文中引用的开源项目：引用了Whisper（Radford et al., 2023）、SpeechBrain（用于学习率调度器）以及Common Voice数据集。
- 总结：论文中未提及开源计划。

📌 **核心摘要**

1.  问题：现有的参数高效微调方法（如LoRA-FA、PiSSA）在冻结部分矩阵以节省存储和内存时，其初始化策略（如仅使用前几个主奇异向量）限制了模型对预训练知识空间的整体适应能力，尤其在需要全局知识迁移的多语言ASR任务中。
2.  方法核心：提出SumRA，一种改进的LoRA矩阵A的初始化策略。其核心是将通过SVD分解预训练权重W₀得到的所有奇异向量（按Σ^(1/2)V⊤的形式）进行求和压缩，分配到矩阵A的每一行中，从而使A的每行能同时影响多个知识概念子集。同时，论文提出了“交错求和”和“贪心求和”策略来均匀分配重要奇异向量，避免干扰。
3.  与已有方法相比的新颖性：相比于PiSSA仅使用顶部r个主奇异向量初始化A，SumRA通过求和方式利用了全部奇异向量（从主到次），从而让A矩阵能在更广的知识子空间上进行操作。这可以看作是在单次训练前就高效地“集成”了多个不同初始化方向的LoRA（如图5所示）。
4.  主要实验结果：在Common Voice数据集上使用5种新语言（每种仅10小时数据）对Whisper模型进行适配的实验中：
    *   SumRA在WER（词错误率）上显著优于LoRA、PiSSA和CorDA等基线。例如，在Whisper-large-v2上，SumRA将WER从LoRA的14.42%降至12.41%（相对改进约14%），同时参数量减半（17.6M vs 34.3M）。
    *   消融实验（表3）表明，提出的“交错求和”与“贪心求和”策略性能接近且均优于简单的“块求和”。
5.  实际意义：在需要为大量语言或个性化用户部署微调模型的场景中，SumRA通过共享冻结的A矩阵、仅存储每个任务的B矩阵，能显著降低总存储成本（如图4所示），同时保持甚至提升性能，为大规模、可扩展的语音模型适配提供了更优的解决方案。
6.  主要局限性：方法对全局属性的适应（如口音、说话风格）有效，但对局部适应（如添加少量领域术语）帮助有限。在NLP的GLUE基准测试等任务上初步实验未见明显提升，表明其优势可能局限于需要广泛表示空间调整的任务。

---

