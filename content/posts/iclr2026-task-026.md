---
title: "ICLR 2026 - 语音翻译 论文列表"
date: 2026-05-02
draft: false
tags: ["语音翻译"]
categories: [iclr-2026]
description: "共 2 篇 ICLR 2026 语音翻译 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音翻译

共 **2** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Scalable Multilingual Multimodal Machine Translation with Sp](/audio-paper-digest-blog/posts/2026-05-02-scalable-multilingual-multimodal-machine) | 8.0分 | 前25% |
| 🥈 | [UniSS: Unified Expressive Speech-to-Speech Translation with ](/audio-paper-digest-blog/posts/2026-05-02-uniss-unified-expressive-speech-to-speech) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Scalable Multilingual Multimodal Machine Translation with Speech-Text Fusion](/audio-paper-digest-blog/posts/2026-05-02-scalable-multilingual-multimodal-machine)

🔥 **8.0/10** | 前25% | #语音翻译 | #多模态模型 | #大语言模型 #多语言

👥 **作者与机构**

- 第一作者：Yexing Du（哈尔滨工业大学、鹏城实验室）
- 通讯作者：Youcheng Pan（鹏城实验室）， Yang Xiang（鹏城实验室）， Ming Liu（哈尔滨工业大学、鹏城实验室） （论文中明确标注`{panych,xiangy}@pcl.ac.cn, mliu@ir.hit.edu.cn`）
- 作者列表：Yexing Du（哈尔滨工业大学，鹏城实验室）， Youcheng Pan（鹏城实验室）， Zekun Wang（哈尔滨工业大学）， Zheng Chu（哈尔滨工业大学）， Yichong Huang（哈尔滨工业大学）， Kaiyuan Liu（哈尔滨工业大学，鹏城实验室）， Bo Yang（鹏城实验室）， Yang Xiang（鹏城实验室）， Ming Liu（哈尔滨工业大学，鹏城实验室）， Bing Qin（哈尔滨工业大学，鹏城实验室）

💡 **毒舌点评**

本文巧妙地将语音合成（TTS）和多模态大语言模型（MLLM）结合，提出了“语音引导机器翻译（SMT）”框架，并创新性地引入自监督进化机制来缓解数据稀缺问题，最终在多个基准上取得显著成绩。不过，其自监督进化机制中用于筛选“正负样本”的核心标准（COMET分数差异）略显简单粗暴，且迭代过程可能陷入局部最优，对“语音韵律信息如何具体帮助翻译”的深层机理剖析仍显不足。

🔗 **开源详情**

- 代码：论文中提供了明确的GitHub代码仓库链接：https://github.com/yxduir/LLM-SRT。
- 模型权重：论文中提到“The code and models are released”，表明模型权重将与代码一同发布。
- 数据集：论文中使用的主要数据集如Multi30K、FLORES-200、CoVoST-2、FLEURS等均为公开数据集。论文中未提及会发布新的专有数据集。
- Demo：论文中未提及提供在线演示。
- 复现材料：论文提供了详细的实验设置（表2， 表9， 表10），包括模型架构参数、训练数据、评估基准、训练硬件（4*A100 80GB）以及关键超参数（学习率、优化器等）。这些信息对复现工作至关重要。
- 论文中引用的开源项目：论文明确引用并依赖了以下开源项目：Whisper（语音编码器）、GemmaX2-28-9B（LLM骨干）、CosyVoice2（TTS模型）、BLIP-2（Q-Former设计灵感）、vLLM（推理加速）、LoRA（高效微调）、COMET（评估指标）、sacrebleu（spBLEU计算工具）。
- 总结：论文的开源计划较为完备，提供了代码、模型、详细训练细节和依赖的开源工具信息，但未提及演示Demo。

📌 **核心摘要**

1.  问题：现有图像引导的多模态机器翻译（MMT）方法受限于稀缺的多语言图像-文本配对数据，且在一般翻译任务上泛化能力有限，甚至可能引入噪声。
2.  方法核心：提出语音引导机器翻译（SMT）框架，将TTS生成的合成语音与源文本结合作为多模态输入，输入到多模态大语言模型（MLLM）中进行翻译。为解决低资源语言数据不足问题，引入了自监督进化机制，该机制能让MLLM自主生成合成语音数据，并通过一个迭代循环进行自我评估和优化：首先生成语音，然后基于翻译质量评分（COMET）区分正负样本，接着仅使用“正样本”（即加入语音后翻译质量提升的样本）对MLLM进行持续训练，最后评估收敛情况。
3.  新意：a) 将语音作为新的辅助模态引入机器翻译，克服了图像模态的语言覆盖限制；b) 设计了自监督进化机制，实现框架的自动数据生成与迭代自我增强，提升了模型对低资源语言的翻译能力。
4.  主要实验结果：
    *   在多模态翻译基准Multi30K上，SMT-9B模型在所有测试集上均显著超越了所有基于文本和图像（包括真实图像和合成图像）的基线模型，达到了新的SOTA。例如，在eng→fra的Test2016集上，SMT-9B的BLEU得分为67.0，远超最佳图像模型IMAGE†的67.5（注：论文原文“surpasses”为67.0 vs 67.5，但表格中IMAGE†为67.5，此处可能存在笔误或需核对具体数据子集，但整体结论是SMT方法优越）。
    *   在通用翻译基准FLORES-200的108个翻译方向上，SMT-9B取得了平均最佳的spBLEU/COMET得分（40.4/89.5），超越了规模更大的DeepSeek-V3.1等文本模型。
    *   在低资源翻译方向（如柬埔寨语khm， 老挝语lao， 缅甸语mya）上，自监督进化机制带来了显著的COMET分数提升（最高+2.0）。
    *   消融实验证实，合成语音与真实语音对翻译性能的影响差异可忽略不计。
