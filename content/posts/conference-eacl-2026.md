---
title: "eacl-2026 论文深度解读"
date: 2026-09-11
draft: false
paper_digest_pipeline_owned: true
tags: ["变分自编码器","病理语音评估","大语言模型","低资源","对比学习","多模态学习","多任务学习","多通道","多语言","高效推理","公平性","环境声","混合专家模型","基准测试","基准设计","检索增强","教育","可解释性","跨语言","零样本","鲁棒性","轮次切换","模型比较","模型集成","模型评估","模型融合","脑信号","评测协议","迁移学习","强制对齐","少样本","时频分析","数据集","数据集构建","数据增强","说话人分离标注","说话人匿名化","说话人识别","提示学习","统计分析","图神经网络","无监督学习","音乐","音频安全","音频编码","音频大模型","音频检索","音频理解","音频深度伪造检测","音频生成","音频问答","音视频","音视频生成","语言识别","语言习得","语音","语音翻译","语音唤醒","语音活动检测","语音交互","语音情感识别","语音识别","语音伪造检测","语音质量评估","语音转换","长音频处理","知识蒸馏","指令微调","主观评测","注意力机制","自回归模型","Adapter","LoRA","SFT"]
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
| #语音识别 | 9 篇 |
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
| #语音交互 | 1 篇 |
| #语音伪造检测 | 1 篇 |

## 📊 论文评分排行榜

