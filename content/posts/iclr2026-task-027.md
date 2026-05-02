---
title: "ICLR 2026 - 语音生成 论文列表"
date: 2026-05-03
draft: false
tags: ["语音生成"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 语音生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 语音生成

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [From Natural Alignment to Conditional Controllability in Mul](/audio-paper-digest-blog/posts/2026-05-03-from-natural-alignment-to-conditional) | 8.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [From Natural Alignment to Conditional Controllability in Multimodal Dialogue](/audio-paper-digest-blog/posts/2026-05-03-from-natural-alignment-to-conditional)

🔥 **8.0/10** | 前25% | #语音生成 | #数据集 | #视频生成 #多模态对话

👥 **作者与机构**

- 第一作者：Zeyu Jin (清华大学计算机系)
- 通讯作者：Xiaoyu Qin (清华大学计算机系)，Jia Jia (清华大学计算机系，BNRist)
- 作者列表：Zeyu Jin (清华大学计算机系)、Songtao Zhou (清华大学计算机系)、Haoyu Wang (清华大学计算机系)、Minghao Tian (Rice University)、Kaifeng Yun (清华大学深圳国际研究生院)、Zhuo Chen (ByteDance)、Xiaoyu Qin (清华大学计算机系，通讯作者)、Jia Jia (清华大学计算机系，BNRist，通讯作者)

💡 **毒舌点评**

亮点在于构建了一个规模可观（360+小时）、标注精细且专门针对“表现力”进行设计的多模态对话数据集MM-DIA，并配套了评估基准，为社区研究可控多模态对话提供了急需的“弹药”。短板则是论文在核心的生成模型部分缺乏原创性，更多是“数据集+评估”的贡献，现有的语音/视频生成实验完全依赖现有模型微调或级联，未能提出一个端到端、统一的多模态对话生成模型。

🔗 **开源详情**

- 代码：论文中未提及具体的代码仓库链接。但在“可复现性声明”中承诺“实验代码和数据处理流水线将在论文接受后公开”。
- 模型权重：未提及公开本研究中微调后的模型权重。基座模型（Higgs-Audio, Dia等）为第三方开源模型。
- 数据集：明确表示将开源MM-DIA和MM-DIA-BENCH。获取方式应为申请后下载，具体细节未说明。
- Demo：在附录A.5中提到了一个演示页面链接：`https://mmdiaiclr26.github.io/mmdiaiclr26/`，提供了音频样本。
- 复现材料：论文提供了详细的数据集构建流水线图（图2）、算法伪代码（算法1，参考 `![算法1](icassp-img://fBagP6w6yE/1.jpg)`）、消融实验（表9）、详细的标注质量验证（表7，表8）以及丰富的附录，为复现数据处理和评估流程提供了充分信息。
- 论文中引用的开源项目：包括：
    - 视觉语言模型：Gemini-2.5-pro/flash， Qwen2.5-VL-7B-Instruct， Qwen-72B， GPT-5。
    - 语音模型：Higgs-Audio-V2 (Boson AI)， Dia-1.6B (Nari Labs)。
    - 视频生成模型：FLOAT， MultiTalk， Sonic， HunyuanVideo， Wan-2.2。
    - 其他工具：InsightFace（人脸识别）， Montreal-Forced-Aligner（强制对齐）。
- 整体开源计划：论文有明确的开源数据集和代码的计划，但细节需待论文接受后公开。

📌 **核心摘要**

1.  问题：现有的多模态对话生成研究主要关注模态内的语义生成或模态映射，忽视了跨模态交互风格的系统性建模，导致生成结果的表现力和可控性不足。主要挑战包括缺乏高质量的原生多模态对话数据、可扩展的交互级语义标注方法，以及系统的评估基准。
2.  方法核心：作者提出了一套从影视作品中自动构建大规模、细粒度标注的多模态对话数据集的流程。该流程包括容忍增强的场景边界检测、多模态说话人识别，以及使用大模型进行句子级和对话级的表现力标注。在此基础上，他们提出了“情感三元组”和“自由描述”两种互补的对话表现力标注范式，并构建了MM-DIA数据集和MM-DIA-BENCH基准测试。
3.  创新性：与已有数据集相比，MM-DIA首次以“对话表现力”为核心，提供了同步的文本、音频、视频及细粒度交互风格标注（如关系、互动模式、情感基调）。论文还形式化定义了多模态对话生成（MDG）任务，区分了显式（通过文本提示）和隐式（通过跨模态线索）控制范式，并提出了跨模态风格一致性这一新评估维度。
4.  主要实验结果：
    - 语音合成（显式控制）：在MM-DIA上微调后，Higgs-Audio-V2模型WER从31.3降至4.5，cp-WER从104.8降至33.8，指令跟随评分显著提升。
    - 视觉条件语音生成（隐式控制）：级联VLM+Higgs-Audio方法优于端到端的HarmoniVox，但在跨模态风格一致性上（如Similarity, Instruction Following）与显式控制相比出现下降。
    - 语音驱动生成视频（隐式控制）：现有系统（如MultiTalk, Sonic）在唇形同步和视频质量上表现尚可，但在指令跟随（Interaction Mode准确率仅13.82%-18.70%）和细粒度情感表达上仍远落后于人类。
    主要结果表格：
    表4：描述控制下语音合成实验结果（测试集）
    | 模型 | WER↓ | UTMOS↑ | sa-SIM↑ | cp-WER↓ | Quality↑ | Instr. Follow.↑ |
    |---|---|---|---|---|---|---|
    | Higgs-Audio-V2-SFT | 4.450 | 3.280 | 0.447 | 33.765 | 4.44±0.29 | 4.13±0.52 |
    | Dia-SFT | 29.071 | 1.974 | 0.447 | 57.813 | 2.89±0.69 | 2.88±0.71 |
    表6：语音驱动对话视频生成实验结果
    | 模型 | FVD↓ | LSE-C↑ | ACC-Rela. | ACC-Interact. | Quality↑ | Instr. Follow.↑ |
    |---|---|---|---|---|---|---|
    | Ground Truth | - | 6.275 | 100.00% | 100.00% | 5.000 | 4.902 |
    | MultiTalk (SI2V) | 124.543 | 5.305 | - | - | 4.922 | 4.631 |
    | Wan-2.2 T2V | 300.092 | 4.288 | 53.66% | 18.70% | 4.423 | 3.268 |
5.  实际意义：本工作为多模态对话生成领域提供了重要的基础设施（数据集、标注范式、评估协议），推动了研究从“生成内容”向“生成可控的表现力”发展。其定义的任务和基准将引导未来模型关注跨模态风格对齐。
6.  主要局限性：尽管构建了强大的数据集和基准，但现有的生成实验（无论是语音合成还是视频生成）均未实现端到端的、统一的多模态对话生成。当前方法或依赖级联，或局限于单一模态输出，难以满足MDG任务中对跨模态深层对齐的完整要求。

---

