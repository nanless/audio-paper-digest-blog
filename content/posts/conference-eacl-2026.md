---
title: "eacl-2026 论文深度解读"
date: 2026-09-11
draft: false
paper_digest_pipeline_owned: true
tags: ["变分自编码器","病理语音评估","大语言模型","低资源","对比学习","对抗鲁棒性","多模态学习","多任务学习","多通道","多语言","高效推理","工业应用","公平性","环境声","会议转录","混合专家模型","基准测试","基准设计","检索增强","教育","可解释性","跨语言","零样本","鲁棒性","轮次切换","模型比较","模型集成","模型融合","脑信号","评测协议","迁移学习","强制对齐","少样本","数据集","数据集构建","数据增强","说话人匿名化","说话人识别","提示学习","统计分析","图神经网络","向量量化","音乐","音频安全","音频编码","音频大模型","音频检索","音频理解","音频深度伪造检测","音频生成","音频问答","音视频","音视频生成","语言识别","语言习得","语音","语音翻译","语音合成","语音唤醒","语音活动检测","语音交互","语音情感识别","语音识别","语音质量评估","语音转换","长音频处理","知识蒸馏","指令微调","主观评测","注意力机制","状态空间模型","自回归模型","自监督学习","Adapter","LoRA","SFT"]
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
| #音频问答 | 5 篇 |
| #音频深度伪造检测 | 3 篇 |
| #语音情感识别 | 3 篇 |
| #病理语音评估 | 2 篇 |
| #音频理解 | 2 篇 |
| #语音交互 | 2 篇 |
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

## 📊 论文评分排行榜

