---
title: "ICLR 2026 - 音频场景理解 论文列表"
date: 2026-05-04
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
| 🥇 | [Omni-Captioner: Data Pipeline, Models, and Benchmark for Omn](/audio-paper-digest-blog/posts/2026-05-04-omni-captioner-data-pipeline-models-and-benchmark) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Omni-Captioner: Data Pipeline, Models, and Benchmark for Omni Detailed Perception](/audio-paper-digest-blog/posts/2026-05-04-omni-captioner-data-pipeline-models-and-benchmark)

✅ **7.5/10** | 前25% | #音频场景理解 | #多模态模型 | #视频描述 #基准测试

👥 **作者与机构**

- 第一作者：Ziyang Ma（上海交通大学，南洋理工大学）
- 通讯作者：Jin Xu（阿里巴巴通义团队），Xie Chen（上海交通大学，上海创新研究院）
- 作者列表：
    - Ziyang Ma（上海交通大学，南洋理工大学）*
    - Ruiyang Xu（上海交通大学）*
    - Zhenghao Xing（香港中文大学）*
    - Yunfei Chu（阿里巴巴通义团队）
    - Yuxuan Wang（阿里巴巴通义团队）
    - Jinzheng He（阿里巴巴通义团队）
    - Jin Xu†（阿里巴巴通义团队）
    - Pheng-Ann Heng（香港中文大学）
    - Kai Yu（上海交通大学）
    - Junyang Lin（阿里巴巴通义团队）
    - Eng Siong Chng（南洋理工大学）
    - Xie Chen‡（上海交通大学，上海创新研究院）

💡 **毒舌点评**

亮点：论文针对多模态细粒度感知中“描述越详细，幻觉越多”的核心矛盾，提出了一个从“侦探”式数据生成到两阶段模型训练，再到全新填空式评估基准的完整解决方案框架，逻辑闭环非常扎实。
短板：虽然设计了智能体数据管线，但其质量上限仍受限于所调用的闭源模型（如Gemini 2.5 Pro）的能力，本质上是用更强的闭源模型给开源模型生成训练数据，创新中略带一丝“取巧”；新基准Omni-Cloze虽然高效，但其“填空”形式与自由生成任务仍有一定差距。

🔗 **开源详情**

- 代码：是，提供GitHub仓库链接：https://github.com/ddlBoJack/Omni-Captioner
- 模型权重：是，论文中提及开源Audio-Captioner和Omni-Captioner模型。
- 数据集：是，论文中明确表示将开源由Omni-Detective管线生成的数据集。
- Demo：论文中未提及。
- 复现材料：充分。附录A提供了完整的训练超参数（GPU型号、batch size、学习率、训练时长等），附录B提供了Omni-Cloze数据集的详细统计和生成Prompt，附录C提供了详细的评估设置。
- 论文中引用的开源项目：Qwen-2.5-Omni（骨干模型），VGGSound和FineVideo（部分源数据）。

📌 **核心摘要**

本文针对多模态大语言模型（OLMs）在进行细粒度描述时存在的“细节与幻觉共生增长”问题，从数据、模型、评估三个层面提出系统性解决方案。
1.  问题：研究发现，当前OLMs生成的描述越详细，其中包含的正确细粒度信息与幻觉内容（错误信息）都会同步增长，这严重限制了模型在需要高精度描述场景的应用。
2.  方法核心：提出了一种名为Omni-Detective的智能体数据生成管线。该管线模拟侦探调查过程，通过LLM智能体多轮调用OCR、ASR、MLLM等工具，迭代地从音视频数据中搜集证据并交叉验证，最终生成高细节、低幻觉的标注数据。
3.  新方法：基于Omni-Detective生成的数据，采用两阶段课程学习策略训练模型。第一阶段冻结视觉编码器，专注对齐音频细节；第二阶段联合优化所有模态。最终训练出Audio-Captioner（纯音频）和Omni-Captioner（音视频）。此外，设计了全新的填空式评估基准Omni-Cloze，覆盖纯音频、纯视觉和音视频三种模态。
4.  主要实验结果：Omni-Captioner在VDC基准上取得55.0%准确率的新SOTA；在video-SALMONN 2测试集上，以10.9%的幻觉率和17.8%的缺失率实现了最佳权衡（见Table 2）。Audio-Captioner在MMAU上达到70.0%准确率，媲美Gemini 2.5 Pro（见Table 3a）。在自建的Omni-Cloze基准上，Omni-Captioner总准确率56.4%，显著领先所有基线（见Table 4b）。
5.  实际意义：为多模态模型的细粒度感知研究提供了高质量数据生成范式、更强的模型基线以及更可靠、高效的评估标准，有望推动更精准、更全面的音视频理解技术发展。
6.  主要局限性：评估基准Omni-Cloze虽然是填空式，但最终仍依赖LLM进行答案匹配，引入了新的评估不确定性。数据生成管线的质量与效率高度依赖底层工具模型的性能，存在一定的能力天花板。

---