| 排名 | Reader 中文题目 | 英文题目 | 八维评分 | 分档 | 文档类型 | 主任务 |
|---:|---|---|---|---|---|---|
| 1 | [真实多人对话考验语音自监督表示：CSPB 用单通道与多通道同测内容与说话人](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-275-83ec899273/) | [CSPB: Conversational Speech Processing Benchmark for Self\-supervised Speech Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-275-83ec899273/) | **8.4/10** · 创新 1.4/2 · 技术严谨 1.3/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 数据集与基准 | #语音识别 |
| 2 | [前缀里藏着计划：用早期打分引导自回归音频走对语义](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-138-f4a45423b2/) | [Guided by the Plan: Enhancing Faithful Autoregressive Text\-to\-Audio Generation with Guided Decoding](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-138-f4a45423b2/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频生成 |
| 3 | [把混叠的音频表示拆开：AudioSAE 用稀疏自编码器解剖 Whisper 与 HuBERT](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-149-02b8b42fcf/) | [AudioSAE: Towards Understanding of Audio\-Processing Models with Sparse AutoEncoders](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-149-02b8b42fcf/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音识别 |
| 4 | [只转写不倾听：用四种词义声学关系测音频大模型的情绪依据](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-274-b53aef0010/) | [Do Audio LLMs Really LISTEN, or Just Transcribe? Measuring Lexical vs\. Acoustic Emotion Cues Reliance](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-274-b53aef0010/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #语音情感识别 |
| 5 | [语音把选择题变难了吗：语言、口音、性别与选项顺序如何动摇语音问答](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-80-adf29f971d/) | [Bias in the Ear of the Listener: Assessing Sensitivity in Audio Language Models Across Linguistic, Demographic, and Positional Variations](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-80-adf29f971d/) | **7.9/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #音频问答 |
| 6 | [同域满分、跨域随机：XMAD\-Bench 逼出音频伪造检测的泛化缺口](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-162-2f7bf61362/) | [XMAD\-Bench: Cross\-Domain Multilingual Audio Deepfake Benchmark](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-162-2f7bf61362/) | **7.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 数据集与基准 | #音频深度伪造检测 |
| 7 | [不只听清说什么：SCENEBench 考大型音频语言模型的背景声、运动、混语与喉头发声](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-335-71921c96eb/) | [SCENEBench: An Audio Understanding Benchmark Grounded in Assistive and Industrial Use Cases](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-335-71921c96eb/) | **7.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #音频理解 |
| 8 | [按频带分开压缩：BSCodec 用独立编解码应对语音音乐音效的谱差异](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-245-fa133268a7/) | [BSCodec: A Band\-Split Neural Codec for High\-Quality Universal Audio Reconstruction](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-245-fa133268a7/) | **7.5/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频编码 |
| 9 | [只用英文文本把多语言接入冻结多模态空间的轻量映射](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-143-bd525afd17/) | [Multilingual\-To\-Multimodal \(M2M\): Unlocking New Languages with Monolingual Text](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-143-bd525afd17/) | **7.3/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.5/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #音频检索 |
| 10 | [单语很强、混着说就错：HiKE 用三级切换与借词标注拆解韩英代码切换识别](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-33-d29d1e84d4/) | [HiKE: Hierarchical Evaluation Framework for Korean\-English Code\-Switching Speech Recognition](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-33-d29d1e84d4/) | **7.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音识别 |
| 11 | [宣称支持不等于可用：AfriVox 测出非洲语言与口音下的转写崩塌与翻译分化](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-122-addd513936/) | [AfriVox: Probing Multilingual and Accent Robustness of Speech LLMs](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-122-addd513936/) | **7.2/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.5/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音识别 |
| 12 | [小模型微调为何压过大模型提示：印地语后纠错的规模与领域证据](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-45-b7f4e64b99/) | [Post\-ASR Correction in Hindi: Comparing Language Models and Large Language Models in Low\-Resource Scenarios](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-45-b7f4e64b99/) | **7.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #语音识别 |
| 13 | [多人对话先找对说话人，再把文本的情绪理解教给声音和画面](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-212-8f19f964ef/) | [Emotion Recognition in Multi\-Speaker Conversations through Speaker Identification, Knowledge Distillation, and Hierarchical Fusion](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-212-8f19f964ef/) | **7.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 14 | [先对齐再推理：ConLLM 用两阶段解决模态割裂与浅层融合](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-102-db05d9d686/) | [Revealing the Truth with ConLLM for Detecting Multi\-Modal Deepfakes](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-102-db05d9d686/) | **7.0/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 1.0/1.5 · 清晰度 0.6/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #音频深度伪造检测 |
| 15 | [不用听原声也能评声音：先分维标注再用文字蓝图推理的语音评价](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-151-c6d61a02b7/) | [Hearing Between the Lines: Unlocking the Reasoning Power of LLMs for Speech Evaluation](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-151-c6d61a02b7/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.1/1.5 | 前50% | 方法研究 | #语音质量评估 |
| 16 | [认不出带口音的英语：码切换语音识别先补口音英语再谈排序](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-242-0de3aaa5e9/) | [Improving Language Identification for Code\-Switched Speech: The Pivotal Role of Accented English](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-242-0de3aaa5e9/) | **6.9/10** · 创新 1.5/2 · 技术严谨 1.3/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语言识别 |
| 17 | [只拉伸音频位置、不动文本位置：部分 YaRN 与虚拟长音频训练的长音频泛化](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-286-9f2982a622/) | [Extending Audio Context for Long\-Form Understanding in Large Audio\-Language Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-286-9f2982a622/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频问答 |
| 18 | [越南语识别缺的不是模型，而是可复用的清洗与对齐流水线](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-345-3f63731376/) | [Vietnamese Automatic Speech Recognition: A Revisit](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-345-3f63731376/) | **6.8/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #语音识别 |
| 19 | [为俄语补上多模态标尺：MERA Multi 如何把 18 个任务拧成一套可复现评测](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-94-667b23ffaf/) | [Multimodal Evaluation of Russian\-language Architectures](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-94-667b23ffaf/) | **6.6/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #音频问答 |
| 20 | [归纳一次反复复用：从三段音频中提炼可迁移的听答步骤](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-18-7f7b7136a1/) | [Task\-Level Instructions Induction for Audio Question Answering from Few Examples](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-18-7f7b7136a1/) | **6.6/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频问答 |
| 21 | [文本有感情，声音不一定跟：跨模态情感相关的限度](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-136-94b00c07ca/) | [The Correlation Between Emotion in Text and Speech Segments is Limited: A Cross\-Modal Study](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-136-94b00c07ca/) | **6.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 应用研究 | #语音情感识别 |
| 22 | [背景噪声也能操纵语音大模型：从数字优化到空中播放的定向与非定向攻击](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-66-e9659d5842/) | [Attacker’s Noise Can Manipulate Your Audio\-based LLM in the Real World](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-66-e9659d5842/) | **6.5/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音唤醒 |
| 23 | [按语系共享连接器：多语言语音大模型何时该合练、何时该单练](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-36-39d3ace92e/) | [Language Family Matters: Evaluating SpeechLLMs Across Linguistic Boundaries](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-36-39d3ace92e/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 24 | [AudioJudge：拼接与拆分提示如何让大音频模型做语音评测](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-168-1217e8baad/) | [AudioJudge: Understanding What Works in Large Audio Model Based Speech Evaluation](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-168-1217e8baad/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 方法研究 | #语音质量评估 |
| 25 | [既要指认合成语音来自哪台生成器，又要识破没见过的新生成器](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-250-8738a25c6e/) | [Bridging Attribution and Open\-Set Detection using Graph\-Augmented Instance Learning in Synthetic Speech](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-250-8738a25c6e/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音伪造检测 |
| 26 | [讲法本身就是攻击面：叙事语音如何绕过音频大模型的文本对齐](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-278-91aefba5dc/) | [Now You Hear Me: Audio Narrative Attacks Against Large Audio–Language Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-278-91aefba5dc/) | **6.4/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 方法研究 | #音频问答 |
| 27 | [把只有发音的埃及儿童对话变成可计算的带符正字法：ARABABYTALK\-EGY 如何标注与设基准](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-102-5ffc895827/) | [Computational Benchmarks for Egyptian Arabic Child Directed Speech](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-102-5ffc895827/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #语音识别 |
| 28 | [单个都会、合在一起就不会：ART 要求模型同时听懂语音与声音再推理](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-42-1d94f1effa/) | [A Benchmark for Audio Reasoning Capabilities of Multimodal Large Language Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-42-1d94f1effa/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频问答 |
| 29 | [发音纠错不能只给分数：让音频语言模型说出错在哪、怎么练](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-190-923151c2cd/) | [Unlocking Large Audio\-Language Models for Interactive Language Learning](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-190-923151c2cd/) | **6.3/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 数据集与基准 | #语音交互 |
| 30 | [按语义密度生成：SEAM 用编解码对齐弥合语音与文本的粒度差](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-112-0f11e60a3c/) | [SEAM: Bridging the Temporal\-Semantic Granularity Gap for LLM\-based Speech Recognition](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-112-0f11e60a3c/) | **6.2/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音识别 |
| 31 | [MAViS：用多智能体分阶段协作把一句话变成一分钟有声故事短片](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-101-6621077c64/) | [MAViS: A Multi\-Agent Framework for Long\-Sequence Video Storytelling](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-101-6621077c64/) | **6.0/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #音视频生成 |
| 32 | [把多模态 token 推迟送入：在中间层汇合为何能省算力](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-332-cf24208228/) | [DeepInsert: Early Layer Bypass for Efficient and Performant Multimodal Understanding](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-332-cf24208228/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频理解 |
| 33 | [从快速重复音节到可解释的重度判断：CLINIC\-GENIE 如何把分类、归因和病历类比装进一条管线](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-275-2b3576c523/) | [Diagnosis of Dysarthria Severity and Explanation Generation Using XAI\-Enhanced CLINIC\-GENIE on Diadochokinetic Tasks](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-275-2b3576c523/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 应用研究 | #病理语音评估 |
| 34 | [低资源 TTS 要换声不要换口音：多语言训练跨语言迁移为何更稳](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-16-01fb0947c0/) | [Exploring Cross\-Lingual Voice Conversion Methods for Anonymizing Low\-Resource Text\-to\-Speech](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-16-01fb0947c0/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #说话人匿名化 |
| 35 | [语义手势补上文本加音频的缺口：多方对话保持与让渡预测](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-106-19b3504555/) | [Modeling Turn\-Taking with Semantically Informed Gestures](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-106-19b3504555/) | **5.6/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #轮次切换 |
| 36 | [把共有的病和各自的信号分开：DIVINE 的多模态解耦评估](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-248-f3db9e13eb/) | [DIVINE : Coordinating Multimodal Disentangled Representations for Oro\-Facial Neurological Disorder Assessment](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-248-f3db9e13eb/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 后50% | 方法研究 | #病理语音评估 |

---

## 📋 论文列表

### 1. [真实多人对话考验语音自监督表示：CSPB 用单通道与多通道同测内容与说话人](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-275-83ec899273/)

> 英文题目：*[CSPB: Conversational Speech Processing Benchmark for Self\-supervised Speech Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-275-83ec899273/)*

标签：#基准设计 #多通道 #语音识别 #说话人分离标注

评分：**8.4/10** | 创新 1.4/2 | 技术严谨 1.3/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.275/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.275.pdf)

👥 **作者与机构**

- Zili Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Matthew Maciejewski：机构信息未能从会议 PDF 纯文本可靠映射
- Leibny Paola Garcia Perera：机构信息未能从会议 PDF 纯文本可靠映射
- Shinji Watanabe：机构信息未能从会议 PDF 纯文本可靠映射
- Sanjeev Khudanpur：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该基准以真实多方会议与晚宴录音为输入，要求同时输出文字转写、说话人归属边界与增强后语音可懂度，难点在于远场混响、背景噪声与高重叠并发且缺乏干净参考信号。评测先冻结上游自监督编码器并抽取多层表示，以隔离预训练本身的鲁棒性。随后以可学习权重融合多层特征为统一帧级表示，再送入轻量下游头分别完成识别、分离标注与掩蔽增强。增强分支因无干净参考，固定使用近场训练的端到端识别模型转写增强语音，并以错误率度量可懂度。相对干净单人基准的关键差异在于统一纳入四套真实会话语料，并并行支持波束成形前端与原生多通道编码器两种空间利用路径，因而能同时检验扩增预训练与空间线索的实际增益。在AMI单通道ASR评测任务下，WavLM Large的WER为35\.5%，低于FBANK基线的89\.3%。该结论适用边界限于英语与中文会议晚宴等近似场景，对编解码大模型与强移动佩戴场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/HuangZiliAndy/CSPB> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 2. [前缀里藏着计划：用早期打分引导自回归音频走对语义](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-138-f4a45423b2/)

> 英文题目：*[Guided by the Plan: Enhancing Faithful Autoregressive Text\-to\-Audio Generation with Guided Decoding](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-138-f4a45423b2/)*

标签：#自回归模型 #主观评测 #环境声 #音频生成

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

文本到音频生成以文本提示为输入、以波形解码音频为输出，难点在于严格因果自回归只能从左到右生成，难以全局协调多事件复杂指令，易遗漏或错位关键语义元素。该方法先用前缀隐状态探针验证隐式规划，发现前三十二步前缀表征即可回归事件数并分类发声对象，为早期评估提供依据。接着训练轻量评论家，将前缀词元与文本编码经因果自注意力和交叉注意力映射为标量分，以稀疏监督预测最终指令遵循质量，其输出直接作为下一步前缀打分。推理时采用前缀优先搜索，并行采样一百二十八个短前缀并由评论家打分剪枝，仅保留得分最高的少量高潜力规划种子再补全为完整音频，将算力前移到种子探索。与同词元预算下对完整序列重排的最优重排相比，该机制避免在低潜力轨迹上浪费补全，因而在复杂多事件提示下更高效且语义更忠实。在AudioCaps评测下，Siren\+Ours的CLAP为36\.47，高于Siren\+BoN的26\.67。结论适用边界受限于二百八十八词元短音频、Siren分布与CLAP代理奖励下的固定前缀假设，长时多阶段场景与跨生成器迁移尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/wjc2830/Siren.git> → <https://github.com/wjc2830/Siren> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 3. [把混叠的音频表示拆开：AudioSAE 用稀疏自编码器解剖 Whisper 与 HuBERT](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-149-02b8b42fcf/)

> 英文题目：*[AudioSAE: Towards Understanding of Audio\-Processing Models with Sparse AutoEncoders](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-149-02b8b42fcf/)*

标签：#无监督学习 #可解释性 #脑信号 #语音识别 #语音活动检测

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#无监督学习

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

音频编码器输出稠密纠缠，难以定位笑声、音乐或幻觉对应的内部方向，制约可控解码与可信分析。本文在Whisper\-small与HuBERT\-base全部编码器层训练批Top\-K稀疏自编码器，将帧级激活编码为稀疏特征再重构回原空间。随后用基于二值激活交并比的分布覆盖度量跨种子与跨层稳定性，用域特化与分类探测解析语义并以音素对齐验证可分性。最后将筛选特征用于转向干预与脑电关联验证，使概念擦除与幻觉转向可在重构空间闭环执行。与直接分析神经元或线性探针相比，该链条把可解释单元显式解耦为可开关与可加权向量，实际意义在于实现细粒度可控干预而不破坏语音识别。在LibriSpeech test\-clean评测设置下，SAE转向的词错率WER为5\.5%，高于未转向基线的5\.1%，而三集平均误检率从0\.37降至0\.11。结论适用边界限于中小规模编码器与英语主导语料，对大模型、生成式音频模型与实时部署的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/audiosae/audiosae_demo> → <https://github.com/audiosae/audio-sae> — 链接可访问（HTTP 200）
- 模型相关资源：<https://huggingface.co/openai/whisper-small> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 4. [只转写不倾听：用四种词义声学关系测音频大模型的情绪依据](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-274-b53aef0010/)

> 英文题目：*[Do Audio LLMs Really LISTEN, or Just Transcribe? Measuring Lexical vs\. Acoustic Emotion Cues Reliance](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-274-b53aef0010/)*

标签：#基准设计 #音频大模型 #语音 #语音情感识别

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

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

语音情感理解输入为携带词汇语义与韵律的语音、输出为离散情感标签，实际难点在于词汇线索常掩盖音高语调节奏等声学线索，导致模型靠转写捷径虚增分数。为此本文构建LISTEN先按词汇\-声学关系划分中性文本、匹配增强、对抗冲突与无词旁语四种条件并映射真值，以隔离声学贡献，再基于该条件划分将其实例化到多源情感语料并生成文本、音频与图文结合跨模态可比的多选提示，最后基于可比提示对6个模型做文本、音频与结合的零样本对照以暴露模态依赖。与已有情感基准直接测准确率不同，该设计通过中性隔离、匹配增强与冲突对抗强制检验声学利用，具有诊断真听而非转写的实际意义。在Neutral\-Text音频\-only设置下，Gemini 2\.5\-Pro的准确率为34\.9%，高于Qwen2\.5\-Omni\-7B的34\.0%。冲突下模型能感知不一致却坍缩到少数类，旁语下多偏向中性，表明词汇主导且声学整合脆弱。结论适用边界受限于英语短句孤立评测，尚未验证多轮对话、跨语言韵律与真实部署噪声下的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/DeliJingyiC/LISTEN> — 链接可访问（HTTP 200）
- 数据相关资源：<https://huggingface.co/datasets/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 5. [语音把选择题变难了吗：语言、口音、性别与选项顺序如何动摇语音问答](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-80-adf29f971d/)

> 英文题目：*[Bias in the Ear of the Listener: Assessing Sensitivity in Audio Language Models Across Linguistic, Demographic, and Positional Variations](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-80-adf29f971d/)*

标签：#基准设计 #公平性 #多语言 #语音 #音频问答

评分：**7.9/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.80/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.80.pdf)

👥 **作者与机构**

- Sheng\-Lun Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Yu\-Ling Liao：机构信息未能从会议 PDF 纯文本可靠映射
- Yen\-Hua Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Hen\-Hsen Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Hsin\-Hsi Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务输入为英语、中文与韩语的语音版多项选择题，输出为选项字母，要求多模态大语言模型（Multimodal Large Language Model，MLLM）在语言、口音、性别与选项顺序扰动下保持正确且稳定，难点在于语音引入的副语言线索与文本固有顺序偏置相互叠加。方法链分为三步：先用大模型将含公式与符号的题干改写为可朗读文本，再用多口音文本到语音（Text\-to\-Speech，TTS）合成受控语音并经双自动语音识别（Automatic Speech Recognition，ASR）加人工抽检质控，最后将拼接音频送入9个MLLM并以准确率、熵、平均成对熵偏移与Fleiss一致性联合度量鲁棒性。与已有文本偏置研究相比，关键机制差异是将选项顺序敏感性与跨语言不确定性放在同一语音证据下量化，并对比端到端与先转写后作答两种架构。在Global MMLU Lite衍生的11200题、70\.8小时语音上，选项逆序在Gemini 2\.5 Flash上造成最高6\.75个百分点的准确率下降，音频下的语言敏感度系统性高于文本对照。结论适用于高资源英语与中韩语朗读式问答，外推至自然对话、自发口音连续谱与低资源语言尚未验证。TTS生成与Gemini API推理总成本低于550美元，未披露训练或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ntunlplab/BiasInEar> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/ntunlplab/BiasInEar> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 6. [同域满分、跨域随机：XMAD\-Bench 逼出音频伪造检测的泛化缺口](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-162-2f7bf61362/)

> 英文题目：*[XMAD\-Bench: Cross\-Domain Multilingual Audio Deepfake Benchmark](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-162-2f7bf61362/)*

标签：#数据集 #基准设计 #多语言 #语音 #音频深度伪造检测

评分：**7.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

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

音频深度伪造检测以原始波形或谱图为输入，输出真伪二分类，难点在于野外部署时说话人、录制来源与合成器均未知而实验室评测长期同分布。作者先从七语公开语料采集真实语音并按语种配对双源，再经文本到语音合成初声并以原说话人语音做语音转换克隆以保留内容与音色。随后按语种内双方法划分训练与域内测试，并跨语种换说话人换来源换方法构建跨域测试，使训练输出直接成为域内与跨域评测的输入对照。相对仅含伪造或单语同分布评测，该设计以说话人与方法隔离为核心差异，使语言偏置与生成器记忆无法充当捷径，因而更能暴露泛化失效。在阿拉伯语跨域测试集下，AST模型的准确率为73\.39，低于域内测试集下同一模型的准确率99\.97。该结论适用边界受限于短句朗读类语音与所选开源合成器组合，尚未验证长时对话、强压缩与未知高阶商用克隆的外推，失败条件集中于强噪声与跨语言跨域叠加。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://github.com/pytorch/vision> — 链接可访问（HTTP 200）
- 模型相关资源：<https://huggingface.co/MIT/> — 暂时无法访问
- 模型相关资源：<https://github.com/ristea/septr> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/idiap/coqui-ai-TTS> — 链接可访问（HTTP 200）
- 第三方资源：<https://keithito.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 7. [不只听清说什么：SCENEBench 考大型音频语言模型的背景声、运动、混语与喉头发声](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-335-71921c96eb/)

> 英文题目：*[SCENEBench: An Audio Understanding Benchmark Grounded in Assistive and Industrial Use Cases](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-335-71921c96eb/)*

标签：#基准测试 #基准设计 #多语言 #环境声 #音频理解

评分：**7.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频理解 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.335/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.335.pdf)

👥 **作者与机构**

- Laya Iyer：机构信息未能从会议 PDF 纯文本可靠映射
- Angelina Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Sanmi Koyejo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

大型音频语言模型需在含噪单通道短音频中同时解析前景语音与背景事件、幅度运动、多语混合及咳嗽哭笑等非言语发声，输出自由描述、定向回答与转写相似度，难点在于语音常掩盖弱目标且时变与跨语线索稀疏。SCENEBench先以受控合成叠加批量构造背景理解、噪声定位、跨语理解与发声表征四类样本，将自然环境声与对话语音等响叠加并施加增强衰减与正弦包络模拟运动。接着以分层提示区分自发提及、定向检索与四选一辨别力，使上一阶段合成样本的遗漏、误标与方向混淆得以分离归因。最后以每任务20条人类实录检验生态效度并同步记录本地模型时延，形成合成诊断与真实检验闭环。与侧重干净语音与自动评分的既有基准相比，该套件强制评估被忽略的背景、运动、多语与副语言维度，因而更具诊断针对性。在4006条发声表征评测任务下，Flamingo的Laugh准确率为98\.0%，高于Desta的64\.1%。其结论适用边界受限于等响叠加、线性幅度运动与合成语音构造，尚未验证多普勒、遮挡与自然语码转换下的外推。推理开销方面本地模型存在显著差异，Flamingo中位延迟为2\.26s而Desta中位延迟为15\.61s。

🔗 **开源资源**

- 代码相关资源：<https://github.com/layaiyer1/SCENEbench> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/SALT-NLP/CAVA> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 8. [按频带分开压缩：BSCodec 用独立编解码应对语音音乐音效的谱差异](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-245-fa133268a7/)

> 英文题目：*[BSCodec: A Band\-Split Neural Codec for High\-Quality Universal Audio Reconstruction](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-245-fa133268a7/)*

标签：#时频分析 #环境声 #音乐 #语音 #音频编码

评分：**7.5/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频编码 | 主方法：#时频分析

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.245/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.245.pdf)

👥 **作者与机构**

- Haoran Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiatong Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Jinchuan Tian：机构信息未能从会议 PDF 纯文本可靠映射
- Bohan Li：机构信息未能从会议 PDF 纯文本可靠映射
- Kai Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Shinji Watanabe：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

通用音频重建需在同一模型中同时压缩语音、音乐与环境声，而三者频谱能量分布差异显著，统一容量分配难以兼顾窄带谐波与宽带音色纹理。本文提出频带分离编解码器BSCodec，先将24kHz输入经短时傅里叶变换分割为多个不重叠子带并经逆变换还原为子带波形，得到带限波形集合。再将该集合送入参数不共享的独立编码器并行编码为75Hz潜在特征以特化各自频段，得到各带连续潜在表征。最后将每带潜在表征经单层大量本量化离散化后由对应对称解码器重建子带波形并相加合成，与多带判别器联合优化重建，得到最终波形。与残差向量量化逐层编码残差不同，该设计按物理频带解耦表示并为每带分配单层大码本，避免全频带均匀分配容量。在音乐重建评测下，BSCodec三频带配置的VISQOL为4\.196，高于DAC基线的4\.097。三频带粗分低频统一建模缓解了五频带在语音感知指标上的退化，在保持音乐与环境声优势的同时提升说话人相似度与下游语义表征能力。结论适用边界限于24kHz重建与中小规模理解型下游任务，尚未验证大语言模型式生成与更高采样率外推，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/whr-a/espnet/tree/bscodec> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 9. [只用英文文本把多语言接入冻结多模态空间的轻量映射](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-143-bd525afd17/)

> 英文题目：*[Multilingual\-To\-Multimodal \(M2M\): Unlocking New Languages with Monolingual Text](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-143-bd525afd17/)*

标签：#多模态学习 #跨语言 #多语言 #零样本 #音频检索

评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.5/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频检索 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.143/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.143.pdf)

👥 **作者与机构**

- Piyush Singh Pasi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多语言图文与音频文本检索以多语言查询与图像或音频候选为输入，以跨模态相似度排序为输出，难点在于非英语多模态平行数据稀缺且采集昂贵。该方法首先冻结英语多模态文本编码器与多语言文本编码器，对同一英语句子抽取两者平行表示形成对齐监督。接着仅训练由两层无残差线性层构成的投影映射，将多语言表示逼近多模态表示，检索时在归一化表示上优化对齐与结构损失而生成任务则保留尺度信息。推理时任意语言先经多语言编码器再经该映射进入冻结的图像或音频空间，以余弦相似度完成检索或条件生成。与依赖多语言多模态平行数据微调整个文本编码器不同，该方法以英语为共享锚点只做表示空间几何重塑而不引入新模态监督，因而轻量且保留单语性能。在XTD测试集任务下，M2M对齐模型V6的Recall@10为89\.5，高于MSE基线V1的88\.9。该结论适用边界受限于句子级全局表示的双编码器检索，向词元级生成与联合编码器等场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.sbert.net/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/toshas/torch-fidelity> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 10. [单语很强、混着说就错：HiKE 用三级切换与借词标注拆解韩英代码切换识别](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-33-d29d1e84d4/)

> 英文题目：*[HiKE: Hierarchical Evaluation Framework for Korean\-English Code\-Switching Speech Recognition](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-33-d29d1e84d4/)*

标签：#基准测试 #基准设计 #多语言 #语音 #语音识别

评分：**7.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.33/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.33.pdf)

👥 **作者与机构**

- Gio Paik：机构信息未能从会议 PDF 纯文本可靠映射
- Yongbeom Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Soungmin Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Sangmin Ahn：机构信息未能从会议 PDF 纯文本可靠映射
- Chan Woo Kim：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

韩英码切换语音识别以混合话语音频为输入并输出韩英混排转写，难点在于韩英类型距离大且句内词与短语切换密集不规则，强单语模型难以在切换点准确转语言。该基准先人工撰写575条跨8主题种子脚本，再以单样本提示用CLAUDE\-3\.5\-SONNET每条克隆1条并经作者全部人工复核纠错，输出脚本集进入录音环节。随后13名双语者在安静环境用个人设备经网页工具各录50到100条，剔除29条偏离样本后保留1121条约2\.2小时录音进入标注环节。接着按句子级优先于短语级优先于词级规则完成三级分层标注，并对外来语标注后在评价时接受韩英两种写法以降低测量噪声。与拼接单语或合成句级切换数据相比，其关键机制差异在于提供自然发音的真实切换与切换点误差度量，使词典替换能力与语序重排能力可被分离考察，具有真实评价意义。在HiKE基准下，经自然句内码切换数据微调的WHISPER\-MEDIUM的Mixed Error Rate错误率为9\.0，低于微调前基线的31\.3。该结论适用边界限于朗读式短句与安静录音，尚未验证自发对话、噪声远场与多说话人场景的外推。实验硬件为单块NVIDIA RTX 6000 Ada GPU评测与单块A100 GPU微调约1轮，推理开销与训练成本原文未量化分析。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ThetaOne-AI/HiKE> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 11. [宣称支持不等于可用：AfriVox 测出非洲语言与口音下的转写崩塌与翻译分化](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-122-addd513936/)

> 英文题目：*[AfriVox: Probing Multilingual and Accent Robustness of Speech LLMs](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-122-addd513936/)*

标签：#基准设计 #鲁棒性 #多语言 #语音识别 #语音翻译

评分：**7.2/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

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

本文输入为非洲20种语言及非洲口音英语、法语、阿拉伯语语音，输出为母语逐字转写与译为英语的文本，难点在于口音与方言高度多样、自发议会语音存在环境噪声与说话人重叠、低资源语言覆盖不足且旧公开集可能因预训练污染而高估性能。方法链第一步聚合NCHLT、Common Voice 17、FLEURS、OpenSLR、BibleTTS、NaijaVoices等开源转写翻译语料以覆盖多语言多口音基座，其输出统一为待测基准池。第二步新建4国议会实录与19语医疗平行朗读并经母语者听写加研究生抽检质控，其输出作为噪声真实与域内新集补充进基准。第三步用固定零样本与少样本提示驱动单模态识别翻译模型与多模态语音大模型做转写与翻译对比，其输出进入WER、BLEU、chrF与AfriCOMET\-STL统一评测。与以高资源朗读为主的旧基准相比，关键机制差异在于显式区分旧集与新集并引入真实噪声、自发重叠与医疗术语，实际意义是暴露清洁集上的虚高泛化并检验多模态模型在长上下文翻译上的语义保真优势。在NaijaVoices豪萨语转写任务评测下，微调后Qwen2\.5\-Omni的WER为50\.54，低于微调前基线的126\.81。结论适用边界限于所覆盖语言与音频到英语翻译任务，议会噪声外的对抗噪声、语码混合、对话问答等多模态能力尚未验证，微调硬件受限于四块NVIDIA 3090 GPU的计算量且全量推理开销未系统披露。

🔗 **开源资源**

- 第三方资源：<https://speech.intron.health/> → <https://speech.intron.health/login> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.intron.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 12. [小模型微调为何压过大模型提示：印地语后纠错的规模与领域证据](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-45-b7f4e64b99/)

> 英文题目：*[Post\-ASR Correction in Hindi: Comparing Language Models and Large Language Models in Low\-Resource Scenarios](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-45-b7f4e64b99/)*

标签：#SFT #模型比较 #低资源 #语音 #语音识别

评分：**7.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音识别 | 主方法：#SFT

会议来源：[官方记录](https://aclanthology.org/2026.eacl-short.45/) · [官方 PDF](https://aclanthology.org/2026.eacl-short.45.pdf)

👥 **作者与机构**

- Rishabh Kumar：机构信息未能从会议 PDF 纯文本可靠映射
- Amrith Krishna：机构信息未能从会议 PDF 纯文本可靠映射
- Ganesh Ramakrishnan：机构信息未能从会议 PDF 纯文本可靠映射
- Preethi Jyothi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作研究印地语自动语音识别转写后的文本纠错，输入为含音素混淆、码混和切分错误的1\-best假设，输出为最小编辑后的正确转写，难点在于标注语音稀缺与形态丰富及正字法多变。方法链分三步：先用域内语音训练声学模型并解码生成噪声假设与参考配对，再以配对数据监督微调字节级ByT5与多语mT5学习源相关错误模式，最后在保留假设上对比微调小模型与零样本或少样本大语言模型的纠错输出。微调负责注入领域词表与错误先验，上下文学习仅依赖通用知识，因而前者更保守忠实而后者易过度改写并产生域外漂移。在Lahaja测试集下，mT5\-base的WER为16\.17%，低于ByT5\-small的17\.46%。字节级建模使ByT5更擅长字符级音译与词语切分，子词语义覆盖使mT5更擅长语义不一致，相对大模型的宽泛泛化形成关键机制差异，实际意义是轻量微调更适配低资源纠错。该结论适用边界是域外数据比例过高时性能仍退化，马拉地语与泰卢固语仅为初步验证，尚未验证更大规模跨域外推。原文报告延迟显示mT5\-small纠错延迟最低，显著快于大语言模型，推理开销更适合部署。

🔗 **开源资源**

- 代码相关资源：<https://github.com/cyfer0618/Post-ASR-Correction-in-Hindi> — 链接可访问（HTTP 200）
- 模型相关资源：<https://github.com/cyfer0618/Post-ASR-Correction-in-Hindi> — 链接可访问（HTTP 200）
- 第三方资源：<https://pytorch.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 13. [多人对话先找对说话人，再把文本的情绪理解教给声音和画面](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-212-8f19f964ef/)

> 英文题目：*[Emotion Recognition in Multi\-Speaker Conversations through Speaker Identification, Knowledge Distillation, and Hierarchical Fusion](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-212-8f19f964ef/)*

标签：#知识蒸馏 #多模态学习 #音视频 #语音情感识别 #说话人识别

评分：**7.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#知识蒸馏

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.212/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.212.pdf)

👥 **作者与机构**

- Li Xiao：机构信息未能从会议 PDF 纯文本可靠映射
- Kotaro Funakoshi：机构信息未能从会议 PDF 纯文本可靠映射
- Manabu Okumura：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多说话人对话情感识别以每条话语的多模态上下文为输入，为每条话语预测情感标签，难点在于多人同框时视觉归属易错、文本显著强于音频与视觉、以及中性类主导而恐惧与厌恶极度稀少。该框架先用LipSyncNet以音画同步距离挑选当前说话人脸轨，仅将真说话人视觉送入后续编码，净化视觉输入。接着以RoBERTa、Wav2Vec2\.0与TimeSformer分别抽取话语级文本、音频、视觉表示并经图网络建模对话关系，其中文本图注意力网络作为教师向音频图卷积网络与视觉图注意力网络蒸馏软标签，拉平模态能力差。随后经自适应门控与跨模态注意力完成层级融合，并以复合损失兼顾难例与少数类，输出融合情感预测。与直接拼接或后期投票不同，同步筛选在融合前净化视觉输入，蒸馏在表示层传递文本优势，复合损失在目标层缓解类别不平衡。在MELD基准下，本方法的加权F1值为67\.75，高于TelME基线的67\.30。该结论适用边界受限于英语影视多人对话与实验室双人对话，严重重叠、遮挡与跨语言跨文化外推尚未验证。融合与蒸馏部分约3M参数量，在硬件为NVIDIA RTX 3090 GPU时训练成本为30至50分钟。

🔗 **开源资源**

- 代码相关资源：<https://github.com/llllxx1628/multimodalERC> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 14. [先对齐再推理：ConLLM 用两阶段解决模态割裂与浅层融合](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-102-db05d9d686/)

> 英文题目：*[Revealing the Truth with ConLLM for Detecting Multi\-Modal Deepfakes](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-102-db05d9d686/)*

标签：#对比学习 #大语言模型 #音视频 #音频深度伪造检测

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 1.0/1.5 | 清晰度 0.6/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

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

本文处理音频、视频与音视频输入到真伪二分类的检测任务，难点在于模态碎片化导致各模态孤立预测冲突，以及浅层融合难以捕捉唇动与言语行为等细粒度跨模态语义矛盾。方法第一步分别用XLS\-R、VideoMAE与VATLM提取模态特定嵌入，并经模态特定投影映射至共享隐空间。第二步对共享嵌入做对比学习，拉近真实跨模态对并推远伪造对，输出对齐后的音频、视频与音视频嵌入。第三步将对齐嵌入送入GPT式Transformer以自注意力精炼模态间语义依赖，再拼接经Sigmoid分类头判决。与过早融合或孤立建模的已有方法不同，该设计将特征提取与语义集成显式分离，先保留模态信号再做跨模态推理，因而更敏感于语义不一致。在ASVSpoof 2019 LA基准下，ConLLM w/ GPT Weights的等错误率为0\.21%，低于MiO的0\.41%。该结论适用边界限于六个基准官方划分内的验证，对未知生成器与开放场景的泛化尚未验证，且原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://www.asvspoof.org/index2019.html> — 链接可访问（HTTP 200）
- 数据相关资源：<https://zenodo.org/records/7603208> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/OpenTAI/wild-deepfake> → <https://github.com/xingjunm/wild-deepfake> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/DASH-Lab/FakeAVCeleb> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 15. [不用听原声也能评声音：先分维标注再用文字蓝图推理的语音评价](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-151-c6d61a02b7/)

> 英文题目：*[Hearing Between the Lines: Unlocking the Reasoning Power of LLMs for Speech Evaluation](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-151-c6d61a02b7/)*

标签：#评测协议 #大语言模型 #语音 #语音质量评估

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音质量评估 | 主方法：#评测协议

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.151/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.151.pdf)

👥 **作者与机构**

- Arjun Chandra：机构信息未能从会议 PDF 纯文本可靠映射
- Kevin Miller：机构信息未能从会议 PDF 纯文本可靠映射
- Venkatesh Ravichandran：机构信息未能从会议 PDF 纯文本可靠映射
- Constantinos Papayiannis：机构信息未能从会议 PDF 纯文本可靠映射
- Venkatesh Saligrama：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为用户语音指令与两个候选语音回答，输出为内容、语音质量与副语言三个维度偏好及融合后的总体偏好，难点在于纯转录评测丢失讽刺、情感、语调与音质缺陷，而直接用音频大模型评测昂贵且不可审计。方法分两步推进：先以人类思维链标注协议做维度优先重标注并引入 \`both\_good\` 与 \`both\_bad\` 类型化平局，再以 Whisper 转录、DNSMOS 与 P\.808 音质分、韵律与 emotion2vec 等轻量信号组装成结构化文本蓝图，最后令文本大模型只做三维度判决并经确定性决策树融合成总体标签。与转录大模型和音频直接判决相比，该机制把可解释的声学证据外置为可审计文本，使大模型推理能显式利用递送线索并抑制不可接受样本上的虚假胜者。在 SPEAK BENCH 的 497 个样本上，TRACE 总体四分类准确率达 68\.6%，高于转录评测的 62\.7% 与音频评测的 61\.1%。在 S2S\-ARENA 的 314 个英文样本上，TRACE 总体四分类准确率达 57\.0%，高于音频评测的 47\.5% 与转录评测的 45\.9%。结论仅在英语指令跟随与感知表达场景得到验证，跨语言、文化表达差异与细粒度韵律尚未检验，且依赖上游提取器精度。在 SPEAK BENCH 上以 GPT\-4o 计费时 TRACE 总成本为 4\.16 美元，约为音频评测 12\.53 美元的三分之一。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 16. [认不出带口音的英语：码切换语音识别先补口音英语再谈排序](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-242-0de3aaa5e9/)

> 英文题目：*[Improving Language Identification for Code\-Switched Speech: The Pivotal Role of Accented English](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-242-0de3aaa5e9/)*

标签：#评测协议 #LoRA #多语言 #语音 #语言识别

评分：**6.9/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语言识别 | 主方法：#LoRA

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.242/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.242.pdf)

👥 **作者与机构**

- Adyasha Patra：机构信息未能从会议 PDF 纯文本可靠映射
- Dhiraj Kumar Sah：机构信息未能从会议 PDF 纯文本可靠映射
- Preethi Jyothi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语码混合语言识别的输入为单句内交替出现矩阵语言与嵌入英语的语音，输出为按概率排序的语言集合，实际难点在于带矩阵语言口音的英语常被预训练模型漏检或误排为乌尔都语等近亲语言。为此该工作先按已知矩阵语言选定对应口音的英语单语数据，如印地口音英语对应印地语\-英语混合，使适配目标聚焦真正的漏检来源。该选中数据的输出进入第二步，仅监督英语类别对MMS\-LID\-126做秩为4的低秩适配微调，用80条样本学习口音英语表征而不重写多语言分类面。第二步模型的概率分布进入第三步排序感知的LangRank评估，对语码与单语分别计算矩阵语言与英语的排名得分以暴露虚报英语的过拟合。在印地语\-英语语码混合测试集下，MMS\-LID经LoRA微调后的EM分数为915，高于基线模型的EM分数509。相比直接在语码语句上微调，口音英语微调保留了单语能力并避免在纯印地语上虚报英语，具有小样本可部署的实际意义。该结论适用边界受限于英语为嵌入语且矩阵语言已知的四对语言，尚未验证非英语混合与未知矩阵语言的外推。训练成本为在单块RTX A5000上用80条样本微调约4分钟。

🔗 **开源资源**

- 第三方资源：<https://accent.gmu.edu/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 17. [只拉伸音频位置、不动文本位置：部分 YaRN 与虚拟长音频训练的长音频泛化](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-286-9f2982a622/)

> 英文题目：*[Extending Audio Context for Long\-Form Understanding in Large Audio\-Language Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-286-9f2982a622/)*

标签：#数据增强 #音频大模型 #长音频处理 #音频问答

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#数据增强

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.286/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.286.pdf)

👥 **作者与机构**

- Yuatyong Chaichana：机构信息未能从会议 PDF 纯文本可靠映射
- Pittawat Taveekitworachai：机构信息未能从会议 PDF 纯文本可靠映射
- Warit Sirichotedumrong：机构信息未能从会议 PDF 纯文本可靠映射
- Potsawee Manakul：机构信息未能从会议 PDF 纯文本可靠映射
- Kunat Pipatanakul：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

大型音频语言模型以分钟级长音频为输入、跨段问答为输出，需将长音频按30秒非重叠分块经Whisper编码为音频Token后与文本Token拼接送入RoPE文本骨干解码，难点是音频位置外推至未见区间导致长程检索失效。方法链首先将长音频分块独立编码并拼接，使统一输入序列进入位置重映射；接着训练无关的部分YaRN仅重写音频段位置标识并保留文本位置，把长音频映射回熟悉区间以保持文本能力。然后虚拟长音频训练将该拉伸反转为训练时位置增强，对每样本随机采样虚拟源长度并压缩或拉伸到真实长度，使模型见过稠密连续长度分布后可叠加推理期拉伸扩展覆盖。与整体拉伸全部上下文的位置插值和YaRN相比，关键差异是模态解耦的二维分组与温度缩放只作用于音频维度，避免扰动文本位置而保留基座语言能力。在YODAS2\-MCQA评测设置下，从2分钟观测上下文拉伸的Partial YaRN在10分钟任务的准确率为48\.00%，高于Vanilla基线的22\.00%。其结论适用边界受限于选择题式信息检索与最长10分钟验证，开放生成与其他长音频基准尚未验证。训练成本对应原文披露的单卡Nvidia H100 GPU硬件环境与LoRA微调设置。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 18. [越南语识别缺的不是模型，而是可复用的清洗与对齐流水线](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-345-3f63731376/)

> 英文题目：*[Vietnamese Automatic Speech Recognition: A Revisit](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-345-3f63731376/)*

标签：#数据集 #数据集构建 #语音识别 #强制对齐

评分：**6.8/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#数据集构建

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.345/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.345.pdf)

👥 **作者与机构**

- Thi Vu：机构信息未能从会议 PDF 纯文本可靠映射
- Linh The Nguyen：机构信息未能从会议 PDF 纯文本可靠映射
- Dat Quoc Nguyen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

越南语自动语音识别输入为多口音、自发与朗读混杂音频，输出为带标点、大小写和词级时间戳的规范文本，难点在于开源语料转写错误多、格式不统一且缺乏对齐信息。该流水线先采集重采样与清洗，再对无转写音频用双模型互校验补齐转写、对有转写音频用单模型重解码过滤，随后用微调模型恢复标点大小写并经归一化一致性检查保留无改词样本。数字转口语文本后送入WhisperX框架与越南语微调wav2vec2对齐生成音节级时间戳，最后按映射合并回数字形式并合并时间区间。与直接合并原始语料或依赖推理后处理标点的做法不同，该链路把格式恢复与对齐内建于数据端，避免了识别输出数字与对齐所需口语形式之间的失配。在PhoASR测试集下，PhoASR\-whisper\-small\-469h的O\-WER为12\.46%，低于PhoWhisper\-small的33\.90%。其结论适用边界限于越南语新闻、访谈、医疗和朗读域，中部口音与VLSP2020子集失败条件更明显，跨语言与远场噪声外推尚未验证。训练成本受限于硬件为4块NVIDIA A100 40GB上40轮微调，3100小时版本因资源受限仅训练15轮。

🔗 **开源资源**

- 第三方资源：<https://github.com/binhvq/news-corpus> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/m3hrdadfi/soxan> — 链接可访问（HTTP 200）
- 第三方资源：<https://sourceforge.net/projects/sox/> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/openai/whisper-small> — 暂时无法访问
- 第三方资源：<https://vlsp.org.vn/vlsp2020/eval/asr> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/facebook/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 19. [为俄语补上多模态标尺：MERA Multi 如何把 18 个任务拧成一套可复现评测](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-94-667b23ffaf/)

> 英文题目：*[Multimodal Evaluation of Russian\-language Architectures](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-94-667b23ffaf/)*

标签：#基准测试 #数据集 #基准设计 #音频问答

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

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

该基准输入为俄语指令文本叠加图像或音频或视频证据，要求模型生成多选或短自由文本答案，难点在于西里尔文字识别、苏联民俗常识与跨模态推理耦合，且此前无俄语多模态评测标准。方法先以感知、推理、知识三类体系映射技能缺口，其输出直接决定18个任务的新建与改编构成。接着以多变体块提示将同一任务送入严格生成式评测，其自由输出进入双指标聚合。然后以精确匹配加裁判模型语义分计算任务分与总分，其总分排序进入基线对比与防护分析。与已有英语中心基准的关键差异是文化原生构建而非翻译移植，并将水印加成员推断作为可复用防护流程，实际意义在于支撑非英语文化感知评测。在视频模态基准下，Qwen2\.5\-VL\-72B\-Instruct的Total分数为0\.63，低于人类基线的0\.92。结论适用边界限于俄语理解型问答与短答案生成，尚未验证长视频、开放对话与偏见安全场景。裁判训练与评测的硬件为单块A100且推理开销受硬件软件栈波动影响，跨机复现分数可能受限。

🔗 **开源资源**

- 模型相关资源：<https://hf.co/deepvk/RuM> → <https://huggingface.co/deepvk/RuM> — 暂时无法访问
- 数据相关资源：<https://hf.co/datasets/pingzhili/vqa_v2> → <https://huggingface.co/datasets/pingzhili/vqa_v2> — 暂时无法访问
- 第三方资源：<https://github.com/vllm-project/vllm> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.deepl.com/products/api> → <https://www.deepl.com/en/products/api> — 链接可访问（HTTP 200）
- 第三方资源：<https://app.elementary.center/> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 20. [归纳一次反复复用：从三段音频中提炼可迁移的听答步骤](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-18-7f7b7136a1/)

> 英文题目：*[Task\-Level Instructions Induction for Audio Question Answering from Few Examples](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-18-7f7b7136a1/)*

标签：#提示学习 #音频大模型 #高效推理 #少样本 #音频问答

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#提示学习

会议来源：[官方记录](https://aclanthology.org/2026.eacl-short.18/) · [官方 PDF](https://aclanthology.org/2026.eacl-short.18.pdf)

👥 **作者与机构**

- Po\-Chun Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Hen\-Hsen Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Hsin\-Hsi Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频问答需从连续语音中转写问题与选项、辨别声学事件并完成多步推理，人工标注音频思维链需顺序聆听与整合声学语言信息而成本极高，且直接拼接示例音频的少样本提示反而干扰逐步推理。先以固定元提示输入三组带答案的音频问答示例，负责单次多模态分析以抽取推理模式并输出结构化分析，再以该分析为输入将其归纳为包含输入格式与操作步骤的纯文本任务指令并输出可复用指令，最后在推理时以该指令与目标音频问题为输入直接求解而不再输入示例音频，使任务级一次性归纳结果进入每次推理。与每问重复处理多段示例音频的少样本提示及每次重新生成策略的战略思维链不同，该方法将示例消耗从推理侧移到任务级一次性归纳，从而消除推理干扰并降低输入负担。在BBA基准下，Gemini 2\.5 Flash的准确率为98\.33%，高于零样本思维链的91\.35%。跨模型迁移显示由强模型归纳的指令可直接提升弱模型推理，并在十八组模型基准组合上经检验显著优于已有提示方法。推理开销方面消除示例音频使输入成本较三样本提示大幅下降，而任务级一次性归纳成本摊薄后可忽略。其适用边界受限于预定义任务类别与强指令跟随的大型音频语言模型，弱模型自归纳不稳定且示例增至五组时多模型回落，噪声音频鲁棒性与任务边界不清场景尚未验证。

🔗 **开源资源**

- 第三方资源：<https://www.videolan.org/vlc/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 21. [文本有感情，声音不一定跟：跨模态情感相关的限度](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-136-94b00c07ca/)

> 英文题目：*[The Correlation Between Emotion in Text and Speech Segments is Limited: A Cross\-Modal Study](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-136-94b00c07ca/)*

标签：#统计分析 #大语言模型 #语音 #语音情感识别

评分：**6.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音情感识别 | 主方法：#统计分析

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.136/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.136.pdf)

👥 **作者与机构**

- David Lindevelt：机构信息未能从会议 PDF 纯文本可靠映射
- Suzan Verberne：机构信息未能从会议 PDF 纯文本可靠映射
- Joost Broekens：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是从语句级文本预测对应语音片段的情感，输入为播客、有声书与TED演讲的文本及其对应音频，输出为效价、唤醒度与支配度三维连续情感值，难点在于文本语义情感与人声韵律情感并非同源且受体裁与语境影响。方法链第一步是用llama3\.3、llama3\.1等8个大语言模型以结构化提示从文本输出三维值，并在ANET人类标注上检验文本侧可靠性。第二步是用wav2vec2与WavLM两类语音模型从音频输出三维值，并在MSP Podcast人类标注上验证语音侧可靠性后将其预测作为无标注语料的代理真值。第三步是将文本预测与语音预测及人类标注按体裁计算Pearson相关，并用扩展前后文复测以检验上下文与体裁的调节作用。与已有单模态情感识别不同，本文不追求单侧精度而是量化文本与语音情感的跨模态对应，并把体裁与上下文作为调节变量检验其稳定性。在MSP Podcast与Libriheavy语料对比评测下，llama3\.1:70b文本预测与Wav2Vec2语音预测在Valence维度的Pearson相关为\.793，高于同一组合在MSP Podcast上的\.630。结论的适用边界受限于英语叙述类短片段、情感覆盖不均及所用模型组合，尚未验证对话、多语或强表演性语音的外推，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://www.ted.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://ollama.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 22. [背景噪声也能操纵语音大模型：从数字优化到空中播放的定向与非定向攻击](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-66-e9659d5842/)

> 英文题目：*[Attacker’s Noise Can Manipulate Your Audio\-based LLM in the Real World](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-66-e9659d5842/)*

标签：#数据增强 #音频大模型 #音频安全 #语音识别 #语音唤醒

评分：**6.5/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音唤醒 | 主方法：#数据增强

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.66/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.66.pdf)

👥 **作者与机构**

- Vinu Sankar Sadasivan：机构信息未能从会议 PDF 纯文本可靠映射
- Soheil Feizi：机构信息未能从会议 PDF 纯文本可靠映射
- Rajiv Mathews：机构信息未能从会议 PDF 纯文本可靠映射
- Lun Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文针对音频大语言模型在麦克风采集语音与环境声混合输入下执行转写与助手动作时，被空中播放背景噪声操纵的风险，难点在于声传播的时移、混响与器件失真会抹除数字域扰动。首先以困惑度损失对限幅波形做梯度优化，植入“Hey Qwen”等指定唤醒与指令文本，输出可独立触发的候选目标噪声；接着将该优化思想转用于无差别干扰，以音频编码器特征距离最大化构造扰动并叠加到LibriSpeech正常语音上，使转写偏离干净输入；然后在优化内环引入平移、加噪与频谱掩蔽增强以换取跨信道鲁棒性，录制信号再送入Qwen2\-Audio解码并做字符串匹配验证。与仅追求数字域越狱的AdvWave相比，关键差异是将声传播失真显式建模为优化内增强而非事后测试，因而保留了空中可触发性。在LibriSpeech语料评测设置下，对抗噪声的词错率WER为0\.55±1\.69，高于随机噪声的0\.21±0\.85。结论的适用边界受限于白盒可微模型与近距离单扬声器到手机链路，跨模型、跨设备与强降噪防护下的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 23. [按语系共享连接器：多语言语音大模型何时该合练、何时该单练](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-36-39d3ace92e/)

> 英文题目：*[Language Family Matters: Evaluating SpeechLLMs Across Linguistic Boundaries](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-36-39d3ace92e/)*

标签：#Adapter #音频大模型 #鲁棒性 #多语言 #语音识别

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#Adapter

会议来源：[官方记录](https://aclanthology.org/2026.eacl-short.36/) · [官方 PDF](https://aclanthology.org/2026.eacl-short.36.pdf)

👥 **作者与机构**

- Yuchen Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Ravi Shekhar：机构信息未能从会议 PDF 纯文本可靠映射
- Haralambos Mouratidis：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究处理多语言自动语音识别，输入为多语种语音波形，输出为对应语言转写文本，难点在于众包与精选信道差异、单语言数据稀疏以及冻结大语言模型解码时的重复与语言漂移。方法形成三步链：首先冻结Whisper\-large\-v3提取帧级声学嵌入，保留多语声学表征。接着可训练连接器对嵌入下采样拼接并经两层线性加高斯误差线性单元投影到大语言模型嵌入空间，完成模态对齐。然后冻结Gemma\-2\-2b或Salamandra\-2b以固定英文提示自回归解码，由对齐后的语音表征生成转写。与逐语言独立训练语言连接器的已有做法不同，关键机制是按语系合并多语言数据训练共享的语系连接器，利用亲缘语言音系形态重叠提供归纳偏置并减少参数量。在FLEURS语料Salamandra主干评测设置下，FAMCONN的词错率（Word Error Rate，WER）为15\.67%，低于LANGCONN的23\.37%。其适用边界受限于谱系归属不等于声学相似，Afro\-Asiatic和Dravidian等内部异质语系会出现退化，且跨域增益方向不对称并依赖目标域变异。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 24. [AudioJudge：拼接与拆分提示如何让大音频模型做语音评测](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-168-1217e8baad/)

> 英文题目：*[AudioJudge: Understanding What Works in Large Audio Model Based Speech Evaluation](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-168-1217e8baad/)*

标签：#模型集成 #音频大模型 #模型评估 #语音 #语音质量评估

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

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

本文研究大音频模型成对语音评测，输入为两段待比音频加文字指令与转录参考，输出为优劣或是否匹配的结构化判定，难点在于副语言与韵律线索细微主观且专用质量模型分散难跨域复用。AudioJudge先以成对比较提示让大音频模型直接输出推理与标签，使判定可解析进入后续拼接优化。接着将上下文示例与待测指令及两段音频分别拼接为连续音频流，以减少音频文本交替造成的模态切换负担，其输出作为统一听觉上下文送入模型。最后针对综合指令按词汇内容与副语言表现与语音质量拆分三个专用法官并多数投票集成，得到兼顾内容与表达的最终排序。相对以往单任务微调质量网络，连续拼接保留跨段可比上下文而无需大量标注，多方面集成避免单一提示混淆内容与表达维度。在ThaiMOS语音质量评估任务下，AudioJudge的准确率为64\.0，高于UTMOS的53\.5。该结论适用边界受限于英语自然度与中文质量与泰语发音等已测语料，语速与说话人辨别及强噪声与位置冗长偏差下仍存在失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/tatsu-lab/alpaca_eval> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 25. [既要指认合成语音来自哪台生成器，又要识破没见过的新生成器](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-250-8738a25c6e/)

> 英文题目：*[Bridging Attribution and Open\-Set Detection using Graph\-Augmented Instance Learning in Synthetic Speech](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-250-8738a25c6e/)*

标签：#图神经网络 #零样本 #语音 #语音伪造检测

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音伪造检测 | 主方法：#图神经网络

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.250/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.250.pdf)

👥 **作者与机构**

- Mohd Mujtaba Akhtar：机构信息未能从会议 PDF 纯文本可靠映射
- Girish：机构信息未能从会议 PDF 纯文本可靠映射
- Farhan Sheth：机构信息未能从会议 PDF 纯文本可靠映射
- Muskaan Singh：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务输入为16kHz重采样语音波形，输出需同时归因至已知合成器并拒识训练未见开放集生成器，难点在于新型商业系统与歌唱等多变声学下的泛化。SIGNAL先经冻结语音基础模型平均池化抽取话语级嵌入并用卷积编码器压缩至64维潜表示。随后构建以查询为中心的生成器原型图并经多头自注意力在类别间传播推理得到图打分。同时距离加权k近邻在同一嵌入空间做实例级相似度估计，两路概率凸组合后按0\.5置信度阈值分流至已知类或未知类。与孤立打分的全连接或卷积分类器相比，关键差异是以图传播建模类别相对结构并以外挂近邻承担开放集拒绝，具有实际取证意义。在DiffSSD验证集下，GNN分支的EER为4\.37%，从KNN分支的5\.52%降至4\.37%。该结论适用边界限于DiffSSD与零样本SingFake英语朗读加多语歌唱范围，对多未知源细粒度聚类等尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/microsoft/wavlm-base> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/openai/whisper-base> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 26. [讲法本身就是攻击面：叙事语音如何绕过音频大模型的文本对齐](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-278-91aefba5dc/)

> 英文题目：*[Now You Hear Me: Audio Narrative Attacks Against Large Audio–Language Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-278-91aefba5dc/)*

标签：#提示学习 #音频大模型 #音频安全 #语音 #音频问答

评分：**6.4/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#提示学习

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.278/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.278.pdf)

👥 **作者与机构**

- Ye Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Haibo Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Yaoning Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Jun Zhuang：机构信息未能从会议 PDF 纯文本可靠映射
- Haohan Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为有害文本指令，输出为目标大音频语言模型的文本回复，难点在于端到端模型同时编码语义与韵律情感而现有安全对齐多按文本校准。方法链分三步：首先以DeepInception式嵌套叙事构造或AdvWave式迭代改写优化文本载体，负责隐藏恶意意图并输出可朗读脚本。接着用GPT\-4o mini TTS按权威命令与情感诉求等五种心理风格模板合成音频，负责将社会影响信号编码为语调与节奏以上一步脚本为输入。最后将音频直送目标模型并以GPT\-4o担任裁决器判定越狱，负责度量合规偏向且以前一步音频为唯一输入。与把音频视作文本包装或低层信号扰动的已有音频越狱不同，该工作把送达风格本身作为攻击面，其实测意义在于揭示文本对齐无法覆盖副语言诱导的合规风险。在JailbreakBench基准下，Ours方法的攻击成功率指标为66\.67%，高于基线Baseline的40\.00%。其结论适用边界受限于英语合成语音与三款端到端模型的验证范围，对Qwen2\.5\-Omni等小模型易出现提前截断与重复循环的失败条件而非真实拒答。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://openai.com/index/hello-gpt-4o/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 27. [把只有发音的埃及儿童对话变成可计算的带符正字法：ARABABYTALK\-EGY 如何标注与设基准](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-102-5ffc895827/)

> 英文题目：*[Computational Benchmarks for Egyptian Arabic Child Directed Speech](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-102-5ffc895827/)*

标签：#基准测试 #数据集 #数据集构建 #语言习得 #语音识别

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#数据集构建

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.102/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.102.pdf)

👥 **作者与机构**

- Salam Khalifa：机构信息未能从会议 PDF 纯文本可靠映射
- Abed Qaddoumi：机构信息未能从会议 PDF 纯文本可靠映射
- Nizar Habash：机构信息未能从会议 PDF 纯文本可靠映射
- Owen Rambow：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

针对埃及阿拉伯语儿童导向言语仅有国际音标转写而缺乏可用正字法与形态标注，无法直接支撑文本与语音评测这一难点，本文构建开放语料ARABABYTALK\-EGY并建立双任务基准。预处理先清洗转写符号并保留儿童误读映射使每句与原始记录对齐，其词表进入大语言模型生成完全带元音符号的方言常规正字法初稿。随后专家按近似词根分批修订正字法并赋予词元与核心词性完成词典化，最后将词典回贴到全部会话并做语境校验与音频核查。与直接复用通用埃及语资源相比，该工作以发音到带符正字法再到形态的三层对齐为机制差异，使儿童语音可被形态消歧与语音识别系统直接评测，具有体裁专用训练价值。在改变音频输入长度的ASR基准下，30s切分的WER为89\.6%，低于60s切分的112\.4%。该结论适用边界限于亚历山大地区10名1\.6至3\.7岁儿童单次半小时自发互动场景，尚不能外推至其他方言或朗读式干净语音，且低质音频下识别仍受限。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 28. [单个都会、合在一起就不会：ART 要求模型同时听懂语音与声音再推理](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-42-1d94f1effa/)

> 英文题目：*[A Benchmark for Audio Reasoning Capabilities of Multimodal Large Language Models](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-42-1d94f1effa/)*

标签：#基准测试 #基准设计 #环境声 #语音 #音频问答

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

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

输入为包含口语问题与待推理语音或声音片段的单段音频，输出为是否二值判断，难点在于必须联合识别语音内容与非语音事件并完成计数比较与属性推理，单转写或单字幕管线无法求解。构建链分为任务征集与规则过滤以剔除主观与不可判定任务，模板实例化以控制标签均衡与可再生扩展，语音克隆与声音库拼贴合成以统一响度与衔接，最后经人工校验形成可复现评测流程。与仅孤立评测识别或分类的已有音频基准相比，该基准把问题本身嵌入音频并要求跨录音比较，因而能暴露级联系统也难以跨越的组合失效。人类在216样本的ART\-H子集上达到92\.90%准确率，而最优级联系统在是否设置下仅56\.21%绝对准确率，最优音频大模型仅54\.73%，基本处于随机水平。结论仅适用于清晰合成英语主导的受控拼贴场景，未验证噪声混响多语自发语音与音乐专业知识的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://openai.com/index/hello-gpt-4o> → <https://openai.com/index/hello-gpt-4o/> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 29. [发音纠错不能只给分数：让音频语言模型说出错在哪、怎么练](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-190-923151c2cd/)

> 英文题目：*[Unlocking Large Audio\-Language Models for Interactive Language Learning](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-190-923151c2cd/)*

标签：#教育 #数据集 #指令微调 #音频大模型 #语音交互

评分：**6.3/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音交互 | 主方法：#指令微调

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.190/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.190.pdf)

👥 **作者与机构**

- Hongfu Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhouying Cui：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangming Gu：机构信息未能从会议 PDF 纯文本可靠映射
- Ye Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作面向朗读式聊天发音训练，输入为学习者朗读音频与已知标准文本，输出为误读词列表及每个误读词的错误解释与可操作纠正建议，难点在于强转写模型会纠正口音错误并丢弃细粒度声学证据，导致基于转写差异的检测失效且反馈不直观。方法链分为三环：先基于L2\-Arctic人工音素标注用GPT\-4o粗到细生成词级解释与建议对并经人工校验，构成L2\-Arctic\-plus基准并以前一步的校验后标注作为后两环评测真值；再以级联ASR加LLM与现有音频语言模型做词级检测与生成评测，揭示其漏检与幻觉问题并以前一步基线结果作为改进参照；最后以Whisper编码器加两层线性投影器加LLM主干做两阶段指令微调，先在Common Voice英文子集上只训投影器做声学对齐，再在合成训练对上联合训练投影器与低秩适配参数以直接优化检测与生成目标。相对级联转写，该端到端方案保留潜在声学表征并避免解码端语言偏置，因而更适合误读检测与建议生成。在L2\-Arctic\-plus测试集下，Whisper Large加Llama\-3\.1\-8B的F1为62\.8，高于Wav2vec2 Base加Llama\-3\.1\-8B级联基线的26\.8。该结论适用边界受限于受控朗读英语非母语口音，对自由对话、韵律评估与跨语言泛化的外推尚未验证。在硬件为2张RTX A40条件下，声学对齐阶段训练成本约需12\-14 GPU小时，任务指令微调约需4\-6 GPU小时，全量评测推理开销约需4\-6 GPU小时。

🔗 **开源资源**

- 第三方资源：<https://github.com/microsoft/Pengi> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/0nutation/SpeechGPT/tree/main/speechgpt> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 30. [按语义密度生成：SEAM 用编解码对齐弥合语音与文本的粒度差](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-112-0f11e60a3c/)

> 英文题目：*[SEAM: Bridging the Temporal\-Semantic Granularity Gap for LLM\-based Speech Recognition](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-112-0f11e60a3c/)*

标签：#注意力机制 #大语言模型 #语音 #语音识别

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#注意力机制

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.112/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.112.pdf)

👥 **作者与机构**

- Junseok Oh：机构信息未能从会议 PDF 纯文本可靠映射
- Ji\-Hwan Kim：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

自动语音识别需将连续声学语音转写为离散文本，难点在于语音表征随时间时长扩展而文本词元随语义密度变化，固定速率输入偏离了大语言模型预训练分布。本文提出语音编码器解码器对齐模块SEAM，先以冻结Whisper\-large\-v2编码器抽取语音特征，再以可训练解码器经交叉注意力以文本嵌入为查询生成语义空间对齐嵌入。该对齐嵌入经最近邻查找离散化后作为语音条件上下文，连同转写指令送入经LoRA指令微调的冻结Qwen3\-4B\-Instruct完成转写，并辅以首词元引导纠正起始偏差。与投影加下采样和固定查询Q\-Former的时长决定速率机制不同，该方法以语义密度决定序列长度从而匹配自然文本分布，平均约2\.99词元每秒。在TED\-LIUM\-v2跨域评测设置下，SEAM的WER为4\.7%，低于SLAM\-ASR的8\.8%。该结论适用边界受限于仅用LibriSpeech960小时英语朗读语音训练并泛化至TED演讲的验证，尚未验证多语言、自发对话及噪声场景的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 31. [MAViS：用多智能体分阶段协作把一句话变成一分钟有声故事短片](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-101-6621077c64/)

> 英文题目：*[MAViS: A Multi\-Agent Framework for Long\-Sequence Video Storytelling](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-101-6621077c64/)*

标签：#模型融合 #音视频 #音乐 #语音 #音视频生成

评分：**6.0/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音视频生成 | 主方法：#模型融合

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.101/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.101.pdf)

👥 **作者与机构**

- Qian Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Ziqi Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Ruoxi Jia：机构信息未能从会议 PDF 纯文本可靠映射
- Paul Debevec：机构信息未能从会议 PDF 纯文本可靠映射
- Ning Yu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理由一句用户提示生成约1分钟多镜头有声故事视频的任务，难点是长时叙事连贯性、跨镜头角色身份一致性，以及现有模型只能做短片段与单简单动作的能力错配。方法第一步为剧本写作，产出标题、人物定义与分镜大纲和配音字幕，并受结构内容风格三维指南约束。方法第二步为镜头设计与人物建模，将大纲扩展为背景姿态动作道具机位运镜灯光七元组，并自动生成正视图与环绕视频以训练全剧共享多主体低秩适配器。方法第三步承接上游七元组与适配器进行关键帧生成，再将首帧扩展为视频片段并合成旁白与背景音乐，全阶段复用探索检查增强闭环。与已有方法关键差异是以规避同背景连续镜头与复杂动作的指南及跨阶段评审精炼提示与候选，其实际意义是提升脚本与生成模型的兼容性与长序列可控性。在自建20个提示词的评测下，MAViS的关键帧CLIP得分为34\.22，高于Mora的关键帧CLIP得分的33\.98。该结论适用边界受限于温和拼接式叙事，尚未验证人物对话交互与复杂运镜场景，且推理开销方面单片在双H100硬件上平均耗时13\.63小时，失败条件下评估器对视觉内容打分可靠性不足。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 32. [把多模态 token 推迟送入：在中间层汇合为何能省算力](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-332-cf24208228/)

> 英文题目：*[DeepInsert: Early Layer Bypass for Efficient and Performant Multimodal Understanding](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-332-cf24208228/)*

标签：#多模态学习 #大语言模型 #高效推理 #音频理解

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频理解 | 主方法：#多模态学习

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

多模态语言模型需将编码器输出的多模态令牌与文本提示拼接后送入大语言模型，冗长多模态上下文贯穿全部层导致交互冗余与开销，难点在于早期层跨模态交互稀少却仍消耗全部计算。先将文本提示分词嵌入并送入全部Transformer层进行语言建模，输出缓存的语言隐状态以保留深度语义演化。再将多模态编码器特征经投影模块映射到语言嵌入空间，输出对齐后的多模态令牌，使其维度与缓存的语言隐状态兼容可拼接。最后在选定中间层将对齐令牌按原始交错顺序与缓存语言隐状态重组并统一位置编码，重组序列共同经过剩余层完成跨模态融合与自回归生成，输出文本回答。与首层拼接及删减令牌式剪枝不同，该方法属于晚进入而非丢弃信息，只跳过多模态早期无效交互且复用基线超参数重训，实际意义在于同时降低训练与推理负担并兼容剪枝。在Pubchem324k分子描述评测下，DeepInsert\-9的BLEU\-4为27\.2，高于基线的26\.4。音频与分子可压缩约一半深度而视觉在第8层后衰减更快，插入层仍需经验扫描选择，其免重训直接移植与更深层外推尚未验证，构成适用边界受限。推理开销随插入层后移下降，在80GB A100等硬件上单次前向时间显著缩短，但扫描多层候选带来额外训练成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 33. [从快速重复音节到可解释的重度判断：CLINIC\-GENIE 如何把分类、归因和病历类比装进一条管线](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-275-2b3576c523/)

> 英文题目：*[Diagnosis of Dysarthria Severity and Explanation Generation Using XAI\-Enhanced CLINIC\-GENIE on Diadochokinetic Tasks](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-275-2b3576c523/)*

标签：#多模态学习 #检索增强 #可解释性 #语音 #病理语音评估

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-eacl.275/) · [官方 PDF](https://aclanthology.org/2026.findings-eacl.275.pdf)

👥 **作者与机构**

- Jihyeon Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Insung Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Myoung\-Wan Koo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务以pa、ta、ka及pa\-ta\-ka四类DDK录音与性别为输入，输出说话人级三级严重度标签与覆盖发声、构音、韵律及总体的韩语自然语言解释，难点在于重度样本稀少且黑盒嵌入难以对应可治疗的临床特征。CLINIC先将临床可解释声学特征经全连接映射为嵌入，并将梅尔谱图经残差网络与Wav2Vec 2\.0经交叉注意力融合为语音嵌入后拼接分类，对每条话语预测严重度再经多数投票得到患者级标签。随后GENIE以四任务预测分、特征数值、Shapley归因与检索到的相似病例为条件构建提示，调用大语言模型按归因权重分解推理并生成四维度患者友好报告。与仅用可解释特征或仅融合单一语音表征不同，该链条把可解释特征作为主干并让深度嵌入补足重度召回，同时把归因与病例显式送入生成器以约束幻觉并对齐临床语言。在测试集评测设置下，CLINIC的平衡准确率为0\.952，高于仅用CEAFs基线的0\.779。专家评测中完整配置保真度达4\.94/5且重度准确率为1\.000，表明无漏检高风险病例的临床安全性提升。该结论的适用边界受限于卒中后韩语DDK语料与多数投票机制，在不同病因与仅含连续音节的场景下性能下降等尚未验证的外推仍需检验，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 34. [低资源 TTS 要换声不要换口音：多语言训练跨语言迁移为何更稳](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-16-01fb0947c0/)

> 英文题目：*[Exploring Cross\-Lingual Voice Conversion Methods for Anonymizing Low\-Resource Text\-to\-Speech](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-short-16-01fb0947c0/)*

标签：#迁移学习 #跨语言 #低资源 #说话人匿名化 #语音转换

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#说话人匿名化 | 主方法：#迁移学习

会议来源：[官方记录](https://aclanthology.org/2026.eacl-short.16/) · [官方 PDF](https://aclanthology.org/2026.eacl-short.16.pdf)

👥 **作者与机构**

- Shenran Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Aidan Pine：机构信息未能从会议 PDF 纯文本可靠映射
- Mengzhe Geng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究处理低资源文本到语音中的说话人匿名化，输入为nêhiyawêwin与SENĆOTEN文本，输出为剥离原始音色但保持自然度与可懂度的语音，难点在于说话人极少且社区内易识别，匿名强度与口音韵律保持难以兼顾。方法以StyleTTS2为统一底座，先在单语语料上训练无转换基线，以随机同说话人音频提取风格嵌入指导合成，为后续匿名提供参照起点。接着在冻结模型上检验免训练路径，前者对风格嵌入做平均、性别偏移与加噪，后者将基线合成波形送入预训练SeedVC做波形级音色替换，其输出质量与相似度直接与基线对比。最后将低资源语料与LibriTTS\-R英语数据混合从头训练多语言模型，在风格编码器与文本编码器处加入可学习语言嵌入以解耦语言与音色，推理时以英语参考音频的风格嵌入引导跨语言迁移合成。相对推理扰动易残留原音色与外挂转换损伤质量口音的缺陷，语言嵌入使模型在共享多说话人表示的同时保留目标语言置信度，从而实现更稳定的跨语言匿名。在CRK测试集评估下，CRK\-ENG带语言嵌入Custom设置的预测PESQ为3\.92，高于单语无转换基线的3\.83。该结论适用边界受限于仅两种语言且测试说话人均在训练中出现、仅经预测式客观指标验证而尚未验证人工听感与未见说话人外推，训练硬件为第一阶段两块A100\-40GB与第二阶段一块A100\-40GB。

🔗 **开源资源**

- 第三方资源：<https://github.com/Plachtaa/seed-vc> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 35. [语义手势补上文本加音频的缺口：多方对话保持与让渡预测](/posts/conference-eacl-2026-conference-paper-id-2026-findings-eacl-106-19b3504555/)

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

多方对话需在停顿边界判断同一说话人保持还是交出话轮，输入为文本语音与上身运动，输出为保持/交出二分类，难点在于含糊过渡处词义与韵律信号弱且语义手势与话语结构对齐弱、标注主观性强。该工作先在多方桌游运动语料上补充表意隐喻指示话语四类语义手势标注并按200毫秒静音阈值切分停顿单元得到约12k实例，为后续建模提供语义监督与评测单元。接着用预训练句子嵌入与Wav2Vec2抽取文本与音频表征，并用向量量化变分自编码器加语义分类器学习手势表征，使手势编码携带类型语义。然后以门控混合专家网络按上下文动态加权三路专家输出并经线性层预测，门控权重显式建模互补性。与拼接或低秩融合固定处理多模态不同，语义对齐使手势与语音文本更易对齐调用，从而在语音模糊处补足意图信号。在DnD Gesture\+\+测试集任务下，Text\+Audio\+Gesture模型的宏平均F1指标为69\.9，高于Text\+Audio基线的67\.9。该结论适用边界受限于游戏域内停顿单元二分类，尚未验证会议任务型对话跨文化场景及重叠语音与在线流式决策，训练成本对应硬件为单块NVIDIA V100上批量32训练20轮。

🔗 **开源资源**

- 第三方资源：<https://archive.mpi.nl/tla/elan> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/m-bain/whisperX> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 36. [把共有的病和各自的信号分开：DIVINE 的多模态解耦评估](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-248-f3db9e13eb/)

> 英文题目：*[DIVINE : Coordinating Multimodal Disentangled Representations for Oro\-Facial Neurological Disorder Assessment](/posts/conference-eacl-2026-conference-paper-id-2026-eacl-long-248-f3db9e13eb/)*

标签：#多模态学习 #多任务学习 #变分自编码器 #音视频 #病理语音评估

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#病理语音评估 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.eacl-long.248/) · [官方 PDF](https://aclanthology.org/2026.eacl-long.248.pdf)

👥 **作者与机构**

- Mohd Mujtaba Akhtar：机构信息未能从会议 PDF 纯文本可靠映射
- Girish：机构信息未能从会议 PDF 纯文本可靠映射
- Muskaan Singh：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为同步口面部视频与语音波形，输出为三分类诊断（健康对照 Healthy Control、肌萎缩侧索硬化 ALS、卒中 Stroke）与严重程度估计，难点在于病理运动信号微弱、双模态时序耦合且临床评分主观易变。所提解耦变分信息网络 Disentangled Variational Information Network（DIVINE）先用冻结的视觉基础模型 Vision Foundation Model（VFM）与语音基础模型 Speech Foundation Model（SFM）抽取表征并做一维卷积局部时序精炼，再经窗口级变分自编码器 Variational Autoencoder（VAE\_window）压缩短时动态并全局平均池化，随后在话语级变分自编码器 VAE\_utterance 中以权重共享的共享编码器与模态独立的私有编码器分离跨模态神经运动共性与通道噪声，接着用轻量解码器做视频共享到音频共享的循环一致对齐与基于私有向量计算的稀疏门控融合动态加权可靠流，最后拼接可学习临床症状令牌 Clinical Symptom Token 经全连接推理并同时输出分类与严重程度。与整体拼接相比，该机制显式约束共享子空间一致并惩罚门控冗余，从而在缺失模态下仍可回退到单流证据。在 Toronto NeuroFace 数据集受试者无关 5 折交叉验证下，DeepSeek\-VL2 与 TRILLsson 组合全模态准确率达 98\.26%、F1 值达 97\.51%，高于同组合简单拼接的 94\.65% 与 93\.87%。结论仅在该小规模单中心数据上成立，跨站点泛化与临床可用性尚未验证。原文未披露训练时长、推理延迟与部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Helixometry/SIGNAL.git> → <https://github.com/Helixometry/SIGNAL> — 链接不可用（HTTP 404）
- 模型相关资源：<https://github.com/Helixometry/SIGNAL.git> → <https://github.com/Helixometry/SIGNAL> — 链接不可用（HTTP 404）
- 第三方资源：<https://huggingface.co/microsoft/wavlm-base> — 暂时无法访问
- 第三方资源：<https://github.com/deepseek-ai/DeepSeek-VL2> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/TadasBaltrusaitis/OpenFace> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/1adrianb/face-alignment> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