| 排名 | Reader 中文题目 | 英文题目 | 八维评分 | 分档 | 文档类型 | 主任务 |
|---:|---|---|---|---|---|---|
| 1 | [AfriVox：当语音大模型遇到非洲语言与口音时，转写与翻译谁更可靠](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-122-addd513936/) | [AfriVox: Probing Multilingual and Accent Robustness of Speech LLMs](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-122-addd513936/) | **8.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 数据集与基准 | #语音识别 |
| 2 | [真实多人对话压测自监督语音模型：CSPB 用噪声重叠与多通道检验表示稳健性](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-275-83ec899273/) | [CSPB: Conversational Speech Processing Benchmark for Self\-supervised Speech Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-275-83ec899273/) | **8.1/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 数据集与基准 | #语音识别 |
| 3 | [单语很强、混着说就错：HiKE 用三层切换与借词标注卡住韩英混说评测](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-33-d29d1e84d4/) | [HiKE: Hierarchical Evaluation Framework for Korean\-English Code\-Switching Speech Recognition](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-33-d29d1e84d4/) | **8.1/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 数据集与基准 | #语音识别 |
| 4 | [前缀里已有结局：用计划评论器引导自回归音频解码](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-138-f4a45423b2/) | [Guided by the Plan: Enhancing Faithful Autoregressive Text\-to\-Audio Generation with Guided Decoding](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-138-f4a45423b2/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频生成 |
| 5 | [把混在一起的声音拆开：AudioSAE 用稀疏特征解释 Whisper 与 HuBERT](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-149-02b8b42fcf/) | [AudioSAE: Towards Understanding of Audio\-Processing Models with Sparse AutoEncoders](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-149-02b8b42fcf/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音活动检测 |
| 6 | [早层可以不看多模态：DeepInsert 把融合推迟到中间层](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-332-cf24208228/) | [DeepInsert: Early Layer Bypass for Efficient and Performant Multimodal Understanding](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-332-cf24208228/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频理解 |
| 7 | [越南语识别缺的不是模型，而是可复用的清洗管线：用七步聚合做出 500 小时带词级时间戳数据](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-345-3f63731376/) | [Vietnamese Automatic Speech Recognition: A Revisit](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-345-3f63731376/) | **8.0/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 数据集与基准 | #语音识别 |
| 8 | [只转写不倾听：词义中性与冲突条件下音频大模型的情感依据](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-274-b53aef0010/) | [Do Audio LLMs Really LISTEN, or Just Transcribe? Measuring Lexical vs\. Acoustic Emotion Cues Reliance](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-274-b53aef0010/) | **7.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #语音情感识别 |
| 9 | [只转写前景词不够：SCENEBench 检验背景声、响度运动、混排转写与喉头短声](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-335-71921c96eb/) | [SCENEBench: An Audio Understanding Benchmark Grounded in Assistive and Industrial Use Cases](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-335-71921c96eb/) | **7.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #音频理解 |
| 10 | [为俄语补上多模态考试：MERA Multi 如何统一出题、判分与防泄漏](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-94-667b23ffaf/) | [Multimodal Evaluation of Russian\-language Architectures](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-94-667b23ffaf/) | **7.6/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 数据集与基准 | #音频问答 |
| 11 | [语音把选择题读出来之后，模型为何更怕换语言和调选项顺序](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-80-adf29f971d/) | [Bias in the Ear of the Listener: Assessing Sensitivity in Audio Language Models Across Linguistic, Demographic, and Positional Variations](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-80-adf29f971d/) | **7.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #音频问答 |
| 12 | [多人对话先找对说话人再判情绪：同步选脸、文本蒸馏与分层融合如何补齐少数情绪](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-212-8f19f964ef/) | [Emotion Recognition in Multi\-Speaker Conversations through Speaker Identification, Knowledge Distillation, and Hierarchical Fusion](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-212-8f19f964ef/) | **7.5/10** · 创新 1.2/2 · 技术严谨 1.3/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音情感识别 |
| 13 | [按频带分开压缩：BSCodec 用并行子带处理兼顾语音与音乐音效](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-245-fa133268a7/) | [BSCodec: A Band\-Split Neural Codec for High\-Quality Universal Audio Reconstruction](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-245-fa133268a7/) | **7.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 方法研究 | #音频编码 |
| 14 | [单项都会、组合就错：音频推理基准如何卡住多模态大模型](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-42-1d94f1effa/) | [A Benchmark for Audio Reasoning Capabilities of Multimodal Large Language Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-42-1d94f1effa/) | **7.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频问答 |
| 15 | [先分开表征再对齐推理：ConLLM 如何处理模态割裂与浅层融合](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-102-db05d9d686/) | [Revealing the Truth with ConLLM for Detecting Multi\-Modal Deepfakes](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-102-db05d9d686/) | **7.4/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频深度伪造检测 |
| 16 | [认不出带口音的英语：码切换语音识别先补口音英语再谈排序](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-242-0de3aaa5e9/) | [Improving Language Identification for Code\-Switched Speech: The Pivotal Role of Accented English](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-242-0de3aaa5e9/) | **7.4/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #语言识别 |
| 17 | [印地语 ASR 纠错为何小模型微调胜过大模型提示：字节与语义分工的证据](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-45-b7f4e64b99/) | [Post\-ASR Correction in Hindi: Comparing Language Models and Large Language Models in Low\-Resource Scenarios](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-45-b7f4e64b99/) | **7.0/10** · 创新 1.1/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 应用研究 | #语音识别 |
| 18 | [转录之外再听一遍：用文本蓝图让语言模型评语音](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-151-c6d61a02b7/) | [Hearing Between the Lines: Unlocking the Reasoning Power of LLMs for Speech Evaluation](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-151-c6d61a02b7/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音质量评估 |
| 19 | [同域接近满分、跨域跌回随机：XMAD\-Bench 如何逼出真伪检测的泛化缺口](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-162-2f7bf61362/) | [XMAD\-Bench: Cross\-Domain Multilingual Audio Deepfake Benchmark](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-162-2f7bf61362/) | **6.9/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频深度伪造检测 |
| 20 | [发音纠错不能只给分数：让音频语言模型说出哪里错、怎么练](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-190-923151c2cd/) | [Unlocking Large Audio\-Language Models for Interactive Language Learning](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-190-923151c2cd/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音交互 |
| 21 | [拼起来的音频更好判：AudioJudge 何时能替人听、何时仍会听错](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-168-1217e8baad/) | [AudioJudge: Understanding What Works in Large Audio Model Based Speech Evaluation](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-168-1217e8baad/) | **6.7/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音质量评估 |
| 22 | [文本有感情，声音未必跟：跨模态效价相关高而激活度低](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-136-94b00c07ca/) | [The Correlation Between Emotion in Text and Speech Segments is Limited: A Cross\-Modal Study](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-136-94b00c07ca/) | **6.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 应用研究 | #语音情感识别 |
| 23 | [把共有的病和各自的噪声分开：DIVINE 用两级解耦做口面神经疾病诊断与严重度估计](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-248-f3db9e13eb/) | [DIVINE : Coordinating Multimodal Disentangled Representations for Oro\-Facial Neurological Disorder Assessment](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-248-f3db9e13eb/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #病理语音评估 |
| 24 | [讲法本身成为攻击面：叙事语音如何绕过音频大模型的文本对齐](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-278-91aefba5dc/) | [Now You Hear Me: Audio Narrative Attacks Against Large Audio–Language Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-278-91aefba5dc/) | **6.4/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音交互 |
| 25 | [只拉伸音频位置：部分 YaRN 与虚拟长音频训练扩展长语音理解](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-286-9f2982a622/) | [Extending Audio Context for Long\-Form Understanding in Large Audio\-Language Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-286-9f2982a622/) | **6.4/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.9/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频问答 |
| 26 | [只用英文文本学线性映射：M2M 如何把多语言文本送进冻结的多模态空间](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-143-bd525afd17/) | [Multilingual\-To\-Multimodal \(M2M\): Unlocking New Languages with Monolingual Text](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-143-bd525afd17/) | **6.3/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频检索 |
| 27 | [从国际音标到带符阿拉伯文：埃及儿童指向言语的可计算基准如何建成](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-102-5ffc895827/) | [Computational Benchmarks for Egyptian Arabic Child Directed Speech](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-102-5ffc895827/) | **6.2/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音识别 |
| 28 | [背景噪声如何劫持语音大模型：可复述的定向唤醒与退化转写路径](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-66-e9659d5842/) | [Attacker’s Noise Can Manipulate Your Audio\-based LLM in the Real World](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-66-e9659d5842/) | **6.2/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音唤醒 |
| 29 | [从可解释声学特征到病例类比解释：CLINIC\-GENIE 如何兼顾构音障碍分级精度与临床可读性](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-275-2b3576c523/) | [Diagnosis of Dysarthria Severity and Explanation Generation Using XAI\-Enhanced CLINIC\-GENIE on Diadochokinetic Tasks](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-275-2b3576c523/) | **6.2/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #病理语音评估 |
| 30 | [只听三段音频就写出做题步骤：Audio\-Induct 把示例变成可复用的文字指令](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-18-7f7b7136a1/) | [Task\-Level Instructions Induction for Audio Question Answering from Few Examples](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-18-7f7b7136a1/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频问答 |
| 31 | [一个连接器管一整个语系：语系共享何时压住单语言训练](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-36-39d3ace92e/) | [Language Family Matters: Evaluating SpeechLLMs Across Linguistic Boundaries](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-36-39d3ace92e/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.6/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 32 | [不按秒数出向量：SEAM 用可变速率对齐弥合语音与文本的粒度差](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-112-0f11e60a3c/) | [SEAM: Bridging the Temporal\-Semantic Granularity Gap for LLM\-based Speech Recognition](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-112-0f11e60a3c/) | **6.1/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音识别 |
| 33 | [一句话能拍一分钟：MAViS 用多智能体与 3E 循环约束长视频叙事](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-101-6621077c64/) | [MAViS: A Multi\-Agent Framework for Long\-Sequence Video Storytelling](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-101-6621077c64/) | **5.8/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音视频生成 |
| 34 | [既要指认来源又要识破新来源：图与近邻如何分工做合成语音取证](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-250-8738a25c6e/) | [Bridging Attribution and Open\-Set Detection using Graph\-Augmented Instance Learning in Synthetic Speech](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-250-8738a25c6e/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频深度伪造检测 |
| 35 | [把别人的声音换掉还不带出口音：低资源 TTS 的跨语言匿名化比较](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-16-01fb0947c0/) | [Exploring Cross\-Lingual Voice Conversion Methods for Anonymizing Low\-Resource Text\-to\-Speech](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-16-01fb0947c0/) | **5.8/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #说话人匿名化 |
| 36 | [语义手势能帮模型判断谁接着说：多方对话中的保持与让渡预测](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-106-19b3504555/) | [Modeling Turn\-Taking with Semantically Informed Gestures](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-106-19b3504555/) | **5.6/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #轮次切换 |

---

## 📋 论文列表

### 1. [AfriVox：当语音大模型遇到非洲语言与口音时，转写与翻译谁更可靠](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-122-addd513936/)

> 英文题目：*[AfriVox: Probing Multilingual and Accent Robustness of Speech LLMs](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-122-addd513936/)*

标签：#基准设计 #鲁棒性 #多语言 #语音识别 #语音翻译

评分：**8.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#基准设计

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

该基准输入为非洲口音英语、非洲口音法语、阿拉伯语及20种非洲语言的真实语音，输出为母语逐字转写与译为英语的文本，难点在于口音超百种、领域涵盖议会噪声与医疗对话、自发重叠与背景干扰交织。方法链第一步聚合NCHLT、Common Voice、FLEURS等公开语料并新建议会与医疗领域数据集以补足噪声自发场景。第二步将上一步汇集的音频交由母语者逐字转写翻译，并以10%\-20%抽检与80%通过率筛选输出统一评测集。第三步将该评测集以标准化零样本与少样本提示输入单模态ASR与多模态语音大模型，并以WER、BLEU、chrF与AfriCOMET\-STL度量转写与翻译性能。第四步取评测集中的NaijaVoices豪萨语、伊博语、约鲁巴语数据对Qwen2\.5\-Omni做低秩适配微调，以验证本地数据带来的增益。与仅覆盖朗读清洁语音的旧基准不同，该工作区分旧公开数据与新采集数据以暴露污染与泛化差距，并引入高噪声重叠议会语音，对部署选型更具实际意义。在NaijaVoices豪萨语、伊博语、约鲁巴语转写评测任务下，微调后Qwen2\.5\-Omni在伊博语上的WER为42\.41，低于基线的198\.68。但结论仍受限于2000余种语言中仅覆盖20种、自发对话与代码切换不足及单次运行的统计不确定性，泛化至超低资源语言与多模态问答场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://huggingface.co/datasets/naijavoices/> — 暂时无法访问
- 数据相关资源：<https://github.com/Ashesi-Org/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://huggingface.co/datasets/intronhealth/> — 暂时无法访问
- 数据相关资源：<https://huggingface.co/datasets/intronheal> — 暂时无法访问
- 第三方资源：<https://speech.intron.health/> → <https://speech.intron.health/login> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.intron.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://gemini.google.com/app> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 2. [真实多人对话压测自监督语音模型：CSPB 用噪声重叠与多通道检验表示稳健性](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-275-83ec899273/)

> 英文题目：*[CSPB: Conversational Speech Processing Benchmark for Self\-supervised Speech Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-275-83ec899273/)*

标签：#会议转录 #基准测试 #基准设计 #多通道 #语音识别

评分：**8.1/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.275/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.275.pdf)

👥 **作者与机构**

- Zili Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Matthew Maciejewski：机构信息未能从会议 PDF 纯文本可靠映射
- Leibny Paola Garcia Perera：机构信息未能从会议 PDF 纯文本可靠映射
- Shinji Watanabe：机构信息未能从会议 PDF 纯文本可靠映射
- Sanjeev Khudanpur：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

CSPB以远场麦克风阵列采集的多人自然对话为输入，需同时输出转写文本、说话人时间边界与增强后语音，难点在于噪声、混响与说话人重叠交织出现，远场与近场性能差距显著。方法链分四步推进：先从AMI、AliMeeting、MMCSG、DiPCo构建单通道与多通道评测集，再冻结自监督语音模型抽取多层表示并做可学习加权求和，随后将加权表示送入轻量双向长短时记忆网络下游头，最后按自动语音识别、说话人分离标注与增强分离任务分别计算词错误率与分离标注错误率。与仅用干净语料预训练的模型相比，大规模多样数据加去噪增强预训练与波束成形或跨通道建模引入的空间信息利用构成关键机制差异，其实质意义在于同时提升抗混响噪声与抗重叠能力。在AMI单通道ASR评测任务下，WavLM Large的WER为35\.5%，低于FBANK基线的89\.3%。重叠分析进一步表明WavLM Base\+在高重叠区间的退化幅度小于HuBERT Base，验证了鲁棒预训练目标的有效性。该结论适用边界受限于英语与中文会议、智能眼镜与家庭聚餐场景，在大于2人分离增强、编码器\-解码器结构及更大规模多通道预训练外推上尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/HuangZiliAndy/CSPB> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 3. [单语很强、混着说就错：HiKE 用三层切换与借词标注卡住韩英混说评测](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-33-d29d1e84d4/)

> 英文题目：*[HiKE: Hierarchical Evaluation Framework for Korean\-English Code\-Switching Speech Recognition](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-33-d29d1e84d4/)*

标签：#基准测试 #基准设计 #多语言 #语音 #语音识别

评分：**8.1/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.33/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.33.pdf)

👥 **作者与机构**

- Gio Paik：机构信息未能从会议 PDF 纯文本可靠映射
- Yongbeom Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Soungmin Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Sangmin Ahn：机构信息未能从会议 PDF 纯文本可靠映射
- Chan Woo Kim：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

韩英代码切换识别以含韩英混杂的语音为输入，输出统一转写文本，难点在于韩英类型距离大、切换粒度不均且外来语在谚文与罗马字母间存在合法多写。作者先人工撰写覆盖8个主题的575条种子脚本，再以单样本示例提示Claude 3\.5 Sonnet克隆生成并经人工校对，形成多样脚本集合。随后组织13名双语者在安静环境经网页工具录音并剔除偏离样本，保留1121条约2\.2小时语音，再按句级优先于短语级优先于词级的规则完成层次标注与外来语归一化以供评测。与以往仅按句内外粗分不同，该工作以词、短语、句三级层次划分分离整体转写与切换边界能力，并用Mixed Error Rate与Point of Interest Error Rate分别度量全句与切换点。在HiKE基准下，GPT\-4O\-TRANSCRIBE的总体Mixed Error Rate为21\.8，低于WHISPER\-LARGE的26\.1。微调实验进一步表明自然句内数据与拼接式合成句间数据均能启用切换能力，体现基准对训练方式的诊断意义。该结论适用边界受限于朗读式短句与既定标注口径，尚未验证自发对话、噪声远场与多说话人下的外推，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ThetaOne-AI/HiKE> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 4. [前缀里已有结局：用计划评论器引导自回归音频解码](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-138-f4a45423b2/)

> 英文题目：*[Guided by the Plan: Enhancing Faithful Autoregressive Text\-to\-Audio Generation with Guided Decoding](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-138-f4a45423b2/)*

标签：#自回归模型 #主观评测 #高效推理 #环境声 #音频生成

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

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

文本到音频生成需由文本提示合成时域连贯且语义完备的波形，难点在于严格因果的自回归 \(Autoregressive, AR\) 模型在多事件复杂提示下易遗漏关键语义，而扩散模型可双向统筹全局。本文先用轻量探针验证前32个词元已编码事件数与发声对象等全局属性，再以此为依据训练轻量规划评论家 \(Plan\-Critic\) 从部分序列预测最终指令遵循质量，最后在推理时用该评论家对大量候选前缀打分剪枝并仅续写高分种子。与全序列最佳候选 \(Best\-of\-N, BoN\) 盲滚出不同，该方法把算力前移到前缀探索并以后缀补全收尾，在相同词元预算下扩大了高质量全局结构的搜索空间。在AudioCaps评测上该方法以36\.47对26\.67的CLAP分数超越Siren基线并反超多个双向扩散基线，同时保持了音频质量指标稳定。该结论依赖CLAP作为语义代理且固定前缀长度为32，对更长声景与非CLAP感知维度的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/wjc2830/Siren.git> → <https://github.com/wjc2830/Siren> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 5. [把混在一起的声音拆开：AudioSAE 用稀疏特征解释 Whisper 与 HuBERT](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-149-02b8b42fcf/)

> 英文题目：*[AudioSAE: Towards Understanding of Audio\-Processing Models with Sparse AutoEncoders](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-149-02b8b42fcf/)*

标签：#自监督学习 #可解释性 #脑信号 #语音 #语音活动检测

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音活动检测 | 主方法：#自监督学习

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

音频编码器以语音、音乐与环境声混合波形为输入，输出下游识别与理解所需的稠密帧级表征，难点在于多义神经元叠加使声学、副语言与语义信息纠缠难解。本文在Whisper与HuBERT全部编码器层提取激活并训练批量Top\-K稀疏自编码器，将稠密向量分解为稀疏单语义特征，其输出的二值激活分布再以交并比度量跨种子与跨层稳定性。稳定特征接着接受音频级与帧级域特化分析、分类探测与音素对齐以验证可解释性与解耦程度，筛选出的幻觉相关特征则转为操控向量回注编码器并与人体脑电做时序响应函数拟合。相对以往孤立音乐概念挖掘或非正式Whisper观察，该链条以重建、鲁棒性、可解释性与解耦多维评测打通干预与神经对齐，具有实际可操控意义。在Musan、FSD50K与WHAM三非语音集平均的幻觉评测设置下，Top\-100特征SAE操控相对未操控基线的误检率FPR从0\.37降至0\.11。在LibriTTS千条音频构成的音素对齐评测任务下，Whisper末层帧级音素分类准确率为0\.92，高于HuBERT的0\.89。结论的适用边界受限于HuBERT\-base与Whisper\-small及英语为主评测，对更大架构、生成任务与非线性脑机制的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/audiosae/audiosae_demo> → <https://github.com/audiosae/audio-sae> — 链接可访问（HTTP 200）
- 模型相关资源：<https://huggingface.co/openai/whisper-small> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 6. [早层可以不看多模态：DeepInsert 把融合推迟到中间层](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-332-cf24208228/)

> 英文题目：*[DeepInsert: Early Layer Bypass for Efficient and Performant Multimodal Understanding](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-332-cf24208228/)*

标签：#多模态学习 #大语言模型 #高效推理 #音频理解

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频理解 | 主方法：#多模态学习

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

多模态语言模型需将视觉、音频或分子编码器输出的数百个多模态词元与文本提示拼接后送入大语言模型全层联合处理，导致训练与推理随词元数急剧膨胀且跨模态交互在浅层大量空转。该文提出深度插入，先让文本词元单独通过前N\_DI层变换以建立语言上下文表示。接着在中间指定层将投影后的多模态词元直接拼接到文本序列中，并重建位置编码与键值缓存以对齐后续注意力计算。然后让拼接后的混合序列共同通过剩余深层继续进行跨模态融合与自回归解码输出。与按注意力分数剪枝词元个数的早退方法不同，该方法削减的是多模态词元经历的层数而非词元个数，从而保留完整模态信息并减少冗余浅层计算量。在Pubchem324k语料分子描述任务评测设置下，DI\-12方法的BLEU\-4为27\.7，高于基线方法的26\.4。该结论的适用边界受限于插入过深后性能单调下降且最优层随模态与词元数变化需重训扫描，而原文在A100硬件上报告了训练成本与推理开销的具体下降数据。

🔗 **开源资源**

- 代码相关资源：<https://github.com/MoulikChoraria/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/xiaoachen98/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 7. [越南语识别缺的不是模型，而是可复用的清洗管线：用七步聚合做出 500 小时带词级时间戳数据](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-345-3f63731376/)

> 英文题目：*[Vietnamese Automatic Speech Recognition: A Revisit](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-345-3f63731376/)*

标签：#数据集 #数据集构建 #语音识别 #强制对齐

评分：**8.0/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#数据集构建

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.345/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.345.pdf)

👥 **作者与机构**

- Thi Vu：机构信息未能从会议 PDF 纯文本可靠映射
- Linh The Nguyen：机构信息未能从会议 PDF 纯文本可靠映射
- Dat Quoc Nguyen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

越南语ASR输入为采样率8\-48kHz混杂的多源长短音频，输出要求可直接微调的正字法文本与词级时间戳，难点在于开源转写粗糙且缺标点大小写，而对齐器又要求口语化标准词形。流水线先用PhoWhisper\-large与ChunkFormer\-large\-vie双模型互验为无转写音频生成转写并仅保留互算WER低于阈值样本，对有转写音频则用PhoWhisper\-large复验过滤，其输出的干净文本进入格式恢复阶段。接着用新闻微调的BARTpho恢复标点大小写并做归一化词一致性校验，再用文本规范化模型把数字展开为口语词形以满足对齐词表要求。最后用WhisperX加越南语wav2vec2做音节级强制对齐并按20ms量化，再把多词数字回压为数字并合并起止时间得到终版语料。与直接合并原始语料或推理时后加标点对齐不同，该链把质量控制、格式恢复与时间戳内建于语料，避免后处理割裂。在PhoASR测试集下，PhoASR\-whisper\-small\-469h的O\-WER为12\.46%，低于PhoWhisper\-small的33\.90%。结论适用边界限于越南语三方言混合评测与Whisper系微调，中央口音与VLSP2020子集最难，跨语言外推尚未验证。训练成本披露为4卡NVIDIA A100 40GB硬件上微调40轮，推理开销受限于大模型对齐的计算量而未充分量化。

🔗 **开源资源**

- 数据相关资源：<https://vlsp.org.vn/vlsp2020/eval/asr> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/binhvq/news-corpus> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/m3hrdadfi/soxan> — 链接可访问（HTTP 200）
- 第三方资源：<https://sourceforge.net/projects/sox/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 8. [只转写不倾听：词义中性与冲突条件下音频大模型的情感依据](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-274-b53aef0010/)

> 英文题目：*[Do Audio LLMs Really LISTEN, or Just Transcribe? Measuring Lexical vs\. Acoustic Emotion Cues Reliance](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-274-b53aef0010/)*

标签：#基准测试 #基准设计 #音频大模型 #语音 #语音情感识别

评分：**7.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

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

语音情感理解需以连续语音为输入并输出离散情感标签，难点在于词汇语义常与韵律等声学线索纠缠，使模型可借转录捷径回避真正聆听。LISTEN首先按词汇与声学一致性划分中性文本、情感一致、情感冲突与副语言四种条件以界定真值来源，其输出的条件定义直接决定后续样本归属。接着其将多源情感语料映射到各条件并统一情感标签空间，使上一步的抽象条件落为可评测样本集。然后其对每样本施加文本单模态、音频单模态与图文双模态的统一零样本多选题提示，通过跨模态行为差分离词汇依赖与声学敏感性，这与以往混杂显性情感词的音频评测不同而迫使转录捷径显形。在Neutral\-Text条件评测下，Gemini 2\.5 Pro音频单模态的准确率为34\.9%，低于文本单模态的96\.6%。该结论适用边界受限于英语短句孤立评测与六个大音频语言模型范围，尚未验证长对话与跨语言韵律外推下的失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/DeliJingyiC/LISTEN> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 9. [只转写前景词不够：SCENEBench 检验背景声、响度运动、混排转写与喉头短声](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-335-71921c96eb/)

> 英文题目：*[SCENEBench: An Audio Understanding Benchmark Grounded in Assistive and Industrial Use Cases](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-335-71921c96eb/)*

标签：#工业应用 #基准测试 #基准设计 #多语言 #音频理解

评分：**7.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频理解 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.335/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.335.pdf)

👥 **作者与机构**

- Laya Iyer：机构信息未能从会议 PDF 纯文本可靠映射
- Angelina Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Sanmi Koyejo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文针对助听与工业监测中含前景语音与环境声混合录音的音频理解，输入为叠加语音与背景声的短片段，输出为背景事件描述、接近远离判断、多语转写与非言语发声分类，难点在于前景语音压制注意导致背景与运动线索被忽略。方法先将ESC\-50环境声叠加至DailyTalk双音色话语上合成背景理解样本，并以自由描述、定向追问与四选多选分层提问分离自发提及与定向检索。接着对同一环境声施加渐强、渐弱与正弦包络构造运动定位探针，以通用与定向两级自由描述检验方向感知，输出的失败分布进入跨任务误差归因。最后经翻译加回译过滤与多语语音合成构建代码混合转写集，并聚合真实非言语库形成五类发声分类集，统一并行记录模型延迟与人工录音对照以检验生态效度。与既有单事件干净基准相比，该设计以显式失败模式为中心区分省略、误判与噪声压制，并将延迟作为并行维度揭示能力与响应权衡。在背景声理解任务下，Flamingo的准确率为70\.0，高于Desta的0\.0。结论适用边界受限于等响度合成与短片段条件，振荡运动与自然代码切换等外推尚未验证。推理开销方面本地模型延迟已被披露，Flamingo中位延迟为2\.26s而Desta中位延迟为15\.61s。

🔗 **开源资源**

- 代码相关资源：<https://github.com/layaiyer1/SCENEbench> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/SALT-NLP/CAVA> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 10. [为俄语补上多模态考试：MERA Multi 如何统一出题、判分与防泄漏](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-94-667b23ffaf/)

> 英文题目：*[Multimodal Evaluation of Russian\-language Architectures](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-94-667b23ffaf/)*

标签：#基准测试 #数据集 #基准设计 #音频问答

评分：**7.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#基准设计

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

该基准面向俄语多模态理解，输入为俄语指令叠加图像或音频或视频，输出为多选题或简短自由生成，难点在于同时处理西里尔形态变化、日常与专业知识及文化隐喻与常识违背。方法链先按感知推理知识三类技能体系组织十八个新任务以覆盖通用与模态专用架构，其任务划分输出进入多提示词生成评测以分散表述偏差。接着用精确匹配与语义裁判双通道判定正确性，其中裁判以问题加参考加预测二分类输出零一分以兼顾格式与语义，最后按任务内平均与模态等权聚合得到总分。相对英文基准直接翻译，本工作从头采集私有俄语数据并训练专用裁判模型，实际意义在于保留民俗与苏联媒体指涉并支撑可复现排行榜与溯源评估。在裁判模型评测下，RuModernBERT\-base的F1分数为0\.964 ± 0\.002，高于RuModernBERT\-small的0\.944 ± 0\.003。该结论适用边界仅限俄语理解型问答与现有提示词分布，对生成质量偏见安全及跨语言迁移尚未验证，且硬件软件栈差异可能导致分数波动而受限。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://mera.a-ai.ru/en/multi/leaderboard> — 链接可访问（HTTP 200）
- 代码相关资源：<https://mera.a-ai.ru/en/multi> — 链接可访问（HTTP 200）
- 模型相关资源：<https://hf.co/deepvk/RuModernBERT-base> → <https://huggingface.co/deepvk/RuModernBERT-base> — 暂时无法访问
- 复现相关资源：<https://app.elementary.center/> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 11. [语音把选择题读出来之后，模型为何更怕换语言和调选项顺序](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-80-adf29f971d/)

> 英文题目：*[Bias in the Ear of the Listener: Assessing Sensitivity in Audio Language Models Across Linguistic, Demographic, and Positional Variations](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-80-adf29f971d/)*

标签：#基准设计 #公平性 #鲁棒性 #多语言 #音频问答

评分：**7.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.80/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.80.pdf)

👥 **作者与机构**

- Sheng\-Lun Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Yu\-Ling Liao：机构信息未能从会议 PDF 纯文本可靠映射
- Yen\-Hua Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Hen\-Hsen Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Hsin\-Hsi Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是语音多项选择问答：输入为问题语音加四个选项语音拼接后的长音频，要求模型输出选项字母，难点在于相同语义在语言、口音、说话人性别与选项顺序变化下应保持正确且稳定。方法链分为三步：先用GPT OSS 120B按八条规则将数学符号、化学式、罗马数字与填空占位符改写为可朗读文本，再用Gemini 2\.5 Flash Preview TTS按语言与口音提示合成受控语音并经双语音识别与人工抽检质控，最后将语音片段按原始或逆序拼接送入多模态大语言模型并用准确率、熵、跨条件熵漂移与一致性系数联合评估。与已有文本偏置研究的关键机制差异在于引入语音特有的人口与声学变异，并证明结构敏感在跨模态下被放大。原文在Global MMLU Lite语音化评测中报告Gemini 2\.5 Flash在中文东北口音女性条件下原始与逆序准确率差距达6\.75个百分点，且音频下语言与顺序扰动的熵漂移系统性高于文本。结论边界在于合成语音为主、口音类别离散化、模型覆盖仅九个且依赖外部API，真实语速与音量扰动及克隆音色仅做小规模验证。TTS与推理API总花费低于550美元，未披露训练成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ntunlplab/BiasInEar> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/ntunlplab/BiasInEar> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 12. [多人对话先找对说话人再判情绪：同步选脸、文本蒸馏与分层融合如何补齐少数情绪](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-212-8f19f964ef/)

> 英文题目：*[Emotion Recognition in Multi\-Speaker Conversations through Speaker Identification, Knowledge Distillation, and Hierarchical Fusion](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-212-8f19f964ef/)*

标签：#知识蒸馏 #多模态学习 #语音情感识别 #说话人识别

评分：**7.5/10** | 创新 1.2/2 | 技术严谨 1.3/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#知识蒸馏

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.212/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.212.pdf)

👥 **作者与机构**

- Li Xiao：机构信息未能从会议 PDF 纯文本可靠映射
- Kotaro Funakoshi：机构信息未能从会议 PDF 纯文本可靠映射
- Manabu Okumura：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多说话人对话情感识别需对每条话语综合文本、音频与视频判别情绪类别，难点在于多人同框时视觉归属易错、文本显著强于音频与视觉、少数情绪样本极度稀缺。先以各人脸轨短视频片段与对应音频段为输入，用LipSyncNet对比音画同步距离并取最高分者为说话人，输出去噪后的真说话人视觉输入以替代混杂多脸。再以文本上下文特征与承接上步筛选后的视觉特征及音频特征为输入，由基于图注意力网络的RoBERTa文本教师向音频图卷积网络学生与视觉学生做蒸馏，输出补齐后的弱模态表征并直接送入融合层。最后承接蒸馏增强后的三模态表征，经质量门控与交叉注意力完成分层融合，并以多项式聚焦加标签平滑加有监督对比学习的复合目标抑制长尾偏置，输出最终情绪标签。与已有图与融合基线相比，差异在于同步筛选、跨模态蒸馏与类别不平衡被纳入同一训练目标而非割裂预处理。在MELD官方划分基准下，本方法的加权F1分数为67\.8，高于TelME的67\.3。结论的适用边界限于英语电视与实验室双人对话，尚未验证重叠语音、遮挡与跨语言跨文化外推。训练成本为除数据预处理外在NVIDIA RTX 3090硬件上需30至50分钟。

🔗 **开源资源**

- 代码相关资源：<https://github.com/llllxx1628/multimodalERC> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 13. [按频带分开压缩：BSCodec 用并行子带处理兼顾语音与音乐音效](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-245-fa133268a7/)

> 英文题目：*[BSCodec: A Band\-Split Neural Codec for High\-Quality Universal Audio Reconstruction](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-245-fa133268a7/)*

标签：#向量量化 #环境声 #音乐 #语音 #音频编码

评分：**7.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

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

输入为24 kHz通用音频波形，输出为低码率离散token与重建波形，难点在于语音能量集中于基频谐波窄带80\-400 Hz而音乐与音效需全频段保真特别是定义音色纹理的高频，单一全频带残差向量量化对多域混合源容量分配均匀且表示纠缠。首先经短时傅里叶变换加二值掩码切分与逆变换得到各带限波形，提供物理可解释的解耦输入。接着各带限波形并行送入独立SEANet编码器下采样至75 Hz、512维隐特征以特化各频段谱特性，该隐特征直接进入下一步量化。然后每带采用单层大码本简化向量量化离散化，再经对称解码器重建各带波形并相加得到最终输出，实现按频带分配容量。与逐层量化全频带残差的方法不同，该设计按频率轴划分码本空间，以带间独立替代层间强相关的残差结构，使高频码本专注音色纹理而低频保留说话人特性。在多域重建评测下，BSCodec三带模型的SPK\_SIM为0\.852，高于DAC基线的0\.751。该结论适用边界受限于语音窄带谐波建模，5带过细切分使WB\-PESQ跌至1\.961且生成式下游验证尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/whr-a/espnet/tree/bscodec> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 14. [单项都会、组合就错：音频推理基准如何卡住多模态大模型](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-42-1d94f1effa/)

> 英文题目：*[A Benchmark for Audio Reasoning Capabilities of Multimodal Large Language Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-42-1d94f1effa/)*

标签：#基准测试 #数据集 #基准设计 #音频问答

评分：**7.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

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

本文针对多模态大语言模型音频评测只测孤立任务、无法验证跨类别组合推理的问题，定义音频推理任务要求模型从单条混合音频中直接回答嵌入其中的语音问题并输出是或否，难点在于问题语音与证据话语或声音事件混叠且必须联合多种听觉技能才能判定。构建链分三步：先按双规则从25个候选任务筛选出9类可判定任务，再为每类编写带槽位的问题模板与确定性答案函数，然后用语音克隆合成问题语音与附加话语并从音效库选取声音事件按模板拼接或叠加混音。模板输出的题干取值与答案真值直接进入合成与混音环节，使目标答案可由音频内容唯一确定并生成9000样本全集。与AudioBench等题干文本与音频分离的评测相比，该设计把题干嵌入音频并强制联合推理，从构造上封堵只靠单模块转写加文本问答拿分的捷径。在ART基准的Yes/No评测设置下，Whisper Large v3加Qwen3\-32B级联系统的绝对准确率为56\.21%，高于Audio Flamingo 3的54\.73%。该结论适用边界受限于干净合成英语问题语音与有限音效集合下的短音频推理，尚未验证噪声远场自发语音或多轮交互下的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://keithito.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://openai.com/index/hello-gpt-4o> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 15. [先分开表征再对齐推理：ConLLM 如何处理模态割裂与浅层融合](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-102-db05d9d686/)

> 英文题目：*[Revealing the Truth with ConLLM for Detecting Multi\-Modal Deepfakes](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-102-db05d9d686/)*

标签：#对比学习 #多模态学习 #大语言模型 #音视频 #音频深度伪造检测

评分：**7.4/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

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

该任务输入为单段音频、单段视频或音视频对，输出为真伪二分类标签，难点在于模态割裂导致单模态结论冲突，且浅层融合难以捕捉唇动一致但语义矛盾的细粒度伪造。所提ConLLM分三步推理：先用模态专用预训练模型抽取语音、视觉与音视频嵌入，为跨模态比较提供高质量表征。接着以对比学习拉近真实跨模态对、推远伪造对完成对齐，其输出的对齐嵌入直接进入类GPT变换器。最后变换器以多头自注意力精炼语义依赖并拼接分类，由分类头输出最终真伪判定。与已有浅层拼接或单模态检测相比，该链条将表征抽取与跨模态语义推理显式分离，对齐负责消除碎片化而注意力精炼负责捕捉不一致。在ASVSpoof 2019 LA评测设置下，ConLLM的等错误率为0\.21%，低于MiO的0\.41%。该结论受限于依赖训练数据质量与多样性，在未见生成器与真实野外分布上尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://www.asvspoof.org/index2019.html> — 链接可访问（HTTP 200）
- 数据相关资源：<https://zenodo.org/records/7603208> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/OpenTAI/wild-deepfake> → <https://github.com/xingjunm/wild-deepfake> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/DASH-Lab/FakeAVCeleb> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 16. [认不出带口音的英语：码切换语音识别先补口音英语再谈排序](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-242-0de3aaa5e9/)

> 英文题目：*[Improving Language Identification for Code\-Switched Speech: The Pivotal Role of Accented English](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-242-0de3aaa5e9/)*

标签：#评测协议 #LoRA #多语言 #语音 #语言识别

评分：**7.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语言识别 | 主方法：#LoRA

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.242/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.242.pdf)

👥 **作者与机构**

- Adyasha Patra：机构信息未能从会议 PDF 纯文本可靠映射
- Dhiraj Kumar Sah：机构信息未能从会议 PDF 纯文本可靠映射
- Preethi Jyothi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语句级码切换语言识别需从单段含两种语言的语音中输出语言集合及其相对排序，难点在于带矩阵语言口音的嵌入语英语常被基座模型压制为矩阵语言变体而排位过低。先冻结大规模多语言模型MMS\-LID\-126的基座参数以保留单语判别能力，输入为预训练判别空间，输出为稳定的冻结基座。再将少量矩阵语言口音英语输入该冻结基座做低秩适配学习口音化英语表征，前一步的冻结基座为本步提供稳定的适配起点，输出为抬升英语排名的适配参数。最后将适配后的概率分布送入排序评估环节，以LangRank按相对排名赋分检验码切换检出与单语保持的权衡，该评估输出又回证口音适配是否抬升英语而不重写矩阵语言首位决策。与直接在码切换语句上微调学习混合语句联合标签分布不同，该链条仅以口音适配为桥梁避免英语在单语矩阵语言上过拟合误报，实际意义在于仅需少量单语口音数据即可兼顾两类输入。在印地语\-英语码切换评测下，MMS\-LoRA方法的Exact Match \(EM\)为915，高于基线MMS方法的Exact Match \(EM\)为509。该结论适用边界限于英语为嵌入语且微调时已知矩阵语言的四组语言对，对非英语组合与未知矩阵语言尚未验证。训练成本方面，在单张RTX A5000硬件上以80条样本适配约需4分钟，部署时仅增加低秩旁路因而推理开销较低。

🔗 **开源资源**

- 第三方资源：<https://accent.gmu.edu/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 17. [印地语 ASR 纠错为何小模型微调胜过大模型提示：字节与语义分工的证据](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-45-b7f4e64b99/)

> 英文题目：*[Post\-ASR Correction in Hindi: Comparing Language Models and Large Language Models in Low\-Resource Scenarios](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-45-b7f4e64b99/)*

标签：#SFT #大语言模型 #模型比较 #低资源 #语音识别

评分：**7.0/10** | 创新 1.1/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音识别 | 主方法：#SFT

会议来源：[官方记录](https://aclanthology.org/2026.eacl-short.45/) · [官方 PDF](https://aclanthology.org/2026.eacl-short.45.pdf)

👥 **作者与机构**

- Rishabh Kumar：机构信息未能从会议 PDF 纯文本可靠映射
- Amrith Krishna：机构信息未能从会议 PDF 纯文本可靠映射
- Ganesh Ramakrishnan：机构信息未能从会议 PDF 纯文本可靠映射
- Preethi Jyothi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理低资源印地语后纠错，输入为单条1\-best ASR假设文本，输出为最小编辑后的正确转写，难点在于标注语音稀缺、形态丰富、码混转写与域漂移导致音译、切分与复合词拆分错误频发。方法链分三步：先用IndicWav2vec与IndicConformer解码域内IndicVoice与域外Kathbath、Shrutilipi语音，产生假设\-参考平行对以暴露典型误差分布。接着以上述平行对监督微调字节级ByT5与多语子词mT5，使其学习特定识别器误差到参考的局部映射。同时以零样本至5样本上下文学习调用LLaMA系列与GPT\-4o\-mini做改写，示例经随机采样或句子嵌入相似度检索选取并送入提示。关键机制差异是小模型拟合特定误差分布的保守局部编辑，而大模型依赖通用语言知识易过度改写与域漂移，因而在低资源纠错中轻量微调更具实际意义。在Lahaja测试集下，mT5\-base将IndicConformer假设的WER从18\.02%降至16\.17%。其适用边界受限于所测印地语及Marathi、Telugu初步验证，高域外占比下仍出现回退且多假设建模尚未验证。推理开销方面原文报告后纠错延迟以mT5\-small最低为0\.97秒，显著快于LLaMA的10\.17秒，训练成本仍未充分披露部署权衡。

🔗 **开源资源**

- 代码相关资源：<https://github.com/cyfer0618/Post-ASR-Correction-in-Hindi> — 链接可访问（HTTP 200）
- 模型相关资源：<https://github.com/cyfer0618/Post-ASR-Correction-in-Hindi> — 链接可访问（HTTP 200）
- 第三方资源：<https://pytorch.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 18. [转录之外再听一遍：用文本蓝图让语言模型评语音](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-151-c6d61a02b7/)

> 英文题目：*[Hearing Between the Lines: Unlocking the Reasoning Power of LLMs for Speech Evaluation](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-151-c6d61a02b7/)*

标签：#评测协议 #大语言模型 #语音 #语音质量评估

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音质量评估 | 主方法：#评测协议

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.151/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.151.pdf)

👥 **作者与机构**

- Arjun Chandra：机构信息未能从会议 PDF 纯文本可靠映射
- Kevin Miller：机构信息未能从会议 PDF 纯文本可靠映射
- Venkatesh Ravichandran：机构信息未能从会议 PDF 纯文本可靠映射
- Constantinos Papayiannis：机构信息未能从会议 PDF 纯文本可靠映射
- Venkatesh Saligrama：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音到语音评测以用户语音指令与两个候选语音回答为输入，输出内容、语音质量与副语言学维度判断及总体偏好，难点在于转录丢失语调情感与音质而直接音频大模型评测不透明且昂贵。TRACE先以人类思维链协议分别标注内容与语音质量与副语言学再给出总体标签，为评测提供可诊断真值。接着其用转录文本与客观质量指标及韵律情感等低成本信号为每个回答构建结构化文本蓝图，将声学证据转为可审计文本。然后文本大模型仅基于蓝图输出维度级判断，再经确定性树策略融合为总体标签，蓝图输出直接进入推理与融合。与已有方法相比，其关键差异是不听原始音频而在文本化声学证据上推理，并以外显可接受性门限替代强制选优，避免捏造优劣。在SPEAK BENCH基准下，TRACE的总体准确率为68\.6，高于LLM Judge的62\.7。该结论的适用边界限于英语指令跟随与感知表达场景，跨语言及重口音强噪声条件尚未验证。其文本蓝图加一次文本推理的推理开销约为同设置音频评测的三分之一，全程免训练。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 19. [同域接近满分、跨域跌回随机：XMAD\-Bench 如何逼出真伪检测的泛化缺口](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-162-2f7bf61362/)

> 英文题目：*[XMAD\-Bench: Cross\-Domain Multilingual Audio Deepfake Benchmark](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-162-2f7bf61362/)*

标签：#基准测试 #基准设计 #多语言 #音频深度伪造检测

评分：**6.9/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频深度伪造检测 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.162/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.162.pdf)

👥 **作者与机构**

- Ioan\-Paul Ciobanu：机构信息未能从会议 PDF 纯文本可靠映射
- Andrei\-Iulian Hîji：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolae Catalin Ristea：机构信息未能从会议 PDF 纯文本可靠映射
- Paul Irofti：机构信息未能从会议 PDF 纯文本可靠映射
- Cristian Rusu：机构信息未能从会议 PDF 纯文本可靠映射
- Radu Tudor Ionescu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频深度伪造检测（Audio Deepfake Detection）需从波形判断真人语音与合成语音，难点在于未知说话人、未知录制来源与快速迭代的生成器带来严重域偏移。作者从大规模众包语音语料采集域内真实语音并转写文本，从有声书、议会录音、普通话语音语料与大规模阿拉伯语视频语音语料采集跨域真实语音，再调用文本到语音（Text\-to\-Speech，TTS）生成内容一致的初版合成语音，接着以原说话人语音为参考做语音转换（Voice Conversion，VC）实现音色克隆，对可直接做零样本克隆的模型则直接以文本加参考语音生成，最后按说话人隔离与生成器隔离组织训练集、域内测试集与跨域测试集。相比仅覆盖单语或只提供伪造样本的已有数据集，该基准同时保持真伪语言平衡并强制真实来源与伪造方法跨域互斥，更贴近野外条件。域内评测中残差网络、wav2vec 2\.0等多模型在七种语言上达到100%量级准确率，而跨域下阿拉伯语wav2vec 2\.0降至75\.03%准确率与25\.81%等错误率，俄语ResNet\-18降至47\.67%准确率与60\.38%等错误率，揭示严重泛化落差。该结论适用于所选开源生成器与朗读式语料，对强噪声、压缩失真、部分篡改与未见商用闭源克隆系统的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/pytorch/vision> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/ristea/septr> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/idiap/coqui-ai-TTS> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 20. [发音纠错不能只给分数：让音频语言模型说出哪里错、怎么练](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-190-923151c2cd/)

> 英文题目：*[Unlocking Large Audio\-Language Models for Interactive Language Learning](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-190-923151c2cd/)*

标签：#教育 #数据集 #指令微调 #音频大模型 #语音交互

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音交互 | 主方法：#指令微调

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.190/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.190.pdf)

