---
title: "eacl-2026 论文深度解读"
date: 2026-09-11
draft: false
paper_digest_pipeline_owned: true
tags: ["变分自编码器","病理语音评估","大语言模型","低资源","对比学习","对抗鲁棒性","多模态模型","多模态学习","多任务学习","多通道","多语言","高效推理","公平性","环境声","混合专家模型","基准测试","基准设计","检索增强","教育","可解释性","跨语言","零样本","鲁棒性","轮次切换","模型比较","模型集成","模型评估","脑信号","评测协议","迁移学习","强制对齐","少样本","声源定位","数据集","数据集构建","数据增强","说话人分离标注","说话人匿名化","说话人识别","提示学习","统计分析","图神经网络","文本到语音","无监督学习","向量量化","音乐","音频安全","音频编码","音频大模型","音频检索","音频理解","音频深度伪造检测","音频生成","音频问答","音视频","音视频生成","用户研究","语言识别","语言习得","语音","语音翻译","语音分离","语音唤醒","语音活动检测","语音交互","语音情感识别","语音识别","语音伪造检测","语音质量评估","长音频处理","知识蒸馏","指令微调","主观评测","注意力机制","自回归模型","Adapter","LoRA","SFT"]
categories: ["eacl-2026 论文"]
description: "共收录 36 篇 eacl-2026 会议论文的 Reader 深度解读"
paper_digest_page_type: index
paper_digest_reader_quality: "reader-facing-v3"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_scope: "aggregate-primary-task-counts"
---

# eacl-2026 论文深度解读

本汇总收录 authenticated plan 选择集内全部 36 篇已完成分析、重标和单篇 staging 的论文。

🏷️ 标签说明：本期使用新版受控 taxonomy；热门方向只统计主任务。

## ⚡ 今日概览

✅ authenticated plan 入选 36 篇 → 🔬 深度分析、Reader 与页面投影完成

### 🏷️ 热门方向

| 方向（仅主任务） | 数量 |
|---|---:|
| #语音识别 | 8 篇 |
| #音频问答 | 6 篇 |
| #语音情感识别 | 3 篇 |
| #病理语音评估 | 2 篇 |
| #音频理解 | 2 篇 |
| #音频深度伪造检测 | 2 篇 |
| #语音质量评估 | 2 篇 |
| #轮次切换 | 1 篇 |
| #说话人匿名化 | 1 篇 |
| #音频编码 | 1 篇 |
| #音频检索 | 1 篇 |
| #音频生成 | 1 篇 |
| #音视频生成 | 1 篇 |
| #语言识别 | 1 篇 |
| #语音唤醒 | 1 篇 |
| #语音活动检测 | 1 篇 |
| #语音交互 | 1 篇 |
| #语音伪造检测 | 1 篇 |

## 📊 论文评分排行榜

