---
title: "Omni-Captioner: Data Pipeline, Models, and Benchmark for Omni Detailed Perception"
date: 2026-05-02
draft: false
tags: [音频场景理解, 多模态模型, 基准测试, 数据集, 开源工具]
categories: [iclr-2026]
description: "音频场景理解 | 9.0/10"
hiddenInHomeList: true
---

# 📄 Omni-Captioner: Data Pipeline, Models, and Benchmark for Omni Detailed Perception

#音频场景理解 #多模态模型 #基准测试 #数据集 #开源工具

🔥 **9.0/10** | 前25% | #音频场景理解 | #多模态模型 | #基准测试 #数据集

学术质量 6.5/7 | 选题价值 1.5/2 | 复现加成 1.0 | 置信度 高


### 👥 作者与机构

- 第一作者：Ziyang Ma（上海交通大学， 南洋理工大学）（论文中为共同第一作者）
- 通讯作者：Xie Chen（上海交通大学， 上海创智学院）（论文中为共同通讯作者）
- 作者列表：Ziyang Ma（上海交通大学， 南洋理工大学）、Ruiyang Xu（上海交通大学）（共同第一作者）、Zhenghao Xing（香港中文大学）（共同第一作者）、Yunfei Chu（阿里集团， Qwen团队）、Yuxuan Wang（阿里集团， Qwen团队）、Jinzheng He（阿里集团， Qwen团队）、Jin Xu†（阿里集团， Qwen团队）（项目负责人）、Pheng-Ann Heng（香港中文大学）、Kai Yu（上海交通大学）、Junyang Lin（阿里集团， Qwen团队）、Eng Siong Chng（南洋理工大学）、Xie Chen‡（上海交通大学， 上海创智学院）（共同通讯作者）

#

### 💡 毒舌点评

亮点在于提出了一个从“侦探式”数据生成、到针对性模型训练、再到闭式基准评估的完整闭环方案，直面多模态描述中“细节-幻觉”权衡这一核心矛盾，系统性强且效果显著。短板则是“多模态细粒度描述生成”本身仍是一个相对垂直和小众的任务，且模型架构本身是基于现有骨干（Qwen2.5-Omni）的微调，并非底层架构创新。

#

### 🔗 开源详情

- 代码：提供完整代码仓库链接：https://github.com/ddlBoJack/Omni-Captioner
- 模型权重：论文明确声明模型已开源，包含Audio-Captioner-7B和Omni-Captioner-7B。
- 数据集：Omni-Detective生成的数据集和Omni-Cloze基准均随代码开源。
- Demo：论文中未提及在线演示。
- 复现材料：提供了极其详尽的附录，包括训练超参数表（表6）、Omni-Detective提示模板、Omni-Cloze数据策展流程和提示模板、评估设置、完整的结果表格（表7-18），复现指导非常充分。
- 论文中引用的开源项目：骨干模型为Qwen2.5-Omni-7B。数据来源为VGGSound和FineVideo数据集。

### 📌 核心摘要

1. 要解决的问题：当前全模态语言模型（OLMs）在生成多模态细粒度描述时，存在“细节覆盖率”与“幻觉率”同步增长的固有矛盾。
2. 方法核心：提出Omni-Detective agentic数据生成管线，模拟侦探模式，通过LLM代理调用多种工具（OCR， ASR， MLLM等）进行多轮、迭代的查询-观察循环，以自主生成高细节、低幻觉的标注数据。基于此数据，采用两阶段课程学习策略训练出Audio-Captioner（音频描述）和Omni-Captioner（音视频描述）模型。同时，设计并构建了首个闭式评估基准Omni-Cloze。
3. 创新点与优势：(1) 揭示并尝试解耦“细节与幻觉共增长”现象；(2) 创新的侦探式数据生成管线，实现了自举式的高质量数据构造；(3) 提出的Omni-Cloze基准，能稳定、高效、全面地评估音频、视频及音视频细粒度描述能力。
4. 主要实验结果：Omni-Captioner-7B在VDC基准上达到新的SOTA（55.0%准确率）；在video-SALMONN 2测试集上，在细节与幻觉率之间实现了最佳权衡（Miss% 17.8, Hall% 10.9）。在级联QA评估中，Audio-Captioner-7B在MMAU（70.0%）和MMAR（59.8%）上达到开源模型最佳，性能可比肩Gemini 2.5 Pro；Omni-Captioner在Video-MME、Video-Holmes等多个音视频QA基准上为开源模型最高分。在Omni-Cloze上，Audio-Captioner和Omni-Captioner均取得最佳准确率（分别为53.2%和56.4%）。
5. 实际意义：为需要高精度、高信息密度多模态理解的场景（如辅助AI、科学报告、智能体）提供了可落后的技术栈和评估标准。
6. 主要局限性：Omni-Cloze评估范式主要检测“内容级不准确”的幻觉，对于模型“生成完全无关内容”的幻觉类型难以可靠衡量。数据生成管线依赖当前工具和模型的性能上限。