👥 **作者与机构**

- Hongfu Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhouying Cui：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangming Gu：机构信息未能从会议 PDF 纯文本可靠映射
- Ye Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

面向第二语言朗读发音训练，系统输入为学习者语音与标准文本序列$W\_\{1:N\}$，输出为词级误读定位及每词的错误解释与可操作建议，难点在于强鲁棒自动语音识别会纠正口音错误并丢弃声学细节，而通用音频语言模型又缺乏教学性反馈能力。该链条先以GPT\-4o基于L2\-Arctic人工音素标注生成解释与建议初稿，再经人工核验与不合格再生得到L2\-Arctic\-plus基准真值，其输出直接作为后续训练与评测的目标响应。接着第一阶段在200k条Common Voice转写问答对上只训练投影器做声学特征对齐，第二阶段在2\.7k条发音训练问答对上以LoRA联合微调投影器与大语言模型主干，前一阶段的对齐表示直接作为后一阶段任务指令微调的输入。与先转写后推理的级联式框架不同，端到端模型在隐表示中保留替代、删除、插入等音素级证据，避免了转写器语言偏置对错误的过度纠正，因而更适合误读检测与建议生成。在L2\-Arctic\-plus评测下，Whisper Large加Llama\-3\.1\-8B指令微调模型的F1为62\.8，高于GPT\-4o\-Audio的46\.3。该结论适用边界目前受限于受控朗读场景，尚未验证自由对话与韵律重音等超音段能力，且反馈仅为文本模态。训练成本方面原文在2×NVIDIA RTX A40硬件上报告声学对齐约12–14 GPU小时、任务指令微调约4–6 GPU小时，全集评测约需4–6 GPU小时。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/openai/whisper-small> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/openai/whisper-medium> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/openai/whisper-large> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/facebook/wav2vec2-base-960h> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/facebook/wav2vec2-large-960h-lv60-self> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.1> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/Qwen/Qwen-Audio-Chat> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/Qwen/Qwen2-Audio-7B-Instruct> — 暂时无法访问
- 第三方资源：<https://github.com/microsoft/Pengi> — 暂时无法访问
- 第三方资源：<https://github.com/0nutation/SpeechGPT/tree/main/speechgpt> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 21. [拼起来的音频更好判：AudioJudge 何时能替人听、何时仍会听错](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-168-1217e8baad/)