| 排名 | Reader 中文题目 | 英文题目 | 八维评分 | 分档 | 文档类型 | 主任务 |
|---:|---|---|---|---|---|---|
| 1 | [域内接近满分、跨域跌到随机：多语言音频伪造检测为何在野外失效](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-162-2f7bf61362/) | [XMAD\-Bench: Cross\-Domain Multilingual Audio Deepfake Benchmark](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-162-2f7bf61362/) | **8.7/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.3/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 数据集与基准 | #音频深度伪造检测 |
| 2 | [把混叠的声音表征拆开：AudioSAE 如何用稀疏自编码器读懂 Whisper 与 HuBERT](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-149-02b8b42fcf/) | [AudioSAE: Towards Understanding of Audio\-Processing Models with Sparse AutoEncoders](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-149-02b8b42fcf/) | **8.1/10** · 创新 1.5/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音活动检测 |
| 3 | [按频带分开压缩：BSCodec 用独立并行支路应对语音与音乐声音的频谱差异](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-245-fa133268a7/) | [BSCodec: A Band\-Split Neural Codec for High\-Quality Universal Audio Reconstruction](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-245-fa133268a7/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频编码 |
| 4 | [前缀里藏着计划：用早期打分引导自回归音频走对语义](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-138-f4a45423b2/) | [Guided by the Plan: Enhancing Faithful Autoregressive Text\-to\-Audio Generation with Guided Decoding](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-138-f4a45423b2/) | **7.9/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频生成 |
| 5 | [是真在听还是只在转写：用词义与声音线索的冲突测音频大模型的情绪依据](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-274-b53aef0010/) | [Do Audio LLMs Really LISTEN, or Just Transcribe? Measuring Lexical vs\. Acoustic Emotion Cues Reliance](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-274-b53aef0010/) | **7.7/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #语音情感识别 |
| 6 | [在重叠、混响和远场之下检验语音自监督表示：CSPB 对话语音基准](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-275-83ec899273/) | [CSPB: Conversational Speech Processing Benchmark for Self\-supervised Speech Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-275-83ec899273/) | **7.7/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #语音识别 |
| 7 | [不只听清说了什么：从助听与工业场景倒逼音频理解的四项诊断](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-335-71921c96eb/) | [SCENEBench: An Audio Understanding Benchmark Grounded in Assistive and Industrial Use Cases](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-335-71921c96eb/) | **7.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #音频理解 |
| 8 | [发音错在哪、怎么改：让音频语言模型做能对话的发音教练](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-190-923151c2cd/) | [Unlocking Large Audio\-Language Models for Interactive Language Learning](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-190-923151c2cd/) | **7.6/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #语音交互 |
| 9 | [单语很强、混着说就错：用分层标注看清韩英语码转换识别卡在哪里](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-33-d29d1e84d4/) | [HiKE: Hierarchical Evaluation Framework for Korean\-English Code\-Switching Speech Recognition](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-33-d29d1e84d4/) | **7.6/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #语音识别 |
| 10 | [语音把选择题读出来之后，模型的不稳定从哪里来](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-80-adf29f971d/) | [Bias in the Ear of the Listener: Assessing Sensitivity in Audio Language Models Across Linguistic, Demographic, and Positional Variations](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-80-adf29f971d/) | **7.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #音频问答 |
| 11 | [只拉长音频位置、不动文本位置：为长音频理解扩展大音频语言模型](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-286-9f2982a622/) | [Extending Audio Context for Long\-Form Understanding in Large Audio\-Language Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-286-9f2982a622/) | **7.5/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频问答 |
| 12 | [跳过早期层处理多模态 token：DeepInsert 的冗余依据与插入做法](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-332-cf24208228/) | [DeepInsert: Early Layer Bypass for Efficient and Performant Multimodal Understanding](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-332-cf24208228/) | **7.5/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频问答 |
| 13 | [都会听却不会想：ART 用九类组合题考音频大模型的推理短板](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-42-1d94f1effa/) | [A Benchmark for Audio Reasoning Capabilities of Multimodal Large Language Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-42-1d94f1effa/) | **7.4/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频问答 |
| 14 | [多人对话里先找对说话人，再把文本的情绪理解教给声音和画面](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-212-8f19f964ef/) | [Emotion Recognition in Multi\-Speaker Conversations through Speaker Identification, Knowledge Distillation, and Hierarchical Fusion](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-212-8f19f964ef/) | **7.4/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 15 | [AfriVox：当语音大模型遇到非洲语言与口音时，转写与翻译谁更可靠](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-122-addd513936/) | [AfriVox: Probing Multilingual and Accent Robustness of Speech LLMs](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-122-addd513936/) | **7.2/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.5/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音识别 |
| 16 | [只看文字会漏掉语气：用廉价声学线索让文本大模型学会听](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-151-c6d61a02b7/) | [Hearing Between the Lines: Unlocking the Reasoning Power of LLMs for Speech Evaluation](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-151-c6d61a02b7/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音质量评估 |
| 17 | [俄语多模态缺基准时如何从零搭起十八个任务的评测](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-94-667b23ffaf/) | [Multimodal Evaluation of Russian\-language Architectures](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-94-667b23ffaf/) | **7.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.1/1.5 | 前50% | 数据集与基准 | #音频问答 |
| 18 | [印地语语音识别后纠错：小模型微调为何压过大模型提示](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-45-b7f4e64b99/) | [Post\-ASR Correction in Hindi: Comparing Language Models and Large Language Models in Low\-Resource Scenarios](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-45-b7f4e64b99/) | **7.1/10** · 创新 1.1/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 19 | [AudioJudge：大音频模型做语音评测何时可用、何时仍需谨慎](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-168-1217e8baad/) | [AudioJudge: Understanding What Works in Large Audio Model Based Speech Evaluation](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-168-1217e8baad/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音质量评估 |
| 20 | [先分开听看、再对齐想通：ConLLM 如何用两阶段缓解模态割裂与浅层融合](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-102-db05d9d686/) | [Revealing the Truth with ConLLM for Detecting Multi\-Modal Deepfakes](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-102-db05d9d686/) | **7.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.6/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频深度伪造检测 |
| 21 | [把共有的病和各自的噪声分开：DIVINE 为何要解耦音频与视频再做诊断](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-248-f3db9e13eb/) | [DIVINE : Coordinating Multimodal Disentangled Representations for Oro\-Facial Neurological Disorder Assessment](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-248-f3db9e13eb/) | **6.7/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.6/1 · 影响力 0.7/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #病理语音评估 |
| 22 | [少听三次、只留一句话：为音频问答归纳可复用的任务指令](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-18-7f7b7136a1/) | [Task\-Level Instructions Induction for Audio Question Answering from Few Examples](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-18-7f7b7136a1/) | **6.6/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频问答 |
| 23 | [文本有感情，声音不一定买账：跨模态情感相关的限度](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-136-94b00c07ca/) | [The Correlation Between Emotion in Text and Speech Segments is Limited: A Cross\-Modal Study](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-136-94b00c07ca/) | **6.6/10** · 创新 1.1/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 应用研究 | #语音情感识别 |
| 24 | [背景噪声也能当遥控器：语音大模型为何会被空中播放的声音操纵](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-66-e9659d5842/) | [Attacker’s Noise Can Manipulate Your Audio\-based LLM in the Real World](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-66-e9659d5842/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音唤醒 |
| 25 | [只用英文文本把多语言句子搬进图文音频空间：M2M 的轻量对齐](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-143-bd525afd17/) | [Multilingual\-To\-Multimodal \(M2M\): Unlocking New Languages with Monolingual Text](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-143-bd525afd17/) | **6.5/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频检索 |
| 26 | [既要认出是哪台合成器，又要识破没见过的合成器：SIGNAL 如何用图与近邻分工](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-250-8738a25c6e/) | [Bridging Attribution and Open\-Set Detection using Graph\-Augmented Instance Learning in Synthetic Speech](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-250-8738a25c6e/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.3/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音伪造检测 |
| 27 | [从嘈杂开源语音中拼出可用的越南语识别数据：以严格过滤换转写质量](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-345-3f63731376/) | [Vietnamese Automatic Speech Recognition: A Revisit](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-345-3f63731376/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音识别 |
| 28 | [讲法本身成为攻击面：用叙事口吻绕过音频大模型的文本对齐](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-278-91aefba5dc/) | [Now You Hear Me: Audio Narrative Attacks Against Large Audio–Language Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-278-91aefba5dc/) | **6.2/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #音频理解 |
| 29 | [按语系共享连接器：多语言语音大模型何时该合，何时该分](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-36-39d3ace92e/) | [Language Family Matters: Evaluating SpeechLLMs Across Linguistic Boundaries](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-36-39d3ace92e/) | **6.2/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 方法研究 | #语音识别 |
| 30 | [低资源语音想匿名却不能变味：跨语言换声哪条路更稳](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-16-01fb0947c0/) | [Exploring Cross\-Lingual Voice Conversion Methods for Anonymizing Low\-Resource Text\-to\-Speech](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-16-01fb0947c0/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #说话人匿名化 |
| 31 | [不定长语音对等长文本：用可变速率对齐让大模型按语义节奏听写](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-112-0f11e60a3c/) | [SEAM: Bridging the Temporal\-Semantic Granularity Gap for LLM\-based Speech Recognition](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-112-0f11e60a3c/) | **6.1/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音识别 |
| 32 | [口音英语为何能治住语码混杂的语言识别：少样本微调与排序评估](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-242-0de3aaa5e9/) | [Improving Language Identification for Code\-Switched Speech: The Pivotal Role of Accented English](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-242-0de3aaa5e9/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语言识别 |
| 33 | [从国际音标到带符正字法：埃及阿拉伯语儿童指向言语为何需要重标一遍](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-102-5ffc895827/) | [Computational Benchmarks for Egyptian Arabic Child Directed Speech](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-102-5ffc895827/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音识别 |
| 34 | [用多智能体分工把一句话变成一分钟有声故事：MAViS 如何管住长视频的连贯与质量](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-101-6621077c64/) | [MAViS: A Multi\-Agent Framework for Long\-Sequence Video Storytelling](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-101-6621077c64/) | **5.8/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #音视频生成 |
| 35 | [语义手势能帮模型判断谁接着说：多方对话中的轮替预测](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-106-19b3504555/) | [Modeling Turn\-Taking with Semantically Informed Gestures](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-106-19b3504555/) | **5.8/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 数据集与基准 | #轮次切换 |
| 36 | [把构音障碍的声学判断翻译成病人能懂的话：CLINIC\-GENIE 的两段式做法](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-275-2b3576c523/) | [Diagnosis of Dysarthria Severity and Explanation Generation Using XAI\-Enhanced CLINIC\-GENIE on Diadochokinetic Tasks](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-275-2b3576c523/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #病理语音评估 |

---

## 📋 论文列表

### 1. [域内接近满分、跨域跌到随机：多语言音频伪造检测为何在野外失效](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-162-2f7bf61362/)

> 英文题目：*[XMAD\-Bench: Cross\-Domain Multilingual Audio Deepfake Benchmark](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-162-2f7bf61362/)*

标签：#基准测试 #基准设计 #多语言 #音频深度伪造检测

评分：**8.7/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频深度伪造检测 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.162/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.162.pdf)

👥 **作者与机构**

- Ioan\-Paul Ciobanu：机构信息未能从会议 PDF 纯文本可靠映射
- Andrei\-Iulian Hîji：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolae Catalin Ristea：机构信息未能从会议 PDF 纯文本可靠映射
- Paul Irofti：机构信息未能从会议 PDF 纯文本可靠映射
- Cristian Rusu：机构信息未能从会议 PDF 纯文本可靠映射
- Radu Tudor Ionescu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频深度伪造检测需从语音波形判别真伪，而现有评测多在同说话人与同生成器下进行，难以反映野外部署中语言与造假手段持续演化的难点。该基准先从多源语料采集七种语言真实语音并获取转写，再经文本到语音生成初版语音并以语音转换向原说话人音色对齐，形成内容一致的配对伪造样本，最后按说话人与数据源及生成器互斥原则划分为训练集与域内测试集与跨域测试集。相比仅提供伪造或无明确跨域协议的已有数据集，其机制差异在于真伪双语平衡与生成器隔离的可复用评测协议，支撑直接可比的跨域泛化评估。在阿拉伯语域内测试集与跨域测试集对比下，ResNet\-18跨域条件的准确率为37\.80，低于域内条件的100\.0。该结论适用边界为整句朗读式伪造，对部分伪造、对抗压缩与重放攻击等外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/idiap/coqui-ai-TTS> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/pytorch/vision> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/ristea/septr> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/ristea/xmad-bench> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 2. [把混叠的声音表征拆开：AudioSAE 如何用稀疏自编码器读懂 Whisper 与 HuBERT](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-149-02b8b42fcf/)

> 英文题目：*[AudioSAE: Towards Understanding of Audio\-Processing Models with Sparse AutoEncoders](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-149-02b8b42fcf/)*

标签：#无监督学习 #可解释性 #脑信号 #语音 #语音活动检测

评分：**8.1/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音活动检测 | 主方法：#无监督学习

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.149/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.149.pdf)

👥 **作者与机构**

- Georgii Aparin：机构信息未能从会议 PDF 纯文本可靠映射
- Tasnima Sadekova：机构信息未能从会议 PDF 纯文本可靠映射
- Alexey Rukhovich：机构信息未能从会议 PDF 纯文本可靠映射
- Assel Yermekova：机构信息未能从会议 PDF 纯文本可靠映射
- Laida Kushnareva：机构信息未能从会议 PDF 纯文本可靠映射
- Vadim Popov：机构信息未能从会议 PDF 纯文本可靠映射
- Kristian Kuznetsov：机构信息未能从会议 PDF 纯文本可靠映射
- Irina Piontkovskaya：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入为语音音乐环境声混合音频的编码器激活，输出为稀疏可解释特征及其语义标签，难点在于音频表征同时叠加音素韵律说话人与噪声且时间分辨率高。方法链分三步：先在Whisper\-small与HuBERT\-base全部编码器层用BatchTopK稀疏自编码器学习过完备稀疏重构，为后续分析提供稳定特征基。接着用分布交并比覆盖率与域特化频率刻画跨种子与跨层稳定性，筛选可复现概念并送入功能验证。最后将最大池化特征接入分类探针、遗忘式探针与特征转向及脑电时间响应函数，验证其编码能力与因果作用。与文本稀疏自编码器直接复用不同，该文针对音频帧级稀疏性设计帧级与音频级双粒度激活统计和加噪混合训练，使环境噪声与副语言事件得以解耦并可转向抑制。在Musan、FSD50K与WHAM非语音评测设置下，相比无转向基线，SAE转向的FPR从0\.37降至0\.11，而LibriSpeech test\-clean任务的WER从5\.1%升至5\.5%。结论适用边界受限于small与base规模编码器与英语主导语料，跨架构迁移弱且大强度转向会严重损伤可懂度，动物声与呼吸等概念仍属尚未验证的失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/audiosae/audiosae_demo> → <https://github.com/audiosae/audio-sae> — 链接可访问（HTTP 200）
- 模型相关资源：<https://github.com/audiosae/audiosae_demo> → <https://github.com/audiosae/audio-sae> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 3. [按频带分开压缩：BSCodec 用独立并行支路应对语音与音乐声音的频谱差异](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-245-fa133268a7/)

> 英文题目：*[BSCodec: A Band\-Split Neural Codec for High\-Quality Universal Audio Reconstruction](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-245-fa133268a7/)*

标签：#向量量化 #环境声 #音乐 #语音 #音频编码

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频编码 | 主方法：#向量量化

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.245/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.245.pdf)

👥 **作者与机构**

- Haoran Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiatong Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Jinchuan Tian：机构信息未能从会议 PDF 纯文本可靠映射
- Bohan Li：机构信息未能从会议 PDF 纯文本可靠映射
- Kai Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Shinji Watanabe：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

通用音频编解码以24 kHz波形为输入并重建波形，难点在于语音能量集中于低频谐波而音乐与环境声宽带分布，统一全频带容量难以兼顾不同频段的信息密度与感知重要性。BSCodec先经短时傅里叶变换将频谱切分为多个不重叠子带并经逆变换返回时域，得到各频带受限波形；各波形并行送入互不共享参数的独立编码器，生成75 Hz帧率的512维潜变量，使每路专职特定频段。然后各潜变量经单层SimVQ离散化为码字，避免残差多层间的相关冗余；对称解码器将量化表示上采样回24 kHz子带波形并相加输出，全程以多尺度Mel损失与对抗损失联合训练。与残差向量量化逐层编码全频带残差不同，该方法按物理频率解耦表示，使码本按频带分工并保留说话人特征与高频音色。在包含MUSDB18音乐数据的多域重建评测下，BSCodec三频带模型的VISQOL为4\.298，高于DAC基线的4\.201。该结论适用边界受限于24 kHz重建与小规模理解类下游任务，尚未验证大语言模型驱动的语音合成中Token建模效率。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/whr-a/espnet/tree/bscodec> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 4. [前缀里藏着计划：用早期打分引导自回归音频走对语义](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-138-f4a45423b2/)

> 英文题目：*[Guided by the Plan: Enhancing Faithful Autoregressive Text\-to\-Audio Generation with Guided Decoding](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-138-f4a45423b2/)*

标签：#自回归模型 #主观评测 #环境声 #音频生成

评分：**7.9/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#自回归模型

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.138/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.138.pdf)

👥 **作者与机构**

- Juncheng Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhe Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Chao Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Siyue Ren：机构信息未能从会议 PDF 纯文本可靠映射
- Yuxiang Feng：机构信息未能从会议 PDF 纯文本可靠映射
- Yang Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Baigui Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Shujun Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

文本到音频生成需根据文本提示自回归地合成时序连贯的波形，实际难点在于严格从左到右解码时难以兼顾多事件全局语义对齐，易遗漏关键声音元素。该方法首先对基座生成器前32步前缀隐状态做探测回归与分类，验证其可预测全序列事件数与发声物体类别，从而得到隐式规划信号。接着以该信号为基础训练轻量评价模型Plan\-Critic，采用每32步稀疏监督的广义优势估计式目标从部分序列预测最终指令遵循质量。然后在推理时先并行采样大量前缀并由Plan\-Critic打分剪枝，仅保留高分规划种子再续写完整音频，把筛选后前缀送入下一步补全。与双向扩散模型全局注意力一次成形不同，该方法冻结基座生成器而把测试时计算重分配到早期前缀探索上，具有即插即用的实际意义。在AudioCaps评测下，Siren\+Ours方法的CLAP为36\.47，高于Siren\+BoN基线的26\.67。该结论适用边界受限于288 Token短音频与固定32 Token前缀假设，长时声景与跨生成器迁移尚未验证。推理开销方面该方法保持与标准最佳候选解码相同的总Token预算以实现计算量持平，未额外增加基座训练成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/wjc2830/Siren.git> → <https://github.com/wjc2830/Siren> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 5. [是真在听还是只在转写：用词义与声音线索的冲突测音频大模型的情绪依据](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-274-b53aef0010/)

> 英文题目：*[Do Audio LLMs Really LISTEN, or Just Transcribe? Measuring Lexical vs\. Acoustic Emotion Cues Reliance](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-274-b53aef0010/)*

标签：#基准测试 #基准设计 #音频大模型 #语音 #语音情感识别

评分：**7.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#语音情感识别 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.274/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.274.pdf)

👥 **作者与机构**

- Jingyi Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Zhimeng Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Jiyun Chun：机构信息未能从会议 PDF 纯文本可靠映射
- Pichao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Andrew Perrault：机构信息未能从会议 PDF 纯文本可靠映射
- Micha Elsner：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音情感理解输入为原始语音、输出为离散情感标签，实际难点在于词汇语义与音高语调节奏等声学线索常不一致，而含显性情感词的评测使仅读转写文本的模型也能拿高分从而掩盖听觉缺陷。该文构建LISTEN基准先按线索关系划分为中性文本、情感匹配、情感冲突与副语言四种条件，以控制词汇与声学对齐程度。接着在前三种条件下分别构造纯文本、纯音频与图文结合三种模态并规定各自真值来源，使上一步的条件划分落为可比的模态输入以探测模态依赖。最后用统一多选零样本提示对6个大音频语言模型评测，并以均匀猜测、多数猜测与预测边际基线校准准确率等指标，使模态差异归因于声学利用而非输出偏置。与已有综合音频评测只报告混合准确率不同，该设计强制分离词汇依赖与声学敏感度，因而能暴露以转写替代倾听及冲突时坍缩为少数类别的失效。在Neutral\-Text条件评测下，Gemini 2\.5 Pro音频模态的准确率为34\.9%，低于文本模态的96\.6%。该结论适用边界限于英语短句独白、对话表演及播客语料，跨语言韵律与多轮对话上下文尚属尚未验证的外推范围。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/DeliJingyiC/LISTEN> — 链接可访问（HTTP 200）
- 数据相关资源：<https://huggingface.co/datasets/VibeCheck1/LISTEN_full> — 暂时无法访问
- 复现相关资源：<https://github.com/DeliJingyiC/LISTEN> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 6. [在重叠、混响和远场之下检验语音自监督表示：CSPB 对话语音基准](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-275-83ec899273/)

> 英文题目：*[CSPB: Conversational Speech Processing Benchmark for Self\-supervised Speech Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-275-83ec899273/)*

标签：#基准设计 #多通道 #语音识别 #说话人分离标注 #语音分离

评分：**7.7/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.275/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.275.pdf)

👥 **作者与机构**

- Zili Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Matthew Maciejewski：机构信息未能从会议 PDF 纯文本可靠映射
- Leibny Paola Garcia Perera：机构信息未能从会议 PDF 纯文本可靠映射
- Shinji Watanabe：机构信息未能从会议 PDF 纯文本可靠映射
- Sanjeev Khudanpur：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

会话语音处理的输入是远场麦克风阵列采集的多人自然交互音频，输出需同时给出转写文本、说话人时间边界与可懂的增强语音，难点在于噪声、混响与高重叠交织且缺乏干净参考信号。基准先统一AMI、AliMeeting、MMCSG与DiPCo四套多方会话语料并划分单通道与多通道赛道，为后续对比提供一致输入。随后冻结上游自监督编码器并以可学习加权融合各层表示，使下游只依赖固定表征进行评估。再接入轻量双向长短时记忆网络下游头分别完成识别、分割与掩蔽增强，并用词错率、分离标注错误率与增强后识别错误率统一度量鲁棒性。与仅用干净语音预训练的方法相比，大规模多样数据加噪声增强的预训练显著提升了远场与重叠条件下的稳定性，而波束成形前端或原生多通道编码器进一步利用了空间信息。在AMI单通道ASR评测设置下，WavLM Large的WER为35\.5%，低于HuBERT Base的65\.4%。该结论适用边界限于英语与中文会议、晚宴及智能眼镜对话场景，对更多说话人分离、解冻微调与端到端大模型路径尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/HuangZiliAndy/CSPB> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 7. [不只听清说了什么：从助听与工业场景倒逼音频理解的四项诊断](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-335-71921c96eb/)

> 英文题目：*[SCENEBench: An Audio Understanding Benchmark Grounded in Assistive and Industrial Use Cases](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-335-71921c96eb/)*

标签：#基准设计 #多语言 #环境声 #音频理解 #声源定位

评分：**7.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频理解 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.335/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.335.pdf)

👥 **作者与机构**

- Laya Iyer：机构信息未能从会议 PDF 纯文本可靠映射
- Angelina Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Sanmi Koyejo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文面向助听与工业监测，输入为前景语音叠加环境声、幅度调制运动线索、多语言混合片段及非言语发声的短音频，输出为背景类名、运动方向、保留代码混合的转写与发声类别，难点在于前景语音主导致背景被忽略、时变包络微弱难辨方向与语言先验抹除非英语片段。方法链分三步推进：先以ESC\-50叠加DailyTalk等语料合成受控刺激并施加等响度叠加与正弦包络构造四类任务，合成音频直接作为后继评测输入。接着用自由描述加定向追问加多选的分级提示分离自发显著性与可辨别性，自由描述遗漏背景时才触发追问而多选对全部样本独立评分。然后对五个大型音频语言模型施加统一评分与同义词匹配，并以每任务20条人类实录检验合成结论的排序稳定性。与已有音频基准相比，关键差异在于把遗漏背景、丢失运动与抹除非英语片段等高风险失效模式直接实例化为评测目标而非干净单标签分类，使遗漏与误归因可被分级定位。在背景理解多选评测任务下，Audio\-Flamingo\-3的准确率为74\.2%，高于随机基线的25%。结论适用边界受限于短片段、等响度叠加与合成运动包络，不支持长时、真实多普勒与遮挡条件下的外推，推理开销方面本地模型延迟已被测量，其中Flamingo中位延迟为2\.26s而Desta中位延迟为15\.61s。

🔗 **开源资源**

- 代码相关资源：<https://github.com/layaiyer1/SCENEbench> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/SALT-NLP/CAVA> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 8. [发音错在哪、怎么改：让音频语言模型做能对话的发音教练](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-190-923151c2cd/)

> 英文题目：*[Unlocking Large Audio\-Language Models for Interactive Language Learning](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-190-923151c2cd/)*

标签：#教育 #数据集 #指令微调 #语音交互

评分：**7.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#语音交互 | 主方法：#指令微调

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.190/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.190.pdf)

👥 **作者与机构**

- Hongfu Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhouying Cui：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangming Gu：机构信息未能从会议 PDF 纯文本可靠映射
- Ye Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

面向朗读式计算机辅助发音训练，系统输入为学习者朗读音频与标准词序列，输出为误读词集合及其错误解释与纠正建议构成的聊天式文本响应，难点在于强转写模型会纠正发音错误而丢失声学细节且反馈需通俗可操作。该工作先以人工音素标注驱动大模型生成错误解释与建议对并经多轮人工复核校验，构建九百条评测基准并作为真值参考。该方法接着用英文转写语料对齐音频编码器与大语言模型，使声学表征能够进入文本空间参与推理。最后用同流程合成的无人工校验指令数据微调投影器与骨干模型，使误读检测与反馈生成直接端到端联合学习。与级联转写加推理相比，端到端保留声学表征避免了转写纠错掩盖误读是关键机制差异，其实际意义在于显著提升召回与建议质量并抑制规范文本之外的幻觉词。在L2\-Arctic\-plus基准评测下，指令微调模型的误读检测F1为62\.8，高于现有大模型的误读检测F1为46\.3。结论适用边界受限于英语朗读场景与六类母语口音，尚未验证自由对话、韵律重音与长期学习增益，硬件为2×NVIDIA RTX A40且声学对齐训练成本约12\-14 GPU小时。

🔗 **开源资源**

- 代码相关资源：<https://github.com/zoeyada/ALMs4Learning> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/openai/whisper-small> — 暂时无法访问
- 第三方资源：<https://huggingface.co/openai/whisper-medium> — 暂时无法访问
- 第三方资源：<https://huggingface.co/openai/whisper-large> — 暂时无法访问
- 第三方资源：<https://huggingface.co/facebook/wav2vec2-base-960h> — 暂时无法访问
- 第三方资源：<https://huggingface.co/facebook/wav2vec2-large-960h-lv60-self> — 暂时无法访问
- 第三方资源：<https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.1> — 暂时无法访问
- 第三方资源：<https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct> — 暂时无法访问
- 第三方资源：<https://github.com/0nutation/SpeechGPT/tree/main/speechgpt> — 暂时无法访问
- 第三方资源：<https://github.com/microsoft/Pengi> — 暂时无法访问
- 第三方资源：<https://huggingface.co/Qwen/Qwen-Audio-Chat> — 暂时无法访问
- 第三方资源：<https://huggingface.co/Qwen/Qwen2-Audio-7B-Instruct> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 9. [单语很强、混着说就错：用分层标注看清韩英语码转换识别卡在哪里](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-33-d29d1e84d4/)

> 英文题目：*[HiKE: Hierarchical Evaluation Framework for Korean\-English Code\-Switching Speech Recognition](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-33-d29d1e84d4/)*

标签：#基准测试 #基准设计 #多语言 #语音 #语音识别

评分：**7.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.33/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.33.pdf)

👥 **作者与机构**

- Gio Paik：机构信息未能从会议 PDF 纯文本可靠映射
- Yongbeom Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Soungmin Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Sangmin Ahn：机构信息未能从会议 PDF 纯文本可靠映射
- Chan Woo Kim：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

韩英语码转换（Code\-Switching）要求将韩英混杂语音转写为对应正字法，难点在于类型学距离大导致的词序错位、单字嵌入密集切换与外来语拼写歧义。作者先以人工编写575条覆盖8个主题的种子脚本为单样本示例，引导CLAUDE\-3\.5\-SONNET克隆生成新脚本并经作者逐条人工校对，再招募13名双语者用个人设备在安静环境下录制1150条并剔除29条偏离样本，形成1121条约2\.2小时的评测集，接着施加外来语多答案归一与词级、短语级和句子级三层标注以支撑细粒度评分。相较以往仅区分句内与句间的粗粒度划分，该层级机制能分离词汇记忆与跨语言语法重排的不同失败模式。基于该基准的十模型评测显示最强闭源模型整体混合错误率（Mixed Error Rate）为21\.8%而多数开源模型超过30%，自然句内数据微调可将WHISPER\-MEDIUM整体错误率从31\.3%降至9\.0%，合成拼接数据亦可降至22\.1%。结论适用于韩英自然朗读式语码转换转写评测，外推至自发对话、噪声远场或其它语言对尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ThetaOne-AI/HiKE> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/ThetaOne-AI/HiKE> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.aihub.or.kr/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 10. [语音把选择题读出来之后，模型的不稳定从哪里来](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-80-adf29f971d/)

> 英文题目：*[Bias in the Ear of the Listener: Assessing Sensitivity in Audio Language Models Across Linguistic, Demographic, and Positional Variations](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-80-adf29f971d/)*

标签：#基准设计 #公平性 #鲁棒性 #多语言 #音频问答

评分：**7.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.80/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.80.pdf)

👥 **作者与机构**

- Sheng\-Lun Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Yu\-Ling Liao：机构信息未能从会议 PDF 纯文本可靠映射
- Yen\-Hua Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Hen\-Hsen Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Hsin\-Hsi Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为问题加四个选项的连续语音，输出为选项字母，难点在于模型需在语言、口音、性别与选项顺序变化的语音条件下同时保持理解正确与跨条件稳定。先用GPT OSS 120B按八条规则将Global MMLU Lite改写为可朗读文本以保留数学式与符号语义，改写文本直接作为语音合成脚本进入下一步。再用Gemini 2\.5 Flash Preview TTS按英中韩语言、口音与男女声合成11200题共70\.8小时语音，拼接为原始与逆序问答音频送入九个多模态大模型评测。最后以准确率、问题熵、平均成对熵偏移与Fleiss κ联合度量正确性与一致性，温度置零并校正格式以排除偶然性。与既有文本偏置研究相比，该工作将位置敏感性与跨语言副语言因素统一到语音模态，揭示语音放大而非创造偏置。在文本与音频对比评测下，Gemini 2\.5 Flash Lite音频输入在语言扰动条件的APES指标为0\.178，高于文本输入的0\.081。该结论适用边界受限于朗读式单轮选择题与受控合成语音，尚未验证自发对话、噪声与真实说话人连续谱下的外推。TTS生成与Gemini推理开销合计低于550美元，其余模型在实验期经由免费API调用。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ntunlplab/BiasInEar> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/ntunlplab/BiasInEar> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 11. [只拉长音频位置、不动文本位置：为长音频理解扩展大音频语言模型](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-286-9f2982a622/)

> 英文题目：*[Extending Audio Context for Long\-Form Understanding in Large Audio\-Language Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-286-9f2982a622/)*

标签：#数据增强 #音频大模型 #长音频处理 #音频问答

评分：**7.5/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#数据增强

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.286/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.286.pdf)

