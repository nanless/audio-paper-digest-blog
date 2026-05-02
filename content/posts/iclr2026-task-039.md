---
title: "ICLR 2026 - 音视频描述 论文列表"
date: 2026-05-03
draft: false
tags: ["音视频描述"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音视频描述 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音视频描述

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Omni-Captioner: Data Pipeline, Models, and Benchmark for Omn](/audio-paper-digest-blog/posts/2026-05-03-omni-captioner-data-pipeline-models-and-benchmark) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Omni-Captioner: Data Pipeline, Models, and Benchmark for Omni Detailed Perception](/audio-paper-digest-blog/posts/2026-05-03-omni-captioner-data-pipeline-models-and-benchmark)

✅ **7.5/10** | 前25% | #音视频描述 | #多模态模型 | #基准测试 #预训练

👥 **作者与机构**

- 第一作者：Ziyang Ma（Shanghai Jiao Tong University， Nanyang Technological University）
- 通讯作者：Xie Chen（Shanghai Jiao Tong University， Shanghai Innovation Institution）
- 作者列表：Ziyang Ma（Shanghai Jiao Tong University, Nanyang Technological University）、Ruiyang Xu（Shanghai Jiao Tong University）、Zhenghao Xing（The Chinese University of Hong Kong）、Yunfei Chu（Qwen Team, Alibaba Group）、Yuxuan Wang（Qwen Team, Alibaba Group）、Jinzheng He（Qwen Team, Alibaba Group）、Jin Xu（Qwen Team, Alibaba Group）、Pheng-Ann Heng（The Chinese University of Hong Kong）、Kai Yu（Shanghai Jiao Tong University）、Junyang Lin（Qwen Team, Alibaba Group）、Eng Siong Chng（Nanyang Technological University）、Xie Chen（Shanghai Jiao Tong University, Shanghai Innovation Institution）

💡 **毒舌点评**

这篇论文提供了一个从数据生成、模型训练到评估的完整“端到端”解决方案，系统性很强，且在多个基准测试上取得了SOTA结果，实证工作扎实。然而，其核心数据生成引擎“Omni-Detective”本质上是“用强大的闭源工具（Gemini, GPT）来为开源工具生成训练数据”，这种“以彼之矛，攻彼之盾”的模式虽然有效，但创新上限和通用性略受质疑，且新提出的评估基准Omni-Cloze的有效性仍需更广泛的社区检验。

🔗 **开源详情**

- 代码：提供。论文明确指出所有数据流水线、模型和基准均已开源，并提供了GitHub仓库链接：`https://github.com/ddlBoJack/Omni-Captioner`。
- 模型权重：已提及公开。论文标题包含“Models”，并承诺开源，可合理推断Audio-Captioner和Omni-Captioner的模型权重将随代码发布。
- 数据集：已提及公开。论文承诺开源Omni-Detective流水线生成的数据集以及Omni-Cloze评估基准。
- Demo：论文中未提及在线演示。
- 复现材料：提供。附录A详细列出了训练数据细节、提示模板和模型超参数（表6）。附录B详述了基准构建流程和统计数据。附录C提供了更多评估结果和设置。
- 论文中引用的开源项目：主要依赖了Qwen-2.5-Omni作为骨干模型。数据生成流水线中使用了Gemini系列和GPT-4o等API作为工具（闭源）。训练数据基于公开的VGGSound2和FineVideo3数据集。评估基准VDC和video-SALMONN 2是先前工作。
- 复现壁垒：论文中未提及开源计划。但根据其承诺和内容，主要复现壁垒在于完全执行Omni-Detective流水线需要访问Gemini Pro/Flash和GPT-4o等付费API，这会产生持续的成本。

📌 **核心摘要**

1.  解决的问题：当前全模态语言模型（OLMs）在生成详细描述时，存在一个核心矛盾：描述越详细，包含的细粒度信息越多，但同时产生的幻觉（事实性错误）也同步增长（论文称之为“共生增长”）。现有方法难以平衡细节覆盖与事实准确性。
2.  方法核心：提出了一个三合一的解决方案：
    *   Omni-Detective：一个模拟侦探工作的代理式数据生成流水线。它通过多轮交互，调用多种工具（如ASR, OCR, MLLM）从音视频中收集、验证并整合证据，以生成高细节、低幻觉的标注数据。
    *   Omni-Captioner：基于Qwen-2.5-Omni-7B骨架，采用两阶段课程学习训练的音视频详细描述模型。第一阶段冻结视觉编码器，专注音频细节对齐；第二阶段联合优化，生成跨模态的连贯叙述。
    *   Omni-Cloze：首个覆盖音频、视觉和音视频场景的填空式详细描述评估基准，通过带“未提及”选项的选择题，稳定高效地评估细节完整性与幻觉。
3.  与已有方法相比新在哪里：首次系统性地研究并试图解耦“细节”与“幻觉”的共生关系。Omni-Detective摒弃了传统的单轮提示生成数据的方式，采用了迭代、多工具、跨模态验证的代理流程。模型训练采用了针对模态不平衡设计的课程学习。评估方面，Omni-Cloze在覆盖模态（AV）、评估问题数量和效率（单次LLM调用）上均优于现有VDC基准。
4.  主要实验结果：
    *   直接评估：Omni-Captioner在VDC基准上达到SOTA（准确率55.0%），在video-SALMONN 2测试集上实现了细节（17.8%遗漏率）与幻觉（10.9%幻觉率）的最佳平衡。
    *   级联评估（先生成描述再QA）：Audio-Captioner在音频QA基准MMAU（70.0%）和MMAR（59.8%）上超越所有开源模型及Gemini 2.5 Flash。Omni-Captioner在音视频QA基准Video-MME, Video-Holmes, WorldSense, Daily-Omni上均取得开源模型最佳。
    *   新基准评估：在Omni-Cloze上，Audio-Captioner（音频53.2%）和Omni-Captioner（总56.4%）均大幅超越所有现有基线，包括Gemini 2.5 Pro。
    *   分析：Omni-Detective分析显示，增加迭代步数可稳步提升细节率，但幻觉率收敛较早。Omni-Cloze的自动评估与人类偏好（Elo分数）相关性（r=0.91）高于VDC（r=0.86）。
5.  实际意义：为开发更可靠、更丰富的多模态感知系统提供了完整的技术栈（数据、模型、评估）。高质量的细粒度描述对于辅助AI、科学报告、自主智能体等需要精确、全面理解音视频内容的应用至关重要。
6.  主要局限性：Omni-Detective流水线高度依赖外部、部分闭源的MLLM和工具，其效果受制于这些工具的天花板。论文自述无法检测所有类型的幻觉（如完全无关的内容生成）。提出的Omni-Cloze基准虽通过人工验证，但其评估范式的普适性和长期稳定性有待更多研究验证。

---

