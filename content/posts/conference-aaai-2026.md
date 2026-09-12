---
title: "aaai-2026 论文深度解读"
date: 2026-09-12
draft: false
paper_digest_pipeline_owned: true
tags: ["半监督学习","变分自编码器","病理语音评估","参数高效微调","测试时自适应","大语言模型","单通道","低资源","端到端学习","对比学习","对抗鲁棒性","对抗训练","多模态模型","多模态学习","多任务学习","多语言","符号音乐生成","高效推理","公平性","关键词检测","后训练","环境声","会议转录","混合专家模型","基准测试","基准设计","检索增强","教育","静默语音接口","开源工具","可解释性","空间音频信号","空间音频渲染","口语理解","跨语言","扩散模型","零样本","领域适应","流匹配","流式处理","鲁棒性","麦克风阵列","模型比较","模型集成","模型剪枝","模型评估","模型融合","模型压缩","目标说话人提取","脑信号","内容审核","偏好优化","评测协议","强化学习","去混响","人类参与评测","弱监督学习","生成对抗网络","生成模型","生物声学监测","声源定位","声源追踪","时频分析","实时处理","视频到声音生成","数据集","数据集构建","数据增强","说话人分离标注","说话人匿名化","说话人识别","提示学习","听觉与音乐认知","统计分析","图神经网络","文本到语音","无监督学习","向量量化","信号处理","言语神经解码","言语障碍","医疗音频","音高与旋律提取","音乐","音乐理解","音乐生成","音频安全","音频超分辨","音频大模型","音频分类","音频分离","音频检索","音频理解","音频深度伪造检测","音频生成","音频事件检测","音频水印","音频伪造检测","音频问答","音频修复","音频质量评估","音频字幕生成","音视频","音视频交互","音视频理解","音视频生成","音视频问答","音视频语音合成","隐私保护","用户研究","语音","语音编辑","语音编码","语音对话系统","语音翻译","语音分离","语音合成","语音交互","语音克隆","语音配音","语音情感识别","语音生物标志物","语音识别","语音属性识别","语音学与音系","语音增强","语音转换","韵律","长音频处理","正则化","知识蒸馏","指令微调","主观评测","注意力机制","状态空间模型","自回归模型","自监督学习","Adapter","CNN","LoRA","RNN","Transformer"]
categories: ["aaai-2026 论文"]
description: "共收录 147 篇 aaai-2026 会议论文的 Reader 深度解读"
paper_digest_page_type: index
paper_digest_reader_quality: "reader-facing-v3"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_scope: "aggregate-primary-task-counts"
---

# aaai-2026 论文深度解读

本汇总收录 authenticated plan 选择集内全部 147 篇已完成分析、重标和单篇 staging 的论文。

🏷️ 标签说明：本期使用新版受控 taxonomy；热门方向只统计主任务。

## ⚡ 今日概览

✅ authenticated plan 入选 147 篇 → 🔬 深度分析、Reader 与页面投影完成

### 🏷️ 热门方向

| 方向（仅主任务） | 数量 |
|---|---:|
| #音视频生成 | 13 篇 |
| #语音情感识别 | 12 篇 |
| #语音识别 | 11 篇 |
| #音视频理解 | 8 篇 |
| #音频问答 | 7 篇 |
| #文本到语音 | 6 篇 |
| #音视频问答 | 6 篇 |
| #音频分类 | 5 篇 |
| #语音翻译 | 5 篇 |
| #音乐生成 | 4 篇 |
| #音频生成 | 4 篇 |
| #音频事件检测 | 4 篇 |
| #声源定位 | 3 篇 |
| #视频到声音生成 | 3 篇 |
| #说话人分离标注 | 3 篇 |
| #音乐理解 | 3 篇 |
| #语音转换 | 3 篇 |
| #病理语音评估 | 2 篇 |
| #符号音乐生成 | 2 篇 |
| #空间音频渲染 | 2 篇 |
| #音频分离 | 2 篇 |
| #音频检索 | 2 篇 |
| #音频理解 | 2 篇 |
| #音频水印 | 2 篇 |
| #音视频交互 | 2 篇 |
| #音视频语音合成 | 2 篇 |
| #语音编码 | 2 篇 |
| #语音对话系统 | 2 篇 |
| #语音合成 | 2 篇 |
| #语音配音 | 2 篇 |
| #语音属性识别 | 2 篇 |
| #语音增强 | 2 篇 |
| #关键词检测 | 1 篇 |
| #口语理解 | 1 篇 |
| #目标说话人提取 | 1 篇 |
| #去混响 | 1 篇 |
| #说话人匿名化 | 1 篇 |
| #说话人识别 | 1 篇 |
| #言语神经解码 | 1 篇 |
| #音高与旋律提取 | 1 篇 |
| #音频超分辨 | 1 篇 |
| #音频深度伪造检测 | 1 篇 |
| #音频伪造检测 | 1 篇 |
| #音频修复 | 1 篇 |
| #音频质量评估 | 1 篇 |
| #音频字幕生成 | 1 篇 |
| #语音分离 | 1 篇 |
| #语音交互 | 1 篇 |
| #语音克隆 | 1 篇 |

## 📊 论文评分排行榜

| 排名 | Reader 中文题目 | 英文题目 | 八维评分 | 分档 | 文档类型 | 主任务 |
|---:|---|---|---|---|---|---|
| 1 | [野外长音频与多音频并存时，模型为何听得到却答不对](/posts/conference-aaai-2026-conference-paper-id-39430-5195edb6fa/) | [MMAU\-Pro: A Challenging and Comprehensive Benchmark for Holistic Evaluation of Audio General Intelligence](/posts/conference-aaai-2026-conference-paper-id-39430-5195edb6fa/) | **8.7/10** · 创新 1.6/2 · 技术严谨 1.3/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 数据集与基准 | #音频问答 |
| 2 | [推理与分割打架时：AURORA 用四步推理加蒸馏保住像素精度](/posts/conference-aaai-2026-conference-paper-id-37714-d2bab18a10/) | [AURORA: Augmented Understanding via Structured Reasoning and Reinforcement Learning for Reference Audio\-Visual Segmentation](/posts/conference-aaai-2026-conference-paper-id-37714-d2bab18a10/) | **8.4/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音视频理解 |
| 3 | [不只测好听：TTA\-Bench 把准确、可靠与责任放在同一张考卷上](/posts/conference-aaai-2026-conference-paper-id-40639-41e692199b/) | [TTA\-Bench: A Comprehensive Benchmark for Evaluating Text\-to\-Audio Models](/posts/conference-aaai-2026-conference-paper-id-40639-41e692199b/) | **8.4/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 数据集与基准 | #音频生成 |
| 4 | [在二值脉冲上做长短时序建模：SpikCommander 的多视角注意力与上下文 MLP](/posts/conference-aaai-2026-conference-paper-id-37194-90602325c5/) | [SpikCommander: A High\-performance Spiking Transformer with Multi\-view Learning for Efficient Speech Command Recognition](/posts/conference-aaai-2026-conference-paper-id-37194-90602325c5/) | **8.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #关键词检测 |
| 5 | [边听边译不重算：全单向架构如何让大模型学会何时读、何时写](/posts/conference-aaai-2026-conference-paper-id-40330-c78b8dea33/) | [Efficient and Adaptive Simultaneous Speech Translation with Fully Unidirectional Architecture](/posts/conference-aaai-2026-conference-paper-id-40330-c78b8dea33/) | **8.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音翻译 |
| 6 | [从能转写到能听懂言外之意：HPSU 如何检验语音大模型的类人听觉](/posts/conference-aaai-2026-conference-paper-id-40419-d5d0deb85f/) | [HPSU: A Benchmark for Human\-Level Perception in Real\-World Spoken Speech Understanding](/posts/conference-aaai-2026-conference-paper-id-40419-d5d0deb85f/) | **8.2/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 数据集与基准 | #口语理解 |
| 7 | [不用从噪声里学语法：PASE 直接借用 WavLM 的语音结构先验做低幻觉增强](/posts/conference-aaai-2026-conference-paper-id-40562-a3a95062d1/) | [PASE: Leveraging the Phonological Prior of WavLM for Low\-Hallucination Generative Speech Enhancement](/posts/conference-aaai-2026-conference-paper-id-40562-a3a95062d1/) | **8.2/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音增强 |
| 8 | [先分离再生成：MACS 如何把混合声音拆开并对齐语义来画图](/posts/conference-aaai-2026-conference-paper-id-38368-849c1c8552/) | [MACS: Multi\-source Audio\-to\-image Generation with Contextual Significance and Semantic Alignment](/posts/conference-aaai-2026-conference-paper-id-38368-849c1c8552/) | **8.1/10** · 创新 1.6/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音视频生成 |
| 9 | [先按人找声音，再按位置修声音：用空间相关增强 HRTF 个性化](/posts/conference-aaai-2026-conference-paper-id-38803-df80bd3288/) | [Graph Neural Field with Spatial\-Correlation Augmentation for HRTF Personalization](/posts/conference-aaai-2026-conference-paper-id-38803-df80bd3288/) | **8.1/10** · 创新 1.5/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #空间音频渲染 |
| 10 | [解耦分词与多词元预测为何能同时改善语音对齐与合成质量](/posts/conference-aaai-2026-conference-paper-id-40318-f7b7e99355/) | [What Makes a Good Speech Tokenizer for LLM\-Centric Speech Generation? A Systematic Study](/posts/conference-aaai-2026-conference-paper-id-40318-f7b7e99355/) | **8.1/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #文本到语音 |
| 11 | [不做反演的音乐编辑：用分数蒸馏把改动留在数据空间](/posts/conference-aaai-2026-conference-paper-id-37181-6b14c22853/) | [SteerMusic: Enhanced Musical Consistency for Zero\-shot Text\-Guided and Personalized Music Editing](/posts/conference-aaai-2026-conference-paper-id-37181-6b14c22853/) | **8.0/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音乐生成 |
| 12 | [既听内容又听语气：SageLM 如何端到端评判语音对话](/posts/conference-aaai-2026-conference-paper-id-40338-3ccaffd06e/) | [SageLM: A Multi\-aspect and Explainable Large Language Model for Speech Judgement](/posts/conference-aaai-2026-conference-paper-id-40338-3ccaffd06e/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 模型报告 | #语音对话系统 |
| 13 | [同样的文字为何译法不同：用双分支把重音和情绪送进语音翻译](/posts/conference-aaai-2026-conference-paper-id-40449-ddd56f95c9/) | [PLaST: Towards Paralinguistic\-aware Speech Translation](/posts/conference-aaai-2026-conference-paper-id-40449-ddd56f95c9/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音翻译 |
| 14 | [用可训练插值对齐脑电、以双路编码放大目标差异的目标说话人提取](/posts/conference-aaai-2026-conference-paper-id-40514-e5008fd56d/) | [Trainable EEG Interpolation and Structure\-Sharing Dual\-Path Encoders for Brain\-Assisted Target Speaker Extraction](/posts/conference-aaai-2026-conference-paper-id-40514-e5008fd56d/) | **8.0/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #目标说话人提取 |
| 15 | [不做离散量化：KALL\-E 以逐帧分布预测实现低帧率连续语音合成](/posts/conference-aaai-2026-conference-paper-id-40695-a6c3d85787/) | [KALL\-E: Autoregressive Speech Synthesis with Next\-Distribution Prediction](/posts/conference-aaai-2026-conference-paper-id-40695-a6c3d85787/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.3/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #文本到语音 |
| 16 | [自回归也能定长：IndexTTS2 用标记计数与情感解耦做可控零样本合成](/posts/conference-aaai-2026-conference-paper-id-40820-b0e5e79b75/) | [IndexTTS2: A Breakthrough in Emotionally Expressive and Duration\-Controlled Auto\-Regressive Zero\-Shot Text\-to\-Speech](/posts/conference-aaai-2026-conference-paper-id-40820-b0e5e79b75/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前25% | 模型报告 | #文本到语音 |
| 17 | [内容无毒不等于语音无毒：用来源与类型双头拆分副语言毒性](/posts/conference-aaai-2026-conference-paper-id-36960-7b456c1838/) | [Beyond Content: A Comprehensive Speech Toxicity Dataset and Detection Framework Incorporating Paralinguistic Cues](/posts/conference-aaai-2026-conference-paper-id-36960-7b456c1838/) | **7.8/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #音频分类 |
| 18 | [视频回声成乐：以分层解析同时约束语义、时间与转场对拍](/posts/conference-aaai-2026-conference-paper-id-39799-8e5d166230/) | [Video Echoed in Music: Semantic, Temporal, and Rhythmic Alignment for Video\-to\-Music Generation](/posts/conference-aaai-2026-conference-paper-id-39799-8e5d166230/) | **7.8/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音乐生成 |
| 19 | [在帧之间听见时间：TimeAudio 如何把时刻、时长与语义对齐](/posts/conference-aaai-2026-conference-paper-id-39827-21e8649f50/) | [Listening Between the Frames: Bridging Temporal Gaps in Large Audio\-Language Models](/posts/conference-aaai-2026-conference-paper-id-39827-21e8649f50/) | **7.8/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频事件检测 |
| 20 | [低资源下保住音高与细节：HQ\-SVC 用解耦编解码加两级合成做零样本歌声转换](/posts/conference-aaai-2026-conference-paper-id-40249-ca15a5831b/) | [HQ\-SVC: Towards High\-Quality Zero\-Shot Singing Voice Conversion in Low\-Resource Scenarios](/posts/conference-aaai-2026-conference-paper-id-40249-ca15a5831b/) | **7.8/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.1/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音转换 |
| 21 | [信噪比为何失准：从相位距离重写音频生成的度量与损失](/posts/conference-aaai-2026-conference-paper-id-40298-5b9969a246/) | [GOMPSNR: Reflourish the Signal\-to\-Noise Ratio Metric for Audio Generation Tasks](/posts/conference-aaai-2026-conference-paper-id-40298-5b9969a246/) | **7.7/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频生成 |
| 22 | [用投票与多维标注把粤语长音频做成可训练语料](/posts/conference-aaai-2026-conference-paper-id-40429-6b91eb28c3/) | [WenetSpeech\-Yue: A Large\-Scale Cantonese Speech Corpus with Multi\-dimensional Annotation](/posts/conference-aaai-2026-conference-paper-id-40429-6b91eb28c3/) | **7.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #语音识别 |
| 23 | [先找重层再剪通道：SepPrune 为语音分离模型省算力的三步剪枝](/posts/conference-aaai-2026-conference-paper-id-40455-790b93bfe9/) | [SepPrune: Structured Pruning for Efficient Deep Speech Separation](/posts/conference-aaai-2026-conference-paper-id-40455-790b93bfe9/) | **7.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音分离 |
| 24 | [先剪掉噪声再识别：语音感知的长上下文剪枝与融合](/posts/conference-aaai-2026-conference-paper-id-40563-13900a7a12/) | [Speech\-Aware Long Context Pruning and Integration for Contextualized Automatic Speech Recognition](/posts/conference-aaai-2026-conference-paper-id-40563-13900a7a12/) | **7.7/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音识别 |
| 25 | [语义不够声学来凑行不通：用理解型词元做输入、声学词元做输出的统一建模](/posts/conference-aaai-2026-conference-paper-id-40663-2bc2fdcc24/) | [DualSpeechLM: Towards Unified Speech Understanding and Generation via Dual Speech Token Modeling with Large Language Models](/posts/conference-aaai-2026-conference-paper-id-40663-2bc2fdcc24/) | **7.7/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音合成 |
| 26 | [直播不是更长的短视频：LiViBench 如何测互动理解与评论利用](/posts/conference-aaai-2026-conference-paper-id-39859-e20d89df94/) | [LiViBench: An Omnimodal Benchmark for Interactive Livestream Video Understanding](/posts/conference-aaai-2026-conference-paper-id-39859-e20d89df94/) | **7.6/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #音视频问答 |
| 27 | [从直接配音到导演\-演员磨合：用检索增强补情感功课的配音模型](/posts/conference-aaai-2026-conference-paper-id-40483-abac696393/) | [Towards Authentic Movie Dubbing with Retrieve\-Augmented Director\-Actor Interaction Learning](/posts/conference-aaai-2026-conference-paper-id-40483-abac696393/) | **7.6/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音配音 |
| 28 | [不用自回归也能听懂语音：DIFFA 以冻结扩散模型加双适配器做理解](/posts/conference-aaai-2026-conference-paper-id-40817-25c0fa6f5a/) | [DIFFA: Large Language Diffusion Models Can Listen and Understand](/posts/conference-aaai-2026-conference-paper-id-40817-25c0fa6f5a/) | **7.6/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 模型报告 | #音频理解 |
| 29 | [三模态互相拆台时，HuMo 如何让文本、图像与音频协同](/posts/conference-aaai-2026-conference-paper-id-37285-d0f307184d/) | [Human\-Centric Video Generation via Collaborative Multi\-Modal Conditioning](/posts/conference-aaai-2026-conference-paper-id-37285-d0f307184d/) | **7.5/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音视频生成 |
| 30 | [不用真值也能改口音和噪声错误：以音频文本对齐奖励做测试时强化适应](/posts/conference-aaai-2026-conference-paper-id-40323-4bb7ceebf0/) | [Boosting ASR Robustness via Test\-Time Reinforcement Learning with Audio\-Text Semantic Rewards](/posts/conference-aaai-2026-conference-paper-id-40323-4bb7ceebf0/) | **7.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音识别 |
| 31 | [听到更多却用更少：为对话语音检索并精选一条最相关的历史](/posts/conference-aaai-2026-conference-paper-id-40528-ff6b990c10/) | [Hearing More with Less: Multi\-Modal Retrieval\-and\-Selection Augmented Conversational LLM\-Based ASR](/posts/conference-aaai-2026-conference-paper-id-40528-ff6b990c10/) | **7.5/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.3/1.5 · 清晰度 0.8/1 · 影响力 1.3/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音识别 |
| 32 | [把水印藏进起始噪声：锚定反演如何找回被波形转换打乱的归属](/posts/conference-aaai-2026-conference-paper-id-40561-fd179879f7/) | [Anchor Watermark: Robust Attribution for Diffusion\-based Text\-to\-Audio Model](/posts/conference-aaai-2026-conference-paper-id-40561-fd179879f7/) | **7.5/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前25% | 方法研究 | #音频水印 |
| 33 | [多语言共用低秩空间为何冲突：MoLoRA 用共享与路由专家分开建模](/posts/conference-aaai-2026-conference-paper-id-40769-913b33710f/) | [MoLoRA: Boosting LLM\-based End\-to\-end Speech Translation with Mixture of Low\-rank Experts](/posts/conference-aaai-2026-conference-paper-id-40769-913b33710f/) | **7.5/10** · 创新 1.5/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.4/1.5 | 前25% | 方法研究 | #语音翻译 |
| 34 | [从贴标签到写病程：用情绪—认知描述统一多模态心理健康评估](/posts/conference-aaai-2026-conference-paper-id-37210-ac21c3928c/) | [Voices, Faces, and Feelings: Multi\-modal Emotion\-Cognition Captioning for Mental Health Understanding](/posts/conference-aaai-2026-conference-paper-id-37210-ac21c3928c/) | **7.4/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频字幕生成 |
| 35 | [结构保真与语义对齐如何同时做：SSU 用句法图、文本引导图与语义锚统一多模态情感](/posts/conference-aaai-2026-conference-paper-id-39766-fae206a51d/) | [Structures Meet Semantics: Multimodal Fusion via Graph Contrastive Learning](/posts/conference-aaai-2026-conference-paper-id-39766-fae206a51d/) | **7.4/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 36 | [同一事实换语言换模态就变答案：CCFQA 如何卡住多语言语音问答的一致性](/posts/conference-aaai-2026-conference-paper-id-40312-2c178abd4a/) | [CCFQA: A Benchmark for Cross\-Lingual and Cross\-Modal Speech and Text Factuality Evaluation](/posts/conference-aaai-2026-conference-paper-id-40312-2c178abd4a/) | **7.4/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频问答 |
| 37 | [时长定多久才好听：DMOSpeech 2 把时长预测也纳入指标优化](/posts/conference-aaai-2026-conference-paper-id-40450-30792bea3c/) | [DMOSpeech 2: Reinforcement Learning for Duration Prediction in Metric\-Optimized Speech Synthesis](/posts/conference-aaai-2026-conference-paper-id-40450-30792bea3c/) | **7.4/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #文本到语音 |
| 38 | [少通道也要分清四声：CAT\-Net 用双向交叉注意力融合脑电与肌电](/posts/conference-aaai-2026-conference-paper-id-38870-a7214d736b/) | [CAT\-Net: A Cross\-Attention Tone Network for Cross\-Subject EEG\-EMG Fusion Tone Decoding](/posts/conference-aaai-2026-conference-paper-id-38870-a7214d736b/) | **7.3/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #言语神经解码 |
| 39 | [从看见听见到回得得体：HumanSense 把共情拆成可测的四层阶梯](/posts/conference-aaai-2026-conference-paper-id-39685-6b66052574/) | [HumanSense: From Multimodal Perception to Empathetic Context\-Aware Responses Through Reasoning MLLMs](/posts/conference-aaai-2026-conference-paper-id-39685-6b66052574/) | **7.3/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音视频问答 |
| 40 | [把纠缠的副语言风格拆开学：ParaMETA 的共享空间与任务子空间分工](/posts/conference-aaai-2026-conference-paper-id-40505-b3abf19139/) | [ParaMETA: Towards Learning Disentangled Paralinguistic Speaking Styles Representations from Speech](/posts/conference-aaai-2026-conference-paper-id-40505-b3abf19139/) | **7.3/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音属性识别 |
| 41 | [文本带路、解释搭桥、时间对齐：TEXT 如何让音频视频不再带偏情感判断](/posts/conference-aaai-2026-conference-paper-id-40559-9c446c008b/) | [A Text\-Routed Sparse Mixture\-of\-Experts Model with Explanation and Temporal Alignment for Multi\-Modal Sentiment Analysis](/posts/conference-aaai-2026-conference-paper-id-40559-9c446c008b/) | **7.3/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 42 | [不等整句就翻译：用句法块教会大模型何时等待、何时落笔](/posts/conference-aaai-2026-conference-paper-id-40733-1e39393224/) | [SASST: Leveraging Syntax\-Aware Chunking and LLMs for Simultaneous Speech Translation](/posts/conference-aaai-2026-conference-paper-id-40733-1e39393224/) | **7.3/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音翻译 |
| 43 | [以多指标一致偏好约束生成式语音修复：GenSR\-Pref 与三范式 DPO 对齐](/posts/conference-aaai-2026-conference-paper-id-40775-87c4a382ed/) | [Multi\-Metric Preference Alignment for Generative Speech Restoration](/posts/conference-aaai-2026-conference-paper-id-40775-87c4a382ed/) | **7.3/10** · 创新 1.5/2 · 技术严谨 1.3/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.5/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频修复 |
| 44 | [MAVERIX：逼模型同时听和看，堵住单模态捷径的音视频理解基准](/posts/conference-aaai-2026-conference-paper-id-39923-0e3c650e6a/) | [MAVERIX: Multimodal Audio\-Visual Evaluation and Recognition IndeX](/posts/conference-aaai-2026-conference-paper-id-39923-0e3c650e6a/) | **7.2/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音视频问答 |
| 45 | [不用中间文本转写：以识别语义直接约束唇手到语音的统一生成](/posts/conference-aaai-2026-conference-paper-id-40643-b60d827956/) | [UniCUE: Unified Recognition and Generation Framework for Chinese Cued Speech Video\-to\-Speech Generation](/posts/conference-aaai-2026-conference-paper-id-40643-b60d827956/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频语音合成 |
| 46 | [先去噪再补缺：TMDC 用两阶段应对缺失与噪声并存的多模态情感分析](/posts/conference-aaai-2026-conference-paper-id-37212-6b932859c9/) | [TMDC: A Two\-Stage Modality Denoising and Complementation Framework for Multimodal Sentiment Analysis with Missing and Noisy Modalities](/posts/conference-aaai-2026-conference-paper-id-37212-6b932859c9/) | **7.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 47 | [不抠嘴唇像素：用语速与情绪指令做对齐的电影配音](/posts/conference-aaai-2026-conference-paper-id-38298-de5d37762a/) | [InstructDubber: Instruction\-based Alignment for Zero\-shot Movie Dubbing](/posts/conference-aaai-2026-conference-paper-id-38298-de5d37762a/) | **7.1/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音配音 |
| 48 | [多模态指令导航：用语言、图像和声音共同消除目标歧义](/posts/conference-aaai-2026-conference-paper-id-38886-29edb0a385/) | [NaVLA$^2$: A Vision\-Language\-Audio\-Action Model for Multimodal Instruction Navigation](/posts/conference-aaai-2026-conference-paper-id-38886-29edb0a385/) | **7.1/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.9/1.5 | 前50% | 方法研究 | #声源定位 |
| 49 | [看得见情绪还不够，可信才能用：MultiMood 的多模态分工与对齐代价](/posts/conference-aaai-2026-conference-paper-id-40412-6b6f5029c7/) | [Reinforce Trustworthiness in Multimodal Emotional Support System](/posts/conference-aaai-2026-conference-paper-id-40412-6b6f5029c7/) | **7.1/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 50 | [不加噪声也能留后门：用整体起伏的频率与响度曲线触发说话人识别](/posts/conference-aaai-2026-conference-paper-id-36961-58d3ad61f3/) | [Modulation\-Based Backdoors: Leveraging Amplitude and Frequency Patterns to Attack Speaker Recognition](/posts/conference-aaai-2026-conference-paper-id-36961-58d3ad61f3/) | **7.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #说话人识别 |
| 51 | [为每段呼吸声选增强：PASA 用两阶段混合策略平衡效率与个性化](/posts/conference-aaai-2026-conference-paper-id-37093-d314857847/) | [PASA: Progressive\-Adaptive Spectral Augmentation for Automated Auscultation in Data\-Scarce Environments](/posts/conference-aaai-2026-conference-paper-id-37093-d314857847/) | **7.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频分类 |
| 52 | [先学走再学舞：用掩码动作先验统筹音乐、体裁与姿态的可编辑舞蹈合成](/posts/conference-aaai-2026-conference-paper-id-37833-2c13b59dbd/) | [Walk Before You Dance: High\-fidelity and Editable Dance Synthesis via Generative Masked Motion Prior](/posts/conference-aaai-2026-conference-paper-id-37833-2c13b59dbd/) | **7.0/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #音视频生成 |
| 53 | [压缩对齐与异步去噪：READ 如何把扩散说话头做到实时](/posts/conference-aaai-2026-conference-paper-id-37940-6ce7115e23/) | [READ: Real\-time and Efficient Asynchronous Diffusion for Audio\-driven Talking Head Generation](/posts/conference-aaai-2026-conference-paper-id-37940-6ce7115e23/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.2/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #音视频生成 |
| 54 | [流式生成三维说话脸：用自回归条件约束轻量扩散头](/posts/conference-aaai-2026-conference-paper-id-38162-2e46d470ea/) | [StreamingTalker: Audio\-driven 3D Facial Animation with Autoregressive Diffusion Model](/posts/conference-aaai-2026-conference-paper-id-38162-2e46d470ea/) | **7.0/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #音视频生成 |
| 55 | [从整图配音到按声源混音：SS2A 的拆分解歧义与再混合](/posts/conference-aaai-2026-conference-paper-id-39297-9b0a13824e/) | [Gotta Hear Them All: Towards Sound Source Aware Audio Generation](/posts/conference-aaai-2026-conference-paper-id-39297-9b0a13824e/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频生成 |
| 56 | [把梅尔谱看成退化：先线性找回谱结构再用大核修复细节](/posts/conference-aaai-2026-conference-paper-id-40416-7895d4e4cc/) | [DegVoC: Revisiting Neural Vocoder from a Degradation Perspective](/posts/conference-aaai-2026-conference-paper-id-40416-7895d4e4cc/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音合成 |
| 57 | [不预测离散口令而直写连续声学潜向量：子空间扩散如何重连唇动与声音](/posts/conference-aaai-2026-conference-paper-id-40464-aaaa0587f7/) | [SLD\-L2S: Hierarchical Subspace Latent Diffusion for High\-Fidelity Lip to Speech Synthesis](/posts/conference-aaai-2026-conference-paper-id-40464-aaaa0587f7/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频语音合成 |
| 58 | [不写新评测脚本：用统一比较器把文本、计划、时序与多媒体放在同一流程里](/posts/conference-aaai-2026-conference-paper-id-41496-77ac729253/) | [GAICo: A Deployed and Extensible Framework for Evaluating Diverse and Multimodal Generative AI Outputs](/posts/conference-aaai-2026-conference-paper-id-41496-77ac729253/) | **7.0/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.4/1.5 · 开源 1.5/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #音频质量评估 |
| 59 | [预训练会弹琴却不懂调式：把大/小调先验注入最弱层的情绪识别补课](/posts/conference-aaai-2026-conference-paper-id-37201-47130112eb/) | [Let the Model Learn to Feel: Mode\-Guided Tonality Injection for Symbolic Music Emotion Recognition](/posts/conference-aaai-2026-conference-paper-id-37201-47130112eb/) | **6.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音乐理解 |
| 60 | [先认出是什么，再听出在哪里：跨实例视觉提示的选择性测向](/posts/conference-aaai-2026-conference-paper-id-39175-a20da2d0ab/) | [AV\-SSAN: Audio\-Visual Selective DOA Estimation Through Explicit Multi\-Band Semantic\-Spatial Alignment](/posts/conference-aaai-2026-conference-paper-id-39175-a20da2d0ab/) | **6.9/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #声源定位 |
| 61 | [不用指令做音频任务：用注意力头掩码锁定大音频语言模型的功能通路](/posts/conference-aaai-2026-conference-paper-id-39299-44f2e634fe/) | [AHAMask: Reliable Task Specification for Large Audio Language Models Without Instructions](/posts/conference-aaai-2026-conference-paper-id-39299-44f2e634fe/) | **6.9/10** · 创新 1.5/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频理解 |
| 62 | [模型能听出尖与圆吗：用拟声词与伪词检验多模态大模型的语音象征](/posts/conference-aaai-2026-conference-paper-id-40387-de52082289/) | [Do Language Models Associate Sound with Meaning? A Multimodal Study of Sound Symbolism](/posts/conference-aaai-2026-conference-paper-id-40387-de52082289/) | **6.9/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 数据集与基准 | #音频问答 |
| 63 | [幻影威胁：物理传感器攻击如何让视觉\-语言\-动作模型失手，又如何加固](/posts/conference-aaai-2026-conference-paper-id-40881-ef5d368e84/) | [Phantom Menace: Exploring and Enhancing the Robustness of VLA Models Against Physical Sensor Attacks](/posts/conference-aaai-2026-conference-paper-id-40881-ef5d368e84/) | **6.9/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #语音交互 |
| 64 | [一种检测器要听懂四种造假：小波提示如何补上频率感知](/posts/conference-aaai-2026-conference-paper-id-40907-ba0ba8ab6f/) | [Detect All\-Type Deepfake Audio: Wavelet Prompt Tuning for Enhanced Auditory Perception](/posts/conference-aaai-2026-conference-paper-id-40907-ba0ba8ab6f/) | **6.9/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频深度伪造检测 |
| 65 | [偏好打架时不要平均：把动作、口型、画质拆开学再按时步和层融合](/posts/conference-aaai-2026-conference-paper-id-37962-e1e412a093/) | [FantasyTalking2: Timestep\-Layer Adaptive Preference Optimization for Audio\-Driven Portrait Animation](/posts/conference-aaai-2026-conference-paper-id-37962-e1e412a093/) | **6.8/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频生成 |
| 66 | [文本先验压住视听信号时，用偏好对齐把注意力拉回视频与音频](/posts/conference-aaai-2026-conference-paper-id-39104-15593ebca9/) | [OmniDPO: A Preference Optimization Framework to Address Omni\-Modal Hallucination](/posts/conference-aaai-2026-conference-paper-id-39104-15593ebca9/) | **6.8/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频问答 |
| 67 | [用可预测的显式节奏信号约束扩散：Diff\-V2M 的分层条件设计](/posts/conference-aaai-2026-conference-paper-id-39378-857ed0ce49/) | [Diff\-V2M: A Hierarchical Conditional Diffusion Model with Explicit Rhythmic Modeling for Video\-to\-Music Generation](/posts/conference-aaai-2026-conference-paper-id-39378-857ed0ce49/) | **6.8/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #视频到声音生成 |
| 68 | [不用成对混合也能分离：扩散先验与重建引导如何分开又合上声音](/posts/conference-aaai-2026-conference-paper-id-39728-269a6efa0a/) | [Unsupervised Single\-Channel Audio Separation with Diffusion Source Priors](/posts/conference-aaai-2026-conference-paper-id-39728-269a6efa0a/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频分离 |
| 69 | [低码率下保真与语义难两全：非对称双量化如何分开处理内容与细节](/posts/conference-aaai-2026-conference-paper-id-40308-6c95f7ad37/) | [SACodec: Asymmetric Quantization with Semantic Anchoring for Low\-Bitrate High\-Fidelity Neural Speech Codecs](/posts/conference-aaai-2026-conference-paper-id-40308-6c95f7ad37/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音编码 |
| 70 | [等还是说：REINA 用信息增益把非流式翻译模型改成同传模型](/posts/conference-aaai-2026-conference-paper-id-40360-1b6f6882a8/) | [REINA: Regularized Entropy Information\-Based Loss for Efficient Simultaneous Speech Translation](/posts/conference-aaai-2026-conference-paper-id-40360-1b6f6882a8/) | **6.8/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音翻译 |
| 71 | [先把长语音变短再回答：用类文本表示搭桥的端到端语音检索器 CLSR](/posts/conference-aaai-2026-conference-paper-id-40364-5288d49126/) | [End\-to\-End Contrastive Language\-Speech Pretraining Model for Long\-Form Spoken Question Answering](/posts/conference-aaai-2026-conference-paper-id-40364-5288d49126/) | **6.8/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 1.0/1.5 · 清晰度 0.6/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频检索 |
| 72 | [何时想、如何想：用四路奖励教音频大模型做难度自适应的推理](/posts/conference-aaai-2026-conference-paper-id-40689-728bf1e125/) | [Audio\-Thinker: Guiding Large Audio Language Model When and How to Think via Reinforcement Learning](/posts/conference-aaai-2026-conference-paper-id-40689-728bf1e125/) | **6.8/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频问答 |
| 73 | [可变形状态空间如何盯住稀疏而模糊的伪造边界](/posts/conference-aaai-2026-conference-paper-id-40928-709383a957/) | [DeformTrace: A Deformable State Space Model with Relay Tokens for Temporal Forgery Localization](/posts/conference-aaai-2026-conference-paper-id-40928-709383a957/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频伪造检测 |
| 74 | [预告片里画面与配乐为何总能卡点：VMChill 把细粒度视听协同做成可训练数据](/posts/conference-aaai-2026-conference-paper-id-37331-ad89c0c651/) | [VMChill: A Dataset for Fine\-Grained Visual\-Musical Synergy](/posts/conference-aaai-2026-conference-paper-id-37331-ad89c0c651/) | **6.7/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #视频到声音生成 |
| 75 | [不增加采样步数：用验证器引导的多轨搜索做音频超分](/posts/conference-aaai-2026-conference-paper-id-38520-9d129e827b/) | [Inference\-time Scaling for Diffusion\-based Audio Super\-resolution](/posts/conference-aaai-2026-conference-paper-id-38520-9d129e827b/) | **6.7/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频超分辨 |
| 76 | [桥模型也是预测模型：用高斯概率路径统一流匹配与扩散桥](/posts/conference-aaai-2026-conference-paper-id-40630-d9228cfdc3/) | [Rethinking Flow and Diffusion Bridge Models for Speech Enhancement](/posts/conference-aaai-2026-conference-paper-id-40630-d9228cfdc3/) | **6.7/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音增强 |
| 77 | [先定位错在哪、再只改错段：多层次评估器如何稳住零样本语音合成](/posts/conference-aaai-2026-conference-paper-id-40636-abf8505edb/) | [Enhancing Stability and Fidelity for Zero\-Shot TTS with a Multi\-Level Evaluator](/posts/conference-aaai-2026-conference-paper-id-40636-abf8505edb/) | **6.7/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #文本到语音 |
| 78 | [把“谁何时说了什么”一次生成：SpeakerLM 如何统一日志与识别并兼容注册条件](/posts/conference-aaai-2026-conference-paper-id-40745-d0ca03ff56/) | [SpeakerLM: End\-to\-End Versatile Speaker Diarization and Recognition with Multimodal Large Language Models](/posts/conference-aaai-2026-conference-paper-id-40745-d0ca03ff56/) | **6.7/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 模型报告 | #说话人分离标注 |
| 79 | [用部分更新加偏好反馈保住口型，再用掩码引导实现免训练多人说话](/posts/conference-aaai-2026-conference-paper-id-37725-8f09224a8c/) | [Training\-Free Multi\-Character Audio\-Driven Animation via Diffusion Transformer with Reward Feedback](/posts/conference-aaai-2026-conference-paper-id-37725-8f09224a8c/) | **6.6/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #音视频生成 |
| 80 | [先想清楚指谁再分割：把指代表达理解显式拆成想、定位、分割三步](/posts/conference-aaai-2026-conference-paper-id-38373-46b6bb601e/) | [Think Before You Segment: An Object\-aware Reasoning Agent for Referring Audio\-Visual Segmentation](/posts/conference-aaai-2026-conference-paper-id-38373-46b6bb601e/) | **6.6/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频理解 |
| 81 | [把内容音色情感拆干净再拼回去：MF\-Speech 的提纯与细粒度指挥](/posts/conference-aaai-2026-conference-paper-id-38856-9fe6b2a740/) | [MF\-Speech: Achieving Fine\-Grained and Compositional Control in Speech Generation via Factor Disentanglement](/posts/conference-aaai-2026-conference-paper-id-38856-9fe6b2a740/) | **6.6/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音转换 |
| 82 | [文本与 MIDI 各走各路：MIDILM 用共享注意力加双路前馈兼顾语义与结构](/posts/conference-aaai-2026-conference-paper-id-39483-1ac11c68eb/) | [MIDILM: A Dual\-Path Model for Controllable Text\-to\-MIDI Generation](/posts/conference-aaai-2026-conference-paper-id-39483-1ac11c68eb/) | **6.6/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.4/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #符号音乐生成 |
| 83 | [在急救现场做第一视角助手：EgoEMS 为何先解决多模态同步与关键步骤标注](/posts/conference-aaai-2026-conference-paper-id-41293-f42174447a/) | [EgoEMS: A High\-Fidelity Multimodal Egocentric Dataset for Cognitive Assistance in Emergency Medical Services](/posts/conference-aaai-2026-conference-paper-id-41293-f42174447a/) | **6.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.3/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频事件检测 |
| 84 | [扩散克隆打的是多步去噪，VoiceCloak 就从身份与轨迹两端同时设障](/posts/conference-aaai-2026-conference-paper-id-37002-c41d3e3433/) | [VoiceCloak: A Multi\-Dimensional Defense Framework Against Unauthorized Diffusion\-Based Voice Cloning](/posts/conference-aaai-2026-conference-paper-id-37002-c41d3e3433/) | **6.5/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音克隆 |
| 85 | [临床抑郁评估：行为信号能判病，大模型推理为何还差一截](/posts/conference-aaai-2026-conference-paper-id-37153-8c9dde9b6f/) | [Unveiling the Landscape of Clinical Depression Assessment: From Behavioral Signatures to Psychiatric Reasoning](/posts/conference-aaai-2026-conference-paper-id-37153-8c9dde9b6f/) | **6.5/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #病理语音评估 |
| 86 | [从公开课到四模态知识图：SciMKG 如何抽概念又对齐图文音视频](/posts/conference-aaai-2026-conference-paper-id-38574-fe75d74657/) | [SciMKG: A Multimodal Knowledge Graph for Science Education with Text, Image, Video and Audio](/posts/conference-aaai-2026-conference-paper-id-38574-fe75d74657/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频检索 |
| 87 | [已有配音怎么改：AV\-Edit 用音画联合表示做加、删、换](/posts/conference-aaai-2026-conference-paper-id-39298-26af768141/) | [AV\-Edit: Multimodal Generative Sound Effect Editing via Audio\-Visual Semantic Joint Control](/posts/conference-aaai-2026-conference-paper-id-39298-26af768141/) | **6.5/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #视频到声音生成 |
| 88 | [未知声源数下分离与提取如何共用一个分离器：USE 的吸引子与线索对齐](/posts/conference-aaai-2026-conference-paper-id-40635-94cfd6f9c8/) | [USE: A Unified Model for Universal Sound Separation and Extraction](/posts/conference-aaai-2026-conference-paper-id-40635-94cfd6f9c8/) | **6.5/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频分离 |
| 89 | [转写不等于回答：ACID 用语音输入揭开大音频模型的文化安全假象](/posts/conference-aaai-2026-conference-paper-id-41068-73932651ea/) | [ACID Test: A Benchmark for Cultural Safety and Alignment in LALMs](/posts/conference-aaai-2026-conference-paper-id-41068-73932651ea/) | **6.5/10** · 创新 1.5/2 · 技术严谨 0.8/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频问答 |
| 90 | [把关键词藏起来还能无损找回来：IO\-RAE 的可逆混淆](/posts/conference-aaai-2026-conference-paper-id-37140-d97c9f77e1/) | [IO\-RAE: Information\-Obfuscation Reversible Adversarial Example for Audio Privacy Protection](/posts/conference-aaai-2026-conference-paper-id-37140-d97c9f77e1/) | **6.4/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 91 | [改音色不改骨架：Melodia 只替换自注意力查询与键来保住旋律](/posts/conference-aaai-2026-conference-paper-id-37204-bae34e9832/) | [Melodia: Training\-Free Music Editing Guided by Attention Probing in Diffusion Models](/posts/conference-aaai-2026-conference-paper-id-37204-bae34e9832/) | **6.4/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音乐生成 |
| 92 | [只看画面就分割：音频缺席时音频\-视觉分割为何失灵](/posts/conference-aaai-2026-conference-paper-id-37542-faa456049e/) | [Do Audio\-Visual Segmentation Models Truly Segment Sounding Objects?](/posts/conference-aaai-2026-conference-paper-id-37542-faa456049e/) | **6.4/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #声源定位 |
| 93 | [在又听又看的长视频里找准谁在响、何时响、在哪里：R\-AVST 与 AVST\-Zero](/posts/conference-aaai-2026-conference-paper-id-37704-3ee38f4eee/) | [R\-AVST: Empowering Video\-LLMs with Fine\-Grained Spatio\-Temporal Reasoning in Complex Audio\-Visual Scenarios](/posts/conference-aaai-2026-conference-paper-id-37704-3ee38f4eee/) | **6.4/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音视频问答 |
| 94 | [从局部连乘到全局直测：用三层约束补回骨骼结构的可懂复述](/posts/conference-aaai-2026-conference-paper-id-38281-380e38cf3f/) | [Mitigating Error Accumulation in Co\-Speech Motion Generation via Global Rotation Diffusion and Multi\-Level Constraints](/posts/conference-aaai-2026-conference-paper-id-38281-380e38cf3f/) | **6.4/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频生成 |
| 95 | [把扩散模型变成流水线：滚动去噪如何实现连续随语音手势](/posts/conference-aaai-2026-conference-paper-id-39807-1da8f6f8d7/) | [Streaming Generation of Co\-Speech Gestures via Accelerated Rolling Diffusion](/posts/conference-aaai-2026-conference-paper-id-39807-1da8f6f8d7/) | **6.4/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频生成 |
| 96 | [以小波分频外推替代部分 ODE 求解：WaveEx 的加速逻辑与适用边界](/posts/conference-aaai-2026-conference-paper-id-40490-5fa9574958/) | [WaveEx: Accelerating Flow Matching\-based Speech Generation via Wavelet\-guided Extrapolation](/posts/conference-aaai-2026-conference-paper-id-40490-5fa9574958/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频生成 |
| 97 | [合成错一个词就够了：用 ASR 交叉注意力的清晰度与单调性做词级奖励](/posts/conference-aaai-2026-conference-paper-id-40631-58282d9fd8/) | [Speech Recognition Model Improves Text\-to\-Speech Synthesis Using Fine\-Grained Reward](/posts/conference-aaai-2026-conference-paper-id-40631-58282d9fd8/) | **6.4/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #文本到语音 |
| 98 | [信息不均匀时不再平均分配：用聚类定长短、用索引记时长](/posts/conference-aaai-2026-conference-paper-id-40807-5d1752f5aa/) | [Say More with Less: Variable\-Frame\-Rate Speech Tokenization via Adaptive Clustering and Implicit Duration Coding](/posts/conference-aaai-2026-conference-paper-id-40807-5d1752f5aa/) | **6.4/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音编码 |
| 99 | [只给视频级标签，如何把可靠时刻的语义铺满整条时间线](/posts/conference-aaai-2026-conference-paper-id-38374-8ad1e5ecce/) | [CLASP: Cross\-modal Salient Anchor\-based Semantic Propagation for Weakly\-supervised Dense Audio\-Visual Event Localization](/posts/conference-aaai-2026-conference-paper-id-38374-8ad1e5ecce/) | **6.3/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频事件检测 |
| 100 | [把口型与情绪放在同一运动空间里采样：情绪子空间加十步流匹配的实时说话头](/posts/conference-aaai-2026-conference-paper-id-38834-f3c4cfb672/) | [Emotion\-Conditioned Motion Sub\-spaces with Flow Matching for Real\-Time Audio\-Driven Talking Heads](/posts/conference-aaai-2026-conference-paper-id-38834-f3c4cfb672/) | **6.3/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #音视频生成 |
| 101 | [再嵌入一次就换主人：神经音频水印为何挡不住覆盖攻击](/posts/conference-aaai-2026-conference-paper-id-39997-c0368bf74f/) | [Yours or Mine? Overwriting Attacks Against Neural Audio Watermarking](/posts/conference-aaai-2026-conference-paper-id-39997-c0368bf74f/) | **6.3/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频水印 |
| 102 | [从单向分层到双向交互：残差分层如何缓解发音评估中的特征遗忘](/posts/conference-aaai-2026-conference-paper-id-40350-b28e0d9d7d/) | [Multi\-granularity Interactive Attention Framework for Residual Hierarchical Pronunciation Assessment](/posts/conference-aaai-2026-conference-paper-id-40350-b28e0d9d7d/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音属性识别 |
| 103 | [噪声下不只纠错，而是让编码器和解码器都向干净表征对齐](/posts/conference-aaai-2026-conference-paper-id-40614-63e2a6fade/) | [Listen like a Teacher: Mitigating Whisper Hallucinations Using Adaptive Layer Attention and Knowledge Distillation](/posts/conference-aaai-2026-conference-paper-id-40614-63e2a6fade/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 104 | [在词元空间同时回答谁在说、说了什么、何时说：WhisperDiari 的联合建模](/posts/conference-aaai-2026-conference-paper-id-40746-f5a424a2af/) | [WhisperDiari: A Whisper\-Based Speaker Diarization Framework in Token Space Leveraging Semantic and Speaker Information for Better Text Adaptability](/posts/conference-aaai-2026-conference-paper-id-40746-f5a424a2af/) | **6.3/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #说话人分离标注 |
| 105 | [不写代码也能走完音频 AI 全链路：AI EcoSound Tutor 如何把鸣声变成可见、可听、可验证的学习对象](/posts/conference-aaai-2026-conference-paper-id-41500-c6d8ab4386/) | [Sound\-AI: A Pedagogical Tool for Exploring AI in Audio and Bioacoustic Research](/posts/conference-aaai-2026-conference-paper-id-41500-c6d8ab4386/) | **6.3/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频分类 |
| 106 | [儿童朗读评分要保住发音和韵律，匿名化就不能只追求藏住身份](/posts/conference-aaai-2026-conference-paper-id-42113-979f6c954a/) | [Speaker Anonymization for Children's Oral Reading Assessment](/posts/conference-aaai-2026-conference-paper-id-42113-979f6c954a/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #说话人匿名化 |
| 107 | [灵感能直接长成主歌吗：IoS 让大模型学会段落结构](/posts/conference-aaai-2026-conference-paper-id-37163-0af6a3351b/) | [Is Symbolic Music a Specific Language? Exploring Inspiration\-to\-Structure Machine Composition via LLMs](/posts/conference-aaai-2026-conference-paper-id-37163-0af6a3351b/) | **6.2/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #符号音乐生成 |
| 108 | [不只看情绪像不像：用音乐调制视觉编码直接学感知一致性](/posts/conference-aaai-2026-conference-paper-id-37459-53f4ee0e86/) | [MPJudge: Towards Perceptual Assessment of Music\-Induced Paintings](/posts/conference-aaai-2026-conference-paper-id-37459-53f4ee0e86/) | **6.2/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.6/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音视频理解 |
| 109 | [看得见动、听得见位：Sonic4D 把单目视频变成可走动的视听 4D](/posts/conference-aaai-2026-conference-paper-id-38087-aca71e4aad/) | [Sonic4D: Spatial Audio Generation for Immersive 4D Scene Exploration](/posts/conference-aaai-2026-conference-paper-id-38087-aca71e4aad/) | **6.2/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #空间音频渲染 |
| 110 | [藏在声音特征里的后门：语速与情感为何能绕过音频大模型对齐](/posts/conference-aaai-2026-conference-paper-id-40472-83e87feb27/) | [Hidden in the Noise: Unveiling Backdoors in Audio LLMs Alignment Through Latent Acoustic Pattern Triggers](/posts/conference-aaai-2026-conference-paper-id-40472-83e87feb27/) | **6.2/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频问答 |
| 111 | [咳嗽声加基本信息做结核初筛：双向互查与漏诊加罚如何分工](/posts/conference-aaai-2026-conference-paper-id-41245-1419a0b376/) | [DeepGB\-TB: A Risk\-Balanced Cross\-Attention Gradient\-Boosted Convolutional Network for Rapid, Interpretable Tuberculosis Screening](/posts/conference-aaai-2026-conference-paper-id-41245-1419a0b376/) | **6.2/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 应用研究 | #病理语音评估 |
| 112 | [整块循环打乱先听后写的流水线：BiCycle 用分组递归保留语音识别机制](/posts/conference-aaai-2026-conference-paper-id-40386-de7179cc3d/) | [BiCycle: Group\-wise Recursive Transformer Based on ASR Mechanism](/posts/conference-aaai-2026-conference-paper-id-40386-de7179cc3d/) | **6.1/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.9/1.5 | 前50% | 方法研究 | #语音识别 |
| 113 | [打乱顺序仍能听对：语音模型依赖局部特征与冗余线索](/posts/conference-aaai-2026-conference-paper-id-40849-898a26ac38/) | [Time Shuffle: A Transferability\-Booster for Multiple Audio Adversarial Tasks](/posts/conference-aaai-2026-conference-paper-id-40849-898a26ac38/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音识别 |
| 114 | [编码器也懂语义：语音识别内部何时偏向语境而非声音](/posts/conference-aaai-2026-conference-paper-id-41073-86c950d531/) | [Beyond Transcription: Mechanistic Interpretability in ASR](/posts/conference-aaai-2026-conference-paper-id-41073-86c950d531/) | **6.1/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音识别 |
| 115 | [换一种说法、换一种声音，对齐就松动：StyleBreak 的风格化音频越狱](/posts/conference-aaai-2026-conference-paper-id-41093-91a51ff8c2/) | [StyleBreak: Revealing Alignment Vulnerabilities in Large Audio\-Language Models via Style\-Aware Audio Jailbreak](/posts/conference-aaai-2026-conference-paper-id-41093-91a51ff8c2/) | **6.1/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频问答 |
| 116 | [眼睛看到不等于耳朵听到：用音频专属参考把多模态推理拉回声音证据](/posts/conference-aaai-2026-conference-paper-id-38183-655201a610/) | [When Eyes and Ears Disagree: Can MLLMs Discern Audio\-Visual Confusion?](/posts/conference-aaai-2026-conference-paper-id-38183-655201a610/) | **6.0/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音视频问答 |
| 117 | [模态吵架时别硬融合：TiCAL 用典型性估计一致性再分阶段学习](/posts/conference-aaai-2026-conference-paper-id-38854-e3c036e276/) | [TiCAL:Typicality\-Based Consistency\-Aware Learning for Multimodal Emotion Recognition](/posts/conference-aaai-2026-conference-paper-id-38854-e3c036e276/) | **6.0/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 118 | [浅融合不够，深融合又乱：跨空间协同如何同时管表示与梯度](/posts/conference-aaai-2026-conference-paper-id-39602-e042955e3d/) | [Cross\-Space Synergy: A Unified Framework for Multimodal Emotion Recognition in Conversation](/posts/conference-aaai-2026-conference-paper-id-39602-e042955e3d/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 119 | [把申克分析变成逐层留音符：用多关系图与节点隔离学层次](/posts/conference-aaai-2026-conference-paper-id-39640-06964a7057/) | [AutoSchA: Automatic Hierarchical Music Representations via Multi\-Relational Node Isolation](/posts/conference-aaai-2026-conference-paper-id-39640-06964a7057/) | **6.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音乐理解 |
| 120 | [口吃语音先转文字再修语义：STEAMROLLER 为何用多智能体绕开直接语音转换](/posts/conference-aaai-2026-conference-paper-id-41300-d5ac575c94/) | [STEAMROLLER: A Multi\-Agent System for Inclusive Automatic Speech Recognition for People Who Stutter](/posts/conference-aaai-2026-conference-paper-id-41300-d5ac575c94/) | **6.0/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语音识别 |
| 121 | [表演性之下听出真情绪：以音频为锚的教师多模态情感分析](/posts/conference-aaai-2026-conference-paper-id-37157-d38be87a33/) | [Advancing Multimodal Teacher Sentiment Analysis: The Large\-Scale T\-MED Dataset & the Effective AAM\-TSA Model](/posts/conference-aaai-2026-conference-paper-id-37157-d38be87a33/) | **5.9/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音情感识别 |
| 122 | [视觉对话不够吸引人：用合成语音补情感，再用交错建模学互动](/posts/conference-aaai-2026-conference-paper-id-38650-11a3801d74/) | [Making Visual Dialogue More Engaging: A New Task, Method, and Metric](/posts/conference-aaai-2026-conference-paper-id-38650-11a3801d74/) | **5.9/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音视频交互 |
| 123 | [音频里藏着文本时还硬做解耦：MDF 只拆音频再按贡献加权](/posts/conference-aaai-2026-conference-paper-id-40392-fde8cbf569/) | [MDF: A Modality\-Aware Disentanglement and Fusion Framework for Multimodal Sentiment Analysis](/posts/conference-aaai-2026-conference-paper-id-40392-fde8cbf569/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.9/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 124 | [按时刻定点而不是按整片贴标签：SafeLens 如何把语音、字幕和画面拼成可申诉的审核证据](/posts/conference-aaai-2026-conference-paper-id-42390-4dd4d4fb0a/) | [SafeLens: Segment\-Level Hate Speech Detection in Online Videos](/posts/conference-aaai-2026-conference-paper-id-42390-4dd4d4fb0a/) | **5.9/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音视频理解 |
| 125 | [无标注数据用不满：用分频带扩散扰动与全局\-类别置信留住更多样本](/posts/conference-aaai-2026-conference-paper-id-37124-077776cb67/) | [Every Little Bit Helps: Exploring Better Utilization of Unlabeled Data for Semi\-supervised Singing Melody Extraction Using Multi\-bands Diffusion Model](/posts/conference-aaai-2026-conference-paper-id-37124-077776cb67/) | **5.8/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音高与旋律提取 |
| 126 | [先对齐个性再逐层融合：PSA\-MF 如何处理情感表达的个体差异与模态异构](/posts/conference-aaai-2026-conference-paper-id-37202-54f8949fe1/) | [PSA\-MF: Personality\-Sentiment Aligned Multi\-Level Fusion for Multimodal Sentiment Analysis](/posts/conference-aaai-2026-conference-paper-id-37202-54f8949fe1/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 127 | [以关键姿态为动机：MotivDance 如何把细粒度文本钉到音乐节拍上再补间成舞](/posts/conference-aaai-2026-conference-paper-id-37528-8c745c9adb/) | [MotivDance: Fine\-Grained Text\-Guided Motivation Choreography with Music Synchronization](/posts/conference-aaai-2026-conference-paper-id-37528-8c745c9adb/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音乐理解 |
| 128 | [把病理性语音拉回正常编码：EA\-VAE 用三处对齐做重构](/posts/conference-aaai-2026-conference-paper-id-40766-9e36a9b62a/) | [EA\-VAE: Learning to Reconstruct Dysarthric Speech via Variational Autoencoder with Encoding Alignment](/posts/conference-aaai-2026-conference-paper-id-40766-9e36a9b62a/) | **5.8/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音转换 |
| 129 | [高层偏向视频、跨模态不宜直并：AccKV 按层聚焦再校准压缩音视频 KV](/posts/conference-aaai-2026-conference-paper-id-37467-eed224abba/) | [AccKV: Towards Efficient Audio\-Video LLMs Inference via Adaptive\-Focusing and Cross\-Calibration KV Cache Optimization](/posts/conference-aaai-2026-conference-paper-id-37467-eed224abba/) | **5.7/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音视频理解 |
| 130 | [模态竞争下如何协作：PaSE 用原型校准与 Shapley 均衡做多模态情感分析](/posts/conference-aaai-2026-conference-paper-id-40355-c5db8e3e8b/) | [PaSE: Prototype\-aligned Calibration and Shapley\-based Equilibrium for Multimodal Sentiment Analysis](/posts/conference-aaai-2026-conference-paper-id-40355-c5db8e3e8b/) | **5.7/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 131 | [看不清字、听得出音：MMBERT 用三路专家对付中文伪装仇恨言论](/posts/conference-aaai-2026-conference-paper-id-40715-1224b535a6/) | [MMBERT: Scaled Mixture\-of\-Experts Multimodal BERT for Robust Chinese Hate Speech Detection Under Cloaking Perturbations](/posts/conference-aaai-2026-conference-paper-id-40715-1224b535a6/) | **5.7/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频分类 |
| 132 | [长片先切准场景再判好笑：视觉加字幕与笑声加文本的幽默片段流水线](/posts/conference-aaai-2026-conference-paper-id-41480-3955475a8e/) | [Automatic Funny Scene Extraction from Long\-form Cinematic Videos](/posts/conference-aaai-2026-conference-paper-id-41480-3955475a8e/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #音视频理解 |
| 133 | [从短行为模拟内部认知：用个性化权重图回归真实人格](/posts/conference-aaai-2026-conference-paper-id-37167-550cf669d3/) | [Learning Personalised Human Internal Cognition from External Expressive Behaviours for Real Personality Recognition](/posts/conference-aaai-2026-conference-paper-id-37167-550cf669d3/) | **5.6/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音视频理解 |
| 134 | [先对齐多帧运动、再用声音补嘴部细节：GAVN 的时域与身份互补修复](/posts/conference-aaai-2026-conference-paper-id-37254-0a211100ab/) | [Audio\-Assisted Face Video Restoration with Temporal and Identity Complementary Learning](/posts/conference-aaai-2026-conference-paper-id-37254-0a211100ab/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音视频生成 |
| 135 | [用光流解耦外观与运动、再用强度引导噪声搜索压住闪烁的说话头生成](/posts/conference-aaai-2026-conference-paper-id-37684-6cc23a035c/) | [ConsistTalk: Intensity Controllable Temporally Consistent Talking Head Generation with Diffusion Noise Search](/posts/conference-aaai-2026-conference-paper-id-37684-6cc23a035c/) | **5.6/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.6/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #音视频生成 |
| 136 | [回归标签太粗、增强又破坏融合：用潜在情感分组做测试时自监督](/posts/conference-aaai-2026-conference-paper-id-39782-eccd886e45/) | [Group\-aware Multiscale Ensemble Learning for Test\-Time Multimodal Sentiment Analysis](/posts/conference-aaai-2026-conference-paper-id-39782-eccd886e45/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 137 | [先对齐再分家：PLUM\-Net 用原型标签拆开共有与私有表征](/posts/conference-aaai-2026-conference-paper-id-38928-ae9f87d7cb/) | [PLUM\-Net: Prototype\-Induced Label Structuring for Disentangled Multimodal Representation Network](/posts/conference-aaai-2026-conference-paper-id-38928-ae9f87d7cb/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 138 | [双人同时动还要各像各的：DialoGen 如何把互动与个人风格分开建模](/posts/conference-aaai-2026-conference-paper-id-38327-bb675629c6/) | [DialoGen: Towards Dialog Gesture Generation via Identity\-Decoupled Style Guidance in Interactive Diffusion Model](/posts/conference-aaai-2026-conference-paper-id-38327-bb675629c6/) | **5.4/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 方法研究 | #音视频交互 |
| 139 | [似然能学会音符，对不上人心：音乐生成的偏好对齐怎么做](/posts/conference-aaai-2026-conference-paper-id-41323-e4eac679ac/) | [Aligning Generative Music AI with Human Preferences: Methods and Challenges](/posts/conference-aaai-2026-conference-paper-id-41323-e4eac679ac/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 综述 | #音乐生成 |
| 140 | [广告审核为何需要跨模态因果链：BLM\-Guard 的两阶段策略](/posts/conference-aaai-2026-conference-paper-id-40914-13e38e3157/) | [BLM\-Guard: Explainable Multimodal Ad Moderation with Chain\-of\-Thought and Policy\-Aligned Rewards](/posts/conference-aaai-2026-conference-paper-id-40914-13e38e3157/) | **5.3/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 方法研究 | #音视频理解 |
| 141 | [一句话生成可玩视觉小说：AniTales 如何用情绪标签对齐故事、立绘与配音](/posts/conference-aaai-2026-conference-paper-id-42181-f011c32e74/) | [AniTales: End\-to\-End Multimodal Story Generation Through Natural Language Prompting \(Student Abstract\)](/posts/conference-aaai-2026-conference-paper-id-42181-f011c32e74/) | **5.0/10** · 创新 1.1/2 · 技术严谨 0.9/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.4/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音视频生成 |
| 142 | [倾听与报警并行：校园双语语音对话如何在共情流程中嵌入高风险检测](/posts/conference-aaai-2026-conference-paper-id-42362-78b9d3e5e2/) | [Risk\-Aware Bilingual Spoken Dialogue for Campus Mental Health Support](/posts/conference-aaai-2026-conference-paper-id-42362-78b9d3e5e2/) | **4.8/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #语音对话系统 |
| 143 | [先发现结构再贴标签：用无监督组织对抗 soundscape 的域偏移与复音](/posts/conference-aaai-2026-conference-paper-id-42161-bfca68af7f/) | [Creating Generalizable Data\-Driven Approaches for Biodiversity Monitoring via Acoustics](/posts/conference-aaai-2026-conference-paper-id-42161-bfca68af7f/) | **4.7/10** · 创新 1.0/2 · 技术严谨 0.8/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #音频事件检测 |
| 144 | [干净集打平、噪声下才拉开差距：SwinV2 与 AST 的蚊种对数加权融合](/posts/conference-aaai-2026-conference-paper-id-42196-b28d2b3ef9/) | [WingBeats and Snapshots: Fusing Sound and Vision for Mosquito Monitoring \(Student Abstract\)](/posts/conference-aaai-2026-conference-paper-id-42196-b28d2b3ef9/) | **4.5/10** · 创新 0.8/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #音频分类 |
| 145 | [口音表征记住说话人：先测泄漏再做去说话人化](/posts/conference-aaai-2026-conference-paper-id-42326-80317f0d15/) | [De\-Speakerizing Accented ASR: Measuring and Mitigating Speaker Entanglement for Fair, Reliable Recognition](/posts/conference-aaai-2026-conference-paper-id-42326-80317f0d15/) | **3.8/10** · 创新 1.0/2 · 技术严谨 0.8/1.5 · 实验充分 0.2/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 方法研究 | #语音识别 |
| 146 | [把混响时间锁在目标附近：感知加控制的自调节厅堂闭环](/posts/conference-aaai-2026-conference-paper-id-42315-c370c6064d/) | [AI\-Driven Real\-Time Acoustic Modelling for Better Audio Perception in Dynamic Environments](/posts/conference-aaai-2026-conference-paper-id-42315-c370c6064d/) | **3.6/10** · 创新 1.0/2 · 技术严谨 0.5/1.5 · 实验充分 0.2/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 系统技术报告 | #去混响 |
| 147 | [让大语言模型直接听出谁在何时说话：联合转写与切分的原生 diarisation 方案](/posts/conference-aaai-2026-conference-paper-id-42324-925f54e3e6/) | [Native Speech Processing with LLMs](/posts/conference-aaai-2026-conference-paper-id-42324-925f54e3e6/) | **3.6/10** · 创新 1.0/2 · 技术严谨 0.8/1.5 · 实验充分 0.0/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 方法研究 | #说话人分离标注 |

---

## 📋 论文列表

### 1. [野外长音频与多音频并存时，模型为何听得到却答不对](/posts/conference-aaai-2026-conference-paper-id-39430-5195edb6fa/)

> 英文题目：*[MMAU\-Pro: A Challenging and Comprehensive Benchmark for Holistic Evaluation of Audio General Intelligence](/posts/conference-aaai-2026-conference-paper-id-39430-5195edb6fa/)*

标签：#基准测试 #基准设计 #长音频处理 #空间音频信号 #音频问答

评分：**8.7/10** | 创新 1.6/2 | 技术严谨 1.3/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#基准设计

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39430) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39430/43391)

👥 **作者与机构**

- Sonal Kumar：机构信息未能从会议 PDF 纯文本可靠映射
- Šimon Sedláček：机构信息未能从会议 PDF 纯文本可靠映射
- Vaibhavi Lokegaonkar：机构信息未能从会议 PDF 纯文本可靠映射
- Fernando López：机构信息未能从会议 PDF 纯文本可靠映射
- Wenyi Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Nishit Anand：机构信息未能从会议 PDF 纯文本可靠映射
- Hyeonggon Ryu：机构信息未能从会议 PDF 纯文本可靠映射
- Lichang Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Maxim Plička：机构信息未能从会议 PDF 纯文本可靠映射
- Miroslav Hlaváček：机构信息未能从会议 PDF 纯文本可靠映射
- William Fineas Ellingwood：机构信息未能从会议 PDF 纯文本可靠映射
- Sathvik Udupa：机构信息未能从会议 PDF 纯文本可靠映射
- Siyuan Hou：机构信息未能从会议 PDF 纯文本可靠映射
- Allison Ferner：机构信息未能从会议 PDF 纯文本可靠映射
- Sara Barahona：机构信息未能从会议 PDF 纯文本可靠映射
- Cecilia Bolaños：机构信息未能从会议 PDF 纯文本可靠映射
- Satish Rahi：机构信息未能从会议 PDF 纯文本可靠映射
- Laura Herrera\-Alarcón：机构信息未能从会议 PDF 纯文本可靠映射
- Satvik Dixit：机构信息未能从会议 PDF 纯文本可靠映射
- Siddhi Patil：机构信息未能从会议 PDF 纯文本可靠映射
- Soham Deshmukh：机构信息未能从会议 PDF 纯文本可靠映射
- Lasha Koroshinadze：机构信息未能从会议 PDF 纯文本可靠映射
- Yao Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Leibny Paola Garcia Perera：机构信息未能从会议 PDF 纯文本可靠映射
- Eleni Zanou：机构信息未能从会议 PDF 纯文本可靠映射
- Themos Stafylakis：机构信息未能从会议 PDF 纯文本可靠映射
- Joon Son Chung：机构信息未能从会议 PDF 纯文本可靠映射
- David Harwath：机构信息未能从会议 PDF 纯文本可靠映射
- Chao Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Dinesh Manocha：机构信息未能从会议 PDF 纯文本可靠映射
- Alicia Lozano\-Diez：机构信息未能从会议 PDF 纯文本可靠映射
- Santosh Kesiraju：机构信息未能从会议 PDF 纯文本可靠映射
- Sreyan Ghosh：机构信息未能从会议 PDF 纯文本可靠映射
- Ramani Duraiswami：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为语音、环境声、音乐及其混合的单段或多段野外录音，时长可达10分钟，输出为多选与开放式答案，要求多跳推理、跨片段融合、空间定位与文化多样性理解，难点在于长时稀疏事件定位与多源干扰下的深度接地。首先专家界定49种技能配额并从野外采集音频，其采集音频直接作为问答编写的接地素材。接着手工编写需多跳推理的问答与高强度干扰项，其初稿交由第二专家独立校验并迭代修订以完成语法风格与文化敏感性检查。最后按领域与时长分档平衡5305个样本并固化嵌入匹配与LLM裁判的评测协议以支撑可复现评分。相对短片段单音频基准的关键机制差异在于原生多音频输入、双耳空间输入、分钟级稀疏事件针尖题与语音指令约束可验证子集，其实质意义在于联合检验长时、空间与多源融合等真实部署能力。在MMAU\-Pro基准下，Gemini 2\.5 Flash的准确率为59\.2%，高于Audio Flamingo 3的51\.7%。该结论的适用边界仅限所收录语言文化分布与离线问答形式，流式交互与低资源声学迁移尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://sonalkum.github.io/mmau-pro> → <https://sonalkum.github.io/mmau-pro/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 2. [推理与分割打架时：AURORA 用四步推理加蒸馏保住像素精度](/posts/conference-aaai-2026-conference-paper-id-37714-d2bab18a10/)

> 英文题目：*[AURORA: Augmented Understanding via Structured Reasoning and Reinforcement Learning for Reference Audio\-Visual Segmentation](/posts/conference-aaai-2026-conference-paper-id-37714-d2bab18a10/)*

标签：#知识蒸馏 #强化学习 #音视频 #音视频理解

评分：**8.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音视频理解 | 主方法：#强化学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37714) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37714/41676)

👥 **作者与机构**

- Ziyang Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Nian Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Fahad Shahbaz Khan：机构信息未能从会议 PDF 纯文本可靠映射
- Junwei Han：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

参考音频视觉分割（Reference Audio\-Visual Segmentation，Ref\-AVS）要求同时整合视频、音频与文本指代，定位并像素级分割发声目标，难点在于跨模态指代消解不清与联合训练推理和分割互相损伤。方法分三阶段推进：先用四步结构化思维链（Chain\-of\-Thought，CoT）做有监督微调（Supervised Fine\-Tuning，SFT），强制模型依次做视频描述、音频描述、指代分析与最终答案，最终句式固定为 the target is \{class name\} 后接 It is \`\[SEG\]\`；同步用分割特征蒸馏约束学生 \`\[SEG\]\` 嵌入逼近纯分割教师并冻结掩膜解码器，隔离推理梯度；再将失败样本改写为错误路径加触发语加修正路径的反射样本做校准，最后用组相对策略优化（Group Relative Policy Optimization，GRPO）做强化，奖励为格式奖励加交并比（Intersection over Union，IoU）奖励加类别奖励。与依赖辅助文本编码器融合或简单模板事后解释的基线相比，关键差异是把推理学习与像素保真显式解耦并引入自我纠错信号。在 Ref\-AVS 测试集上该框架可见划分达到 63\.2 的 Jaccard 指数（J）和 72\.8 的 F 分数（F），未见划分达到 69\.7 的 J 和 76\.4 的 F，混合平均为 66\.5 的 J 和 74\.6 的 F，明显超越次优基线并在未见类保持优势。结论仅在短视频二分类指代分割与通用发声目标迁移上验证，长时、多目标、空指代与同义词外推尚未证明。原文未披露训练时长、推理延迟与部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Sssssuperior/AURORA> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 3. [不只测好听：TTA\-Bench 把准确、可靠与责任放在同一张考卷上](/posts/conference-aaai-2026-conference-paper-id-40639-41e692199b/)

> 英文题目：*[TTA\-Bench: A Comprehensive Benchmark for Evaluating Text\-to\-Audio Models](/posts/conference-aaai-2026-conference-paper-id-40639-41e692199b/)*

标签：#基准测试 #基准设计 #主观评测 #音频生成

评分：**8.4/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频生成 | 主方法：#基准设计

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40639) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40639/44600)

👥 **作者与机构**

- Hui Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Cheng Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Junyang Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Haoze Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhang Jia：机构信息未能从会议 PDF 纯文本可靠映射
- Shiwan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaming Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Haoqin Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Hui Bu：机构信息未能从会议 PDF 纯文本可靠映射
- Yong Qin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

文本到音频以自然语言提示为输入生成通用声音波形，输出需兼顾音质与语义时序对齐，难点在于无参考条件下难以客观刻画组合推理，且泛化鲁棒与公平毒性长期缺乏可复用评测。作者先按功能质量可靠性责任感划分准确率效率泛化鲁棒性公平性偏置毒性七维，并通过数据集抽取模板生成人工改写与视觉转听觉构建2999条多样化提示，为统一比较提供输入。上一步提示进入下一步统一生成环节，对十个主流模型生成音频并施加AES与CLAP客观指标，加专家与众包十点量表主观打分，形成可对齐的分数。最后汇总七维结果并以扰动一致性人口组配对与声音毒性迁移协议输出比较结论，使部署评估直接复用统一分数。与仅测音质或时间对齐的既有评测相比，关键差异在于引入分布外想象场景扰动一致性人口组配对与声音毒性迁移等可复用协议，使安全公平成为一等公民，具有实际部署意义。在准确率基准下，Tango 2的CLAP为0\.46，高于MAGNeT的0\.39。结论适用边界限于所定义提示分布短音频通用声音与评测者群体，向开放域长音频与多语言部署的外推尚未验证。推理开销在单块RTX 4090硬件上以实时因子测量，训练成本未见披露。

🔗 **开源资源**

- 代码相关资源：<https://nku-hlt.github.io/tta-bench/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://nku-hlt.github.io/tta-bench/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 4. [在二值脉冲上做长短时序建模：SpikCommander 的多视角注意力与上下文 MLP](/posts/conference-aaai-2026-conference-paper-id-37194-90602325c5/)

> 英文题目：*[SpikCommander: A High\-performance Spiking Transformer with Multi\-view Learning for Efficient Speech Command Recognition](/posts/conference-aaai-2026-conference-paper-id-37194-90602325c5/)*

标签：#注意力机制 #CNN #Transformer #高效推理 #关键词检测

评分：**8.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#关键词检测 | 主方法：#Transformer

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37194) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37194/41156)

👥 **作者与机构**

- Jiaqi Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Liutao Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiongri Shen：机构信息未能从会议 PDF 纯文本可靠映射
- Sihang Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Chenlin Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Leilei Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Yi Zhong：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiguo Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengyu Ma：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音命令识别需将可变长语音映射为离散命令标签，难点在于脉冲神经网络的二值稀疏脉冲难以保留细粒度时序依赖与通道语义。脉冲嵌入提取器先以深度可分离卷积与逐点卷积将原始脉冲序列或梅尔谱转化为结构化脉冲嵌入，为注意力提供时序保持的输入。多视角脉冲时序感知自注意力并行部署滑动窗口分支建模局部依赖、长程分支建模全局上下文与卷积分支捕获位移不变模式，其融合输出进入下一步的通道精炼。脉冲上下文精炼多层感知机接着做通道扩张混合与通道切分选择性时序精炼，再投影回原维度以增强空时特征，最后经逐时间步 Softmax累加分类。与依赖二次矩阵乘的脉冲自注意力不同，该方法以时序求和加广播哈达玛积实现线性复杂度并显式分离多尺度视角，降低冗余计算。在GSC基准下，SpikCommander两层模型的准确率为96\.92%，高于SpikeSCR两层基线的95\.60%。该结论适用边界受限于SHD、SSC与GSC受控评测与固定预处理流水线，尚未验证开放词汇与强噪声下的失效模式，且其推理开销与能耗为理论估算而非神经形态硬件实测。

🔗 **开源资源**

- 代码相关资源：<https://github.com/JackieWang9811/SCommander> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 5. [边听边译不重算：全单向架构如何让大模型学会何时读、何时写](/posts/conference-aaai-2026-conference-paper-id-40330-c78b8dea33/)

> 英文题目：*[Efficient and Adaptive Simultaneous Speech Translation with Fully Unidirectional Architecture](/posts/conference-aaai-2026-conference-paper-id-40330-c78b8dea33/)*

标签：#多任务学习 #大语言模型 #高效推理 #流式处理 #语音翻译

评分：**8.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音翻译 | 主方法：#多任务学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40330) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40330/44291)

👥 **作者与机构**

- Biao Fu：机构信息未能从会议 PDF 纯文本可靠映射
- Donglei Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Minpeng Liao：机构信息未能从会议 PDF 纯文本可靠映射
- Chengxi Li：机构信息未能从会议 PDF 纯文本可靠映射
- Xinjie Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yidong Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Kai Fan：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaodong Shi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

同步语音翻译以流式语音为输入增量生成译文，需在仅见语音前缀时决策读写以平衡翻译质量与延迟。在多延迟数据构造中，EASiST先用大语言模型在三档延迟下将离线三元组切分为语义块并经强制对齐得到语音块，构造单调交错训练样本。接着将语音块与译文块交错排列并插入读写标记，以完全单向的流式编码器与大语言模型建模增量生成，语音块输出直接进入下一步翻译。然后经三阶段训练依次学习交错格式、语音文本对齐与联合翻译加策略，轻量策略头依据隐状态自适应预测读写并复用双侧缓存。与依赖双向编码器重复编码或固定读写策略的方法不同，该设计避免历史反复重算并实现延迟自适应，具有降低计算量的实际意义。在单卡A100硬件推理开销评测设置下，EASiST的推理速度指标为28\.95 ms/token，低于wait\-k基线的38\.51 ms/token。在MuST\-C英德低延迟与Europarl\-ST英西中低延迟任务中分别取得1个以上和3个以上BLEU增益，验证跨域鲁棒性。该结论适用边界受限于英德与英西朗读式议会语音，尚未验证长语音无界流与噪声场景，训练成本共33小时且流式延迟接近离线速度。

🔗 **开源资源**

- 代码相关资源：<https://github.com/biaofuxmu/EASiST> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 6. [从能转写到能听懂言外之意：HPSU 如何检验语音大模型的类人听觉](/posts/conference-aaai-2026-conference-paper-id-40419-d5d0deb85f/)

> 英文题目：*[HPSU: A Benchmark for Human\-Level Perception in Real\-World Spoken Speech Understanding](/posts/conference-aaai-2026-conference-paper-id-40419-d5d0deb85f/)*

标签：#基准测试 #基准设计 #多语言 #语音 #口语理解

评分：**8.2/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#口语理解 | 主方法：#基准设计

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40419) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40419/44380)

👥 **作者与机构**

- Chen Li：机构信息未能从会议 PDF 纯文本可靠映射
- Peiji Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Yicheng Zhong：机构信息未能从会议 PDF 纯文本可靠映射
- Jianxing Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhisheng Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zihao Gou：机构信息未能从会议 PDF 纯文本可靠映射
- Wenqing Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Jian Yin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

人类口语理解要求从真实语音中联合推断说话人属性、潜意图与隐含情绪，输入为带噪声的自然对话音频，输出为属性与推理判断，难点在于声学线索微弱、语义含混且跨语言文化差异大。为此作者构建三阶段半自动标注链，先从影视与社交视频采集并做质量增强与转写，再用大语言模型生成先验并分别驱动音频与视觉模型抽取描述并交叉验证，最后经推理模型分层融合成多视角描述并转写为评测三元组。相对已有基准仅覆盖粗粒度分类，该设计以多模态互证替代纯人工标注，以校准干扰项与正负诱导提示显式度量细粒度辨别与鲁棒性。在涵盖16项任务的中英评测中，最强专有模型平均准确率为62\.6%，显著低于人类基线的87\.3%，尤其在场景与失配推理上差距突出。该结论适用于影视式自然对话的中英口语，深层推理仍受音频质量与文化表达影响，外推至会议或低资源语言尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Ichen12/HPSU-Benchmark> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 7. [不用从噪声里学语法：PASE 直接借用 WavLM 的语音结构先验做低幻觉增强](/posts/conference-aaai-2026-conference-paper-id-40562-a3a95062d1/)

> 英文题目：*[PASE: Leveraging the Phonological Prior of WavLM for Low\-Hallucination Generative Speech Enhancement](/posts/conference-aaai-2026-conference-paper-id-40562-a3a95062d1/)*

标签：#知识蒸馏 #生成模型 #语音学与音系 #语音 #语音增强

评分：**8.2/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音增强 | 主方法：#知识蒸馏

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40562) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40562/44523)

👥 **作者与机构**

- Xiaobin Rong：机构信息未能从会议 PDF 纯文本可靠映射
- Qinwen Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Mansur Yesilbursa：机构信息未能从会议 PDF 纯文本可靠映射
- Kamil Wojcicki：机构信息未能从会议 PDF 纯文本可靠映射
- Jing Lu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音增强需从含噪混响混合中恢复可懂且自然的目标语音，极低信噪比下生成式方法易臆造音素序列或漂移说话人音色，传统非侵入式质量分难以检出此类语言与声学幻觉。本文提出音系锚定语音增强器PASE，先将预训练WavLM\-Large经去噪表征蒸馏适配为去噪专家，以干净表征为回归目标约束含噪输入的深层输出，保留音素判别力与上下文重构能力。去噪专家输出的深层音系表征随后送入双流声码器，与浅层声学表征融合后重建波形，深层负责语言内容而浅层补充音色细节。与从带噪离散词元中学习先验的语言模型范式不同，该框架直接复用掩码预测习得的长程音系先验并保持连续空间，避免先验污染与局部捷径重构。在LibriTTS测试集下，采用拼接融合的词错误率WER为7\.49%，低于无声学条件基线的7\.62%。该声学 conditioning使说话人相似度从0\.57升至0\.80，以浅层残留噪声带来的感知分小幅下降换取声学幻觉抑制。在DNS1含混响场景下的语言完整性优势尚需更多验证，强混响强度失配与极端失配噪声下的外推尚未验证，双流引入的残留噪声使感知质量受限。全流程在4卡NVIDIA RTX 4090硬件上训练，去噪专家训练10万步且声码器在冻结去噪专家后训练20万步，双流融合仅增加少量计算量。

🔗 **开源资源**

- 代码相关资源：<https://github.com/cisco-open/pase> — 链接可访问（HTTP 200）
- 演示资源：<https://xiaobin-rong.github.io/pase> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 8. [先分离再生成：MACS 如何把混合声音拆开并对齐语义来画图](/posts/conference-aaai-2026-conference-paper-id-38368-849c1c8552/)

> 英文题目：*[MACS: Multi\-source Audio\-to\-image Generation with Contextual Significance and Semantic Alignment](/posts/conference-aaai-2026-conference-paper-id-38368-849c1c8552/)*

标签：#对比学习 #扩散模型 #音频分离 #音视频生成

评分：**8.1/10** | 创新 1.6/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38368) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38368/42330)

👥 **作者与机构**

- Hao Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaobao Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Yuzhe Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Adams Wai\-Kin Kong：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多源音频到图像生成需将含重叠事件的混合波形映射为语义完备的单幅图像，难点在于源间纠缠、上下文显著性不均以及多事件条件融合时易被平均化为模糊语义。MACS采用先分离后生成的两阶段链，第一阶段用频谱域U\-Net由混合频谱幅度预测掩码并结合原始相位经逆变换重构出多路子音频，以混合物之混合重构损失在最优二划分下解决源排序含糊与无监督可分离性问题。同一阶段在冻结CLAP空间内以对比损失对齐分离音频嵌入与文本标签嵌入的语义，并以可微Spearman排序损失约束混合物与各分离嵌入相似度的排序，从而保留并区分关键声源的上下文显著性。第二阶段冻结稳定扩散基座，仅训练解耦交叉注意力音频分支键值矩阵与含位置编码的多层感知机，将多路CLAP音频嵌入融合为扩散条件参与去噪生成。在LLP\-multi多源基准任务下，MACS的FID为87\.09，低于Sound2Scene的105\.14。与直接编码混合音频的已有方法不同，该先显式解耦再按显著性加权融合的机制避免了单向量平均化多事件，分离出的音频嵌入可形成更局部化的注意力并迁移增强已有基线。该结论适用边界受限于含标签短剪辑与LLP等多源语料，对开集声音、大源数重叠与分离失败退化的泛化尚未验证。训练在单块RTX4090D硬件上以批量十六完成，扩散多步采样的推理开销与两阶段流水线的计算量仍制约低延迟部署。

🔗 **开源资源**

- 代码相关资源：<https://github.com/alxzzhou/MACS> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 9. [先按人找声音，再按位置修声音：用空间相关增强 HRTF 个性化](/posts/conference-aaai-2026-conference-paper-id-38803-df80bd3288/)

> 英文题目：*[Graph Neural Field with Spatial\-Correlation Augmentation for HRTF Personalization](/posts/conference-aaai-2026-conference-paper-id-38803-df80bd3288/)*

标签：#图神经网络 #检索增强 #空间音频信号 #空间音频渲染

评分：**8.1/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#空间音频渲染 | 主方法：#图神经网络

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38803) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38803/42765)

👥 **作者与机构**

- De Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Junsheng Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Cuicui Jiang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

头相关传输函数个性化需以未见受试者在极少数方向的实测线索为输入，预测其在全部空间方向的双耳幅度谱，难点在于声波与头、躯干及耳廓相互作用高度非线性，且现有数据集规模受限而难以稠密采样。所提图神经场空间相关增强方法先由基于受试者检索的图个性化模块构建全连接受试者图，以编码器提取通用特征并由解码器嵌入目标耳间特征生成各方向初值；再由基于几何邻域检索的图上采样模块学习跨方向空间相关；最后将前者全部方向输出送入后者进行全连接层微调，从而强化空间一致性。与逐点独立估计的检索增强神经场不同，该方法显式引入跨方向图传播与个性化、上采样两阶段协同，使预测不再位置独立而具有几何约束。在SONICOM数据集听者声学个性化挑战评测条件下，GraphNF\-SCA方法的LSD指标为3\.60 dB，低于RANF基线的4\.41 dB。该结论适用边界受限于幅度谱与最小相位假设，尚未验证相位重建与感知定位收益，且依赖目标少量方向实测做耳间特征检索。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/hu-junsheng/GraphNF-SCA> — 链接可访问（HTTP 200）
- 数据相关资源：<https://www.sonicom.eu/lap-challenge> → <https://www.sonicom.eu/lap-challenge/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 10. [解耦分词与多词元预测为何能同时改善语音对齐与合成质量](/posts/conference-aaai-2026-conference-paper-id-40318-f7b7e99355/)

> 英文题目：*[What Makes a Good Speech Tokenizer for LLM\-Centric Speech Generation? A Systematic Study](/posts/conference-aaai-2026-conference-paper-id-40318-f7b7e99355/)*

标签：#数据集 #向量量化 #大语言模型 #语音 #文本到语音

评分：**8.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#文本到语音 | 主方法：#向量量化

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40318) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40318/44279)

👥 **作者与机构**

- Xiaoran Fan：机构信息未能从会议 PDF 纯文本可靠映射
- Zhichao Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Yangfan Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Jingfei Xiong：机构信息未能从会议 PDF 纯文本可靠映射
- Hang Yan：机构信息未能从会议 PDF 纯文本可靠映射
- Yifei Cao：机构信息未能从会议 PDF 纯文本可靠映射
- Jiajun Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Shuo Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhihao Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiheng Xi：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhao Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Senjie Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Changhao Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Junjie Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Ming Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Rui Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenhua Han：机构信息未能从会议 PDF 纯文本可靠映射
- Yunke Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Demei Yan：机构信息未能从会议 PDF 纯文本可靠映射
- Shaokang Dong：机构信息未能从会议 PDF 纯文本可靠映射
- Tao Ji：机构信息未能从会议 PDF 纯文本可靠映射
- Tao Gui：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作研究以大语言模型（Large Language Model，LLM）为骨干的语音语言模型（Speech\-Language Model，SLM）如何同时保留文本知识与生成高质量语音，输入为文本指令与说话人参考，输出为特定音色的连续语音，难点是语音每秒数百个离散码而文本每秒不足20个词的信息密度失衡，以及语义与声学目标互相干扰。方法链分三步：首先在统一SLM框架下对比耦合、半解耦、全解耦三类语音分词器，语音码经由预训练神经声码器解码器重建波形；接着引入多码预测（Multi\-Token Prediction，MTP），将相邻$g$个语音码编组，用同一隐向量$h\_j$并行预测组内全部码，输入侧拼接组内嵌入再经融合网络压缩；最后引入说话人感知生成，用预训练音色提取器抽取表征$X\_\{user\}$作为上下文前缀，并用角色扮演知识问答做联合微调。与已有方法相比，关键差异是把语义与韵律音色彻底解耦并用组并行预测替代逐码预测（Next Token Prediction，NTP），把对齐负担从长序列建模转移到高密度隐状态建模。在LibriTTS Test\-Clean上解耦MTP\-12H将词错误率（Word Error Rate，WER）从6\.07降至3\.01，合成成功率达1\.00，并声称最高约12倍解码加速；在RoleTriviaQA域内以12\.0%的精确匹配（Exact Match，EM）和23\.8%的F1超过LLM骨干与全部耦合基线。该结论主要在英文朗读与合成角色问答上验证，对真实噪声、自发对话、强情感韵律及跨语言外推尚未验证。原文未披露训练推理部署成本与完整超参数。

🔗 **开源资源**

- 代码相关资源：<https://github.com/cnxupupup/SLM-Decoupled-MTP> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 11. [不做反演的音乐编辑：用分数蒸馏把改动留在数据空间](/posts/conference-aaai-2026-conference-paper-id-37181-6b14c22853/)

> 英文题目：*[SteerMusic: Enhanced Musical Consistency for Zero\-shot Text\-Guided and Personalized Music Editing](/posts/conference-aaai-2026-conference-paper-id-37181-6b14c22853/)*

标签：#扩散模型 #零样本 #音乐 #音乐生成

评分：**8.0/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音乐生成 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37181) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37181/41143)

👥 **作者与机构**

- Xinlei Niu：机构信息未能从会议 PDF 纯文本可靠映射
- Kin Wai Cheuk：机构信息未能从会议 PDF 纯文本可靠映射
- Jing Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Naoki Murata：机构信息未能从会议 PDF 纯文本可靠映射
- Chieh\-Hsin Lai：机构信息未能从会议 PDF 纯文本可靠映射
- Michele Mancusi：机构信息未能从会议 PDF 纯文本可靠映射
- Woosung Choi：机构信息未能从会议 PDF 纯文本可靠映射
- Giorgio Fabbro：机构信息未能从会议 PDF 纯文本可靠映射
- Wei\-Hsiang Liao：机构信息未能从会议 PDF 纯文本可靠映射
- Charles Patrick Martin：机构信息未能从会议 PDF 纯文本可靠映射
- Yuki Mitsufuji：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

文本引导音乐编辑输入源音频与源/目标文本提示，输出保留原曲旋律结构而按目标语义改变音色或风格的音频，难点在于前向加噪再去噪的反演路径会引入不可逆旋律失真，且粗粒度文本难以精确描述细粒度目标。SteerMusic先以可微渲染在数据空间直接优化源音频，以源提示与目标提示下去噪分数之差提供编辑方向从而避免反演。SteerMusic\+将该框架扩展为个性化编辑，引入在参考音频上微调的个性化扩散模型提供概念方向，并以分布偏移正则与时序对比约束平衡概念保真与内容保留，前一步的数据空间优化输出直接作为后两项约束共同作用的待优化变量。与DDIM、SDEdit、ZETA和MusicMagus等同基座前后向流水线相比，该方法链以分数差分替代反演重建，从机制上解耦内容保持与语义转向，因而能更好地兼顾旋律一致性与编辑保真度。在ZoME\-Bench基准零样本编辑任务评测下，SteerMusic的CQT1\-PCC为0\.480，高于DDIM的0\.330。该结论受限于基座生成模型表达力与个性化微调充分性，尚未验证高采样率与强分布外概念下的外推，失败条件集中于微调不足或过拟合导致的概念缺失与结构破坏。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/sony/steermusic> — 链接可访问（HTTP 200）
- 演示资源：<https://steermusic.pages.dev/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 12. [既听内容又听语气：SageLM 如何端到端评判语音对话](/posts/conference-aaai-2026-conference-paper-id-40338-3ccaffd06e/)

> 英文题目：*[SageLM: A Multi\-aspect and Explainable Large Language Model for Speech Judgement](/posts/conference-aaai-2026-conference-paper-id-40338-3ccaffd06e/)*

标签：#数据集 #指令微调 #模型评估 #可解释性 #语音对话系统

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：模型报告 | 主任务：#语音对话系统 | 主方法：#指令微调

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40338) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40338/44299)

👥 **作者与机构**

- Yuan Ge：机构信息未能从会议 PDF 纯文本可靠映射
- Junxiang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoqian Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Bei Li：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangnan Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Chenglong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Kaiyang Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Yangfan Du：机构信息未能从会议 PDF 纯文本可靠映射
- Linfeng Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuxin Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Tong Xiao：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengtao Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Jingbo Zhu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为文本查询与一对语音回答，输出真诚性等五个方面各自的胜负平标签与解释，难点在于同时判断语义正确性与情感语调等声学恰当性并保持理由一致。方法先从超反馈过滤合成三十一万级语义偏好语音对并改写对比理由，为裁判提供可学习的判断依据。接着围绕情感性别音色构建显式与隐式声学控制偏好数据，将语音指令遵循作为第五维度引入评价。然后采用两阶段含理由监督微调依次习得语义裁判与声学裁判能力，使后阶段在前阶段输出的推理格式上继续扩展声学判断。与基于规则奖励的群组相对策略优化相比，含理由监督微调强制模型先推理后判定，避免了奖励投机导致的理由与结论脱节。在AlpacaEval文本数据集的真实语音模型输出评测设置下，SageLM的准确率为81\.01%，高于Whisper\+GPT\-4o级联基线的53\.80%。该结论适用边界受限于英文合成偏好分布与短语音对，对真实对话韵律与长语音尚未验证，训练成本涉及使用8块NVIDIA A100\-SXM4\-80GB硬件进行全参数微调。

🔗 **开源资源**

- 代码相关资源：<https://github.com/IronBeliever/SageLM> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/2noise/ChatTTS> — 链接可访问（HTTP 200）
- 第三方资源：<https://platform.openai.com/docs/models/gpt-4o-mini-tts> → <https://developers.openai.com/api/docs/models/gpt-4o-mini-tts> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 13. [同样的文字为何译法不同：用双分支把重音和情绪送进语音翻译](/posts/conference-aaai-2026-conference-paper-id-40449-ddd56f95c9/)

> 英文题目：*[PLaST: Towards Paralinguistic\-aware Speech Translation](/posts/conference-aaai-2026-conference-paper-id-40449-ddd56f95c9/)*

标签：#注意力机制 #大语言模型 #语音 #语音翻译

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音翻译 | 主方法：#注意力机制

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40449) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40449/44410)

👥 **作者与机构**

- Yi Li：机构信息未能从会议 PDF 纯文本可靠映射
- Rui Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Ruiquan Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Jinsong Su：机构信息未能从会议 PDF 纯文本可靠映射
- Daimeng Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Min Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yidong Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音翻译需将源语言语音直接生成目标语言文本，难点在于语音除字面内容还携带重音、情绪与韵律等副语言线索，同词异韵会导致译文分化，而级联与强对齐端到端系统往往将其抹除。PLaST构建双分支流程：语言分支由Whisper编码器加适配器抽取语音表征，副语言分支由冻结的emotion2vec风格编码器抽取帧级风格特征。语言分支先经分层最优传输在LLM解码器多层输出上最小化Wasserstein距离，向文本语义空间提纯得到语言学忠实的表征。提纯后的语言表征作为查询，经基于注意力的检索模块从副语言特征中检索并精炼相关情绪与韵律线索，二者连同指令提示一并送入Llama2解码器生成译文。与仅做语音文本对齐的已有方法不同，该设计显式分离两类信息并在注意力层面按需融合而非将其视为噪声对齐掉，具有提升语义与语用充分性的实际意义。在CoVoST\-2基准下，PLaST\-2B的BLEU分数为41\.6，高于LLaST\-2B的41\.2。当前结论适用边界受限于英语出发的ContraProST三个方向与CoVoST\-2合并训练的6个到英语方向，尚未验证开放域口语、强噪声与未见语言的外推效果。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/YancyDan/PLaST> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 14. [用可训练插值对齐脑电、以双路编码放大目标差异的目标说话人提取](/posts/conference-aaai-2026-conference-paper-id-40514-e5008fd56d/)

> 英文题目：*[Trainable EEG Interpolation and Structure\-Sharing Dual\-Path Encoders for Brain\-Assisted Target Speaker Extraction](/posts/conference-aaai-2026-conference-paper-id-40514-e5008fd56d/)*

标签：#多模态学习 #脑信号 #语音 #目标说话人提取

评分：**8.0/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#目标说话人提取 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40514) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40514/44475)

👥 **作者与机构**

- Zhao Lv：机构信息未能从会议 PDF 纯文本可靠映射
- Haoran Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Ying Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Youdian Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Xinhui Li：机构信息未能从会议 PDF 纯文本可靠映射
- Ruibo Fu：机构信息未能从会议 PDF 纯文本可靠映射
- Cunhang Fan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

脑辅助目标说话人提取（Target Speaker Extraction）需从双人混合语音中仅凭脑电（Electroencephalogram，EEG）信号解码注意指向并重建目标波形，难点在于脑电与语音采样率严重失配且注意相关表征微弱易被干扰。所提网络TIDENet先以可训练脑电插值（Trainable EEG Interpolation，TEI）对脑电做分组转置卷积上采样以对齐语音时长，再用语音与脑电各自的结构共享双路径编码器（Structure\-sharing Dual\-path Encoders，SSDPE）并行提取目标相关与无关特征并经线性融合交互增强判别性，随后由卷积多层交叉注意力（Convolutional Multi\-layer Cross\-Attention，CMCA）实现双向模态融合，最后经双路径循环网络（Dual\-Path RNN，DPRNN）分离与转置卷积解码输出目标语音。与固定插值加单路径编码器的已有范式不同，该方法让重采样核随训练优化并显式建模无关分量以反衬相关分量。在Cocktail Party数据集上，TIDENet相对最强基线M3ANet将SI\-SDR从13\.95 dB提升至15\.63 dB，PESQ从2\.58提升至2\.97；在AVED上将SI\-SDR从10\.89 dB提升至13\.31 dB，摘要声称相对提升最高达SDR 20\.47%、SI\-SDR 22\.22%、STOI 2\.91%、ESTOI 6\.20%、PESQ 15\.84%。该结论目前仅在两组英语叙事听觉注意数据集的离线切分评测下成立，未验证跨被试、跨语种与在线因果推理的外推能力。原文未披露训练时长与推理部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/segmentFT/TIDENet> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 15. [不做离散量化：KALL\-E 以逐帧分布预测实现低帧率连续语音合成](/posts/conference-aaai-2026-conference-paper-id-40695-a6c3d85787/)

> 英文题目：*[KALL\-E: Autoregressive Speech Synthesis with Next\-Distribution Prediction](/posts/conference-aaai-2026-conference-paper-id-40695-a6c3d85787/)*

标签：#自回归模型 #测试时自适应 #变分自编码器 #文本到语音 #语音克隆

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#文本到语音 | 主方法：#自回归模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40695) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40695/44656)

👥 **作者与机构**

- Kangxiang Xia：机构信息未能从会议 PDF 纯文本可靠映射
- Xinfa Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Jixun Yao：机构信息未能从会议 PDF 纯文本可靠映射
- Wenjie Tian：机构信息未能从会议 PDF 纯文本可靠映射
- Wenhao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Lei Xie：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文面向零样本语文本到语音合成与语音克隆，输入为文本与数秒参考音频或无参考，输出为保留目标音色且自然富有表现力的波形，难点在于离散向量量化会丢失副语言细节，而高帧率建模效率低且连续回归易均值化难以刻画多峰分布。Flow\-VAE先从波形无监督学习连续语音隐分布，通过归一化流增强先验表达能力，其输出的均值方差构成语言模型的监督目标并最终由解码器还原波形。说话人编码器从3秒随机片段经ECAPA\-TDNN提取声纹隐变量并以前置条件输入，解决无参考时音色不可复现与有参考时风格捕捉不足的问题。因果Transformer拼接声纹、文本与历史隐变量逐帧预测下一帧高斯分布的均值方差，以帧级分布库尔贝克散度加终止分布散度联合优化。与下一词元预测加交叉熵及扩散头后处理的关键差异在于单自回归模型直接做下一分布预测，无需扩散组件且在12\.5Hz低帧率下保留高信息密度。在Seed\-TTS test\-zh评测下，KALL\-E的CER为0\.96，低于Llasa\-1B\-160k的2\.22。主观评测自然度领先但客观相似度仍受参考条件影响，测试时过采样会模仿参考口误，其适用边界受限于中英朗读场景且情感与长时稳定性尚未验证，推理开销上合成对应语音的计算量为7947\.48 Gflops，训练在8卡NVIDIA A100硬件上完成。

🔗 **开源资源**

- 代码相关资源：<https://github.com/xkx-hub/KALL-E> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 16. [自回归也能定长：IndexTTS2 用标记计数与情感解耦做可控零样本合成](/posts/conference-aaai-2026-conference-paper-id-40820-b0e5e79b75/)

> 英文题目：*[IndexTTS2: A Breakthrough in Emotionally Expressive and Duration\-Controlled Auto\-Regressive Zero\-Shot Text\-to\-Speech](/posts/conference-aaai-2026-conference-paper-id-40820-b0e5e79b75/)*

标签：#自回归模型 #零样本 #语音 #文本到语音

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：模型报告 | 主任务：#文本到语音 | 主方法：#自回归模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40820) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40820/44781)

👥 **作者与机构**

- Siyi Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Yiquan Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Yi He：机构信息未能从会议 PDF 纯文本可靠映射
- Xun Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Jinchao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Deng：机构信息未能从会议 PDF 纯文本可靠映射
- Jingchen Shu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

零样本语音合成（Text\-to\-Speech，TTS）输入目标文本与少量音色提示，输出保留目标音色且自然的波形，难点是自回归（Autoregressive，AR）逐 token 生成难以精确定长，且情感与音色高度纠缠。IndexTTS2 采用三级级联：文本到语义（Text\-to\-Semantic，T2S）模块以 AR Transformer 由文本、说话人特征、情感向量与可选时长嵌入生成语义 token；语义到梅尔（Semantic\-to\-Mel，S2M）模块以条件流匹配由语义特征生成梅尔谱；BigVGANv2 声码器合成波形；外挂文本到情感（Text\-to\-Emotion，T2E）模块将自然语言映射为情感分布后加权情感嵌入库。与依赖指令或外部截断的已有 AR 方案不同，该方法将目标长度经独热映射查表得到时长嵌入，并令时长嵌入表与语义位置嵌入表共享权重，使位置推进天然对齐时长预算，置零则退化为自由生成。与 CosyVoice2 等基线相比，该系统在 LibriSpeech\-test\-clean 上词错误率 3\.115%、说话人相似度 0\.870，在 SeedTTS test\-zh 上词错误率 1\.008%、韵律 MOS 4\.46，均居首位。该结论适用于中英文朗读与表演性情感配音，在极端时长缩放与超高强度情感下的清晰度与自然度边界尚未充分验证。模型在 8 张 NVIDIA A100 80GB 上训练共 3 周，推理需 AR 解码加常微分方程求解器，成本高于纯非自回归方案。

🔗 **开源资源**

- 代码相关资源：<https://github.com/index-tts/index-tts> — 链接可访问（HTTP 200）
- 演示资源：<https://index-tts.github.io/index-tts2.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 17. [内容无毒不等于语音无毒：用来源与类型双头拆分副语言毒性](/posts/conference-aaai-2026-conference-paper-id-36960-7b456c1838/)

> 英文题目：*[Beyond Content: A Comprehensive Speech Toxicity Dataset and Detection Framework Incorporating Paralinguistic Cues](/posts/conference-aaai-2026-conference-paper-id-36960-7b456c1838/)*

标签：#内容审核 #基准测试 #多任务学习 #音频分类

评分：**7.8/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频分类 | 主方法：#多任务学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/36960) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/36960/40922)

👥 **作者与机构**

- Zhongjie Ba：机构信息未能从会议 PDF 纯文本可靠映射
- Liang Yi：机构信息未能从会议 PDF 纯文本可靠映射
- Peng Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Qingcao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Qinglong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Li Lu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为英语语音波形，输出为七类毒性加安全类的类别标签与文本或副语言来源的多标签判断，难点是文本无害但语调情感有害的样本会被纯转写审核漏检。本文先整合八个真实语料并经大模型抽取标签加人工仲裁构建带来源标注的ToxiAlert\-Bench，覆盖三万余条音频与七类二十标签。本文再用文本安全语句经语音合成生成副语言有害补充样本，以补足纯韵律毒性并缓解类别不均衡。然后以Wav2Vec 2\.0编码器抽取统一表征并送入来源头与类别头分别预测来源与类别，分阶段先独立训练双头再联合微调以减少任务干扰。与仅融合情感特征或只做文本辅助多任务的方法不同，该设计把来源判别作为显式辅助任务，具有实际可解释的审核意义。在ToxiAlert\-Bench测试集下，ToxiAlert的准确率为80\.04，高于Gemini\-2\.5\-Flash的70\.84。该结论适用边界受限于英语与预设七类二十标签体系，对重叠说话与强噪声直播的鲁棒性尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/yiliang-la/ToxiAlert> — 链接可访问（HTTP 200）
- 第三方资源：<https://dun.163.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 18. [视频回声成乐：以分层解析同时约束语义、时间与转场对拍](/posts/conference-aaai-2026-conference-paper-id-39799-8e5d166230/)

> 英文题目：*[Video Echoed in Music: Semantic, Temporal, and Rhythmic Alignment for Video\-to\-Music Generation](/posts/conference-aaai-2026-conference-paper-id-39799-8e5d166230/)*

标签：#数据集 #扩散模型 #音视频 #音乐生成

评分：**7.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音乐生成 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39799) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39799/43760)

👥 **作者与机构**

- Xinyi Tong：机构信息未能从会议 PDF 纯文本可靠映射
- Yiran Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Jishang Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Chunru Zhan：机构信息未能从会议 PDF 纯文本可靠映射
- Tianle Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Sirui Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Nian Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Tiezheng Ge：机构信息未能从会议 PDF 纯文本可靠映射
- Duo XU：机构信息未能从会议 PDF 纯文本可靠映射
- Xin Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Feng Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Song\-Chun Zhu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

视频到音乐生成以输入视频为条件生成语义贴切且时长可变的高保真背景音乐，难点在于视频细节表达稀疏与音乐节拍周期性之间难以实现细粒度同步。论文提出Video Echoed in Music框架，先做分层视频解析充当指挥家，在全局层抽取视频字幕与情感标签，在故事板层经镜头切分获得视觉特征、文本描述与起止时长，在帧层经转场检测输出二值转场序列。接着模态专用编码器分别编码文本、视觉与时间信息，其输出进入故事板引导交叉注意力，以音乐潜变量为查询、以全局与当前故事板特征拼接为键值并以时长掩码限制交互域，完成语义时序融合。然后帧级转场节拍对齐器以ResNet\(2\+1\)D\-18预测转场与节拍交集掩码，适配器借鉴自适应归一化生成缩放与偏置并残差调制编码器特征，实现节奏精修，精修后潜变量经变分自编码器与声码器合成波形。与已有方法相比，该框架同时显式建模全局、故事板、帧三级约束与转场节拍耦合，而非仅做片段级语义或节奏适配，因而更适配广告类强同步场景。在TB\-Match验证集下，VeM的FAD指标为4\.043，低于GVMGen的FAD指标6\.137。其适用边界受限于10秒至60秒广告与分享视频的验证，对长叙事与强舞蹈动作的外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://vem-paper.github.io/VeM-page/> — 链接可访问（HTTP 200）
- 演示资源：<https://vem-paper.github.io/VeM-page/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 19. [在帧之间听见时间：TimeAudio 如何把时刻、时长与语义对齐](/posts/conference-aaai-2026-conference-paper-id-39827-21e8649f50/)

> 英文题目：*[Listening Between the Frames: Bridging Temporal Gaps in Large Audio\-Language Models](/posts/conference-aaai-2026-conference-paper-id-39827-21e8649f50/)*

标签：#数据集 #多模态学习 #长音频处理 #语音 #音频事件检测

评分：**7.8/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频事件检测 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39827) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39827/43788)

👥 **作者与机构**

- Hualei Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yiming Li：机构信息未能从会议 PDF 纯文本可靠映射
- Shuo Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Hong Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangdong Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

现有大音频语言模型需以长音频波形与自然语言查询为输入，直接输出带精确起止时间的事件定位与描述，但声学特征缺乏显式时间对齐且长音频token冗余严重，导致时间戳幻觉与长程语义错位。TimeAudio先用滑动音频编码器将长音频切分为30秒片段，并以Whisper与BEATs双编码器分别抽取各片段特征以保留语音与环境声信息。随后窗口Q\-Former将编码后音频token投影到语言空间，并基于注意力分数做分段级token合并，仅保留注意力与上下文token以压缩冗余并维持信息密度。接着绝对时间感知编码将绝对时间信息显式注入音频嵌入，同时将起止时间转换为锚点加偏移的离散时间标记，与用户提示文本一起送入冻结的大语言模型生成带时间戳回答。相对直接回归数字或固定间隔时间token，该锚点加偏移表示降低了数值收敛负担，而显式时间对齐与分段合并使模型能端到端处理多段长音频并保持细粒度定位精度。在AudioGrounding测试集的时间 grounding任务评测下，TimeAudio完整模型的mIoU为57\.8，从FTAR微调后SALMONN基线的51\.9升至57\.8。该结论适用边界受限于平均约10秒的短事件定位与约82秒的合成新闻语音摘要等FTAR覆盖任务，在重叠事件、真实长会议与强噪声环境的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/lysanderism/TimeAudio> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 20. [低资源下保住音高与细节：HQ\-SVC 用解耦编解码加两级合成做零样本歌声转换](/posts/conference-aaai-2026-conference-paper-id-40249-ca15a5831b/)

> 英文题目：*[HQ\-SVC: Towards High\-Quality Zero\-Shot Singing Voice Conversion in Low\-Resource Scenarios](/posts/conference-aaai-2026-conference-paper-id-40249-ca15a5831b/)*

标签：#扩散模型 #低资源 #零样本 #音频超分辨 #语音转换

评分：**7.8/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.1/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音转换 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40249) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40249/44210)

👥 **作者与机构**

- Bingsong Bai：机构信息未能从会议 PDF 纯文本可靠映射
- Yizhong Geng：机构信息未能从会议 PDF 纯文本可靠映射
- Fengping Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Cong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Puyuan Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Yingming Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Ya Li：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

零样本歌声转换需在不对目标说话人微调的条件下以未见目标音色替换源歌声音色同时保留内容与旋律，难点在于高采样歌声基频范围宽且音高与音色强耦合，分离式建模易丢失声学细节。该方法首先冻结语音领域因子化解耦编解码器并从其解码器中间层同时取出内容特征与说话人特征，统一完成解耦以减少信息损失。接着增强语音适配模块融合对数音高能量相位与残留风格并预测目标音域统计量，其输出进入可微分数字信号处理模块粗合成波形再转梅尔谱施加结构约束。最后基于WaveNet的扩散去噪器对梅尔谱精修细节并经神经源滤波声码器合成高采样音频，形成由解耦到补偿再到粗精两级合成的方法链。与分离式内容编码器加说话人验证嵌入相比，统一解耦加显式韵律补偿使风格与内容对齐更直接并保留高频谐波细节。在Opensinger未见歌手交叉转换评测任务下，HQ\-SVC的STOI为0\.799，高于SaMoye\-SVC的0\.724。该结论适用边界受限于普通话歌声与中英文歌声语音超分辨验证，对强风格化唱法与跨语言极端音域转换尚未验证。训练成本为单张RTX 3090约11小时且显存占用低于6 GB，推理开销经DPM\-Solver\+\+十倍加速后约为0\.065倍实时率。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ShawnPi233/HQ-SVC> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/openvpi/DiffSinger> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/CarlWangChina/SaMoye-SVC> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 21. [信噪比为何失准：从相位距离重写音频生成的度量与损失](/posts/conference-aaai-2026-conference-paper-id-40298-5b9969a246/)

> 英文题目：*[GOMPSNR: Reflourish the Signal\-to\-Noise Ratio Metric for Audio Generation Tasks](/posts/conference-aaai-2026-conference-paper-id-40298-5b9969a246/)*

标签：#时频分析 #语音 #音频生成 #音频质量评估

评分：**7.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#时频分析

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40298) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40298/44259)

👥 **作者与机构**

- Lingling Dai：机构信息未能从会议 PDF 纯文本可靠映射
- Andong Li：机构信息未能从会议 PDF 纯文本可靠映射
- Cheng Chi：机构信息未能从会议 PDF 纯文本可靠映射
- Yifan Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaodong Li：机构信息未能从会议 PDF 纯文本可靠映射
- Chengshi Zheng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

神经声码器以梅尔频谱为输入重建波形，幅度相对易建模而相位存在包裹与波形移位敏感，点式距离与听感脱节，传统信噪比因此与感知相关性弱。本文先把信噪比分母在时频域展开为目标能量、估计能量与符号化相关项之和，揭示相关项中余弦因子在相位误差接近正负二分之派处变号并引起求和振荡，再用固定3x3卷积核提取含中心瞬时相位与八邻域差分的全向相位导数替代瞬时相位，并把相关项改为非正线性映射，得到广义全向相位信噪比。随后把该思想转写为幅度加权相位损失与联合幅度相位损失，并与幅度损失组合训练声码器。与已有方法相比，关键差异是不再直接比较包裹相位而是比较八邻域导数结构并抑制正负振荡的交叉项。在LJSpeech上Vocos优选组合将感知语音质量评估从3\.749提升至4\.035，将本文指标从4\.299提升至5\.749；在LibriTTS上APNet2优选组合将感知语音质量评估从1\.685提升至3\.789。该结论目前仅在帧对齐的声码器与神经音频编解码器重建任务验证，未覆盖非对齐生成与主观平均意见分验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/lingling-dai/GOMPSNR> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/jaywalnut310/vits/tree/main/filelists> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/redmist328/APNet2> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/gemelo-ai/vocos> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/jishengpeng/WavTokenizer> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 22. [用投票与多维标注把粤语长音频做成可训练语料](/posts/conference-aaai-2026-conference-paper-id-40429-6b91eb28c3/)

> 英文题目：*[WenetSpeech\-Yue: A Large\-Scale Cantonese Speech Corpus with Multi\-dimensional Annotation](/posts/conference-aaai-2026-conference-paper-id-40429-6b91eb28c3/)*

标签：#基准测试 #数据集 #数据集构建 #语音识别 #文本到语音

评分：**7.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#数据集构建

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40429) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40429/44390)

👥 **作者与机构**

- Longhao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhao Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Hongjie Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhang Dai：机构信息未能从会议 PDF 纯文本可靠映射
- Ziyu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Hongfei Xue：机构信息未能从会议 PDF 纯文本可靠映射
- Tianlun Zuo：机构信息未能从会议 PDF 纯文本可靠映射
- Chengyou Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Shuiyuan Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xin Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Hui Bu：机构信息未能从会议 PDF 纯文本可靠映射
- Jie Li：机构信息未能从会议 PDF 纯文本可靠映射
- Jian Kang：机构信息未能从会议 PDF 纯文本可靠映射
- Binbin Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Ruibin Yuan：机构信息未能从会议 PDF 纯文本可靠映射
- Ziya Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Xue：机构信息未能从会议 PDF 纯文本可靠映射
- Lei Xie：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

粤语自动语音识别（Automatic Speech Recognition，ASR）与文本到语音（Text to Speech，TTS）的输入是带九声六调、文白异读及中英混读的连续语音或文本，输出为准确转写或自然语音，难点在于标注稀缺、口语变体多与评测覆盖窄。本文构建可扩展流水线 WenetSpeech\-Pipe，先采集多领域长音频并经语音活动检测（Voice Activity Detection，VAD）切分为短句，再并行完成说话人分离标注与属性估计及信噪比与平均意见分预测等多维标注，随后用三路识别器生成平行转写并经文本规范化消除繁简与格式差异，最后经识别器输出投票错误削减（Recognizer Output Voting Error Reduction，ROVER）融合与大语言模型（Large Language Model，LLM）轻量修正生成带置信度与字级时间戳的终版标注。与已有粤语库仅提供单一文本对齐不同，该机制以多系统互补误差融合加可分层置信度实现质量可控与多任务复用。在包含对话、朗读、Common Voice 与自建长短句的评测中，混合编码器加 LLM 模型 U2pp\-Conformer\-LLM\-Yue 在自建短句集上混合错误率（Mixed Error Rate，MER）达到 4\.73%，显著优于同类基线。该结论限于粤语朗读与网络多领域语音，情感与年龄等伪标签维度尚未经严格验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ASLP-lab/WenetSpeech-Yue> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/ASLP-lab/WenetSpeech-Yue> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/datasets/CanCLID/zoengjyutgaai> — 暂时无法访问
- 第三方资源：<https://github.com/HLTCHKUST/cantonese-asr> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 23. [先找重层再剪通道：SepPrune 为语音分离模型省算力的三步剪枝](/posts/conference-aaai-2026-conference-paper-id-40455-790b93bfe9/)

> 英文题目：*[SepPrune: Structured Pruning for Efficient Deep Speech Separation](/posts/conference-aaai-2026-conference-paper-id-40455-790b93bfe9/)*

标签：#模型剪枝 #高效推理 #语音 #语音分离

评分：**7.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音分离 | 主方法：#模型剪枝

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40455) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40455/44416)

👥 **作者与机构**

- Yuqi Li：机构信息未能从会议 PDF 纯文本可靠映射
- Kai Li：机构信息未能从会议 PDF 纯文本可靠映射
- Xin Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Zhifei Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Zeyu Dong：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengtao Yao：机构信息未能从会议 PDF 纯文本可靠映射
- Haoyan Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Yingli Tian：机构信息未能从会议 PDF 纯文本可靠映射
- Yao Lu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音分离需从单通道混合波形中恢复多路干净语音，输出各说话人独立波形，而音频编码器、分离网络与解码器三段计算量高度不均衡使均匀剪枝易损伤轻量层。SepPrune先做结构化计算量分析以参数量与浮点运算量定位占比最高的分离网络，确定可剪枝层范围。接着引入可微二值通道掩码并冻结原权重，仅以梯度优化掩码完成离散结构搜索，其输出的最优子结构直接决定保留通道。然后按学习到的二值掩码执行真实通道剪枝并微调幸存权重以恢复分离性能。与随机剪枝、Hrank与UDSP等启发式准则相比，其差异在于将组合搜索转化为梯度驱动的可微选择而非依赖特征秩或人工规则，因而更贴合语音分离任务。在LRS2\-2Mix基准下，SepPrune剪枝后A\-FRCNN\-12的SDRi指标为12\.59 dB，高于原始模型的SDRi指标10\.90 dB。该结论适用边界受限于TDANet、A\-FRCNN与SuDoRM\-RF三类骨干与三数据集验证，尚未验证Tiger等新架构上的外推效果。训练成本上原文以8×V100与4×A100硬件完成上限500轮预训练与500步掩码学习，剪枝后训练显存最高节省50\.2%但循环串行结构使推理开销加速有限。

🔗 **开源资源**

- 代码相关资源：<https://github.com/itsnotacie/SepPrune> → <https://github.com/itsnotacie/AAAI-26_SepPrune> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 24. [先剪掉噪声再识别：语音感知的长上下文剪枝与融合](/posts/conference-aaai-2026-conference-paper-id-40563-13900a7a12/)

> 英文题目：*[Speech\-Aware Long Context Pruning and Integration for Contextualized Automatic Speech Recognition](/posts/conference-aaai-2026-conference-paper-id-40563-13900a7a12/)*

标签：#注意力机制 #音频大模型 #语音 #语音识别

评分：**7.7/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#注意力机制

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40563) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40563/44524)

👥 **作者与机构**

- Yiming Rong：机构信息未能从会议 PDF 纯文本可靠映射
- Yixin Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Ziyi Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Deyang Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Yunlong Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Haoran Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Shiyu Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Bo Xu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

上下文感知语音识别的输入为语音特征与幻灯片OCR抽取的长关键词列表，输出为转写文本，难点在于单条语音对应上下文可达数百词元而有效信息率不足1%，直接拼接易超窗并引入噪声。该工作提出语音感知剪枝与集成框架SAP2，第一阶段由剪枝模型以语音为条件从长列表生成核心词子集，第二阶段由识别模型基于语音与精炼后关键词完成转写，剪枝输出直接作为识别阶段的条件输入。两阶段均采用语音驱动注意力池化对文本嵌入按语音相关性加权压缩，再送入冻结语音编码器与微调大模型主干。与直接提示拼接和单模型联合输出相比，该设计把噪声过滤显式解耦为可监督子任务，并用跨模态注意力保留语音相关语义而非均匀截断。在SlideSpeech评测设置下，SAP2\-TPI的WER为7\.71%，低于MaLa\-ASR的8\.46%。在L95五张幻灯片条件下剪枝后关键词F1\-score达94\.48%，且池化使剪枝训练时间降低24\.97%、推理开销降低20\.20%，训练成本集中于7卡40G A100微调而推理仅需单卡，表明两阶段未引入明显计算量增长。该结论适用边界受限于英文会议幻灯片OCR与人工构造偏置表场景，原文仅验证切分为单个词的上下文，短语级上下文与视听融合外推能力尚未验证。

🔗 **开源资源**

- 代码相关资源：<https://github.com/jymh/SAP2-ASR> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 25. [语义不够声学来凑行不通：用理解型词元做输入、声学词元做输出的统一建模](/posts/conference-aaai-2026-conference-paper-id-40663-2bc2fdcc24/)

> 英文题目：*[DualSpeechLM: Towards Unified Speech Understanding and Generation via Dual Speech Token Modeling with Large Language Models](/posts/conference-aaai-2026-conference-paper-id-40663-2bc2fdcc24/)*

标签：#向量量化 #语音识别 #语音合成 #语音翻译

评分：**7.7/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音合成 | 主方法：#向量量化

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40663) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40663/44624)

👥 **作者与机构**

- Yuanyuan Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Dongchao Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Yiwen Shao：机构信息未能从会议 PDF 纯文本可靠映射
- Hangting Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Jiankun Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiyong Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Helen Meng：机构信息未能从会议 PDF 纯文本可靠映射
- Xixin Wu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

统一语音理解与生成需同时处理语音到文本的语义映射和文本到语音的波形重建，而声学令牌缺语义、语义令牌缺细节的矛盾使单令牌大语言模型难以兼顾。DualSpeechLM先用理解驱动语音分词器将Whisper\-medium编码器输出的连续特征经下采样编码器压缩，再经单码本向量量化转为语义令牌，并经适配器送入冻结文本大模型，在语音识别、情感识别与语音问答提示下计算理解损失回传以缩小模态鸿沟，同时用均方误差重建特征以保留细粒度信息。随后文本大模型以语义令牌为输入预测目标语义序列并施加语义监督损失，为理解与生成提供统一语义表示。再由6层因果Transformer构成的AcousticGPT以条件链随机组合提示隐状态与预测语义为条件自回归生成WavTokenizer声学令牌，并经语音解码器合成波形，从而实现端到端双令牌建模。与单码本声学或语义建模及多阶段扩散或流匹配级联不同，该框架以语义令牌负责理解输入、以声学令牌负责生成输出，避免了多码本复杂性与误差累积，使理解与生成数据增加时均能互相促进而非折中。在LibriSpeech测试集clean子集的自动语音识别任务下，DualSpeechLM\-USToken的WER为4\.22，低于语义基线的5\.70。该结论适用边界受限于约4500小时英语为主的朗读与合成数据验证，对噪声、自发对话及多语言外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/lavendery/UUG> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/openai/whisper> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 26. [直播不是更长的短视频：LiViBench 如何测互动理解与评论利用](/posts/conference-aaai-2026-conference-paper-id-39859-e20d89df94/)

> 英文题目：*[LiViBench: An Omnimodal Benchmark for Interactive Livestream Video Understanding](/posts/conference-aaai-2026-conference-paper-id-39859-e20d89df94/)*

标签：#基准测试 #基准设计 #指令微调 #检索增强 #音视频问答

评分：**7.6/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音视频问答 | 主方法：#基准设计

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39859) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39859/43820)

👥 **作者与机构**

- Xiaodong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Langling Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhirong Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Xu Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Teng Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Xuhong Xia：机构信息未能从会议 PDF 纯文本可靠映射
- Peixi Peng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

交互直播视频理解以同步视频、音频、语音与海量实时评论为输入，以24类多选题准确率为输出，难点在于多人连麦、表演动作与送礼弹幕交织且高度依赖时序与跨模态上下文。为此先以多智能体系统生成细粒度视频描述并筛选形成多模态视频池，上一步的视频描述与人工清洗后的种子问题共同进入批量问答生成，再经人工复看过滤改写得到3175道高质量题目。接着以37953条机器合成样本做第一阶段指令微调实现直播领域对齐，再以11180条人工精修样本做第二阶段精调提升精度与鲁棒性。经两阶段微调后的模型在推理时由Chinese\-CLIP计算均匀采样帧嵌入与评论嵌入相似度，按时间排序选取top\-k相关评论与问题共同输入融合视频音频表征的大模型。与仅评测电影录播等非互动内容的Video\-MME等基准不同，该工作把音频、语音与评论纳入统一全模态评测，并把视频到评论检索作为显式信息瓶颈以缓解评论过载与上下文溢出。在LiViBench基准下，LiVi\-LLM\-7B的准确率为64\.4%，高于Qwen2\.5\-VL\-72B的准确率62\.3%。该结论适用边界受限于中文娱乐类直播与选择题协议，尚未验证开放生成、跨语言直播与实时交互的外推性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Wang-Xiaodong1899/LiViBench> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 27. [从直接配音到导演\-演员磨合：用检索增强补情感功课的配音模型](/posts/conference-aaai-2026-conference-paper-id-40483-abac696393/)

> 英文题目：*[Towards Authentic Movie Dubbing with Retrieve\-Augmented Director\-Actor Interaction Learning](/posts/conference-aaai-2026-conference-paper-id-40483-abac696393/)*

标签：#图神经网络 #检索增强 #音视频 #语音 #语音配音

评分：**7.6/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音配音 | 主方法：#检索增强

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40483) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40483/44444)

👥 **作者与机构**

- Rui Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenqi Jia：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

面向视觉语音克隆的电影配音需以剧本、静音视频与短时音色提示为输入生成兼顾音色复刻、唇同步与情感表现力的语音，难点在于仅依赖目标话语内跨模态建模难以获得充分情感上下文。该工作提出模拟导演\-演员交互的Authentic\-Dubber，先用大语言模型理解场景、表情与文本情感并联合直接情感音频构建多模态参考片段库以提供导演式学习素材。接着以目标基础情感为查询做情感相似度检索增强，从库中召回与目标静音视频最相关的间接多模态信息与直接情感音频。然后经渐进式图按基础情感图、间接情感扩展图、直接情感扩展图逐步累积三级情感知识，并由情感知识语音合成器结合跨模态对齐结果生成梅尔频谱图。相对以往演员直接配音的简化流程，该链以可解释检索引入外部情感证据并渐进融合，强化了情感建模的充分性与针对性。在V2C\-Animation基准下，Authentic\-Dubber的EMO\-ACC为47\.21%，高于StyleDubber的45\.73%。该结论适用边界限于动画配音的说话人无关封闭检索设定，对真人影视与跨数据集泛化的失效模式尚未验证。原文披露训练与推理硬件为A800 GPU实现，其具体训练成本与推理开销的量化细节受限。

🔗 **开源资源**

- 代码相关资源：<https://github.com/AI-S2-Lab/Authentic-Dubber> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/svjack/comet-atomic-en> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 28. [不用自回归也能听懂语音：DIFFA 以冻结扩散模型加双适配器做理解](/posts/conference-aaai-2026-conference-paper-id-40817-25c0fa6f5a/)

> 英文题目：*[DIFFA: Large Language Diffusion Models Can Listen and Understand](/posts/conference-aaai-2026-conference-paper-id-40817-25c0fa6f5a/)*

标签：#Adapter #扩散模型 #音频大模型 #语音 #音频理解

评分：**7.6/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：模型报告 | 主任务：#音频理解 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40817) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40817/44778)

👥 **作者与机构**

- Jiaming Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Hongjie Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Shiwan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Jian Kang：机构信息未能从会议 PDF 纯文本可靠映射
- Jie Li：机构信息未能从会议 PDF 纯文本可靠映射
- Enzhi Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yujie Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Haoqin Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Hui Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Aobo Kong：机构信息未能从会议 PDF 纯文本可靠映射
- Yong Qin：机构信息未能从会议 PDF 纯文本可靠映射
- Xuelong Li：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为连续语音波形与文本指令，输出为自然语言回答，难点在于声学变异大、韵律情感等副语言信息难以对齐到离散语义空间。先由冻结的Whisper\-Small编码器接收原始波形，负责抽取50Hz帧级声学特征并压缩至12\.5Hz，输出紧凑语音表征送入双适配器。再由语义适配器与声学适配器分别接收该表征的顶层输出与中间层状态，前者以960小时LibriSpeech语音识别目标完成语义对齐，后者以可训练查询抽取低层声学线索，二者输出拼接为音频前缀并作为前缀词元拼接到指令之前。最后由冻结的大语言扩散模型LLaDA\-8B\-Instruct接收音频前缀、文本提示与掩码回答，负责以扩散式掩码预测目标联合建模，经多步预测与低置信重掩码迭代去噪，并以块级半自回归策略并行生成回答。与自回归大音频语言模型相比，该机制用双向上下文与块级并行解码替代从左到右依赖，从而支持可控改写与低数据量下的高效对齐。在MMSU基准下，DIFFA的平均准确率为56\.04，高于Random基线的25\.37。该结论适用边界限于英语朗读主导的语音问答与字幕式理解，音乐、环境声与强口音自发对话尚未验证，且原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/NKU-HLT/DIFFA> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 29. [三模态互相拆台时，HuMo 如何让文本、图像与音频协同](/posts/conference-aaai-2026-conference-paper-id-37285-d0f307184d/)

> 英文题目：*[Human\-Centric Video Generation via Collaborative Multi\-Modal Conditioning](/posts/conference-aaai-2026-conference-paper-id-37285-d0f307184d/)*

标签：#流匹配 #多模态学习 #音视频 #语音 #音视频生成

评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37285) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37285/41247)

👥 **作者与机构**

- Liyang Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Tianxiang Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Jiawei Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Bingchuan Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhuowei Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Lijie Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Xu He：机构信息未能从会议 PDF 纯文本可靠映射
- Gen Li：机构信息未能从会议 PDF 纯文本可靠映射
- Qian He：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiyong Wu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

人本视频生成（Human\-Centric Video Generation，HCVG）需以文本描述场景动作、参考图像定义身份外观、音频信号驱动说话口型，难点在于三元组完备数据稀缺且三者控制能力在联合训练中相互损伤。本文提出的HuMo先构建不完整互补数据集，用跨库检索的人物与物体参考图和唇同步过滤的语音片段分别补齐图像与音频缺失，再以两阶段渐进范式学习控制能力。第一阶段冻结文本交叉注意力并仅微调自注意力实现主体保持，第二阶段插入音频交叉注意力并用面部预测辅助聚焦口唇区，同时以任务比例退火保留已有能力，推理时再用阶段自适应无分类器引导（Classifier\-Free Guidance，CFG）切换权重。与图像到视频（Image\-to\-Video，I2V）与主体到视频（Subject\-to\-Video，S2V）方法的机制差异在于避免依赖主体完备首帧与硬门控截断，改用尾部拼接参考隐变量与软正则聚焦。在主体保持任务上17B版本文本视频对齐得分3\.939超过Phantom\-Wan\-14B的2\.877，在MoCha同步任务上文本对齐6\.508超过HunyuanCustom的6\.246，同步置信度6\.252接近商业系统OmniHuman\-1的6\.526。该结论仅在单人近景说话与检索式参考条件下验证，对多人对话、长时运动与非人脸音频驱动尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Phantom-video/HuMo> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 30. [不用真值也能改口音和噪声错误：以音频文本对齐奖励做测试时强化适应](/posts/conference-aaai-2026-conference-paper-id-40323-4bb7ceebf0/)

> 英文题目：*[Boosting ASR Robustness via Test\-Time Reinforcement Learning with Audio\-Text Semantic Rewards](/posts/conference-aaai-2026-conference-paper-id-40323-4bb7ceebf0/)*

标签：#强化学习 #测试时自适应 #鲁棒性 #语音识别

评分：**7.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#测试时自适应

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40323) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40323/44284)

👥 **作者与机构**

- Linghan Fang：机构信息未能从会议 PDF 纯文本可靠映射
- Tianxin Xie：机构信息未能从会议 PDF 纯文本可靠映射
- Li Liu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为含环境噪声与非母语口音偏移的英语语音，输出为转写文本，难点在于轻量Whisper模型在无标签测试时置信度与正确性严重错位，熵最小化与伪标签会强化高置信错误。方法首先在Whisper解码器前端注入长度为四的可学习软提示以干预生成轨迹，干预后的解码状态进入下一步候选探索。接着以温度采样并行生成多个转写候选以暴露反事实假设，候选集合连同原始音频一起送入奖励评分。然后用对比语言音频预训练模型计算音频文本对齐奖励，并经策略梯度同时更新提示与模型参数以转向语义一致输出。与依赖内部置信度的方法不同，该方法用外部语义一致性作为适应信号，因而能纠正初始低置信但语义正确的候选并缓解确认偏误。在LibriSpeech test\-other叠加MS\-SNSD噪声的评测条件下，ASR\-TRA的WER为28\.64%，低于SGEM的30\.22%。结论适用边界受限于单句英语离线自适应，CLAP主要支持英语使多语言与流式对话场景尚未验证，推理开销方面平均延迟为0\.720秒而引入大语言模型奖励会带来数倍延迟增长。

🔗 **开源资源**

- 代码相关资源：<https://github.com/fangcq/ASR-TRA> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 31. [听到更多却用更少：为对话语音检索并精选一条最相关的历史](/posts/conference-aaai-2026-conference-paper-id-40528-ff6b990c10/)

> 英文题目：*[Hearing More with Less: Multi\-Modal Retrieval\-and\-Selection Augmented Conversational LLM\-Based ASR](/posts/conference-aaai-2026-conference-paper-id-40528-ff6b990c10/)*

标签：#检索增强 #大语言模型 #多语言 #语音 #语音识别

评分：**7.5/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.3/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#检索增强

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40528) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40528/44489)

👥 **作者与机构**

- Bingshen Mu：机构信息未能从会议 PDF 纯文本可靠映射
- Hexin Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Hongfei Xue：机构信息未能从会议 PDF 纯文本可靠映射
- Kun Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Lei Xie：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

会话语音识别（Conversational Automatic Speech Recognition）的输入为长时多轮对话音频与话语切分，输出为当前话语转写，难点在于口语填充词多、指代省略多且最相关历史位置不固定。所提多模态检索选择增强方法（Multi\-Modal Retrieval\-and\-Selection，MARS）先以当前语音嵌入与假设为查询做语音路与文本路双路检索，再补齐每条候选的另一模态相似度并归一化，最后用近理想排序（Near\-Ideal Ranking）选出单条最佳历史并与当前语音及假设联合解码。相比固定前N句与全历史输入，该机制将上下文压缩到与当前句等长并兼顾发音相似与语义相似，避免冗余历史淹没待识别语音。在Interspeech 2025多语言会话数据集（Multilingual Conversational Speech Language Model，MLC\-SLM）上，MARS两遍解码的混合错误率（Mixed Error Rate，MER）为8\.35%，优于TEA\-ASLP系统的9\.60%，论文称前者仅用1\.5K小时MLC\-SLM训练数据而后者在MLC\-SLM微调前另有179K小时多语言预训练。该结论限于双人安静室内、已知语种提示的两方对话，未验证噪声重叠、多方会议或跨主题检索失效情形。原文未披露训练时长、推理延迟或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 32. [把水印藏进起始噪声：锚定反演如何找回被波形转换打乱的归属](/posts/conference-aaai-2026-conference-paper-id-40561-fd179879f7/)

> 英文题目：*[Anchor Watermark: Robust Attribution for Diffusion\-based Text\-to\-Audio Model](/posts/conference-aaai-2026-conference-paper-id-40561-fd179879f7/)*

标签：#扩散模型 #鲁棒性 #音频生成 #音频水印

评分：**7.5/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频水印 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40561) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40561/44522)

👥 **作者与机构**

- Xianjin Rong：机构信息未能从会议 PDF 纯文本可靠映射
- Donghui Hu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

文本到音频模型归属需以可疑音频与候选模型预设锚点为输入，输出是否为该模型生成的判定与比特匹配度，难点在于波形\-Mel有损转换与DDIM逐步反演累积误差会严重退化直接反演的水印。先用ChaCha20加密水印并经分布保持采样映射为标准高斯初始隐向量作为枢轴锚点，参与常规去噪生成梅尔谱与波形而不改变生成过程。归属时对同一锚点执行无引导扩散生成中间隐轨迹作为优化参照，其分布与带引导扩散轨迹在多数步骤保持统计一致。再以柔性动态时间规整为损失对反演轨迹做梯度对齐修正，并从修正终点经逆映射解码水印后以阈值判定归属。与后处理嵌入、声码器微调和编解码器训练三类路线不同，该机制不修改生成模型且无需额外训练，而是将鲁棒性转化为时间序列对齐问题，仅当锚点匹配时才获得正确对齐路径。在AudioCaps语料上AudioLDM模型的评测设置下，本方法的Bit Acc为0\.98，高于GROOT的Bit Acc的0\.82。该结论的适用边界是封闭模型且私钥持有者可访问锚点，失败条件包括高强度半音音高偏移下比特准确率降至约0\.85，再生攻击评估因使用同模型泄露假设而受限，推理开销为每条音频约4s至17s，硬件为RTX 4090 GPU。

🔗 **开源资源**

- 代码相关资源：<https://github.com/DDAN-LAB/AnchorWM> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 33. [多语言共用低秩空间为何冲突：MoLoRA 用共享与路由专家分开建模](/posts/conference-aaai-2026-conference-paper-id-40769-913b33710f/)

> 英文题目：*[MoLoRA: Boosting LLM\-based End\-to\-end Speech Translation with Mixture of Low\-rank Experts](/posts/conference-aaai-2026-conference-paper-id-40769-913b33710f/)*

标签：#LoRA #混合专家模型 #大语言模型 #多语言 #语音翻译

评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.4/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音翻译 | 主方法：#混合专家模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40769) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40769/44730)

👥 **作者与机构**

- Hao Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yaqi Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Nianwen Si：机构信息未能从会议 PDF 纯文本可靠映射
- XuKui Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Wenlin Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Dan Qu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

端到端语音翻译（End\-to\-End Speech Translation，E2E\-ST）需将英语语音直接生成多语种目标文本，难点在于声学模态对齐与多语言语义竞争同时挤占大语言模型（Large Language Model，LLM）微调容量。该工作先以语音编码器加多粒度表示融合（Multi\-Granularity Representation Fusion，MGRF）增强输入，再以低秩适配（Low\-Rank Adaptation，LoRA）专家群加稀疏路由实现语言分工，最后经两阶段对齐与翻译微调输出译文。融合模块用句子级全局表示校准帧级局部失真，共享专家建模跨语言共性而路由专家承接语言特性。与单一共享低秩矩阵相比，模块化稀疏激活缓解梯度干扰并保留参数高效性。在MuST\-C八个英译多语方向平均以BLEU指标取得32\.2分，超越同参数量单LoRA基线约4\.3分并小幅超过全量微调约0\.3分，在CoVoST\-2三个英译方向平均36\.3分建立新最优。结论限于英语源TED与朗读域多语言翻译，低资源语言、反向翻译及噪声鲁棒性尚未验证。原文未披露训练、推理或部署成本实测。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 34. [从贴标签到写病程：用情绪—认知描述统一多模态心理健康评估](/posts/conference-aaai-2026-conference-paper-id-37210-ac21c3928c/)

> 英文题目：*[Voices, Faces, and Feelings: Multi\-modal Emotion\-Cognition Captioning for Mental Health Understanding](/posts/conference-aaai-2026-conference-paper-id-37210-ac21c3928c/)*

标签：#医疗音频 #多模态学习 #音视频 #音频字幕生成

评分：**7.4/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频字幕生成 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37210) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37210/41172)

👥 **作者与机构**

- Zhiyuan Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Yanrong Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Shijie Hao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文针对多模态心理健康分析仅输出诊断类别而缺乏可解释情感认知依据的难点，定义情感认知协同描述任务，输入为临床访谈切分的话轮级视频音频文本，输出为情感描述认知损伤描述及汇总画像。方法首先以VideoMAE、HuBERT与BERT提取各模态初始时序特征，得到各模态时间步表示。接着双流BridgeNet以两组Q\-Former分别压缩融合为情感嵌入与认知嵌入，并以效价三分类对比学习和基于Jaccard重叠的多标签认知对比学习实现解耦。随后其输出拼接提示送入冻结LLaMA解码器自回归生成字幕，多话轮字幕再经大语言模型汇总为画像并辅助抑郁焦虑诊断。与通用多模态大模型和心理领域大语言模型隐式迁移特征不同，该机制显式分离情感与认知并对齐语言空间，从而提升可解释性与检测性能。在MMDA测试集情感描述任务下，本方法的F BERT分数为27\.13，高于Sa2VA\-8B的F BERT分数12\.28。该结论适用边界受限于单中心中文临床访谈与自动标注加人工清洗语料，尚未验证跨语言跨中心与纵向追踪能力。训练成本涉及两块NVIDIA RTX A6000硬件上两阶段训练且第二阶段总参数约7\.6B。

🔗 **开源资源**

- 代码相关资源：<https://github.com/zhouzyhfut/ECMC> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/X-D-Lab/MindChat> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/SmartFlowAI/EmoLLM> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 35. [结构保真与语义对齐如何同时做：SSU 用句法图、文本引导图与语义锚统一多模态情感](/posts/conference-aaai-2026-conference-paper-id-39766-fae206a51d/)

> 英文题目：*[Structures Meet Semantics: Multimodal Fusion via Graph Contrastive Learning](/posts/conference-aaai-2026-conference-paper-id-39766-fae206a51d/)*

标签：#对比学习 #图神经网络 #多模态学习 #语音情感识别

评分：**7.4/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#图神经网络

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39766) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39766/43727)

👥 **作者与机构**

- Jiangfeng Sun：机构信息未能从会议 PDF 纯文本可靠映射
- SiHao He：机构信息未能从会议 PDF 纯文本可靠映射
- Zhonghong Ou：机构信息未能从会议 PDF 纯文本可靠映射
- Meina Song：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态情感分析以文本、声学、视觉序列为输入，输出连续情感强度与离散极性，难点在于各模态内部结构各异且跨模态语义空间错位。SSU先为文本按句法依存树建图，对声视先做文本查询交叉注意力增强再算文本引导亲和度并经自适应稀疏化建稀疏图，保留模态内结构依赖。接着对上下文文本平均池化得到话语级语义锚点，以注意力边注入各模态图并构建锚点中介的融合图，使异构图在统一语义枢纽下对齐。最后用共享图注意力网络编码原始图与扰动增强图、用独立图注意力网络编码融合图，以回归加监督判别、结构对比与语义对齐的多视角目标联合优化。与扁平序列注意力或静态孤立图不同，该机制把结构保留与语义对齐显式解耦为拓扑操作，兼顾可解释性与扰动鲁棒性。在CMU\-MOSI基准下，SSU的准确率ACC2为89\.32%，高于MoSARe的准确率ACC2的88\.37%。该结论适用边界受限于英语评论类语料的外推尚未验证，跨语言与强噪声场景下可能失效。在8×NVIDIA A100硬件上训练的SSU仅需0\.3B参数量，推理开销为每批约0\.015s，计算量显著低于大语言模型构图方案。

🔗 **开源资源**

- 代码相关资源：<https://github.com/sun2017bupt/SSU> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 36. [同一事实换语言换模态就变答案：CCFQA 如何卡住多语言语音问答的一致性](/posts/conference-aaai-2026-conference-paper-id-40312-2c178abd4a/)

> 英文题目：*[CCFQA: A Benchmark for Cross\-Lingual and Cross\-Modal Speech and Text Factuality Evaluation](/posts/conference-aaai-2026-conference-paper-id-40312-2c178abd4a/)*

标签：#基准设计 #跨语言 #多语言 #语音 #音频问答

评分：**7.4/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#基准设计

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40312) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40312/44273)

👥 **作者与机构**

- Yexing Du：机构信息未能从会议 PDF 纯文本可靠映射
- Kaiyuan Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Youcheng Pan：机构信息未能从会议 PDF 纯文本可靠映射
- Zheng Chu：机构信息未能从会议 PDF 纯文本可靠映射
- Bo Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaocheng Feng：机构信息未能从会议 PDF 纯文本可靠映射
- Ming Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yang Xiang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

跨语言与跨模态事实问答的输入是8种语言的文本或真人朗读语音问题，输出是简短事实答案，难点是同一事实在换语言或换模态时模型易给出矛盾幻觉回答。为此作者先从MKQA与MOOCCubeX筛选去歧义、去时效、去文化相关问题，再经GPT\-4\.1翻译与人工回译复核生成平行多语言文本，最后经母语者录音与Whisper\-large\-v3识别校验重录得到平行语音。配套验证模型LLM\-SQA先在英语语音上学习问答结构，再以英语为枢轴用每种目标语言5条样本迁移，推理时先转写翻译为英语再用英语知识作答再译回目标语。与已有纯文本或纯英语语音基准的关键机制差异在于全平行语音文本设计使跨语言与跨模态一致性可直接度量。在语音跨语言问答上该模型平均F1达到51\.4，超越GPT\-4o\-mini\-Audio的45\.7。该结论仅适用于朗读式清晰短事实问答，未验证自发对话噪声远场与视觉模态外推。原文未披露训练推理部署成本。

🔗 **开源资源**

- 数据相关资源：<https://github.com/yxduir/ccfqa> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 37. [时长定多久才好听：DMOSpeech 2 把时长预测也纳入指标优化](/posts/conference-aaai-2026-conference-paper-id-40450-30792bea3c/)

> 英文题目：*[DMOSpeech 2: Reinforcement Learning for Duration Prediction in Metric\-Optimized Speech Synthesis](/posts/conference-aaai-2026-conference-paper-id-40450-30792bea3c/)*

标签：#知识蒸馏 #强化学习 #文本到语音 #语音克隆

评分：**7.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#文本到语音 | 主方法：#强化学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40450) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40450/44411)

👥 **作者与机构**

- Yinghao Aaron Li：机构信息未能从会议 PDF 纯文本可靠映射
- Xilin Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Fei Tao：机构信息未能从会议 PDF 纯文本可靠映射
- Cheng Niu：机构信息未能从会议 PDF 纯文本可靠映射
- Kaifeng Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Juntong Song：机构信息未能从会议 PDF 纯文本可靠映射
- Nima Mesgarani：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

零样本语音合成需以文本与短提示音频为输入生成目标音色语音，难点在于基于扩散/流匹配的非并行系统须预先确定总时长，而时长与生成器之间缺乏可微通路。本文方法链分三步衔接：先以改进分布匹配蒸馏将流匹配教师压缩为 4 步学生生成器并做直接度量优化，再把总时长预测建模为随机策略并用组相对策略优化按奖励采样寻优，最后在推理时以教师前段去噪定韵律再交由学生完成后段细化。相对整机强化学习与分离训练时长器，本文只优化低维时长动作且复用高效学生采样，从而大幅降低训练开销并缓解对原始多样性的依赖。在 Seed\-TTS 英文跨句任务上学生模型词错率降至 1\.752且说话人相似度达 0\.698，均优于 32 步教师基线的 1\.947 和 0\.662，中文字符错率同步从 1\.695 降至 1\.527。结论限于英汉 Emilia 有声书类数据与特定自动语音识别和说话人验证奖励，尚未验证主观偏好泛化与跨域鲁棒性。训练使用 8 卡 NVIDIA H100，推理实时率约为教师模型的五分之一。

🔗 **开源资源**

- 演示资源：<https://dmospeech2.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 38. [少通道也要分清四声：CAT\-Net 用双向交叉注意力融合脑电与肌电](/posts/conference-aaai-2026-conference-paper-id-38870-a7214d736b/)

> 英文题目：*[CAT\-Net: A Cross\-Attention Tone Network for Cross\-Subject EEG\-EMG Fusion Tone Decoding](/posts/conference-aaai-2026-conference-paper-id-38870-a7214d736b/)*

标签：#注意力机制 #领域适应 #多模态学习 #言语神经解码 #静默语音接口

评分：**7.3/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#言语神经解码 | 主方法：#注意力机制

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38870) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38870/42832)

👥 **作者与机构**

- Yifan Zhuang：机构信息未能从会议 PDF 纯文本可靠映射
- Calvin Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Zepeng Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Yongjie Zou：机构信息未能从会议 PDF 纯文本可靠映射
- Jiawei Ju：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

面向普通话四声调分类，输入为同步采集的脑电与面部肌电时序信号，输出为声调标签，难点在于音高相关神经信号微弱且空间弥散，而肌电与脑电存在个体差异与模态错位，静默发音时更缺乏声学监督。方法链分为三步：首先由模态独立的空间时间编码器分别提取脑电与肌电的通道组合与双向时序依赖并压缩序列，其次由双向交叉注意力让两种模态以对方键值查询互补特征并池化为统一融合向量，最后由声调分类器输出预测并经梯度反转层 Gradient Reversal Layer / GRL接域判别器学习被试不变表示。与简单拼接或单模态自注意力相比，该机制显式建模神经意图与外周构音执行的双向依赖并解耦类别与被试因素。在10人自采数据的5折交叉验证中，静默条件平均准确率达88\.08%，留一被试跨被试评估仍保持85\.10%，显著高于同场基线。结论目前仅限于10名健康母语者、受控实验室范式与四分类声调任务，未验证残障人群、连续语音与跨设备外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/YifanZhuang/CAT-Net> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 39. [从看见听见到回得得体：HumanSense 把共情拆成可测的四层阶梯](/posts/conference-aaai-2026-conference-paper-id-39685-6b66052574/)

> 英文题目：*[HumanSense: From Multimodal Perception to Empathetic Context\-Aware Responses Through Reasoning MLLMs](/posts/conference-aaai-2026-conference-paper-id-39685-6b66052574/)*

标签：#基准测试 #基准设计 #多模态模型 #音视频问答

评分：**7.3/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频问答 | 主方法：#基准设计

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39685) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39685/43646)

👥 **作者与机构**

- Zheng Qin：机构信息未能从会议 PDF 纯文本可靠映射
- Ruobing Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Yabing Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Tianqi Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yi Yuan：机构信息未能从会议 PDF 纯文本可靠映射
- Jingdong Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Le Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作针对多模态大语言模型在人类中心场景下难以兼顾细粒度感知、隐含意图理解与共情回应的问题，输入为长视频、音频与多轮对话文本，输出为十五项单选题形式的感知判断、隐含意图理解与回应策略选择，难点在于长时跨模态记忆、情绪与意图推断及共情反馈规划需要联合完成。其方法链先构建HumanSense基准的三千余题四层金字塔评测以输出分层能力画像，再将该画像输入模态消融，对比视觉、听觉与转录文本贡献以定位听觉视觉互补点。接着以上一步定位的全模态问答为独立训练集，对Qwen2\.5\-Omni\-7B依次做纯视频推理、纯音频推理到视听联合推理的三阶段GRPO强化学习以得到推理模型，最后从成功推理轨迹提炼关键特征—情绪—上下文提示模板，用于免训练增强非推理模型。与已有视频理解评测相比，关键机制差异在于同时考核回应内容与回应策略，并强制模型先整合人物特征、情绪与上下文再推理作答，使评测与优化直接面向可验证的交互决策，具有端到端指导意义。在HumanSense tiny基准下，人类评估者的平均准确率为0\.875，高于GPT\-4o的0\.552。该结论适用边界限于所选开源数据与零样本单选评测协议，向开放式生成、实时交互与跨文化场景的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/antgroup/HumanSense.git> → <https://github.com/antgroup/HumanSense> — 链接可访问（HTTP 200）
- 数据相关资源：<https://huggingface.co/datasets/antgroup/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 40. [把纠缠的副语言风格拆开学：ParaMETA 的共享空间与任务子空间分工](/posts/conference-aaai-2026-conference-paper-id-40505-b3abf19139/)

> 英文题目：*[ParaMETA: Towards Learning Disentangled Paralinguistic Speaking Styles Representations from Speech](/posts/conference-aaai-2026-conference-paper-id-40505-b3abf19139/)*

标签：#对比学习 #多任务学习 #语音属性识别 #文本到语音

评分：**7.3/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音属性识别 | 主方法：#对比学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40505) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40505/44466)

👥 **作者与机构**

- Haowei Lou：机构信息未能从会议 PDF 纯文本可靠映射
- Hye\-young Paik：机构信息未能从会议 PDF 纯文本可靠映射
- Wen Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Lina Yao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为单句语音梅尔频谱与风格描述文本，输出为情感性别年龄语言四类副语言标签并要求嵌入可直接驱动语音合成且支持单属性替换，难点在于多属性纠缠引发任务间干扰与负迁移及文本描述模糊导致弱属性被压制。该方法先由语音编码器将梅尔频谱压缩为定长向量，再在META空间按多任务标签重合数做加权对比使共享属性越多距离越近。接着经任务专属线性头投影到各自低维子空间并独立做有监督对比以收紧类内分布，其输出进入原型对齐阶段。然后每个任务每类维护指数滑动平均原型，并以余弦对齐损失同时拉近语音嵌入与文本投影嵌入到各自类原型，从而统一语音与文本提示接口。相对CLAP把全部属性压入单一联合嵌入的做法，该设计用显式分空间与类锚点避免主导属性压制弱属性，提升细粒度属性可分性与可控性。在主体无关划分的情感任务评测下，Transformer主干ParaMETA的平衡准确率为50\.1，高于交叉熵基线的35\.0。结论适用边界受限于中英文组合语料与四任务范围，语言操控准确率仅55\.0且文本提示自然度弱于语音提示构成失败条件。在推理开销方面LSTM变体实时因子为0\.003且CUDA内存约433MB，硬件需求远低于CLAP基线。

🔗 **开源资源**

- 代码相关资源：<https://github.com/haoweilou/ParaMETA> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 41. [文本带路、解释搭桥、时间对齐：TEXT 如何让音频视频不再带偏情感判断](/posts/conference-aaai-2026-conference-paper-id-40559-9c446c008b/)

> 英文题目：*[A Text\-Routed Sparse Mixture\-of\-Experts Model with Explanation and Temporal Alignment for Multi\-Modal Sentiment Analysis](/posts/conference-aaai-2026-conference-paper-id-40559-9c446c008b/)*

标签：#混合专家模型 #多模态学习 #音视频 #语音情感识别

评分：**7.3/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#混合专家模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40559) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40559/44520)

👥 **作者与机构**

- Dongning Rao：机构信息未能从会议 PDF 纯文本可靠映射
- Yunbiao Zeng：机构信息未能从会议 PDF 纯文本可靠映射
- Zhihua Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Jujian Lv：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态情感分析以文本、音频、视频为输入，预测情感极性与连续情感分值，难点在于音频与视频常误导极性且短视频情感随时间变化。TEXT先以在EMER\-fine上微调的VideoLLaMA 3按音频、视频与评论生成原始解释，再经Qwen 3检查精炼，并以BERT编码字幕与解释、Librosa编码音频、OpenFace编码视频。随后解释对齐块以交叉注意力将解释与音视频表示对齐得到Et、Ea与Ev，再由融合Mamba与时序交叉注意力的时序对齐块经一维卷积与Sigmoid Linear Unit门控融合Ea与Ev得到Eav。最后以文本为路由键的稀疏混合专家建模跨模态交互，并经门控多层感知机回归输出分值，前一步的对齐表示直接作为路由与分类输入。与ALMT、KuDA、DEVA平等融合或渐进融合不同，TEXT把文本解释作为对齐锚点并仅以文本路由专家，突出主导模态并抑制冲突模态干扰。在CH\-SIMS基准下，TEXT的MAE为0\.353，低于ALMT的0\.449。结论适用边界限于MOSI、MOSEI、CH\-SIMS与CH\-SIMSv2四个短视频语料与给定特征流水线，尚未验证长视频、噪声与跨语言泛化。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/fip-lab/TEXT> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 42. [不等整句就翻译：用句法块教会大模型何时等待、何时落笔](/posts/conference-aaai-2026-conference-paper-id-40733-1e39393224/)

> 英文题目：*[SASST: Leveraging Syntax\-Aware Chunking and LLMs for Simultaneous Speech Translation](/posts/conference-aaai-2026-conference-paper-id-40733-1e39393224/)*

标签：#端到端学习 #大语言模型 #多语言 #流式处理 #语音翻译

评分：**7.3/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音翻译 | 主方法：#端到端学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40733) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40733/44694)

👥 **作者与机构**

- Zeyu Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Lai Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Roman Koshkin：机构信息未能从会议 PDF 纯文本可靠映射
- Xi Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Satoshi Nakamura：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

同时语音翻译需在源语音流未结束时增量生成目标译文，输入为连续语音、输出为部分译文与等待决策，难点在于读写时机与内容生成相互耦合且英汉日等语序差异大，延迟与质量难以兼顾。该方法先用依存句法按名词短语、动词结构与标点线索把源文切分为语义完整块，确保块内语义不碎裂。接着经语音时间戳与词对齐把块映射为带等待标记的目标监督，并做块内目标重排以缓解因果缺失与词序发散。然后以冻结Whisper编码器加Qwen3解码器做两阶段微调，先离线全句训练再在块对齐流式数据上联合学习何时等待与输出什么，使分段推理内化为自回归生成。与保留外部策略头或固定切窗的方法不同，该框架取消独立切分模块而在生成环路中学习上下文敏感触发，减少误差传递与额外延迟。在CoVoST 2英译中翻译任务评测下，语法感知切分方法的BLEU为38\.5，高于固定长度切分的BLEU 23\.2。其适用边界受限于仅在英译德汉日三个高资源方向验证，低资源噪声语音与无解析器场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/zeyuyang-906/SSAST> — 链接可访问（HTTP 200）
- 第三方资源：<https://spacy.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/pe-trik/iwslt25-baselines> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 43. [以多指标一致偏好约束生成式语音修复：GenSR\-Pref 与三范式 DPO 对齐](/posts/conference-aaai-2026-conference-paper-id-40775-87c4a382ed/)

> 英文题目：*[Multi\-Metric Preference Alignment for Generative Speech Restoration](/posts/conference-aaai-2026-conference-paper-id-40775-87c4a382ed/)*

标签：#数据集 #偏好优化 #后训练 #语音 #音频修复

评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.5/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频修复 | 主方法：#偏好优化

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40775) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40775/44736)

👥 **作者与机构**

- Junan Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xueyao Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Jing Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuancheng Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Fan Fan：机构信息未能从会议 PDF 纯文本可靠映射
- Zhizheng Wu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

生成式语音修复以退化语音为输入重建高质量波形，难点在于似然训练目标与人耳感知的清晰度、自然度、无伪影要求错位。作者先用自回归、掩码生成与流匹配三类基座模型对同一退化输入生成多个候选输出，为偏好学习提供多样化比较来源。接着以感知质量、信号保真、内容一致与音色保持四维指标进行一致同意筛选，仅当胜者四项均高于败者才构成胜负对，由此构造约八万对的偏好数据集并进入下一步优化。然后采用直接偏好优化分别对三类范式模型做范式内微调，使胜者似然相对提升而败者相对下降，完成从偏好数据到策略对齐的转化。与单指标对齐只提目标分而拖累他项不同，一致同意机制强制整体改进并抑制奖励黑客，且同范式数据提供更直接的对齐方向。在Librivox\-GSR基准下，对齐后AnyEnhance的NISQA为4\.865，高于对齐前的4\.346，表明多指标一致同意在该通用语音修复任务上带来整体感知质量提升。该结论在跨语种强失真外推上尚未验证且受限于机器指标代理人类偏好，人听评估规模与统计检验交代有限，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://gensr-pref.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 44. [MAVERIX：逼模型同时听和看，堵住单模态捷径的音视频理解基准](/posts/conference-aaai-2026-conference-paper-id-39923-0e3c650e6a/)

> 英文题目：*[MAVERIX: Multimodal Audio\-Visual Evaluation and Recognition IndeX](/posts/conference-aaai-2026-conference-paper-id-39923-0e3c650e6a/)*

标签：#基准测试 #基准设计 #音视频 #音视频问答

评分：**7.2/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频问答 | 主方法：#基准设计

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39923) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39923/43884)

👥 **作者与机构**

- Liuyue Xie：机构信息未能从会议 PDF 纯文本可靠映射
- Avik Kuthiala：机构信息未能从会议 PDF 纯文本可靠映射
- George Z Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Ce Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Ananya Bal：机构信息未能从会议 PDF 纯文本可靠映射
- Mosam Dabhi：机构信息未能从会议 PDF 纯文本可靠映射
- Liting Wen：机构信息未能从会议 PDF 纯文本可靠映射
- Taru Rustagi：机构信息未能从会议 PDF 纯文本可靠映射
- Ethan Lai：机构信息未能从会议 PDF 纯文本可靠映射
- Sushil Khyalia：机构信息未能从会议 PDF 纯文本可靠映射
- Rohan Choudhury：机构信息未能从会议 PDF 纯文本可靠映射
- Morteza Ziyadi：机构信息未能从会议 PDF 纯文本可靠映射
- Xu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Hao Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Laszlo A\. Jeni：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该基准输入为含连续画面、原始音频与Whisper\-v3生成字幕的真实视频，输出为八选一答案与开放式解释，难点在于多数旧题仅凭单帧、字幕或常识即可猜对，无需联合视听推理。构建第一步由8名专家筛选强视听关联片段并撰写初版问答与七个干扰项，负责提供需跨模态融合的候选。第二步将初版送入纯文本、纯视频与视频加字幕三路消融检验，若GPT\-4o\-mini与Gemini 2\.0\-FL任一条件答对则回炉重写，负责剔除单模态捷径。第三步对幸存题目做语言合法性、可回答性、选项唯一性与模态互依赖质检及众包难度标定，负责形成700视频2556题终版。相对已有视频基准的关键差异是把模态互依赖作为准入条件而非事后统计，并以八选项降低随机猜中率与释义鲁棒性检验暴露浅层对齐。在MAVERIX多选题评测设置下，Gemini 2\.5 FL的准确率为54\.7%，低于人类表现的92\.8%。其结论适用边界限于所覆盖的日常社交分布与中等时长为主语料，对需长时异步线索的社会情绪理解与专业领域外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://maverix-benchmark.github.io/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://maverix-benchmark.github.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.anthropic.com/news/claude-3-5-sonnet> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 45. [不用中间文本转写：以识别语义直接约束唇手到语音的统一生成](/posts/conference-aaai-2026-conference-paper-id-40643-b60d827956/)

> 英文题目：*[UniCUE: Unified Recognition and Generation Framework for Chinese Cued Speech Video\-to\-Speech Generation](/posts/conference-aaai-2026-conference-paper-id-40643-b60d827956/)*

标签：#数据集 #扩散模型 #多任务学习 #音视频 #音视频语音合成

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频语音合成 | 主方法：#多任务学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40643) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40643/44604)

👥 **作者与机构**

- Jinting Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Shan Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Chenxing Li：机构信息未能从会议 PDF 纯文本可靠映射
- Dong Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Li Liu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

中文手势编码语音（Cued Speech，CS）视频到语音生成（CS Video\-to\-Speech，CSV2S）需从唇动与手形手位双线索直接合成可懂且时间对齐的语音，难点在于手前于唇的异步性、多模态到声学的映射歧义与数据稀缺。统一识别与生成框架（Unified Recognition and Generation Framework for Chinese Cued Speech Video\-to\-Speech Generation，UniCUE）先用姿态感知视觉处理器融合视频帧与姿态图得到混合表征，再经语义对齐池将视觉与文本拉入共享语义空间，随后由视觉语音适配器提炼为扩散兼容条件，最终由潜在扩散模型（Latent Diffusion Model，LDM）去噪合成梅尔频谱并经声码器化为波形。与先识别后合成的级联思路不同，该框架以细粒度识别语义直接补偿生成，避免文本瓶颈丢失时空细节与引入级联错误。在自建 Unified\-HI语料的正常听力测试划分上，UniCUE词错率（Word Error Rate，WER）为0\.205，相对直接生成基线的0\.374下降约45%，同步指标LSE\-C为6\.729、LSE\-D为7\.632，语音质量DNSMOS为2\.46、STOI为0\.53。该结论限于普通话朗读句场景与仅用6名健听人训练的分布，对听障人异常发音与自发对话的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://beria-moon.github.io/UniCUE/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 46. [先去噪再补缺：TMDC 用两阶段应对缺失与噪声并存的多模态情感分析](/posts/conference-aaai-2026-conference-paper-id-37212-6b932859c9/)

> 英文题目：*[TMDC: A Two\-Stage Modality Denoising and Complementation Framework for Multimodal Sentiment Analysis with Missing and Noisy Modalities](/posts/conference-aaai-2026-conference-paper-id-37212-6b932859c9/)*

标签：#多模态学习 #鲁棒性 #音视频 #语音情感识别

评分：**7.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37212) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37212/41174)

👥 **作者与机构**

- Yan Zhuang：机构信息未能从会议 PDF 纯文本可靠映射
- Minhao Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yanru Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiawen Deng：机构信息未能从会议 PDF 纯文本可靠映射
- Fuji Ren：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态情感分析（Multimodal Sentiment Analysis， MSA）以文本、音频、视频为输入预测情感极性或类别，现实中缺失模态与传感器噪声常同时出现并相互放大误差。所提两阶段模态去噪与补全框架（Two\-stage Modality Denoising and Complementation， TMDC）先在完备数据上并行学习去噪后的模态特有表示与模态共享表示，再在缺失场景下以可用模态的双类表示为查询与键值做融合补全，最终拼接补偿特征与精炼单模态特征送入全连接层预测。该设计与仅重建缺失信号的方法差异在于把变分信息瓶颈（Variational Information Bottleneck， VIB）去噪置于补全之前，避免噪声污染跨模态重建。在 MOSEI 七种缺失组合平均上 TMDC 达到 81\.22 准确率与 80\.76 F1 值，超出最强基线 MoMKE 约 0\.78 个点；在 MOSEI 高斯噪声强度 10 下达到 71\.2 准确率，领先 MoMKE 约 10\.0 个点。结论限于 MOSI、MOSEI 与 IEMOCAP 三个已对齐特征基准及人工零向量模拟缺失与高斯噪声注入设置，未验证自然缺失、非平稳噪声与跨数据集迁移。原文未披露训练时长、推理延迟或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/YetZzzzzz/TMDC> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 47. [不抠嘴唇像素：用语速与情绪指令做对齐的电影配音](/posts/conference-aaai-2026-conference-paper-id-38298-de5d37762a/)

> 英文题目：*[InstructDubber: Instruction\-based Alignment for Zero\-shot Movie Dubbing](/posts/conference-aaai-2026-conference-paper-id-38298-de5d37762a/)*

标签：#指令微调 #韵律 #零样本 #语音配音

评分：**7.1/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音配音 | 主方法：#指令微调

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38298) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38298/42260)

👥 **作者与机构**

- Zhedong Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Liang Li：机构信息未能从会议 PDF 纯文本可靠映射
- Gaoxiang Cong：机构信息未能从会议 PDF 纯文本可靠映射
- Chunshan Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhan Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaowan Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Tao Gu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuankai Qi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

电影配音需以参考音频为音色条件、剧本为内容输入、静音视频为对齐依据，联合预测音素级时长与韵律并合成与口型及表情同步的语音，难点在于视觉域变化会导致传统唇部特征失效。InstructDubber先调用冻结预训练多模态大语言模型由视频与剧本生成语速指令和情感指令，再由指令时长蒸馏模块以槽注意力提炼时长线索并结合韵律文本特征预测音素时长，同时由指令情感校准模块用低秩自适应微调的轻量大语言模型抽取情感实体并预测音高与能量，最后将时长与韵律送入与ProDubber相同的冻结HiFi\-GAN音频解码器合成配音。与依赖唇部视觉特征的方法不同，该方法以语言指令为域不变中介，避免了人脸检测与特征提取流水线。在V2C\-Animation到Chem的零样本设置下时长散度为0\.4565、情感相似度为70\.34%且词错率为8\.42%，优于ProDubber和StyleDubber。该结论限于V2C\-Animation、Chem与GRID三类数据及6组跨数据集评测，复杂遮挡与多说话人重叠场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://zzdoog.github.io/InstructDubber/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/jitsi/jiwer> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/openai/whisper-large> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 48. [多模态指令导航：用语言、图像和声音共同消除目标歧义](/posts/conference-aaai-2026-conference-paper-id-38886-29edb0a385/)

> 英文题目：*[NaVLA$^2$: A Vision\-Language\-Audio\-Action Model for Multimodal Instruction Navigation](/posts/conference-aaai-2026-conference-paper-id-38886-29edb0a385/)*

标签：#基准测试 #多模态学习 #空间音频信号 #声源定位

评分：**7.1/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#声源定位 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38886) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38886/42848)

👥 **作者与机构**

- Jugang Fan：机构信息未能从会议 PDF 纯文本可靠映射
- Peihao Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Changhao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Qing Du：机构信息未能从会议 PDF 纯文本可靠映射
- Jian Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Mingkui Tan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态指令导航要求智能体在未见室内环境中依据包含类别、代表图像、语言描述和听觉文本描述的指令依次经过1至5个地标并在终点3米内停止，难点在于多相似物体消歧、声音语义与方位联合接地和长程分段规划。NaVLA2先用模态专用编码器分别抽取自中心RGB图像、双耳空间音频语义与空间分支特征及多模态指令特征，再经两层MLP适配器对齐到共享表示空间后交错送入大语言模型联合推理，最后由CoThinkAct模块并行生成意图思考链与以特殊标识符约束的多步离散动作。编码器输出进入适配器完成跨模态对齐，对齐后序列进入大语言模型形成场景理解，理解结果进入CoThinkAct同时展开高层推理与低层动作规划从而保持决策一致。与仅用视觉文本的视觉语言动作模型不同，该方法显式保留双耳方向线索并联合语义与空间音频，使声音发射体定位更准且推理过程可解释。在MINav基准未见环境评测下，完整NaVLA2的成功率指标SR为0\.272，高于无音频消融版本的0\.206。该提升仍伴随绝对成功率偏低与轨迹偏长，表明复杂多模态接地仍有较大研究空间。该结论适用边界受限于Habitat加SoundSpaces合成声场与前进25厘米转向30度离散动作设置，尚未验证真实噪声连续控制与开放词汇泛化。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/felixfjg/NaVLA> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 49. [看得见情绪还不够，可信才能用：MultiMood 的多模态分工与对齐代价](/posts/conference-aaai-2026-conference-paper-id-40412-6b6f5029c7/)

> 英文题目：*[Reinforce Trustworthiness in Multimodal Emotional Support System](/posts/conference-aaai-2026-conference-paper-id-40412-6b6f5029c7/)*

标签：#多模态学习 #强化学习 #大语言模型 #音视频 #语音情感识别

评分：**7.1/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#强化学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40412) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40412/44373)

👥 **作者与机构**

- Huy M\. Le：机构信息未能从会议 PDF 纯文本可靠映射
- Dat Tien Nguyen：机构信息未能从会议 PDF 纯文本可靠映射
- Ngan T\. T\. Vo：机构信息未能从会议 PDF 纯文本可靠映射
- Tuan D\. Q\. Nguyen：机构信息未能从会议 PDF 纯文本可靠映射
- Nguyen Le Binh：机构信息未能从会议 PDF 纯文本可靠映射
- Duy Minh Ho Nguyen：机构信息未能从会议 PDF 纯文本可靠映射
- Daniel Sonntag：机构信息未能从会议 PDF 纯文本可靠映射
- Lizi Liao：机构信息未能从会议 PDF 纯文本可靠映射
- Binh T\. Nguyen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理以视频、音频和文本为输入的治疗式对话，输出包含用户情绪识别、系统情绪与策略预测及共情回复，难点在于非言语线索缺失与回复安全可控难以兼顾。所提多模态情绪框架MultiMood先以专用编码器抽取视觉与声学特征并经投影对齐到大型语言模型（Large Language Model，LLM）空间，再用基于状态空间模型的对话压缩器将长历史压缩为记忆表征，最后以监督微调加群组相对策略优化（Group Relative Policy Optimization，GRPO）与近端策略优化（Proximal Policy Optimization，PPO）的两阶段训练生成回复。与仅做文本或单做情绪识别的基线不同，该方法将多模态预测与七维心理学可信度奖励显式耦合到强化学习（Reinforcement Learning，RL）目标。在动态表情数据库（Dynamic Facial Expression in the Wild，DFEW）上加权平均召回率达到89\.89%，显著高于EmotionLLaMA的77\.06%，在多模态情感支持对话数据集（Multimodal Emotional Support Conversation，MESC）上用户情绪识别准确率58\.60%与回复生成亦居首，但策略预测42\.81%落后于SMES的49\.00%。结论限于影视剧来源的仿真治疗数据与文本化人工评估，未在真实临床分布与语音交互部署中验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/quangtuan-0504/Multimood> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 50. [不加噪声也能留后门：用整体起伏的频率与响度曲线触发说话人识别](/posts/conference-aaai-2026-conference-paper-id-36961-58d3ad61f3/)

> 英文题目：*[Modulation\-Based Backdoors: Leveraging Amplitude and Frequency Patterns to Attack Speaker Recognition](/posts/conference-aaai-2026-conference-paper-id-36961-58d3ad61f3/)*

标签：#信号处理 #音频安全 #语音 #说话人识别

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#说话人识别 | 主方法：#信号处理

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/36961) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/36961/40923)

👥 **作者与机构**

- Hanbo Cai：机构信息未能从会议 PDF 纯文本可靠映射
- Pengcheng Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yan Xiao：机构信息未能从会议 PDF 纯文本可靠映射
- De Li：机构信息未能从会议 PDF 纯文本可靠映射
- Hanting Chu：机构信息未能从会议 PDF 纯文本可靠映射
- Ying Luo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

说话人识别需从短语音在封闭集内判定身份，投毒式后门要求在保持正常精度的同时使带触发音频误判为目标说话人，难点在于加性噪声与环境声触发易被听出且经信道衰减后易失效。为此论文提出频率调制FSMA与幅度调制ASMA，先按频率1Hz至4Hz与幅度0\.3至2\.0等参数构造周期为3的时变正弦调制曲线以生成调制子。接着经时域调制算子将调制子逐点作用于原始波形以生成毒化样本，保持语义与可懂度并嵌入全局光滑包络扰动。随后按5%投毒比将毒化样本混入训练集植入后门，推理时同参数调制音频即激活误分类为目标标签。与叠加式触发的关键机制差异在于非加性调制不引入可听噪声且与信道失真兼容，因而隐蔽性与物理可部署性更强。在LibriSpeech评测场景下，d\-vector模型上FSMA的攻击成功率指标为98\.57%，高于PhaseBack的80\.78%。室内复播条件下平均攻击成功率FSMA仍达83%且良性精度损失控制在1\.5%以内，干净标签投毒9%时平均攻击成功率回落至77%左右。其适用边界为封闭集识别与毒标签投毒，强失真与开放集外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/HanboCai/FSMA-ASMA> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 51. [为每段呼吸声选增强：PASA 用两阶段混合策略平衡效率与个性化](/posts/conference-aaai-2026-conference-paper-id-37093-d314857847/)

> 英文题目：*[PASA: Progressive\-Adaptive Spectral Augmentation for Automated Auscultation in Data\-Scarce Environments](/posts/conference-aaai-2026-conference-paper-id-37093-d314857847/)*

标签：#医疗音频 #数据增强 #强化学习 #音频分类

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分类 | 主方法：#强化学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37093) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37093/41055)

👥 **作者与机构**

- Ying Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Guoheng Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Xueyuan Gong：机构信息未能从会议 PDF 纯文本可靠映射
- Xinxin Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaochen Yuan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

呼吸音与心杂音自动听诊输入为对数梅尔频谱图，输出为正常与多类病理类别，难点在于标注稀缺、类别不平衡且正常与病理声学特性差异大，统一固定增强易损害判别性特征。本文提出的渐进自适应频谱增强（Progressive\-Adaptive Spectral Augmentation，PASA）构建诊断模型与增强策略智能体的交替闭环，先由诊断模型抽取原始与增强批次语义特征并拼接类别分布形成状态，再由柔性行动者评论家（Soft Actor\-Critic，SAC）采样操作与强度动作，接着由混合批量样本（Hybrid Batch\-Sample，HBS）执行器落地增强，最后用验证集增益作为奖励联合优化两端。与固定变换和纯批量或纯样本自适应方法不同，HBS先用批量均匀增强积累样本置信度统计，待验证性能停滞后再按困难度分集合约样本级个性化增强。在CirCor DigiScope心杂音检测上加权准确率达0\.85，在SPRSound 2023四个任务上达84\.56%、70\.21%、78\.79%和66\.07%，原文宣称相对近期最优最高提升12\.6%。该结论目前仅在三个听诊数据集与EfficientNet\-B4诊断主干下验证，对跨设备、跨人群与多模态的外推尚未证明。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/wangying1586/PASA> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 52. [先学走再学舞：用掩码动作先验统筹音乐、体裁与姿态的可编辑舞蹈合成](/posts/conference-aaai-2026-conference-paper-id-37833-2c13b59dbd/)

> 英文题目：*[Walk Before You Dance: High\-fidelity and Editable Dance Synthesis via Generative Masked Motion Prior](/posts/conference-aaai-2026-conference-paper-id-37833-2c13b59dbd/)*

标签：#生成模型 #Transformer #向量量化 #音乐 #音视频生成

评分：**7.0/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#生成模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37833) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37833/41795)

👥 **作者与机构**

- Foram N Shah：机构信息未能从会议 PDF 纯文本可靠映射
- Parshwa N Shah：机构信息未能从会议 PDF 纯文本可靠映射
- Muhammad Usama Saleem：机构信息未能从会议 PDF 纯文本可靠映射
- Ekkasit Pinyoanuntapong：机构信息未能从会议 PDF 纯文本可靠映射
- Pu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Hongfei Xue：机构信息未能从会议 PDF 纯文本可靠映射
- Ahmed Helmy：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音乐驱动舞蹈合成需以音乐信号、体裁文本与稀疏姿态约束为输入联合生成三维人体动作，难点在于同时保证真实感、节拍对齐、多样性、物理合理性与可编辑性且避免多模态梯度冲突。DanceMosaic先用向量量化将连续动作离散为词元并在混合语料上统一表征，为掩码建模提供可学习的类别分布。接着在HumanML3D上预训练文本条件掩码骨干学习通用运动先验，其输出的掩码分布作为后续舞蹈合成的基础。然后冻结骨干并行接入音乐塔与姿态塔，经同步掩码与渐进训练分别注入节奏与空间约束，使各分支以各自损失独立优化同一先验。与单塔掩码或动作空间扩散模型不同，该设计以零初始化线性连接与逐帧词元相加实现模态对齐，并在推理时以多模态分类器无关logits引导与词元优化强化控制。在FineDance基准下，DanceMosaic的运动质量指标FIDk为22\.33，低于LODGE的45\.56。该结论适用边界受限于FineDance的9秒短片段评测与HumanML3D文本基准，长时编舞仅靠零样本拼接验证，跨风格泛化尚未验证，其在单卡RTX A5000硬件上每9秒片段推理开销为0\.8秒。

🔗 **开源资源**

- 演示资源：<https://foram-s1.github.io/DanceMosaic/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 53. [压缩对齐与异步去噪：READ 如何把扩散说话头做到实时](/posts/conference-aaai-2026-conference-paper-id-37940-6ce7115e23/)

> 英文题目：*[READ: Real\-time and Efficient Asynchronous Diffusion for Audio\-driven Talking Head Generation](/posts/conference-aaai-2026-conference-paper-id-37940-6ce7115e23/)*

标签：#扩散模型 #高效推理 #实时处理 #音视频生成

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.2/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37940) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37940/41902)

👥 **作者与机构**

- Haotian Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuzhe Weng：机构信息未能从会议 PDF 纯文本可靠映射
- Jun Du：机构信息未能从会议 PDF 纯文本可靠映射
- Haoran Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoyan Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Shan He：机构信息未能从会议 PDF 纯文本可靠映射
- Bing Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Cong Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Jianqing Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Qingfeng Liu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频驱动说话头生成需以单张参考图与连续语音为输入，输出口型同步且身份稳定的视频，难点在于扩散主干输入token量大导致推理慢，且长视频分段生成易在拼接处出现跨段断裂。READ先用来自LTX\-VIDEO的时间压缩视频自编码器将视频压为每token对应32×32×8像素的低token潜序列，以降低主干计算负担。接着语音自编码器将冻结Whisper\-tiny提取的语音特征同步压缩至与视频潜序列相同的时间分辨率，形成帧级对齐的语音潜码并作为条件输入。然后音频到视频扩散Transformer以帧级条件建模该对齐潜表示合成人像，而异步噪声调度器在训练与推理均对运动帧与目标帧施加不同强度噪声，并用上一段尾帧引导下一段生成。与同步加噪加片段直接拼接不同，该异步运动引导在潜空间维持身份与时序一致，无需额外网络即可支撑长时扩展与加速推理。在HDTF基准测试集条件下，READ的同步置信度Sync\-C指标为8\.658，高于Sonic基线的8\.525。该结论适用边界受限于HDTF与MEAD语料覆盖的512×512分辨率近景说话人场景，对大角度转头、遮挡与强情绪外推尚未验证。推理开销方面框架在NVIDIA A100硬件上以8步采样推理，121帧片段主干延迟为4\.421s，而训练成本未在证据中量化披露。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 54. [流式生成三维说话脸：用自回归条件约束轻量扩散头](/posts/conference-aaai-2026-conference-paper-id-38162-2e46d470ea/)

> 英文题目：*[StreamingTalker: Audio\-driven 3D Facial Animation with Autoregressive Diffusion Model](/posts/conference-aaai-2026-conference-paper-id-38162-2e46d470ea/)*

标签：#自回归模型 #扩散模型 #流式处理 #语音 #音视频生成

评分：**7.0/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38162) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38162/42124)

👥 **作者与机构**

- Yifan Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhi Cen：机构信息未能从会议 PDF 纯文本可靠映射
- Sida Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangwei Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yifu Deng：机构信息未能从会议 PDF 纯文本可靠映射
- Xinyu Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Fan Jia：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaowei Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Hujun Bao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音驱动三维人脸动画需以语音片段与说话人身份为输入逐帧生成三维网格，需兼顾口型同步与表情自然，且长序列超出训练视野易退化、全序列联合去噪导致时延随长度增长。方法先以向量量化变分自编码器将人脸运动压缩为离散隐变量并可经解码器重建网格，为后续逐帧生成提供紧凑运动先验。接着自回归条件预测器以偏置因果自注意力编码有限历史运动隐变量，再经交叉注意力与HuBERT语音编码及风格嵌入对齐融合，输出指导下一帧的动态条件。最后轻量单层多层感知机扩散头在该动态条件与时间嵌入下由高斯噪声直接预测干净隐变量并解码为网格，实现固定窗历史下的因果流式输出。相比全序列一起去噪的扩散基线，该历史条件引导的自回归扩散避免对整段音频的等待依赖，因而对任意长度保持低首帧时延与长程稳定性。在VOCASET基准测试设置下，StreamingTalker的LVE指标为2\.7206，低于DiffSpeaker的LVE指标3\.1478。该结论适用边界受限于短时长英语扫描语料与有限表情变化，长程语义与情绪外推尚未验证。单卡Nvidia RTX 4090硬件上首帧延迟仅25ms并可达40FPS渲染。

🔗 **开源资源**

- 代码相关资源：<https://zju3dv.github.io/StreamingTalker/> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 55. [从整图配音到按声源混音：SS2A 的拆分解歧义与再混合](/posts/conference-aaai-2026-conference-paper-id-39297-9b0a13824e/)

> 英文题目：*[Gotta Hear Them All: Towards Sound Source Aware Audio Generation](/posts/conference-aaai-2026-conference-paper-id-39297-9b0a13824e/)*

标签：#数据集 #对比学习 #多模态学习 #音频生成

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#对比学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39297) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39297/43258)

👥 **作者与机构**

- Wei Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Heng Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jianbo Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Weidong Cai：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

静默图像到音频合成需从全局画面生成契合场景的十秒波形，难点在于全局视觉嵌入易丢失局部发声对象及其交互，导致沉浸感与表达力不足。SS2A先经声源感知以视觉检测器裁剪局部区域并经跨模态翻译统一视觉、文本、音频提示，得到各声源的语义集合。接着将该语义投影到在单声源图文音频对上对比学习的跨模态声源流形CMSS上解歧，以保留音频特性并抑制相似源干扰。最后由注意力声源混合器将流形嵌入与其CLIP语义拼接后融合成单个CLAP音频表征，并送入冻结AudioLDM合成波形，还可循环利用各源重构语义迭代引导。相对直接映射全局场景的已有方法，该显式局部感知、解歧与混合机制能尊重各声源特性并支持视觉文本音频跨模态组合控制，具有实际意义。在VGGSound通用图像到音频测试集下，SS2A的相关性指标CS为12\.947，高于V2A\-Mapper的11\.521。该结论适用边界受限于中心帧条件与十秒片段，对遮挡小目标漏检与细粒度时序同步尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://ssv2a.github.io/SSV2A-demo/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 56. [把梅尔谱看成退化：先线性找回谱结构再用大核修复细节](/posts/conference-aaai-2026-conference-paper-id-40416-7895d4e4cc/)

> 英文题目：*[DegVoC: Revisiting Neural Vocoder from a Degradation Perspective](/posts/conference-aaai-2026-conference-paper-id-40416-7895d4e4cc/)*

标签：#注意力机制 #生成对抗网络 #高效推理 #语音 #语音合成

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音合成 | 主方法：#生成对抗网络

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40416) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40416/44377)

👥 **作者与机构**

- Andong Li：机构信息未能从会议 PDF 纯文本可靠映射
- Tong Lei：机构信息未能从会议 PDF 纯文本可靠映射
- Lingling Dai：机构信息未能从会议 PDF 纯文本可靠映射
- Kai Li：机构信息未能从会议 PDF 纯文本可靠映射
- Rilin Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Meng Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaodong Li：机构信息未能从会议 PDF 纯文本可靠映射
- Dong Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Chengshi Zheng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

神经声码器需由压缩的梅尔谱重建目标波形，长期受困于相位缺失与高频压缩带来的病态逆问题，传统条件生成往往依赖大参数量或多步迭代采样。DegVoC将该任务重构为信号复原，先由初始化求解器利用线性退化先验把梅尔域观测映射回线性时频域粗谱，再由深度先验求解器经分频编码、大核卷积注意力建模与分频合并恢复谐波细节与相位结构。与从噪声出发的生成范式不同，该链条以退化逆运算提供强结构起点，大幅降低建模负担并显式利用子带异质分布。在LibriTTS评测中DegVoC以3\.89M参数取得感知语音质量评估PESQ 4\.225，略低于同期流匹配基线RFWave的4\.251，但在多分辨率短时傅里叶距离M\-STFT 0\.8028、梅尔倒谱距离MCD 2\.209、浊音清音F1 0\.966和周期性均方根误差0\.088上均为最优。该结论目前主要在24kHz英语朗读上验证，EARS情感、AISHELL3普通话与MUSDB18歌声外推样本量较小，强混响、长时音乐与低码率声学特征下的稳定性尚未充分证明。模型保持单步前向推理与45\.62 Giga/5s计算量，适合边缘部署，但原文未披露训练时长与硬件成本细节。

🔗 **开源资源**

- 第三方资源：<https://github.com/ludlows/PESQ/tree/master> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/openai/whisper> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 57. [不预测离散口令而直写连续声学潜向量：子空间扩散如何重连唇动与声音](/posts/conference-aaai-2026-conference-paper-id-40464-aaaa0587f7/)

> 英文题目：*[SLD\-L2S: Hierarchical Subspace Latent Diffusion for High\-Fidelity Lip to Speech Synthesis](/posts/conference-aaai-2026-conference-paper-id-40464-aaaa0587f7/)*

标签：#扩散模型 #流匹配 #音视频 #音视频语音合成

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频语音合成 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40464) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40464/44425)

👥 **作者与机构**

- Yifan Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Andong Li：机构信息未能从会议 PDF 纯文本可靠映射
- Kang Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Guochen Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Fangkun Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Lingling Dai：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaodong Li：机构信息未能从会议 PDF 纯文本可靠映射
- Chengshi Zheng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

唇到语音合成需仅从唇动视频生成可懂且高保真语音，难点在于模糊视觉线索到复杂声学特征的一对多映射，传统梅尔谱或离散自监督口令牌会引入量化信息损失。SLD\-L2S先以预训练AV\-HuBERT Large视觉编码器提取1024维唇动特征并经转置卷积上采样对齐至X\-Codec\-Hubert编解码器潜空间分辨率，同时以参考话语提取说话人嵌入作为生成条件。接着子空间分解模块将视觉特征切分为8路并行子空间并送入堆叠扩散卷积块建模时序与跨子空间交互，再经子空间重组模块融合为统一条件表示。然后重参数化流匹配直接预测目标连续潜向量并由冻结解码器合成16kHz波形，训练在数据空间叠加语音语言模型波形特征损失与语义解码器一致性损失约束内容与感知质量。与预测离散口令牌或标准速度场的前作不同，该链路绕过量化瓶颈并允许感知损失直接作用于解码波形，提升训练稳定性与保真度。在LRS3\-TED基准下，Proposed方法的UTMOS为4\.2096，高于V2SFlow基线的3\.6939。其适用边界受限于LRS3\-TED与LRS2\-BBC语料场景，尚未验证强噪声遮挡与跨语言长时对话外推，且推理开销仅需10次函数评估而V2SFlow需30次。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 58. [不写新评测脚本：用统一比较器把文本、计划、时序与多媒体放在同一流程里](/posts/conference-aaai-2026-conference-paper-id-41496-77ac729253/)

> 英文题目：*[GAICo: A Deployed and Extensible Framework for Evaluating Diverse and Multimodal Generative AI Outputs](/posts/conference-aaai-2026-conference-paper-id-41496-77ac729253/)*

标签：#开源工具 #评测协议 #模型比较 #音频质量评估

评分：**7.0/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.4/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频质量评估 | 主方法：#评测协议

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/41496) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/41496/45457)

👥 **作者与机构**

- Nitin Gupta：机构信息未能从会议 PDF 纯文本可靠映射
- Pallav Koppisetti：机构信息未能从会议 PDF 纯文本可靠映射
- Kausik Lakkaraju：机构信息未能从会议 PDF 纯文本可靠映射
- Biplav Srivastava：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

生成式AI在旅行助手等多模态场景中输入为多流水线生成的结构化行程JSON及其衍生图像与音频提示，输出为可比分数、可视化与阈值诊断，实际难点在于模态异构、LLM生成规划序列不规范及提示质量与执行质量难以归因。该方法先由基础指标抽象统一计算接口，将文本、规划、时间序列、图像与音频等异构输出归一化为批量可比分数。接着由指标库分别执行参照比较，以PlanningLCS比较动作序列、以TimeSeriesDTW处理时序偏移并以SSIM与SNR评估多媒体保真度，前步归一化分数直接作为本步参照比较的输入。最后由Experiment类聚合多模型分数并自动生成条形图、雷达图与CSV阈值报告，从而把编排器规划一致性与专家模型执行保真度分离为两阶段评估。相对紧耦合大模型裁判的Ragas与DeepEval等通用评测库，其关键差异在于以后验参照比较替代在线推理耦合，避免了API成本、限流与非确定性，提升了离线比较的快速性与可靠性。在PyPI部署统计场景下，GAICo自2025年6月发布至2025年12月的累计下载量指标为超过16K次，高于发布初期的下载量指标的0次。其结论适用边界受限于有高质量参照的离线比较场景，尚未验证公平性、毒性、多轮对话与任意嵌套结构的泛化能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ai4society/GenAIResultsComparator/tree/main/examples> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 59. [预训练会弹琴却不懂调式：把大/小调先验注入最弱层的情绪识别补课](/posts/conference-aaai-2026-conference-paper-id-37201-47130112eb/)

> 英文题目：*[Let the Model Learn to Feel: Mode\-Guided Tonality Injection for Symbolic Music Emotion Recognition](/posts/conference-aaai-2026-conference-paper-id-37201-47130112eb/)*

标签：#Adapter #听觉与音乐认知 #音乐 #音乐理解

评分：**6.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐理解 | 主方法：#Adapter

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37201) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37201/41163)

👥 **作者与机构**

- Haiying Xia：机构信息未能从会议 PDF 纯文本可靠映射
- Zhongyi Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Yumei Tan：机构信息未能从会议 PDF 纯文本可靠映射
- Shuxiang Song：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

符号音乐情感识别需从MIDI符号序列推断Russell四象限情感标签，难点在于MIDIBERT以掩码重建为预训练目标，缺乏对大小调与效价关联的显式约束，且情感标注数据稀少易受调性偏移干扰。该工作先做调式保持的单八度内整体移调增强诊断，对比原始与增强数据下MIDIBERT在官方划分上的表现以检验其是否内化调式情感规律。接着冻结主干仅微调单层自注意力与分类头做逐层探针，定位情感信息最弱的首层作为知识注入目标。然后用Krumhansl\-Kessler算法经music21抽取每首乐曲的大小调先验并编码为独热条件向量，经FiLM条件网络生成缩放与平移参数对Compound Word嵌入做仿射调制后送入首层自注意力，使后续表示全程携带调式条件。相对仅微调MIDIBERT或堆叠分类头的做法，差异在于冻结语义主干而在瓶颈输入处做参数高效的音乐理论条件注入，并将FiLM初始化为缩放为1平移为0以保持预训练稳定，兼顾可解释性与稳定性。在EMOPIA评测任务下，本方法的准确率为0\.752，高于MIDIBERT\-Piano基线的0\.634。结论适用边界受限于西方大小调体系与四分类效价唤醒划分，对多调式、非西方音乐及细粒度情感尚未验证。硬件为单张NVIDIA GeForce RTX 3090，训练成本为至多微调20轮且总时长不到30分钟，批量与早停策略均按原文设置执行。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ZoeyHuang-paper/MoFi> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 60. [先认出是什么，再听出在哪里：跨实例视觉提示的选择性测向](/posts/conference-aaai-2026-conference-paper-id-39175-a20da2d0ab/)

> 英文题目：*[AV\-SSAN: Audio\-Visual Selective DOA Estimation Through Explicit Multi\-Band Semantic\-Spatial Alignment](/posts/conference-aaai-2026-conference-paper-id-39175-a20da2d0ab/)*

标签：#数据集 #多模态学习 #音视频 #空间音频信号 #声源定位

评分：**6.9/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#声源定位 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39175) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39175/43136)

👥 **作者与机构**

- Yu Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Hongxu Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Jiadong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Kainan Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Xinyuan Qian：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

跨实例音视频定位以双通道混合语音与同类异实例提示图像为输入，输出与提示语义匹配声源的到达方向，难点在于视觉与音频空间无关且双声源相互干扰导致难以解耦目标。语义桥特征网络先用CLIP抽取视觉嵌入并结合VGGish语义音频嵌入，经Transformer融合为目标语义线索以桥接模态失配。多频带语义空间对齐网络将频谱切分为细带、中带与全带并计算耳间相位差与强度差，再以语义线索为查询做跨注意力与频带加权融合以对齐各带空间特征。空间细化器对三带对齐特征做时变加权并预测时频掩膜以抑制干扰，最后由多层感知机输出180类到达方向后验，与先做空间相关再定位的既有音视频方法不同，该框架先做语义对齐再做空间解耦。在VGGSound\-SSL的0 dB双源混合测试条件下，AV\-SSAN的平均绝对误差指标为16\.59°，低于CMAF基线的18\.65°。该结论适用边界受限于合成房间脉冲响应与5°容差准确率协议，失败条件包括目标能量弱时过抑制干扰残留，尚未验证真实多源重叠与强混响外推范围。原文披露硬件为两块RTX\-4090 GPU且训练成本为140k步、批量32与AdamW学习率5e\-3设置，未涉及推理开销与部署延迟。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 61. [不用指令做音频任务：用注意力头掩码锁定大音频语言模型的功能通路](/posts/conference-aaai-2026-conference-paper-id-39299-44f2e634fe/)

> 英文题目：*[AHAMask: Reliable Task Specification for Large Audio Language Models Without Instructions](/posts/conference-aaai-2026-conference-paper-id-39299-44f2e634fe/)*

标签：#参数高效微调 #音频大模型 #可解释性 #鲁棒性 #音频理解

评分：**6.9/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频理解 | 主方法：#参数高效微调

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39299) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39299/43260)

👥 **作者与机构**

- Yiwei Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Bohan Li：机构信息未能从会议 PDF 纯文本可靠映射
- Hankun Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhihan Li：机构信息未能从会议 PDF 纯文本可靠映射
- Shuai Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xie Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Kai Yu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

大音频语言模型以音频与文本指令为输入、输出转写分类描述等文本，同义改写与大小写标点扰动即可引发幻觉与剧烈波动，指令敏感成为可靠部署的难点。先冻结模型全部参数，仅为解码器每个注意力头学习是否激活的二值掩码，以无指令音频直接配对目标文本为监督输入，用交叉熵优化掩码Logits并输出连续激活概率。再将上一步概率经Gumbel\-Sigmoid离散化前向、直通估计器反向回传，职责是使不可微头选择可端到端学习，输出任务相关的头子集分布。最后把学习到的概率按阈值固化为固定二值掩码并跳过被屏蔽头的输出投影累加，将训练所得通路直接作为推理时任务触发器而不再输入指令。相比指令微调与低秩适配改写权重，该机制不增改权重而是缩减有效通路，可训练参数量等于注意力头数、存储仅百字节量级，具有高效实际意义。在LibriSpeech性别识别任务测试集下，AHAMask无指令的ACC为98\.05，高于显式指令基线的96\.79。该结论适用边界受限于已见单任务与语音识别与性别组合，对开放指令与跨模型迁移尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 62. [模型能听出尖与圆吗：用拟声词与伪词检验多模态大模型的语音象征](/posts/conference-aaai-2026-conference-paper-id-40387-de52082289/)

> 英文题目：*[Do Language Models Associate Sound with Meaning? A Multimodal Study of Sound Symbolism](/posts/conference-aaai-2026-conference-paper-id-40387-de52082289/)*

标签：#数据集 #评测协议 #可解释性 #语音学与音系 #音频问答

评分：**6.9/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#评测协议

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40387) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40387/44348)

👥 **作者与机构**

- Jinhong Jeong：机构信息未能从会议 PDF 纯文本可靠映射
- Sunghyun Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Jaeyoung Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Seonah Han：机构信息未能从会议 PDF 纯文本可靠映射
- Youngjae Yu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以拟声词与拟态词的正字法文本、IPA文本或合成音频为输入，对至多25组对立语义维度做二选一含义推断，难点在于排除词汇记忆后仍需从语音形式泛化到语义。先构建LEX\-ICON多语言拟态词库并用四个大模型投票生成伪真值，其输出的过滤后语义特征进入评测环节。再用CVCV结构系统构造伪词并引入人类评定系数过滤中性样本，其输出的去记忆化强象征样本进入对比测试。最后以零样本二选一提示测macro\-F1并对正确样本做音素级注意力分数归因。与既往仅做bouba\-kiki二分类或纯文本探针相比，该工作把音频token与文本置于统一位置编码推理并打通行为表现与内部归因。在语义维度预测任务下，自然词组的macro\-F1分数超过0\.50基线的维度占比为84\.2%，高于构造词组的68\.4%。结论适用边界受限于受控合成语音与离散语义维度，尚未验证自然韵律、连续语义或跨文化泛化，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/jjhsnail0822/sound-symbolism> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 63. [幻影威胁：物理传感器攻击如何让视觉\-语言\-动作模型失手，又如何加固](/posts/conference-aaai-2026-conference-paper-id-40881-ef5d368e84/)

> 英文题目：*[Phantom Menace: Exploring and Enhancing the Robustness of VLA Models Against Physical Sensor Attacks](/posts/conference-aaai-2026-conference-paper-id-40881-ef5d368e84/)*

标签：#对抗训练 #对抗鲁棒性 #音视频 #语音交互

评分：**6.9/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音交互 | 主方法：#对抗训练

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40881) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40881/44842)

👥 **作者与机构**

- Xuancun Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaxiang Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Shilin Xiao：机构信息未能从会议 PDF 纯文本可靠映射
- Zizhi Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Zhangrui Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Hanwen Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Bohan Qian：机构信息未能从会议 PDF 纯文本可靠映射
- Ruochen Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoyu Ji：机构信息未能从会议 PDF 纯文本可靠映射
- Wenyuan Xu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

视觉语言动作模型以双路相机图像与麦克风语音指令为输入，经视觉语言骨干与动作解码器直接输出机械臂位移与夹爪开合，需在长时序闭环中维持感知语言动作一致，在遮挡强光与不可闻干扰下极易误抓碰撞或失控。针对该威胁，本文提出Real\-Sim\-Real框架并分三步衔接：先在Franka Panda真机平台采集激光致盲、光投影、电磁色带截断、激光色带与超声模糊六类视觉攻击及语音拒绝欺骗两类音频攻击的物理效应，再在Libero仿真器中按弱中强三档参数化复现条纹位置、截断比例与模糊幅度，最后用仿真搜索到的有效参数回放真机块抓放进行验证，形成物理到仿真再到物理的闭环。仿真输出的攻击强度表直接决定真机攻击装置配置，真机成功率又反过来校验仿真参数的真实性。防御阶段将干净轨迹与0\.3比例随机攻击样本混合，对OpenVLA、OpenVLA\-OFT、pi0与pi0\-fast做对抗微调，使模型在保持干净性能的同时适应分布外物理扰动。与聚焦数字对抗补丁、越狱与后门的已有方法不同，该链路强调可开关可隐身的主动物理注入及其闭环行为后果，而非单步数字篡改。在Libero\-Long任务设置下，强激光致盲攻击下OpenVLA的Task Success Rate为0\.0%，低于无攻击基线的53\.7%。该结论适用边界限于四模型、四套Libero任务与八种攻击实现，尚未验证导航、双臂协作与户外动态光照等外推场景。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ZJUshine/Phantom-Menace> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/TimSchneider42/franky> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 64. [一种检测器要听懂四种造假：小波提示如何补上频率感知](/posts/conference-aaai-2026-conference-paper-id-40907-ba0ba8ab6f/)

> 英文题目：*[Detect All\-Type Deepfake Audio: Wavelet Prompt Tuning for Enhanced Auditory Perception](/posts/conference-aaai-2026-conference-paper-id-40907-ba0ba8ab6f/)*

标签：#基准测试 #提示学习 #自监督学习 #音频深度伪造检测

评分：**6.9/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频深度伪造检测 | 主方法：#提示学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40907) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40907/44868)

👥 **作者与机构**

- Yuankun Xie：机构信息未能从会议 PDF 纯文本可靠映射
- Ruibo Fu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaopeng Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiyong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Songjun Cao：机构信息未能从会议 PDF 纯文本可靠映射
- Long Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Haonan Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Long Ye：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理全类型音频深度伪造检测（Audio Deepfake Detection，ADD），输入为规整至固定长度的原始波形，输出为真伪二分类分数，难点是单类型训练的鉴别器在语音、声音、歌声与音乐之间泛化急剧退化。方法链分为三步：首先冻结自监督学习（Self\-Supervised Learning，SSL）前端并在每层Transformer输入前拼接可学习提示词；其次对其中4个提示词做Haar离散小波变换（Discrete Wavelet Transform，DWT），显式构造低频与高频子带；最后将提示增强的序列送入AASIST后端做谱时图注意力分类。相比全量微调（Fine\-Tuning，FT），该机制不更新主干而只学习频率感知的提示分布，相比普通提示调优（Prompt Tuning，PT）则增加了全频带结构偏置。在四类数据联合训练下，WPT\-XLSR\-AASIST在全部评测集上平均等错误率（Equal Error Rate，EER）为3\.58%，优于同结构FT基线的4\.98%。该结论依赖相对干净且无部分伪造的基准划分，未验证噪声、压缩与未知生成器的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 65. [偏好打架时不要平均：把动作、口型、画质拆开学再按时步和层融合](/posts/conference-aaai-2026-conference-paper-id-37962-e1e412a093/)

> 英文题目：*[FantasyTalking2: Timestep\-Layer Adaptive Preference Optimization for Audio\-Driven Portrait Animation](/posts/conference-aaai-2026-conference-paper-id-37962-e1e412a093/)*

标签：#扩散模型 #混合专家模型 #偏好优化 #音视频 #音视频生成

评分：**6.8/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#偏好优化

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37962) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37962/41924)

👥 **作者与机构**

- Mengchao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Wang Qiang：机构信息未能从会议 PDF 纯文本可靠映射
- Fan Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Mu Xu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频驱动肖像动画以单张参考图像与驱动语音为输入，输出说话人视频，难点是运动自然度、唇同步精度与视觉质量三目标相互冲突，且缺乏大规模多维偏好标注。方法链第一步将统一视听语言模型Qwen2\.5\-Omni指令微调为多维奖励模型Talking\-Critic，在三维上输出偏好判断并自动构造偏好对。第二步用维度解耦偏好对独立训练三个低秩适配专家分别优化运动自然、唇同步与视觉质量，其中唇同步专家训练轮数更多，其输出增量进入下一步融合。第三步冻结主干与专家，仅训练时间步\-层自适应融合门，根据去噪时间步嵌入逐层动态加权专家增量，并在全维度偏好对上协同优化。与线性加权多目标直接偏好优化相比，该机制按去噪阶段与Transformer层功能分工注入偏好，避免易学目标压制难学目标，因而趋向帕累托最优而非折中退化。在基准测试集下，Ours的Sync\-C为5\.704，高于MultiTalk的5\.668，且Ours的FVD为341\.181，低于MultiTalk的362\.591。该结论适用边界受限于近身与半身说话肖像场景，对极端姿态、复杂手部与长时一致性仍可能退化，跨语言与跨风格泛化尚未验证。原文披露的硬件与训练成本为在16块A100上训练专家与融合门，且奖励模型训练约需48个A100 GPU小时，推理开销随逐层动态融合而增加。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 66. [文本先验压住视听信号时，用偏好对齐把注意力拉回视频与音频](/posts/conference-aaai-2026-conference-paper-id-39104-15593ebca9/)

> 英文题目：*[OmniDPO: A Preference Optimization Framework to Address Omni\-Modal Hallucination](/posts/conference-aaai-2026-conference-paper-id-39104-15593ebca9/)*

标签：#数据集 #偏好优化 #音视频 #音视频问答

评分：**6.8/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频问答 | 主方法：#偏好优化

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39104) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39104/43066)

👥 **作者与机构**

- Junzhe Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Tianshu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shiyu Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuwei Niu：机构信息未能从会议 PDF 纯文本可靠映射
- Chao Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Rongzhou Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Guanyu Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Lijie Wen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

全模态大语言模型需以视频帧序列、原始音频波形与文本问题为输入并生成文本回答，难点是文本先验压制视听证据，且视频与原生音频的内在关联在独立对齐训练中被割裂。OmniDPO 先过滤无音频片段并用音频模型生成声音摘要，再将其与视频共同送入视觉语言模型得到音频感知正样本，同时以屏蔽音频文本的同视频输出构造忽视音频的负样本，形成音视频对齐文本偏好。接着对视频像素与音频波形分别加零均值高斯噪声构造退化输入，与完整输入共享同一正答案形成视觉与听觉两类模态鲁棒偏好，迫使正确回答在证据缺失时降低置信。相比仅对比正负文本的直接偏好优化与视觉对比解码，该机制显式区分完整与退化输入下同答案的似然，从而联合抑制文本主导与跨模态错位。在 AVHBench 音频驱动视频幻觉子集上，Qwen2\.5\-Omni 经 OmniDPO 后准确率达到 84\.42%，高于基线 74\.12% 与文本直接偏好优化的 71\.74%。在 CMM 上 Qwen2\.5\-Omni 感知准确率与幻觉抵抗平均提升 1\.6% 与 4\.5%，在 MMAU 与 MMMU 推理基准上平均提升 2\.4%。该结论限于文本、视频与音频三模态问答、字幕与推理评测，未验证更多模态扩展与强视觉歧义下的感知上限。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/OpenBMB/MiniCPM-o> → <https://github.com/OpenBMB/MiniCPM-V> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 67. [用可预测的显式节奏信号约束扩散：Diff\-V2M 的分层条件设计](/posts/conference-aaai-2026-conference-paper-id-39378-857ed0ce49/)

> 英文题目：*[Diff\-V2M: A Hierarchical Conditional Diffusion Model with Explicit Rhythmic Modeling for Video\-to\-Music Generation](/posts/conference-aaai-2026-conference-paper-id-39378-857ed0ce49/)*

标签：#扩散模型 #音视频 #音乐 #视频到声音生成

评分：**6.8/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#视频到声音生成 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39378) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39378/43339)

👥 **作者与机构**

- Shulei Ji：机构信息未能从会议 PDF 纯文本可靠映射
- Zihao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaxing Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangyuan Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Shuyu Li：机构信息未能从会议 PDF 纯文本可靠映射
- Songruoyao Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Kejun Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

视频到音乐生成（Video\-to\-Music）的输入为通用视频片段，输出为44\.1 kHz波形音乐，难点在于缺乏显式节奏建模导致的视听时间对齐困难，以及情感、语义、节奏等多视角视觉特征难以协同条件化。该方法先从视频提取三路特征：颜色直方图刻画情感，冻结CLIP ViT/B\-32逐帧提取语义，场景切分与视觉节拍峰值结合CLIP驱动节奏预测器估计低分辨率起音检测函数（Onset Detection Function）。随后冻结变分自编码器（Variational Autoencoder）压缩波形，仅训练扩散变换器（Diffusion Transformer），以分层交叉注意力先注入情感定调、再并行处理语义与节奏，并用扩散时间步（timestep）感知的加权与特征线性调制（Feature\-wise Linear Modulation）融合语义与节奏分支。相比隐式学习视觉动力学到节奏的映射或经文本中转丢失时序细节的做法，显式一维节奏曲线与并行注意力加自适应融合保留了细粒度时间结构。在BGM909与SymMV构成的混合域内测试集上该模型FAD为1\.5175，显著优于VidMuse的3\.4376，视频音乐绑定ImageBind Score达0\.1812；在域外V2M\-Bench上FAD为1\.7612保持最优，但ImageBind Score为0\.1967略低于GVMGen的0\.2030。该结论在人体精细动作主导的舞蹈视频与强风格控制需求下适用性尚未验证，原文未披露训练时长与部署成本。

🔗 **开源资源**

- 演示资源：<https://tayjsl97.github.io/Diff-V2M-Demo/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 68. [不用成对混合也能分离：扩散先验与重建引导如何分开又合上声音](/posts/conference-aaai-2026-conference-paper-id-39728-269a6efa0a/)

> 英文题目：*[Unsupervised Single\-Channel Audio Separation with Diffusion Source Priors](/posts/conference-aaai-2026-conference-paper-id-39728-269a6efa0a/)*

标签：#扩散模型 #无监督学习 #单通道 #音频分离

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分离 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39728) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39728/43689)

👥 **作者与机构**

- Runwu Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Chang Li：机构信息未能从会议 PDF 纯文本可靠映射
- Jiang Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Rui Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Nabeela Khan：机构信息未能从会议 PDF 纯文本可靠映射
- Benjamin Yen：机构信息未能从会议 PDF 纯文本可靠映射
- Takeshi Ashizawa：机构信息未能从会议 PDF 纯文本可靠映射
- Kazuhiro Nakadai：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

单通道无监督分离需仅从单路混合波形恢复多个源波形，难点在于无配对监督时解不唯一，且异构语音与声音事件及同质双说话人需共用约束求解并伴随排列歧义。该方法先在复谱域用无条件语音扩散与标签条件声音事件扩散分别建模单源先验，并以三路径全注意力U\-Net直接预测复谱分布。接着以时域、分组时域与幅度谱重构损失构成混合一致性目标，将其梯度作为似然引导注入多通道并行逆扩散，使各源逆向轨迹持续受混合约束牵引。最后采用加噪混合的单步公共初始化与平滑最大值混合引导调度稳定求解，前者以中间时刻的含噪混合为所有通道起点，后者融合噪声比例项与下界常数以贯穿全程。相对恒定步长的扩散后验采样与随噪声衰减的球面高斯约束，关键差异在于以平滑最大值保留终段非零下界，从而在早期克服先验与似然梯度冲突而在终段避免引导消失，实现更均衡的高质量分离。在1 Speech加1 Sound任务测试集下，所提混合引导调度的SI\-SDR为14\.31 dB，高于DSG噪声比例调度的12\.97 dB，同时PESQ为2\.12，高于DSG的1\.94。该结论适用边界受限于16 kHz下4秒VCTK与FSD\-Kaggle2018合成混合及已知源数与声音标签条件，同质双说话人仍存在跨时指派的失败条件，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://runwushi.github.io/unasdiff/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 69. [低码率下保真与语义难两全：非对称双量化如何分开处理内容与细节](/posts/conference-aaai-2026-conference-paper-id-40308-6c95f7ad37/)

> 英文题目：*[SACodec: Asymmetric Quantization with Semantic Anchoring for Low\-Bitrate High\-Fidelity Neural Speech Codecs](/posts/conference-aaai-2026-conference-paper-id-40308-6c95f7ad37/)*

标签：#生成对抗网络 #主观评测 #向量量化 #语音 #语音编码

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音编码 | 主方法：#向量量化

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40308) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40308/44269)

👥 **作者与机构**

- Zhongren Dong：机构信息未能从会议 PDF 纯文本可靠映射
- Bin Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jing Han：机构信息未能从会议 PDF 纯文本可靠映射
- Haotian Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaojun Mo：机构信息未能从会议 PDF 纯文本可靠映射
- Yimin Cao：机构信息未能从会议 PDF 纯文本可靠映射
- Zixing Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

神经语音编解码器需将连续波形压缩为离散词元供语音语言模型建模，而低码率下多层残差向量量化误差累积与单码本语义稀疏构成核心矛盾。SACodec 先用编码器将 24 kHz 波形下采样为 75 Hz 连续隐表示，随后语义锚定模块将其对齐至冻结外部码本以抽取语言内容并输出语义嵌入，残差模块对原始隐表示与语义嵌入之差建模音色韵律等声学细节，两路嵌入相加后由解码器重建波形。该设计以非对称双量化器替代对称多层结构，用码本整体投影和 SimVQ 重参数化实现全局更新，解决传统最近邻局部更新导致的码本坍塌。在 LibriTTS test\-clean 上以 1\.5 kbps 取得 UTMOS 4\.0373 和 PESQ 2\.6937，明显超过同码率 DAC 与 EnCodec 并接近原始音频 4\.0562，主观 MUSHRA 中位数达 96\.8，与真值 97\.5 处于同一感知层级。语义上 ARCH 压缩域均值 0\.4809、重建域均值 0\.6311，兼顾词元语义与重建后语义一致性。结论目前仅限于英语朗读语音的重建与分类探针评估，未验证跨语言、多说话人对话及端到端语音合成增益。原文未披露训练推理部署成本与完整超参数。

🔗 **开源资源**

- 代码相关资源：<https://github.com/SmileHnu/SACodec> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 70. [等还是说：REINA 用信息增益把非流式翻译模型改成同传模型](/posts/conference-aaai-2026-conference-paper-id-40360-1b6f6882a8/)

> 英文题目：*[REINA: Regularized Entropy Information\-Based Loss for Efficient Simultaneous Speech Translation](/posts/conference-aaai-2026-conference-paper-id-40360-1b6f6882a8/)*

标签：#正则化 #多语言 #流式处理 #语音翻译

评分：**6.8/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音翻译 | 主方法：#正则化

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40360) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40360/44321)

👥 **作者与机构**

- Nameer Hirschkind：机构信息未能从会议 PDF 纯文本可靠映射
- Joseph Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiao Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Mahesh Kumar Nandwana：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

同时语音翻译以流式音频为输入并逐词输出目标文本，需在每个时刻决定等待读取还是立即写出，难点在于跨语言词序差异使所需上下文不定，质量与延迟直接冲突。该方法先以多任务训练非流式语音到文本翻译基座，编码器采用Whisper Medium并联合机器翻译与语音识别数据优化解码器，输出完整音频下的翻译分布；再用部分截断音频微调同一基座，使其能估计部分音频下的下一词元对数概率，输出适配流式部分输入的模型；最后冻结基座训练轻量策略网络，将全音频与部分音频交叉熵差的批量归一化值与策略分数协方差最大化，并以单调性与L2正则约束推理一致性，输出阈值可调的读写真策略。与仅比较部分与完整输入输出分布散度的DiG\-SST不同，该目标直接利用真实标签计算信息增益，使等待决策对应互信息的阈值判断，具有更直接的优化意义。在MUST\-C基准评测任务下，REINA \(MUST\-C only\)的NoSE指标为0\.940，高于Dig\-SST \(Original\)的0\.888。结论适用边界受限于英法德西六个方向、0\.25秒分块与束宽3的流式束搜索，长语音与语音到语音外推尚未验证。训练成本已披露为24卡A100\-80G硬件下第一阶段5天、第二阶段2天、策略阶段20轮12小时内完成。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 71. [先把长语音变短再回答：用类文本表示搭桥的端到端语音检索器 CLSR](/posts/conference-aaai-2026-conference-paper-id-40364-5288d49126/)

> 英文题目：*[End\-to\-End Contrastive Language\-Speech Pretraining Model for Long\-Form Spoken Question Answering](/posts/conference-aaai-2026-conference-paper-id-40364-5288d49126/)*

标签：#对比学习 #检索增强 #长音频处理 #音频检索

评分：**6.8/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 1.0/1.5 | 清晰度 0.6/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频检索 | 主方法：#对比学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40364) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40364/44325)

👥 **作者与机构**

- Jiliang Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Zuchao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Baoyuan Qi：机构信息未能从会议 PDF 纯文本可靠映射
- Guoming Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Ping Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

长表单口语问答输入为文本或语音问题加数十分钟级语音上下文，输出为抽取或生成式答案，难点在于大音频语言模型难以直接消费长音频且易被无关片段干扰。本文提出对比语言语音检索器CLSR，先由语音编码器抽取声学特征并经连续积分触发压缩为词元级声学表示，再经向量量化适配器映射为类文本嵌入。上一阶段输出的类文本嵌入直接送入冻结文本编码器统一编码问题与上下文，最后以余弦相似度做对比学习实现问题查上下文与上下文查问题的双向对齐，形成端到端链条。与直接对齐声学与文本的双编码器相比，该链条把跨模态对齐转化为文本空间内对齐，可复用文本检索模型的泛化能力而无需大规模高质量语音文本对预训练。在Spoken\-SQuAD\*评测任务下，CLSR的WER为15\.14，低于Whisper\+BGE的WER19\.39。该结论适用边界受限于合成语音与固定40秒切分模拟长文档，在真实噪声会议和多说话人场景的外推尚未验证，而长音频筛选后的下游推理开销变化仍需结合具体硬件与延迟进一步评估。

🔗 **开源资源**

- 代码相关资源：<https://github.com/193746/CLSR> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 72. [何时想、如何想：用四路奖励教音频大模型做难度自适应的推理](/posts/conference-aaai-2026-conference-paper-id-40689-728bf1e125/)

> 英文题目：*[Audio\-Thinker: Guiding Large Audio Language Model When and How to Think via Reinforcement Learning](/posts/conference-aaai-2026-conference-paper-id-40689-728bf1e125/)*

标签：#强化学习 #音频大模型 #后训练 #音频问答

评分：**6.8/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#强化学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40689) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40689/44650)

👥 **作者与机构**

- Shu Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Chenxing Li：机构信息未能从会议 PDF 纯文本可靠映射
- Wenfu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Hao Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Hualei Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Meng Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Dong Yu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频问答以音频波形加自然语言问题为输入并输出选项答案，难点在于题目难度跨度极大且仅监督最终答案时显式思考链易与答案脱节、沦为噪声。Audio\-Thinker先用自适应提示让模型先判断是否需要思考，再分别产生直答与带思考的混合 rollout，为后续学习何时思考提供候选。接着以组相对策略优化按自适应思考精度奖励学习难度感知的思考策略，并用随训练退火的软惩罚因子平衡思考与直答两种模式的占比。然后外部评审模型对思考与答案的一致性及推理质量打分，并与精度奖励组合成最终奖励，引导模型走向有效且可解释的推理轨迹。与强制思考或朴素GRPO不同，该方法将难度感知、一致性约束与过程质量显式解耦并渐进精化，抑制了猜对答案但推理错误的奖励黑客行为。在MMAU test\-mini基准下，Audio\-Thinker Qwen2\.5\-Omni版本的平均准确率为73\.70，高于Omni\-R1的平均准确率71\.3。该结论适用边界主要为英文多选题音频理解与短音频问答场景，尚未验证开放生成、长音频与跨语言外推，训练硬件受限于单节点8卡H20 GPU上训练1000步的设置。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 73. [可变形状态空间如何盯住稀疏而模糊的伪造边界](/posts/conference-aaai-2026-conference-paper-id-40928-709383a957/)

> 英文题目：*[DeformTrace: A Deformable State Space Model with Relay Tokens for Temporal Forgery Localization](/posts/conference-aaai-2026-conference-paper-id-40928-709383a957/)*

标签：#状态空间模型 #高效推理 #音视频 #音频伪造检测

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频伪造检测 | 主方法：#状态空间模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40928) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40928/44889)

👥 **作者与机构**

- Xiaodong Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Suting Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuanming Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Junqi Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Yangxu Liao：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhong Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Weiping Tu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhongyuan Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

时间伪造定位以时间对齐的音视频流为输入，需输出伪造片段中心与时长及整视频真伪标签，难点在于边界模糊、伪造稀疏易被真实帧淹没以及长序列状态衰减。DeformTrace先用冻结的Raven视听编码器抽取多尺度融合特征并经下采样构建时间金字塔，为编码器提供细粒度上下文。随后可变形自状态空间模块按参考时间点预测偏移并插值采样，再做双向状态传播，周期插入的中继令牌划分序列并搭接长程信息流。解码器中可变形交叉状态空间模块以查询为中心检索编码器上下文并迭代修正候选框，同时输出分类标签。相对固定扫描Mamba与全局注意力Transformer，该设计以查询相关的子空间划分抑制非伪造累积并动态扩展感受野，提升稀疏伪造敏感性。在AV\-Deepfake1M基准下，DeformTrace的mAP指标平均值为52\.9，高于DiMoDif的49\.3。该结论适用边界受限于谈话人脸伪造的两个基准，尚未验证跨操纵类型与跨语言泛化，重度块损伤与强音频噪声下仍明显下滑。在硬件为单张RTX 3090评测时其推理开销为每视频约104 ms、计算量为212\.4 G FLOPs，训练成本涉及8张RTX 3090。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 74. [预告片里画面与配乐为何总能卡点：VMChill 把细粒度视听协同做成可训练数据](/posts/conference-aaai-2026-conference-paper-id-37331-ad89c0c651/)

> 英文题目：*[VMChill: A Dataset for Fine\-Grained Visual\-Musical Synergy](/posts/conference-aaai-2026-conference-paper-id-37331-ad89c0c651/)*

标签：#数据集 #数据集构建 #音视频 #音乐 #视频到声音生成

评分：**6.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#视频到声音生成 | 主方法：#数据集构建

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37331) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37331/41293)

👥 **作者与机构**

- Xiaowei Chi：机构信息未能从会议 PDF 纯文本可靠映射
- Zeyue Tian：机构信息未能从会议 PDF 纯文本可靠映射
- Jialiang Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Xue：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为预告片视频片段及其伴随音频，输出为融合视觉叙事与音乐语义的细粒度多模态长字幕，难点在于预告片剪辑节奏快、文本特效多且音乐与画面语义耦合紧密。方法链分三步：先以预告片关键词检索在野长视频并按场景切分得到平均4\.6秒片段，再做运动、光学字符识别文本面积、图像质量与美学过滤及人声分离与音乐质量筛选，然后用单模态专家分别抽取首中尾帧内容、动态差异、对象背景标签与流派乐器情绪速度等音乐属性。最后由LLaMA2\-13B将异构描述融合成统一长字幕，并据此划分出VMChill\-20M、VMChill\-Music、VMChill\-2M与人工修订的VMChill\-Test子集。与既有视频语言数据集仅提供视觉字幕或把音乐视为通用音频类别不同，该工作显式建模音乐体裁乐器情绪速度并与视觉内容时间对齐，使音乐成为可理解生成的语义模态。在VBench评测任务下，VideoCrafter\-2\.0\(VMChill\)指标motion smoothness为98\.33，高于VideoCrafter\-2\.0的97\.73。结论适用边界限于预告片域短片段对齐与字幕增强，尚未验证长程音乐结构保持与跨域泛化能力。视频生成实验的训练成本为使用8块Tesla\-H800硬件、批量为3训练10000步。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 75. [不增加采样步数：用验证器引导的多轨搜索做音频超分](/posts/conference-aaai-2026-conference-paper-id-38520-9d129e827b/)

> 英文题目：*[Inference\-time Scaling for Diffusion\-based Audio Super\-resolution](/posts/conference-aaai-2026-conference-paper-id-38520-9d129e827b/)*

标签：#扩散模型 #环境声 #音乐 #语音 #音频超分辨

评分：**6.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频超分辨 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38520) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38520/42482)

👥 **作者与机构**

- Yizhu Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Zhen Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Zeyue Tian：机构信息未能从会议 PDF 纯文本可靠映射
- Haohe Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Qiuqiang Kong：机构信息未能从会议 PDF 纯文本可靠映射
- Yike Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Xue：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频超分辨需从低分辨波形恢复缺失高频，其一对多映射使确定性回归趋于均值而扩散采样又因随机性带来高方差与语义漂移。该文冻结预训练AudioSR，先由不同初始噪声并行生成多个高分辨候选，再用任务相关验证器打分并由搜索算法选优，形成生成加验证加选择的推理时扩展链。随机搜索负责大范围探索全局最优，零阶搜索围绕枢轴噪声做局部迭代精化，集成验证器则以排序平均抑制单一裁判的过拟合。与仅增加去噪步数的传统做法不同，该机制不改训练而是以外挂式优选纠正音色与可懂度损失。在VCTK语音从4 kHz到24 kHz的评测设置下，Ensemble Verifier加Random Search的WER指标为0\.106，低于Vanilla AudioSR的WER指标为0\.263。该结论适用边界受限于AudioSR基座与语音音乐音效三类受控语料，低截止频率下搜索空间更大而8 kHz输入下增益收窄，且单一验证器在大搜索量下会出现验证器劫持。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://racerk.github.io/tt-scale-audiosr> → <https://racerk.github.io/tt-scale-audiosr/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 76. [桥模型也是预测模型：用高斯概率路径统一流匹配与扩散桥](/posts/conference-aaai-2026-conference-paper-id-40630-d9228cfdc3/)

> 英文题目：*[Rethinking Flow and Diffusion Bridge Models for Speech Enhancement](/posts/conference-aaai-2026-conference-paper-id-40630-d9228cfdc3/)*

标签：#扩散模型 #流匹配 #去混响 #语音增强

评分：**6.7/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音增强 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40630) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40630/44591)

👥 **作者与机构**

- Dahan Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jun Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Tong Lei：机构信息未能从会议 PDF 纯文本可靠映射
- Yuxiang Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Changbao Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Kai Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Jing Lu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音增强需从带噪混响观测中恢复干净语音，配对信号间分布映射复杂且传统扩散桥多步采样昂贵脆弱。作者先将OUVE、BBED、SBVE与OT\-CFM统一为均值插值加方差调度的高斯概率路径，并推导对应常微分方程与前后向随机微分方程。接着以数据预测重写训练目标并用指数积分器离散采样，进而证明最终结果是各步网络估计与带噪输入的加权组合且末步权重主导。在此基础上将SB\-CFM与SBVE路径与预测式TF\-GridNet主干、傅里叶时间嵌入、SI\-SNR加压缩谱损失及仅微调末步的CRP策略结合，形成改进桥模型。在DNS3去噪去混响测试集下，5步改进模型的PESQ为3\.213，高于60步SBVE基线的2\.592。该差异的实际意义在于桥采样每步等价于一次预测增强，因而可用更少参数与计算量达到预测模型水平。但其结论适用边界受限于预测上界，多步加权增益有限而难以大幅超越对应预测模型，跨语种与强非平稳噪声等场景尚未验证。在计算量上，改进模型参数量为2\.2M且单步计算量为38G，5步推理开销远低于65\.6M参数且60步采样的SBVE基线。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 77. [先定位错在哪、再只改错段：多层次评估器如何稳住零样本语音合成](/posts/conference-aaai-2026-conference-paper-id-40636-abf8505edb/)

> 英文题目：*[Enhancing Stability and Fidelity for Zero\-Shot TTS with a Multi\-Level Evaluator](/posts/conference-aaai-2026-conference-paper-id-40636-abf8505edb/)*

标签：#偏好优化 #零样本 #语音编辑 #文本到语音

评分：**6.7/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#文本到语音 | 主方法：#偏好优化

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40636) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40636/44597)

👥 **作者与机构**

- Hualei Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Na Li：机构信息未能从会议 PDF 纯文本可靠映射
- Chuke Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Shu Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhifeng Li：机构信息未能从会议 PDF 纯文本可靠映射
- Dong Yu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

零样本语音合成（zero\-shot TTS）以短时说话人提示音频与目标文本为输入，生成音色一致的连续语音，难点是采样随机性与长文本隐式对齐导致的误读、漏读、重复、异常停顿与噪声。本文提出多级评估器 Vox\-Evaluator，先以语音编码器与音素文本联合编码抽取跨模态表示，再并行输出错误时间戳、整句质量分与转写文本，随后将转写文本与目标文本经动态时间规整（Dynamic Time Warping，DTW）比对以确认错词并扩展掩码，最后调用编辑式语音合成模型仅重生成掩码段并最多迭代两轮。同一评估器还被复用为细粒度奖励模型，仅对错误时间戳对应片段计算扩散式直接偏好优化（Direct Preference Optimization，DPO）损失，避免全句优化的信息冗余。与依赖外部语音识别加声学自监督模型加强制对齐器的纠错管线不同，该方法将定位、校验与质量评估统一为可训练多任务头。与原始F5\-TTS相比，纠错后在Seed\-TTS test\-en上词错率由1\.73%降至1\.42%，说话人相似度由0\.67微升至0\.68，对比平均意见分由0\.31微升至0\.33。该结论目前仅在英文朗读类数据集与两种骨干上验证，对多语言、对话式长播客与强噪声提示的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://voxevaluator.github.io/correction/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 78. [把“谁何时说了什么”一次生成：SpeakerLM 如何统一日志与识别并兼容注册条件](/posts/conference-aaai-2026-conference-paper-id-40745-d0ca03ff56/)

> 英文题目：*[SpeakerLM: End\-to\-End Versatile Speaker Diarization and Recognition with Multimodal Large Language Models](/posts/conference-aaai-2026-conference-paper-id-40745-d0ca03ff56/)*

标签：#会议转录 #多模态学习 #语音识别 #说话人分离标注 #说话人识别

评分：**6.7/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：模型报告 | 主任务：#说话人分离标注 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40745) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40745/44706)

👥 **作者与机构**

- Han Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Yafeng Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Chong Deng：机构信息未能从会议 PDF 纯文本可靠映射
- Luyao Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Hui Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Chao\-Hong Tan：机构信息未能从会议 PDF 纯文本可靠映射
- Qian Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Wen Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangang Li：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

说话人日志与识别需从多人混合长录音直接输出带说话人归属的转写，要同时回答谁在何时说了什么，级联式先日志后识别框架存在边界误差传播、重叠语音难处理且日志与识别缺乏联合优化。首先音频编码器加投影器将长录音映射为大语言模型可读的声学token，实现声学与文本空间对齐；接着冻结的说话人嵌入提取器加线性投影将注册语音转为身份向量，并与姓名文本拼接为上下文提示，与声学token一同输入；最后指令微调后的Qwen2\.5大语言模型自回归生成分行转写，无注册时输出匿名编号，有注册时输出真实姓名。四阶段渐进训练让识别预热输出进入仿真粗对齐，再经真实声学适配进入全模块联合优化。与级联基线用独立日志切分再对齐识别结果不同，该机制将注册身份向量直接作为提示参与端到端联合建模，减少了切分错误传播并保留了重叠区的声学语言协同。在AliMeeting\-Eval测试集Match\-Regist条件下，SpeakerLM的saCER指标为15\.57，低于SA\-Transformer的41\.55。该结论的适用边界受限于普通话会议与车载远场语料，尚未验证英文、高重叠与流式部署下的外推能力。训练成本为在4块NVIDIA A800 GPU硬件上每个阶段训练1M步，且注册嵌入需2至10秒语音平均得到代表向量。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 79. [用部分更新加偏好反馈保住口型，再用掩码引导实现免训练多人说话](/posts/conference-aaai-2026-conference-paper-id-37725-8f09224a8c/)

> 英文题目：*[Training\-Free Multi\-Character Audio\-Driven Animation via Diffusion Transformer with Reward Feedback](/posts/conference-aaai-2026-conference-paper-id-37725-8f09224a8c/)*

标签：#扩散模型 #LoRA #偏好优化 #音视频 #音视频生成

评分：**6.6/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37725) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37725/41687)

👥 **作者与机构**

- Xingpei Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Shenneng Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaran Cai：机构信息未能从会议 PDF 纯文本可靠映射
- Yuansheng Guan：机构信息未能从会议 PDF 纯文本可靠映射
- Shen Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Hanfeng Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Qiang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shunsi Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务以单张参考图像、文本提示词与语音音频为输入，生成口型同步且具自然上身动作的人体视频，难点在于长序列时序一致性、唇同步与全身自然度兼顾以及多人音频绑定。方法第一步基于Wan2\.1\-I2V\-14B\-720P做低秩适配训练，将视频按T/4分块编码以适配首帧独立压缩结构，在自注意力与交叉注意力上微调以支持长视频生成且暂不引入音频分支。第二步冻结主干并训练音频交叉注意力，以流匹配速度回归学习音频驱动，再用自动构造的偏好对做Flow\-DPO奖励反馈以提升唇同步与表情丰富度。第三步在推理期引入掩码分类器无关引导，按二值人物掩码将各路音频条件的速度残差加权叠加，从而免训练实现三人及以上多人物驱动。与需多人数据集与标签位置编码的MultiTalk不同，该方法无需专用数据与结构修改，仅靠推理期掩码加权解耦，大幅降低多人物扩展成本并保留预训练模型能力。在HDTF基准下，本方法不含DPO版本的FID为29\.05，低于Hallo3的33\.16。其结论适用边界受限于单人视频训练与短片段公开评测，多人物仅以定性演示验证，重叠语音、遮挡与长时漂移等失败条件尚未验证。训练成本上原文披露首阶段用16张A100训练5000步，后续用32张A100各训练100000步并每10000步更新参考模型，推理硬件延迟与吞吐等部署成本仍未充分量化。

🔗 **开源资源**

- 演示资源：<https://playmate111.github.io/Playmate2/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 80. [先想清楚指谁再分割：把指代表达理解显式拆成想、定位、分割三步](/posts/conference-aaai-2026-conference-paper-id-38373-46b6bb601e/)

> 英文题目：*[Think Before You Segment: An Object\-aware Reasoning Agent for Referring Audio\-Visual Segmentation](/posts/conference-aaai-2026-conference-paper-id-38373-46b6bb601e/)*

标签：#基准测试 #指令微调 #音视频 #音视频理解

评分：**6.6/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频理解 | 主方法：#指令微调

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38373) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38373/42335)

👥 **作者与机构**

- Jinxing Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Yanghao Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Mingfei Han：机构信息未能从会议 PDF 纯文本可靠映射
- Tong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaojun Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Hisham Cholakkal：机构信息未能从会议 PDF 纯文本可靠映射
- Rao Muhammad Anwer：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

指代音视频分割需以自然语言指代表达为查询，在十秒可听视频中逐帧分割被指物体并输出二值掩膜，难点在于表达混合听觉与视觉线索且常隐去类别名，需联合推理声源、语义与空间关系。TGS\-Agent将任务解耦为思考定位分割三步，Ref\-Thinker先融合音频、视频与表达生成显式思考推理链并输出物体描述，该文本描述直接作为查询进入下一步定位。Grounding\-DINO以该物体描述为显式提示在每帧生成边界框实现粗粒度跨帧定位，其输出的框再作为稀疏提示驱动后续分割。冻结的SAM2接收框提示与视频编码特征输出精细二值掩膜，无需更新分割器参数，形成从文本推理到框再到掩膜的显式链路。与依赖隐式多模态融合提示可调解码器的方法不同，该范式无需像素级掩膜监督且决策可追溯，实际意义在于将指代理解与像素预测分离。在Ref\-AVSBench混合集评测下，TGS\-Agent的J&F为65\.9，高于SAM2\-LOVE的58\.5。在更强调推理的R2\-AVSBench上该显式推理仍保持优势，说明对词汇多样且隐去目标名的表达具有更强泛化。该结论适用边界限于五十一类乐器与日常物体的十秒短视频，对多同类实例、空指代表达与长时复杂场景的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/IDEA-Research/Grounded-SAM-2> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 81. [把内容音色情感拆干净再拼回去：MF\-Speech 的提纯与细粒度指挥](/posts/conference-aaai-2026-conference-paper-id-38856-9fe6b2a740/)

> 英文题目：*[MF\-Speech: Achieving Fine\-Grained and Compositional Control in Speech Generation via Factor Disentanglement](/posts/conference-aaai-2026-conference-paper-id-38856-9fe6b2a740/)*

标签：#对比学习 #向量量化 #语音 #语音转换

评分：**6.6/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音转换 | 主方法：#向量量化

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38856) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38856/42818)

👥 **作者与机构**

- Xinyue Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Youqing Fang：机构信息未能从会议 PDF 纯文本可靠映射
- Pingyu Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Guoyang Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Wenbo Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Weiming Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Song Xiao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

面向语音转换中内容、音色与情感深度纠缠且控制粗糙的难题，本文以三路异源语音提示为输入并输出重组波形，要求同时保证可懂度与风格相似度。方法链分三段衔接：先以波形编解码预训练保证波形与特征间高精度互转，为后续解耦提供保真基础。接着三流结构的MF\-SpeechEncoder在多目标优化下提纯内容、音色与情感并经残差向量量化输出离散表征，互信息约束与对比学习共同抑制分支间信息泄漏。然后MF\-SpeechGenerator对三路离散表征做时变门控动态融合形成统一条件，并经分层风格自适应归一化逐层注入音色与情感后合成波形。与静态拼接与全局调制相比，该机制同时引入因子动态加权与多层细粒度注入，从而兼顾内容完整与风格表达。在多因子组合生成任务评测下，MF\-Speech的WER为4\.67%，低于DDDM\-VC的11\.67%。该结论适用边界受限于受控情感语料的seen与unseen划分，跨语言与大规模零样本迁移尚未验证，且原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://guoyang25.github.io/mf-speech/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 82. [文本与 MIDI 各走各路：MIDILM 用共享注意力加双路前馈兼顾语义与结构](/posts/conference-aaai-2026-conference-paper-id-39483-1ac11c68eb/)

> 英文题目：*[MIDILM: A Dual\-Path Model for Controllable Text\-to\-MIDI Generation](/posts/conference-aaai-2026-conference-paper-id-39483-1ac11c68eb/)*

标签：#混合专家模型 #多模态学习 #主观评测 #符号音乐生成

评分：**6.6/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.4/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#符号音乐生成 | 主方法：#混合专家模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39483) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39483/43444)

👥 **作者与机构**

- Shuyu Li：机构信息未能从会议 PDF 纯文本可靠映射
- Dooho Choi：机构信息未能从会议 PDF 纯文本可靠映射
- Yunsick Sung：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

自由文本到符号音乐生成需将自然语言映射为 REMI\+ 事件序列，既要语义可控又要保证速度、调性、拍号与长程结构一致。以往 MuseCoco 属性流水线表达受限，Text2MIDI 系列端到端交叉注意力模型对齐不足。MIDI LM 将预训练 GPT\-2 文本词元与 MIDI 词元拼接为前缀条件输入，先经共享掩码自注意力交互，再分流至文本专用多层感知机与 MIDI 专用混合专家模型处理，最终仅用 MIDI 路输出预测。在 MidiCaps 切分测试集上相对最强基线 Text2MIDI\-InferAlign 取得全面领先，TB 为 0\.9688 对 0\.3958，TBT 为 0\.9792 对 0\.6250，CT 为 0\.9167 对 0\.7917，同时 CLAP 为 0\.3127 超过真值的 0\.3063，CLaMP 3 为 0\.1564 超过真值的 0\.1434。该设计以隔离前馈减少模态干扰，以稀疏路由增强音乐维度分工，深层注意力可视化显示文本前缀约束随层加深而增强。当前结论限于 MidiCaps 英文描述与 4/4 主导分布，CK 仅 0\.4688，复杂调性与频繁转调仍弱，自由文本下主观优势收窄。原文披露在 4 张 RTX 3090 上训练约 60 小时，推理复用键值缓存并以温度控制采样，部署成本未系统报告。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 83. [在急救现场做第一视角助手：EgoEMS 为何先解决多模态同步与关键步骤标注](/posts/conference-aaai-2026-conference-paper-id-41293-f42174447a/)

> 英文题目：*[EgoEMS: A High\-Fidelity Multimodal Egocentric Dataset for Cognitive Assistance in Emergency Medical Services](/posts/conference-aaai-2026-conference-paper-id-41293-f42174447a/)*

标签：#基准测试 #数据集 #数据集构建 #说话人分离标注 #音频事件检测

评分：**6.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.3/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频事件检测 | 主方法：#数据集构建

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/41293) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/41293/45254)

👥 **作者与机构**

- Keshara Weerasinghe：机构信息未能从会议 PDF 纯文本可靠映射
- Xueren Ge：机构信息未能从会议 PDF 纯文本可靠映射
- Tessa Heick：机构信息未能从会议 PDF 纯文本可靠映射
- Lahiru Nuwan Wijayasingha：机构信息未能从会议 PDF 纯文本可靠映射
- Anthony Cortez：机构信息未能从会议 PDF 纯文本可靠映射
- Abhishek Satpathy：机构信息未能从会议 PDF 纯文本可靠映射
- John Stankovic：机构信息未能从会议 PDF 纯文本可靠映射
- Homa Alemzadeh：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文面向院前急救 Emergency Medical Services \(EMS\) 中多人协作、强时间约束下的程序性理解难题，输入为胸戴第一视角视频、现场对话音频与手腕惯性测量单元 Inertial Measurement Unit \(IMU\)，输出为细粒度关键步骤 Keystep 的类别与起止时间以及心肺复苏 Cardiopulmonary Resuscitation \(CPR\) 按压速率与深度。方法链分为四步：先按美国国家标准构建协议到干预再到67个关键步骤的分层本体，随后用低成本同步系统采集233个仿真试验的多人多模态数据，接着以人工与半自动流程生成关键步骤、带说话人分离标注 Diarization 的转录、目标框与按压真值，最后用单模态与融合基线验证分类、分割与质量估计。与既有日常活动第一视角数据集相比，该工作把高风险医疗协作、多人同步与质量真值纳入同一基准，具有明确领域差异。在主评测中监督 Transformer 在修剪片段关键步骤分类上达到62\.3%的 Top\-1准确率，在5秒窗在线分割融合后达到61\.0%的准确率，CPR反馈融合后速率F1为0\.52、深度F1为0\.83。结论限于仿真场景与心脏骤停、疑似心源性胸痛、卒中3类协议，向真实出车环境与跨机构泛化的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://uva-dsa.github.io/EgoEMS> → <https://uva-dsa.github.io/EgoEMS/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://uva-dsa.github.io/EgoEMS> → <https://uva-dsa.github.io/EgoEMS/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 84. [扩散克隆打的是多步去噪，VoiceCloak 就从身份与轨迹两端同时设障](/posts/conference-aaai-2026-conference-paper-id-37002-c41d3e3433/)

> 英文题目：*[VoiceCloak: A Multi\-Dimensional Defense Framework Against Unauthorized Diffusion\-Based Voice Cloning](/posts/conference-aaai-2026-conference-paper-id-37002-c41d3e3433/)*

标签：#对抗训练 #隐私保护 #音频安全 #语音 #语音克隆

评分：**6.5/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音克隆 | 主方法：#对抗训练

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37002) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37002/40964)

👥 **作者与机构**

- Qianyue Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Junyan Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangyang Luo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

未经授权的扩散语音克隆以短参考音频xref为条件合成目标音色，其多步去噪与动态条件对齐使针对单步编码器的扰动易失效，需在参考端施加不可感知扰动同时破坏身份与听感。VoiceCloak先在WavLM通用表征空间推离原身份并拉向异性centroid以扩大感知身份差，其输出作为带身份偏置的对抗参考进入下一步条件破坏。接着在U\-Net下采样线性注意力层最大化上下文分布KL散度，切断风格到内容的映射，使合成内容无法对齐目标音色特征。在此基础上通过放大分数网络模长使逆向随机微分方程漂移偏离高质量流形，并联动上采样语义特征推离原始特征拉向高斯噪声特征以制造非连贯，联合优化形成双目标防御。与仅攻击说话人编码器或声码器的Attack\-VC、VoiceGuard等基线不同，该设计直接干预扩散条件与去噪动力学，因而更适配扩散克隆的共享机制并提升跨模型迁移性。在LibriTTS评测设置下，VoiceCloak的DSR指标为71\.40%，高于VoiceGuard的43\.45%。该结论适用边界受限于LibriTTS与VCTK英文朗读语料及三款扩散模型，面对自适应去噪净化与强压缩信道的长期有效性尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 85. [临床抑郁评估：行为信号能判病，大模型推理为何还差一截](/posts/conference-aaai-2026-conference-paper-id-37153-8c9dde9b6f/)

> 英文题目：*[Unveiling the Landscape of Clinical Depression Assessment: From Behavioral Signatures to Psychiatric Reasoning](/posts/conference-aaai-2026-conference-paper-id-37153-8c9dde9b6f/)*

标签：#数据集构建 #多模态学习 #大语言模型 #语音 #病理语音评估

评分：**6.5/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#病理语音评估 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37153) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37153/41115)

👥 **作者与机构**

- Zhuang Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Guanqun Bi：机构信息未能从会议 PDF 纯文本可靠映射
- Wen Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiawei Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Aoyun Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiyao Xiao：机构信息未能从会议 PDF 纯文本可靠映射
- Kun Feng：机构信息未能从会议 PDF 纯文本可靠映射
- Minlie Huang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

临床抑郁评估的输入是访谈、图片描述与言语流畅任务下的音频、视频、转录本与功能性近红外光谱信号，输出是是否患重度抑郁障碍的二分类诊断，难点在于行为信号微弱异质且既往标签多依赖自评量表而非精神科确诊。作者先在玉泉医院采集临床多模态精神诊断数据集 C\-MIND，由主任与副主任医师按 DSM\-5给出确诊标签；接着用经典特征与基础模型嵌入训练判别模型以量化任务与模态价值并做任务融合与模态融合；最后以转录本提示大语言模型模拟精神科推理并注入结构化临床先验形成引导式推理。相比既往依赖自评标签与单模态手工设计，该工作以临床确诊为锚并强调任务诱发与跨通道互补，使评估更贴近真实诊疗逻辑。在 C\-MIND 的 6:2:2 划分上图片描述任务的音频特征取得 94\.10%的宏平均 F1，而引导式推理使 GPT\-4o 在零样本下达到 60\.53%仍低于监督转录本基线。该结论仅适用于中文单中心小样本与受控实验室采集，跨语言跨站点与重度共病泛化尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 86. [从公开课到四模态知识图：SciMKG 如何抽概念又对齐图文音视频](/posts/conference-aaai-2026-conference-paper-id-38574-fe75d74657/)

> 英文题目：*[SciMKG: A Multimodal Knowledge Graph for Science Education with Text, Image, Video and Audio](/posts/conference-aaai-2026-conference-paper-id-38574-fe75d74657/)*

标签：#教育 #数据集 #多模态学习 #音视频 #音频检索

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频检索 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38574) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38574/42536)

👥 **作者与机构**

- Tong Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhichun Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yaoyu Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Yiming Guan：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiyong Bai：机构信息未能从会议 PDF 纯文本可靠映射
- Junsheng Du：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为开放慕课视频字幕与幻灯片、课程标准、习题及ConceptNet与Wikipedia等异构资源，输出为覆盖生物、物理、化学的学科层、知识点层、概念层三级四模态教育知识图谱SciMKG，难点是在零人工标注下准确抽取学科概念并维持文本、图像、视频、音频的跨模态语义一致。抽取阶段由GPT\-4o等多大语言模型逐步推理产生候选概念，其输出直接进入验证阶段接受自我反馈与自我精炼的逐轮核查剪枝并附删留解释。集成增强阶段以自洽投票合并多模型结果形成精炼概念集，再用ConceptNet与Wikipedia补足覆盖并生成讲解文本。对齐组织阶段基于共享结构与语义特征将四模态数据挂载到同一概念，再按课程标准分层索引并存为跨表互引与RDF。与依赖人工标注训练命名实体识别的已有方法不同，该框架以自我精炼加自洽投票替代人工标注，并以免训练轻量对齐替代监督配准，从而降低标注依赖并保障跨模态一致性。在覆盖100课时4479个概念的子图评测下，本方法的F1\-score为0\.803，高于LinkNER的0\.734。该结论适用边界受限于中文中学理科语料，对其他学科、语言与真实课堂噪声的外推尚未验证。硬件方面实验仅说明在单块NVIDIA GeForce RTX 3090服务器上运行，大规模部署的推理开销与延迟仍受限。

🔗 **开源资源**

- 代码相关资源：<https://github.com/kg-bnu/SciMKG> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 87. [已有配音怎么改：AV\-Edit 用音画联合表示做加、删、换](/posts/conference-aaai-2026-conference-paper-id-39298-26af768141/)

> 英文题目：*[AV\-Edit: Multimodal Generative Sound Effect Editing via Audio\-Visual Semantic Joint Control](/posts/conference-aaai-2026-conference-paper-id-39298-26af768141/)*

标签：#基准测试 #扩散模型 #多模态学习 #音视频 #视频到声音生成

评分：**6.5/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#视频到声音生成 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39298) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39298/43259)

👥 **作者与机构**

- Xinyue Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoran Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Lipan Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Jianxuan Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jian Luan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

已有视频的声音特效编辑需同时理解输入视频与原始音频并合成目标音频，难点是保留视觉相关成分、去除无关成分并补全缺失成分，同时保持语义与时间同步。本文提出AV\-Edit两阶段框架：先用对比音频视觉掩码自编码器编辑版（Contrastive Audio\-Visual Masked Autoencoder for Editing，CAV\-MAE\-Edit）学习细粒度音视对齐表示，再用基于相关性的特征门控筛选音频帧特征，最后将音视文特征与同步特征送入多模态扩散变换器（Multimodal Diffusion Transformer，MM\-DiT）做条件去噪生成。与仅依赖文本提示的音频编辑相比，该链条以视觉语义直接驱动保留或丢弃，避免手工频谱操作和粗粒度文本控制。在VGGSound测试集8秒音频生成评测中，大模型感知质量指标内测分数（Inception Score，IS）达22\.48，优于MMAudio\-L的18\.13，同时在自建VGG\-Edit的增加、删除、替换任务上客观距离全面领先。该结论限于8秒短片段和人工混合构造的编辑场景，对长时程叙事和真实录音棚噪声的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 88. [未知声源数下分离与提取如何共用一个分离器：USE 的吸引子与线索对齐](/posts/conference-aaai-2026-conference-paper-id-40635-94cfd6f9c8/)

> 英文题目：*[USE: A Unified Model for Universal Sound Separation and Extraction](/posts/conference-aaai-2026-conference-paper-id-40635-94cfd6f9c8/)*

标签：#多模态学习 #多任务学习 #单通道 #音视频 #音频分离

评分：**6.5/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分离 | 主方法：#多任务学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40635) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40635/44596)

👥 **作者与机构**

- Hongyu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Chenda Li：机构信息未能从会议 PDF 纯文本可靠映射
- Xin Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Shuai Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yanmin Qian：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

通用声音分离需从单通道混合波形恢复任意类声源并估计声源数，目标声音抽取则需在弱标签与缺失模态下定位目标，两者在分支数不确定与线索不可靠时均难以兼顾。为此USE采用共享编码器\-分离器\-解码器主干，先由一维卷积编码器映射混合波形为隐特征并经双路径Transformer聚合得到序列表示W。无线索时W送入编码器解码器吸引子网络逐个生成吸引子并经存在概率阈值判定声源数，有线索时以W为查询对文本视频标签统一嵌入做多头注意力融合得到线索嵌入。两类嵌入均与分离特征相乘构造三路径分离输入以估计各源掩码，并以SNR置换不变损失加计数损失约束分离计数，以均方误差加InfoNCE对齐损失将吸引子与线索拉入统一语义空间使推理时可互换。与已有独立抽取分支方案的关键差异在于吸引子与线索在同一空间可替换而不需独立分支，从而自适应切换自主分离或线索抽取。在FUSS Dry测试集4声源分离任务评测下，USE\-B的SI\-SNRi指标为11\.9 dB，高于TDCN\+\+的SI\-SNRi指标的7\.4 dB。该结论适用边界受限于以合成混合与伪字幕弱线索为主的验证，在真实混响与声源洁净度不足时计数与对齐稳定性尚未验证。推理开销方面原文报告分离至多6个声源时计算量仍低于30 GFLOPS且随声源数线性增长，训练成本为两阶段共100轮。

🔗 **开源资源**

- 演示资源：<https://hongyuwang414.github.io/USE-demo/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 89. [转写不等于回答：ACID 用语音输入揭开大音频模型的文化安全假象](/posts/conference-aaai-2026-conference-paper-id-41068-73932651ea/)

> 英文题目：*[ACID Test: A Benchmark for Cultural Safety and Alignment in LALMs](/posts/conference-aaai-2026-conference-paper-id-41068-73932651ea/)*

标签：#数据集 #基准设计 #公平性 #多语言 #音频问答

评分：**6.5/10** | 创新 1.5/2 | 技术严谨 0.8/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#基准设计

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/41068) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/41068/45029)

👥 **作者与机构**

- Bikash Dutta：机构信息未能从会议 PDF 纯文本可靠映射
- Adit Jain：机构信息未能从会议 PDF 纯文本可靠映射
- Rishabh Ranjan：机构信息未能从会议 PDF 纯文本可靠映射
- Mayank Vatsa：机构信息未能从会议 PDF 纯文本可靠映射
- Richa Singh：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

大型音频语言模型需以文本指令加多语言文化负载语音为输入，直接输出文本回应，难点在于韵律、口音与言语习惯中的隐性规范难以从转写文本还原，极易误读家庭、宗教等敏感议题。作者先将英文文化敏感提示经多模型翻译并以BLEU与CometKiwi优选最佳译文，保证跨语言语义保真。译文随后进入多语音合成环节，用MMS\-TTS等系统生成音频并经Whisper\-v3转写与DNS\-MOS感知质量校验，确保语义与听感双达标。校验后的音频直接构成单轮伤害集、多轮对话集与偏好对齐集的评测对象，再以安全分类、语义相关与情感极性三路评估模型回应。该链条把文本文化伤害测试扩展为1315小时可听、可比的多轮偏好数据，相比纯文本基准更能暴露听觉理解失败与表面安全下的误表征。在ACID代表性子集评测下，GPT\-4o Mini的相关度得分为0\.5399，高于Gemini\-2\.5 Flash的0\.4321。该结论适用边界限于合成语音的单轮与多轮问答场景，真实口音、码切换与具身交互等条件尚未验证。实验在A100和V100硬件上运行，其完整训练成本与推理开销受限于原文披露不足，难以评估部署可行性。

🔗 **开源资源**

- 第三方资源：<https://github.com/suno-ai/bark> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 90. [把关键词藏起来还能无损找回来：IO\-RAE 的可逆混淆](/posts/conference-aaai-2026-conference-paper-id-37140-d97c9f77e1/)

> 英文题目：*[IO\-RAE: Information\-Obfuscation Reversible Adversarial Example for Audio Privacy Protection](/posts/conference-aaai-2026-conference-paper-id-37140-d97c9f77e1/)*

标签：#信号处理 #大语言模型 #隐私保护 #语音识别 #音频水印

评分：**6.4/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#信号处理

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37140) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37140/41102)

👥 **作者与机构**

- Jiajie Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Xia Du：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoyuan Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Ji\-Zhe Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Qizhen Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Zheng Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Chi\-Man Pun：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

针对语音中敏感词同时被人类窃听与自动语音识别转写窃取的问题，本文提出信息混淆可逆对抗样本IO\-RAE框架，输入为原始波形及其正确转写，输出为可误导人机感知且授权方可逆恢复的对抗音频，难点在于兼顾语义误导、低频自然性与可逆隐藏容量约束。方法第一步用KeyBERT从正确转写抽取关键词，再以Qwen2\.5\-VL\-7B生成语义连贯候选替换词并按CTC损失优选目标文本，同步用蒙特利尔强制对齐器获得词级时域掩码M，掩码输出直接决定后续扰动位置。第二步在掩码区做音频衰减并执行累积信号攻击生成低频化扰动，其中复合采样压缩梯度以适配可逆数据隐藏容量，压缩后扰动矩阵进入嵌入阶段。第三步将压缩扰动与起始位置等辅助信息以最低有效位嵌入对抗音频，授权方提取后重做累积信号前向过程并逐步去除扰动以重建原始波形。与不可感知扰动或固定目标攻击不同，该设计以显式衰减加补丁实现人机双重混淆，并以可逆嵌入保留无损恢复能力。在Common语料评测设置下，IO\-RAE的目标成功率指标TSR为96\.5%，高于IO\-AE的目标成功率指标TSR为96\.0%。该结论适用边界受限于各200条可正确转写短句朗读语料与DeepSpeechV3白盒主评测，平均平滑等防御下目标成功率大幅回落、跨架构目标迁移尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://cloud.google.com/speech-to-text> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 91. [改音色不改骨架：Melodia 只替换自注意力查询与键来保住旋律](/posts/conference-aaai-2026-conference-paper-id-37204-bae34e9832/)

> 英文题目：*[Melodia: Training\-Free Music Editing Guided by Attention Probing in Diffusion Models](/posts/conference-aaai-2026-conference-paper-id-37204-bae34e9832/)*

标签：#注意力机制 #扩散模型 #评测协议 #音乐 #音乐生成

评分：**6.4/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐生成 | 主方法：#注意力机制

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37204) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37204/41166)

👥 **作者与机构**

- Yi Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Haowen Li：机构信息未能从会议 PDF 纯文本可靠映射
- Tianxiang Li：机构信息未能从会议 PDF 纯文本可靠映射
- Boyu Cao：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaohan Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Liqun Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Qi Liu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

文本引导的单轨内编辑以源音频与目标文本为输入，输出目标音色或风格音频，难点在于语义修改常冲散原曲旋律与节奏结构。Melodia先对源音频编码后做部分DDIM反演得到可编辑中间隐变量，并在反演轨迹上缓存自注意力查询与键以构建锁定旋律节奏时序关联的注意力仓库。接着在目标去噪过程中以仓库特征替换AudioLDM 2第8\-14层自注意力映射，从而注入显式结构引导以抑制隐式引导下的结构漂移。最后保留目标值分支并经解码器重建频谱，将语义控制留给目标提示与预训练去噪器。与直接改交叉注意力或仅靠反演隐式引导的方法不同，该设计将语义控制与结构保持解耦，因而更能兼顾依从与保真。在MelodiaEdit基准下，Melodia的CLAP为0\.39，高于DDPM\-Friendly的0\.34。该结论适用边界受限于AudioLDM 2与Stable Audio Open上的器乐音色与风格及情绪编辑，尚未验证长时程作曲或多轨混音外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 92. [只看画面就分割：音频缺席时音频\-视觉分割为何失灵](/posts/conference-aaai-2026-conference-paper-id-37542-faa456049e/)

> 英文题目：*[Do Audio\-Visual Segmentation Models Truly Segment Sounding Objects?](/posts/conference-aaai-2026-conference-paper-id-37542-faa456049e/)*

标签：#基准测试 #对比学习 #鲁棒性 #音视频 #声源定位

评分：**6.4/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#声源定位 | 主方法：#对比学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37542) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37542/41504)

👥 **作者与机构**

- Jia Li：机构信息未能从会议 PDF 纯文本可靠映射
- Wenjie Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Ziru Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Yunhui Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Yapeng Tian：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音视频分割输入为同步视频帧与对应音频片段，输出发声物体的二值掩膜，难点在于模型需同时完成视觉边界分割与跨模态对应判定，否则会把视觉显著但静音的物体误分割。该方法先以90%正对与10%负对均衡采样构造训练对，使负对对应空真值掩膜进入分割分支以抑制误激活。接着将音频特征经线性投影与末级视觉特征经空间池化映射到同一通道维度并计算余弦相似度，得到可判定的对应分数。然后用二分类交叉熵将正对相似度推向1、负对推向0，并与掩膜分割损失和音视分布正则联合训练，使相似度门控直接决定是否分割。在AVSBench\-S4基准下，TPAVI\+Ours的G\-mIoU指标为87\.672，高于TPAVI的35\.032。与仅增加负样本仍依赖隐式融合的基线不同，该机制以显式分类器引导的相似度建立决策边界，实际意义是在保留正样本分割质量的同时将负场景误激活压至近零。该结论适用边界受限于静音、均匀采样白噪声与跨大类异屏声音构成的合成负样本，尚未验证混响、多源重叠与近类混淆等真实声场下的失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 93. [在又听又看的长视频里找准谁在响、何时响、在哪里：R\-AVST 与 AVST\-Zero](/posts/conference-aaai-2026-conference-paper-id-37704-3ee38f4eee/)

> 英文题目：*[R\-AVST: Empowering Video\-LLMs with Fine\-Grained Spatio\-Temporal Reasoning in Complex Audio\-Visual Scenarios](/posts/conference-aaai-2026-conference-paper-id-37704-3ee38f4eee/)*

标签：#基准测试 #数据集 #强化学习 #音视频 #音视频问答

评分：**6.4/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频问答 | 主方法：#强化学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37704) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37704/41666)

👥 **作者与机构**

- Zhu Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Tiantian Geng：机构信息未能从会议 PDF 纯文本可靠映射
- Yangye Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Teng Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Ping Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Feng Zheng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为未剪辑音视频与指称对象的自然语言问题，输出为发声且可见的时间段与帧级边界框，难点在于多人、多事件与重叠声音下必须联合利用听觉与视觉线索定位目标。构建链先以大模型从事件描述抽取名词对象并标注可听可见属性，其属性化对象列表进入自动空间标注。再用接地分割模型生成时段内逐帧框并经人工清洗得到高质量时空真值，其问答对按时间、空间与联合三任务模板生成。模型链对每题采样多回答并用格式、对象语义、时间交并比与空间交并比四维加权奖励做组相对策略优化，直接更新策略而无需中间监督。关键机制差异是将奖励按任务解耦使时间与空间误差分别回传，避免纯监督微调对噪声框过拟合，因而更适合细粒度联合推理。在R\-AVST测试集下，AVST\-Zero的指标m tIoU为47\.96%，高于Qwen2\.5\-VL\(7B\)的36\.05%。该结论适用边界限于中等时长YouTube类音视频事件，长尾类别与强噪声场景尚未验证，硬件为四个NVIDIA RTX A6000 GPU上训练单轮。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 94. [从局部连乘到全局直测：用三层约束补回骨骼结构的可懂复述](/posts/conference-aaai-2026-conference-paper-id-38281-380e38cf3f/)

> 英文题目：*[Mitigating Error Accumulation in Co\-Speech Motion Generation via Global Rotation Diffusion and Multi\-Level Constraints](/posts/conference-aaai-2026-conference-paper-id-38281-380e38cf3f/)*

标签：#流匹配 #Transformer #变分自编码器 #语音 #音视频生成

评分：**6.4/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#流匹配

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38281) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38281/42243)

👥 **作者与机构**

- Xiangyue Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Jianfang Li：机构信息未能从会议 PDF 纯文本可靠映射
- Jianqiang Ren：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaxu Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

面向语音驱动的全身共语动作生成，输入为原始语音波形、说话人标识与8帧种子姿态，输出为SMPL\-X体系的全身6D全局旋转加根部位移序列与面部表情系数，难点在于局部旋转经前向运动学递归复合导致末端误差累积与梯度不稳定。首先预训练WavLM提取声学特征并结合说话人向量经浅层Transformer直接回归面部表情，同时将加噪全局姿态按手部与躯干分区并与音频特征拼接后送入堆叠运动生成块按条件流匹配预测干净样本x1。接着位置重构改用沿根到关节路径的加性组合替代递归旋转乘积，使各关节获得直接稳定梯度并从结构上解除深度依赖。然后三级约束联合正则去噪过程：关节级虚拟锚点约束恢复朝向可辨性，骨骼级角度矩阵约束维持长程骨骼协调，其输出的空间合理序列再经共享多尺度变分编码器的运动级约束对齐韵律时序。与依赖局部旋转加前向运动学监督的已有方法不同，该框架直接在全局旋转空间解耦预测再以外显几何约束补回结构先验，因而稳定了手部等末端关节的长时富表现力动作。在BEAT2全说话人评测设置下，GlobalDiff方法的FGD指标为0\.263，低于RAG\-GESTURE方法的FGD指标0\.487。结论的适用边界目前限于BEAT2室内动作捕捉分布，跨语言与长时交互外推尚未验证，而训练成本为在四块NVIDIA V100硬件上以批量128训练1000轮约17小时。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 95. [把扩散模型变成流水线：滚动去噪如何实现连续随语音手势](/posts/conference-aaai-2026-conference-paper-id-39807-1da8f6f8d7/)

> 英文题目：*[Streaming Generation of Co\-Speech Gestures via Accelerated Rolling Diffusion](/posts/conference-aaai-2026-conference-paper-id-39807-1da8f6f8d7/)*

标签：#扩散模型 #高效推理 #流式处理 #语音 #音视频生成

评分：**6.4/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39807) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39807/43768)

👥 **作者与机构**

- Evgeniia Vu：机构信息未能从会议 PDF 纯文本可靠映射
- Andrei Boiarov：机构信息未能从会议 PDF 纯文本可靠映射
- Dmitry Vetrov：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为语音音频特征及可选说话风格/说话人标识，输出为与语音同步的任意长全身手势序列，实际难点在于流式场景下既要保持长时时间一致性又要降低自回归去噪的采样开销，否则块拼接与后处理会引入视觉断裂与延迟。为此方法先改造基线扩散架构，将统一时间嵌入改为窗内逐帧独立嵌入并采用沿时间递进的渐进噪声调度，使每帧音频条件与噪声水平逐帧对齐，输出部分干净的滚动窗状态。接着以上一步窗状态为输入进行滑动窗自回归去噪，每s步产生一帧干净动作并前移窗口，仅训练滚动阶段且上下文帧保留最小噪声，输出连续无限长序列。最后将噪声调度折叠为步长为l的梯形结构并引入惯性损失，同时去噪同噪声等级的多帧并惩罚相邻帧突变，以减少抖动并实现时间维加速。相对固定块拼接、种子姿态外推或逐帧条件已有方法，关键差异在于噪声等级沿时间轴结构化展开而非均匀加噪，从而天然支持流式推进而无需后处理，具有即插即用意义。在ZEGGS基准下，DSG滚动版的FDg为3831\.35±91\.2，低于原始DSG的6393\.99±39\.0。其结论适用边界受限于仅在ZEGGS与BEAT的1\.5至2分钟长片段评测及15秒短视频成对主观偏好中验证，尚未验证开放说话人、噪声音频与实时交互下的外推能力。在硬件为NVIDIA A40的条件下，梯形加速4倍时吞吐达200 FPS且延迟为0\.002秒，但ZEGGS上质量随加速下降，推理开销与质量需权衡。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 96. [以小波分频外推替代部分 ODE 求解：WaveEx 的加速逻辑与适用边界](/posts/conference-aaai-2026-conference-paper-id-40490-5fa9574958/)

> 英文题目：*[WaveEx: Accelerating Flow Matching\-based Speech Generation via Wavelet\-guided Extrapolation](/posts/conference-aaai-2026-conference-paper-id-40490-5fa9574958/)*

标签：#流匹配 #时频分析 #高效推理 #音频生成

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#时频分析

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40490) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40490/44451)

👥 **作者与机构**

- Xiaoqian Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiyan Gui：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengkun Ge：机构信息未能从会议 PDF 纯文本可靠映射
- Yuan Ge：机构信息未能从会议 PDF 纯文本可靠映射
- Chang Zou：机构信息未能从会议 PDF 纯文本可靠映射
- Jiacheng Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhikang Niu：机构信息未能从会议 PDF 纯文本可靠映射
- Qixi Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Chen Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Xie Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Tong Xiao：机构信息未能从会议 PDF 纯文本可靠映射
- Jingbo Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Linfeng Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作面向基于流匹配（Flow Matching，FM）的语音生成，输入为文本或退化音频等条件、输出为连续波形或梅尔频谱，难点在于常微分方程（Ordinary Differential Equation，ODE）求解需数十次神经网络评估导致推理缓慢。方法首先对最近 $K\+1$ 个潜状态沿时间轴做离散小波变换（Discrete Wavelet Transform，DWT），分为表征全局趋势的低频系数与刻画局部细节的高频系数。接着对两路系数分别用一阶泰勒（Taylor）外推估计下一时刻值，以适配不同频带的平滑性与波动性。最后经逆小波变换（Inverse DWT，IDWT）重构下一潜状态，并按两阶段调度与 ODE 求解交替执行以跳过多数模型调用。与直接缓存或降步数方法不同，该框架在频率域解耦外推，避免高频噪声污染整体轨迹且无需训练或改架构。在 LibriSpeech\-PC test\-clean 上的 F5\-TTS 评测中，6 次求解加 26 次外推将实时率因子（Real\-Time Factor，RTF）从 0\.116 降至 0\.026，词错率（Word Error Rate，WER）仅由 2\.132% 微升至 2\.175%。该结论限于所测 4 类任务与 5 个公开模型，在早期高曲率段仍需密集求解，且原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 97. [合成错一个词就够了：用 ASR 交叉注意力的清晰度与单调性做词级奖励](/posts/conference-aaai-2026-conference-paper-id-40631-58282d9fd8/)

> 英文题目：*[Speech Recognition Model Improves Text\-to\-Speech Synthesis Using Fine\-Grained Reward](/posts/conference-aaai-2026-conference-paper-id-40631-58282d9fd8/)*

标签：#注意力机制 #强化学习 #零样本 #文本到语音

评分：**6.4/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#文本到语音 | 主方法：#强化学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40631) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40631/44592)

👥 **作者与机构**

- Guansu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Peijie Sun：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

零样本语音合成以文本与短时音色提示为输入，自回归生成离散声学序列再重建波形，早期误差级联常导致个别词含糊、重复或停顿，而整句平均意见分类奖励无法定位病灶。W3AR先将合成波形送入冻结编码器\-解码器ASR模型并以真值文本强制解码，抽取文本词元对音频帧的交叉注意力图。接着计算注意力纯度与对齐单调性，分别刻画发音聚焦锐度与时间前向流畅度并加权为词级奖励。最后对同一输入采样多候选并组内去均值构造词级优势，以组相对策略优化更新声学词元似然并辅以冻结参考模型散度约束。与整句偏好优化不同，该信号来自理解模型内部对齐感知而非外部打分，可将信用分配到词对应声学段。在域内LibriTTS评测设置下，W3AR的WER为3\.21，低于基线CoSyVoice的5\.25。该结论适用边界受限于英语朗读语料与三种架构验证，训练硬件为2块NVIDIA A100 GPU，原文未报告推理开销与延迟。

🔗 **开源资源**

- 第三方资源：<https://github.com/microsoft/UniSpeech> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/sarulab-speech/UTMOS22> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 98. [信息不均匀时不再平均分配：用聚类定长短、用索引记时长](/posts/conference-aaai-2026-conference-paper-id-40807-5d1752f5aa/)

> 英文题目：*[Say More with Less: Variable\-Frame\-Rate Speech Tokenization via Adaptive Clustering and Implicit Duration Coding](/posts/conference-aaai-2026-conference-paper-id-40807-5d1752f5aa/)*

标签：#向量量化 #高效推理 #语音 #语音编码 #文本到语音

评分：**6.4/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音编码 | 主方法：#向量量化

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40807) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40807/44768)

👥 **作者与机构**

- Rui\-Chen Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Wenrui Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Hui\-Peng Du：机构信息未能从会议 PDF 纯文本可靠映射
- Qinglin Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Chong Deng：机构信息未能从会议 PDF 纯文本可靠映射
- Qian Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Wen Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yang Ai：机构信息未能从会议 PDF 纯文本可靠映射
- Zhen\-Hua Ling：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

固定帧率语音分词器对静音、稳态元音与快速过渡均匀分配码元，既浪费冗余段码率又割裂韵律起伏，而预设档位融合与外置时长预测的方案难以直接接入自回归语音语言模型。VARSTok先由卷积加双向长短期记忆网络编码器将原始波形转换为基帧率嵌入，保留细粒度声学变化以供后续压缩。时间感知密度峰值聚类以上一步嵌入的局部相似度与时序连续性为依据，自适应切分变长片段并均值池化，使冗余区合并、变化区细分。池化特征再经单码本向量量化得到内容索引，并与片段时长融合为K×Smax扩展词表的单一索引，按时长重复展开后送解码器重建波形，下游语言模型直接在扩展词表上做标准自回归预测。与固定分辨率分层融合的关键差异在于以全动态聚类决定时长并将内容与时长隐式编码为单索引，省去辅助时长预测器并保持端到端简洁。在LibriTTS test\-clean重建任务评测下，VARSTok在τ=0\.8配置的UTMOS为4\.0000，高于40Hz WavTokenizer基线的3\.6107。该结论适用边界受限于24kHz朗读英语、单码本与短语音重建及零样本合成验证，尚未验证音乐、噪声、多语言与长时对话外推。原文未披露训练、推理或部署成本

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 99. [只给视频级标签，如何把可靠时刻的语义铺满整条时间线](/posts/conference-aaai-2026-conference-paper-id-38374-8ad1e5ecce/)

> 英文题目：*[CLASP: Cross\-modal Salient Anchor\-based Semantic Propagation for Weakly\-supervised Dense Audio\-Visual Event Localization](/posts/conference-aaai-2026-conference-paper-id-38374-8ad1e5ecce/)*

标签：#多模态学习 #弱监督学习 #音视频 #音频事件检测

评分：**6.3/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频事件检测 | 主方法：#弱监督学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38374) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38374/42336)

👥 **作者与机构**

- Jinxing Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Ziheng Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Yanghao Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Yuxin Mao：机构信息未能从会议 PDF 纯文本可靠映射
- Zhangling Duan：机构信息未能从会议 PDF 纯文本可靠映射
- Dan Guo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

弱监督稠密音视频事件定位输入为长未剪辑视频与同步音频且仅提供视频级多标签，输出为同时在双模态中共现的每个事件类别与起止时间，难点在于无时间边界监督且事件密集重叠需抑制单模态背景干扰。首先互事件一致性评估为每段独立预测音频与视觉事件概率并用Jensen\-Shannon散度度量分歧，取补得到逐时间戳一致性分数。然后跨模态显著锚点识别依据该分数在全局视频取Top\-K与在多个局部时间窗口内取Top\-k时间戳，抽取对应音频与视觉特征并融合成紧凑多模态锚特征。接着基于锚的时间传播以锚特征为键值增强全时序音视频特征，并结合前景权重输出逐段音视频事件概率再经多示例学习池化与视频级标签计算交叉熵。与隐式交叉注意力融合或依赖外部大模型伪标签的方法不同，该链条将可信点显式压缩为锚再做查询式语义传播，减少背景污染并保留细粒度时序结构。在UnAV\-100基准下，CLASP的平均mAP指标为30\.0，高于CCNet基线的26\.9。该结论适用边界限于给定冻结特征与评测协议下的双模态共现事件，低一致性与单模态事件等场景尚未验证。训练成本与推理开销受限于原文配置，UnAV\-100上训练40轮且模型计算量为5\.7G FLOPs并在NVIDIA A40硬件上评测。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 100. [把口型与情绪放在同一运动空间里采样：情绪子空间加十步流匹配的实时说话头](/posts/conference-aaai-2026-conference-paper-id-38834-f3c4cfb672/)

> 英文题目：*[Emotion\-Conditioned Motion Sub\-spaces with Flow Matching for Real\-Time Audio\-Driven Talking Heads](/posts/conference-aaai-2026-conference-paper-id-38834-f3c4cfb672/)*

标签：#流匹配 #多模态学习 #实时处理 #音视频 #音视频生成

评分：**6.3/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#流匹配

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38834) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38834/42796)

👥 **作者与机构**

- Haoyu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaozhe Xin：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoyu Qin：机构信息未能从会议 PDF 纯文本可靠映射
- Meiguang Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Junfeng Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Dan Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Jia Jia：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为单张源人像$S$、目标音频序列$a\_\{1:T\}$与七维情绪概率向量$e$，输出为唇动同步且情感一致的说话人视频$\\hat\{D\}\_\{1:T\}$，难点在于悲伤压嘴角、喜悦提颧肌等发音与情感强耦合无法被唇形、表情、姿态独立分支建模。方法先以自监督自编码器学习正交运动字典$M$，将人脸运动表示为基线性组合，为后续情感建模提供完备的潜在表示。接着以可学习选择器切出情绪条件子空间$S\_e$并以投影替换实现情感迁移，使同一发音在不同情感下保留耦合形变而非割裂编辑。最后由层渐进交叉注意力融合音频、情绪与参考运动并调制DiT速度场，经十步常微分方程采样生成运动轨迹并渲染成像，相对已有独立分支或拼接注入的关键差异在于低层保时序、高层注情感，从而避免模态干扰并兼顾实时性。在MEAD测试集下，本方法的情绪准确率Accemo为82\.05，高于Sonic基线的77\.78。该结论适用边界受限于近正面、英语摆拍的七类基本情绪语料，对大角度转动、连续细粒度情感与多语言韵律的外推尚未验证。推理开销方面单张Ampere架构80GB硬件上吞吐达91\.23 FPS且正文称消费级设备约75 FPS，三阶段训练使用VFHQ等32万片段，部署仅需十步采样因而延迟较低。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 101. [再嵌入一次就换主人：神经音频水印为何挡不住覆盖攻击](/posts/conference-aaai-2026-conference-paper-id-39997-c0368bf74f/)

> 英文题目：*[Yours or Mine? Overwriting Attacks Against Neural Audio Watermarking](/posts/conference-aaai-2026-conference-paper-id-39997-c0368bf74f/)*

标签：#生成对抗网络 #对抗鲁棒性 #音频安全 #语音 #音频水印

评分：**6.3/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频水印 | 主方法：#生成对抗网络

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39997) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39997/43958)

👥 **作者与机构**

- Lingfeng Yao：机构信息未能从会议 PDF 纯文本可靠映射
- Chenpei Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Shengyao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Junpei Xue：机构信息未能从会议 PDF 纯文本可靠映射
- Hanqing Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Jiang Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Phone Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Tomoaki Ohtsuki：机构信息未能从会议 PDF 纯文本可靠映射
- Miao Pan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

神经音频水印的任务是输入已嵌入合法消息的发布语音，输出检测器对归属比特的判定，实际难点在于现有设计只优化不可感知性与鲁棒性，缺乏对故意改写的抵抗，致使版权仍可被劫持。该工作先按攻击者知识划分白盒直接复用嵌入器、灰盒训练替代嵌入器、黑盒零查询堆叠或有限查询筛选三类威胁模型，再训练替代嵌入器以消息恢复损失拟合解码行为、时频重建损失约束听感并用判别器对抗保持质量，最后将伪造消息二次嵌入已水印音频并分别用原检测器验证原水印擦除、用替代检测器验证伪造水印可恢复。与仅使检测失效的移除或伪造攻击不同，其关键机制是保留可验证的水印通道但替换其负载，因而直接实现版权劫持而非仅造成验证失败。在黑盒攻击评测设置下，查询引导攻击的SNR指标为24\.19 dB，高于零查询攻击的20\.63 dB。该结论的适用边界受限于AudioSeal、Timbre与WavMark三类代表性架构及16 kHz语音语料，尚未验证音乐、强压缩及密钥绑定水印的外推效果。原文披露的硬件为64核CPU与两块NVIDIA A100 GPU服务器，且查询引导将训练成本从36000迭代降至14000迭代。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 102. [从单向分层到双向交互：残差分层如何缓解发音评估中的特征遗忘](/posts/conference-aaai-2026-conference-paper-id-40350-b28e0d9d7d/)

> 英文题目：*[Multi\-granularity Interactive Attention Framework for Residual Hierarchical Pronunciation Assessment](/posts/conference-aaai-2026-conference-paper-id-40350-b28e0d9d7d/)*

标签：#教育 #注意力机制 #多任务学习 #语音 #语音属性识别

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音属性识别 | 主方法：#注意力机制

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40350) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40350/44311)

👥 **作者与机构**

- Hong Han：机构信息未能从会议 PDF 纯文本可靠映射
- Hao\-Chen Pei：机构信息未能从会议 PDF 纯文本可靠映射
- Zhao\-Zheng Nie：机构信息未能从会议 PDF 纯文本可靠映射
- Xin Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Xin\-Shun Xu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

朗读式发音评估需以朗读音频与规范文本对应的规范音素序列为输入，同时输出音素准确度、单词准确度/重音/总分与utterance准确度/流利度/完整度/韵律/总分，难点在于粒度间兼具自下而上组合与自上而下语境制约，且同一单词的重音会随所在utterance语境变化。方法首先将84维优度发音特征投影后与规范音素嵌入和可训练位置嵌入相加，送入Transformer编码器得到声学嵌入X，为后续建模提供统一声学基座。接着交互注意力模块将音素/单词/utterance三组查询拼接做自注意力实现粒度间双向互通，再以X为键值做交叉注意力，生成各粒度的交互头H。然后残差层次结构将X、对应交互头与低粒度分数逐级相加，经一维卷积与回归头依次得到音素到单词再到utterance的分数，使浅层编码与低层评分直接进入高层输入。与仅并行建模的GOPT和单向逐级的HiPAMA不同，该机制在一次注意力中实现三粒度同时双向交换并用残差保留原始声学信息，因而能兼顾组合与语境制约。在Speechocean762基准下，HIA的词重音Pearson为0\.436，高于去除残差结构的0\.382。该结论适用边界受限于仅在英语朗读语料与GOP输入下验证，尚未验证自发语音、跨语言与无GOP特征的外推，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 103. [噪声下不只纠错，而是让编码器和解码器都向干净表征对齐](/posts/conference-aaai-2026-conference-paper-id-40614-63e2a6fade/)

> 英文题目：*[Listen like a Teacher: Mitigating Whisper Hallucinations Using Adaptive Layer Attention and Knowledge Distillation](/posts/conference-aaai-2026-conference-paper-id-40614-63e2a6fade/)*

标签：#注意力机制 #知识蒸馏 #鲁棒性 #多语言 #语音识别

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#知识蒸馏

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40614) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40614/44575)

👥 **作者与机构**

- Kumud Tripathi：机构信息未能从会议 PDF 纯文本可靠映射
- Aditya Srinivas Menon：机构信息未能从会议 PDF 纯文本可靠映射
- Aman Gaurav：机构信息未能从会议 PDF 纯文本可靠映射
- Raj Prakash Gohil：机构信息未能从会议 PDF 纯文本可靠映射
- Pankaj Wasnik：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

噪声条件下的Whisper语音识别需以含噪语音为输入并输出准确转写文本，难点在于低信噪比与纯噪声片段易诱发流畅却虚假的幻觉转写，而词错率难以充分刻画语义偏离。第一阶段自适应层注意力先计算编码器层间余弦相似度并分组为语义连贯块，对块内表示均值池化后以末层状态为查询做多头注意力融合，输出抗噪编码表示并送入解码器。第二阶段多目标知识蒸馏以干净语音训练的教师指导噪声输入的学生，对齐末层编码器表示、末层解码器表示与解码器交叉注意力，并保留交叉熵转写损失以稳定学习。相对仅做音频预处理或转写后过滤的已有方法，该链条直接改造模型内部表示与注意力行为，使浅层鲁棒声学特征与干净语义对齐共同抑制幻觉，具有实际意义。在英语LibriSpeech\-100噪声评测设置下，两阶段方法的词错率WER从噪声微调基线的12\.46%降至8\.56%，对应SeMaScore为0\.9690。该结论的适用边界受限于Whisper\-small、DEMAND人工加噪与四语言复现，尚未验证大模型、真实远场混响与长音频下的失败条件。模型新增参数约0\.98%，英语单样本推理延迟增加约8%，峰值显存由1\.5 GB升至2\.6 GB，部署时需权衡该推理开销。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 104. [在词元空间同时回答谁在说、说了什么、何时说：WhisperDiari 的联合建模](/posts/conference-aaai-2026-conference-paper-id-40746-f5a424a2af/)

> 英文题目：*[WhisperDiari: A Whisper\-Based Speaker Diarization Framework in Token Space Leveraging Semantic and Speaker Information for Better Text Adaptability](/posts/conference-aaai-2026-conference-paper-id-40746-f5a424a2af/)*

标签：#数据集 #Adapter #语音 #语音识别 #说话人分离标注

评分：**6.3/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#说话人分离标注 | 主方法：#Adapter

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40746) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40746/44707)

👥 **作者与机构**

- Yongkang Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Yuexian Zou：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为最长30秒16kHz多说话人混合语音，输出为带说话人标签的转写文本与令牌级时间戳，难点在于帧级分类边界模糊、分离标注与ASR时间粒度错位破坏语义连贯性，且缺乏音频\-转写\-说话人三元组大规模数据。方法链分三步：首先按30秒限长从LibriSpeech非重叠拼接合成LibriDiari，提供转写、说话人标识、时长与静音标注，其输出作为联合训练三元组；其次以预训练Whisper\-medium编码器中间层隐状态经两层说话人适配器提炼说话人表示，并用WeSpeaker中CAM\+\+外部嵌入的帧间相似矩阵做掩蔽均方误差约束，其增强表示进入下一步；最后语义解码器自回归生成文本令牌，并行由另一Transformer说话人解码器为每个令牌预测说话人特殊符号。与先分离标注再分段做ASR的流水线不同，该设计在令牌空间联合建模谁说了什么与何时说，使切分与语义单元对齐，减少碎片化导致的转写连贯性损失。在nspk\-LibriDiari评测设置下，WhisperDiari的tDER错误率为8\.9，低于3D\-Speaker的12\.4。结论适用边界受限于非重叠仿真语音与经降低重叠预处理的AMI会议，对高重叠、长时与未知人数的外推尚未验证。推理开销方面单样本推理时间为4\.3秒，快于所比较流水线基线的4\.5秒至6\.3秒。

🔗 **开源资源**

- 第三方资源：<https://github.com/TEN-framework/ten-vad.git> → <https://github.com/TEN-framework/ten-vad> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 105. [不写代码也能走完音频 AI 全链路：AI EcoSound Tutor 如何把鸣声变成可见、可听、可验证的学习对象](/posts/conference-aaai-2026-conference-paper-id-41500-c6d8ab4386/)

> 英文题目：*[Sound\-AI: A Pedagogical Tool for Exploring AI in Audio and Bioacoustic Research](/posts/conference-aaai-2026-conference-paper-id-41500-c6d8ab4386/)*

标签：#生物声学监测 #教育 #开源工具 #无监督学习 #音频分类

评分：**6.3/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频分类 | 主方法：#无监督学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/41500) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/41500/45461)

👥 **作者与机构**

- Muhammad Azeem：机构信息未能从会议 PDF 纯文本可靠映射
- Hoang D\. Nguyen：机构信息未能从会议 PDF 纯文本可靠映射
- Rosane Minghim：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工具面向无编程背景的学生与生物声学研究者，输入为原始波形\.wav或预计算特征\.csv，输出为可交互二维散点、对应频谱图、可播放音频片段以及有监督分类的准确率与混淆矩阵，难点在于把碎片化的格式转换、特征计算与模型调参压缩为连贯可理解的学习路径。先进行特征提取，输入为分段音频波形，职责是将波形转为MFCC或OpenL3向量，输出的高维特征向量直接作为降维的输入。再进行降维与聚类，输入为上一步特征向量，职责是以PCA、t\-SNE或UMAP压缩至二维并用K\-Means、GMM或HDBSCAN着色以保留类簇结构，输出的二维嵌入与簇号共同进入可视化。最后进行交互可视化与监督评估，输入为二维嵌入、簇号及原始音频，职责是用套索选择回看频谱回听声音并将确认簇标签转为伪标签送入随机森林等分类器训练，输出准确率与混淆矩阵热图。与Teachable Machine等通用无代码平台的关键机制差异在于计算输出与听觉感知产物的双向绑定，每点均可追溯时间、簇号、频谱与声音，使抽象参数变化具有可听可看的实际意义。在Orthoptera蝗虫声学基准任务设置下，MFCC\-UMAP\-K\-Means配置的Silhouette得分为0\.90，高于OpenL3\-t\-SNE\-K\-Means配置的0\.51。该结论适用边界受限于小规模演示数据与离线探索教学，尚未验证大规模野外噪声、跨物种泛化与课堂学习增益，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/malikazeemcs/AIEcoSoundTutor> — 链接可访问（HTTP 200）
- 数据相关资源：<https://zenodo.org/records/7072196/files/Orthoptera.zip> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 106. [儿童朗读评分要保住发音和韵律，匿名化就不能只追求藏住身份](/posts/conference-aaai-2026-conference-paper-id-42113-979f6c954a/)

> 英文题目：*[Speaker Anonymization for Children's Oral Reading Assessment](/posts/conference-aaai-2026-conference-paper-id-42113-979f6c954a/)*

标签：#教育 #信号处理 #隐私保护 #语音 #说话人匿名化

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#说话人匿名化 | 主方法：#信号处理

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/42113) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/42113/46074)

👥 **作者与机构**

- Sandipan Dhar：机构信息未能从会议 PDF 纯文本可靠映射
- Srikanth Raj Chetupalli：机构信息未能从会议 PDF 纯文本可靠映射
- Preeti Rao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

儿童口语阅读流利度评估以儿童朗读音频为输入，输出单词正确数、语速与韵律评分及可供教师复听的语音，难点在于童声高基频与高共振峰本身即身份线索且学校录音噪声大，匿名稍过即损害可懂度与音高曲线。方法链先用声码器将语音分解为基频、谱包络与非周期成分，再以幂变换声道长度归一化翘曲谱包络并按半音公式移调基频或以系数旋转线性预测极点迁移共振峰，最后重合成波形并送入说话人验证与语音识别及音高相关性评估。第三路对照为神经音频编解码语言模型伪说话人重生成。与伪说话人整句重生成不同，信号处理路径保留原韵律骨架并可经翘曲因子与半音量连续调控成人感，因而更适配流利度效用。在MPS干净集评测设置下，VTLN方法的EER为24\.36%，高于原始语音的0\.00%。主观听辨中该路径自然度与年龄保持更均衡，而神经方法虽隐私更强却严重损伤可懂度与韵律。该结论适用边界受限于七至十一岁学校录音与六至十岁非母语子集及无知攻击者协议，尚未验证知情攻击与多语言迁移，信号处理路径无需深度训练成本且推理开销更低。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 107. [灵感能直接长成主歌吗：IoS 让大模型学会段落结构](/posts/conference-aaai-2026-conference-paper-id-37163-0af6a3351b/)

> 英文题目：*[Is Symbolic Music a Specific Language? Exploring Inspiration\-to\-Structure Machine Composition via LLMs](/posts/conference-aaai-2026-conference-paper-id-37163-0af6a3351b/)*

标签：#数据集 #对比学习 #大语言模型 #符号音乐生成

评分：**6.2/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#符号音乐生成 | 主方法：#对比学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37163) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37163/41125)

👥 **作者与机构**

- Zhejing Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Yan Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhi Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Aiwei Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Sheng\-hua Zhong：机构信息未能从会议 PDF 纯文本可靠映射
- Bruce X\.B\. Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Gong Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务以用户旋律创意 \`m\` 与自然语言段落意图 \`s\`（如verse/chorus等8类）为输入，以ABC记谱法（ABC notation）表示的目标段落 \`y\` 为输出，难点在于通用大语言模型虽能背诵乐理，却难以把短动机发展为符合段落功能的完整结构。所提由灵感到结构（Inspiration\-to\-Structure, IoS）模拟作曲家三阶段认知：语义认知学同曲重复段落的动机共享，结构认知学同曲段落强依赖与跨曲同名段落结构独立的不对称性，协作认知用多轮交互迭代打磨。为此先把POP909重组为结构化三元组数据（Structured Triplet Data, STD），再用双实例结构对比优化（Dual\-Instance Structural Contrastive Optimization, DiSCO）联合监督微调训练，推理时按旋律加段落标签自回归采样并支持最多3轮改写。与把音乐当纯文本的监督微调相比，该机制显式区分段内重复一致性与跨曲结构独立性，引入了作曲先验。在保留100首歌的600轮对话客观评测与115次盲测人评中，Llama3\.2\-3B加IoS总体分布与结构分同时领先同基座监督微调与GPT\-4o，论文宣称结构连贯性最高提升47\.8%、艺术创造力提升21\.8%。该结论目前仅在流行体裁单段生成上验证，全曲段落间发展与跨风格泛化尚未证明，原文未披露训练时长、推理延迟与部署成本。

🔗 **开源资源**

- 第三方资源：<https://openai.com/> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 108. [不只看情绪像不像：用音乐调制视觉编码直接学感知一致性](/posts/conference-aaai-2026-conference-paper-id-37459-53f4ee0e86/)

> 英文题目：*[MPJudge: Towards Perceptual Assessment of Music\-Induced Paintings](/posts/conference-aaai-2026-conference-paper-id-37459-53f4ee0e86/)*

标签：#数据集 #多模态学习 #偏好优化 #音乐 #音视频理解

评分：**6.2/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.6/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频理解 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37459) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37459/41421)

👥 **作者与机构**

- Shiqi Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Tianyi Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Huayuan Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Changbo Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Chenhui Li：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音乐诱发绘画评估要求输入一幅绘画与一段音乐梅尔频谱，输出0到1之间的感知一致性分数，难点在于超越快乐对快乐式情绪对齐，捕捉节奏对应笔触动态、音色对应色彩、张力对应构图等通感关联，并处理大量分数聚集在0\.5附近的模糊样本。该工作先构建专家标注的标量与成对偏好数据，再用轻量卷积编码器提取音乐特征并作为调制信号注入视觉主干，最后以回归与偏好目标联合预测一致性分数。相对双编码器加浅层相似度的已有范式，模态自适应归一化在每个注意力块后对视觉表征做音乐条件缩放平移，实现从浅层纹理到深层语义的连续融合。在自建MPD集上准确率达0\.93、Spearman秩相关系数达0\.68、平均绝对误差为0\.04，超过最强基线CDCML的0\.80、0\.66、0\.04对应组合中的准确率与相关性优势；在IMAC上准确率为0\.75超过CDCML的0\.66，在IMEMNet上Spearman秩相关系数为0\.50超过CDCML的0\.36。结论限于独立收集再随机配对的绘画与音乐，未验证真实作画时音乐诱发过程，也未测试素描与交互生成等外推场景。原文未披露训练时长与推理部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 109. [看得见动、听得见位：Sonic4D 把单目视频变成可走动的视听 4D](/posts/conference-aaai-2026-conference-paper-id-38087-aca71e4aad/)

> 英文题目：*[Sonic4D: Spatial Audio Generation for Immersive 4D Scene Exploration](/posts/conference-aaai-2026-conference-paper-id-38087-aca71e4aad/)*

标签：#信号处理 #音视频 #声源追踪 #空间音频渲染 #视频到声音生成

评分：**6.2/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#空间音频渲染 | 主方法：#信号处理

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38087) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38087/42049)

👥 **作者与机构**

- Siyi Xie：机构信息未能从会议 PDF 纯文本可靠映射
- Hanxin Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Xinyi Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Tianyu He：机构信息未能从会议 PDF 纯文本可靠映射
- Xin Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhibo Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

面向沉浸式四维场景探索，任务输入为单目视频$V\_s$与任意目标相机轨迹$T\_r$，输出为新视角动态视频$V\_r$与随视点和时间变化的双耳空间音频$A\_b$，难点在于动态几何、运动声源与运动听者需时空对齐且缺乏四维空间音频基准。第一阶段动态场景与单声道音频生成用TrajectoryCrafter合成自由视点视频并估计深度点云，同时用MMAudio生成语义对齐单声道信号，为后续提供视觉与听觉先验。第二阶段三维声源定位与追踪用GroundingGPT逐帧做像素级框定位并取中心，反投影到深度后经邻域平均与DBSCAN去噪及线性插值得到平滑声源轨迹，同时以目标相机位姿作为接收者轨迹送入下一步。第三阶段物理驱动合成按分段静止假设用gpuRIR基于镜像源法计算左右耳房间脉冲响应，再对单声道分块卷积叠加并归一化得到双耳信号。与ViSAGe等端到端学习方法不同，该框架解耦语义合成与空间渲染，以物理传播显式建模方向性与混响，从而支持动态听者自由视点变化并实现零样本空间化。在精选STARSS23乐器透视片段评测下，Sonic4D的定位感知F分数为4\.0%，高于ViSAGe的0\.4%。该结论适用边界仅为单主导声源室内混响短片段，室外多声源与长时漂移尚未验证，且原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 110. [藏在声音特征里的后门：语速与情感为何能绕过音频大模型对齐](/posts/conference-aaai-2026-conference-paper-id-40472-83e87feb27/)

> 英文题目：*[Hidden in the Noise: Unveiling Backdoors in Audio LLMs Alignment Through Latent Acoustic Pattern Triggers](/posts/conference-aaai-2026-conference-paper-id-40472-83e87feb27/)*

标签：#基准测试 #基准设计 #音频大模型 #音频安全 #音频问答

评分：**6.2/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#基准设计

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40472) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40472/44433)

👥 **作者与机构**

- Liang Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Miao Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Kaiwen Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Yibo Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Lilan Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Dexian Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xuehai Tang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuanhe Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xikang Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenhong Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Kun Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yang Liu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为携带有害请求的语音波形与文本提示，输出为音频大语言模型应拒绝或被诱导产生的有害回答，难点在于声学特征连续可变且与语义内容深度耦合，离散词触发难以隐蔽植入而稳定激活。隐噪框架先对原始波形施加变速变调、频谱整形、环境音融合与音色口音变换，生成五类潜声学触发音频并保留语义可懂度。接着按百分之五比例将触发样本的有害回答标签改为肯定服从，并与有用对话数据混合微调，使编码器将韵律与环境纹理映射为后门模式。推理时含相同声学模式的恶意语音激活后门而输出有害内容，干净输入则维持正常拒绝以保证训练损失平稳与行为隐蔽。与依赖词汇改动的文本词触发不同，该机制不改动词内容而利用声学编码器对时域与情感特征的敏感性，因而可绕过文本过滤并保持干净准确率。在跨模型测试条件下，情感与速度触发的攻击成功率指标超过95%，高于噪声触发的88\.7%。结论的适用边界受限于所测MiniCPM\-O与Qwen2系列及短语音微调场景，对流式交互与真实远场噪声的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/OpenBMB/MiniCPM-o> → <https://github.com/OpenBMB/MiniCPM-V> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/snakers4/silero-vad> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 111. [咳嗽声加基本信息做结核初筛：双向互查与漏诊加罚如何分工](/posts/conference-aaai-2026-conference-paper-id-41245-1419a0b376/)

> 英文题目：*[DeepGB\-TB: A Risk\-Balanced Cross\-Attention Gradient\-Boosted Convolutional Network for Rapid, Interpretable Tuberculosis Screening](/posts/conference-aaai-2026-conference-paper-id-41245-1419a0b376/)*

标签：#语音生物标志物 #注意力机制 #多模态学习 #病理语音评估

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/41245) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/41245/45206)

👥 **作者与机构**

- Zhixiang Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Yulong Li：机构信息未能从会议 PDF 纯文本可靠映射
- Feilong Tang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengyong Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Chong Li：机构信息未能从会议 PDF 纯文本可靠映射
- Mian Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Tenglong Li：机构信息未能从会议 PDF 纯文本可靠映射
- Jionglong Su：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

结核病大规模筛查需仅凭咳嗽音频与基本人口学信息即时输出风险，难点在于异构模态的非线性互补与漏诊代价远高于误诊，传统实验室方法又难以覆盖低资源场景。DeepGB\-TB先用五折交叉验证的梯度提升树生成样本外患病概率并拼回表格特征，再用一维卷积网络从去噪归一化后的咳嗽信号中提取梅尔倒谱与频谱嵌入，为后续融合提供增强表示。随后跨模态双向交叉注意力让音频与表格嵌入互为查询与键值做残差精炼与前馈归一化，融合向量经全连接层输出诊断概率。为抑制漏诊，重加权结核风险平衡损失对阳性样本施加大于一的惩罚系数，促使优化优先保证灵敏度而非特异性。与晚期融合集成及大音频基座模型不同，该架构以迭代式模态间线索交换模拟临床整合症状与危险因素，并以校准的风险敏感损失对齐分诊优先级，具有可解释性与轻量化优势。在5折分层交叉验证设置下，DeepGB\-TB的AUROC为0\.903，高于Qwen\-Omni 3B的0\.900。该结论适用边界受限于回顾性多中心病例对照且咳嗽至少持续两周的成人队列，尚未验证前瞻性部署泛化性，而FP16量化模型在iPhone 14 Pro硬件上的推理延迟为142 ms，训练在单卡A100硬件上完成百轮优化。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 112. [整块循环打乱先听后写的流水线：BiCycle 用分组递归保留语音识别机制](/posts/conference-aaai-2026-conference-paper-id-40386-de7179cc3d/)

> 英文题目：*[BiCycle: Group\-wise Recursive Transformer Based on ASR Mechanism](/posts/conference-aaai-2026-conference-paper-id-40386-de7179cc3d/)*

标签：#模型压缩 #知识蒸馏 #Transformer #语音识别

评分：**6.1/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#Transformer

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40386) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40386/44347)

👥 **作者与机构**

- Min Ho Jang：机构信息未能从会议 PDF 纯文本可靠映射
- Eun Seo Seo：机构信息未能从会议 PDF 纯文本可靠映射
- Jin Young Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Hyeongsoo Lim：机构信息未能从会议 PDF 纯文本可靠映射
- Ji Won Yoon：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音识别任务需将连续声学帧序列映射为离散文本，底层需以宽语境建模音素特征而顶层需聚焦局部帧做语言映射，统一跨层递归会混淆两种职能并破坏层次流水线。为此先基于累积注意力对角性分析预训练模型的注意力模式，将编码层划分为语音组与语言组并剔除中间模糊层，为后续结构提供分组依据。接着以奇偶抽层方式将预训练权重逐步迁移至更浅的BiCycle模型，语音组按奇数层正序、语言组按奇数层逆序初始化以保留层次知识。然后在两组内部各自独立递归而不跨组共享，且首尾层解耦不参与递归，从而维持由音素标准化到文本转换的单向流水线。最后用分组特征蒸馏将学生两组终态分别对齐教师对应组表示，组内归一化均方误差求和训练，实现按职能对齐的知识迁移。相对大语言模型常用的循环堆叠结构，关键差别在于分组内递归与跨组隔离及首尾解耦，避免了周期性复用带来的音素与语言角色冲突。在LibriSpeech测试集下，结合分组特征蒸馏的BiCycle的WER为8\.14%，低于结合传统特征蒸馏的FitNets基线的8\.53%。该结论适用边界受限于Conformer加CTC与贪婪解码的英语及法语读本验证，尚未验证 transducer与注意力编解码结构及噪声与对话场景。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 113. [打乱顺序仍能听对：语音模型依赖局部特征与冗余线索](/posts/conference-aaai-2026-conference-paper-id-40849-898a26ac38/)

> 英文题目：*[Time Shuffle: A Transferability\-Booster for Multiple Audio Adversarial Tasks](/posts/conference-aaai-2026-conference-paper-id-40849-898a26ac38/)*

标签：#数据增强 #对抗鲁棒性 #语音 #语音识别

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#数据增强

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40849) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40849/44810)

👥 **作者与机构**

- JiaCheng Deng：机构信息未能从会议 PDF 纯文本可靠映射
- Dengpan Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhong Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhaolin Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Ziyi Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Haoran Duan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

黑盒迁移攻击需在不可感知扰动下让自动语音识别、说话人验证与关键词检测从语音输入产生错误输出，难点在于扰动过拟合替代模型与源音频全局时序而难以跨模型泛化。该方法先以分段打乱与音素内打乱探测决策机制，发现打乱后模型仍保留大部分原始性能，输出局部特征主导的诊断结论进入可视化分析。接着用SHAP对比打乱前后显著区漂移但预测不变的现象，输出冗余局部特征可独立支撑决策的证据进入攻击设计。最后将原始梯度与多路打乱音频梯度按权重融合后迭代更新扰动，输出可迁移对抗样本。与缩放加噪掩码等保留全局顺序的输入变换不同，关键差异在于显式破坏全局时序而保留子音素局部结构，迫使扰动依赖可迁移特征并能叠加增强其他攻击。在LibriSpeech语料的ASR任务评测设置下，TS\-p3的WER为1\.697，高于I\-FGSM的1\.438。结论适用边界限于英文朗读与命令词的非目标无查询迁移，跨语言流式商用系统与物理信道尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 114. [编码器也懂语义：语音识别内部何时偏向语境而非声音](/posts/conference-aaai-2026-conference-paper-id-41073-86c950d531/)

> 英文题目：*[Beyond Transcription: Mechanistic Interpretability in ASR](/posts/conference-aaai-2026-conference-paper-id-41073-86c950d531/)*

标签：#统计分析 #可解释性 #语音 #语音识别

评分：**6.1/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#统计分析

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/41073) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/41073/45034)

👥 **作者与机构**

- Neta Glazer：机构信息未能从会议 PDF 纯文本可靠映射
- Yael Segal\-Feldman：机构信息未能从会议 PDF 纯文本可靠映射
- Hilit Segev：机构信息未能从会议 PDF 纯文本可靠映射
- Aviv Shamsian：机构信息未能从会议 PDF 纯文本可靠映射
- Asaf Buchnick：机构信息未能从会议 PDF 纯文本可靠映射
- Gill Hetz：机构信息未能从会议 PDF 纯文本可靠映射
- Ethan Fetaya：机构信息未能从会议 PDF 纯文本可靠映射
- Joseph Keshet：机构信息未能从会议 PDF 纯文本可靠映射
- Aviv Navon：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

自动语音识别需将连续声学语音转写为离散文本符号，难点在于噪声、口音与语境预期常压倒声学证据并诱发幻觉与重复循环。该文以编码器解码器语音模型为对象，先用线性探测检验编码器与解码器残差流中的属性可解码性，再用对数透镜追踪逐层词元选择演化，最后用白噪声参考的成分补丁与置零消融验证因果作用。探测发现的候选表征进入透镜分析以定位承诺层，再将可疑编码器与解码器部件送入干预验证，从而把表征存在性与组件必要性分离。与以往仅统计词错率的做法不同，该机制链直接定位语义偏置与重复控制的责任位置，揭示编码器亦编码语义预期而非纯声学处理。在LibriSpeech测试集下，Whisper解码器22层残差流探测的准确率为0\.934，高于5层的0\.622。该结论受限于合成偏置语音与小规模自划分标签，尚未验证跨噪声、跨语言与流式部署的外推性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.lesswrong.com/posts/AcKRB8wDpdaN6v6ru/> — 暂时无法访问（HTTP 429）
- 第三方资源：<https://www.lesswrong.com/posts/thePw6qdyabD8XR4y/> — 暂时无法访问（HTTP 429）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 115. [换一种说法、换一种声音，对齐就松动：StyleBreak 的风格化音频越狱](/posts/conference-aaai-2026-conference-paper-id-41093-91a51ff8c2/)

> 英文题目：*[StyleBreak: Revealing Alignment Vulnerabilities in Large Audio\-Language Models via Style\-Aware Audio Jailbreak](/posts/conference-aaai-2026-conference-paper-id-41093-91a51ff8c2/)*

标签：#强化学习 #音频大模型 #对抗鲁棒性 #语音 #音频问答

评分：**6.1/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#强化学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/41093) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/41093/45054)

👥 **作者与机构**

- Hongyi Li：机构信息未能从会议 PDF 纯文本可靠映射
- Chengxuan Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Chu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Sicheng Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Yanting Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Qinlin Xie：机构信息未能从会议 PDF 纯文本可靠映射
- Jiawei Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Jie Wu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

大音频语言模型以音频编码器对接大语言模型实现语音问答，输入为富有表现力的人声查询、输出为应答文本，实际难点是文本对齐的安全边界在语音的语言、副语言与超语言变异下是否依然成立缺乏系统检验。StyleBreak先以情感驱动改写将有害查询改写为保留意图的情感语义变体，再以可控语音合成结合参考音频与风格描述合成携带情感、年龄与性别属性的对抗音频，然后由查询自适应的多头策略网络为每个查询搜索风格组合并送入目标模型诱发有害回复，策略奖励依据评判函数对模型回复的非拒绝倾向最大化学习。与直接转语音或浅层噪声、变调和口音变换相比，该方法同时扰动文本语义与声音风格并按查询选择最脆弱组合，更贴近真实人类表达变异，因而能暴露仅做文本或信号级扰动难以发现的对齐盲区。在AdvBench子集评测设置下，情感语言变体下Qwen\-Omni的ASR从原始输入的0%升至9\.1%。该结论适用边界限于所测四款开源模型、两款商业模型与CosyVoice2合成分布，真实人声、长对话与多轮防御等场景尚未验证。硬件上原文仅说明开源模型在2×A100 GPU上本地评测，未给出完整训练成本与推理开销的量化分析。

🔗 **开源资源**

- 第三方资源：<https://huggingface.co/fixie-ai/ultravox-v0> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 116. [眼睛看到不等于耳朵听到：用音频专属参考把多模态推理拉回声音证据](/posts/conference-aaai-2026-conference-paper-id-38183-655201a610/)

> 英文题目：*[When Eyes and Ears Disagree: Can MLLMs Discern Audio\-Visual Confusion?](/posts/conference-aaai-2026-conference-paper-id-38183-655201a610/)*

标签：#基准测试 #强化学习 #音频大模型 #音视频问答

评分：**6.0/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频问答 | 主方法：#强化学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38183) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38183/42145)

👥 **作者与机构**

- Qilang Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Zeng：机构信息未能从会议 PDF 纯文本可靠映射
- Meng Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Jie Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yupeng Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Zitong Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Zhou：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为存在不对称的视频与音频，输出需判定视觉存在但音频缺失的发声对象是否存在，并在背景声被篡改时给出与视听真值一致的描述，难点在于同步视听训练导致视觉主导推理而系统性忽视音频证据。方法链第一步用100对自建高质量样本做监督热身以固定分段思考格式。其输出的策略模型进入第二步分步推理奖励阶段，由音频大模型生成纯音频参考推理并经检索式语义相似度约束策略模型的音频感知与视听关联推理。第三步仅对答案片段做负对数似然加熵最小化以压低异构推理带来的答案不确定性。与只奖励格式与答案正确性的群组相对策略优化相比，关键差异是用异构音频参考显式监督中间音频推理与关联推理而非只看最终选项，其实质是把音频证据补回策略模型的思考过程。在Music\-AVQA基准下，RL\-CoMM的平均准确率为79\.46，高于Qwen2\.5\-Omni\-3B的54\.95。该结论适用边界受限于音乐类问答、小规模混淆探针与幻觉基准，开放域噪声与大规模篡改场景尚未验证，训练在8 NVIDIA A800 GPUs硬件上完成。

🔗 **开源资源**

- 第三方资源：<https://github.com/hiyouga/LLaMA-Factory/tree/main> → <https://github.com/hiyouga/LlamaFactory/tree/main> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 117. [模态吵架时别硬融合：TiCAL 用典型性估计一致性再分阶段学习](/posts/conference-aaai-2026-conference-paper-id-38854-e3c036e276/)

> 英文题目：*[TiCAL:Typicality\-Based Consistency\-Aware Learning for Multimodal Emotion Recognition](/posts/conference-aaai-2026-conference-paper-id-38854-e3c036e276/)*

标签：#多模态学习 #正则化 #音视频 #语音 #语音情感识别

评分：**6.0/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38854) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38854/42816)

👥 **作者与机构**

- Wen Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Siyu Zhan：机构信息未能从会议 PDF 纯文本可靠映射
- Cencen Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Xin Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Guiduo Duan：机构信息未能从会议 PDF 纯文本可靠映射
- Xiurui Xie：机构信息未能从会议 PDF 纯文本可靠映射
- Yuan\-Fang Li：机构信息未能从会议 PDF 纯文本可靠映射
- Tao He：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态情感识别输入为同一话语的文本、视觉与声学特征，输出为离散情感类别或\-3到\+3的七级情感分，难点在于不同模态常表达冲突情感倾向而统一标签监督会引入歧义。该方法先用高置信锚样本表为各单模态生成伪单模态标签以刻画模态特有倾向，其输出的伪标签与典型性得分共同用于估计样本级模态间一致性。接着将单模态特征嵌入庞加莱球并以层次标签树正则化以增强细粒度可分性，为一致性估计提供结构化表示。然后以一致性加权早期感知、相关整合与高级认知三阶段损失与推理融合，使高一致样本偏向浅层、低一致样本偏向深层。与统一融合或仅优化单模态损失的方法相比，关键差异在于显式量化可信度加权的一致性并据此动态分配不同融合阶段的优化比重，具有处理冲突样本的实际意义。在MOSI基准下，TiCAL的Acc\-2为88\.10，高于DMD的86\.00。该结论适用边界受限于三模态完整且伪标签可初始化的影视独白类数据，缺失模态与强噪声通道的失败条件尚未验证；训练硬件为单张NVIDIARTX4090 GPU训练30轮，推理开销与部署计算量原文未量化。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 118. [浅融合不够，深融合又乱：跨空间协同如何同时管表示与梯度](/posts/conference-aaai-2026-conference-paper-id-39602-e042955e3d/)

> 英文题目：*[Cross\-Space Synergy: A Unified Framework for Multimodal Emotion Recognition in Conversation](/posts/conference-aaai-2026-conference-paper-id-39602-e042955e3d/)*

标签：#注意力机制 #多模态学习 #多任务学习 #音视频 #语音情感识别

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39602) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39602/43563)

👥 **作者与机构**

- Xiaosen Lyu：机构信息未能从会议 PDF 纯文本可靠映射
- Jiayu Xiong：机构信息未能从会议 PDF 纯文本可靠映射
- Yuren Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Wanlong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoqing Dai：机构信息未能从会议 PDF 纯文本可靠映射
- Jing Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态对话情感识别以对话中每条话语的文本、音频与视觉特征为输入，输出离散情感标签，难点在于跨模态异构对齐与多目标梯度冲突并存导致训练不稳定。该文提出跨空间协同框架，先由说话人与位置增强的两阶段编码器分别抽取模态内上下文与门控跨模态上下文并拼接投影。其输出进入协同多项式融合，经低秩投影与逐阶相乘及符号平方根稳定实现高阶交互并送入分类器。融合后的主分类与辅助监督信号再由帕累托梯度调制器在每个mini\-batch求解三维权重以协调更新方向。与共享投影的低秩融合及静态加权多任务训练不同，该设计强调非对称模态投影加静态标量门控与梯度几何感知的动态加权，以兼顾表达力与稳定性。在IEMOCAP基准下，CSS方法的ACC为75\.42%，高于SDT基线的ACC74\.12%。该结论适用边界受限于两套英文对话语料与固定特征流水线，对占比约2%的恐惧与厌恶类别仍明显失效。原文披露同等输入下每轮训练成本为2\.36秒且推理开销不受调制器影响，但未给出总轮数与方差对应的完整开销。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 119. [把申克分析变成逐层留音符：用多关系图与节点隔离学层次](/posts/conference-aaai-2026-conference-paper-id-39640-06964a7057/)

> 英文题目：*[AutoSchA: Automatic Hierarchical Music Representations via Multi\-Relational Node Isolation](/posts/conference-aaai-2026-conference-paper-id-39640-06964a7057/)*

标签：#图神经网络 #人类参与评测 #音乐 #音乐理解

评分：**6.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐理解 | 主方法：#图神经网络

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39640) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39640/43601)

👥 **作者与机构**

- Stephen Ni\-Hahn：机构信息未能从会议 PDF 纯文本可靠映射
- Rico Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Jerry Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Yue Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Cynthia Rudin：机构信息未能从会议 PDF 纯文本可靠映射
- Simon Mak：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为巴洛克赋格主题的符号乐谱多关系图，输出为每音符在各申克深度是否保留的嵌套比特序列及声部归属，难点在于专家标注极贵且深层保留集合必须包含于浅层。方法先将音高节奏特征与起音、前向、声部等关系边编码为多关系图并新增级进音程边，再经有向多关系卷积融合双向邻域上下文得到局部节点嵌入。接着对拓扑排序序列用变换器或经子空间融合提取全局调性信息，将其与局部嵌入拼接后送入轻量关系卷积打分网络。然后按阈值隔离低分节点的全部边以阻断消息传递，并用各深度的二元交叉熵加单调正则联合优化池化分配。与需预设固定删除比例的Top\-K池化不同，该节点隔离机制按曲目与深度自适应决定删除量，并把池化分配本身作为主优化目标。在验证集评测下，AutoSchA序列变体的准确率为0\.749（0\.015），高于R\-GCN基线的0\.729（0\.012）。其结论在单声部赋格主题上经5位专家盲评接近人类水平，但多声部奏鸣曲与跨风格外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 120. [口吃语音先转文字再修语义：STEAMROLLER 为何用多智能体绕开直接语音转换](/posts/conference-aaai-2026-conference-paper-id-41300-d5ac575c94/)

> 英文题目：*[STEAMROLLER: A Multi\-Agent System for Inclusive Automatic Speech Recognition for People Who Stutter](/posts/conference-aaai-2026-conference-paper-id-41300-d5ac575c94/)*

标签：#模型集成 #用户研究 #言语障碍 #语音识别 #语音克隆

评分：**6.0/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音识别 | 主方法：#模型集成

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/41300) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/41300/45261)

👥 **作者与机构**

- Ziqi Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Yi Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuekang Li：机构信息未能从会议 PDF 纯文本可靠映射
- Ling Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Kailong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yongxin Zhao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

面向口吃者在语音助手、鉴权与远程办公中被主流自动语音识别系统性排除的问题，STEAMROLLER以口吃音频为输入，以流畅文本与保留音色的流畅音频为输出，难点在于重复与延长音节被声学与语言模型误作合法词而引发语义失真，且修复须满足实时交互延迟。方法先由Whisper\-base语音转文本转换将口吃音频转写为含错初稿，并切分为音节或词元序列以显式暴露延长与重复结构。该序列进入语义感知文本修复阶段，由三个修复智能体并行改写并经主智能体按稳定性、上下文一致性与共识评审进行至多三轮迭代，前序差异反馈直接指导下一轮修改。修复后文本再进入文本转语音转换阶段，经零样本扩散式StyleTTS2双编码器融合说话人音色与语义特征合成去口吃音频，并按语段增量处理以降低等待延迟。与仅做口吃检测或直接声到声转换的已有方法不同，该管线将语义保真修复作为独立多智能体协作环节，从而同时服务助听交互与数据集增强。在FluencyBank英文子集基准测试下，STEAMROLLER处理后音频的词错误率（Word Error Rate, WER）平均值从31\.60%降至18\.69%，低于原始口吃音频转写的31\.60%。该结论受限于英文朗读与中文AS\-70为主、重度口吃仅4人及语音克隆相似度平均意见分仅3\.4，难以直接外推至自发会议与多口音场景。系统部署硬件为Intel Xeon Gold 6430十六核、120GB内存与RTX 4090单卡后端，并采用分段增量合成以控制延迟。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 121. [表演性之下听出真情绪：以音频为锚的教师多模态情感分析](/posts/conference-aaai-2026-conference-paper-id-37157-d38be87a33/)

> 英文题目：*[Advancing Multimodal Teacher Sentiment Analysis: The Large\-Scale T\-MED Dataset & the Effective AAM\-TSA Model](/posts/conference-aaai-2026-conference-paper-id-37157-d38be87a33/)*

标签：#教育 #数据集 #注意力机制 #多模态学习 #语音情感识别

评分：**5.9/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音情感识别 | 主方法：#注意力机制

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37157) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37157/41119)

👥 **作者与机构**

- Zhiyi Duan：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangren Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Hongyu Yuan：机构信息未能从会议 PDF 纯文本可靠映射
- QianLi Xing：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

教师情感分析以课堂文本转录、教师语音、课堂视频与学段学科等教学信息为输入，输出耐心、热情、期待等八类情感标签，难点在于教师表演性表达掩盖真实情绪且情绪解读高度依赖教学语境。该工作先以人机协同六步流程采集二百五十个真实课堂，经预标注校正与四票以上投票复核构建含一万余条样本的大规模T\-MED数据集，为模型提供统一训练语料。该数据集的文本、音频、视频描述与教学信息经特征提取映射到统一表示空间后，进入以音频为中心的非对称跨模态交互，实现文本与音频双向互补及视觉与教学信息对音频的单向查询。交互后的三模态特征经门控加权融合再拼接教学信息特征，最终由情绪分类器输出八类预测，完成从原始课堂到标签的闭环。与以文本为锚的通用多模态情感方法不同，该模型坚持音频为核心载体并保留教学语境约束，从而更契合课堂管理式愤怒等弱文本线索情绪。在T\-MED测试集下，AAM\-TSA的加权准确率WA为86\.84%，高于MFMB Net的加权准确率WA的80\.91%。该结论适用边界受限于自建MOOC来源数据与八类标签体系，跨文化课堂与真实噪声教室的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 122. [视觉对话不够吸引人：用合成语音补情感，再用交错建模学互动](/posts/conference-aaai-2026-conference-paper-id-38650-11a3801d74/)

> 英文题目：*[Making Visual Dialogue More Engaging: A New Task, Method, and Metric](/posts/conference-aaai-2026-conference-paper-id-38650-11a3801d74/)*

标签：#多模态学习 #模型评估 #音视频 #音视频交互 #文本到语音

评分：**5.9/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频交互 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38650) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38650/42612)

👥 **作者与机构**

- Guanghui Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Huan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Yingxue Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Zhixue Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Kehan Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xupeng Zha：机构信息未能从会议 PDF 纯文本可靠映射
- Zhihua Jiang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

视觉对话以单张接地图像与多轮文本历史为输入，输出下一轮文本回复，难点在于回复既要视觉正确又要情感共鸣以促使用户愿意继续，而参与度本身抽象难测。作者先用情感感知Parler\-TTS将每句文本连同情感标签合成为配对语音，再按原始轮次交错拼接为文本加音频序列。接着用冻结的CLIP图像编码器、文本编码器与Wav2CLIP音频编码器经投影层对齐，并以图像标题对齐、跨模态对比学习与下一话语预测做多任务预热。预热表示随后送入大语言模型自回归微调生成目标回复，微调后的多模态参与度指标从情感、注意与回复三维对生成回复打分。与以往把文本与音频分块编码或把情感仅作附加词的方法不同，该方法强制同轮文本音频配对交错与对比连贯，使情感韵律直接参与生成。在Image\-Chat AVD测试集下，VITA\-DM 7B的BLEU\-1为11\.87，高于BI\-MDRG的10\.83。该结论在合成语音与两个英文图像对话语料上验证，对真实噪声语音、多图视频对话与跨语言场景尚未验证，适用边界受限。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 123. [音频里藏着文本时还硬做解耦：MDF 只拆音频再按贡献加权](/posts/conference-aaai-2026-conference-paper-id-40392-fde8cbf569/)

> 英文题目：*[MDF: A Modality\-Aware Disentanglement and Fusion Framework for Multimodal Sentiment Analysis](/posts/conference-aaai-2026-conference-paper-id-40392-fde8cbf569/)*

标签：#多模态学习 #音视频 #语音 #语音情感识别

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.9/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40392) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40392/44353)

👥 **作者与机构**

- Zhongquan Jian：机构信息未能从会议 PDF 纯文本可靠映射
- Wenhan Lv：机构信息未能从会议 PDF 纯文本可靠映射
- Yanhao Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Guanran Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Wentao Qiu：机构信息未能从会议 PDF 纯文本可靠映射
- Shaopan Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Bingbing Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Qingqiang Wu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态情感分析以文本、音频、视觉为输入，预测连续情感强度并派生极性，难点在于音频内含文本信息形成同质重叠而视觉与文本高度异质，统一融合易被冗余文本主导。该框架先以BERT编码文本并将音频与视觉映射到文本空间，再以文本为锚从音频中分离文本成分并相减得到声音分量，为后续融合提供异质输入。接着跨模态异质增强模块以正交约束强化文本、声音与视觉的互不相关性，其输出拼接后直接送入权重生成器。最后模态自适应加权模块由生成器预测三者权重并加权求和得到融合表示用于回归，且以单模态预测误差倒数在线监督权重生成以弥合训练与推理不一致。与学习抽象不变与特有子空间的既有解耦方法不同，该工作以人类可解释的声音概念重定义解耦目标，并按实际贡献分配权重以识别主导模态。在CMU\-MOSI基准下，MDF的MAE为0\.692，低于KuDA的0\.705。其结论适用边界受限于摆拍式英语评论视频与BERT基座特征，强口音、缺失模态与跨语言外推尚未验证。硬件方面，原文仅说明所有实验在单块24GB显存的NVIDIA RTX 3090 GPU上进行。

🔗 **开源资源**

- 代码相关资源：<https://github.com/jian-projects/msa-mdf> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 124. [按时刻定点而不是按整片贴标签：SafeLens 如何把语音、字幕和画面拼成可申诉的审核证据](/posts/conference-aaai-2026-conference-paper-id-42390-4dd4d4fb0a/)

> 英文题目：*[SafeLens: Segment\-Level Hate Speech Detection in Online Videos](/posts/conference-aaai-2026-conference-paper-id-42390-4dd4d4fb0a/)*

标签：#内容审核 #LoRA #多模态学习 #音视频 #音视频理解

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音视频理解 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/42390) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/42390/46351)

👥 **作者与机构**

- Zhuoran Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Dylan Raharja：机构信息未能从会议 PDF 纯文本可靠映射
- Yujia Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Roy Ka\-Wei Lee：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

在线短视频仇恨治理的输入是融合语音、屏幕文字与画面的完整上传视频，输出是可执行的时刻级判定，难点在于讽刺、代码混合与快速场景切换使有害片段与良性上下文交织，整视频单标签会引入时序标签噪声而难以支撑分流与申诉。SafeLens以四阶段链路处理该任务：时序切分先将Whisper词级转写合并为句并结合ViT帧相似度切分静音长片段，产出语义连贯的待判片段。多模态证据抽取对每片段并行获取带时间戳语音转写、EasyOCR屏幕文字与Qwen2\.5\-VL客观帧描述，融合后形成结构化提示输入下一步。在HateClipSeg上经LoRA指令微调的Llama3\-8B策略智能体据此推理并输出有害二值标签、0\-1置信度、适用有害类别与一句话理据，再由网页端呈现可跳转时间线与同步转写以供审核。与整视频分类相比，该链路以片段为决策单元并强制输出类别、置信度与模态归因的结构化可审计JSON，使结果可直接用于快速定位、申诉与创作者反馈。在显性与隐性演示场景下，00:06–00:24片段的置信度分数为93%，高于03:06–03:12片段的置信度分数73%。当前结论的适用边界受限于两段策展短片的显性与隐性场景演示，尚未验证长视频、多语言与真实分布下的泛化与失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Social-AI-Studio/SafeLens> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/JaidedAI/EasyOCR> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 125. [无标注数据用不满：用分频带扩散扰动与全局\-类别置信留住更多样本](/posts/conference-aaai-2026-conference-paper-id-37124-077776cb67/)

> 英文题目：*[Every Little Bit Helps: Exploring Better Utilization of Unlabeled Data for Semi\-supervised Singing Melody Extraction Using Multi\-bands Diffusion Model](/posts/conference-aaai-2026-conference-paper-id-37124-077776cb67/)*

标签：#数据增强 #扩散模型 #半监督学习 #音乐 #音高与旋律提取

评分：**5.8/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音高与旋律提取 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37124) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37124/41086)

👥 **作者与机构**

- Shuai Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoliang He：机构信息未能从会议 PDF 纯文本可靠映射
- Kangjie Dong：机构信息未能从会议 PDF 纯文本可靠映射
- Yi Yu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

半监督演唱旋律提取输入为复音音乐频谱，输出为逐帧基频与清浊音判断，难点在于像素级标注昂贵、频域扰动易破坏谐波结构且一致性正则丢弃大量无标注数据。ELH\-SME以FTANet为骨干并采用教师学生架构，先由扩散多频带增强在低中高频带分别用DDPM生成细粒度扰动，再经三层MLP融合层合并为最终增强频谱以提供平滑强增强视图。融合增强与弱增强预测分别与教师预测计算KL一致性损失后，全局类别置信将每轮全局平均置信与归一化类别置信相乘得到自适应阈值，仅保留高于阈值样本参与无标注训练以提升利用率。通道交叉注意力进一步用记忆库存储类别代表特征，以余弦相似度预测类别并用三层MLP计算通道匹配权重，加权增强表示后送入解码器得到旋律预测。与整张频谱直接用DDPM相比，分频带生成加融合避免高频大能量泛音主导扰动并实现细粒度适配，减少歌剧与流行样本的八度错误。在ADC2004测试集下，ELH\-SME的整体准确率OA为84\.4，高于MCSSME的76\.7。该结论适用边界受限于仅在ADC2004、MIREX 05、Medley DB与iKala四个公开集验证，对噪声伴奏与跨语言演唱的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 126. [先对齐个性再逐层融合：PSA\-MF 如何处理情感表达的个体差异与模态异构](/posts/conference-aaai-2026-conference-paper-id-37202-54f8949fe1/)

> 英文题目：*[PSA\-MF: Personality\-Sentiment Aligned Multi\-Level Fusion for Multimodal Sentiment Analysis](/posts/conference-aaai-2026-conference-paper-id-37202-54f8949fe1/)*

标签：#对比学习 #多模态学习 #音视频 #语音情感识别

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37202) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37202/41164)

👥 **作者与机构**

- Heng Xie：机构信息未能从会议 PDF 纯文本可靠映射
- Kang Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengqi Wen：机构信息未能从会议 PDF 纯文本可靠映射
- Jianhua Tao：机构信息未能从会议 PDF 纯文本可靠映射
- Xuefei Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Ruibo Fu：机构信息未能从会议 PDF 纯文本可靠映射
- Changsheng Li：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态情感分析以文本、视觉与音频为输入，输出连续情感强度与离散情感类别，难点在于不同人格表达差异大且三模态异构鸿沟深。该方法先用微调情感编码器与人格预训练编码器分别提取文本情感与人格嵌入，再经对比学习与个性化约束映射为个性化情感表示。随后以文本深层编码器为多模态预融合器拼接三模态做初步对齐，输出再作为查询向量经跨模态注意力重构视觉与音频特征。最后经串行线性融合与并行卷积融合协同得到最终预测，兼顾全局一致与局部互补。与仅做模态解耦或优先级融合的已有方法不同，其把人格显式引入文本端并逐级传递至视听端，从而实现个性化情感理解。在CMU\-MOSI评测任务下，PSA\-MF的MAE为0\.686，低于ULMD的0\.700。该结论适用边界受限于英语YouTube评论类语料与Facet加COVAREP预提取特征，尚未验证跨语言跨场景与端到端原始信号外推，硬件为NVIDIA RTX 3090 GPU上训练，推理开销在证据中未报告。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/google-bert/bert-base-uncased> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/Minej/bert-base-personality> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 127. [以关键姿态为动机：MotivDance 如何把细粒度文本钉到音乐节拍上再补间成舞](/posts/conference-aaai-2026-conference-paper-id-37528-8c745c9adb/)

> 英文题目：*[MotivDance: Fine\-Grained Text\-Guided Motivation Choreography with Music Synchronization](/posts/conference-aaai-2026-conference-paper-id-37528-8c745c9adb/)*

标签：#对比学习 #扩散模型 #Transformer #音乐 #音乐理解

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐理解 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37528) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37528/41490)

👥 **作者与机构**

- Chenguang Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yu\-Hui Wen：机构信息未能从会议 PDF 纯文本可靠映射
- Liping Jing：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为音乐波形与身体部位级细粒度文本，输出为兼顾节奏对齐与语义保真的3D舞蹈序列，难点在于缺乏高质量音乐\-动作\-文本三元组且需同时满足节拍同步与动机表达。文本到姿态生成利用预训练PoseScript将描述解码为相对关节旋转，经前向运动学求解根相对关节位置并映射到272维运动表示的对应维度，其余维度掩码待补。自适应关键帧定位器在冻结Wav2CLIP与MotionCLIP主干、只训练残差适配器做InfoNCE对齐后，先做节拍检测得到容许时刻，再在节拍处比较音乐帧特征与姿态嵌入的余弦相似度并取最大者为插入位置，其输出的稀疏关键姿态进入下一步。舞蹈补间扩散以时空掩码融合稀疏关键姿态与加噪序列并拼接掩码通道，用引入Transformer残差层、交叉注意力与密集FiLM的U\-Net解码器，以Jukebox音乐特征加舞者与编舞标识为条件去噪补间。与直接音乐文本联合建模相比，该链条把可控性解耦为外部姿态生成加节拍约束检索，避免端到端学习细粒度对齐，因而保留预训练语义并强化节奏约束。在AIST\+\+测试集无关键帧生成任务下，MotivDance的运动学FID指标为13\.64，低于Bailando的28\.16。该结论适用边界受限于短片段与节拍清晰舞种，自由文本泛化与长时结构一致性尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 128. [把病理性语音拉回正常编码：EA\-VAE 用三处对齐做重构](/posts/conference-aaai-2026-conference-paper-id-40766-9e36a9b62a/)

> 英文题目：*[EA\-VAE: Learning to Reconstruct Dysarthric Speech via Variational Autoencoder with Encoding Alignment](/posts/conference-aaai-2026-conference-paper-id-40766-9e36a9b62a/)*

标签：#主观评测 #变分自编码器 #言语障碍 #语音 #语音转换

评分：**5.8/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音转换 | 主方法：#变分自编码器

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40766) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40766/44727)

👥 **作者与机构**

- Daipeng Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Wenhuan Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Xianghu Yue：机构信息未能从会议 PDF 纯文本可靠映射
- Hongcheng Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Jianguo Wei：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

构音障碍语音重构需将发音断续、语速缓慢且停顿异常的病理语音转换为可懂自然语音，难点在于病理与正常语音在声学模式与时长上严重错位导致重构失真。EA\-VAE以预训练WavLM提取的帧级嵌入为条件，先由嵌入对齐模块将病理嵌入映射向平行正常嵌入，输出直接作为分布对齐的输入。分布对齐模块约束病理先验分布逼近固定的正常先验以缩小域偏移，其结果再送入时长对齐预测器重塑自然韵律，最后经共享解码器与判别器合成波形。相比依赖ASR\-TTS级联或多编码器蒸馏的已有方案，该方法免除文本与音素标注并在单一VAE内完成三级显式对齐，具有更简洁的端到端意义。在UASpeech的B2评测下，EA\-VAE的WER从原始语音的91\.05%降至62\.19%。该结论适用边界受限，仅在孤立词与低、中严重度的四名英文说话人上验证，尚未验证连续语篇、重度障碍与跨语种泛化等外推范围。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://sailbulider.github.io/EA-V> — 链接不可用（HTTP 404）
- 第三方资源：<https://github.com/microsoft/unilm/tree/master/wavlm> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 129. [高层偏向视频、跨模态不宜直并：AccKV 按层聚焦再校准压缩音视频 KV](/posts/conference-aaai-2026-conference-paper-id-37467-eed224abba/)

> 英文题目：*[AccKV: Towards Efficient Audio\-Video LLMs Inference via Adaptive\-Focusing and Cross\-Calibration KV Cache Optimization](/posts/conference-aaai-2026-conference-paper-id-37467-eed224abba/)*

标签：#模型压缩 #多模态模型 #高效推理 #音视频 #音视频理解

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频理解 | 主方法：#模型压缩

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37467) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37467/41429)

👥 **作者与机构**

- Zhonghua Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Kui Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Kunxi Li：机构信息未能从会议 PDF 纯文本可靠映射
- Keting Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Yiyun Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Zhaode Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Chengfei Lv：机构信息未能从会议 PDF 纯文本可靠映射
- Shengyu Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音视频大语言模型（Audio\-Video Large Language Models, AV\-LLMs）推理需同时缓存具时间特性的音频键值缓存与具时空特性的视频键值缓存（Key\-Value Cache, KV Cache），序列冗长且模态异构导致开销巨大。AccKV是作用于预填充阶段的免训练即插即用压缩框架：先对注意力矩阵做重分配以抑制早出现词元（token）的累积偏差，再按层统计序列尾部文本区间对音视频区间的平均累积注意力得到模态优先级并加权，最后在各模态内均值合并非重要KV，并以高优先级模态的键（Key, K）为锚对低优先级模态做余弦相似度交叉校准与阈值驱逐，文本区间KV全部保留。与直接跨模态合并的LOOK\-M及无视层间偏移的FastV不同，该方法坚持先模态内压缩后跨模态对齐，以保留同步结构并避免特征混淆。在VideoLLaMA2上以20%缓存预算评测MVBench动作定位任务时，AccKV得分为0\.736667，明显高于H2O的0\.724232并接近全缓存的0\.737667。该结论目前仅在VideoLLaMA2搭配Qwen2\-7B\-Instruct与AVicuna搭配Vicuna\-7B\-v1\.5两个7B级解码器、MVBench中10个音视频子任务加音视频场景感知对话（Audio Visual Scene Aware Dialogue, AVSD）上验证，未证明对更长视频或流式解码的外推性。原文未披露训练、推理延迟吞吐与部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 130. [模态竞争下如何协作：PaSE 用原型校准与 Shapley 均衡做多模态情感分析](/posts/conference-aaai-2026-conference-paper-id-40355-c5db8e3e8b/)

> 英文题目：*[PaSE: Prototype\-aligned Calibration and Shapley\-based Equilibrium for Multimodal Sentiment Analysis](/posts/conference-aaai-2026-conference-paper-id-40355-c5db8e3e8b/)*

标签：#多模态学习 #音视频 #语音 #语音情感识别

评分：**5.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40355) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40355/44316)

👥 **作者与机构**

- Kang He：机构信息未能从会议 PDF 纯文本可靠映射
- Boyu Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yuzhe Ding：机构信息未能从会议 PDF 纯文本可靠映射
- Fei Li：机构信息未能从会议 PDF 纯文本可靠映射
- Chong Teng：机构信息未能从会议 PDF 纯文本可靠映射
- Donghong Ji：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态情感分析以文本、音频和视觉序列为输入，预测语句级情感极性或强度，难点在于文本主导压制弱模态形成模态竞争与跨模态语义错位，简单融合常不及单文本基线。PaSE先以模态内原型校准学习压缩同类样本表征并分离异类原型，为弱模态建立独立判别结构，其输出的校准后单模态表征进入跨模态对齐。接着以熵正则最优传输对齐跨模态类别原型并施加双向一致与结构保持约束，得到语义一致的共享原型空间表示并送入融合阶段。融合阶段先由原型门控融合按贡献熵加权与门控选择上下文相关模态得到共享表示，再由Shapley梯度调制按边际贡献重加权各模态梯度以抑制主导模态扰动。与依赖梯度范数或损失启发的调制不同，该框架显式量化边际效用并解耦表征对齐与优化平衡，从而促进协作而非单模态过拟合。在CMU\-MOSI基准下，PaSE的Acc\-2为88\.32，高于MSAmba的87\.43。该结论适用边界受限于英文评论与表演对话类语料及完整模态训练场景，对缺失模态与跨语言泛化尚未验证，训练成本对应硬件为单卡NVIDIA A100上200轮训练。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 131. [看不清字、听得出音：MMBERT 用三路专家对付中文伪装仇恨言论](/posts/conference-aaai-2026-conference-paper-id-40715-1224b535a6/)

> 英文题目：*[MMBERT: Scaled Mixture\-of\-Experts Multimodal BERT for Robust Chinese Hate Speech Detection Under Cloaking Perturbations](/posts/conference-aaai-2026-conference-paper-id-40715-1224b535a6/)*

标签：#内容审核 #混合专家模型 #多模态学习 #对抗鲁棒性 #音频分类

评分：**5.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分类 | 主方法：#混合专家模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40715) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40715/44676)

👥 **作者与机构**

- Qiyao Xue：机构信息未能从会议 PDF 纯文本可靠映射
- Yuchen Dou：机构信息未能从会议 PDF 纯文本可靠映射
- Zheyuan Ryan Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Xiang Lorraine Li：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Gao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

中文仇恨言论检测输入为社交文本，输出为仇恨与非仇恨二分类，难点在于变形字、同音替换、缩写与语码混杂等伪装扰动使纯文本语义失效。MMBERT首先用语音合成模型生成对应语音并渲染词级字形图，将缺失听觉与视觉线索的纯文本补成三模态输入。接着语音编码器与视觉编码器分别抽取声学与字形特征，经线性模态对齐器投影为与词嵌入同空间的软词元并与文本词元拼接。最后拼接序列送入混合专家增强的BERT块，经共享自注意力交互后由路由器按输入动态加权调用文本、语音、视觉专家，再经三阶段渐进训练完成对齐、专家特化与联合微调。与固定嵌入融合的ChineseBERT相比，关键差异是按扰动类型自适应分配专家权重以调用语音与视觉线索，具有输入敏感的鲁棒意义。在ToxiCloakCN基准下，文本语音融合的F1为91\.1，高于纯文本的86\.1。该结论适用边界限于中文三数据集与合成多模态输入，真实语音图像与跨平台泛化尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://huggingface.co/Qwen> — 暂时无法访问
- 第三方资源：<https://huggingface.co/DeepSeek-AI> — 暂时无法访问
- 第三方资源：<https://openai.com/index/gpt-4o> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 132. [长片先切准场景再判好笑：视觉加字幕与笑声加文本的幽默片段流水线](/posts/conference-aaai-2026-conference-paper-id-41480-3955475a8e/)

> 英文题目：*[Automatic Funny Scene Extraction from Long\-form Cinematic Videos](/posts/conference-aaai-2026-conference-paper-id-41480-3955475a8e/)*

标签：#内容审核 #对比学习 #多模态学习 #音视频理解

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音视频理解 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/41480) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/41480/45441)

👥 **作者与机构**

- Sibendu Paul：机构信息未能从会议 PDF 纯文本可靠映射
- Haotian Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Caren Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为约2小时影视长片连续视频与稀疏关键帧，输出为带排序分数的搞笑场景片段，难点在于长程场景边界标注稀缺且幽默依赖多模态主观语境难以定位。管线先用TransNetV2做镜头切分得到镜头序列，再将X\-CLIP跨帧视觉特征与BLIP\-2文本特征拼接后经滑动窗口多层感知机判定场景边界形成场景单元。接着并行进行基于ResNet18的笑声检测与基于ColBERT的长文本幽默分类，其输出连同音频标签护栏过滤结果一起进入启发式幽默评分排序。相对启发式伪标签对比学习方法，关键差异在于用MovieNet\-SSeg真实边界在正负场景窗内做有监督引导的三元组挖掘，从而消除误匹配并增强镜头场景关联。在OVSD基准测试任务下，本文视觉模型的AP指标为33\.94，高于ShotCoL基线的25\.02。在五部电影的策展人评测中客观搞笑准确率为87%且场景结尾正确率为98%。该结论适用边界受限于英语对白慢节奏长片，在快剪预告片中边界质量明显下降且尚未验证跨文化幽默外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 133. [从短行为模拟内部认知：用个性化权重图回归真实人格](/posts/conference-aaai-2026-conference-paper-id-37167-550cf669d3/)

> 英文题目：*[Learning Personalised Human Internal Cognition from External Expressive Behaviours for Real Personality Recognition](/posts/conference-aaai-2026-conference-paper-id-37167-550cf669d3/)*

标签：#端到端学习 #图神经网络 #音视频 #语音 #音视频理解

评分：**5.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频理解 | 主方法：#图神经网络

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37167) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37167/41129)

👥 **作者与机构**

- Xiangyu Kong：机构信息未能从会议 PDF 纯文本可靠映射
- Hengde Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Haoqin Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Zhihao Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Jiayan Gu：机构信息未能从会议 PDF 纯文本可靠映射
- Xinyi Ni：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shizhe Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Siyang Song：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

真实人格识别需从个体的短时音频与面部行为推断自陈大五人格，其难点在于外部表情与内在特质弱相关，直接回归行为易偏向表观印象而非真实人格。该方法先以通用面部反应生成器学习通用人类认知，再由行为编码器从10秒音视频片段生成个性化偏移并精调通用权重，得到可复演个体专属面部反应的个性化认知权重。随后认知图学习将每块权重编码为二维矩阵值节点并构建边特征以保留结构关系，最后由二维图神经网络从认知图推断人格，且端到端联合优化反应重建与人格预测损失。与既往需长时双人交互搜索训练个性化网络的策略不同，本路线仅经前向推理生成权重并保留权重结构，避免了推理期重训练。与直接回归短片段行为的范式相比，其以可复演反应的权重作为认知的计算代理更贴近人格成因。在NoXI基准下，加法精调个性化认知的平均Pearson Correlation Coefficient为0\.324，高于乘法精调基线的0\.223。该结论的适用边界受限于NoXI与UDIVA双人交互语料，对长时跨场景泛化与缺失言语语义时的失败条件尚未验证。原文未披露训练、推理或部署成本

🔗 **开源资源**

- 代码相关资源：<https://github.com/xk0720/DeepPersonality> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 134. [先对齐多帧运动、再用声音补嘴部细节：GAVN 的时域与身份互补修复](/posts/conference-aaai-2026-conference-paper-id-37254-0a211100ab/)

> 英文题目：*[Audio\-Assisted Face Video Restoration with Temporal and Identity Complementary Learning](/posts/conference-aaai-2026-conference-paper-id-37254-0a211100ab/)*

标签：#多模态学习 #RNN #音视频 #语音 #音视频生成

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37254) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37254/41216)

👥 **作者与机构**

- Yuqin Cao：机构信息未能从会议 PDF 纯文本可靠映射
- Yixuan Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaohong Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yulun Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiongkuo Min：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理带伴音人脸视频的多种退化复原，输入为连续低质量人脸帧Xt±\(N\+2\)与对应语音段At±m，输出为逼近真值Yt±N的高质量帧，难点在于相机与头部运动导致的跨帧错位、低质下地标检测失效以及嘴部视听同步难以兼顾。帧间时间模块在低分辨率空间用可变形卷积做前后向相邻与跳帧对齐并融合多帧运动特征以粗复原并节约计算量，其输出的时间特征进入重建。帧内身份模块在高分辨率空间融合单帧图像特征、预训练地标特征与语音经Bi\-LSTM提取的音频特征得到身份特征，语音同时辅助地标检测以精修眼嘴细节。重建模块将两类特征逐级调制融合并残差叠加至输入帧以同时输出多帧高清结果，优化时先训练时间模块再微调整体。与仅做压缩伪影去除或仅在低分辨率建模的DAVD\-Net等方法不同，该链路保留高频身份信息并以语音约束口型，具有视听互补的实际意义。在VoxCeleb2压缩伪影去除任务下，GAVN的PSNR为28\.9780，高于DAVD\-Net的28\.7269。结论适用边界受限于正面裁剪至224×224的合成压缩、模糊与低分辨率退化及已知语种分布，尚未验证大姿态、遮挡与多说话人混叠下的外推，训练成本涉及单块NVIDIA A100 GPU硬件上的两阶段优化。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 135. [用光流解耦外观与运动、再用强度引导噪声搜索压住闪烁的说话头生成](/posts/conference-aaai-2026-conference-paper-id-37684-6cc23a035c/)

> 英文题目：*[ConsistTalk: Intensity Controllable Temporally Consistent Talking Head Generation with Diffusion Noise Search](/posts/conference-aaai-2026-conference-paper-id-37684-6cc23a035c/)*

标签：#扩散模型 #知识蒸馏 #音视频 #语音 #音视频生成

评分：**5.6/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.6/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/37684) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/37684/41646)

👥 **作者与机构**

- Zhenjie Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Jianzhang Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Renjie Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Cong Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Shangfei Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频驱动肖像动画需从单张参考图和语音生成表情自然、身份稳定的说话人视频，难点是外观与运动纠缠导致的闪烁、自回归长视频漂移，以及音频到运动一对多映射的强度不可控。本文提出 ConsistTalk，主干为基于 Stable Diffusion 的双 UNet 结构（Dual\-UNet），身份分支用 CLIP 特征注入交叉注意力。系统串联三个模块：面部光流引导的时间模块（Optical Flow\-guided Temporal Module，OFT）解耦动态与外观；音频到强度模型（Audio\-to\-Intensity，A2I）从音频预测帧级强度序列；强度引导的噪声初始化（Intensity\-guided Initialization，IC\-Init）在推理期做频率感知的束搜索。与直接复用前帧外观特征和固定噪声推理不同，该链条把运动表示、强度控制与推理稳定性显式分离。在 HDTF 数据集 50 段 16 秒测试片段、25 FPS、512×512 裁脸设置下，全模型 FVD 为 171\.7，比次优 Sonic 的 206\.1 降低约 16\.7%，Flicker 为 0\.4218，VBench 平滑/背景为 99\.68/98\.28，BA 为 1\.659 与 Div 为 3\.48 均为最高；但 Sync\-C 为 6\.83 次于 Sonic 的 7\.11，E\-FID 为 1\.4397 次于 EchoMimic 的 1\.138，ID\-dist 为 0\.1743 不如 Base\+OFT 的 0\.1705。该结论仅在短片段高清人脸居中场景验证，长时复杂背景与大幅姿态外推缺乏定量漂移曲线。原文未披露训练硬件、时长与推理延迟成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 136. [回归标签太粗、增强又破坏融合：用潜在情感分组做测试时自监督](/posts/conference-aaai-2026-conference-paper-id-39782-eccd886e45/)

> 英文题目：*[Group\-aware Multiscale Ensemble Learning for Test\-Time Multimodal Sentiment Analysis](/posts/conference-aaai-2026-conference-paper-id-39782-eccd886e45/)*

标签：#对比学习 #多模态学习 #测试时自适应 #语音情感识别

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#测试时自适应

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/39782) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/39782/43743)

👥 **作者与机构**

- Kai Tang：机构信息未能从会议 PDF 纯文本可靠映射
- Yixuan Tang：机构信息未能从会议 PDF 纯文本可靠映射
- Tianyi Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Haokai Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Qiqi Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Jin Guang Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Zhixin Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Gang Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Haobo Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态情感分析以文本、视频与音频为输入并回归连续情感强度，难点在于源域训练的融合表示在目标域偏移下语义纠缠，且回归任务缺乏分类概率监督可用的伪标签机制。本文提出群组感知多尺度集成学习（Group\-aware Multiscale Ensemble Learning，GMEL），先用冯·米塞斯\-费希尔（von Mises\-Fisher，vMF）混合分布建模隐情感群组并估计群组归属，再以vMF对比学习加k近邻对比约束拉开群组表示，随后经投影头多层重丢弃扰动生成多尺度增强特征并做特征拼接与一致性正则，端到端更新投影头以对齐偏移样本。该链条把离散化群组发现作为回归任务的自监督代理，同时避免输入级模态删除对融合对齐的破坏。在5组跨数据集偏移的10种骨干设置下，GMEL相对最强基线CASP平均提升准确率2\.53个百分点、F1值3\.70个百分点并降低平均绝对误差0\.05，在30个指标中24项最优。该结论限于MOSI、MOSEI与SIMS三个评测集及离线可访问全部目标数据的测试时自适应设定，未验证在线流式与强噪声缺失模态的外推。原文未披露完整训练时长与部署成本，计时对比排除了CASP。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 137. [先对齐再分家：PLUM\-Net 用原型标签拆开共有与私有表征](/posts/conference-aaai-2026-conference-paper-id-38928-ae9f87d7cb/)

> 英文题目：*[PLUM\-Net: Prototype\-Induced Label Structuring for Disentangled Multimodal Representation Network](/posts/conference-aaai-2026-conference-paper-id-38928-ae9f87d7cb/)*

标签：#对比学习 #多模态学习 #音视频 #语音情感识别

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38928) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38928/42890)

👥 **作者与机构**

- Kehan Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Huan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Yong Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Xupeng Zha：机构信息未能从会议 PDF 纯文本可靠映射
- Guanghui Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Cheng Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Yiming Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Zixing Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态情感分析以音频、视觉与文本序列为输入，输出情感强度与类别，难点在于跨模态共性语义与模态独有细节相互纠缠，且统一任务标签抹平了模态间分布差异。PLUM\-Net先以多级语义对齐模块做模内对比与跨模态对比，输出统一投影的共性嵌入与保留几何结构的单模态对齐特征。接着基于原型的单模态标签生成器按模态按类求均值建立原型，以欧氏距离经负距离softmax生成各模态软硬标签，为下一步提供差异化监督。然后任务条件特征分叉器以多模态真值监督共性分支、以原型标签监督个性分支，实现并行解耦与任务自适应路由。最后私有精炼模块以双向交叉注意力融合共性与个性，并以软标签为键值做标签条件增强后残差输出。与拼接融合或共享私有映射相比，关键差异在于用模态内几何结构动态改写监督信号，从而保留互补细节并减少负迁移。在CMU\-MOSI基准下，PLUM\-Net的MAE指标为0\.448，低于MM\-CoT的0\.647。该结论适用边界受限于完整三模态情感幽默基准，严重类别不平衡、噪声标签与模态缺失为明确失败条件，缺失模态外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 138. [双人同时动还要各像各的：DialoGen 如何把互动与个人风格分开建模](/posts/conference-aaai-2026-conference-paper-id-38327-bb675629c6/)

> 英文题目：*[DialoGen: Towards Dialog Gesture Generation via Identity\-Decoupled Style Guidance in Interactive Diffusion Model](/posts/conference-aaai-2026-conference-paper-id-38327-bb675629c6/)*

标签：#对比学习 #扩散模型 #语音 #音视频交互

评分：**5.4/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#音视频交互 | 主方法：#扩散模型

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/38327) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/38327/42289)

👥 **作者与机构**

- Weiyu Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Chenyang Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Liangxiao Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Zonglin Li：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Shengping Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

对话手势生成以双人对话音频与对应文本为输入，需为说话者与倾听者同步输出自然连贯且各具个人风格的三维全身手势，难点在于双向互动依赖建模与身份风格保持。所提DialoGen先用特征抽取将语音韵律特征与FastText词嵌入及笑声二值指示拼接为内容条件，再由身份解耦编码器从长窗手势中抽取风格向量并经监督对比学习聚类形成身份风格表示。随后交互式双路扩散以权重共享Transformer去噪器并行去噪双人动作序列，期间互交互估计模块以自注意力输出交互权重调节两路隐特征融合，使内容条件与风格表示共同引导去噪生成。相对仅建模单人或以独热编码注入身份的已有方法，该机制同时建模双人动态关联并解耦身份风格，实现了多风格可切换的同步生成，具有保持个人动作习惯的实际意义。在Talking With Hands基准测试集下，DialoGen的FDg指标为1\.18，低于Audio2Photoreal的1\.29。该结论适用边界受限于仅在18人英语闲聊语料上验证，尚未验证跨语言跨文化与强情绪外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 139. [似然能学会音符，对不上人心：音乐生成的偏好对齐怎么做](/posts/conference-aaai-2026-conference-paper-id-41323-e4eac679ac/)

> 英文题目：*[Aligning Generative Music AI with Human Preferences: Methods and Challenges](/posts/conference-aaai-2026-conference-paper-id-41323-e4eac679ac/)*

标签：#偏好优化 #主观评测 #音乐 #音乐生成

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：综述 | 主任务：#音乐生成 | 主方法：#偏好优化

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/41323) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/41323/45284)

👥 **作者与机构**

- Dorien Herremans：机构信息未能从会议 PDF 纯文本可靠映射
- Abhinaba Roy：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音乐生成以文本描述为输入、以音频或符号音乐为输出，难点在于时序连贯性、和声一致性与高度主观的审美判断难以被似然目标刻画。本文梳理的大规模人类偏好学习先由成对偏好数据训练奖励或偏好模型以捕捉复杂偏好模式，其输出为后续优化提供人类判断依据。接着扩散架构内嵌的多偏好优化在训练中直接学习偏好对齐表示，利用全局建模同时优化长程和声与节奏依赖。然后推理时树搜索以加权文本一致性与和声一致性复合奖励进行探索与权衡，其输出不修改模型参数即可动态适配用户偏好。与仅优化分布拟合的传统训练相比，其机制差异在于把优化目标从统计保真转向人类判断，并支持多目标权衡与动态适配。在Text2midi生成评测任务下，Text2midi\-InferAlign的CLAP得分相对基线text2midi提升29\.4%，高于基线的得分。该结论适用边界主要在短篇与西方流行风格，长篇幅、多文化与个性化场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 140. [广告审核为何需要跨模态因果链：BLM\-Guard 的两阶段策略](/posts/conference-aaai-2026-conference-paper-id-40914-13e38e3157/)

> 英文题目：*[BLM\-Guard: Explainable Multimodal Ad Moderation with Chain\-of\-Thought and Policy\-Aligned Rewards](/posts/conference-aaai-2026-conference-paper-id-40914-13e38e3157/)*

标签：#内容审核 #强化学习 #可解释性 #音视频 #音视频理解

评分：**5.3/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#音视频理解 | 主方法：#强化学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/40914) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/40914/44875)

👥 **作者与机构**

- Yiran Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhaowei Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuan Yuan：机构信息未能从会议 PDF 纯文本可靠映射
- Yukun Song：机构信息未能从会议 PDF 纯文本可靠映射
- Xiong Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Yinghao Song：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangji Zeng：机构信息未能从会议 PDF 纯文本可靠映射
- Lu Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Yulu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Hai Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Shuai Cui：机构信息未能从会议 PDF 纯文本可靠映射
- Zhaohan Gong：机构信息未能从会议 PDF 纯文本可靠映射
- Jiefei Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理短视频商业广告的多模态合规审核，输入为视频帧与自动语音识别（Automatic Speech Recognition，ASR）转写文本，输出为是否违反平台政策的二元判定及结构化推理链，难点在于夸大宣传与跨模态不一致等隐蔽违规。方法先以风险提示锚定的关键帧与区域筛选构造视觉线索，再用冻结大模型经观察到风险筛查到因果分析到终判的三段提示合成交错模态链式思考（Interleaved\-modal Chain\-of\-Thought，ICoT）数据并做规则锚定监督微调（Supervised Fine\-Tuning，SFT）冷启动。随后以困难样本挖掘与安全感知拼接构造强化学习数据，并用规则正确性加格式合规加场景自适应评论奖励（Self\-Adaptive Critique Reward，SACR，文中亦称 SCA\-R）混合奖励驱动组相对策略优化（Group Relative Policy Optimization，GRPO）精修推理与决策。与通用视觉语言模型（Vision\-Language Model，VLM）相比，关键差异在于将政策规则显式编码为可学习的推理先验与动态评价原则，而非仅依赖通用有害内容判断，从而提升对政策漂移的适应性与可解释性。在自建短视频广告基准 BLM\-Guard\-Bench 上，严格准确率（Strict Accuracy，s\-Acc\.）达 0\.914，显著高于最强基线 Qwen2\.5\-VL\-32B 的 0\.682，同时推理一致性达 0\.845。结论仅适用于中文短视频商业广告及所定义的七类风险场景，对未见政策类别与纯视觉欺诈的泛化尚未充分验证，跨平台与多语言外推受限。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 141. [一句话生成可玩视觉小说：AniTales 如何用情绪标签对齐故事、立绘与配音](/posts/conference-aaai-2026-conference-paper-id-42181-f011c32e74/)

> 英文题目：*[AniTales: End\-to\-End Multimodal Story Generation Through Natural Language Prompting \(Student Abstract\)](/posts/conference-aaai-2026-conference-paper-id-42181-f011c32e74/)*

标签：#LoRA #模型融合 #用户研究 #音视频生成 #文本到语音

评分：**5.0/10** | 创新 1.1/2 | 技术严谨 0.9/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.4/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音视频生成 | 主方法：#模型融合

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/42181) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/42181/46142)

👥 **作者与机构**

- Mrigendra Agrawal：机构信息未能从会议 PDF 纯文本可靠映射
- Yunze Xiao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入自然语言提示，输出可游玩的分支视觉小说，包含对白、角色立绘、背景、配音与音乐，难点在于跨场景角色外观一致与多模态情感对齐。故事生成模块以大语言模型输出含说话人标识、背景提示与每句情感标签的结构化剧本并经独立审核器过滤，其情感标签与说话人信息直接进入美术与语音环节。角色美术先用FLUX\.1 dev叠加风格低秩适配生成初版肖像，经用户确认后再用FLUX\.1 Kontext上下文编辑衍生中性、愤怒、开心等多表情立绘，保持同一角色身份。语音合成调用MiniMax Speech 02以情感标签指导韵律生成台词音频并缓存复用，场景组装与分支引擎按标签同步文本框、立绘、背景与音频并以对话历史延续分支。与既往分段生成或需大量人工干预的方案相比，该链条以情感标签为跨模态黏合剂实现全自动装配，减少作者资产制作负担。在普通用户与专家分别创建十场景故事并试玩的评测设置下，普通用户组的视觉一致性得分为4\.2 ± 0\.78，低于专家组的4\.8 ± 0\.44。该结论适用边界受限于短篇试玩与小样本主观评分，长篇连贯性与跨风格泛化尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://anitales.chat/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 142. [倾听与报警并行：校园双语语音对话如何在共情流程中嵌入高风险检测](/posts/conference-aaai-2026-conference-paper-id-42362-78b9d3e5e2/)

> 英文题目：*[Risk\-Aware Bilingual Spoken Dialogue for Campus Mental Health Support](/posts/conference-aaai-2026-conference-paper-id-42362-78b9d3e5e2/)*

标签：#数据集构建 #多语言 #语音 #语音对话系统

评分：**4.8/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#语音对话系统 | 主方法：#数据集构建

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/42362) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/42362/46323)

👥 **作者与机构**

- You\-Teng Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Li\-Yang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yi\-Tang Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Jen\-Tzung Chien：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作面向校园心理支持的国语英语双语口语自我披露，输入为校园用户语音，输出为共情文本语音回复及高风险预警，难点在于实时安全干预与跨语言可用性需兼顾。系统先由基于Whisper并经台湾口音微调的自动语音识别转写含中英码切换的语音，转写文本进入自然语言理解抽取意图情感与语义特征。对话管理以咨询师知情策略维护信息状态并控制流程，提示驱动的大语言模型分类器将每轮话语分为无、低、中、高四级，其判定结果传递至后端触发机制。高风险时后端生成触发令牌由前端监听并弹出含咨询与急救联系方式的预防弹窗并通知咨询师，自然语言生成产生共情文本再经面向台湾国语与标准英语的语音合成播报，全程安全落库供咨询师复核。在文本语料收集设置下，ConvCounsel的指标样本量为40组模拟咨询，高于ConvCounsel 2\.0的指标样本量为15人交互日志。相对既有国语主动倾听系统，该设计将风险分类与界面渲染解耦并新增双语语音通道，意义在于低延迟安全阻断与更广人群覆盖。该结论适用边界受限于仅在40组模拟咨询与15人交互日志构成的数据管线及演示系统上验证，尚未验证跨校泛化与误报代价下的失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://www.nycuka.com.tw/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 143. [先发现结构再贴标签：用无监督组织对抗 soundscape 的域偏移与复音](/posts/conference-aaai-2026-conference-paper-id-42161-bfca68af7f/)

> 英文题目：*[Creating Generalizable Data\-Driven Approaches for Biodiversity Monitoring via Acoustics](/posts/conference-aaai-2026-conference-paper-id-42161-bfca68af7f/)*

标签：#生物声学监测 #开源工具 #无监督学习 #环境声 #音频事件检测

评分：**4.7/10** | 创新 1.0/2 | 技术严谨 0.8/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频事件检测 | 主方法：#无监督学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/42161) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/42161/46122)

👥 **作者与机构**

- Thomas Napier：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

被动声学监测以低成本非侵入麦克风连续采集长时声景，输入为生物声、地声与人为声叠加混响噪声的多源复调录音，输出为可支撑生态评估的声音事件分组与标签，难点在于鸣叫长度可变、严重重叠与跨生境域偏移使在小规模纯净数据上训练的有监督模型难以泛化。该研究先用梅尔频率倒谱系数提取人耳启发表示，为后续组织提供对主要生态大类可分的轻量特征，其输出直接进入非线性流形降维与自适应密度聚类阶段。该阶段用均匀流形近似与投影组织大规模录音，再用层次密度聚类发现组合式层次结构，将连续声景转化为可核验的声学簇。然后通过LEAVES交互工具每簇仅抽查少量样本做靶向核验，并将标签向全簇传播，再以主动学习与弱监督将标注精力导向不确定结构。与提前分类的有监督路线不同，该路线把专家工作从逐段创建转为针对已发现结构的确认，从而以声学生态一致性约束替代纯数学紧致性，实际意义在于打破标注瓶颈并保留跨站点可扩展性。在6个生物多样性声景的标注任务下，相对于传统人工标注，LEAVES簇辅助标注的一致性指标从79升至90%，标注速度达传统人工的7\.12倍。该结论适用边界受限于粗粒度大类与簇级效率验证，重叠声分离与细粒度物种辨别尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 144. [干净集打平、噪声下才拉开差距：SwinV2 与 AST 的蚊种对数加权融合](/posts/conference-aaai-2026-conference-paper-id-42196-b28d2b3ef9/)

> 英文题目：*[WingBeats and Snapshots: Fusing Sound and Vision for Mosquito Monitoring \(Student Abstract\)](/posts/conference-aaai-2026-conference-paper-id-42196-b28d2b3ef9/)*

标签：#生物声学监测 #多模态学习 #鲁棒性 #音视频 #音频分类

评分：**4.5/10** | 创新 0.8/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频分类 | 主方法：#多模态学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/42196) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/42196/46157)

👥 **作者与机构**

- Ahana Chanda：机构信息未能从会议 PDF 纯文本可靠映射
- Akshay Agarwal：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

蚊种识别的输入为高分辨率形态图像与振翅声音片段，输出为6类物种标签，难点在于光照差与样本破损会削弱视觉线索而环境噪声与频率重叠会破坏声学线索。该链条先由滑动窗口视觉变换器第二代SwinV2对图像编码并输出视觉对数几率，再由音频频谱变换器AST将梅尔频谱图编码并输出声学对数几率，随后可学习权重对两路对数几率加权求和并经全连接层得到最终预测，且两路骨干被联合微调以使融合影响表征学习。与把单模态视为竞争关系的已有做法不同，该机制允许样本级自适应依赖更可靠模态，从而在某一模态退化时维持决策稳定。在含标准差0\.15高斯噪声与2%椒盐噪声图像及约10 dB信噪比音频的鲁棒性评测中，融合准确率为93\.17%，明显高于受噪声影响更大的单模态对照。该结论仅适用于六类封闭集与人工加噪设置，未验证开放集、跨设备与野外分布偏移下的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 145. [口音表征记住说话人：先测泄漏再做去说话人化](/posts/conference-aaai-2026-conference-paper-id-42326-80317f0d15/)

> 英文题目：*[De\-Speakerizing Accented ASR: Measuring and Mitigating Speaker Entanglement for Fair, Reliable Recognition](/posts/conference-aaai-2026-conference-paper-id-42326-80317f0d15/)*

标签：#对抗训练 #公平性 #低资源 #语音识别

评分：**3.8/10** | 创新 1.0/2 | 技术严谨 0.8/1.5 | 实验充分 0.2/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#对抗训练

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/42326) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/42326/46287)

👥 **作者与机构**

- Jiaen Sun：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文面向带口音自动语音识别，输入为多说话人、多口音语音，输出为文本转写，难点在于口音表征易记住说话人身份，导致说话人宽松划分下分数虚高，而在未见说话人与未见口音上失效并放大口音间公平性差距。第一步负责诊断纠缠程度，比较说话人不相交划分与宽松划分的性能膨胀，并以轻量探针预测说话人标识、说话人验证等错误率及与强说话人表征相似度量化信息泄漏。第二步负责剥离说话人信息，在冻结的Whisper骨干池化编码状态上学习连续口音嵌入，并以梯度反转层对抗抑制其中说话人可分性，从而输出去说话人化的干净口音向量。第三步负责安全条件注入与语料指导，将干净口音向量经有界特征线性调制注入解码器交叉注意力键值以辅助识别，并以固定总时长下说话人广度与每人深度配比指导低资源采集。与已有连续口音条件方法相比，关键机制差异是先显式去说话人化再做条件注入，实际意义在于保留口音收益的同时提升跨说话人泛化与公平性。在固定总时长语料设计任务条件下，Low\-resource B的说话人数指标为80，高于Low\-resource A的说话人数指标为20。结论的适用边界在于去纠缠收益与广度优先采集假设尚未验证，跨语言与高低资源外推及未见口音鲁棒性仍需实证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 146. [把混响时间锁在目标附近：感知加控制的自调节厅堂闭环](/posts/conference-aaai-2026-conference-paper-id-42315-c370c6064d/)

> 英文题目：*[AI\-Driven Real\-Time Acoustic Modelling for Better Audio Perception in Dynamic Environments](/posts/conference-aaai-2026-conference-paper-id-42315-c370c6064d/)*

标签：#CNN #强化学习 #麦克风阵列 #实时处理 #去混响

评分：**3.6/10** | 创新 1.0/2 | 技术严谨 0.5/1.5 | 实验充分 0.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#去混响 | 主方法：#强化学习

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/42315) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/42315/46276)

👥 **作者与机构**

- James Blossom Eleojo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以厅堂麦克风采集的短时音频为输入，实时输出天花与墙面可调面板的吸声系数增量以将混响时间T60维持在目标附近，难点在于无需脉冲响应测量即需感知混响并在占用与声源位置变化下快速作动。先由参数化厅堂模型把天花墙面离散为吸声系数可调面板并输出当前面板配置，再由Pachyderm仿真引擎以该配置为输入计算房间脉冲响应并输出参照T60，为感知学习提供物理真值。再由卷积神经网络以短时音频为输入直接估计当前T60并输出估计值，该估计值连同面板状态共同构成控制观测，最后由近端策略优化智能体以该观测为输入输出各面板吸声系数增量并按目标跟踪误差与能量代价奖励优化，面板更新后回送Pachyderm重算声学响应并以1秒间隔闭环重复。在占用与声源位置变化的条件测试下，自适应闭环控制器的声学方差指标低于静态配置基线的声学方差指标，相对降幅数值为40%。与只做声源定位或房间分类的既有工作不同，本框架把估计与物理作动闭环，使声场从被动分析变为被控对象。这使其能实现自调节声环境，具有改善教室与厅堂听感的实际意义。该结论的适用边界受限于仿真厅堂与理想可调面板假设，尚未验证于真实房间与硬件噪声下的外推能力，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://doi.org/10.1121/1.2935346> → <https://pubs.aip.org/jasa/article/123/5_Supplement/3761/710753/Analysis-of-room-transfer-function-and-reverberant> — 链接不可用（HTTP 403）
- 第三方资源：<https://doi.org/10.1109/taslp.2020.2990485> → <https://ieeexplore.ieee.org/document/9079214/> — 链接可访问（HTTP 202）
- 第三方资源：<https://doi.org/10.3390/s18103418> → <https://www.mdpi.com/1424-8220/18/10/3418> — 链接不可用（HTTP 403）
- 第三方资源：<https://doi.org/10.1109/taslp.2018.2842159> → <https://ieeexplore.ieee.org/document/8369155/> — 链接可访问（HTTP 202）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 147. [让大语言模型直接听出谁在何时说话：联合转写与切分的原生 diarisation 方案](/posts/conference-aaai-2026-conference-paper-id-42324-925f54e3e6/)

> 英文题目：*[Native Speech Processing with LLMs](/posts/conference-aaai-2026-conference-paper-id-42324-925f54e3e6/)*

标签：#LoRA #大语言模型 #语音 #语音识别 #说话人分离标注

评分：**3.6/10** | 创新 1.0/2 | 技术严谨 0.8/1.5 | 实验充分 0.0/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#说话人分离标注 | 主方法：#LoRA

会议来源：[官方记录](https://ojs.aaai.org/index.php/AAAI/article/view/42324) · [官方 PDF](https://ojs.aaai.org/index.php/AAAI/article/view/42324/46285)

👥 **作者与机构**

- Aaron Soh：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文面向连续多说话人音频的联合转写与说话人分割任务，输入为会议或播客录音，输出为带时间戳与说话人标签的结构化转写文本，实际难点在于重叠语音与说话人混淆以及分离标注稀缺导致的多语言泛化困难。第一阶段以预训练语音大模型为语言骨干并接入音频编码器与模态适配器，在大规模分离标注数据上联合优化编码器与适配器，将声学表征映射为语言空间以快速适应多说话人特性。第二阶段冻结音频编码器与大模型骨干，仅更新模态适配器与低秩适配器，并将对齐后声学嵌入与包含语言与说话人数量上下文的自然语言提示及带标注的说话人分段转写一起输入，利用特殊标记约束时间戳与轮次结构进行上下文提示训练。关闭适配器后模型可恢复原有文本能力，便于对生成转写做进一步语义分析。与传统聚类加嵌入或纯声学端到端方法及仅做后处理修正的语言模型方法相比，关键差异在于原生地用语义推理与上下文学习辅助声学判断而非受限于底层分离精度。在开放说话人分离语料基准下，AMI Meeting语料的时长指标为100 Hours，高于ICSI Meeting语料的时长指标为70 Hours。该结论适用边界受限于标注数据语言品种与时长不平衡，多语言泛化与重叠密集场景尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