> 英文题目：*[AudioJudge: Understanding What Works in Large Audio Model Based Speech Evaluation](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-168-1217e8baad/)*

标签：#模型集成 #音频大模型 #语音 #语音质量评估

评分：**6.7/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

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

本文处理以语音对为输入、以成对偏好或属性胜负判定为输出的自动评测，难点在于发音、语速、说话人、自然度等细粒度线索主观性强，基础提示下大型音频模型近乎随机猜测且音频文本交替与文本先验干扰听觉比较。方法先建立AudioJudge成对裁判框架并限定结构化JSON输出，为后续可解析比较提供统一接口。接着引入全拼接上下文学习把示例与待测指令及音频对合并为连续听觉流，其输出直接作为偏好预测的上下文输入以减少模态切换。最后针对多方面指令把评测解耦为词汇裁判、超语段裁判与语音质量裁判并多数投票集成，得到系统级排序结果。与单提示词裁判的关键差异在于显式拼接连续音频并解耦内容与表达维度，其实质意义是以低于1%标注量的上下文复用替代专用模型训练，更具跨域复用价值。在ThaiMOS语音质量评测任务下，AudioJudge的性能为64\.0，高于UTMOS的53\.5。该结论适用边界受限于系统级排序，在样例级语速与说话人判别及噪声鲁棒性上仍存在显著位置与冗长偏置等失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/tatsu-lab/alpaca_eval> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 22. [文本有感情，声音未必跟：跨模态效价相关高而激活度低](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-136-94b00c07ca/)

