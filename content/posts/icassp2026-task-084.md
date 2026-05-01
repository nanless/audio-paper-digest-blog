---
title: "ICASSP 2026 - 语音问答 论文列表"
date: 2026-04-29
draft: false
tags: ["语音问答"]
categories: [icassp-2026]
description: "共 3 篇 ICASSP 2026 语音问答 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 语音问答

共 **3** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [TextlessRAG: End-to-End Visual Document RAG by Speech withou](/audio-paper-digest-blog/posts/2026-04-29-textlessrag-end-to-end-visual-document-rag-by) | 8.5分 | 前25% |
| 🥈 | [Understanding Textual Capability Degradation in Speech LLMS ](/audio-paper-digest-blog/posts/2026-04-29-understanding-textual-capability-degradation-in) | 7.5分 | 前25% |
| 🥉 | [Advancing Speech Understanding in Speech-Aware Language Mode](/audio-paper-digest-blog/posts/2026-04-29-advancing-speech-understanding-in-speech-aware) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [TextlessRAG: End-to-End Visual Document RAG by Speech without Text](/audio-paper-digest-blog/posts/2026-04-29-textlessrag-end-to-end-visual-document-rag-by)

🔥 **8.5/10** | 前25% | #语音问答 | #端到端 | #基准测试 #跨模态

👥 **作者与机构**

- 第一作者：Peijin Xie (哈尔滨工业大学 ITNLP实验室)
- 通讯作者：Bingquan Liu (哈尔滨工业大学 ITNLP实验室)
- 作者列表：Peijin Xie (哈尔滨工业大学 ITNLP实验室)、Shun Qian (哈尔滨工业大学 ITNLP实验室)、Bingquan Liu (哈尔滨工业大学 ITNLP实验室)、Dexin Wang (奇虎360科技 智脑AI实验室)、Lin Sun (奇虎360科技 智脑AI实验室)、Xiangzheng Zhang (奇虎360科技 智脑AI实验室)

💡 **毒舌点评**

亮点：创新性地提出了完全“去文本化”的语音文档RAG框架，将语音交互的便捷性与视觉文档理解相结合，是“多模态原生”交互的一次有意义探索，并首次发布了双语语音-文档RAG基准数据集。  
短板：端到端框架严重依赖现有的强多模态模型（ColQwen-Omni， Qwen2.5-Omni），核心的“无文本”生成质量在部分数据集（如DUDE、CDR）上仍明显低于使用文本的SOTA模型，延迟优势相对SOTA（ViDoRAG）的差距也未充分证明。

🔗 **开源详情**