#

### 🏗️ 模型架构

Omni-Detective 数据生成管线
整体架构如图3所示，由三个核心组件构成：
1.  侦探代理（Detective Agent）：一个LLM，负责编排整个感知过程。它根据当前观察结果和剩余查询次数，动态生成下一步的查询问题，并调用合适的工具。
2.  工具箱（Tool Box）：包含多种专业工具，如多模态大语言模型（MLLM）、光学字符识别（OCR）、自动语音识别（ASR）等，用于从原始视频/音频中提取特定类型的精确信息。
3.  观察者（Observers）：多个独立的、可接触原始音视频流的模块。它们接收侦探代理的查询，利用工具分析内容，并返回结构化的观察结果。

![Omni-Detective Pipeline](/audio-paper-digest-blog/images/iclr-2026/2026-05-02/Z091XLyVkJ-2.jpg)

工作流程：这是一个迭代的“查询-观察”循环。在每一轮中，侦探代理基于已收集的证据提出一个具体问题（例如“转录背景对话”、“识别画面中的文字”），并选择一个工具发送给对应的观察者。观察者调用工具分析音视频，将详细结果反馈给侦探代理。代理整合新证据，并决定下一步查询。此过程持续多轮（最多10轮），直至侦探代理认为已收集足够证据，最终整合所有观察结果，生成一份高度详细且经过交叉验证的描述。

Omni-Captioner 模型
模型基于Qwen-2.5-Omni-7B骨干构建，采用两阶段课程学习训练：
1.  第一阶段（音频感知对齐）：冻结视觉编码器，仅使用音频详细描述数据训练音频编码器和LLM。这强制模型先精准学习音频特征，生成Audio-Captioner。
2.  第二阶段（音视频感知对齐）：解冻所有组件，使用音视频详细描述数据进行联合微调，使模型学会融合双模态线索，生成连贯、完整的Omni-Captioner。

#

### 💡 核心创新点

1.  “侦探式”Agentic数据生成管线（Omni-Detective）：之前的方法大多依赖单次生成或人工设计的提示来获取训练数据。本工作模拟人类侦探的迭代调查过程，通过LLM代理主动、自适应地调用工具收集和交叉验证信息，实现了高质量、低幻觉、高细节的多模态描述数据的自动规模化生产。
2.  解耦“细节”与“幻觉”的增长：论文明确指出并实证了现有模型中描述细节增加时幻觉也同步增长的问题。Omni-Detective的设计核心就是通过多轮、有证据支撑的迭代过程，在增加细节的同时抑制幻觉，将“细节-幻觉”权衡曲线向外推移。
3.  首个面向细粒度多模态感知的闭式评估基准（Omni-Cloze）：针对现有评估指标（如BLEU、多轮QA）在评估长描述时不稳定、不高效的问题，设计了完形填空式（cloze-style）多选基准。它覆盖音频、视频、音视频三种模态，包含“未提及”选项以显式区分遗漏与幻觉，并通过单次LLM调用进行自动评分，兼顾了稳定性、效率和可靠性。

#

### 🔬 细节详述

- 训练数据：
    - 数据集：音频数据来自VGGSound，音视频数据来自FineVideo。
    - 规模与来源：原始数据经过Omni-Detective管线处理后，保留约5.5万条音频样本（Audio-Captioner）和1.5万条音视频样本（Omni-Captioner）。
    - 数据增强：未提及使用传统数据增强，数据增强体现在Omni-Detective管线通过多轮工具调用生成的丰富描述中。
- 损失函数：未说明具体损失函数，根据任务性质推测为标准的自回归语言模型交叉熵损失。
- 训练策略：
    - 优化器：AdamW。
    - 学习率：5e-6。
    - 调度策略：线性学习率调度。
    - Batch Size：Audio-Captioner为8 GPU  2样本/GPU  4梯度累积 = 64；Omni-Captioner为8 GPU  1样本/GPU  2梯度累积 = 16。
    - 训练轮数：2个epoch。
- 关键超参数：骨干模型为Qwen-2.5-Omni-7B（7B参数）。Omni-Detective最大交互轮数为10。
- 训练硬件：8张A100 80GB GPU。Audio-Captioner训练约8小时，Omni-Captioner训练约38小时。
- 推理细节：开源模型使用贪心解码（beam size=1）以确保可复现性。级联QA评估中使用GPT-4o作为QA骨干。
- 正则化或稳定训练技巧：未提及额外正则化技巧，核心技巧在于两阶段课程学习策略以缓解模态信息密度不平衡。

#