> 英文题目：*[The Correlation Between Emotion in Text and Speech Segments is Limited: A Cross\-Modal Study](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-136-94b00c07ca/)*

标签：#统计分析 #大语言模型 #模型比较 #语音 #语音情感识别

评分：**6.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音情感识别 | 主方法：#统计分析

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.136/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.136.pdf)

👥 **作者与机构**

- David Lindevelt：机构信息未能从会议 PDF 纯文本可靠映射
- Suzan Verberne：机构信息未能从会议 PDF 纯文本可靠映射
- Joost Broekens：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务是从转录文本预测其对应语音片段应有的情感以支撑仅见文本的表现力语音合成，输入为单句及其前后文而输出为效价、唤醒度与支配度三维连续值，难点是文本情境线索与人声韵律表达的情感并不总一致。方法先以8个解码器大语言模型对文本做维度情感打分并经5个种子取均值，再以在播客数据上训练的wav2vec2与WavLM两类纯音频模型对波形打分以作为语音侧代理真值，接着按播客、有声书与TED演讲切分样本计算文本与语音预测的Pearson相关，最后加入前后文重测以检验叙述者式上下文能否弥合跨模态差异。与只做单模态情感识别不同，该工作把跨模态相关本身作为评测对象，因而可直接揭示仅靠文本驱动合成的控制上限。在Libriheavy语料基准下，llama3\.1:70b文本预测与Wav2Vec2语音预测的Valence Pearson相关为\.793，高于gemma:7b的\.619。该结论适用边界受限于英语叙述类短片段与所用音频代理模型，尚未验证对话、歌唱或极端情感等外推场景。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/audeering/> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/3loi/> — 暂时无法访问
- 模型相关资源：<https://ollama.com/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://www.ted.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 23. [把共有的病和各自的噪声分开：DIVINE 用两级解耦做口面神经疾病诊断与严重度估计](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-248-f3db9e13eb/)

