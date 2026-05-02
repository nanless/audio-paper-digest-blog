---
title: "ICLR 2026 - 音视频问答 论文列表"
date: 2026-05-03
draft: false
tags: ["音视频问答"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音视频问答 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音视频问答

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [WorldSense: Evaluating Real-world Omnimodal Understanding fo](/audio-paper-digest-blog/posts/2026-05-03-worldsense-evaluating-real-world-omnimodal) | 8.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [WorldSense: Evaluating Real-world Omnimodal Understanding for Multimodal LLMs](/audio-paper-digest-blog/posts/2026-05-03-worldsense-evaluating-real-world-omnimodal)

🔥 **8.5/10** | 前25% | #音视频问答 | #基准测试 | #多模态模型 #模型评估

👥 **作者与机构**

- 第一作者：Jack Hong (Xiaohongshu Inc.)
- 通讯作者：Weidi Xie (Shanghai Jiao Tong University)
- 作者列表：Jack Hong (Xiaohongshu Inc.)、Shilin Yan (Xiaohongshu Inc.)、Jiayin Cai (Xiaohongshu Inc.)、Xiaolong Jiang (Xiaohongshu Inc.)、Yao Hu (Xiaohongshu Inc.)、Weidi Xie (Shanghai Jiao Tong University)

💡 **毒舌点评**

亮点在于其严谨、系统化的基准设计，首次强制要求音视频信息强耦合来评估MLLMs，从而揭示了当前模型在真实世界理解上的真实短板（最佳开源音频-视觉模型仅25%准确率）。短板则是评估框架局限于选择题，无法评估模型的生成能力和解释性，且论文并未提出新的模型架构来解决所揭示的问题，更多地是“诊断”而非“治疗”。

🔗 **开源详情**

- 代码：论文中未直接提供代码仓库链接，但提供了项目主页（https://jaaackhongggg.github.io/WorldSense），通常项目主页会包含GitHub链接。
- 模型权重：论文评估的是现有模型，未提出新模型，因此未提及新权重。
- 数据集：WorldSense数据集已公开，可通过项目主页获取。论文采用CC BY-NC-SA 4.0许可证。
- Demo：未提及在线演示。
- 复现材料：论文提供了详细的评估设置（附录A.3）、三种输入配置的评估提示模板（附录A.4）以及数据集构建流程，复现信息充分。
- 论文中引用的开源项目：质量控制部分使用了Qwen2-VL、Video-LLaMA2、OneLLM等开源模型进行自动化验证。评估部分引用了大量作为基线的开源MLLMs。

📌 **核心摘要**

1.  问题：当前多模态大语言模型（MLLMs）的评估主要集中在视觉-语言任务上，忽略了音频这一关键模态，导致对模型真实世界多模态能力的评估不完整。已有的音频-视觉基准或任务单一、场景简单，或质量参差不齐。
2.  方法核心：提出了WorldSense，第一个旨在评估MLLMs对真实世界全模态（视觉+音频+文本）视频理解能力的基准。其核心设计原则是强调音视频信息的强耦合，使得回答每个问题都必须同时利用视觉和听觉线索。
3.  创新点：与已有基准相比，WorldSense的新颖之处在于：(1) 首次全面评估音视频耦合的实时视频理解；(2) 数据集包含多样化的1,662个音视频同步视频，覆盖8个领域、67个子类别，以及3,172个多选题，任务涵盖26类认知层次；(3) 所有QA对由80名专家标注员进行多轮人工标注和校正，并辅以MLLM自动化验证，确保高质量。
4.  主要实验结果：对多种开源和专有MLLMs进行了广泛评估。结果显示，当前开源音频-视觉模型表现接近随机猜测（约25%准确率），远低于仅处理视觉的模型。最好的专有模型Gemini 2.5 Pro也仅达到65.1%的准确率，表明模型在真实世界全模态推理上存在显著差距。消融实验表明，原始音频信号比文本转录能提供额外性能增益。具体结果见下表。

主要实验结果表（摘要）

| 模型类别 | 代表模型 | 平均准确率（%） |
| :--- | :--- | :--- |
| 开源音频-视觉MLLMs | Qwen3-Omni (7B) | 54.0 |
| 开源视频MLLMs | LLaVA-Video (7B) | 40.2 |
| 专有MLLMs | Gemini 2.5 Pro | 65.1 |

5.  实际意义：WorldSense为评估和推动MLLMs向更人类化的真实世界全模态理解发展提供了一个高质量的基准平台，其设计原则和评估结果为未来模型在多模态信息融合、音频理解等方面的改进提供了明确指引。
6.  主要局限性：评估框架限于选择题，无法评估模型生成开放式回答或进行复杂推理链展示的能力；基准本身没有提出解决模型现有缺陷的新方法。

---

