---
title: "ICLR 2026 - 音频检索 #视频检索 论文列表"
date: 2026-05-03
draft: false
tags: ["音频检索 #视频检索"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音频检索 #视频检索 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音频检索 #视频检索

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [OmniCVR: A Benchmark for Omni-Composed Video Retrieval with ](/audio-paper-digest-blog/posts/2026-05-03-omnicvr-a-benchmark-for-omni-composed-video) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [OmniCVR: A Benchmark for Omni-Composed Video Retrieval with Vision, Audio, and Text](/audio-paper-digest-blog/posts/2026-05-03-omnicvr-a-benchmark-for-omni-composed-video)

✅ **7.5/10** | 前25% | #音频检索 #视频检索 | #多模态模型 | #音频检索 #视频检索

👥 **作者与机构**

- 第一作者：Junyang Ji（清华大学，南方科技大学，快手科技）
- 通讯作者：Zhihai He（南方科技大学），Wenming Yang（清华大学）
- 作者列表：Junyang Ji（清华大学，南方科技大学，快手科技）、Shengjun Zhang（快手科技）、Da Li（中国科学院大学，快手科技）、Yuxiao Luo（北京大学，快手科技）、Yan Wang（快手科技）、Di Xu（快手科技）、Biao Yang（快手科技）、Wei Yuan（快手科技）、Fan Yang（快手科技）、Zhihai He（南方科技大学）、Wenming Yang（清华大学）

💡 **毒舌点评**

亮点：明确指出了当前视频检索基准忽视音频模态的关键缺陷，并提供了首个全模态组合检索基准，其自动化的数据生成流水线设计具有实用价值。短板：所提出的 AudioVLM2Vec 模型本质上是将 Qwen2-Audio 的转录结果拼接进 VLM2Vec，模型架构创新性有限，更像是针对新基准的强效 baseline，而非突破性的方法创新。

🔗 **开源详情**

- 代码：论文中承诺“将发布完整的代码库，包括数据生成脚本、训练代码和评估协议”，但未提供具体链接。
- 模型权重：基于开源的 Qwen2-Audio-7B-Instruct 和 Qwen2-VL。AudioVLM2Vec 模型本身的微调权重是否公开未明确说明。
- 数据集：OmniCVR 数据集（160K+ 片段， 50K+ 三元组）承诺将在论文发表后于 HuggingFace (https://huggingface.co/datasets/Jun-Yang/OmniCVR) 完全开源。
- Demo：未提及。
- 复现材料：提供了详细的附录，包括所有阶段使用的提示模板（Appendix G）、数据集组成分析（Appendix C.1）、基线模型描述（Appendix B），为复现提供了重要信息。
- 引用的开源项目/模型：Qwen2.5-Omni（用于标注）、Gemini 2.5 Pro（用于验证）、PySceneDetect（用于视频分割）、CLIP（用于视频特征相似度）、CLAP（用于音频特征相似度）、Qwen2-Audio-7B-Instruct（用于音频转文本）、Qwen2-VL（用于视觉-语言嵌入）。

📌 **核心摘要**

1. 问题：现有的组合视频检索（CoVR）基准几乎完全聚焦于视觉-文本对齐，严重忽略了音频信号（如语音、音乐、环境声）在视频理解中的决定性作用，导致无法评估和推动模型在真实世界多模态修改场景下的检索能力。
2. 方法：提出了首个全模态组合视频检索基准 OmniCVR。它通过一个三阶段自动化流水线构建：1）从多个长视频数据集中分割并筛选短片段；2）使用 Qwen2.5-Omni 生成包含视觉、音频、文本的详细标注；3）基于视觉和音频的相似度挖掘三元组（源视频、修改指令、目标视频）。基准包含视觉中心、音频中心和集成（视觉+音频同时修改）三类查询。同时，提出了 AudioVLM2Vec 模型，通过 Qwen2-Audio 将视频音轨转为文本描述，并将其与用户查询拼接后输入 VLM2Vec 框架进行表征学习。
3. 创新：1) 首个全模态基准：首次将视觉、音频、文本视为同等重要的一等模态，构建了大规模、高质量的组合检索数据集，其中集成查询占比超过一半，更贴近现实复杂度。2) 可扩展的数据生成：提出了一套结合内容感知分割、全模态标注与双重验证（大模型+人工）的自动化流水线。3) 音频感知的检索模型：提出了 AudioVLM2Vec，其核心是将音频信号显式转化为文本语义再注入检索模型，在音频中心任务上实现了性能飞跃。
4. 主要实验结果：在 OmniCVR 基准上评估了 7 个基线模型。AudioVLM2Vec 在所有查询类型和所有 K 值上均达到最优。关键数据如下：
    - 整体性能：AudioVLM2Vec 的 R@1 为 66.98%，较次优的 VLM2Vec（38.44%）提升 +28.54 个百分点。
    - 音频中心任务性能：AudioVLM2Vec 的 R@1 高达 77.2%，而 VLM2Vec 仅为 12.4%，提升 +64.8 个百分点，凸显了音频语义的重要性。
    - 消融实验：移除源视频的视觉帧后，AudioVLM2Vec 在音频中心任务上的 R@1 从 77.2% 骤降至 28.1%，证明了组合指令需要源视频作为上下文。在 OmniEmbed 模型上，将原生音频 token 替换为 Audio-as-Text 机制后，音频中心 R@1 从 13.6% 提升至 32.7%，进一步验证了该策略的有效性。
5. 实际意义：为多模态检索研究提供了一个更全面、更接近现实的评测平台，推动了音频在视频理解中的应用。其数据生成流水线可为其他多模态基准的构建提供参考。
6. 主要局限性：AudioVLM2Vec 的推理延迟因音频转录步骤而增加（约 1.77 倍），在需要实时性的场景中可能受限。此外，该模型目前依赖于特定的大语言模型（Qwen2-Audio）进行音频文本化，计算开销较大。

---

