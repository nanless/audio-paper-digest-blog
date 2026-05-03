---
title: "ICLR 2026 - 音频理解 论文列表"
date: 2026-05-03
draft: false
tags: ["音频理解"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频理解 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频理解

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Omni-Captioner: Data Pipeline, Models, and Benchmark for Omn](/audio-paper-digest-blog/posts/2026-05-03-omni-captioner-data-pipeline-models-and-benchmark) | 9.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Omni-Captioner: Data Pipeline, Models, and Benchmark for Omni Detailed Perception](/audio-paper-digest-blog/posts/2026-05-03-omni-captioner-data-pipeline-models-and-benchmark)

🔥 **9.0/10** | 前25% | #音频理解 | #数据生成 | #多模态模型 #基准测试

👥 **作者与机构**

第一作者：Ziyang Ma (上海交通大学， 南洋理工大学)
通讯作者：Xie Chen (上海交通大学， 上海创新研究院)
作者列表：
    - Ziyang Ma*（上海交通大学， 南洋理工大学）
    - Ruiyang Xu*（上海交通大学）
    - Zhenghao Xing*（香港中文大学）
    - Yunfei Chu（阿里巴巴集团 Qwen 团队）
    - Yuxuan Wang（阿里巴巴集团 Qwen 团队）
    - Jinzheng He（阿里巴巴集团 Qwen 团队）
    - Jin Xu†（阿里巴巴集团 Qwen 团队）
    - Pheng-Ann Heng（香港中文大学）
    - Kai Yu（上海交通大学）
    - Junyang Lin（阿里巴巴集团 Qwen 团队）
    - Eng Siong Chng（南洋理工大学）
    - Xie Chen‡（上海交通大学， 上海创新研究院）

💡 **毒舌点评**

这篇论文最亮眼的地方在于它构建了一个从“脏数据”治理到“严苛评估”的完整闭环：用“侦探代理”（Omni-Detective）像破案一样迭代挖掘多模态细节来清洗数据，再用“填空题”（Omni-Cloze）这种看似简单却异常稳健的方式来考试，有效缓解了细粒度描述中“说得越多错得越多”的顽疾。但短板在于其“侦探”和“考生”都高度依赖现有的顶级闭源模型（如Gemini）作为工具或裁判，方法的普适性和在更小模型上的迁移效果有待验证。

🔗 **开源详情**

- **代码**：论文中提供了GitHub链接 `https://github.com/ddlBoJack/Omni-Captioner`。
- **模型权重**：论文明确表示“所有数据管道，模型，和基准都是开源的”，因此应包含训练好的Audio-Captioner和Omni-Captioner模型权重。
- **数据集**：论文表示开源基准**Omni-Cloze**。同时，用于训练模型的**Omni-Detective生成的详细描述数据**也应包含在开源材料中。
- **Demo**：论文中未提及在线演示。
- **复现材料**：提供了极其充分的复现材料，包括：训练数据详情（来源、规模、预处理）、Omni-Detective的完整提示词模板、模型训练超参数（学习率、优化器、Batch Size、训练时长等）、硬件信息、以及Omni-Cloze基准的构建流程和评估协议。
- **论文中引用的开源项目**：论文中明确引用的开源模型/项目包括：**Qwen2.5-Omni**（作为骨干）、**VGGSound**和**FineVideo**（作为原始数据源）。此外，评估中使用了**GPT-4o**作为问答骨干。

📌 **核心摘要**

1.  **要解决什么问题**：现有全模态模型（OLMs）在生成详细描述时，存在“细节与幻觉共增长”的困境，即描述越详细，其中包含的错误信息（幻觉）也越多，这限制了多模态细粒度感知的应用。
2.  **方法核心是什么**：提出一个完整的三部分框架：(1) **Omni-Detective**：一个基于LLM代理的迭代式数据生成管道，通过调用多种工具（OCR， ASR， MLLM等）像侦探一样收集和验证证据，生成高细节、低幻觉的多模态描述数据。(2) **两阶段课程学习**：利用生成的数据，分阶段训练**Audio-Captioner**（音频）和**Omni-Captioner**（音视频）。第一阶段冻结视觉编码器以对齐音频，第二阶段联合优化。(3) **Omni-Cloze**：首个覆盖音频、视频、音视频三种模态的“填空式”评估基准，通过选择题和“未提及”选项高效评估描述的准确性和完整性。
3.  **与已有方法相比新在哪里**：新在从数据源头（迭代式工具调用生成）到模型训练（模态对齐的课程学习）再到评估范式（高效稳定的填空测试）的**系统性创新**，而非仅改进模型架构。
4.  **主要实验结果如何**：
    *   **直接评估**：Omni-Captioner在VDC基准上达到55.0%准确率（SOTA），在video-SALMONN 2测试集上实现了最佳的细节-幻觉平衡（缺失率17.8%， 幻觉率10.9%）。
    *   **级联评估**：Audio-Captioner在MMAU和MMAR基准上达到开源模型最佳，性能匹配Gemini 2.5 Pro。Omni-Captioner在Video-MME， Video-Holmes， WorldSense， Daily-Omni四个基准上均为开源模型最佳。
    *   **Omni-Cloze评估**：Omni-Captioner在音视频子集上达到62.1%准确率，超越所有基线。其评估结果与人类偏好高度相关（Pearson r = 0.91）。
5.  **实际意义是什么**：为需要高事实精度的多模态感知应用（如辅助AI、科学报告、自动化监控）提供了更可靠的技术基础。开源的管道、模型和评估基准将极大推动细粒度多模态理解领域的研究。
6.  **主要局限性是什么**：如局限部分所述，当前的评估方法（Omni-Cloze）主要能检测“错误陈述”类型的幻觉，但难以可靠地评估模型生成的与输入完全无关的内容（无关生成）。

---