👥 **作者与机构**

- Yuatyong Chaichana：机构信息未能从会议 PDF 纯文本可靠映射
- Pittawat Taveekitworachai：机构信息未能从会议 PDF 纯文本可靠映射
- Warit Sirichotedumrong：机构信息未能从会议 PDF 纯文本可靠映射
- Potsawee Manakul：机构信息未能从会议 PDF 纯文本可靠映射
- Kunat Pipatanakul：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

大型音频语言模型以分钟级长音频问答为输入，需输出多选题答案，难点在于音频位置超出训练熟悉范围导致泛化崩溃而非语义理解不足。为此论文先提出免训练的部分YaRN，仅对音频token区间做旋转位置编码低频插值与注意力温度缩放而文本位置保持不变，其输出的扩展位置编码直接进入解码推理。接着将同一机制转为训练时位置增强得到虚拟长音频训练，对每条真实2mins样本随机采样虚拟源长度并压缩或拉伸，迫使模型适应多样音频长度。该增强样本再经LoRA微调进入推理时可叠加部分位置插值，形成训练增强与推理扩展互补的链路。与整体拉伸全部上下文并扰动文本能力的做法不同，模态解耦只动音频维度因而保留基座大模型的文本能力并降低压缩压力，具有实际意义。在YODAS2\-MCQA的10mins测试任务下，Qwen2\-Audio经Virtual Longform训练后的准确率为从Vanilla微调基线的32\.76%升至75\.11%。该结论适用边界受限于统一输入空间架构与多选题检索式理解，开放生成与真实长音频分布外推尚未验证，实验硬件为单块Nvidia H100 GPU。