> 英文题目：*[DIVINE : Coordinating Multimodal Disentangled Representations for Oro\-Facial Neurological Disorder Assessment](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-248-f3db9e13eb/)*

标签：#多模态学习 #多任务学习 #变分自编码器 #音视频 #病理语音评估

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#病理语音评估 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.248/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.248.pdf)

👥 **作者与机构**

- Mohd Mujtaba Akhtar：机构信息未能从会议 PDF 纯文本可靠映射
- Girish：机构信息未能从会议 PDF 纯文本可靠映射
- Muskaan Singh：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理同步语音与面部视频输入，联合输出诊断类别健康对照/ALS/脑卒中与严重程度预测，需克服病理运动细微、双模态耦合与标注稀缺难题。方法链分为四步：冻结语音与视觉基础模型提取话语级表征后经一维卷积时序精炼，其次由窗口级变分自编码器压缩短时构音动态并经时间平均池化得到话语向量，再经话语级双分支变分自编码器分离共享神经运动因子与模态私有噪声，最后经稀疏门控融合与可学习症状令牌聚合后输出双头预测。与既往整体拼接不同，该设计显式约束跨模态对齐与门控稀疏以抑制单模态主导并支持缺失模态推理。在Toronto NeuroFace被试级5折交叉验证下，DeepSeek\-VL2与TRILLsson组合在双模态测试中达到准确率98\.26%与F1值97\.51%，高于同编码器简单拼接基线的94\.65%准确率。非言语纯视频条件下该组合达到92\.58%准确率。结论仅限于受控采集的英语口面任务与小样本域内评估，未验证跨站点、跨语言与跨设备泛化。原文未披露训练时长、推理延迟或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Helixometry/SIGNAL.git> → <https://github.com/Helixometry/SIGNAL> — 链接不可用（HTTP 404）
- 模型相关资源：<https://github.com/Helixometry/SIGNAL.git> → <https://github.com/Helixometry/SIGNAL> — 链接不可用（HTTP 404）
- 模型相关资源：<https://huggingface.co/microsoft/wavlm-base> — 暂时无法访问
- 模型相关资源：<https://github.com/deepseek-ai/DeepSeek-VL2> — 链接可访问（HTTP 200）
- 复现相关资源：<https://github.com/Helixometry/SIGNAL.git> → <https://github.com/Helixometry/SIGNAL> — 链接不可用（HTTP 404）
- 第三方资源：<https://github.com/TadasBaltrusaitis/OpenFace> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/1adrianb/face-alignment> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 24. [讲法本身成为攻击面：叙事语音如何绕过音频大模型的文本对齐](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-278-91aefba5dc/)

> 英文题目：*[Now You Hear Me: Audio Narrative Attacks Against Large Audio–Language Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-278-91aefba5dc/)*

标签：#评测协议 #音频大模型 #音频安全 #语音 #语音交互

评分：**6.4/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音交互 | 主方法：#评测协议

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.278/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.278.pdf)

👥 **作者与机构**

- Ye Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Haibo Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Yaoning Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Jun Zhuang：机构信息未能从会议 PDF 纯文本可靠映射
- Haohan Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

端到端大音频语言模型以原始语音波形为输入并解码为文本回答，保留的韵律情感与说话人意图超出纯文本对齐的覆盖范围，难点在于不改变恶意词义而通过意图感知诱发违禁输出。方法链分三步：先构造DeepInception式叙事文本越狱提示以承载违禁指令语义，再将其与权威要求与亲和说服等心理风格模板一并送入指令跟随语音合成模型渲染为对抗音频，最后以黑盒音频输入目标大音频语言模型并解码评测。前一步的文本语义输出直接作为后一步合成器的语言内容，合成波形的副语言线索进入目标模型编码器，共同偏置其内部解码过程而非依赖梯度噪声。相对把音频当文本转写或做低层信号扰动的已有路线，该方法不直接篡改声学词元，只将传递自信共情与叙事节奏作为显式控制维，形成更可解释可迁移的对抗影响路径。在JailbreakBench基准下，本方法的攻击成功率指标为96\.33%，高于AdvWave基线的87\.00%。消融显示中性语音转写仅带来有限提升而风格化调制带来更大增益，证实增益来自传递风格而非单纯模态转换。该结论适用边界限于英语叙事语音与三款端到端模型的评测，在小参数Qwen2\.5\-Omni上易因提前截断与复读进入失败条件而不构成有效越狱。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://openai.com/index/hello-gpt-4o/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 25. [只拉伸音频位置：部分 YaRN 与虚拟长音频训练扩展长语音理解](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-286-9f2982a622/)

> 英文题目：*[Extending Audio Context for Long\-Form Understanding in Large Audio\-Language Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-286-9f2982a622/)*

标签：#数据增强 #音频大模型 #长音频处理 #音频问答

评分：**6.4/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.9/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#数据增强

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.286/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.286.pdf)

👥 **作者与机构**

- Yuatyong Chaichana：机构信息未能从会议 PDF 纯文本可靠映射
- Pittawat Taveekitworachai：机构信息未能从会议 PDF 纯文本可靠映射
- Warit Sirichotedumrong：机构信息未能从会议 PDF 纯文本可靠映射
- Potsawee Manakul：机构信息未能从会议 PDF 纯文本可靠映射
- Kunat Pipatanakul：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究处理大音频语言模型长语音理解任务，输入为长达数分钟的连续语音音频与文本问题，输出为四选一答案，难点在于Whisper编码器按30秒切块后基于RoPE的大模型骨干难以向超长音频位置外推。方法第一步提出部分YaRN，仅重映射音频词元位置并保留文本位置不变，采用两组频率划分与注意力温度缩放以实现免训练扩展。第二步以整体YaRN与整体位置插值为对照，将扩展同时作用于全部上下文，用于检验是否需要保持文本位置以维持语言能力。第三步将部分扩展反转为训练期位置增强，提出虚拟长形音频训练，对每样本采样虚拟源长度并压缩或拉伸至真实长度以暴露多样长度，再用低秩适配微调并可叠加推理期部分插值。与整体扩展同时扰动文本位置不同，模态解耦只动音频位置因而更好地保留基座文本能力，而虚拟长度采样则让短音频训练见过长位置模式。在YODAS2\-MCQA评测设置下，Virtual Longform的准确率为75\.11%，高于Vanilla Fine\-tuning的32\.76%。结论适用边界在于验证集中于统一输入空间架构的问答式理解，对开放生成质量与文本能力保持等外推尚未验证，长音频合成噪声与大扩展比调参稳定性仍受限。微调与推理硬件为单块Nvidia H100并配合Flash\-Attention2与梯度检查点，推理开销仅为小规模固定预计算而不改变逐词元生成延迟。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 26. [只用英文文本学线性映射：M2M 如何把多语言文本送进冻结的多模态空间](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-143-bd525afd17/)

> 英文题目：*[Multilingual\-To\-Multimodal \(M2M\): Unlocking New Languages with Monolingual Text](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-143-bd525afd17/)*

标签：#数据集 #多模态学习 #跨语言 #零样本 #音频检索

评分：**6.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频检索 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.143/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.143.pdf)

👥 **作者与机构**

