---
title: "ICASSP 2026 - 视频问答 论文列表"
date: 2026-04-29
draft: false
tags: ["视频问答"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 视频问答 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 视频问答

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [DAMO: A Data-Efficient Multimodal Orchestrator for Temporal ](/audio-paper-digest-blog/posts/2026-04-29-damo-a-data-efficient-multimodal-orchestrator-for) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [DAMO: A Data-Efficient Multimodal Orchestrator for Temporal Reasoning with Video LLMS](/audio-paper-digest-blog/posts/2026-04-29-damo-a-data-efficient-multimodal-orchestrator-for)

✅ **7.0/10** | 前25% | #视频问答 | #多模态模型 | #时间定位 #渐进训练

👥 **作者与机构**

- 第一作者：Bo-Cheng Chiu (国立阳明交通大学人工智能学院)
- 通讯作者：未明确标注。根据贡献和机构排序，推测可能为通讯作者的是：Jen-Jee Chen (国立阳明交通大学人工智能学院)， Yu-Chee Tseng (国立阳明交通大学人工智能学院)， 或 An-Zi Yen (国立阳明交通大学计算机科学系)。论文中未明确指定。
- 作者列表：Bo-Cheng Chiu (国立阳明交通大学人工智能学院)， Jen-Jee Chen (国立阳明交通大学人工智能学院)， Yu-Chee Tseng (国立阳明交通大学人工智能学院)， Feng-Chi Chen (国家卫生研究院人口健康科学研究所)， An-Zi Yen (国立阳明交通大学计算机科学系)

💡 **毒舌点评**

这篇论文在“用有限数据做好时间推理”这个问题上给出了一个工程上漂亮的答卷，其四阶段训练策略和针对时间性的架构设计确实能提升模型对视频时间线的理解力，实验也证明了其在特定benchmark上的有效性。但说实话，它的核心组件如双流融合、可学习查询、LoRA微调等都不是独创，更像是针对视频任务的一次精心的“乐高组装”；另外，其宣称的“数据高效”优势，在论文比较表中与部分基线使用的数据规模差异巨大，这种对比的公平性值得进一步考量。

🔗 **开源详情**

- 代码：论文提供了项目主页链接（https://yue-723.github.io/DaMO-2025-page/），但未明确说明该页面是否包含或未来会包含代码仓库。
- 模型权重：未提及是否公开预训练或微调后的模型权重。
- 数据集：论文提及使用了多个公开数据集（InternVid, VideoInstruct-100K, Charades-STA等），并额外贡献了LLM生成的时间定位QA数据集，但未说明该增强数据集是否将公开。
- Demo：未提及在线演示。
- 复现材料：提供了较为充分的复现信息，包括模型架构细节、四阶段训练流程的具体数据量、优化器配置、硬件环境、关键超参数（帧数、查询数、维度等）。
- 引用的开源项目：论文依赖并引用了多个开源项目/模型作为基线或组件，包括：ViT-L/14 (EVA-CLIP)、Whisper-small、LLaVA-v1.6-Mistral-7B、LoRA、Video-LLaMA、VTimeLLM、VideoChat2等。

📌 **核心摘要**

1.  要解决的问题：当前的视频大语言模型在细粒度时间推理（如将答案归因于精确时刻）和音视频紧密融合方面存在不足，且通常需要大量数据和计算资源进行训练。
2.  方法核心：提出DaMO，一个数据高效的视频LLM。其核心是时间感知融合Transformer（T-Fuseformer），采用层次化双流设计，先分别建模视觉和音频的模态特定动态，再通过可学习的查询token和共享的融合token进行跨模态对齐与融合。同时引入全局残差连接，在压缩空间维度时保留全局上下文。
3.  新在何处：与现有方法相比，DaMO明确将“数据高效”和“精确时间对齐”作为设计目标。其创新在于设计了专门针对时间建模的融合架构，并采用了一套新颖的四阶段渐进式训练流程：从视频-文本对齐、表征桥接、时间感知学习到对话微调，并利用LLM生成时间定位QA数据进行增强。
4.  主要实验结果：
    *   时间定位：在Charades-STA和ActivityNet-Captions两个标准数据集上取得了当前最佳（SOTA）性能，尤其在严格匹配指标（如R@0.7）和ActivityNet数据集上优势明显。

| 方法 | Charades-STA (R@0.3) | Charades-STA (R@0.5) | Charades-STA (R@0.7) | Charades-STA (mIoU) | ActivityNet (R@0.3) | ActivityNet (R@0.5) | ActivityNet (R@0.7) | ActivityNet (mIoU) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Video-LLaMA | 10.4 | 3.8 | 0.9 | 7.1 | 6.9 | 2.1 | 0.8 | 6.5 |
| VideoChat | 9.0 | 3.3 | 1.3 | 6.5 | 8.8 | 3.7 | 1.5 | 7.2 |
| VideoChatGPT | 20.0 | 7.7 | 1.7 | 13.7 | 26.4 | 13.6 | 6.1 | 18.9 |
| VTimeLLM | 51.0 | 27.5 | 11.4 | 31.2 | 44.0 | 27.8 | 14.3 | 30.4 |
| Momentor | 42.6 | 26.6 | 11.6 | 28.5 | 42.9 | 23.0 | 12.4 | 29.3 |
| DaMO (Ours) | 50.1 | 35.5 | 21.2 | 34.8 | 57.0 | 39.7 | 23.9 | 40.3 |

*   视频对话：在VCGbench基准上，DaMO在“时间理解”这一关键指标上取得了最优成绩（3.10分），证明了其时间推理能力。
    *   零样本检索：在MSR-VTT和MSVD数据集上表现具有竞争力，尤其是在MSVD上取得了最佳结果（R@1 64.8），且使用的预训练数据量远少于InternVideo2。
5.  实际意义：为开发需要理解视频时间线并进行交互的应用（如视频助手、内容分析）提供了一种更高效的模型构建范式。其数据高效特性降低了训练门槛。
6.  主要局限性：
    *   论文未提供在超长视频（分钟级以上）上的性能评估。
    *   实验对比中，DaMO的绝对性能（如Charades-STA R@0.3）并非最高，其优势更体现在高精度指标（R@0.7）和数据效率上。
    *   对于音频模态在多大程度上贡献了最终性能，缺乏更深入的消融分析（如完全去除音频）。

---