🔗 **开源资源**

- 代码相关资源：<https://github.com/yophis/partial-yarn> — 链接可访问（HTTP 200）
- 数据相关资源：<https://huggingface.co/datasets/yophis/yodas2-mcqa> — 暂时无法访问
- 数据相关资源：<https://github.com/yophis/partial-yarn> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 12. [跳过早期层处理多模态 token：DeepInsert 的冗余依据与插入做法](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-332-cf24208228/)

> 英文题目：*[DeepInsert: Early Layer Bypass for Efficient and Performant Multimodal Understanding](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-332-cf24208228/)*

标签：#多模态学习 #多模态模型 #高效推理 #音频问答

评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.332/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.332.pdf)

👥 **作者与机构**

- Moulik Choraria：机构信息未能从会议 PDF 纯文本可靠映射
- Xinbo Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Akhil Bhimaraju：机构信息未能从会议 PDF 纯文本可靠映射
- Nitesh Sekhar：机构信息未能从会议 PDF 纯文本可靠映射
- Yue Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Xu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Prateek Singhal：机构信息未能从会议 PDF 纯文本可靠映射
- Lav R\. Varshney：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态语言模型以文本指令加视觉、音频或分子图谱标记为输入，以文本回答为输出，实际难点是多模态长上下文在第0层拼接后被迫经过全部解码器层，而跨模态交互主要集中在中深层，带来冗余计算与注意力稀释。方法先让文本标记独立通过前N\_DI个语言模型层形成深层语义表示，同时将多模态编码器输出经投影器映射到语言嵌入空间作为下一步输入。接着在选定中间插入层将对齐后的多模态标记拼接入文本序列，交由剩余深层进行跨模态联合建模与记忆调用。然后重构旋转位置编码与键值缓存以适配交错位置并支撑自回归生成。与掩码置零或剪枝式早退不同，该方法让多模态标记完全绕过早期层，既真正节省浮点运算又避免无效标记干扰注意力归一化。在COCO字幕多任务评测任务下，DI方法的BLEU\-4为36\.2，高于基线的20\.9。该结论适用边界是所测视觉、音频与分子四类开源流水线及中等插入深度，更深插入虽降计算但视觉长上下文退化更快。训练沿用各仓库默认超参数而不额外调优，效率以实测前向时间与解析式计算量刻画，推理开销随插入层加深单调下降，实验主要使用80GB A100硬件完成。

🔗 **开源资源**

- 代码相关资源：<https://github.com/MoulikChoraria/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/xiaoachen98/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 13. [都会听却不会想：ART 用九类组合题考音频大模型的推理短板](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-42-1d94f1effa/)

> 英文题目：*[A Benchmark for Audio Reasoning Capabilities of Multimodal Large Language Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-42-1d94f1effa/)*

标签：#基准测试 #基准设计 #多模态模型 #音频问答

评分：**7.4/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.42/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.42.pdf)

👥 **作者与机构**

- Iwona Christop：机构信息未能从会议 PDF 纯文本可靠映射
- Mateusz Czyżnikiewicz：机构信息未能从会议 PDF 纯文本可靠映射
- Paweł Skórzewski：机构信息未能从会议 PDF 纯文本可靠映射
- Łukasz Bondaruk：机构信息未能从会议 PDF 纯文本可靠映射
- Jakub Kubiak：机构信息未能从会议 PDF 纯文本可靠映射
- Marcin Lewandowski：机构信息未能从会议 PDF 纯文本可靠映射
- Marek Kubis：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频推理任务（Audio Reasoning Tasks，ART）要求模型直接收听包含 spoken question 与待判证据的单段混合音频并回答 Yes 或 No，难点在于问题理解与证据感知必须在同一音频通道内联合完成，且答案依赖跨类别线索的计数、比较与归因，而非单模块转写后用文本大模型作答。构建链条先由领域专家按两条规则征集候选任务并剔除不可靠项，再将保留的9类任务固化为55个带槽位模板并自动派生标准答案，随后用基于 Voicebox 改进的文本到语音管线合成统一提问音色与多说话人话语并叠加经人工修剪的自然声音，最后做响度归一、静音间隔、截断淡入淡出与背景衰减形成可复现实例。与孤立测试转写、分类或文本提问考音频的既有基准相比，差异在于问题本身是音频的一部分且任务被规则约束为不可被单一专用模块解决。与人类在 ART\-H 子集（每任务24样本共216样本）上92\.90%相比，最强级联系统 Whisper Large v3加Qwen3\-32B在全集9000样本上绝对准确率仅为0\.5621，最强开源音频大模型 Audio Flamingo 3仅为0\.5473。结论仅适用于清晰合成英语主导的受控短音频，作者明确主张干净音频失败则复杂声学只会更差因而推迟引入强噪声与自发语音，未验证远场、噪声、开放作答与闭源前沿模型下的外推能力。原文未披露训练成本与基准下载链接。

🔗 **开源资源**

- 数据相关资源：<https://keithito.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://openai.com/index/hello-gpt-4o> — 链接不可用（HTTP 403）
- 第三方资源：<https://huggingface.co/fixie-ai/ultravox-v0_6-> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 14. [多人对话里先找对说话人，再把文本的情绪理解教给声音和画面](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-212-8f19f964ef/)

> 英文题目：*[Emotion Recognition in Multi\-Speaker Conversations through Speaker Identification, Knowledge Distillation, and Hierarchical Fusion](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-212-8f19f964ef/)*

标签：#知识蒸馏 #多模态学习 #音视频 #语音情感识别 #说话人识别

评分：**7.4/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#知识蒸馏

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.212/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.212.pdf)

👥 **作者与机构**

- Li Xiao：机构信息未能从会议 PDF 纯文本可靠映射
- Kotaro Funakoshi：机构信息未能从会议 PDF 纯文本可靠映射
- Manabu Okumura：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多说话人会话情感识别以每条话语的文本音频视频为输入，输出话语级情绪标签，实际难点在于多人同框时视觉对应错误、文本显著强于音视频的模态性能鸿沟以及中性类主导的严重类别不平衡。LipSyncNet先对同一话语的所有候选人脸轨计算音视频同步分并取最高分者做视觉筛选，其输出的说话人对应视觉片段与音频片段进入单模态编码。该步骤后RoBERTa、Wav2Vec2\.0和TimeSformer分别抽取话语级三模态表示，并以文本图注意力网络为教师向音频图卷积网络和视觉图注意力网络做蒸馏以迁移情绪理解。蒸馏后的三模态图表示再经自适应门控、混合专家、跨模态注意力和Transformer编码完成分层融合与分类，并以复合损失缓解类别不平衡。相对已有方法的关键机制差异在于把说话人识别内嵌为话语级可学习筛选而非前处理，并用图结构显式建模会话关系下的跨模态迁移，实际意义是减少错误人脸干扰并缩小模态差距。在MELD官方划分评测设置下，本方法的加权F1分数为67\.75，高于TelME基线的67\.30。结论适用边界受限于英语电视对话Friends和实验室双人对话，尚未验证重叠语音、遮挡与跨语言跨文化外推，训练成本为除预处理外的蒸馏融合部分在NVIDIA RTX 3090硬件上需30至50分钟。

🔗 **开源资源**

- 代码相关资源：<https://github.com/llllxx1628/multimodalERC> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 15. [AfriVox：当语音大模型遇到非洲语言与口音时，转写与翻译谁更可靠](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-122-addd513936/)

> 英文题目：*[AfriVox: Probing Multilingual and Accent Robustness of Speech LLMs](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-122-addd513936/)*

标签：#基准设计 #鲁棒性 #多语言 #语音识别 #语音翻译

评分：**7.2/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.122/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.122.pdf)

👥 **作者与机构**

- Busayo Awobade：机构信息未能从会议 PDF 纯文本可靠映射
- Mardhiyah Sanni：机构信息未能从会议 PDF 纯文本可靠映射
- Tassallah Abdullahi：机构信息未能从会议 PDF 纯文本可靠映射
- Chibuzor Okocha：机构信息未能从会议 PDF 纯文本可靠映射
- Kelechi Ezema：机构信息未能从会议 PDF 纯文本可靠映射
- Devendra Deepak Kayande：机构信息未能从会议 PDF 纯文本可靠映射
- Lukman Enegi Ismaila：机构信息未能从会议 PDF 纯文本可靠映射
- Tobi Olatunji：机构信息未能从会议 PDF 纯文本可靠映射
- Gloria Ashiya Katuka：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为非洲语言语音与非洲口音英语、法语、阿拉伯语语音，输出为本地文字逐字转写与到英语的翻译，难点在于108种英语口音、议会自发表达、环境噪声与重叠说话，以及多数语言极低资源且未被语音大模型正式支持。先以NCHLT、Common Voice 17、FLEURS、OpenSLR、BibleTTS等开源语料为输入，负责筛选聚合形成多语言基底并输出可复用转写集合，再以该转写集合与新建4国议会自发语音与医疗平行语音为输入，负责母语者转写翻译与80%合格率质控并输出统一评测基准，最后以上述统一评测基准为输入，负责统一零样本与少样本提示下的单模态与多模态模型同条件评测及NaijaVoices上的参数高效微调验证并输出性能对比结果。与朗读式多语言基准的机制差异在于引入议会噪声场景与医疗域平行结构，并区分旧集与新集以暴露预训练污染导致的虚高分数，其实测意义在于揭示干净朗读与真实部署之间的性能鸿沟。在NaijaVoices子集的Igbo转写任务评测下，微调后Qwen2\.5\-Omni的WER为42\.41，低于微调前基线的198\.68。该结论适用边界仅限转写与到英语翻译，尚未验证对话、问答与代码切换等更广义语音理解，且微调仅覆盖三种尼日利亚语言而受限于数据规模。微调硬件为四块NVIDIA 3090 GPU上每语言约280小时语音训练三轮，其余训练成本与推理开销未系统评估。