- Piyush Singh Pasi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态模型需以英语外文本为查询完成图像音频排序与图像生成，但多语言多模态平行数据稀缺而英文图文音频资源主导导致非英语性能骤降。该方法首先冻结英文多模态文本编码器与多语言文本编码器，仅以英语句子分别抽取两者句向量形成配对锚点。接着仅训练由少量线性层构成的投影网络，将多语言向量映射到多模态空间并以对齐与结构损失优化归一化表示。推理时将待查非英语文本经多语言编码器与投影映射后直接替代原英文向量，用于余弦检索或作为生成模型的条件输入。与依赖机器翻译或重训多语言多模态模型相比，关键差异在于全程不引入任何多语言多模态监督，仅靠英语共享锚点做空间对齐并依赖多语言编码器自身跨语言泛化实现零样本迁移。在XTD文本到图像检索评测任务下，M2M对齐的Jina\-CLIP\-v1×M\-MPNET模型的Recall@10指标为89\.5，高于英文基线Jina\-CLIP\-v1的37\.4。该结论适用边界受限于句级全局表示的双编码器结构，对词元级对齐与联合编码器尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 27. [从国际音标到带符阿拉伯文：埃及儿童指向言语的可计算基准如何建成](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-102-5ffc895827/)

> 英文题目：*[Computational Benchmarks for Egyptian Arabic Child Directed Speech](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-102-5ffc895827/)*

标签：#数据集 #基准设计 #语言习得 #语音识别

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.102/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.102.pdf)

👥 **作者与机构**

- Salam Khalifa：机构信息未能从会议 PDF 纯文本可靠映射
- Abed Qaddoumi：机构信息未能从会议 PDF 纯文本可靠映射
- Nizar Habash：机构信息未能从会议 PDF 纯文本可靠映射
- Owen Rambow：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

埃及阿拉伯语儿童成人互动仅有IPA近音转写而无阿拉伯文字正字法，现有方言形态库与语音识别难以直接消费，且儿童误读、口语形态变异与附着词边界模糊带来对齐难题，输入为10名1\.6至3\.7岁亚历山大儿童各30分钟自然会话录音与CHILDES转写，输出为全元音符号CODA正字法、词元与核心词性构成的约26K词例标注语料。流程先清洗CHILDES标注并构建词频词典，再以GPT\-4o按20词批量生成带符CODA初稿，该初稿连同词频进入按去元音近似词根分批的人工修订环节，修订正字法并赋予Buckwalter词干词性与规范词元。修订后词典经由下划线切分与井号合并标记回映射到全部会话文本做语境校验与音频核查，使词典形式与连续语流保持一致。相对已有埃及资源仅覆盖成人规范形式，该语料保留儿童误读到成人形式的映射并统一到CODA，使方言形态与语音任务可直接在儿童语域上评测，凸显语域专用数据的实际意义。在不同音频长度切分的ASR基准下，30s切分的WER为89\.6%，低于1000s切分的91\.1%。结论适用边界受限于亚历山大地区埃及方言、约26K词例与词法浅层标注，尚未验证句法层与跨方言及纵向习得外推，嘈杂音频下转写仍易产生流畅但无关输出。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 28. [背景噪声如何劫持语音大模型：可复述的定向唤醒与退化转写路径](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-66-e9659d5842/)

> 英文题目：*[Attacker’s Noise Can Manipulate Your Audio\-based LLM in the Real World](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-66-e9659d5842/)*

标签：#数据增强 #音频大模型 #对抗鲁棒性 #语音唤醒

评分：**6.2/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音唤醒 | 主方法：#数据增强

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.66/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.66.pdf)

👥 **作者与机构**

- Vinu Sankar Sadasivan：机构信息未能从会议 PDF 纯文本可靠映射
- Soheil Feizi：机构信息未能从会议 PDF 纯文本可靠映射
- Rajiv Mathews：机构信息未能从会议 PDF 纯文本可靠映射
- Lun Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文研究音频大语言模型Audio\-based Large Language Model，简称ALLM在物理播放条件下的输入操纵问题，输入为麦克风采集的语音与背景声，输出为转写与指令执行文本，难点是空气信道的时间偏移、环境噪声与频谱失真会抹除数字域扰动。方法链分三步：先以困惑度损失对波形做有界梯度优化以植入指定唤醒与有害指令，再以音频编码器Audio Tower输出的欧氏距离为目标优化通用无目标噪声以破坏识别，最后在优化内环嵌入平移、加噪与频谱掩蔽以获得空气鲁棒性。与直接合成对抗语音且不建模传播损失的AdvWave等工作相比，该链条把目标从数字文件直送转向物理可投送性。数字域目标攻击在2秒与4秒、扰动界0\.01与0\.1、三种目标字符串下均为100%精确匹配；LibriSpeech数据集2000条4秒样本的无目标测试显示，扰动界0\.1的对抗噪声使词错率Word Error Rate，简称WER升至0\.55，困惑度Perplexity，简称PPL升至10\.26，显著高于同幅度随机噪声。现实闭环经HP Chromebook扬声器播放与iPhone 15录制，目标攻击在全增强下达100%，无目标攻击100次生成中对抗PPL远高于随机对照。结论仅适用于白盒Qwen2\-Audio模型与近距离单次播放录制，跨架构黑盒迁移与复杂混响远场尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 29. [从可解释声学特征到病例类比解释：CLINIC\-GENIE 如何兼顾构音障碍分级精度与临床可读性](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-275-2b3576c523/)

> 英文题目：*[Diagnosis of Dysarthria Severity and Explanation Generation Using XAI\-Enhanced CLINIC\-GENIE on Diadochokinetic Tasks](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-275-2b3576c523/)*

标签：#检索增强 #大语言模型 #可解释性 #语音 #病理语音评估

评分：**6.2/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#检索增强

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.275/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.275.pdf)

👥 **作者与机构**

