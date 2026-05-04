---
title: "ICLR 2026 语音/音频论文详细分析"
date: 2026-05-04
draft: false
tags: [CTC, GAN, Transformer, 一致性模型, 不确定性量化, 主动学习, 任务规划, 优化算法, 低资源, 信号处理]
categories: [iclr-2026]
description: "共分析 133 篇 ICLR 2026 论文"
layout: "posts"
---

# ICLR 2026 语音/音频论文详细分析

共分析 133 篇 ICLR 2026 论文

---

## 🎯 任务分类

点击任务标签查看该方向所有论文：

- [语音合成](/audio-paper-digest-blog/posts/iclr2026-task-023/)（10篇）
- [音频生成](/audio-paper-digest-blog/posts/iclr2026-task-050/)（9篇）
- [语音识别](/audio-paper-digest-blog/posts/iclr2026-task-032/)（9篇）
- [基准测试](/audio-paper-digest-blog/posts/iclr2026-task-002/)（9篇）
- [音乐生成](/audio-paper-digest-blog/posts/iclr2026-task-040/)（9篇）
- [语音对话系统](/audio-paper-digest-blog/posts/iclr2026-task-028/)（8篇）
- [音频分类](/audio-paper-digest-blog/posts/iclr2026-task-046/)（6篇）
- [音频问答](/audio-paper-digest-blog/posts/iclr2026-task-052/)（6篇）
- [语音情感识别](/audio-paper-digest-blog/posts/iclr2026-task-029/)（5篇）
- [多模态模型](/audio-paper-digest-blog/posts/iclr2026-task-006/)（5篇）
- [音视频](/audio-paper-digest-blog/posts/iclr2026-task-041/)（4篇）
- [音频检索](/audio-paper-digest-blog/posts/iclr2026-task-049/)（4篇）
- [语音分离](/audio-paper-digest-blog/posts/iclr2026-task-022/)（3篇）
- [模型评估](/audio-paper-digest-blog/posts/iclr2026-task-012/)（2篇）
- [语音翻译](/audio-paper-digest-blog/posts/iclr2026-task-031/)（2篇）
- [音乐信息检索](/audio-paper-digest-blog/posts/iclr2026-task-038/)（2篇）
- [生成模型](/audio-paper-digest-blog/posts/iclr2026-task-014/)（2篇）
- [音乐理解](/audio-paper-digest-blog/posts/iclr2026-task-039/)（2篇）
- [视频生成](/audio-paper-digest-blog/posts/iclr2026-task-021/)（2篇）
- [跨模态生成](/audio-paper-digest-blog/posts/iclr2026-task-037/)（1篇）
- [脑编码](/audio-paper-digest-blog/posts/iclr2026-task-018/)（1篇）
- [模型可解释性](/audio-paper-digest-blog/posts/iclr2026-task-010/)（1篇）
- [音视频深度伪造检测](/audio-paper-digest-blog/posts/iclr2026-task-043/)（1篇）
- [图像生成](/audio-paper-digest-blog/posts/iclr2026-task-001/)（1篇）
- [数据集](/audio-paper-digest-blog/posts/iclr2026-task-008/)（1篇）
- [语音增强 #对抗样本](/audio-paper-digest-blog/posts/iclr2026-task-026/)（1篇）
- [语音大模型](/audio-paper-digest-blog/posts/iclr2026-task-027/)（1篇）
- [音频编辑](/audio-paper-digest-blog/posts/iclr2026-task-051/)（1篇）
- [音视频事件检测](/audio-paper-digest-blog/posts/iclr2026-task-042/)（1篇）
- [生态计算](/audio-paper-digest-blog/posts/iclr2026-task-013/)（1篇）
- [视频描述生成](/audio-paper-digest-blog/posts/iclr2026-task-019/)（1篇）
- [视频摘要](/audio-paper-digest-blog/posts/iclr2026-task-020/)（1篇）
- [语音问答](/audio-paper-digest-blog/posts/iclr2026-task-035/)（1篇）
- [基准测试 #数据集](/audio-paper-digest-blog/posts/iclr2026-task-003/)（1篇）
- [音频安全](/audio-paper-digest-blog/posts/iclr2026-task-048/)（1篇）
- [神经网络架构](/audio-paper-digest-blog/posts/iclr2026-task-016/)（1篇）
- [语音转换 #语音匿名化](/audio-paper-digest-blog/posts/iclr2026-task-034/)（1篇）
- [声源定位](/audio-paper-digest-blog/posts/iclr2026-task-004/)（1篇）
- [序列解耦](/audio-paper-digest-blog/posts/iclr2026-task-007/)（1篇）
- [空间音频](/audio-paper-digest-blog/posts/iclr2026-task-017/)（1篇）
- [音频分离](/audio-paper-digest-blog/posts/iclr2026-task-045/)（1篇）
- [机器人操作](/audio-paper-digest-blog/posts/iclr2026-task-009/)（1篇）
- [动作生成](/audio-paper-digest-blog/posts/iclr2026-task-000/)（1篇）
- [音频场景理解](/audio-paper-digest-blog/posts/iclr2026-task-047/)（1篇）
- [跨模态检索](/audio-paper-digest-blog/posts/iclr2026-task-036/)（1篇）
- [语音增强](/audio-paper-digest-blog/posts/iclr2026-task-025/)（1篇）
- [多模态推理](/audio-paper-digest-blog/posts/iclr2026-task-005/)（1篇）
- [语音合成评估](/audio-paper-digest-blog/posts/iclr2026-task-024/)（1篇）
- [语音生成](/audio-paper-digest-blog/posts/iclr2026-task-030/)（1篇）
- [生物声学](/audio-paper-digest-blog/posts/iclr2026-task-015/)（1篇）
- [模型比较](/audio-paper-digest-blog/posts/iclr2026-task-011/)（1篇）
- [音视频联合推理](/audio-paper-digest-blog/posts/iclr2026-task-044/)（1篇）
- [语音识别 #语音合成](/audio-paper-digest-blog/posts/iclr2026-task-033/)（1篇）

---

## ⚡ 今日概览

📥 133 篇 → 🔬 深度分析完成

### 🏷️ 热门方向

| 方向 | 数量 | 分布 |
|------|------|------|
| #语音合成 | 10篇 | ██████████ |
| #音频生成 | 9篇 | █████████ |
| #语音识别 | 9篇 | █████████ |
| #基准测试 | 9篇 | █████████ |
| #音乐生成 | 9篇 | █████████ |
| #语音对话系统 | 8篇 | ████████ |
| #音频分类 | 6篇 | ██████ |
| #音频问答 | 6篇 | ██████ |

### 📊 论文评分排行榜（133 篇，按分数降序）

| 排名 | 论文 | 评分 | 分档 | 主任务 |
|------|------|------|------|------|
| 🥇 | [FlowBind: Efficient Any-to-Any Generation with Bidirect](/audio-paper-digest-blog/posts/2026-05-04-flowbind-efficient-any-to-any-generation-with) | 9.5分 | 前10% | #跨模态生成 |
| 🥈 | [VoxPrivacy: A Benchmark for Evaluating Interactional Pr](/audio-paper-digest-blog/posts/2026-05-04-voxprivacy-a-benchmark-for-evaluating) | 9.5分 | 前10% | #模型评估 |
| 🥉 | [TRIBE: TRImodal Brain Encoder for whole-brain fMRI resp](/audio-paper-digest-blog/posts/2026-05-04-tribe-trimodal-brain-encoder-for-whole-brain-fmri) | 9.5分 | 前10% | #脑编码 |
| 4. | [DrVoice: Parallel Speech-Text Voice Conversation Model ](/audio-paper-digest-blog/posts/2026-05-04-drvoice-parallel-speech-text-voice-conversation) | 9.5分 | 前10% | #语音对话系统 |
| 5. | [MindMix: A Multimodal Foundation Model for Auditory Per](/audio-paper-digest-blog/posts/2026-05-04-mindmix-a-multimodal-foundation-model-for) | 9.0分 | 前10% | #音频分类 |
| 6. | [Resp-Agent: An Agent-Based System for Multimodal Respir](/audio-paper-digest-blog/posts/2026-05-04-resp-agent-an-agent-based-system-for-multimodal) | 9.0分 | 前10% | #音频分类 |
| 7. | [PrismAudio: Decomposed Chain-of-Thought and Multi-dimen](/audio-paper-digest-blog/posts/2026-05-04-prismaudio-decomposed-chain-of-thought-and-multi) | 9.0分 | 前10% | #音频生成 |
| 8. | [JavisDiT++: Unified Modeling and Optimization for Joint](/audio-paper-digest-blog/posts/2026-05-04-javisdit-unified-modeling-and-optimization-for) | 9.0分 | 前25% | #音视频 |
| 9. | [PACE: Pretrained Audio Continual Learning](/audio-paper-digest-blog/posts/2026-05-04-pace-pretrained-audio-continual-learning) | 9.0分 | 前10% | #音频分类 |
| 10. | [FlexiCodec: A Dynamic Neural Audio Codec for Low Frame ](/audio-paper-digest-blog/posts/2026-05-04-flexicodec-a-dynamic-neural-audio-codec-for-low) | 9.0分 | 前10% | #语音合成 |
| 11. | [CTC-DRO: Robust Optimization for Reducing Language Disp](/audio-paper-digest-blog/posts/2026-05-04-ctc-dro-robust-optimization-for-reducing-language) | 9.0分 | 前25% | #语音识别 |
| 12. | [The Deleuzian Representation Hypothesis](/audio-paper-digest-blog/posts/2026-05-04-the-deleuzian-representation-hypothesis) | 8.5分 | 前25% | #模型可解释性 |
| 13. | [STITCH: Simultaneous Thinking and Talking with Chunked ](/audio-paper-digest-blog/posts/2026-05-04-stitch-simultaneous-thinking-and-talking-with) | 8.5分 | 前25% | #语音对话系统 |
| 14. | [Incentivizing Consistent, Effective and Scalable Reason](/audio-paper-digest-blog/posts/2026-05-04-incentivizing-consistent-effective-and-scalable) | 8.5分 | 前10% | #音频问答 |
| 15. | [Tell me Habibi, is it Real or Fake?](/audio-paper-digest-blog/posts/2026-05-04-tell-me-habibi-is-it-real-or-fake) | 8.5分 | 前25% | #音视频深度伪造检测 |
| 16. | [A Hidden Semantic Bottleneck in Conditional Embeddings ](/audio-paper-digest-blog/posts/2026-05-04-a-hidden-semantic-bottleneck-in-conditional) | 8.5分 | 前25% | #图像生成 |
| 17. | [VibeVoice: Expressive Podcast Generation with Next-Toke](/audio-paper-digest-blog/posts/2026-05-04-vibevoice-expressive-podcast-generation-with-next) | 8.5分 | 前10% | #语音合成 |
| 18. | [Scalable Multilingual Multimodal Machine Translation wi](/audio-paper-digest-blog/posts/2026-05-04-scalable-multilingual-multimodal-machine) | 8.5分 | 前25% | #语音翻译 |
| 19. | [SpeechJudge: Towards Human-Level Judgment for Speech Na](/audio-paper-digest-blog/posts/2026-05-04-speechjudge-towards-human-level-judgment-for) | 8.5分 | 前10% | #语音合成 |
| 20. | [OmniVideoBench: Towards Audio-Visual Understanding Eval](/audio-paper-digest-blog/posts/2026-05-04-omnivideobench-towards-audio-visual-understanding) | 8.5分 | 前25% | #基准测试 |
| 21. | [End-to-end Listen, Look, Speak and Act](/audio-paper-digest-blog/posts/2026-05-04-end-to-end-listen-look-speak-and-act) | 8.5分 | 前25% | #语音对话系统 |
| 22. | [Steering Autoregressive Music Generation with Recursive](/audio-paper-digest-blog/posts/2026-05-04-steering-autoregressive-music-generation-with) | 8.5分 | 前25% | #音乐生成 |
| 23. | [VowelPrompt: Hearing Speech Emotions from Text via Vowe](/audio-paper-digest-blog/posts/2026-05-04-vowelprompt-hearing-speech-emotions-from-text-via) | 8.5分 | 前25% | #语音情感识别 |
| 24. | [MCIF: Multimodal Crosslingual Instruction-Following Ben](/audio-paper-digest-blog/posts/2026-05-04-mcif-multimodal-crosslingual-instruction) | 8.5分 | 前25% | #基准测试 |
| 25. | [SCRAPL: Scattering Transform with Random Paths for Mach](/audio-paper-digest-blog/posts/2026-05-04-scrapl-scattering-transform-with-random-paths-for) | 8.5分 | 前25% | #音频生成 |
| 26. | [SongEcho: Towards Cover Song Generation via Instance-Ad](/audio-paper-digest-blog/posts/2026-05-04-songecho-towards-cover-song-generation-via) | 8.5分 | 前25% | #音乐生成 |
| 27. | [UALM: Unified Audio Language Model for Understanding, G](/audio-paper-digest-blog/posts/2026-05-04-ualm-unified-audio-language-model-for) | 8.5分 | 前25% | #音频生成 |
| 28. | [SpeakerVid-5M: A Large-Scale High-Quality Dataset for A](/audio-paper-digest-blog/posts/2026-05-04-speakervid-5m-a-large-scale-high-quality-dataset) | 8.5分 | 前25% | #数据集 |
| 29. | [Are Deep Speech Denoising Models Robust to Adversarial ](/audio-paper-digest-blog/posts/2026-05-04-are-deep-speech-denoising-models-robust-to) | 8.5分 | 前25% | #语音增强 #对抗样本 |
| 30. | [Human Behavior Atlas: Benchmarking Unified Psychologica](/audio-paper-digest-blog/posts/2026-05-04-human-behavior-atlas-benchmarking-unified) | 8.5分 | 前25% | #多模态模型 |
| 31. | [Closing the Gap Between Text and Speech Understanding i](/audio-paper-digest-blog/posts/2026-05-04-closing-the-gap-between-text-and-speech) | 8.5分 | 前25% | #语音大模型 |
| 32. | [From Text to Talk: Audio-Language Model Needs Non-Autor](/audio-paper-digest-blog/posts/2026-05-04-from-text-to-talk-audio-language-model-needs-non) | 8.5分 | 前25% | #语音对话系统 |
| 33. | [SmartDJ: Declarative Audio Editing with Audio Language ](/audio-paper-digest-blog/posts/2026-05-04-smartdj-declarative-audio-editing-with-audio) | 8.5分 | 前25% | #音频编辑 |
| 34. | [Scaling Speech Tokenizers with Diffusion Autoencoders](/audio-paper-digest-blog/posts/2026-05-04-scaling-speech-tokenizers-with-diffusion) | 8.5分 | 前25% | #语音识别 |
| 35. | [Entropy-Monitored Kernelized Token Distillation for Aud](/audio-paper-digest-blog/posts/2026-05-04-entropy-monitored-kernelized-token-distillation) | 8.5分 | 前25% | #音视频事件检测 |
| 36. | [Latent Fourier Transform](/audio-paper-digest-blog/posts/2026-05-04-latent-fourier-transform) | 8.5分 | 前25% | #音乐生成 |
| 37. | [MIAM: Modality Imbalance-Aware Masking for Multimodal E](/audio-paper-digest-blog/posts/2026-05-04-miam-modality-imbalance-aware-masking-for) | 8.5分 | 前25% | #生态计算 |
| 38. | [MAPSS: Manifold-based Assessment of Perceptual Source S](/audio-paper-digest-blog/posts/2026-05-04-mapss-manifold-based-assessment-of-perceptual) | 8.5分 | 前25% | #模型评估 |
| 39. | [AVoCaDO: An Audiovisual Video Captioner Driven by Tempo](/audio-paper-digest-blog/posts/2026-05-04-avocado-an-audiovisual-video-captioner-driven-by) | 8.5分 | 前25% | #视频描述生成 |
| 40. | [TripleSumm: Adaptive Triple-Modality Fusion for Video S](/audio-paper-digest-blog/posts/2026-05-04-triplesumm-adaptive-triple-modality-fusion-for) | 8.5分 | 前25% | #视频摘要 |
| 41. | [Echo: Towards Advanced Audio Comprehension via Audio-In](/audio-paper-digest-blog/posts/2026-05-04-echo-towards-advanced-audio-comprehension-via) | 8.5分 | 前10% | #音频问答 |
| 42. | [JavisDiT: Joint Audio-Video Diffusion Transformer with ](/audio-paper-digest-blog/posts/2026-05-04-javisdit-joint-audio-video-diffusion-transformer) | 8.5分 | 前25% | #音视频 |
| 43. | [Bridging Piano Transcription and Rendering via Disentan](/audio-paper-digest-blog/posts/2026-05-04-bridging-piano-transcription-and-rendering-via) | 8.0分 | 前25% | #音乐信息检索 |
| 44. | [StableToken: A Noise-Robust Semantic Speech Tokenizer f](/audio-paper-digest-blog/posts/2026-05-04-stabletoken-a-noise-robust-semantic-speech) | 8.0分 | 前25% | #语音识别 |
| 45. | [Data-Centric Lessons To Improve Speech-Language Pretrai](/audio-paper-digest-blog/posts/2026-05-04-data-centric-lessons-to-improve-speech-language) | 8.0分 | 前25% | #语音问答 |
| 46. | [Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resol](/audio-paper-digest-blog/posts/2026-05-04-flow2gan-hybrid-flow-matching-and-gan-with-multi) | 8.0分 | 前25% | #音频生成 |
| 47. | [UniSS: Unified Expressive Speech-to-Speech Translation ](/audio-paper-digest-blog/posts/2026-05-04-uniss-unified-expressive-speech-to-speech) | 8.0分 | 前25% | #语音翻译 |
| 48. | [Query-Guided Spatial–Temporal–Frequency Interaction for](/audio-paper-digest-blog/posts/2026-05-04-query-guided-spatialtemporalfrequency-interaction) | 8.0分 | 前25% | #音频问答 |
| 49. | [Omni-Reward: Towards Generalist Omni-Modal Reward Model](/audio-paper-digest-blog/posts/2026-05-04-omni-reward-towards-generalist-omni-modal-reward) | 8.0分 | 前25% | #基准测试 #数据集 |
| 50. | [ParaS2S: Benchmarking and Aligning Spoken Language Mode](/audio-paper-digest-blog/posts/2026-05-04-paras2s-benchmarking-and-aligning-spoken-language) | 8.0分 | 前25% | #语音对话系统 |
| 51. | [JALMBench: Benchmarking Jailbreak Vulnerabilities in Au](/audio-paper-digest-blog/posts/2026-05-04-jalmbench-benchmarking-jailbreak-vulnerabilities) | 8.0分 | 前10% | #音频安全 |
| 52. | [Deep Learning with Learnable Product-Structured Activat](/audio-paper-digest-blog/posts/2026-05-04-deep-learning-with-learnable-product-structured) | 8.0分 | 前10% | #神经网络架构 |
| 53. | [FlexiVoice: Enabling Flexible Style Control in Zero-Sho](/audio-paper-digest-blog/posts/2026-05-04-flexivoice-enabling-flexible-style-control-in) | 8.0分 | 前25% | #语音合成 |
| 54. | [Can Vision-Language Models Answer Face to Face Question](/audio-paper-digest-blog/posts/2026-05-04-can-vision-language-models-answer-face-to-face) | 8.0分 | 前25% | #音频问答 |
| 55. | [DiVeQ: Differentiable Vector Quantization Using the Rep](/audio-paper-digest-blog/posts/2026-05-04-diveq-differentiable-vector-quantization-using) | 8.0分 | 前25% | #生成模型 |
| 56. | [Aurelius: Relation Aware Text-to-Audio Generation At Sc](/audio-paper-digest-blog/posts/2026-05-04-aurelius-relation-aware-text-to-audio-generation) | 8.0分 | 前25% | #音频生成 |
| 57. | [WAVE: Learning Unified & Versatile Audio-Visual Embeddi](/audio-paper-digest-blog/posts/2026-05-04-wave-learning-unified-versatile-audio-visual) | 8.0分 | 前25% | #音频检索 |
| 58. | [WearVox: An Egocentric Multichannel Voice Assistant Ben](/audio-paper-digest-blog/posts/2026-05-04-wearvox-an-egocentric-multichannel-voice) | 8.0分 | 前25% | #基准测试 |
| 59. | [TVTSyn: Content-Synchronous Time-Varying Timbre for Str](/audio-paper-digest-blog/posts/2026-05-04-tvtsyn-content-synchronous-time-varying-timbre) | 8.0分 | 前25% | #语音转换 #语音匿名化 |
| 60. | [Toward Complex-Valued Neural Networks for Waveform Gene](/audio-paper-digest-blog/posts/2026-05-04-toward-complex-valued-neural-networks-for) | 8.0分 | 前25% | #语音合成 |
| 61. | [AC-Foley: Reference-Audio-Guided Video-to-Audio Synthes](/audio-paper-digest-blog/posts/2026-05-04-ac-foley-reference-audio-guided-video-to-audio) | 8.0分 | 前25% | #音频生成 |
| 62. | [Physics-Informed Audio-Geometry-Grid Representation Lea](/audio-paper-digest-blog/posts/2026-05-04-physics-informed-audio-geometry-grid) | 8.0分 | 前25% | #声源定位 |
| 63. | [LadderSym: A Multimodal Interleaved Transformer for Mus](/audio-paper-digest-blog/posts/2026-05-04-laddersym-a-multimodal-interleaved-transformer) | 8.0分 | 前25% | #音乐理解 |
| 64. | [From Natural Alignment to Conditional Controllability i](/audio-paper-digest-blog/posts/2026-05-04-from-natural-alignment-to-conditional) | 8.0分 | 前25% | #语音合成 |
| 65. | [Hierarchical Semantic-Acoustic Modeling via Semi-Discre](/audio-paper-digest-blog/posts/2026-05-04-hierarchical-semantic-acoustic-modeling-via-semi) | 8.0分 | 前25% | #语音合成 |
| 66. | [Discovering and Steering Interpretable Concepts in Larg](/audio-paper-digest-blog/posts/2026-05-04-discovering-and-steering-interpretable-concepts) | 8.0分 | 前25% | #音乐生成 |
| 67. | [NExT-OMNI: Towards Any-to-Any Omnimodal Foundation Mode](/audio-paper-digest-blog/posts/2026-05-04-next-omni-towards-any-to-any-omnimodal-foundation) | 8.0分 | 前25% | #多模态模型 |
| 68. | [TangoFlux: Super Fast and Faithful Text to Audio Genera](/audio-paper-digest-blog/posts/2026-05-04-tangoflux-super-fast-and-faithful-text-to-audio) | 8.0分 | 前25% | #音频生成 |
| 69. | [Syncphony: Synchronized Audio-to-Video Generation with ](/audio-paper-digest-blog/posts/2026-05-04-syncphony-synchronized-audio-to-video-generation) | 8.0分 | 前25% | #音视频 |
| 70. | [Pay Attention to CTC: Fast and Robust Pseudo-Labelling ](/audio-paper-digest-blog/posts/2026-05-04-pay-attention-to-ctc-fast-and-robust-pseudo) | 8.0分 | 前10% | #语音识别 |
| 71. | [AVERE: Improving Audiovisual Emotion Reasoning with Pre](/audio-paper-digest-blog/posts/2026-05-04-avere-improving-audiovisual-emotion-reasoning) | 8.0分 | 前25% | #语音情感识别 |
| 72. | [DiffSDA: Unsupervised Diffusion Sequential Disentanglem](/audio-paper-digest-blog/posts/2026-05-04-diffsda-unsupervised-diffusion-sequential) | 8.0分 | 前25% | #序列解耦 |
| 73. | [Learnable Fractional Superlets with a Spectro-Temporal ](/audio-paper-digest-blog/posts/2026-05-04-learnable-fractional-superlets-with-a-spectro) | 8.0分 | 前25% | #语音情感识别 |
| 74. | [EmotionThinker: Prosody-Aware Reinforcement Learning fo](/audio-paper-digest-blog/posts/2026-05-04-emotionthinker-prosody-aware-reinforcement) | 8.0分 | 前25% | #语音情感识别 |
| 75. | [OWL : Geometry-Aware Spatial Reasoning for Audio Large ](/audio-paper-digest-blog/posts/2026-05-04-owl-geometry-aware-spatial-reasoning-for-audio) | 8.0分 | 前25% | #空间音频 |
| 76. | [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-04-layersync-self-aligning-intermediate-layers) | 7.5分 | 前25% | #音频生成 |
| 77. | [A Brain-Inspired Gating Mechanism Unlocks Robust Comput](/audio-paper-digest-blog/posts/2026-05-04-a-brain-inspired-gating-mechanism-unlocks-robust) | 7.5分 | 前25% | #语音识别 |
| 78. | [Token-Based Audio Inpainting via Discrete Diffusion](/audio-paper-digest-blog/posts/2026-05-04-token-based-audio-inpainting-via-discrete) | 7.5分 | 前25% | #音乐生成 |
| 79. | [MARS-Sep: Multimodal-Aligned Reinforced Sound Separatio](/audio-paper-digest-blog/posts/2026-05-04-mars-sep-multimodal-aligned-reinforced-sound) | 7.5分 | 前25% | #语音分离 |
| 80. | [AlignSep: Temporally-Aligned Video-Queried Sound Separa](/audio-paper-digest-blog/posts/2026-05-04-alignsep-temporally-aligned-video-queried-sound) | 7.5分 | 前25% | #音频分离 |
| 81. | [OmniVinci: Enhancing Architecture and Data for Omni-Mod](/audio-paper-digest-blog/posts/2026-05-04-omnivinci-enhancing-architecture-and-data-for) | 7.5分 | 前25% | #多模态模型 |
| 82. | [AudioTrust: Benchmarking The Multifaceted Trustworthine](/audio-paper-digest-blog/posts/2026-05-04-audiotrust-benchmarking-the-multifaceted) | 7.5分 | 前25% | #基准测试 |
| 83. | [Unmute the Patch Tokens: Rethinking Probing in Multi-La](/audio-paper-digest-blog/posts/2026-05-04-unmute-the-patch-tokens-rethinking-probing-in) | 7.5分 | 前25% | #音频分类 |
| 84. | [XModBench: Benchmarking Cross-Modal Capabilities and Co](/audio-paper-digest-blog/posts/2026-05-04-xmodbench-benchmarking-cross-modal-capabilities) | 7.5分 | 前25% | #基准测试 |
| 85. | [Gogo: Group-wise granularity-ordered codec for stable a](/audio-paper-digest-blog/posts/2026-05-04-gogo-group-wise-granularity-ordered-codec-for) | 7.5分 | 前25% | #语音合成 |
| 86. | [SyncTrack: Rhythmic Stability and Synchronization in Mu](/audio-paper-digest-blog/posts/2026-05-04-synctrack-rhythmic-stability-and-synchronization) | 7.5分 | 前25% | #音乐生成 |
| 87. | [Efficient Audio-Visual Speech Separation with Discrete ](/audio-paper-digest-blog/posts/2026-05-04-efficient-audio-visual-speech-separation-with) | 7.5分 | 前25% | #语音分离 |
| 88. | [A cross-species neural foundation model for end-to-end ](/audio-paper-digest-blog/posts/2026-05-04-a-cross-species-neural-foundation-model-for-end) | 7.5分 | 前25% | #语音识别 |
| 89. | [RoboOmni: Proactive Robot Manipulation in Omni-modal Co](/audio-paper-digest-blog/posts/2026-05-04-roboomni-proactive-robot-manipulation-in-omni) | 7.5分 | 前25% | #机器人操作 |
| 90. | [Seeing, Listening, Remembering, and Reasoning: A Multim](/audio-paper-digest-blog/posts/2026-05-04-seeing-listening-remembering-and-reasoning-a) | 7.5分 | 前25% | #多模态模型 |
| 91. | [Human or Machine? A Preliminary Turing Test for Speech-](/audio-paper-digest-blog/posts/2026-05-04-human-or-machine-a-preliminary-turing-test-for) | 7.5分 | 前25% | #语音对话系统 |
| 92. | [Unified Multi-Modal Interactive and Reactive 3D Motion ](/audio-paper-digest-blog/posts/2026-05-04-unified-multi-modal-interactive-and-reactive-3d) | 7.5分 | 前25% | #动作生成 |
| 93. | [Music Flamingo: Scaling Music Understanding in Audio La](/audio-paper-digest-blog/posts/2026-05-04-music-flamingo-scaling-music-understanding-in) | 7.5分 | 前25% | #音乐理解 |
| 94. | [Speech World Model: Causal State–Action Planning with E](/audio-paper-digest-blog/posts/2026-05-04-speech-world-model-causal-stateaction-planning) | 7.5分 | 前25% | #语音情感识别 |
| 95. | [SNAP-UQ: Self-supervised Next-Activation Prediction for](/audio-paper-digest-blog/posts/2026-05-04-snap-uq-self-supervised-next-activation) | 7.5分 | 前25% | #音频分类 |
| 96. | [Omni-Captioner: Data Pipeline, Models, and Benchmark fo](/audio-paper-digest-blog/posts/2026-05-04-omni-captioner-data-pipeline-models-and-benchmark) | 7.5分 | 前25% | #音频场景理解 |
| 97. | [Learning multimodal dictionary decompositions with grou](/audio-paper-digest-blog/posts/2026-05-04-learning-multimodal-dictionary-decompositions) | 7.5分 | 前25% | #跨模态检索 |
| 98. | [Beyond Instance-Level Alignment: Dual-Level Optimal Tra](/audio-paper-digest-blog/posts/2026-05-04-beyond-instance-level-alignment-dual-level) | 7.5分 | 前25% | #音频检索 |
| 99. | [Confident and Adaptive Generative Speech Recognition vi](/audio-paper-digest-blog/posts/2026-05-04-confident-and-adaptive-generative-speech) | 7.5分 | 前25% | #语音识别 |
| 100. | [Can Speech LLMs Think while Listening?](/audio-paper-digest-blog/posts/2026-05-04-can-speech-llms-think-while-listening) | 7.5分 | 前25% | #语音对话系统 |
| 101. | [AUHead: Realistic Emotional Talking Head Generation via](/audio-paper-digest-blog/posts/2026-05-04-auhead-realistic-emotional-talking-head) | 7.5分 | 前25% | #生成模型 |
| 102. | [SpeechOp: Inference-Time Task Composition for Generativ](/audio-paper-digest-blog/posts/2026-05-04-speechop-inference-time-task-composition-for) | 7.5分 | 前25% | #语音增强 |
| 103. | [Speech-to-LaTeX: New Models and Datasets for Converting](/audio-paper-digest-blog/posts/2026-05-04-speech-to-latex-new-models-and-datasets-for) | 7.5分 | 前25% | #语音识别 |
| 104. | [YuE: Scaling Open Foundation Models for Long-Form Music](/audio-paper-digest-blog/posts/2026-05-04-yue-scaling-open-foundation-models-for-long-form) | 7.5分 | 前25% | #音乐生成 |
| 105. | [Compose and Fuse: Revisiting the Foundational Bottlenec](/audio-paper-digest-blog/posts/2026-05-04-compose-and-fuse-revisiting-the-foundational) | 7.5分 | 前25% | #多模态推理 |
| 106. | [AudioX: A Unified Framework for Anything-to-Audio Gener](/audio-paper-digest-blog/posts/2026-05-04-audiox-a-unified-framework-for-anything-to-audio) | 7.5分 | 前25% | #音频生成 |
| 107. | [InterActHuman: Multi-Concept Human Animation with Layou](/audio-paper-digest-blog/posts/2026-05-04-interacthuman-multi-concept-human-animation-with) | 7.5分 | 前25% | #视频生成 |
| 108. | [Measuring Audio's Impact on Correctness: Audio-Contribu](/audio-paper-digest-blog/posts/2026-05-04-measuring-audios-impact-on-correctness-audio) | 7.5分 | 前25% | #音频问答 |
| 109. | [TTSDS2: Resources and Benchmark for Evaluating Human-Qu](/audio-paper-digest-blog/posts/2026-05-04-ttsds2-resources-and-benchmark-for-evaluating) | 7.5分 | 前25% | #语音合成评估 |
| 110. | [SumRA: Parameter Efficient Fine-tuning with Singular Va](/audio-paper-digest-blog/posts/2026-05-04-sumra-parameter-efficient-fine-tuning-with) | 7.5分 | 前25% | #语音识别 |
| 111. | [MMSU: A Massive Multi-task Spoken Language Understandin](/audio-paper-digest-blog/posts/2026-05-04-mmsu-a-massive-multi-task-spoken-language) | 7.5分 | 前50% | #基准测试 |
| 112. | [Towards True Speech-to-Speech Models Without Text Guida](/audio-paper-digest-blog/posts/2026-05-04-towards-true-speech-to-speech-models-without-text) | 7.5分 | 前25% | #语音对话系统 |
| 113. | [Better Together: Leveraging Unpaired Multimodal Data fo](/audio-paper-digest-blog/posts/2026-05-04-better-together-leveraging-unpaired-multimodal) | 7.0分 | 前25% | #音频分类 |
| 114. | [TASTE: Text-Aligned Speech Tokenization and Embedding f](/audio-paper-digest-blog/posts/2026-05-04-taste-text-aligned-speech-tokenization-and) | 7.0分 | 前25% | #语音生成 |
| 115. | [Instilling an Active Mind in Avatars via Cognitive Simu](/audio-paper-digest-blog/posts/2026-05-04-instilling-an-active-mind-in-avatars-via) | 7.0分 | 前25% | #音视频 |
| 116. | [Generative Adversarial Post-Training Mitigates Reward H](/audio-paper-digest-blog/posts/2026-05-04-generative-adversarial-post-training-mitigates) | 7.0分 | 前25% | #音乐生成 |
| 117. | [OmniCVR: A Benchmark for Omni-Composed Video Retrieval ](/audio-paper-digest-blog/posts/2026-05-04-omnicvr-a-benchmark-for-omni-composed-video) | 7.0分 | 前25% | #音频检索 |
| 118. | [Continuous Audio Language Models](/audio-paper-digest-blog/posts/2026-05-04-continuous-audio-language-models) | 7.0分 | 前25% | #语音合成 |
| 119. | [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-04-avex-what-matters-for-animal-vocalization-encoding) | 7.0分 | 前25% | #生物声学 |
| 120. | [OptMerge: Unifying Multimodal LLM Capabilities and Moda](/audio-paper-digest-blog/posts/2026-05-04-optmerge-unifying-multimodal-llm-capabilities-and) | 7.0分 | 前25% | #模型比较 |
| 121. | [LLM2Fx-Tools: Tool Calling for Music Post-Production](/audio-paper-digest-blog/posts/2026-05-04-llm2fx-tools-tool-calling-for-music-post) | 7.0分 | 前25% | #音乐信息检索 |
| 122. | [Knowing When to Quit: Probabilistic Early Exits for Spe](/audio-paper-digest-blog/posts/2026-05-04-knowing-when-to-quit-probabilistic-early-exits) | 7.0分 | 前25% | #语音分离 |
| 123. | [SupCLAP: Controlling Optimization Trajectory Drift in A](/audio-paper-digest-blog/posts/2026-05-04-supclap-controlling-optimization-trajectory-drift) | 7.0分 | 前25% | #音频检索 |
| 124. | [VideoMathQA: Benchmarking Mathematical Reasoning via Mu](/audio-paper-digest-blog/posts/2026-05-04-videomathqa-benchmarking-mathematical-reasoning) | 7.0分 | 前25% | #基准测试 |
| 125. | [Stable Video Infinity: Infinite-Length Video Generation](/audio-paper-digest-blog/posts/2026-05-04-stable-video-infinity-infinite-length-video) | 7.0分 | 前25% | #视频生成 |
| 126. | [WorldSense: Evaluating Real-world Omnimodal Understandi](/audio-paper-digest-blog/posts/2026-05-04-worldsense-evaluating-real-world-omnimodal) | 7.0分 | 前25% | #音频问答 |
| 127. | [JointAVBench: A Benchmark for Joint Audio-Visual Reason](/audio-paper-digest-blog/posts/2026-05-04-jointavbench-a-benchmark-for-joint-audio-visual) | 7.0分 | 前25% | #音视频联合推理 |
| 128. | [Automatic Stage Lighting Control: Is it a Rule-Driven P](/audio-paper-digest-blog/posts/2026-05-04-automatic-stage-lighting-control-is-it-a-rule) | 7.0分 | 前25% | #音乐生成 |
| 129. | [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-04-latent-speech-text-transformer) | 7.0分 | 前25% | #语音识别 #语音合成 |
| 130. | [EchoMind: An Interrelated Multi-level Benchmark for Eva](/audio-paper-digest-blog/posts/2026-05-04-echomind-an-interrelated-multi-level-benchmark) | 7.0分 | 前25% | #基准测试 |
| 131. | [TINY BUT MIGHTY: A SOFTWARE-HARDWARE CO- DESIGN APPROAC](/audio-paper-digest-blog/posts/2026-05-04-tiny-but-mighty-a-software-hardware-co-design) | 7.0分 | 前25% | #多模态模型 |
| 132. | [MambaVoiceCloning: Efficient and Expressive Text-to-Spe](/audio-paper-digest-blog/posts/2026-05-04-mambavoicecloning-efficient-and-expressive-text) | 6.5分 | 前50% | #语音合成 |
| 133. | [STAR-Bench: Probing Deep Spatio-Temporal Reasoning as A](/audio-paper-digest-blog/posts/2026-05-04-star-bench-probing-deep-spatio-temporal-reasoning) | 6.5分 | 前25% | #基准测试 |

---

## 📋 论文列表

### 🥇 [FlowBind: Efficient Any-to-Any Generation with Bidirectional Flows](/audio-paper-digest-blog/posts/2026-05-04-flowbind-efficient-any-to-any-generation-with)

🔥 **9.5/10** | 前10% | #跨模态生成 | #流匹配 | #音频生成 #多模态模型

👥 **作者与机构**

- 第一作者：Yeonwoo Cha* (KAIST)
- 通讯作者：Seunghoon Hong (KAIST)
- 作者列表：Yeonwoo Cha* (KAIST), Semin Kim* (KAIST), Jinhyeon Kwon (KAIST), Seunghoon Hong (KAIST)（*表示同等贡献）

💡 **毒舌点评**

亮点在于其“共享潜在空间+单模态可逆流”的设计，用近乎暴力的简洁性一举解决了多模态生成中数据配对、计算成本和训练复杂度的“不可能三角”，工程思想非常漂亮。短板是论文为了突出效率，选用的模型体量和训练数据远小于前沿基线，可能在生成质量的绝对上限上有所妥协，且对更复杂的模态交互（如高保真视频生成）的能力尚未被充分验证。

🔗 **开源详情**

- **代码**：论文明确提供了项目主页和代码仓库链接：`https://yeonwoo378.github.io/official_flowbind`。
- **模型权重**：论文未提及是否公开预训练模型权重。
- **数据集**：论文详细描述了使用的训练数据集（LAION-COCO, Flickr-30k, AudioCaps v2, VGGSound）及其来源，但这些是现有公开数据集，FlowBind本身未发布新数据集。
- **Demo**：项目主页可能包含演示，但论文中未明确提及。
- **复现材料**：提供了非常充分的复现材料，包括：详细的模型架构（MLP with AdaLN-zero）、训练配方（优化器、batch size、训练步数、硬件）、所有超参数、评估协议及指标计算细节。
- **论文中引用的开源项目**：EmbeddingGemma (Team et al., 2025), CLIP (Radford et al., 2021), Stable-UnCLIP, CLAP (Elizalde et al., 2023), AudioLDM (Liu et al., 2023), Gemma3-1B。

📌 **核心摘要**

本文旨在解决现有基于流匹配的任意到任意（any-to-any）多模态生成方法效率低下的问题，这些问题包括：对数据配对要求严格（需大量完全配对数据）、计算成本高（需建模联合分布）以及训练流程复杂（多阶段训练）。FlowBind提出一个简洁的框架，其核心思想是学习一个能捕捉跨模态共性的可学习共享潜在空间，并为每个模态配备一个连接该潜在空间的可逆流。所有组件在单一的流匹配目标下联合优化，推理时各模态的可逆流可直接作为编码器/解码器实现跨模态翻译。与基线CoDi和OmniFlow相比，FlowBind通过因式分解相互作用，自然支持使用任意子集模态数据进行训练，在大幅降低数据需求和计算成本的同时，达到了有竞争力的生成质量。实验表明，在文本、图像和音频任务上，FlowBind参数量仅为OmniFlow的约1/6，训练速度快约10倍，且生成质量可比。该框架的意义在于为高效、灵活的多模态生成提供了一种新的通用解决方案。主要局限性在于其当前实验的模型规模较小，在生成细节的保真度上可能不及更庞大的基线模型，且对更复杂、高维的模态（如视频）的泛化能力有待进一步证明。

---

### 🥈 [VoxPrivacy: A Benchmark for Evaluating Interactional Privacy of Speech Language Models](/audio-paper-digest-blog/posts/2026-05-04-voxprivacy-a-benchmark-for-evaluating)

🔥 **9.5/10** | 前10% | #模型评估 | #基准测试 | #语音大模型 #数据集

👥 **作者与机构**

第一作者：Yuxiang Wang（香港中文大学（深圳））
通讯作者：未明确说明（根据惯例和贡献推断，Zhizheng Wu可能性较大）
作者列表：Yuxiang Wang¹, Hongyu Liu¹, Dekun Chen¹, Xueyao Zhang¹, Zhizheng Wu¹,²,³,⁴
    ¹ 香港中文大学（深圳）
    ² 深圳大数据研究院
    ³ 澳门城市大学
    ⁴ Amphion Technology Co., Ltd.（星尘智能科技有限公司）

💡 **毒舌点评**

这篇论文精准地刺中了当前语音大模型（SLM）在走向多用户共享场景时一个被严重忽视的“阿喀琉斯之踵”——交互隐私。其最大亮点在于不仅诊断了“病症”（模型无法将语音身份与隐私规则关联），更通过精心设计的三层评估体系“量化了病情”，并指出了“病理”（是上下文推理能力不足，而非基础对话能力问题）。短板在于，目前提出的“药方”（监督微调）虽有效但相对传统，未来如何让模型在更复杂的社交场景中自主、灵活地做出符合伦理的隐私决策，而非仅机械遵循规则，仍是开放挑战。

🔗 **开源详情**

- **代码**：论文中未提及代码仓库链接。但根据论文末尾的声明“we are releasing the VoxPrivacy benchmark, the large-scale training set, and the fine-tuned model”，预计相关资源会通过项目页面（https://myflashbarry.github.io/VoxPrivacy.github.io/）或代码托管平台发布。
- **模型权重**：是。论文明确声明将公开其微调后的模型（Ours: Kimi-Audio-sft）。
- **数据集**：是。论文明确声明将公开VoxPrivacy基准测试（32小时数据）和4000小时的大规模训练集。
- **Demo**：是。提供了在线演示页面：https://myflashbarry.github.io/VoxPrivacy.github.io/
- **复现材料**：论文提供了丰富的复现信息，包括：完整的数据构建流程（附录A给出了生成提示词）、评估标准与LLM评委提示词（附录F、G）、训练超参数（8xA800 GPU，lr=1e-5等）、以及详细的实验设置。
- **论文中引用的开源项目**：
    - **模型**：Kimi-Audio, Qwen2.5-Omni, MiniCPM2.6-o, Gemini系列, Deepseek系列, Qwen2Audio, Voxtral3B, Baichuan-Omni-1.5, GLM4Voice。
    - **工具/数据集**：CosyVoice2 (TTS), Whisper-large-v3 (ASR), AISHELL-2, WenetSpeech, LibriSpeech, CommonVoice, Fleurs, SAVEE, IEMOCAP, ESD, RAVDESS, MELD, CREMA-D, ESC50, AudioSet, FSD50K, VocalSound, UrbanSound8K, ClothoAQA, MusicAVQA, AVQA等。

📌 **核心摘要**

1.  **解决的问题**：本文针对语音语言模型（SLM）从个人设备走向智能家居、车载等共享多用户环境时面临的新挑战——“交互隐私”问题，即模型需要区分不同用户，防止将一个用户的私人信息泄露给另一个用户。现有基准测试忽略了这种基于说话人身份的条件隐私保护能力评估。
2.  **方法核心**：提出首个评估交互隐私的基准测试VoxPrivacy。它设计了三个难度递增的层级：Tier 1（直接命令保密）、Tier 2（基于说话人验证的保密）、Tier 3（主动隐私保护）。基于此构建了一个包含7107个样本、32.86小时的双语（中/英）合成数据集，并包含一个由18人录制的真实语音验证子集（Real-VoxPrivacy）。
3.  **创新点**：首次系统定义和评估SLM的“交互隐私”能力；设计了分层的评估任务以衡量从指令跟随到自主推理的完整能力谱；通过合成数据与真实语音的对齐验证，证明了评估结论的可靠性。
4.  **主要实验结果**：对9个SLM的评估显示，大多数开源模型在Tier 2/3任务上的准确率接近随机猜测（~50%），表明其根本无法将说话人声音与隐私规则关联。即使是强大的闭源模型（如Gemini-2.5-Pro）在Tier 3（主动推断）上也有明显性能下降。通过对比实验，证明失败根源是“对话上下文处理能力的缺失”，而非基础对话能力。通过微调，本文提出的模型在所有层级上显著优于其他开源模型，达到了与顶级闭源模型相当的水平。关键性能数据对比见下表：

**Tier 1 任务准确率（%）**
| 模型 | 英语 | 中语 |
| :--- | :--- | :--- |
| LLM (上界) | 98.01 | 99.10 |
| Gemini-2.5-pro | 81.95 | 84.03 |
| Kimi-Audio | 71.38 | 40.77 |
| **本文模型** | **87.92** | **80.23** |

**Tier 2 任务 F1 分数**
| 模型 | 英语 | 中语 |
| :--- | :--- | :--- |
| LLM (上界) | 90.64 | 93.64 |
| Gemini-2.5-pro | 76.39 | 76.31 |
| Kimi-Audio | 59.14 | 26.47 |
| **本文模型** | **82.65** | **78.50** |

5.  **实际意义**：该工作揭示了当前语音大模型在安全部署方面的重大缺陷，为业界敲响了警钟。它提供的评测基准、数据集和初步解决方案，为开发更安全、尊重隐私的下一代共享环境语音助手指明了方向和提供了研究工具。
6.  **主要局限性**：1) 依赖合成数据进行大规模评估，尽管有真实数据验证，但仍可能无法完全模拟现实世界中复杂的对话动态和副语言线索；2) 提出的解决方案基于监督微调，未来可能需要更先进的强化学习或上下文学习方法来处理更细粒度、更动态的隐私决策；3) 评估主要关注二元（披露/不披露）决策，未深入探讨隐私保护的程度或信息流的细微差别。

---

### 🥉 [TRIBE: TRImodal Brain Encoder for whole-brain fMRI response prediction](/audio-paper-digest-blog/posts/2026-05-04-tribe-trimodal-brain-encoder-for-whole-brain-fmri)

🔥 **9.5/10** | 前10% | #脑编码 | #预训练 | #多模态模型 #Transformer

👥 **作者与机构**

- 第一作者：Stéphane d‘Ascoli（Meta AI）
- 通讯作者：未说明
- 作者列表：Stéphane d‘Ascoli（Meta AI）、Jérémy Rapin（Meta AI）、Yohann Benchetrit（Meta AI）、Hubert Banville（Meta AI）、Jean-Rémi King（Meta AI）

💡 **毒舌点评**

亮点在于其工程与科学的完美结合：它不仅是竞赛刷榜利器，更通过严谨的消融实验证明了“多模态整合”在高级联合皮层的关键作用，为构建统一认知模型提供了方法论和实证支持。短板则是其对数据和算力的极度依赖（80小时/被试fMRI，128 GPU特征提取）以及仅在4名被试上验证的结论，这在一定程度上限制了其普适性的即时说服力。

🔗 **开源详情**

- **代码**：提供了代码仓库链接：`https://github.com/facebookresearch/algonauts-2025`。
- **模型权重**：论文中未提及是否公开TRIBE模型或特征提取模型的权重。
- **数据集**：使用了公开的**Courtois NeuroMod数据集**（CC0许可），并说明为Algonauts 2025竞赛选择了4名被试的子集。
- **Demo**：论文中未提及在线演示。
- **复现材料**：提供了极其详尽的复现信息，包括完整的超参数表（表3）、数据处理流程、评估指标定义、训练细节（优化器、学习率调度、SWA、模态丢弃等），以及硬件规格。
- **论文中引用的开源项目**：明确列出了使用的开源模型和工具，包括：Llama 3.2（Meta）、Wav2Vec-Bert 2.0（Hugging Face）、V-JEPA 2（Meta， Apache协议）、x-transformers包（MIT协议）、nilearn（BSD协议）、PyTorch。

📌 **核心摘要**

1.  **要解决的问题**：传统神经科学研究局限于单模态、单脑区的碎片化模型，而现有的脑编码模型存在线性映射假设过强、仅支持单主体训练、且大多局限于单模态刺激输入三大限制，阻碍了构建统一的全脑认知模型。
2.  **方法核心**：提出TRIBE，一种深度神经网络，它将文本（Llama 3.2）、音频（Wav2Vec-Bert）和视频（V-JEPA 2）基础模型的预训练表征作为输入，通过一个Transformer编码器来建模其时间动态和跨模态整合，最终预测全脑的fMRI反应。
3.  **新在哪里**：与之前工作相比，TRIBE首次实现了**同时是**非线性的、多主体的、多模态的端到端脑编码。它超越了简单的线性映射，并允许在多个被试的数据上联合训练一个共享模型。
4.  **主要实验结果**：TRIBE在Algonauts 2025脑编码竞赛中获得第一名（267个团队），平均Pearson相关系数为0.2146，显著领先第二名（见表1）。消融实验表明，多模态模型（0.31）显著优于最佳单模态模型（视频0.25），且这种优势在前额叶、顶叶等高级联合皮层最为明显（见图4）。模型能够预测所有1000个脑区，并在多种高度分布外的电影上展现出鲁棒性（见表2）。
5.  **实际意义**：为神经科学提供了一个统一的建模框架，使得从多模态自然刺激预测全脑活动成为可能，有望推动对知觉、理解等认知过程的整体性研究，并为“计算机实验”提供新工具。
6.  **主要局限性**：当前模型基于粗粒度的脑区分割（1000个区域），损失了精细的空间信息；仅使用了fMRI数据，无法捕捉快速的神经电活动；目前仅在4名被试上进行训练和验证。

---

### 4. [DrVoice: Parallel Speech-Text Voice Conversation Model via Dual-Resolution Speech Representations](/audio-paper-digest-blog/posts/2026-05-04-drvoice-parallel-speech-text-voice-conversation)

🔥 **9.5/10** | 前10% | #语音对话系统 | #自回归模型 | #多模态模型 #语音合成

👥 **作者与机构**

- 第一作者：Chao-Hong Tan (Tongyi Fun Team, Alibaba Group)
- 通讯作者：未明确说明，根据邮箱推测为团队负责人（如tanchaohong.ch@alibaba-inc.com）
- 作者列表：Chao-Hong Tan, Qian Chen, Wen Wang, Chong Deng, Qinglin Zhang, Luyao Cheng, Hai Yu, Xin Zhang, Xiang Lv, Tianyu Zhao, Chong Zhang, Yukun Ma, Yafeng Chen, Hui Wang, Jiaqing Liu, Xiangang Li, Jieping Ye (所属机构均为 Tongyi Fun Team, Alibaba Group)

💡 **毒舌点评**

**亮点**：DrVoice的“双分辨率”设计堪称点睛之笔，通过一个简洁的分组/解分组机制，巧妙平衡了语音处理的计算效率（输入降至5Hz）与生成保真度（SRH在25Hz下精细化生成），在降低近半训练开销的同时性能不降反升，工程落地潜力巨大。
**短板**：论文专注于单向语音生成的对话模式，但真实的人机语音交互需要全双工能力（即能边听边说），作者在局限性中也承认了这一点。目前模型更像一个强大的“单口相声”演员，而非能自然打断和回应的真正对话伙伴。

🔗 **开源详情**

- **代码**：论文明确承诺将在发表后开源所有源代码、训练和评估脚本。代码仓库链接：https://github.com/FunAudioLLM/Fun-Audio-Chat
- **模型权重**：论文明确承诺将开源基于增强基础模型的预训练模型检查点。
- **数据集**：合成语音数据基于公开的CosyVoice模型，论文承诺提供复现数据集的脚本和说明。
- **Demo**：论文中未提及在线演示链接。
- **复现材料**：提供了极其详尽的实施细节（附录A），包括模型初始化、学习率调度、优化器、硬件配置、训练时长等。
- **论文中引用的开源项目**：Whisper-Large-v3（语音编码器）、CosyVoice/S3Tokenizer（语音分词/解码）、Qwen2.5（基础LLM）、HiFi-GAN（声码器）。

📌 **核心摘要**

1. **解决的问题**：现有端到端语音对话模型面临两大挑战：一是语音token（通常12.5Hz或更高）与文本token（约3Hz）的帧率严重不匹配，导致LLM难以同时高效处理两种模态；二是联合生成过程中，语音生成易干扰LLM原有的文本能力。
2. **方法核心**：提出DrVoice，一个基于联合自回归建模的并行语音-文本对话模型。其核心创新是**双分辨率语音表示（DRSR）**：在输入理解阶段，将25Hz的离散语音token通过分组机制（grouping）压缩为5Hz表示送入LLM；在输出生成阶段，通过**语音精炼头（SRH）** 将LLM隐藏状态解分组（ungrouping）并自回归生成25Hz的原始语音token。此外，引入了**链式模态（CoM）** 训练策略和**核心鸡尾酒（Core-Cocktail）** 两阶段训练策略。
3. **与已有的不同**：与Kim-Audio（12.5Hz）等模型相比，DrVoice将LLM处理的帧率降至5Hz，大幅减少了计算成本（训练GPU小时减少近50%），同时通过SRH机制保证了高质量的语音生成，有效缓解了模态间频率差异。
4. **主要实验结果**：DrVoice-7B在多个主要基准上取得SOTA。具体结果见下表：

| 基准测试 | 任务类型 | DrVoice | 最强对比基线 (模型) | DrVoice优势 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenAudioBench** | S→T (音频理解) | **72.04** | 69.08 (Kimi-Audio) | +2.96 |
| **VoiceBench** | S→T (语音助手) | **80.17** | 76.93 (Kimi-Audio) | +3.24 |
| **UltraEval-Audio** | S→S (语音对话) | **56.66** | 50.46 (Qwen2.5-Omni) | +6.20 |
| **Big Bench Audio** | S→T & S→S | **74.0** | 55.8 (MiniCPM-o 2.6) | +18.2 |

5. **实际意义**：DrVoice为构建高效、高质量的开源语音对话基础模型提供了新范式。其低帧率设计意味着更低的推理延迟和资源消耗，使得在实际设备或大规模部署中应用复杂的语音对话模型成为可能。
6. **主要局限性**：模型目前不支持全双工交互（即无法处理用户在模型生成语音时的输入）。此外，语音生成的质量（ASR-WER）虽佳，但与Qwen2.5-Omni等专门优化过的模型相比仍有提升空间。

---

### 5. [MindMix: A Multimodal Foundation Model for Auditory Perception Decoding via Deep Neural-Acoustic Alignment](/audio-paper-digest-blog/posts/2026-05-04-mindmix-a-multimodal-foundation-model-for)

🔥 **9.0/10** | 前10% | #音频分类 | #多模态模型 | #预训练 #对比学习

👥 **作者与机构**

- 第一作者：Rui Liu（香港理工大学）
- 通讯作者：Jibin Wu（香港理工大学），Kay Chen Tan（香港理工大学）
- 作者列表：Rui Liu（香港理工大学），Zhige Chen（香港理工大学），Shu Peng（香港理工大学），Wenlong You（香港理工大学），Zhi-An Huang（香港城市大学（东莞）），Jibin Wu（香港理工大学），Kay Chen Tan（香港理工大学）

💡 **毒舌点评**

**亮点**：这篇论文最大的亮点是“用事实说话”——它不像许多基础模型论文那样只提理论创新，而是直接用一套横跨注意力解码、情感分析、音乐检索的“组合拳”实验结果，无可辩驳地证明了其提出的CALRA模块在建立深度神经-声学对齐上的巨大威力，尤其是在AAD任务上近乎100%的准确率堪称惊艳。
**短板**：然而，论文也坦承了“配对数据稀缺”这一阿喀琉斯之踵。当前实验所用的100多小时对齐数据量，相对于其宣称的“基础模型”定位和庞大的单模态预训练数据（3500+小时）而言仍显单薄，这限制了我们对模型在更复杂、更嘈杂的真实世界声学场景下是否依然如此“全能”且“鲁棒”的判断。

🔗 **开源详情**

- **代码**：论文中提供了代码仓库链接：https://github.com/CookieMikeLiu/MindMix。
- **模型权重**：论文中未提及是否公开预训练模型权重。
- **数据集**：论文中使用的所有数据集均为公开可用，并详细列出了名称、来源和小时数。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文提供了极其详尽的复现材料，包括：标准化数据预处理流程、完整的模型架构描述、所有训练超参数配置（表A2）、分阶段的训练策略、详细的评估协议（包括严格的跨试验评估）、以及计算成本分析。
- **论文中引用的开源项目**：依赖的开源模型包括Wav2Vec 2.0、LaBraM、CBraMod、EEGNet等。

---

### 6. [Resp-Agent: An Agent-Based System for Multimodal Respiratory Sound Generation and Disease Diagnosis](/audio-paper-digest-blog/posts/2026-05-04-resp-agent-an-agent-based-system-for-multimodal)

🔥 **9.0/10** | 前10% | #音频分类 | #多模态模型 | #流匹配 #数据增强

👥 **作者与机构**

- 第一作者：Pengfei Zhang (香港科技大学（广州）)
- 通讯作者：Li Liu (香港科技大学（广州）， avrillliu@hkust-gz.edu.cn)
- 作者列表：Pengfei ZHANG (香港科技大学（广州）)， Tianxin Xie (香港科技大学（广州）)， Minghao Yang (香港科技大学（广州）)， Li Liu* (香港科技大学（广州）)

💡 **毒舌点评**

**亮点**：这篇论文最漂亮的地方在于它提出了一个“分析-生成”闭环的智能体系统，用LLM（Thinker-A2CA）动态决定“合成什么”来弥补诊断器的短板，把数据增强从一个被动的预处理步骤变成了主动的、对抗性的课程学习，这个系统设计思想很有启发性。
**短板**：不过，整个系统有点像个精心组装的乐高，依赖多个重型组件（LLM， BEATs， Longformer， 流匹配模型），对于呼吸音这个相对垂直的应用场景，其工程复杂度和算力需求是否与性能增益完全匹配，值得商榷。另外，生成的“合成临床音频”虽然用于训练有效，但缺乏真实生理细节的验证，其临床保真度仍需医生在严格双盲测试中评判。

📌 **核心摘要**

1.  **要解决的问题**：深度学习在呼吸音分析中面临两大挑战：一是将音频信号转为频谱图会导致瞬态事件（如啰音）的信息损失；二是缺乏大规模、高质量的多模态（音频+临床文本）标注数据，且存在严重的类别不平衡。
2.  **方法核心**：提出Resp-Agent，一个由中央控制器（Thinker-A2CA）编排的多智能体闭环系统。该系统能主动分析诊断器的弱点，并调度生成器进行针对性合成，从而将诊断与生成任务统一。诊断器采用“模态编织”将文本与音频token融合，并用稀疏音频锚点捕捉瞬态事件；生成器采用两阶段设计，先用LLM在文本诊断和参考音频风格条件下生成离散音频单元，再用流匹配解码器重建波形。
3.  **新在何处**：1) **系统范式**：首次将呼吸音的分析（诊断）和生成整合到一个由LLM驱动的闭环智能体框架中。2) **诊断器架构**：提出基于稀疏全局注意力的“模态编织”和“音频锚点”机制，实现高效且精细的文本-音频跨模态对齐。3) **生成器设计**：将文本LLM改造为可控的多模态音频单元生成器，并采用流匹配进行波形重建。4) **基准数据**：构建并开源了首个大规模、多来源、跨机构的多模态呼吸音基准Resp-229k（22.9万条记录）。
4.  **主要实验结果**：在ICBHI基准上，Resp-Agent的诊断性能（ICBHI Score 72.7%）超越先前最佳音频模型超过5个百分点。在自建的跨机构Resp-229k基准上，使用Thinker指导合成的平衡数据后，多模态诊断器的宏观F1从0.212大幅提升至0.598，证实了闭环生成策略的有效性。生成器在可控性（风格/内容解耦）和保真度（FAD 1.13）上也优于强基线（如微调的StableAudio Open）。关键实验结果见下表：

| 模型/方法 | 数据集 | 指标 | 原始（不平衡） | 平衡后 |
| :--- | :--- | :--- | :--- | :--- |
| **诊断器对比** | | | | |
| Conformer (音频基线) | Resp-229k Test-CD | Macro-F1 | 0.1935 | 0.5360 |
| **Resp-Agent Diagnoser (Ours)** | Resp-229k Test-CD | Macro-F1 | 0.2118 | **0.5980** |
| **生成器策略对比** | | | | |
| No-Synth (基线) | Resp-229k Test-CD | Macro-F1 | 0.212 | - |
| Class-Prior Rebalancing | Resp-229k Test-CD | Macro-F1 | - | 0.512 |
| **Thinker-A2CA (Ours)** | Resp-229k Test-CD | Macro-F1 | - | **0.598** |
| **生成器音频保真度对比** | | | | |
| StableAudio Open (微调) | 个体化重建 | FAD ↓ | 1.54 | - |
| **Resp-Agent Generator (Ours)** | 个体化重建 | FAD ↓ | **1.13** | - |

5.  **实际意义**：为数据稀缺且不平衡的医疗音频分析提供了一种强大的范式，即通过智能体驱动的闭环生成来主动构建更鲁棒的模型。开源的Resp-229k基准和代码将加速呼吸音领域的多模态研究。
6.  **主要局限性**：1) 系统复杂度高，涉及多个大模型的训练与协调。2) 生成的合成音频虽用于训练有效，但其真实性和临床细节（如相位、微结构）仍需更严格的评估。3) 评估主要集中在诊断性能，对生成音频的直接临床效用（如用于教学或模拟）验证不足。

---

### 7. [PrismAudio: Decomposed Chain-of-Thought and Multi-dimensional Rewards for Video-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-04-prismaudio-decomposed-chain-of-thought-and-multi)

🔥 **9.0/10** | 前10% | #音频生成 | #强化学习 | #扩散模型 #流匹配

👥 **作者与机构**

- 第一作者：Huadai Liu（香港科技大学; 阿里巴巴通义团队）
- 通讯作者：Wei Xue（香港科技大学）
- 作者列表：Huadai Liu（香港科技大学; 阿里巴巴通义团队）、Kaicheng Luo（阿里巴巴通义团队）、Wen Wang（阿里巴巴通义团队）、Qian Chen（阿里巴巴通义团队）、Peiwen Sun（香港中文大学）、Rongjie Huang（香港中文大学）、Xiangang Li（阿里巴巴通义团队）、Jieping Ye（阿里巴巴通义团队）、Wei Xue（香港科技大学）

💡 **毒舌点评**

**亮点**：论文首次将强化学习与分解式思维链（CoT）相结合，应用于视频到音频生成，巧妙地将一个复杂的多目标优化问题分解为四个可解释、可优化的维度，并提供了高效训练算法（Fast-GRPO）和高质量评测基准（AudioCanvas）。**短板**：该框架高度依赖一个强大的多模态语言模型（如VideoLLaMA2）来生成高质量的CoT训练数据，且音频基础模型本身也采用了多种现有先进组件（如VideoPrism、T5-Gemma），其“从零到一”的原创性贡献相对有限。

🔗 **开源详情**

- **代码**：论文承诺将公开完整代码，但未提供具体仓库链接。
- **模型权重**：论文承诺将公开所有模型权重。
- **数据集**：论文承诺将公开自建的AudioCanvas基准测试集。
- **Demo**：论文中未提及在线演示链接。
- **复现材料**：论文提供了非常详细的附录，包括训练细节、超参数、资源需求、CoT生成Prompt等，复现信息充分。
- **论文中引用的开源项目**：依赖的开源项目/模型包括：Stability AI的VAE、VideoPrism、T5-Gemma、VideoLLaMA2、MS-CLAP、Synchformer、Meta Audiobox Aesthetics、StereoCRW、Gemini 2.5 Pro（用于数据生成）。

📌 **核心摘要**

本文针对视频到音频（V2A）生成任务中存在的“目标纠缠”（语义、时序、美学、空间等目标相互冲突）和缺乏人类偏好对齐的问题，提出了PrismAudio框架。其核心方法是将单一的推理路径分解为四个专门的CoT模块（语义、时序、美学、空间），并为每个模块设计对应的奖励函数，通过多维强化学习进行联合优化。与现有方法相比，新在：1）首次在V2A中整合分解CoT与多维RL；2）提出Fast-GRPO算法，通过混合ODE-SDE采样大幅降低训练开销；3）构建了更严谨的AudioCanvas基准测试集（包含300类单事件和501个多事件场景）。实验结果表明，在VGGSound测试集上，PrismAudio在语义一致性（CLAP: 0.47 vs. 0.43）、时序同步性（DeSync: 0.41 vs. 0.55）和空间准确性（CRW: 7.72 vs. 13.47）等指标上均优于此前SOTA的ThinkSound，并在主观评测中获得最高MOS分数。其实际意义在于为V2A生成提供了一个可解释、可精细控制且对齐人类偏好的新范式。主要局限性在于训练过程依赖LLM生成的CoT数据和多阶段训练，计算成本较高。

---

### 8. [JavisDiT++: Unified Modeling and Optimization for Joint Audio-Video Generation](/audio-paper-digest-blog/posts/2026-05-04-javisdit-unified-modeling-and-optimization-for)

🔥 **9.0/10** | 前25% | #音视频 | #流匹配 | #扩散模型 #多模态模型

👥 **作者与机构**

- 第一作者：Kai Liu (浙江大学)
- 通讯作者：Hao Fei (新加坡国立大学)
- 作者列表：
    - Kai Liu (浙江大学)
    - Yanhao Zheng (未说明)
    - Kai Wang (多伦多大学)
    - Shengqiong Wu (新加坡国立大学)
    - Rongjunchen Zhang (HiThink Research)
    - Jiebo Luo (罗切斯特大学)
    - Dimitrios Hatzinakos (多伦多大学)
    - Ziwei Liu (南洋理工大学)
    - Hao Fei (新加坡国立大学)
    - Tat-Seng Chua (新加坡国立大学)

💡 **毒舌点评**

这篇论文的亮点在于提出了一个极其简洁有效的统一架构（MS-MoE）和精确的时间对齐策略（TA-RoPE），以相对较低的模型参数（2.1B）和数据量（~1M）达到了接近商业模型（Veo3）的SOTA性能。短板是其核心贡献高度依赖特定的视频生成骨干（Wan2.1），这虽然加速了研发，但也意味着其音视频联合生成的泛化能力与独立性有待进一步验证，且其对训练数据质量与分布的敏感性（见消融研究）暗示了在开放域场景下的潜在挑战。

📌 **核心摘要**

本文旨在解决现有开源联合音视频生成（JAVG）模型在生成质量、音视频时序同步性以及与人类偏好对齐方面落后于商业模型（如Veo3）的问题。其核心方法是构建一个基于Wan2.1视频生成模型的统一DiT框架，主要创新包括：1）采用**模态特定专家混合（MS-MoE）**设计，通过共享注意力层促进模态交互，同时使用独立的FFN增强单模态生成质量；2）提出**时间对齐旋转位置编码（TA-RoPE）**，在位置ID的第0维度强制对齐音频和视频token，实现显式的帧级时间同步；3）首次将**人类偏好对齐**引入JAVG领域，设计了**音视频直接偏好优化（AV-DPO）**，利用多奖励模型构建偏好数据，统一提升生成质量、一致性与同步性。与已有方法相比，该架构更简洁高效，避免了复杂的双流设计或拼接策略。实验表明，在仅使用约100万条公开数据训练后，JavisDiT++在JavisBench基准的多个维度（质量、一致性、同步性）上显著优于JavisDiT和UniVerse-1，达到了开源SOTA水平。其实际意义在于为原生联合音视频生成建立了一个高效且性能强大的基线，推动了该领域的研究。主要局限性包括：模型性能对特定视频骨干和训练数据质量/多样性有较强依赖；当前仅支持文本到音视频生成，可控性与任务扩展性有待探索。

---

### 9. [PACE: Pretrained Audio Continual Learning](/audio-paper-digest-blog/posts/2026-05-04-pace-pretrained-audio-continual-learning)

🔥 **9.0/10** | 前10% | #音频分类 | #持续学习 | #预训练 #自监督学习

👥 **作者与机构**

- 第一作者：Chang Li (清华大学心理与认知科学系)
- 通讯作者：Liyuan Wang (liyuanwang@tsinghua.edu.cn， 清华大学心理与认知科学系)
- 作者列表：Chang Li*（清华大学心理与认知科学系）、Kanglei Zhou*（清华大学心理与认知科学系）、Liyuan Wang†（清华大学心理与认知科学系）
（注：*表示共同第一作者，†表示通讯作者）

💡 **毒舌点评**

**亮点**：这是一篇问题定义清晰、实验极其扎实的“工程科学”论文。它首次将音频持续学习（ACL）问题系统化，并通过精巧的分析（如图1、图3）揭示了音频域与视觉域CL的根本差异，提出的PACE方法在6个差异巨大的基准上均显著刷新SOTA，特别是将性能逼近了联合训练上界。
**短板**：方法设计虽然有效，但各模块（改进FSA、子空间正交PEFT、边界感知扰动）组合起来略显复杂，调参空间可能不小。此外，对于计算资源敏感的场景，其多会话自适应（MSA）阶段的额外开销是否总能接受，论文讨论略显不足。

🔗 **开源详情**

- **代码**：论文中提及“we will release all constructed benchmarks and reproduced baselines along with our codebase upon acceptance”，但未在当前文本提供具体代码仓库链接。
- **模型权重**：未提及公开预训练EAT模型的权重获取方式（可能默认为已有公开模型）。
- **数据集**：论文构建的CL基准分割将随代码发布。原始数据集（ESC-50, US8K等）均为公开可用。
- **Demo**：未提及在线演示。
- **复现材料**：提供了详细的超参数设置（表5）、训练硬件（NVIDIA A800 GPU）、关键算法伪代码（Algorithm 1）以及大量的消融实验结果和敏感性分析，复现细节充分。
- **引用的开源项目**：论文依赖或对比的开源项目包括：EAT模型、SSLAM模型、RanPAC、ACL、L2P、DualPrompt等持续学习基线方法。

📌 **核心摘要**

本文针对**预训练音频模型在数据分布动态变化的现实场景中面临灾难性遗忘**的问题，首次系统研究了音频持续学习（Audio Continual Learning， ACL）。论文的核心工作包括：
1.  **问题诊断**：通过构建涵盖粗粒度（环境声、关键词）和细粒度（说话人、乐器）的6个音频CL基准，发现直接迁移视觉CL方法（如基于PEFT的L2P、DualPrompt）在音频上性能严重下降，根源在于**音频骨干网络（如EAT）强调低层频谱细节而非高层语义，导致严重的上游-下游任务不匹配和跨会话表示偏移**（如图1(a)所示，表示偏移远大于类间距离）。
2.  **方法创新**：提出**PACE（Pretrained Audio Continual lEarning）** 框架。其核心是**阶段式对齐**：(1) **改进的第一会话自适应（FSA）**：仅微调骨干网络的深层（通过CKA确定边界），并采用非对称训练策略（低头学习率、先训头后冻头），最后替换为解析分类器，在粗粒度任务上有效利用预训练知识并避免表示饱和。(2) **自适应多会话子空间正交PEFT（MSA）**：在后续会话中，通过LoRA减法和梯度投影，将参数更新约束在旧表示的零空间内，实现可控的骨干网络适应，平衡稳定性与可塑性。(3) **边界感知正则化**：通过对输入音频进行时频掩码扰动生成“边界样本”，并设计损失函数将特征拉向类中心、推离边界点，增强类内紧凑性和类间可分性。
3.  **结果**：在6个基准上，**PACE一致显著优于所有基线**。例如，在细粒度TIMIT-2上，PACE（90.95%）比最强基线RanPAC（85.63%）高出+5.32%，仅比联合训练上界（95.22%）低4.27%；在VocalSet上，PACE（69.08%）比SOTA高出+6.26%，比联合训练（76.65%）低7.57%。
4.  **意义与局限**：PACE为构建鲁棒、可扩展的预训练音频CL系统提供了有效方案。局限在于其多阶段适应策略可能增加训练时间（尽管论文在附录E.4中证明其效率仍优于多数PEFT基线），且主要验证于EAT和SSLAM两个骨干，对更多架构的泛化性有待探索。

---

### 10. [FlexiCodec: A Dynamic Neural Audio Codec for Low Frame Rates](/audio-paper-digest-blog/posts/2026-05-04-flexicodec-a-dynamic-neural-audio-codec-for-low)

🔥 **9.0/10** | 前10% | #语音合成 | #自监督学习 | #流匹配 #多语言

👥 **作者与机构**

- 第一作者：Jiaqi Li（香港中文大学（深圳）、微软）
- 通讯作者：未明确说明
- 作者列表：Jiaqi Li（香港中文大学（深圳）、微软）、Yao Qian（微软）、Yuxuan Hu（微软）、Leying Zhang（上海交通大学）、Xiaofei Wang（微软）、Heng Lu（微软）、Manthan Thakker（微软）、Jinyu Li（微软）、Sheng Zhao（微软）、Zhizheng Wu（香港中文大学（深圳）、深圳湾实验室、澳门城市大学、Amphion Technology Co., Ltd.）

💡 **毒舌点评**

FlexiCodec在极低帧率（3-12.5Hz）下实现了高质量的语音重建和强大的语义保持，其动态帧率分配策略被实验数据强力支持，显著优于将现有固定帧率模型强行降低帧率的做法。然而，论文在评估模型对真实世界复杂场景（如强背景噪声、多人重叠说话）的鲁棒性方面着墨较少，且多语言泛化能力的验证仅限于微调，这可能是未来需要深入探索的方向。

🔗 **开源详情**

- **代码**：提供代码仓库链接：https://github.com/amphionteam/flexicodec
- **模型权重**：论文中提及“Code is available at”，结合项目主页链接（https://flexicodec.github.io），通常意味着会开源模型权重。论文中已提供中文微调模型“FlexiCodec-ZH tune”。
- **数据集**：训练使用公开的Librilight-Large数据集。评估使用公开的LibriSpeech、TIMIT和Emilia数据集。
- **Demo**：提供在线演示页面：https://flexicodec.github.io
- **复现材料**：提供了极其详细的训练配置（优化器、学习率、批大小、步数、硬件）、模型超参数（层数、维度、码本大小、Transformer配置）、损失函数、评估指标、基线模型重训练细节以及消融实验设置。附录部分包含大量补充信息。
- **引用的开源项目**：SenseVoice-Small（ASR特征提取）、DAC（编解码器基础架构）、Vocos（TTS声码器）、Amphion工具包。

📌 **核心摘要**

1. **要解决什么问题**：传统高帧率神经音频编解码器会导致语音语言模型序列过长，计算成本高。现有低帧率（如12.5Hz）编解码器在进一步降低帧率时会严重丢失语义信息，限制了下游任务性能。
2. **方法核心是什么**：本文提出FlexiCodec，一种采用动态帧率的低比特率神经音频编解码器。其核心是利用预训练ASR模型提取的语义特征来指导帧合并，自适应地在语音信息稀疏区域（如静音、长元音）减少帧数，在信息密集区域保留更多细节。模型采用双流编码（ASR特征流+波形特征流）、Transformer瓶颈模块进行帧合并/解合并，并使用有限标量量化（FSQ）进行语义token化。
3. **与已有方法相比新在哪里**：FlexiCodec是首个在低于10Hz平均帧率下实现高质量、可重构语音的编解码器之一。其创新在于：(1) **动态帧率分配**：打破了固定帧率的限制，允许在推理时通过阈值连续控制帧率（3-12.5Hz）；(2) **ASR特征引导语义编码与合并**：使用更具语义集中性的ASR特征（而非SSL特征）同时用于语义量化和指导合并过程，提升了语义保持；(3) **创新的帧合并/解合并模块**：引入Transformer对合并前后的序列进行精细化处理，减少伪影。
4. **主要实验结果如何**：
    *   在核心语义测试中（RVQ-1 WER），FlexiCodec��6.25Hz平均帧率下WER为4.15%，远优于重训练的基线DualCodec（31.5%）和DAC（88.2%）。对比表5显示，其在语义保持上也优于许多更高帧率的编解码器。
    *   在音频质量上（PESQ, UTMOS等），FlexiCodec在不同比特率类别下均取得最优或接近最优的成绩。
    *   下游TTS实验表明，FlexiCodec-TTS（6.25Hz AR）在WER（3.2%）和主观评分（NMOS 3.32, QMOS 3.40）上与CosyVoice等强基线相当，但自回归阶段加速高达7.3倍。
    *   消融研究证实，动态帧率策略在6.25Hz下能将RVQ-1 WER相对提升26%，ASR特征相比SSL特征在低帧率下具有决定性优势（WER从27.3%降至4.15%）。

| 模型 | 帧率 (Hz) | WER(RVQ1) ↓ | WER(RVQ1:8) ↓ | PESQ ↑ | UTMOS ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| DualCodec (重训练) | 6.25 | 31.5 | 3.42 | 2.74 | 4.08 |
| **FlexiCodec** | **6.25** | **4.15** | **2.53** | **2.76** | **4.18** |
| FlexiCodec (无动态帧率) | 6.25 | 5.22 | 2.73 | 2.76 | 4.18 |
5. **实际意义是什么**：FlexiCodec通过显著降低音频token帧率，为构建更高效、低延迟的语音语言模型和语音合成系统提供了关键基础技术。其动态、可控的帧率设计为适应不同计算资源和应用场景提供了灵活性。
6. **主要局限性是什么**：论文未充分探讨在极端噪声或高度重叠语音等复杂声学场景下的性能；多语言支持依赖于在特定语言上微调，零样本跨语言语义保持能力有限；动态帧率合并过程的可解释性虽有可视化，但合并决策的边界条件与语音语言学单位的精确对应关系仍需深入研究。

---

### 11. [CTC-DRO: Robust Optimization for Reducing Language Disparities in Speech Recognition](/audio-paper-digest-blog/posts/2026-05-04-ctc-dro-robust-optimization-for-reducing-language)

🔥 **9.0/10** | 前25% | #语音识别 | #鲁棒性 | #多语言 #自监督学习

👥 **作者与机构**

- 第一作者：Martijn Bartelds (斯坦福大学计算机科学系) & Ananjan Nandi (斯坦福大学计算机科学系)，并列第一作者
- 通讯作者：Martijn Bartelds (bartelds@stanford.edu) & Ananjan Nandi
- 作者列表：Martijn Bartelds (斯坦福大学计算机科学系)、Ananjan Nandi (斯坦福大学计算机科学系)、Moussa Koulako Bala Doumbouya (斯坦福大学计算机科学系)、Dan Jurafsky (斯坦福大学计算机科学系)、Tatsunori Hashimoto (斯坦福大学计算机科学系)、Karen Livescu (丰田技术学院芝加哥分校)

💡 **毒舌点评**

亮点：论文精准地戳中了将标准Group DRO应用于CTC损失时“损失值不可比”这一致命痛点，并设计了“长度匹配+平滑目标”这套组合拳来解决，理论分析扎实，实验结果显著（最差语言CER降低高达47.1%）。短板：方法虽然有效，但“平滑最大化目标”的启发式成分较重（α参数），其理论最优性证明有限；此外，“长度匹配”依赖一个目标时长的超参数，其敏感性分析在附录中，可能限制其在新场景的即插即用性。

🔗 **开源详情**

- **代码**：是，提供GitHub仓库链接：https://github.com/Bartelds/ctc-dro
- **模型权重**：是，论文中提到“新训练的模型”已公开提供。
- **数据集**：否，使用的是公开的ML-SUPERB 2.0基准，论文本身未发布新数据集。
- **Demo**：论文中未提及在线演示。
- **复现材料**：非常充分。论文详细描述了算法（算法1）、实验设置（第4节）、超参数选择范围（开发集调优）、硬件信息（NVIDIA A6000）以及训练时间（附录表22）。所有语言集的具体构成见附录表4和表17。
- **引用的开源项目**：论文基于并引用了**XLS-R**和**MMS**预训练模型及其相关代码库。评估使用了**ML-SUPERB 2.0**基准工具链。
- 论文中明确提供了开源信息。

📌 **核心摘要**

本文针对多语言自动语音识别（ASR）中普遍存在的语言间性能差异问题，分析了标准组分布鲁棒优化（Group DRO）方法失效的原因。核心问题在于，广泛使用的连接主义时序分类（CTC）损失值受输入序列长度以及语言的语音、文本特性影响，导致不同语言组的训练损失值不可直接比较，从而使得Group DRO的权重更新机制失效。为此，论文提出了CTC-DRO方法。其核心创新有二：一是设计了长度匹配的批处理策略，通过确保每个语言组的训练批次具有相似的总音频时长来缓解CTC损失的长度缩放效应；二是提出了平滑最大化目标，通过修改组权重更新公式（引入平滑参数α），防止对持续高损失的语言组过度赋权，从而稳定训练过程。在ML-SUPERB 2.0基准上的大量实验表明，CTC-DRO持续优于基线模型和原始Group DRO，在五个语言集上将最差语言的字符错误率（CER）最高降低了47.1%，平均CER最高降低了32.9%，同时几乎不损害最佳语言的性能。该方法计算开销小，有望应用于其他存在组损失不可比问题的序列建模任务。

---

### 12. [The Deleuzian Representation Hypothesis](/audio-paper-digest-blog/posts/2026-05-04-the-deleuzian-representation-hypothesis)

🔥 **8.5/10** | 前25% | #模型可解释性 | #概念提取 | #对比学习 #自监督学习

👥 **作者与机构**

- 第一作者：Clément Cornet (Université Paris-Saclay, CEA, List)
- 通讯作者：Clément Cornet (论文未明确标注通讯作者，根据单位信息推断)
- 作者列表：Clément Cornet (Université Paris-Saclay, CEA, List)、Romaric Besançon (Université Paris-Saclay, CEA, List)、Hervé Le Borgne (Université Paris-Saclay, CEA, List)

💡 **毒舌点评**

这篇论文将哲学思想（德勒兹的差异论）包装成了一个工程上简洁、实验上有效的概念提取新范式，确实超越了现有稀疏自编码器方法。其核心创新——聚类激活差异而非重建激活——思路清晰且有启发性。但最大的短板在于其评估高度依赖现有的有标签数据集（用于计算探针损失），对于真正无监督的、超越已知属性的“新概念”发现能力缺乏评估框架，且对语音/音频任务本身的方法论贡献有限。

🔗 **开源详情**

- **代码**：提供。论文明确给出了代码仓库链接：https://github.com/ClementCornet/Deleuzian-Hypothesis。
- **模型权重**：未提及。论文未公开其提取的概念向量词典或修改后的模型权重。
- **数据集**：论文使用的数据集（ImageNet, WikiArt, IMDB, CoNLL-2003, AudioSet）均为公开数据集，并在附录B中给出了获取信息。
- **Demo**：未提及。
- **复现材料**：提供了详尽的复现信息，包括实现细节（附录A：所有基线方法的超参数设置）、实验设置细节（附录B：数据集描述、模型版本、数据划分）、以及方法核心代码。
- **引用的开源项目**：论文引用了多个开源项目/模型作为基线或工具，包括：scikit-learn (用于ICA)、ViT-Prisma (预训练SAE)、EleutherAI (预训练SAE)、OpenClip (CLIP实现)、PyTorch Hub (DinoV2)、HuggingFace上的多个模型（DeBERTa, BART, Pythia, AST）。

📌 **核心摘要**

1.  **问题**：现有的稀疏自编码器（SAE）在提取神经网络内部可解释概念时面临训练困难、特征多义性以及依赖稀疏性作为可解释性代理等问题，需要一种更简单、更直接的概念提取方法。
2.  **方法核心**：提出“德勒兹表征假说”，将概念定义为激活空间中数据样本之间的“差异”。具体方法是：随机采样激活差异向量，然后使用带有偏度逆权重（以促进多样性）的K-means聚类算法对这些差异进行聚类，聚类中心即为概念向量。
3.  **与已有方法的对比**：与主流SAE方法（如重建+稀疏）不同，本方法不进行激活重建，而是直接识别和聚类“重复出现的差异”。它被形式化为一种无监督的判别分析，并在保持概念向量位于原始激活空间（便于无损引导）的同时，仅需一个可解释的超参数（概念数量k）。
4.  **主要实验结果**：在涵盖视觉、语言、音频三个模态的五个模型和五个数据集上进行了广泛评估。结果显示，在探针损失（Probe Loss）指标上，该方法在13/20个任务中超越了所有SAE变体，其表现接近有监督的线性判别分析（LDA）基线。在跨运行一致性（MPPC）上也表现优异。关键实验数据对比如下表所示：
    
    | 方法 | CLIP (WikiArt Artist) | DinoV2 (WikiArt Artist) | DeBERTa (CoNLL-2003 NER) | BART (CoNLL-2003 POS) | AST (AudioSet) | 平均排名 ↓ |
    | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
    | **Deleuzian (Ours)** | **0.0119** | **0.0055** | **0.0665** | **0.2148** | **0.0164** | **1.65±0.85** |
    | Tk-SAE | 0.0125 | 0.0096 | 0.0839 | 0.3478 | 0.0169 | 2.65±1.01 |
    | A-SAE | 0.0130 | 0.0143 | 0.0775 | 0.3754 | 0.0169 | 3.20±1.72 |
    | LDA (监督基线) | 0.0084 | 0.0044 | 0.0429 | 0.6326 | 0.0164 | - |
5.  **实际意义**：提供了一种更简洁、可解释性更强的概念提取工具，可用于分析模型内部表征、进行概念引导（Steering）以可控地修改模型行为（如图像风格迁移、文本生成控制），为理解和调试大规模神经网络提供了新途径。
6.  **主要局限性**：方法的评估依赖于带有语义标签的数据集，可能无法评估与已知标签无关的“新颖”概念。假设概念可在线性方向上表示，这一假设可能在某些模型中不成立。引导效果虽为定性展示，但系统性量化仍需更多研究。

---

### 13. [STITCH: Simultaneous Thinking and Talking with Chunked Reasoning for Spoken Language Models](/audio-paper-digest-blog/posts/2026-05-04-stitch-simultaneous-thinking-and-talking-with)

🔥 **8.5/10** | 前25% | #语音对话系统 | #流式处理 | #自回归模型 #语音大模型

👥 **作者与机构**

- 第一作者：Cheng-Han Chiang（National Taiwan University， Microsoft GenAI）
- 通讯作者：Xiaofei Wang（Microsoft）
- 作者列表：Cheng-Han Chiang（National Taiwan University, Microsoft）， Xiaofei Wang（Microsoft）， Linjie Li（Microsoft）， Chung-Ching Lin（Microsoft）， Kevin Lin（Microsoft）， Shujie Liu（Microsoft）， Zhendong Wang（Microsoft）， Zhengyuan Yang（Microsoft）， Hung-yi Lee（National Taiwan University）， Lijuan Wang（Microsoft）

💡 **毒舌点评**

亮点在于将人类“边想边说”的模式形式化为一个可计算的交错生成框架，并在几乎不增加首包延迟的前提下显著提升了数学推理任务的准确率，堪称“偷时间”的艺术。短板在于对生成的“思考链”本身的质量和可靠性缺乏更深入的分析，且实验场景集中于英文数学题，对更复杂对话场景的泛化能力有待验证。

🔗 **开源详情**

- **代码**：论文提供了项目主页链接 `https://d223302.github.io/STITCH`，但未明确说明完整代码库的开源链接。论文中提到使用LlamaFactory进行微调。
- **模型权重**：未提及公开发布微调后的STITCH模型权重。
- **数据集**：论文中用于微调和测试的部分数据集（如语音数学数据）已发布在Hugging Face (`https://huggingface.co/datasets/dcml0714/speech_math`)，但完整的训练数据集（约40万条）未整体公开，需按论文描述的步骤从原始数据集构建。
- **Demo**：项目主页包含动画和演示。
- **复现材料**：附录中提供了详细的训练YAML配置、数据构造prompt、评估脚本等，复现细节较为透明。
- **引用的开源项目**：LlamaFactory (LlamaFactory)， GLM-4-Voice (THUDM/glm-4-voice-9b)， Cosyvoice (语音解码器)， Whisper (用于转写评估)， Kimi-Audio-Evalkit (OpenAudioBench评估)。

📌 **核心摘要**

这篇论文旨在解决当前语音语言模型（SLM）缺乏内部推理能力的问题。人类在说话前通常会进行内部思考，而现有SLM直接生成回答。作者提出了STITCH方法，通过交替生成不发声的推理token块和可发声的文本-语音token块，实现了SLM的“同时思考和说话”。其核心创新在于利用语音解码器播放一个音频块（tchunk秒）所需的时间，远长于模型生成该块对应token所需的时间（ttoken秒），因此模型可以利用播放时的“空闲时间”生成下一个推理块，从而将推理延迟隐藏在语音播放过程中。与传统方法“先完整推理再说话”相比，STITCH显著降低了延迟；与不推理的基线相比，在五个数学推理数据集上准确率平均提升超过15%，同时在非推理任务上性能相当。例如，在GSM8K数据集上，STITCH-S的准确率（56.72%）远高于无推理基线（35.73%）。其实际意义在于为构建更智能、响应更及时的语音对话系统提供了新思路。主要局限性是推理链的质量和完整性依赖于训练数据构造，且当前实验环境相对单一。

---

### 14. [Incentivizing Consistent, Effective and Scalable Reasoning Capability in Audio LLMs via Reasoning Process Rewards](/audio-paper-digest-blog/posts/2026-05-04-incentivizing-consistent-effective-and-scalable)

🔥 **8.5/10** | 前10% | #音频问答 | #强化学习 | #音频大模型 #推理

👥 **作者与机构**

- 第一作者：Jiajun Fan (伊利诺伊大学厄巴纳-香槟分校 Siebel 计算与数据科学学院)
- 通讯作者：未说明
- 作者列表：Jiajun Fan (伊利诺伊大学厄巴纳-香槟分校)，Roger Ren (Amazon)，Jingyuan Li (Amazon)，Rahul Pandey (Amazon)，Prashanth Gurunath Shivakumar (Amazon)，Ivan Bulyko (Amazon)，Ankur Gandhe (Amazon)，Ge Liu (伊利诺伊大学厄巴纳-香槟分校)，Yile Gu (Amazon)

💡 **毒舌点评**

亮点在于系统性地诊断并解决了音频LLM推理的“测试时逆缩放”这一实际且重要的“反直觉”现象，并建立了一套从过程奖励到可扩展能力的完整方法论。短板是其基于GRPO的在线强化学习训练计算成本高昂（需要8块H200训练61小时），且多奖励组件的超参数调节（如α权重）虽经实验验证，但给实际复现增加了一定复杂度。

🔗 **开源详情**

- **代码**：论文中明确承诺“所有源代码和训练模型将在出版后公开”，但当前未提供具体链接。
- **模型权重**：论文承诺公开训练好的模型权重，未提供具体链接。
- **数据集**：使用AVQA数据集进行训练，该数据集是公开的。论文通过模板进行了数据增强，增强模板在附录中说明。
- **Demo**：论文中未提及在线演示。
- **复现材料**：提供了极其详尽的复现指南，包括：完整的算法伪代码（附录C）、详细的训练超参数（附录B.4）、奖励函数计算细节及关键词列表（附录B.6）、评估基准说明、硬件信息等。复现材料非常充分。
- **论文中引用的开源项目**：基于Qwen2.5-Omni-7B模型进行训练，其基线代码参考了Ke-Omni-R的开源实现。

📌 **核心摘要**

本文针对音频大语言模型（Audio LLMs）在引入链式思维（CoT）推理时性能反而下降的“测试时逆缩放”问题进行了深入研究。作者指出，问题根源不在于推理本身，而在于现有训练方法（监督微调或仅基于结果正确性的强化学习）未能对推理过程进行有效监督，导致模型产生幻觉、不一致且逻辑混乱的推理链。为此，论文提出了CESAR（Consistent, Effective, and Scalable Audio Reasoners）框架，其核心创新在于将强化学习的优化目标从仅关注答案正确性（结果奖励）扩展为同时激励推理过程的一致性、结构化模式、因果逻辑、领域知识整合以及推理深度的合理性（过程奖励），并使用GRPO算法进行在线训练。与仅使用结果奖励的基线方法（如Ke-Omni-R）相比，CESAR不仅解决了测试时逆缩放问题，还使推理链长度与性能呈现积极的缩放关系，并发现了模型特定的“推理甜点”。实验表明，CESAR在MMAU Test-mini基准上达到77.1%的准确率，超越了GPT-4o Audio（62.5%）和Gemini 2.5 Pro（71.6%），在MMSU推理任务上达到近人类水平（81.07%），并通过人类评估和AI评判证实了其推理质量的显著提升。论文还揭示了推理能力提升对模型感知能力的协同增强作用。主要局限性在于训练计算开销大，且当前音频模型的性能瓶颈已部分转移至基础感知能力。

---

### 15. [Tell me Habibi, is it Real or Fake?](/audio-paper-digest-blog/posts/2026-05-04-tell-me-habibi-is-it-real-or-fake)

🔥 **8.5/10** | 前25% | #音视频深度伪造检测 | #数据集 | #多语言 #零样本

👥 **作者与机构**

- 第一作者：Kartik Kuckreja (MBZUAI)
- 通讯作者：未明确标注，但通讯邮箱主要为 kartik.kuckreja@mbzuai.ac.ae 和 parul@monash.edu
- 作者列表：Kartik Kuckreja (MBZUAI)、Parul Gupta (Monash University)、Injy Hamed (MBZUAI)、Thamar Solorio (MBZUAI)、Muhammad Haris Khan (MBZUAI)、Abhinav Dhall (Monash University)

💡 **毒舌点评**

**亮点**：该论文精准地击中了当前深度伪造检测领域的一个重大盲点——对多语言，尤其是像阿拉伯语这样广泛使用“代码切换”的语言场景的忽视，并为此构建了迄今规模最大、最复杂的专用数据集，为社区提供了极具价值的“练兵场”。**短板**：论文的重点在于“提出问题”和“提供工具”，而在于“解决问题”（即提出更先进的检测模型）方面着墨较少，其提出的检测方法仅为现有模型的基准测试。数据集生成依赖于GPT-4.1-mini等模型，其指令跟随的局限性可能导致部分“语义+翻译”模式的伪造文本语义变化不足，作者也承认了这一点。

🔗 **开源详情**

- **代码**：论文中未提及具体的代码仓库链接，但声明“Data-generation code and evaluation scripts will be made public”。
- **模型权重**：论文中未提及公开生成管道所用的TTS和唇形同步模型的具体权重链接，这些模型均为第三方已发表模型。
- **数据集**：论文明确声明“The dataset is public.”，并提供了访问需要签署的EULA协议图示。
- **Demo**：未提及。
- **复现材料**：论文提供了生成管道的详细描述、文本篡改的提示示例（附录A.6）、数据分布图表、以及评估协议。但超参数、具体配置文件等未在文中给出。
- **论文中引用的开源项目**：XTTS-v2, OpenVoice-v2, Fairseq, Diff2Lip, LatentSync, Whisper, YOLO-v5, wav2vec2, Jais-3B, Qwen-2.5-7B等。

📌 **核心摘要**

这篇论文旨在解决深度伪造检测研究中对多语言，特别是阿拉伯语-英语“代码切换”（在同一次话语中混合使用两种语言）场景严重忽视的问题。为解决此问题，论文提出了一个全新的核心贡献：构建并开源了首个大规模的阿拉伯语-英语音视频深度伪造数据集 **ArEnAV**。该数据集包含约38.7万个视频（超过765小时），通过一个创新的生成管道创建，该管道整合了多个文本转语音（TTS）和唇形同步模型，并利用GPT-4.1-mini进行8种不同规则的文本篡改，以模拟真实世界的代码切换和方言变体。与现有的多语言数据集（如PolyGlotFake）相比，ArEnAV首次专注于并显式生成“句内代码切换”的伪造内容。实验表明，当前最先进的深度伪造检测模型在ArEnAV上的性能出现断崖式下跌（例如，BA-TFD+模型的AP@0.5从AV-1M上的44.42%降至3.74%），甚至人类参与者的检测准确率也仅为60%，这证明了该数据集的挑战性和新场景的真实性。该工作的实际意义在于为开发更鲁棒、适用于全球多语言环境的深度伪造检测系统提供了必需的基准资源。主要局限性包括：数据生成管线依赖现有ASR和LLM，可能导致转录噪声和语义变化不足；数据集目前仅覆盖阿拉伯语和英语两种语言。

---

### 16. [A Hidden Semantic Bottleneck in Conditional Embeddings of Diffusion Transformers](/audio-paper-digest-blog/posts/2026-05-04-a-hidden-semantic-bottleneck-in-conditional)

🔥 **8.5/10** | 前25% | #图像生成 | #扩散模型 | #多任务学习 #模型评估

👥 **作者与机构**

- 第一作者：Trung X. Pham（韩国科学技术院，KAIST）
- 通讯作者：Chang D. Yoo（韩国科学技术院，KAIST）
- 作者列表：Trung X. Pham（KAIST）、Kang Zhang（KAIST）、Ji Woo Hong（KAIST）、Chang D. Yoo（KAIST）

💡 **毒舌点评**

本文首次系统性地揭示了扩散Transformer条件嵌入中高达99%的角相似性和超过66%的维度冗余，这是一个反直觉且重要的发现，为模型压缩和条件机制设计指明了新方向。但遗憾的是，论文对“为何如此”的理论解释仍停留在假设阶段（如“训练动态导致稳定信号”），缺乏更深入的数学分析或机制性验证，使得这个精彩观察的理论深度打了折扣。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：论文分析基于多个公开发布的预训练模型检查点（DiT， MDT， SiT， REPA， LightningDiT， MG， X-MDPT， MDSGen等），并指明使用其官方发布的XL/Large/B-Size模型。
- 数据集：分析所用数据集为公开的ImageNet-1K， DeepFashion， VGGSound。
- Demo：未提及。
- 复现材料：论文提供了详细的实验设置（如生成5000个样本，使用特定评估代码），关键超参数（剪枝阈值τ），以及大量的附录图表，为复现分析提供了充分信息。
- 论文中引用的开源项目：引用了被分析模型的官方代码仓库（如Peebles & Xie 2023对应DiT， Yu et al. 2025对应REPA等），以及评估工具（LightningDiT的评估代码）。

📌 **核心摘要**

这篇论文旨在解决对Transformer基扩散模型中条件嵌入（conditional embedding）结构理解不足的问题。方法核心是对多个SOTA扩散Transformer（如DiT， REPA等）的条件向量进行系统分析，揭示其普遍存在的“语义瓶颈”现象。与已有方法相比，本文是首个聚焦于条件嵌入内部结构（而非模型架构或训练目标）的系统性研究。主要实验结果表明：在ImageNet-1K类条件任务中，不同类别的条件向量余弦相似度超过99%；在连续条件任务（如姿态引导图像生成）中，相似度超过99.9%。同时，语义信息集中在约1-2%的高幅度维度（“头部”），其余维度（“尾部”）贡献极小。即使剪枝掉多达66%的尾部维度，生成质量（FID）和语义一致性（CLIP）也能保持甚至略有提升。实际意义在于揭示了当前条件编码方案存在巨大冗余，为设计更高效、更轻量的条件注入机制（如稀疏条件、更紧凑的嵌入）提供了实证依据和设计启示。主要局限性是论文提出的解释（如“AdaLN放大头部维度”、“抑制尾部噪声”）主要是假设和定性分析，缺乏定量验证或理论证明。

---

### 17. [VibeVoice: Expressive Podcast Generation with Next-Token Diffusion](/audio-paper-digest-blog/posts/2026-05-04-vibevoice-expressive-podcast-generation-with-next)

🔥 **8.5/10** | 前10% | #语音合成 | #扩散模型 | #零样本 #多说话人

👥 **作者与机构**

- 第一作者：Zhiliang Peng (Microsoft Research)
- 通讯作者：Furu Wei (Microsoft Research)
- 作者列表：Zhiliang Peng (Microsoft Research), Jianwei Yu (Microsoft Research), Wenhui Wang (Microsoft Research), Yaoyao Chang (Microsoft Research), Yutao Sun (Microsoft Research), Li Dong (Microsoft Research), Yi Zhu (Microsoft Research), Weijiang Xu (Microsoft Research), Hangbo Bao (Microsoft Research), Zehua Wang (Microsoft Research), Shaohan Huang (Microsoft Research), Yan Xia (Microsoft Research), Furu Wei (Microsoft Research)

💡 **毒舌点评**

这篇论文成功地将播客生成从“能用”推向了“好用”的阶段，特别是其超低帧率（7.5Hz）的连续声学分词器在保持高保真度（UTMOS 4.18）的同时极大压缩了序列长度，是处理长序列的关键创新，解决了90分钟超长对话生成的核心瓶颈。然而，该方法对数据质量（需自建复杂标注管道）和训练复杂性（课程学习、大规模计算）的依赖，使其复现门槛较高，且论文并未公开其内部播客数据集。

🔗 **开源详情**

- **代码**：提供了代码仓库链接 `https://github.com/microsoft/VibeVoice`。
- **模型权重**：论文中提到代码和检查点已公开，预计与代码仓库关联。
- **数据集**：论文中明确使用了内部播客数据集进行训练，**未提及**公开该数据集。评估集VIBEVOICE-Eval由论文团队自建，**未提及**公开。
- **Demo**：论文中未提及在线演示链接。
- **复现材料**：详细提供了训练超参数（附录F）、数据处理流水线（附录A）、评估设置（3.3节）等复现所需的关键信息。
- **论文中引用的开源项目**：Silero VAD、Whisper-large-v3-turbo、Nemo ASR、WeSpeaker。

📌 **核心摘要**

1.  **解决的问题**：传统文本转语音（TTS）系统难以生成长篇幅（如播客）、多说话人、自然对话的音频，面临扩展性差、说话人一致性不足、对话轮转不自然等挑战。
2.  **方法核心**：提出了VibeVoice框架，采用一种“下一词元扩散”（Next-Token Diffusion）的端到端LLM架构。其核心是高效的**混合语音表示**，由运行在7.5Hz超低帧率下的**连续声学分词器**（σ-VAE）和**语义分词器**（ASR预训练）组成，并结合扩散模型进行声学特征生成。
3.  **创新之处**：1) **超低帧率连续分词器**：声学分词器在仅7.5个词元/秒的极端压缩率下实现了业界领先的重建质量。2) **解耦的混合表示**：明确分离并融合声学与语义特征，在长序列生成中稳定了内容和韵律。3) **可扩展的端到端生成架构**：首次实现了零样式合成长达90分钟、最多4位说话人的连贯对话。
4.  **主要实验结果**：VibeVoice-7B模型在主观评估中平均分3.76（5分制），超越Google Gemini 2.5 Pro（3.66）和Elevenlabs v3（3.40）。在客观指标上，1.5B模型的WER（词错误率）低至1.11，7B模型的说话人相似度（SIM-O）达到0.692。关键消融实验证明了混合表示（WER: 1.84）相比纯声学表示（WER: 6.22）和耦合表示（WER: 3.55，SIM-O: 0.45）的显著优势。
5.  **实际意义**：为自动化、高质量的播客、有声书和长对话音频生成提供了强大的技术基础，推动了对话式语音合成向更自然、更具表现力的方向发展。
6.  **主要局限性**：严重依赖于其内部自建的、经过复杂流水线处理的大规模播客数据集（论文未公开）；模型训练需要大规模计算资源（1.5B模型在64个MI300X GPU上训练约170小时）；虽然代码开源，但高质量的预训练分词器和完整复现仍具挑战。

---

### 18. [Scalable Multilingual Multimodal Machine Translation with Speech-Text Fusion](/audio-paper-digest-blog/posts/2026-05-04-scalable-multilingual-multimodal-machine)

🔥 **8.5/10** | 前25% | #语音翻译 | #多模态模型 | #多语言 #低资源

👥 **作者与机构**

- 第一作者：Yexing Du（哈尔滨工业大学，鹏城实验室）
- 通讯作者：Youcheng Pan（鹏城实验室）， Yang Xiang（鹏城实验室）， Ming Liu（哈尔滨工业大学，鹏城实验室）
- 作者列表：Yexing Du（哈尔滨工业大学，鹏城实验室）、 Youcheng Pan（鹏城实验室）、 Zekun Wang（哈尔滨工业大学）、 Zheng Chu（哈尔滨工业大学）、 Yichong Huang（哈尔滨工业大学）、 Kaiyuan Liu（哈尔滨工业大学，鹏城实验室）、 Bo Yang（鹏城实验室）、 Yang Xiang（鹏城实验室）、 Ming Liu（哈尔滨工业大学，鹏城实验室）、 Bing Qin（哈尔滨工业大学，鹏城实验室）

💡 **毒舌点评**

**亮点**：论文思路非常聪明，绕过了图像多模态翻译的数据瓶颈，利用语音（尤其是TTS生成的合成语音）作为补充信息源，实现了多语言覆盖的飞跃。**短板**：框架对上游TTS模型的质量和语言覆盖有强依赖，论文中自进化机制的“正样本”筛选标准（S2 > S1）略显简单粗暴，可能无法捕获语音信息更复杂的交互模式。此外，论文声称“语音提供韵律线索”，但在实验中缺乏对韵律特征的具体分析或可视化，更多是效果验证。

🔗 **开源详情**

- **代码**：提供了GitHub仓库链接 `https://github.com/yxduir/LLM-SRT`。
- **模型权重**：论文中提及“code and models are released”，表明已开源模型权重。
- **数据集**：使用的所有数据集（Multi30K， FLORES-200， WMT24++， CoVoST-2， FLEURS， Common Voice）均为公开数据集。
- **Demo**：论文中未提及提供在线演示。
- **复现材料**：提供了模型架构细节、训练超参数（优化器、学习率、warmup步数）、硬件配置（4x A100 GPU）、推理设置（vLLM， beam size=1， temperature=0）、评估指标（BLEU， spBLEU， COMET）等关键信息，复现性较高。
- **引用的开源项目/模型**：Whisper (编码器)， GemmaX2-28-9B (LLM)， CosyVoice2 (TTS模型)， Q-Former (来自BLIP-2)， vLLM (推理加速)。

📌 **核心摘要**

本文针对现有图像引导的多模态机器翻译（MMT）方法面临的语言覆盖有限、数据稀缺等问题，提出了一种新颖的**语音引导机器翻译框架（SMT）**。该框架的核心是将合成或真实的语音与文本融合作为多模态大语言模型（MLLM）的输入，以提升翻译质量。与依赖图像的方法不同，SMT利用了语音与文本的自然对齐以及丰富的语音数据集，实现了更好的可扩展性。

**方法核心**是集成了一个文本到语音（TTS）模型和一个MLLM。MLLM基于GemmaX2-28-9B大语言模型，采用Whisper编码器提取语音特征，并通过Q-Former适配器与文本特征融合。训练分为三阶段课程学习：ASR预训练、S2TT训练和SMT训练。此外，论文引入了**自进化机制**，使模型能自主利用TTS生成的合成语音进行迭代优化：通过比较仅有文本和文本+语音输入时的翻译COMET分数，筛选出语音对翻译有益的“正样本”，用于持续训练模型。

与已有方法相比，新在：1）**首次系统性地将语音作为统一的多模态信息源**，用于增强文本机器翻译，突破了图像模态的语言限制；2）**设计了自进化框架**，能自主生成、筛选训练数据，缓解了低资源语言数据稀缺问题。

**主要实验结果**：在Multi30K多模态翻译基准上，SMT-9B模型达到了新的SOTA，例如在英德翻译上BLEU分数达到47.0，显著超越了包括图像引导MMT和更大文本模型（如DeepSeek-V3.1）在内的所有基线。在FLORES-200通用机器翻译数据集上，模型在108个翻译方向（涉及英、日、韩、中到27种目标语言）取得了平均最优性能。消融实验证实，使用合成语音与真实语音的性能差异可忽略不计，且自进化机制对提升低资源语言（如高棉语、老挝语、缅甸语）的翻译效果显著。

**实际意义**在于证明了语音作为辅助模态在提升翻译质量，尤其是低资源语言翻译上的巨大潜力，为构建更通用、可扩展的多模态翻译系统提供了新方向。**主要局限性**是框架目前受限于TTS模型所支持的语言数量，尽管这比图像数据集的语言覆盖已大大扩展。

---

### 19. [SpeechJudge: Towards Human-Level Judgment for Speech Naturalness](/audio-paper-digest-blog/posts/2026-05-04-speechjudge-towards-human-level-judgment-for)

🔥 **8.5/10** | 前10% | #语音合成 | #强化学习 | #数据集 #基准测试

👥 **作者与机构**

第一作者：Xueyao Zhang（香港中文大学（深圳））
通讯作者：Zhizheng Wu（香港中文大学（深圳）、深圳湾区研究院、澳门城市大学、Amphion Technology Co., Ltd.）
作者列表：
    - Xueyao Zhang（香港中文大学（深圳））
    - Chaoren Wang（香港中文大学（深圳））
    - Huan Liao（香港中文大学（深圳））
    - Ziniu Li（香港中文大学（深圳））
    - Yuancheng Wang（香港中文大学（深圳））
    - Li Wang（香港中文大学（深圳））
    - Dongya Jia（ByteDance Seed）
    - Yuanzhe Chen（ByteDance Seed）
    - Xiulin Li（DataBaker Technology）
    - Zhuo Chen（ByteDance Seed）
    - Zhizheng Wu（香港中文大学（深圳）、深圳湾区研究院、澳门城市大学、Amphion Technology Co., Ltd.）

💡 **毒舌点评**

这篇论文的“基建”价值很高，99K规模的高质量人类偏好数据集和开源承诺堪称语音合成对齐研究的“粮草先行”。但核心的奖励模型架构（基于现有Qwen2.5-Omni的微调）创新稍显有限，更像是一个强大但“组装式”的解决方案，而非从头设计的、能深刻洞察自然度内在结构的新架构。

🔗 **开源详情**

- **代码**：论文明确声明将公开所有代码，包括奖励模型训练和下游实验的代码。论文中未直接给出代码链接，但提供了项目主页和GitHub链接。
- **模型权重**：论文明确声明将公开训练好的SpeechJudge-GRM模型检查点。
- **数据集**：论文明确声明将公开SpeechJudge-Data（全部子集）和SpeechJudge-Eval基准数据集。
- **Demo**：论文提供了项目网站用于展示音频样本。
- **复现材料**：论文在附录中提供了极其详细的实验设置，包括标注指南、训练超参数（学习率、batch size、LoRA rank、rollout数等）、模型选择、评估协议等。
- **论文中引用的开源项目**：主要依赖Qwen2.5-Omni-7B作为基础模型，并使用了ms-swift工具包进行RL训练。还引用了多个开源的TTS模型（CosyVoice2, F5-TTS等）和评估工具（如DNSMOS、audiobox-aesthetics）。
- **整体开源情况**：论文的开源承诺非常彻底，覆盖了数据、模型、代码和复现指南，对社区非常友好。

---

### 20. [OmniVideoBench: Towards Audio-Visual Understanding Evaluation for Omni MLLMs](/audio-paper-digest-blog/posts/2026-05-04-omnivideobench-towards-audio-visual-understanding)

🔥 **8.5/10** | 前25% | #基准测试 | #多模态模型 | #跨模态 #模型评估

👥 **作者与机构**

- 第一作者：Caorui Li（东南大学、南京大学）
- 通讯作者：Jiaheng Liu（南京大学）
- 作者列表：Caorui Li（东南大学、南京大学）、Yu Chen（东南大学、南京大学）、Yiyan Ji（南京大学）、Jin Xu（阿里巴巴集团）、Zhenyu Cui（东南大学）、Shihao Li（南京大学）、Yuanxing Zhang（快手科技）、Zhenghao Song（M-A-P）、Dingling Zhang（南京大学）、Ying He（北京科技大学）、Haoxiang Liu（北京科技大学）、Yuxuan Wang（阿里巴巴集团）、Qiufeng Wang（东南大学）、Jiafu Tang（南京大学）、Zhenhe Wu（M-A-P）、Jiehui Luo（中央音乐学院）、Zhiyu Pan（南京大学）、Weihao Xie（华中科技大学）、Chenchen Zhang（M-A-P）、Zhaohui Wang（南京大学）、Jiayi Tian（阿里巴巴集团）、Yanghai Wang（南京大学）、Zhe Cao（南京大学）、Minxin Dai（南京大学）、Ke Wang（M-A-P）、Runzhe Wen（南京大学）、Yinghao Ma（伦敦玛丽女王大学）、Yaning Pan（复旦大学）、Sungkyun Chang（伦敦玛丽女王大学）、Termeh Taheri（伦敦玛丽女王大学）、Haiwen Xia（北京大学）、Christos Plachouras（伦敦玛丽女王大学）、Emmanouil Benetos（伦敦玛丽女王大学）、Yizhi Li（曼彻斯特大学）、Ge Zhang（M-A-P）、Jian Yang（M-A-P）、Tianhao Peng（M-A-P）、Zili Wang（M-A-P）、Minghao Liu（2077AI）、Junran Peng（北京科技大学）、Zhaoxiang Zhang（中国科学院）、Jiaheng Liu（南京大学）

💡 **毒舌点评**

该工作系统性地定义了评估全模态大语言模型音频-视觉协同推理能力的难题，并通过一套严谨的“人-模型”协作流程构建了一个高质量的评测集，其发现揭示了当前模型在“真正理解”音视频内容上的巨大鸿沟。然而，其核心贡献是一个评测基准（Benchmark）而非一个解决该难题的新模型，且目前数据集尚未完全公开，这限制了其即时影响力。

🔗 **开源详情**

- **代码**：论文中提到将发布评估代码，提供了GitHub链接（https://github.com/NJU-LINK/OmniVideoBench），但未说明当前是否已开源。
- **模型权重**：未提及。本文档为评测基准，不涉及新模型训练。
- **数据集**：论文承诺将发布OmniVideoBench数据集（包含视频和标注），但未提及具体的发布平台或时间。论文中引用了数据集链接。
- **Demo**：未提及。
- **复现材料**：提供了极其详细的数据集构建流程（附录B）、任务定义、评估提示词（附录C）和统计信息，复现基础扎实。
- **论文中引用的开源项目**：在数据集构建和评估中引用了Gemini 2.0 Flash、DeepSeek-V3.1、Voxtral-Mini-3B（用于ASR）等模型。

📌 **核心摘要**

1.  **要解决什么问题**：现有的多模态大语言模型基准测试无法全面评估模型在音频和视觉模态上的协同推理能力，往往忽视其中一个模态，或将两个模态以逻辑不一致的方式简单结合。
2.  **方法核心是什么**：提出OmniVideoBench，一个大规模、精心设计的评测基准。核心方法包括：从YouTube和Bilibili收集628个多样化视频；设计严格的数据收集原则确保模态互补性；通过“人工标注-模型过滤-人工精修”的流程构建1000个高质量问答对，每个问答对附带明确的、标注了模态和证据的逐步推理链；定义13种任务类型覆盖核心视频理解挑战。
3.  **与已有方法相比新在哪里**：与现有基准相比，OmniVideoBench强调模态互补性和推理逻辑一致性，覆盖长视频（最长达30分钟）、多种真实世界视频类型和音频类型（语音、声音、音乐），并为每个问题提供可追溯的原子级推理步骤，更侧重于评估真正的跨模态协同推理能力，而非单一模态感知或短时理解。
4.  **主要实验结果如何**：评估了多种闭源和开源模型。结果显示，当前最佳模型（Gemini-2.5-Pro）准确率仅为58.90%，远低于人类表现（82.69%），表明模型在音频-视觉协同推理上存在显著差距。开源模型表现更差，接近随机猜测水平。模型在音乐理解任务上表现尤其不佳（如Gemini-2.5-Pro在音乐视频上准确率为38.46%）。详细结果见下表：

| 模型 | 音乐 | 声音 | 语音 | (0,1]分钟 | (1,5]分钟 | (5,10]分钟 | (10,30]分钟 | 平均 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Gemini-2.5-Pro | 38.46 | 57.72 | 61.66 | 57.83 | 64.43 | 55.02 | 55.94 | **58.90** |
| Gemini-2.0-Flash | 29.67 | 40.27 | 43.21 | 49.40 | 43.15 | 41.05 | 34.87 | 41.50 |
| Qwen3-Omni-30B-A3B | 37.36 | 34.67 | 39.26 | 45.78 | 37.03 | 38.86 | 35.11 | 38.40 |
| Qwen2.5-Omni-7B | 23.07 | 25.33 | 30.70 | 41.57 | 27.41 | 25.33 | 26.72 | 29.30 |

5.  **实际意义是什么**：该基准测试揭示了当前多模态大语言模型在音频-视觉协同推理方面的严重不足，特别是在处理音乐等非语音音频、长视频以及需要复杂跨模态整合的任务时，为未来研究指明了关键改进方向。
6.  **主要局限性是什么**：基准测试本身规模（1000个问答对）相对于海量视频数据仍然有限；部分视频分辨率和帧率被限制在较低水平（480p）；评测主要基于多选题形式，可能无法完全反映模型的开放式生成能力；目前代码和数据集尚未完全开源。

---

### 21. [End-to-end Listen, Look, Speak and Act](/audio-paper-digest-blog/posts/2026-05-04-end-to-end-listen-look-speak-and-act)

🔥 **8.5/10** | 前25% | #语音对话系统 | #端到端 | #多模态模型 #大语言模型

👥 **作者与机构**

- 第一作者：Siyin Wang (清华大学)， Wenyi Yu (清华大学) [论文中注明两人贡献相等]
- 通讯作者：Chao Zhang (清华大学)
- 作者列表：Siyin Wang (清华大学)， Wenyi Yu (清华大学)， Xianzhao Chen (字节跳动)， Xiaohai Tian (字节跳动)， Jun Zhang (字节跳动)， Lu Lu (字节跳动)， Yuxuan Wang (字节跳动)， Chao Zhang (清华大学)

💡 **毒舌点评**

这篇论文的亮点在于其清晰的架构设计（SA-MoE）和全面的任务验证，成功地将“说”和“做”这两个通常分离的能力整合到了一个全双工框架中，向类人交互迈出了扎实的一步。但短板也同样明显：目前所有验证都停留在模拟环境（LIBERO, CALVIN），缺乏真实世界复杂场景的考验，且“同时说话和操作”时性能出现可感知的下降，暴露出当前模型在处理真正高强度并发多任务时仍显吃力。

🔗 **开源详情**

- **代码**：论文明确承诺将在GitHub (https://github.com/bytedance/SALMONN) 上开源所有代码。
- **模型权重**：论文明确承诺将开源模型检查点（checkpoints）。
- **数据集**：论文明确承诺将开源数据，并在附录中详细列出了训练所用的所有公开数据集。
- **Demo**：论文中未提及在线演示。
- **复现材料**：提供了极其充分的复现材料，包括：详细的模型架构图与规格（Section 3， Appendix A），三阶段训练策略与具体超参数（Section 3.3， Appendix B），完整的训练数据集列表与处理方式（Appendix B），评估基准、指标和详细结果（Section 4， Appendix C），以及所有高级任务的具体设计、示例和Prompt模板（Appendix D， E）。
- **论文中引用的开源项目**：LLaMA-3.1-8B-Instruct， Emu3（及其VisionTokenizer）， UniVLA， CosyVoice2-0.5B， Mamba， FAST action tokenizer， Whisper（用于ASR过滤和评估）， Gemini-2.5-Pro（用于数据生成和评估）。

📌 **核心摘要**

本文旨在解决当前AI模型在类人多模态交互方面的根本缺陷：要么是只能“听、看、说”但不能“做”的对话模型，要么是只能根据文本指令“做”但不能自然语音交互的VLA模型。核心方法是提出了ELLSA模型，其核心是SA-MoE（自注意力混合专家）架构，通过将处理语音/文本的“语音专家”和处理视觉/动作的“动作专家”通过统一的自注意力机制连接起来，实现了在单一架构中同时进行多模态感知和并发生成。与现有方法相比，ELLSA是首个支持全双工、流式、多输入多输出（MIMO）的端到端模型，能够实现诸如“边说边做”、基于上下文的视觉问答、拒绝错误指令和动作被打断等前所未有的交互行为。实验表明，ELLSA在语音交互（如TriviaQA S2T准确率45.2%）和机器人操作（LIBERO平均成功率89.4%）等基础任务上匹配或超越了专用基线模型，并在高级交互任务上取得了高成功率（例如，在执行动作时处理中断指令的成功率达94.3%-100%）。该工作的实际意义在于验证了统一全双工多模态交互模型的可行性，为构建更自然、通用的交互式智能体提供了新范式。主要局限性在于尚未在真实物理世界中进行验证，且在同时执行多任务（边说边做）时性能会有所下降。

---

### 22. [Steering Autoregressive Music Generation with Recursive Feature Machines](/audio-paper-digest-blog/posts/2026-05-04-steering-autoregressive-music-generation-with)

🔥 **8.5/10** | 前25% | #音乐生成 | #自回归模型 #激活干预 | #自回归模型 #激活干预

👥 **作者与机构**

- 第一作者：Daniel Zhao（University of California, San Diego）
- 通讯作者：未说明（从作者列表和邮箱格式推断，第一作者Daniel Zhao可能是主要联系人，但未明确标注）
- 作者列表：Daniel Zhao（University of California, San Diego）、Daniel Beaglehole（University of California, San Diego）、Taylor Berg-Kirkpatrick（University of California, San Diego）、Julian McAuley（University of California, San Diego）、Zachary Novack（University of California, San Diego）

💡 **毒舌点评**

这篇论文的亮点在于它成功地将RFM这一“老”概念嫁接到了音乐生成这个热门但控制困难的任务上，并通过精巧的层/时间调度设计实现了相当不错的控制效果，免去了训练或微调基础模型的巨大开销。不过，其控制能力严重依赖于在高度理想化的合成音乐数据集（SYNTHEORY）上训练的探针，当面对真实世界复杂多变的音乐纹理时，这些探针发现的“方向”是否依然稳健有效，论文并未给出足够有说服力的证据。

🔗 **开源详情**

- **代码**：提供GitHub仓库链接：`https://github.com/astradzhao/music-rfm`。
- **模型权重**：未提及开源MusicGen-Large或训练好的RFM探针权重。
- **数据集**：使用公开数据集SYNTHEORY、SONG-DESCRIBER、MusicBench。论文未提及提供或托管数据集。
- **Demo**：提供交互式演示项目主页：`https://musicrfm.github.io/controllable-music-rfm/`。
- **复现材料**：在论文正文中和附录（A-F节）中提供了详细的技术细节、算法伪代码（算法1）、超参数搜索空间（表8）、消融实验设置和公式。
- **论文中引用的开源项目**：MusicGen (Copet et al., 2024), ENCODEC (Défossez et al., 2022), Essentia (Bogdanov et al., 2013), librosa (McFee & et al., 2023), CLAP (Wu et al., 2023)。

📌 **核心摘要**

1.  **问题**：可控音乐生成极具挑战性，现有方法常需要模型微调或在推理时进行昂贵的优化，且可能引入听觉伪影。实现对生成音乐中精细的音乐理论概念（如特定音符、和弦）进行可解释、实时的控制是主要难题。
2.  **核心方法**：提出MusicRFM框架，适配递归特征机器（RFM）来控制冻结的预训练音乐模型（MusicGen）。方法分三步：首先，在合成音乐数据集SYNTHEORY上，为模型的每一层训练轻量级RFM探针，通过平均梯度外积（AGOP）发现对应于特定音乐概念（如音符）的“概念方向”；然后，在推理时，通过前向钩子将这些方向注入到模型各层的残差流中，实时引导生成过程。
3.  **创新点**：相较于现有方法，MusicRFM无需微调基础模型；它引入了**层剪枝**（Top-K或指数加权选择性能最佳的层进行注入）和**时间调度**（如线性衰减、正弦波等确定性调度，以及随机概率门控）等机制，以在控制精度和生成质量间取得平衡；同时支持**多方向同时控制**。
4.  **主要实验结果**：
    - 在探针分类任务上，MusicRFM（平均池化）在多个音乐概念类别上优于原始SYNTHEORY的FFN探针（见论文表1，平均精度0.942 vs 0.929）。
    - 在单方向控制生成上，对于“音符”类别，控制系数η0从0.15增加到0.60时，**目标音符的分类准确率从0.23提升至0.824**，而文本提示一致性（CLAP分数）仅下降约0.02（见论文表2）。**具体控制结果如下**：

| 类别 (随机基准) | 控制系数 η0 | FD ↓ | MMD ↓ | CLAP ↑ | 探针准确率 ↑ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **音符 (0.083)** | 0.15 | 0.113 | 0.052 | 0.315 | 0.231 |
| | 0.30 | 0.130 | 0.127 | 0.311 | 0.461 |
| | 0.45 | 0.138 | 0.217 | 0.318 | 0.684 |
| | 0.60 | 0.180 | 0.476 | 0.303 | **0.824** |
| **和弦 (0.250)** | 0.15 | 0.116 | 0.063 | 0.324 | 0.271 |
| | 0.60 | 0.119 | 0.095 | 0.326 | 0.344 |

    - 听力测试（12名参与者）表明，MusicRFM在音乐属性控制得分上显著优于无控制和朴素RFM（见论文表3，以和弦为例：73.46 vs 59.71 vs 69.21）。
5.  **实际意义**：为可控音乐生成提供了一个高效、可解释的新范式，仅需训练轻量探针，无需修改或微调庞大的基础生成模型，且支持实时、细粒度的多属性控制，有望应用于音乐制作和游戏音频等场景。
6.  **主要局限性**：探针训练使用的均值池化丢失了时序信息，限制了其对音阶、和弦进行等强时序概念的控制效果；目前控制的概念局限于SYNTHEORY数据集定义的音乐理论属性，对音色、乐器等感知属性的控制有待拓展。

---

### 23. [VowelPrompt: Hearing Speech Emotions from Text via Vowel-level Prosodic Augmentation](/audio-paper-digest-blog/posts/2026-05-04-vowelprompt-hearing-speech-emotions-from-text-via)

🔥 **8.5/10** | 前25% | #语音情感识别 | #强化学习 | #多语言 #大语言模型

👥 **作者与机构**

- 第一作者：Yancheng Wang（Arizona State University; Meta Superintelligence Labs）
- 通讯作者：Osama Hanna（Meta Superintelligence Labs，基于邮箱推测）
- 作者列表：
  - Yancheng Wang (Arizona State University, Meta Superintelligence Labs)
  - Osama Hanna (Meta Superintelligence Labs)
  - Ruiming Xie (Meta Superintelligence Labs)
  - Xianfeng Rui (Meta Superintelligence Labs)
  - Maohao Shen (Massachusetts Institute of Technology; Meta Superintelligence Labs)
  - Xuedong Zhang (Meta Superintelligence Labs)
  - Christian Fuegen (Meta Superintelligence Labs)
  - Jilong Wu (Meta Superintelligence Labs)
  - Debjyoti Paul (Meta Superintelligence Labs)
  - Arthur Guo (Meta Superintelligence Labs)
  - Zhihong Lei (Meta Superintelligence Labs)
  - Ozlem Kalinli (Meta Superintelligence Labs)
  - Qing He (Meta Superintelligence Labs)
  - Yingzhen Yang (Arizona State University)

💡 **毒舌点评**

亮点在于从语音学常识（元音承载韵律）出发，设计了一套精巧且可解释的“翻译”流程，将隐晦的语音信号转化为LLM能读的文本，比直接灌入黑盒音频嵌入“高级”不少。短板则是其效果高度依赖强制对齐的准确性，对于口音重、背景噪或语速极快的语音，这套“元音显微镜”可能会失灵，且忽略辅音区域可能存在的互补情感线索（如送气、鼻化）。

🔗 **开源详情**

- **代码**：论文中未提及代码仓库链接。
- **模型权重**：未提及公开任何适配后的LLM权重。
- **数据集**：所使用的五个数据集（IEMOCAP, MELD, CaFE, EmoDB, ASVP-ESD）均为公开学术数据集，论文中给出了参考文献。
- **Demo**：未提及在线演示。
- **复现材料**：论文详细描述了方法流程、关键算法（如GRPO奖励公式）、特征列表（表1）以及大量消融实验的设置和结果（附录A.1-A.15），为复现提供了充足的理论指导和参数参考。
- **论文中引用的开源项目**：Montreal Forced Aligner (MFA), Praat, openSMILE, GeMAPS特征集, wav2vec 2.0, HuBERT, WavLM。

📌 **核心摘要**

本文针对大语言模型在语音情感识别中忽略细粒度韵律信息的问题，提出了VowelPrompt框架。该方法首先通过强制对齐获取元音片段，提取其音高（F0）、能量、时长等低级描述符，经说话人和元音类型归一化后，离散化为“high pitch, rising, loud”等自然语言描述。这些描述被附加到文本转录后，使LLM能够联合推理语义和细粒度韵律。模型适配采用监督微调（SFT）结合基于群组相对策略优化（GRPO）的可验证奖励强化学习（RLVR）。在IEMOCAP、MELD、CaFE、EmoDB和ASVP-ESD等五个基准数据集上的实验表明，VowelPrompt在零样本、微调、跨域和跨语言条件下均优于基于句子级描述的基线（SpeechCueLLM）和多模态模型（SALMONN），例如在IEMOCAP零样本设置下，加权F1比基线高2.2%，在跨域迁移（IEMOCAP→MELD）微调设置下提升达5.12%。该工作的意义在于提供了一种可解释、可审计的语音情感分析范式。主要局限是其对强制对齐精度敏感，且目前仅关注元音，未充分利用辅音可能包含的互补声学线索。

---

### 24. [MCIF: Multimodal Crosslingual Instruction-Following Benchmark from Scientific Talks](/audio-paper-digest-blog/posts/2026-05-04-mcif-multimodal-crosslingual-instruction)

🔥 **8.5/10** | 前25% | #基准测试 | #多模态模型 | #多语言 #大语言模型

👥 **作者与机构**

- 第一作者：Sara Papi（Fondazione Bruno Kessler (Italy)）
- 通讯作者：未说明（论文未明确指定通讯作者）
- 作者列表：Sara Papi (Fondazione Bruno Kessler)， Maike Züfle (Karlsruhe Institute of Technology)， Marco Gaido (Fondazione Bruno Kessler)， Beatrice Savoldi (Fondazione Bruno Kessler)， Danni Liu (Karlsruhe Institute of Technology)， Ioannis Douros (Fondazione Bruno Kessler)， Luisa Bentivogli (Fondazione Bruno Kessler)， Jan Niehues (Karlsruhe Institute of Technology)

💡 **毒舌点评**

**亮点**：论文填补了多模态、跨语言、长上下文指令跟随评测的关键空白，创建了一个系统对齐、人工标注的高质量基准，对推动通用多模态大模型发展有明确价值。  
**短板**：论文的核心贡献是建立评测基准，而非提出新的建模方法，对现有模型“能力不足”的诊断虽清晰，但并未直接提供解决方案；评测模型均为已发表的开源或商用模型，缺乏对自身新方法的验证。

🔗 **开源详情**

*   **代码**：**提供**。论文明确给出了两个代码仓库：
    *   评估与推理代码：`github.com/hlt-mt/mcif`（Apache 2.0许可）。
    *   数据构建与标注指南：`https://github.com/hlt-mt/mcif/tree/main/dataset_build/annotation_guidelines`。
*   **模型权重**：**部分提供**。论文中评测的开源模型权重均通过HuggingFace链接公开。论文本身未提出新的模型权重。
*   **数据集**：**公开**。MCIF数据集在HuggingFace以CC-BY 4.0许可发布：`hf.co/datasets/FBK-MT/MCIF`。模型在测试集上的输出也以相同许可发布。
*   **Demo**：**未提及**。
*   **复现材料**：提供了完整的训练/推理细节（附录D）、超参数、提示词库（附录C）、标注指南和评估脚本，复现材料极其充分。
*   **论文中引用的开源项目**：依赖并提及了**HuggingFace Transformers库**用于模型推理，以及**SHAS**工具用于音频分段。

📌 **核心摘要**

这篇论文旨在解决当前多模态大语言模型评测基准在**跨语言**、**多模态联合处理**及**长上下文理解**方面存在的覆盖不足、缺乏人工标注、评测维度单一等问题。方法核心是提出了**MCIF（Multimodal Crosslingual Instruction Following）** 基准，该基准基于科学演讲视频，**平行覆盖三种模态（语音、视频、文本）、四种语言（英语、德语、意大利语、中文）** 和**13个任务（分为识别、翻译、问答、摘要四大类）**，并提供了短上下文和长上下文两种版本。与已有基准相比，MCIF的独特之处在于其**完全平行的跨维度设计**，允许系统评估模型在不同语言、模态和任务复杂度下遵循指令的能力。论文对23个模型（包括LLM、SpeechLLM、VideoLLM和MLLM）进行了基准测试。主要结果显示：**摘要任务最具挑战性**（部分模型得分甚至低于随机基线）；**当前MLLMs难以有效融合语音和视频模态**，联合处理常无增益甚至有害；**长上下文处理是普遍弱点**，多数模型性能显著下降；以及模型对**提示词的微小变化敏感性高**。该基准的发布旨在为评估和改进跨语言多模态指令跟随系统提供一个全面框架。主要局限性在于，它本身是一个评测基准，而非一个能直接提升模型性能的新方法，其发现揭示了当前模型的普遍短板。

---

### 25. [SCRAPL: Scattering Transform with Random Paths for Machine Learning](/audio-paper-digest-blog/posts/2026-05-04-scrapl-scattering-transform-with-random-paths-for)

🔥 **8.5/10** | 前25% | #音频生成 | #时频分析 | #损失函数 #优化算法

👥 **作者与机构**

- 第一作者：Christopher Mitcheltree (伦敦玛丽女王大学数字音乐中心)
- 通讯作者：未明确指定。根据作者列表和惯例，通常为最后作者或通讯作者列表，论文中为Vincent Lostanlen (Nantes Université, LS2N) 和 Mathieu Lagrange (Nantes Université, LS2N)。
- 作者列表：Christopher Mitcheltree（伦敦玛丽女王大学数字音乐中心）、Vincent Lostanlen（Nantes Université, LS2N）、Emmanouil Benetos（伦敦玛丽女王大学数字音乐中心）、Mathieu Lagrange（Nantes Université, LS2N）

💡 **毒舌点评**

**亮点**：论文精准地解决了“感知损失函数计算太贵”这一工程痛点，通过巧妙的随机采样与优化技巧，在速度和精度之间找到了一个令人满意的平衡点，使得JTFS这类优质但昂贵的损失函数能够真正用于模型训练。
**短板**：方法对散射路径的采样策略（尤其是低频路径）较为粗放，在TR-808实验中表现出对音频衰减部分建模能力的显著下降，暗示其对长尾、稀疏信息路径的处理策略有待进一步优化。

🔗 **开源详情**

- **代码**：论文明确指出代码、音频样本和配置文件已发布，并提供了Python包SCRAPL。链接为：https://christhetree.github.io/scrapl/。
- **模型权重**：论文中未提及公开预训练模型权重。
- **数据集**：TR-808任务使用了公开数据集（Samples from Mars TR-808），但论文未提供其独立下载链接。颗粒和啁啾合成器的数据由合成器程序动态生成。
- **Demo**：提供了配套网站展示音频样本：https://christhetree.github.io/scrapl/。
- **复现材料**：提供了完整的训练细节、超参数（附录E）、配置文件和复现说明。
- **引用的开源项目**：论文未明确列出依赖的开源工具/模型库，但代码实现可能依赖PyTorch、nnAudio（CQT工具）等。

📌 **核心摘要**

这篇论文针对小波散射变换（尤其是联合时频散射变换，JTFS）作为神经网络损失函数时计算成本过高的问题，提出了SCRAPL（Scattering with Random Paths for Learning）。其核心思想是通过在每个训练步骤中随机采样少量（通常为一个）散射路径来近似全路径损失的梯度，从而将计算复杂度从与路径数P成正比降低到常数级。为稳定这一随机近似过程，作者提出了三项技术创新：1）路径自适应矩估计（P-Adam）；2）路径随机平均梯度加速法（P-SAGA）；3）基于合成器参数敏感性的θ-重要性采样（θ-IS）初始化策略。实验在三个无监督声音匹配任务（颗粒合成器、啁啾合成器、Roland TR-808鼓机）上进行。在颗粒合成任务中，SCRAPL在参数估计误差上仅比全路径JTFS高约1.5倍（65.7‰ vs. 42.4‰），但计算成本降低了约25倍（89.8ms vs. 1730ms），达到了帕累托最优（见图1）。在更复杂的TR-808鼓机匹配中，SCRAPL能稳定地保持声音的瞬态特征，即使在输入音频未对齐（meso设置）时也优于多尺度谱损失（MSS）。本文的主要贡献在于提供了一个实用且开源的框架，使得具有感知保证的散射变换损失能高效地应用于音频生成模型的训练，其局限性在于对部分音频特征（如衰减）的采样代表性不足。

---

### 26. [SongEcho: Towards Cover Song Generation via Instance-Adaptive Element-wise Linear Modulation](/audio-paper-digest-blog/posts/2026-05-04-songecho-towards-cover-song-generation-via)

🔥 **8.5/10** | 前25% | #音乐生成 | #扩散模型 | #数据集 #歌唱语音合成

👥 **作者与机构**

- 第一作者：Sifei Li（中国科学院自动化研究所MAIS、中国科学院大学人工智能学院）
- 通讯作者：Weiming Dong（中国科学院自动化研究所MAIS、中国科学院大学人工智能学院）
- 作者列表：
    - Sifei Li（中国科学院自动化研究所MAIS、中国科学院大学人工智能学院）
    - Yang Li（中国科学院自动化研究所MAIS、中国科学院大学人工智能学院）
    - Zizhou Wang（中国科学院自动化研究所）
    - Yuxin Zhang（中国科学院自动化研究所MAIS、中国科学院大学人工智能学院）
    - Fuzhang Wu（中国科学院软件研究所ISRC）
    - Oliver Deussen（康斯坦茨大学）
    - Tong-Yee Lee（成功大学）
    - Weiming Dong（中国科学院自动化研究所MAIS、中国科学院大学人工智能学院）

💡 **毒舌点评**

这篇论文精准地瞄准了“旋律保持”这一翻唱核心需求，并通过改进条件注入机制（IA-EiLM）和构建高质量数据集（Suno70k）给出了一个参数高效、效果显著的解决方案，理论与实验结合得相当扎实。不过，模型依然受限于底层基础模型（ACE-Step）对音色等细粒度控制的不足，且所用的AI生成数据集Suno70k在风格多样性、情感表达深度上可能与真实人类创作的音乐存在“域差距”，这或许会影响模型泛化到更复杂、更具表现力的真实翻唱场景。

🔗 **开源详情**

- **代码**：提供代码仓库链接：https://github.com/lsfhuihuiff/SongEcho_ICLR2026。
- **���型权重**：论文中提到“Code, dataset, and demos are available at...”，但未明确说明是否开源经过训练的完整SongEcho模型权重。基于常见实践，可能开源了新增的IA-EiLM模块和旋律编码器权重。
- **数据集**：**Suno70k** 数据集已公开，链接为 https://huggingface.co/datasets/nyuuzyou/suno。
- **Demo**：提供在线演示页面：https://vvanonymousvv.github.io/SongEcho_updated/。
- **复现材料**：提供了详细的训练细节（第5.1节）、评估协议（第5.2节）、基线复现细节（附录C.1）和超参数设置，复现指导充分。
- **论文中引用的开源项目**：
    *   **骨干模型**：ACE-Step (Gong et al., 2025)
    *   **评估工具**：mir_eval (Raffel et al., 2014), stable-audio-metrics, SongEval (Yao et al., 2025)
    *   **特征提取工具**：RVMPE (Wei et al., 2023) 用于音高提取, Qwen2-audio (Chu et al., 2024) 用于标签生成, Whisper (Radford et al., 2023) + All-in-One (Kim & Nam, 2023) 用于歌词转录
    *   **基线方法**：ControlNet (Zhang et al., 2023a), LoRA (Hu et al., 2022), MuseControlLite (Tsai et al., 2025)
- **论文中未提及开源计划**：未明确提及开源训练好的完整模型权重和大规模的预训练骨干（ACE-Step）权重（ACE-Step本身可能是开源的）。

📌 **核心摘要**

1.  **要解决什么问题**：在给定一段人声旋律和文本提示的条件下，生成同时包含新的人声演唱和和谐伴奏的完整歌曲（即翻唱歌曲），这要求模型在保持原旋律轮廓的同时进行风格重新诠释。
2.  **方法核心是什么**：提出SongEcho框架，核心是**实例自适应元素级线性调制**。它扩展了FiLM为**元素级线性调制**，以实现对隐藏状态在时序上的精确对齐调制；同时引入**实例自适应条件精炼**模块，使旋律条件能根据生成模型当前的隐藏状态进行动态调整，而非静态注入。
3.  **与已有方法相比新在哪里**：相比于使用交叉注意力（如MuseControlLite）或元素级相加（如ControlNet）的方法，EiLM提供了更灵活、时序对齐更直接的调制能力。IACR解决了传统条件编码与生成模型内部状态不兼容的问题，使条件融合更和谐。此外，论文开源了一个高质量的、带有丰富标注的AI歌曲数据集Suno70k。
4.  **主要实验结果如何**：在Suno70k测试集上，SongEcho的**RPA（0.708）**、**RCA（0.734）** 和**CLAP（0.324）** 等指标均显著优于基线方法，**FD（42.06）** 和**KL（0.112）** 等音质指标也远优于其他方法，且**可训练参数量（49.1M）仅为ACE-Step+ControlNet（1.6B）的3.07%**。主观听测（MOS）在旋律保真度、文本一致性、音频质量和整体偏好上均获最高分。
5.  **实际意义是什么**：推动了可控、高质量歌曲生成技术的发展，为音乐创作提供了新的AI辅助工具。所构建的开源数据集有助于解决歌曲AI研究中的数据稀缺和版权问题。
6.  **主要局限性是什么**：（1）音色控制能力有限，仅支持基于性别调整，无法进行更细粒度的音色模仿或合成。（2）生成的翻唱是全局风格迁移，未模拟人类音乐家在翻唱时可能进行的局部创造性改编（如颤音、滑音、音符时值变化）。（3）训练依赖于AI生成的音乐数据集，可能存在与真实人类音乐在情感、表达力上的差异。

---

### 27. [UALM: Unified Audio Language Model for Understanding, Generation and Reasoning](/audio-paper-digest-blog/posts/2026-05-04-ualm-unified-audio-language-model-for)

🔥 **8.5/10** | 前25% | #音频生成 | #自回归模型 | #统一音频模型 #音频问答

👥 **作者与机构**

- 第一作者：Jinchuan Tian（卡内基梅隆大学，NVIDIA）
- 通讯作者：未明确标注，论文指出所有作者贡献相等（Equal Contribution）
- 作者列表：
    - Jinchuan Tian（卡内基梅隆大学，NVIDIA）
    - Sang-gil Lee（NVIDIA）
    - Zhifeng Kong（NVIDIA）
    - Sreyan Ghosh（NVIDIA，马里兰大学）
    - Arushi Goel（NVIDIA）
    - Chao-Han Huck Yang（NVIDIA）
    - Wenliang Dai（NVIDIA）
    - Zihan Liu（NVIDIA）
    - Hanrong Ye（NVIDIA）
    - Shinji Watanabe（卡内基梅隆大学）
    - Mohammad Shoeybi（NVIDIA）
    - Bryan Catanzaro（NVIDIA）
    - Rafael Valle（NVIDIA）
    - Wei Ping（NVIDIA）

💡 **毒舌点评**

亮点在于首次系统性地证明了一个基于自回归语言模型的音频模型，可以通过数据缩放和特定技巧（如CFG和DPO）在生成质量上追平甚至超越扩散模型，并进一步将其扩展为能进行文本-音频联合推理的统一模型，技术路线清晰且有效。短板则在于其宣称的“统一”模型，其核心的音频理解数据集（AF3）和大规模生成数据（30M）并未公开，这使得“统一训练”和“匹配专用模型性能”的结论在独立复现层面打了折扣，更像一个强大的NVIDIA内部能力展示。

🔗 **开源详情**

- **代码：** 提供官方GitHub仓库链接：`https://github.com/NVIDIA/audio-intelligence/tree/main/UALM`。
- **模型权重：** 论文未提及公开预训练或后训练的模型权重。
- **数据集：** 论文未提及公开其使用的30M音频生成数据集或用于UALM-Reason后训练的富描述数据集。
- **Demo：** 提供在线演示网页：`https://research.nvidia.com/labs/adlr/UALM`。
- **复现材料：** 论文在附录中详细提供了预训练、后训练及推理的所有超参数配置（表5、6、7），并说明了代码库，为复现提供了清晰的路线图。
- **论文中引用的开源项目：** Qwen2.5 LLM， X-codec， BigVGAN， LAION-CLAP， OpenL3， PaSST， PANNs， AudioBox-Aesthetics， Stable-Audio-Open， ETTA， Audio Flamingo 3等。

📌 **核心摘要**

该论文旨在解决音频领域中理解、生成与推理任务相互割裂的问题。其方法核心是构建一个统一的音频语言模型（UALM），该模型基于一个预训练的文本LLM，并扩展了音频输入和输出能力。论文首先通过**UALM-Gen**证明了自回归语言模型在大规模数据（30M样本）、分类器自由引导（CFG）和直接偏好优化（DPO）等技术的支持下，其文本到音频生成质量可达到与最先进扩散模型相当的水平。接着，通过精心设计的数据混合比例和模态对齐训练策略，将理解、生成和文本推理任务统一到单个**UALM**模型中，并在各项任务上匹配了专用SOTA模型的性能。最后，提出了**UALM-Reason**，通过引入“富描述”作为中间表示，并设计了丰富化、对话和自我反思等多模态思维链，首次在音频研究中实现了涉及文本和音频的跨模态生成推理。实验结果表明，统一的UALM在音频生成（如AudioCaps数据集FD=65.87，CL=0.62）、音频理解（MMAU均值74.1%）和文本推理任务上均表现优异。其意义在于为构建具备感知、创造与反思能力的通用音频智能体提供了可行的架构和训练范式。主要局限性在于其依赖的大规模合成数据集未公开，且“富描述”的质量评估方法有待完善。

---

### 28. [SpeakerVid-5M: A Large-Scale High-Quality Dataset for Audio-Visual Dyadic Interactive Human Generation](/audio-paper-digest-blog/posts/2026-05-04-speakervid-5m-a-large-scale-high-quality-dataset)

🔥 **8.5/10** | 前25% | #数据集 | #自回归模型 | #音视频 #音频生成

👥 **作者与机构**

第一作者：Youliang Zhang（清华大学、StepFun）
通讯作者：Xiu Li（清华大学深圳国际研究生院）
作者列表：
  - Youliang Zhang（清华大学、StepFun）
  - Zhaoyang Li（StepFun）
  - Duomin Wang（StepFun，共同第一作者/责任作者†）
  - Jiahe Zhang（未说明具体机构）
  - Deyu Zhou（香港科技大学（广州）、StepFun）
  - Zixin Yin（香港科技大学、StepFun）
  - Xili Dai（StepFun）
  - Gang Yu（StepFun）
  - Xiu Li（清华大学深圳国际研究生院‡）

💡 **毒舌点评**

**亮点**：论文构建数据集的工程严谨性堪称典范，从多源数据收集到基于多种信号（SyncNet、ArcFace、3D-Speaker）的交叉验证，再到涵盖画面质量、运动模糊、音频清晰度的多层级过滤，流程完整且考虑周全，为社区贡献了一个定义明确、质量可控的“交钥匙”式基准数据集。**短板**：基线模型虽然设计完整，但模型体量（0.8B）与当前主流的视频生成模型（动辄数十亿甚至百亿参数）差距明显，其在视频生成核心指标（FID、FVD）上虽自身消融提升显著，但与更大更强的级联模型（如HalLo3）相比仍处下风，一定程度上削弱了其作为“标准答案”的说服力，更像一个“可行性验证”。

🔗 **开源详情**

- **代码**：论文明确承诺将公开数据处理代码和基线模型代码，但未提供具体的代码仓库链接（如GitHub地址）。论文中写有“Both the dataset and the data processing code will be publicly released.”和“We will open-source the entire dataset, including the raw data, annotations, and data processing pipeline”。因此，判定为 **有开源承诺，但具体链接未在文中给出**。
- **模型权重**：论文中未提及公开预训练或微调后的基线模型权重。
- **数据集**：论文明确承诺完全开源数据集，并说明发布形式为YouTube视频ID/URL列表、时间戳和生成的标注，不托管原始视频/音频。**开源方式清晰**。
- **Demo**：未提及在线演示。
- **复现材料**：提供了极其充分的复现材料，包括：详尽的数据收集、预处理、标注和过滤流程（第3节）；基线模型的架构细节、训练策略（三阶段）、超参数、硬件配置（附录A.7, A.8）；VidChatBench的构建方法和评估指标详细说明（第6.1节）；数据标注文件的具体格式和使用指南（附录A.11）；以及多处提示会开源代码。
- **论文中引用的开源项目**：
  - **数据处理工具**：SceneDetect, 3D-Speaker, YOLO, SyncNet, ArcFace, Qwen2.5-VL, Qwen-3, Whisper, DWpose, PaddleOCR。
  - **模型/架构组件**：Qwen2.5-Omni（理解模块）, CosyVoice2（音频分词器与声码器）, 3D-VAE（视频编解码）, NOVA（空间Transformer）。
  - **评估工具**：DOVER（视频质量评估）, Deep3DFaceRecon（表情特征提取）, CLIP（文本相似度计算）。

📌 **核心摘要**

1. **问题**：当前数字人研究正从单向驱动的“肖像生成”向双向交互的“虚拟人对话”迈进，但学术界严重缺乏为此类任务设计的大规模、高质量公开数据集。
2. **方法**：论文提出SpeakerVid-5M数据集，从YouTube收集视频，通过场景分割、说话人分离、人脸检测、唇音同步、身份矫正等步骤预处理，并利用多模态大模型（Qwen2.5-VL）和多种模型进行丰富标注（文本、骨骼、模糊度等），最后进行严格的质量过滤。同时，提供了一个基于自回归（AR）框架的音视频联合生成基线模型。
3. **创新**：① 首个针对“音频-视觉双人交互”任务的大规模数据集（5.2M片段，8.7K小时，其中双人对话770K对）。② 构建了多维度、分层级的数据质量控制与组织流程���对话分支、单人分支、聆听分支、多轮分支；预训练子集与SFT子集）。③ 定义并发布了VidChatBench评测基准。
4. **实验**：基线模型在VidChatBench上进行评测。消融实验表明，联合音视频生成、空间Transformer优化和训练噪声注入对提升视频质量（FVD从55.06降至28.82）、唇音同步（SyncNet得分从-升至2.698）和情感一致性（FIDEmotion从3.45降至3.22）有显著效果。与级联方案（Qwen+CosyVoice+Sonic/Hallo3）对比，本方法在情感和手势质量上占优，推理速度快一个数量级（3.17s/帧 vs 31-45s/帧）。
5. **实际意义**：该数据集填补了交互式虚拟人研究的数据空白，其丰富的标注也适用于人体动画、多模态对话等任务，将加速该领域的基础模型研究。
6. **局限性**：数据集来源存在人口统计偏差（偏英语、西方、男性）。基线模型规模较小，视频生成保真度与顶级扩散模型仍有差距，其主要价值在于验证数据集和AR框架的可行性。

---

### 29. [Are Deep Speech Denoising Models Robust to Adversarial Noise?](/audio-paper-digest-blog/posts/2026-05-04-are-deep-speech-denoising-models-robust-to)

🔥 **8.5/10** | 前25% | #语音增强 #对抗样本 | #信号处理 | #语音增强 #对抗样本

👥 **作者与机构**

- 第一作者：Will Schwarzer（马萨诸塞大学阿默斯特分校）
- 通讯作者：Will Schwarzer（马萨诸塞大学阿默斯特分校）
- 作者列表：Will Schwarzer（马萨诸塞大学阿默斯特分校）、Philip S. Thomas（马萨诸塞大学阿默斯特分校）、Andrea Fanelli（Dolby Laboratories）、Xiaoyu Liu（Meta）

💡 **毒舌点评**

论文将音频对抗攻击的研究从简单的扰动约束推进到了考虑真实声学环境（模拟过空传播）和严格心理声学掩蔽的实用化设定，这是一项重要且扎实的安全研究。然而，攻击的成功高度依赖于白盒梯度访问，且论文坦承通用对抗扰动和跨模型迁移基本无效，这限制了其直接展示的“威胁”的即时实用性，更像是一份详尽的系统性风险报告。

🔗 **开源详情**

- **代码**：提供公开代码仓库链接：`https://github.com/willschwarzer/adv-dns-public`。
- **模型权重**：论文研究的对象是四个已有公开检查点的开源DNS模型（Demucs/Denoiser, Full-SubNet+, FRCRN, MP-SENet），并详细列出了使用的具体版本和提交哈希（见附录G表4）。攻击本身是针对这些模型生成的，未提及公开攻击模型权重。
- **数据集**：使用来自**ICASSP 2022 DNS Challenge 4**公开数据集的音频（干净语音、噪声、RIR），并注明了引用和许可（CC-BY-4.0 for 数据， MIT for 代码）。
- **Demo**：论文中未提及在线演示。但提供了指向攻击样本在线试听页面的链接（`https://sites.google.com/view/adv-dns/`），用于评估主观不可感知性和攻击效果。
- **复现材料**：提供了极其详尽的复现信息，包括：所有实验设置（SNR， 混响， 模型）、优化算法及超参数（Adam， 学习率， 梯度裁剪， 迭代次数）、心理声学模型具体参数、STFT参数、人类研究协议、统计检验方法等。代码仓库应包含运行实验所需脚本。
- **论文中引用的开源项目**：OpenAI Whisper（用于ASR评估和过滤数据）、MP-SENet、Denoiser (Demucs)、FRCRN (ClearerVoice-Studio)、FullSubNet-Plus、MaskGCT（用于生成目标攻击语音）、DNS-Challenge数据集与代码、DNSMOS P.835、NISQA、ViSQOL。所有引用的项目及其版本、许可证在附录G的表4中详细列出。

📌 **核心摘要**

1.  **问题**：深度语音去噪（DNS）模型在安全关键应用（如助听器、应急通信）中广泛使用，但其对抗鲁棒性尚未被充分研究。论文旨在评估这些模型是否对精心设计的、人耳难以察觉的对抗噪声脆弱。
2.  **方法**：核心方法是提出一个基于心理声学掩蔽的对抗攻击框架。该框架通过计算掩蔽阈值（包括频率掩蔽和时域前后掩蔽）来约束扰动的功率谱密度，使其在原始语音信号中“隐藏”。优化采用投影梯度下降，损失函数为短时客观可懂度（STOI）。此外，框架通过维纳解卷积和梯度下降投影来模拟和应对扰动在房间脉冲响应（RIR）下的传播，以实现模拟过空攻击。
3.  **创新**：与已有工作（如使用简单p范数约束或未充分考虑感知掩蔽）相比，该工作的创新在于：a) 集成了增强的、包含时域掩蔽的心理声学模型，并引入偏移量调节掩蔽阈值，更好地平衡攻击成功率与不可感知性；b) 系统性地将攻击扩展到模拟真实声学环境（混响、不同背景噪声水平、过空传播）；c) 对多种开源DNS模型在不同设置下的鲁棒性进行了全面的机制分析，揭示了梯度流动（而非模型大小）是关键因素。
4.  **主要实验结果**：论文测试了Demucs, Full-SubNet+, FRCRN, MP-SENet四个模型。关键发现：a) **所有模型**都能在人耳无法察觉的扰动下被驱动输出无意义语音（STOI提升从正值变为负值，见图1）；b) 攻击在从极干净（70dB SNR）到嘈杂、混响的环境下均成功；c) Full-SubNet+因梯度爆炸展现出一定“伪鲁棒性”，但此保护机制已知可被绕过；d) 人类研究（15名音频专家）证实攻击后的音频几乎无法转写，且扰动通常不可察觉；e) 模拟过空攻击对除Full-SubNet+外的模型同样有效（见图5）；f) 简单的高斯噪声防御仅能部分缓解，但攻击者可能自适应（见图4）。通用扰动和跨模型迁移效果有限。

![无目标攻击导致的可懂度下降对比图](icassp-img://WtH2JxKJKf/0.png)
*图1：在不同背景信噪比（SNR）和混响条件下，四个DNS模型在加入不可察觉的对抗扰动前后，其输出相对于干净语音的STOI变化（ΔSTOI）。攻击成功地将ΔSTOI从正值（增强）变为负值（劣化），表明模型输出变得比含噪输入更不可懂。*

![不同感知约束下的攻击成功度与音频质量对比](icassp-img://WtH2JxKJKf/1.png)
*图2：归一化后的五种语音质量与可懂度指标（STOI，ViSQOL，NISQA，DNSMOS，ASR准确率）在攻击前、攻击后输入、攻击后模型输出的平均值。攻击导致所有质量指标显著下降。*

![跨Demucs检查点的留一法迁移攻击结果](icassp-img://WtH2JxKJKf/2.png)
*图3：使用不同Demucs检查点训练的攻击在留一法评估下的迁移性。迁移攻击仅造成轻微性能下降，远弱于白盒攻击。*

![高斯白噪声防御效果](icassp-img://WtH2JxKJKf/3.png)
*图4：对攻击后音频添加不同强度的高斯白噪声（以SNR衡量）作为防御。防御能部分提升STOI，但只有在噪声强度足以损害正常语音性能时才有效。*

![模拟过空攻击结果](icassp-img://WtH2JxKJKf/4.png)
*图5：在模拟过空传播（使用混合的合成和真实RIR）设置下的攻击结果。除Full-SubNet+外，攻击对其他模型依然有效。*

![人类研究：转写准确率与ABX辨别准确率](icassp-img://WtH2JxKJKf/5.png)
*图6：人类研究结果。(a)转写任务词准确率：攻击输出几乎无法转写。(b)ABX任务准确率：参与者区分攻击样本与原始样本的准确率接近随机水平（50%），表明扰动难以察觉。*

![目标攻击的可懂度分析](icassp-img://WtH2JxKJKf/6.png)
*图7：目标攻击中，目标语音在攻击后输入与模型输出中的相对可懂度（Δtarget）。正值表示模型输出使目标短语比原始干净语音更清晰。*

5.  **实际意义**：研究明确指出了开源DNS模型在安全关键应用中部署的重大隐患。攻击者可通过不可察觉的扰动使通信中断或语音识别系统失效。论文强调，在缺乏更强大防御（如对抗训练）的情况下，应谨慎使用开源DNS模型。
6.  **主要局限性**：a) 攻击为白盒攻击，需要模型梯度信息；b) 通用扰动和跨模型迁移攻击效果有限；c) 目标攻击虽在指标上成功，但人耳仅能听到微弱痕迹；d) 模拟过空传播仍为线性模型，未考虑非线性失真、增益控制等；e) Full-SubNet+的“伪鲁棒性”源于梯度爆炸，此漏洞可能被专门攻击绕过。

---

### 30. [Human Behavior Atlas: Benchmarking Unified Psychological And Social Behavior Understanding](/audio-paper-digest-blog/posts/2026-05-04-human-behavior-atlas-benchmarking-unified)

🔥 **8.5/10** | 前25% | #多模态模型 | #预训练 | #音频分类 #音视频

👥 **作者与机构**

- 第一作者：Keane Ong（MIT；National University of Singapore）
- 通讯作者：未说明
- 作者列表：Keane Ong（MIT；National University of Singapore）、Wei Dai（MIT）、Carol Li（MIT）、Dewei Feng（MIT）、Hengzhi Li（MIT；Imperial College London）、Jingyao Wu（MIT）、Jiaee Cheong（Harvard University）、Rui Mao（Nanyang Technological University）、Gianmarco Mengaldo（National University of Singapore）、Erik Cambria（Nanyang Technological University）、Paul Pu Liang（MIT）

💡 **毒舌点评**

**亮点**：在行为理解领域，该工作首次系统性地将分散在情感、认知、病理和社会过程等多个维度的异构数据集、任务和评估指标统一成一个标准化基准，为构建行为基础模型提供了至关重要的“数据-任务-评估”三位一体的基础设施。**短板**：论文更像是一个扎实的工程整合工作，其核心创新在于“统一”而非提出解决行为理解某一具体子任务（如深度讽刺识别或复杂社交推理）的新算法或架构，对于寻求领域内技术深度突破的读者来说，可能略显“广而不深”。

🔗 **开源详情**

- **代码**：论文明确提供了代码仓库链接：`https://github.com/MIT-MI/human_behavior_atlas`。
- **模型权重**：论文声明将发布“HUMAN BEHAVIOR ATLAS”基准及其相关的“OMNISAPIENS-7B”模型。
- **数据集**：论文声明将发布“HUMAN BEHAVIOR ATLAS”基准数据集。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文在附录中提供了极其详尽的复现信息，包括：
    - 所有13个子数据集的训练/验证/测试集划分数量（表7）。
    - 完整的训练超参数（学习率、batch size、LoRA配置、优化器设置等）。
    - 评估指标的详细计算公式（加权F1、加权准确率）。
    - 用于评估开放式生成任务的LLM评判器（GPT-5-nano）的具体提示模板。
    - 模型架构的数学形式化描述（附录B.1）。
    - 强化学习GRPO算法的详细推导和奖励函数设计（附录B.2）。
- **论文中引用的开源项目/工具**：
    - **骨干模型**：Qwen2.5-Omni-7B。
    - **行为描述符提取**：MediaPipe（用于面部和身体关键点），OpenSMILE（使用ComParE 2016配置提取声学特征）。
    - **语音转录**：Whisper v3 Large模型。
    - **评估工具**：GPT-5-nano（作为LLM裁判）。
    - **训练框架**：PyTorch，Accelerate。
    - **优化器**：Adam，AdamW。

📌 **核心摘要**

本文旨在解决当前人类心理与社会行为理解领域中存在的任务专业化、数据集异构、评估标准不一以及缺乏统一基础模型训练框架的问题。为此，作者构建了**HUMAN BEHAVIOR ATLAS**，这是一个涵盖情感、认知、病理、社会过程四大维度，包含超过101k个文本、音频、视觉多模态样本的统一基准。核心方法包括：1）定义统一的行为分类体系；2）将所有数据集样本重新组织为标准化的“提示-目标”格式；3）统一跨数据集的评估指标；4）提取行为描述符（如面部关键点、声学特征）以丰富数据。基于此基准，论文训练并评估了三个7B参数的模型变体：**OMNISAPIENS-7B SFT**（监督微调）、**OMNISAPIENS-7B BAM**（集成行为描述符适配器）和**OMNISAPIENS-7B RL**（强化学习）。实验结果表明，在HUMAN BEHAVIOR ATLAS上训练的模型在10个行为任务中的多数上优于现有的通用多模态大模型（如Qwen2.5-Omni-7B），例如在情绪识别（EMO）任务上，OMNISAPIENS-7B BAM达到0.651（CREMA-D数据集），而Qwen2.5-Omni-7B仅为0.521。此外，在该基准上的预训练能显著提升模型到新数据集（如MUStARD讽刺检测）的迁移能力，即使微调仅一个epoch，OMNISAPIENS-7B SFT的加权F1也能达到0.658，远高于从头微调的Qwen2.5-Omni-7B的0.473。该工作为行为理解领域提供了首个大规模的统一基准、标准化的建模范式和经过验证的模型，推动了通用行为基础模型的发展，但其模型规模（7B）和主要针对分类任务的设计可能限制了其在更复杂生成或推理场景下的应用。

---

### 31. [Closing the Gap Between Text and Speech Understanding in LLMs](/audio-paper-digest-blog/posts/2026-05-04-closing-the-gap-between-text-and-speech)

🔥 **8.5/10** | 前25% | #语音大模型 | #知识蒸馏 #主动学习 | #知识蒸馏 #主动学习

👥 **作者与机构**

- 第一作者：Santiago Cuervo（Université de Toulon, Aix Marseille Université, CNRS, LIS）
- 通讯作者：未说明
- 作者列表：Santiago Cuervo（Université de Toulon, Aix Marseille Université, CNRS, LIS）、Skyler Seto（Apple）、Maureen de Seyssel（Apple）、Richard He Bai（Apple）、Zijin Gu（Apple）、Tatiana Likhomanenko（Apple）、Navdeep Jaitly（Apple）、Zakaria Aldeneh（Apple）

💡 **毒舌点评**

论文对“文本-语音理解差距”的成因（遗忘与失准）进行了教科书级的清晰剖析，并据此设计了针对性的SALAD方法，数据效率极高，这种“分析驱动解决方案”的范式是最大亮点。然而，其主要验证集中于英语语音，对于跨语言泛化能力和TTS生成质量对下游性能的长期影响讨论不足，是一个有待拓展的短板。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开权重。
- 数据集：使用了公开数据集（LibriHeavy， Emilia， FineWeb-Edu），但论文本身未发布新数据集。
- Demo：未提及在线演示。
- 复现材料：论文提供了非常详细的附录，涵盖模型描述（A.1）、训练细节（A.2， A.3）、评估协议（A.5）、数据分析方法（A.4， A.6）等，为复现提供了坚实基础。
- 论文中引用的开源项目：Mimi语音分词器 (Défossez et al., 2024)、Kokoro-TTS (开源TTS模型)、SmolLM (Allal et al., 2025)、Whisper (用于评估)、BAAI/bge-large-en-v1.5 (用于聚类)、Qwen2.5 LLMs。

📌 **核心摘要**

这篇论文旨在解决一个核心问题：将文本大语言模型（LLM）适配到语音输入后，其在语言理解任务上的性能会显著低于其原始文本版本（即“文本-语音理解差距”）。
方法核心是提出了SALAD（Sample-efficient Alignment with Learning through Active selection and cross-modal Distillation），它包含两个阶段：1）在天然语音数据上进行跨模态知识蒸馏，让语音模型模仿其文本教师的输出分布，以减轻遗忘和失准；2）利用模型自身的失准信号，通过主动学习算法从大规模文本语料中选择最具挑战性的领域，合成少量语音数据进行针对性训练，以弥补领域差距。
与先前需要海量合成数据或专有数据集的方法相比，SALAD的创新在于结合了蒸馏目标（对齐效果好）与主动数据选择（数据效率高），两者协同作用。实验结果显示，在3B和7B参数规模的模型上，SALAD仅使用少于一个数量级的公开语音数据（约14万小时天然语音+1%的合成数据），就在6个广泛领域的知识与推理基准测试（如HellaSwag， ARC-C）上，达到了与当前最强开源模型（如Qwen2.5-Omni）相近的语音理解性能，平均差距仅为1.2%，并大幅超越了其他基线。
其实际意义在于证明了无需依赖天量数据或闭源资源，也能高效地缩小语音与文本模型的能力差距，为开发高效、可复现的语音大模型提供了新路径。
主要局限性是实验验证主要基于英语语音，且评估集中在多选题形式，对开放式生成或更复杂对话场景的验证有限。

---

### 32. [From Text to Talk: Audio-Language Model Needs Non-Autoregressive Joint Training](/audio-paper-digest-blog/posts/2026-05-04-from-text-to-talk-audio-language-model-needs-non)

🔥 **8.5/10** | 前25% | #语音对话系统 | #扩散模型 | #端到端 #多模态模型

👥 **作者与机构**

- 第一作者：Tianqiao Liu（好未来教育集团 TAL Education Group，暨南大学 Guangdong Institute of Smart Education）
- 通讯作者：Xueyi Li（暨南大学 Guangdong Institute of Smart Education）
- 作者列表：Tianqiao Liu（好未来教育集团，暨南大学）、Xueyi Li（暨南大学）、Hao Wang（北京大学）、Haoxuan Li（北京大学）、Zhichao Chen（北京大学）、Weiqi Luo（暨南大学）、Zitao Liu（暨南大学）

💡 **毒舌点评**

论文对端到端语音模型中文本与音频生成范式错配问题的洞察一针见血，并给出了一个理论上优雅、实验上有效的混合训练框架，是当前S2S建模思路的一次重要升级。但论文对模型推理时块级扩散的计算开销分析着墨不多，且训练数据依赖大量合成语音（如CosyVoice2生成），其在真实复杂声学环境下的泛化能力仍是潜在挑战。

🔗 **开源详情**

- **代码**：论文明确提供了代码仓库链接：`https://github.com/ai4ed/TtT`。
- **模型权重**：论文中未提及预训练模型权重（如Pretrain+TtT的检查点）的公开下载链接。
- **数据集**：论文中使用的训练数据大多为公开数据集（如AISHELL, LibriSpeech, VoiceAssistant-400K等），但具体的数据处理脚本和混合配方未完全开源。评估数据集如URO-Bench、Audio-QA集等为公开基准。
- **Demo**：论文中未提及提供在线演示（Demo）。
- **复现材料**：论文提供了极其详细的训练细节（超参数、优化器设置、训练策略概率）、模型配置（基于Qwen2.5）、以及架构和注意力机制的示意图（图2, 3），并附有详尽的附录。这些构成了坚实的复现基础。
- **引用的开源项目**：论文依赖并引用了多个开源项目作为基础组件，主要包括：
    - **音频分词器/解码器**：GLM-4-Voice (Zeng et al., 2024)。
    - **主干LLM**：Qwen2.5系列。
    - **ASR评估工具**：Whisper (Radford et al., 2023)、Paraformer。
    - **TTS数据生成**：CosyVoice2。
    - **训练框架**：DeepSpeed。
- **论文中提及的开源计划**：论文中未提及额外的开源计划（如未来发布模型权重或扩展数据）。

📌 **核心摘要**

本文针对现有端到端语音到语音（S2S）模型用统一自回归（AR）方法建模文本和音频所存在的范式错配问题，提出了“Text-to-Talk”（TtT）框架。**核心问题**在于，文本生成是强序列依赖的（目标-目标依赖），而音频生成更依赖输入源（源-目标依赖），强行用AR约束音频会引入不必要的误差传播。**方法核心**是设计一个混合生成框架，在同一个Transformer中，对文本使用标准AR建模，对音频段使用吸收离散扩散（一种NAR范式）建模，并证明了这种联合训练目标是目标联合分布的上界。**与已有方法相比**，新在两点：1）首次识别并形式化了文本与音频在依赖结构上的不对称性；2）提出了一个统一的架构和训练框架来适配这种不对称性，而非强行统一生成范式。**主要实验结果**显示，TtT在Audio-QA、ASR、AAC和URO-Bench等多个基准上，一致超越了纯AR和纯NAR的基线模型。例如，在3B参数规模下，TtT在多个ASR数据集上的WER大幅优于Qwen2.5-3B (AR)，在Audio-QA任务上也显著提升。**实际意义**在于，为构建更自然、高效、符合生成特性的端到端语音交互系统提供了新思路。**主要局限性**包括：1）块级扩散推理的效率需要进一步评估；2）模型性能对大规模多模态预训练数据（约200B tokens）有一定依赖；3）尽管在轻量级模型中表现优异，但与某些超大参数量模型（如GLM-4-Voice）在综合基准上仍有差距。

**关键实验结果表格（摘录）：**

| 模型 | 参数量 | Audio-QA (LQ.) ↑ | ASR (AISHELL-2) ↓ | URO-Bench Basic Understanding ↑ |
| :--- | :--- | :--- | :--- | :--- |
| Qwen2.5-3B (AR) | 3B | 10.00 | 54.94 | 34.32 |
| Qwen2.5-3B (NAR) | 3B | 0.67 | 212.27 | 7.22 |
| **TtT (Pretrain+TtT)** | **3B** | **40.07** | **6.80** | **57.63** |
| GLM-4-Voice | 9B | 62.67 | - | 85.82 |

---

### 33. [SmartDJ: Declarative Audio Editing with Audio Language Model](/audio-paper-digest-blog/posts/2026-05-04-smartdj-declarative-audio-editing-with-audio)

🔥 **8.5/10** | 前25% | #音频编辑 | #音频大模型 | #扩散模型 #空间音频

👥 **作者与机构**

- 第一作者：Zitong Lan（宾夕法尼亚大学WAVES实验室）
- 通讯作者：未明确说明（论文未指定通讯作者）
- 作者列表：Zitong Lan（宾夕法尼亚大学WAVES实验室）、Yiduo Hao（宾夕法尼亚大学WAVES实验室）、Mingmin Zhao（宾夕法尼亚大学WAVES实验室）

💡 **毒舌点评**

**亮点**：本文最大的亮点在于提出了“声明式”音频编辑的范式，并通过一个设计精巧的“ALM规划器+LDM编辑器”框架实现了它，同时配套构建了首个可扩展的声明式音频编辑数据集合成管道，形成了一个完整的技术闭环。
**短板**：实验完全依赖于合成数据集，虽然合成过程逼真，但真实世界中的复杂声场、噪声和语义歧义可能对ALM的推理和LDM的执行构成远超合成环境的挑战，其泛化能力在论文中未得到真实场景验证。

🔗 **开源详情**

- **代码**：论文中未提及代码仓库链接。但承诺在论文接受后发布代码。
- **模型权重**：未提及是否公开预训练的ALM和LDM权重。但论文承诺发布预训练模型。
- **数据集**：论文中未提及公开合成数据集的具体获取方式。但承诺发布合成数据集。
- **Demo**：未提及提供在线演示。
- **复现材料**：提供了极其详细的实现细节，包括模型架构（层数、维度、参数量）、训练配置（学习率、批大小、优化器、训练步数/轮数）、数据合成流程（提示词模板、声学模拟参数），以及消融实验设置。附录非常完整。
- **论文中引用的开源项目**：CLAP（用于音频编码）、FLAN-T5（用于文本编码）、Stable-Audio-Open（作为部分基线）、PyRoomAcoustics（用于声学模拟）、AudioSep（作为对比模型）、GPT-4o（用于数据合成）。

📌 **核心摘要**

1. **要解决什么问题**：现有音频编辑模型依赖于模板化指令（如“添加鸟鸣”），需要用户指定具体操作，无法理解用户高级的、声明式的意图（如“让这个声音听起来像在阳光明媚的森林里”）。同时，现有系统普遍局限于单声道音频，无法编辑空间信息。
2. **方法核心是什么**：提出SmartDJ框架。它包含两个核心组件：(1) **音频语言模型（ALM）作为规划器**，接收原始音频和用户的高级声明式指令，输出一个原子编辑步骤序列（如“移除雨声”、“在左边添加鸟鸣”）；(2) **潜在扩散模型（LDM）作为编辑器**，按照ALM规划的步骤顺序，逐步执行编辑操作，最终生成目标立体声音频。
3. **与已有方法相比新在哪里**：首次实现了“声明式”音频编辑范式，将用户意图理解与音频信号操作分离。首次将音频语言模型的推理能力系统性地引入音频编辑流程。首次构建了支持立体声、包含声明式指令-原子操作-音频轨迹的配对数据集生成管道。首次系统评估了编辑操作对空间音频特性的影响。
4. **主要实验结果如何**：在声明式编辑任务和多种单步原子操作上，SmartDJ在各项客观指标（FD, FAD, LSD等）和主观用户偏好率上均显著优于端到端训练的Audit模型以及多种零样本基线（SDEdit, ZETA等）。例如，在声明式编辑任务中，SmartDJ的FAD得分为1.52，远优于最佳基线Audit的5.67；用户研究显示，在音频质量和与指令的对齐度上，SmartDJ的胜率在80%-95.5%之间（详见表1）。
    | 框架 | 方法 | 训练 | 速度 | FD↓ | FAD↓ | KL↓ | LSD↓ | CLAP↑ |
    |---|---|---|---|---|---|---|---|---|
    | 无ALM | Audit | 是 | 2.07s | 28.56 | 10.00 | 3.07 | 1.93 | 0.11 |
    | 有ALM | SDEdit | 否 | 301s (74.6s) | 19.66 | 3.71 | 3.25 | 2.22 | 0.17 |
    | | Audit | 是 | 11.6s (2.07s) | 21.50 | 5.67 | 2.80 | 1.49 | 0.18 |
    | | **SmartDJ (ours)** | **是** | **13.1s (2.40s)** | **10.60** | **1.52** | **2.84** | **1.40** | **0.21** |
5. **实际意义是什么**：该工作为下一代智能、直观的音频编辑工具铺平了道路，有望革新VR/AR、游戏、影视制作等领域的音频后处理工作流，提升创作效率和沉浸感。
6. **主要局限性是什么**：整个框架的训练和评估完全依赖于合成数据集，其在真实、复杂、非结构化声场中的性能未被验证。ALM生成步骤的推理时间（约4.8秒）和多步编辑的累积时间（13.1秒）相比端到端方法仍有优化空间。框架对新增编辑操作类型的扩展需要重新训练。

---

### 34. [Scaling Speech Tokenizers with Diffusion Autoencoders](/audio-paper-digest-blog/posts/2026-05-04-scaling-speech-tokenizers-with-diffusion)

🔥 **8.5/10** | 前25% | #语音识别 | #扩散模型 | #语音合成 #流匹配

👥 **作者与机构**

- 第一作者：Yuancheng Wang (Meta超级智能实验室、香港中文大学（深圳）)
- 通讯作者：未明确说明（论文中注明“*Work done during an internship at Meta”，但未指明通讯作者）
- 作者列表：Yuancheng Wang（Meta超级智能实验室、香港中文大学（深圳）），Zhenyu Tang（Meta超级智能实验室），Yun Wang（Meta超级智能实验室），Arthur Hinsvark（Meta超级智能实验室），Yingru Liu（Meta超级智能实验室），Yinghao Aaron Li（Meta超级智能实验室），Kainan Peng（Meta超级智能实验室），Junyi Ao（Meta超级智能实验室、香港中文大学（深圳）），Mingbo Ma（Meta超级智能实验室），Mike Seltzer（Meta超级智能实验室），Qing He（Meta超级智能实验室），Xubo Liu（Meta超级智能实验室）

💡 **毒舌点评**

**亮点**：论文抓住了语音标记化器“既要压缩效率，又要重建质量，还要语义丰富”的“不可能三角”，用一个统一的扩散自编码器框架给出了一个极具竞争力的解，并在12.5Hz的极低帧率下将多项指标推向了新高度。**短板**：尽管提出了shortcut fine-tuning等解码加速方案，但扩散模型固有的多步采样本质仍是其在实时流式应用中的阿喀琉斯之踵，论文对此的解决方案（如轻量扩散头）效果有待更严苛场景的验证。

🔗 **开源详情**

- **代码**：论文未提及具体代码仓库链接，但在附录D提供了详细的伪代码，并承诺在发表后发布。
- **模型权重**：承诺在发表后发布预训练模型检查点（在公开研究数据集上）。
- **数据集**：使用200万小时内部数据，未提及公开。
- **Demo**：提供了演示样例的链接 https://sitok-demo.github.io/。
- **复现材料**：提供了非常详细的模型架构（附录A）、训练循环伪代码（附录D.2）、超参数（附录D.3）和评估协议。
- **依赖的开源项目**：论文提到了依赖的开源项目或工具，如Llama Transformer架构、Vocos声码器、Whisper-large-v3用于评估。

📌 **核心摘要**

本文针对语音标记化器在低比特率下面临的语义编码、声学重建与压缩效率难以兼顾的核心问题，提出了**Speech Diffusion Tokenizer (SiTok)**。其核心是将向量量化与扩散自编码器进行**端到端联合优化**，使离散编码既能高度压缩，又与生成式解码器的分布显式对齐。与先前两阶段或仅依赖重建损失的方法相比，SiTok创新性地引入了**CTC语义正则化**，直接对量化后的潜在空间施加文本监督，迫使离散token保留丰富的语言结构。实验表明，在极端的12.5 Hz token率和200 bits/s比特率下，SiTok在语音重建（如WER 3.34， SIM 0.682）和下游理解任务（如ASR WER 4.95）上均显著优于强基线。此外，通过**快捷微调**技术，解码步骤可缩减至2-4步而几乎不损质量。该工作为构建统一的语音语言模型提供了一个高效且全面的接口，但其在流式生成和多语言支持上的潜力有待进一步挖掘。

---

### 35. [Entropy-Monitored Kernelized Token Distillation for Audio-Visual Compression](/audio-paper-digest-blog/posts/2026-05-04-entropy-monitored-kernelized-token-distillation)

🔥 **8.5/10** | 前25% | #音视频事件检测 | #知识蒸馏 | #多模态模型 #音频分类

👥 **作者与机构**

- 第一作者：Hyoungseob Park (Yale University, Amazon AGI 实习期间完成)
- 通讯作者：未明确说明（论文未标注通讯作者信息）
- 作者列表：
    - Hyoungseob Park (Yale University)
    - Lipeng Ke (Amazon AGI)
    - Pritish Mohapatra (Amazon AGI)
    - Huajun Ying (Amazon AGI)
    - Sankar Venkataraman (Amazon AGI)
    - Alex Wong (Yale University)

💡 **毒舌点评**

**亮点**：将蒸馏对象从“特征本身”或“输出概率”巧妙地转换为“特征间的成对关系矩阵”（核化令牌），从而绕开了师生模型维度必须匹配的硬约束，这个思路非常实用且有效。**短板**：尽管实验全面，但核心方法（计算Gram矩阵 + 熵加权）更像是经典技术（核方法、信息熵）在现代Transformer蒸馏场景下的工程化应用组合，理论创新深度有限，更像是一个优秀、扎实的“系统解决方案”。

🔗 **开源详情**

- **代码**：论文中明确表示“we will release the code and the pretrained weights”，但未提供具体仓库链接（如GitHub）。**论文中未提及具体代码链接**。
- **模型权重**：承诺发布预训练权重，但未提供下载地址。
- **数据集**：使用公开数据集VGGSound和AVS-Bench，并引用了获取方式。
- **Demo**：未提及。
- **复现材料**：提供了极其详细的附录（Appendix E），包括：
    - 训练数据划分（VGGSound: 182,536训练，15,331测试）。
    - 模型架构规格（如教师/学生的维度、深度、MLP比率）。
    - 全部超参数（学习率、损失权重、批量大小等）。
    - 训练硬件（单卡A100 GPU，训练时长）。
    - 评估指标定义。
- **论文中引用的开源项目**：引用了CAVMAE（Gong et al., 2022b）、UFE-AVS（Liu et al., 2024a）等作为教师模型基础，以及VGGSound和AVS-Bench数据集。
- **总体开源状态**：论文承诺开源并提供了高水平的复现文档，是积极的信号，但当前版本中缺少可直接访问的代码和权重链接。

📌 **核心摘要**

1.  **问题**：如何将大型、复杂的音频-视觉教师模型高效压缩成小型学生模型，同时在资源受限的边缘设备上保持高性能，尤其需要解决师生模型架构/维度不同以及不同模态（音频、视觉）信息重要性动态变化带来的挑战。
2.  **方法核心**：提出**熵监控的核化令牌蒸馏（EM-KTD）**。首先，**核化令牌蒸馏（KTD）**：不直接蒸馏特征向量，而是将每个模态的特征令牌化后，计算其成对相似度矩阵（Gram矩阵，使用线性、多项式或RBF核），然后最小化师生模型该矩阵的差异。其次，**熵监控（EM）**：为每个模态添加一个任务头，通过测量其输出熵来量化该模态当前输入的信息量（不确定性），并以此为权重自适应地调节该模态的蒸馏损失。
3.  **与已知方法相比新在**：相较于传统的输出空间蒸馏（KD）或需要维度匹配的潜在特征蒸馏，KTD通过蒸馏关系矩阵实现了架构无关的潜在空间蒸馏。相较于同样基于关系的MTST方法，KTD保留了完整的、未经掩码和Softmax归一化的原始相似度信息。EM则提供了动态、自适应的蒸馏强度调节，避免了对不信息模态的过度监督。
4.  **主要实验结果**：在**VGGSound音频-视觉事件分类**上，EM-KTD（+KD）使用仅6%的教师参数（学生10M vs 教师164M），保留了**96.9%的准确率**和**97.5%的mAP**。在**AVS-Bench音频-视觉分割**的S4（单源）和MS3（多源）任务上，EM-KTD学生模型以仅4%的教师视觉编码器参数，达到了**97.1%**的教师性能（S4 MJ指标）。所有消融实验均证实了KTD、核函数选择以及熵监控的有效性。
5.  **实际意义**：提供了一种高效、通用的多模态模型压缩方案，特别适用于计算资源有限的边缘AI设备（如智能手机、物联网设备），使得复杂的音视频理解模型得以实际部署。
6.  **主要局限性**：KTD的计算复杂度随令牌数平方增长（O(N^2)），论文通过实例级计算和滑动窗口近似进行缓解，但仍是潜在瓶颈。熵监控的线性探针性能可能影响加权质量，尽管实验证明其鲁棒性。方法的有效性高度依赖于教师模型本身能为每个模态提供有意义的特征，且在回归等任务上需要重新设计熵监控方式。

---

### 36. [Latent Fourier Transform](/audio-paper-digest-blog/posts/2026-05-04-latent-fourier-transform)

🔥 **8.5/10** | 前25% | #音乐生成 | #扩散模型 | #音频生成

👥 **作者与机构**

- 第一作者：Mason Long Wang (MIT CSAIL)
- 通讯作者：未说明
- 作者列表：Mason Long Wang (MIT CSAIL), Cheng-Zhi Anna Huang (MIT CSAIL)

💡 **毒舌点评**

亮点在于，它提出了一个优雅且系统性的框架，将傅里叶分析引入生成模型的潜空间，为音乐生成提供了一个全新的、连续的“时间尺度”控制轴，概念上比现有的离散层次控制（如RVQ层）更直观。短板是，虽然实验在MTG-Jamendo等数据集上表现优异，但音乐生成模型的通用评估依然困难，且用户研究规模有限（29人），对“音乐连贯性”等主观感受的量化仍具挑战。

🔗 **开源详情**

- **代码**：论文中提供了公开的代码仓库链接（https://github.com/maswang32/latentfouriertransform/）。
- **模型权重**：论文中未明确提及是否公开预训练模型权重。
- **数据集**：主要使用公开数据集MTG-Jamendo、GTZAN、Maestro，论文未提供其私有处理版本。
- **Demo**：论文中提到提供在线音频演示（https://masonlwang.com/latentfouriertransform/）。
- **复现材料**：论文附录（Appendix A）提供了极其详细的实验设置信息，包括：各版本编码器（MLP, U-Net, DAC）的具体架构和超参数、解码器（扩散模型）架构、训练细节（优化器、学习率、batch size、迭代次数、warmup、EMA等）、其他超参数（掩码生成参数、扩散参数）、数据集说明、实验具体设置（频率带划分、用户研究细节）、隔离实验和可解释性实验的方法。这些信息足以支持复现。
- **论文中引用的开源项目**：BigVGAN（声码器）、DAC（音频编码器）、Essentia、Librosa、VGGish等。

📌 **核心摘要**

1.  **要解决什么问题**：现有基于粗到细生成范式的音乐生成模型（如扩散模型、自回归模型）难以对生成过程进行中、小尺度特征的精细控制。用户通常只能控制全局属性（如文本描述）或特定语义属性（如音高、响亮），无法直接指定并控制音乐中不同时间尺度（如和弦进行、颤音）的模式。
2.  **方法核心是什么**：论文提出了“潜空间傅里叶变换”（LATENTFT）框架。它使用一个扩散自编码器将音频编码为潜向量时间序列，并对该序列进行离散傅里叶变换（DFT），得到“潜频谱”。在训练时，对潜频谱进行随机掩码（保持频带相关性和对数频率轴），然后用掩码后的潜序列作为条件，训练扩散解码器重构音频。
3.  **与已有方法相比新在哪里**：
    - **控制维度新**：首次在生成模型中引入对“潜空间频率”（对应音乐模式的时间尺度）的直接、连续控制，类似于音频均衡器（EQ）在音色上的作用，但作用对象是音乐结构。
    - **训练策略新**：核心创新在于训练时的潜频域掩码策略。通过在训练中随机遮蔽潜频谱的不同频段，使模型学会从部分频谱信息中恢复完整音乐，从而支持推理时用户指定的、针对特定时间尺度的控制。
    - **任务定义新**：将音乐生成/融合任务从属性条件或简单特征混合，提升到了基于时间尺度的、可解释的条件混合。
4.  **主要实验结果如何**：论文在条件生成和融合两个任务上，与多种基线（掩码Token模型、引导梯度、ILVR、DAC/RAVE后处理、频谱图滤波、交叉合成）进行了对比。在MTG-Jamendo数据集上的关键结果如下表所示，LATENTFT在各项指标上均显著优于基线，尤其是在音频质量（FAD）和条件遵循（如响度、节奏相关性）方面。

| 方法 | 条件生成 FAD ↓ | 条件生成 节奏相似度 ↑ | 融合 FAD ↓ | 融合 节奏相似度 ↑ |
| :--- | :--- | :--- | :--- | :--- |
| LATENTFT-MLP | **0.337** | **0.963** | 1.387 | 0.873 |
| LATENTFT-UNet | 0.348 | **0.966** | **1.357** | **0.878** |
| ILVR | 1.537 | 0.839 | 2.696 | 0.858 |
| Guidance | 1.061 | 0.813 | 1.466 | 0.832 |
| DAC | 7.016 | 0.838 | 6.257 | 0.792 |

*（表1：MTG-Jamendo测试集上的条件生成与融合结果）*

此外，消融研究证实了频率掩码、频带相关性掩码和对数频率缩放对性能的关键作用。用户研究显示，LATENTFT在音频质量和融合能力上均显著优于基线。
5.  **实际意义是什么**：该工作推动了可解释、可控音乐生成的发展，为音乐人提供了一种基于“时间尺度”的新交互范式。它不仅展示了潜空间频域操作的潜力，也为其他序列生成任务（如视频、舞蹈）提供了借鉴。
6.  **主要局限性是什么**：方法目前主要应用于音乐生成任务。潜频谱中不同频段与具体音乐属性的对应关系（如图5所示）虽然可解释，但仍是数据驱动的，缺乏先验的物理或音乐理论锚定。此外，模型需要针对特定数据集进行训练，其泛化性有待进一步验证。

---

### 37. [MIAM: Modality Imbalance-Aware Masking for Multimodal Ecological Applications](/audio-paper-digest-blog/posts/2026-05-04-miam-modality-imbalance-aware-masking-for)

🔥 **8.5/10** | 前25% | #生态计算 | #数据增强 | #多模态模型 #鲁棒性

👥 **作者与机构**

第一作者：Robin Zbinden（洛桑联邦理工学院，EPFL）
通讯作者：Robin Zbinden（robin.zbinden@epfl.ch，洛桑联邦理工学院，EPFL）
作者列表：
  - Robin Zbinden（洛桑联邦理工学院，EPFL，*共同第一作者）
  - Wesley Monteith-Finas（洛桑联邦理工学院，EPFL，*共同第一作者）
  - Gencer Sumbul（洛桑联邦理工学院，EPFL）
  - Nina van Tiel（洛桑联邦理工学院，EPFL）
  - Chiara Vanalli（洛桑联邦理工学院，EPFL）
  - Devis Tuia（洛桑联邦理工学院，EPFL）

💡 **毒舌点评**

这篇论文的亮点在于它将一个看似简单的技术问题（掩码策略）进行了深入的理论形式化，并以此为基础设计出针对性的解决方案，实验部分尤其扎实，在生态数据集上挖掘出的可解释性发现（如NDVI和热浪的影响）也颇具价值。短板在于，其方法核心（动态调整Beta分布参数）依赖于无标签数据下对“模态性能”的估计（如重构损失），这在更通用的无监督场景下可能不稳定，且其有效性在模态数量较少（如仅有2种模态）的场景下可能被削弱。

🔗 **开源详情**

- **代码**：是。提供了完整的开源代码仓库链接：`https://github.com/zbirobin/MIAM`。
- **模型权重**：是。提供了在HuggingFace上发布的预训练模型权重链接：`https://huggingface.co/zbirobin/MIAM`。
- **数据集**：GeoPlant和TaxaBench均为公开生态数据集，论文中提供了获取方式（引用原数据集论文）。SatBird也是公开数据集。未提供论文自行创建的新数据集。
- **Demo**：论文中未提及在线演示。
- **复现材料**：提供了极为充分的复现材料，包括：详细的模型架构和超参数设置、训练脚本、数据划分的具体代码（附录A.1）、所有消融实验和基线方法的配置、对关键超参数λ和κ的敏感性分析结果。论文中明确声明致力于可复现性。
- **论文中引用的开源项目**：
    - AdamW优化器 (Loshchilov & Hutter, 2017)
    - Verde库，用于空间分块交叉验证 (Roberts et al., 2017)
    - 多模态Transformer架构 (Vaswani et al., 2017; Gorishniy et al., 2021)
    - 训练调度方法 (Defazio et al., 2024)
    - Token化方法 (Dosovitskiy et al., 2020; Gorishniy et al., 2022)

📌 **核心摘要**

1.  **解决的问题**：生态应用中的多模态学习面临数据在模态间和模态内缺失的普遍问题，且现有掩码训练策略无法有效应对“模态不平衡”（主导模态阻碍其他模态学习）这一挑战。
2.  **方法核心**：提出MIAM（模态不平衡感知掩码），一种动态掩码策略。其核心是：a) 将掩码策略形式化为单位超立方体上的概率分布；b) 设计一个**混合乘积Beta分布**，能探索完整的输入组合空间并优先采样超立方体的“角落”（即模态全存在或全缺失的极端情况）；c) 根据训练过程中各模态的**相对性能**（s_m）和**学习速度**（d_m，性能的绝对导数）动态调整分布参数，对“强势”模态（高性能、学习稳定）施加更高的掩码概率。
3.  **创新之处**：a) 首次系统性地将掩码策略形式化，并指出有效策略应具备**全支持、角落优先、不平衡感知**三大特性；b) 提出的混合Beta分布设计巧妙地兼顾了探索多样性与关键训练场景；c) 引入基于性能和学习动态的双重动态调整机制，比仅依赖静态性能的OPM方法更有效。
4.  **主要实验结果**：在GeoPlant（物种分布建模，3种模态，多Token）和TaxaBench（物种分类，5种模态，单Token）两个生态数据集上评估。在GeoPlant测试集上，MIAM平均AUC达到**86.1%**，比第二好的基线（OPM，83.8%）高出**2.3个百分点**，尤其在被主导的卫星影像单模态评估上提升显著（见表1）。在TaxaBench测试集上，MIAM平均Top-1准确率为**38.7%**，优于所有基线（见表2）。消融实验（图4）证实，从均匀分布->Beta超立方体->MIAM的每一步改进都有效，且动态不平衡系数（ρ_sm, ρ_dm）对弱势模态性能至关重要。
5.  **实际意义**：MIAM使多模态模型能更好地处理生态监测中常见的数据缺失，提升预测鲁棒性。更重要的是，它支持细粒度的贡献分析，能揭示哪些具体变量（如BIO1）、时间片段（如包含2003年热浪的年份）或图像区域（如计算NDVI的红光与近红外波段组合）对预测最关键（图5），为生态学研究提供了可解释的AI工具。
6.  **主要局限性**：a) 方法的有效性高度依赖准确的、无偏的模态性能估计，在无标签的自监督场景下，使用重构损失作为代理可能不理想；b) 论文评估主要集中在模态数量中等（3-5种）的生态场景，其在模态极多或极少的通用多模态任务中的泛化能力有待验证；c) 虽然进行了敏感性分析，但超参数λ和κ仍需根据具体任务调整。

---

### 38. [MAPSS: Manifold-based Assessment of Perceptual Source Separation](/audio-paper-digest-blog/posts/2026-05-04-mapss-manifold-based-assessment-of-perceptual)

🔥 **8.5/10** | 前25% | #模型评估 | #自监督学习 | #信号处理 #语音分离

👥 **作者与机构**

- 第一作者：Amir Ivry（Technion - Israel Institute of Technology, Electrical and Computer Engineering）
- 通讯作者：未明确指定（根据邮箱顺序推测为Amir Ivry）
- 作者列表：Amir Ivry（Technion - Israel Institute of Technology）、Samuele Cornell（Carnegie Mellon University, Language Technologies Institute）、Shinji Watanabe（Carnegie Mellon University, Language Technologies Institute）

💡 **毒舌点评**

亮点在于其优雅的数学框架（流形+马氏距离）将“分离度”和“保真度”评估解耦，并为每个测量值提供了理论误差边界，这在音频评估指标中非常罕见。然而，其性能高度依赖一个预先定义的、手工设计的“失真库”来构建感知流形，这似乎将评估的泛化能力瓶颈从模型转移到了这个失真库的覆盖面上，且对时间对齐的敏感性可能限制其在实际延迟系统中的应用。

🔗 **开源详情**

- **代码**：提供了完整的代码仓库链接：https://github.com/Amir-Ivry/MAPSS-measures 。论文明确说明代码包含完整的推理流程，包括帧级PS/PM计算及其确定性和概率误差边界。
- **模型权重**：论文中未提供其使用的预训练自监督模型（wav2vec 2.0, MERT）的权重链接，但这些是公开模型，可从Hugging Face Hub等平台获取。
- **数据集**：论文使用的SEBASS数据库是公开的，但需按照其原始发布渠道获取。论文中未重新分发数据。
- **Demo**：未提及在线演示。
- **复现材料**：论文在附录和可复现性声明中提供了非常详细的计算过程、参数设置和实验细节，足以支持复现。开源代码是核心复现材料。
- **论文中引用的开源项目**：主要依赖的开源工具/模型包括：wav2vec 2.0、WavLM、HuBERT（自监督语音模型）、MERT（自监督音乐模型）、SEBASS数据库、webMUSHRA（用于原始听力测试）。

📌 **核心摘要**

该论文针对音频源分离系统评估中，现有指标（如SDR、SI-SDR）无法区分“干扰泄漏”与“目标失真”这两种本质不同的失真模式的问题，提出了两个新的可微分、帧级评估指标：感知分离（Perceptual Separation, PS）和感知匹配（Perceptual Match, PM）。方法核心是，首先为每个参考信号生成一组覆盖广泛感知失真类型的变形版本，然后利用预训练的自监督模型（如wav2vec 2.0）将所有原始信号、失真信号及系统输出进行编码，再通过扩散映射（Diffusion Maps）将这些高维表示嵌入到一个低维流形空间。在此流形上，PM通过测量输出点与其自身“感知簇”的距离来量化自失真，而PS则通过比较该输出点与自身簇及非归属簇的相对距离来量化泄漏。与已有方法相比，新在：1）功能上解耦了泄漏与失真；2）操作在精细的帧级（75fps）并可微分；3）首次为音频评估指标提供了确定性误差半径和非渐近概率置信区间。实验表明，在SEBASS数据集（包含英语、西班牙语和音乐混合物）上，PS和PM在与人类主观评分的线性相关（PCC）和秩相关（SRCC）中，几乎总能排在18个对比指标的第一或第二。该指标的意义在于为源分离系统提供了更细粒度的诊断工具和潜在的损失函数，局限性在于其性能对时间对齐敏感，且依赖于预定义失真库的覆盖范围。

---

### 39. [AVoCaDO: An Audiovisual Video Captioner Driven by Temporal Orchestration](/audio-paper-digest-blog/posts/2026-05-04-avocado-an-audiovisual-video-captioner-driven-by)

🔥 **8.5/10** | 前25% | #视频描述生成 | #强化学习 | #多模态模型 #音频视觉对齐

👥 **作者与机构**

- 第一作者：Xinlong Chen（快手技术 Kling 团队，中国科学院自动化研究所 NLPR，中国科学院大学）
- 通讯作者：Qiang Liu（中国科学院自动化研究所 NLPR，中国科学院大学）
- 作者列表：Xinlong Chen（快手技术 Kling 团队，中国科学院自动化研究所 NLPR，中国科学院大学）、Yue Ding（中国科学院自动化研究所 NLPR，中国科学院大学）、Weihong Lin（快手技术 Kling 团队）、Jingyun Hua（快手技术 Kling 团队）、Linli Yao（北京大学）、Yang Shi（北京大学）、Bozhou Li（北京大学）、Qiang Liu（中国科学院自动化研究所 NLPR，中国科学院大学）、Yuanxing Zhang（快手技术 Kling 团队）、Pengfei Wan（快手技术 Kling 团队）、Liang Wang（中国科学院自动化研究所 NLPR，中国科学院大学）

💡 **毒舌点评**

**亮点：** 论文没有满足于简单的多模态拼接，而是通过精心设计的 checklist 和 dialogue 奖励函数，将“音视频事件在时间轴上对齐”这一核心需求显式地融入了强化学习目标，这种针对具体问题定制 RL 奖励的思路比通用 GRPO 应用更有价值。
**短板：** 整个流程高度依赖强大的教师模型（如 Gemini-2.5-Pro）来构建 SFT 数据和评估奖励，这使得方法的泛用性和在资源受限场景下的可行性存疑，且可能隐含了将教师模型偏见传递给学生模型的风险。

🔗 **开源详情**

- **代码：** 论文明确表示“AVoCaDO will be open-sourced”，并提供了项目主页链接 (`https://avocado-captioner.github.io/`)。论文中未直接提供代码仓库链接，但项目主页很可能包含后续链接。
- **模型权重：** 论文声明模型将开源，但未提供具体的权重下载链接或平台。
- **数据集：** 论文详细描述了数据集的构建方法、来源和规模（107K），但未提及是否公开发布原始数据集或经过处理的描述数据集。获取构建数据集所需的原始视频相对容易（来自公开数据集），但重新生成所有描述需要访问Gemini API。
- **Demo：** 论文未提及是否提供在线演示。
- **复现材料：** 论文提供了丰富的复现细节：包括所有训练超参数（学习率、batch size等）、硬件配置、以及用于数据构建、关键点分解、奖励计算的所有Prompt（见附录图10-17）。这些信息对复现工作至关重要。
- **论文中引用的开源项目：** 依赖的开源项目主要是基础模型 `Qwen2.5-Omni-7B`，以及用于评估的基准测试集（如`Daily-Omni`, `WorldSense`）。构建数据时使用了`TikTok-10M`, `Shot2Story`, `FineVideo`等公开数据集。

📌 **核心摘要**

1. **解决的问题：** 现有视频描述生成方法大多以视觉为中心，忽略了音频信息，或者无法生成视觉和音频事件在时间上精确对齐的描述，这限制了模型对视频内容的全面理解。
2. **方法核心：** 提出了 AVoCaDO，一个由音视频时序协调驱动的描述生成模型。其核心是一个两阶段后训练流水线：第一阶段（SFT）在精心构建的 10.7 万条高质量、时序对齐的音视频描述数据集上进行监督微调；第二阶段（GRPO）利用三个专门设计的奖励函数（清单奖励、对话奖励、长度正则化奖励）进行强化学习，以进一步优化时序连贯性和描述准确性。
3. **创新点：** 相比已有方法，主要新在：1) 构建了大规模、高质量的音视频对齐描述数据集；2) 提出了针对音视频描述任务特性的组合式奖励函数设计，同时关注内容完整性、对话准确性和生成稳定性；3) 证明了在通用多模态模型上通过特定后训练即可显著提升音视频描述能力。
4. **主要实验结果：** 在四个音视频描述基准测试上，AVoCaDO (7B) 显著超越了所有现有开源模型，并在 UGC-VideoCap 上超越了商业模型 Gemini-2.5-Pro。关键结果如下表所示。

| 模型 | 视频-SALMONN-2测试集 (Total ↓) | UGC-VideoCap (Avg. ↑) | Daily-Omni (Avg. ↑) | WorldSense (Avg. ↑) |
| :--- | :--- | :--- | :--- | :--- |
| **AVoCaDO (Ours)** | **37.3** | **73.2** | **50.1** | **25.7** |
| video-SALMONN-2* | 38.8 | 67.2 | 29.9 | 18.2 |
| Qwen2.5-Omni | 57.1 | 57.7 | 13.4 | 8.6 |
| Gemini-2.5-Pro | 31.3 | 72.6 | 60.2 | 33.8 |

5. **实际意义：** 提升了视频描述模型对包含对话、音乐、环境音等复杂音视频内容的理解和描述能力，为视频理解、检索和生成等下游任务提供了更高质量的文本表示，推动了多模态大模型向更全面的视听感知发展。
6. **主要局限性：** 模型性能高度依赖于大规模、高质量的监督数据构建（使用了强大的教师模型），这可能限制其在不同文化或低资源语言场景下的快速迁移。此外，奖励函数的设计虽然针对性强，但也引入了额外的计算开销和复杂度。

---

### 40. [TripleSumm: Adaptive Triple-Modality Fusion for Video Summarization](/audio-paper-digest-blog/posts/2026-05-04-triplesumm-adaptive-triple-modality-fusion-for)

🔥 **8.5/10** | 前25% | #视频摘要 | #多模态模型 | #音视频 #自注意力

👥 **作者与机构**

- 第一作者：Sumin Kim*（首尔大学）， Hyemin Jeong*（首尔大学）， Mingu Kang*（首尔大学）（*表示同等贡献）
- 通讯作者：Yoori Oh†（首尔大学）， Joonseok Lee†（首尔大学）（†表示通讯作者）
- 作者列表：Sumin Kim（首尔大学）， Hyemin Jeong（首尔大学）， Mingu Kang（首尔大学）， Yejin Kim（首尔大学）， Yoori Oh（首尔大学）， Joonseok Lee（首尔大学）

💡 **毒舌点评**

论文提出了一个设计精巧的多模态视频摘要模型TripleSumm，其自适应帧级融合机制和引入的大规模三模态数据集MoSu是扎实的贡献，显著推动了视频摘要领域的多模态研究。然而，其核心创新点（自适应注意力融合）在多模态学习中并非前所未见，且在标准小数据集（SumMe/TVSum）上的绝对性能提升幅度有限，新数据集的“Most Replayed”监督信号本身的普适性也有待更广泛验证。

🔗 **开源详情**

- **代码**：论文提供了GitHub代码仓库链接：`https://github.com/smkim37/TripleSumm`。
- **模型权重**：论文中未明确提及是否公开预训练模型权重。
- **数据集**：MoSu数据集已公开，论文提供了获取方式。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文在附录中提供了非常详细的超参数设置（表I）、摘要生成算法、数据预处理细节、评估协议说明以及各种消融实验的配置，复现信息充分。
- **论文中引用的开源项目**：依赖了预训练模型CLIP、RoBERTa、AST以及用于生成文本描述的Qwen2.5-VL。

📌 **核心摘要**

1. **要解决什么问题？** 现有视频摘要方法通常采用静态或模态无关的融合策略，无法动态捕捉不同视频帧中视觉、文本和音频模态重要性的变化，导致理解复杂视频能力不足。同时，缺乏包含三模态特征的大规模基准数据集也阻碍了该领域的发展。
2. **方法核心是什么？** 论文提出了TripleSumm架构，其核心包括：a) **多尺度时间块**，采用层次化的滑动窗口自注意力，从局部到全局捕捉视频的时序模式；b) **跨模态融合块**，使用一个中性的“融合令牌”作为查询，动态地对三种模态的特征进行加权聚合，实现帧级别的自适应融合。
3. **与已有方法相比新在哪里？** 相比于现有模态静态或简单融合的方法，TripleSumm在帧级别动态地学习并分配各模态的权重。此外，论文首次提出了大规模、三模态的视频摘要基准数据集MoSu。
4. **主要实验结果如何？** TripleSumm在四个基准测试上均达到了SOTA性能。在提出的MoSu数据集上，其Kendall‘s τ和Spearman’s ρ分别达到0.351和0.472，大幅超越次优方法CFSum（0.277/0.374）。在Mr. HiSum，SumMe（TVT）和TVSum（TVT）数据集上，其全模型版本也均取得最优或并列最优的相关性指标。消融实验证实了三模态输入、层次化窗口和自适应融合机制的有效性。
5. **实际意义是什么？** 该工作推动了视频摘要向更符合人类多模态感知的方向发展，提出的MoSu数据集和TripleSumm模型为未来研究提供了可靠的基础和强大的基线，有助于从海量视频中高效提取关键信息。
6. **主要局限性是什么？** 论文指出，当前遵循的“帧重要性评分-分割-选择”流程并非端到端可训练，未来可探索直接学习选择连贯摘要片段的端到端模型。此外，数据集的监督信号基于聚合的“Most Replayed”数据，可能无法完全反映个体或多样化的用户需求。

---

### 41. [Echo: Towards Advanced Audio Comprehension via Audio-Interleaved Reasoning](/audio-paper-digest-blog/posts/2026-05-04-echo-towards-advanced-audio-comprehension-via)

🔥 **8.5/10** | 前10% | #音频问答 | #强化学习 | #音频大模型 #多模态模型

👥 **作者与机构**

第一作者：Daiqing Wu（中国科学院信息工程研究所 IIE， ByteDance中国）
通讯作者：Yangyang Kang（ByteDance中国）， Yu Zhou（南开大学 VCIP & TMCC & DISSec）
作者列表：
    - Daiqing Wu（IIE， ByteDance中国， 中国科学院大学）
    - Xuan Zhang（ByteDance中国）
    - Dongbao Yang（IIE）
    - Jiashu Yao（ByteDance中国）
    - Longfei Chen（上海科技大学信息科学与技术学院）
    - Qingsong Liu（ByteDance中国）
    - Sicheng Zhao（清华大学心理学与认知科学系）
    - Can Ma（IIE）
    - Yangyang Kang（浙江大学， ByteDance中国）（带†和‡标注，应为共同通讯或同等贡献）
    - Yu Zhou（南开大学 VCIP & TMCC & DISSec）（带†和‡标注，应为共同通讯或同等贡献）

💡 **毒舌点评**

这篇论文最亮眼的是提出了一个符合人类认知直觉的“音频交错推理”框架，并用一套从数据生成到训练的完整工程化方案将其落地，实验也做得扎实全面。然而，其性能提升高度依赖于自动合成的训练数据（EAQA），这本质上是用一个强大的“教师”（DeepSeek-R1）的知识来蒸馏模型，而数据生成的“天花板”和潜在偏差可能限制模型的上限；此外，模型当前只能“回放”原始音频片段，无法进行更复杂的音频分析操作（如慢放、滤波），这为未来的扩展留下了空间，但也是当前的局限。

🔗 **开源详情**

- **代码**：提供了代码仓库链接：https://github.com/wdqqdw/Echo。
- **模型权重**：论文中提到“We present Echo, a LALM...”，结合开源仓库链接，可推断已公开模型权重。
- **数据集**：论文详细介绍了EAQA-SFT和EAQA-RL两个数据集的构建过程，并提及发布，应包含在开源仓库中。
- **Demo**：论文中未提及在线演示链接。
- **复现材料**：提供了详尽的复现材料，包括：
    - 详细的训练超参数和配置（学习率、批量大小、KL系数等）。
    - 数据生成管道的完整提示词（prompt）。
    - 奖励函数的具体计算方式。
    - 推理伪代码（Algorithm 1）。
    - 评估使用的标准提示模板。
    - 硬件环境信息（NVIDIA A100 GPU）。
    - 模型评估的设置细节。
- **论文中引用的开源项目**：在实现细节中提及使用了以下开源工具/引擎：ms-swift（用于SFT）， VERL（用于RL）， vLLM（用于推理评估）。

📌 **核心摘要**

这篇论文旨在解决当前大音频语言模型（LALM）在处理复杂音频推理任务时，因“一次编码”策略导致的信息丢失和推理瓶颈问题。核心方法是提出“音频交错推理”范式，使模型能在推理过程中根据需要动态“重听”原始音频的关键片段，将音频从静态上下文变为推理的主动组件。为实现此目标，作者设计了一个两阶段训练框架：首先通过监督微调（SFT）让模型学会定位关键音频片段并输出带时间戳标签的推理链，然后通过强化学习（RL）利用可验证奖励信号（包括准确性、格式、一致性和片段奖励）进一步优化模型灵活调用音频片段的能力。同时，作者开发了一套自动化的数据生成管道，利用现有音频数据集和LLM合成了大规模、高质量的音频问答（Audio-QA）及推理链数据集（EAQA）。在MMAR、MMAU等专家级和通用级音频理解基准上的实验表明，Echo模型在整体性能上超越了包括GPT-4o和Gemini-2.0-Flash在内的多个先进基线模型，证明了音频交错推理的有效性和高效性。该工作为提升LALM的复杂音频理解能力提供了一个有前景的新方向，其主要局限在于训练数据完全依赖自动合成，可能引入偏差，且模型目前仅限于重放原始音频，未探索更复杂的音频处理操作。

---

### 42. [JavisDiT: Joint Audio-Video Diffusion Transformer with Hierarchical Spatio-Temporal Prior Synchronization](/audio-paper-digest-blog/posts/2026-05-04-javisdit-joint-audio-video-diffusion-transformer)

🔥 **8.5/10** | 前25% | #音视频 | #扩散模型 #Transformer | #扩散模型 #Transformer

👥 **作者与机构**

- 第一作者：Kai Liu (浙江大学, 新加坡国立大学) (*共同第一作者)
- 通讯作者：Hao Fei (新加坡国立大学)
- 作者列表：
    - Kai Liu (浙江大学，新加坡国立大学) (*共同第一作者)
    - Wei Li (中国科学技术大学) (*共同第一作者)
    - Lai Chen (浙江大学)
    - Shengqiong Wu (新加坡国立大学)
    - Yanhao Zheng (浙江大学)
    - Jiayi Ji (新加坡国立大学)
    - Fan Zhou (浙江大学)
    - Jiebo Luo (罗切斯特大学)
    - Ziwei Liu (南洋理工大学)
    - Hao Fei (新加坡国立大学) (†通讯作者)
    - Tat-Seng Chua (新加坡国立大学)

💡 **毒舌点评**

论文提出了一个架构设计完整、实验验证充分的端到端音视频生成模型，其“分层时空先验估计”的思路有效提升了生成内容的同步性，配套的JavisBench基准和JavisScore指标也直指现有评估的痛点。然而，该模型的计算开销庞大（生成4秒240P视频在H100上耗时30秒），且其在更复杂、更高分辨率或更长时长场景下的泛化能力仍待验证。

🔗 **开源详情**

- **代码**：论文明确表示代码将开源，项目主页为 `https://javisverse.github.io/JavisDiT-page/`。
- **模型权重**：论文明确表示预训练模型将开源。
- **数据集**：论文明确表示会公开JavisBench数据集及处理后的训练数据。
- **Demo**：论文中未提及在线演示链接。
- **复现材料**：论文提供了详尽的模型架构图、训练细节（包括三阶段策略、学习率、优化器、数据集来源与规模）、超参数配置、评估设置以及消融实验设计，复现信息非常充分。
- **引用的开源项目**：
    - 视频骨干与VAE：OpenSora
    - 音频生成与VAE：AudioLDM2
    - 文本编码器：T5， ImageBind
    - 对比学习框架：借鉴自SimCLR
    - 其他工具：PySceneDetect， UniMatch， DBNet， FunASR， Qwen系列模型（用于数据标注和分类）

📌 **核心摘要**

本文旨在解决联合音视频生成（JAVG）中内容质量与跨模态同步性难以兼得的核心挑战。提出了一种基于扩散Transformer（DiT）的联合音视频生成模型JavisDiT，其核心创新在于引入了分层时空同步先验估计器（HiST-Sypo），该模块从文本条件中分层提取全局语义先验和细粒度的时空位置/时序先验，以指导视频与音频在空间和时间上的精确对齐。与已有方法（如简单的参数共享或隐空间对齐）相比，JavisDiT通过显式的细粒度先验引导和双向跨模态注意力机制，增强了音视频模态间的深层交互。实验结果表明，JavisDiT在提出的JavisBench基准（包含10，140个多事件、复杂场景的视频）上，其同步性指标JavisScore达到0.154，显著优于各类级联式和联合生成方法；在传统的Landscape和AIST++数据集上，其生成质量（如FVD为94.2）也达到了最佳水平。该工作为JAVG任务提供了更强的模型和更全面的评估框架，推动了多模态生成技术向实用化迈进。主要局限性在于模型计算复杂度高，且评估基准的分辨率与视频时长相对有限。

---

### 43. [Bridging Piano Transcription and Rendering via Disentangled Score Content and Style](/audio-paper-digest-blog/posts/2026-05-04-bridging-piano-transcription-and-rendering-via)

🔥 **8.0/10** | 前25% | #音乐信息检索 | #多任务学习 | #音乐生成 #扩散模型

👥 **作者与机构**

- 第一作者：Wei Zeng (National University of Singapore, Integrative Sciences and Engineering Programme, NUS Graduate School; School of Computing)
- 通讯作者：Ye Wang (National University of Singapore, Integrative Sciences and Engineering Programme, NUS Graduate School; School of Singapore, Email: dcswangy@nus.edu.sg)
- 作者列表：Wei Zeng (National University of Singapore, Integrative Sciences and Engineering Programme, NUS Graduate School; School of Computing), Junchuan Zhao (National University of Singapore, School of Computing), Ye Wang (National University of Singapore, Integrative Sciences and Engineering Programme, NUS Graduate School; School of Computing)

💡 **毒舌点评**

**亮点**：巧妙地将演奏渲染（EPR）和乐谱转录（APT）这两个互逆任务统一到一个解耦表示学习的框架中，不仅提升了两个任务的性能，还为可控的音乐表达（风格迁移、自动推荐）开辟了新路径，理论动机清晰，工程实现完整。
**短板**：模型本身规模较大（188M参数），且PSR模块需要单独训练和推理，增加了部署复杂性；实验数据主要局限于古典钢琴音乐，其在更广泛音乐流派（如爵士、流行）上的泛化能力未得到验证。

🔗 **开源详情**

- **代码**：论文中未直接提供代码仓库链接，但在结论处承诺“将在论文接收后发布代码，提供充分的说明以使用公共数据集（如ASAP和ATEPP）复现模型架构和训练流程”。
- **模型权重**：未提及公开预训练模型权重。
- **数据集**：使用了公共数据集ASAP和ATEPP，论文中描述了数据划分和处理流程。无配对数据（MuseScore乐谱、YouTube转录演奏）为自行收集，但部分来源公开。
- **Demo**：提供了一个项目主页（https://wei-zeng98.github.io/joint-apt-epr/）用于展示EPR和风格迁移的示例音频。
- **复现材料**：论文附录（A-G）提供了极其详细的数据处理细节（数据过滤规则、表示方案）、模型实现细节（训练任务、损失公式、优化配置、PSR架构）、主观测试说明、补充实验（消融、多样性分析、GPT标注验证）、以及挑战与未来工作讨论。这些信息为复现提供了坚实基础。
- **引用的开源项目**：MidiTok (用于MIDI令牌化)， Partitura (用于音乐处理)， Aria-AMT (用于音频转录)。

📌 **核心摘要**

1.  **问题**：表现性钢琴演奏渲染（EPR，从乐谱生成演奏）和自动钢琴转录（APT，从演奏恢复乐谱）是音乐信息检索中的两个基础互逆任务。现有工作通常独立处理它们，且EPR系统大多依赖精细的音符级对齐数据，限制了其灵活性和可扩展性。
2.  **方法**：本文提出了一个基于Transformer的统一序列到序列（Seq2Seq）框架，通过解耦**音符级乐谱内容**和**全局演奏风格**表示，联合建模EPR和APT。该模型可使用序列对齐的配对数据进行训练，无需音符级对齐。此外，独立引入了一个基于扩散模型的**性能风格推荐（PSR）模块**，能够仅从乐谱内容生成多样且风格适配的风格嵌入。
3.  **创新**：主要创新在于：(1) 首次通过统一框架和解耦表示联合建模EPR和APT，实现任务间互监督；(2) 提出无需音符级对齐的Seq2Seq EPR公式，降低了数据门槛；(3) 设计了PSR模块，模拟了演奏家从乐谱推断风格的能力，实现了自动化且可控的渲染。
4.  **结果**：在ASAP基准数据集上，该联合模型在APT任务上取得了与SOTA方法相当的性能（例如，在MUSTER和ScoreSimilarity多项指标上表现优异）。在EPR任务上，其性能（Ours-Target）优于仅训练EPR的模型和部分基线，生成的演奏在方差、KL散度等指标上更接近人类演奏，主观评价也获得了高分。风格解耦通过表演者/作曲家识别实验和风格迁移测试得到了验证。
5.  **意义**：该工作为音乐AI系统提供了更统一、灵活的处理范式，推动了无对齐监督学习在音乐领域的应用。PSR模块使得非专业用户也能轻松生成具有合适风格的音乐演奏，具有潜在的教育和创作辅助价值。
6.  **局限性**：当前评估主要在古典钢琴音乐数据集上进行，对流行、爵士等更广泛风格的泛化性有待探索。模型复杂度较高，PSR作为独立模块增加了系统的两阶段训练和推理开销。

---

### 44. [StableToken: A Noise-Robust Semantic Speech Tokenizer for Resilient SpeechLLMs](/audio-paper-digest-blog/posts/2026-05-04-stabletoken-a-noise-robust-semantic-speech)

🔥 **8.0/10** | 前25% | #语音识别 | #预训练 | #语音大模型 #鲁棒性

👥 **作者与机构**

- 第一作者：Yuhan Song（北京大学计算机科学学院，多媒体信息处理国家重点实验室）
- 通讯作者：Linhao Zhang（张林浩，未提供机构，推测为微信AI基础模型技术中心）、Houfeng Wang（王厚峰，北京大学计算机科学学院，多媒体信息处理国家重点实验室）
- 作者列表：Yuhan Song（北京大学计算机科学学院，多媒体信息处理国家重点实验室）、Linhao Zhang（未说明具体机构）、Chuhan Wu（微信AI基础模型技术中心）、Aiwei Liu（微信AI基础模型技术中心）、Wei Jia（微信AI基础模型技术中心）、Houfeng Wang（北京大学计算机科学学院，多媒体信息处理国家重点实验室）、Xiao Zhou（微信AI基础模型技术中心）

💡 **毒舌点评**

这篇论文精准地抓住了现有语义语音分词器在噪声下“一碰就碎”的痛点，并提出了一个巧妙且工程友好的“位级投票”解决方案，实验结果对比非常亮眼，是解决一个实际问题的好工作。然而，其多分支结构在训练时引入的额外计算成本和复杂性未被深入讨论，且对“共识损失”的理论依据和不同变体的探索也显得较为基础。

🔗 **开源详情**

- **代码**：提供GitHub仓库链接 `https://github.com/Tencent/StableToken`，论文中声明代码将公开。
- **模型权重**：论文中声明模型检查点将在接受后公开。
- **数据集**：训练使用的主要开源数据集列表已公开（表7）。评估使用FLEURS、LibriSpeech、CHiME-4、ESD、SEED-TTS等公开数据集。
- **Demo**：论文中未提及在线演示。
- **复现材料**：提供了训练超参数（表8）、噪声增强配置（表9）、模型详细架构描述、消融实验设置（附录C）等详尽信息。
- **论文中引用的开源项目**：骨干网络使用了Whisper-large-v3，对比基线包括HuBERT、NAST、R-Spin、SpeechTokenizer等。

📌 **核心摘要**

本文旨在解决当前语义语音分词器在面对微小声学扰动（即使语音清晰可辨）时输出序列极不稳定的问题，这种不稳定性严重增加了下游语音大语言模型的学习负担。论文指出问题的根源在于两个方面：脆弱的单路径量化架构和仅监督最终转录文本的遥远训练信号。为此，作者提出了StableToken，一种基于共识机制的鲁棒分词器。其核心方法包含两个相互协同的部分：(1) **Voting-LFQ模块**，一种多分支量化器，每个分支独立处理输入并生成二进制表示，最后通过位级多数投票机制聚合成一个稳定的输出；(2) **噪声感知共识训练策略**，在训练时为部分分支提供带噪声的输入（多视图），并通过一个共识损失强制所有分支的表示保持一致，从而显式地学习对噪声不变的特征。实验表明，StableToken在单元编辑距离（UED）指标上取得了当前最优结果，相对于最佳基线（S3 Tokenizer，26.17%）将平均UED降低了60%以上至10.17%，同时保持了高质量的音频重建能力。这种基础稳定性的提升直接转化为下游语音大模型在语音识别（ASR）、语音情感识别（SER）和文本到语音（TTS）任务上的鲁棒性收益，尤其在严重噪声下性能优势显著。主要局限性在于，多分支的数量选择是经验性的，且论文未深入探讨其在不同硬件上的实际推理效率开销。

---

### 45. [Data-Centric Lessons To Improve Speech-Language Pretraining](/audio-paper-digest-blog/posts/2026-05-04-data-centric-lessons-to-improve-speech-language)

🔥 **8.0/10** | 前25% | #语音问答 | #预训练 | #语音大模型 #多模态模型

👥 **作者与机构**

- 第一作者：Vishaal Udandarao (Apple, University of Cambridge, University of Tübingen)
- 通讯作者：未明确说明
- 作者列表：Vishaal Udandarao (Apple, University of Cambridge, University of Tübingen), Zhiyun Lu (Apple), Xuankai Chang (Apple), Yongqiang Wang (Apple), Albin Madappally Jose (Apple), Fartash Faghri (Apple), Joshua P Gardner (Apple), Chung-Cheng Chiu (Apple)

💡 **毒舌点评**

**亮点**：论文的实验设计堪称“数据中心”研究范式的典范，通过精心设计的控制变量消融实验（如仅改变交错粒度或采样策略），清晰地量化了每个数据处理步骤的独立贡献，结论扎实可信。**短板**：所谓的“合成数据集”构建方法（从文本生成问答对再用TTS合成语音）相对基础，未探索利用更先进的端到端语音生成模型或更强的指令遵循能力，其提升可能受限于TTS的自然度和多样性。

🔗 **开源详情**

-   **代码**：论文中未提及代码仓库链接。
-   **模型权重**：论文提及训练了SpeLangy模型，但未提及将公开其预训练权重。
-   **数据集**：论文详细描述了Web-crawl、Krist和Quest数据集的构建方法，但未提及公开原始音频或构建后的数据集。伦理声明部分提及数据来源于公开播客。
-   **Demo**：论文中未提及在线演示。
-   **复现材料**：附录中提供了大量细节，包括数据预处理流程图、合成数据构建提示、训练超参数、评估数据集细节、污染分析代码等，复现信息非常详尽。
-   **论文中引用的开源项目**：使用了MeloTTS进行语音合成，Whisper和Parakeet进行转录，pyannote进行说话人日志，SentencePiece进行分词，以及引用了多个开源SpeechLM和文本模型作为基线。

📌 **核心摘要**

1.  **问题**：当前语音-语言模型（SpeechLMs）在预训练数据的处理、构建和交错方式上缺乏系统性的控制研究，导致性能提升的关键因素不明确。
2.  **方法核心**：本文对语音-语言预训练的数据进行了系统性的“数据中心”研究，聚焦三个关键问题：（1）如何将原始网页爬取音频处理成交错的语音-文本数据；（2）如何利用纯文本数据集构建合成语音-文本数据以增强网络爬取数据；（3）如何在训练中交错语音和文本片段。
3.  **新意**：这是首个在受控设置下系统比较不同语音-语言数据策略的工作。与以往仅描述建模选择的工作不同，本文通过严谨的消融实验，分离并量化了数据处理、合成和采样策略的独立影响。
4.  **主要结果**：基于洞察，作者训练了一个3.8B参数的模型SpeLangy，在平均语音问答（SQA）性能上比参数量高达其3倍的模型（如Kimi-Audio， Qwen-2-Audio）高出10.2%绝对值。关键消融实验结果见下表：

| 数据策略/方法 | 文本理解 (CoreEN/MMLU) | SQA (SWQ/STQ/SLQ) 平均准确率 |
| :--- | :--- | :--- |
| 基线 (粗粒度交错) | 60.4 / 63.9 | 37.6% |
| + 细粒度交错 | 60.4 / 64.1 | 40.7% (+3.1%) |
| + 确定性采样 | 60.1 / 65.2 | 42.4% (+4.8%) |
| + 混合Quest合成数据 | 60.4 / 66.2 | 47.9% (+10.3%) |

![SpeLangy与其它SpeechLM性能对比](icassp-img://4amNkYCDqX/0.png)
*图1展示了SpeLangy模型（3.8B参数）在平均SQA准确率上超越了参数量更大的竞争对手（Voxtral-mini, GLM-4-Voice, Qwen-2-Audio等）。*

5.  **实际意义**：为SpeechLM社区提供了经过验证的数据处理和构建的最佳实践，强调了有效数据整理在提升模型性能中的核心作用，能指导未来更高效、更强模型的开发。
6.  **主要局限性**：研究主要围绕单一的SQA任务和特定的基准测试展开；合成数据方法依赖于TTS模型，其质量可能成为瓶颈；论文未公开模型权重和代码，限制了完全复现。

---

### 46. [Flow2GAN: Hybrid Flow Matching and GAN with Multi-Resolution Network for Few-step High-Fidelity Audio Generation](/audio-paper-digest-blog/posts/2026-05-04-flow2gan-hybrid-flow-matching-and-gan-with-multi)

🔥 **8.0/10** | 前25% | #音频生成 | #流匹配 | #GAN #少样本生成

👥 **作者与机构**

- 第一作者：Zengwei Yao（Xiaomi Corp., Beijing, China）
- 通讯作者：Daniel Povey（dpovey@xiaomi.com，Xiaomi Corp., Beijing, China）
- 作者列表：Zengwei Yao（Xiaomi Corp.）、Wei Kang（Xiaomi Corp.）、Han Zhu（Xiaomi Corp.）、Liyong Guo（Xiaomi Corp.）、Lingxuan Ye（Xiaomi Corp.）、Fangjun Kuang（Xiaomi Corp.）、Weiji Zhuang（Xiaomi Corp.）、Zhaoqing Li（Xiaomi Corp.）、Zhifeng Han（Xiaomi Corp.）、Long Lin（Xiaomi Corp.）、Daniel Povey（Xiaomi Corp.）

💡 **毒舌点评**

这篇论文巧妙地将Flow Matching的稳定训练与GAN的精细生成结合，提出了一种两阶段训练范式，成功实现了少步甚至一步的高质量音频生成，解决了推理速度与生成质量难以兼得的核心矛盾。但多分支网络结构增加了模型复杂度和实现难度，且论文主要验证语音波形生成，其对非语音、复杂环境音频的泛化优势并未充分体现。

🔗 **开源详情**

- **代码**：提供代码仓库链接：`https://github.com/k2-fsa/Flow2GAN`。
- **模型权重**：提供预训练检查点（checkpoints），在代码仓库中可用。
- **数据集**：实验所用数据集（LibriTTS， Common Voice等）均为公开数据集。
- **Demo**：提供在线演示样例：`https://flow2gan.github.io`。
- **复现材料**：论文在5.1节和附录A.3中提供了详尽的训练细节、模型配置（表10）、数据预处理信息、评估指标和基线模型设置，复现指导非常充分。
- **论文中引用的开源项目**：依赖或对比的开源项目包括：**Vocos**， **HiFi-GAN** (MPD)， **UnivNet** (MRD)， **BigVGAN**， **RFWave**， **PeriodWave**， **WaveFM**， **Encodec**， **F5-TTS**， **ScaledAdam**优化器等。

📌 **核心摘要**

1. **要解决什么问题**：现有音频生成方法面临两难：GAN训练不稳定、易模式崩塌；而基于扩散/Flow Matching的方法虽然训练稳定、生成质量高，但需要多步采样，推理计算开销大。
2. **方法核心是什么**：提出Flow2GAN两阶段框架。第一阶段使用针对音频特性改进的Flow Matching进行预训练，以学习稳健的生成能力；第二阶段构建少步生成器，并使用精心设计的判别器（MPD， MRD）进行GAN微调，以实现高效、精细的音频生成。
3. **与已有方法相比新在哪里**：a) **改进Flow Matching**：将训练目标从估计速度场重新表述为**端点估计**（预测干净音频x1），避免了在音频静音区域估计速度的困难；引入**谱能量自适应损失缩放**，强调感知上更显著的静音区域。b) **两阶段训练策略**：将改进的Flow Matching与GAN微调结合，前者提供强初始化，后者高效提升细节和推理速度。c) **多分辨率网络架构**：扩展Vocos的单分辨率设计，采用多分支处理不同时间-频率分辨率的傅里叶系数，增强了模型的建模能力。
4. **主要实验结果如何**：实验表明，Flow2GAN在Mel频谱图和音频令牌（Encodec）条件下均实现了高质量生成。在LibriTTS测试集上，其**4步模型**在PESQ（4.484）、ViSQOL（4.986）上优于所有对比方法（包括BigVGAN-v2， 但后者在大规模数据上训练）。**1步模型**也达到有竞争力的性能（PESQ 4.189， ViSQOL 4.957）。在通用音频令牌生成任务上，Flow2GAN在多数指标上优于MBD， RFWave等方法。**推理速度**方面，其1步模型在CPU上的xRT为4.85（优于实时），GPU上高达851.67倍实时，远超大多数扩散模型。
5. **实际意义是什么**：该工作提供了在音频生成领域**质量与效率**之间更优的权衡方案。少步甚至一步推理能力使其非常适合实时或资源受限的应用场景（如TTS系统、交互式音频合成）。作为TTS声码器时，其4步版本与PeriodWave-Turbo性能相当但速度更快。
6. **主要局限性是什么**：a) 模型参数量（78.9M）大于Vocos（13.5M）和RFWave（18.1M），略逊于BigVGAN（112.4M）。b) 论文主要评估在语音波形生成上，对于更复杂的非语音音频（如音乐、环境声）的优势有待进一步验证。c) GAN微调阶段需要针对不同步数（1/2/4步）分别训练和部署独立模型，增加了维护成本。

---

### 47. [UniSS: Unified Expressive Speech-to-Speech Translation with Your Voice](/audio-paper-digest-blog/posts/2026-05-04-uniss-unified-expressive-speech-to-speech)

🔥 **8.0/10** | 前25% | #语音翻译 | #大语言模型 | #语音合成 #端到端

👥 **作者与机构**

- 第一作者：Sitong Cheng（香港科技大学）
- 通讯作者：Yike Guo（香港科技大学），Wei Xue（香港科技大学）
- 作者列表：Sitong Cheng（香港科技大学）、Weizhen Bian（香港科技大学）、Xinsheng Wang（Soul AI Lab）、Ruibin Yuan（香港科技大学）、Jianyi Chen（香港科技大学）、Shunshun Yin（Soul AI Lab）、Yike Guo（香港科技大学）、Wei Xue（香港科技大学）

💡 **毒舌点评**

该论文的亮点在于其“大道至简”的哲学，用一个基于标准LLM的单阶段模型同时解决了翻译、声音和情感保持的复杂问题，性能数据非常亮眼。然而，其核心竞争力部分建立在自建的、通过TTS合成的超大规模数据集UniST之上，这使得结果的说服力打了些折扣——毕竟，如果给其他SOTA模型同样规模的定制数据，结果差距可能会缩小。此外，其多标记符的复杂分词策略在工程实现和通用性上是否是最优解，也值得商榷。

🔗 **开源详情**

- **代码**：论文中未提及代码仓库链接。仅提供了演示网站。
- **模型权重**：基于Qwen2.5-1.5B-Instruct，论文未明确说明是否提供训练后的UniSS模型权重下载。但演示网站可能托管了模型。
- **数据集**：UniST数据集已构建，论文提到“公开”（release），但未提供具体的获取方式链接。数据构建流程和数据源已详细说明。
- **Demo**：提供了在线演示网站：https://cmots.github.io/uniss-demo/
- **复现材料**：在附录B.1中提供了极其详细的训练配置（阶段、数据、学习率、批次大小等），在附录C和E中提供了评估指标和数据构建细节。复现信息相当充分，主要缺省是官方代码仓库。
- **论文中引用的开源项目**：Qwen2.5-1.5B-Instruct (LLM骨干), BiCodec (语音分词/解码器), GLM-4 (语音分词器), Paraformer (数据清洗ASR), SparkTTS (合成TTS), Whisper (评估ASR), vLLM (推理加速), Megatron-LM (训练框架), webMUSHRA (主观评估) 等。

📌 **核心摘要**

这篇论文要解决的是表达式语音到语音翻译（S2ST）中的三大挑战：保留说话人声音和情感的配对数据稀缺、处理流程复杂、以及难以迁移文本LLM的翻译能力。方法核心是提出一个名为UniSS的单阶段、统一的文本-语音语言模型，它基于预训练的Qwen2.5-1.5B-Instruct构建，使用三种语音标记（说话人标记、语言标记、语义标记）来分别编码风格、内容和生成目标。其关键创新是引入了跨模态思维链（CoT）提示，在推理时将复杂的S2ST任务分解为“听、译、说”三个顺序步骤，从而显式地利用LLM强大的文本翻译能力来指导语音生成。为了训练该模型，论文还构建了一个大规模、高质量的合成数据集UniST（44.8k小时）。实验结果（主要见表1）表明，在CVSS-T数据集上，UniSS（质量模式）在翻译保真度（Speech-BLEU: EN-ZH 32.20, ZH-EN 24.28）、时长一致性（SLC 0.2: 0.98/0.87）和语音质量（UTMOS: 3.76/3.86）上均显著优于现有的端到端和级联系统。主观评估（表2）也证实其在情感相似度（MOS 4.51）和说话人相似度（4.42）上的优势。该工作的实际意义在于提供了一种更简洁、有效的下一代表达式S2ST系统构建范式。主要局限性是目前仅支持中英双语，且其分词器来自不同模型，导致词表膨胀。

![UniSS框架与性能对比图](icassp-img://5o0ZvYzh6B/0.png)

---

### 48. [Query-Guided Spatial–Temporal–Frequency Interaction for Music Audio–Visual Question Answering](/audio-paper-digest-blog/posts/2026-05-04-query-guided-spatialtemporalfrequency-interaction)

🔥 **8.0/10** | 前25% | #音频问答 | #多模态模型 | #音视频 #时频分析

👥 **作者与机构**

- 第一作者：Kun Li（University of Twente；IT University of Copenhagen）
- 通讯作者：Sami Sebastian Brandt（IT University of Copenhagen）
- 作者列表：Kun Li（University of Twente, IT University of Copenhagen）、Michael Ying Yang（University of Bath）、Sami Sebastian Brandt（IT University of Copenhagen）

💡 **毒舌点评**

这篇论文的亮点在于它为音乐音视频问答（AVQA）设计了一个从问题引导到最终预测的端到端框架，并创新性地将音频的频率域特征作为一等公民纳入时空交互中，有效解决了视觉线索微弱时（如演奏者动作不明显）的识别难题，消融实验也扎实地证明了各模块的必要性。然而，其主要短板在于提出的框架相对复杂，引入了多个预训练编码器（CLIP， VGGish， AST），整体计算开销和模型复杂度可能限制其在资源受限场景的应用，且实验主要集中在音乐场景这一相对小众的benchmark上。

🔗 **开源详情**

-   **代码**：提供了GitHub代码仓库链接：`https://github.com/lik1996/QSTar`。
-   **模型权重**：论文中未提及公开发布预训练模型权重。
-   **数据集**：实验使用的MUSIC-AVQA和AVQA均为公开数据集，论文中未提供独家数据。
-   **Demo**：论文中未提及提供在线演示。
-   **复现材料**：在论文附录A和正文中详细提供了实现细节，包括优化器（AdamW）、学习率（1e-4）、批次大小（64）、训练轮次（30）、硬件（单张NVIDIA H100 GPU）等。代码链接的提供极大便利了复现。
-   **引用的开源项目**：论文依赖并引用了CLIP、VGGish、AST、Token Merging等预训练模型或开源工具。

📌 **核心摘要**

本文针对音乐音视频问答（AVQA）任务中现有方法对音频利用不充分、问题信息引入较晚的问题，提出了一种名为QSTar（Query-guided Spatial–Temporal–Frequency Interaction）的新型方法。该方法的核心是在整个处理流程中引入问题引导（query guidance），并设计了一个空间-时间-频率交互（STFI）模块，以充分利用音频信号的频域特性来增强视听理解。具体地，方法包含三个主要组件：1）查询引导的多模态关联模块（QGMC），在早期阶段就用问题信息精炼音频和视觉特征；2）空间-时间-频率交互模块（STFI），在空间、时间和频率三个维度进行细粒度的跨模态交互，尤其利用音频频谱图变换器（AST）提取频率感知特征；3）基于提示的查询上下文推理模块（QCR），在最后阶段整合语言上下文进行推理。在MUSIC-AVQA基准上的实验表明，QSTar在所有问题类型上均取得了显著的性能提升，整体准确率达到78.98%，超越了先前的最优方法QA-TIGER（77.62%）和TSPM（76.79%），尤其在需要频率分析的音频类和音视频对比类问题上优势明显。消融研究验证了每个模块的有效性以及问题引导贯穿全流程的必要性。该工作的意义在于推动了多模态问答中对音频模态的精细化建模，其频率感知交互的设计为解决类似问题提供了新思路。局限性主要在于模型依赖多个预训练编码器，计算成本较高，且主要验证于音乐场景。

---

### 49. [Omni-Reward: Towards Generalist Omni-Modal Reward Modeling with Free-Form Preferences](/audio-paper-digest-blog/posts/2026-05-04-omni-reward-towards-generalist-omni-modal-reward)

🔥 **8.0/10** | 前25% | #基准测试 #数据集 | #强化学习 #多任务学习 | #多模态模型 #基准测试

👥 **作者与机构**

- 第一作者：Zhuoran Jin（中国科学院大学人工智能学院，中国科学院自动化研究所，国家认知与决策智能重点实验室）
- 通讯作者：Jun Zhao（中国科学院大学人工智能学院，中国科学院自动化研究所，国家认知与决策智能重点实验室）
- 作者列表：Zhuoran Jin（中国科学院大学人工智能学院，中国科学院自动化研究所）， Hongbang Yuan（中国科学院大学人工智能学院，中国科学院自动化研究所）， Kejian Zhu（中国科学院大学人工智能学院，中国科学院自动化研究所）， Jiachun Li（中国科学院大学人工智能学院，中国科学院自动化研究所）， Pengfei Cao（中国科学院大学人工智能学院，中国科学院自动化研究所）， Yubo Chen（中国科学院大学人工智能学院，中国科学院自动化研究所）， Kang Liu（中国科学院大学人工智能学院，中国科学院自动化研究所）， Jun Zhao（中国科学院大学人工智能学院，中国科学院自动化研究所）

💡 **毒舌点评**

这篇论文最大的贡献是“立规矩、搭台子”——提出了首个覆盖全模态且支持自由格式偏好的奖励建模基准和数据集，填补了领域空白，为后续研究提供了标准评测场。其短板在于模型架构本身（Omni-RewardModel）是现有技术（如Bradley-Terry框架、GRPO强化学习）在更大规模多模态数据上的直接应用，缺乏针对“自由格式偏好”理解的独创性建模机制。

🔗 **开源详情**

- **代码**：提供了GitHub仓库链接：https://github.com/HongbangYuan/OmniReward
- **模型权重**：提及了公开Omni-RewardModel权重，下载链接为：https://hf.co/datasets/HongbangYuan/OmniRewardBench (注：此处链接标签为Dataset，但文中暗示模型权重也可能在此或类似路径)
- **数据集**：明确公开两个数据集：Omni-RewardBench (https://hf.co/datasets/HongbangYuan/OmniRewardBench) 和 Omni-RewardData (https://hf.co/datasets/jinzhuoran/OmniRewardData)，均托管于HuggingFace。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文在正文和附录中描述了数据收集、标注流程、模型训练细节（如骨干模型选择、训练数据比例、强化学习算法）以及评估协议，复现信息较为充分。
- **引用的开源项目**：模型构建依赖MiniCPM-o-2.6和Qwen2.5-VL等开源多模态模型。训练数据整合了多个公开数据集，如Skywork-Reward-Preference, RLAIF-V, HPDv2, VideoDPO等。

📌 **核心摘要**

1.  **要解决什么问题**：现有的奖励模型存在两个核心挑战：一是**模态不平衡**，主要关注文本和图像，对音频、视频、3D等模态支持不足；二是**偏好刚性**，基于固定的二元偏好对训练，无法捕捉复杂多样的个性化偏好。
2.  **方法核心是什么**：提出**Omni-Reward**框架，包含三个核心组件：(1) 评测基准**Omni-RewardBench**，首个支持自由格式偏好描述、覆盖9类任务5种模态的奖励模型评测集；(2) 训练数据集**Omni-RewardData**，包含248K通用偏好对和69K用于指令微调的自由格式偏好对；(3) 模型**Omni-RewardModel**，包括判别式（BT）和生成式（R1）两种全模态奖励模型。
3.  **与已有方法相比新在哪里**：(1) 首次系统性地将奖励建模扩展到全模态场景（包括音频、3D）；(2) 首次在奖励建模中引入**自由形式的自然语言偏好描述**，替代传统的二元选择，以支持动态、个性化的偏好对齐；(3) 构建了迄今为止最全面的多模态奖励建模训练数据集。
4.  **主要实验结果如何**：
    *   在自有基准Omni-RewardBench（w/ Ties设置）上，Omni-RewardModel-BT达到**65.36%** 准确率，超越最强基线（Claude 3.5 Sonnet的66.54%已属顶级，但模型整体仍有提升空间）。
    *   在公开基准VL-RewardBench上，Omni-RewardModel-BT达到**76.3%** 准确率，取得SOTA性能。
    *   消融实验证明，使用混合多模态数据进行训练比单模态数据显著提升泛化能力；指令微调数据对于处理自由格式偏好至关重要。

| 模型 | Omni-RewardBench (w/ Ties) | VL-RewardBench |
| :--- | :--- | :--- |
| Claude 3.5 Sonnet (最强基线) | 66.54% | 55.3% |
| **Omni-RewardModel-BT** | **65.36%** | **76.3%** |
| **Omni-RewardModel-R1** | **60.18%** | 未报告 |

5.  **实际意义是什么**：为未来的全模态大模型（如GPT-4o, Qwen2.5-Omni）提供了对齐所需的关键基础设施——评测标准和训练数据。推动了奖励建模从“固定偏好”向“个性化偏好”的范式转变，使AI系统能更灵活地适应不同用户或场景的具体需求。
6.  **主要局限性是什么**：(1) Omni-RewardBench的规模（3.7K对）相对较小，可能不足以全面评估超大规模模型；(2) 任务定义相对粗粒度，每种模态任务内的多样性还可进一步细分；(3) 当前数据仅限单轮交互，未涵盖多轮对话偏好。

---

### 50. [ParaS2S: Benchmarking and Aligning Spoken Language Models for Paralinguistic-aware Speech-to-Speech Interaction](/audio-paper-digest-blog/posts/2026-05-04-paras2s-benchmarking-and-aligning-spoken-language)

🔥 **8.0/10** | 前25% | #语音对话系统 | #强化学习 | #语音大模型 #语音合成

👥 **作者与机构**

- 第一作者：Shu-wen Yang（台湾大学通讯工程研究所）
- 通讯作者：Ming Tu（字节跳动 Seed），Lu Lu（字节跳动 Seed）
- 作者列表：Shu-wen Yang（台湾大学通讯工程研究所，字节跳动 Seed†），Ming Tu（字节跳动 Seed†），Andy T. Liu（字节跳动 Seed），Xinghua Qu（字节跳动 Seed），Hung-yi Lee（台湾大学通讯工程研究所），Lu Lu（字节跳动 Seed†），Yuxuan Wang（字节跳动 Seed），Yonghui Wu（字节跳动 Seed）

💡 **毒舌点评**

亮点：论文系统性地定义了副语言感知的S2S交互评估难题，并构建了从基准测试到自动评测再到强化学习训练的完整闭环，其提出的“PolyTone”训练策略和多阶段评测框架有效缓解了音频大模型的风格幻觉问题，实验结果令人信服。短板：整个框架高度依赖复杂的多阶段流程和多个外部模型（如Whisper， AudioReasoner， Qwen2.5-Omni），虽然论文提供了蒸馏后的奖励模型方案，但最终模型的轻量化和部署效率存在疑问，且核心RL方法（GRPO）并非原创。

🔗 **开源详情**

- **代码**：论文明确承诺开源代码（项目页面：https://paras2sbench.github.io/），但未在文中提供具体GitHub仓库链接。
- **模型权重**：承诺开源模型（文中提到“开源...模型”），但未具体说明开源哪个阶段的模型（SFT模型、奖励模型还是RL模型）。
- **数据集**：承诺开源ParaS2SBench基准测试数据集以及用于训练的合成数据。
- **Demo**：项目页面提供演示。
- **复现材料**：提供了详细的数据构建步骤（附录A.2）、评测器细节（附录A.3）、RL框架公式化（附录A.4）、消融实验设置（附录A.5）、人工评测说明（附录A.6）、以及所有用于数据生成和评测的Prompt模板（附录A.8），复现信息较为充分。
- **引用的开源项目**：依赖Whisper-V3（转录）、AudioReasoner（语气提取）、Emotion2vec（情绪分���）、Qwen2.5-Omni（奖励模型基础）、Kimi-Audio（S2S基础模型）、CosyVoice/YourTTS（语音合成）等多个开源项目。

📌 **核心摘要**

这篇论文针对现有语音到语音（S2S）模型无法根据用户语音中的副语言特征（如情绪、语气、年龄、性别）生成合适内容和风格回应的问题，提出了一个完整的解决方案框架ParaS2S。首先，论文构建了首个直接评估波形级S2S交互自然度的基准测试ParaS2SBench，它包含合成和真实语音查询，每个查询都设计了对比性的说话风格，要求模型必须“听”音频而非仅依赖文本内容。其次，针对当前端到端音频大模型（ALLM）作为评测器会产生的风格幻觉问题，论文提出了一个基于“PolyTone”训练策略的多阶段自动评测器，通过将内容和风格分析解耦，其与人类评分的相关性显著优于ALLM基线（Pearson相关性高出10%-15%）。最后，论文利用该自动评测器指导强化学习（RL）训练流程ParaS2SAlign，通过一个轻量级的SFT热启动和奖励模型蒸馏，在仅使用10小时配对数据的情况下，使基础模型（Kimi-Audio）在ParaS2SBench上的性能比纯SFT方法提升了10%以上，并超越了所有已有的开源和闭源模型。实验表明，RL方法在数据效率上远优于SFT，且能保持模型原有的通用对话能力。主要局限性在于框架复杂，且副语言交互评估本身依赖于多个组件的准确性。

---

### 51. [JALMBench: Benchmarking Jailbreak Vulnerabilities in Audio Language Models](/audio-paper-digest-blog/posts/2026-05-04-jalmbench-benchmarking-jailbreak-vulnerabilities)

🔥 **8.0/10** | 前10% | #音频安全 | #基准测试 | #音频大模型 #对抗样本

👥 **作者与机构**

- 第一作者：Zifan Peng (香港科技大学（广州），State Key Laboratory of Internet Architecture，清华大学)
- 通讯作者：Wenhan Dong (未说明具体单位，但标注为*Corresponding authors)，Xinlei He (香港科技大学（广州），State Key Laboratory of Internet Architecture，清华大学)
- 作者列表：Zifan Peng (香港科技大学（广州），清华大学State Key Laboratory of Internet Architecture)、Yule Liu (香港科技大学（广州）)、Zhen Sun (香港科技大学（广州）)、Mingchen Li (University of North Texas)、Zeren Luo (香港科技大学（广州）)、Jingyi Zheng (香港科技大学（广州）)、Wenhan Dong* (香港科技大学（广州）)、Xinlei He* (香港科技大学（广州），清华大学State Key Laboratory of Internet Architecture)、Xuechao Wang (香港科技大学（广州）)、Yingjie Xue (中国科学技术大学)、Shengmin Xu (福建师范大学)、Xinyi Huang (南京航空航天大学)

💡 **毒舌点评**

**亮点**：论文的系统性和工程完备性令人印象深刻，它不仅仅是一个数据集，更是一个集成了多种攻击、防御方法和分析工具的标准化评测平台，为尚处蓝海的音频大模型安全研究立下了第一个重要的坐标。**短板**：防御策略的探索相对浅尝辄止，仅仅是将视觉语言模型的方法简单适配，未能提出真正针对音频模态（如声学特征扰动）的、更有效的防御机制，使得“提出防御”这一目标打了折扣。

🔗 **开源详情**

- **代码**：论文提供了GitHub仓库链接（https://github.com/sfofgalaxy/JALMBench），框架模块化，可扩展。
- **模型权重**：论文评估了多个开源和商业模型，但并未贡献新的模型权重。未提及。
- **数据集**：论文明确将数据集托管在HuggingFace平台（包含在上述GitHub仓库中），并详细说明了数据构成和获取方式。
- **Demo**：未提及在线演示。
- **复现材料**：提供了详��的论文附录（如攻击方法实现细节、评测提示、额外的实验结果表格），以及Docker镜像以支持复现。
- **引用的开源项目**：论文依赖多个开源工具，包括Google TTS, DeepL Translator, 各种TTS系统（F5-TTS, MMS-TTS, SpeechT5），以及评估中使用的LLM（如GPT-4o）。

📌 **核心摘要**

该论文旨在解决大型音频语言模型（LALM）日益增长的安全风险，特别是缺乏针对越狱攻击的统一评估框架和大规模基准数据集的问题。论文的核心贡献是构建了JALMBench，一个包含超过24.5万音频样本（>1000小时）和1.1万文本样本的全面基准，支持评估12个主流LALM、8种攻击方法（4种文本迁移、4种音频原生）和5种防御策略。与已有零散的工作相比，JALMBench是首个系统化、模态统一、覆盖全面的评估平台。主要实验结果显示，音频原生攻击（如AdvWave）的成功率极高（平均96.2%），远高于直接有害查询（平均21.5%），表明当前LALM在音频模态存在严重安全漏洞。论文还通过深入分析揭示了关键发现：离散音频令牌化策略比连续特征提取更能保持跨模态安全一致性；现有防御方法（如AdaShield）仅能小幅降低攻击成功率（约19.6个百分点）。该工作的实际意义在于为LALM安全研究提供了权威的评估标准，指明了防御研究的迫切性。主要局限性在于对防御策略的探索不够深入，未能提出针对音频模态特性的有效新防御。

---

### 52. [Deep Learning with Learnable Product-Structured Activations](/audio-paper-digest-blog/posts/2026-05-04-deep-learning-with-learnable-product-structured)

🔥 **8.0/10** | 前10% | #神经网络架构 | #神经网络架构 | #隐式神经表示 #深度学习理论

👥 **作者与机构**

- 第一作者：Saanjali Maharaj（University of Toronto）
- 通讯作者：Prasanth B. Nair（University of Toronto）
- 作者列表：Saanjali Maharaj（University of Toronto）、Prasanth B. Nair（University of Toronto）

💡 **毒舌点评**

亮点在于LRNN架构将低秩函数分解思想巧妙地引入深度学习，其理论分析严谨（证明了通用逼近和维度诅咒缓解），并且实验设计得极为全面，从ImageNet图像到PDE求解，几乎“打穿”了隐式表示领域的主流基准。短板则是，尽管架构思想优美，但其每个“神经元”内部实际嵌套了一个小型MLP（用于参数化一元函数），这无疑显著增加了计算复杂度和训练时间，论文在性能与效率的权衡上讨论稍显不足，可能限制其在大规模实时应用中的部署。

🔗 **开源详情**

- **代码**：论文明确提供了公开的代码仓库链接：https://github.com/dacelab/lrnn。
- **模型权重**：论文中未提及公开预训练模型权重。
- **数据集**：使用了公开的数据集（ImageNet, DIV2K, GTZAN, LibriSpeech等），但论文中未说明是否提供处理后的特定任务数据集。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文提供了极其详尽的复现信息，包括：
    - 所有实验的具体超参数设置（学习率、调度器、模型尺寸等）。
    - 架构的实现细节（如组件MLP的结构、LayerNorm的使用、方差控制缩放）。
    - 各类消融研究的设计和结果。
    - 训练硬件信息（单张RTX 4090 GPU）。
- **论文中引用的开源项目**：论文依赖并对比了多个开源基准模型，包括SIREN、SPDER、WIRE、Gaussian Activated Networks等的官方实现。其实现基于PyTorch框架。

📌 **核心摘要**

1.  **问题**：现代神经网络受限于固定激活函数，难以自适应地捕捉任务特定的高阶交互结构，且在表示高频信号时存在频谱偏差。
2.  **方法核心**：提出“深度低秩分离神经网络”（LRNN）。其核心是每个神经元使用一个**可学习的乘积结构激活函数**，即多个可学习的一元变换的乘积，而非传统的固定标量激活。
3.  **新意**：与传统MLP和固定激活的INR方法相比，LRNN的激活函数是高度灵活且数据依赖的，能自然地通过乘法合成丰富的频谱成分。该架构是标准MLP的推广，并建立了与低秩函数分解的理论联系。
4.  **主要实验结果**：LRNN在多个任务上达到SOTA。在图像表示上，对1000张ImageNet图像达到40dB PSNR的成功率为100%，远超SIREN（1.8%）和SPDER（26.4%）。在音频表示上，MSE比基线低3-11倍。在PDE求解上，用SIREN 1/8的参数量实现同等或更低误差。在稀疏视图CT重建中，获得最高PSNR（29.13 dB）和SSIM（0.7455），且无伪影。
5.  **实际意义**：提供了一种通用、表达能力强且理论清晰的神经网络构建模块，能显著提升信号表示、科学计算和成像任务的性能，有助于减少医疗CT的辐射剂量。
6.  **主要局限性**：其反向传播需要存储中间乘积项，导致内存占用高于标准MLP；架构增加了每层的计算复杂度；虽然提供了消融实验，但对于如何在不同任务中最优地设置超参数（如分离秩r和投影宽度\(\bar{d}\)）的指导不够充分。

---

### 53. [FlexiVoice: Enabling Flexible Style Control in Zero-Shot TTS with Natural Language Instructions](/audio-paper-digest-blog/posts/2026-05-04-flexivoice-enabling-flexible-style-control-in)

🔥 **8.0/10** | 前25% | #语音合成 | #强化学习 | #零样本 #多语言

👥 **作者与机构**

- 第一作者：Dekun Chen (The Chinese University of Hong Kong, Shenzhen; Shenzhen Loop Area Institute)
- 通讯作者：未明确说明（论文中未明确指出通讯作者）
- 作者列表：Dekun Chen (香港中文大学（深圳）/深圳湾实验室), Xueyao Zhang (香港中文大学（深圳）), Yuancheng Wang (香港中文大学（深圳）), Kenan Dai (Huawei Technologies Co., Ltd.), Li Ma (Huawei Technologies Co., Ltd.), Zhizheng Wu (香港中文大学（深圳）/澳门城市大学/Amphion Technology Co., Ltd.)

💡 **毒舌点评**

这篇论文的核心亮点在于其系统性地将“风格、音色、内容”的解耦问题，转化为一个可分阶段优化的强化学习课程（PPT），技术路径设计精巧且实验证据扎实。不过，其最终效果高度依赖奖励模型的质量，而论文中使用的7B开源奖励模型与闭源前沿模型仍存在代差，这在一定程度上限制了其在最复杂指令上的表现上限，也为未来工作留下了明确的改进方向。

🔗 **开源详情**

- **代码**：论文中提到将发布全部训练和推理代码。提供在线演示网站：https://flexi-voice.github.io/。但未提供具体代码仓库链接（如GitHub）。
- **模型权重**：论文中承诺将发布模型检查点，但未提及具体权重文件或下载地址。
- **数据集**：承诺发布FlexiVoice-Instruct数据集，未说明具体获取方式（如Hugging Face）。
- **Demo**：提供了在线演示网站链接。
- **复现材料**：附录A.10详细列出了训练硬件（8×A800）、各阶段训练时长、学习率、轮数、超参数（β, G）等关键复现信息。
- **引用的开源项目**：模型核心使用Phi-3.5-mini-instruct，语音分词使用DualCodec，声码器使用Vocos，奖励模型使用Emotion2vec-Large、CAM++和Kimi-Audio-7B-Instruct。

📌 **核心摘要**

1.  **要解决什么问题**：在零样本文本转语音（TTS）中，当同时使用自然语言指令控制风格（如情绪）和参考语音控制音色时，模型容易受到文本内容或参考语音中内含风格的干扰，无法准确遵循目标指令，即“风格-音色-内容冲突”。
2.  **方法核心是什么**：提出FlexiVoice系统，以大语言模型为核心。核心创新是“渐进式后训练（PPT）”框架，包含三个递进阶段：1）使用多模态DPO进行初步对齐；2）使用多目标GRPO在冲突数据上强制解耦风格、音色与内容；3）使用基于音频语言模型奖励的GRPO提升对复杂、开放式指令的遵循能力。
3.  **与已有方法相比新在哪里**：不同于以往简单条件化或单一阶段对齐，PPT通过课程学习策略，显式地、分阶段地解决模态冲突，实现了更鲁棒的解耦。同时，构建了大规模高质量指令-语音数据集FlexiVoice-Instruct。
4.  **主要实验结果**：在解耦任务上，FlexiVoice在TR-hard（参考语音与指令冲突）任务上的指令准确率（ACC-I）在英语和中文上分别达到78.2%和75.8%，远超基线模型（如VoxInstruct的23.9%和18.7%）。在复杂指令基准InstructTTSEval上，FlexiVoice的英文平均准确率达79.3%，接近闭源系统Gemini-pro的80.3%，并超越所有开源基线。消融实验表明，PPT的渐进式顺序（S1→S2→S3）优于其他顺序或联合训练。
5.  **实际意义是什么**：为需要高度定制化语音生成的应用（如有声书、游戏配音、虚拟助手）提供了灵活、可控的TTS解决方案，能够仅通过自然语言描述和任意音色参考，生成符合要求的语音。
6.  **主要局限性是什么**：性能上限受限于开源奖励模型（Kimi-Audio-7B）的能力，其判断准确性与最强闭源模型仍有差距。此外，为遵循风格指令对语音进行的声学改造，不可避免地会对说话人音色相似度造成轻微影响。

---

### 54. [Can Vision-Language Models Answer Face to Face Questions in the Real-World?](/audio-paper-digest-blog/posts/2026-05-04-can-vision-language-models-answer-face-to-face)

🔥 **8.0/10** | 前25% | #音频问答 | #基准测试 | #多模态模型 #音视频

👥 **作者与机构**

- 第一作者：Reza Pourreza（Qualcomm AI Research）
- 通讯作者：未明确说明
- 作者列表：Reza Pourreza（Qualcomm AI Research）， Rishit Dagli（University of Toronto / Qualcomm AI Research）， Apratim Bhattacharyya（Qualcomm AI Research）， Sunny Panchal（Qualcomm AI Research）， Guillaume Berger（Qualcomm AI Research）， Roland Memisevic（Qualcomm AI Research）

💡 **毒舌点评**

论文的亮点在于精准地抓住了当前多模态大模型从“离线理解”走向“实时交互”的关键瓶颈，并构建了一个极具针对性的真实世界问答基准，为社区指明了明确的改进方向。然而，其短板在于数据集规模相对有限（2900条），且核心评估指标依赖LLM judge，可能引入新的评估偏差，而提出的“流式基线”方法相对简单，更多是概念验证而非技术突破。

📌 **核心摘要**

本文旨在评估当前的视觉语言大模型在真实世界实时、面对面问答场景下的能力。论文指出，现有模型和基准大多关注离线视频理解，缺乏对实时交互中“情境感知”和“回答时机判断”能力的评估。为此，作者构建了一个新的数据集与基准——Qualcomm Interactive Video Dataset (QIVD)。该数据集包含2900个由用户通过手机或电脑录制的视频，视频中用户会基于看到的场景提出一个开放性问题，并提供了问题文本转录、答案以及最关键的“最佳回答时间戳”。通过与多个最先进（SOTA）模型（包括GPT-4o、Gemini、Qwen系列、VideoLLaMA系列等）的对比实验，论文发现现有模型在该任务上与人类表现存在巨大差距。例如，在离线设置（使用真值问题和时间戳）下，最强的GPT-4o模型正确率仅为58.76%，而人类基线达到87.33%。实验揭示了模型的三大主要失败模式：难以实时整合视听信息消歧、无法判断合适的回答时机、缺乏情境常识。论文进一步证明，通过在QIVD上对多模态模型（如VideoLLaMA2.1）进行微调，可以显著提升其在动作计数、音频视觉任务等类别上的性能。该工作的主要贡献是提出了一个全新的、用于评估实时交互式视觉推理的基准数据集，并系统地分析了当前模型的局限性。其局限性在于数据集规模相对较小，且评估高度依赖LLM judge。

---

### 55. [DiVeQ: Differentiable Vector Quantization Using the Reparameterization Trick](/audio-paper-digest-blog/posts/2026-05-04-diveq-differentiable-vector-quantization-using)

🔥 **8.0/10** | 前25% | #生成模型 | #向量量化 | #图像生成 #语音编码

👥 **作者与机构**

- 第一作者：Mohammad Hassan Vali（ELLIS Institute Finland & Department of Computer Science, Aalto University, Finland）
- 通讯作者：未明确说明（论文提供了三位作者的共同邮箱，未指定单独通讯作者）
- 作者列表：Mohammad Hassan Vali（ELLIS Institute Finland & Department of Computer Science, Aalto University, Finland）、Tom Bäckström（Department of Information and Communications Engineering, Aalto University, Finland）、Arno Solin（ELLIS Institute Finland & Department of Computer Science, Aalto University, Finland）

💡 **毒舌点评**

这篇论文精准地“修理”了向量量化在深度学习应用中那个著名的老毛病——梯度消失，提出的DiVeQ和SF-DiVeQ方法就像是给量化层装了一个“梯度导管”，既保持了推理时硬编码的离散性，又让训练信号能顺畅回流，实验部分更是“地毯式轰炸”，在多个任务和数据集上全面碾压了包括NSVQ、RT在内的现有花式方案。不足之处在于SF-DiVeQ的初始化有点“娇气”，需要先跑几个epoch“热身”，而且虽然解决了码本错位问题，但本质上仍是在“码本空间”内做文章，对于如何突破固定码本大小的表达能力瓶颈并未触及。

🔗 **开源详情**

- **代码**：论文承诺在GitHub（https://github.com/AaltoML/DiVeQ）开源代码，但截至审稿时尚未发布。论文中提供了完整的实现细节。
- **模型权重**：论文中未提及公开预训练模型权重。
- **数据集**：使用的是公开标准数据集（AFHQ, CELEBA-HQ, FFHQ, LSUN, VCTK），论文中未提及自己创建或发布新数据集。
- **Demo**：论文中未提及在线演示。
- **复现材料**：附录A提供了非常详细的实现细节，包括VQ-VAE、VQGAN、DAC的模型架构表、所有超参数设置（学习率、batch size、优化器、训练轮数、码本替换策略、DiVeQ/SF-DiVeQ的σ²选择等）、以及其他方法的实现参考（如ST-GS、RT的代码库）。复现指南充分。
- **论文中引用的开源项目**：引用了DeepMind的VQ-VAE实现、zalandoresearch的PyTorch VQ-VAE、dome272的VQGAN实现、Karpathy的ST-GS实现、Lucidrains的RT实现、Pikku NAC（DAC变体）以及clean-fid评估工具。

📌 **核心摘要**

1.  **要解决什么问题**：向量量化（VQ）层因其最近邻赋值操作的不可微性，阻碍了端到端梯度回传（梯度崩溃问题），使得依赖VQ的模型（如VQ-VAE）难以训练。
2.  **方法核心是什么**：提出了两种基于重参数化技巧的可微向量量化方法：DiVeQ和SF-DiVeQ。**DiVeQ** 将量化误差建模为一个方向与最近码本向量对齐、大小等于输入-码本距离的误差向量（`z_q = z + ||c*-z||_2 * (v_d / ||v_d||_2)`, 其中 `v_d = v + (c*-z)`, `v~N(0, σ^2 I)`）。通过令噪声方差σ^2趋近于零，使 `z_q` 精确指向最近码本向量。**SF-DiVeQ** 将量化从离散码本点扩展到连接相邻码本向量的线段上，通过在训练中随机采样线段上的点进行量化，实现了连续空间填充。
3.  **与已有方法相比新在哪里**：与STE、EMA、RT、ST-GS等需要辅助损失或存在训练-测试不匹配的方法不同，DiVeQ/SF-DiVeQ无需额外损失项或温度调度，实现了硬分配下的端到端可微训练。与NSVQ相比，DiVeQ通过方向性约束避免了随机方向导致的额外量化误差。SF-DiVeQ进一步避免了码本错位和坍塌问题，实现了码本的完全利用。
4.  **主要实验结果如何**：在VQ-VAE图像压缩（AFHQ, CELEBA-HQ等数据集）、VQGAN图像生成（CELEBA-HQ等）和DAC语音编码（VCTK数据集）任务上，DiVeQ和SF-DiVeQ在各项指标上一致优于其他方法。例如，在AFHQ图像压缩（11位码本）中，DiVeQ的LPIPS（越低越好）为0.349，优于NSVQ的0.473和STE的0.373。在CELEBA-HQ生成任务（HP2设置，9位码本）中，SF-DiVeQ的FID（越低越好）为6.66，远优于ST-GS的41.1和NSVQ的70.1。详见论文中表2、图6等。
5.  **实际意义是什么**：DiVeQ和SF-DiVeQ可作为标准VQ层的即插即用替代品，简化了涉及VQ的深度模型（如压缩、生成模型）的训练流程，提高了训练稳定性和最终性能。
6.  **主要局限性是什么**：1）SF-DiVeQ需要特定的初始化策略（先训练几个epoch再引入量化），增加了使用复杂度；2）虽然解决了码本利用率问题，但模型性能仍受限于固定的码本大小；3）论文未探讨该方法在更复杂的VQ变体（如残差VQ的更多层）或更大规模模型中的表现。

---

### 56. [Aurelius: Relation Aware Text-to-Audio Generation At Scale](/audio-paper-digest-blog/posts/2026-05-04-aurelius-relation-aware-text-to-audio-generation)

🔥 **8.0/10** | 前25% | #音频生成 | #流匹配 | #基准测试 #数据集

👥 **作者与机构**

- 第一作者：Yuhang He (Microsoft Research)
- 通讯作者：Yuhang He (Microsoft Research)
- 作者列表：Yuhang He (Microsoft Research), He Liang (University of Oxford, Department of Computer Science), Yash Jain (Microsoft Research), Andrew Markham (Microsoft Research), Vibhav Vineet (Microsoft Research)

💡 **毒舌点评**

**亮点**：本文核心贡献在于为“关系感知文本到音频生成”这一被忽视的子任务，系统性地构建了两个大规模、高质量的专用数据集（AudioEventSet 和 AudioRelSet）和一套完整的评测基准，精准填补了领域空白。**短板**：论文的“方法”部分更多是基于现有基线模型（如TangoFlux）进行评测和简单的微调实验，缺乏一个针对关系感知生成提出全新、完整架构的深度技术方案，创新性更偏向数据与评测而非模型本身。

🔗 **开源详情**

- **代码**：论文提供了代码仓库链接：https://github.com/yuhanghe01/Aurelius
- **模型权重**：论文中未提及是否公开其自身提出的模型权重，但评测了多个公开的基线模型（如TangoFlux, AudioGen）。
- **数据集**：AudioEventSet和AudioRelSet的构建方法已详细描述，但论文中未明确说明数据集是否公开以及如何获取。项目主页链接为：https://yuhanghe01.github.io/Aurelius-Proj/
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文提供了详细的基线模型推理设置（附录表III）、代理工作流的具体实现（附录.3）、以及数据集构建的完整描述（3.1-3.3节），为复现提供了必要信息。
- **论文中引用的开源项目**：TangoFlux, AudioGen, PANNs (用于音频事件检测和声学效果分类), Qwen-family LLMs (用于代理工作流)。

📌 **核心摘要**

1.  **要解决什么问题**：现有文本到音频生成模型在处理包含多个音频事件及其复杂空间、时间、逻辑关系的描述时能力严重不足，其关系建模能力未得到充分研究和评估。
2.  **方法核心是什么**：提出Aurelius框架，其核心是构建两个大规模、高质量的专用语料库：包含110种独特音频事件的**AudioEventSet**和包含100种关系的**AudioRelSet**。二者通过“关系-文本模板化”与“事件实例化”策略组合，可生成海量多样化的`<文本，音频>`训练/测试对。
3.  **与已有方法相比新在哪里**：首次为关系感知TTA任务提供了大规模、系统化的基准。新在：1) 专用数据集的规模与质量远超以往小规模探索（如RiTTA的11种关系）；2) 提出关系“元数”概念和可扩展的配对生成策略；3) 对现有SOTA模型进行了全面、深入的基准测试与分析。
4.  **主要实验结果如何**：基准测试显示，现有最强模型（如TangoFlux, AudioGen）在核心关系感知指标mAMSR上得分极低，最高仅为2.22%（表2）。将TangoFlux在数据集上微调后，其mAMSR从零样本的1.77%显著提升至5.58%（表3），证明了基准的有效性。但所有模型在复杂嵌套关系和高“元数”关系上仍表现不佳（图6、图7）。
5.  **实际意义是什么**：为关系感知TTA研究建立了可量化、可扩展的公共测试平台，揭示了当前技术的根本短板，指明了未来需重点攻克关系建模能力，而非仅提升音频保真度。
6.  **主要局限性是什么**：1) 核心贡献集中于数据与评测，未提出全新的生成模型架构；2) 关系复杂度（最高五元）和规模（100种）仍可能无法覆盖真实世界所有潜在关系；3) 自动化评测依赖音频事件检测和声学效果分类器，其准确性可能影响最终得分。

---

### 57. [WAVE: Learning Unified & Versatile Audio-Visual Embeddings with Multimodal LLM](/audio-paper-digest-blog/posts/2026-05-04-wave-learning-unified-versatile-audio-visual)

🔥 **8.0/10** | 前25% | #音频检索 | #对比学习 | #多模态模型 #视频检索

👥 **作者与机构**

- 第一作者：Changli Tang (清华大学)
- 通讯作者：Chao Zhang (清华大学)
- 作者列表：Changli Tang (清华大学), Qinfan Xiao (清华大学), Ke Mei (腾讯微信视觉), Tianyi Wang (腾讯微信视觉), Fengyun Rao (腾讯微信视觉), Chao Zhang (清华大学)

💡 **毒舌点评**

这篇论文最大的亮点在于“敢为人先”，首次将文本、音频、视频统一到同一个LLM嵌入空间，打破了传统双编码器的限制，其联合训练策略带来的跨模态性能提升也令人印象深刻。然而，其创新性更多体现在对现有技术（LLM backbone，分层融合，多任务训练）的精巧集成与验证，而非提出颠覆性的新概念，因此对于追求“首个”或“全新范式”的读者而言可能略显不足。

🔗 **开源详情**

- **代码**：论文中提到代码和检查点将在 `https://github.com/TCL606/WAVE` 发布。但当前论文PDF中未提供该链接。
- **模型权重**：论文承诺将发布模型检查点（checkpoints）。
- **数据集**：论文使用了多个公开数据集（如Panda-70M, MSR-VTT, AudioCaps等），但未提及发布新的数据集。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文在Section 3.1, 3.2, 4.1, 4.2中详细描述了模型架构、训练流程、训练数据和超参数，提供了足够的复现信息。
- **论文中引用的开源项目**：
    - **基础模型**：Qwen2.5-Omni (Xu et al., 2025)
    - **音频编码器**：BEATs (Chen et al., 2022b)
    - **训练数据**：WavCaps, AudioCaps, Clotho, Panda-70M等。
    - **其他工具/模型**：LoRA (Hu et al., 2022), InternVL-2.5-8B (Chen et al., 2024c) 用于重新标注。

📌 **核心摘要**

1. **要解决的问题**：现有的多模态嵌入模型多基于独立编码器，缺乏一个能同时处理文本、音频、视频，并将它们统一到同一语义空间的通用模型。这对于需要动态模态（如音视频）深度理解的跨模态检索和生成任务是一个瓶颈。
2. **方法核心**：提出了WAVE，一个基于Qwen2.5-Omni多模态大语言模型的统一音视频嵌入模型。其核心设计包括：1) 双音频编码器（语音+音频事件）全面捕获音频信息；2) 一种分层特征融合策略，聚合LLM多层隐藏状态以获得更鲁棒的表示；3) 联合多模态多任务训练策略，同时优化检索与问答任务。
3. **与已有方法相比新在哪里**：WAVE是首个能够为文本、静音视频、音频以及同步音视频输入生成统一嵌入的LLM-based模型。与现有双编码器模型（如CLIP系列）或专注图像的LLM嵌入模型（如VLM2Vec）不同，WAVE真正实现了对动态音视频模态的统一建模，并具备生成提示感知（prompt-aware）嵌入的能力。
4. **主要实验结果**：
    - **视频理解**：在MMEB-v2视频基准整体得分**59.9%**，全面超越LamRA、GME等开源模型，甚至优于工业级模型Seed-1.6-Embedding（55.3%）。
    - **音频/音视频检索**：在AudioCaps（文本到音频R@1: **44.2%**）、Clotho（25.6%）、VGGSound（视频到音频R@1: **25.0%**）等任务上达到SOTA。
    - **提示感知能力**：在视频问答任务中，使用单独问题作为提示时平均准确率达**72.5%**，远超使用通用提示（51.8%），显著优于其他嵌入模型。
    - **消融实验**：联合训练优于分别训练（7/8任务上提升）；分层特征融合（All-layer MLP）优于单层池化（如在MSR-VTT上，视频检索R@1从54.7%提升至**56.1%**）。
    主要实验结果见下表：

| 任务类别 | 基准 | 指标 | WAVE 7B | 最强基线/参考模型 | 参考值 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **视频嵌入** | MMEB-v2-Video Overall | Acc% | **59.9** | Seed-1.6-Embedding | 55.3 |
| | MMEB-v2-Video RET | R@1 | **72.5** | Seed-1.6-Embedding | 60.9 |
| | LoVR (theme-to-clip) | R@25 | **66.0** | LamRA 7B | 60.2 |
| **音频检索** | AudioCaps | R@1 | **44.2** | Reference Model | 42.2 |
| | Clotho | R@1 | **25.6** | Reference Model | 21.5 |
| **音视频检索** | VGGSound | R@1 | **25.0** | encoder-only | 10.3 |
| **音频问答** | MMAU | Acc% | **76.6** | Qwen2.5-Omni 7B | 71.5 |
| **视频问答** | MMEB-v2-Video QA (w/ questions) | Acc% | **72.5** | Seed-1.6-Embedding | 60.9 |

5. **实际意义**：WAVE提供了一个强大的基线模型，使得在单一模型中处理任意模态组合的检索、分类和问答成为可能，极大地推动了跨模态应用（如通用多模态搜索、内容理解）的发展。
6. **主要局限性**：论文未详细讨论模型在面对更复杂、更长或噪声更大的真实世界音视频场景下的鲁棒性。此外，其统一的嵌入空间是否能无缝支持所有下游生成任务（如图像生成）也未验证。

---

### 58. [WearVox: An Egocentric Multichannel Voice Assistant Benchmark for Wearables](/audio-paper-digest-blog/posts/2026-05-04-wearvox-an-egocentric-multichannel-voice)

🔥 **8.0/10** | 前25% | #基准测试 | #麦克风阵列 | #多通道 #语音大模型

👥 **作者与机构**

- 第一作者：Zhaojiang Lin（Meta），Yong Xu（Meta），Kai Sun（Meta）（论文明确标注三位为共同第一作者：Joint first author）
- 通讯作者：未明确说明（但Zhaojiang Lin提供了联系邮箱zhaojiang@meta.com）
- 作者列表：Zhaojiang Lin（Meta），Yong Xu（Meta），Kai Sun（Meta），Jing Zheng（Meta），Yin Huang（Meta），Surya Teja Appini（Meta），Krish Narang（Meta），Renjie Tao（Meta），Ishan Kapil Jain（Meta），Siddhant Arora（Carnegie Mellon University，标注工作在Meta完成），Ruizhi Li（Meta），Yiteng Huang（Meta），Kaushik Patnaik（Meta），Wenfang Xu（Meta），Suwon Shon（Meta），Yue Liu（Meta），Ahmed A Aly（Meta），Anuj Kumar（Meta），Florian Metze（Meta），Xin Luna Dong（Meta）

💡 **毒舌点评**

亮点在于首次针对可穿戴场景定义了多通道、自我中心语音助手评测标准，数据基于真实AI眼镜采集，任务设计紧贴现实痛点（如侧向对话拒绝）。短板是数据集规模相对有限（3.8k样本），且评估的大部分现有SLLM只能基于波束成形后的单通道音频输入，未能充分验证多通道架构的潜力，论文中提出的MC WearLlama也仅是案例研究，非核心贡献。

🔗 **开源详情**

- **代码**：提供数据集代码仓库链接：`https://github.com/facebookresearch/wearvox`。
- **模型权重**：未提及公开任何模型权重（包括论文中评估的商业模型和案例研究的WearLlama模型）。
- **数据集**：WearVox数据集通过上述GitHub仓库公开。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文提供了详细的基准任务提示（附录A.1）、LLM评判提示（附录A.2）、数据采集细节（附录A.3）和分布统计（附录A.4），但**未提供**完整的训练细节、配置、检查点或超参数设置。
- **论文中引用的开源项目**：论文中引用的开源模型/框架包括：Whisper ASR、Llama 3.3 70B（用作LLM评判）、Llama-4-Scout、Conformer、BEST-RQ、AudioChatLlama、SeamlessM4T。

📌 **核心摘要**

这篇论文旨在解决现有语音助手评测基准忽略可穿戴设备特有挑战（如自我中心音频、运动噪声、区分设备指令与背景对话）的问题。核心方法是提出了**WearVox**，首个专门针对可穿戴场景的基准数据集，包含3,842条通过AI眼镜采集的多通道自我中心音频录音，涵盖五类任务（搜索问答、闭卷问答、工具调用、侧向对话拒绝、双向语音翻译）及多样化室内外声学环境。与已有基准相比，WearVox首次引入了多通道音频、丰富的说话人角色（佩戴者、对话伙伴、旁观者）和真实世界噪声环境。实验评估了多个先进的语音大语言模型，发现当前最先进模型在嘈杂户外环境性能显著下降，准确率在29%至59%之间。一个案例研究表明，基于多通道输入的SLLM（MC WearLlama）相比单通道版本，在抗噪声和区分设备指令方面表现出显著优势，侧向对话拒绝准确率从85.6%提升至93.9%。该工作填补了可穿戴语音AI评测的空白，揭示了空间音频线索对上下文感知助手的重要性。主要局限在于数据集规模仍属中等，且提出的多通道模型仅为案例研究，未成为可直接复用的开源SOTA模型。

---

### 59. [TVTSyn: Content-Synchronous Time-Varying Timbre for Streaming Voice Conversion and Anonymization](/audio-paper-digest-blog/posts/2026-05-04-tvtsyn-content-synchronous-time-varying-timbre)

🔥 **8.0/10** | 前25% | #语音转换 #语音匿名化 | #时变建模 #流式处理 | #语音转换 #语音匿名化

👥 **作者与机构**

- 第一作者：Waris Quamer（德克萨斯A&M大学计算机科学与工程系）
- 通讯作者：未明确说明
- 作者列表：Waris Quamer（德克萨斯A&M大学计算机科学与工程系）、Mu-Ruei Tseng（德克萨斯A&M大学计算机科学与工程系）、Ghady Nasrallah（德克萨斯A&M大学计算机科学与工程系）、Ricardo Gutierrez-Osuna（德克萨斯A&M大学计算机科学与工程系）

💡 **毒舌点评**

论文的亮点在于精准捕捉了流式语音转换/匿名化中“静态说话人嵌入 vs 动态内容序列”这一核心矛盾，并设计了结构化的时变音色表示（TVT）和全局音色记忆（GTM）来优雅地解决它，设计思路清晰且有启发性。短板则在于实验部分，虽然全面对比了流式基线，但与VPC’24中表现更好的离线系统（如T8-4在隐私上远超TVTSyn）对比时，论文以“设计目标不同”为由回避了直接比较，这在一定程度上削弱了其声明的“SOTA”说服力；另外，UAR指标显示其情绪抑制很强（37.32%），但这可能是过度匿名化的副作用，论文未深入探讨如何可控地平衡身份与副语言信息。

🔗 **开源详情**

-   **代码**：论文提供了一个代码仓库的链接：https://anonymized0826.github.io/TVTSyn/。这通常意味着代码可能开源或至少包含演示。
-   **模型权重**：论文中未提及是否公开预训练模型权重。
-   **数据集**：训练使用了公开的LibriTTS语料库。评估数据集（CMU ARCTIC, L2-ARCTIC, VCTK, EMIME, LibriSpeech）也均为公开数据集，获取方式遵循标准学术协议。
-   **Demo**：上述链接页面可能包含音频演示样本（论文中提到“Audio samples can be found at”）。
-   **复现材料**：论文提供了详尽的架构描述（附录A）、超参数配置表（表5、表6）、训练策略和评估协议，为复现提供了重要指导。但未明确提供训练脚本、环境配置或检查点。
-   **引用的开源项目**：论文中提到了SpeechBrain（用于说话人编码器）和Fairseq（用于HuBERT伪标签生成）。

📌 **核心摘要**

本文提出了TVTSyn，一个用于实时语音转换和说话人匿名化的端到端流式语音合成系统。该研究旨在解决现有流式系统中核心的表征失配问题：内容信息是时变的，而说话人身份通常作为静态全局嵌入注入，导致合成语音音色过于平滑、缺乏表现力。论文提出的核心方法是“内容同步的时变音色”（TVT）表示，它通过全局音色记忆（GTM）将全局说话人嵌入扩展为多个紧凑的“音色侧面”，并允许帧级内容特征通过注意力机制动态检索相关的音色侧面，再通过可学习的门控和球面线性插值（Slerp）进行调节，从而生成与内容同步变化的说话人条件化向量。同时，系统采用因子化向量量化（VQ）瓶颈来正则化内容编码器，减少残留的说话人信息泄漏。

与已有方法相比，TVTSyn的新颖之处在于将说话人条件从静态向量提升到了与内容帧对齐的动态序列，这从根本上解决了表示失配问题，并且整个架构为流式推理设计，完全因果且延迟低于80毫秒。主要实验结果表明（见下表），在语音转换任务上，TVTSyn在自然度（NISQA MOS）和说话人相似度（Trg-SIM）上优于多个流式基线（SLT24, DarkStream, GenVC）；在语音匿名化任务（遵循VPC’24协议）上，TVTSyn实现了强隐私保护（EER lazy-informed: 47.6%， semi-informed: 14.6%）和优秀的实用性（WER: 5.35%），在隐私-实用性权衡上优于所有流式基线。其实际意义在于为需要实时、低延迟且高隐私保护的语音应用（如匿名通信、隐私保护语音助手）提供了一种有效的技术方案。主要局限性包括：1) 与VPC’24中的部分离线顶尖系统相比，在匿名化强度上仍有差距；2) 情绪特征（UAR）被显著抑制，虽然增强了隐私，但也意味着丢失了部分副语言信息，论文未讨论如何可控地保留或修改情绪。

**语音转换任务关键指标对比：**

| 模型 | NISQA MOS (↑) | Src-SIM (↓) | Trg-SIM (↑) |
| :--- | :--- | :--- | :--- |
| Source (参考) | 4.41 | - | - |
| SLT24 | 3.91 | 0.46 | 0.65 |
| DarkStream | 3.42 | 0.47 | 0.74 |
| GenVC-s | 3.44 | 0.54 | 0.62 |
| GenVC-L | 3.18 | 0.55 | 0.61 |
| **TVTSyn (Proposed)** | **4.01** | **0.48** | **0.77** |

**VPC’24 匿名化任务关键指标对比（部分）：**

| 模型 | WER (↓) | EER (lazy-informed, ↑) | EER (semi-informed, ↑) |
| :--- | :--- | :--- | :--- |
| SLT24 | 5.70 | 31.40 | 10.12 |
| DarkStream | 10.80 | 49.09 | 20.83 |
| **TVTSyn (Proposed)** | **5.35** | **47.55** | **14.57** |
| VPC24 T8-4 | 3.75 | - | 48.25 |
| VPC24 T10-C3 | 2.62 | - | 37.34 |

---

### 60. [Toward Complex-Valued Neural Networks for Waveform Generation](/audio-paper-digest-blog/posts/2026-05-04-toward-complex-valued-neural-networks-for)

🔥 **8.0/10** | 前25% | #语音合成 | #复数神经网络 | #生成对抗网络 #声码器

👥 **作者与机构**

- 第一作者：Hyung-Seok Oh（高丽大学人工智能系）
- 通讯作者：Seong-Whan Lee（高丽大学人工智能系）
- 作者列表：Hyung-Seok Oh（高丽大学人工智能系）、Deok-Hyeon Cho（高丽大学人工智能系）、Seung-Bin Kim（高丽大学人工智能系）、Seong-Whan Lee（高丽大学人工智能系）

💡 **毒舌点评**

**亮点**：论文工作非常系统，不仅提出了复数域生成器与判别器的完整GAN框架，还针对性地设计了相位量化层作为归纳偏置，并给出了计算图级别的效率优化（分块矩阵），形成了一个从理论动机到工程实现闭环的扎实工作。**短板**：复数网络带来的参数量与显存开销（约翻倍）是其难以回避的“阿喀琉斯之踵”，论文虽通过分块矩阵优化了训练时间，但在推理吞吐量和多卡训练支持上仍显不足，这限制了其在大规模工业部署中的即时吸引力。

🔗 **开源详情**

- **代码**：提供代码仓库链接：https://github.com/hs-oh-prml/ComVo。
- **模型权重**：提供预训练模型权重，可通过论文提供的主页链接获取：https://hs-oh-prml.github.io/ComVo/。
- **数据集**：使用公开的LibriTTS和MUSDB18-HQ数据集。
- **Demo**：论文主页提供音频样本演示：https://hs-oh-prml.github.io/ComVo/。
- **复现材料**：论文提供了非常详细的训练配置表（表20），包括所有超参数、数据设置、损失权重、硬件信息等。附录中也包含了各基线模型的实现来源（表17）和评估指标的来源（表18）。
- **论文中引用的开源项目**：
    *   **Vocos**：作为基础架构进行改编。
    *   **HiFi-GAN, BigVGAN, iSTFTNet**：作为主要对比基线。
    *   **APNet, APNet2, FreeV**：作为幅相预测声码器的对比基线。
    *   **Matcha-TTS**：用于TTS管线评估的声学模型。
    *   **UTMOS, auraloss, PESQ, cargan**：用于客观评估的指标工具。

📌 **核心摘要**

1.  **解决的问题**：现有的基于逆短时傅里叶变换（iSTFT）的声码器（如Vocos）虽然效率高，但普遍使用实值神经网络（RVNN）将复数谱的实部和虚部作为独立通道处理，这限制了模型捕捉实虚部之间内在耦合结构的能力。
2.  **方法核心**：提出ComVo，一个完全在复数域内运行的GAN声码器。其生成器和判别器（cMRD）均使用原生复数算术层。同时引入了**相位量化层**，将连续相位离散化为有限等级，作为稳定训练的归纳偏置。此外，提出了**分块矩阵计算方案**，将复数乘法融合为单次矩阵乘法，以减少冗余操作，提升训练效率。
3.  **创新之处**：据作者称，这是首个将复数神经网络（CVNN）同时应用于生成器和判别器的iSTFT-based vocoder。与先前实值方法独立处理实虚部或简单拼接通道相比，该方法在复数域内进行端到端的对抗训练，能提供更结构化的反馈。相位量化和分块矩阵计算是两个重要的辅助创新。
4.  **主要实验结果**：在LibriTTS数据集上，ComVo在多数客观指标上超越了HiFi-GAN、iSTFTNet、BigVGAN和Vocos等强基线，MOS得分（4.07）与基线持平。在MUSDB18-HQ音乐数据集上，ComVo也取得最佳客观分数和竞争力的主观分数。消融实验表明，复数生成器与复数判别器的组合（GCDC）效果最佳；相位量化在Nq=128时带来最佳感知质量提升；分块矩阵方案在保持性能的前提下将训练时间减少了25%。

| 模型 | UTMOS ↑ | MR-STFT ↓ | PESQ ↑ | Periodicity ↓ | V/UV F1 ↑ | MOS ↑ | CMOS ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| GT | 3.8712 | - | - | - | - | 4.08 ± 0.04 | 0.14 |
| HiFi-GAN | 3.3453 | 1.0455 | 2.9360 | 0.1554 | 0.9174 | 4.00 ± 0.05 | -0.09 |
| iSTFTNet | 3.3591 | 1.1046 | 2.8136 | 0.1476 | 0.9243 | 3.98 ± 0.05 | -0.04 |
| BigVGAN | 3.5197 | 0.8994 | 3.6122 | 0.1181 | 0.9418 | 4.05 ± 0.05 | -0.05 |
| Vocos | 3.6025 | 0.8856 | 3.6266 | 0.1061 | 0.9522 | 4.05 ± 0.05 | -0.02 |
| **ComVo** | **3.6901** | **0.8439** | **3.8239** | **0.0903** | **0.9609** | **4.07 ± 0.05** | **0** |

**表2：在LibriTTS数据集上的客观与主观评估结果（关键行数据）**
5.  **实际意义**：证明了复数神经网络在音频波形生成任务中相对于实值网络的表示优势，为处理复值信号（如频谱）提供了更自然的建模范式。分块矩阵方案为优化复数运算在现有深度学习框架中的实现效率提供了实用思路。
6.  **主要局限性**：复数参数存储导致内存占用翻倍，增加了模型大小和显存需求。论文在单卡上实验，多GPU并行训练下的性能和稳定性未充分验证。相位量化层的直通估计器（STE）近似可能在某些任务上引入优化挑战。

---

### 61. [AC-Foley: Reference-Audio-Guided Video-to-Audio Synthesis with Acoustic Transfer](/audio-paper-digest-blog/posts/2026-05-04-ac-foley-reference-audio-guided-video-to-audio)

🔥 **8.0/10** | 前25% | #音频生成 | #流匹配 | #多模态模型 #零样本

👥 **作者与机构**

第一作者：Pengjun Fang（香港科技大学）
通讯作者：未明确说明。论文列出了多位作者及其单位，通常通讯作者会在投稿系统中标注，但此处文本未明确指出。根据作者列表顺序和惯例，可能为Qifeng Chen或Harry Yang，但为避免猜测，此处标记为“未说明”。
作者列表：
    - Pengjun Fang（香港科技大学）
    - Yingqing He（香港科技大学）
    - Yazhou Xing（香港科技大学）
    - Qifeng Chen（香港科技大学）
    - Ser-Nam Lim（中佛罗里达大学）
    - Harry Yang（中佛罗里达大学）

💡 **毒舌点评**

AC-Foley的亮点在于**用“听觉范例”替代“文字描述”来指挥AI配音**，这巧妙绕过了语言在描述“微妙质感”时的无力感，并通过精心设计的两阶段训练确保了模型不是简单复读机。然而，其短板也明显：当视频或参考音本身涉及**多重声源交叠或节奏极端错配**时（比如用猫叫配急促打字），模型的协调能力就会捉襟见肘，暴露了其在处理复杂声景和时序冲突上的稚嫩。

🔗 **开源详情**

- **代码**：论文中未提及代码仓库链接。仅在伦理声明中提及未来将以Apache 2.0许可证发布模型。
- **模型权重**：未提及公开预训练权重。
- **数据集**：使用公开数据集（VGGSound, AudioCaps2.0, WavCaps），并说明了其许可证（见附录F）。
- **Demo**：未提供在线演示链接。
- **复现材料**：提供了详尽的训练细节（优化器、学习率schedule、batch size、训练硬件与时间）、网络结构参数（隐藏维度、block数量），以及消融实验的设置，复现信息较为充分。
- **引用的开源项目/模型**：论文依赖并提及了以下开源工作：CLIP（视觉/文本编码器）、Synchformer（同步特征提取器）、BigVGAN（声码器）、ImageBind（多模态嵌入，用于数据筛选和评估）、AdamW（优化器）。

📌 **核心摘要**

这篇论文（ICASSP 2026 / ICLR 2026）针对现有视频到音频（V2A）生成方法中依赖文本控制导致的**语义粒度粗**和**描述模糊**两大瓶颈，提出了**AC-Foley**，一种参考音频引导的视频到音频合成框架。其核心方法是**直接将参考音频的声学特征作为条件信号**，通过多模态Transformer和基于流匹配的生成模型，合成与视频同步且具有参考音频音色特性的声音。与已有方法相比，AC-Foley的新颖之处在于：1) 用音频直接控制，实现了细粒度音色迁移和零样本声音生成；2) 提出了包含**重叠与非重叠条件**的两阶段训练策略，解决了参考音频的时间适配与泛化问题。

主要实验结果如下：在VGGSound测试集上，AC-Foley在多个指标上超越了现有SOTA方法。例如，在“有音频条件”设置下，其FDPaSST达到**56.00**（低于MMAudio+CLAP基线的70.80），MCD达到**11.37**（低于基线的14.63）。消融实验证实了两阶段训练和多模态条件组合的有效性（表4，表6）。在“无音频条件”设置下，该模型性能也具有竞争力（表1）。此外，在音色迁移任务上，AC-Foley在未使用Greatest Hits数��集训练的情况下，超越了专门训练的CondFoley模型（表2）。该工作的实际意义在于为电影、游戏等领域的音效设计提供了更灵活、精确的AI辅助工具。主要局限性包括在处理多声源复杂环境和极端时间错配场景时性能下降（见论文LIMITATIONS部分）。

---

### 62. [Physics-Informed Audio-Geometry-Grid Representation Learning for Universal Sound Source Localization](/audio-paper-digest-blog/posts/2026-05-04-physics-informed-audio-geometry-grid)

🔥 **8.0/10** | 前25% | #声源定位 | #物理信息 | #麦克风阵列 #空间音频

👥 **作者与机构**

- 第一作者：Min-Sang Baek（Hanyang University, Department of Electronic Engineering）
- 通讯作者：Joon-Hyuk Chang（Hanyang University, Department of Electronic Engineering）
- 作者列表：Min-Sang Baek（Hanyang University, Department of Electronic Engineering）、Gyeong-Su Kim（Hanyang University, Department of Electronic Engineering）、Donghyun Kim（Hanyang University, Department of Electronic Engineering）、Joon-Hyuk Chang（Hanyang University, Department of Electronic Engineering）

💡 **毒舌点评**

**亮点**：论文系统性地将“物理规律”（如TDOA仅依赖麦克风相对位置）转化为可学习的网络模块（如rMPE和LNuDFT），这种“物理信息引导”的思路比纯粹的黑盒数据驱动更优雅，也显著提升了对未见阵列的泛化能力。**短板**：提出的框架在极端密集网格（如D>4096）下，于真实数据集上的性能收益不明显甚至略有下降，这暗示了模型在处理微小扰动时的稳定性或表示空间的极限可能仍有探索空间。

🔗 **开源详情**

- **代码**：提供公开GitHub仓库链接（https://github.com/BaekMS/Audio-Geometry-Grid_Representation-Learning）。
- **模型权重**：论文中未明确提及是否公开预训练模型权重。
- **数据集**：使用了公开的LOCATA挑战赛数据集（NAO robot和Eigenmike录音），以及合成的数据集。合成过程详细描述在附录中。
- **Demo**：未提及。
- **复现材料**：非常充分。包括完整的模型架构细节（附录A.3， A.4）、损失函数公式、训练策略（MSGL、DSCL）、所有超参数设置、合成数据生成算法（算法3）、评估指标定义、以及用于复现的核心代码链接。
- **论文中引用的开源项目**：使用了`gpuRIR`进行房间冲激响应仿真，`fvcore`用于计算复杂度，`py-webrtcvad`用于生成语音活动检测标签，以及公开的`LibriSpeech`、`MS-SNSD`、`TIMIT`、`ESC-50`等数据集。

📌 **核心摘要**

1. **问题**：现有的深度神经网络声源定位（SSL）方法严重依赖于固定的麦克风阵列（MA）几何结构和预定义的到达方向（DOA）网格，导致其泛化性差，无法适应未见过的阵列或灵活的网格需求。
2. **方法核心**：提出了音频-几何-网格表示学习（AGG-RL）框架。该框架包含两个网络：AuGeonet（从音频和阵列几何中提取音频-几何表示）和Gridnet（从候选DOA网格中提取网格表示）。两者在共享的潜在空间中通过内积对齐，生成概率空间谱。
3. **创新点**：a) 引入**可学习非均匀离散傅里叶变换（LNuDFT）**，使模型能自适应地分配频率bin，重点关注物理信息丰富的相位区域（如图2所示）；b) 设计**相对麦克风位置编码（rMPE）**，将麦克风坐标相对于参考通道进行编码，与TDOA的物理特性一致；c) 通过表示学习对齐，实现了**网格灵活**和**几何不变**的SSL，无需重新训练即可适应新阵列和新网格。
4. **主要实验结果**：在LOCATA等真实与合成数据集上，AGG-RL在未见阵列（如Eigenmike）和动态阵列配置上取得了最佳性能。如表3所示，在Eigenmike数据集上，该方法MAE为11.24°，ACC10为72.17%，显著优于基线Unet（14.89°/65.82%）和GI-DOAEnet（93.61°/0.00%）。消融实验（表3）证实了LNuDFT和rMPE的有效性。
5. **实际意义**：该方法为构建能适应各种硬件（不同麦克风阵列）和任务需求（不同定位精度/网格）的“通用”声源定位系统提供了新思路，在机器人、自动驾驶、AR/VR等多领域有应用潜力。
6. **主要局限性**：a) 计算复杂度：虽然AuGeonet部分复杂度随通道数线性增长，但Gridnet部分随网格点数D线性增长，D很大时可能带来额外开销（表5）。b) 性能边界：在真实数据上，当D超过2048时性能提升不明显甚至略有下降（表4），表明模型对过度密集网格的表示能力或鲁棒性存在边界。

---

### 63. [LadderSym: A Multimodal Interleaved Transformer for Music Practice Error Detection](/audio-paper-digest-blog/posts/2026-05-04-laddersym-a-multimodal-interleaved-transformer)

🔥 **8.0/10** | 前25% | #音乐理解 | #多模态模型 | #端到端 #音乐信息检索

👥 **作者与机构**

- 第一作者：Benjamin Shiue-Hal Chou（Purdue University）
- 通讯作者：未说明（论文未明确指定，但联系邮箱主要为{作者名}@purdue.edu，可能为共同指导）
- 作者列表：
  - Benjamin Shiue-Hal Chou（Purdue University）
  - Purvish Jajal（Purdue University）
  - Nick John Eliopoulos（Purdue University）
  - James C. Davis（Purdue University）
  - George K. Thiruvathukal（Loyola University Chicago）
  - Kristen Yeon-Ji Yun（Purdue University）
  - Yung-Hsiang Lu（Purdue University）

💡 **毒舌点评**

**亮点**：论文将“音乐练习错误检测”这一序列比较问题，巧妙地转化为一个多模态编码与解码任务，并且通过架构设计（Ladder编码器）和输入表示（符号提示）两个层面，针对性地解决了之前方法在对齐能力和输入歧义上的痛点，设计思路清晰且有效。**短板**：符号提示策略在更简单的CocoChorales-E数据集上（尤其对Extra Note）带来的增益有限，甚至略有下降，表明这种多模态融合的收益可能与任务复杂度强相关；此外，模型对大幅节奏变化和复杂和弦遮蔽的处理仍有明显局限。

🔗 **开源详情**

- **代码**：论文提供了代码仓库链接：https://github.com/ben2002chou/LadderSYM。
- **模型权重**：论文中未明确提及是否公开预训练模型权重。代码仓库可能包含。
- **数据集**：使用了两个公开的合成数据集（MAESTRO-E， CocoChorales-E）。此外，论文作者新收集并发布了包含真实初学者错误的评估数据集，可通过论文或代码仓库获取详情。
- **Demo**：论文提到提供了演示示例页面（“our demo page”），但未给出具体URL。
- **复现材料**：论文在附录中提供了完整的训练细节（Table 7）、超参数设置、评估指标定义、种子管理策略（A.12节）以及模型输入/输出的详细说明（A.2-A.3节），复现材料非常充分。
- **论文中引用的开源项目**：主要基于MT3（音乐转录模型）、AST（音频频谱Transformer）、T5（文本到文本转换Transformer）以及前作Polytune的代码进行开发。具体依赖了EfficientTTMs（MIT许可）和Polytune（BSD 3-Clause，非商业）的部分代码。
- 论文中未提及更广泛的开源计划（如部署工具、API等）。

📌 **核心摘要**

本文针对音乐练习错误检测任务中现有方法存在的两大局限：后期（late fusion）设计限制了音频流间的细粒度对齐能力，以及仅用音频表示乐谱会引入频率歧义（尤其在同时演奏多个音符时），提出了名为LadderSym的新方法。该方法核心包含两部分：1）一个名为Ladder的交错Transformer编码器，它采用双流结构，并在每层之前交替进行跨流对齐（通过交叉注意力）和独立的模态内特征提取，以实现灵活的对齐和专门化表示学习；2）将乐谱的符号化表示（符号token序列）作为提示（prompt）输入给T5解码器，与编码器输出的音频上下文结合，以提供更明确的参考信息。在MAESTRO-E和CocoChorales-E两个合成数据集上的实验表明，LadderSym显著超越了前SOTA（Polytune）。在挑战性的MAESTRO-E数据集上，Missed Note的F1分数从26.8%提升至56.3%（翻倍以上），Extra Note的F1从72.0%提升至86.4%。在新收集的真实初学者演奏数据集上，LadderSym也表现出更好的泛化能力。该工作的实际意义在于为音乐学习者提供更精确的反馈工具，并为序列比较任务（如强化学习评估、技能评估）提供了可借鉴的架构设计原则。主要局限性包括：密集和弦声学遮蔽下的漏音检测仍具挑战；音符跨越上下文窗口边界时可能产生错误；以及模型不适用于处理与原谱节奏差异过大的演奏。

---

### 64. [From Natural Alignment to Conditional Controllability in Multimodal Dialogue](/audio-paper-digest-blog/posts/2026-05-04-from-natural-alignment-to-conditional)

🔥 **8.0/10** | 前25% | #语音合成 | #多任务学习 | #多模态模型 #预训练

👥 **作者与机构**

- 第一作者：Zeyu Jin（清华大学计算机科学与技术系）（论文标注共同贡献）
- 通讯作者：Xiaoyu Qin（清华大学计算机科学与技术系）、Jia Jia（清华大学计算机科学与技术系/BNRist）
- 作者列表：
  - Zeyu Jin（清华大学计算机科学与技术系）
  - Songtao Zhou（清华大学计算机科学与技术系）（共同贡献）
  - Haoyu Wang（清华大学计算机科学与技术系）
  - Minghao Tian（Rice University）
  - Kaifeng Yun（清华大学深圳国际研究生院）
  - Zhuo Chen（字节跳动）
  - Xiaoyu Qin（清华大学计算机科学与技术系）
  - Jia Jia（清华大学计算机科学与技术系/BNRist）

💡 **毒舌点评**

论文在数据集构建和任务定义上表现出色，其提出的数据整理管道和“情感三元组”标注范式为可控多模态对话研究提供了坚实基础，但核心模型创新有限，且部分实验局限于验证数据集有效性，未能充分探索更先进的生成架构。

🔗 **开源详情**

- **代码**：论文在摘要和结论中明确提到将公开代码和数据整理管道，GitHub仓库链接已在论文中给出（https://github.com/jessyjinzy/MM-Dia）。
- **模型权重**：论文未提及将公开其微调后的模型（如Higgs-Audio-V2-SFT）权重。
- **数据集**：MM-DIA和MM-DIA-BENCH已承诺开源，但具体获取方式需联系作者或等待发布。
- **Demo**：论文提到了一个演示页面（https://mmdiaiclr26.github.io/mmdiaiclr26/），展示了不同控制变量下的语音合成样本。
- **复现材料**：论文在“Reproducibility Statement”中承诺提供数据集、代码、模型配置、训练过程和评估协议的细节。附录包含了管道实现的部分算法和消融实验，但完整的训练超参数和硬件信息缺失。
- **引用的开源项目**：论文中提到了多个依赖的开源工具和模型，包括：Higgs-Audio-V2 (Boson AI)、Dia-1.6B (Nari Labs)、Gemini-2.5系列、Qwen2.5-VL、InsightFace工具包、多个基线模型（HarmoniVox, FLOAT, MultiTalk, Sonic, Wan-2.2, HunyuanVideo）以及UTMOS、WER等评估工具。

📌 **核心摘要**

这篇论文旨在解决可控多模态对话生成中面临的三个核心挑战：高质量原生多模态对话数据稀缺、交互级语义的可扩展标注方法缺失，以及系统性评估基准不足。
其核心方法是构建了一个从电影和电视剧中自动提取、标注对话的“数据整理管道”，并据此创建了大规模多模态对话数据集 **MM-DIA**（360+小时，54,700段对话）。该数据集首次专注于跨模态的对话表达力，提供了句子级和对话级的细粒度交互标注，包括说话人身份、非语言声音和两种表达力标注范式：“情感三元组”（关系、互动模式、情感基调）和“自由描述”。同时，论文提出了 **MM-DIA-BENCH** 作为评估跨模态风格一致性的基准。
论文正式定义了多模态对话生成（MDG）任务，并将其应用于三个具体任务：1）**风格可控对话语音合成**（显式控制），2）**视觉条件对话语音合成**（隐式控制），3）**语音驱动对话视频生成**（隐式控制）。
主要实验结果显示：在MM-DIA上微调预训练模型（如Higgs-Audio-V2）后，风格可控对话语音合成任务在可懂度（WER从31.25降至4.45）和指令遵循度上显著提升。然而，在MM-DIA-BENCH上的测试表明，现有模型在维持隐式跨模态风格一致性方面存在明显不足，特别是在音视频对齐和对话级表达力方面。
这项工作的实际意义在于为可控、富有表现力的多模态对话生成研究建立了首个大规模数据集、统一任务框架和评估基准，指明了未来需要加强跨模态语义对齐和长程推理的研究方向。主要局限性是MDG任务仍处于初步定义阶段，且现有基线模型在隐式控制任务上表现不佳，表明这是一个开放且具挑战性的领域。

---

### 65. [Hierarchical Semantic-Acoustic Modeling via Semi-Discrete Residual Representations for Expressive End-to-End Speech Synthesis](/audio-paper-digest-blog/posts/2026-05-04-hierarchical-semantic-acoustic-modeling-via-semi)

🔥 **8.0/10** | 前25% | #语音合成 | #自回归模型 | #流匹配 #预训练

👥 **作者与机构**

-   第一作者：Yixuan Zhou（清华大学深圳国际研究生院）
-   通讯作者：Zhiyong Wu（清华大学深圳国际研究生院）
-   作者列表：Yixuan Zhou（清华大学深圳国际研究生院），Guoyang Zeng（ModelBest Inc），Xin Liu（ModelBest Inc），Xiang Li（清华大学深圳国际研究生院），Renjie Yu（清华大学深圳国际研究生院），Ziyang Wang（ModelBest Inc），Runchuan Ye（清华大学深圳国际研究生院），Weiyue Sun（ModelBest Inc），Jiancheng Gui（ModelBest Inc），Kehan Li（清华大学深圳国际研究生院），Zhiyong Wu（清华大学深圳国际研究生院），Zhiyuan Liu（清华大学计算机科学与技术系）

💡 **毒舌点评**

**亮点**：论文提出的“半离散残差表示”框架设计精巧，通过一个可微的量化瓶颈在单一端到端模型中优雅地实现了语义和声学的隐式解耦，有效规避了传统连续模型的误差累积和离散模型的信息损失，堪称“鱼与熊掌兼得”的架构设计典范。**短板**：模型的高性能（VoxCPM）严重依赖海量内部数据（1百万小时），而公开验证（VoxCPM-Emilia）的性能与SOTA仍有差距，这使得其宣称的“架构优越性”在多大程度上可迁移到受限数据场景存疑，也削弱了其作为普适解决方案的说服力。

🔗 **开源详情**

-   **代码**：论文提供了推理代码链接 `codes.zip`，并承诺未来发布完整代码。
-   **模型权重**：论文提及将发布代码和模型权重，但具体平台和链接未在文中说明。
-   **数据集**：核心训练数据（1百万小时）为内部数据集，未公开。对比实验使用的Emilia数据集是公开的。
-   **Demo**：提供了在线演示页面链接：`https://voxcpm.github.io/VoxCPM-demopage/`。
-   **复现材料**：论文提供了极其详细的模型架构（表5）、训练配置（表6）、超参数设置、评估细节（附录H）和复现声明（附录B）。
-   **论文中引用的开源项目**：依赖了MiniCPM-4作为TSLM的初始化基础；AudioVAE架构灵感来自DAC。

---

### 66. [Discovering and Steering Interpretable Concepts in Large Generative Music Models](/audio-paper-digest-blog/posts/2026-05-04-discovering-and-steering-interpretable-concepts)

🔥 **8.0/10** | 前25% | #音乐生成 | #稀疏自编码器 | #预训练 #可解释性

👥 **作者与机构**

- 第一作者：Nikhil Singh (Dartmouth College)，Manuel Cherep (MIT) —— 共同第一作者
- 通讯作者：未明确标注，但Pattie Maes (MIT) 可能为项目负责人
- 作者列表：Nikhil Singh (Dartmouth College)，Manuel Cherep (MIT)，Pattie Maes (MIT)

💡 **毒舌点评**

**亮点**：首次将稀疏自编码器（SAE）技术从大语言模型（LLM）的可解释性研究成功迁移到音频/音乐生成领域，并构建了端到端的自动化发现、标注与验证流水线，方法论上具有清晰的开创性和系统性。  
**短板**：对于所发现的“概念”的边界（monosemanticity）控制和负样本分析不够深入，且部分自动化标注和评估高度依赖外部模型（如Gemini、CLAP），可能引入偏置；概念引导生成的成功率（约15-35%）虽证明可行性，但作为“强干预”实验，其鲁棒性和泛化性仍有很大提升空间。

🔗 **开源详情**

- **代码**：论文中未提供明确的代码仓库链接。
- **模型权重**：实验使用了预训练的**MusicGen**模型（Large和Small版本），以及**Essentia**和**CLAP**的预训练模型。论文训练的**SAE权重**未提及是否公开。
- **数据集**：使用了公开的**MusicSet**数据集。
- **Demo**：论文中未提及在线演示。
- **复现材料**：附录提供了部分技术细节（如Gemini的提示词和响应格式、Essentia使用的标签模型列表、人类验证指南），但核心的SAE训练超参数（学习率、优化器等）未详细说明。
- **依赖的开源项目**：论文明确依赖并提及了**MusicGen**、**Essentia**、**CLAP**、**Gemini API**等开源模型或工具。

📌 **核心摘要**

这篇论文旨在解决大型自回归音乐生成模型（如MusicGen）内部表示不透明、难以与人类音乐概念对齐的问题。核心方法是利用**稀疏自编码器（SAE）** 对Transformer残差流的激活进行重构，从中提取出稀疏、可解释的潜在特征（概念），并构建了一套**自动化标注与评估流程**（结合多模态大语言模型和预训练音频分类器）来大规模识别这些概念。与已有工作主要关注“探测已知概念”不同，本文提出了一个**无监督的概念发现流水线**，能够发现模型隐式学习的、甚至超越现有理论描述的音乐规律。实验结果表明，该方法在两个不同规模的MusicGen模型上都能发现**熟悉的音乐概念**（如鼓点、流派、乐器音色）和**新兴的、难以用现有术语定义的规律**（如特定的电子音效、音乐织体单元）。关键量化结果包括：在MusicGen-Large上，过滤后可保留数千个可解释特征；自动化标注质量通过CLAP分数进行评估（详见图4）；通过引入特征进行引导生成，15%-35%的特征能提升生成音频与目标概念的CLAP对齐分数（表2），并且人类听辨实验（66/100的正确率）证实了引导效果的可感知性。该工作为理解生成模型如何组织音乐信息提供了实证工具，并指向了可控生成的可能性。

---

### 67. [NExT-OMNI: Towards Any-to-Any Omnimodal Foundation Models with Discrete Flow Matching](/audio-paper-digest-blog/posts/2026-05-04-next-omni-towards-any-to-any-omnimodal-foundation)

🔥 **8.0/10** | 前25% | #多模态模型 | #流匹配 | #跨模态检索 #语音对话系统

👥 **作者与机构**

- 第一作者：Run Luo (中国科学院深圳先进技术研究院、中国科学院大学)
- 通讯作者：未明确说明（论文中未以“Corresponding author”标注单独作者，但提供了多个联系邮箱）
- 作者列表：
    - Run Luo (中国科学院深圳先进技术研究院， 中国科学院大学)
    - Xiaobo Xia (新加坡国立大学， 中国科学技术大学) *
    - Lu Wang (Rtizz-AI)
    - Longze Chen (中国科学院深圳先进技术研究院， 中国科学院大学)
    - Renke Shan (Rtizz-AI)
    - Jing Luo (中国科学院深圳先进技术研究院， 中国科学院大学)
    - Min Yang (中国科学院深圳先进技术研究院， 深圳大学) *
    - Tat-Seng Chua (新加坡国立大学)
    * 标注的作者在作者列表中被提及为通讯作者。

💡 **毒舌点评**

亮点在于论文提出了一个干净利落的统一框架（DFM），避免了自回归范式在理解/生成任务间的先天矛盾，并且在跨模态检索这类需要深度融合表征的任务上展现了架构优势。短板在于其核心生成能力（如文本生成图像）的绝对质量与FLUX等专用模型的差距可能被“统一”的光环所掩盖，且论文中“动态长度生成策略”等优化的具体效果有待更细粒度的分析。

🔗 **开源详情**

- **代码**：提供GitHub仓库链接：https://github.com/ritzz-ai/Next-OMNI。
- **模型权重**：论文提到为开源模型，并提供了模型检查点。
- **数据集**：论文详细列出了训练所用的公开和合成数据集（表8），并说明了数据构建过程。部分专有数据未公开。
- **Demo**：论文中未提及在线演示链接。
- **复现材料**：提供了极其详细的训练三阶段（PT, CPT, SFT）的配方，包括数据规模、图像/音频处理设置、学习率、模型初始化等关键信息。附录中对模型设计（编码器、解码头）、数据合成和额外实现细节有补充说明。
- **引用的开源项目**：论文明确依赖并提及了Qwen2.5系列、CLIP-ViT、Whisper、FLUX、VQVAE、UniTok、WavTokenizer、GradNorm等多个开源模型和工具。
- **总结**：论文在开源方面做得非常出色，为该工作的复现和后续研究提供了坚实基础。

📌 **核心摘要**

本文旨在解决现有自回归多模态模型在平衡理解与生成能力方面的内在局限，以及混合/解耦设计带来的冗余和适用性窄的问题。其核心是提出NExT-OMNI，一个基于离散流匹配（DFM）范式的开源全模态基础模型。与依赖AR的解耦模型不同，NExT-OMNI采用度量诱导概率路径和动力学最优速度，通过单一的双向注意力骨架，实现了文本、图像、视频、音频间任意到任意的生成与理解。模型在统一表征建模阶段引入重建损失，以保留细粒度信息，并设计了动态生成策略和自适应缓存以提升推理效率。在多个基准上，NExT-OMNI在全模态理解（平均分39.7 vs. OpenOmni 36.5）、多轮视觉交互（OpenING平均55.0）、语音交互（Spoken QA）以及跨模态检索（平均32.9）任务上均表现出竞争力或优于现有统一模型。实验验证了DFM架构在统一建模上的潜力，尤其是在需要深度特征融合的检索任务中。其主要局限性是目前模型规模仅为7B，且受限于资源，未能在更大规模上验证其性能上限。论文为构建下一代统一多模态基础模型提供了新的范式参考。

---

### 68. [TangoFlux: Super Fast and Faithful Text to Audio Generation with Flow Matching and Clap-Ranked Preference Optimization](/audio-paper-digest-blog/posts/2026-05-04-tangoflux-super-fast-and-faithful-text-to-audio)

🔥 **8.0/10** | 前25% | #音频生成 | #流匹配 | #偏好优化 #扩散模型

👥 **作者与机构**

- 第一作者：Chia-Yu Hung (Nanyang Technological University, NTU)
- 通讯作者：Navonil Majumder (NTU)， Soujanya Poria (NTU)
- 作者列表：Chia-Yu Hung (NTU), Navonil Majumder (NTU), Zhifeng Kong (NVIDIA), Ambuj Mehrish (Ca’ Foscari University of Venice), Amir Ali Bagherzadeh (Lambda Labs), Chuan Li (Lambda Labs), Rafael Valle (NVIDIA), Bryan Catanzaro (NVIDIA), Soujanya Poria (NTU)

💡 **毒舌点评**

这篇论文巧妙地将CLAP作为“裁判”来解决音频生成对齐中缺乏自动评价标准的痛点，提出的CRPO“自弈”优化思路确实让模型性能在迭代中不断提升，效果立竿见影。但依赖CLAP这个“裁判”本身的偏好（可能偏向特定音频风格或描述理解能力）进行优化，是否会让模型学会“讨好裁判”而非真正理解复杂、抽象的文本描述？这是CRPO框架需要面对的更深层问题。

🔗 **开源详情**

- **代码**：论文明确承诺将公开代码仓库链接（https://tangoflux.github.io/ 提供了项目主页和示例），但具体代码链接在论文提交时未提供，需待正式发布。
- **模型权重**：论文明确承诺将开源模型权重。
- **数据集**：训练所用数据集（WavCaps， AudioCaps）均为公开数据集。CRPO构建的偏好数据集由模型动态生成，非固定公开。
- **Demo**：提供了在线演示网站（https://tangoflux.github.io/），包含模型生成的音频样本对比。
- **复现材料**：提供了极其详尽的附录，包括：完整的训练超参数（优化器、学习率、批次大小、轮数）、所有评估指标的实现细节、人类评估的指南和界面、复杂评估提示的生成模板、不同设置（CFG， N采样数）的消融实验结果等。
- **论文中引用的开源项目**：依赖的主要开源组件包括：**FLAN-T5**（文本编码器）、**CLAP**（奖励模型， 来自 `lukewys/laion_clap`）、**Stable Audio Open VAE**（音频编解码器）、**FLUX** 模型架构设计。

---

### 69. [Syncphony: Synchronized Audio-to-Video Generation with Diffusion Transformers](/audio-paper-digest-blog/posts/2026-05-04-syncphony-synchronized-audio-to-video-generation)

🔥 **8.0/10** | 前25% | #音视频 | #扩散模型 | #流匹配 #跨模态

👥 **作者与机构**

- 第一作者：Jibin Song (延世大学人工智能系， CineLingo)
- 通讯作者：Jibin Song (邮箱：sjbpsh1@yonsei.ac.kr， jibinsong@cinelingo-labs.com)
- 作者列表：Jibin Song (延世大学， CineLingo)、Mingi Kwon (延世大学， CineLingo)、Jaeseok Jeong (延世大学， CineLingo)、Youngjung Uh (延世大学， CineLingo)

💡 **毒舌点评**

**亮点**：本文没有空谈同步的重要性，而是针对“MSE损失对动态区域监督不足”和“条件引导策略”这两个关键痛点，分别提出了动作感知损失（Loss层面）和音频同步引导（推理层面）的成套解决方案，并辅以新的评估指标CycleSync，形成了一个完整、闭环的技术方案，实验也证明了有效性。
**短板**：新提出的CycleSync指标本质上是“视频->音频->对比”的循环测试，其准确性严重依赖于所使用的预训练V2A模型的保真度和泛化能力，这给评估引入了一个不透明的、外部的“黑箱”偏差，使得绝对分数的解读需要更加谨慎。

🔗 **开源详情**

- **代码**：论文明确承诺将发布代码，但文中未提供具体的GitHub或其他代码仓库链接。
- **模型权重**：论文明确承诺将发布训练好的模型，但未提供具体链接。
- **数据集**：使用的是公开数据集AVSync15和TheGreatestHits，论文中未提及是否发布新的数据集。
- **Demo**：论文未提及提供在线演示。
- **复现材料**：提供了详细的实现细节，包括模型架构选择、损失函数公式、训练硬件、训练步数、关键超参数（如λ, w, δ, 批大小虽未明确但其他信息详尽），以及用户研究设置。这些信息充足，具备较高的可复现性。
- **论文中引用的开源项目**：
    - 视频生成骨干：Pyramid Flow (Jin et al., 2024a)
    - 音频编码器：DenseAV (Hamilton et al., 2024)
    - 文本编码器：CLIP (Radford et al., 2021)
    - V2A模型（用于CycleSync评估）：V-AURA (Viertola et al., 2025)
    - 其他对比基线：TempoTokens (Yariv et al., 2023), AVSyncD (Zhang et al., 2024)

📌 **核心摘要**

本文致力于解决音频到视频（A2V）生成中，现有模型难以实现音频与视频运动之间精细时间同步的问题。论文提出了Syncphony，一个基于预训练扩散Transformer（DiT）骨干的生成框架。其方法核心是在DiT架构的后期层中引入音频交叉注意力，并通过两个关键技术提升同步性能：1) **动作感知损失**，在训练时对高运动区域施加更大的损失权重，引导模型更关注与音频事件因果相关的运动；2) **音频同步引导**，在推理时通过一个禁用了音频层的“异步模型”来引导完整模型，放大音频信号对运动的影响而不损害视觉质量。与已有的间接映射（如调制注意力权重、投影到文本空间）或从零构建时序层的方法不同，本文直接、精细地注入音频特征，并利用强大的预训练视频骨干保证生成质量。为评估同步性，论文还提出了新指标**CycleSync**，通过视频重建音频来间接衡量生成视频是否保留了原始音频的时序结构。在AVSync15和TheGreatestHits数据集上的实验表明，Syncphony在同步准确性（CycleSync得分更高）和视觉质量（FVD/FID更低）上均优于现有方法。该工作的实际意义在于为高质量、高同步性的视频生成提供了有效方案，但其局限性包括：动作感知损失的权重基于真值运动幅度，未显式区分音频相关与无关运动；CycleSync指标的可靠性受底层V2A模型影响；生成的视频分辨率（380×640）和时长（5秒）仍有提升空间。

---

### 70. [Pay Attention to CTC: Fast and Robust Pseudo-Labelling for Unified Speech Recognition](/audio-paper-digest-blog/posts/2026-05-04-pay-attention-to-ctc-fast-and-robust-pseudo)

🔥 **8.0/10** | 前10% | #语音识别 | #CTC #注意力机制 | #CTC #注意力机制

👥 **作者与机构**

- 第一作者：Alexandros Haliassos（NatWest AI Research, Imperial College London）
- 通讯作者：未说明
- 作者列表：Alexandros Haliassos（NatWest AI Research, Imperial College London）， Rodrigo Mira（NatWest AI Research）， Stavros Petridis（NatWest AI Research, Imperial College London）

💡 **毒舌点评**

这篇论文通过巧妙地将CTC的快速鲁棒解码与Teacher Forcing结合，一举解决了原USR框架中自回归伪标签生成缓慢且易受分布偏移影响的痛点，同时通过混合采样策略平衡了训练与测试的差异，是典型的“工程智慧”推动方法进步的案例；但其核心贡献更偏向于训练策略的优化而非模型架构的根本性突破，且混合采样策略带来的增益在消融实验中并不总是显著。

🔗 **开源详情**

- **代码**：论文提及代码仓库链接为 `https://github.com/ahaliassos/usr`。
- **模型权重**：未明确提及是否公开USR 2.0的预训练或微调模型权重。
- **数据集**：论文使用了多个公开数据集（LRS3, LRS2, VoxCeleb2, AVSpeech, LibriSpeech, WildVSR），并说明了其获取与使用方式。未提及新发布数据集。
- **Demo**：未提及。
- **复现材料**：论文附录提供了详细的实验设置（数据集、预处理、模型变体、训练超参数），并指出训练配置、数据集准备和评估代码包含在补充材料中。
- **引用的开源项目**：AV-HuBERT, BRAVEn, USR（原始版本），ESPnet。

📌 **核心摘要**

1. **问题**：现有的统一语音识别（USR）框架通过自回归解码生成注意力分支的伪标签，导致训练效率低下（自回归是瓶颈），且CTC和注意力分支的解耦监督使其在分布外数据（如长语音、噪声、跨域数据）上鲁棒性差，容易因自回归错误累积而性能下降。
2. **方法核心**：提出USR 2.0，其核心是**CTC驱动的Teacher Forcing**：教师模型用贪心CTC解码生成伪标签，然后将其作为解码器输入，通过单次前向传播并行生成注意力伪标签，避免了自回归解码。这使得CTC和注意力伪标签长度对齐，学生解码器可以同时预测两者，从而耦合两个分支。此外，为缓解训练-测试不匹配（训练时用CTC输入，推理时自回归），引入**混合采样**策略，在训练时以50%概率交替使用标准AR模式和CTC驱动模式。
3. **与已有方法相比新在哪里**：与USR相比，USR 2.0将伪标签生成从耗时的逐token自回归解码变为一次性的Teacher Forcing并行解码，速度大幅提升。同时，它改变了监督范式：在CTC驱动模式下，解码器同时被CTC和注意力伪标签监督，使注意力分支获得了CTC的鲁棒性。在AR模式下，CTC分支则被两种伪标签监督，实现了信息互补。
4. **主要实验结果**：
    - **训练效率**：训练时间减少约2倍（见图5）。
    - **鲁棒性**：在长语音（VoxCeleb2）上，USR 2.0的WER显著低于USR等基线（见图3）；在噪声环境（LRS3加噪）和多个OOD数据集（LibriSpeech, WildVSR, AVSpeech）上均大幅超越原始USR和自监督基线（见表1，表3）。
    - **性能**：在LRS3、LRS2和WildVSR数据集上，USR 2.0（Huge模型）使用单一统一模型在ASR、VSR和AVSR任务上均达到或超越当时的最优水平（SOTA）。关键数据如下表所示：

| 数据集 | 方法 | VSR WER (%) | ASR WER (%) | AVSR WER (%) |
| :--- | :--- | :--- | :--- | :--- |
| **LRS3 (Base, Low-res)** | USR | 36.0 | 3.2 | 3.0 |
| | **USR 2.0** | **36.2** | **3.0** | **2.9** |
| **LRS3 (Large, High-res)** | USR | 26.9 | 2.4 | 2.4 |
| | **USR 2.0** | **23.7** | **2.3** | **2.2** |
| **LRS3 (Huge)** | **USR 2.0** | **17.6** | **0.9** | **0.8** |
| **LRS2 (Large)** | USR | 22.3 | 1.2 | 1.1 |
| | **USR 2.0** | **21.5** | **1.3** | **1.0** |
| **WildVSR (Large)** | USR | 46.4 | - | - |
| | **USR 2.0** | **38.5** | - | - |

5. **实际意义**：USR 2.0显著提升了统一语音识别模型的训练效率与在复杂真实场景下的鲁棒性，使其更实用。单一模型处理ASR/VSR/AVSR任务降低了部署复杂度。该训练范式（CTC驱动的Teacher Forcing与混合采样）也可推广至其他序列到序列的自训练任务。
6. **主要局限性**：
    - 相比完全监督的微调方法，其整体训练时长仍然较长。
    - 对于ASR和AVSR等本身性能已很高的任务，性能提升更多依赖无标签数据质量，而非数量，当前使用的贪心解码伪标签可能限制其上限。
    - CTC驱动的Teacher Forcing生成的注意力伪标签在序列层面可能缺乏全局连贯性，但这在自训练框架下被证明是可接受的。

---

### 71. [AVERE: Improving Audiovisual Emotion Reasoning with Preference Optimization](/audio-paper-digest-blog/posts/2026-05-04-avere-improving-audiovisual-emotion-reasoning)

🔥 **8.0/10** | 前25% | #语音情感识别 | #偏好优化 | #多模态模型 #基准测试

👥 **作者与机构**

- 第一作者：Ashutosh Chaubey（南加州大学创新技术研究所）
- 通讯作者：Mohammad Soleymani（南加州大学创新技术研究所）
- 作者列表：Ashutosh Chaubey（南加州大学创新技术研究所）、Jiacheng Pang（南加州大学创新技术研究所）、Maksim Siniukov（南加州大学创新技术研究所）、Mohammad Soleymani（南加州大学创新技术研究所）

💡 **毒舌点评**

本文提出的 EmoReAlM 基准测试系统性地揭示了现有多模态模型在情感推理上“瞎扯淡”的两种主要模式（虚假关联与幻觉），其 AVEm-DPO 优化方法针对性地解决了问题，并在零样本设定下取得了显著提升，是一项扎实且完整的工作。短板在于，其优化方法和基准测试的构建高度依赖 GPT-4o 等大模型，虽然进行了人工验证，但这使得整个工作在一定程度上建立在“模型评价模型”的基础上，其上限可能受制于标注模型自身的理解能力，且引入了难以完全消除的偏差。

📌 **核心摘要**

1.  **要解决的问题**：现有多模态大语言模型在进行音频视觉情感推理时，存在两大核心缺陷：一是将情绪错误地归因于无关的音视频线索（推理错误），二是为了合理化情绪而“编造”出不存在的音视频线索（感知错误/幻觉）。后者主要由语言模型的文本先验偏差导致。
2.  **方法核心**：论文提出了一个两阶段方案。首先，构建了名为 **EmoReAlM** 的专用基准测试（包含4000个人工验证的多选题），用于系统评估模型在关联、一致性及幻觉等方面的表现。其次，提出了 **AVEm-DPO** 技术，这是一种直接偏好优化方法，通过构建两种偏好对来对齐模型响应：a) 基于提示的多模态输入偏好（Prompt-based Modality Preference），确保模型关注正确的模态；b) 基于情感的响应偏好（Emotion-based Response Preference），区分正确、无关和幻觉的响应。此外，引入了 **文本先验去偏（Text Prior Debiasing）** 正则化项，抑制模型仅凭文本线索生成响应。
3.  **与已有方法相比新在哪里**：
    *   **评估**：超越了现有情感推理或幻觉基准，提供了一个标准化、无需外部LLM评估的、专注于音视觉情感理解中特定错误的测试集。
    *   **优化**：在应用 DPO 到多模态领域时，创新性地结合了“基于提示的模态偏好”和“文本先验去偏”，比通用的 Naive-DPO 和 Vista-DPO 更具针对性。
4.  **主要实验结果**：在零样本设定下，AVEm-DPO 显著提升了两个基线模型（Our base, EmotionLLaMA⋆）的性能。在提出的 EmoReAlM 基准上，相对性能提升达 **6-19%**。在现有情感识别数据集（DFEW, RAVDESS, MER2023）和推理数据集（EMER）上也取得了最优或极具竞争力的结果。关键结果对比如下表所示：

| 模型 | EmoReAlM (平均准确率) | DFEW (UAR) | RAVDESS (UAR) | MER2023 (F1) | EMER (Clue) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Our base (基线) | 65.1% | 56.78% | 53.59% | 89.19% | 5.63 |
| + AVEm-DPO | **83.3%** | **58.54%** | **58.66%** | **92.18%** | **6.37** |
| EmotionLLaMA⋆ (基线) | 63.8% | 54.89% | 52.59% | 90.01% | 5.78 |
| + AVEm-DPO | **80.1%** | **57.06%** | **56.21%** | **91.68%** | **6.02** |
| Qwen 2.5 Omni (SOTA对比) | 70.0% | 46.94% | 32.88% | 79.72% | 5.85 |

![图1：现有MLLM在情感推理中的两类错误示例](icassp-img://td682AAuPr/0.png)
![图2：EmoReAlM基准测试包含的各类任务示例](icassp-img://td682AAuPr/1.png)
5.  **实际意义**：该工作为构建可靠、可解释的社会AI代理提供了更精确的评估工具（EmoReAlM）和更有效的训练方法（AVEm-DPO），有助于减少多模态模型在情感理解中的不准确性，提升人机交互的可靠性。
6.  **主要局限性**：1) EmoReAlM 基准测试源于 DFEW 数据集，可能继承其文化偏见；2) 模型在识别“厌恶”等复杂/模糊情绪时表现仍不佳；3) 论文承认在缓解虚假音频线索关联方面仍有改进空间。

---

### 72. [DiffSDA: Unsupervised Diffusion Sequential Disentanglement Across Modalities](/audio-paper-digest-blog/posts/2026-05-04-diffsda-unsupervised-diffusion-sequential)

🔥 **8.0/10** | 前25% | #序列解耦 | #扩散模型 | #自监督学习 #多模态模型

👥 **作者与机构**

- 第一作者：Hedi Zisling (Ben-Gurion University)
- 通讯作者：Omri Azencot (Ben-Gurion University)
- 作者列表：Hedi Zisling (Ben-Gurion University)、Ilan Naiman (Ben-Gurion University)、Nimrod Berman (Ben-Gurion University)、Supasorn Suwajanakorn (VISTEC)、Omri Azencot (Ben-Gurion University)

💡 **毒舌点评**

论文的亮点在于其理论框架的优雅和实验的全面性，首次为序列解耦任务提供了基于扩散模型的统一概率视角，并在多个真实数据集上取得了令人信服的改进。短板在于，模型本质上是逐帧生成的，这可能限制了其对视频时空连贯性的建模能力，论文虽提到此局限，但未提供解决方案；此外，其“模态无关”的通用性虽被强调，但针对音频/语音的架构改动（仅为MLP）可能未能充分利用语音信号的内在结构（如时频相关性）。

🔗 **开源详情**

- **代码**：论文提供了GitHub代码仓库链接：https://github.com/azencot-group/DiffSDA。
- **模型权重**：论文中未明确提及是否公开预训练模型权重。
- **数据集**：论文使用了多个公开数据集（MUG, TaiChi-HD, VoxCeleb, CelebV-HQ, TIMIT, LibriSpeech, PhysioNet, ETTh1, Air Quality），并说明了预处理方式。未创建新数据集。
- **Demo**：论文中未提及在线演示。
- **复现材料**：提供了极其详尽的超参数表（Tab. 6, 7, 8）、网络架构细节、训练算法（Algorithm 1, 2）以及关键组件的消融实验设置，复现信息非常充分。
- **论文中引用的开源项目**：引用了EDM采样器、VQ-VAE（来自Rombach et al., 2022）、人脸检测器（来自Bulat & Tzimiropoulos, 2017）、人体姿态估计器（来自Cao et al., 2017）、VGG-FACE人脸识别框架（来自Serengil & Ozpinar, 2020）等开源工具。

📌 **核心摘要**

1. **要解决什么问题**：论文旨在解决无监督序列解耦（Sequential Disentanglement）问题，即在不使用标签的情况下，将序列数据（如视频、音频、时间序列）分解为静态不变因子（如身份、外观）和动态时变因子（如动作、内容）。现有方法大多基于VAE和GAN，存在优化复杂、损失项多、在真实数据上效果差等挑战。
2. **方法核心是什么**：提出了DiffSDA（Diffusion Sequential Disentanglement Autoencoder），一个基于扩散模型的全新概率框架。其核心是用两个扩散过程建模联合分布：一个处理潜在的静态和动态因子，另一个处理观测数据（序列）对这些因子的依赖。模型通过一个顺序语义编码器提取静态和动态因子，并用一个条件化的随机解码器（基于EDM采样器）进行去噪重构。整个模型仅用一个统一的扩散损失项进行优化。
3. **与已有方法相比新在哪里**：a) **理论新**：首次为序列解耦建立了基于扩散模型的概率建模框架。b) **模型新**：静态与动态因子被建模为相互依赖（Dependent），而非独立，提升了表达能力；损失函数单一，避免了复杂的超参调优。c) **能力新**：实现了真正的模态无关（Modal-agnostic），通过简单替换骨干网络即可处理视频、音频和时间序列；并首次展示了强大的零样本跨数据集解耦迁移能力。
4. **主要实验结果如何**：论文在三大领域（视频、音频、时间序列）的多个基准数据集上进行了评估。关键结果如下表所示：
| 任务/数据集 | 指标 | SPYL (SOTA) | DBSE (SOTA) | Ours (DiffSDA) |
| :--- | :--- | :--- | :--- | :--- |
| **条件交换-视频** | | | | |
| CelebV-HQ (256x256) | AED↓ (静态冻结) | 0.631 | 0.751 | **0.540** |
| | AKD↓ (动态冻结) | 39.16 | 28.69 | **6.932** |
| VoxCeleb (256x256) | AKD↓ (动态冻结) | 4.705 | 10.96 | **2.793** |
| **说话人验证-音频** | | | | |
| TIMIT | Static EER↓ | 3.41% | 3.50% | 4.43% |
| | Dynamic EER↑ | 33.22% | 34.62% | **46.72%** |
| | Dis. Gap↑ | 29.81% | 31.11% | **42.29%** |
| **时间序列预测** | | | | |
| PhysioNet | AUPRC↑ | 0.37 | 0.47 | **0.50** |
| | AUROC↑ | 0.76 | 0.86 | **0.87** |
| ETTh1 | MAE↓ | 12.2 | 11.2 | **9.89** |
| **生成质量** | | | | |
| VoxCeleb | FVD↓ | 582.28 | 1076.44 | **65.23** |
表格显示，DiffSDA在大多数定量指标上显著优于之前的SOTA方法，尤其在生成质量（FVD）和视频动态交换（AKD）上优势巨大。此外，论文首次展示了在未见过的数据集（如用VoxCeleb训练，在MUG上测试）上的零样本解耦交换（如图2、图4所示），并证明了通过对解耦表示进行PCA可进一步发现多个可解释的因子（如性别、肤色，如图2右侧所示）。
5. **实际意义是什么**：该工作为处理序列数据提供了一个统一、强大的无监督解耦框架。其模态无关特性使其可广泛应用于视频分析、语音处理（如说话人匿名化、风格迁移）、时间序列分析等领域。高质量的生成和解耦能力有望促进可控内容生成和可解释表示学习的发展。
6. **主要局限性是什么**：a) **生成效率与质量**：模型本质上是逐帧生成（尽管使用了LDM），可能限制了视频的长期时空连贯性。b) **架构通用性与专用性的权衡**：虽然“模态无关”，但为适应不同模态仅修改骨干网络（如MLP）可能未充分利用语音等模态的先验知识。c) **评估**：在MUG数据集上的传统分类器评估指标上，优势不如其他数据集明显，表明在某些特定设置下，其相对提升可能有限。

---

### 73. [Learnable Fractional Superlets with a Spectro-Temporal Emotion Encoder for Speech Emotion Recognition](/audio-paper-digest-blog/posts/2026-05-04-learnable-fractional-superlets-with-a-spectro)

🔥 **8.0/10** | 前25% | #语音情感识别 | #时频分析 | #端到端

👥 **作者与机构**

- 第一作者：Alaa Nfissi（数据科学实验室（DOT-Lab）， Université TÉLUQ；康考迪亚大学信息系统工程学院（Concordia Institute for Information Systems Engineering））
- 通讯作者：未明确说明
- 作者列表：Alaa Nfissi（数据科学实验室（DOT-Lab）， Université TÉLUQ；康考迪亚大学信息系统工程学院）、Wassim Bouachir（数据科学实验室（DOT-Lab）， Université TÉLUQ）、Nizar Bouguila（康考迪亚大学信息系统工程学院）、Brian Mishara（魁北克大学蒙特利尔分校心理学系；蒙特利尔自杀、伦理问题及临终实践研究与干预中心）

💡 **毒舌点评**

这篇论文的亮点在于它不满足于简单地使用或微调现有前端，而是试图从数学原理上重新定义一个更灵活、可学习的时频分析框架（LFST），体现了扎实的信号处理功底和理论建模能力。然而，其主要短板在于计算效率：论文附录的复杂度分析显示，LFST+STEE在FLOPs、延迟和内存占用上远超STFT、LEAF等基线，这使得“紧凑”的STEE编码器所节省的参数优势在端到端系统中可能被前端的计算成本抵消，削弱了其实用吸引力。

🔗 **开源详情**

- **代码**：论文中明确提供了GitHub代码仓库链接：https://github.com/alaaNfissi/LFST-for-SER。
- **模型权重**：论文中未提及公开的模型权重。
- **数据集**：NSPL-CRISE为私有数据集（经IRB批准使用），论文中未提及公开获取方式。IEMOCAP和EMO-DB为公开数据集，论文中提供了引用。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文提供了详尽的超参数设置（Table 8）、训练细节（Section 4.2）、算法伪代码（Algorithm 1-3）和技术附录，为复现提供了充分信息。
- **论文中引用的开源项目**：论文未明确提及依赖的外部开源工具或模型（除作为基线对比的方法外）。

📌 **核心摘要**

1. **要解决什么问题**：传统语音情感识别（SER）的前端（如STFT、小波变换）存在固定的时间-频率（TF）分辨率权衡，且参数需人工调优，无法自适应任务需求。已有超小波变换（Superlet）局限于整数阶，存在阶跃伪影。
2. **方法核心**：提出可学习分数阶超小波变换（LFST）作为全可微的前端。LFST通过学习每个频带上的分数阶阶数（通过对数域几何平均实现）、单调对数频率网格和频率依赖的基频周期，生成TF幅度图S和相位一致性图κ。结合一个可学习非对称硬阈值（LAHT）模块对S去噪。之后，设计了紧凑的频谱时序情感编码器（STEE），利用深度可分离卷积、混合TF块、自适应FiLM门控和轴向自注意力处理S和κ，输出情感分类。
3. **新在哪里**：相比固定前端或先前非可学习的超小波，LFST首次将超小波的阶数、频率网格和周期全部设为可学习参数，并进行了端到端训练。同时，引入了物理意义明确的相位一致性κ通道和LAHT去噪模块，形成了一个理论完备、可数据驱动的TF表示学习框架。
4. **主要实验结果**：在IEMOCAP（4类）上，准确率87.5%，F1值86.8%；在EMO-DB（7类）上，准确率91.4%，F1值90.4%；在NSPL-CRISE（5类，电话语音）上，准确率76.9%，F1值76.6%。在与相同STEE编码器下的STFT、小波、固定超小波、LEAF前端对比中，LFST在三个数据集上均取得最佳性能。关键消融显示，在NSPL-CRISE上，移除κ导致F1下降9.7个百分点，移除LAHT下降2.5个百分点。
5. **实际意义**：为语音及音频分析提供了一种可学习、可解释、数学基础扎实的TF表示学习前端，可替代传统固定设计，并可能应用于其他需要精细时频分析的场景。
6. **主要局限性**：系统计算成本较高，LFST前端的FLOPs和内存占用远高于STFT等轻量级前端，限制了部署。此外，研究未在更大规模、更多语言的数据集上验证，也未与强大的预训练SSL模型进行直接性能对比。

---

### 74. [EmotionThinker: Prosody-Aware Reinforcement Learning for Explainable Speech Emotion Reasoning](/audio-paper-digest-blog/posts/2026-05-04-emotionthinker-prosody-aware-reinforcement)

🔥 **8.0/10** | 前25% | #语音情感识别 | #强化学习 | #语音大模型 #数据集

👥 **作者与机构**

- 第一作者：Dingdong Wang (香港中文大学、微软)
- 通讯作者：未明确说明
- 作者列表：Dingdong Wang (香港中文大学、微软), Shujie Liu (微软), Tianhua Zhang (未说明), Youjun Chen (未说明), Jinyu Li (微软), Helen Meng (香港中文大学)

💡 **毒舌点评**

亮点在于将RL范式引入语音情感推理，并提出了一个新颖的“渐进式信任感知”奖励机制来约束推理过程，思路清晰且具有启发性。短板在于其核心的“推理质量”高度依赖一个由合成数据训练的奖励模型和GPT-4o的自动评估，这种“用AI评AI”的闭环验证其可靠性和泛化性仍需更多元的外部检验。

🔗 **开源详情**

- **代码**：论文提供了项目主页和GitHub仓库链接（https://github.com/dingdongwang/EmotionThinker）。
- **模型权重**：论文中未明确说明是否会开源EmotionThinker或EmotionThinker-Base的模型权重。
- **数据集**：论文构建了EmotionCoT-35K数据集，并描述了构建方法，预计会公开。
- **Demo**：未提及。
- **复现材料**：在附录中提供了详细的数据构建流程、模型训练细节（SFT和RL）、奖励模型训练数据构造、评估prompt等，复现信息较为充分。
- **依赖的开源项目**：论文明确依赖并提及的开源项目包括：Qwen2.5-Omni（骨干模型）、WhiStress（重音检测）、wav2vec 2.0（说话人属性分类）、GPT-4o API（数据合成与评估）。

📌 **核心摘要**

这篇论文旨在解决当前语音大语言模型（SpeechLLMs）在情感理解上仅进行简单分类、缺乏可解释性推理的问题。论文首次尝试将情感识别（SER）重新定义为一个深度推理问题，并提出**EmotionThinker**框架。该框架的核心方法包括：1）构建了首个面向语音情感推理的Chain-of-Thought数据集**EmotionCoT-35K**；2）通过韵律感知的监督微调（SFT）构建了基础模型**EmotionThinker-Base**，显著提升了模型对音高、能量等韵律线索的感知能力；3）设计了**GRPO-PTR**强化学习策略，该策略在标准规则奖励（结果准确性）基础上，逐步引入并动态调整一个评估推理过程质量的奖励模型。实验表明，EmotionThinker在IEMOCAP、MELD等多个基准上，情感识别平均准确率达**68.89%**，推理质量（由GPT-4o评估的4个维度平均分）达**3.98**，均显著优于对比的16个开源SpeechLLM。该工作的实际意义是推动SER从“是什么”走向“为什么”，为构建可解释、可信赖的情感AI迈出了一步。主要局限性在于其推理监督和评估对大型语言模型的合成数据和自动评分依赖较重。

---

### 75. [OWL : Geometry-Aware Spatial Reasoning for Audio Large Language Models](/audio-paper-digest-blog/posts/2026-05-04-owl-geometry-aware-spatial-reasoning-for-audio)

🔥 **8.0/10** | 前25% | #空间音频 | #音频大模型 | #声源定位 #多任务学习

👥 **作者与机构**

- 第一作者：未说明（论文标注Subrata Biswas*和Mohammad Nur Hossain Khan*为共同第一作者）
- 通讯作者：未说明
- 作者列表：Subrata Biswas*（Worcester Polytechnic Institute电气与计算机工程系）、Mohammad Nur Hossain Khan*（Worcester Polytechnic Institute电气与计算机工程系）、Bashima Islam（Worcester Polytechnic Institute电气与计算机工程系）

💡 **毒舌点评**

这篇论文为音频大模型装上了“空间几何眼睛”，通过“模拟训练-纯音频推理”的巧思和详实的课程学习，确实把空间定位和推理精度提升了一个台阶；但美中不足的是，其所有辉煌战绩（包括新建的百万级数据集）均建立在精心构建的合成世界里，在真实嘈杂、反射复杂的声学环境中，这套“几何内功”的实战效果还有待“出关”检验。

🔗 **开源详情**

- **代码**：论文明确提供代码仓库链接：https://github.com/BASHLab/OWL。表明将在该仓库发布代码。
- **模型权重**：未明确提及是否公开预训练模型权重，但根据“our dataset and code are available”的表述，模型权重可能包含在开源计划内。
- **数据集**：论文明确表示将发布BiDepth数据集（“we construct and release BiDepth”），包含约110万QA对。
- **Demo**：未提及在线演示。
- **复现材料**：附录提供了完整的训练超参数（表10，表11）、特征提取公式（B.1）、模型架构细节（B.2， B.3）和数据集生成细节（A节），复现指引非常充分。
- **论文中引用的开源项目**：依赖SoundSpaces v2.0和Matterport3D进行模拟；音频编码器初始化自AudioMAE；语言模型使用LLaMA-2-7B；投影模块参考Q-Former；微调使用LoRA。

📌 **核心摘要**

1. **要解决什么问题**：现有的音频大语言模型（ALLMs）在空间推理方面能力薄弱，主要依赖粗糙的双耳线索和单步推理，导致在声源方向（DoA）和距离估计上精度不足，且推理过程缺乏可解释性。
2. **方法核心是什么**：提出OWL框架，其核心是创新的几何感知音频编码器**SAGE**。SAGE在训练时利用全景深度图和模拟房间脉冲响应（RIR）作为监督信号，让编码器学会将声学特征与3D空间几何结构对齐，但在推理时只需音频输入。OWL进一步将SAGE与**空间接地的链式思维（CoT）** 推理相结合，支持从感知到多步推理的课程学习。
3. **与已有方法相比新在哪里**：首次将显式的几何监督（通过RIR预测任务）引入音频编码器训练；构建了首个大规模（约110万QA对）耦合双耳音频、RIR和深度图的数据集**BiDepth**用于几何感知训练；引入了针对音频空间推理的多阶段课程学习和CoT监督机制，使模型能生成可解释的推理路径。
4. **主要实验结果如何**：在BiDepth和SpatialSoundQA两个基准上，OWL显著超越了现有方法。**SAGE**相比SOTA（Spatial-AST），在BiDepth数据集上平均角度误差（MAE）降低25.52%，距离错误率（DER）降低31.34%。**OWL**相比BAT，在BiDepth上的空间推理二分类准确率（BA）提升24.9%（77.89% vs. 69.46%），在SpatialSoundQA上的推理平均准确率达79.06%（BAT为76.89%）。OWL在真实世界音频场景分类和声源定位任务上也展现出良好的泛化能力。
5. **实际意义是什么**：该工作推动了音频大模型从“听到什么”向“声音在哪里、如何关联”的空间理解迈进，为构建更接近人类听觉感知的智能系统（如机器人、智能家居助手、助听设备）提供了关键技术组件和评估基准。
6. **主要局限性是什么**：训练和评估严重依赖合成数据（BiDepth），而真实世界声学环境更为复杂多变，模型的鲁棒性有待验证；目前的推理任务限于单轮问答，尚未扩展到多轮对话式空间推理；几何监督依赖于预先生成的深度图和RIR，限制了其在完全未知环境中的应用。

---

### 76. [LayerSync: Self-aligning Intermediate Layers](/audio-paper-digest-blog/posts/2026-05-04-layersync-self-aligning-intermediate-layers)

✅ **7.5/10** | 前25% | #音频生成 | #扩散模型 | #多模态模型 #自监督学习

👥 **作者与机构**

- 第一作者：Yasaman Haghighi（Ecole Polytechnique Fédérale de Lausanne (EPFL)）
- 通讯作者：Alexandre Alahi（Ecole Polytechnique Fédérale de Lausanne (EPFL)）
- 作者列表：Yasaman Haghighi（EPFL）、Bastien van Delft（EPFL）、Mariam Hassan（EPFL）、Alexandre Alahi（EPFL）

💡 **毒舌点评**

这篇论文的亮点在于其极致的“自给自足”哲学——用模型自己最强的层当老师，去教最弱的层，完全抛开了笨重的外部模型（如DINOv2），这个想法既优雅又实用，在多个模态上都跑通了，训练加速效果非常惊人。但短板是，这种“强层指导弱层”的启发式规则选择（比如跳过最后20%的层）感觉有点“经验主义”，理论上的解释（良性循环）目前更多是一种假设，缺乏更深层次的数学证明或机理分析，让人忍不住想问：这种对齐会不会在后期“扼杀”特征多样性，或者让模型过早陷入某种次优的表示空间？

🔗 **开源详情**

- **代码**：论文中提供了代码仓库链接：`https://github.com/vita-epfl/LayerSync.git`。
- **模型权重**：论文中未提及公开预训练模型权重。
- **数据集**：使用的是公开数据集（ImageNet， MTG-Jamendo， HumanML3D， CLEVRER， MixKit），论文中未说明获取方式，但这些是常见公开数据集。
- **Demo**：论文中未提及在线演示。
- **复现材料**：非常充分。论文附录（Section L, M）详细列出了所有实验的超参数设置（表18， 19）、训练硬件、采样器配置、评估指标细节等。算法伪代码（Algorithm 1）也在附录中给出。
- **依赖的开源项目**：主要依赖于SiT（Ma et al., 2024）作为基础模型架构，以及Stable Diffusion的VAE用于图像编码。

📌 **核心摘要**

这篇论文旨在解决使用外部大型预训练模型（如视觉语言模型）来引导扩散模型中间层表示时所带来的计算开销大、数据依赖强、跨模态迁移难的问题。作者提出了一种名为LayerSync的自包含、即插即用的正则化方法。其核心思想是：扩散模型内部不同层学习的特征质量存在异质性，深层的特征语义更丰富。因此，可以利用模型自身的这些深层强特征作为“内在引导信号”，通过最大化浅层弱特征与深层强特征之间的相似度，来正则化和提升浅层特征的学习。与已有的外部引导方法（如REPA）相比，LayerSync完全不依赖额外的模型或数据，计算开销几乎为零；与同属自包含范畴的Dispersive Loss方法相比，它提供了更具方向性的学习信号。实验表明，LayerSync在图像生成任务上可将训练加速超过8.75倍（FID改善23.6%），并在音频、人类动作和视频生成任务上均一致提升了生成质量和训练效率。此外，该方法还改善了模型各层的内部表征质量。其局限性包括：关键的层选择策略依赖启发式规则，且“良性循环”的理论支撑有待加强。

| 任务 | 数据集 | 指标 | 基线 (SiT-XL/2) | + LayerSync | 提升 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 图像生成 | ImageNet 256x256 | FID↓ (80 Epochs) | 17.97 | 11.24 | 37.5% |
| 图像生成 | ImageNet 256x256 | FID↓ (800 Epochs) | 8.99 | 6.87 | 23.6% |
| 音频生成 | MTG-Jamendo | FAD↓ (650 Epochs) | 0.251 | 0.199 | 20.7% |
| 人类动作生成 | HumanML3D | FID↓ (600K Iters) | 0.5206 | 0.4801 | 7.7% |

---

### 77. [A Brain-Inspired Gating Mechanism Unlocks Robust Computation in Spiking Neural Networks](/audio-paper-digest-blog/posts/2026-05-04-a-brain-inspired-gating-mechanism-unlocks-robust)

✅ **7.5/10** | 前25% | #语音识别 | #脉冲神经网络 | #鲁棒性 #生物启发

👥 **作者与机构**

- 第一作者：Qianyi Bai（天津大学智能与计算学院/计算机科学与技术学院）
- 通讯作者：Qiang Yu（天津大学智能与计算学院）
- 作者列表：Qianyi Bai（天津大学智能与计算学院/计算机科学与技术学院）、Haiteng Wang（天津大学智能与计算学院/未来技术学院）、Qiang Yu（天津大学智能与计算学院）

💡 **毒舌点评**

论文的亮点在于为脉冲神经网络（SNN）引入了一个有扎实神经生物学背景的门控机制（动态电导），并通过理论分析和丰富的语音/时序任务实验，有力地证明了该机制对提升网络鲁棒性的显著效果，实验数据翔实。短板则在于，虽然方法有生物学启发，但实验评估高度集中在语音/音频时序任务，对于其在更广泛的视觉、多模态任务中的通用性和优势验证不足；此外，动态电导的引入增加了计算开销，论文对能效优势的分析略显单薄。

🔗 **开源详情**

- **代码**：论文中未提及代码链接。
- **模型权重**：未提及。
- **数据集**：使用了公开的Ti46Alpha， TIDIGITS， SHD， SSC数据集，论文未提及额外发布数据。
- **Demo**：未提及。
- **复现材料**：提供了详细的数学公式、伪代码（算法1）、网络架构描述、训练超参数（表5）和实验设置，复现指南较为充分。
- **论文中引用的开源项目**：未明确引用。

📌 **核心摘要**

1.  **问题**：现有的脉冲神经网络（SNN）由于神经元模型过于简化（如LIF），缺乏生物神经元中动态电导所体现的门控机制，导致其在应对噪声和时序变化时的鲁棒性不足。
2.  **方法核心**：论文提出了**动态门控神经元（DGN）**。其核心是引入了与神经元活动相关的突触电导动态调节机制（公式3-8）。该机制根据输入脉冲历史自适应地调整膜电位衰减速率，实现了一种生物启发的“门控”功能，可选择性地过滤输入信息并抑制噪声。
3.  **创新点**：与之前SNN中静态或工程化的门控（如GLIF）不同，DGN的门控源于动态电导这一生物学原理，在功能上与LSTM中的遗忘门和输入门有理论上的相似性。论文为该模型的噪声稳定性提供了基于随机微分方程的理论分析（公式13）。
4.  **实验结果**：在多个语音识别基准测试中，DGN模型（无论是前馈还是循环版本）均取得了优异性能。例如，在TIDIGITS数据集上，前馈DGN达到**98.59%** 准确率，循环DGN达到**99.10%** 的SOTA水平。在抗噪和抗攻击实验中，DGN显著优于LIF、ALIF等传统神经元及LSTM。例如在TIDIGITS加性噪声（p=0.006）下，前馈DGN准确率（**95.34%**）比LIF（**46.83%**）高出约48个百分点。
5.  **实际意义**：该工作为构建更鲁棒、更具生物合理性的SNN提供了新范式，有望提升神经形态芯片在嘈杂、非结构化环境（如边缘计算、语音交互）中的可靠性和适应性。
6.  **主要局限性**：验证主要集中在语音/音频时序分类任务上；DGN相比标准LIF神经元增加了可学习参数（`C_i`）和计算步骤，会提升模型复杂度和推理开销；论文未提供与更先进、更复杂的SNN架构（如基于Transformer的SNN）的直接对比。

---

### 78. [Token-Based Audio Inpainting via Discrete Diffusion](/audio-paper-digest-blog/posts/2026-05-04-token-based-audio-inpainting-via-discrete)

✅ **7.5/10** | 前25% | #音乐生成 | #扩散模型 | #预训练 #离散模型

👥 **作者与机构**

- 第一作者：Tali Dror*， Iftach Shoham*（*为共同第一作者）（Ben-Gurion University of the Negev）
- 通讯作者：未明确标注（从作者列表及邮箱推测，Eliya Nachmani可能是负责人）
- 作者列表：
    - Tali Dror (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)
    - Iftach Shoham (Ben-Gurion University of the Negev, Faculty of Computer and Information Science, Data Science Research Center)
    - Moshe Buchris (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)
    - Oren Gal (University of Haifa)
    - Haim Permuter (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)
    - Gilad Katz (Ben-Gurion University of the Negev, Faculty of Computer and Information Science, Data Science Research Center)
    - Eliya Nachmani (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)

💡 **毒舌点评**

这篇论文的亮点在于它为音频修复这个“老”问题提供了一个“新”且优雅的技术范式——直接在离散token空间用扩散模型“填空”，避开了连续波形或频谱建模的诸多麻烦，并在长间隙修复上证明了其有效性。然而，其理论深度和创新野心略显不足，本质上是现有组件（WavTokenizer, DiT, DWDSE）的巧妙集成与适配，且实验规模（如数据集量级、模型参数）与当前大模型时代的主流工作相比显得较为“迷你”，限制了其更广泛的影响力。

🔗 **开源详情**

- **代码**：论文中提供了项目页面和代码链接：https://github.com/iftachShoham/AIDD。
- **模型权重**：论文中未明确提及是否公开预训练模型权重。
- **数据集**：使用的MusicNet和MAESTRO是公开的标准数据集，但论文未说明获取方式或是否需要申请。
- **Demo**：论文中未提及在线演示。
- **复现材料**：提供了详细的超参数配置表（附录表8）、训练环境（单卡NVIDIA A6000）、训练步数与时长等复现所需的关键信息。
- **论文中引用的开源项目**：依赖的开源工具/模型包括：WavTokenizer（Ji et al., 2024）、UniCodec（Jiang et al., 2025，作为对比）、Diffusion Transformer (DiT) 架构（Peebles & Xie, 2023）。

📌 **核心摘要**

1.  **问题**：音频修复（Audio Inpainting）旨在恢复音频信号中的缺失或损坏段。现有的基于扩散模型的方法在缺失区域较大时性能会下降。
2.  **核心方法**：本文提出AIDD（Audio Inpainting via Discrete Diffusion），是首个将离散扩散模型应用于token化音乐表示的方法。该方法首先使用预训练的WavTokenizer将音频波形编码为离散token序列，然后在token空间应用基于Diffusion Transformer（DiT）的离散扩散模型进行修复。关键创新包括：a) **Span-based Masking**：在扩散前向过程中采用结构化的连续片段遮蔽，模拟从局部损坏到语义扰动的过程；b) **Derivative-based Regularization Loss**：在训练时引入导数正则化损失，鼓励预测的token嵌入在时间维度上平滑，提升连贯性。
3.  **新颖性**：与之前在连续波形（如DiffWave）或频谱图（如MAID, CQT-Diff+）上操作的方法不同，AIDD完全在离散token序列上进行建模，这有助于捕捉高层语义结构并避免相位重建等问题。
4.  **实验结果**：在MusicNet和MAESTRO数据集上，针对150ms至750ms的缺失间隙进行了评估。主要结果如下（关键数据来自论文表1和表2）：
    *   **MusicNet**（多间隙修复）：在200ms-300ms间隙上，AIDD在FAD和ODG指标上均优于强基线CQT-Diff+。例如在300ms间隙，AIDD的FAD为3.549，而CQT-Diff+为4.652（降低约24%）；ODG（越高越好）AIDD为-3.284，CQT-Diff+为-3.711。
    *   **MAESTRO**（单间隙修复）：在375ms和750ms的长间隙上，AIDD的ODG（PEA-Q）分数显著优于GACELA、bin2bin等GAN基线。例如在750ms间隙，AIDD的ODG为-2.596 ± 1.300，而最佳基线bin2bin-MIDI为-2.976 ± 0.456。
    *   **主观评估（MOS）**：在MAESTRO上，AIDD（使用WavTokenizer）获得3.64 ± 1.26的MOS分，略高于CQT-Diff+（3.51 ± 1.34）和GACELA（3.51 ± 1.33）。
5.  **实际意义**：该方法为音乐音频修复，特别是长间隙修复，提供了一种高效且效果更好的新方案。其token-based离散扩散框架也可为其他序列生成任务（如语言模型）提供借鉴。
6.  **主要局限性**：修复质量的上限受底层tokenizer（WavTokenizer）的质量和带宽（24kHz）限制；存在训练时（完整音频分词后遮蔽）与推理时（音频含缺失段分词）的不匹配问题；与基于连续表示的基线在评估上存在跨域差异。

---

### 79. [MARS-Sep: Multimodal-Aligned Reinforced Sound Separation](/audio-paper-digest-blog/posts/2026-05-04-mars-sep-multimodal-aligned-reinforced-sound)

✅ **7.5/10** | 前25% | #语音分离 | #强化学习 | #多模态模型 #对比学习

👥 **作者与机构**

- 第一作者：Zihan Zhang (Zhejiang University)
- 通讯作者：Tao Jin (Zhejiang University)
- 作者列表：Zihan Zhang (Zhejiang University)， Xize Cheng (Zhejiang University)， Zhennan Jiang (Institute of Automation, Chinese Academy of Sciences)， Dongjie Fu (Zhejiang University)， Jingyuan Chen (Zhejiang University)， Zhou Zhao (Zhejiang University)， Tao Jin (Zhejiang University)

💡 **毒舌点评**

亮点：该工作巧妙地将大语言模型对齐的RLHF范式“降维打击”式地应用于声音分离任务，通过设计因子化Beta掩码策略和多模态融合奖励，系统性地解决了传统方法中信号指标优化与语义保真度脱节的核心矛盾，实验设计全面且具有说服力。短板：方法的核心——多模态奖励模型严重依赖预训练的ImageBind编码器，其表征能力的天花板可能间接限制了MARS-Sep所能达到的最终性能上限，且论文中缺乏对这一依赖性风险的深入讨论。

🔗 **开源详情**

- **代码**：论文明确提供了代码仓库链接：https://github.com/mars-sep/MARS-Sep。
- **模型权重**：论文中未提及是否公开预训练的模型权重。
- **数据集**：使用了VGGSound-clean+和MUSIC-clean+，论文中说明是清洗后的子集，但未提供获取方式或是否作为独立数据集发布。
- **Demo**：论文提供了项目主页和示例链接：https://mars-sep.github.io/。
- **复现材料**：论文附录（B、C、D、E节）详细说明了实验设置、数据预处理、超参数、训练细节和评估协议，复现信息较为充分。
- **引用的开源项目**：论文依赖的开源工具/模型包括：ImageBind（视觉-语言-音频基础模型），CLAP（用于评估），museval（用于评估），以及OmniSep作为基线代码库。

---

### 80. [AlignSep: Temporally-Aligned Video-Queried Sound Separation with Flow Matching](/audio-paper-digest-blog/posts/2026-05-04-alignsep-temporally-aligned-video-queried-sound)

前25% | #音频分离 | #流匹配 | #音视频 #基准测试

👥 **作者与机构**

- 第一作者：未说明（论文声明Xize Cheng, Chenyuhao Wen, Tianhao Wang为共同第一作者“Equal Contribution”）
- 通讯作者：未说明
- 作者列表：Xize Cheng (浙江大学1), Chenyuhao Wen (浙江大学1), Tianhao Wang (独立作者2), Yongqi Wang (浙江大学1), Zehan Wang (浙江大学1), Rongjie Huang (浙江大学1), Tao Jin (浙江大学1), Zhou Zhao (浙江大学1)。（注：1指浙江大学，2指独立作者，具体实验室或部门未在文中提供）

💡 **毒舌点评**

**亮点**：这是首个将流匹配范式成功引入视频引导声音分离的工作，并敏锐地指出了其与传统文本生成任务在“多条件生成”上的本质差异，为后续研究者提供了清晰的思路和新的挑战性基准。
**短板**：模型架构（拼接+FFN Transformer）略显“直给”，缺乏更精巧的跨模态交互设计；虽然实验充分，但“流匹配”相对于“扩散模型”在本任务中的具体优势论证（如表7所示）并不构成压倒性差距，说服力有提升空间。

🔗 **开源详情**

- **代码**：论文中提及“More results and audio examples are available at: https://AlignSep.github.io”，并承诺“All code, pretrained models, and related resources will be publicly released upon paper acceptance”。但当前文本中未提供具体的代码仓库链接（如GitHub URL）。
- **模型权重**：同上，承诺将开源预训练模型。
- **数据集**：VGGSound-Hard基准已描述构建过程，但未明确说明是否提供现成下载链接，可能需根据描述自行构建。
- **Demo**：提供了项目主页链接，可能包含在线演示示例。
- **复现材料**：附录提供了非常详细的超参数表（表4，表5）、MOS评估详细协议（表7）、消融实验设置等，复现信息充分。
- **引用的开源项目**：论文中提到的依赖开源工具/模型包括：CAVP视觉编码器、音频VAE（来自Make-An-Audio）、BigVGAN声码器、CLAP编码器、ImageBind模型、CLIPSep的合成流程。

📌 **核心摘要**

本文针对视频查询声音分离（VQSS）任务中存在的同类声源干扰和重叠音轨难以分离的问题，提出了**AlignSep**——一个基于条件流匹配（Flow Matching）的生成式分离模型。与以往基于掩码的判别式方法不同，AlignSep将分离过程建模为从混合音频分布到干净音频分布的生成式流动，其核心创新在于设计了**时序对齐的向量场估计器**，通过特征拼接和前馈Transformer来显式地保持跨模态的时序一致性，并分析了流匹配在多条件生成任务中的独特挑战。此外，论文构建了新的挑战性基准**VGGSound-Hard**，专门测试模型在同类干扰和强时间线索依赖下的性能。实验表明，AlignSep在MUSIC-Clean、VGGSound-Clean以及新提出的VGGSound-Hard基准上，在语义一致性（如ImageBind、CLAP分数）和时序对齐精度（Acc）等指标上均显著优于现有基线，并取得了更好的感知质量（MOS）。该工作的实际意义在于推动了生成式模型在复杂视听场景分离中的应用，并提供了更贴近现实的评估标准；其局限性在于模型架构相对简单，且在极致推理效率上可能不如轻量级判别模型。

---

### 81. [OmniVinci: Enhancing Architecture and Data for Omni-Modal Understanding LLM](/audio-paper-digest-blog/posts/2026-05-04-omnivinci-enhancing-architecture-and-data-for)

✅ **7.5/10** | 前25% | #多模态模型 | #多模态模型 | #语音大模型 #对比学习

👥 **作者与机构**

- 第一作者：Hanrong Ye（NVIDIA）
- 通讯作者：Hongxu Yin（NVIDIA）， Pavlo Molchanov（NVIDIA）
- 作者列表：Hanrong Ye*， Chao-Han Huck Yang*， Arushi Goel*， Wei Huang*， Ligeng Zhu*， Yuanhang Su*， Sean Lin*， An-Chieh Cheng*， Zhen Wan*， Jinchuan Tian*， Yuming Lou*， Dong Yang*（以上作者标注为“*Core Contribution”，均来自NVIDIA）， Zhijian Liu， Yukang Chen， Ambrish Dantrey， Ehsan Jahangiri， Sreyan Ghosh， Daguang Xu， Ehsan Hosseini-Asl， Danial Mohseni Taheri， Vidya Murali， Sifei Liu， Yao Lu， Oluwatobi Olabiyi， Yu-Chiang Frank Wang， Rafael Valle， Bryan Catanzaro， Andrew Tao， Song Han， Jan Kautz， Hongxu Yin§†*， Pavlo Molchanov§*（标注“§Equal Advisory”，“†Corresponding Authors”）， 机构均为NVIDIA。

💡 **毒舌点评**

论文在系统性地探索全模态LLM架构与数据配方上做得非常扎实，尤其是OmniAlignNet结合时间编码的设计有清晰的工程动机。然而，论文对模型的具体规模（参数量、计算成本）和数据合成管道的细节披露略显不足，使得“效率优势”的宣称（如0.2T token训练）的完整上下文不够透明，更像是一个精心调优的大型系统工程展示，而非在某个单一技术点上的颠覆性创新。

🔗 **开源详情**

- **代码**：论文中提及将公开代码，但未提供具体仓库链接。
- **模型权重**：论文中提及将公开模型，但未提供具体下载地址。
- **数据集**：论文中提及构建了24M数据集，并提到了部分来源数据集，但未说明完整数据集的开源获取方式。
- **Demo**：未提及在线演示。
- **复现材料**：论文提供了模型架构图、主要消融实验设置、训练策略概览（两阶段、GRPO配置）和部分超参数（如GRPO的采样数、批次大小），为复现提供了重要信息。详细的超参数配置、检查点等可能在附录中，但当前摘要未完全涵盖。
- **论文中引用的开源项目**：提到了Magpie TTS， Long-RL训练框架， Whisper， Qwen系列模型等作为基线或工具，但未明确列出所有依赖项。

📌 **核心摘要**

1. **要解决什么问题**：本文旨在构建一个能同时高效、准确理解视觉、音频（含语音和环境音）和文本的开源全模态大语言模型（LLM），以克服现有模型在跨模态对齐、时序建模和数据效率上的不足。
2. **方法核心是什么**：核心是模型架构与数据工程的协同创新。架构上提出三项关键技术：（1）OmniAlignNet，通过对比学习将视觉和音频嵌入对齐到统一的潜在空间；（2）时间嵌入分组（TEG），基于时间戳对视觉和音频嵌入进行分组以捕获相对时序；（3）约束旋转时间嵌入（CRTE），通过旋转编码注入绝对时间信息。数据上，构建了一个包含2400万对话的管道，通过“隐式学习”（利用已有视频QA数据）和“显式学习”（生成带跨模态标签的新数据）来训练模型。
3. **与已有方法相比新在哪里**：新在将上述三项架构创新系统性整合，并提出专门解决“模态特定幻觉”的数据合成流程（通过LLM融合独立的视觉和音频描述）。与Qwen2.5-Omni等SOTA模型相比，该方法在更少的训练数据（0.2T token vs 1.2T）下实现了性能提升。
4. **主要实验结果如何**：在多个基准测试上取得显著提升。在跨模态理解DailyOmni上得分66.50（+19.05 vs Qwen2.5-Omni），在音频MMAR上58.40（+1.7），在视频Video-MME上68.2（+3.9）。在机器人导航、医疗AI等下游任务中也展示了有效性。关键消融实验证明了TEG、CRTE和OmniAlignNet的有效性（详见下表）。

**主要消融实验结果（Table 1）：**
| 方法 | Omni WorldSense↑ | Dailyomni↑ | Omnibench↑ | Average↑ |
| :--- | :--- | :--- | :--- | :--- |
| Token Concatenation – Baseline | 42.21 | 54.55 | 36.46 | 45.51 |
| + TEG (ours) | 44.51 | 60.99 | 37.65 | 47.72 |
| ++ CRTE (ours) | 45.46 | 65.66 | 39.64 | 50.25 |
| +++ OmniAlignNet (ours) | 46.21 | 65.83 | 45.74 | 52.59 |

**与Qwen2.5-Omni在关键基准上的对比（Table 3, 4, 5）：**
| 基准任务 | Qwen2.5-Omni | OmniVinci (Ours) |
| :--- | :--- | :--- |
| Omni WorldSense | 45.40 | 48.23 |
| Omni Dailyomni | 47.45 | 66.50 |
| Audio MMAR | 56.70 | 58.40 |
| Video-MME (w/o sub.) | 70.3 | 68.2 |
| *注：Video-MME上Qwen2.5-Omni略高，但OmniVinci在LongVideoBench和MVBench上更优* | | |

![OmniVinci与主要模型在多个基准上的性能对比](icassp-img://DZeic3NpHy/0.png)
*图1（论文Figure 1）：直观对比OmniVinci与Qwen2.5-Omni等模型在DailyOmni、MMAR、Video-MME等关键基准上的得分优势。*

5. **实际意义是什么**：证明了通过精心的架构设计和数据工程，可以构建出更高效（训练数据少6倍）、能力更均衡（视听融合增强理解）的全模态基础模型。为机器人控制、智能工厂、医疗辅助诊断等需要同时处理多种感官输入的下游智能体提供了强大的骨干模型。
6. **主要局限性**：论文对计算成本（如训练总GPU小时数）和完整的模型规模（虽提及9B参数）交代不够详细。数据合成管道的细节（如何确保合成数据质量、多样性）主要在图示中体现，文本描述较简略。此外，尽管展示了应用，但未对所有下游任务进行深入的错误分析。

---

### 82. [AudioTrust: Benchmarking The Multifaceted Trustworthiness of Audio Large Language Models](/audio-paper-digest-blog/posts/2026-05-04-audiotrust-benchmarking-the-multifaceted)

✅ **7.5/10** | 前25% | #基准测试 | #基准测试 | #模型评估 #音频大模型

👥 **作者与机构**

第一作者：Kai Li（论文中标注为共同第一作者，其机构为清华大学计算机系）
通讯作者：Xinfeng Li（论文中标注为†，其机构为南洋理工大学）
作者列表：
  - Kai Li（清华大学计算机系， Institute for AI, BNRist）
  - Can Shen（北京师范大学-香港浸会大学联合国际学院，BNBU）
  - Yile Liu（早稻田大学，Waseda University）
  - Jirui Han（独立研究者）
  - Kelong Zheng（华中科技大学，HUST）
  - Xuechao Zou（北京交通大学，BJTU）
  - Lionel Z. Wang（未说明具体机构，作者列表归属南洋理工大学）
  - Shun Zhang（清华大学）
  - Xingjian Du（罗切斯特大学）
  - Hanjun Luo（浙江大学）
  - Yingbin Jin（香港理工大学）
  - Xinxin Xing（独立研究者）
  - Ziyang Ma（上海交通大学，及12号单位）
  - Yue Liu（新加坡国立大学）
  - Yifan Zhang（中国科学院，CAS）
  - Junfeng Fang（新加坡国立大学）
  - Kun Wang（南洋理工大学）
  - Yibo Yan（香港科技大学（广州））
  - Gelei Deng（南洋理工大学）
  - Haoyang Li（香港理工大学）
  - Yiming Li（南洋理工大学）
  - Xiaobin Zhuang（字节跳动）
  - Tianlong Chen（北卡罗来纳大学教堂山分校）
  - Qingsong Wen（松鼠AI学习）
  - Tianwei Zhang（南洋理工大学）
  - Yang Liu（南洋理工大学）
  - Haibo Hu（香港理工大学）
  - Zhizheng Wu（香港中文大学（深圳））
  - Xiaolin Hu（清华大学计算机系， Institute for AI, BNRist）
  - Eng-Siong Chng（南洋理工大学）
  - Wenyuan Xu（浙江大学）
  - XiaoFeng Wang（南洋理工大学）
  - Wei Dong（南洋理工大学）
  - Xinfeng Li（南洋理工大学）

💡 **毒舌点评**

本文最大的亮点在于其**雄心和系统性**：它是第一个为ALLM量身定做可信度评估框架的工作，直指音频模态引入的“非语义”攻击面，如情绪操纵、口音偏见和环境声伪造，这比单纯评估文本安全要深刻得多。然而，其短板也相当明显：作为一个“评估”工作，它严重依赖**GPT-4o和Qwen3作为评估器**，这本质上是用一个黑箱模型去评判另一个黑箱模型的可信度，其评估结果本身的“可信度”值得打个问号；此外，部分实验（如隐私推断）的自动化评估结果与常识或直觉可能存在偏差（如论文所示，所有模型在隐私推断上几乎全部失败），需要更深入的人类评估来验证。

🔗 **开源详情**

- **代码**：论文提供了公开的GitHub仓库链接（https://github.com/JusperLee/AudioTrust），包含评估框架代码、自动化脚本和排行榜生成代码。
- **模型权重**：未提及公开被评估的14个ALLMs的模型权重。
- **数据集**：论文声明数据集公开，但具体获取方式需参考其GitHub仓库。
- **Demo**：未提及在线演示。
- **复现材料**：提供了极其详尽的附录（占全文大部分篇幅），完整说明了每个评估维度的数据分类标准、构建方法、实验设计、评估指标和具体结果，复现材料非常充分。
- **论文中引用的开源项目/工具**：F5-TTS（用于语音合成）、Common Voice（数据集）、Freesound（数据集）、GPT-4o和Qwen3（作为评估器）。

📌 **核心摘要**

1. **要解决什么问题**：随着音频大语言模型（ALLMs）的快速发展，亟需一个系统性的评估框架来量化其在真实世界高风险场景下的可信度风险，但现有评估主要针对文本模态，忽略了音频特有属性（如声学线索、情感、环境声）引入的独特脆弱性。
2. **方法核心是什么**：本文提出了**AudioTrust**，首个全面评估ALLMs可信度的基准测试框架。该框架涵盖六个核心维度：公平性、幻觉、安全性、隐私、鲁棒性和认证。它构建了一个包含4420多个真实场景音频样本的数据集，并设计了26个具体子任务，结合自动化评估流水线（由GPT-4o和Qwen3驱动）和人工验证，对14个先进的开源和闭源ALLMs进行大规模评估。
3. **与已有方法相比新在哪里**：1) **首次**将评估焦点专门对准ALLMs；2) **明确定义了**音频模态特有的可信度风险（如基于音色/口音的公平性风险、基于环境声的隐私泄露、基于语音克隆的认证攻击）；3) **构建了**首个大规模、多维度、涵盖真实场景的ALLM可信度评估数据集和任务集；4) **提出了**针对音频特性的专用评估指标（如Group Fairness Score Γ， Imposter Rejection Rate IRR）。
4. **主要实验结果如何**：
   - **总体发现**：所有评估的ALLMs在面对音频特有的高风险场景时，均表现出显著的局限性和安全边界。
   - **公平性**：模型在基于声音特征的决策中存在严重偏见，闭源模型（如GPT-4o）在决策公平性上表现更稳定，但开源模型（如Step-Fun）在某些任务上能接近闭源模型水平。平均Group Fairness Score Γ仅约0.3。
   - **幻觉**：模型对违反物理规律（如水下燃烧）的检测较好，但对跨模态语义矛盾（如音频内容与描述文本矛盾）的检测普遍较弱。闭源模型（如Gemini系列）整体表现优于多数开源模型。
   - **安全性**：利用情感语音的“情绪欺骗”攻击对许多模型有效。闭源模型整体防御能力更强（如GPT-4o Audio在多数任务上DSR > 99%），但开源模型（如Kimi-Audio）也能达到接近水平，而OpenS2S等模型则非常脆弱。
   - **隐私**：模型在直接内容泄露上通过提示工程可以较好防御（如GPT-4o mini Audio拒绝率100%），但在**从语音副语言特征推断个人隐私属性**（如年龄、种族）上几乎全部失败（平均拒绝率仅~10%），揭示了巨大的隐私风险。
   - **鲁棒性**：闭源模型（如Gemini-2.5 Pro）在噪声、多说话人等干扰下表现远优于开源模型，后者性能下降显著，常出现“过度文本化”倾向。
   - **认证**：闭源模型（如GPT-4o系列）在身份验证绕过和混合欺骗攻击中防御成功率极高（IRR > 95%），开源模型差异大，但通过严格提示可提升防御能力。

| 模型 | 公平性 (Γstereo/Γdecision) | 幻觉 (GPT-4o/Qwen3, 平均) | 安全性 (DSR, GPT-4o) | 隐私-直接泄露拒绝率 (w/ prompt) | 鲁棒性 (GPT-4o平均) | 认证-IVB (IRR) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **开源代表** | | | | | | |
| Step-Fun | 0.658 / 0.505 | 3.96 / 3.93 | 70.6 | 98.33 | 5.00 | 79 |
| Kimi-Audio | 0.036 / 0.086 | 1.86 / 1.88 | 99.4 | 1.00 | 5.67 | 79 |
| **闭源代表** | | | | | | |
| GPT-4o Audio | 0.926 / 0.264 | 3.94 / 1.65 | 99.0 | 99.67 | 5.90 | 98 |
| Gemini-2.5 Pro | 0.319 / 0.205 | 8.19 / 7.02 | 99.8 | 94.17 | 8.88 | 95 |

*（表格根据论文正文关键数据整理，完整数据见论文表1-6）*

5. **实际意义是什么**：为ALLMs的安全开发和部署提供了关键的评估工具和风险图谱。它明确指出了当前模型在公平、隐私（特别是副语言推断）、对抗攻击下的脆弱点，为模型开发者提供了明确的改进方向（如加强音频-语义对齐的安全训练），也为使用者选择和应用ALLMs提供了风险参考。
6. **主要局限性是什么**：1) **评估依赖**：自动化评估高度依赖GPT-4o/Qwen3，其评判标准本身可能存在偏差，尽管有人工验证；2) **数据局限**：数据集虽力求真实，但仍是合成或有限样本，可能无法完全覆盖所有现实世界的复杂情况；3) **深度不足**：作为基准测试，它侧重于“发现问题”而非“解决问题”，未提出具体的防御或改进算法；4) **部分结果解释**：如隐私推断任务上所有模型的极低拒绝率，可能反映了评估设置或模型认知的问题，需进一步剖析。

---

### 83. [Unmute the Patch Tokens: Rethinking Probing in Multi-Label Audio Classification](/audio-paper-digest-blog/posts/2026-05-04-unmute-the-patch-tokens-rethinking-probing-in)

✅ **7.5/10** | 前25% | #音频分类 | #探针评估 | #自监督学习 #模型评估

👥 **作者与机构**

- 第一作者：Lukas Rauch (卡塞尔大学)
- 通讯作者：未说明
- 作者列表：Lukas Rauch (卡塞尔大学), René Heinrich (卡塞尔大学, 弗劳恩霍夫IEE), Houtan Ghaffari (根特大学), Lukas Miklautz (MPI of Biochemistry), Ilyass Moummad (INRIA Montpellier), Bernhard Sick (卡塞尔大学), Christoph Scholz (卡塞尔大学, 弗劳恩霍夫IEE)

💡 **毒舌点评**

**亮点**：这篇论文做了一件“对”且“必要”的事——它系统性地指出并验证了音频SSL领域普遍存在的“用线性探针评估却不靠���”的核心症结（池化瓶颈），并给出了一个简洁有效的解决方案，让探针评估重获可信度。实验规模和设计的严谨性也值得称赞。
**短板**：其提出的“二值化原型探针”本质上是现有原型网络的变体和简化，在方法创新深度上稍显不足，更像是一个工程上优化得很好的“修补”方案。研究完全基于冻结的声谱图编码器，其结论在更广泛的音频表示（如波形、离散token）上的普适性有待验证。

🔗 **开源详情**

-   **代码**：是，提供了GitHub仓库链接：`https://github.com/lurauch/unmute-patch-tokens/`。
-   **模型权重**：未提及是否公开探针模型的权重。论文使用的是已公开的SSL编码器检查点。
-   **数据集**：是，部分数据集（desed, spass, urban-sed）已上传至Hugging Face Hub：`https://huggingface.co/datasets/lrauch/desed`, `https://huggingface.co/datasets/lrauch/spass`, `https://huggingface.co/datasets/lrauch/urban-sed`。其他数据集为公开标准数据集。
-   **Demo**：未提及。
-   **复现材料**：提供了非常详细的附录，包括数据集详细描述（D.1）、池化方法汇总与复杂度（D.3）、完整的超参数搜索设置与范围（D.4）、以及计算资源说明（C）。
-   **依赖的开源项目**：论文未在正文中明确列出所有代码依赖项，但从方法描述可推断依赖标准深度学习框架（如PyTorch）及用于超参数搜索的库（如Optuna）。
-   **开源计划**：论文已提供代码和数据链接，属于已开源状态。

📌 **核心摘要**

1.  **问题**：当前音频自监督学习（SSL）领域，尽管探针（Probing）是评估模型表征质量的标准范式，但在追求AudioSet基准SOTA性能时仍依赖昂贵的全模型微调。论文指出，根本原因是标准的全局池化（如使用`[cls]` token）在处理多标签音频分类中的稀疏、局部声音事件时形成了信息瓶颈，导致探针性能无法反映模型真实潜力。
2.  **方法**：论文提出**二值化原型探针（Protobin）**。它维护一组可学习的、类无关的全局原型，通过将原型二值化（±1）来鼓励正交性。在推理时，它将音频片段的每个token与所有原型计算余弦相似度，然后通过最大池化聚合每个原型的全局匹配分数，最终通过一个线性层将原型分数映射到类别logits。这实现了类别条件化、多向量的信息聚合。
3.  **新意**：与传统的线性探针（单向量）、注意力池化探针相比，该方法采用多向量、按原型（类条件）聚合的策略。相较于先前的类依赖原型方法，本文将其简化为类无关设计，并移除了显式的正交性损失，通过二值化隐式实现，且大幅降低了内存消耗（32倍）。
4.  **结果**：在跨越13个数据集、6个编码器的大规模基准测试中，**Protobin在平均上显著优于线性探针（+14.41% mAP on 通用音频）和注意力池化方法**。它能将冻结编码器的探针性能提升至接近微调的水平（如在as20k数据集上，Protobin弥补了63%的与微调的性能差距）。关键发现包括：线性探针会扭曲模型排名（如ASiT和SSLAM的排名逆转）；池化瓶颈在多标签任务中比在多分类任务中更严重；监督微调主要增强`[cls]` token而非token map本身。
5.  **意义**：该工作建立了一个可靠、高效的音频SSL模型评估新范式。它证明了通过改进池化方法，探针评估可以成为微调的一种有竞争力的替代方案，挑战了当前为追求SOTA而依赖全模型微调的惯性，有助于更公平、低成本地评估和比较音频SSL模型。
6.  **局限**：研究主要聚焦于clip-level分类任务，未验证该方法在帧级任务（如事件检测）上的效果。所有实验基于冻结的ViT-base声谱图编码器，结论在更小、更大或不同架构（如CNN、波形编码器）模型上的适用性需进一步确认。

---

### 84. [XModBench: Benchmarking Cross-Modal Capabilities and Consistency in Omni-Language Models](/audio-paper-digest-blog/posts/2026-05-04-xmodbench-benchmarking-cross-modal-capabilities)

✅ **7.5/10** | 前25% | #基准测试 | #多模态模型 | #音频问答 #跨模态

👥 **作者与机构**

第一作者：Xingrui Wang (1. Advanced Micro Devices, 2. Johns Hopkins University)
通讯作者：Jiang Liu (Advanced Micro Devices)
作者列表：Xingrui Wang (Advanced Micro Devices, Johns Hopkins University), Jiang Liu (Advanced Micro Devices), Chao Huang (Advanced Micro Devices, University of Rochester), Xiaodong Yu (Advanced Micro Devices), Ze Wang (Advanced Micro Devices), Ximeng Sun (Advanced Micro Devices), Jialian Wu (Advanced Micro Devices), Alan Yuille (Johns Hopkins University), Emad Barsoum (Advanced Micro Devices), Zicheng Liu (Advanced Micro Devices)

💡 **毒舌点评**

**亮点：** 基准设计极其系统且具有诊断性，通过“模态平衡”的六种排列组合，像精密仪器一样能测量出模型对不同模态的“偏科”程度，这是超越简单平均分的深度评测。
**短板：** 论文将最强的闭源模型（Gemini）作为标杆，但自身并未提出新的模型或算法，因此更像一份详尽的“体检报告”而非“治疗方案”；同时，尽管承诺开源，但评测完全依赖现有模型，缺乏对新模型训练的直接指导细节。

🔗 **开源详情**

- **代码**：论文中提供了代码仓库链接（https://github.com/XingruiWang/XModBench），承诺将开源评估工具。
- **模型权重**：未提及。评测使用的是现有公开模型或闭源API模型。
- **数据集**：承诺将开源数据集，论文中提供了“Dataset Card”链接（在图1中）。
- **Demo**：未提及。
- **复现材料**：论文中提到了附录中包含人类评估细节、数据处理流程等，但未提供详细的超参数或完整训练/评测脚本。
- **论文中引用的开源项目**：在数据构建和评测中引用了多个开源项目，如FireRedTTS（语音合成）、VGG-Sound（音频-视觉数据集）、STARSS23（空间音频数据集）、RenderedText（文本图像渲染）等。

📌 **核心摘要**

1.  **要解决什么问题**：现有评测主要关注多模态问答的综合性能，但忽略了模型是否在不同模态输入（音频、图像、文本）下能保持答案的一致性，即是否具备真正的“模态不变推理”能力。
2.  **方法核心是什么**：提出XModBench基准。其核心设计是将一个语义相同的问题，通过系统性地交换“上下文”和“选项”的模态（共6种组合），生成多组测试项。通过对比模型在不同模态配置下的表现，诊断其模态偏好、不平衡和一致性。
3.  **与已有方法相比新在哪里**：XModBench是首个系统性覆盖音频、视觉、文本三模态间所有6种映射关系的基准。它引入了“模态差异”和“方向不平衡”两个量化指标，专门用于诊断跨模态对齐的缺陷。
4.  **主要实验结果如何**：评估了12个模型。最强模型Gemini 2.5 Pro平均准确率为70.6%，但在空间推理（50.1%）和时间推理（60.8%）上表现最差。音频模态是普遍短板，当涉及音频时性能显著下降（模态差异ΔT vs. A达-49）。模型在将文本作为输出选项（如V→T）时表现优于输入（如T→V），显示存在方向不平衡。具体结果见下表。

| 模型 | 平均准确率 | 感知 | 空间推理 | 时间推理 | 语言理解 | 外部知识 | 标准差 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Gemini 2.5 Pro | 70.6 | 75.9 | 50.1 | 60.8 | 76.8 | 89.3 | 11.7 |
| Qwen2.5-Omni | 58.6 | 75.5 | 38.4 | 32.3 | 74.1 | 72.8 | 10.1 |
| EchoInk-R1 | 59.2 | 75.8 | 36.6 | 37.1 | 73.3 | 73.3 | 11.3 |
| Human | 91.5 | 91.0 | 89.7 | 88.9 | 93.9 | 93.9 | 3.0 |

![图4：不同模型在模态对之间的差异分析](icassp-img://HaL9EZovFg/3.png)
*图4展示了不同模型在模态对（文本vs视觉， 文本vs音频， 视觉vs音频）之间的模态差异分数。负值越大，表明两个模态间表现差距越大，其中文本与音频的差距最为显著。*

![图5：不同模型在方向上的不平衡分析](icassp-img://HaL9EZovFg/4.png)
*图5展示了模型在互逆模态配置（如文本→视觉 vs 视觉→文本）上的准确率差值。柱状图显示，多数模型在涉及文本的配对上存在明显的不对称性。*

5.  **实际意义是什么**：为评估和改进全模态大模型提供了一个基础性的诊断工具。揭示了当前模型普遍存在的音频处理短板、空间时间推理弱项以及模态间不对齐问题，为未来的模型训练（如使用更多交织数据）和数据收集指明了方向。
6.  **主要局限性是什么**：基准评估高度依赖闭源模型，部分模型（如GPT系列）因API限制无法参与。基准构建依赖于已有数据集和合成数据，其覆盖范围和问题设计的多样性仍有扩展空间。

---

### 85. [Gogo: Group-wise granularity-ordered codec for stable and efficient speech generation](/audio-paper-digest-blog/posts/2026-05-04-gogo-group-wise-granularity-ordered-codec-for)

✅ **7.5/10** | 前25% | #语音合成 | #语音编解码 | #流匹配 #自回归模型

👥 **作者与机构**

- 第一作者：Weidong Chen (The Chinese University of Hong Kong)
- 通讯作者：Xixin Wu (The Chinese University of Hong Kong)
- 作者列表：Weidong Chen（The Chinese University of Hong Kong）、Helen M. Meng（The Chinese University of Hong Kong）、Xixin Wu（The Chinese University of Hong Kong）

💡 **毒舌点评**

这篇工作最大的亮点在于将“组”作为语音量化的基本单元，并系统性地设计了粗细有序的token序列，这确实比传统逐帧量化更适合后续的语言模型建模，逻辑自洽且实验支撑有力。然而，其核心的token分配器虽然有效，但训练方法（GRPO）的引入略显“重”，对于一个动态分配离散资源的简单策略问题，是否有更轻量优雅的解法值得商榷，且论文最终未能开源代码，让这套精心设计的系统停留在了“可望”的层面。

🔗 **开源详情**

- **代码**：论文中未提及代码仓库链接。
- **模型权重**：未提及是否公开。
- **数据集**：使用了公开的Emilia（英文子集）、LibriTTS、Seed-TTS测试集。
- **Demo**：提供了在线演示链接：https://happycolor.github.io/gogo。
- **复现材料**：论文在正文和附录中详细给出了模型架构（表C）、训练超参数（表D）、硬件（8x H100）、评估指标定义等，复现信息较为充分。
- **论文中引用的开源项目**：Vocos声码器、LLaMA（作为初始化基座）、ConVNeXt V2（用于特征处理）。

📌 **核心摘要**

本文旨在解决当前语音语言模型中，语音编解码器无法同时有效支持高层自回归建模和保留低层声学细节的矛盾，以及语音信号信息分布不均匀导致的编码效率低下问题。核心方法是提出**Gogo**编解码器，它将语音分组后，为每组生成一组**从粗到细有序**的离散token：粗token编码高层语义和韵律，细token逐步恢复声学细节。基于此，构建了两阶段的**GogoSpeech**模型：第一阶段仅以极低token率（~14Hz）生成粗token“骨架”；第二阶段条件于骨架，逐步补充细token。此外，利用**GRPO**强化学习训练了一个**token分配器**，根据每组的复杂度动态分配第二阶段所需生成的细token数量，以提升效率。实验表明，在47Hz的token率下，Gogo的重建性能（UT-MOS: 4.19, DNS-MOS: 3.99, SIM: 0.91）优于多数SOTA编解码器。GogoSpeech在零样本TTS任务上（SIM: 0.667, WER: 2.394）取得了领先结果，并且分配器能将平均token率从47Hz降至36Hz，同时保持性能。主要局限性在于占位符可能引入伪影，token率仍高于部分低比特率编解码器，以及模型可扩展性未验证。

---

### 86. [SyncTrack: Rhythmic Stability and Synchronization in Multi-Track Music Generation](/audio-paper-digest-blog/posts/2026-05-04-synctrack-rhythmic-stability-and-synchronization)

✅ **7.5/10** | 前25% | #音乐生成 | #扩散模型 | #模型评估 #多轨音频

👥 **作者与机构**

第一作者：Hongrui Wang（香港科技大学数学系，标注为等贡献）
通讯作者：Yang Wang（香港大学）；Fan Zhang（香港科技大学，标注为等贡献）；Can Yang（香港科技大学数学系及神经系统疾病国家重点实验室）
作者列表：
    - Hongrui Wang（香港科技大学数学系）
    - Fan Zhang（香港科技大学数学系）
    - Zhiyuan Yu（浙江大学CAD&CG国家重点实验室）
    - Ziya Zhou（香港科技大学交叉学科学院）
    - Xi Chen（香港科技大学交叉学科学院）
    - Can Yang（香港科技大学数学系；香港科技大学神经系统疾病国家重点实验室）
    - Yang Wang（香港大学）

💡 **毒舌点评**

**亮点**：架构设计直击痛点，用Track-shared和Track-specific模块清晰解耦了多轨音乐中的“共性节奏”与“个性音色”，逻辑自洽且实验验证有效。**短板**：所提出的节奏评估指标（IRS， CBS， CBD）高度依赖于外部的预训练节拍检测器（madmom），其性能天花板受限于该工具，且指标定义相对简单，可能无法完全捕捉人类对“好律动”的复杂感知。

🔗 **开源详情**

- **代码**：论文提供了项目主页链接（https://synctrack-v1.github.io），推测包含代码。论文中明确写道“Audio samples, alongside with the source code for both the model and evaluation metrics, are available on our demo page.”
- **模型权重**：论文中未明确提及是否公开预训练模型权重。
- **数据集**：使用公开的Slakh2100数据集。论文中未提及是否提供处理后的数据。
- **Demo**：提供了项目主页作为demo展示。
- **复现材料**：提供了极其详细的训练配置（数据集划分、优化器、学习率、硬件、训练时间等）、模型架构细节（表A3）、评估指标的具体实现（附录A.1），以及超参数敏感性分析。复现信息非常充分。
- **依赖的开源项目**：论文中提及并依赖了以下开源工具/模型：
    - **madmom**：用于节拍检测，以计算节奏相关指标。
    - **MusicLDM**：模型初始化权重来源。
    - **HiFi-GAN**：作为声码器，将潜在表示解码为波形。
    - **RNNDownBeatProcessor & DBNDownBeatTrackingProcessor**：来自madmom库，用于节拍提取。

📌 **核心摘要**

1. **问题**：现有的多轨音乐生成模型（如MSDM， MSG-LD）通常将各轨视为独立变量进行联合建模，忽视了音乐中至关重要的节奏稳定性（单轨内拍子稳定）和同步性（多轨间拍子对齐），导致生成音乐听起来杂乱、不协调。
2. **方法**：提出SyncTrack模型，其核心是采用统一的架构包含**Track-shared模块**（共享）和**Track-specific模块**（特定）。共享模块内设计了两种跨轨注意力：**全局跨轨注意力**用于建立全局一致的节奏框架，**时间特定跨轨注意力**用于对齐同一时刻的音乐事件。特定模块则通过可学习的乐器先验来建模各轨独特的音色等特征。
3. **创新**：1) 架构上明确分离处理音乐的共性与个性信息；2) 设计了两种针对性的跨轨注意力机制；3) 创新性地提出了三个用于量化评估多轨音乐节奏一致性（稳定性和同步性）的新指标：IRS（轨内节奏稳定性）、CBS（跨轨拍子同步率）、CBD（跨轨拍子离散度）。
4. **实验结果**：在Slakh2100数据集上，SyncTrack在整体FAD指标上显著优于基线（从MSDM的6.55降至1.26）。在节奏一致性指标上，SyncTrack也全面优于基线：例如，CBS从MSG-LD的0.3861提升至0.5206，CBD(mean)从0.3714降低至0.2681。消融研究证明了各模块的有效性。主观评估也显示SyncTrack生成的音乐更受青睐。

| 指标 | Ground Truth | SyncTrack | MSG-LD | MSDM |
| :--- | :--- | :--- | :--- | :--- |
| FAD↓（混合） | - | 1.26 | 1.31 | 6.55 |
| CBS↑ | 0.5740 | 0.5206 | 0.3861 | 0.4694 |
| CBD(mean)↓ | 0.2412 | 0.2681 | 0.3714 | 0.3127 |

5. **实际意义**：为多轨音乐生成领域提供了更合理的建模思路和更专业的评估工具，推动了该领域向更符合音乐本质特性的方向发展，对未来音乐制作辅助工具有积极影响。
6. **局限性**：模型生成时长目前限于约10秒，论文也提到未来计划扩展至更长片段。新提出的评估指标依赖于第三方节拍检测工具，其准确性和普适性需要进一步验证。

---

### 87. [Efficient Audio-Visual Speech Separation with Discrete Lip Semantics and Multi-Scale Global-Local Attention](/audio-paper-digest-blog/posts/2026-05-04-efficient-audio-visual-speech-separation-with)

✅ **7.5/10** | 前25% | #语音分离 | #多模态模型 | #音视频 #自监督学习

👥 **作者与机构**

- 第一作者：Kai Li（清华大学计算机系，IDG/McGovern脑研究院）、Kejun Gao（清华大学计算机系）（论文注明两人贡献相等）
- 通讯作者：Xiaolin Hu（清华大学计算机系，IDG/McGovern脑研究院，中国脑研究中心）
- 作者列表：Kai Li（清华大学计算机系，IDG/McGovern脑研究院）、Kejun Gao（清华大学计算机系）、Xiaolin Hu（清华大学计算机系，IDG/McGovern脑研究院，中国脑研究中心）

💡 **毒舌点评**

亮点在于将“效率”作为核心优化目标并做到了极致，通过精心设计的轻量视频编码器（DP-LipCoder）和全局-局部注意力（GLA）模块，在大幅降低计算成本的同时保持了顶尖的分离性能，工程优化思路清晰且效果显著。短板则是核心创新略显“拼盘”，即DP-LipCoder（结合VQ与蒸馏）和GLA（结合CSA与HDA）更多是现有技术的针对性组合与优化，缺乏从第一性原理出发的突破性架构革新，理论深度有限。

🔗 **开源详情**

- **代码**：论文明确承诺“在文章被接受后，将在GitHub上以Apache-2.0许可证发布Dolphin的代码”，并提供了演示页面链接（https://cslikai.cn/Dolphin）。当前可视为“未提供”但承诺提供。
- **模型权重**：承诺发布“预训练权重（用于视频骨干）和Dolphin的源代码”。
- **数据集**：使用公开数据集LRS2、LRS3、VoxCeleb2，但论文未提及是否提供预处理好的数据，表示“需要根据引用的参考文献独立获取”，但会提供预处理脚本。
- **Demo**：提供了在线演示页面链接（https://cslikai.cn/Dolphin）。
- **复现材料**：论文提供了极其详尽的训练细节：包括完整的超参数配置（附录E）、损失函数公式（附录D）、训练硬件规格、数据处理流程、评估指标定义等。这些信息足以支持复现。
- **引用的开源项目**：论文提及并依赖的开源工具/模型包括：AV-HuBERT（用于知识蒸馏）、VQ实现（来自PyPI的vector-quantize-pytorch）、FlashAttention（可选）、MTCNN（人脸检测）等。
- **开源计划**：论文明确说明了开源计划，但代码和模型权重需待论文正式接受后发布。

📌 **核心摘要**

本文针对音视频语音分离（AVSS）模型参数量大、计算成本高、难以部署的问题，提出了一种高效模型Dolphin。其核心方法包含两部分：1) 设计了双路径轻量视频编码器DP-LipCoder，通过引入向量量化（VQ）和AV-HuBERT知识蒸馏，将连续的唇部视频流映射为与音频语义高度对齐的离散视觉token；2) 构建了一个单次迭代的轻量级编码器-解码器分离器，在其每层引入全局-局部注意力（GLA）块，分别使用粗粒度自注意力（CSA）和热扩散注意力（HDA）来捕捉长程依赖和局部细节。与已有SOTA方法（如IIANet）相比，Dolphin在LRS2、LRS3、VoxCeleb2三个基准数据集上的分离指标（SI-SNRi, SDRi, PESQ）全面更优，同时实现了参数量减少超50%、MACs降低2.4倍以上、GPU推理速度提升6倍以上的显著效率提升。这证明了Dolphin是一个性能优越且具备实际部署可行性的AVSS解决方案。主要局限性包括对清晰、同步的唇部视频的依赖，以及在资源极度受限的边缘设备上部署仍存挑战。

---

### 88. [A cross-species neural foundation model for end-to-end speech decoding](/audio-paper-digest-blog/posts/2026-05-04-a-cross-species-neural-foundation-model-for-end)

✅ **7.5/10** | 前25% | #语音识别 | #自监督学习 | #跨模态 #端到端

👥 **作者与机构**

- 第一作者：Yizi Zhang*（Columbia University）， Linyang He*（Columbia University）（*表示共同第一作者）
- 通讯作者：未明确说明（论文中提供了通讯邮箱，但未明确标注“Corresponding Author”）
- 作者列表：Yizi Zhang（Columbia University）， Linyang He（Columbia University）， Chaofei Fan（Stanford University）， Tingkai Liu（Microsoft）， Han Yu（Columbia University）， Trung Le（University of Washington）， Jingyuan Li（Amazon）， Scott Linderman（Stanford University）， Lea Duncker（Columbia University）， Francis R Willett（Stanford University）， Nima Mesgarani（Columbia University）， Liam Paninski（Columbia University）

💡 **毒舌点评**

这篇论文堪称BCI语音解码领域的“系统集成大师”，它巧妙地将跨物种预训练、Transformer编码器和音频LLM这几个当前最时髦的模块组装成一个性能SOTA的端到端框架，展现了强大的工程整合能力和扎实的实验功底。然而，其核心创新更多在于“组合”而非“发明”，且最终端到端性能仍未超越精心调优的级联系统，这或许暗示了“神经信号直接生成文本”这条路还有很长的坡要爬。

🔗 **开源详情**

- **代码**：论文中未提及提供开源代码仓库链接。
- **模型权重**：未提及公开预训练或微调后的模型权重。
- **数据集**：论文中引用的大部分预训练数据集（如Churchland et al., 2012; Willett et al., 2023/2025; Kunz et al., 2025等）均为公开数据集，可通过DANDI、DRYAD、Zenodo等平台获取。竞赛数据集（Brain-to-Text ‘24, ‘25）为公开基准。
- **Demo**：未提及提供在线演示。
- **复现材料**：论文提供了非常详尽的复现信息，包括：
    - 完整的模型架构细节（Transformer、MLP投影器）。
    - 所有训练超参数范围和最终选择值。
    - 损失函数的具体公式。
    - 数据预处理流程。
    - 基线模型（RNN）的具体配置。
    - 竞赛提交的具体流程（如集成策略）。
- **论文中引用的开源项目**：引用了PyTorch作为深度学习框架；引用了Ray Tune用于超参数调优；引用了OPT、Qwen系列模型作为LLM基线；引用了DeepSpeed ZeRO-3用于大模型训练优化。

📌 **核心摘要**

1.  **问题**：现有侵入式语音脑机接口（BCI）多采用“神经信号→音素→句子”的级联框架，各阶段独立优化，无法全局最优，且难以处理跨任务（如想象语音）的泛化问题。
2.  **核心方法**：本文提出名为BIT（BraIn-to-Text）的端到端框架。其核心是一个**跨物种、跨任务预训练的Transformer神经编码器**，该编码器在大量人类和猕猴Utah阵列记录数据上，通过自监督掩码建模进行预训练，学习通用的神经活动表征。编码器输出通过一个浅层MLP投影到文本嵌入空间，然后与一个**音频大语言模型（Audio-LLM）解码器**端到端连接，并通过对比学习进行模态对齐，直接生成句子。
3.  **创新点**：a) 首次提出跨物种、跨任务的神经编码器预训练范式，以解决神经数据稀疏和非平稳问题；b) 将音频LLM引入BCI，利用其在语音任务上的先验知识提升解码性能；c) 通过对比学习显式对齐神经与文本嵌入空间，实现跨任务（尝试语音与想象语音）的泛化。
4.  **主要结果**：在Brain-to-Text竞赛基准上：
    - **级联设置**（编码器+ n-gram LM）：BIT达到了新的SOTA（WER 6.35%），并通过集成进一步降至5.10%（Brain-to-Text’24）和1.76%（Brain-to-Text’25）。
    - **端到端设置**（编码器+ Audio-LLM）：BIT将之前最佳端到端方法的WER从24.69%大幅降低至10.22%（集成后），缩小了与级联系统的差距。
    - **跨任务迁移**：在数据量极少的想象语音任务上，预训练带来的性能提升比尝试语音更显著，且跨物种预训练比单任务有监督预训练效果更好。代表结果见下表：

| 方法 | Brain-to-Text ‘24 WER (非集成) | Brain-to-Text ‘24 WER (集成) | Brain-to-Text ‘25 WER (非集成) | Brain-to-Text ‘25 WER (集成) |
| :--- | :--- | :--- | :--- | :--- |
| **BIT (级联)** | **6.35%** | **5.10%** | **4.06%** | **1.76%** |
| **BIT (端到端)** | **15.67%** | **10.22%** | **11.06%** | **7.76%** |
| 之前最佳级联 (Feghhi et al., 2025) | 7.98% | 5.68% | - | - |
| 之前最佳端到端 (Feng et al., 2024) | 24.69% | - | - | - |

5.  **实际意义**：为瘫痪患者的高精度交流提供了新的端到端技术路径，证明了基础模型思想在神经解码中的有效性，并为跨模态（神经-文本/音频）对齐研究提供了新范式。
6.  **主要局限性**：a) 端到端推理速度（~0.95秒/句）慢于级联（~0.24秒/句），难以实时应用；b) 高度依赖大规模、高质量的预训练数据，而人类侵入式BCI数据获取成本极高；c) 跨物种（猴）数据带来的增益有限，数据价值更多体现在物种内部的多样性。

---

### 89. [RoboOmni: Proactive Robot Manipulation in Omni-modal Context](/audio-paper-digest-blog/posts/2026-05-04-roboomni-proactive-robot-manipulation-in-omni)

✅ **7.5/10** | 前25% | #机器人操作 | #端到端 | #多模态模型 #数据集

👥 **作者与机构**

- 第一作者：Siyin Wang（复旦大学、上海创新研究院）
- 通讯作者：Jinlan Fu（未说明具体机构，对应邮箱jinlanjonna@gmail.com），Xipeng Qiu（复旦大学、上海创新研究院）
- 作者列表：
    - Siyin Wang（复旦大学、上海创新研究院）
    - Jinlan Fu（国家大学新加坡）
    - Feihong Liu（复旦大学）
    - Xinzhe He（复旦大学）
    - Huangxuan Wu（复旦大学）
    - Junhao Shi（复旦大学、上海创新研究院）
    - Kexin Huang（复旦大学）
    - Zhaoye Fei（复旦大学）
    - Jingjing Gong（上海创新研究院）
    - Zuxuan Wu（复旦大学、上海创新研究院）
    - Yu-Gang Jiang（复旦大学）
    - See-Kiong Ng（国家大学新加坡）
    - Tat-Seng Chua（国家大学新加坡）
    - Xipeng Qiu（复旦大学、上海创新研究院）

💡 **毒舌点评**

这篇论文的亮点在于其极具前瞻性的选题——让机器人从多模态对话和环境音中“听出”意图并主动询问，而非被动接受指令，这比单纯提升操作成功率更有意义。然而，其真实世界评估仅在单一机器人平台（WidowX 250S）上进行，且失败分析显示执行错误（如抓取失败）占比过半，凸显了当前端到端模型在感知推理与底层控制能力之间的巨大鸿沟，离“家庭管家”的理想距离尚远。

🔗 **开源详情**

- **代码**：论文提供了GitHub仓库链接：`https://github.com/OpenMOSS/RoboOmni`，表明计划开源。
- **模型权重**：论文中提到“make all our datasets and code publicly available”，暗示模型权重也可能开源，但未明确说明具体开源哪些检查点。
- **数据集**：明确将开源OmniAction数据集和OmniAction-LIBERO基准。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文在第5.1节详细说明了训练细节（硬件、批大小、学习率、训练时长等），并在附录中提供了数据构建、基线模型、失败分析等补充信息，复现信息较为充分。
- **论文中引用的开源项目**：论文依赖或对比了多个开源项目，包括OpenVLA, π0, NORA, LIBERO, Open-X Embodiment, Whisper, Qwen2.5-Omni, DINOv2, SigLIP, PaliGemma, FAST+分词器等。

📌 **核心摘要**

1.  **问题**：现有VLA模型主要依赖明确的文字或语音指令，但真实人机交互中，用户意图往往隐含在对话、语气、环境音等多模态上下文中，机器人需要具备主动推理和确认的能力。
2.  **方法核心**：提出RoboOmni框架，采用Perceiver-Thinker-Talker-Executor四模块端到端架构，直接处理原始音频（语音+环境音）和视觉输入，通过统一的token空间联合建模，实现意图识别、语音交互和动作生成。
3.  **创新之处**：1）定义了“跨模态上下文指令”新范式；2）设计了端到端的多模态感知-推理-交互-执行框架，避免了级联系统的信息损失；3）构建了首个大规模、多说话人、多声音事件的机器人操作数据集OmniAction（140k episodes）。
4.  **实验结果**：在OmniAction-LIBERO-TTS模拟基准上，RoboOmni平均成功率85.6%，大幅超越最强基线NORA（25.9%）。在真实人类语音指令（OmniAction-LIBERO-Real）上，成功率76.6%，优于π0（73.8%）。消融实验显示，移除音频、视觉或副语言线索会显著降低意图识别准确率（从88.89%降至11.11%-58.89%）。
5.  **实际意义**：推动了更自然、主动的人机协作机器人发展，其方法和数据集对多模态具身智能研究有重要价值。
6.  **主要局限**：真实世界评估场景和机器人平台单一；执行层面的失败率（如抓取、定位）仍较高，表明底层控制能力是瓶颈；生成对话和动作的长期连贯性与复杂性有待进一步验证。

---

### 90. [Seeing, Listening, Remembering, and Reasoning: A Multimodal Agent with Long-Term Memory](/audio-paper-digest-blog/posts/2026-05-04-seeing-listening-remembering-and-reasoning-a)

✅ **7.5/10** | 前25% | #多模态模型 | #强化学习 | #在线处理 #记忆机制

👥 **作者与机构**

- 第一作者：Lin Long (Zhejiang University, Bytedance Seed)
- 通讯作者：Yuan Lin (Bytedance Seed)
- 作者列表：Lin Long (Zhejiang University, Bytedance Seed)、Yichen He (Bytedance Seed)、Wentao Ye (Zhejiang University)、Yiyuan Pan (Robotics Institute, Carnegie Mellon University)、Yuan Lin (Bytedance Seed)、Hang Li (Bytedance Seed)、Junbo Zhao (Zhejiang University)、Wei Li (Bytedance Seed)

💡 **毒舌点评**

本文最大的亮点在于构建了一个“类人记忆”的闭环系统，并发布了极具针对性的评测集M3-Bench，直指当前智能体长期记忆能力评估的空白。但其记忆系统的动态更新与冲突解决机制（如权重投票）描述过于简略，实际大规模部署时的鲁棒性与效率存疑。

🔗 **开源详情**

- **代码**：论文承诺开源代码，包括记忆化与控制流程、工具实现、演示数据合成流程等，代码仓库链接为 `https://github.com/ByteDance-Seed/m3-agent`。
- **模型权重**：论文承诺公开记忆化模型（`memory-7b-sft`）和控制模型（`control-32b-rl`）的检查点。
- **数据集**：论文承诺公开完整的M3-Bench数据集（含所有机器人视角和网络视频、问答标注及评估脚本）。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文提供了详细的训练超参数（如DAPO参数见附录表14）、训练数据规模、评估脚本（使用GPT-4o自动评估器），以及在附录中提供了大量提示模板和实现细节，复现信息充分。
- **论文中引用的开源项目**：InsightFace（人脸识别）、ERes2NetV2（说话人验证模型）、OpenAI text-embedding-3-large（文本嵌入）、Qwen2.5-Omni、Qwen3等。

📌 **核心摘要**

1. **解决的问题**：现有大型多模态智能体缺乏类似人类的、可持续积累和检索的长期记忆能力，难以在复杂、动态的真实环境中进行深度理解与推理。
2. **方法核心**：提出M3-Agent框架，包含“记忆化”和“控制”两个并行过程。记忆化过程持续处理音视频流，生成并更新实体中心（Entity-centric）的情景记忆和语义记忆，构建长期记忆图。控制过程则通过强化学习训练的策略模型，进行多轮推理并自主检索相关记忆以完成指令任务。
3. **与已有方法相比新在哪里**：不同于传统针对有限时长视频的离线理解方法，M3-Agent设计为在线处理无限长流；不同于标准检索增强生成（RAG）的单轮检索，其控制策略通过强化学习实现多轮迭代推理与记忆访问；其记忆结构以实体为中心，整合多模态信息（人脸、语音、文本），以维持跨时间的一致性和深度。
4. **主要实验结果**：在全新的M3-Bench（含100个机器人视角视频和920个网络视频）及VideoMME-long上，M3-Agent均取得最优。与最强基线（Gemini-1.5-pro + GPT-4o提示智能体）相比，M3-Agent在M3-Bench-robot、M3-Bench-web和VideoMME-long上分别提升了6.7%、7.7%和5.3%的准确率。消融实验证实了长期记忆（尤其是语义记忆）、强化学习训练和多轮推理的重要性。

| 方法 | M3-Bench-robot (All) | M3-Bench-web (All) | VideoMME-Long |
| :--- | :---: | :---: | :---: |
| Gemini-GPT4o-Hybrid (最强基线) | 24.0 | 41.2 | 56.5 |
| **M3-Agent (本文)** | **30.7** | **48.9** | **61.8** |

![M3-Bench与其他长视频问答基准的对比](icassp-img://PMz29A7Muq/6.png)
*图7：M3-Bench与其他长视频问答基准（LVQA）的对比，展示了其在是否包含智能体、跨模态QA、人物理解QA和知识QA等维度上的独特性。*

5. **实际意义**：为构建能持续感知、学习并推理的具身智能体提供了可落地的框架，并建立了评估此类智能体关键能力的标准。
6. **主要局限性**：记忆的增量更新与权重投票机制细节有待完善；视觉记忆的效率（如视频帧采样与特征提取）可能成为瓶颈；实验主要集中在问答任务，对连续任务执行的验证不足。

---

### 91. [Human or Machine? A Preliminary Turing Test for Speech-to-Speech Interaction](/audio-paper-digest-blog/posts/2026-05-04-human-or-machine-a-preliminary-turing-test-for)

✅ **7.5/10** | 前25% | #语音对话系统 | #模型评估 | #基准测试 #多模态模型

👥 **作者与机构**

- 第一作者：Xiang Li（北京邮电大学网络与交换技术国家重点实验室，深圳大数据研究院，香港中文大学（深圳），深圳环域研究院）
- 通讯作者：Jiale Han（香港科技大学）
- 作者列表：Xiang Li（北京邮电大学网络与交换技术国家重点实验室，深圳大数据研究院，香港中文大学（深圳），深圳环域研究院），Jiabao Gao（香港中文大学（深圳）），Sipei Lin（香港中文大学（深圳）），Xuan Zhou（香港中文大学（深圳）），Chi Zhang（香港中文大学（深圳）），Bo Cheng（北京邮电大学网络与交换技术国家重点实验室），Jiale Han（香港科技大学），Benyou Wang（深圳大数据研究院，香港中文大学（深圳），深圳环域研究院）

💡 **毒舌点评**

亮点是首次对语音到语音系统进行了图灵测试，并构建了一个包含18个细粒度维度的诊断框架，不仅指出了“通过/失败”，更深入剖析了“为何失败”，将瓶颈精准定位在非语义层面。短板在于，作为开创性工作，其评估的S2S系统数量和对话场景多样性仍有限，且伪人对话的脚本部分由GPT-4o生成，可能引入了额外的偏差。

🔗 **开源详情**

-   **代码**：论文中提供了GitHub仓库链接：https://github.com/Carbohydrate1001/Turing-Test。
-   **模型权重**：论文中明确提到公开了模型（“Our code, dataset, and model are publicly available”），但未直接提供权重下载链接，需从上述GitHub仓库获取。
-   **数据集**：论文中明确提到公开了数据集，同样需从上述GitHub仓库获取。
-   **Demo**：论文中提到了部署了一个游戏化的在线评测平台，但未提供公开的在线演示链接。
-   **复现材料**：提供了极其详细的复现信息，包括：
    -   数据收集的完整流程、参与者画像、初始化策略（附录B）。
    -   Turing测试平台的设计细节（附录C）。
    -   18个细粒度维度的定义、标注指南、标注员信息及质量保证流程（附录D）。
    -   AI评委模型的训练框架、嵌入读取策略消融、模型消融、超参数调优（网格搜索与敏感性分析）的完整细节（附录E）。
-   **论文中引用的开源项目**：论文在构建伪人对话数据集时，引用了两个开源TTS模型：Nari Dia-1.6B (nari-labs, 2025) 和 Spark-TTS (Wang et al., 2025c)。在评估模型泛化性时，引用了CosyVoice2、Fisher和MultiDialog数据集。

📌 **核心摘要**

本文旨在回答一个关键问题：当前的语音到语音（S2S）系统能否像人类一样进行对话？为解决此问题，作者首次对S2S系统实施了图灵测试。核心方法是构建一个包含人-人、人-机和伪人（TTS合成）对话的高质量数据集，通过一个游戏化的在线平台收集了近3000次人类判断。与已有工作相比，新在于将图灵测试范式首次全面引入端到端S2S评估，并超越二元通过/失败的结论。主要实验结果显示，所有评估的9个最先进的S2S系统均未通过图灵测试，成功率最高仅为0.31（人类为0.87）。为了诊断失败原因，论文提出了一个包含5大类18个细粒度维度的“拟人度”分类法，并对数据进行了人工标注。分析表明，当前S2S系统的瓶颈不在语义理解（如逻辑连贯性、记忆一致性接近人类水平），而在于韵律特征（如节奏、重音）、情感表达不足以及过度恭维、书面化的“机械人格”。此外，论文探索了使用AI作为评委的可能性，发现9个现成多模态模型表现不佳，因此提出了一个基于Qwen2.5-Omni微调的可解释评委模型，该模型先预测18个细粒度维度分数，再通过线性分类器做出人/机判断，其在测试集上的二分类准确率达到96.05%，显著优于人类评委（72.84%）和基线模型。这项工作的意义在于为S2S系统建立了一个系统化的拟人度评估与诊断框架，并指明了超越语义理解、在副语言和情感个性化方面突破的研究方向。主要局限性是评估的系统和场景覆盖范围可能无法代表整个S2S领域，且伪人对话的脚本部分依赖大语言模型生成。

---

### 92. [Unified Multi-Modal Interactive and Reactive 3D Motion Generation via Rectified Flow](/audio-paper-digest-blog/posts/2026-05-04-unified-multi-modal-interactive-and-reactive-3d)

✅ **7.5/10** | 前25% | #动作生成 | #流匹配 | #检索增强 #多模态

👥 **作者与机构**

- 第一作者：Prerit Gupta (Purdue University, Department of Computer Science)
- 通讯作者：未说明（但Aniket Bera为最后作者，通常为通讯作者）
- 作者列表：Prerit Gupta (Purdue University), Shourya Verma (Purdue University), Ananth Grama (Purdue University), Aniket Bera (Purdue University)

💡 **毒舌点评**

亮点在于将交互和反应式双人动作生成统一到一个框架中，并创新性地为动作生成引入了基于LLM分解的检索增强生成，有效提升了语义对齐。短板在于该领域相对小众，实际应用场景（如VR/AR游戏）的验证可能有限，且模型参数量（456M）相比基线（224M）显著增大，提升了部署门槛。

🔗 **开源详情**

- **代码**：论文明确承诺将开源代码（“Full code for this project... will be made open source... upon paper acceptance”），但未提供具体链接。
- **模型权重**：承诺将提供训练好的检查点。
- **数据集**：使用了InterHuman-AS、DD100、MDD三个公开数据集，论文中给出了获取参考。
- **Demo**：未提及在线演示。
- **复现材料**：附录提供了详尽的LLM提示词设计、架构细节（公式）、损失权重配置、超参数选择等，复现信息充分。
- **引用的开源项目**：SMPL模型（动作表示），CLIP（文本编码），Jukebox（音乐编码），GPT-4o（文本分解），FlashAttention（加速）。

📌 **核心摘要**

1. **问题**：生成真实、与上下文相关的双人3D动作，需同时支持交互式（双向协调）和反应式（单向响应）两种模式，且能融合文本、音乐等多种模态条件输入，是当前计算机图形学和具身AI的挑战。
2. **方法**：提出DualFlow，首个基于矫正流匹配（Rectified Flow）的统一框架。通过可切换的“双流块”架构，同一模型可处理交互与反应任务；引入专为双人动作设计的检索增强生成模块，利用GPT-4o分解文本为空间关系、身体动作和节奏三类描述，并结合音乐特征检索动作范例，以增强生成动作的语义准确性；采用对比矫正流匹配目标，提升运动嵌入与条件信号的对齐度。
3. **创新**：(1) 统一架构实现交互与反应任务的无缝切换；(2) 首个用于双人动作的RAG框架；(3) 结合同步损失的对比矫正流匹配，提升生成质量与采样效率。
4. **实验结果**：在MDD、InterHuman-AS、DD100三个数据集上进行广泛评估。在MDD的交互任务上，DualFlow(Both)的R-Precision@3达0.513，MMDist为0.513；在反应任务上，FID为0.686，R-Precision@3为0.471，均优于基线。相比InterGen，DualFlow仅需20步（2.5倍加速）即可达到更优的FID。
5. **意义**：为VR/AR、游戏、社交机器人等需要协调人际行为的领域提供了高效且高质量的多模态动作生成方案。
6. **局限**：在长序列生成时可能存在节奏偏移；反应模式下可能出现轻微的肢体穿插；RAG检索质量依赖于库的覆盖度与查询的清晰度。

---

### 93. [Music Flamingo: Scaling Music Understanding in Audio Language Models](/audio-paper-digest-blog/posts/2026-05-04-music-flamingo-scaling-music-understanding-in)

✅ **7.5/10** | 前25% | #音乐理解 | #音频大模型 | #预训练 #强化学习

👥 **作者与机构**

- 第一作者：Sreyan Ghosh (University of Maryland, College Park & NVIDIA), Arushi Goel (NVIDIA) (论文注明二者同等贡献)
- 通讯作者：sreyang@umd.edu, arushig@nvidia.com
- 作者列表：Sreyan Ghosh (University of Maryland, College Park & NVIDIA)、Arushi Goel (NVIDIA)、Lasha Koroshinadze (University of Maryland, College Park)、Sang-gil Lee (NVIDIA)、Zhifeng Kong (NVIDIA)、Joao Felipe Santos (NVIDIA)、Ramani Duraiswami (University of Maryland, College Park)、Dinesh Manocha (University of Maryland, College Park)、Wei Ping (NVIDIA)、Mohammad Shoeybi (NVIDIA)、Bryan Catanzaro (NVIDIA)

💡 **毒舌点评**

论文的最大亮点是构建了一个覆盖多层次、多文化、带推理链的音乐理解数据集（MF-Skills & MF-Think），并通过GRPO强化学习有效提升了模型的“音乐家式”分析能力，使其输出从“列标签”升级到了“写乐评”。短板在于，尽管数据集声称覆盖多元文化，但模型在对非西方音乐（如印度拉格、非洲节奏）的深层理论分析上仍可能受限于训练数据的偏见，且对复杂乐器特定技法的识别能力有待验证。

🔗 **开源详情**

- **代码**：论文中提供了项目页面链接（https://research.nvidia.com/labs/adlr/MF/），并明确承诺在论文接受后开源代码、训练配方和数据集。
- **模型权重**：论文中未提及已公开的权重，但承诺将开源。
- **数据集**：MF-Skills和MF-Think数据集将作为论文贡献的一部分开源。
- **Demo**：论文中未提及在线演示链接。
- **复现材料**：提供了非常充分的复现材料，包括：完整的训练数据列表及组成（附录C表2）、各阶段训练的具体超参数设置（附录D表3）、所有评估基准和指标的细节、以及专家评估的歌曲和分析（附录E, F）。
- **论文中引用的开源项目**：依赖的开源工具/模型包括：Audio Flamingo 3（骨干网络）、Whisper（音频编码器基础）、madmom（节拍检测）、essentia（调性检测）、Chordino（和弦检测）、Parakeet（歌词识别）、gpt-oss-120b（用于数据生成和评估）等。
- **开源计划**：论文明确表示将在接受后发布所有关键资源，具有明确的开源计划。

📌 **核心摘要**

本论文旨在解决现有音频语言模型在音乐理解上的不足，包括输出描述表面化、缺乏深层推理、跨文化泛化能力弱等问题。核心方法是：1）策划了大规模、高质量、包含丰富标注（和声、结构、音色、歌词、文化背景）和问答对的音乐数据集MF-Skills；2）在增强的Audio Flamingo 3骨干网络上进行微调；3）提出了一个分阶段的后训练流程，首先使用基于音乐理论的思维链数据集MF-Think进行冷启动，然后采用带有自定义奖励的GRPO强化学习来增强模型的分步推理能力。与已有方法相比，新在将音乐理解重新定义为需要推理的复合任务，并提供了前所未有的大规模、深层次数据和专门的训练方案。主要实验结果是，Music Flamingo在12个音乐理解和推理基准测试上均达到最优，在MMAU-Pro-Music上准确率为65.60%（相比基线提升显著），在歌词转录任务上错误率（WER）大幅降低（例如中文12.9%）。该工作的实际意义是建立了一个更强大、可解释的音乐理解基础模型，推动了从表面识别到深层感知的范式转变。其主要局限性在于对低资源文化音乐的理解仍有差距，以及在某些精细乐器技巧识别上存在不足。

---

### 94. [Speech World Model: Causal State–Action Planning with Explicit Reasoning for Speech](/audio-paper-digest-blog/posts/2026-05-04-speech-world-model-causal-stateaction-planning)

✅ **7.5/10** | 前25% | #语音情感识别 | #因果图 | #显式推理 #语音大模型

👥 **作者与机构**

- 第一作者：Xuanru Zhou (浙江大学), Jiachen Lian (UC Berkeley) (论文明确标注两位作者贡献均等)
- 通讯作者：未明确说明
- 作者列表：Xuanru Zhou (浙江大学), Jiachen Lian (UC Berkeley), Henry Hong (UC Berkeley), Xinyi Yang (浙江大学), Gopala Anumanchipalli (UC Berkeley)

💡 **毒舌点评**

亮点是将认知科学的模块化思想形式化为一个可计算的因果图（WMA, ToM, SA, Prag），并利用其结构化先验显著提升了训练效率和推理能力，为“如何让语音模型像人一样思考”提供了一个新颖的框架。短板在于，该因果图的结构是预定义的，限制了模型对未见依赖关系的适应能力，且完全依赖合成标签训练指令微调阶段，可能成为性能上限的瓶颈。

🔗 **开源详情**

- **代码**：论文中提及将开源代码，但未提供具体仓库链接。（原文：“we will open source the model and data”）
- **模型权重**：论文中提及将开源模型，但未提供具体下载链接。
- **数据集**：使用了MELD, IEMOCAP, SLURP, VoxCeleb四个公开数据集，并通过Vicuna生成了部分伪标签数据。未提及是否会发布生成的伪标签数据集。
- **Demo**：提供了Demo音频链接：http://bit.ly/4pBJuWP。
- **复现材料**：提供了极其详尽的附录，涵盖模型架构细节（A.7）、训练配置（A.5）、损失函数与算法（A.2， A.8）、评估指标公式与算法（A.8）、数据集统计与标签空间（A.4）、以及用于指令微调的完整提示模板（A.5.2, A.9）。
- **论文中引用的开源项目**：WavLM, distil-BERT, opensmile, Vicuna-13b-v1.5, LoRA, Llama3.1-8B, Qwen2-Audio。

📌 **核心摘要**

1.  **解决的问题**：当前语音语言模型（SLMs）多为黑箱式级联架构，虽擅长内容分析，但在需要复杂推理的场景（如情感、意图推断）下表现薄弱，且推理过程不透明，易产生幻觉。
2.  **方法核心**：提出“语音世界模型”（SWM），将语音理解分解为四个认知模块：**世界模型激活**（情境）、**心智理论**（说话者情绪）、**言语行为**（沟通功能）和**语用意图**（深层目的）。这些模块通过一个预定义的**因果图**连接，模拟人类语音感知中状态的因果依赖。系统首先训练此因果图以建立认知状态搜索空间，然后将其输出（各模块状态）作为显式提示，指导经过指令微调的语言模型生成逐步推理链和最终回复。
3.  **创新之处**：与传统SLMs和基于思维链的启发式方法不同，SWM首次提出并实现了基于认知原理的**图结构化语音理解模型**。其创新在于：(1) 显式建模语音理解的因果动态，(2) 通过图结构实现半监督学习（从标注不全的数据中学习），(3) 将结构化状态作为“锚点”引导大语言模型进行更可靠、可解释的推理。
4.  **主要实验结果**：
    *   **图评估**：所提因果图相比随机图，训练速度快约5倍（2.07小时 vs. 10.39小时），且在因果效应（ACE/ICS）上更稳定。半监督设置下，未标注模块能通过因果结构被有效推断。
    *   **指令微调**：在多项推理指标（Model-as-Judge评分）上，SWM显著超越了Qwen2-Audio等开源基线及CoT微调基线。在情感识别等任务上甚至超过GPT-4o，整体性能接近Gemini 2.5 Pro，但训练成本极低（仅20 GPU小时）。关键对比结果见下表。

| 模型 | 提示风格 | 总体M.J.分数 (0.6*推理 + 0.4*回复) ↑ | 推理分数 ↑ | 情感分类准确率 ↑ |
| :--- | :--- | :--- | :--- | :--- |
| **我们的模型 (SWM, Llama3.1-8b)** | CoT | **7.81** | **7.84** | **66.26** |
| **我们的模型 (SWM, Qwen2-Audio)** | CoT | **7.59** | 7.26 | **71.02** |
| Qwen2-Audio-CoT (基线微调) | CoT | 5.18 | 4.76 | 34.72 |
| Qwen2-Audio (开源) | CoT | 2.39 | 1.96 | 17.50 |
| Voxtral (开源) | CoT | 2.92 | 2.52 | 5.56 |
| GPT-4o (商业) | CoT | 7.41 | 6.98 | 45.16 |
| Gemini 2.5 Pro (商业) | CoT | 8.12 | 8.02 | 51.29 |

5.  **实际意义**：为构建更高效、可解释且推理能力更强的语音AI系统提供了新范式。它证明了引入认知结构的先验知识，能让小模型以极低的成本获得与庞大商业模型竞争的能力。
6.  **主要局限性**：(1) 当前仅使用四个模块，可能无法覆盖所有语音动态。(2) 因果图结构是预定义的，缺乏自适应性。(3) 依赖合成标签生成训练数据，可能引入偏差。

---

### 95. [SNAP-UQ: Self-supervised Next-Activation Prediction for Single-Pass Uncertainty in TinyML](/audio-paper-digest-blog/posts/2026-05-04-snap-uq-self-supervised-next-activation)

✅ **7.5/10** | 前25% | #音频分类 | #自监督学习 | #低资源 #模型评估

👥 **作者与机构**

- 第一作者：Ismail Lamaakal（Mohammed First University, Multidisciplinary Faculty of Nador）
- 通讯作者：未说明（论文中未明确标注通讯作者）
- 作者列表：
    - Ismail Lamaakal*（Mohammed First University, Multidisciplinary Faculty of Nador）
    - Chaymae Yahyati*（Mohammed First University, Multidisciplinary Faculty of Nador）
    - Khalid El Makkaoui（Mohammed First University, Multidisciplinary Faculty of Nador）
    - Ibrahim Ouahbi（Mohammed First University, Multidisciplinary Faculty of Nador）
    - Yassine Maleh（Sultan Moulay Slimane University, Laboratory LaSTI）
（*表示共同第一作者）

💡 **毒舌点评**

论文的亮点在于将“不确定性”这个通常需要复杂计算的概念，巧妙地转化为对网络内部“可预测性”的衡量，并以此构建了一个极度轻量、无需额外状态、完美适配MCU的单次推理方案，实用性极强。但其短板是“自监督”的标签略有牵强，更像是为不确定性估计任务设计的辅助回归损失；此外，论文对tap位置选择、rank大小等关键设计选择的敏感性分析不够深入，给实际部署时的调优留下了“黑箱”。

🔗 **开源详情**

- **代码**：论文中提供了代码仓库链接：https://github.com/Ism-ail11/SNAP-UQ。
- **模型权重**：未提及是否公开预训练模型权重。
- **数据集**：使用的是公开数据集（MNIST, CIFAR-10, TinyImageNet, SpeechCommands v2），论文未提及公开自定义数据集。
- **Demo**：未提及。
- **复现材料**：提供了非常充分的复现材料。包括：完整的算法伪代码（Algorithm 1 & 2）；附录中详细说明了数据集预处理（A）、训练/校准/构建细节（B）、基线调优（C）、腐蚀/OOD协议（D）和评估指标（F）。论文中列出了所有关键超参数及其选择范围。提供了代码仓库链接。
- **引用的开源项目**：论文依赖TensorFlow Lite Micro、CMSIS-NN等TinyML工具链，并引用了多个基线方法的开源实现（如Temperature Scaling, Mahalanobis）。

📌 **核心摘要**

1. **问题**：在资源极端受限的微控制器（MCU）上部署的TinyML模型，缺乏轻量、实时的在线不确定性估计能力，难以检测数据分布偏移、模型错误或性能下降，影响了边缘设备的鲁棒性和可靠性。
2. **方法核心**：提出SNAP-UQ，一种基于“自监督下一层激活预测”的单次前向传播不确定性估计方法。在主干网络的少数几层（“tap点”）附加小型预测头，用低维投影预测下一层激活的统计量（均值和方差），通过实际激活与预测值之间的“惊讶度”（标准化预测误差）来量化网络内部动态的异常程度，多个tap点的惊讶度聚合后经轻量单调映射得到最终不确定性分数。
3. **创新点**：与依赖多次前向传播（如MC Dropout）、集成模型或依赖输出层置信度的方法不同，SNAP-UQ完全基于单次前向传播中网络内部层的动态变化构建不确定性信号，无需状态缓冲、额外分支或架构修改，且所有运算为整数友好型（int8量化），增量部署开销仅几十KB Flash和<2%额外计算。
4. **主要实验结果**：
    - **可部署性**：在Big-MCU和Small-MCU上，SNAP-UQ相比基线EE-ens和DEEP，Flash占用减少37%-57%，延迟降低24%-35%，能耗降低约20-30%，并在CIFAR-10任务的Small-MCU上，基线因内存溢出无法运行而SNAP-UQ仍可部署（见表1）。
    - **监控与检测**：在损坏数据流上，SNAP-UQ的精度下降检测AUPRC（如MNIST-C上0.66）优于所有基线（见表2），且随腐蚀严重度增加提升最快（见图2）。在故障检测（ID✓— ID×, ID✓— OOD）任务上，SNAP-UQ在多个数据集上取得最高或并列最高的AUROC（如SpeechCommands上ID✓— ID×为0.94，见表3）。
    - **校准**：在分布内（ID）数据上，SNAP-UQ的NLL、Brier Score和ECE相比基线BASE和温度缩放均有改善（见表4）。
5. **实际意义**：为TinyML生态系统提供了一种即插即用的在线监控工具，可在不增加显著资源开销的前提下，提升部署在MCU上的AI应用的可信度和安全性，适用于传感器漂移、环境变化等现实场景。
6. **主要局限性**：方法依赖于能访问和附加在主干网络的中间层激活上；使用对角/低秩协方差可能无法完全建模复杂的跨通道相关性；性能对tap点位置和投影器秩的选择有一定敏感性。

---

### 96. [Omni-Captioner: Data Pipeline, Models, and Benchmark for Omni Detailed Perception](/audio-paper-digest-blog/posts/2026-05-04-omni-captioner-data-pipeline-models-and-benchmark)

✅ **7.5/10** | 前25% | #音频场景理解 | #多模态模型 | #视频描述 #基准测试

👥 **作者与机构**

- 第一作者：Ziyang Ma（上海交通大学，南洋理工大学）
- 通讯作者：Jin Xu（阿里巴巴通义团队），Xie Chen（上海交通大学，上海创新研究院）
- 作者列表：
    - Ziyang Ma（上海交通大学，南洋理工大学）*
    - Ruiyang Xu（上海交通大学）*
    - Zhenghao Xing（香港中文大学）*
    - Yunfei Chu（阿里巴巴通义团队）
    - Yuxuan Wang（阿里巴巴通义团队）
    - Jinzheng He（阿里巴巴通义团队）
    - Jin Xu†（阿里巴巴通义团队）
    - Pheng-Ann Heng（香港中文大学）
    - Kai Yu（上海交通大学）
    - Junyang Lin（阿里巴巴通义团队）
    - Eng Siong Chng（南洋理工大学）
    - Xie Chen‡（上海交通大学，上海创新研究院）

💡 **毒舌点评**

**亮点**：论文针对多模态细粒度感知中“描述越详细，幻觉越多”的核心矛盾，提出了一个从“侦探”式数据生成到两阶段模型训练，再到全新填空式评估基准的完整解决方案框架，逻辑闭环非常扎实。
**短板**：虽然设计了智能体数据管线，但其质量上限仍受限于所调用的闭源模型（如Gemini 2.5 Pro）的能力，本质上是用更强的闭源模型给开源模型生成训练数据，创新中略带一丝“取巧”；新基准Omni-Cloze虽然高效，但其“填空”形式与自由生成任务仍有一定差距。

🔗 **开源详情**

- **代码**：是，提供GitHub仓库链接：https://github.com/ddlBoJack/Omni-Captioner
- **模型权重**：是，论文中提及开源Audio-Captioner和Omni-Captioner模型。
- **数据集**：是，论文中明确表示将开源由Omni-Detective管线生成的数据集。
- **Demo**：论文中未提及。
- **复现材料**：充分。附录A提供了完整的训练超参数（GPU型号、batch size、学习率、训练时长等），附录B提供了Omni-Cloze数据集的详细统计和生成Prompt，附录C提供了详细的评估设置。
- **论文中引用的开源项目**：Qwen-2.5-Omni（骨干模型），VGGSound和FineVideo（部分源数据）。

📌 **核心摘要**

本文针对多模态大语言模型（OLMs）在进行细粒度描述时存在的“细节与幻觉共生增长”问题，从数据、模型、评估三个层面提出系统性解决方案。
1.  **问题**：研究发现，当前OLMs生成的描述越详细，其中包含的正确细粒度信息与幻觉内容（错误信息）都会同步增长，这严重限制了模型在需要高精度描述场景的应用。
2.  **方法核心**：提出了一种名为Omni-Detective的智能体数据生成管线。该管线模拟侦探调查过程，通过LLM智能体多轮调用OCR、ASR、MLLM等工具，迭代地从音视频数据中搜集证据并交叉验证，最终生成高细节、低幻觉的标注数据。
3.  **新方法**：基于Omni-Detective生成的数据，采用两阶段课程学习策略训练模型。第一阶段冻结视觉编码器，专注对齐音频细节；第二阶段联合优化所有模态。最终训练出Audio-Captioner（纯音频）和Omni-Captioner（音视频）。此外，设计了全新的填空式评估基准Omni-Cloze，覆盖纯音频、纯视觉和音视频三种模态。
4.  **主要实验结果**：Omni-Captioner在VDC基准上取得55.0%准确率的新SOTA；在video-SALMONN 2测试集上，以10.9%的幻觉率和17.8%的缺失率实现了最佳权衡（见Table 2）。Audio-Captioner在MMAU上达到70.0%准确率，媲美Gemini 2.5 Pro（见Table 3a）。在自建的Omni-Cloze基准上，Omni-Captioner总准确率56.4%，显著领先所有基线（见Table 4b）。
5.  **实际意义**：为多模态模型的细粒度感知研究提供了高质量数据生成范式、更强的模型基线以及更可靠、高效的评估标准，有望推动更精准、更全面的音视频理解技术发展。
6.  **主要局限性**：评估基准Omni-Cloze虽然是填空式，但最终仍依赖LLM进行答案匹配，引入了新的评估不确定性。数据生成管线的质量与效率高度依赖底层工具模型的性能，存在一定的能力天花板。

---

### 97. [Learning multimodal dictionary decompositions with group-sparse autoencoders](/audio-paper-digest-blog/posts/2026-05-04-learning-multimodal-dictionary-decompositions)

✅ **7.5/10** | 前25% | #跨模态检索 | #自监督学习 | #多模态模型 #零样本

👥 **作者与机构**

- 第一作者：Chiraag Kaushik（Georgia Institute of Technology, School of Electrical and Computer Engineering）
- 通讯作者：未说明（论文中未明确标注通讯作者）
- 作者列表：Chiraag Kaushik（Georgia Institute of Technology）、Davis Barch（Dolby Laboratories）、Andrea Fanelli（Dolby Laboratories）

💡 **毒舌点评**

这篇论文理论与实践结合得不错，Theorem 1为“分裂字典”问题提供了理论保证，而提出的组稀疏+掩码方案在CLIP/CLAP上也确实有效提升了多模态概念的数量和语义性。但最大的短板是实验上缺乏代码开源，对于一篇方法论论文来说，这大大削弱了其即时影响力和社区复现验证的价值，使得“方法有效性”部分打了折扣。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及公开训练好的SAE/GSAE/MGSAE模型权重。
- 数据集：使用了公开数据集（CC3M, JamendoMaxCaps, MusicBench等），论文中未说明是否提供额外的处理脚本。
- Demo：未提及在线演示。
- 复现材料：论文在附录A.2中提供了较为详细的实验设置，包括数据集、超参数范围选择方法、训练步数等，有助于复现。
- 论文中引用的开源项目：引用了`dictionary_learning`工具库（Marks et al., 2024）作为TopK SAE的实现基础。

📌 **核心摘要**

这篇论文旨在解决稀疏自编码器（SAE）应用于多模态对齐嵌入（如CLIP）时产生的“分裂字典”问题，即学习到的稀疏特征大多只对单一模态激活，损害了跨模态对齐。核心方法包括：理论上证明了在对齐嵌入空间上，存在比分裂字典对齐性更好的非分裂字典；提出组稀疏自编码器（GSAE）和掩码组稀疏自编码器（MGSAE），通过组稀疏损失（鼓励配对样本的稀疏码具有相同支撑集）和跨模态随机掩码来引导学习多模态字典。与标准SAE相比，该方法显著增加了跨模态激活的神经元数量，减少了“死神经元”，并提升了跨模态零样本任务的性能。例如，在CLIP图像/文本任务上，MGSAE在CIFAR-10上的零样本分类准确率达到84.2%，比标准TopK SAE高出18.5个百分点；在CLAP音频/文本任务上，MGSAE在NSynth乐器分类上达到35.4%，远超SAE的26.5%。该工作的实际意义在于为多模态模型的可解释性分析和可控生成提供了更好的分解工具，其主要局限是依赖配对的多模态数据进行训练，且未提供开源代码。

---

### 98. [Beyond Instance-Level Alignment: Dual-Level Optimal Transport for Audio-Text Retrieval](/audio-paper-digest-blog/posts/2026-05-04-beyond-instance-level-alignment-dual-level)

✅ **7.5/10** | 前25% | #音频检索 | #最优传输 | #对比学习 #跨模态

👥 **作者与机构**

- 第一作者：Wenqi Guo（上海交通大学）
- 通讯作者：Shikui Tu（上海交通大学），Lei Xu（上海交通大学，广东省人工智能与数字经济实验室（深圳））
- 作者列表：Wenqi Guo（上海交通大学）、Shikui Tu（上海交通大学）、Lei Xu（上海交通大学，广东省人工智能与数字经济实验室（深圳））

💡 **毒舌点评**

**亮点**：论文从“特征通道可靠性”这一细粒度视角切入，用最优传输的语言重新定义了跨模态对齐问题，理论推导（集中界分析）为小批次下的不稳定性提供了有说服力的解释，这比单纯堆砌模块更显功力。**短板**：虽然实验全面，但核心创新（双层对齐+可靠性边际）的物理直觉略显复杂，且声称“特征级OT计算开销可忽略”这一论断，在真实部署场景（如视频检索、超长音频）下的泛化能力值得商榷。

🔗 **开源详情**

- **代码**：论文中未提及代码链接。附录A提供了伪代码，但未指明完整实现代码的发布渠道。
- **模型权重**：未提及。
- **数据集**：使用了公开的AudioCaps、Clotho、ESC-50数据集，但论文中未提供获取链接或特殊处理说明。
- **Demo**：未提及。
- **复现材料**：论文附录提供了极其详细的超参数设置（表6）、训练算法伪代码、理论证明、数据集统计、评估指标定义等，复现所需的信息非常充分。
- **论文中引用的开源项目**：未明确列出。提到了使用预训练的编码器（如ResNet38, BERT, Beats等），但未指定具体版本或来源。
- **总体评估**：论文具备高质量的复现指南，但缺少最直接的开源代码和权重链接，对快速复现构成障碍。**论文中未提及明确的开源计划。**

📌 **核心摘要**

1. **问题**：现有的跨模态检索方法（如对比学习、逆最优传输IOT）主要进行实例级对齐，隐含假设所有嵌入维度同等重要。在小批次训练中，这种假设会放大噪声和偏差，导致对齐信号不稳定。
2. **方法核心**：提出DART（双层对齐鲁棒传输）框架。它在实例级保留IOT目标以对齐样本对，同时引入**特征级**正则化。该正则化将每个特征维度视为一个分布，并使用**非平衡Wasserstein距离（UWD）** 来对齐音频和文本的特征分布。此外，设计了**可靠性感知边际（RAM）**，基于方差、峰度和跨模态相关性动态加权特征通道，抑制噪声通道。
3. **与已有方法相比新在哪里**：1）超越单一的实例级对齐，增加特征级分布对齐，提供细粒度的正则化。2）RAM能自适应地识别并强调跨模态一致且稳定的语义通道。3）提供了理论分析，证明实例级损失受最大距离控制，而特征级损失受传输计划的Frobenius范数控制，后者在小批次下更鲁棒。
4. **主要实验结果**：在AudioCaps和Clotho两个主要基准上，DART在多个编码器设置下均达到或超越SOTA。例如，在AudioCaps（ResNet38+BERT）上，相比最强基线Luong et al. (2024)，文本到音频检索R@1提升1.1个百分点，音频到文本提升4.5个百分点。在模拟小批次（k=8, 32）和噪声/半监督标签（20%，40%）的严苛条件下，DART展现出显著更强的鲁棒性。详见下表。

| 条件 | 方法 | 文本->音频 (R@1) | 音频->文本 (R@1) |
| :--- | :--- | :--- | :--- |
| **标准设置** (Batch=256, AuC) | Luong et al. (2024) | 39.10 | 49.94 |
| | DART w/ RAM | **41.67** | **55.27** |
| **小批次** (Batch=8, AuC) | Luong et al. (2024) | 20.44 | 32.91 |
| | DART (LIOT+LUWD) | **24.24** | **35.21** |
| **40%噪声标签** (Batch=32, AuC) | Luong et al. (2024) | 26.20 | 34.37 |
| | DART | **29.67** | **37.09** |
| **零样本声音事件检测** (ESC-50) | IOT (Luong et al.) | - | 79.25 (R@1) |
| | DART | - | **80.75** (R@1) |

5. **实际意义**：该方法为在资源受限（小批次、标注稀缺）或噪声数据环境下的跨模态检索提供了更鲁棒的解决方案，具有实际部署价值。其思想可推广至其他跨模态任务（如图文检索已验证）。
6. **主要局限性**：特征级OT的计算复杂度随特征维度平方增长，虽在文中声称开销小，但在超高维嵌入或极大批次下可能成为瓶颈；理论分析基于一系列理想化假设，与实际情况可能有差距。

---

### 99. [Confident and Adaptive Generative Speech Recognition via Risk Control](/audio-paper-digest-blog/posts/2026-05-04-confident-and-adaptive-generative-speech)

✅ **7.5/10** | 前25% | #语音识别 | #生成模型 | #大语言模型 #不确定性量化

👥 **作者与机构**

- 第一作者：Amit Damri (特拉维夫大学电气与计算机工程学院)
- 通讯作者：Bracha Laufer-Goldshtein (特拉维夫大学电气与计算机工程学院)
- 作者列表：Amit Damri (特拉维夫大学电气与计算机工程学院)、Bracha Laufer-Goldshtein (特拉维夫大学电气与计算机工程学院)

💡 **毒舌点评**

这篇论文把“先学习后测试”这一风险控制工具玩明白了，用在ASR纠错里动态调整假设集大小，理论上很优雅，也确实省了不少计算。但它的“自适应”更像一个聪明的调参模块，而非解决语音识别核心难题的“银弹”，实际部署可能还得先过数据集校准这一关，通用性有待观察。

🔗 **开源详情**

- **代码**：论文明确提供了代码仓库链接：https://github.com/amitdamritau/adaptive-ger。
- **模型权重**：论文未提及公开模型权重。训练使用的是公开的LLaMA-2-7B/13B模型及LoRA微调，但未提供微调后的权重。
- **数据集**：使用了公开的HyPoradise基准数据集（TedLium-3， CHiME-4， CommonVoice）和FLEURS数据集，论文说明了数据获取方式和划分。
- **Demo**：论文中未提及在线演示。
- **复现材料**：在附录C中提供了详细的LLM训练配置，包括超参数（学习率、batch size、LoRA设置）、提示模板、计算硬件要求。在附录A中提供了风险控制实现的详细算法和参数选择策略。提供了充分的复现信息。
- **论文中引用的开源项目**：Whisper (Radford et al., 2023)， LLaMA-2 (Touvron et al., 2023)， PEFT库 (Mangrulkar et al., 2022)， evaluate库， HyPoradise基准 (Chen et al., 2023)， RobustGER (Hu et al., 2024a)， GenTranslate (Hu et al., 2024b)。

📌 **核心摘要**

1. **要解决什么问题**：现有的生成式语音识别纠错方法通常为所有输入使用固定数量的候选转录文本（N-best列表），这在简单输入上造成计算浪费，在复杂输入上可能引入低质量候选而降低纠错性能。同时，这些方法缺乏性能的理论保证。
2. **方法核心是什么**：提出一个自适应框架，利用ASR模型的置信度分数，动态决定每个音频输入应传递给LLM纠错模型的最优候选假设数量。核心是采用“学习后测试”框架，将候选集大小选择建模为风险控制问题，以可控的方式最小化相对于最佳可能性能（oracle）的预期性能退化。
3. **与已有方法相比新在哪里**：首次将无分布假设的风险控制理论（特别是LTT框架）应用于生成式ASR纠错。它从固定的N值选择转变为基于输入复杂度的自适应选择，并提供了预期性能退化有界的高概率理论保证。
4. **主要实验结果如何**：在HyPoradise基准的三个数据集（TedLium-3， CHiME-4， CommonVoice）上验证。结果表明，该方法平均可将假设集大小减少23%至52%，同时保持或略微提升（相对WER变化在-0.13%至+2.28%之间）纠错性能。风险控制成功率（超过理论最小值1-δ）得到实证验证。关键结果对比如下表所示：

| 测试集 | GER基线 WER (%) | 本文方法 Set Size | 本文方法 WER (%) | 相对大小减少 | 相对WER变化 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| TedLium-3 | 7.53 | 2.3 | 7.52 | 54% | -0.13% |
| CHiME-4 | 6.24 | 2.7 | 6.37 | 46% | +2.06% |
| CommonVoice | 8.32 | 1.9 | 8.51 | 62% | +2.28% |

5. **实际意义是什么**：为LLM增强的ASR纠错系统提供了一种高效且可靠的部署策略。通过动态分配计算资源（假设集大小），可以在不损害（甚至可能提升）识别质量的前提下，显著降低推理成本，对实时或资源受限的应用场景有价值。
6. **主要局限性是什么**：框架的性能依赖于对分数归一化参数（γ， τ）的先验选择，虽然论文探索了基于熵的自动化选择和Pareto测试的多参数联合优化，但在完全未知的声学条件下部署仍需校准。此外，该方法优化的是假设集选择环节，其效果受限于底层ASR和LLM纠错模型的固有能力。

---

### 100. [Can Speech LLMs Think while Listening?](/audio-paper-digest-blog/posts/2026-05-04-can-speech-llms-think-while-listening)

✅ **7.5/10** | 前25% | #语音对话系统 | #微调 | #语音大模型 #自回归模型

👥 **作者与机构**

- 第一作者：Yi-Jen Shih（The University of Texas at Austin, Meta Superintelligence Labs）
- 通讯作者：Michael L. Seltzer（Meta Superintelligence Labs）
- 作者列表：Yi-Jen Shih（The University of Texas at Austin, Meta Superintelligence Labs）、Desh Raj（Meta Superintelligence Labs）、Chunyang Wu（Meta Superintelligence Labs）、Wei Zhou（Meta Superintelligence Labs）、SK Bong（Meta Superintelligence Labs）、Yashesh Gaur（Meta Superintelligence Labs）、Jay Mahadeokar（Meta Superintelligence Labs）、Ozlem Kalinli（Meta Superintelligence Labs）、Michael L. Seltzer（Meta Superintelligence Labs）

💡 **毒舌点评**

这篇论文最大的亮点在于将“边听边想”从一个人机交互概念落实为一套可训练、可控制的技术方案，尤其是提出的“问题完整度”指标，巧妙地将语义完备性与生成时机联系起来。然而，一个显眼的短板是，其核心指标“问题完整度”的计算严重依赖于外部LLM（如Llama-3-8B-Chat）的预测概率，这在部署时可能带来额外的计算开销和延迟，且该指标的泛化能力（是否对不同LLM稳定）并未充分验证。

🔗 **开源详情**

*   **代码**：论文中未提及公开的代码仓库链接。
*   **模型权重**：未提及公开Moshi微调后的模型权重。
*   **数据集**：
    *   训练数据源：使用了公开的CoT-Collection数据集，并描述了详细的改写和TTS转换流程。
    *   评测基准：作者构建并公开了**SRQA（Spoken Reasoning QA）基准**，包含从ARC, PIQA, SIQA, GSM8K等转化而来的语音问答数据集（详见附录A.3），但论文未明确说明该基准的公开下载地址。
*   **Demo**：未提及在线演示。
*   **复现材料**：提供了非常充分的训练细节（超参数、硬件、损失函数）、评估方法（LLM-judge Prompt、VAD+Whisper流水线）以及大量定性结果示例，复现友好度高。
*   **引用的开源项目**：论文依赖并微调了开源的**Moshi**模型，并引用了**Llama-3**作为骨干和评估裁判、**Whisper**用于转录、**pyannote.audio**用于VAD、**Llama-2/3**和**Gemma**等作为文本基线对比。

📌 **核心摘要**

这篇论文旨在解决当前语音大语言模型（Speech LLMs）在复杂推理任务上表现不佳且响应延迟高的问题。作者提出通过在多流语音LLM（基于Moshi模型）的文本单声道流中进行思维链（CoT）微调来提升推理能力，并引入了“边听边想”范式以降低CoT带来的额外延迟。其核心创新在于：1) 首次系统探索了在多流架构中使用文本CoT进行微调；2) 提出一种基于KL散度的“问题完整度（QC）”指标，用于语义感知地判断何时可以开始推理；3) 利用DPO偏好优化，结合正确性和长度偏好数据，进一步优化了精度-延迟权衡。实验结果表明，CoT微调平均将语音推理任务的准确率提升2.4倍；QC指标比简单的词数偏移方法提供了更优的精度-延迟控制；最终通过DPO训练，在保持精度的同时将响应延迟降低了约70%。本文构建了首个语音推理问答基准（SRQA），并证明了文本CoT在效率上优于语音CoT。该工作推动了语音助手向更智能、响应更自然的对话代理迈进。

---

### 101. [AUHead: Realistic Emotional Talking Head Generation via Action Units Control](/audio-paper-digest-blog/posts/2026-05-04-auhead-realistic-emotional-talking-head)

✅ **7.5/10** | 前25% | #生成模型 | #扩散模型 | #动作单元 #大语言模型

👥 **作者与机构**

- 第一作者：Jiayi Lyu (中国科学院大学)
- 通讯作者：Jian Xue (中国科学院大学)
- 作者列表：
  - Jiayi Lyu (中国科学院大学)
  - Leigang Qu (National University of Singapore)
  - Wenjing Zhang (中国科学院大学)
  - Hanyu Jiang (中国科学院大学)
  - Kai Liu (Zhejiang University)
  - Zhenglin Zhou (Zhejiang University)
  - Xiaobo Xia (National University of Singapore)
  - Jian Xue (中国科学院大学)
  - Tat-Seng Chua (National University of Singapore)

💡 **毒舌点评**

亮点在于首次尝试将大型音频语言模型（ALM）作为“情感理解-表情生成”的推理引擎，将模糊的语音情感线索解耦为结构化、可解释的动作单元（AU）序列，这一思路为跨模态生成任务提供了新颖的中间表示范式。短板则是第一阶段的AU预测精度完全依赖ALM的“想象”能力，其生成的AU序列可能并不完全忠于原始音频的真实口型运动，导致第二阶段生成时唇音同步性可能妥协，消融实验也表明其Sync得分略有下降。

🔗 **开源详情**

*   **代码**：提供了代码仓库链接：https://github.com/laura990501/AUHead_ICLR。
*   **模型权重**：论文中未明确说明是否公开训练好的模型权重检查点。
*   **数据集**：实验使用公开数据集MEAD和CREMA，论文中未说明如何获取或预处理脚本。
*   **Demo**：论文中未提供在线演示链接。
*   **复现材料**：论文正文和附录（Appendix）详细描述了模型架构、训练目标（损失函数）、实现细节（学习率、硬件、GPU小时数）、评估设置，并提供了关键的超参数（如λ, γ, n, 引导尺度s）。附录还包含了使用的AU定义列表、数据验证工具说明、Prompt模板示例，以及额外的定性结果和视频链接。复现信息较为充分。
*   **论文中引用的开源项目**：
    *   **Qwen-Audio-Chat**：作为第一阶段的核心ALM。
    *   **Hallo V1** 和 **MEMO**：作为第二阶段的基础扩散模型。
    *   **LoRA**：用于第一阶段的微调。
    *   **SyncNet**：用于评估音唇同步。
    *   **EAT**：用于情感分类评估模型。

📌 **核心摘要**

1.  **要解决什么问题**：现有的音频驱动说话头像生成方法缺乏对细微、丰富情感表达的精细控制，往往生成中性或表情单一的视频。
2.  **方法核心是什么**：提出一个两阶段框架AUHead。第一阶段，利用大型音频语言模型（ALM，如Qwen-Audio-Chat）通过“情感先于动作单元”的思维链（CoT）机制，从音频中生成细粒度的动作单元（AU）序列。第二阶段，将AU序列映射为2D面部表示（如关键点或网格渲染），并设计一个AU驱动的可控扩散模型，通过上下文感知的AU嵌入和跨注意力机制，合成情感丰富且身份一致的说话头像视频。
3.  **与已有方法相比新在哪里**：首次探索利用ALM作为中间桥梁，将音频理解为可解释的AU序列来控制视频生成。与直接使用情感标签或潜在码的方法相比，AU序列提供了更细粒度、结构化的空间和时间控制信号。
4.  **主要实验结果如何**：
    *   在MEAD和CREMA数据集上，与多个基线（如HalloV1, MEMO, AniPortrait等）对比，在视觉质量（PSNR, SSIM, FID）、表情真实度（Emotion ACC）和面部结构保真度（M/F-LMD）上均取得竞争力甚至领先的性能。
    *   关键消融实验显示：采用“先情感后AU”的CoT策略比直接预测AU的精度更高（AU精度0.58 vs 0.50）；使用2D AU表示（LMK/RoM）比1D AU序列显著提升了生成质量（例如MEAD上FID从11.11降至10.87）。
    *   用户研究显示，在情感表达、视频质量和音唇同步方面，AUHead（64.63%， 63.63%， 71.00%）均显著优于强基线HalloV2。
5.  **实际意义是什么**：为虚拟形象、影视制作和交互式系统提供了一种更可控、更具表现力的情感说话头像生成方案，增强了AI生成内容的真实感和情感交互能力。
6.  **主要局限性是什么**：1) AU预测的准确性依赖于ALM的理解与生成能力，可能无法完美还原真实面部运动；2) 将1D AU序列上采样并映射为2D表示可能引入信息损失或模糊；3) 当前实验主要在受控数据集上进行，对复杂场景（如大角度头部运动、复杂背景）的泛化能力有待验证。

---

### 102. [SpeechOp: Inference-Time Task Composition for Generative Speech Processing](/audio-paper-digest-blog/posts/2026-05-04-speechop-inference-time-task-composition-for)

✅ **7.5/10** | 前25% | #语音增强 | #扩散模型 | #语音分离 #多任务学习

👥 **作者与机构**

第一作者：Justin Lovelace（Cornell University）
通讯作者：未明确说明（论文作者来自Cornell University和Adobe Research，从贡献描述看，Adobe Research团队的Rithesh Kumar, Jiaqi Su, Ke Chen, Zeyu Jin可能承担更多指导角色，但论文未明确标注通讯作者）
作者列表：
  - Justin Lovelace（Cornell University）
  - Rithesh Kumar（Adobe Research）
  - Jiaqi Su（Adobe Research）
  - Ke Chen（Adobe Research）
  - Kilian Q Weinberger（Cornell University）
  - Zeyu Jin（Adobe Research）

💡 **毒舌点评**

本文巧妙地将“资源过剩”的TTS模型改造为“资源匮乏”S2S任务的处理器，其提出的TC-CFG推理组合策略从原理上解释了如何优雅地融合不同生成任务的信号，避免了简单的分数平均带来的先验冲突。然而，论文的核心扩散架构（DiT+VAE）和多任务训练范式本身并无颠覆性创新，其真正亮点在于系统整合与工程设计，且在代码和模型开源方面显得较为吝啬，限制了社区的快速跟进与验证。

🔗 **开源详情**

- **代码**：论文中提及项目网站 `https://justinlovelace.github.io/projects/speechop` 用于展示音频样本，但**未提供代码仓库链接**。
- **模型权重**：**未提及**是否公开预训练模型或微调后的权重。
- **数据集**：使用的是公开数据集（MLS, LibriTTS, LibriTTS-R, LibriMix等），但论文中未提供专门整理的数据集或下载脚本。
- **Demo**：提供了音频样本演示网站，但无交互式在线Demo。
- **复现材料**：附录中提供了详尽的模型架构参数、训练配置、采样配置、数据模拟流程等，为复现提供了很好的指导。**未提及**提供训练检查点、预处理脚本或环境配置文件。
- **论文中引用的开源项目**：主要依赖的开源项目包括：ByT5文本编码器、DAC音频编解码器、Whisper/WhisperX ASR模型、以及评估中使用的PESQ、MCD、WavLM-TDCNN等工具。
- **开源计划**：论文中未提及明确的代码或模型开源计划。

📌 **核心摘要**

这篇论文针对语音到语音（S2S）处理任务（如语音增强、分离）因配对训练数据稀缺而导致内容与说话人信息易失真的问题，提出了一种名为SpeechOp的多任务潜在扩散模型。其核心思想是将一个在海量数据上预训练的TTS模型，通过适配训练转化为一个能执行多种S2S任务的通用语音处理器，并在推理时支持灵活的“任务组合”。与已有方法相比，新在三个方面：1）证明了TTS预训练能显著加速并提升S2S任务的训练与性能；2）提出了“任务组合分类器引导”（TC-CFG）策略，这是一种基于贝叶斯分解和无分类器引导原理的推理时组合方法，允许模型同时进行增强和文本引导，避免了简单分数平均的问题；3）设计了“隐式任务组合”（ITC）管线，利用Whisper等ASR模型生成的转录本，通过TC-CFG指导增强过程，无需在训练时提供转录本。主要实验结果显示：在零样本TTS和语音编辑上，SpeechOp超越或持平更强基线；在语音增强上，ITC将词错误率（WER）从基线模型的5.4%降至2.9%（相对降低46%），实现了SOTA的内容保留；在说话人分离的主观MOS评分上，SpeechOp显著优于SepFormer系列模型。该工作的实际意义在于提供了一个统一、灵活且高效的框架，能利用丰富的TTS数据知识来解决数据受限的S2S任务，并通过可调的TC-CFG在内容恢复和声学保真度间取得平衡。主要局限性是未提供代码和模型权重，其生成模型在客观信号保真度指标上仍逊于一些判别式方法。

---

### 103. [Speech-to-LaTeX: New Models and Datasets for Converting Spoken Equations and Sentences](/audio-paper-digest-blog/posts/2026-05-04-speech-to-latex-new-models-and-datasets-for)

✅ **7.5/10** | 前25% | #语音识别 | #大语言模型 | #数据集 #多模态模型

👥 **作者与机构**

- 第一作者：Dmitrii Korzh（AXXX, Moscow, Russia；MTUCI, Moscow, Russia）
- 通讯作者：论文中未明确标注通讯作者
- 作者列表：Dmitrii Korzh（AXXX, MTUCI），Dmitrii Tarasov（FusionBrain Lab, AXXX; HSE University），Artyom Iudin（AXXX; MTUCI），Elvir Karimov（AXXX; MTUCI; Applied AI Institute），Matvey Skripkin（FusionBrain Lab, AXXX; Applied AI Institute），Nikita Kuzmin（AXXX; MTUCI; Applied AI Institute），Andrey Kuznetsov（FusionBrain Lab, AXXX; Innopolis University），Oleg Y. Rogov（AXXX; MTUCI; Applied AI Institute），Ivan Oseledets（AXXX; Applied AI Institute; Moscow State University）

💡 **毒舌点评**

亮点在于，论文贡献了一个规模空前、标注细致的开源S2L数据集，并系统性地探索了从ASR后校正到端到端Audio-LLM的多种技术路线，为这个细分领域确立了坚实的基准和评估框架。短板是，无论是ASR后校正还是端到端方法，模型架构本身均无显著创新，更多是现有技术的组合与应用，其性能提升很大程度上依赖于新构建的高质量数据集。

🔗 **开源详情**

- **代码**：提供代码仓库链接 `https://github.com/dkorzh10/speech2latex`。
- **模型权重**：论文中未提及公开预训练模型权重。但基于开源数据集和代码，可进行训练复现。
- **数据集**：完全开源，托管于Hugging Face：`https://huggingface.co/datasets/marsianin500/Speech2Latex`。
- **Demo**：论文中未提及在线演示。
- **复现材料**：提供了详细的训练超参数、模型配置（如LoRA设置）、数据集划分策略和附录说明。
- **论文中引用的开源项目**：Whisper, BEATs, Qwen2.5, Qwen2.5-Math, SALMONN, LLaMA, XTTSv2, MathBridge, TextTeller, Proof-Pile, KaTeX。

📌 **核心摘要**

该论文旨在解决将语音中的数学表达式和句子准确转换为LaTeX格式的挑战，该任务在教育（如课堂转录）和科研中具有重要应用价值。论文的核心贡献是构建并开源了首个大规模、多语言（英语和俄语）的语音转LaTeX数据集S2L，包含约66k人类标注和571k TTS合成的音频样本，涵盖孤立方程（S2L-equations）和嵌入公式的句子（S2L-sentences）两种类型。方法上，论文系统评估了基于ASR后校正（使用Whisper转录后接微调的LLM）和端到端Audio-LLM（如SALMONN）的多种技术路径。主要实验结果表明，在S2L-equations基准上，其最佳模型（SALMONN-13B）的字符错误率（CER）达到17.5%，而基于后校正的Qwen2.5-0.5B模型CER为27.2%，均显著优于MathSpeech基线（64.0%）。在S2L-sentences基准上，模型在句子整体CER为15.4%，其中公式部分的CER为39.7%，揭示了处理上下文相关数学语音的更大难度。这项工作为语音驱动的数学内容理解提供了重要资源和强基线，但局限在于当前数据集未能完全覆盖真实课堂环境（如口头解释、视觉内容关联），且模型在高度歧义或复杂嵌套表达式上仍有提升空间。

---

### 104. [YuE: Scaling Open Foundation Models for Long-Form Music Generation](/audio-paper-digest-blog/posts/2026-05-04-yue-scaling-open-foundation-models-for-long-form)

✅ **7.5/10** | 前25% | #音乐生成 | #自回归模型 | #歌唱语音合成 #多模态模型

👥 **作者与机构**

- 第一作者：未说明（论文列出了大量作者，但未明确区分第一作者）
- 通讯作者：未说明（论文提供了多位联系人邮箱，但未明确指定通讯作者）
- 作者列表：Ruibin Yuan, Hanfeng Lin, Shuyue Guo, Ge Zhang, Jiahao Pan, Yongyi Zang, Haohe Liu, Yiming Liang, Wenye Ma, Xingjian Du, Xeron Du, Zhen Ye, Tianyu Zheng, Zhengxuan Jiang, Yinghao Ma, Minghao Liu, Zeyue Tian, Ziya Zhou, Liumeng Xue, Xingwei Qu, Yizhi LI, Shangda Wu, Tianhao Shen, Ziyang Ma, Jun Zhan, Chunhui Wang, Yatian Wang, Xiaowei Chi, Xinyue Zhang, Zhenzhu Yang, XiangzhouWang, Shansong Liu, Lingrui Mei, Peng Li, Junjie Wang, Jianwei Yu, Guojian Pang, Xu Li, Zihao Wang, Xiaohuan Zhou, Lijun Yu, Emmanouil Benetos, Yong Chen, Chenghua Lin, Xie Chen, Gus Xia, Zhaoxiang Zhang, Chao Zhang, Wenhu Chen, Xinyu Zhou, Xipeng Qiu, Roger Dannenberg, Jiaheng Liu, Jian Yang, Wenhao Huang, Wei Xue, Xu Tan, Yike Guo（主要隶属机构为：Multimodal Art Projection (MAP), 香港科技大学 (HKUST)；部分作者同时隶属Moonshot.ai, 上海交通大学 (SJTU), 清华大学, CMU, Queen Mary University of London等）。

💡 **毒舌点评**

**亮点**：作为首个在质量上能与Suno、Udio等商业巨头掰手腕的开源歌词到歌曲生成模型，YuE的诞生本身就是对音乐AI民主化的巨大贡献，其系统性技术方案（双轨预测、结构化条件、音乐ICL重设计）为后续研究提供了清晰的蓝图。**短板**：尽管在“音乐性”和“人声敏捷度”上表现亮眼，但在音质保真度（VocalQual, AccompQual）上与顶级闭源系统仍有可感知的差距，这指向了其语义-声学融合编解码器的根本性局限；此外，对于训练数据版权合规性的说明仍显笼统，这在生成式AI伦理日益受关注的当下是一个隐患。

🔗 **开源详情**

- **代码**：提供。论文明确指向GitHub仓库：`https://github.com/multimodal-art-projection/YuE`。
- **模型权重**：提供。论文明确指向HuggingFace模型库：`https://huggingface.co/collections/m-a-p/yue`。
- **数据集**：未完全公开。论文说明数据来源于网络并筛选Creative Commons许可内容，规模为7万小时语音+65万小时音乐，但未提供下载或直接访问方式。
- **Demo**：提供。在线演示链接：`https://map-yue.github.io/`。
- **复现材料**：非常充分。论文附录详细说明了Tokenization（X-Codec细节）、Stage-2架构、评估协议（主观/客观指标定义）、训练数据分布（语言、流派）、测试用prompt列表以及伦理考量。
- **引用的开源项目**：论文中提到了多个依赖的开源工具和模型，包括：LLaMA2（架构基础）、X-Codec（音频分词器）、Vocos（上采样）、All-in-one（歌曲结构分析）、Whisper（WER计算）、RMVPE（音高估计）、ByteCover2（记忆化测试）、CLAP与CLaMP3（对齐评估）、audioldm_eval（客观评估）、PaSST（特征提取）等。
- **总结**：论文提供了高水平的开源支持，涵盖了从代码、模型到评估的全流程。对于研究社区而言，这是一个可立即使用的强大基线模型。

📌 **核心摘要**

1.  **问题**：论文旨在解决从歌词生成完整歌曲（包含人声与伴奏）的长期、复杂难题，现有开源系统无法在保证质量、结构连贯性和歌词对齐的前提下生成长音乐。
2.  **方法**：提出了YuE模型家族，采用两阶段自回归语言模型架构。核心创新包括：a) **双轨解耦预测**：将每个时间步的人声和伴奏作为两个独立token建模，以应对声学复杂场景（如金属乐）。b) **结构化渐进式条件**：利用歌曲固有的段落结构（主歌、副歌等），将文本和音频token交错排列，以实现长上下文歌词对齐。c) **重新设计的音乐ICL**：通过延迟激活策略，实现风格迁移、声音克隆和双向创作，避免“捷径学习”。
3.  **创新**：首次为歌词到歌曲任务提出并实现了可扩展的、基于LLaMA架构的开源基础模型。双轨预测解决了混合信号建模的瓶颈；结构化条件为超长序列生成提供了有效解决方案；音乐ICL框架超越了传统的单向续写模式。
4.  **结果**：
    *   **主观评估**（图3）：在“音乐性”上，YuE与Tiangong和Udio打成平手，击败Hailuo，但落后于Suno V4。
    *   **人声敏捷度**（图4）：YuE的歌曲级音域（中位数约27半音）接近Suno V4，优于Hailuo和Tiangong。
    *   **生成时长**（图5）：YuE能生成最长的音频，且时长分布范围最广。
    *   **客观指标**（表1）：在KL散度（0.372， 最优）和CLaMP3分数（0.240， 最优）上领先，显示其音频分布匹配度和语义对齐能力出色。
    *   **消融实验**：双轨预测（图7）比标准NTP收敛更快（损失低约0.4）；结构化渐进式条件（图8）在长音频（>60秒）下显著降低歌词错误率（WER）。
5.  **意义**：为音乐生成领域提供了强大的开源基础模型，推动了该领域的透明化和可复现研究，并证明了开源系统可以达到接近商业产品的水平。
6.  **局限**：音质（尤其是声学保真度）与顶级闭源系统仍有差距；歌词跟随能力在极端风格下可能退化；训练数据集未公开，限制了完全复现；模型的跨文化、跨语言能力虽被评估但仍有提升空间。

---

### 105. [Compose and Fuse: Revisiting the Foundational Bottlenecks in Multimodal Reasoning](/audio-paper-digest-blog/posts/2026-05-04-compose-and-fuse-revisiting-the-foundational)

✅ **7.5/10** | 前25% | #多模态推理 | #基准测试 | #大语言模型 #跨模态

👥 **作者与机构**

- 第一作者：Yucheng Wang, Yifan Hou（苏黎世联邦理工学院计算机系，标注为同等贡献）
- 通讯作者：Mrinmaya Sachan（苏黎世联邦理工学院计算机系）
- 作者列表：Yucheng Wang（苏黎世联邦理工学院计算机系）、Yifan Hou（苏黎世联邦理工学院计算机系）、Aydin Javadov（苏黎世联邦理工学院计算机系）、Mubashara Akhtar（苏黎世联邦理工学院计算机系）、Mrinmaya Sachan（苏黎世联邦理工学院计算机系）

💡 **毒舌点评**

**亮点**：论文构建了一套精妙的逻辑推理框架，将模态交互分解为六种可控模式，这种“解剖学”式的系统评估在当前多模态评估中少见且有价值。**短板**：依赖高度简化的合成逻辑数据来揭示“根本瓶颈”，其结论能否无缝迁移到复杂、开放的真实世界多模态推理场景中，存疑。

🔗 **开源详情**

-   **代码**：论文声明代码和数据公开可用（附录提到GitHub仓库），提供了生成脚本和评估协议。
-   **模型权重**：未提供。使用的是四个公开的开源模型（Baichuan-Omni, Qwen2.5-Omni, MiniCPM-o, Phi-4 Multimodal）。
-   **数据集**：合成数据，论文提供了生成代码，但未提及独立的数据集下载包。
-   **Demo**：未提及。
-   **复现材料**：提供了详细的实验设置、提示模板（附录A.3）、线性探针设置（附录A.2），复现材料充分。
-   **论文中引用的开源项目**：依赖CosyVoice2 TTS进行音频生成，依赖GraphViz进行视觉图表生成，引用了Clark et al. (2020)和Liang et al. (2023)的代码用于事实和规则生成。

📌 **核心摘要**

1.  **要解决什么问题**：解决多模态大语言模型（MLLM）在推理时，额外模态有时有帮助、有时有害的矛盾现象，缺乏一个可控的评估框架来隔离分析其内部原因。
2.  **方法核心是什么**：提出一个基于逻辑推理的评估框架，将多模态交互系统性地分为六种模式（等价、替代、蕴含、独立、矛盾、互补），通过合成数据控制事实信息在模态间的分布与组合逻辑，以隔离不同因素的影响。
3.  **与已有方法相比新在哪里**：超越了将模型视为黑盒的性能评估，转向对模态交互模式的系统性诊断和内部机制（注意力、层内表征）的探针分析。新在提出了**任务组合瓶颈**和**融合瓶颈**这两个核心诊断概念，并通过干预实验验证。
4.  **主要实验结果如何**：
    -   **整体发现**：文本单模态基线通常已接近天花板性能。多模态仅在提供独立且充分的推理路径（替代模式）时略有帮助（平均+12.7%至+14.8% vs 视觉/音频单模态基线）；冗余信息（等价模式）无益甚至有害；跨模态多跳链（蕴含模式）严重损害性能（平均下降7.1%-12.8%）。
    -   **瓶颈诊断**：独立模式暴露**性能偏差**（如文本最强，视觉最弱）；矛盾模式暴露**偏好偏差**（模型在冲突时倾向某些模态，与其自身单模态性能不一致）；互补模式暴露**融合偏差**（性能低于任何单模态基线，平均仅52.0% vs 文本94.6%）。
    -   **内部机制分析**：注意力模式无法有效编码信息的“有用性”；两步提示法（先识别后推理）显著缓解了任务组合瓶颈；模态身份在早期层高度可辨识，调整早期层注意力温度可改善融合偏差。
5.  **实际意义是什么**：指明了MLLM的核心障碍在于信息**整合**而非**感知**。未来的模型设计应关注组合感知的训练目标、早期融合的控制机制以及显式的证据选择能力。
6.   **主要局限性**：实验完全基于精心构造的合成逻辑推理任务（单步演绎），其结论是否能泛化到更复杂、更开放的真实世界多模态推理（如视觉问答、文档理解）有待验证。所选模态（文本、TTS音频、图表视觉）过于简化，未涵盖自然图像、视频等更常见的模态。

---

### 106. [AudioX: A Unified Framework for Anything-to-Audio Generation](/audio-paper-digest-blog/posts/2026-05-04-audiox-a-unified-framework-for-anything-to-audio)

✅ **7.5/10** | 前25% | #音频生成 | #扩散模型 | #音频大模型 #多模态模型

👥 **作者与机构**

- 第一作者：Zeyue Tian (Hong Kong University of Science and Technology)
- 通讯作者：Wei Xue† (Hong Kong University of Science and Technology), Yike Guo† (Hong Kong University of Science and Technology)
- 作者列表：Zeyue Tian (Hong Kong University of Science and Technology), Zhaoyang Liu (Hong Kong University of Science and Technology), Yizhu Jin (Hong Kong University of Science and Technology), Ruibin Yuan (Hong Kong University of Science and Technology), Liumeng Xue (Hong Kong University of Science and Technology), Xu Tan (Independent Researcher), Qifeng Chen (Hong Kong University of Science and Technology), Wei Xue† (Hong Kong University of Science and Technology), Yike Guo† (Hong Kong University of Science and Technology)

💡 **毒舌点评**

本文的亮点在于构建了一个工程上非常扎实的统一框架，其设计的多模态自适应融合模块（MAF）有效解决了不同模态信号干扰的问题，并且配套构建的IF-caps数据集在质量和规模上都为训练该类模型提供了宝贵资源。短板在于，尽管实验全面，但论文中声称的“任何东西到音频生成”在当前实现中主要限于文本、视频和音频三种条件输入，对于“任何东西”（如图像、草图等）的泛化能力论证不足，更像一个“文本/视频/音频到音频”的强统一模型。

🔗 **开源详情**

根据论文内容总结如下：
- **代码**：论文承诺在发布时开源代码，项目主页为 https://zeyuet.github.io/AudioX/。当前未提供具体代码仓库链接。
- **模型权重**：论文承诺将提供预训练的模型检查点。
- **数据集**：IF-caps数据集将开源，并将包含为训练和测试统一模型而标注的新文本描述（见表A.2）。
- **Demo**：论文中未提及在线演示。
- **复现材料**：提供了极其详细的复现信息，包括：
    - 模型架构参数（2.4B参数，1.1B可训练）。
    - 训练硬件（3×8 H800 GPU，约4k GPU小时）。
    - 优化器设置（AdamW，lr=1e-5，weight decay=0.001）。
    - 学习率调度（指数预热和衰减）。
    - 批大小（48）。
    - 推理设置（250步，CFG scale=7.0）。
    - 数据集统计和处理流程（附录A.1）。
    - 评估指标和基准定义（附录A.2，A.3）。
- **论文中引用的开源项目**：
    - **骨干模型**：Stable Audio Open（用于音频编码器和DiT预训练）。
    - **编码器**：CLIP-ViT-B/32， Synchformer， T5-base。
    - **数据标注**：Gemini 2.5 Pro， Qwen2-Audio。
    - **其他工具**：AnimeGANv2（用于图像到音频实验）。

---

### 107. [InterActHuman: Multi-Concept Human Animation with Layout-Aligned Audio Conditions](/audio-paper-digest-blog/posts/2026-05-04-interacthuman-multi-concept-human-animation-with)

✅ **7.5/10** | 前25% | #视频生成 | #扩散模型 | #音频条件 #多概念定制

👥 **作者与机构**

- 第一作者：Zhenzhi Wang*（香港中文大学）
- 通讯作者：论文中未明确标注通讯作者
- 作者列表：Zhenzhi Wang*（香港中文大学）、Jiaqi Yang*（字节跳动）、Jianwen Jiang*B（字节跳动）、Chao Liang（字节跳动）、Gaojie Lin（字节跳动）、Zerong Zheng（字节跳动）、Ceyuan Yang（字节跳动）、Yuan Zhang（字节跳动）、Mingyuan Gao（字节跳动）、Dahua Lin（香港中文大学）

💡 **毒舌点评**

论文提出的显式布局预测模块有效解决了多人动画中的“鸡和蛋”困境，是音视频对齐领域一个清晰的技术进步。但论文的致命短板是零开源支持——没有代码、模型权重或训练数据，这使得其标榜的“基线”价值大打折扣，复现难度极高。

🔗 **开源详情**

- **代码**：论文中未提及代码仓库链接。
- **模型权重**：未提及公开的模型权重。
- **数据集**：论文中描述了自建的大规模数据集，但未提及如何获取。
- **Demo**：论文中提供了视频演示的链接 (`https://zhenzhiwang.github.io/interacthuman/`)。
- **复现材料**：论文提供了详细的算法伪代码（算法1）、训练超参数（学习率、batch size、硬件、步数等）、损失函数设计和数据处理流程的描述，为复现提供了重要信息。附录包含更多实验细节。
- **论文中引用的开源项目**：Wan2.1（预训练模型基础）、Qwen2.5-VL（提示重述）、Qwen2-VL（数据标注）、Gemini-2.0-Flash（描述解析）、Grounding-SAM2（掩码生成）、wav2vec 2.0（音频特征）、Florence-2（主体检测）、CLIP/DINO（特征提取）、SyncNet（唇音同步）、Raft（光流）、RTMpose（人体关键点）、PaddleOCR（字幕检测）、PySceneDetect（视频剪辑）等。

📌 **核心摘要**

1. **问题**：现有的端到端人体动画方法大多假设单一主体并采用全局条件注入，无法处理需要精确区域控制的多概念（多人、人-物）交互场景，尤其是将不同音频信号准确分配给对应人物的挑战。
2. **方法**：本文提出InterActHuman框架，其核心是一个轻量级掩码预测模块，能自动从参考图像中推断每个身份在视频中的时空布局（掩码）。在推理时，利用迭代扩散过程，将上一步预测的掩码用于指导当前步的局部音频注入，解决了布局预测与条件注入的相互依赖问题。
3. **创新**：与隐式学习（如特征融合）的已有方法不同，该工作首次提出并验证了显式布局约束对于多概念、多模态人体动画的重要性。它提供了一个统一的接口，通过布局来同步注入图像和音频等全局与局部条件。
4. **实验结果**：在多人音频驱动动画测试集上，该方法在唇音同步距离（Sync-D）和视频FVD指标上显著优于基线（如OmniHuman），具体数值见表1。用户研究也表明其在唇音同步和主体一致性上大幅领先（表2）。在多概念视频定制任务中，其身份保真度指标（如CLIP-I， DINO-I）也达到最佳（表3）���
5. **实际意义**：为高质量、可控的多角色对话视频生成和基于多参考图像的视频定制提供了新的技术路径，有望应用于数字内容创作、虚拟交互等领域。
6. **局限性**：训练数据域较窄（主要为人像），限制了文本提示的多样性；模型主要针对2-3人场景训练，对更多人数的泛化能力未充分验证。

---

### 108. [Measuring Audio's Impact on Correctness: Audio-Contribution-Aware Post-Training of Large Audio Language Models](/audio-paper-digest-blog/posts/2026-05-04-measuring-audios-impact-on-correctness-audio)

✅ **7.5/10** | 前25% | #音频问答 | #强化学习 | #音频大模型 #数据集

👥 **作者与机构**

- 第一作者：Haolin He（香港中文大学、蚂蚁集团）
- 通讯作者：Jian Liu（蚂蚁集团）， Qiuqiang Kong（香港中文大学）
- 作者列表：Haolin He（香港中文大学、蚂蚁集团）， Xingjian Du（罗切斯特大学）， Renhe Sun（蚂蚁集团）， Zheqi Dai（香港中文大学）， Yujia Xiao（香港中文大学）， Mingru Yang（蚂蚁集团）， Jiayi Zhou（蚂蚁集团）， Xiquan Li（上海交通大学）， Zhengxi Liu（香港中文大学）， Zining Liang（香港中文大学）， Chunyat Wu（香港中文大学）， Qianhua He（华南理工大学）， Tan Lee（香港中文大学）， Xie Chen（上海交通大学）， Wei-Long Zheng（上海交通大学）， Weiqiang Wang（蚂蚁集团）， Mark D Plumbley（伦敦国王学院）， Jian Liu（蚂蚁集团）， Qiuqiang Kong（香港中文大学）

💡 **毒舌点评**

**亮点**：论文敏锐地捕捉并量化了“音频语言模型不听音频”这一核心问题，提出的“音频贡献”度量与过滤方法逻辑自洽，且基于此设计的Weak-to-Strong和Mixed-to-Strong训练范式确实有效，在多个基准上取得了扎实的SOTA结果。
**短板**：整个框架高度依赖Qwen2.5-Omni作为基座模型验证，其结论在不同架构（如纯编码器-解码器模型）上的泛化性未可知；且“音频贡献”的定义（用静音替换音频）过于粗暴，无法区分解码器是“忽略”了音频还是“错误处理”了音频。

🔗 **开源详情**

- **代码**：论文中未提及代码仓库链接。
- **模型权重**：未提及。
- **数据集**：论文发布了名为“AudioMCQ”的大规模数据集，包含571,118个样本，但**未提供获取数据集的直接链接或平台**（如Hugging Face）。数据集构建流程和质量标准描述详尽。
- **Demo**：未提供在线演示。
- **复现材料**：提供了极其详尽的复现材料，包括：数据集构建的**完整提示词模板**（附录B）、**质量控制流程**说明（附录C）、**所有训练的超参数配置表**（表6、表7）、**评���提示词格式**（附录B.6， B.7）以及**实验控制细节**（附录E.2）。这些信息足以让同行复现其训练流程。
- **论文中引用的开源项目**：主要依赖开源的大语言模型（Qwen3-235B）和大型音频语言模型（如Qwen2.5-Omni， A-Flamingo2， R1-AQA， Kimi-Audio）作为工具和基线。

📌 **核心摘要**

1. **问题**：当前大型音频语言模型的后训练方法（如SFT后接RL）效果不佳，且缺乏适用于该阶段的大规模高质量数据集，同时模型普遍存在“零音频贡献”现象，即仅凭文本即可回答问题而无需真正处理音频。
2. **方法核心**：构建了包含57.1万样本的多选题数据集AudioMCQ，并配有思维链标注。系统研究了“零音频贡献”现象，提出“音频贡献过滤”将数据分为弱、强贡献子集。基于此，设计了两种后训练范式：在弱贡献数据上SFT，再在强贡献数据上GRPO（Weak-to-Strong）；在混合数据上SFT，再在强贡献数据上GRPO（Mixed-to-Strong）。
3. **新颖之处**：首次系统量化LALM对音频的依赖程度，并基于此发现优化多阶段训练的数据分配策略，将问题从“如何训练”推进到“用什么数据、按什么顺序训练”。
4. **实验结果**：使用Weak-to-Strong策略在MMAU-test-mini（78.2%）和MMAU（75.6%）上取得SOTA；使用Mixed-to-Strong策略在MMAR（67.0%）和MMSU（71.7%）上取得SOTA。消融实验证明，仅在强音频贡献数据上进行RL能显著提升模型真正的音频感知能力。
5. **意义**：为LALM后训练提供了高效的数据分配范式和高质量数据集，推动了模型向更真实的音频理解发展。
6. **局限**：方法论深度绑定于现有模型（用于音频贡献评估）；“音频贡献”的定义（静音替换）可能过于简化；最终模型主干单一，结论普适性有待验证。

---

### 109. [TTSDS2: Resources and Benchmark for Evaluating Human-Quality Text to Speech Systems](/audio-paper-digest-blog/posts/2026-05-04-ttsds2-resources-and-benchmark-for-evaluating)

✅ **7.5/10** | 前25% | #语音合成评估 | #基准测试 | #语音合成 #模型评估

👥 **作者与机构**

- 第一作者：Christoph Minixhofer（爱丁堡大学语音技术研究中心）
- 通讯作者：论文中未明确指定，根据作者邮箱统一格式，可能为同一机构课题组
- 作者列表：Christoph Minixhofer（爱丁堡大学语音技术研究中心）、Ondrej Klejch（爱丁堡大学语音技术研究中心）、Peter Bell（爱丁堡大学语音技术研究中心）

💡 **毒舌点评**

亮点在于构建了首个覆盖14种语言、横跨多个真实世界域（含噪声、野生、儿童语音）的TTS客观评估基准与自动化流水线，实用价值高。但核心创新点（TTSDS2）是对原有TTSDS指标的增量改进，更多是工程优化和鲁棒性验证，而非提出全新评估范式，且其计算开销（CPU-bound）限制了快速迭代。

🔗 **开源详情**

*   **代码**：提供代码仓库链接（github.com/ttsds/pipeline），用于自动化数据创建和基准测试。
*   **模型权重**：论文评估的20个系统多为开源，TTSDS2本身不涉及需训练的模型，但依赖的特征提取模型（如mHuBERT-147）是公开的。
*   **数据集**：公开发布了包含11,282条评分的人类评估数据集（hf.co/datasets/ttsds/listening_test）。自动化流水线可创建多语言数据集。
*   **Demo**：提供在线基准排行榜网站（ttsdsbenchmark.com）。
*   **复现材料**：论文详细描述了评估设置、问卷内容、流水线算法（Algorithm 1）、特征选择标准，并提供了特征分布可视化示例（图1）。
*   **论文中引用的开源项目**：大量引用了开源工具和模型，如Whisper, Demucs, Pyannote, XNLI模型, VERSA工具包, 以及所评估的20个开源TTS系统。

📌 **核心摘要**

1.  **解决的问题**：现代文本转语音（TTS）系统已能生成以假乱真的语音，导致传统主观评估（如MOS）难以跨研究对比，而常用的客观指标缺乏在多领域、多语言下的鲁棒性验证。
2.  **方法核心**：提出TTSDS2，一个改进的分布评估指标。它通过比较合成语音与真实语音在**通用性、说话人、韵律、可懂度**四个因子上多个特征分布的2-Wasserstein距离，综合评分。得分越高表明合成语音分布越接近真实语音分布而非噪声分布。
3.  **与已有的方法相比新在哪里**：
    *   **特征集升级**：相较于TTSDS，替换了表现不佳的特征（如用Whisper和wav2vec 2.0的ASR激活替代WER），并为多语言场景引入了mHuBERT-147和XLSR-53等模型。
    *   **跨域鲁棒性验证**：在CLEAN（干净朗读）、NOISY（噪声）、WILD（野生/对话）、KIDS（儿童语音）四个不同域上验证了指标与人类评分的相关性。
    *   **自动化多语言基准**：发布了一个可重复运行的流水线，用于自动创建多语言YouTube数据集并生成持续更新的TTS系统排名，覆盖14种语言。
4.  **主要实验结果**：
    *   在20个开源TTS系统、16个客观指标的对比中，TTSDS2是唯一一个在所有4个域、3种主观评分（MOS, CMOS, SMOS）上均取得Spearman相关系数ρ > 0.50的指标，平均ρ ≈ 0.67。
    *   与次优的说话人相似度指标（RawNet3, X-Vector）平均相关性0.6相比，TTSDS2更具一致性和连续性。
    *   消融实验表明，简单的因子平均策略比学习权重策略在未见域上泛化更好。
    *   多语言TTSDS2分数与语言学距离（Uriel+）相关性（ρ = -0.51）高于原版TTSDS（ρ = -0.39）。

| Metric | Clean (MOS) | Clean (CMOS) | Clean (SMOS) | Noisy (MOS) | Noisy (CMOS) | Noisy (SMOS) | Wild (MOS) | Wild (CMOS) | Wild (SMOS) | Kids (MOS) | Kids (CMOS) | Kids (SMOS) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **TTSDS2 (Ours)** | 0.75 | 0.69 | 0.73 | 0.59 | 0.54 | 0.71 | 0.75 | 0.71 | 0.75 | 0.61 | 0.50 | 0.70 |
| TTSDS (Original) | 0.60 | 0.62 | 0.52 | 0.49 | 0.61 | 0.66 | 0.67 | 0.57 | 0.67 | 0.70 | 0.52 | 0.60 |
| RawNet3 | 0.36 | 0.26 | 0.52 | 0.44 | 0.37 | 0.82 | 0.85 | 0.80 | 0.64 | 0.73 | 0.61 | 0.77 |
| X-Vector | 0.46 | 0.42 | 0.56 | 0.40 | 0.29 | 0.77 | 0.82 | 0.82 | 0.62 | 0.70 | 0.57 | 0.75 |
| SQUIM | 0.68 | 0.46 | 0.37 | 0.48 | 0.48 | 0.60 | 0.62 | 0.75 | 0.79 | 0.57 | 0.55 | 0.45 |

*表：主要客观指标与主观评分的Spearman相关系数对比（节选）。TTSDS2在所有条件下均保持高于0.50的强相关。*

![图表显示了地面真值、合成和噪声数据集在F0（基频）特征上的分布。地面真值（蓝色）与合成（橙色）分布重叠，而噪声（绿色）分布与之显著不同，这直观地展示了TTSDS2基于分布距离进行评估的原理。](icassp-img://uGai5lYHlV/0.png)
*图1：TTSDS2评估原理示意图：展示真实、合成与噪声数据在F0特征上的分布差异。*

5.  **实际意义**：为TTS社区提供了一个更可靠、跨域、跨语言的客观评估工具和持续更新的排行榜，有助于系统开发者公平比较模型，并推动研究向更真实、更多样的语音场景迈进。
6.  **主要局限性**：计算成本较高（CPU-bound，约9.4分钟/系统）；评估上限受限于主观测试本身的噪声（最高相关系数约0.8）；当前无法检测特定转录失败案例；不支持长语音评估。

---

### 110. [SumRA: Parameter Efficient Fine-tuning with Singular Value Decomposition and Summed Orthogonal Basis](/audio-paper-digest-blog/posts/2026-05-04-sumra-parameter-efficient-fine-tuning-with)

✅ **7.5/10** | 前25% | #语音识别 | #迁移学习 | #参数高效微调 #多语言

👥 **作者与机构**

第一作者：Chin Yuen Kwok（南洋理工大学 数字信任中心 & 计算与数据科学学院）
通讯作者：Yongsen Zheng（南洋理工大学 数字信任中心 & 计算与数据科学学院）
作者列表：
    - Chin Yuen Kwok（南洋理工大学 数字信任中心 & 计算与数据科学学院）
    - Yongsen Zheng（南洋理工大学 数字信任中心 & 计算与数据科学学院）
    - Jia Qi Yip（南洋理工大学 计算与数据科学学院）
    - Kwok-Yan Lam（南洋理工大学 数字信任中心 & 计算与数据科学学院）
    - Eng Siong Chng（南洋理工大学 数字信任中心 & 计算与数据科学学院）

---

💡 **毒舌点评**

**亮点**：论文巧妙地将“模型平均”的思想压缩到了单一LoRA适配器的初始化阶段，通过将多个奇异向量求和来构建更“博学”的冻结矩阵A，这个想法精巧且实现简单。**短板**：实验验证仅限于多语言ASR，作者自己也承认对需要“局部”知识适应的任务（如NLU）无效，这让人怀疑该方法是普适的参数高效技巧，还是一个仅对特定任务类型（全局风格/口音迁移）有效的“特解”。

---

🔗 **开源详情**

- **代码**：论文中未提及任何代码仓库链接（如GitHub）。
- **模型权重**：论文中未提及是否会公开训练好的适配器（B矩阵）或完整模型。
- **数据集**：使用了公开的Common Voice MASR数据集（Mozilla），并说明了获取方式（网址），但未提供处理后的数据脚本。
- **Demo**：论文中未提及提供在线演示。
- **复现材料**：提供了较详细的训练超参数（优化器AdamW、调度器ReduceLROnPlateau、batch size=4、epochs=2、验证频率等）和模型配置（适配器位置、α设置）。但缺乏如随机种子、具体的层归一化实现细节、SVD计算库（如PyTorch的`torch.linalg.svd`）的版本或参数设置等。
- **论文中引用的开源项目**：引用了Whisper（模型）、SpeechBrain（学习率调度器实现）、Common Voice（数据集）、多个作为对比基线的PEFT方法（LoRA, PiSSA, CorDA等）的开源实现或论文。
- **总结**：论文中未提及明确的开源计划（代码、模型、完整复现脚本）。

📌 **核心摘要**

1.  **要解决什么问题**：在参数高效微调（PEFT）中，低秩适应（LoRA）及其变体（如LoRA-FA）在面对数百万个个性化适配器（如多语言/多用户ASR）时，仍面临显著的存储开销挑战。现有基于SVD的初始化方法（如PiSSA）仅使用前几个主导奇异向量，限制了冻结矩阵A的影响范围。
2.  **方法核心是什么**：提出SumRA方法。核心是改进LoRA中冻结矩阵A的初始化：通过对预训练权重矩阵进行SVD分解，将得到的**多个（而非仅前几个）奇异向量**按特定策略（如交错求和、贪心求和）求和后，分配到矩阵A的每一行中。这样，A能同时编码更广泛的模型知识，且在微调时被冻结，仅更新矩阵B，从而大幅降低每个任务的存储成本。
3.  **与已有方法相比新在哪里**：
    - 相比**标准LoRA**：不再随机初始化A，而是利用预训练权重的结构化知识；同时冻结A，参数效率更高。
    - 相比**LoRA-FA**：解决了其随机初始化A的局限性，用有意义的SVD向量初始化。
    - 相比**PiSSA/CorDA**：关键创新在于**求和**策略。PiSSA仅用主导奇异向量初始化，而SumRA将更多的奇异向量（包括非主导的）压缩进A，使其能影响模型知识中更广阔的部分。此外，提出的“平衡求和”策略（贪心求和）避免了重要奇异向量聚集在同一行导致的干扰。
4.  **主要实验结果如何**：在低资源多语言ASR任务上验证了有效性。使用Whisper-large-v2模型，以秩32、每任务仅0.4M额外参数（相比LoRA的7.7M）在Common Voice数据集的5种新语言上微调，SumRA将平均词错误率（WER）从LoRA的37.69%降至**34.09%**（相对降低约9.6%）。消融实验表明，贪心/交错求和策略优于简单的分块求和。下表为关键结果（Whisper-small, rank=32）：

| 方法      | 额外参数 | Esperanto WER | Interlingua WER | Frisian WER | Meadow Mari WER | Kurmanji Kurdish WER |
|-----------|----------|---------------|-----------------|-------------|-----------------|----------------------|
| LoRA      | 7.7M     | 23.39%        | 15.31%          | 39.34%      | 40.63%          | 48.51%               |
| **SumRA** | **3.9M** | **20.77%**    | **13.38%**      | **33.37%**  | **36.30%**      | **44.47%**           |

5.  **实际意义是什么**：为大规模部署个性化或语言特定的语音模型提供了一种更高效的存储方案。通过共享一个精心初始化的冻结矩阵A，系统可以仅为每个新任务存储一个小型的矩阵B，从而显著降低内存和存储成本，对于云端多租户ASR服务有潜在价值。
6.  **主要局限性是什么**：方法的有效性高度依赖于“全局适应”的假设（如适应整体口音或风格）。作者指出，对于仅需学习局部新知识（如新增少量术语）的适应任务，该方法优势有限。此外，该方法在NLU任务上的初步实验效果不佳，进一步证实了其适用范围的局限性。

---

---

### 111. [MMSU: A Massive Multi-task Spoken Language Understanding and Reasoning Benchmark](/audio-paper-digest-blog/posts/2026-05-04-mmsu-a-massive-multi-task-spoken-language)

✅ **7.5/10** | 前50% | #基准测试 | #模型评估

👥 **作者与机构**

- 第一作者：Dingdong Wang（香港中文大学）
- 通讯作者：未说明
- 作者列表：Dingdong Wang（香港中文大学），Junan Li（香港中文大学），Jincenzi Wu（香港中文大学），Dongchao Yang（香港中文大学），Xueyuan Chen（香港中文大学），Tianhua Zhang（香港中文大学），Helen M. Meng（香港中文大学）

💡 **毒舌点评**

这篇论文的核心贡献在于构建了一个任务体系非常庞大、且强调语言学理论指导的语音理解基准，其对“听觉细节”（如韵律、语音学）的侧重确实弥补了现有SLU基准只关注语义的盲区。然而，作为一篇Benchmark论文，它在提出评估标准后，并未对如何改进模型以攻克这些新挑战给出方法论层面的洞察，其价值更偏向于“诊断”而非“治疗”。

🔗 **开源详情**

- **代码**：论文中未提及代码链接。
- **模型权重**：未提及。本文是基准论文，不涉及提出新模型。
- **数据集**：已公开。论文明确指出基准数据集在Hugging Face上可用：https://huggingface.co/datasets/ddwang2000/MMSU。
- **Demo**：未提及。
- **复现材料**：附录提供了非常详细的数据构建细节，包括数据来源列表、任务定义与示例、数据分布、错误案例分析、以及GPT-4o的使用提示，这有助于理解基准构建过程。
- **论文中引用的开源项目**：引用了多个用于数据构建的开源数据集（如MELD, GigaSpeech, CommonVoice, Switchboard等）和模型（如Whisper, GPT-4o）。

📌 **核心摘要**

1. **要解决什么问题**：现有语音大模型（SpeechLLMs）的评估基准主要关注语义内容，忽略了语音中丰富的声学特征（如韵律、重音、副语言特征）以及基于这些特征的复杂推理能力，导致对模型真实语音理解能力的评估不全面。
2. **方法核心**：提出MMSU基准，包含5000个由专家精心设计和审核的“音频-问题-答案”三元组，覆盖47个细粒度任务，这些任务系统性地根植于语言学理论（包括语音学、韵律学、修辞学、句法学、语义学和副语言学）。
3. **与已有方法相比新在哪里**：与现有基准相比，MMSU首次系统性地将语言学理论融入任务设计，覆盖了更广泛的声学特征（如口音、语速变化、停顿、延长音、非言语声音等），并强调了基于声学线索的推理任务（如基于韵律的推理、讽刺检测、双关语解释）。
4. **主要实验结果**：对22个先进的SpeechLLMs和OmniLLMs进行了评估。结果显示，当前模型与人类表现存在显著差距：最佳人类评估者平均准确率为89.72%，而表现最好的模型（Gemini-1.5-Pro）仅为60.68%。模型普遍在语音学（如近音感知、音节感知）和部分推理任务（如讽刺检测、对联匹配）上表现不佳。噪声实验表明模型确实利用了声学信号，而非仅依赖文本统计。关键性能对比见下表。

| 模型 | 参数量 | 感知平均准确率 (%) | 推理平均准确率 (%) | 总体平均准确率 (%) |
| :--- | :--- | :--- | :--- | :--- |
| **Human** | - | 91.24 | 86.77 | **89.72** |
| **Gemini-1.5-Pro** | - | 46.10 | 76.16 | **60.68** |
| **Qwen2.5-Omni-7B** | 7B | 42.50 | 79.83 | 60.57 |
| **Kimi-Audio** | 7B | 43.52 | 76.03 | 59.28 |
| **MiniCPM-o** | 8.6B | 40.54 | 73.57 | 56.53 |
| **GPT-4o-Audio** | - | 39.67 | 71.96 | 56.38 |
| *Random Guess* | - | 24.90 | 25.02 | 25.37 |

5. **实际意义**：MMSU为全面评估语音大模型在真实、复杂语音交互中的能力提供了新的标准，其发现（如模型在声学细节感知上的普遍短板）为未来模型的训练和改进指明了具体方向。
6. **主要局限性**：1) 基准规模（5000题）相对于47个任务来说，每个任务平均数据量有限；2) 所有任务均为选择题，可能无法完全模拟真实世界中开放式、生成式的语音交互场景；3) 作为评估基准，论文本身并未提出提升模型在MMSU上表现的新方法。

---

### 112. [Towards True Speech-to-Speech Models Without Text Guidance](/audio-paper-digest-blog/posts/2026-05-04-towards-true-speech-to-speech-models-without-text)

✅ **7.5/10** | 前25% | #语音对话系统 | #端到端 | #大语言模型 #预训练

👥 **作者与机构**

- 第一作者：Xingjoint Zhao（复旦大学）
- 通讯作者：Xipeng Qiu（复旦大学）
- 作者列表：Xingjoint Zhao¹³*（1.复旦大学，2.上海创新研究院，3.MOSI.AI），Zhe Xu¹²³*，Luozhijie Jin¹²³，Yang Wang¹³，Hanfu Chen¹³，Yaozhou Jiang¹³，Ke Chen¹²³，Ruixiao Li¹²³，Mingshu Chen¹³，Ruiming Wang¹³，Wenbo Zhang¹²³，Qinyuan Cheng¹³，Zhaoye Fei¹³，Shimin Li³，Xipeng Qiu¹²³†

💡 **毒舌点评**

**亮点**：论文直击当前语音对话模型“伪端到端”（依赖文本指导）的痛点，提出的模态分层架构和冻结预训练策略，为在LLM中集成原生语音能力并保留文本智能提供了一个有原理性支撑且实验有效的解决方案。**短板**：尽管自称为“真”语音到语音模型，但其语音理解与生成的底层仍严重依赖于强大的文本LLM骨干和高质量的文本-语音配对数据，其“无文本指导”更多体现在生成阶段，训练阶段对文本的依赖并未摆脱；此外，对于更复杂的、富含副语言信息的开放式对话场景，模型的表现力有待进一步验证。

📌 **核心摘要**

本文旨在解决现有语音对话系统依赖文本中间环节导致的延迟增加、副语言信息丢失和表达力受限的问题。核心方法是构建一个真正的、无需文本指导的语音到语音大语言模型，其技术核心是**模态分层架构**（在Transformer顶层为文本和语音设置独立分支）与**冻结预训练策略**（第一阶段冻结预训练文本LLM，仅训练语音相关模块；第二阶段再联合微调）。与已有方法相比，其创新在于明确观察并利用了跨模态表示在模型深度上的演变规律（先融合后分化），并设计了对应的架构进行适配，同时通过冻结策略有效防止了文本能力的灾难性遗忘。主要实验结果表明：1）在口语问答任务上（如LlamaQA），模型的语音到语音（S→S）性能（63.67%）达到了与文本指导系统（GLM-4-Voice*：65.67%）可比的水平，并在WebQA上（36.71%）超越了后者（38.34%），在部分任务上取得SOTA；2）模型在文本能力基准（MMLU: 67.19， CMMLU: 69.53）上相比引入语音前的文本LLM（Qwen3-8B: MMLU 76.6， CMMLU 77.35）的下降幅度远小于SpiritLM等模型；3）语音编码器/解码器在WER、SIM等指标上具备竞争力。该工作为构建高效、富有表现力的端到端语音交互系统建立了新的范式。主要局限性在于训练依赖大规模、高质量的语音-文本数据（包括合成数据），且模型在复杂对话、长时交互和极端副语言场景下的能力尚未充分评估。

---

### 113. [Better Together: Leveraging Unpaired Multimodal Data for Stronger Unimodal Models](/audio-paper-digest-blog/posts/2026-05-04-better-together-leveraging-unpaired-multimodal)

✅ **7.0/10** | 前25% | #音频分类 | #自监督学习 #迁移学习 | #多模态模型 #自监督学习

👥 **作者与机构**

- 第一作者：Sharut Gupta (MIT CSAIL)
- 通讯作者：未说明（论文中未明确标注通讯作者）
- 作者列表：Sharut Gupta (MIT CSAIL), Shobhita Sundaram (MIT CSAIL), Chenyu Wang (MIT CSAIL), Stefanie Jegelka (TU Munich, MIT CSAIL), Phillip Isola (MIT CSAIL)

💡 **毒舌点评**

亮点在于其理论部分严谨地证明了无配对多模态数据在信息论层面的价值，为“跨模态知识蒸馏无需配对”提供了坚实论据，实验也相当全面。短板是UML的框架（共享权重，交替训练）相对直观，并非一个复杂的“新模型”，且其实验验证主要围绕视觉分类，对理论承诺的“适用于音频”只做了初步展示，深度稍显不足。

🔗 **开源详情**

- **代码**：论文中未提及代码仓库链接。仅提供了项目主页（https://unpaired-multimodal.github.io/）。
- **模型权重**：未提及公开预训练或训练好的模型权重。
- **数据集**：实验中使用的数据集均为公开基准（MultiBench， ImageNet-ESC， 以及各种标准图像分类数据集）。
- **Demo**：未提供在线演示。
- **复现材料**：提供了非常详细的复现材料。附录B包含了完整的实验细节，如硬件环境（V100 GPU）、数据集描述与预处理、训练协议（优化器、学习率范围、轮数等）、以及超参数搜索网格（Table 5）。这为研究者复现实验提供了充分的信息。
- **论文中引用的开源项目**：论文依赖了多个开源模型和库，包括：
    - 视觉编码器：ViT (Dosovitskiy et al., 2020), DINOv2, CLIP。
    - 文本编码器：OpenLLaMA, BERT (Devlin et al., 2019), RoBERTa, GPT-2。
    - 音频编码器：AudioCLIP (Guzhov et al., 2021)。
    - 框架：PyTorch。
    - 优化器：AdamW (Loshchilov & Hutter, 2017)。
    - 数据集：MultiBench (Liang et al., 2021), ImageNet-ESC (Lin et al., 2023) 等。

📌 **核心摘要**

本文旨在解决多模态学习中对昂贵且有限的配对数据（如图像-文本对）的依赖问题。其核心方法是提出**无配对多模态学习器（UML）**，这是一个模态无关的训练范式，让单一模型在不同模态的输入（如图像和文本）之间交替训练并共享权重。这一设计基于不同模态是对同一底层现实的不同投影的假设，使得模型无需显式的对齐关系就能从跨模态结构中受益。与已有方法相比，UML的新颖之处在于它完全摒弃了对模态间配对关系的要求，甚至摒弃了用于推断对齐的中间目标。理论上，论文在线性数据生成假设下证明了，加入无配对的辅助模态数据可以严格增加关于共享潜在变量的Fisher信息，从而得到更准确的表示。实验上，论文展示了UML在多个图像和音频分类基准上，无论是自监督还是监督、少样本还是全数据设置下，都能稳定提升仅基于目标模态的基线模型性能。例如，在MUSTARD数据集上，图像表示的分类准确率从59.66%提升至63.28%（Table 1）。实际意义在于，该方法能够轻松利用互联网上大量存在的、无需配对的多模态数据来提升特定模态模型的性能，具有广泛的应用潜力。其主要局限性在于，目前的实验主要集中在分类任务，对生成等其他任务的有效性有待验证，且论文未深入探究无配对设置下可能出现的梯度干扰、模态崩溃等优化挑战。

---

### 114. [TASTE: Text-Aligned Speech Tokenization and Embedding for Spoken Language Modeling](/audio-paper-digest-blog/posts/2026-05-04-taste-text-aligned-speech-tokenization-and)

✅ **7.0/10** | 前25% | #语音生成 | #自回归模型 | #语音大模型 #预训练

👥 **作者与机构**

- 第一作者：Liang-Hsuan Tseng (台湾大学电信工程学研究所，MediaTek Research实习)
- 通讯作者：未明确说明，但Yi-Chang Chen和Hung-yi Lee提供了单位邮箱。
- 作者列表：
    - Liang-Hsuan Tseng (台湾大学电信工程学研究所，MediaTek Research实习)
    - Yi-Chang Chen (MediaTek Research)
    - Kuan-Yi Lee (台湾大学电信工程学研究所，MediaTek Research实习)
    - Da-Shan Shiu (MediaTek Research)
    - Hung-yi Lee (台湾大学人工智能研究中心)

💡 **毒舌点评**

论文提出了一个解决语音-文本联合建模中序列长度不匹配问题的优雅方案，即让语音token在分词阶段就与文本转录对齐，这确实简化了后续的语言模型训练。然而，该方法强依赖于一个准确的ASR前端（尽管论文进行了鲁棒性测试），且当前验证主要集中在语音续写等相对简单的任务上，对于更复杂的多轮对话、指令跟随等能力未做探讨，其作为“基础模型”的通用性仍有待证明。

🔗 **开源详情**

- **代码**：论文中明确提及提供代码，地址为 `https://mtkresearch.github.io/TASTE-SpokenLM.github.io`（实际为项目主页，需跳转至代码仓库）。
- **模型权重**：论文中明确提及提供模型，地址同上。
- **数据集**：使用公开数据集 Emilia 和 LibriTTS，未提供独有数据集。
- **Demo**：论文中明确提及提供在线演示，地址为上述网址。
- **复现材料**：论文在附录中提供了非常详细的超参数、训练配置、评估细节和算法伪代码（如解决分词器不匹配的算法1），复现信息充分。
- **引用的开源项目**：Whisper (编码器), S3 token/Vocoder (语音单元和声码器), LLaMA (基座LLM), DeepSpeed/Liger Kernel (训练加速), Montreal Forced Aligner (对齐工具), HiFi-GAN。

📌 **核心摘要**

1.  **要解决什么问题**：现有语音语言模型（SLM）在联合文本和语音建模时，面临模态间隙和序列长度不匹配的挑战。传统语音分词（如EnCodec）产生的token序列远长于对应文本，需要复杂的对齐策略（如插入填充、交错生成）才能进行联合建模，增加了复杂性。
2.  **方法核心是什么**：提出**TASTE**，一种文本对齐的语音分词与嵌入方法。它直接将语音分词过程与文本转录对齐：首先使用ASR获得文本转录，然后通过一个基于注意力的聚合器（以文本转录为查询，ASR编码器最后一层为键、浅层为值）将语音表示压缩并硬对齐到每个文本token上，最后通过RVQ量化。训练目标为语音重建。由此得到的语音token/嵌入在序列长度和位置上与文本token一一对应。
3.  **与已有方法相比新在哪里**：不同于以往先独立分词再设法对齐的思路，TASTE在分词阶段就完成了文本-语音对齐，实现了一种“端到端”的联合分词。这使得在联合语言模型（TASLM）中，可以同时预测下一个文本token和对应的语音token/嵌入，无需额外对齐规则。其语音token专注于携带副语言信息（如韵律、音色），避免了冗余编码文本内容。
4.  **主要实验结果如何**：
    *   **语音重建**：在LibriSpeech上，TASTE以极低比特率（~150 bps，约3 tokens/秒）实现了与高比特率方法（如S3 token, 600 bps）可比的重建质量和相似度（表1）。
    *   **语音续写**：在3秒语音提示后的续写任务上，基于1.3B参数LLaMA微调的TASLM在GPT-4o语义评分（3.16）和人工MOS（4.16）上显著优于其他7B级SLM（表2）。
    *   **似然基准**：在SALMON（声学）和StoryCloze（语义）基准上表现与其它联合建模方法相当，在StoryCloze上达到最佳（76.5%/76.7%）。
    *   **少样本语音QA**：TASLM是少数能在少样本场景下保持基座文本LLM性能的SLM（表3）。
5.  **实际意义是什么**：TASTE提供了一种更简洁、高效的构建文本-语音联合模型的方式，降低了训练复杂度。其极低比特率的语音分词对带宽敏感的传输和存储场景有潜在价值。文本对齐的特性也自然支持了**文本对齐的语音编辑**（如图3），为精细的语音控制提供了新思路。
6.  **主要局限性是什么**：论文明确提到，当前模型缺乏对话轮次管理和指令跟随能力；仅在英语上验证，多语言泛化性未知；分词器聚焦于清晰语音，未处理重叠语音、非语言事件（如笑声）；系统延迟和流式性能未优化。

---

### 115. [Instilling an Active Mind in Avatars via Cognitive Simulation](/audio-paper-digest-blog/posts/2026-05-04-instilling-an-active-mind-in-avatars-via)

✅ **7.0/10** | 前25% | #音视频 | #多模态模型 #扩散模型 | #多模态模型 #扩散模型

👥 **作者与机构**

第一作者：Jianwen Jiang（字节跳动 ByteDance）
通讯作者：Jianwen Jiang（字节跳动 ByteDance，论文中标注为“Project Lead and Corresponding author”）
作者列表：Jianwen Jiang, Weihong Zeng, Zerong Zheng, Jiaqi Yang, Chao Liang, Wang Liao, Han Liang, Weifeng Chen, Xing Wang, Yuan Zhang, Mingyuan Gao（均隶属于字节跳动 ByteDance）

💡 **毒舌点评**

**亮点**：将认知科学的“双系统”概念巧妙映射到模型设计中，用MLLM进行高层“计划”来指导扩散模型的“生成”，这个框架思路新颖且具有启发性，伪最后帧的设计也有效解决了参考图像约束运动动态的问题。
**短板**：论文声称模拟了“System 2”的审慎推理，但该过程实则依赖外部MLLM的推理能力，其输出的“计划”质量取决于所用MLLM，且推理延迟（20-30秒）在实时或交互应用中是个显著负担。多模态融合的内部机制（尤其是音频、文本与视觉token如何在Transformer内“对称融合”）描述略显笼统。

🔗 **开源详情**

- **代码**：论文中未提及代码链接。
- **模型权重**：未提及公开模型权重。
- **数据集**：论文中详细描述了自建数据集的构建流程，但未提及公开或提供下载。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文在附录中提供了详细的实现细节、训练超参数、数据处理流程和评估协议，对于复现工作有很高的参考价值。
- **引用的开源项目**：论文依赖或对比的开源工具/模型包括：Whisper（音频编码器）、SyncNet（同步评估）、Raft（光流计算）、PySceneDetect、PaddleOCR、Q-Align、miniCPM-o、Seed-1.5-VL、Gemini-2.5-Pro（用于评估）等。

📌 **核心摘要**

本文针对当前视频动画模型（尤其是音频驱动模型）仅能实现低级别动作同步，而无法理解高级语义（如情感、意图）的局限性，提出了一种受人类认知“双系统理论”启发的新型框架，旨在为数字人注入“主动思维”。
方法核心是模拟双系统：**System 2** 由一个多模态大语言模型（MLLM）代理构成，通过分析输入的音频、图像和文本，生成结构化的文本“计划”，为动画提供高级语义指导；**System 1** 则是一个专门的多模态扩散Transformer（MMDiT），它融合System 2的文本指导、音频的反应式信号以及视频的视觉信息，生成最终动画。关键创新在于引入了“伪最后帧”策略，用以替代传统方法中静态的参考图像条件化，从而在保持身份一致性的同时释放了运动动态性。
与已有方法相比，新在：1. 首次将双系统认知理论形式化地应用于视频动画生成，明确区分了审慎规划和反应式合成；2. 设计了包含MLLM代理的端到端推理-生成框架；3. 提出了伪最后帧和对称模态融合的新颖架构设计。
主要实验结果（基于自建数据集及CelebV-HQ、CyberHost基准）显示，该方法在唇形同步（如Sync-C）、视频质量（如IQA）、运动自然度（主观用户研究GSB评分）及上下文一致性上均达到或超越现有SOTA水平。例如，在多人动画的消融研究中（表3），完整模型在驱动精度（DA）和主观GSB评分上分别达到0.94和+0.26，显著优于基线。
实际意义在于为创建具有更高层次智能、情感表达和上下文感知能力的数字人提供了新范式。主要局限性包括：引入MLLM推理带来的显著额外计算开销（约20-30秒）；框架对强大MLLM的依赖性；以及虽然提出了多人场景的扩展，但相关实验的规模和复杂度仍有限。

---

### 116. [Generative Adversarial Post-Training Mitigates Reward Hacking in Live Human-AI Music Interaction](/audio-paper-digest-blog/posts/2026-05-04-generative-adversarial-post-training-mitigates)

✅ **7.0/10** | 前25% | #音乐生成 | #强化学习 | #对抗训练 #实时处理

👥 **作者与机构**

- 第一作者：Yusong Wu (Mila, Quebec Artificial Intelligence Institute, Université de Montréal)
- 通讯作者：Natasha Jaques (University of Washington), Cheng-Zhi Anna Huang (Massachusetts Institute of Technology)
- 作者列表：Yusong Wu (Mila, Université de Montréal), Stephen Brade (Massachusetts Institute of Technology), Aleksandra Teng Ma (Georgia Institute of Technology), Tia-Jane Fowler (University of Washington), Enning Yang (McGill University), Berker Banar (Independent Researcher), Aaron Courville (Mila, Université de Montréal), Natasha Jaques (University of Washington), Cheng-Zhi Anna Huang (Massachusetts Institute of Technology)

💡 **毒舌点评**

亮点：在强化学习后训练中巧妙引入对抗训练思想来解决“奖励黑客”问题，特别是通过一个自适应更新的判别器来平衡“真实感”与任务目标，方案设计精巧且有实验验证。短板：方法的核心创新是将GAN和RL思想结合用于序列模型，这并非完全原创；研究场景（实时旋律-和弦伴奏）非常垂直，其影响力可能局限于音乐生成领域，对更广泛的序列生成任务（如对话）的普适性未得到充分论证。

🔗 **开源详情**

- **���码**：是。论文提供了代码仓库链接：`https://github.com/lukewys/realchords-pytorch`。
- **模型权重**：未明确提及是否公开所有训练阶段（如判别器、奖励模型）的权重，仅提供了代码仓库。
- **数据集**：训练使用Hooktheory, POP909, Nottingham。论文未明确说明这些数据集的公开获取方式，但根据引用，它们可能是公开或可申请的。评估使用了公开的Wikifonia子集。
- **Demo**：是。提供了音频示例网页：`https://realchords-GAPT.github.io`。
- **复现材料**：论文附录提供了详细的模型架构（层数、维度等）、训练超参数（学习率、batch size等）、奖励模型性能以及消融实验结果。未提供训练脚本或配置文件。
- **引用的开源项目**：论文基于并扩展了ReaLchords (`https://github.com/lukewys/realchords-pytorch`) 的代码库，并使用了LLaMA风格的Transformer架构。

📌 **核心摘要**

1. **要解决什么问题**：在基于强化学习的生成式AI后训练中，模型为了最大化奖励会产生重复、单一的输出（奖励黑客）。这在要求实时协作、多样性和创造性的音乐交互（即兴合奏）场景中尤为有害，会破坏创造性流动和用户控制感。
2. **方法核心是什么**：提出生成对抗后训练（GAPT），在原有的基于和谐度的任务奖励之外，引入一个同时训练的判别器，该判别器学习区分策略生成的轨迹和真实数据轨迹。策略的奖励变为最大化判别器输出的“真实感”评分（对抗奖励）与任务奖励之和。为稳定训练，采用两阶段自适应判别器更新策略：先预热，后仅在策略有效提升对抗奖励时更新判别器。
3. **与已有方法相比新在哪里**：相比于仅使用KL散度约束或熵正则化来缓解奖励黑客的方法，GAPT通过对抗训练提供了一个数据驱动的、动态的正则化信号，迫使策略在优化任务目标时仍保持输出的自然性。该方法专门针对需要实时适应和多样性的交互式生成场景。
4. **主要实验结果如何**：
    - **固定旋律模拟**：在测试集上，GAPT的和谐度（note-in-chord ratio）为0.497，多样性（Vendi Score）为26.645，相比基线ReaLchords（0.484， 20.968）在保持高和谐度的同时显著提升了多样性。在留外数据集（Wikifonia）上，GAPT也取得了最佳平衡（0.470， 11.295）。
    - **模型交互**：与学习的旋律智能体交互时，GAPT同样取得最佳和谐度（0.648）和多样性（12.914）平衡。
    - **真人用户研究**：12名专家音乐家在实时交互中，对GAPT模型的“适应速度”和“控制与代理感”评分显著高于ReaLchords（p < 0.05），定性反馈称赞其适应更快、不无聊。
    - **消融实验**：验证了对抗奖励、奖励权重、判别器输入形式以及不同RL优化器（如GRPO）下该方法的有效性和鲁棒性。
5. **实际意义是什么**：为实时交互式AI音乐创作系统提供了更实用、更具创造性的伴奏模型，提升了人机协作体验。该方法为解决序列生成模型RL后训练中的奖励黑客问题提供了一种简单有效的范式，可能推广到对话、故事生成等其他需要多样性和适应性的领域。
6. **主要局限性是什么**：研究聚焦于特定的旋律-和弦伴奏任务，模型架构和训练针对此场景设计。对于更复杂的音乐交互（如多乐器、自由即兴）或通用的文本生成任务，方法的有效性需要进一步验证。判别器训练引入了额外的复杂性和计算开销。

---

### 117. [OmniCVR: A Benchmark for Omni-Composed Video Retrieval with Vision, Audio, and Text](/audio-paper-digest-blog/posts/2026-05-04-omnicvr-a-benchmark-for-omni-composed-video)

✅ **7.0/10** | 前25% | #音频检索 | #多模态模型 | #基准测试 #数据集

👥 **作者与机构**

- 第一作者：Junyang Ji（清华大学、南方科技大学、快手科技）
- 通讯作者：Zhihai He（南方科技大学）、Wenming Yang（清华大学）
- 作者列表：Junyang Ji（清华大学，南方科技大学，快手科技），Shengjun Zhang（快手科技），Da Li（快手科技，中国科学院大学），Yuxiao Luo（快手科技，北京大学），Yan Wang（快手科技），Di Xu（快手科技），Biao Yang（快手科技），Wei Yuan（快手科技，项目负责人），Fan Yang（快手科技，项目负责人），Zhihai He（南方科技大学，通讯作者），Wenming Yang（清华大学，通讯作者）

💡 **毒舌点评**

**亮点**：论文一针见血地指出了当前多模态模型“视觉-文本”偏科、严重忽视音频信息的普遍问题，并通过一个高质量、大规模的诊断基准（OmniCVR）将其量化，这比提出一个改进模型更有价值。**短板**：提出的解决方案“AudioVLM2Vec”本质上是把音频先转录/描述成文本再喂给视觉语言模型，这种“音频-文本化”的工程化方案虽然有效，但显得不够优雅，且引入了额外的延迟和潜在信息损失，算不上是最根本的端到端解决方案。

🔗 **开源详情**

- **代码**：论文承诺将开源完整代码库，包括数据生成脚本、训练代码和评估协议。具体代码仓库链接在提供的论文全文中未直接显示，但提到数据将发布在HuggingFace（https://huggingface.co/datasets/Jun-Yang/OmniCVR），代码链接可能随发布同步公开。**论文中未明确给出代码仓库的直接URL**。
- **模型权重**：论文承诺将公开AudioVLM2Vec模型权重。**未提及具体模型权重的发布链接**。
- **数据集**：OmniCVR数据集（包括160K+片段、50K+三元组、5K测试集）将完全开源。获取方式为通过上述HuggingFace链接。
- **Demo**：**论文中未提及**是否提供在线演示。
- **复现材料**：论文在附录（Appendix G）中提供了用于数据生成（如生成视频描述、修改指令）的完整提示词模板，以及详细的双重验证协议说明，这对于复现数据生成管线至关重要。然而，关于模型训练的具体细节（学习率、优化器、批次大小等）**论文中未提及**。
- **论文中引用的开源项目/模型**：论文明确使用了以下开源模型作为组件或基线：
    *   **Qwen2.5-Omni**：用于视频音频标注生成。
    *   **Gemini 2.5 Pro**：用于数据验证。
    *   **Qwen2-Audio-7B-Instruct**：用于AudioVLM2Vec中的音频描述生成。
    *   **Qwen2-VL**：作为VLM2Vec和AudioVLM2Vec的视觉-语言骨干。
    *   **CLIP**、**BLIP**、**BLIP-2**、**ImageBind** 等作为基线模型。
    *   **PySceneDetect**：用于视频分割。
    *   所有使用的数据集（HowTo100M, MSR-VTT, VATEX, YouTube8M, YouCook2, VALOR）均为公开数据集。

📌 **核心摘要**

本文旨在解决现有视频检索基准和模型普遍忽视音频模态的关键问题。论文提出了首个全模态组合视频检索基准OmniCVR，该基准将视觉、音频和文本视为同等重要的第一类模态。核心方法是构建了一个包含50,000个三元组（源视频、修改文本、目标视频）的大规模数据集，其中超过57%的查询需要同时修改视觉和音频（集成查询）。为此，作者设计了一个可扩展的自动化数据生成管线，并通过大模型与人类专家的双重验证确保数据质量。为验证基准，论文提出了AudioVLM2Vec模型，其核心创新是利用音频理解大模型（Qwen2-Audio）将音频转为细粒度描述文本，再与视觉信息一同输入VLM2Vec框架。主要实验结果表明，AudioVLM2Vec在OmniCVR基准上取得了最优性能，尤其是在音频中心查询上，相比基线VLM2Vec实现了巨大的性能提升（R@1从12.4提升到77.2）。这证明了显式注入音频语义对于跨模态检索的关键作用，并暴露了现有“全模态”模型在音频推理上的根本缺陷。该工作的实际意义在于为更真实的多模态视频理解设立了新标准，推动研究向听觉-视觉-语言融合迈进。主要局限性在于提出的“音频转文本”方案带来了额外的推理延迟（约1.77倍），且该方案可能无法完美捕捉音频的所有非语义信息（如音色、节奏等）。

---

### 118. [Continuous Audio Language Models](/audio-paper-digest-blog/posts/2026-05-04-continuous-audio-language-models)

✅ **7.0/10** | 前25% | #语音合成 | #自回归模型 | #音乐生成 #一致性模型

👥 **作者与机构**

第一作者：Simon Rouard（Kyutai; UMR STMS, IRCAM-CNRS, Sorbonne Univ.）
通讯作者：未明确说明（Alexandre Défossez 提供了邮箱，且为资深作者，通常为通讯作者）
作者列表：
    - Simon Rouard（Kyutai; UMR STMS, IRCAM-CNRS, Sorbonne Univ.）
    - Manu Orsini（Kyutai）
    - Axel Roebel（UMR STMS, IRCAM-CNRS, Sorbonne Univ.）
    - Neil Zeghidour（Kyutai）
    - Alexandre Défossez（Kyutai）

💡 **毒舌点评**

论文核心亮点在于其精巧的“双头”架构设计——用带噪声的长上下文Transformer保证生成稳定性，用干净的短上下文Transformer保留细节，并用高效的一致性模型头取代传统的RQ-Transformer，在多个任务上实现了质量与速度的双赢。然而，其宣称的“超越SOTA”在音乐生成等任务上部分依赖于使用自家训练的数据集重新训练的基线模型，且最关键的音乐数据集未开源，这使得最令人兴奋的实验结果难以被独立社区完全验证和比较，削弱了其作为通用方法的说服力。

🔗 **开源详情**

- **代码**：论文提及了Pocket TTS的代码仓库：`github.com/kyutai-labs/pocket-tts`。对于CALM主框架的开源情况未在主文明确说明。
- **模型权重**：Pocket TTS模型权重计划通过上述GitHub仓库开源。
- **数据集**：论文使用的主要音乐数据集（LAION-Disco-12M子集）未公开。语音和TTS数据集部分来源公开，但完整混合数据集的获取方式未详细说明。
- **Demo**：提供了示例页面：`iclr-continuous-audio-language-models.github.io`。
- **复现材料**：提供了详细的超参数设置（表14, 15）、损失函数公式、架构描述和技术报告（`kyutai.org/pocket-tts-technical-report`）。
- **论文中引用的开源项目**：依赖的开源项目包括：Mimi (Défossez et al., 2024b), Helium-1 (Kyutai, 2025), SentencePiece, Whisper, WavLM, Mistral 7B, CLAP, fairseq等。

📌 **核心摘要**

1.  **问题**：当前主流的音频语言模型（ALM）依赖离散化的音频token（如RVQ），这造成了音频质量与计算成本之间的权衡。提高质量需要增加token数量（更高码率），从而导致模型计算负担加重，难以在边缘设备上实现实时高质量生成。
2.  **方法**：提出连续音频语言模型（CALM），在VAE的连续隐空间中直接建模，避免了量化损失。其架构由三部分组成：1）一个因果Transformer骨干网络，处理长程依赖，并在训练时对输入施加噪声以抑制推理时的误差累积；2）一个轻量级短上下文Transformer，提供局部、干净的细节信息；3）一个基于一致性模型的小型MLP头部，用于快速生成下一个连续帧。
3.  **创新**：相比先前基于扩散的MAR方法，CALM引入了噪声注入的长上下文与干净短上下文结合的双Transformer设计，并用一致性模型（Consistency Model）取代了扩散头，实现了1步快速采样。此外，还提出了高斯温度采样、潜在分类器自由引导（Latent CFG）和潜在蒸馏等技巧，进一步提升质量和效率。
4.  **结果**：在语音续写、文本转语音（TTS）和音乐续写三个任务上进行了评估。实验表明，CALM在多个指标上优于强基线。例如，在语音续写中，1步一致性模型在声学质量MOS（3.45）和意义性Elo（2023）上优于8-RVQ的RQ-Transformer基线（2.75，1870），且采样头速度快12.3倍。在音乐续写中，1步一致性模型FAD（0.83）优于32-RVQ基线（1.06），整体速度快2.2倍。最终，通过蒸馏得到的100M参数Pocket TTS模型可在笔记本CPU上实时运行。
5.  **意义**：为高质量、高效率的音频生成提供了新的范式，摆脱了对离散token的依赖。特别是Pocket TTS证明了在资源受限设备上实现高性能TTS的可行性，具有广泛的应用前景。
6.  **局限**：论文中的部分最先进对比（如TTS任务中的F5-TTS, DiTAR）并非在同一数据集上复现的结果；音乐生成所用的核心数据集未公开；论文主要关注生成质量与效率，对于模型的可控性、编辑能力等探讨较少。

---

### 119. [AVEX: What Matters for Animal Vocalization Encoding](/audio-paper-digest-blog/posts/2026-05-04-avex-what-matters-for-animal-vocalization-encoding)

✅ **7.0/10** | 前25% | #生物声学 | #预训练 | #自监督学习 #模型比较

👥 **作者与机构**

- 第一作者：Marius Miron（Earth Species Project），David Robinson（Earth Species Project）（共同贡献）
- 通讯作者：Marius Miron, David Robinson（Earth Species Project）
- 作者列表：Marius Miron（Earth Species Project），David Robinson（Earth Species Project），Milad Alizadeh（Earth Species Project），Ellen Gilsenan-McMahon（Earth Species Project），Gagan Narula（Earth Species Project），Emmanuel Chemla（Earth Species Project），Maddie Cusimano（Earth Species Project），Felix Effenberger（Earth Species Project），Masato Hagiwara（Earth Species Project），Benjamin Hoffman（Earth Species Project），Sara Keen（Earth Species Project），Diane Kim（Earth Species Project），Jane Lawton（Earth Species Project），Jen-Yu Liu（Earth Species Project），Aza Raskin（Earth Species Project），Olivier Pietquin（Earth Species Project），Matthieu Geist（Earth Species Project）。

💡 **毒舌点评**

亮点在于实验设计极其严谨和全面，如同为生物声学编码器领域做了一次“高考”，系统性地比较了各种技术路线，得出了可操作的“最优训练配方”。短板在于，其核心贡献是实证结论而非提出一种全新的、具有独创性的模型架构，更像是一个高质量的“工程最佳实践”指南。

🔗 **开源详情**

- **代码**：提供代码仓库链接 https://projects.earthspecies.org/avex/ ，包含一个名为AVEX的Python库，用于模型加载、推理以及生物声学表征学习模型的训练和评估系统。
- **模型权重**：明确提及并发布了多个模型检查点（checkpoint），包括本文训练的`sl-BEATS-bio`， `sl-BEATS-all`， `EffNetB0-all`等（见表2）。
- **数据集**：论文使用了多个公开数据集（如Xeno-canto, iNaturalist, AudioSet等），并进行了说明。未提及发布新的整合数据集。
- **Demo**：论文中未提及在线演示。
- **复现材料**：提供了非常详尽的复现材料，包括：完整的训练超参数表（表5）、数据集划分与预处理说明、评估指标的具体计算公式（附录B.2）、以及用于生成新基准数据集的公开数据集链接（附录B.4）。
- **论文中引用的开源项目**：BEATs (Microsoft)， EAT (开源实现)， EfficientNetB0 (torchvision)， 以及用于处理BirdNet和Perch的TensorFlow-Lite。

📌 **核心摘要**

1.  **问题**：当前生物声学编码器通常局限于特定物种（如鸟类）、单一模型架构或训练范式，且评估任务和数据集有限，难以满足广泛、泛化的实际应用需求（如物种识别、个体识别、声音库发现等）。
2.  **方法核心**：本文进行了一项大规模实证研究，系统性地调查并比较了三大方面：（1）模型架构（CNN vs. Transformer）、（2）训练数据混合（生物声学数据 vs. 通用音频数据）、（3）训练范式（自监督学习、监督学习、两阶段训练）。
3.  **与已有方法相比新在哪里**：首次在如此广泛的维度和规模上，对生物声学编码器的构建要素进行公平、统一的实验比较。特别创新性地引入并评估了“自监督预训练 + 监督后训练”的两阶段范式，并系统验证了在训练中混合通用音频数据对提升模型泛化能力的关键作用。
4.  **主要实验结果**：
    - 在涵盖物种分类、检测、个体ID、声音库发现等任务的26个数据集上，采用“在混合生物声学+通用音频数据上进行自监督预训练，再用相同混合数据进行监督后训练”的配方，取得了整体最优的性能（见下表关键结果摘录）。
    - 消融研究表明：在自监督预训练阶段加入通用音频（AudioSet）能显著提升模型在各类任务上的表现（如图2a所示）；监督模型在分布内任务表现强，但自监督模型在分布外任务上性能下降更小（如图2b所示）；后训练能有效提升自监督骨干网络的性能（如图3所示）。

    | 模型 | BEANS分类 (Probe) | BEANS检测 (R-AUC) | BirdSet (Probe) | 个体ID (R-AUC) | 声音库 (R-AUC) |
    | :--- | :--- | :--- | :--- | :--- | :--- |
    | **sl-BEATS-all (本文最佳)** | **0.832** | **0.604** | **0.726** | **0.511** | **0.798** |
    | BirdNet (SOTA基线) | 0.796 | 0.523 | 0.687 | 0.472 | 0.795 |
    | BEATS (SFT) | 0.724 | 0.504 | 0.692 | 0.375 | 0.755 |
    | EffNetB0-bio | 0.786 | 0.563 | 0.695 | 0.457 | 0.806 |

    *（注：以上为表3中关键指标摘录，Probe为分类准确率/mAP，R-AUC为检索ROC AUC，数值越大越好）*
5.  **实际意义**：为生物声学领域提供了一套可复现、高性能的通用编码器训练方案（AVEX）和模型，有助于加速该领域的研究（如动物通讯解码、生物多样性监测）并推动其走向实际应用。开源的代码库和模型也为后续工作提供了坚实基础。
6.  **主要局限性**：研究结论受限于当前可用的公开数据和模型架构；部分消融实验（如消融鲸鱼或非鸟类数据）显示结果并非完全一致，表明数据多样性的影响可能因任务而异；研究所有模型均在16kHz采样率下评估，可能损失了部分高频信息。

---

### 120. [OptMerge: Unifying Multimodal LLM Capabilities and Modalities via Model Merging](/audio-paper-digest-blog/posts/2026-05-04-optmerge-unifying-multimodal-llm-capabilities-and)

✅ **7.0/10** | 前25% | #模型比较 | #迁移学习 | #多模态模型 #模型评估

👥 **作者与机构**

- 第一作者：Yongxian Wei (清华大学)
- 通讯作者：Chun Yuan (清华大学)
- 作者列表：Yongxian Wei (清华大学)， Runxi Cheng (清华大学)， Weike Jin (华为诺亚方舟实验室)， Enneng Yang (中山大学)， Li Shen (中山大学)， Lu Hou (华为诺亚方舟实验室)， Sinan Du (清华大学)， Chun Yuan (清华大学)， Xiaochun Cao (中山大学)， Dacheng Tao (南洋理工大学)

💡 **毒舌点评**

亮点在于提出了首个系统性的MLLM能力融合基准和“无数据”的模态融合思路，为社区提供了重要的评估框架和基线。短板是论文标题中的“Omni-language model”在实验中仅限于简单的音视频问答融合，与真正意义上的通用全能模型差距较大，且核心方法OptMerge在理论层面更像是对现有技术的巧妙组合。

🔗 **开源详情**

- **代码**：论文明确表示“All code and checkpoints are publicly available here”，并提供了开源承诺，但具体链接需从论文或官方页面获取。
- **模型权重**：承诺公开基准中训练的所有专家模型检查点（InternVL2.5和Qwen2-VL系列，以及模态融合用的Vicuna-7B变体）。
- **数据集**：使用的训练数据来自多个公开数据集，论文在表1和表11中列出了详细清单。基准本身所收集整理的数据是否作为独立数据集发布未说明。
- **Demo**：未提及在线演示。
- **复现材料**：提供了非常详细的训练超参数（学习率、优化器、epoch数、LoRA秩等）、评估设置（使用的评测库、提示模板）和硬件信息（8xV100），复现指引充分。
- **论文中引用的开源项目**：依赖多个开源模型和库，如InternVL2.5， Qwen2-VL， Vicuna， CLIP， BEATs， LanguageBind， VLMEvalKit， LMMs-Eval， mergekit等。

📌 **核心摘要**

本文针对多模态大语言模型（MLLM）能力整合与模态统一的需求，研究模型融合这一低成本、无数据的技术路径。论文的核心工作是：(1) 构建了首个针对MLLM的细粒度能力融合基准，涵盖VQA、几何推理、图表理解、OCR和视觉定位五种能力，并探索了跨模态（视觉-音频-视频）的模型融合；(2) 提出了一种新的模型融合算法OptMerge，通过低秩近似去除任务向量噪声，并基于任务向量间的交互优化合并参数，实验表明其在多种设置下平均性能提升2.48%；(3) 通过大量实验证明，在无需训练数据的情况下，模型融合能够构建性能媲美甚至超越多任务混合训练的增强型MLLM，并有效整合不同模态信息。其主要局限性在于，当前实验规模限于7B参数模型，且“全能模型”的探索尚处于初步阶段。

---

### 121. [LLM2Fx-Tools: Tool Calling for Music Post-Production](/audio-paper-digest-blog/posts/2026-05-04-llm2fx-tools-tool-calling-for-music-post)

✅ **7.0/10** | 前25% | #音乐信息检索 | #大语言模型 | #多模态模型 #数据集

👥 **作者与机构**

- 第一作者：SeungHeon Doh（KAIST, Sony AI）、Junghyun Koo（Sony AI）（共同第一作者）
- 通讯作者：未明确说明
- 作者列表：SeungHeon Doh (KAIST, Sony AI), Junghyun Koo (Sony AI), Marco A. Martínez-Ramírez (Sony AI), Woosung Choi (Sony AI), Wei-Hsiang Liao (Sony AI), Qiyu Wu (Sony Group Corporation), Juhan Nam (KAIST), Yuki Mitsufuji (Sony AI, Sony Group Corporation)

💡 **毒舌点评**

亮点是这篇论文首次将LLM的工具调用范式引入到音频效果链生成任务，框架设计完整（从感知、推理到执行），并配套发布了高质量的对话式数据集LP-Fx，为后续研究建立了不错的基础。短板是实验验证范围主要局限于单声道、单乐器音频，在真正复杂的多轨混音场景下有效性存疑，且“可解释性”在面对多效果器组合产生的复杂听感时可能大打折扣。

🔗 **开源详情**

*   **代码**：论文中未提及代码仓库链接。
*   **模型权重**：未提及公开权重。
*   **数据集**：开源了LP-Fx数据集。论文提供了Demo页面链接：`https://seungheondoh.github.io/llm2fx-tools-demo/`，通常数据集下载链接会在此类页面上提供。
*   **Demo**：提供了在线演示页面：`https://seungheondoh.github.io/llm2fx-tools-demo/`。
*   **复现材料**：论文详细说明了数据生成流程、参数范围（表6）、训练两阶段的学习率/步数等关键细节。提供了多个附录（C-F）用于补充生成提示词、评估指标定义等。
*   **论文中引用的开源项目**：
    *   **音频效果库**：Pedalboard（用于部分效果器）。
    *   **音频效果移除**：Fx-Removal (Rice et al., 2023)。
    *   **不同iable DSP基线**：dasp-pytorch仓库（用于DeepAFx-ST基线）。
    *   **LLM基础**：Qwen3模型（Yang et al., 2025）。

📌 **核心摘要**

本文提出LLM2Fx-Tools，一个基于大语言模型（LLM）的多模态框架，用于自动生成可执行的音乐后期制作音频效果链（Fx-chain）。该方法旨在解决传统自动FX链估计方法在灵活性（动态选择效果和排序）和可解释性方面的不足。核心方法是利用一个预训练音频编码器将干声和参考音频映射到语言模型空间，再通过LLM（Qwen3-4B）以链式思维（CoT）规划为引导，生成结构化的工具调用序列，从而选择效果器、确定顺序并估算参数。为训练此模型，作者构建并开源了LP-Fx数据集，包含约10.1万条带有CoT标注的对话式样本。实验在逆向工程（给定干声和湿声推导FX链）和音频效果风格迁移（从参考音频推断FX链并应用于新音频）两个任务上进行。主要结果表明，LLM2Fx-Tools在效果分类准确率（80%）、排序相关性（0.56）以及多项感知和特征距离指标上优于回归、多任务学习等传统基线，也优于闭源的Gemini 2.5 Flash模型。MUSHRA主观听感测试也证实了其优势。论文的核心意义在于提出了一种可解释、可控且基于对话的音频后期制作新范式。主要局限性包括：处理范围限于单声道音频、FX链推导依赖于预处理得到的伪干声、以及效果器逆向工程本身存在的一到多映射歧义性。

---

### 122. [Knowing When to Quit: Probabilistic Early Exits for Speech Separation Networks](/audio-paper-digest-blog/posts/2026-05-04-knowing-when-to-quit-probabilistic-early-exits)

✅ **7.0/10** | 前25% | #语音分离 | #概率建模 | #语音增强 #提前退出

👥 **作者与机构**

- 第一作者：Kenny Falkær Olsen (Technical University of Denmark, WS Audiology)
- 通讯作者：未说明
- 作者列表：Kenny Falkær Olsen (Technical University of Denmark, WS Audiology)， Mads Østergaard (WS Audiology)， Karl Ulbæk (WS Audiology)， Søren Føns Nielsen (WS Audiology)， Rasmus Malik Høegh Lindrup (WS Audiology)， Bjørn Sand Jensen (Technical University of Denmark)， Morten Mørup (Technical University of Denmark)

💡 **毒舌点评**

**亮点**在于将概率建模与早退机制结合，推导出一套基于置信度的、可解释的SNR退出准则，比传统的启发式或固定损失权衡方法更 principled。**短板**是框架的实用性高度依赖于模型预测的不确定性（σ²）是否校准良好，论文显示这需要额外的、在全长度数据上的微调，增加了实际部署的复杂性，且核心模型架构（PRESS-Net）本身在绝对性能上并非无懈可击。

🔗 **开源详情**

- **代码**：论文中未提及任何代码仓库链接或开源计划。
- **模型权重**：未提及公开预训练模型权重。
- **数据集**：评估使用的WSJ0-2mix， Libri2Mix， WHAM!， WHAMR!， DNS2020均为公开数据集，论文中提供了获取方式的引用链接。
- **Demo**：未提及。
- **复现材料**：论文附录提供了详细的架构图（图2， 图8）、模块描述（编码器/解码器头、线性RNN、逆Gamma参数化块）、数据集描述（附录D）、训练细节（优化器、学习率调度、训练步数等，附录E）以及关键消融实验设置，为复现提供了充分信息。
- **引用的开源项目**：论文中引用了用于数据生成的开源仓库（如pywsj0-mix， LibriMix， DNS-Challenge），以及基础架构和组件（如PyTorch， AdamW， minGRU， Hydra， Mamba等）。

📌 **核心摘要**

1. **问题**：当前深度学习的语音分离与增强网络（如TasNet, SepFormer）通常具有固定的计算复杂度，无法根据输入的简单程度（如低噪声、非重叠语音）动态调整计算量，限制了其在移动设备和助听器等资源受限场景的应用。
2. **方法核心**：提出了PRobabilistic Early-exit for Speech Separation (PRESS) 框架。该方法联合建模清晰语音信号及其预测误差的方差（采用共轭逆Gamma先验），从而导出预测的信噪比（SNR）分布。基于此，可以构建出可解释的早退条件，即当模型对SNR达到某一目标水平有足够信心时，即可提前终止计算。
3. **创新点**：
    * 提出了一个统一的、具有不确定感知的概率框架，用于建模预测质量和推导退出条件，无需手动权衡多个损失项。
    * 设计了PRESS-Net架构，基于线性RNN和早期分裂（early splitting），旨在同时实现高计算效率与高质量的中间表征重建。
    * 引入了一个统一的退出SNR条件，综合考虑了目标SNR、SNR改进和参考信号SNR，以处理静默情况。
4. **主要实验结果**：在WSJ0-2mix、Libri2Mix、WHAM!、WHAMR!和DNS2020数据集上进行了评估。实验表明（见表2），PRESS模型（如PRESS-4(S)和PRESS-12(M)）在仅使用部分计算量（例如，仅运行4/12个解码器块）时，就能达到接近使用全部计算的最终性能。更重要的是，通过概率退出条件动态调整计算，其效率-性能曲线（图3）优于静态模型。消融实验（表1）验证了概率似然、联合置换训练等关键设计的有效性。
5. **实际意义**：为部署在异构设备上的语音处理系统提供了一种高效、可伸缩的解决方案，可以根据实际需求和设备资源动态平衡性能与功耗/延迟，且退出条件具有物理意义（SNR）和可解释性（置信度）。
6. **主要局限性**：模型对误差方差的预测（σ²）在标准训练后并不校准（图5a，b），需要额外在全长度音频上进行微调才能达到良好校准（图5c，d），这增加了训练的复杂性。此外，退出决策目前是在所有说话人联合进行的，尚未支持对每个说话人独立退出。

---

### 123. [SupCLAP: Controlling Optimization Trajectory Drift in Audio-Text Contrastive Learning with Support Vector Regularization](/audio-paper-digest-blog/posts/2026-05-04-supclap-controlling-optimization-trajectory-drift)

✅ **7.0/10** | 前25% | #音频检索 | #对比学习 | #多语言 #零样本

👥 **作者与机构**

- 第一作者：Jiehui Luo（中央音乐学院），Yuguo Yin（北京大学）（论文注明贡献相等）
- 通讯作者：Yuguo Yin（北京大学）
- 作者列表：
  - Jiehui Luo（中央音乐学院）
  - Yuguo Yin（北京大学）
  - Yuxin Xie（北京大学）
  - Jinghan Ru（北京大学）
  - Xianwei Zhuang（北京大学）
  - Minghua He（北京大学）
  - Aofan Liu（北京大学）
  - Zihan Xiong（电子科技大学）
  - Dongchao Yang（香港中文大学）

💡 **毒舌点评**

这篇论文的亮点在于将对比学习中的“力分解”具象化，并精准指出垂直分量是“双刃剑”，由此设计的SVR正则化方法理论自洽且实验增益稳定。短板则是其创新核心（一个可学习的正则化项）相对朴素，且论文未开源代码，使得这篇发表在顶会上的工作在社区传播和快速迭代上打了折扣。

🔗 **开源详情**

-   代码：论文中未提及代码链接。
-   模型权重：论文中未提及公开的预训练或微调后的模型权重。
-   数据集：使用了公开的AudioCaps和Clotho数据集。多语言翻译版本的数据集未提及是否公开。
-   Demo：未提及。
-   复现材料：论文提供了较为详细的实现细节（如编码器选择、优化器、学习率、批次大小、温度等），并在附录中补充了部分消融实验和统计显著性分析。
-   论文中引用的开源项目：CED-Base（音频编码器）， SONAR-TE（文本编码器）， Deepseek V3（用于翻译和回译分析）。

📌 **核心摘要**

本文针对音频-文本对比学习（CLAP）中标准InfoNCE损失存在的**优化轨迹漂移**问题展开研究。作者发现，来自负样本的推力可分解为与拉力方向平行和垂直的分量；其垂直分量虽包含丰富信息，但其不受控的特性会导致优化路径发生侧向偏移，影响训练稳定性和最终对齐质量。

为此，论文提出了**SupCLAP框架**，其核心是**支持向量正则化（SVR）**。SVR通过引入一个辅助的文本支持向量（由原始文本嵌入沿正样本方向偏移得到），构造额外的对比损失项。该损失项的梯度能**选择性地抑制**负样本推力中的垂直分量，同时保留平行分量，从而引导优化轨迹更稳定、更直接地收敛。

与现有方法（如InfoNCE、SigLIP）相比，SVR的新颖之处在于其从优化动态的几何角度入手，提供了可控的轨迹修正机制。论文进一步探索了关键参数“语义半径R”的无监督建模策略，提出了静态（StaticSVR）和动态自适应（DynamicSVR）两种版本，并为后者设计了约束项以提高预测稳定性。

主要实验结果表明：
1.  在单语音频文本检索（AudioCaps，Clotho）上，双向的动态SVR（bi-DynamicSVR）显著优于InfoNCE和SigLIP基线。例如，在AudioCaps文本到音频检索任务中，InfoNCE的R@1为41.87，而bi-DynamicSVR提升至44.16。
2.  在零样本音频分类（ESC-50，US8K）上，bi-DynamicSVR同样取得最佳准确率，如在ESC-50上达到92.1%（对比InfoNCE的89.6%）。
3.  在更具挑战性的多语言检索任务中，将SVR应用于现有方法（如ATRI-CACL）能带来显著增益。

该方法的实际意义在于提供了一种高效（训练开销可忽略，推理无额外计算）且通用的对比学习训练改进策略。主要局限性在于：1）论文未开源代码和模型，限制了社区的快速验证与应用；2）方法依赖于超参数（如α, β, R的建模策略）的选择，其最佳设置可能因数据和任务而异。

---

### 124. [VideoMathQA: Benchmarking Mathematical Reasoning via Multimodal Understanding in Video](/audio-paper-digest-blog/posts/2026-05-04-videomathqa-benchmarking-mathematical-reasoning)

✅ **7.0/10** | 前25% | #基准测试 | #多模态模型 | #数学推理 #视频理解

👥 **作者与机构**

- 第一作者：Hanoona Rasheed（MBZUAI）
- 通讯作者：未明确说明（论文未明确指出通讯作者）
- 作者列表：Hanoona Rasheed（MBZUAI）， Abdelrahman Shaker（MBZUAI）， Anqi Tang（MBZUAI）， Muhammad Maaz（MBZUAI）， Ming-Hsuan Yang（University of California Merced, Google Research）， Salman Khan（Australian National University）， Fahad Shahbaz Khan（Linköping University）

💡 **毒舌点评**

**亮点**：数据集构建过程堪称“教科书级别”的严谨，从视频筛选、问题设计到推理步骤标注都体现了极高的专家投入和质控标准，为后续研究立下了标杆。**短板**：作为一篇“Benchmarking”论文，其提出的评估框架（如CoT评分使用Qwen-3-4B作为Judge）虽然验证了鲁棒性，但可能引入新的偏见或被未来更强的模型“规避”，且评估结果仍高度依赖现有模型的能力天花板。

🔗 **开源详情**

- **代码**：提供。论文明确给出了代码仓库链接：https://mbzuai-oryx.github.io/VideoMathQA，并说明已将VideoMathQA的实现集成到lmms-eval框架中。
- **模型权重**：未提供。本文是基准测试论文，不涉及提出新的模型。
- **数据集**：提供。论文声明数据集公开，可通过上述GitHub页面获取。
- **Demo**：未提及在线演示。
- **复现材料**：提供了充分的复现细节，包括：完整的模型评估配置（输入帧数、解码参数）、所有使用的提示词模板（CoT、后处理、步骤评估、错误分析等）、评估硬件环境说明。
- **论文中引用的开源项目/工具**：主要引用了 `lmms-eval` 作为评估框架，`vLLM` 用于语言模型推理，以及多个被评估的开源模型（如Qwen2.5-VL, InternVL系列等）。

📌 **核心摘要**

本文旨在解决现有数学推理基准无法评估多模态视频场景中动态、时序、跨模态推理能力的问题。作者构建了**VideoMathQA**基准，包含420个经过专家标注的视频问答对，覆盖10个数学领域，视频时长从10秒到1小时不等。每个问题配有详细的多步推理过程标注（共2,945步），并设计了三种核心推理类型：直接问题解决、概念迁移和深度教学理解。与已有的静态图像或文本基准相比，VideoMathQA的创新在于其专注于**需要综合视觉、文本（字幕/板书）和音频（讲解）信息，并在长时间序列中进行关联推理**的数学任务。实验评估了30多个模型，包括闭源（如GPT-o4-mini）和开源模型（如Qwen2.5-VL-72B），结果发现：1) **当前模型性能与人类水平（80.7%）存在巨大差距**，最强的GPT-o4-mini在多二进制评估（CoT+Sub）下仅达44.8%；2) 模型性能随规模提升而提高，但新架构的小模型可超越旧架构的大模型；3) 字幕对具备推理能力的大模型增益显著；4) 模型在“问题理解”和“概念应用”上错误最多。该基准为评估和推动真正的视频多模态数学推理能力提供了必要的评测平台和深入的诊断分析。其主要局限性在于数据集规模相对较小，且构建过程人力成本极高。

---

### 125. [Stable Video Infinity: Infinite-Length Video Generation with Error Recycling](/audio-paper-digest-blog/posts/2026-05-04-stable-video-infinity-infinite-length-video)

✅ **7.0/10** | 前25% | #视频生成 | #扩散模型 | #流匹配 #多模态模型

👥 **作者与机构**

- 第一作者：Wuyang Li (VITA@EPFL)
- 通讯作者：未说明 (论文末尾致谢部分提及Alexandre Alahi教授，但未明确标注为通讯作者)
- 作者列表：Wuyang Li (VITA@EPFL), Wentao Pan (VITA@EPFL), Po-Chien Luan (VITA@EPFL), Yang Gao (VITA@EPFL), Alexandre Alahi (VITA@EPFL)

💡 **毒舌点评**

论文最大的亮点在于提出了“错误回收”这一新颖且直觉上合理的范式来解决长视频生成中的误差累积问题，通过让模型“吃自己生成的错误”来提升鲁棒性，理论分析深刻且实验效果显著。短板在于其核心理论框架（尤其是错误注入与计算的数学部分）稍显复杂，部分实现细节（如错误银行的动态更新）的工程可行性分析略显不足，且在超长视频（15分钟）展示中，角色身份一致性等更高级挑战的解决方案尚处萌芽阶段。

🔗 **开源详情**

- **代码**：论文提及将开源完整代码库，项目主页为 `https://stable-video-infinity.github.io/homepage/`，但具体代码仓库链接未在文中提供。
- **模型权重**：论文承诺将提供模型，但具体发布平台（如Hugging Face）和权重链接未提及。
- **数据集**：论文承诺将公开所有基准数据集。
- **Demo**：提供了项目主页，但未明确说明是否提供在线交互式Demo。
- **复现材料**：论文提供了详细的超参数表（表12）、数据集描述和部分实现细节（如基于Wan 2.1，使用LoRA），为复现提供了重要信息。
- **引用的开源项目**：明确基于 **Wan 2.1** 视频生成模型；音频说话任务参考了 **Hallo 3**；舞蹈任务参考了 **UniAnimate-DiT**；自动提示流生成使用了 **Qwen2.5** 大语言模型。
- **论文中未提及开源计划的具体时间表或权重文件的最终发布地址。**

📌 **核心摘要**

这篇论文旨在解决长视频生成中的关键瓶颈——误差累积（drifting）问题。现有方法多通过调整噪声调度器或引入参考帧来缓解而非根除误差，导致生成的视频长度有限且场景单一。为此，论文提出了Stable Video Infinity (SVI)，其核心是“错误回收微调”方法：在训练时，人为地将模型（DiT）历史生成中可能出现的误差注入到干净的输入数据中，模拟推理时的误差累积场景；模型随后学习从这些“被污染”的输入中恢复出正确的预测结果，相当于学会了自我纠错。与已有方法相比，SVI的根本创新在于它弥合了训练时假设输入无误差与推理时条件中包含误差之间的“假设鸿沟”，使模型能够主动修正错误而非被动缓解。实验在一致性、创意和条件生成三个基准上进行，结果显示SVI在视频质量、一致性和动态程度等核心指标上均显著超越Wan 2.1、StreamingT2V、FramePack等最新方法（例如，在超长一致性生成中，SVI-Shot的Subject Consistency达到97.89%，比最强基线FramePack高出约11%）。该工作的实际意义在于首次将视频生成从“秒级”推进到“无限长度”，并支持文本流、音频、骨架等多条件控制。主要局限性包括：训练数据规模较小（仅数千条视频），可能导致风格泛化不足；当前版本为并行生成，暂不支持实时流式输出；以及超长片段中的身份一致性等高级语义控制仍有提升空间。

---

### 126. [WorldSense: Evaluating Real-world Omnimodal Understanding for Multimodal LLMs](/audio-paper-digest-blog/posts/2026-05-04-worldsense-evaluating-real-world-omnimodal)

✅ **7.0/10** | 前25% | #音频问答 | #基准测试 | #多模态模型 #视频理解

👥 **作者与机构**

- 第一作者：Jack Hong（小红书公司）
- 通讯作者：Weidi Xie（上海交通大学）
- 作者列表：Jack Hong（小红书公司）、Shilin Yan（小红书公司）、Jiayin Cai（小红书公司）、Xiaolong Jiang（小红书公司）、Yao Hu（小红书公司）、Weidi Xie（上海交通大学）

💡 **毒舌点评**

这篇论文最大的亮点在于它指出了一个残酷的现实：现有最强的多模态大模型在需要同时理解声音和画面的真实世界场景中，表现最好的也只达到了65.1%的准确率，离可靠应用还差得远。然而，它的短板也同样明显：作为一个评测基准论文，它更像是为其他研究者“立规矩”和“出考卷”，本身在模型架构或训练方法上的原创性贡献有限。

🔗 **开源详情**

- **代码**：论文中未提及代码仓库链接。
- **模型权重**：未提及公开模型权重。
- **数据集**：公开。论文明确说明WorldSense数据集已公开发布，可在其项目主页和GitHub/HuggingFace获取。
- **Demo**：未提供在线演示链接。
- **复现材料**：提供了详细的评估设置（如帧采样方法、API使用）、评估Prompt模板（附录A.4）和数据集统计信息，足以复现其评估实验。
- **论文中引用的开源项目**：引用了多个被评估的开源模型，如OneLLM, VideoLLaMA2, Qwen2-VL, LLaVA-OneVision等，以及数据集来源FineVideo和MusicAVQA。
- **开源计划**：论文中未提及除数据集之外的额外开源计划。

📌 **核心摘要**

该论文旨在解决当前多模态大语言模型（MLLM）评估中忽略音频模态、场景简单、任务单一的问题。为此，作者提出了WorldSense，这是首个专注于评估MLLM对真实世界音视频同步内容进行全模态理解的基准测试。该基准的核心创新在于设计了紧密耦合音视频的任务，使得单独依赖任一模态都无法正确回答问题。它包含1662个来自8大领域、67个子类别的音频同步视频，以及3172个跨越26种认知任务的高质量多选题QA对。所有问答对由80名专家标注员多轮校对，确保质量。实验对众多开源和闭源模型进行了广泛评估。结果表明，现有模型在真实世界场景下面临巨大挑战，最佳模型Gemini 2.5 Pro的准确率仅为65.1%，而许多开源音视频模型的表现甚至接近随机猜测（约25%）。消融研究证实了原始音频信号比文本转录包含更多信息（如韵律、情感），对提升理解至关重要。该基准旨在推动更全面的多模态理解研究，为构建能够整合上下文信息的模型提供平台。主要局限性在于其采用的多选题格式限制了对模型生成能力的评估。

---

### 127. [JointAVBench: A Benchmark for Joint Audio-Visual Reasoning Evaluation](/audio-paper-digest-blog/posts/2026-05-04-jointavbench-a-benchmark-for-joint-audio-visual)

✅ **7.0/10** | 前25% | #音视频联合推理 | #基准测试 | #多模态模型 #大语言模型

👥 **作者与机构**

- 第一作者：Jianghan Chao（中国人民大学高瓴人工智能学院）
- 通讯作者：Ruihua Song（中国人民大学高瓴人工智能学院）
- 作者列表：Jianghan Chao（中国人民大学高瓴人工智能学院），Jianzhang Gao（中国人民大学高瓴人工智能学院），Wenhui Tan（中国人民大学高瓴人工智能学院），Yuchong Sun（中国人民大学高瓴人工智能学院），Ruihua Song（中国人民大学高瓴人工智能学院），Liyun Ru（百川智能）

💡 **毒舌点评**

亮点在于提出了一个设计严谨、维度全面的音视频联合推理评估框架，并巧妙地利用先进的LLM构建了自动化数据生成流水线，在保证质量的同时大幅降低了标注成本；短板在于其基准数据集完全来源于SF20K这一特定影视数据集，可能存在领域偏差，且论文主要贡献是评估基准而非新的建模方法，对推动模型架构本身创新的直接贡献有限。

🔗 **开源详情**

- **代码**：论文中未提及代码链接。
- **模型权重**：未提及公开权重。
- **数据集**：公开。论文提供了项目页面链接 (https://jointavbench.github.io)，并说明JointAVBench数据集将在该页面发布。
- **Demo**：未提及。
- **复现材料**：论文在附录中提供了生成流水线各阶段使用的详细Prompt模板（如图10-16），这对于复现其数据生成过程至关重要。
- **论文中引用的开源项目**：引用了多个开源模型（Qwen2.5-VL, Qwen2.5-Omni, Whisper-v3等）和工具（PySceneDetect）用于构建基准。
- **整体开源计划**：论文明确表示会发布数据集，但代码和模型权重的开源计划未提及。

📌 **核心摘要**

1. **要解决什么问题**：现有评估全模态大语言模型（Omni-LLMs）的基准测试在音视频关联严格性、音频类型多样性和场景复杂度覆盖方面存在不足，无法有效评估模型真正的联合音视频推理能力。
2. **方法核心是什么**：提出JointAVBench，一个从5个认知维度、4种音频类型、3个场景跨度构建的15项任务基准。其核心创新在于设计了一个三阶段半自动化数据生成流水线：首先生成全模态描述（视频、语音、声音事件、音乐、声纹特征），然后利用LLM合成严格依赖音视频联合信息的问答对，最后通过通用到特定的多层质量控制确保数据质量。
3. **与已有方法相比新在哪里**：这是首个同时满足“严格音视频关联（AV Correlation Ratio 100%）”、“覆盖四种音频类型（含声纹特征）”和“涵盖单场景、跨场景、全场景”的综合基准。与现有基准（如WorldSense，AV Corr. 62.9%）相比，其问题设计更严谨地强制依赖双模态信息。
4. **主要实验结果如何**：在JointAVBench上评估了主流Omni-LLMs、Video-LLMs和Audio-LLMs。结果显示，即使最强的Omni-LLM（Gemini2.5-Pro）平均准确率也仅为62.6%，显著优于单模态模型，但在跨场景推理等任务上表现仍不理想。模型在声纹特征和语音相关任务（如SPER， SPL）上表现最差，在涉及声音事件和音乐的任务上表现相对较好。
5. **实际意义是什么**：为评估和推动具有真正音视频联合推理能力的Omni-LLM发展提供了关键的、标准化的评测工具，明确指出了当前模型在处理抽象音频信息（如声纹特征、情感）和复杂跨场景推理时的主要短板。
6. **主要局限性是什么**：数据源单一（仅SF20K短片），可能引入领域偏差；设计的任务分类法虽全面但无法穷尽所有音视频推理能力；受计算资源限制，实验评估的模型数量有限。

---

### 128. [Automatic Stage Lighting Control: Is it a Rule-Driven Process or Generative Task?](/audio-paper-digest-blog/posts/2026-05-04-automatic-stage-lighting-control-is-it-a-rule)

✅ **7.0/10** | 前25% | #音乐生成 | #端到端 | #预训练 #迁移学习

👥 **作者与机构**

- 第一作者：Zijian Zhao（香港科技大学）
- 通讯作者：Xiaoyu Zhang（香港城市大学）
- 作者列表：Zijian Zhao（香港科技大学）、Dian Jin（香港理工大学）、Zijing Zhou（香港大学）、Xiaoyu Zhang（香港城市大学）

💡 **毒舌点评**

**亮点**：论文开创性地将自动舞台灯光控制（ASLC）从“规则映射”问题重新定义为“生成任务”，并基于BART设计了端到端的Skip-BART模型，其生成效果在人工评估中已接近专业灯光师水平，概念和方法均有新意。**短板**：尽管开创了新范式，但其构建的RPMC-L2数据集仅包含约700个摇滚/朋克/金属风格的现场演出片段，规模和多样性有限，这严重制约了模型在更广泛音乐类型和复杂舞台场景下的泛化能力上限。

🔗 **开源详情**

- **代码**：是，提供完整代码仓库链接：https://github.com/RS2002/Skip-BART
- **模型权重**：是，提供训练好的模型参数供下载。
- **数据集**：是，提供了处理后的数据集（RPMC-L2）下载链接。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文在附录中提供了详细的预训练配置（附录A）、实验设置（附录B）和数据集构建细节（附录C），包括所有超参数、损失函数权重和数据处理流程，复现信息非常充分。
- **引用的开源项目**：论文依赖并引用了多个开源工具/模型，包括：PianoBART（用于迁移学习的骨干）、OpenL3（音频特征提取）、PyTorch（深度学习框架），以及用于生成对比歌曲的Suno。

📌 **核心摘要**

1.  **问题**：现有的自动舞台灯光控制（ASLC）大多依赖将音乐分类到有限类别后映射到预设灯光模式，导致结果公式化、单调且缺乏合理性。作者认为灯光控制本质上是艺术创作过程，而非简单的规则映射。
2.  **方法**：论文首次提出将ASLC视为一个**生成任务**，并提出了端到端深度学习模型 **Skip-BART**。该模型以BART为骨干，使用OpenL3提取音频特征，通过离散嵌入处理灯光数据（HSV色彩空间的色相H和明度V）。其核心创新是引入**跳连接机制**，显式对齐音乐帧与灯光帧，以增强时序对应关系。训练过程采用掩码语言模型（MLM）预训练和端到端微调，并结合了迁移学习（PianoBART）和受限随机温度控制（RSTC）采样。
3.  **创新**：与传统分类-映射范式相比，新在：(1) 将ASLC建模为序列到序列的生成问题；(2) 设计了包含跳连接的Skip-BART架构；(3) 构建了首个专门的ASLC数据集RPMC-L2。
4.  **实验结果**：在自建的RPMC-L2数据集上，Skip-BART在定量指标（RMSE, MAE, corr(|Δ|)）上显著优于规则基线方法（见下表）。人工评估（38名参与者）显示，Skip-BART的总体评分（M=4.35）与真实灯光师（M=4.51）无显著差异（p=0.724），但显著高于规则方法（M=2.67，p<0.001）。

| 方法 | RMSE↓ (Hue) | RMSE↓ (Value) | MAE↓ (Hue) | MAE↓ (Value) | corr(|Δ|)↑ (Hue) | corr(|Δ|)↑ (Value) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Rule-based | 48.67 | 93.39 | 43.43 | 86.55 | 0.50 | 0.58 |
| **Skip-BART** | **36.13** | **60.74** | **28.72** | **51.27** | **0.88** | **2.94** |

5.  **实际意义**：为舞台灯光自动化提供了更智能、更人性化的新思路，有望降低专业灯光设计的门槛和成本。
6.  **局限性**：数据集规模有限且风格集中；模型目前仅支持离线单灯光生成；在音乐的长程节奏稳定性和局部波动控制上仍有不足。

---

### 129. [Latent Speech-Text Transformer](/audio-paper-digest-blog/posts/2026-05-04-latent-speech-text-transformer)

✅ **7.0/10** | 前25% | #语音识别 #语音合成 | #预训练 | #语音识别 #语音合成

👥 **作者与机构**

- 第一作者：Yen-Ju Lu ( Johns Hopkins University, Center for Language and Speech Processing )，工作于 Meta 期间完成。
- 通讯作者：Srinivasan Iyer, Duc Le ( Meta Superintelligence Labs )
- 作者列表：
    - Yen-Ju Lu ( Johns Hopkins University, CLSP )
    - Yashesh Gaur ( Meta Superintelligence Labs )
    - Wei Zhou ( Meta Superintelligence Labs )，工作于 Meta 期间完成。
    - Benjamin Muller ( Meta Superintelligence Labs )
    - Jesus Villalba ( Johns Hopkins University, CLSP )
    - Najim Dehak ( Johns Hopkins University, CLSP )
    - Luke Zettlemoyer ( Meta Superintelligence Labs )
    - Gargi Ghosh ( Meta Superintelligence Labs )
    - Mike Lewis ( Meta Superintelligence Labs )
    - Srinivasan Iyer ( Meta Superintelligence Labs )
    - Duc Le ( Meta Superintelligence Labs )

💡 **毒舌点评**

亮点在于精准识别了语音-文本模型因序列长度悬殊导致的“计算不公平”问题，并借鉴了文本领域的字节级Transformer思想，设计出一套从静态、对齐到课程学习的渐进式语音分块方案，有效提升了模型效率和跨模态性能。短板是部分最有效方案（如对齐分块）在推理时仍依赖外部对齐模型（Wav2Vec2+CTC），课程学习虽缓解了此问题，但完全无对齐依赖的端到端训练方案更具吸引力；此外，论文聚焦于预训练和补全任务，对更复杂的生成、理解或实时对话任务的探索尚待深入。

🔗 **开源详情**

-   **代码**：提供代码仓库链接：`https://github.com/facebookresearch/lst`。
-   **模型权重**：论文中未提及是否公开预训练模型权重。
-   **数据集**：使用了多个公开数据集（LibriLight, People’s Speech, Multilingual LibriSpeech, Spotify），并在附录中说明了各自的数据许可。论文中未提供统一的数据获取链接。
-   **Demo**：论文中未提及在线演示。
-   **复现材料**：提供了详尽的训练细节（数据集构成、比例、预处理、交错数据构造方法）、模型架构配置（表7）、优化器设置、训练硬件、超参数以及消融实验设置。附录包含大量补充细节。
-   **引用的开源项目/模型**：Llama 2 (tokenizer), HuBERT (speech tokenizer), Wav2Vec2+CTC (alignment), HiFi-GAN (vocoder), Kokoro TTS (评估用), Whisper (CER计算), SentencePiece (BPE), BLT (架构灵感)。

📌 **核心摘要**

1.  **解决的问题**：现有的自回归语音-文本模型因语音token序列远长于文本，导致计算开销巨大，严重阻碍了模型的扩展效率和跨模态对齐效果。
2.  **方法核心**：提出**Latent Speech-Text Transformer (LST)**。其核心是一个分块机制，将密集的语音token聚合成更高层次、信息更密集的“语音块”（latent speech patches）。全局Transformer则在交错的文本token和语音块序列上进行自回归建模。
3.  **创新之处**：相比直接对语音token建模或尝试BPE压缩（效果不佳），LST通过一个轻量级的分块编码器和解码器，动态地将语音片段压缩成块。创新性地设计了多种分块策略（静态、对齐、混合、课程），其中**课程分块**是关键，它在训练早期利用对齐信息获得语义一致的块，后期过渡到静态分块，使模型摆脱推理时对对齐工具的依赖。
4.  **实验结果**：在故事补全基准测试上，LST（特别是课程分块）在计算控制和数据控制设置下均显著优于基线。例如，在计算控制训练中，**语音HellaSwag准确率绝对提升最高达6.5%**，文本任务也同步提升。模型扩展性分析（从420M到1.8B参数）表明，LST的收益随模型规模增长而扩大。在下游任务中，LST**稳定了ASR适应过程**，并在ASR和TTS推理中将有效序列长度缩短约4倍，降低了计算成本。可视化分析显示，对齐分块能产生语义连贯的语音块嵌入。
5.  **实际意义**：为构建更高效、可扩展的统一语音-文本基础模型提供了一条切实路径，能显著降低训练和推理成本，同时提升模型的跨模态理解与生成能力。
6.  **主要局限性**：研究局限于半双工（交替对话）建模，未涉及全双工实时对话；核心预训练阶段未探索指令微调；部分最优分块策略（如对齐）在训练时仍依赖外部对齐模型。

---

### 130. [EchoMind: An Interrelated Multi-level Benchmark for Evaluating Empathetic Speech Language Models](/audio-paper-digest-blog/posts/2026-05-04-echomind-an-interrelated-multi-level-benchmark)

✅ **7.0/10** | 前25% | #基准测试 | #模型评估 | #语音对话系统 #语音情感识别

👥 **作者与机构**

- 第一作者：Li Zhou（香港中文大学（深圳））
- 通讯作者：Benyou Wang（香港中文大学（深圳）、深圳大数据研究院、深圳湾区研究院），Haizhou Li（香港中文大学（深圳）、深圳大数据研究院、深圳湾区研究院）
- 作者列表：Li Zhou（香港中文大学（深圳））、Lutong Yu（香港中文大学（深圳））、You Lyu（香港中文大学（深圳））、Yihang Lin（香港中文大学（深圳））、Zefeng Zhao（香港中文大学（深圳））、Junyi Ao（香港中文大学（深圳））、Yuhao Zhang（香港中文大学（深圳））、Benyou Wang（香港中文大学（深圳）、深圳大数据研究院、深圳湾区研究院）、Haizhou Li（香港中文大学（深圳）、深圳大数据研究院、深圳湾区研究院）

💡 **毒舌点评**

这篇论文系统性地构建了首个面向语音大模型共情能力的多层级评估基准，设计框架清晰（理解-推理-对话），并通过控制变量的脚本设计（语义中性+语音风格变化）巧妙隔离了文本与声学信息的贡献，实验全面（覆盖12个主流模型）。然而，作为一项纯评估工作，其核心贡献在于“发现差距”而非“提供解决方案”，且基准本身的构建依赖于现成的语音合成工具（如Doubao TTS、GPT-4o）和人工标注，通用性和抗偏倚能力有待更广泛的验证。

🔗 **开源详情**

- **代码**：论文中提及项目网站 `https://hlt-cuhksz.github.io/EchoMind/`，并承诺将提供代码，但未给出具体代码仓库链接。
- **模型权重**：不适用。本论文是评估基准，不提出新模型。
- **数据集**：论文明确表示将公开所有构建的数据（音频文件、元数据、标注协议）。获取方式预计通过上述项目网站。
- **Demo**：论文中未提及在线演示。
- **复现材料**：论文承诺提供复现所需的数据、代码和实验配置。附录（A-C）详细描述了数据集构建、任务设计、评估指标、实验设置（提示模板、人工评估流程）等细节，为复现提供了充分信息。
- **论文中引用的开源项目**：主要依赖以下开源工具/模型进行评估：**Audio Flamingo 3** (Goel et al., 2025), **DeSTA2.5-Audio** (Lu et al., 2025), **VITA-Audio** (Long et al., 2025), **LLaMA-Omni2** (Fang et al., 2025), **Baichuan-Omni-1.5** (Li et al., 2025), **GLM-4-voice** (Zeng et al., 2024), **OpenS2S** (Wang et al., 2025c), **Qwen2.5-Omni-7B** (Xu et al., 2025), **Kimi-Audio** (KimiTeam et al., 2025), **Step-Audio** (Huang et al., 2025b), **EchoX** (Zhang et al., 2025), **GPT-4o-Audio** (OpenAI, 2024)。以及用于评估的指标模型：**Qwen3-Embedding-0.6B**, **emotion2vec**, **Gemini-2.5-Pro**。

📌 **核心摘要**

1.  **要解决的问题**：现有的语音大模型（SLM）基准测试往往孤立地评估语言理解、声学识别或对话能力，缺乏对模型整合非词汇声学线索（如韵律、情绪、生理信号）以实现共情对话能力的系统性评估。
2.  **方法核心**：提出了EchoMind基准，这是一个模拟人类共情对话认知过程的层次化评估框架，包含三个相互关联的任务层级：（1）内容与语音理解；（2）整合推理；（3）共情对话生成。所有任务共享语义中性、无情感线索的对话脚本，并通过控制不同的语音风格（目标、替代、中性）来隔离语音表达本身的影响。
3.  **与已有方法相比新在哪里**：EchoMind是首个专注于评估SLM共情能力、且任务间具有关联性的多层级基准。其创新点在于：(a) 构建了覆盖3大维度、12个细分类别、39种声学属性的共情导向评估框架；(b) 设计了从感知到推理再到生成的递进式任务链，并确保任务共享上下文以支持跨层级相关性分析；(c) 引入了针对对话生成响应的多维度（文本和音频）评估指标。
4.  **主要实验结果**：对12个先进SLM的测试表明，即使是SOTA模型（如GPT-4o-Audio）也难以在生成响应中有效利用高表现力的声学线索。例如，在依赖声学线索的文本评估维度“语音信息相关性”（CSpeechRel）上，没有任何模型的平均分超过4分（满分5分）。音频层面的“声乐共情得分”（VES）也普遍较低。模型在“语音风格检测”和“背景声音检测”等理解任务，以及“先行事件推断”和“共情响应选择”等推理任务上表现尤其薄弱。
5.  **实际意义**：该基准为评估和推动SLM向具备真正情感智能的对话系统发展提供了标准化工具，揭示了当前模型在指令遵循、对自然语音变体的鲁棒性以及有效利用声学线索方面的普遍短板，指明了未来研究方向。
6.  **主要局限性**：a) 基准构建高度依赖TTS合成语音，虽然提供了人工录制子集进行对比，但合成语音的自然度和表现力可能存在上限；b) 评估主要依赖自动化指标（包括用大模型评分），虽然进行了人工评估验证，但主观评估成本高，难以大规模进行；c) 作为评估工作，其本身并不提出解决模型共情能力不足的新方法。

---

### 131. [TINY BUT MIGHTY: A SOFTWARE-HARDWARE CO- DESIGN APPROACH FOR EFFICIENT MULTIMODAL IN- FERENCE ON BATTERY-POWERED SMALL DEVICES](/audio-paper-digest-blog/posts/2026-05-04-tiny-but-mighty-a-software-hardware-co-design)

✅ **7.0/10** | 前25% | #多模态模型 | #预训练 | #大语言模型 #端到端

👥 **作者与机构**

- 第一作者：Yilong Li（University of Wisconsin – Madison）
- 通讯作者：未明确说明（论文未标注通讯作者信息）
- 作者列表：Yilong Li (1), Shuai Zhang (2), Yijing Zeng (1), Chengpo Yan (1), Hao Zhang (1), Xinmiao Xiong (1), Jingyu Liu (1), Pan Hu (3), Suman Banerjee (1)。机构：(1) University of Wisconsin – Madison, (2) Amazon Web Services AI, USA, (3) Uber, USA。

💡 **毒舌点评**

这篇论文最硬核的地方在于作者真的自己画了PCB、焊了板子、写了底层驱动来验证他们的想法，这种“手工打造端到端系统”的匠心在AI论文里相当少见。但遗憾的是，其核心的“模型分解与动态调度”思想在边缘计算领域已有先例，且论文对模型量化后在特定下游任务上的精度损失分析不够细致，更像是一个优化效果显著的“系统集成报告”。

🔗 **开源详情**

- 代码：论文中未提及代码仓库链接。
- 模型权重：未提及是否公开经过特定适配或优化的模型权重。
- 数据集：使用公开数据集（InfoVQA, DocVQA, MMBench, MME）进行评测，但未提及是否提供新的数据集。
- Demo：提供了自制硬件原型的实物照片（图11），但未提及在线演示。
- 复现材料：提供了非常详细的硬件设计图（图4）、软件架构图（图3）、关键内核的实现思路和全面的性能评测数据，但这些属于设计文档，而非开箱即用的复现材料。
- 论文中引用的开源项目：llama.cpp, whisper.cpp, Piper, RKNN Toolkit2, Qualcomm AI Hub, PowerInfer-2, MLC-LLM。

📌 **核心摘要**

这篇论文旨在解决大型多模态模型（LMMs）在电池供电的小型边缘设备上高效运行的难题。现有部署方案通常将模型作为整体在单一加速器上执行，无法充分利用现代片上系统（SoC）中的异构计算单元（CPU, GPU, NPU），导致资源浪费和高延迟。

方法核心是提出一个名为NANOMIND的软硬件协同设计框架。其核心思想是将固有的模块化LMMs（如视觉编码器、投影器、语言解码器）分解为独立的“组件”，并根据各组件计算特性（如视觉编码适合NPU的低比特运算，语言解码适合GPU的并行浮点运算）和异构加速器的优势，进行动态跨加速器调度。同时，框架设计了Token感知缓冲区管理器（TABM）在统一内存架构下实现零拷贝数据传输，以及电池感知的执行模式。

与已有方法相比，新在以下几点：
1.  **端到端软硬件协同设计**：不仅停留在算法或软件层面，而是定制了硬件平台（基于RK3566 SoC，配备独立PMU）并开发了配套的底层计算内核和驱动。
2.  **模块级动态卸载**：实现了跨NPU/GPU/CPU的细粒度任务调度，而非传统的层级卸载或单一加速器执行。
3.  **统一内存下的零拷贝优化**：TABM设计有效解决了异构加速器间数据传输的瓶颈。

主要实验结果：在自制硬件原型上运行LlaVA-OneVision-qwen2-05B模型，与主流框架（如llama.cpp）相比，NANOMIND的能耗降低了42.3%，GPU内存使用减少了11.2%。在低功耗事件触发模式下，配合2000mAh电池，可实现长达20.8小时的运行时间（见图9）。在吞吐量方面，其定制的融合计算内核在Orange Pi 5 (RK3588)上运行Qwen2-1.5B模型时，性能优于llama.cpp、MLC-LLM等框架（见图7c）。

实际意义在于，它证明了通过深度的软硬件协同优化，在成本低廉（SoC价格<12美元）、功耗极低的小型设备上本地运行多模态大模型是可行的，为离线、隐私敏感的边缘AI应用提供了实用方案。

主要局限性是：1）框架的验证和性能提升高度依赖于作者定制的特定硬件平台（基于RK3566），在其他商用设备上的可移植性和性能优势需进一步验证；2）论文未深入讨论模型分解和量化对多模态任务（如复杂视觉问答）最终输出质量的影响；3）未提供开源代码或标准化模型，复现门槛较高。

---

### 132. [MambaVoiceCloning: Efficient and Expressive Text-to-Speech via State-Space Modeling and Diffusion Control](/audio-paper-digest-blog/posts/2026-05-04-mambavoicecloning-efficient-and-expressive-text)

✅ **6.5/10** | 前50% | #语音合成 | #状态空间模型 | #流式处理 #跨语言

👥 **作者与机构**

- 第一作者：Sahil Kumar (PhD Program in Mathematics, Yeshiva University, New York, NY 10033, USA)
- 通讯作者：Youshan Zhang* (School of Artificial Intelligence, Chuzhou University, Anhui, 239000, China)
- 作者列表：Sahil Kumar（叶史瓦大学数学博士项目）、Namrataben Patel（叶史瓦大学数学博士项目）、Honggang Wang（叶史瓦大学计算机科学与工程系）、Youshan Zhang（滁州学院人工智能学院）

💡 **毒舌点评**

亮点在于其设计的彻底性：为了证明SSM可以完全取代注意力，论文把TTS条件路径里的注意力模块剥得干干净净，只剩下一个训练时用的对齐器，这种“手术式”的架构验证值得肯定。短板则是性能提升实在像“技术微调”多过“范式突破”，在严格控制的条件下，MOS的些许涨跌更像是统计噪声的边缘胜利，让人怀疑其实际部署中的感知差异。

🔗 **开源详情**

-   **代码**：论文明确提供了代码仓库链接：https://github.com/sahilkumar15/MVC。
-   **模型权重**：论文中未提及是否公开预训练模型权重。
-   **数据集**：使用的是公开数据集（LJSpeech, LibriTTS, VCTK, CSS10），并描述了详细的预处理流程。
-   **Demo**：论文中未提及在线演示。
-   **复现材料**：提供了极其详细的复现材料，包括：完整的训练算法（算法1）、统一的优化器与学习率调度（附录C.2）、所有基线模型（StyleTTS2, VITS, JETS, Hybrid-Mamba）的匹配配置细节（附录C.4）、以及消融和超参数敏感性实验的设置。
-   **引用的开源项目**：主要依赖了以下开源工具/模型：StyleTTS2（解码器/声码器）、phonemizer（文本处理）、HiFi-GAN/iSTFTNet（声码器）、ESPnet（WER评估模型）。

📌 **核心摘要**

本文研究了一个问题：基于扩散的TTS模型，能否在推理时将文本、节奏和韵律的整个条件路径完全替换为状态空间模型（SSM），从而移除所有注意力机制？为此，作者提出了MambaVoiceCloning（MVC）模型。该模型核心包含三个Mamba组件：一个门控双向Mamba文本编码器、一个由训练时临时对齐器监督的临时双向Mamba、以及一个带有AdaLN调制的表达性Mamba。论文在LJSpeech和LibriTTS上训练，并在VCTK、CSS10和长段落文本上进行评估。实验结果表明，与基线StyleTTS2、VITS以及容量匹配的Mamba混合架构相比，MVC在MOS/CMOS、F0 RMSE、MCD和WER上取得了“适度但统计可靠”的提升，同时将编码器参数减少至21M，吞吐量提升1.6倍。然而，扩散解码器仍然是主要的延迟来源。该工作的实际意义在于验证了全SSM条件路径在提升编码器效率、内存占用和流式部署方面的潜力。其主要局限性在于性能提升幅度较小，且模型仅在英文数据集上训练，缺乏对细粒度情感控制的建模。

---

### 133. [STAR-Bench: Probing Deep Spatio-Temporal Reasoning as Audio 4D Intelligence](/audio-paper-digest-blog/posts/2026-05-04-star-bench-probing-deep-spatio-temporal-reasoning)

✅ **6.5/10** | 前25% | #基准测试 | #数据集 | #音频大模型 #音频问答

👥 **作者与机构**

- 第一作者：Zihan Liu (北京航空航天大学, 上海人工智能实验室)
- 通讯作者：Yuhang Zang (上海人工智能实验室), Jiaqi Wang (上海人工智能实验室, 上海创新研究院)
- 作者列表：Zihan Liu（北京航空航天大学，上海人工智能实验室），Zhikang Niu（上海交通大学，上海创新研究院），Qiuyang Xiao（上海交通大学），Zhisheng Zheng（上海交通大学），Ruoqi Yuan（北京航空航天大学），Yuhang Zang（上海人工智能实验室），Yuhang Cao（上海人工智能实验室），Xiaoyi Dong（上海人工智能实验室，香港中文大学），Jianze Liang（上海人工智能实验室），Xie Chen（上海交通大学，上海创新研究院），Leilei Sun（北京航空航天大学），Dahua Lin（香港中文大学，上海人工智能实验室），Jiaqi Wang（上海人工智能实验室，上海创新研究院）

💡 **毒舌点评**

本文最大的亮点在于精准地指出了当前音频大模型“懂得多但听不懂”的尴尬现状——用文本描述就能回答大部分问题，证明现有基准测试太“水”。它设计的STAR-Bench像一份严苛的“听力体检表”，从音高、响度等基础感知到时空推理，层层深入，确实能测出模型的真实短板。不过，论文本身止步于“诊断医生”，并未给出“治疗方案”，其核心价值依赖于未来模型能否利用这个基准取得进步，稍显被动。

📌 **核心摘要**

本文指出，现有的音频基准测试主要评估可通过文本描述传达的语义内容，无法衡量模型对“语言难以描述”的细粒度音频线索的深层时空推理能力。为此，论文提出了“音频4D智能”的概念，即结合时间（1D）和三维空间（3D）进行深度推理的能力。作者构建了STAR-Bench基准，包含两个层级：**基础声学感知**（对音高、响度、时长、方位角、仰角、距离等六个属性的绝对感知范围和相对辨别灵敏度进行量化评估）和**整体时空推理**（包括连续过程与离散事件序列的时间推理，以及静态定位、多源关系和动态轨迹跟踪的空间推理）。数据构建流程结合了程序化合成音频和严格的人工标注四阶段流程。在对19个模型（16个开源，3个闭源）的评测中，STAR-Bench展现出巨大挑战性，人类表现远高于所有模型。研究发现：闭源模型（如Gemini 2.5 Pro）在知识和推理上领先，但细粒度感知仍是其瓶颈；开源模型则在感知、知识和推理各方面均存在基础性缺陷。例如，在仅使用音频文本描述答题时，MMAU和MMAR基准的准确率仅下降5.9%和9.0%，而STAR-Bench上时间推理和空间推理的准确率分别暴跌31.5%和35.2%，证明了其评测的是更深层的音频智能。论文通过详细的错误分析和消融研究，为未来模型改进指明了方向，如增强密集音频描述、改善多音频推理能力以及开发原生支持多通道音频的架构。

| 模型 | 基础感知(MA%) | 时间推理(OA%) | 空间推理(OA%) | 总体(OA%) |
| :--- | :--- | :--- | :--- | :--- |
| 人类 | 75.60 | 88.00 | 73.72 | 79.11 |
| Gemini 2.5 Pro | 46.64 | 58.52 | 43.62 | 49.59 |
| Gemini 2.5 Flash | 39.72 | 30.70 | 28.35 | 32.92 |
| GPT-4o Audio | 31.76 | 19.44 | 41.70 | 30.97 |
| Qwen-2.5-Omni | 30.90 | 16.96 | 37.25 | 28.37 |
| Xiaomi-MiMo-Audio | 32.93 | 18.63 | 39.24 | 30.27 |

---