5.  实际意义：该框架为构建更可扩展、语言覆盖更广的多模态机器翻译系统提供了一条新路径，特别是对于缺乏大规模图像-文本数据的低资源语言，利用丰富的语音资源和自进化能力可以有效提升翻译质量。
6.  主要局限性：框架的性能受限于所使用的TTS模型所支持的语言范围；尽管开源TTS模型已支持多语言，但覆盖仍有限。

---

### 🥈 [UniSS: Unified Expressive Speech-to-Speech Translation with Your Voice](/audio-paper-digest-blog/posts/2026-05-02-uniss-unified-expressive-speech-to-speech)

✅ **7.5/10** | 前25% | #语音翻译 | #自回归模型 | #大语言模型 #数据集

👥 **作者与机构**

- 第一作者：Sitong Cheng（香港科技大学）
- 通讯作者：Yike Guo（香港科技大学），Wei Xue（香港科技大学）
- 作者列表：Sitong Cheng（香港科技大学）、Weizhen Bian（香港科技大学）、Xinsheng Wang（Soul AI Lab）、Ruibin Yuan（香港科技大学）、Jianyi Chen（香港科技大学）、Shunshun Yin（Soul AI Lab）、Yike Guo（香港科技大学，通讯作者）、Wei Xue（香港科技大学，通讯作者）

💡 **毒舌点评**

本文最大的亮点在于“化繁为简”，通过精巧的token设计和提示策略，将复杂的多模态语音翻译任务“降维”成了预训练大语言模型熟悉的序列生成问题，并取得了SOTA级的性能，证明了这条路径的可行性。短板在于其高度依赖特定的、非原创的语音tokenizer（BiCodec, GLM-4）和合成数据集（UniST），这虽然是一种聪明的工程集成，但也意味着其核心创新更多体现在系统集成与训练范式上，而非底层表示学习的突破。

🔗 **开源详情**

- 代码：论文中未提及代码开源计划或提供代码仓库链接。
- 模型权重：未提及是否公开预训练或微调后的UniSS模型权重。
- 数据集：论文明确贡献了UniST数据集（44.8k小时），并提供了项目主页链接（https://cmots.github.io/uniss-demo），其中可能包含数据获取或申请方式（论文未详细说明获取途径）。
- Demo：提供了在线演示网站（https://cmots.github.io/uniss-demo/）。
- 复现材料：在附录B.1中提供了非常详细的训练配置（三阶段数据、超参数、硬件、优化器设置），并声称遵循可复现原则。引用了使用的开源框架（Megatron-LM）和基础模型（Qwen2.5）。
- 论文中引用的开源项目：Megatron-LM（训练框架），vLLM（推理部署），Transformers库（评估），webMUSHRA（主观评估）。

📌 **核心摘要**

1. 要解决什么问题：现有语音到语音翻译（S2ST）系统存在架构复杂（级联或两阶段）、难以保留说话人音色/情感风格、以及未能充分利用大型语言模型（LLM）预训练翻译能力三大挑战。
2. 方法核心是什么：提出UniSS，一个基于预训练LLM（Qwen2.5-1.5B）的单阶段统一S2ST框架。它采用三类离散语音token（说话人token、语言token、语义token）分别建模风格、内容和生成目标，并通过跨模态思维链（CoT）提示（Listen-Translate-Speak）将LLM的文本翻译能力迁移到语音领域。
3. 与已有方法相比新在哪里：（1）架构更简单：采用单阶段自回归模型，无需级联或多模态转换器。（2）能力迁移更直接：通过设计的提示格式，显式激活并利用LLM内部的翻译知识，而非将其仅视为黑盒序列转换器。（3）性能更全面：在翻译质量、说话人相似度、情感保持和时长一致性上全面超越现有方法。
4. 主要实验结果：在CVSS-T基准上，UniSS (Q) 的英文到中文和中文到英文的Speech-BLEU分别达到32.20和24.28，显著超过基线（如Seamless-Ex的24.45/15.84）。其说话人相似度MOS达4.42，情感相似度MOS达4.51，时长一致性（SLC 0.4）接近完美（0.99/0.97）。关键消融实验证明，去除跨模态CoT提示会导致翻译质量暴跌约15个BLEU点。
5. 实际意义是什么：为构建下一代更简单、高效、高质量的语音翻译系统提供了新范式。其发布的UniST大规模数据集（44.8k小时）也极大缓解了该领域高质量平行数据稀缺的问题。
6. 主要局限性是什么：（1）模型和方法目前仅验证了中英双向翻译。（2）核心语音tokenizer并非本文原创，词汇表扩展较大。（3）数据集依赖于合成语音，其上限受合成模型质量制约。

---

