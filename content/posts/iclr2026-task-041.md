---
title: "ICLR 2026 - 音频场景理解 论文列表"
date: 2026-05-03
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
| 🥇 | [Omni-Captioner: Data Pipeline, Models, and Benchmark for Omn](/audio-paper-digest-blog/posts/2026-05-03-omni-captioner-data-pipeline-models-and-benchmark) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [Omni-Captioner: Data Pipeline, Models, and Benchmark for Omni Detailed Perception](/audio-paper-digest-blog/posts/2026-05-03-omni-captioner-data-pipeline-models-and-benchmark)

✅ **7.5/10** | 前25% | #音频场景理解 | #多模态模型 | #音频大模型 #基准测试

👥 **作者与机构**

- 第一作者：Ziyang Ma (上海交通大学， 南洋理工大学)
- 通讯作者：Jin Xu (阿里巴巴Qwen团队)， Xie Chen (上海交通大学， 上海创新研究院)
- 作者列表：Ziyang Ma (上海交通大学， 南洋理工大学)， Ruiyang Xu (上海交通大学)， Zhenghao Xing (香港中文大学)， Yunfei Chu (阿里巴巴Qwen团队)， Yuxuan Wang (阿里巴巴Qwen团队)， Jinzheng He (阿里巴巴Qwen团队)， Jin Xu† (阿里巴巴Qwen团队)， Pheng-Ann Heng (香港中文大学)， Kai Yu (上海交通大学)， Junyang Lin (阿里巴巴Qwen团队)， Eng Siong Chng (南洋理工大学)， Xie Chen‡ (上海交通大学， 上海创新研究院)

💡 **毒舌点评**

论文最大的亮点在于它并非只训练一个模型，而是系统性地构建了从“如何生成高质量训练数据”（Omni-Detective）到“如何评估细粒度描述”（Omni-Cloze）的完整闭环，直击了当前多模态模型“细节多=幻觉多”的痛点。然而，其核心模型（Omni-Captioner）本身在架构上并无革命性突破，更多是利用精心设计的数据和训练策略（冻结视觉编码器先训音频）对现有骨干进行精调，两阶段训练虽有效但可能牺牲了端到端训练的某些优势，且对计算资源要求不低。

🔗 **开源详情**

- 代码：是，提供了GitHub仓库链接：https://github.com/ddlBoJack/Omni-Captioner
- 模型权重：是，论文提及所有数据管线、模型和基准均已开源。
- 数据集：是，论文提出的新基准Omni-Cloze以及生成的训练数据集均已开源。
- Demo：论文中未提及在线演示。
- 复现材料：是，附录中提供了详细的训练数据统计、超参数表（表6）、Omni-Detective和Omni-Cloze的完整提示词模板。
- 引用的开源项目：依赖或使用了VGGSound、FineVideo、Qwen2.5-Omni-7B等开源数据集和模型。

📌 **核心摘要**

1. 问题：全模态大语言模型（OLMs）在生成音视频详细描述时，存在一个根本性矛盾：描述越详细，捕捉到的细粒度信息越多，但产生的幻觉（错误细节）也随之同步增长。
2. 方法核心：本文提出了一个三支柱解决方案。(1) 数据层面，设计Omni-Detective管道，让LLM扮演“侦探”角色，通过多轮调用专用工具（OCR、ASR、MLLM等）像侦探取证一样迭代收集、交叉验证多模态证据，生成高细节、低幻觉的描述数据。(2) 模型层面，基于Qwen2.5-Omni-7B骨干，采用两阶段课程学习：先冻结视觉编码器，仅用音频数据训练对齐音频感知；再联合全参数微调，学习跨模态协同描述，得到Audio-Captioner和Omni-Captioner。(3) 评估层面，提出Omni-Cloze基准，采用“完形填空+多选”范式评估音频、视频及音视频描述的细节完整性，并引入“未提及”选项以明确区分遗漏与幻觉。
3. 创新点：首次提出并通过实验验证了细粒度与幻觉的“共增长”现象；Omni-Detective管道实现了数据生成过程的自动化与自我纠错；Omni-Cloze是首个覆盖音频、视频、音视频三种模态配置的细粒度描述评估基准。
4. 主要结果：
    * 在视频详细描述基准VDC上，Omni-Captioner达到 55.0% 准确率，建立新SOTA。
    * 在音视频描述测试集video-SALMONN 2上，Omni-Captioner在缺失率（17.8%）和幻觉率（10.9%）之间实现了最佳平衡。
    * 在级联评估中，Audio-Captioner在音频问答基准MMAU上达到 70.0%，匹配Gemini 2.5 Pro并超越所有开源模型；Omni-Captioner在视频问答基准Video-MME上达到 67.1%，为开源模型最高。
    * 在自建的Omni-Cloze基准上，Omni-Captioner总准确率达 56.4%，Audio-Captioner为 53.2%，均显著超过包括Gemini 2.5 Pro在内的所有基线模型。
    * （关键图表）图2展示了Gemini-2.5-Pro在描述长度增加时，细节比例与幻觉比例同步上升的趋势。图6分析了Omni-Detective迭代步骤增加带来的细节率上升和幻觉率下降。图7显示Omni-Cloze准确率与人类Elo评分有高达0.91的皮尔逊相关系数，验证了其有效性。
5. 实际意义：为开发更可靠、更详尽的多模态感知系统提供了从数据生成、模型训练到评估的全套开源工具和范式，尤其适用于需要高精度、高覆盖度描述的下游任务（如内容分析、辅助工具）。
6. 主要局限性：Omni-Cloze基准虽能有效捕获“识别但说错”的幻觉，但难以量化“完全无关的离题生成”。模型性能仍显著落后于Gemini 2.5 Pro等顶级闭源模型。

---

