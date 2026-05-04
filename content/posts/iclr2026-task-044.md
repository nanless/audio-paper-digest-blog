---
title: "ICLR 2026 - 音视频联合推理 论文列表"
date: 2026-05-04
draft: false
tags: ["音视频联合推理"]
categories: [iclr-2026]
description: "共 1 篇 ICLR 2026 音视频联合推理 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音视频联合推理

共 **1** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [JointAVBench: A Benchmark for Joint Audio-Visual Reasoning E](/audio-paper-digest-blog/posts/2026-05-04-jointavbench-a-benchmark-for-joint-audio-visual) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [JointAVBench: A Benchmark for Joint Audio-Visual Reasoning Evaluation](/audio-paper-digest-blog/posts/2026-05-04-jointavbench-a-benchmark-for-joint-audio-visual)

✅ **7.0/10** | 前25% | #音视频联合推理 | #基准测试 | #多模态模型 #大语言模型

👥 **作者与机构**

- 第一作者：Jianghan Chao（中国人民大学高瓴人工智能学院）
- 通讯作者：Ruihua Song（中国人民大学高瓴人工智能学院）
- 作者列表：Jianghan Chao（中国人民大学高瓴人工智能学院），Jianzhang Gao（中国人民大学高瓴人工智能学院），Wenhui Tan（中国人民大学高瓴人工智能学院），Yuchong Sun（中国人民大学高瓴人工智能学院），Ruihua Song（中国人民大学高瓴人工智能学院），Liyun Ru（百川智能）

💡 **毒舌点评**

亮点在于提出了一个设计严谨、维度全面的音视频联合推理评估框架，并巧妙地利用先进的LLM构建了自动化数据生成流水线，在保证质量的同时大幅降低了标注成本；短板在于其基准数据集完全来源于SF20K这一特定影视数据集，可能存在领域偏差，且论文主要贡献是评估基准而非新的建模方法，对推动模型架构本身创新的直接贡献有限。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开权重。
- 数据集：公开。论文提供了项目页面链接 (https://jointavbench.github.io)，并说明JointAVBench数据集将在该页面发布。
- Demo：未提及。
- 复现材料：论文在附录中提供了生成流水线各阶段使用的详细Prompt模板（如图10-16），这对于复现其数据生成过程至关重要。
- 论文中引用的开源项目：引用了多个开源模型（Qwen2.5-VL, Qwen2.5-Omni, Whisper-v3等）和工具（PySceneDetect）用于构建基准。
- 整体开源计划：论文明确表示会发布数据集，但代码和模型权重的开源计划未提及。

📌 **核心摘要**

1. 要解决什么问题：现有评估全模态大语言模型（Omni-LLMs）的基准测试在音视频关联严格性、音频类型多样性和场景复杂度覆盖方面存在不足，无法有效评估模型真正的联合音视频推理能力。
2. 方法核心是什么：提出JointAVBench，一个从5个认知维度、4种音频类型、3个场景跨度构建的15项任务基准。其核心创新在于设计了一个三阶段半自动化数据生成流水线：首先生成全模态描述（视频、语音、声音事件、音乐、声纹特征），然后利用LLM合成严格依赖音视频联合信息的问答对，最后通过通用到特定的多层质量控制确保数据质量。
3. 与已有方法相比新在哪里：这是首个同时满足“严格音视频关联（AV Correlation Ratio 100%）”、“覆盖四种音频类型（含声纹特征）”和“涵盖单场景、跨场景、全场景”的综合基准。与现有基准（如WorldSense，AV Corr. 62.9%）相比，其问题设计更严谨地强制依赖双模态信息。
4. 主要实验结果如何：在JointAVBench上评估了主流Omni-LLMs、Video-LLMs和Audio-LLMs。结果显示，即使最强的Omni-LLM（Gemini2.5-Pro）平均准确率也仅为62.6%，显著优于单模态模型，但在跨场景推理等任务上表现仍不理想。模型在声纹特征和语音相关任务（如SPER， SPL）上表现最差，在涉及声音事件和音乐的任务上表现相对较好。
5. 实际意义是什么：为评估和推动具有真正音视频联合推理能力的Omni-LLM发展提供了关键的、标准化的评测工具，明确指出了当前模型在处理抽象音频信息（如声纹特征、情感）和复杂跨场景推理时的主要短板。
6. 主要局限性是什么：数据源单一（仅SF20K短片），可能引入领域偏差；设计的任务分类法虽全面但无法穷尽所有音视频推理能力；受计算资源限制，实验评估的模型数量有限。

---

