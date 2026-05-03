---
title: "ICLR 2026 - 音频详细描述 论文列表"
date: 2026-05-04
draft: false
tags: ["音频详细描述"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频详细描述 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频详细描述

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Omni-Captioner: Data Pipeline, Models, and Benchmark for Omn](/audio-paper-digest-blog/posts/2026-05-04-omni-captioner-data-pipeline-models-and-benchmark) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Omni-Captioner: Data Pipeline, Models, and Benchmark for Omni Detailed Perception](/audio-paper-digest-blog/posts/2026-05-04-omni-captioner-data-pipeline-models-and-benchmark)

🔥 **8.5/10** | 前25% | #音频详细描述 | #代理数据生成 | #音视频详细描述 #多模态模型

👥 **作者与机构**

- 第一作者：Ziyang Ma（上海交通大学，南洋理工大学）
- 通讯作者：Xie Chen（上海交通大学，上海创新研究院）
- 作者列表：Ziyang Ma（上海交通大学，南洋理工大学）、Ruiyang Xu（上海交通大学）、Zhenghao Xing（香港中文大学）、Yunfei Chu（阿里巴巴通义团队）、Yuxuan Wang（阿里巴巴通义团队）、Jinzheng He（阿里巴巴通义团队）、Jin Xu†（阿里巴巴通义团队）、Pheng-Ann Heng（香港中文大学）、Kai Yu（上海交通大学）、Junyang Lin（阿里巴巴通义团队）、Eng Siong Chng（南洋理工大学）、Xie Chen‡（上海交通大学，上海创新研究院）
- 机构信息：上海交通大学、南洋理工大学、香港中文大学、上海创新研究院、阿里巴巴集团通义团队

💡 **毒舌点评**

本文系统性地揭示了多模态语言模型在详细描述任务中“越详细，越幻觉”的“共增长”困境，并针对性地提出了从数据生成（Omni-Detective）到模型训练（两阶段课程学习）再到评估（Omni-Cloze）的完整解决方案，思路清晰且实验扎实。然而，其模型架构本身（基于Qwen2.5-Omni微调）创新有限，核心贡献更多在于系统设计和数据工程，而非提出突破性的模型架构。

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：`https://github.com/ddlBoJack/Omni-Captioner`，并声明所有数据管道、模型和基准将开源。
- 模型权重：未在论文正文中直接提及是否公开预训练权重，但鉴于开源承诺，推测将开放。
- 数据集：
    - 训练数据：基于VGGSound2和FineVideo，但使用Omni-Detective生成了新的标注数据集，将开源。
    - Omni-Cloze基准：声明将开源。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极为详尽的复现信息，包括：
    1.  训练超参数：完整的表格（表6），包含GPU使用、批量大小、训练时长、学习率等。
    2.  Omni-Detective详细提示词：提供了侦探代理、观察者、数据生成和填空生成的完整提示模板（附录A.1.2， B.3）。
    3.  数据处理与评估细节：附录中详细说明了评估设置、数据策展流程。
- 论文中引用的开源项目：
    - 骨干模型：Qwen2.5-Omni
    - 工具：Gemini系列模型， GPT-4o系列模型
    - 数据集：VGGSound， FineVideo
    - 评估基准：引用的多个基准（如MMAU， MMAR， VDC等）。

📌 **核心摘要**

1.  问题：当前全模态语言模型在生成详细描述时，存在一个根本性矛盾：描述越详细，虽然捕获的正确细节增多，但同时产生的幻觉（事实错误）也显著增加，即“细节与幻觉共增长”。
2.  方法核心：本文提出了一个三管齐下的解决方案：
    *   数据管道：设计了“Omni-Detective”，一个模拟侦探工作的代理式数据生成框架，通过多轮工具调用（如OCR、ASR、MLLM）和观察者交互，自主生成高度详细且低幻觉的多模态标注数据。
    *   模型训练：基于生成的高质量数据，采用两阶段课程学习策略训练了Audio-Captioner（音频详细描述）和Omni-Captioner（音视频详细描述）模型。第一阶段冻结视觉编码器，专注音频感知对齐；第二阶段解冻所有参数，联合优化音视频感知。
    *   基准测试：提出了“Omni-Cloze”，首个覆盖纯音频、纯视觉和音视频场景的填空式详细描述评估基准，通过设计选择题（包含“未提及”选项）来稳定、高效地评估模型性能。
3.  新意：与传统依赖人工提示或单次生成的数据构建方法相比，Omni-Detective实现了自动化、迭代式、基于证据的详细数据收集，旨在解耦细节增长与幻觉增长。Omni-Cloze则为这一任务提供了首个统一且可靠的自动评估范式。
4.  实验结果：
    *   直接评估：Omni-Captioner在VDC基准测试上达到新SOTA（准确率55.0%），在video-SALMONN 2测试集上实现了最佳的细节-幻觉权衡（缺失率17.8%，幻觉率10.9%）。
    *   级联评估（生成描述后用于问答）：Audio-Captioner在音频问答基准MMAU（70.0%）和MMAR（59.8%）上超越所有开源模型，甚至优于Gemini 2.5 Flash。Omni-Captioner在多个音视频问答基准上均为开源模型最佳。
    *   Omni-Cloze评估：Audio-Captioner（53.2%）和Omni-Captioner（56.4%）在各自类别中均取得最高准确率，且Omni-Cloze的自动评分与人类偏好（Elo评分）的相关系数（r=0.91）高于现有基准。
    *   消融分析：增加Omni-Detective的调查轮次能持续提升细节率，并降低缺失率和幻觉率（幻觉率在5-6轮后趋于稳定）。将Omni-Detective直接应用于Gemini 2.5 Pro生成描述，可提升下游问答性能。
5.  实际意义：本工作为构建可靠、细致的全模态感知系统提供了可复现的全套解决方案（数据、模型、评估），对需要精确事实描述的应用（如辅助AI、科学报告）具有价值。
6.  主要局限：所提模型在架构上无本质创新，主要贡献在系统工程层面；Omni-Cloze基准虽好，但仍无法完全捕捉所有类型的幻觉（如完全无关内容的生成），这是未来工作的方向。

---