- 代码：论文提供GitHub链接 (https://github.com/xiepeijinhit-hue/textlessrag)，承诺发布pipeline代码。
- 模型权重：未提及自行训练的模型权重。框架依赖的ColQwen-Omni和Qwen2.5-Omni是现有开源模型。
- 数据集：承诺发布论文中构建的SV-DOC数据集，包含增强的英文数据集和全新的中文CDR数据集。
- Demo：论文中未提及在线演示。
- 复现材料：论文中未提供详细的训练超参数、配置文件、检查点或更深入的附录说明。
- 引用的开源项目：ColQwen-Omni (Hugging Face), ColBERT (GitHub), DocLayout-YOLO (GitHub), Qwen2.5-Omni (Hugging Face), Doubao TTS API, Tesseract OCR。

📌 **核心摘要**

1.  问题：现有基于视觉文档的知识问答（RAG）系统通常需要将语音查询通过ASR转换为文本，并将文档内容通过OCR提取文本，这增加了延迟和潜在的错误传播，且无法直接处理图表等非文本视觉元素。
2.  方法核心：提出TextlessRAG，一个端到端的语音驱动视觉文档RAG框架。它直接使用语音编码器（ColQwen-Omni）对语音查询和文档图像页面进行统一编码并检索，然后通过布局感知重排序选择最相关的图像块，最后由多模态大模型（Qwen2.5-Omni）直接基于检索到的图像块生成语音答案，整个过程无需ASR、OCR或TTS。
3.  新意：这是首个完全摒弃ASR、OCR、TTS的语音文档RAG管线，实现了从语音输入到语音输出的全模态流程。同时，构建了首个双语（英/中）语音-文档RAG基准数据集SV-DOC。
4.  主要实验结果：
    *   检索（表2）：在7个子数据集上，TextlessRAG的检索性能（nDCG@5）全面优于纯文本检索基线（BM25、E5、NV-Embed-v2），并与最强的图文检索基线ViDoRAG竞争。例如，在ChartQA上达到99.3（ViDoRAG为100），在Vidoseek上达到95.4（ViDoRAG为94.3）。
    *   问答（表3）：端到端QA性能（GPT-4o评判）在多个数据集上优于纯文本RAG，并在ChartQA（87.3）和Vidoseek（87.2/88.8）上达到最佳。与SOTA的ViDoRAG相比，在部分数据集（如DUDE：78.5 vs 86.7）仍有差距。
    *   延迟与准确性（图4）：TextlessRAG在响应延迟（约35-45单位）上显著低于ViDoRAG（约115-120单位），同时保持了具有竞争力的准确率（约80%），在效率和效果之间取得了良好平衡。
5.  实际意义：为多模态大模型提供了更自然、无文本依赖的交互范式，扩展了应用场景（如视障辅助、移动办公）。发布的数据集推动了该方向的研究。
6.  主要局限性：生成端的最终答案质量高度依赖于基座多模态模型（Qwen2.5-Omni）的能力；在部分需要复杂文本推理的数据集上，性能仍不及基于文本的SOTA方法；端到端延迟优势相较于优化后的文本管线可能有限。

---

### 🥈 [Understanding Textual Capability Degradation in Speech LLMS via Parameter Importance Analysis](/audio-paper-digest-blog/posts/2026-04-29-understanding-textual-capability-degradation-in)

✅ **7.5/10** | 前25% | #语音问答 | #参数重要性分析 | #语音大模型 #低秩适应

👥 **作者与机构**

- 第一作者：Chao Wang* (中国科学技术大学，语音与语言信息处理国家工程研究中心)
- 通讯作者：Yang Ai† (中国科学技术大学，语音与语言信息处理国家工程研究中心)
- 作者列表：Chao Wang（中国科学技术大学，语音与语言信息处理国家工程研究中心）、Rui-Chen Zheng（中国科学技术大学，语音与语言信息处理国家工程研究中心）、Yang Ai†（中国科学技术大学，语音与语言信息处理国家工程研究中心）、Zhen-Hua Ling（中国科学技术大学，语音与语言信息处理国家工程研究中心）
*表示同等贡献，†表示通讯作者

💡 **毒舌点评**

本文的亮点在于提出了一个新颖的分析框架，利用参数重要性分数从“层”的维度定量揭示了语音微调导致文字能力退化的内部机制——即“文字重要参数分布偏移”，并据此为LoRA等流行技术的有效性提供了理论解释。然而，其局限也相当明显：整个分析局限于“编码器-适配器”这一特定范式，结论能否推广至更主流的基于语音离散token的端到端语音大模型（如Moshi, Qwen-Audio等）存疑，且所有代码、模型均未开源，大大削弱了其可复现性和即时影响力。

🔗 **开源详情**

- 代码：论文中未提及任何代码仓库链接或开源计划。
- 模型权重：未提及。
- 数据集：论文使用了公开数据集VoiceAssistant-400K和Spoken-Alpaca-GPT4（均托管在HuggingFace），但未提及本文是否贡献了新数据集。
- Demo：未提及。
- 复现材料：论文提供了一定的训练细节（如数据集、LoRA秩参数、分层学习率公式中的λ值），但缺失关键超参数（如基础学习率、batch size）和训练硬件信息，不足以完全复现实验。
- 论文中引用的开源项目：论文主要引用了LLaMA-Omni的代码/架构，以及LLaMA系列模型、LoRA方法和Whisper编码器（作为语音编码器被引用）。

📌 **核心摘要**

1.  要解决什么问题：在将大语言模型（LLM）适配为语音大模型（Speech LLM）的过程中，普遍观察到其核心的文字推理能力会发生退化。这种“文字能力退化”限制了语音大模型利用其预训练获得的文本知识，是当前技术路线的一个关键瓶颈。本文旨在从内部机制上分析这一现象。
2.  方法核心是什么：论文聚焦于广泛使用的“编码器-适配器”范式（以LLaMA-Omni为代表），提出了一个基于参数重要性估计的分析框架。通过计算微调前后每个参数对文字任务损失的重要性得分（梯度近似），并分析这些得分在模型各层的分布变化，揭示了退化的根源。
3.  与已有方法相比新在哪里：新在于：
    *   机制洞察：首次通过参数重要性分析，明确指出文字能力退化的主要内部机制是“文字重要参数分布偏移”。微调后，模型原本依赖的关键参数（集中在特定层）的重要性被削弱或扰乱。
    *   结构发现：发现重要的文字参数在Transformer权重矩阵中呈现“秩聚类”现象，即集中在特定的行和列，这暗示了文字知识在模型中的低秩结构特性。
    *   理论解释：为两种常用的缓解策略（分层学习率调度和LoRA）的有效性提供了统一的、基于内部机制的解释：分层学习率调度通过保护重要层来减缓分布偏移；LoRA则因为其低秩更新方式与文字知识的低秩结构相契合。
4.  主要实验结果如何：
    *   在Llama Questions和Web Questions两个问答基准上，与全参数微调（Full-FT）相比，分层学习率调度（Layer-LR）和LoRA在维持文字能力（T2T指标）和提升语音问答能力（S2T指标）上均表现更优。
    *   示例数据（8B模型）：
        | 模型 | 方法 | Web Questions (T2T) | Web Questions (S2T) |
        | :--- | :--- | :--- | :--- |
        | LLaMA-Omni 8B | No-FT | 58.7 | - |
        | LLaMA-Omni 8B | Full-FT | 55.7 | 38.7 |
        | LLaMA-Omni 8B | Layer-LR | 57.6 | 39.6 |
        | LLaMA-Omni 8B | LoRA | 56.7 | 42.9 |
    *   分析实验（如图1、图2、图3所示）证实，Full-FT显著扭曲了原始的参数重要性层分布，而Layer-LR和LoRA的分布则更接近原始预训练模型，这从内部验证了它们的缓解效果。
5.  实际意义是什么：该研究为理解和优化语音大模型的训练过程提供了新的视角和诊断工具。它表明，在适配多模态能力时，保护基础模型内部的知识结构（特别是文字相关的参数重要性分布）至关重要，这比单纯追求在语音任务上的性能更具长远价值。提出的分析框架和缓解策略为设计更鲁棒的语音大模型微调方法提供了理论指导。
6.  主要局限性是什么：
    *   范式局限：研究仅限于“编码器-适配器”架构，未探讨另一种主流范式（如通过扩展词表融入语音离散token）中是否存在类似的机制。
    *   分析范围：分析主要集中在微调的第一阶段（理解阶段），未涉及生成阶段。
    *   开源与复现：论文未提供代码、模型权重或详细训练配置，这限制了其他研究者直接复现和验证其分析框架。

---

### 🥉 [Advancing Speech Understanding in Speech-Aware Language Models with GRPO](/audio-paper-digest-blog/posts/2026-04-29-advancing-speech-understanding-in-speech-aware)

✅ **7.0/10** | 前25% | #语音问答 | #强化学习 | #语音大模型 #语音翻译

👥 **作者与机构**

- 第一作者：Avishai Elmakies（IBM Research，*注：论文标注工作在实习期间完成）
- 通讯作者：未说明
- 作者列表：Avishai Elmakies（IBM Research）、Hagai Aronowitz（IBM Research）、Nimrod Shabtay（IBM Research）、Eli Schwartz（IBM Research）、Ron Hoory（IBM Research）、Avihu Dekel（IBM Research）

💡 **毒舌点评**

论文成功地将GRPO和可验证奖励（BLEU）应用于语音大模型的开放生成任务，并展示了其优于SFT的性能，方法简洁有效且结果扎实。然而，其核心贡献更多是应用层面的迁移与验证，而非算法本身的重大革新，且完全未开源代码与模型，对社区的可复用性打了折扣。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及是否公开训练后的模型权重。
- 数据集：使用了公开数据集LibriSQA和CoVoST2，并说明了数据划分。
- Demo：未提及。
- 复现材料：提供了较为详细的实验配置（超参数搜索范围、训练硬件、GRPO具体参数如β和G），但未提供最终选定的完整配置和检查点。
- 论文中引用的开源项目：引用了Granite Speech模型 [4] 和 Granite 3.0语言模型 [27] 作为基础，使用了AdamW优化器。

📌 **核心摘要**

1.  问题：现有语音感知大模型在多项选择题型的强化学习训练中受限于二元奖励，难以评估和提升其开放式的文本生成能力。标准SFT在生成任务上仍有提升空间。
2.  方法核心：提出将Group Relative Policy Optimization（GRPO）算法应用于语音问答和语音翻译等开放生成任务，并使用BLEU分数作为可验证奖励信号来优化模型。此外，探索了将真实答案作为离线样本纳入GRPO训练组的混合策略（MP-GRPO）。
3.  创新之处：将GRPO从多选任务扩展到更贴近实际应用的开放格式任务；使用简单有效的文本相似度度量（如BLEU）作为强化学习奖励；初步探索了在语音任务中结合在线与离线样本的混合训练策略。
4.  主要结果：在LibriSQA（语音问答）和CoVoST2（语音翻译）数据集上，基于Granite Speech 2B/8B模型的实验表明，GRPO训练在BLEU、ROUGE、BERTScore等多项指标上显著优于SFT和基线模型。例如，在LibriSQA上，GRPO使Granite Speech 2B的BLEU从基线的27.74提升至44.90（+61.8%），相比SFT（40.88）也有9.8%的提升。MP-GRPO在语音翻译任务上进一步带来增益。
5.  实际意义：提供了一种简单高效的语音大模型训练范式，能显著提升模型在实际对话和翻译场景中的生成质量，为开发更强大的语音交互系统提供了新思路。
6.  主要局限：仅在英语语音问答和英德翻译任务上验证；未探索ASR等唯一答案任务；训练计算成本高于SFT；混合策略（MP-GRPO）在语音问答上表现不稳定，需进一步研究；未开源代码和模型，阻碍快速复现与验证。

---