🔗 **开源资源**

- 第三方资源：<https://speech.intron.health/> → <https://speech.intron.health/login> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.intron.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 16. [只看文字会漏掉语气：用廉价声学线索让文本大模型学会听](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-151-c6d61a02b7/)

> 英文题目：*[Hearing Between the Lines: Unlocking the Reasoning Power of LLMs for Speech Evaluation](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-151-c6d61a02b7/)*

标签：#评测协议 #大语言模型 #语音 #语音质量评估

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音质量评估 | 主方法：#评测协议

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.151/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.151.pdf)

👥 **作者与机构**

- Arjun Chandra：机构信息未能从会议 PDF 纯文本可靠映射
- Kevin Miller：机构信息未能从会议 PDF 纯文本可靠映射
- Venkatesh Ravichandran：机构信息未能从会议 PDF 纯文本可靠映射
- Constantinos Papayiannis：机构信息未能从会议 PDF 纯文本可靠映射
- Venkatesh Saligrama：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音到语音评估以用户指令加两段语音回复为输入，输出整体偏好标签，实际难点是转录本评测听不见语气情绪而整体单分又把内容、嗓音品质与副语言混为一谈导致不可靠且可被投机。为此该工作先以人类思维链重标注分盲评整体、维度优先再评整体与独立复评三遍采集内容、嗓音品质与副语言判断，再定整体并引入同时好与同时坏的类型化平局以消除强行决胜。接着把廉价声学信号编译为结构化文本蓝图，每条回复汇集识别文本、客观质量分与韵律情感风格等字段形成可审计证据并送入下一步。然后用文本大模型只做分维判断与说理，再经确定性策略融合为整体，在SPEAK BENCH用内容优先树而在S2S\-ARENA加内容与副语言可接受性上限。相对已有方法，其关键机制差异是用显式特征工程替代端到端音频理解，并把基准意图编码为融合先验，从而保留文本推理能力又对齐人类感知。在SPEAK BENCH基准下，TRACE的整体准确率为68\.6，高于Audio Judge的61\.1。该结论适用边界受限于英语指令跟随与感知表达场景且依赖上游识别与情感质量估计器，而GPT\-4o测算下TRACE的推理开销为4\.16美元约为音频评测12\.53美元的三分之一。

🔗 **开源资源**

- 第三方资源：<https://github.com/arjunchandra2/TRACE> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 17. [俄语多模态缺基准时如何从零搭起十八个任务的评测](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-94-667b23ffaf/)

> 英文题目：*[Multimodal Evaluation of Russian\-language Architectures](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-94-667b23ffaf/)*

标签：#基准测试 #数据集 #基准设计 #音频问答

评分：**7.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.94/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.94.pdf)

👥 **作者与机构**

- Artem Chervyakov：机构信息未能从会议 PDF 纯文本可靠映射
- Ulyana Isaeva：机构信息未能从会议 PDF 纯文本可靠映射
- Anton Emelyanov：机构信息未能从会议 PDF 纯文本可靠映射
- Artem Safin：机构信息未能从会议 PDF 纯文本可靠映射
- Maria Tikhonova：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Kharitonov：机构信息未能从会议 PDF 纯文本可靠映射
- Yulia Lyakh：机构信息未能从会议 PDF 纯文本可靠映射
- Petr Surovtsev：机构信息未能从会议 PDF 纯文本可靠映射
- Denis Shevelev：机构信息未能从会议 PDF 纯文本可靠映射
- Vildan Saburov：机构信息未能从会议 PDF 纯文本可靠映射
- Vasily Konovalov：机构信息未能从会议 PDF 纯文本可靠映射
- Elisei Rykov：机构信息未能从会议 PDF 纯文本可靠映射
- Ivan Sviridov：机构信息未能从会议 PDF 纯文本可靠映射
- Amina Miftakhova：机构信息未能从会议 PDF 纯文本可靠映射
- Ilseyar Alimova：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Panchenko：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Kapitanov：机构信息未能从会议 PDF 纯文本可靠映射
- Alena Fenogenova：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该基准面向俄语多模态架构，输入为俄语指令叠加图像或音频或视频，输出为选项或简短自由文本，难点在于西里尔文字识别、俄语常识与跨模态推理难以靠英语基准迁移评估。方法链先以感知推理知识分类学映射技能缺口，再从零构建18个新任务并统一为块式生成提示，其输出直接进入双通道评分。评分同时计算严格归一化字符串比较的精确匹配与基于RuModernBERT语义裁判的二分类正确性，并按任务平均为最终分以兼顾格式与语义。相对英语中心基准，其关键机制差异在于俄语文化从头采集、水印与多模态成员推理防泄漏及多提示平均抑制单提示偏置，从而提供可复现提交平台与开放榜单。在视频模态评测下，Qwen2\.5\-VL\-72B\-Instruct的总分数为0\.63，高于Qwen3\-VL\-8B\-Instruct的总分数0\.58。结论适用边界限于俄语理解型问答与短答案生成，尚未验证长视频开放对话偏见安全与多轮交互的外推，且高分模型仍可能在专门领域失败。训练与部署方面，裁判模型在单块A100 80GB硬件上微调并在单块A100 40GB硬件上以vLLM高吞吐推理，基准分数仍受GPU驱动与推理栈非确定性影响。

🔗 **开源资源**

- 代码相关资源：<https://mera.a-ai.ru/en/multi> — 链接可访问（HTTP 200）
- 代码相关资源：<https://mera.a-ai.ru/en/multi/leaderboard> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/vllm-project/vllm> — 链接可访问（HTTP 200）
- 模型相关资源：<https://hf.co/deepvk/RuModernBERT-base> → <https://huggingface.co/deepvk/RuModernBERT-base> — 暂时无法访问
- 数据相关资源：<https://hf.co/datasets/pingzhili/vqa_v2> → <https://huggingface.co/datasets/pingzhili/vqa_v2> — 暂时无法访问
- 第三方资源：<https://www.deepl.com/products/api> → <https://www.deepl.com/en/products/api> — 链接可访问（HTTP 200）
- 第三方资源：<https://app.elementary.center/> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 18. [印地语语音识别后纠错：小模型微调为何压过大模型提示](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-45-b7f4e64b99/)

> 英文题目：*[Post\-ASR Correction in Hindi: Comparing Language Models and Large Language Models in Low\-Resource Scenarios](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-45-b7f4e64b99/)*

标签：#SFT #大语言模型 #模型比较 #低资源 #语音识别

评分：**7.1/10** | 创新 1.1/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#SFT

会议来源：[官方记录](https://aclanthology.org/2026.eacl-short.45/) · [官方 PDF](https://aclanthology.org/2026.eacl-short.45.pdf)

👥 **作者与机构**

- Rishabh Kumar：机构信息未能从会议 PDF 纯文本可靠映射
- Amrith Krishna：机构信息未能从会议 PDF 纯文本可靠映射
- Ganesh Ramakrishnan：机构信息未能从会议 PDF 纯文本可靠映射
- Preethi Jyothi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理低资源印地语ASR后纠错，输入为单最佳ASR假设文本，输出为接近参考转写的修正文本，难点在于音近混淆、码混合、复合词切分与数字转写交织且域内标注语音稀缺。首先用IndicWav2vec与IndicConformer对域内IndicVoice及域外Kathbath与Shrutilipi语音解码生成带噪假设，使其携带特定通道的误差分布。接着将假设与参考配对构造成高重叠文本编辑监督数据，并按多ASR源与多域混合组织训练集以上一步输出作为下一步输入。然后分别以监督微调训练mT5与ByT5，并以上下文学习评测LLaMA系列与GPT\-4o mini得到修正输出。与大模型依赖先验知识做开放生成不同，小模型拟合局部误差模式而更保守保真，字节级ByT5擅长字符级改写而子词级mT5擅长语义一致性。在Lahaja评测集下，GPT\-4o mini零样本修正后IndicConformer假设的WER为25\.14%，高于修正前基线的18\.02%。该结论适用边界受限，域外比例过高时仍出现域漂移与过度修正，且在Marathi与Telugu上尚未验证充分泛化。原文以延迟披露成本，mT5\-small推理最快而大模型推理开销显著更高。

🔗 **开源资源**

- 代码相关资源：<https://github.com/cyfer0618/Post-ASR-Correction-in-Hindi> — 链接可访问（HTTP 200）
- 模型相关资源：<https://github.com/cyfer0618/Post-ASR-Correction-in-Hindi> — 链接可访问（HTTP 200）
- 复现相关资源：<https://pytorch.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 19. [AudioJudge：大音频模型做语音评测何时可用、何时仍需谨慎](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-168-1217e8baad/)

> 英文题目：*[AudioJudge: Understanding What Works in Large Audio Model Based Speech Evaluation](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-168-1217e8baad/)*

标签：#模型集成 #音频大模型 #模型评估 #说话人识别 #语音质量评估

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音质量评估 | 主方法：#模型集成

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.168/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.168.pdf)

👥 **作者与机构**

- Potsawee Manakul：机构信息未能从会议 PDF 纯文本可靠映射
- Woody Haosheng Gan：机构信息未能从会议 PDF 纯文本可靠映射
- Michael J Ryan：机构信息未能从会议 PDF 纯文本可靠映射
- Ali Sartaz Khan：机构信息未能从会议 PDF 纯文本可靠映射
- Warit Sirichotedumrong：机构信息未能从会议 PDF 纯文本可靠映射
- Kunat Pipatanakul：机构信息未能从会议 PDF 纯文本可靠映射
- William Barr Held：机构信息未能从会议 PDF 纯文本可靠映射
- Diyi Yang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音评测需要输入评测指令与两段待评语音并输出与人类偏好一致的成对优劣判决，难点在于词汇内容、副语言表达与语音质量相互耦合且专用打分模型跨域跨语言易失效。该方法先将指令与两段语音送入大音频裁判模型，经链式思考后输出包含推理过程与标签的结构化JSON判决。接着把上下文示例与待测指令语音分别拼接为连续音频流以减少模态切换，并提供真实或ASR转录文本以减轻语音识别负担，拼接后的上下文与示例标签共同构成小样本评测条件。随后在多方面任务上拆分为只看文本准确完整的词汇裁判、评估语调韵律表现力的副语言裁判与评估清晰自然度的质量裁判，再对三者判决多数投票得到最终排序。相比以往针对单一质量属性训练的专用网络，该工作以拼接加上下文学习统一发音语速说话人与偏好排序多任务，并用分解式集成解耦内容与表达，实际意义是以极少标注实现跨域稳定的统一评测。在ThaiMOS语音质量评测任务下，AudioJudge的准确率为64\.0，高于MOSANET\+的62\.5。该结论适用边界受限于英语为主及少量中文泰语样本与十余个语音系统，细粒度语速与说话人判别仍弱等失败条件尚未验证外推范围。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/tatsu-lab/alpaca_eval> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 20. [先分开听看、再对齐想通：ConLLM 如何用两阶段缓解模态割裂与浅层融合](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-102-db05d9d686/)

