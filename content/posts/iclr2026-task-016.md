---
title: "ICLR 2026 - 视觉问答 论文列表"
date: 2026-05-03
draft: false
tags: ["视觉问答"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 视觉问答 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 视觉问答

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Can Vision-Language Models Answer Face to Face Questions in ](/audio-paper-digest-blog/posts/2026-05-03-can-vision-language-models-answer-face-to-face) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Can Vision-Language Models Answer Face to Face Questions in the Real-World?](/audio-paper-digest-blog/posts/2026-05-03-can-vision-language-models-answer-face-to-face)

✅ **7.0/10** | 前25% | #视觉问答 | #微调 | #多模态模型 #数据集

👥 **作者与机构**

- 第一作者：Reza Pourreza (Qualcomm AI Research)
- 通讯作者：未明确说明
- 作者列表：Reza Pourreza (Qualcomm AI Research)、Rishit Dagli (University of Toronto，工作于Qualcomm AI Research实习期间完成)、Apratim Bhattacharyya (Qualcomm AI Research)、Sunny Panchal (Qualcomm AI Research)、Guillaume Berger (Qualcomm AI Research)、Roland Memisevic (Qualcomm AI Research)

💡 **毒舌点评**

本文最大的价值在于“撕下了华丽表象”，通过构建一个看似简单的实时问答基准（QIVD），无情地揭示了当前最强多模态模型在“动态世界交互”这一基本能力上的集体短板——它们仍像是盯着离线照片的“学者”，而非能应对生活场景的“伙伴”。然而，数据集本身规模有限（2900个样本），且评估高度依赖一个LLM裁判，这使得结论的普适性和绝对准确性存在一定疑问。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：论文评估了多个公开模型（如Qwen, VideoLLaMA系列），但未提及自己微调后的模型权重是否公开。
- 数据集：QIVD数据集已公开，可通过论文提供的链接（https://www.qualcomm.com/developer/software/qualcomm-interactive-video-dataset-qivd）获取。
- Demo：论文中未提及在线演示。
- 复现材料：论文在附录D中提供了详细的实现细节、超参数设置（表D.2）、以及LLM评估用的提示词（表D.3, D.4），为复现评估流程提供了充分信息。
- 论文中引用的开源项目：依赖Whisper、Whisper-Streaming、各种VideoLLaMA/Qwen模型、BEATs、SigLIP、DeepSpeed等开源项目和库。

📌 **核心摘要**

1.  问题：当前的视觉语言模型（LMM）在离线分析静态图像或完整视频方面表现出色，但能否在真实世界中，通过实时摄像头和麦克风输入，进行自然的“面对面”问答交互？这是一个衡量AI助手和机器人实用性的关键但被忽视的能力。
2.  方法核心：作者提出了Qualcomm Interactive Video Dataset (QIVD)，这是一个全新的在线问答基准数据集。视频由用户边录制边提问，系统需要实时回答。数据集标注了问题文本、答案文本以及最优回答时刻（时间戳），以评估模型的时序理解与交互时机把握能力。
3.  创新点：与大多数离线视频问答数据集不同，QIVD是“在线”且“自我包含”的（问题嵌入音频），要求模型处理实时流、解决指代歧义（如“这个”）、并判断“何时作答”。论文通过详尽的实验，系统评估了多种闭源（GPT-4o, Gemini）和开源模型在此任务上的表现。
4.  主要实验结果：
    *   整体性能差距：即使在离线设置下提供完美问题和回答时刻，最强模型（GPT-4o: 58.76%， Qwen3-VL-8B: 60.07%）的正确率也远低于人类子集（87.33%）。
    *   失败模式分析：模型在动作计数（Action Counting）和音频视觉（Audio-Visual）任务上表现尤其糟糕，表明其动态时序推理和跨模态融合能力存在严重不足。
    *   微调效果：在QIVD上微调VideoLLaMA2.1-7B-AV模型，可大幅提升其在特定类别（如动作计数提升+16.96%，音频视觉提升+17.39%）的表现，证明了针对性数据的价值。
    *   时机的重要性：实验（图3）表明，精确的“何时作答”时机对最终答案正确率有显著影响。

| 模型 (离线设置) | 正确率 (Corr. ↑) | BERT ↑ | METEOR ↑ | BLEU ↑ | ROUGE-L ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 人类 (子集) | 87.33 | 93.01 | 53.21 | 17.40 | 49.76 |
| GPT-4o | 58.76 | 89.36 | 51.18 | 15.72 | 42.55 |
| Qwen3-VL-8B | 60.07 | 87.58 | 36.72 | 6.64 | 35.89 |
| VideoLLaMA2-72B | 50.83 | 92.29 | 51.13 | 16.12 | 45.76 |
| VideoLLaMA3-7B | 56.38 | 91.63 | 48.56 | 12.72 | 43.84 |
| VideoLLaMA2.1-7B-FT (AV) | 未直接列出整体正确率 | - | - | - | - |
表：部分关键模型在QIVD离线设置（使用GT问题与时间戳）下的性能对比。

5.  实际意义：该工作为评估和推动能够进行实时、交互式、情境感知的多模态AI系统建立了重要基准。它指明了未来研究需要重点突破的瓶颈：动态时序推理、跨模态实时融合以及对话时机感知。
6.  主要局限性：数据集规模（2900个视频）相对较小，可能限制了所训练模型的泛化能力。评估依赖于一个LLM裁判，虽然进行了人工比对，但其绝对准确性有待商榷。此外，论文未提出一种全新的、端到端训练的在线交互模型架构，而是更多地评估现有模型并组合现有模块。

---