### 📊 实验结果

1. 在现有详细描述基准上的直接性能
论文在VDC（仅视觉）和video-SALMONN 2 test（音视频）两个基准上评估了Omni-Captioner的直接描述能力。

| 模型 | 模态 | VDC Acc% ↑ | VDC Score ↑ | video-SALMONN 2test Miss% ↓ | video-SALMONN 2test Hall% ↓ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Gemini 2.5 Pro | A+V | 43.1 | 2.2 | 21.8 | 16.5 |
| Qwen2.5-VL-7B | V | 44.5 | 2.4 | - | - |
| video-SALMONN2-7B | A+V | 46.1 | 2.5 | 10.0 | 12.9 |
| Omni-Captioner-7B (Ours) | A+V | 55.0 | 2.7 | 17.8 | 10.9 |
表：主要对比结果。Omni-Captioner在VDC上达到新SOTA，在video-SALMONN 2测试集上实现了细节缺失率和幻觉率的最佳权衡。

![caption_length_vs_ratio](/audio-paper-digest-blog/images/iclr-2026/2026-05-02/Z091XLyVkJ-1.jpg)
图2：揭示了现有模型（Gemini-2.5-Pro）中，随着描述长度（细节量）增加，细节率与幻觉率同步上升的“共增长”现象。这是本文要解决的核心问题。

2. 级联QA评估（衡量描述完整性）
将模型生成的详细描述作为输入，交给LLM（GPT-4o）回答下游QA任务。

(a) 音频模型性能

| 模型 | MMAU Avg ↑ | MMAR Avg ↑ |
| :--- | :---: | :---: |
| Gemini 2.5 Pro | 70.0 | 64.1 |
| Qwen2.5-Omni-7B | 65.2 | 51.8 |
| Audio-Captioner-7B (Ours) | 70.0 | 59.8 |
表：Audio-Captioner在音频描述任务上性能与最强闭源模型持平，并显著超越其他开源模型。

(b) 音视频模型性能

| 模型 | Video-MME ↑ | Video-Holmes ↑ | WorldSense ↑ | Daily-Omni ↑ |
| :--- | :---: | :---: | :---: | :---: |
| Gemini 2.5 Pro | 75.0 | 59.9 | 53.6 | 73.6 |
| video-SALMONN 2-7B | 65.9 | 42.9 | 44.1 | 59.7 |
| Omni-Captioner-7B (Ours) | 67.1 | 48.8 | 48.2 | 67.9 |
表：Omni-Captioner在多项音视频理解基准上达到开源模型最佳，缩小了与闭源模型的差距。

3. Omni-Cloze 基准评估
这是论文提出的闭式评估基准，直接衡量模型生成的描述包含细粒度细节的准确度。

| 模型 | Omni-Cloze Acc% ↑ |
| :--- | :---: |
| Gemini 2.5 Pro | 43.6 |
| video-SALMONN 2-7B | 39.5 |
| Omni-Captioner-7B (Ours) | 56.4 |
表：Omni-Captioner在Omni-Cloze上取得最佳准确率，证明了其描述的准确性和细节丰富度。

![omni_cloze_accuracy_vs_elo](/audio-paper-digest-blog/images/iclr-2026/2026-05-02/Z091XLyVkJ-6.jpg)
图7a：Omni-Cloze准确率与人类Elo评分（代表人类偏好）散点图，相关系数r=0.91，表明该基准与人类判断高度一致，验证了其评估有效性。

![ablation_steps_vs_metrics](/audio-paper-digest-blog/images/iclr-2026/2026-05-02/Z091XLyVkJ-5.jpg)
图6：对Omni-Detective管线的消融分析。随着迭代步数增加，细节率持续上升，而幻觉率在5-6步后趋于稳定，表明该管线能有效增加细节并抑制幻觉，但也存在工具性能带来的天花板。

4. 关键消融实验
- 直接应用Omni-Detective的增益：将Omni-Detective应用于Gemini 2.5 Pro的描述过程，使其在MMAR（64.1->68.3）和Video-MME（75.0->76.1）上性能均获得提升，验证了该管线作为“即插即用”描述增强模块的有效性。

#

### ⚖️ 评分理由

- 学术质量：6.5/7。创新性体现在提出解决“细节-幻觉”矛盾的完整框架（数据、模型、评估）。技术路径合理，实验设计全面，提供了大量对比和深入分析（如消融、模态分析），数据可靠。
- 选题价值：1.5/2。多模态细粒度感知是构建强人工智能的关键一环，具有明确的前沿性和应用价值。工作针对具体痛点，解决方案实用。
- 开源与复现加成：+1.0/1。论文做到了极致的开源，提供了从数据生成脚本、训练代码、模型权重到评估基准的全套资源，复现门槛极低。

#

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