> 英文题目：*[Revealing the Truth with ConLLM for Detecting Multi\-Modal Deepfakes](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-102-db05d9d686/)*

标签：#对比学习 #多模态学习 #大语言模型 #音视频 #音频深度伪造检测

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.6/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频深度伪造检测 | 主方法：#对比学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.102/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.102.pdf)

👥 **作者与机构**

- Gautam Siddharth Kashyap：机构信息未能从会议 PDF 纯文本可靠映射
- Harsh Joshi：机构信息未能从会议 PDF 纯文本可靠映射
- Niharika Jain：机构信息未能从会议 PDF 纯文本可靠映射
- Ebad Shabbir：机构信息未能从会议 PDF 纯文本可靠映射
- Jiechao Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Nipun Joshi：机构信息未能从会议 PDF 纯文本可靠映射
- Usman Naseem：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理音频、视频与音视频三类输入到真伪二分类的伪造检测任务，难点是各模态特征彼此孤立导致的泛化失效（模态碎片化 Modality Fragmentation），以及浅层融合难以捕捉跨模态语义矛盾（浅层模态间推理 Shallow Inter\-Modal Reasoning）。所提对比学习与大语言模型结合框架ConLLM（Contrastive Learning with Large Language Models）先用模态专用预训练模型提取表征并映射到共享隐空间，再以对比目标拉近真实跨模态样本并推开伪造样本，最后用类GPT Transformer（GPT\-style Transformer）对齐后表征做上下文精炼并拼接分类。与单模态检测器和早期融合多模态基线相比，该链条把表征抽取与跨模态对齐解耦，避免过早融合抹除细粒度伪造痕迹。在FakeAVCeleb音视频基准上该方法达到98\.75%准确率，超越最强多模态基线PVASS约3\.05个百分点，同时在ASVSpoof 2019 LA音频集上将等错误率降至0\.21%。结论目前仅限于六个受控公开数据集的协议内评测，跨语言与野外泛化验证有限，对新型生成器与对抗压缩的稳健性尚未证明。计算层面论文报告了推理时延与内存优势，例如音频分支单次推理约55毫秒、1\.6GB，但比较对象为Audio Flamingo、Video\-LLaMA等大模型而非同精度检测器，且未披露训练成本与统计显著性。

🔗 **开源资源**

- 数据相关资源：<https://www.asvspoof.org/index2019.html> — 链接可访问（HTTP 200）
- 数据相关资源：<https://zenodo.org/records/7603208> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/OpenTAI/wild-deepfake> → <https://github.com/xingjunm/wild-deepfake> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/DASH-Lab/FakeAVCeleb> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 21. [把共有的病和各自的噪声分开：DIVINE 为何要解耦音频与视频再做诊断](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-248-f3db9e13eb/)

> 英文题目：*[DIVINE : Coordinating Multimodal Disentangled Representations for Oro\-Facial Neurological Disorder Assessment](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-248-f3db9e13eb/)*

标签：#多模态学习 #多任务学习 #变分自编码器 #病理语音评估

评分：**6.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.6/1 | 影响力 0.7/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#病理语音评估 | 主方法：#变分自编码器

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.248/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.248.pdf)

👥 **作者与机构**

- Mohd Mujtaba Akhtar：机构信息未能从会议 PDF 纯文本可靠映射
- Girish：机构信息未能从会议 PDF 纯文本可靠映射
- Muskaan Singh：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

口面神经疾病需从同步语音与面部视频联合预测诊断类别（健康对照、肌萎缩侧索硬化症、卒中）与严重度，难点在于声学与视觉线索既共享神经运动病因又各带模态噪声，且临床要求可解释与缺失模态鲁棒。该工作提出解耦变分信息网络DIVINE，先用冻结基础模型抽取声学与视觉表征并经一维卷积精炼局部时序，形成时序对齐的模态特征序列。随后以窗口级变分自编码器压缩短时构音动态并经全局平均池化得到话语向量，再用权值绑定的共享话语级编码器与模态独立的私有编码器分离跨模态共性与模态特性。最后经稀疏门控融合与可学习症状令牌聚合输出诊断与严重度双头，完成从原始双流到联合预测的方法链。与整体拼接相比，该机制显式约束跨模态对齐、稀疏加权与令牌聚合，减少单强编码器主导与子空间泄漏，具有缺失模态下按可靠流加权的实际意义。在Toronto NeuroFace数据集受试者独立5折交叉验证设置下，DIVINE组合的准确率为98\.26%，高于拼接基线的94\.65%。其结论适用边界受限于该小规模域内验证，跨站点跨病种外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Helixometry/SIGNAL.git> → <https://github.com/Helixometry/SIGNAL> — 链接不可用（HTTP 404）
- 模型相关资源：<https://github.com/Helixometry/SIGNAL.git> → <https://github.com/Helixometry/SIGNAL> — 链接不可用（HTTP 404）
- 模型相关资源：<https://huggingface.co/microsoft/wavlm-base> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/openai/whisper-base> — 暂时无法访问
- 模型相关资源：<https://github.com/deepseek-ai/DeepSeek-VL2> — 链接可访问（HTTP 200）
- 复现相关资源：<https://github.com/Helixometry/SIGNAL.git> → <https://github.com/Helixometry/SIGNAL> — 链接不可用（HTTP 404）
- 第三方资源：<https://github.com/TadasBaltrusaitis/OpenFace> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/1adrianb/face-alignment> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 22. [少听三次、只留一句话：为音频问答归纳可复用的任务指令](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-18-7f7b7136a1/)

> 英文题目：*[Task\-Level Instructions Induction for Audio Question Answering from Few Examples](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-18-7f7b7136a1/)*

标签：#提示学习 #高效推理 #少样本 #音频问答

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#提示学习

会议来源：[官方记录](https://aclanthology.org/2026.eacl-short.18/) · [官方 PDF](https://aclanthology.org/2026.eacl-short.18.pdf)

👥 **作者与机构**

- Po\-Chun Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Hen\-Hsen Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Hsin\-Hsi Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频问答输入为包含问题与选项的连续语音，输出为判断词、整数或选项字母，难点在于需顺序聆听并融合声学与语言线索，而高质量音频思维链标注稀缺且每次携带多段演示音频代价高昂。Audio\-Induct先以3个带答案音频示例做多模态分析，识别跨示例的推理模式与声学语言结合点。其分析输出进入归纳步骤，形成含输入格式与操作步骤的纯文本可复用任务指令，每任务仅执行一次。推理时仅将该指令与目标音频及问题输入大音频语言模型，按转录、解析与演绎步骤作答，不再携带演示音频。相对零样本思维链每次即兴推理与三样本模仿演示答案，该机制把示例级模仿转为任务级显式规程，避免直接答案演示干扰逐步推理并减少重复音频输入。在BBA基准下，Gemini 2\.0 Flash使用Audio\-Induct的准确率为91\.35%，高于Z\-CoT的83\.85%。其适用边界受限于Big Bench Audio与MMAR预定义任务类别，尚未验证任务边界模糊或纯音频无语言模型的场景，且推理开销相对三样本提示降低约53\.7%至78\.4%。

🔗 **开源资源**

- 第三方资源：<https://www.videolan.org/vlc/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 23. [文本有感情，声音不一定买账：跨模态情感相关的限度](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-136-94b00c07ca/)

> 英文题目：*[The Correlation Between Emotion in Text and Speech Segments is Limited: A Cross\-Modal Study](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-136-94b00c07ca/)*

标签：#统计分析 #大语言模型 #语音 #语音情感识别

评分：**6.6/10** | 创新 1.1/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音情感识别 | 主方法：#统计分析

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.136/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.136.pdf)

👥 **作者与机构**

- David Lindevelt：机构信息未能从会议 PDF 纯文本可靠映射
- Suzan Verberne：机构信息未能从会议 PDF 纯文本可靠映射
- Joost Broekens：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是从文本片段预测情感维度并与对应语音片段的情感对比，输入为播客、有声书和TED演讲的文本与音频，输出为效价、唤醒度与支配度三维数值，难点在于推理时仅见文本却需对应语音中的情感信号。该链条分三步推进，先用8个大语言模型对目标句做维度打分并取5个种子平均，再用在MSP Podcast训练的wav2vec2与WavLM两类音频模型对语音直接打分作为代理真值，最后按体裁计算文本与语音预测的皮尔逊相关系数。与已有单模态情感识别相比，关键差异是不追求单模态精度而是度量跨模态对应，并检验体裁与上下文扩展能否弥合差距，具有为富有表现力语音合成提供依据的实际意义。在Libriheavy语料评测设置下，llama3\.1:70b文本预测与Wav2Vec2语音预测的Pearson相关系数在Valence上为\.793，高于其在Arousal上的\.374。进一步在播客与TED演讲上复现该模式，支配度相关普遍不显著且增加前后文并未系统提升相关性，表明仅效价可跨模态迁移。该结论适用边界受限于英语朗读类内容且依赖音频模型作为代理真值，在自发对话与强表演性语音中尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/audeering/> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/3loi/> — 暂时无法访问
- 模型相关资源：<https://ollama.com/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://www.ted.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 24. [背景噪声也能当遥控器：语音大模型为何会被空中播放的声音操纵](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-66-e9659d5842/)

> 英文题目：*[Attacker’s Noise Can Manipulate Your Audio\-based LLM in the Real World](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-66-e9659d5842/)*

标签：#数据增强 #音频大模型 #对抗鲁棒性 #语音唤醒

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音唤醒 | 主方法：#数据增强

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.66/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.66.pdf)

👥 **作者与机构**

- Vinu Sankar Sadasivan：机构信息未能从会议 PDF 纯文本可靠映射
- Soheil Feizi：机构信息未能从会议 PDF 纯文本可靠映射
- Rajiv Mathews：机构信息未能从会议 PDF 纯文本可靠映射
- Lun Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文研究以语音叠加噪声为输入、以文本回复为输出的音频大模型在空气播放下的可操纵性，难点在于时移、混响、麦克风失真与环境噪声会抹除数字域优化的微弱扰动。方法先针对目标文本以困惑度损失做有界梯度优化生成定向唤醒与指令噪声，其输出作为隐蔽背景声直接送入模型。接着针对音频编码器特征距离以随机掩蔽的ℓ2损失做无定向优化破坏转写可用性，其输出叠加于正常语音进入识别流程。然后在优化内环组合平移、加噪与语谱掩蔽增强，使扰动在重录后仍保留攻击性。在LibriSpeech语料的评测条件下，对抗噪声的PPL为10\.26±34\.04，高于随机噪声对照的1\.35±0\.82。与只做数字域直传的音频越狱不同，该工作显式建模传播鲁棒性并用消费级扬声器与手机完成空中闭环验证，因而可影响无辜用户的设备。适用边界限于白盒单模型与近距离安静播放，尚未验证黑盒跨架构迁移与强防御下的自适应攻击，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 25. [只用英文文本把多语言句子搬进图文音频空间：M2M 的轻量对齐](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-143-bd525afd17/)

> 英文题目：*[Multilingual\-To\-Multimodal \(M2M\): Unlocking New Languages with Monolingual Text](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-143-bd525afd17/)*

标签：#数据集 #多模态学习 #多语言 #零样本 #音频检索

评分：**6.5/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频检索 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.143/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.143.pdf)

👥 **作者与机构**

- Piyush Singh Pasi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