- Jihyeon Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Insung Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Myoung\-Wan Koo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务以交替运动速率重复录音\`/pa/\`、\`/ta/\`、\`/ka/\`与\`/pa\-ta\-ka/\`为输入，输出健康、轻中度、重度三分类及面向患者的韩语解释，实际难点是重度卒中后样本极少且黑盒声学表征难以指导康复训练。方法第一步由CLINIC并行编码12维临床可解释声学特征与梅尔频谱图及Wav2Vec 2\.0表征并融合分类，同时计算各临床特征的Shapley归因值。第二步由GENIE以上一步的特征数值、归因权重、四任务多数投票 severity 及检索到的相似病例组装固定模板提示词，调用GPT\-4o按发音、构音、韵律与总体严重度链式生成报告。与仅用临床特征的基线相比，该框架以深度语音表征补足重度检出能力，并以归因权重与病例锚定约束解释内容而非自由发挥。在61名未见说话人共244条话语的测试集下，CLINIC的平衡准确率指标为0\.952，高于仅用CEAFs基线的0\.779。结论适用边界受限于卒中后受控重复音节任务，尚未验证自发连续语音、其他病因及患者直接可理解性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 30. [只听三段音频就写出做题步骤：Audio\-Induct 把示例变成可复用的文字指令](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-18-7f7b7136a1/)

> 英文题目：*[Task\-Level Instructions Induction for Audio Question Answering from Few Examples](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-18-7f7b7136a1/)*

标签：#提示学习 #音频大模型 #高效推理 #少样本 #音频问答

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#提示学习

会议来源：[官方记录](https://aclanthology.org/2026.eacl-short.18/) · [官方 PDF](https://aclanthology.org/2026.eacl-short.18.pdf)

👥 **作者与机构**

- Po\-Chun Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Hen\-Hsen Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Hsin\-Hsi Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频问答以音频与文本问题为输入并输出简短答案，难点在于音频需顺序聆听且声学与语言信息必须联合推理，而高质量音频思维链示例稀缺。所提Audio\-Induct先用元提示对三个带答案音频示例做多模态分析以识别推理模式，再将模式归纳为可复用的纯文本任务指令，最后在推理时将该指令直接作用于新音频问题而不再携带示范音频。相比每次推理携带音频示例的少样本提示与逐步思考提示，该机制把示例成本摊销到任务级，并将隐式模式推断替换为显式操作步骤遵循。在BBA基准下，Audio\-Induct在Gemini 2\.0 Flash上的准确率为91\.35%，高于零样本思维链基线的83\.85%。归纳出的指令可在不同模型间迁移复用，强模型归纳的指令质量更高且能提升弱模型表现。该结论适用边界在于任务边界清晰且模型具备较强指令遵循能力，弱模型自主归纳仍不稳定，跨任务与噪声音频外推尚未验证。推理开销方面该方法在推理时仅处理查询音频，附录按模型对比了每百样本输入与总成本，相对三样本提示实现大幅输入成本下降且无需训练成本。

🔗 **开源资源**

- 第三方资源：<https://www.videolan.org/vlc/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 31. [一个连接器管一整个语系：语系共享何时压住单语言训练](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-36-39d3ace92e/)

> 英文题目：*[Language Family Matters: Evaluating SpeechLLMs Across Linguistic Boundaries](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-36-39d3ace92e/)*

标签：#Adapter #大语言模型 #多语言 #语音识别

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.6/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#Adapter

会议来源：[官方记录](https://aclanthology.org/2026.eacl-short.36/) · [官方 PDF](https://aclanthology.org/2026.eacl-short.36.pdf)

👥 **作者与机构**

- Yuchen Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Ravi Shekhar：机构信息未能从会议 PDF 纯文本可靠映射
- Haralambos Mouratidis：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多语言语音识别需将可变时长语音输入映射为对应语种文本输出，口音形态差异与众包语料噪声及数据不均衡使每语独立建模易过拟合与重复冗长输出。方法分三步衔接：冻结Whisper\-large\-v3编码器抽取声学帧并下采样拼接，再经两层线性连接器映射到大语言模型嵌入空间，最后由冻结Gemma\-2\-2b或Salamandra\-2b自回归生成转写。与每语训练独立连接器不同，本文按语系合并多语训练单个语系连接器，使上一步对齐特征在同系内共享音系形态规律后进入解码，减少部署数量。在CommonVoice语料的Germanic语系测试任务下，语系连接器FAMCONN的词错误率WER为33\.55%，低于语种连接器LANGCONN的77\.71%。跨域评测显示从FLEURS训练转向CommonVoice测试时Slavic等一致语系仍获大幅下降，而通用全量合并连接器反而不如语系连接器，说明增益来自谱系相关性而非单纯数据量。该结论适用边界受限于语系内部一致性，在Afro\-Asiatic与Dravidian等异质语系上语系共享失效或反转，Telugu与Punjabi等语言仍偏好语种连接器。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 32. [不按秒数出向量：SEAM 用可变速率对齐弥合语音与文本的粒度差](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-112-0f11e60a3c/)

> 英文题目：*[SEAM: Bridging the Temporal\-Semantic Granularity Gap for LLM\-based Speech Recognition](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-112-0f11e60a3c/)*

标签：#注意力机制 #大语言模型 #鲁棒性 #语音 #语音识别

评分：**6.1/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#注意力机制

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.112/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.112.pdf)

👥 **作者与机构**

- Junseok Oh：机构信息未能从会议 PDF 纯文本可靠映射
- Ji\-Hwan Kim：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音识别输入为连续声学语音，输出为离散文本转写，实际难点在于语音表示长度随时间时长线性增长而文本长度随语义密度变化，固定速率前缀造成与大模型预训练分布失配与约3\.3倍冗余。第一步做语音条件对齐，冻结Whisper\-large\-v2编码器与Qwen3词嵌入，以文本嵌入为查询对语音特征做交叉注意力，自回归生成语义空间中的语音条件嵌入并经词表最近邻回查离散化以防误差累积。第二步冻结对齐模块并用低秩适配调优大模型，将第一步自回归生成的嵌入与转写指令按对话模板组装为提示，学习语音条件下的指令跟随生成。第三步对第一步嵌入施加掩蔽与删除扰动做精炼调优，推理时先用第一阶段最近邻预测首词并将其嵌入插入应答起始做首词引导，再由大模型续写全文。与投影与查询变换器的关键差异在于解耦序列长度与音频时长，以语义密度自适应可变速率生成约2\.99词元每秒的嵌入而非固定时间窗，从而保持与自然文本分布一致。在TED\-LIUM\-v2跨域评测设置下，SEAM完整模型的WER为4\.7%，低于SLAM\-ASR的8\.8%。该跨域增益的适用边界尚未验证至非英语或强噪声自发语音，且双重自回归带来额外推理开销与延迟，受限于实时部署。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 33. [一句话能拍一分钟：MAViS 用多智能体与 3E 循环约束长视频叙事](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-101-6621077c64/)

> 英文题目：*[MAViS: A Multi\-Agent Framework for Long\-Sequence Video Storytelling](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-101-6621077c64/)*

标签：#模型融合 #主观评测 #音视频 #音视频生成

评分：**5.8/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音视频生成 | 主方法：#模型融合

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.101/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.101.pdf)

👥 **作者与机构**

- Qian Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Ziqi Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Ruoxi Jia：机构信息未能从会议 PDF 纯文本可靠映射
- Paul Debevec：机构信息未能从会议 PDF 纯文本可靠映射
- Ning Yu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为主题与风格等简短用户提示，输出为约1分钟带旁白和背景音乐的多镜头连续视频，难点在于长程叙事连贯性、跨镜头背景与身份一致性及脚本与生成模型能力失配。剧本写作智能体先按结构内容风格指南生成分场景分镜头剧本与对白旁白规划，为后续可执行化提供约束完整的叙事蓝本。镜头设计智能体承接剧本输出，将其展开为背景运镜与人物动作等细化要素并经评审修订，形成可直接驱动生成的镜头说明。关键帧生成与视频动画音频阶段承接镜头说明，依3E原则在文本生图与图生视频模型池中迭代优选并对齐语音音乐，从而把静态一致基准扩展为动态片段。相对VGoT等分段生成基线，该框架以统一多智能体协作与可复用模型池替代人工干预和逐角色手工训练，实际意义在于减少空间跳变并提升提示一致性与自然度。在20条自建提示构成的测试集下，MAViS的关键帧生成CLIP指标为34\.22，高于Mora基线的关键帧生成CLIP指标33\.98。该结论适用边界受限于短时长虚构故事与所用商用生成模型组合，尚未验证对话交互复杂剪辑与长程背景一致性等外推范围。单视频在两块H100硬件上的平均生成耗时约13\.63小时，推理开销远低于内部艺术家5天的人工流程但仍较高。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 34. [既要指认来源又要识破新来源：图与近邻如何分工做合成语音取证](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-250-8738a25c6e/)

> 英文题目：*[Bridging Attribution and Open\-Set Detection using Graph\-Augmented Instance Learning in Synthetic Speech](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-250-8738a25c6e/)*

标签：#图神经网络 #状态空间模型 #音频深度伪造检测 #语音合成

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频深度伪造检测 | 主方法：#图神经网络

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.250/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.250.pdf)

👥 **作者与机构**

- Mohd Mujtaba Akhtar：机构信息未能从会议 PDF 纯文本可靠映射
- Girish：机构信息未能从会议 PDF 纯文本可靠映射
- Farhan Sheth：机构信息未能从会议 PDF 纯文本可靠映射
- Muskaan Singh：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

合成语音取证的输入为待测语音波形，输出需同时给出已知合成器的归属类别并拒识训练未见的未知生成器，难点在于扩散式文本到语音伪影细微且商业系统常在测试时新出现。SIGNAL先将冻结语音基础模型抽取的话语级嵌入经卷积编码器压缩为紧凑隐向量。该隐向量作为查询节点与全部已知生成器可学习原型连边，经多头自注意力图网络传播推理得到归属分布。同一隐空间并行以距离加权k最近邻估计局部实例相似度，再与图分支集成并以置信度阈值路由至已知归属或未知拒识。与独立卷积或全连接分类器相比，该设计以图传播显式建模候选生成器间相对关系并融合局部邻域证据，因而兼顾闭集判别与开集泛化，具有可扩展取证意义。在DiffSSD开发集评测设置下，Whisper嵌入下GNN分支的等错误率为4\.37%，从KNN分支的5\.52%降至4\.37%。结论适用边界受限于英语朗读式合成语音训练与多语歌唱伪造零样本迁移验证，尚未验证多未知源细粒度聚类与完全无约束部署阈值的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/microsoft/wavlm-base> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/openai/whisper-base> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 35. [把别人的声音换掉还不带出口音：低资源 TTS 的跨语言匿名化比较](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-16-01fb0947c0/)

> 英文题目：*[Exploring Cross\-Lingual Voice Conversion Methods for Anonymizing Low\-Resource Text\-to\-Speech](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-16-01fb0947c0/)*

标签：#迁移学习 #跨语言 #低资源 #说话人匿名化 #语音转换

评分：**5.8/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#说话人匿名化 | 主方法：#迁移学习

会议来源：[官方记录](https://aclanthology.org/2026.eacl-short.16/) · [官方 PDF](https://aclanthology.org/2026.eacl-short.16.pdf)

👥 **作者与机构**

- Shenran Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Aidan Pine：机构信息未能从会议 PDF 纯文本可靠映射
- Mengzhe Geng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为nêhiyawêwin与SENĆOŦEN文本，输出为保留自然度与目标语言口音的匿名化语音，难点在于训练说话人仅8人与2人且社区内高度可识别，需在极少身份下解耦说话人与语言。第一步负责构建多语言训练基础，将原住民语料与LibriTTS\-R英语大规模混合并保留验证与测试划分，为扩大说话人覆盖提供联合训练数据。第二步负责在训练中显式分离语言，承接上一步混合数据从头训练StyleTTS2，并在声学风格编码器、韵律风格编码器与文本编码器中加入语言嵌入，输出语言与风格解耦的多语言模型。第三步负责推理时跨语言转换，承接上一步解耦模型的风格参考接口，取LibriTTS\-R英语说话人样本提取平均风格嵌入来引导目标语言合成，直接生成匿名化波形。相对仅扰动嵌入的推理时改写与外置SeedVC波形转换，该路线以联合训练加显式语言条件在机制上隔离说话人音色与语言归属，因而英语口音更弱且跨语言更稳定，实际意义在于兼顾匿名性与可懂度。在nêhiyawêwin测试集评测下，CRK\-ENG带语言嵌入Custom方法的SECS指标为0\.63，低于无转换基线方法的SECS指标为0\.87。该结论适用边界受限于两种加拿大原住民语言的小规模客观评测，未经人类听感验证，且无语言嵌入时口音漂移严重、三语混合未必更优。训练硬件为两块A100\-40GB负责第一阶段与一块A100\-40GB负责第二阶段，部署时模型权重因社区协议不公开。

🔗 **开源资源**

- 第三方资源：<https://github.com/Plachtaa/seed-vc> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 36. [语义手势能帮模型判断谁接着说：多方对话中的保持与让渡预测](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-106-19b3504555/)

> 英文题目：*[Modeling Turn\-Taking with Semantically Informed Gestures](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-106-19b3504555/)*

标签：#数据集 #混合专家模型 #多模态学习 #轮次切换

评分：**5.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#轮次切换 | 主方法：#混合专家模型

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.106/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.106.pdf)

👥 **作者与机构**

- Varsha Suresh：机构信息未能从会议 PDF 纯文本可靠映射
- M\. Hamza Mughal：机构信息未能从会议 PDF 纯文本可靠映射
- Christian Theobalt：机构信息未能从会议 PDF 纯文本可靠映射
- Vera Demberg：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多方对话轮次预测需在过渡相关位置判断当前说话人保持还是让渡，输入为文本转录、语音音频与上身动作，难点在于纯文本与韵律线索模糊时证据不足而手势语义难以量化。该工作先将连续对话按200 ms静音阈值切分为话语间隔单元并按下一说话人是否变化标注保持与让渡，再用向量量化变分自编码器学习上身动作离散表示并以四类语义手势监督对齐。接着由文本专家、声学专家与手势专家分别编码三种模态并经门控混合专家网络动态加权融合，最后经线性分类器输出二分类结果。与直接拼接或线性融合不同，门控混合专家按上下文自适应分配模态权重，使语义对齐后的手势与文本更好协同，从而在语音线索弱时提供互补证据。可视化显示语义监督使手势嵌入按类型形成更清晰聚类并提升手势与文本的门控权重，解释了融合增益来源。在自建多方测试集下，文本加音频加手势模型的准确率为71\.5，高于文本加音频基线的69\.7。结论的适用边界目前仅限桌面角色扮演类高手势密度英语对话，对会议与跨文化场景的外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://archive.mpi.nl/tla/elan> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/m-bain/whisperX> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
