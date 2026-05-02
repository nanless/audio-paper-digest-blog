---
title: "ICLR 2026 - 音频场景理解 论文列表"
date: 2026-05-02
draft: false
tags: ["音频场景理解"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频场景理解 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频场景理解

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Omni-Captioner: Data Pipeline, Models, and Benchmark for Omn](/audio-paper-digest-blog/posts/2026-05-02-omni-captioner-data-pipeline-models-and-benchmark) | 9.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Omni-Captioner: Data Pipeline, Models, and Benchmark for Omni Detailed Perception](/audio-paper-digest-blog/posts/2026-05-02-omni-captioner-data-pipeline-models-and-benchmark)

🔥 **9.0/10** | 前25% | #音频场景理解 | #多模态模型 | #基准测试 #数据集

👥 **作者与机构**

- 第一作者：Ziyang Ma（上海交通大学， 南洋理工大学）（论文中为共同第一作者）
- 通讯作者：Xie Chen（上海交通大学， 上海创智学院）（论文中为共同通讯作者）
- 作者列表：Ziyang Ma（上海交通大学， 南洋理工大学）、Ruiyang Xu（上海交通大学）（共同第一作者）、Zhenghao Xing（香港中文大学）（共同第一作者）、Yunfei Chu（阿里集团， Qwen团队）、Yuxuan Wang（阿里集团， Qwen团队）、Jinzheng He（阿里集团， Qwen团队）、Jin Xu†（阿里集团， Qwen团队）（项目负责人）、Pheng-Ann Heng（香港中文大学）、Kai Yu（上海交通大学）、Junyang Lin（阿里集团， Qwen团队）、Eng Siong Chng（南洋理工大学）、Xie Chen‡（上海交通大学， 上海创智学院）（共同通讯作者）

#

💡 **毒舌点评**

亮点在于提出了一个从“侦探式”数据生成、到针对性模型训练、再到闭式基准评估的完整闭环方案，直面多模态描述中“细节-幻觉”权衡这一核心矛盾，系统性强且效果显著。短板则是“多模态细粒度描述生成”本身仍是一个相对垂直和小众的任务，且模型架构本身是基于现有骨干（Qwen2.5-Omni）的微调，并非底层架构创新。

#

🔗 **开源详情**

- 代码：提供完整代码仓库链接：https://github.com/ddlBoJack/Omni-Captioner
- 模型权重：论文明确声明模型已开源，包含Audio-Captioner-7B和Omni-Captioner-7B。
- 数据集：Omni-Detective生成的数据集和Omni-Cloze基准均随代码开源。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极其详尽的附录，包括训练超参数表（表6）、Omni-Detective提示模板、Omni-Cloze数据策展流程和提示模板、评估设置、完整的结果表格（表7-18），复现指导非常充分。
- 论文中引用的开源项目：骨干模型为Qwen2.5-Omni-7B。数据来源为VGGSound和FineVideo数据集。

📌 **核心摘要**

1. 要解决的问题：当前全模态语言模型（OLMs）在生成多模态细粒度描述时，存在“细节覆盖率”与“幻觉率”同步增长的固有矛盾。
2. 方法核心：提出Omni-Detective agentic数据生成管线，模拟侦探模式，通过LLM代理调用多种工具（OCR， ASR， MLLM等）进行多轮、迭代的查询-观察循环，以自主生成高细节、低幻觉的标注数据。基于此数据，采用两阶段课程学习策略训练出Audio-Captioner（音频描述）和Omni-Captioner（音视频描述）模型。同时，设计并构建了首个闭式评估基准Omni-Cloze。
3. 创新点与优势：(1) 揭示并尝试解耦“细节与幻觉共增长”现象；(2) 创新的侦探式数据生成管线，实现了自举式的高质量数据构造；(3) 提出的Omni-Cloze基准，能稳定、高效、全面地评估音频、视频及音视频细粒度描述能力。
4. 主要实验结果：Omni-Captioner-7B在VDC基准上达到新的SOTA（55.0%准确率）；在video-SALMONN 2测试集上，在细节与幻觉率之间实现了最佳权衡（Miss% 17.8, Hall% 10.9）。在级联QA评估中，Audio-Captioner-7B在MMAU（70.0%）和MMAR（59.8%）上达到开源模型最佳，性能可比肩Gemini 2.5 Pro；Omni-Captioner在Video-MME、Video-Holmes等多个音视频QA基准上为开源模型最高分。在Omni-Cloze上，Audio-Captioner和Omni-Captioner均取得最佳准确率（分别为53.2%和56.4%）。
5. 实际意义：为需要高精度、高信息密度多模态理解的场景（如辅助AI、科学报告、智能体）提供了可落后的技术栈和评估标准。
6. 主要局限性：Omni-Cloze评估范式主要检测“内容级不准确”的幻觉，对于模型“生成完全无关内容”的幻觉类型难以可靠衡量。数据生成管线依赖当前工具和模型的性能上限。

#

---

