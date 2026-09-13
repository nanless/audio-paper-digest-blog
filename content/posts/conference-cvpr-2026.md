---
title: "cvpr-2026 论文深度解读"
date: 2026-09-13
draft: false
paper_digest_pipeline_owned: true
tags: ["变分自编码器","病理语音评估","测试时自适应","持续学习","大语言模型","低资源","端侧运行","端到端学习","对比学习","多模态模型","多模态学习","多任务学习","多通道","多语言","房间脉冲响应估计","高效推理","后训练","环境声","混合专家模型","基准测试","基准设计","检索增强","可解释性","课程学习","空间音频","空间音频信号","口语意图与槽位识别","扩散模型","联合声音事件检测定位","零样本","流匹配","流式处理","鲁棒性","轮次切换","模型剪枝","模型评估","内容审核","偏好优化","强化学习","弱监督学习","少样本","生成模型","声源定位","实时处理","视频到声音生成","数据集","数据集构建","数据增强","说话人分离标注","说话人识别","提示学习","图神经网络","文本到语音","向量量化","信号处理","形式化分析","严格因果","音乐","音乐检索","音乐生成","音频大模型","音频分类","音频检索","音频交互","音频理解","音频深度伪造检测","音频生成","音频事件检测","音频伪造检测","音频问答","音频修复","音视频","音视频交互","音视频理解","音视频生成","音视频声源分离","音视频问答","音视频语音合成","音视频语音识别","语音","语音编码","语音对话系统","语音合成","语音交互","语音配音","语音情感识别","预训练","长音频处理","知识蒸馏","指令微调","注意力机制","状态空间模型","自回归模型","自监督学习","Adapter","LoRA","Transformer"]
categories: ["cvpr-2026 论文"]
description: "共收录 103 篇 cvpr-2026 会议论文的 Reader 深度解读"
paper_digest_page_type: index
paper_digest_reader_quality: "reader-facing-v3"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_scope: "aggregate-primary-task-counts"
---

# cvpr-2026 论文深度解读

本汇总收录 authenticated plan 选择集内全部 103 篇已完成分析、重标和单篇 staging 的论文。

🏷️ 标签说明：本期使用新版受控 taxonomy；热门方向只统计主任务。

## ⚡ 今日概览

✅ authenticated plan 入选 103 篇 → 🔬 深度分析、Reader 与页面投影完成

### 🏷️ 热门方向

| 方向（仅主任务） | 数量 |
|---|---:|
| #音视频生成 | 22 篇 |
| #音视频问答 | 14 篇 |
| #视频到声音生成 | 10 篇 |
| #语音情感识别 | 8 篇 |
| #音视频理解 | 7 篇 |
| #音频检索 | 5 篇 |
| #音频深度伪造检测 | 5 篇 |
| #音视频交互 | 5 篇 |
| #声源定位 | 3 篇 |
| #音乐生成 | 2 篇 |
| #音频分类 | 2 篇 |
| #音频伪造检测 | 2 篇 |
| #语音对话系统 | 2 篇 |
| #病理语音评估 | 1 篇 |
| #房间脉冲响应估计 | 1 篇 |
| #口语意图与槽位识别 | 1 篇 |
| #联合声音事件检测定位 | 1 篇 |
| #说话人分离标注 | 1 篇 |
| #音频交互 | 1 篇 |
| #音频理解 | 1 篇 |
| #音频生成 | 1 篇 |
| #音频问答 | 1 篇 |
| #音频修复 | 1 篇 |
| #音视频声源分离 | 1 篇 |
| #音视频语音合成 | 1 篇 |
| #音视频语音识别 | 1 篇 |
| #语音编码 | 1 篇 |
| #语音交互 | 1 篇 |
| #语音配音 | 1 篇 |

## 📊 论文评分排行榜

| 排名 | Reader 中文题目 | 英文题目 | 八维评分 | 分档 | 文档类型 | 主任务 |
|---:|---|---|---|---|---|---|
| 1 | [不只绑一个锚点：用合成字幕把音频视频文本一起对齐](/posts/conference-cvpr-2026-conference-paper-id-vyas-pushing-the-frontier-of-audiovisual-perception-with-large-scale-multimodal-correspondence-cvpr-2026-paper-4a0c0662e4/) | [Pushing the Frontier of Audiovisual Perception with Large\-Scale Multimodal Correspondence Learning](/posts/conference-cvpr-2026-conference-paper-id-vyas-pushing-the-frontier-of-audiovisual-perception-with-large-scale-multimodal-correspondence-cvpr-2026-paper-4a0c0662e4/) | **8.9/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.3/1.5 · 清晰度 0.8/1 · 影响力 1.3/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 模型报告 | #音频检索 |
| 2 | [环境声编码器听不懂人话时如何检索：SAVE 用语音分支与软对齐补齐音轨](/posts/conference-cvpr-2026-conference-paper-id-zhao-save-speech-aware-video-representation-learning-for-video-text-retrieval-cvpr-2026-paper-f03b5cf6e7/) | [SAVE: Speech\-Aware Video Representation Learning for Video\-Text Retrieval](/posts/conference-cvpr-2026-conference-paper-id-zhao-save-speech-aware-video-representation-learning-for-video-text-retrieval-cvpr-2026-paper-f03b5cf6e7/) | **8.4/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 方法研究 | #音频检索 |
| 3 | [只听其声不够：用单因素反事实考视频生音频的物理因果](/posts/conference-cvpr-2026-conference-paper-id-li-benchmarking-single-factor-physical-video-to-audio-generation-cvpr-2026-paper-173973780b/) | [Benchmarking Single\-Factor Physical Video\-to\-Audio Generation](/posts/conference-cvpr-2026-conference-paper-id-li-benchmarking-single-factor-physical-video-to-audio-generation-cvpr-2026-paper-173973780b/) | **8.1/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #视频到声音生成 |
| 4 | [听音再剪视频：OmniZip 用音频保留率动态分配视频剪枝](/posts/conference-cvpr-2026-conference-paper-id-tao-omnizip-audio-guided-dynamic-token-compression-for-fast-omnimodal-large-language-cvpr-2026-paper-4235b1daf2/) | [OmniZip: Audio\-Guided Dynamic Token Compression for Fast Omnimodal Large Language Models](/posts/conference-cvpr-2026-conference-paper-id-tao-omnizip-audio-guided-dynamic-token-compression-for-fast-omnimodal-large-language-cvpr-2026-paper-4235b1daf2/) | **8.0/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 方法研究 | #音视频理解 |
| 5 | [文本挤占参数更新时，单块 LoRA 如何隐式分出模态分工](/posts/conference-cvpr-2026-conference-paper-id-zhang-parameter-efficient-adaptation-for-mllms-via-implicit-modality-decomposition-cvpr-2026-paper-3f407c6c0d/) | [Parameter\-Efficient Adaptation for MLLMs via Implicit Modality Decomposition](/posts/conference-cvpr-2026-conference-paper-id-zhang-parameter-efficient-adaptation-for-mllms-via-implicit-modality-decomposition-cvpr-2026-paper-3f407c6c0d/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音视频问答 |
| 6 | [从离散分类到连续追踪：OSMO 把自我情绪做成时间线](/posts/conference-cvpr-2026-conference-paper-id-abdelfattah-osmo-open-vocabulary-self-emotion-tracking-cvpr-2026-paper-af89699008/) | [OSMO: Open\-vocabulary Self\-eMOtion Tracking](/posts/conference-cvpr-2026-conference-paper-id-abdelfattah-osmo-open-vocabulary-self-emotion-tracking-cvpr-2026-paper-af89699008/) | **7.8/10** · 创新 1.6/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #语音情感识别 |
| 7 | [不训练也能定位声源：用生成、核验、修正三步约束多模态大模型的猜测](/posts/conference-cvpr-2026-conference-paper-id-park-generate-analyze-and-refine-training-free-sound-source-localization-via-mllm-cvpr-2026-paper-0dc15106eb/) | [Generate, Analyze, and Refine: Training\-Free Sound Source Localization via MLLM Meta\-Reasoning](/posts/conference-cvpr-2026-conference-paper-id-park-generate-analyze-and-refine-training-free-sound-source-localization-via-mllm-cvpr-2026-paper-0dc15106eb/) | **7.8/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #声源定位 |
| 8 | [先问该听谁再解码：用自评估权重压住跨模态幻觉的 MAD](/posts/conference-cvpr-2026-conference-paper-id-chung-mad-modality-adaptive-decoding-for-mitigating-cross-modal-hallucinations-in-multimodal-large-cvpr-2026-paper-46e08eae5c/) | [MAD: Modality\-Adaptive Decoding for Mitigating Cross\-Modal Hallucinations in Multimodal Large Language Models](/posts/conference-cvpr-2026-conference-paper-id-chung-mad-modality-adaptive-decoding-for-mitigating-cross-modal-hallucinations-in-multimodal-large-cvpr-2026-paper-46e08eae5c/) | **7.7/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 1.1/1.5 · 清晰度 0.6/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音视频问答 |
| 9 | [先听清再看懂：EgoAVU 用多模态上下文图把第一视角的声音钉回可见来源](/posts/conference-cvpr-2026-conference-paper-id-seth-egoavu-egocentric-audio-visual-understanding-cvpr-2026-paper-d59abb857e/) | [EgoAVU: Egocentric Audio\-Visual Understanding](/posts/conference-cvpr-2026-conference-paper-id-seth-egoavu-egocentric-audio-visual-understanding-cvpr-2026-paper-d59abb857e/) | **7.7/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #音视频问答 |
| 10 | [只会看的第一人称模型：EgoSound 逼模型把声音听进推理里](/posts/conference-cvpr-2026-conference-paper-id-zhu-egosound-benchmarking-sound-understanding-in-egocentric-videos-cvpr-2026-paper-c03d648728/) | [EgoSound: Benchmarking Sound Understanding in Egocentric Videos](/posts/conference-cvpr-2026-conference-paper-id-zhu-egosound-benchmarking-sound-understanding-in-egocentric-videos-cvpr-2026-paper-c03d648728/) | **7.7/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #音视频问答 |
| 11 | [长叙事音频为何要先分段推理再逐段生成：AudioStory 的分工与衔接](/posts/conference-cvpr-2026-conference-paper-id-guo-audiostory-generating-long-form-narrative-audio-with-large-language-models-cvpr-2026-paper-b10529adb8/) | [AudioStory: Generating Long\-Form Narrative Audio with Large Language Models](/posts/conference-cvpr-2026-conference-paper-id-guo-audiostory-generating-long-form-narrative-audio-with-large-language-models-cvpr-2026-paper-b10529adb8/) | **7.6/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频生成 |
| 12 | [基座也缺数据时：TAPE 用任务适配空间与推理期原型演化做全少样本音频增量分类](/posts/conference-cvpr-2026-conference-paper-id-gao-tape-task-adaptive-prototype-evolution-in-audio-language-models-for-fully-few-shot-cvpr-2026-paper-acbb70ebd1/) | [TAPE: Task\-Adaptive Prototype Evolution in Audio\-Language Models for Fully Few\-shot Class\-incremental Audio Classification](/posts/conference-cvpr-2026-conference-paper-id-gao-tape-task-adaptive-prototype-evolution-in-audio-language-models-for-fully-few-shot-cvpr-2026-paper-acbb70ebd1/) | **7.5/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频分类 |
| 13 | [从固定图文对到任意交错组合：UniM 为何要同测语义结构与连贯](/posts/conference-cvpr-2026-conference-paper-id-li-unim-a-unified-any-to-any-interleaved-multimodal-benchmark-cvpr-2026-paper-e5457937b5/) | [UniM: A Unified Any\-to\-Any Interleaved Multimodal Benchmark](/posts/conference-cvpr-2026-conference-paper-id-li-unim-a-unified-any-to-any-interleaved-multimodal-benchmark-cvpr-2026-paper-e5457937b5/) | **7.5/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.2/1.5 | 前25% | 数据集与基准 | #音视频理解 |
| 14 | [声音停了之后还怎么找：连续环境语义视听导航与记忆增强目标推理](/posts/conference-cvpr-2026-conference-paper-id-zeng-semantic-audio-visual-navigation-in-continuous-environments-cvpr-2026-paper-cd3d050adb/) | [Semantic Audio\-Visual Navigation in Continuous Environments](/posts/conference-cvpr-2026-conference-paper-id-zeng-semantic-audio-visual-navigation-in-continuous-environments-cvpr-2026-paper-cd3d050adb/) | **7.5/10** · 创新 1.5/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前25% | 方法研究 | #联合声音事件检测定位 |
| 15 | [鼓面共振强、单点信噪比低：用模态把多点双轴散斑位移对齐后再反推声音](/posts/conference-cvpr-2026-conference-paper-id-bagon-hearing-the-room-through-the-shape-of-the-drum-modal-guided-cvpr-2026-paper-4ae20496f0/) | [Hearing the Room Through the Shape of the Drum: Modal\-Guided Sound Recovery from Multi\-Point Surface Vibrations](/posts/conference-cvpr-2026-conference-paper-id-bagon-hearing-the-room-through-the-shape-of-the-drum-modal-guided-cvpr-2026-paper-4ae20496f0/) | **7.4/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.4/1.5 | 前50% | 方法研究 | #音频修复 |
| 16 | [单图加文本加音频做分钟级视频：Soul 用关键帧锚定与阈值码本抑制长时漂移](/posts/conference-cvpr-2026-conference-paper-id-zhang-soul-breathe-life-into-digital-human-for-high-fidelity-long-term-multimodal-cvpr-2026-paper-370245bf99/) | [Soul: Breathe Life into Digital Human for High\-fidelity Long\-term Multimodal Animation](/posts/conference-cvpr-2026-conference-paper-id-zhang-soul-breathe-life-into-digital-human-for-high-fidelity-long-term-multimodal-cvpr-2026-paper-370245bf99/) | **7.4/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #音视频生成 |
| 17 | [粗框也要贴边、对时也要对帧：声画同步实例编辑的空间与时间分工](/posts/conference-cvpr-2026-conference-paper-id-zheng-audio-sync-video-instance-editing-with-granularity-aware-mask-refiner-cvpr-2026-paper-fa82241541/) | [Audio\-sync Video Instance Editing with Granularity\-Aware Mask Refiner](/posts/conference-cvpr-2026-conference-paper-id-zheng-audio-sync-video-instance-editing-with-granularity-aware-mask-refiner-cvpr-2026-paper-fa82241541/) | **7.4/10** · 创新 1.5/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.3/1.5 | 前50% | 方法研究 | #音视频生成 |
| 18 | [稀疏上下文下房间脉冲响应为何只能生成分布：FLAC 的多模态流匹配做法](/posts/conference-cvpr-2026-conference-paper-id-brunetto-few-shot-acoustic-synthesis-with-multimodal-flow-matching-cvpr-2026-paper-a8aab943b9/) | [Few\-shot Acoustic Synthesis with Multimodal Flow Matching](/posts/conference-cvpr-2026-conference-paper-id-brunetto-few-shot-acoustic-synthesis-with-multimodal-flow-matching-cvpr-2026-paper-a8aab943b9/) | **7.3/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.3/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #房间脉冲响应估计 |
| 19 | [不用表情图片，只用情感语音的差向量去改脸：C\-MET 的跨模态情绪编辑](/posts/conference-cvpr-2026-conference-paper-id-choi-cross-modal-emotion-transfer-for-emotion-editing-in-talking-face-video-cvpr-2026-paper-e6c0de6654/) | [Cross\-Modal Emotion Transfer for Emotion Editing in Talking Face Video](/posts/conference-cvpr-2026-conference-paper-id-choi-cross-modal-emotion-transfer-for-emotion-editing-in-talking-face-video-cvpr-2026-paper-e6c0de6654/) | **7.3/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频生成 |
| 20 | [语义冲突与任务竞争之下统一视频文本到音频生成的三段式解法](/posts/conference-cvpr-2026-conference-paper-id-dai-omni2sound-towards-unified-video-text-to-audio-generation-cvpr-2026-paper-8d449bd610/) | [Omni2Sound: Towards Unified Video\-Text\-to\-Audio Generation](/posts/conference-cvpr-2026-conference-paper-id-dai-omni2sound-towards-unified-video-text-to-audio-generation-cvpr-2026-paper-8d449bd610/) | **7.3/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 模型报告 | #视频到声音生成 |
| 21 | [看见鼓槌落下才发声：用音视频对齐的扩散变换器与语义时间偏好优化做视频生音频](/posts/conference-cvpr-2026-conference-paper-id-wang-hear-what-you-see-video-to-audio-generation-with-diffusion-transformer-and-cvpr-2026-paper-7c8864a62e/) | [Hear What You See: Video\-to\-Audio Generation with Diffusion Transformer and Semantic\-Temporal Alignment\-Ranked Direct Preference Optimization](/posts/conference-cvpr-2026-conference-paper-id-wang-hear-what-you-see-video-to-audio-generation-with-diffusion-transformer-and-cvpr-2026-paper-7c8864a62e/) | **7.3/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.3/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #视频到声音生成 |
| 22 | [看不见脸时说话人是谁：CineSRD 用视觉锚点加语音语义补齐影视对白](/posts/conference-cvpr-2026-conference-paper-id-huang-cinesrd-leveraging-visual-acoustic-and-linguistic-cues-for-open-world-visual-cvpr-2026-paper-3583d6daa1/) | [CineSRD: Leveraging Visual, Acoustic, and Linguistic Cues for Open\-World Visual Media Speaker Diarization](/posts/conference-cvpr-2026-conference-paper-id-huang-cinesrd-leveraging-visual-acoustic-and-linguistic-cues-for-open-world-visual-cvpr-2026-paper-3583d6daa1/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #说话人分离标注 |
| 23 | [一张图如何长出可走可听的三维声景：SonoWorld 的定位与空间化链路](/posts/conference-cvpr-2026-conference-paper-id-jin-sonoworld-from-one-image-to-a-3d-audio-visual-scene-cvpr-2026-paper-737c7c9dbd/) | [SonoWorld: From One Image to a 3D Audio\-Visual Scene](/posts/conference-cvpr-2026-conference-paper-id-jin-sonoworld-from-one-image-to-a-3d-audio-visual-scene-cvpr-2026-paper-737c7c9dbd/) | **7.2/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #音视频生成 |
| 24 | [先分清冗余与噪声，再按输入调节瓶颈：SeD\-UD 的分层解耦信息瓶颈](/posts/conference-cvpr-2026-conference-paper-id-li-sed-ud-an-influence-driven-and-hierarchically-decoupled-information-bottleneck-for-multimodal-intent-cvpr-2026-paper-9cdc427f4a/) | [SeD\-UD: An Influence\-Driven and Hierarchically\-Decoupled Information Bottleneck for Multimodal Intent Recognition](/posts/conference-cvpr-2026-conference-paper-id-li-sed-ud-an-influence-driven-and-hierarchically-decoupled-information-bottleneck-for-multimodal-intent-cvpr-2026-paper-9cdc427f4a/) | **7.2/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #口语意图与槽位识别 |
| 25 | [不重训语音大模型，用无声图文与门控交叉注意力教它看图说话](/posts/conference-cvpr-2026-conference-paper-id-royer-vision-speech-models-teaching-speech-models-to-converse-about-images-cvpr-2026-paper-e94d4439be/) | [Vision\-Speech Models: Teaching Speech Models to Converse about Images](/posts/conference-cvpr-2026-conference-paper-id-royer-vision-speech-models-teaching-speech-models-to-converse-about-images-cvpr-2026-paper-e94d4439be/) | **7.2/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.9/1 · 影响力 1.0/1.5 · 开源 0.5/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 模型报告 | #音视频交互 |
| 26 | [电影混音三轨分离：用脸与场景两路视觉约束生成式分离](/posts/conference-cvpr-2026-conference-paper-id-zhang-cinematic-audio-source-separation-using-visual-cues-cvpr-2026-paper-a235892c6e/) | [Cinematic Audio Source Separation Using Visual Cues](/posts/conference-cvpr-2026-conference-paper-id-zhang-cinematic-audio-source-separation-using-visual-cues-cvpr-2026-paper-a235892c6e/) | **7.2/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频声源分离 |
| 27 | [人声与人脸为何总对不上：用不对称时间窗口重建音画同步](/posts/conference-cvpr-2026-conference-paper-id-zhang-uniavgen-unified-audio-and-video-generation-with-asymmetric-cross-modal-interactions-cvpr-2026-paper-f6bcbb6891/) | [UniAVGen: Unified Audio and Video Generation with Asymmetric Cross\-Modal Interactions](/posts/conference-cvpr-2026-conference-paper-id-zhang-uniavgen-unified-audio-and-video-generation-with-asymmetric-cross-modal-interactions-cvpr-2026-paper-f6bcbb6891/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频生成 |
| 28 | [画面内外都要出声：OmniSonic 如何把语音和环境声放在同一视频里生成](/posts/conference-cvpr-2026-conference-paper-id-pian-omnisonic-towards-universal-and-holistic-audio-generation-from-video-and-cvpr-2026-paper-e3d07ff5eb/) | [OmniSonic: Towards Universal and Holistic Audio Generation from Video and Text](/posts/conference-cvpr-2026-conference-paper-id-pian-omnisonic-towards-universal-and-holistic-audio-generation-from-video-and-cvpr-2026-paper-e3d07ff5eb/) | **7.1/10** · 创新 1.6/2 · 技术严谨 1.3/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 0.9/1.5 | 前50% | 方法研究 | #视频到声音生成 |
| 29 | [只听见声音不够：当语义对不上时用双耳空间线索做视听推理](/posts/conference-cvpr-2026-conference-paper-id-ryu-hear-you-are-teaching-llms-spatial-reasoning-with-vision-and-cvpr-2026-paper-5f57a24666/) | [Hear you are: Teaching LLMs Spatial Reasoning with Vision and Spatial Sound](/posts/conference-cvpr-2026-conference-paper-id-ryu-hear-you-are-teaching-llms-spatial-reasoning-with-vision-and-cvpr-2026-paper-5f57a24666/) | **7.1/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.5/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音视频问答 |
| 30 | [情绪语音为何更难对齐：用结构先验把口型与情绪分开建模](/posts/conference-cvpr-2026-conference-paper-id-xu-emotag-emotion-aware-talking-head-synthesis-on-gaussian-splatting-with-few-shot-cvpr-2026-paper-a0ca0e5eff/) | [EmoTaG: Emotion\-Aware Talking Head Synthesis on Gaussian Splatting with Few\-Shot Personalization](/posts/conference-cvpr-2026-conference-paper-id-xu-emotag-emotion-aware-talking-head-synthesis-on-gaussian-splatting-with-few-shot-cvpr-2026-paper-a0ca0e5eff/) | **7.1/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #音视频生成 |
| 31 | [把长相交给参考图：参考引导深度压缩如何让说话人像视频实时可流式生成](/posts/conference-cvpr-2026-conference-paper-id-xu-real-time-generation-of-streamable-talking-portrait-video-with-reference-guided-deep-cvpr-2026-paper-24acc49f71/) | [Real\-Time Generation of Streamable Talking Portrait Video with Reference\-Guided Deep Compression VAEs](/posts/conference-cvpr-2026-conference-paper-id-xu-real-time-generation-of-streamable-talking-portrait-video-with-reference-guided-deep-cvpr-2026-paper-24acc49f71/) | **7.1/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.4/1.5 | 前50% | 方法研究 | #音视频生成 |
| 32 | [从听见对准到记住行动：HAVE\-Bench 用三层结构测音频视觉模型](/posts/conference-cvpr-2026-conference-paper-id-zhong-have-bench-hierarchical-audio-visual-evaluation-from-perception-to-interaction-cvpr-2026-paper-666768947c/) | [HAVE\-Bench: Hierarchical Audio\-Visual Evaluation from Perception to Interaction](/posts/conference-cvpr-2026-conference-paper-id-zhong-have-bench-hierarchical-audio-visual-evaluation-from-perception-to-interaction-cvpr-2026-paper-666768947c/) | **7.1/10** · 创新 1.5/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.1/1.5 | 前50% | 数据集与基准 | #音视频问答 |
| 33 | [用不相关扰动不变、相关损坏敏感拆开音视频：MoD\-DPO 如何压制跨模态幻觉](/posts/conference-cvpr-2026-conference-paper-id-chaubey-mod-dpo-towards-mitigating-cross-modal-hallucinations-in-omni-llms-using-modality-cvpr-2026-paper-f9233ed777/) | [MoD\-DPO: Towards Mitigating Cross\-modal Hallucinations in Omni LLMs using Modality Decoupled Preference Optimization](/posts/conference-cvpr-2026-conference-paper-id-chaubey-mod-dpo-towards-mitigating-cross-modal-hallucinations-in-omni-llms-using-modality-cvpr-2026-paper-f9233ed777/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #音视频问答 |
| 34 | [同时去噪的音视频为何对不齐：Harmony 用跨任务监督稳住对应关系](/posts/conference-cvpr-2026-conference-paper-id-hu-harmony-harmonizing-audio-and-video-generation-through-cross-task-synergy-cvpr-2026-paper-49f9ccfa63/) | [Harmony: Harmonizing Audio and Video Generation through Cross\-Task Synergy](/posts/conference-cvpr-2026-conference-paper-id-hu-harmony-harmonizing-audio-and-video-generation-through-cross-task-synergy-cvpr-2026-paper-49f9ccfa63/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频生成 |
| 35 | [压缩而不丢失细节：OmniRet 如何同时解决三模态检索的效率与保真矛盾](/posts/conference-cvpr-2026-conference-paper-id-huynh-efficient-and-high-fidelity-omni-modality-retrieval-cvpr-2026-paper-6333a25de1/) | [Efficient and High\-Fidelity Omni Modality Retrieval](/posts/conference-cvpr-2026-conference-paper-id-huynh-efficient-and-high-fidelity-omni-modality-retrieval-cvpr-2026-paper-6333a25de1/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频检索 |
| 36 | [从整轨配音到逐事件导演：EchoFoley 用符号事件表约束何时何物如何发声](/posts/conference-cvpr-2026-conference-paper-id-li-echofoley-event-centric-hierarchical-control-for-video-grounded-creative-sound-generation-cvpr-2026-paper-e5e200c0d1/) | [EchoFoley: Event\-Centric Hierarchical Control for Video Grounded Creative Sound Generation](/posts/conference-cvpr-2026-conference-paper-id-li-echofoley-event-centric-hierarchical-control-for-video-grounded-creative-sound-generation-cvpr-2026-paper-e5e200c0d1/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.2/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #视频到声音生成 |
| 37 | [当画面给不出声音线索时，导演脚本如何逐秒指挥视频生音频](/posts/conference-cvpr-2026-conference-paper-id-li-foleydirector-fine-grained-temporal-steering-for-video-to-audio-generation-via-structured-scripts-cvpr-2026-paper-57eadc699d/) | [FoleyDirector: Fine\-Grained Temporal Steering for Video\-to\-Audio Generation via Structured Scripts](/posts/conference-cvpr-2026-conference-paper-id-li-foleydirector-fine-grained-temporal-steering-for-video-to-audio-generation-via-structured-scripts-cvpr-2026-paper-57eadc699d/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #视频到声音生成 |
| 38 | [合成数据能替代、修正再扩展声源定位训练吗](/posts/conference-cvpr-2026-conference-paper-id-senocak-how-far-can-we-go-with-synthetic-data-for-audio-visual-cvpr-2026-paper-883c5d057d/) | [How Far Can We Go With Synthetic Data for Audio\-Visual Sound Source Localization?](/posts/conference-cvpr-2026-conference-paper-id-senocak-how-far-can-we-go-with-synthetic-data-for-audio-visual-cvpr-2026-paper-883c5d057d/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.1/1.5 | 前50% | 方法研究 | #声源定位 |
| 39 | [稀疏线索与异步冲突下，如何让情绪分析先取证再推理](/posts/conference-cvpr-2026-conference-paper-id-xu-emothinker-advancing-visual-acoustic-emotion-analysis-via-structural-token-selection-and-cvpr-2026-paper-b2ccbadc5c/) | [EmoThinker: Advancing Visual\-Acoustic Emotion Analysis via Structural Token Selection and Chain\-of\-Thought Reasoning](/posts/conference-cvpr-2026-conference-paper-id-xu-emothinker-advancing-visual-acoustic-emotion-analysis-via-structural-token-selection-and-cvpr-2026-paper-b2ccbadc5c/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.3/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 40 | [把七种模态塞进一个自回归模型：Archon 用语义视频与模态链思考做整人生成](/posts/conference-cvpr-2026-conference-paper-id-bao-archon-a-unified-multimodal-model-for-holistic-digital-human-generation-cvpr-2026-paper-3ba87baecb/) | [Archon: A Unified Multimodal Model for Holistic Digital Human Generation](/posts/conference-cvpr-2026-conference-paper-id-bao-archon-a-unified-multimodal-model-for-holistic-digital-human-generation-cvpr-2026-paper-3ba87baecb/) | **6.9/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 模型报告 | #音视频生成 |
| 41 | [倾听塌缩的拆解：先学自发先验再用双轨音频调制的 UniLS](/posts/conference-cvpr-2026-conference-paper-id-chu-unils-end-to-end-audio-driven-avatars-for-unified-listening-and-speaking-cvpr-2026-paper-4cef4e390b/) | [UniLS: End\-to\-End Audio\-Driven Avatars for Unified Listening and Speaking](/posts/conference-cvpr-2026-conference-paper-id-chu-unils-end-to-end-audio-driven-avatars-for-unified-listening-and-speaking-cvpr-2026-paper-4cef4e390b/) | **6.9/10** · 创新 1.5/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频交互 |
| 42 | [看得见撞击，还要听得出轻重：PAVAS 把质量与速度写进视频生音频](/posts/conference-cvpr-2026-conference-paper-id-hyun-bin-pavas-physics-aware-video-to-audio-synthesis-cvpr-2026-paper-2d449bdf3c/) | [PAVAS: Physics\-Aware Video\-to\-Audio Synthesis](/posts/conference-cvpr-2026-conference-paper-id-hyun-bin-pavas-physics-aware-video-to-audio-synthesis-cvpr-2026-paper-2d449bdf3c/) | **6.9/10** · 创新 1.6/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #视频到声音生成 |
| 43 | [不只看脸像不像：用生成器内部的声音嘴型对齐信号抓伪造](/posts/conference-cvpr-2026-conference-paper-id-kim-x-avdt-audio-visual-cross-attention-for-robust-deepfake-detection-cvpr-2026-paper-9fd73e1735/) | [X\-AVDT: Audio\-Visual Cross\-Attention for Robust Deepfake Detection](/posts/conference-cvpr-2026-conference-paper-id-kim-x-avdt-audio-visual-cross-attention-for-robust-deepfake-detection-cvpr-2026-paper-9fd73e1735/) | **6.9/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 方法研究 | #音频深度伪造检测 |
| 44 | [只听指定的那一个：文本如何从混合画面中挑出目标声音](/posts/conference-cvpr-2026-conference-paper-id-lee-hear-what-matters-text-conditioned-selective-video-to-audio-generation-cvpr-2026-paper-6c63689f44/) | [Hear What Matters\! Text\-conditioned Selective Video\-to\-Audio Generation](/posts/conference-cvpr-2026-conference-paper-id-lee-hear-what-matters-text-conditioned-selective-video-to-audio-generation-cvpr-2026-paper-6c63689f44/) | **6.9/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #视频到声音生成 |
| 45 | [不用反演找噪声：以视觉氛围与音高约束同时改风格、保旋律](/posts/conference-cvpr-2026-conference-paper-id-lei-harmonic-canvas-inversion-free-editing-for-visually-guided-music-style-transfer-cvpr-2026-paper-223bf76a09/) | [Harmonic Canvas: Inversion\-Free Editing for Visually\-Guided Music Style Transfer](/posts/conference-cvpr-2026-conference-paper-id-lei-harmonic-canvas-inversion-free-editing-for-visually-guided-music-style-transfer-cvpr-2026-paper-223bf76a09/) | **6.9/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 方法研究 | #音乐生成 |
| 46 | [把叫声、照片和学名对齐到同一空间：BioVITA 的三模态生物表征路线](/posts/conference-cvpr-2026-conference-paper-id-shinoda-biovita-biological-dataset-model-and-benchmark-for-visual-textual-acoustic-alignment-cvpr-2026-paper-b00530c349/) | [BioVITA: Biological Dataset, Model, and Benchmark for Visual\-Textual\-Acoustic Alignment](/posts/conference-cvpr-2026-conference-paper-id-shinoda-biovita-biological-dataset-model-and-benchmark-for-visual-textual-acoustic-alignment-cvpr-2026-paper-b00530c349/) | **6.9/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频检索 |
| 47 | [听到鸟叫不画鸟：为环境声景生成地理一致的街景](/posts/conference-cvpr-2026-conference-paper-id-wang-soundit-geo-contextual-soundscape-to-landscape-generation-cvpr-2026-paper-338705735b/) | [SounDiT: Geo\-Contextual Soundscape\-to\-Landscape Generation](/posts/conference-cvpr-2026-conference-paper-id-wang-soundit-geo-contextual-soundscape-to-landscape-generation-cvpr-2026-paper-338705735b/) | **6.9/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频生成 |
| 48 | [同步声画为何难评：VABench 用三任务十五维卡住语义与对齐](/posts/conference-cvpr-2026-conference-paper-id-hua-vabench-a-comprehensive-benchmark-for-audio-video-generation-cvpr-2026-paper-f281e08824/) | [VABench: A Comprehensive Benchmark for Audio\-Video Generation](/posts/conference-cvpr-2026-conference-paper-id-hua-vabench-a-comprehensive-benchmark-for-audio-video-generation-cvpr-2026-paper-f281e08824/) | **6.8/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #音视频生成 |
| 49 | [视频会议为何让视听语音识别崩溃：传输失真与过度表达的双重漂移](/posts/conference-cvpr-2026-conference-paper-id-huang-when-avsr-meets-video-conferencing-dataset-degradation-and-the-hidden-cvpr-2026-paper-6dfa145fa1/) | [When AVSR Meets Video Conferencing: Dataset, Degradation, and the Hidden Mechanism Behind Performance Collapse](/posts/conference-cvpr-2026-conference-paper-id-huang-when-avsr-meets-video-conferencing-dataset-degradation-and-the-hidden-cvpr-2026-paper-6dfa145fa1/) | **6.8/10** · 创新 1.6/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音视频语音识别 |
| 50 | [看听推理不断线：AVATAR 用离线复用与首尾加权修补 GRPO](/posts/conference-cvpr-2026-conference-paper-id-kulkarni-avatar-reinforcement-learning-to-see-hear-and-reason-over-video-cvpr-2026-paper-3adff183d6/) | [AVATAR: Reinforcement Learning to See, Hear, and Reason Over Video](/posts/conference-cvpr-2026-conference-paper-id-kulkarni-avatar-reinforcement-learning-to-see-hear-and-reason-over-video-cvpr-2026-paper-3adff183d6/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频问答 |
| 51 | [四模态同判：Omni\-Fake 把检测、定位与解释放进同一基准与同一模型](/posts/conference-cvpr-2026-conference-paper-id-li-omni-fake-benchmarking-unified-multimodal-social-media-deepfake-detection-cvpr-2026-paper-236f719c38/) | [Omni\-Fake: Benchmarking Unified Multimodal Social Media Deepfake Detection](/posts/conference-cvpr-2026-conference-paper-id-li-omni-fake-benchmarking-unified-multimodal-social-media-deepfake-detection-cvpr-2026-paper-236f719c38/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频深度伪造检测 |
| 52 | [从原始音视频算起：用参考锚定身份再推理社交指向](/posts/conference-cvpr-2026-conference-paper-id-li-omni-mmsi-toward-identity-attributed-social-interaction-understanding-cvpr-2026-paper-1922d3703e/) | [Omni\-MMSI: Toward Identity\-attributed Social Interaction Understanding](/posts/conference-cvpr-2026-conference-paper-id-li-omni-mmsi-toward-identity-attributed-social-interaction-understanding-cvpr-2026-paper-1922d3703e/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频理解 |
| 53 | [短训长测：用分层路由与非因果 Mamba 做长视频配音](/posts/conference-cvpr-2026-conference-paper-id-simon-echoes-over-time-unlocking-length-generalization-in-video-to-audio-generation-models-cvpr-2026-paper-3f6ed59b04/) | [Echoes Over Time: Unlocking Length Generalization in Video\-to\-Audio Generation Models](/posts/conference-cvpr-2026-conference-paper-id-simon-echoes-over-time-unlocking-length-generalization-in-video-to-audio-generation-models-cvpr-2026-paper-3f6ed59b04/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.1/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #视频到声音生成 |
| 54 | [把重建和对齐分开做：教师引导的双路径如何减少语义噪声](/posts/conference-cvpr-2026-conference-paper-id-wang-semantic-noise-reduction-via-teacher-guided-dual-path-audio-visual-representation-learning-cvpr-2026-paper-e1e8187c55/) | [Semantic Noise Reduction via Teacher\-Guided Dual\-Path Audio\-Visual Representation Learning](/posts/conference-cvpr-2026-conference-paper-id-wang-semantic-noise-reduction-via-teacher-guided-dual-path-audio-visual-representation-learning-cvpr-2026-paper-e1e8187c55/) | **6.8/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频检索 |
| 55 | [按语音层级拆开看：低层管内容音色、高层管韵律的视频到语音生成](/posts/conference-cvpr-2026-conference-paper-id-ye-hierarchical-codec-diffusion-for-video-to-speech-generation-cvpr-2026-paper-d2b01d2da3/) | [Hierarchical Codec Diffusion for Video\-to\-Speech Generation](/posts/conference-cvpr-2026-conference-paper-id-ye-hierarchical-codec-diffusion-for-video-to-speech-generation-cvpr-2026-paper-d2b01d2da3/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频语音合成 |
| 56 | [长视频不止于切分检索：用视听实体黏合与分层索引保持叙事连贯](/posts/conference-cvpr-2026-conference-paper-id-yin-hierarchical-long-video-understanding-with-audiovisual-entity-cohesion-and-agentic-cvpr-2026-paper-ff21cd1b8d/) | [Hierarchical Long Video Understanding with Audiovisual Entity Cohesion and Agentic Search](/posts/conference-cvpr-2026-conference-paper-id-yin-hierarchical-long-video-understanding-with-audiovisual-entity-cohesion-and-agentic-cvpr-2026-paper-ff21cd1b8d/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频问答 |
| 57 | [不只把话说对，还要动得对：ViBES 如何联合规划语言与身体](/posts/conference-cvpr-2026-conference-paper-id-zhang-vibes-a-conversational-agent-with-behaviorally-intelligent-3d-virtual-body-cvpr-2026-paper-8fcc17fc2a/) | [ViBES: A Conversational Agent with Behaviorally\-Intelligent 3D Virtual Body](/posts/conference-cvpr-2026-conference-paper-id-zhang-vibes-a-conversational-agent-with-behaviorally-intelligent-3d-virtual-body-cvpr-2026-paper-8fcc17fc2a/) | **6.8/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 模型报告 | #语音对话系统 |
| 58 | [只给整段真假标签，如何找回伪造片段的起止时间](/posts/conference-cvpr-2026-conference-paper-id-zhu-gem-tfl-bridging-weak-and-full-supervision-for-forgery-localization-through-cvpr-2026-paper-a1446b8786/) | [GEM\-TFL: Bridging Weak and Full Supervision for Forgery Localization through EM\-Guided Decomposition and Temporal Refinement](/posts/conference-cvpr-2026-conference-paper-id-zhu-gem-tfl-bridging-weak-and-full-supervision-for-forgery-localization-through-cvpr-2026-paper-a1446b8786/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频伪造检测 |
| 59 | [先增强弱模态再拉平贡献：EBMC 如何缓解文本主导的多模态情感竞争](/posts/conference-cvpr-2026-conference-paper-id-he-enhance-then-balance-modality-collaboration-for-robust-multimodal-sentiment-analysis-cvpr-2026-paper-55f176858f/) | [Enhance\-then\-Balance Modality Collaboration for Robust Multimodal Sentiment Analysis](/posts/conference-cvpr-2026-conference-paper-id-he-enhance-then-balance-modality-collaboration-for-robust-multimodal-sentiment-analysis-cvpr-2026-paper-55f176858f/) | **6.7/10** · 创新 1.3/2 · 技术严谨 0.8/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 60 | [看得见证据才算会判：TriDF 把感知、判定与幻觉拆开考](/posts/conference-cvpr-2026-conference-paper-id-jiang-lin-tridf-evaluating-perception-detection-and-hallucination-for-interpretable-deepfake-detection-cvpr-2026-paper-b90fd717fe/) | [TriDF: Evaluating Perception, Detection, and Hallucination for Interpretable DeepFake Detection](/posts/conference-cvpr-2026-conference-paper-id-jiang-lin-tridf-evaluating-perception-detection-and-hallucination-for-interpretable-deepfake-detection-cvpr-2026-paper-b90fd717fe/) | **6.7/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频深度伪造检测 |
| 61 | [数数为何最难统一：跨图像文本音频的三级计数基准](/posts/conference-cvpr-2026-conference-paper-id-rong-unicbench-unified-counting-benchmark-for-mllm-cvpr-2026-paper-3e0a84dcba/) | [UNICBench: UNIfied Counting Benchmark for MLLM](/posts/conference-cvpr-2026-conference-paper-id-rong-unicbench-unified-counting-benchmark-for-mllm-cvpr-2026-paper-3e0a84dcba/) | **6.7/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #音频问答 |
| 62 | [强监督从哪里来：用高质量描述重建语音音乐环境声的统一标签](/posts/conference-cvpr-2026-conference-paper-id-zhou-unlocking-strong-supervision-a-data-centric-study-of-general-purpose-audio-pre-training-cvpr-2026-paper-3e61b8d2c9/) | [Unlocking Strong Supervision: A Data\-Centric Study of General\-Purpose Audio Pre\-Training Methods](/posts/conference-cvpr-2026-conference-paper-id-zhou-unlocking-strong-supervision-a-data-centric-study-of-general-purpose-audio-pre-training-cvpr-2026-paper-3e61b8d2c9/) | **6.7/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频分类 |
| 63 | [不做迭代生成：用一次重建加音频到姿态解耦做实时唇同步](/posts/conference-cvpr-2026-conference-paper-id-zinonos-flashlips-100-fps-mask-free-latent-lip-sync-using-reconstruction-instead-of-diffusion-cvpr-2026-paper-01961d5de8/) | [FlashLips: 100\-FPS Mask\-Free Latent Lip\-Sync using Reconstruction Instead of Diffusion or GANs](/posts/conference-cvpr-2026-conference-paper-id-zinonos-flashlips-100-fps-mask-free-latent-lip-sync-using-reconstruction-instead-of-diffusion-cvpr-2026-paper-01961d5de8/) | **6.7/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #语音配音 |
| 64 | [用手势字幕补上语义：CoordSpeaker 如何让说话人边说边做指定动作](/posts/conference-cvpr-2026-conference-paper-id-fang-coordspeaker-exploiting-gesture-captioning-for-coordinated-caption-empowered-co-speech-gesture-generation-cvpr-2026-paper-3c82aef454/) | [CoordSpeaker: Exploiting Gesture Captioning for Coordinated Caption\-Empowered Co\-Speech Gesture Generation](/posts/conference-cvpr-2026-conference-paper-id-fang-coordspeaker-exploiting-gesture-captioning-for-coordinated-caption-empowered-co-speech-gesture-generation-cvpr-2026-paper-3c82aef454/) | **6.6/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频生成 |
| 65 | [从一路混合音频生成面对面双人 3D 对话：空间、注视与轮流如何被建模](/posts/conference-cvpr-2026-conference-paper-id-shan-talking-together-synthesizing-co-located-3d-conversations-from-audio-cvpr-2026-paper-bc500f524a/) | [Talking Together: Synthesizing Co\-Located 3D Conversations from Audio](/posts/conference-cvpr-2026-conference-paper-id-shan-talking-together-synthesizing-co-located-3d-conversations-from-audio-cvpr-2026-paper-bc500f524a/) | **6.6/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频生成 |
| 66 | [用婴儿两年的所见所闻，能否从零训练出会看会说的视觉基础模型](/posts/conference-cvpr-2026-conference-paper-id-wang-babyvlm-v2-toward-developmentally-grounded-pretraining-and-benchmarking-of-vision-foundation-cvpr-2026-paper-e3a0612996/) | [BabyVLM\-V2: Toward Developmentally Grounded Pretraining and Benchmarking of Vision Foundation Models](/posts/conference-cvpr-2026-conference-paper-id-wang-babyvlm-v2-toward-developmentally-grounded-pretraining-and-benchmarking-of-vision-foundation-cvpr-2026-paper-e3a0612996/) | **6.6/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音视频理解 |
| 67 | [先降噪再分割：用自监督音频增强与动态原型约束弥合音视语义鸿沟](/posts/conference-cvpr-2026-conference-paper-id-zhang-bootstrap-your-own-av-proxies-adaptive-contrastive-and-prototype-learning-for-cvpr-2026-paper-4f115f2247/) | [Bootstrap Your Own AV\-Proxies: Adaptive Contrastive and Prototype Learning for Audio\-Visual Segmentation](/posts/conference-cvpr-2026-conference-paper-id-zhang-bootstrap-your-own-av-proxies-adaptive-contrastive-and-prototype-learning-for-cvpr-2026-paper-4f115f2247/) | **6.6/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音视频理解 |
| 68 | [语音一说就信？SVHalluc 检验语音与画面是否真的对上](/posts/conference-cvpr-2026-conference-paper-id-zhang-svhalluc-benchmarking-speech-vision-hallucination-in-audio-visual-large-language-models-cvpr-2026-paper-c302fe8c63/) | [SVHalluc: Benchmarking Speech\-Vision Hallucination in Audio\-Visual Large Language Models](/posts/conference-cvpr-2026-conference-paper-id-zhang-svhalluc-benchmarking-speech-vision-hallucination-in-audio-visual-large-language-models-cvpr-2026-paper-c302fe8c63/) | **6.6/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 数据集与基准 | #音视频问答 |
| 69 | [一个模型压七种数据：OmniZip 以统一分词加稀疏路由做轻量无损压缩](/posts/conference-cvpr-2026-conference-paper-id-zhao-omnizip-learning-a-unified-and-lightweight-lossless-compressor-for-multi-modal-cvpr-2026-paper-73e37d81df/) | [OmniZip: Learning a Unified and Lightweight Lossless Compressor for Multi\-Modal Data](/posts/conference-cvpr-2026-conference-paper-id-zhao-omnizip-learning-a-unified-and-lightweight-lossless-compressor-for-multi-modal-cvpr-2026-paper-73e37d81df/) | **6.6/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.3/1.5 · 清晰度 0.8/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #语音编码 |
| 70 | [边听边说还不能卡：用因果扩散迫使头像实时接住用户](/posts/conference-cvpr-2026-conference-paper-id-ki-avatar-forcing-real-time-interactive-head-avatar-generation-for-natural-conversation-cvpr-2026-paper-937e84f299/) | [Avatar Forcing: Real\-Time Interactive Head Avatar Generation for Natural Conversation](/posts/conference-cvpr-2026-conference-paper-id-ki-avatar-forcing-real-time-interactive-head-avatar-generation-for-natural-conversation-cvpr-2026-paper-937e84f299/) | **6.5/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频交互 |
| 71 | [数得准还要指得出：长视频线索级音视计数的基准与能力迁移训练](/posts/conference-cvpr-2026-conference-paper-id-lu-av-reasoner-improving-and-benchmarking-clue-grounded-audio-visual-counting-for-mllms-cvpr-2026-paper-209f321d32/) | [AV\-Reasoner: Improving and Benchmarking Clue\-Grounded Audio\-Visual Counting for MLLMs](/posts/conference-cvpr-2026-conference-paper-id-lu-av-reasoner-improving-and-benchmarking-clue-grounded-audio-visual-counting-for-mllms-cvpr-2026-paper-209f321d32/) | **6.5/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音视频问答 |
| 72 | [不靠姿态骨架：用文本管动作、用音频管节奏的说话人像生成](/posts/conference-cvpr-2026-conference-paper-id-nazarieh-syncdreamer-controllable-and-expressive-avatar-generation-beyond-the-talking-head-cvpr-2026-paper-7ce88c19cd/) | [SyncDreamer: Controllable and Expressive Avatar Generation Beyond the Talking Head](/posts/conference-cvpr-2026-conference-paper-id-nazarieh-syncdreamer-controllable-and-expressive-avatar-generation-beyond-the-talking-head-cvpr-2026-paper-7ce88c19cd/) | **6.5/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音视频生成 |
| 73 | [跨模态检索错位与单跳知识太浅：用多跳图加两步剪枝补齐音视频问答证据](/posts/conference-cvpr-2026-conference-paper-id-park-m3kg-rag-multi-hop-multimodal-knowledge-graph-enhanced-retrieval-augmented-generation-cvpr-2026-paper-9b267bd023/) | [M^3KG\-RAG: Multi\-hop Multimodal Knowledge Graph\-enhanced Retrieval\-Augmented Generation](/posts/conference-cvpr-2026-conference-paper-id-park-m3kg-rag-multi-hop-multimodal-knowledge-graph-enhanced-retrieval-augmented-generation-cvpr-2026-paper-9b267bd023/) | **6.5/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频问答 |
| 74 | [在嘴型与动作抢注意力时，如何让化身在正确时间做正确动作](/posts/conference-cvpr-2026-conference-paper-id-peng-actavatar-temporally-aware-precise-action-control-for-talking-avatars-cvpr-2026-paper-55605b8888/) | [ActAvatar: Temporally\-Aware Precise Action Control for Talking Avatars](/posts/conference-cvpr-2026-conference-paper-id-peng-actavatar-temporally-aware-precise-action-control-for-talking-avatars-cvpr-2026-paper-55605b8888/) | **6.5/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频生成 |
| 75 | [不对称伪造下为何要先估一致性再分配计算：IaMSB 的三段桥](/posts/conference-cvpr-2026-conference-paper-id-xiong-inconsistency-aware-multimodal-schrodinger-bridge-for-deepfake-localization-cvpr-2026-paper-f7cc424e6f/) | [Inconsistency\-aware Multimodal Schrodinger Bridge for Deepfake Localization](/posts/conference-cvpr-2026-conference-paper-id-xiong-inconsistency-aware-multimodal-schrodinger-bridge-for-deepfake-localization-cvpr-2026-paper-f7cc424e6f/) | **6.5/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.6/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 方法研究 | #音频深度伪造检测 |
| 76 | [跨模态一致反而更难查：RAVM 用多智能体伪造现实感视频谣言并以证据图检测](/posts/conference-cvpr-2026-conference-paper-id-zhang-vmd-fact-a-new-video-dataset-and-mllm-based-method-for-detecting-cvpr-2026-paper-12f4871989/) | [VMD\-FACT: A New Video Dataset and MLLM\-based method for Detecting Realistic AI\-Generated Video Misinformation](/posts/conference-cvpr-2026-conference-paper-id-zhang-vmd-fact-a-new-video-dataset-and-mllm-based-method-for-detecting-cvpr-2026-paper-12f4871989/) | **6.5/10** · 创新 1.6/2 · 技术严谨 1.3/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音视频理解 |
| 77 | [不暴力看全片：用跨模态预测逼模型补全听觉与视觉](/posts/conference-cvpr-2026-conference-paper-id-cao-enhancing-video-vision-language-model-with-hippocampal-sensing-cvpr-2026-paper-075cd26b8c/) | [Enhancing Video Vision Language Model with Hippocampal Sensing](/posts/conference-cvpr-2026-conference-paper-id-cao-enhancing-video-vision-language-model-with-hippocampal-sensing-cvpr-2026-paper-075cd26b8c/) | **6.4/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频问答 |
| 78 | [绕开姿态瓶颈：用音频直驱三维高斯粒子的全身说话人](/posts/conference-cvpr-2026-conference-paper-id-lee-audioavatar-personalized-audio-driven-whole-body-talking-avatars-cvpr-2026-paper-27ed1fcc52/) | [AudioAvatar: Personalized Audio\-driven Whole\-body Talking Avatars](/posts/conference-cvpr-2026-conference-paper-id-lee-audioavatar-personalized-audio-driven-whole-body-talking-avatars-cvpr-2026-paper-27ed1fcc52/) | **6.4/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频生成 |
| 79 | [不等未来语音：MIBURI 如何用对话模型的内部 token 流直接生成全身手势](/posts/conference-cvpr-2026-conference-paper-id-mughal-miburi-towards-expressive-interactive-gesture-synthesis-cvpr-2026-paper-94e8569395/) | [MIBURI: Towards Expressive Interactive Gesture Synthesis](/posts/conference-cvpr-2026-conference-paper-id-mughal-miburi-towards-expressive-interactive-gesture-synthesis-cvpr-2026-paper-94e8569395/) | **6.4/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #音视频生成 |
| 80 | [从网上视频到可控舞蹈：OpenDance 用解耦词元与联合掩码统一音乐加空间加文本控制](/posts/conference-cvpr-2026-conference-paper-id-zhang-opendance-multimodal-controllable-3d-dance-generation-with-large-scale-internet-data-cvpr-2026-paper-14d4a3e6bf/) | [OpenDance: Multimodal Controllable 3D Dance Generation with Large\-scale Internet Data](/posts/conference-cvpr-2026-conference-paper-id-zhang-opendance-multimodal-controllable-3d-dance-generation-with-large-scale-internet-data-cvpr-2026-paper-14d4a3e6bf/) | **6.4/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.6/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音乐生成 |
| 81 | [先想再动再说：U\-Mind 用文本先行统一语言语音动作的实时交互](/posts/conference-cvpr-2026-conference-paper-id-deng-u-mind-a-unified-framework-for-real-time-multimodal-interaction-with-audiovisual-cvpr-2026-paper-acd2aefd19/) | [U\-Mind: A Unified Framework for Real\-Time Multimodal Interaction with Audiovisual Generation](/posts/conference-cvpr-2026-conference-paper-id-deng-u-mind-a-unified-framework-for-real-time-multimodal-interaction-with-audiovisual-cvpr-2026-paper-acd2aefd19/) | **6.3/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 系统技术报告 | #音视频交互 |
| 82 | [把重叠声场拆开再对齐：FoleyDesigner 如何做时空可控的立体声拟音](/posts/conference-cvpr-2026-conference-paper-id-li-foleydesigner-immersive-stereo-foley-generation-with-precise-spatio-temporal-alignment-for-cvpr-2026-paper-24f6de3aa0/) | [FoleyDesigner: Immersive Stereo Foley Generation with Precise Spatio\-Temporal Alignment for Film Clips](/posts/conference-cvpr-2026-conference-paper-id-li-foleydesigner-immersive-stereo-foley-generation-with-precise-spatio-temporal-alignment-for-cvpr-2026-paper-24f6de3aa0/) | **6.3/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #视频到声音生成 |
| 83 | [长视频越播越走样：先定低分辨率动作再用姿态锚定外观的音频驱动动画](/posts/conference-cvpr-2026-conference-paper-id-li-infinityhuman-towards-long-term-audio-driven-human-animation-cvpr-2026-paper-ca3cfd6ba8/) | [InfinityHuman: Towards Long\-Term Audio\-Driven Human Animation](/posts/conference-cvpr-2026-conference-paper-id-li-infinityhuman-towards-long-term-audio-driven-human-animation-cvpr-2026-paper-ca3cfd6ba8/) | **6.3/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频生成 |
| 84 | [二分容器装不下成对线索：用三子空间为模态对单独留位置](/posts/conference-cvpr-2026-conference-paper-id-meng-tri-subspaces-disentanglement-for-multimodal-sentiment-analysis-cvpr-2026-paper-4620f54b47/) | [Tri\-Subspaces Disentanglement for Multimodal Sentiment Analysis](/posts/conference-cvpr-2026-conference-paper-id-meng-tri-subspaces-disentanglement-for-multimodal-sentiment-analysis-cvpr-2026-paper-4620f54b47/) | **6.3/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 85 | [零前视下全身协调：LiveGesture 用分区域专家加因果融合做流式手势](/posts/conference-cvpr-2026-conference-paper-id-saleem-livegesture-streamable-co-speech-gesture-generation-model-cvpr-2026-paper-6319fb6906/) | [LiveGesture: Streamable Co\-Speech Gesture Generation Model](/posts/conference-cvpr-2026-conference-paper-id-saleem-livegesture-streamable-co-speech-gesture-generation-model-cvpr-2026-paper-6319fb6906/) | **6.3/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音交互 |
| 86 | [把口型习惯和情绪拆开控制：PC\-Talk 用隐式关键点变形做可控说话人脸](/posts/conference-cvpr-2026-conference-paper-id-wang-pc-talk-precise-facial-animation-control-for-audio-driven-talking-face-generation-cvpr-2026-paper-d099177966/) | [PC\-Talk: Precise Facial Animation Control for Audio\-Driven Talking Face Generation](/posts/conference-cvpr-2026-conference-paper-id-wang-pc-talk-precise-facial-animation-control-for-audio-driven-talking-face-generation-cvpr-2026-paper-d099177966/) | **6.3/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频生成 |
| 87 | [从人脸二分类到十一场景四层追问：AVFakeBench 如何考住音视频大模型](/posts/conference-cvpr-2026-conference-paper-id-xia-avfakebench-a-comprehensive-audio-video-forgery-detection-benchmark-for-av-lmms-cvpr-2026-paper-3173aeb89d/) | [AVFakeBench: A Comprehensive Audio\-Video Forgery Detection Benchmark for AV\-LMMs](/posts/conference-cvpr-2026-conference-paper-id-xia-avfakebench-a-comprehensive-audio-video-forgery-detection-benchmark-for-av-lmms-cvpr-2026-paper-3173aeb89d/) | **6.3/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 数据集与基准 | #音频伪造检测 |
| 88 | [从标注到干扰项：HumanVBench 用人为可核查的流水线逼问视频模型的看人能力](/posts/conference-cvpr-2026-conference-paper-id-zhou-humanvbench-probing-human-centric-video-understanding-in-mllms-with-automatically-synthesized-cvpr-2026-paper-993d14b101/) | [HumanVBench: Probing Human\-Centric Video Understanding in MLLMs with Automatically Synthesized Benchmarks](/posts/conference-cvpr-2026-conference-paper-id-zhou-humanvbench-probing-human-centric-video-understanding-in-mllms-with-automatically-synthesized-cvpr-2026-paper-993d14b101/) | **6.3/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #音视频问答 |
| 89 | [先估计各模态可不可信，再决定听谁的：CICA 的感知与决策耦合](/posts/conference-cvpr-2026-conference-paper-id-jiang-cica-coupling-confidence-aware-pretraining-with-confidence-informed-attention-for-robust-multimodal-cvpr-2026-paper-bc64b391d7/) | [CICA: Coupling Confidence\-Aware Pretraining with Confidence\-Informed Attention for Robust Multimodal Sentiment Analysis](/posts/conference-cvpr-2026-conference-paper-id-jiang-cica-coupling-confidence-aware-pretraining-with-confidence-informed-attention-for-robust-multimodal-cvpr-2026-paper-bc64b391d7/) | **6.2/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 90 | [对不齐就推理错：FAVE 用三层时间任务检验音视频大模型的同步短板](/posts/conference-cvpr-2026-conference-paper-id-lu-fave-a-structured-benchmark-for-fine-grained-audio-visual-temporal-evaluation-in-cvpr-2026-paper-aaf56ab978/) | [FAVE: A Structured Benchmark for Fine\-Grained Audio\-Visual Temporal Evaluation in Multimodal LLMs](/posts/conference-cvpr-2026-conference-paper-id-lu-fave-a-structured-benchmark-for-fine-grained-audio-visual-temporal-evaluation-in-cvpr-2026-paper-aaf56ab978/) | **6.2/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音视频理解 |
| 91 | [缺模态下先补语义再算不确定性：超图引导扩散与双通道证据融合](/posts/conference-cvpr-2026-conference-paper-id-qiu-beyond-missing-modalities-hypergraph-conditioned-diffusion-for-uncertainty-aware-multimodal-emotion-cvpr-2026-paper-f640631042/) | [Beyond Missing Modalities: Hypergraph Conditioned Diffusion for Uncertainty\-Aware Multimodal Emotion Recognition](/posts/conference-cvpr-2026-conference-paper-id-qiu-beyond-missing-modalities-hypergraph-conditioned-diffusion-for-uncertainty-aware-multimodal-emotion-cvpr-2026-paper-f640631042/) | **6.2/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 92 | [不重建人体动作：把音频当风格信号直接驱动人形机器人跳舞与演讲](/posts/conference-cvpr-2026-conference-paper-id-li-do-you-have-freestyle-expressive-humanoid-locomotion-via-audio-control-cvpr-2026-paper-15e85d4a09/) | [Do You Have Freestyle? Expressive Humanoid Locomotion via Audio Control](/posts/conference-cvpr-2026-conference-paper-id-li-do-you-have-freestyle-expressive-humanoid-locomotion-via-audio-control-cvpr-2026-paper-15e85d4a09/) | **6.1/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频交互 |
| 93 | [多人同时说话时，目标人该接话还是倾听：PolySLGen 的在线多模态反应生成](/posts/conference-cvpr-2026-conference-paper-id-lin-polyslgen-online-multimodal-speaking-listening-reaction-generation-in-polyadic-interaction-cvpr-2026-paper-81f4becc61/) | [PolySLGen: Online Multimodal Speaking\-Listening Reaction Generation in Polyadic Interaction](/posts/conference-cvpr-2026-conference-paper-id-lin-polyslgen-online-multimodal-speaking-listening-reaction-generation-in-polyadic-interaction-cvpr-2026-paper-81f4becc61/) | **6.1/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 方法研究 | #语音对话系统 |
| 94 | [自监督表示真能看穿音画伪造吗：冻结特征加线性头能走多远](/posts/conference-cvpr-2026-conference-paper-id-boldisor-investigating-self-supervised-representations-for-audio-visual-deepfake-detection-cvpr-2026-paper-9883729787/) | [Investigating Self\-Supervised Representations for Audio\-Visual Deepfake Detection](/posts/conference-cvpr-2026-conference-paper-id-boldisor-investigating-self-supervised-representations-for-audio-visual-deepfake-detection-cvpr-2026-paper-9883729787/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频深度伪造检测 |
| 95 | [不从零学跳舞：用保先验适配让视频扩散模型听音乐起舞](/posts/conference-cvpr-2026-conference-paper-id-hong-musicinfuser-making-video-diffusion-listen-and-dance-cvpr-2026-paper-18ee6a6699/) | [MusicInfuser: Making Video Diffusion Listen and Dance](/posts/conference-cvpr-2026-conference-paper-id-hong-musicinfuser-making-video-diffusion-listen-and-dance-cvpr-2026-paper-18ee6a6699/) | **6.0/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频生成 |
| 96 | [看不见输入时如何算出物理参数：EMMA 的多模态反演](/posts/conference-cvpr-2026-conference-paper-id-shaikh-emma-extracting-multiple-physical-parameters-from-multimodal-data-cvpr-2026-paper-59054ce807/) | [EMMA: Extracting Multiple physical parameters from Multimodal Data](/posts/conference-cvpr-2026-conference-paper-id-shaikh-emma-extracting-multiple-physical-parameters-from-multimodal-data-cvpr-2026-paper-59054ce807/) | **6.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频理解 |
| 97 | [把可学习的查询换成有情感含义的原型：冻结大模型做多模态情感分析](/posts/conference-cvpr-2026-conference-paper-id-zhao-prototype-as-prompt-multimodal-sentiment-prototypes-endowing-large-language-models-the-capability-cvpr-2026-paper-c1d5560f5b/) | [Prototype\-as\-Prompt: Multimodal Sentiment Prototypes Endowing Large Language Models the Capability to Perform Multimodal Sentiment Analysis](/posts/conference-cvpr-2026-conference-paper-id-zhao-prototype-as-prompt-multimodal-sentiment-prototypes-endowing-large-language-models-the-capability-cvpr-2026-paper-c1d5560f5b/) | **6.0/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.6/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.2/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 98 | [不微调也能说话：用预训练扩散模型拼出口型、身份与时间一致](/posts/conference-cvpr-2026-conference-paper-id-wu-ip-adapter-is-all-you-need-towards-fine-tuning-free-diffusion-based-talking-face-cvpr-2026-paper-e442690492/) | [IP\-Adapter Is All You Need: Towards Fine\-Tuning\-Free Diffusion\-Based Talking Face Generation](/posts/conference-cvpr-2026-conference-paper-id-wu-ip-adapter-is-all-you-need-towards-fine-tuning-free-diffusion-based-talking-face-cvpr-2026-paper-e442690492/) | **5.9/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频生成 |
| 99 | [固定提示接不住声音：SOUPLE 用图像条件化学上下文重建音频视觉对应](/posts/conference-cvpr-2026-conference-paper-id-nguyen-souple-enhancing-audio-visual-localization-and-segmentation-with-learnable-prompt-contexts-cvpr-2026-paper-7d07615170/) | [SOUPLE: Enhancing Audio\-Visual Localization and Segmentation with Learnable Prompt Contexts](/posts/conference-cvpr-2026-conference-paper-id-nguyen-souple-enhancing-audio-visual-localization-and-segmentation-with-learnable-prompt-contexts-cvpr-2026-paper-7d07615170/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #声源定位 |
| 100 | [把选片、排序、写稿、配乐装进同一个离散词表：AutoCut 如何做可控的广告剪辑](/posts/conference-cvpr-2026-conference-paper-id-zhou-autocut-end-to-end-advertisement-video-editing-based-on-multimodal-discretization-and-cvpr-2026-paper-fe305eec80/) | [AutoCut: End\-to\-end advertisement video editing based on multimodal discretization and controllable generation](/posts/conference-cvpr-2026-conference-paper-id-zhou-autocut-end-to-end-advertisement-video-editing-based-on-multimodal-discretization-and-cvpr-2026-paper-fe305eec80/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.2/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音视频生成 |
| 101 | [双人对话手势为何要先分清谁在说话：DyaDiT 用解耦音频与社会条件生成可控动作](/posts/conference-cvpr-2026-conference-paper-id-peng-dyadit-a-multi-modal-diffusion-transformer-for-socially-favorable-dyadic-gesture-cvpr-2026-paper-3501154385/) | [DyaDiT: A Multi\-Modal Diffusion Transformer for Socially Favorable Dyadic Gesture Generation](/posts/conference-cvpr-2026-conference-paper-id-peng-dyadit-a-multi-modal-diffusion-transformer-for-socially-favorable-dyadic-gesture-cvpr-2026-paper-3501154385/) | **5.3/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.4/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 方法研究 | #音视频交互 |
| 102 | [不追求更像人脸，而是生成对判别更有用的视觉特征：跨模态引导的抑郁识别训练框架](/posts/conference-cvpr-2026-conference-paper-id-yang-cross-modal-guided-visual-synthesis-for-data-efficient-multimodal-depression-recognition-cvpr-2026-paper-8142ce5b58/) | [Cross\-Modal Guided Visual Synthesis for Data\-Efficient Multimodal Depression Recognition](/posts/conference-cvpr-2026-conference-paper-id-yang-cross-modal-guided-visual-synthesis-for-data-efficient-multimodal-depression-recognition-cvpr-2026-paper-8142ce5b58/) | **5.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.6/1.5 | 后50% | 方法研究 | #病理语音评估 |
| 103 | [模态吵架时别硬拉齐：冲突加权交叉重构的共享语义对齐](/posts/conference-cvpr-2026-conference-paper-id-wang-conflict-aware-adaptive-cross-reconstruction-for-multimodal-sentiment-analysis-cvpr-2026-paper-07323f91d6/) | [Conflict\-Aware Adaptive Cross\-Reconstruction for Multimodal Sentiment Analysis](/posts/conference-cvpr-2026-conference-paper-id-wang-conflict-aware-adaptive-cross-reconstruction-for-multimodal-sentiment-analysis-cvpr-2026-paper-07323f91d6/) | **5.2/10** · 创新 1.3/2 · 技术严谨 0.8/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 方法研究 | #语音情感识别 |

---

## 📋 论文列表

### 1. [不只绑一个锚点：用合成字幕把音频视频文本一起对齐](/posts/conference-cvpr-2026-conference-paper-id-vyas-pushing-the-frontier-of-audiovisual-perception-with-large-scale-multimodal-correspondence-cvpr-2026-paper-4a0c0662e4/)

> 英文题目：*[Pushing the Frontier of Audiovisual Perception with Large\-Scale Multimodal Correspondence Learning](/posts/conference-cvpr-2026-conference-paper-id-vyas-pushing-the-frontier-of-audiovisual-perception-with-large-scale-multimodal-correspondence-cvpr-2026-paper-4a0c0662e4/)*

标签：#对比学习 #多模态学习 #零样本 #音视频 #音频检索

评分：**8.9/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.3/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：模型报告 | 主任务：#音频检索 | 主方法：#对比学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Vyas_Pushing_the_Frontier_of_Audiovisual_Perception_with_Large-Scale_Multimodal_Correspondence_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Vyas_Pushing_the_Frontier_of_Audiovisual_Perception_with_Large-Scale_Multimodal_Correspondence_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Apoorv Vyas：机构信息未能从会议 PDF 纯文本可靠映射
- Heng\-Jui Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Cheng\-Fu Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Po\-Yao Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Luya Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Julius Richter：机构信息未能从会议 PDF 纯文本可靠映射
- Sanyuan Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Matthew Le：机构信息未能从会议 PDF 纯文本可靠映射
- Piotr Dollár：机构信息未能从会议 PDF 纯文本可靠映射
- Christoph Feichtenhofer：机构信息未能从会议 PDF 纯文本可靠映射
- Ann Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Wei\-Ning Hsu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理未标注长视频切片与弱音频字幕的跨模态对齐，输入为音频、视频及文本三模态信号，输出为可直接用于分类与检索的统一嵌入，难点在于音频字幕器质量弱、模态缺失不对称与语音音乐环境声域差异大。方法先用大语言模型融合弱音频字幕、置信度与视频字幕，生成音频、视觉与视听三类合成字幕。接着用视听多模态大模型与视频细节模型精炼字幕并扩至约亿级规模，为对比学习提供高质量对齐对。然后用分离音频塔、视频时空塔与视听融合塔在多类字幕间做覆盖十对的Sigmoid对比学习与语音细粒度自监督，输出统一表征。与单锚点绑定模型不同，该范式不以图像或文本为中心枢纽，而是补全缺失模态字幕并同时对齐所有组合，从而缓解缺模态时检索崩溃。在AudioCaps文本到音频检索基准下，PEAV的检索指标R@1为45\.8，高于对比基线的检索指标R@1 35\.4。结论适用边界为英语为主的10秒至30秒通用视听内容，对长时叙事、重度重叠语音与低资源语言的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/facebookresearch/perception_models> — 链接可访问（HTTP 200）
- 模型相关资源：<https://github.com/facebookresearch/perception_models> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 2. [环境声编码器听不懂人话时如何检索：SAVE 用语音分支与软对齐补齐音轨](/posts/conference-cvpr-2026-conference-paper-id-zhao-save-speech-aware-video-representation-learning-for-video-text-retrieval-cvpr-2026-paper-f03b5cf6e7/)

> 英文题目：*[SAVE: Speech\-Aware Video Representation Learning for Video\-Text Retrieval](/posts/conference-cvpr-2026-conference-paper-id-zhao-save-speech-aware-video-representation-learning-for-video-text-retrieval-cvpr-2026-paper-f03b5cf6e7/)*

标签：#知识蒸馏 #多模态学习 #音视频 #语音 #音频检索

评分：**8.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频检索 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhao_SAVE_Speech-Aware_Video_Representation_Learning_for_Video-Text_Retrieval_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_SAVE_Speech-Aware_Video_Representation_Learning_for_Video-Text_Retrieval_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Ruixiang Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Zhihao Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Bangxiang Lan：机构信息未能从会议 PDF 纯文本可靠映射
- Zijie Xin：机构信息未能从会议 PDF 纯文本可靠映射
- Jingyu Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Xirong Li：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

视频文本检索以自然语言查询为输入、以语义最相关视频为输出，实际难点在于CLIP仅提供图文编码器而天然忽略声轨，且ResNet\-18与AST等环境声编码器难以表征口语语义，视觉与音频特征未经预对齐直接融合效果受限。SAVE首先以三分支抽取互补标记：视觉分支用CLIP视觉编码器抽取帧级视觉标记，音频分支用AST加重采样器抽取等长声学标记，语音分支用Whisper转写为词序列再用与查询共享参数的CLIP文本编码器编码为文本标记。接着两路门控融合均以视觉标记为查询筛选视觉相关的音频与语音信号，再按视觉加音频语音均值无参数聚合为语音感知视频表示。然后以全局余弦加局部对数和指数的多粒度相似度计算视频文本匹配，并在训练期以软标签约束视觉音频亲和排序结构。与硬对齐或无预对齐相比，软预对齐只约束排序结构以容忍语义失配，独立语音分支显式恢复对话语义从而补足声音分支。在MSRVTT\-9k文本到视频检索评测下，SAVE的SumR指标为216\.2，高于AVIGATE的SumR指标207\.7。该结论适用边界限于具有可用声轨与较短转写的短视频检索，在直播级长而嘈杂转写与完全缺失音频下的泛化能力尚未验证，尽管增加语音分支其推理延迟与基线相当。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ruc-aimc-lab/SAVE> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 3. [只听其声不够：用单因素反事实考视频生音频的物理因果](/posts/conference-cvpr-2026-conference-paper-id-li-benchmarking-single-factor-physical-video-to-audio-generation-cvpr-2026-paper-173973780b/)

> 英文题目：*[Benchmarking Single\-Factor Physical Video\-to\-Audio Generation](/posts/conference-cvpr-2026-conference-paper-id-li-benchmarking-single-factor-physical-video-to-audio-generation-cvpr-2026-paper-173973780b/)*

标签：#基准测试 #基准设计 #模型评估 #音视频 #视频到声音生成

评分：**8.1/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#视频到声音生成 | 主方法：#基准设计

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Li_Benchmarking_Single-Factor_Physical_Video-to-Audio_Generation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Benchmarking_Single-Factor_Physical_Video-to-Audio_Generation_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Tingle Li：机构信息未能从会议 PDF 纯文本可靠映射
- Siddharth Gururani：机构信息未能从会议 PDF 纯文本可靠映射
- Kevin J\. Shih：机构信息未能从会议 PDF 纯文本可靠映射
- Gantavya Bhatt：机构信息未能从会议 PDF 纯文本可靠映射
- Sang\-gil Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Zhifeng Kong：机构信息未能从会议 PDF 纯文本可靠映射
- Arushi Goel：机构信息未能从会议 PDF 纯文本可靠映射
- Gopala Anumanchipalli：机构信息未能从会议 PDF 纯文本可靠映射
- Ming\-Yu Liu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

视频到音频生成以无声视频为输入合成对应声音，难点在于模型常输出听感合理但物理错误的声音，而现有评估只测分布相似与语义对齐。FlatSounds先在室内采集可控交互视频并人工核验撞击时刻与文本描述，为因果评测提供锚点，该锚点输出直接用于下一步的对齐。接着对仅差单一物理因子的反事实对做基于锚点的时间规整，使撞击时刻对齐而材质与满度等变量被隔离，规整后视频对进入物理变化判定。最后用包络与频谱特征检测生成音频是否随干预朝预期方向变化，并以软门控先权衡失同步与语义错误样本再判物理方向。相比直接在VGGSound上算FAD与DeSync，该机制差异在于以因果干预替代野外相关，以单因子控制揭示模型依赖文本而忽视视觉物理线索，实际意义是把评估从听感合理转向物理正确性。在FlatSounds\-Physics基准下，MMAudio\-Phys带文本条件的Confidence得分为0\.306，高于MMAudio带文本条件的Confidence得分0\.226。该结论适用边界仅限室内短时撞击类事件与单因子干预，复合变化与野外长尾场景尚未验证，且原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://research.nvidia.com/labs/dir/flatsounds/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 4. [听音再剪视频：OmniZip 用音频保留率动态分配视频剪枝](/posts/conference-cvpr-2026-conference-paper-id-tao-omnizip-audio-guided-dynamic-token-compression-for-fast-omnimodal-large-language-cvpr-2026-paper-4235b1daf2/)

> 英文题目：*[OmniZip: Audio\-Guided Dynamic Token Compression for Fast Omnimodal Large Language Models](/posts/conference-cvpr-2026-conference-paper-id-tao-omnizip-audio-guided-dynamic-token-compression-for-fast-omnimodal-large-language-cvpr-2026-paper-4235b1daf2/)*

标签：#模型剪枝 #高效推理 #音视频 #音视频理解

评分：**8.0/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音视频理解 | 主方法：#模型剪枝

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Tao_OmniZip_Audio-Guided_Dynamic_Token_Compression_for_Fast_Omnimodal_Large_Language_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Tao_OmniZip_Audio-Guided_Dynamic_Token_Compression_for_Fast_Omnimodal_Large_Language_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Keda Tao：机构信息未能从会议 PDF 纯文本可靠映射
- Kele Shao：机构信息未能从会议 PDF 纯文本可靠映射
- Bohan Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Weiqiang Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jian Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Huan Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

全模态大语言模型以固定时长窗切分同步音频与视频流并拼接成长序列输入大语言模型完成音视频问答，万级令牌的二次注意力导致预填充延迟与显存恶化，且音频主导注意力使单模态剪枝破坏跨窗时序对齐。OmniZip为训练无关的推理时压缩器，在投影后、语言模型前按窗操作，先利用音频编码器末层自注意力筛选显著音频令牌并输出每窗音频保留率。接着以该保留率作为信息密度先验动态分配各窗视频剪枝预算，并通过跨模态相似度合并音频锚点邻域令牌以保持语义对齐。最后将分配结果送入交错空时压缩模块完成视频令牌精简，形成音频筛选至视频分配再至空时压缩的方法链。与依赖语言模型内部注意力或视觉编码器注意力的单模态剪枝不同，该链路完全避免物化语言模型注意力矩阵并兼容闪注意力，因而可直接部署于现有推理栈并避免内存溢出。在WorldSense基准下，OmniZip的准确率为45\.9，高于DyCoke的准确率45\.0。该结论的适用边界尚未验证于无声视频、长时跨窗推理与非Qwen系架构，存在受限的外推范围。在A6000硬件上保留45%令牌时预填充延迟从291ms降至116ms、显存从35G降至28G，推理开销显著降低。

🔗 **开源资源**

- 代码相关资源：<https://github.com/KD-TAO/OmniZip> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 5. [文本挤占参数更新时，单块 LoRA 如何隐式分出模态分工](/posts/conference-cvpr-2026-conference-paper-id-zhang-parameter-efficient-adaptation-for-mllms-via-implicit-modality-decomposition-cvpr-2026-paper-3f407c6c0d/)

> 英文题目：*[Parameter\-Efficient Adaptation for MLLMs via Implicit Modality Decomposition](/posts/conference-cvpr-2026-conference-paper-id-zhang-parameter-efficient-adaptation-for-mllms-via-implicit-modality-decomposition-cvpr-2026-paper-3f407c6c0d/)*

标签：#LoRA #多模态学习 #音视频 #音视频问答

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音视频问答 | 主方法：#LoRA

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_Parameter-Efficient_Adaptation_for_MLLMs_via_Implicit_Modality_Decomposition_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_Parameter-Efficient_Adaptation_for_MLLMs_via_Implicit_Modality_Decomposition_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Mingfang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yunhong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Lu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaxin Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态大语言模型需将音频、视觉或语音等非文本输入经编码器与投影器映射至语言空间后，与文本联合送入冻结大模型完成问答推理，但标准低秩微调中文本模态主导参数更新，非文本模态贡献被系统性压制导致推理退化。隐式模态分解先在训练前将单个低秩矩阵软划分为文本专用、非文本专用与共享三类区域，并随层深渐增共享区比例，划分结果作为后续约束的结构先验进入优化。接着模态专用解耦约束要求仅用模态相关参数重构全矩阵输出以抑制跨模态干扰，其参数梯度直接注入反向传播以精细调控更新。然后模态无关对齐约束以加权余弦对齐促使共享区提取跨模态一致语义，其梯度与任务梯度及解耦梯度加权融合形成最终更新。与每模态独立矩阵的显式分解不同，该方法不增加可训练矩阵数量且保持推理时权重合并。在MUSIC\-AVQA评测下，IMoD的准确率为77\.31，高于LoRA的准确率73\.41。该结论在音视频文本、视觉文本与语音文本任务上均成立，但其适用边界受限于依赖预对齐良好的编码器与投影器，尚未验证长尾问答、强噪声音频或未见模态组合下的外推能力，而训练成本维持与标准低秩微调相同的参数占比且推理开销无额外延迟因权重可完全合并。

🔗 **开源资源**

- 代码相关资源：<https://github.com/mmffzzz/IMoD.git> → <https://github.com/mmffzzz/IMoD> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 6. [从离散分类到连续追踪：OSMO 把自我情绪做成时间线](/posts/conference-cvpr-2026-conference-paper-id-abdelfattah-osmo-open-vocabulary-self-emotion-tracking-cvpr-2026-paper-af89699008/)

> 英文题目：*[OSMO: Open\-vocabulary Self\-eMOtion Tracking](/posts/conference-cvpr-2026-conference-paper-id-abdelfattah-osmo-open-vocabulary-self-emotion-tracking-cvpr-2026-paper-af89699008/)*

标签：#数据集 #多模态学习 #音视频 #语音情感识别

评分：**7.8/10** | 创新 1.6/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#语音情感识别 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Abdelfattah_OSMO_Open-vocabulary_Self-eMOtion_Tracking_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Abdelfattah_OSMO_Open-vocabulary_Self-eMOtion_Tracking_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Mohamed Abdelfattah：机构信息未能从会议 PDF 纯文本可靠映射
- Bugra Tekin：机构信息未能从会议 PDF 纯文本可靠映射
- Fadime Sener：机构信息未能从会议 PDF 纯文本可靠映射
- Necati Cihan Camgoz：机构信息未能从会议 PDF 纯文本可靠映射
- Eric Sauser：机构信息未能从会议 PDF 纯文本可靠映射
- Shugao Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Alexandre Alahi：机构信息未能从会议 PDF 纯文本可靠映射
- Edoardo Remelli：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以智能眼镜采集的第一人称视频、音频、对话文本与眼动信号为输入，输出佩戴者开放词表情感、极性、强度、时间边界与成因解释，难点在于表情微弱自发、语义依赖社交上下文且情感具有跨时段惯性。方法先用冻结编码器抽取各模态表征并经适配器映射到语言空间，为后续统一推理提供接地输入；接着记忆模块检索近期情感文本并与多模态查询融合建模延续性，使当前判断继承个人情感史。然后SENSE框架将人工情感描述与机器感知细节融合生成结构化推理链，再由低秩微调的大语言模型先推理后预测情感标签。与孤立话语分类的情感大模型相比，该设计以显式历史建模与感知接地减少脱离语境误判，并支持连贯情感时间线追踪。在OSMO\-XSub评测协议下，微调Emotion\-LLaMa的OVER HR指标为66\.0，高于零样本Emotion\-LLaMa的OVER HR指标53\.4。该结论适用边界限于日常社交互动中的可观测具身情感，极端情绪、更多文化与生理信号下的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://osmo-emos.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 7. [不训练也能定位声源：用生成、核验、修正三步约束多模态大模型的猜测](/posts/conference-cvpr-2026-conference-paper-id-park-generate-analyze-and-refine-training-free-sound-source-localization-via-mllm-cvpr-2026-paper-0dc15106eb/)

> 英文题目：*[Generate, Analyze, and Refine: Training\-Free Sound Source Localization via MLLM Meta\-Reasoning](/posts/conference-cvpr-2026-conference-paper-id-park-generate-analyze-and-refine-training-free-sound-source-localization-via-mllm-cvpr-2026-paper-0dc15106eb/)*

标签：#多模态学习 #多模态模型 #零样本 #音视频 #声源定位

评分：**7.8/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#声源定位 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Park_Generate_Analyze_and_Refine_Training-Free_Sound_Source_Localization_via_MLLM_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Park_Generate_Analyze_and_Refine_Training-Free_Sound_Source_Localization_via_MLLM_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Subin Park：机构信息未能从会议 PDF 纯文本可靠映射
- Jung Uk Kim：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

声源定位需以图像与音频对为输入并输出发声物体的边界框，实际难点在于静默显著物易误检、混合声源归属不清以及跨模态语义对齐缺失。生成阶段由Qwen2\.5\-Omni广义解释音高音色节奏并枚举全部视觉候选，同时产出初始框、自然语言描述与音频类别及置信度以保留宽假设空间。分析阶段承接上述初始输出，通过开放集角色标注与锚点投票评估视听一致性，并重复五次取平均一致性分、频次选角色与多数投票决定保留标志。修正阶段仅当自适应门控判定不一致时执行，根据锚点分布选择平移扩张收缩与重定心等几何调整，否则直接保留初始框以避免不必要修正。与以对比学习相似度排序为主的已有方法不同，该框架用显式因果一致性验证替代特征匹配，并以门控实现按需精修从而兼顾可解释性与效率。在VGGSound\-Duet基准下，Qwen2\.5\-Omni\-7B的指标CIoU@0\.3为59\.5%，高于Qwen2\.5\-Omni\-3B的指标CIoU@0\.3 49\.8%。该结论适用边界受限于中心帧单图定位与乐器及日常声场景，尚未验证长时序建模与强离屏声外推，原文披露单样本推理开销平均约4秒，得益于免训练设计而无需额外训练成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/VisualAIKHU/GAR-SSL> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 8. [先问该听谁再解码：用自评估权重压住跨模态幻觉的 MAD](/posts/conference-cvpr-2026-conference-paper-id-chung-mad-modality-adaptive-decoding-for-mitigating-cross-modal-hallucinations-in-multimodal-large-cvpr-2026-paper-46e08eae5c/)

> 英文题目：*[MAD: Modality\-Adaptive Decoding for Mitigating Cross\-Modal Hallucinations in Multimodal Large Language Models](/posts/conference-cvpr-2026-conference-paper-id-chung-mad-modality-adaptive-decoding-for-mitigating-cross-modal-hallucinations-in-multimodal-large-cvpr-2026-paper-46e08eae5c/)*

标签：#对比学习 #测试时自适应 #多模态模型 #音视频 #音视频问答

评分：**7.7/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.6/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音视频问答 | 主方法：#测试时自适应

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Chung_MAD_Modality-Adaptive_Decoding_for_Mitigating_Cross-Modal_Hallucinations_in_Multimodal_Large_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Chung_MAD_Modality-Adaptive_Decoding_for_Mitigating_Cross-Modal_Hallucinations_in_Multimodal_Large_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Sangyun Chung：机构信息未能从会议 PDF 纯文本可靠映射
- Se Yeon Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Youngchae Chee：机构信息未能从会议 PDF 纯文本可靠映射
- Yong Man Ro：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

跨模态幻觉指音视频大语言模型以一模态证据捏造另一模态内容，输入为视频序列X\_v、音频波形X\_a与文本问题X\_q，输出为自回归词元序列，难点在于按问题动态隔离无关模态干扰而非仅增强单模态表征。MAD先用固定模态查询提示让底层模型自评需要视频、音频还是两者，取出video、audio、both对应下一词元原始Logit经Softmax得到权重\[w\_av,w\_v,w\_a\]，该权重直接决定后续对比强度的分配。接着并行计算完整输入与视频缺失、音频缺失、双缺失四种配置下的下一词元Logit，为每种模态缺失情形提供对照信号。最后按权重与共享系数gamma加权融合对比信号生成词元，只压制无关模态而保留相关模态信息。相对VCD\-Extended与AVCD的均匀固定对比强度，MAD把对比强度重参数化为gamma与任务相关权重的乘积，实现问题相关的自适应抑制，具有更精细的模态交互控制意义。在CMM基准下，Qwen2\.5\-Omni\-7B结合MAD的准确率为81\.4%，高于结合AVCD的准确率73\.3%。该结论适用边界受限于两个幻觉诊断基准与两款音视频模型，在开放域长视频与三模态以上场景尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/top-yun/MAD> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 9. [先听清再看懂：EgoAVU 用多模态上下文图把第一视角的声音钉回可见来源](/posts/conference-cvpr-2026-conference-paper-id-seth-egoavu-egocentric-audio-visual-understanding-cvpr-2026-paper-d59abb857e/)

> 英文题目：*[EgoAVU: Egocentric Audio\-Visual Understanding](/posts/conference-cvpr-2026-conference-paper-id-seth-egoavu-egocentric-audio-visual-understanding-cvpr-2026-paper-d59abb857e/)*

标签：#基准测试 #数据集构建 #音视频 #音视频问答

评分：**7.7/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音视频问答 | 主方法：#数据集构建

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Seth_EgoAVU_Egocentric_Audio-Visual_Understanding_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Seth_EgoAVU_Egocentric_Audio-Visual_Understanding_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Ashish Seth：机构信息未能从会议 PDF 纯文本可靠映射
- Xinhao Mei：机构信息未能从会议 PDF 纯文本可靠映射
- Changsheng Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Varun Nagaraja：机构信息未能从会议 PDF 纯文本可靠映射
- Ernie Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Gregory P\. Meyer：机构信息未能从会议 PDF 纯文本可靠映射
- Gael Le Lan：机构信息未能从会议 PDF 纯文本可靠映射
- Yunyang Xiong：机构信息未能从会议 PDF 纯文本可靠映射
- Vikas Chandra：机构信息未能从会议 PDF 纯文本可靠映射
- Yangyang Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Dinesh Manocha：机构信息未能从会议 PDF 纯文本可靠映射
- Zhipeng Cai：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

第一视角音视频理解以长视频与同步音频为输入，需联合输出动作、可见声源与环境声描述，难点在于相机抖动剧烈、视场受限遮挡频繁且原有叙述缺失环境与听觉上下文。EgoAVU先用图像视频音频单模态专家分别增强同一片段得到空间物体、动态字幕与前景背景声音字幕，再按滑动窗口动态过滤保留约9900个视频。接着用LLaMA\-70B构建多模态上下文图显式关联交互物体、背景物体与前景背景声音，然后融合为统一音视频叙述并合成五类问答形成EgoAVU\-Instruct与EgoAVU\-Bench。相对联合输入多模态大模型的偏置与幻觉，模块化解耦以单模态感知补强联合推理，实际意义在于提升声源关联与叙事连贯性并可规模化复现。在EgoTempo基准下，OURS \(LoRA\)的准确率为20\.83，高于Qwen2\.5\-Omni的准确率16\.25。现有最强基线在时序推理与幻觉检测上仍仅约五成与四成以下，微调后获得大幅相对增益并可部分迁移到EgoTempo与EgoIllusion。该结论适用边界受限于烹饪等日常室内外场景、1至6分钟视频与自动指标为主的验证，开放式评分依赖裁判模型仍存偏差，训练成本为在64张H100硬件上训练5轮，推理开销与部署吞吐尚未验证。

🔗 **开源资源**

- 代码相关资源：<https://cs20s030.github.io/EgoAVU/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://cs20s030.github.io/EgoAVU/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 10. [只会看的第一人称模型：EgoSound 逼模型把声音听进推理里](/posts/conference-cvpr-2026-conference-paper-id-zhu-egosound-benchmarking-sound-understanding-in-egocentric-videos-cvpr-2026-paper-c03d648728/)

> 英文题目：*[EgoSound: Benchmarking Sound Understanding in Egocentric Videos](/posts/conference-cvpr-2026-conference-paper-id-zhu-egosound-benchmarking-sound-understanding-in-egocentric-videos-cvpr-2026-paper-c03d648728/)*

标签：#基准测试 #基准设计 #音视频 #音视频问答

评分：**7.7/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音视频问答 | 主方法：#基准设计

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhu_EgoSound_Benchmarking_Sound_Understanding_in_Egocentric_Videos_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_EgoSound_Benchmarking_Sound_Understanding_in_Egocentric_Videos_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Bingwen Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuqian Fu：机构信息未能从会议 PDF 纯文本可靠映射
- Qiaole Dong：机构信息未能从会议 PDF 纯文本可靠映射
- Guolei Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Tianwen Qian：机构信息未能从会议 PDF 纯文本可靠映射
- Yuzheng Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Danda Pani Paudel：机构信息未能从会议 PDF 纯文本可靠映射
- Yanwei Fu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangyang Xue：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为第一人称视频的同步画面与音频，输出为覆盖七类声音理解任务的开放式自然语言回答，难点在于离屏声源、细粒度音色时序变化与视听因果必须联合推断。方法链第一步利用人物交互标注锁定交互时刻以确定发声候选，其输出的时刻与候选直接作为第二步的锚点。第二步以Gemini\-2\.5生成以声音为中心的细粒度音视描述并转录语音，形成受交互约束的文本化证据。第三步以GPT\-4o基于上述描述跨七类任务构造问答，并以视频帧视觉证据做一致性校验，仅保留有视觉支撑的7315对问答。相对以往仅依赖视觉线索的自我中心问答，关键机制差异在于以交互为锚显式建模声源、空间位置与因果推理，避免了通用描述遗漏关键声音，因而能同时评测听觉感知与跨模态推理。在EgoSound基准下，Qwen3\-Omni\-Thinking\-30B的准确率为56\.7%，低于人类评估者的准确率83\.9%。该结论的适用边界限于平均59\.3秒的短中时长日常与盲人辅助场景视听推理，尚未验证长时记忆、强噪声混响与多声源重叠下的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://groolegend.github.io/EgoSound/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 11. [长叙事音频为何要先分段推理再逐段生成：AudioStory 的分工与衔接](/posts/conference-cvpr-2026-conference-paper-id-guo-audiostory-generating-long-form-narrative-audio-with-large-language-models-cvpr-2026-paper-b10529adb8/)

> 英文题目：*[AudioStory: Generating Long\-Form Narrative Audio with Large Language Models](/posts/conference-cvpr-2026-conference-paper-id-guo-audiostory-generating-long-form-narrative-audio-with-large-language-models-cvpr-2026-paper-b10529adb8/)*

标签：#基准测试 #扩散模型 #大语言模型 #长音频处理 #音频生成

评分：**7.6/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Guo_AudioStory_Generating_Long-Form_Narrative_Audio_with_Large_Language_Models_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Guo_AudioStory_Generating_Long-Form_Narrative_Audio_with_Large_Language_Models_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Yuxin Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Teng Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuying Ge：机构信息未能从会议 PDF 纯文本可靠映射
- Shijie Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Yixiao Ge：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Zou：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

AudioStory面向多模态指令输入的长叙事音频生成，输出为多段时序连贯的音频序列，需同时解决跨事件主题一致性与复杂指令组合推理难题。为此框架先由大语言模型做故事线推理并分解事件数量与时间戳，再对每个事件交错生成字幕与桥接查询，随后经交叉注意力融合语义与残差查询并连同时长条件送入扩散变换器逐段合成。与经预定义文本空间桥接大语言模型与扩散器的做法不同，该工作解耦出文本语义对齐与声学细节补偿两路查询并做三阶段端到端联合训练。在长音频生成任务下，AudioStory的Instruct得分为4\.1，高于LLM\+TangoFlux的Instruct得分3\.5。该提升源于单音频生成预训练带来的高质量短片段合成能力与交错推理提供的上下文引导，使长序列更好地匹配参考长度并减少遗漏发声实体。该结论适用边界受限于自然声与卡通声两类域内验证，对重叠声、语音对白与音乐长结构的泛化尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/TencentARC/AudioStory> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 12. [基座也缺数据时：TAPE 用任务适配空间与推理期原型演化做全少样本音频增量分类](/posts/conference-cvpr-2026-conference-paper-id-gao-tape-task-adaptive-prototype-evolution-in-audio-language-models-for-fully-few-shot-cvpr-2026-paper-acbb70ebd1/)

> 英文题目：*[TAPE: Task\-Adaptive Prototype Evolution in Audio\-Language Models for Fully Few\-shot Class\-incremental Audio Classification](/posts/conference-cvpr-2026-conference-paper-id-gao-tape-task-adaptive-prototype-evolution-in-audio-language-models-for-fully-few-shot-cvpr-2026-paper-acbb70ebd1/)*

标签：#持续学习 #测试时自适应 #音频大模型 #少样本 #音频分类

评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频分类 | 主方法：#测试时自适应

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Gao_TAPE_Task-Adaptive_Prototype_Evolution_in_Audio-Language_Models_for_Fully_Few-shot_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Gao_TAPE_Task-Adaptive_Prototype_Evolution_in_Audio-Language_Models_for_Fully_Few-shot_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Yunlong Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Wenxin Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Guanglu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Senqi Guan：机构信息未能从会议 PDF 纯文本可靠映射
- Linlin Zong：机构信息未能从会议 PDF 纯文本可靠映射
- Dongyu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xinyue Liu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

全量少样本类增量音频分类（Fully Few\-shot Class\-incremental Audio Classification，FFCAC）要求基会话与增量会话均仅有极少标注音频下持续识别新类，输入为音频波形与少量类标注，输出为跨全部已见类的标签，难点在于文本与音频错配、灾难性遗忘与小样本过拟合交织。该框架先用冻结的音频编码器提取特征并以类均值初始化原型，再由任务适配器（Task\-Adapter）学习正交参考点并解析求解线性变换矩阵，将原型与查询映射到类别可分的任务自适应空间，最后在推理阶段按预测熵筛选可信查询并以动量方式演化原型后计算余弦相似度分类。与直接微调音频语言模型（Audio\-Language Model，ALM）提示或原型网络相比，其差异在于完全舍弃不可靠文本分支并用几何隔离代替编码器微调，同时把测试时查询从评估对象变为原型修正源。在三数据集平均上平均准确率（Average Accuracy，AA）从次优的54\.93%提升至82\.76%，性能下降率（Performance Dropping rate，PD）从28\.74%降至12\.56%，其中LBS\-100/LS\-100语音任务AA为84\.53%、Nsynth\-100乐器任务为94\.78%、FSC\-89事件任务为68\.97%。该结论限于乐器、事件与说话人三类闭集随机划分，未验证开放噪声、域偏移或大规模会话外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/YvoGao/TAPE> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 13. [从固定图文对到任意交错组合：UniM 为何要同测语义结构与连贯](/posts/conference-cvpr-2026-conference-paper-id-li-unim-a-unified-any-to-any-interleaved-multimodal-benchmark-cvpr-2026-paper-e5457937b5/)

> 英文题目：*[UniM: A Unified Any\-to\-Any Interleaved Multimodal Benchmark](/posts/conference-cvpr-2026-conference-paper-id-li-unim-a-unified-any-to-any-interleaved-multimodal-benchmark-cvpr-2026-paper-e5457937b5/)*

标签：#基准测试 #数据集 #基准设计 #多模态模型 #音视频理解

评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音视频理解 | 主方法：#基准设计

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Li_UniM_A_Unified_Any-to-Any_Interleaved_Multimodal_Benchmark_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_UniM_A_Unified_Any-to-Any_Interleaved_Multimodal_Benchmark_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Yanlin Li：机构信息未能从会议 PDF 纯文本可靠映射
- Minghui Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Kaiwen Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shize Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yiran Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Haodong Li：机构信息未能从会议 PDF 纯文本可靠映射
- Congyue Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Weijie Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Yushen Yan：机构信息未能从会议 PDF 纯文本可靠映射
- Shengqiong Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Ji：机构信息未能从会议 PDF 纯文本可靠映射
- Lei Cui：机构信息未能从会议 PDF 纯文本可靠映射
- Furu Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Hao Fei：机构信息未能从会议 PDF 纯文本可靠映射
- Mong\-Li Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Wynne Hsu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为文本、图像、音频、视频、文档、代码、3D任意交错序列且非文本以占位符表示，输出须按占位符交错生成对应模态内容，难点在于单实例内多任务交织推理与跨模态结构对齐须同时成立。接收模块将非文本模态转为任务条件稠密描述并改写问题以统一文本推理空间，其输出进入可追溯证据推理模块进行数据分析判定与代码解释器调用、模态内容文本内容与工具清单规划及初版报告生成与检查裁判迭代修正。推理修正后的结构化计划进入生成模块调用外部图像音频视频与3D工具完成最终交错输出，从而保证语义与结构可追溯。与仅覆盖图文交错的MMIE与CoMM相比，关键机制差异在于覆盖七模态任意组合与单实例多能力耦合，并以语义质量耦合分与结构完整性解耦评价替代单一准确率，其实际意义是更贴近真实助手的复合推理与生成需求。在UNIM消融任务下，完整UNIMA的指标StS为52\.7，高于去除TER变体的指标StS16\.4。该结论适用边界限于所定义的开放问答与三维评测套件，在文档代码与3D生成质量客观性及大模型裁判偏差外推上尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://any2any-mllm.github.io/unim> → <https://any2any-mllm.github.io/unim/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 14. [声音停了之后还怎么找：连续环境语义视听导航与记忆增强目标推理](/posts/conference-cvpr-2026-conference-paper-id-zeng-semantic-audio-visual-navigation-in-continuous-environments-cvpr-2026-paper-cd3d050adb/)

> 英文题目：*[Semantic Audio\-Visual Navigation in Continuous Environments](/posts/conference-cvpr-2026-conference-paper-id-zeng-semantic-audio-visual-navigation-in-continuous-environments-cvpr-2026-paper-cd3d050adb/)*

标签：#多模态学习 #Transformer #音视频 #空间音频信号 #联合声音事件检测定位

评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#联合声音事件检测定位 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zeng_Semantic_Audio-Visual_Navigation_in_Continuous_Environments_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zeng_Semantic_Audio-Visual_Navigation_in_Continuous_Environments_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Yichen Zeng：机构信息未能从会议 PDF 纯文本可靠映射
- Hebaixu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Meng Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Chen Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Kehan Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Gongping Huang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

连续语义视听导航（Semantic Audio\-Visual Navigation in Continuous Environments，SAVN\-CE）要求智能体在Matterport3D连续室内场景中仅凭双耳音频、128x128 RGB\-D与相对初始位姿，在目标间歇发声甚至彻底静默后仍定位语义目标并执行0\.25 m前进与15度转向细粒度动作。所提记忆增强目标描述子网络（Memory\-Augmented Goal descriptor Network，MAGNet）先由多模态观测编码器抽取视觉、音频、动作与位姿特征并写入场景记忆，再由目标描述子网络（Goal Descriptor Network，GDN）融合双耳线索、自运动线索与情景记忆输出空间语义表征，最后由上下文感知策略网络对场景记忆编解码并输出动作分布。相对SAVi仅凭当前音频独立估计位置类别的做法，MAGNet用因果Transformer建模历史目标嵌入与位姿变化的时空连续性，因而在静默期仍可外推目标方位。在1000回合干净测试集上MAGNet成功率（Success Rate，SR）达37\.7%，相对SAVi的25\.6%提升12\.1个百分点。结论仅适用于单静态目标与至多单干扰源的室内仿真，动态声源与多目标尚未验证。原文未披露推理时延与部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/yichenzeng24/SAVN-CE> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 15. [鼓面共振强、单点信噪比低：用模态把多点双轴散斑位移对齐后再反推声音](/posts/conference-cvpr-2026-conference-paper-id-bagon-hearing-the-room-through-the-shape-of-the-drum-modal-guided-cvpr-2026-paper-4ae20496f0/)

> 英文题目：*[Hearing the Room Through the Shape of the Drum: Modal\-Guided Sound Recovery from Multi\-Point Surface Vibrations](/posts/conference-cvpr-2026-conference-paper-id-bagon-hearing-the-room-through-the-shape-of-the-drum-modal-guided-cvpr-2026-paper-4ae20496f0/)*

标签：#信号处理 #多通道 #音乐 #音频修复

评分：**7.4/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.4/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频修复 | 主方法：#信号处理

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Bagon_Hearing_the_Room_Through_the_Shape_of_the_Drum_Modal-Guided_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Bagon_Hearing_the_Room_Through_the_Shape_of_the_Drum_Modal-Guided_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Shai Bagon：机构信息未能从会议 PDF 纯文本可靠映射
- Matan Kichler：机构信息未能从会议 PDF 纯文本可靠映射
- Mark Sheinin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为同一固体表面激光散斑网格采集的多点双轴表面倾斜振动信号，输出为场景声源波形，难点在于固体模态传声带来频率相关相位差与共振音染，使简单平均相消且全局延时无法对齐各点高频成分。先对长时录音计算跨点频谱幅值标准差并经平滑峰检、形状去相关与物理一致性筛选得到模态频率与梯度形状，其输出作为结构先验进入下一步。再将解析二阶振子传递函数与模态梯度代入卷积前向模型，以显式刻画声源到各点振动的频率响应与相位关系，该模型直接约束后续反演。最后联合优化声源波形与模态耦合系数并加导数正则以反演去混响去噪，得到频谱更平坦的重建信号。在薯片袋与鼓膜对比测试集下，顶部薯片袋场景的采集帧率指标为44 100 fps，高于常规场景的采集帧率指标22 000 fps。相对单点回放、平均与延时求和，该机制以频率相关相位对齐与共振均衡代替全局延时假设，实际意义是将物体视作分布式麦克风阵列解码。该结论适用边界受限于线性模态、可辨识宽带激励与足够覆盖的激光网格，柔软低频物体与高频密集模态为失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 复现相关资源：<https://shaibagon.github.io/hearing_the_shape_of_the_drum> → <https://shaibagon.github.io/hearing_the_shape_of_the_drum/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 16. [单图加文本加音频做分钟级视频：Soul 用关键帧锚定与阈值码本抑制长时漂移](/posts/conference-cvpr-2026-conference-paper-id-zhang-soul-breathe-life-into-digital-human-for-high-fidelity-long-term-multimodal-cvpr-2026-paper-370245bf99/)

> 英文题目：*[Soul: Breathe Life into Digital Human for High\-fidelity Long\-term Multimodal Animation](/posts/conference-cvpr-2026-conference-paper-id-zhang-soul-breathe-life-into-digital-human-for-high-fidelity-long-term-multimodal-cvpr-2026-paper-370245bf99/)*

标签：#基准测试 #数据集 #扩散模型 #多模态学习 #音视频生成

评分：**7.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音视频生成 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_Soul_Breathe_Life_into_Digital_Human_for_High-fidelity_Long-term_Multimodal_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_Soul_Breathe_Life_into_Digital_Human_for_High-fidelity_Long-term_Multimodal_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Jiangning Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Junwei Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenye Gan：机构信息未能从会议 PDF 纯文本可靠映射
- Donghao Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Chuming Lin：机构信息未能从会议 PDF 纯文本可靠映射
- FeiFan Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Xu Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Jianlong Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuansen Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yijia Hong：机构信息未能从会议 PDF 纯文本可靠映射
- Weijian Cao：机构信息未能从会议 PDF 纯文本可靠映射
- Han Feng：机构信息未能从会议 PDF 纯文本可靠映射
- Xu Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Chencan Fu：机构信息未能从会议 PDF 纯文本可靠映射
- Keke He：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaobin Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Chengjie Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务以单帧人像、文本提示与语音为输入生成长时高清数字人视频，输出需同时满足口唇同步、表情生动、文本语义跟随与身份保持，难点在于长时自回归易漂移且语音与文本控制易耦合。首先以自动化管线构建含肖像、上半身、全身等多场景的Soul\-1M并在Wan2\.2\-5B基座上进行多模态训练，为模型提供身份与场景先验。接着在DiT块中新增由文本注意力初始化的Audio\-Attention注入Whisper语音特征，使上一步学到的生成能力解耦为语音管口型表情、文本管动作场景。然后利用片段间隐特征重叠与阈值感知码本替换将前序隐特征拉回训练分布，以支撑长时推理一致性，最后经步数与无分类器引导联合蒸馏及轻量VAE解码器压缩推理。与短片段训练加直接外推不同，该工作显式约束推理态隐特征偏移而非放任误差累积。在Soul\-Bench基准下，Soul的Video\-Text Consistence指标为4\.85，高于HunyuanVideo\-Avatar的Video\-Text Consistence指标4\.82。该结论适用边界受限于已覆盖的人像与动漫动物分布，高度复杂全身大动作仍可能出现伪影尚未验证外推。训练成本为在64卡上全量微调多阶段高分辨率视频，默认129×1088×1920单卡端到端延迟从1019\.2秒降至89\.4秒实现11\.4倍加速。

🔗 **开源资源**

- 代码相关资源：<https://zhangzjn.github.io/projects/Soul/> — 链接可访问（HTTP 200）
- 第三方资源：<https://app.heygen.com/> — 暂时无法访问
- 第三方资源：<https://lumalabs.ai/ray> — 暂时无法访问
- 第三方资源：<https://klingai.com/cn/> → <https://klingai.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 17. [粗框也要贴边、对时也要对帧：声画同步实例编辑的空间与时间分工](/posts/conference-cvpr-2026-conference-paper-id-zheng-audio-sync-video-instance-editing-with-granularity-aware-mask-refiner-cvpr-2026-paper-fa82241541/)

> 英文题目：*[Audio\-sync Video Instance Editing with Granularity\-Aware Mask Refiner](/posts/conference-cvpr-2026-conference-paper-id-zheng-audio-sync-video-instance-editing-with-granularity-aware-mask-refiner-cvpr-2026-paper-fa82241541/)*

标签：#数据集 #流匹配 #音视频 #音视频生成

评分：**7.4/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.3/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#流匹配

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zheng_Audio-sync_Video_Instance_Editing_with_Granularity-Aware_Mask_Refiner_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zheng_Audio-sync_Video_Instance_Editing_with_Granularity-Aware_Mask_Refiner_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Haojie Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Shuchen Weng：机构信息未能从会议 PDF 纯文本可靠映射
- Jingqi Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Siqi Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Boxin Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Xinlong Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为原视频、粗粒度实例遮罩与文本编辑指令，输出为目标实例外观或语音被改写且音画同步、背景与非目标声音保持不变的视频，难点在于粗遮罩空间不准与音频视频帧级同步难以兼顾。音频同步视频主干先将文本、视频与精选音频编码为隐token并以帧级交叉注意力生成编辑结果，为后续约束提供时序对齐基础。粒度感知遮罩精炼器以视频token替代文本并注入精度因子与音频线索，将粗遮罩迭代精化后回送主干作为区域约束，实现空间精度与时间引导分离。随后自反馈音频智能体经分离\-生成\-混音\-返工产生精选音频，为前两步提供时序引导并形成闭环。与仅做场景级对齐或反演再生的已有方法不同，该框架显式分离空间精化与音频引导并互相反馈，具有实例级可控意义。在音频智能体评测设置下，自反馈音频智能体在AF条件的Acceptable或Perfect占比指标为91%以上，高于在RP条件的Acceptable或Perfect占比指标85%。该结论适用边界受限于单主发声实例短片段编辑，多实例需串行处理，长视频与极端遮罩退化尚未验证，其训练成本为在8块NVIDIA A800硬件上训练160k步。

🔗 **开源资源**

- 演示资源：<https://hjzheng.net/projects/AVI-Edit/> — 链接可访问（HTTP 200）
- 第三方资源：<https://elevenlabs.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://openai.com/index/sora-2/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 18. [稀疏上下文下房间脉冲响应为何只能生成分布：FLAC 的多模态流匹配做法](/posts/conference-cvpr-2026-conference-paper-id-brunetto-few-shot-acoustic-synthesis-with-multimodal-flow-matching-cvpr-2026-paper-a8aab943b9/)

> 英文题目：*[Few\-shot Acoustic Synthesis with Multimodal Flow Matching](/posts/conference-cvpr-2026-conference-paper-id-brunetto-few-shot-acoustic-synthesis-with-multimodal-flow-matching-cvpr-2026-paper-a8aab943b9/)*

标签：#流匹配 #多模态学习 #空间音频 #房间脉冲响应估计

评分：**7.3/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#房间脉冲响应估计 | 主方法：#流匹配

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Brunetto_Few-shot_Acoustic_Synthesis_with_Multimodal_Flow_Matching_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Brunetto_Few-shot_Acoustic_Synthesis_with_Multimodal_Flow_Matching_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Amandine Brunetto：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

少样本声学合成需以少量参考房间脉冲响应、全景深度图与传感器位姿为输入，为新房间任意声源\-接收对生成单通道全向房间脉冲响应，难点在于几何与材质未知导致多解并存而确定性映射被迫输出平均解。先用预训练变分自编码器将22050Hz真值波形编码为紧凑隐变量z0以降低建模维度，再将该隐变量与高斯噪声线性插值构造整流流训练轨迹zt并以多模态上下文为条件用扩散变换器学习输运速度场，最后利用学到的条件速度场从高斯噪声出发沿常微分方程从t=1积分至t=0生成隐变量并解码为波形。与加权复制参考波形的xRIR不同，FLAC采样稀疏上下文下的合理分布而非复制历史，从而保持空间连续性并显式刻画不确定性。在AcousticRooms未见房间测试集下，FLAC的T60指标为8\.60±0\.01，低于xRIR的T60指标9\.98。该结论适用边界限于单通道全向合成且全景深度可用场景，真实房间几何标注粗糙及跨域泛化仍受限。训练成本对应单块H100硬件上以批量64训练12层8头变换器的开销，推理开销随积分步数与分类器无关引导强度变化。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 19. [不用表情图片，只用情感语音的差向量去改脸：C\-MET 的跨模态情绪编辑](/posts/conference-cvpr-2026-conference-paper-id-choi-cross-modal-emotion-transfer-for-emotion-editing-in-talking-face-video-cvpr-2026-paper-e6c0de6654/)

> 英文题目：*[Cross\-Modal Emotion Transfer for Emotion Editing in Talking Face Video](/posts/conference-cvpr-2026-conference-paper-id-choi-cross-modal-emotion-transfer-for-emotion-editing-in-talking-face-video-cvpr-2026-paper-e6c0de6654/)*

标签：#对比学习 #多模态学习 #音视频 #语音 #音视频生成

评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Choi_Cross-Modal_Emotion_Transfer_for_Emotion_Editing_in_Talking_Face_Video_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Choi_Cross-Modal_Emotion_Transfer_for_Emotion_Editing_in_Talking_Face_Video_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Chanhyuk Choi：机构信息未能从会议 PDF 纯文本可靠映射
- Taesoo Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Donggyu Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Siyeol Jung：机构信息未能从会议 PDF 纯文本可靠映射
- Taehwan Kim：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

情感编辑说话人脸视频（Emotion Editing in Talking Face Video）任务输入为中性说话视频与目标情感语音，输出为保留唇动与头部姿态但表情转向目标情感的视频，难点在于语音中语言内容与情感纠缠、音频与视觉情感表征存在模态鸿沟。本文跨模态情感迁移（Cross\-Modal Emotion Transfer，C\-MET）将流程拆为三环：先用冻结的预训练音频编码器与解耦表情编码器分别抽取音频与视觉嵌入并做差得到情感语义向量（emotion semantic vector），再经可学习分词器与双向对比学习对齐多模态表征，最后由多模态 Transformer 编码器以语音差向量为条件回归视觉目标差向量，叠加到输入表情嵌入后送入预训练视觉解码器合成。与标签法离散受限、音频法内容情感未解耦、图像法依赖正面参考图不同，该方法直接建模差向量间映射并可作为轻量插件替换重型表情编码器。在 MEAD 上其情感准确率 Accemo 达到 55\.91%，相对最强基线 EDTalk 的 41\.99% 高 13\.92 个百分点，但 FID 为 90\.804 弱于 EDTalk 的 76\.423，FVD 为 329\.862 弱于 293\.904，存在表情动态增强伴随重建指标劣化的权衡。扩展情感语音由 Gemini TTS 合成，无真值视频，仅靠用户研究评估。原文披露单卡 RTX 3090 与优化器配置，未披露学习率、批量大小与训练轮数。

🔗 **开源资源**

- 代码相关资源：<https://chanhyeok-choi.github.io/> — 链接可访问（HTTP 200）
- 演示资源：<https://chanhyeok-choi.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 20. [语义冲突与任务竞争之下统一视频文本到音频生成的三段式解法](/posts/conference-cvpr-2026-conference-paper-id-dai-omni2sound-towards-unified-video-text-to-audio-generation-cvpr-2026-paper-8d449bd610/)

> 英文题目：*[Omni2Sound: Towards Unified Video\-Text\-to\-Audio Generation](/posts/conference-cvpr-2026-conference-paper-id-dai-omni2sound-towards-unified-video-text-to-audio-generation-cvpr-2026-paper-8d449bd610/)*

标签：#基准测试 #数据集 #扩散模型 #多模态学习 #视频到声音生成

评分：**7.3/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：模型报告 | 主任务：#视频到声音生成 | 主方法：#扩散模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Dai_Omni2Sound_Towards_Unified_Video-Text-to-Audio_Generation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Dai_Omni2Sound_Towards_Unified_Video-Text-to-Audio_Generation_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Yusheng Dai：机构信息未能从会议 PDF 纯文本可靠映射
- Zehua Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yuxuan Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Qiuhong Ke：机构信息未能从会议 PDF 纯文本可靠映射
- Jianfei Cai：机构信息未能从会议 PDF 纯文本可靠映射
- Jun Zhu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

统一视频文本到音频生成以视频帧与文本描述为输入，输出高保真且时间同步的音频，难点在于音频固有歧义引发视文语义冲突，以及跨任务零和竞争与模态偏置导致的同步与保真折中。为此先以多智能体管线构建SoundAtlas数据集，将视觉压缩为文本约束并经分级标注与CLAP及视听验证过滤，输出高对齐三元组作为语义桥梁。接着以大规模文本到音频预训练建立生成先验，再将先验模型与SoundAtlas三元组一起送入交错多任务训练，以低频回放协同优化视频到音频与联合生成。最后将收敛后模型送入解耦鲁棒训练，以离屏增强校正文本偏置与视频偏置而不破坏已学优化。与MMAudio与AudioX简单混合异构数据不同，该链条把联合数据当作对齐特征空间的桥梁并把鲁棒增强推迟到收敛后，实际意义在于缓解资源争用并保留双模态保真。在VGGSound\-Omni基准下，Omni2Sound的FAD指标为1\.01，低于MMAudio的FAD指标1\.63。该结论适用边界受限于8秒至10秒短片段与YouTube域，长时序与强离屏影视泛化尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://omni2sound.github.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://openai.com/> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 21. [看见鼓槌落下才发声：用音视频对齐的扩散变换器与语义时间偏好优化做视频生音频](/posts/conference-cvpr-2026-conference-paper-id-wang-hear-what-you-see-video-to-audio-generation-with-diffusion-transformer-and-cvpr-2026-paper-7c8864a62e/)

> 英文题目：*[Hear What You See: Video\-to\-Audio Generation with Diffusion Transformer and Semantic\-Temporal Alignment\-Ranked Direct Preference Optimization](/posts/conference-cvpr-2026-conference-paper-id-wang-hear-what-you-see-video-to-audio-generation-with-diffusion-transformer-and-cvpr-2026-paper-7c8864a62e/)*

标签：#流匹配 #偏好优化 #音视频 #视频到声音生成

评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#视频到声音生成 | 主方法：#流匹配

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Wang_Hear_What_You_See_Video-to-Audio_Generation_with_Diffusion_Transformer_and_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_Hear_What_You_See_Video-to-Audio_Generation_with_Diffusion_Transformer_and_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Kai Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Tao Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Jiayi Lei：机构信息未能从会议 PDF 纯文本可靠映射
- Jing Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jinman Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Weiguo Pian：机构信息未能从会议 PDF 纯文本可靠映射
- Yuan Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Yapeng Tian：机构信息未能从会议 PDF 纯文本可靠映射
- Peng Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Bin Fu：机构信息未能从会议 PDF 纯文本可靠映射
- Yihao Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Dimitrios Hatzinakos：机构信息未能从会议 PDF 纯文本可靠映射
- Yuewen Cao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

视频到音频生成需以无声视频与文本为输入生成44\.1kHz波形，要求语义相符且时间同步，难点在于低帧率语义特征丢失敲击点而高帧率运动特征缺乏语义 grounding。VisioSonic先用多模态条件器分别以CLIP视觉塔抽取低帧率语义嵌入、以Synchformer抽取高帧率时间线索并与文本融合形成层次条件。接着令牌对齐器将视频上采样至音频隐变量长度后沿通道拼接，显式保留音视频时间对应关系。然后视频文本音频共注意力扩散变换器基于整流流匹配迭代去噪生成梅尔隐变量，再经VAE与HiFi\-GAN恢复波形，并以语义时间对齐排序直接偏好优化筛选最优最劣对做迭代微调。与三模态顺序拼接做联合自注意力的MMDiT类方案不同，该设计用门控交叉注意力注入文本而避免文本视频提前混合破坏同步。在VGGSound测试集下，VisioSonic w/ STAR\-DPO的FD\_PaSST指标为55\.48，低于VisioSonic Base的FD\_PaSST指标58\.27。该结论适用边界受限于8秒短片段与VGGSound分布，外域MovieGen上语义指标落后于HunyuanVideoFoley且FD\_VGG并非最优，存在失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 22. [看不见脸时说话人是谁：CineSRD 用视觉锚点加语音语义补齐影视对白](/posts/conference-cvpr-2026-conference-paper-id-huang-cinesrd-leveraging-visual-acoustic-and-linguistic-cues-for-open-world-visual-cvpr-2026-paper-3583d6daa1/)

> 英文题目：*[CineSRD: Leveraging Visual, Acoustic, and Linguistic Cues for Open\-World Visual Media Speaker Diarization](/posts/conference-cvpr-2026-conference-paper-id-huang-cinesrd-leveraging-visual-acoustic-and-linguistic-cues-for-open-world-visual-cvpr-2026-paper-3583d6daa1/)*

标签：#基准测试 #多模态学习 #多语言 #音视频 #说话人分离标注

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#说话人分离标注 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Huang_CineSRD_Leveraging_Visual_Acoustic_and_Linguistic_Cues_for_Open-World_Visual_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Huang_CineSRD_Leveraging_Visual_Acoustic_and_Linguistic_Cues_for_Open-World_Visual_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Liangbin Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaohua Liao：机构信息未能从会议 PDF 纯文本可靠映射
- Chaoqun Cui：机构信息未能从会议 PDF 纯文本可靠映射
- Shijing Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhaolong Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Yanlong Du：机构信息未能从会议 PDF 纯文本可靠映射
- Wenji Mao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

影视级说话人分离标注（speaker diarization）需将字幕中每句台词映射到角色，输入为长视频、分离后语音与字幕时间轴，难点在于长达数十小时的篇幅、单节目超百位说话人、声画不同步与开放环境噪声。CineSRD 先以主动说话人检测加人脸嵌入聚类做视觉锚点注册并投票对齐音色簇得到说话人原型，再将连续 10 句文本与音频送入音频语言模型（audio language model，ALM）做相邻轮次预测并与音色相似度加权融合，最后按轮次边界分组投票并以新说话人分数补充画外角色。相较以往音频聚类或三模态约束传播，该框架以高判别力人脸为锚而非平等融合，有效纠正音色混淆并找回未注册的配角。在 SubtitleSD 中文集上 AVT 设置达到分离错误率（diarization error rate，DER）0\.07561，明显优于 EC2P 三模态的 0\.13451。该结论限于字幕时间轴准确、有清晰人脸的真人影视，动画、重度重叠与无字幕场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 23. [一张图如何长出可走可听的三维声景：SonoWorld 的定位与空间化链路](/posts/conference-cvpr-2026-conference-paper-id-jin-sonoworld-from-one-image-to-a-3d-audio-visual-scene-cvpr-2026-paper-737c7c9dbd/)

> 英文题目：*[SonoWorld: From One Image to a 3D Audio\-Visual Scene](/posts/conference-cvpr-2026-conference-paper-id-jin-sonoworld-from-one-image-to-a-3d-audio-visual-scene-cvpr-2026-paper-737c7c9dbd/)*

标签：#数据集 #信号处理 #空间音频信号 #音视频生成

评分：**7.2/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#信号处理

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Jin_SonoWorld_From_One_Image_to_a_3D_Audio-Visual_Scene_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Jin_SonoWorld_From_One_Image_to_a_3D_Audio-Visual_Scene_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Derong Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Xiyi Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Ming C\. Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Ruohan Gao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务以单张透视RGB图像为输入，输出可自由导航的三维视觉场景与可在任意听者位姿渲染的空间声场，难点在于屏外声源补全、视听语义对齐与几何一致的空间化。SonoWorld采用免训练四阶段流水线，先校准相机俯仰与视场并外绘360°全景，再将全景提升为三维高斯泼溅场景以提供统一几何与深度坐标。接着视觉语言模型提议发声类别，经开放词汇分割与全景掩膜提纯后反投影为三维声音锚点，为每个声源赋予点状、簇状或环境类型与合成提示。最后按类型分别合成单声道并依距离衰减与球谐函数编码为Ambisonics，经头相关传输函数解码为双耳音频，听者位姿更新即驱动视听同步重渲染。与直接由视角视频生成固定点空间音频的方法不同，该方法以全景几何显式锚定声源并区分点状与弥散辐射，从而支持平移的六自由度渲染而非仅旋转。在SONOSCENE360评测基准下，Ours \(Proprietary\)的平均角度误差指标为0\.728，低于OmniAudio的平均角度误差指标1\.449。其适用边界受限于静态图像假设，对警车等运动声源与遮挡严重的屏外动态事件存在失败条件，且依赖外部全景重建与文本到音频先验质量。推理开销方面原文报告Fountain场景在苹果笔记本上音频回调低于1ms，满足5\.3ms缓冲对应的实时交互延迟要求。

🔗 **开源资源**

- 第三方资源：<https://github.com/ZiYang-xie/WorldGen> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 24. [先分清冗余与噪声，再按输入调节瓶颈：SeD\-UD 的分层解耦信息瓶颈](/posts/conference-cvpr-2026-conference-paper-id-li-sed-ud-an-influence-driven-and-hierarchically-decoupled-information-bottleneck-for-multimodal-intent-cvpr-2026-paper-9cdc427f4a/)

> 英文题目：*[SeD\-UD: An Influence\-Driven and Hierarchically\-Decoupled Information Bottleneck for Multimodal Intent Recognition](/posts/conference-cvpr-2026-conference-paper-id-li-sed-ud-an-influence-driven-and-hierarchically-decoupled-information-bottleneck-for-multimodal-intent-cvpr-2026-paper-9cdc427f4a/)*

标签：#形式化分析 #多模态学习 #音视频 #语音 #口语意图与槽位识别

评分：**7.2/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#口语意图与槽位识别 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Li_SeD-UD_An_Influence-Driven_and_Hierarchically-Decoupled_Information_Bottleneck_for_Multimodal_Intent_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_SeD-UD_An_Influence-Driven_and_Hierarchically-Decoupled_Information_Bottleneck_for_Multimodal_Intent_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Qin Li：机构信息未能从会议 PDF 纯文本可靠映射
- Wenbo Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Limei Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Han Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Junfeng Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Guanying Xu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态意图识别需从文本、语音与视觉输入预测用户意图，难点在于视觉与语音信噪比低、文本存在歧义反讽，且跨模态冗余会引入不一致融合信号。该文提出SeD\-UD，先以模态专用编码器抽取统一维度特征并用跨模态匹配估计单模态冗余度，再以影响因子驱动的输入自适应瓶颈模块对各模态分别压缩重构以去冗余，随后用文本门控调制非文本特征并经多头注意力融合，最后对融合特征估计噪声强度并再次以自适应瓶颈统一去噪后分类。与传统信息瓶颈相比，其差异在于压缩维度与保留参数随样本动态变化，且将冗余与噪声分层解耦处理而非联合压缩。在MELD\-DA测试集上该方法准确率达到63\.72%，超越最强信息瓶颈基线DIB的62\.72%。该结论主要限于MIntRec、MELD\-DA与CH\-SIMS三个基准，开放域口语与强噪声远场语音尚未验证。原文未披露训练时长与部署成本，仅报告单样本推理耗时21\.8 ms。

🔗 **开源资源**

- 代码相关资源：<https://github.com/9meiye/SeD-UD> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 25. [不重训语音大模型，用无声图文与门控交叉注意力教它看图说话](/posts/conference-cvpr-2026-conference-paper-id-royer-vision-speech-models-teaching-speech-models-to-converse-about-images-cvpr-2026-paper-e94d4439be/)

> 英文题目：*[Vision\-Speech Models: Teaching Speech Models to Converse about Images](/posts/conference-cvpr-2026-conference-paper-id-royer-vision-speech-models-teaching-speech-models-to-converse-about-images-cvpr-2026-paper-e94d4439be/)*

标签：#Adapter #多模态模型 #实时处理 #语音 #音视频交互

评分：**7.2/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.9/1 | 影响力 1.0/1.5 | 开源 0.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：模型报告 | 主任务：#音视频交互 | 主方法：#Adapter

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Royer_Vision-Speech_Models_Teaching_Speech_Models_to_Converse_about_Images_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Royer_Vision-Speech_Models_Teaching_Speech_Models_to_Converse_about_Images_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Amélie Royer：机构信息未能从会议 PDF 纯文本可靠映射
- Moritz Böhle：机构信息未能从会议 PDF 纯文本可靠映射
- Laurent Mazaré：机构信息未能从会议 PDF 纯文本可靠映射
- Neil Zeghidour：机构信息未能从会议 PDF 纯文本可靠映射
- Alexandre Défossez：机构信息未能从会议 PDF 纯文本可靠映射
- Patrick Pérez：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以单图与用户语音为输入，由全双工语音对话模型直接生成语音与时间对齐文本回复并支持多轮闲聊，难点在于图声配对稀缺、推理需满足12\.5Hz编解码对应的80ms实时阈值且不能丢失语调情感。方法第一步冻结Moshi语音骨干与图像编码器，仅训练每层门控交叉注意力适配器，以语音token为查询、图像嵌入为键值做残差更新并缓存图像键值复用。第二步将上一步适配器的视觉注入与混合批次训练衔接，每批混合大量无声图文与少量带音频样本，利用骨干同时预测文本与音频的特性实现文本到语音迁移。第三步把视觉问答能力接入双智能体合成的口语视觉对话，并拼接无关闲聊前后缀以训练话题切换与门控开关。与直接拼接图像token或三模态联合预训练相比，门控为零时退化为原语音模型，避免占用KV缓存与破坏位置编码。在OCR\-VQA任务下，含10%口语样本训练的模型准确率为60\.7%，高于无音频样本条件的准确率36\.8%。其适用边界受限于评测多为合成语音复述的单轮问答与人工拼接切换，对真实交互与长上下文尚未验证。训练成本为视觉对话模型50k步批量64在8卡H100上约一天，推理开销在L4上每步仅增加7ms延迟，总计51ms仍在实时阈值内。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 26. [电影混音三轨分离：用脸与场景两路视觉约束生成式分离](/posts/conference-cvpr-2026-conference-paper-id-zhang-cinematic-audio-source-separation-using-visual-cues-cvpr-2026-paper-a235892c6e/)

> 英文题目：*[Cinematic Audio Source Separation Using Visual Cues](/posts/conference-cvpr-2026-conference-paper-id-zhang-cinematic-audio-source-separation-using-visual-cues-cvpr-2026-paper-a235892c6e/)*

标签：#流匹配 #环境声 #音乐 #语音 #音视频声源分离

评分：**7.2/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频声源分离 | 主方法：#流匹配

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_Cinematic_Audio_Source_Separation_Using_Visual_Cues_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_Cinematic_Audio_Source_Separation_Using_Visual_Cues_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Kang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Suyeon Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Arda Senocak：机构信息未能从会议 PDF 纯文本可靠映射
- Joon Son Chung：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

电影音频源分离（Cinematic Audio Source Separation，CASS）需将单声道混合音分解为对白（DX）、音效（FX）与音乐（MX）三轨，难点在于三者频谱重叠严重且真实电影缺乏孤立分轨真值。作者用大规模野外数据合成训练对：以LRS3唇同步人脸视频配对白，以VGGSound事件视频配音效，以FMA无视频音乐混合，构造双视频流监督。再由冻结的人脸编码器与场景编码器抽取特征，经独立投影与融合得到视觉条件向量，输入基于卷积U\-Net的向量场估计器。最后以条件流匹配（Conditional Flow Matching，CFM）从高斯噪声联合生成三路频谱，并用逆短时傅里叶变换恢复波形。在自建的60秒级AVDnR测试集上，该模型以平均FAD 0\.84超过最强的BandIt的2\.15，同时MOS达到3\.90显著领先，真实电影MOS 4\.13亦领先BandIt的3\.78。该结论依赖合成分布与16 kHz单声道设定，对多说话人重叠、强混响影院母带及长时一致性的外推尚未验证。训练需4张RTX 4090运行60万步，推理默认128步欧拉积分，计算开销明显高于判别式基线。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 27. [人声与人脸为何总对不上：用不对称时间窗口重建音画同步](/posts/conference-cvpr-2026-conference-paper-id-zhang-uniavgen-unified-audio-and-video-generation-with-asymmetric-cross-modal-interactions-cvpr-2026-paper-f6bcbb6891/)

> 英文题目：*[UniAVGen: Unified Audio and Video Generation with Asymmetric Cross\-Modal Interactions](/posts/conference-cvpr-2026-conference-paper-id-zhang-uniavgen-unified-audio-and-video-generation-with-asymmetric-cross-modal-interactions-cvpr-2026-paper-f6bcbb6891/)*

标签：#扩散模型 #多任务学习 #音视频 #语音 #音视频生成

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_UniAVGen_Unified_Audio_and_Video_Generation_with_Asymmetric_Cross-Modal_Interactions_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_UniAVGen_Unified_Audio_and_Video_Generation_with_Asymmetric_Cross-Modal_Interactions_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Guozhen Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zixiang Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Teng Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Ziqiao Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Youliang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yi Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yuan Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Qinglin Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Limin Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

面向以参考图像与文本提示同步生成带语音视频的人为中心联合任务，模型需同时保证唇音同步与语义一致，难点在于跨模态时序错位、表情与情感漂移以及背景无关相关干扰。UniAVGen先以视频与音频双分支扩散变换器构建对称表征以奠定跨层特征对应基础，其输出进入非对称跨模态交互完成帧级双向查询。该交互输出再经人脸感知调制聚焦面部显著区并随训练逐步放宽以保护背景，调制后的联合表征进入推理侧模态感知无分类器引导以放大跨模态条件信号。与全局交互或对称时序交互不同，非对称设计让音频到视频感知邻帧动态、视频到音频经插值平滑捕获邻段音频线索，更契合协同发音与表情连续性并改善域外泛化。在自建100例混合真实与AIGC测试集下，UniAVGen的WER为0\.151，低于Ovi的WER 0\.216。该结论适用边界受限于英语人类说话短片段与上述百例评测，动漫泛化与多人长时强噪声场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://mcg-nju.github.io/UniAVGen/> — 链接可访问（HTTP 200）
- 第三方资源：<https://wan.video/> — 链接可访问（HTTP 200）
- 模型相关资源：<https://huggingface.co/papers/2511> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 28. [画面内外都要出声：OmniSonic 如何把语音和环境声放在同一视频里生成](/posts/conference-cvpr-2026-conference-paper-id-pian-omnisonic-towards-universal-and-holistic-audio-generation-from-video-and-cvpr-2026-paper-e3d07ff5eb/)

> 英文题目：*[OmniSonic: Towards Universal and Holistic Audio Generation from Video and Text](/posts/conference-cvpr-2026-conference-paper-id-pian-omnisonic-towards-universal-and-holistic-audio-generation-from-video-and-cvpr-2026-paper-e3d07ff5eb/)*

标签：#基准测试 #流匹配 #环境声 #语音 #视频到声音生成

评分：**7.1/10** | 创新 1.6/2 | 技术严谨 1.3/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#视频到声音生成 | 主方法：#流匹配

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Pian_OmniSonic_Towards_Universal_and_Holistic_Audio_Generation_from_Video_and_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Pian_OmniSonic_Towards_Universal_and_Holistic_Audio_Generation_from_Video_and_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Weiguo Pian：机构信息未能从会议 PDF 纯文本可靠映射
- Saksham Singh Kushwaha：机构信息未能从会议 PDF 纯文本可靠映射
- Zhimin Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Shijian Deng：机构信息未能从会议 PDF 纯文本可靠映射
- Kai Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yunhui Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Yapeng Tian：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

通用全景音频生成以静音视频帧、环境描述文本与语音转写为输入，输出同时包含屏上与屏外环境声及语音的完整声景，难点在于跨域异构声源的语义解耦、语音内容准确性与多源混合的时序连贯性。该方法先用环境编码器、语音编码器与视觉编码器分别提取三类条件表征，再以扩散隐变量为查询经三路交叉注意力并行查询屏上环境、屏外环境与语音条件，并仅对视觉token段施加旋转位置编码以注入时序对齐线索。然后由混合专家门控按上下文动态加权融合三路输出，并送入流匹配扩散主干与变分自编码器声码器重建波形。与仅建模环境声的VinTAGe、MMAudio和HunyuanVideo\-Foley相比，关键差异在于将语音显式建模为与视频绑定的第三条件分支并以门控自适应平衡语音与环境影响，从而在混合场景保持语义完整与自然融合。在UniHAGen\-Bench基准评测下，OmniSonic的FAD指标为3\.07，低于VoiceLDM的FAD指标3\.58。该结论适用边界受限于人工按信噪比混合的VGGSound与LRS3构建的1003个评测样本，对真实野外多说话人与强混响的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://weiguopian.github.io/OmniSonic_> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 29. [只听见声音不够：当语义对不上时用双耳空间线索做视听推理](/posts/conference-cvpr-2026-conference-paper-id-ryu-hear-you-are-teaching-llms-spatial-reasoning-with-vision-and-cvpr-2026-paper-5f57a24666/)

> 英文题目：*[Hear you are: Teaching LLMs Spatial Reasoning with Vision and Spatial Sound](/posts/conference-cvpr-2026-conference-paper-id-ryu-hear-you-are-teaching-llms-spatial-reasoning-with-vision-and-cvpr-2026-paper-5f57a24666/)*

标签：#数据集 #多模态学习 #空间音频信号 #音视频问答

评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频问答 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Ryu_Hear_you_are_Teaching_LLMs_Spatial_Reasoning_with_Vision_and_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Ryu_Hear_you_are_Teaching_LLMs_Spatial_Reasoning_with_Vision_and_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Hyeonggon Ryu：机构信息未能从会议 PDF 纯文本可靠映射
- Joon Son Chung：机构信息未能从会议 PDF 纯文本可靠映射
- David Harwath：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为360度全景图像与10秒双耳音频及自然语言问题，输出为声源类别、方位角与俯仰角、距离及跨模态空间关系判断，难点在于发声体不可见或多个同类可见物体共享语义线索，仅靠语义匹配无法定位。方法链分三步：先以视觉编码器保留全景空间切分特征并以双耳音频编码器保留方位线索，再经各自Q\-Former投影器分别映射为128个视觉与64个音频查询令牌输入大语言模型，最后由Qwen2\-7B\-Instruct联合问题文本生成答案，训练前另以单模态分类与定位任务对编码器热启动。与单声道声源定位和音视频大模型的关键差异是显式引入双耳方向信息而非仅靠语义相似检索，使模型能在视觉相似物体并存时做空间消歧，具有实际意义。在Hear You Are QA测试集下，本方法的Q8 DoA准确率为64\.27，高于VideoLLaMA2的Q8 DoA准确率46\.37。结论适用边界仅限72个训练与9个测试Matterport3D室内仿真场景，对真实录音、户外与动态声源尚未验证，外推受限。训练成本为8张A5000上训练3个周期约3天，推理开销与部署硬件细节原文未进一步披露。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 30. [情绪语音为何更难对齐：用结构先验把口型与情绪分开建模](/posts/conference-cvpr-2026-conference-paper-id-xu-emotag-emotion-aware-talking-head-synthesis-on-gaussian-splatting-with-few-shot-cvpr-2026-paper-a0ca0e5eff/)

> 英文题目：*[EmoTaG: Emotion\-Aware Talking Head Synthesis on Gaussian Splatting with Few\-Shot Personalization](/posts/conference-cvpr-2026-conference-paper-id-xu-emotag-emotion-aware-talking-head-synthesis-on-gaussian-splatting-with-few-shot-cvpr-2026-paper-a0ca0e5eff/)*

标签：#生成模型 #少样本 #语音 #音视频生成

评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#生成模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Xu_EmoTaG_Emotion-Aware_Talking_Head_Synthesis_on_Gaussian_Splatting_with_Few-Shot_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_EmoTaG_Emotion-Aware_Talking_Head_Synthesis_on_Gaussian_Splatting_with_Few-Shot_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Haolan Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Keli Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Lei Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Ning Bi：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoming Liu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频驱动3D说话头合成需从语音生成同步且情感一致的头部几何与外观，而情感语音的口型涨落与上半脸运动显著强于中性语音，少样本下无约束3D高斯变形极易出现几何撕裂与情感失配。该工作先以Wav2Vec 2\.0音频特征与OpenFace动作单元特征为输入，经身份调制的编码器得到统一运动表征，再由三分支解码器分别预测中性发音基运动、情感残差运动与帧级融合门控。融合后的FLAME表情与下颌姿态驱动绑定的3D高斯场做刚性跟随变形，口内高斯再叠加精细残差位移，同时DeepFace蒸馏的类别分布与强度分数分别约束残差潜变量与门控输出。相比直接变形高斯或仅建模音素映射的InsTaG与MimicTalk，该显式几何先验加语音韵律与情感强度解耦的设计兼顾了稳定性与表现力。在情感自重建评测中该方法PSNR达到29\.95，明显高于InsTaG的27\.82与TalkingGaussian的27\.84，且在高强度表情下优势更大。但结论主要限于5秒适应的正面裁剪视频与给定姿态表情辅助帧条件，未验证大姿态、遮挡与无辅助线索下的外推能力。原文披露单卡RTX A6000上预训练250K迭代而新身份适配20K迭代约11分钟，推理约76\.4 FPS。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 31. [把长相交给参考图：参考引导深度压缩如何让说话人像视频实时可流式生成](/posts/conference-cvpr-2026-conference-paper-id-xu-real-time-generation-of-streamable-talking-portrait-video-with-reference-guided-deep-cvpr-2026-paper-24acc49f71/)

> 英文题目：*[Real\-Time Generation of Streamable Talking Portrait Video with Reference\-Guided Deep Compression VAEs](/posts/conference-cvpr-2026-conference-paper-id-xu-real-time-generation-of-streamable-talking-portrait-video-with-reference-guided-deep-cvpr-2026-paper-24acc49f71/)*

标签：#自回归模型 #变分自编码器 #实时处理 #流式处理 #音视频生成

评分：**7.1/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.4/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#变分自编码器

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_Real-Time_Generation_of_Streamable_Talking_Portrait_Video_with_Reference-Guided_Deep_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Sicheng Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Deng：机构信息未能从会议 PDF 纯文本可靠映射
- Shoukang Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Yichuan Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yizhong Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhan Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaolong Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Baining Guo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务以一张或多张参考人像与任意语音为输入，流式输出任意时长、唇音同步的半身说话人视频，难点是超高压缩下保真、长时因果一致与低延迟难以兼得。方法分两级：参考引导深度压缩因果视频变分自编码器（causal video VAE）先把视频压为紧凑隐变量，参考引导融合模块把参考图特征在解码中间层注入，使隐变量主载运动、解码时补回外观；块自回归整流流变换器（blockwise autoregressive Rectified Flow Transformer）以音频与参考隐变量为条件逐块去噪生成隐序列，再流式送入因果解码器成像。与复用通用大隐空间的肖像扩散模型不同，该设计把人物先验转化为压缩增益并原生支持键值缓存（KV caching）增量推理。在512×512 HDTF未见身份评测中，单参考取得同步置信度8\.943、同步距离6\.286、头动音频对齐0\.699，优于Sonic的8\.799、6\.602、0\.689，但FVD25的62\.300弱于Sonic的43\.920；三参考时FVD25降至43\.270追平Sonic，单张H100达42\.3 FPS约25倍于Sonic。适用边界为正脸半身受控说话场景，极端姿态、遮挡、长时一致性外推与训练推理成本均未验证。原文未披露代码权重与训练开销。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 32. [从听见对准到记住行动：HAVE\-Bench 用三层结构测音频视觉模型](/posts/conference-cvpr-2026-conference-paper-id-zhong-have-bench-hierarchical-audio-visual-evaluation-from-perception-to-interaction-cvpr-2026-paper-666768947c/)

> 英文题目：*[HAVE\-Bench: Hierarchical Audio\-Visual Evaluation from Perception to Interaction](/posts/conference-cvpr-2026-conference-paper-id-zhong-have-bench-hierarchical-audio-visual-evaluation-from-perception-to-interaction-cvpr-2026-paper-666768947c/)*

标签：#基准测试 #基准设计 #音视频 #音视频问答

评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频问答 | 主方法：#基准设计

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhong_HAVE-Bench_Hierarchical_Audio-Visual_Evaluation_from_Perception_to_Interaction_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhong_HAVE-Bench_Hierarchical_Audio-Visual_Evaluation_from_Perception_to_Interaction_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Muyan Zhong：机构信息未能从会议 PDF 纯文本可靠映射
- Erfei Cui：机构信息未能从会议 PDF 纯文本可靠映射
- Sen Xing：机构信息未能从会议 PDF 纯文本可靠映射
- Weiyun Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Wen Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuchen Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Yanting Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaowei Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Wenhai Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Chao Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Jifeng Dai：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该基准输入为图像或街景与语音或环境声的组合，输出为单选、开放回答或多轮动作序列，难点在于长时多源音频理解、跨模态多跳推理与跨轮记忆规划。构建链分四步：先按感知、推理、交互划分认知层级并区分指令性音频与上下文音频，再对图文问答做口语化清洗与语音合成以形成语音指令任务，接着对视频关键帧与音频做对齐过滤并人工构造细粒度匹配与推理问题，最后为导航、解谜与音乐复现实例化多轮任务图与转移判据。与已有音视频评测相比，机制差异在于把被动感知扩展到目标驱动的主动交互，并用统一评测工具支持混合输入与多轮裁决。在包含2451个样本的评测中，Gemini2\.5\-Flash在交互层平均成功率仅为30\.4%，显著低于其感知与推理表现，揭示了记忆与规划瓶颈。结论适用于短至中长语音与结构化视觉场景，对开放域长对话与实时流式交互的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 33. [用不相关扰动不变、相关损坏敏感拆开音视频：MoD\-DPO 如何压制跨模态幻觉](/posts/conference-cvpr-2026-conference-paper-id-chaubey-mod-dpo-towards-mitigating-cross-modal-hallucinations-in-omni-llms-using-modality-cvpr-2026-paper-f9233ed777/)

> 英文题目：*[MoD\-DPO: Towards Mitigating Cross\-modal Hallucinations in Omni LLMs using Modality Decoupled Preference Optimization](/posts/conference-cvpr-2026-conference-paper-id-chaubey-mod-dpo-towards-mitigating-cross-modal-hallucinations-in-omni-llms-using-modality-cvpr-2026-paper-f9233ed777/)*

标签：#偏好优化 #多模态模型 #后训练 #音视频 #音视频问答

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频问答 | 主方法：#偏好优化

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Chaubey_MoD-DPO_Towards_Mitigating_Cross-modal_Hallucinations_in_Omni_LLMs_using_Modality_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Chaubey_MoD-DPO_Towards_Mitigating_Cross-modal_Hallucinations_in_Omni_LLMs_using_Modality_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Ashutosh Chaubey：机构信息未能从会议 PDF 纯文本可靠映射
- Jiacheng Pang：机构信息未能从会议 PDF 纯文本可靠映射
- Mohammad Soleymani：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为包含音频流、视频帧与文本问句的全模态三元组，输出为自然语言回答，难点在于视觉线索诱发虚假听觉描述与音频线索诱发虚假视觉描述，以及大语言模型先验压制弱视听证据而产生空想。方法先用解耦字幕管线分别抽取视觉与音频证据并构造模态专属问答，为偏好学习提供可归因的正负样本来源。接着以损坏无关模态保持分布不变、损坏相关模态放大分布偏移的方式重写DPO奖励并求闭式偏好损失，使模型对无关扰动不变而对相关证据敏感。然后叠加仅文本输入的语言先验去偏惩罚以抑制空想回答，前一步的解耦偏好目标输出直接作为最终联合训练目标进入优化。与OmniDPO等仅构造多模态偏好对的方法不同，该工作在目标函数层面强制证据归因而非依赖数据隐式学习，因而能改变模型内部决策边界而非事后校正。在AVHBench音频驱动视频幻觉任务评测下，Qwen2\.5Omni加MoD\-DPO\+\+的准确率为88\.19，高于同基座加OmniDPO的准确率85\.34。该结论的适用边界仅限于单模态强相关问答与匹配判断，对需互补融合的联合音视频推理尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 34. [同时去噪的音视频为何对不齐：Harmony 用跨任务监督稳住对应关系](/posts/conference-cvpr-2026-conference-paper-id-hu-harmony-harmonizing-audio-and-video-generation-through-cross-task-synergy-cvpr-2026-paper-49f9ccfa63/)

> 英文题目：*[Harmony: Harmonizing Audio and Video Generation through Cross\-Task Synergy](/posts/conference-cvpr-2026-conference-paper-id-hu-harmony-harmonizing-audio-and-video-generation-through-cross-task-synergy-cvpr-2026-paper-49f9ccfa63/)*

标签：#扩散模型 #音视频 #音乐 #语音 #音视频生成

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Hu_Harmony_Harmonizing_Audio_and_Video_Generation_through_Cross-Task_Synergy_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Hu_Harmony_Harmonizing_Audio_and_Video_Generation_through_Cross-Task_Synergy_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Teng Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhentao Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Guozhen Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zihan Su：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengguang Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Youliang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuan Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Qinglin Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Ran Yi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Harmony处理文本加参考图像与参考音频到同步音视频的联合生成，需同时满足唇动级时间对齐与情感氛围级风格一致。难点在于双路噪声潜变量共演化导致对应关系漂移，早期高噪声阶段最优映射持续游移。方法链分三步衔接：跨任务协同先以音频驱动视频与视频驱动音频的单侧干净条件稳定对齐先验，再将共享交互参数用于联合去噪。全局\-局部分离交互接着用旋转位置编码缩放对齐的帧级交叉注意力负责局部时间同步，并用视觉调制参考音频潜变量负责全局风格注入。同步增强无分类器引导最后在推理时以静音音频与静态视频为负锚分离并放大音画关联向量。相比单体全局交叉注意力和仅增强文本依从的标准引导，该设计将风格与时间解耦并直接优化跨模态一致。在Harmony\-Bench三类平均基准下，Harmony的Sync\-C得分为5\.61，高于Ovi的Sync\-C得分为4\.04。该结论适用边界受限于短片段人物说话与环境声场景，对长时叙事多说话人重叠与音乐泛化尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://sjtuplayer.github.io/projects/Harmony> → <https://sjtuplayer.github.io/projects/Harmony/> — 链接可访问（HTTP 200）
- 第三方资源：<https://gemini.google.com/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 35. [压缩而不丢失细节：OmniRet 如何同时解决三模态检索的效率与保真矛盾](/posts/conference-cvpr-2026-conference-paper-id-huynh-efficient-and-high-fidelity-omni-modality-retrieval-cvpr-2026-paper-6333a25de1/)

> 英文题目：*[Efficient and High\-Fidelity Omni Modality Retrieval](/posts/conference-cvpr-2026-conference-paper-id-huynh-efficient-and-high-fidelity-omni-modality-retrieval-cvpr-2026-paper-6333a25de1/)*

标签：#基准测试 #对比学习 #多模态学习 #大语言模型 #音频检索

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频检索 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Huynh_Efficient_and_High-Fidelity_Omni_Modality_Retrieval_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Huynh_Efficient_and_High-Fidelity_Omni_Modality_Retrieval_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Chuong Huynh：机构信息未能从会议 PDF 纯文本可靠映射
- Manh Luong：机构信息未能从会议 PDF 纯文本可靠映射
- Abhinav Shrivastava：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为跨文本、图像、视频与音频的组合查询与任意模态候选，输出为共享空间中的相似度排序，难点在于媒体编码器输出数百token导致大语言模型计算爆炸与批量受限，以及单向量压缩丢失细粒度细节。方法链分四步：专用视觉与音频编码器抽取媒体特征后由共享媒体重采样器压缩为定长latent，再与文本交织送入冻结并加LoRA的大语言模型作跨模态合成，随后由注意力模块压缩为集合再经注意力切片Wasserstein池化对照可学习参考系生成单向量，最后以难负例InfoNCE加间隔三元组与多样性损失联合优化。与平均池化或\`\[EOS\]\`向量及保留多向量的晚交互不同，该池化将输出视为分布并用切片投影下的一维Monge耦合保留分布结构，兼顾单向量索引效率。扩展M\-BEIR上组合视频文本到视频任务达到86\.2的Recall@5，显著高于VLM2VecV2的76\.4，自建组合音频文本到音频任务为23\.0。结论限于1\.5B主干与约6\.2M查询候选对训练，未验证更大主干、交织混合文档与语音、深度图、3D点云等外推，合成修改文本质量依赖生成模型。训练仅更新约84M参数并冻结编码器与主干，第二阶段批量为3072且每批采样4个任务，推理为单向量余弦检索故索引代价低。

🔗 **开源资源**

- 复现相关资源：<https://hmchuong.github.io/omniret> → <https://hmchuong.github.io/omniret/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 36. [从整轨配音到逐事件导演：EchoFoley 用符号事件表约束何时何物如何发声](/posts/conference-cvpr-2026-conference-paper-id-li-echofoley-event-centric-hierarchical-control-for-video-grounded-creative-sound-generation-cvpr-2026-paper-e5e200c0d1/)

> 英文题目：*[EchoFoley: Event\-Centric Hierarchical Control for Video Grounded Creative Sound Generation](/posts/conference-cvpr-2026-conference-paper-id-li-echofoley-event-centric-hierarchical-control-for-video-grounded-creative-sound-generation-cvpr-2026-paper-e5e200c0d1/)*

标签：#基准测试 #数据集 #多模态学习 #音视频 #视频到声音生成

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.2/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#视频到声音生成 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Li_EchoFoley_Event-Centric_Hierarchical_Control_for_Video_Grounded_Creative_Sound_Generation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_EchoFoley_Event-Centric_Hierarchical_Control_for_Video_Grounded_Creative_Sound_Generation_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Bingxuan Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yiming Cui：机构信息未能从会议 PDF 纯文本可靠映射
- Yicheng He：机构信息未能从会议 PDF 纯文本可靠映射
- Yiwei Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Shu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Longyin Wen：机构信息未能从会议 PDF 纯文本可靠映射
- Yulei Niu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为静音视频与自然语言指令，输出为与画面同步且服从细粒度编辑的声音，难点在于多事件混叠时文本控制常被视觉条件淹没且缺乏可定位的编辑单元。该工作先以发声事件三元组将音频拆为时间戳、语义描述与属性，形成可解释的符号化中间表示，其输出直接作为后续定位与编辑的操作对象。接着构建EchoFoley\-6k基准提供密集标注与层次化指令，为事件级真值对齐与可控性评测提供统一套件，承接符号表示的监督与检验。再由EchoVidia智能体执行慢快思考定位、符号计划设计与分层合成渲染，将修正后的事件计划逐层合成为时间对齐的音频。与现有视频文本到音频模型直接端到端生成不同，该链路把可解释符号计划作为中间接口，从而实现实例级与组级的可控增删改。在EchoFoley\-6k发声事件检测任务下，Gemini\-2\.5 Pro \+ SF的F1分数为0\.74，高于Gemini\-2\.5 Pro的F1分数0\.59。该结论适用边界受限于6秒到30秒运动中心短视频与三类自动可控性度量，尚未验证长视频、外分布音色与真实创作流程迁移。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://echofoley.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 37. [当画面给不出声音线索时，导演脚本如何逐秒指挥视频生音频](/posts/conference-cvpr-2026-conference-paper-id-li-foleydirector-fine-grained-temporal-steering-for-video-to-audio-generation-via-structured-scripts-cvpr-2026-paper-57eadc699d/)

> 英文题目：*[FoleyDirector: Fine\-Grained Temporal Steering for Video\-to\-Audio Generation via Structured Scripts](/posts/conference-cvpr-2026-conference-paper-id-li-foleydirector-fine-grained-temporal-steering-for-video-to-audio-generation-via-structured-scripts-cvpr-2026-paper-57eadc699d/)*

标签：#基准测试 #数据集 #注意力机制 #音视频 #视频到声音生成

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#视频到声音生成 | 主方法：#注意力机制

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Li_FoleyDirector_Fine-Grained_Temporal_Steering_for_Video-to-Audio_Generation_via_Structured_Scripts_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_FoleyDirector_Fine-Grained_Temporal_Steering_for_Video-to-Audio_Generation_via_Structured_Scripts_CVPR_2026_paper.pdf)

👥 **作者与机构**

- You Li：机构信息未能从会议 PDF 纯文本可靠映射
- Dewei Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Fan Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Fu Li：机构信息未能从会议 PDF 纯文本可靠映射
- Dongliang He：机构信息未能从会议 PDF 纯文本可靠映射
- Yi Yang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

视频到音频生成以无声视频与全局文本为输入、输出语义一致且时间对齐的音频，难点在于全局描述无法指定多事件何时发声，且小目标遮挡与画外音缺乏视觉线索易被视觉主导而失控。FoleyDirector先将长视频切分为细粒度时段并为每段生成一句短描述构成结构化时序脚本，为每秒提供补充时序线索。接着脚本引导时序融合模块以新增时序脚本注意力与交错旋转位置编码将脚本特征交错注入预训练MMAudio\-medium音频流，原联合注意力保持不变以保护音质。最后双帧声音合成框架并行渲染画内流与画外流再按时序拼接，实现反事实组合控制，关闭模块即可回退标准视频到音频模式。相对已有方法，其关键差异是不再依赖单一全局文本而引入可开关的逐段脚本控制，在保留基线生成能力的同时增强时序可控性。在DirectorBench基准下，Ours的Overall F1分数为0\.4819，高于Hunyuan\-Foley的Overall F1分数0\.2451。该结论适用边界受限于8秒左右短视频与1秒脚本粒度训练，对更长时序与密集重叠事件尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 38. [合成数据能替代、修正再扩展声源定位训练吗](/posts/conference-cvpr-2026-conference-paper-id-senocak-how-far-can-we-go-with-synthetic-data-for-audio-visual-cvpr-2026-paper-883c5d057d/)

> 英文题目：*[How Far Can We Go With Synthetic Data for Audio\-Visual Sound Source Localization?](/posts/conference-cvpr-2026-conference-paper-id-senocak-how-far-can-we-go-with-synthetic-data-for-audio-visual-cvpr-2026-paper-883c5d057d/)*

标签：#数据集 #数据增强 #音视频 #声源定位

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#声源定位 | 主方法：#数据增强

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Senocak_How_Far_Can_We_Go_With_Synthetic_Data_for_Audio-Visual_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Senocak_How_Far_Can_We_Go_With_Synthetic_Data_for_Audio-Visual_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Arda Senocak：机构信息未能从会议 PDF 纯文本可靠映射
- Sooyoung Park：机构信息未能从会议 PDF 纯文本可靠映射
- Tae\-Hyun Oh：机构信息未能从会议 PDF 纯文本可靠映射
- Joon Son Chung：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

声源定位需以图像与音频对为输入，输出图像中正在发声的区域，实际难点在于真实训练视频多取中间帧导致音视语义错位且数据规模长期受限。先为每个VGGSound类别构建音频与视觉分离的概念词典，以类名为输入负责扩展多样化描述词，输出概念词集合并作为采样输入进入提示生成。再用大语言模型将采样概念转写为图像与音频描述提示，以概念词为输入负责生成可供生成的描述提示，输出提示文本并直接送入合成模型。最后将提示分别送入文本到图像与文本到音频扩散模型，以提示为输入负责合成克隆图像与音频，输出合成集单独或与真实样本混合用于训练对比式ACL\-SSL定位模型。相对模型中心改进，该路线以数据中心视角修正错位样本并实现规模倍增，合成图像配真实音频与混合训练成为关键机制差异。在单源定位评测任务下，\(SynI,RealA\)变体的cIoU指标为55\.13，高于Original基线的cIoU指标48\.03。该结论适用边界受限于VGGSound类别封闭集、单一ACL\-SSL基线与有限倍增规模，开放世界类别与更强生成器下的外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 39. [稀疏线索与异步冲突下，如何让情绪分析先取证再推理](/posts/conference-cvpr-2026-conference-paper-id-xu-emothinker-advancing-visual-acoustic-emotion-analysis-via-structural-token-selection-and-cvpr-2026-paper-b2ccbadc5c/)

> 英文题目：*[EmoThinker: Advancing Visual\-Acoustic Emotion Analysis via Structural Token Selection and Chain\-of\-Thought Reasoning](/posts/conference-cvpr-2026-conference-paper-id-xu-emothinker-advancing-visual-acoustic-emotion-analysis-via-structural-token-selection-and-cvpr-2026-paper-b2ccbadc5c/)*

标签：#数据集 #指令微调 #多模态学习 #音视频 #语音情感识别

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Xu_EmoThinker_Advancing_Visual-Acoustic_Emotion_Analysis_via_Structural_Token_Selection_and_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Xu_EmoThinker_Advancing_Visual-Acoustic_Emotion_Analysis_via_Structural_Token_Selection_and_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Qinfu Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Liyuan Pan：机构信息未能从会议 PDF 纯文本可靠映射
- Yiwei Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Shaozu Yuan：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaqi Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Tianyu Liu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态情感分析以视频帧与对应音频为输入，输出离散情感标签与可解释推理轨迹，难点在于情感线索稀疏局域且视听在时间上天然异步，隐式拼接融合易稀释显著特征并纠缠因果。方法先以结构化token选择将每帧分解为面部焦点与背景上下文，焦点块直通视觉编码保留高信噪线索，背景块经文本查询交叉注意力提纯并随机丢弃冗余，其输出与焦点token共同构成视觉侧表示。接着音频证据抽取器将对数梅尔谱编码映射至统一多模态空间，并以文本为条件聚合韵律音色线索，得到增强的音频token。最后将焦点优先的融合序列送入大语言模型，按情感思维链先独立评估单模态再显式消解冲突，输出最终标签与推理过程。与统一编码加隐式注意力的已有范式不同，该设计把证据获取与推理判断解耦，兼顾显著性与可追溯性。在MELD基准下，EmoThinker的w\-F1为68\.97，高于Emotion\-LLaMA的w\-F1 67\.11。结论适用边界受限于短剪辑表演性情感与七类基本情绪，对Disgust与Fear等尾类仍不稳定，且跨语言自然对话与强噪声场景的外推尚未验证。该工作的硬件为8×NVIDIA 3090 GPUs，并以1 FPS采样视频以降低计算量。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 40. [把七种模态塞进一个自回归模型：Archon 用语义视频与模态链思考做整人生成](/posts/conference-cvpr-2026-conference-paper-id-bao-archon-a-unified-multimodal-model-for-holistic-digital-human-generation-cvpr-2026-paper-3ba87baecb/)

> 英文题目：*[Archon: A Unified Multimodal Model for Holistic Digital Human Generation](/posts/conference-cvpr-2026-conference-paper-id-bao-archon-a-unified-multimodal-model-for-holistic-digital-human-generation-cvpr-2026-paper-3ba87baecb/)*

标签：#扩散模型 #多模态学习 #音视频生成 #文本到语音

评分：**6.9/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：模型报告 | 主任务：#音视频生成 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Bao_Archon_A_Unified_Multimodal_Model_for_Holistic_Digital_Human_Generation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Bao_Archon_A_Unified_Multimodal_Model_for_Holistic_Digital_Human_Generation_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Chong Bao：机构信息未能从会议 PDF 纯文本可靠映射
- Shichen Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Lijun Yu：机构信息未能从会议 PDF 纯文本可靠映射
- David Futschik：机构信息未能从会议 PDF 纯文本可靠映射
- Stylianos Moschoglou：机构信息未能从会议 PDF 纯文本可靠映射
- Shefali Srivastava：机构信息未能从会议 PDF 纯文本可靠映射
- Ziqian Bai：机构信息未能从会议 PDF 纯文本可靠映射
- Feitong Tan：机构信息未能从会议 PDF 纯文本可靠映射
- Guofeng Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhaopeng Cui：机构信息未能从会议 PDF 纯文本可靠映射
- Sean Fanello：机构信息未能从会议 PDF 纯文本可靠映射
- Yinda Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

数字人生成需同时处理文本描述、语音音频、表情姿态与高帧率视频，输入输出可为任意模态子集，直接跨模态映射歧义大且视频离散化后 Token 量远超语言模型上下文。该工作先以模态专用分词器将七种信号统一为离散 Token，再以自回归语言模型建模联合分布并按结构化提示逐模态生成，接着以语义视频为桥梁调用视频扩散模型重建高清画面，推理时插入中间模态构成渐进式思考链。与专家模型各训各任务不同，该框架以共享表示复用跨模态知识并支持任意编辑。在 CelebV\-HQ 语音驱动视频任务上该方法 FID 为 6\.818，显著优于 Hallo3 的 15\.67，且 FVD 与唇同步指标亦具优势，图像条件语音合成的说话人相似度同样占优。结论限于正面独白、中等分辨率与英语主导场景，对极端姿态、多人交互与非语音音频尚未验证。原文披露了以大规模 TPU 集群分别训练语言模型与扩散模型数十天的重型成本，推理需串行自回归加扩散解码，开销高昂。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 41. [倾听塌缩的拆解：先学自发先验再用双轨音频调制的 UniLS](/posts/conference-cvpr-2026-conference-paper-id-chu-unils-end-to-end-audio-driven-avatars-for-unified-listening-and-speaking-cvpr-2026-paper-4cef4e390b/)

> 英文题目：*[UniLS: End\-to\-End Audio\-Driven Avatars for Unified Listening and Speaking](/posts/conference-cvpr-2026-conference-paper-id-chu-unils-end-to-end-audio-driven-avatars-for-unified-listening-and-speaking-cvpr-2026-paper-4cef4e390b/)*

标签：#自回归模型 #端到端学习 #语音 #音视频交互

评分：**6.9/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频交互 | 主方法：#端到端学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Chu_UniLS_End-to-End_Audio-Driven_Avatars_for_Unified_Listening_and_Speaking_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Chu_UniLS_End-to-End_Audio-Driven_Avatars_for_Unified_Listening_and_Speaking_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Xuangeng Chu：机构信息未能从会议 PDF 纯文本可靠映射
- Ruicong Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yifei Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Yun Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yichen Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Bo Zheng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

统一倾听与说话头像以双人语音为输入，同时生成说话者精准口型与倾听者自然反应，难点在于倾听动作与音频弱相关，直接联合训练会坍缩为僵硬扑克脸。第一步在多场景数据上训练无音频块状自回归生成器，学习眨眼点头头部漂移等内部运动先验。第二步冻结主干与wav2vec语音编码器，在每个Transformer块新增分别关注双说话人的双交叉注意力分支，用双音轨语音特征调制先验以实现听说统一驱动。与单向说话模型及非端到端DualTalk不同，该设计保留自发运动多样性同时注入韵律线索，推理时仅需双人音频即可端到端输出双侧FLAME参数序列。在Seamless Interaction测试集下，UniLS的F\-FID为4\.304，低于DualTalk的F\-FID 13\.143。其结论适用边界受限于韵律驱动的反应性倾听，尚未验证语义一致的赞同点头或否定摇头，且块状建模偶发细微不连续。训练成本约为四卡H200上共计40 GPU小时，推理吞吐在单卡上达560\.6 FPS并支持实时运行。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 42. [看得见撞击，还要听得出轻重：PAVAS 把质量与速度写进视频生音频](/posts/conference-cvpr-2026-conference-paper-id-hyun-bin-pavas-physics-aware-video-to-audio-synthesis-cvpr-2026-paper-2d449bdf3c/)

> 英文题目：*[PAVAS: Physics\-Aware Video\-to\-Audio Synthesis](/posts/conference-cvpr-2026-conference-paper-id-hyun-bin-pavas-physics-aware-video-to-audio-synthesis-cvpr-2026-paper-2d449bdf3c/)*

标签：#Adapter #扩散模型 #音视频 #视频到声音生成

评分：**6.9/10** | 创新 1.6/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#视频到声音生成 | 主方法：#Adapter

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Hyun-Bin_PAVAS_Physics-Aware_Video-to-Audio_Synthesis_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Hyun-Bin_PAVAS_Physics-Aware_Video-to-Audio_Synthesis_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Oh Hyun\-Bin：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhta Takida：机构信息未能从会议 PDF 纯文本可靠映射
- Toshimitsu Uesaka：机构信息未能从会议 PDF 纯文本可靠映射
- Tae\-Hyun Oh：机构信息未能从会议 PDF 纯文本可靠映射
- Yuki Mitsufuji：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

视频到音频生成的输入是无声视频与类别文本，输出是时间同步且语义一致的波形，其实际难点在于撞击响度与频谱应随物体质量与运动速度连续变化，而现有模型仅学习外观关联。PAVAS先由物理参数估计器发现运动物体并估计时不变质量与逐帧米制速度，为后续条件提供可解释物理量。接着物理驱动音频适配器将归一化后的质量与速度经傅里叶映射编码，并与对象中心视觉特征融合成物理增强条件。然后该条件以零初始化残差调制注入多模态扩散变换器，引导音频潜变量生成，使扩散轨迹对齐物理一致的视听行为。与直接拼接辅助信号的做法不同，该渐进式残差注入避免扰动原有多模态表征，并使质量与速度效应可控叠加。在VGGSound测试集下，PAVAS\-L的FD\_PaSST指标为47\.38，低于MMAudio\-L的FD\_PaSST指标为60\.60。该结论适用边界限于撞击类短事件与可分割可见物体，对遮挡、离屏声源与材料因素尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://physics-aware-video-to-audio-synthesis.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 43. [不只看脸像不像：用生成器内部的声音嘴型对齐信号抓伪造](/posts/conference-cvpr-2026-conference-paper-id-kim-x-avdt-audio-visual-cross-attention-for-robust-deepfake-detection-cvpr-2026-paper-9fd73e1735/)

> 英文题目：*[X\-AVDT: Audio\-Visual Cross\-Attention for Robust Deepfake Detection](/posts/conference-cvpr-2026-conference-paper-id-kim-x-avdt-audio-visual-cross-attention-for-robust-deepfake-detection-cvpr-2026-paper-9fd73e1735/)*

标签：#数据集 #注意力机制 #鲁棒性 #音视频 #音频深度伪造检测

评分：**6.9/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频深度伪造检测 | 主方法：#注意力机制

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Kim_X-AVDT_Audio-Visual_Cross-Attention_for_Robust_Deepfake_Detection_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Youngseo Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Kwan Yun：机构信息未能从会议 PDF 纯文本可靠映射
- Seokhyeon Hong：机构信息未能从会议 PDF 纯文本可靠映射
- Sihun Cha：机构信息未能从会议 PDF 纯文本可靠映射
- Colette Suhjung Koo：机构信息未能从会议 PDF 纯文本可靠映射
- Junyong Noh：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音视频深度伪造检测以单人含语音人脸视频与配对音频为输入，输出真伪二分类，难点在于扩散与流匹配合成视觉残留弱且跨生成器泛化难。X\-AVDT先以语音条件经变分自编码器编码并做DDIM反演得噪声潜变量再条件重建，输出输入视频、噪声解码、重建解码与绝对残差拼接的十二通道视频复合表示。接着从同一去噪3D U\-Net上采样块抽取以视频隐状态为查询、音频隐状态为键值的交叉注意力特征，重塑为时空对齐的语音运动同步描述子。最后双3D ResNeXt编码器分别编码复合表示与注意力特征并经融合解码器联合二元交叉熵与三元组损失输出真伪，前步的残差与对齐特征共同进入判别器训练。与仅用重建残差或后期融合视听嵌入不同，该机制直接探测生成器为保证唇动同步而施加的内部对齐，因而对未见生成器更具判别性。在MMDF基准测试集下，X\-AVDT的AUROC指标为95\.29，高于RealForensics的AUROC指标92\.42。其结论适用边界受限于单人正脸至侧脸且含稳定唇动语音片段，多说话人与非语音场景尚未验证。其训练成本为单个NVIDIA RTX 3090硬件上训练14小时。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 44. [只听指定的那一个：文本如何从混合画面中挑出目标声音](/posts/conference-cvpr-2026-conference-paper-id-lee-hear-what-matters-text-conditioned-selective-video-to-audio-generation-cvpr-2026-paper-6c63689f44/)

> 英文题目：*[Hear What Matters\! Text\-conditioned Selective Video\-to\-Audio Generation](/posts/conference-cvpr-2026-conference-paper-id-lee-hear-what-matters-text-conditioned-selective-video-to-audio-generation-cvpr-2026-paper-6c63689f44/)*

标签：#知识蒸馏 #流匹配 #多模态学习 #音视频 #视频到声音生成

评分：**6.9/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#视频到声音生成 | 主方法：#流匹配

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Lee_Hear_What_Matters_Text-conditioned_Selective_Video-to-Audio_Generation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Lee_Hear_What_Matters_Text-conditioned_Selective_Video-to-Audio_Generation_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Junwon Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Juhan Nam：机构信息未能从会议 PDF 纯文本可靠映射
- Jiyoung Lee：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

文本条件选择性视频到音频生成的输入是多目标视频与指定目标声源的文本提示，输出是仅与文本意图对应的目标音频，难点在于无源分离真值时冻结视觉编码器输出的特征纠缠且易混入非目标声音。SELVA先在冻结的时空注意力之后插入文本引导的交叉注意力块，以文本特征为键值调制视频隐特征并辅以可学习补充标记抑制无关激活，输出意图聚焦的视频特征。随后该学生编码器以单源视频的教师特征为回归目标做蒸馏学习，使混合视频特征逼近目标单源表征，从而在表征层实现选择性强调与噪声抑制。最后聚焦视频特征与文本共同输入多模态扩散变换器生成器，仅微调视频分支投影与音频分支自适应层归一化并经条件流匹配去噪合成目标音频，第二阶段冻结编码器以解耦表征学习与合成。相对冻结视觉编码器直接生成整体声音的已有方法，该链条把文本当作显式选择器先净化视觉条件再生成，避免了语义对齐但时间漂移的捷径，对后期精细剪辑与混音更具实际意义。在VGG\-MONOAUDIO类间基准下，MMAudio\-S\-16k的DeSync为0\.802，低于VinTAGe的DeSync 1\.292。该结论适用边界受限于人工横向拼接混合视频与短片段评估，对真实空间共存、严重遮挡及复杂属性文本控制尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/jnwnlee/SelVA> — 暂时无法访问
- 演示资源：<https://jnwnlee.github.io/selva-demo/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 45. [不用反演找噪声：以视觉氛围与音高约束同时改风格、保旋律](/posts/conference-cvpr-2026-conference-paper-id-lei-harmonic-canvas-inversion-free-editing-for-visually-guided-music-style-transfer-cvpr-2026-paper-223bf76a09/)

> 英文题目：*[Harmonic Canvas: Inversion\-Free Editing for Visually\-Guided Music Style Transfer](/posts/conference-cvpr-2026-conference-paper-id-lei-harmonic-canvas-inversion-free-editing-for-visually-guided-music-style-transfer-cvpr-2026-paper-223bf76a09/)*

标签：#流匹配 #多模态学习 #音乐 #音乐生成

评分：**6.9/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐生成 | 主方法：#流匹配

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Lei_Harmonic_Canvas_Inversion-Free_Editing_for_Visually-Guided_Music_Style_Transfer_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Lei_Harmonic_Canvas_Inversion-Free_Editing_for_Visually-Guided_Music_Style_Transfer_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Yue Lei：机构信息未能从会议 PDF 纯文本可靠映射
- Siqi Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Ting Zhong：机构信息未能从会议 PDF 纯文本可靠映射
- Fan Zhou：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音乐风格迁移输入为源音乐片段与图文视觉风格条件，输出为保留旋律节奏但改变音色编曲的新片段，难点在于语言难以承载色彩氛围等非言语线索，且大幅改编易引发音高漂移与节奏失真。方法先由双编码融合负责风格理解，将CLIP视觉语言语义嵌入与ViT全局视觉嵌入经池化投影后，与Flan\-T5文本特征一起经跨适配器注入Make\-An\-Audio 3主干，使每层DiT块查询视觉氛围。接着由免逆流编辑负责结构搬运，沿目标与源速度场之差直接推进潜变量而免除扩散反演，其输出进入旋律正则阶段。每步流更新后，可微归一化色度损失对解码波形做潜变量梯度回拉，以十二音级能量分布显式锚定音高，早期强约束锁定旋律、后期余弦衰减释放风格。与ZETA等反演编辑相比，关键差异是免除随机噪声重建与多步反演，改以内循环显式约束音级结构而非依赖隐式保持，因而更稳定且不易累积时序漂移。在反演策略对比评测下，本方法的F0\-PCC为0\.416，高于FlowEdit的F0\-PCC 0\.368。结论适用边界受限于去人声器乐短片段与图文对齐良好的场景，视觉缺失或标题噪声大时增益衰减，跨长时程与开放风格外推尚未验证。训练硬件为L40S GPU并采用1\.5B主干加46\.2M适配器，推理开销对应25步推理设置。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 46. [把叫声、照片和学名对齐到同一空间：BioVITA 的三模态生物表征路线](/posts/conference-cvpr-2026-conference-paper-id-shinoda-biovita-biological-dataset-model-and-benchmark-for-visual-textual-acoustic-alignment-cvpr-2026-paper-b00530c349/)

> 英文题目：*[BioVITA: Biological Dataset, Model, and Benchmark for Visual\-Textual\-Acoustic Alignment](/posts/conference-cvpr-2026-conference-paper-id-shinoda-biovita-biological-dataset-model-and-benchmark-for-visual-textual-acoustic-alignment-cvpr-2026-paper-b00530c349/)*

标签：#基准测试 #数据集 #多模态学习 #音频检索

评分：**6.9/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频检索 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Shinoda_BioVITA_Biological_Dataset_Model_and_Benchmark_for_Visual-Textual-Acoustic_Alignment_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Shinoda_BioVITA_Biological_Dataset_Model_and_Benchmark_for_Visual-Textual-Acoustic_Alignment_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Risa Shinoda：机构信息未能从会议 PDF 纯文本可靠映射
- Kaede Shiohara：机构信息未能从会议 PDF 纯文本可靠映射
- Nakamasa Inoue：机构信息未能从会议 PDF 纯文本可靠映射
- Kuniaki Saito：机构信息未能从会议 PDF 纯文本可靠映射
- Hiroaki Santo：机构信息未能从会议 PDF 纯文本可靠映射
- Fumio Okura：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

生物声学对齐需以音频、图像与分类文本为输入并输出统一物种语义空间，但已有资源仅提供图像文本或音频文本对且分类层级与规模不兼容，难以直接训练三模态对齐。为此论文先从iNaturalist等来源整理130万音频与230万图像，统一14133物种的全层级分类与34种生态trait标注，形成训练语料。接着以预训练BioCLIP 2图像文本编码器为锚点先做音频文本对比拉齐音频，再联合优化三路对比得到统一模型。然后用覆盖6个跨模态方向与科属种层级的100选1检索基准检验对齐质量。在物种级可见子集检索评测设置下，BioVITA（Stage2）的平均Top\-1准确率为71\.7%，高于ImageBind的平均Top\-1准确率22\.8%。与已有三模态基线相比，关键在于分阶段先稳住图像文本空间再引入视觉互补，避免音频直接冲击已有对齐并提升图像文本检索。该结论适用边界受限，科层级与未见物种检索明显下降且哺乳类泛化较弱，尚未验证更大规模部署外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://dahlian00.github.io/BioVITA_> — 链接不可用（HTTP 404）
- 第三方资源：<https://openai.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 47. [听到鸟叫不画鸟：为环境声景生成地理一致的街景](/posts/conference-cvpr-2026-conference-paper-id-wang-soundit-geo-contextual-soundscape-to-landscape-generation-cvpr-2026-paper-338705735b/)

> 英文题目：*[SounDiT: Geo\-Contextual Soundscape\-to\-Landscape Generation](/posts/conference-cvpr-2026-conference-paper-id-wang-soundit-geo-contextual-soundscape-to-landscape-generation-cvpr-2026-paper-338705735b/)*

标签：#数据集 #扩散模型 #Transformer #环境声 #音视频生成

评分：**6.9/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Wang_SounDiT_Geo-Contextual_Soundscape-to-Landscape_Generation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_SounDiT_Geo-Contextual_Soundscape-to-Landscape_Generation_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Junbo Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Haofeng Tan：机构信息未能从会议 PDF 纯文本可靠映射
- Bowen Liao：机构信息未能从会议 PDF 纯文本可靠映射
- Albert Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Teng Fei：机构信息未能从会议 PDF 纯文本可靠映射
- Qixing Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Bing Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengzhong Tu：机构信息未能从会议 PDF 纯文本可靠映射
- Shan Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhao Kang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

地理上下文声景到景观生成（Geo\-Contextual Soundscape\-to\-Landscape，GeoS2L）以10秒环境声景为输入、可选场景提示（Scene Prompt）为条件，输出地理真实的景观图像，难点是同一声景对应多类场所且传统音频到图像只生成发声物体。方法链分四步：多模态编码器将声景与场景提示映射到共享空间并提供条件向量；扩散变换器（Diffusion Transformer，DiT）潜空间去噪保留预训练主干；场景低秩内容混合器与场景自适应层归一化前后注入场景先验；混合专家（Mixture\-of\-Experts，MoE）声景条件以共享键值加专家查询实现细粒度声视对齐。与仅用声景的基线不同，该设计显式分离场景语义与声学细节并支持同声换景的可控生成。在SoundingSVI上SounDiT的弗雷歇特初始距离（Fréchet Inception Distance，FID）为16\.839，显著优于最强基线PixArt\+MHCA的34\.108，且场景级地点相似度达0\.753。该结论限于街景视角与所覆盖城市，远距离检索对、夜间与极端天气及强人声片段的泛化尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://gisense.github.io/SounDiT-Page/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 48. [同步声画为何难评：VABench 用三任务十五维卡住语义与对齐](/posts/conference-cvpr-2026-conference-paper-id-hua-vabench-a-comprehensive-benchmark-for-audio-video-generation-cvpr-2026-paper-f281e08824/)

> 英文题目：*[VABench: A Comprehensive Benchmark for Audio\-Video Generation](/posts/conference-cvpr-2026-conference-paper-id-hua-vabench-a-comprehensive-benchmark-for-audio-video-generation-cvpr-2026-paper-f281e08824/)*

标签：#基准测试 #基准设计 #音视频 #空间音频信号 #音视频生成

评分：**6.8/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频生成 | 主方法：#基准设计

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Hua_VABench_A_Comprehensive_Benchmark_for_Audio-Video_Generation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Hua_VABench_A_Comprehensive_Benchmark_for_Audio-Video_Generation_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Daili Hua：机构信息未能从会议 PDF 纯文本可靠映射
- Xizhi Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Bohan Zeng：机构信息未能从会议 PDF 纯文本可靠映射
- Xinyi Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Hao Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Junbo Niu：机构信息未能从会议 PDF 纯文本可靠映射
- Xinlong Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Quanqing Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Wentao Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该基准面向文本到音视频与图像到音视频生成，输入为文本提示或静态图像加文本描述，输出为带同步音频的视频与立体声音轨，难点在于跨模态语义一致、毫秒级音画同步、物理合理性与情感表达的联合建模。数据构建先由专家模板与大语言模型批量生成778条文本到音视频提示与521条图像到音视频图文描述，以覆盖七类声音场景与空间声线索。随后将上述提示拆分为视觉与听觉子提示并构造视听问答对，使文本条件进入可验证的细粒度评测环节。最后经人工核验可观测性与常识约束并剔除不可判样本，其中虚拟世界类仅保留在文本到音视频任务中。评测链先用专家模型量化单模态质量与文本\-视频、文本\-音频、音频\-视频对齐及失同步偏移，再用多模态大语言模型进行1至5分宏观打分与问答准确率评估，并对立体声做九维声像与信号完整性分析。与已有视频到音频评测相比，关键差异是从依赖真实参考的比对转向无参考三角一致性评估，并新增物理与情感耦合维度，因而更适用于开放生成的可扩展自动评估。在T2AV基准任务下，Veo3的文本\-音频对齐分数为0\.3582，高于Sora2的文本\-音频对齐分数0\.3465。结论适用边界仅限所测端到端音视频系统与视频加音频组合及七类场景，长时程、多说话人强混响或非现实物理外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 49. [视频会议为何让视听语音识别崩溃：传输失真与过度表达的双重漂移](/posts/conference-cvpr-2026-conference-paper-id-huang-when-avsr-meets-video-conferencing-dataset-degradation-and-the-hidden-cvpr-2026-paper-6dfa145fa1/)

> 英文题目：*[When AVSR Meets Video Conferencing: Dataset, Degradation, and the Hidden Mechanism Behind Performance Collapse](/posts/conference-cvpr-2026-conference-paper-id-huang-when-avsr-meets-video-conferencing-dataset-degradation-and-the-hidden-cvpr-2026-paper-6dfa145fa1/)*

标签：#数据集 #数据集构建 #鲁棒性 #音视频语音识别

评分：**6.8/10** | 创新 1.6/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频语音识别 | 主方法：#数据集构建

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Huang_When_AVSR_Meets_Video_Conferencing_Dataset_Degradation_and_the_Hidden_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Huang_When_AVSR_Meets_Video_Conferencing_Dataset_Degradation_and_the_Hidden_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Yihuan Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Jun Xue：机构信息未能从会议 PDF 纯文本可靠映射
- Liu Jiajun：机构信息未能从会议 PDF 纯文本可靠映射
- Daixian Li：机构信息未能从会议 PDF 纯文本可靠映射
- Tong Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhuolin Yi：机构信息未能从会议 PDF 纯文本可靠映射
- Yanzhen Ren：机构信息未能从会议 PDF 纯文本可靠映射
- Kai Li：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音视频语音识别（Audio\-Visual Speech Recognition，AVSR）以会议音视频为输入并输出转写文本，在视频会议（Video Conferencing，VC）中面临编解码与增强带来的传输失真和受阻沟通诱发的人类超表达双重难点。该工作先将公开测试集经Zoom、Lark、Tencent Meeting真实传输并评测Auto\-AVSR、mWhisper\-Flamingo、LiPS\-AVSR三种主流模型以量化崩溃，再按四平台真实录制与四档噪声诱发Lombard效应的流程构建31人共22\.79小时的MLD\-VC数据集，接着用openSMILE提取基频与共振峰等特征对比离线与在线分布，最后以编解码与增强仿真定位漂移来源并用MLD\-VC微调验证修复效果。与已有离线加噪鲁棒性研究不同，该工作揭示语音增强上移第一共振峰（First Formant，F1）与第二共振峰（Second Formant，F2）的机制与Lombard谱偏移高度相似，从而解释了Lombard训练更耐受会议失真的现象。在Chinese\-Lips经三平台传输的评测中，LiPS\-AVSR微调后字错率（Character Error Rate，CER）平均相对降低17\.5%，MLD\-VC域内CER相对降低67\.2%。结论仅在受控Grid短句、中英朗读、四平台默认设置的范围内得到验证，长尾口语、开放词汇与网络抖动下的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://huggingface.co/datasets/nccm2p2/MLD-VC> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 50. [看听推理不断线：AVATAR 用离线复用与首尾加权修补 GRPO](/posts/conference-cvpr-2026-conference-paper-id-kulkarni-avatar-reinforcement-learning-to-see-hear-and-reason-over-video-cvpr-2026-paper-3adff183d6/)

> 英文题目：*[AVATAR: Reinforcement Learning to See, Hear, and Reason Over Video](/posts/conference-cvpr-2026-conference-paper-id-kulkarni-avatar-reinforcement-learning-to-see-hear-and-reason-over-video-cvpr-2026-paper-3adff183d6/)*

标签：#强化学习 #多模态模型 #音视频 #音视频问答

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频问答 | 主方法：#强化学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Kulkarni_AVATAR_Reinforcement_Learning_to_See_Hear_and_Reason_Over_Video_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Yogesh Kulkarni：机构信息未能从会议 PDF 纯文本可靠映射
- Pooyan Fazli：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

长视频音视频问答以整段视频32帧与音频流为输入，输出带推理链的答案，难点在于长时序跨模态对齐与中间推理漂移，且同组奖励趋同时GRPO优势归零。AVATAR先以容量10k的分层回放缓冲按提示词历史平均奖励分层采样重建组内方差，为后续更新提供多样化离策略样本。接着以时序优势整形按位置抛物线加权首尾规划与综合token，将整体优势调制到关键步骤以抑制中间漂移。最后经冷启动微调加视觉推理到音频对齐再到声源定位的三阶段课程递进训练，使视觉 grounding逐步进入跨模态对齐。与标准GRPO对全序列均匀赋分不同，该位置相关加权贴合注意力汇聚特性并保留奖励差异，使优化在困难提示下仍有学习信号。在DailyOmni基准下，AVATAR的得分增益为\+3\.4，高于GRPO的得分增益\+1\.8。该结论适用边界受限于7B开源全模态模型与离线整段评测，尚未验证流式长视频与开放域噪声下的外推；原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 复现相关资源：<https://people-robots.github.io/AVATAR/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 51. [四模态同判：Omni\-Fake 把检测、定位与解释放进同一基准与同一模型](/posts/conference-cvpr-2026-conference-paper-id-li-omni-fake-benchmarking-unified-multimodal-social-media-deepfake-detection-cvpr-2026-paper-236f719c38/)

> 英文题目：*[Omni\-Fake: Benchmarking Unified Multimodal Social Media Deepfake Detection](/posts/conference-cvpr-2026-conference-paper-id-li-omni-fake-benchmarking-unified-multimodal-social-media-deepfake-detection-cvpr-2026-paper-236f719c38/)*

标签：#基准测试 #强化学习 #音视频 #音频深度伪造检测

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频深度伪造检测 | 主方法：#强化学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Li_Omni-Fake_Benchmarking_Unified_Multimodal_Social_Media_Deepfake_Detection_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Omni-Fake_Benchmarking_Unified_Multimodal_Social_Media_Deepfake_Detection_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Tianxiao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenglin Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Haiquan Wen：机构信息未能从会议 PDF 纯文本可靠映射
- Yiwei He：机构信息未能从会议 PDF 纯文本可靠映射
- Xinze Li：机构信息未能从会议 PDF 纯文本可靠映射
- Bingyu Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Wuhui Duan：机构信息未能从会议 PDF 纯文本可靠映射
- Congang Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Zeyu Fu：机构信息未能从会议 PDF 纯文本可靠映射
- Yi Dong：机构信息未能从会议 PDF 纯文本可靠映射
- Baoyuan Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangtai Li：机构信息未能从会议 PDF 纯文本可靠映射
- Guangliang Cheng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

社交媒体深度伪造检测需同时处理图像、音频、通用视频与音视频说话头四类输入，并统一输出真伪标签、篡改定位与自然语言解释，难点在于生成器快速迭代、跨平台压缩破坏痕迹与部分篡改的细粒度歧义。该工作先构建覆盖四模态的大规模同分布与异分布基准，再以课程监督微调引入各模态并用回放保留旧能力，最后用组序列策略优化统一对齐检测定位解释奖励。相比单模态专用检测器与仅做二分类的视觉语言模型，其差异在于单一全模态大模型输出结构化三元组并显式优化空间与时间交并比。在 Omni\-Fake\-Set 图像验证集上统一模型检测准确率达到 91\.92%，在 Omni\-Fake\-OOD 音频子集上准确率为 83\.85%，均超越同表最强基线。结论仅适用于论文所列生成器家族与社交媒体退化范围，对未见操纵语义与强对抗自适应攻击的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://klingai.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://pika.art/> — 暂时无法访问
- 第三方资源：<https://runwayml.com/gen3> → <https://runway.com/gen3> — 链接不可用（HTTP 404）
- 第三方资源：<https://openai.com/sora> → <https://openai.com/sora/> — 链接不可用（HTTP 403）
- 第三方资源：<https://wanx.aliyun.com/> → <https://tongyi.aliyun.com/wan/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 52. [从原始音视频算起：用参考锚定身份再推理社交指向](/posts/conference-cvpr-2026-conference-paper-id-li-omni-mmsi-toward-identity-attributed-social-interaction-understanding-cvpr-2026-paper-1922d3703e/)

> 英文题目：*[Omni\-MMSI: Toward Identity\-attributed Social Interaction Understanding](/posts/conference-cvpr-2026-conference-paper-id-li-omni-mmsi-toward-identity-attributed-social-interaction-understanding-cvpr-2026-paper-1922d3703e/)*

标签：#多模态学习 #音视频理解 #说话人识别 #语音对话系统

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频理解 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Li_Omni-MMSI_Toward_Identity-attributed_Social_Interaction_Understanding_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Omni-MMSI_Toward_Identity-attributed_Social_Interaction_Understanding_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Xinpeng Li：机构信息未能从会议 PDF 纯文本可靠映射
- Bolin Lai：机构信息未能从会议 PDF 纯文本可靠映射
- Hardy Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Shijian Deng：机构信息未能从会议 PDF 纯文本可靠映射
- Cihang Xie：机构信息未能从会议 PDF 纯文本可靠映射
- Yuyin Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- James M\. Rehg：机构信息未能从会议 PDF 纯文本可靠映射
- Yapeng Tian：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Omni\-MMSI要求仅从原始音视频输入完成说话目标识别与代词指代消解，输出最后说话人所指身份，难点在于多方遮挡与重叠语音下语音内容与人脸框的跨模态身份归属极易错位。该流水线先检索每位参与者的参考音频与视觉图像对作为身份锚点。接着调用转写加声纹校验与检测加行人重识别工具生成带身份的言语与非言语线索，明确谁说了什么以及位于何处。然后将原始音视频流、参考对与已归属线索联合送入经LoRA微调的Qwen2\.5\-Omni\-7B进行两步思维链推理，先确认最后说话人再推断其指代对象。与直接调用全模态大模型做隐式归属不同，该设计把记忆锚点外置并用专用工具显式对齐，减少按空间顺序猜测身份的错误，使推理基于可核对的线索展开。在YouTube基准下，Omni\-MMSI\-R的平均准确率为47\.04%，高于Gemini 2\.5 Pro的平均准确率44\.80%。该结论适用边界受限于狼人杀类围坐讨论场景、每段5轮对话且平均14秒的短片段，对开放场景的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 53. [短训长测：用分层路由与非因果 Mamba 做长视频配音](/posts/conference-cvpr-2026-conference-paper-id-simon-echoes-over-time-unlocking-length-generalization-in-video-to-audio-generation-models-cvpr-2026-paper-3f6ed59b04/)

> 英文题目：*[Echoes Over Time: Unlocking Length Generalization in Video\-to\-Audio Generation Models](/posts/conference-cvpr-2026-conference-paper-id-simon-echoes-over-time-unlocking-length-generalization-in-video-to-audio-generation-models-cvpr-2026-paper-3f6ed59b04/)*

标签：#状态空间模型 #长音频处理 #音视频 #视频到声音生成

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.1/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#视频到声音生成 | 主方法：#状态空间模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Simon_Echoes_Over_Time_Unlocking_Length_Generalization_in_Video-to-Audio_Generation_Models_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Simon_Echoes_Over_Time_Unlocking_Length_Generalization_in_Video-to-Audio_Generation_Models_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Christian Simon：机构信息未能从会议 PDF 纯文本可靠映射
- Masato Ishii：机构信息未能从会议 PDF 纯文本可靠映射
- Wei\-Yao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Koichi Saito：机构信息未能从会议 PDF 纯文本可靠映射
- Akio Hayakawa：机构信息未能从会议 PDF 纯文本可靠映射
- Dongseok Shim：机构信息未能从会议 PDF 纯文本可靠映射
- Zhi Zhong：机构信息未能从会议 PDF 纯文本可靠映射
- Shuyang Cui：机构信息未能从会议 PDF 纯文本可靠映射
- Takashi Shibuya：机构信息未能从会议 PDF 纯文本可靠映射
- Shusuke Takahashi：机构信息未能从会议 PDF 纯文本可靠映射
- Yuki Mitsufuji：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

长视频到音频需以无声长视频与文本为条件生成语义对齐且时间同步的长音频，训练仅有8秒短片段而测试需泛化至10秒到500秒以上，Transformer依赖位置嵌入与注意力外推在变长时显著退化，分段独立生成又割裂长程上下文导致失同步与质量下降。MMHNet以多模态流匹配主干为基础，先由时间路由与多模态路由筛选关键标记并压缩冗余进入压缩空间做跨模态对齐，再经解块与上采样恢复原始分辨率合成细节，前一步压缩输出直接进入下一步主网络处理。单模态块中的注意力被非因果Mamba\-2替代，以全向状态传递建模全局依赖，天然不需要位置嵌入，推理时无需NTK缩放或插值。与LoVA等DiT架构及自回归与智能体分段方案的关键差异在于分层压缩路由降低时序复杂度并增强对齐，而非因果状态传递避免位置外推失效，具有长时一致性实际意义。在UnAV100评测下，阈值0\.3条件的IB\-Score为33\.44，高于Transformers核心网络的IB\-Score的28\.41。该结论在10秒至60秒分段上较平稳，但对超过5分钟与强非平稳场景的适用边界尚未验证并受限于分块评测可能掩盖长程不一致，且原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://echoesovertime.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 54. [把重建和对齐分开做：教师引导的双路径如何减少语义噪声](/posts/conference-cvpr-2026-conference-paper-id-wang-semantic-noise-reduction-via-teacher-guided-dual-path-audio-visual-representation-learning-cvpr-2026-paper-e1e8187c55/)

> 英文题目：*[Semantic Noise Reduction via Teacher\-Guided Dual\-Path Audio\-Visual Representation Learning](/posts/conference-cvpr-2026-conference-paper-id-wang-semantic-noise-reduction-via-teacher-guided-dual-path-audio-visual-representation-learning-cvpr-2026-paper-e1e8187c55/)*

标签：#对比学习 #知识蒸馏 #预训练 #音视频 #音频检索

评分：**6.8/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频检索 | 主方法：#知识蒸馏

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Wang_Semantic_Noise_Reduction_via_Teacher-Guided_Dual-Path_Audio-Visual_Representation_Learning_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_Semantic_Noise_Reduction_via_Teacher-Guided_Dual-Path_Audio-Visual_Representation_Learning_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Linge Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yingying Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Bingke Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Lu Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Jinqiao Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音视频表示学习以10秒视频帧与时间对齐对数梅尔谱为输入，输出可跨模态检索且可冻结分类的全局表示，难点在于随机高掩码常保留静音谱区与无效背景且重建与对比共享同一掩码视图时梯度互扰。重建分支以约75%高随机掩码建模模态内生成结构并输出重建损失。指数滑动平均教师观测全量无掩码输入，输出全局表示与全局到补丁注意力优先级以锚定语义。对比分支按优先级确定性保留Top\-k可见令牌，以50%低掩码学习跨模态对齐并联合优化三项损失，上一步的优先级直接决定下一步可见集构成。与CAV\-MAE Sync相比关键差异是不再共享同一掩码视图做双目标优化，其实质是将生成与判别解耦以保留更完整的对齐上下文。在AudioSet零样本检索评测任务下，Ours的指标R@1为37\.4%，高于CAV\-MAE Sync的指标R@1 35\.2%。该结论适用边界受限于AudioSet\-2M约139万可用对预训练与冻结编码器评测，对离屏声源与长时错位的外推尚未验证。预训练每轮训练成本从730秒增至1045秒，总时长从7\.1小时增至10\.2小时，推理开销可因丢弃教师与额外前向而消除。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 55. [按语音层级拆开看：低层管内容音色、高层管韵律的视频到语音生成](/posts/conference-cvpr-2026-conference-paper-id-ye-hierarchical-codec-diffusion-for-video-to-speech-generation-cvpr-2026-paper-d2b01d2da3/)

> 英文题目：*[Hierarchical Codec Diffusion for Video\-to\-Speech Generation](/posts/conference-cvpr-2026-conference-paper-id-ye-hierarchical-codec-diffusion-for-video-to-speech-generation-cvpr-2026-paper-d2b01d2da3/)*

标签：#扩散模型 #Transformer #向量量化 #音视频语音合成

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频语音合成 | 主方法：#扩散模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Ye_Hierarchical_Codec_Diffusion_for_Video-to-Speech_Generation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Ye_Hierarchical_Codec_Diffusion_for_Video-to-Speech_Generation_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Jiaxin Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Gaoxiang Cong：机构信息未能从会议 PDF 纯文本可靠映射
- Chenhui Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xin\-Cheng Wen：机构信息未能从会议 PDF 纯文本可靠映射
- Zhaoyang Li：机构信息未能从会议 PDF 纯文本可靠映射
- Boyuan Cao：机构信息未能从会议 PDF 纯文本可靠映射
- Hongming Shan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

视频到语音任务以静音视频为输入、以波形语音为输出，难点在于视觉信息稀疏而语音表征稠密，内容、音色与韵律难以同时对齐。该方法先用残差向量量化编解码器将语音切分为12层离散令牌，层级分析明确低层累积解码提升语义保真与音色相似、高层累积解码提升韵律质量。接着解耦视觉编码分别抽取唇动、身份与表情特征，并以多层去噪分数熵损失联合身份对齐损失进行优化。然后8块低层Transformer融合唇动与身份特征生成粗粒度语义音色令牌，其输出进入8块高层Transformer注入表情生成细粒度韵律令牌，最后经12个线性分数头输出具体分数并由编解码器重建波形。与整体式注入视觉特征的已有方法不同，该机制将层级先验显式写入掩码式离散扩散过程，实现按属性分层对齐与双尺度韵律调制。在LRS3基准测试集下，HiCoDiT完整模型的WER为29\.41，低于去除层级建模变体的WER 30\.65。结论适用边界受限于英语为主、3438位说话人的VoxCeleb2训练域与仅160条的电影外域验证，多语言与遮挡噪声外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 56. [长视频不止于切分检索：用视听实体黏合与分层索引保持叙事连贯](/posts/conference-cvpr-2026-conference-paper-id-yin-hierarchical-long-video-understanding-with-audiovisual-entity-cohesion-and-agentic-cvpr-2026-paper-ff21cd1b8d/)

> 英文题目：*[Hierarchical Long Video Understanding with Audiovisual Entity Cohesion and Agentic Search](/posts/conference-cvpr-2026-conference-paper-id-yin-hierarchical-long-video-understanding-with-audiovisual-entity-cohesion-and-agentic-cvpr-2026-paper-ff21cd1b8d/)*

标签：#检索增强 #音视频 #语音 #音视频问答

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频问答 | 主方法：#检索增强

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Yin_Hierarchical_Long_Video_Understanding_with_Audiovisual_Entity_Cohesion_and_Agentic_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Yin_Hierarchical_Long_Video_Understanding_with_Audiovisual_Entity_Cohesion_and_Agentic_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Xinlei Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Xiulian Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Xiao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiwei Xiong：机构信息未能从会议 PDF 纯文本可靠映射
- Yan Lu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

长视频理解输入为小时级视频帧与音频转录，输出为问答答案与支撑证据，要求在超长上下文中维持实体一致与全局叙事连贯，朴素分块检索易导致信息碎片化。HAVEN先用语音识别与说话人分离构建带时间戳转录和全片一致说话人标签，并将视频切分为30秒片段生成视觉字幕与说话人感知描述。接着经文本编码器嵌入聚类加大语言模型校验完成跨片段视听实体聚合，形成片段、实体、场景与全局摘要四级层次化数据库。推理时智能体以全局摘要为初始记忆，通过多粒度文本与视觉工具循环思考\-行动\-观察，按需收集证据作答。相比仅用片段字幕检索的检索增强生成，该设计把说话人身份作为跨模态粘合信号，并以场景与全局摘要提供长程锚点，减少冗余碎片检索。在LVBench基准下，完整框架的准确率为81\.0%，高于去除层次化组织的变体的准确率72\.8%。该结论的适用边界受限于英文有声长视频，对无音频、多语言或嘈杂语音的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://openai.com/index/introducing-o3-and-> → <https://openai.com/index/introducing-o3-and-/> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 57. [不只把话说对，还要动得对：ViBES 如何联合规划语言与身体](/posts/conference-cvpr-2026-conference-paper-id-zhang-vibes-a-conversational-agent-with-behaviorally-intelligent-3d-virtual-body-cvpr-2026-paper-8fcc17fc2a/)

> 英文题目：*[ViBES: A Conversational Agent with Behaviorally\-Intelligent 3D Virtual Body](/posts/conference-cvpr-2026-conference-paper-id-zhang-vibes-a-conversational-agent-with-behaviorally-intelligent-3d-virtual-body-cvpr-2026-paper-8fcc17fc2a/)*

标签：#基准测试 #数据集 #混合专家模型 #多模态学习 #语音对话系统

评分：**6.8/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：模型报告 | 主任务：#语音对话系统 | 主方法：#混合专家模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_ViBES_A_Conversational_Agent_with_Behaviorally-Intelligent_3D_Virtual_Body_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_ViBES_A_Conversational_Agent_with_Behaviorally-Intelligent_3D_Virtual_Body_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Juze Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Changan Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Xin Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Heng Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Tiange Xiang：机构信息未能从会议 PDF 纯文本可靠映射
- Ali Sartaz Khan：机构信息未能从会议 PDF 纯文本可靠映射
- Shrinidhi K\. Lakshmikanth：机构信息未能从会议 PDF 纯文本可靠映射
- Ehsan Adeli：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为多轮语音或文本对话及可选身体动作指令，输出为同步的语音回复文本与语音连同面部表情和全身动作，难点在于跨轮次语义连贯、韵律与动作时序对齐以及何时动和做什么的智能决策。方法链分四步：多模态分词器将文本语音与面部身体统一到25 fps主时钟下的离散token流并交错排列，混合模态专家骨干以硬路由分配语音语言专家与面部身体专家处理各自token，跨专家注意力让面部身体查询只读语音语言键值以注入对话状态，分数旋转位置编码以语音文本锚点为整数轴对动作位置做分数插值以保持wall\-clock对齐。与两阶段语音大模型外挂动作生成器相比，该机制在共享自回归策略下联合规划语言与动作并保留预训练语音能力。在Converse3D测试集4921样本的对话行为基准上，R1\-Balanced为0\.467，明显高于最强统一基线MoMask的0\.293，且FID为93\.9远低于次优的262\.2。该结论限于重建质量受限的网课式对话与受控动作描述，外推到强遮挡、长时交互与机器人部署尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 58. [只给整段真假标签，如何找回伪造片段的起止时间](/posts/conference-cvpr-2026-conference-paper-id-zhu-gem-tfl-bridging-weak-and-full-supervision-for-forgery-localization-through-cvpr-2026-paper-a1446b8786/)

> 英文题目：*[GEM\-TFL: Bridging Weak and Full Supervision for Forgery Localization through EM\-Guided Decomposition and Temporal Refinement](/posts/conference-cvpr-2026-conference-paper-id-zhu-gem-tfl-bridging-weak-and-full-supervision-for-forgery-localization-through-cvpr-2026-paper-a1446b8786/)*

标签：#弱监督学习 #音视频 #音频伪造检测 #音频事件检测

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频伪造检测 | 主方法：#弱监督学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhu_GEM-TFL_Bridging_Weak_and_Full_Supervision_for_Forgery_Localization_through_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Xiaodong Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuanming Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Suting Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Junqi Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhong Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Weiping Tu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhongyuan Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

弱监督时间伪造定位仅以片段级真假标签为输入，推理时却需输出全部伪造片段的起止边界与置信度，监督稀薄与分类训练定位推理错位导致边界模糊与短片段碎裂。GEM\-TFL先经特征增强与注意力分支和属性分支做EM引导的标签属性解耦，把单比特标签扩展为隐伪造属性分布以丰富语义。解耦输出再经无训练时序一致性细化交替投影到行列约束以对齐帧级与片段级预测，生成初始伪提案并抑制时序抖动。随后图提案细化在时序语义图上传播置信度并融合碎片提案得到最终伪标签，定位阶段再用伪标签监督回归主干学习精确边界并经Soft\-NMS输出。相对MIL加阈值加对比打分的旧范式，新机制把梯度阻断转为约束投影校正、把孤立打分转为全局置信传播，兼顾语义丰富性与结构连续性。在AV\-Deepfake1M基准下，GEM\-TFL的平均mAP指标为42\.7，高于WMMT的平均mAP指标34\.3。该结论适用边界受限于说话人脸音视频替换插入删除伪造，跨生成器跨语言与强压缩传输场景尚未验证，训练成本涉及在八块NVIDIA RTX 3090硬件上训练50个轮次。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 59. [先增强弱模态再拉平贡献：EBMC 如何缓解文本主导的多模态情感竞争](/posts/conference-cvpr-2026-conference-paper-id-he-enhance-then-balance-modality-collaboration-for-robust-multimodal-sentiment-analysis-cvpr-2026-paper-55f176858f/)

> 英文题目：*[Enhance\-then\-Balance Modality Collaboration for Robust Multimodal Sentiment Analysis](/posts/conference-cvpr-2026-conference-paper-id-he-enhance-then-balance-modality-collaboration-for-robust-multimodal-sentiment-analysis-cvpr-2026-paper-55f176858f/)*

标签：#多模态学习 #鲁棒性 #音视频 #语音情感识别

评分：**6.7/10** | 创新 1.3/2 | 技术严谨 0.8/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/He_Enhance-then-Balance_Modality_Collaboration_for_Robust_Multimodal_Sentiment_Analysis_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Kang He：机构信息未能从会议 PDF 纯文本可靠映射
- Yuzhe Ding：机构信息未能从会议 PDF 纯文本可靠映射
- Xinrong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Fei Li：机构信息未能从会议 PDF 纯文本可靠映射
- Chong Teng：机构信息未能从会议 PDF 纯文本可靠映射
- Donghong Ji：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态情感分析以文本、音频、视觉三路序列为输入，预测情感强度分数或情绪类别，难点在于文本模态主导训练并压制弱模态，而噪声与缺失进一步加剧竞争失衡。本文提出先增强后平衡协作框架EBMC，第一步由模态语义解耦负责分离共享语义与特有语义并保留单模态判别力，其输出的解耦特征进入第二步。第二步由跨模态互补增强为音频与视觉等弱模态注入他模态线索，放大其判别性表示并为后续协调提供更完备输入。第三步由能量引导模态协调构建多模态能量景观并拉平模态能量，以能量梯度隐式再平衡各模态贡献，缓解文本主导的融合失衡。第四步由实例感知模态可信蒸馏按样本级不确定性估计各模态可靠性，动态调节融合权重并将可靠知识蒸馏至联合表示。与显式缩放学习率或截断梯度不同，该方法把竞争建模为能量景观上的均衡与梯度流，具有隐式协调与细粒度可信加权的实际意义。在CMU\-MOSI基准下，EBMC的7分类准确率Acc\-7为50\.34，高于Semi\-IIN的7分类准确率Acc\-7 46\.50。其结论适用边界受限于短视频评论与表演式情感语料，对强噪声口语与长时对话等外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/kangverse/EBMC> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 60. [看得见证据才算会判：TriDF 把感知、判定与幻觉拆开考](/posts/conference-cvpr-2026-conference-paper-id-jiang-lin-tridf-evaluating-perception-detection-and-hallucination-for-interpretable-deepfake-detection-cvpr-2026-paper-b90fd717fe/)

> 英文题目：*[TriDF: Evaluating Perception, Detection, and Hallucination for Interpretable DeepFake Detection](/posts/conference-cvpr-2026-conference-paper-id-jiang-lin-tridf-evaluating-perception-detection-and-hallucination-for-interpretable-deepfake-detection-cvpr-2026-paper-b90fd717fe/)*

标签：#基准设计 #多模态模型 #可解释性 #音频深度伪造检测

评分：**6.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频深度伪造检测 | 主方法：#基准设计

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Jiang-Lin_TriDF_Evaluating_Perception_Detection_and_Hallucination_for_Interpretable_DeepFake_Detection_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang-Lin_TriDF_Evaluating_Perception_Detection_and_Hallucination_for_Interpretable_DeepFake_Detection_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Jian\-Yu Jiang\-Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Kang\-Yang Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Ling Zou：机构信息未能从会议 PDF 纯文本可靠映射
- Ling Lo：机构信息未能从会议 PDF 纯文本可靠映射
- Sheng\-Ping Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Yu\-Wen Tseng：机构信息未能从会议 PDF 纯文本可靠映射
- Kun\-Hsiang Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Chia\-Ling Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yu\-Ting Ta：机构信息未能从会议 PDF 纯文本可靠映射
- Yan\-Tsung Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Po\-Ching Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Hongxia Xie：机构信息未能从会议 PDF 纯文本可靠映射
- Hong\-Han Shuai：机构信息未能从会议 PDF 纯文本可靠映射
- Wen\-Huang Cheng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该基准面向以人为中心的图像、视频与音频输入，要求模型同时输出真伪判定与可核验的伪影证据，难点在于生成器快速演进下的泛化缺失与多模态大语言模型解释不可靠且易幻觉。构建链条先用十六种伪造技术合成约五千组真伪配对并经质量与一致性筛选，输出高质量样本进入下一步，再按质量伪影与语义伪影两层分类体系做人工标注并定位到鼻口、上肢与背景等位置，最后将同一证据分别包装为判断题、多选题与开放问答以分离感知、检测与幻觉评估。相对以往仅用机器生成解释或只测二分类准确率的基准，其关键机制差异在于人工对齐的细粒度证据与覆盖率和幻觉率的联合度量，使解释质量可量化并可诊断失败来源。在TriDF感知基准任务下，InternVL2 5\-8B图像的准确率为53\.37%，高于视频的准确率51\.42%。即使如此整体感知仅适度高于随机猜测且视频开放问答覆盖率明显减半，表明语义伪影与时序推理仍是瓶颈。该结论适用边界限于评测阶段的高质量合成样本，对真实网络压缩、长时程与跨语言音频场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://j1anglin.github.io/TriDF/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 61. [数数为何最难统一：跨图像文本音频的三级计数基准](/posts/conference-cvpr-2026-conference-paper-id-rong-unicbench-unified-counting-benchmark-for-mllm-cvpr-2026-paper-3e0a84dcba/)

> 英文题目：*[UNICBench: UNIfied Counting Benchmark for MLLM](/posts/conference-cvpr-2026-conference-paper-id-rong-unicbench-unified-counting-benchmark-for-mllm-cvpr-2026-paper-3e0a84dcba/)*

标签：#数据集 #基准设计 #模型评估 #音频问答

评分：**6.7/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#基准设计

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Rong_UNICBench_UNIfied_Counting_Benchmark_for_MLLM_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Rong_UNICBench_UNIfied_Counting_Benchmark_for_MLLM_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Chenggang Rong：机构信息未能从会议 PDF 纯文本可靠映射
- Tao Han：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiyuan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Yaowu Fan：机构信息未能从会议 PDF 纯文本可靠映射
- Jia Wan：机构信息未能从会议 PDF 纯文本可靠映射
- Song Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Yuan Yuan：机构信息未能从会议 PDF 纯文本可靠映射
- Junyu Gao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为图像场景、长文档与音频片段叠加自然语言计数问题，输出为纯数字计数并附点坐标、字符跨度与时间戳证据，难点在于高密度遮挡、跨段重复去重、时序事件重叠与算术权重推理。构建先按实体集合操作形式化模式层、语义层与推理层三级能力，并用密度、遮挡、重叠与重复率阈值映射简单、中等与困难难度，其分层标签直接决定后续采样配额。接着聚合多源图像、文本与音频并做去重、切分与字符时间对齐，形成统一计数加证据问答对，该语料进入固定提示、确定性数字解析与匹配规则的评测套件。套件输出按模态、能力层与难度层分层报告命中率、成功率与误差指标，使长尾误差可归因到表征缺失或校准偏差。相对单模态密度估计、文档问答与声音事件检测，差异在于统一问答图式、证据优先真值与跨模态分层报告，其实质意义是把计数从各模态子任务提升为可比较的通用行为探针。在音频计数任务下，Qwen2\.5\-Omni\-7B的MAE指标为29\.2，低于Voxtral\-mini的MAE指标29\.5。结论的适用边界受限于收录类别与统一提示条件，向开放词汇视频计数与交互式定位的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 62. [强监督从哪里来：用高质量描述重建语音音乐环境声的统一标签](/posts/conference-cvpr-2026-conference-paper-id-zhou-unlocking-strong-supervision-a-data-centric-study-of-general-purpose-audio-pre-training-cvpr-2026-paper-3e61b8d2c9/)

> 英文题目：*[Unlocking Strong Supervision: A Data\-Centric Study of General\-Purpose Audio Pre\-Training Methods](/posts/conference-cvpr-2026-conference-paper-id-zhou-unlocking-strong-supervision-a-data-centric-study-of-general-purpose-audio-pre-training-cvpr-2026-paper-3e61b8d2c9/)*

标签：#数据集构建 #环境声 #音乐 #语音 #音频分类

评分：**6.7/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频分类 | 主方法：#数据集构建

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhou_Unlocking_Strong_Supervision_A_Data-Centric_Study_of_General-Purpose_Audio_Pre-Training_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhou_Unlocking_Strong_Supervision_A_Data-Centric_Study_of_General-Purpose_Audio_Pre-Training_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Xuanru Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Yiwen Shao：机构信息未能从会议 PDF 纯文本可靠映射
- Wei\-Cheng Tseng：机构信息未能从会议 PDF 纯文本可靠映射
- Dong Yu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

通用音频预训练以语音、音乐与环境声混合音频为输入，输出可同时支撑分类、检索与问答的统一表示，难点在于监督源稀疏嘈杂且跨域覆盖不足，弱文本难以提供结构化判别信号。该工作先用Qwen3\-Omni\-Captioner对CaptionStew 400K子集音频生成高密度长描述，输出平均数百词的细节字幕进入下一步解析。再用Qwen2\.5\-7B\-Instruct从长描述抽取候选标签并经TF\-IDF筛选，构建800至3000词的统一标签体系，同时保留摘要段作为高质量文本监督。然后在同一Zipformer\-M编码器上分别预训练统一标签多标签分类、标签并行解码、对比学习与字幕生成及多任务联合目标，再冻结编码器接入线性探针、检索字幕与问答评测。与AudioSet监督及同音频低质量字幕基线相比，该范式以离散强标签提供判别性结构信号，以高密度字幕提供描述性对齐信号，绕开了自由文本噪声对对比学习的限制。在VoxCeleb2均值池化线性探针评测任务下，MTC（Ours\-UTS）的准确率为37\.10，高于MTC（AudioSet）基线的准确率18\.84。结论适用边界受限于400k数据规模与单一教师描述器带来的标签偏置，标签粒度与数据量的大规模外推尚未验证，且不同目标在探针、检索与推理问答间呈现明显特化。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 63. [不做迭代生成：用一次重建加音频到姿态解耦做实时唇同步](/posts/conference-cvpr-2026-conference-paper-id-zinonos-flashlips-100-fps-mask-free-latent-lip-sync-using-reconstruction-instead-of-diffusion-cvpr-2026-paper-01961d5de8/)

> 英文题目：*[FlashLips: 100\-FPS Mask\-Free Latent Lip\-Sync using Reconstruction Instead of Diffusion or GANs](/posts/conference-cvpr-2026-conference-paper-id-zinonos-flashlips-100-fps-mask-free-latent-lip-sync-using-reconstruction-instead-of-diffusion-cvpr-2026-paper-01961d5de8/)*

标签：#流匹配 #实时处理 #音视频 #语音配音

评分：**6.7/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音配音 | 主方法：#流匹配

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zinonos_FlashLips_100-FPS_Mask-Free_Latent_Lip-Sync_using_Reconstruction_Instead_of_Diffusion_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zinonos_FlashLips_100-FPS_Mask-Free_Latent_Lip-Sync_using_Reconstruction_Instead_of_Diffusion_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Andreas Zinonos：机构信息未能从会议 PDF 纯文本可靠映射
- Michał Stypułkowski：机构信息未能从会议 PDF 纯文本可靠映射
- Antoni Bigata：机构信息未能从会议 PDF 纯文本可靠映射
- Stavros Petridis：机构信息未能从会议 PDF 纯文本可靠映射
- Maja Pantic：机构信息未能从会议 PDF 纯文本可靠映射
- Nikita Drobyshev：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

唇同步任务输入为待编辑目标视频与驱动语音，输出为仅嘴部与语音对齐而身份、姿态、表情与背景保持不变的视频，其难点在于局部精确编辑与全局时序稳定的矛盾，稍有泄漏即造成身份漂移与背景闪烁。方法链由三步串联：第一步由嘴型编码器将嘴部构型压缩为12维嘴型姿态向量，分离口型与外观；第二步由音频到嘴型变换器接收wav2vec 2\.0语音特征并以流匹配学习速度场，积分采样得到目标嘴型向量；第三步由单步潜空间视觉编辑器接收掩码后源潜码、参考身份潜码与空间广播后的嘴型向量，预测潜残差并与掩码潜码相加，再经冻结解码器成像。与扩散多步去噪或对抗训练相比，该机制以确定性残差重建替代迭代生成，以编辑器自身合成的对称伪对偶自精炼替代外部口罩分割，从而降低训练不稳定与部署复杂度。在HDTF、CelebV\-HQ与CelebV\-Text混合采样100对跨音频的评测设置下，FlashLips\-Transformer的FID指标为5\.89，低于KeySync的FID指标6\.81。该结论适用边界受限于正面清晰人脸近景，对遮挡、大角度与极端表情的外推尚未验证。推理开销方面，原文在同一片段上测得U\-Net变体吞吐为109\.4 FPS，Transformer变体吞吐为66\.8 FPS。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 64. [用手势字幕补上语义：CoordSpeaker 如何让说话人边说边做指定动作](/posts/conference-cvpr-2026-conference-paper-id-fang-coordspeaker-exploiting-gesture-captioning-for-coordinated-caption-empowered-co-speech-gesture-generation-cvpr-2026-paper-3c82aef454/)

> 英文题目：*[CoordSpeaker: Exploiting Gesture Captioning for Coordinated Caption\-Empowered Co\-Speech Gesture Generation](/posts/conference-cvpr-2026-conference-paper-id-fang-coordspeaker-exploiting-gesture-captioning-for-coordinated-caption-empowered-co-speech-gesture-generation-cvpr-2026-paper-3c82aef454/)*

标签：#扩散模型 #多模态学习 #变分自编码器 #语音 #音视频生成

评分：**6.6/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Fang_CoordSpeaker_Exploiting_Gesture_Captioning_for_Coordinated_Caption-Empowered_Co-Speech_Gesture_Generation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Fang_CoordSpeaker_Exploiting_Gesture_Captioning_for_Coordinated_Caption-Empowered_Co-Speech_Gesture_Generation_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Fengyi Fang：机构信息未能从会议 PDF 纯文本可靠映射
- Sicheng Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Wenming Yang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

随语音手势生成需以语音音频与描述字幕为输入联合合成全身动作，输出既与语音节拍对齐又与语义指令一致，难点在于手势数据缺乏描述性标注且异构条件易争夺控制权。CoordSpeaker先以运动分词器加冻结运动语言模型对手势片段离线生成并缓存字幕，输出局部字幕与全局字幕以补足缺失语义并送入后继生成。接着以手势变分自编码器把统一后的运动表示压缩到低维潜空间，实现BEAT与HumanML3D跨数据集联合建模，为扩散提供紧凑运动表示。随后分层控制去噪器在编码器端拼接局部字幕与音频做自注意力保证节奏同步，在解码器端以全局字幕做交叉注意力保证语义连贯，再经解码器恢复动作序列。与简单拼接条件不同，该分层注入显式区分模态与尺度，平衡异构条件的贡献，减少语音与描述冲突。在HumanML3D测试集文本驱动生成任务下，Ours的指标MM\-Dist为3\.584±\.012，低于MoMask的指标MM\-Dist 3\.620±\.011。长序列时序错乱这一失败条件表明其适用边界受限于4名英语说话人与离线缓存字幕场景，双条件联合定量协议尚未验证。在单块NVIDIA RTX 3090硬件上平均每句推理开销为0\.842±\.002s，计算量显著小于基线，得益于潜空间扩散与分层去噪设计。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 65. [从一路混合音频生成面对面双人 3D 对话：空间、注视与轮流如何被建模](/posts/conference-cvpr-2026-conference-paper-id-shan-talking-together-synthesizing-co-located-3d-conversations-from-audio-cvpr-2026-paper-bc500f524a/)

> 英文题目：*[Talking Together: Synthesizing Co\-Located 3D Conversations from Audio](/posts/conference-cvpr-2026-conference-paper-id-shan-talking-together-synthesizing-co-located-3d-conversations-from-audio-cvpr-2026-paper-bc500f524a/)*

标签：#注意力机制 #数据集构建 #扩散模型 #语音 #音视频生成

评分：**6.6/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Shan_Talking_Together_Synthesizing_Co-Located_3D_Conversations_from_Audio_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Shan_Talking_Together_Synthesizing_Co-Located_3D_Conversations_from_Audio_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Mengyi Shan：机构信息未能从会议 PDF 纯文本可靠映射
- Shouchieh Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Ziqian Bai：机构信息未能从会议 PDF 纯文本可靠映射
- Shichen Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yinda Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Luchuan Song：机构信息未能从会议 PDF 纯文本可靠映射
- Rohit Pandey：机构信息未能从会议 PDF 纯文本可靠映射
- Sean Fanello：机构信息未能从会议 PDF 纯文本可靠映射
- Zeng Huang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为一路包含交叠与轮替的双人混合语音，输出为共处同一三维空间的两人的表情参数、头颈旋转、眼动与头部平移序列，难点在于说话者与倾听者角色动态切换、多轮次同时说话解耦以及相对位置朝向与互视的一致建模。方法先以场景过滤、超分与三维人脸拟合从野外双人视频构建大规模会话数据并提取说话概率掩码，再以单人高清视频随机剪切配音合成具有精确说话掩码的伪会话数据，前者提供交互动态后者提供干净唇动监督。接着共享权重的双流扩散模型并行去噪双人动作，以Wav2Vec 2\.0特征、动态角色嵌入与说话概率掩码联合条件化，解码器内帧级双向交叉注意力在两流间交换信息以协调轮替与反应。训练分两阶段先在会话数据上学习交互再在合成数据上专精唇部，同时以首帧平移条件与大语言模型文本到坐标映射实现布局控制，并对大头动样本施加眼视线损失。相对单人模型独立推理与说话者加听者拼接基线，该双流共享表示加显式交叉注意力的差异使倾听反馈与相互注视被联合生成而非事后拼接，从而保持交互连贯与空间一致。在消融评测设置下，Full Model的FD指标为21\.71，低于Single\-Person Only的FD 50\.45。该结论适用边界受限于拟合参数与渲染指标及强制选择主观评价，绝对尺度依赖平均瞳距假设，遮挡与极端姿态下的失败条件尚未验证跨域泛化。训练成本披露为在16块A100硬件上以1024批量训练200000步，推理开销采用2\.5的无分类器引导权重。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 66. [用婴儿两年的所见所闻，能否从零训练出会看会说的视觉基础模型](/posts/conference-cvpr-2026-conference-paper-id-wang-babyvlm-v2-toward-developmentally-grounded-pretraining-and-benchmarking-of-vision-foundation-cvpr-2026-paper-e3a0612996/)

> 英文题目：*[BabyVLM\-V2: Toward Developmentally Grounded Pretraining and Benchmarking of Vision Foundation Models](/posts/conference-cvpr-2026-conference-paper-id-wang-babyvlm-v2-toward-developmentally-grounded-pretraining-and-benchmarking-of-vision-foundation-cvpr-2026-paper-e3a0612996/)*

标签：#数据集 #基准设计 #预训练 #音视频理解

评分：**6.6/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频理解 | 主方法：#基准设计

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Wang_BabyVLM-V2_Toward_Developmentally_Grounded_Pretraining_and_Benchmarking_of_Vision_Foundation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_BabyVLM-V2_Toward_Developmentally_Grounded_Pretraining_and_Benchmarking_of_Vision_Foundation_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Shengao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Wenqi Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zecheng Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Max Whitton：机构信息未能从会议 PDF 纯文本可靠映射
- Michael Wakeham：机构信息未能从会议 PDF 纯文本可靠映射
- Arjun Chandra：机构信息未能从会议 PDF 纯文本可靠映射
- Joey Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Pengyue Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Helen Chen：机构信息未能从会议 PDF 纯文本可靠映射
- David Li：机构信息未能从会议 PDF 纯文本可靠映射
- Jeffrey Li：机构信息未能从会议 PDF 纯文本可靠映射
- Shawn Li：机构信息未能从会议 PDF 纯文本可靠映射
- Andrew Zagula：机构信息未能从会议 PDF 纯文本可靠映射
- Amy Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Andrew Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Sayaka Nakamura：机构信息未能从会议 PDF 纯文本可靠映射
- Yuki Yamamoto：机构信息未能从会议 PDF 纯文本可靠映射
- Jerry Jun Yokono：机构信息未能从会议 PDF 纯文本可靠映射
- Aaron Mueller：机构信息未能从会议 PDF 纯文本可靠映射
- Bryan A\. Plummer：机构信息未能从会议 PDF 纯文本可靠映射
- Kate Saenko：机构信息未能从会议 PDF 纯文本可靠映射
- Venkatesh Saligrama：机构信息未能从会议 PDF 纯文本可靠映射
- Boqing Gong：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作研究以婴儿视角纵向音视频为输入、输出可处理词汇理解、记忆、空间推理与计数的通用视觉语言响应的学习与评测问题，难点在于照护者语音与婴儿视野天然错位、可用时长仅 478 小时且评测需与 6 至 32 月龄能力对齐。预训练语料整理先用 Azure 语音识别转写全部含语音片段并按话语边界切分，再用时长、转写置信度和 X\-CLIP 视频文本相似度过滤得到约 181k 视频话语对，从中按 1 FPS 采样并用 CLIP 相似度筛选得到约 768k 图像话语对，再对连续片段取每段最高相似帧并用 4 至 8 滑动窗口拼接得到约 63k 交错图文序列。模型采用视觉编码器 ViT\-L\-16 约 300M 参数加轻量多层感知机连接器加 LLaMA\-1\.1B 的结构，视觉特征投影到语言空间后与指令拼接由自回归语言模型解码， entire 模型从零经三阶段预训练再用基准同分布指令数据微调以支持单图、多图、视频与多轮问答。相对 BabyVLM\-V1 的关键差异在于预训练覆盖从约三分之一扩展到全部含语音录像并新增视频与交错形态，同时引入指令微调，并以 2025 年 2 月发布的 NIH Baby Toolbox 全部视觉相关测量为锚点构建 10 任务 DevCV Toolbox。在域内 DevCV Toolbox 上婴儿模型总体准确率为 63\.9%，持平 Qwen2\.5\-VL\-7B 的 63\.7%，在 Left/Right 上达 96\.4%、空间细节上达 92\.8%、Who Has More 自然子任务上达 99\.7%，超过 GPT\-4o 的部分数学子任务，但在图片词汇上仅 32\.4%、定位上仅 37\.8%。该结论仅适用于 SAYCam 同域划分，跨到 Ego4D 兄弟基准时总体降至 41\.1%，未参与指令微调的注视听与快速计数任务几乎回到随机猜测。原文未披露训练、推理或部署成本，儿童实测仍在进行中。

🔗 **开源资源**

- 代码相关资源：<https://shawnking98.github.io/BabyVLM-v2/> — 链接可访问（HTTP 200）
- 复现相关资源：<https://shawnking98.github.io/BabyVLM-v2/> — 链接可访问（HTTP 200）
- 第三方资源：<https://ssrn.com/abstract=4696693> — 暂时无法访问
- 第三方资源：<https://childrenhelpingscience.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 67. [先降噪再分割：用自监督音频增强与动态原型约束弥合音视语义鸿沟](/posts/conference-cvpr-2026-conference-paper-id-zhang-bootstrap-your-own-av-proxies-adaptive-contrastive-and-prototype-learning-for-cvpr-2026-paper-4f115f2247/)

> 英文题目：*[Bootstrap Your Own AV\-Proxies: Adaptive Contrastive and Prototype Learning for Audio\-Visual Segmentation](/posts/conference-cvpr-2026-conference-paper-id-zhang-bootstrap-your-own-av-proxies-adaptive-contrastive-and-prototype-learning-for-cvpr-2026-paper-4f115f2247/)*

标签：#对比学习 #自监督学习 #音视频 #音视频理解

评分：**6.6/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频理解 | 主方法：#对比学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_Bootstrap_Your_Own_AV-Proxies_Adaptive_Contrastive_and_Prototype_Learning_for_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_Bootstrap_Your_Own_AV-Proxies_Adaptive_Contrastive_and_Prototype_Learning_for_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Junbo Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Hang Su：机构信息未能从会议 PDF 纯文本可靠映射
- Zhaofan Li：机构信息未能从会议 PDF 纯文本可靠映射
- Hang Dong：机构信息未能从会议 PDF 纯文本可靠映射
- Chao Sun：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音视分割输入为视频帧与对应音频片段，输出为发声目标的二值或语义掩膜，难点在于单模态语义不完备与跨模态语义鸿沟导致的融合噪声与边界模糊。图像与音频编码器先抽取多层视觉特征与音频向量，深层视觉经池化得到全局语义后送入自监督音频增强。该模块以跨模态注意力由音频分支预测视觉输出并以独立投影做对比学习，去噪后的音频嵌入进入动态原型约束。后者对浅层特征做可微像素分类并以动量更新的原型库施加自适应原型损失，再以音频查询的类别响应加权增强发声区域并送入分割头。与依赖SAM先验掩膜或离线原型中心及人工正负对阈值构图的方法不同，该框架全程在线自适应更新并降低跨域建模复杂度。在AVSBench的AVS\-Object\-S4任务下，BYOAVP的J&F为95\.0，高于DDESEG的J&F94\.2。该结论适用边界受限于仅在AVSBench与合成VPO基准验证，对野外长尾类别与强混响遮挡尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 68. [语音一说就信？SVHalluc 检验语音与画面是否真的对上](/posts/conference-cvpr-2026-conference-paper-id-zhang-svhalluc-benchmarking-speech-vision-hallucination-in-audio-visual-large-language-models-cvpr-2026-paper-c302fe8c63/)

> 英文题目：*[SVHalluc: Benchmarking Speech\-Vision Hallucination in Audio\-Visual Large Language Models](/posts/conference-cvpr-2026-conference-paper-id-zhang-svhalluc-benchmarking-speech-vision-hallucination-in-audio-visual-large-language-models-cvpr-2026-paper-c302fe8c63/)*

标签：#基准测试 #基准设计 #音视频 #语音 #音视频问答

评分：**6.6/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频问答 | 主方法：#基准设计

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_SVHalluc_Benchmarking_Speech-Vision_Hallucination_in_Audio-Visual_Large_Language_Models_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_SVHalluc_Benchmarking_Speech-Vision_Hallucination_in_Audio-Visual_Large_Language_Models_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Chenshuang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Kyeong Seon Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Chengxin Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Tae\-Hyun Oh：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

SVHalluc以同步采集的人声语音与烹饪操作视频为输入，以二选一或多选问答为输出，要求判断语音所述实体是否可见及其叙述事件与当前画面是同时、过去还是未来，其难点在于语音富含指代缺失的实体与跨越过去现在未来的时序叙述，模型易将听说内容幻觉为所见事实。从YouCook2验证集截取对齐的语音视频对并用Whisper获取转写负责提供可核对的语音文本，其输出进入语义失配与时间错位样本构造，分别替换动作客体与错置说话时刻与视觉发生时刻以制造幻觉诱因。再经GPT过滤不合理组合并由人工核验保留清晰样本，最后以零样本方式在包含语义与时间各三个由粗到细任务的2405个视频问题对上统一评测。与仅用狗叫或汽笛指示当前事件的环境声基准相比，其关键机制差异在于显式检验命题级语义接地与跨模态时序定位，因而能暴露单模态感知强但跨模态整合弱的失效模式，具有推动语音 grounded视频理解的实际意义。在SVHalluc基准的细粒度语义对齐任务下，加入语音转写的Qwen3\-Omni的准确率为83\.14%，高于原始Qwen3\-Omni的准确率79\.50%。该结论适用边界受限于烹饪教学视频与英语叙述场景，在开放域对话、强噪声或长时因果推理等尚未验证范围内的外推存在失败条件。原文未披露训练、推理或部署成本

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 69. [一个模型压七种数据：OmniZip 以统一分词加稀疏路由做轻量无损压缩](/posts/conference-cvpr-2026-conference-paper-id-zhao-omnizip-learning-a-unified-and-lightweight-lossless-compressor-for-multi-modal-cvpr-2026-paper-73e37d81df/)

> 英文题目：*[OmniZip: Learning a Unified and Lightweight Lossless Compressor for Multi\-Modal Data](/posts/conference-cvpr-2026-conference-paper-id-zhao-omnizip-learning-a-unified-and-lightweight-lossless-compressor-for-multi-modal-cvpr-2026-paper-73e37d81df/)*

标签：#混合专家模型 #高效推理 #端侧运行 #语音编码

评分：**6.6/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音编码 | 主方法：#混合专家模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhao_OmniZip_Learning_a_Unified_and_Lightweight_Lossless_Compressor_for_Multi-Modal_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_OmniZip_Learning_a_Unified_and_Lightweight_Lossless_Compressor_for_Multi-Modal_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Yan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengxue Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Junxuan Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Dajiang Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Qunshan Gu：机构信息未能从会议 PDF 纯文本可靠映射
- Qi Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Li Song：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文面向多模态无损压缩，输入覆盖自然图像与医学图像及触觉信号等图像类数据，以及自然文本与基因序列及数据库记录与语音字节流，输出为可经熵编码精确还原的比特流，实际难点在于各模态维度与统计特性及离散化粒度高度异构，难以用单一概率模型统一估计似然。方法链由四步构成：模态统一分词器先将图像分块展平与文本字节对编码及语音字节映射为统一可逆词元并附加模态前缀，其输出序列直接进入基于RWKV的概率预测主干；模态路由上下文学习在时间混合的V投影上以四专家取二路由适配不同上下文依赖，其输出隐状态进入模态路由前馈模块；模态路由前馈模块以小型多层感知机专家增强非线性表达并保持每词元激活量基本不变；重参数化训练分支仅在训练期扩容以提升容量，推理时合并而不增加开销。相对把全模态转为字节或ASCII文本再套用大语言模型的做法，该设计保留了图像局部空间相关性与语音连续字节结构，并以稀疏激活控制多模态容量扩张，具有更轻量的实际意义。在Kodak消融评测任务下，完整OmniZip的压缩性能指标bits/Byte为3\.307 bits/Byte，低于消融变体的压缩性能指标bits/Byte的3\.414 bits/Byte。该结论适用边界受限于论文内十六个数据集的均衡训练评测划分，跨域泛化与音乐及噪声语音等外推场景尚未验证。训练成本来自在NVIDIA A100硬件上以余弦退火策略训练二十轮，推理开销在批量一百二十八时边缘端仍可维持零点一至一兆字节每秒量级的吞吐。

🔗 **开源资源**

- 第三方资源：<https://github.com/facebook/zstd> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 70. [边听边说还不能卡：用因果扩散迫使头像实时接住用户](/posts/conference-cvpr-2026-conference-paper-id-ki-avatar-forcing-real-time-interactive-head-avatar-generation-for-natural-conversation-cvpr-2026-paper-937e84f299/)

> 英文题目：*[Avatar Forcing: Real\-Time Interactive Head Avatar Generation for Natural Conversation](/posts/conference-cvpr-2026-conference-paper-id-ki-avatar-forcing-real-time-interactive-head-avatar-generation-for-natural-conversation-cvpr-2026-paper-937e84f299/)*

标签：#扩散模型 #偏好优化 #实时处理 #音视频 #音视频交互

评分：**6.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频交互 | 主方法：#扩散模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Ki_Avatar_Forcing_Real-Time_Interactive_Head_Avatar_Generation_for_Natural_Conversation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Ki_Avatar_Forcing_Real-Time_Interactive_Head_Avatar_Generation_for_Natural_Conversation_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Taekyung Ki：机构信息未能从会议 PDF 纯文本可靠映射
- Sangwon Jang：机构信息未能从会议 PDF 纯文本可靠映射
- Jaehyeong Jo：机构信息未能从会议 PDF 纯文本可靠映射
- Jaehong Yoon：机构信息未能从会议 PDF 纯文本可靠映射
- Sung Ju Hwang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以单张参考人像为身份源，持续接收用户音频与用户头部运动并结合化身音频，逐段因果生成可实时交互的头部化身视频，难点在于因果约束下的低延迟响应与用户反应多对一模糊导致的表情呆板被动。方法首先复用运动潜空间自编码器将图像解耦为身份潜码与运动潜码，为后续运动生成提供紧凑表征并保留身份外观。接着双运动编码器先对齐用户音画线索再融合化身音频，形成统一条件向量并送入生成器实现视听联合驱动。然后块级因果扩散强迫变换器在潜空间按块去噪预测下一运动块并解码成像，再以真值潜码为正、丢弃用户信号的弱模型输出为负做直接偏好优化以增强反应丰富度。与需等待全序列上下文的INFP双向DiT不同，本文采用块内双向、块间因果掩码并辅以2帧前视与滚动键值缓存，从而无需等待未来音频即可逐步生成并保持时序平滑。在RealTalk基准下，Avatar Forcing的延迟指标Latency为0\.5s，低于INFP\*的延迟指标Latency 3\.4s。适用边界为正脸双人短片段的受控裁剪与声源分离流程，多人遮挡与长时漂移尚未验证，推理开销上单卡H100以10步欧拉采样实现约500ms延迟以支撑实时交互。

🔗 **开源资源**

- 演示资源：<https://taekyungki.github.io/AvatarForcing> → <https://taekyungki.github.io/AvatarForcing/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.synthesia.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 71. [数得准还要指得出：长视频线索级音视计数的基准与能力迁移训练](/posts/conference-cvpr-2026-conference-paper-id-lu-av-reasoner-improving-and-benchmarking-clue-grounded-audio-visual-counting-for-mllms-cvpr-2026-paper-209f321d32/)

> 英文题目：*[AV\-Reasoner: Improving and Benchmarking Clue\-Grounded Audio\-Visual Counting for MLLMs](/posts/conference-cvpr-2026-conference-paper-id-lu-av-reasoner-improving-and-benchmarking-clue-grounded-audio-visual-counting-for-mllms-cvpr-2026-paper-209f321d32/)*

标签：#基准测试 #课程学习 #强化学习 #音视频 #音视频问答

评分：**6.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频问答 | 主方法：#强化学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Lu_AV-Reasoner_Improving_and_Benchmarking_Clue-Grounded_Audio-Visual_Counting_for_MLLMs_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Lu_AV-Reasoner_Improving_and_Benchmarking_Clue-Grounded_Audio-Visual_Counting_for_MLLMs_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Lidong Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Guo Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Zhu Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiqi Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yicheng Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Tong Lu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为超过10分钟的长视频加多模态指代表达，输出为事件、物体与属性的数量及其时空线索，难点在于长程定位、音视对齐与细粒度累加必须同时成立。作者先以三阶段人工管线构建线索接地计数基准 Clue\-Grounded Audio\-Visual Counting即CG\-AV\-Counting，提供黑盒计数与白盒定位计分双协议。接着以Ola\-Omni\-7B为基座做冷启动监督微调使模型学会结构化输出，再按问答到接地再到计数的课程用分组相对策略优化Group Relative Policy Optimization即GRPO渐进训练并混入历史样本防遗忘，最后做全任务强化学习平衡各能力。与以往短视频闭集计数只给最终数字不同，该工作把可验证奖励与课程迁移结合，让稀缺计数数据复用问答与接地信号。在CG\-AV\-Counting长视频设置下AV\-Reasoner准确率达到22\.30%，相对基座17\.92%明显提升但仍远低于人类85\.00%。该结论仅适用于所测长视频分布与显式线索协议，跨域显式推理增益有限且属性分组计数最难。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://openai.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 72. [不靠姿态骨架：用文本管动作、用音频管节奏的说话人像生成](/posts/conference-cvpr-2026-conference-paper-id-nazarieh-syncdreamer-controllable-and-expressive-avatar-generation-beyond-the-talking-head-cvpr-2026-paper-7ce88c19cd/)

> 英文题目：*[SyncDreamer: Controllable and Expressive Avatar Generation Beyond the Talking Head](/posts/conference-cvpr-2026-conference-paper-id-nazarieh-syncdreamer-controllable-and-expressive-avatar-generation-beyond-the-talking-head-cvpr-2026-paper-7ce88c19cd/)*

标签：#扩散模型 #音视频 #语音 #音视频生成

评分：**6.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Nazarieh_SyncDreamer_Controllable_and_Expressive_Avatar_Generation_Beyond_the_Talking_Head_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Nazarieh_SyncDreamer_Controllable_and_Expressive_Avatar_Generation_Beyond_the_Talking_Head_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Fatemeh Nazarieh：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenhua Feng：机构信息未能从会议 PDF 纯文本可靠映射
- Diptesh Kanojia：机构信息未能从会议 PDF 纯文本可靠映射
- Josef Kittler：机构信息未能从会议 PDF 纯文本可靠映射
- Muhammad Awais：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

面向单张参考图、语音或歌唱音频与自然语言提示生成肖像至全身说话视频的任务，实际难点在于音频难以推断头动与肢体运动且离散情绪标签刻画不了连续韵律强度，而文本在扩散变换器中常只作背景描述而不驱动动作。SyncDreamer先以视觉适配器从参考图经图像编码器与可学习查询交叉注意力提炼身份嵌入并注入扩散变换器主干，为生成保留细粒度外观。接着注意力定位损失正则化主干的视觉交叉注意力图，约束空间查询聚焦眼睛嘴部手部等语义区域，使身份嵌入在大幅姿态下保持空间对齐后进入条件去噪。然后音频动态编码器按表达显著性对语音特征做时序加权以突出节奏与能量起伏，跨模态提示增强器把简短提示扩展为视觉接地的动作指令，二者与视觉条件共同参与去噪以实现唇形手势注视联合控制。与依赖三维关键点或轨迹模板的全身方法和把文本仅作风格先验的肖像方法不同，该框架无需中间姿态表示即可由文本直接驱动肢体语义动作，具有可扩展的表达控制意义。在HDTF基准下，SyncDreamer的FID指标为52\.8，低于OmniAvatar的FID指标53\.7。该结论适用边界限于中短时单人说话与表演场景，对多人交互与长时一致性等外推尚未验证。其训练成本受限于两块A100硬件与42个变换器块及100步去噪的推理开销，极端遮挡下仍可能失败。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 73. [跨模态检索错位与单跳知识太浅：用多跳图加两步剪枝补齐音视频问答证据](/posts/conference-cvpr-2026-conference-paper-id-park-m3kg-rag-multi-hop-multimodal-knowledge-graph-enhanced-retrieval-augmented-generation-cvpr-2026-paper-9b267bd023/)

> 英文题目：*[M^3KG\-RAG: Multi\-hop Multimodal Knowledge Graph\-enhanced Retrieval\-Augmented Generation](/posts/conference-cvpr-2026-conference-paper-id-park-m3kg-rag-multi-hop-multimodal-knowledge-graph-enhanced-retrieval-augmented-generation-cvpr-2026-paper-9b267bd023/)*

标签：#多模态学习 #检索增强 #音视频 #音视频问答

评分：**6.5/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频问答 | 主方法：#检索增强

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Park_M3KG-RAG_Multi-hop_Multimodal_Knowledge_Graph-enhanced_Retrieval-Augmented_Generation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Park_M3KG-RAG_Multi-hop_Multimodal_Knowledge_Graph-enhanced_Retrieval-Augmented_Generation_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Hyeongcheol Park：机构信息未能从会议 PDF 纯文本可靠映射
- Jiyoung Seo：机构信息未能从会议 PDF 纯文本可靠映射
- Jaewon Mun：机构信息未能从会议 PDF 纯文本可靠映射
- Hogun Park：机构信息未能从会议 PDF 纯文本可靠映射
- Wonmin Byeon：机构信息未能从会议 PDF 纯文本可靠映射
- Sung June Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Hyeonsoo Im：机构信息未能从会议 PDF 纯文本可靠映射
- JeungSub Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Sangpil Kim：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为同步音频、视频与文本问题，输出为开放式自由回答，难点在于音频时序因果与视觉空间细节难以在统一嵌入中联合对齐，单跳图文图更无法支撑多跳推理。该方法先以多智能体改写语义稀薄字幕并抽取上下文富集三元组，实体规范化后链接开放知识库获取描述并重写，形成多跳多模态知识图谱。随后按模态分别在同模态物品索引中检索近邻并扩展为多跳子图，避免跨模态共享空间的错位检索。最后经 grounded剪枝先用视觉与音频接地模型验证存在性，再用轻量大语言模型剔除与答题无关三元组，将保留子图拼接入多模态大语言模型生成答案。相对VAT\-KG等已有方法，关键差异在于模态内检索加多跳扩展与两阶段问答效用剪枝，其实质是只保留查询可见且答题有用的证据以抑制冗余噪声。在AudioCaps\-QA基准下，M3KG\-RAG的M\.J\.得分为60\.77，高于VAT\-KG基线的M\.J\.得分51\.30。结论适用边界受限于AudioCaps\-QA、VideoChatGPT与VALOR三个问答评测，尚未验证长视频、强噪音频或跨域分布，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 74. [在嘴型与动作抢注意力时，如何让化身在正确时间做正确动作](/posts/conference-cvpr-2026-conference-paper-id-peng-actavatar-temporally-aware-precise-action-control-for-talking-avatars-cvpr-2026-paper-55605b8888/)

> 英文题目：*[ActAvatar: Temporally\-Aware Precise Action Control for Talking Avatars](/posts/conference-cvpr-2026-conference-paper-id-peng-actavatar-temporally-aware-precise-action-control-for-talking-avatars-cvpr-2026-paper-55605b8888/)*

标签：#注意力机制 #流匹配 #音视频 #语音 #音视频生成

评分：**6.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#注意力机制

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Peng_ActAvatar_Temporally-Aware_Precise_Action_Control_for_Talking_Avatars_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Peng_ActAvatar_Temporally-Aware_Precise_Action_Control_for_Talking_Avatars_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Ziqiao Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Yi Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yifeng Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Guozhen Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiyao Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Zixiang Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Youliang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengguang Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Zhaoxin Fan：机构信息未能从会议 PDF 纯文本可靠映射
- Hongyan Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuan Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Qinglin Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Jun He：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务以单张参考图、语音音频与结构化动作文本为输入，输出口型同步且动作在指定时间窗出现的说话人视频，难点在于文本动作语义与音频口型易相互干扰且全局提示缺乏时间结构导致注意力在时间上均匀扩散。为此方法先由多模态大语言模型依据图像与运动筛选生成含全局基块与带时间锚相位块的分层提示，为后续帧级对齐提供时间结构。接着相位感知交叉注意力用可学习相位嵌入增强词元，使归一化时间落入对应区间的帧集中关注相应相位词元，实现相位级语义对齐。然后渐进式音频视觉对齐按Transformer深度以幂函数放大音频影响，让浅层文本主导动作生成而深层音频精修口型，并经两阶段训练先冻结主干学口型再学动作控制。相比依赖全局提示扩散与仅做表情时间线的方法，该相位条件注意力与深度解耦对齐实现了无额外控制信号的精确时间动作控制并保持口型质量。在Action Bench基准下，ActAvatar的Sync\-C指标为6\.893，高于OmniAvatar的Sync\-C指标6\.765。其结论适用边界受限于5秒、704×1280、25FPS近身说话场景，长时连贯与开放域泛化尚未验证，而训练成本为40张H20显卡上训练，主干为5B参数，单卡生成5秒视频的推理开销约16分钟。

🔗 **开源资源**

- 演示资源：<https://ziqiaopeng.github.io/ActAvatar/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 75. [不对称伪造下为何要先估一致性再分配计算：IaMSB 的三段桥](/posts/conference-cvpr-2026-conference-paper-id-xiong-inconsistency-aware-multimodal-schrodinger-bridge-for-deepfake-localization-cvpr-2026-paper-f7cc424e6f/)

> 英文题目：*[Inconsistency\-aware Multimodal Schrodinger Bridge for Deepfake Localization](/posts/conference-cvpr-2026-conference-paper-id-xiong-inconsistency-aware-multimodal-schrodinger-bridge-for-deepfake-localization-cvpr-2026-paper-f7cc424e6f/)*

标签：#扩散模型 #多模态学习 #音视频 #音频深度伪造检测 #音频事件检测

评分：**6.5/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.6/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频深度伪造检测 | 主方法：#扩散模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Xiong_Inconsistency-aware_Multimodal_Schrodinger_Bridge_for_Deepfake_Localization_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Jiayu Xiong：机构信息未能从会议 PDF 纯文本可靠映射
- Jing Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Qi Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Wanlong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jun Xue：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音视频深度伪造定位输入为音频与视觉时序token，输出为可审计的伪造时间区间，难点在于单侧伪造与异步事件下对称均匀融合会把干净模态噪声引入伪造分支并浪费计算，损害严格边界精度。先由粗桥接收双模态token分别做模态内相干增强并输出候选区间，再将粗事件送入见证桥求解熵正则最优传输耦合以导出跨模态不一致统计量并输出选中见证索引与非对称预算，最后将选中查询与预算送入精炼桥仅对选中子集做步数可控的见证注入融合以输出起止时间与置信度并跨模态融合。粗桥每模态推进2步并以top\-16见证构成瓶颈，精炼桥以目标12步按方向尺度非对称分配迭代。与均匀铺开融合层的方法不同，该链以传输残差驱动瓶颈交互与计算放置，只在可疑模态上花迭代，从而兼顾抗负迁移与高分辨率边界。在LAV\-DF基准下，IaMSB的指标AP@0\.95为55\.92，高于UMMAFormer的指标AP@0\.95 37\.61。该结论适用边界受限于视觉单侧伪造下跨模态证据较弱时严格阈值增益收窄。在计算量上平均视频浮点运算为93\.0G而长视频达311\.2G，需特定硬件与延迟权衡。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 76. [跨模态一致反而更难查：RAVM 用多智能体伪造现实感视频谣言并以证据图检测](/posts/conference-cvpr-2026-conference-paper-id-zhang-vmd-fact-a-new-video-dataset-and-mllm-based-method-for-detecting-cvpr-2026-paper-12f4871989/)

> 英文题目：*[VMD\-FACT: A New Video Dataset and MLLM\-based method for Detecting Realistic AI\-Generated Video Misinformation](/posts/conference-cvpr-2026-conference-paper-id-zhang-vmd-fact-a-new-video-dataset-and-mllm-based-method-for-detecting-cvpr-2026-paper-12f4871989/)*

标签：#内容审核 #数据集 #图神经网络 #音视频理解

评分：**6.5/10** | 创新 1.6/2 | 技术严谨 1.3/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频理解 | 主方法：#图神经网络

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_VMD-FACT_A_New_Video_Dataset_and_MLLM-based_method_for_Detecting_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_VMD-FACT_A_New_Video_Dataset_and_MLLM-based_method_for_Detecting_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Yongkang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Dongyu She：机构信息未能从会议 PDF 纯文本可靠映射
- Baiyu Ji：机构信息未能从会议 PDF 纯文本可靠映射
- Qichuan Geng：机构信息未能从会议 PDF 纯文本可靠映射
- Zhong Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Yan Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为社交平台流传的声明文本与配套视频，输出为真假二分类与可解释推理路径，难点在于生成式伪造跨模态语义高度一致且不再依赖明显剪辑痕迹。作者先用意图极性引导的声明操纵生成更具欺骗性的伪声明，再由语义对齐提示驱动候选视频生成与多评估器迭代优化，随后经关键帧编辑与语义驱动音频叠加完成视频与音频伪造，最终由事实核查与多模态证据图引导7B模型进行可解释判定。该链条以生成代替剪辑，以意图与一致性约束代替跨模态破坏，与已有视频误导检测数据集形成机制差异。在自建真实感AI生成视频误导数据集测试集上内部外部证据图建模取得75\.99%准确率与73\.44%宏平均F1，显著高于Gemini 2\.5的68\.89%与68\.00%。结论仅适用于该数据集划分与所选25个大模型的对比范围，对开放域时事与未见生成器的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://gitee.com/VR_NAVE/ravm> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 77. [不暴力看全片：用跨模态预测逼模型补全听觉与视觉](/posts/conference-cvpr-2026-conference-paper-id-cao-enhancing-video-vision-language-model-with-hippocampal-sensing-cvpr-2026-paper-075cd26b8c/)

> 英文题目：*[Enhancing Video Vision Language Model with Hippocampal Sensing](/posts/conference-cvpr-2026-conference-paper-id-cao-enhancing-video-vision-language-model-with-hippocampal-sensing-cvpr-2026-paper-075cd26b8c/)*

标签：#数据集 #强化学习 #音视频 #音视频问答

评分：**6.4/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频问答 | 主方法：#强化学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Cao_Enhancing_Video_Vision_Language_Model_with_Hippocampal_Sensing_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Xu Cao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理以视频流、音频流与自然语言问题为输入、输出多选答案的音视频问答任务，难点在于长叙事中视觉微表情与语音语调的细微协同或矛盾难以被单遍被动建模捕捉。先由感知阶段分别对相关音频与视频片段生成面向问题的跨模态浓缩摘要，并将摘要按时序切分为前后段以构造预测任务。接着通过跨模态时序预测联合指令微调，迫使模型用互补模态与时序上下文重构缺失模态摘要以内化世界模型。然后由推理阶段将摘要与原始视频联合输入大语言模型进行思维链推理作答，并用视频音频负感知优化对比强化学习对超越单模态捷径的正确联合推理显式奖励。与被动全量输入的视频视觉语言模型相比，其关键差异是用跨模态时序预测代替纯时序未来预测，实际意义在于显式抑制单模态捷径并奖励多模态联合推理。在Video\-MME基准下，HippoVLM\-7B的得分为62\.5，高于Qwen2\.5\-VL\-7B基线的得分53\.1。该结论适用边界受限于含音频的四个视频问答基准，尚未验证纯视觉、强噪声音频或开放生成任务中的外推能力。单卡推理开销方面，HippoVLM\-7B在16帧条件下的延迟为18\.150秒，慢于基线但快于部分智能体式方法。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 78. [绕开姿态瓶颈：用音频直驱三维高斯粒子的全身说话人](/posts/conference-cvpr-2026-conference-paper-id-lee-audioavatar-personalized-audio-driven-whole-body-talking-avatars-cvpr-2026-paper-27ed1fcc52/)

> 英文题目：*[AudioAvatar: Personalized Audio\-driven Whole\-body Talking Avatars](/posts/conference-cvpr-2026-conference-paper-id-lee-audioavatar-personalized-audio-driven-whole-body-talking-avatars-cvpr-2026-paper-27ed1fcc52/)*

标签：#扩散模型 #知识蒸馏 #语音 #音视频生成

评分：**6.4/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Lee_AudioAvatar_Personalized_Audio-driven_Whole-body_Talking_Avatars_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Lee_AudioAvatar_Personalized_Audio-driven_Whole-body_Talking_Avatars_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Seungeun Lee：机构信息未能从会议 PDF 纯文本可靠映射
- SeungJun Moon：机构信息未能从会议 PDF 纯文本可靠映射
- Hah Min Lew：机构信息未能从会议 PDF 纯文本可靠映射
- Ji\-Su Kang：机构信息未能从会议 PDF 纯文本可靠映射
- Gyeong\-Moon Park：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

给定单张全身参考图 \(I\_0\) 和驱动语音序列，任务是合成身份一致、唇手体协同的全身会话视频 \(V=\\\{I\_t\\\}\_\{t=0\}^\{T\}\)，难点在于单图下先经由参数化姿态再渲染的管线会累积量化、重定向与跟踪误差，并抹掉毫秒级微动作。本文构建端到端音频直驱的三维高斯泼溅（3D Gaussian Splatting）化身，先由音频与粒子运动嵌入对齐语义，再经扩散Transformer（Diffusion Transformer）生成全身粒子运动并精修脸手细节，最后经高斯解码与可微光栅化渲染成像。与姿态驱动基线相比，该链路消除了音频到姿态到渲染的有损交接，使序列渲染损失的梯度直达形变场。为弥补单图监督不足，合成身份语音视频与视频分数蒸馏提供弱对齐先验。在30个未见说话人的自建测试集上，本文方法相对最强视频基线HunyuanVideo\-Avatar将频域视频距离（FVD）从320降至240，相对降低25\.0%，同步置信（SyncC）从6\.90升至7\.20。适用边界限于正面全身会话、每段5秒至10秒短片段及受控背景，跨视角、大位移与长时身份漂移尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://labs.google/flow/> → <https://flow.google.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 79. [不等未来语音：MIBURI 如何用对话模型的内部 token 流直接生成全身手势](/posts/conference-cvpr-2026-conference-paper-id-mughal-miburi-towards-expressive-interactive-gesture-synthesis-cvpr-2026-paper-94e8569395/)

> 英文题目：*[MIBURI: Towards Expressive Interactive Gesture Synthesis](/posts/conference-cvpr-2026-conference-paper-id-mughal-miburi-towards-expressive-interactive-gesture-synthesis-cvpr-2026-paper-94e8569395/)*

标签：#自回归模型 #向量量化 #严格因果 #实时处理 #音视频生成

评分：**6.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#自回归模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Mughal_MIBURI_Towards_Expressive_Interactive_Gesture_Synthesis_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Mughal_MIBURI_Towards_Expressive_Interactive_Gesture_Synthesis_CVPR_2026_paper.pdf)

👥 **作者与机构**

- M\. Hamza Mughal：机构信息未能从会议 PDF 纯文本可靠映射
- Rishabh Dabral：机构信息未能从会议 PDF 纯文本可靠映射
- Vera Demberg：机构信息未能从会议 PDF 纯文本可靠映射
- Christian Theobalt：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

具身对话智能体需与实时口语对话同步生成全身手势与面部表情，只能利用过去语音而不能等待未来上下文，还需满足严格因果与实时交互的双重约束。先抽取Moshi对话模型内部语音与文本token流作为语义韵律输入，输入为双流语音文本token，职责是提供富语义声学上下文，输出为时间对齐的上下文嵌入，从而避免传统转写合成流水线的延迟。再将该上下文嵌入与历史手势token送入时间Transformer，输入为多级语义嵌入与历史动作，职责是建模跨帧动态并输出时间上下文，该上下文直接作为条件进入下一步，每步覆盖两帧动作以控制延迟。最后运动学Transformer以时间上下文为输入，职责是逐层补全同一时刻面部、上身和下身细节并经因果解码回放为连续动作，片段级对比与语音激活损失进一步约束轨迹对齐与说话倾听区分。与依赖种子序列与未来帧的非因果基线不同，该因果自回归链无需种子动作并维护注意力缓存逐步生成，保持了低延迟与多样性。在BEAT2单说话人Scott评测设置下，MIBURI\(\+Face\)的FGD为0\.753，高于EMAGE的FGD 0\.552。其结论适用边界受限于单人说话手势且未建模用户身体反馈，双人互动与长时漂移尚未验证，系统在硬件RTX3090上演示延迟为每帧36ms。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 80. [从网上视频到可控舞蹈：OpenDance 用解耦词元与联合掩码统一音乐加空间加文本控制](/posts/conference-cvpr-2026-conference-paper-id-zhang-opendance-multimodal-controllable-3d-dance-generation-with-large-scale-internet-data-cvpr-2026-paper-14d4a3e6bf/)

> 英文题目：*[OpenDance: Multimodal Controllable 3D Dance Generation with Large\-scale Internet Data](/posts/conference-cvpr-2026-conference-paper-id-zhang-opendance-multimodal-controllable-3d-dance-generation-with-large-scale-internet-data-cvpr-2026-paper-14d4a3e6bf/)*

标签：#数据集 #多模态学习 #音乐 #音乐生成

评分：**6.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.6/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音乐生成 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_OpenDance_Multimodal_Controllable_3D_Dance_Generation_with_Large-scale_Internet_Data_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhang_OpenDance_Multimodal_Controllable_3D_Dance_Generation_with_Large-scale_Internet_Data_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Jinlu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zixi Kang：机构信息未能从会议 PDF 纯文本可靠映射
- Libin Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Jianlong Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Qi Tian：机构信息未能从会议 PDF 纯文本可靠映射
- Feng Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Yizhou Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音乐驱动三维舞蹈生成需以音乐与文本为风格条件、以二维关键点与三维轨迹为空间条件合成多风格舞蹈，难点在于动作高度动态且风格监督与空间监督强度不均衡易导致控制失效。为此先从约600小时网络视频经语言模型检索过滤、世界坐标姿态估计与半自动标注构建OpenDanceSet，提供配对的风格信号与空间信号以支撑后续建模。接着用解耦舞蹈分词器对关节转角、全局轨迹与二维关键点独立编码量化，使空间token与动作token对齐并送入多条件变换器联合建模。然后由多条件变换器对三路token做联合掩码预测，并经可微前向运动学与足部接触等空间监督同时重建动作与空间token，以缓解多模态学习不均衡。推理时再用跨步Logit排序重掩码与足部滑动优化迭代精炼低置信token，该同时预测空间token的机制不同于仅生成动作token的旧范式因而保留细粒度控制。在OpenDanceSet子集评测条件下，Traj控制的指标FIDk为42\.52，高于None控制的指标FIDk 23\.36。该结论适用边界受限于单人独舞与24关节SMPL身体建模，缺手部手指与面部标注且多人群舞场景尚未验证，训练硬件为单卡NVIDIA RTX 4090 GPU。

🔗 **开源资源**

- 复现相关资源：<https://open-dance.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 81. [先想再动再说：U\-Mind 用文本先行统一语言语音动作的实时交互](/posts/conference-cvpr-2026-conference-paper-id-deng-u-mind-a-unified-framework-for-real-time-multimodal-interaction-with-audiovisual-cvpr-2026-paper-acd2aefd19/)

> 英文题目：*[U\-Mind: A Unified Framework for Real\-Time Multimodal Interaction with Audiovisual Generation](/posts/conference-cvpr-2026-conference-paper-id-deng-u-mind-a-unified-framework-for-real-time-multimodal-interaction-with-audiovisual-cvpr-2026-paper-acd2aefd19/)*

标签：#多模态学习 #实时处理 #音视频生成 #音视频交互

评分：**6.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音视频交互 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Deng_U-Mind_A_Unified_Framework_for_Real-Time_Multimodal_Interaction_with_Audiovisual_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Deng_U-Mind_A_Unified_Framework_for_Real-Time_Multimodal_Interaction_with_Audiovisual_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Xiang Deng：机构信息未能从会议 PDF 纯文本可靠映射
- Feng Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Yong Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Youxin Pang：机构信息未能从会议 PDF 纯文本可靠映射
- Xu Xiaoming：机构信息未能从会议 PDF 纯文本可靠映射
- Zhuoliang Kang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoming Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Yebin Liu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入文本或语音用户查询并同步输出文本回复、语音与人体动作及渲染视频，难点在于跨模态时间同步与联合训练时大语言模型推理能力退化。其方法先用残差向量量化变分自编码器与语音分词器将动作与语音离散为词元并统一词表，使共享主干能做跨模态下一个词元预测。接着在预训练中混合文本到动作、语音到动作、文本到语音的模态对齐任务与纯文本推理复述任务，并按韵律暂停切分重组片段以强化细粒度对齐，输出兼顾对齐与推理的高智能基座。然后在指令微调中强制先生成思维链规划再按文本优先顺序解码文本、语音与动作，并由姿态可控视频模块合成为视频。与外挂规划器或纯文本对齐方法不同，该框架把推理显式内化为解码前缀并用切分重组强化语音动作节律对应，具有统一实时交互意义。在BEAT v2与HumanML3D衍生多模态对话评测任务下，Ours的FGD为7\.67，低于SOLAMI的FGD 18\.43。该结论适用边界限于短句级对话评测及大模型主观打分，细粒度手部表情与长时对话外推尚未验证且受限于离散动作词表保真度。视频生成模块的训练成本涉及在16块H100 GPU硬件上微调，整体多模态主干的完整训练与推理开销原文未充分量化。

🔗 **开源资源**

- 演示资源：<https://xiang-deng00.github.io/U-Mind.github.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/canopyai/OrpheusTTS> — 链接不可用（HTTP 404）
- 第三方资源：<https://github.com/openai/whisper> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 82. [把重叠声场拆开再对齐：FoleyDesigner 如何做时空可控的立体声拟音](/posts/conference-cvpr-2026-conference-paper-id-li-foleydesigner-immersive-stereo-foley-generation-with-precise-spatio-temporal-alignment-for-cvpr-2026-paper-24f6de3aa0/)

> 英文题目：*[FoleyDesigner: Immersive Stereo Foley Generation with Precise Spatio\-Temporal Alignment for Film Clips](/posts/conference-cvpr-2026-conference-paper-id-li-foleydesigner-immersive-stereo-foley-generation-with-precise-spatio-temporal-alignment-for-cvpr-2026-paper-24f6de3aa0/)*

标签：#数据集 #扩散模型 #空间音频信号 #视频到声音生成

评分：**6.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#视频到声音生成 | 主方法：#扩散模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Li_FoleyDesigner_Immersive_Stereo_Foley_Generation_with_Precise_Spatio-Temporal_Alignment_for_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_FoleyDesigner_Immersive_Stereo_Foley_Generation_with_Precise_Spatio-Temporal_Alignment_for_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Mengtian Li：机构信息未能从会议 PDF 纯文本可靠映射
- Kunyan Dai：机构信息未能从会议 PDF 纯文本可靠映射
- Yi Ding：机构信息未能从会议 PDF 纯文本可靠映射
- Ruobing Ni：机构信息未能从会议 PDF 纯文本可靠映射
- Ying Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Wenwu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhifeng Xie：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为无声电影片段与剧本，输出为带方位与纵深的立体声拟音及 5\.1 环绕混音，难点在于密集重叠声事件相互掩蔽、帧级时空对齐缺失以及混音声学不一致。方法链分三步推进：细粒度影片分解先由 FilmScribe 加 FoleyScriptWriter 经思维树验证输出分层拟音脚本，再由视听定位加深度估计提取轨迹并经位置感知交叉注意力注入扩散变换器生成立体声，最后由分析加规划加混响均衡动态专家的多智能体完成诊断与上混。各环节以前一步结构化产物为条件，脚本指导单事件生成，轨迹控制声像，混音修正声学。与仅用文本或图像条件的空间音频生成不同，该工作以视频追踪轨迹显式接地时空控制并保留影视混音规范。在 FilmStereo 上立体声质量 FSAD 为 0\.138 且时间交并比 IoU 为 32\.2，优于 SpatialSonic 等基线。结论限于 8 类拟音与合成空间分布，密集并发与大幅运动下定位仍会退化，跨真实片场录音的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 83. [长视频越播越走样：先定低分辨率动作再用姿态锚定外观的音频驱动动画](/posts/conference-cvpr-2026-conference-paper-id-li-infinityhuman-towards-long-term-audio-driven-human-animation-cvpr-2026-paper-ca3cfd6ba8/)

> 英文题目：*[InfinityHuman: Towards Long\-Term Audio\-Driven Human Animation](/posts/conference-cvpr-2026-conference-paper-id-li-infinityhuman-towards-long-term-audio-driven-human-animation-cvpr-2026-paper-ca3cfd6ba8/)*

标签：#流匹配 #强化学习 #音视频 #语音 #音视频生成

评分：**6.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#流匹配

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Li_InfinityHuman_Towards_Long-Term_Audio-Driven_Human_Animation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_InfinityHuman_Towards_Long-Term_Audio-Driven_Human_Animation_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Xiaodi Li：机构信息未能从会议 PDF 纯文本可靠映射
- Pan Xie：机构信息未能从会议 PDF 纯文本可靠映射
- Yi Ren：机构信息未能从会议 PDF 纯文本可靠映射
- Qijun Gan：机构信息未能从会议 PDF 纯文本可靠映射
- Chen Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Fangyuan Kong：机构信息未能从会议 PDF 纯文本可靠映射
- Xiang Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Zehuan Yuan：机构信息未能从会议 PDF 纯文本可靠映射
- Bingyue Peng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频驱动人体动画需以单张参考图像、语音音频与可选文本为输入，生成高分辨长时全身视频，难点在于重叠运动帧自回归延拓会累积误差导致身份漂移、颜色偏移与场景失稳，且手部小幅高速运动易出现手指数量错误与音画错位。InfinityHuman采用粗到细两阶段链路，先由低分辨音频到视频扩散变换器经流匹配生成语音同步的粗运动潜变量，再将退化低分辨潜变量输入姿态引导精修器，结合像素级姿态序列与无噪声参考前缀潜变量重建高分辨视频。低分辨阶段还引入基于高质量手部数据训练的手部奖励反馈，以约束手部解剖合理性与时序一致性，其输出的粗潜变量与姿态表征经投影融合后进入精修器完成细节恢复与结构纠错。与直接延拓高分辨视频的方法不同，该框架以与外观解耦且抗时序退化的姿态作稳定结构条件，并以首帧无噪声潜变量作视觉锚点，从而减少漂移并改善唇同步。在EMTD基准下，InfinityHuman的FID为60\.71，低于OmniAvatar的FID 82\.54。消融显示去掉精修器会导致面部模糊与时序一致性下降，去掉手部奖励反馈则手部伪影增多，验证了两模块对清晰度与长时一致性的关键作用。该结论适用边界限于单人连续镜头场景，尚未验证多人交互与镜头切换，训练硬件为128块NVIDIA GPU且精修器推理需20步去噪。

🔗 **开源资源**

- 第三方资源：<https://github.com/ultralytics/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 84. [二分容器装不下成对线索：用三子空间为模态对单独留位置](/posts/conference-cvpr-2026-conference-paper-id-meng-tri-subspaces-disentanglement-for-multimodal-sentiment-analysis-cvpr-2026-paper-4620f54b47/)

> 英文题目：*[Tri\-Subspaces Disentanglement for Multimodal Sentiment Analysis](/posts/conference-cvpr-2026-conference-paper-id-meng-tri-subspaces-disentanglement-for-multimodal-sentiment-analysis-cvpr-2026-paper-4620f54b47/)*

标签：#注意力机制 #多模态学习 #音视频 #语音 #语音情感识别

评分：**6.3/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Meng_Tri-Subspaces_Disentanglement_for_Multimodal_Sentiment_Analysis_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Meng_Tri-Subspaces_Disentanglement_for_Multimodal_Sentiment_Analysis_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Chunlei Meng：机构信息未能从会议 PDF 纯文本可靠映射
- Jiabin Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenglin Yan：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenyu Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Rong Fu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhongxue Gan：机构信息未能从会议 PDF 纯文本可靠映射
- Chun Ouyang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态情感分析以语言、视觉与声学三路话语为输入，预测连续情感分值或意图类别，难点在于模态分布异构、时序未对齐以及仅被模态对共享的协同线索易被忽略。该方法先将三模态分别编码并经模态特定投影映射到统一特征空间，为后续解耦提供可比表示。接着以公共编码器、成对子模态共享编码器与私有编码器分别抽取全局一致、两两协同与模态特有表征，并由解耦监督器与结构正则约束其纯净正交，所得三类表示直接进入融合模块。然后子空间感知交叉注意力为各子空间构建互补上下文并做交叉增强与通道重加权，最后经门控加权融合送入回归或分类头得到预测。相比仅划分公共与私有的MISA类框架，显式保留成对共享避免了将其误压入公共或私有通道，对讽刺等冲突样本更具表达力。在CMU\-MOSEI非对齐设置下，TSD的MAE为0\.525，低于EMOE的MAE 0\.530。该结论适用边界受限于英语评论视频与意图识别语料，尚未验证对多语言、强噪声与缺失模态的泛化。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 85. [零前视下全身协调：LiveGesture 用分区域专家加因果融合做流式手势](/posts/conference-cvpr-2026-conference-paper-id-saleem-livegesture-streamable-co-speech-gesture-generation-model-cvpr-2026-paper-6319fb6906/)

> 英文题目：*[LiveGesture: Streamable Co\-Speech Gesture Generation Model](/posts/conference-cvpr-2026-conference-paper-id-saleem-livegesture-streamable-co-speech-gesture-generation-model-cvpr-2026-paper-6319fb6906/)*

标签：#自回归模型 #向量量化 #流式处理 #语音 #语音交互

评分：**6.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音交互 | 主方法：#自回归模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Saleem_LiveGesture_Streamable_Co-Speech_Gesture_Generation_Model_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Saleem_LiveGesture_Streamable_Co-Speech_Gesture_Generation_Model_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Muhammad Usama Saleem：机构信息未能从会议 PDF 纯文本可靠映射
- Mayur Jagdishbhai Patel：机构信息未能从会议 PDF 纯文本可靠映射
- Ekkasit Pinyoanuntapong：机构信息未能从会议 PDF 纯文本可靠映射
- Zhongxing Qin：机构信息未能从会议 PDF 纯文本可靠映射
- Li Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Hongfei Xue：机构信息未能从会议 PDF 纯文本可靠映射
- Ahmed Helmy：机构信息未能从会议 PDF 纯文本可靠映射
- Chen Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Pu Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

面向实时交互的流式共语手势生成在时刻仅接收近期动作历史、当前音频令牌与可选在线文本，需因果预测下一全身姿态，难点在于零前视下保持节拍对齐、时序平滑与多身体区域协调。可流式向量量化分词器先将各区域连续动作经双向编码器压缩再经因果流式解码器重构，并冻结编解码学习离散因果令牌，为流式推理提供紧凑表示。区域专家自回归变换器在共享因果音频编码器提供的节拍条件下分别建模上身、下身、手部与面部区域精细动力学，其输出隐状态进入下一步融合。因果空时融合模块对冻结专家隐状态做因果时空注意力以对齐并融合跨区域相关性，结合不确定性引导掩码与随机区域掩码训练以适应推理期受损历史并输出下一令牌。与离线扩散或整体自回归不同，该框架坚持双向编码与因果解码分离的两阶段分词加冻结专家融合，避免跨区域纠缠与未来信息泄露，因而支持任意长度低延迟增量更新。在BEAT2语料基准下，LiveGesture的指标Fréchet Gesture Distance为4\.57，高于GestureLSM的指标Fréchet Gesture Distance 4\.25。该结论适用边界目前受限于BEAT2英语会话语料与SMPL\-X参数体系，跨语言、强噪声与长时漂移下的外推尚未验证。原文披露推理开销为每200ms音频块延迟低于50ms且首令牌延迟为250ms，可支撑实时人机交互。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 86. [把口型习惯和情绪拆开控制：PC\-Talk 用隐式关键点变形做可控说话人脸](/posts/conference-cvpr-2026-conference-paper-id-wang-pc-talk-precise-facial-animation-control-for-audio-driven-talking-face-generation-cvpr-2026-paper-d099177966/)

> 英文题目：*[PC\-Talk: Precise Facial Animation Control for Audio\-Driven Talking Face Generation](/posts/conference-cvpr-2026-conference-paper-id-wang-pc-talk-precise-facial-animation-control-for-audio-driven-talking-face-generation-cvpr-2026-paper-d099177966/)*

标签：#自回归模型 #音视频 #语音 #音视频生成

评分：**6.3/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#自回归模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Wang_PC-Talk_Precise_Facial_Animation_Control_for_Audio-Driven_Talking_Face_Generation_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_PC-Talk_Precise_Facial_Animation_Control_for_Audio-Driven_Talking_Face_Generation_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Baiqin Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangyu Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Fan Shen：机构信息未能从会议 PDF 纯文本可靠映射
- Hao Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhen Lei：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频驱动说话人脸需由语音生成口型同步且身份一致的视频，难点在于说话风格单一、唇动幅度不可调与情感标签粗糙难以表达强度和复合表情。该方法以隐式关键点增量为中间表示，先由唇音对齐控制模块结合音频与风格码预测唇同步形变，再由情感控制模块以同音频下情感与中性组合预测相减分离纯情感形变，然后将两路形变相加驱动warping与解码器成像。唇音分支将参考视频表情形变或独热预设码映射到统一风格空间，以风格条件自回归Transformer预测表情，并支持唇动幅度缩放与特定音素投影编辑。情感分支按面部区域独立生成情感表达后融合，实现强度调节与跨区域复合表情。与仅预测下半脸或标签级情感的方法不同，该框架把风格、幅度、强度与区域复合统一为关键点形变的可加可缩放操作。在HDTF图像输入评测设置下，PC\-Talk的LSE\-C指标为9\.37，高于Sonic的LSE\-C指标为8\.64。该结论适用边界受限于HDTF与MEAD受控评测与短clip推理，跨语言、大姿态与强噪声音频下的外推尚未验证，原文披露训练成本为单块RTX4090硬件上LAC两天与EMC一天且推理吞吐达每秒30帧。

🔗 **开源资源**

- 演示资源：<https://bq-wang0511.github.io/PC-Talk/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/mseitzer/pytorch-fid> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 87. [从人脸二分类到十一场景四层追问：AVFakeBench 如何考住音视频大模型](/posts/conference-cvpr-2026-conference-paper-id-xia-avfakebench-a-comprehensive-audio-video-forgery-detection-benchmark-for-av-lmms-cvpr-2026-paper-3173aeb89d/)

> 英文题目：*[AVFakeBench: A Comprehensive Audio\-Video Forgery Detection Benchmark for AV\-LMMs](/posts/conference-cvpr-2026-conference-paper-id-xia-avfakebench-a-comprehensive-audio-video-forgery-detection-benchmark-for-av-lmms-cvpr-2026-paper-3173aeb89d/)*

标签：#基准测试 #基准设计 #多模态模型 #音视频 #音频伪造检测

评分：**6.3/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频伪造检测 | 主方法：#基准设计

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Xia_AVFakeBench_A_Comprehensive_Audio-Video_Forgery_Detection_Benchmark_for_AV-LMMs_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Xia_AVFakeBench_A_Comprehensive_Audio-Video_Forgery_Detection_Benchmark_for_AV-LMMs_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Shuhan Xia：机构信息未能从会议 PDF 纯文本可靠映射
- Peipei Li：机构信息未能从会议 PDF 纯文本可靠映射
- Xuannan Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Dongsen Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xinyu Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Zekun Li：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

AVFakeBench以含声视频片段为输入，输出真伪二判、七类组合分类、细节选择与开放解释，难点在于主体从人脸扩展到自然风光、动物等通用场景，且真实、编辑、合成在音频与视频上交叉耦合易致语义时序错位。其构建先由专有模型做伪造意图规划，输出动态描述或编辑规范以确定场景与篡改组合。接着专家生成与编辑模型执行视频合成或局部词级增删改，并用视频到音频模型补齐声音，保持跨模态一致。最后重组真实与伪造流形成七类组合，再由多模态标注器基于帧、运动热图与频谱图生成细节与解释标注并经人工校验，形成三千片段与万级问答。与仅做人脸二分类的前代基准相比，关键差异在规划与执行解耦并引入四级问答，使评测从检测准确率延伸到细粒度感知与推理，实际意义是暴露通用场景与音频模态短板。在AVFakeBench多选伪造分类任务下，Gemini\-2\.5\-Pro的F1为19\.2%，高于GPT\-4o的F1 12\.2%。该结论适用边界受限于所覆盖场景与特定生成器分布，对未见生成器与强对抗样本尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://chatglm.cn/> — 链接可访问（HTTP 200）
- 第三方资源：<https://app.klingai.com/cn> → <https://klingai.com/app> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.midjourney.com/> — 链接不可用（HTTP 403）
- 第三方资源：<https://chatgpt.com/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 88. [从标注到干扰项：HumanVBench 用人为可核查的流水线逼问视频模型的看人能力](/posts/conference-cvpr-2026-conference-paper-id-zhou-humanvbench-probing-human-centric-video-understanding-in-mllms-with-automatically-synthesized-cvpr-2026-paper-993d14b101/)

> 英文题目：*[HumanVBench: Probing Human\-Centric Video Understanding in MLLMs with Automatically Synthesized Benchmarks](/posts/conference-cvpr-2026-conference-paper-id-zhou-humanvbench-probing-human-centric-video-understanding-in-mllms-with-automatically-synthesized-cvpr-2026-paper-993d14b101/)*

标签：#基准测试 #基准设计 #模型评估 #音视频 #音视频问答

评分：**6.3/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频问答 | 主方法：#基准设计

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhou_HumanVBench_Probing_Human-Centric_Video_Understanding_in_MLLMs_with_Automatically_Synthesized_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhou_HumanVBench_Probing_Human-Centric_Video_Understanding_in_MLLMs_with_Automatically_Synthesized_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Ting Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Daoyuan Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Qirui Jiao：机构信息未能从会议 PDF 纯文本可靠映射
- Bolin Ding：机构信息未能从会议 PDF 纯文本可靠映射
- Yaliang Li：机构信息未能从会议 PDF 纯文本可靠映射
- Ying Shen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

以人为中心视频理解要求模型同时解析内在情绪与外在表征，并实现语音与唇动视觉的精确对齐，输出多选题答案，难点在于表情细微、时序变化快且多说话人配音干扰大。作者先用以人为中心视频标注流水线从Pexels版权免费视频与公有领域电影素材切分场景，经时长、运动幅度与人脸占比过滤得到以人为中心片段，再提取人体轨迹、人口属性、外观行为、面部表情、事件氛围及语音转写、语音情绪等密集多模态标签；再由干扰项内含问答合成流水线对计数、时刻与匹配类任务按规则出题，对6类描述性任务用红框或人脸裁剪构造标记视频并调用视频大模型生成描述，经大语言模型抽取属性并均衡分布后生成题干，再用Gemini、VideoLLaMA3、ShareGPT4Video等集成投票排序候选答案，首位为正确答案，其余语义相异者直接保留为干扰项，语义重复者做任务特定扰动，最后经答案泄露过滤、乱序与人工校验形成基准。与依赖全人工出题或复用旧标注的已有基准相比，该机制把模型典型误判转化为高迷惑性选项。在包含2475道题目的16任务评测中，Gemini\-2\.5\-Pro总平均准确率为73\.4%，仍低于人类基线88\.6%，差距集中在情绪感知与声画对齐。该结论仅适用于短片段N选1多选感知层评测，未验证长时叙事推理与开放生成能力。原文未披露训练与部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 89. [先估计各模态可不可信，再决定听谁的：CICA 的感知与决策耦合](/posts/conference-cvpr-2026-conference-paper-id-jiang-cica-coupling-confidence-aware-pretraining-with-confidence-informed-attention-for-robust-multimodal-cvpr-2026-paper-bc64b391d7/)

> 英文题目：*[CICA: Coupling Confidence\-Aware Pretraining with Confidence\-Informed Attention for Robust Multimodal Sentiment Analysis](/posts/conference-cvpr-2026-conference-paper-id-jiang-cica-coupling-confidence-aware-pretraining-with-confidence-informed-attention-for-robust-multimodal-cvpr-2026-paper-bc64b391d7/)*

标签：#注意力机制 #多模态学习 #鲁棒性 #音视频 #语音情感识别

评分：**6.2/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Jiang_CICA_Coupling_Confidence-Aware_Pretraining_with_Confidence-Informed_Attention_for_Robust_Multimodal_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Jiang_CICA_Coupling_Confidence-Aware_Pretraining_with_Confidence-Informed_Attention_for_Robust_Multimodal_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Haoyu Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoliang Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Duoqian Miao：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaolin Qin：机构信息未能从会议 PDF 纯文本可靠映射
- Xianyong Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yajun Du：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态情感分析需从文本、视觉与声学信号预测情感强度，但真实数据存在噪声、缺失与模态冲突，均匀融合易被误导性线索带偏。该工作提出CICA框架，即耦合置信度感知预训练与置信度引导注意力，先以置信度感知预训练感知各模态可靠性，再以置信度引导融合决定融合权重，前者输出表征与置信度及不确定性，后者据此抑制不可靠流。与均匀注意力或单置信度分区缩放相比，该机制要求高置信且低误差才放大贡献，并以内在结构调制补足键质量建模。在MOSI上达到平均绝对误差0\.630与相关系数0\.855，相对最强基线3WD\-DRT分别降低0\.071与提升0\.060；在MOSEI上为0\.489与0\.856，分别降低0\.029与提升0\.077；在CH\-SIMS上相关系数提升0\.127，在CH\-SIMSv2上三分类准确率提升4\.35。缺失文本时仍大幅退化，MOSI上文本单模态相关系数0\.857甚至略高于多模态全量0\.855，表明文本主导边界未被打破。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 90. [对不齐就推理错：FAVE 用三层时间任务检验音视频大模型的同步短板](/posts/conference-cvpr-2026-conference-paper-id-lu-fave-a-structured-benchmark-for-fine-grained-audio-visual-temporal-evaluation-in-cvpr-2026-paper-aaf56ab978/)

> 英文题目：*[FAVE: A Structured Benchmark for Fine\-Grained Audio\-Visual Temporal Evaluation in Multimodal LLMs](/posts/conference-cvpr-2026-conference-paper-id-lu-fave-a-structured-benchmark-for-fine-grained-audio-visual-temporal-evaluation-in-cvpr-2026-paper-aaf56ab978/)*

标签：#基准测试 #基准设计 #音视频 #音视频理解

评分：**6.2/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频理解 | 主方法：#基准设计

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Lu_FAVE_A_Structured_Benchmark_for_Fine-Grained_Audio-Visual_Temporal_Evaluation_in_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Lu_FAVE_A_Structured_Benchmark_for_Fine-Grained_Audio-Visual_Temporal_Evaluation_in_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Weiheng Lu：机构信息未能从会议 PDF 纯文本可靠映射
- An Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Jian Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenfei Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Felix X\.\-F\. Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Ming\-Ching Chang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

FAVE针对音视频大语言模型在长视频中联合语音与画面做细粒度时间对齐、排序与定位的任务，输入为平均约150s网络视频的视觉流与语音及环境声，输出为跨模态对齐答案、事件时序判断与指定时段描述，难点在于同一时间窗内视听互证与多尺度时间关系易被单模态捷径掩盖。流水线先用镜头边界检测切分有意义片段并抽取关键帧，再并行做视觉动态细节描述与Whisper语音识别加3D\-Speaker多说话人聚类，环境声辅以人工描述，前步的切分边界与视听字幕一并进入下一步。接着GPT负责事件识别、视听字幕均衡校验与问答合成以抑制纯语言猜测，最后经人工两轮校验形成FAVE\-Align、FAVE\-low与FAVE\-high三级任务。相对VALOR直接拼接模态与UnAV\-100、AVEL粗粒度标注的做法，该设计强调时间 grounded的视听强相关标注、模态均衡贡献校验与文本先验过滤，因而更能检验联合时间推理而非单模态聚合。在FAVE基准下，Gemini 1\.5 Flash在FAVE\-low任务上的平均准确率为75\.34%，低于人工基线的平均准确率88\.98%。该结论适用边界受限于以语音为主的QVHighlights源视频与多为20s内的细粒度事件，对强音乐、重叠声与长程因果的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 91. [缺模态下先补语义再算不确定性：超图引导扩散与双通道证据融合](/posts/conference-cvpr-2026-conference-paper-id-qiu-beyond-missing-modalities-hypergraph-conditioned-diffusion-for-uncertainty-aware-multimodal-emotion-cvpr-2026-paper-f640631042/)

> 英文题目：*[Beyond Missing Modalities: Hypergraph Conditioned Diffusion for Uncertainty\-Aware Multimodal Emotion Recognition](/posts/conference-cvpr-2026-conference-paper-id-qiu-beyond-missing-modalities-hypergraph-conditioned-diffusion-for-uncertainty-aware-multimodal-emotion-cvpr-2026-paper-f640631042/)*

标签：#扩散模型 #图神经网络 #多模态学习 #语音情感识别

评分：**6.2/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#扩散模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Qiu_Beyond_Missing_Modalities_Hypergraph_Conditioned_Diffusion_for_Uncertainty-Aware_Multimodal_Emotion_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Xihang Qiu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhao Fang：机构信息未能从会议 PDF 纯文本可靠映射
- Qing Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Bin Zhai：机构信息未能从会议 PDF 纯文本可靠映射
- Jialong Hong：机构信息未能从会议 PDF 纯文本可靠映射
- Wanpeng Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yao Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Ye Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Chun Li：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

对话多模态情感识别（Multimodal Emotion Recognition in Conversations，MERC）需从每轮话语的音频、文本与视觉信号推断情感标签，现实中传感器失效与传输错误导致随机模态缺失，恢复特征与可用特征的语义错位及模态冲突使精度骤降。该工作提出Hypergraph Diffusion and Evidence Fusion based Emotion Recognition（HyperEF）框架，先以掩码超图注意力（Masked Hypergraph Attention，MHGAT）从不完整对话抽取高阶上下文与多模态关系，再以该表征为条件引导扩散模型在隐空间补全缺失模态，最后由双通道证据融合（Dual Channel Evidence Fusion，DCEF）按源层与判别层不确定性做证据级自适应融合输出。与融合空间补全和等权融合相比，差异在于显式建模高阶可变贡献关系并将恢复可信度纳入主观逻辑融合。在IEMOCAP四分类缺失率0\.1设置下准确率达82\.1%，超出次优基线3\.5个百分点，且在3个数据集划分8档缺失率下均保持领先。结论限于两说话人与多人英文影视对话、每样本至少保留1个模态的随机缺失协议，未验证完全缺失、非随机缺失与跨语种外推。训练分100轮扩散预训练加50轮主干训练，在单张NVIDIA L40S上完成，MHGAT双层每轮约0\.82秒，原文未披露端到端推理时延与采样步数折中曲线。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 92. [不重建人体动作：把音频当风格信号直接驱动人形机器人跳舞与演讲](/posts/conference-cvpr-2026-conference-paper-id-li-do-you-have-freestyle-expressive-humanoid-locomotion-via-audio-control-cvpr-2026-paper-15e85d4a09/)

> 英文题目：*[Do You Have Freestyle? Expressive Humanoid Locomotion via Audio Control](/posts/conference-cvpr-2026-conference-paper-id-li-do-you-have-freestyle-expressive-humanoid-locomotion-via-audio-control-cvpr-2026-paper-15e85d4a09/)*

标签：#扩散模型 #混合专家模型 #音乐 #语音 #音频交互

评分：**6.1/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频交互 | 主方法：#混合专家模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Li_Do_You_Have_Freestyle_Expressive_Humanoid_Locomotion_via_Audio_Control_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Li_Do_You_Have_Freestyle_Expressive_Humanoid_Locomotion_via_Audio_Control_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Zhe Li：机构信息未能从会议 PDF 纯文本可靠映射
- Cheng Chi：机构信息未能从会议 PDF 纯文本可靠映射
- Yangyang Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Boan Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Tao Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenguo Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Yibo Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Pengwei Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhongyuan Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Fangzhou Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Chang Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Shanghang Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为音乐或语音音频，输出为Unitree G1人形机器人可执行的全身关节动作，难点在于绕开解码、重定向、跟踪三级级联误差与延迟，直接建立声学节奏到物理可行动作的映射。RoboPerform先训练音频运动对齐适配器将音频潜变量拉近对应运动潜变量，为后续控制注入运动学先验。接着以残差混合专家∆MoE作为教师策略学习多 regime跟踪能力，其输出动作经DAgger蒸馏进入扩散学生策略。学生策略固定文本到运动模型编码的内容潜变量作为语义锚点，并在多层去噪中注入对齐后音频潜变量作为风格调制，推理采用2步DDIM采样保证实时。与先用EMAGE或FineNet生成再重定向跟踪的显式管线相比，该隐式设计省去运动重建环节，实现音频到动作的直接映射并降低端到端延迟。在BEAT2任务下，Ours的Succ指标为0\.99，高于Baseline的Succ指标0\.98。其适用边界受限于切分为10秒30FPS的舞蹈与演讲片段及IsaacGym到MuJoCo双仿真加有限真机验证，开放音乐噪声语音与长时稳定性尚未验证，而两步扩散采样的实时推理将延迟控制在可部署水平。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 93. [多人同时说话时，目标人该接话还是倾听：PolySLGen 的在线多模态反应生成](/posts/conference-cvpr-2026-conference-paper-id-lin-polyslgen-online-multimodal-speaking-listening-reaction-generation-in-polyadic-interaction-cvpr-2026-paper-81f4becc61/)

> 英文题目：*[PolySLGen: Online Multimodal Speaking\-Listening Reaction Generation in Polyadic Interaction](/posts/conference-cvpr-2026-conference-paper-id-lin-polyslgen-online-multimodal-speaking-listening-reaction-generation-in-polyadic-interaction-cvpr-2026-paper-81f4becc61/)*

标签：#多模态学习 #语音对话系统 #语音合成 #轮次切换

评分：**6.1/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音对话系统 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Lin_PolySLGen_Online_Multimodal_Speaking-Listening_Reaction_Generation_in_Polyadic_Interaction_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Lin_PolySLGen_Online_Multimodal_Speaking-Listening_Reaction_Generation_in_Polyadic_Interaction_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Zhi\-Yi Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Thomas Markhorst：机构信息未能从会议 PDF 纯文本可靠映射
- Jouh Yeong Chew：机构信息未能从会议 PDF 纯文本可靠映射
- Xucong Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多人在线反应需以全部参与者历史语音与身体动作为输入，为目标人物联合生成未来说话文本语音与身体动作及说话状态分，难点在于多人依赖建模、语音动作协同与轮次切换时机判断。PolySLGen先将历史语音经说话人分割与语音识别转写为文本并经StyleTTS 2提取风格特征，同时将多人物体姿态经姿态融合压缩为紧凑嵌入并由头朝向计算社交线索嵌入。上述文本、风格、运动与社交嵌入一并送入LoRA微调的Llama3\-8B\-Instruct进行统一推理，其输出再经模态解码器分别还原为文本、语音风格、身体动作与说话状态分。与先前双人或仅说话方法不同，该设计显式联合非说话者动作与注视朝向并以软分数管理轮次，具有实际多人群聊连贯性意义。在DnD Group Gesture测试集下，PolySLGen的说话状态指标AP为0\.67，高于Random基线的说话状态指标AP 0\.50。该结论适用边界受限于五人桌面角色扮演场景与地下城主目标角色，尚未验证开放域会议或日常群聊。其推理开销在A100硬件上约5 FPS且约82%延迟来自语言模型，尚未完全实时。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 94. [自监督表示真能看穿音画伪造吗：冻结特征加线性头能走多远](/posts/conference-cvpr-2026-conference-paper-id-boldisor-investigating-self-supervised-representations-for-audio-visual-deepfake-detection-cvpr-2026-paper-9883729787/)

> 英文题目：*[Investigating Self\-Supervised Representations for Audio\-Visual Deepfake Detection](/posts/conference-cvpr-2026-conference-paper-id-boldisor-investigating-self-supervised-representations-for-audio-visual-deepfake-detection-cvpr-2026-paper-9883729787/)*

标签：#自监督学习 #模型评估 #可解释性 #音视频 #音频深度伪造检测

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频深度伪造检测 | 主方法：#自监督学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Boldisor_Investigating_Self-Supervised_Representations_for_Audio-Visual_Deepfake_Detection_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Boldisor_Investigating_Self-Supervised_Representations_for_Audio-Visual_Deepfake_Detection_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Dragos\-Alexandru Boldisor：机构信息未能从会议 PDF 纯文本可靠映射
- Stefan Smeu：机构信息未能从会议 PDF 纯文本可靠映射
- Dan Oneata：机构信息未能从会议 PDF 纯文本可靠映射
- Elisabeta Oneata：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务将说话人音视频映射为真伪二分类标签，难点在于局部篡改信号细微且跨数据集生成方式多变，前导静音等分布偏移还会被分类器利用形成虚假关联。方法链第一步用冻结的音频、视觉及多模态自监督编码器抽取帧级嵌入，保留原始表示的信息量以供直接评估。第二步在其上训练带对数求和指数池化的线性探针，将帧级证据聚合为视频级伪造分数，使单个伪造片段即可触发判真为假。第三步以仅真数据训练的异常检测检验表示是否依赖伪影，并用时间与空间解释对齐局部篡改标注，再以预测相关性与晚融合验证跨模态互补性。相对把特征埋入复杂监督架构而难以归因的做法，该线性评估直接度量表示本身的取证信息量及其泛化能力。在AV1M数据集训练并在FakeAVCeleb评测的设置下，BRAVEn视觉分支的AUC为98\.8%，高于AVFF的AUC89\.2%。其适用边界是野外数据的泛化仍显著受限，音频表示在缺少音频篡改的数据上亦不适用。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 复现相关资源：<https://bit-ml.github.io/ssr-dfd> → <https://bit-ml.github.io/ssr-dfd/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/JoeLeelyf/OpenAVFF> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 95. [不从零学跳舞：用保先验适配让视频扩散模型听音乐起舞](/posts/conference-cvpr-2026-conference-paper-id-hong-musicinfuser-making-video-diffusion-listen-and-dance-cvpr-2026-paper-18ee6a6699/)

> 英文题目：*[MusicInfuser: Making Video Diffusion Listen and Dance](/posts/conference-cvpr-2026-conference-paper-id-hong-musicinfuser-making-video-diffusion-listen-and-dance-cvpr-2026-paper-18ee6a6699/)*

标签：#扩散模型 #音视频 #音乐 #音视频生成

评分：**6.0/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Hong_MusicInfuser_Making_Video_Diffusion_Listen_and_Dance_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Hong_MusicInfuser_Making_Video_Diffusion_Listen_and_Dance_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Susung Hong：机构信息未能从会议 PDF 纯文本可靠映射
- Ira Kemelmacher\-Shlizerman：机构信息未能从会议 PDF 纯文本可靠映射
- Brian Curless：机构信息未能从会议 PDF 纯文本可靠映射
- Steven M\. Seitz：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务以音乐音频与文本提示为输入生成与节拍风格同步的舞蹈视频，输出为高质量人物舞蹈画面，难点在于舞蹈视频数据稀缺且直接微调易破坏预训练视频先验的泛化与去噪能力。方法链第一步以层跳过引导的适应性准则离线评估每层正向影响，筛选出适合调制运动与结构的可适应层以保留先验并降低训练代价。第二步在所选层插入零初始化交叉注意力适配器，将Wav2Vec 2\.0音乐特征投影为音频token与视频token做交叉注意力，其零输出先作恒等映射再渐进融入音频特征。第三步以低秩适配器适配时空运动分布，并以Beta\-Uniform调度与荒野数据混合先聚焦低噪声细节再扩展至全分布，实现从细节到整体结构的渐进对齐，提示多样化模板则降低对文本的依赖。与从头训练音视频联合模型或经骨骼中间表示再渲染的路线不同，该机制全程复用文本到视频扩散模型的运动与物理先验，仅学习音乐到动作映射，无需动作捕捉数据。在AIST基准对比评测下，MusicInfuser的平均得分为8\.96，高于Mochi的平均得分8\.86。其适用边界受限于短片段训练与9秒外推，变速音乐及未见K\-pop与动物主体仅定性展示，尚未验证长时客观同步量化的稳定性。训练成本为单张NVIDIA A100上约一天内完成微调，推理开销的延迟与吞吐原文未披露具体数值。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 96. [看不见输入时如何算出物理参数：EMMA 的多模态反演](/posts/conference-cvpr-2026-conference-paper-id-shaikh-emma-extracting-multiple-physical-parameters-from-multimodal-data-cvpr-2026-paper-59054ce807/)

> 英文题目：*[EMMA: Extracting Multiple physical parameters from Multimodal Data](/posts/conference-cvpr-2026-conference-paper-id-shaikh-emma-extracting-multiple-physical-parameters-from-multimodal-data-cvpr-2026-paper-59054ce807/)*

标签：#多模态学习 #状态空间模型 #音视频 #音频理解

评分：**6.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频理解 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Shaikh_EMMA_Extracting_Multiple_physical_parameters_from_Multimodal_Data_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Shaikh_EMMA_Extracting_Multiple_physical_parameters_from_Multimodal_Data_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Farhat Shaikh：机构信息未能从会议 PDF 纯文本可靠映射
- Ayan Banerjee：机构信息未能从会议 PDF 纯文本可靠映射
- Sandeep Gupta：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是从原始视频、音频与图表图像中直接恢复控制连续时间受迫动力学的全部可辨识物理参数与标定不变量，难点在于视频遮挡隐状态与轮速等外部激励不可测、摩擦等隐式动力学无直接观测，且相机位姿与坐标原点等初始条件未知。先由统一多模态特征提取将检测轨迹、音频声学特征与图表曲线插值到同一视频时间网格并拼接为状态向量，为时序建模提供对齐输入。再由液体时间常数网络接收对齐后的状态向量，以输入依赖时间常数学习隐动力学并输出隐轨迹与隐激励表征，承接非线性与不规则采样建模。最后由稠密读出头将隐轨迹回归为显式物理参数与坐标原点等不变量，并将参数注入已知常微分方程经可微仿真计算轨迹误差反传，实现联合标定与训练。与仅视频单参数方法不同，该机制将激励估计、隐动力学容量与坐标标定放在同一可微闭环内联合优化，具有处理受迫与隐动态的实际意义。在Delfys基准单摆150cm任务下，EMMA的长度估计指标为1\.50，高于Delfys的长度估计指标1\.30。该结论适用边界受限于已知常微分方程形式与至少一个时变模态，在严重抖动与未知方程结构下尚未验证；在NVIDIA RTX Ada 6000硬件上EMMA单轮训练时间为0\.37，计算量约为基线的1\.4倍但参数量仅53\.2K。

🔗 **开源资源**

- 第三方资源：<https://zulko.github.io/moviepy/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 97. [把可学习的查询换成有情感含义的原型：冻结大模型做多模态情感分析](/posts/conference-cvpr-2026-conference-paper-id-zhao-prototype-as-prompt-multimodal-sentiment-prototypes-endowing-large-language-models-the-capability-cvpr-2026-paper-c1d5560f5b/)

> 英文题目：*[Prototype\-as\-Prompt: Multimodal Sentiment Prototypes Endowing Large Language Models the Capability to Perform Multimodal Sentiment Analysis](/posts/conference-cvpr-2026-conference-paper-id-zhao-prototype-as-prompt-multimodal-sentiment-prototypes-endowing-large-language-models-the-capability-cvpr-2026-paper-c1d5560f5b/)*

标签：#提示学习 #大语言模型 #音视频 #语音情感识别

评分：**6.0/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.6/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.2/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#提示学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhao_Prototype-as-Prompt_Multimodal_Sentiment_Prototypes_Endowing_Large_Language_Models_the_Capability_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_Prototype-as-Prompt_Multimodal_Sentiment_Prototypes_Endowing_Large_Language_Models_the_Capability_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Xianbing Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Lan Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Hengyang Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Buzhou Tang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态情感分析以文本、视觉与音频序列为输入，输出情感极性或强度分数，难点在于视听序列冗长冗余且与文本存在异构鸿沟，难以直接对齐注入大语言模型。该文提出原型即提示，先为视觉和音频各维护固定数K的可学习情感原型，并与文本特征拼接做自注意力，得到文本条件化原型以压缩话语相关线索。接着以该条件化原型为查询对原始视听特征做交叉注意力重采样，将非文本证据注入对应原型槽位，并与文本特征共同构成软提示送入冻结主干做下一词预测。然后以情感分类交叉熵绑定每个原型槽位到明确情感语义，以K阶中心矩差异对齐视听原型分布，并以距离加权正交维持同模态原型多样性。与投影式和查询即提示式不同，该机制为每个提示位显式绑定情感类别并强制跨模态一致与类内可分，因而更可解释且参数高效。在MOSEI基准下，PaP\(L\)的Acc\-2为87\.17，高于PaP\(Q\)的Acc\-2 86\.00。该结论在MOSEI、SIMS\-V2、MELD与CHERMA语料上验证，其适用边界受限于完整三模态影评与对话场景，尚未验证缺失模态、强噪声与开放域外推。训练与评估的硬件为32GB显存V100 GPU，批量大小为16并经30轮暖机与早停控制，其推理开销随原型数与主干规模增长。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 98. [不微调也能说话：用预训练扩散模型拼出口型、身份与时间一致](/posts/conference-cvpr-2026-conference-paper-id-wu-ip-adapter-is-all-you-need-towards-fine-tuning-free-diffusion-based-talking-face-cvpr-2026-paper-e442690492/)

> 英文题目：*[IP\-Adapter Is All You Need: Towards Fine\-Tuning\-Free Diffusion\-Based Talking Face Generation](/posts/conference-cvpr-2026-conference-paper-id-wu-ip-adapter-is-all-you-need-towards-fine-tuning-free-diffusion-based-talking-face-cvpr-2026-paper-e442690492/)*

标签：#扩散模型 #少样本 #音视频 #音视频生成

评分：**5.9/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Wu_IP-Adapter_Is_All_You_Need_Towards_Fine-Tuning-Free_Diffusion-Based_Talking_Face_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Wu_IP-Adapter_Is_All_You_Need_Towards_Fine-Tuning-Free_Diffusion-Based_Talking_Face_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Hao Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangyang Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Hao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiawei Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yi Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Jinwei Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理少样本说话脸视频生成，输入为身份参考帧与唇形参考序列，输出为保持身份且唇动同步的连续人脸视频，难点在于免微调条件下从预训练扩散知识中挖掘唇语义并抑制身份漂移与时域抖动。冻结的图像修复Stable Diffusion与IP\-Adapter\-FaceID构成去噪骨干，将遮罩帧、身份嵌入与结构嵌入共同注入生成，其隐式唇控能力为后续精化的起点。基于三维人脸形态模型的结构师解耦唇形形状与外观纹理并重组渲染为结构帧，经CLIP图像编码得到结构嵌入后送入控制器。准单调自适应结构控制器依据相邻帧唇距变化趋势外推或回拉嵌入以校正细微开合，精化嵌入再经高斯先验噪声传感器检测光流抖动并做空间自适应平滑后解码为连续帧。与需数十万步视听微调的扩散基线不同，该范式零可训练参数且无需视听训练集，直接复用大规模预训练视觉语义实现可控唇同步。在CREMA评测设置下，LatentSync的CSLD指标为0\.762，高于MuseTalk的CSLD指标0\.668。该结论适用边界受限于512分辨率短片段与唇形参考驱动，尚未验证音频直接驱动与长时大姿态外推能力。训练成本上该方法零可训练参数且无需专用视听训练与微调硬件，推理开销主要为冻结扩散去噪与光流平滑的计算量。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 99. [固定提示接不住声音：SOUPLE 用图像条件化学上下文重建音频视觉对应](/posts/conference-cvpr-2026-conference-paper-id-nguyen-souple-enhancing-audio-visual-localization-and-segmentation-with-learnable-prompt-contexts-cvpr-2026-paper-7d07615170/)

> 英文题目：*[SOUPLE: Enhancing Audio\-Visual Localization and Segmentation with Learnable Prompt Contexts](/posts/conference-cvpr-2026-conference-paper-id-nguyen-souple-enhancing-audio-visual-localization-and-segmentation-with-learnable-prompt-contexts-cvpr-2026-paper-7d07615170/)*

标签：#对比学习 #提示学习 #音视频 #声源定位

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#声源定位 | 主方法：#提示学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Nguyen_SOUPLE_Enhancing_Audio-Visual_Localization_and_Segmentation_with_Learnable_Prompt_Contexts_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Khanh Binh Nguyen：机构信息未能从会议 PDF 纯文本可靠映射
- Chae Jung Park：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频视觉声源定位输入为视频帧与对应音频，输出为发声区域的定位热图或分割掩膜，难点是在无文本监督下音频嵌入与视觉语义难以对齐，且对未见类别泛化弱。SOUPLE以冻结的对比语言图像预训练（Contrastive Language\-Image Pre\-training，CLIP）为基础，先由音频编码器与音频分词器将音频映射为音频嵌入词元，再由元网络从图像特征生成实例条件上下文词元，随后将两类词元拼接送入文本编码器得到音频文本特征，最后由掩膜解码器融合图像特征输出分割掩膜，并经视觉音频文本对齐模块做对比学习。与ACL\-SSL直接使用固定提示词连接音频词元不同，该设计利用因果注意力让音频词元先吸收视觉条件上下文，从而增强语义桥接。在VGG\-SS上相对ACL\-SSL的一致交并比（consensus Intersection over Union，cIoU）从49\.46提升至53\.21，曲线下面积（Area Under Curve，AUC）从46\.32提升至48\.15。该结论在单声源与开集划分上成立，但在多声源AVSBench\-MS3上从41\.08降至38\.96，且未验证复杂交互场景的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 100. [把选片、排序、写稿、配乐装进同一个离散词表：AutoCut 如何做可控的广告剪辑](/posts/conference-cvpr-2026-conference-paper-id-zhou-autocut-end-to-end-advertisement-video-editing-based-on-multimodal-discretization-and-cvpr-2026-paper-fe305eec80/)

> 英文题目：*[AutoCut: End\-to\-end advertisement video editing based on multimodal discretization and controllable generation](/posts/conference-cvpr-2026-conference-paper-id-zhou-autocut-end-to-end-advertisement-video-editing-based-on-multimodal-discretization-and-cvpr-2026-paper-fe305eec80/)*

标签：#多模态学习 #检索增强 #向量量化 #音视频生成 #音乐检索

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.2/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音视频生成 | 主方法：#向量量化

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Zhou_AutoCut_End-to-end_advertisement_video_editing_based_on_multimodal_discretization_and_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Zhou_AutoCut_End-to-end_advertisement_video_editing_based_on_multimodal_discretization_and_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Milton Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Sizhong Qin：机构信息未能从会议 PDF 纯文本可靠映射
- Yongzhi Li：机构信息未能从会议 PDF 纯文本可靠映射
- Quan Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Peng Jiang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

广告短视频编辑需以产品信息与候选视频片段及脚本音乐需求为输入，输出选片排序口播文案与背景音乐合成的成片，难点在于跨模态对齐弱、长时序难控与理解生成割裂。AutoCut先以视觉编码器与音频编码器抽取连续特征并经残差量化离散为统一词表，再冻结Qwen3\-8B主干仅更新新增模态嵌入层做多模态对齐，随后全参数监督微调学习选片排序写稿配乐四类任务，最后经相似检索与渲染输出成片。该链条将上步离散词元序列化为统一输入字符串供下一步下一词元预测使用，使理解决策与生成统一于同一推理空间从而支持全局时序推理。相对分离式理解检索合成管线，其关键差异在于共享离散词表上的细粒度多模态推理与可控编辑，实际意义是提升叙事一致性与跨模态稳定性。在统一评测协议下，emb\+sft条件的CRA指标为0\.10714，高于sft only条件的CRA指标0\.08242。该结论适用边界受限于真实广告数据集与库内检索式复用，跨品类泛化与从零合成像素音频能力尚未验证。单卡RTX 4090上的硬件实测显示其推理开销比闭源大模型管线降低一个数量级。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 101. [双人对话手势为何要先分清谁在说话：DyaDiT 用解耦音频与社会条件生成可控动作](/posts/conference-cvpr-2026-conference-paper-id-peng-dyadit-a-multi-modal-diffusion-transformer-for-socially-favorable-dyadic-gesture-cvpr-2026-paper-3501154385/)

> 英文题目：*[DyaDiT: A Multi\-Modal Diffusion Transformer for Socially Favorable Dyadic Gesture Generation](/posts/conference-cvpr-2026-conference-paper-id-peng-dyadit-a-multi-modal-diffusion-transformer-for-socially-favorable-dyadic-gesture-cvpr-2026-paper-3501154385/)*

标签：#扩散模型 #多模态学习 #Transformer #语音 #音视频交互

评分：**5.3/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.4/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#音视频交互 | 主方法：#扩散模型

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Peng_DyaDiT_A_Multi-Modal_Diffusion_Transformer_for_Socially_Favorable_Dyadic_Gesture_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Peng_DyaDiT_A_Multi-Modal_Diffusion_Transformer_for_Socially_Favorable_Dyadic_Gesture_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Yichen Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Jyun\-Ting Song：机构信息未能从会议 PDF 纯文本可靠映射
- Siyeol Jung：机构信息未能从会议 PDF 纯文本可靠映射
- Ulsan National Institute of Science & Technology blank：机构信息未能从会议 PDF 纯文本可靠映射
- Ruofan Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Haiyang Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Xuangeng Chu：机构信息未能从会议 PDF 纯文本可靠映射
- Ruicong Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Erwin Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Hideki Koike：机构信息未能从会议 PDF 纯文本可靠映射
- Kris Kitani：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

双人对话手势生成以两路高度重叠语音与可选对方动作为输入，输出10秒上半身连续动作，难点在于说话倾听角色快速切换、双路音频串扰以及关系与人格等社会上下文对风格的调制。正交化交叉注意力先以Wav2Vec2编码双路音频并减去可被对方解释的冗余成分，输出解耦后的联合音频表征进入下一步条件融合。去噪扩散变换器再将该音频表征与关系标签、五维人格向量及对方动作联合作为条件，预测潜动作空间中的噪声以建模长时依赖。残差向量量化变分自编码器最后将去噪后的量化嵌入解码为连续6D旋转序列，离散运动词典在需要时提供风格化运动先验。与直接拼接双人音频或普通交叉注意力融合不同，正交投影显式去除串扰，使打断与倾听时刻的声学条件更干净且保留社会条件的表达力。在Seamless Interaction数据集评测下，DyaDiT的FD静态指标为6\.40，低于ConvoFusion的FD静态指标9\.22。该结论适用边界受限于上半身自然闲聊离线生成，尚未验证全身强情绪或实时双智能体交互的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 102. [不追求更像人脸，而是生成对判别更有用的视觉特征：跨模态引导的抑郁识别训练框架](/posts/conference-cvpr-2026-conference-paper-id-yang-cross-modal-guided-visual-synthesis-for-data-efficient-multimodal-depression-recognition-cvpr-2026-paper-8142ce5b58/)

> 英文题目：*[Cross\-Modal Guided Visual Synthesis for Data\-Efficient Multimodal Depression Recognition](/posts/conference-cvpr-2026-conference-paper-id-yang-cross-modal-guided-visual-synthesis-for-data-efficient-multimodal-depression-recognition-cvpr-2026-paper-8142ce5b58/)*

标签：#多模态学习 #变分自编码器 #低资源 #音视频 #病理语音评估

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#病理语音评估 | 主方法：#变分自编码器

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Yang_Cross-Modal_Guided_Visual_Synthesis_for_Data-Efficient_Multimodal_Depression_Recognition_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Shanliang Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoxiao Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理临床访谈中的多模态抑郁识别，输入为同步视频、音频与转录文本，输出为抑郁分数回归值并在DAIC\-WOZ上转为二分类，难点在于临床标注规模小导致视觉编码器训练不足，且三模态采样率与时序粒度异构。方法先做特征编码与对齐，用OpenFace 2\.0、COVAREP和BERT提取特征并按词级时间戳平均池化对齐到统一语言单元序列，为后续建模提供同步输入。接着以基于Transformer的条件变分自编码器由音频文本上下文建模条件分布并合成视觉特征序列，其采样输出直接作为增强视觉流进入下一步。然后层次融合Transformer以共享权重处理真实流与合成增强流并回归分数，联合优化以真实与增强路均方误差加一致性与KL损失回传合成器，使生成目标从逼真转向判别有利。区别于先独立训练生成器再冻结增强的两阶段范式，该任务引导的联合优化让识别误差直接塑造合成分布，实际意义在于用判别性合成缓解小样本下视觉表示不足并降低误报。在DAIC\-WOZ分类任务下，CMG\-VS的F1\-Score为0\.860，高于BiLSTM\+BiGRU的F1\-Score 0\.850。其结论适用边界受限于访谈式英语抑郁语料与特征级合成验证，尚未验证对像素级视频生成、其他疾病或跨语言场景的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 103. [模态吵架时别硬拉齐：冲突加权交叉重构的共享语义对齐](/posts/conference-cvpr-2026-conference-paper-id-wang-conflict-aware-adaptive-cross-reconstruction-for-multimodal-sentiment-analysis-cvpr-2026-paper-07323f91d6/)

> 英文题目：*[Conflict\-Aware Adaptive Cross\-Reconstruction for Multimodal Sentiment Analysis](/posts/conference-cvpr-2026-conference-paper-id-wang-conflict-aware-adaptive-cross-reconstruction-for-multimodal-sentiment-analysis-cvpr-2026-paper-07323f91d6/)*

标签：#多模态学习 #音视频 #语音 #语音情感识别

评分：**5.2/10** | 创新 1.3/2 | 技术严谨 0.8/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#多模态学习

会议来源：[官方记录](https://openaccess.thecvf.com/content/CVPR2026/html/Wang_Conflict-Aware_Adaptive_Cross-Reconstruction_for_Multimodal_Sentiment_Analysis_CVPR_2026_paper.html) · [官方 PDF](https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_Conflict-Aware_Adaptive_Cross-Reconstruction_for_Multimodal_Sentiment_Analysis_CVPR_2026_paper.pdf)

👥 **作者与机构**

- Yan Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Fuyuan Cao：机构信息未能从会议 PDF 纯文本可靠映射
- Xingwang Zhao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态情感分析以语言、视觉、音频三模态序列为输入，预测语句级情感强度，难点在于同一样本内各模态情感极性可能冲突，而传统解纠缠方法以模态内重构加相似性损失强行拉近共享表示会扭曲语义。该方法先用一个共享编码器与三个特有编码器将各模态分解为共享特征与特有特征，并以软正交损失降低两子空间冗余。接着在共享子空间内以余弦距离定义样本级情感冲突分数，并经指数衰减映射为交叉重构损失权重，使高冲突模态在后续重构中自动降权。然后以目标模态特有特征拼接他模态共享特征经解码器做交叉重构以隐式对齐共享语义，重构所得共享特征与经文本引导精炼的视觉音频特有线索再经Transformer融合后预测情感。与显式相似性对齐不同，该设计不强制拉近冲突共享表示，而是通过加权交叉重构抑制干扰模态对重构过程的影响，同时保留模态特有细粒度情感线索。在CMU\-MOSI基准下，CACR的7分类准确率为48\.69，高于DLF的7分类准确率45\.34。其结论适用边界受限于三模态齐全且标注完备的短视频情感语料，尚未验证缺失模态、强噪声与跨语言场景，训练成本涉及在配备80GB显存的NVIDIA A800硬件上基于PyTorch实现与运行。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
