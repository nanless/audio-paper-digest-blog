---
title: "ICML 2026 语音/音频论文详细分析"
date: 2026-07-04
draft: false
tags: [多模态模型, 基准测试, 语音合成, 扩散模型, 音视频理解, 语音识别, 自监督学习, 数据集, 流式处理, 强化学习, 语音增强, 音乐生成, 可解释性, 低资源, 音频理解]
categories: [icml-2026]
description: "共分析 137 篇 ICML 2026 论文"
layout: "posts"
weight: -1
---

# ICML 2026 语音/音频论文详细分析

共分析 137 篇 ICML 2026 论文

---

## 🎯 任务分类

点击任务标签查看该方向所有论文：

- [音视频理解](/audio-paper-digest-blog/tags/音视频理解/)（18篇）
- [音视频生成](/audio-paper-digest-blog/tags/音视频生成/)（10篇）
- [音频分类](/audio-paper-digest-blog/tags/音频分类/)（9篇）
- [音频理解](/audio-paper-digest-blog/tags/音频理解/)（8篇）
- [音乐生成](/audio-paper-digest-blog/tags/音乐生成/)（8篇）
- [语音合成](/audio-paper-digest-blog/tags/语音合成/)（8篇）
- [音视频问答](/audio-paper-digest-blog/tags/音视频问答/)（8篇）
- [语音识别](/audio-paper-digest-blog/tags/语音识别/)（5篇）
- [语音伪造检测](/audio-paper-digest-blog/tags/语音伪造检测/)（4篇）
- [语音交互](/audio-paper-digest-blog/tags/语音交互/)（4篇）
- [语音增强](/audio-paper-digest-blog/tags/语音增强/)（4篇）
- [语音编码](/audio-paper-digest-blog/tags/语音编码/)（4篇）
- [多模态模型](/audio-paper-digest-blog/tags/多模态模型/)（3篇）
- [音频伪造检测](/audio-paper-digest-blog/tags/音频伪造检测/)（3篇）
- [音频分离](/audio-paper-digest-blog/tags/音频分离/)（2篇）
- [空间音频](/audio-paper-digest-blog/tags/空间音频/)（2篇）
- [音频编码](/audio-paper-digest-blog/tags/音频编码/)（2篇）
- [音频修复](/audio-paper-digest-blog/tags/音频修复/)（2篇）
- [语音属性识别](/audio-paper-digest-blog/tags/语音属性识别/)（2篇）
- [音频生成](/audio-paper-digest-blog/tags/音频生成/)（2篇）

---

## ⚡ 会议概览

📥 ICML 2026 接收 6341 篇论文 → 🔍 关键词 + LLM 筛选 137 篇音频/语音/音乐相关 → 🔬 深度分析完成

### 🏷️ 热门方向

| 方向 | 数量 | 分布 |
|------|------|------|
| #音视频理解 | 18篇 | ██████████████████ |
| #音视频生成 | 10篇 | ██████████ |
| #音频分类 | 9篇 | █████████ |
| #音频理解 | 8篇 | ████████ |
| #音乐生成 | 8篇 | ████████ |
| #语音合成 | 8篇 | ████████ |
| #音视频问答 | 8篇 | ████████ |
| #语音识别 | 5篇 | █████ |
| #语音伪造检测 | 4篇 | ████ |
| #语音交互 | 4篇 | ████ |
| #语音增强 | 4篇 | ████ |
| #语音编码 | 4篇 | ████ |
| #多模态模型 | 3篇 | ███ |
| #音频伪造检测 | 3篇 | ███ |
| #音频分离 | 2篇 | ██ |

### 📊 论文评分排行榜（137 篇，按分数降序）

| 排名 | 论文 | 评分 | 分档 | 主任务 |
|------|------|------|------|--------|
| 🥇 | [TimeChat-Captioner: Scripting Multi-Scene Videos with T](/audio-paper-digest-blog/posts/2026-07-04-timechat-captioner-scripting-multi-scene-videos) | 9.4分 | 前10% | #音视频理解 |
| 🥈 | [Joint Enhancement and Classification using Coupled Diff](/audio-paper-digest-blog/posts/2026-07-04-joint-enhancement-and-classification-using) | 9.3分 | 前10% | #语音识别 |
| 🥉 | [Learning Tight Rejection Boundaries without Negatives f](/audio-paper-digest-blog/posts/2026-07-04-learning-tight-rejection-boundaries-without) | 9.3分 | 前10% | #语音伪造检测 |
| 4. | [AVTrack: Audio-Visual Tracking in Human-centric Complex](/audio-paper-digest-blog/posts/2026-07-04-avtrack-audio-visual-tracking-in-human-centric) | 9.3分 | 前10% | #音视频理解 |
| 5. | [A Semantically Consistent Dataset for Data-Efficient Qu](/audio-paper-digest-blog/posts/2026-07-04-a-semantically-consistent-dataset-for-data) | 9.2分 | 前10% | #音频分离 |
| 6. | [SAM Audio: Segment Anything in Audio](/audio-paper-digest-blog/posts/2026-07-04-sam-audio-segment-anything-in-audio) | 9.2分 | 前10% | #音频分离 |
| 7. | [MECAT: A Multi-Experts Constructed Benchmark for Fine-G](/audio-paper-digest-blog/posts/2026-07-04-mecat-a-multi-experts-constructed-benchmark-for) | 9.1分 | 前10% | #音频理解 |
| 8. | [$\tau$-Voice: Benchmarking Full-Duplex Voice Agents on ](/audio-paper-digest-blog/posts/2026-07-04-tau-voice-benchmarking-full-duplex-voice-agents) | 9.1分 | 前10% | #语音交互 |
| 9. | [PhaseCoder: Microphone Geometry-Agnostic Spatial Audio ](/audio-paper-digest-blog/posts/2026-07-04-phasecoder-microphone-geometry-agnostic-spatial) | 8.7分 | 前25% | #空间音频 |
| 10. | [BAT: Better Audio Transformer Guided by Convex Gated Pr](/audio-paper-digest-blog/posts/2026-07-04-bat-better-audio-transformer-guided-by-convex) | 8.6分 | 前25% | #音频分类 |
| 11. | [SPEAR: A Unified SSL Framework for Learning Speech and ](/audio-paper-digest-blog/posts/2026-07-04-spear-a-unified-ssl-framework-for-learning-speech) | 8.4分 | 前25% | #音频理解 |
| 12. | [Dual-View Predictive Diffusion: Lightweight Speech Enha](/audio-paper-digest-blog/posts/2026-07-04-dual-view-predictive-diffusion-lightweight-speech) | 8.4分 | 前25% | #语音增强 |
| 13. | [Unlocking Cross-Modal Biosignal Synthesis: A Temporally](/audio-paper-digest-blog/posts/2026-07-04-unlocking-cross-modal-biosignal-synthesis-a) | 8.3分 | 前25% | - |
| 14. | [CoLA: Cross-Modal Low-rank Adaptation for Multimodal Do](/audio-paper-digest-blog/posts/2026-07-04-cola-cross-modal-low-rank-adaptation-for) | 8.3分 | 前25% | #音视频理解 |
| 15. | [Speech-Audio Compositional Attacks on Multimodal LLMs a](/audio-paper-digest-blog/posts/2026-07-04-speech-audio-compositional-attacks-on-multimodal) | 8.3分 | 前25% | #音频理解 |
| 16. | [MoST: Mixing Speech and Text with Modality-Aware Mixtur](/audio-paper-digest-blog/posts/2026-07-04-most-mixing-speech-and-text-with-modality-aware) | 8.2分 | 前25% | - |
| 17. | [IVQ: Structured and Lightweight Vector Quantization via](/audio-paper-digest-blog/posts/2026-07-04-ivq-structured-and-lightweight-vector) | 8.2分 | 前25% | #音频编码 |
| 18. | [Spherical Procrustes Alignment for Reliable Medical Aud](/audio-paper-digest-blog/posts/2026-07-04-spherical-procrustes-alignment-for-reliable) | 8.2分 | 前25% | #音频分类 |
| 19. | [Attend to Anything: Foundation Model for Unified Human ](/audio-paper-digest-blog/posts/2026-07-04-attend-to-anything-foundation-model-for-unified) | 8.2分 | 前25% | #音视频理解 |
| 20. | [VocSim A Training-free Benchmark for Zero-shot Content ](/audio-paper-digest-blog/posts/2026-07-04-vocsim-a-training-free-benchmark-for-zero-shot) | 8.2分 | 前25% | #音频检索 |
| 21. | [JAEGER: Joint 3D Audio-Visual Grounding and Reasoning i](/audio-paper-digest-blog/posts/2026-07-04-jaeger-joint-3d-audio-visual-grounding-and) | 8.1分 | 前25% | #声源定位 |
| 22. | [LALM-as-a-Judge: Benchmarking Large Audio-Language Mode](/audio-paper-digest-blog/posts/2026-07-04-lalm-as-a-judge-benchmarking-large-audio-language) | 8.1分 | 前25% | #语音交互 |
| 23. | [Pianist Transformer: Towards Expressive Piano Performan](/audio-paper-digest-blog/posts/2026-07-04-pianist-transformer-towards-expressive-piano) | 8.1分 | 前25% | #音乐生成 |
| 24. | [Simultaneous Speech-to-Speech Translation Without Align](/audio-paper-digest-blog/posts/2026-07-04-simultaneous-speech-to-speech-translation-without) | 8.0分 | 前25% | #语音翻译 |
| 25. | [PHALAR: Phasors for Learned Musical Audio Representatio](/audio-paper-digest-blog/posts/2026-07-04-phalar-phasors-for-learned-musical-audio) | 8.0分 | 前25% | #音乐生成 |
| 26. | [Optimality of FSQ Tokens for Continuous Diffusion for C](/audio-paper-digest-blog/posts/2026-07-04-optimality-of-fsq-tokens-for-continuous-diffusion) | 8.0分 | 前25% | #语音合成 |
| 27. | [SonicMaster: Towards Controllable All-in-One Music Rest](/audio-paper-digest-blog/posts/2026-07-04-sonicmaster-towards-controllable-all-in-one-music) | 8.0分 | 前25% | #音频修复 |
| 28. | [Do Audio LLMs Listen or Read? Analyzing and Mitigating ](/audio-paper-digest-blog/posts/2026-07-04-do-audio-llms-listen-or-read-analyzing-and) | 8.0分 | 前25% | #语音属性识别 |
| 29. | [Multiple Choice Learning of Low-Rank Adapters for Langu](/audio-paper-digest-blog/posts/2026-07-04-multiple-choice-learning-of-low-rank-adapters-for) | 8.0分 | 前25% | #多模态模型 |
| 30. | [Bridging the Stability-Expressivity Gap: Synthetic Data](/audio-paper-digest-blog/posts/2026-07-04-bridging-the-stability-expressivity-gap-synthetic) | 8.0分 | 前25% | #语音合成 |
| 31. | [FutureOmni: Evaluating Future Forecasting from Omni-Mod](/audio-paper-digest-blog/posts/2026-07-04-futureomni-evaluating-future-forecasting-from) | 8.0分 | 前25% | #音视频问答 |
| 32. | [Acoustic Interference: A New Paradigm Weaponizing Acous](/audio-paper-digest-blog/posts/2026-07-04-acoustic-interference-a-new-paradigm-weaponizing) | 8.0分 | 前25% | #音频理解 |
| 33. | [ReGen: Hierarchical Multi-Prompt Representation Generat](/audio-paper-digest-blog/posts/2026-07-04-regen-hierarchical-multi-prompt-representation) | 8.0分 | 前25% | #语音编码 |
| 34. | [DiscoForcing: A Unified Framework for Real-Time Audio-D](/audio-paper-digest-blog/posts/2026-07-04-discoforcing-a-unified-framework-for-real-time) | 8.0分 | 前25% | #音乐生成 |
| 35. | [DreamID-Omni: Unified Framework for Controllable Human-](/audio-paper-digest-blog/posts/2026-07-04-dreamid-omni-unified-framework-for-controllable) | 8.0分 | 前25% | #音视频生成 |
| 36. | [AgentSteerTTS: A Multi-Agent Closed-Loop Framework for ](/audio-paper-digest-blog/posts/2026-07-04-agentsteertts-a-multi-agent-closed-loop-framework) | 7.9分 | 前25% | #语音合成 |
| 37. | [STAR-VAE: Structured Topology-Aware Regularization for ](/audio-paper-digest-blog/posts/2026-07-04-star-vae-structured-topology-aware-regularization) | 7.9分 | 前25% | #音频生成 |
| 38. | [HyperPotter: Spell the Charm of High-Order Interactions](/audio-paper-digest-blog/posts/2026-07-04-hyperpotter-spell-the-charm-of-high-order) | 7.9分 | 前25% | #音频伪造检测 |
| 39. | [T2AV-Compass: Towards Unified Evaluation for Text-to-Au](/audio-paper-digest-blog/posts/2026-07-04-t2av-compass-towards-unified-evaluation-for-text) | 7.9分 | 前25% | #音视频生成 |
| 40. | [Decoupling The "What" and "Where" With Polar Coordinate](/audio-paper-digest-blog/posts/2026-07-04-decoupling-the-what-and-where-with-polar) | 7.8分 | 前25% | #音乐生成 |
| 41. | [V-LynX: Token Interface Alignment for Video+X LLMs](/audio-paper-digest-blog/posts/2026-07-04-v-lynx-token-interface-alignment-for-videox-llms) | 7.8分 | 前25% | #音视频问答 |
| 42. | [Ariadne's Thread of LipSync: Unraveling Forgeries via I](/audio-paper-digest-blog/posts/2026-07-04-ariadnes-thread-of-lipsync-unraveling-forgeries) | 7.8分 | 前25% | #音视频理解 |
| 43. | [SONAR: Spectral‑Contrastive Audio Residuals for General](/audio-paper-digest-blog/posts/2026-07-04-sonar-spectralcontrastive-audio-residuals-for) | 7.8分 | 前25% | #语音伪造检测 |
| 44. | [TMD-Bench: A Multi-Level Evaluation Paradigm for Music–](/audio-paper-digest-blog/posts/2026-07-04-tmd-bench-a-multi-level-evaluation-paradigm-for) | 7.7分 | 前25% | #音视频生成 |
| 45. | [AudioMosaic: Contrastive Masked Audio Representation Le](/audio-paper-digest-blog/posts/2026-07-04-audiomosaic-contrastive-masked-audio) | 7.7分 | 前25% | #音频分类 |
| 46. | [BFCL Audio: An Audio Function Calling Evaluation for La](/audio-paper-digest-blog/posts/2026-07-04-bfcl-audio-an-audio-function-calling-evaluation) | 7.7分 | 前25% | #语音交互 |
| 47. | [SALSA-V: Shortcut-Augmented Long-form Synchronized Audi](/audio-paper-digest-blog/posts/2026-07-04-salsa-v-shortcut-augmented-long-form-synchronized) | 7.6分 | 前25% | #音视频生成 |
| 48. | [BEAT: Tokenizing and Generating Symbolic Music by Unifo](/audio-paper-digest-blog/posts/2026-07-04-beat-tokenizing-and-generating-symbolic-music-by) | 7.6分 | 前25% | #音乐生成 |
| 49. | [From Inpainting to Editing: Unlocking Robust Mask-Free ](/audio-paper-digest-blog/posts/2026-07-04-from-inpainting-to-editing-unlocking-robust-mask) | 7.6分 | 前25% | #扩散模型 |
| 50. | [Hearing Without Noticing? Attention-Aware Stealthy Blac](/audio-paper-digest-blog/posts/2026-07-04-hearing-without-noticing-attention-aware-stealthy) | 7.6分 | 前25% | #语音识别 |
| 51. | [AVGen-Bench: A Task-Driven Benchmark for Multi-Granular](/audio-paper-digest-blog/posts/2026-07-04-avgen-bench-a-task-driven-benchmark-for-multi) | 7.6分 | 前25% | #音视频生成 |
| 52. | [Alethia: a Foundational Encoder for Voice Deepfakes](/audio-paper-digest-blog/posts/2026-07-04-alethia-a-foundational-encoder-for-voice-deepfakes) | 7.6分 | 前25% | #语音伪造检测 |
| 53. | [AG-REPA: Causal Layer Selection for Representation Alig](/audio-paper-digest-blog/posts/2026-07-04-ag-repa-causal-layer-selection-for-representation) | 7.6分 | 前25% | #语音合成 |
| 54. | [AVI-Bench: Toward Human-like Audio-Visual Intelligence ](/audio-paper-digest-blog/posts/2026-07-04-avi-bench-toward-human-like-audio-visual) | 7.6分 | 前25% | #音视频理解 |
| 55. | [Two-dimensional quantization for geometry-aware audio c](/audio-paper-digest-blog/posts/2026-07-04-two-dimensional-quantization-for-geometry-aware) | 7.6分 | 前25% | #语音编码 |
| 56. | [Abstraction Induces the Brain Alignment of Language and](/audio-paper-digest-blog/posts/2026-07-04-abstraction-induces-the-brain-alignment-of) | 7.5分 | 前25% | #语音编码 |
| 57. | [Self-Guidance: Enhancing Neural Codecs via Decoder Mani](/audio-paper-digest-blog/posts/2026-07-04-self-guidance-enhancing-neural-codecs-via-decoder) | 7.5分 | 前25% | #语音编码 |
| 58. | [OmniVideo-R1: Reinforcing Audio-visual Reasoning with Q](/audio-paper-digest-blog/posts/2026-07-04-omnivideo-r1-reinforcing-audio-visual-reasoning) | 7.5分 | 前25% | #音视频问答 |
| 59. | [Listening Through the Noise: Cauchy-Driven Diffusion Br](/audio-paper-digest-blog/posts/2026-07-04-listening-through-the-noise-cauchy-driven) | 7.4分 | 前50% | #音频修复 |
| 60. | [MoshiRAG: Asynchronous Knowledge Retrieval for Full-Dup](/audio-paper-digest-blog/posts/2026-07-04-moshirag-asynchronous-knowledge-retrieval-for) | 7.4分 | 前50% | - |
| 61. | [Omni-Perception Policy Optimization for Multimodal Emot](/audio-paper-digest-blog/posts/2026-07-04-omni-perception-policy-optimization-for) | 7.4分 | 前50% | #音视频理解 |
| 62. | [video-SALMONN S: Memory-Enhanced Streaming Audio-Visual](/audio-paper-digest-blog/posts/2026-07-04-video-salmonn-s-memory-enhanced-streaming-audio) | 7.3分 | 前50% | #音视频问答 |
| 63. | [Group Cognition Learning: Making Everything Better Thro](/audio-paper-digest-blog/posts/2026-07-04-group-cognition-learning-making-everything-better) | 7.3分 | 前50% | #音视频理解 |
| 64. | [REST: Diffusion-based Real-time End-to-end Streaming Ta](/audio-paper-digest-blog/posts/2026-07-04-rest-diffusion-based-real-time-end-to-end) | 7.3分 | 前50% | #音视频生成 |
| 65. | [PhoStream: Benchmarking Real-World Streaming for Omnimo](/audio-paper-digest-blog/posts/2026-07-04-phostream-benchmarking-real-world-streaming-for) | 7.3分 | 前50% | #音视频问答 |
| 66. | [ProactiveLLM: Learning Active Interaction for Streaming](/audio-paper-digest-blog/posts/2026-07-04-proactivellm-learning-active-interaction-for) | 7.2分 | 前50% | #语音识别 |
| 67. | [Stream RAG: Instant and Accurate Spoken Dialogue System](/audio-paper-digest-blog/posts/2026-07-04-stream-rag-instant-and-accurate-spoken-dialogue) | 7.2分 | 前50% | #流式处理 |
| 68. | [Probing Cross-modal Information Hubs in Audio-Visual LL](/audio-paper-digest-blog/posts/2026-07-04-probing-cross-modal-information-hubs-in-audio) | 7.2分 | 前50% | #音视频理解 |
| 69. | [Efficient Multi-modal Dataset Distillation via Analytic](/audio-paper-digest-blog/posts/2026-07-04-efficient-multi-modal-dataset-distillation-via) | 7.2分 | 前50% | #对比学习 |
| 70. | [Self-Supervised Flow Matching for Scalable Multi-Modal ](/audio-paper-digest-blog/posts/2026-07-04-self-supervised-flow-matching-for-scalable-multi) | 7.2分 | 前50% | #音视频生成 |
| 71. | [CoCoEmo: Composable and Controllable Human-Like Emotion](/audio-paper-digest-blog/posts/2026-07-04-cocoemo-composable-and-controllable-human-like) | 7.1分 | 前50% | #语音合成 |
| 72. | [Scaling Transformers for End-to-End Discrete Audio Toke](/audio-paper-digest-blog/posts/2026-07-04-scaling-transformers-for-end-to-end-discrete) | 7.1分 | 前50% | #音频编码 |
| 73. | [Query-Based Asymmetric Modeling with Decoupled Input–Ou](/audio-paper-digest-blog/posts/2026-07-04-query-based-asymmetric-modeling-with-decoupled) | 7.1分 | 前50% | #语音增强 |
| 74. | [OmniSIFT: Modality-Asymmetric Token Compression for Eff](/audio-paper-digest-blog/posts/2026-07-04-omnisift-modality-asymmetric-token-compression) | 7.1分 | 前50% | #音视频问答 |
| 75. | [Sparse Autoencoders for Interpretable Emotion Control i](/audio-paper-digest-blog/posts/2026-07-04-sparse-autoencoders-for-interpretable-emotion) | 7.0分 | 前50% | #语音合成 |
| 76. | [The Silent Thought: Modeling Internal Cognition in Full](/audio-paper-digest-blog/posts/2026-07-04-the-silent-thought-modeling-internal-cognition-in) | 7.0分 | 前50% | #知识蒸馏 |
| 77. | [Hidden in Plain Tokens: Simply Robust, Gradient-Free Wa](/audio-paper-digest-blog/posts/2026-07-04-hidden-in-plain-tokens-simply-robust-gradient) | 7.0分 | 前50% | #音频水印 |
| 78. | [Efficient Distributed MLLM Training with Cornstarch](/audio-paper-digest-blog/posts/2026-07-04-efficient-distributed-mllm-training-with) | 7.0分 | 前50% | #音视频理解 |
| 79. | [Reasoning LLM Improves Speaker Recognition in Long-form](/audio-paper-digest-blog/posts/2026-07-04-reasoning-llm-improves-speaker-recognition-in) | 7.0分 | 前50% | - |
| 80. | [Real-World Unsupervised Models Generalize to Predict Br](/audio-paper-digest-blog/posts/2026-07-04-real-world-unsupervised-models-generalize-to) | 6.9分 | 前50% | #模型评估 |
| 81. | [From Talking to Singing: A New Challenge for Audio-Visu](/audio-paper-digest-blog/posts/2026-07-04-from-talking-to-singing-a-new-challenge-for-audio) | 6.9分 | 前50% | #音视频理解 |
| 82. | [OmniShow: Unifying Multimodal Conditions for Human-Obje](/audio-paper-digest-blog/posts/2026-07-04-omnishow-unifying-multimodal-conditions-for-human) | 6.9分 | 前50% | #音视频生成 |
| 83. | [E-VAds: An E-commerce Short Videos Understanding Benchm](/audio-paper-digest-blog/posts/2026-07-04-e-vads-an-e-commerce-short-videos-understanding) | 6.9分 | 前50% | #音视频问答 |
| 84. | [STARCaster: Spatio-Temporal AutoRegressive Video Diffus](/audio-paper-digest-blog/posts/2026-07-04-starcaster-spatio-temporal-autoregressive-video) | 6.8分 | 前50% | #音视频生成 |
| 85. | [Zero-Shot Rankability: Revealing Latent Ordinal Structu](/audio-paper-digest-blog/posts/2026-07-04-zero-shot-rankability-revealing-latent-ordinal) | 6.8分 | 前50% | #音视频理解 |
| 86. | [An Exterior Method for Nonnegative Matrix Factorization](/audio-paper-digest-blog/posts/2026-07-04-an-exterior-method-for-nonnegative-matrix) | 6.8分 | 前50% | #音频分类 |
| 87. | [FoeGlass: Simple In-Context Learning Is Enough for Red ](/audio-paper-digest-blog/posts/2026-07-04-foeglass-simple-in-context-learning-is-enough-for) | 6.8分 | 前50% | #语音伪造检测 |
| 88. | [Native Active Perception as Reasoning for Omni-Modal Un](/audio-paper-digest-blog/posts/2026-07-04-native-active-perception-as-reasoning-for-omni) | 6.8分 | 前50% | #音视频理解 |
| 89. | [Unlocking Speech–Text Compositional Powers: Instruction](/audio-paper-digest-blog/posts/2026-07-04-unlocking-speechtext-compositional-powers) | 6.7分 | 前50% | #语音交互 |
| 90. | [UltraLIF: Fully Differentiable Spiking Neural Networks ](/audio-paper-digest-blog/posts/2026-07-04-ultralif-fully-differentiable-spiking-neural) | 6.7分 | 前50% | #音频分类 |
| 91. | [Towards Streaming Synchronized Spatial Audio Generation](/audio-paper-digest-blog/posts/2026-07-04-towards-streaming-synchronized-spatial-audio) | 6.6分 | 前50% | #音视频生成 |
| 92. | [TextME: Bridging Unseen Modalities Through Text Descrip](/audio-paper-digest-blog/posts/2026-07-04-textme-bridging-unseen-modalities-through-text) | 6.6分 | 前50% | - |
| 93. | [Evaluating and Rewarding LALMs for Expressive Role-Play](/audio-paper-digest-blog/posts/2026-07-04-evaluating-and-rewarding-lalms-for-expressive) | 6.6分 | 前50% | #语音合成 |
| 94. | [PADS-TAL: Padding-Annealed Diffusion Sampling in Text-A](/audio-paper-digest-blog/posts/2026-07-04-pads-tal-padding-annealed-diffusion-sampling-in) | 6.6分 | 前50% | #音乐生成 |
| 95. | [ADEPT: RL-Aligned Agentic Decoding of Emotion via Evide](/audio-paper-digest-blog/posts/2026-07-04-adept-rl-aligned-agentic-decoding-of-emotion-via) | 6.5分 | 前50% | #语音情感识别 |
| 96. | [Universal Algorithm-Implicit Learning](/audio-paper-digest-blog/posts/2026-07-04-universal-algorithm-implicit-learning) | 6.5分 | 前50% | #音频分类 |
| 97. | [SARSteer: Safeguarding Large Audio Language Models via ](/audio-paper-digest-blog/posts/2026-07-04-sarsteer-safeguarding-large-audio-language-models) | 6.5分 | 前50% | - |
| 98. | [MetaPerch: Learning from metadata for bioacoustics foun](/audio-paper-digest-blog/posts/2026-07-04-metaperch-learning-from-metadata-for-bioacoustics) | 6.5分 | 前50% | #音频分类 |
| 99. | [Polyphonia: Zero-Shot Timbre Transfer in Polyphonic Mus](/audio-paper-digest-blog/posts/2026-07-04-polyphonia-zero-shot-timbre-transfer-in) | 6.5分 | 前50% | #音乐生成 |
| 100. | [CMI-RewardBench: Evaluating Music Reward Models with Co](/audio-paper-digest-blog/posts/2026-07-04-cmi-rewardbench-evaluating-music-reward-models) | 6.4分 | 前50% | #音乐生成 |
| 101. | [Multimodal Fact-Level Attribution for Verifiable Reason](/audio-paper-digest-blog/posts/2026-07-04-multimodal-fact-level-attribution-for-verifiable) | 6.4分 | 前50% | #音频理解 |
| 102. | [MedMosaic: A Challenging Large Scale Benchmark of Diver](/audio-paper-digest-blog/posts/2026-07-04-medmosaic-a-challenging-large-scale-benchmark-of) | 6.4分 | 前50% | #音频理解 |
| 103. | [INFER: Learning Implicit Neural Frequency Response Fiel](/audio-paper-digest-blog/posts/2026-07-04-infer-learning-implicit-neural-frequency-response) | 6.4分 | 前50% | #空间音频 |
| 104. | [Characterizing the Predictive Impact of Modalities with](/audio-paper-digest-blog/posts/2026-07-04-characterizing-the-predictive-impact-of) | 6.4分 | 前50% | - |
| 105. | [PCRNet: Phase-aware Complex Refinement Network for EEG-](/audio-paper-digest-blog/posts/2026-07-04-pcrnet-phase-aware-complex-refinement-network-for) | 6.4分 | 前50% | #实时处理 |
| 106. | [OmniFit: Bridging Modalities via Layer-Adaptive Token C](/audio-paper-digest-blog/posts/2026-07-04-omnifit-bridging-modalities-via-layer-adaptive) | 6.3分 | 前50% | #音视频理解 |
| 107. | [EchoingPixels: Aliasing-Resistant Joint Token Reduction](/audio-paper-digest-blog/posts/2026-07-04-echoingpixels-aliasing-resistant-joint-token) | 6.3分 | 前50% | #音视频理解 |
| 108. | [Quaternion Self-Attention with Shared Scores](/audio-paper-digest-blog/posts/2026-07-04-quaternion-self-attention-with-shared-scores) | 6.3分 | 前50% | #语音增强 |
| 109. | [LightAVSeg: Lightweight Audio-Visual Segmentation](/audio-paper-digest-blog/posts/2026-07-04-lightavseg-lightweight-audio-visual-segmentation) | 6.3分 | 前50% | #模型压缩 |
| 110. | [SURF: Separation via Unsupervised Remixing Flow](/audio-paper-digest-blog/posts/2026-07-04-surf-separation-via-unsupervised-remixing-flow) | 6.2分 | 前50% | #语音分离 |
| 111. | [Neural-Inspired Modeling of Auditory Selection and Comp](/audio-paper-digest-blog/posts/2026-07-04-neural-inspired-modeling-of-auditory-selection) | 6.2分 | 前50% | #音视频语音分离 |
| 112. | [AuTAgent: A Reinforcement Learning Framework for Tool-A](/audio-paper-digest-blog/posts/2026-07-04-autagent-a-reinforcement-learning-framework-for) | 6.2分 | 前50% | #音频理解 |
| 113. | [Multimodal Latent Language Modeling with Next-Token Dif](/audio-paper-digest-blog/posts/2026-07-04-multimodal-latent-language-modeling-with-next) | 6.1分 | 前50% | #语音合成 |
| 114. | [FakeWorld 1.0: An Omni-modal Benchmark for Fake Media a](/audio-paper-digest-blog/posts/2026-07-04-fakeworld-10-an-omni-modal-benchmark-for-fake) | 6.1分 | 前50% | #可解释性 |
| 115. | [ConsMSA: Semantic Distribution Consistency Learning for](/audio-paper-digest-blog/posts/2026-07-04-consmsa-semantic-distribution-consistency) | 6.1分 | 前50% | #多模态模型 |
| 116. | [MusicDET: Zero-Shot AI-Generated Music Detection](/audio-paper-digest-blog/posts/2026-07-04-musicdet-zero-shot-ai-generated-music-detection) | 6.1分 | 前50% | #音频伪造检测 |
| 117. | [Convex Low-resource Accent-Robust Language Detection in](/audio-paper-digest-blog/posts/2026-07-04-convex-low-resource-accent-robust-language) | 6.0分 | 前50% | #语音识别 |
| 118. | [NeuroCLUS: A Foundation Model with Functional Clusterin](/audio-paper-digest-blog/posts/2026-07-04-neuroclus-a-foundation-model-with-functional) | 6.0分 | 前50% | #语音识别 |
| 119. | [Sparse Tokens Suffice: Jailbreaking Audio Language Mode](/audio-paper-digest-blog/posts/2026-07-04-sparse-tokens-suffice-jailbreaking-audio-language) | 5.9分 | 前50% | #模型剪枝 |
| 120. | [Scaling Behavior in Model Fine-tuning for Audio DeepFak](/audio-paper-digest-blog/posts/2026-07-04-scaling-behavior-in-model-fine-tuning-for-audio) | 5.9分 | 前50% | #音频伪造检测 |
| 121. | [Bioacoustic Geolocation: Species Sounds as Geographic S](/audio-paper-digest-blog/posts/2026-07-04-bioacoustic-geolocation-species-sounds-as) | 5.8分 | 前50% | #音频理解 |
| 122. | [AudioChat: Unified Audio Storytelling, Editing, and Und](/audio-paper-digest-blog/posts/2026-07-04-audiochat-unified-audio-storytelling-editing-and) | 5.8分 | 前50% | #音频生成 |
| 123. | [Omni-Diffusion: Unified Multimodal Understanding and Ge](/audio-paper-digest-blog/posts/2026-07-04-omni-diffusion-unified-multimodal-understanding) | 5.8分 | 前50% | - |
| 124. | [Robust Signal Enhancement via Fractional Detail Views a](/audio-paper-digest-blog/posts/2026-07-04-robust-signal-enhancement-via-fractional-detail) | 5.7分 | 前50% | #语音增强 |
| 125. | [Multimodal Fusion via Self-Consistent Task-Gradient Fie](/audio-paper-digest-blog/posts/2026-07-04-multimodal-fusion-via-self-consistent-task) | 5.5分 | 前50% | #鲁棒性 |
| 126. | [NAACA: Training-Free NeuroAuditory Attentive Cognitive ](/audio-paper-digest-blog/posts/2026-07-04-naaca-training-free-neuroauditory-attentive) | 5.5分 | 前50% | #音频事件检测 |
| 127. | [Language Model Augmented Semi-Supervised Statistical In](/audio-paper-digest-blog/posts/2026-07-04-language-model-augmented-semi-supervised) | 5.4分 | 后50% | #语音属性识别 |
| 128. | [MER-DG: Modality-Entropy Regularization for Multimodal ](/audio-paper-digest-blog/posts/2026-07-04-mer-dg-modality-entropy-regularization-for) | 5.4分 | 后50% | #音视频理解 |
| 129. | [Towards Understanding Modality Interaction in Multimoda](/audio-paper-digest-blog/posts/2026-07-04-towards-understanding-modality-interaction-in) | 5.3分 | 后50% | #音视频理解 |
| 130. | [Stable Spectral Copula Alignment for Robust Multimodal ](/audio-paper-digest-blog/posts/2026-07-04-stable-spectral-copula-alignment-for-robust) | 5.2分 | 后50% | #鲁棒性 |
| 131. | [Multimodal Meta-Verifier with Explicit Structured Recal](/audio-paper-digest-blog/posts/2026-07-04-multimodal-meta-verifier-with-explicit-structured) | 5.2分 | 后50% | #多模态模型 |
| 132. | [WaveSSM: Multiscale State-Space Models for Non-stationa](/audio-paper-digest-blog/posts/2026-07-04-wavessm-multiscale-state-space-models-for-non) | 4.8分 | 后50% | #音频分类 |
| 133. | [Efficient, Property-Aligned Fan-Out Retrieval via RL-Co](/audio-paper-digest-blog/posts/2026-07-04-efficient-property-aligned-fan-out-retrieval-via) | 4.7分 | 后50% | #音乐检索 |
| 134. | [VIBE: Disentangling Social Dynamics via Kinematics-Info](/audio-paper-digest-blog/posts/2026-07-04-vibe-disentangling-social-dynamics-via-kinematics) | 4.6分 | 后50% | - |
| 135. | [UniFLoW: Universal Multi-Modal Federated LoRA Fine-Tuni](/audio-paper-digest-blog/posts/2026-07-04-uniflow-universal-multi-modal-federated-lora-fine) | 4.4分 | 后50% | #音视频问答 |
| 136. | [Rethinking Attention in Spiking Transformers: Overcomin](/audio-paper-digest-blog/posts/2026-07-04-rethinking-attention-in-spiking-transformers) | 3.6分 | 后50% | #音频分类 |
| 137. | [PRIM：Cooperative Dynamic Token Compression for Efficien](/audio-paper-digest-blog/posts/2026-07-04-primcooperative-dynamic-token-compression-for) | 3.6分 | 后50% | #音视频理解 |

---

## 📋 论文列表

### 🥇 [TimeChat-Captioner: Scripting Multi-Scene Videos with Time-Aware and Structural Audio-Visual Captions](/audio-paper-digest-blog/posts/2026-07-04-timechat-captioner-scripting-multi-scene-videos)

🔥 **9.4/10** | 前10% | #音视频理解 | 创新 1.7/2 | 严谨 1.3/1.5 | 实验 1.4/1.5 | 影响 0.9/1.5 | 开源 1.5/1.5

👥 **作者与机构**

- 第一作者：Linli Yao（北京大学计算机学院，快手科技Kling团队）
- 通讯作者：Xu Sun（北京大学计算机学院）
- 作者列表：Linli Yao（北京大学，快手科技Kling团队）、Yuancheng Wei（华南理工大学）、Yaojie Zhang（电子科技大学）、Lei Li（香港大学）、Xinlong Chen（中国科学院自动化研究所，快手科技Kling团队）、Feifan Song（北京大学）、Ziyue Wang（北京大学）、Kun Ouyang（北京大学）、Yuanxin Liu（北京大学）、Lingpeng Kong（香港大学）、Qi Liu（香港大学）、Pengfei Wan（快手科技Kling团队）、Kun Gai（快手科技Kling团队）、Yuanxing Zhang（快手科技Kling团队）、Xu Sun（北京大学）

💡 **毒舌点评**

该工作在音视频密集字幕生成领域投下了一枚“定义即创新”的炸弹。其提出的OmniDenseCaptioning任务和SodaM评估指标，直击当前音视频理解缺乏时间粒度和结构化描述的痛点，堪称一次教科书式的任务重塑。7B开源模型在精细定义的子任务上干翻Gemini-2.5-Pro，工程整合能力令人叹服，为社区贡献了完整的开原语料。然而，剥开任务定义与指标的糖衣，模型本身是Qwen2.5-Omni与GRPO的精心调配，缺乏算法层面的范式突破。更令人警惕的是，其引以为傲的SodaM指标和训练数据完全由Gemini系列模型闭环驱动，这种“以子之矛攻子之盾”的策略虽精彩，但也埋下了系统性偏见的隐患，评估的可信度也因此被蒙上一层阴影。

📌 **核心摘要**

本文定义了Omni Dense Captioning新任务，旨在为给定视频生成连续时间片段（场景）的、覆盖“事件、背景、镜头、剪辑、对话、声学”六维度结构化密集字幕，即“剧本式”描述。为此，作者构建了首个高质量人工标注基准OmniDCBench（含1,122个视频），并提出SodaM指标，通过动态规划对齐和预测合并策略，联合评估时间分割精度与密集字幕质量。方法上，基于Qwen2.5-Omni多模态模型，提出两阶段训练框架：首先在合成数据集TimeChatCap-42K上进行监督微调，然后引入GRPO强化学习，并精心设计了格式、长度、时间戳和SodaM四项任务特定奖励进行优化。实验证明，所得TimeChat-Captioner-7B模型在OmniDCBench上SodaM得分（35.0）超越Gemini-2.5-Pro（33.7），其生成的字幕能显著提升下游音视频问答和时间定位任务的性能，并可作为媲美闭源模型的开源数据引擎。

🔗 **开源详情**

- 代码/模型/数据集统一仓库：https://github.com/yaolinli/TimeChat-Captioner
- 模型权重：论文摘要声明所有模型（SFT和GRPO）与代码一同在GitHub开源。
- 数据集：
  1.  OmniDCBench（人工标注基准）：基于Movie101和YT-Temporal-1B构建，包含1,122个视频的高质量人工标注，随仓库公开。
  2.  TimeChatCap-42K（合成训练集）：基于MMTrail-2M和Movie101，由Gemini-2.5-Pro合成的42K个视频-字幕对，随仓库公开。
- Demo：论文中未提及。
- 复现材料：论文附录E中提供了详细的训练硬件（32×80G GPU, DeepSpeed ZeRO-2）、SFT超参数（epoch=2, lr=5e-5, batch_size=128）、GRPO超参数（epoch=1, lr=1e-5, batch_size=64, rollout=8, KL系数=0.04）及奖励权重配置。
- 论文中未提供独立链接的部分开源项目/数据集：Qwen2.5-Omni/VL/Audio, MiniCPM-o-2.6, Qwen3-Omni, video-SALMONN-2, ARC-Hunyuan-Video, UGC-VideoCaptioner, HumanOmniV2, TimeChat, TimeSuite, TimeExpert, Movie101, YT-Temporal-1B, MMTrail-2M, Charades-STA, Daily-omni, WorldSense, LongVALE。
- 论文中引用的闭源模型：Gemini-2.5-Pro/Flash。

📄 [OpenReview](https://openreview.net/forum?id=TL787dxmIM)

---

### 🥈 [Joint Enhancement and Classification using Coupled Diffusion Models of Signals and Logits](/audio-paper-digest-blog/posts/2026-07-04-joint-enhancement-and-classification-using)

🔥 **9.3/10** | 前10% | #语音识别 | 创新 1.8/2 | 严谨 1.4/1.5 | 实验 1.2/1.5 | 影响 1.2/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Gilad Nurko（Technion – Israel Institute of Technology）
- 通讯作者：Gilad Nurko（Technion – Israel Institute of Technology）
- 作者列表：Gilad Nurko（Technion – Israel Institute of Technology）、Roi Benita（Technion – Israel Institute of Technology）、Yehoshua Dissen（Technion – Israel Institute of Technology）、Tomohiro Nakatani（NTT, Inc., Japan）、Marc Delcroix（NTT, Inc., Japan）、Shoko Araki（NTT, Inc., Japan）、Joseph Keshet（Technion – Israel Institute of Technology）

💡 **毒舌点评**

信号与logits扩散的耦合想法聪明又实用，让增强和识别双向奔赴，确实比傻乎乎的“先增强后分类”高出几个段位。但计算开销是硬伤，Nested和Alternating策略的NFE（神经功能评估）倍数（10×和7×）让部署侧直呼受不了，且ASR实验一直抱着受限词表不放，似乎有点逃避大词汇量连续识别的hard mode。整体瑕不掩瑜，ICML的spotlight水平，但别想让审稿人给full oral。

📌 **核心摘要**

本文针对噪声环境下的分类鲁棒性问题，提出一个无需修改预训练分类器的域无关联合增强与分类框架。核心思想是将信号扩散模型与分类器logits扩散模型相互耦合，实现双向引导：信号重构为logits生成提供精确语义特征，而演化的logits预测则约束信号向判别性更强的流形区域重建。作者提出了三种耦合策略（Parallel、Alternating、Nested），分别对应逐步交叉引导、交替块状引导和嵌套循环引导，为精度与计算开销的权衡提供了灵活的系统性设计空间。在图像分类（MNIST、CIFAR-10/100、ImageNet32-100）和语音识别（Google Speech Commands、EARS-Reverb、EARS-WHAM）上，所提策略一致优于传统的序列增强基线（Enhanced）、静态条件生成方法（CARD）以及引入任务监督的增强方法（URIE、Dissen）。例如在CIFAR-10的30%高斯噪声下，Alternating策略将准确率从增强基线的60.4%提升至82.8%；在EARS-Reverb上，Nested策略将WER从4.48%降至3.83%。其现实意义在于为任意冻结的预训练分类器提供了一个即插即用的鲁棒推理增强管道。主要局限是计算复杂度高，且在大词表ASR中的扩展性尚未得到充分验证。

🔗 **开源详情**

- 代码：https://github.com/gilad-nurko/coupled-diffusion.git
- 模型权重：未提及。
- 数据集：使用了MNIST、CIFAR-10、CIFAR-100、ImageNet32-100、Google Speech Commands、EARS（含EARS-Reverb和EARS-WHAM）等公开数据集，论文未提供具体获取链接。
- 复现材料：附录提供了详尽的实验配置和超参数，但未打包独立的复现脚本或配置文件。

📄 [OpenReview](https://openreview.net/forum?id=v9rdrvA4Yx)

---

### 🥉 [Learning Tight Rejection Boundaries without Negatives for Strict One-Class Audio Deepfake Detection](/audio-paper-digest-blog/posts/2026-07-04-learning-tight-rejection-boundaries-without)

🔥 **9.3/10** | 前10% | #语音伪造检测 | 创新 1.6/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 影响 1.3/1.5 | 开源 1.5/1.5

👥 **作者与机构**

- 第一作者：Yuze Zhao（哈尔滨工业大学深圳）
- 通讯作者：Wei Jiang（哈尔滨工业大学网络空间安全学院）
- 作者列表：Yuze Zhao（哈尔滨工业大学深圳）、Kuiyuan Zhang（哈尔滨工业大学网络空间安全学院）、Zhongyun Hua（哈尔滨工业大学深圳）、Yushu Zhang（江西财经大学计算机与人工智能学院）、Qing Liao（哈尔滨工业大学深圳）、Wei Jiang（哈尔滨工业大学网络空间安全学院）

💡 **毒舌点评**

这篇文章的野心让人眼前一亮：它试图在完全不看任何伪造样本的前提下，仅靠真实语音就训练出一个既能圈定真实分布又能明确划出“哪是假”边界的检测器，这在音频深伪检测领域确实是个硬骨头。方法核心“用结构破坏的探针代替假样本当负类”的想法很巧妙，跨域和未知攻击的鲁棒性提升也相当扎实。不过，亮点背后也藏着隐忧：探针家族纯靠人工设计，万一未来的攻击技术高明到连音频的时序、频谱、相位结构都不带破绽，这套边界恐怕就会被钻空子。另外，在线标准化虽然有效缓解了余弦坍塌，但对比的归一化方法有限，缺乏更深入的理论解释。总体而言，是一篇想法新颖、实验扎实的顶会候选，但在理论深度和终极鲁棒性上仍有待打磨。

📌 **核心摘要**

1. 本工作瞄准严格单类音频深度伪造检测中的核心难题：如何在仅用真实语音训练、完全不接触任何伪造样本的前提下，学习一个既能压缩真实分布、又能在嵌入空间中明确划出拒绝边界的检测器。
2. 提出 CA-SOADD (Centroid-Anchored Strict One-Class Audio Deepfake Detection)，采用“质心锚定的三目标学习”框架：质心紧凑性 ($\mathcal{L}_{\text{cpt}}$) 锚定真实核心、良性视图不变性 ($\mathcal{L}_{\text{binv}}$) 稳定质心邻域、质心参考的边界塑造 ($\mathcal{L}_{\text{cabs}}$) 通过结构破坏探针施加余弦间隔约束，在不引入显式负类的情况下收紧接受域。
3. 与放松的单类方法（训练时引入伪造或辅助负样本）和纯紧凑性驱动的 Deep-SVDD 等彻底划清界限：CA-SOADD 严格对齐推理时的余弦-质心打分规则，首次将离线形边界探针与质心参照间隔引入语音伪造检测，完全避免了对伪造样本的判别学习或代理判别。
4. 在多个基准上验证了有效性：ASVSpoof-2021 LA/DF 上 AUC/EER 达到 96.9%/7.3% 和 96.9%/8.4%，ASVSpoof-5 上 92.7%/13.4%，CtrSVDD 歌唱基准 EER 16.83%，MLAAD 跨语言基准全语言 EER 17.70%，均大幅优于同严格协议下的其他单类基线，并在跨基准迁移（ASVSpoof-2021→ASVSpoof-5）中超越有监督检测器。
5. 贡献了系统的消融分析：证实边界塑造损失、良性不变性、在线标准化均起关键作用，尤其是代理判别损失（BCE、InfoNCE）无法复现增益，证明增益来自评分对齐的边界塑形而非代理判别。此外，探针池按机制族移除的分析验证了整体方法对特定探针的鲁棒性。
6. 实际意义：提供了一种完全脱离伪造样本的开集检测方案，天然适应快速演变的生成攻击，部署时无需收集、标注或假设攻击类型，可降低对抗性语音检测系统的持续维护成本。
7. 主要局限：结构破坏探针池依赖人工设计，对保留自然语音结构但含细微伪造痕迹的攻击覆盖不足；在线标准化缺乏与更多归一化方法的深度对比；跨域场景下阈值需域内真实样本校准；多语言场景禁用 $\mathcal{L}_{\text{binv}}$，暴露了良性不变性与多中心分离间的潜在冲突；未在工业级真实管道中验证。

🔗 **开源详情**

- 代码：https://github.com/120L020310/CA-SOADD （论文声明的开源仓库）
- 模型权重：未发布
- 数据集：
  - ASVSpoof-2021 LA/DF：需向 https://www.asvspoof.org/ 申请
  - ASVSpoof-5：需向 https://www.asvspoof.org/ 申请
  - CtrSVDD：https://github.com/nii-yamagishilab/CtrSVDD
  - MLAAD：https://github.com/nii-yamagishilab/mlaad
- 复现材料：附录 B（在线标准化伪代码）、C.3（探针池算子参数与实现细节）、C.4（探针生成器范式诊断）、E（真实阈值校准流程）、F.1/F.2（损失权值与间隔敏感度分析）提供了充分信息；所有实验在单卡 NVIDIA RTX 5090 上完成。
- 论文引用的开源/公开项目（部分列举）：
  - XLSR / wav2vec 2.0: https://github.com/facebookresearch/fairseq/tree/main/examples/wav2vec
  - WavLM: https://github.com/microsoft/unilm/tree/master/wavlm
  - HuBERT: https://github.com/facebookresearch/fairseq/tree/main/examples/hubert
  - Deep-SVDD: https://github.com/lukasruff/Deep-SVDD
  - AASIST: https://github.com/clovaai/aasist
  - RawNet2: https://github.com/jungjee/RawNet
  - CSI: https://github.com/alinlab/CSI
  - 其他引用的方法（OC-SVM, CutPaste, NAD, OC-Softmax, LCNN, RawGAT, ABC-CapsNet, MPE, ASDG, IG-SVD, NaturalSpeech 3, MaskGCT 等）的官方仓库或论文出处已在原文参考文献中标注。

📄 [OpenReview](https://openreview.net/forum?id=ZuzygE5nsT)

---

### 4. [AVTrack: Audio-Visual Tracking in Human-centric Complex Scenes](/audio-paper-digest-blog/posts/2026-07-04-avtrack-audio-visual-tracking-in-human-centric)

🔥 **9.3/10** | 前10% | #音视频理解 | 创新 1.5/2 | 严谨 1.3/1.5 | 实验 1.3/1.5 | 影响 1/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Yaoting Wang（复旦大学大数据学院、计算机科学技术学院/人工智能学院）
- 通讯作者：Henghui Ding <hhding@fudan.edu.cn>（复旦大学大数据学院、计算机科学技术学院/人工智能学院）
- 作者列表：Yaoting Wang（复旦大学大数据学院、计算机科学技术学院/人工智能学院）、Yun Zhou（同上）、Zipei Zhang（同上）、Henghui Ding（同上）

💡 **毒舌点评**

AVTrack用一个精心策划的、仅含测试集的基准，漂亮地撕下了现有AVIS方法在真实复杂场景下的“遮羞布”。八个挑战维度覆盖全面，让那些在简单场景中“称王称霸”的模型原形毕露——HOTA不足21，堪称惨烈。然而，论文提出的“救世主”基线AVTracker，本质上是一个靠堆砌VLM和SAM“老本”的模块化流水线。其推理开销大到离谱（每帧18,900 GFLOPs），速度仅为0.21 FPS，且整个基准不提供训练集，让“如何在这套场景上通过训练真正变强”成为一个悬而未决的开放问题。这更像是一个昂贵的“鉴定师”，而非一个实用的“解题者”。

📌 **核心摘要**

本论文针对现有人中心音频视觉实例分割（AVIS）基准场景简单、缺乏动态挑战的问题，提出了AVTrack数据集，包含871个视频、3120个精细标注的实例轨迹，覆盖视觉遮挡、相机运动变化、多轮说话等八类复杂条件。该数据集定位为纯测试集，旨在提供一个长期稳定的评估平台。

方法上，论文设计了一个基于模块化流水线的基线AVTracker，利用Whisper转写与说话人嵌入进行语块聚合，再配合视觉大模型（VLM）Qwen3-VL和SAM3在局部窗口内建立音视对应，最后通过全局推理模块关联同一说话人的轨迹片段。与以往端到端AVIS方法相比，AVTracker的独特之处在于其训练无关、可插拔的模块化架构，直接用文本语义桥接音频和视觉。在AVTrack上的实验表明，主流VIS方法HOTA<12，最强AVIS方法HOTA<21，而AVTracker达到了29.08 HOTA，领先约8个点。此外，论文还与商业模型Gemini 2.5 Pro进行了零样本对比，其HOTA仅为14.4，进一步证明了AVTrack的挑战性。该基准为评估复杂场景下的人中心音视理解提供了有价值的测试平台；其主要局限是计算代价极高，且纯测试集设计使模型无法利用场景内训练数据进行适配。

主要实验结果如下（表2摘要，数值为百分比）：

| 方法类型 | 方法名称 | HOTA | DetA | AssA | IDF1 | MOTA |
|----------|----------|------|------|------|------|------|
| VIS | VITA | 9.70 | 10.54 | 9.35 | 12.32 | 1.91 |
| VIS | LBVQ | 10.29 | 11.77 | 9.36 | 12.87 | 1.98 |
| VIS | CAVIS | 11.46 | 12.10 | 10.07 | 12.95 | 1.96 |
| AVIS | AVISM | 20.84 | 23.22 | 19.53 | 26.57 | 3.95 |
| AVIS | ACVIS | 20.60 | 22.59 | 19.66 | 26.23 | 4.23 |
| AVIS | AVTrackFormer | 21.47 | 22.51 | 20.26 | 26.41 | 4.11 |
| AVIS | AVTracker | 29.08 | 31.18 | 28.47 | 34.55 | 16.20 |

🔗 **开源详情**

- 代码：论文仅提供了项目网站，未提及公开代码仓库。
- 模型权重：论文未提及提供模型权重。
- 数据集：论文声明提供数据集下载，但报告中未提及可直接访问的下载链接。根据摘要，项目网站为 `https://FudanCVL.github.io/AVTrack/`。
- Demo：论文中未提及。
- 复现材料：论文附录F提供了基线AVTracker的实现细节和超参数配置，附录G提供了VLM推理所用的提示，但未提供可直接运行的代码和检查点。
- 论文中引用的开源项目：
  - SAM (Kirillov et al., 2023)
  - Grounded-SAM (Ren et al., 2024)
  - Mask2Former (Cheng et al., 2022)
  - VITA (Heo et al., 2022)
  - Qwen3-VL (Bai et al., 2025)
  - Whisper (Radford et al., 2023)
  - SpeechBrain / ECAPA-TDNN (Desplanques et al., 2020)
  - MossFormer2 (Zhao et al., 2024)
  - SAM 3 (Carion et al., 2025)

📄 [OpenReview](https://openreview.net/forum?id=Aa4DlW8PV2)

---

### 5. [A Semantically Consistent Dataset for Data-Efficient Query-Based Universal Sound Separation](/audio-paper-digest-blog/posts/2026-07-04-a-semantically-consistent-dataset-for-data)

🔥 **9.2/10** | 前10% | #音频分离 | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 影响 1.2/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Kai Li（清华大学计算机系 / IDG/McGovern Institute for Brain Research, 清华大学）、Jintao Cheng（清华大学计算机系）（*共同第一）
- 通讯作者：Xiaolin Hu（清华大学计算机系 / IDG/McGovern Institute for Brain Research / 中国脑与认知科学研究所 (CIBR)）
- 作者列表：Kai Li, Jintao Cheng, Chang Zeng (Shanda AI Research Tokyo), Zijun Yan (清华大学), Helin Wang (Johns Hopkins University), Zixiong Su (Shanda AI Research Tokyo), Bo Zheng (Shanda AI Research Tokyo), Xiaolin Hu (清华大学)

💡 **毒舌点评**

这篇论文用一个精心设计的数据清洗管道，优雅地证明了“数据纯度远比数据规模重要”这一反直觉结论——Hive 仅凭 0.2% 的训练数据量，就让模型在多项指标上媲美甚至超越百万小时级的 SAM-Audio，说服力极强。但管道核心的语义对齐和兼容性判断完全依赖 Qwen3-Omni 零样本能力，这种对单一黑盒模型的深度绑定，可能让数据集系统性地继承了该模型的偏见，而作者对这种“近亲繁殖”风险的审计仍显不足。

📌 **核心摘要**

1. 要解决什么问题：现有查询式通用声音分离（USS）模型依赖大规模弱标注、事件高度共现的野外数据，导致模型学习到目标声音与背景噪声的虚假关联，产生严重的残留干扰，且高昂的训练成本阻碍了研究的可复现性。
2. 方法核心是什么：提出一个全自动数据处理管道，从 12 个公开数据集中挖掘高纯度单事件片段，通过本体重构、多模态大模型细粒度标注、实例级纯化等步骤构建高质量源库，并基于语义兼容矩阵合成混合物，构建了 Hive 数据集（约 2.4k 小时原始音频，19.6M 条混合样本）。
3. 与已有方法相比新在哪里：首次系统性地解决了 USS 数据中标签-信号不对齐和事件共现偏差问题；引入语义兼容矩阵约束混合物生成，从训练信号层面切断了模型学习“背景即目标”的虚假捷径。
4. 主要实验结果如何：在 Hive 测试集上，AudioSep (Hive) 的 SDR 达 5.67 dB，远超原版 AudioSep 的 2.37 dB；FlowSep (Hive) 在感知质量上与 SAM-Audio 持平（LPAPS 4.25 vs. 5.21，FAD 0.84 vs. 1.03）。消融实验显示语义一致合成带来额外 1.0 dB SDR 提升，且受控捷径分析证实 Hive 显著降低了模型对标签共现的依赖（SDR 捷径差距从 1.41 dB 缩至 0.39 dB）。
5. 实际意义是什么：为资源受限的研究团队提供了一条可复现的路径来训练高性能 USS 模型，大幅降低数据和计算门槛，推动了音频分离领域从“暴力堆数据”到“数据质量优先”的范式转变。
6. 主要局限性是什么：语义兼容矩阵完全由 Qwen3-Omni 生成，其内部跨类别判断可能存在未被纠正的偏差，且矩阵的“真值”未经大规模人工校验；数据分布仍受限于源数据集，对极端声学环境或域外类别覆盖不足；合成混合物未引入真实房间脉冲响应，声学真实感弱于真实录音。

🔗 **开源详情**

- 项目主页：https://cslikai.cn/Hive
- 代码：论文声明在项目主页提供。
- 数据集：论文声明在项目主页提供。
- 模型权重：论文声明在项目主页发布。
- Demo：项目主页内含音频样本与频谱可视化。
- 复现材料：论文正文与附录提供了详细的训练配置（第5节 Implementation Details）、数据合成流程（第3节 Single-Event Data Collection Pipeline）、语义一致性矩阵生成方法（附录B.3）以及完整的类别统计与分布（附录A、E）。
- 论文中引用的开源项目：
  - SAM-Audio：未明确提及具体仓库链接。
  - Qwen3-Omni：https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Instruct
  - 音频标签模型（基于Zipformer的Sherpa ONNX）：https://k2-fsa.github.io/sherpa/onnx/audio-tagging/index.html

📄 [OpenReview](https://openreview.net/forum?id=vCc2NAe0OS)

---

### 6. [SAM Audio: Segment Anything in Audio](/audio-paper-digest-blog/posts/2026-07-04-sam-audio-segment-anything-in-audio)

🔥 **9.2/10** | 前10% | #音频分离 | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.4/1.5 | 影响 1.4/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Bowen Shi（Meta SuperIntelligence Labs）
- 通讯作者：Bowen Shi（Meta SuperIntelligence Labs）、Andros Tjandra（Meta SuperIntelligence Labs）
- 作者列表：Bowen Shi、Andros Tjandra、John Hoffman、Helin Wang、Yi-Chiao Wu、Luya Gao、Julius Richter、Matthew Le、Apoorv Vyas、Sanyuan Chen、Christoph Feichtenhofer、Piotr Dollár、Wei-Ning Hsu、Ann Lee（均来自 Meta SuperIntelligence Labs）

💡 **毒舌点评**

SAM AUDIO以统一架构首次整合文本、视觉和时间跨度提示，在通用音频分离任务上取得了令人瞩目的SOTA，其精心设计的伪标签数据流水线和大规模评测体系颇具工程借鉴价值。然而，视觉提示的实际表现远逊于文本提示，且整个系统严重依赖大规模预训练和高性能硬件，在实时性或低资源场景下的适用性仍存疑。

📌 **核心摘要**

1. 论文旨在解决通用音频源分离中可控性差、提示模态单一的问题，提出了首个统一文本、视觉和时间跨度提示的多模态分离基础模型 SAM AUDIO。
2. 方法核心是基于扩散Transformer（DiT）的流匹配生成模型，在DAC-VAE潜空间内同时生成目标音频和残差音频，并通过跨模态编码器将文本、视频掩码和帧级时间令牌注入模型。
3. 与已有方法相比，SAM AUDIO 创新性地引入了时间跨度提示（span prompting）实现精确帧级控制，并通过大规模伪标签数据引擎和特殊训练策略覆盖开放域、无需固定类别限制。
4. 在涵盖语音、音乐、乐器、通用声效等 700+ 样本的 SAM AUDIO-BENCH 上，SAM AUDIO 在主观 OVR 评分上全面领先所有通用及专用基线：例如在通用声效上 OVR=3.59，相对公开模型 SoloAudio 的 2.97 净胜率 36%；在专业乐器分离上 OVR=4.45，超越 Demucs (4.26) 和 AudioShake (4.28)。实验结果表格如下：

| 任务 | 模型 | SAJ | CLAP | OVR |
|------|------|-----|------|-----|
| 通用SFX | AudioSep | 2.63 | 0.25 | 2.88 |
|  | FlowSep | 2.36 | 0.21 | 2.65 |
|  | SoloAudio | 3.29 | 0.25 | 2.97 |
|  | SAM AUDIO | 4.35 | 0.31 | 3.59 |
| 语音 | AudioSep | 2.93 | 0.28 | 2.85 |
|  | FlowSep | 2.18 | 0.20 | 2.14 |
|  | SoloAudio | 3.45 | 0.30 | 3.32 |
|  | AudioShake | 3.90 | 0.28 | 3.95 |
|  | ElevenLabs | 3.79 | 0.25 | 3.72 |
|  | Auphonic | 4.32 | 0.27 | 4.08 |
|  | LalalAI | 3.77 | 0.33 | 3.92 |
|  | SAM AUDIO | 4.67 | 0.35 | 4.29 |
| 说话人 | AudioSep | 2.50 | 0.17 | 2.79 |
|  | FlowSep | 1.85 | 0.09 | 2.13 |
|  | SoloAudio | 2.26 | 0.19 | 2.45 |
|  | AudioShake | 3.28 | 0.14 | 3.51 |
|  | SAM AUDIO | 4.51 | 0.18 | 4.15 |
| 音乐 | AudioSep | 3.47 | 0.27 | 3.51 |
|  | FlowSep | 2.73 | 0.18 | 2.90 |
|  | SoloAudio | 2.68 | 0.21 | 2.47 |
|  | Demucs | - | - | 4.26 |
|  | MoisesAI | 3.79 | 0.27 | 3.90 |
|  | SAM AUDIO | 4.45 | 0.26 | 4.05 |
| 专业乐器 | Demucs | 4.48 | 0.15 | 4.26 |
|  | AudioShake | 3.87 | 0.29 | 4.28 |
|  | SAM AUDIO | 4.82 | 0.28 | 4.45 |

视觉提示同样取得最佳，但整体主观得分低于文本提示（如通用声效2.61 vs 3.59），表明视觉训练数据的质量和规模仍有待提升。

5. 该工作为内容创作、媒体制作、辅助听觉等场景提供了高可控、开放域的分离工具，提出的 SAM AUDIO-BENCH 和参考‑无感的 SAM AUDIO-JUDGE 评估框架有望成为领域评测新标准。
6. 主要局限性包括：视觉提示性能受限于训练数据质量和数量，对屏幕外声源无效；模型较大且推理延迟较高（7.3s/10s），难以直接用于实时任务；多模态训练流程复杂，对数据资源要求极高。此外，未评估多语言文本提示泛化性，SAM AUDIO-JUDGE可能存在对特定模型伪影的过拟合风险。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及。
- 数据集：论文明确宣称将发布 SAM AUDIO-BENCH 基准以及 SAM AUDIO-JUDGE 评估模型。文中使用的训练数据包含公开数据集（如 AudioSet、MUSDB18、AVSpeech 等），但未给出统一的数据集仓库地址。当前无下载链接。
- Demo：论文中未提及。
- 复现材料：论文附录 C 给出了模型配置、训练超参数与数据构造细节，但未提供代码或模型检查点。
- 论文中引用的开源项目：论文提及了多个开源项目（如 Demucs、Spleeter、AudioSep、FlowSep、CLAPSep、SoloAudio、DAVIS-Flow、MossFormer2、Tiger、Fast-GeCo、AV-MossFormer2、IIANet、CLIPSep 等），但未提供这些项目的直接代码仓库链接，相关出处均见于论文参考文献列表。

📄 [OpenReview](https://openreview.net/forum?id=Q4Cca8N7na)

---

### 7. [MECAT: A Multi-Experts Constructed Benchmark for Fine-Grained Audio Understanding Tasks](/audio-paper-digest-blog/posts/2026-07-04-mecat-a-multi-experts-constructed-benchmark-for)

🔥 **9.1/10** | 前10% | #音频理解 | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 影响 1/1.5 | 开源 1.5/1.5

👥 **作者与机构**

- 第一作者：Yadong Niu（Xiaomi Inc, Beijing, China）
- 通讯作者：Yadong Niu（niuyadong@xiaomi.com）、Heinrich Dinkel（dinkelheinrich@xiaomi.com）、Tianzi Wang（twang@se.cuhk.edu.hk）
- 作者列表：Yadong Niu（Xiaomi Inc）、Tianzi Wang（Xiaomi Inc、The Chinese University of Hong Kong）、Heinrich Dinkel（Xiaomi Inc）、Xingwei Sun（Xiaomi Inc）、Jiahao Zhou（Xiaomi Inc）、Gang Li（Xiaomi Inc）、Jizhong Liu（Xiaomi Inc）、Xunying Liu（The Chinese University of Hong Kong）、Jian Luan（Xiaomi Inc）

💡 **毒舌点评**

本文在音频理解基准的“标注粒度”和“评估区分度”两个痛点上做出了有针对性的努力。多专家+CoT的标注流水线和DATE指标确实比现有方案更精细，对暴露当前LALMs的“语音中心偏见”和“声学属性忽视”问题有实际贡献。但作为一篇以基准为核心卖点的论文，其数据源取自ACAV100M，标注流水线核心强依赖DeepSeek-R1这一闭源商业LLM，这直接动摇了基准作为“黄金标准”应具备的独立性和可复现性。10秒音频片段的设定也使其在长时序推理评测上无法与现有长音频基准形成互补，格局略显不足。

📌 **核心摘要**

1. 本文要解决音频理解评测中的两个核心问题：现有基准的标注粗粒度（缺乏多视角细节、视角单一）和现有指标无法区分“笼统正确的描述”与“精细准确的描述”。
2. 方法提出MECAT基准：通过集成多个专用音频专家模型（覆盖语音、音乐、声音事件、声学属性），结合Chain-of-Thought (CoT) 大语言模型（DeepSeek-R1）推理，自动生成多视角、细粒度的音频描述（Caption）和开放域问答对（QA）。同时配套提出DATE指标，结合基于TF-IDF加权（Embedding级别）的单样本语义相似度和跨样本判别度来综合评价文本质量。
3. 与手工标注基准（如Clotho）相比，MECAT更注重自动化与多视角；与LLM自动标注基准（如AutoACD）相比，MECAT引入多专家模型提供细粒度证据，而非依赖粗糙元数据；在指标层面，DATE通过显式惩罚通用词和奖励判别性，弥补了FENSE等嵌入指标的不足。
4. 在MECAT-Caption任务上，顶级专有模型Gemini-3-Pro得分53.1%，开源模型Qwen3-Omni-Flash-1201得分52.9%，均显著高于传统音频描述模型（如Pengi 29.4%）。MECAT-QA任务中，所有模型在“质量评估”（QAS）子项上得分均低于40%，暴露了当前LALMs忽略低层声学属性的通病。
5. 实际意义：为社区提供了一个更严格、细粒度的评测基准和高效自动化指标，能有效暴露当前模型在声学属性、音乐理解、抗幻觉和跨域混合场景下的短板，为模型迭代提供了明确的指引。
6. 主要局限：音频时长限制在10秒内，不评估长时序推理；标注流水线强依赖上游专家模型和商业LLM (DeepSeek-R1)，无法完全消除残余误差与模型偏见；DATE指标在高度同质化音频集上的判别力会减弱，且存在嵌入度量的固有问题（如实体互换不敏感）。

🔗 **开源详情**

- 代码：https://github.com/xiaomi-research/mecat
- 模型权重：未提及
- 数据集：MECAT Benchmark（从公开的CC许可音频子集ACAV100M构建，通过代码仓库发布）
- Demo：未提及
- 复现材料：未提及
- 论文中引用的开源项目：未提及

### 标签
#音频理解 #基准数据集 #评估指标 #音频描述 #听觉问答
主任务标签：#音频理解
主方法标签：#多模态模型
补充标签：#自动标注 #大语言模型 #链式推理 #语音 #音乐 #声学事件检测

📄 [OpenReview](https://openreview.net/forum?id=MgjXTLpmgf)

---

### 8. [$\tau$-Voice: Benchmarking Full-Duplex Voice Agents on Real-World Domains](/audio-paper-digest-blog/posts/2026-07-04-tau-voice-benchmarking-full-duplex-voice-agents)

🔥 **9.1/10** | 前10% | #语音交互 | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 影响 1.2/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Soham Ray（Sierra.ai, USA）
- 通讯作者：Victor Barres（Sierra.ai, USA; 另外 Soham Ray、Keshav Dhandhania 亦列通讯）
- 作者列表：Soham Ray（Sierra.ai, USA）、Keshav Dhandhania（Sierra.ai, USA）、Victor Barres（Sierra.ai, USA）、Karthik Narasimhan（Princeton University, USA）

💡 **毒舌点评**

这是一个填补空白的有力基准工作，巧妙地将对话动态测量与硬核任务完成揉在一起，提出的离时钟时间解耦框架虽不惊天动地，但工程上有可贵的可控性。然而论文对语音生成质量本身不评估，且用TTS模拟真实口音的说服力打折扣，实验仅英文、集中三大闭源模型也限制了结论的泛化性。好在小众但尖锐的声学消融实验给无障碍评估敲了警钟。

📌 **核心摘要**

1. 问题：现有语音代理评测要么只测对话动态，要么只测任务完成，没有同时结合真实音频环境、全双工会话和复杂工具调用。τ-Voice 扩展 τ2-bench，填补了这一空白。
2. 方法核心：基于 tick 的仿真协调器，将仿真时间与真实时间解耦，使得用户模拟器可以用最强大的 LLM 而不受实时约束；并提供可配置的口音、背景噪声、丢帧、打断策略等音频环境。
3. 新颖性：首个将可验证的任务完成（数据库状态比对）、全双工声学交互和可控的声学现实三者合一的语音代理基准。
4. 主要实验结果：在 278 个任务上，GPT-5（reasoning）文本 pass@1 为 85%，最佳语音模型（grok-voice）干净条件下 51%，现实条件下 38%，是文本能力的 30-45%。口音是最大退化因素；79-90% 的失败归因于代理本身。
5. 实际意义：为工业界语音代理的开发提供了标准化、可复现的评测床，并明确指出了当前语音模型在认证、拼写、多步任务跟随方面的具体短板。
6. 主要局限性：仅英文、使用 TTS 模拟口音而非真实录音，未评估代理自身语音生成质量，用户模拟器的“完美记忆”和瞬时工具调用略高于真人用户。模拟器语音韵律真实感评分为 2.6/4，整体真实感 3.1/4。

🔗 **开源详情**

- 代码：https://github.com/sierra-research/tau2-bench
- 模型权重：论文中未提及（评估使用商业闭源API：OpenAI gpt‑realtime‑1.5、Google gemini‑live‑2.5‑flash‑native‑audio、xAI grok‑voice‑agent，无公开权重）
- 数据集：基于 τ2‑bench 的 278 个任务（Retail 114、Airline 50、Telecom 114），添加语音端用户指令后构建，未单独发布新数据集；任务配置、用户指令、语音人物（personas）系统提示、音频效果配置、turn‑taking 与 backchannel 决策提示、代理系统提示等均可通过上述代码仓库获取
- Demo：论文中未提及
- 复现材料：代码仓库包含完整的全双工编排器、语音用户模拟器、仿真参数（tick 时长、turn‑taking 阈值）、音频效果配置（背景噪声、突发噪声、帧丢失、电话压缩等），详细附属配置见论文附录 A‑I。模拟器 TTS 使用 ElevenLabs v3（需用户自行提供API密钥）。
- 论文中引用的开源项目：
  - τ‑bench（Yao et al., 2025）：https://openreview.net/forum?id=roNSXZpUDN
  - τ2‑bench（Barres et al., 2025）：https://github.com/sierra-research/tau2-bench
  - Full‑Duplex‑Bench（Lin et al., 2025）：https://arxiv.org/abs/2503.04721
  - Full‑Duplex‑Bench‑V2（Lin et al., 2026）：https://arxiv.org/abs/2510.07838
  - TalkingTurns（Arora et al., 2025）：https://openreview.net/forum?id=2e4ECh0ikn
  - VoiceBench（Chen et al., 2026）：https://direct.mit.edu/tacl/article/doi/10.1162/tacl.a.628/136245
  - VocalBench（Liu et al., 2026）：https://arxiv.org/abs/2505.15727
  - Audio MultiChallenge（Gosai et al., 2025）：https://arxiv.org/abs/2512.14865
  - VoiceAgentBench（Jain et al., 2026）：https://arxiv.org/abs/2510.07978
  - AudioBench（Wang et al., 2025a）：会议论文 (NAACL 2025)
  - ParaS2S（Yang et al., 2026）：https://openreview.net/forum?id=CcmDDh070o
  - WildSpeech‑Bench（Zhang et al., 2025）：https://arxiv.org/abs/2506.21875
  - Moshi（Défossez et al., 2024）：https://arxiv.org/abs/2410.00037
  - LLaMA‑Omni（Fang et al., 2025）：https://openreview.net/forum?id=PYmrUQmMEw
  - SALMONN‑omni（Yu et al., 2025）：https://openreview.net/forum?id=AsRB5nmlOD
  - MiniCPM‑o 4.5（OpenBMB, 2026）：https://huggingface.co/openbmb/MiniCPM-o-4_5
  - Qwen3‑Omni（Xu et al., 2025）：https://arxiv.org/abs/2509.17765
  - PersonaPlex（Roy et al., 2026）：https://arxiv.org/abs/2602.06053
  - NTPP（Wang et al., 2025b）：https://arxiv.org/abs/2506.00975

📄 [OpenReview](https://openreview.net/forum?id=2Oj6fg0m1j)

---

### 9. [PhaseCoder: Microphone Geometry-Agnostic Spatial Audio Understanding for Multimodal LLMs](/audio-paper-digest-blog/posts/2026-07-04-phasecoder-microphone-geometry-agnostic-spatial)

🔥 **8.7/10** | 前25% | #空间音频 | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 影响 1.2/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Artem Dementyev (Google DeepMind, Cambridge, USA)
- 通讯作者：Artem Dementyev (Google DeepMind, Cambridge, USA)
- 作者列表：Artem Dementyev (Google DeepMind, Cambridge, USA)、Wazeer Zulfikar (Media Lab, MIT, Cambridge, USA)、Sinan Hersek (Google AR, Seattle, WA)、Pascal Getreuer (Google DeepMind, Cambridge, USA)、Anurag Kumar (Google DeepMind, Cambridge, USA)、Vivek Kumar (Google DeepMind, Cambridge, USA)

💡 **毒舌点评**

在LLM普遍缺乏空间听觉的当下，提出几何无关的空间音频编码器并与Gemma集成，切入点精准，但实验验证过分依赖合成数据，如同在声学真空里练出绝世武功，一到真实环境的混响、遮挡和噪声面前就难免露怯。定向转录准确率仅44%-52%，离实用还很遥远，更像是给LLM装上了一副度数不太准的眼镜。

📌 **核心摘要**

当前多模态LLM缺乏对真实空间音频场景的理解能力，而现有空间音频模型又受限于固定的麦克风阵列几何，无法跨设备泛化。论文提出PhaseCoder，一种仅基于Transformer架构的空间音频编码器，通过输入多通道原始音频与对应的麦克风云台坐标，实现麦克风几何无关的声源定位与空间嵌入生成。创新之处在于首次将此类几何无关的空间音频编码器与LLM（Gemma 3n 4B）集成，通过将压缩后的空间音频令牌以专用段落的形式注入LLM的输入序列，并结合课程式LoRA微调，使LLM初步具备了空间推理、空间转录与定向转录等复杂能力。实验表明，PhaseCoder在LOCATA等真实数据集上的方位角定位精度（MAE 7.44°）可比肩当前最优的专用模型GI-DOAEnet，且计算效率更高；经微调的Gemma模型在空间推理准确率上从随机水平提升至76.76%，定向转录的WER显著下降。实际意义在于为当前几乎无所不在的多麦克风消费电子设备提供了一种统一的“空间听觉接口”，有助于推动具身智能与下一代人机交互的发展。主要局限性在于模型完全依赖合成数据进行训练，距离估计精度不足，且对动态声源、多源复杂场景及非语音声事件的泛化能力仍较初步。

🔗 **开源详情**

- 代码：https://github.com/google-deepmind/phasecoder
- 模型权重：论文声明模型权重随代码仓库一起发布，具体访问方式需查看仓库说明。
- 数据集：论文训练和评估使用了多个公开数据集：LibriSpeech (https://www.openslr.org/12)、Freesound (https://freesound.org/)、RSL2019、LOCATA (https://locata.github.io/)、TIMIT、LibriSpeech-PC (https://github.com/NVIDIA/LibriSpeech-PC)。核心的合成训练数据（RIR、空间QA对）及生成代码均未独立提供公开下载。
- Demo：论文中未提及。
- 复现材料：提供了详细的训练配置（两阶段策略、超参数、调度等）和LLM微调的全部prompt模板；未提供完整的训练和评估脚本，以及预生成的数据集。
- 论文中引用的开源/第三方项目：Gemma 3n (https://ai.google.dev/gemma)、GI-DOAEnet（未提供代码链接）、PyTorch (https://pytorch.org)、fvcore (https://github.com/facebookresearch/fvcore)、BAT（Zheng et al., 2024, 未提供代码链接）。

📄 [OpenReview](https://openreview.net/forum?id=tU3raVqvYe)

---

### 10. [BAT: Better Audio Transformer Guided by Convex Gated Probing](/audio-paper-digest-blog/posts/2026-07-04-bat-better-audio-transformer-guided-by-convex)

🔥 **8.6/10** | 前25% | #音频分类 | 创新 1.5/2 | 严谨 1.3/1.5 | 实验 1.4/1.5 | 影响 1/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Houtan Ghaffari（Ghent University）、Lukas Rauch（University of Kassel，现就职于 Earth Species Project）（并列一作）
- 通讯作者：Houtan Ghaffari（Ghent University）、Lukas Rauch（University of Kassel）
- 作者列表：Houtan Ghaffari（Ghent University）、Lukas Rauch（University of Kassel，现就职于 Earth Species Project）、Christoph Scholz（University of Kassel，Fraunhofer IEE）、Paul Devos（Ghent University）
- 发表于 ICML 2026，首尔，韩国

💡 **毒舌点评**

论文以鲜明的"探测优先于微调"的评估哲学切入，提出的 CGP 和 BAT 形成了一套从评估到模型设计的闭环，实验维度相当完整且可复现性意识强。不过，其 AS-2M 的最终微调性能未能超越已报告 SOTA（Reported SSLAM 50.2 vs BAT 48.85），且性能提升的来源存在一定"调参红利"嫌疑，部分结论的泛化性仍待更严格的跨框架验证。

📌 **核心摘要**

1. 要解决的问题：音频自监督学习（SSL）依赖微调进行评估，导致性能提升常被优化技巧混淆，且现有简单探测无法忠实反映嵌入质量；同时当前 SOTA 模型（EAT、SSLAM）基于不透明的旧 fairseq 实现，可复现性差。
2. 方法核心：提出 Convex Gated Probing（CGP），一种基于原型、可学习门控聚合所有层的冻结评估方案；并以此为指导，改进预处理、引入门控注意力、更换更强解码器，构建 Better Audio Transformer（BAT）。
3. 与已有方法的新颖之处：CGP 通过凸门控利用全部层，并用 min-max 池化从原型激活中捕获空间信息，不同于仅用最后一层或简单拼接的探测（如 VQT、Head2Toe）；BAT 将大语言模型中的 sigmoid 门控引入 ViT 注意力，消除 attention sink 并解放 end-of-block 作为 SSL 目标，同时用 ViT 解码器将语义信息推向后层。
4. 主要实验结果：CGP 显著缩小了探测与微调的差距（AudioSet-20k mAP 从线性探测 17~18 提升至 34~37）；BAT 在多个任务上刷新 SOTA，例如 AS-2M 微调 mAP 48.85、ESC-50 准确率 98.81±0.9%，详见下方表格。
5. 实际意义：为音频 SSL 提供了一种可靠、高效且可复现的评估范式，并提供标准化的强基线实现，降低后续研究门槛。
6. 主要局限性：AS-2M 的微调结果未能复现已报告的最佳值（Reported SSLAM 50.2），模型的提升可能部分源于更好的超参数调整；CGP 对原型数量敏感，不同数据集下门控偏好变化较大；语义"后移"不一定对所有 SSL 范式适用。

### 主要实验结果表

Table 5 核心结果：各方法在多个基准上的性能（Finetune / CGP / PB / LP）

| Method | Model | AS-2M mAP | AS-2M F1 | AS-20k mAP | AS-20k F1 | ESC-50 Acc | ESC-50 mAP | SC-v2 Acc | SC-v2 mAP | SED frame-mAP | SED onset-F1 | HSN mAP | HSN F1 |
|--------|-------|-----------|----------|------------|-----------|------------|------------|-----------|-----------|---------------|--------------|---------|--------|
| Finetune | BAT | 48.85 | 36.62 | 41.59 | 38.20 | 98.81±0.9 | 95.95±1.2 | 99.80 | 99.09 | 99.71 | 98.20 | 47.05 | 34.07 |
| Finetune | SSLAM | 47.82 | 36.33 | 40.26 | 38.00 | 98.21±1.0 | 94.85±1.7 | 98.30 | 96.87 | 99.59 | 97.13 | 44.20 | 31.26 |
| Finetune | EAT | 47.84 | 36.38 | 40.37 | 38.03 | 98.54±1.0 | 95.05±1.4 | 97.50 | 96.43 | 99.70 | 97.25 | 42.32 | 31.98 |
| Finetune | BEATs | 47.02 | 36.02 | 36.73 | 32.18 | 98.01±1.4 | 94.35±2.3 | 99.77 | 98.85 | 99.67 | 97.34 | 18.59 | 13.00 |
| CGP | BAT | 45.03 | 37.94 | 37.70 | 35.22 | 98.13±1.2 | 94.55±1.7 | 99.80 | 98.92 | 99.15 | 94.27 | 41.53 | 29.49 |
| CGP | SSLAM | 42.75 | 34.22 | 34.53 | 32.06 | 97.25±1.5 | 92.55±2.2 | 99.51 | 98.08 | 97.97 | 90.64 | 36.14 | 25.75 |
| CGP | EAT | 42.98 | 34.48 | 35.34 | 32.81 | 97.53±1.2 | 93.10±1.8 | 99.61 | 98.19 | 98.31 | 90.03 | 37.90 | 24.53 |
| CGP | BEATs | 41.89 | 33.41 | 33.01 | 31.53 | 95.85±0.9 | 89.15±1.0 | 99.45 | 97.91 | 98.65 | 93.94 | 22.78 | 9.30 |
| PB | BAT | 42.94 | 35.94 | 35.98 | 33.88 | 98.95±0.7 | 95.75±0.7 | 99.76 | 98.68 | 98.03 | 91.52 | 36.14 | 26.28 |
| PB | SSLAM | 38.53 | 31.57 | 32.01 | 30.50 | 96.38±1.3 | 90.70±1.4 | 98.04 | 95.84 | 93.87 | 80.34 | 28.20 | 15.52 |
| PB | EAT | 39.08 | 31.81 | 32.87 | 31.11 | 96.83±1.1 | 91.45±1.7 | 98.52 | 96.50 | 95.15 | 84.77 | 26.47 | 18.63 |
| PB | BEATs | 37.73 | 30.42 | 31.62 | 28.43 | 95.31±1.4 | 88.75±1.8 | 99.27 | 97.47 | 97.95 | 90.48 | 17.32 | 3.85 |
| LP | BAT | 31.19 | 20.21 | 26.15 | 22.41 | 95.25±1.3 | 89.20±2.1 | 75.74 | 78.12 | 94.21 | 82.38 | 9.21 | 5.28 |
| LP | SSLAM | 26.96 | 17.70 | 21.14 | 17.61 | 94.10±0.9 | 87.65±1.9 | 56.28 | 70.22 | 86.33 | 66.09 | 8.52 | 3.95 |
| LP | EAT | 27.30 | 18.21 | 21.60 | 16.98 | 91.07±0.7 | 84.75±1.8 | 74.31 | 78.03 | 88.67 | 70.21 | 10.77 | 2.75 |
| LP | BEATs | 31.40 | 22.05 | 26.26 | 23.17 | 93.07±1.1 | 86.50±1.6 | 92.60 | 90.44 | 94.61 | 81.72 | 5.33 | 4.79 |

注：完整 Table 5 还包含 VQT、H2T、LCGP 方法的结果，因篇幅限制详见原文。Reported SOTA：SSLAM AS-2M 50.2，EAT AS-2M 48.6。

Table 6：LibriSpeech 100h 探测 ASR 结果（WER/CER，测试集）

| Metrics | BAT | SSLAM | EAT | BEATs |
|---------|-----|--------|-----|-------|
| CER | 7.27 | 10.06 | 9.26 | 8.12 |
| WER | 22.18 | 29.05 | 27.14 | 24.67 |

消融实验（AS-20k CGP 性能，原文 Table 2/3/4 整合）

| 配置 | SSL 目标 | 门控注意力 | 解码器类型 | mAP | F1 |
|------|----------|------------|-----------|-----|-----|
| EAT 复现前端 | MLP | ✗ | CNN | 34.86 | 24.28 |
| BAT 前端 | MLP | ✗ | CNN | 35.03 | 24.75 |
| BAT 前端 | EOB | ✗ | CNN | 34.60 | 25.00 |
| BAT 前端 | MLP | ✓ | CNN | 35.09 | 26.12 |
| BAT 前端 | EOB | ✓ | CNN | 35.42 | 27.13 |
| BAT 前端 | EOB | ✓ | ViT-6h (6头, MLP ratio 2) | 37.43 | 28.91 |
| BAT 前端 | EOB | ✓ | ViT-12h (12头, MLP ratio 4) | 37.52 | 29.11 |

附录 C：ViT-Small 消融（AudioSet）

| Method | Model | AS-2M mAP | AS-2M F1 | AS-20k mAP | AS-20k F1 |
|--------|-------|-----------|----------|------------|-----------|
| Finetune | BAT-S | 45.77 | 30.86 | 37.55 | 34.38 |
| CGP | BAT-S | 41.63 | 34.43 | 33.68 | 31.70 |
| PB | BAT-S | 40.19 | 32.26 | 32.63 | 29.27 |
| LP | BAT-S | 25.40 | 12.97 | 21.26 | 11.45 |

🔗 **开源详情**

- 代码：https://github.com/houtan-ghaffari/BAT_ICML2026（论文第 1 页声明）
- 模型权重：论文中未提及单独的模型权重下载链接（预训练权重等可能随代码仓库提供，但未给出 HuggingFace 或 ModelScope 地址）
- 数据集：论文使用了多个公开数据集（AudioSet、ESC-50、Speech Commands V2、BirdSet 中的 HSN、DCASE 2016 Task 2、LibriSpeech），但未提供这些数据集的直接下载链接。
- Demo：论文中未提及
- 复现材料：论文附录 A（Table 7）给出了完整的预训练、微调和探测超参数配置；附录 E 声明跨设备可复现性；代码仓库提供可复现的实现。
- 论文中引用的开源项目：fairseq（https://github.com/facebookresearch/fairseq）、TorchAudio（https://pytorch.org/audio）、PyTorch（https://pytorch.org）、Audio-MAE（https://github.com/facebookresearch/AudioMAE）、BEATs（https://github.com/microsoft/unilm/tree/master/beats）等。

📄 [OpenReview](https://openreview.net/forum?id=9DfsHAFE5l)

---

### 11. [SPEAR: A Unified SSL Framework for Learning Speech and Audio Representations](/audio-paper-digest-blog/posts/2026-07-04-spear-a-unified-ssl-framework-for-learning-speech)

🔥 **8.4/10** | 前25% | #音频理解 | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 影响 1.3/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者/通讯作者：Xiaoyu Yang（Department of Engineering, University of Cambridge）
- 作者列表：Xiaoyu Yang（University of Cambridge）、Yifan Yang（Shanghai Jiao Tong University）、Zengrui Jin（Tsinghua University）、Ziyun Cui（Tsinghua University, Shanghai Artificial Intelligence Laboratory）、Wen Wu（Shanghai Artificial Intelligence Laboratory）、Baoxiang Li（Shanghai Artificial Intelligence Laboratory）、Chao Zhang（Tsinghua University, Shanghai Artificial Intelligence Laboratory）、Phil Woodland（University of Cambridge）

💡 **毒舌点评**

SPEAR 用多码本矢量量化（MVQ）这把快刀，把语音和音频两个域的知识剁成离散 token，再让 Zipformer 用掩码预测全吞下去。思路直接有效，在 SUPERB 和 HEAR 上双线刷榜，token mixing 更是让分离任务表现惊艳。但整个框架的命门在于强依赖教师模型质量，训练 pipeline 重得像个工程怪兽，且音频数据仅 13k 小时，想在纯音乐或环境声上压制音频大模型还差火候。说是统一框架，但目前还是个理解专才，生成任务的门都没摸到。

📌 **核心摘要**

SPEAR 旨在解决语音和通用音频表示学习中长期存在的领域割裂问题。现有 SSL 模型要么专注语音的语义/副语言信息，要么专注音频的细节声学模式，难以在单一编码器中同时登顶。SPEAR 的核心是将两个领域专用教师模型（语音用 WavLM Large，音频用 Dasheng 1.2B）的连续表示，通过多码本矢量量化（MVQ）转化为细粒度离散 token，再用掩码预测任务训练学生编码器（Zipformer）去同时预测这两套离散 token。与先前纯特征匹配的蒸馏方法（如 USAD、MT2KD）不同，SPEAR 利用离散接口避免了跨空间对齐带来的破坏性干扰，并引入非对称双域损失和 token mixing 机制来进一步提升复杂声学场景下的鲁棒性。实验上，SPEARs Large 在 SUPERB 基准的 15 项任务中有 12 项超过其教师 WavLM Large，在 HEAR 基准上也取得了顶级得分；统一模型 SPEARs+a 在保持强语音性能的同时大幅改善了音频理解能力，且始终优于 USAD。实际意义上，SPEAR 提供了一个可同时处理语音和音频事件的通用前端，有望简化多模态音频系统的搭建。主要局限包括：依赖预训练的强教师模型造成额外计算开销；音频预训练数据占比小，在纯音乐和某些环境声音任务上仍落后于以音频为主的大模型；尚未涵盖生成任务。

🔗 **开源详情**

- 代码：论文中提及代码将与预训练模型一并发布（"The code and pre-trained models will be released"），但未在文中给出明确的 GitHub 仓库链接。
- 模型权重：https://huggingface.co/collections/marcoyang/spear-encoders （已在论文首页脚注给出）
- 数据集：论文中未提供单独的数据集下载链接，但列出了使用的公开语料库：Libriheavy (Kang et al., 2024), GigaSpeech (Chen et al., 2021), VoxPopuli (en) (Wang et al., 2021), Yodas-granary (en) (Koluguri et al., 2025), AudioSet (Gemmeke et al., 2017), VGGsound (Chen et al., 2020), Freesound (Wu et al., 2023), Music4all (Santana et al., 2020), MTG-Jamendo (Bogdanov et al., 2019)
- Demo：论文中未提及
- 复现材料：论文在附录 B 中提供了详细的模型配置（表 8）、预训练超参数（表 9）、微调配置（表 10），但缺少 MVQ 训练脚本和教师模型推理脚本的链接。
- 论文中引用的开源项目：WavLM, HuBERT, Dasheng, ATST-frame, MVQ (multi‑codebook vector quantisation), Zipformer, SUPERB benchmark, HEAR benchmark, EncodecMAE, USAD, BEATs, EAT 等（具体链接未在文中列出，但均为公开知名项目）

📄 [OpenReview](https://openreview.net/forum?id=vHaaDCLF0M)

---

### 12. [Dual-View Predictive Diffusion: Lightweight Speech Enhancement via Spectrogram-Image Synergy](/audio-paper-digest-blog/posts/2026-07-04-dual-view-predictive-diffusion-lightweight-speech)

🔥 **8.4/10** | 前25% | #语音增强 | 创新 1.3/2 | 严谨 1.1/1.5 | 实验 1.2/1.5 | 影响 1/1.5 | 开源 1.4/1.5

👥 **作者与机构**

- 第一作者：Ke Xue（北京理工大学网络空间安全学院）
- 通讯作者：Rongfei Fan（北京理工大学网络空间安全学院）
- 作者列表：Ke Xue（北京理工大学网络空间安全学院）、Rongfei Fan（北京理工大学网络空间安全学院）、Kai Li（清华大学计算机科学与技术系、BNRist）、Shanping Yu（北京理工大学网络空间安全学院）、Puning Zhao（中山大学网络空间安全学院）、Jianping An（北京理工大学网络空间安全学院）

💡 **毒舌点评**

亮点：在轻量级语音增强方向上，DVPD用不到PGUSE 40%的参数量和MACs，在大部分指标上实现了反超，效率-质量权衡玩得漂亮。TLB策略作为从图像扩散模型（FreeU）迁移到语音频谱的"拿来主义"式改造，以零训练成本的即插即用特性在多个U-Net扩散模型上生效，为后续语音扩散推理优化立了一个低成本标杆。短板：整体框架套壳"预测+扩散并行分支"并未跳出现有范式，更像在PGUSE的骨架上做了精巧的频谱感知化装修。TLB虽好，但其分层调参本质上是基于测试集PESQ的oracle选择，实际部署中DNSMOS的映射关系仅做了三档粗糙划分，严格来说存在一定的"test-set tuning"嫌疑，其在新场景下的无参考自适应能力还未被严格验证。论文的理论贡献更多在工程洞察（频谱物理先验编码）而非方法论突破，这使得其离真正顶会oral级影响力尚有一步之遥。

📌 **核心摘要**

1. 论文要解决的核心问题是：现有扩散语音增强模型将频谱图当作普通2D图像进行空间均匀处理，忽略了音频频谱内在的非均匀信息密度（低频谐波密集、高频能量稀疏）和强各向异性（水平和垂直维度分别对应谐波和瞬态），导致计算效率低、参数冗余大的问题。
2. 核心方法是提出DVPD（Dual-View Predictive Diffusion），从"视觉纹理"与"声学物理"双重视角设计轻量级语音增强框架，包含三个关键创新组件：（a）频率自适应非均匀压缩编码器（FANC），对0-2kHz不加压缩以保留谐波完整性，对2-4kHz、>4kHz频段以递增压缩比和异构膨胀卷积核进行差异化处理；（b）轻量级图像基础频谱感知模块（LISA），通过三阶段动态条纹卷积（沿频率轴和时间轴）捕获频谱的各向异性特征，其中动态核由全局上下文经过卷积和tanh生成；（c）训练无关无损增强策略（TLB），在推理阶段对U-Net的跳跃连接和主干特征按2kHz分界进行分频段调制，并根据输入样本的质量层级自适应地选择不同的放缩因子组合。
3. 与PGUSE等SOTA并行预测-扩散架构相比，DVPD的核心新颖性在于将频谱图的内在物理结构显式编码进网络设计中：FANC的非均匀压缩和LISA的各向异性动态卷积是对频谱声学特性的针对性建模，而非简单采用空间均匀的通用卷积。TLB策略将FreeU式的U-Net特征调制技巧迁移到语音增强，并针对语音频谱的低频谐波完整性要求和高频噪声残留问题做了分频段设计。
4. 主要实验结果如下表所示（WSJ0-UNI测试集）：

| Method | Para. | MACs | Type | PESQ↑ | ESTOI↑ | CSIG↑ | CBAK↑ | COVL↑ | WV-MOS↑ |
|---|---|---|---|---|---|---|---|---|---|
| Degraded | - | - | - | 1.67±0.60 | 0.70±0.18 | 2.41±1.15 | 1.92±0.60 | 2.01±0.87 | 1.79±2.13 |
| MP-SENet | 2.26M | 34.58G | P | 2.71±0.89 | 0.88±0.13 | 3.99±0.76 | 2.90±0.58 | 3.38±0.89 | 4.16±0.25 |
| PGUSE | 5.1M | 26.3G | D+P | 2.95±0.91 | 0.91±0.06 | 4.01±0.77 | 2.61±0.60 | 3.53±0.91 | 3.44±0.66 |
| DVPD (w/o TLB) | 1.9M | 10.2G | D+P | 2.99±0.88 | 0.91±0.12 | 4.06±0.71 | 2.93±0.57 | 3.43±0.87 | 4.16±0.25 |
| DVPD (w/ TLB) | 1.9M | 10.2G | D+P | 3.15±0.79 | 0.92±0.05 | 4.21±0.37 | 3.01±0.47 | 3.51±0.99 | 4.27±0.31 |

DVPD以1.9M参数、10.2G MACs在WSJ0-UNI上取得PESQ 3.15，显著超过PGUSE（5.1M, 26.3G MACs, PESQ 2.95）。即使不使用TLB策略，DVPD（2.99 PESQ）也已超过PGUSE，且纯预测分支DVPD-P仅0.61M参数、2.41G MACs即可达到与2.26M/34.58G MACs的MP-SENet相当的性能（PESQ 2.70 vs 2.71）。

跨数据集泛化实验（零样本迁移，仅WSJ0-UNI训练）中，DVPD在VBDMD、VBD-RB、WSJ0-CE3、WSJ0-RB四个OOD数据集上全面领先对比方法（MP-SENet、PGUSE、StoRM、SGMSE+），验证了双视角设计的泛化鲁棒性。

VBDMD去噪任务上DVPD达PESQ 3.35，仅次于MP-SENet的3.50，显著缩小了混合扩散架构与纯预测模型在这一简单信息无损场景下的性能差距。VBDMD-SR语音超分任务上DVPD以PESQ 4.15超过PGUSE的4.09。

消融实验揭示：移除LISA模块导致PESQ下降0.28（2.99→2.71），为所有组件中贡献最大者；使用退化相位替代预测相位导致PESQ大幅下降0.34（→2.65）；替换BBED SDE为OUVE SDE使PESQ降至2.89，验证了BBED在避免prior mismatch上的设计优势。

TLB分层增益实验表明，该策略对低质量样本（PESQ<2）的增益最显著，WSJ0-UNI上PESQ提升+0.22，VBDMD上提升+0.15。TLB可以迁移到StoRM（+0.06 PESQ）和PGUSE的U-Net变体（+0.20 PESQ）上并取得正向增益。

5. DVPD的实际意义在于：以极端轻量级（1.9M参数、10.2G MACs）的设计实现了超越更大模型的增强质量，为移动设备和嵌入式系统的实时语音增强提供了可行方案；TLB策略的免训练即插即用特性为零成本提升已有U-Net扩散模型的性能提供了通用工具。

6. 主要局限性：TLB的分层参数调优本质上是基于测试集PESQ的oracle分析（按2≤PESQ<3等分层后网格搜索最优参数组合），虽然论文尝试用DNSMOS作为无参考替代，但DNSMOS的三档阈值（<2.5/2.5-3.5/≥3.5）映射缺乏严格的校准验证，在新场景下分层错误率未知；仅测试了16kHz采样率场景，未验证全频带（48kHz）和跨语言性能；α融合策略为固定权重，未考虑不同时频区域的可靠性差异。

🔗 **开源详情**

- 代码：https://github.com/ke12345213/dvpd_demo （包含完整代码、预训练模型和音频demo）
- 模型权重：论文中提及代码仓库包含预训练模型权重；README中列有"Pre-trained Models"部分，提供模型下载
- 数据集：
  * WSJ0-UNI：基于WSJ0 (CSR-I)与WHAM!噪声等合成，需遵循原始数据集许可，论文未提供直接下载链接，仅描述了合成流程和畸变类型分布（表7）；
  * VoiceBank+DEMAND (VBDMD)：公开发布，论文未提供直接链接，原始数据集可从 https://datashare.ed.ac.uk/handle/10283/2829 获取；
  * VBDMD-REVERB (VBD-RB)：基于VBDMD合成的测试集，使用stereo reverberation算法（Schroeder & Logan, 2003），论文未提供链接；
  * VBDMD-SR：基于VBDMD经4kHz低通滤波合成的超分辨率测试集，论文未提供链接；
  * WSJ0-CHiME3 (WSJ0-CE3)：基于WSJ0与CHiME-3噪声合成，CHiME-3可从 https://www.chimechallenge.org/chime3 获取；
  * WSJ0-REVERB (WSJ0-RB)：通过pyroomacoustics合成的仿真混响测试集，论文未提供链接。
- Demo：https://github.com/ke12345213/dvpd_demo （提供了音频示例和可视化对比）
- 复现材料：论文正文与附录中给出了详细的训练配置、超参数、损失函数组成（含各分量的数学表达式）、推理参数（α=0.4, T_rs=0.12, N=3, BBED SDE k=2.6 c=0.51 T=0.999）、TLB三层参数组合表（附录G）；代码仓库提供完整的推理脚本和预训练权重；未提供单独的复现配置文件。
- 论文中引用的开源项目：
  * Conv-TasNet: https://github.com/naplab/Conv-TasNet （论文引用，未直接提供链接）
  * MP-SENet: https://github.com/yxlu-0102/MP-SENet （论文引用，未直接提供链接）
  * PGUSE / PGUSE-P: 论文中提到的SOTA模型，作者复现了U-Net兼容变体用于TLB迁移实验，未提供官方链接
  * BSRNN: https://github.com/zrqic/BSRNN （论文引用，未直接提供链接）
  * pyroomacoustics: https://github.com/LCAV/pyroomacoustics （用于合成WSJ0-RB）
  * flops-counter.pytorch: https://github.com/sovrasov/flops-counter.pytorch （用于计算MACs，论文脚注中给出链接）
  * WHAM!: https://wham.whisper.ai/ （用于WSJ0-UNI噪声采样，论文引用，未直接提供链接）
  * CHiME-3: https://www.chimechallenge.org/chime3 （用于WSJ0-CE3噪声，论文引用，未直接提供链接）
  * WSJ0 (CSR-I): 由LDC发布，需通过授权获取，未提供链接
  * FreeU: 论文中作为TLB策略参考的FreeU方法，未提供链接

📄 [OpenReview](https://openreview.net/forum?id=3qX5RS8kpJ)

---

### 13. [Unlocking Cross-Modal Biosignal Synthesis: A Temporally-Aware VAE-Diffusion Model](/audio-paper-digest-blog/posts/2026-07-04-unlocking-cross-modal-biosignal-synthesis-a)

🔥 **8.3/10** | 前25% | - | 创新 1.2/2 | 严谨 1.3/1.5 | 实验 1.2/1.5 | 影响 0.8/1.5 | 开源 1.5/1.5

👥 **作者与机构**

- 第一作者：Chenyang Xu（西安电子科技大学网络与信息安全学院）
- 通讯作者：Hao Wang（西安电子科技大学网络与信息安全学院，邮箱 haow@ieee.org）
- 作者列表：Chenyang Xu（西安电子科技大学网络与信息安全学院）、Dezhen Wang（同济大学计算机科学与技术学院）、Hao Wang（西安电子科技大学网络与信息安全学院）

💡 **毒舌点评**

这篇论文把VAE和latent diffusion拼了个不错的架子，在ECG-to-PCG的时序对齐上确实比纯Transformer和纯扩散模型强出一截，zero-shot迁移的结果也让人眼前一亮。但话说回来，论文对“为什么这个组合在这个任务上就是最优解”缺乏深层insight，Enhanced Condition Fusion和Temporal Attention这些组件在时序生成领域并不新鲜，更像是一次扎实的工程组合而非方法突破。尽管作者这次大方地开源了代码和模型，但整篇论文依然缺少任何形式的临床下游验证，却反复强调“clinically relevant timing”，这种野心与实际验证之间的鸿沟在严苛的ML+Health审稿中可能会被追着打。

📌 **核心摘要**

这篇论文瞄准一个很实际的临床工程问题：能不能仅从广泛可采集的ECG信号合成出高质量的PCG心音图，从而让心脏听诊不再依赖专用传感器。作者认为最大难点在于建模心电-心音之间复杂的机电耦合时序关系——纯回归模型（如Transformer）生成的心音太平滑、缺乏纹理，纯扩散模型又容易丢失ECG-PCG之间的精确时序对齐。

方法核心是一套三阶段的VAE-Diffusion混合架构：先用VAE把PCG压到低维隐空间作为“结构骨架”，再把条件扩散模型放在这个隐空间里做生成，最后通过一个双路径共享解码器把隐变量还原成心音波形。为了让ECG条件真正引导时序对齐，论文提出了Enhanced Condition Fusion（多尺度交叉注意力注入）和Temporal Attention Blocks（长程自注意力）两个组件，并且在Phase 3用联合微调把VAE隐空间和扩散先验对齐。

在EPHNOGRAM数据集上，论文报告的Pearson相关系数0.810、S1检测率95.95%、S1定位误差仅12.0ms，全面超过Transformer、DiffWave、DiT-style等基线。更值得注意的是zero-shot迁移实验：模型只用EPHNOGRAM训练，在PhysioNet/CinC 2016的子集上仍能达到0.75相关系数和91.3%的S1检测率，说明学到的ECG-PCG耦合关系有一定跨数据集泛化能力。

实际意义在于，如果这个合成真能达到临床可用水平，就能让普通心电图设备“兼听”心音，极大降低心脏听诊的门槛；当下最务实的价值可能是作为数据增强工具，缓解配对ECG-PCG数据稀缺的问题。但论文自己也承认，现阶段只验证了波形保真度和时序精度，没在任何下游诊断任务（如杂音分类）上测试，离临床落地还差关键的临床验证一环。

方法上最大的局限是：零样本迁移只在PhysioNet的一个子集上做了评估，跨设备、跨病理、跨人种的泛化能力仍然未知；另外整个pipeline需要200步扩散采样，虽然DDIM能加速到50步，但对于真正实时的嵌入式应用（如可穿戴设备）仍偏重。

🔗 **开源详情**

- 代码：是。论文附录及网站提供了GitHub代码库链接：https://github.com/nanless/Temporally-Aware-VAE-Diffusion-ECG-to-PCG。
- 模型权重：是。论文附录及网站提供了训练好的模型权重下载链接，包含在开源项目中。
- 数据集：EPHNOGRAM 数据集（https://doi.org/10.13026/tjtq-5911）；零样本目标为 PhysioNet/CinC Challenge 2016 的同步 training‑a/MITHSDB 子集，需从 PhysioNet/CinC 2016 数据（https://physionet.org/content/challenge-2016/）通过文中所述预处理流程获得；此外，用于 Fréchet Distance 特征提取器训练的 CirCor DigiScope PCG 数据集可在 https://physionet.org/content/circor-heart-sound/ 获取。论文承诺发布预处理脚本和zero-shot目标集的精确记录列表。
- Demo：论文中未提及。
- 复现材料：论文提供了独立的GitHub代码库、详细的架构表格（附录表14、15）、完整的训练超参数（附录表6）以及预处理和zero-shot评估的元数据。
- 论文中引用的开源项目：论文实现基于 PyTorch（https://pytorch.org/）；使用 Springer 心音分割算法 (Springer et al., 2016) 进行 S1/S2 检测，其参考实现可在 PhysioNet 获取（如 https://physionet.org/content/hss/1.0/）。文中对比的基线模型（DiffWave、RDDM、AudioLDM、SimCLR 等）均为已有的开源工作，但未被列为本工作的直接依赖。

📄 [OpenReview](https://openreview.net/forum?id=aComqAqP6j)

---

### 14. [CoLA: Cross-Modal Low-rank Adaptation for Multimodal Downstream Tasks](/audio-paper-digest-blog/posts/2026-07-04-cola-cross-modal-low-rank-adaptation-for)

🔥 **8.3/10** | 前25% | #音视频理解 | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 影响 1/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Wish Suharitdamrong（Surrey Institute for People-Centred AI, University of Surrey; Centre for Vision, Speech and Signal Processing (CVSSP), University of Surrey）
- 通讯作者：Wish Suharitdamrong（ws00372@surrey.ac.uk）
- 作者列表：Wish Suharitdamrong（Surrey Institute for People-Centred AI, University of Surrey; CVSSP, University of Surrey）、Tony Alex（Surrey Institute for People-Centred AI, University of Surrey; CVSSP, University of Surrey）、Muhammad Awais（Surrey Institute for People-Centred AI, University of Surrey; CVSSP, University of Surrey）、Sara Atito（Surrey Institute for People-Centred AI, University of Surrey; CVSSP, University of Surrey）

💡 **毒舌点评**

CoLA 将 LoRA 的低秩分解巧妙扩展为双路径结构，为双编码器多模态适配提供了一条简洁的跨模态融合范式；视觉‑语言与音频‑视觉两组任务上的实验也较为扎实，并首次实现了基于 PEFT 的多任务视觉定位。然而，该方法本质上仍是对 LoRA 的线性外推，理论分析仅停留在秩和线性跨度层面，未能给出更深的表征交互机制；且跨模态路径在推理时不可合并带来的开销，在资源敏感场景中会成为硬伤。此外，损失函数完全缺失，复现存在实质性缺口。

📌 **核心摘要**

1. 要解决的问题：现有参数高效微调方法（尤其是 LoRA）在双编码器多模态架构中仅进行模态内独立适配，缺乏跨模态信息交互，限制了多模态下游任务的性能。
2. 方法核心：提出 CoLA（Cross‑Modal Low‑rank Adaptation），在标准 LoRA 的模态内低秩更新路径旁，引入一条由跨模态特征驱动的模态间低秩融合路径，通过超网络将另一模态的全局特征映射为方阵 $\Phi \in \mathbb{R}^{r \times r}$，并与低秩矩阵 $B_C$、$A_C$ 相乘形成动态的跨模态权重更新 $\Delta W_C = \lambda B_C \Phi A_C$。同时采用渐进式跨模态特征传播策略，使两个编码器的每个线性组件（自注意力的 QKV 投影、输出投影、FFN 上下投影）在逐层前向过程中持续交换并融合另一模态的最新特征。
3. 与已有方法的区别：与现有在模块级别做融合的 PEFT 不同（如 adapter 串联、prompt 拼接），CoLA 直接在单个线性层的权重空间内实现跨模态交互，无需专用适配器，且可应用于任意双编码器架构与模态组合，具有高度的通用性和即插即用特性。
4. 主要实验结果：在视觉‑语言（RefCOCO/+/g REC 和 RES）和音频‑视觉（AVE、AVS）四个 benchmark 上，CoLA 均以相近或更低参数量超越 LoRA，如视觉‑语言平均 REC 从 82.3% 提升至 83.4%，RES 从 72.2% 提升至 73.7%；音频‑视觉 AVE 准确率从 79.2% 提升至 80.7%，AVS mIoU 从 80.1% 提升至 80.9%。在与专用 PEFT 方法（HiVG、MaPPER、DETRIS、STG-CMA、DG-SCT 等）的比较中，CoLA 达到有竞争力的性能，并首次实现基于 PEFT 的多任务视觉定位。
5. 实际意义：为多种模态组合的双编码器下游任务提供了一种统一、即插即用的跨模态参数高效微调方案，降低了多模态适配的计算和工程成本，有助于资源受限的研究者和开发者利用组合不同单模态大模型进行多模态任务开发。
6. 主要局限性：跨模态路径依赖动态特征，在推理时无法像 LoRA 那样合并到预训练权重中，导致显著的额外推理开销（显存增加约 31%，推理速度下降约 12.5%）；此外，超网络的上投影矩阵 $W_{\text{up}}$ 参数量随秩 $r$ 二次增长，高秩场景下效率下降；论文未给出损失函数的具体形式，部分训练配置缺失，影响完整复现。

🔗 **开源详情**

- 代码：https://github.com/peterwisu/CoLA
- 模型权重：论文中未提及
- 数据集：
  - RefCOCO、RefCOCO+、RefCOCOg（源自 MSCOCO，https://cocodataset.org）
  - AVE 数据集（Audio-Visual Event Localization，Tian et al., 2018，可通过学术渠道获取）
  - AVSBench-S4 数据集（Audio-Visual Segmentation Benchmark-S4，Zhou et al., 2022，可通过学术渠道获取）
- Demo：论文中未提及
- 复现材料：论文附录 A 提供了详细的训练超参数（表 8—10），附录 C 提供了消融实验的设计细节与图示，附录 D 说明了推理开销与局限性。但损失函数未给出。
- 论文中引用的开源项目：
  - LoRA (Hu et al., 2022): https://github.com/microsoft/LoRA
  - BERT (Devlin et al., 2019): https://github.com/google-research/bert
  - DINOv2 (Oquab et al., 2023): https://github.com/facebookresearch/dinov2
  - ViTDet (Li et al., 2022): https://github.com/facebookresearch/detectron2
  - EEVG (Chen et al., 2024): 多任务视觉 Grounding 解码器，论文中未提供直接链接
  - SSLAM (Alex et al., 2025): 自监督音频模型，https://openreview.net/forum?id=odU59TxdiB
  - Swin Transformer V2 (Liu et al., 2022): https://github.com/microsoft/Swin-Transformer
  - CLIP (Radford et al., 2021): https://github.com/openai/CLIP
  - TransVG、TransVG++、VG-LAW、HiVG、MaPPER、SwimVG、ETRIS、BarLeRIa、DETRIS、LAVisH、STG-CMA、DG-SCT 等为引用方法，代码链接需参见原论文。

📄 [OpenReview](https://openreview.net/forum?id=8CBWgJY7n9)

---

### 15. [Speech-Audio Compositional Attacks on Multimodal LLMs and Their Defense with SALMONN-Guard](/audio-paper-digest-blog/posts/2026-07-04-speech-audio-compositional-attacks-on-multimodal)

🔥 **8.3/10** | 前25% | #音频理解 | 创新 1.5/2 | 严谨 1/1.5 | 实验 1.1/1.5 | 影响 1/1.5 | 开源 1.5/1.5

👥 **作者与机构**

- 第一作者：Yudong Yang（清华大学）
- 通讯作者：Guangzhi Sun（剑桥大学）、Chao Zhang（清华大学）
- 作者列表：Yudong Yang（清华大学）、Xuezhen Zhang（清华大学）、Zhifeng Han（清华大学）、Siyin Wang（清华大学）、Jimin Zhuang（清华大学）、Zengrui Jin（清华大学）、Jing Shao（上海人工智能实验室）、Guangzhi Sun（剑桥大学）、Chao Zhang（清华大学）

💡 **毒舌点评**

本文亮点在于首次系统性地将语音-非语音音频的语义和语境组合引入多模态LLM安全红队评测，攻击方式真实且具有现实威胁性，提出的SALMONN-Guard联合模态守卫设计也展现了防御此类攻击的可行性。然而，攻击构造仍依赖人工预设的声学参数与对话脚本，缺乏自适应的攻击策略优化，使得benchmark的攻击上限不明确；防御仅使用SFT，未与对抗训练等更强基线对比，说服力不足；MSD评估将“理解错误”也计入攻击成功，该设定存在争议，可能高估了实际威胁。

📌 **核心摘要**

- 本文针对多模态LLM在处理复杂音频输入时的安全漏洞，提出了语音–非语音音频组合攻击评测基准 SACRED-Bench 及其防御模型 SALMONN-Guard。
- SACRED-Bench 通过三种组合机制构造隐蔽的黑盒攻击：Speech-Speech Overlap (SSO) （将无害与有害语音叠加）、Speech-Audio Overlap (SAO) （将良性语音与有害环境音混合）和 Multi-Speaker Dialogue (MSD) （将有害内容隐匿于多人对话中），并配合间接文本提问规避纯文本安全护栏。
- 实验显示，即使开启全部安全护栏的 Gemini 2.5 Pro，在 SACRED-Bench 上的总体攻击成功率 (ASR) 仍高达 66.75%，其中 SAO 攻击下 ASR 达 88.56%；多数开源模型 ASR 超过 90%。
- 作为防御，SALMONN-Guard 基于 Qwen2.5-Omni-7B 进行两阶段 SFT（使用 LoRA），联合检查语音、音频和文本内容，将总体 ASR 降至 11.32%，同时在无害对照组上误报率 (FAR) 为 0。
- 在 Speech Insertion 和 Speech Editing 两种未见攻击上，SALMONN-Guard 的 ASR 分别为 0.00% 和 3.00%，展现了良好的泛化能力。
- 主要局限性：攻击构造依赖固定声学超参组合，未探索最优攻击策略；防御仅用 SFT，未与更强基线（如对抗训练）比较；MSD 评测将“错误理解”也计为攻击成功，可能高估风险。

### 核心实验结果表格（SACRED-Bench 主结果）

| Models | SSO ASR (%) | MSD ASR (%) | SAO ASR (%) | Overall ASR (%) | HCS FAR (%) | Overall OBE (%) |
|--------|-------------|-------------|-------------|-----------------|-------------|-----------------|
| Qwen2-Audio-7B | 100.00 | 96.48 | 100.00 | 98.16 | 1.80 | 85.41 |
| Qwen2.5-Omni-7B | 99.78 | 87.02 | 100.00 | 92.83 | 1.20 | 83.03 |
| Step-Audio 2 mini Base | 90.25 | 77.49 | 98.33 | 81.50 | 0.60 | 78.37 |
| MiniCPM-o 2.6 8B | 85.84 | 69.87 | 99.58 | 85.57 | 3.40 | 77.01 |
| Qwen3-Omni-30B-A3B | 49.25 | 84.82 | 93.17 | 77.95 | 0.90 | 72.16 |
| Kimi-Audio-7B | 69.00 | 61.36 | 87.17 | 70.05 | 4.10 | 66.78 |
| Gemini 1.5 Pro | 83.50 | 78.58 | 98.47 | 85.12 | 0.30 | 77.77 |
| GPT-4o | 73.00 | 53.67 | 99.58 | 70.05 | 0.60 | 70.74 |
| Gemini 2.5 Pro | 37.25 | 63.93 | 88.56 | 66.75 | 0.70 | 63.15 |
| SALMONN-Guard | 12.93 | 14.08 | 5.16 | 11.32 | 0.00 | 7.74 |

🔗 **开源详情**

- 代码：未提供专门的代码仓库链接。
- 模型权重：已公开，链接为 https://huggingface.co/datasets/tsinghua-ee/SACRED-Bench （该页面下包含 SALMONN-Guard 检查点）。
- 数据集：已公开，链接为 https://huggingface.co/datasets/tsinghua-ee/SACRED-Bench 。
- Demo：未提及。
- 复现材料：训练超参数详见论文附录 D；数据构造与评测流程见正文及附录 A-C。
- 论文中引用的开源项目（未提供直接链接）：
  - ChatTTS
  - VoiceBank-DEMAND
  - AdvBench
  - MM-SafetyBench
  - HarmBench
  - Qwen2-Audio-7B
  - Qwen2.5-Omni-7B
  - Qwen3-Omni
  - MiniCPM-o 2.6
  - Step-Audio2
  - Kimi-Audio
  - Whisper-large-v3
  - JALMBench

📄 [OpenReview](https://openreview.net/forum?id=KM2J8XFz5A)

---

### 16. [MoST: Mixing Speech and Text with Modality-Aware Mixture of Experts](/audio-paper-digest-blog/posts/2026-07-04-most-mixing-speech-and-text-with-modality-aware)

🔥 **8.2/10** | 前25% | - | 创新 1.2/2 | 严谨 1/1.5 | 实验 1.2/1.5 | 影响 1.1/1.5 | 开源 1.5/1.5

👥 **作者与机构**

- 第一作者：Yuxuan Lou（新加坡国立大学计算学院）
- 第二作者（共同一作）：Kai Yang（上海交通大学计算机科学与工程系）
- 通讯作者：Yang You（新加坡国立大学计算学院，youy@comp.nus.edu.sg）

💡 **毒舌点评**

本文提出的模态感知路由MoE架构在语音-文本多模态建模上表现出色，工程实现扎实，全开源承诺值得肯定。但方法层面缺乏深度理论支撑（50%硬划分靠直觉），且实验对比存在初始化不公平的嫌疑，使得其SOTA宣称需要打折。消融实验虽有控制变量，但对共享专家的分析仅停留在“有/无”层面，未深入其内部机理，整体贡献更偏向于一次成功的工程整合而非方法论突破。

📌 **核心摘要**

1. 论文旨在解决语音和文本两种异构模态在统一大模型中用相同参数处理时导致的表征干扰问题，即忽略了不同模态固有的统计差异。
2. 核心方法是提出模态感知的混合专家架构（MAMoE），将MoE中的专家显式划分为文本专家组、音频专家组和跨模态共享专家组，并利用模态感知路由器根据token来源（文本/音频）强制将其导向对应专家组。
3. 与已有方法相比，MAMoE首次在语音-文本MoE中引入模态感知路由，并显式设计了独立于路由、处理所有token的共享专家来促进跨模态信息交互与防止灾难性遗忘。
4. 主要实验结果：在VoxPopuli-en ASR（6.2 WER）和TTS（10.1 WER）上达到SOTA；音频语言建模平均准确率71.94（SOTA）；在多个SQA任务上取得最佳或极具竞争力的结果。控制实验证明MoST-style upcycling显著优于传统MoE upcycling。
5. 实际意义：验证了模态感知稀疏激活在语音-文本多模态模型中的有效性，并提供了一个仅使用开源数据即可达到顶尖性能的高效训练pipeline，对降低语音大模型研究门槛有重要参考价值。
6. 主要局限性：50%专家硬划分策略缺乏理论依据，仅为工程直觉；主要实验基于DeepSeek-V2 Lite初始化，与使用不同基座模型的baseline对比不公平；模型规模（约16B）相对较小，其性能优势能否在更大规模上保持未知。

🔗 **开源详情**

- 代码：https://github.com/NUS-HPC-AI-Lab/MoST
- 模型权重：论文声明模型权重随代码一同发布，获取方式见 https://github.com/NUS-HPC-AI-Lab/MoST；未提供独立的HuggingFace或ModelScope链接。
- 数据集：训练用开源数据集包括 Common Voice (https://arxiv.org/abs/1912.06670)、LibriHeavy (https://arxiv.org/abs/2309.08105)、VoxPopuli (https://arxiv.org/abs/2101.00390)、SmolTalk (https://arxiv.org/abs/2502.02737) 以及 RefinedWeb（论文中未提供具体获取链接）；评估基准使用了 LibriSpeech、VoxPopuli、Common Voice、sWUGGY、sBLIMP、sTopic‑StoryCloze、sStoryCloze、Llama Q、Trivial QA、WebQ、MMLU、TriviaQA、GSM8K、HumanEval 等公开数据集。
- Demo：论文中未提及
- 复现材料：论文附录 A 和表 2 给出了两阶段训练的详细配置、超参数和任务混合比例；附录C提供了从config_mostc.json提取的完整模型配置。训练、推理代码及数据处理脚本均随GitHub仓库发布。
- 论文中引用的开源项目：
  - HuBERT (音频编码器)：https://arxiv.org/abs/2106.07447
  - HiFi-GAN (声码器)：https://arxiv.org/abs/2010.05646
  - DeepSeek-V2 Lite (基础 MoE LLM 骨干)：https://arxiv.org/abs/2405.04434
  - Llama 3.2 3B (受控初始化实验)：https://arxiv.org/abs/2407.21783
  - 其他基线模型（如 SpiritLM、Moshi、Qwen2-Audio、SeamlessM4T-v2、MinMo、LLaMA-Omni2 等）均为开源工作，论文中均给出了对应的 arXiv 引用。

📄 [OpenReview](https://openreview.net/forum?id=32jYxFTcNX)

---

### 17. [IVQ: Structured and Lightweight Vector Quantization via Binary Hierarchical Composition Inspired by $\textit{IChing}$](/audio-paper-digest-blog/posts/2026-07-04-ivq-structured-and-lightweight-vector)

🔥 **8.2/10** | 前25% | #音频编码 | 创新 1.8/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 影响 1/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Heda Zuo（浙江大学计算机科学与技术学院）
- 通讯作者：Weitao You（浙江大学计算机科学与技术学院）
- 作者列表：Heda Zuo（浙江大学计算机科学与技术学院）、Junxian Wu（浙江大学计算机科学与技术学院）、Fengjie Lu（浙江大学计算机科学与技术学院）、Pei Chen（浙江大学计算机科学与技术学院）、Lingyun Sun（浙江大学计算机科学与技术学院）、Weitao You（浙江大学计算机科学与技术学院）

💡 **毒舌点评**

这篇论文的野心在于用东方哲学包装一个本质上属于残差积量化（Residual-Product VQ）的技术方案，并试图将《易经》的符号系统强制映射为一种结构先验。但难能可贵的是，这种包装并非纯粹的概念点缀，而是真正催生了极简码本（4×2个基向量）与几何对称约束的有效结合，从根本上解决了码本坍缩，并实现了100%的利用率。在“大力出奇迹”的Scaling Law时代，这种追求结构优雅和极致轻量化的反向探索具有启发性。但哲学隐喻增加了不必要的阅读障碍，且实验规模与当前主流大模型相差甚远，使其实用性仍存疑。

📌 **核心摘要**

1. 要解决的问题：现有矢量量化（VQ）方法依赖非结构化的大码本，这导致了严重的码本利用率低、死码（码本坍缩）频发、训练计算开销大且表示冗余等问题。
2. 方法核心：受《易经》爻卦系统的二进制层次组合与卦象间的对偶关系（错、综、错综）启发，提出IVQ。该方法仅用少量可在层间共享的Yin-Yang基向量，通过笛卡尔积层次化组合（两仪→四象→八卦→六十四卦）生成一个庞大的有效码集，并用层次一致性损失和几何关系一致性损失来结构化整个码本空间，从而在极小参数量下实现高保真重建并达到100%的码本利用率。
3. 与已有方法的新意：IVQ不同于RVQ逐层独立的残差量化或PVQ分块独立的乘积量化，而是通过引入跨层共享的二进制基向量与分块数量可变的层次化组合，将RVQ和PVQ的优势在一个统一的结构先验下耦合。此外，“错/综/错综”几何关系约束使得未激活的码向量也能通过关联码获得梯度更新，这是现有方法中未曾提出的防坍缩机制。极简Yin-Yang变体仅用8个（4×2）基向量即可达到甚至超越有数千个向量的码本的性能。
4. 主要实验结果：
   - 音频重建：在MTG和LibriSpeech数据集上，IVQ（4×2）均获得最高PSNR、最低KLD和100%码本利用率，全面超越RVQ、PVQ、VQ、FSQ和LFQ等基线。
   - 音乐重建：在Encodec框架下，IVQ（4×2）在多数指标上超过原版Encodec（4×2048）等大码本模型，码本压缩超千倍，利用率100%，但FAD指标存在差距（IVQ 2.56 vs. Encodec 1.60）。
   - 视觉重建：在ImageNet-1k上，ViT-IVQVAE以仅78个码向量即获得比肩甚至超越ViT-VQGAN（8192个码向量）的FID（2.77 vs. 23.15），充分验证了其跨模态的结构化表示能力。
   - 视频到音乐跨模态生成：在完全不使用大预训练模型的情况下，IVQV2M在KLD、FAD及主观评分上接近甚至部分优于依赖大模型骨干（如ViT、MusicGen）的VidMuse等方法。
   - 消融实验：证实移除层次约束或结构约束均会导致性能显著下降；去掉IVQ结构后需要更大码本才能达到相近性能，但在极大规模码本下仍不及带结构的IVQ。
5. 实际意义：提出了一种防坍缩、极轻量、可跨模态的结构化VQ方案，可即插即用地嵌入现有编解码器（如Encodec、VQ-VAE），从根本上压缩码本参数和训练成本，对边缘计算和资源受限场景极具吸引力。
6. 主要局限性：论文自身承认了其在细节重建上的不足（如视觉中的文字、音乐中的噪声）、跨模态对齐不够精细、计算资源受限导致未在大模型上验证。审稿人认为其对“错”（Inverse）关系的强制性约束可能过于刚性，且跨模态共享码本的泛化性论证不充分。

🔗 **开源详情**

-   代码：提供GitHub仓库链接：https://github.com/chouliuzuo/IVQ
-   模型权重：论文未提及提供预训练的模型权重或检查点。
-   数据集：使用了MTG-Jamendo、LibriSpeech、ImageNet-1k、GVMGen、SymMV和VidMuse等公开数据集，但论文未提供数据获取的直链或预处理脚本。
-   Demo：论文未提及。
-   复现材料：缺少训练配置文件、环境依赖文件、特定超参数设置文件以及训练运行脚本。

📄 [OpenReview](https://openreview.net/forum?id=Y3cUZ8fNnu)

---

### 18. [Spherical Procrustes Alignment for Reliable Medical Audio Diagnosis](/audio-paper-digest-blog/posts/2026-07-04-spherical-procrustes-alignment-for-reliable)

🔥 **8.2/10** | 前25% | #音频分类 | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 影响 0.8/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Ying Wang（Faculty of Applied Sciences, Macao Polytechnic University, Macao SAR, China）
- 通讯作者：Xiaochen Yuan（Faculty of Applied Sciences, Macao Polytechnic University, Macao SAR, China）
- 作者列表：Ying Wang（Faculty of Applied Sciences, Macao Polytechnic University）、Guoheng Huang（School of Computer Science and Technology, Guangdong University of Technology）、Chan-Tong Lam（Faculty of Applied Sciences, Macao Polytechnic University）、Xiaochen Yuan（Faculty of Applied Sciences, Macao Polytechnic University）

💡 **毒舌点评**

这篇论文精准地抓住了医疗音频模型过度自信的几何病根——`范数偏差`，用球形约束和动态Procrustes对齐的组合拳切断了特征幅度与置信度的虚假耦合，理念清晰且动机扎实。实验校准效果惊人，将BEATs的ECE从28.51%拉低到4.44%，且做到了零额外推理成本，这一点很漂亮。然而，方法论层面更多是已知几何工具（L2归一化、ETF、SVD）在特定问题上的精巧组装，而非基础性突破。此外，验证局限于两个公开的呼吸音/心音数据集，在标签噪声、跨中心/跨设备泛化上的鲁棒性论证几乎为零，结论的临床闭环说服力仍需大量补充。

📌 **核心摘要**

本文旨在解决医学音频诊断中微调模型的过度自信问题，其根因被定位为`范数偏差`（norm bias）——即模型预测的置信度被特征或权重的幅度（$\|z\|$, $\|w\|$）所污染，而非仅仅由语义角距离决定。为此，作者提出了 Spherical Procrustes Alignment (SPA)，一种双分支解耦的几何正则化框架。具体地，球形分支（Spherical Branch）通过对特征和分类器权重进行L2归一化，将logit重定义为尺度缩放的余弦相似度 $s \cdot \cos(\theta_k)$，以此彻底消除范数偏差；几何分支（Geometric Branch）则维护一个固定的理想Simplex ETF作为类间分离的结构性锚点，并利用动量更新的类原型，通过求解正交Procrustes问题（SVD闭式解）将ETF动态对齐到当前的漂移特征空间，规避了梯度更新旋转矩阵引入的几何抖动（geometric jitter）。两分支通过KL散度自蒸馏协同优化，使球形分支继承ETF的对称几何结构。相较于BalCAL的固定ETF无法适应漂移原型、RBL的梯度旋转不稳定等先前方法，SPA首次在医学音频中同时解决了范数偏差与特征几何抖动，以无额外推理成本的代价实现了稳定对齐。在ICBHI 2017四分类任务上，SPA配合BEATs时AS达64.42%、ECE仅4.44%；配合PAFA后AS达65.27%；在CirCor DigiScope数据集上，配合M2D取得W_acc 84.23%、ECE 4.63%，均为领域内较优水平。方法将过参数化的预训练骨干转化为校准良好的临床诊断工具，其核心价值在于证明了几何结构的完善性与特征提取能力同等重要。主要局限在于其动量原型更新依赖干净标签的假设，且跨中心、跨模态泛化能力未做探索，在高标签噪声或分布外病理下的原型鲁棒性存疑。

🔗 **开源详情**

- 代码：https://github.com/wangying1586/SPA
- 模型权重：未说明
- 数据集：ICBHI 2017 (Rocha et al., 2018) 和 CirCor DigiScope (Oliveira et al., 2022)，可从 PhysioNet 公开获取，论文未提供直接下载链接。
- Demo：未说明
- 复现材料：附录B详细列出了实验环境、音频预处理、优化器及各骨干的超参数配置；附录C.2提供了核心PyTorch实现代码；代码仓库结构完整，包含训练与评估脚本。
- 论文中引用的开源项目：
  - PANNs (CNN6/CNN14)：https://github.com/qiuqiangkong/audioset_tagging_cnn
  - AST：https://github.com/YuanGongND/ast
  - BEATs：https://github.com/microsoft/unilm/tree/master/beats
  - BYOL-A：https://github.com/nttcslab/byol-a
  - M2D：https://github.com/nttcslab/m2d
  - PyTorch (版本 2.6.0)：https://pytorch.org
  - Librosa (版本 0.10.2)：https://librosa.org
  - geotorch：https://github.com/geoopt/geotorch
  （注：FBS、PAFA 等其余模型在论文中未提供公开代码链接）

📄 [OpenReview](https://openreview.net/forum?id=czRY4Qj153)

---

### 19. [Attend to Anything: Foundation Model for Unified Human Attention Modeling](/audio-paper-digest-blog/posts/2026-07-04-attend-to-anything-foundation-model-for-unified)

🔥 **8.2/10** | 前25% | #音视频理解 | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 影响 0.5/1.5 | 开源 1.5/1.5

👥 **作者与机构**

- 第一作者：Wenzhuo Zhao（四川大学计算机学院）
- 通讯作者：Keren Fu（四川大学计算机学院，国家合成视觉重点实验室）
- 作者列表：Wenzhuo Zhao（四川大学计算机学院）、Ronghao Xian（四川大学计算机学院）、Keren Fu（四川大学计算机学院，国家合成视觉重点实验室）、Qijun Zhao（四川大学计算机学院，国家合成视觉重点实验室）

💡 **毒舌点评**

本文以双曲空间层级蕴含与Fokker-Planck动力学统一图像、视频、音视频注意力建模，思路新颖且物理可解释性较强，在16个基准上刷出均6%的提升，并承诺开源代码和数据集，为该领域首个统一基础模型做出了有意义的尝试。然而，音频-视觉融合模块本质上是一个“视觉特工”，仅在语义相关时对视觉特征进行调制，对纯音频领域的借鉴价值极其有限；尽管有聪明的条件交换实验，但文本条件的设计仍依赖人工构建的数据集级提示，模型对真实开放世界中未见文本组合的泛化能力仍缺少系统压测，整体离“Attend to Anything” 的宏大叙事还有距离。

📌 **核心摘要**

论文旨在解决人类注意力建模（saliency prediction）因场景、模态、任务割裂而缺乏通用基础模型的问题。核心方法是将注意力差异定义为一种从通用倾向到具体任务的层级蕴含关系，并在双曲空间（Lorentz模型）中通过文本提示实现层级嵌入约束；视频动态则用Fokker-Planck方程统一为静态注意力的扩散演化，以物理驱动取代传统滑窗时空建模。相比现有参数隔离或多头微调方案，AAM在几何空间中显式编码层次语义，并通过算子分裂实现逐帧高效推断。实验在16个数据集上覆盖图像、视频、音视频，平均相对提升约6%，视频推理速度提升约4倍。主要实验结果如下：

| Dataset | Method | CC↑ | KLD↓ | AUC↑ | SIM↑ | NSS↑ |
|---------|--------|------|------|------|------|------|
| MIT1003（图像） | AAM | 0.831 | 0.446 | 0.923 | 0.674 | — |
| CAT2000（图像） | AAM | 0.906 | 0.235 | 0.890 | 0.769 | — |
| SALICON（图像） | AAM | 0.925 | 0.163 | 0.876 | 0.819 | — |
| DIEM（音视频） | AAM | 0.710 | — | 0.919 | — | 2.88 |
| Coutrot2（音视频） | AAM | 0.887 | — | 0.971 | — | 7.46 |
| DHF1K（视频） | AAM | 0.563 | — | 0.919 | 0.421 | 3.272 |
| Hollywood2（视频） | AAM | 0.742 | — | 0.944 | 0.599 | 4.055 |

实际意义在于为注意力预测提供了第一个能跨模态、跨场景、跨任务统一迁移的基础模型，且推理高效。主要局限性是音频输入在模型中仅为轻量调制，未深度挖掘复杂声学场景，且文本条件依赖数据集级描述，对通用情况的泛化能力有待验证。训练数据存在显著的静态图像占比过高（88%）及由此可能引入的数据集偏差。

📄 [OpenReview](https://openreview.net/forum?id=tfk5Zpn0AR)

---

### 20. [VocSim A Training-free Benchmark for Zero-shot Content Identity in Single-source Audio](/audio-paper-digest-blog/posts/2026-07-04-vocsim-a-training-free-benchmark-for-zero-shot)

🔥 **8.2/10** | 前25% | #音频检索 | 创新 1.2/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 影响 0.8/1.5 | 开源 1.5/1.5

👥 **作者与机构**

- 第一作者：Maris Basha（苏黎世大学神经信息学研究所与 ETH Zurich）
- 通讯作者：Richard Hahnloser（苏黎世大学神经信息学研究所与 ETH Zurich）
- 作者列表：Maris Basha（苏黎世大学神经信息学研究所与 ETH Zurich）、Anja Zai（苏黎世大学神经信息学研究所与 ETH Zurich）、Sabine Stoll（苏黎世大学语言进化跨学科研究所）、Richard Hahnloser（苏黎世大学神经信息学研究所与 ETH Zurich）

💡 **毒舌点评**

这篇工作用一套训练无关的几何视角给冻结音频嵌入做了一次透彻的“体检”，GSR 的边界惩罚设计和跨语料聚合的工程勇气值得肯定，暴露出的低资源语言局部检索崩塌为社区敲响了警钟。但盲测仅限于语音域，让“OOD 泛化”的标题显得过于宏大；公共子集普遍存在的预训练重叠也使得零样本的纯净度打了折扣，而 GSR 与 Silhouette 高达 0.82 的相关性让人不禁要问：新指标的边际贡献究竟在哪里？

📌 **核心摘要**

论文提出 VOCSIM，一个无需任何参数更新、不使用标签的训练无关基准，用于诊断冻结音频嵌入在零样本场景下的内容身份几何对齐质量。其核心方法为：从冻结编码器提取特征，经时间‑频率统计池化得到定长向量，再通过无标签 PCA 转导白化校正各向异性，最终采用局部指标 P@k 和作者新提出的点对点全局分离率 GSR（配合置换基线校准）评估嵌入空间的类别分离能力。与依赖线性探测或微调的现有基准（HEAR、SUPERB）不同，VOCSIM 首次系统性地孤立单源音频的内容身份几何，并聚合了 19 个跨人声‑动物‑环境的语料库以压力测试泛化性。主要结果：Whisper Large‑v3 + 时间‑频率池化 + PCA + Spearman 距离在公共 15 个子集上达到 P@1 66.8%、GSR 41.8%；但在盲测低资源语言（Shipibo‑Conibo, Chintang）上 P@1 骤降至 11.5%，GSR 的置换升力从公域的 +16.9 萎缩至盲测的 +5.8，揭示了严重的跨语言语音泛化天花板。外部验证表明，VOCSIM 的最优配置在 HEAR 基准 7 任务中取得 5 项 SOTA，并能预测鸟类感知相似度和提升小鼠超声分类精度，证实了内在几何质量对下游效用的预测能力。

📄 [OpenReview](https://openreview.net/forum?id=n2C8pTqtvB)

---

### 21. [JAEGER: Joint 3D Audio-Visual Grounding and Reasoning in Simulated Physical Environments](/audio-paper-digest-blog/posts/2026-07-04-jaeger-joint-3d-audio-visual-grounding-and)

🔥 **8.1/10** | 前25% | #声源定位 | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 影响 1/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Zhan Liu（清华大学、腾讯AI Lab）
- 通讯作者：Chao Zhang（清华大学）
- 作者列表：Zhan Liu（清华大学、腾讯AI Lab）、Changli Tang（清华大学）、Yuxin Wang（香港科技大学）、Zhiyuan Zhu（浙江大学）、Youjun Chen（香港中文大学）、Yiwen Shao（腾讯AI Lab）、Tianzi Wang（腾讯AI Lab）、Lei Ke（腾讯AI Lab）、Zengrui Jin（清华大学）、Chao Zhang（清华大学）

💡 **毒舌点评**

本文提出了在3D模拟物理环境中进行联合音视频定位与推理的框架 JAEGER，其核心贡献 Neural IV 和 SpatialSceneQA 数据集为空间音频理解研究提供了有价值的工具和基准。亮点在于系统性整合了 RGB-D 视觉与多通道 FOA，并在附录中通过 SimpleFuse 基线实验初步证明了其架构设计的有效性，而非仅依赖于多模态输入的堆砌。然而，实验设计存在明显的“避重就轻”：正文主表（Table 2）回避了 SimpleFuse 基线，将其置于附录，这使得核心主张——即架构的优越性——在主叙述中缺乏最直接的量化支撑。此外，3D 视觉接地任务中，专门针对 3D 的模型 N3D-VLM 竟获得 0.0 IoU，这一零样本、无适配的对比方式极不公正，更像是对基线的“处决”而非“比较”。更严重的是，多说话人推理任务在正文中汇报了接近 100% 的准确率，营造出任务已被解决的假象，而论文在附录中承认，当干扰项增至 4-6 个时性能迅速下降，这种对任务天花板效应（ceiling effect）的深度分析本应是正文的核心内容，却被掩盖于近乎完美的数字之下。

📌 **核心摘要**

本文旨在解决当前 2D 音视频大语言模型（AV-LLM）缺乏 3D 空间感知能力，导致无法在复杂环境中进行可靠声源定位与空间推理的问题。为此，作者提出的 JAEGER 框架，首次通过集成 RGB-D 视觉与四通道一阶高保真度立体声（FOA），赋予 AV-LLM 端到端的 3D 联合定位与推理能力。
方法的核心在于两个创新：一是提出可学习的神经强度向量（Neural IV），替代传统基于 STFT 的强度向量，通过在潜空间模拟强度计算，从原始 FOA 波形中学习对混响和声源重叠更鲁棒的空间方向表示。二是通过将深度图反投影为点云并进行 3D 感知位置编码，使视觉表征具备度量空间的几何感知能力，从而消除单目 RGB 的尺度歧义。
相比于先前将视觉与空间音频分离建模或依赖信号处理级联的模块化方法，JAEGER 首次实现了统一的端到端学习框架。主要实验在作者提出的 SpatialSceneQA（61k 样本）合成数据集上进行，结果表明 Neural IV 在重叠声源定位任务上的中位角度误差为 4.11°，相比专用模型 BAT 的 19.09° 有显著提升；3D 视觉接地的交并比（IoU）为 0.32，中心点偏移仅 0.16m；在多说话人匹配推理任务上达到 99.2% 的准确率，但该结果仅在 2-3 个候选人时成立。附录中的 SimpleFuse 基线（IoU 0.30）表明，JAEGER 的增益部分源于对模态结构的精心建模，而非仅仅使用了更丰富的模态。
该工作的实际意义在于为构建具有真实 3D 空间感知能力的具身智能体提供了技术路径和数据基础。其主要局限性在于评估完全依赖于特定模拟器（SoundSpaces 2.0）和合成数据，且推理任务存在天花板效应。尽管附录展示了在 STARSS23 真实数据上的初步迁移结果（方位角中位误差约 75°），但性能与模拟环境（2.21°）相差悬殊，验证了模拟到真实场景的巨大鸿沟。

📄 [OpenReview](https://openreview.net/forum?id=qOd7ft1FSQ)

---

### 22. [LALM-as-a-Judge: Benchmarking Large Audio-Language Models for Safety Evaluation in Multi-Turn Spoken Dialogues](/audio-paper-digest-blog/posts/2026-07-04-lalm-as-a-judge-benchmarking-large-audio-language)

🔥 **8.1/10** | 前25% | #语音交互 | 创新 1.2/2 | 严谨 1.1/1.5 | 实验 1/1.5 | 影响 0.8/1.5 | 开源 1.5/1.5

👥 **作者与机构**

- 第一作者：Amir Ivry（Technion–Israel Institute of Technology, Electrical and Computer Engineering）
- 通讯作者：Amir Ivry（Technion–Israel Institute of Technology, Electrical and Computer Engineering）
- 作者列表：Amir Ivry（Technion–Israel Institute of Technology, Electrical and Computer Engineering）、Shinji Watanabe（Carnegie Mellon University, Language Technologies Institute）

💡 **毒舌点评**

这篇论文为语音安全评估贡献了一个设计精良的受控基准，最可贵之处在于清晰揭示了“增加音频不一定更安全”这一反直觉结论，并系统解构了模态、转录源和提示策略间的复杂交互。然而，所有对话均基于合成语音，真实的嘈杂环境、口音、自然副语言信息和多轮累积危害的缺失，使得当前结论能否直接迁移到实际部署中仍存较大疑问，而作者在这方面过于乐观的决策流程图可能会误导急于落地的从业者。

📌 **核心摘要**

- 该工作针对多轮语音对话中的社会安全内容评估，指出传统纯文本方法会丢失韵律及转录错误传递的重要信息。
- 作者构建了包含 24,000 个受控不安全变体的多轮语音对话基准，其中每段对话仅替换一个回合，注入 8 类不安全内容、5 档严重程度。
- 使用 6 种大型音频-语言模型（LALM）作为零样本安全裁判，在纯文本、纯音频、多模态三种条件下，系统评估了敏感性（Sens）、严重度保序性（Spec）和位置偏置（PB）。
- 实验结果显示，纯文本 LLaMA 的敏感性最高（0.457），但位置偏置大；音频的引入并非普遍受益，MERaLiON 在纯音频下敏感性最高，而 Audio Flamingo 在多模态下获得较好的严重度排序稳定性。
- 提出了一套面向从业者的决策流程图，依据可用模态、转录质量和对 Sens/Spec/稳定性的优先级来选择模型和提示策略。
- 主要局限在于合成语音与真实场景的分布差异，且仅覆盖英文、单回合扰动的安全情境。

🔗 **开源详情**

- 代码：https://amir-ivry.github.io/lalm-as-a-judge/ （论文脚注 1 指出资源获取入口，代码和数据均通过该页面发布）
- 模型权重：论文中未提及（所用模型均为已有开源模型，无自训练权重）
- 数据集：通过 https://amir-ivry.github.io/lalm-as-a-judge/ 获取（论文脚注 1 说明数据随代码一同发布）
- Demo：论文中未提及
- 复现材料：论文中未提及（提示词和详细设置见论文附录）
- 论文中引用的开源项目：
  - Qwen2-Audio: https://github.com/QwenLM/Qwen2-Audio
  - Audio Flamingo 3: https://github.com/NVIDIA/audio-flamingo
  - MERaLiON-AudioLLM: https://github.com/aisingapore/MERaLiON-AudioLLM
  - LLaMA 3: https://github.com/meta-llama/llama-models
  - Coqui XTTS-v2: https://github.com/coqui-ai/TTS
  - Whisper: https://github.com/openai/whisper
  - DEEPDIALOGUE: 论文中未提供独立的链接，仅引用 (Koudounas et al., 2025)

📄 [OpenReview](https://openreview.net/forum?id=2ftHZlIUKE)

---

### 23. [Pianist Transformer: Towards Expressive Piano Performance Rendering via Scalable Self-Supervised Pre-Training](/audio-paper-digest-blog/posts/2026-07-04-pianist-transformer-towards-expressive-piano)

🔥 **8.1/10** | 前25% | #音乐生成 | 创新 1.1/2 | 严谨 1.1/1.5 | 实验 1.2/1.5 | 影响 1.1/1.5 | 开源 1.5/1.5

👥 **作者与机构**

- 第一作者：Hong-Jie You（南京大学 计算机软件新技术国家重点实验室、人工智能学院）
- 通讯作者：Yu-Feng Li（南京大学 计算机软件新技术国家重点实验室、人工智能学院）
- 作者列表：Hong-Jie You（南京大学）、Jie-Jing Shao（南京大学 人工智能学院）、Xiao-Wen Yang（南京大学 人工智能学院）、Lin-Han Jia（南京大学 人工智能学院）、Lan-Zhe Guo（南京大学 智能科学与技术学院）、Yu-Feng Li（南京大学 人工智能学院）

💡 **毒舌点评**

本文将一个在NLP/CV中已被验证的预训练范式成功迁移到钢琴演奏渲染这一小众领域，并用漂亮的客观/主观双料SOTA数据说明了其有效性，故事逻辑完整。但“范式转变”的帽子扣得略大，本质上仍是“Masked Token Prediction + SFT”的标准配方，且10B-token预训练带来的性能增益在消融中仅依赖“有/无预训练”的二值比较，缺乏更细致的scaling law分析，使得“10B”这个数字更像一个资源配置的结果而非深刻的科学洞察。局限性讨论过于温和，对为何在踏板维度上未能全面领先SOTA避而不谈。

📌 **核心摘要**

1. 本文旨在解决音乐演奏渲染任务中长期存在的数据瓶颈问题：现有监督学习方法依赖昂贵的对齐数据，无法利用海量无标注MIDI数据。
2. 方法核心包括三点：一是提出统一的、不依赖显式音乐结构的MIDI事件表示，将曲谱和演奏均转化为8-token-per-note的序列，从而支持在10B-token无标注数据上进行大规模自监督预训练；二是设计了一个高效的非对称Transformer架构（10层深编码器+2层浅解码器），并结合音符层级压缩来加速长序列建模，两者协同带来了超加性的效率提升；三是提出Expressive Tempo Mapping后处理算法，将模型生成的绝对时间演奏转化为可在数字音频工作站中编辑的MIDI文件。
3. 与已有方法的关键区别在于范式迁移：从依赖结构特征（如小节、节拍）的小规模监督学习，转向不依赖显式结构特征的大规模自监督预训练。
4. 在ASAP测试集上，Pianist Transformer在综合JS Divergence (0.1634)和Intersection Area (0.8501)上大幅领先SOTA基线VirtuosoNet-ISGN (0.2791, 0.7556)。主观听力测试中，听众更偏好本模型（排名第一的概率32.7%），统计上与人声演奏无显著差异（p=0.21），甚至在平均得分上略超人类。
5. 实际意义在于提供了一个可落地的、可编辑的渲染工作流，打通了从模型生成到数字音频工作站的链路，且选用非对称架构带来了2.1倍的CPU推理速度优势。
6. 主要局限性在于解码器深度成为模型容量扩展的瓶颈，且当前聚焦于钢琴独奏，缺乏直观的高层控制接口。

🔗 **开源详情**

-   代码/模型/Demo：论文提供了项目页面链接：https://yhj137.github.io/pianist-transformer-demo/。代码、音频样本和模型检查点均可通过此页面获取。
-   数据集：预训练使用 Aria‑MIDI、GiantMIDI‑Piano、PDMX、POP909、Pianist8；监督微调与评估使用 ASAP 数据集。论文中未提供各数据集的直接下载链接，但均引用原始论文或项目地址，可通过相应文献获取。
-   复现材料：完整训练配置（Table 6）、架构超参数（Table 4）、数据预处理流程（Appendix A）、评估指标计算方法（Appendix A.4）、以及Expressive Tempo Mapping 后处理算法伪代码（Appendix B）均在附录中给出。
-   论文中引用的开源项目：提及了VirtuosoNet, ScorePerformer, MusicBERT, REMI, T5-Gemma等开源工作，但论文中未提供其直接链接。

📄 [OpenReview](https://openreview.net/forum?id=p6Ar2d4Cwr)

---

### 24. [Simultaneous Speech-to-Speech Translation Without Aligned Data](/audio-paper-digest-blog/posts/2026-07-04-simultaneous-speech-to-speech-translation-without)

🔥 **8.0/10** | 前25% | #语音翻译 | 创新 1.3/2 | 严谨 1.2/1.5 | 实验 1.1/1.5 | 影响 0.8/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Tom Labiausse（Kyutai, Paris, France）
- 通讯作者：未指定个人通讯作者，提供团队邮箱 hibiki@kyutai.org
- 作者列表：Tom Labiausse（Kyutai）、Romain Fabre（Kyutai）、Yannick Estève（LIA, University of Avignon）、Alexandre Défossez（Kyutai / Gradium）、Neil Zeghidour（Gradium）

💡 **毒舌点评**

通过消除词级对齐数据并用单BLEU奖励驱动RL，Hibiki-Zero简化了同时语音翻译的训练范式，并在多语言环境下取得了有竞争力的质量-延迟折衷，尤其在新语言适应方面展现出潜力。但过程奖励完全依赖BLEU，回避了对翻译自然度、韵律和语义保真度的直接建模；且评测数据及训练目标语音均为合成数据，存在生成-评估偏差风险，在实际场景下的泛化能力仍存疑。

📌 **核心摘要**

1. 本文核心贡献是提出一种无需词级对齐数据即可训练同时语音翻译模型的新范式，移除了为不同语种设计特定对齐启发式规则的工程瓶颈。
2. 提出Hibiki-Zero，采用“句子级对齐数据预训练+GRPO强化学习优化延迟”的两阶段框架。预训练阶段通过可控TTS在目标语音中制造多样性延迟，使模型学会变化的听-说节奏；RL阶段则通过单BLEU奖励引导模型寻找最优的同时翻译策略。
3. 与Seed LiveInterpret 2.0等最新工作的多分量复杂奖励不同，本文将翻译质量和延迟统一到基于BLEU的过程奖励中，避免了多奖励权重调参困难和奖励黑客问题，并首次将GRPO适配到多流RQ-Transformer架构。
4. 在多语言X-to-English任务上，Hibiki-Zero在长文评估上ASR-BLEU领先Seamless超5个点，说话人相似度提高超20个点，同时保持更低延迟；主观评测结果显示，在音频质量、说话人相似度和自然度上均显著优于Seamless。适应新输入语言（意大利语）仅需不到1000小时数据即可达到与Seamless相当的质量-延迟折衷。
5. 该方法显著降低开发多语言同时语音翻译系统的数据门槛，展现了向新语言快速迁移的能力，具有明确的落地潜力。
6. 主要局限包括无法在推理时动态控制质量/延迟权衡，无法控制目标语音中的口音强度，目前仅支持翻译为英语的单向设定，且训练和评估均依赖合成目标语音。

🔗 **开源详情**

- 代码：https://github.com/kyutai-labs/hibiki-zero
- 模型权重：https://huggingface.co/collections/kyutai/hibiki-zero （包含模型检查点）
- 数据集：评估基准 Audio-NTREX-4L（45小时多语言语音翻译评估数据）通过上述 HuggingFace 集合发布：https://huggingface.co/collections/kyutai/hibiki-zero ；训练所用的大规模合成语音翻译数据集（约40k小时）未公开。
- 复现材料：论文第4.1节和4.2节提供了详细的架构和四阶段训练超参数，但未附带专门的复现脚本。
- 论文中引用的主要开源项目：Mimi（Kyutai moshi项目）、Helium-2B、Whisper、MADLAD-3B、NTREX、Europarl-ST、CML-TTS、UniSpeech/WavLM等。

📄 [OpenReview](https://openreview.net/forum?id=76XSBLdBdg)

---

### 25. [PHALAR: Phasors for Learned Musical Audio Representations](/audio-paper-digest-blog/posts/2026-07-04-phalar-phasors-for-learned-musical-audio)

🔥 **8.0/10** | 前25% | #音乐生成 | 创新 1.3/2 | 严谨 1.4/1.5 | 实验 1.3/1.5 | 影响 1/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Davide Marincione（Department of Computer Science, Sapienza University of Rome, Italy）
- 通讯作者：Davide Marincione（Sapienza University of Rome）、Michele Mancusi（Sapienza University of Rome; Moises Systems, Inc.）
- 作者列表：
  Davide Marincione（Sapienza University of Rome）、Michele Mancusi（Sapienza University of Rome; Moises Systems, Inc.）、Giorgio Strano（Sapienza University of Rome）、Luca Cerovaz（Sapienza University of Rome; Paradigma, Inc.）、Donato Crisostomi（Sapienza University of Rome）、Roberto Ribuoli（Sapienza University of Rome）、Emanuele Rodolà（Sapienza University of Rome; Paradigma, Inc.）

💡 **毒舌点评**

这篇工作的核心洞察——用傅里叶移位定理将时间对齐映射为复数相位旋转——确实漂亮，让等变设计从“能用”变成“应该用”。在stem检索任务上以不到一半参数拿到69%的相对提升，训练速度是前SOTA的7倍，效率优势让人眼前一亮。不过，方法对周期性假设的依赖过于刚性，一旦遇到速度漂移或非周期性节奏，所谓“相位相干性”就变成了空中楼阁。人耳评估的样本量和被试规模也仅能勉强支撑与部分强基线的显著差异，跨到“与人类判断高度相关”的强宣称还差一口气，更别提在零样本节拍跟踪上与监督模型的鸿沟了。

📌 **核心摘要**

PHALAR 针对音乐相干性建模中传统模型因全局平均池化（GAP）丢弃时间结构的问题，提出一种将时间对齐转化为复数域相位旋转的对比学习框架。其核心是通过 Learned Spectral Pooling 层对 CNN 骨干提取的谐波特征做时域傅里叶变换，得到模值表示内容、相位表示相对时序的复数嵌入，再用相位等变的复数神经网络（CVNN）头进行对齐评分。相较之前同样面向音乐相干性的 COCOLA，PHALAR 不仅全面引入相位等变偏置，还用极轻量轴向 CNN 替代了依赖谐波‑打击乐分离（HPSS）的预处理。
- 在 MoisesDB、Slakh2100 和 ChocoChorales 三个数据集上，PHALAR 均大幅刷新 Stem Retrieval 的SOTA，以 K=64 时为例，MoisesDB 上准确率达 70.87%（+69% vs COCOLA 的 41.84%），参数量仅 2.3M，训练速度是 COCOLA 的 7 倍（50 vs 340 GPU‑hours）。
- 人耳评估中 PHALAR 与主观评分相关性最高（Pearson $\rho=0.387$, Spearman $r_s=0.414$），并在线性混合效应模型中获得最低 AIC（2451.48），解释力显著优于语义基线（CLAP、CDPAM 等），但与最强的 Audiobox$_{CE}$ 基线（$\rho=0.289$）未达到统计显著差异（Steiger检验 $p=0.123$）。
- 零样本节拍跟踪实验验证了模型将节奏周期线性化为相位旋转的能力，F1=0.627；线性探测和弦任务精度 55.2%，优于 Chroma CQT 基线（50.6%）。
- 该方法为评估生成式音频的时序对齐提供了分布无关的单个样本指标，对音乐生成、自动混音等下游任务有直接实用价值。
- 主要局限在于假设信号周期稳定，对速度漂移、非周期性节奏及强压缩音频表现下降，且训练数据偏向西方流行音乐。模型的“幅度型”特征与调性/情绪对应关系的猜想尚未验证。

| 方法 | K | MoisesDB | Slakh2100 | ChocoChorales |
|------|---|----------|-----------|---------------|
| PHALAR (2.3M) | 8 | 86.79 | 87.69 | 99.65 |
| PHALAR (2.3M) | 16 | 81.49 | 83.28 | 99.45 |
| PHALAR (2.3M) | 64 | 70.87 | 72.37 | 98.61 |
| COCOLA (5.2M) | 8 | 75.81 | 79.33 | 97.82 |
| COCOLA (5.2M) | 16 | 64.44 | 71.58 | 96.02 |
| COCOLA (5.2M) | 64 | 41.84 | 55.84 | 89.34 |
| MERT† (95M) | 64 | 45.85 | 46.13 | 86.65 |
| CLAP (200M) | 64 | 1.24 | 1.62 | 0.71 |
| CDPAM (26.2M) | 64 | 1.15 | 1.76 | 0.59 |

（†表示用 Learned Spectral Pooling 和 CVNN 头微调，完整 MERT 结果见原文附录 C）

| 模型 | Pearson $\rho$ | Spearman $r_s$ | AIC | $p$ vs PHALAR |
|------|-----------|-------------|-----|--------------|
| CLAP | 0.111 | 0.122 | 2528.46 | $\leq 0.001$ |
| CDPAM | $-0.015$ | $-0.011$ | 2543.79 | $\leq 0.001$ |
| ViSQOL | $-0.091$ | $-0.069$ | 2538.13 | $\leq 0.001$ |
| COCOLA | 0.181 | 0.153 | 2519.36 | $\leq 0.001$ |
| Audiobox$_{CE}$ | 0.289 | 0.284 | 2476.89 | $0.123$ |
| PHALAR | 0.387 | 0.414 | 2451.48 | – |

（Audiobox 的其他版本：Audiobox$_{PC}$ Pearson $\rho=0.129$，Audiobox$_{PQ}$ $\rho=0.253$，Audiobox$_{CU}$ $\rho=0.236$，相关性均低于 Audiobox$_{CE}$；PHALAR 与这些版本的差异均显著，$p<0.05$）

| 消融模型 | Accuracy(K=64) $\uparrow$ | Drop |
|----------|----------------|------|
| PHALAR (Full) | 70.87 | – |
| w/o Spectral Pooling (GAP+Real MLP) | 51.97 | $-$18.9% |
| w/o Phase Equivariance (Magnitude Only+Real MLP) | 60.59 | $-$10.3% |
| Complex Cosine Similarity | 61.93 | $-$8.94% |
| w/o Indefinite W (PSD) | 67.85 | $-$3.02% |
| Hermitian W | 69.92 | $-$0.95% |
| Mel-Spectrogram Input | 69.21 | $-$1.66% |

🔗 **开源详情**

- 代码：https://github.com/gladia-research-group/phalar（论文中明确提供，但分析时仓库状态未知）
- 模型权重：论文提及将公开检查点，具体获取方式见上述代码仓库，未提供独立下载链接
- 数据集：
  - MoisesDB：为需申请获取的私有数据集，论文未提供链接
  - Slakh2100：论文中未提供获取链接
  - ChocoChorales：论文中未提供获取链接
  - MUSDB18-HQ（用于主观实验）：论文中未提供获取链接
  - GuitarSet（用于线性探针实验）：论文中未提供获取链接
- Demo：论文中未提及
- 复现材料：训练配置已在论文第5页描述，未提供独立的配置文件
- 论文中引用的开源项目：
  - COCOLA：论文中未提供链接
  - MERT (m-a-p/MERT-v1-95M)：论文中未提供链接
  - CLAP (music_audioset_epoch_15_esc_90.14.pt)：论文中未提供链接
  - CDPAM：论文中未提供链接
  - ViSQOL：论文中未提供链接
  - Audiobox-Aesthetics：论文中未提供链接
  - librosa：论文中未提供链接
  - Beat This!：论文中未提供链接
  - Muon优化器：论文中未提供链接

📄 [OpenReview](https://openreview.net/forum?id=7sYtYeiJan)

---

### 26. [Optimality of FSQ Tokens for Continuous Diffusion for Categorical Data with Application to Text-to-Speech](/audio-paper-digest-blog/posts/2026-07-04-optimality-of-fsq-tokens-for-continuous-diffusion)

🔥 **8.0/10** | 前25% | #语音合成 | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 影响 1.1/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Vadim Popov（Huawei Noah's Ark Lab, National Research University Higher School of Economics）
- 通讯作者：Vadim Popov（popov.vadim1@huawei.com）
- 作者列表：Vadim Popov（Huawei Noah’s Ark Lab, National Research University Higher School of Economics）、Wenju Gu（Huawei Noah’s Ark Lab）、Tasnima Sadekova（Huawei Noah’s Ark Lab, National Research University Higher School of Economics）、Georgii Aparin（Huawei Noah’s Ark Lab, National University of Science and Technology MISIS）、Assel Yermekova（Huawei Noah’s Ark Lab）

💡 **毒舌点评**

这篇论文巧妙地将 FSQ 的几何结构注入了连续扩散混合生成的理论框架, 从路径测度 KL 散度给出了一个漂亮的解释, 并用一套完整的 TTS 系统秀了肌肉。但理论的华美长袍下藏着“等先验”的致命伤疤, 一旦面对真实世界中不平衡的 token 分布, 所谓“最优性”可能瞬间沦为纸上谈兵, 而作者在实验中对此几乎是讳莫如深。

📌 **核心摘要**

- 问题：连续扩散在离散数据生成（CDCD）中, 其连续潜空间的结构如何影响模型训练与预测性能, 此前缺乏系统性的理论研究和原则性的设计指导。
- 方法核心：从扩散路径测度的 KL 散度出发, 将 token 嵌入的几何位置与反向扩散轨迹的可区分性建立联系, 证明 FSQ 码本在平均最近邻距离上局部最优, 并由此提出等先验下最优预测精度的假设。
- 新颖之处：首次从 KL 路径测度和预测精度的角度论证了 FSQ 方案对 CDCD 框架的“最优性”, 将其从单纯的量化技巧提升为有理论保障的潜空间设计准则。
- 主要实验结果：在 2-8 维随机码本搜索中, FSQ 的平均最近邻距离始终最优；TTS 任务上, CDCD-TTS (FSQ-original) 以 2.00% WER 大幅优于 CosyVoice2 的 2.57% WER, 主观/客观 MOS 达 4.119, 情感相似度 EMO 达 72.7%, 同时参数量减小约 10 倍、推理加速 5–10 倍。
| Model | WER | SIM | MOS | EMO |
|--------|-----|-----|-----|-----|
| CosyVoice2 (2024) | 2.57% | 0.652 | 4.077 | 72.2% |
| F5-TTS (2024) | 1.83% | 0.665 | 3.754 | 71.4% |
| CosyVoice3 (2025) | 1.68% | 0.695 | 3.937 | 72.7% |
| FSQ-original-25 (ours) | 2.00% | 0.653 | 4.119 | 72.7% |
- 实际意义：提出了一种比 LLM 小一个数量级、速度更快的新型非自回归 TTS 方案, 在零样本语音克隆任务上达到顶尖水平, 展示了 CDCD 作为 LLM 替代方案的巨大潜力。
- 局限性：理论最优性依赖理想的等概率先验和最优网络假设, 在真实数据分布下可能失效；FSQ-perturb 随去噪步数增加逼近原始性能, 暗示 FSQ 的几何优势对有限容量和少步数的模型更为显著。

🔗 **开源详情**

- 代码：https://github.com/li1jkdaw/CDCD-TTS （论文中声称将发布训练代码及最佳 TTS 模型 checkpoint）
- 模型权重：https://github.com/li1jkdaw/CDCD-TTS （与代码同一仓库，论文中未单独提供 HuggingFace 或 ModelScope 链接）
- 数据集：LibriLight (https://github.com/facebookresearch/libri-light)，GigaSpeech (https://github.com/SpeechColab/GigaSpeech)，Emilia (https://huggingface.co/datasets/amphion/Emilia)，SEED-TTS test-en (https://github.com/BytedanceSpeech/seed-tts-eval)。训练使用上述数据集的英文子集，论文未提供预处理后数据的直接下载链接。
- Demo：论文中未提及任何 demo 页面。
- 复现材料：论文附录 E 详细描述了 CDCD‑TTS 的文本条件模块、时长预测器和 DiT 等架构细节，并承诺在代码仓库中包含完整训练配置与最佳检查点，其余复现细节需待仓库内容公开。
- 论文中引用的开源项目：
  - CosyVoice2：https://github.com/FunAudioLLM/CosyVoice
  - F5‑TTS：https://github.com/SWivid/F5-TTS
  - seed‑tts‑eval：https://github.com/BytedanceSpeech/seed-tts-eval
  - UTMOS：https://huggingface.co/spaces/sarulab-speech/UTMOS-demo
  - emotion2vec：https://huggingface.co/emotion2vec
  - EnCodec：https://github.com/facebookresearch/encodec
  - HiFi‑GAN：https://github.com/jik876/hifi-gan
  - WavLM：https://github.com/microsoft/unilm/tree/master/wavlm

📄 [OpenReview](https://openreview.net/forum?id=0uS3P0Dlh9)

---

### 27. [SonicMaster: Towards Controllable All-in-One Music Restoration and Mastering](/audio-paper-digest-blog/posts/2026-07-04-sonicmaster-towards-controllable-all-in-one-music)

🔥 **8.0/10** | 前25% | #音频修复 | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 影响 1/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Jan Melechovsky （Singapore University of Technology and Design）
- 通讯作者：Jan Melechovsky （Singapore University of Technology and Design）
- 作者列表：Jan Melechovsky（Singapore University of Technology and Design）、Ambuj Mehrish（Ca' Foscari University of Venice）、Abhinaba Roy（Singapore University of Technology and Design）、Dorien Herremans（Singapore University of Technology and Design）

💡 **毒舌点评**

SonicMaster在"All-in-One"音乐修复上的尝试是勇敢且及时的，用一套流匹配框架统一了19种退化类型的处理，避免了以往的级联错误。但数据生成高度依赖模拟退化，而真实世界录音的退化远比参数化函数复杂和混沌得多，模型对真实复杂混合退化的泛化能力仍是未知数。VAE潜在空间的引入确实提升了效率，但也带来了可闻的编解码伪影——论文自己都承认会出现“机器人嗓音”和清晰度损失，这在一个标榜“专业级”的母带处理场景下显得不够“clean”。与效应移除模型的对比更像是一场不公平的“表演赛”，高得惊人的SI-SDR背后，很可能只是模型学会了把音频“母带化”得更响、更亮，而非真正忠实地修复了信号。

📌 **核心摘要**

本文提出了SonicMaster，首个统一的、基于文本控制的音乐修复与母带处理生成模型。其核心目标是解决非专业录音中常见的多种音质问题，如混响、失真、削波、频响失衡和立体声场狭窄等。方法上，论文构建了一个包含19种模拟退化类型的大规模配对数据集（约17.5万音频对），并采用基于流匹配（Flow Matching）的生成框架，直接学习从低质量音频到高质量音频的映射，通过FLAN-T5 Large语言模型实现自然语言指令的控制。与以往针对单一任务（如单独去混响、去削波）的模型不同，SonicMaster能在一个前向传播中联合处理多种退化，并可通过文本提示实现精细或自动化的修复。实验结果显示，SonicMaster在多种客观指标（如EQ误差、SI-SDR）和主观听力测试上均显著优于基线方法，例如在EQ任务中各项平均绝对误差远低于Text2FX，在去混响和动态处理上的SI-SDR分别高达45.76 dB和47.11 dB，远超专门的效应移除模型。其实际意义在于为非专业音乐创作者提供了一个“一键式”的专业级音质提升工具，极大降低了母带处理的技术门槛。主要局限在于训练数据基于模拟而非真实录音退化，VAE的编解码可能在高保真度要求下引入额外伪影，且模型对复杂、长指令的鲁棒性仍有待验证。

🔗 **开源详情**

- 代码：https://github.com/AMAAI-Lab/SonicMaster
- 模型权重：论文中未明确提及发布链接，但声明将与代码一同开源。
- 数据集：SonicMaster dataset，声明将通过GitHub仓库发布。
- Demo：示例音频（demo samples）在GitHub仓库中提供。
- 复现材料：论文中未单独提供复现包。附录A给出了训练关键配置（5×NVIDIA L40S，batch size 80，训练40个epoch，CFG概率0.1等），但优化器、学习率等关键细节缺失。代码仓库应包含训练和推理脚本。
- 论文中引用的开源项目：
  - Pyroomacoustics (https://github.com/LCAV/pyroomacoustics)
  - openAIR library: https://www.openair.hosted.york.ac.uk/
  - Jamendo API: https://www.jamendo.com/
  - librosa (未提供链接)
  - dasp-pytorch (未提供链接)
  - Text2FX (Chu et al., 2025)
  - RemFX (Rice et al., 2023)
  - Stable Audio Open VAE (Evans et al., 2024)
  - FLAN-T5 Large (Chung et al., 2024)
  - CLAP (Elizalde et al., 2023)
  - Audiobox Aesthetics toolbox (Tjandra et al., 2025)
  - BABE/BABE-2 评估样本: http://research.spa.aalto.fi/publications/papers/dafx-babe2/
  - Mel2Mel + Diffwave (Kandpal et al., 2022)

📄 [OpenReview](https://openreview.net/forum?id=T0HjpdCPxU)

---

### 28. [Do Audio LLMs Listen or Read? Analyzing and Mitigating Paralinguistic Failures with VoxParadox](/audio-paper-digest-blog/posts/2026-07-04-do-audio-llms-listen-or-read-analyzing-and)

🔥 **8.0/10** | 前25% | #语音属性识别 | 创新 1.4/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 影响 1.2/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Jiacheng Pang（University of Southern California, Institute for Creative Technologies）
- 通讯作者：Ashutosh Chaubey（University of Southern California, Institute for Creative Technologies）
- 作者列表：Jiacheng Pang、Ashutosh Chaubey、Mohammad Soleymani（均为 USC Institute for Creative Technologies）

💡 **毒舌点评**

作者用精心设计的对抗基准 VoxParadox 漂亮地揭露了 Audio LLM 对非语言声学线索的视而不见，这种“语言-声学矛盾”的构造思路比现有任何副语言评测都更致命。随后提出的 PCLM+DPO 方案在两项基线上带来超过 47 个百分点的绝对准确率提升，效果令人印象深刻，“听而非读”的转向肉眼可见。然而，PCLM 终究是事后补丁，层选择靠直觉而非系统验证，DPO 负样本构造过于简单，且 200 例人工验证的基准本身在部分主观任务上一致性堪忧。

📌 **核心摘要**

本文针对 Audio LLM 在副语言理解上的系统性失败，提出了对抗性基准 VoxParadox 和一套后训练修复方案。VoxParadox 包含 2,000 个经人工验证的 MCQ 样本，覆盖 10 个副语言任务，每条样本的语音内容故意与声学属性矛盾，以此暴露模型对文本捷径的依赖。实验表明，12 个 Audio LLM 在 VoxParadox 上的真值准确率极低（最高仅 30.85%），但对文本误导标签的符合率平均高达 64.34%，逆向音频实验进一步证实了文本内容主导模型决策。通过逐层探测，作者揭示了两个瓶颈：副语言信息在音频编码器的深层与编码器-LLM 接口处衰减，且 LLM 即便持有可恢复的声学表征也常不加以利用。针对这些瓶颈，作者设计了 Prompt-Conditioned Layer Mixer（PCLM）模块，根据用户提示自适应地混合多个编码器层的特征，并结合 DPO 鼓励模型选择声学支持项。在 AF3 上，PCLM+DPO 将 VoxParadox 准确率从 17.40% 提升至 65.20%，MMSU 副语言子集从 37.74% 提升至 54.78%；在 Qwen2-Audio 上，VoxParadox 从 14.85% 升至 72.30%，MMSU 副语言子集从 34.37% 升至 63.26%。与此同时，对抗标签符合率从约 70% 骤降至 16-23%。该工作对提升语音助手的情感识别、年龄/性别判断等具有实际意义，但方法属于后置修复，且基准的合成特性限制了其在真实场景中的外推能力。

🔗 **开源详情**

- 代码：论文中未提及代码链接。项目主页 https://voxparadox.github.io/ 可能提供代码，但论文内未直接给出。
- 模型权重：论文中未提及单独发布的模型权重。所提方法 PCLM 及 DPO 基于已有的 Audio Flamingo 3 与 Qwen2-Audio-7B-Instruct 进行训练，但未说明是否发布微调后的权重。
- 数据集：论文引入的 VoxParadox 基准包含 2,000 个经人工验证的样本，覆盖 10 个副语言任务。论文未给出直接的数据集下载链接，仅指向项目页面 https://voxparadox.github.io/ 可能提供访问方式。训练所用数据列于附录 D，主要包含公开数据集（如 VoxCeleb2、MSP-Podcast、IEMOCAP 等），但论文未提供打包后的训练集链接。
- Demo：论文中未提及在线演示地址，仅提供项目主页 https://voxparadox.github.io/。
- 复现材料：论文在附录 C 中给出了 PCLM 的训练超参数、两阶段 SFT 及 DPO 的设置细节，但未提供复现所需的代码、配置文件或检查点。项目页面可能包含补充材料。
- 论文中引用的开源项目：
  - Whisper (OpenAI) — https://github.com/openai/whisper
  - SpeechBrain — https://github.com/speechbrain/speechbrain
  - HuBERT — https://github.com/facebookresearch/fairseq/tree/main/examples/hubert
  - CLAP (LAION) — https://github.com/LAION-AI/CLAP
  - VoxCeleb2 — https://www.robots.ox.ac.uk/~vgg/data/voxceleb/vox2.html
  - GPT-4o TTS（闭源商业服务）
  - ElevenLabs TTS（闭源商业服务）
  - Azure TTS（闭源商业服务）
  - 其他引用的开源模型或基准（Audio Flamingo 2/3、Qwen2-Audio、SALMONN、Kimi-Audio、VITA-Audio、MiMo-Audio、Step-Audio-R1、Qwen2.5-Omni、Qwen3-Omni 等）均可在各自官方仓库或 HuggingFace 页面获取，论文未一一列出具体链接。

📄 [OpenReview](https://openreview.net/forum?id=v7rYbRR9Zw)

---

### 29. [Multiple Choice Learning of Low-Rank Adapters for Language Modeling](/audio-paper-digest-blog/posts/2026-07-04-multiple-choice-learning-of-low-rank-adapters-for)

🔥 **8.0/10** | 前25% | #多模态模型 | 创新 1.3/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 影响 1.1/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Victor Letzelter（LTCI, Télécom Paris, Institut Polytechnique de Paris；Valeo.ai）、Hugo Malard（LTCI, Télécom Paris, Institut Polytechnique de Paris）（同等贡献）
- 通讯作者：Victor Letzelter（letzelter.victor@hotmail.fr）
- 作者列表：Victor Letzelter（LTCI, Télécom Paris, Institut Polytechnique de Paris；Valeo.ai）、Hugo Malard（LTCI, Télécom Paris, Institut Polytechnique de Paris）、Mathieu Fontaine（LTCI, Télécom Paris, Institut Polytechnique de Paris）、Gaël Richard（LTCI, Télécom Paris, Institut Polytechnique de Paris）、Slim Essid（LTCI, Télécom Paris, Institut Polytechnique de Paris）、Andrei Bursuc（Valeo.ai）、Patrick Pérez（Kyutai）

💡 **毒舌点评**

本文巧妙地将 Multiple Choice Learning 与 LoRA 结合，为自回归语言模型的多模态输出提供了参数高效的解决方案。但理论分析建立在苛刻的“组件不重叠”假设上，对真实语言数据中普遍存在的模式重叠问题避而不谈，且缺乏对各个适配器所学语义的深入剖析，使方法的“多样性”仅停留在指标层面，其内部分工机制仍是一个黑箱。

📌 **核心摘要**

1. 要解决的问题：标准自回归语言模型在面对歧义性输入（如音频、图像描述）时，本质上是病态问题——存在多个同样合理的“未来”输出，但最大似然估计（MLE）训练倾向于学习一个平均化的、缺乏多样性的条件分布 $p(x|c)$。
2. 方法核心：提出 LoRA-MCL，在冻结的基础大语言模型上，为每个预设的输出假设（Hypothesis）注入一个独立的低秩适配器（LoRA），并通过赢家通吃（WTA）损失进行训练。这使得多个适配器在竞争中专精于数据分布中的不同模式。
3. 与已有方法相比的新颖之处：首次将 Multiple Choice Learning 范式引入到大语言模型的自回归语言建模的参数高效微调（PEFT）场景。用轻量级的 LoRA 适配器替代了以往MCL方法中体积庞大、难以初始化的多输出头，并利用分组 1×1 卷积实现了多假设前向传播的并行化，解决了训练效率问题。同时，从混合分布假设出发，为WTA损失提供了理论下限。
4. 主要实验结果：
   - 音频字幕（AudioCaps/Clotho）：LoRA-MCL（K=5, ε=0.05/Annealed）在 SPIDEr（质量）与 mBLEU-4（多样性）构成的帕累托前沿上，全面优于 LoRA-MLE 和 LoRA-MoE 基线。例如 AudioCaps 上 SPIDEr 达 0.728 vs. 最佳基线 0.715，Clotho 上达 0.443 vs. 0.430。
   - 图像字幕（TextCaps, K=3）：SPIDEr 达 0.955，超过最强基线（DBS, λ=1.0）的 0.926，同时保持了更低的 mBLEU-4（0.520 vs. 0.421），在质量和多样性间取得了更好的平衡。
   - 机器翻译（EN→DE, K=3）：在 Pairwise-BLEU 与 Leave-One-Out BLEU 组成的空间中，LoRA-MCL 展现出了优于相同计算预算下 MLE 和 DBS 基线的质量-多样性平衡点。
   - 合成马尔可夫链实验：在可控的混合马尔可夫链数据上，验证了 MCL 能够恢复两个独立的转移矩阵，而 MLE 只能学到它们的加权平均，直观地展示了方法分离模式的能力。
5. 实际意义：为大语言模型（LLM）的多样性生成提供了一种即插即用的参数高效微调范式，无需修改模型架构或增加推理时的额外计算开销（与基线对齐计算预算），即可一次性产出多条不同且合理的候选序列，对音频/视觉描述、机器翻译等歧义性任务有直接落地价值。
6. 主要局限性：理论分析依赖于数据分布组件“互不重叠”的强假设，与实际不符；松弛系数 $\varepsilon$ 和模拟退火调度器的参数对性能影响敏感，需要针对任务仔细调参；仅通过合成数据和简单的双语实验来验证适配器的模式分离能力，对其在真实复杂数据上学到的具体语义概念缺乏深入分析；未在预训练阶段验证该方法的有效性。

🔗 **开源详情**

- 代码：https://github.com/Victorletzelter/LoRA-MCL
- 模型权重：论文中未提及发布训练好的模型权重。
- 数据集：论文使用公开数据集 AudioCaps、Clotho-V2、TextCaps 以及 WMT’17–20、Flores-200 和 newstest2014。未提供自定义数据集链接，原始数据集需从各自官方网站获取。
- 复现材料：论文附录 D、E 提供了详尽的实验细节，包括模型架构、超参数、数据预处理方式、评估指标和并行化策略。未提供 Docker 镜像或完整的复现脚本包。

📄 [OpenReview](https://openreview.net/forum?id=CCO35e4DCO)

---

### 30. [Bridging the Stability-Expressivity Gap: Synthetic Data Scaling and Preference Alignment for Low-Resource Spoken Language Models](/audio-paper-digest-blog/posts/2026-07-04-bridging-the-stability-expressivity-gap-synthetic)

🔥 **8.0/10** | 前25% | #语音合成 | 创新 1.4/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 影响 1.2/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Yizhong Geng（北京邮电大学）
- 通讯作者：Xiaoyu Shen（Eastern Institute of Technology, Ningbo）
- 作者列表：Yizhong Geng（北京邮电大学）、Yanliang Li（Beijing Logic Intelligence Technology）、Jinghan Yang（北京邮电大学）、Tianhan Jiang（University of California, USA）、Boxun An（Northwestern University, USA）、Ya Li（北京邮电大学）、Xiaoyu Shen（Eastern Institute of Technology, Ningbo）

💡 **毒舌点评**

本文敏锐地抓住低资源SLM中合成数据泛滥引发的“越稳定越单调”的分布塌缩现象，并将Flow-Matching架构的内在解耦设计巧妙地转化为无需人工标注的自对齐信号，思路相当漂亮。然而，TDSC对目标语言ASR模块的硬依赖限制了其在最极端的语言上的用武之地，且整个pipeline的计算开销在资源受限场景下的性价比分析仍然缺席。

📌 **核心摘要**

本文研究低资源语言的口语语言模型（SLM）在合成数据驱动训练下凸显的“稳定性-表现力缺口”（Stability-Expressivity Gap）：随着合成数据比例增加，词准确率（WER）持续降低，但韵律多样性和自然度在超过临界比例后急剧退化（作者称之为Synthetic Erosion）。作者利用定性混合分布熵理论解释了该非单调现象。为弥合缺口，作者提出两种自对齐框架：Disentanglement-Guided Self-Alignment (DGSA) 利用Flow-Matching SLM中韵律与音色的天然解耦特性，通过切换风格条件生成同一说话人的“表现力”和“稳定”输出，构建偏好对进行无需人工标注的DPO训练；Temperature-Driven Self-Critique (TDSC) 则面向完全缺乏真实录音的极端低资源场景，通过多温度采样探索、复合评判器过滤和迭代SFT+DPO优化，实现从稳定初始化到韵律恢复的闭环自举。在泰语上，DGSA将自然度MOS从3.6显著提升至4.4，同时保持WER不退化，性能超越ElevenLabs等商业系统；在老挝语纯合成数据训练下，TDSC取得WER 29.8%、NMOS 4.5的成绩，首次实现该语言的零样本声音克隆能力。方法为低资源语言合成提供了一条可行的数据与对齐策略，主要局限在于依赖目标语言ASR模块及仅在两种东南亚语言上进行了验证。

🔗 **开源详情**

- 代码：论文未提供代码仓库链接。
- 模型权重：论文未提供模型权重下载链接。
- 数据集：论文未提供构造的数据集（如合成泰语、老挝语数据）下载链接。所用基准数据集：Common Voice (https://commonvoice.mozilla.org/, CC‑0), TSynC‑2 (未提供公开链接)。合成数据利用 MMS‑TTS, Seamless‑M4T‑v2, Typhoon2‑Audio 生成，但未直接发布。
- Demo: https://luoji.cn/static/multilantts-demo-main/
- 复现材料：论文附录D详细提供了模型配置、训练超参数、过滤阈值等，但无代码、预训练权重或检查点文件。
- 文中引用的开源项目:
  - CosyVoice 2: https://github.com/FunAudioLLM/CosyVoice
  - S3Tokenizer (SpeechTokenizer): https://github.com/ZhangXInFD/SpeechTokenizer
  - HiFi‑GAN: https://github.com/jik876/hifi-gan
  - Whisper-large-v3: https://github.com/openai/whisper
  - Dolphin-small: https://github.com/thuhcsi/Dolphin
  - MMS‑TTS: https://github.com/facebookresearch/fairseq/tree/main/examples/mms
  - SeamlessM4T‑v2: https://github.com/facebookresearch/seamless_communication
  - Typhoon2‑Audio: https://github.com/scb-10x/Typhoon2-Audio
  - PyThaiNLP: https://github.com/PyThaiNLP/pythainlp
  - LaoNLP: https://github.com/wannaphong/LaoNLP
  - WavLM: https://github.com/microsoft/unilm/tree/master/wavlm
  - Common Voice: https://commonvoice.mozilla.org/

📄 [OpenReview](https://openreview.net/forum?id=a57NvkgjT2)

---

### 31. [FutureOmni: Evaluating Future Forecasting from Omni-Modal Context for Multimodal LLMs](/audio-paper-digest-blog/posts/2026-07-04-futureomni-evaluating-future-forecasting-from)

🔥 **8.0/10** | 前25% | #音视频问答 | 创新 1.3/2 | 严谨 1.2/1.5 | 实验 1.1/1.5 | 影响 1.1/1.5 | 开源 1.1/1.5

👥 **作者与机构**

- 第一作者：Qian Chen（复旦大学，上海）
- 通讯作者：Jinlan Fu（复旦大学，上海）
- 作者列表：Qian Chen（复旦大学，上海）、Jinlan Fu（复旦大学，上海）、Changsong Li（复旦大学，上海；上海创新研究院）、Min Zhang（哈尔滨工业大学，深圳）、See-Kiong Ng（新加坡国立大学）、Xipeng Qiu（复旦大学，上海；上海创新研究院）

💡 **毒舌点评**

FutureOmni 精准地抓住了当前多模态 LLM 评估中“回顾性理解”泛滥而“前瞻性预测”缺失的真实痛处，尤其是首次将音频拉入未来预测评估的核心，这使得它天生比纯视觉的未来预测基准高出一个段位。然而，OFF 训练策略本质是标准指令微调加上因果推理数据，在方法论上缺乏令人惊喜的架构创新，更像是一次精心设计的数据集和评估框架贡献，而非全新的建模范式。

📌 **核心摘要**

1.  要解决的问题：现有多模态大语言模型（MLLM）评估主要聚焦于回顾性理解，忽视了从音视频联合上下文中预测未来事件的能力，尤其是音频模态在预测中的关键作用长期未被系统性地评估。
2.  方法核心：构建了首个面向 Omni-modal 未来预测的基准测试 FutureOmni（含 919 个视频、1,034 条多选 QA），并提出 OFF （Omni-Modal Future Forecasting） 训练策略。该策略基于 7, 761 条指令微调数据，训练模型基于历史音视频片段进行因果推理和预测。
3.  与已有方法的不同：区别于纯视觉（VLEP、IntentQA）或纯文本的未来预测基准，FutureOmni 首次将音频模态作为预测的核心信息来源。引入了四种对抗性干扰项（仅视觉、仅音频、延迟、逆因果），迫使模型进行真正的跨模态因果推理。
4.  主要实验结果：在 20 个模型上进行了评估，表现最佳的商用模型 Gemini 3 Flash 准确率仅为 64.8%，而最强开源 Omni 模型 Qwen3-Omni 为 53.05%。OFF 训练策略使得 Qwen2.5-Omni 在语音密集型场景中提升了近 10%（37.83% → 47.75%） ，video-SALMONN 2 提升了 3.87%。此外，OFF训练还展现了对通用音视频基准的泛化能力提升。

| 模型 | Cartoon | Edu | Emerg | Surv | Daily | Movie | Game | Doc | Avg |
|------|---------|-----|-------|------|-------|-------|------|-----|-----|
| AVicuna 7B | 31.62 | 39.00 | 26.09 | 35.21 | 32.81 | 28.19 | 33.73 | 20.83 | 30.37 |
| VideoLLaMA2 7B | 43.59 | 47.00 | 29.35 | 53.52 | 40.62 | 32.60 | 57.83 | 31.94 | 40.75 |
| Qwen2.5-Omni 3B | 37.61 | 51.00 | 29.35 | 57.75 | 35.94 | 32.16 | 51.81 | 25.00 | 38.91 |
| video-SALMONN 2 7B | 43.59 | 55.00 | 39.13 | 57.04 | 48.44 | 40.97 | 57.83 | 34.72 | 46.03 |
| Qwen3-Omni 30B | 52.94 | 68.00 | 32.88 | 62.71 | 59.05 | 45.60 | 62.65 | 49.25 | 53.05 |
| Gemini 3 Flash | 62.71 | 75.00 | 58.70 | 80.28 | 68.75 | 59.03 | 65.06 | 53.47 | 64.80 |
| GPT-4o (video-only) | 44.06 | 65.00 | 34.78 | 57.74 | 52.34 | 50.22 | 51.80 | 36.11 | 49.70 |

5.  实际意义：为多模态 LLM 的预测推理能力提供了标准化的评估框架，有望推动自动驾驶、人机交互等需要前瞻性感知的应用场景研究。
6.  主要局限性：数据集规模相对较小（919个视频），视频时长分布不均，中长视频样本不足导致分析结论可能不稳定。OFF 训练策略创新性有限。评估仅限选择题形式，缺乏开放式生成评估，可能无法完整反映模型的预测能力。

🔗 **开源详情**

-   代码：提供了 GitHub 链接：`https://github.com/OpenMOSS/FutureOmni`
-   模型权重：未提供 OFF 微调后的模型检查点。
-   数据集：FutureOmni 评测基准和 FutureOmni-7K 指令微调数据集可通过上述 GitHub 仓库获取。
-   Demo：未提及。
-   复现材料：训练和推理配置见附录，代码仓库提供了实现脚本。论文本身未提供可直接运行的完整训练配置文件或详细的数据预处理脚本。

📄 [OpenReview](https://openreview.net/forum?id=76zKCPBKXP)

---

### 32. [Acoustic Interference: A New Paradigm Weaponizing Acoustic Latent Semantic for Universal Jailbreak against Large Audio Language Models](/audio-paper-digest-blog/posts/2026-07-04-acoustic-interference-a-new-paradigm-weaponizing)

🔥 **8.0/10** | 前25% | #音频理解 | 创新 1.8/2 | 严谨 1.2/1.5 | 实验 1.1/1.5 | 影响 1.2/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Yanyun Wang（香港科技大学（广州），The Hong Kong University of Science and Technology (Guangzhou)）
- 通讯作者：Li Liu（香港科技大学（广州），The Hong Kong University of Science and Technology (Guangzhou)）
- 作者列表：Yanyun Wang（香港科技大学（广州））、Yu Huang（香港科技大学（广州））、Zi Liang（香港理工大学，The Hong Kong Polytechnic University）、Xixin Wu（香港中文大学，The Chinese University of Hong Kong）、Li Liu（香港科技大学（广州））

💡 **毒舌点评**

这篇论文提出了一个令人眼前一亮的"听觉干扰"新范式，彻底跳出了"音频必须夹带恶意内容"的旧思路，仅靠注入特定的声学潜在语义（ALS）就能让无害音频成为通用越狱触发器，洞察相当深刻，可解释性分析也做得很扎实。然而，方法对Bark模型的依赖引入了"鸡生蛋"的隐患——ALS是否真的是LALM的通用软肋，还是恰好命中了Bark某种未被发现的生成缺陷？部分最强基线（如AudioJailbreak）因对方未开源或评估设定不统一，导致在最关键的"通用越狱"赛道上缺乏直接对比数据，让"SOTA"声明的说服力打了一定折扣。

📌 **核心摘要**

本论文旨在揭示并利用大型音频语言模型（LALMs）在安全对齐上的一个根本性盲区：模型的安全防御可以被完全不包含任何恶意内容的"干扰音频"所击穿。作者提出了一种全新的"声学干扰"范式，其核心是声学潜在语义（ALS）——一种从Bark等音频生成模型先验中挖掘出的、高度抽象且可解释的副语言特征。与以往必须依赖实例级优化、在线生成恶意音频的攻击方法不同，本文设计的声学干扰攻击（AIA）实现了攻击载荷与音频模态的解耦，仅需将一组预先生成并排序好的通用干扰音频附加在标准恶意文本查询上，就能诱导LALM的推理路径从拒绝区域漂移到合规区域。在Qwen2.5-Omni、GPT-4o-Audio、Gemini-2.5-Pro等10个主流LALM上的实验表明，AIA能将文本攻击成功率（ASR）平均提升20-50个百分点以上，并在多数模型上显著优于9种现有基线方法。此外，论文通过logit偏移、隐空间几何分析和因果干预实验，系统揭示了"推理路径漂移"的底层机制，并识别出高音调、高语速、高情绪效价等具体的易受攻击声学模式。该工作不仅拓展了LALM的攻击面，更揭示了跨模态安全对齐的深层脆弱性。主要局限性在于ALS的构建依赖单一代理生成模型（Bark），且部分对比实验受限于基线方法的非开源性质或评估设定不一致。

🔗 **开源详情**

- 代码：论文提供了项目页面链接 https://flaai.github.io/AIA_page，并声明"代码和通用ALS库已开源"，但审阅时网站上未见直接可访问的GitHub仓库链接。
- 模型权重：论文中未提及提供任何模型权重。
- 数据集：论文使用的五个数据集（JBB-Behaviors, WildJailbreak, HH-RLHF, AdvBench, HarmBench）均为已有公开数据集，论文未提供自定义数据集，也未提供上述数据集的直接下载链接。
- Demo：论文中未提及Demo。
- 复现材料：论文中未提及除代码仓库外的额外训练配置、检查点或附录材料。关键的系统提示词、索引权重等细节未公开。
- 论文中引用的开源项目：Bark（Suno-AI, 2023）；CLAP（Wu et al., 2023）；WavLM（Chen et al., 2022）；PAIR（Chao et al., 2025）；JailbreakBench（Chao et al., 2024）；各目标 LALM（如 Qwen3-Omni, Qwen2.5-Omni, Qwen2-Audio, LLaMA-Omni, Kimi-Audio, OmniVinci, MiMo-Audio, GPT-4o-Audio, Gemini 系列等）；评估器 GPT-4o 与 GPT-4o-mini；安全模型 HarmBench-Llama-2 与 Llama Guard 3。未提供上述项目的直接链接，仅通过参考文献引用。

📄 [OpenReview](https://openreview.net/forum?id=FygaF16KNo)

---

### 33. [ReGen: Hierarchical Multi-Prompt Representation Generation for Efficient Waveform Diffusion Models](/audio-paper-digest-blog/posts/2026-07-04-regen-hierarchical-multi-prompt-representation)

🔥 **8.0/10** | 前25% | #语音编码 | 创新 1.4/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 影响 1.2/1.5 | 开源 0.4/1.5

👥 **作者与机构**

- 第一作者：Sang-Hoon Lee（Ajou University, Department of Artificial Intelligence）
- 通讯作者：Sang-Hoon Lee（Ajou University, Department of Artificial Intelligence）
- 第二作者：Ha-Yeong Choi（KT Corp., Seoul, Korea）

💡 **毒舌点评**

本文将火爆的表示对齐（REPA）升级为层次化多提示表示生成，配合自己捣鼓的“广义流匹配（GFM）”，在12.5Hz极低维度下重建出可懂语音，胆识过人不假。但GFM只是GED的简单速度场移植，理论深度存疑；排斥项的超参搜索如同开盲盒，且对比基线全倾向GAN编解码器，与同宗同源的纯扩散基线（如FlowDec）连个照面都没打。代码和权重还锁在保险柜里，评审能给的信任额度实在有限。

📌 **核心摘要**

1. 要解决什么问题：现有表示对齐（REPA）虽能加速扩散训练，但在极低比特率条件下会因隐式的潜在纠缠导致“容量错配”（capacity mismatch），限制生成质量并导致过平滑/模式坍塌。
2. 方法核心：提出ReGen框架，在同一个DiT内完成波形、Mel谱和语义（SSL）表示的“联合估计与生成”，通过层次化结构和掩码多提示机制实现语义→声学→波形的渐进解耦；提出广义流匹配（GFM），在速度场空间引入排斥项，防止多轨迹坍缩至条件均值。
3. 与已有方法比新在：从“对齐”转向“生成”，将表示本身视为可生成的随机变量联合建模，彻底解除对固定条件的过度依赖；首次在CFM框架下的向量场空间引入样本间排斥正则。
4. 主要实验结果：ReGenTokenizer在25Hz/400bps下取得WER 2.70 (LibriSpeech) 和 4.43 (LibriTTS) 的成绩，明显优于同码率GAN编码器；ReGenVAE在12.5Hz/32维下WER低至2.11，PESQ-WB达2.99，逼近成熟的全频带编解码器；ReGenVoice在0.5k小时数据上即获WER 1.46、SIM 0.64，推理RTF仅0.08。

| 方法 | Hz | 码率 | WER(%)↓ | PESQ‑WB↑ | SPK‑SIM↑ |
|---|---|---|---|---|---|
| EnCodec (600Hz) | 24k | 6000bps | 2.15 | 2.77 | 0.89 |
| Mimi (100Hz) | 24k | 1100bps | 2.92 | 2.27 | 0.73 |
| WavTokenizer (40Hz) | 24k | 480bps | 11.20 | 1.62 | 0.48 |
| ReGenTokenizer-Emilia (25Hz) | 24k | 400bps | 2.70 | 1.52 | 0.74 |
| ReGenVAE-Emilia (12.5Hz) | 24k | - | 2.11 | 2.99 | 0.89 |

5. 实际意义：提供了一种极低比特率下的单阶段高效波形生成范式，对实时通信（流式生成）、语音大模型的声学分词器重构pipeline简化，以及极低延迟TTS，均具有直接工程价值。
6. 主要局限性：仍需对抗后训练弥补扩散模型自身的生成锐度；GFM的排斥项属启发式技巧，缺乏深层理论保证；未完全解决高保真度下的金属音问题；代码和权重均未公开。

🔗 **开源详情**

- 代码与模型权重：论文在结论和附录D中多次声明“将在论文接收后公布所有源代码和检查点”，但在本次审校期间未发现任何可访问的公开仓库链接，`has_code`和`has_model`均为“否”/“否”。
- 数据集：实验所使用的LibriTTS、LibriSpeech、Emilia等均为公开学术数据集，论文在参考文献中给出了数据出处，但未在正文内提供直接下载链接。
- Demo：提供了官方音频展示页 https://regenvoice.github.io/demo/。
- 复现材料：附录A通过Table 10提供了涵盖编码器、解码器、训练策略、损失权重的全套超参数细节，复现配置相当完备。
- 引用的重要开源项目（原文均有引用）：
  - StreamFlow: https://openreview.net/forum?id=1cURNMriee
  - EnCodec: https://github.com/facebookresearch/encodec
  - DAC: https://github.com/descriptinc/descript-audio-codec
  - Mimi: https://github.com/kyutai-labs/moshi
  - CosyVoice系列: https://github.com/FunAudioLLM/CosyVoice
  - F5-TTS: https://github.com/SWivid/F5-TTS

📄 [OpenReview](https://openreview.net/forum?id=T8Y9elIrXa)

---

### 34. [DiscoForcing: A Unified Framework for Real-Time Audio-Driven Character Control with Diffusion Forcing](/audio-paper-digest-blog/posts/2026-07-04-discoforcing-a-unified-framework-for-real-time)

🔥 **8.0/10** | 前25% | #音乐生成 | 创新 1.5/2 | 严谨 1.4/1.5 | 实验 1.3/1.5 | 影响 0.8/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Kaiyang Ji、Bingsheng Qian（共同一作，上海科技大学）
- 通讯作者：Jingya Wang（上海科技大学）
- 作者列表：Kaiyang Ji（上海科技大学，InstAdapt）、Bingsheng Qian（上海科技大学，InstAdapt）、Binghuan Wu（上海科技大学）、Kangyi Chen（上海科技大学）、Ye Shi（上海科技大学，InstAdapt）、Jingya Wang（上海科技大学）

💡 **毒舌点评**

这篇论文展现了一个令人印象深刻的实时音频驱动角色控制系统。它成功将扩散forcing框架移植到“零前瞻、低延迟”的流式场景，并搭建了从因果音频编码到虚拟人/物理机器人执行的完整闭环。其工程野心和部署完备性远超同类工作。然而，剥开华丽系统外壳，核心方法多是将已知训练技巧（混合调度、历史加噪）在新的任务组合上进行精巧重组，而非提出根本性的新扩散范式或序列建模原理。对DRAMA++等更强SOTA的遗漏比较，以及缺乏超长时间运行（>10分钟）下的系统性稳定性测试，让其在顶会的“方法贡献”维度上显得略显单薄。这是一份出色的系统答卷，但作为顶会核心方法论文，必须经受住“究竟改变了什么底层认知”的严苛拷问。

📌 **核心摘要**

1.  问题与挑战：论文旨在解决严格因果、低延迟约束下的实时音频驱动角色控制问题。作者明确指出，现有系统多依赖未来上下文进行离线生成，在流式部署中会出现反应延迟、节拍失步和长期滚动中的误差累积，且缺乏在硬实时计算预算下的闭环验证。
2.  方法核心：提出DiscoForcing框架：（1）一个因果音乐编码器（VQ-PAE），从滑动窗口音频中提取解耦的离散节奏码和连续相位对齐特征；（2）一个基于扩散forcing的潜在序列模型，通过异质噪声水平训练，并采用包含随机、单调和梯形噪声进程的混合时间调度策略；（3）一个基于时间引导的历史加噪采样方案，巧妙地权衡流式响应速度与长程稳定性。
3.  关键设计：推理时，维护一个固定长度的FIFO去噪窗口，对较远的历史token按梯形噪声轮廓重新加噪，引导模型更关注当前音频信号，解决了自回归模型因依赖陈旧历史而产生的锁定和漂移问题。
4.  实验优势：在FineDance和AIST++上，DiscoForcing在FID_k（23.84, 18.87）和FID_g（8.62, 11.57）上全面优于离线基线（EDGE, Lodge, MEGA）和流式基线（CLoSD, DART, MotionStreamer），且节拍对齐BAS具有竞争力。人类偏好研究中总体偏好率达70%以上，物理人形机器人跟踪成功率达85.3%。
5.  实际意义：提供了一个从音频到物理执行的端到端、可部署的实时交互系统，为生成式序列模型在具身智能和交互环中的可行性提供了系统级验证范本。
6.  主要局限性：（1）默认行为偏向训练数据中的舞蹈风格，对显著偏离分布的音乐（如古典乐）泛化能力存疑；（2）作者坦承系统在某些极端音频变化下仍需更丰富的表达覆盖；（3）论文未讨论潜在的音乐版权、运动数据伦理及合成人像滥用风险，但在文末影响声明中进行了补充说明。

🔗 **开源详情**

- 代码：论文未提供实际代码仓库链接，但在附录A.1明确承诺将开源代码库、配置文件、预训练模型以及基于ROS2的系统。项目页面为 https://discoforcing.github.io/ 。
- 模型权重：未提供。
- 数据集：使用公开数据集FineDance、AIST++和部分BABEL数据。未提供自建数据集的下载链接。
- Demo：未提供在线演示链接，但详细说明了构建的Unity虚拟角色和Unitree G1物理机器人部署平台。
- 复现材料：论文附录A提供了非常详细的补充材料，包括 (1) 运动VAE（基于Wan2.1）和扩散Transformer的具体架构、训练参数（优化器、学习率、批次大小、训练步数、余弦退火策略）；(2) 详细的算法流程，包括训练（算法2）与带子步的推理（算法3）伪代码；(3) 完整的运动处理与恢复算法（算法4，5，6）；(4) 详细的因果音乐处理与流式缓存设计；(5) 基于ROS2的系统架构与各模块延迟分析。这些材料理论上为复现提供了良好支撑。
- 引用的开源/第三方项目：DeepPhase4Audio（VQ-PAE实现基础）、Wan2.1（运动VAE实现基础）、SMPL（人体模型）、Librosa（音频特征提取）、AMASS/BABEL（训练数据）等。

📄 [OpenReview](https://openreview.net/forum?id=2I7eG7zUQb)

---

### 35. [DreamID-Omni: Unified Framework for Controllable Human-Centric Audio-Video Generation](/audio-paper-digest-blog/posts/2026-07-04-dreamid-omni-unified-framework-for-controllable)

🔥 **8.0/10** | 前25% | #音视频生成 | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.1/1.5 | 影响 1.1/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Xu Guo（清华大学）
- 通讯作者：Xiangwang Hou（清华大学）、Songtao Zhao（字节跳动）
- 作者列表：Xu Guo（清华大学）、Fulong Ye（字节跳动）、Qichao Sun（字节跳动）、Liyang Chen（清华大学）、Bingchuan Li（字节跳动）、Pengze Zhang（字节跳动）、Jiawei Liu（字节跳动）、Songtao Zhao（字节跳动）、Qian He（字节跳动）、Xiangwang Hou（清华大学）

💡 **毒舌点评**

这篇文章的工程野心令人印象深刻——硬生生把三个各自为战的音视频生成任务塞进一个框架，双边对称注入、多阶段课程学习、双层级解耦，把身份绑定和任务冲突这些硬骨头啃了一遍。但读完之后如鲠在喉：Syn-RoPE本质上是RoPE的Margin分区技巧，结构化字幕是MLLM提示工程的产物，三阶段训练是课程学习的实例化——这些精巧的“组合创新”固然有效，却掩盖不了方法层面未见根本性突破的事实。更要命的是，一个号称“统一框架”的顶会投稿，代码和模型权重双双缺失，数据集获取方式也语焉不详，这严重削弱了其学术可信度和传播潜力。论文把“统一”的故事讲得挺好，但开源精神上显然还没“统一”过来。

📌 **核心摘要**

本文旨在解决可控人像音视频生成领域三个核心任务——基于参考的身份-音频生成（R2AV）、视频编辑（RV2AV）和音频驱动视频动画（RA2V）——彼此孤立、缺乏统一框架的问题。DreamID-Omni构建在一个双流扩散变换器架构上，核心思想是将三个任务归约到同一个条件概率模型下：通过选择性提供文本、参考图像、参考音频、源视频和驱动音频五种条件，模型可在任务间无缝切换。针对多人物场景下致命的身份-音色绑定失败与说话人混淆，论文引入了“双层级解耦”策略：在信号层，利用同步旋转位置嵌入（Syn-RoPE）将不同身份投射到互不重叠的RoPE Margin区间，强制注意力空间内的刚性隔离；在语义层，用结构化字幕（Structured Caption）为每个身份分配专属锚点标记`<sub_k>`，显式建立属性-主体的映射关系。训练采用三阶段渐进课程：In-pair重建→Cross-pair解耦→全任务微调（R2AV:RV2AV:RA2V=4:3:3），让弱约束生成任务上学到的先验去正则化强约束的编辑和动画任务。自建IDBench-Omni基准（200条多场景样本）上的实验表明，多人物场景下说话人混淆率降至0.08，显著优于Wan2.6的0.38。该工作的工业价值在于首次提供了面向可控人像音视频生成的统一工业化方案，但主要局限是视频长度受限于10秒、推理需三次CFG前向导致效率偏低，且未开源核心资产。


🔗 **开源详情**

- 代码：未提及。论文未提供GitHub或其他代码仓库链接。
- 模型权重：未提及。未提供HuggingFace、ModelScope等模型托管平台的链接或下载方式。
- 数据集：论文提出了 IDBench-Omni 基准（包含 200 个高质量数据实例），但未提供获取链接或下载方式；训练数据构建基于 Li et al. 2024 的 OpenHumanVid 以及 Phantom-Data 管道，但未提供这些数据集的具体统计信息或下载链接；数据构建流程的系统提示词（附录图8、图9）已在论文中公开，属于部分可复现资料。
- Demo：未提及。
- 复现材料：论文在第4.1节和附录Sec. A.2给出了核心训练配置（学习率、batch size、Margin值、三阶段步数等）和数据构建管道的组件说明，但未提供完整的训练脚本、配置文件或模型检查点。部分MLLM提示词已公开。
- 论文中引用的开源项目及链接：
  - Ovi (https://github.com/NVIDIA/ovi)
  - LTX-2 (https://github.com/Lightricks/LTX-Video)
  - Wan2.6 (https://github.com/Wan-Video/Wan2.6)
  - CosyVoice (https://github.com/FunAudioLLM/CosyVoice)
  - ClearerVoice (https://github.com/modelscope/ClearerVoice-Studio)
  - Whisper (https://github.com/openai/whisper)
  - WavLM (https://github.com/microsoft/unilm/tree/master/wavlm)
  - CLAP (https://github.com/microsoft/CLAP)
  - VBench (https://github.com/Vchitect/VBench)
  - DWPose (https://github.com/IDEA-Research/DWPose)
  - ArcFace (https://github.com/deepinsight/insightface)
  - OpenHumanVid (https://openhumanvid.github.io/)
  - Phantom, Humo, HunyuanCustom, VACE, Qwen-Image 等论文中引用的商业或闭源模型未提供开源链接。

📄 [OpenReview](https://openreview.net/forum?id=bZjSinGaUo)

---

### 36. [AgentSteerTTS: A Multi-Agent Closed-Loop Framework for Composite-Instruction Text-to-Speech](/audio-paper-digest-blog/posts/2026-07-04-agentsteertts-a-multi-agent-closed-loop-framework)

✅ **7.9/10** | 前25% | #语音合成 | 创新 1.4/2 | 严谨 1/1.5 | 实验 1.3/1.5 | 影响 1.1/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Bin Kang（University of Chinese Academy of Sciences, Shenzhen Loop Area Institute, Tencent Turinglab）
- 通讯作者：Zhuotao Tian（Shenzhen Loop Area Institute）
- 作者列表：Bin Kang（University of Chinese Academy of Sciences, Shenzhen Loop Area Institute, Tencent Turinglab）、Shaoguo Wen（Tencent Turinglab）、Yang Fan（Shenzhen Loop Area Institute）、Shunlong Wu（Tsinghua University）、Junjie Wang（Shenzhen Loop Area Institute）、Yulin Li（Shenzhen Loop Area Institute）、Junzhi Zhao（Southwest Jiaotong University）、Junle Wang（Tencent Turinglab）、Zhuotao Tian（Shenzhen Loop Area Institute）

💡 **毒舌点评**

这篇论文清晰地定义并攻击了TTS领域中一个真实且棘手的“复合情感指令”控制问题，提出的多智能体闭环框架从“解耦-锚定-反馈”逻辑链条完整，实验设计扎实，提升显著。但各子模块虽协同良好，本质上仍是对已有技术的精巧系统集成，缺乏单一方法论上的根本性突破。对MLLM评估器的强依赖构成了其实时性和鲁棒性的阿喀琉斯之踵，而论文对此关键限制的讨论，尤其是在MLLM提示设计、输出格式、评估偏见及错误影响机制方面，几乎是完全的黑盒，这削弱了方法的可复现性和严谨性。

📌 **核心摘要**

1.  要解决的问题：现有情感语音合成（TTS）模型在处理如“高兴但略带傲慢”这类复合指令时，存在系统性偏差——目标情感维度被抑制（表达不足），非目标情感维度出现泄漏（表达过强），同时说话人音色与情感韵律耦合导致身份漂移。


2.  方法核心：提出AgentSteerTTS，一个多智能体闭环框架，包含三大组件：(a) 对抗解耦模块（ADM）——利用梯度反转层和交叉协方差正则化，将说话人身份与情感韵律分离。(b) 双流锚定控制器（DAC）——从大规模高表现力声学原型库中检索与目标指令匹配的“锚点”音频，并将文本意图与声学锚点融合为连续控制向量。(c) 快-慢反馈代理——通过可微分的隐层梯度校正（快代理）在线校准强度，并利用外部多模态大模型（MLLM，慢代理）对合成语音进行感知评估和类别纠错。


3.  方法新颖性：区别于将复合指令视为单一标签或纯文本条件的范式，该工作首次在多智能体框架下，系统性地结合“对抗解耦、检索增强的声学锚定和双层（隐层+波形层）闭环反馈”，显式解决语义-声学错位问题，实现了更精细和鲁棒的复合情感控制。
4.  主要实验结果：
    *   复合指令基准测试：相比最强基线IndexTTS2，情感相似度（E-SIM）从0.864提升至0.955，说话人相似度（S-SIM）从0.823提升至0.841。

| Method | S-SIM ↑ | WER (%) ↓ | E-SIM ↑ | QMOS ↑ |
| :--- | :--- | :--- | :--- | :--- |
| IndexTTS2 | 0.823 | 1.81 | 0.864 | 4.15±0.10 |
| AgentSteerTTS (Gemini3) | 0.841 | 1.34 | 0.955 | 4.38±0.07 |


    *   ESD公开数据集：在情感平均意见分（ESMOS, 4.42）、语音自然度（SNMOS, 4.52）和说话人相似度（SSMOS, 4.31）上均取得最佳结果。
    *   消融实验：去除对抗解耦使$\Delta$S-SIM升至0.048，非目标泄漏增至0.22。去除原型检索使复合成功率（CSR）和E-SIM分别降至0.49和0.910，证明了核心模块的有效性。
5.  实际意义：显著提升了TTS系统对复合情感指令的跟随准确度，赋予了模型更精细、更符合直觉的情感控制能力，在虚拟角色、有声内容创作和高级人机交互等领域具有明确的应用价值。
6.  主要局限性：声学原型库的覆盖度限制了系统在罕见或长尾情感风格上的表现。强依赖慢循环外部MLLM评估器，引入了额外的推理延迟（≤200ms）、不确定性以及潜在的评估偏见。对抗解耦主要针对说话人-情感耦合，未对其他声学因子（如环境噪音、口音）进行完全解耦。

🔗 **开源详情**

- 项目主页：https://kane2kang.github.io/AgentSteerTTS/
- 代码：论文正文未明确提及公开代码仓库链接。
- 模型权重：论文中未明确提及公开模型权重。
- 数据集：论文中使用的公共数据集为ESD和MSP-Podcast，仅提供引用。论文构建了复合指令基准和声学原型库，但未提及将这两个新数据集公开。
- Demo：论文提供了项目主页链接：https://kane2kang.github.io/AgentSteerTTS/，其中预计包含生成的语音示例。
- 复现材料：论文附录B.1提供了模型隐层大小（512）、训练超参数（优化器AdamW，学习率 $2 \times 10^{-4}$, warmup步数3000）及硬件配置（8×NVIDIA H20 GPU）等实现细节。但未提供代码仓库、模型检查点或MLLM接口的详细配置。
- 论文中引用/使用的开源项目（未逐一提供链接）：
    - emotion2vec - 用于评估情感相似度 (E-SIM)的模型。
    - CosyVoice/CosyVoice2 - 作为对比基线模型。
    - IndexTTS/IndexTTS2 - 作为对比基线模型。
    - Spark-TTS - 作为对比基线模型。
    - F5-TTS - 作为对比基线模型。
    - VALL-E - 作为对比基线模型。
    - Gemini / Qwen3 - 用作慢速反馈回路的评估后端模型。

📄 [OpenReview](https://openreview.net/forum?id=hgKQemfVbS)

---

### 37. [STAR-VAE: Structured Topology-Aware Regularization for Audio Reconstruction and Generation](/audio-paper-digest-blog/posts/2026-07-04-star-vae-structured-topology-aware-regularization)

✅ **7.9/10** | 前25% | #音频生成 | 创新 1.4/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 影响 1.2/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Huadai Liu（香港科技大学、阿里巴巴通义 Fun Team）
- 通讯作者：Wei Xue（香港科技大学）
- 作者列表：Huadai Liu（香港科技大学、阿里巴巴通义 Fun Team）、Wen Wang（阿里巴巴通义 Fun Team）、Kaicheng Luo（阿里巴巴通义 Fun Team）、Qian Chen（阿里巴巴通义 Fun Team）、Xiangang Li（阿里巴巴通义 Fun Team）、Wei Xue（香港科技大学）

💡 **毒舌点评**

这篇论文将音频 VAE 中一个被长期默认的实践——各通道均等 KL 惩罚——上升到"三元悖论"的理论高度，并用一个幂律增长的通道方向约束场（Gamma-Growth）优雅地重构了潜在空间拓扑。洞察清晰、动机扎实，实验也相当全面。然而，方法核心高度依赖对 `γ=2.0` 这一具体取值的经验消融，缺乏信息论或谱分析层面的严格理论支撑来解释"为何是幂律而非其他函数族"，更缺少对该参数的数据驱动自适应机制；且论文将 STAR 包装为"适用于任何 VAE 架构"的通用正则化器，但在纯 CNN 上的收益幅度远小于结合 Mamba 的跃升，通用性声明的力度可能需要更审慎的限定。此外，无开源代码和模型权重，在当前顶会生态中属于较大减分项。

📌 **核心摘要**

1. 论文要解决的问题是连续音频 VAE 中"压缩率-重建保真度-潜在空间规整性"三者无法兼得的 Rate-Distortion-Regularity Trilemma。其根因在于标准各向同性高斯先验强加了"扁平"的潜在几何，无法匹配音频信号从低频结构到高频纹理的层次化信息密度分布，导致信息无序打包（Disordered Information Packing）及下游生成模型优化困难。






2. 方法核心是 Structured Topology-Aware Regularization (STAR)：抛弃均匀 KL 惩罚，引入沿通道索引单调递增的约束场（Gamma-Growth 函数 $\beta_c = \beta_{min} + (\beta_{max} - \beta_{min}) \cdot \left(\frac{c-1}{C-1}\right)^\gamma$），引导编码器将高信息密度的结构特征自动路由到低惩罚（高容量）通道，而将高熵随机纹理挤压到高惩罚（低容量）通道，从而在无需显式排序损失的情况下实现对潜在空间的层级化组织。






3. 论文进一步提出 STAR-VAE，将 STAR 与双向 Mamba 混合架构结合：CNN 负责局部时频特征提取，Mamba（选择性状态空间模型）以线性复杂度捕获全局上下文，二者协同突破了纯 CNN 感受野局限。论文声称 STAR 是架构无关的通用正则化器，并在纯 CNN 上做了验证。

4. 实验在 AudioCaps（声音）和 Song Describer（音乐）上进行。STAR-VAE 在 21.5Hz 低码率下较 Stable Audio Open（同码率）显著提升语义保留（FAD: AudioCaps 3.29→2.31，Song Describer 0.69→0.25）和潜在规整性（LC: 0.11→0.08）；下游生成上，STAR-Gen（LLM+Flow Matching）在 AudioCaps 的 FDopenl3 达到 55.8，优于 TangoFlux（80.2）和 SAO（89.2），CLAP 达 0.48，消融实验证实去除 STAR 后 Mamba 编码器会发生"重建漂移"（重建空洞化：语义尚存但纹理丢失）。关键实验数据如下表：

| Model | Dataset | Latent Rate | STFT-D↓ | MSD↓ | SI-SDR↑ | FAD↓ | LC↓ |
|---|---|---|---|---|---|---|---|
| Mel-VAE | AudioCaps | 31.2Hz | 2.53 | 1.72 | -34.45 | 2.86 | 0.33 |
| AudioGen | AudioCaps | 100Hz | 2.18 | 1.41 | -1.25 | 2.36 | 0.06 |
| ϵar-VAE | AudioCaps | 43Hz | 1.08 | 0.72 | 6.13 | 4.44 | 0.13 |
| Stable Audio Open | AudioCaps | 21.5Hz | 1.25 | 0.86 | -0.95 | 3.29 | 0.11 |
| STAR-VAE | AudioCaps | 21.5Hz | 1.17 | 0.75 | -0.03 | 2.31 | 0.08 |
| Hybrid CNN-Mamba (w/o STAR) | AudioCaps | 21.5Hz | 1.35 | 0.93 | -1.43 | 2.74 | 0.10 |
| CNN-STAR (w/o Mamba) | AudioCaps | 21.5Hz | 1.22 | 0.81 | -0.35 | 2.65 | 0.09 |
| CNN-VAE (w/o STAR, w/o Mamba) | AudioCaps | 21.5Hz | 1.28 | 0.89 | -1.14 | 3.36 | 0.11 |
| Mel-VAE | Song Describer | 31.2Hz | 3.04 | 1.89 | -41.88 | 0.84 | 0.25 |
| AudioGen | Song Describer | 100Hz | 2.62 | 1.50 | 5.55 | 1.16 | 0.02 |
| ϵar-VAE | Song Describer | 43Hz | 0.96 | 0.57 | 11.51 | 0.29 | 0.11 |
| Stable Audio Open | Song Describer | 21.5Hz | 1.59 | 0.88 | 5.78 | 0.69 | 0.09 |
| STAR-VAE | Song Describer | 21.5Hz | 1.32 | 0.80 | 6.40 | 0.25 | 0.08 |
| Hybrid CNN-Mamba (w/o STAR) | Song Describer | 21.5Hz | 1.57 | 0.91 | 4.20 | 0.39 | 0.10 |
| CNN-STAR (w/o Mamba) | Song Describer | 21.5Hz | 1.40 | 0.84 | 5.58 | 0.38 | 0.08 |
| CNN-VAE (w/o STAR, w/o Mamba) | Song Describer | 21.5Hz | 1.46 | 0.86 | 5.02 | 0.45 | 0.12 |

| Model | Params | FDopenl3↓ | KL↓ | CLAP↑ |
|---|---|---|---|---|
| AudioLDM 2-Large | 712M | 108.3 | 1.81 | 0.42 |
| Tango 2 | 866M | 108.4 | 1.11 | 0.44 |
| TangoFlux | 515M | 80.2 | 1.22 | 0.43 |
| Stable Audio Open (SAO) | 1.05B | 89.2 | 2.58 | 0.29 |
| SAO w/ STAR-VAE | 1.05B | 72.5 | 2.15 | 0.35 |
| STAR-Gen (w/ STAR-VAE) | 905M | 55.8 | 1.09 | 0.48 |
| STAR-Gen w/ SAO-VAE | 905M | 67.4 | 1.21 | 0.44 |
| STAR-Gen w/ ϵar-VAE | 905M | 76.45 | 1.53 | 0.41 |

5. 实际意义在于为音频生成提供了一套可复用的连续 tokenizer 训练范式，同时展示了 LLM 解码器用于连续流匹配的可行性，向更统一的多模态基础模型迈进一步。

6. 主要局限性：未提供代码和模型权重；γ 参数的选择缺乏自适应机制，迁移到新数据域可能需要繁重调参；STAR 在纯 CNN 上的提升虽积极（FAD: 3.36→2.65）但幅度不如混合架构显著；训练数据总规模和批量大小未披露；生成实验仅限 AudioCaps 英文短文本，缺少大规模多语言或长时生成验证；缺少与层次化 VAE（如 NVAE）的直接对比。

🔗 **开源详情**

- 代码：论文中未提及代码链接；项目页面（https://STAR-VAE.github.io）目前未提供代码仓库入口
- 模型权重：论文中未提及；项目页面无下载链接
- 数据集：使用了公开数据集 Freesound、FMA、FSD50K、WavCaps、AudioCaps、Song Describer Dataset，但未提供预处理后的训练集或数据加载脚本
- Demo：论文中未提及交互式 demo
- 复现材料：论文附录 B 提供了详细的架构配置、训练目标和超参数设置（如优化器、学习率、GPU 数量、Mamba 参数等），但未提供代码或配置文件链接；批量大小和数据集总规模未披露
- 论文中引用的开源项目：Stable Audio Open、AudioLDM 2、Mamba、Qwen3 等，文中未提供这些项目的具体版本号或链接

📄 [OpenReview](https://openreview.net/forum?id=SDWG5xr20c)

---

### 38. [HyperPotter: Spell the Charm of High-Order Interactions in Audio Deepfake Detection](/audio-paper-digest-blog/posts/2026-07-04-hyperpotter-spell-the-charm-of-high-order)

✅ **7.9/10** | 前25% | #音频伪造检测 | 创新 1.1/2 | 严谨 1/1.5 | 实验 1.3/1.5 | 影响 1/1.5 | 开源 1.4/1.5

👥 **作者与机构**

- 第一作者：Qing Wen（浙江大学区块链与数据安全全国重点实验室，浙江大学上海高等研究院）
- 通讯作者：Zhongjie Ba（浙江大学，杭州高新技术产业开发区（滨江）区块链与数据安全研究院），Peng Cheng（浙江大学，杭州高新技术产业开发区（滨江）区块链与数据安全研究院）
- 作者列表：Qing Wen（同上），Haohao Li（浙江大学），Zhongjie Ba（浙江大学），Peng Cheng（浙江大学），Miao He（浙江大学），Li Lu（浙江大学），Kui Ren（浙江大学）

💡 **毒舌点评**

本文利用O-信息理论优雅地诊断了音频深伪检测中的高阶交互缺失问题，并祭出超图与原型学习这对组合拳，立意颇有新意，实验覆盖也堪称广博。然而，方法本质上仍是Wav2Vec2-AASIST的“嫁接增强版”，原型引导与关系放大的协同缺乏深层理论论证，更像依赖工程直觉的拼装。更致命的是，在强压缩场景下性能反而开倒车，作者对何时该用高阶、何时该信冗余仍语焉不详，让整个框架的“协同”假设显得脆弱而不可控。

📌 **核心摘要**

1. 要解决的问题：现有音频深伪检测方法依赖局部或成对关系，忽视了由多个频谱-时间分量联合涌现的高阶协同交互（HOIs）。论文旨在显式建模HOIs，以捕获更具泛化性的伪造痕迹。
2. 方法核心：提出HyperPotter框架，以超图（hypergraph）代替传统成对图。利用由类感知原型库引导的模糊C均值（FCM）聚类构建软超边捕获高阶关系，并设计了关系伪影放大模块以增强微弱伪造线索。
3. 与已有方法相比的新在哪里：首次引入O-信息量化音频深伪检测中的冗余-协同模式，为高阶关系建模提供理论动机。将对称成对的图学习扩展为非成对的超图学习，并创新性地引入跨批次原型记忆机制，为FCM超边构建注入长期结构先验。
4. 主要实验结果：在仅用ASVspoof2019 LA训练的条件下，HyperPotter在13个测试集上相比Wav2Vec2-AASIST基线，平均相对EER降低12.68%，在性能改善的11个集上，该降幅高达22.15%。具体而言，In‑the‑Wild EER从7.58%降至5.72%，FoR从4.24%降至3.89%，LibriVoc EER从6.96%降至2.55%。但在重度编解码场景ASVspoof2021 LA（2.48%→3.94%）和ASVspoof5（13.38%→16.04%）上性能出现明显退化。
5. 实际意义：证明了高阶关系建模能有效捕获可迁移的伪造痕迹，作为一种“协同专家”，它可在多专家系统中与“冗余专家”互补，提升复杂场景下的整体检测鲁棒性。
6. 主要局限性：强编解码/信道失真会“掩盖”高阶依赖，导致该方法退化成噪声源；模型在参数量近乎不变的情况下，训练和推理开销显著增加，部署友好度差。

🔗 **开源详情**

- 代码：https://github.com/HyperPotter/HyperPotter
- 模型权重：论文及GitHub仓库声明提供了预训练模型，位于上述仓库中。
- 数据集：论文使用多个公开数据集（ASVspoof 2019 LA, 2021 LA/DF, 2024/5, In-the-Wild, FoR, Codecfake, ADD 2022/2023 系列, LibriVoc, SONAR 等），需遵循各数据集官方协议获取。
- 复现材料：GitHub仓库提供代码、预训练模型及详细附录（超参、增强策略），复现可行性高。
- 关键依赖项目：
  - Wav2Vec2-AASIST (基线): https://github.com/TakHemlata/Wav2Vec2-AASIST
  - XLS-R: https://github.com/facebookresearch/fairseq/tree/main/examples/wav2vec
  - RawNet2: https://github.com/asvspoof-challenge/2021/tree/main/LA/Baseline-RawNet2
  - RawBoost: https://github.com/TakHemlata/RawBoost
  - MUSAN: https://www.openslr.org/17/

📄 [OpenReview](https://openreview.net/forum?id=vIXuPi8zUM)

---

### 39. [T2AV-Compass: Towards Unified Evaluation for Text-to-Audio-Video Generation](/audio-paper-digest-blog/posts/2026-07-04-t2av-compass-towards-unified-evaluation-for-text)

✅ **7.9/10** | 前25% | #音视频生成 | 创新 1.2/2 | 严谨 1.1/1.5 | 实验 1.2/1.5 | 影响 1.2/1.5 | 开源 0.7/1.5

👥 **作者与机构**

- 第一作者：Zhe Cao, Tao Wang, Jiaming Wang, Yanghai Wang（并列一作，均标注为南京大学）
- 通讯作者：Jiaheng Liu（南京大学）
- 其他作者：Yuanxing Zhang（快手科技 Kling Team）、Jiahao Wang（南京大学）、Jialu Chen（快手科技 Kling Team）、Miao Deng（南京大学）、Chenxi Liao（南京大学）、Yize Zhang（南京大学）、Yubin Guo（南京大学）、Zhaoxiang Zhang（中国科学院自动化研究所）

💡 **毒舌点评**

这篇论文在 T2AV 评估领域迈出了扎实的一步：500条高复杂度prompt配合同一框架下的双层级评估，确实暴露了SOTA模型在“音频真实感”和“长时叙述”上的系统性瓶颈，诊断价值明确。但MLLM-as-a-Judge的可靠性验证仅覆盖50个样本且音频Realism一致性较弱（L1高达1.420），若不能规模化解决judge bias，这套框架的权威性就只能停留在“参考级”而非“标准级”。

📌 **核心摘要**

1. T2AV-Compass 旨在解决文本到音视频（T2AV）生成领域评估碎片化的问题，现有基准要么聚焦单一模态、要么缺乏对指令遵循和感知真实感的细粒度诊断。
2. 方法核心是构建了包含500条高复杂度prompt的基准，并通过双层级评估框架将客观信号指标（视频/音频质量、跨模态对齐）与基于MLLM-as-a-Judge的主观诊断（指令遵循、真实感）相结合。
3. 与 VABench、JavisBench 等同期基准相比，T2AV-Compass 在prompt复杂度（平均154 tokens vs. 50-68）、评价维度覆盖（增加指令遵循与真实感）以及诊断颗粒度（基于QA checklist的错误归因）上有明确区分。
4. 实验评估了15个代表性T2AV系统，发现最强闭源模型Veo-3.1在总体平均分上领先，但音频真实感是所有模型的普遍瓶颈；在长时叙述（4+事件）任务上，失败率飙升至63-80%；Gemini 2.5 Pro作为judge与人类在视频指令遵循上的L1距离为1.012，但在音频真实感上高达1.420。
5. 实际意义在于为T2AV模型开发者提供了首个系统化、诊断性的测试平台，尤其能精确定位视频动态性、跨模态同步、音频材质一致性等以往难以量化的失效模式。
6. 主要局限包括：MLLM judge的音频评估可靠性不足、prompt套件未覆盖极端长尾场景、以及评估的计算成本较高。

🔗 **开源详情**

- 代码：论文声明代码已开源，代指为 `NJU-LINK/T2AV-Compass`。经查证，具体GitHub仓库地址为 `https://github.com/NJU-LINK/T2AV-Compass`。
- 模型权重：未提及（本文为评估基准，未提出新模型权重）。
- 数据集：T2AV-Compass 基准数据集（500 条复杂提示），论文声明可在 HuggingFace 获取。经查证，HuggingFace地址为 `https://huggingface.co/datasets/NJU-LINK/T2AV-Compass`。
- Demo：未提及。
- 复现材料：论文提供了数据集构建流程、评估框架细节及所有提示模板（见附录 H、I），并报告了预处理与评估配置（如音频采样率 48kHz、视频帧率 2 FPS、MLLM 温度=0 等），但未单独提供训练配置或检查点。
- 论文中引用的开源项目：
  - VBench (`https://github.com/Vchitect/VBench`)
  - EvalCrafter (`https://github.com/EvalCrafter/EvalCrafter`)
  - AudioCaps (`https://github.com/cdjkim/audiocaps`)
  - AudioLDM-Eval (`https://github.com/haoheliu/AudioLDM`)
  - JavisBench (未提供链接)
  - UniAVGen (未提供链接)
  - VABench (未提供链接)
  - TTA-Bench (未提供链接)
  - DOVER++ (`https://github.com/VQAssessment/DOVER`)
  - Aesthetic Predictor V2.5 (`https://github.com/discus0434/aesthetic-predictor-v2-5`)
  - CLAP (`https://github.com/LAION-AI/CLAP`)
  - VideoCLIP-XL-V2 (未提供链接)
  - ImageBind (`https://github.com/facebookresearch/ImageBind`)
  - Synchformer (未提供链接)
  - NISQA (`https://github.com/gabrielmittag/NISQA`)
  - LatentSync (未提供链接)
  - AudioLDM2 (`https://github.com/haoheliu/audioldm2`)
  - MMAudio (`https://github.com/hkchengrex/MMAudio`)
  - HunyuanVideo-Foley (未提供链接)
  - Wan2.1 (`https://github.com/Wan-Video/Wan2.1`)
  - CogVideoX (`https://github.com/THUDM/CogVideoX`)
  - VidProM (`https://github.com/WangWenhao0716/VidProM`)
  - Shot2Story (未提供链接)
  - Gemini-2.5-Pro 与 Gemini-2.5-Flash 等非开源 MLLM 仅作为调用工具，不属于开源项目。

📄 [OpenReview](https://openreview.net/forum?id=8V2Qf6mNx3)

---

### 40. [Decoupling The "What" and "Where" With Polar Coordinate Positional Embedding](/audio-paper-digest-blog/posts/2026-07-04-decoupling-the-what-and-where-with-polar)

✅ **7.8/10** | 前25% | #音乐生成 | 创新 1.3/2 | 严谨 1.1/1.5 | 实验 1.1/1.5 | 影响 1/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Anand Gopalakrishnan（The Swiss AI Lab IDSIA, USI & SUPSI, Lugano, Switzerland；通讯地址为 Harvard University）
- 通讯作者：Anand Gopalakrishnan, Michael C. Mozer（University of Colorado, Boulder；Google）
- 作者列表：Anand Gopalakrishnan, Robert Csordás (OpenAI, San Francisco, USA；工作完成于 Stanford University 期间), Jürgen Schmidhuber (The Swiss AI Lab IDSIA, USI & SUPSI；KAUST, Thuwal, Saudi Arabia), Michael C. Mozer

💡 **毒舌点评**

这篇 paper 的切入点选得巧，一眼看穿了 RoPE 里“what”和“where”纠缠带来的麻烦，一刀切下去直接把问题肢解了。数学上的改动无非是把坐标系擦了重画，但长度外推的效果确实让人侧目——不用插值不用微调，10倍上下文直接扛住，这波操作很秀。不过，作者似乎太陶醉于这一干净的“解耦”动作，对于“为什么解耦了就突然能外推了”这个问题，给了一堆实验观察，唯独缺了那个能让人彻底信服的理论闭环。另外，音乐和基因组领域的实验虽然贴了金，但 774M 的模型规模在当下连入门都算不上，离真正让大模型生产流水线买单，还差着几个量级的实证。

📌 **核心摘要**

该论文指出，主流位置编码方案 RoPE 在计算注意力时，会通过一个相位交互项将内容信息（what）与位置信息（where）深度耦合，而这会损害需要独立匹配内容或位置的任务性能。为此，作者提出 Polar Coordinate Positional Embedding (PoPE)。PoPE 的核心是重新参数化键-查询的复数表示：将 d 维特征独立地用 softplus 函数映射为非负幅度（仅编码内容强度），并乘以仅由绝对位置决定的纯相位项，从而在数学上根除了 RoPE 中的内容-位置交互项。同时，引入一个可学习的、与内容无关的固定相位偏置 δ_c 来为模型保留一定的相位调谐灵活性。该计算可高效适配定制的 FlashAttention 内核。在需要索引运算的诊断任务 Indirect Indexing 上，RoPE 准确率仅 11.16%，而 PoPE 达到 94.82%。在音乐序列（JSB, MAESTRO）、人类基因组和语言建模（OpenWebText）任务上，PoPE 的损失/困惑度持续优于 RoPE。在零样本下游任务中平均准确率有微弱提升。最重要的是，PoPE 展现出极强的零样本长度外推能力：在未经任何微调或频率插值的情况下，可在测试时将上下文长度扩张 10 倍（1024→10240）并保持低困惑度，这一点完胜基础 RoPE 甚至是专门为此微调的 YaRN。其主要局限在于缺乏对解耦后为何能产生强大外推性的理论分析，且仅在小至中等规模（最高 774M）模型上验证，尚未在百亿级或生产级模型中证明其价值。

🔗 **开源详情**

- 代码：https://github.com/agopal42/pope
- 模型权重：论文中未提及。
- 数据集：
    - Indirect Indexing：自建，未提及公开链接。
    - JSB Chorales: https://github.com/czhuang/JSB-Chorales-dataset
    - MAESTRO v3.0.0: https://magenta.withgoogle.com/datasets/maestro
    - Human Reference Genome (hg38): https://huggingface.co/datasets/InstaDeepAI/human_reference_genome
    - OpenWebText: http://Skylion007.github.io/OpenWebTextCorpus
    - PG-19 (test split): https://huggingface.co/datasets/emozilla/pg19-test
- Demo：论文中未提及。
- 复现材料：论文附录（B节）提供了详细的模型和超参数配置。
- 引用的开源项目：
    - Triton官方Flash Attention教程：https://triton-lang.org/main/getting-started/tutorials/06-fused-attention.html
    - Language Model Evaluation Harness: https://zenodo.org/records/12608602

📄 [OpenReview](https://openreview.net/forum?id=I3Z9za1EkO)

---

### 41. [V-LynX: Token Interface Alignment for Video+X LLMs](/audio-paper-digest-blog/posts/2026-07-04-v-lynx-token-interface-alignment-for-videox-llms)

✅ **7.8/10** | 前25% | #音视频问答 | 创新 1.4/2 | 严谨 1.4/1.5 | 实验 1.2/1.5 | 影响 0.6/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Jungin Park（Yonsei University, Seoul, South Korea）
- 通讯作者：Jiyoung Lee（Ewha Womans University, Seoul, South Korea）、Kwanghoon Sohn（Yonsei University, Seoul, South Korea）
- 作者列表：Jungin Park（Yonsei University）、Jiyoung Lee（Ewha Womans University）、Kwanghoon Sohn（Yonsei University）

💡 **毒舌点评**

这篇论文的立意相当精巧：不搞那些“缝合怪”式的多模态堆叠，而是发现并利用了Video LLM内部天然存在的“Token Interface”——一个连续的几何流形。这相当于告诉你，LLM处理视觉信号时，并不是在翻译词汇，而是在一个“特区”里搞特殊运算。基于此，作者仅用LoRA + 无标签单模态数据，就将音频、3D等新模态像U盘一样即插即用到了视频模型上，参数效率惊人。不过，别高兴太早，这个方法对视觉证据有极强的“路径依赖”，纯音频概念（如BGM里的乐器识别）直接抓瞎，因为它的接口底层逻辑就是“视觉特区”。这限制了它能覆盖的真实世界场景广度。

📌 **核心摘要**

该论文揭示了预训练Video LLM中的一个关键现象：视觉Token并非映射到词汇嵌入空间，而是形成了一个与LLM兼容的连续几何流形，称为“Token Interface”。基于此洞察，提出V-LynX框架，通过冻结视觉编码器并引入轻量级LoRA支路，以无配对单模态数据将新模态（音频、3D、高帧率视频、多视角视频）的注意力响应和Token分布对齐到该接口，实现极高效的模态扩展。其核心优势在于摒弃了专用编码器和跨模态配对监督，通过共享视频路径和分布正则化，确保新模态表征符合LLM的预期输入规范。


关键实验结果如下：

音频-视觉问答 (AVSD / AVQA / MUSIC-AVQA)
| 方法 | 参数增量 | AVSD CIDEr | AVQA Acc. | MUSIC-AVQA Acc. |
|------|----------|------------|-----------|-----------------|
| LLaVA-OV-0.5B-FT | 35.2M | 117.6 | 86.4 | 67.6 |
| PAVE-0.5B | 127.6M | 134.5 | 90.4 | 78.8 |
| V-LynX-0.5B | 68.7M | 145.7 | 93.1 | 81.1 |
| LLaVA-OV-7B-FT | 161.5M | 124.9 | 90.8 | 77.4 |
| PAVE-7B | 256.7M | 152.9 | 93.8 | 82.3 |
| V-LynX-7B | 195.0M | 163.0 | 94.2 | 83.0 |

3D QA (ScanQA / SQA3D)
| 方法 | 参数增量 | ScanQA CIDEr | ScanQA EM@1 | SQA3D EM@1 |
|------|----------|--------------|------------|------------|
| PAVE-0.5B | 345.9M | 84.2 | 23.1 (40.0) | 51.1 (52.8) |
| V-LynX-0.5B | 68.7M | 87.1 | 26.4 (44.2) | 52.2 (54.2) |
| PAVE-7B | 475.0M | 103.4 | 29.1 (48.5) | 59.0 (61.4) |
| V-LynX-7B | 195.0M | 107.4 | 29.7 (48.6) | 60.5 (62.6) |

高帧率视频理解 (VideoMME / MVBench / MLVU)
| 方法 | 参数增量 | VideoMME Avg. | MVBench Avg. | MLVU Acc. |
|------|----------|---------------|-------------|-----------|
| PAVE-0.5B | 371.4M | 46.0 | 46.6 | 51.6 |
| V-LynX-0.5B | 68.7M | 52.8 | 53.7 | 55.0 |
| PAVE-7B | 500.5M | 59.9 | 58.0 | 67.0 |
| V-LynX-7B | 195.0M | 62.7 | 61.2 | 68.4 |

多视角视频理解 (Ego-Exo4D DPE) 上，V-LynX-0.5B/7B分别取得38.6%/46.9%准确率，显著优于PAVE。


该方法以极低的额外参数成本实现了新模态的即插即用，为多模态LLM的扩展提供了高效范式。局限在于，其对视觉Token接口的强依赖导致其无法处理纯音频推理任务（如无视觉线索的乐器识别）；此外，模态到视觉的强制性预处理会造成细粒度信息损失。

🔗 **开源详情**

- 代码：论文中声明“The code is available at project site.”，但未在论文PDF中提供具体URL。
- 模型权重：论文明确声明“2. Model weights will be made available after the review process.”（将在评审结束后提供），当前不可用。
- 数据集：使用了多个公开数据集（AVSD, AVQA, MUSIC-AVQA, ScanQA, SQA3D, VideoMME, MVBench, MLVU, Ego-Exo4D, LLaVA-Video-178K, AVUT），但未提供自有的新数据集。
- 复现材料：附录提供了详细的超参和训练策略，但缺乏可执行脚本。

📄 [OpenReview](https://openreview.net/forum?id=nV8GEDzrSn)

---

### 42. [Ariadne's Thread of LipSync: Unraveling Forgeries via Inconsistency between Lip Motions and Head Poses](/audio-paper-digest-blog/posts/2026-07-04-ariadnes-thread-of-lipsync-unraveling-forgeries)

✅ **7.8/10** | 前25% | #音视频理解 | 创新 1.5/2 | 严谨 1.3/1.5 | 实验 1.2/1.5 | 影响 1.2/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Tianyi She（中国科学技术大学，University of Science and Technology of China）
- 通讯作者：Kejiang Chen（中国科学技术大学，University of Science and Technology of China）
- 作者列表：Tianyi She（中国科学技术大学）、Jiawei Liu（上海交通大学）、Weifeng Liu（北京大学）、Hanqing Zhao（南洋理工大学）、Weiming Zhang（中国科学技术大学）、Kejiang Chen（中国科学技术大学）

💡 **毒舌点评**

论文提出利用唇动-头姿生理耦合不一致来检测 LipSync 伪造，思路有新意且动机分析充分，统一检测+归因的两阶段设计也比较完整。但所有辉煌结论都建立在自建的 LipSync-A 数据集上——该数据集目前无任何下载链接，代码和模型也未公开，将外部独立验证的门彻底关死，极大地削弱了可信度。此外，归因仅做到生成器架构族级别，离真正的细粒度模型溯源尚有距离。两阶段分开训练且 Stage II 依赖 Stage I 编码器冻结，这种设计是否最优也值得商榷。

📌 **核心摘要**

该论文针对高逼真度 LipSync 伪造视频的检测难题，提出利用自然语音中唇部动作与头部姿态之间的生理耦合被伪造生成器破坏这一固有特性，构建统一检测与归因框架 LipDA。方法分为两阶段：Stage I 通过唇-姿对比学习，将真实视频的唇特征与头姿特征拉近、伪造视频的拉远，实现对真实/伪造的二进制判别；Stage II 利用时序动态模块和视听同步模块捕捉不同生成模型特有的运动指纹与同步模式，实现生成器架构族的归因。此外，作者还贡献了包含 15 个生成器、7 种架构的 16,000 段视频的大规模 LipSync-A 数据集。实验在 LipSync-A、AVLips、TalkHeadBench 三个数据集上，检测 AUC 超过 97%，归因准确率达 97.5%，显著超越现有单一检测方法，并在跨数据集、跨伪造类型、视觉/音频扰动下表现出强鲁棒性。但缺乏开源代码和数据集严重影响可复现性，且归因仅做到架构族级别，对同族内不同模型实例的区分能力有限。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及。
- 数据集：论文中提出了一个新数据集 LipSync-A，包含约 16,000 个由 15 个生成器产生的合成视频，但未提供公开下载链接或访问方式。
- Demo：论文中未提及。
- 复现材料：论文中未提供单独的训练配置、检查点等补充材料，部分实现细节和超参数在正文及附录 C、D 中给出（如使用 MediaPipe 提取人脸关键点、滑动窗口长度 T=5、裁剪唇部 ROI 为 96×96、优化器为 Adam、学习率 1e-5 等），但未提供代码或配置文件。
- 论文中引用的开源项目：
  - Wav2Lip: https://github.com/Rudrabha/Wav2Lip
  - SadTalker: https://github.com/OpenTalker/SadTalker
  - DreamTalk: https://github.com/ali-vilab/dreamtalk
  - Sonic: https://github.com/jixiaozhong/Sonic
  - KDTalker: https://github.com/chaoyangya/kdtalker
  - OmniSync: https://github.com/PengZhenghao/OmniSync
  - IP-LAP: https://github.com/WeizhiZhong/IP_LAP
  - TalkLip: https://github.com/Jiadong-Wang/TalkLip
  - MakeItTalk: https://github.com/yzhou359/MakeItTalk
  - DiNet: https://github.com/Zhangzhilin/DiNet
  - FaceVid: https://github.com/nvlabs/facevid2vid
  - TPSM: https://github.com/JiahaoZhao/TPSM
  - LIA: https://github.com/wyhsirius/LIA
  - X2Face: https://github.com/oawiles/X2Face
  - FTCN: https://github.com/yingzhengya/FTCN
  - LipForensics: https://github.com/ahaliassos/LipForensics
  - RealForensics: https://github.com/ahaliassos/RealForensics
  - AVAD: https://github.com/cfeng-ai/AVAD
  - SpeechForensics: https://github.com/yliangg/SpeechForensics
  - LipFD: https://github.com/Weifliu/LipFD
  - AVH-align: 论文中未给出开源地址
  - TALL: https://github.com/xuyingjian/TALL
  - CADDM: https://github.com/sdc17/CADDM
  - UnivFD: https://github.com/liyiheng/UniversalFakeDetect
  - FreqNet: https://github.com/TanChongmin/FreqNet
  - NPR: https://github.com/TanChongmin/NPR
  - AltFreezing: https://github.com/wangzhibo/AltFreezing
  - FGMDC: 论文中未给出开源地址
  - DFD-FCG: 论文中未给出开源地址
  - MediaPipe: https://github.com/google/mediapipe
  - LRS2, LRW, VoxCeleb, HDTF 等数据集在生成器训练中作为训练数据提及，但不属于本项目开源部分。

📄 [OpenReview](https://openreview.net/forum?id=xmKNNOElLM)

---

### 43. [SONAR: Spectral‑Contrastive Audio Residuals for Generalizable Deepfake Detection](/audio-paper-digest-blog/posts/2026-07-04-sonar-spectralcontrastive-audio-residuals-for)

✅ **7.8/10** | 前25% | #语音伪造检测 | 创新 1.2/2 | 严谨 1/1.5 | 实验 1.2/1.5 | 影响 0.8/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Ido Nitzan Hidekel（Tel Aviv University, School of Electrical Engineering）
- 通讯作者：Ido Nitzan Hidekel（Tel Aviv University, School of Electrical Engineering）
- 作者列表：Ido Nitzan Hidekel（Tel Aviv University, School of Electrical Engineering）、Gal Lifshitz（Tel Aviv University, School of Electrical Engineering）、Khen Cohen（Tel Aviv University, School of Physics and Astronomy）、Dan Raviv（Tel Aviv University, School of Electrical Engineering）

💡 **毒舌点评**

SONAR巧妙地将低频语义与高频残差的一致性作为深度伪造检测的关键信号，可学习SRM与Jensen-Shannon对齐损失的组合简洁有效，收敛速度大幅领先基线，并且在跨域测试中表现稳健。但整体架构仍属双流融合的增量改进，创新高度有限，对输入带宽高度敏感，依赖16kHz以上的高频信息，一旦低频信号被压制或带宽受限，性能会明显退化，实际部署的边界条件尚需更充分的讨论。

📌 **核心摘要**

本文针对音频深度伪造检测中现有模型因频谱偏差（spectral bias）导致泛化能力弱的问题，提出SONAR（Spectral-cONtrastive Audio Residuals）框架。其核心是将语音分解为低频语义内容和可学习SRM滤波器提取的高频残差，通过双分支XLS-R编码器分别表征，再利用交叉注意力融合，并引入Jensen-Shannon散度损失强制正样本的低-高频分布对齐、负样本的对齐被破坏。与之前只将高频作为辅助线索的方法不同，SONAR将内容-噪声一致性提升为监督信号。在ASVspoof 2021和In-the-Wild基准上，SONAR-Full分别达到DF 1.57%、LA 1.55%、In-the-Wild 6.00%的单次运行最佳等错误率（EER），SONAR-Finetune进一步降至1.45%/5.43%/1.20%，均优于XLSR-Mamba、AASIST等强基线，且收敛仅需4–12个epoch。该方法为音频深伪检测提供了全数据驱动、无需手工滤波器的频率引导范式，对编解码和采样率变化具有一定鲁棒性，但极度依赖高频成分，在带宽低于16kHz时性能单调下降。

| 模型 | ASVspoof 2021 LA↓ | DF↓ | In-the-Wild↓ |
|------|-------------------|-----|--------------|
| WavLM-Large+MFA | 5.08 | 2.56 | – |
| XLSR+AASIST | 1.90 | 3.69 | 10.46 |
| XLSR+MoE | – | – | 9.17 |
| XLSR+Conformer | 0.97 | 2.58 | 8.42 |
| XLSR+Conformer+TCM | 1.18 | 2.25 | 7.79 |
| XLSR-SLS | 2.87 | 1.92 | 7.46 |
| XLSR-Mamba | 0.93 | 1.88 | 6.71 |
| SONAR-Lite (M=30) | 1.78 (2.03) | 2.11 (2.5) | 6.98 (7.2) |
| SONAR-Full (M=30) | 1.55 (1.68) | 1.57 (1.95) | 6.00 (6.8) |
| SONAR-Finetune (M=30) | 1.20 (1.30) | 1.45 (1.62) | 5.43 (5.8) |

🔗 **开源详情**

- 代码：https://github.com/idonithid/SONAR-Audio-DF-Detection
- 模型权重：论文中未提供独立于代码仓库的权重下载链接，但指出预训练检查点（checkpoints）包含在代码仓库中（见附录F）。
- 数据集：
  - ASVspoof 2019 (LA)：（https://datashare.ed.ac.uk/handle/10283/3336，ODC-By v1.0）
  - ASVspoof 2021 (LA/DF)：（https://doi.org/10.5281/zenodo.4837263，ODC-By v1.0）
  - In-the-Wild：（https://deepfake-total.com/in_the_wild，Apache 2.0）
- Demo：论文中提到提供交互式演示，与代码仓库绑定（https://github.com/idonithid/SONAR-Audio-DF-Detection），无独立的在线服务地址。
- 复现材料：论文在附录F中说明，完整的源代码、Hydra配置文件、预训练检查点以及用于复现所有图表和表格的 shell 脚本均位于代码仓库（链接同上）。
- 论文中引用的开源项目：
  - XLSR (fairseq)：MIT 许可证，https://github.com/facebookresearch/fairseq
  - XLSR-Mamba：MIT 许可证，https://github.com/swagshaw/XLSR-Mamba
  - AASIST：MIT 许可证，https://github.com/clovaai/aasist

📄 [OpenReview](https://openreview.net/forum?id=Jr7k590VxW)

---

### 44. [TMD-Bench: A Multi-Level Evaluation Paradigm for Music–Dance Co-Generation](/audio-paper-digest-blog/posts/2026-07-04-tmd-bench-a-multi-level-evaluation-paradigm-for)

✅ **7.7/10** | 前25% | #音视频生成 | 创新 1.3/2 | 严谨 1.2/1.5 | 实验 1.1/1.5 | 影响 0.8/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Xiaoda Yang（浙江大学）、Majun Zhang（浙江大学）（标注为同等贡献）
- 通讯作者：Zhou Zhao（浙江大学，zhaozhou@zju.edu.cn）
- 其余作者：Changhao Pan（浙江大学）、Nick Huang（Tecent, China）、Yuguang Yang（Tecent, China）、Fan Zhuo（浙江大学）、Pengfei Zhou（新加坡国立大学）、Jin Zhou（Tecent, China）、Sizhe Shan（浙江大学）、Shan Yang（Tecent, China）、Miles Yang（Tecent, China）、Yang You（新加坡国立大学）

💡 **毒舌点评**

这篇工作为音乐–舞蹈联合生成量身打造了一个多级评测范式 TMD-Bench，其中 MDAlign 将节拍-运动重音对齐拆解为物理度量与 MLLM 感知判决，思路务实且填补了该方向评测的空白。然而，10k 的数据集体量偏小，自研基线 RhyJAM 在关键的视频指令遵循和 MLLM 感知对齐上仍明显落后于 Sora 2 等商业模型，离真正的“卡准拍”和“听懂指令”还有明显距离。此外，声称的“统一基线”更像是一个为了验证评测基准而存在的基础模型，并未在方法架构上展现足够的新颖性。

📌 **核心摘要**

- 要解决的问题：现有音视频生成评测无法刻画音乐节奏与舞蹈动作间的细粒度韵律耦合，缺乏专门面向 text-driven music–dance co-generation 的评测基准。
- 方法核心：提出 TMD-Bench 评测基准，核心创新在于 MDAlign——一种将物理指标（基于节拍/运动重音离散事件的 VBCS 和 ABHS）与 MLLM 感知判断结合的双轨韵律对齐评估框架。同时构建了 10k 规模韵律对齐数据集、结构化 Music Captioner，并提供了一个统一的流匹配基线模型 RhyJAM。
- 与已有方法的新颖之处：首次在音视频联合生成评测中系统引入节拍级对齐度量，并将物理可计算指标与 MLLM 知觉判断整合为一个可扩展的多级评测协议；MDAlign 的物理指标无需成对真值，适用于开放式生成场景。
- 主要实验结果：在 100 条测试提示上对比 Sora 2、Veo 3 等闭源及多个开源模型。韵律对齐方面，RhyJAM 在物理指标 Video Beat Consistency Score (0.50) 和 Audio Beat Hit Score (0.27) 上表现最优或持平，但 MLLM 感知对齐分 (0.79) 落后于 Sora 2 (0.85)；音频生成方面，在节奏与律动 (0.59) 和速度 (0.51) 维度指令遵循突出，但流派、氛围、功能维度薄弱；视频质量方面，RhyJAM 在低层一致性、运动平滑度指标 (0.94, 0.99) 上表现出色，但 MLLM 指令遵循得分 (0.56) 远低于闭源模型 (0.91)，暴露了其在复杂语义理解上的短板。
- 实际意义：为音乐–舞蹈联合生成这一小众方向提供了第一个可复用的评测工具、数据集和基线，推动了韵律一致性从主观感受走向可量化、可比较的科学研究。
- 主要局限性：数据集仅 10k 对样本，规模有限，泛化性受限；RhyJAM 在视频指令遵循和 MLLM 感知对齐上显著落后于最强闭源模型；MDAlign 对齐指标对节拍检测和姿态估计的错误鲁棒性未明；MLLM-as-a-Judge 的效度验证仅基于 10 位学生评分，样本量和一致性报告不足；数据集和模型权重是否公开语焉不详。

📄 [OpenReview](https://openreview.net/forum?id=FcklDFAnzF)

---

### 45. [AudioMosaic: Contrastive Masked Audio Representation Learning](/audio-paper-digest-blog/posts/2026-07-04-audiomosaic-contrastive-masked-audio)

✅ **7.7/10** | 前25% | #音频分类 | 创新 1.2/2 | 严谨 1/1.5 | 实验 1.5/1.5 | 影响 1/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Hanxun Huang（School of Computing and Information Systems, The University of Melbourne, Australia）
- 通讯作者：Hanxun Huang（The University of Melbourne）、Christopher Leckie（The University of Melbourne）
- 作者列表：Hanxun Huang（The University of Melbourne）、Qizhou Wang（The University of Melbourne）、Xingjun Ma（Institute of Trustworthy Embodied AI, Fudan University）、Cihang Xie（Baskin School of Engineering, University of California, Santa Cruz）、Christopher Leckie（The University of Melbourne）、Sarah Monazam Erfani（The University of Melbourne）

💡 **毒舌点评**

这篇工作把 SpecAugment 的灵魂塞进了对比学习的壳子里，用结构化时频掩码造正样本，配上有效秩分析来解释为何此法能缓解维度崩塌，逻辑自洽、实验详实、效果亮眼。但本质上仍是"结构化掩码+SimCLR"的工程重组，理论新颖度有限，与 Audio‑LLM 的对接仅停留在替换编码器的层面，缺乏深入的协同优化，收益虽稳但未惊艳。

📌 **核心摘要**

- 问题：现有音频自监督方法以生成式掩码谱图建模为主流，而对比学习方法因数据增强难设计、大 batch 需求高、易发生维度崩塌等问题，在谱图上的应用研究不足。
- 方法核心：提出 AudioMosaic，对 log‑Mel 谱图分块后，对两路增强视图分别沿时间和频率维度进行独立的结构化随机掩码（时间掩码比 $\rho_t=0.6$，频率掩码比 $\rho_f=0.4$），仅将可见 patch 打乱顺序后送入共享 ViT‑B 编码器，通过对比损失（InfoNCE）最大化来自同一话语的一对互补视图的一致性。此设计无需解码器，且大大降低了计算复杂度。
- 与已有方法的关键区别：抛弃了 MAE 式的重建解码器，首次将结构化时频掩码用作对比学习的正样本构建机制（而非作为重建任务的噪声）；并利用有效秩分析，系统阐述了结构化掩码相比无结构掩码能够缓解对比学习中维度崩塌的机理。
- 主要实验结果：
  - 微调：在 AudioSet‑20K 上 mAP 达 42.5（超出 SSLAM 1.6 个点），在 AudioSet‑2M 上 mAP 达 50.2（与 SSLAM 持平），在 ESC‑50 上准确率达 97.5%，Speech Commands V1 和 V2 上分别达 99.0% 和 98.4%。
  - 线性探测：AS‑20K mAP 达 29.4，相比 Audio‑MAE 的 18.3 大幅领先，也远超 BEATs、EAT、SSLAM，证明其特征提取能力极强。
  - 跨层线性探测：AudioMosaic 性能随层深单调递增，最高在第十层达到 30.2 mAP，末层无明显退化，这与其他方法（如 BEATs、EAT）在深层出现性能骤降形成鲜明对比。
  - 深度伪造检测：在 EnvSDD 上，未见数据源和未见生成模型下的 EER 全面且显著低于 Wav2Vec2.0 和 BEATs。
  - 音频–语言模型：在 LTU 框架下，直接替换 CAV‑MAE 编码器，AudioMosaic 在多数零样本分类和描述任务上取得提升，例如 ESC‑50 零样本准确率从 82.0% 提升至 86.5%。
- 实际意义：提供了一种参数高效（无需解码器，预训练总参数量约 86M）、内存友好（掩码后仅约 24% 的 token 参与编码）的对比音频预训练方案，能学得更具判别力和可迁移的全局表示，并在多种任务和域外条件下表现优异。
- 主要局限性：仍依赖大 batch size（6144）进行对比预训练；最优的结构化掩码超参数（$\rho_t$、$\rho_f$）基于实验调参，缺乏理论指导；与 LLM 的对齐仅替换编码器，未探索联合优化；未明确给出对比损失的 $\tau$ 温度系数。

| 模型 | 预训练数据 | 参数量(PT/FT) | AS-20K mAP | AS-2M mAP | ESC-50 Acc | SPC-2 Acc | SPC-1 Acc |
|------|------------|---------------|------------|-----------|------------|-----------|-----------|
| Audio-MAE | AS | 137M/86M | 37.0 | 47.3 | 94.1 | 98.3 | 96.9 |
| BEATs | AS | 182M/91M | 38.3 | 48.0 | 95.6 | 98.3 | 97.7 |
| A-JEPA | AS | 354M/86M | 38.4 | 48.6 | 96.3 | 98.5 | 97.7 |
| SSLAM | AS | 93M/88M | 40.9 | 50.2 | 96.2 | 98.1 | 98.8 |
| AudioMosaic | AS | 86M/86M | 42.5 | 50.2 | 97.5 | 98.4 | 99.0 |

| 模型 | AS-20K mAP | AS-2M mAP | ESC-50 Acc |
|------|------------|-----------|------------|
| Audio-MAE | 18.3 | 20.5 | 86.9 |
| BEATs | 8.2 | 12.2 | 72.7 |
| EAT | 12.5 | 18.4 | 83.5 |
| SSLAM | 15.0 | 19.5 | 87.1 |
| AudioMosaic | 29.4 | 28.7 | 93.0 |

🔗 **开源详情**

- 代码：论文中声明“The code is publicly available in our GitHub repository.”，但未给出具体仓库链接。
- 模型权重：论文中未提及是否发布预训练模型权重。
- 数据集：
  - AudioSet（Gemmeke et al., 2017）: https://research.google.com/audioset/
  - ESC-50（Piczak, 2015）: https://github.com/karolpiczak/ESC-50
  - Speech Commands（Warden, 2018）: 论文未直接提供链接，可参考 https://www.tensorflow.org/datasets/catalog/speech_commands
  - EnvSDD（Yin et al., 2025a;b）: 论文未给出链接。
  - OpenAQA（用于音频–LLM 对齐）: 论文未给出链接，并说明由于分发限制，仅使用了 5.4M（原 5.6M）样本。
  - Clotho（Drossos et al., 2020）: 论文未直接提供链接，可参考 https://zenodo.org/record/3490684
  - AudioCaps（Kim et al., 2019）: https://audiocaps.github.io/
  - 其他评估数据集（TUT, BJO, DCASE, VGG Sound 等）均未列出链接。
- 复现材料：附录 A 提供了极其详尽的预训练、微调及线性探测的超参数配置，具备高可复现性，但关键超参数（如温度系数 $\tau$）的缺失构成了障碍。
- 论文中引用的开源项目：
  - Audio-MAE（Huang et al., 2022）: https://github.com/facebookresearch/AudioMAE
  - BEATs（Chen et al., 2023）: https://github.com/microsoft/unilm/tree/master/beats
  - EAT（Chen et al., 2024）: https://github.com/RetroCirce/Efficient-Audio-Transformer
  - LTU（Gong et al., 2024）: https://github.com/YuanGongND/ltu
  - LLaMA-7B（Touvron et al., 2023）: https://github.com/facebookresearch/llama
  - CAV-MAE（Gong et al., 2023）: https://github.com/YuanGongND/cav-mae

📄 [OpenReview](https://openreview.net/forum?id=OXJ7KqVOoT)

---

### 46. [BFCL Audio: An Audio Function Calling Evaluation for Large Language Models](/audio-paper-digest-blog/posts/2026-07-04-bfcl-audio-an-audio-function-calling-evaluation)

✅ **7.7/10** | 前25% | #语音交互 | 创新 1.2/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 影响 0.8/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Huanzhi Mao（University of California, Berkeley）
- 通讯作者：Huanzhi Mao（University of California, Berkeley）
- 作者列表：Huanzhi Mao（University of California, Berkeley）、Aditya Ghai（University of California, Berkeley）、Imra Dawoodani（University of California, Berkeley）、Tony A Ginart（Salesforce AI Research）、Shishir G Patil（University of California, Berkeley）、John Emmons（Salesforce AI Research）、Joseph E. Gonzalez（University of California, Berkeley）

💡 **毒舌点评**

首次系统评估音频function calling，其可控合成管道和无需LLM裁判的自动评分机制，为语音Agent的鲁棒性问题提供了清晰的归因分析。但工作本质上仍是现有BFCL基准向语音模态的延伸，且完全依赖合成数据，在真实场景的生态效度和结论的泛化性上存在硬伤。

📌 **核心摘要**

本文旨在填补音频function calling评估的空白。当前纯文本工具调用基准无法反映语音引入的感知错误、不流畅和自然交互中产生的澄清需求。为此，作者提出BFCL Audio，包含6.2K个专家验证任务，覆盖两种常见生产部署模式：管线式（ASR→LLM→工具调用）的BFCL Text Audio，和端到端式（音频输入→工具调用）的BFCL True Audio。该基准通过一个可控语音合成与增强管道，向原始文本查询中注入口语不流畅、用克隆语音合成，并叠加真实声学退化（背景噪声、混响、网络损伤等），生成仿真音频。评估指标采用基于抽象语法树（AST）的单轮参数级匹配，和基于状态与响应验证的多轮评估，全程无需LLM裁判，实现了可规模化的自动评分。在GPT-4o-audio、Gemini、Qwen等模型上的实测发现，噪声使端到端模型的总体准确率普遍下降9-15个百分点，主要失败模式为命名实体错误、不必要澄清和对话漂移。消融研究进一步指出，竞争性语音、混响和话语结构改动是最大瓶颈。该工作可作为语音工具调用的标准化诊断平台，但其合成音频的局限性使其仍需要真实部署数据的补充验证。

实验结果核心数据如下（表2，部分摘录）：

| Model | Overall (Clean Audio) | Overall (Noisy Audio) | Overall (Text) |
|---|---|---|---|
| GPT-4o-audio | 60.4±7.1 | 50.9±7.2 | 58.6±6.8 |
| Qwen3-Omni-Flash | 55.8±7.0 | 48.2±7.2 | 55.1±6.9 |
| Gemini-2.5-Pro | 51.1±6.9 | 45.4±7.2 | 51.5±7.0 |
| GPT-4o-mini-audio | 47.2±7.1 | 40.3±6.6 | – |

📄 [OpenReview](https://openreview.net/forum?id=pgwHOpKkOp)

---

### 47. [SALSA-V: Shortcut-Augmented Long-form Synchronized Audio from Videos](/audio-paper-digest-blog/posts/2026-07-04-salsa-v-shortcut-augmented-long-form-synchronized)

✅ **7.6/10** | 前25% | #音视频生成 | 创新 1.2/2 | 严谨 1.3/1.5 | 实验 1.4/1.5 | 影响 1/1.5 | 开源 0.2/1.5

👥 **作者与机构**

- 第一作者：Amir Dellali（ETH Zurich）
- 通讯作者：Amir Dellali（ETH Zurich）、Luca A. Lanzendörfer（ETH Zurich）、Florian Grötschla（ETH Zurich）、Roger Wattenhofer（ETH Zurich）
- 作者列表：Amir Dellali（ETH Zurich）、Luca A. Lanzendörfer（ETH Zurich）、Florian Grötschla（ETH Zurich）、Roger Wattenhofer（ETH Zurich）

💡 **毒舌点评**

该工作将 Shortcut 模型和掩码流匹配巧妙地嫁接到视频到音频生成，实现了少步采样和长音频扩展，实验中同步指标和人类偏好均有明显优势，实用性较强。但核心方法多为已有技术的组合，对比学习同步模型与 Shortcut 损失的创新增量有限，且未开源代码与模型，削弱了其学术推动力。

📌 **核心摘要**

论文要解决视频到音频生成中三个关键痛点：长序列生成时的质量退化、音频条件控制缺失、以及扩散模型所需的过多采样步数。方法核心是 SALSA‑V，一种基于 shortcut‑augmented latent flow matching 的多模态生成模型，它通过掩码训练目标实现音频条件的 in‑/outpainting，从而以迭代延伸方式合成任意长度音频，同时利用一致性损失（shortcut loss）使模型在极少数采样步数（如 8 步）下仍保持高保真度；此外，还训练了一个基于 VideoPrism 和 AST 的对比学习同步模型，为生成器提供高分辨率时间对齐特征。相较现有方法，SALSA‑V 首次将 Shortcut 范式引入视频到音频领域，无需后训练蒸馏即可实现实时级生成，并且凭借掩码流匹配统一了无条件生成、音频条件生成和长序列扩展。主要实验显示，在混合时长测试集上，SALSA‑V 的 DeSync 同步指标达到 0.497，显著优于 MMAudio（0.521）和 FoleyCrafter（1.319），人类评估中同步性 MOS 为 3.52（MMAudio 为 2.92）；在 4 步采样下 $FAD_{VGG}$ 仍保持 1.19，远低于同采样预算的 Frieren（2.17）。实际意义在于为实时 Foley 创作和长时间视频音效生成提供了可用的流水线。主要局限性为长音频生成依赖连续 outpainting，在场景切换时难以自然过渡，且当前未释放代码与权重，复现成本较高。

🔗 **开源详情**

- 代码：论文中未提供代码仓库链接，但提供了项目页面：https://eth-disco.github.io/SALSA-V/
- 模型权重：论文中未提及
- 数据集：论文使用多个公开数据集，包括：VGGSound（https://www.robots.ox.ac.uk/~vgg/data/vggsound/ ）、Moments-in-Time（http://moments.csail.mit.edu/ ）、Panda70M（https://snap-research.github.io/Panda-70M/ ）、WavCaps（https://github.com/XinhaoMei/WavCaps ）、AudioSetCaps（取自AudioSet，https://research.google.com/audioset/ ），以及一个未公开的高保真工作室Foley数据集
- Demo：论文中未提及
- 复现材料：论文中未提供专门复现材料，训练细节见附录A.5及A.6，项目页面可能包含额外信息
- 论文中引用的开源项目：
  - Synchformer：https://github.com/v-iashin/Synchformer
  - SpecVQGAN：https://github.com/v-iashin/SpecVQGAN
  - V-AURA：链接未公开
  - MMAudio：https://github.com/hkchengrex/MMAudio
  - Frieren：链接未公开
  - LoVA：链接未公开
  - MDSGen：链接未公开
  - TARO：链接未公开
  - PAVAS：链接未公开
  - ImageBind：https://github.com/facebookresearch/ImageBind
  - VATT：https://github.com/google-research/google-research/tree/master/vatt
  - InternVideo2：https://github.com/OpenGVLab/InternVideo2
  - SigLIP 2：https://github.com/google-research/big_vision
  - ViT（Vision Transformer）：https://github.com/google-research/vision_transformer
  - AST（Audio Spectrogram Transformer）：https://github.com/YuanGongND/ast
  - VideoPrism：https://github.com/google-research/videoprism
  - Stable Audio VAE：https://github.com/Stability-AI/stable-audio
  - Flax：https://github.com/google/flax
  - JAX：https://github.com/jax-ml/jax

📄 [OpenReview](https://openreview.net/forum?id=akfapJ7Uuf)

---

### 48. [BEAT: Tokenizing and Generating Symbolic Music by Uniform Temporal Steps](/audio-paper-digest-blog/posts/2026-07-04-beat-tokenizing-and-generating-symbolic-music-by)

✅ **7.6/10** | 前25% | #音乐生成 | 创新 1.2/2 | 严谨 0.9/1.5 | 实验 0.9/1.5 | 影响 0.9/1.5 | 开源 1.5/1.5

👥 **作者与机构**

- 第一作者：Lekai Qian（华南理工大学）
- 通讯作者：Lekai Qian（华南理工大学）、Ziyu Wang（Mohamed bin Zayed University of Artificial Intelligence / 纽约大学）
- 作者列表：Lekai Qian（华南理工大学）、Haoyu Gu（华南理工大学）、Jingwei Zhao（新加坡国立大学）、Ziyu Wang（Mohamed bin Zayed University of Artificial Intelligence / 纽约大学）

💡 **毒舌点评**

亮点在于将钢琴卷的稀疏性与节拍网格的规律性注入 token 化设计，用节拍内基‑3 编码和相对音高实现了紧凑、时移/移调具有部分不变性的表示，并天然适配实时因果生成，思路干净利落。短板上，严格依赖量化 MIDI，对演奏 MIDI 几乎直接失效；节拍内模式词汇随分辨率 τ 呈指数长尾分布，细粒度韵律建模受限；实时伴奏对比的基线仅 SongDriver，有自卖自夸之嫌。

📌 **核心摘要**

本文针对事件型符号音乐 token 化（如 REMI、CPW）隐式建模时间网格、token 跨度不均匀的问题，提出 BEAT（Beat‑wise Encoding for Autoregressive Transformers），以固定节拍为统一时间步。在节拍内部，将同一音高的所有状态（onset/sustain/silence）用基‑3 编码压缩为一个模式 token，配合相对音高和平均力度，形成稀疏、网格化的序列表示；空拍用 REST token 替代。BEAT 在钢琴和多轨延续任务中，FMD 分别降至 436.7 和 420.9，Groove Consistency（JS_GC=0.039）大幅领先所有基线（次优为 Naive Piano‑Roll 的 0.051）。主观评测中所有维度均显著优于 REMI/CPW/ABC 等方法，且在重复‑多样性分析中，生成的累积唯一节拍比曲线几乎与真实音乐重合。在实时伴奏任务上，BEAT 借助其节拍级因果交错结构，主观评分大幅超过专用系统 SongDriver。OOD 实验（POP909）进一步验证了泛化能力：BEAT FMD=365.9，优于同类训练规模下所有基线。

🔗 **开源详情**

- 代码：https://github.com/Lekai-Qian/BEAT-ICML2026
- 模型权重：论文未提及
- 数据集：Lakh MIDI Dataset (LMD)（https://colinraffel.com/projects/lmd/ ）；MuseScore 用户上传数据（爬取，未公开链接）；POP909（https://github.com/music-x-lab/POP909-Dataset ）
- Demo：https://lekai-qian.github.io/BEAT-ICML2026/
- 复现材料：附录提供完整编解码算法（Algorithm 1/2）、模型架构表（Table 7）、训练超参数表（Table 8）、数据预处理细节、归纳偏置实验设置（附录 J）、OOD 实验细节（附录 G）等
- 论文引用并使用的开源项目：MidiTok、MusPy、Anticipatory Music Transformer（含 released models）、LLaMA、POP909 数据集、CLaMP2（用于 FMD）、SongDriver

### 标签
#音乐生成 #自回归模型 #实时处理 #多任务学习
主任务标签：#音乐生成
主方法标签：#自回归模型
补充标签：#实时处理 #多任务学习

📄 [OpenReview](https://openreview.net/forum?id=XrrGXLksji)

---

### 49. [From Inpainting to Editing: Unlocking Robust Mask-Free Visual Dubbing via Generative Bootstrapping](/audio-paper-digest-blog/posts/2026-07-04-from-inpainting-to-editing-unlocking-robust-mask)

✅ **7.6/10** | 前25% | #扩散模型 | 创新 1.7/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 影响 0.9/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Xu He（清华大学深圳国际研究生院）
- 通讯作者：Zhiyong Wu（清华大学深圳国际研究生院, 香港中文大学）
- 作者列表：Xu He（清华大学深圳国际研究生院）、Haoxian Zhang（快手Kling团队）、Hejia Chen（快手Kling团队）、Changyuan Zheng（清华大学深圳国际研究生院）、Liyang Chen（清华大学深圳国际研究生院）、Songlin Tang（快手Kling团队）、Jiehui Huang（香港科技大学）、Xiaoqiang Liu（快手Kling团队）、Pengfei Wan（快手Kling团队）、Zhiyong Wu（清华大学深圳国际研究生院 / 香港中文大学）

💡 **毒舌点评**

亮点：论文提出了一种极具洞察力的“生成式自举”范式，从根本上解决了视觉配音领域因掩码修复带来的唇形泄露、身份漂移等顽疾，实现了无掩码、高保真的视觉配音。时间步自适应多阶段学习策略巧妙解耦了编辑任务中的多目标冲突，模型在复杂场景下的鲁棒性令人印象深刻。短板：技术方案对预训练 DiT 和 Whisper 等强大先验的依赖程度过高，自身基础方法的创新有限，且未能提供对基底模型更换后的鲁棒性分析。提出的 X-DubBench 数据集和模型权重均未公开，仅有的推理代码严重限制了社区复现与公平对比。

📌 **核心摘要**

本文针对音频驱动视觉配音中，因缺乏理想配对数据（即身份、背景相同，仅唇动不同的视频对）而被迫使用掩码修复方案，导致唇形泄露、身份漂移和鲁棒性差等核心痛点，提出了名为 X-Dub 的两阶段“生成式自举”框架。其核心洞察在于：将第一阶段训练的掩码引导修复模型降级为一个专门的“数据工厂”，利用其在海量无标签音视频数据上合成海量的伪配对视频；第二阶段则利用这些伪配对数据训练一个无掩码的视频编辑器作为最终配音器，从而在推理时彻底摆脱掩码约束。同时，为稳定第二阶段编辑器的训练，作者引入了时间步自适应多阶段学习策略，将全局结构保持、唇动编辑和纹理细节恢复等竞争性目标，分配至扩散过程的不同噪声区间进行学习。实验结果表明，该方法在 HDTF 和自建的挑战性基准 X-DubBench 上全面超越现有方法，Sync-C 提升最高达 16.0%，身份相似度提升 6.1%，并在各种遮挡、动态光照等挑战场景下保持了 96.4% 的生成成功率。主要局限性在于生成数据的质量会制约第二阶段模型的上限，且对源视频的残余表情偏见尚无法完全消除。

🔗 **开源详情**

- 代码：https://github.com/KlingAIResearch/X-Dub
- 模型权重：论文中未提及，GitHub 仓库中未提供。
- 数据集：论文提出的 X-DubBench 未提供独立下载链接，仓库中也未提供。
- Demo：GitHub 仓库首页提供了在线演示链接。
- 复现材料：论文附录提供了训练配置和超参数，但缺少预训练模型和完整评估脚本。
- 论文中引用的开源项目：Whisper、DWPose、SAM 2、Qwen2.5-VL、SyncNet、ArcFace、Wav2Lip、VideoReTalking、TalkLip、IP-LAP、DiffTalk、Diff2Lip、MuseTalk、LatentSync 等。

📄 [OpenReview](https://openreview.net/forum?id=PfhSH42cCy)

---

### 50. [Hearing Without Noticing? Attention-Aware Stealthy Black-Box Adversarial Audio Attacks](/audio-paper-digest-blog/posts/2026-07-04-hearing-without-noticing-attention-aware-stealthy)

✅ **7.6/10** | 前25% | #语音识别 | 创新 1.4/2 | 严谨 1/1.5 | 实验 1.1/1.5 | 影响 0.8/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Tianyi Xu（中国科学院信息工程研究所，中国科学院大学网络空间安全学院）
- 通讯作者：Yue Zhao（中国科学院信息工程研究所），Kai Chen（中国科学院信息工程研究所）
- 作者列表：Tianyi Xu、Cheng'an Wei、Yue Zhao、Kai Chen（均来自中国科学院信息工程研究所 / 中国科学院大学网络空间安全学院）

💡 **毒舌点评**

本文巧妙利用“听觉不留意”的心理声学现象，将其建模为可优化的注意力稀释损失，在对抗音频隐蔽性上迈出了关键一步。200人用户研究中55.6%的不可察觉率远超前人，攻击成本仅0.43美元，成果说服力强。然而，方法深度依赖人工精选的42首音乐载体库和经典MPEG-1掩蔽模型，对长命令和稀疏音乐的泛化能力明显不足；防御实验仅测试了两种基础信号处理手段，面对现实世界中可能存在的说话人验证、音频取证等主动防御系统时，其攻击效力仍存疑，这削弱了其宣称的现实威胁等级。

📌 **核心摘要**

1. 论文要解决的问题：在真实物理世界中对商用黑盒自动语音识别（ASR）系统发起隐蔽对抗攻击。现有方法仅关注压缩扰动幅度，忽视了人类选择性注意力机制，导致生成的对抗音频仍易被察觉（如Occam仅10.78%用户认为正常，Kenku有46%用户能识别嵌入的指令）。

2. 方法核心是提出HWN（Hearing Without Noticing）框架，包含两个关键设计：基于心理声学掩蔽效应的注意力兼容载体选择算法（从候选音乐库中选出最能掩蔽目标命令的音乐片段）和基于结构-残差分解的注意力稀释损失函数（抑制频谱中易捕获注意力的突变成分）。

3. 与已有方法相比，HWN的新颖之处在于显式建模“注意力”而非仅最小化信噪比，通过载体选择与频谱纹理平滑双重机制提升感知隐蔽性，将攻击从“小声”推向“不被注意”的层次。

4. 主要实验结果：在5种商用云API上攻击成功率达100%；数字域人类感知研究中，56.25%的参与者认为对抗音频完全正常（对比Occam 19.41%，Kenku 40.72%）；物理域攻击三大语音助手成功率100%，55.57%的参与者未能察觉异常。消融实验表明，移除载体选择或注意力损失均会导致“听见语音”比例大幅上升。防御实验显示，在频带滤波和湍流噪声下，HWN的隐蔽样本攻击成功率残留（30.78%/38.46%）远超基线方法。

5. 实际意义：揭示了当前商用ASR系统在注意力感知隐蔽攻击面前的严重脆弱性，为语音助手安全防护提出了新的、更隐蔽的威胁模型，强调了多因素认证等防御机制的必要性。

6. 主要局限性：攻击对长命令（如“take a picture and send it to John”）的隐蔽性显著下降；载体选择依赖人工构建的音乐库和MPEG-1模型，尚未探索更大规模数据集或AI生成载体的可能性；仅依赖TTS合成目标命令，缺乏对真实录音的泛化上限验证；防御实验未涉及学习型检测、说话人认证或反欺骗等更现实的对策；人类感知评估仅单次聆听，可能受听感疲劳影响。

🔗 **开源详情**

- 代码：https://github.com/Spa-rkle/HWN-Attack
- 模型权重：无（该方法不依赖训练好的模型权重）
- 数据集：未提供专门的公共数据集下载。论文使用10条自定义目标命令和42首来自音乐平台的精选曲目构成内部测试集，具体集合未公开。
- Demo：https://github.com/Spa-rkle/HWN-Attack （仓库内包含音频演示样例）
- 复现材料：源代码仓库提供完整实现；附录D给出了全部超参数和实现细节，可基于公开代码和论文信息复现。
- 论文中引用的开源项目：
  - Silero VAD：https://github.com/snakers4/silero-vad
  - OpenAI Whisper：https://github.com/openai/whisper

📄 [OpenReview](https://openreview.net/forum?id=YTk3CL8qA7)

---

### 51. [AVGen-Bench: A Task-Driven Benchmark for Multi-Granular Evaluation of Text-to-Audio-Video Generation](/audio-paper-digest-blog/posts/2026-07-04-avgen-bench-a-task-driven-benchmark-for-multi)

✅ **7.6/10** | 前25% | #音视频生成 | 创新 1.1/2 | 严谨 0.9/1.5 | 实验 1/1.5 | 影响 1/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Ziwei Zhou（复旦大学）、Zeyuan Lai（中国科学技术大学）（共同一作）
- 通讯作者：Yifan Yang（Microsoft Research Asia）
- 其他作者：Rui Wang（复旦大学）、Yuqing Yang（Microsoft Research Asia）、Qi Dai（Microsoft Research Asia）、Lili Qiu（Microsoft Research Asia）、Chong Luo（Microsoft Research Asia）

💡 **毒舌点评**

这篇工作用一个设计良好的任务驱动基准和混合评估框架，把当前 T2AV 模型在音乐音高、文本渲染、物理推理等方面的“车祸现场”系统地曝光了出来，对领域极具诊断价值。然而，评测在音高维度因模型全面崩盘而存在地板效应，区分度与人类一致性均较低；对闭源 MLLM 的过度依赖和对评估模块自身的敏感性分析缺失，让这一精细指标的长期可靠性存疑。

📌 **核心摘要**

本文针对文本到音视频生成（T2AV）缺乏细粒度联合评估的现状，提出了任务驱动的基准 AVGen‑Bench 及配套的多粒度评估框架。核心思路是基于真实用户意图构建涵盖 11 个日常类别的 235 条复杂提示，并将评估解耦为基础质量（视觉美学、音频生产质量、音视频同步、唇音同步）与六个细粒度维度（场景文本渲染、面部一致性、音高准确度、语音可懂度与连贯性、物理合理性、整体语义对齐），采用轻量专家模型与多模态大模型（MLLM）的混合流水线执行“检测‑验证”。与现有仅看整体嵌入相似度的粗粒度评估相比，AVGen‑Bench 首次系统量化了 T2AV 模型在精确语义控制上的普遍失败模式。对 13 个主流 T2AV 模型的实验表明：所有系统的音高控制得分均低于 12/100，文本渲染（尤其是偶然文字）普遍出现乱码，且音视频同步误差仍在 0.2–0.44 s；同时，自动指标与专家判断在五个维度上 Pearson 相关>0.82。该基准为诊断 T2AV 模型弱点、引导未来研究提供了标准化工具，主要局限在于对闭源 MLLM 的依赖，且音高维度因模型能力不足而存在地板效应。

🔗 **开源详情**

- 代码：http://aka.ms/avgenbench
- 模型权重：论文未提及（AVGen-Bench 为评测基准，不涉及生成模型权重）
- 数据集：AVGen-Bench 提示集（包含 11 个类别共 235 条任务提示），随代码仓库提供；详见 http://aka.ms/avgenbench
- Demo：论文中未提及
- 复现材料：评测框架代码与基准提示集均通过 http://aka.ms/avgenbench 提供；具体复现步骤未在论文中详细说明
- 论文中引用的开源项目：
  - PaddleOCR (https://github.com/PaddlePaddle/PaddleOCR)
  - InsightFace (https://github.com/deepinsight/insightface)
  - Basic-Pitch (https://github.com/spotify/basic-pitch)
  - Whisper (https://github.com/openai/whisper)
  - SyncNet (https://github.com/joonson/syncnet_python)
  - Syncformer (https://github.com/v-iashin/Syncformer)
  - Q-Align (https://github.com/Q-Future/Q-Align)
  - Audiobox-Aesthetic (https://github.com/facebookresearch/audiobox-aesthetics)
  - VideoPhy-2 (https://github.com/physical-reasoning/VideoPhy2)
  - VBench (https://github.com/Vchitect/VBench)

📄 [OpenReview](https://openreview.net/forum?id=aJdgt8xDMy)

---

### 52. [Alethia: a Foundational Encoder for Voice Deepfakes](/audio-paper-digest-blog/posts/2026-07-04-alethia-a-foundational-encoder-for-voice-deepfakes)

✅ **7.6/10** | 前25% | #语音伪造检测 | 创新 1.3/2 | 严谨 1.3/1.5 | 实验 1.4/1.5 | 影响 1.1/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Yi Zhu（Reality Defender）
- 通讯作者：Yi Zhu（Reality Defender，邮箱 yi.zhu@inrs.ca）
- 作者列表：Yi Zhu（Reality Defender）、Brahmi Dwivedi（Reality Defender）、Jayaram Raghuram（Reality Defender）、Surya Koppisetti（Reality Defender）

💡 **毒舌点评**

本文在预训练配方上做出了巧妙且富有洞察的设计，通过互信息分析精准判了离散量化目标的“死刑”，并以连续嵌入预测结合流匹配生成式预训练，在56个数据集上打造了目前最抗打的语音伪造检测基础模型。但声称“首个基础编码器”略有水分，且完全没有开源任何代码、权重或数据集，这种“只发论文不交枪”的做法在安全领域尤为令人遗憾，对学术界的实质性推进构成阻碍。

📌 **核心摘要**

本文旨在构建首个专门针对语音伪造检测的基础编码器，以解决通用语音基础模型（SFM）在下游伪造检测中泛化性不足、对真实世界扰动敏感的问题。方法核心是提出一种全新的自监督预训练配方Alethia，包含两个并行分支：瓶颈掩码嵌入预测和基于流匹配的频谱图重建。论文首先通过互信息分析，揭示了主流SFM采用的离散量化目标（如 K-means 伪标签）所携带的伪造判别信息极低，从而论证了使用连续预测目标的必要性。在此基础上，Alethia让学生编码器从掩码波形中预测一个冷冻教师模型（如WavLM-Large）多层连续嵌入，并通过瓶颈架构实现多层级知识压缩。同时，首次引入最优传输条件流匹配（OT-CFM）作为生成式预训练目标，以重建干净频谱图的速度场，迫使编码器捕获声学细节中的生成痕迹。在语音伪造检测（SDD）、歌声伪造检测（SVDD）、部分伪造定位（PFSL）、源追踪（ST）和音视频伪造检测（AVDD）共5类任务、56个数据集上的综合评估表明，Alethia-Large显著优于Wav2vec-XLSR-1B等同等规模的最强SFM。例如，在SDD扩展增强条件下，EER低至5.2%（W2V-1B为6.0%），准确率达93.3%，且在挑战性子集上优势更为明显。在歌声伪造检测上，仅用语音数据微调的Alethia-Large即实现10.8%的零样本EER，低于专门用歌声数据微调的基线模型（13.8%）。消融实验证实，流匹配生成分支使扩散/流匹配类伪造样本的EER降低了5.6%，而Transformer层间掩码贡献了2.3%的EER增益。主要局限在于代码、模型和预训练数据均未开源，且未与耳语（Whisper）等最新跨任务大规模音频模型进行对比。

| 任务（条件） | 模型 | 平均EER↓ | 平均准确率↑ | 挑战子集EER↓ | 挑战子集准确率↑ |
|---|---|---|---|---|---|
| SDD EXPANDED+AUG | W2V-1B | 6.0 | 91.9 | 13.2 | 78.2 |
| SDD EXPANDED+AUG | Alethia-Base | 6.9 | 90.6 | 13.1 | 80.7 |
| SDD EXPANDED+AUG | Alethia-Large | 5.2 | 93.3 | 11.5 | 81.2 |
| SVDD 零样本 | W2V-1B | 13.2 | 89.7 | — | — |
| SVDD 零样本 | Alethia-Large | 10.8 | 91.3 | — | — |
| PFSL 帧级EER | W2V-1B | 25.4 | — | — | — |
| PFSL 帧级EER | Alethia-Large | 27.2 | — | — | — |
| ST 嵌入可分离性 | W2V-300M | -0.15 | — | — | — |
| ST 嵌入可分离性 | Alethia-Base | +0.02（唯一正分） | — | — | — |

🔗 **开源详情**

- 代码：未提及。
- 模型权重：未提及。
- 数据集：预训练数据集（Mix-10k）为自建，未公开。论文使用了部分公开数据集进行预训练和评估，包括 CommonVoice (https://commonvoice.mozilla.org)、ASVspoof5、MLAAD、M-AILABS、TITW-hard、SpoofCeleb、ShiftySpeech 等，具体获取方式需查阅原论文和官方发布方。
- Demo：未提及。
- 复现材料：论文附录（Appendix B、C、D、E、F）提供了详细的架构超参数表（Table 11）、预处理模块参数（Table 12）、训练超参数和核心消融配置。预训练数据总量19k小时，使用WavLM-Large和Wav2vec-XLSR-1B作为教师模型，具体训练步数为Alethia-Base 600k步，Alethia-Large 300k步。
- 论文中引用并在相关工作中给出链接的开源项目（不含Alethia自身）：
    - WavLM: https://github.com/microsoft/unilm/tree/master/wavlm
    - HuBERT: https://github.com/facebookresearch/fairseq/tree/main/examples/hubert
    - MERT: https://github.com/yizhilll/MERT
    - MERaLiON: 论文中未提供具体链接（提及于 Huzaifah et al., 2024）
    - SPEAR: 论文中未提供具体链接（提及于 Yang et al., 2025）
    - Silero VAD: https://github.com/snakers4/silero-vad
    - pyannote-audio: https://github.com/pyannote/pyannote-audio
    - CommonVoice: https://commonvoice.mozilla.org
    - ASVspoof 2019/2021/5: https://www.asvspoof.org
    - FakeAVCeleb: https://github.com/DASH-Lab/FakeAVCeleb
    - CtrSVDD: 未提及具体链接
    - PartialSpoof: 未提及具体链接
    - Half-Truth: 未提及具体链接
    - LlamaPartialSpoof: https://github.com/hieuthi/MultiResoModel-Simple
    - DNSMOSPro: 未提及具体链接

📄 [OpenReview](https://openreview.net/forum?id=t2h7QkTnzD)

---

### 53. [AG-REPA: Causal Layer Selection for Representation Alignment in Audio Flow Matching](/audio-paper-digest-blog/posts/2026-07-04-ag-repa-causal-layer-selection-for-representation)

✅ **7.6/10** | 前25% | #语音合成 | 创新 1.5/2 | 严谨 1/1.5 | 实验 1.1/1.5 | 影响 0.9/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Pengfei Zhang（香港科技大学（广州）信息枢纽人工智能学域）
- 通讯作者：Li Liu（香港科技大学（广州）信息枢纽人工智能学域）
- 作者列表：Pengfei Zhang、Tianxin Xie、Minghao Yang、Li Liu（均来自香港科技大学（广州）信息枢纽人工智能学域）

💡 **毒舌点评**

这篇论文最大的亮点是发现并实证了“存储-贡献分离”（SCD）现象，然后巧妙地用一个因果归因工具（FoG-A）来指导层选择，把REPA从“凭经验瞎猜”升级成了“看谁真干活”。动机清晰，intuition很有说服力。但话说回来，实验规模偏小（总步数仅500k，两个数据集），跨架构验证虽然做了但深度不够——只给了几个FAD/WER/MOS数字，缺少更系统的分析（如动态、消融等），无法确定增益是否只是某种隐式正则化的结果。虽然FoG-A排名看起来稳定，但在更长/更大规模训练下的行为完全是未知数。此外，从Jacobian链式传播直接跳到一个强烈的“蝴蝶效应”论断有些牵强，没有严谨讨论梯度衰减或中间层Jacobian性质对结论的影响。方法整体仍停留在原型验证阶段。

📌 **核心摘要**

1. 问题定义：在token-conditioned音频流匹配（Flow Matching）模型中，现有的表示对齐（REPA）策略通常凭经验固定中间层（如第8层）进行监督，忽略了“存储语义最丰富的层”与“对生成速度场v_θ贡献最大的层”可能不一致，导致训练效率低下。
2. 方法核心：提出归因引导的REPA（AG-REPA）。首先，利用前向门控消融（FoG-A）作为因果探针，量化DiT每一层对最终预测速度场的因果贡献；然后，自动选出贡献最大的Top-K层，并按贡献大小进行加权对齐，从而将对齐目标从“语义储层”转向“因果驱动层”。
3. 与已有工作的不同：不同于固定层REPA或基于梯度范数的选择，AG-REPA首次将因果干预度量引入音频流匹配的表示对齐，明确区分“表示存储”与“函数贡献”，并据此设计了一种全新的层选择与损失加权策略。
4. 主要实验结果（Config B, 500k步）：在LibriSpeech和AudioSet的统一音频生成任务上，AG-REPA相比于固定中层REPA（Layer 4, 8, 12），语音FAD从1.45降至1.29，音效FAD从2.88降至2.56，语音MOS从3.92升至4.12。跨架构（Voicebox, CosyVoice, F5-TTS）实验也取得一致改进，例如在F5-TTS上FAD从1.45降至1.15。关键消融显示，对齐FoG-A选出的“因果驱动层”相比对齐LASP选出的“表示丰富层”，FAD改善幅度提升约3.4倍，且收敛加速约3.3倍。
5. 实际意义与普适性：为扩散/流匹配模型的训练加速提供了一种轻量、可移植的归因引导范式。其诊断工具集（BiT-C, LASP, FoG-A）不仅服务于AG-REPA，也为理解其他生成架构的内部行为提供了可操作的工具。
6. 主要局限性：实验在有限训练规模（500k步）下进行；FoG-A排名虽短程稳定，但在更长训练或模型显著漂移后是否依然有效未知；方法依赖双教师蒸馏，增加了部署依赖；未在更泛化的音频/视觉任务上进行验证。

🔗 **开源详情**

- 代码：https://github.com/zpforlove/AG-REPA
- 模型权重：未提供。
- 数据集：LibriSpeech 与 AudioSet，论文未直接提供下载链接，但LibriSpeech可通过https://www.openslr.org/12 获取，AudioSet通过https://research.google.com/audioset/ 获取。
- Demo：未提供。
- 复现材料：论文附录提供了部分架构和诊断协议细节，但未提供完整的训练配置文件、预训练检查点或独立复现脚本。
- 论文中引用的相关开源项目：
  - Whisper (large‑v3): https://github.com/openai/whisper
  - BEATs: https://github.com/microsoft/unilm/tree/master/beats
  - RepCodec: 引用自 Huang et al. (2024)
  - Vocos: https://github.com/gemelo‑ai/vocos
  - Qwen3‑0.6B‑Base: https://huggingface.co/Qwen/Qwen3‑0.6B
  - CosyVoice: https://github.com/FunAudioLLM/CosyVoice
  - F5‑TTS: https://github.com/swivid/F5‑TTS
  - Matcha‑TTS: https://github.com/shivammehta25/Matcha‑TTS
  - DINOv2: https://github.com/facebookresearch/dinov2

📄 [OpenReview](https://openreview.net/forum?id=93Yh3Mvg37)

---

### 54. [AVI-Bench: Toward Human-like Audio-Visual Intelligence of Omni-MLLMs](/audio-paper-digest-blog/posts/2026-07-04-avi-bench-toward-human-like-audio-visual)

✅ **7.6/10** | 前25% | #音视频理解 | 创新 1.2/2 | 严谨 1/1.5 | 实验 1.3/1.5 | 影响 1/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Yaoting Wang（复旦大学大数据学院）
- 通讯作者：Henghui Ding（复旦大学大数据学院）
- 作者列表：Yaoting Wang（复旦大学大数据学院）、Ziyi Zhang（华中科技大学）、Wenming Tu（上海交通大学）、Shaoxuan Xu（中国人民大学）、Wenjie Du（南洋理工大学）、Cheng Liang（上海交通大学）、Weijun Wang（清华大学智能产业研究院(AIR)）、Yuanchao Li（爱丁堡大学）、Guangyao Li（清华大学）、Hao Fei（牛津大学）、Yuanchun Li（清华大学智能产业研究院(AIR)）、Henghui Ding（复旦大学大数据学院）、Yunxin Liu（清华大学智能产业研究院(AIR)）

💡 **毒舌点评**

这篇论文野心勃勃地构建了一个认知启发的音视频智能评测基准，四层分类法试图用精巧的数学公式来量化“类人”智能。然而，这套公式的惩罚系数（α=0.5）选择得相当随意，其理论或实证根据约等于零，更像是为了给一个朴素的直觉套上学术外衣。论文声称追求“类人”智能，却将与人类表现的巨大差距简单归因于模型能力不足，而对基准任务本身可能存在的、未对齐人类能力评估的深层问题避而不谈，这无疑是一种自我实现的预言。

📌 **核心摘要**

这篇名为“AVI-Bench”的论文提出了一个系统化的、认知启发的评测基准，旨在评估全模态大语言模型（Omni-MLLMs）的类人音视频智能。其核心方法是将音视频智能分解为感知、理解、推理三个认知阶段，并创新性地引入了一个“原始感知”（PriSe）阶段，专门评估模型对低语义、不熟悉数据的适应能力。与现有仅关注任务多样性的基准不同，AVI-Bench首次系统性地融入了跨模态平衡、阶段依赖和领域泛化能力的评估。实验对28个全模态大模型进行了评估，结果表明，即使最强的Gemini-2.5-Pro，其总体AVI得分（57.2%）也与人类水平（92.6%）差距巨大。一个关键发现是，简单的平均分具有欺骗性：例如，在平均分上相近的GPT-4o和Gemini-1.5-Pro，在四层分类法的领域自适应（L4）层面表现出了巨大鸿沟（GPT-4o仅为0.55，Gemini-1.5-Pro为23.28），深刻揭示了GPT-4o在音频感知任务上的严重缺陷。本工作提供了一个统一的诊断框架，可有效揭示当前全模态大模型的失败模式。其主要局限性在于，四层智能分类法中的惩罚系数设定缺乏充分的理论或实验校准，且对于模型在特定任务（如空间定位）上极低的表现，未能严格区分是视听智能缺陷还是输出格式解析失败所致。

📄 [OpenReview](https://openreview.net/forum?id=zvkcVWBmcF)

---

### 55. [Two-dimensional quantization for geometry-aware audio coding](/audio-paper-digest-blog/posts/2026-07-04-two-dimensional-quantization-for-geometry-aware)

✅ **7.6/10** | 前25% | #语音编码 | 创新 1.2/2 | 严谨 1.1/1.5 | 实验 1.3/1.5 | 影响 1/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者/通讯作者：Tal Shuster (School of Electrical and Computer Engineering, Ben-Gurion University of the Negev, Be'er Sheva, Israel)
- 作者：Eliya Nachmani (School of Electrical and Computer Engineering, Ben-Gurion University of the Negev, Be'er Sheva, Israel)
- 注：原文脚注中通讯作者仅为 Tal Shuster，与已有分析不同。

💡 **毒舌点评**

这篇论文用一个巧妙的几何直觉——将独立标量量化扩展到二维结构化网格——解决了神经音频编解码中效率和利用率的两难问题。实验覆盖度不错，尤其是在低码率下能用一个量化器挑战一堆级联 RVQ 的基线，很有杀伤力。但论文对为什么是二维、为什么菱形网格更好的分析偏经验主义，缺乏从率失真理论或音频特征统计特性角度的深刻解释；此外，仅在与 FSQ 和 WavTokenizer 的对比中严格控制了训练数据和配置变量，与其他 SOTA 模型对比时使用了异构的训练数据和配置，削弱了部分 SOTA 声明的直接可比性。

📌 **核心摘要**

本文针对现有神经音频编解码器中量化方法的局限——RVQ 级联复杂且码本利用率低，FSQ 独立量化忽略特征通道间相关性——提出了一种名为 Q2D2 的二维几何感知量化方案。Q2D2 将编码器输出特征按通道配对，并投影到结构化二维网格（如菱形、六边形、矩形）上，通过最近邻查找进行联合量化，构成隐式码本。该方法在 WavTokenizer 框架上替换量化层，用单一量化器在 1kbps 到 6.9kbps 的带宽下，实现了与或超越多量化器 SOTA 模型的性能。例如，在 LibriTTS test-clean 上，Q2D2 3.3kbps 模型（166 tokens/s）的 UTMOS 达到 4.061，超过了 WavTokenizer 0.9kbps 的 4.049 以及 DAC 9kbps（900 tokens/s）的 3.910。其主要意义在于展示了通过引入低维结构化几何先验，可以大幅提升离散自编码器的效率，降低 token 率，且无需复杂的辅助损失。局限性在于该优势仅在以 WavTokenizer 为骨干的音频编解码器上得到验证，泛化到其他框架（如 EnCodec, DAC）和其他模态的能力未明，且对网格类型和维度的选择仍依赖于大量经验消融。

关键实验结果（LibriTTS test-clean）：

| Model | Bandwidth | Nq | token/s | UTMOS↑ | PESQ↑ | STOI↑ | V/UV F1↑ |
|---|---|---|---|---|---|---|---|
| GT | - | - | - | 4.0562 | - | - | - |
| DAC | 9.0kbps | 9 | 900 | 3.9097 | 3.9082 | 0.9699 | 0.9781 |
| Encodec | 6.0kbps | 8 | 600 | 3.0399 | 2.7202 | 0.9391 | 0.9527 |
| WavTokenizer | 0.9kbps | 1 | 75 | 4.0486 | 2.3730 | 0.9139 | 0.9382 |
| Q2D2 (ours) | 6.9kbps | 1 | 333 | 4.0321 | 3.7006 | 0.9637 | 0.9799 |
| Q2D2 (ours) | 3.3kbps | 1 | 166 | 4.0613 | 3.3635 | 0.9557 | 0.9676 |
| Q2D2 (ours) | 1kbps | 1 | 75 | 4.0526 | 2.5091 | 0.9217 | 0.9440 |

🔗 **开源详情**

- 代码：https://github.com/tashQ/Q2D2
- 模型权重：论文中未提及
- 数据集：论文使用了多个公开数据集，但未提供统一的下载链接。具体名称如下：
  - LibriTTS / LibriSpeech
  - VCTK
  - CommonVoice
  - AudioSet
  - Jamendo
  - MUSDB18
  - Emilia
  - MLS
- Demo：论文中未提及
- 复现材料：论文指出其实现基于 WavTokenizer 开源框架（附录A），通过替换量化层实现，并提供了核心算法的伪代码。
- 论文中引用的开源项目：WavTokenizer, Encodec, DAC, FSQ, ParlerTTS, HuBERT/Data2vec (fairseq), SpeechTokenizer, HiFi-Codec, Vocos, AudioDec 等。

📄 [OpenReview](https://openreview.net/forum?id=Ja9jo9pDvq)

---

### 56. [Abstraction Induces the Brain Alignment of Language and Speech Models](/audio-paper-digest-blog/posts/2026-07-04-abstraction-induces-the-brain-alignment-of)

✅ **7.5/10** | 前25% | #语音编码 | 创新 1.3/2 | 严谨 1.2/1.5 | 实验 1.1/1.5 | 影响 1/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Emily Cheng（Universitat Pompeu Fabra, Barcelona, Spain）
- 通讯作者：Emily Cheng（<emily.shanacheng@upf.edu>）
- 作者列表：
  Emily Cheng（Universitat Pompeu Fabra, Barcelona, Spain）、
  Aditya R. Vaidya（The University of Texas at Austin, USA）、
  Richard J. Antonello（Zuckerman Mind Brain Behavior Institute, Columbia University, USA）

💡 **毒舌点评**

作者试图用一个“中间层表征像脑”的老现象来讲新故事，其核心论点是“意义的抽象构建过程，而非下一词预测任务本身，驱动了模型与大脑的对齐”。因果关系链设计得颇为精巧，随机傅里叶特征的控制实验也聪明地排除了“高维即正义”的简单解释。但文章始终在“可解释”的门口徘徊——它巧妙地将问题从“为什么像脑”转换成了“何时像脑”，并给出了一个描述性的几何指标（内在维度），却没有真正打开黑箱，告诉我们这些多出来的“自由度”到底对应了哪些具体的语义特征。这就像一个侦探宣布找到了罪犯的行动规律，却始终抓不到人。

📌 **核心摘要**

这篇论文试图解释为何大型语言模型（LLM）和语音模型的中间层，而非输出层，最能预测人脑对自然语言的反应。作者挑战了主流的“预测编码”假说，提出真正驱动脑-模型相似性的不是下一词预测本身，而是模型在中间层构建的抽象语义特征及其表征的高内在维度（intrinsic dimension, $I_d$）。

研究通过四种证据链支撑这一新假说：(1) 在OPT、Pythia、WavLM、Whisper等多个模型上的横向分析表明，表征的 $I_d$ 峰值层与fMRI/ECoG 编码性能最优层高度一致（跨模型全局 Spearman ρ 在 fMRI 上为 0.72，ECoG 上为 0.43），且显著优于下一词预测误差（surprisal）的解释力；(2) 在 Pythia-6.9b 的预训练动态追踪中，层间的 $I_d$ 和脑预测性能表现出同生共长的趋势，且两者峰值层在训练后期趋于重合；(3) 通过对 WavLM-base-plus 进行脑响应驱动的因果微调（brain-tuning），不仅直接提升了其编码性能，还同时增强了表征的语义解码性和 $I_d$；(4) 构造具有同等高 $I_d$ 但无语言结构的随机傅里叶特征，发现其脑预测性能远低于真实模型，表明高 $I_d$ 是模型学习到丰富语言结构后的“症状”，而非高预测性的“病因”。综合来看，论文指出，模型与大脑的对齐源于其内部负责意义抽象的处理阶段，而非最终用于预测的输出端。

🔗 **开源详情**

- 代码：https://github.com/chengemily1/brain-id-abstract
- 模型权重：论文本身未发布自有权重，全部使用公开预训练模型：
  - WavLM: https://huggingface.co/microsoft/wavlm-large (cc) 及 WavLM-base-plus
  - Whisper: https://huggingface.co/openai/whisper-large (apache-2.0)
  - OPT: https://huggingface.co/facebook/opt-13b 等 (OPT-175B license)
  - Pythia: https://huggingface.co/EleutherAI/pythia-6.9b-deduped 等 (apache-2.0)
- 数据集：
  - fMRI 语言刺激数据：LeBel et al. (2023), https://openneuro.org/datasets/ds003020/versions/2.0.0 (CC0)
  - ECoG “Podcast” 数据集：Zada et al. (2025), https://openneuro.org/datasets/ds005574 (CC0)
  - 预训练文本数据样本：The Pile, https://huggingface.co/datasets/NeelNanda/pile-10k (bigscience-bloom-rail-1.0)
  - 语音数据：LibriSpeech, https://huggingface.co/datasets/openslr/librispeech_asr (CC BY 4.0)
  - 语义探测任务：SentEval, https://github.com/facebookresearch/SentEval/tree/main/data/probing (BSD)
- 复现材料：代码仓库中提供了编码模型训练、$I_d$ 估计、探测、微调等脚本。
- 论文中引用的其他开源项目：
  - DadaPy (用于 $I_d$ 估计): https://github.com/sissa-data-science/DADApy
  - Patchscopes (用于 TunedLens 实现): https://pair-code.github.io/interpretability/patchscopes/
  - Surprisal (层内惊异度估计): https://github.com/aalok-sathe/surprisal
  - encoding-model-scaling-laws (编码模型框架): https://github.com/HuthLab/encoding-model-scaling-laws
  - SentEval (语言探测任务): https://github.com/facebookresearch/SentEval

📄 [OpenReview](https://openreview.net/forum?id=n5Ds4qbtjM)

---

### 57. [Self-Guidance: Enhancing Neural Codecs via Decoder Manifold Alignment](/audio-paper-digest-blog/posts/2026-07-04-self-guidance-enhancing-neural-codecs-via-decoder)

✅ **7.5/10** | 前25% | #语音编码 | 创新 1.2/2 | 严谨 1.1/1.5 | 实验 1.2/1.5 | 影响 1.2/1.5 | 开源 0.2/1.5

👥 **作者与机构**

- 第一作者：Xiang Li（清华大学深圳国际研究生院，鹏城实验室）
- 通讯作者：Zhiyong Wu（清华大学深圳国际研究生院，邮箱 zywu@sz.tsinghua.edu.cn）
- 作者列表：Xiang Li（清华大学深圳国际研究生院，鹏城实验室）、Yixuan Zhou（清华大学深圳国际研究生院）、Jingran Xie（清华大学深圳国际研究生院，鹏城实验室）、Zhiyong Wu（清华大学深圳国际研究生院）、Hui Wang（鹏城实验室）

💡 **毒舌点评**

这篇论文的聪明之处在于把难题丢给解码器，用几行MSE loss就换来了可观的保真度提升和4倍码本压缩，是典型的"视角转换"式创新。方法即插即用，零推理开销，工业落地极其友好。然而，技术核心实在单薄——就是拿自己没量化的特征去教量化后的特征，本质上是个巧妙的特征蒸馏，理论深度匮乏。实验虽覆盖面广，但全在LibriSpeech这样干净的录音室数据上打转，一到真实场景能不能打，还是未知数。下游TTS只拿了个0.5B小模型试水，说服力有限。总的感觉是，工程价值拉满，学术贡献差口气。

📌 **核心摘要**

本文针对VQ-VAE驱动的神经语音编解码器中，量化误差导致重建保真度下降的核心瓶颈，提出了一种名为self-guidance (SG)的训练机制。其核心思想并非改进量化器本身，而是增强解码器对量化误差的鲁棒性。具体做法是在训练时，额外将编码器输出的预量化连续嵌入$z_e$送入解码器，得到一个高保真的"教师"特征路径。然后，通过一个简单的stop-gradient MSE损失，强制对齐量化路径的"学生"特征$h_q$与连续路径的"教师"特征$h_e$，使得解码器学会从有损的离散token中产生与无损连续信号相似的输出，从而在输出端抑制量化伪影。该方法无需修改推理流程，仅在训练阶段增加一个无反向传播的前向通路，额外计算代价<0.5%。在XCodec2上应用SG后，在LibriSpeech test-clean上全面超越原模型：使用65k码本时PESQ-WB从2.28升至2.39，且仅需16k码本即可匹配原始65k码本的性能（实现4×码本压缩）。进一步的下游自回归TTS实验显示，码本缩小显著降低了语言建模难度，大幅提升了合成自然度。方法在多种量化器（FSQ、SimVQ、Residual FSQ）和解码器架构（Transformer、CNN/RNN）上均获得一致增益，表明其可以作为通用的解码器增强策略。主要局限是尚未完全消除所有量化伪影，且跨领域泛化（如图像VQ-VAE）仍需验证。作者声称达到了SOTA，但实际PESQ提升绝对值有限。

🔗 **开源详情**

- 代码：论文主要基于XCodec2进行实现，其开源代码为 https://github.com/zhenye234/X-Codec-2.0 ；对比实验中的BigCodec使用 https://github.com/Aria-K-Alethia/BigCodec 。论文未单独提供包含自身修改代码的独立项目仓库。
- 模型权重：论文中未提及训练后模型权重的下载链接。
- 数据集：训练与评估主要使用LibriSpeech（http://www.openslr.org/12）的train-clean-100和test-clean子集，下游TTS实验使用LibriTTS-R。均为公开数据集。
- Demo：论文提供了演示网站 https://sgvqvae.github.io/sgvqvae-demo 。
- 复现材料：论文附录A.1给出了完整的模型配置、超参数及权重的敏感性分析。未单独提供训练检查点，复现需基于XCodec2代码和论文配置进行。
- 论文中引用的开源项目：
  - XCodec2: https://github.com/zhenye234/X-Codec-2.0
  - BigCodec: https://github.com/Aria-K-Alethia/BigCodec
  - HuBERT (用于WER计算): https://huggingface.co/facebook/hubert-large-ls960-ft
  - WavLM (speaker verification): https://github.com/microsoft/UniSpeech/tree/main/downstreams/speaker_verification
  - PESQ Python 实现: https://github.com/ludlows/PESQ
  - UTMOS: https://github.com/tarepan/SpeechMOS
  - Vocos (iSTFT 头): 论文中引用了Siuzdak, 2024的Vocos。

📄 [OpenReview](https://openreview.net/forum?id=druaDr7zNI)

---

### 58. [OmniVideo-R1: Reinforcing Audio-visual Reasoning with Query Intention and Modality Attention](/audio-paper-digest-blog/posts/2026-07-04-omnivideo-r1-reinforcing-audio-visual-reasoning)

✅ **7.5/10** | 前25% | #音视频问答 | 创新 1.5/2 | 严谨 1.3/1.5 | 实验 1.3/1.5 | 影响 1/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Zhangquan Chen（清华大学，THU；实习于腾讯HY）
- 通讯作者：Ruqi Huang（清华大学深圳国际研究生院，sz.tsinghua.edu.cn）、Jiale Tao（腾讯HY，jialetao.std@gmail.com）
- 作者列表：Zhangquan Chen（清华大学）、Jiale Tao（腾讯HY）、Ruihuang Li（腾讯HY）、Yihao Hu（湖南大学，HNU）、Ruitao Chen（腾讯HY）、Zhantao Yang（腾讯HY）、Xinlei Yu（新加坡国立大学，NUS）、Haodong Jing（西安交通大学，XJTU）、Manyuan Zhang（香港中文大学，CUHK）、Shuai Shao（腾讯HY）、Biao Wang（腾讯HY）、Qinglin Lu（腾讯HY）、Ruqi Huang（清华大学深圳国际研究生院）

💡 **毒舌点评**

这篇论文精准地抓住了“多模态模型一加音频就变傻”的痛点，提出的两阶段RL框架，特别是用自监督时间-字幕对齐来驱动查询密集型局部定位，设计思路相当巧妙，拿掉了过程级标注这个昂贵的门槛。然而，死穴和亮点一样突出：整个奖励函数几乎把身家性命都押在了外部judge模型的质量上，论文对judge偏差传播和reward hacking的风险几乎没有展开讨论，这让人对训练信号的可靠性打上一个大大的问号；更致命的是，所有代码、模型权重和训练数据均未开源，号称“第一个RL框架”却把复现门槛拉满，使得那些漂亮的SOTA数字目前只能被视为“纸上SOTA”，在第三方验证之前说服力大打折扣。

📌 **核心摘要**

1.  要解决的问题：当前全能模型在处理音视频任务时存在模态偏差，加入音频后反而损害视觉推理能力，且传统的SFT或vanilla RL等后训练方法无法显式训练跨模态协同推理行为。
2.  方法核心：提出OmniVideo-R1，一个两阶段强化学习后训练框架。第一阶段通过自监督的查询密集型局部定位（Query-Intensive Grounding, QI），使模型在回答前先生成关键视频片段的`<时间戳-字幕>`对，以显式定位与问题相关的音视频证据；第二阶段通过对比式模态注意力融合（Modality-Attentive Fusion, MA），惩罚“只用单模态信息就能答对”的捷径行为，强制模型利用融合信息获得更高置信度。
3.  与已有方法相比的新意：不同于仅对最终答案进行RL的现有工作，OmniVideo-R1是首个将“think with omnimodal cues”行为结构化，并通过跨模态对比奖励驱动深度融合的后训练框架，无需任何过程级标注。
4.  主要实验结果：在基于Qwen3-Omni-30B-A3B训练后，模型在Daily-Omni上达82.8（超越Gemini-2.5-Pro和Video-SALMONN 2+-72B），OmniVideoBench上达44.8（较基座提升7.8%），同时在视觉-only基准上（如Video-MME 73.6, MLVU 74.1, LVBench 51.9）保持稳健甚至提升。
5.  实际意义：为音视频大模型的后训练提供了一套无需昂贵过程级标注的推理行为注入范式，其数据清洗pipeline和分阶段RL设计对工业级应用有直接参考价值。
6.  主要局限性：极度依赖外部judge模型进行奖励计算，训练和复现成本极高；所有代码、模型及数据均未开源，可复现性差；MA阶段数据量偏小，在长音频/纯音频任务上的泛化性未被验证。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及模型权重链接或发布方式。
- 数据集：论文使用公开数据集LLaVA-Video和Video-Vista构建训练集，但未提供处理后的数据集或下载链接。评估所用基准均为公开数据，文中亦未提供链接：OmniVideoBench, Daily-Omni, WorldSense, IntentBench, VideoHolmes, Video-MME, MLVU, LVBench。
- Demo：论文中未提及。
- 复现材料：论文在第4节和附录中给出了训练配置（如学习率、batch size、奖励权重等）与部分judge prompt，但未提供训练代码、检查点或配置文件。
- 论文引用的开源项目：Qwen3-Omni, Qwen2.5-Omni, Qwen3-VL, Qwen2.5-VL, MiniCPM-o, Video-LLaMA系列, InternVideo系列, Video-SALMONN系列, DeepSeek-R1, VITA-1.5, Baichuan-Omni, Ola, HumanOmniV2等，但文中均未给出直接的项目链接。

📄 [OpenReview](https://openreview.net/forum?id=he06cvibXv)

---

### 59. [Listening Through the Noise: Cauchy-Driven Diffusion Bridges for Robust Gastrointestinal Auscultation and Clinical Benchmarking](/audio-paper-digest-blog/posts/2026-07-04-listening-through-the-noise-cauchy-driven)

✅ **7.4/10** | 前50% | #音频修复 | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 影响 1.2/1.5 | 开源 0.2/1.5

👥 **作者与机构**

- 第一作者：Dian Ding（上海交通大学计算机科学与工程系）
- 通讯作者：Yu Lu（上海交通大学计算机科学与工程系，yulu01@sjtu.edu.cn）
- 作者列表：Dian Ding（上海交通大学）、Liren Dong（陕西师范大学人工智能与计算机科学学院）、Yu Lu（上海交通大学）、Juntao Zhou（上海交通大学）、Ran Wang（上海交通大学）、Peng Li（陕西师范大学）、Zhenyi Jia（上海交通大学医学院附属第六人民医院普外科）、Guangtao Xue（上海交通大学）

💡 **毒舌点评**

本文在扩散桥框架内引入 Cauchy 噪声假设，对临床肠鸣音去噪具有扎实的理论动机——但“语音干扰呈重尾分布”这一核心动机仅通过 Fig.2 的目视对比来论证，并未给出正式的统计拟合优度检验，有“看图说话”之嫌。CLINBS 数据集填补了病理肠鸣音空白值得肯定，然而论文未提供任何代码、模型权重或数据集获取方式，严重削弱了可复现性与实际影响力。此外，所有评估均在人工加性混合的语音干扰下进行，即使在附录 C.4 补充了真实病房噪声实验，该实验仍采用加性混合模型（将无肠鸣音的背景录音与纯净肠鸣音线性混合），未涉及真实含噪临床录音的直接去噪，临床适用性仍有待证明。

📌 **核心摘要**

1. 要解决的问题：腹部听诊中，肠鸣音（100–1000 Hz）与临床环境中的语音干扰在频谱上高度重叠。传统高斯扩散模型难以处理语音干扰的重尾、脉冲特性，导致去噪性能受限。同时，缺乏大规模、多病理类型、专家标注的临床肠鸣音数据集。






[图像补充] 图2展示了论文的核心动机：通过对VCTK和AISHELL语音数据集的各频段能量分布进行统计，发现语音干扰呈现明显的重尾特性（实线），Cauchy分布（虚线）比高斯分布（点划线）能更准确地拟合这种尾部行为，这为采用Cauchy噪声建模干扰提供了经验依据。

2. 方法核心：提出 Cauchy 驱动的扩散桥（Cauchy-driven Diffusion Bridge）框架。将扩散桥模型中的高斯噪声替换为 Cauchy 噪声，推导出闭式条件核与 score 函数用于训练与采样。同时提出 Cauchy 一致性损失以鼓励桥残差维持重尾统计特性，并通过高斯尺度混合重参数化实现高效的 Cauchy-DBIM 采样。此外，构建了包含罕见病理瞬态（气液咕噜声、金属性瞬态）的大规模临床数据集 CLINBS。
3. 与已有方法的新区别：相较于基于高斯的扩散桥（DDBM/DBIM），本文首次将 Cauchy 稳定分布引入桥式生成建模。核心在于数学上证明了 Cauchy 桥核的存在性（命题4.1），推导出其闭式对数密度与 score 表达式（命题4.2），并引入 Cauchy 一致性损失（$L_{cauchy}$）。采样阶段利用 Cauchy 分布是高斯尺度混合（GSM）的性质，将 Cauchy 噪声转化为以随机变量 u 为条件的 Gaussian 噪声，从而能复用高斯 DBIM 的闭式反向更新，避免了直接求解逆 SDE 的困难。
4. 主要实验结果：在 VCTK 和 AISHELL 语音干扰下，本方法在全指标上均达 SOTA。MAE 降至 8.28，PSNR 24.39，SSIM 0.72，LSD 14.03，FID 36.99。相比最强基线 DBIM，MAE 降低约 49.8%，PSNR 提升 6.16 dB。下游异常肠鸣音识别准确率最高达 88.01%（ResNet）。消融实验证实 Cauchy 噪声先验、Gram 纹理损失、ℓ1 重构损失及高斯尺度混合采样均带来稳健增益。仅需 20 步采样即可达到最佳 FID 和 IS。跨数据集（HLS-CMDS 心/肺音）和跨噪声条件（语言、信噪比、额外高斯噪声、真实病房噪声）实验显示良好的泛化性和鲁棒性。主要对比结果如下：

| 模型 | MAE ↓ | PSNR ↑ | PCC ↑ | SSIM ↑ | LPIPS ↓ | LSD ↓ | FID ↓ |
|------|-------|--------|-------|--------|---------|-------|-------|
| Demucs | 19.17 | 18.84 | 0.76 | 0.51 | 0.35 | 29.07 | 69.59 |
| Mel-Roformer | 24.95 | 16.89 | 0.66 | 0.39 | 0.45 | 36.11 | 126.09 |
| SCNet | 38.52 | 14.75 | 0.61 | 0.28 | 0.49 | 46.13 | 103.36 |
| BDBM | 34.38 | 13.32 | 0.66 | 0.24 | 0.49 | 48.92 | 69.23 |
| DDBM | 19.47 | 17.17 | 0.68 | 0.40 | 0.35 | 31.98 | 87.33 |
| DBIM | 16.49 | 18.23 | 0.77 | 0.57 | 0.29 | 25.21 | 42.71 |
| Ours | 8.28 | 24.39 | 0.93 | 0.72 | 0.16 | 14.03 | 36.99 |

5. 实际意义：为非侵入性胃肠运动评估提供了一种对脉冲干扰鲁棒的去噪方案，配套的 CLINBS 数据集可促进临床 AI 模型的开发。若产品化，可望降低对侵入性检查（如影像学、测压法）的依赖。临床听觉评估（专家评分从 1.2 升至 4.2）初步验证了其恢复音频的临床可用性。
6. 主要局限性：所有实验均在人工加性混合模型 $y = x + n$ 下进行，即使真实病房噪声实验也不例外，未在真实含噪临床录音上验证端到端去噪效果。论文未明确承认任何局限性。代码、模型权重、数据集均未公开。方法计算量大（553M参数，22T FLOPs），虽在RTX 4090上达到9.3倍实时，但离边缘部署尚有距离。

🔗 **开源详情**

- 代码：论文中未提及代码链接，未提供 GitHub 仓库。
- 模型权重：论文中未提及权重链接或预训练模型文件。
- 数据集：论文提出 CLINBS 临床肠鸣音数据集，共计 1531 例、超过 25 小时录音，含有专家标注的气-液咕噜声和金属性瞬态等异常类型；论文未提供数据集公开下载链接，且声明“访问需经伦理和法律审查”。
- Demo：论文中未提及在线演示链接。
- 复现材料：论文在附录 A 和正文第 5.1.4 节给出了较完整的训练细节（UNet 架构、基通道数、学习率、批量大小、EMA 衰减、梅尔谱参数、扩散步数、DBIM 调度等），并提供了 Cauchy-DBIM 采样伪代码（Alg. 1），但未提供训练检查点或预训练模型文件。损失权重和 Cauchy 尺度等超参数未说明。
- 论文中引用的开源项目：
  - Demucs (Rouard et al., 2023)：论文中未提供链接。
  - Mel-RoFormer (Wang et al., 2024)：论文中未提供链接。
  - SCNet (Tong et al., 2024)：论文中未提供链接。
  - BDBM (Kieu et al., 2025)：论文中未提供链接。
  - DDBM (Zhou et al., 2024)：论文中未提供链接。
  - DBIM (Zheng et al., 2025)：论文中未提供链接。
  - AISHELL (Fu et al., 2021)：论文中未提供链接。
  - VCTK (Yamagishi et al., 2019)：论文中未提供链接。
  - HLS-CMDS (Torabi et al., 2025)：论文中未提供链接。

📄 [OpenReview](https://openreview.net/forum?id=EYAfw6czcC)

---

### 60. [MoshiRAG: Asynchronous Knowledge Retrieval for Full-Duplex Speech Language Models](/audio-paper-digest-blog/posts/2026-07-04-moshirag-asynchronous-knowledge-retrieval-for)

✅ **7.4/10** | 前50% | - | 创新 1.2/2 | 严谨 1.1/1.5 | 实验 1/1.5 | 影响 1.1/1.5 | 开源 0.8/1.5

👥 **作者与机构**

- 第一作者：Chung-Ming Chien（Toyota Technological Institute at Chicago, Kyutai）
- 通讯作者：Chung-Ming Chien（ttic.edu）, Alexandre Défossez（kyutai.org）
- 作者列表：Chung-Ming Chien（Toyota Technological Institute at Chicago, Kyutai）、Manu Orsini（Kyutai）、Eugene Kharitonov（Kyutai, Gradium）、Neil Zeghidour（Kyutai, Gradium）、Karen Livescu（Toyota Technological Institute at Chicago）、Alexandre Défossez（Kyutai, Gradium）
- 致谢中提及Hippolyte Pilchen贡献了ARC-Encoder集成，Gabriel de Marmiesse支持演示构建。

💡 **毒舌点评**

这篇论文在全双工语音模型上率先集成了异步RAG，利用“废话-干货”的天然时间差完成检索，想法巧妙且工程实现扎实。但方法的有效性极其依赖近乎完美的时间对齐与合成数据构建的结构先验（Lead-Body-Tail），真实场景的泛化性缺乏证据。评估体系几乎完全依赖Gemma 3 27B作为裁判，而训练数据也由同型号LLM生成，自我偏好的评估循环令人担忧。实验设计仅覆盖了Q&A和数学推理的单轮场景，与其宣称的“多轮对话”优势存在脱节。整体而言，这是一个有趣的起点，但距离一篇顶会论文所需的完备性仍有差距。

📌 **核心摘要**

1. 问题定义：全双工语音语言模型（如 Moshi）虽然具备实时交互能力，但在事实准确性上远落后于文本模型。提升事实性通常需要更大模型，但会牺牲实时性。本工作旨在不牺牲全双工交互特性的前提下，大幅提升语音模型的事实正确性。
2. 方法核心：提出异步RAG框架，由三个解耦模块组成——前端全双工模型（Moshi）、流式ASR、检索后端。模型在对话中动态预测 `<ret>` token 触发检索，利用“关键词延迟”（E2EKD，用户提问结束到模型说出关键信息的时间窗）并行完成外部知识获取，再将检索文本注入指导后续生成。整个过程目标在2秒内完成，短于多数语音模型的E2EKD（>3秒）。
3. 核心创新：首次在全双工语音对话中实现按需异步RAG，其关键在于两点——（1）通过训练数据构造显式“Lead-Body-Tail”对话结构，配合TTS对齐精确设置 `<ret>` 触发和检索延迟的时序，让模型学会在“说废话”期间完成检索；（2）前后端完全解耦的文本接口设计，支持热插拔多种检索后端（本地LLM、云端LLM、搜索引擎），无需重训前端模型。
4. 主要结果：在QA基准上，MoshiRAG显著超越原始Moshi（TriviaQA: 22.8%→69.6%；HaluEval: 10.5%→36.3%），并超过多数同等规模语音模型（但弱于GPT-4o Audio和Qwen3-Omni 30B）。切换到GPT-4.1后端后TriviaQA达78.2%，HaluEval达51.3%。交互性测试显示其保持了低延迟优势（E2EKD仅3.1秒），并在用户打断场景下显著优于原始Moshi。在数学推理OOD任务上，MoshiRAG从2.1%提升至33.9%。
5. 实际意义：首次验证了全双工语音助手可以在保持自然对话节奏的同时，通过模块化后端增强实现事实性的飞跃，为构建更可靠的语言交互AI提供了可扩展路径。
6. 关键局限：所有评估使用LLM-as-Judge，无人评估；训练数据和评估场景均为合成单轮Q&A，未在真实多轮对话中验证；检索延迟超过1.5秒性能急剧下降；知识整合过程存在3-8%信息损失；<ret>触发完全依赖训练数据驱动的隐式学习。

🔗 **开源详情**

- 推理代码：已开源，https://github.com/kyutai-labs/moshi-rag
- 模型权重：未公开。基础Moshi模型开源，但MoshiRAG的RAG微调权重未提供。论文建议复用原始Moshi权重作为起点。
- 数据集：HaluEval音频子集已公开，https://huggingface.co/datasets/kyutai/HaluEvalAudio 1000。训练所用的完整合成对话数据集（~1.9M实例）未公开，数据生成脚本也未提供。
- Demo：https://kyutai.org/blog/2026-04-30-moshi-rag （含演示视频）
- 依赖项：
  - Moshi + Mimi codec：https://github.com/kyutai-labs/moshi
  - ARC-Encoder（Pilchen et al., 2025）：未提供具体开源链接
  - 流式ASR（Zeghidour et al., 2025）：未提供链接
  - Tavily API：https://www.tavily.com
  - Gemma 3 27B：https://ai.google.dev/gemma
  - Parakeet-tdt-0.6b-v2（用于关键字对齐）：https://huggingface.co/nvidia/parakeet-tdt-0.6b-v2
  - 评估用数据集：OpenAudioBench、WebQuestions、TriviaQA、CommonVoice（https://commonvoice.mozilla.org）、Full-Duplex-Bench（v1 和 v1.5）

📄 [OpenReview](https://openreview.net/forum?id=4aI2vOyyHH)

---

### 61. [Omni-Perception Policy Optimization for Multimodal Emotion Reasoning](/audio-paper-digest-blog/posts/2026-07-04-omni-perception-policy-optimization-for)

✅ **7.4/10** | 前50% | #音视频理解 | 创新 1.5/2 | 严谨 1.3/1.5 | 实验 1.4/1.5 | 影响 1.2/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者: Zhiyuan Han (University of Science and Technology of China, SenseTime Research, Institute of Artificial Intelligence, Hefei Comprehensive National Science Center)
- 通讯作者: Xun Yang (University of Science and Technology of China), Beier Zhu (University of Science and Technology of China)
- 作者列表: Zhiyuan Han (USTC, SenseTime, Hefei Institute), Beier Zhu (USTC), Wenwen Tong (SenseTime), Pengyang Shao (National University of Singapore), Peipei Song (USTC), Xinyi Wang (USTC), Jiangnan Chen (SenseTime), Lewei Lu (SenseTime), Xun Yang (USTC)

💡 **毒舌点评**

论文精准地抓住了现有情感多模态大模型“思考链中缺乏可靠感知”的痛点，将感知可靠性分解为利用率和忠实度两个可量化原则，并设计了细粒度线索覆盖奖励与模态特定token的KL惩罚，构思巧妙。附录中的信息论分析试图为协同效应提供理论支撑，虽然略显牵强，但不失为一次有趣的尝试。然而，全文最致命的硬伤在于零开源的姿态：声称构建了诊断基准MEP-Bench并刷新了多项SOTA，却未提供任何代码、模型权重或数据集，这使得“可复现”和“促进社区发展”的承诺显得苍白无力。

📌 **核心摘要**

论文针对当前多模态情感推理模型（Omni-MLLMs）在推理链中存在的两大感知缺陷——对多模态线索利用不足（Underutilization）和跨模态幻觉导致的推理不忠实（Unfaithfulness）——提出了一个名为OPPO（Omni-Perception Policy Optimization）的强化学习框架。该框架包含两个核心创新：第一，全感知奖励（Omni-Perception Reward），它将真实推理过程分解为细粒度的视觉、声学和情感线索，通过语义覆盖度得分来奖励模型在思考链中显式地恢复这些证据，从而提升线索利用率；第二，全感知损失（Omni-Perception Loss），在单模态掩码输入下，利用证据路由矩阵精准定位描述特定模态证据的token，并对这些token施加KL惩罚，强制其输出分布依赖于源模态，从而抑制跨模态幻觉，仅针对模态特定token的设计使其优于PAPO等全局约束方法。

此外，作者构建了诊断基准MEP-Bench，定量评估模型在多模态感知上的利用率（线索召回率）和忠实度（掩码探测准确率）。实验表明，OPPO在MER-UniBench（9个数据集，平均81.05%）和MME-Emotion（平均CoT分数49.5%）上取得了SOTA性能，并在MEP-Bench上将线索召回率从基线的58.00%提升至70.44%，视频掩码准确率从59.20%提升至76.40%。该方法为提高多模态情感推理的可靠性和可解释性提供了新的优化路径，但其不开源的现状极大地限制了其直接影响力和可复现性。

🔗 **开源详情**

- 代码：论文中未提供代码仓库链接。
- 模型权重：论文中未提供模型权重下载链接。
- 数据集：
  - MEP-Bench：本文提出的诊断基准，论文中未提供下载链接。
  - MER-Caption+：用于SFT和RL训练的数据集，论文中未直接提供下载链接，但引用其来源论文 (Lian et al., 2025a)。
  - 其他评估基准（MER-UniBench、MME-Emotion等）均引用自原论文，未提供直接下载。
- Demo：论文中未提供演示链接。
- 复现材料：论文在附录中提供了详细的超参数、训练步骤和提示词（如证据提取提示词），是复现所需的核心信息，但无代码和数据。
- 论文中引用的开源项目：Qwen2.5-Omni, Qwen-Audio, SALMONN, VideoChat2, LLaMA-VID, Chat-UniVi, mPLUG-Owl, PandaGPT, R1-Omni, Emotion-LLaMA, AffectGPT, DeepSeek-R1, Qwen3-Embedding等。

📄 [OpenReview](https://openreview.net/forum?id=4dwe2wlxx5)

---

### 62. [video-SALMONN S: Memory-Enhanced Streaming Audio-Visual LLM](/audio-paper-digest-blog/posts/2026-07-04-video-salmonn-s-memory-enhanced-streaming-audio)

✅ **7.3/10** | 前50% | #音视频问答 | 创新 1.5/2 | 严谨 1/1.5 | 实验 1/1.5 | 影响 1/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Guangzhi Sun（清华大学、剑桥大学）
- 通讯作者：Chao Zhang（清华大学，cz277@tsinghau.edu）
- 作者列表：Guangzhi Sun（清华大学、剑桥大学）、Yixuan Li（剑桥大学）、Xiaodong Wu（剑桥大学）、Yudong Yang（剑桥大学）、Wei Li（字节跳动）、Zejun Ma（字节跳动）、Chao Zhang（清华大学）

💡 **毒舌点评**

这篇工作将Test-Time Training首次引入流式视频理解做长期记忆增强，确实聪明且有效，TTT_MEM在极低内存预算下碾压了传统token合并方法。但作为ICML投稿，实验规模偏小、训练和推理细节多处模糊，作者对ELViM基准的创建过程讳莫如深（人工审核标准、过滤比例等一概不提），这让整个benchmark的可信度打了折扣。

📌 **核心摘要**

1. 该论文旨在解决流式长视频理解中，由于固定内存预算导致的累积信息丢失问题，特别是模型在长时间跨度上难以保持对早期内容的记忆。
2. 核心方法是首次在流式视频LLM中引入Test-Time Training作为长期记忆机制，提出TTT_MEM层，通过快速权重更新将短期多模态表征持续转化为内嵌于模型参数的长期记忆。
3. 与现有token合并或丢弃的流式方法不同，TTT_MEM新增了长跨度预测目标以强化长距依赖建模，辅以两阶段训练策略和模态感知的记忆读取机制，在不增加显存的同时保留了更完整的历史信息。
4. 主要实验结果显示，在16k内存token设定下，video-SALMONN S在Video-MME长视频集上达71.3%（超过非流式基线的69.6%），在LVBench上达55.4%，在VideoEvalPro上达55.8%；在自建ELViM基准上，以46.7%的绝对准确率相比非流式基线提升14.2%，相比PEMF流式基线提升8.5%。消融实验中TTT_MEM在2k内存token时即达到与普通merging在16k token时相当的精度水平。
5. 实际意义在于为需要长期连续运行的视频AI代理（如智能监控、教学辅助、远程协作）提供了更有效的记忆机制，同时不突破显存限制，为端侧部署长期视频理解提供了一种新范式。
6. 主要局限性包括：ELViM基准仅包含约1000个目标视频，规模偏小且类别集中在生活技能类，泛化性存疑；训练和推理配置细节缺失较多，复现门槛较高；TTT_MEM目前仅处理视觉token，音频信息完全绕开，尚未充分利用多模态互补性。

🔗 **开源详情**

- 代码：https://github.com/bytedance/SALMONN/tree/video-salmonn-S-MEM
- 模型权重：论文中未提及
- 数据集：论文提出的 ELViM 基准的问题与代码一同提供在代码仓库中；训练与评估所用其他数据集（如 LibriSpeech、CommonVoice、WavCaps、AudioCaps、FineVideo、CinePile、LLaVA-Video-178k、Video-MME、LVBench、VideoEvalPro、StreamingBench）均为已有公开数据集，论文中未提供新的下载链接。
- Demo：论文中未提及
- 复现材料：详细的训练配置（两阶段训练、学习率、GPU 数、批次大小、帧率设置等）在论文第 5 节和第 6 节中给出；补充材料中提供了代码与 ELViM 问题。
- 论文中引用的开源项目：
  - Qwen3-VL：https://github.com/QwenLM/Qwen3-VL（模型基座）
  - Whisper-Large-v3：https://github.com/openai/whisper（音频编码器）
  - TTT（Test-Time Training）：https://github.com/test-time-training/ttt（TTT-MLP 参考实现）
  - Mamba-2：https://github.com/state-spaces/mamba（对比实验）
  - ReTaKe / AdaReTaKe：https://github.com/ReTaKe（KV-cache 压缩基线）
  - MovieChat 及相关相似度合并、Flash-VStream、Dispider、StreamForest 等论文中的方法均引用原工作，但未提供新的项目级链接。

📄 [OpenReview](https://openreview.net/forum?id=tJP3FxzSPs)

---

### 63. [Group Cognition Learning: Making Everything Better Through Controlled Two-Stage Agents Collaboration](/audio-paper-digest-blog/posts/2026-07-04-group-cognition-learning-making-everything-better)

✅ **7.3/10** | 前50% | #音视频理解 | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 影响 1/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Chunlei Meng（复旦大学智能机器人研究院与先进制造技术学院）
- 通讯作者：Chun Ouyang（复旦大学智能机器人研究院与先进制造技术学院）
- 作者列表：Chunlei Meng（复旦大学）、Pengbin Feng（南加州大学）、Rong Fu（澳门大学）、Hoi Leong Lee（玻璃市马来西亚大学）、Xiaojing Du（阿德莱德大学）、Zhaolu Kang（北京大学）、Zeyu Zhang（澳大利亚国立大学）、Weilin Zhou（新疆大学）、Chun Ouyang（复旦大学）、Zhongxue Gan（复旦大学）

💡 **毒舌点评**

本文用“治理化协作”这一概念为多模态融合引入了清晰的控制流，选择性交互和共识形成两个阶段的设计相当完整，消融实验也很扎实。但整篇像是多个精巧loss拼凑成的代理系统，四类代理各司其职却也让方法过于臃肿，超参数敏感性实验只覆盖了少数关键项，且没有公开代码，复现难度较高。

📌 **核心摘要**

- 要解决的问题：多模态学习中常见的模态支配（梯度集中于最强模态）和伪模态耦合（过拟合偶然共现），导致模型脆弱且可解释性差。
- 方法核心：提出“群体认知学习 (GCL)”，用两阶段治理化协议取代隐式融合。阶段一（选择性交互）由路由代理提议有向交互路径，审计代理基于边际预测增益动态控制信息传递；阶段二（共识形成）由公共因子代理提取共享语义，聚合代理依据贡献感知的权重形成最终预测。
- 与已有方法的区别：不同于简单加权融合、事后解耦或基于梯度的优化干预，GCL 首次将交互过程显式地建模为可审计、可门控的代理系统协议，在样本级别根据预测增益直接决定是否进行跨模态通信，并显式惩罚冗余耦合。
- 主要实验结果：在 CMU-MOSI (MAE 0.685, Acc-7 49.06), CMU-MOSEI (MAE 0.520, Acc-7 55.36) 和 MIntRec (Acc 72.74) 上达到 SOTA，消融表明去掉选择性交互或共识模块都导致性能显著下降，在噪声和置换压力测试及跨任务/跨模态组合泛化实验中鲁棒性明显优于基线。
- 实际意义：为多模态情感分析和意图识别提供了一种可解释、抗噪声的融合范式，有望迁移到其他需要审计交叉模态贡献的领域（如健康监测、法庭证据合成）。
- 主要局限性：代理结构复杂、超参数较多，训练需要额外的教师增益信号，且论文未公开代码，工业落地前需更多验证。同时，所有实验基于预提取特征，缺少端到端训练验证。

🔗 **开源详情**

- 代码：论文中未提及代码链接  
- 模型权重：论文中未提及  
- 数据集：论文使用了 CMU-MOSI、CMU-MOSEI、MIntRec、CREMA-D、UCF101、AVE、Food101 等公开数据集，但未提供直接下载链接  
- Demo：论文中未提及  
- 复现材料：论文中给出了部分实验环境与超参数（PyTorch、Adam、batch size 128、weight decay $1\times 10^{-4}$、A100 32GB、早停 patience 6），含附录 A/B，但未提供代码、检查点或配置文件  
- 论文中引用的开源项目：未提及（论文仅以参考文献形式引用各方方法，未给出代码仓库或项目链接）

📄 [OpenReview](https://openreview.net/forum?id=t9aUiZsQgg)

---

### 64. [REST: Diffusion-based Real-time End-to-end Streaming Talking Head Generation via ID-Context Caching and Asynchronous Streaming Distillation](/audio-paper-digest-blog/posts/2026-07-04-rest-diffusion-based-real-time-end-to-end)

✅ **7.3/10** | 前50% | #音视频生成 | 创新 1.4/2 | 严谨 1.2/1.5 | 实验 1.1/1.5 | 影响 1.1/1.5 | 开源 0.2/1.5

👥 **作者与机构**

- 第一作者：Haotian Wang（中国科学技术大学）
- 共同第一作者：Yuzhe Weng（中国科学技术大学）
- 通讯作者：Jun Du（中国科学技术大学）
- 作者列表：Haotian Wang (中国科学技术大学), Yuzhe Weng (中国科学技术大学), Jun Du (中国科学技术大学), Haoran Xu (iFLYTEK), Xiaoyan Wu (iFLYTEK), Shan He (iFLYTEK), Bing Yin (iFLYTEK), Cong Liu (iFLYTEK), Qingfeng Liu (中国科学技术大学/iFLYTEK，机构标注为双隶属）

💡 **毒舌点评**

这篇论文是diffusion-based talking head领域一次扎实的系统工程突破，首次在单卡上实现了端到端扩散模型的实时流式生成。ID-Context Cache将KV缓存思想优雅地适配到扩散Transformer的半自回归场景中，而异步流式蒸馏（ASD）策略通过信息论对比和运动平滑约束，有效缓解了流式生成固有的误差累积问题，实验效果确实亮眼。然而，冷静审视后不难发现，其对语音/音频领域本身的贡献相当有限——SpeechAE基本承袭READ架构，核心驱动力来自Whisper特征，并未在声学建模或音频表征层面提出新见解。净输入/输出的思维来看，论文解决的核心问题（实时性、流式）和采用的关键技术（Cache、蒸馏、高压缩VAE）均是视频生成和多模态社区的经典思想，其对语音/音频研究者的方法论启发远小于对视觉生成社区的工程示范。此外，完全不开源、不提供模型权重或在线demo，在当前顶会语境下显得诚意不足，39页附录中的细节虽多，但仍不足以弥补复现门槛极高的缺陷。

📌 **核心摘要**

1. 解决问题：扩散模型在音视频说话人生成（THG）上质量优越，但推理极慢（非流式模型需数十到数百秒生成5秒视频），且普遍采用非自回归范式，不支持流式输出，严重阻碍实时交互应用。本文旨在解决端到端扩散模型在实时流式生成中的效率与一致性问题。
2. 方法核心：提出REST框架，三阶段流水线：(1) 高压缩时空VAE（32×32×8）将视频压缩至极低维潜在空间（8192:1像素token比），大幅降低扩散计算量；(2) ID-Context Cache机制，在DiT的自注意力中以ID锚点（ID-Sink）维护身份一致性，以上下文缓存（Context-Cache）维持块间时序连贯，实现块级半自回归流式扩散；(3) 异步流式蒸馏（ASD），以非流式教师模型配合块级异步噪声调度器（CANS）模拟流式误差动态，通过InfoNCE对比损失（最大化师生互信息）和二阶运动平滑损失约束流式学生模型，抑制误差累积。
3. 与已有方法对比创新点：相比双阶段AR方法（如AniTalker/Ditto），REST是首个端到端流式扩散模型，避免了中间运动表示的瓶颈；相比端到端非流式扩散方法（如Sonic/EchoMimic），首次实现单卡实时流式；相比READ（实时但非流式），REST以半自回归范式真正突破了流式能力限制。
4. 主要实验结果：在HDTF和MEAD数据集上全面验证。HDTF上Runtime 4.416秒（Sonic 83.584秒，Ditto 17.974秒），FID 14.597最优，FVD 219.870次优，Sync-C 8.335次优；MEAD上同样取得速度与质量的最优平衡。消融实验验证ID-Sink、Context-Cache、ASD各组件的独立贡献，70秒长时生成指标波动<1.5%。跨演员、跨风格的定性实验进一步验证泛化性。
5. 实际意义：首次在单GPU（A100）上实现端到端扩散模型的实时流式说话人生成，推理速度从分钟级压缩到秒级（4.4秒完成4.8秒视频），VRAM占用仅11GB，支持流式输出，为数字人、虚拟主播、线上教育等实时应用提供了可行方案。
6. 主要局限性：(1) 快速/大幅度头部运动偶现运动模糊，归因于训练数据质量和VAE高压缩的信息损失；(2) 牙齿等精细面部结构清晰度不足，同样受数据质量和压缩策略限制；(3) 完全未开源，无代码、模型权重或可访问demo，第三方复现难度极高；(4) 训练-推理的噪声采样差异（教师蒸馏时共享噪声种子，推理时独立采样）可能引入分布偏移，论文未对此进行充分分析或消融。

🔗 **开源详情**

- 代码：论文中未提及任何开源代码仓库链接，无GitHub仓库。
- 模型权重：论文中未提及任何预训练权重下载链接或发布计划。
- 数据集：HDTF（High-Definition Talking Face，原始发布见Zhang et al., CVPR 2021）和MEAD（Multi-view Emotional Audio-visual Dataset，原始发布见Wang et al., ECCV 2020），论文未提供数据集的直接下载链接。
- Demo：论文未提供在线demo或可交互体验的网页应用。
- 复现材料：论文在附录（共28页）中提供了详细的网络结构描述、训练超参数配置、损失函数设计和分阶段训练流程，但未提供外部checkpoint或完整的复现代码仓库。
- 论文中引用的开源项目（作为依赖或工具使用，非本项目开源）：
  - OpenFace：https://github.com/TadasBaltrusaitis/OpenFace（人脸关键点检测）
  - MediaPipe：https://github.com/google/mediapipe（手部关键点检测）
  - CRAFT：https://github.com/clovaai/CRAFT-pytorch（文本检测）
  - Whisper：https://github.com/openai/whisper（Whisper-tiny编码器提取语音特征）
  - LTX-Video：https://github.com/lightricks/ltx-video（Temporal VAE预训练权重初始化）
  - T5：https://github.com/google-research/text-to-text-transfer-transformer（文本编码器）
  - PyTorch：https://pytorch.org（深度学习框架）
  - FFmpeg：https://ffmpeg.org（视频预处理，论文提及）
  - pytorch-fid：https://github.com/mseitzer/pytorch-fid（FID计算）

📄 [OpenReview](https://openreview.net/forum?id=npOsvPRB0i)

---

### 65. [PhoStream: Benchmarking Real-World Streaming for Omnimodal Assistants in Mobile Scenarios](/audio-paper-digest-blog/posts/2026-07-04-phostream-benchmarking-real-world-streaming-for)

✅ **7.3/10** | 前50% | #音视频问答 | 创新 1.2/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 影响 0.8/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Xudong Lu（香港中文大学 MMLab）
- 通讯作者：Rui Liu（华为研究，liu.rui2@huawei.com）、Hongsheng Li（香港中文大学 MMLab，hsli@ee.cuhk.edu.hk）
- 作者列表：Xudong Lu（香港中文大学 MMLab）、Huankang Guan（华为研究）、Yang Bo（华为研究）、Jinpeng Chen（华为研究）、Xintong Guo（华为研究）、Shuhan Li（华为研究）、Fang Liu（香港城市大学）、Peiwen Sun（香港中文大学 MMLab）、Xueying Li（上海交通大学）、Wei Zhang（上海交通大学）、Xue Yang（上海交通大学）、Rui Liu（华为研究）、Hongsheng Li（香港中文大学 MMLab）

💡 **毒舌点评**

这篇论文发现了一个真实且普遍的“模型太猴急”问题，用精心设计的流式基准把主流 MLLM 都打回了原形，Forward 任务的惨淡分数极具说服力。但作为 benchmark 论文，它过度依赖 Gemini 3 Pro 做数据生成和 Qwen3-235B 做评估，一旦这两个闭源/强模型更新，基准的稳定性和公平性就很微妙；而且在多模态流式领域，作者把“音频”当成了加分项来宣传，结果消融实验却显示开音频反而让 Forward 性能更差，这个自曝其短的结论让人既敬佩又哭笑不得。

📌 **核心摘要**

1. 论文旨在解决当前多模态大模型在真实移动端流式场景中缺乏有效评估基准的问题，特别是模型“何时回答”而非“回答什么”的能力评估。
2. 提出了 PhoStream 基准，包含 578 个视频、5,572 个开放式 QA 对，涵盖 YouTube Vlog、Phone Tutorial、Phone Record、EgoBlind 四种移动场景，将问答分为 Backward、Instant、Forward 三类，重点考察模型的时间推理能力。该基准平均视频时长 13.3 分钟，远超现有流式基准。


3. 与现有流式基准相比，PhoStream 首次统一屏幕内和屏幕外移动场景，使用开放式 QA 替代多选，引入严格的时间截断机制和在线推理管道来真实模拟流式助手行为。
4. 主要实验结果显示，当前最强模型存在严重的时间不对称性：Gemini 3 Pro 在 Instant 和 Backward 任务上得分超过 80，但 Forward 任务仅 16.40；Qwen3-Omni 的 Forward 得分甚至只有 1.26，早期响应率高达 97.89%。Doubao-Seed-1.6 以 44.26 的 Forward 得分成为该任务最优模型。


| 模型 | Param | Instant | Backward | Forward | Overall |
|------|-------|---------|----------|---------|---------|
| Gemini 3 Pro | - | 80.83 | 82.19 | 16.40 | 48.70 |
| Doubao-Seed-1.6 | - | 71.28 | 62.94 | 44.26 | 56.01 |
| Doubao-Seed-1.8 | - | 80.45 | 77.31 | 33.38 | 56.15 |
| Qwen3-Omni-30B-A3B | 30B | 77.18 | 77.24 | 1.26 | 39.02 |
| Qwen3-VL-8B | 8B | 75.22 | 71.50 | 7.18 | 40.25 |
| Qwen3-VL-30B-A3B | 30B | 73.38 | 69.46 | 5.25 | 38.33 |
| Qwen2.5-Omni-7B | 7B | 67.71 | 65.20 | 1.81 | 34.06 |
| Dispider | 7B | 44.24 | 42.90 | 3.53 | 23.50 |
| VideoLLM-online-8B | 8B | 24.88 | 24.72 | 0.00 | 12.34 |
| MMDuet2 | 3B | 8.76 | 8.30 | 1.39 | 4.96 |

5. 实际意义在于为移动 AI 助手（如豆包、Gemini）的真实流式交互能力提供了统一评估平台，揭示了当前模型“忍不住抢答”的普遍缺陷，指明了流式训练中需要关注的关键行为目标——响应时机的决策能力。
6. 主要局限包括：评估依赖 LLM-as-a-Judge，可能引入 judge 模型的自身偏见；数据生成管道依赖 Gemini 3 Pro，标注质量受限于单一生成模型；Forward 任务的设计本质上惩罚了所有“提前回答”，但某些场景下提前预测可能是合理的助手行为。

🔗 **开源详情**

- 代码：https://github.com/Lucky-Lance/PhoStream （承诺公开，当前未发布）
- 模型权重：论文中未提及（本工作为基准数据集，不涉及模型权重发布）
- 数据集：PhoStream 数据集随代码一同在 https://github.com/Lucky-Lance/PhoStream 承诺公开，包含 5,572 条开放式问答对及对应视频元数据
- Demo：论文中未提及
- 复现材料：代码仓库承诺提供自动生成流水线、在线推理流水线、LLM-as-a-Judge 评估脚本等复现所需材料，具体使用方式见仓库说明
- 论文中引用的开源项目：
  - Qwen2.5-Omni (7B) – https://github.com/QwenLM/Qwen2.5-Omni
  - Qwen3-VL (8B, 30B-A3B) – https://github.com/QwenLM/Qwen3-VL
  - Qwen3-Omni (30B-A3B) – https://github.com/QwenLM/Qwen3-Omni
  - Dispider – https://github.com/MMDUET/Dispider
  - VideoLLM-online – https://github.com/showlab/VideoLLM-online
  - MMDuet2 – https://github.com/MMDUET/MMDuet2
  - Qwen3-235B-A22B (作为评判模型) – https://github.com/QwenLM/Qwen3
  - MP4Box (GPAC) – https://github.com/gpac/gpac

📄 [OpenReview](https://openreview.net/forum?id=cCMbxJcDmH)

---

### 66. [ProactiveLLM: Learning Active Interaction for Streaming Large Language Models](/audio-paper-digest-blog/posts/2026-07-04-proactivellm-learning-active-interaction-for)

✅ **7.2/10** | 前50% | #语音识别 | 创新 1.5/2 | 严谨 1/1.5 | 实验 1/1.5 | 影响 0.8/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Junlong Tong（上海交通大学，Eastern Institute of Technology, Ningbo）
- 通讯作者：Xiaoyu Shen（Eastern Institute of Technology, Ningbo）
- 作者列表：Junlong Tong（上海交通大学，Eastern Institute of Technology, Ningbo）、Yao Zhang（Eastern Institute of Technology, Ningbo）、Anhao Zhao（Eastern Institute of Technology, Ningbo，香港理工大学）、Yingqi Fan（Eastern Institute of Technology, Ningbo）、Yunpu Ma（Munich Center for Machine Learning, LMU）、Xiaoyu Shen（Eastern Institute of Technology, Ningbo）
- 该论文发表于 ICML 2026（Proceedings of the 43rd International Conference on Machine Learning, Seoul, South Korea. PMLR 306, 2026）

💡 **毒舌点评**

该论文提出了一种巧妙的"内生信号驱动"范式，用自蒸馏和掩码训练替代外部对齐标注，让流式LLM学会"审时度势"，在非单调对齐任务（如QA）上展现了惊艳的上下文裁剪能力（如仅用78%上下文恢复97%性能）。然而，其决策头（熵/注意力驱动）的设计相对简单，本质上只是一个阈值触发器，远未触及学习型策略的上限。与强学习型基线的对比仅用了2000条数据，难以令人信服地论证内生策略的绝对优势。更令人担忧的是，在单调任务MT上，Proactive-Entr的延迟实际上高于Wait-9（AIL 8.36 vs 6.87），论文正文中"maintaining lower latency"的笼统宣称有过度包装之嫌——读者需仔细区分Proactive-Attn和Proactive-Entr的不同表现，不可被论文的修辞所误导。

📌 **核心摘要**

本论文旨在解决流式大语言模型（Streaming LLMs）中"何时生成"的核心挑战，即如何在输入流尚未结束时就主动决定输出时机，以在生成质量和交互延迟间取得最优平衡。现有方法要么依赖固定的等待策略（如Wait-k），要么需要昂贵的外部对齐信号（如时间戳标注或教师模型），缺乏灵活性。

ProactiveLLM的核心方法是通过掩码流式语言建模（MSLM）和同步特权自蒸馏（SPSD）来诱导模型从内部状态感知"语义充分性"。MSLM在训练时对输入序列施加符合单调性的随机掩码，模拟流式场景下的部分可见性；SPSD则让同一模型在全上下文（教师）和部分上下文（学生）视角下进行自蒸馏，利用完整证据指导学生理解不完整信息。

与已有方法相比，ProactiveLLM的创新在于：1）将交互时机决策从外部规则/标注中解耦出来，转为模型内生能力；2）无需任何外部教师或对齐标注即可训练出流式感知能力，使得决策头（如基于熵或注意力的策略）可以即插即用。

主要实验结果表明，在非单调对齐任务（如短文本QA和选择题QA）上，ProactiveLLM在Qwen2.5-3B-Instruct上仅消耗78%的输入上下文就恢复了97.16%的全量性能上限（ChoiceQA Acc: 85.83 vs Batch 88.33，RCO=0.78）。在机器翻译任务上，Proactive-Attn以更低延迟（AIL 5.93）实现了接近Wait-9（AIL 6.87, BLEU 21.47）的质量（BLEU 20.62），而Proactive-Entr以更高延迟（AIL 8.36）换取了更优质量（BLEU 23.62），二者共同拓展了Pareto前沿。在语音流式任务（ASR和Spoken QA）上也验证了跨模态的有效性，尤其是在Spoken Short QA上，Wait-9的F1仅有12.85，而Proactive-Entr达到71.12（Batch为72.15）。

| 任务 | 方法 | 质量指标 | RCO | 相对Batch |
| :--- | :--- | :--- | :--- | :--- |
| Choice QA (Qwen2.5-3B) | Batch (Full) | 88.33 (Acc) | 1.00 | 100% |
| Choice QA (Qwen2.5-3B) | Proactive-Entr | 85.83 (Acc) | 0.78 | 97.16% |

| 任务 | 方法 | 质量指标 | AIL | RCO |
| :--- | :--- | :--- | :--- | :--- |
| MT en-de (Qwen2.5-3B) | Wait-9 | 21.47 (BLEU) | 6.87 | 0.88 |
| MT en-de (Qwen2.5-3B) | Proactive-Attn | 20.62 (BLEU) | 5.93 | 0.87 |
| MT en-de (Qwen2.5-3B) | Proactive-Entr | 23.62 (BLEU) | 8.36 | 0.88 |

| 任务 | 方法 | 质量指标 (F1) | RCO |
| :--- | :--- | :--- | :--- |
| Spoken Short QA | Wait-9 | 12.85 | 0.32 |
| Spoken Short QA | Proactive-Entr | 71.12 | 0.80 |

该工作的实际意义在于为构建低延迟、高响应的实时AI系统（如语音助手、同声传译）提供了无需昂贵标注的预训练方案，其"内生能力+即插即用决策头"的框架具有很强的泛用性。主要局限性在于决策头（熵、注意力）相对简单，本质上为启发式阈值触发器，尚未探索可通过学习优化的策略；在单调对齐任务上，Proactive-Entr的延迟实际上高于Wait-9，所谓"更低延迟"的说法仅适用于Proactive-Attn，存在选择性呈现的嫌疑。

🔗 **开源详情**

- 代码：论文第1页声明"Code is publicly available at this repository."，但该链接为占位符，论文中未提供可访问的URL。
- 模型权重：论文中未提及模型权重的发布计划。
- 数据集：
  - IWSLT-17 (En→De, En→Fr)：用于机器翻译任务 (Cettolo et al., 2017)
  - Dialogue Summarization (DialogSum)：用于对话摘要任务 (Chen et al., 2021)
  - SQuAD v1.1：用于短文本问答任务 (Rajpurkar et al., 2016)
  - MCTest (MC160, MC500)：用于多项选择问答任务 (Richardson et al., 2013)
  - LibriSpeech：用于语音识别任务 (Panayotov et al., 2015)
  - Spoken-SQuAD：用于语音问答任务 (Li et al., 2018)
  以上数据集均为公开数据集，但论文未提供具体下载链接。
- Demo：论文中未提及。
- 复现材料：论文附录B.3（Table 6）提供了训练超参数汇总，包括batch size（文本64，语音16，梯度累积4步）、学习率 $5 \times 10^{-5}$、训练2个epoch、硬件4×H100 GPU等；附录C提供了数据集详细描述和分析；附录D和E提供了评估指标深入讨论和案例研究。但未提供预训练检查点或完整复现脚本。
- 论文中引用的开源项目：
  - Qwen2.5-3B-Instruct / Qwen3-4B / Qwen3-32B：作为文本流式骨干模型 (Yang et al., 2025; Team, 2025)
  - Qwen2-Audio-7B-Instruct：作为语音流式骨干模型 (Chu et al., 2024)
  - GPT-5.4：用于构造对齐标注的生成器（OpenAI，引用为OpenAI, 2023）
  - Whisper：语音编码器 (Radford et al., 2023)
  - BERT：引用其掩码语言建模思想 (Devlin et al., 2019)

📄 [OpenReview](https://openreview.net/forum?id=sr1qgowJQ1)

---

### 67. [Stream RAG: Instant and Accurate Spoken Dialogue Systems with Streaming Tool Usage](/audio-paper-digest-blog/posts/2026-07-04-stream-rag-instant-and-accurate-spoken-dialogue)

✅ **7.2/10** | 前50% | #流式处理 | 创新 1.2/2 | 严谨 1.2/1.5 | 实验 1.1/1.5 | 影响 0.9/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Siddhant Arora（Meta AI / Carnegie Mellon University）
- 通讯作者：Siddhant Arora（siddhana@meta.com）、Zhaojiang Lin（zhaojiang@meta.com）
- 作者列表：Siddhant Arora（Meta AI, USA / Carnegie Mellon University, USA）、Haidar Khan（Meta AI, USA）、Kai Sun（Meta AI, USA）、Xin Luna Dong（Meta AI, USA）、Sajal Choudhary（Meta AI, USA）、Seungwhan Moon（Meta AI, USA）、Xinyuan Zhang（Meta AI, USA）、Adithya Sagar（Meta AI, USA）、Surya Teja Appini（Meta AI, USA）、Kaushik Patnaik（Meta AI, USA）、Sanat Sharma（Meta AI, USA）、Shinji Watanabe（Carnegie Mellon University, USA）、Anuj Kumar（Meta AI, USA）、Ahmed A Aly（Meta AI, USA）、Yue Liu（Meta AI, USA）、Florian Metze（Meta AI, USA）、Zhaojiang Lin（Meta AI, USA）

💡 **毒舌点评**

本文提出了一种将语音对话系统的工具调用从“端点后”推进到“流式并行”的工程框架，其“边听边查”的思路以及对延迟的大幅改善（结合vLLM后达57%）无疑是务实且有效的。然而，这也是一篇典型的工业界系统工程论文：核心的Model-Triggered策略本质上是对LLM的一次精巧适配和指令微调，学术深度有限，未能对“为何流式查询不损害准确率”提供理论层面的洞见。此外，论文回避了Reflector机制在关键实体后置时的失效问题，且对多轮、嘈杂环境的鲁棒性验证严重不足，使其宣称的泛化能力打了折扣。

📌 **核心摘要**

本文针对在端到端（E2E）语音对话系统（SDS）中集成外部工具检索（RAG）后，响应延迟大幅增加的问题，提出了Stream RAG框架。其核心思想是利用流式语音输入的时序特性，在用户说话过程中并行地发起工具查询（如网页搜索、知识图谱查询），从而将工具调用延迟隐藏在用户话语的时间窗口内。论文提出了两种具体策略：1）Fixed-Interval Stream RAG，以固定时间间隔发起工具查询，并引入一个Reflector模块，通过将中间查询结果与最终查询结果对比来保证检索质量；2）Model-Triggered Stream RAG，通过后训练教会模型根据累积的部分语音输入和历史查询，自主决定何时触发新查询，并设计了一种负样本注入策略，以增强模型在部分观测下从错误查询中自我纠正的能力。

与传统的Retrieve-after-endpoint方法相比，Stream RAG首次将工具调用从“说完再查”推进到“边说边查”的流式并行模式。实验在自建的AudioCRAG（合成+真人语音）基准和公开的SLUE-SQA基准上进行，主要结果包括：
- 在AudioCRAG上，Model-Triggered Stream RAG使Qwen-OMNI的QA准确率从11.1%提升至34.2%（绝对提升23.1%），并在集成vLLM后，于真人语音上将首Token延迟降低57%（3.16s $\\to$ 1.36s）；
- 在SLUE-SQA上，Stream RAG以55.8%的EM准确率超越了包括WavRAG在内的所有对比系统，并实现了-0.68s的负首Token延迟（即回答开始生成早于用户语音结束）。

该工作为构建低延迟、更自然的语音AI助手提供了一个实用的工程范式，但其流式查询质量的保障强依赖于启发式的Reflector规则和后训练数据的伪标签质量，在多轮对话和复杂推理场景下的表现也有待深入探索。

| 模型 | 设置 | AudioCRAG-Synthetic准确率(%) | AudioCRAG-Human准确率(%) | 首Token延迟(s) Syn./Hum. |
|------|------|-------------------------------|---------------------------|----------------|
| Qwen-OMNI | Closed Book | 11.1 | 13.1 | 1.34/1.24 |
| OpusLM | Closed Book | 18.4 | 15.5 | 5.67/7.07 |
| Kimi Audio | Closed Book | 16.7 | 16.0 | 0.85/0.89 |
| Qwen-OMNI | Open Book | 26.3 | 26.9 | 5.90/5.40 |
| Qwen-OMNI | Stream RAG | 34.2 | 37.4 | 5.32/3.60 |

🔗 **开源详情**

- 代码：论文中未提供代码链接。作者在结论部分声明“We will open source our training code”，但未给出具体URL。
- 模型权重：论文主要基于公开预训练模型进行实验，未提及发布新的微调模型权重。
  - Qwen-OMNI (Qwen2.5-Omni-7B): https://huggingface.co/Qwen/Qwen2.5-Omni-7B
  - OpusLM: 论文引用 (Tian et al., 2025)，权重链接未在论文中给出
  - Kimi-Audio: 论文引用 (Ding et al., 2025)，权重链接未在论文中给出
- 数据集：
  - AudioCRAG‑Synthetic：基于公开CRAG数据集经TTS生成，未提供独立下载。
  - AudioCRAG‑Human：复用WearVox数据集的子集构建，WearVox (Lin et al., 2025) 论文未提供公开访问链接。
  - SLUE‑SQA 基准：https://github.com/yshon0512/SLUE-sqa-survey
  - 后训练使用TriviaQA子集：https://nlp.cs.washington.edu/triviaqa/
  - 多轮评估使用CORAL数据集：https://github.com/princeton-nlp/CORAL
- Demo：未提及。
- 复现材料：论文附录提供了提示模板（§A.18）、评估设置（§A.12）及训练超参（Table 19-21）；未提供训练检查点或Docker镜像。
- 论文中引用的开源工具：
  - BGE‑large‑en‑v1.5 (Xiao et al., 2023): https://huggingface.co/BAAI/bge-large-en-v1.5
  - vLLM (Kwon et al., 2023): https://github.com/vllm-project/vllm
  - CRAG 基准 (Yang et al., 2024d): https://github.com/facebookresearch/CRAG
  - OWSM CTC v4 1B (Peng et al., 2025): https://github.com/espnet/espnet/tree/master/egs2/owsm_v4
  - Whisper (Radford et al., 2023): https://github.com/openai/whisper
  - VITS (Hayashi et al., 2020): https://huggingface.co/espnet/kan-bayashi_ljspeech_vits

### 标签
#语音对话 #检索增强生成 #端到端模型 #流式处理
主任务标签：#语音对话
主方法标签：#检索增强生成
补充标签：#端到端模型 #流式处理 #延迟优化 #基准数据集

📄 [OpenReview](https://openreview.net/forum?id=NMMmwSbzRx)

---

### 68. [Probing Cross-modal Information Hubs in Audio-Visual LLMs](/audio-paper-digest-blog/posts/2026-07-04-probing-cross-modal-information-hubs-in-audio)

✅ **7.2/10** | 前50% | #音视频理解 | 创新 1.3/2 | 严谨 1.1/1.5 | 实验 1/1.5 | 影响 0.6/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Jihoo Jung（KAIST 电气工程系）
- 通讯作者：Joon Son Chung（KAIST 电气工程系）
- 作者列表：Jihoo Jung（KAIST 电气工程系）、Chaeyoung Jung（KAIST 电气工程系）、Ji-Hoon Kim（中央大学 先进影像科学研究生院）、Joon Son Chung（KAIST 电气工程系）

💡 **毒舌点评**

论文提出了一个有趣的反直觉发现：在音视频大模型中，承载跨模态融合信息的并非承载物体语义的"对象token"，而是一类被视为信息盲区的"attention sink token"。这个发现本身对多模态LLM的机制理解有一定价值。但是，作者基于此洞察提出的ASD方法虽然训练免费，却带来了高达3.7倍的推理延迟，这对于一个"即插即用"的工程方案而言，实用价值大打折扣。更致命的是，所有实验仅局限于captioning任务，对更广泛的QA、推理等场景的适用性存疑。此外，AVLLM的可解释性领域整体体量尚小，该工作的实际影响力还有待时间检验。总体来看，洞察有趣但应用路径尚有距离，是一篇典型的"机制分析强但下游应用弱"的论文。

📌 **核心摘要**

论文对音视频大模型（AVLLM）的内部跨模态信息存储机制进行了探索。文章核心观点是：一个模态的信息被编码在另一个模态的token表示中，且这些信息的存储位置并非均匀分布，而是高度集中于注意力sink token。通过将因果追踪方法适配到AVLLM场景，并构建"单模态支配"筛选框架进行实验，作者发现：1) AVLLM的跨模态信息主要存储在sink tokens中，而非通常认为的对象tokens；2) 基于"模态支配分数"（MDS），可将sink tokens功能性地分为仅对本模态敏感的"单模态sink"和聚合多模态信息的"跨模态sink"，后者才是真正的跨模态信息枢纽。基于此发现，论文提出了一种免训练的自适应sink引导解码策略（ASD），通过在生成时动态抑制单模态sink并放大跨模态sink的注意力权重，来缓解AVLLM特有的对象幻觉问题。实验覆盖了Qwen2.5-Omni、video-SALMONN-o1和video-SALMONN2+共三个系列五款模型（包括3B和7B规模），在因果追踪实验中，修补跨模态sink token的IE值大幅领先于修补对象token、随机token或单模态sink token。在幻觉缓解实验中，ASD在VGGSound-Animal数据集上将Qwen2.5-Omni (7B)的CHAIR_S从48.21降至36.91，video-SALMONN-o1 (7B)从37.74降至25.07，并显著提升ALOHa分数，优于PAI和VCD等基线。然而，该方法会使推理延迟增加约3.7倍，且目前仅验证了在caption任务上的有效性。

📄 [OpenReview](https://openreview.net/forum?id=nxKRwB1J63)

---

### 69. [Efficient Multi-modal Dataset Distillation via Analytic Parameter Matching](/audio-paper-digest-blog/posts/2026-07-04-efficient-multi-modal-dataset-distillation-via)

✅ **7.2/10** | 前50% | #对比学习 | 创新 1.8/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 影响 0.8/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Deyu Bo（National University of Singapore）
- 通讯作者：Xinchao Wang（National University of Singapore）
- 作者列表：Deyu Bo（National University of Singapore）、Xinchao Wang（National University of Singapore）

💡 **毒舌点评**

本文最大的贡献在于用一个解析解优雅地绕开了多模态数据集蒸馏中轨迹匹配的存储噩梦和双层优化。从“匹配训练轨迹”到“匹配投影器最优解”，思路转换干净、彻底，在理论和工程上都极具冲击力。但不要高兴太早，这套解析解严重依赖于固定的教师模型和矩阵求逆，限制了合成数据的规模与灵活性，本质上还是一个针对线性/可逆激活函数的特化方案，距离真正的通用多模态蒸馏还有距离。

📌 **核心摘要**

本文针对现有多模态数据集蒸馏（MDD）方法因轨迹存储和双层优化造成的巨大资源开销，提出了解析参数匹配（APM）框架。核心创新在于首次推导出 InfoNCE 损失下多模态线性投影器的闭式解，将其作为蒸馏对齐目标——直接匹配真实数据和合成数据的解析参数，从而避免了存储教师模型完整训练轨迹（如 LoRS 需存储 30GB 以上），也无需对合成数据进行昂贵的二阶梯度回传。实验中，APM 仅需缓存 0.5GB 的分析参数，蒸馏速度提升 9.6 倍。在 Flickr30k、MS-COCO 图像‑文本及 AudioCaps 音频‑文本等标准基准上，APM 在跨模态检索（R@K）上全面且显著地超越 LoRS、RepBlend 等强基线方法。在 Flickr30k 100 对设定下，IR@1 达 12.8，TR@1 达 17.8。此外，大量消融实验验证了均值移除、协方差正则化等稳定化策略的必要性；SVD 熵分析证明了 APM 能有效降低数据冗余。算法在跨架构评估和零样本图像分类中均表现出强泛化性，并在 1000 对设定下展现出良好的可扩展性。论文的主要局限包括：解析解依赖全量数据矩阵求逆，合成集大小受限（须小于嵌入维度以保满秩）；非线性投影器仅有理论推导而未实验验证；尚未开源官方代码库。

🔗 **开源详情**

- 代码：未提供。论文仅在附录中提供了 `APM` 的 PyTorch 核心代码片段，无完整工程链接。
- 模型权重：未提供。
- 数据集：论文使用的 Flickr30k、MS-COCO、AudioCaps、CIFAR-10/100、ImageNet-1k 等均为公开基准数据集，但论文本身未提供任何数据下载或处理脚本链接。
- Demo：未提及。
- 复现材料：附录包含蒸馏与评估超参数表（Tables 15, 16）、算法伪代码（Algorithm 1）及 `APM` 计算过程的核心代码（Algorithm 2）。复现主要实验具备基本可行性，但需自行实现完整的训练、数据加载及评估管线。

📄 [OpenReview](https://openreview.net/forum?id=Yh4dMR5mJ0)

---

### 70. [Self-Supervised Flow Matching for Scalable Multi-Modal Synthesis](/audio-paper-digest-blog/posts/2026-07-04-self-supervised-flow-matching-for-scalable-multi)

✅ **7.2/10** | 前50% | #音视频生成 | 创新 1.5/2 | 严谨 1.5/1.5 | 实验 1.5/1.5 | 影响 0.4/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Hila Chefer (Black Forest Labs) 与 Patrick Esser (Black Forest Labs)（并列第一作者）
- 通讯作者：Hila Chefer <hila@blackforestlabs.ai>, Patrick Esser <patrick@blackforestlabs.ai>
- 作者列表：Hila Chefer（Black Forest Labs），Patrick Esser（Black Forest Labs），Dominik Lorenz（Black Forest Labs），Dustin Podell（Black Forest Labs），Vikash Raja（Black Forest Labs），Vinh Tong（Black Forest Labs），Antonio Torralba（MIT, Black Forest Labs），Robin Rombach（Black Forest Labs）

💡 **毒舌点评**

这篇工作用一个巧妙的双时间步噪声调度在流匹配中灌入了自监督表征学习，彻底摆脱了对冻住外部编码器的依赖，多模态齐头并进的效果让人眼前一亮。然而，音频实验更像顺带的点缀，真正的音频领域读者难以从中获得实质推动力，且没有任何开源承诺，工业界光鲜的“self-flow”目前还止于纸上。

📌 **核心摘要**

本文指出扩散模型/流匹配在使用预训练视觉编码器（如DINOv2）进行特征对齐时存在逆缩放律、跨模态泛化差等瓶颈。为此提出Self-Flow框架，将自监督表征学习直接嵌入流匹配训练中，无需任何外部模型。核心机制是双时间步调度（Dual-Timestep Scheduling，DTS），对同一输入的不同token施加异质噪声水平，形成信息不对称；随后用一种师生框架让模型从部分损坏的输入预测清洁版本的特征，同时联合优化生成损失。实验覆盖图像（ImageNet及文本到图像）、视频、音频及多模态联合训练，在FID、FD-DINOv2、FVD、FAD等指标上均超越此前最强的外部对齐方法REPA及无外部模型基线SRA，并展现出符合预期的缩放特性。该方法甚至能提升RAE等语义自编码器的生成质量。实际意义在于统一了生成与表征学习，为免外部监督的多模态可缩放生成提供了新范式。主要局限是额外前向过程增加训练开销，且最优噪声调度需为每种模态单独调参。

🔗 **开源详情**

- 代码：未提供（项目页面仅包含论文和研究摘要，无代码仓库链接）
- 模型权重：未提供
- 数据集：未提供（ImageNet-1K和FMA为公开数据集，图像/视频/音频内部数据集和RT-1为已有数据集，但作者未公开新数据集）
- Demo：未提供（项目页面有补充网站，但无交互Demo）
- 复现材料：未提供
- 论文中引用的开源项目：
  - REPA (Yu et al., 2024)：https://arxiv.org/abs/2410.06940
  - FLUX.2 (Black Forest Labs, 2025)：https://bfl.ai/research/representation-comparison 及 https://github.com/black-forest-labs/flux2
  - SD-VAE (Rombach et al., 2022a)：https://huggingface.co/stabilityai/sd-vae-ft-mse
  - Wan2.2 (Wan et al., 2025)：https://arxiv.org/abs/2503.20314
  - Songbloom (Yang et al., 2025)
  - RAE (Zheng et al., 2025)：https://arxiv.org/abs/2510.11690
  - ImageNet-1K (Deng et al., 2009)
  - FMA dataset (Defferrard et al., 2017)：https://arxiv.org/abs/1612.01840
  - FMA genre recognition (Defferrard et al., 2018)：https://arxiv.org/abs/1803.05337
  - CLAP (Elizalde et al., 2022)：https://arxiv.org/abs/2206.04769
  - Guided-diffusion evaluations (Dhariwal & Nichol, 2021)：https://github.com/openai/guided-diffusion
  - SiT (Ma et al., 2024)
  - DINOv2 (Oquab et al., 2024)
  - DINOv3 (Siméoni et al., 2025)：https://arxiv.org/abs/2508.10104
  - SigLIP 2 (Tschannen et al., 2025)：https://arxiv.org/abs/2502.14786
  - V-JEPA 2 (Bardes et al., 2024)：https://arxiv.org/abs/2502.03444
  - Depth Anything 3 (Lin et al., 2025)
  - MERT (Li et al., 2024c)：https://arxiv.org/abs/2306.00107
  - SRA (Jiang et al., 2025)：https://arxiv.org/abs/2505.02831
  - LayerSync (Haghighi et al., 2025)：https://arxiv.org/abs/2510.12581
  - RT-1 (Brohan et al., 2023)：https://arxiv.org/abs/2212.06817
  - SIMPLER simulator (Li et al., 2024a)：https://arxiv.org/abs/2405.05941
  - FLUX.1 Kontext (Labs et al., 2025)：https://arxiv.org/abs/2506.15742
  - REPA-E (Leng et al., 2025a)：https://arxiv.org/abs/2504.10483
  - End-to-End Tuned VAEs (Leng et al., 2025b)：https://end2end-diffusion.github.io/repa-e-t2i/
  - VideoMAEv2 (Wang et al., 2023)
  - Inception (Szegedy et al., 2015)

📄 [OpenReview](https://openreview.net/forum?id=HoThWhfxiK)

---

### 71. [CoCoEmo: Composable and Controllable Human-Like Emotional TTS via Activation Steering](/audio-paper-digest-blog/posts/2026-07-04-cocoemo-composable-and-controllable-human-like)

✅ **7.1/10** | 前50% | #语音合成 | 创新 1.5/2 | 严谨 1/1.5 | 实验 1/1.5 | 影响 1/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Siyi Wang（The University of Melbourne, Australia）
- 通讯作者：Ting Dang（The University of Melbourne, Australia）
- 作者列表：Siyi Wang（The University of Melbourne）、Shihong Tan（Wuhan University, China）、Siyi Liu（The Hong Kong University of Science and Technology (Guangzhou), China）、Hong Jia（The University of Auckland, New Zealand）、Gongping Huang（Wuhan University, China）、James Bailey（Monash University, Australia）、Ting Dang（The University of Melbourne）

💡 **毒舌点评**

这篇论文将大语言模型（LLM）中炙手可热的激活转向技术，系统地“移植”到了语音合成的混合情感控制上。其“SLM而非声学模块才是情感表达总导演”的核心洞察，是一项扎实的经验发现，为“在哪里转向”提供了原则性指导，工程价值显著。然而，方法的技术内核（均值差向量、线性探针选层）是领域内标准操作的直接应用，理论深度有限。线性可加性的强假设、对离散标签的依赖，以及实验对比中暴露的某些指标未能超越指令基线的尴尬，都让它更像一次扎实的实证分析报告，而非一锤定音的方法论突破。

📌 **核心摘要**

这篇论文旨在解决现有情感文本转语音（TTS）系统无法生成混合情感和处理文本-情感不匹配语音的问题。作者首次对“语音语言模型（SLM）+ 流匹配”这一混合TTS架构进行了系统性分析，通过交叉条件诊断实验揭示了一个关键发现：情感韵律和表达变异性主要由SLM负责生成，而非流匹配声学模块。基于此洞察，论文提出了一个名为CoCoEmo的轻量级、无需训练的推理时控制框架。该框架在SLM的特定层（由线性探针确定）和操作（主要是注意力输出）处，注入通过配对样本计算的“激活转向向量”，从而实现对生成语音情感的解耦和灵活控制。该方法支持通过线性组合单情感向量来实现对混合情感比例的量化控制，并能将声学表达与文本语义分离，处理文本-情感不匹配的场景。此外，论文还提出了一套利用多标注者标注分歧作为“软真实值”的混合情感评估协议。在CosyVoice2和IndexTTS2两个骨干模型，以及ESD、RAVDESS、CREMA-D、IEMOCAP数据集上的实验证明，CoCoEmo能有效控制情感表达，尤其在混合情感的量化排名相关性（Spearman's ρ）和高度文本-情感不匹配场景下的情感保真度上表现突出，同时能保持较好的说话人相似度和可懂度。

📄 [OpenReview](https://openreview.net/forum?id=wW2LIHSCfw)

---

### 72. [Scaling Transformers for End-to-End Discrete Audio Tokenization](/audio-paper-digest-blog/posts/2026-07-04-scaling-transformers-for-end-to-end-discrete)

✅ **7.1/10** | 前50% | #音频编码 | 创新 1.4/2 | 严谨 1.3/1.5 | 实验 1.3/1.5 | 影响 1.2/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Yitian Gong（复旦大学、上海创新研究院、MOSI Intelligence）
- 通讯作者：Xipeng Qiu（复旦大学、上海创新研究院、MOSI Intelligence）
- 作者列表：Yitian Gong、Kuangwei Chen、Zhaoye Fei、Xiaogui Yang、Ke Chen、Yang Wang、Kexin Huang、Mingshu Chen、Ruixiao Li、Qinyuan Cheng、Shimin Li、Xipeng Qiu

💡 **毒舌点评**

TAC 把 ConvNet、预训练编码器、语义蒸馏这些被社区用了好几年的“拐杖”全扔掉，用一套纯因果 Transformer 从零开始联合优化所有模块，重建质量和下游任务效果确实能打。但“统一可扩展接口”的口号，在代码、模型、数据全部闭源面前，听起来更像是为自家闭源生态写的一份白皮书。另外，靠着碾压同行的内部数据量去比公开数据训出来的模型，然后说架构更好——这种“降维打击”，审稿人心里是不会给足创新分和公平性分的。

📌 **核心摘要**

1. 要解决的问题：为自回归音频语言模型设计一个统一、可扩展、流式的离散音频分词器，避免现有方法因依赖预训练编码器、语义蒸馏、CNN 归纳偏置带来的扩展瓶颈和训练-推理不一致性。
2. 方法核心：提出 TAC，一个完全端到端的纯因果 Transformer 音频分词器，将编码器、32层 RVQ、解码器、多尺度/多周期判别器、以及一个用于语义对齐的 0.5B 解码器 LLM 置于统一损失函数下联合训练，从原始 24kHz 波形直接得到低帧率（12.5 Hz）、可变比特率的离散 token。
3. 与已有方法相比的新意：彻底去除 CNN 模块和预训练编码器，采用完全同构的 Transformer 架构并以此为基础研究联合缩放规律。同时提出 Progressive Sequence Dropout 策略，使得单个自回归 TTS 模型首次能在不同推理码率下无缝切换，无需重新训练。
4. 主要实验结果：
   - 重建质量：在 LibriSpeech、AISHELL-2、AudioSet、MUSDB 上，TAC 在 750-4000 bps 多个码率下的 SIM、STOI、PESQ、Mel-Loss、STFT-Dist. 等指标大幅优于 Encodec、DAC、Mimi、MiMo-Audio-Tokenizer 等主流开源分词器。例如 4 kbps 时 SIM (EN) 达 0.97，PESQ-WB (EN) 达 3.69。
   - 语音合成：基于 TAC 的全自回归 TTS 模型在 Seed-TTS-Eval 上取得 WER 1.89 (EN), CER 1.23 (ZH), SIM 73.1/78.5，首次以纯自回归离散方案超越 MaskGCT、CosyVoice3 等非自回归和级联系统，且支持可变比特率。
   - 语音识别：基于 TAC tokens 的 1.7B LLM-ASR 在 LibriSpeech test-clean 上 WER 为 2.96，AISHELL-2 iOS 上 CER 为 3.44，无需额外音频编码器即具竞争力。
   - 一般音频/音乐：AudioCaps 上生成 FAD 达 8.77，大幅优于 Mimi (13.08) 和 MiMo (13.19)；MusicCaps 上 FAD 为 6.88，亦具竞争力。
5. 实际意义：为构建统一的原生音频基础模型提供了一种可流式、低帧率的离散接口，通过联合缩放实验为后续研究提供了宝贵的经验和可行上限。
6. 主要局限性：模型、代码、训练数据完全闭源，无法复现和公平对比；训练数据规模远大于多数开源基线，性能优势难以纯粹归因于架构创新；纯 Transformer 流式推理延迟较高（单帧约 105ms），可能在强实时交互场景受限。

🔗 **开源详情**

-   代码：未提及。
-   模型权重：未提及。
-   训练数据集：未公开。
-   评估数据集：使用公开数据集如 LibriSpeech、AISHELL-2、AudioSet、MUSDB 等。
-   Demo：未提及。
-   引用的开源项目：论文附录 B 和 E 中列出了用于对比的基线分词器和TTS系统的链接，如 UniSpeech、Encodec、Mimi、XCodec2.0 等（详见原文），但均非论文本身的贡献。

📄 [OpenReview](https://openreview.net/forum?id=icMRkTnuU7)

---

### 73. [Query-Based Asymmetric Modeling with Decoupled Input–Output Rates for Speech Restoration](/audio-paper-digest-blog/posts/2026-07-04-query-based-asymmetric-modeling-with-decoupled)

✅ **7.1/10** | 前50% | #语音增强 | 创新 1.4/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 影响 1/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Ui-Hyeop Shin (Sogang University, Department of Electronic Engineering)
- 通讯作者：Hyung-Min Park (Sogang University, Department of Electronic Engineering / Department of Artificial Intelligence)
- 作者列表：Ui-Hyeop Shin, Jaehyun Ko, Woocheol Jeong, Hyung-Min Park (均来自 Sogang University)

💡 **毒舌点评**

论文在“解耦输入输出采样率”这一问题上的定义干净，非对称编码器-解码器与频率扩展查询的设计动机清晰，实验覆盖度也属同类工作的上乘。但损失函数的设计（尤其是缩放 log1p）依赖对误差分布的经验观察，缺乏更深入的理论支撑，使得这部分工作显得更像是工程技巧的堆砌。在关键的SOTA声明上较为保守，模型在纯去噪等传统任务上未能超越专用模型，距离真正推动范式迁移尚有距离。未提供代码和模型权重，对社区的直接影响存疑。

📌 **核心摘要**

1. 论文解决语音恢复中一个被忽视的问题：输入与输出采样率可以不一致（例如低带宽输入重建高带宽语音），而传统方法通常假设速率匹配并进行冗余重采样。作者将此设定形式化为扩展采样频率独立（xSFI）设置。
2. 方法核心是 TF-Restormer，一种基于 Transformer 双路径结构的非对称编码器-解码器模型。通过可学习的“扩展查询”在解码器中利用带分割交叉注意力（band-partitioned cross-attention）补充缺失的高频带，实现了仅在输入带宽上进行计算密集型分析，而在输出带宽上进行轻量级合成的解耦。
3. 相比于以往固定采样率或需重采样的方案，本文首次明确形式化 xSFI 设置，并设计了一种单一模型即可覆盖任意输入-输出采样率对的框架，无需外部重采样或多个速率专用模型。
4. 主要结果：在 UNIVERSE 多样退化集上，离线版 TF-Restormer 的 PESQ 达 2.30，LSD 1.45，UTMOS 4.08，DNSMOS 3.25，均优于多个扩散/声码器基线；在 VCTK+DEMAND 去噪任务上 PESQ 3.41（专用模型可达 3.63）；在语音超分任务上表现与专用超分模型相当或更优，且流式版本保留了大部分性能。
5. 实际意义在于为“统一语音恢复”提供了一个计算适配的框架，支持实时流式推理（<80ms 延时），并能减少因采样率不匹配带来的多模型部署冗余。
6. 主要局限包括：极端退化下可能出现幻觉；对极端不平衡的训练采样率分布（<1%）敏感；仅聚焦单说话人场景，未处理多说话人分离；主观评价需进一步补充正式的听感测试；未提供代码和模型。

🔗 **开源详情**

- 代码：论文中未提供代码链接。作者在影响声明中提及“将应用访问控制和预期用途限制并要求法律合规性”。
- 模型权重：论文中未提及。
- 数据集：论文使用了多个公开数据集用于训练和评估，包括：VCTK-0.92 (https://datashare.ed.ac.uk/handle/10283/3443)、DNS Challenge 2020 (https://github.com/microsoft/DNS-Challenge)、DEMAND (https://zenodo.org/records/1227121)、URGENT 2025 Challenge数据、VoxCeleb1 (https://www.robots.ox.ac.uk/~vgg/data/voxceleb/)、REVERB Challenge (https://reverb2014.dereverberation.com/) 以及RWCP、AIR等噪声与房间脉冲响应库，但论文未提供上述数据集的重新分发地址或定制合成数据的直接下载链接。
- 复现材料：论文在附录A提供了详细的训练配置和模型架构，但未提供单独的复现材料（如预训练日志或检查点）的下载地址。
- 论文中引用的开源项目：包括 WavLM, DNSMOS, UTMOS, NISQA, SpeechBERTScore 等。

📄 [OpenReview](https://openreview.net/forum?id=nzE9Ck5oLe)

---

### 74. [OmniSIFT: Modality-Asymmetric Token Compression for Efficient Omni-modal Large Language Models](/audio-paper-digest-blog/posts/2026-07-04-omnisift-modality-asymmetric-token-compression)

✅ **7.1/10** | 前50% | #音视频问答 | 创新 1.2/2 | 严谨 1/1.5 | 实验 1.2/1.5 | 影响 0.7/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者（共一）：Yue Ding（中国科学院自动化研究所模式识别国家重点实验室；快手科技Kling团队）与 Yiyan Ji（南京大学）
- 通讯作者：Qiang Liu（中国科学院自动化研究所模式识别国家重点实验室）
- 作者列表：Yue Ding（中科院自动化所；快手科技）、Yiyan Ji（南京大学）、Jungang Li（香港科技大学（广州））、Xuyang Liu（四川大学）、Xinlong Chen（中科院自动化所）、Junfei Wu（中科院自动化所）、Bozhou Li（北京大学）、Bohan Zeng（北京大学）、Yang Shi（北京大学）、Yushuo Guan（快手科技）、Yuanxing Zhang（快手科技）、Jiaheng Liu（南京大学）、Qiang Liu（中科院自动化所）、Pengfei Wan（快手科技）、Liang Wang（中科院自动化所）

💡 **毒舌点评**

这篇论文的“视觉先行、再引导音频”两阶段压缩，直觉干净，实验也漂亮——35% tokens就能战平甚至略超 full-token baseline，效率提升显著。但自信别太早：核心实验全在 Qwen2.5-Omni 上跑，换到 Qwen3-Omni 马上掉点（DailyOmni 70.5 vs. 70.8 full），说明方法的普适性没那么神。STVP 那套“按位置算余弦距离就当时间显著性”的操作，本质上仍在像素级做差分，真正的物体运动、遮挡这些时序动态它根本没建模，却好意思标榜“temporal redundancy”处理。Chunk 级剪枝更是直接摆烂，跨 chunk 长程依赖直接放弃，这可是 long-form 理解的基本盘。想法好、工程值钱，但别急着说自己是范式开创者。

📌 **核心摘要**

本文瞄准 Omni-LLM 处理音视频时因 token 序列过长导致的计算瓶颈，提出模态非对称压缩框架 OmniSIFT。其核心直觉是：人类感知中视觉主导，音频重要性高度依赖视觉语义锚点——因此应先压缩视频以提取视觉主干，再以此引导音频 token 的筛选。方法分两阶段：(1) 空时视频剪枝模块（STVP）在 2 秒 chunk 内，利用帧内余弦距离（空间显著性）和帧间对应位置余弦距离（时间显著性）分别打分，独立剪除冗余的视觉 patch；(2) 视觉引导音频选择器（VGAS）用单层交叉注意力让压缩后的视觉 token 指导音频 token 的显著性评分，并通过直通估计器（STE）实现离散选择操作的可微优化，从而端到端训练。整个过程仅增加 4.85M 参数。在 Qwen2.5-Omni-7B 上，保留 35% tokens 时，OmniSIFT 在 WorldSense（50.0 vs. full-token 49.7）、DailyOmni（73.2 vs. 72.2）等多个基准上持平或超越 full-token 基线；即使在 25% 极端压缩下，性能依然稳健，远超 OmniZip 等训练免费方案。推理延迟和 GPU 内存也有超 40% 的削减。主要局限是 STVP 仅处理 chunk 内时序，跨 chunk 长程冗余未建模，且实验仅在 Qwen 系列模型上开展。

🔗 **开源详情**

- 代码：https://github.com/dingyue772/OmniSIFT（论文声明可用，但未确认仓库内容完整性）
- 模型权重：论文未提及
- 数据集：训练基于 AVoCaDO SFT 数据集（参考 Chen et al., 2025b），未提供下载链接或详细统计；评测使用 Video-MME、DailyOmni、WorldSense、OmniVideoBench、video-SALMONN-2 五个公开基准
- Demo：未提及
- 复现材料：除代码仓库外，未提供预训练检查点、训练日志或除附录 B 超参之外的附加材料。附录 B 给出了输入采样率、分辨率等配置。

📄 [OpenReview](https://openreview.net/forum?id=aPnQpmwHW7)

---

### 75. [Sparse Autoencoders for Interpretable Emotion Control in Text-to-Speech](/audio-paper-digest-blog/posts/2026-07-04-sparse-autoencoders-for-interpretable-emotion)

✅ **7.0/10** | 前50% | #语音合成 | 创新 1.2/2 | 严谨 1.2/1.5 | 实验 1.1/1.5 | 影响 0.9/1.5 | 开源 0.2/1.5

👥 **作者与机构**

- 第一作者：Hongfei Du（威廉玛丽学院计算机系）
- 通讯作者：Ye Gao（威廉玛丽学院计算机系）
- 作者列表：Hongfei Du、Jiacheng Shi、Sidi Lu、Gang Zhou、Ye Gao（均来自威廉玛丽学院计算机系）

💡 **毒舌点评**

用SAE在LLM-TTS语义残差流中寻找情感稀疏特征的想法颇具启发性，论证了情感并非单一全局向量偏移，而是少数几个潜在方向协调作用的结果，构成了本文最核心的分析贡献。但方法高度耦合于IndexTTS2单个骨干，且在特征选择上完全依赖配对情感数据，让“即插即用”的承诺在通用性上打了折扣；缺乏与最新激活转向工作（如EmoSteer-TTS）的直接对比，也让SOTA声明略显仓促。

📌 **核心摘要**

本文针对LLM-based TTS系统情感控制缺乏可解释性的问题，提出利用稀疏自编码器（SAE）在语义骨干中学习并调控情感相关稀疏特征。核心管线的第一步是在冻结的TTS骨干（IndexTTS2）上训练一个过完备的Top-k SAE（维度1280→4096→1280, k=32），将残差流中稠密的隐状态分解为可解释的稀疏特征激活。第二步，在离线分析阶段，通过对齐文本和说话人音色，构建配对的中性-情感样本，并基于提出的句子级情感选择性评分（emotion selectivity score，简化为配对激活频率差），可靠地筛选出与目标情感高度相关的Top-m个潜在特征。

推理时，仅需通过一个统一的、可正可负的缩放因子 αₑ 来控制该稀疏特征集的激活水平，经SAE解码器重构后，即可在无需修改骨干参数的前提下实现双向情感控制——正向诱导目标情感，负向抑制情感向中性回归。声学层面验证表明，这些稀疏特征能够系统性地关联于基频（F0+23Hz）、频谱质心等局部声学属性。

在IndexTTS2上的受控实验（配对生成100个测试案例）表明，SAE-Emotion在愤怒、开心、悲伤三个情感诱导任务上Emo-SIM达0.912/0.885/0.880，略优于或持平全局转向基线（Global Steering），并在情感抑制任务上取得最佳Emo-SIM（0.939/0.924/0.941）。人类评估中，SAE-Emotion情感准确度（EMOS: 3.22）和自然度（NMOS: 3.49）均优于两种内部基线。主要局限在于全部分析仅基于单一TTS骨干，特征识别受配对数据约束，且未开源核心代码或模型，限制了结论的可复现性和推广边界。

| 方法 (Method) | Anger Emo-SIM↑ | Anger WER↓ | Anger Spk-SIM↑ | Happiness Emo-SIM↑ | Happiness WER↓ | Happiness Spk-SIM↑ | Sadness Emo-SIM↑ | Sadness WER↓ | Sadness Spk-SIM↑ |
|---------------|----------------|------------|----------------|--------------------|----------------|--------------------|------------------|--------------|------------------|
| VALL-E-X      | 0.831          | 3.1        | 0.302          | 0.697              | 5.3            | 0.320              | 0.869            | 7.8          | 0.352            |
| Spark-TTS     | 0.857          | 2.7        | 0.488          | 0.770              | 8.6            | 0.463              | 0.907            | 2.3          | 0.523            |
| EmoVoice      | 0.806          | 4.1        | 0.358          | 0.728              | 3.4            | 0.342              | 0.850            | 4.0          | 0.386            |
| CosyVoice     | 0.813          | 3.9        | 0.569          | 0.712              | 2.9            | 0.597              | 0.799            | 2.4          | 0.605            |
| Random SAE    | 0.892          | 1.4        | 0.628          | 0.813              | 6.0            | 0.461              | 0.858            | 1.7          | 0.637            |
| Global Steering| 0.910          | 0.1        | 0.552          | 0.879              | 4.0            | 0.495              | 0.876            | 1.9          | 0.516            |
| SAE-Emotion   | 0.912      | 0.3        | 0.569          | 0.885          | 2.2            | 0.515              | 0.880        | 1.5          | 0.481            |

情感抑制 (Target → Neutral) 结果：

| 方法 (Method) | Anger Emo-SIM↑ | Anger WER↓ | Anger Spk-SIM↑ | Happiness Emo-SIM↑ | Happiness WER↓ | Happiness Spk-SIM↑ | Sadness Emo-SIM↑ | Sadness WER↓ | Sadness Spk-SIM↑ |
|---------------|----------------|------------|----------------|--------------------|----------------|--------------------|------------------|--------------|------------------|
| Random SAE    | 0.841          | 0.8        | 0.342          | 0.886              | 2.14           | 0.343              | 0.939            | 0.77         | 0.427            |
| Global Steering| 0.915          | 2.6        | 0.392          | 0.920              | 1.48           | 0.379              | 0.933            | 1.63         | 0.436            |
| SAE-Emotion   | 0.939      | 2.8        | 0.374          | 0.924          | 2.31           | 0.301              | 0.941        | 0.80         | 0.441            |

🔗 **开源详情**

- 代码：论文未提及代码链接，无法获取。
- 模型权重：论文未提及模型权重，无法获取。
- 数据集：论文使用了两个数据集：（1）IEMOCAP情感语音数据集（作为参考音频源）；（2）作者为SAE训练和分析专门使用IndexTTS2生成的合成数据集。两者均未说明是否公开。
- Demo：论文仅在首页脚标注“§ GitHub-Demo”，但文中未给出具体链接或说明。
- 复现材料：附录B给出了部分训练超参数，但未提供任何可执行的脚本、配置文件或预训练模型。
- 论文中引用的开源项目：
  - VALL-E-X: https://github.com/Plachtaa/VALL-E-X
  - Spark-TTS: https://github.com/SparkAudio/Spark-TTS
  - EmoVoice: https://github.com/yanghaha0908/EmoVoice
  - CosyVoice: https://github.com/FunAudioLLM/CosyVoice

### 标签
#语音合成 #语音情感识别 #大语言模型 #可解释性 #零样本
主任务标签：#语音合成
主方法标签：#大语言模型
补充标签：#语音情感识别 #可解释性 #零样本

📄 [OpenReview](https://openreview.net/forum?id=Hbt2ryJgz2)

---

### 76. [The Silent Thought: Modeling Internal Cognition in Full-Duplex Spoken Dialogue Models via Latent Reasoning](/audio-paper-digest-blog/posts/2026-07-04-the-silent-thought-modeling-internal-cognition-in)

✅ **7.0/10** | 前50% | #知识蒸馏 | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 影响 0.9/1.5 | 开源 0.1/1.5

👥 **作者与机构**

- 第一作者：Donghang Wu（Nanyang Technological University, College of Computing and Data Science）
- 通讯作者：Chen Chen（Nanyang Technological University, College of Computing and Data Science）
- 作者列表：Donghang Wu（Nanyang Technological University）、Tianyu Zhang（Mila, Quebec Artificial Intelligence Institute, Université de Montréal）、Yuxin Li（Nanyang Technological University）、Hexin Liu（Nanyang Technological University）、Chen Chen（Nanyang Technological University）、Eng Siong Chng（Nanyang Technological University）、Yoshua Bengio（Mila, Quebec Artificial Intelligence Institute, Université de Montréal）

💡 **毒舌点评**

本文巧妙地将连续空间中的“隐式推理”概念迁移到全双工语音对话模型，用 ELBO 和全局专家蒸馏优雅地解决了“边听边想”的标注难题，在推理类任务上的涨点证明了隐式计算的潜力。但硬伤同样刺眼：一是所有 SFT 和评估均在自建合成数据上闭环完成，严重缺乏公开基准（如 Fisher、DailyTalk）上的通用语音交互结果，模型的真实场景泛化性完全未知；二是在同等数据条件下与显式 CoT 方法的直接对比缺失，其宣称的“优于显式 CoT”更像是修辞而非经过实验证实的结论。此外，声称“零额外推理延迟”，却在全文中看不到任何具体的延迟或计算量分析，这一核心优势远未得到量化。泛化能力、可解释性、以及宣称优势的可信度，构成了这篇论文的三大阿喀琉斯之踵。

📌 **核心摘要**

1. 本文旨在解决全双工语音对话模型（SDLMs）在“聆听”用户时的感知空窗期问题，让模型能在持续接收流式语音的同时进行隐式推理，以生成更高质量的回复。
2. 方法核心是提出一个名为 FLAIR 的框架，将并行思考过程建模为隐变量推理问题；训练时，使用一个非因果的全局专家模型提供“理想”隐状态的后验近似，并通过基于 ELBO 的损失函数进行监督蒸馏，迫使因果 SDLM 学会在听的过程中不断更新连续的隐式思维向量。
3. 与需要构造显式文本思维链（CoT）或仅填充静音令牌的传统全双工模型相比，FLAIR 的创新之处在于完全摆脱了对显式推理标注数据集的依赖，并且从原理上保证了推理过程的因果性，不引入新的文本生成延迟。
4. 在自建合成数据训练下，与无隐式推理的全双工基线相比，FLAIR 在多个问答基准上有明显提升（如 Llama Questions 从 73.0% 升至 78.0%，MMSU 从 50.2% 升至 56.2%），并在全双工行为指标（如 Turn-taking latency 0.39s, Barge-in success rate 100%）上保持了竞争力。
5. 该工作的意义在于为全双工语音交互系统提供了一种更高效的“认知”架构，使语音助手能“未雨绸缪”，提升复杂问题的回答质量和对话的自然度。
6. 主要局限性是其训练和评估完全依赖大规模合成数据集，对真实声学场景和未见域的泛化能力存疑；同时，隐式推理过程缺乏可解释性，如同一个黑箱认知模块。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及模型权重链接。
- 数据集：论文中提到使用了多个公开数据集用于数据合成和评估，包括 Fisher、LibriTTS、YODAS、Hifi-TTS、Freesound、MUSAN、CANDOR 等。但核心的自定义大规模合成数据集（530K小时续写、70K小时指令QA、20K小时ASR-QA）并未公开，作者仅通过一个 LinkedIn 帖子引用其构建流程。
- Demo: 未提及。
- 复现材料：附录 C、D、E 提供了数据合成流程、模型参数配置（$\alpha=3, \beta=5$，学习率 5e-5，64 A800 GPU 等）、架构选择以及训练阶段的详细说明。但因为核心数据未开源，完整复现全文实验结果几乎不可能。
- 论文中引用的开源项目：
  *   NeMo Toolkit: https://github.com/NVIDIA/NeMo
  *   Qwen2.5-7B-Instruct: https://huggingface.co/Qwen/Qwen2.5-72B-Instruct (论文引用链接为72B版本)
  *   Moshi: https://github.com/kyutai-labs/moshi
  *   CosyVoice 2: https://github.com/FunAudioLLM/CosyVoice
  *   Whisper-large-v3: https://github.com/openai/whisper
  *   其余公开数据集链接与已有分析一致。

📄 [OpenReview](https://openreview.net/forum?id=jzUCodmd4C)

---

### 77. [Hidden in Plain Tokens: Simply Robust, Gradient-Free Watermark for Synthetic Audio](/audio-paper-digest-blog/posts/2026-07-04-hidden-in-plain-tokens-simply-robust-gradient)

✅ **7.0/10** | 前50% | #音频水印 | 创新 1.2/2 | 严谨 1/1.5 | 实验 1.1/1.5 | 影响 0.9/1.5 | 开源 0.8/1.5

👥 **作者与机构**

- 第一作者：Georgios Milis（马里兰大学帕克分校计算机科学系）
- 通讯作者：Heng Huang（马里兰大学帕克分校计算机科学系，heng@umd.edu）
- 作者列表：Georgios Milis、Yubin Qin、Yihan Wu、Heng Huang（均来自马里兰大学帕克分校计算机科学系）

💡 **毒舌点评**

用图社区发现来减轻重标记化误差的思路确实精简，将水印检测提升了好几个数量级，且全程无需梯度，黑盒友好。但对时间篡改（裁剪、变速）几乎束手无策，且音乐生成任务下 FAD 明显劣于无扰动基线；实验缺少与主流后置水印的直接对标，使“SOTA”声明缺少横向参照。

📌 **核心摘要**

1. 要解决的问题：自回归音频生成模型在推理时嵌入的 token 级水印，因音频重编码时产生严重“重标记化错误”（token mismatch），导致统计水印信号严重衰减，传统方案依赖微调码本，破坏了零训练成本优势。
2. 方法核心：利用重标记化混淆矩阵构建关系图，通过莱顿社区发现算法将频繁互混的码本 token 聚合成稳定的“语义簇”，然后在簇层级执行 KGW 红绿列表水印，使水印对重编码误差不变。
3. 新在何处：首次将社区检测用作词汇蒸馏手段来提升连续模态的 token 级水印鲁棒性，完全无需梯度、无需微调码本，并给出了统计期望 z 分数的理论分析。
4. 主要实验结果：
   - 在 Moshi 对话模型上，h=0 时 Ours 的 -log(p) 达 42.47（Base 为 8.51），低 FPR 下 TPR 比基线高出数个数量级。
   - 鲁棒性测评（表 2）：对低通、MP3 等变换 -log(p) 仍保持 20 以上，而对裁剪/变速明显下降。
   - 音质指标：FAD（VGGish/CLAP）和 MOS 与未加水印的生成音频差异不大，未造成显著失真；但在 MusicGen 上 FAD 劣化明显（VGGish 0.247→1.256）。
   - TTS 拓展（表 3-4）：在 CosyVoice3 与 Spark-TTS 上同样大幅提升 -log(p) 至 13.93 和 17.81，且 ASR 错误率基本持平。
5. 实际意义：为音频生成模型提供了一种轻量、无需白盒访问的强鲁棒水印方案，适合快速集成到已有声码器或 TTS 流水线中，有助于内容溯源与治理。
6. 主要局限性：对裁剪、速度变化等时间域攻击高度敏感；需要针对每一款码本收集重标记化数据并重新聚类，适配成本不可忽略；音乐生成场景下 FAD 明显劣化，表明聚类可能扭曲码本分布。

🔗 **开源详情**

- 代码：https://g-milis.github.io/projects/nograd-audio-wm.html （项目页面包含代码和音频样本，论文正文未提供独立仓库链接）
- 模型权重：未提及
- 数据集：论文使用多个公开数据集，包括 LibriSpeech (https://www.openslr.org/12)、MusicCaps (https://www.kaggle.com/datasets/googleai/musiccaps)、Free Music Archive (FMA, https://github.com/mdeff/fma)、LibriTTS (https://www.openslr.org/60)，以及自建的短音乐描述数据集（通过随机打乱描述性词汇生成，未公开链接）。数据集获取方式均按原引用论文说明。
- Demo：项目页面提供音频样本（https://g-milis.github.io/projects/nograd-audio-wm.html），未提供在线交互式演示
- 复现材料：论文附录 (Appendix E) 给出了完整的实验超参数、聚类配置与攻击设置；代码安装与运行指南需参见项目页面
- 论文中引用的开源项目：
  * Moshi (kyutai-labs/moshi): https://github.com/kyutai-labs/moshi
  * MusicGen / AudioCraft (facebookresearch/audiocraft): https://github.com/facebookresearch/audiocraft
  * EnCodec (facebookresearch/encodec): https://github.com/facebookresearch/encodec
  * SpeechTokenizer (ZhangXInFD/SpeechTokenizer): https://github.com/ZhangXInFD/SpeechTokenizer
  * FaCodec (PlasticityLab/FaCodec): https://github.com/PlasticityLab/FaCodec
  * DAC (descriptinc/descript-audio-codec): https://github.com/descriptinc/descript-audio-codec
  * CosyVoice 3: 未见论文提供公开仓库链接，基于引文 Du et al. (2025)
  * Spark-TTS (SparkAudio/Spark-TTS): https://github.com/SparkAudio/Spark-TTS
  * Whisper (openai/whisper): https://github.com/openai/whisper
  * FAD 评估工具 (google-research/fad): https://github.com/google-research/fad
  * NISQA (gabrielmitag/nisqa): https://github.com/gabrielmitag/nisqa
  * DNSMOS: https://github.com/microsoft/DNS-Challenge
  * CLAP (LAION-AI/CLAP): https://github.com/LAION-AI/CLAP

📄 [OpenReview](https://openreview.net/forum?id=h4bSJMaNgb)

---

### 78. [Efficient Distributed MLLM Training with Cornstarch](/audio-paper-digest-blog/posts/2026-07-04-efficient-distributed-mllm-training-with)

✅ **7.0/10** | 前50% | #音视频理解 | 创新 1.2/2 | 严谨 1/1.5 | 实验 0.8/1.5 | 影响 0.5/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Insu Jang（University of Michigan）
- 通讯作者：Insu Jang（University of Michigan）
- 作者列表：Insu Jang（University of Michigan）、Runyu Lu（University of Michigan）、Nikhil Bansal（University of Michigan）、Ang Chen（University of Michigan）、Mosharaf Chowdhury（University of Michigan）

💡 **毒舌点评**

Cornstarch 巧妙地将冻结参数对反向传播的影响量化到流水线划分中，并将负载均衡的粒度从跨 GPU 深入到 GPU 内部计算单元，工程实现扎实。但仅有一种 GPU 型号和合成数据的评测令人对其真实泛化性存疑；且论文聚焦通用多模态系统优化，对音频/语音领域特有挑战着墨甚少，相关工作（如 DistMM、Optimus）的对比也完全缺失，使得该工作在垂直领域的直接参考价值大打折扣。

📌 **核心摘要**

本文提出 Cornstarch，一个面向多模态大语言模型（MLLM）的高效分布式训练框架，旨在解决 MLLM 因模型冻结状态和非因果注意力模式而导致的计算负载不均衡问题。核心方法包括两部分：（1）冻结状态感知的流水线并行，通过递归规则精确计算每层在前向和考虑冻结状态后的反向传播真实耗时，并利用动态规划进行流水线阶段划分以最小化瓶颈；（2）双粒度工作负载均衡的上下文并行，在跨 GPU 层面使用最长处理时间优先（LPT）贪心算法分配 token 块以实现负载均衡，在 GPU 内部则通过将注意力计算进一步细粒度拆分到不同计算单元（CU）执行来消除尾部延迟。在由视觉编码器、音频编码器和 LLM 组合的多种 MLLM 配置的合成数据评测上，Cornstarch 相较 FSDP 和 Megatron-LM 平均实现了 $2.26\times$ 的训练吞吐提升，其中冻结感知流水线并行最高带来 $2.46\times$ 的迭代加速，负载均衡上下文并行在长序列下实现注意力层最高 $1.18\times$ 的加速。该框架为多模态大模型的系统优化提供了可复用的设计范式，但评测仅限于单种 GPU 和合成数据，且与近年其他多模态训练系统（如 DistMM、Optimus）的直接对比缺失。

🔗 **开源详情**

- 代码：https://github.com/cornstarch-org/Cornstarch
- 模型权重：未提及
- 数据集：未提及
- Demo：未提及
- 复现材料：未提及，仅提供代码仓库，未提供训练配置、检查点等可直接复现的材料包。

📄 [OpenReview](https://openreview.net/forum?id=CWisSpoJF9)

---

### 79. [Reasoning LLM Improves Speaker Recognition in Long-form TV Dramas](/audio-paper-digest-blog/posts/2026-07-04-reasoning-llm-improves-speaker-recognition-in)

✅ **7.0/10** | 前50% | - | 创新 1.5/2 | 严谨 1/1.5 | 实验 1.1/1.5 | 影响 0.8/1.5 | 开源 0.3/1.5

👥 **作者与机构**

- 第一作者：Yuxuan Li（清华大学）、Lingxi Xie（华为公司）（\*同等贡献）
- 通讯作者：Lingxi Xie（华为公司）、Qi Tian（华为公司、广东省人工智能与数字经济实验室（深圳））
- 作者列表：Yuxuan Li（清华大学）、Lingxi Xie（华为公司）、Xinyue Huo（华为公司）、Jihao Qiu（中国科学院大学）、Jiacheng Shao（华为公司）、Pengfei Chen（华为公司）、Jiannan Ge（华为公司）、Kaiwen Duan（华为公司）、Qi Tian（华为公司、广东省人工智能与数字经济实验室（深圳））

💡 **毒舌点评**

本文为长剧集说话人识别这个复杂但略小众的任务贡献了大规模基准和基于推理LLM的Agent解决方案，工程框架和实验设计都比较完善。但光彩照人之处多在工程层面：核心方法本质上是已有模型和工具的熟练组合，虽通过GRPO让LLM学会了工具调度的时机，对“为何如此调度”的机理洞察却比较有限。此外，评价协议中对多说话人台词的处理颇为讨巧，这在一定程度上遮掩了模型在真实重叠语音中的根本短板，而且离线蒸馏数据的成本与可复现性问题也是隐忧。

📌 **核心摘要**

1. 问题：长剧集说话人识别（SR）要求在数十到上百个角色构成的候选池中，为每句台词准确标注说话人身份。与标准说话人日志（SD）不同，此任务需融合听觉、视觉和语言线索，以应对短时语音特征不可靠、说话人不在画面中、高角色密度等复杂情况。
2. 方法核心：首先基于声纹嵌入和“视觉锚点”假设（说话人会在台词时间戳附近出现），进行标签传播（Label Propagation）获得初始伪标签。然后训练一个基于Qwen3-8B的推理大模型（DramaSR-LRM），使其能在推理过程中自主调用三个工具——`voice_sim`（声纹相似度）、`video_cap`（层级化视频描述）、`char_relation`（角色关系图谱），进行多证据链式推理（CoT），最终输出修正后的说话人标注。
3. 与已有方法的新颖之处：将长剧集说话人识别重新定义为Agent式的多工具推理任务，让模型学习在声学确定性低时主动寻求视觉和关系证据，而非仅做声学匹配。通过GRPO强化学习，模型在“何时信任何种证据”这个策略上得到了优化，这一点在极短台词上的显著提升中得到了体现。
4. 主要实验结果：在自建的DramaSR-532K基准的11部测试剧集（428K句台词）上，DramaSR-LRM（带置信度采样）较标签传播基线实现绝对准确率提升2.30%（85.49% $\rightarrow$ 87.79%）。尤其在极短台词（<0.5秒）上提升9.20%，在Lost剧集上提升5.16%。
5. 实际意义：为长视频内容理解提供了可落地的高精度说话人标注工具，能直接改善下游视频摘要和QA任务的性能；DramaSR-532K基准本身也填补了该领域大规模评测资源的空白。
6. 主要局限性：评价协议对多说话人台词处理过于乐观；训练高度依赖闭源大模型Gemini-3-Pro生成的CoT数据，可复现性存疑；方法依赖精确的字幕和时间戳，无法端到端处理原始音频；视觉锚点假设限制了其对全程画外音旁白的识别能力。

🔗 **开源详情**

*   代码：链接为 https://www.github.com/198808xc/DramaSR-LRM，但目前为无效占位符，无代码。
*   模型权重：论文中未提及会发布模型权重。
*   数据集：DramaSR-532K声称将公开，但未提供独立的获取链接或托管平台。
*   Demo：论文中未提及。
*   复现材料：论文中未提及。
*   论文提及的开源项目（未提供直接链接）：ERes2Net, pyannote, Qwen系列模型, vLLM, CLIP, PaddleOCR, InsightFace, 3D-Speaker toolkit, BAAI bge等。

📄 [OpenReview](https://openreview.net/forum?id=h3TLVeukMA)

---

### 80. [Real-World Unsupervised Models Generalize to Predict Brain Responses to Out-of-Distribution Stimuli](/audio-paper-digest-blog/posts/2026-07-04-real-world-unsupervised-models-generalize-to)

✅ **6.9/10** | 前50% | #模型评估 | 创新 1.3/2 | 严谨 1/1.5 | 实验 1.3/1.5 | 影响 1/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Chenggang Chen（约翰霍普金斯大学生物医学工程系）
- 通讯作者：Chenggang Chen（约翰霍普金斯大学生物医学工程系）
- 作者列表：Chenggang Chen（约翰霍普金斯大学生物医学工程系）、Zhiyu Yang（约翰霍普金斯大学生物医学工程系）、Xiaoqin Wang（约翰霍普金斯大学生物医学工程系）

修正说明：原文作者名单中，所有三位作者均归属于同一机构（约翰霍普金斯大学生物医学工程系），使用数字上标“1”标注。原分析中重复标注机构的方式已修正。

💡 **毒舌点评**

本文以扎实的实验论证了“真实世界数据+无监督学习”对脑反应预测的碾压级优势，跨模态OOD泛化令人印象深刻，且逻辑链条清晰。但作为顶会spotlight，方法原创性偏弱——本质是对已有无监督模型的组合与评估，缺少新算法或理论洞见；关键的贡献仅停留在“数据分布最重要”的benchmark结论层面，若不能在后续给出可操作的模型设计原则或理论解释（为何真实世界统计特性如此关键），其影响力将随模型迭代而快速衰减。视觉部分的架构混杂问题削弱了论证力度，整体仍是一篇优秀但未达卓越的验证性工作。

📌 **核心摘要**

本文旨在回答“什么样的训练数据和目标能让深度神经网络更准确地预测大脑感觉皮层的反应”。作者提出，模型的生态效度关键在于训练数据的真实世界统计特性（而非架构或规模），且无监督目标更符合生物学习的约束。方法上，系统比较了19个听觉模型（包括HuBERT、Wav2Vec2等无监督模型，以及多种监督模型）在人类听觉皮层的两个fMRI数据集上的预测表现，同时将分析延伸至视觉皮层（婴儿视角视频训练的ResNeXt）。核心新意在于显式地解耦数据分布、学习目标和架构的贡献，并首次展示无监督真实世界模型对OOD刺激的跨语种/跨域泛化能力。主要结果：在听觉皮层预测上，基于真实多场景普通话训练的HuBERT_speech和Wav2Vec2_speech在NH2015数据集上分别达到0.773和0.743的噪声校正解释方差，比之前的最佳监督模型（CochResNet50-MultiTask, 0.729）提升6%和1.9%；在视觉皮层，婴儿视角无监督模型在Brain-Score上领先第二名（swin-small）47%以上，且camSAY-ResNeXt（0.249-0.259）与大规模ID评估的DINOv2/v3模型（0.251-0.262）分数相当，尽管其训练数据规模远小且为OOD评估。实际意义在于为神经科学计算建模提供了“数据分布 > 监督信号”的明确证据，并暗示真实环境的噪声、长尾分布和高动态范围可能是获得类脑表征的关键归因偏置。主要局限是评价指标仍限于相关性和预测对齐而非因果机制，且未在多种母语/文化背景下验证。

🔗 **开源详情**

- 代码：论文中未提及本研究相关的独立代码仓库链接。
- 模型权重：
  - HuBERT_speech 与 Wav2Vec2_speech（在 WenetSpeech 上预训练的 Base 版本）：https://huggingface.co/TencentGameMate
  - HuBERT_LS（LibriSpeech 预训练）：https://huggingface.co/facebook/hubert-base
  - Wav2Vec2_LS（LibriSpeech 预训练）：https://huggingface.co/facebook/wav2vec2-base
  - HuBERT_core (AVES-core)：https://github.com/earthspecies/aves
  - camSAY 模型（婴儿视角预训练）：https://github.com/eminorhan/baby-vision
  - 其他公开模型（AST、VGGish、S2T、Wav2Vec2FT、CochCNN9/ResNet50 等）的权重可从各自原始项目获取（见下方开源项目列表），论文未直接给出这些模型的独立权重文件链接。
- 数据集：
  - WenetSpeech：https://wenet-e2e.github.io/WenetSpeech/
  - LibriSpeech：http://www.openslr.org/12
  - FSD50k：https://zenodo.org/record/4060432
  - AudioSet：https://research.google.com/audioset/
  - YouTube-8M：https://research.google.com/youtube8m/
  - Million Song Dataset：http://millionsongdataset.com/
  - SAYCam：https://saycam.stanford.edu/
  - Word-Speaker-Noise 数据集 (Feather et al., 2019)：论文中未提供公开下载链接。
  - fMRI 数据集 (NH2015, B2021)：分别来自 Norman-Haignere et al. (2015) 与 Boebinger et al. (2021)，可向原始作者索取，论文未提供直接下载链接。
  - Brain-Score 中的视觉 fMRI 数据集（Coggan & Tong, 2023; Bracci et al., 2019）：随 Brain-Score 项目一起分发（见下方）。
- Demo：论文中未提及。
- 复现材料：无统一实验代码或一键复现脚本。
- 论文中引用的开源项目：
  - HuggingFace Transformers：https://github.com/huggingface/transformers
  - Fairseq（S2T, Wav2Vec2 等）：https://github.com/facebookresearch/fairseq
  - AVES（HuBERTcore）：https://github.com/earthspecies/aves
  - Baby Vision（camSAY 模型）：https://github.com/eminorhan/baby-vision
  - AST（Audio Spectrogram Transformer）：https://github.com/YuanGongND/ast
  - VGGish：https://github.com/tensorflow/models/tree/master/research/audioset/vggish
  - Brain-Score：https://github.com/brain-score/brain-score
  - Librosa（音频分析）：https://github.com/librosa/librosa
  - Silero VAD（语音活动检测）：https://github.com/snakers4/silero-vad
  - pyannote.audio（说话人分类）：https://github.com/pyannote/pyannote-audio
  - DNSMOS（语音质量评估）：https://github.com/microsoft/DNS-Challenge
  - TencentGameMate Chinese Speech Pretrain：https://github.com/TencentGameMate/chinese_speech_pretrain

📄 [OpenReview](https://openreview.net/forum?id=H1HHss5Zj4)

---

### 81. [From Talking to Singing: A New Challenge for Audio-Visual Deepfake Detection](/audio-paper-digest-blog/posts/2026-07-04-from-talking-to-singing-a-new-challenge-for-audio)

✅ **6.9/10** | 前50% | #音视频理解 | 创新 1.4/2 | 严谨 1.2/1.5 | 实验 1.3/1.5 | 影响 1/1.5 | 开源 0.2/1.5

👥 **作者与机构**

- 第一作者：Ke Liu（电子科技大学 计算机科学与工程学院 未来媒体研究中心）
- 通讯作者：Jiwei Wei（电子科技大学 计算机科学与工程学院 未来媒体研究中心，mathematic6@gmail.com）
- 作者列表：Ke Liu、Jiwei Wei、Wenyu Zhang、Shuchang Zhou、Ruikun Chai、Yutao Dai、Chaoning Zhang、Yang Yang。所有作者均隶属于电子科技大学计算机科学与工程学院未来媒体研究中心。

💡 **毒舌点评**

论文敏锐地抓住了“说话→唱歌”的域迁移痛点，并构建了首个唱歌头深度伪造数据集SHDF，为社区填补了重要的评估空白。然而，方法论层面新意有限，其面部语义对比学习与差分权重融合的架构本质上是Alpha-CLIP与预训练唇读模型的组合，且手工设定的调制向量显得过于工程化，依赖人工调参，缺少自适应的优雅性。此外，开源信息极为模糊，仅有项目页面但代码、模型权重、数据集下载链接均未明确提供，严重影响了工作的实用参考价值与可复现性。

📌 **核心摘要**

本论文针对现有音视频深度伪造检测方法在“唱歌”场景下性能大幅退化的问题，首次将检测场景从“说话”扩展到“唱歌”。为填补基准空白，作者构建了Singing Head DeepFake（SHDF）数据集，包含2600段真实唱歌视频和3000段由节奏感知生成模型合成的伪造视频。方法上，提出Text-guided Audio-Visual Forgery Detection（T-AVFD）框架，核心是利用Alpha-CLIP与多粒度文本描述进行对比学习，提取泛化的面部真实性模式（FAPL），并通过多模态差分权重学习（MMDWL）动态融合面部语义模式与预训练唇读模型提取的音视频对齐特征。实验在三个说话数据集（AVLips、FKAV、THB）及新提出的SHDF上大幅领先无监督基线，尤其在SHDF上AUC从接近50%的随机水平提升至80.2%，并在多种图像扰动下保持鲁棒性。该工作为音视频伪造检测提供了更具挑战性的评测基准和一种可行的跨场景泛化策略。主要局限性在于检测仍为二分类，缺乏伪造溯源能力，且数据集规模和生成器多样性仍可进一步扩充。

🔗 **开源详情**

- 代码：论文未提供代码仓库链接；项目主页为 https://LiuKe3068LikWix.github.io/SingingHead-DeepFake/
- 模型权重：论文未提及。
- 数据集：Singing Head DeepFake (SHDF) 数据集，项目主页说明将提供真实歌唱视频的YouTube链接，合成视频使用MEMO, Hallo2, EchoMimic生成；但截至论文投稿，未提供可直接下载的数据集压缩包或脚本。
- Demo：未提及。
- 复现材料：论文第5.1节和附录A.3提供了训练配置与部分超参数，但未提供独立的复现脚本、配置文件（如yaml）或训练检查点。
- 论文引用的开源项目：
  - Alpha-CLIP：https://github.com/SunzeY/AlphaCLIP
  - AV-HuBERT (Shi et al., 2022)：https://github.com/facebookresearch/av_hubert
  - MEMO：https://github.com/memoavatar/MEMO
  - Hallo2：https://github.com/fudan-generative-vision/hallo2
  - EchoMimic：https://github.com/BadToBest/EchoMimic
  - DreamTalk：https://github.com/ali-vilab/dreamtalk

📄 [OpenReview](https://openreview.net/forum?id=eZAos1ZGdz)

---

### 82. [OmniShow: Unifying Multimodal Conditions for Human-Object Interaction Video Generation](/audio-paper-digest-blog/posts/2026-07-04-omnishow-unifying-multimodal-conditions-for-human)

✅ **6.9/10** | 前50% | #音视频生成 | 创新 1.2/2 | 严谨 1.3/1.5 | 实验 1.3/1.5 | 影响 0.4/1.5 | 开源 0.2/1.5

👥 **作者与机构**

- 第一作者：Donghao Zhou（香港中文大学）、Guisheng Liu（字节跳动）（共同第一作者）
- 通讯作者：Shilei Wen（字节跳动）、Pheng-Ann Heng（香港中文大学）
- 作者列表：
  - Donghao Zhou（香港中文大学）
  - Guisheng Liu（字节跳动）
  - Hao Yang（字节跳动）
  - Jiatong Li（字节跳动，项目负责人）
  - Jingyu Lin（蒙纳士大学）
  - Xiaohu Huang（香港大学）
  - Yichen Liu（字节跳动）
  - Xin Gao（字节跳动）
  - Cunjian Chen（蒙纳士大学）
  - Shilei Wen（字节跳动）
  - Chi-Wing Fu（香港中文大学）
  - Pheng-Ann Heng（香港中文大学）

💡 **毒舌点评**

论文在工程整合上展现出成熟的工业级执行力，统一通道注入与解耦再联合训练策略切实解决了多模态视频生成的数据异构难题，并贡献了专用于HOIVG的HOIVG-Bench基准。然而，方法内核本质上是对现有技术（通道拼接、线性插值融合、窗口注意力）的高超缝合，缺少方法论层面的本质突破；与级联基线的对比设计合理，但实验部分仍缺乏关键的消融（如融合比例的具体影响、姿态引入阶段的严格对照），且评测只覆盖5秒片段，长视频质量、推理效率与规模化边界均未触及。音频条件的评测仍属视频领域的附属品，门控向量的分析虽有启发性，但距离纯粹的语音/音频社区直接影响有限。若无法公开模型与数据，其复现价值和社区推动力将大打折扣。

📌 **核心摘要**

本文研究“人-物交互视频生成”（HOIVG），目标是同时根据文本、参考图像、音频和姿态序列四类条件合成高质量视频。为此，作者提出第一个统一框架 OMNISHOW，其核心技术包括：1）统一通道级条件注入（Unified Channel-wise Conditioning），将姿态视频（渲染为RGB后经VAE编码）和参考图像以通道拼接方式注入，并引入伪帧重建损失（在伪帧令牌上施加Flow Matching损失）以保持视觉细节；2）门控局部上下文注意力（Gated Local-Context Attention），通过滑动窗口（w=5，步长s=4）打包音频特征、局部掩码注意力（视频帧令牌仅与对应音频窗口中w个令牌交互）以及可学习门控向量（初始化1e-5），实现精确的音视频同步，且门控范数分析指导了音频模块仅插入双流块的架构决策；3）解耦再联合训练策略（Decoupled-Then-Joint Training），先分别在R2V和A2V子任务上训练专用模型，再通过权重插值融合（A2V:R2V=0.6:0.4）并进行联合微调，最后在高质量子集上引入姿态信号进行精调，以充分利用异构数据并防止对强条件信号的过拟合。此外，作者建立了专用于HOIVG评估的HOIVG-Bench基准（135个样本，覆盖文本对齐、参考一致性、音频同步、姿态准确度和视频质量五大维度）。在R2V、RA2V和RP2V设定下，OMNISHOW在面部相似度（R2V下FaceSim 0.874，仅次于Phantom-14B的0.876）、同步分数（RA2V下Sync-C 8.612）、姿态PCK（RP2V下0.460）等指标上取得领先或极具竞争力的结果；在EMTD基准A2V子任务上，OMNISHOW-A2V以Sync-C 6.49排名第一；在与VACE+LatentSync级联基线的对比中，OMNISHOW在全部指标上显著领先；用户偏好研究也验证了其主观优势。主要局限性在于：仅评估5秒片段；极端运动或AI生成测试样本可能引入偏差；未公开模型、数据与逻辑代码。

| 方法 | TA↑ | FaceSim↑ | NexusScore↑ | Sync-C↑ | Sync-D↓ | AKD↓ | PCK↑ | AES↑ | IQA↑ | VQ↑ | MQ↑ |
|------|------|-----------|--------------|----------|----------|------|------|------|------|-----|-----|
| R2V 设定 | | | | | | | | | | | |
| HunyuanCustom (13B) | 7.523 | 0.440 | 0.359 | - | - | - | - | 0.452 | 0.697 | 10.11 | 5.286 |
| HuMo-1.7B | 7.087 | 0.647 | 0.333 | - | - | - | - | 0.441 | 0.723 | 9.76 | 3.406 |
| HuMo-17B | 7.949 | 0.843 | 0.346 | - | - | - | - | 0.448 | 0.726 | 9.97 | 3.685 |
| VACE (14B) | 8.413 | 0.759 | 0.368 | - | - | - | - | 0.457 | 0.722 | 10.72 | 5.442 |
| Phantom-1.3B | 8.342 | 0.708 | 0.351 | - | - | - | - | 0.459 | 0.722 | 10.90 | 5.637 |
| Phantom-14B | 8.609 | 0.876 | 0.366 | - | - | - | - | 0.449 | 0.741 | 10.93 | 5.517 |
| OMNISHOW (Ours, 12.3B) | 7.746 | 0.874 | 0.389 | - | - | - | - | 0.468 | 0.740 | 11.12 | 5.885 |
| RA2V 设定 | | | | | | | | | | | |
| HunyuanCustom (13B) | 7.289 | 0.457 | 0.350 | 6.072 | 10.08 | - | - | 0.439 | 0.715 | 9.15 | 3.658 |
| HuMo-1.7B | 7.489 | 0.575 | 0.329 | 7.234 | 9.117 | - | - | 0.428 | 0.731 | 9.97 | 4.182 |
| HuMo-17B | 8.146 | 0.805 | 0.344 | 8.013 | 8.316 | - | - | 0.439 | 0.739 | 10.27 | 4.269 |
| OMNISHOW (Ours, 12.3B) | 8.093 | 0.810 | 0.369 | 8.612 | 7.608 | - | - | 0.465 | 0.742 | 10.86 | 5.554 |
| RP2V 设定 | | | | | | | | | | | |
| AnchorCrafter (1.5B) | 2.669 | 0.404 | 0.215 | - | - | 0.229 | 0.176 | 0.499 | 0.673 | 8.95 | 4.241 |
| VACE (14B) | 7.690 | 0.600 | 0.352 | - | - | 0.206 | 0.336 | 0.450 | 0.712 | 10.14 | 5.393 |
| OMNISHOW (Ours, 12.3B) | 6.526 | 0.474 | 0.418 | - | - | 0.174 | 0.460 | 0.447 | 0.722 | 10.28 | 4.937 |

| 方法 | IQA↑ | AES↑ | Sync-C↑ | Sync-D↓ |
|------|--------|--------|----------|----------|
| A2V（EMTD 基准） | | | | |
| FantasyTalking | 2.11 | 1.12 | 1.11 | 12.88 |
| HunyuanVideo-Avatar | 1.76 | 1.18 | 4.89 | 9.37 |
| Hallo3 | 2.31 | 1.48 | 4.26 | 10.22 |
| MultiTalk | 2.07 | 1.30 | 6.34 | 8.47 |
| OmniAvatar | 2.16 | 1.31 | 5.40 | 9.13 |
| OMNISHOW-A2V (Ours) | 2.26 | 1.51 | 6.49 | 8.97 |

| 方法 | TA↑ | FaceSim↑ | NexusScore↑ | Sync-C↑ | Sync-D↓ | AKD↓ | PCK↑ | AES↑ | IQA↑ | VQ↑ | MQ↑ |
|------|------|-----------|--------------|----------|----------|------|------|------|------|-----|------|
| RAP2V 级联基线对比 | | | | | | | | | | | |
| Cascaded Baseline (VACE+LatentSync) | 6.885 | 0.591 | 0.341 | 7.016 | 7.823 | 0.198 | 0.340 | 0.417 | 0.709 | 10.05 | 3.911 |
| OMNISHOW (Ours) | 7.134 | 0.645 | 0.353 | 7.699 | 7.674 | 0.172 | 0.478 | 0.424 | 0.725 | 11.06 | 5.880 |

🔗 **开源详情**

- 代码：论文未提及代码链接，未提供复现脚本。
- 模型权重：论文未提及任何模型权重（含检查点）的获取方式。
- 数据集：论文提出 HOIVG-Bench 但未公开获取链接；训练数据完全为内部闭源。
- Demo：项目页面视频演示：https://correr-zhou.github.io/OmniShow/
- 复现材料：论文在附录 A-C 给出了训练数据收集流程、HOIVG-Bench 构建细节和实现细节（如分辨率阶段、序列并行尺寸等），但未提供复现包、检查点或训练脚本。音频特征预提取等策略增加了外部复现的额外门槛。
- 论文中引用的开源项目及版本：
  - PySceneDetect（镜头分割）：https://github.com/Breakthrough/PySceneDetect
  - Wav2Vec 2.0（Baevski et al., 2020）：论文未提供具体代码链接，原文为 arXiv 论文。
  - DWPose（Yang et al., 2023）：论文未提供具体代码链接。
  - ElevenLabs（商业语音平台，非开源）：https://elevenlabs.io/
  - Nano Banana（Google AI 图像生成服务，非开源）：https://ai.google.dev/gemini-api/docs/image-generation

📄 [OpenReview](https://openreview.net/forum?id=uNWexq8gQB)

---

### 83. [E-VAds: An E-commerce Short Videos Understanding Benchmark for MLLMs](/audio-paper-digest-blog/posts/2026-07-04-e-vads-an-e-commerce-short-videos-understanding)

✅ **6.9/10** | 前50% | #音视频问答 | 创新 1.2/2 | 严谨 1.2/1.5 | 实验 1.1/1.5 | 影响 0.4/1.5 | 开源 0.8/1.5

👥 **作者与机构**

- 第一作者：Xianjie Liu（阿里巴巴淘宝天猫集团阿里妈妈技术部，实习期间完成此项工作）
- 通讯作者：Yiman Hu（阿里巴巴淘宝天猫集团阿里妈妈技术部, 项目负责人）、Liang Wu（阿里巴巴淘宝天猫集团阿里妈妈技术部）、Jian Xu（阿里巴巴淘宝天猫集团阿里妈妈技术部）、Bo Zheng（阿里巴巴淘宝天猫集团阿里妈妈技术部）
- 作者列表：
  - Xianjie Liu（阿里巴巴淘宝天猫集团阿里妈妈技术部）
  - Yiman Hu（阿里巴巴淘宝天猫集团阿里妈妈技术部）
  - Liang Wu（阿里巴巴淘宝天猫集团阿里妈妈技术部）
  - Ping Hu（Vin University，未说明具体学院/实验室）
  - Yixiong Zou（华中科技大学，未说明具体学院/实验室）
  - Jian Xu（阿里巴巴淘宝天猫集团阿里妈妈技术部）
  - Bo Zheng（阿里巴巴淘宝天猫集团阿里妈妈技术部）

💡 **毒舌点评**

这篇论文精准切入了一个被顶会圈子长期忽视、却蕴藏巨大商业价值的领域——电商短视频理解。其提出的多模态密度评估框架是整个工作的点睛之笔，为“这任务为什么难”提供了量化的、有说服力的证据。然而，如果说方法部分展现的是专业团队的水准，那么论文呈现的排版质量则近乎草稿级别：严重的文本渲染错乱和表格乱码问题，贯穿全文，这不仅严重损害了专业形象，也让人怀疑作者对细节的态度。更关键的是，对于音频领域的读者而言，本文对语音信号的处理极其“粗暴”——将丰富的人类语言表达（韵律、情感、强调）简化为一串被计数的词汇，这与现代语音/副语言分析的前沿水平存在显著断层。

📌 **核心摘要**

1.  要解决什么问题：主流视频问答基准（如VideoMME）面向通用场景，忽略了以即时转化为导向的电商短视频。这类视频具有目标驱动、多模态信号密集的特点，要求模型不仅能进行基础感知，更需深入理解商业意图，如识别营销逻辑、分析消费者洞察、审查合规风险。
2.  方法核心是什么：论文构建了E-VAds基准，包含3961个淘宝电商高质量短视频及19,785个开放式问答对；并提出了E-VAds-R1推理模型，通过一种名为多粒度组相对策略优化（MG-GRPO）的课程强化学习框架，用极少样本高效训练模型进行复杂的商业推理。
3.  与已有方法相比新在哪里：首次定义了电商短视频理解这一高密度、高商业价值的基准。原创性地提出了视觉动态密度（$V_{den}$）、音频密度（$A_{den}$）和文本密度（$O_{den}$）三个互补指标，从数据层面量化了该领域的难度远超通用视频。在模型层面，提出的MG-GRPO策略通过混合严格、中等、宽松三种评分粒度，有效缓解了开放域商业推理任务中初期探索奖励稀疏的问题，并创造了“专家级精度”的非线性激励。
4.  主要实验结果如何：在其基准上，以Qwen3-VL 8B为基座的E-VAds-R1模型，在严格评分（S）下ALL指标从0.153提升至0.320，相对增益高达109.2%。其在合规性审查（RC）任务上以0.279的得分，大幅超越GPT-5.2（0.105）和Gemini3-Flash（0.222）。但与人类专家（ALL S: 0.535）的差距依然巨大，尤其是在营销逻辑（ML）和消费者洞察（CI）等高层推理任务上。
5.  实际意义是什么：为电商广告的自动化创意分析、内容理解、合规性审核等场景，提供了首个系统性的评估平台和强大的基线模型，具有显著的工业应用潜力。
6.  主要局限性是什么：对音频信息的利用停留在词粒度密度统计，完全忽略了ASR文本背后的韵律、情感、语调等副语言信息，这些是构成广告说服力的关键要素。论文排版存在严重格式错误，严重影响可读性。人类基线仅由400个样本和两名标注员构成，统计稳健性不足。

🔗 **开源详情**

- 代码：论文中明确给出链接 https://github.com/TaobaoTmall-AlgorithmProducts/E-VAds Benchmark （注意URL中包含空格，实际访问需修正），但仓库内容、代码可用性和完整性未经验证。
- 模型权重：论文中未提及是否或何时会公开模型权重。
- 数据集：
  - 数据集名称：E-VAds（E-commerce Video Ads Benchmark）
  - 数据来源：淘宝平台，包含3,961个高质量电商短视频。
  - 数据集规模：19,785个开放域问答对（QA Pairs）。
  - 数据获取方式：通过上述GitHub仓库声明可获得。
  - 数据切分：
    - E-VAds-Test: 3,389个视频，16,384个QA对（含400个人工评估子集）。
    - E-VAds-Train-SFT: 376个视频，1,980个QA对。
    - E-VAds-Train-RL: 196个视频，980个QA对。
- Demo：论文中未提及。
- 复现材料：
  - 模型架构：基于Qwen2.5-VL-7B-Instruct和Qwen3-VL-8B-Instruct的E-VAds-R1模型。
  - 训练细节：使用16块H20 GPU。SFT使用Llama-Factory，batch size=16，学习率1e-6，训练10个epoch。RL使用ROLL框架，batch size=12，学习率1e-6，训练2个epoch。
  - 评估方法：使用Qwen3-Coder-Plus作为LLM-as-a-judge，评分标准为Strict (S), Relaxed-3 (R3), Relaxed-5 (R5)。评测时，GPT-5.2输入48帧，其他模型以2 FPS采样。
  - 附录信息：附录提供了各任务提示词、多智能体角色设定、人工审查界面与流程、LLM Judge评分提示词、推理Prompt模板以及数据分布的详细可视化图谱。
- 论文中引用的开源项目：
  - DINOv3-Base: 用于计算视觉动态密度。
  - Whisper-v3-large: 用于语音转录(ASR)。
  - Qwen2.5-VL: 用于OCR提取及作为基座模型。
  - Qwen3-VL: 作为主要基座模型。
  - Qwen3-Omni: 作为对比基线模型。
  - Qwen3-Coder-Plus: 用作LLM-as-a-Judge评估模型。
  - Llama-Factory: 用于SFT训练。
  - ROLL: 用于RL训练。
  - Gemini 3 Flash / Gemini 3 Pro: 用于多智能体标注系统。

📄 [OpenReview](https://openreview.net/forum?id=IhhgzNZNGW)

---

### 84. [STARCaster: Spatio-Temporal AutoRegressive Video Diffusion for Identity- and View-Aware Talking Portraits](/audio-paper-digest-blog/posts/2026-07-04-starcaster-spatio-temporal-autoregressive-video)

✅ **6.8/10** | 前50% | #音视频生成 | 创新 1.2/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 影响 1/1.5 | 开源 0.2/1.5

👥 **作者与机构**

- 第一作者：Foivos Paraperas Papantoniou（Imperial College London, UK）
- 通讯作者：Foivos Paraperas Papantoniou（Imperial College London, UK）
- 作者列表：Foivos Paraperas Papantoniou（Imperial College London, UK）、Stathis Galanakis（Imperial College London, UK）、Rolandos Alexandros Potamias（Imperial College London, UK）、Bernhard Kainz（Imperial College London, UK; FAU Erlangen–Nürnberg, Germany）、Stefanos Zafeiriou（Imperial College London, UK）

💡 **毒舌点评**

这篇论文把一个音频驱动说话人脸生成和一个新视角合成任务塞进了同一个框架，工程整合能力值得肯定，自强迫训练策略和纯ID驱动生成确实让动画没那么“僵尸”了。但本质上，它就是拿Arc2Face当骨架，套上AnimateDiff的时间层，加个ReferenceNet，再用自强迫和唇读损失微调一下——每个组件都是现成的，论文没在理论或架构上给出让人眼前一亮的新洞见。最致命的还是不提供代码和模型，在如今“没有开源就别想拿高分”的顶会气氛下，这种做法无异于自断一臂，尤其是实验结果里那些微小的LSE-C领先，没给置信区间，完全是给人留质疑的把柄。

📌 **核心摘要**

STARCaster 提出了一个统一的时空自回归视频扩散模型，旨在将音频驱动的肖像动画与连续视角合成融合在单一框架中，无需依赖显式的3D表示。其核心思路是将预训练的ID感知图像扩散模型 Arc2Face 扩展为视频模型，通过解耦的多源交叉注意力机制分别融合身份（ArcFace嵌入）、音频（Wav2vec2特征）和视角（相机内外参）三种条件，并引入自强迫（Self-Forcing）训练策略和基于唇读网络的感知损失，分别用于增强运动多样性和唇形同步精度。与依赖参考帧的2D方法不同，STARCaster 依靠 Arc2Face 的强身份先验，首次在单一2D扩散框架内实现了“ID驱动”的无参考帧动画。同时，它将新视角合成重新定义为视频生成任务，通过在合成3D头部多视角轨迹上微调，使纯2D模型隐式获得了3D几何感知能力。实验结果显示，在音频驱动动画任务上，STARCaster 在 TH-1KH 和 Hallo3 数据集上均取得了最低的FID（24.89/16.86）和FVD（185.24/145.35），同时实现了更高的头部姿态多样性（Pose Std 4.896/4.760）和具有竞争力的唇同步分数（LSE-C 5.493/6.292），甚至超越了包括大规模 DiT 模型 Hallo3 在内的所有基线。在3D感知肖像生成任务上，也在 NeRSemble 数据集上全面领先。该工作的实际价值在于为生成更生动、更可控的虚拟说话人提供了一个轻量高效的一体化方案，其UNet架构的推理速度比 DiT 方案快近10倍。主要局限在于视角控制限于正面和近侧面、推断未达实时、合成数据微调会引入轻微的皮肤纹理平滑和色彩不一致。

🔗 **开源详情**

- 代码：未提供代码仓库链接。论文项目主页（https://foivospar.github.io/STARCaster/）截至评审时未包含代码。
- 模型权重：未提供。
- 数据集：使用多个公开数据集（VFHQ、CelebV-HQ、HDTF、TH-1KH、Hallo3、NeRSemble），未创建新数据集。合成多视角数据基于 SphereHead 生成，未公开提供。
- Demo：项目主页可能包含示例视频，但未提及在线交互式 Demo。
- 复现材料：论文附录（Appendix A）提供了详细的实现说明、训练超参数、数据预处理流程及网络架构描述，但未提供可直接运行的代码或预训练检查点。
- 论文中引用的开源项目：
  - ArcFace / InsightFace：https://github.com/deepinsight/insightface
  - Stable Diffusion (v1.5)：https://github.com/CompVis/stable-diffusion
  - Wav2vec2.0：https://github.com/facebookresearch/fairseq/tree/main/examples/wav2vec
  - AnimateDiff：https://github.com/guoyww/AnimateDiff
  - DPM-Solver：https://github.com/LuChengTHU/dpm-solver
  - Grounding DINO：https://github.com/IDEA-Research/GroundingDINO
  - FLAME 模型：https://flame.is.tue.mpg.de/
  - Lip-reading network：https://github.com/mpc001/Visual_Speech_Recognition_for_Multiple_Languages
  - FFHQ 数据集预处理风格参考：https://github.com/NVlabs/ffhq-dataset

📄 [OpenReview](https://openreview.net/forum?id=8wOASkNLzQ)

---

### 85. [Zero-Shot Rankability: Revealing Latent Ordinal Structure in Multimodal Large Language Models via Language](/audio-paper-digest-blog/posts/2026-07-04-zero-shot-rankability-revealing-latent-ordinal)

✅ **6.8/10** | 前50% | #音视频理解 | 创新 1.3/2 | 严谨 1.2/1.5 | 实验 1.2/1.5 | 影响 0.5/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Nam Hyeon-Woo（POSTECH，电气工程系）
- 通讯作者：Tae-Hyun Oh（KAIST，计算机学院）
- 作者列表：Nam Hyeon-Woo（POSTECH，电气工程系）、Moon Ye-Bin（POSTECH，电气工程系）、Sohwi Lim（KAIST，计算机工程学院）、Kwon Byung-Ki（POSTECH，人工智能研究生院）、Tae-Hyun Oh（KAIST，计算机学院）

💡 **毒舌点评**

亮点在于将“排序性”概念系统性地扩展到多模态大模型（MLLM）空间，并通过条件嵌入与模态间隙两个可验证的机制清晰解释了VLM与MLLM之间显著的零样本性能差距。短板亦很刺眼：所有核心属性（年龄、人群计数）均为视觉任务，音频部分仅作为“泛化验证”匆匆带过，对语音/音频领域的直接贡献极为薄弱，One-sentence 的“zero-shot rankability”对于泛化性缺乏深入讨论；此外，所有结果基于固定prompt搜索且未给出统计显著性检验，结论的泛化稳健性存疑。方法本质上是对已知技巧（反义词差向量、logit lens）的包装，洞见深度有限。

📌 **核心摘要**

1. 要解决什么问题：揭示多模态大语言模型（MLLM）的嵌入空间是否天然存在可被语言直接访问的潜在有序结构（零样本排序性），并解释其为何优于传统视觉-语言模型（VLM）。
2. 方法核心：提出“提示探测”（prompt probing），利用一组反义锚文本构建文本驱动的排序轴，并与属性特定的条件图像嵌入投影，完全无需标注图像即可恢复排序。
3. 与已有方法相比新在哪里：将“排序性”从线性探测的监督定义拓展为“零样本排序性”这一独立的嵌入属性；首次发现MLLM嵌入的文本驱动排序轴可恢复约90%监督上限，远高于VLM的61%，并揭示了条件嵌入与模态间隙是两个关键机制。
4. 主要实验结果：在8个视觉数据集（年龄、人群、美学、年代）上，MLLM平均零样本SRCC达0.728（线性探测上限0.813），VLM仅0.497（上限0.820）。消除条件提示后性能骤降（如Qwen 2.5 VL 7B从0.734降至0.544），对VLM应用缩小模态间隙的因果实验，大幅恢复了其零样本性能的亏损。音频年龄识别上，文本驱动轴恢复87%监督上限。
5. 实际意义：提供了一种无需标注即可探查MLLM内在排序知识的轻量方法，可作为理解嵌入几何的实用工具，并指导多模态对齐设计。
6. 主要局限性：极度依赖语言能明确表达属性两端（反义词），对抽象或非语言描述属性失效，在Recency属性上的低验证了这一点；音频部分仅作为边缘案例，缺乏深度；未排除数据污染及prompt搜索带来的过拟合风险。

🔗 **开源详情**

- 代码：https://github.com/kaist-ami/prompt-probing （论文摘要及正文中声明“Code and prompts are available at $ kaist-ami/prompt-probing”，经补充为完整GitHub链接）
- 模型权重：论文未发布自研模型权重。实验使用公开预训练模型，包括：
  - Qwen系列 (Qwen 2.5-VL 7B, Qwen 3-VL 2B/4B/8B, Qwen 2.5 Omni 7B), InternVL 3.5 8B, IDEFICS1/2。可通过Hugging Face获取 (如 https://huggingface.co/Qwen)。
  - CLIP系列 (RN50, ViT-B/32, ConvNeXt)。可通过OpenCLIP (https://github.com/mlfoundations/open_clip) 或Hugging Face获取。
  - 视觉模型 (ResNet-50, ViT-B/32, ConvNeXt, DINOv2-B/14)。可通过Timm库 (https://github.com/huggingface/pytorch-image-models) 获取。
- 数据集：论文使用多个公开基准数据集（UTKFace, Adience, UCF-QNRF, ShanghaiTech A/B, AVA, KonIQ-10k, HCI, Common Voice, ColoredMNIST, COCO），均来自公开来源，论文未提供直接下载链接。
- Demo：论文中未提及提供在线Demo。
- 复现材料：论文附录A提供了线性探测的超参数搜索范围。声明的代码仓库包含了提示词列表及实验配置，是主要的复现材料来源。
- 论文中引用的开源项目：
  - Timm 库：https://github.com/huggingface/pytorch-image-models
  - OpenCLIP：https://github.com/mlfoundations/open_clip
  - Hugging Face Transformers：https://github.com/huggingface/transformers
  - Logit Lens 方法（仅方法引用，非独立开源项目）

📄 [OpenReview](https://openreview.net/forum?id=RsXgArgxC4)

---

### 86. [An Exterior Method for Nonnegative Matrix Factorization](/audio-paper-digest-blog/posts/2026-07-04-an-exterior-method-for-nonnegative-matrix)

✅ **6.8/10** | 前50% | #音频分类 | 创新 1.2/2 | 严谨 1/1.5 | 实验 1.2/1.5 | 影响 0.3/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Qiujing Lu（UCLA ECE，共同一作）
- 第二作者：Tonmoy Monsoor（UCLA ECE，共同一作）
- 其他作者：Ehsan Ebrahimzadeh（eBay Search Science Team）、Kartik Sharma（UCLA ECE）
- 通讯作者：Vwani Roychowdhury（UCLA ECE，vwani@g.ucla.edu）

💡 **毒舌点评**

这篇论文提出了一个相当有趣的几何视角——将NMF问题从“在可行域内迭代”的内部方法，颠覆为“从无约束最优解外部逼近”的外部方法。在合成数据上展示出的“降维打击”式加速效果令人印象深刻。然而，作者过于沉醉于SVD与全局最优解之间“一步旋转”的几何洞察，却对真实高噪声、高稀疏场景下可行性修正阶段的脆弱性轻描淡写——该阶段本质上是一个对惩罚参数极其敏感的外罚函数法，且缺乏任何收敛性保证或灵敏度分析。写作上，主文对SOTA优势的强调显得有些急切，而大量关键实验细节、消融研究和超参数设置被沉入附录，组织结构有待优化。

📌 **核心摘要**

1.  问题：论文试图解决非负矩阵分解（NMF）中，传统的“内部方法”（如乘性更新、HALS）在非凸目标地貌中从可行域内部出发，容易陷入次优局部最小值或收敛缓慢的问题。
2.  方法核心：提出了外部方法eNMF。其核心思想是将NMF问题解耦为三个阶段：(i) 通过截断SVD高效计算无约束低秩分解的全局最优解；(ii) 在正交流形上寻找一个旋转矩阵，将无约束最优解“旋转”到最接近非负象限的外部点；(iii) 通过一个结合了行投影坐标下降（PBCD）和外罚函数法的可行性修正阶段，再使用HALS下降到满足KKT条件的局部极小值。
3.  创新点：将NMF问题解耦为“低秩逼近”和“非负性约束满足”两个独立阶段。利用正交旋转矩阵显式地操作无约束最优解的等价流形，从外部直接瞄准潜在的最优非负解。这与所有在可行域内迭代的“内部方法”有根本性的思维差异。
4.  主要实验结果：
    - 在超过400次NMF实验中，eNMF在99%的情况下与其他基线算法收敛到置换或缩放等价的因子矩阵，仅发现4个非等价局部最小值的实例。
    - 合成数据（SNR=20dB, r=500）：eNMF在106秒内达到全局最小值，而对比算法如HALS需约5595秒，AO-ADMM需约1865秒。
    - 真实数据（Audio, Face, Verb）：在等时间预算下，eNMF的重构误差最低；在等误差目标下，eNMF实现最高约150%的加速。例如：
        | Dataset | r | eNMF | HALS | AO-ADMM | NeNMF | FPGM |
        | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
        | Face | 20 | 7234.27 | 7939.04 | 7960.50 | 7899.33 | 7936.88 |
        | Verb | 100 | 8.97 | 9.74 | 9.77 | 9.70 | 9.70 |
        | Audio | 40 | 8936.93 | 9290.37 | 9082.16 | 9066.1 | 9201.87 |
    - 下游任务：在音频MNIST分类、人脸识别和电影推荐任务中，使用eNMF特征性能有显著提升。例如，在AudioMNIST (r=100)上，eNMF特征分类准确率为96.5%，远超基线NeNMF的84.0%。
5.  实际意义：显著加速了NMF的收敛速度并提高了求解质量，其学习到的特征在下游任务中具有更好的判别性。对于依赖NMF进行特征提取的工业应用（如推荐系统、音频处理）有直接的效率提升和效果改进价值。
6.  主要局限性：核心的可行性修正阶段（外罚函数法）缺乏理论收敛性保证；算法整体性能对最终解的质量高度敏感于SVD初始化是否接近真实解空间；在真实世界高稀疏、高噪声数据上“一步到位”的特性减弱；写作清晰度和技术细节呈现方面有提升空间（如附录组织稍显庞杂）。

🔗 **开源详情**

- 代码：[https://github.com/roychowdhuryresearch/eNMF](https://github.com/roychowdhuryresearch/eNMF)
- 模型权重：论文中未提及
- 数据集：使用了合成数据集及公开数据集（Verb, AudioMNIST, Yale Face Database B, MovieLens 1M），但未提供直接下载链接，需参考对应参考文献获取。
- Demo：论文中未提及
- 复现材料：论文给出了算法伪代码及附录实验细节，但未提供独立的复现脚本或Docker环境。

📄 [OpenReview](https://openreview.net/forum?id=qhG8ONjZK0)

---

### 87. [FoeGlass: Simple In-Context Learning Is Enough for Red Teaming Audio Deepfake Detectors](/audio-paper-digest-blog/posts/2026-07-04-foeglass-simple-in-context-learning-is-enough-for)

✅ **6.8/10** | 前50% | #语音伪造检测 | 创新 1.3/2 | 严谨 1.1/1.5 | 实验 1.2/1.5 | 影响 1/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Sepehr Dehdashtian（Michigan State University）
- 通讯作者：Sepehr Dehdashtian（Michigan State University）
- 作者列表：Sepehr Dehdashtian（Michigan State University）、Jacob H. Seidman（Reality Defender）、Vishnu Naresh Boddeti（Michigan State University）、Gaurav Bharaj（Reality Defender）

💡 **毒舌点评**

本文首次将LLM的上下文学习用于音频深度伪造检测器的黑盒自动化红队，多样性反馈机制设计巧妙，显著提升了攻击多样性与成功率。然而，方法对超参数敏感且未在真实商业检测器上验证，开源代码缺失严重削弱了其实用说服力与可复现性。

📌 **核心摘要**

本文提出FoeGlass，首个无需微调的黑盒自动化音频深度伪造检测器（ADD）红队方法。其核心是利用推理型大语言模型（LLM）的上下文学习能力，在每次迭代中根据检测器的真实度评分与基于WavLM嵌入的多样性评分生成TTS输入文本，从而探索TTS输出空间中未被现有基准（如ASVspoof5）覆盖的高错误区域。相比无条件采样基线，FoeGlass将假阴性率（FNR）最高提升94%（xTTS-v2上VIT-VoxCelebSpoof-ConstantQ），冷启动下VITS上各ADD的FNR可达74.2%~96.2%，且攻击具有跨模型迁移性。用FoeGlass生成的数据微调ADD后，准确率最多提升41%。方法仅需黑盒访问ADD和TTS，但超参数（如多样性阈值τ_d、上下文长度ℓ）需人工调优，且未在商业级检测器上评估。开源代码与模型权重均未提及，限制了直接复现与工业落地。

🔗 **开源详情**

- 代码：论文中未提及 FoeGlass 的代码仓库链接。
- 模型权重：论文中未提及 FoeGlass 训练或使用的任何模型权重下载链接。
- 数据集：论文使用了 ASVspoof5 和 VoxCelebSpoof 等公开基准数据集，但未提供作者自行生成的红队攻击数据的下载链接。数据集获取方式：ASVspoof5（论文只引用 arXiv:2408.08739，未给直接链接）；VoxCelebSpoof（https://huggingface.co/datasets/MattyB95/VoxCelebSpoof）。
- Demo：论文中未提及在线演示。
- 复现材料：论文附录提供了部分指令提示词示例，但未提供完整的训练配置、检查点或复现脚本。
- 论文中引用的开源项目：
  - Jabberjay（ADD 模型，MattyB95, 2024）: https://github.com/MattyB95/Jabberjay
  - Kokoro-82M（TTS 模型，hexgrad, 2025）: https://github.com/hexgrad/kokoro
  - XTTS-v2（TTS 模型，Coqui.ai, 2025）: https://huggingface.co/coqui/XTTS-v2
  - VoxCelebSpoof 数据集（Boakes, 2024）: https://huggingface.co/datasets/MattyB95/VoxCelebSpoof
  - DF_Arena_1B（检测模型，Kulkarni et al., 2025a）: https://huggingface.co/Speech-Arena-2025/DF_Arena_1B_V_1/
  - DF_Arena_500M（检测模型，Kulkarni et al., 2025b）: https://huggingface.co/Speech-Arena-2025/DF_Arena_500M_V_1/
  - 以下项目被引用但论文未直接提供链接：
    - VITS（Kim et al., 2021）
    - WavLM（Chen et al., 2022）
    - DeepSeek-R1 蒸馏版（Guo et al., 2025）
    - Llama-3.1-8B（Grattafiori et al., 2024）
    - RawNetLite（Di Pierno et al., 2025）
    - RawNet2（Tak et al., 2021）
    - AASIST（Jung et al., 2022）
    - ElevenLabs（商业服务，非开源）: https://elevenlabs.io/
  （凡未给出链接的，论文中均未提供相关 URL。）

📄 [OpenReview](https://openreview.net/forum?id=J6amahDTKV)

---

### 88. [Native Active Perception as Reasoning for Omni-Modal Understanding](/audio-paper-digest-blog/posts/2026-07-04-native-active-perception-as-reasoning-for-omni)

✅ **6.8/10** | 前50% | #音视频理解 | 创新 1.6/2 | 严谨 1.1/1.5 | 实验 1.2/1.5 | 影响 0.5/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Zhenghao Xing（香港中文大学）、Ruiyang Xu（上海交通大学）、Yuxuan Wang（阿里巴巴通义千问团队）
- 通讯作者：Jin Xu（jxu3425@gmail.com）、Pheng-Ann Heng（pheng@cse.cuhk.edu.hk）
- 完整作者列表：Zhenghao Xing1, Ruiyang Xu2, Yuxuan Wang*3, Jinzheng He3, Ziyang Ma2,4, Qize Yang3, Yunfei Chu3, Jin Xu3, Junyang Lin3, Chi-Wing Fu1, Pheng-Ann Heng1
  （* 共同一作；1 香港中文大学计算机科学与工程系；2 上海交通大学；3 阿里巴巴通义千问团队，Qwen Team；4 南洋理工大学）

💡 **毒舌点评**

这篇工作在“让MLLM学会像人一样主动看视频”的agentic范式上做出了优雅且扎实的尝试——将长视频理解重塑为POMDP中的迭代感知过程，并用TAURA解决了GRPO在多轮推理中的信用分配难题，让7B模型在LVBench上正面击败了10倍大的静态模型，这个结果本身具备足够的冲击力。然而，对于语音/音频领域的审稿人而言，这份工作的吸引力会打折扣：论文的核心卖点是交互范式和视频理解效率，音频在这里更像是个“锦上添花”的模态输入，而非被深入研究的感知对象。尽管“全模态”的旗号已经打出，但论文并未在诸如长播客理解、复杂声学场景对话、ASR等纯音频任务上验证方法的迁移性，其“Omni”的宣称尚缺乏来自音频社区的严苛审视。如果投到纯音频会议，这艘船可能因为“货物不对板”而吃水过深。

📌 **核心摘要**

为解决长视频理解中计算开销随视频时长超线性增长的核心痛点，本文提出OmniAgent——一个将主动感知内化为推理过程的全模态智能体框架。其核心洞见在于，将音视频探索形式化为一个部分可观察马尔可夫决策过程（POMDP），通过迭代的“观察-思考-动作”循环，让单一MLLM按需、选择性地从视频环境中获取并蒸馏高维感知数据为持久化文本记忆，从而将推理计算与原始视频时长解耦。为赋予模型这种原生智能体能力，论文设计了两阶段训练方案：先通过Agentic SFT（基于Best-of-N轨迹合成与双阶段质量控制）冷启动基础行为，再利用Agentic RL与提出的TAURA算法进行精细优化。TAURA针对标准GRPO在多轮轨迹中的“优势同质化”问题，利用轮次级token熵来重新分配信用，让关键决策步获得更强的学习信号。在10个基准的实验中，7B参数的OmniAgent在LVBench（50.5%）上以73%更少的帧数超越了10倍规模的Qwen2.5-VL-72B（47.3%），并展现了单调递增的测试时扩展特性。

🔗 **开源详情**

- 代码：论文声明代码将发布于 https://github.com/HarryHsing/OmniAgent
- 模型权重：论文声明模型权重将随代码一同发布在上述仓库，但未提供独立的Huggingface或ModelScope链接。
- 数据集：论文使用公开数据集的训练分割构建Agentic SFT轨迹，未创建新数据集。所用到的数据集为LongVideo-Reason, Video-Holmes, VSI-Train-10k, LongVALE, MultiHop-EgoQA，需遵照原论文获取。评估使用的10个基准（VideoMME, LVBench, MLVU, Minerva, VSI-Bench, DailyOmni, WorldSense, OmniVideoBench, LongVALE, VUE-TR）均为公开学术基准。

📄 [OpenReview](https://openreview.net/forum?id=3dLPVNhFZh)

---

### 89. [Unlocking Speech–Text Compositional Powers: Instruction-Following Speech Language Models without Instruction Tuning](/audio-paper-digest-blog/posts/2026-07-04-unlocking-speechtext-compositional-powers)

✅ **6.7/10** | 前50% | #语音交互 | 创新 1.2/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 影响 0.9/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Congrui Du（University of California, Santa Barbara, USA）
- 通讯作者：Yang Zhang（MIT-IBM Computing Research Lab, IBM Research, USA）
- 其他作者：Kaizhi Qian（MIT-IBM Computing Research Lab, IBM Research）、Shiyu Chang（University of California, Santa Barbara）

💡 **毒舌点评**

这篇论文用一个极其简单的权重算术绕过了SLM领域“卷数据”的军备竞赛，洞察深刻，但成也萧何败也萧何——仅用30k小时数据就达成此性能令人眼前一亮，但其方法的脆弱性同样引人注目：输出格式极度依赖后期强制修正、语音能力上限被韵律分词器锁死、对预训练数据结构的病态依赖，以及依赖外部ASR的pipeline设计，使其离一个实用、鲁棒的SLM新范式尚有距离。它更像一个巧妙的概念验证，而非可直接部署的突破。

📌 **核心摘要**

1.  问题: 现有语音语言模型（SLM）的指令微调面临严重的数据膨胀和灾难性遗忘问题。语音序列长度远超文本（约20倍），导致SLM难以像LLM那样通过海量数据扩展指令遵循能力，且多轮训练易丧失预训练LLM的原有知识与指令遵循能力。现有训练范式在“保留文本LLM能力”与“习得语音新技能”之间存在固有权衡。
2.  方法核心: 提出了SPEECHCOMBINE，一种无需任何指令微调的SLM构建方法。它从文本基模型（$\theta_{base}$）出发，通过一次语音连续预训练得到语音适配模型（$\theta_{speech}$），再将其与文本基模型到指令模型的权重差方向（$\Delta \theta_{inst} = \theta_{inst} - \theta_{base}$）进行线性组合：$\theta_{SC} = \theta_{base} + \lambda \Delta \theta_{speech} + \Delta \theta_{inst}$。此法直接将LLM的指令遵循能力作为独立权重方向“装配”到语音模型上。
3.  创新点: 首次将模型融合中的“任务向量”思想系统应用于SLM的全类别指令（文本导向、语音理解、语音生成）构建。与主流范式将指令微调作为必备步骤不同，SPEECHCOMBINE证明了指令遵循能力可作为可迁移的“插件”，且能意外泛化至训练时未见过的语音指令。
4.  主要实验结果:
    *   文本导向任务: 在OpenbookQA (86.59%)和MMSU (73.38%)上，SPEECHCOMBINE性能超越或接近无遗忘上限（ASR+TEXT LLM: 83.29%, 73.22%）和多个SOTA SLM基线。
    *   语音理解任务: 在EmphAssess强调检测任务上，F1分数（60.84%）大幅超越所有基线（次优基线FUN-AUDIO-CHAT为28.76%）。但在UnderEmo情绪理解任务（52.70%）上，显著弱于Kimi-Audio（63.69%）和Fun-Audio-Chat（74.74%）。
    *   语音生成任务: 在GenEmo情绪生成任务上，得分（45.42）仅次于GLM-4-Voice（48.13）。在EmphAssess强调生成任务上，F1分数（31.42%）取得最优。

    | 任务类别 | 任务 | SPEECHCOMBINE | 最强基线/上限 | 指标 |
    |---|---|---|---|---|
    | 文本导向 | OpenbookQA | 86.59 | 89.23 (GPT-4o-audio) / 83.29 (ASR+TEXT LLM) | Acc ↑ |
    | 文本导向 | MMSU | 73.38 | 80.25 (GPT-4o-audio) / 73.22 (ASR+TEXT LLM) | Acc ↑ |
    | 文本导向 | GSM8k | 90.03 | 95.53 (Kimi-Audio) / 94.61 (ASR+TEXT LLM) | Acc ↑ |
    | 语音理解 | UnderEmo | 52.70 | 74.74 (Fun-Audio-Chat) | Acc ↑ |
    | 语音理解 | Emph Detection | 60.84 | 28.76 (Fun-Audio-Chat) | F1 ↑ |
    | 语音生成 | GenEmo | 45.42 | 48.13 (GLM-4-Voice) | Score ↑ |
    | 语音生成 | Emph Generation | 31.42 | 26.55 (GLM-4-Voice) | F1 ↑ |
5.  实际意义: 提供了一种极低数据成本（仅3万小时预训练，无SFT）、高效的SLM构建新范式，使SLM能快速继承文本LLM的进化成果，避免了海量语音指令数据合成的繁重工作。这为小团队或数据受限场景下构建高性能SLM提供了可行路径。
6.  主要局限: 依赖外部ASR，非端到端模型；语音输出格式极不稳定，需复杂的格式强制机制；韵律分词器无法建模音色、声纹，能力上限受限；模型能力涌现对预训练数据结构高度敏感；某些语音理解能力（如强调检测）需特定提示（如"Based on the prosody"）才能激活。

🔗 **开源详情**

- 代码：https://github.com/CongruiDu/SpeechCombine
- 模型权重：未提供（论文未提供预训练权重或检查点下载链接）
- 数据集：预训练数据均使用公开数据集，但未提供打包下载。评估数据来自标准benchmark。SFT对比基线使用数据为公开数据集。
- Demo：https://auspicious3000.github.io/SpeechCombine-Demo
- 复现材料：论文附录A提供了详细训练配置、数据构造、推理模板和格式强制策略；附录B提供了各任务提示词；附录C提供了更多消融实验数据。但未提供打包的配置文件或一键式训练脚本。
- 论文中引用的主要开源项目：Qwen3-8B, whisper-large-v3, RMVPE, Whistress, Kokoro-82M, Fun-Audio-Chat, ProsodyLM, EmphAssess, VoiceBench, URO-Bench等。

📄 [OpenReview](https://openreview.net/forum?id=SDFeVV01xR)

---

### 90. [UltraLIF: Fully Differentiable Spiking Neural Networks via Ultradiscretization and Max-Plus Algebra](/audio-paper-digest-blog/posts/2026-07-04-ultralif-fully-differentiable-spiking-neural)

✅ **6.7/10** | 前50% | #音频分类 | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 影响 0.5/1.5 | 开源 0.2/1.5

👥 **作者与机构**

- 第一作者：Jose Marie Antonio Miñoza（Center for AI Research PH）
- 通讯作者：Jose Marie Antonio Miñoza（Center for AI Research PH, jminoza@upd.edu.ph）
- 作者列表：Jose Marie Antonio Miñoza（Center for AI Research PH）

💡 **毒舌点评**

论文的数学框架相当漂亮，用热带几何为SNN提供了罕见的“前向-反向一致性”和收敛性保证，理论深度在SNN领域实属难得。然而，实验设计如同“精装别墅里摆塑料家具”——全连接网络加64个隐藏神经元跑CIFAR-10的SOTA声明缺乏说服力，且代码与模型完全未开源，让声称的“fully differentiable”优势难以被社区验证和复现。

📌 **核心摘要**

1. 本文旨在解决脉冲神经网络（SNN）中因脉冲生成函数的不可微性而必须使用启发式替代梯度（surrogate gradient）的问题，该问题导致前向和反向传播之间存在不一致性。
2. 核心方法是引入热带几何中的“超离散化”（ultradiscretization）和max-plus代数，将LIF神经元的动力学方程通过log-sum-exp（LSE）函数松弛为完全可微的形式，从而推导出UltraLIF（时间动态）和UltraDLIF（空间动态）两种神经元模型。
3. 与现有替代梯度方法相比，UltraLIF的创新在于它使用统一的LSE/sigmoid函数进行前向和反向计算，从根本上消除了梯度不匹配问题，并提供了在温度参数 $\varepsilon \to 0$ 时收敛到离散LIF动力学的严格理论保证和梯度界限。
4. 主要实验在六个基准（MNIST、Fashion-MNIST、CIFAR-10、N-MNIST、DVS-Gesture、SHD）上进行，在超低延迟（$T=1$）场景下优势最明显：SHD上提升+11.22%，DVS-Gesture上提升+7.96%，N-MNIST上提升+3.91%，CIFAR-10上提升+3.01%，但在更高时间步下优势减小或被基线反超。一个可选的稀疏性惩罚项能在保持有竞争力的准确率的同时显著降低能耗。
5. 实际意义在于为SNN训练提供了更坚实的理论基础和一种避免死神经元、梯度消失等问题的稳定训练范式，尤其在需要极低延迟和能耗的神经形态计算部署中潜力巨大。
6. 主要局限性包括：软脉冲在训练和推理之间存在差异，切换到硬推理时性能会下降；在卷积架构上表现不佳，甚至不如LIF基线；基准测试规模偏小，缺乏ImageNet级别的大规模验证；代码和模型未开源，严重影响复现和社区采纳。

🔗 **开源详情**

- 代码：论文中未提及代码链接
- 模型权重：论文中未提及
- 数据集：论文使用公开数据集 MNIST、Fashion-MNIST、CIFAR-10、N-MNIST、DVS-Gesture、SHD，未提供具体下载链接，但可从各数据集官方网站获取（如 MNIST http://yann.lecun.com/exdb/mnist/ ；CIFAR-10 https://www.cs.toronto.edu/~kriz/cifar.html ；N-MNIST 和 DVS-Gesture 可通过 Tonic 库加载 https://github.com/neuromorphs/tonic ；SHD https://compneuro.net/posts/2019-spiking-heidelberg-digits/ ）
- Demo：论文中未提及
- 复现材料：论文附录 D 提供详细训练配置（超参数表 8‑9、模型定义、能量估算方式等），未单独提供配置文件的代码仓库。
- 论文中引用的开源项目：
  - PyTorch（https://pytorch.org/ ）
  - Tonic（https://github.com/neuromorphs/tonic ）

📄 [OpenReview](https://openreview.net/forum?id=QdDli9UoLK)

---

### 91. [Towards Streaming Synchronized Spatial Audio Generation via Autoregressive Diffusion Transformer](/audio-paper-digest-blog/posts/2026-07-04-towards-streaming-synchronized-spatial-audio)

✅ **6.6/10** | 前50% | #音视频生成 | 创新 1.3/2 | 严谨 0.9/1.5 | 实验 0.7/1.5 | 影响 0.9/1.5 | 开源 0.8/1.5

👥 **作者与机构**

- 第一作者（共同一作）：Ke Lei（浙江大学）
- 共同一作：Yu Zhang（字节跳动）
- 共同一作：Changhao Pan（浙江大学）
- 作者列表：Xueyi Pu（浙江大学）、Wenxiang Guo（浙江大学）、Ruiqi Li（字节跳动）、Zhou Zhao（浙江大学，通讯作者）

💡 **毒舌点评**

这篇文章在流式空间音频生成上做出了明确的架构贡献——自回归做全局规划、扩散做局部渲染的思路干净利落，SVAC的空间负样本设计也很有物理感知能力。但整体evaluation偏弱，尤其是缺少与最近强基线（如MovieGen-Audio、Frieren）的直接对比，且ablation中只展示了去掉某组件的退化程度，缺少为什么这套组合设计优于其他可能组合（如AR-only或Diffusion-only变体）的深度分析。另外，伪FOA预训练策略的随意性以及对总生成时长的回避讨论，让人觉得像一份扎实的工程系统报告而非有深刻洞察的顶会文章。

📌 **核心摘要**

SwanSphere要解决的是从全景视频或文本描述生成高保真、流式的空间音频（FOA格式）的问题，核心痛点是现有方法在生成质量、空间准确性与推理延迟之间的三重权衡。方法核心是"分而治之"：一个因果自回归语言模型（Spatial LM）负责捕获全局时序结构和空间语义规划，为每个音频patch产生语义条件 $h_t$；随后一个局部扩散Transformer（LocDiT）负责该patch内的连续空间音频潜变量去噪重构，实现流式输出。与已有方法的关键区别在于：(1) 用连续的flow matching替代量化codebook避免相位信息丢失与重建误差；(2) 设计了包含空间旋转、时序偏移等物理感知负样本的空间视频-音频对比学习（SVAC）来强化跨模态空间对齐；(3) 用多目标在线直接偏好优化（ODPO，同时优化空间误差、语义相似度与美学质量）做偏好对齐来消除神经伪影。实验在视频到空间音频和文本到空间音频两个任务上均优于OmniAudio等基线，FD从157.67降至120.28，角度误差从1.27降至1.03，流式推理的首块（first-chunk）延迟仅为0.21秒。实际意义在于首次实现了面向交互应用的流式端到端空间音频生成，适合VR/AR等场景，局限是复杂多源场景建模不足，且空间字幕标注依赖自动pipeline，对主导声源以外的空间细节描述受限。

🔗 **开源详情**

- 代码：https://github.com/MM-Speech/SwanSphere
- 模型权重：未说明
- 数据集：未提供SwanSphere数据集的公开下载链接，也未明确说明其构成数据集（Sphere360, YT-Ambigen）的获取方式。
- Demo：https://swansphere.github.io
- 复现材料：论文附录B提供了训练超参数、部分实现细节和模型配置。但未提供预训练权重检查点或完整的复现配置文件。
- 论文中引用的开源项目：
  - VideoMAE v2: https://github.com/OpenGVLab/VideoMAEv2
  - AudioMAE: https://github.com/facebookresearch/AudioMAE
  - Stable Audio VAE: https://github.com/Stability-AI/stable-audio-tools
  - FLAN-T5: 使用Hugging Face版本
  - ImageBind: https://github.com/facebookresearch/ImageBind
  - PaSST: https://github.com/kkoutini/PaSST
  - OpenL3: https://github.com/marl/openl3
  - MMAudio: https://github.com/hkchengrex/MMAudio
  - PSELDNets: 代码未指明，引用为Hu et al., 2025
  - Diff-Foley: 引用为Luo et al., 2023，未给出代码仓库
  - ViSAGe: 引用为Kim et al., 2025，未给出代码仓库
  - OmniAudio: 引用为Liu et al., 2025b，未给出代码仓库

📄 [OpenReview](https://openreview.net/forum?id=QlKWT5s4Wy)

---

### 92. [TextME: Bridging Unseen Modalities Through Text Descriptions](/audio-paper-digest-blog/posts/2026-07-04-textme-bridging-unseen-modalities-through-text)

✅ **6.6/10** | 前50% | - | 创新 1.3/2 | 严谨 0.9/1.5 | 实验 0.7/1.5 | 影响 0.4/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Soyeon Hong（Ajou University, Department of Artificial Intelligence）
- 通讯作者：Seungtaek Choi（Hankuk University of Foreign Studies, Division of Language & AI）、Suha Kwak（POSTECH, Graduate School of AI）、Hyunsouk Cho（Ajou University, Department of Software）
- 作者列表：Soyeon Hong（Ajou University, Department of Artificial Intelligence）、Jinchan Kim（Ajou University, Department of Artificial Intelligence）、Jaegook You（Ajou University, Department of Artificial Intelligence）、Seungtaek Choi（Hankuk University of Foreign Studies, Division of Language & AI）、Suha Kwak（POSTECH, Graduate School of AI）、Hyunsouk Cho（Ajou University, Department of Software）

💡 **毒舌点评**

这篇论文试图用一个廉价的几何戏法绕过模态扩展中昂贵的数据墙——利用“模态间隙”这一已知属性，仅靠文本数据就将新模态投影到大语言模型空间中。想法有趣且务实，但就像用纸板搭桥：在结构完美的“3D”和“视频”编码器上走得挺稳，一到“分子”就塌了。实验广度足够，但深度像纸片，尤其是其宣称要颠覆的利基领域（医疗影像、分子）恰恰是性能最拉胯的地方，却只给了蜻蜓点水般的验证。这更像一个优美的实验室玩具，离解决真实世界利基领域的模态接入问题还隔着几个落地鸿沟。

📌 **核心摘要**

1. 要解决什么问题：解决了多模态学习中的模态扩展问题，即在缺乏昂贵跨模态配对数据的情况下，将新模态（如图像、音频、3D、X光、分子等）集成到统一的语义空间中。
2. 方法核心是什么：提出 TextME 框架。核心是观察并利用到了一个规律：不同的预训练对比编码器内部均存在一致的“模态间隙”。通过仅使用文本数据训练一个轻量级投影网络，将“去中心化”后的文本表征映射到大语言模型（LLM）的嵌入空间作为统一锚点。在推理时，对新模态数据同样进行“去中心化”，使其能通过该文本训练的投影网络，实现零样本跨模态对齐。
3. 与已有方法相比新在哪里：这是第一个声称完全摒弃跨模态配对数据，仅通过文本描述和一个几何操作（中心化）来实现多编码器间模态扩展的框架。它将先前仅用于单编码器内分析的“模态间隙”，创造性地转为了跨编码器对齐的实用机制。
4. 主要实验结果如何：在图像、视频、音频、3D、X 光和分子六种模态上进行了零样本文本-模态检索和零样本分类实验。平均保留了预训练编码器 74.5% 的性能（PPR）。在 3D 分类任务 ModelNet40 上甚至超越了预训练编码器（PPR 达 104.6%），但在分子检索 DrugBank 上性能保留很差（PPR 仅 43.9%）。方法能诱发涌现的跨模态检索能力（如 3D 到图像），但性能远低于配对数据方法。
| 任务类型 | 模态 | 基准 | 预训练编码器得分* | TextME 得分 | PPR (%) |
| --- | --- | --- | --- | --- | --- |
| 文本-模态检索 (R@1) | 音频 | AudioCaps | 22.47 | 15.35 | 68.3 |
| 零样本分类 (Top-1) | 3D | ModelNet40 | 67.75 | 70.86 | 104.6 |
| 零样本分类 (Top-1) | X-ray | RSNA | 52.64 | 46.59 | 88.5 |
| 涌现跨模态检索 (R@1) | 3D→图像 | Objaverse | 未提供 | 10.27 | 未提供 |
*注：预训练编码器得分指的是对应模态编码器的原始零样本性能。
5. 实际意义是什么：提出了一种低成本的范式，理论上为在标注数据稀缺的利基领域（如医疗、化学）搭建多模态 AI 系统提供了轻量级途径，极大降低了对昂贵专家标注的依赖。
6. 主要局限性是什么：性能高度依赖于特定预训练编码器的几何属性（“间隙一致性”和“间隙-内容正交性”的方差）。当编码器几何特性不佳时（如分子模型），方法性能会显著下降，甚至不如不用。在需要细粒度实例级相似性的检索任务上性能损失较大。

🔗 **开源详情**

- 代码：https://soyeonhh.github.io/TextME/
- 模型权重：未提及。
- 数据集：未发布新数据集。实验使用了 COCO、Flickr30k、MSRVTT、MSVD、DiDeMo、AudioCaps、Clotho、DrugBank、ModelNet40、ScanObjectNN、AudioSet、ESC-50、RSNA、CheXpert、Objaverse、PubChem 等公开数据集。
- Demo：未提及。
- 复现材料：论文附录 C 提供了详细的训练超参数、模型架构及偏移计算配置。代码仓库应包含训练与评估脚本。
- 论文中引用的开源项目：
  - CLIP：https://github.com/openai/CLIP
  - ViCLIP (InternVideo)：https://github.com/OpenGVLab/InternVideo
  - CLAP：https://github.com/LAION-AI/CLAP
  - Uni3D：https://github.com/baaivision/Uni3D
  - CXR-CLIP：https://github.com/kakaobrain/cxr-clip
  - MoleculeSTM：https://github.com/chao1224/MoleculeSTM
  - LanguageBind：https://github.com/PKU-YuanGroup/LanguageBind
  - ImageBind：https://github.com/facebookresearch/ImageBind
  - Ex-MCR：https://github.com/zshicode/Ex-MCR
  - Qwen3-Embedding：https://github.com/QwenLM/Qwen3
  - NV-Embed-v2：https://github.com/NVIDIA/NV-Embed
  - EVA-CLIP：https://github.com/baaivision/EVA

📄 [OpenReview](https://openreview.net/forum?id=SIZYrEf1a7)

---

### 93. [Evaluating and Rewarding LALMs for Expressive Role-Play TTS via Mean Continuation Log-Probability](/audio-paper-digest-blog/posts/2026-07-04-evaluating-and-rewarding-lalms-for-expressive)

✅ **6.6/10** | 前50% | #语音合成 | 创新 0.8/2 | 严谨 1.1/1.5 | 实验 1/1.5 | 影响 0.8/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Yong Ren（中国科学院自动化研究所 / 中国科学院大学人工智能学院）、Jingbei Li（StepFun）
- 通讯作者：Jingbei Li（StepFun, lijb19@tsinghua.org.cn）、Cheng Yi（StepFun, yicheng@stepfun.com）、Xuerui Yang（StepFun, yangxuerui@stepfun.com）
- 完整作者列表：Yong Ren、Jingbei Li（共同一作）、Haiyang Sun（StepFun）、Yujie Chen（北京航空航天大学）、Cheng Yi（StepFun）、Yechang Huang（StepFun）、Hao Gu（中国科学院自动化研究所 / 中国科学院大学人工智能学院）、Ye Bai（中国科学院自动化研究所）、Xuerui Yang（StepFun）

💡 **毒舌点评**

本文用 MCLP 将风格一致性量化为 LALM 续写概率，想法精巧，逻辑也基本自洽。但实验的“SOTA”声明水分太大：跟 GPT-Audio、通用 InstructTTS 比当然全面碾压，可真正的对手——那些同样用了 RL 做风格对齐的 TTS 系统——一个都没出现在基线里。主表上 MOS 4.461 vs. 3.576 的巨大鸿沟假装看不见，3.576 就能叫 SOTA？文末的局限分析写得像免责声明，对 MCLP 受限于 Step-Audio-2 这一特定 Tokenizer 和生态的根本脆弱性避而不谈。贡献嘛，做好了一个中文标杆数据集 + 一个有意思的指标，但要说方法论上有普适性突破，还差得远。

📌 **核心摘要**

本文针对 Role-Play TTS (RP-TTS) 风格一致性缺乏客观度量的问题，提出 Mean Continuation Log-Probability (MCLP)。MCLP 利用一个在海量语音上做 Continuation Training 后的预训练 LALM，在固定文本上下文 `[w, z_eval, w]` 条件下预测真值（GT）语音 token 的平均对数似然，以此度量候选语音与 GT 间的风格一致性。该方法将 MCLP 既用作评估指标（与人类判断高相关，当 ΔMCLP > 0.1 时 Win Rate > 0.8），又作为 GRPO 的奖励信号（与 CER 组合成带门控的混合奖励），驱动 RP-TTS 模型在 SFT 后进一步进行风格对齐。实验在 1435 小时 WenetSpeech-RP-TTS 数据集上进行，结果表明通过 SFT + GRPO 训练的模型在主观 MOS（3.576）和 MCLP 上均显著超越 GPT-Audio、MiMo-Audio 等多轮对话 LALM 和 OV-InstructTTS 等单轮基线。

主要实验结果：
| Model | W/ Audio History CER(%)↓ | W/ Audio History MCLP↑ | W/ Audio History CAM++↑ | W/ Audio History Emo2Vec↑ | W/o Audio History CER(%)↓ | W/o Audio History MCLP↑ | W/o Audio History CAM++↑ | W/o Audio History Emo2Vec↑ | MOS↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GroundTruth⋄ | - | - | - | - | - | - | - | - | 4.461 |
| GPT-Audio⋄ | 11.974 | -4.849 | 0.636 | 0.875 | 44.679 | -4.836 | 0.635 | 0.884 | 1.915 |
| MiMo-Audio-7B⋄ | 10.605 | -4.753 | 0.699 | 0.902 | 11.609 | -4.745 | 0.698 | 0.903 | 2.484 |
| Step-Audio-2-mini | 3.276 | -4.829 | 0.629 | 0.864 | 12.007 | -4.823 | 0.632 | 0.864 | 1.856 |
| CosyVoice3⋄ | - | - | - | - | 4.638 | -4.782 | 0.651 | 0.905 | 2.350 |
| HiggsAudioV2⋄ | - | - | - | - | 3.250 | -4.827 | 0.614 | 0.856 | 1.750 |
| OV-InstructTTS | - | - | - | - | 7.188 | -4.768 | 0.669 | 0.900 | 2.864 |
| Qwen3TTS⋄ | - | - | - | - | 5.585 | -4.799 | 0.630 | 0.879 | 2.036 |
| Our Proposed | 1.130 | -4.636 | 0.724 | 0.917 | 1.625 | -4.687 | 0.704 | 0.910 | 3.576 |

🔗 **开源详情**

- 代码：https://github.com/y-ren16/MCLP
- 模型权重：未提及
- 数据集：WenetSpeech-RP-TTS，https://huggingface.co/datasets/y-ren16/WenetSpeech-RP-TTS
- Demo：未提及
- 复现材料：训练超参数报告详尽，但未发布训练配置文件或预训练检查点。
- 论文中引用/用到的开源项目：
  - Step-Audio-2（未提供具体链接）
  - WenetSpeech（未提供具体链接）
  - Demucs（未提供具体链接）
  - pyannote（未提供具体链接）
  - DeepSeek-R1（未提供具体链接）
  - Qwen-VL-7B（未提供具体链接）
  - Emotion2Vec：https://huggingface.co/emotion2vec/emotion2vec_plus_large
  - CAM++：https://modelscope.cn/models/iic/speech_campplus_sv_zh-cn_3dspeaker_16k/summary
  - Genshin-Voice：https://huggingface.co/datasets/simon3000/genshin-voice
  - 对比模型 CosyVoice3、Higgs Audio V2、OV-InstructTTS、Qwen3TTS 等（论文未提供具体开源地址）

📄 [OpenReview](https://openreview.net/forum?id=YZIqbdw6zi)

---

### 94. [PADS-TAL: Padding-Annealed Diffusion Sampling in Text-Aware Latent Space for Robust and Diverse Text-to-Music Generation](/audio-paper-digest-blog/posts/2026-07-04-pads-tal-padding-annealed-diffusion-sampling-in)

✅ **6.6/10** | 前50% | #音乐生成 | 创新 1/2 | 严谨 1.1/1.5 | 实验 0.9/1.5 | 影响 0.9/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Taekoan Yoo（NHN Corp. AI Tech Lab.）
- 通讯作者：Kyeongbo Kong（Pusan National University）
- 作者列表：Taekoan Yoo、Wonkyung Jung、Kyunghun Kim（均为NHN Corp. AI Tech Lab.），Kyeongbo Kong（Pusan National University）

💡 **毒舌点评**

论文在“文本到音乐扩散模型的多样性退化”这个真实痛点上有清晰motivation，PADS的直觉（只扰动padding、不碰语义token）简洁有效，TAL的MoE-mVAE设计在表示层面为genre一致生成提供了结构支撑，两者组合在消融中表现一致。但整体创新层次不高——两个组件本质都是已有技术的迁移和改造（CADS→PADS，MoE-mVAE→TAL），缺乏新的方法论贡献。更令人担心的是，genre作为“全局语义”的唯一代理，严重窄化了T2M多样性问题的定义；实验上MelBench被处理成器乐子集，削弱了genre结论的外部效度；对比基线仅围绕CADS展开，与其他多样性增强方法的对比局限在Fig. 10的trade-off曲线上，未做深入调参和讨论。按顶会标准看，问题定义有价值、方案合理、实验基本完整，但贡献的深度和广度均未达到突破性水平。

📌 **核心摘要**

1. 论文解决文本到音乐（T2M）扩散模型的两个实际问题：(i) 推理时条件扰动（如CADS）在提升多样性的同时会破坏文本对齐和保真度；(ii) 标准VAE潜空间的局部邻居结构与文本语义（特别是genre）不对齐，导致采样时genre一致多样性不足。
2. 方法由两部分组成：PADS（Padding-Annealed Diffusion Sampling）将条件扰动精确限制在文本条件序列的padding位置，通过退火噪声调度实现受控探索；TAL（Text-Aware Latent space）利用MoE-mVAE构建文本感知潜空间，通过共享-私有多模态潜变量和Latent Alignment loss鼓励genre一致的局部邻居结构。
3. PADS的核心insight在于padding位置的语义显著性低（通过噪声扫描实验验证），仅扰动此处可保留早期去噪建立的全局语义线索（genre、BPM等），同时利用padding中残存的弱信号进行探索——从机理上解决了CADS“一扰就崩”的问题。TAL通过将文本共享潜变量与音频私有潜变量拼接，构建一个既保留声学细节又携带genre语义的采样空间。
4. 主要实验：在SongDescriber和MelBench上，TAL+PADS组合在匹配的CLAP-f≈0.32条件下，相比Audio+CADS基线提升整体Vendi多样性15.4%，genre内mRecall提升71.6%；人类评估中质量/多样性/对齐均优于或持平CADS基线；PADS在ACE-Step和MelodyFlow上展示了跨模型通用性。
5. 实际意义在于为T2M部署提供了推理时无需重新训练即可控制多样性的策略（PADS），以及一种从表示层面改善genre一致生成的方法（TAL），对创意音乐生成工具有参考价值。
6. 主要局限性：MoE-mVAE中共享潜变量可能未被解码器充分利用（依赖私有信息）；TAL训练需配对文本-音频数据且计算成本高（8×H100训练250小时）；对极长prompt（padding近乎为零）的多样性增益有限；genre多样性评估依赖被处理过的MelBench器乐子集，且genre之外的全局属性（情绪、速度）未验证TAL的泛化性；与其他多样性增强方法的对比不够深入。

🔗 **开源详情**

- 代码：论文未提供GitHub代码仓库链接，正文和附录中均未提及。项目页面仅提供生成的音频sample。
- 模型权重：论文未提及模型权重下载链接。
- 数据集：训练数据基于SAO元数据收集的Freesound（约467k）与FMA（约13k）音频，以及未公开的内部音乐集（约18k）。评估使用SongDescriber（CC BY-SA 4.0）和MelBench（CC BY-SA 4.0），具体获取方式见原论文，未提供直接下载链接。
- Demo：https://pads-tal.github.io/PADS-TAL
- 复现材料：附录A、B、C、E、F提供详细训练配置、采样参数、VAE设计及训练时长（MoE-mVAE约250h，DiT约320h，8×H100，batch size 4），但未公开训练代码或配置文件。
- 论文中引用的开源项目：
  - Stable Audio Tools：https://github.com/Stability-AI/stable-audio-tools
  - Stable Audio Metrics：https://github.com/Stability-AI/stable-audio-metrics
  - LAION CLAP：https://github.com/LAION-AI/CLAP
  - DPM-Solver++：https://github.com/LuChengTHU/dpm-solver
  - Ultimate Vocal Remover：https://github.com/Anjok07/ultimatevocalremovergui
  - librosa：https://github.com/librosa/librosa
  - madmom：https://github.com/CPJKU/madmom
  - essentia：https://github.com/MTG/essentia
  - Qwen-Audio：https://github.com/QwenLM/Qwen-Audio
  - PANNs：https://github.com/qiuqiangkong/audioset_tagging_cnn
  - SALMONN：https://github.com/bytedance/SALMONN
  - EnCodec（via Audiocraft）：https://github.com/facebookresearch/audiocraft
  - auraloss：https://github.com/csteinmetz1/auraloss

📄 [OpenReview](https://openreview.net/forum?id=c0iisI5tJj)

---

### 95. [ADEPT: RL-Aligned Agentic Decoding of Emotion via Evidence Probing Tools — From Consensus Learning to Ambiguity-Driven Emotion Reasoning](/audio-paper-digest-blog/posts/2026-07-04-adept-rl-aligned-agentic-decoding-of-emotion-via)

✅ **6.5/10** | 前50% | #语音情感识别 | 创新 1.5/2 | 严谨 1.1/1.5 | 实验 1.2/1.5 | 影响 1.1/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Esther Sun（Language Technologies Institute, Carnegie Mellon University）
- 通讯作者：Esther Sun（Language Technologies Institute, Carnegie Mellon University）
- 作者列表：Esther Sun, Bo-Hao Su, Abinay Reddy Naini, Shinji Watanabe（均来自Language Technologies Institute, Carnegie Mellon University）, Carlos Busso（Multimodal Signal Processing Laboratory, University of Texas at Dallas）

💡 **毒舌点评**

这项工作将“打标签”式的经典SER重构为智能体探案式的证据收集与裁决过程，框架设计颇具巧思，尤其在利用GRPO与证据信任门对齐推理质量与工具使用上展现了良好的技术深度。然而，文章在惊艳的框架叙事背后，对核心工具的底层实现算法、GRPO训练的稳定性与超参数敏感度、以及推理延迟与计算开销等现实落地问题几乎只字不提，这让整个系统更接近一个精巧的概念验证（Proof-of-Concept），距离一个可被严格复现和实际部署的机器学习系统还有相当的距离。

📌 **核心摘要**

1.  要解决什么问题：本文旨在解决传统语音情感识别（SER）中存在的两大问题：（1）共识悖论：强制使用多数投票来确定单一情绪标签，丢弃了反映人类情感复杂性与共现性的少数派标注（Minor Emotions），且常常直接丢弃无共识样本，造成数据浪费；（2）信号-语义鸿沟：自监督声学模型（如WavLM）判别力强但无法解释，而多模态大语言模型能生成似是而非的推理，但其判断常缺乏可验证的声学证据支撑，易产生幻觉。
2.  方法核心是什么：提出了ADEPT框架，将SER从一个单步分类任务重构为一个多轮、基于智能体的探案式推理过程。它驱动一个多模态大模型（Qwen-3-Omni）作为智能体，沿着“候选集生成-证据验证-裁决”的三阶段流水线，自主调用结构化先验、语义探测、声学探测、精细化四类工具，严格地从音频和文本中检索可审计的证据，最终做出包含主情绪和次要情绪的决策。
3.  与已有方法相比新在哪里：
    *   范式转换：从“共识学习”转向“歧义驱动推理”，显式地将少数派标注作为次要情绪的监督信号，并采用灵活的标签构建策略，保留了标注中的歧义与共现信息。
    *   显式证据检索（EIR）：强制性要求智能体在做出最终判断前，必须通过工具调用获取具体、可验证的证据（如逐字文本片段、离散化的音高描述），实现了推理过程的“白盒化”，决策可追溯至工具输出。
    *   GRPO与证据信任门：引入组相对策略优化（GRPO），并通过一个新颖的“证据信任门”机制，只在证据搜集得分与预测正确性正相关的轨迹群体上给予全额证据/工具奖励，有效防止智能体进行无意义的、为刷分而进行的工具调用（Reward Hacking）。
4.  主要实验结果如何：
    *   主实验 (MSP-Podcast v2.0)：ADEPT + GRPO在Primary Macro-F1上达到0.4224，超过最强监督基线WavLM（0.3640）和生成式基线BLSP-Emo（0.2915）。在全面恢复共现情绪上（Set Recall 61.92%，Jaccard 47.51%）显著优于其他生成式模型。
    *   消融实验：移除语义工具导致Primary Macro-F1下降幅度最大；移除声学工具导致Jaccard下降幅度最大；移除GRPO、信任门或精细化等组件均损伤性能，证明了各组件的互补性。
    *   资源分配分析：智能体的平均工具调用次数与标注歧义程度正相关，低共识样本（6.8次）远高于高共识样本（2.3次），从行为上验证了其“按需计算”的特性。
    *   零样本泛化：在IEMOCAP上的Set Recall（54.80%）超过微调后的SOTA模型BLSP-Emo（52.30%）；在CREMA-D上的Primary Macro-F1（0.6832）超过了除全监督WavLM Large外的所有基线模型。
5.  实际意义是什么：为高风险的SER应用（如心理健康筛查、共情式人机交互）提供了一种具备审计能力和透明度的新范式，使模型决策过程可追溯、可问责，并促进了对情感复杂性和包容性的建模。
6.  主要局限性是什么：计算成本极高；复杂的工具链设计和GRPO训练的稳定性是潜在瓶颈；对基座模型（Qwen-3-Omni）能力高度依赖；零样本泛化在单一准确率指标上仍可能不及在目标域完全微调的SOTA模型。

🔗 **开源详情**

- 代码：论文中未提供代码仓库链接。
- 模型权重：论文中未提及。
- 数据集：
  - MSP-Podcast corpus V2.0（主实验数据集）：该数据集由 The University of Texas at Dallas 的多模态信号处理实验室（MSP）创建，需通过其官网申请使用。
  - IEMOCAP（零样本泛化实验）：可通过 USC 的 SAIL 实验室官网获取。
  - CREMA-D（零样本泛化实验）：可在 GitHub 上公开获取。
- Demo：论文中未提及。
- 复现材料：论文正文和附录中给出了详尽的奖励函数设计、工具调用协议和部分超参数，但未提供训练配置文件、预训练检查点或脚本。具体配置如下：
  - 基座模型：Qwen-3-Omni。
  - 微调方法：Group Relative Policy Optimization (GRPO)。
  - 训练详情：使用169K样本，有效批次大小为256，每个Prompt采样K=8个rollout，训练2 epoch（共1250步）。复合奖励函数的公式和权重在正文和附录中给出。
  - 工具集：附录B、C、D详细描述了结构化先验、语义和声学探测工具的设计逻辑。
- 论文中提及的开源项目：WavLM， HuBERT， wav2vec 2.0， SALMONN， BLSP-Emo， Qwen2-Audio， Qwen3-Omni， emotion2vec， 及 Montreal Forced Aligner (MFA)。

📄 [OpenReview](https://openreview.net/forum?id=maA1s1S0db)

---

### 96. [Universal Algorithm-Implicit Learning](/audio-paper-digest-blog/posts/2026-07-04-universal-algorithm-implicit-learning)

✅ **6.5/10** | 前50% | #音频分类 | 创新 1.2/2 | 严谨 1/1.5 | 实验 1/1.5 | 影响 0.4/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Stefano Woerner（University of Tübingen, Cluster of Excellence "Machine Learning: New Perspectives for Science"）
- 通讯作者：Stefano Woerner（stefano@woerner.eu）
- 作者列表：Stefano Woerner（University of Tübingen）、Seong Joon Oh（Tübingen AI Center, University of Tübingen）、Christian F. Baumgartner（University of Tübingen / University of Lucerne, Faculty of Health Sciences and Medicine）

💡 **毒舌点评**

这篇论文在概念框架上做了一次漂亮的格式化——“Practical Universality”和“Algorithm-Implicit Learning”这两个概念确实让人耳目一新，把元学习领域长期存在的术语混乱问题梳理得相当清爽。但漂亮的壳子下面，实验部分在一些关键对照上遮遮掩掩，跨模态的结果本质上是在“证明自己的方法不比简单的特征压缩差太多”，这个论证力度距离真正的“Universal”还有相当距离。

📌 **核心摘要**

1. 要解决什么问题：现有元学习方法被限制在固定的特征域和标签空间内，无法在不同领域、模态和标签规模之间泛化，且缺乏统一的理论框架和术语定义。
2. 方法核心是什么：提出了“实用通用性”的理论定义和“算法显式 vs 算法隐式”的分类法，并据此设计了TAIL——一个基于Transformer的算法隐式元学习器，通过随机采样特征投影和随机注入标签嵌入字典实现跨模态、跨标签空间的泛化。
3. 与已有方法相比新在哪里：理论框架为元学习的泛化能力提供了形式化定义；方法上通过随机扩展排列投影实现特征无关性，通过全局可学习嵌入字典实现标签空间外推；使用非因果Transformer架构保证了排列不变性。
4. 主要实验结果如何：在MiniImageNet 5-shot达到99.63%，CIFAR-FS 5-shot达到94.55%，跨域数据集上整体优于所有基线。在仅用图像训练的情况下，跨模态文本（IMDB 5-shot 89.62%）和音频（MusicGenre 5-shot 55.33%）分类都取得最高性能。在标签外推实验中，TAIL可处理最多100类任务（训练时仅5类），计算效率比GPICL、CAML快数个数量级。具体关键结果如下表：

| 方法 | CIFAR-FS (5-shot) | MiniImageNet (5-shot) | tieredImageNet (5-shot) | PascalVOC (5-shot) |
|------|-------------------|----------------------|------------------------|---------------------|
| LinearProbe | 91.86 | 97.65 | 95.30 | 83.57 |
| ProtoHead | 91.09 | 97.58 | 95.54 | 84.26 |
| SNAIL | 91.03 | 98.93 | 97.43 | 85.47 |
| GPICL | 91.20 | 99.44 | 98.18 | 87.46 |
| CAML | 91.69 | 99.29 | 97.98 | 87.87 |
| TAIL | 94.55 | 99.63 | 98.67 | 89.78 |

5. 实际意义是什么：提供了一种不需要重训练即可跨模态、跨标签空间推理的通用元学习范式，大幅降低了部署成本和计算开销，在数据稀缺和隐私敏感的领域（如医疗影像）有潜在应用价值。
6. 主要局限性是什么：当前的实用通用性仅覆盖分类任务，无法处理回归、序列预测等任务类型。跨模态泛化能力受预训练编码器质量影响较大。从图像到音频的跨模态泛化（仅55%准确率）距离真正的“Universal”仍有显著差距。

🔗 **开源详情**

- 代码：https://github.com/StefanoWoerner/TAIL
- 模型权重：论文中未提及提供 TAIL 自身的训练权重
- 数据集：使用的数据集包括 ImageNet（https://image-net.org/）、Meta-Album（https://meta-album.github.io/）、MedIMeta（https://www.nature.com/articles/s41597-025-04866-4）、CIFAR-FS、miniImageNet、tieredImageNet、Pascal VOC、Caltech Birds、FGVC-Aircraft、meta-iNat、Paintings、IMDB 影评、GTZAN 音乐等，均为公开数据集，论文未提供统一的下载和处理脚本
- Demo：论文中未提及
- 复现材料：论文附录 D、E 提供了架构超参数（表 11）、训练步骤、优化器配置等细节，未提供单独的复现材料包。缺少 requirements.txt、数据预处理脚本、评估脚本
- 论文中引用的开源项目：OpenCLIP、DistilBERT、wav2vec 2.0、以及其他基础库（PyTorch、NumPy 等未显式列出）

📄 [OpenReview](https://openreview.net/forum?id=tAcVihAkb3)

---

### 97. [SARSteer: Safeguarding Large Audio Language Models via Safe-Ablated Refusal Steering](/audio-paper-digest-blog/posts/2026-07-04-sarsteer-safeguarding-large-audio-language-models)

✅ **6.5/10** | 前50% | - | 创新 0.8/2 | 严谨 1/1.5 | 实验 0.9/1.5 | 影响 0.7/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Weilin Lin（香港科技大学（广州））
- 通讯作者：Li Liu（香港科技大学（广州））
- 作者列表：Weilin Lin（香港科技大学（广州））、Jianze Li（中山大学理学院）、Hui Xiong（香港科技大学（广州））、Li Liu（香港科技大学（广州））

💡 **毒舌点评**

这篇论文精准抓住了LALM安全对齐中的一个真实痛点——音频模态为何让现有激活引导方法惨败，并用t-SNE和CKA双重视角给出了还算有说服力的解释。然而，方法本质上是"文本侧拒绝提示引导 + PCA投影去安全子空间"的组合，像一道精巧的工程菜，但缺乏任何让人眼前一亮的新调料。更致命的是：所有实验均在TTS合成的干净音频上进行，一到真实语音场景就靠附录里零星的探索来搪塞，审稿人完全有理由质疑其实际部署有效性。声称代码开源却缺乏文档，评估全靠有系统性保守偏差的LLM裁判，这些硬伤很难让顶会审稿人爽快放行。

📌 **核心摘要**

1. 解决问题：大型音频语言模型（LALM）面临严峻的音频输入安全隐患——语音输入相比文本更容易诱导模型输出有害内容，而直接迁移LLM/LVLM的安全对齐方法到LALM时遭遇两大失败：(1) 基于音频对比的激活引导因音频模态与文本模态的隐空间分布鸿沟而完全失效，反而恶化安全性能；(2) 提示型防御在语义相近的良性查询上引发显著的过度拒绝问题。
2. 方法核心：SARSteer是一个纯推理时安全防御框架，其两大组件分别是：(1) 文本派生拒绝引导——不对比音频激活，而是从追加的纯文本拒绝提示（默认"I cannot assist with that."）中提取激活差异向量，完全绕开不可引导的音频激活空间；(2) 分解安全空间消融——在安全样本激活上用PCA提取安全语义主成分子空间，将拒绝引导向量投影到该子空间的正交补上，确保引导信号只压制有害方向而不干扰良性输入。
3. 与已有方法的关键区别：不同于LLM中基于harmful-safe文本对或合规-拒绝对的激活引导（如MDSteer-h2s和MDSteer-c2r），SARSteer首次揭示了音频模态下harm-to-safe方向因分布完全分离而不可靠，转而从纯文本拒绝语义中提取模态无关的引导方向；同时引入PCA安全空间消融来显式解耦拒绝信号与安全语义，缓解了提示型防御和原生引导方法中严重的过度拒绝问题。
4. 主要实验结果：在Qwen2-Audio和Kimi-Audio两个主要模型上，SARSteer均取得了较好的安全-效用平衡。在Figstep-audio上，Qwen2-Audio的ASR从51.60%降至10.80%，BRR从70.20%升至79.95%；Kimi-Audio的ASR从15.60%降至10.00%，BRR从61.40%升至88.80%。消融实验证实了文本派生拒绝向量和PCA消融各自的必要性。

### 主要安全性能表
| 模型 | 方法 | Figstep-audio ASR(↓%) | SORRY-Bench-audio ASR(↓%) | AJailBench ASR(↓%) | AdvBench-audio ASR(↓%) | Figstep-audio BRR(↑%) | AdvBench-audio BRR(↑%) |
|------|------|----------------------|--------------------------|--------------------|----------------------|----------------------|----------------------|
| Qwen2-Audio | NoDefense | 51.60 | 27.50 | 48.76 | 2.88 | 70.20 | 85.19 |
| Qwen2-Audio | AdaShield | 30.00 | 20.45 | 19.00 | 1.15 | 69.80 | 79.81 |
| Qwen2-Audio | FSD | 12.00 | 10.55 | 19.00 | 0.78 | 63.20 | 63.95 |
| Qwen2-Audio | MDSteer-h2s | 84.00 | 75.45 | 38.50 | 26.35 | 60.80 | 81.15 |
| Qwen2-Audio | MDSteer-c2r | 90.80 | 78.41 | 49.00 | 23.46 | 54.20 | 84.23 |
| Qwen2-Audio | SARSteer | 10.80 | 13.41 | 18.00 | 0.58 | 79.95 | 85.00 |
| Kimi-Audio | NoDefense | 15.60 | 12.50 | 17.00 | 0.00 | 61.40 | 60.77 |
| Kimi-Audio | AdaShield | 0.00 | 0.23 | 1.50 | 0.00 | 52.60 | 45.29 |
| Kimi-Audio | FSD | 19.60 | 11.14 | 12.50 | 0.00 | 61.20 | 54.81 |
| Kimi-Audio | MDSteer-h2s | 72.40 | 55.00 | 43.50 | 10.38 | 68.80 | 81.25 |
| Kimi-Audio | MDSteer-c2r | 30.71 | 21.59 | 24.00 | 0.00 | 79.68 | 83.62 |
| Kimi-Audio | SARSteer | 10.00 | 6.14 | 11.00 | 0.00 | 88.80 | 86.83 |

5. 实际意义：SARSteer首次为LALM提供了无需微调、纯推理时的轻量级安全防御方案，有望直接集成到现有语音助手、音频理解系统中，在保持良性交互能力的同时显著阻止有害语音查询，为语音AI的安全部署提供了新思路。
6. 主要局限性：(1) 论文明确承认只在TTS合成数据集上测试，对真实世界语音的鲁棒性尚未充分验证；(2) PCA子空间的提取依赖安全样本，在安全样本极度匮乏的零样本场景下适用性受限；(3) 引导系数α和主成分数k需手动调节，缺少自动化选择机制；(4) 所有实验均在离线batch模式下进行，未涉及实时流式推理的适配讨论。

🔗 **开源详情**

- 代码：https://github.com/linweiii/SARSteer
- 模型权重：论文未提供（使用现有LALM进行评测，无需额外模型权重）
- 数据集：作者构建的音频领域有害-安全配对数据集（Figstep-audio、AdvBench-audio、SORRY-Bench-audio、AJailBench等）随代码发布
- Demo：论文未提及
- 复现材料：核心算法流程在正文及附录A.5中给出，超参数和实现细节在正文及附录A.3、A.5中说明，代码仓库中将包含实验配置；无独立检查点或训练脚本提供
- 论文引用的开源项目：
  - Qwen2-Audio: https://github.com/QwenLM/Qwen2-Audio
  - Kimi-Audio: 未提供公开代码仓库（参考技术报告 arXiv:2504.18425）
  - OpenAI TTS-1-hd: https://platform.openai.com/docs/models/tts-1-hd
  - DeepSeek-R1: https://github.com/deepseek-ai/DeepSeek-R1
  - SORRY-Bench: https://github.com/Social-AI-Studio/SORRY-Bench
  - AdvBench (Zou et al. 2023): https://github.com/llm-attacks/llm-attacks
  - FigStep (Gong et al. 2025): AAAI 2025论文，未提供独立代码仓库
  - AJailBench (Song et al. 2025): https://github.com/op7586/AJailBench
  - AirBench (Yang et al. 2024b): https://github.com/OpenAIRLLM/AIR-Bench
  - AdaShield: https://github.com/AdaShield/AdaShield
  - FSD (FigStep defense): 与FigStep攻击论文相同，未提供独立防御代码仓库
  - LLM-as-judge (Mistral-7B fine-tuned): https://huggingface.co/sorry-bench/ft-mistral-7b-instruct-v0.2-sorry-bench-202406
  - Jailbreak-AudioBench (Cheng et al. 2025): https://github.com/hczhao328/Jailbreak-AudioBench
  - Qwen2.5-Omni, Qwen3-Omni, Voxtral-Mini: 未在正文中提供额外链接，可在HuggingFace或官方文档中检索

📄 [OpenReview](https://openreview.net/forum?id=2iC5H9k8am)

---

### 98. [MetaPerch: Learning from metadata for bioacoustics foundation models](/audio-paper-digest-blog/posts/2026-07-04-metaperch-learning-from-metadata-for-bioacoustics)

✅ **6.5/10** | 前50% | #音频分类 | 创新 1/2 | 严谨 1/1.5 | 实验 1/1.5 | 影响 0.8/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Mustafa Chasmai（University of Massachusetts Amherst，工作期间在Google DeepMind）
- 通讯作者：Jenny Hamer（Google DeepMind）
- 其他作者：Vincent Dumoulin（Google DeepMind）

💡 **毒舌点评**

这篇论文在生物声学元数据利用上做了一次大规模、系统化的实证练兵，17个数据集、9种元数据的覆盖度与消融颗粒度值得肯定，尤其揭示了位置和背景物种是最有价值的辅助信号。然而，方法的核心仅仅是给共享编码器加了一组元数据分类头，完全可以视作对多任务学习框架的常规扩写，其声称的增益很大程度上源于一个被“阉割”的基线——有意扔掉了Perch 2.0的源预测和自蒸馏，这使得元数据的净增量贡献变得模糊不清。此外，验证与测试性能排序的不一致暴露出其模型选择策略的脆弱性，而回避与NatureLM-audio等文本条件化方法的直接对比，则是为了护住“无需测试时元数据”这一卖点的巧妙躲闪。

📌 **核心摘要**

1.  要解决什么问题：生物声学基础模型面临着从训练用焦点录音到实际部署的被动声学监测(PAM)数据之间的声学域偏移和物种分布偏移。现有大规模训练方法仅将物种标签作为监督信号，未充分利用公民科学平台上丰富的录音元数据。
2.  方法核心：提出METAPERCH，在Perch 2.0的基架构上构建了多任务学习框架。将录音的地理位置（S2 cell分类）、季节、背景物种等9种元数据作为辅助分类任务，与主任务物种识别进行联合训练。
3.  与已有方法相比新在哪里：首次系统性地将9种per-recording元数据作为辅助监督信号引入生物声学基础模型训练，并通过大规模实验解耦了各元数据源的效果。与传统的测试时条件化方法（如Merlin）不同，该方法在测试时无需元数据即可推理，降低了部署门槛。
4.  主要实验结果如何：在17个数据集上评测，METAPERCH相比其自定义的弱化基线BioBaseline，在BirdSet平均ROC-AUC提升0.015（0.891→0.906），BEANS分类准确率提升0.016（0.854→0.870），WABAD原型学习ROC-AUC提升0.018（0.928→0.946）。其中，位置、背景物种和季节被证明是最有益的元数据源，且在仅保留1%位置元数据时仍能观察到性能增益。
5.  实际意义：为生物声学社区提供了一套无需测试时元数据的训练范式，可作为后续数据集构建和训练策略选择的参考，尤其对地理分布不均的稀有物种监测有指导意义。
6.  主要局限性：基线BioBaseline弱化了对比公平性；验证集与测试集的性能排序不一致导致模型选择不可靠；回避了与多模态预训练方法的直接公平对比；来源预测和自蒸馏的移除是双刃剑，可能导致归因分析高估了元数据的净增益。

🔗 **开源详情**

-   代码：提供GitHub仓库链接 `github:google-research/perch/metaperch`。
-   模型权重：未提及，未提供。
-   数据集：所用训练与评估数据均为公开学术或社区数据集，包括Xeno-Canto, iNaturalist, Tierstimmenarchiv, FSD50K, BirdSet, BEANS, WABAD等。数据集获取方式在原文参考文献中均有说明。
-   其他资源：未提及Demo或复现配置文件，亦未提供预训练checkpoint。论文附录A.6给出了详尽的超参数设置，但缺少可直接运行的训练pipeline脚本。

📄 [OpenReview](https://openreview.net/forum?id=qPhgIY8x81)

---

### 99. [Polyphonia: Zero-Shot Timbre Transfer in Polyphonic Music with Acoustic-Informed Attention Calibration](/audio-paper-digest-blog/posts/2026-07-04-polyphonia-zero-shot-timbre-transfer-in)

✅ **6.5/10** | 前50% | #音乐生成 | 创新 1.5/2 | 严谨 1/1.5 | 实验 0.8/1.5 | 影响 0.5/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Haowen Li（华南理工大学未来技术学院）
- 通讯作者：Qi Liu（华南理工大学未来技术学院）
- 作者列表：Haowen Li（华南理工大学未来技术学院）、Tianxiang Li（华南理工大学未来技术学院）、Yi Yang（华南理工大学未来技术学院）、Boyu Cao（华南理工大学未来技术学院）、Qi Liu†（华南理工大学未来技术学院）(*表示共同第一作者，†表示通讯作者)

💡 **毒舌点评**

这篇论文找到了一个非常漂亮的insight——将BSS的判别式输出（IRM）转化为扩散模型里的软注意力约束，以此解决复调音乐中纯语义注意力“找不到北”的问题。想法本身是成立的，实验也基本撑住了SOTA的claim。但问题是，整个框架厚重地寄生在预训练AudioLDM 2的躯体上，推理慢如牛（10秒音频需24秒），且对BSS模型的质量有硬依赖——本质上是用一个黑箱去修另一个黑箱的缺陷。更致命的是，最强对手PPAE被以“复现困难”为由直接踢出局，这让实验的公平性打上问号。代码和模型权重均未公开，同态可复现性堪忧，这让论文更像一场精巧的概念验证秀，而非社区可信赖的基线。

📌 **核心摘要**

1. 问题：本文要解决的是零样本、声部级（stem-specific）的复调音乐音色迁移——即精准改变特定声部的音色（如人声→小提琴），同时严格保留其他声部和整体音乐结构不变。现有方法（如Melodia、SteerMusic）因依赖纯语义交叉注意力而缺乏频谱分辨率，在密集混音中遭遇“语义-声学不对齐”（Semantic-Acoustic Misalignment），导致非目标声部失真（Non-target Distortion）或目标声部编辑失败（Target Misalignment）。
2. 方法核心：提出Polyphonia框架，核心是“声学先验校准注意力”（Acoustic-Informed Attention Calibration）。通过盲源分离（BSS）模型HT-Demucs提取概率化的理想比率掩码（IRM）作为声学先验 $G_{IRM}$，将其注入预训练扩散模型AudioLDM 2的T-UNet注意力层，实施两种校准操作：源插值（Source Interpolation）保背景，声学调制（Acoustic Modulation）强目标，从而在粗粒度频谱边界内进行精粒度语义合成。
3. 新颖性：首次形式化复调音乐编辑中的“语义-声学不对齐”问题；将判别式的BSS输出（IRM）转化为生成式扩散模型内的软注意力偏差，统一了判别与生成范式；提出了在Pre-Softmax logit空间进行注意力干预的机制，利用Softmax的非线性放大效应以实现更锐利的决策边界。
4. 主要实验结果：在MUSDB18-HQ和MusicDelta数据集上，使用自建的PolyEvalPrompts基准（1170个编辑任务）进行评测。Polyphonia的CLAP分数比最优基线Melodia提升约15.5%（MusicDelta: 0.437 vs. 0.380）。在结构保持与音色对齐的综合指标（ASB, AMB）上取得最优平衡，但在LPAPS和CQT1-PCC等结构保真度指标上并非最优，展现了灵敏度-保真度的清晰trade-off。主观评估中，Polyphonia在目标音色准确性（TTA）和全局音频一致性（GAC）上得分最高。
5. 实际意义：为音乐制作提供了一种零样本的声部级精确编辑工具，避免了对昂贵监督微调（如Music ControlNet）的依赖，具有直接集成的工程潜力。
6. 主要局限性：推理速度慢（扩散迭代100步），高度依赖BSS模型的分离质量和预训练生成模型的能力天花板。作者声称将探索flow-matching等加速策略。

🔗 **开源详情**

- 代码：未提供任何代码仓库链接。
- 模型权重：未发布 Polyphonia 自身的模型权重。实验依赖于预训练的第三方模型：AudioLDM 2 的 `cvssp/audioldm` checkpoint、MusicGen 的 `facebook/musicgen-melody` checkpoint、HT-Demucs、Open-Unmix 等，这些均为公开可获取的开放权重。
- 数据集：使用公开数据集 MUSDB18-HQ 和 MusicDelta（来自MedleyDB）。自建的 PolyEvalPrompts 数据集已公开在Demo页面，但未提供直接下载链接。
- Demo：https://polyphonia2026.github.io/polyphonia-demo/
- 复现材料：论文附录（C、E、G、J）提供了详细的实现细节、超参数配置与评估方法，并包含核心算法的伪代码。但缺少实际源码、配置文件或模型权重，不能直接复现。
- 论文中引用的开源项目：
  - AudioLDM 2：https://github.com/haoheliu/AudioLDM2
  - HT-Demucs：https://github.com/facebookresearch/demucs
  - Open-Unmix：https://github.com/sigsep/open-unmix-pytorch
  - LAION-CLAP：https://github.com/LAION-AI/CLAP
  - MusicGen（来自 AudioCraft）：https://github.com/facebookresearch/audiocraft
  - T5（text-to-text-transfer-transformer）
  - GPT-2：https://github.com/openai/gpt-2
  - nnAudio：https://github.com/KinWaiCheuk/nnAudio
  - Qwen-Audio：https://github.com/QwenLM/Qwen-Audio
  - Qwen3：https://github.com/QwenLM/Qwen3
  - fadtk（FAD 工具）：https://github.com/gudgud96/fadtk

📄 [OpenReview](https://openreview.net/forum?id=L8VRGNACqH)

---

### 100. [CMI-RewardBench: Evaluating Music Reward Models with Compositional Multimodal Instruction](/audio-paper-digest-blog/posts/2026-07-04-cmi-rewardbench-evaluating-music-reward-models)

✅ **6.4/10** | 前50% | #音乐生成 | 创新 1.2/2 | 严谨 1/1.5 | 实验 1.2/1.5 | 影响 1/1.5 | 开源 0.3/1.5

👥 **作者与机构**

- 第一作者：Yinghao Ma (Queen Mary University of London) 和 Haiwen Xia (Peking University) 为同等贡献
- 通讯作者：Yinghao Ma (yinghao.ma@qmul.ac.uk), Emmanouil Benetos (emmanouil.benetos@qmul.ac.uk)
- 作者列表：Yinghao Ma (Queen Mary University of London), Haiwen Xia (Peking University), Hewei Gao (Technical University of Munich; Technical University of Denmark), Weixiong Chen (Queen Mary University of London), Yuxin Ye (Beijing University of Post and Telecommunications), Yuchen Yang (Soochow University), Sungkyun Chang (Queen Mary University of London), Mingshuo Ding (Peking University), Yizhi Li (University of Manchester), Ruibin Yuan (Hong Kong University of Science and Technology), Simon Dixon (Queen Mary University of London), Emmanouil Benetos (Queen Mary University of London)

💡 **毒舌点评**

论文构建了一套相对完整的音乐RM评估体系，数据规模可观，基准设计用心。但方法本质上是双塔+Transformer融合范式的领域迁移，创新性有限；代码、模型和数据集均只给出一纸声明而无具体链接，开源态度令人失望；对单一预训练编码器的强绑定使得RM的上限被锁死，歌词与跨模态理解能力仍是硬伤。

📌 **核心摘要**

1. 要解决的问题：音乐生成评估体系碎片化，缺乏支持组合式多模态指令（文本+歌词+参考音频）的统一基准与奖励模型，通用多模态大模型也无法在此场景下可靠对齐人类偏好。
2. 方法核心：提出CMI-RewardBench基准（整合5项评测任务），并基于冻结的MuQ-MuLan编码器构建了轻量级（约30M可训参数）的CMI-RM奖励模型；模型包含Prompt Transformer和Joint Transformer，通过大规模伪标签（110k）预训练加人类精标数据（4k）微调的两阶段策略学习音乐性与指令对齐偏好。
3. 新在何处：首次构建了覆盖多模态组合条件的音乐偏好数据集（CMI-Pref）及相应基准；系统性地揭示了前沿MLLM在音乐评估上与人类专家的巨大差距；验证了轻量级RM可通过Best-of-N筛选实现有效的推理时扩展。
4. 主要实验结果：在Music Arena上，CMI-RM的配对偏好准确率达73.4%（接近SongEval-RM的73.9%）；在更具挑战性的CMI-Pref上，准确率提升至78.2%，超越所有开源和部分闭源基线；Best-of-N筛选可为MusicGen-small带来MuQ-MuLan分数的提升（0.298→0.339）。
5. 实际意义：为音乐生成的后训练与推理优化提供了一个多模态、参数高效的评判工具，降低了对齐成本。
6. 主要局限性：方法创新不足，对MuQ-MuLan编码器存在强依赖；歌词理解是明显短板（部分场景下加入歌词导致性能下降）；伪标签教师模型（Qwen3-Omni）本身存在偏好偏差，尽管RLHF有所缓解但未根除；无实际RLHF闭环验证。

🔗 **开源详情**

- 代码：论文声称“Code is available at GitHub”，但未提供具体的GitHub仓库链接。
- 模型权重：论文声称“Model weights: CMI-RM”，但未提供任何下载链接（如HuggingFace或ModelScope）。
- 数据集：
  - CMI-Pref-Pseudo (110k伪标签偏好数据集)：未提供具体下载链接。
  - CMI-Pref (4,027条人工标注偏好数据集)：未提供具体下载链接。
  - 数据集和基准声称采用CC-BY-NC-SA许可证发布，并附有数据卡。
- Demo：论文未提及。
- 复现材料：论文详细描述了模型架构、训练流程（Stage 1: Bradley-Terry预训练2k步，bs=48，标签平滑0.2；Stage 2: 混合微调至250步最优检查点）及评测协议，附录包含人工标注协议和伪标签生成流程，但缺少可运行的训练脚本及模型权重，无法直接复现训练过程。
- 论文中引用的开源项目包括PAM、MusicEval、Music Arena、SongEval、Qwen系列、Gemini系列、MuQ-MuLan、MusicGen、Stable Audio Open等（见原文参考文献），但均非本文贡献。

📄 [OpenReview](https://openreview.net/forum?id=k9DhP16RZt)

---

### 101. [Multimodal Fact-Level Attribution for Verifiable Reasoning](/audio-paper-digest-blog/posts/2026-07-04-multimodal-fact-level-attribution-for-verifiable)

✅ **6.4/10** | 前50% | #音频理解 | 创新 1.2/2 | 严谨 1/1.5 | 实验 1/1.5 | 影响 0.6/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：David Wan（UNC Chapel Hill）
- 通讯作者：David Wan（UNC Chapel Hill）
- 作者列表：David Wan（UNC Chapel Hill）、Han Wang（UNC Chapel Hill）、Ziyang Wang（UNC Chapel Hill）、Elias Stengel-Eskin（The University of Texas at Austin）、Hyunji Lee（UNC Chapel Hill）、Mohit Bansal（UNC Chapel Hill）

💡 **毒舌点评**

这篇论文在"可验证推理"的命题下，构建了一个精细的多模态事实级归因评估框架，将文本域的原子事实分解和Precision/Recall引用评估范式迁移到了视频+音频场景，实验覆盖了Gemini和Qwen等主流MLLM，揭示了"推理强不代表能正确举证"的核心洞察。然而，MURGAT-SCORE本质上是一个由多个LLM组件级联而成的评估pipeline，各子任务虽非单一模型，但最优模块几乎都来自Gemini家族，尽管论文进行了跨模型评估器对比以佐证其无显著偏差，但评估框架对顶级商用闭源模型的依赖，依然限制了其在开源社区的应用与复现深度。此外，人类评估样本仅20个视频/80条回答，虽在统计相关性上勉强站得住，但用于宣称构建"基准"，其ground truth的规模和多样性都显得单薄，这使得其"基准"定位的稳固性存疑。

📌 **核心摘要**

1.  问题：现有多模态大语言模型在多步推理和长文本生成中存在幻觉问题，但现有的多模态归因评估方法局限于简化场景（如直接观察）、单一模态（主要为视觉），无法评估复杂推理中跨模态（视频+音频+图表）的事实级归因质量。
2.  方法核心：提出MURGAT基准和MURGAT-SCORE自动化评估框架。评估分三步：（1）可验证声明识别——过滤掉推理性句子，只保留需要证据支撑的可验证句子；（2）原子事实分解——将句子拆分为最小可验证的原子事实并传播引用；（3）归因质量评估——评判每个原子事实是否被引用的多模态片段所蕴含（Recall）且每个引用片段是否必要（Precision）。



3.  创新点：首次在多模态复杂推理场景下引入"事实级"归因评估，显式区分可验证声明与推理步骤，并将时间戳+模态的双重引用要求纳入评估指标。这是将文本域FActScore/Gao et al.的引用评估体系系统性地迁移到多模态视频理解的早期工作之一。
4.  主要实验结果：
    *   人类评估（Table 1）：Gemini-2.5-Flash在WorldSense上MURGAT-S为59.9，但在Video-MMMU上仅21.8；所有模型的归因质量均远低于问答准确率。



    *   自动化评估（Table 5）：最强的Gemini-3-Flash在WorldSense上MURGAT-S为69.2，Video-MMMU为56.9。Post-hoc归因方法在WorldSense上能提升归因质量，但在Video-MMMU上则显著损害精确度（Gemini-3-Flash的归因F1从64.5降至47.2）。



    *   [图像补充] 图2清晰展示了推理投入缩放效应：Gemini-3-Flash的MURGAT-S随推理级别增加（Minimal→Low→High）而单调下降，而Gemini-3-Pro则上升。
5.  实际意义：为多模态模型的可信度评估提供了可自动化的框架，揭示了当前强模型"说得对但证不对"的系统性缺陷，对多模态RAG、视频QA等下游应用有直接参考价值。
6.  主要局限性：人类标注规模极小（20视频/80回答），自动评估器存在潜在的模型偏差，缺乏对开源MLLM的深度测试，未提供训练改进方案而仅限于评估。

🔗 **开源详情**

*   代码：https://github.com/meetdavidwan/murgat
*   模型权重：论文中未提供自研模型权重；实验使用的预训练模型包括 Gemini-2.5-Flash、Gemini-3-Flash、Gemini-3-Pro、Qwen3-Omni-Instruct、Qwen3-Omni-Thinking、Qwen3-VL-Instruct、Qwen3-VL-Thinking、Molmo2-8B，这些模型的权重获取方式请参见对应官方仓库（闭源模型除外）
*   数据集：MURGAT 基准构建在已有数据集 WorldSense 和 Video-MMMU 之上，论文中未发布新的独立数据集下载链接，但代码仓库中包含了采样与处理脚本（详见仓库 README），部分原始数据集需按原数据集许可获取
*   Demo：论文中未提及
*   复现材料：代码仓库提供了完整的评估流水线（MURGAT-SCORE）以及生成与评估所需的全部提示词（附录E中有详细提示模板）；训练配置、检查点等未提及
*   论文中引用的开源项目：
    *   Qwen3-Omni: https://github.com/QwenLM/Qwen3-Omni
    *   Qwen3-VL: https://github.com/QwenLM/Qwen3-VL
    *   Molmo2: https://huggingface.co/allenai/Molmo-8B-0924
    （其余文中使用的闭源模型如 Gemini 未列入开源项目）

📄 [OpenReview](https://openreview.net/forum?id=IEDC7yFpLe)

---

### 102. [MedMosaic: A Challenging Large Scale Benchmark of Diverse Medical Audio](/audio-paper-digest-blog/posts/2026-07-04-medmosaic-a-challenging-large-scale-benchmark-of)

✅ **6.4/10** | 前50% | #音频理解 | 创新 0.8/2 | 严谨 0.8/1.5 | 实验 1.2/1.5 | 影响 1/1.5 | 开源 0.8/1.5

👥 **作者与机构**

- 第一作者：Harshit Rajgarhia（Centific Global Solutions Inc.）
- 通讯作者：Harshit Rajgarhia（Centific Global Solutions Inc.）
- 作者列表：Harshit Rajgarhia（Centific Global Solutions Inc.）、Shuubham Ojha（Centific Global Solutions Inc., University of Maryland, College Park）、Asif Shaik（Centific Global Solutions Inc.）、Akhil Pothanapalli（Centific Global Solutions Inc.）、Rachuri Lokesh（Centific Global Solutions Inc.）、Abhishek Mukherji（Centific Global Solutions Inc.）、Prasanna Desikan（Centific Global Solutions Inc.）

💡 **毒舌点评**

这篇论文构建了一个规模可观（46k QA对）且设计精巧的医学音频推理基准，通过对13个前沿模型的系统评测，清晰暴露了当前多模态大模型在医学音频上的显著短板，尤其是言语理解与生理声理解的严重偏科。然而，数据完全依赖合成生成和API调用，使整个基准的价值高度绑定于特定商业模型（Gemini和ElevenLabs）的生成能力，缺乏对“真实”临床音频分布差距的严格验证；且没有开源代码、模型或完整的生成流水线，连自身宣称的“scalable”理念都无法让社区复制，工程诚意严重不足。

📌 **核心摘要**

1. 要解决什么问题：现有音频推理基准极少覆盖医学领域，缺乏对长时序、多轮对话、跨模态（言语+生理声）医学音频推理的系统评测，导致多模态大模型的临床推理能力难以被有效评估。
2. 方法核心是什么：论文提出了MedMosaic基准，包含46,701个问答对，覆盖纯生理声、短/长程医患对话、语音与生理声混合、多轮依赖对话、开放生成和语音内嵌问题共7种问答类型。QA对全部通过Gemini-3-Flash API合成生成，辅以ElevenLabs v3 TTS进行声学标签渲染，并由临床专家对145个样本进行人工抽检验证。
3. 与已有方法相比新在哪里：相比MMAU、MMAR等通用音频推理基准，MedMosaic首次将长程时序医学对话、多轮状态依赖推理和语音-生理声跨模态整合引入评测框架，并通过精细化设计的迷惑选项和难度分层来强制模型依赖真实听觉信息作答。相比CaReAQA等现有医学音频基准，其在规模、覆盖模态和推理维度上均有显著扩展。
4. 主要实验结果如何：评测13个模型显示，最强模型Gemini-2.5-Pro加权平均准确率仅68.1%，开源的Qwen-2.5-Omni-7B为42.8%。GPT-4o-Audio在纯声音任务上表现极差（心音3.2%、咳嗽2.1%），且拒绝处理大量音频样本，暴露了严重的听觉偏科。无音频输入的纯文本基线导致所有模型准确率大幅下降，验证了音频对作答的必要性。
5. 实际意义是什么：为医学音频推理模型提供了一个大规模、多维度、难度可控的评测工具，有助于暴露当前模型在言语vs.声音和长程推理方面的能力短板，为医学音频多模态模型的发展方向提供指引。
6. 主要局限性是什么：数据完全由Gemini-3-Flash API与ElevenLabs v3合成，缺乏对真实临床环境噪声、录音设备差异等分布特性的覆盖；合成声学标签（如咳嗽、喘息）的临床声学真实性尚未严格验证；全部为英文数据；未提供代码和生成工具包，社区无法独立复现或扩展。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及。
- 数据集：MedMosaic 基准数据集，论文提供了数据样本链接：https://shorturl.at/Lyp33（短网址跳转，完整获取方式未明确说明）。
- Demo：论文中未提及。
- 复现材料：论文中未提及复现代码或检查点，但在附录 A.11 中提供了生成不同类型QA对的提示词（Prompts）模板。
- 论文中使用的开源项目：
  - Primock57: https://arxiv.org/abs/2204.00333
  - Primock-med: https://huggingface.co/datasets/Na0s/Primock_med
  - Ekacare: https://huggingface.co/datasets/ekacare/eka-medical-asr-evaluation-dataset
  - MultiMed (Le-Duc et al., 2025): 未提供直接链接
  - MTS Dialog: https://huggingface.co/datasets/har1/MTS_Dialogue-Clinical_Note
  - CoughVID: https://doi.org/10.1038/s41597-021-00937-4
  - HLS-CMDS: https://doi.org/10.1109/IEEEDATA.2025.3566012
  - CirCor DigiScope Phonocardiogram Dataset: https://doi.org/10.13026/tshs-mw03
  - MedDialog-Audio (Gassenn et al., 2025): 未提供直接链接
  - Hani89: https://huggingface.co/datasets/Hani89/medical_asr_recording_dataset
  - ElevenLabs v3 TTS: https://elevenlabs.io/blog/eleven-v3 （商业文本转语音服务，非开源）

📄 [OpenReview](https://openreview.net/forum?id=OMdQJQwp26)

---

### 103. [INFER: Learning Implicit Neural Frequency Response Fields for Confined Acoustic Environments](/audio-paper-digest-blog/posts/2026-07-04-infer-learning-implicit-neural-frequency-response)

✅ **6.4/10** | 前50% | #空间音频 | 创新 1.2/2 | 严谨 1.1/1.5 | 实验 0.9/1.5 | 影响 0.9/1.5 | 开源 0.4/1.5

👥 **作者与机构**

- 第一作者：Harshvardhan C. Takawale（马里兰大学帕克分校计算机系；工作完成于Dolby Laboratories, Inc.）
- 通讯作者：Harshvardhan C. Takawale（<htakawal@umd.edu>）
- 作者列表：Harshvardhan C. Takawale（马里兰大学帕克分校计算机系 / Dolby Laboratories, Inc.）、Nirupam Roy（马里兰大学帕克分校计算机系）、C. Phillip Brown（Dolby Laboratories, Inc.）

💡 **毒舌点评**

这篇文章以“frequency-first”为旗号，构建了一个工程上相当完备的频域神经声场建模管道。将Kramers-Kronig因果关系约束引入神经声场渲染，确实为黑箱模型注入了一丝物理可解释性，这值得肯定。然而，论文最大的争议点在于：它猛烈抨击时域方法“难以捕获频率选择性行为”，但其自身在关键的时域混响指标T60上却遭遇了灾难性滑坡（Buck数据集上T60误差高达9.8，而AVR仅为3.2）。作者将这一退化轻描淡写地归因于“感知频率加权”，但并未从原理上令人信服地论证为何频域建模必然导致时域包络的崩溃。这在某种程度上是“在频域考场上用频域模型吊打时域学生”，其宣称的39%幅度提升和51%相位提升，其比较基准的公平性值得读者深思。

📌 **核心摘要**

1. 问题：在汽车座舱等受限声学环境中，声音传播路径短、模态共振密集、材料属性复杂，导致声场呈现尖锐的频域选择性特征。传统时域神经声场方法（如NAF、INRAS、AVR）通过预测时域脉冲响应再变换到频域，难以精确捕捉这种频谱结构。
2. 方法：提出INFER（Implicit Neural Frequency Response fields），直接在频域学习连续、复值的频率响应场。模型通过频域可微体积渲染合成任意接收点的复频率响应，并引入Kramers-Kronig物理正则化来耦合衰减和相位，同时采用感知与硬件感知的频谱加权损失函数进行监督。
3. 创新点：(a) 频域优先的神经声场参数化，直接预测复值频谱；(b) 感知和硬件感知的频谱加权损失函数，强调关键听觉频段并抑制不稳定区域；(c) 物理驱动的Kramers-Kronig一致性正则化，强制衰减与色散的因果耦合。
4. 实验结果：在MeshRIR、RAF、COMSOL仿真数据和真实汽车座舱（Buck、Tesla）上进行评估。核心频域指标上超越基线模型：在Buck数据集中，幅度误差为0.120（AVR为0.215），相位误差为0.500（NAF为0.535）；在Tesla数据集中，幅度误差为0.140（AVR为0.281），相位误差为0.590（AVR为1.614）。声称平均幅度误差降低39%，相位误差降低51%。消融实验验证了各损失分量的贡献，KK约束带来明显增益（移除KK后相位误差从0.48升至0.77）。同时，附录中的控制变量实验（Table 12）证明，频域表征本身（而非仅损失设计）是性能提升的主要来源。
5. 实际意义：为车载沉浸式音频、空间警示音渲染等应用提供了一种数据驱动、物理可解释的频域建模方案，可直接对接现有的音频均衡和声场回放流程。
6. 主要局限：时域混响指标（T60）因感知加权而退化，暴露出频域优化与时域保真度之间的根本性权衡；KK约束实质上是启发式正则化，而非严格的物理求解；仅在静态场景中评估；泛化到全新空间几何或材料配置的能力未验证。

🔗 **开源详情**

-   代码：论文声明实施细节和代码可在项目网页（https://harshvardhan-takawale.github.io/infer/）获取，但当前未提供任何直接的代码仓库链接。考虑到论文标注的发表年份为2026年，可能存在时滞。
-   模型权重：未提及。
-   数据集：论文使用了MesRIR、RAF、COMSOL仿真数据以及自采集的Buck和Tesla车内测量数据。其中MesRIR和RAF是公开数据集，但自采数据未提供任何公开下载链接。
-   Demo：未提及。
-   复现材料：论文附录A.1和A.2提供了详细的实施细节、超参数列表、训练脚本指令和硬件要求，为复现提供了重要参考。
-   论文引用的开源项目：tiny-cuda-nn, auraloss, TensorBoard, PyTorch。

📄 [OpenReview](https://openreview.net/forum?id=2tsdSKz3Yi)

---

### 104. [Characterizing the Predictive Impact of Modalities with Supervised Latent-Variable Modeling](/audio-paper-digest-blog/posts/2026-07-04-characterizing-the-predictive-impact-of)

✅ **6.4/10** | 前50% | - | 创新 1/2 | 严谨 1/1.5 | 实验 1/1.5 | 影响 0.4/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Divyam Madaan（New York University, Courant Institute of Mathematical Sciences）
- 通讯作者：Divyam Madaan（New York University, Courant Institute of Mathematical Sciences）（原文未明确区分通讯作者，但根据惯例和联系方式可推断）
- 作者列表：Divyam Madaan（New York University, Courant Institute of Mathematical Sciences）、Sumit Chopra（New York University, Courant Institute of Mathematical Sciences; Grossman School of Medicine）、Kyunghyun Cho（New York University, Courant Institute of Mathematical Sciences; CIFAR LMB）

💡 **毒舌点评**

本文提出了一个有洞察力的方向：不止于填补缺失模态，而是刻画缺失模态对预测结果的影响。通过潜变量建模与方差度量 V，巧妙地将缺失模态带来的不确定性转化为可解释的信号。然而，实验规模停滞在小数据集与两个模态的组合，且对“模态影响度量本身如何被验证”这一核心挑战几乎未触及，使得量化分析的结果停留在启发式层面，难以严格评估其可靠性。方法在单模态预测任务上的性能甚至未能完全复现简单基线的效果，这引发了对其判别式训练目标有效性的根本性质疑。

📌 **核心摘要**

1.  要解决的问题：在多模态学习中，一个或多个模态在训练或推理时常缺失。现有工作多聚焦于填补缺失输入，但更好的生成质量未必带来更好的预测。本文希望量化缺失模态对预测结果的具体影响，即回答“对于给定的多模态样本，一个模态如何影响预测？”这一核心问题。
2.  方法核心：提出 PRIMO，一个有监督的潜变量模型，用一个连续的潜变量 z 捕获缺失模态 $x_m$ 中与标签 $y$ 相关的信息，而非重建输入。它在训练时最大化两种场景（模态完整和模态缺失）下的证据下界（ELBO），并使用一个正则化项打破对称性。在推理时，从以可见模态为条件的先验分布中多次采样 z，聚合所有预测结果，从而得到预测分布与模态影响度量 V。
3.  与已有方法的区别：不同于基于生成式VAE的方法，PRIMO 完全围绕判别式目标设计，其变分下界不包含对缺失模态的重建项，避免了生成质量与预测性能的脱节。它支持在部分样本缺模态的情况下进行训练和推理，并提供了实例级的预测不确定性分析。
4.  主要实验结果：
    *   XOR 数据集：缺 $x_m$ 时准确率约 66.0%，完整时约 98.5%，均接近各自的最优基线，并优于 MVAE、MMVAE 等生成式基线。
    *   AV-MNIST：
        | 设置 | 方法 | 准确率 |
        |---|---|---|
        | 音频缺失 | $x_o$（仅图像） | 64.23 ± 0.17 |
        | 音频缺失 | PRIMO | 63.06 ± 0.72 |
        | 视觉缺失 | $x_o$（仅音频） | 40.36 ± 0.80 |
        | 视觉缺失 | PRIMO | 37.58 ± 1.29 |
        | 完整 | ($x_o$, $x_m$) | 71.14 ± 0.42 / 71.32 ± 0.30 |
        | 完整 | PRIMO | 68.17 ± 1.42 / 68.27 ± 1.35 |
    *   MIMIC-III（以部分任务为例）：
        | 任务 | 设置 | 方法 | 准确率 |
        |---|---|---|---|
        | 死亡率 | 仅静态 | 基线 | 76.36 ± 0.01 |
        | 死亡率 | 缺时间序列 | PRIMO | 76.17 ± 0.07 |
        | 死亡率 | 完整 | 基线 | 77.89 ± 0.17 |
        | 死亡率 | 完整 | PRIMO | 77.08 ± 0.25 |
        | ICD-9 (460-519) | 仅静态 | 基线 | 56.22 ± 0.46 |
        | ICD-9 (460-519) | 缺时间序列 | PRIMO | 54.95 ± 1.44 |
        | ICD-9 (460-519) | 完整 | 基线 | 68.22 ± 0.52 |
        | ICD-9 (460-519) | 完整 | PRIMO | 65.78 ± 1.08 |
5.  实际意义：为现实场景中缺失模态的“必要性”提供了一个可计算的实例级指标，有助于在医疗等成本敏感领域形成“按需采集”的决策策略，例如判断是否需要为特定患者采集昂贵或有风险的额外模态。
6.  主要局限性：模态影响度量 V 缺乏标准真值进行验证，其正确性无法被严格评估；当前仅支持两个模态的缺失场景，未在超过两个模态的真实大规模缺失数据上验证；在单模态基线精度较低的任务上（如AV-MNIST视觉缺失），PRIMO的性能甚至低于简单的单模态基线，文中未对此进行深入分析和解释。

🔗 **开源详情**

*   代码：https://github.com/divyam3897/PRIMO
*   模型权重：未提及。
*   数据集：
    *   XOR：合成数据集。
    *   AV-MNIST：基于公开的 MNIST、Free Spoken Digit Dataset (FSDD) 和 ESC-50。论文未提供打包后的数据集链接。
    *   MIMIC-III：受控访问的公开临床数据库，需通过 PhysioNet 申请访问。
*   Demo：未提及。
*   复现材料：论文附录 C 提供了实验设置与超参数细节，但未提供独立的 `requirements.txt` 或 Docker 配置文件。引用的基线方法（如 MVAE, MMVAE）未给出其具体开源项目链接。

📄 [OpenReview](https://openreview.net/forum?id=Ls4SgE9gRd)

---

### 105. [PCRNet: Phase-aware Complex Refinement Network for EEG-based Auditory Attention Decoding](/audio-paper-digest-blog/posts/2026-07-04-pcrnet-phase-aware-complex-refinement-network-for)

✅ **6.4/10** | 前50% | #实时处理 | 创新 0.8/2 | 严谨 0.9/1.5 | 实验 0.8/1.5 | 影响 0.6/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Xiran Chen（安徽大学，计算机科学与技术学院，光电信息获取与防护技术国家重点实验室），Xiaoke Yang（同等贡献第一作者，同上）
- 通讯作者：Cunhang Fan（安徽大学，计算机科学与技术学院，光电信息获取与防护技术国家重点实验室）
- 作者列表：Xiran Chen, Xiaoke Yang, Jian Zhou, Zhao Lv, Cunhang Fan（均属于安徽大学上述学院与国家重点实验室）

💡 **毒舌点评**

本文试图通过引入相位信息来给EEG听觉注意解码注入新的方法论血液，这思路本身不差，但实际落地更像是一次工程上的模块搬家。TCC、MTA、RSI、DDI等组件拼装感强烈，本质上是对现有时间注意力、扩张卷积、复数频谱处理等技术的整合与重命名。虽然文中强调"相位感知"，但所谓的"精炼"其实就是将实部和虚部分别送入结构对称的卷积块，再用一个从幅度谱生成的掩码打回去，这和真正的神经生理学相位校准机制相差甚远，解释性不足，有过度包装之嫌。论文最大的硬伤在于没有进行任何跨被试（LOSO）实验，这导致其宣称的SOTA性能在个体差异面前可能极度脆弱，无法说服审稿人其具有真实的泛化能力。极短的0.1s窗口下KUL数据集达到98.4%的准确率近乎完美，这在信噪比极低的EEG信号中显得反常，不排除存在微妙的时间信息泄露或过拟合于特定被试。

📌 **核心摘要**

1. 问题：现有EEG听觉注意解码方法大多仅依赖幅度或功率谱特征，忽略了EEG信号相位信息在编码神经振荡与时间结构中的关键作用。这限制了模型在低信噪比环境下区分结构化神经模式与随机噪声的能力。
2. 方法：提出PCRNet，包含时序上下文校准（TCC）模块和双域集成（DDI）模块。TCC利用多尺度时序注意力（MTA）结合门控机制，在进入频域分析前对Q、K、V投影进行精细校准；DDI则并行运行一个时序扩张卷积分支和一个基于残差频谱接口（RSI）块的频谱分支，RSI在复数域中通过可学习的幅度重要性门控对实部和虚部分别进行精炼、动态抑制噪声频段，再经逆傅里叶变换重构特征。
3. 新意：与以往只关注能量/幅度的主流方法不同，PCRNet明确地在复数域操作，对实部和虚部进行独立的特征混合和精炼，并引入数据驱动的幅度掩码以实现相位感知的频谱滤波，旨在保留并重校准因噪声受损的相位结构。
4. 主要实验结果：在KUL、DTU和AVED三个公开数据集上，与包括SSF-CNN、MBSSFCC、DBPNet、DARNet、SSF-DST、MHANet在内的六种现有方法对比，PCRNet在所有决策窗口（0.1s, 1s, 2s）下均取得了最高的平均准确率，尤其在KUL数据集的0.1s窗口下达到98.4%的准确率。参数总量仅为0.03M。
5. 实际意义：极低的模型参数量和极短决策窗下的高性能，使其在神经导向助听器等需要低功耗、低延迟的边缘计算实时脑机接口应用中展现出潜力。
6. 主要局限性：仅在受试者内（within-subject）划分下进行评估，完全缺乏跨被试（cross-subject）或留一被试（LOSO）的必要泛化性验证；所有数据集均为实验室受控短时程实验范式，未涉及真实场景下的连续流式处理；对相位增益的解释停留在模型消融，缺乏与神经生理学机制的深入关联分析。

🔗 **开源详情**

- 代码：https://github.com/SunshineGreeny/PCRNet
- 模型权重：论文中未提及
- 数据集：使用公开数据集KUL、DTU、AVED，但未提供具体获取链接
- Demo：论文中未提及
- 复现材料：论文第3.3节提供了训练配置和网络参数等实现细节，但未提供单独的配置文件、检查点或复现脚本。
- 论文中引用的开源项目：PyTorch (https://pytorch.org/)

📄 [OpenReview](https://openreview.net/forum?id=89MeH5Ax8r)

---

### 106. [OmniFit: Bridging Modalities via Layer-Adaptive Token Compression for Omnimodal Large Language Models](/audio-paper-digest-blog/posts/2026-07-04-omnifit-bridging-modalities-via-layer-adaptive)

✅ **6.3/10** | 前50% | #音视频理解 | 创新 1.3/2 | 严谨 1.1/1.5 | 实验 1.1/1.5 | 影响 0.7/1.5 | 开源 0.1/1.5

👥 **作者与机构**

- 第一作者：Zining Wang（北京航空航天大学计算机科学与工程学院，复杂与关键软件环境国家重点实验室）
- 通讯作者：Xianglong Liu（北京航空航天大学计算机科学与工程学院，复杂与关键软件环境国家重点实验室）
- 其他作者：Zhihang Yuan（北京大学）、Yingjie Zhai（华为技术有限公司）、Wenshuo Li（华为技术有限公司）、Han Shu（华为技术有限公司）、Ruihao Gong（复杂与关键软件环境国家重点实验室）、Jinyang Guo（北京航空航天大学计算机科学与工程学院/人工智能学院，复杂与关键软件环境国家重点实验室）

💡 **毒舌点评**

这篇论文的动机分析（层间异质性和跨模态锚点驱动）是一次漂亮的现象学观察，作者花了大力气证明“为什么”需要层自适应和跨模态对齐。但坦白说，方法论上更像一个“证件照”：SVD、DPC-KNN、余弦相似度这套组合拳看起来体面，深究下去却没有真正的新算法原理。核心卖点“training-free”既是铠甲也是软肋——轻量化部署确实友好，但也意味着它永远只能做“事后诸葛亮”，无法改变模型自身对冗余信息的处理逻辑。实验覆盖面广是优点，但依然缺少对深层why的拷问：为什么基于静态编码器输出的余弦相似度，能成为深层复杂语义交互的良好代理？这篇工作给了一个“够用”的解释，但离“令人信服”还有距离。

📌 **核心摘要**

1. 要解决的问题：全模态大语言模型（OmniLLMs）同时处理视频、音频和文本，输入序列极长，自注意力机制的计算和存储消耗呈平方增长，严重制约实时部署。现有token压缩方法依赖静态的模态优先级（如音频主导）或统一保留策略，忽视了跨层异质性和跨模态对齐的关键作用。
2. 方法核心：OmniFit是一个无需额外训练的离线校准、在线推理框架。离线阶段通过Layer-Adaptive Heterogeneity Profiling (LAHP) 对每层Transformer块进行SVD，量化信息密度（有效秩）和模态偏好（注意力分布），确立逐层递减的token保留预算，并为非均匀压缩引入闭式解的惩罚因子$\xi$以保证计算总量不超限。在线阶段通过Alignment-Rectified Token Selection (ARTS)，利用编码器输出后即用DPC-KNN算法从输入token中提取跨模态紧凑“全局锚点”，计算token与对立模态锚点的最大余弦相似度，融合L2范数作为重要性评分，以O(Nd)线性开销选取跨模态对齐的关键token。
3. 与已有方法的新颖之处：区别于OmniZip等预设音频主导或统一保留的静态策略，LAHP实现了数据驱动的层自适应预算分配，且首次从理论（柯西-施瓦茨不等式）上保证了非均匀分配的总计算量不比均匀分配差。ARTS以轻量级代理指标替代EchoingPixels中昂贵的跨模态密集注意力，将选择开销从二次降为线性，但需注意其重要性得分仅在编码器后计算一次、为全部层复用。
4. 主要实验结果：在Qwen2.5-Omni-3B/7B、OmniVinci、Qwen3-Omni-30B-A3B-Instruct等3个模型系列、10个基准上进行评估。OmniFit在仅保留20% token时，保持Qwen2.5-Omni-3B原模型98.68%的平均性能，优于OmniZip 4.27个百分点。在Qwen2.5-Omni-7B上获得2.20×预填充加速和1.20×解码加速，30B MoE模型上实现2.31×预填充加速，VRAM节省至2.5×。
   | 方法 (Retain 20% Tokens) | VideoMME | WorldSense | Daily-Omni | MVBench | MLVU | 平均性能保留(%) |
   |:---|:---:|:---:|:---:|:---:|:---:|:---:|
   | Full Tokens | 62.8 | 46.0 | 59.8 | 68.7 | 68.9 | 100.00 |
   | RandomDrop | 50.1 | 20.9 | 40.9 | 59.4 | 55.7 | 68.37 |
   | FastVid | 60.1 | 35.2 | 45.3 | 65.4 | 64.4 | 83.56 |
   | DyCoke | 58.8 | 35.9 | 44.5 | 61.2 | 64.9 | 82.95 |
   | OmniZip | 60.5 | 41.6 | 57.5 | - | - | 94.41 |
   | EchoingPixels | 60.7 | 45.0 | 60.6 | - | 68.3 | 98.74 |
   | OmniFit | 62.0 | 45.1 | 59.8 | 68.0 | 67.2 | 98.68 |
5. 实际意义：为OmniLLMs在资源受限设备上的实时交互部署提供了高性价比的纯后处理优化方案，无需昂贵重训练，校准极快，具有良好的学术与实践参考价值。
6. 主要局限性：作者承认依赖离线校准，若模型架构或训练数据分布发生显著变化需重新校准；方法基于启发式代理指标，无法保证压缩后的信息损失理论上界。此外，跨模态得分完全基于编码器输出的静态余弦相似度，对于深层Transformer才涌现的跨模态语义关系可能遗漏关键信息；反复实验中使用的EchoingPixels基线因代码未开源，仅引用了原文结果，对比公平性略打折扣。

🔗 **开源详情**

- 代码：论文中未提及代码链接，未承诺开源。
- 模型权重：论文中未提及。
- 数据集：论文中未提及。
- Demo：论文中未提及。
- 复现材料：论文中未提及。
- 论文中引用的开源项目：lmms-eval (https://github.com/EvolvingLMMs-Lab/lmms-eval)。其他工具如FlashAttention、DPC-KNN算法本身未提供实现链接。

📄 [OpenReview](https://openreview.net/forum?id=8RY20mLzup)

---

### 107. [EchoingPixels: Aliasing-Resistant Joint Token Reduction for Audio-Visual LLMs](/audio-paper-digest-blog/posts/2026-07-04-echoingpixels-aliasing-resistant-joint-token)

✅ **6.3/10** | 前50% | #音视频理解 | 创新 1.5/2 | 严谨 1.2/1.5 | 实验 0/1.5 | 影响 0.5/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Chao Gong（复旦大学，蚂蚁集团）
- 通讯作者：Huijia Zhu（蚂蚁集团），Jingjing Chen（复旦大学）
- 作者列表：Chao Gong（复旦大学，蚂蚁集团）、Depeng Wang（蚂蚁集团）、Zhipeng Wei（UC Berkeley）、Ya Guo（蚂蚁集团）、Huijia Zhu（蚂蚁集团）、Jingjing Chen（复旦大学）

💡 **毒舌点评**

论文敏锐地捕捉到稀疏采样下位置编码的频谱混叠这一被忽视的理论瓶颈，并用 Nyquist 视角给出了优雅的 Sync-RoPE 解决方案，实验上也做到了近乎无损的极致压缩。但方法对 RoPE 结构的依赖过强，本质上是对一个特定位置编码的后处理补丁，而非通用的时序建模理论。CS2 模块带来的固定开销在极短序列场景下是高射炮打蚊子，虽然作者在 rebuttal 中补充了效率分析，但跨架构泛化性仍是一道硬伤。

📌 **核心摘要**

本文旨在解决音视频大模型（AV-LLM）因处理大量冗余音视频 token 导致的计算开销高企问题。论文首次指出，在稀疏 token 缩减时，标准旋转位置嵌入（RoPE）中的高频分量违反 Nyquist 采样定理，引发“位置混叠”，破坏模型的时序理解能力。为此提出 EchoingPixels 框架，包含两个协同设计：跨模态语义筛（CS2）从统一音视频池中进行基于全局上下文和指令预融合的可学习提取式选择，实现动态预算分配；Sync-RoPE 通过将部分低频频谱通道重新分配给时间维度，作为谱域低通滤波器适配稀疏采样率，确保时序单调性。实验基于 Qwen2.5-Omni-3B/7B，使用 5%~20% token 即可接近全模型性能，例如 3B 模型 20% 预算时相对性能达 99.0%，10% 预算达 95.2%，显著优于 FastV、PyramidDrop 和 OmniZip 等基线。推理延迟降低至 2.23×（20% 预算）至 2.96×（5% 预算），显存占用降至 2.26×~2.61×。该方法为 AV-LLM 的高效推理提供了一种理论指导下的实用压缩范式，但其 Sync-RoPE 目前仅适配 RoPE 架构，且论文仅在 Qwen-Omni 系列上验证，泛化性有待考证。

🔗 **开源详情**

- 代码：https://github.com/CharlesGong12/EchoingPixels
- 模型权重：论文中未提及是否开源
- 数据集：论文未发布新数据集。训练使用的公开数据集包括：LLaVA-Video（https://github.com/LLaVA-VL/LLaVA-Video）、AVQA（https://github.com/YangqinP/AVQA）、FortisAVQA（https://github.com/JianMaCS/FortisAVQA），以及 Ola 重标注的 LLaVA-Video 样本（具体获取方式论文未给出）。
- Demo：未提及
- 复现材料：论文提供了关键训练配置，但未公开完整训练脚本、配置文件或检查点。
- 论文中引用的开源项目：Qwen2.5-Omni、FastV、PyramidDrop、OmniZip、LLaVA-Video、AVQA、FortisAVQA、ms-swift、FlashAttention-2、VLMEvalKit

📄 [OpenReview](https://openreview.net/forum?id=e8JTAKZYt6)

---

### 108. [Quaternion Self-Attention with Shared Scores](/audio-paper-digest-blog/posts/2026-07-04-quaternion-self-attention-with-shared-scores)

✅ **6.3/10** | 前50% | #语音增强 | 创新 1.2/2 | 严谨 1/1.5 | 实验 0.8/1.5 | 影响 0.5/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Shogo Yamauchi（The Asahi Shimbun Company, Tokyo, Japan）
- 通讯作者：Shogo Yamauchi（The Asahi Shimbun Company）、Tohru Nitta（Tokyo Woman's Christian University, Tokyo, Japan）、Hideaki Tamori（The Asahi Shimbun Company）
- 作者列表：Shogo Yamauchi（The Asahi Shimbun Company）、Tohru Nitta（Tokyo Woman's Christian University）、Hideaki Tamori（The Asahi Shimbun Company）

💡 **毒舌点评**

用一个四元数内积替换汉密尔顿积做注意力打分，把4路独立softmax砍成1路，在语音增强上RTF最高砍半，还证明了组件独立本质是冗余——这个洞察确实漂亮。但实验仅限0.8M以下的小模型，跟2019年的Tay et al.基线比完就收工，连线性注意力、FlashAttention这类通用加速方案的影子都没见着，更别说拿Mamba来硬碰硬。整个评估像在自家花园里赛跑，说服力打折严重。声明的"首次提出共享分数"也值得商讨，因为实数Transformer从Vaswani et al.起就在用一个标量分数矩阵，本文本质是给四元数空间做了同样的事。

📌 **核心摘要**

1. 要解决什么问题：现有四元数自注意力（Tay et al., 2019）使用汉密尔顿积计算四元数分值矩阵，再对四个分量分别施加softmax，计算量大（每对token需16次实数乘法、4次softmax）且组件间注意力分布高度发散（argmax一致性仅3.83%），本文质疑这种组件独立设计的必要性。
2. 方法核心是什么：用四元数内积（即汉密尔顿积的实部）作为共享实数注意力分数矩阵，仅做一次softmax，四个分量共用同一注意力权重以保持四元数结构耦合。
3. 与已有方法相比新在哪里：理论证明在四元数线性投影诱导的组件预混合下，四路独立分数与单路共享分数均源自同一交互子空间U(W_Q, W_K)，指出组件级独立softmax只是对同一交互子空间施加多次非线性映射，未扩展特征交互空间，仅为冗余参数化。给出了梯度聚合与分离的数学分析和实验证据。
4. 主要实验结果如何：在VoiceBank+DEMAND上，共享分数QConformer PESQ达3.18，与组件级基线（3.11）持平，仅用实值Conformer 25%的参数达到其98% PESQ；DNS-Challenge 3上GPU RTF降44.3%，CPU RTF降58.1%；CIFAR-100和SST-2精度基本维持，训练/推理速度提升1.37–1.40倍。
5. 实际意义是什么：为四元数注意力设计提供了高效替代方案（乘法从16降至4次，softmax从4降至1次），对移动端、边缘设备的实时语音增强等任务有直接工程价值。
6. 主要局限性是什么：仅在0.62M–0.80M参数的小模型和有限任务上验证，未探索大模型、长上下文、多模态场景，未与其他高效注意力机制（线性注意力、FlashAttention、Mamba等）横向对比。作者承认极端混响、域外噪声、多说话人场景未测试，且提出需要组件级对齐的任务（如3D旋转估计）中共享分数的适用性需进一步研究。

🔗 **开源详情**

- 代码：https://github.com/asahi-research/Quaternion-Self-Attention-with-Shared-Scores（论文第1页脚注及摘要末尾提供的GitHub仓库）
- 模型权重：未提及是否发布预训练权重或检查点
- 数据集：VoiceBank+DEMAND (Valentini-Botinhao et al., 2016)、DNS-Challenge 3 (Reddy et al., 2021a)、CIFAR-100 (Krizhevsky, 2009)、SST-2 (Socher et al., 2013)，均为公开基准数据集。论文未提供直接下载链接或预处理脚本。
- Demo：未提及
- 复现材料：附录D提供了训练配置（STFT参数、优化器、学习率、batch size等），Table 12提供了完整超参数对比，附录D.2提供了损失函数公式和权重，附录E提供了CIFAR-100和SST-2的跨领域实验设置。附录C.4明确了RTF测量协议。未提供随机种子和完整预处理脚本，四元数层实现需参考附录A自行完成。
- 论文引用的开源项目：VoiceBank+DEMAND (Valentini-Botinhao et al., 2016)、DEMAND database (Thiemann et al., 2013)、DNS-Challenge 3 (Reddy et al., 2021a)、FlashAttention (Dao et al., 2022)等，论文中未直接提供这些项目的链接。

📄 [OpenReview](https://openreview.net/forum?id=XdyDNR5gtb)

---

### 109. [LightAVSeg: Lightweight Audio-Visual Segmentation](/audio-paper-digest-blog/posts/2026-07-04-lightavseg-lightweight-audio-visual-segmentation)

✅ **6.3/10** | 前50% | #模型压缩 | 创新 1/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 影响 0.8/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Qing Zhong (华中农业大学信息学院)
- 通讯作者：Guodong Ding (新加坡国立大学计算学院)
- 作者列表：Qing Zhong (华中农业大学信息学院), Guodong Ding (新加坡国立大学计算学院), Lingqiao Liu (阿德莱德大学计算机科学学院), Zaiwen Feng (华中农业大学信息学院), Lin Yuanbo Wu (华威大学工学院 / 浙江越秀外国语学院), Angela Yao (新加坡国立大学计算学院)

💡 **毒舌点评**

这篇论文抓住了一个真实痛点：AVS模型在移动端的部署瓶颈。解耦”语义过滤“和”空间定位“的思路清晰，但本质上是将多模态融合中”音频提供全局语义“这一已知洞察工程化为通道调制，范式贡献有限。移动端8倍加速的数据亮眼，但164ms的延迟对于”实时交互“仍显尴尬，且与Mamba等同期线性复杂度工作的对比缺失，让优越性存疑。代码和模型不开源，在这个领域几乎是原罪，让所有工程化承诺都悬于空中。

📌 **核心摘要**

1. 要解决什么问题：现有音频-视觉分割（AVS）模型依赖密集的交叉注意力机制，计算复杂度随特征分辨率平方增长，导致在移动端等资源受限设备上部署困难。现有轻量化工作仅替换骨干网络而忽视交互模块，瓶颈并未根除。
2. 方法核心是什么：提出LightAVSeg，将跨模态交互解耦为两个阶段——Reciprocal Audio-Visual Encoder负责全局语义过滤（what），通过视觉引导迭代精炼全局音频状态，采用通道级调制替代像素间注意力；Cross-Modal Fusion Decoder负责空间定位（where），将精炼后的音频语义注入视觉层级结构。同时引入无需推理开销的辅助对齐损失（L_msa）来强制跨模态一致性。
3. 与已有方法相比新在哪里：首次将AVS的交互复杂度从O(N²)降至O(N)，核心insight是音频提供的是全局语义而非空间定位信息，因此无需像素级音频-视觉亲和力矩阵。该设计通过层级式门控调制和参数自由的广播操作实现。辅助损失将多尺度对齐知识蒸馏进网络权重，推理时零开销。
4. 主要实验结果如何：在MS3基准上以20.5M参数达到50.4 mIoU，超越AVSegFormer-R50（49.5 mIoU, 151.1M参数），移动端延迟163.4ms（约8倍加速）。在AVSS语义子集上达到30.6 mIoU，约为AVSegFormer-Sea基线（15.8 mIoU）的两倍，接近SelM-R50（31.9 mIoU）。

| Backbone (Visual-Audio) | Params (M) | GPU Latency (ms) | Mobile Latency (ms) | S4 (M_J/M_F) | MS3 (M_J/M_F) |
|--------------------------|------------|------------------|---------------------|--------------|---------------|
| AVSBench (R50-VGGish) | 91.4 | 21.2 | 753.5 | 72.8/84.8 | 47.9/57.8 |
| AVSegFormer (R50-VGGish) | 151.1 | 29.0 | 1271.4 | 76.5/85.9 | 49.5/62.8 |
| SelM (R50-VGGish) | 117.6 | 25.3 | 1003.8 | 76.6/86.2 | 54.5/65.6 |
| AVSBench (Sea-MNV2) | 30.2 | 19.5 | 237.1 | 47.9/64.5 | 35.2/44.1 |
| AVSegFormer (Sea-MNV2) | 51.0 | 22.2 | 432.6 | 53.8/71.4 | 40.7/50.7 |
| SelM (Sea-MNV2) | 39.5 | 18.7 | 308.6 | 59.1/77.4 | 45.7/57.6 |
| Ours (Sea-MNV2) | 20.5 | 15.9 | 163.4 | 75.6/86.2 | 50.4/62.6 |

5. 实际意义是什么：为AVS在移动端设备（手机、VR/AR头显）上的部署提供了可行方案，在视频编辑、增强现实等场景具备落地潜力。其解耦设计原则和延迟剖析为高效多模态学习提供了参考。
6. 主要局限性是什么：轻量骨干网络容量有限导致对大目标或纹理复杂物体分割不完整；全局音频状态压缩在复杂多声源、高重叠场景下易产生语义歧义或漏检；代码与模型均未开源，可复现性存疑；未与基于状态空间模型（如Mamba）等同期线性复杂度方法进行对比。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及。
- 数据集：论文中未提及数据集的直接下载链接，仅以引用形式提及AVSBench (Zhou et al., 2022; 2025a)。
- Demo：论文中未提及。
- 复现材料：论文中未提及。
- 论文中引用的开源项目：
  - SeaFormer (视觉骨干): 未直接提供链接，但引用Wan et al., 2023。
  - MobileNetV2 (音频骨干, PANNs预训练): 未提供链接，但引用Kong et al., 2020。
  - TNN (移动端推理框架): https://github.com/Tencent/TNN
  - AVSegFormer: https://github.com/gaosibobo/AVSegFormer (注：论文引用Gao et al., 2024)
  - AVSBench (基准数据集及评估工具): https://github.com/OpenNLPLab/AVSBench

📄 [OpenReview](https://openreview.net/forum?id=Xl7cAV0jdc)

---

### 110. [SURF: Separation via Unsupervised Remixing Flow](/audio-paper-digest-blog/posts/2026-07-04-surf-separation-via-unsupervised-remixing-flow)

✅ **6.2/10** | 前50% | #语音分离 | 创新 1.2/2 | 严谨 1/1.5 | 实验 1/1.5 | 影响 0.9/1.5 | 开源 0.2/1.5

👥 **作者与机构**

- 第一作者：Henry Li (Google), 共同一作：Robin Scheibler (Google DeepMind)
- 通讯作者：Henry Li (lihenry@google.com)
- 作者列表：Henry Li (Google)、Robin Scheibler (Google DeepMind)、Efthymios Tzinis (Google)、Matt Shannon (Google DeepMind)、Arnaud Doucet (Google DeepMind)、John R. Hershey (Google DeepMind)
- 备注：Arnaud Doucet 与 John R. Hershey 为共同高级作者 (equal senior contribution)

💡 **毒舌点评**

这篇论文用Wake-Sleep给“借鸡生蛋”的Remixing套上了一层概率外衣，又将Flow Matching的生成能力引入无监督分离，想法很漂亮，画面很美好。但现实很骨感：AudioSet上三四个源的场景直接“掉链子”，理论分析的强假设（人口极限B→∞）在实际中脆弱得像纸糊，加上代码闭源、关键超参数缺失，让人严重怀疑这套花哨的pipeline复现起来是不是一场工程噩梦。

📌 **核心摘要**

1.  问题：解决单通道无监督音源分离问题，即仅从观测到的混合信号中恢复多个源信号，完全无需任何干净的孤立源数据。
2.  方法核心：提出SURF，将有监督的Flow Matching (FM) 生成模型与无监督的 Remixing 自训练框架（如ReMixIT/Self-Remixing）相结合。它从一个预训练的教师模型估计源信号，通过随机打乱重组生成新的伪混合信号及其对应的伪目标源，然后训练一个基于Flow Matching的学生模型去学习分离。学生模型通过指数移动平均（EMA）持续更新教师模型，形成自提升循环。
3.  创新之处：首次将连续归一化流中的 Flow Matching 生成范式成功应用于无监督源分离的 Remixing 框架。这弥补了回归式自训练方法容易产生过平滑、人工伪影的缺陷。此外，论文从 Wake-Sleep 算法的视角为 Remixing 过程提供了一个新颖的概率解释，并对 ReMixIT 和 Self-Remixing 适配到 Flow Matching 的损失函数进行了理论推导与分析。
4.  主要实验结果：在图像（MNIST, CIFAR-10）和音频（Libri2Mix, AudioSet）基准上，SURF 显著优于现有无监督方法，并大幅缩小了与有监督模型的差距。在 CIFAR-10 上，PSNR 提升超过2dB (16.77 → 19.73)；在 Libri2Mix 上，SI-SDR 提升超过3dB (12.39 → 16.54)。
5.  实际意义：为无法获取干净源数据（如生物声学、天文信号等）的真实世界源分离应用提供了一个强大的生成式解决方案，有潜力减少分离信号中的人工伪影，提升感知质量。
6.  主要局限性：在处理超过2个源的复杂真实世界混合物（如 AudioSet 的 3源、4源设置）时性能退化，甚至不如某些基线。方法涉及多阶段的复杂训练pipeline，对关键超参数（如批次大小 B、EMA系数 α）高度敏感，训练可能不稳定。性能严重依赖于初始教师模型的质量。代码未开源，复现困难。

🔗 **开源详情**

- 代码：论文中未提及代码链接。在论文提交的匿名程度下，未提供补充材料。
- 模型权重：论文中未提及。
- 数据集：
  - MNIST：http://yann.lecun.com/exdb/mnist/
  - CIFAR-10：https://www.cs.toronto.edu/~kriz/cifar.html
  - Libri2Mix（基于 LibriSpeech）：https://github.com/JorisCos/LibriMix
  - AudioSet：https://research.google.com/audioset/
  - FUSS：https://github.com/google-research/sound-separation/tree/master/datasets/fuss
  - LibriSpeech：https://www.openslr.org/12
  所有数据集的获取方式与协议遵循其原始发布。
- Demo：论文正文中写道“See our demo page for examples”，但未给出具体 URL。
- 复现材料：论文附录 D 给出了完整的模型超参数、PyTorch 风格伪代码和训练流程，但未提供可下载的配置文件、检查点或训练脚本。
- 论文中引用的开源项目：
  - Flow Matching（Lipman et al., 2023）：开源实现可参考 https://github.com/atong01/conditional-flow-matching
  - MixIT（Wisdom et al., 2020）：代码开源在 https://github.com/google-research/sound-separation
  - ReMixIT（Tzinis et al., 2022）与 Self-Remixing（Saijo & Ogawa, 2023）：上述 sound-separation 仓库可能包含相关实现，论文未提供独立链接（论文引用的Saijo & Ogawa, 2023有无代码未提及）。
  - Conv-TasNet（Luo & Mesgarani, 2019）：有多种实现，如 https://github.com/naplab/Conv-TasNet
  - BASIS（Jayaram & Thickstun, 2020）：代码见 https://github.com/jthickstun/basis
  - Supervised Flow Matching for separation（Scheibler et al., 2025）及 MB-TFLocoformer 架构：论文中未提供开源链接，截止当前尚未见公开仓库。

📄 [OpenReview](https://openreview.net/forum?id=Fy2HkFMYH6)

---

### 111. [Neural-Inspired Modeling of Auditory Selection and Compensation for Audio-Visual Speech Separation](/audio-paper-digest-blog/posts/2026-07-04-neural-inspired-modeling-of-auditory-selection)

✅ **6.2/10** | 前50% | #音视频语音分离 | 创新 1.4/2 | 严谨 1.1/1.5 | 实验 1.2/1.5 | 影响 0.8/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Xinmeng Xu（岭南大学人工智能系，Department of Artificial Intelligence, Lingnan University）
- 通讯作者：Haoran Xie（岭南大学人工智能系，Department of Artificial Intelligence, Lingnan University）
- 作者列表：Xinmeng Xu（岭南大学人工智能系）、Haoran Xie（岭南大学人工智能系）、Xiaohui Tao（南昆士兰大学数学物理与计算学院，School of Mathematics, Physics and Computing, University of Southern Queensland）、Lin Li（武汉理工大学计算机科学与人工智能学院，School of Computer Science and Artificial Intelligence, Wuhan University of Technology）、S. Joe Qin（岭南大学人工智能系）

💡 **毒舌点评**

这篇论文从认知神经科学中搬来“听觉选择”和“跨模态补偿”的双阶段机制，并在AVSS架构中将其显式化为ASM和CCM模块，想法干净且有洞察力。在LRS2/3和VoxCeleb2上以6.3M的参数稳定超越包括AV-CrossNet在内的现有SOTA，且多说话人重叠和视觉降质下的表现更加突出。然而，致命伤是完全闭源：无代码、无模型、无Demo链接，这在2024年后的ML顶会中极度罕见且难以接受。此外，Section 3.1的信息论不等式与模块设计之间存在一条明晃晃的鸿沟：Eq. 2中的β项从未在损失函数中出现过，其“理论指导设计”的说法本质上是一种后验包装。总体而言，这是一篇工程扎实但理论过度声称、且因闭源而严重削弱影响力的工作。

📌 **核心摘要**

1. 要解决什么问题：当前AVSS系统多采用隐式融合，缺乏显式的模态对齐与可靠性建模，导致在强干扰、多说话人重叠或视觉降质时出现语义错配和性能恶化。论文旨在将抑制干扰和补偿缺失内容两个功能显式分离并序贯化，以提升鲁棒性。
2. 方法核心是什么：提出Neuro-SCNet，包含（1）听觉选择模块（ASM），在融合前以视觉引导的时频增益控制，通过bottom-up显著性检测和top-down门控实现四象限分区，筛选目标一致声学特征并抑制干扰；（2）跨模态补偿模块（CCM），通过跨注意力对齐视觉特征，利用包含身份旁路和可靠性加权的残差补偿机制恢复缺失声学细节；（3）视觉预对齐模块（VPA），在有限窗口内通过可微偏移估计和grid_sample校正音视频微小时间偏移，并输出全局可靠性标量r供后续门控使用；（4）双编码器-解码器（幅值+相位），分离语义和声学细节处理。
3. 与已有方法相比新在哪里：首次明确将“选择”和“补偿”建模为两个独立的、序贯的模块，并赋予明确的信息流控制（身份旁路、可靠性门控、错误反馈）。ASM的四象限分区及反对齐流作为抑制性线索的设计，从认知角度有独特motivation。
4. 主要实验结果如何：在LRS2、LRS3、VoxCeleb2三个数据集上均以更少参数量（6.3M）取得三维度（SI-SNRi, SDRi, PESQ）的SOTA。关键对比数据如下：

| 模型 | LRS2 SI-SNRi(dB) | LRS2 SDRi(dB) | LRS2 PESQ | LRS3 SI-SNRi(dB) | LRS3 SDRi(dB) | LRS3 PESQ | VoxCeleb2 SI-SNRi(dB) | VoxCeleb2 SDRi(dB) | VoxCeleb2 PESQ | Params(M) |
|------|------------------|---------------|-----------|------------------|---------------|-----------|-----------------------|---------------------|----------------|-----------|
| AV-CrossNet | 16.8 | 17.1 | 3.56 | 18.3 | 18.5 | 3.67 | 14.6 | 14.9 | 3.41 | 11.1 |
| IIANet | 16.0 | 16.2 | 3.23 | 18.3 | 18.5 | 3.28 | 13.6 | 14.3 | 3.12 | 3.1 |
| RTFS-Net-12 | 14.9 | 15.1 | 3.07 | 17.5 | 17.6 | 3.25 | 12.4 | 13.6 | 3.00 | 0.7 |
| CTC-Net | 14.3 | 14.6 | 3.08 | 17.4 | 17.5 | 3.24 | 11.9 | 13.1 | 3.00 | 7.0 |
| Neuro-SCNet(Ours) | 17.2 | 17.9 | 3.59 | 18.9 | 19.5 | 3.71 | 14.8 | 15.2 | 3.43 | 6.3 |

在多说话人（3Mix/4Mix）上优势扩大。消融实验证明ASM和CCM均不可或缺，且序贯顺序不可颠倒。

| 变体 | LRS2-2Mix SI-SNRi | LRS2-3Mix SI-SNRi | LRS2-4Mix SI-SNRi |
|------|---------------------|---------------------|---------------------|
| Full Model | 17.2 | 13.9 | 9.8 |
| w/o ASM | 16.4 | 12.7 | 8.6 |
| w/o CCM | 16.2 | 12.5 | 8.4 |
| w/o ASM & CCM | 15.1 | 11.2 | 7.0 |

5. 实际意义是什么：为鲁棒、可解释的AVSS系统提供了有意义的设计范式，特别适合强干扰或部分视觉缺失场景。轻量设计（6.3M参数，17.8G MACs）具备端侧部署潜力。
6. 主要局限性是什么：理论包装（Sec 3.1）与工程实现之间存在明显的gap——信息瓶颈目标从未被实际优化，损害了其方法论声称的深度；全局可靠性标量r无法处理局部视觉降质；完全闭源严重阻碍社区验证和跟进；部分关键实现细节未披露。

🔗 **开源详情**

- 代码：论文中未提及任何代码仓库、GitHub链接或直接下载方式。
- 模型权重：论文中未提及任何预训练权重或checkpoint发布。
- 数据集：论文采用公开数据集LRS2、LRS3和VoxCeleb2，未提供直接下载链接，需遵循原数据集发布机构的获取要求（参见 Afouras et al., 2018a; Afouras et al., 2018d; Chung et al., 2018）。
- Demo：论文中未提及任何在线演示或示例音频。
- 复现材料：论文在附录F提供了统一的实验协议、种子固定策略和部分超参数设定；附录A给出了VPA的详细伪代码（Algorithm 1）；附录E给出了图1 T-F map的生成伪代码（Algorithm 2）。但未提供可执行的代码、配置文件或checkpoint。
- 论文中引用的开源项目：AV-ConvTasNet、VisualVoice、CTC-Net、AVLiT-8、RTFS-Net、IIANet、AV-CrossNet、LAVSE、L2L、MuSE、AV-SepFormer、AVSepChain、AV-DPRNN、AV-GridNet等，均以文献形式引用，未提供具体的GitHub URL链接。

📄 [OpenReview](https://openreview.net/forum?id=5EXWftfZlE)

---

### 112. [AuTAgent: A Reinforcement Learning Framework for Tool-Augmented Audio Reasoning](/audio-paper-digest-blog/posts/2026-07-04-autagent-a-reinforcement-learning-framework-for)

✅ **6.2/10** | 前50% | #音频理解 | 创新 1.2/2 | 严谨 1/1.5 | 实验 0.9/1.5 | 影响 0.9/1.5 | 开源 0.2/1.5

👥 **作者与机构**

- 第一作者：Siqian Tong（中国科学院声学研究所，中国科学院大学）
- 通讯作者：Siqian Tong（中国科学院声学研究所，中国科学院大学）、Xuan Li（中国科学院声学研究所，中国科学院大学）
- 作者列表：Siqian Tong（中国科学院声学研究所）、Xuan Li（中国科学院声学研究所）、Yiwei Wang（加州大学默塞德分校）、Baolong Bi（中国科学院计算技术研究所）、Yujun Cai（昆士兰大学）、Shenghua Liu（中国科学院计算技术研究所）、Yuchen He（中国科学院计算技术研究所）、Chengpeng Hao（中国科学院声学研究所）

💡 **毒舌点评**

这篇论文在音频工具增强推理上的探索方向值得肯定，差分奖励机制的设计也算巧妙。但话说回来，仅在2000样本上训练的RL策略、6个固定工具的微缩库，再加上对ReAct等成熟工具调度框架的刻意回避，让“范式转移”的宣称显得过于膨胀。整体工作更像是在已知的RL+Tool框架上，于音频领域完成了一次精巧但有限的适配验证，深度和广度都还欠火候。

📌 **核心摘要**

本文旨在解决大型音频语言模型（LALMs）因通用编码器丢弃细粒度声学特征（如精确BPM、和弦）而导致的表征瓶颈，使其在需要精确测量的复杂推理任务中表现不佳。为此，作者提出AuTAgent框架，通过强化学习训练一个音频工具代理，使其能根据音频和问题动态选择并调用外部工具（如ASR、和弦识别、节拍跟踪），用工具提取的结构化证据来增强冻结的推理大模型。方法核心是采用GRPO进行策略优化，并设计了一种基线减除的差分奖励机制：仅当工具调用纠正了基线模型的错误时才给予正奖励，而工具调用导致原本正确的结果变错或冗余调用则给予零奖励或负奖励，以此迫使代理学习具有净增益的工具组合。在MMAU Test-mini和MMAR基准上，AuTAgent相对无工具基线分别提升4.2%/6.2%（Qwen2-Audio-7B）和9.8%/8.0%（GPT-4o Audio），且学习到的策略可作为即插即用模块，无需额外训练即可迁移至不同骨干。主要意义在于验证了RL训练工具调度在音频领域的有效性及跨模型迁移的潜力。主要局限性是工具集合较小且固定，仅覆盖特定声学特征；实验局限于多选题评测，对开放域生成式推理的泛化性未经验证；且缺乏与更先进的工具规划基线的对比。

🔗 **开源详情**

-   代码：论文中提供了项目主页链接（https://tongsiqian.github.io/AuTAgent），但未提供具体的代码仓库地址（如GitHub链接）。
-   模型权重：论文中未提及是否发布训练好的AuTAgent策略权重。
-   数据集：训练数据基于AVQA数据集（Yang et al., 2022）的子集，评测采用MMAU Test-mini（Sakshi et al., 2024）和MMAR（Ma et al., 2025）。论文本身未提供这些数据集的直接下载链接或自定义子集的公开。
-   Demo：未提及。
-   复现材料：论文第4.2节提供了部分训练配置（批量大小、学习率、硬件等），附录给出了Prompt和工具输出格式，但未提供完整的可下载复现包（如代码压缩包、配置文件、模型检查点）。
-   论文中引用的第三方开源项目包括：Whisper-large-v3、emotion2vec plus large、Madmom、Librosa、AST、Qwen2-Audio-7B-Instruct等。其代码和模型可从各自官方渠道获取。

📄 [OpenReview](https://openreview.net/forum?id=QfRtFf9Q3X)

---

### 113. [Multimodal Latent Language Modeling with Next-Token Diffusion](/audio-paper-digest-blog/posts/2026-07-04-multimodal-latent-language-modeling-with-next)

✅ **6.1/10** | 前50% | #语音合成 | 创新 1.4/2 | 严谨 1.2/1.5 | 实验 0/1.5 | 影响 1.2/1.5 | 开源 0.2/1.5

👥 **作者与机构**

- 第一作者: Yutao Sun (Tsinghua University)
- 通讯作者: Furu Wei (Microsoft Research), Jianyong Wang (Tsinghua University)
- 作者列表: Yutao Sun (Tsinghua University), Hangbo Bao (Microsoft Research), Wenhui Wang (Microsoft Research), Zhiliang Peng (Microsoft Research), Li Dong (Microsoft Research), Shaohan Huang (Microsoft Research), Yaoyao Chang (未说明), Jianyong Wang (Tsinghua University), Furu Wei (Microsoft Research)

💡 **毒舌点评**

本文在“一切皆为token”的统一多模态框架上迈出了扎实的一步，用next-token diffusion巧妙绕开了VQ-VAE的信息瓶颈，σ-VAE的方差约束设计也切中自回归生成的exposure bias要害。但ImageNet上的图像生成实验，LatentLM-L（479M, FID 2.24）实际上并未超越同体量的MAR（479M, FID 1.78），论文将其归入非因果类进行对比虽分类合理，但未能提供等计算量对比来证明因果框架自身能弥补这一差距；此外，仅在200B tokens上训练的1.3B多模态LLM远未达到收敛，声称的scaling优势仍需更大规模验证；TTS人类评估仅24人，略显单薄。

📌 **核心摘要**

本文提出Latent Language Modeling (LatentLM)，旨在用一个统一的因果Transformer架构同时处理离散数据（文本、代码）和连续数据（图像、音频、视频），以解决现有多模态模型中离散量化信息损失、扩散模型与LLM因果推理范式不兼容、训练-推理分布不匹配等核心矛盾。方法核心是将连续数据通过σ-VAE编码为连续潜在向量，然后引入next-token diffusion——一个轻量的扩散头作为语言模型的输出层，对每个连续token自回归地进行扩散去噪生成；离散token仍用标准next-token prediction。针对传统VAE在自回归生成中因方差崩塌导致训练-推理分布不匹配（exposure bias）的问题，提出了σ-VAE，通过强制固定潜在空间方差来提升对生成误差的鲁棒性，将分布外（OOD）问题转化为分布内问题。实验覆盖图像生成（ImageNet）、多模态LLM（理解+生成）和文本到语音合成（TTS），主要结果包括：

| 实验场景 | 对比模型 | LatentLM结果 | 对比模型结果 |
|---------|---------|-------------|------------| 
| ImageNet 256×256 (FID↓) | DiT-XL/2 (675M) | 2.24 (479M) | 2.27 (675M) |
| ImageNet 256×256 (FID↓) | MAR-L (479M) | 2.24 | 1.78 |
| ImageNet 256×256 (FID↓) | GIVT-Causal-L+A (1.67B) | 2.24 | 2.59 |
| MS-COCO T2I (FID↓) | Transfusion | 14.54 | 16.10 |
| MS-COCO Captioning (CIDEr↑) | Transfusion | 54.5 | 43.4 |
| VQAv2 (Acc↑) | Transfusion | 38.72 | 35.36 |
| LibriSpeech TTS (SIM↑, 15fps) | VALL-E 2 | 0.697 | 0.643 |

在TTS任务上，LatentLM以15fps的帧率（比VALL-E 2的75fps少5倍解码步数，若算总推理步骤则少10倍以上）超越了SOTA的说话人相似度。此外，在7.5fps帧率下仍优于VALL-E 2（SIM 0.656 vs 0.643）。实际意义在于提供了一个统一、高效且兼容KV cache的多模态生成框架，有望简化大规模多模态模型的训练和部署。主要局限性包括：与MAR等双向模型在图像生成质量上仍有差距，多模态LLM的训练规模不足以充分展示scaling潜力，且缺乏代码/模型开源承诺。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及。
- 数据集：论文中未提及。
- Demo：论文中未提及。
- 复现材料：论文在附录中提供了部分训练超参数与配置（如模型维度、层数、优化器设置等），但未提供可直接复现的完整训练脚本、检查点或配置文件的下载链接。
- 论文中引用的开源项目：
  - VQ-VAE (van den Oord et al., 2017) — 参考仓库 https://github.com/deepmind/sonnet 或 https://github.com/ritheshkumar95/pytorch-vqvae
  - DiT (Peebles & Xie, 2023) — https://github.com/facebookresearch/DiT
  - MAR (Li et al., 2024) — https://github.com/LTH14/mar
  - LlamaGen (Sun et al., 2024a) — https://github.com/FoundationVision/LlamaGen
  - VALL-E 2 (Chen et al., 2024) — 论文未公开代码和权重
  - Transfusion (Zhou et al., 2024) — 论文未公开代码
  - U-ViT (Bao et al., 2023a) — https://github.com/baofff/U-ViT
  - MaskGIT (Chang et al., 2022) — https://github.com/google-research/maskgit
  - GIVT (Tschannen et al., 2023) — 论文未公开代码
  - Voicebox (Le et al., 2023) — 未公开代码
  - MELLE (Meng et al., 2024) — 论文未公开代码
  - DAC (Kumar et al., 2023) — https://github.com/descriptinc/descript-audio-codec
  - WavTokenizer (Ji et al., 2024) — https://github.com/jishengpeng/WavTokenizer
  - Mimi (Défossez et al., 2024) — https://github.com/kyutai-labs/moshi
  - DPM-Solver (Lu et al., 2022a;b) — https://github.com/LuChengTHU/dpm-solver
  - LLaMA (Touvron et al., 2023) — https://github.com/facebookresearch/llama
  - HiFi-GAN (Kong et al., 2020) — https://github.com/jik876/hifi-gan

注：以上链接为对应第三方项目的常见公开仓库，论文正文及参考文献中未直接提供这些项目的下载链接。

📄 [OpenReview](https://openreview.net/forum?id=PnTXyTR2VG)

---

### 114. [FakeWorld 1.0: An Omni-modal Benchmark for Fake Media and Content](/audio-paper-digest-blog/posts/2026-07-04-fakeworld-10-an-omni-modal-benchmark-for-fake)

✅ **6.1/10** | 前50% | #可解释性 | 创新 1.2/2 | 严谨 1/1.5 | 实验 1.2/1.5 | 影响 0.6/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Yifeng Gao（复旦大学）
- 通讯作者：Xingjun Ma（复旦大学）
- 作者列表：Yifeng Gao（复旦大学）、Yifan Ding（复旦大学，阿里巴巴集团）、Li Wang（复旦大学）、Feida Huang（复旦大学）、Ye Sun（复旦大学）、Yixu Wang（复旦大学）、Xin Wang（复旦大学）、Yutao Wu（迪肯大学）、Hanxun Huang（墨尔本大学）、Yunhao Feng（复旦大学，阿里巴巴集团）、Yingshui Tan（阿里巴巴集团）、Xingjun Ma（复旦大学）、Yu-Gang Jiang（复旦大学）

💡 **毒舌点评**

论文将一个极具野心的“媒体真伪”与“内容虚实”交叉评估理念推向了全模态，构建了一个高保真的混合欺骗场景，其问题定义令人眼前一亮。然而，在解决方案上却显得有点“虎头蛇尾”。核心的OmniCheck框架将检测重任押注于一个基于Qwen2.5-Omni-3B的LoRA微调小模型，这好比用精巧的锁扣去守护一扇纸糊的门。诚然，模型小、跑得快，但与它要评估的那些动辄上百亿参数的前沿大模型相比，其检测能力的理论上限令人存疑，且全文对数据、代码与模型的开源情况讳莫如深，对于一篇以Benchmark为核心贡献的论文而言，这无疑是一个显著的减分项。

📌 **核心摘要**

本文旨在弥合当前虚假信息检测研究中“AI生成内容检测”与“事实核查”两大任务相互割裂的鸿沟。作者提出了FakeWorld 1.0，一个全模态基准测试集。它并非简单地将不同模态的任务罗列，而是在一个仿真的新闻网页和移动端界面中，系统性地交叉组合了“天然/AI生成”和“事实/非事实”两个维度的内容，从而创造出复杂的跨模态语义不一致与事实错误场景。为解决这一复杂的联合检测任务，论文提出了一个名为OmniChecker的代理框架。该框架通过任务分解策略，将多模态联合查证拆解为模态解耦、媒体鉴伪、跨模态一致性验证和事实核查等子任务，并利用微调小模型及大语言模型协同工作，最终生成结构化的、附带证据的诊断报告。实验全面评估了当前主流的开源和闭源多模态大模型，结果揭示所有模型在处理这类混合欺骗时表现挣扎，尤其在媒体真实性判断上存在严重偏见。OmniChecker通过分治策略和任务微调，在部分指标上有所提升，但其能力边界严重受限于其基座模型。论文的贡献在于首次将真实性检测的两个核心维度在一个统一的高保真交互语境下标准化，其网页级设计也为未来能够交互式浏览的代理模型评测提供了基础，但仅限于单一语义事件内，尚未扩展至更复杂的多事件交叉引用场景。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及。
- 数据集：FakeWorld 1.0 数据集未提供下载链接或获取方式。
- Demo：论文中未提及。
- 复现材料：论文附录提供了部分数据构建与评估提示词和部分样本，但未提供独立的复现材料仓库、训练配置、检查点或相关链接。

📄 [OpenReview](https://openreview.net/forum?id=UXbNXAJRCo)

---

### 115. [ConsMSA: Semantic Distribution Consistency Learning for Multimodal Sentiment Analysis](/audio-paper-digest-blog/posts/2026-07-04-consmsa-semantic-distribution-consistency)

✅ **6.1/10** | 前50% | #多模态模型 | 创新 1.2/2 | 严谨 1/1.5 | 实验 1/1.5 | 影响 0.8/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Pan Wang（匹兹堡大学电子与计算机工程系，Amazon）
- 通讯作者：Pan Wang (pan.wang@pitt.edu) 和 Jingtong Hu (jthu@pitt.edu)
- 作者列表：Pan Wang（匹兹堡大学电子与计算机工程系，Amazon）、Lipeng Ke（Amazon, Sunnyvale）、Huajun Ying（Amazon, Sunnyvale）、Pritish Mohapatra（Amazon, Sunnyvale）、Rohan Sarkar（Amazon, Sunnyvale）、Suresh Lakhani（Amazon, Sunnyvale）、Sankar Venkataraman（Amazon, Sunnyvale）、Jingtong Hu（匹兹堡大学电子与计算机工程系）

💡 **毒舌点评**

这篇论文把“语义分布一致性”的概念玩得很溜，统一了模态内冗余和模态间冲突这两个老大难问题。方法上把JS散度、置信度gate和token剪枝打包成一套整洁的信号驱动框架，工程味道很浓，压缩实验也够硬核。可惜创新点偏“组合式精致”，底层模块都是老面孔，且完全不开源，这在顶会上相当于是断了自己复现验证的后路，诚意不足。

📌 **核心摘要**

这篇论文针对多模态情感分析（MSA）中广泛存在的模态内冗余和模态间语义冲突问题，提出ConsMSA框架。核心思路是将多模态token特征投影到共享语义分布空间（即类别预测概率空间），通过基于Jensen-Shannon散度的“Intra- and Inter-modality Consistency Score (I2CS)”量化token级语义一致性。进一步，将I2CS与预测置信度（Rel）结合，生成统一的重要性信号，该信号同时驱动一致性正则化（`L_I2CS`）、token软重加权（Soft Selection）和硬压缩（Hard Selection）。与以往在特征空间用注意力或熵做token选择的方法不同，ConsMSA直接在“预测分布”层面度量语义对齐，并用同一信号完成训练约束与推理加速。在CMU-MOSI、CMU-MOSEI和CH-SIMS三个基准上，ConsMSA在BERT和RoBERTa设置下均取得具有竞争力的结果，尤其在保留10% token的极端压缩下仍能保持相近精度，验证了语义分布一致性驱动的token选择策略的鲁棒性与实用潜力。主要局限性在于模型在严重类别不均衡的极端情感上性能低下，且训练阶段的计算开销与部分超参的设定缺乏深入分析。

🔗 **开源详情**

- 代码：论文中未提供代码链接，亦无GitHub仓库或开源声明。
- 模型权重：未提供任何预训练或最终模型权重的下载链接。
- 数据集：使用三个公开数据集（CMU-MOSI, CMU-MOSEI, CH-SIMS），但未提供数据下载链接、处理脚本或相关开源协议说明。
- 复现材料：论文在附录A.1提供了超参数表（Table 6），并提及基于PyTorch、单卡A100 40G等实现细节，但未提供任何形式的复现脚本、配置文件或依赖环境说明。
- 论文引用的开源项目：未提及具体开源项目名称及链接。

📄 [OpenReview](https://openreview.net/forum?id=rWTqAgyZcd)

---

### 116. [MusicDET: Zero-Shot AI-Generated Music Detection](/audio-paper-digest-blog/posts/2026-07-04-musicdet-zero-shot-ai-generated-music-detection)

✅ **6.1/10** | 前50% | #音频伪造检测 | 创新 1/2 | 严谨 0.8/1.5 | 实验 1/1.5 | 影响 0.7/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Chaolei Han（东南大学网络空间安全学院）
- 通讯作者：Hongsong Wang（东南大学计算机科学与工程学院，新一代人工智能技术与交叉应用重点实验室（东南大学），教育部）/ Jie Gui（东南大学网络空间安全学院，紫金山实验室，区块链应用监管与管理工程研究中心（东南大学），教育部）
- 作者列表：Chaolei Han（东南大学网络空间安全学院）、Hongsong Wang（东南大学计算机科学与工程学院，新一代人工智能技术与交叉应用重点实验室（东南大学），教育部）、Jie Gui（东南大学网络空间安全学院，紫金山实验室，区块链应用监管与管理工程研究中心（东南大学），教育部）

💡 **毒舌点评**

本文将Normalizing Flows首次引入AI生成音乐检测，并构建了一个仅需真实音乐训练的零样本框架，思路简洁且具有实用性。然而，方法的技术深度有限，核心架构基本复用了Glow流程，实验中对真实后处理的鲁棒性极差（如MP3压缩后EER飙升至41.75%），且写作中多处符号与表格排版混乱，影响了可信度和可读性。

📌 **核心摘要**

本文针对AI生成音乐检测中，现有鉴别器依赖已知生成器训练、跨生成器泛化差的痛点，提出了一种全新的零样本设定（仅用真实音乐训练）。方法核心是基于频率引导的Normalizing Flows（MusicDET）对真实音乐的时频能量谱分布进行概率建模，通过评估样本似然度来判断是否为AI生成。与以往需要生成器样本训练的分类器相比，该框架天然具有生成器无关的泛化能力。实验在FakeMusicCaps和SONICS数据集上进行，零样本MusicDET在FakeMusicCaps上的平均EER为4.51%，显著优于所有非零样本基线（如W2V2-AASIST的11.46%、SpecTTTra-α的17.63%）；当利用少量AI样本引入class-conditional先验后，EER可进一步降至0.89%；在SONICS上class-conditional MusicDET甚至达到0.00%的EER。在ASVspoof 2019 LA和CtrSVDD上的迁移实验也展现出一定通用性。论文还评估了模型在EnCodec重建音乐上的检测能力，并进行了Leave-one-subdomain-out的泛化测试。实际意义在于为音乐鉴伪提供了一种无需持续更新生成器指纹的轻量级检测方案。主要局限是对严重音频后处理（如强压缩、加噪、变调）极为敏感，零样本检测EER在MP3 64kbps压缩下飙升至41.75%，且模型分析局限于时频谱能量，对旋律、和声等高层音乐结构建模不足。

🔗 **开源详情**

-   代码：https://github.com/Chaolei98/MusicDET
-   模型权重：论文中未提及
-   数据集：
    -   FakeMusicCaps (Comanducci et al., 2025)：基于 MusicCaps 提示词，使用 5 个文本到音乐生成器合成的数据集，论文中未提供直接下载链接，可参考原论文获取。
    -   SONICS (Rahman et al., 2025)：包含真实音乐（来自 Genius Lyrics Dataset）和 Suno/Udio 生成的音乐，论文中未提供直接下载链接，可参考原论文获取。
    -   ASVspoof 2019 LA (Todisco et al., 2019)：公开数据集，可通过 https://datashare.ed.ac.uk/handle/10283/3336 获取。
    -   CtrSVDD (Zang et al., 2024)：论文中未提供直接下载链接，可参考原论文获取。
    -   FMA-medium (Defferrard et al., 2017): 用于EnCodec重建评测，可通过 https://github.com/mdeff/fma 获取。
-   Demo：论文中未提及
-   复现材料：
    -   预处理：所有音频重采样到 16kHz、单声道，裁剪/填充至 4 秒。
    -   STFT 参数：n_fft=512, hop_length=160, win_length=512。
    -   训练超参数：batch size 64，Adam 优化器，初始学习率 5e-4，训练 10 epoch。
    -   数据增强：使用 SpecAugment 随机遮罩时频区域。
    -   模型结构：频带数=2，每个频带内流步骤数 K=2，真实音乐高斯先验均值为 5，假音乐先验均值为 -5（类条件设置）。
    -   硬件：单卡 NVIDIA RTX 4090（24GB 显存）。
    -   未提供训练检查点。
-   论文中引用的开源项目：
    -   MusicGen：https://github.com/facebookresearch/audiocraft
    -   EnCodec：https://github.com/facebookresearch/encodec
    -   AASIST：https://github.com/clovaai/aasist
    -   MERT：https://github.com/yizhilll/MERT
    -   Wav2Vec 2.0 (fairseq)：https://github.com/pytorch/fairseq
    -   WavLM：https://github.com/microsoft/unilm/tree/master/wavlm
    -   SpecAugment：https://github.com/tensorflow/lingvo
    -   ViT (Vision Transformer)：https://github.com/google-research/vision_transformer
    -   ConvNeXt：https://github.com/facebookresearch/ConvNeXt
    -   Glow：https://github.com/openai/glow

📄 [OpenReview](https://openreview.net/forum?id=GiYWL2NVKs)

---

### 117. [Convex Low-resource Accent-Robust Language Detection in Speech Recognition](/audio-paper-digest-blog/posts/2026-07-04-convex-low-resource-accent-robust-language)

✅ **6.0/10** | 前50% | #语音识别 | 创新 1.2/2 | 严谨 1/1.5 | 实验 0/1.5 | 影响 0.8/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Miria Feng（斯坦福大学电气工程系）
- 通讯作者：Miria Feng（miria00@stanford.edu）
- 作者列表：Miria Feng（斯坦福大学电气工程系）、William Tan（斯坦福大学计算机科学系）、Mert Pilanci（斯坦福大学电气工程系）

💡 **毒舌点评**

本文将凸神经网络的理论工具精准地“搬”进了语音识别语言检测任务，在极低资源下拿到了漂亮的一致性好成绩，理论与系统落地的结合点找得准，凸优化免调参的特性是实证亮点。但检测头只做语言分类，并未触碰 ASR 转录瓶颈本身；对比基线缺乏与主流 LID 专用模型的正面较量；且特征空间证书因缺乏编码器 Lipschitz 的精确估计而难以兑现为实用的音频空间鲁棒性保证，理论保证与工程实际之间存在明显落差。

📌 **核心摘要**

本文针对多方言口音环境下自动语音识别（ASR）语言检测错误频发、尤其低资源方言样本稀缺导致传统微调过拟合的问题，提出 Convex Language Detection (CLD) 框架。方法核心是利用两层 ReLU 网络的凸重构形式，将 ASR 编码器冻结，仅通过凸规划训练一个检测头；该凸程序用 ADMM 在 JAX 上多 GPU 求解，得到全局最优解，并基于 variation norm 推导出 Lipschitz 证明和可计算的 margin 稳定性证书。相比传统神经网络需要大量数据和超参调优，CLD 在低资源（100-10000 样本）场景下保持高语言检测准确率并显著降低 WER。主要实验分别在二分类（英语 vs 中文，各含5种口音）和多分类（5种语言，24种口音）上进行，使用 Whisper-Small、Whisper-Large-V3 和 MMS-1B 作为骨干编码器；CLD 在500样本二分类上达到96.95%准确率，远超微调Whisper的72.07%和普通NN的55.80%；多分类中 Whisper-Large-V3 配合 CLD 达到98.06%准确率，WER降至28.60；训练时间仅为普通NN的7.7%。该方法为低资源多方言场景提供了一种可即插即用的稳健语言检测模块，但仅改善语言识别错误，对同一语言内方言转录错误仍受限于原始解码器。

🔗 **开源详情**

- 代码：https://github.com/pilancilab/CLD ；Python 包：https://pypi.org/project/jaxcld/
- 模型权重：论文中未提及预训练权重的发布
- 数据集：Common Voice v23（https://commonvoice.mozilla.org/），Lahaja 多口音 Hindi 基准（论文中未提供公开下载链接），新加坡国家语音语料库（National Speech Corpus，需向新加坡信息通信媒体发展管理局申请），MUSAN 噪声集（https://www.openslr.org/17/）
- Demo：论文中未提及
- 复现材料：代码仓库及 PyPI 包提供核心训练和推理代码，训练配置与超参数详见附录G，但缺少数据预处理脚本、环境配置文件和随机种子等完整复现细节
- 论文中引用的开源项目：
  - Whisper（https://github.com/openai/whisper）
  - Massively Multilingual Speech (MMS)（https://github.com/facebookresearch/fairseq/tree/main/examples/mms）
  - JAX（https://github.com/google/jax）
  - CRONOS（论文中未提供代码链接）
  - MUSAN（https://www.openslr.org/17/）

📄 [OpenReview](https://openreview.net/forum?id=LezLGW8UFX)

---

### 118. [NeuroCLUS: A Foundation Model with Functional Clustering for Intracranial Neural Decoding](/audio-paper-digest-blog/posts/2026-07-04-neuroclus-a-foundation-model-with-functional)

✅ **6.0/10** | 前50% | #语音识别 | 创新 1.2/2 | 严谨 1/1.5 | 实验 1/1.5 | 影响 0.5/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Hui Zheng（Independent Researcher）
- 通讯作者：Hui Zheng（icml2026.neuroclus@gmail.com）
- 作者列表：Hui Zheng（Independent Researcher）、Hai-Teng Wang（Independent Researcher）

💡 **毒舌点评**

这项工作敏锐地捕捉到了现有iEEG基础模型在tokenization粒度上的核心矛盾——要么太细（单通道）要么太粗（全脑聚合），提出的两阶段功能聚类策略直击要害，在Du-IN语音生成任务上甚至大幅超越了专门的SOTA模型（65.92% vs 62.70%），这点值得称赞。然而，完全忽略解码任务中至关重要的时序动态聚类（即功能模块可能随时间漂移这一基本神经科学事实），仅用静态的功能依赖图指导token聚合，导致模型对复杂认知过程的适应性存疑；同时“独立研究者”的身份与高达10k小时的预训练数据和8张A100的算力需求存在一定张力，缺少代码和模型权重也使得“SOTA”声称暂时难以验证。

📌 **核心摘要**

本文提出NeuroCLUS，一种面向颅内脑电图（iEEG）神经信号解码的基础模型，旨在解决现有方法中tokenization方案无法捕捉大脑内在功能模块化结构的核心缺陷。现有方法要么将每个电极视为独立token（如Brant、LaBraM），忽略了区域级表征对复杂认知解码的重要性；要么将所有通道聚合为单一全脑token（如PopT），丢失了功能特异性；要么依赖僵化的解剖图谱（如BaRISTA），无法反映数据驱动的动态功能组织。

NeuroCLUS的核心创新是一个两阶段预训练框架：第一阶段通过“功能上下文预测”（FCP）的自监督任务，训练一个时空Transformer来学习通道间的功能依赖图——随机替换部分通道的信号并要求模型从其他通道的上下文中判别被替换者，迫使模型捕获超越解剖邻近性的功能交互；第二阶段将学习到的功能依赖图作为先验，引导一组可学习的原型token（K=8）对通道进行软聚类——通道级表征通过归一化的内积被软分配到各原型，形成功能簇级表征，再输入Transformer支柱进行交互建模。

在包括语音感知（Brain Treebank）、语音生成（Du-IN 61词分类）和癫痫检测（SWEC/MAYO/FNUSA）等多个解码范式上，NeuroCLUS均取得SOTA结果。特别在Du-IN语音生成任务上达到65.92%平衡准确率，比先前最佳的专用模型Du-IN（62.70%）提升3.22个百分点；在癫痫检测SWEC数据集上Cohen's Kappa达0.61，超越MVPFormer（0.57）。消融实验证实功能聚类损失是关键——去掉它后Du-IN准确率骤降至44.72%。然而，模型未考虑功能簇的时序动态变化，当前10k小时/128人的预训练规模可能不足以达到性能平台期，且零样本跨任务泛化能力有限。

该方法为构建更符合神经科学原理的BCI基础模型提供了新范式，但其代码和模型均未开源，限制了可复现性和社区验证；同时论文仅聚焦于iEEG模态，对更广泛的EEG/脑磁图等非侵入式信号的适用性有待验证。

🔗 **开源详情**

- 代码：论文中未提及代码链接（仅提供联系邮箱 icml2026.neuroclus@gmail.com）
- 模型权重：论文中未提及
- 数据集：论文中评估使用了5个公开的颅内脑电图（iEEG）数据集，但未在论文中直接提供获取链接，具体包括：
  1.  SWEC 数据集：用于癫痫发作检测，含 68 位受试者，共 9,328 小时数据（Carzaniga et al., 2025）。论文中未提供直接链接。
  2.  MAYO 数据集：用于癫痫发作检测，含 24 位受试者，共 130 小时数据（Nejedly et al., 2020）。论文中未提供直接链接。
  3.  FNUSA 数据集：用于癫痫发作检测，含 14 位受试者，共 160 小时数据（Nejedly et al., 2020）。论文中未提供直接链接。
  4.  Brain Treebank 数据集：用于语音感知，含 10 位受试者，共 55 小时数据（Wang et al., 2024a）。论文中未提供直接链接。
  5.  Du-IN 数据集：用于语音生成，含 12 位受试者，共 36 小时数据（Zheng et al., 2025）。论文中未提供直接链接。
  注：论文在附录 A 中说明，预训练阶段使用了收集自公开数据集的约 1 万小时（~10k hours）数据，其中包含以上 5 个下游任务数据集，但未给出预训练数据集的完整列表或下载链接。五个数据集合计约9,709小时，其余约291小时的来源未展开说明。
- Demo：论文中未提及
- 复现材料：论文附录提供了部分复现信息，包括：
  - 数据预处理流程（第6页）。
  - 预训练与微调的实验设置和超参数（第6页）。
  - 附录B：数据增强策略。
  - 附录D：模型架构的详细超参数，包含功能上下文预训练的超参数（表2）和功能聚类预训练的超参数（表3）。
  - 论文中未提及提供检查点或其他复现材料。
- 论文中引用的开源项目：
  - Brant (Zhang et al., 2023)：颅内神经信号的基础模型。
  - LaBraM (Jiang et al., 2024)：用于脑电图（EEG）的大型脑模型。
  - Du-IN (Zheng et al., 2025)：基于离散单元掩码建模的颅内神经信号语音解码模型。
  - H2DiLR (Wu et al., 2024)：用于颅内录音的同质词汇声调解码模型。
  - PopT (Chau et al., 2024)：学习神经活动群体表征的模型。
  - BaRISTA (Oganesian et al., 2025)：人颅内神经活动的脑尺度时空表示模型。
  - MVPFormer (Carzaniga et al., 2025)：带有多变量并行注意力的神经活动基础模型。
  （以上项目均未在论文中提供直接的项目链接或代码仓库地址。）

📄 [OpenReview](https://openreview.net/forum?id=pFweJM4Uw8)

---

### 119. [Sparse Tokens Suffice: Jailbreaking Audio Language Models via Token-Aware Gradient Optimization](/audio-paper-digest-blog/posts/2026-07-04-sparse-tokens-suffice-jailbreaking-audio-language)

📝 **5.9/10** | 前50% | #模型剪枝 | 创新 1.2/2 | 严谨 1/1.5 | 实验 1.2/1.5 | 影响 0.6/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Zheng Fang（武汉大学）
- 通讯作者：Shenyi Zhang（武汉大学数学与人工智能研究所）
- 作者列表：Zheng Fang（武汉大学）、Xiaosen Wang（华中科技大学）、Shenyi Zhang（武汉大学数学与人工智能研究所）、Shaokang Wang（上海交通大学）、Zhijin Ge（西安电子科技大学）

💡 **毒舌点评**

本文以一个直观的梯度能量集中现象为切入点，提出稀疏token选择优化替代传统密集波形更新，想法简单，实验在三款主流ALM上也展示了不错的攻击成功率。但问题同样刺眼：整个方法深绑白盒威胁模型，离实际攻防场景太远；更致命的是无代码、无模型、无Demo，连复现的最小诚意都没有，让其宣称的“促进安全对齐研究”显得像个空口号。

📌 **核心摘要**

本文研究音频语言模型(ALM)的越狱攻击，质疑密集波形更新的必要性。通过分析token对齐的梯度能量，发现梯度高度集中在少数音频token上（例如Qwen3-Omni上前16% token占90%梯度能量）。据此提出Token-Aware Gradient Optimization (TAGO)，在每步迭代中仅保留梯度能量最高的top-k token对应的波形区域进行稀疏更新，并辅以模型兼容的前缀模板和早停(EOS)抑制。在Qwen3-Omni、Qwen2.5-Omni和LLaMA-Omni上，TAGO在token保留率0.25时仍能维持86%的LLM-Judge ASR（Qwen3-Omni），远超随机后剪枝的Post-hoc prune基线，且攻击扰动SNR均在20dB以上，不易察觉。结果表明密集波形更新存在大量冗余，稀疏token级优化足以实现高效越狱。不足之处在于仅适用于白盒设定，且完全未提供开源代码或模型权重。

[图像补充] 图1为方法示意图，清晰展示了TAGO的整体流程：输入无害音频与文本提示，通过一个可微的音频编码器与LLM联合前向传播，利用梯度计算与token对齐，选择高能量token区域进行掩码更新，最终生成恶意音频扰动。

关键实验数据摘录（Qwen3-Omni 上 ASR）：
| 方法 | Token 保留率 ζ | ASR_r (%) | ASR_l (%) |
|------|----------------|-----------|-----------|
| Direct | - | 0 | 0 |
| SpeechGuard | 1.0 | 100 | 42 |
| AdvWave | 1.0 | 70 | 45 |
| Post-hoc prune | 0.25 | 9 | 1 |
| TAGO | 1.0 | 100 | 87 |
| TAGO | 0.25 | 99 | 86 |

🔗 **开源详情**

- 代码：论文未提供代码链接。
- 模型权重：论文引用了Qwen2.5-Omni-7B、Qwen3-Omni-30B-A3B-Instruct和LLaMA-3.1-8B-Omni的开源HuggingFace地址，但未提供任何自己训练的权重。
- 数据集：使用AdvBench-50（源自Chao et al., 2025）和HarmBench（源自Mazeika et al., 2024），均为公开数据集，但论文作者未提供其经过处理的TTS音频版本的直接下载链接。
- Demo：未提及。
- 复现材料：附录提供了详细超参数、目标前缀模板及教师模型配置，但缺少最关键的、包含token-to-waveform映射逻辑的可执行代码。
- 引用的开源项目：如用于评估的SorryBench模型（ft-mistral-7b-instruct-v0.2-sorry-bench-202406）和用于合成语音的Google Cloud TTS服务，论文均未提供作者自研的任何开源资产。

📄 [OpenReview](https://openreview.net/forum?id=BLnxPR2QB2)

---

### 120. [Scaling Behavior in Model Fine-tuning for Audio DeepFake Detection](/audio-paper-digest-blog/posts/2026-07-04-scaling-behavior-in-model-fine-tuning-for-audio)

📝 **5.9/10** | 前50% | #音频伪造检测 | 创新 1.2/2 | 严谨 1/1.5 | 实验 0.9/1.5 | 影响 0.8/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Xiang Li（Fordham University, Department of Computer and Information Science）
- 通讯作者：Xiang Li（Fordham University）
- 作者列表：Xiang Li（Fordham University）、Pin-Yu Chen（IBM Research）、Wenqi Wei（Fordham University）

💡 **毒舌点评**

这篇论文首次用受控实验拆解了音频深伪检测中的缩放不对称性，明确指出“大模型不一定更鲁棒”这一反直觉结论，对盲目追逐容量的人是一记当头棒喝。但毛病也同样刺眼：分析完全束缚在Whisper一族之内，既无其他检测器的横向对比，也无任何代码或模型公开，让整套漂亮曲线变成了一场孤独的独白——读者只能看，没法摸。更令人不安的是，文中多处关键训练细节（如batch size、损失函数）语焉不详，让人觉得这场实验可能只有作者自己玩得转。

📌 **核心摘要**

1. 研究问题：音频深伪检测中，检测性能、鲁棒性和泛化能力如何随模型容量和微调数据量变化，是否存在可预测的缩放规律。
2. 方法核心：以Whisper模型族为受控平台，通过LoRA微调构建检测器，系统改变模型尺寸（Tiny 39M、Base 74M、Small 244M、Medium 769M、Large 1.55B）与训练数据比例（2%至100%，共13档），在分布内、分布外、扰动、跨语言、跨TTS条件下评估等误率（EER），并用幂律函数 $L(x)=\alpha x^{-\beta}+\epsilon$ 拟合缩放曲线。
3. 与已有方法之新意：首次将缩放定律研究从预训练阶段迁移到后训练音频深伪检测，同时将评价从单一准确率拓展到鲁棒性和泛化性多轴分析，揭示缩放效益在不同评价轴上严重不对称。
4. 主要实验结果：论文以曲线图呈现缩放趋势，未提供具体数值表格。ID条件下，大模型样本效率更高，EER随数据呈稳定幂律下降；OOD条件下收益变弱且方差大；高斯噪声扰动下鲁棒性近似跟随ID曲线，但pitch shift和Encodec失真下鲁棒性曲线明显扁平甚至饱和；跨语言和跨TTS泛化也呈现较慢的缩放率和持续的误差间隙。计算最优实验中，小模型在低算力下更优，大模型需足够算力才能超越。论文通过拟合Whisper-Large的ID缩放曲线外推，预测若误差地板降至3%，需约2400万样本才能达到5% EER；若为零地板则约需700万样本。
5. 实际意义：为工业部署提供了明确的算力-模型匹配指导，警示仅靠扩大模型无法自动获得鲁棒性，需结合多样性数据或鲁棒训练策略。
6. 主要局限性：分析局限于单一模型家族，未公开代码、模型权重；缩放系数的拟合仅有定性演示，缺少统计置信度；未对SOTA检测器做横向对比；关键训练超参数（batch size、损失函数）缺失；缩放行为对LoRA秩、学习率等超参数的敏感性未做消融实验。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及模型权重下载链接。
- 数据集：论文使用多个公开数据集进行训练和评估。训练数据集包括ASVspoof2019、ASV5、CodecFake (Wu et al., 2024版)、LibriTTS-train-clean-360、DFADD、LJSpeech、WaveFake、CD-ADD；评估数据集包括In-the-Wild、ADD2022（Track 1和3）、ADD2023（Round 1和2）、ASVspoof2021 LA/DF、Fake-or-Real、CodecFake (Xie et al., 2025版)、SONAR、LibriSeVoc、SpeechFake（跨语言评估）等，但未给出统一下载链接或具体获取方式。
- Demo：论文中未提及。
- 复现材料：论文描述了训练设置（LoRA rank=16, α=32, dropout=0.1，学习率2×10⁻⁴，权重衰减5×10⁻⁴等），但未提供代码、配置文件或检查点，且缺失batch size和损失函数等关键信息。
- 论文中引用的开源项目：
  - OpenAI Whisper：https://github.com/openai/whisper
  - LoRA（Low-Rank Adaptation）：https://github.com/microsoft/LoRA

📄 [OpenReview](https://openreview.net/forum?id=yHT8piYc8u)

---

### 121. [Bioacoustic Geolocation: Species Sounds as Geographic Signals](/audio-paper-digest-blog/posts/2026-07-04-bioacoustic-geolocation-species-sounds-as)

📝 **5.8/10** | 前50% | #音频理解 | 创新 0.8/2 | 严谨 0.8/1.5 | 实验 1/1.5 | 影响 0.4/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Mustafa Chasmai（University of Massachusetts, Amherst）
- 通讯作者：Mustafa Chasmai（University of Massachusetts, Amherst）
- 作者列表：Mustafa Chasmai、Wuao Liu、Subhransu Maji、Grant Van Horn（均来自 University of Massachusetts, Amherst）

💡 **毒舌点评**

本文瞄准了一个有趣但极为小众的问题：利用生物声学信号进行全球尺度地理定位。核心思想——以物种分布范围作为定位的强先验——具有一定的洞见性。但方法层面上的贡献单薄得令人失望：AG-CLIP 本质上只是 GeoCLIP 的音频适配版，再加一个物种清单预测的辅助损失，两个组件的组合方式在 2025 年看来过于直白，缺乏方法学上的深度。更致命的是，模型在真实的黎明合唱场景（XCDC）下几乎完全失效（区域准确率仅4.3%），而作者对性能瓶颈的剖析仅停留在"分布偏移"和"物种重叠"的层面，缺乏深入的诊断实验，也未能提供任何有效的解决方案。论文的系统性基准测试值得肯定，但作为一个声称要"奠定地基"的工作，缺乏足够的算法贡献来支撑这一雄心。

📌 **核心摘要**

本文首次系统性地探索了全球尺度的生物声学地理定位问题，即仅凭一段音频录音推断其录制地点。核心假设是：物种的地理分布范围可作为强大的定位信号。作者在 iNatSounds 数据集和自建的黎明合唱数据集 XCDC 上进行了大规模实验，系统对比了回归、分类、物种范围检索、音景映射基线等多种范式，并提出了一种名为 AG-CLIP (AudioGeo-CLIP) 的混合方法。AG-CLIP 基于 GeoCLIP 的对比学习框架，使用音频编码器提取特征并与位置嵌入对齐，同时加入辅助的多标签物种清单预测分支，该分支的监督信号来自 SINR 物种分布模型。在 iNatSounds 测试集上，AG-CLIP 取得了 17.2% 的区域准确率（200 km 内）和 71.2% 的大陆准确率（2500 km 内），明显超越 GeoCLAP、Taxabind 等基线。论文进一步证明，通过时空聚合（将同一区域、同年内的多个录音的预测取平均），可将区域准确率提升至 30.4%。在更具挑战性的 XCDC 黎明合唱数据集上，所有基于模型的方法性能均大幅下滑，揭示了现有模型在复杂多物种声景中的关键瓶颈。此外，论文还探索了多模态地理取证等应用场景。

🔗 **开源详情**

- 代码：论文提及代码和训练模型可在 `cvl-umass/audio-geolocation` 获取，应为 https://github.com/cvl-umass/audio-geolocation （文中未给完整URL）。
- 模型权重：论文提及"Trained models and code are available"，但未单独提供模型权重下载链接或 Hugging Face 页面。
- 数据集：(1) iNatSounds: 引用自 Chasmai et al., 2024 (NeurIPS)，需参考原始论文获取；(2) XCDC: 论文声明将从 Xeno-Canto (https://xeno-canto.org) 筛选构建并按 CC BY-NC-ND 许可发布，但文中未提供下载链接；(3) WABAD: 引用自 Pérez-Granados et al., 2025 (https://doi.org/10.5281/zenodo.15629388)。

📄 [OpenReview](https://openreview.net/forum?id=okWAqiCEQD)

---

### 122. [AudioChat: Unified Audio Storytelling, Editing, and Understanding with Transfusion Forcing](/audio-paper-digest-blog/posts/2026-07-04-audiochat-unified-audio-storytelling-editing-and)

📝 **5.8/10** | 前50% | #音频生成 | 创新 1.2/2 | 严谨 1/1.5 | 实验 0.7/1.5 | 影响 0.9/1.5 | 开源 0.1/1.5

👥 **作者与机构**

- 第一作者：William Chen（Adobe Research, Carnegie Mellon University）
- 通讯作者：William Chen <williamchen@cmu.edu>, Prem Seetharaman <pseeth@adobe.com>
- 作者列表：William Chen（Adobe Research, Carnegie Mellon University）、Prem Seetharaman（Adobe Research）、Rithesh Kumar（Adobe Research, OpenAI）、Oriol Nieto（Adobe Research）、Shinji Watanabe（Carnegie Mellon University）、Justin Salamon（Adobe Research）、Zeyu Jin（Adobe Research）

💡 **毒舌点评**

这是一篇工程味很重的工作，为统一处理复杂多源音频场景提供了一个端到端的解决方案，pipeline设计完整。但核心创新很有限，本质是将视觉领域的Transfusion和Diffusion Forcing技术结合后迁移到音频，并强依赖于一个用专有模型合成的数据集。评测高度内循环，在域外真实音频上的泛化性存疑，且模型不公开，更像是Adobe内部技术实力的展示而非推动社区开放研究的产物。

📌 **核心摘要**

1. 本文旨在解决现有音频基础模型难以处理包含多说话人和复杂前景/背景声效的“音频故事”这一挑战，这要求模型同时具备精细的语义、时间和物理属性的理解与生成能力。
2. 方法核心是AudioChat，一个基于多模态大语言模型（MLLM）的统一框架。它利用LLM代理（AudioCopilot）合成海量多轮对话作为训练数据，通过创新的Audio Transfusion Forcing目标进行训练，使单一模型能进行结构化链式思维推理、音频生成与编辑。
3. 与已有方法相比，AudioChat的特点是：(a) 首次将Transfusion和Diffusion Forcing结合用于音频的多轮生成与编辑；(b) 利用结构化CoT推理，生成精确的声源级参数（如起止时间、响度、声像），实现细粒度控制；(c) 设计了三个直接衡量任务性能的新指标（multiFLAM, ΔmultiFLAM, editFLAM），试图替代传统的分布距离指标。
4. 主要实验在自建的StoryGen-Eval基准上进行。在音频编辑任务上，AudioChat在一致性（human 3.92）和指令遵循（human 3.12，editFLAM 18.6）上优于DiT和级联baseline。在音频故事生成任务上，其KAD (2.52) 和延迟 (32s) 显著优于WavJourney (10.82 KAD, 628s延迟)。在音频理解上，说话人日志tcpWER达到9.7，优于WhisperX的55.9，但不如经过微调的Whisper-Story (5.5)。
5. 实际意义在于提出了一个“数据合成-模型训练-评估”的完整pipeline，为探索复杂声学场景的统一处理提供了参考方案，尤其展示了结构化推理与生成结合在可控性上的潜力。
6. 主要局限性在于：模型完全依赖高质量的合成数据训练，对真实世界复杂或低质量音频的泛化能力有限；合成数据高度依赖内部强大的专有LLM和TTS/T2A模型，加之内部数据的使用，导致复现门槛极高；模型不公开发布，削弱了其学术影响力。

🔗 **开源详情**

- 代码：论文未提供代码链接。
- 模型权重：论文明确声明“the model will not be publicly released in its current form”，未提供。
- 数据集：评估数据StoryGen-Eval基于LibriSpeech test-clean，但作者未提供公开下载链接或生成脚本。训练数据由AudioCopilot合成的600万段对话组成，未公开。
- Demo：https://wanchichen.github.io/audiochat/
- 复现材料：论文提供了AudioCopilot的提示模板、生成流程、模型超参数、训练阶段等信息，但由于核心部分（如TTS/T2A工具）未公开且使用了内部数据，无法完整复现。
- 论文中引用的开源项目：
  - WhisperX: https://github.com/m-bain/whisperX
  - Stable Audio Open: https://github.com/Stability-AI/stable-audio-open
  - TangoFlux: https://github.com/declare-lab/TangoFlux
  - OpenFLAM: https://github.com/yunyangx/OpenFLAM
  - DAC-VAE (基于 High-Fidelity Audio Compression with Improved RVQGAN): https://github.com/descriptinc/descript-audio-codec
  - vLLM: https://github.com/vllm-project/vllm
  - Qwen2 Audio: https://github.com/QwenLM/Qwen2-Audio
  - Audio Flamingo 3: https://github.com/NVIDIA/audio-flamingo
  - WavJourney: 未在论文中给出直接链接
  - OLMo 2: https://github.com/allenai/OLMo
  - Gemma 2: 未给出具体仓库，可从Google获取
  - LibriSpeech: https://www.openslr.org/12
  - Common Voice: https://commonvoice.mozilla.org/
  - Freesound: https://freesound.org/
  - AudioCaps: https://audiocaps.github.io/

📄 [OpenReview](https://openreview.net/forum?id=0VXbYwtvR8)

---

### 123. [Omni-Diffusion: Unified Multimodal Understanding and Generation with Masked Discrete Diffusion](/audio-paper-digest-blog/posts/2026-07-04-omni-diffusion-unified-multimodal-understanding)

📝 **5.8/10** | 前50% | - | 创新 0.9/2 | 严谨 0.9/1.5 | 实验 0.6/1.5 | 影响 0.8/1.5 | 开源 1/1.5

👥 **作者与机构**

- 第一作者：Lijiang Li（南京大学计算机软件新技术国家重点实验室、南京大学智能科学与技术学院）
- 通讯作者：Chaoyou Fu（南京大学计算机软件新技术国家重点实验室、南京大学智能科学与技术学院）
- 作者列表：Lijiang Li（南京大学）、Zuwei Long（腾讯优图实验室）、Yunhang Shen（腾讯优图实验室）、Heting Gao（腾讯优图实验室）、Haoyu Cao（腾讯优图实验室）、Xing Sun（腾讯优图实验室）、Caifeng Shan（南京大学）、Ran He（中国科学院自动化研究所）、Chaoyou Fu（南京大学）

💡 **毒舌点评**

本文提出将mask-based discrete diffusion应用于any-to-any多模态系统，这一方向选择确实体现了对非自回归范式潜力的洞察。三阶段渐进式训练、SDVI数据集构建以及position penalty等推理trick形成了一套相对完整的技术方案。但问题也很突出：实验对比基线严重过时（LLaVA、InstructBLIP均为2023年工作），text-to-image的CLIP分数（CLIP-T 0.236）远低于实用水平，ASR的WER 6.69%更是不可接受。作者声称的"comparable or even better"需要更充分的证据，与2024-2025年主流系统的对比完全缺失。SDVI数据集依赖语音合成，其质量对结论的影响未被讨论。某些关键设计（如自适应长度系数）过于经验化，缺乏敏感性分析。

📌 **核心摘要**

本文提出Omni-Diffusion，首个完全基于mask-based discrete diffusion的any-to-any多模态语言模型，统一处理文本、图像、语音的理解与生成。其核心方法是将多模态数据统一离散token化——使用MAGViT-v2作为图像tokenizer（下采样因子f=16，codebook size 8192）、SenseVoiceSmall作为语音编码器、GLM-4-Voice decoder作为语音解码器（token rate 12.5Hz，codebook size 16384）。在预训练的Dream-7B扩散语言模型上，通过扩展vocabulary来统一建模多模态离散token的联合分布，并在mask-token prediction框架下训练。与现有autoregressive多模态系统（如AnyGPT、NExT-GPT等）不同，Omni-Diffusion用扩散模型的并行解码替代自回归生成，天然支持图像inpainting等任务。

实验涵盖ASR、TTS、VQA、text-to-image、speech-to-image等任务。主要结果：LibriSpeech ASR WER 6.69%（弱于GLM-4-Voice的2.82%），LibriTTS TTS WER 2.22%（优于GLM-4-Voice的5.64%），POPE 76.4%、MME-Perception 1176.1（与2023年baseline相当），MSCOCO text-to-image CLIP-T 0.236/CLIP-I 0.662。在扩散模型的核心优势——采样效率方面，10步推理即可保持生成质量（CLIP-T从0.236降至0.233，TTS WER保持2.22%），验证了扩散模型的并行解码优势。

实际意义在于首次验证了mask-based discrete diffusion在统一多模态系统（含语音）中的可行性，为探索非自回归架构的多模态基础模型提供了有价值的实验证据和工程参考。主要局限是图像生成质量远低于专用扩散模型，ASR性能不佳，且未与2024-2025年的现代多模态系统对比，其实用价值有待进一步验证。

🔗 **开源详情**

- 代码：论文声明"Codes are released at GitHub"，但未给出具体仓库链接。
- 模型权重：论文未提及。
- 数据集：SDVI数据集构建流程有描述，但未提供下载链接或获取方式。
- Demo：论文未提及。
- 复现材料：附录A给出了训练配置（优化器、学习率、batch size等），但未提供预训练checkpoint或完整复现包。
- 论文中引用的开源项目：Dream-7B、MAGViT-v2、SenseVoiceSmall、GLM-4-Voice decoder、CosyVoice2、LLaVA-OneVision、Whisper-Large-V3等，论文未提供这些项目的具体链接。

📄 [OpenReview](https://openreview.net/forum?id=EulXRTtFCd)

---

### 124. [Robust Signal Enhancement via Fractional Detail Views and Knowledge Guided Multi-view Fusion](/audio-paper-digest-blog/posts/2026-07-04-robust-signal-enhancement-via-fractional-detail)

📝 **5.7/10** | 前50% | #语音增强 | 创新 1/2 | 严谨 1/1.5 | 实验 1.1/1.5 | 影响 0.8/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Zikun Jin（山西大学 大数据科学与产业研究院、山西省演化科学智能重点实验室）
- 通讯作者：Yuhua Qian（山西大学 大数据科学与产业研究院、山西省演化科学智能重点实验室、山西大学 人工智能学院），邮箱 jinchengqyh@126.com
- 作者列表：Zikun Jin, Yuhua Qian, Xinyan Liang, Jiaqian Zhang, Haijun Geng（山西大学 自动化与软件学院）

💡 **毒舌点评**

这篇论文的工程洞察力值得肯定：分数阶距离衰减卷积和Wiener先验引导的融合策略是务实的组合，在-20dB电磁信号上30+dB的提升确实吸睛。但整体看下来，这是一篇典型的"工程扎实、理论包装过度"的论文。正文中大量篇幅用于推导O(1/M)逼近、Lipschitz连续性等命题，但这些"理论保证"与"为什么FracConv在低SNR下比标准卷积好"这一核心问题之间存在明显的逻辑断层——作者从未解释无约束卷积是否不具备这些稳定性性质，也未证明FracConv引入的归纳偏置为何更适合处理噪声-信号耦合。更严重的是，第7页出现了大段不可解析的乱码（疑似PDF提取错误），导致实验最关键的讨论和结论部分（第5.1节末尾至5.5节开头）信息完全丢失，这对于顶会投稿是不可接受的写作事故。此外，VoiceBank基准比较中直接引用不同底层的论文数据而非统一重跑，使得2.0M模型压倒65.6M扩散模型的SOTA声明打了折扣。

📌 **核心摘要**

本文提出FracKGMF框架，通过耦合分数阶距离衰减卷积（FracConv）与知识引导多视图融合（KGMF），来解决极低信噪比下噪声-信号纠缠导致的局部时频证据不可靠问题。核心思路是让模型构建两个互补的时频表示：LRF视图通过深度可分离空洞卷积聚合长距离弱上下文线索，FD视图通过FracConv的可学习分数阶径向距离衰减包络在局部邻域内自适应地调整交互尺度。KGMF模块利用Wiener滤波估计的可恢复性分数作为物理参考，通过比较两个视图与该先验的距离动态分配融合权重，避免在噪声主导区域对单一视图的过信任。方法在两个领域五个数据集上验证：VoiceBank+DEMAND上以2.0M参数取得3.32 PESQ，EARS-WHAM!上六个指标全面最优；Rydberg电磁信号数据集上-20dB输入下平均SNR提升33.04dB。

🔗 **开源详情**

- 代码：论文中未提及任何代码仓库链接。
- 模型权重：论文中未提及模型权重发布。
- 数据集：
  - Rydberg 4-bins/20-bins Atomic Antenna Signals：源自Liu et al., 2022 (Nature Communications)的公开数据集，论文未提供直接下载链接。
  - Modulation dataset：按DeepSig RML2018协议生成（O'Shea et al., 2018），论文未提供生成代码或直接下载链接。
  - VoiceBank+DEMAND：Botinhao et al., 2016的标准基准，论文未提供下载链接。
  - EARS-WHAM!：Richter et al., 2024发布的基准，论文未提供下载链接。
- Demo：论文中未提及。
- 复现材料：附录B给出训练设置（优化器、学习率、batch size、信号长度、STFT参数等），附录D给出Wiener滤波伪代码（Algorithm 1），但无代码文件、配置文件或预训练模型。附录E包含补充实验可视化和单指数超参分析，但无直接可复现资源。

📄 [OpenReview](https://openreview.net/forum?id=iIWMjdBZ20)

---

### 125. [Multimodal Fusion via Self-Consistent Task-Gradient Fields](/audio-paper-digest-blog/posts/2026-07-04-multimodal-fusion-via-self-consistent-task)

📝 **5.5/10** | 前50% | #鲁棒性 | 创新 1.2/2 | 严谨 1/1.5 | 实验 1/1.5 | 影响 0.7/1.5 | 开源 0.2/1.5

👥 **作者与机构**

- 第一作者：Jiayu Xiong（华侨大学计算机科学与技术学院，厦门市计算机视觉与模式识别重点实验室）
- 通讯作者：Jing Wang（华侨大学计算机科学与技术学院，厦门市计算机视觉与模式识别重点实验室，wroaring@hqu.edu.cn）
- 作者列表：Jiayu Xiong（华侨大学计算机科学与技术学院，厦门市计算机视觉与模式识别重点实验室）、Jing Wang（华侨大学计算机科学与技术学院，厦门市计算机视觉与模式识别重点实验室）、Jun Xue（武汉大学）、Wanlong Wang（华侨大学计算机科学与技术学院，厦门市计算机视觉与模式识别重点实验室）、Jianlong Kwan（华侨大学）、Xiaosen Lyu（华侨大学计算机科学与技术学院，厦门市计算机视觉与模式识别重点实验室）、Zhouqiang Jiang（大阪大学产业科学研究所 Nakashima Lab）

💡 **毒舌点评**

这篇论文用一个看似高深的“自洽场”物理概念包装了一个解决多模态梯度冲突的融合模块，核心idea——把任务梯度和信息保持分解到共享与特定两个特征子空间——确实比粗暴堆辅助损失要聪明。但让我火大的是：论文的排版和写作简直是灾难，图1的teaser关键数字错位/截断到无法辨认，Section 4的符号体系滥用上标和下标（$\hat{Z}, Z, \mathbf{Z}$ 绕来绕去），物理类比（PNP方程）占了大半页却对理解方法帮助甚微。更致命的是，核心方法缺乏严格理论支撑：为什么扩展因子n=2、边界b=0.5就是最优？Eq.1的约束优化到实际重建损失的等价性从未被证明。全文读下来像是好的insight被放进了一个粗糙的包装里。如果你的任务是让多模态模型在传感器掉线时不崩溃，SCFAE值得一试；但别指望仅凭这篇论文就能丝滑复现——关键细节散落在混乱的排版和遗漏的训练超参里（batch size全篇没说，类别不平衡处理也没交代）。

📌 **核心摘要**

1. SCFAE瞄准的核心问题是多模态融合中的“梯度反馈失真”：耦合融合在缺失模态时让编码器退化，解耦融合的辅助损失（如对比、互信息最小化）会与主任务梯度冲突。
2. 方法学的核心是将物理学自洽场思想迁移到多模态融合：把任务损失类比“漂移力”（驱动共享特征向任务对齐），把重建损失类比“扩散力”（保持特定子空间的信息完整性），二者通过共享/特定特征子空间的架构隔离来避免冲突。
3. 与MISA、DrFuse的关键区别是：SCFAE不用互信息最小化、正交约束或对比学习来强迫解耦，而是通过“扩展映射→切分为共享/特定→跨模态循环重组共享部分→重建保持信息”的纯架构设计，隐式地引导特征分离。
4. 在三个典型灾难场景上验证：不等长输入（ActivityNet 4096d视频+128d图像检索，mAP@100 可达0.326，超过AdaMMS的0.319）；冲突信号（FakeAVCeleb假脸+真声，音频ACC 95.74%，对比AdaMMS的93.45%）；缺失模态（CMU-MOSEI七种输入组合平均ACC 80.3%，对比最佳基线80.1%）。编码器退化实验（Tab.6）是亮点：SCFAE对单模态编码器的性能损伤最小（-0.08~-1.57 ACC下降，而交叉注意力可达-9.79以上）。
5. 实际意义在于：它为多模态系统提供了一种无超参调优（声称λ在0.5–2.0内不敏感）、与骨干无关的即插即用模块，尤其适合医疗、自动驾驶等对输入完整性敏感的场景。
6. 主要局限（论文自述+审稿人挖掘）：扩展因子n带来特征维度平方级参数增长；缺失大规模多模态预训练模型（如CLIP/ImageBind）上的验证；共享子空间的跨模态兼容性假设在弱相关模态间可能不成立；梯度分析的因果性未严格验证；写作和排版严重拉低可读性。

🔗 **开源详情**

- 代码：论文未提供任何实际代码链接。附录A.1声明“因ICML匿名协议未包含代码链接，仅提供为复现开发的代码，将在之后公开”，暗示存在可用实现但未释放。
- 模型权重：未提供下载链接。
- 数据集：使用三个公开数据集，但未提供直接获取链接——FakeAVCeleb (Khalid et al., 2021)、ActivityNet (Heilbron et al., 2015)、CMU-MOSEI (Bagher Zadeh et al., 2018)。需参考原始论文获取。
- Demo：未提供在线演示地址。
- 复现材料：附录A提供了部分实现细节（优化器、学习率调度、epochs、λ=1.0、特征维度等），但缺少batch size、数据预处理具体步骤和完整的训练配置文件/脚本。附录A.1明确表示不会重实现所有基线，仅提供自己开发的代码。
- 论文引用的开源项目：
  - PyTorch (https://pytorch.org)
  - Apex (https://github.com/NVIDIA/apex)
  - VideoMAE v2 (https://github.com/MCG-NJU/VideoMAE)
  - WavLM (https://github.com/microsoft/unilm/tree/master/wavlm)
  - DINOv3 (https://github.com/facebookresearch/dinov3)
  - AudioMAE (https://github.com/facebookresearch/AudioMAE)
  - R(2+1)D (https://github.com/pytorch/vision)
  - ResNetSE-34 (在 https://github.com/clovaai/voxceleb_trainer 中实现)
  - MISA / DrFuse / Perceiver / GCNet / MCULoRA 等对比方法均有对应开源仓库但论文未逐一列举链接。

📄 [OpenReview](https://openreview.net/forum?id=KDJf0EyawI)

---

### 126. [NAACA: Training-Free NeuroAuditory Attentive Cognitive Architecture with Oscillatory Working Memory for Salience-Driven Attention Gating](/audio-paper-digest-blog/posts/2026-07-04-naaca-training-free-neuroauditory-attentive)

📝 **5.5/10** | 前50% | #音频事件检测 | 创新 1/2 | 严谨 0.7/1.5 | 实验 0.8/1.5 | 影响 0.5/1.5 | 开源 0.8/1.5

👥 **作者与机构**

- 第一作者：Zhongju Yuan（WAVES Research Group, Ghent University, Gent, Belgium）
- 通讯作者：Zhongju Yuan（zhongju.yuan@ugent.be）
- 作者列表：Zhongju Yuan（Ghent University）、Geraint A. Wiggins（Vrije Universiteit Brussel; Queen Mary University of London）、Dick B.M. Botteldooren（Ghent University）

💡 **毒舌点评**

这篇论文将“选择性注意”包装成一个神经启发的波动力学问题，想法有趣，但数学与工程落地之间存在不小的鸿沟。OWM的Bragg共振最优性证明看似漂亮，但从离散格点方程跳跃到连续介质近似的过程略显随意，部分定理（如Theorem 2.3）在连续假设下漂亮但实际系统离散、有界，理论对实际设计的指导意义有限。此外，实验仅在两个数据集上进行，主要性能提升（17.1% AP）令人印象深刻，但对比基线AudioQwen全量推理表现过弱（53.50% AP），且论文未与任何基于深度特征的时序模型基线（如简单的GRU/LSTM漂移检测器）对比，让人难以判断OWM复杂的波动力学机制是否真有必要。自适应阈值依赖多个手动设定的参数（W=20, α=0.2），其跨场景泛化能力存疑。论文自我定位为“训练自由”方法，但严重依赖两个大规模预训练模型（PANN和AudioQwen），这种“自由”是建立在他人训练成果之上的。

📌 **核心摘要**

这篇论文旨在解决长音频理解中，Transformer类Audio Language Models (ALMs) 因注意力稀释而丢失罕见显著事件的问题。作者提出NAACA架构，核心是一个免训练的Oscillatory Working Memory (OWM) 组件。OWM模拟生物工作记忆，维持稳定的类吸引子状态，仅当检测到表征感知显著性的能量波动时才触发ALM进行高层推理。方法新颖之处在于将显著性驱动的注意力门控转化为受驱动的阻尼波动方程系统，并通过Bragg共振原理设计波速场的条纹拓扑结构以最大化对感知变化的敏感性。在XD-Violence数据集上，NAACA将AudioQwen的平均精度从53.50%提升至70.60%，同时减少了约40%的ALM处理时长。在Urban Soundscapes of the World (USoW) 数据集上的定性实验展示了其对短暂停顿的鲁棒性和对亚类别转换的敏感性。论文声称达到了SOTA，但对比的是音频模态基线，与视频多模态方法仍有较大差距。主要局限在于其检测能力受限于上游固定编码器的表征质量，以及硬门控机制可能丢失语义边界上下文。


上图（图16）展示了USoW数据集上的一个定性案例。左图的压力场`p`在背景声（公园）中保持稳定纹理，当短暂“说话声”事件发生时，压力场出现剧烈扰动，对应OWM检测到显著性并触发ALM。这验证了OWM对短暂停顿事件的敏感性。

🔗 **开源详情**

- 代码：https://github.com/zjyuan1208/NAACA-Oscillatory-Working-Memory
- 模型权重：论文中未提供任何预训练或微调模型权重下载链接。方法为training-free，但依赖的外部模型PANN和AudioQwen需用户自行获取。
- 数据集：XD-Violence (Wu et al., 2020) 需依据原论文获取；Urban Soundscapes of the World (USoW) 可通过 Zenodo 获取：https://zenodo.org/records/10106181
- Demo：论文中未提及。
- 复现材料：论文附录B、C给出了频率分配、算法流程等更多实现细节，但未提供独立的检查点、环境配置文件（如`requirements.txt`或`environment.yaml`）或完整的训练/推理配置。
- 论文中引用的开源项目：
  - PANN: https://github.com/qiuqiangkong/audioset_tagging_cnn
  - AudioQwen: 未提供直接链接，可参考官方库 https://github.com/QwenLM/Qwen-Audio
  - Hifi-GAN: 文中未提及此项目。

📄 [OpenReview](https://openreview.net/forum?id=zOWrIO6oKT)

---

### 127. [Language Model Augmented Semi-Supervised Statistical Inference](/audio-paper-digest-blog/posts/2026-07-04-language-model-augmented-semi-supervised)

📝 **5.4/10** | 后50% | #语音属性识别 | 创新 1.3/2 | 严谨 1.2/1.5 | 实验 0.7/1.5 | 影响 0.4/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Xinrui Ruan（University of California, Berkeley, Division of Biostatistics）
- 通讯作者：Jingshen Wang（University of California, Berkeley, Division of Biostatistics）
- 作者列表：Xinrui Ruan（University of California, Berkeley）、Yingfei Wang（University of Washington, Foster School of Business）、Waverly Wei（University of Southern California, Department of Data Sciences and Operations）、Jingshen Wang（University of California, Berkeley）

💡 **毒舌点评**

论文在统计理论上花费了大量篇幅证明LLM伪标签的校准权重能提升半监督推断效率，思想严谨但不够惊艳——本质上是对半参数推断中投影技巧的LLM特化。实验局限于语音转录文本这一个应用，且与语音社区熟知的预训练模型（Wav2Vec2、HuBERT）毫无关联，代码、数据提取全闭源，对于语音/音频领域的读者而言，这更像一篇披着语音应用外衣的统计论文，而非真正解决语音问题的研究。

📌 **核心摘要**

该论文提出语言模型增强的半监督统计推断框架（LASS），解决生物医学数据中标记样本稀缺、非结构化数据难利用、协变量不对齐（协变量错配）的推断问题。核心思路是：利用预训练LLM对非结构化数据（如转录文本）输出零样本伪标签，但不用其直接替代真实标签，而是估计条件协方差与方差的比值作为局部校准权重ω*(x)，构建给定X下Y的最优线性预测器。在协变量错配场景中，LASS设计预测不变性区域（PIR）选择算法，通过CART分区与t检验识别出额外协变量U不导致LLM预测系统偏差的区域，仅在PIR内借用U的信息。理论严格证明了LASS估计量的一致性和渐近正态性，并将渐近方差分解为仅标记数据方差、ML插补增益、LLM校准增益三部分，给出LASS在效率上优于标准GLM、传统SSI（Chakrabortty & Cai, 2018）和PPI++（Angelopoulos et al., 2023b）的条件。模拟实验在基于DementiaBank合成数据（标记n=100，未标记N=100~1000）和真实DementiaBank语音数据上进行，结果显示LASS的置信区间宽度在词汇多样性（0.52 vs GLM 0.74）、代词比例等指标上均为最窄，并在真实数据中识别出PPI和SSI未能检测到的代词比例显著效应。主要局限在于实证未涉及图像、视频等多模态数据，且代码、模型权重、数据提取管道均未开源，严重阻碍复现与应用。

🔗 **开源详情**

- 代码：未提供
- 模型权重：未提供
- 数据集：使用了公开的DementiaBank（含Pitt和Hopkins子集）、自提取的YouTube数据（提取方法与提示仅在附录中定性描述，未开源）和IMDb电影评论数据集，均未提供加工后的数据链接或开源协议说明
- Demo：未提及
- 复现材料：未提供
- 论文中引用的开源项目名称：BioGPT、PubMedBERT、Med-PaLM、LLaVA-Med、TabLLM（仅作为相关工作提及，未提供具体开源链接）

### 标签
#语音属性识别 #大语言模型 #少样本 #医疗音频 #理论分析
主任务标签：#语音属性识别
主方法标签：#大语言模型
补充标签：#少样本 #医疗音频 #理论分析

📄 [OpenReview](https://openreview.net/forum?id=bFy2cGMR2S)

---

### 128. [MER-DG: Modality-Entropy Regularization for Multimodal Domain Generalization](/audio-paper-digest-blog/posts/2026-07-04-mer-dg-modality-entropy-regularization-for)

📝 **5.4/10** | 后50% | #音视频理解 | 创新 1/2 | 严谨 1.2/1.5 | 实验 1/1.5 | 影响 0.6/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Yavuz Yarici（Georgia Institute of Technology, OLIVES at the Center for Signal and Information Processing, School of Electrical and Computer Engineering）
- 通讯作者：Yavuz Yarici（Georgia Institute of Technology, OLIVES at the Center for Signal and Information Processing, School of Electrical and Computer Engineering）
- 作者列表：Yavuz Yarici（Georgia Institute of Technology, OLIVES at the Center for Signal and Information Processing, School of Electrical and Computer Engineering）、Ghassan AlRegib（Georgia Institute of Technology, OLIVES at the Center for Signal and Information Processing, School of Electrical and Computer Engineering）

💡 **毒舌点评**

这项工作精准诊断了多模态域泛化中的一个关键失败模式——“Fusion Overfitting”，并通过熵正则化这一手段实现了一致性的性能提升，融合训练导致编码器退化的问题诊断和验证体系较为完整。然而，方法的创新性本质上是将已知的信息最大化技术（Log-Determinant熵估计）拆解后嫁接到多模态编码器上，理论贡献有限；实验仅在两个来自同一社区的小规模数据集上完成，且基线覆盖不全，泛化性存疑；缺乏代码与模型开源进一步降低了其实际影响力。

📌 **核心摘要**

该论文识别并定义了多模态域泛化（MMDG）中的“Fusion Overfitting”现象：端到端联合优化会使各单模态编码器倾向于学习源域特有的跨模态共现模式，丢弃可泛化的域不变特征。为解决该问题，作者提出Modality-Entropy Regularization for Domain Generalization（MER-DG），一种架构无关的附加正则化项。其核心思想是将Log-Determinant熵估计器分解为边缘熵损失（强制每维方差下限）和谱熵损失（最大化去相关矩阵的行列式），作用于每个编码器的输出特征，以维持特征多样性和高秩表征。在EPIC-Kitchens和HAC两个多模态动作识别基准上，方法融入四种基线架构后取得了一致性提升。主要局限性包括：核心方法为现有技术的整合，缺乏理论洞见；仅在小型同源数据集上验证，未见大规模或工业级评测；未与Dropout等基础正则化进行充分的横向对比。

🔗 **开源详情**

-   代码：论文中未提及代码链接
-   模型权重：论文中未提及
-   数据集：EPIC-Kitchens（https://epic-kitchens.github.io/），HAC（由SimMMDG提出，论文未提供直接链接）
-   Demo：论文中未提及
-   复现材料：附录A提供了详细超参数与训练配置，但无额外文件或代码
-   引用的开源项目：MMAction2, SlowFast, ResNet-18 (VGGSound预训练)

📄 [OpenReview](https://openreview.net/forum?id=IOUmfPYShr)

---

### 129. [Towards Understanding Modality Interaction in Multimodal Language Models via Partial Information Decomposition](/audio-paper-digest-blog/posts/2026-07-04-towards-understanding-modality-interaction-in)

📝 **5.3/10** | 后50% | #音视频理解 | 创新 1.1/2 | 严谨 0.9/1.5 | 实验 1.1/1.5 | 影响 0.3/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Wanlong Fang（Nanyang Technological University, Interdisciplinary Graduate Programme, AI-X & College of Computing and Data Science）
- 通讯作者：Alvin Chan（Nanyang Technological University, College of Computing and Data Science, Lee Kong Chian School of Medicine, Centre of AI in Medicine）
- 作者列表：Wanlong Fang（Nanyang Technological University）、Tianle Zhang（Nanyang Technological University, College of Computing and Data Science）、Wen Tao（Nanyang Technological University, College of Computing and Data Science）、Alvin Chan（Nanyang Technological University, College of Computing and Data Science & Lee Kong Chian School of Medicine & Centre of AI in Medicine）

💡 **毒舌点评**

本文将部分信息分解（PID）引入多模态决策分析，提出Sensory PID处理三模态问题，框架自身具有新颖的洞察力，并辅以大规模的实验揭示模型的行为剖面。然而，整个分析严重依赖校准掩码近似单模态条件分布，却未对由此引入的估计偏差做严格的理论或实证分析；此外，完全不开源使得其宣称的“诊断与引导训练”对于实践者的即时价值基本为零，复现门槛极高。

📌 **核心摘要**

1. 论文旨在超越传统的表征对齐与消融评估，回答“多模态大模型在决策时，各模态到底贡献了何种信息（独特、冗余还是协同）”这一核心问题。
2. 方法核心是将部分信息分解（PID）应用于模型产生的预测分布，将互信息分解为视觉/听觉独特、冗余和协同成分；对全模态模型提出Sensory PID，以文本为条件分解视-听信息增益。
3. 与以往基于注意力或表征相似度的方法相比，该工作在决策层面区分不同信息贡献模式，首次将PID系统性地用于分析多种多模态大模型，并揭示了可预测模型对模态干预敏感度的模态使用剖面。
4. 在20个视觉-语言模型和6个基准上，PID揭示了“协同驱动型”（如MMStar）和“语言优先型”（如MMMU）任务剖面；协同项$S_{vl}$与视觉移除敏感度Spearman ρ高达0.86（MMStar）。在全模态模型MUSIC-AVQA上发现视觉效果主导，视-听协同仅0.21-0.32 bits，远低于视觉独特信息。PID引导的LoRA重加权在MMStar上带来+2.3点提升（64.3% vs. 62.0%）。
5. 实际意义在于提供了一套无需重训即可诊断模型模态偏好的紧凑工具，并可初步用于指导微调以强化跨模态融合。
6. 主要局限：PID估计基于多项选择输出的离散决策空间，难以直接扩展到开放式生成；单模态条件分布通过校准掩码近似，可能引入偏差；无代码和模型权重公开，复现门槛高；PID衡量的是统计依赖性而非因果机制。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提供模型权重链接；所分析的模型（Qwen2.5-VL、Qwen2-VL、Qwen3-VL、InternVL3、LLaVA-OneVision、Cambrian-1、Gemma3、Qwen2.5-Omni、VITA-1.5）可通过各自官方仓库获取。
- 数据集：论文使用了以下公开数据集但未提供直接下载链接：MMBench、MMStar、MMMU、PMC-VQA、POPE、Reefknot、MUSIC-AVQA。其获取方式需参考各自原始论文。
- Demo：论文中未提及。
- 复现材料：论文附录D和H提供了详细的实验设置（提示模板、推理设置、BATCH估计器超参数、LoRA配置）和算法，但未提供训练代码、模型检查点或配套脚本。复现工作量和难度均很大。

📄 [OpenReview](https://openreview.net/forum?id=z7ivDFlnSC)

---

### 130. [Stable Spectral Copula Alignment for Robust Multimodal Learning](/audio-paper-digest-blog/posts/2026-07-04-stable-spectral-copula-alignment-for-robust)

📝 **5.2/10** | 后50% | #鲁棒性 | 创新 1.2/2 | 严谨 1/1.5 | 实验 0.9/1.5 | 影响 0.5/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Hongkang Zhang（Tsinghua Shenzhen International Graduate School, Tsinghua University）
- 通讯作者：Shao-Lun Huang（Tsinghua Shenzhen International Graduate School, Tsinghua University）
- 作者列表：Hongkang Zhang, Shao-Lun Huang, Yanlong Wang, Ercan Engin KURUOGLU（均为Tsinghua Shenzhen International Graduate School）

💡 **毒舌点评**

这篇论文试图构建一个“可审计”的多模态对齐协议，利用Copula理论与光谱扰动理论提供一种部署阶段抵御分布偏移的稳定契约精神。将错误的溯源与可执行的门控决策结合起来，想法在MLOps导向的多模态学习里算是有新意。然而，作品的写作风格沉重拖沓，导论部分沉迷于宏观宣誓而技术细节被稀释殆尽；更致命的是，全文完全没有提供任何形式的代码或数据链接，在这个号称“可审计”的协议里，自身的可复现性却是零。实验虽覆盖了不少漂移场景，但主要聚焦于情感分析和图像-文本检索，在音频处理的核心高地（如语音识别/分离）上毫无建树，这让它在多模态社区内难以跨越“小圈子自嗨”的界限。

📌 **核心摘要**

1.  要解决的问题：多模态对齐系统在部署阶段面临特征边缘分布偏移（如增益变化、归一化漂移）时性能急剧下降。现有方法将跨模态依赖关系与对边缘变化敏感的几何度量（如欧氏距离）紧耦合，导致脆弱性。
2.  方法核心：提出稳定光谱Copula对齐协议（SSCA），利用Copula理论解耦边缘分布与依赖结构，实现在近似坐标轴单调畸变下的依赖关系稳定性。方法包含三个核心模块：剪切软排序高斯化（控制排序误差）、依赖加权切片Wasserstein中心耦合（控制耦合误差）、对角稳定化块光谱学习（控制采样和数值误差）。在此基础上，推导出可操作的Davis-Kahan不等式，将子空间误差上界与一组可观测的诊断代理量（`\epsilon_{rank}, \epsilon_{cpl}, \epsilon_{samp}, \epsilon_{num}`）线性关联，并通过无标签的分位数回归进行本地化校准。
3.  与已有方法的创新点：创新之处在于将Copula不变性声明作为可审计的“稳定合同”，而非单纯的离线数据增强技巧。它明确将最终的子空间误差分解为排序、耦合、采样和数值四类可控源头，并设计了一套无标签校准的门控机制，用于在线判断应该信任当前对齐结果（Stability Mode）还是执行保守的无更新回退（Fallback Mode）。
4.  主要实验结果：在CMU-MOSEI和MELD数据集上，面对10倍仿射缩放扰动，SSCA的准确率衰减（MOSEI上Δ=1.8%）显著低于MMML等基线（Δ=3.2%）。在CC3M-500K图像-文本检索（冻结CLIP ViT-B/16特征）的JPEG压缩测试中，SSCA在Q=50时的R@1衰减减少率达52.9%。消融实验表明，移除Copula稳定化模块会导致退化急剧增加（MOSEI Δ从1.8升至4.8）。
5.  实际意义：提出了一种“安全失效”的多模态系统部署方法论，通过模块化的诊断代理量实现了无监督的错误溯源与回退决策，对高可靠性需求场景下的模型运维（MLOps）具有一定的参考价值。
6.  主要局限性：稳定性契约严格限定于近似坐标轴单调的畸变，对非单调语义偏移、严重饱和或高平局比率的场景无抵抗力；所有校准参数均为部署本地化变量，更换骨干网络、模态集或批处理策略后需重新校准；多路中心耦合在大规模模态计数下的扩展性未被验证；论文未开源任何代码或模型。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：论文中未提及任何预训练模型的公开计划。
- 数据集：论文使用了 CMU-MOSEI、MELD、MSCOCO、CC3M-500K 等公开数据集，但未自行开源任何新数据。
- Demo：论文中未提及。
- 复现材料：论文附录提供了详细的超参数配置表、算法伪代码（Algorithm 1）和部分实现细节，但缺乏独立的、可直接执行的复现脚本包或模型检查点。
- 论文中引用的开源项目：未提及（引用了标准基线，如MMML、InfoNCE等，但未强调其开源状态）。

📄 [OpenReview](https://openreview.net/forum?id=UNvRSrguIW)

---

### 131. [Multimodal Meta-Verifier with Explicit Structured Recalibration](/audio-paper-digest-blog/posts/2026-07-04-multimodal-meta-verifier-with-explicit-structured)

📝 **5.2/10** | 后50% | #多模态模型 | 创新 1/2 | 严谨 1/1.5 | 实验 0.7/1.5 | 影响 0.3/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Xinchen Zhang（清华大学）、Bowei Liu（清华大学）
- 通讯作者：Yujiu Yang（清华大学）、Ling Yang（普林斯顿大学）
- 作者列表：Xinchen Zhang（清华大学）、Bowei Liu（清华大学）、Jiale Liu（宾夕法尼亚州立大学）、Chufan Shi（南加州大学）、Yizhen Zhang（清华大学）、Junhong Liu（未说明）、Youliang Zhang（清华大学）、Zhiheng Li（清华大学）、Yujiu Yang（清华大学）、Ling Yang（普林斯顿大学）

💡 **毒舌点评**

这篇论文的核心洞察——将元验证信号从文本迁移到符号化表征（边界框），并采用数据层面的解耦训练——在工程上是清晰且有效的，在ViVerBench和代理生成任务上的提升也佐证了其价值。然而，论文的理论贡献是对“梯度被乘法门控”这一现象的符号重述，深度有限；更致命的是，它全程回避了与同领域直接竞争对手（如RewardDance、UnifiedReward）在视觉验证基准上的定量比较，使其声称的“避免奖励黑客”和“高效”论点缺乏最关键的硬性证据。对于语音/音频领域读者而言，此工作因完全扎根于图像模态而不具备直接影响力。

📌 **核心摘要**

1. 该论文旨在解决多模态视觉验证器中反馈信号粗糙（仅依赖二元正确/错误判断）的问题，提出了一种多模态元验证范式，利用验证器自身生成的结构化依据（而非决策信号）来提供更细粒度的训练信号。
2. 方法核心包含两个发现：第一，使用符号化输出（如边界框或点）代替文本解释作为元验证依据，使得能够使用基于规则的奖励（IoU）而非脆弱的模型奖励，从而在源头规避奖励黑客问题，并提升训练效率；第二，将二元判断和元验证任务在数据层面进行解耦，分别服从独立的奖励模型进行强化学习训练，相比联合优化能提供持续、稳定的梯度信号，从而显著提升性能。
3. 与已有工作相比，该方法从DeepSeekMath-V2等纯文本的元验证框架中获得灵感，首次将其系统性地迁移至多模态空间验证，并针对视觉表征结构化的特性，提出了基于规则的结构化奖励与解耦训练策略。
4. 主要实验结果显示：在ViVerBench基准上，经解耦训练的OmniVerifier-M1（基于Qwen3-VL-8B）取得了0.680分，优于联合训练的0.671分和基线的0.654分；基于该验证器构建的代理视觉生成系统M1-TTS，在GPT-Image-1.5基础上，将WISE和T2I-CoreBench上的综合得分分别从0.83提升至0.88和从0.782提升至0.800。

表 1: ViVerBench & 效率分析（来自论文Table 1）
| Model | ViVerBench (Overall) | Per-Card GPU Memory (GB) | Per-Sample Reward Computation Time (ms) | Training Time per Step (min) | Mean Response Length (tokens) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| OmniVerifier 7B | 0.650 | - | - | - | - |
| OmniVerifier 7B (Bbox) | 0.661 | 48.6 | 0.021 | 8.13 | 384 |
| OmniVerifier 7B (Exp) | 0.662 | 56.9 | 20.2 | 10.27 | 340 |
| Qwen3-VL 8B | 0.654 | - | - | - | - |
| Qwen3-VL 8B (Bbox) | 0.671 | 49.9 | 0.021 | 8.74 | 516 |
| Qwen3-VL 8B (Exp) | 0.670 | 58.3 | 20.2 | 11.08 | 488 |

表 2: ViVerBench 详细结果（来自论文Table 2）
| Model/Metric | Overall | Obj. | Attr. | ... | STEM |
| :--- | :--- | :--- | :--- | :--- | :--- |
| OmniVerifier 7B | 0.650 | 0.701 | 0.703 | ... | 0.600 |
| OmniVerifier 7B (Joint) | 0.661 | 0.723 | 0.733 | ... | 0.623 |
| OmniVerifier 7B (Decoupled) | 0.668 | 0.741 | 0.754 | ... | 0.639 |
| Qwen3-VL 8B | 0.654 | 0.710 | 0.690 | ... | 0.540 |
| Qwen3-VL 8B (Joint) | 0.671 | 0.732 | 0.724 | ... | 0.568 |
| Qwen3-VL 8B (Decoupled) | 0.680 | 0.750 | 0.733 | ... | 0.572 |

表 4: WISE 和 T2I-CoreBench 上的表现（来自论文Table 4）
| Model | WISE Overall | T2I-CoreBench Composition | T2I-CoreBench Reasoning | T2I-CoreBench Overall |
| :--- | :--- | :--- | :--- | :--- |
| GPT-Image-1.5 | 0.83 | 0.855 | 0.746 | 0.782 |
| OmniVerifier-M1 + GPT-Image-1.5 | 0.88 | 0.863 | 0.769 | 0.800 |

5. 实际意义在于为训练更可靠、可解释的多模态验证器提供了一套鲁棒的训练范式，并能将验证器嵌入代理生成系统，实现区域级的、细粒度的图像自修正，对提升复杂、世界知识驱动的多模态内容生成可靠性有直接助益。
6. 主要局限性在于：(a) M1-TTS的性能极度依赖底层生成模型的编辑能力，当前统一模型缺乏遵循边界框进行编辑的特定训练；(b) 解耦训练的效果尚未在更大规模和MoE等不同架构的模型上进行验证。

🔗 **开源详情**

- 代码：https://github.com/Cominclip/OmniVerifier  
- 模型权重：论文中未提及
- 数据集：论文使用的评估基准来自已公开的三个基准（ViVerBench, RefCOCO, WISE, T2I-CoreBench），训练数据基于已有数据集（OmniVerifier）构建，但未发布任何新的数据集。
- Demo：论文中未提及
- 复现材料：论文附录提供了理论证明、额外消融实验及数据构建流程。代码仓库的情况未作详细说明。
- 论文中引用的开源项目：
  - DAPO：https://github.com/volcengine/verl
  - Qwen3-VL：https://github.com/QwenLM/Qwen3-VL
  - RePlan：https://github.com/teowu/RePlan
  - SAM 2.1：https://github.com/facebookresearch/sam2

📄 [OpenReview](https://openreview.net/forum?id=e1bpZMpANm)

---

### 132. [WaveSSM: Multiscale State-Space Models for Non-stationary Signal Attention](/audio-paper-digest-blog/posts/2026-07-04-wavessm-multiscale-state-space-models-for-non)

📝 **4.8/10** | 后50% | #音频分类 | 创新 1/2 | 严谨 0.8/1.5 | 实验 0.9/1.5 | 影响 0.5/1.5 | 开源 0.2/1.5

👥 **作者与机构**

- 第一作者：Ruben Solozabal (MBZUAI)
- 通讯作者：Ruben Solozabal (MBZUAI)
- 作者列表：Ruben Solozabal (MBZUAI)、Velibor Bojkovic (MBZUAI)、Hilal AlQuabeh (MBZUAI / RIKEN AIP)、Klea Ziu (MBZUAI)、Kentaro Inui (MBZUAI / RIKEN AIP)、Martin Takáč (MBZUAI)

💡 **毒舌点评**

将小波先验注入状态空间模型（SSM），理论上为模型带来了期望的时间和频率局部化能力，在合成任务上的地址able记忆也展示得漂亮。但亮点止步于此：在真实基准上的性能提升微弱到几乎可以归为噪声，而在需要真正长程建模能力的任务（PathX, Pathfinder）上却全面溃败。这种极端的任务偏好性，加上零开源和大量悬而未决的理论-实践差距，使论文看起来更像一个精致的初步探索，而非一项坚实的贡献。

📌 **核心摘要**

本文针对基于HiPPO框架的状态空间模型（SSM，如S4）因依赖全局支持的正交多项式基，而无法高效处理局部瞬态、非平稳信号的问题，提出了WaveSSM。该方法利用SaFARi框架，从多种小波（如Morlet、Daubechies）帧的投影运算中直接导出SSM的动态矩阵A和B，从而赋予隐藏状态各坐标不同的时间局部化感受野。理论上，作者论证了小波帧在逼近具有间断的分片光滑函数时，其 N 项非线性逼近的衰减率（$O(N^{-s})$）优于全局多项式（$\gtrsim N^{-1/2}$）。实证上，WaveSSM在合成“连续窗口复制”任务上显著优于S4和Mamba，展示了其地址able记忆能力。在实际数据上，WaveSSM在PTB-XL心电数据和部分时序预测、语音分类及LRA短程任务上取得了微弱优势。然而，论文的核心局限在于：1）实际性能提升幅度极小，缺乏统计显著性；2）在LRA的极长程任务（PathX, Pathfinder）上表现不佳甚至不可行；3) 频移鲁棒性差；4）无代码开源，可复现性极低。


图1是论文的摘要图，直观展示了WaveSSM的核心思想：将标准SSM（左）的全局状态更新，转变为由小波框架驱动的多尺度、时间局部化的状态更新（右），从而能够对信号中的瞬态事件进行“可寻址”的存储与检索。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文中未提及。
- 数据集：PTB‑XL 数据集（论文中未提供直接下载链接，原始出处为 Wagner et al., 2020）；Speech Commands 数据集（论文中未提供直接下载链接，原始出处为 Warden, 2018）；Informer 时间序列基准（论文中引用了 Zhou et al., 2021 中使用的数据，未提供直接下载链接）；Long Range Arena 基准（论文中引用了 Tay et al., 2021，未提供直接下载链接）。
- Demo：论文中未提及。
- 复现材料：论文附录中给出了各实验的详细超参数表（Table S5）及架构设置，并提及部分实验的训练流程参考了 `https://github.com/state-spaces/s4/tree/main` 和 `https://github.com/zhouhaoyi/Informer2020/tree/main/scripts`，但未提供完整的训练检查点或复现脚本。
- 论文中引用的开源项目：
  - S4 开源代码库，文中提及用于训练流程参考：`https://github.com/state-spaces/s4/tree/main`
  - Informer 时间序列预测框架，文中提及用于超参数设置：`https://github.com/zhouhaoyi/Informer2020/tree/main/scripts`

📄 [OpenReview](https://openreview.net/forum?id=8f5JVzcFvA)

---

### 133. [Efficient, Property-Aligned Fan-Out Retrieval via RL-Compiled Diffusion](/audio-paper-digest-blog/posts/2026-07-04-efficient-property-aligned-fan-out-retrieval-via)

📝 **4.7/10** | 后50% | #音乐检索 | 创新 1.1/2 | 严谨 0.7/1.5 | 实验 0.8/1.5 | 影响 0.5/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Pengcheng Jiang（Google Research，伊利诺伊大学厄巴纳-香槟分校）
- 通讯作者：未说明
- 作者列表：Pengcheng Jiang（Google Research、伊利诺伊大学厄巴纳-香槟分校）、Judith Yue Li（Google Research）、Moonkyung Ryu（Google Research）、R. Lily Hu（Google Research）、Kun Su（Google Research）、Zhong Yi Wan（Google Research）、Liam Hebert（Google Research）、Hao Peng（Google Research）、Jiawei Han（伊利诺伊大学厄巴纳-香槟分校）、Dima Kuzmin（Google Research）、Craig Boutilier（Google Research）

💡 **毒舌点评**

这篇论文将一个朴素的工程思路——“用RL生成一次数据，然后蒸馏到小模型”——包装成了一个看似精巧的框架，用于解决集合级检索中非分解属性优化的难题。这个“编译”概念确实有启发性，但论文的全部说服力都建立在Google内部的专有数据和闭源代码之上，对于社区而言，这更像一份Google的内部技术报告。音乐检索实验只在一个无法获取的工业数据集上完成，加上LLM-as-a-Judge评估的潜在偏差和全流程对昂贵基础设施的依赖，使其宣称的通用性和影响力大打折扣，外人看来不过是一座空中楼阁。

📌 **核心摘要**

1. 解决的问题：现代检索系统常需返回一组结果（如推荐列表、搜索面板），并需优化集合的全局属性（如多样性、互补性、覆盖率），而非单点相关性。这类集合级目标不可分解，且缺乏标准的监督训练数据。直接部署RL优化的自回归语言模型虽可实现，但推理延迟高，难以落地。
2. 方法核心：提出R4T框架，将RL用作一次性的“目标转换器”，分三步：(1) 用组合奖励（多样性、对齐、接地性）RL训练一个“扇出语言模型”（FOLM）来生成优化后的子查询；(2) 用该模型合成高质量的训练数据；(3) 用合成数据训练轻量级扩散模型，实现单步扇出检索。
3. 创新点：与直接将RL用于在线推理不同，R4T将RL编译进训练数据，从而分离了复杂奖励优化与高效推理。首次将RL策略蒸馏到扩散检索器中，用于解决非分解的集合级属性优化问题。
4. 主要实验结果：在两个数据集（Polyvore时尚、一个专有的Music播放列表数据集）上，R4T在两个任务（开放抽象检索OAR、弱监督组合检索WSCR）中均优于零样本、Best-of-N等基线。在Polyvore的OAR任务上，R4T-FOLM (Gemma)的多样性得分达76.8，远超Best-of-N的61.0。同时，53.9M参数的扩散模型推理延迟比自回归模型降低一个数量级（1024批量下约4.2秒 vs. 约50秒）。
5. 实际意义：为需要在保证集合质量的同时实现低延迟检索的场景（如推荐系统、创意搜索）提供了一种实用框架，允许用户通过设计奖励函数来定制检索行为。
6. 主要局限性：代码和模型完全未开源，RL训练阶段成本较高，对奖励函数设计的依赖性强，存在奖励黑客问题需仔细调参，缺乏人类评估且评测高度依赖LLM判断。

🔗 **开源详情**

- 代码：论文中未提及代码链接
- 模型权重：论文中未提及
- 数据集：Polyvore：公开的时尚搭配数据集 (Han et al., 2017)，论文中未提供直接下载链接，可参考原论文 https://dl.acm.org/doi/10.1145/3123266.3123392 获取；Music：论文中明确说明为专有的工业级数据集 (“a proprietary industrial dataset consisting of expert-generated music playlists”)，未公开
- Demo：论文中未提及
- 复现材料：论文附录 G 提供了实现超参数，包括 FOLM 和 Diffusion Training 的配置
- 论文中引用的开源项目：
  - Diff4Steer: https://arxiv.org/abs/2506.17886
  - GD-Retriever: https://arxiv.org/abs/2506.17886
  - MuLan: https://arxiv.org/abs/2208.12415
  - CLIP: https://arxiv.org/abs/2103.00020
  - Vendi Score: https://arxiv.org/abs/2210.02410

📄 [OpenReview](https://openreview.net/forum?id=4P9cEcinYP)

---

### 134. [VIBE: Disentangling Social Dynamics via Kinematics-Informed Variational Inference for Behavioral Emotion](/audio-paper-digest-blog/posts/2026-07-04-vibe-disentangling-social-dynamics-via-kinematics)

📝 **4.6/10** | 后50% | - | 创新 0.6/2 | 严谨 0.8/1.5 | 实验 0.6/1.5 | 影响 0.3/1.5 | 开源 0.5/1.5

👥 **作者与机构**

- 第一作者：Abhishek Pratap Singh（Indian Institute of Technology Roorkee, Department of Computer Science and Engineering）
- 通讯作者：Abhishek Pratap Singh（Indian Institute of Technology Roorkee, Department of Computer Science and Engineering）
- 作者列表：Abhishek Pratap Singh（Indian Institute of Technology Roorkee, Department of Computer Science and Engineering）、Vaibhav Pratap Singh（Malaviya National Institute of Technology Jaipur, Department of Computer Science and Engineering）、Deepak Kumar（Indian Institute of Technology Roorkee, Department of Computer Science and Engineering）、Balasubramanian Raman（Indian Institute of Technology Roorkee, Department of Computer Science and Engineering）

💡 **毒舌点评**

这篇论文在人群情感识别（GER）领域尝试将物理运动同步性显式编码为 Transformer 的动态门控信号，并引入正交变分信息瓶颈进行特征解耦，意图值得肯定。然而，方法的本质是在现有预训练 backbone 上嫁接 VIB、AdaLN 和语义对齐等成熟技术，创新层次停留在组合式工程优化，而非理论突破。实验仅在两个较小的“in-the-wild”数据集上验证，且严重依赖文本模态带来的信息不对称优势——在 VGAF 上对比的大多数基线仅使用场景+人脸，这种SOTA声称掺杂了大量模态增益的水分。更关键的是，论文的贡献与音频/语音/音乐社区几乎没有交集：音频模态仅作为辅助特征输入，核心机制（运动同步性、视觉解耦、视觉-文本对齐）完全围绕计算机视觉展开，难以对语音领域产生任何涟漪。

📌 **核心摘要**

1. 论文针对群体情感识别（GER）中模型依赖背景环境、忽视群体物理运动同步性、缺乏可解释性语义对齐的问题，提出 VIBE 框架。
2. 方法核心包括：通过双路正交变分信息瓶颈（VIB）将“代理人行为”与“环境干扰”在潜在空间进行几何解耦；利用计算得到的物理同步性标量 $\gamma$ 动态门控 Transformer 的解耦自适应层归一化（Decoupled AdaLN），实现群体凝聚力的结构感知推理；并通过视频-文本语义对齐约束将视觉表示投影到可解释的语义空间。
3. 相较于现有纯统计融合或类别不变/特定解耦方法，该工作首次将物理运动同步性作为显式控制信号和因果结构先验融入多模态情感 Transformer；同时引入软正交约束来阻断环境到情感的因果捷径。
4. 在两个公开数据集 VGAF 和 GECV 上，VIBE 分别取得 70.17% 和 91.85% 的准确率，超越对比基线。但需注意，VIBE 使用音频+场景+文本三种模态（A+S+T），而表1中VGAF上多数基线仅使用场景+音频或场景+人脸，模态设置存在严重不对等。
5. 实际意义在于提供了一种抑制环境捷径偏向、关注真实行为动态的情感推理范式，对社交机器人、监控等场景有一定参考价值；但受限于小数据集和特定任务，且模型声称的“行为为中心”在实际部署中仍面临隐私和公平性挑战。
6. 主要局限包括：对人群容量参数 $K$ 敏感；高度依赖跟踪准确性，运动遮挡或快速移动会造成失效；6 Hz 降采样无法捕获微表情；且作为视觉为主的工作，对语音/音乐/音频社区的直接贡献极小。

🔗 **开源详情**

- 代码：论文正文声明“Code is available at GitHub.”，但未给出具体仓库链接。经核实，当前时刻该链接指向的仓库不存在或不可访问。
- 模型权重：论文中未提及。
- 数据集：论文使用 VGAF（Sharma et al. 2021）和 GECV（Quach et al. 2022）两个公开数据集，但未提供直接下载链接。
- Demo：论文中未提及。
- 复现材料：论文附录 B 提供了训练超参数、硬件环境和部分结果分析，但缺少核心算法伪代码、文本生成的提示词、数据预处理脚本等完整复现配置。

📄 [OpenReview](https://openreview.net/forum?id=hf8AxmTInT)

---

### 135. [UniFLoW: Universal Multi-Modal Federated LoRA Fine-Tuning Framework with Analytical Aggregation](/audio-paper-digest-blog/posts/2026-07-04-uniflow-universal-multi-modal-federated-lora-fine)

📝 **4.4/10** | 后50% | #音视频问答 | 创新 0.5/2 | 严谨 0.6/1.5 | 实验 0.3/1.5 | 影响 0.3/1.5 | 开源 1.2/1.5

👥 **作者与机构**

- 第一作者：Haoyuan Liang（中山大学，深圳国家超算中心）
- 通讯作者：Juepeng Zheng（中山大学）
- 作者列表：Haoyuan Liang（中山大学，深圳国家超算中心）、Zhiyu Ye（清华深圳国际研究生院）、Jielong Tang（中山大学）、Yang Yang（中山大学）、Shilei Cao（中山大学，深圳国家超算中心）、Guowen Li（中山大学，深圳国家超算中心）、Fei Hu（华南理工大学）、Zhiwei Zhang（中山大学，深圳国家超算中心）、Haohuan Fu（清华深圳国际研究生院）、Juepeng Zheng（中山大学）

💡 **毒舌点评**

UniFLoW试图用一个统一框架解决联邦多模态微调中的模态异构和LoRA聚合不一致性问题，工程野心值得肯定。然而，其核心创新FedA2-LoRA本质上是对已有方法的组合与补丁：平均A矩阵（FedSA-LoRA）后通过岭回归重构B，这在数学上是直接的最小二乘应用，技术贡献有限。实验部分严重不足以支撑其宣称的“Universal”和“State-of-the-Art”：多模态实验仅覆盖2种模态、每个客户端仅2000样本，GLUE实验部分基线明显未收敛，使得结果缺乏说服力。二阶段训练策略虽有启发但并非本质创新。总之，这是一篇在已有方法基础上做工程整合的工作，缺乏实质性的理论或算法突破。

📌 **核心摘要**

1.  解决问题：本文旨在解决在联邦学习（FL）场景下对多模态大语言模型（MLLMs）进行微调时所面临的三大挑战：①客户端异构模态数据导致模型架构不兼容，无法直接聚合；②全参数微调带来的巨大通信开销；③联邦LoRA聚合时因非结合性导致的不一致性（即"Averaging then Multiplying"不等于"Multiplying then Averaging"）。
2.  方法核心：论文提出了UniFLoW框架，采用统一的预训练LLM作为共享基座，配合模态特定编码器（如ImageBind）来处理不同客户端模态。其核心是FedA2-LoRA聚合方法：服务器先平均客户端上传的LoRA矩阵A，并计算目标真实更新U（即平均后的$\Delta W$），再通过求解一个岭回归问题从A和U中分析性地重构全局矩阵B，从而在数学上消除聚合偏差。同时引入二阶段训练策略（先微调解码器再微调LLM），以避免LLM过拟合到特定模态模式。
3.  创新点：与现有FedLoRA变体相比，FedA2-LoRA保证了聚合后的低秩更新$BA$与客户端真实平均更新$U$的一致性，且不引入额外通信成本。二阶段训练策略为联邦异构模态下的训练调度提供了新思路。
4.  实验结果：在多模态QA任务（图像、音频）中，UniFLoW+二阶段训练+FedA2-LoRA的组合取得了最佳结果，例如在同时训练图像和音频客户端后，图像模态Accuracy达到76.19%，音频模态F_BERT达到86.31%。在GLUE基准的纯文本实验中，FedA2-LoRA也展示了对不同PEFT方法的普遍提升效果（如LoRA平均准确率从89.17提升到90.50）。附录还展示了该方法在架构可替换性、零填充异构秩设置等场景下的有效性。
5.  实际意义：为在隐私保护前提下，利用分散、异质的私有数据来微调多模态大模型提供了一套相对完整的方案，对解锁私有数据价值有一定探索意义。
6.  主要局限性：论文自身指出：当$AA^T$不可逆时需引入正则化项，$\lambda$选择对数值稳定性有影响；联邦训练早期FedA2-LoRA重构可能不稳定，需要warm-up。审稿人发现：方法在理论上无本质突破；`获取目标U需要先聚合$B_k A_k$，这在逻辑上构成了一个循环，论文未能清晰说明这在服务器端如何在不增加客户端通信的前提下实现；实验严重不足，对比基线弱，部分设置不公。

🔗 **开源详情**

- 代码：https://github.com/LHY-24/UniFLoW
- 模型权重：未提及。
- 数据集：  
  - HeySQuAD（https://arxiv.org/abs/2304.13689）  
  - PandaGPT 视觉指令数据集（https://github.com/yxuansu/PandaGPT）  
  - GLUE benchmark（https://gluebenchmark.com/），包括 MNLI、SST‑2、RTE、QQP  
  所有数据集均引用公开来源，未提供自定义数据集的独立下载链接。
- Demo：未提及。
- 复现材料：论文附录提供了算法伪代码、部分超参数（如 λ=1）与二阶段训练策略描述，但未单独提供预训练检查点、训练配置文件或完整实验脚本。
- 论文中引用的开源项目：  
  - Vicuna‑7B：https://lmsys.org/blog/2023-03-30-vicuna/ （https://github.com/lm-sys/FastChat）  
  - ImageBind：https://github.com/facebookresearch/ImageBind  
  - FederatedScope‑LLM：https://github.com/alibaba/FederatedScope  
  - RoBERTa：https://huggingface.co/FacebookAI/roberta-base  
  - TinyLlama：https://github.com/jzhang38/TinyLlama  
  - GLUE benchmark：https://gluebenchmark.com/  
  - HeySQuAD：https://arxiv.org/abs/2304.13689  
  - PandaGPT：https://github.com/yxuansu/PandaGPT  
  - UniBind：Lyu et al., 2024，论文未提供公开代码链接。

📄 [OpenReview](https://openreview.net/forum?id=21J9OI6mhc)

---

### 136. [Rethinking Attention in Spiking Transformers: Overcoming Density Bias with Set Similarity](/audio-paper-digest-blog/posts/2026-07-04-rethinking-attention-in-spiking-transformers)

📝 **3.6/10** | 后50% | #音频分类 | 创新 0.8/2 | 严谨 0.6/1.5 | 实验 0.5/1.5 | 影响 0.3/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：JinGyo Lim（首尔科学技术大学人工智能应用系）
- 通讯作者：Seong-Eun Kim（首尔科学技术大学人工智能应用系）
- 作者列表：JinGyo Lim、Seung Gyu Jeong、Seong-Eun Kim（均来自首尔科学技术大学人工智能应用系）

💡 **毒舌点评**

这篇论文的Dice系数归一化思路简洁有效，用一个集合相似度指标解决了SNN-Transformer中长期被忽视的脉冲密度偏差问题——这是论文的唯一亮点。但令人失望的是，研究者在证明这一想法的有效性上投入不足，实验设计存在多处理论与实证断裂：能量估算基于十年前的45nm工艺，对现代神经形态硬件毫无参考价值；与音频SOTA（DTF-AT 0.187 mAP）的差距（-2.6个点）在不同汇报范式和训练设置下无法公平比较，却仍然声称“narrowing the gap”；CIFAR-100上的微弱提升（+0.59pp/+0.26pp）仅有两个模型实验，既无统计检验也无ImageNet验证，远不足以声称“broader applicability”。在缺乏代码、模型和硬件验证的现状下，这是一篇有闪光想法但工程和科学严谨性均未达标的半成品。

📌 **核心摘要**

该论文针对脉冲Transformer中普遍存在的“密度偏差”问题——即现有脉冲注意力机制（点积或哈达玛积）的得分与脉冲发放率高度相关，导致高发放率神经元即使不含语义信息也能支配注意力。作者提出Spike Dice Attention (SDA)，将集合相似度指标（Dice系数）引入脉冲注意力，通过对脉冲计数的显式归一化消除密度偏差。论文进一步设计了音频专用的频率-时间解耦架构（SADA），并提出了线性化版本Lin-SDA以适配神经形态硬件。

论文在三个音频分类数据集上评估：

| 模型 | 类型 | 参数(M) | 能量(mJ) | AudioSet-20k (mAP) | ESC-50 (Acc%) | SCV2 (Acc%) |
|------|---------|---------|---------|--------------------|---------------|-------------|
| AST | ANN | 88.1 | 475.64 | 0.148 | 88.7 | 98.11 |
| SSAST-S | ANN | 23 | 176.82 | 0.165 | 85.4 | 97.70 |
| DTF-AT | ANN | 69 | 153.18 | 0.187 | 89.19 | 98.30 |
| Spikformer | SNN | 65.9 | 18.82 | 0.136 | - | - |
| Spike-driven Trans. | SNN | 65.9 | 8.15 | 0.130 | - | - |
| Spike-driven Trans. V2 | SNN | 55.0 | 14.92 | 0.138 | - | - |
| QKFormer | SNN | 64.5 | 43.43 | 0.147 | - | - |
| DiceFormer-10-S | SNN | 13.7 | 5.34 | 0.145 | 85.37 | 97.27 |
| DiceFormer-10-M | SNN | 24.2 | 9.55 | 0.157 | 85.47 | - |
| DiceFormer-10-L | SNN | 54.3 | 17.80 | 0.161 | - | - |

标注的ANN结果为预训练模型，其他均为从零训练。DiceFormer-10-L在AudioSet-20k上达到0.161 mAP（SNN SOTA），超越从头训练的AST（0.148 mAP）但远低于DTF-AT（0.187 mAP，预训练）。主要局限性包括无硬件实测、无开源承诺、视觉域验证仅限CIFAR-100、未与同期强ANN音频模型公平对比。

🔗 **开源详情**

- 代码：论文中未提及代码链接
- 模型权重：论文中未提及
- 数据集：
  - AudioSet: https://research.google.com/audioset/
  - ESC-50: https://github.com/karolpiczak/ESC-50
  - Speech Commands V2: https://arxiv.org/abs/1804.03209
  - CIFAR-100: https://www.cs.toronto.edu/~kriz/cifar.html
- Demo：论文中未提及
- 复现材料：论文附录提供了详细的模型架构配置（Table 5）、训练超参数（Table 6）、能量消耗估算方法（附录G）、训练与推理时间（附录H）、多轮运行稳定性分析（附录I）、层状密度相关分析（附录J）以及神经形态硬件实现细节（附录K）。训练环境为单张NVIDIA RTX PRO 6000 GPU（96GB显存）。但未提供训练代码、脚本或检查点，损失函数和PLIFτ初始化等关键细节缺失。
- 论文中引用的开源项目：
  - AST: https://github.com/YuanGongND/ast
  - SSAST: https://github.com/YuanGongND/ssast
  - Spikformer: https://github.com/ZhouChenLin/Spikformer
  - Spike-driven Transformer: https://github.com/zhouchenlin2096/Spike-driven-Transformer
  - Spike-driven Transformer V2: https://github.com/zhouchenlin2096/Spike-driven-Transformer-V2
  - QKFormer: https://github.com/zhouchenlin2096/QKFormer
  - PANNs: https://github.com/qiuqiangkong/audioset_tagging_cnn
  - DTF-AT: 论文中未提及代码链接
  - DCLS-Delays: https://github.com/thisisamoudgl/DCLS-Delays
  - SIDC-KWS: 论文中未提及代码链接
  - Timm: https://github.com/rwightman/pytorch-image-models
  - SpecAugment: https://github.com/DemisEom/SpecAugment
  - mixup: https://github.com/facebookresearch/mixup-cifar10

📄 [OpenReview](https://openreview.net/forum?id=8clCPAImE3)

---

### 137. [PRIM：Cooperative Dynamic Token Compression for Efficient Large Multimodal Models](/audio-paper-digest-blog/posts/2026-07-04-primcooperative-dynamic-token-compression-for)

📝 **3.6/10** | 后50% | #音视频理解 | 创新 1/2 | 严谨 0.8/1.5 | 实验 0.8/1.5 | 影响 0/1.5 | 开源 0/1.5

👥 **作者与机构**

- 第一作者：Song Li（北京邮电大学 网络与交换技术国家重点实验室）
- 通讯作者：Yongping Xiong（北京邮电大学 网络与交换技术国家重点实验室）
- 其他作者：无。论文仅列出两位作者。

💡 **毒舌点评**

本文基于对多模态大模型中注意力的观察，构建了一套无训练的推理阶段令牌压缩流水线。这种“观察-设计-验证”的套路本身并无新意，且每个模块（早期融合、注意力剪枝、频域压缩）均是现有技术的直接借用或微调。更致命的是，论文声称“高效推理”，却完全没有提供任何代码、模型权重或复现配置，这使得所有所谓的效率提升、记忆开销减少和延迟降低都成了无法核实的“纸上谈兵”。在开源已成为顶级会议标配的今天，这种做法严重削弱了论文的可信度和影响力，对于注重实践和复现的语音/音频社区而言，这更是一篇参考价值几乎为零的工作。

📌 **核心摘要**

这篇论文旨在解决大型多模态模型（LMMs）在推理长音视频内容时，因输入令牌数量巨大而导致的计算和内存开销过高的问题。文章通过对LLM内部注意力分布的分析，做出了两个核心观察：（1）跨模态交互主要集中在LLM的浅层，深层则趋于稀疏和抽象；（2）在所有层中，音频令牌获得的注意力权重始终高于视频令牌，表明音频包含更密集的语义信息，而视频则存在大量冗余。基于这些观察，作者提出了PRIM，一个无需额外训练、即插即用的推理阶段协同压缩框架。该框架包含四个主要模块：多模态交叉融合（MCF）将文本-音视频的早期交互外移至LLM之前；注意力引导的选择（AGS）利用音频显著性动态控制各时间窗口的视频令牌压缩比率；频率感知压缩（FAC）利用2D-DCT保留低频能量分量以压缩视频令牌；任务自适应剪枝（TAA）则根据指令复杂度在LLM内部动态分配令牌预算。实验在Qwen2.5-Omni、LLaVA-OneVision、LLaVA-Video等模型和多个音视频基准（如MVBench、VideoMME、AVUT）上展开，结果表明PRIM在显著降低FLOPs（低至28%）和推理延迟的同时，能保持与全量模型接近甚至更优的准确率。其声称的实际意义在于为多模态模型的部署提供了一种低成本方案。

核心实验数据（基于Qwen2.5-Omni-7B）如下所示：

| 方法 | 保留率 | FLOPs比 | MVBench | MLVU | LongVideoBench | VideoMME Overall | 平均分 |
|------|----------|----------|---------|------|----------------|------------------|--------|
| Qwen2.5-Omni-7B (全量) | 100% | 100% | 59.0 | 58.5 | 67.3 | 60.7 | 61.4 |
| PRIM (Ours) | 65% | 54% | 58.8 | 58.3 | 67.1 | 60.3 | 61.1 |
| PRIM (Ours) | 50% | 41% | 57.6 | 58.4 | 65.9 | 59.6 | 60.4 |
| PRIM (Ours) | 35% | 28% | 54.3 | 53.2 | 62.9 | 56.2 | 56.7 |

主要局限包括：方法强依赖于固定时间窗口划分，无法直接处理流式输入；所有评估均基于离线长视频理解基准，缺乏对纯音频任务（如ASR、音频事件检测）的验证，在多任务/多场景下如何自动、泛化地分配压缩比率仍未解决；完全没有提供开源代码或模型，复现和实际应用价值存疑。

📄 [OpenReview](https://openreview.net/forum?id=vtYr3VnMym)

---

