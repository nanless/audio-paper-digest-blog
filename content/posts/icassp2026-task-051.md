---
title: "ICASSP 2026 - 视频理解 论文列表"
date: 2026-04-29
draft: false
tags: ["视频理解"]
categories: [icassp-2026]
description: "共 1 篇 ICASSP 2026 视频理解 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 视频理解

共 **1** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [SceneRAG: Scene-Level Retrieval-Augmented Generation for Vid](/audio-paper-digest-blog/posts/2026-04-29-scenerag-scene-level-retrieval-augmented) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [SceneRAG: Scene-Level Retrieval-Augmented Generation for Video Understanding](/audio-paper-digest-blog/posts/2026-04-29-scenerag-scene-level-retrieval-augmented)

✅ **7.5/10** | 前25% | #视频理解 | #检索增强生成 | #长视频理解 #场景分割

👥 **作者与机构**

- 第一作者：Nianbo Zeng（广东人工智能与数字经济实验室（SZ），深圳；深圳大学计算机科学与软件工程学院）
- 通讯作者：Si Shi（广东人工智能与数字经济实验室（SZ），深圳）
- 作者列表：
    - Nianbo Zeng（广东人工智能与数字经济实验室（SZ），深圳；深圳大学计算机科学与软件工程学院）
    - Haowen Hou（广东人工智能与数字经济实验室（SZ），深圳）
    - F. Richard Yu（卡尔顿大学信息技术学院）
    - Si Shi（广东人工智能与数字经济实验室（SZ），深圳）
    - Ying Tiffany He（深圳大学计算机科学与软件工程学院）

💡 **毒舌点评**

亮点：它将视频理解从机械的“分块切割”提升到了拟人的“场景感知”，并通过动态知识图谱串联起碎片化的证据，在134小时的长视频测试中取得了最高达70.8%的胜率，证明了场景级单元对于长程推理的关键价值。短板：整个框架高度依赖LLM/VLM进行场景划分与描述，其准确性是上限，而论文对这一核心环节的误差传播与鲁棒性讨论略显不足；另外，未提供代码和模型权重，大大削弱了其可复现性。

🔗 **开源详情**

- 代码：论文中未提及提供SceneRAG框架本身的代码仓库链接。
- 模型权重：未提及公开SceneRAG框架下训练或微调的任何模型权重。
- 数据集：论文使用了公开基准LongerVideos和Video-MME，但未提及是否提供其处理后的场景分割标注或场景知识图谱数据。
- Demo：未提及提供在线演示。
- 复现材料：论文给出了详细的算法描述（算法1）和方法流程，但缺乏具体的实现细节、超参数配置文件、训练日志等。硬件环境已说明（单卡3090）。
- 论文中引用的开源项目：
    - ASR: Distil-Whisper [12]
    - VLM: MiniCPM-V [14]
    - 多模态编码器: ImageBind [24]
    - 实体/片段检索嵌入: text-embedding-3-small (OpenAI)
    - 图RAG基线: GraphRAG [18], LightRAG [19]
- 论文中未提及开源计划。

📌 **核心摘要**

本文针对长视频理解中现有RAG方法采用固定长度分块导致语境断裂、忽略真实场景边界的问题，提出了SceneRAG框架。其核心是模仿人类认知，利用LLM结合ASR文本与时间元数据，将视频分割成语义一致的“场景”，并通过启发式规则进行细化。然后，为每个场景构建融合视觉与文本信息的动态知识图谱，支持跨场景的多跳检索与长程推理。实验在134小时的LongerVideos基准和Video-MME数据集上进行，结果显示，SceneRAG在生成任务上的胜率从基线的53.26%提升至65.5%，在特定领域最高达70.8%（如图1所示）；在Video-MME的长视频子集上准确率达到62.7%，超越了GPT-4V（56.9%）。该工作的实际意义在于提供了一种更符合人类观看习惯的长视频处理范式，能够更好地捕捉叙事连续性和长程依赖。主要局限性在于其对LLM进行场景分割和VLM进行场景描述的质量高度敏感，且框架的计算开销未做深入分析。

---