英文图像文本与音频文本对支撑的多模态模型输入为英文描述、输出为跨模态检索或生成结果，在其他语言上性能骤降，而逐语言采集多模态平行数据成本极高。M2M首先冻结英文多模态文本编码器与冻结多语言文本编码器，对同一英文句分别编码得到锚定表示与待映射表示。接着仅学习由两层线性层构成的轻量投影，以对齐损失与结构保持损失将多语言嵌入映射到多模态空间，检索时在归一化嵌入上优化余弦目标，生成任务则省略归一化与结构项以保留尺度信息。推理时任意语言文本经多语言编码器与该投影直接进入冻结图像或音频编码器空间做余弦检索，或作为FLUX的CLIP条件参与生成，T5侧辅以通用提示。相对微调文本编码器或大规模多语言多模态预训练，该方法不更新任何基座编码器且对齐训练仅用英文纯文本，依靠英文共享锚继承多语言编码器已有的跨语言泛化，重塑嵌入几何而非简单旋转。在XTD文本到图像检索评测下，M2M对齐的Jina\-CLIP\-v1×M\-MPNET英语的Recall@10为94\.7，高于11语言平均Recall@10的89\.5。其适用边界受限于检索库规模与合成翻译评测，在更大检索空间与音频字幕编码及生成保真度上仍存在失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.sbert.net/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/toshas/torch-fidelity> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 26. [既要认出是哪台合成器，又要识破没见过的合成器：SIGNAL 如何用图与近邻分工](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-250-8738a25c6e/)

> 英文题目：*[Bridging Attribution and Open\-Set Detection using Graph\-Augmented Instance Learning in Synthetic Speech](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-250-8738a25c6e/)*

标签：#图神经网络 #模型集成 #零样本 #语音 #语音伪造检测

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.3/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音伪造检测 | 主方法：#图神经网络

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.250/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.250.pdf)

👥 **作者与机构**

- Mohd Mujtaba Akhtar：机构信息未能从会议 PDF 纯文本可靠映射
- Girish：机构信息未能从会议 PDF 纯文本可靠映射
- Farhan Sheth：机构信息未能从会议 PDF 纯文本可靠映射
- Muskaan Singh：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

合成语音取证需要同时回答音频来自哪个已知合成器，以及是否来自训练未见的新合成器，输入为原始波形，输出为已知生成器编号或未见标记，难点在于扩散合成器伪影高度相似且新生成器持续涌现。该工作提出合成语音推理框架 SIGNAL（Speech Inference via Graph Networks and Augmented Learning），先用冻结的语音基础模型（Speech Foundation Model，SFM）抽取话语级向量并经卷积编码器压缩到64维，再构建以查询为中心的原型图做注意力消息传递以输出归因分布，同时用距离加权的k近邻（k\-Nearest Neighbor，KNN）分支在同一嵌入空间做实例级相似度估计，最后将两路概率凸组合并按置信度阈值路由为已知或未见。与独立分类器相比，关键差异在于把类别间相对关系建模与局部邻域证据显式解耦，前者负责细粒度区分，后者负责开放集拒识。在DiffSSD测试集上Mamba\-B版本混合模型达到95\.52%准确率与4\.32%等错误率，开放集划分下为88\.91%准确率与14\.78%等错误率，明显优于单用卷积或近邻的基线。零样本迁移到SingFake歌声伪造上仍保持79\.66%准确率与7\.92%等错误率。该结论仅在DiffSSD与SingFake上验证，未见源仅含PlayHT与ElevenLabs两类商业系统，未覆盖更多语言、信道压缩与多未见源细粒度聚类等外推情形。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/microsoft/wavlm-base> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/openai/whisper-base> — 暂时无法访问
- 复现相关资源：<https://github.com/Helixometry/SIGNAL.git> → <https://github.com/Helixometry/SIGNAL> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 27. [从嘈杂开源语音中拼出可用的越南语识别数据：以严格过滤换转写质量](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-345-3f63731376/)

> 英文题目：*[Vietnamese Automatic Speech Recognition: A Revisit](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-345-3f63731376/)*

标签：#数据集 #数据集构建 #语音识别 #强制对齐

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#数据集构建

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.345/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.345.pdf)

👥 **作者与机构**

- Thi Vu：机构信息未能从会议 PDF 纯文本可靠映射
- Linh The Nguyen：机构信息未能从会议 PDF 纯文本可靠映射
- Dat Quoc Nguyen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

越南语自动语音识别（Automatic Speech Recognition, ASR）的输入是多口音连续语音，输出是带标点大小写与词级时间戳的可读文本，难点在于开源语料采样率混杂、转写错误率高且普遍缺时间戳。所提流水线先采集归一化多源音频并用双强模型互验生成或过滤转写，再用微调标点恢复模型重加格式并保留词序完全一致样本，随后把数字展开为口语形式以适配对齐模型并生成时间戳，最后把口语数字合并回数字形式并融合起止时间。与已有先转写后用外部对齐工具补时间戳的做法相比，该链条把数字归一化与时间戳生成内建为一体，避免了数字形式失配与纯文本标点恢复缺失声学依据的问题。在 PhoASR 测试集上，基于 whisper\-small 微调的 3100 小时混合模型正字法词错率（Orthographic WER, O\-WER）降至 11\.70%，优于同系列 469 小时模型的 12\.46%，归一化词错率（Normalized WER, N\-WER）为 8\.20%。该结论限于越南语三方言测试划分与 Whisper 系解码器，中央口音最难且医疗等长尾场景仍偏弱，跨语言泛化尚未验证。训练使用 4 卡 NVIDIA A100 40GB，3100 小时版本因资源约束只训练 15 轮。

🔗 **开源资源**

- 第三方资源：<https://vlsp.org.vn/vlsp2020/eval/asr> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/m3hrdadfi/soxan> — 链接可访问（HTTP 200）
- 第三方资源：<https://sourceforge.net/projects/sox/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/binhvq/news-corpus> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/openai/whisper-small> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 28. [讲法本身成为攻击面：用叙事口吻绕过音频大模型的文本对齐](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-278-91aefba5dc/)

> 英文题目：*[Now You Hear Me: Audio Narrative Attacks Against Large Audio–Language Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-278-91aefba5dc/)*

标签：#提示学习 #音频大模型 #音频安全 #语音 #音频理解

评分：**6.2/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频理解 | 主方法：#提示学习

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.278/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.278.pdf)

👥 **作者与机构**

- Ye Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Haibo Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Yaoning Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Jun Zhuang：机构信息未能从会议 PDF 纯文本可靠映射
- Haohan Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

大型音频语言模型直接以原始语音波形为输入并输出文本，韵律、情感与说话人意图等副语言线索会改变指令感知，而现有安全对齐多只校准文本语义，构成模态转移下的隐蔽漏洞。该工作构建黑盒文本到语音越狱链，先将违例指令嵌入叙事型越狱文本并配对权威命令与情感诉求等心理学话术风格模板，形成可控的传递维度。接着用指令跟随语音合成模型将文本与风格渲染为波形音频，再将其送入目标端到端大音频语言模型以诱发违例文本回复。在三十轮AdvWave迭代中每轮保留本轮最优传递风格并带入下一轮，使传递优化与提示改写协同放大攻击效果。与把音频作文本包装或直接扰动声学词元的做法不同，该方法不改语义而操控传递方式，利用人格化偏见与社会顺从诱发服从，因而更可解释且可迁移。在JailbreakBench基准下，本方法在GPT\-4o Realtime上的攻击成功率指标（Attack Success Rate, ASR）为96\.33%，高于原始AdvWave基线的87\.00%。其结论适用边界受限于英语叙事类有害请求与端到端语音模型，对小参数模型的解码不稳定、级联式自动语音识别管线及多语言泛化尚未验证。原文未披露训练、推理或部署成本

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 29. [按语系共享连接器：多语言语音大模型何时该合，何时该分](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-36-39d3ace92e/)

> 英文题目：*[Language Family Matters: Evaluating SpeechLLMs Across Linguistic Boundaries](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-36-39d3ace92e/)*

标签：#Adapter #大语言模型 #鲁棒性 #多语言 #语音识别

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#Adapter

会议来源：[官方记录](https://aclanthology.org/2026.eacl-short.36/) · [官方 PDF](https://aclanthology.org/2026.eacl-short.36.pdf)

👥 **作者与机构**

- Yuchen Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Ravi Shekhar：机构信息未能从会议 PDF 纯文本可靠映射
- Haralambos Mouratidis：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多语言自动语音识别需将不同语言语音转写为文本，难点在于低资源语言数据稀缺且朗读式 curated 与众包式 crowdsourced 语音之间声学域差异大，单语言建模易出现重复与超长等灾难性错误。该方法先用冻结语音编码器抽取声学帧表示，再经下采样拼接与轻量非线性连接器映射到冻结大语言模型文本嵌入空间，最后由大语言模型自回归生成转写，连接器输出直接作为解码器输入参与生成。与逐语言独立训练连接器不同，该文按语系合并同族多语言联合训练一个家族连接器，以共享音系形态规律并减少连接器数量，其实际意义在于降低参数量并增强跨域泛化。在FLEURS语料Germanic语系评测设置下，家族连接器FAMCONN的词错率WER为15\.67%，低于逐语言连接器LANGCONN的23\.37%。跨域与通用连接器对照进一步表明家族共享优于单纯增加数据量，家族表示捕捉的音韵韵律规律有助于跨域迁移。该结论的适用边界在于内部分化大的语系会成为失败条件，如Afro\-Asiatic与Dravidian在部分配置下家族连接器词错率反而上升，说明谱系相关不等于声学可共享，异质语系仍受限于单一家族表示。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 30. [低资源语音想匿名却不能变味：跨语言换声哪条路更稳](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-16-01fb0947c0/)

> 英文题目：*[Exploring Cross\-Lingual Voice Conversion Methods for Anonymizing Low\-Resource Text\-to\-Speech](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-16-01fb0947c0/)*

标签：#迁移学习 #跨语言 #低资源 #说话人匿名化 #文本到语音

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#说话人匿名化 | 主方法：#迁移学习

会议来源：[官方记录](https://aclanthology.org/2026.eacl-short.16/) · [官方 PDF](https://aclanthology.org/2026.eacl-short.16.pdf)

👥 **作者与机构**

- Shenran Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Aidan Pine：机构信息未能从会议 PDF 纯文本可靠映射
- Mengzhe Geng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为低资源原住民语言文本与参考音频，输出为保留内容与自然度但剥离原始说话人身份的语音，难点在于极少说话人下身份与语言口音高度纠缠且缺乏跨语言匿名评测手段。该工作以零样本合成模型 StyleTTS2 为基座，先构建单语基线保留原始音色，再并行试验推理时风格嵌入扰动、外部 SeedVC 转换与多语言联合训练后跨语言参考三条链路，其中多语言链路引入语言嵌入以解耦语言与音色。与已有推理时扰动和现成转换器相比，关键机制差异是用高资源英语数据扩展说话人空间并在训练中显式分离语言信息，从而实现更稳定的跨语言身份替换。在 nêhiyawêwin 测试集上，带语言嵌入的多语言转换将说话人相似度降至 0\.61 左右，同时保持预测平均意见分在 3\.76 以上，显著优于单语无转换基线的高相似度。该结论仅适用于两种加拿大原住民语言的小规模封闭说话人评测，且口音保持依赖语言识别器置信度等代理指标，外推到开放说话人与大规模部署尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/Plachtaa/seed-vc> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 31. [不定长语音对等长文本：用可变速率对齐让大模型按语义节奏听写](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-112-0f11e60a3c/)

> 英文题目：*[SEAM: Bridging the Temporal\-Semantic Granularity Gap for LLM\-based Speech Recognition](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-112-0f11e60a3c/)*

标签：#注意力机制 #大语言模型 #语音 #语音识别

评分：**6.1/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#注意力机制

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.112/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.112.pdf)

👥 **作者与机构**

- Junseok Oh：机构信息未能从会议 PDF 纯文本可靠映射
- Ji\-Hwan Kim：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音识别需把连续声学特征转写为离散文本，难点是语音表征长度随时间线性增长而文本长度随语义密度变化，固定速率输入偏离大语言模型预训练分布。本文提出语音编码器解码器对齐模块（Speech Encoder\-Decoder Alignment Module，SEAM），分三阶段学习：先冻结语音编码器和大语言模型词嵌入，训练对齐解码器以文本嵌入为查询、语音表征为键值做交叉注意力，在语义嵌入空间生成可变速率对齐嵌入；再冻结对齐模块并用低秩适配（Low\-Rank Adaptation，LoRA）微调大语言模型做指令跟随转写；最后用掩蔽与删除扰动做精修以缓解教师强制带来的长度依赖，推理时辅以首词元引导（First Token Guidance，FTG）修正起始误差。与线性投影降采样和窗口化查询器等固定速率方案相比，该机制用自回归可变长度解码将序列长度与时长解耦，更贴近自然文本分布。在 LibriSpeech 960小时训练并在 TED\-LIUM\-v2评测的跨域设置下，完整模型词错率为4\.7%，显著优于同数据基线并接近使用约4\.4倍数据的竞品。该结论仅在英文朗读到英文演讲迁移上验证，未覆盖多语种、噪声、口音与实时交互场景。原文未披露训练时长、推理延迟与部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 32. [口音英语为何能治住语码混杂的语言识别：少样本微调与排序评估](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-242-0de3aaa5e9/)

> 英文题目：*[Improving Language Identification for Code\-Switched Speech: The Pivotal Role of Accented English](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-242-0de3aaa5e9/)*

标签：#评测协议 #LoRA #少样本 #多语言 #语言识别

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语言识别 | 主方法：#LoRA

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.242/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.242.pdf)

👥 **作者与机构**

- Adyasha Patra：机构信息未能从会议 PDF 纯文本可靠映射
- Dhiraj Kumar Sah：机构信息未能从会议 PDF 纯文本可靠映射
- Preethi Jyothi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

码切换语音的语句级语言识别需以整句语音为输入，输出其中出现的矩阵语言与嵌入式英语及其先后排序，难点在于带矩阵语言口音的英语常被基座模型压到前两名之外而漏检。首先方法以大规模多语言模型MMS\-LID\-126为基座并冻结主干，以保留单语矩阵语言能力；接着仅用80条矩阵语言口音英语做低秩适配，只更新注意力查询、键、值投影以抬高口音化英语表示，该适配输出直接进入解码排序阶段；最后用精确匹配联合新排序指标LangRank同时检验码切换检出与单语误报。与直接在码切换语句上微调不同，该链条不学习混合语句的联合分布，而是补齐基座对口音化英语的表征缺口，因而在提升嵌入英语检出的同时避免在单语上过预测英语。在MUCS Hindi\-English测试集下，MMS\-LoRA方法的精确匹配指标为915，高于MMS基线的509。该结论适用边界受限于嵌入语为英语且微调时矩阵语言已知，对非英语嵌入、低混合度与亲属语言干扰等场景尚未验证。其训练成本为单张RTX A5000硬件上80条样本微调约4分钟。

🔗 **开源资源**

- 第三方资源：<https://accent.gmu.edu/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 33. [从国际音标到带符正字法：埃及阿拉伯语儿童指向言语为何需要重标一遍](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-102-5ffc895827/)

> 英文题目：*[Computational Benchmarks for Egyptian Arabic Child Directed Speech](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-102-5ffc895827/)*

标签：#数据集构建 #语言习得 #语音 #语音识别

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#数据集构建

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.102/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.102.pdf)

👥 **作者与机构**

- Salam Khalifa：机构信息未能从会议 PDF 纯文本可靠映射
- Abed Qaddoumi：机构信息未能从会议 PDF 纯文本可靠映射
- Nizar Habash：机构信息未能从会议 PDF 纯文本可靠映射
- Owen Rambow：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

埃及阿拉伯语儿童成人互动长期只有国际音标近音位转写，无法直接输入以正字法为前提的形态与语音工具，而儿童发音不稳定与方言无标准拼写使映射更加困难。作者以10名儿童单次自发访谈录音与转写为输入，先做CHILDES标注清洗与词表抽取，负责得到带频次的待映射词型，该词表作为输入进入下一步，再用GPT\-4o批量生成带全变音符号的CODA初稿，负责提供可校底本，其初稿输出直接作为待校底本进入下一步，最后由专家按去元音近似辅音根分批修订正字法并标注词元与Buckwalter核心词性后回映射全篇校对，得到约26K词元的统一语料。相对已有埃及资源，该流程保留国际音标对齐的同时统一到CODA与CALIMA兼容体系，使同一语料可同时服务文本形态消歧与语音识别。在ARABABYTALK\-EGY语料的ASR任务下，30s分段的WER为89\.6%，低于60s分段的112\.4%。完整会话基准中形态联合准确率DLP平均为50\.3%，词性准确率为85\.7%，显示儿童指向语体与通用埃及语存在结构差异。该结论适用边界受限于小样本自发互动与埃及方言幼儿场景，尚未验证向其他方言、年龄段及正式语体的外推。原文未披露训练、推理或部署成本

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 34. [用多智能体分工把一句话变成一分钟有声故事：MAViS 如何管住长视频的连贯与质量](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-101-6621077c64/)

> 英文题目：*[MAViS: A Multi\-Agent Framework for Long\-Sequence Video Storytelling](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-101-6621077c64/)*

标签：#LoRA #用户研究 #音视频 #音视频生成 #文本到语音

评分：**5.8/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音视频生成 | 主方法：#LoRA

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.101/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.101.pdf)

👥 **作者与机构**

- Qian Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Ziqi Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Ruoxi Jia：机构信息未能从会议 PDF 纯文本可靠映射
- Paul Debevec：机构信息未能从会议 PDF 纯文本可靠映射
- Ning Yu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入一句用户提示，输出约1分钟带旁白与背景音乐的多镜头叙事视频，难点在于长时叙事连贯性、跨镜头人物身份一致性以及现有生成模型动作与背景保持能力不足。方法链分四步：剧本写作按结构与内容与风格指南生成标题人物与分镜并经多评审者迭代，其输出进入镜头设计展开为背景姿态运镜等七要素。随后人物建模训练低秩自适应模型并采样多视角图像，为关键帧生成提供身份约束，关键帧经文本到图像生成后经图像到视频动画与音频合成组装成长序列。全流程以探索检查增强的迭代协作统一各阶段，区别于单次生成或需人工写剧本与训练低秩自适应模型的层级管线，提升了剧本与生成模型的兼容性与可控性。在自造20条提示词的评测设置下，MAViS的关键帧CLIP指标为34\.22，高于Mora的33\.98。适用边界为文本到图像加图像到视频范式下的简单单动作镜头，强空间关联转场与复杂交互与对白尚未验证。推理开销为在两块H100硬件上平均生成一条长视频需13\.63小时，单镜头调用各视频模型的费用与耗时见原文成本表。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 35. [语义手势能帮模型判断谁接着说：多方对话中的轮替预测](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-106-19b3504555/)

> 英文题目：*[Modeling Turn\-Taking with Semantically Informed Gestures](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-106-19b3504555/)*

标签：#数据集 #混合专家模型 #多模态学习 #轮次切换

评分：**5.8/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#轮次切换 | 主方法：#混合专家模型

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.106/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.106.pdf)

👥 **作者与机构**

- Varsha Suresh：机构信息未能从会议 PDF 纯文本可靠映射
- M\. Hamza Mughal：机构信息未能从会议 PDF 纯文本可靠映射
- Christian Theobalt：机构信息未能从会议 PDF 纯文本可靠映射
- Vera Demberg：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多方对话需在静默间隔终点判定同一说话人保持Hold还是他人接管Yield，输入为文本语音与上半身动作，难点是词汇韵律在模糊边界下意图不明而手势含义又依赖语音上下文难以直接使用。该方法先将连续对话按200ms静默阈值切分为止于过渡相关位置的静默间隔单元并标注保持或移交，再用预训练文本句子嵌入与Wav2Vec2音频嵌入经多层感知机得到单模态表征，同时将三维上半身动作经向量量化变分自编码器离散为手势词元序列并由语义对齐变换器提炼为固定向量。随后门控混合专家网络按上下文自适应加权三路专家输出并经线性分类器预测保持或移交，其中手势分支以四类语义加无类分类损失约束运动重建，使表征贴近语言含义。与已有拼接与低秩融合相比，该机制以门控权重显式分配模态贡献并用手势类型监督增强跨模态对齐，使手势在语音线索弱或模糊时提供互补而非替代作用。在DnD Gesture\+\+测试集评估下，Text\+Audio\+Gesture方法的F1分数为69\.9 ±0\.1，高于Text\+Audio基线的67\.9 ±1\.2。结论适用边界受限于桌面角色扮演英语数据与基于静默阈值的离散轮次定义，尚未验证任务型会议或跨文化场景的外推能力。训练成本方面原文仅说明混合专家训练使用单块NVIDIA V100硬件、批量32训练20轮，未披露推理开销与部署吞吐。

🔗 **开源资源**

- 第三方资源：<https://archive.mpi.nl/tla/elan> — 暂时无法访问
- 第三方资源：<https://github.com/m-bain/whisperX> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 36. [把构音障碍的声学判断翻译成病人能懂的话：CLINIC\-GENIE 的两段式做法](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-275-2b3576c523/)

> 英文题目：*[Diagnosis of Dysarthria Severity and Explanation Generation Using XAI\-Enhanced CLINIC\-GENIE on Diadochokinetic Tasks](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-275-2b3576c523/)*

标签：#检索增强 #大语言模型 #可解释性 #语音 #病理语音评估

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#检索增强

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.275/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.275.pdf)

👥 **作者与机构**

- Jihyeon Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Insung Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Myoung\-Wan Koo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

构音障碍分级需以交替与顺序运动速率任务中快速重复pa、ta、ka及pataka录音为输入，输出健康、轻中度、重度三档标签，实际难点在于重症者因身体受限而样本极少且黑盒声学模型难以指出可治疗环节。该流水线先由CLINIC模块并行编码13维临床可解释声学特征与梅尔频谱及Wav2Vec 2\.0表征，经全连接映射融合后输出每条话语严重度并以多数投票得到患者级标签与Shapley归因。接着提示生成器将四项任务预测、CEAF数值、Shapley值与检索到的相似历史病例组装为固定模板提示。再由基于GPT\-4o的GENIE模块按思维链分步推理，以低温生成覆盖发声、构音、韵律与整体严重度的韩文患者友好报告。与仅用可解释特征或仅融合单一语音表征相比，该三路融合加归因约束生成的机制差异在于同时保障少数重症召回与报告忠实度，具有漏诊代价高场景下的安全意义。在自采卒中后数据集测试集下，CLINIC的Balanced Acc\.为0\.952，高于CEAFs only的0\.779。自动与专家评测均显示完整CLINIC加检索与Shapley配置在语义等价与保真度上占优，专家保真度评分为4\.94。该结论适用边界受限于韩语卒中后人群与受控音节重复任务，向自发连续语音、脑瘫或肌萎缩侧索硬化等其他病因及真实患者可读性的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
