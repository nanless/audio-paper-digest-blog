---
title: "acl-2026 论文深度解读"
date: 2026-09-12
draft: false
paper_digest_pipeline_owned: true
tags: ["半监督学习","病理语音评估","测试时自适应","大语言模型","低资源","端到端","端到端学习","对比学习","对抗鲁棒性","对抗训练","多模态模型","多模态学习","多任务学习","多语言","符号音乐生成","高效推理","歌唱生成","公平性","后训练","环境声","会议转录","混合专家模型","基准测试","基准设计","检索增强","教育","静默语音接口","开源工具","可解释性","课程学习","口语理解","口语意图与槽位识别","跨语言","扩散模型","零样本","领域适应","流匹配","流式处理","鲁棒性","轮次切换","模型比较","模型剪枝","模型评估","模型融合","模型压缩","脑信号","内容审核","偏好优化","评测协议","迁移学习","强化学习","强制对齐","全双工语音交互","人类参与评测","少样本","社会语音学","生成对抗网络","生理信号","生物声学","实时处理","数据集","数据集构建","数据清洗","数据增强","说话人分离标注","说话人识别","说话人验证","提示学习","统计分析","统一音频模型","图神经网络","文本到语音","文献综述方法","向量量化","心理测量","信号处理","严格因果","言语神经解码","医疗音频","音乐","音乐理解","音乐生成","音乐文本检索","音乐源分离","音频安全","音频编码","音频大模型","音频分类","音频检索","音频理解","音频深度伪造检测","音频生成","音频事件检测","音频问答","音频字幕生成","音视频","音视频交互","音视频理解","音视频生成","音视频问答","音视频语音识别","隐私保护","用户研究","游戏音频","语言识别","语音","语音编码","语音超分","语音大模型","语音对话系统","语音翻译","语音合成","语音克隆","语音情感识别","语音生物标志物","语音识别","语音属性识别","语音伪造检测","语音学与音系","语音质量评估","语音转换","预训练","元学习","韵律","长音频处理","正则化","知识蒸馏","指令微调","主观评测","注意力机制","状态空间模型","自回归模型","自监督学习","Adapter","CTC","LoRA","RNN","SFT","Transformer"]
categories: ["acl-2026 论文"]
description: "共收录 199 篇 acl-2026 会议论文的 Reader 深度解读"
paper_digest_page_type: index
paper_digest_reader_quality: "reader-facing-v3"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_scope: "aggregate-primary-task-counts"
---

# acl-2026 论文深度解读

本汇总收录 authenticated plan 选择集内全部 199 篇已完成分析、重标和单篇 staging 的论文。

🏷️ 标签说明：本期使用新版受控 taxonomy；热门方向只统计主任务。

## ⚡ 今日概览

✅ authenticated plan 入选 199 篇 → 🔬 深度分析、Reader 与页面投影完成

### 🏷️ 热门方向

| 方向（仅主任务） | 数量 |
|---|---:|
| #语音识别 | 28 篇 |
| #语音对话系统 | 23 篇 |
| #音频问答 | 20 篇 |
| #文本到语音 | 15 篇 |
| #语音情感识别 | 11 篇 |
| #音视频问答 | 10 篇 |
| #音频理解 | 8 篇 |
| #全双工语音交互 | 6 篇 |
| #音频深度伪造检测 | 6 篇 |
| #音频生成 | 6 篇 |
| #语音属性识别 | 6 篇 |
| #音频分类 | 5 篇 |
| #语音质量评估 | 5 篇 |
| #音频检索 | 4 篇 |
| #病理语音评估 | 3 篇 |
| #音视频理解 | 3 篇 |
| #音视频语音识别 | 3 篇 |
| #语音编码 | 3 篇 |
| #语音翻译 | 3 篇 |
| #符号音乐生成 | 2 篇 |
| #静默语音接口 | 2 篇 |
| #轮次切换 | 2 篇 |
| #音乐理解 | 2 篇 |
| #音乐生成 | 2 篇 |
| #音频编码 | 2 篇 |
| #音视频交互 | 2 篇 |
| #语音伪造检测 | 2 篇 |
| #歌唱生成 | 1 篇 |
| #口语理解 | 1 篇 |
| #口语意图与槽位识别 | 1 篇 |
| #强制对齐 | 1 篇 |
| #说话人分离标注 | 1 篇 |
| #说话人验证 | 1 篇 |
| #言语神经解码 | 1 篇 |
| #音乐文本检索 | 1 篇 |
| #音乐源分离 | 1 篇 |
| #音频事件检测 | 1 篇 |
| #音频字幕生成 | 1 篇 |
| #音视频生成 | 1 篇 |
| #语音超分 | 1 篇 |
| #语音合成 | 1 篇 |
| #语音转换 | 1 篇 |

## 📊 论文评分排行榜

| 排名 | Reader 中文题目 | 英文题目 | 八维评分 | 分档 | 文档类型 | 主任务 |
|---:|---|---|---|---|---|---|
| 1 | [从单分到多维推理：UniSRM 如何让语音评价说出依据](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2150-acd43a3d4c/) | [UniSRM: A Unified Speech Reward Model for Reasoning\-Based Fine\-grained Assessment](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2150-acd43a3d4c/) | **8.7/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.5/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音质量评估 |
| 2 | [词级定位而非句级知道：WESR 把笑声哭声放回词的位置](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-153-b0e6b672f6/) | [WESR: A Benchmark and Strong Baseline for Word\-level Event\-Speech Recognition](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-153-b0e6b672f6/) | **8.7/10** · 创新 1.5/2 · 技术严谨 1.3/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 数据集与基准 | #语音识别 |
| 3 | [语义与声学分流：SAC 用双路量化兼顾可懂度与可重建性](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-138-f39fe656c0/) | [SAC: Neural Speech Codec with Semantic\-Acoustic Dual\-Stream Quantization](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-138-f39fe656c0/) | **8.5/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音编码 |
| 4 | [直接学对话会失语：用课程学习与说话轮次嵌入让流匹配学会双人对话](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1928-caba22de29/) | [ZipVoice\-Dialog: Non\-Autoregressive Spoken Dialogue Generation with Flow Matching](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1928-caba22de29/) | **8.5/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音对话系统 |
| 5 | [小子集为何能排准大音频模型：从基准压缩到人类偏好回归](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1816-3bb6d30b3d/) | [Putting HUMANS first: Efficient LAM Evaluation with Human Preference Alignment](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1816-3bb6d30b3d/) | **8.4/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 数据集与基准 | #语音对话系统 |
| 6 | [先看再听：用两段式推理链约束幻灯片辅助转写](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-425-8654934ad2/) | [VAPO: End\-to\-end Slide\-Enhanced Speech Recognition with Omni\-modal Large Language Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-425-8654934ad2/) | **8.4/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.3/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音视频语音识别 |
| 7 | [双假设迟融合：在语言空间里让听觉与视觉各自举证再裁决](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-26-6b3c612bd0/) | [Two Heads Are Better Than One: Audio\-Visual Speech Error Correction with Dual Hypotheses](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-26-6b3c612bd0/) | **8.4/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.3/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音视频语音识别 |
| 8 | [片段描述与帧标注无法直接同训时如何统一：FineLAP 以解耦适配与双流损失实现粗细对齐](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-473-f556b50fb1/) | [FineLAP: Taming Heterogeneous Supervision for Fine\-grained Language\-Audio Pretraining](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-473-f556b50fb1/) | **8.3/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.3/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频事件检测 |
| 9 | [不只认清单个字：用完整亲子对话检验多方言儿童语音识别](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-251-a7cc77db4e/) | [ChildTalk: A Multi\-Dialect Chinese Child Speech Corpus with Full\-Length Child–Caregiver Conversations for Speech Recognition](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-251-a7cc77db4e/) | **8.3/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 数据集与基准 | #语音识别 |
| 10 | [低资源多口音下毒性语音为何失效：冻结音频大模型加三段软提示的解法](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-439-05ae0c44ad/) | [Speak No Evil, Just Prompt: Low\-resource Multilingual Toxic Speech Detection with Audio Language Model](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-439-05ae0c44ad/) | **8.3/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.5/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #音频分类 |
| 11 | [把对齐改成填空：一次填完长语音时间戳的槽位方案](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1174-f44e590b82/) | [LLM\-ForcedAligner: A Non\-Autoregressive and Accurate LLM\-Based Forced Aligner for Multilingual and Long\-Form Speech](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1174-f44e590b82/) | **8.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前25% | 方法研究 | #强制对齐 |
| 12 | [一步跨越整条轨迹：MeanAudio 以平均速度实现单步文本转音频](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-654-a8f9b0baf5/) | [MeanAudio: Fast and Faithful Text\-to\-Audio Generation with Mean Flows](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-654-a8f9b0baf5/) | **8.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 模型报告 | #音频生成 |
| 13 | [病理语音遮住编解码痕迹时，如何仍能检出伪造](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1739-9527209a59/) | [HCFD: A Benchmark for Audio Deepfake Detection in Healthcare](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1739-9527209a59/) | **8.2/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 1.5/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #音频深度伪造检测 |
| 14 | [英语检测器在印度语上失灵：用双曲对齐把语义和韵律重新拼起来](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2159-2556bf4065/) | [Indic\-CodecFake meets SATYAM: Towards Detecting Neural Audio Codec Synthesized Speech Deepfakes in Indic Languages](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2159-2556bf4065/) | **8.2/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.5/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #音频深度伪造检测 |
| 15 | [冻住大模型做共情对话：用语义情绪解耦把文本共情搬到语音](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-846-3c7da0eb7e/) | [FreezeEmpath: Efficient Training for Empathetic Spoken Chatbots with Frozen LLMs](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-846-3c7da0eb7e/) | **8.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音对话系统 |
| 16 | [用自然语言搭脚手架学通用音频表示：对比学得快，生成式走得远](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1581-8da592dd90/) | [Revisiting Audio\-language Pretraining for Learning General\-purpose Audio Representation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1581-8da592dd90/) | **8.1/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.5/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频理解 |
| 17 | [从离散标签到贴着声音写叙事：FCaps 与 CLSP 的多粒度语音风格建模](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-194-d6b064679d/) | [Towards Fine\-Grained and Multi\-Granular Contrastive Language\-Speech Pre\-training](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-194-d6b064679d/) | **8.1/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #音频检索 |
| 18 | [只听主人、不听路人：用选择性听觉堵住音频大模型的旁观者泄露](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-693-3e36953934/) | [Protecting Bystander Privacy via Selective Hearing in Audio LLMs](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-693-3e36953934/) | **8.1/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #音频问答 |
| 19 | [语音能听懂却不会推理：用在线轨迹对齐把语音拉回文本推理线](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-857-0727236fa7/) | [Closing the Modality Reasoning Gap for Speech Large Language Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-857-0727236fa7/) | **8.1/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频问答 |
| 20 | [把音符当集合而非序列：Amadeus 用自回归加双向扩散重排属性依赖](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1898-09aa7ff1a8/) | [Amadeus: Autoregressive Model with Bidirectional Attribute Modelling for Symbolic Music](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1898-09aa7ff1a8/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #符号音乐生成 |
| 21 | [把指令翻译成可测量的声音特征：BatonVoice 的指挥家与乐团分工](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2165-c9f9ef73de/) | [BatonVoice: An Operationalist Framework for Enhancing Controllable Speech Synthesis with Linguistic Intelligence from LLMs](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2165-c9f9ef73de/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #文本到语音 |
| 22 | [现学没见过的语言：多模态示范如何帮语音大模型做低资源识别](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1239-657561975b/) | [Multimodal In\-context Learning for ASR of Low\-resource Languages](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1239-657561975b/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音识别 |
| 23 | [听声辨位：用可定位性把众包录音筛成组合推理考题](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1297-b429bc54ba/) | [The Sonar Moment: An Audio Geo\-Localization Benchmark for Audio\-Language Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1297-b429bc54ba/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.1/1.5 | 前25% | 数据集与基准 | #音频理解 |
| 24 | [没有对齐标注时，如何让笑声叹息出现在情感对的位置](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1369-c75c35ba1e/) | [Affectron: Emotional Speech Synthesis with Affective and Contextually Aligned Nonverbal Vocalizations](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1369-c75c35ba1e/) | **8.0/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #文本到语音 |
| 25 | [答对不等于可靠：用可回答与不可回答配对检验大音频语言模型的对话修复](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-976-ec760595ee/) | [Pardon? Evaluating Conversational Repair in Large Audio\-Language Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-976-ec760595ee/) | **8.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #音频问答 |
| 26 | [只看转写错误会漏掉什么：PRiSM 同时考听写与下游使用](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-825-82bac7a9c7/) | [PRiSM: Benchmarking Phone Realization in Speech Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-825-82bac7a9c7/) | **7.9/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #语音识别 |
| 27 | [像演员一样听指令说话：冻结编码器做可控全双工对话](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-242-8582ee5b2e/) | [F\-Actor: Controllable Conversational Behavior in Full\-Duplex Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-242-8582ee5b2e/) | **7.9/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.5/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前25% | 模型报告 | #全双工语音交互 |
| 28 | [以文本为桥、语音分块交错生成：CSLM 的小数据跨语言语音建模](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-642-59dd2aa515/) | [Efficient Training for Cross\-lingual Speech Language Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-642-59dd2aa515/) | **7.9/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 模型报告 | #语音对话系统 |
| 29 | [听不清还硬答：HalluAudio 如何系统诱发并度量音频大模型的幻觉](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1797-d8120346b5/) | [HalluAudio: A Comprehensive Benchmark for Hallucination Detection in Large Audio\-Language Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1797-d8120346b5/) | **7.8/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #音频问答 |
| 30 | [把打断听成自言自语：语音助手为何分不清谁在说话](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1902-a27d913cc4/) | [Still Between Us? Evaluating and Improving Voice Assistant Robustness to Third\-Party Interruptions](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1902-a27d913cc4/) | **7.8/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #语音对话系统 |
| 31 | [高唤醒一用力就含糊：用矫正起点与动态引导拉住情感轨迹](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-998-1b9a5c9a36/) | [Rectifying the Emotional Flow: Aligning Priors and Dynamic Guidance for High\-Arousal Text\-to\-Speech](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-998-1b9a5c9a36/) | **7.8/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #文本到语音 |
| 32 | [深度冗余时做减法：用浅层对齐让伪造语音检测走得更远](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-318-9e0750a61e/) | [When depth is redundant: Efficient transformer\-based speech anti\-spoofing](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-318-9e0750a61e/) | **7.8/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 方法研究 | #语音伪造检测 |
| 33 | [先听清再推理：用分层解耦把音频感知钉牢的混合推理](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1776-bddab7844d/) | [Listen, Pause, and Reason: Toward Perception\-Grounded Hybrid Reasoning for Audio Understanding](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1776-bddab7844d/) | **7.7/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频问答 |
| 34 | [反转轨迹并非处处关键：用曲率与信息增益决定何时跳过神经网络计算](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-820-dca934ce95/) | [Bypassing Neural Evaluations for Fast Audio Editing via Adaptive Trajectory Extrapolation](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-820-dca934ce95/) | **7.7/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频生成 |
| 35 | [只看说话前一秒会误判：用整段对话和视频教会模型的附和时机](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-171-da902b92cb/) | [Open Your Model’s Eyes: Video and Context\-Aware Multimodal Backchannel Prediction](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-171-da902b92cb/) | **7.6/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #轮次切换 |
| 36 | [合成语音的情感为何听得清却认不准：语音情感识别的合成域失效](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-372-3d81ce3423/) | [On the Emotion Understanding of Synthesized Speech](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-372-3d81ce3423/) | **7.6/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.2/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前25% | 应用研究 | #语音情感识别 |
| 37 | [长音频查不完：先规划模态与时间，再用结构化查询取小证据](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1304-9b1e73be1c/) | [PlanRAG\-Audio: Planning and Retrieval Augmented Generation for Long\-form Audio Understanding](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1304-9b1e73be1c/) | **7.6/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.5/1.5 · 可复现 0.3/0.5 · 工程/实践 1.4/1.5 | 前25% | 方法研究 | #音频问答 |
| 38 | [一句话偏好要管住多维度对话：多奖励 RLAIF 如何同时对齐语义与声音](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2040-c1a08d6551/) | [Optimizing Conversational Quality in Spoken Dialogue Systems with Reinforcement Learning from AI Feedback](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2040-c1a08d6551/) | **7.6/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.5/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音对话系统 |
| 39 | [先建模情感再编码语音：ES4R 把多轮共情对话拆成理解、生成与合成三段](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1708-5443bdb83c/) | [ES4R: Speech Encoding Based on Prepositive Affective Modeling for Empathetic Response Generation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1708-5443bdb83c/) | **7.5/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #语音对话系统 |
| 40 | [从打分到讲理：用多任务标注与两阶段训练让语音大模型当评测者](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-349-11be62587e/) | [SpeechLLM\-as\-Judges: Towards General and Interpretable Speech Quality Evaluation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-349-11be62587e/) | **7.5/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.9/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.5/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #语音质量评估 |
| 41 | [多而不杂才有用：用来源与生成器多样性重组语音伪造检测训练数据](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-796-69ea97104b/) | [A Data\-Centric Approach to Generalizable Speech Deepfake Detection](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-796-69ea97104b/) | **7.5/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.3/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.1/1.5 | 前25% | 方法研究 | #语音伪造检测 |
| 42 | [用合成数据与对话式分段建模换取可复现的长歌曲生成](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1129-45faca2e93/) | [Muse: Towards Reproducible Long\-Form Song Generation with Fine\-Grained Style Control](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1129-45faca2e93/) | **7.5/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.5/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 系统技术报告 | #音乐生成 |
| 43 | [极低码率下保住语义再重建波形：FlowTokenizer 的分层对齐与单层稠密量化](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1622-ccac05b630/) | [Hierarchical Representation Alignment Learning of Diffusion Transformers for Neural Audio Codec](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1622-ccac05b630/) | **7.5/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.2/1.5 · 开源 0.2/1.5 · 可复现 0.5/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频编码 |
| 44 | [把质检口语变成可执行依赖图：语音数据质量的多智能体 overnight 流水线](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2062-20999dce64/) | [Rolling Out Data Quality Overnight, without losing the plot: A Multi\-Agent System for Speech Data Quality Management](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2062-20999dce64/) | **7.5/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.6/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.2/0.5 · 工程/实践 1.2/1.5 | 前25% | 系统技术报告 | #语音质量评估 |
| 45 | [标签之外：用方言度与录音条件重新刻画阿拉伯方言语音](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-575-33a50902ba/) | [Arab Voices: Mapping Standard and Dialectal Arabic Speech Technology](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-575-33a50902ba/) | **7.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.1/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #语音识别 |
| 46 | [语音 token 不必个个不同：大语音模型的分层冗余与亲和合并](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-742-9184941440/) | [Do We Need Distinct Representations for Every Speech Token? Unveiling and Exploiting Redundancy in Large Speech Language Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-742-9184941440/) | **7.5/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.3/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 方法研究 | #语音识别 |
| 47 | [不转写直接听：用慢思考强化学习把诈骗电话的声音细节留下来](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1201-4c63e0e40f/) | [SAFE\-QAQ: End\-to\-End Slow\-Thinking Audio\-Text Fraud Detection via Reinforcement Learning](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1201-4c63e0e40f/) | **7.4/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.3/1.5 | 前50% | 方法研究 | #音频分类 |
| 48 | [真人说话会改口、会铺垫、会有背景音：多轮语音对话为何最难记住和改对](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1654-7fa55d5e55/) | [Audio MultiChallenge: A Multi\-Turn Evaluation of Spoken Dialogue Systems on Natural Human Interaction](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1654-7fa55d5e55/) | **7.4/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #语音对话系统 |
| 49 | [分开给音色和风格：FC\-TTS 用两阶段管线约束解耦的边界](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-173-b25271b9c2/) | [FC\-TTS: Style and Timbre Control in Zero\-Shot Text\-to\-Speech with Disentangled Speech Representations](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-173-b25271b9c2/) | **7.4/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.5/0.5 · 工程/实践 1.1/1.5 | 前50% | 方法研究 | #文本到语音 |
| 50 | [不只看文字：用时间轴重新定义音频章节切分](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-396-62b0c742f6/) | [Beyond Transcripts: A Renewed Perspective on Audio Chaptering](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-396-62b0c742f6/) | **7.4/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.3/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #音频理解 |
| 51 | [先想后说再调工具：VoxMind 如何把语音对话做成可规划的端到端智能体](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-459-7ee4ec640f/) | [VoxMind: An End\-to\-End Agentic Spoken Dialogue System](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-459-7ee4ec640f/) | **7.4/10** · 创新 1.6/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #语音对话系统 |
| 52 | [先保证译对再求快：用分层奖励纠正合成轨迹的无界语音同传](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-80-b088d768c8/) | [Hierarchical Policy Optimization for Simultaneous Translation of Unbounded Speech](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-80-b088d768c8/) | **7.4/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #语音翻译 |
| 53 | [吴语没有数据就没有模型：用八千小时多维标注把理解与生成一起补齐](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1395-d13f6cbb8e/) | [WenetSpeech\-Wu: Datasets, Benchmarks, and Models for a Unified Chinese Wu Dialect Speech Processing Ecosystem](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1395-d13f6cbb8e/) | **7.4/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #语音识别 |
| 54 | [先松开参考音频的束缚，再用旋钮调风格：ReStyle\-TTS 的相对连续控制](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-451-81324751ef/) | [ReStyle\-TTS: Relative and Continuous Style Control for Zero\-Shot Speech Synthesis](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-451-81324751ef/) | **7.4/10** · 创新 1.6/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #文本到语音 |
| 55 | [用进度刻度对齐文本与语音：VoiceStar 如何同时做到时长可控与超长外推](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-570-80d6fc13d6/) | [VoiceStar: Robust Zero\-Shot Autoregressive TTS with Duration Control and Extrapolation](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-570-80d6fc13d6/) | **7.4/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.3/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 模型报告 | #文本到语音 |
| 56 | [交替听与读才能检准：ATIR 把音频文本交织序列当作一等检索对象](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1006-f7d175e478/) | [ATIR: Towards Audio\-Text Interleaved Contextual Retrieval](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1006-f7d175e478/) | **7.3/10** · 创新 1.6/2 · 技术严谨 1.3/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #音频检索 |
| 57 | [转录都对，为什么听起来还是不合适：语音交互的文化能力](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1466-b422077ade/) | [From Naturalness to Norms: Interactional Cultural Competence for SpeechLMs](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1466-b422077ade/) | **7.3/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.9/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 理论研究 | #语音对话系统 |
| 58 | [鸡尾酒会里看口型说话：AV\-Dialog 如何同时听清、看准接话时机](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1954-a8203a3ac4/) | [AV\-Dialog: Spoken Dialogue Models with Audio\-Visual Input](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1954-a8203a3ac4/) | **7.3/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音对话系统 |
| 59 | [深层共用参数为何同时拖累语义与声音：Lychee\-FD 的分层解耦解读](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-419-2d95312dda/) | [Hierarchical Acoustic\-Semantic Modeling: Modality Separation and Semantic Coherence for Full\-Duplex SLMs](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-419-2d95312dda/) | **7.3/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #全双工语音交互 |
| 60 | [低码率下语义与音质为何互相拖累：XY\-Tokenizer 用双塔与两阶段分开建模](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-423-cd0cd04c75/) | [XY\-Tokenizer: Mitigating the Semantic\-Acoustic Conflict in Low\-Bitrate Speech Codecs](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-423-cd0cd04c75/) | **7.3/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.1/1.5 | 前50% | 方法研究 | #语音编码 |
| 61 | [从文本到定时再到可懂语音：ControlAudio 为何要用渐进式扩散拆解控制](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-62-e55f4965b7/) | [ControlAudio: Tackling Text\-Guided, Timing\-Indicated and Intelligible Audio Generation via Progressive Diffusion Modeling](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-62-e55f4965b7/) | **7.3/10** · 创新 1.5/2 · 技术严谨 1.3/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频生成 |
| 62 | [幻觉不在文字里而在注意力里：用音频注意力在推理时筛掉语音大模型的虚构](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2147-c1dcb35439/) | [Detecting Hallucinations in SpeechLLMs at Inference Time Using Attention Maps](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2147-c1dcb35439/) | **7.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 63 | [转写之外还要听见什么：用统一音频模式补上感知的短板](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-967-16873cd5a1/) | [Beyond Transcription: Unified Audio Schema for Perception\-Aware AudioLLMs](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-967-16873cd5a1/) | **7.3/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频理解 |
| 64 | [声音没变意思却绕过拒绝：AJailBench 用语义守恒的信号扰动测大音频语言模型](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1259-a11c818f1b/) | [Audio Jailbreak: An Open Comprehensive Benchmark for Jailbreaking Large Audio\-Language Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1259-a11c818f1b/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #音频理解 |
| 65 | [不只听懂，还要说得对：S2S\-Arena 考语音模型的副语言指令跟随](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1615-578515728c/) | [S2S\-Arena: Evaluating Paralinguistic Instruction Following in Speech\-to\-Speech Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1615-578515728c/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #语音对话系统 |
| 66 | [用混沌判别器补高频：CIS\-BWE 为何同时做幅度与相位双流](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1925-b8fba1917c/) | [CIS\-BWE: Chaos\-Informed Speech Bandwidth Extension](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1925-b8fba1917c/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.6/1 · 影响力 1.0/1.5 · 开源 0.5/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #语音超分 |
| 67 | [用非言语笑声哭声做监督：韵律如何跨到多语言言语情绪识别](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1940-6b66d51702/) | [Prosody as Supervision: Bridging the Non\-Verbal–Verbal for Multilingual Speech Emotion Recognition](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1940-6b66d51702/) | **7.2/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 68 | [合不合语境比像不像情绪更难：CEAEval 如何评语音表达得体性](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-411-fbda50a111/) | [Evaluating the Expressive Appropriateness of Speech in Rich Contexts](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-411-fbda50a111/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.5/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 数据集与基准 | #语音质量评估 |
| 69 | [看完整总谱而不是猜标题：MSU\-Bench 用四级定位问答逼出文本与视觉的差距](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-493-076d025de0/) | [Musical Score Understanding Benchmark: Evaluating Large Language Models’ Comprehension of Complete Musical Scores](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-493-076d025de0/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音乐理解 |
| 70 | [先对齐再翻译：S2ST\-Omni 用分层语言感知桥接语音与大模型](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1004-b15fd2a8fb/) | [S2ST\-Omni: Hierarchical Language\-Aware SpeechLLM Adaptation for Multilingual Speech\-to\-Speech Translation](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1004-b15fd2a8fb/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音翻译 |
| 71 | [长语音不止读对字：SwanBench\-Speech 如何拆开声学、语义与表现力来评测](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-112-63e6093758/) | [Comprehensive Benchmarking of Long\-Form Speech Generation in Diverse Scenarios](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-112-63e6093758/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #文本到语音 |
| 72 | [流式音视频不同步、该不该开口难判断：ROMA 用对齐单元与说话头统一反应与主动](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1153-c99a119dd6/) | [ROMA: Real\-time Omni\-Multimodal Assistant with Interactive Streaming Understanding](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1153-c99a119dd6/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 模型报告 | #音视频交互 |
| 73 | [说话很准、唱歌就失灵：用三路特征混合守住语音又学会歌声](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1245-78905b4603/) | [A Unified Feature Mixture Framework for Joint Speech and Singing Deepfake Detection](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1245-78905b4603/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频深度伪造检测 |
| 74 | [不用翻译腔造平行对话：以大纲约束换取四语可比的健康问答语音数据](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1275-4571130b8f/) | [Dial HEALTHDIAL for Advice: A Multilingual and Multi\-Parallel Spoken Dialogue Dataset for Knowledge\-Grounded Information Seeking](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1275-4571130b8f/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #语音对话系统 |
| 75 | [真人中文语音做考题：VCB Bench 为何要同时考听话、懂知识和抗干扰](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1659-e3c0ffe645/) | [VCB Bench: An Evaluation Benchmark for Audio\-Grounded Large Language Model Conversational Agents](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1659-e3c0ffe645/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #语音对话系统 |
| 76 | [全局平均为何听不见断裂：口语模型声学评估的局部重估](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1844-a6feb3a38e/) | [On the Fallacy of Global Token Perplexity in Spoken Language Model Evaluation](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1844-a6feb3a38e/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音属性识别 |
| 77 | [多轮边听边说为何难测：用切轮与历史固定把全双工对话逐轮考住](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-263-6730e594dc/) | [MTR\-DuplexBench: Towards a Comprehensive Evaluation of Multi\-Round Conversations for Full\-Duplex Speech Language Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-263-6730e594dc/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #全双工语音交互 |
| 78 | [黑盒通话压碎帧级伪造痕迹：用音素级一致性守住可懂结构](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-285-47b377fd29/) | [RTCFake: Speech Deepfake Detection in Real\-Time Communication](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-285-47b377fd29/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #音频深度伪造检测 |
| 79 | [把情绪当作首要优化目标：AffectCodec 如何在离散量化中留住情绪](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-442-df17ac44c2/) | [AffectCodec: Emotion\-Preserving Neural Speech Codec for Expressive Speech Modeling](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-442-df17ac44c2/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音编码 |
| 80 | [无标签也要会切歌：UniVocal 用语义推断驱动说唱切换](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1452-48d93a1b88/) | [UniVocal: Unified Speech\-Singing Code\-Switching Synthesis](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1452-48d93a1b88/) | **7.1/10** · 创新 1.5/2 · 技术严谨 1.3/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #文本到语音 |
| 81 | [毫秒级颅内信号能否把语音模型调向大脑的时间分层](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1911-9ae64500e0/) | [Temporal Precision Matters: Brain\-Tuning Speech Language Models with Millisecond\-Resolution Neural Signals](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1911-9ae64500e0/) | **7.1/10** · 创新 1.5/2 · 技术严谨 1.3/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.5/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #言语神经解码 |
| 82 | [语音要语义、音乐要结构：用动态容量专家缝合统一音频生成](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-412-585468c778/) | [UniMoE\-Audio: Unified Speech and Music Generation with Dynamic\-Capacity Mixture\-of\-Experts](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-412-585468c778/) | **7.1/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 模型报告 | #音频生成 |
| 83 | [能比出声音差别，却判不准是否换人：SpeakerSleuth 揭示的阈值与模态失衡](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-944-02c10765cc/) | [SpeakerSleuth: Can Large Audio\-Language Models Judge Speaker Consistency across Multi\-turn Dialogues?](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-944-02c10765cc/) | **7.1/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.3/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.4/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #说话人验证 |
| 84 | [把合成语音调到输入端：MimicLM 用真录音做目标的声音模仿](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1020-b3667b2a36/) | [MimicLM: Zero\-Shot Voice Imitation through Autoregressive Modeling of Pseudo\-Parallel Speech Corpora](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1020-b3667b2a36/) | **7.1/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音转换 |
| 85 | [编号保住谁是谁：PolyAudio 用交错上下文做五段内跨音频对证](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2101-3caa666b75/) | [PolyAudio: Advancing Multi\-Audio Reasoning in Large Audio Language Models with Interleaved Multi\-Audio Contexts](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2101-3caa666b75/) | **7.1/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 模型报告 | #音频问答 |
| 86 | [把扩散解码做实：DIFFA\-2 如何用双适配与四阶段课程补齐音频理解](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-235-33f8f477cd/) | [DIFFA\-2: A Practical Diffusion Large Language Model for General Audio Understanding](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-235-33f8f477cd/) | **7.1/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 模型报告 | #音频问答 |
| 87 | [一句之内换情绪又变语速：不训练模型只改推理时条件访问](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1077-d0108fc78b/) | [TED\-TTS: Training\-Free Intra\-Utterance Emotion and Duration Control for Text\-to\-Speech Synthesis](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1077-d0108fc78b/) | **7.0/10** · 创新 1.6/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #文本到语音 |
| 88 | [听觉不只听声：用多模态线索合成细粒度音频描述](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1285-26dc16a806/) | [Towards Fine\-grained Audio Captioning with Multimodal Contextual Fusion](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1285-26dc16a806/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频字幕生成 |
| 89 | [口语不流利、说话人各异还要随时切语音文字：RealTalk\-CN 如何测任务对话](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-131-bec843681a/) | [RealTalk\-CN: A Realistic Chinese Speech Task\-Oriented Dialogue Benchmark with Cross\-Modal Analysis](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-131-bec843681a/) | **7.0/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音对话系统 |
| 90 | [把医学知识先教给文字大脑，再用少量语音对齐：SpeechMedAssist 的两阶段医疗问诊适配](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1428-f27677351e/) | [SpeechMedAssist: Efficiently and Effectively Adapting Speech Language Models for Medical Consultation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1428-f27677351e/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #语音对话系统 |
| 91 | [听出自然：用多轮语音偏好同时学韵律与口语风格](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-185-3cfde9227a/) | [SDiaReward: Modeling and Benchmarking Spoken Dialogue Rewards with Modality and Colloquialness](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-185-3cfde9227a/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音对话系统 |
| 92 | [长描述后半段为何失效：FIGMA 以全局加帧级双视角找回速度与和弦](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2197-19db600408/) | [FIGMA: Towards FIne\-Grained Music retrievAl](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2197-19db600408/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音乐文本检索 |
| 93 | [边听边想：SHANKS 用分块未说出推理实现中途打断与提前工具调用](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-404-c661640a92/) | [Shanks: Simultaneous Hearing and Thinking for Spoken Language Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-404-c661640a92/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #全双工语音交互 |
| 94 | [说什么与何时说分开评：面向全双工对话的双轴生成式奖励模型](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-6-01a4e7132e/) | [Dual\-Axis Generative Reward Model Toward Semantic and Turn\-taking Robustness in Interactive Spoken Dialogue Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-6-01a4e7132e/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #全双工语音交互 |
| 95 | [噪声下转写为何失效：把语音识别改写为语义引导的重建](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-730-de231e04e2/) | [Listening Like Humans: Semantics\-Guided Noise\-Robust Multimodal Speech Recognition](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-730-de231e04e2/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.1/1.5 · 实验充分 1.3/1.5 · 清晰度 0.9/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.4/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音识别 |
| 96 | [一个模型说四种话：POWSM 把语音、文字和音标放在同一解码器里](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-813-8c40e91d6c/) | [POWSM: A Phonetic Open Whisper\-Style Speech Foundation Model](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-813-8c40e91d6c/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 模型报告 | #语音识别 |
| 97 | [把音色和韵律拆开再拼回去：DisCo\-Speech 的两阶段解耦与独立控制](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-863-adf7a76499/) | [DisCo\_Speech: Controllable Zero\-Shot Speech Generation with A Disentangled Speech Codec](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-863-adf7a76499/) | **7.0/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.9/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #文本到语音 |
| 98 | [多人对话视频看似逼真却接不上话：MTAVG\-Bench 如何逐层诊断结构性失败](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-913-de41c69aa8/) | [MTAVG\-Bench: A Diagnostic Benchmark for Multi\-Talker Dialogue\-Centric Audio\-Video Generation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-913-de41c69aa8/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #音视频生成 |
| 99 | [从认字到推旋律：BoYaEval 揭示多模态大模型读不懂古谱组合逻辑](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-997-ca508722bd/) | [BoYaEval: Evaluating Multimodal Large Language Models on Understanding Ancient Chinese Musical Scores](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-997-ca508722bd/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音乐理解 |
| 100 | [偏好只改文字、锚定稳住声音：WavAlign 的模态分工混合后训练](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-114-e1360a54c1/) | [WavAlign: Enhancing Intelligence and Expressiveness in Spoken Dialogue Models via Adaptive Hybrid Post\-Training](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-114-e1360a54c1/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音对话系统 |
| 101 | [重构保真与可预测难以兼得：用未来预测与语义对齐重塑音频编码器](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1308-7e2edb7487/) | [LLM\-Codec: Neural Audio Codec Meets Language Model Objectives](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1308-7e2edb7487/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频编码 |
| 102 | [从绝对打分到相对偏好：语音质量奖励建模的范式转换与细粒度难例](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1638-97968d22cb/) | [From Scores to Preferences: Redefining Evaluation Paradigm for Speech Quality Reward Modeling](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1638-97968d22cb/) | **7.0/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 数据集与基准 | #语音质量评估 |
| 103 | [静态特质约束动态偏见：CMTD 用认知建模做多模态对话情绪识别](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-41-b4d680b1bc/) | [CMTD: Cognitive Modeling with Traits and Distortions for Multimodal Emotion Recognition in Conversations](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-41-b4d680b1bc/) | **7.0/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 104 | [重音一变意思就变：语音模型为何听不出言外之意](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-64-ecca67f42d/) | [StressTest: Can YOUR Speech LM Handle the Stress?](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-64-ecca67f42d/) | **7.0/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频问答 |
| 105 | [音频提示词为何难偷：先做启发式锚定，再用沙普利值解开纠缠](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-688-22914b4732/) | [AudioStealer: Extracting Audio Prompts via Shapley Value\-Guided Query Search](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-688-22914b4732/) | **7.0/10** · 创新 1.6/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音乐生成 |
| 106 | [同骨干双模态检索：OEA 以统一编码换文本理解与排除能力](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1038-8b06c35435/) | [Omni\-Embed\-Audio: Leveraging Multimodal LLMs for Robust Audio\-Text Retrieval](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1038-8b06c35435/) | **6.9/10** · 创新 1.5/2 · 技术严谨 1.1/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频检索 |
| 107 | [先判有没有声，再判是不是说完：用两级协作做实时轮次结束检测](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2094-13982f597e/) | [Speculative End\-Turn Detector for Efficient Speech Chatbot Assistant](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2094-13982f597e/) | **6.9/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #轮次切换 |
| 108 | [把谁和何时放进编码器：TellWhisper 的时间说话人联合建模](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-861-10ed7db39f/) | [TellWhisper: Tell Whisper Who Speaks When](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-861-10ed7db39f/) | **6.9/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 方法研究 | #语音识别 |
| 109 | [长会议听不懂也找不着：用多维图加计划智能体做可定位问答](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1038-d8c6796a30/) | [Don’t Just Listen, Try Planning: Graph\-based Retrieval\-Generation Agent for Long\-form Audio Meeting Understanding](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1038-d8c6796a30/) | **6.9/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频问答 |
| 110 | [补上时间细节：让多模态大模型重新看清唇动的前后变化](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1381-e853e91bd1/) | [Bridging the Temporal Gap in Multimodal LLMs: Deeply Stacking Temporal Tokens for Audio\-Visual Speech Recognition](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1381-e853e91bd1/) | **6.9/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音视频语音识别 |
| 111 | [在自己的语音轨迹上学文本推理：CORD 的加权在策略跨模态自蒸馏](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1581-d4e273b847/) | [CORD: Bridging the Audio–Text Reasoning Gap via Weighted On\-policy Cross\-modal Distillation](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1581-d4e273b847/) | **6.9/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频问答 |
| 112 | [音频提示词为何见过就忘：用语义邻居把文本空间撑开](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1583-b078cb09dd/) | [Generalizable Prompt Tuning for Audio\-Language Models via Semantic Expansion](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1583-b078cb09dd/) | **6.9/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.3/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频分类 |
| 113 | [边想边说不断流：用播放掩蔽保连续，用四重约束修原子性](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-199-092d815805/) | [Dual\-Reasoner: Bridging Interleaved Atomicity and Streaming Latency via Thinking\-while\-Talking](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-199-092d815805/) | **6.9/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音对话系统 |
| 114 | [把结构化语音与非结构化音效装进同一指令接口：UniSonate 的对齐与课程设计](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1293-8ff0e55ae8/) | [UniSonate: A Unified Model for Speech, Music, and Sound Effect Generation with Text Instructions](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1293-8ff0e55ae8/) | **6.8/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 模型报告 | #音频生成 |
| 115 | [只给一小时新语言音频：把快速适应做成内外环分工的语音表示学习](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1325-278ff00a05/) | [SpidR\-Adapt: A Universal Speech Representation Model for Few\-Shot Adaptation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1325-278ff00a05/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音识别 |
| 116 | [用发音特征做跨语言偏置：在新语言上只用 10 小时做语音单元发现](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-24-ba3f3c0578/) | [MauBERT: Universal Phonetic Inductive Biases for Few\-Shot Acoustic Units Discovery](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-24-ba3f3c0578/) | **6.8/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 117 | [SegTune：把歌曲控制从整首描述下沉到分段时间窗](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-586-f47874f4cf/) | [SegTune: Structured and Fine\-Grained Control for Song Generation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-586-f47874f4cf/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #歌唱生成 |
| 118 | [文化知识碎在模态和语言之间：MMAC 如何对齐三模态输入再测一致性与根据](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-989-d11a3ec58e/) | [MMAC: A Multilingual, Multimodal Alignment Framework for Cultural Grounding Evaluation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-989-d11a3ec58e/) | **6.8/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频问答 |
| 119 | [把人物引文单独切出来：以叙事切分做更可读的表现力语音合成](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-308-edba94d127/) | [Computational Narrative Understanding for Expressive Text\-to\-Speech](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-308-edba94d127/) | **6.8/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #文本到语音 |
| 120 | [把文字方向做成向量：语音基础模型中线性的文字表征与免训练转写控制](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-464-24bc1a0ae3/) | [Linear Script Representations in Speech Foundation Models Enable Zero\-Shot Transliteration](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-464-24bc1a0ae3/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 121 | [不改伪标签，在参数空间里纠正伪标签：Pseudo2Real 的跨口音修正向量](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-59-e55a84f190/) | [Pseudo2Real: Task Arithmetic for Pseudo\-Label Correction in Automatic Speech Recognition](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-59-e55a84f190/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 122 | [三跳都必须用上：OMHBench 如何堵住全模态评测的捷径与偏路](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-911-a2538b910d/) | [OMHBench: Benchmarking Balanced and Grounded Omni\-Modal Multi\-Hop Reasoning](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-911-a2538b910d/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音视频问答 |
| 123 | [只听声音就能画像：HearSay 揭示音频大模型的声纹隐私泄露](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-964-363fec322c/) | [HearSay Benchmark: Do Audio LLMs Leak What They Hear?](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-964-363fec322c/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.6/1 · 影响力 1.2/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音属性识别 |
| 124 | [长视频里听懂人：LongInsightBench 为何同时考定位、排序与因果](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-965-260613c100/) | [LongInsightBench: A Comprehensive Benchmark for Evaluating Omni\-Modal Models on Human\-Centric Long\-Video Understanding\.](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-965-260613c100/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音视频问答 |
| 125 | [谁在何时说了什么：用双流解耦与数字时间锚做联合识别与 diarization](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1938-aff4cdc5c6/) | [TagSpeech: End\-to\-End Multi\-Speaker ASR and Diarization with Fine\-Grained Temporal Grounding](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1938-aff4cdc5c6/) | **6.7/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #说话人分离标注 |
| 126 | [标准语上文本最强，方言上语音反超：德语意图与话题分类的三路对照](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-309-bc4f3ef185/) | [Standard\-to\-Dialect Transfer Trends Differ across Text and Speech: A Case Study on Intent and Topic Classification in German Dialects](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-309-bc4f3ef185/) | **6.7/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #口语意图与槽位识别 |
| 127 | [把 Transformer 换成 Mamba 做语音自监督：长语音更快，但双向扩展仍有代价](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-470-7ff7eb9184/) | [An Exploration of Mamba for Speech Self\-Supervised Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-470-7ff7eb9184/) | **6.7/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #语音识别 |
| 128 | [先对齐再推理：RespiraMFM 用对比投影解决呼吸音与症状文本的语义错位](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-58-edd7e8c5c3/) | [RespiraMFM: A Multimodal Foundation Model with Contrastive Audio\-Language Alignment for Respiratory Disease Identification](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-58-edd7e8c5c3/) | **6.7/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #病理语音评估 |
| 129 | [噪声不在波形里，而在嵌入的方向上：SEE 量化与 SEEN 中和](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-866-b00a3c29c4/) | [SEE: Signal Embedding Energy for Quantifying Noise Interference in Large Audio Language Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-866-b00a3c29c4/) | **6.7/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频问答 |
| 130 | [整句重复又帧内粘连：MelTrim 先按声音粗筛再按梯度细剪做语音分类剪枝](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-672-5a196114a3/) | [MelTrim: Coarse\-to\-Fine Data Pruning for Speech Classification](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-672-5a196114a3/) | **6.7/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 131 | [两端多学中间少动：按深度分配低秩容量的低资源多语种适配](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-827-5845c869eb/) | [Adapting Where It Matters: Depth\-Aware Adaptation for Efficient Multilingual Speech Recognition in Low\-Resource Languages](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-827-5845c869eb/) | **6.7/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 132 | [看见消防车、听见警笛才行动：PEAP 要求视觉与音频联合决定动作序列](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1060-2d6fbf1bc2/) | [PEAP: Proactive Embodied Action Sequence Planning with Joint Understanding of Vision and Audio Perception](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1060-2d6fbf1bc2/) | **6.6/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音视频交互 |
| 133 | [先用口音标签分工，再用转写质量选路：MOE\-CTC 的口音鲁棒识别](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1194-11984b3ac8/) | [Mixture\-of\-Experts with Intermediate CTC Supervision for Accented Speech Recognition](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1194-11984b3ac8/) | **6.6/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 134 | [一个模型管 72 个方向：用源端与目标端双路专家拆开识别与翻译的干扰](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1634-3baf64f70a/) | [LCMA\-SRT: Language\-Conditional Mixture\-of\-Experts Adapters for Joint Multilingual Speech Recognition and Translation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1634-3baf64f70a/) | **6.6/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音翻译 |
| 135 | [把说话声放进场景里：语音与环境为何要分流建模再对齐](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1774-c09a9a7449/) | [ImmersiveTTS: Environment\-Aware Text\-to\-Speech with Multimodal Diffusion Transformer and Domain\-Specific Representation Alignment](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1774-c09a9a7449/) | **6.6/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 模型报告 | #文本到语音 |
| 136 | [不急着融合：用显式动作先决定信谁再转写](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1997-72a690741e/) | [Speech\-Hands: A Self\-Reflection Voice Agentic Approach to Speech Recognition and Audio Reasoning with Omni Perception](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1997-72a690741e/) | **6.6/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 137 | [先标出不流利词，再让大模型学会不说：三语语音纠错的对比调优](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2137-1582f3416c/) | [Mind the Pause: Disfluency\-Aware Objective Tuning for Multilingual Speech Correction with LLMs](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2137-1582f3416c/) | **6.6/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 138 | [同时听看读才能判对：Omni\-RewardBench 逼奖励模型做三模态排序](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-636-c4a0a750bb/) | [Omni\-RewardBench: Toward a Comprehensive Evaluation of Generative Reward Models Across Modalities](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-636-c4a0a750bb/) | **6.6/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音视频问答 |
| 139 | [肌电功率为何能对齐自监督语音表示：emg2speech 的无对齐合成路径](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-750-3feadef923/) | [emg2speech: synthesizing speech from electromyography using self\-supervised speech models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-750-3feadef923/) | **6.6/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #静默语音接口 |
| 140 | [边说边听不断线：用自动考官逼出多轮全双工对话的掉线与失忆](/posts/conference-acl-2026-conference-paper-id-2026-acl-short-4-75ead66a0e/) | [Full\-Duplex\-Bench\-v2: A Multi\-Turn Evaluation Framework for Duplex Dialogue Systems with an Automated Examiner](/posts/conference-acl-2026-conference-paper-id-2026-acl-short-4-75ead66a0e/) | **6.6/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #全双工语音交互 |
| 141 | [听声辨物还不够：AUDITA 用人类 trivia 逼出音频问答的推理缺口](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1292-5b7daa0c58/) | [AUDITA: A New Dataset to Audit Humans vs\. AI Skill at Audio QA](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1292-5b7daa0c58/) | **6.6/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频问答 |
| 142 | [不更新参数如何让阿拉伯方言识别变准：提示、前缀与代理重排的三条推理时通路](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1296-c6108b05b7/) | [Zero\-Shot Context\-Aware ASR for Diverse Arabic Varieties](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1296-c6108b05b7/) | **6.6/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 143 | [不靠语义猜声音：用海洋哺乳动物叫声逼模型真正去听](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1562-0870abe2cd/) | [WoW\-Bench: Evaluating Fine\-Grained Acoustic Perception in Audio\-Language Models via Marine Mammal Vocalizations](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1562-0870abe2cd/) | **6.6/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频问答 |
| 144 | [以混合检索补压缩短板：XLSR\-MamBo 如何用 Mamba 与注意力检出伪造语音](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1573-34a32d77c2/) | [XLSR\-MamBo: Scaling the Hybrid Mamba\-Attention Backbone for Audio Deepfake Detection](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1573-34a32d77c2/) | **6.6/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频深度伪造检测 |
| 145 | [简单题别啰嗦、难题多想想：让音频大模型的推理长度跟着难度走](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1640-5d68eec915/) | [Think Smart, Not Hard: Difficulty Adaptive Reasoning for Large Audio Language Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1640-5d68eec915/) | **6.6/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #音频问答 |
| 146 | [把推理也当训练来扩展：掩码流匹配如何一步步重写音频](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1891-72bc6794bc/) | [Masked Text\-to\-Audio Flow\-Matching and Reward Feedback Optimization](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1891-72bc6794bc/) | **6.6/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频生成 |
| 147 | [语音自监督表示为何能做音系加减法：方向与尺度的双重证据](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-537-c96e0f802a/) | [\[b\] = \[d\] \- \[t\] \+ \[p\]: Self\-supervised Speech Models Discover Phonological Vector Arithmetic](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-537-c96e0f802a/) | **6.6/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音合成 |
| 148 | [无声时肌肉还在说话：用通道协方差把肌电直接译成音素](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-564-e235c4865f/) | [Non\-invasive electromyographic speech neuroprosthesis: a geometric perspective](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-564-e235c4865f/) | **6.6/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #静默语音接口 |
| 149 | [平滑偏置之下：用模糊视图逼出瞬态证据的解码修正](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-733-de3cd2b4c5/) | [Temporal Contrastive Decoding: A Training\-Free Method for Large Audio\-Language Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-733-de3cd2b4c5/) | **6.6/10** · 创新 1.2/2 · 技术严谨 1.3/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频问答 |
| 150 | [先定情绪再说话：Self\-EmoQ 把情绪当作可规划的动作](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-740-4d4ae1320f/) | [Self\-EmoQ: Plutchik\-Guided Value\-based Planning to Drive Streaming Emotional TTS](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-740-4d4ae1320f/) | **6.6/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #文本到语音 |
| 151 | [从离散缺失到连续可靠度：QA\-MoE 用质量分数压住不可靠专家的路由](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1461-974a16390a/) | [QA\-MoE: Towards a Continuous Reliability Spectrum with Quality\-Aware Mixture of Experts for Robust Multimodal Sentiment Analysis](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1461-974a16390a/) | **6.5/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 152 | [听不见的推理：从基础听觉短板看多模态模型的音画推理上限](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1697-259ce78b93/) | [Probing Audio\-Visual Reasoning in Multimodal Language Models through the Lens of Audio](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1697-259ce78b93/) | **6.5/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音视频问答 |
| 153 | [母语和语音一换就失灵：Afri\-MCQA 拆解非洲文化问答的语言与模态瓶颈](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1869-cc7138425a/) | [Afri\-MCQA: Multimodal Cultural Question Answering for African Languages](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1869-cc7138425a/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音视频问答 |
| 154 | [用引导词把视觉听觉拉回同一条推理链：OmniCoT 与动态模态熵](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1044-46f8633f1f/) | [Beyond Modality Collapse: Taming Guided Modality Entropy for Omni\-modal Emotion Reasoning](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1044-46f8633f1f/) | **6.5/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 155 | [从单曲听到两首对比：Jamendo\-MT\-QA 如何把比较式音乐问答做成可测基准](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-125-30dcf31093/) | [Jamendo\-MT\-QA: A Benchmark for Multi\-Track Comparative Music Question Answering](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-125-30dcf31093/) | **6.5/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频问答 |
| 156 | [说了就忘：多轮对话中语音风格为何守不住](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-304-820e19bb59/) | [Style Amnesia: Investigating Speaking Style Degradation and Mitigation in Multi\-Turn Spoken Language Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-304-820e19bb59/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音对话系统 |
| 157 | [稀疏度不是越稀越好：六个语音任务在压缩与保留之间的分岔](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1303-77d15a2e14/) | [Difference in Task Performance on Sparse Speech Representations](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1303-77d15a2e14/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.6/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.4/1.5 | 前50% | 方法研究 | #语音识别 |
| 158 | [文本为主、音频为辅：用情绪轮约束距离的多模态对话情绪识别](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1875-e9d7cf1f52/) | [Emotion\-Wheel\-Guided Audio\-Referred Text Representation for Multimodal Emotion Recognition in Conversation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1875-e9d7cf1f52/) | **6.4/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 159 | [财报电话会不只看说了什么：FinCall\-Surprise 用文本音频幻灯片三模态重测盈利超预期预测](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-610-623654e9a0/) | [FinCall\-Surprise: A Large Scale Multi\-modal Benchmark for Earning Surprise Prediction](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-610-623654e9a0/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频分类 |
| 160 | [不训练也能加速语音扩散模型：先标出冗余再逐对校准](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1157-58f9a05fcf/) | [DiTReducio: A Training\-Free Acceleration for DiT\-Based TTS via Progressive Calibration](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1157-58f9a05fcf/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #文本到语音 |
| 161 | [出错时才见结构：神经语音模型的音位混淆是局部且不对称的](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1288-fcf726e3b6/) | [What Do Neural Speech Models Know About Phonology? Evidence from Structured Phoneme Confusions](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1288-fcf726e3b6/) | **6.4/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #语音识别 |
| 162 | [看着脸听声音：多模态大模型为何在英语里幻听口音、在韩语里加分](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1362-38d9a5b0a5/) | [Visual Interference in Speech Evaluation: Cultural Asymmetry and Cross\-Modal Bias in MLLMs](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1362-38d9a5b0a5/) | **6.4/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 数据集与基准 | #语音属性识别 |
| 163 | [沃洛夫语音查法语文本：把语音拼进冻结文本检索模型为何更稳](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1710-fed1a8e058/) | [Cross\-lingual Matryoshka Representation Learning across Speech and Text](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1710-fed1a8e058/) | **6.4/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频检索 |
| 164 | [把主唱和和声分开：VocalRep 用角色一致性重做人声表示](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1785-47af15ca4d/) | [VocalRep: Structure\-Aware Vocal Representations for Multimodal Generation](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1785-47af15ca4d/) | **6.4/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音乐源分离 |
| 165 | [不只认出是谁：四种平行音频如何泄露身高体重与生活属性](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-283-d5cbe9a87b/) | [AudioPrivacy: Parallel Audio Dataset for Speaker Profiling with Diverse Audio Types and Rich Attributes](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-283-d5cbe9a87b/) | **6.4/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音属性识别 |
| 166 | [在野外伪造面前，专用检测器失灵时比较推理如何兜底](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-450-29efe1ab5f/) | [ICLAD: In\-Context Learning with Comparison\-Guidance for Audio Deepfake Detection](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-450-29efe1ab5f/) | **6.4/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频深度伪造检测 |
| 167 | [声音太杂，一个投影器学不过来：用稀疏专家拆开梯度冲突](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-840-77faf76f54/) | [MoE Adapter for Large Audio Language Models: Sparsity, Disentanglement, and Gradient\-Conflict\-Free](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-840-77faf76f54/) | **6.4/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 方法研究 | #音频理解 |
| 168 | [只看画面能懂笑点吗：v\-HUB 逼模型从视觉和环境声里找幽默](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1785-5af434e415/) | [v\-HUB: A Benchmark for Video Humor Understanding from Vision and Sound](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1785-5af434e415/) | **6.3/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 数据集与基准 | #音视频理解 |
| 169 | [笑声不止于好笑：把视频转成文字再让专家模型分工推理](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2023-820ae81b9b/) | [SMILE\-Next: Teaching Large Language Models to Detect, Classify, and Reason about Laughter](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2023-820ae81b9b/) | **6.3/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音视频问答 |
| 170 | [不成对也能对准发音：用对比模型找出关键语音 token 再加权优化](/posts/conference-acl-2026-conference-paper-id-2026-acl-short-59-5360e5a332/) | [Data\-efficient Targeted Token\-level Preference Optimization for LLM\-based Text\-to\-Speech](/posts/conference-acl-2026-conference-paper-id-2026-acl-short-59-5360e5a332/) | **6.3/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #文本到语音 |
| 171 | [跨视觉语言视频音频的遗忘：在哪里动手比用什么优化更重要](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1379-88908e0c18/) | [Multimodal Unlearning Across Vision, Language, Video, and Audio: Survey of Methods, Datasets, and Benchmarks](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1379-88908e0c18/) | **6.3/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 综述 | #音视频理解 |
| 172 | [听懂古文之声有多难：MCGA 把朗读、翻译、情感与推理放在同一语料里考](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1543-fdd7752dbb/) | [MCGA: A Multi\-task Classical Chinese Literary Genre Audio Corpus](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1543-fdd7752dbb/) | **6.3/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音识别 |
| 173 | [声音对不上长相时，多模态队友先信谁：配对偏置与场景刻板印象的分流](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2057-678e0c8074/) | [Whose Voice, Whose Avatar? Gender Matching Bias in Multimodal AI Teammates](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2057-678e0c8074/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音视频问答 |
| 174 | [听清不等于推对：口音与领域变化下的音频语义推理评估](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-343-08418c92c6/) | [Afrispeech Semantics: Evaluating Audio–Semantic Reasoning in Spoken Language Models Across Domains and Accents](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-343-08418c92c6/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.6/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #口语理解 |
| 175 | [自然互动与多粒度标注：EmotionTalk 如何让中文情感可训练又可解释](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-440-c94eed5a11/) | [EmotionTalk: An Interactive Chinese Multimodal Emotion Dataset With Rich Annotations](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-440-c94eed5a11/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音情感识别 |
| 176 | [缺模态是因果链断裂：先按历史补锚点，再用超图挖高阶组合](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-813-49805d1fe6/) | [CaM\-HG: Causal\-Enhanced MoE and Hypergraphs Network for Incomplete Multimodal Emotion Recognition in Conversations](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-813-49805d1fe6/) | **6.3/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.4/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 177 | [单句之内，声音比文字多说多少：讽刺、情感与疑问的信息分工](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1085-d29378054d/) | [What Do Prosody and Text Convey? Characterizing How Meaningful Information is Distributed Across Multiple Channels](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1085-d29378054d/) | **6.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 178 | [不用每语一个适配器：PUMA 以共享投影加语言令牌做多语 ASR](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-17-6f7e7a00b9/) | [PUMA: Projected Universal Multilingual ASR for Low\-Resource Settings\. Application to Diverse African Languages](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-17-6f7e7a00b9/) | **6.2/10** · 创新 1.1/2 · 技术严谨 1.1/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 方法研究 | #语音识别 |
| 179 | [真实现场压垮推理：RSA\-Bench 用声学生态测出音频大模型的感知\-认知断层](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-913-3183d249e2/) | [RSA\-Bench: Benchmarking Audio Large Models in Real\-World Acoustic Scenarios](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-913-3183d249e2/) | **6.2/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频理解 |
| 180 | [听不清就靠编：用反事实硬负例把音频时间线对齐回声学证据](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1464-8d6581603c/) | [AHA: Aligning Large Audio\-Language Models for Reasoning Hallucinations via Counterfactual Hard Negatives](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1464-8d6581603c/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频问答 |
| 181 | [听不见的音素：极低资源下训练频次如何决定复杂音素能否被识别](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-147-1b6ad65ac2/) | [Hard to Be Heard: Phoneme\-Level ASR Analysis of Phonologically Complex, Low\-Resource Endangered Languages](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-147-1b6ad65ac2/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音识别 |
| 182 | [情绪神经元是能关掉也能拨动的开关吗：大音频语言模型的因果验证](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-687-bb6f77697c/) | [Discovering and Causally Validating Emotion\-Sensitive Neurons in Large Audio\-Language Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-687-bb6f77697c/) | **6.0/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 183 | [把台词说得像那个人：ActorMind 用看听想说四步做语音角色扮演](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1718-9ffc17556c/) | [ActorMind: Emulating Human Actor Reasoning for Speech Role\-Playing](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1718-9ffc17556c/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #语音对话系统 |
| 184 | [从“是不是自闭”到“在说什么”：ROSCO\-Omni 用标签引导把照护者理解蒸馏进开源全模态模型](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2011-bb5109d370/) | [ROSCO\-Omni: Multimodal LLM\-Based Communication Understanding for Non\- and Minimally\-Speaking Autistic Individuals](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2011-bb5109d370/) | **6.0/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音视频理解 |
| 185 | [声音里有喘息却只听文字说没事：CliniCAST 测音频分诊的文本主导](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2056-abf42f7a45/) | [CliniCAST: Benchmarking Acoustic Grounding and Text Dominance in Medical Triage](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2056-abf42f7a45/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #病理语音评估 |
| 186 | [音乐问答为何不能只靠通用多模态：密集音画下的时空与音乐先验设计](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-69-5f778e9a4f/) | [Music Audio\-Visual Question Answering Requires Specialized Multimodal Designs](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-69-5f778e9a4f/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 综述 | #音视频问答 |
| 187 | [只动声音就能拖垮三模态推理：SoundBreak 的六路音频攻击](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1275-05df968c9e/) | [SoundBreak: A Systematic Study of Audio\-Only Adversarial Attacks on Trimodal Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1275-05df968c9e/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #音视频问答 |
| 188 | [用静态先验锚定动态语音：MMSFC 与顺序平滑如何重塑流利度分类](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1551-959c32dab3/) | [Synergizing Semantic Anchors and Ordinal Smoothed Cross\-Entropy for Speech Fluency Classification](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1551-959c32dab3/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音属性识别 |
| 189 | [先看清频谱能量再迭代：谱重力共振峰估计如何换取带时间的音素切分](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1775-e8707dca20/) | [Spectral Gravity Formant Estimation for Phonetic Segmentation](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1775-e8707dca20/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 190 | [相同文字不同处境，相同处境不同语气：AEQ\-Bench 拆解全模态模型共情](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1813-20100aa18a/) | [AEQ\-Bench: Measuring Empathy of Omni\-Modal Large Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1813-20100aa18a/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 数据集与基准 | #语音对话系统 |
| 191 | [整段对话只有一个标签时，如何让稀疏病症线索被三层粒度共同抓住](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1194-b6130c13c3/) | [Semi\-Supervised Diseased Detection from Speech Dialogues with Multi\-Level Data Modeling](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1194-b6130c13c3/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.5/1.5 · 可复现 0.3/0.5 · 工程/实践 0.6/1.5 | 前50% | 方法研究 | #病理语音评估 |
| 192 | [留住语调、抹掉身份：用声门源与对抗损失学隐私韵律表示](/posts/conference-acl-2026-conference-paper-id-2026-acl-short-26-bd1d11aaad/) | [Privacy\-preserving Prosody Representation Learning](/posts/conference-acl-2026-conference-paper-id-2026-acl-short-26-bd1d11aaad/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #语音属性识别 |
| 193 | [用已确认的块把下一步拽回来：锚定循环如何抑制长序列符号音乐的误差累积](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1574-1dbb6ae701/) | [Anchored Cyclic Generation: A Novel Paradigm for Long\-Sequence Symbolic Music Generation](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1574-1dbb6ae701/) | **5.7/10** · 创新 1.3/2 · 技术严谨 0.9/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #符号音乐生成 |
| 194 | [音素嵌入为何不公平：偏置与方差两类几何误差的拆分检验](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1678-27ac088d5a/) | [Identifying and typifying demographic unfairness in phoneme\-level embeddings of self\-supervised speech recognition models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1678-27ac088d5a/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #语音识别 |
| 195 | [人设没崩在哪条路：把说什么和怎么说分开查的语音人设诊断](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-445-8236f3494c/) | [PED: Route\-Decoupled Diagnostics for Persona Consistency in Spoken Agents](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-445-8236f3494c/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #语音对话系统 |
| 196 | [把整条基频轮廓看成整体：首尔韩语重音短语声调的对比学习分类](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1838-64ad9193d4/) | [Deep Supervised Contrastive Learning of Pitch Contours for Robust Pitch Accent Classification in Seoul Korean](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1838-64ad9193d4/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 方法研究 | #音频分类 |
| 197 | [看得懂却算不对：多模态大模型乘法在算术负载下的计算崩塌](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2025-ec58887f53/) | [Multiplication in Multimodal LLMs: Computation with Text, Image, and Audio Inputs](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2025-ec58887f53/) | **5.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.3/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 后50% | 数据集与基准 | #音频问答 |
| 198 | [缺音频不靠想象：从真实语义库中检索再净化](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-961-a2e283874b/) | [Retrieving to Recover: Towards Incomplete Audio\-Visual Question Answering via Semantic\-consistent Purification](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-961-a2e283874b/) | **5.1/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.6/1.5 | 后50% | 方法研究 | #音视频问答 |
| 199 | [从碎片到谱系：印度语言 NLP 资源为何要按任务重组](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-551-160371c5b6/) | [BhashaSutra: A Task\-Centric Unified Survey of Indian NLP Datasets, Corpora, and Resources](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-551-160371c5b6/) | **4.9/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 综述 | #音频理解 |

---

## 📋 论文列表

### 1. [从单分到多维推理：UniSRM 如何让语音评价说出依据](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2150-acd43a3d4c/)

> 英文题目：*[UniSRM: A Unified Speech Reward Model for Reasoning\-Based Fine\-grained Assessment](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2150-acd43a3d4c/)*

标签：#基准测试 #数据集 #强化学习 #语音质量评估

评分：**8.7/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音质量评估 | 主方法：#强化学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.2150/) · [官方 PDF](https://aclanthology.org/2026.acl-long.2150.pdf)

👥 **作者与机构**

- Yuanyuan Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Dongchao Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Yayue Deng：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiyong Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Steven Y\. Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Helen M\. Meng：机构信息未能从会议 PDF 纯文本可靠映射
- Xixin Wu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理语音生成的自动评判问题，输入为目标文本与候选语音或场景文本与多轮语音对话历史，输出为多维度分数加成对偏好或七维平均意见分，难点在于单一客观指标仅覆盖语音片面属性且黑盒标量缺乏可解释性与上下文感知。为此先构建覆盖话语级偏好到场景风格与多轮连贯的统一数据与评测基准，为多任务训练与评估提供一致输入并避免数据泄露。接着以监督微调使基座模型学会先在思考段内逐维度写出证据再给出结论的结构化输出，为后续策略优化提供可约束的起点。然后以组相对策略优化引入推理一致奖励，直接监督维度内打分与比较方向，使中间推理与最终选择保持一致。与已有音频大模型评判仅覆盖窄场景且只监督最终答案不同，该机制把维度打分行为纳入奖励，实际意义在于抑制捷径推理并提升跨任务的人类对齐度。在UNISRM\-BENCH的T1话语级成对偏好任务下，UniSRM的准确率为65\.06%，高于Gemini\-2\.5\-Pro的60\.67%。该结论适用边界受限于所含朗读与情感及日常对话分布，对重口音与混叠语音等复杂声学外推尚未验证，且强化阶段多样本滚动带来显著训练成本，推理开销为单次约8\.98秒与约20GB显存占用。

🔗 **开源资源**

- 代码相关资源：<https://github.com/lavendery/UniSRM> — 链接可访问（HTTP 200）
- 模型相关资源：<https://github.com/lavendery/UniSRM> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/lavendery/UniSRM> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 2. [词级定位而非句级知道：WESR 把笑声哭声放回词的位置](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-153-b0e6b672f6/)

> 英文题目：*[WESR: A Benchmark and Strong Baseline for Word\-level Event\-Speech Recognition](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-153-b0e6b672f6/)*

标签：#基准测试 #数据集 #基准设计 #语音识别 #音频事件检测

评分：**8.7/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.153/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.153.pdf)

👥 **作者与机构**

- Chenchen Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Kexin Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Liwei Fan：机构信息未能从会议 PDF 纯文本可靠映射
- Qian Tu：机构信息未能从会议 PDF 纯文本可靠映射
- Botian Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Dong Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Linqi Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Shimin Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhaoye Fei：机构信息未能从会议 PDF 纯文本可靠映射
- Qinyuan Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Xipeng Qiu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

词级事件语音识别以音频为输入，直接输出带词级位置的转写，需区分插入式离散事件与包裹词跨度的连续事件，难点在于笑说哭腔等调制型发声与词汇内容高度耦合且位置改变语义。作者先用BEATs音频向量检索与AF\-CLAP文本检索的混合检索挖掘稀疏事件候选，得到候选集供专家标注以构建WESR\-Bench金标准。接着以事件保留对齐将假设转写映射到参考文本，解耦词错误与事件定位，使连续事件可按词重叠部分得分而离散事件要求精确插入点。然后在包含1767小时英汉语料的WESR\-Train上对多底座监督微调，所得带事件标签的转写输出直接进入位置感知协议评测单句多事件定位。相对以往句级分类加词错误率或简单位置惩罚的评估，该协议原生支持单句多事件并区分连续与离散计分，具有更精细的定位诊断意义。在WESR\-Bench基准下，WESR\-Qwen的宏平均F1为38\.0，高于Qwen3\-Omni的16\.9。该结论适用边界受限于英汉自然语音的21类人声事件，对低资源语言与强噪声重叠场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Cr-Fish/WESR> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/Cr-Fish/WESR> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 3. [语义与声学分流：SAC 用双路量化兼顾可懂度与可重建性](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-138-f39fe656c0/)

> 英文题目：*[SAC: Neural Speech Codec with Semantic\-Acoustic Dual\-Stream Quantization](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-138-f39fe656c0/)*

标签：#向量量化 #语音 #语音编码 #文本到语音

评分：**8.5/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音编码 | 主方法：#向量量化

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.138/) · [官方 PDF](https://aclanthology.org/2026.acl-long.138.pdf)

👥 **作者与机构**

- Wenxi Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Ruiqi Yan：机构信息未能从会议 PDF 纯文本可靠映射
- Yushen Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Zhikang Niu：机构信息未能从会议 PDF 纯文本可靠映射
- Ziyang Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Xiquan Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yuzhe Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Wenhanlin：机构信息未能从会议 PDF 纯文本可靠映射
- Shunshun Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Ming Tao：机构信息未能从会议 PDF 纯文本可靠映射
- Xinsheng Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xie Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为16 kHz原始语音波形，输出为可重建波形的离散双流词元，难点在于单码本同时优化语义一致性与声学保真时会相互干扰，导致可懂度与自然度难以兼顾。先由冻结的语义流以原始波形为输入，负责提取语言内容并经适配器对齐，输出12\.5 Hz语义词元，为重建提供不受重建梯度污染的语义锚点。再由独立训练的声学流以同一原始波形为输入，负责提取互补声学细节并做单码本向量量化，输出量化声学表征，该表征与上一步语义词元拼接后进入融合预网络形成双流表征。最后由镜像卷积解码器以融合双流表征为输入，负责统一重建波形，并辅以语义重建与说话人嵌入约束保留内容与音色。与量化前融合的X\-Codec与XY\-Tokenizer不同，该设计将语义完整性与声学容量解耦，使声学码本专注细节生成而语义不受重建目标干扰。在Seed\-TTS test\-en测试集下，Ours的WER为1\.06%，低于Spark\-TTS的1\.98%。该结论适用边界为中英文朗读语音的重建与生成，对音乐通用音频及强噪声外的极端信道尚未验证。训练成本为在8张NVIDIA H20硬件上训练850k步，批量与优化器等设置下推理开销原文未单独量化。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Soul-AILab/SAC> — 链接可访问（HTTP 200）
- 模型相关资源：<https://github.com/Soul-AILab/SAC> — 链接可访问（HTTP 200）
- 演示资源：<https://sac-codec.github.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/Qwen/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 4. [直接学对话会失语：用课程学习与说话轮次嵌入让流匹配学会双人对话](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1928-caba22de29/)

> 英文题目：*[ZipVoice\-Dialog: Non\-Autoregressive Spoken Dialogue Generation with Flow Matching](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1928-caba22de29/)*

标签：#数据集 #课程学习 #流匹配 #零样本 #语音对话系统

评分：**8.5/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音对话系统 | 主方法：#流匹配

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1928/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1928.pdf)

👥 **作者与机构**

- Han Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Kang：机构信息未能从会议 PDF 纯文本可靠映射
- Liyong Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Zengwei Yao：机构信息未能从会议 PDF 纯文本可靠映射
- Fangjun Kuang：机构信息未能从会议 PDF 纯文本可靠映射
- Weiji Zhuang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhaoqing Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhifeng Han：机构信息未能从会议 PDF 纯文本可靠映射
- Dong Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xin Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xingchen Song：机构信息未能从会议 PDF 纯文本可靠映射
- Lingxuan Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Long Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Daniel Povey：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为按起始时间排序合并的交错多轮文本与可变轮次双说话人提示语音，输出是保持各自音色并自然轮转的对话语音，难点在于多音色干扰下语音文本对齐易崩溃且轮次归属易混淆。该工作先在100k小时独白预训练的ZipVoice上建立稳定对齐，再在单通道对话上微调60k步以学习多说话人对齐与轮转动态，接着在文本编码器输出上按说话人身份叠加可学习的说话人轮次嵌入并经平均上采样扩展，最后由向量场估计器与预训练Vocos声码器并行合成完整对话。相比自回归基线逐词元顺序采样，该非自回归流匹配方案免除时长预测器与轮次时间戳并以16步欧拉求解器并行解码。在test\-en上其词错率为3\.25%，显著优于MoonCast的23\.62%和Dia的11\.80%，实时率为0\.063，约为MoonCast的15分之1。该结论限于双说话人非重叠主场景，中文主观评测仅覆盖10人小样本，多于2人泛化与强重叠鲁棒性尚未验证。原文未披露训练硬件与推理部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/k2-fsa/ZipVoice> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 5. [小子集为何能排准大音频模型：从基准压缩到人类偏好回归](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1816-3bb6d30b3d/)

> 英文题目：*[Putting HUMANS first: Efficient LAM Evaluation with Human Preference Alignment](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1816-3bb6d30b3d/)*

标签：#基准设计 #用户研究 #音频大模型 #语音对话系统

评分：**8.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#语音对话系统 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1816/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1816.pdf)

👥 **作者与机构**

- Woody Haosheng Gan：机构信息未能从会议 PDF 纯文本可靠映射
- William Barr Held：机构信息未能从会议 PDF 纯文本可靠映射
- Diyi Yang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

大型音频模型 Large Audio Models / LAMs 的评测输入为语音问询与对话上下文，输出为语音或文本应答，难点在于音频 token 开销巨大且静态正确性与真实用户满意度严重脱节。本文方法链分三步推进：先在多基准任务池上用聚类与表征方法筛选极小子集并以全量任务平均分为金标准验证排序保持性，筛选结果再进入真实语音助手交互收集多维人类满意度以度量基准与人的对齐缺口，最后在子集条目分数上训练岭回归 Ridge regression 以加权组合预测人类总体满意度。与单模态嵌入、方差筛选及直接学习全量映射相比，结合声学、语义与模型行为的多源联合聚类更能覆盖基础与细粒度能力，而回归加权则显式建模满意度的维度组合关系。在 18 个模型与 40 个任务的交叉验证中，50 个样本的子集达到 0\.934 的 Pearson 相关性，而基于精选子集的回归在 7 个模型的人类偏好预测中达到 0\.978，显著高于全量基准回归的 0\.949。该结论仅适用于英语母语人群的会话类场景，未验证音乐、生成及其他语言的外推，且小样本回归对新架构的泛化仍待检验。全量评测约耗费 1520 个 GPU 小时与 2400 美元 API 成本，子集将该开销压缩至千分之几。

🔗 **开源资源**

- 数据相关资源：<https://github.com/SALT-NLP/CAVA> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 6. [先看再听：用两段式推理链约束幻灯片辅助转写](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-425-8654934ad2/)

> 英文题目：*[VAPO: End\-to\-end Slide\-Enhanced Speech Recognition with Omni\-modal Large Language Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-425-8654934ad2/)*

标签：#基准测试 #强化学习 #多模态模型 #音视频 #音视频语音识别

评分：**8.4/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音视频语音识别 | 主方法：#强化学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.425/) · [官方 PDF](https://aclanthology.org/2026.acl-long.425.pdf)

👥 **作者与机构**

- Rui Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Delai Qiu：机构信息未能从会议 PDF 纯文本可靠映射
- Yining Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Shengping Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Jitao Sang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

幻灯片增强语音识别以讲座音频为主要输入、以幻灯片图像为辅助输入，输出转写文本，实际难点在于全能模态大语言模型偏向可见文字而幻觉出未被说出的幻灯片内容。所提视觉锚定策略优化先在思考块中执行光学字符识别抽取幻灯片文本，形成视觉先验并输出给后续阶段。接着在回答块中以该先验为语义锚点聆听音频生成转写，并以格式、识别、光学字符识别与视觉锚定四维奖励通过组相对策略优化完成训练。为补足实体密集数据，作者构建SlideASR\-Bench，包含由上下文语音基准扩展的大规模合成语料SlideASR\-S与面向真实复杂演讲环境的200实体小规模真实测试集SlideASR\-R。在SlideASR\-S英文评测设置下，VAPO\-7B的WER为4\.60，低于Qwen2\.5\-Omni\-7B的8\.15。相对将幻灯片文本或图像直接作为上下文的流水线与端到端基线，该时序解耦的先看后听链条把视觉信息约束为可引用的锚点而非待转写内容，实际意义在于抑制视觉干扰同时保留对专业实体的召回。该结论适用边界受限于合成风格训练与清晰幻灯片假设，低分辨率小字体及视觉形近字仍是失败条件，跨语种通用场景尚未验证。推理开销方面VAPO\-7B在SlideASR\-R上每样本延迟为7\.27秒，训练使用4卡A100硬件完成800步优化，因而更适合离线高精度转写。

🔗 **开源资源**

- 代码相关资源：<https://github.com/isruihu/SlideASR-Bench> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/Qwen/Qwen2.5-14B-Instruct> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 7. [双假设迟融合：在语言空间里让听觉与视觉各自举证再裁决](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-26-6b3c612bd0/)

> 英文题目：*[Two Heads Are Better Than One: Audio\-Visual Speech Error Correction with Dual Hypotheses](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-26-6b3c612bd0/)*

标签：#多模态学习 #大语言模型 #音视频 #语音 #音视频语音识别

评分：**8.4/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音视频语音识别 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.26/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.26.pdf)

👥 **作者与机构**

- Sungnyun Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Kangwook Jang：机构信息未能从会议 PDF 纯文本可靠映射
- Sungwoo Cho：机构信息未能从会议 PDF 纯文本可靠映射
- Joon Son Chung：机构信息未能从会议 PDF 纯文本可靠映射
- Hoi\-Rin Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Se\-Young Yun：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音视频语音识别以同步音频流与唇动视频流为输入并输出转写文本，实际难点在于音频噪声与视觉遮挡常联合出现且时变错位，单路音频N\-best假设在低信噪比下整体出错使生成式纠错无从选择。DualHyp先用语音识别头与视觉语音识别头独立解码，各自输出N\-best文本假设以保留模态特有证据与词汇多样性。接着轻量可靠性预测器按词级时长对音视频流切分并逐段标注干净与受损状态，形成双路可靠性掩码与双假设一同输入下一步。最后大语言模型在语言空间读取双假设与掩码，动态仲裁可信模态并组合正确词项生成最终转写，使上一步的掩码直接控制跨模态取舍。与早期特征融合及适配器注入视觉不同，该框架保持模态隔离后再做语言级融合，避免受损音频污染视觉证据，因而在未见噪声类型下仍能调用独立视觉线索。在LRS2模态条件评测下，DualHyp\+RelPrompt的WER为9\.9%，低于Whisper\-large\-v3的25\.8%。该结论适用边界受限于合成损坏的英语基准与多语言视觉头较弱的情形，跨语言与真实遮挡泛化尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/sungnyun/dualhyp> — 链接可访问（HTTP 200）
- 模型相关资源：<https://huggingface.co/microsoft/phi-2> — 暂时无法访问
- 模型相关资源：<https://github.com/ahaliassos/raven> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/sungnyun/dualhyp> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/Sreyan88/LipGER> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/sungnyun/cav2vec> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 8. [片段描述与帧标注无法直接同训时如何统一：FineLAP 以解耦适配与双流损失实现粗细对齐](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-473-f556b50fb1/)

> 英文题目：*[FineLAP: Taming Heterogeneous Supervision for Fine\-grained Language\-Audio Pretraining](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-473-f556b50fb1/)*

标签：#对比学习 #音频分类 #音频检索 #音频事件检测

评分：**8.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频事件检测 | 主方法：#对比学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.473/) · [官方 PDF](https://aclanthology.org/2026.acl-long.473.pdf)

👥 **作者与机构**

- Xiquan Li：机构信息未能从会议 PDF 纯文本可靠映射
- Xuenan Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Ziyang Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Wenxi Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Haolin He：机构信息未能从会议 PDF 纯文本可靠映射
- Qiuqiang Kong：机构信息未能从会议 PDF 纯文本可靠映射
- Xie Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理开放词汇细粒度音频语言对齐，输入为十秒音频与自然语言标题和短语，输出要求同时给出片段级语义匹配与帧级事件起止位置，难点在于帧级标注稀缺且长尾事件难以穷举，同时粗细两种粒度目标在共享空间中容易相互干扰导致细节丢失。方法链分为四步，首先利用自监督音频编码器同时提取全局音频特征与稠密时频特征，为后续多粒度对齐提供统一表征基础。其次通过解耦适配器分别投影到共享语义空间，其中轻量分支保留整体语义而表达力更强的分支建模时序依赖，使两类表示互不挤占。然后以片段级成对损失对齐音频整体表示与标题表示，学习可迁移的粗粒度跨模态关联。最后以帧级成对损失对齐稠密帧表示与短语表示，并用基于语义聚类的负采样补充跨簇负短语，增强对未见事件的细粒度判别能力。与仅依赖全局批量归一化对比学习的已有语言音频预训练方法相比，关键机制差异在于采用独立成对的双流目标避免归一化竞争，使异构监督相互补充并保留时序细节。在AudioCaps评测集下，FineLAP文本到音频检索指标R@1为45\.7，高于Cacophony的41\.0。该结论适用边界受限于固定时长与中等密度事件假设，对变长音频密集重叠与长程依赖等场景尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://freesound.org/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://sound-effects.bbcrewind.co.uk/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://soundbible.com/> — 暂时无法访问
- 第三方资源：<https://github.com/fgnt/sed_scores_eval> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 9. [不只认清单个字：用完整亲子对话检验多方言儿童语音识别](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-251-a7cc77db4e/)

> 英文题目：*[ChildTalk: A Multi\-Dialect Chinese Child Speech Corpus with Full\-Length Child–Caregiver Conversations for Speech Recognition](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-251-a7cc77db4e/)*

标签：#数据集构建 #多语言 #语音识别 #语音对话系统

评分：**8.3/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#数据集构建

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.251/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.251.pdf)

👥 **作者与机构**

- Jiaming Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Yujie Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Shiwan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Yao Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Jianye Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Haoqin Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Hui Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yong Qin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

儿童语音识别需将亲子自然对话音频转写为中文字符序列，难点在于儿童高基频、声道短、构音不稳叠加自发重复口吃，且方言发音偏离标准普通话。为此ChildTalk先以498名2至8岁儿童与500名照料者组成的500组双人组合为输入，在安静室内采集日常长对话音频，输出112\.5小时保留轮次交替与话题延续的原始录音。再将该原始录音输入43名标注员的字符级转写环节，按规范切分话轮并标注不可懂、笑声、重叠、拼音、英文等特殊事件，输出可训文本。最后将该可训文本按说话人无关方式划分训练测试集并保留完整对话上下文，输出支撑上下文提示识别与跨域泛化评测的语料划分，使前两步的采集与标注成果直接进入评测。相比仅发布孤立朗读句的既有儿童库，其关键差异在于提供全长对话并覆盖标准普通话及官话次方言、闽南语和晋语共11类变体，使方言鲁棒与对话建模可同库验证。在ChildTalk测试集下，Whisper\-medium的CER从43\.94%降至24\.16%。该结论适用边界受限于中文亲子闲聊场景，对2至3岁与闽南语、江淮话等低资源组外推可靠性有限。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://github.com/NKU-HLT/> — 链接可访问（HTTP 200）
- 第三方资源：<https://talkbank.org/childes/access/Chinese/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/openai/whisper> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/wenet-e2e/wenet/blob/main/> → <https://github.com/wenet-e2e/wenet/tree/main> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/FunAudioLLM/SenseVoice> → <https://github.com/QwenAudio/SenseVoice> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/QwenLM/Qwen2.5-Omni> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/QwenLM/Qwen3-Omni> — 链接可访问（HTTP 200）
- 第三方资源：<https://platform.openai.com/docs/guides/> → <https://developers.openai.com/api/docs/guides/text> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 10. [低资源多口音下毒性语音为何失效：冻结音频大模型加三段软提示的解法](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-439-05ae0c44ad/)

> 英文题目：*[Speak No Evil, Just Prompt: Low\-resource Multilingual Toxic Speech Detection with Audio Language Model](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-439-05ae0c44ad/)*

标签：#内容审核 #提示学习 #低资源 #多语言 #音频分类

评分：**8.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.5/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频分类 | 主方法：#提示学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.439/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.439.pdf)

👥 **作者与机构**

- Mingzi Zuo：机构信息未能从会议 PDF 纯文本可靠映射
- Lei Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Hailiang Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Shengzhi Huo：机构信息未能从会议 PDF 纯文本可靠映射
- Changyu Dong：机构信息未能从会议 PDF 纯文本可靠映射
- Xin Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Bo Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Hao Liu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为原始语音波形，输出为有毒或安全的二分类标签，难点在于低资源语言自动语音识别转写错误传播、口音韵律差异显著，且毒性常藏于语调与语用而非显性词汇。方法链分三步：先以冻结音频语言模型将语音离散声学词元与固定英文指令拼接编码为统一嵌入，再在输入前拼接任务专用提示、多语言共享提示与语种残差提示以注入三级先验，最后经冻结变换器与语言模型头比较有毒与安全两个标签词元的概率完成判别。该框架冻结主干参数仅优化轻量提示，实现了参数高效的多语言知识共享与语种特化平衡。与级联式语音识别加文本分类相比，该设计避免了转写瓶颈并保留了声学线索。在PolySpeechTox测试集下，SoftPrompt\-TSD的微平均ROC\-AUC为98\.07%，高于少样本学习FSL的87\.89%。结论适用边界仅在所收集的53种语言与口音分布内成立，对未见语种、强噪声与隐晦讽刺的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://github.com/PolySpeechTox/> — 链接可访问（HTTP 200）
- 第三方资源：<https://voicertool.com/cn> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 11. [把对齐改成填空：一次填完长语音时间戳的槽位方案](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1174-f44e590b82/)

> 英文题目：*[LLM\-ForcedAligner: A Non\-Autoregressive and Accurate LLM\-Based Forced Aligner for Multilingual and Long\-Form Speech](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1174-f44e590b82/)*

标签：#多模态学习 #大语言模型 #长音频处理 #多语言 #强制对齐

评分：**8.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#强制对齐 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1174/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1174.pdf)

👥 **作者与机构**

- Bingshen Mu：机构信息未能从会议 PDF 纯文本可靠映射
- Xian Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Xiong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Hexin Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Jin Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Lei Xie：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

强制对齐输入为语音信号与对应转录稿，输出每个词或字的起止时间戳，难点在于多语言场景需切换音素词典模型且长语音中局部误差会累积为系统性时间漂移。该方法先用Montreal Forced Aligner生成词级伪起止标签并按80毫秒量化为离散时间索引，以构造大规模多语言训练数据。接着在转录稿起止位置插入特殊槽位符并与Audio Transformer编码的语音嵌入拼接输入大语言模型。然后以非移位因果掩码只在槽位计算交叉熵，使各槽依据自身与上文预测索引，推理时对任意槽位单遍非自回归并行解码再乘帧长还原毫秒时间。与联结时序分类峰值搜索和音素加动态时间规整先做帧级声学相似度累积再聚合不同，该方法直接做语义边界级分类，从而保持单调性并避免自回归幻觉与长语音推理变慢。在MFA标注多语言原始语音测试集下，LLM\-ForcedAligner的指标AAS为42\.9，低于NFA的指标AAS 129\.8。该结论适用边界为10种训练语言内的朗读与对话类语音及最长300秒拼接长语音，推理开销上平均实时因子为0\.0159而略高于已有基线，训练成本受限于伪标签分布且更大参数量易过拟合而尚未验证开放域外推。

🔗 **开源资源**

- 数据相关资源：<https://www.openslr.org/68/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/m-bain/whisperX> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/Qwen/Qwen3-0.6B> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 12. [一步跨越整条轨迹：MeanAudio 以平均速度实现单步文本转音频](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-654-a8f9b0baf5/)

> 英文题目：*[MeanAudio: Fast and Faithful Text\-to\-Audio Generation with Mean Flows](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-654-a8f9b0baf5/)*

标签：#流匹配 #Transformer #高效推理 #音频生成

评分：**8.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：模型报告 | 主任务：#音频生成 | 主方法：#流匹配

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.654/) · [官方 PDF](https://aclanthology.org/2026.acl-long.654.pdf)

👥 **作者与机构**

- Xiquan Li：机构信息未能从会议 PDF 纯文本可靠映射
- Junxi Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuzhe Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhikang Niu：机构信息未能从会议 PDF 纯文本可靠映射
- Wenxi Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Xie Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

文本到音频生成需由自然语言提示生成高保真声音，难点在于扩散与流模型依赖数十至数百次迭代采样，延迟严重制约创作与实时部署。MeanAudio先以短时傅里叶变换提取梅尔谱，再经一维卷积变分自编码器压缩为潜变量序列，由增强型Flux风格变换器学习文本条件下的平均速度场，单步即可从噪声直达干净潜变量，最后经变分自编码器解码与BigVGAN类声码器恢复波形。与依赖教师轨迹的蒸馏加速不同，该方法直接回归带分类器无关引导的平均场，并用瞬时到平均课程稳定优化，推理无需双倍前向。在AudioCaps测试集957个音频上，120M参数单步取得Fréchet Distance 14\.30、Fréchet Audio Distance 1\.77、CLAP 0\.290，显著优于ConsistencyTTA与AudioLCM，实时因子低至0\.013，约为200步GenAU的百分之一量级。该结论限于截断为10秒的英文短描述音效训练与评测，长时程、可变长与含语言内容的语音生成尚未验证。训练在4张NVIDIA RTX 3090上约70小时，推理支持1步、2步、5步与25步解码。

🔗 **开源资源**

- 代码相关资源：<https://github.com/xiquan-li/MeanAudio> — 链接可访问（HTTP 200）
- 演示资源：<https://meanaudio.github.io/> — 链接可访问（HTTP 200）
- 复现相关资源：<https://huggingface.co/lukewys/laion_clap/blob/> — 暂时无法访问
- 第三方资源：<https://sound-effects.bbcrewind.co.uk/> — 链接可访问（HTTP 200）
- 第三方资源：<https://soundbible.com/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 13. [病理语音遮住编解码痕迹时，如何仍能检出伪造](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1739-9527209a59/)

> 英文题目：*[HCFD: A Benchmark for Audio Deepfake Detection in Healthcare](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1739-9527209a59/)*

标签：#医疗音频 #数据集 #基准设计 #语音 #音频深度伪造检测

评分：**8.2/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频深度伪造检测 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1739/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1739.pdf)

👥 **作者与机构**

- Mohd Mujtaba Akhtar：机构信息未能从会议 PDF 纯文本可靠映射
- Girish：机构信息未能从会议 PDF 纯文本可靠映射
- Muskaan Singh：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文面向医疗语音编解码伪造检测，输入为含抑郁、阿尔茨海默病与构音障碍变异的英中临床语音，输出为真实与神经音频编解码器重合成的二分类判定，难点在于疾病引起的韵律、发音和音质偏移会掩盖编解码量化留下的细微痕迹。首先冻结预训练语音编码器抽取语音序列特征并经适配器对齐到统一维度，形成保留时序结构的表征序列。接着选择性状态空间主干承接该序列建模长程时序依赖，并由多证据注意力池化保留四个局部证据向量，避免全局平均抹除间歇性伪迹。然后将证据点映射至庞加莱球，以一个真实原型与四个自发现伪造原型按测地距离打分判定，使异质伪造模式各有归属。该设计相对已有全局池化加分类头方法的关键差异在于显式分离疾病变异与多模式伪造证据，因而更契合伪造痕迹局部异质分布的结构。在英语抑郁任务评测下，PaSST上游结合PHOENIX\-Mamba的准确率为97\.04，高于同上游结合CNN头的78\.98。其结论适用边界受限于受控重合成攻击与六个来源语料，尚未验证文本转语音、语音转换、电话信道及开放集未知编解码器下的可靠性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://helixometry.github.io/HCFD/> — 链接可访问（HTTP 200）
- 模型相关资源：<https://huggingface.co/descript/dac_16khz> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/facebook/encodec_24khz> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/microsoft/wavlm-base> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/openai/whisper-base> — 暂时无法访问
- 数据相关资源：<https://helixometry.github.io/HCFD/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/haydenshively/SoundStream> — 暂时无法访问
- 第三方资源：<https://github.com/modelscope/FunCodec> — 暂时无法访问
- 第三方资源：<https://github.com/facebookresearch/AudioDec> — 暂时无法访问
- 第三方资源：<https://github.com/kkoutini/PaSST> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 14. [英语检测器在印度语上失灵：用双曲对齐把语义和韵律重新拼起来](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2159-2556bf4065/)

> 英文题目：*[Indic\-CodecFake meets SATYAM: Towards Detecting Neural Audio Codec Synthesized Speech Deepfakes in Indic Languages](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2159-2556bf4065/)*

标签：#基准测试 #多模态学习 #多语言 #音频深度伪造检测

评分：**8.2/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频深度伪造检测 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.2159/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.2159.pdf)

👥 **作者与机构**

- Girish：机构信息未能从会议 PDF 纯文本可靠映射
- Mohd Mujtaba Akhtar：机构信息未能从会议 PDF 纯文本可靠映射
- Orchid Chetia Phukan：机构信息未能从会议 PDF 纯文本可靠映射
- Arun Balaji Buduru：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为印度多语言真实语音与神经音频编解码器重合成语音，输出为真实或伪造的二分类判定，难点在于音系多样性、韵律变异与编解码器伪影在跨语言与跨编解码器下分布漂移严重。所提超大规模音频语言模型SATYAM先用Whisper提取语义表征并用TRILLsson提取韵律表征，经轻量卷积与门控投影后映射至双曲空间做语义韵律对齐融合，再将融合语音表征与任务条件提示文本表征做第二阶段跨模态对齐并以莫比乌斯加法聚合，最后将结果映射回欧氏空间作为冻结Qwen2\-7B解码器的前缀条件生成Real或Fake。相比欧氏拼接与单编码器微调基线，该机制以双曲几何显式建模层级关系并分离语音内融合与语音文本对齐两阶段优化。在域内评测中SATYAM在Indic\-CodecFake上达到98\.32%准确率与3\.27%等错误率，显著优于最强微调Qwen2\-Audio基线的93\.19%与8\.34%。结论限于重合成类伪造与IndicSUPERB划分，未验证完全生成式编解码器语音与真实野外噪声的泛化上限。训练仅优化约3\.75M参数共5轮，推理主要开销仍为冻结双编码器与大模型前向，ICF测试集平均约8\.18秒。

🔗 **开源资源**

- 代码相关资源：<https://helixometry.github.io/IndicFake/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://helixometry.github.io/IndicFake/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/AI4Bharat/IndicSUPERB> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/haydenshively/SoundStream> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/modelscope/FunCodec> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/facebookresearch/AudioDec> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.kaggle.com/models/google/trillsson> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 15. [冻住大模型做共情对话：用语义情绪解耦把文本共情搬到语音](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-846-3c7da0eb7e/)

> 英文题目：*[FreezeEmpath: Efficient Training for Empathetic Spoken Chatbots with Frozen LLMs](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-846-3c7da0eb7e/)*

标签：#Adapter #大语言模型 #语音情感识别 #语音对话系统

评分：**8.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音对话系统 | 主方法：#Adapter

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.846/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.846.pdf)

👥 **作者与机构**

- Yun Hong：机构信息未能从会议 PDF 纯文本可靠映射
- Yan Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Yang Feng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

共情语音对话以用户语音为输入，需同时解析语义内容与情感韵律，并输出语义恰当且情感一致的文本与表现力语音回复，实际难点在于情感线索与语义耦合且高成本共情语音指令稀缺，微调又易损伤大模型通用能力。FreezeEmpath先用语音编码器加语义适配器将语音表征映射到大模型嵌入空间，以对齐语义并经自蒸馏完成语义理解与文本回复。接着情绪抽取器经层级加权池化与帧级注意力池化压缩多层隐状态为单一情绪特征，先经语音情感识别预训练再经共情指令微调，并与固定连接词嵌入拼接后输入冻结大模型以产生共情文本。最后基于冻结Qwen2\.5\-7B\-Instruct隐状态训练流式语音解码器生成富有表现力的语音，伪共情数据由随机情绪标签注入中性指令并驱动冻结大模型自生成回复得到。与微调大模型的已有方法不同，该链全程冻结主干并解耦语义与情感输入，使情感训练可扩展到大规模多语言识别数据而不受格式限制并保留问答知识。在6个语音情感识别测试集下，FreezeEmpath的平均准确率为70\.1，高于BLSP\-Emo的63\.3。其结论适用边界限于英中为主的5类粗粒度情绪指令跟随与日常共情对话，尚未验证性别年龄等多副语言因素与长程多轮外推；原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ictnlp/FreezeEmpath> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/OpenBMB/UltraEval-Audio> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 16. [用自然语言搭脚手架学通用音频表示：对比学得快，生成式走得远](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1581-8da592dd90/)

> 英文题目：*[Revisiting Audio\-language Pretraining for Learning General\-purpose Audio Representation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1581-8da592dd90/)*

标签：#数据集 #多模态学习 #预训练 #音频理解

评分：**8.1/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频理解 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1581/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1581.pdf)

👥 **作者与机构**

- Wei\-Cheng Tseng：机构信息未能从会议 PDF 纯文本可靠映射
- Xuanru Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Mingyue Huo：机构信息未能从会议 PDF 纯文本可靠映射
- Yiwen Shao：机构信息未能从会议 PDF 纯文本可靠映射
- Hao Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Dong Yu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究处理以自然语言字幕为弱监督学习通用音频表示的问题，输入为环境声、语音、音乐混合音频，输出为冻结后可迁移到分类、检测、检索、字幕与问答的音频编码器表示，难点在于音频文本规模小且现有字幕语义覆盖偏向事件名而忽略说话人风格与音乐结构。方法链分为三环：先聚合多源开放语料形成含9\.3M音频与10\.7M字幕的CaptionStew以扩大领域与描述粒度，再在相同Zipformer\-M音频编码器下分别用对比分支做片段级图文对齐与用字幕生成分支做帧级交叉注意力解码，最后冻结音频编码器接入线性探针与锁定主干的图文对齐适配层及大语言模型适配器进行三类协议评估。对比分支输出全局对齐表示进入判别任务，生成分支输出经稠密解码的帧级表示进入语言密集任务，两路表示均在冻结条件下接受公平比较。与已有音频语言模型相比，关键机制差异在于对比目标优化全局可分性而生成目标提供更稠密的帧级监督，前者数据高效而后者对细粒度属性与词序关系更敏感。在AudioCaps文本到音频检索任务下，Contrastive\-init的Recall@1指标为44\.4，低于AudioSetCaps基线的49\.7。其适用边界受限于仅10M量级语料与中等模型规模，且作者承认生成目标在大规模下潜力尚未验证，声音事件检测等任务未随数据增大而改善。其训练成本为在8块Tesla V100硬件上从零训练600k步约14天，初始化微调则需200k步。

🔗 **开源资源**

- 代码相关资源：<https://github.com/AudenAI/Auden> — 链接可访问（HTTP 200）
- 模型相关资源：<https://github.com/AudenAI/Auden> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/AudenAI/Auden> — 链接可访问（HTTP 200）
- 复现相关资源：<https://github.com/AudenAI/Auden> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 17. [从离散标签到贴着声音写叙事：FCaps 与 CLSP 的多粒度语音风格建模](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-194-d6b064679d/)

> 英文题目：*[Towards Fine\-Grained and Multi\-Granular Contrastive Language\-Speech Pre\-training](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-194-d6b064679d/)*

标签：#数据集 #对比学习 #零样本 #语音 #音频检索

评分：**8.1/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频检索 | 主方法：#对比学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.194/) · [官方 PDF](https://aclanthology.org/2026.acl-long.194.pdf)

👥 **作者与机构**

- Yifan Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Bing Han：机构信息未能从会议 PDF 纯文本可靠映射
- Hui Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Ziyang Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Long Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Zengrui Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Guanrou Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Tianrui Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xu Tan：机构信息未能从会议 PDF 纯文本可靠映射
- Xie Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为1至30秒英文语音片段，输出为与其说话风格对齐的跨模态表示及风格相似度评分，难点在于说话风格兼含全局身份属性与随时间演变的韵律情感变化，且缺乏可扩展细粒度标注。方法链第一步由Qwen3\-Omni听辨音频多种子采样生成细粒度候选，经正则匹配、转写文本与人工标签工具箱加校验智能体过滤为单条或多条可信描述。第二步在FCaps\-Emilia大规模细粒度对上以对称InfoNCE预训练语音与文本双编码器，学习帧级均值池化后的语音嵌入与\[CLS\]文本嵌入对齐。第三步在FCaps\-PSCBase小规模多粒度数据上以全局加细粒度双文本软目标做课程式多正样本微调，保留同一话语的多视图时序叙事。相对级联先打离散标签再改写做法，关键差异在于全程语音接地与多正视图避免离散瓶颈与纯文本改写幻觉，因而覆盖更全且与可听内容更一致。在ParaSpeechCaps保留集评测下，CLSP的Pearson为0\.893，高于LAION\-AI CLAP的0\.679。该结论适用边界受限于英文朗读与访谈类语音，对多说话人重叠、强噪声及歌唱等场景尚未验证，训练使用8卡NVIDIA A100 80GB GPU的硬件，原文未披露推理开销的延迟与吞吐。

🔗 **开源资源**

- 代码相关资源：<https://github.com/yfyeung/CLSP> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/LAION-AI/CLAP> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/KeiKinn/ParaCLAP> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 18. [只听主人、不听路人：用选择性听觉堵住音频大模型的旁观者泄露](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-693-3e36953934/)

> 英文题目：*[Protecting Bystander Privacy via Selective Hearing in Audio LLMs](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-693-3e36953934/)*

标签：#基准设计 #音频大模型 #隐私保护 #音频问答

评分：**8.1/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.693/) · [官方 PDF](https://aclanthology.org/2026.acl-long.693.pdf)

👥 **作者与机构**

- Xiao Zhan：机构信息未能从会议 PDF 纯文本可靠映射
- Guangzhi Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Jose Such：机构信息未能从会议 PDF 纯文本可靠映射
- Phil Woodland：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频大模型在穿戴与助手场景中会无意收录旁观者语音，输入为多说话人混合音频，输出需在通用模式下正确作答而在选择模式下只答主讲并对旁观者拒答，难点在于重叠语音下的身份归因与指令可控的拒答。方法链分三段衔接：先用真实录制与 AMI 混合两路构建评测音频并由 GPT\-4o 生成主讲与旁观者选择题与主讲描述，再以通用与选择两种指令模式与选择性效能统一度量理解与隐私，最后用主讲保留作答而旁观者强制拒答的成对指令数据做旁观者隐私微调。与已有匿名化与遗忘等面向主动用户的方法不同，该工作把隐私保护做成听觉注意控制而非表征抹除，具有直接可部署的指令语义。在 SH\-Bench 测试集上微调后 Step\-Audio\-2\-mini 的选择性效能达到 91\.7%，超出最强未微调基线 Gemini 2\.5 Pro 约 15\.9 个百分点，论文摘要另声称旁观者选择准确率绝对提升 47%。结论仅适用于单主讲加单旁观者的英语短时场景，未验证群组讨论与音视频多主讲的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://www.prolific.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 19. [语音能听懂却不会推理：用在线轨迹对齐把语音拉回文本推理线](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-857-0727236fa7/)

> 英文题目：*[Closing the Modality Reasoning Gap for Speech Large Language Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-857-0727236fa7/)*

标签：#强化学习 #语音大模型 #后训练 #语音 #音频问答

评分：**8.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#强化学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.857/) · [官方 PDF](https://aclanthology.org/2026.acl-long.857.pdf)

👥 **作者与机构**

- Chaoren Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Heng Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Xueyao Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shujie Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yan Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Jinyu Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhizheng Wu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音大语言模型以语音或文本问句为输入并生成文本回答，难点在于跨层表征漂移与长链行为偏离在语音条件下逐层放大并导致 compounding 错误。先为同一问题并行采样语音与文本轨迹，以任务准确率与格式奖励评估各轨迹正确性，输出带正确性标记的组内轨迹集合，为语音纠偏提供组内参考。再将上一步选出的同组正确文本轨迹作为参照，输入其与语音轨迹的跨层隐状态，随机抽取并计算平均余弦相似度作为表征奖励，同时计算语义一致性作为行为奖励，输出稠密对齐信号，将文本模态作为稳定参照。最后将前两步得到的稠密对齐奖励与基础奖励相加作为总奖励，经模态内分组归一化后以DAPO损失更新语音分支，同时保持文本分支持续进化以避免单边退化。与冻结适配器或离线词元蒸馏强制复述静态目标不同，该在线非对称对齐允许语音自主探索并以稠密相似度动态纠偏，具有避免复合错误的实际意义。在MMSU与OBQA基准下，TARS的平均音频准确率为79\.57%，高于标准GRPO基线的73\.17%。该结论的适用边界受限于单轮英文选择题与合成语音训练，尚未验证多轮对话与韵律情感等非文本线索。训练成本在4×A100或8×H200硬件上Qwen2\.5\-Omni约55小时、Phi\-4\-MM约35小时。

🔗 **开源资源**

- 代码相关资源：<https://github.com/AmphionTeam/TARS> — 链接可访问（HTTP 200）
- 复现相关资源：<https://github.com/modelscope/ms-swift> — 链接可访问（HTTP 200）
- 复现相关资源：<https://github.com/huggingface/trl> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 20. [把音符当集合而非序列：Amadeus 用自回归加双向扩散重排属性依赖](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1898-09aa7ff1a8/)

> 英文题目：*[Amadeus: Autoregressive Model with Bidirectional Attribute Modelling for Symbolic Music](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1898-09aa7ff1a8/)*

标签：#数据集 #自回归模型 #扩散模型 #音乐 #符号音乐生成

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#符号音乐生成 | 主方法：#扩散模型

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1898/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1898.pdf)

👥 **作者与机构**

- Hongju Su：机构信息未能从会议 PDF 纯文本可靠映射
- Ke Li：机构信息未能从会议 PDF 纯文本可靠映射
- Lan Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Honggang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yi\-Zhe Song：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

文本控制符号音乐生成需以自然语言提示输出多音轨音符序列，难点在于音高、乐器、时值、速度等音符内属性本为无序集合而无天然先后顺序，强行展平为固定单向序列会拉长序列并固化属性依赖，限制可控性与解码效率。Amadeus先由自回归音符生成器沿时间逐音符产生隐向量，以建模全局音符序列的结构演进。其输出经条件信息增强模块通过自注意力提炼判别特征，并以交叉注意力融入起始符承载的全局音乐上下文，得到增强表示后送入音符解码器。音符解码器基于掩蔽离散扩散对当前音符的属性子集并行去噪恢复，训练时随机掩蔽属性子集学习双向依赖，推理时可指定任意已知属性并调节去噪步数以权衡质量与速度。与强制固定属性顺序的自回归及层次自回归方法不同，该两级设计将序列级自回归与属性级双向扩散解耦，实现了属性级并行解码、灵活属性控制与可调推理速度的统一。在MidiCaps测试集文本条件生成任务下，Amadeus的TBT为73\.93，高于T2M\-InferAlign的39\.32，且CLAP为0\.20与最强基线持平。该结论适用边界受限于西方流行与古典偏置的预训练语料、10秒渲染音频与工具提取属性的评测协议，尚未验证长曲结构保持与专业作曲家认可等外推场景。推理开销方面8步去噪时吞吐为16\.23音符每秒、单步时可达32\.12音符每秒，训练采用分布式数据并行与混合精度加速但原文未披露具体硬件型号与时长。

🔗 **开源资源**

- 代码相关资源：<https://github.com/lingyu123-su/Amadeus> — 链接可访问（HTTP 200）
- 第三方资源：<https://kaggle.com/datasets/googleai/musiccaps> → <https://www.kaggle.com/datasets/googleai/musiccaps> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 21. [把指令翻译成可测量的声音特征：BatonVoice 的指挥家与乐团分工](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2165-c9f9ef73de/)

> 英文题目：*[BatonVoice: An Operationalist Framework for Enhancing Controllable Speech Synthesis with Linguistic Intelligence from LLMs](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2165-c9f9ef73de/)*

标签：#偏好优化 #大语言模型 #跨语言 #零样本 #文本到语音

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#文本到语音 | 主方法：#偏好优化

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.2165/) · [官方 PDF](https://aclanthology.org/2026.acl-long.2165.pdf)

👥 **作者与机构**

- Yue Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Ruotian Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Xingyu Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengliang Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Morunliu Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Wanshun Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Huang Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Jiadi Yao：机构信息未能从会议 PDF 纯文本可靠映射
- Xin He：机构信息未能从会议 PDF 纯文本可靠映射
- Qu Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Qingxuan Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Fanghua Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Juntao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhaopeng Tu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaolong Li：机构信息未能从会议 PDF 纯文本可靠映射
- Liefeng Bo：机构信息未能从会议 PDF 纯文本可靠映射
- Min Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

可控语音合成以文本与自由指令为输入，输出语义准确且韵律符合意图的语音，难点在于指令理解依赖语言智能而传统端到端微调绕过该能力且依赖昂贵低一致标注。先由指挥者大语言模型以文本、自由指令和说话人中性基线为输入，负责推理分段韵律计划并输出JSON声学特征，明确量化音高与能量等可解释特征。再将该JSON计划与文本拼接为前缀输入乐团模型BatonTTS，负责自回归生成受计划约束的离散语音Token，使前一步的显式计划直接进入条件前缀以约束声学实现。最后以冻结的流匹配与HiFi\-GAN解码器以上述Token为输入，负责将离散表征还原为波形并输出最终语音，完成从理解到合成的衔接。与紧耦合指令微调将理解与声学实现固化于单一模型不同，该解耦使计划可解释可替换且无需人工指令语音对，升级指挥者即可提升控制而不重训合成器。在英文情感基准下，BATONVOICE\-1\.7B的情感准确率为57\.6%，高于Minimax\-2\.5\-HD的48\.6%。该结论适用边界受限于短句朗读与五类情感评测，尚未验证长篇章细粒度重音与非言语声外推，而指挥者计划生成的推理开销带来约20秒延迟，不适合实时场景。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Tencent/digitalhuman/tree/main/BatonVoice> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/YannickJadoul/Parselmouth> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 22. [现学没见过的语言：多模态示范如何帮语音大模型做低资源识别](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1239-657561975b/)

> 英文题目：*[Multimodal In\-context Learning for ASR of Low\-resource Languages](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1239-657561975b/)*

标签：#多模态学习 #跨语言 #低资源 #语音识别

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1239/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1239.pdf)

👥 **作者与机构**

- Zhaolin Li：机构信息未能从会议 PDF 纯文本可靠映射
- Jan Niehues：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

低资源语音识别的输入是未见濒危语言语音，输出为对应文字转写，难点在于监督数据稀缺且语音大模型预训练未覆盖目标语言。与纯文本示例提示不同，该工作以声学模型生成N最优假设，再由语音大模型利用多模态示例重排序输出，从而把声学鲁棒性与上下文理解解耦。方法链包括以标准识别、文本上下文学习与多模态上下文学习对照分离模态贡献，以多语言多模态检索挑选示例并送入跨语言指令微调提升未见语言泛化，最后将声学假设交由微调后模型选择输出。跨语言微调在143种语言上构造多模态指令实例，其输出的泛化表示直接作为重排序阶段的条件上下文。在Mboshi评测集下，联合解码的WER为27\.3，低于假设选择的28\.6。结论适用边界受限，仅在Khinalug、Kichwa、Mboshi三种濒危语言和Phi4、Qwen3\-Omni上验证，直接生成式识别仍失效且长上下文外推尚未验证。推理开销方面原文披露在单块NVIDIA RTX 6000硬件上加载Phi4需11GB显存，假设选择另增11GB且平均每条耗时3秒。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ZL-KA/MICL> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 23. [听声辨位：用可定位性把众包录音筛成组合推理考题](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1297-b429bc54ba/)

> 英文题目：*[The Sonar Moment: An Audio Geo\-Localization Benchmark for Audio\-Language Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1297-b429bc54ba/)*

标签：#基准测试 #基准设计 #音频大模型 #音频理解

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频理解 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1297/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1297.pdf)

👥 **作者与机构**

- Ruixing Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zihan Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Leilei Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Tongyu Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Weifeng Lv：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频地理定位以单段录音为输入，输出经纬度与洲国家城市层级位置，需从稀疏易混的语言生态声文化线索中联合感知并调用世界知识。 construction先用均方根等四种声学过滤器剔除低质片段，输出干净候选进入下一步，接着用EfficientAT标注类别并以Gemini 2\.5推理链估计正负类别贡献，聚合为音频可定位性分数以挖掘高信息样本，最后经人工均衡语音与非语音并统一地名规范，得到覆盖72个国家地区的1444条AGL1K基准并用统一提示评测16个音频语言模型。与以往局限鸟鸣窄域的做法不同，该机制以可解释的正负类别贡献聚合量化地理信息量，使筛选不依赖专家启发并保留多场景耦合线索。在AGL1K基准下，Gemini 3 Pro的平均距离误差指标为2181 km，从Gemini 2\.0 Flash\-Thinking的2992 km降至2181 km。该结论的适用边界限于经筛选的可定位众包录音，在随机采样与欠代表区域上性能会明显下降且街区级定位仍受限。开源模型在RTX 4090硬件上部署评测，闭源模型经默认设置的API访问。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Rising0321/AGL1K> — 链接可访问（HTTP 200）
- 数据相关资源：<https://aporee.org/maps/> — 链接可访问（HTTP 200）
- 第三方资源：<https://openrouter.ai/models> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 24. [没有对齐标注时，如何让笑声叹息出现在情感对的位置](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1369-c75c35ba1e/)

> 英文题目：*[Affectron: Emotional Speech Synthesis with Affective and Contextually Aligned Nonverbal Vocalizations](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1369-c75c35ba1e/)*

标签：#数据增强 #自回归模型 #零样本 #语音 #文本到语音

评分：**8.0/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#文本到语音 | 主方法：#自回归模型

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1369/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1369.pdf)

👥 **作者与机构**

- Deok\-Hyeon Cho：机构信息未能从会议 PDF 纯文本可靠映射
- Hyung\-Seok Oh：机构信息未能从会议 PDF 纯文本可靠映射
- Seung\-Bin Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Seong\-Whan Lee：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

情感语音合成需从文本与情感参考生成含笑声、叹息等非言语发声的高质量连贯且富有表现力的自然语音，难点在于公开NV数据稀少且缺少类型与位置监督。Affectron先以情感向量做情感驱动Top\-K非言语发声匹配，为每段言语挑选情感相容候选NV。其输出候选再经球面情感距离的情感感知Top\-K路由，在言语分段间采样上下文合适的插入位置。重排后的神经音频编解码器序列随后经非言语发声结构掩蔽微调，使VoiceCraft主干依双边言语情感补全NV。相对标签控制与自发风格路线，该框架训练时构造增强样本而推理时仅需含NV标签文本与情感参考，无需检测器或人工对齐。在EARS未见说话人零样本合成评测下，Affectron\-330M的NV\-Acc为36\.90，高于Fun\-CosyVoice3\-0\.5B的27\.38。该结论适用边界受限于朗读式消声室英语、非重叠插入与预定义NV标签集合，尚未验证野外噪声与多人交互下的稳定性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://choddeok.github.io/Affectron/> — 链接可访问（HTTP 200）
- 演示资源：<https://choddeok.github.io/Affectron/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/nari-labs/dia> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/ddlBoJack/emotion2vec> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.mturk.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 25. [答对不等于可靠：用可回答与不可回答配对检验大音频语言模型的对话修复](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-976-ec760595ee/)

> 英文题目：*[Pardon? Evaluating Conversational Repair in Large Audio\-Language Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-976-ec760595ee/)*

标签：#评测协议 #音频大模型 #语音 #音频问答

评分：**8.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#评测协议

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.976/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.976.pdf)

👥 **作者与机构**

- Shuanghong Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Jinlei Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Youchao Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Yanghao Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Xuan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Chong Feng：机构信息未能从会议 PDF 纯文本可靠映射
- Wenxuan Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

口语问答以带噪语音为输入，需输出答案或在信息缺失时发起澄清修复，难点在于答案关键语义被局部遮蔽时模型仍强行猜答而非识别不可答。为此先用语义声学掩码构造配对条件，退化掩码遮蔽答案跨度以制造不可答输入，不变掩码仅扰动功能词以保留可答性并控制声学变化。接着让大音频语言模型在可答与不可答条件下分别零样本推理，产生条件化应答行为。最后由大模型裁判分别判定可答下的任务正确性与不可答下的显式修复，并以非补偿调和方式合成为可评估性感知与修复得分以防高准确掩盖零修复。与把扰动仍视为可答并沿用固定答案打分的鲁棒性评测不同，该机制把不可答视为修复触发器，强调可靠性而非单纯准确率。在WDYL基准下，Gemini 2\.5的EAR得分为77\.2，高于GPT\-4o的39\.8。该结论适用边界限于单轮英文问答与局部关键词缺失，在长语音与复杂声学下修复识别显著下降，尚未验证多轮跟踪与声学歧义等泛化。推理硬件为RTX 3090与A6000上的贪婪或低温采样，最大生成长度为2048 token，原文未完整报告训练成本与计算量。

🔗 **开源资源**

- 代码相关资源：<https://github.com/sheunghung/EAR> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/sheunghung/EAR> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/openai/whisper-large-v3> — 暂时无法访问
- 第三方资源：<https://github.com/explosion/spaCy> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 26. [只看转写错误会漏掉什么：PRiSM 同时考听写与下游使用](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-825-82bac7a9c7/)

> 英文题目：*[PRiSM: Benchmarking Phone Realization in Speech Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-825-82bac7a9c7/)*

标签：#基准测试 #基准设计 #语音学与音系 #多语言 #语音识别

评分：**7.9/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.825/) · [官方 PDF](https://aclanthology.org/2026.acl-long.825.pdf)

👥 **作者与机构**

- Shikhar Bharadwaj：机构信息未能从会议 PDF 纯文本可靠映射
- Chin\-Jou Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yoonjae Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Kwanghee Choi：机构信息未能从会议 PDF 纯文本可靠映射
- Eunjung Yeo：机构信息未能从会议 PDF 纯文本可靠映射
- Ryan Soh\-Eun Shim：机构信息未能从会议 PDF 纯文本可靠映射
- Hanyu Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Brendon Boldt：机构信息未能从会议 PDF 纯文本可靠映射
- Karen Rosero：机构信息未能从会议 PDF 纯文本可靠映射
- Kalvin Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Darsh Agrawal：机构信息未能从会议 PDF 纯文本可靠映射
- Keer Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Chao\-Han Huck Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Jian Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Shinji Watanabe：机构信息未能从会议 PDF 纯文本可靠映射
- David R\. Mortensen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音素识别以语音波形为输入，以国际音标序列为输出，难点在于音素是低层发音抽象且标注稀缺，转写误差难以反映下游效用。PRiSM先以内在评测统一解码专用模型与大音频语言模型的转写，并计算音素特征错误率PFER以衡量核心转写能力。接着将各模型生成的转写送入转录探针的双向门控循环单元，学习话语级表示以完成病理、L2与多语言任务。同时将模型末层隐表征送入表征探针的注意力池化加多层感知机，直接检验隐式通道在相同下游任务上的效用。与仅比较转写误差的已有评测相比，该设计同时检验显式符号与隐式表征两条利用通道，并揭示编码器结构与语言覆盖之间的权衡。在L1\-eda任务评测下，启用思考模式的F1\-score为24\.9%，低于未启用时的F1\-score 32\.7%。结论适用边界受限于标注指南差异与转写瓶颈的信息损失，在方言地理定位等任务上仍会出现模式坍缩与偏置。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/changelinglab/prism> — 链接可访问（HTTP 200）
- 模型相关资源：<https://huggingface.co/microsoft/wavlm-base> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/openai/whisper-small> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/anyspeech> — 暂时无法访问
- 第三方资源：<https://github.com/vllm-project/vllm> — 链接可访问（HTTP 200）
- 第三方资源：<https://vaani.iisc.ac.in/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 27. [像演员一样听指令说话：冻结编码器做可控全双工对话](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-242-8582ee5b2e/)

> 英文题目：*[F\-Actor: Controllable Conversational Behavior in Full\-Duplex Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-242-8582ee5b2e/)*

标签：#指令微调 #大语言模型 #语音 #全双工语音交互 #轮次切换

评分：**7.9/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前25% | 文档类型：模型报告 | 主任务：#全双工语音交互 | 主方法：#指令微调

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.242/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.242.pdf)

👥 **作者与机构**

- Maike Züfle：机构信息未能从会议 PDF 纯文本可靠映射
- Ondrej Klejch：机构信息未能从会议 PDF 纯文本可靠映射
- Nicholas Sanders：机构信息未能从会议 PDF 纯文本可靠映射
- Jan Niehues：机构信息未能从会议 PDF 纯文本可靠映射
- Alexandra Birch：机构信息未能从会议 PDF 纯文本可靠映射
- Tsz Kin Lam：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理全双工口语对话，输入为用户与系统双路音频流及文本指令与说话人身份，输出为系统侧语音及其对应文本，难点在于边听边说时需实时处理重叠、主动发起、反向通道与打断并按指令计数控制。首先冻结NanoCodec编码器将双路音频量化为离散声学单元并求和接入主干，保留双流时序对齐。然后将说话人嵌入与叙事加行为计数指令拼接为前缀，送入Llama3\.2\-1B主干联合建模用户与系统双流，为预测提供指令约束。接着以并行线性头同时预测双流码本且推理仅采样系统流合成波形，词级对齐文本流附加音频延迟使文本先行规划语音。在Behavior\-SD测试集双实例自对话评测设置下，最佳配置的Narrative分数为2\.78，高于Lower Baseline的1\.26。与既有仅被动应对用户重叠的方法不同，该模型显式建模系统侧主动反向通道与打断并可计数控制，具有可复现的指令跟随意义。适用边界为英语合成对话、低打断密度与分块离线推理，尚未验证真实噪声、多语言与流式编码，训练成本为4卡A100硬件上约46至48小时。

🔗 **开源资源**

- 代码相关资源：<https://github.com/MaikeZuefle/f-actor> — 链接可访问（HTTP 200）
- 模型相关资源：<https://github.com/MaikeZuefle/f-actor> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/google/gemma-1> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 28. [以文本为桥、语音分块交错生成：CSLM 的小数据跨语言语音建模](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-642-59dd2aa515/)

> 英文题目：*[Efficient Training for Cross\-lingual Speech Language Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-642-59dd2aa515/)*

标签：#指令微调 #跨语言 #语音 #语音对话系统

评分：**7.9/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：模型报告 | 主任务：#语音对话系统 | 主方法：#指令微调

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.642/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.642.pdf)

👥 **作者与机构**

- Yan Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Qingkai Fang：机构信息未能从会议 PDF 纯文本可靠映射
- Yun Hong：机构信息未能从会议 PDF 纯文本可靠映射
- Yang Feng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

跨语言语音语言模型以中英文语音指令为输入，需直接输出目标语言语音答复，难点在于语音序列远长于文本且跨语言语音并行数据稀缺，联合建模易退化文本能力。方法链分三步衔接：先以CosyVoice\-300M\-25Hz离散语音词元扩展Llama\-3\.1\-8B\-Instruct词表实现统一建模，其输出词表进入下一步持续预训练。接着用中英ASR与TTS并行数据做跨模态对齐，并以中英MT数据经文本桥接跨语言并辅以单语指令回放，其产出的CSLM\-base进入指令微调。最后以块尺寸为7的块级语音文本交错思维链做监督微调，先产出短文本块再即时产出对应语音块并循环推进。与先产出完整文本再产出完整语音的全链相比，该交错机制保持细粒度对齐并允许播放与生成时间重叠，具有低延迟实际意义。在En→Zh语音对话任务下，CSLM的语音GPT得分为2\.95，高于full CoM基线的2\.92。该结论适用边界受限于中英双语朗读式合成指令及自动转写评分，尚未验证自发对话噪声场景与更多语言外推。交错生成通过播放与生成重叠降低了延迟，原文以延迟与加速比量化了该推理开销差异。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ictnlp/CSLM> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/tatsu-lab/alpaca_eval> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/deepspeedai/DeepSpeed> — 链接可访问（HTTP 200）
- 第三方资源：<https://keithito.com/LJ-Speech-Dataset/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.data-baker.com/open_source.html> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/saffsd/langid.py> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 29. [听不清还硬答：HalluAudio 如何系统诱发并度量音频大模型的幻觉](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1797-d8120346b5/)

> 英文题目：*[HalluAudio: A Comprehensive Benchmark for Hallucination Detection in Large Audio\-Language Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1797-d8120346b5/)*

标签：#基准设计 #环境声 #音乐 #语音 #音频问答

评分：**7.8/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1797/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1797.pdf)

👥 **作者与机构**

- Feiyu Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Yiming Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Wenhuan Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Daipeng Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xianghu Yue：机构信息未能从会议 PDF 纯文本可靠映射
- Jianguo Wei：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

大音频语言模型需对语音、环境声与音乐片段回答二元判断、计数、多标签与开放式问题，难点在于流畅回答常缺乏声学支撑，且时序比较、缺席证据推理与偏差拒答难以用单一准确率诊断。HalluAudio先从Common Voice、FSD50K与音乐语料筛选音频并对齐标注，输出干净可控的候选片段进入任务构造。接着以参数化模板按域实例化时序比较、感知识别与一致性任务，并施加混合音频与缺席证据无效查询做对比对抗增强，形成受控正负样本对。随后经自动过滤与多轮人工核验打包为5720对平衡问答，再走统一零样本推理，经输出归一、有效性校验与行为分析得到准确率、肯定偏置与拒答诊断。与仅约1K二分类的AHa\-Bench不同，该设计以受控对比与扰动一致性分离能力错误与幻觉，并实现二元、计数与开放式多格式及偏差拒答多维诊断。在HalluAudio声音基准下，Qwen2\.5\-Omni在响度比较任务上的准确率为92\.77%，高于其在共存判断任务上的61\.68%。该结论适用边界受限于英语短片段模板问答，尚未验证长音频、多轮对话与多语言外推，且开放式问答占比较小。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Feiyuzhao25/halluaudio> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 30. [把打断听成自言自语：语音助手为何分不清谁在说话](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1902-a27d913cc4/)

> 英文题目：*[Still Between Us? Evaluating and Improving Voice Assistant Robustness to Third\-Party Interruptions](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1902-a27d913cc4/)*

标签：#基准测试 #数据集 #数据集构建 #鲁棒性 #语音对话系统

评分：**7.8/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#语音对话系统 | 主方法：#数据集构建

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1902/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1902.pdf)

👥 **作者与机构**

- Dongwook Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Eunwoo Song：机构信息未能从会议 PDF 纯文本可靠映射
- Che Hyun Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Heeseung Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Sungroh Yoon：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文针对语音助手遭遇第三方打断时易将双人流误判为单人自我修正的输入输出问题，输入为含主请求与插入句的重叠连续音频，输出为按预定策略回应或忽略的文本回复。 方法首先基于7类打断分类扩展出26种三元场景并用大语言模型生成打断文本，为后续策略绑定提供语义输入。 接着将打断划分为可行动与可忽略两类并绑定不同参考回复策略，将上步文本映射为策略标签与目标回复。 然后用监督微调在TPI\-Train上训练口语语言模型，并将文本合成为双说话人重叠音频，配对构造转录相同但声学不同的单人与双人硬负例以强制依赖音色切换线索。 与仅靠文本语义连贯性判断的基线不同，该机制用说话人感知的硬负例阻断语义捷径，使模型优先利用声学变化做说话人区分与策略选择。 在TPI\-Test基准下，TPI\-Full的RSF指标为0\.83，高于Qwen2\.5\-Omni\-7B的0\.24。 该结论适用边界受限于回合制语音到文本问答与作者定义的参考策略，尚未验证全双工打断时机与多样用户偏好下的外推能力，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://tpi-va.github.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://chat.openai.com/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 31. [高唤醒一用力就含糊：用矫正起点与动态引导拉住情感轨迹](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-998-1b9a5c9a36/)

> 英文题目：*[Rectifying the Emotional Flow: Aligning Priors and Dynamic Guidance for High\-Arousal Text\-to\-Speech](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-998-1b9a5c9a36/)*

标签：#流匹配 #测试时自适应 #语音 #文本到语音

评分：**7.8/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#文本到语音 | 主方法：#测试时自适应

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.998/) · [官方 PDF](https://aclanthology.org/2026.acl-long.998.pdf)

👥 **作者与机构**

- Fangming Feng：机构信息未能从会议 PDF 纯文本可靠映射
- Dongjie Fu：机构信息未能从会议 PDF 纯文本可靠映射
- Zequn Xie：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yangyang Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhou Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Tao Jin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

高唤醒文本到语音以文本与情感参考为输入合成愤怒惊叫等强情感语音，难点在于标准各向同性高斯初值偏向中性韵律而均匀无分类器引导又易扭曲声学流形导致语言崩溃。该框架为无需重训练的推理期双阶段整流，先由情感校正噪声先验以高引导尺度做前瞻伪欧拉推进再以基准尺度回退，等价注入强度正比于尺度差的情感语义梯度并将初值推入目标情感吸引盆。前一步输出的情感化初值进入似然逆引导调控的流匹配去噪过程，该步骤把学习条件分布建模为中性分布与理想情感分布的加性混合并反解纯净向量场。由此导出随似然比变化的动态尺度，仅在漂向中性时增强干预并以截断上限防止发散，从而在保持声学稳定下维持高强度表达。与恒定引导直接放大特征差不同，该方法从混合假设中解耦中性干扰并按几何发散自适应调度，实际意义在于平滑轨迹减少离散误差与声学抖动。在HIED评测下，F5\-TTS结合该方法的WER为2\.53%，低于基线F5\-TTS的4\.41%。该结论适用边界限于迭代式扩散与流匹配解码器，原文明确声明不适用于离散自回归与单步前馈架构，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/MM-Speech/emo-tts> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 32. [深度冗余时做减法：用浅层对齐让伪造语音检测走得更远](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-318-9e0750a61e/)

> 英文题目：*[When depth is redundant: Efficient transformer\-based speech anti\-spoofing](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-318-9e0750a61e/)*

标签：#正则化 #Transformer #高效推理 #鲁棒性 #语音伪造检测

评分：**7.8/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音伪造检测 | 主方法：#Transformer

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.318/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.318.pdf)

👥 **作者与机构**

- Hoan My Tran：机构信息未能从会议 PDF 纯文本可靠映射
- Damien Lolive：机构信息未能从会议 PDF 纯文本可靠映射
- Aghilas Sini：机构信息未能从会议 PDF 纯文本可靠映射
- Arnaud Delhay：机构信息未能从会议 PDF 纯文本可靠映射
- Pierre\-Francois Marteau：机构信息未能从会议 PDF 纯文本可靠映射
- David Guennec：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音伪造检测以原始波形为输入，输出真实或伪造的二分类判决，难点在于训练域合成方式与测试域编解码、信道、语言及生成器显著漂移导致泛化困难。该方法首先复用预训练XLS\-R编码器提取语音表征，并经线性投影降维压缩特征，其输出直接作为后续分类栈的输入。然后将降维特征送入仅含一至两个块的浅层变换器堆叠建模伪造痕迹，再经全局池化汇聚话语级信息并由线性头输出对数似然比完成判决。训练时在加权交叉熵之外引入角度距离正则项，迫使浅层与中间层话语表征向末层任务特化表征几何对齐，从而提升跨层一致性。与单纯堆叠深度增强判别力的做法不同，该机制利用浅层已存在的冗余信息实现对齐而非增加参数，具有实际效率意义。在In\-the\-Wild评测设置下，对齐浅层Transformer⟨T1⟩的等错误率为3\.36%，低于Mamba基线的5\.70%。该结论在重度对抗伪造与未来未知生成器上的外推尚未验证，非英语与部分扩散生成子集误差仍高，适用边界受限。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/facebook/wav2vec2-xls-r-300m> — 暂时无法访问
- 数据相关资源：<https://doi.org/10.7488/ds/2555> → <https://datashare.ed.ac.uk/items/31074a11-b6f6-4e92-a4ad-07093f8c0c45> — 链接可访问（HTTP 200）
- 数据相关资源：<https://doi.org/10.5281/zenodo.4817650> → <https://zenodo.org/records/4837263> — 链接可访问（HTTP 200）
- 数据相关资源：<https://doi.org/10.5281/zenodo.4835107> → <https://zenodo.org/records/4835108> — 链接可访问（HTTP 200）
- 数据相关资源：<https://huggingface.co/datasets/jungjee/spoofceleb> — 暂时无法访问
- 数据相关资源：<https://deepfake-total.com/in_the_wild> — 链接可访问（HTTP 200）
- 数据相关资源：<https://bil.eecs.yorku.ca/datasets> → <https://bil.eecs.yorku.ca/datasets/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://deepfake-total.com/mlaad> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/YMLLG/SpeechFake> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/isjwdu/DFADD> — 链接可访问（HTTP 200）
- 数据相关资源：<https://keithito.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/TakHemlata/RawBoost-antispoofing> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 33. [先听清再推理：用分层解耦把音频感知钉牢的混合推理](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1776-bddab7844d/)

> 英文题目：*[Listen, Pause, and Reason: Toward Perception\-Grounded Hybrid Reasoning for Audio Understanding](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1776-bddab7844d/)*

标签：#数据集 #强化学习 #环境声 #语音 #音频问答

评分：**7.7/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#强化学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1776/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1776.pdf)

👥 **作者与机构**

- Jieyi Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yazhe Niu：机构信息未能从会议 PDF 纯文本可靠映射
- Dexuan Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhongyu Wei：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务以含背景音乐与环境噪声的多说话人音频和文本问题为输入，输出依赖声学证据的多选题答案，难点在于语音与环境混叠、说话人归属错误以及文本捷径导致的幻觉推理。方法链分为三环：先构建感知问答数据集感知问答（Perception\-Aware Question Answering，PAQA），用语音与环境分离和说话人与说话人区分生成含环境标签与说话人引用的结构化思维链；再以监督微调教会Qwen2\-Audio\-7B\-Instruct输出规划加字幕加推理加总结加反思的显式轨迹；最后用分组相对策略优化（Group Relative Policy Optimization，GRPO）优化暂停令牌触发的隐式计算，并以准确率加感知一致性加格式加长度门控的多目标奖励对齐推理与音频。与直接映射音频到文本的链式思考相比，关键差异是将可验证声学属性作为推理前置约束，并用最低组置信度（Lowest Group Confidence，LGC）在模糊区间分配额外隐态计算。在MMAU\-Test全集上HyPeR平均准确率达到67\.15%，相对同基座48\.65%提升约18\.50个百分点，在MMAR上达到55\.50%，相对基座30\.00%提升约25\.50个百分点。该结论限于短时混合问答与受控混音条件，7说话人以上与强噪声下增益衰减，跨域泛化尚未验证。暂停机制增加训练与推理延迟，中止剪枝仅部分缓解，原文未披露训练硬件与时长。

🔗 **开源资源**

- 代码相关资源：<https://github.com/JOY-SWang/HyPeR> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/JOY-SWang/HyPeR> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 34. [反转轨迹并非处处关键：用曲率与信息增益决定何时跳过神经网络计算](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-820-dca934ce95/)

> 英文题目：*[Bypassing Neural Evaluations for Fast Audio Editing via Adaptive Trajectory Extrapolation](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-820-dca934ce95/)*

标签：#扩散模型 #高效推理 #环境声 #音乐 #音频生成

评分：**7.7/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.820/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.820.pdf)

👥 **作者与机构**

- Xiaoqian Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengkun Ge：机构信息未能从会议 PDF 纯文本可靠映射
- Jianjin Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Haoran Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuan Ge：机构信息未能从会议 PDF 纯文本可靠映射
- Kaiyan Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Chen Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Tong Xiao：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengtao Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Linfeng Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- JingBo Zhu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频反演编辑需将源音频经确定性概率流ODE映射到噪声潜空间再按目标提示重渲染，保持结构往往依赖稠密定步长采样，导致函数求值次数与延迟居高不下。AdaTE先以探测步并行计算方向曲率、曲率加速度与信息增益，估计局部稳定性并输出突变水平。接着以双阈值对信息容限与结构突变做判定，若超过任一界限则触发神经求值以保留关键语义跃迁。若判定为稳定区间则进入线性旁路，按信息增益反比分配跳过预算并用最近两次骨干输出线性外推推进潜状态，将算力集中于高曲率区。与仅提高单步精度的高阶求解器不同，AdaTE按信息密度重分配计算预算，在平滑尾部走线性旁路而不均匀加密。在AudioSet增加任务评测下，AdaTE的FAD为3\.104，低于50步DDIM反演的3\.385。该结论适用边界受限于AudioLDM2、Auffusion、Tango2三种潜扩散骨干的增加、删除、替换编辑及BabySlakh音乐验证，尚未验证语音等其他任务与大规模流式部署稳定性，硬件实测将AudioLDM2延迟从1\.167降至0\.324。

🔗 **开源资源**

- 数据相关资源：<https://research.google.com/audioset/download_strong.html> — 链接可访问（HTTP 200）
- 数据相关资源：<https://zenodo.org/records/4603870> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/haoheliu/audioldm_eval> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 35. [只看说话前一秒会误判：用整段对话和视频教会模型的附和时机](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-171-da902b92cb/)

> 英文题目：*[Open Your Model’s Eyes: Video and Context\-Aware Multimodal Backchannel Prediction](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-171-da902b92cb/)*

标签：#多模态学习 #跨语言 #音视频 #语音 #轮次切换

评分：**7.6/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#轮次切换 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.171/) · [官方 PDF](https://aclanthology.org/2026.acl-long.171.pdf)

👥 **作者与机构**

- Min\-Jae Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Jun\-Yeong Moon：机构信息未能从会议 PDF 纯文本可靠映射
- Mujeen Sung：机构信息未能从会议 PDF 纯文本可靠映射
- Gyeong\-Moon Park：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理多方对话中的反向通道预测，输入为反向通道起始点后1500ms音频与12帧视频及5词文本，输出为NoBC、Continuer、Understanding与Empathy四分类，其难点在于反向通道事件稀疏且主观性强，模型易过拟合于紧邻触发线索而忽视长程会话流。首先在完整对话构造的无标注上下文窗口上仅优化对齐损失进行上下文对齐预训练，学习通用会话动态并为微调提供初始化。然后在标注反向通道窗口上联合优化分类交叉熵与加权多层多模态对齐损失，实现反应精化与上下文保持的联合微调。其核心多层多模态对齐在编码器高层以跨层共享权重的交叉注意力实现稠密模态辅助稀疏模态，显式规定音频大于文本大于视频的信息层级与查询键值流向，避免层特定变换与表示空间损坏。在KC\-Dialog语料任务下，CAMA\-BC的Macro F1分数为58\.53，高于BPM\-V的53\.77。与简单拼接视觉特征的基线相比，该层级化选择性增强能更充分利用非言语反应线索并缓解上下文与反应失衡，跨韩英数据的提升表明其捕捉到通用会话动态。该结论的适用边界在于咨询式固定机位与短窗口条件，在交互类型变化与长程依赖上尚未验证，且经验层级可能受限。单样本端到端推理开销为20\.083 ms，训练成本需4张NVIDIA RTX 3090硬件，视频引入增加了延迟但仍可满足实时应用。

🔗 **开源资源**

- 数据相关资源：<https://github.com/etri/etri-miai> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/SKTBrain/KoBERT> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 36. [合成语音的情感为何听得清却认不准：语音情感识别的合成域失效](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-372-3d81ce3423/)

> 英文题目：*[On the Emotion Understanding of Synthesized Speech](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-372-3d81ce3423/)*

标签：#评测协议 #鲁棒性 #语音 #语音情感识别 #语音合成

评分：**7.6/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.2/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前25% | 文档类型：应用研究 | 主任务：#语音情感识别 | 主方法：#评测协议

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.372/) · [官方 PDF](https://aclanthology.org/2026.acl-long.372.pdf)

👥 **作者与机构**

- Yuan Ge：机构信息未能从会议 PDF 纯文本可靠映射
- Haishu Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- AoKai Hao：机构信息未能从会议 PDF 纯文本可靠映射
- Junxiang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Bei Li：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoqian Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Chenglong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jianjin Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Bingsen Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Bingyu Liu：机构信息未能从会议 PDF 纯文本可靠映射
- JingBo Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengtao Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Tong Xiao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作研究语音情感识别从人类录音向合成语音迁移的理解失效，输入为人类与合成语音波形，输出为离散情感标签，难点在于人工确认情感清晰的合成样本仍被模型系统性误判。首先用判别式Emotion2vec与生成式语音大模型在多数据集与多合成器上对照人类与合成语音的识别表现，输出人机差距作为待解释现象。接着用相同文本重合成与人机互训隔离文本分布与声学分布影响，将转录文本合成的新测试集结果回送以检验分布假设。最后对合成三阶段与表征空间做消融以定位偏差来源，把词元生成、流匹配与声码器误差逐级分离。与把SER当作即插即用评估器或奖励模型不同，本文将其视为待检验对象，揭示其依赖非鲁棒捷径及SLM依赖文本语义而忽视副语言线索。在TESS评测任务下，Emotion2vec在合成语音上的准确率为15\.31，低于其在人类语音上的99\.64。结论适用边界受限于当前基于神经编解码词元的合成范式与分类式情感评测，尚未验证连续情感维度与大规模合成预训练能否弥合差距。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/965002973/Synthesis_SER> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 37. [长音频查不完：先规划模态与时间，再用结构化查询取小证据](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1304-9b1e73be1c/)

> 英文题目：*[PlanRAG\-Audio: Planning and Retrieval Augmented Generation for Long\-form Audio Understanding](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1304-9b1e73be1c/)*

标签：#检索增强 #长音频处理 #零样本 #音频问答

评分：**7.6/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.4/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#检索增强

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1304/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1304.pdf)

👥 **作者与机构**

- Masao Someki：机构信息未能从会议 PDF 纯文本可靠映射
- Chien\-yu Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Siddhant Arora：机构信息未能从会议 PDF 纯文本可靠映射
- Samuele Cornell：机构信息未能从会议 PDF 纯文本可靠映射
- Markus Müller：机构信息未能从会议 PDF 纯文本可靠映射
- Nathan Susanj：机构信息未能从会议 PDF 纯文本可靠映射
- Rupak Vignesh Swaminathan：机构信息未能从会议 PDF 纯文本可靠映射
- Grant Strimel：机构信息未能从会议 PDF 纯文本可靠映射
- Jing Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Shinji Watanabe：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

长音频理解输入为长达数小时的录音与跨模态查询，输出为问答、日志、摘要、情感或事件定位等结构化答案，难点在于语音token远超文本且语义依赖说话人、韵律与声事件的长程跨模态交互。PlanRAG\-Audio先用说话人分离标注、语音识别、情感识别与声音事件检测把原始音频转成时间对齐的结构化数据库，为后续检索提供可查询的证据。规划大语言模型再根据查询输出含数据流选择、过滤条件、融合锚点与返回字段的检索计划，上一步的结构化字段直接作为计划的候选操作对象。基于规则的生成器把检索计划编译为可执行的联合结构化查询语言查询并只取回相关片段，最后由生成模型按指定模式作答。与直接喂全量音频或纯转写管线不同，该框架把推理与感知解耦并显式保留时间戳，使大语言模型输入不再随录音时长膨胀。在说话人计数任务评测下，Gemini的准确率为14\.20%，应用PlanRAG\-Audio后从14\.20%升至69\.40%。该结论适用边界受限于预训练感知模块精度与拼接式长音频构造，尚未在真实连续多小时会议或广播上验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 38. [一句话偏好要管住多维度对话：多奖励 RLAIF 如何同时对齐语义与声音](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2040-c1a08d6551/)

> 英文题目：*[Optimizing Conversational Quality in Spoken Dialogue Systems with Reinforcement Learning from AI Feedback](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2040-c1a08d6551/)*

标签：#偏好优化 #全双工语音交互 #语音对话系统 #语音质量评估

评分：**7.6/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音对话系统 | 主方法：#偏好优化

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.2040/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.2040.pdf)

👥 **作者与机构**

- Siddhant Arora：机构信息未能从会议 PDF 纯文本可靠映射
- Jinchuan Tian：机构信息未能从会议 PDF 纯文本可靠映射
- Jiatong Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Hayato Futami：机构信息未能从会议 PDF 纯文本可靠映射
- Yosuke Kashiwagi：机构信息未能从会议 PDF 纯文本可靠映射
- Emiru Tsunoo：机构信息未能从会议 PDF 纯文本可靠映射
- Shinji Watanabe：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

口语对话系统需由用户语音直接生成语义连贯、音质自然且情感一致的语音回复，难点在于质量是语义、音质、可懂度与情感的多维多模态问题，而双工模型必须基于不完整分块增量决策。该框架先在真实Switchboard对话上下文中用多轮思维链模型每轮采样文本候选并合成为多语音实现以构造候选池。接着用Qwen2\.5大模型评价器结合AutoBLEU、UTMOS、Whisper词错率与Emo2vec分别为语义、音质、可懂度与情感构建独立偏好对。最后将整句级偏好按分块对数概率求和代入同一DPO目标做数据集级联合训练，使每分块都优化完整回复偏好。与以往单语义奖励工作不同，文本偏好只优化文本策略而声学与情感偏好固定文本只比较语音实现，从而隔离语义漂移并适配块式解码。在Switchboard语料的音频质量评测设置下，单奖励RLAIF训练的UTMOS为3\.06，高于多轮CoT基线的2\.16。该结论适用边界受限于英语Switchboard电话对话与自动评价器构建的偏好，联合引入情感一致性时出现可懂度权衡且偶发过度安全回复。硬件上使用4块NVIDIA H200训练，推理开销方面双工系统实时因子为0\.56且中位延迟为540毫秒，满足实时交互要求。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 39. [先建模情感再编码语音：ES4R 把多轮共情对话拆成理解、生成与合成三段](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1708-5443bdb83c/)

> 英文题目：*[ES4R: Speech Encoding Based on Prepositive Affective Modeling for Empathetic Response Generation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1708-5443bdb83c/)*

标签：#注意力机制 #大语言模型 #语音 #语音对话系统 #语音合成

评分：**7.5/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音对话系统 | 主方法：#注意力机制

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1708/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1708.pdf)

👥 **作者与机构**

- Zhuoyue Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaohui Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaocui Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Wen Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Daling Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Shi Feng：机构信息未能从会议 PDF 纯文本可靠映射
- Yifei Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

共情回复生成（Empathetic Response Generation，ERG）需从多轮语音对话历史同时恢复语义与韵律情感，并生成文本与语音共情回复，难点在于级联转写丢失副语言信息，而通用编码器早压缩加编码后浅拼接又弱化情感。ES4R（Empathetic Speech for Response）先对每轮声谱下采样后做轮内多头自注意力（Intra\-Turn Attention）以凸显情感片段并按时序拼接为对话序列，再经轮间多头自注意力（Inter\-Turn Attention）建模情感动态后送入冻结的 Whisper\-large\-v3 编码器与卷积适配器，得到语音侧表示，随后以语音为查询对文本历史做跨模态注意力融合，驱动 Qwen3\-8B 生成回复。合成侧仅用能量轨迹选择振奋安抚中性策略并逆能量加权融合风格向量，经 StyleTTS2 输出语音。与已有级联与隐式编码方案不同，该框架把结构化情感上下文显式置于编码之前而非依赖编码器隐式学习。在 AvaMERG 测试集上 ES4R（Qwen）的 BLEU\-4 为 0\.0758，超过最强基线 Qwen2\.5\-Omni 的 0\.0683。该结论限于单数据集有参微调与离线非流式设置，跨域与实时交互尚未验证。原文未披露训练推理部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Bean0901/ES4R> — 链接可访问（HTTP 200）
- 模型相关资源：<https://huggingface.co/Qwen/Qwen3-8B> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/meta-llama/Llama-3> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 40. [从打分到讲理：用多任务标注与两阶段训练让语音大模型当评测者](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-349-11be62587e/)

> 英文题目：*[SpeechLLM\-as\-Judges: Towards General and Interpretable Speech Quality Evaluation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-349-11be62587e/)*

标签：#数据集 #强化学习 #多语言 #语音质量评估 #语音伪造检测

评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.9/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.5/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#语音质量评估 | 主方法：#强化学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.349/) · [官方 PDF](https://aclanthology.org/2026.acl-long.349.pdf)

👥 **作者与机构**

- Hui Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jinghua Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Yifan Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Shujie Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Junyang Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yanzhe Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shiwan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Jinyu Li：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaming Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Haoqin Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Yan Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Yong Qin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理合成语音感知质量评估，输入为单段或成对多语言语音，输出为结构化解释性评价、改进建议与真伪判定，难点在于标量分缺乏归因且跨任务跨语言泛化弱。方法第一步构建SpeechEval数据集，经八维结构化问卷与人机协同流程产生多源真伪语音与细粒度标注，为监督提供多样化描述与维度标签。第二步以语音大模型统一四任务指令格式并做维度级思维链指令微调，使中间维度评分显式引导最终文本生成。第三步以冻结大模型为多维奖励器经组相对策略优化对齐有用性与准确性，其优化后输出直接作为最终可解释评价。与平均意见分回归和直接评测语音大模型相比，关键差异在于显式维度推理加自动多维奖励优化，因而兼顾可解释性与多任务通用性。在SpeechEval深伪检测评测任务下，SQ\-LLM的EER错误率为6\.249，低于微调基线FT Qwen2\-Audio\-7B的8\.593。其结论适用边界受限于中英日法四语与设定四任务，低资源与代码切换等外延尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://ai.aliyun.com/nls/tts> — 链接可访问（HTTP 200）
- 第三方资源：<https://console.volcengine.com/> → <https://console.volcengine.com/home> — 链接可访问（HTTP 200）
- 第三方资源：<https://speech.microsoft.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/asvspoof-challenge/asvspoof5> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 41. [多而不杂才有用：用来源与生成器多样性重组语音伪造检测训练数据](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-796-69ea97104b/)

> 英文题目：*[A Data\-Centric Approach to Generalizable Speech Deepfake Detection](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-796-69ea97104b/)*

标签：#数据集构建 #鲁棒性 #语音 #语音伪造检测

评分：**7.5/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音伪造检测 | 主方法：#数据集构建

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.796/) · [官方 PDF](https://aclanthology.org/2026.acl-long.796.pdf)

👥 **作者与机构**

- Wen Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuchen Mao：机构信息未能从会议 PDF 纯文本可靠映射
- Yanmin Qian：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音深度伪造检测的输入为待测语音波形，输出为真伪二分类分数，难点在于未知伪造方法与声学条件偏移下泛化急剧下降，单数据集训练易过拟合数据集偏置而在域外测试中失效。该工作先以受控合成数据开展大规模实证研究，拟合源多样性与生成器多样性同泛化误差的幂律关系，明确多样性优先于数据量的缩放规律。接着将异构数据池按细粒度域索引为真实源域与伪造源加生成器域，为均衡混合提供可操作单元，其输出的域划分直接进入采样策略。然后以饱和截断与温度加权实现均匀采样，其中剪枝版本按截断上限限制每伪造域样本量并配比真实样本，加权版本保留全池并调整各域训练时采样概率，其输出的均衡数据分布进入后端训练。最后以加权随机采样训练XLS\-R后端分类器，经时序平均池化与多层感知机头微调实现真伪判别。与在固定验证集上优化混合权重的自动混数方法不同，该策略以最大熵均匀先验直接追求未知攻击鲁棒性而无需代理模型，避免大域主导造成的负迁移。在8个公开测试集下，DOSS训练的XLS\-R\-300M模型的平均EER为2\.14%，低于XLS\-R\-2B基线的3\.94%。该结论适用边界限于英汉为主语料与300M至1B规模自监督后端，对其他语言与更大算力预算的外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/myshell-ai/MeloTTS> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/2noise/ChatTTS> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/resemble-ai/chatterbox> — 链接可访问（HTTP 200）
- 第三方资源：<https://learn.microsoft.com/azure/ai-services/speech-service> → <https://learn.microsoft.com/en-us/azure/ai-services/speech-service/> — 链接可访问（HTTP 200）
- 第三方资源：<https://platform.openai.com/docs/guides/text-to-speech> → <https://developers.openai.com/api/docs/guides/text-to-speech> — 链接可访问（HTTP 200）
- 第三方资源：<https://elevenlabs.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://ai.aliyun.com/nls/tts> — 链接可访问（HTTP 200）
- 第三方资源：<https://ai.baidu.com/tech/speech/tts> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.xfyun.cn/services/online_tts> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.minimaxi.com/> → <https://www.minimax.cn/> — 链接可访问（HTTP 200）
- 第三方资源：<https://help.aliyun.com/zh/model-studio/qwen-tts> → <https://help.aliyun.com/zh/model-studio/non-realtime-tts-user-guide> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 42. [用合成数据与对话式分段建模换取可复现的长歌曲生成](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1129-45faca2e93/)

> 英文题目：*[Muse: Towards Reproducible Long\-Form Song Generation with Fine\-Grained Style Control](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1129-45faca2e93/)*

标签：#数据集 #SFT #长音频处理 #音乐 #音乐生成

评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#SFT

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1129/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1129.pdf)

👥 **作者与机构**

- Changhao Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiahao Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenghao Xiang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhixiong Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Hanchen Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiabao Zhuang：机构信息未能从会议 PDF 纯文本可靠映射
- Xinmeng Che：机构信息未能从会议 PDF 纯文本可靠映射
- Jiajun Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Hui Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yifei Cao：机构信息未能从会议 PDF 纯文本可靠映射
- Shihan Dou：机构信息未能从会议 PDF 纯文本可靠映射
- Ming Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Junjie Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Tao Ji：机构信息未能从会议 PDF 纯文本可靠映射
- Tao Gui：机构信息未能从会议 PDF 纯文本可靠映射
- Qi Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xuanjing Huang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

长歌曲生成需以全局风格标签与结构化分段歌词为输入，输出数分钟人声与伴奏混合的完整单轨音频，难点在于长时时间连贯、歌词与人声对齐以及跨越前奏主歌副歌等段落的风格一致。作者先用GPT\-5 mini生成全局风格标签与按标准曲式划分的完整歌词，再将该提示送入SunoV5合成完整歌曲并保留时间对齐歌词，从而得到中英文共116489首全长合成数据。随后文本经标准Qwen分词器编码、波形经MuCodec离散为音频令牌，统一送入基于Qwen的自回归语言模型做无额外损失的单阶段监督微调。推理时采用多轮对话式分段提示，每轮输入段级风格描述与对应歌词并生成连续音频段，以轮次分隔与起止标记隐式监督边界而无需额外过渡模块。与仅支持全局风格提示的开源基线相比，关键差异在于显式段级风格描述与多轮结构化监督降低了长程建模难度，因而能兼顾全局一致与段级可控并提升音乐质量。在单轮训练对比评测下，合成歌曲训练模型的Mulan\-T指标为0\.37，高于真实歌曲训练模型的Mulan\-T指标为0\.21。该结论适用边界受限于合成数据分布，极长作曲易累积旋律节奏误差且自动指标对主观创造性尚未验证。训练成本为在8张NVIDIA H200 GPU硬件上每轮约150分钟、共训练7轮并以验证损失选择终版检查点。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 43. [极低码率下保住语义再重建波形：FlowTokenizer 的分层对齐与单层稠密量化](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1622-ccac05b630/)

> 英文题目：*[Hierarchical Representation Alignment Learning of Diffusion Transformers for Neural Audio Codec](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1622-ccac05b630/)*

标签：#流匹配 #生成对抗网络 #向量量化 #语音 #音频编码

评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.2/1.5 | 开源 0.2/1.5 | 可复现 0.5/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频编码 | 主方法：#流匹配

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1622/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1622.pdf)

👥 **作者与机构**

- Sang\-Hoon Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Ha\-Yeong Choi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

低比特率神经音频编解码任务输入为24 kHz原始波形，输出为25 token/秒单层离散表示并重建波形，难点是在极高压缩下同时保持语义可懂度与高频声学细节。FlowTokenizer先以因果Transformer编码器提取声学表示，并在量化前拼接大规模多语言wav2vec 2\.0语义教师特征，使单层表示同时携带声学与语义信息。接着以密集向量量化将融合表示压缩为25 Hz单层离散码，其输出直接作为解码侧条件，避免额外上采样层的信息损耗。然后解码侧以6层因果语义解码器预测连续语义特征并与隐表示拼接，再送入6层声学DiT与12层矢量场估计主干做条件流匹配生成，在50 Hz分辨率执行常微分方程采样。与已有方法不同，该流程以分层表示对齐学习自上而下约束解码器，语义解码器执行语义表示对齐，声学DiT执行多分辨率Mel声学对齐，实现语义与声学解耦对齐。预训练后以固定4步欧拉采样做对抗微调，并在推理时支持3秒外部提示或自生成历史提示的流式生成。在LibriSpeech test\-clean评测设置下，FlowTokenizer w/ 3s Prompt的WER为2\.91，低于Mimi的WER 8\.35。该结论适用边界限于LibriTTS英文朗读语音训练与重建评测，尚未验证音乐、噪声与多语言泛化，且说话人相似度仍偏低构成失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://flowtokenizer.github.io/demo> → <https://flowtokenizer.github.io/demo/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/ZhangXInFD/SpeechTokenizer> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/Aria-K-Alethia/BigCodec> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/zhenye234/X-Codec-2.0> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/Stability-AI/stable-codec> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/facebookresearch/encodec> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/kyutai-labs/moshi> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/jishengpeng/WavTokenizer> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/csteinmetz1/auraloss> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/ludlows/PESQ> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/descriptinc/cargan> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 44. [把质检口语变成可执行依赖图：语音数据质量的多智能体 overnight 流水线](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2062-20999dce64/)

> 英文题目：*[Rolling Out Data Quality Overnight, without losing the plot: A Multi\-Agent System for Speech Data Quality Management](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2062-20999dce64/)*

标签：#基准测试 #数据清洗 #多语言 #语言识别 #语音质量评估

评分：**7.5/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.6/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.2/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：系统技术报告 | 主任务：#语音质量评估 | 主方法：#数据清洗

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.2062/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.2062.pdf)

👥 **作者与机构**

- Rishabh Kumar：机构信息未能从会议 PDF 纯文本可靠映射
- Abhinav Painuli：机构信息未能从会议 PDF 纯文本可靠映射
- Chriss Philip Saji：机构信息未能从会议 PDF 纯文本可靠映射
- Devesh Soni：机构信息未能从会议 PDF 纯文本可靠映射
- Amrith Krishna：机构信息未能从会议 PDF 纯文本可靠映射
- Ganesh Ramakrishnan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音数据质量管理的输入是异构供应商提供的音频、转录文本与元数据，输出是可审计的质量报告与清洗决策，难点在于供应商格式多变、低资源语言专家稀缺且转录语义判断难以规则化。先由中央规划器解析自然语言需求为原子检查清单并经提示检查器补齐隐含依赖，其输出编译为可执行有向无环图以显式固定转录先于领域分类等前置顺序。再由该有向无环图按拓扑序调度QC1音频元数据与QC2转录内容两组共24项检查，预定义工具与动态合成工具并行执行并经共享状态字典向后传递转录结果。最后由监控机制重试失败节点并将校验结果聚合为结构化文件与仪表盘，其输出支撑6000小时级多供应商审计中的问题小时回补与供应商问责。与固定质检脚本相比，其关键差异在于依赖感知规划与执行时重规划和工具替换，避免了多智能体并行却无中央依赖图导致的排序错误。在Bhashini语料对比设置下，SpeechQM\-Agent精选子集的WER为9\.8，低于随机子集的WER 12\.9。该结论适用边界受限于音频加转录质检范围，方言失衡与超大规模分布式调度等场景尚未验证，延迟方面QC流水线每批需数十至上百秒。

🔗 **开源资源**

- 代码相关资源：<https://github.com/cyfer0618/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/cyfer0618/> — 链接可访问（HTTP 200）
- 第三方资源：<https://pytorch.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://vaani.iisc.ac.in/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 45. [标签之外：用方言度与录音条件重新刻画阿拉伯方言语音](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-575-33a50902ba/)

> 英文题目：*[Arab Voices: Mapping Standard and Dialectal Arabic Speech Technology](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-575-33a50902ba/)*

标签：#基准测试 #基准设计 #零样本 #语音 #语音识别

评分：**7.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.1/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.575/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.575.pdf)

👥 **作者与机构**

- Peter Sullivan：机构信息未能从会议 PDF 纯文本可靠映射
- AbdelRahim A\. Elmadany：机构信息未能从会议 PDF 纯文本可靠映射
- Alcides Alcoba Inciarte：机构信息未能从会议 PDF 纯文本可靠映射
- Muhammad Abdul\-Mageed：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

方言阿拉伯语语音识别需将异构录音转写为无统一正字法的方言文本，难点在于方言标签混乱、领域与信道差异大且缺乏可比评测。该工作先统一音频文本与元数据并调和方言与领域标签，为跨库比较提供一致基础。接着用文本方言度与无参考音质代理做自动化表征，补充缺失元数据并量化语料的方言性与感知质量差异。然后据此构建多方言适配与评测划分，并对编码器、编解码器与语音大模型三类现代系统做零样本评测，使数据选择与误差归因进入同一框架。与以往单库单方言评测不同，该工作把可复用映射框架与跨库基准绑定，使选数据与归因错误有据可依。在测试集现代标准语基准下，omniASR\-LLM\-7B\-v2的WER为10\.19，低于MMS\-1B\-ALL的38\.94。该结论适用边界仅限转写任务与所收录语料窗口内的标准语与方言划分，对语音合成与情感等任务及未覆盖方言的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/UBC-NLP/arab_voices> — 链接不可用（HTTP 404）
- 数据相关资源：<https://zenodo.org/records/6572573> — 链接可访问（HTTP 200）
- 数据相关资源：<https://www.openslr.org/132/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://www.openslr.org/46/> — 链接可访问（HTTP 200）
- 复现相关资源：<https://alliancecan.ca/> → <https://www.alliancecan.ca/en> — 链接可访问（HTTP 200）
- 复现相关资源：<https://arc.ubc.ca/ubc-arc-sockeye> — 链接不可用（HTTP 404）
- 第三方资源：<https://quran.ksu.edu.sa/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 46. [语音 token 不必个个不同：大语音模型的分层冗余与亲和合并](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-742-9184941440/)

> 英文题目：*[Do We Need Distinct Representations for Every Speech Token? Unveiling and Exploiting Redundancy in Large Speech Language Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-742-9184941440/)*

标签：#模型压缩 #语音大模型 #高效推理 #语音识别

评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#模型压缩

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.742/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.742.pdf)

👥 **作者与机构**

- Bajian Xiang：机构信息未能从会议 PDF 纯文本可靠映射
- Tingwei Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Xuan Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yang Han：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

大型语音语言模型以每秒数十个语音token为输入、输出文本语义，其序列长度远超底层语义含量，导致预填充计算浪费与长语音首token时延高企。该工作先用基于词级强制对齐的预言干预在各层试探合并，定位浅层敏感而深层冗余的可压缩位置，其输出的层选择直接决定后续压缩落点。接着提出亲和池化，若当前token与回看窗口内最近token的余弦相似度超过阈值则归入活动组并均值池化，否则截断成组，从而自适应形成合并边界。再以双重亲和池化在输入层与深层各执行一次合并，前者削减全网计算量，后者最大化压缩率并保持高层语义完整。与固定降采样和均匀插值不同，该方法依据表征亲和度而非固定步长决定合并，更贴合语音信息非均匀分布。在Qwen2\-Audio三任务基准下，激进配置DAP的ASR平均WER为2\.95，高于Vanilla基线的2\.94。该结论适用边界受限于识别问答与翻译等语义任务，尚未验证说话人音色韵律保真与噪声重叠超长对话外推，其推理开销表现为预填充计算量降至基线的72\.52%且最终保留率仅14\.91%。

🔗 **开源资源**

- 演示资源：<https://xchen-zero.github.io/speech-token-redundancy/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 47. [不转写直接听：用慢思考强化学习把诈骗电话的声音细节留下来](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1201-4c63e0e40f/)

> 英文题目：*[SAFE\-QAQ: End\-to\-End Slow\-Thinking Audio\-Text Fraud Detection via Reinforcement Learning](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1201-4c63e0e40f/)*

标签：#强化学习 #音频大模型 #端到端 #音频分类

评分：**7.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.3/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分类 | 主方法：#强化学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1201/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1201.pdf)

👥 **作者与机构**

- Peidong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiming Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Xin Dai：机构信息未能从会议 PDF 纯文本可靠映射
- YongKang Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Shi Feng：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaocui Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Wenxing Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhihao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Mingjun Pan：机构信息未能从会议 PDF 纯文本可靠映射
- Li Yuan：机构信息未能从会议 PDF 纯文本可靠映射
- Daling Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为原始通话音频与文本指令，输出为7类场景分类、2类是否诈骗、7类诈骗类型三组标签及逐步推理链，难点在于自动语音识别转写误差会掩盖语气与环境线索，而多层伪装骗术需要迭代核查才能识破。第一阶段以规则奖励的组相对策略优化训练慢思考模型，直接从音频捕捉细粒度线索并生成分类与长推理链。第二阶段经拒绝采样微调压缩推理链，将前一阶段筛选后的高质量长推理样本作为监督数据，在保持精度下缩短推理长度。第三阶段以长度约束强化学习微调出支持早期介入的实时模型，继承前阶段权重与推理风格并以阶段奖励优化决策时机与效率平衡。相对先转写后判定的级联路线，关键机制差异在于省去中间文本瓶颈，并用准确率加格式加深度加阶段加效率奖励显式塑造推理长度与决策时机，具有保留声学线索的实际意义。在TeleAntiFraud\-Bench基准下，SAFE\-LS的AVG F1分数为87\.49，高于Gemini\-3\.0\-Pro的83\.94。该结论适用边界受限于TeleAntiFraud\-28k分布与高风险电话子集，对强噪声、信号退化与新型话术的泛化尚未验证。训练成本对应硬件为4卡NVIDIA A100集群，推理开销以推理词元长度、延迟与吞吐衡量，极端部署下的失败条件仍需系统检验。

🔗 **开源资源**

- 第三方资源：<https://github.com/modelscope/ms-swift> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 48. [真人说话会改口、会铺垫、会有背景音：多轮语音对话为何最难记住和改对](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1654-7fa55d5e55/)

> 英文题目：*[Audio MultiChallenge: A Multi\-Turn Evaluation of Spoken Dialogue Systems on Natural Human Interaction](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1654-7fa55d5e55/)*

标签：#基准测试 #基准设计 #模型评估 #语音 #语音对话系统

评分：**7.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音对话系统 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1654/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1654.pdf)

👥 **作者与机构**

- Advait Gosai：机构信息未能从会议 PDF 纯文本可靠映射
- Tyler Vuong：机构信息未能从会议 PDF 纯文本可靠映射
- Utkarsh Tyagi：机构信息未能从会议 PDF 纯文本可靠映射
- Steven Li：机构信息未能从会议 PDF 纯文本可靠映射
- Wenjia You：机构信息未能从会议 PDF 纯文本可靠映射
- Miheer Bavare：机构信息未能从会议 PDF 纯文本可靠映射
- Arda Uçar：机构信息未能从会议 PDF 纯文本可靠映射
- Zhongwang Fang：机构信息未能从会议 PDF 纯文本可靠映射
- Brian Jang：机构信息未能从会议 PDF 纯文本可靠映射
- Bing Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yunzhong He：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

端到端语音对话系统需在连续多轮真人语音中联合理解语义、韵律与环境声并持续跟踪指令与自我陈述，而合成单轮评测掩盖了长时状态跟踪与口语修复的实际难点，任务输入为多轮真人语音用户轮加文本助手史，输出为对末轮请求应答质量的判定。方法链第一步由规划者与测试者智能体迭代生成可诱发目标模型失败的交互蓝图并蒸馏为人类可读策略，其输出的蓝图与交互目标直接进入下一步的人类录音。第二步由人类贡献者依据蓝图与目标模型即兴完成多轮交互并保留迟疑、修正与打断，形成四百五十二组自然对话语料。第三步将理想回答拆为一千七百一十二项原子化二值评分标准并由大模型裁判逐项判定，只有全部满足才算通过。相对直接转写文本基准的关键机制差异在于保留声学副语言线索与可听编辑过程，迫使模型过滤撤回内容并回忆背景声，因而更真实暴露语音编辑与音频线索记忆缺陷。在Audio MultiChallenge基准评测下，Gemini 3 Pro Preview Thinking的平均通过率得分指标APR为54\.65%，高于GPT 4o Audio Preview的25\.44%。该结论适用边界受限于英语中短多轮问答式助手场景，对原始音频输出韵律质量与实时打断尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 49. [分开给音色和风格：FC\-TTS 用两阶段管线约束解耦的边界](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-173-b25271b9c2/)

> 英文题目：*[FC\-TTS: Style and Timbre Control in Zero\-Shot Text\-to\-Speech with Disentangled Speech Representations](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-173-b25271b9c2/)*

标签：#流匹配 #向量量化 #零样本 #语音 #文本到语音

评分：**7.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.5/0.5 | 工程/实践 1.1/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#文本到语音 | 主方法：#流匹配

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.173/) · [官方 PDF](https://aclanthology.org/2026.acl-long.173.pdf)

👥 **作者与机构**

- Yoonhyung Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Hyunsin Park：机构信息未能从会议 PDF 纯文本可靠映射
- Jinhwan Park：机构信息未能从会议 PDF 纯文本可靠映射
- Jinkyu Lee：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理零样本语境下用两个不同参考分别控制音色与风格的文本到语音任务，输入为目标文本加音色参考与风格参考，输出为兼具指定音色与指定韵律的语音，难点在于预训练因子化解耦并不完美且对未见音色韵律组合泛化差。方法链分三步：先由音色适配器以说话人嵌入锚定音色并生成模糊频谱，再由分层风格编码器从韵律 token 中提取离散风格码，随后由流匹配解码器以该风格码精修得到完整对数梅尔频谱并经声码器成波，时长由独立时长预测器预先给出。与直接复用因子化解码器的做法不同，该设计用功能分离的生成路径与跨条件一致性约束强制每路参考只影响其专属阶段，降低了未见组合下的串扰。LibriSpeech test\-clean 零样本合成中该系统取得 UTMOS 4\.22、WER 1\.88、SPK 0\.60，与同规模重训基线相当且支持双参考控制。该结论目前仅在英语朗读与表演性情感语料上验证，对多语言、口音及音色与风格边界模糊属性的外推尚未验证。训练在 8 张 NVIDIA V100 上耗时 116 小时，推理需 8 步时长预测加 32 步频谱生成并使用分类器无关引导。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 50. [不只看文字：用时间轴重新定义音频章节切分](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-396-62b0c742f6/)

> 英文题目：*[Beyond Transcripts: A Renewed Perspective on Audio Chaptering](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-396-62b0c742f6/)*

标签：#评测协议 #多模态模型 #长音频处理 #语音 #音频理解

评分：**7.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频理解 | 主方法：#评测协议

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.396/) · [官方 PDF](https://aclanthology.org/2026.acl-long.396.pdf)

👥 **作者与机构**

- Fabian Retkowski：机构信息未能从会议 PDF 纯文本可靠映射
- Maike Züfle：机构信息未能从会议 PDF 纯文本可靠映射
- Thai Binh Nguyen：机构信息未能从会议 PDF 纯文本可靠映射
- Jan Niehues：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Waibel：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频章节划分（Audio Chaptering）需将长播客、讲座与视频切分为语义连贯区间并输出连续时间边界，难点在于自动语音识别（Automatic Speech Recognition，ASR）转写错误改变句子粒度、连续时间戳被强制吸附到句子边界造成有损离散化。工作并行验证三类范式：文本基线MiniSeg先用MiniLM编码句子再由RoFormer做序列标注并可拼接停顿、语速、基频、响度与说话人分离标注（Diarization）等手工特征；音频模型AudioSeg先用冻结编码器抽帧再经局部切分Transformer聚合为6s段嵌入最后由文档编码器预测边界；多模态大模型（Multimodal Large Language Model，MLLM）以Qwen2\.5\-Omni与Qwen3\-Omni尝试转写加分章加标题的端到端提示。与纯文本范式相比，关键差异是把建模与评测搬到与转写无关的离散时间网格T1与连续时间T2，避免不同转写粒度虚增分数。在YTSeg全量测试集T1协议6s块下AudioSeg（Whisper Large）达到F1 45\.52，显著高于文本加全特征最优的40\.30，而Qwen3\-Omni上下文示例（In\-Context Learning，ICL）仅在30分钟内短音频可达41\.30。结论限于英语YouTube主导分布与小规模AMI会议验证，长视频与多说话人下性能骤降且未用视觉线索。原文未披露训练推理部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/xinjli/alqalign> — 链接可访问（HTTP 200）
- 第三方资源：<https://segeval.readthedocs.io/> → <https://segeval.readthedocs.io/en/latest/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 51. [先想后说再调工具：VoxMind 如何把语音对话做成可规划的端到端智能体](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-459-7ee4ec640f/)

> 英文题目：*[VoxMind: An End\-to\-End Agentic Spoken Dialogue System](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-459-7ee4ec640f/)*

标签：#数据集 #端到端学习 #语音大模型 #语音 #语音对话系统

评分：**7.4/10** | 创新 1.6/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音对话系统 | 主方法：#端到端学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.459/) · [官方 PDF](https://aclanthology.org/2026.acl-long.459.pdf)

👥 **作者与机构**

- Tianle Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Yifu Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Shengpeng Ji：机构信息未能从会议 PDF 纯文本可靠映射
- Yijun Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiyang Jia：机构信息未能从会议 PDF 纯文本可靠映射
- Jingyu Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Fan Zhuo：机构信息未能从会议 PDF 纯文本可靠映射
- Xueyi Pu：机构信息未能从会议 PDF 纯文本可靠映射
- Yangzhuo Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhou Zhao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

端到端口语智能体需直接从语音输入完成理解、规划、工具调用与语音回复，难点在于语音编码 token 量大而语义粒度粗、工具参数结构化生成难，且大工具库易引发延迟爆炸与数据稀缺。为此作者先给出含规划与执行的智能体形式化定义，再构建VoxMind系统：语音状态先经思考策略生成内部推理轨迹，再由行动策略据此选择口头回复或工具调用。同时辅助大语言模型并行检索候选工具并按需扩充局部工具集，使主流程与全局工具检索解耦，推理轨迹所需 token 仅占语音生成的约12\.6%而保持有界。数据上通过反向生成与评分过滤构建AgentChat语料，合成推理链与工具标注以补足语音智能体监督。与已有检索式语音助手的关键差异在于显式先思考后说话与推理触发的局部工具空间管理，具有将任务执行延迟与工具总数解耦为近似常数的实际意义。在自建智能体评测下，VoxMind的Overall得分为74\.57，高于Gemini\-2\.5\-pro的Overall得分71\.51。结论适用边界受限于合成语音主导的单轮与短多轮工具任务，对真实自发口语与长程多工具依赖尚未验证；硬件上训练采用2块H20\-NVLink GPU，推理开销方面主智能体等待开销保持在15ms以下使检索延迟被并行推理隐藏。

🔗 **开源资源**

- 第三方资源：<https://bailian.console.aliyun.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 52. [先保证译对再求快：用分层奖励纠正合成轨迹的无界语音同传](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-80-b088d768c8/)

> 英文题目：*[Hierarchical Policy Optimization for Simultaneous Translation of Unbounded Speech](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-80-b088d768c8/)*

标签：#强化学习 #大语言模型 #长音频处理 #流式处理 #语音翻译

评分：**7.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音翻译 | 主方法：#强化学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.80/) · [官方 PDF](https://aclanthology.org/2026.acl-long.80.pdf)

👥 **作者与机构**

- Siqi Ouyang：机构信息未能从会议 PDF 纯文本可靠映射
- Shuoyang Ding：机构信息未能从会议 PDF 纯文本可靠映射
- Oleksii Hrinchuk：机构信息未能从会议 PDF 纯文本可靠映射
- Vitaly Lavrukhin：机构信息未能从会议 PDF 纯文本可靠映射
- Brian Yan：机构信息未能从会议 PDF 纯文本可靠映射
- Boris Ginsburg：机构信息未能从会议 PDF 纯文本可靠映射
- Lei Li：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

同时语音翻译以无界英语语音流为输入，在流到达过程中增量输出中文/德文/日文译文，难点在于读取与写入决策交织且合成多轮对话轨迹存在对齐错位与过早翻译，翻译质量与延迟目标天然冲突。方法首先采用流式语音编码器逐块编码语音并复用键值缓存，将交错语音特征与历史译文送入Qwen3大语言模型解码部分译文，遇到结束符则输出空，从而形成可处理长语音的多轮对话架构。然后对每段长语音采样16条翻译轨迹，经SEGALE分句对齐为假设与参考句对并分别计算质量分与延迟分，若句质量低于阈值则延迟取最大惩罚以抑制投机性提前输出。最后在假设组内对质量与延迟分分别归一化后加权求和得到分层奖励，并用分组相对策略优化对有缺陷监督微调模型做后训练校正。与InfiniSST等依赖启发式等待策略或无质量保证合成轨迹的方法相比，关键机制差异是句子级质量门控与质量延迟分组归一化，使延迟仅在质量达标时被优化，实际意义是减少过译欠译并缓解量纲差异导致的优化不稳定。在消融评测设置下，HPO的COMET为0\.8234，高于SFT基线的0\.7348。该结论适用边界受限于英语源演讲域及三个翻译方向，BLEU与大模型评审不一致揭示神经奖励可能带来奖励黑客的失败条件，跨语种与噪声场景尚未验证。训练成本方面单次后训练约需三个8卡H100节点运行约20小时完成500步，其中一节点专用于奖励计算，推理开销需维护滑动窗口缓存并伴随约1\.5秒级延迟。

🔗 **开源资源**

- 第三方资源：<https://spacy.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/NVIDIA-NeMo/RL> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 53. [吴语没有数据就没有模型：用八千小时多维标注把理解与生成一起补齐](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1395-d13f6cbb8e/)

> 英文题目：*[WenetSpeech\-Wu: Datasets, Benchmarks, and Models for a Unified Chinese Wu Dialect Speech Processing Ecosystem](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1395-d13f6cbb8e/)*

标签：#基准测试 #数据集 #数据集构建 #语音识别

评分：**7.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#数据集构建

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1395/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1395.pdf)

👥 **作者与机构**

- Chengyou Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Mingchen Shao：机构信息未能从会议 PDF 纯文本可靠映射
- Jingbin Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Zeyu Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Hongfei Xue：机构信息未能从会议 PDF 纯文本可靠映射
- Bingshen Mu：机构信息未能从会议 PDF 纯文本可靠映射
- Xin Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Xingyi Duan：机构信息未能从会议 PDF 纯文本可靠映射
- Binbin Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhu Pengcheng：机构信息未能从会议 PDF 纯文本可靠映射
- Chuang Ding：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaojun Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Hui Bu：机构信息未能从会议 PDF 纯文本可靠映射
- Lei Xie：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

吴语语音处理的输入是沪苏杭等多口音野外语音，输出涵盖方言转写、吴语到普通话翻译及说话人属性与情感判断，其难点在于全浊声母保留、复杂连读变调与次方言差异叠加且缺乏公开大语料与统一评测。为此工作先经元数据过滤、端点检测切分与深度噪声平均意见分加信噪比过滤收集高质量野外语音，为后续标注提供干净输入。接着用880小时人工数据微调的Tele\-CTC\-FT与Step\-Audio2\-FT联合Dolphin、TeleASR进行自动转写，并经识别器输出投票差错降低融合生成带置信度终稿，使多识别器互补结果进入统一文本。然后叠加说话人属性、吴语到普通话翻译、跨模态情感与韵律特征等多维标注，并据此划分人工核验基准与分级训练子集，形成可直接训练与评测的数据闭环。与把吴语视为多语附庸的通用大模型不同，该工作以方言为中心重建数据、基准与模型，使大规模方言预训练与高质量监督微调衔接，具有补齐低资源方言生态的实际意义。在WenetSpeech\-Wu\-Bench基准测试下，Step\-Audio2\-Wu\-ASR的字符错误率CER为12\.85%，低于Step\-Audio2\-mini的26\.72%。该结论适用边界受限于以上海话为主的评测分布，对低覆盖次方言与强噪声多说话人场景的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/wenet-e2e/wespeaker> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/mjpost/sacrebleu> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 54. [先松开参考音频的束缚，再用旋钮调风格：ReStyle\-TTS 的相对连续控制](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-451-81324751ef/)

> 英文题目：*[ReStyle\-TTS: Relative and Continuous Style Control for Zero\-Shot Speech Synthesis](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-451-81324751ef/)*

标签：#LoRA #零样本 #语音 #文本到语音

评分：**7.4/10** | 创新 1.6/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#文本到语音 | 主方法：#LoRA

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.451/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.451.pdf)

👥 **作者与机构**

- Haitao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Chunxiang Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Chenglin Li：机构信息未能从会议 PDF 纯文本可靠映射
- Wenhao Guan：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengxing Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Xie Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

零样本语音合成以目标文本与短参考音频为输入，输出保留说话人音色的语音，难点是生成语音被参考韵律与情感强绑定，弱化参考又会损伤音色与可懂度。先通过解耦无分类器引导将文本引导与参考引导拆为独立系数，以文本与参考条件为输入分别计算引导项，固定文本跟随并将参考跟随压低，输出低参考依赖的生成轨迹为风格注入腾出空间。再由风格适配器承接该解耦表示，以其为输入在高低音高、高低能量及七种情感对应子集上训练低秩方向，推理时以标量强度连续缩放且负值可反向，输出定向风格偏移量叠加到生成过程。最后经正交低秩融合与音色一致性优化，以多属性低秩方向与生成样本相似度为输入，对方向做正交去干扰后加权融合，并以优势加权强化高相似度样本，输出音色与可懂度稳定的多属性合成语音。与绝对文本提示控制不同，该方法相对缩放参考固有属性而非推向固定目标，因而保留样本间排序并支持连续单调调节。在VccmDataset矛盾风格生成任务下，ReStyle\-TTS的准确率为100\.0%，高于CosyVoice的65\.2%。其适用边界为每种新风格需收集数据并额外微调低秩适配器且尚未验证跨语言与强噪声参考，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://cucl-2.github.io/Restyle-TTS> → <https://cucl-2.github.io/Restyle-TTS/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 55. [用进度刻度对齐文本与语音：VoiceStar 如何同时做到时长可控与超长外推](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-570-80d6fc13d6/)

> 英文题目：*[VoiceStar: Robust Zero\-Shot Autoregressive TTS with Duration Control and Extrapolation](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-570-80d6fc13d6/)*

标签：#自回归模型 #零样本 #语音 #文本到语音

评分：**7.4/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：模型报告 | 主任务：#文本到语音 | 主方法：#自回归模型

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.570/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.570.pdf)

👥 **作者与机构**

- Puyuan Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Zhisheng Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Shang\-Wen Li：机构信息未能从会议 PDF 纯文本可靠映射
- Abdelrahman Mohamed：机构信息未能从会议 PDF 纯文本可靠映射
- David Harwath：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

零样本语音合成输入为数秒参考语音与目标文本，输出为克隆音色且可懂自然的目标语音，难点在于文本语音对齐脆弱、目标时长不可控且长于训练长度时易崩溃。先由编码器读入国际音标转写的目标与参考文本并以分隔符区分二者，负责形成可对齐的文本表示，输出的文本表示直接送入解码器作为交叉注意条件。再由解码器自回归预测Encodec声学token，负责在进展监控旋转位置编码下将分数进度插值为相对位置并感知目标时长以控制结束，其输出的token序列即为可控时长语音的离散表示。最后读入同一说话人的单话语延续采样与跨话语提示采样并以一定概率切换进行延续提示混合训练，负责将解耦后的音色克隆与韵律迁移输入暴露给模型以缓解训练推理失配，得到的训练权重直接用于推理时的零样本提示。与直接拼接文本语音的解码器结构相比，该设计把对齐、时长控制与外推统一为进度插值问题而非绝对位置外推。在长上下文评测设置下，VOICESTAR的WER为11\.91，低于F5\-TTS的52\.44。其适用边界受限于依赖真实目标时长与Libriheavy长语音评测，估计时长与开放域风格尚未验证，长语音说话人相似度仍有差距，训练成本为在8张L40与16张GH200上训练8天，推理开销表现为840M模型的实时因子大于1。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 56. [交替听与读才能检准：ATIR 把音频文本交织序列当作一等检索对象](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1006-f7d175e478/)

> 英文题目：*[ATIR: Towards Audio\-Text Interleaved Contextual Retrieval](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1006-f7d175e478/)*

标签：#基准测试 #对比学习 #多模态模型 #语音 #音频检索

评分：**7.3/10** | 创新 1.6/2 | 技术严谨 1.3/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频检索 | 主方法：#对比学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1006/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1006.pdf)

👥 **作者与机构**

- Tong Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Chenghao Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yutao Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhicheng Dou：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频文本交错上下文检索（Audio\-Text Interleaved Contextual Retrieval，ATIR）要求对查询与文档中多轮交替出现的音频段和文本段联合建模，按有序序列级语义相似度 \(s(X\_Q,X\_D)\) 找回最相关文档，难点在于音频与文本信息密度悬殊、长音频冗余噪声主导嵌入空间以及顺序语义依赖。作者构建统一合成流水线：先配置 LibriSpeech、CoQA、SVQ 三类源数据与四种声学环境并用 Qwen3\-Omni 等补齐缺失音频，再经多视角语料扩展生成语义相关文档，接着构造扎根文档的推理型问答对形成交错查询，然后用一阶段检索器挖掘难负例并用大模型篡改事实生成误导性段落，最后经语义相关性、负例难度、结构一致性与多样性自评估过滤，形成 88283 对查询\-正文档，其中训练 84374 对、测试 3909 对。检索模型 ATIR\-Qwen\-3B 采用双编码器（bi\-encoder）结构，基于 Qwen2\.5\-Omni\-3B Thinker 骨干，冻结音频编码器，仅更新 LoRA 适配器，以余弦相似度打分，核心为 ATIR 选择器（ATIR Selector）对音频 token 做内容感知过滤以平衡模态密度。训练分两阶段，均用 InfoNCE 对比目标：第一阶段用文本\-文本、音频\-音频、音频\-文本弱监督对激活对齐能力，第二阶段用交错结构加难负例激发细粒度能力。在 ATIR 测试集 4 种设置平均 Recall@1 达 78\.86%，相对最强文本流水线 Qwen3\-Embedding\-4B 加 Whisper\-large\-v3 转写提升 9\.52 个百分点。该结论限于合成问答型语料与单文档检索，打乱交错顺序即退化，未验证多证据聚合与真实对话泛化。8 卡 A100 40GB 两阶段共训练约 24 小时，直接编码音频省去转写开销，单查询平均延迟约 16\.8 毫秒。

🔗 **开源资源**

- 第三方资源：<https://chatgpt.com/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 57. [转录都对，为什么听起来还是不合适：语音交互的文化能力](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1466-b422077ade/)

> 英文题目：*[From Naturalness to Norms: Interactional Cultural Competence for SpeechLMs](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1466-b422077ade/)*

标签：#评测协议 #韵律 #社会语音学 #语音对话系统 #轮次切换

评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.9/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：理论研究 | 主任务：#语音对话系统 | 主方法：#评测协议

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1466/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1466.pdf)

👥 **作者与机构**

- Santosh T\.Y\.S\.S：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务输入为包含韵律、停顿、重叠与修复的连续语音交互，输出为符合特定言语事件规范的言语行动，难点在于相同转写可因时序与语调实现亲和或讽刺等不同社会行动而转写正确仍属失当。方法首先综合社会语言学、语言人类学与会话分析提炼韵律、副语言与交互组织等文化承载信号分类，为诊断提供理论目标。接着追踪该信号在端点检测、流式延迟、说话人分离、文本中间表示与韵律控制接口等堆栈位置的丢失方式，其输出作为归因依据进入下一步。最后提出以言语事件卡显式约束角色关系与交互契约的规范条件评测框架，用转写固定最小对与多重可接受性协议诊断事件条件下的得体性。在附录最小试点协议设置下，4–6张事件卡条件的规模指标的数量为4–6，低于每事件20–30条语料条件的规模指标的数量为20–30，该比较仅说明试点规模而原文未提供可核对的关键定量结果。相对已有WER、MOS与全双工通用时长质量评测的关键差异在于将泛化自然度替换为事件加契约下的多重规范目标，使相同声学行为可跨事件判为不同并能定位到具体流水线选择，其实质是将交互能力由附带效应变为直接优化目标。其结论适用边界限于需明确角色与体裁的任务型语音交互，对规范争议强或高度即兴场景的泛化尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 58. [鸡尾酒会里看口型说话：AV\-Dialog 如何同时听清、看准接话时机](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1954-a8203a3ac4/)

> 英文题目：*[AV\-Dialog: Spoken Dialogue Models with Audio\-Visual Input](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1954-a8203a3ac4/)*

标签：#多模态学习 #流式处理 #音视频语音识别 #语音对话系统 #轮次切换

评分：**7.3/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音对话系统 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1954/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1954.pdf)

👥 **作者与机构**

- Tuochao Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Bandhav Veluri：机构信息未能从会议 PDF 纯文本可靠映射
- Hongyu Gong：机构信息未能从会议 PDF 纯文本可靠映射
- Shyamnath Gollakota：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务以第一人称连续混合语音与人脸视频为输入，同步输出目标说话人流式转录、轮次切换事件与语音回复，难点是在强背景噪声与多干扰说话人下保持目标跟踪并实现自然抢话与让话。首先以Descript Audio Codec声学码本按25Hz编码语音并以AV\-HuBERT编码唇部视觉特征，实现音视频帧级同步输入；随后理解模块同步流式生成用户文本流与\<SOT\>等轮次事件流，直接驱动文本骨干在LISTENING与SPEAKING状态间切换以生成回复，去识别流的统一变体则在同一流中直接预测事件并生成回复。两阶段多任务训练先在单人语音识别、音频描述与音视频识别数据上做模态对齐，再在Fisher与InterAct对话上学习流式识别与轮次预测，并以\-8dB至8dB的干净、MUSAN噪声与1至4人干扰混合增强鲁棒性。与Moshi等依赖HuBERT类语义码本的语音对话模型不同，该设计保留声纹细节并以视觉锚定目标说话人，从而在干扰下仍能区分目标与干扰声。在InterAct测试集Interf干扰条件下，音视频双模型的WER为30\.8%，低于Auto\-AVSR基线的93\.0%。该结论适用边界受限于英语为主的Fisher与InterAct类闲聊对话及合成干扰评估，VoxCeleb2真值依赖Whisper\-Large伪标签，真实混响遮挡与极端重叠尚未验证。原文披露的算法延迟约为120ms，高于Moshi约80ms的延迟，主要受限于视觉编码器的两帧前视，双模型并行还增加了峰值内存的推理开销。

🔗 **开源资源**

- 复现相关资源：<https://avdialog.cs.washington.edu/> — 链接可访问（HTTP 200）
- 第三方资源：<https://dlib.net/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 59. [深层共用参数为何同时拖累语义与声音：Lychee\-FD 的分层解耦解读](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-419-2d95312dda/)

> 英文题目：*[Hierarchical Acoustic\-Semantic Modeling: Modality Separation and Semantic Coherence for Full\-Duplex SLMs](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-419-2d95312dda/)*

标签：#端到端学习 #高效推理 #语音 #全双工语音交互

评分：**7.3/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#全双工语音交互 | 主方法：#端到端学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.419/) · [官方 PDF](https://aclanthology.org/2026.acl-long.419.pdf)

👥 **作者与机构**

- Zhenyu Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Xuanyu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yunxin Li：机构信息未能从会议 PDF 纯文本可靠映射
- Qixun Teng：机构信息未能从会议 PDF 纯文本可靠映射
- Shenyuan Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Haolan Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Mingjun Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Fanbo Meng：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Yancheng He：机构信息未能从会议 PDF 纯文本可靠映射
- Baotian Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Haizhou Li：机构信息未能从会议 PDF 纯文本可靠映射
- Min Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

原生全双工口语模型需在持续监听用户音频流的同时并发输出语音回复，需处理打断、反向通道与轮次管理，难点在于声学建模与语义建模挤占同一深层参数空间导致知识退化与语义受损。为定位根因，先以StepAudio\-2\-mini初始化的原生通道复用架构为对象，在训练集1K样本上累积文本与语音交叉熵梯度并计算逐层余弦相似度与幅值比，发现浅层0\-9层为正协同而深层转负发散，且填充时间对齐压制语义梯度形成语义稀释。以该几何结论为依据，保留浅层统一Transformer主干处理通用低层特征，其输出共享表示直接送入深层并行分支。深层分裂为语义头、声学头与控制头以隔离冲突优化方向，同时以连续文本内部独白构建语义对齐通道维持高幅值语言建模梯度流，二者衔接实现模态分离与知识保持且不增加模型深度。与原生端到端强行共享深层及Thinker\-Talker多阶段分离不同，该层次化解耦在原生框架内解决梯度冲突，兼顾超低延迟与语义完整性。在LlamaQ、WebQ与TriviaQA语音问答基准下，Lychee\-FD的语音到语音平均准确率为46\.2，高于原生基线Fun\-Audio\-Chat的38\.8。该结论适用边界受限于上述初始化架构与受控问答及全双工基准的验证范围，更开放多说话人场景的泛化尚未验证。推理开销方面原文报告其在FullDuplexBench 1\.5上的中断停止延迟为570ms且首包与中断延迟最低，表明层次化分离未引入额外深度延迟。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 60. [低码率下语义与音质为何互相拖累：XY\-Tokenizer 用双塔与两阶段分开建模](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-423-cd0cd04c75/)

> 英文题目：*[XY\-Tokenizer: Mitigating the Semantic\-Acoustic Conflict in Low\-Bitrate Speech Codecs](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-423-cd0cd04c75/)*

标签：#对抗训练 #多任务学习 #向量量化 #语音 #语音编码

评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音编码 | 主方法：#多任务学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.423/) · [官方 PDF](https://aclanthology.org/2026.acl-long.423.pdf)

👥 **作者与机构**

- Yitian Gong：机构信息未能从会议 PDF 纯文本可靠映射
- Luozhijie Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Kuangwei Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Dong Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Ruifan Deng：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaogui Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Xin Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhaoye Fei：机构信息未能从会议 PDF 纯文本可靠映射
- Qinyuan Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Shimin Li：机构信息未能从会议 PDF 纯文本可靠映射
- Xipeng Qiu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

低比特率语音编码（Speech Coding）需要在同一组离散token中同时保留语言内容与可重建声学细节，共享参数下的多任务优化使两者互相挤压。XY\-Tokenizer采用双塔编码加单量化瓶颈加双头解码：语义编码器冻结自预训练Whisper编码器以提供稳定语言表示，声学编码器可训练以捕捉副语言细节，两路拼接后经残差向量量化（Residual Vector Quantization，RVQ）形成统一离散表示，再分叉为基于Qwen2\.5\-0\.5B的语义解码器和基于Vocos的声学解码器。预训练以LLM的自动语音识别（Automatic Speech Recognition，ASR）损失约束token与文本对齐并保留粗粒度梅尔谱重建，后训练冻结编码器与量化器并移除语义解码器，仅用多周期判别器（Multi\-Period Discriminator，MPD）、多尺度判别器（Multi\-Scale Discriminator，MSD）与多尺度短时傅里叶判别器（Multi\-Scale STFT Discriminator，MS\-STFTD）精修声学解码通路。在LibriSpeech test\-clean约1\.00 kbps下其ASR探测词错率（Word Error Rate，WER）为0\.13，低于Mimi的0\.28和XCodec 2\.0的0\.30，说话人相似度（Speaker Similarity，SIM）达0\.85，同时在VoxPopuli\-EN、AISHELL\-2和Common Voice ZH的中英文重建与主观MUSHRA上保持领先或相当。该结论主要适用于16 kHz英汉朗读与野外语音，音乐、强噪声与流式低时延外推未验证。预训练使用Emilia约101k小时在32卡H100上训练800k步，后训练仍需对抗优化，原文未披露完整推理时延与部署成本。

🔗 **开源资源**

- 第三方资源：<https://huggingface.co/facebook/encodec_24khz> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 61. [从文本到定时再到可懂语音：ControlAudio 为何要用渐进式扩散拆解控制](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-62-e55f4965b7/)

> 英文题目：*[ControlAudio: Tackling Text\-Guided, Timing\-Indicated and Intelligible Audio Generation via Progressive Diffusion Modeling](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-62-e55f4965b7/)*

标签：#扩散模型 #多任务学习 #音频生成 #语音合成

评分：**7.3/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.62/) · [官方 PDF](https://aclanthology.org/2026.acl-long.62.pdf)

👥 **作者与机构**

- Yuxuan Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Zehua Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Zeqian Ju：机构信息未能从会议 PDF 纯文本可靠映射
- Yusheng Dai：机构信息未能从会议 PDF 纯文本可靠映射
- Weibei Dou：机构信息未能从会议 PDF 纯文本可靠映射
- Jun Zhu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作面向文本到音频生成中同时要求事件时间窗精确对齐与语音内容可懂的控制任务，输入为自由文本描述，输出为10秒音频，需解决细粒度时序标注与带转写语音数据稀缺导致的规模化可控性下降问题。方法链分三步推进：先以大规模弱标注文本音频对预训练基于扩散变换器（Diffusion Transformer，DiT）的潜空间生成模型，建立高质量文本到音频映射；再在强时间标注数据上以文本与结构化文本加时间窗条件切换微调，注入时间控制而不遗忘纯文本能力；最后解冻文本编码器并在真实标注与仿真混合数据上以文本、文本加时间窗、文本加时间窗加音素三种条件切换联合训练，统一建模语义、时序与发音内容。推理侧采用渐进引导采样，先用低引导权重与去音素提示建立事件布局，再切换至高引导权重与完整音素提示细化语音，从而与扩散由粗到细的生成过程对齐。与已有时间可控与可懂语音基线相比，关键差异在于以单一文本编码器统一处理结构化提示与音素扩展词表，避免多分支语音模块，并以多任务渐进训练替代单阶段联合训练。在AudioCondition测试集上ControlAudio事件级F1（Event\-based F1，Eb）达55\.58，超过FreeAudio的44\.34，同时实时因子（Real\-Time Factor，RTF）为0\.821。在AC\-Filtered上词错率（Word Error Rate，WER）为6\.84，优于VoiceLDM\-M的8\.84，表明时间精度与可懂度同步提升。该结论限于10秒固定时长、16 kHz单声道英文为主场景，对情感韵律与说话人身份控制及复杂重叠下音质与可懂度权衡尚未验证。训练成本为3阶段共2M步、8卡NVIDIA A800、总批量128，推理需100步扩散采样。

🔗 **开源资源**

- 第三方资源：<https://deepmind.google/models/gemini/pro/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 62. [幻觉不在文字里而在注意力里：用音频注意力在推理时筛掉语音大模型的虚构](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2147-c1dcb35439/)

> 英文题目：*[Detecting Hallucinations in SpeechLLMs at Inference Time Using Attention Maps](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2147-c1dcb35439/)*

标签：#注意力机制 #多语言 #语音 #语音识别

评分：**7.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#注意力机制

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.2147/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.2147.pdf)

👥 **作者与机构**

- Jonas Waldendorf：机构信息未能从会议 PDF 纯文本可靠映射
- Bashar Awwad Shiekh Hasan：机构信息未能从会议 PDF 纯文本可靠映射
- Evgenii Tsymbalov：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音大模型以连续音频帧序列为输入自回归生成转录或翻译文本，实际难点在于输出流畅却可能完全脱离音频证据，且推理时缺乏参考文本难以在线拦截。方法链分三步：首先在每个解码步从语音与文本注意力权重计算音频熵、文本熵、音频比例与跨步一致性四类指标，刻画对齐集中与分散状态；随后将各步数值按时间平均得到每层每头的单一取值并拼接为特征向量，进入下一步分类；最后以该向量训练轻量逻辑回归分类器，直接输出幻觉概率以支持过滤与拒识。相对文本领域的平均熵、困惑度与回视透镜基线，关键差异是将输入侧限定为音频帧并引入双侧熵与跨步一致性，从而显式捕捉对齐坍缩与回退到音频首部的病理模式，具有音频特异的可解释意义。在VOXPOPULI测试集下，逻辑回归方法的PR\-AUC为0\.58，高于MEAN ENTROPY基线的0\.49。该结论适用边界在于模型依赖与任务专用训练明显，在噪声会话数据与翻译任务迁移上优势收窄且需重训。全量开发硬件为八块A100\-40GB GPU，单轮推理开销约为每秒处理4\.5个样本并消耗约38\.5个GPU小时，开发与评测总量上限约为300个GPU小时。

🔗 **开源资源**

- 数据相关资源：<https://huggingface.co/datasets/facebook/> — 暂时无法访问
- 数据相关资源：<https://catalog.ldc.upenn.edu/LDC97S42> — 链接可访问（HTTP 200）
- 数据相关资源：<https://huggingface.co/datasets/google/fleurs> — 暂时无法访问
- 第三方资源：<https://huggingface.co/Unbabel/XCOMET-XL> — 暂时无法访问
- 第三方资源：<https://scikit-learn.org/stable/index.html> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 63. [转写之外还要听见什么：用统一音频模式补上感知的短板](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-967-16873cd5a1/)

> 英文题目：*[Beyond Transcription: Unified Audio Schema for Perception\-Aware AudioLLMs](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-967-16873cd5a1/)*

标签：#多任务学习 #音频大模型 #环境声 #语音 #音频理解

评分：**7.3/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频理解 | 主方法：#多任务学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.967/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.967.pdf)

👥 **作者与机构**

- Linhao Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhan Song：机构信息未能从会议 PDF 纯文本可靠映射
- Aiwei Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Chuhan Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Sijun Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Jia：机构信息未能从会议 PDF 纯文本可靠映射
- Yuan Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Houfeng Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhou Xiao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为包含语音、音乐与环境声的通用音频，输出为转写、问答与语音合成，难点在于以恢复规范文本为目标的自动语音识别监督会把韵律、情感、音色与声事件归一化掉，导致模型能推理却听不清细节。方法分三步：首先用音频描述模型对原始音频生成副语言与场景字幕，抽取自动语音识别丢弃的声学信息。接着用大语言模型将字幕与真值转写归一化为转写、副语言学、非语言事件三段式JSON，形成结构化监督。然后以该结构做适配与指令微调，并辅以问答训练与强化学习，使感知知识转化为任务表现且兼容现有评测。相对同源非结构化字幕融合，关键差异是以正交槽位强制解耦语言内容与感知属性，并以低熵固定词汇降低优化难度，从而保证完备性与句法不变性。在MMSU基准下，UAS\-Audio的感知准确率为55\.7%，高于Kimi\-Audio的感知准确率44\.8%。该结论适用边界受限于英汉高资源语音与单主说话人场景，重叠语音、多说话人解耦与低资源语言尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 64. [声音没变意思却绕过拒绝：AJailBench 用语义守恒的信号扰动测大音频语言模型](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1259-a11c818f1b/)

> 英文题目：*[Audio Jailbreak: An Open Comprehensive Benchmark for Jailbreaking Large Audio\-Language Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1259-a11c818f1b/)*

标签：#基准测试 #基准设计 #对抗鲁棒性 #语音 #音频理解

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频理解 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1259/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1259.pdf)

👥 **作者与机构**

- Zirui Song：机构信息未能从会议 PDF 纯文本可靠映射
- Qian Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Mingxuan Cui：机构信息未能从会议 PDF 纯文本可靠映射
- Mingzhe Li：机构信息未能从会议 PDF 纯文本可靠映射
- Lang Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Zeyu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zixiang Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Yanbo Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Guangxian Ouyang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenhao Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Xiuying Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为语音形式越狱提示，输出为大型音频语言模型的文本回复，难点在于语音的时序演变与声学歧义使文本安全对齐难以直接迁移到音频通道，易被非标准发音绕过拒答机制。本文先构建AJailBench\-Base，将可绕过文本过滤的越狱文本按开放政策标注为10类后经文本到语音合成1495条多音色多口音音频提示，再以音频扰动工具包对波形域频域混合域7种变换施加语义一致性约束过滤不可懂变体，其输出的语义有效扰动空间进入树结构Parzen估计的贝叶斯优化搜索低拒答且保留意图的组合参数并叠加多轮扰动形成AJailBench\-APT\+，最后在5次独立运行下统一评测7个主流模型。与仅做文本转语音的已有音频越狱不同，本文以可组合信号级扰动加语义阈值加优化搜索构成攻击链，更贴近真实声学条件并暴露转写依赖的安全短板。在AJailBench\-Base与AJailBench\-APT\+评测下，GPT4o的ASR指标为0\.314，高于Base条件下GPT4o的0\.235。该结论适用边界限于英语多口音朗读提示与所定义的10类政策划分，跨语种鲁棒性与针对性防御尚未验证。推理采用纯音频零样本设置且不做额外微调，其硬件为每块48GB显存的GPU推理环境。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 65. [不只听懂，还要说得对：S2S\-Arena 考语音模型的副语言指令跟随](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1615-578515728c/)

> 英文题目：*[S2S\-Arena: Evaluating Paralinguistic Instruction Following in Speech\-to\-Speech Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1615-578515728c/)*

标签：#基准测试 #基准设计 #语音 #语音对话系统

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音对话系统 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1615/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1615.pdf)

👥 **作者与机构**

- Feng Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiyu Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Yiyang Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Liumeng Xue：机构信息未能从会议 PDF 纯文本可靠映射
- Fan Bu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhao Du：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangying Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Benyou Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Haizhou Li：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音到语音交互要求同时听懂输入语音中的副语言线索并在输出语音中恰当表达，而现有基准多将输出转写为文本再用文本裁判打分，因而丢失韵律、情感与说话风格等表达保真度信号。为此本文构建S2S\-Arena基准，覆盖教育、娱乐、社交与医疗四类场景与上百种任务类别，并设计四级交互协议以区分从语义理解到副语言感知与表达的递增难度。方法链分为三步：先人工编写脚本并结合语音合成、真人录制与情感语料采集种子语音查询，再经母语者人工质控形成高质量种子集，接着以语音原生自指令按模式批量扩充为大规模增强集，最后以语音原生配对比较与Elo排序完成评估。种子集输出作为示例约束进入扩充步骤以生成新样本，扩充样本再进入配对评估步骤由人类与自动裁判直接听音频判定胜负，从而全程保留音频形态。相对已有方法的关键机制差异在于不经转写而直接在语音模态下按指令对齐、副语言表达力与音频质量三准则裁判，因而能揭示转写评估无法发现的表达差距并为编码器与解码器选型提供指导。在S2S\-Arena Seed基准的人机一致性评测下，Gemini 2\.5\-Pro的一致性指标Cohen's Kappa为0\.6553，高于Qwen2\.5\-Omni的0\.4667。该结论适用边界为短轮次单查询场景，尚未验证长程人设一致性与真实噪声分布下的外推能力，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.volcengine.com/docs/6561/1594356> → <https://docs.volcengine.com/docs/6561/1594356?lang=zh> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 66. [用混沌判别器补高频：CIS\-BWE 为何同时做幅度与相位双流](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1925-b8fba1917c/)

> 英文题目：*[CIS\-BWE: Chaos\-Informed Speech Bandwidth Extension](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1925-b8fba1917c/)*

标签：#生成对抗网络 #高效推理 #多语言 #语音 #语音超分

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.6/1 | 影响力 1.0/1.5 | 开源 0.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音超分 | 主方法：#生成对抗网络

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1925/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1925.pdf)

👥 **作者与机构**

- Tarikul Islam Tamiti：机构信息未能从会议 PDF 纯文本可靠映射
- Tonmoy Das：机构信息未能从会议 PDF 纯文本可靠映射
- Nursadul Mamun：机构信息未能从会议 PDF 纯文本可靠映射
- Anomadarshi Barua：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

带宽扩展需从窄带语音恢复缺失高频以重建宽带波形，难点在于同时恢复幅度包络与不规则相位并保持自然度与可懂度，避免过平滑与闷糊伪影。该方法先将窄带波形经短时傅里叶变换分解为对数幅度与瞬时相位双流，并经卷积映射到公共隐空间形成可联合优化的表征。接着四组一维Lattice块串联建模，每块内两流各经ConformerNeXt提取局部与全局上下文，再由可学习标量交叉门控注入对方流，实现幅度与相位的可控混合。最后由幅度与相位预测头重建宽带谱并经逆变换合成波形，训练期以多分辨率李雅普诺夫判别器捕捉快速混沌发散、以多尺度去趋势分形判别器量化长程分形相关，为生成器提供保留抖动与湍流细节的对抗反馈。在英语VCTK干净集4–16 kHz评测条件下，CIS\-BWE的NISQA\-MOS为4\.24，高于AP\-BWE的3\.86。与仅用多周期与多分辨率谱判别器约束周期性的方法不同，该方法显式以李雅普诺夫指数与去趋势波动约束确定性混沌与长程相关，因而在保持包络正确的同时改善了感知自然度。该结论适用边界主要为英法朗读语音的干净与加性噪声场景，对强混响、自发对话及极低带宽外推尚未验证。训练成本为在单张RTX\-4090硬件上以批量16训练50轮、每轮约25分钟，推理开销仅用33\.74M参数生成器、GPU实时因子约0\.0025。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 67. [用非言语笑声哭声做监督：韵律如何跨到多语言言语情绪识别](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1940-6b66d51702/)

> 英文题目：*[Prosody as Supervision: Bridging the Non\-Verbal–Verbal for Multilingual Speech Emotion Recognition](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1940-6b66d51702/)*

标签：#领域适应 #韵律 #低资源 #多语言 #语音情感识别

评分：**7.2/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#领域适应

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1940/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1940.pdf)

👥 **作者与机构**

- Girish：机构信息未能从会议 PDF 纯文本可靠映射
- Mohd Mujtaba Akhtar：机构信息未能从会议 PDF 纯文本可靠映射
- Muskaan Singh：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

低资源多语言语音情感识别输入为无标注多语言言语话语，输出为happy、anger、disgust、sadness、fear共五类情感标签，难点在于情感韵律与词法音系纠缠且标注跨语言分布不均。所提NOVA\-ARC先以voc2vec等抽取帧特征并经线性投影与原点指数映射送入曲率为\-1\.0的庞加莱球，再以大小256的双曲向量量化码本离散化韵律token并经莫比乌斯加法与瓶颈融合得到帧表示。接着双曲情感透镜对融合后帧表示做可学习幂律径向强度校准与注意力池化得到话语向量，最后以源域非言语Frechet原型为锚做熵正则最优传输诱导目标域软伪标签并联合源监督与一致性正则优化。与保留相同传输与码本结构的欧氏对照相比，关键差异在于全程以双曲距离与几何操作组织层级情感结构，使原型传输与几何一致，从而减少强度错配并提升跨语料泛化。在APD NV为源、APD V为目标的评测设置下，NOVA\-ARC的准确率为92\.40，高于欧氏对照的87\.31。该结论适用边界限于表演型与朗读型语料的五类共有情感，尚未验证自发对话与重叠语音下的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://github.com/koudounasalkis/voc2vec> — 链接可访问（HTTP 200）
- 模型相关资源：<https://huggingface.co/microsoft/wavlm> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/facebook/wav2vec2> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/facebook/mms-1b> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 68. [合不合语境比像不像情绪更难：CEAEval 如何评语音表达得体性](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-411-fbda50a111/)

> 英文题目：*[Evaluating the Expressive Appropriateness of Speech in Rich Contexts](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-411-fbda50a111/)*

标签：#数据集 #模型融合 #强化学习 #语音 #语音质量评估

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.5/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音质量评估 | 主方法：#模型融合

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.411/) · [官方 PDF](https://aclanthology.org/2026.acl-long.411.pdf)

👥 **作者与机构**

- Tianrui Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Ziyang Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Yizhou Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Haoyu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhikang Niu：机构信息未能从会议 PDF 纯文本可靠映射
- Zikang Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Yihao Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Yi\-Wen Chao：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuheng Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Guanrou Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Xuanchen Li：机构信息未能从会议 PDF 纯文本可靠映射
- Hexin Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Chunyu Qiang：机构信息未能从会议 PDF 纯文本可靠映射
- Cheng Gong：机构信息未能从会议 PDF 纯文本可靠映射
- Yifan Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Tianchi Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Junyu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Nana Hou：机构信息未能从会议 PDF 纯文本可靠映射
- Meng Ge：机构信息未能从会议 PDF 纯文本可靠映射
- Fuming You：机构信息未能从会议 PDF 纯文本可靠映射
- Yang Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Zhongqian Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Hu Haifeng：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaobao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Eng Siong Chng：机构信息未能从会议 PDF 纯文本可靠映射
- Xie Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Longbiao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jianwu Dang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务输入为目标语音片段及其多轮叙事文本上下文，输出为零到五分的表现得体性分数与覆盖情感节奏语调等维度的结构化推理，难点在于长文本主导下语音信号易被淹没且得体性取决于话语意图而非孤立声学属性。为强化听觉感知先用描述模型对大规模有声书语音生成弱标注并向语音模型做知识蒸馏得到细粒度听觉骨干。蒸馏骨干冻结后由文本规划器将长上下文抽象为理想表现方案并经多上下文投票稳定，该方案与原始语音一同进入语音大模型判分器。判分器以思维链对比理想方案与实际实现并打分，辅以自适应音频注意力偏置抑制文本捷径，再用分组相对策略优化直接优化距离感知的组合奖励。与以往仅评自然度或情感强度的方法不同，该规划器判分器解耦把长文本推理与细粒度听觉打分分离，使长上下文负担转为结构化方案比较并保留可解释依据。在CEAEval基准任务下，本方法的线性相关系数的线性相关系数为0\.72，高于上下文无关基线的线性相关系数，准确率的准确率为70\.8%，高于上下文无关基线的准确率。该结论的适用边界受限于真实普通话有声书语域，跨语言自发对话与相邻语音上下文的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 69. [看完整总谱而不是猜标题：MSU\-Bench 用四级定位问答逼出文本与视觉的差距](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-493-076d025de0/)

> 英文题目：*[Musical Score Understanding Benchmark: Evaluating Large Language Models’ Comprehension of Complete Musical Scores](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-493-076d025de0/)*

标签：#基准测试 #基准设计 #音乐 #音乐理解

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音乐理解 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.493/) · [官方 PDF](https://aclanthology.org/2026.acl-long.493.pdf)

👥 **作者与机构**

- Congren Dai：机构信息未能从会议 PDF 纯文本可靠映射
- Yue Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Krinos Li：机构信息未能从会议 PDF 纯文本可靠映射
- Huichi Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Shijie Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Bo Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Enyang Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Ge Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Hongran An：机构信息未能从会议 PDF 纯文本可靠映射
- Haosen Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Peiyuan Jing：机构信息未能从会议 PDF 纯文本可靠映射
- Kinhei Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenxuan Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaobing Li：机构信息未能从会议 PDF 纯文本可靠映射
- Maosong Sun：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该基准输入为完整乐谱的PDF图像或ABC记谱文本与生成式问答，输出为开放式音乐学答案，难点在于多页全谱定位、多声部复调解析与跨小节和声曲式推理。方法链分为四步：从MuseScore收集150份完整乐谱并统一默认版式导出PDF与MusicXML转ABC，其次按起音信息到织体曲式的四级体系构造通用与曲目定制问题，再经约二十年训练经验的10名音乐博士候选人人工给出并核验1800对参考答案，最后用ChatGPT\-5、Claude Sonnet 4、Gemini 2\.5 Pro三模型多数投票的大语言模型裁判做语义等价判定。与仅覆盖片段、合成谱或选择题的前人基准相比，该设计强制要求小节级定位与完整谱推理并支持文本与视觉双通道对照。在1800题零样本单轮批量评测中，Gemini 2\.5 Pro文本总体准确率为49\.44%，显著高于视觉最优Claude Opus 4的24\.22%，揭示了模态鸿沟。结论仅适用于巴洛克到印象主义西方艺术音乐短谱到中等长度总谱的外推，视觉长谱、多乐章复杂版式与非西方记谱尚未验证。原文未披露训练、推理或部署成本之外的商业成本，仅报告评测耗时与GPU配置。

🔗 **开源资源**

- 第三方资源：<https://x.ai/news/grok-4> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 70. [先对齐再翻译：S2ST\-Omni 用分层语言感知桥接语音与大模型](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1004-b15fd2a8fb/)

> 英文题目：*[S2ST\-Omni: Hierarchical Language\-Aware SpeechLLM Adaptation for Multilingual Speech\-to\-Speech Translation](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1004-b15fd2a8fb/)*

标签：#Adapter #LoRA #大语言模型 #多语言 #语音翻译

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音翻译 | 主方法：#Adapter

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1004/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1004.pdf)

👥 **作者与机构**

- Yu Pan：机构信息未能从会议 PDF 纯文本可靠映射
- Xiongfei Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Yang Yuguang：机构信息未能从会议 PDF 纯文本可靠映射
- Jixun Yao：机构信息未能从会议 PDF 纯文本可靠映射
- Maxime Cordy：机构信息未能从会议 PDF 纯文本可靠映射
- Lei Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Jianjun Zhao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多语言语音到语音翻译需将多源语言语音直接转为目标英语语音，难点在于跨语言语义精度与合成灵活性难以兼得，且缺乏中间文本使误差分析与纠正困难。S2ST\-Omni采用组合架构，先由Whisper Large\-v3编码器提取多语言语音表征并复用其编解码做语言识别，输出送入混合适配器经步幅卷积下采样保留翻译相关帧再经Transformer建模长程语义依赖。该语义表示经语言感知双CTC门控特征调制注入声学层源语言信息，再与源语言条件提示共同进入Qwen3\-4B解码出英语文本，前端文本直接作为可插拔TTS后端的输入合成语音。与ComSpeech浅层词汇映射和端到端联合优化不同，该方法以先对齐后翻译的两阶段渐进微调先冻结大模型训练适配器再用LoRA精调，形成自下而上与自上而下双路语言偏置。在CVSS\-C基准下，S2ST\-Omni的平均BLEU指标为35\.67，高于StreamSpeech的平均BLEU指标28\.77。该结论适用边界受限于法语、西班牙语、德语到英语三个高资源方向及自动指标，低资源与多目标语言外推尚未验证且缺乏人评自然度检验。推理开销方面前端在单卡上平均延迟为703\.8毫秒，其中大模型解码约占79%而语言识别与适配器仅占约4\.2%。

🔗 **开源资源**

- 第三方资源：<https://github.com/mjpost/sacrebleu> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 71. [长语音不止读对字：SwanBench\-Speech 如何拆开声学、语义与表现力来评测](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-112-63e6093758/)

> 英文题目：*[Comprehensive Benchmarking of Long\-Form Speech Generation in Diverse Scenarios](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-112-63e6093758/)*

标签：#基准测试 #基准设计 #长音频处理 #语音 #文本到语音

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#文本到语音 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.112/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.112.pdf)

👥 **作者与机构**

- Changhao Pan：机构信息未能从会议 PDF 纯文本可靠映射
- Rui Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Han Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhuan Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Xuming He：机构信息未能从会议 PDF 纯文本可靠映射
- Wenxiang Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Ziyue Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Ruiqi Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Chenyuhao Wen：机构信息未能从会议 PDF 纯文本可靠映射
- Ke Lei：机构信息未能从会议 PDF 纯文本可靠映射
- Xiang Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Jingyu Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiyuan Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhou Zhao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

长文本语音生成以数百词文本为输入，需输出分钟级单人讲述与1\-4人多说话人对话，实际难点在于长时音色漂移与混响跳变、漏词重复幻觉及韵律断裂与情感扁平无法被短句词错率捕捉。该工作先围绕声学语义表达力三类挑战构建17个下游场景共1101个样本的测试集，经在线语料与音视频转写及大模型生成混合采集，再经去重与质量隐私过滤及人工校对形成长文本输入。接着将长语音质量解耦为音色一致性、混响一致性、声音保真度、内容准确率、韵律连贯性、表达丰富度与层次感七维自动协议，分别以滑动窗嵌入、SRMR方差、SQUIM、ASR转写与大模型打分实现量化。然后以人评偏好与平均意见分验证协议可靠性并选定Gemini3\-Pro为表达力评估器，使自动分进入跨模型对比。在对话生成基准下，真实对话的混响一致性得分为2\.73，低于闭源模型平均的3\.36。相对仅关注保真与准确的短语音基准，该机制以一致性与层次动力学刻画时序稳定性，具有定位长程退化的实际意义。该结论适用边界限于中英文分钟级朗读与播客式对话，尚未验证低资源语言方言与小时级有声书外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://pypi.org/project/clean-text> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/m-bain/whisperX> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/jfsantos/SRMRpy> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/snakers4/silero-vad> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/FunAudioLLM/Fun-ASR> → <https://github.com/QwenAudio/Fun-ASR> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 72. [流式音视频不同步、该不该开口难判断：ROMA 用对齐单元与说话头统一反应与主动](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1153-c99a119dd6/)

> 英文题目：*[ROMA: Real\-time Omni\-Multimodal Assistant with Interactive Streaming Understanding](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1153-c99a119dd6/)*

标签：#多模态学习 #实时处理 #流式处理 #音视频 #音视频交互

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：模型报告 | 主任务：#音视频交互 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1153/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1153.pdf)

👥 **作者与机构**

- Tian Xueyun：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Li：机构信息未能从会议 PDF 纯文本可靠映射
- Bingbing Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Heng Dong：机构信息未能从会议 PDF 纯文本可靠映射
- Yuanzhuo Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Huawei Shen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

流式音视频理解输入为连续到达的音频流与视频流，需同时输出被动问答回答与主动预警/旁白文本，难点在于音频稠密连续而视频稀疏离散的粒度失配，以及只能依据历史前缀实时决定是否发声。ROMA先将每1秒音频与同窗2 fps视频帧打包为同步多模态单元，并用分块时间对齐旋转位置编码延续全局时间线，再送入Omni骨干逐单元累积上下文。接着轻量发声头在每个单元输出二分类触发概率以决定是否发声，触发后才调用语言模型头生成内容，从而将时机判断与内容生成解耦并避免用静默词隐式决策的生成偏置。与仅支持被动应答或缺乏自主监控的流式基线相比，该显式触发机制保留了音频同步并支持事件预警与实时旁白，具有实际意义。在QVHighlights基准下，ROMA的mAP指标为53\.7，高于MMDuet的31\.3。该结论适用边界受限于2 fps采样、1秒决策粒度、32K上下文与短中视频，尚未验证数小时长流、音画异步与信号退化下的稳定性。训练成本为冻结编码器分两阶段在32张H20上完成，单单元编码延迟约0\.37秒、首词延迟约0\.48秒，属分块近实时而非严格双工实时。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/EurekaTian/ROMA> — 暂时无法访问
- 演示资源：<https://eureka-maggie.github.io/ROMA_show/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 73. [说话很准、唱歌就失灵：用三路特征混合守住语音又学会歌声](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1245-78905b4603/)

> 英文题目：*[A Unified Feature Mixture Framework for Joint Speech and Singing Deepfake Detection](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1245-78905b4603/)*

标签：#领域适应 #混合专家模型 #音乐 #语音 #音频深度伪造检测

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频深度伪造检测 | 主方法：#混合专家模型

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1245/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1245.pdf)

👥 **作者与机构**

- Aastha Sharma：机构信息未能从会议 PDF 纯文本可靠映射
- Guangjing Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

统一语音与歌唱伪造检测以16kHz波形为输入并输出真伪概率，歌唱中持续谐波、颤音与宽音域使纯语音训练检测器完全失效。GenuVoice先在语音池上独立预热Wav2Vec2、对数梅尔谱与MFCC三个异构专家并以辅助损失保持各自可判别性，再冻结专家主干训练门控网络与融合分类器以学习自适应加权，最后在语音与歌唱各占一半的批量上端到端微调全部可训练部件以保留语音能力并吸收歌唱线索。与强制域不变的对抗对齐不同，该方法保留域相关的谐波与韵律伪造结构并做监督下的域感知融合，避免抑制判别线索导致的负迁移。在CtrSVDD歌唱评测设置下，GenuVoice的等错误率为1\.82%，低于Wav2Vec2\-AASIST基线的37\.24%。其同时保持ASVspoof2019语音错误率为0\.38%并在完全留出的ASVspoof2021上泛化为8\.89%，消融去掉辅助监督与多样性正则会退化至3\.45%至12\.34%。其结论适用边界受限于可靠标注的受控歌唱数据，在仅138样本的SingFake野外压缩与伴奏残留条件下失败至44\.20%错误率，门控因训练分布失衡而误校准。多分支并行带来额外推理开销与计算量，延迟与内存占用高于单分支基线。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 74. [不用翻译腔造平行对话：以大纲约束换取四语可比的健康问答语音数据](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1275-4571130b8f/)

> 英文题目：*[Dial HEALTHDIAL for Advice: A Multilingual and Multi\-Parallel Spoken Dialogue Dataset for Knowledge\-Grounded Information Seeking](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1275-4571130b8f/)*

标签：#数据集 #数据集构建 #检索增强 #多语言 #语音对话系统

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音对话系统 | 主方法：#数据集构建

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1275/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1275.pdf)

👥 **作者与机构**

- Songbo Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Yinhong Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Ej Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Evgeniia Razumovskaia：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaobin Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Fraser：机构信息未能从会议 PDF 纯文本可靠映射
- Ivan Vulić：机构信息未能从会议 PDF 纯文本可靠映射
- Anna Korhonen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理多语言口语知识 grounded 信息寻求，输入为截至时刻t的对话历史与用户语音，输出为基于可信知识的文本回复及其语音形态，难点在于自然多平行口语数据稀缺且语音涉及个人可识别隐私。方法链第一步从世界卫生组织问答与事实页爬取片段并以线性分配对齐出四语言完全平行知识子集，其平行真值作为后续对话 grounding 进入下一步。接着第二步用试点对话提炼对话行为并估计转移图式，按结构采样主题与知识由大模型生成英语假想对话与每轮即兴提示。第三步由母语者按提示录音并经自动初转写加人工校对得到自然口语与人口社会语言学标注。与直接翻译相比，大纲式实现分离内容控制与表面表达，减轻翻译腔并保留方言多样性，使跨语言比较更可信。在HEALTH DIAL平行片段检索基准下，平均文本到文本检索召回指标R@10为71\.01，高于语音到文本检索的0\.34。该结论适用边界受限于世界卫生组织覆盖的假想健康咨询，尚未验证真实患者表达与临床安全性，且原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 75. [真人中文语音做考题：VCB Bench 为何要同时考听话、懂知识和抗干扰](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1659-e3c0ffe645/)

> 英文题目：*[VCB Bench: An Evaluation Benchmark for Audio\-Grounded Large Language Model Conversational Agents](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1659-e3c0ffe645/)*

标签：#基准测试 #基准设计 #多语言 #语音对话系统

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音对话系统 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1659/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1659.pdf)

👥 **作者与机构**

- Jiliang Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Wenfu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zuchao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Chenxing Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yiyang Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Hanzhao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Liqiang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Meng Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Dong Yu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音对话系统需直接以语音为输入并以自然口语语音为输出，其难点在于中文真实声学变异、口语化表达与副语言控制无法被英文合成语音基准刻画。本文构建语音聊天机器人基准（Voice Chat Bot Bench，VCB Bench），先由写手撰写任务文本并经第三方专业录制形成受控音频，再从综艺问答与双人对话长音频中切分转写形成知识问答，最后以同一说话人重录叠加说话人、环境与内容扰动形成对照组。音频到音频调用被测模型后按任务分流为直接音频评价或转写后文本评价，从而分离语义正确性与语音表现力。与既有英语中心合成语音基准的机制差异在于全真人语音加中文口语任务加物理扰动对照。代表性证据是在通用知识评测中 Qwen3\-Omni 平均得分为 66\.86，显著高于 GPT\-4o\-Audio 的 55\.81，而回声与变速等物理扰动可使 Step\-Audio 2 mini 在回声下跌至 38\.00，较对照组下降 38\.00。该结论仅适用于中文短轮语音问答与所选 9 个模型的音频接口表现，未验证长时全双工与实时延迟外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 76. [全局平均为何听不见断裂：口语模型声学评估的局部重估](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1844-a6feb3a38e/)

> 英文题目：*[On the Fallacy of Global Token Perplexity in Spoken Language Model Evaluation](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1844-a6feb3a38e/)*

标签：#评测协议 #统计分析 #主观评测 #语音 #语音属性识别

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音属性识别 | 主方法：#评测协议

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1844/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1844.pdf)

👥 **作者与机构**

- Chan\-Jan Hsu：机构信息未能从会议 PDF 纯文本可靠映射
- Liang\-Hsuan Tseng：机构信息未能从会议 PDF 纯文本可靠映射
- Yi\-Cheng Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Yen\-Chun Kuo：机构信息未能从会议 PDF 纯文本可靠映射
- Ju\-Chieh Chou：机构信息未能从会议 PDF 纯文本可靠映射
- Kai\-Wei Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Hung\-yi Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Carlos Busso：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

口语语言模型预训练评测输入为共享语音提示拼接的正负语音延续，输出为声学一致性偏好判断，难点在于全局离散token困惑度对全序列取平均使长程语义淹没转折点附近短程声学突变。该文提出似然与生成两族评测，先以转折点后0\.5s局部窗口计算局部负对数似然只聚焦分歧起始段，其输出的窗口似然进入无提示条件概率归一化以剥离语义先验。接着让模型基于语音提示真实续写，续写音频进入人类平均意见分与嵌入法官打分以验证感知保真度与延续一致性。与全局token困惑度整体平均不同，新算子只比较局部似然差异并校准基线，更符合听觉渐变性与短跨度依赖，因而强模型漏检显著减少。在SALMon基准相关性评测设置下，归一化似然评估的Pearson相关为0\.73，从0\.62升至0\.73，高于全局token困惑度基线的0\.62。该结论适用边界受限于声学一致性六个子集与预训练续写质量，尚未验证语义连贯与复合退化场景下的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 77. [多轮边听边说为何难测：用切轮与历史固定把全双工对话逐轮考住](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-263-6730e594dc/)

> 英文题目：*[MTR\-DuplexBench: Towards a Comprehensive Evaluation of Multi\-Round Conversations for Full\-Duplex Speech Language Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-263-6730e594dc/)*

标签：#基准测试 #基准设计 #模型评估 #全双工语音交互

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#全双工语音交互 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.263/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.263.pdf)

👥 **作者与机构**

- Zhang He：机构信息未能从会议 PDF 纯文本可靠映射
- Wenqian Cui：机构信息未能从会议 PDF 纯文本可靠映射
- Haoning Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiao\-Hui Li：机构信息未能从会议 PDF 纯文本可靠映射
- Lei Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Haoli Bai：机构信息未能从会议 PDF 纯文本可靠映射
- Ma Shaohua：机构信息未能从会议 PDF 纯文本可靠映射
- Irwin King：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

全双工语音语言模型（Full\-Duplex Speech Language Models，FD\-SLMs）需在重叠听说中处理打断、停顿与背景音并维持语义连贯，但已有基准多为单轮事件或只看多轮总体分，无法定位轮次退化。MTR\-DuplexBench先用Silero语音活动检测（Voice Activity Detection，VAD）加Whisper\-timestamped抽取双通道句子级片段并按起始时间排序，再由GPT\-4o按话题完结、连续语句终止与时长约束输出JSON轮次，重复采样6次后以时间重叠聚类多数投票、取起止时间中位数、过滤低票并合并残余重叠得到用户轮次，最后为每轮填充历史真值音频并将应答区间设为从当前用户轮起点至下一用户轮终点且下一用户轮静音，实现逐轮隔离评测。与仅测单轮接管或整体打分的已有基准相比，该设计把连续双工流转为可独立打分的轮次序列，并统一覆盖会话特征、对话质量、指令遵循与安全4个维度。在200组10轮合成会话与200段120秒Candor自然对话上的评测显示，Moshi平滑接管从首轮73\.00%降至10轮平均57\.40%，Freeze\-Omni从69\.00%降至36\.35%，端到端模型语义重缩放分3\.13低于半双工VocalNet的3\.96，揭示多轮衰减、组合特征压力与延迟瓶颈。该结论目前仅适用于英语朗读式合成语音与Candor式自然对话及所测2个开源全双工加2个对照系统，未验证噪声、口音大范围变化与真实用户交互下的外推性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/wwbin> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 78. [黑盒通话压碎帧级伪造痕迹：用音素级一致性守住可懂结构](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-285-47b377fd29/)

> 英文题目：*[RTCFake: Speech Deepfake Detection in Real\-Time Communication](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-285-47b377fd29/)*

标签：#数据集 #领域适应 #鲁棒性 #语音 #音频深度伪造检测

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频深度伪造检测 | 主方法：#领域适应

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.285/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.285.pdf)

👥 **作者与机构**

- Jun Xue：机构信息未能从会议 PDF 纯文本可靠映射
- Zhuolin Yi：机构信息未能从会议 PDF 纯文本可靠映射
- Yihuan Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Yanzhen Ren：机构信息未能从会议 PDF 纯文本可靠映射
- Yujie Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Cunhang Fan：机构信息未能从会议 PDF 纯文本可靠映射
- Zicheng Su：机构信息未能从会议 PDF 纯文本可靠映射
- Yongcheng Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Bo Cai：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

实时通信语音伪造检测以经黑盒传输的16 kHz语音为输入，输出真伪二分类分数，难点在于噪声抑制、回声消除、编解码与丢包等非线性处理会抹除帧级伪造痕迹且各平台失真分布差异显著。共享XLSR编码器先将配对的离线与在线语音编码为帧级声学特征序列，为跨域对齐提供统一表征基础。预训练音素识别模型接着预测音素边界并对边界内帧特征做时域平均池化，得到以语言结构单元为粒度的音素级表示并送入后端分类器。联合优化双分支交叉熵分类损失与配对音素表示间均方误差一致性损失，既保留真伪判别力又拉齐跨域结构，输出鲁棒检测分数。与帧级增强或混合训练直接拟合平台细节不同，该机制以跨场景稳定的音素结构为锚点约束不变性，因而能抑制平台特异失真并提升跨平台与噪声泛化。在RTCFake离线与在线混合评测下，音素一致性学习的等错误率为5\.81%，低于混合训练的7\.33%。该结论适用边界受限于所覆盖的7个主流平台与已定义噪声类型组合，对未见强噪声与硬件异质性等外推场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/SWivid/F5-TTS> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/fishaudio/fish-speech> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/OpenBMB/VoxCPM> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/HKUSTAudio/Llasa-3B> — 暂时无法访问
- 第三方资源：<https://github.com/index-tts/index-tts?tab=> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/SparkAudio/Spark-TTS> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/FunAudioLLM/CosyVoice> → <https://github.com/QwenAudio/CosyVoice> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/Plachtaa/seed-vc> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/resemble-ai/chatterbox> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.zoom.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://im.qq.com/index/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.wechat.com/> → <https://www.wechat.com/en> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 79. [把情绪当作首要优化目标：AffectCodec 如何在离散量化中留住情绪](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-442-df17ac44c2/)

> 英文题目：*[AffectCodec: Emotion\-Preserving Neural Speech Codec for Expressive Speech Modeling](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-442-df17ac44c2/)*

标签：#知识蒸馏 #向量量化 #语音情感识别 #语音编码 #文本到语音

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音编码 | 主方法：#知识蒸馏

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.442/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.442.pdf)

👥 **作者与机构**

- Jiacheng Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Hongfei Du：机构信息未能从会议 PDF 纯文本可靠映射
- Xinyuan Song：机构信息未能从会议 PDF 纯文本可靠映射
- Y\. Alicia Hong：机构信息未能从会议 PDF 纯文本可靠映射
- Yanfu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Ashley Gao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

神经语音编解码器需将连续波形压缩为离散 Token 供语音语言模型使用，但量化过程易抹除细微情感与韵律变化，且传统重建目标对此缺乏显式约束。本文提出 AffectCodec，先以情感语义引导的隐变量调制在量化前向声学隐变量注入情感与语义上下文，再以关系保持蒸馏约束首层量化表示复刻教师空间的成对几何结构，最后以情感加权语义对齐强化离散 Token 与文本语义的关联并突出情感变化剧烈帧。与仅优化声学重建或首层语义蒸馏的已有编解码器不同，该框架把情感完整性作为与内容和韵律并列的一级优化目标。在 EmoVoiceDB 重建评测中情感相似度达到 0\.94，超越次优基线 FACodec 的 0\.88，同时在 LibriSpeech test\-clean 上保持可比可懂度与更优感知质量。该结论主要限于英语朗读与表演性情感语音，对 NNIME 这类微妙压抑情感与强噪声泛化尚未充分验证。原文未披露训练时长、推理延迟或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 80. [无标签也要会切歌：UniVocal 用语义推断驱动说唱切换](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1452-48d93a1b88/)

> 英文题目：*[UniVocal: Unified Speech\-Singing Code\-Switching Synthesis](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1452-48d93a1b88/)*

标签：#课程学习 #音乐 #语音 #歌唱生成 #文本到语音

评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#文本到语音 | 主方法：#课程学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1452/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1452.pdf)

👥 **作者与机构**

- YuFei Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Qian Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Wen Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangang Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhen\-Hua Ling：机构信息未能从会议 PDF 纯文本可靠映射
- Yang Ai：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该文定义语音歌唱代码切换合成，输入为无标签纯文本与全局场景指令，输出为同一说话人音色下说话与歌唱自然交替的波形，难点在于无乐谱与无切换标签时需从语义推断切换点并维持音色与韵律连贯。为此先用大语言模型生成含隐式与显式触发语的多场景脚本，为切换提供语义锚点。接着用第一阶段对齐后模型以相同说话人嵌入统一合成语音与歌唱片段并经词错率过滤后拼接，形成合成训练样本。最后用两阶段课程学习与精细音分令牌交错思维链完成韵律规划与内容生成，前阶段对齐潜空间为后阶段学习切换奠定基础。与Bark式显式标签控制及单轮单模式级联生成不同，该框架仅用全局场景指令约束任务，细粒度切换完全由文本语义驱动。在SCSBench\-Mixed基准下，UniVocal的F1\(O\)指标为0\.871，高于Gemini \+ Cosy2 \+ LeVo基线的0\.607。该结论适用边界受限于合成分布内文本与偏显式线索场景，在纯隐式真实录音场景泛化明显下降，尚未验证复杂长程真实对话外推。训练成本为4张NVIDIA A800上约6天完成两阶段训练，硬件开销另含流匹配微调阶段。

🔗 **开源资源**

- 数据相关资源：<https://huggingface.co/datasets/nyuuzyou/suno> — 暂时无法访问
- 第三方资源：<https://github.com/suno-ai/bark> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 81. [毫秒级颅内信号能否把语音模型调向大脑的时间分层](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1911-9ae64500e0/)

> 英文题目：*[Temporal Precision Matters: Brain\-Tuning Speech Language Models with Millisecond\-Resolution Neural Signals](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1911-9ae64500e0/)*

标签：#SFT #语音大模型 #脑信号 #语音 #言语神经解码

评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.5/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#言语神经解码 | 主方法：#SFT

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1911/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1911.pdf)

👥 **作者与机构**

- Zhejun Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Wenqing Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Haozhe Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Lin Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Lei Li：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

针对功能磁共振约2 s积分将声学语音与高阶语言加工抹平为单一监督信号、难以定向训练的问题，该工作以词起始锁定的毫秒级皮质电图高频伽马响应为输出目标，用连续语音输入预测全时空神经活动。方法链分三步衔接：首先将词起始前30 s音频送入冻结特征提取器的语音编码器得到各层隐状态，为词级建模提供长上下文；接着对末10帧跨层拼接并均值池化形成词级向量，使上一步的帧级输出压缩为固定维表示后进入预测头；然后经线性头以均方误差拟合对应窗口内的高频伽马功率，并按语音窗口与语言窗口分开监督，使早期声学语音编码与晚期词法语义编码进入不同损失。相对已有脑调优的关键机制差异在于保留完整时空动态而非时间平均，并以约150 ms为界实现阶段靶向，使毫秒级时序结构本身成为额外训练信号。在跨被试评测设置下，句型预测任务的性能提升为31%，高于音素与情感识别任务4–7%的提升幅度。语言窗口调优在语言响应区的增益更大且下游语音理解性能未受损，表明时序分工具有实际意义。结论适用边界受限于9人约4\.5 h单播客英语听理解与1268电极临床覆盖，跨被试、跨语言与跨范式外推尚未验证，全部三架构实验的训练成本约为330 GPU小时。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 82. [语音要语义、音乐要结构：用动态容量专家缝合统一音频生成](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-412-585468c778/)

> 英文题目：*[UniMoE\-Audio: Unified Speech and Music Generation with Dynamic\-Capacity Mixture\-of\-Experts](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-412-585468c778/)*

标签：#混合专家模型 #统一音频模型 #音乐 #语音 #音频生成

评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：模型报告 | 主任务：#音频生成 | 主方法：#混合专家模型

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.412/) · [官方 PDF](https://aclanthology.org/2026.acl-long.412.pdf)

👥 **作者与机构**

- Zhenyu Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yunxin Li：机构信息未能从会议 PDF 纯文本可靠映射
- Xuanyu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Qixun Teng：机构信息未能从会议 PDF 纯文本可靠映射
- Shenyuan Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Xinyu Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Haoyuan Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Haolan Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Fanbo Meng：机构信息未能从会议 PDF 纯文本可靠映射
- Mingjun Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Yancheng He：机构信息未能从会议 PDF 纯文本可靠映射
- Baotian Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Haizhou Li：机构信息未能从会议 PDF 纯文本可靠映射
- Min Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理以文本、语音提示、视频为条件统一生成语音与音乐的任务，难点在于语义主导的语音与结构主导的音乐优化目标冲突，以及语音数据远多于音乐导致朴素联合训练被语音主导而双任务退化。方法第一步在原始非平衡语料上为普通话合成、英文合成、文本到音乐、视频到音乐分别训练四个3\.1B稠密专家以沉淀领域知识并作为原型专家与单任务基准。第二步将专家前馈网络装入基于Qwen2\.5\-VL的统一Transformer，共享注意力跨专家平均、视觉编码器继承视频到音乐专家，在约6万条平衡子集上冻结专家只训练门控做路由预热以学习分发策略。第三步在全量平衡集上解冻全模型并用线性衰减权重的负载均衡辅助损失做协同微调以兼顾路由效率与跨任务协同。相对固定Top\-K混合专家的关键差异是Top\-P路由按门控累积概率自适应决定每个词元激活1至4个专家，阈值p=0\.7，平均激活约4\.8B总量7\.1B，形成浅层密集融合深层稀疏分工以匹配词元难度。在SeedTTS\-EN语音合成评测设置下，UniMoE\-Audio的WER为1\.3，低于Unify\-Baseline的3\.1。该结论适用边界受限于10秒级短片段、中英文语音与配乐型音乐验证，长时节奏一致性与跨口音年龄克隆泛化尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 83. [能比出声音差别，却判不准是否换人：SpeakerSleuth 揭示的阈值与模态失衡](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-944-02c10765cc/)

> 英文题目：*[SpeakerSleuth: Can Large Audio\-Language Models Judge Speaker Consistency across Multi\-turn Dialogues?](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-944-02c10765cc/)*

标签：#基准设计 #音频大模型 #模型评估 #语音 #说话人验证

评分：**7.1/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.4/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#说话人验证 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.944/) · [官方 PDF](https://aclanthology.org/2026.acl-long.944.pdf)

👥 **作者与机构**

- Jonggeun Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Junseong Pyo：机构信息未能从会议 PDF 纯文本可靠映射
- Gyuhyeon Seo：机构信息未能从会议 PDF 纯文本可靠映射
- Yohan Jo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多轮对话语音合成要求同一说话人在全部轮次保持音色、音调与音质稳定，输入为目标说话人的多轮音频加一段外部参考音频，输出为一致性判决与问题定位，难点在于跨轮次细微漂移易被文本连贯性掩盖。本文构建 SpeakerSleuth 基准，先从 Bazinga、AMI、Behavior\-SD、DailyTalk 四类对话源抽取目标说话人出现多次的片段，每段固定 5 轮目标音频、总轮次不超过 20，并在段外另取至少 3 秒参考音频，再固定文本仅对随机一轮做语音转换生成完全一致（S1）、性别切换（S2）与相似说话人（S3）三种场景，接着经大语言模型（Large Language Model，LLM）连贯过滤与专家听审保留合格实例，最后用检测、定位与辨别三任务分别考察绝对判断、细粒度归因与相对排序能力。与成对相似度阈值法相比，该框架允许模型一次性审视整段对话并输出自然语言判决，更贴近真实质检流程。在主评测中 Gemini\-2\.5\-Pro 辨别分类平均准确率达 81\.5%，但检测平衡准确率仅 64\.7%，相似说话人场景检测准确率仅 39\.3%，加入他轮文本上下文后多数模型在不一致场景上大幅下降，Gemini\-2\.5\-Pro 定位 F1 在 S2 下降 54\.6 个百分点。结论仅适用于英语短对话与人工构造的不一致，在真实噪声、重叠语音与口音年龄偏差上尚未验证。原文未披露训练与部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 84. [把合成语音调到输入端：MimicLM 用真录音做目标的声音模仿](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1020-b3667b2a36/)

> 英文题目：*[MimicLM: Zero\-Shot Voice Imitation through Autoregressive Modeling of Pseudo\-Parallel Speech Corpora](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1020-b3667b2a36/)*

标签：#自回归模型 #偏好优化 #零样本 #语音转换

评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音转换 | 主方法：#自回归模型

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1020/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1020.pdf)

👥 **作者与机构**

- Tao Feng：机构信息未能从会议 PDF 纯文本可靠映射
- Yuxiang Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuancheng Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xueyao Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Dekun Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Chaoren Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xun Guan：机构信息未能从会议 PDF 纯文本可靠映射
- Zhizheng Wu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音模仿需以源语音内容为输入生成匹配参考说话人音色与说话风格的目标语音，难点在于同内容跨说话人平行三元组稀缺且音色韵律联合转换易损害可懂度。为此该工作先用零样本语音合成跨说话人重合成相同文本构造伪平行对，再经角色互换将合成语音作源、同一说话人另一段真实录音作参考、原始真实录音作目标，使模型直接拟合真实分布。接着模型以分块交错方式预测文本与音频码提供内容锚点，再在连续阶段生成剩余音频码以完成长时建模。随后其以多目标帕累托优选构造偏好对并做直接偏好优化，缩小合成作源与真实输入间的分布差距并提升可懂度。相比以合成语音为目标的方法，该设计避免合成质量上限，相比复杂解耦架构则以统一自回归建模简化了系统并改善参考目标一致性。在SeedTTS test\-vc\-en评测下，MimicLM\-DPO的UTMOS为3\.22，高于Vevo的2\.83，且其词错误率为8\.25%，低于Vevo的9\.10%。该结论适用边界受限于英语长句客观评测与相似度指标，在强口音与复杂情感外推上尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://huggingface.co/nvidia/frame_vad_> — 暂时无法访问
- 第三方资源：<https://github.com/microsoft/DNS-Challenge> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/sarulab-speech/UTMOSv2> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/BytedanceSpeech/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/ddlBoJack/emotion2vec> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 85. [编号保住谁是谁：PolyAudio 用交错上下文做五段内跨音频对证](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2101-3caa666b75/)

> 英文题目：*[PolyAudio: Advancing Multi\-Audio Reasoning in Large Audio Language Models with Interleaved Multi\-Audio Contexts](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2101-3caa666b75/)*

标签：#基准测试 #数据集 #指令微调 #音频大模型 #音频问答

评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：模型报告 | 主任务：#音频问答 | 主方法：#指令微调

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.2101/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.2101.pdf)

👥 **作者与机构**

- Sonal Kumar：机构信息未能从会议 PDF 纯文本可靠映射
- Sreyan Ghosh：机构信息未能从会议 PDF 纯文本可靠映射
- Yueqian Lin：机构信息未能从会议 PDF 纯文本可靠映射
- S Sakshi：机构信息未能从会议 PDF 纯文本可靠映射
- Ashish Seth：机构信息未能从会议 PDF 纯文本可靠映射
- Yiran Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Ramani Duraiswami：机构信息未能从会议 PDF 纯文本可靠映射
- Dinesh Manocha：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理交错多音频文本理解，输入为2至5个离散音频片段加自然语言问题，输出为需跨片段比对链接聚合才能得到的答案，难点在于声学细微差异稀疏分布且“第二个片段”等指代表述高度歧义。为此先聚合开源声音语音音乐语料并用合成语音扩充可控冲突样本，为跨片段问答提供素材基础。接着交错合成引擎将孤立标注转化为跨片段问答对并注入显式片段编号与边界符，其输出直接构成指令微调数据。最后在Audio Flamingo 3基座上做指令微调以学习联合推理，该调优模型即为最终评测对象。与直接拼接音频或先字幕后融合不同，该设计保留每片段独立音频词块并由注意力做联合推理，避免细节瓶颈与边界模糊。在PolyAudio\-Bench基准下，PolyAudio的平均准确率为73\.5%，高于Qwen2\-Audio的45\.1%。结论适用边界受限于至多5片段的学术合成分布，对自然多源重叠长时检索与更多片段外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.boson.ai/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 86. [把扩散解码做实：DIFFA\-2 如何用双适配与四阶段课程补齐音频理解](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-235-33f8f477cd/)

> 英文题目：*[DIFFA\-2: A Practical Diffusion Large Language Model for General Audio Understanding](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-235-33f8f477cd/)*

标签：#扩散模型 #音频大模型 #语音识别 #音频问答

评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：模型报告 | 主任务：#音频问答 | 主方法：#扩散模型

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.235/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.235.pdf)

👥 **作者与机构**

- Jiaming Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Xuxin Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Shiwan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhang Jia：机构信息未能从会议 PDF 纯文本可靠映射
- Cao Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Ke Zeng：机构信息未能从会议 PDF 纯文本可靠映射
- Xunliang Cai：机构信息未能从会议 PDF 纯文本可靠映射
- Yong Qin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

通用音频理解需要从语音、环境声和音乐混合输入回答语义、音系和副语言问题，难点在于高质量音频文本监督稀缺且自回归解码延迟高。本文以冻结 Whisper\-Large\-V3 编码器提取声学特征，经语义适配器做降采样对齐与声学适配器做查询压缩后送入 LLaDA\-8B\-Instruct 骨干，先做转写对齐再联合对齐声学线索，随后用低秩适配微调骨干并以方差缩减偏好优化精化，最后用基于因子的并行解码加速推理。与冻结骨干的 DIFFA 相比，该链条把声学建模、指令跟随与偏好对齐解耦到不同阶段，使扩散双向去噪能复用有限数据。在 MMAU Test\-mini 平均准确率上 DIFFA\-2 达到 69\.60，超过 Qwen2\.5\-Omni 的 65\.20 和 Kimi\-Audio 的 68\.20，MMSU 总体 60\.45 亦领先同尺寸开源模型。结论限于离线语音到文本理解，未验证语音生成、流式与全双工外推，三路混合与对话式指令场景仍明显落后。训练使用约 11000 小时自动语音识别数据加 3767 小时监督微调数据加约 3000 偏好对，仅更新约 99M 参数，占 8\.77B 总参数的 1\.1%。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 87. [一句之内换情绪又变语速：不训练模型只改推理时条件访问](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1077-d0108fc78b/)

> 英文题目：*[TED\-TTS: Training\-Free Intra\-Utterance Emotion and Duration Control for Text\-to\-Speech Synthesis](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1077-d0108fc78b/)*

标签：#测试时自适应 #零样本 #语音 #文本到语音

评分：**7.0/10** | 创新 1.6/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#文本到语音 | 主方法：#测试时自适应

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1077/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1077.pdf)

👥 **作者与机构**

- Qifan Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuansen Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Ruixin Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Nan Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Junchuan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Ye Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为含2至3个情感段的原始文本与分段情感及语速目标，输出为一次连续生成的语音，难点在于自回归语义流无显式边界且情感条件易串扰、局部变速易导致提前终止。方法先由微调后Qwen3\-8B将原文解析为情感描述与时长对，其输出直接作为后续条件调度的分段依据。接着以二维因果掩码隔离各段情感条件可见性并保持全文语义可见，使各段只受自身情感约束。然后单调流对齐在线跟踪语义与文本位置以调度掩码切换，局部时长嵌入转向与全局EOS偏置协同控制段内配速与整句终止。相对分段独立合成再拼接已有方法，该机制在单次解码中实现平滑过渡并保留全局连贯，避免拼接断裂与说话人漂移。在英文语音提示情感控制评测下，本方法的DNSM指标为3\.925，高于基线IndexTTS2的DNSM指标3\.871。其适用边界受限于IndexTTS2类自回归文本到语义结构、7类预设情感与中英两语，尚未验证渐进式情感轨迹与更细粒度时长外推。推理开销方面，从S1到S3自回归阶段延迟在英文上增加13\.4%且在中文上增加14\.7%，仍保持实时性能。

🔗 **开源资源**

- 第三方资源：<https://github.com/index-tts/index-tts> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/SWivid/F5-TTS> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/SparkAudio/Spark-TTS> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/FunAudioLLM/CosyVoice?tab=> → <https://github.com/QwenAudio/CosyVoice?tab=> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/openai/> — 暂时无法访问
- 第三方资源：<https://huggingface.co/funasr/paraformer-zh> — 暂时无法访问
- 第三方资源：<https://github.com/fcumlin/DNSMOSPro> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/gabrielmittag/NISQA> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/microsoft/DNS-Chall> — 链接不可用（HTTP 404）
- 第三方资源：<https://openai.com/index/hello-gpt-4o/> — 链接可访问（HTTP 200）
- 第三方资源：<https://api-docs.deepseek.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 88. [听觉不只听声：用多模态线索合成细粒度音频描述](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1285-26dc16a806/)

> 英文题目：*[Towards Fine\-grained Audio Captioning with Multimodal Contextual Fusion](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1285-26dc16a806/)*

标签：#数据集 #多模态学习 #音频字幕生成 #音频检索

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频字幕生成 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1285/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1285.pdf)

👥 **作者与机构**

- Shunian Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Xinyuan Xie：机构信息未能从会议 PDF 纯文本可靠映射
- Zheshu Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Owen Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Liyan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Zhan Su：机构信息未能从会议 PDF 纯文本可靠映射
- Qilin Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Benyou Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频字幕生成（Audio Captioning）需从10秒复杂混合音频输出忠实细致的自然语言描述，难点在于多声源交织、语音与音乐属性难辨以及纯音频线索常欠定。本文构建离线两阶段流水线，先由四个专用专家并行抽取语音、音乐、通用声音与视频上下文，再由推理模型综合为纯音频描述，与仅用稀疏标签或浅层视听线索的已有自动化方法形成对照。融合模块执行解析、听觉事实初判、条件性视觉纠正、歧义推理与可靠性评估，输出限定格式的纯音频字幕与听觉歧义，过滤器再用CLAP（对比语言音频预训练）余弦相似度剔除幻觉样本。经该流程构建的FusionAudio\-1\.2M在AudioCaps测试集文本到音频召回率R@1达到44\.3%，超越1\.5M至1\.9M规模基线数据集训练的同结构模型；在15项理解任务上FusionAudio\-high在逆境声学与细粒度组超越Gemini\-2\.5\-Pro与GPT\-4o\-Audio。该结论限于短片段英文音频与AudioSet来源分布，对长音频、多语言及强噪声外推尚未验证。原文仅披露离线构建成本，未披露训练推理部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 89. [口语不流利、说话人各异还要随时切语音文字：RealTalk\-CN 如何测任务对话](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-131-bec843681a/)

> 英文题目：*[RealTalk\-CN: A Realistic Chinese Speech Task\-Oriented Dialogue Benchmark with Cross\-Modal Analysis](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-131-bec843681a/)*

标签：#数据集 #基准设计 #鲁棒性 #语音 #语音对话系统

评分：**7.0/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音对话系统 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.131/) · [官方 PDF](https://aclanthology.org/2026.acl-long.131.pdf)

👥 **作者与机构**

- Enzhi Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaming Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhang Jia：机构信息未能从会议 PDF 纯文本可靠映射
- Aobo Kong：机构信息未能从会议 PDF 纯文本可靠映射
- Qicheng Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yong Qin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务型对话 Task\-Oriented Dialogue / TOD 要求模型在多轮交互中理解用户意图并抽取槽位以完成订餐问路等目标，中文自发语音场景的难点在于重复犹豫自我修正与语气词拖长等不流利、年龄与地域口音变异，以及语音与文本在轮次间的自然切换。数据建设先按口语语法编写覆盖 58 个域、115 个槽位的多域脚本并预留约 10% 自然不流利，再由真人即兴对读并用专业麦克风与智能手机双路在安静室内录制，随后做话轮级时间戳对齐与意图槽位、不流利类型、说话人属性的多层标注与质检，最后划分出标准对话、跨模态对话与鲁棒性对比三类评测流。与纯文本的 MultiWOZ、CrossWOZ、RiSAWOZ，单轮的 SLURP、CATSLU，以及英文语音的 SpokenWOZ 相比，该链条以真人非合成语音保留韵律与口音，并将逐轮语音文本交替作为显式任务，更贴近车载与客服场景。在 RealTalk\-CN 测试集上，流水线 Whisper\-large\-v3 加 GPT\-4o 在多域口语意图分类准确率达 53\.56，显著高于 GPT\-4o\-Audio\-mini 的 46\.31，而槽位填充联合目标准确率 Joint Goal Accuracy / JGA 方向反转，GPT\-4o\-Audio\-mini 以 31\.93 高于流水线的 26\.09，表明粗粒度语义理解与细粒度抽取存在分化。结论仅适用于中文客服问询类朗读加即兴混合语音，对强噪声远场全双工打断及未覆盖地区口音的外推尚未验证。数据建设投入约 3\.5 万美元，训练推理部署成本未披露。

🔗 **开源资源**

- 数据相关资源：<https://huggingface.co/datasets/BAAI/RealTalk-CN> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 90. [把医学知识先教给文字大脑，再用少量语音对齐：SpeechMedAssist 的两阶段医疗问诊适配](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1428-f27677351e/)

> 英文题目：*[SpeechMedAssist: Efficiently and Effectively Adapting Speech Language Models for Medical Consultation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1428-f27677351e/)*

标签：#医疗音频 #数据集 #领域适应 #语音 #语音对话系统

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音对话系统 | 主方法：#领域适应

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1428/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1428.pdf)

👥 **作者与机构**

- Sirry Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Jieyi Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Zhongyu Wei：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理语音输入到语音与文本输出的多轮医疗问诊任务，难点在于通用语音语言模型缺乏医学知识与医师级问诊技能，而医疗语音数据稀缺使直接用语音微调整体模型低效昂贵。方法第一步在约405k条重写后的文本医学对话上冻结语音编码器与适配器，只训练大语言模型核心以注入覆盖49个科室的知识与多轮问诊能力。第一步得到的文本空间医疗模型进入第二步，用合成的约198k条语音对话解冻语音适配器与语音解码器做模态重对齐，且保持语音与文本一比一混合以动态纠正知识并防止文本能力退化。相对单阶段纯语音微调，关键差异是将知识学习留在语音文本共享语义空间，仅用少量语音纠正模态漂移，因而能以小量合成语音实现高效迁移并保留通用领域知识。在MedDG文本多轮问诊评测任务下，SMA\-Stage II的平均得分为8\.32，高于LLaMA\-Omni2的7\.89。该结论适用边界受限于中文普通科室模拟问诊与合成语音条件，对多模态体征、方言重口音及真实高风险决策尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 91. [听出自然：用多轮语音偏好同时学韵律与口语风格](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-185-3cfde9227a/)

> 英文题目：*[SDiaReward: Modeling and Benchmarking Spoken Dialogue Rewards with Modality and Colloquialness](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-185-3cfde9227a/)*

标签：#基准测试 #数据集 #偏好优化 #语音对话系统

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音对话系统 | 主方法：#偏好优化

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.185/) · [官方 PDF](https://aclanthology.org/2026.acl-long.185.pdf)

👥 **作者与机构**

- Jingyu Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhan Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Fan Zhuo：机构信息未能从会议 PDF 纯文本可靠映射
- Xize Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Changhao Pan：机构信息未能从会议 PDF 纯文本可靠映射
- Xueyi Pu：机构信息未能从会议 PDF 纯文本可靠映射
- Yifu Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Chenyuhao Wen：机构信息未能从会议 PDF 纯文本可靠映射
- Tianle Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhou Zhao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理多轮口语对话奖励建模，输入为上下文轮与候选末轮组成的交错语音文本序列，输出为条件于评价准则的标量奖励，难点在于韵律情感等副语言信息不可文本化且自然口语偏好短碎与交互标记。方法先从野外与半野外及剧本音频构建真实对合成配对以监督模态感知，再用同声学配置下书面体对口语改写配对以隔离口语化风格，随后以多模态大模型骨干直接编码交错语音文本序列并经池化与打分头输出奖励。最后用Bradley\-Terry损失加中心正则学习域内相对排序，前步配对提供监督信号进入骨干训练，而池化表示进入打分头形成可校准奖励。与级联转写评测及通用音频裁判相比，该机制差异在于保留连续声学与上下文韵律并以准则提示分解模态与口语化边界，避免离散文本瓶颈丢失副语言细微差别。在ESDR\-Bench基准下，SDiaReward\-7B的Micro准确率为96\.61%，高于Gemini 2\.5 Pro的72\.63%。同时口语化任务保持高位且域内分布存在偏移，结论适用边界限于英语多轮对话与所用合成引擎分布，对未见高保真对话合成与强噪声域的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/huggingface/trl> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/Anjok07/ultimatevocalremovergui> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 92. [长描述后半段为何失效：FIGMA 以全局加帧级双视角找回速度与和弦](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2197-19db600408/)

> 英文题目：*[FIGMA: Towards FIne\-Grained Music retrievAl](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2197-19db600408/)*

标签：#数据集 #对比学习 #音乐 #音乐文本检索

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐文本检索 | 主方法：#对比学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.2197/) · [官方 PDF](https://aclanthology.org/2026.acl-long.2197.pdf)

👥 **作者与机构**

- Nishit Anand：机构信息未能从会议 PDF 纯文本可靠映射
- Ashish Seth：机构信息未能从会议 PDF 纯文本可靠映射
- Sreyan Ghosh：机构信息未能从会议 PDF 纯文本可靠映射
- Dinesh Manocha：机构信息未能从会议 PDF 纯文本可靠映射
- Ramani Duraiswami：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

细粒度音乐检索以包含速度、调性、和弦进行与节拍数等精确参数的自然语言查询为输入，以匹配的10秒音乐片段为输出，难点在于CLAP类模型将长描述压缩为单一向量而仅利用前部词元、丢弃后部细节。FIGMA先以冻结的MuQ音频编码器与Multilingual E5 Large Instruct文本编码器分别抽取帧级音频特征与词元级文本特征。其输出再经轻量Transformer投影映射到512维共享空间得到全局与细粒度嵌入。接着以全局InfoNCE损失与帧级最大相似度对比损失按权重联合优化，使粗细两种粒度同时对齐。与已有方法仅做均值池化与特殊词元汇总的关键机制差异在于保留时序与词元粒度并显式做帧词对齐，其实质意义是让速度与调性等细属性直接参与判别而非被平均淹没。在FMACaps\-Eval基准下，FIGMA的文本到音频检索R@1指标为13\.00，高于CLAMP 3的07\.50。该结论的适用边界受限于英文客观单句描述与10秒片段检索，对多语言、主观表达与长结构乐曲尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://nishitanand.github.io/figma-website> → <https://nishitanand.github.io/figma-website/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 93. [边听边想：SHANKS 用分块未说出推理实现中途打断与提前工具调用](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-404-c661640a92/)

> 英文题目：*[Shanks: Simultaneous Hearing and Thinking for Spoken Language Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-404-c661640a92/)*

标签：#SFT #流式处理 #语音 #全双工语音交互

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#全双工语音交互 | 主方法：#SFT

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.404/) · [官方 PDF](https://aclanthology.org/2026.acl-long.404.pdf)

👥 **作者与机构**

- Cheng\-Han Chiang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaofei Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Linjie Li：机构信息未能从会议 PDF 纯文本可靠映射
- Chung\-Ching Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Kevin Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Shujie Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhendong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengyuan Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Hung\-yi Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Lijuan Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

口语交互输入为流式语音而输出要求及时打断与低延迟应答，传统口语语言模型仅在用户整轮结束后才思考行动。SHANKS即同步听思框架将用户语音按固定时长分块，每收到一块即基于全部历史语音块与历史思考块生成一段不发声思考块，该思考可携带打断标记或应用程序接口调用并与下一块用户语音并行生成，尾轮再结合完整上下文生成可发声回复。与先听后想再说方法的关键差异是把推理与行动前移到听的过程中并用交错序列建模部分可观察输入。在1280正确加1140错误的GSM8K衍生口语数学评测中，端到端版错误子集打断率84\.8%、有效打断率63\.9%、中断延迟5\.08秒；在500实例平均需5\.1次调用的ComplexFuncBench口语化评测中，56\.9%的真实调用在用户说话期间完成，轮后生成token从313降至54。该结论依赖较长且信息可顺序增量解析的查询，对短句和中途修正较多的语音适用性有限。原文未折算真实解码与工具执行延迟，未微调发声器。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 94. [说什么与何时说分开评：面向全双工对话的双轴生成式奖励模型](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-6-01a4e7132e/)

> 英文题目：*[Dual\-Axis Generative Reward Model Toward Semantic and Turn\-taking Robustness in Interactive Spoken Dialogue Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-6-01a4e7132e/)*

标签：#数据集 #知识蒸馏 #强化学习 #全双工语音交互 #轮次切换

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#全双工语音交互 | 主方法：#强化学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.6/) · [官方 PDF](https://aclanthology.org/2026.acl-long.6.pdf)

👥 **作者与机构**

- Yifu Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Shengpeng Ji：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengqing Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Qian Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Wen Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Ziqing Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yangzhuo Li：机构信息未能从会议 PDF 纯文本可靠映射
- Tianle Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhou Zhao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

全双工口语对话模型需同时解决说什么与何时说，输入为双通道音频交互，输出为整体二值质量分与语义和轮次分项解释，难点在于重叠、打断与长暂停交织下自动指标只看计时或计数而失语义。方法链分三步：先以交互事件识别、说话人分离标注与带时间戳转写做感知接地，再用 Gemini\-2\.5\-Pro 基于文本元数据蒸馏 2670 条解耦思维链学习语义相关性与交互流畅性推理，最后以 GRPO 在合成加少量真实数据上优化格式与二分类准确率奖励。相对预言对齐（Oracle\-aligned）代理与行为统计代理，其差异在于生成式双轴推理同时给出可解释诊断与单一奖励，兼顾内容与时机。在 44 例真实人机测试集上模型准确率达 77\.27%，高于 GPT\-4o 的 68\.18% 与 Gemini\-2\.5\-Pro 的 61\.36%，但在 53 例真实人人集上以 86\.79% 落后于 GPT\-4o 的 92\.45%。适用边界限于英语双人对话与 6 类预设错误，对多方、噪声与多语言外推未经验证。原文未披露训练时长、推理采样与部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 95. [噪声下转写为何失效：把语音识别改写为语义引导的重建](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-730-de231e04e2/)

> 英文题目：*[Listening Like Humans: Semantics\-Guided Noise\-Robust Multimodal Speech Recognition](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-730-de231e04e2/)*

标签：#多模态学习 #鲁棒性 #语音 #语音识别

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.3/1.5 | 清晰度 0.9/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.4/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.730/) · [官方 PDF](https://aclanthology.org/2026.acl-long.730.pdf)

👥 **作者与机构**

- Yan Fang：机构信息未能从会议 PDF 纯文本可靠映射
- Jun Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yian Yao：机构信息未能从会议 PDF 纯文本可靠映射
- Shuxin Zhong：机构信息未能从会议 PDF 纯文本可靠映射
- Min Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Kaishun Wu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理强噪声下带噪语音到文本转写的映射，难点在于韵律与音素边界溶解导致语言学结构坍塌、关键词被掩蔽导致语义歧义、音频与视觉语谱图与文本线索时序错位且互相冲突。方法链为语义引导重构：认知结构提取器先由短时傅里叶变换与梅尔滤波得到对数梅尔语谱图，经音素级与音节级两路空洞卷积与原谱拼接成三通道图像，再沿时间切块送入基于联合嵌入预测架构的ViT\-L/16视觉编码器，以上下文编码器预测被掩蔽块潜表示恢复结构骨架；语义编织器调用Qwen2\-Audio\-7B\-Instruct对同一段噪声语音生成N个意图保持的改写假设，以原始语音识别转写为查询对改写集做词级交叉注意力，提炼与表层措辞无关的语义共识；检索引导融合学习器以预训练音频编码器时序嵌入为查询，以投影后文本与视觉嵌入拼接的多模态记忆为键值做多头交叉注意力加残差层归一化，再由门控网络自适应加权注意力输出与原始音频嵌入，最后由认知解码器自回归生成转写。与增强前端净化波形或单音频微调相比，该范式不追求信号级去噪而是跨模态补齐缺失意义。在Noizeus 0 dB上词错率从最强微调基线13\.07%降至4\.00%，相对下降69\.4%，5 dB与10 dB分别达0\.41%与0\.00%，CHiME\-4真实远场测试集从16\.71%降至13\.09%，VB\-DEMAND噪声子集从2\.53%降至1\.77%，GigaSpeech\-ESC50 0 dB从18\.54%降至15\.84%，论文汇总称平均词错率下降38\.85%，语义指标BERTScore达98\.71%、USE达96\.7%量级。该结论限于已评测的远场、家庭口音、合成失真与环境声混合分布，严重掩蔽的罕见词仍可能被文本先验归一化替代。单卡延迟与Qwen2\-Audio量级相当，维持每秒音频不足1秒处理的近实时水平，但改写生成带来额外开销。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 96. [一个模型说四种话：POWSM 把语音、文字和音标放在同一解码器里](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-813-8c40e91d6c/)

> 英文题目：*[POWSM: A Phonetic Open Whisper\-Style Speech Foundation Model](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-813-8c40e91d6c/)*

标签：#多任务学习 #语音学与音系 #多语言 #语音 #语音识别

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：模型报告 | 主任务：#语音识别 | 主方法：#多任务学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.813/) · [官方 PDF](https://aclanthology.org/2026.acl-long.813.pdf)

👥 **作者与机构**

- Chin\-Jou Li：机构信息未能从会议 PDF 纯文本可靠映射
- Kalvin Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Shikhar Bharadwaj：机构信息未能从会议 PDF 纯文本可靠映射
- Eunjung Yeo：机构信息未能从会议 PDF 纯文本可靠映射
- Kwanghee Choi：机构信息未能从会议 PDF 纯文本可靠映射
- Jian Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- David R\. Mortensen：机构信息未能从会议 PDF 纯文本可靠映射
- Shinji Watanabe：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音素级建模需要同时处理语音声学证据、国际音标 International Phonetic Alphabet / IPA 音素序列与正字法 grapheme 三种表示，其难点在于跨语言音位 inventory 不一致、宽式训练标签与窄式评测错位以及低资源语言声字映射稀疏。本文提出语音基础模型 Phonetic Open Whisper\-Style Model / POWSM，先将大规模语音识别语料 IPAPack\+\+ 的文本经字音转换生成音素标注，再按统一提示格式组织四任务样本，接着用音素监督的混合联结时序分类 Connectionist Temporal Classification / CTC 与注意力编码器解码器 Attention\-based Encoder\-Decoder / AED 联合训练，最后以任务与语言 token 控制解码输出窄式或规范式转写。与同数据 ZIPA 相比的关键机制差异在于解码器承担跨语言音位序列语言模型角色，而编码器只学习去超音段的细粒度音素表示。在未见语言组合评测上模型平均音素特征错误率 Phonetic Feature Error Rate / PFER 为 18\.71，低于 ZIPA 系列约 19\.0 的水平并同时支持低资源语音识别与音频引导转换。该结论在声调语言、强口音自发语音及超长话语上尚未充分验证，对训练分布外音系仍偏向高资源语言。模型以约 200 个 H100 GPU 小时完成训练，推理采用波束搜索因而慢于纯编码器方案。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/anyspeech> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/KoelLabs> — 暂时无法访问
- 第三方资源：<https://www.lexilogos.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://punjabi.indiatyping.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 97. [把音色和韵律拆开再拼回去：DisCo\-Speech 的两阶段解耦与独立控制](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-863-adf7a76499/)

> 英文题目：*[DisCo\_Speech: Controllable Zero\-Shot Speech Generation with A Disentangled Speech Codec](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-863-adf7a76499/)*

标签：#向量量化 #零样本 #文本到语音 #语音克隆

评分：**7.0/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.9/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#文本到语音 | 主方法：#向量量化

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.863/) · [官方 PDF](https://aclanthology.org/2026.acl-long.863.pdf)

👥 **作者与机构**

- Tao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Wenshuo Ge：机构信息未能从会议 PDF 纯文本可靠映射
- Zhichao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zihao Cui：机构信息未能从会议 PDF 纯文本可靠映射
- Yong Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Yingying Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Chao Deng：机构信息未能从会议 PDF 纯文本可靠映射
- Shilei Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Junlan Feng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

可控零样本语音生成需以目标文本为输入，同时接受韵律提示与音色提示，输出目标音色承载目标韵律的波形，难点在于常规编解码器将音色与韵律纠缠使续写式语言模型连带复制提示音色。DisCo\-Speech先以三路并行编码器将语音解耦为内容、韵律与全局音色，并以混合监督约束保证解耦纯度。接着冻结编码器，将内容与韵律量化嵌入求和后再重整量化为统一内容韵律令牌，并联合优化基于Transformer加BigVGANv2的解码器以缓解解耦重建权衡。然后单Transformer语言模型根据文本与韵律提示自回归续写内容韵律令牌，解码器再以目标音色为条件重建波形，从而把韵律建模与音色注入分置两侧。相对已有声学或语义声学编解码器，该机制在编解码器层解决纠缠，使单流令牌即无音色，实际意义是实现跨说话人风格迁移的独立可控。在SEED\-TTS\-Eval评测下，DisCo\-Speech的WER为3\.01，低于Llasa\-1B的3\.22。该结论适用边界受限于常规朗读与中等风格化，对高度夸张情绪与跨性别强迁移尚未验证，需谨慎外推。训练成本对应编解码器在硬件8卡NVIDIA A800上训练500k步与语言模型训练8轮，推理开销为自回归令牌生成加声码器合成。

🔗 **开源资源**

- 演示资源：<https://disco-speech.github.io/DisCo-demo/> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/Qwen/Qwen2.5-1.5B> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 98. [多人对话视频看似逼真却接不上话：MTAVG\-Bench 如何逐层诊断结构性失败](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-913-de41c69aa8/)

> 英文题目：*[MTAVG\-Bench: A Diagnostic Benchmark for Multi\-Talker Dialogue\-Centric Audio\-Video Generation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-913-de41c69aa8/)*

标签：#基准测试 #基准设计 #人类参与评测 #音视频 #音视频生成

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频生成 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.913/) · [官方 PDF](https://aclanthology.org/2026.acl-long.913.pdf)

👥 **作者与机构**

- Yanghao Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Haitian Li：机构信息未能从会议 PDF 纯文本可靠映射
- Rexar Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Heyan Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Jinxing Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Changsen Yuan：机构信息未能从会议 PDF 纯文本可靠映射
- Tian Lan：机构信息未能从会议 PDF 纯文本可靠映射
- Ziqin Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Yudong Li：机构信息未能从会议 PDF 纯文本可靠映射
- Jiajun Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Jingyun Liao：机构信息未能从会议 PDF 纯文本可靠映射
- YiMing Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Xuefeng Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Xian\-Ling Mao：机构信息未能从会议 PDF 纯文本可靠映射
- Yousheng Feng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为包含场景语境与说话人属性的结构化对话提示，输出为带同步语音的多人对话视频，难点在于身份漂移、轮次错乱与音画错位等结构性失败无法被通用画质指标捕捉。方法先由大语言模型将情感对话改写为影视级提示并驱动商用与开源系统合成三千余条8秒至15秒视频，为失败挖掘提供多样候选。接着由21人标注池经三人独立标注与专家裁决确认约1\.8k条失败视频并映射到4层9维37类体系，使原始视频转化为结构化失败标签。最后按失败类型生成单选与多选及成对比较问答并经双轮复核形成约2\.4k对诊断题，用维度平均分协议评估生成器与评测器，使标签直接转化为可测问题。与仅测通用事件保真与同步的已有基准不同，该基准以失败为中心逐维追问谁在说与何时说，因而能暴露高画质下的社交不一致。在基准的人工评估设置下，Sora2的平均得分为73%，高于VEO 3\.1的平均得分67%。该结论适用边界受限于所采提示分布与所用生成器失败分布，尚未验证对未见生成器与长时叙事的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 99. [从认字到推旋律：BoYaEval 揭示多模态大模型读不懂古谱组合逻辑](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-997-ca508722bd/)

> 英文题目：*[BoYaEval: Evaluating Multimodal Large Language Models on Understanding Ancient Chinese Musical Scores](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-997-ca508722bd/)*

标签：#基准测试 #基准设计 #多模态模型 #音乐理解

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音乐理解 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.997/) · [官方 PDF](https://aclanthology.org/2026.acl-long.997.pdf)

👥 **作者与机构**

- Jiajia Li：机构信息未能从会议 PDF 纯文本可靠映射
- Weizhi Xue：机构信息未能从会议 PDF 纯文本可靠映射
- Yao Yao：机构信息未能从会议 PDF 纯文本可靠映射
- Qiwei Li：机构信息未能从会议 PDF 纯文本可靠映射
- Chenchong：机构信息未能从会议 PDF 纯文本可靠映射
- Zuchao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Ping Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Hai Zhao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为保留纸张老化与洇墨噪声的古谱切片图像，输出为符号结构选择题答案、演奏技法指令文本与旋律对应选项，难点在于单字同时压缩指法弦位与音高且版式非线性并伴随长尾复合字形。首先由三位音乐学专家从珍稀谱本裁剪图像并交叉核对曲谱文献达成金标准，使原始噪声与稀有组合直接进入题库，随后按结构解析与指令翻译与旋律推理三层构造题目并形成选择与生成答案，最后以零样本与少样本提示调用二十一种多模态大模型作答并用准确率与BLEU与BERTScore自动评分。与面向西方五线谱的光学乐谱识别只做视觉转录不同，该工作强制要求从字形解码到可执行动作再到旋律推导的跨表征映射，因而能检验组合推理而非表面记忆。在BoYaEval基准下，Gemini 2\.5 Pro Thinking的准确率为30\.18%，高于GPT\-5的20\.87%。该结论的适用边界仅限于图像到符号文本的离散评测，在可听化演奏与音频一致性上尚未验证且推理链易走结构捷径。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 100. [偏好只改文字、锚定稳住声音：WavAlign 的模态分工混合后训练](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-114-e1360a54c1/)

> 英文题目：*[WavAlign: Enhancing Intelligence and Expressiveness in Spoken Dialogue Models via Adaptive Hybrid Post\-Training](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-114-e1360a54c1/)*

标签：#强化学习 #SFT #后训练 #语音 #语音对话系统

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音对话系统 | 主方法：#强化学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.114/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.114.pdf)

👥 **作者与机构**

- Yifu Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Shengpeng Ji：机构信息未能从会议 PDF 纯文本可靠映射
- Qian Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Tianle Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Yangzhuo Li：机构信息未能从会议 PDF 纯文本可靠映射
- Ziqing Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Wen Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jingyu Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Haoxiao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xueyi Pu：机构信息未能从会议 PDF 纯文本可靠映射
- Fan Zhuo：机构信息未能从会议 PDF 纯文本可靠映射
- Zhou Zhao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

端到端语音对话模型以语音提问为输入并直接生成交错文本与语音回复，难点在于序列级稀疏偏好监督需分摊到稠密语音Token而共享参数更新易使文本梯度主导并引发声学漂移。WavAlign先对同一提示采样4个语音回复并解码为音频送入奖励模型打分以获得序列奖励与组内优势，其输出的奖励分组直接进入下一步混合目标的门控计算。接着该方法将GRPO偏好梯度掩码限制在文本通道以精炼语义，同时保留覆盖全Token的SFT作为分布锚点以维持语音可行性，二者的损失权重由上一步奖励统计决定。最后依据最大奖励与归一化方差计算方向门与信息门并经指数滑动平均得到动态混合权重，从而按权重加权SFT与文本GRPO实现单阶段自适应训练。与全Token偏好更新不同，该机制把偏好塑形限定在语义通道而把声学稳定交给稠密监督，避免了稀疏奖励稀释语义信号并改善了智能与表达的帕累托权衡。在OpenAudioBench基准下，Ours \(Dynamic\)的平均得分为57\.6，高于Text\-Token RL \(Unified\)的56\.2。该结论适用边界受限于1到5分自动语音评委与有限混合音频指令数据的可靠性与校准，换用更可靠声学反馈或更大规模数据时门控行为与增益尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 101. [重构保真与可预测难以兼得：用未来预测与语义对齐重塑音频编码器](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1308-7e2edb7487/)

> 英文题目：*[LLM\-Codec: Neural Audio Codec Meets Language Model Objectives](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1308-7e2edb7487/)*

标签：#自回归模型 #正则化 #大语言模型 #音频编码

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频编码 | 主方法：#正则化

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1308/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1308.pdf)

👥 **作者与机构**

- Ho\-Lam Chung：机构信息未能从会议 PDF 纯文本可靠映射
- Yiming Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Hung\-yi Lee：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为原始波形及其配对文本，输出为可高保真重建且能被冻结自回归语言模型直接建模的离散语音token，难点在于重建目标保留的细粒度声学随机性会抬高token熵并导致可预测性下降与语义漂移。方法链分三步：首先编码器输出连续隐变量并经可微Gumbel桥接转为硬离散token，其输出直接送入冻结大语言模型的扩展词表与嵌入空间以保持梯度连通。接着未来token预测分支用多头分类头对近未来音频token施加自回归预测约束，迫使编码器丢弃不可预测的声学噪声而保留可建模结构。然后语义对齐分支在中高层对语音与对应文本的序列级末位表征做对齐以锚定语言内容，前两步产生的离散序列与对齐信号共同回传更新编解码器而冻结语言模型主体。与仅优化波形失真或解耦语义声学双编码器的已有路线不同，该工作不改编解码器与语言模型结构，只改训练目标并允许梯度穿过量化层，因而在稳定重建路径的同时降低语言模型困惑度。在SALMon语音连贯性评测下，LLM\-CODEC的准确率为61\.6%，高于AUV基线的49\.4%。结论的适用边界受限于英文朗读语音与配对转录监督，对无转录音频及音乐与环境声的外推尚未验证，且辅助预测头仅在训练时使用故测试时推理开销不变。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 102. [从绝对打分到相对偏好：语音质量奖励建模的范式转换与细粒度难例](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1638-97968d22cb/)

> 英文题目：*[From Scores to Preferences: Redefining Evaluation Paradigm for Speech Quality Reward Modeling](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1638-97968d22cb/)*

标签：#数据集 #偏好优化 #强化学习 #语音质量评估

评分：**7.0/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音质量评估 | 主方法：#偏好优化

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1638/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1638.pdf)

👥 **作者与机构**

- Yifei Cao：机构信息未能从会议 PDF 纯文本可靠映射
- Changhao Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiabao Zhuang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiajun Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Ming Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhiheng Xi：机构信息未能从会议 PDF 纯文本可靠映射
- Hui Li：机构信息未能从会议 PDF 纯文本可靠映射
- Shihan Dou：机构信息未能从会议 PDF 纯文本可靠映射
- Yuran Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yunke Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Tao Ji：机构信息未能从会议 PDF 纯文本可靠映射
- Tao Gui：机构信息未能从会议 PDF 纯文本可靠映射
- Qi Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xuanjing Huang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音质量评估需要对噪声、失真、连续性与自然度各异的语音判断相对优劣，难点在于不同数据集的绝对均值意见分标尺不可比且细粒度差异难以分辨。该工作先将BVCC、NISQA、SingMOS、SOMOS、TMHINT\-QI统一为16 kHz并按相同内容不同系统、相同说话人或系统不同内容、两者皆不同三类关系组内构造偏好对，再用Gemini\-2\.5\-Pro生成单样本与成对四维度文本评价并校验成对分数与偏好标签一致，最后在统一偏好任务上训练标量、半标量与生成式三类奖励模型并引入均值意见分差异感知奖励做强化学习优化。相对直接回归绝对分的做法，偏好建模以排序目标消除了跨库绝对分偏移，使跨域训练与评测使用同一二元选择监督信号。与已有方法相比的关键机制差异在于把难度信号显式编码进奖励而非均匀对待所有样本对。在MOS\-Pref全部测试对上经典标量Bradley\-Terry模型总体准确率达到80\.04%，明显高于UTMOS等回归基线与大语言模型裁判范式。该结论在均值意见分差异小于0\.2的极细粒度对上明显弱化，绝对准确率仅55\.33%左右，且验证集中于5种语言与合成、增强、歌声等受控场景，未覆盖更广泛真实声学条件。原文未披露训练时长与部署成本，未提供代码、权重与数据集下载链接。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 103. [静态特质约束动态偏见：CMTD 用认知建模做多模态对话情绪识别](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-41-b4d680b1bc/)

> 英文题目：*[CMTD: Cognitive Modeling with Traits and Distortions for Multimodal Emotion Recognition in Conversations](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-41-b4d680b1bc/)*

标签：#多模态学习 #大语言模型 #零样本 #音视频 #语音情感识别

评分：**7.0/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.41/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.41.pdf)

👥 **作者与机构**

- Minh\-Tien Nguyen：机构信息未能从会议 PDF 纯文本可靠映射
- Huu\-Loi Le：机构信息未能从会议 PDF 纯文本可靠映射
- Manh\-Cuong Phan：机构信息未能从会议 PDF 纯文本可靠映射
- Hajime Hotta：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

对话情感识别（Emotion Recognition in Conversations）需为每轮话语判断离散情绪，难点在于讽刺、压抑与语境偏置难以靠浅层文本区分。本文提出多智能体认知建模框架CMTD（Cognitive Modeling with Traits and Distortions），先由特质智能体推断说话人大五人格提供静态情绪基线，再由四步扭曲检测重建客观事实与主观想法、对比正反推理、分析图式并输出10类扭曲标签。视觉智能体与语音智能体分别将单帧面部线索与基频、响度、语速及音质转写为结构化文本描述，最后由融合智能体综合心理与多模态证据做话语级预测。与仅用失真推理的DoT（Diagnosis of Thought）相比，该设计用稳定特质约束瞬时负性偏置并用声视信号补足中性表达的判别依据。在MELD测试集2610话语上基于o4\-mini的零样本准确率达64\.23%，在IEMOCAP Session 5测试集1623话语上基于GPT\-5\-mini达65\.86%，均高于同基座文本基线。结论仅在表演型英语对话的零样本提示场景验证，对自然对话、视频时序动态与长期人格漂移尚未验证。100条MELD样本下基于gpt\-4o\-mini推理需3545\.97秒、成本0\.098美元，约为单提示文本基线的17\.84倍。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Shaun-le/CMTD.git> → <https://github.com/Shaun-le/CMTD> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 104. [重音一变意思就变：语音模型为何听不出言外之意](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-64-ecca67f42d/)

> 英文题目：*[StressTest: Can YOUR Speech LM Handle the Stress?](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-64-ecca67f42d/)*

标签：#基准测试 #基准设计 #韵律 #语音 #音频问答

评分：**7.0/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.64/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.64.pdf)

👥 **作者与机构**

- Iddo Yosha：机构信息未能从会议 PDF 纯文本可靠映射
- Gallil Maimon：机构信息未能从会议 PDF 纯文本可靠映射
- Yossi Adi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理语音问答中句子重音理解任务，输入为相同转写但重读词不同的语音，输出为其隐含意图选择，难点在于韵律线索转写丢失且意图对立易混淆。方法链分三段衔接：首先人工策划可多义文本并标注意图，再由专业演员按意图录制得到StressTest，为评测提供语音与标注对齐的基准语料。其次对Expresso中性情感子集做事后意图标注得到StressPresso，以多说话人与多样录制条件补充验证场景，其标注对齐弱于前者故仅作辅助评测。最后用CrewAI多智能体以gpt\-4o生成多义句与长短解释并以星号标记重读词驱动 expressive TTS合成音频，再经WhiStress校验转写与重音后构造四种提示任务微调Qwen2Audio\-7B\-Instruct得到StresSLM。与直接输入音频的现有语音大模型相比，关键差异在于把重音检测与意图推理显式绑定为联合训练信号，而非依赖通用音频推理涌现，从而强化韵律到语义的映射。在StressTest转写与重音均提供的评测任务下，StresSLM的SSR准确率为83\.4，低于Gemini\-2\.5\-Pro的98\.1。结论适用边界受限于英语受控朗读与中性情感，尚未验证会话韵律、多口音与多语言外推，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.crewai.com/> → <https://crewai.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 105. [音频提示词为何难偷：先做启发式锚定，再用沙普利值解开纠缠](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-688-22914b4732/)

> 英文题目：*[AudioStealer: Extracting Audio Prompts via Shapley Value\-Guided Query Search](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-688-22914b4732/)*

标签：#数据集 #提示学习 #音频安全 #音乐 #音乐生成

评分：**7.0/10** | 创新 1.6/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐生成 | 主方法：#提示学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.688/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.688.pdf)

👥 **作者与机构**

- Yingbin Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Xingjian Du：机构信息未能从会议 PDF 纯文本可靠映射
- Hanjun Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Zihao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Haibo Hu：机构信息未能从会议 PDF 纯文本可靠映射
- XiaoFeng Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xinfeng Li：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

文本到音乐窃取需仅凭30秒目标音频逆向可复用的原始文本提示，输出需同时还原风格配器情绪结构，难点在于音乐概念在时频域连续纠缠且无词符级定位导致直接描述易语义漂移。AudioStealer先用音乐标注模型生成粗糙初始描述，再以CLAP嵌入相似度为奖励做束搜索全局探索以锚定语义方向，其输出的最优候选进入精修阶段。精修阶段将其解构为风格、情绪、配器与结构四类原子元素并用沙普利值估计各元素在不同子集下的平均边际增益，指导大语言模型迭代重组更高分组合，全程仅查询本地影子模型。与改编自图像的窃取基线及通用音频大模型直接拼接标签不同，该方法显式建模元素间协同与冗余并剪除无信息内容，优先保证感知声学保真而非字面文本匹配。在Prompt2Music评测设置下，AudioStealer的Sem分数为59\.4，高于Stage1 Only基线的53\.1。该结论适用边界受限于器乐英文提示与西方风格及开源生成器，跨声乐、多语言与商业闭源系统的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://prompti.ai/> — 链接可访问（HTTP 200）
- 第三方资源：<https://howtopromptsuno.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 106. [同骨干双模态检索：OEA 以统一编码换文本理解与排除能力](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1038-8b06c35435/)

> 英文题目：*[Omni\-Embed\-Audio: Leveraging Multimodal LLMs for Robust Audio\-Text Retrieval](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1038-8b06c35435/)*

标签：#基准测试 #对比学习 #LoRA #鲁棒性 #音频检索

评分：**6.9/10** | 创新 1.5/2 | 技术严谨 1.1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频检索 | 主方法：#对比学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1038/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1038.pdf)

👥 **作者与机构**

- HaeJun Yoo：机构信息未能从会议 PDF 纯文本可靠映射
- Yongseop Shin：机构信息未能从会议 PDF 纯文本可靠映射
- Insung Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Myoung\-Wan Koo：机构信息未能从会议 PDF 纯文本可靠映射
- Du\-Seong Chang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频文本检索需将口语化短查询、命令与否定表述映射到对应音频并输出跨模态排序，难点是训练用描述性字幕与真实查询平均仅1\.8词的分布失配导致单格式基准高估能力。Omni\-Embed\-Audio先将16kHz单声道波形经原生音频处理器与文本查询经聊天模板加前后缀后送入同一共享Transformer主干统一编码。接着在注意力查询键值输出投影上以秩16低秩适配微调，并经模态专用无偏置线性层、层归一化与L2归一化投影到512维单位向量。然后以上一步输出的文本音频向量对用温度0\.07的对称InfoNCE对比学习拉齐共享空间，并在UIQ五类查询与硬负挖掘管线上评测鲁棒性。与M2D\-CLAP等双编码器对比语言音频预训练相比，关键差异是单共享大语言模型保留指令跟随与否定组合语义而非压缩为词袋式内容向量，因而无需显式UIQ训练即可提升细粒度语义区分。在MECAT文本到音频任务基准下，OEA\-Qwen7B（\+Cl）的指标R@1为7\.02，低于OEA\-Nemo3B（\+Cl）的7\.96。结论适用边界受限于字幕索引与命令排除式查询及无泄漏泛化，在域内字幕式文本到音频上仍落后且硬负集经特定模型过滤与单大模型生成可能遗漏真实声学混淆。推理开销与硬件方面，在A100上OEA\-Nemo3B文本编码延迟为2\.3 ms每查询而音频离线预计算，峰值显存11\.5 GB且仅更新13\.7M参数，边缘部署仍需量化或蒸馏。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 107. [先判有没有声，再判是不是说完：用两级协作做实时轮次结束检测](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2094-13982f597e/)

> 英文题目：*[Speculative End\-Turn Detector for Efficient Speech Chatbot Assistant](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2094-13982f597e/)*

标签：#数据集 #模型融合 #高效推理 #流式处理 #轮次切换

评分：**6.9/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#轮次切换 | 主方法：#模型融合

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.2094/) · [官方 PDF](https://aclanthology.org/2026.acl-long.2094.pdf)

👥 **作者与机构**

- Hyunjong Ok：机构信息未能从会议 PDF 纯文本可靠映射
- Suho Yoo：机构信息未能从会议 PDF 纯文本可靠映射
- Jaeho Lee：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音聊天需从连续音频流判断当前静音是同说话人短暂停顿还是跨说话人轮次结束，输入为流式语音块、输出为说话中、暂停与间隙的三态分割，仅靠静音时长无法区分思考性停顿与交接意图。工作先构建开放数据集OpenETD，将文本对话经语音合成与真实网络语音统一标注为发声单元、暂停与间隙的起止序列，提供可训练的监督信号。方法链分三步衔接：端侧轻量GRU逐100ms块做发声单元对非发声二分类实现连续监听，其连续200ms静音判决触发一次异步上传，仅将该静音段累积音频发往云端。云端Wav2vec 2\.0再对该片段做暂停对间隙细粒度判决，其间隙结论直接决定是否唤醒大语言模型生成回复，从而把昂贵推理从逐帧常驻降为每段静音一次。与大模型常驻逐帧推理及持续端云传输相比，该投机协同机制保留端侧实时性又避免服务器持续运算，通信也从连续流降为静音触发的一次传输。在OpenETD二分类任务下，Wav2vec 2\.0的准确率为99\.3，高于GRU的79\.7。该结论适用边界受限于英语双人对话与200ms触发阈值，重叠语音、多方会谈与高噪声远场尚未验证。推理开销上云端大模型仅在静音时触发使计算量降低10倍以上，且端到端传输延迟在5G与Wi\-Fi下仍处于200ms交接阈值内。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 108. [把谁和何时放进编码器：TellWhisper 的时间说话人联合建模](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-861-10ed7db39f/)

> 英文题目：*[TellWhisper: Tell Whisper Who Speaks When](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-861-10ed7db39f/)*

标签：#会议转录 #注意力机制 #语音 #语音识别 #说话人分离标注

评分：**6.9/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#注意力机制

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.861/) · [官方 PDF](https://aclanthology.org/2026.acl-long.861.pdf)

👥 **作者与机构**

- Yifan Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Peiji Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhisheng Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yicheng Zhong：机构信息未能从会议 PDF 纯文本可靠映射
- Rui Liu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多说话人自动语音识别（Multi\-speaker Automatic Speech Recognition，MASR）以混合语音为输入，需联合输出谁在何时说了什么，难点在于快速轮转与重叠下说话人与时间的耦合建模。TellWhisper先用双曲说话人分离标注（Hyperbolic Speaker Diarization，Hyper\-SD）估计帧级说话人活动，再由时间\-说话人旋转位置编码（Time\-Speaker Rotary Position Embedding，TS\-RoPE）在Whisper large\-v3\-turbo编码器自注意力中注入时间与说话人坐标，最后由结构化内容预测器自回归生成按时间排序的说话人、起止时间与文本序列。与编码器前掩蔽非目标区或编码器后线性混合说话人后验的已有范式不同，该方法将身份差异转化为查询\-键旋转角差，使注意力同时感知时序邻近与说话人连续性。在AMI测试集上TellWhisper的拼接最小排列词错率（Concatenated minimum\-permutation Word Error Rate，CP\-WER）为32\.53%，优于Dicow、SortFormer等单阶段基线并同时改善时间约束指标。该结论主要适用于至多4说话人的英文会议与模拟对话，对更多说话人、强噪声与跨语言外推尚未验证。原文未披露训练时长、推理延迟与部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/fgnt/meetev> — 链接不可用（HTTP 404）
- 第三方资源：<https://github.com/yinruiqing/pyannote-whisper> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 109. [长会议听不懂也找不着：用多维图加计划智能体做可定位问答](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1038-d8c6796a30/)

> 英文题目：*[Don’t Just Listen, Try Planning: Graph\-based Retrieval\-Generation Agent for Long\-form Audio Meeting Understanding](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1038-d8c6796a30/)*

标签：#会议转录 #数据集 #检索增强 #长音频处理 #音频问答

评分：**6.9/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#检索增强

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1038/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1038.pdf)

👥 **作者与机构**

- Quanwei Tang：机构信息未能从会议 PDF 纯文本可靠映射
- Dong Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shoushan Li：机构信息未能从会议 PDF 纯文本可靠映射
- Guodong Zhou：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

长会议音频理解以30分钟级多说话人远场录音为输入，输出带时间戳引用的答案，难点在于语音语调等副语言信息在转写中丢失且证据跨说话轮次与时间碎片化，需多跳推理与时间定位。GRGA先用语音识别、强制对齐与说话人日志将话轮文本、说话人属性与声学片段组织为含时序边、回复边与说话人边的多维异构图。查询分解器将问题投影为实体、概念、时间与元数据约束并输出结构化检索计划，直接作为执行规划器的输入。执行规划器在图上进行语义搜索、图遍历、过滤与按需回听原始音频以补足声学证据，合成器据此生成候选答案与引用，再由反射器验证蕴含，不通过则注入批评触发重规划，形成部分可观察马尔可夫决策过程式反馈闭环。与单次向量检索把会议压平为切块不同，该机制以显式图结构聚合分散证据并以验证循环抑制幻觉引用，从而提升复杂会议中的 groundedness 与正确性。在AMI基准测试下，完整GRGA的准确率为49\.49%，高于去除语义搜索后变体的16\.28%。该结论适用边界受限于结构化会议并依赖上游转写与日志质量，在重叠严重或电影、视频博客等非结构化场景尚未验证，且迭代规划与反射带来高于单轮检索的计算量与延迟，限制实时部署。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 110. [补上时间细节：让多模态大模型重新看清唇动的前后变化](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1381-e853e91bd1/)

> 英文题目：*[Bridging the Temporal Gap in Multimodal LLMs: Deeply Stacking Temporal Tokens for Audio\-Visual Speech Recognition](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1381-e853e91bd1/)*

标签：#注意力机制 #大语言模型 #音视频 #语音 #音视频语音识别

评分：**6.9/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频语音识别 | 主方法：#注意力机制

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1381/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1381.pdf)

👥 **作者与机构**

- Liyong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Junliang Xing：机构信息未能从会议 PDF 纯文本可靠映射
- Tianyu Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Jianfei Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Jihuai Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Huimin Ma：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音视频语音识别输入为同步唇部视频与语音音频，输出为英语文本转写，难点在于唇动以多帧连续细微构音表达音素，且视觉时间语义在语言模型深层易被语言先验淹没。该方法先用AV\-HuBERT提取视频帧嵌入、用Whisper提取音频最后隐藏状态并沿特征维拼接融合，形成统一多模态序列。融合序列经时间感知注意力与时间旋转位置编码增强帧间演化建模，再由因果Q\-Former压缩为紧凑表征后送入Llama3\.2\-3B解码。解码时在早期层逐层残差叠加分层时间令牌以延续细粒度时间信息，后期层则专注语义推理与文本生成，实现编码与解码双阶段时间桥接。与仅把视听令牌作输入前缀的已有LLM范式不同，该工作显式建模唇动序列演化并缓解深层时间退化，因而在视觉语音识别上更具实际意义。在LRS3基准任务下，本方法的VSR词错率（WER）为26\.30%，低于MMS\-Llama基线的28\.50%。结论适用边界受限于英语LRS2与LRS3离线句子级评测，对跨语言音位唇形映射与流式场景尚未验证，增加2个时间注意力块带来8\.3M参数与7\.56 GFLOPs计算量，训练硬件为RTX 4090。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 111. [在自己的语音轨迹上学文本推理：CORD 的加权在策略跨模态自蒸馏](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1581-d4e273b847/)

> 英文题目：*[CORD: Bridging the Audio–Text Reasoning Gap via Weighted On\-policy Cross\-modal Distillation](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1581-d4e273b847/)*

标签：#知识蒸馏 #强化学习 #音频大模型 #音频问答

评分：**6.9/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#知识蒸馏

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1581/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1581.pdf)

👥 **作者与机构**

- Hu Jing：机构信息未能从会议 PDF 纯文本可靠映射
- Danxiang Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Xianlong Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Dan Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shuwei He：机构信息未能从会议 PDF 纯文本可靠映射
- Yishu Lei：机构信息未能从会议 PDF 纯文本可靠映射
- Shikun Feng：机构信息未能从会议 PDF 纯文本可靠映射
- Hai\-Tao Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Jingzhou HE：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Hua Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Haifeng Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务以语义等价的语音问题与文本问题为输入，要求模型输出一致的推理答案，实际难点在于音频语义鸿沟引发的早期语义偏离会沿自回归解码逐词累积，导致音频推理显著弱于文本推理。首先，CORD从当前策略采样音频推理轨迹，在同一前缀下并行计算音频条件分布与文本条件分布，并以反向KL度量每步跨模态分歧，其输出的分歧序列直接进入下一步筛选。接着，模型对分歧最大的关键词元施加重要性加权并对早期位置施加序列衰减加权，做词元级纠偏以阻断早期误差放大，加权后的局部对齐轨迹再接受全局一致性约束。然后，方法对音频输出与文本条件参考答案用裁判模型打二值一致奖励，并以GRPO在组内相对优化提升高奖励轨迹似然，从而兼顾局部语义准确与整轨推理一致。与依赖教师轨迹的离策略蒸馏不同，该机制全程在学生真实推理状态上施教，避免了训练推理状态错配并保留非语音声学能力。在MMSU基准推理任务下，CORD在Qwen2\-Audio\-7B\-Instruct上的准确率为38\.06，高于基线模型的36\.04。该结论适用边界受限于数学合成语音训练与问答推理评测，向真实口语噪声与视觉场景的外推尚未验证。原文未披露训练、推理或部署成本

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 112. [音频提示词为何见过就忘：用语义邻居把文本空间撑开](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1583-b078cb09dd/)

> 英文题目：*[Generalizable Prompt Tuning for Audio\-Language Models via Semantic Expansion](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1583-b078cb09dd/)*

标签：#提示学习 #音频大模型 #少样本 #音频分类

评分：**6.9/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.3/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分类 | 主方法：#提示学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1583/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1583.pdf)

👥 **作者与机构**

- Jaehyuk Jang：机构信息未能从会议 PDF 纯文本可靠映射
- Wonjun Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Kangwook Ko：机构信息未能从会议 PDF 纯文本可靠映射
- Changick Kim：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频语言模型零样本分类以音频波形与文本类名为输入，以音频嵌入和文本类原型在共享空间余弦相似度最高的类别为输出，其实际难点在于音频基准类别稀少，可调提示易过拟合基类并破坏预训练文本空间的语义邻近结构。语义扩展提示调优先为每个基类调用大语言模型生成语义邻居以扩大文本覆盖，该邻居集合作为后续正则的语义参照进入训练。将可学习上下文与类名拼接后送入冻结文本编码器得到类嵌入与邻居嵌入，类嵌入用于分类而邻居嵌入用于约束几何关系。再用语义扩展损失联合交叉熵优化提示，按手写模板估计的预训练几何设定类内与类间边距，只在违反边距时进行拉推。与直接拉近单一手写模板或全局概念池正则不同，该方法保留局部语义拓扑而非强制全局收缩，因而能缓解基类到新类的权衡并保持即插即用。在11个音频分类数据集的基类到新类评测下，CoOp接入SEPT后的新类准确率为42\.98%，高于CoOp基线的新类准确率34\.09%。该结论适用边界受限于以Pengi编码器为骨干的16样本英文类名场景，对音乐流派与情感等语义模糊类别及跨数据集迁移的稳定性尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 113. [边想边说不断流：用播放掩蔽保连续，用四重约束修原子性](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-199-092d815805/)

> 英文题目：*[Dual\-Reasoner: Bridging Interleaved Atomicity and Streaming Latency via Thinking\-while\-Talking](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-199-092d815805/)*

标签：#数据集 #强化学习 #高效推理 #流式处理 #语音对话系统

评分：**6.9/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音对话系统 | 主方法：#强化学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.199/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.199.pdf)

👥 **作者与机构**

- Yangzhuo Li：机构信息未能从会议 PDF 纯文本可靠映射
- Shengpeng Ji：机构信息未能从会议 PDF 纯文本可靠映射
- Yifu Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Tianle Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Haoyu Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Junboli：机构信息未能从会议 PDF 纯文本可靠映射
- Jun Fang：机构信息未能从会议 PDF 纯文本可靠映射
- Lin Li：机构信息未能从会议 PDF 纯文本可靠映射
- Qingyang Hong：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

端到端语音对话需由输入语音直接生成连续语音，深链式思考抬高首包延迟而边想边说又切碎块内语义与跨块记忆。本文将矛盾重构为超低延迟下的逻辑原子性重建，提出Dual\-Reasoner三段流水：先由流式掩蔽将前块播放时长建模为时间预算，约束后块思考加说话延迟必须被掩盖并选定60/125块粒度。其掩蔽后的碎片轨迹进入原子一致性恢复，以语义完整性、内外一致性、稀疏逻辑流与多模态结果四奖励经组相对策略优化对齐为统一认知流。再由Dual\-Think\-30k按快思考锁定意图、慢思考执行角色\-问题\-任务\-符号四阶段推理提供课程训练数据。与串行思考直接等待完整思维链不同，该设计以播放掩盖推理并用过程约束替代仅看终答的监督，兼顾连续播报与可验证推理。在VoiceBench基准下，Dual\-Reasoner的Overall得分为73\.41，高于Step\-Audio\-2\-Mini\-Base的67\.24。该结论受限于英文朗读式评测条件，噪声与口语不流畅泛化尚未验证，其训练成本受限于依赖GPT\-4o生成奖励信号，而流式播放掩盖下的首帧延迟见原文TTFA对比。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 114. [把结构化语音与非结构化音效装进同一指令接口：UniSonate 的对齐与课程设计](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1293-8ff0e55ae8/)

> 英文题目：*[UniSonate: A Unified Model for Speech, Music, and Sound Effect Generation with Text Instructions](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1293-8ff0e55ae8/)*

标签：#课程学习 #流匹配 #统一音频模型 #音频生成

评分：**6.8/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：模型报告 | 主任务：#音频生成 | 主方法：#流匹配

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1293/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1293.pdf)

👥 **作者与机构**

- Chunyu Qiang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaopeng Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Kang Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Yuzhe Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuxin Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Teng Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Ziyu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Tianrui Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Cheng Gong：机构信息未能从会议 PDF 纯文本可靠映射
- Yushen Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Ruibo Fu：机构信息未能从会议 PDF 纯文本可靠映射
- Longbiao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Jianwu Dang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

统一语音、音乐与音效生成需以纯文本指令同时控制结构化时序对齐与非结构化声纹建模，混合训练易引发负迁移与发音退化。UniSonate先将指令流与内容流解耦为双路条件输入，经多模态扩散变换器联合注意力实现风格描述与声学潜特征的深度对齐。对齐后的条件表示进入动态令牌注入环节，按目标时长重复伪音素锚点，使音效时长展开可被交叉注意力逐步推进。然后按语音锚定、语义扩展、通用泛化三阶段课程依次引入语音、音乐与音效数据，缓解优化冲突与灾难性遗忘。与既有统一模型的关键差异在于用可变长度伪音素处理非语言事件，而非单一时长嵌入，从而统一单调对齐机制并保留长时结构完整性。在语音合成任务下，UniSonate联合训练的WER\-EN为1\.47%，低于TTS\-Only变体的2\.24%。该结论适用边界受限于2秒到20秒短片段，长歌曲与长有声书连贯性尚未验证，且多步扩散带来推理开销与延迟，实时低延迟场景应用受限。

🔗 **开源资源**

- 第三方资源：<https://suno.com/> — 暂时无法访问
- 第三方资源：<https://udio.com/> → <https://www.udio.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/resemble-ai/Resemblyzer> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/emotion2vec> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 115. [只给一小时新语言音频：把快速适应做成内外环分工的语音表示学习](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1325-278ff00a05/)

> 英文题目：*[SpidR\-Adapt: A Universal Speech Representation Model for Few\-Shot Adaptation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1325-278ff00a05/)*

标签：#元学习 #自监督学习 #跨语言 #少样本 #语音识别

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#元学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1325/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1325.pdf)

👥 **作者与机构**

- Mahi Luthra：机构信息未能从会议 PDF 纯文本可靠映射
- Jiayi Shen：机构信息未能从会议 PDF 纯文本可靠映射
- Maxime Poli：机构信息未能从会议 PDF 纯文本可靠映射
- Angelo Ortiz Tandazo：机构信息未能从会议 PDF 纯文本可靠映射
- Yosuke Higuchi：机构信息未能从会议 PDF 纯文本可靠映射
- Youssef Benchekroun：机构信息未能从会议 PDF 纯文本可靠映射
- Martin Gleize：机构信息未能从会议 PDF 纯文本可靠映射
- Charles\-Eric Saint\-James：机构信息未能从会议 PDF 纯文本可靠映射
- Dongyan Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Phillip Rust：机构信息未能从会议 PDF 纯文本可靠映射
- Angel Villar：机构信息未能从会议 PDF 纯文本可靠映射
- Surya Parimi：机构信息未能从会议 PDF 纯文本可靠映射
- Vanessa Stark：机构信息未能从会议 PDF 纯文本可靠映射
- Rashel Moritz：机构信息未能从会议 PDF 纯文本可靠映射
- Juan Pino：机构信息未能从会议 PDF 纯文本可靠映射
- Yann LeCun：机构信息未能从会议 PDF 纯文本可靠映射
- Emmanuel Dupoux：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为10分钟至100小时无标注目标语音，输出为音素可分性强且可直接驱动口语建模的连续表示，难点在于源语言预训练易过拟合且纯自监督内环在极少数据下欠定。先以多任务自适应预训练把每种语言数据块构造为低资源适应episode，并以外层有监督信号塑造可快速重组的初始化，其输出作为元起点进入双层优化。接着以内环无监督适应加外层有监督校正构成双层优化，并以参数差一阶近似外层梯度避免二阶开销，适应后参数进入遗忘阶段。最后在episode起点重置预测头与码本以执行主动遗忘，并用每10步交错监督获得稳健起点用于少样本适应。与混合多语言预训练及纯自监督Reptile相比，关键差异在于内外环使用异构损失且显式优化适应后性能而非零样本性能，其实质是缓解过拟合与码本坍缩。在DiscoPhon基准任务下，MAdaPT\-FOBLO的PER为36\.58，低于Multi\-Task\-PT \[SSL\]的48\.63。该结论适用边界受限于27语言且以印欧语为主的评估，声调密集语言与无源语言标注扩展尚未验证，且零样本表示会出现退化。训练在16 GPUs分布式硬件下执行200外层步骤且内环使用10小时随机数据块，推理开销受限于编码器层选择与微调映射成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 116. [用发音特征做跨语言偏置：在新语言上只用 10 小时做语音单元发现](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-24-ba3f3c0578/)

> 英文题目：*[MauBERT: Universal Phonetic Inductive Biases for Few\-Shot Acoustic Units Discovery](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-24-ba3f3c0578/)*

标签：#SFT #语音学与音系 #少样本 #多语言 #语音识别

评分：**6.8/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#SFT

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.24/) · [官方 PDF](https://aclanthology.org/2026.acl-long.24.pdf)

👥 **作者与机构**

- Angelo Ortiz Tandazo：机构信息未能从会议 PDF 纯文本可靠映射
- Manel Khentout：机构信息未能从会议 PDF 纯文本可靠映射
- Youssef Benchekroun：机构信息未能从会议 PDF 纯文本可靠映射
- Thomas Hueber：机构信息未能从会议 PDF 纯文本可靠映射
- Emmanuel Dupoux：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务是从连续语音波形为未知语言发现音素级离散单元，输出应对说话人与音素语境不变的帧级表示与离散码本，难点在于自监督聚类单元过短过多、缺乏音位抽象且协同发音变体干扰判别。方法先以冻结卷积前端的HuBERT\-base为编码器，在VoxCommunis五十五语言上经PanPhon映射做多语言构音特征或音素持续预训练，输出语言无关的帧级特征与音素对数。接着以下游可学习加权求和加双向长短时记忆网络加投影承接上步表示，并在新语言上以十小时语音做基于聚类伪标签的掩码预测自监督微调，其中高频预测音素或二值特征向量被选为伪标签词表。与纯掩码聚类相比，关键差异是用显式发音生理空间约束表示以解耦音位身份与协同发音变体，从而提升跨语言上下文不变性与少样本适应能力。在DiscoPhon基准的单音素对单单元评测设置下，MAUBERT\-PHONE加phone freq\.的错误率指标PER为73\.35，低于HuBERT加K\-means的PER175\.23。结论在音系层ABX、音素错误率与口语建模评测上成立，其适用边界受限于未验证句法语义层外推与自发语音高变异场景。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 117. [SegTune：把歌曲控制从整首描述下沉到分段时间窗](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-586-f47874f4cf/)

> 英文题目：*[SegTune: Structured and Fine\-Grained Control for Song Generation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-586-f47874f4cf/)*

标签：#扩散模型 #偏好优化 #Transformer #音乐 #歌唱生成

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#歌唱生成 | 主方法：#扩散模型

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.586/) · [官方 PDF](https://aclanthology.org/2026.acl-long.586.pdf)

👥 **作者与机构**

- Yuejiao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zihao Ji：机构信息未能从会议 PDF 纯文本可靠映射
- Pengfei Cai：机构信息未能从会议 PDF 纯文本可靠映射
- Xu Li：机构信息未能从会议 PDF 纯文本可靠映射
- Haorui Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Zewen Song：机构信息未能从会议 PDF 纯文本可靠映射
- Zhongliang Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Chen Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Pengfei Wan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

歌曲生成需以无时间戳歌词、全局提示和分段提示为输入，联合合成人声与伴奏，难点是配器、情绪与能量随段落演变且声伴需保持对齐。SegTune先用微调后的Qwen3\-4B\-Base时长预测器自回归输出LRC格式句子级起始时间，以确定段边界与推理噪声长度。接着歌词编码器将音素写入对应潜帧，全局向量广播至全部帧、分段向量广播至对应窗口后沿通道拼接并经投影得到文本条件。最后这些分层条件与时间对齐歌词嵌入共同引导1\.1B参数DiT生成潜表示，并经两轮DPO进一步优化音乐性。与仅用全局提示或在歌词中插入离散结构标签的已有非自回归方法不同，该工作将每段自然语言描述独立编码并按时间注入，解耦全局一致性与局部演变。在客观评测下，SegTune\-SFT的PER为14\.5%，低于DiffRhythm\+的27\.4%。其适用边界受限于90%以上为中文流行的内部训练分布，对模糊结构输入与段内渐强等尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 118. [文化知识碎在模态和语言之间：MMAC 如何对齐三模态输入再测一致性与根据](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-989-d11a3ec58e/)

> 英文题目：*[MMAC: A Multilingual, Multimodal Alignment Framework for Cultural Grounding Evaluation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-989-d11a3ec58e/)*

标签：#基准设计 #多语言 #音视频 #音频问答

评分：**6.8/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.989/) · [官方 PDF](https://aclanthology.org/2026.acl-long.989.pdf)

👥 **作者与机构**

- Weihua Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengyuan Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Tanmoy Chakraborty：机构信息未能从会议 PDF 纯文本可靠映射
- Weiwen Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoxue Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Bryan Chen Zhengyu Tan：机构信息未能从会议 PDF 纯文本可靠映射
- Bowei Zou：机构信息未能从会议 PDF 纯文本可靠映射
- Chang Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Yujia Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Xing Xie：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoyuan Yi：机构信息未能从会议 PDF 纯文本可靠映射
- Jing Yao：机构信息未能从会议 PDF 纯文本可靠映射
- Chaojun Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Long Li：机构信息未能从会议 PDF 纯文本可靠映射
- Rui Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Huiyao Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Koji Inoue：机构信息未能从会议 PDF 纯文本可靠映射
- Ryuichi Sumida：机构信息未能从会议 PDF 纯文本可靠映射
- Tatsuya Kawahara：机构信息未能从会议 PDF 纯文本可靠映射
- Fan Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Lingyu Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Tian：机构信息未能从会议 PDF 纯文本可靠映射
- Dongjun Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Jimin Jung：机构信息未能从会议 PDF 纯文本可靠映射
- Jaehyung Seo：机构信息未能从会议 PDF 纯文本可靠映射
- Nadya Yuki Wangsajaya：机构信息未能从会议 PDF 纯文本可靠映射
- Pham Minh Duc：机构信息未能从会议 PDF 纯文本可靠映射
- Ojasva Saxena：机构信息未能从会议 PDF 纯文本可靠映射
- Palash Nandi：机构信息未能从会议 PDF 纯文本可靠映射
- Xiyan Tao：机构信息未能从会议 PDF 纯文本可靠映射
- Wiwik Karlina：机构信息未能从会议 PDF 纯文本可靠映射
- Tuan Luong：机构信息未能从会议 PDF 纯文本可靠映射
- Keertana Arun Vasan：机构信息未能从会议 PDF 纯文本可靠映射
- Roy Ka\-Wei Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Nancy F\. Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为语义相同的纯文本选择题、图像加问题与语音朗读问题，输出为四选一答案与英文解释，难点在于记忆捷径、低资源语言落差与模态迁移断裂会伪装成文化能力。八国母语者先按九类主题采集文本与图像并撰写知识要点与多步推理题，形成本地语与英语平行题库。随后团队将视觉题改写为等义纯文本题并合成标准与带口音英语语音，使三模态语义对齐以进入统一零样本测试。测试先以贪婪解码单轮评测十四模型的多选准确率与跨语言跨模态一致性，再以三模型多数投票核查解释是否蕴含知识要点并剔除捷径成功。相对既有单模态文化选择题，该机制以一致性与解释忠实性为首要指标，并用视觉依赖消融与泛化分解揭示推理断点，具有更可靠的文化接地测量意义。在MMAC\-bench文本问答基准下，GPT\-4o在CN\-en上的准确率为50\.2，高于在CN\-zh上的36\.0。该结论适用边界限于八国亚洲文化的多选加解释范式，开放式交互与西方外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/coqui-ai/TTS> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 119. [把人物引文单独切出来：以叙事切分做更可读的表现力语音合成](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-308-edba94d127/)

> 英文题目：*[Computational Narrative Understanding for Expressive Text\-to\-Speech](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-308-edba94d127/)*

标签：#数据集构建 #韵律 #语音 #文本到语音

评分：**6.8/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#文本到语音 | 主方法：#数据集构建

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.308/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.308.pdf)

👥 **作者与机构**

- Gaspard Michel：机构信息未能从会议 PDF 纯文本可靠映射
- Elena V\. Epure：机构信息未能从会议 PDF 纯文本可靠映射
- Christophe Cerisara：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

富有表现力文本到语音（Text\-to\-Speech， TTS）需要区分中性旁白与角色直接引语并依据语境还原语气，现有按 30 秒随机切分的有声书库混杂多种韵律分布，模型易坍缩到中性风格。本文以虚构类 LibriVox 录音与 Project Gutenberg 文本为输入，先过滤多人演绎并用 BookNLP 做引语检测，再经 Zipformer\-Transducer 转写与两阶段文本音频对齐切分引语与旁白片段，最后用 Phi\-4 从前后段落抽取言语动词与副词伪标签并筛选高表现力子集。与大规模混合语料相比，该流程把叙事话语结构显式编码为引语单元、100 词级上下文窗口与意图标签。LibriQuote\-train 含约 2991 本书、约 3300 个说话人、5359 小时引语与约 12720 小时旁白，测试集为 15 个未见说话人约 7\.4 小时引语。在 LibriQuote\-test 上 F5\-TTS 经富有表现力子集微调后语境平均意见分从 2\.95 升至 3\.33，IndexTTS2\-Context 胜率达 54% 接近真人 3\.55。结论限于英语业余朗读有声书与引语驱动表现力，对专业演播与跨语言泛化尚未验证。原文未披露训练总时长与推理部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/deezer/libr> — 链接不可用（HTTP 404）
- 数据相关资源：<https://huggingface.co/datasets/> — 暂时无法访问
- 演示资源：<https://libriquote.github.io/> — 链接可访问（HTTP 200）
- 复现相关资源：<https://github.com/SWivid/F5-TTS/blob/main/> → <https://github.com/SWivid/F5-TTS/tree/main> — 链接可访问（HTTP 200）
- 第三方资源：<https://librivox.org/api/info> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/booknlp/booknlp/blob/main/> → <https://github.com/booknlp/booknlp/tree/main> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/k2-fsa/icefall/pull/1058> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/emotion2vec/> — 暂时无法访问
- 第三方资源：<https://github.com/swivid/f5-tts> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 120. [把文字方向做成向量：语音基础模型中线性的文字表征与免训练转写控制](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-464-24bc1a0ae3/)

> 英文题目：*[Linear Script Representations in Speech Foundation Models Enable Zero\-Shot Transliteration](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-464-24bc1a0ae3/)*

标签：#测试时自适应 #语音大模型 #多语言 #零样本 #语音识别

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#测试时自适应

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.464/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.464.pdf)

👥 **作者与机构**

- Ryan Soh\-Eun Shim：机构信息未能从会议 PDF 纯文本可靠映射
- Kwanghee Choi：机构信息未能从会议 PDF 纯文本可靠映射
- Kalvin Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Ming\-Hao Hsu：机构信息未能从会议 PDF 纯文本可靠映射
- Florian Eichin：机构信息未能从会议 PDF 纯文本可靠映射
- Zhizheng Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Alane Suhr：机构信息未能从会议 PDF 纯文本可靠映射
- Michael A\. Hedderich：机构信息未能从会议 PDF 纯文本可靠映射
- David Harwath：机构信息未能从会议 PDF 纯文本可靠映射
- David R\. Mortensen：机构信息未能从会议 PDF 纯文本可靠映射
- Barbara Plank：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多语言语音基础模型需将语音转写为目标文字，但同一语言多文字并存时输出文字不稳定，且提示对小模型控制力弱。该方法先对同一音频分别用源文字与目标文字提示解码Whisper，收集各解码器层激活并按序列均值池化，输出的双侧激活均值进入下一步差分。接着用归一化Levenshtein编辑距离过滤保留双侧均成功的样本，每侧取少量样本求层均值后相减，得到每层文字向量，完成方向提纯。推理时在每个解码步对各层末token隐状态加回该向量并以强度σ控制偏移，塞尔维亚向量可直接复用，伪标签二次估计则用目标语言初判转写重估向量实现适配。相对提示基线，该机制不微调参数而以线性向量算术直接偏置激活空间，因而可跨语言零样本复用并反映真实发音而非字符映射。在FLEURS语料罗马化转写评测任务下，塞尔维亚向量零样本迁移至印地语的准确率为0\.69，高于无提示基线的0\.01。其适用边界受限于X到Latin与X到Cyrillic及简繁中文，西里尔化多数语言低迷且编码器干预与OWSM\-CTC泛化弱，伪标签在多语西里尔化多退化。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/mainlp/transliteration> — 链接不可用（HTTP 404）
- 第三方资源：<https://github.com/unicode-org/icu> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/openai/whisper/discussions/277> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 121. [不改伪标签，在参数空间里纠正伪标签：Pseudo2Real 的跨口音修正向量](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-59-e55a84f190/)

> 英文题目：*[Pseudo2Real: Task Arithmetic for Pseudo\-Label Correction in Automatic Speech Recognition](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-59-e55a84f190/)*

标签：#领域适应 #模型融合 #鲁棒性 #语音 #语音识别

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#模型融合

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.59/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.59.pdf)

👥 **作者与机构**

- Yi\-Cheng Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Yu\-Hsuan Li Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Hsuan Su：机构信息未能从会议 PDF 纯文本可靠映射
- Tzu\-Quan Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Shang\-Tse Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yun\-Nung Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Hung\-yi Lee：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

面向无标注目标口音语音的自动语音识别需以语音为输入输出对应转写文本，而教师模型生成的伪标签带有口音相关的系统性声学混淆与幻觉，置信度过滤难以纠正继承的结构化误差。Pseudo2Real首先在兼具真实转写与伪标签的源域从同一预训练初始化分别微调得到真实模型与伪标签模型，为分离偏差方向提供配对参数。该方法接着将两者权重相减形成校正向量，使其输出显式编码从伪标签指向真实的去噪方向。然后在仅有语音的目标域上用伪标签微调学生模型，并按在源域开发集网格搜索选定的缩放因子λ加回校正向量，实现上一步偏差估计向目标参数的迁移修正；扩展版进一步按说话人嵌入聚类求多组子向量再平均，以保留异质说话人间的细粒度偏差。与仅过滤或迭代教师的标签空间方法不同，该方法直接在参数空间复用可迁移的修正量，无需目标真值即可抑制系统性误差。在AFRISPEECH\-200十口音交叉验证设置下，Pseudo2Real的WER为57\.7，低于伪标签微调基线的89\.3。该结论适用边界受限于英语口音朗读语音与两折划分，当源目标偏差不重叠或源监督不足时迁移可能失效；训练成本方面原文报告全部实验在单个NVIDIA V100硬件上共计约500 GPU\-hours。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 122. [三跳都必须用上：OMHBench 如何堵住全模态评测的捷径与偏路](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-911-a2538b910d/)

> 英文题目：*[OMHBench: Benchmarking Balanced and Grounded Omni\-Modal Multi\-Hop Reasoning](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-911-a2538b910d/)*

标签：#基准测试 #基准设计 #多模态模型 #音视频 #音视频问答

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频问答 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.911/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.911.pdf)

👥 **作者与机构**

- Seunghee Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Ingyu Bang：机构信息未能从会议 PDF 纯文本可靠映射
- Seokgyu Jang：机构信息未能从会议 PDF 纯文本可靠映射
- Changhyeon Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Sanghwan Bae：机构信息未能从会议 PDF 纯文本可靠映射
- Jihun Choi：机构信息未能从会议 PDF 纯文本可靠映射
- Richeng Xuan：机构信息未能从会议 PDF 纯文本可靠映射
- Taeuk Kim：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为分属文本、图像与语音的三段上下文，输出为正整数答案，要求按指定模态顺序完成三跳实体属性链接，难点在于任一模态缺失即不可解且需跨模态传递中间实体。先进行表格问答构建，输入为四领域真实表格，职责是抽取共享实体但属性互斥的三张子表并施加查找比较排序等操作生成三跳问答，输出的问题与答案对进入下一步模态渲染。再进行模态渲染，输入为上一步输出的问题答案对与三张子表，职责是将三表分别转化为分析师报告类文本、多样式图表与多人对话语音，输出的三模态上下文进入推理多样化。最后进行推理多样化，输入为上一步输出的三模态上下文与问答实例，职责是对三表做全排列生成S\-I\-T等六种推理路径变体以均衡路径分布，输出均衡的评测实例。与OMU及CMR基准相比，该设计同时强制三模态接地并均衡路径分布，避免单模态捷径与路径偏置，具有更严格的评测意义。在OMHBench\-Connect基准下，Gemini 3 Flash的平均准确率为78\.3，高于Gemini 2\.5 Pro的72\.5。结论适用边界限于固定三跳实体属性型数值推理，尚未验证开放域长语音与视频时序场景。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://huggingface.co/> — 暂时无法访问
- 第三方资源：<https://huggingface.co/hexgrad/Kokoro-82M/blob/> — 暂时无法访问
- 第三方资源：<https://finance.yahoo.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://data.worldbank.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://open-meteo.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 123. [只听声音就能画像：HearSay 揭示音频大模型的声纹隐私泄露](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-964-363fec322c/)

> 英文题目：*[HearSay Benchmark: Do Audio LLMs Leak What They Hear?](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-964-363fec322c/)*

标签：#基准测试 #基准设计 #音频大模型 #隐私保护 #语音属性识别

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.6/1 | 影响力 1.2/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音属性识别 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.964/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.964.pdf)

👥 **作者与机构**

- Jin Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Kaiwen Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Liang Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Weiliu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yitian Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Moayad Aloqaily：机构信息未能从会议 PDF 纯文本可靠映射
- Xuehai Tang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenhong Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Kun Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Li Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Qingsong Wen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为剥离语义上下文的真实说话人音频片段与法医声纹探针问题，输出为年龄、性别、教育等八类隐私属性推断及是否拒答，难点在于判定模型是真正从音色韵律等声学指纹感知还是依赖训练先验盲猜幻觉。方法链条先由画像智能体从官方讲座简介与公开履历抽取属性并标记已验证与已推断标签，其输出对应到讲座原声音频截取环节以保留真实声音指纹。随后丢弃全部已推断标签并对已验证标签做人工核验，对体重与健康等时变属性引入外部公开记录做历史锚定，其输出进入以推断准确率、拒答率与盲偏率三维评测的验证环节。与依赖合成音频或影视片段的隐私评测不同，该工作坚持真实基线、转写文本对照与空音频对照，从而分离声学泄露并校正先验偏差，具有验证涌现隐私风险的实际意义。在HearSay基准下，MERaLION在性别维度上的推断准确率为96\.44%，高于Qwen3\-Omni\-Flash在性别维度上的推断准确率的96\.36%。该结论适用边界受限于英语讲座场景与开源语音分布，对多语言、电话信道与对抗扰动下的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 124. [长视频里听懂人：LongInsightBench 为何同时考定位、排序与因果](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-965-260613c100/)

> 英文题目：*[LongInsightBench: A Comprehensive Benchmark for Evaluating Omni\-Modal Models on Human\-Centric Long\-Video Understanding\.](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-965-260613c100/)*

标签：#基准测试 #基准设计 #音视频 #音视频问答

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频问答 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.965/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.965.pdf)

👥 **作者与机构**

- ZhaoYang Han：机构信息未能从会议 PDF 纯文本可靠映射
- Qihan Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Hao Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Bowen Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Zhou Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Wentao Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

LongInsightBench 面向平均 539 秒的人类中心长视频，输入为视觉帧与音频语音及环境声，输出为多项选择答案，要求在数十分钟跨度上完成视听对齐与跨事件因果推理。构建链分四步推进，视频筛选先以时长大于 7 分钟与场景切换及语义话题数为条件保留高密度样本，转录与切分输出事件边界后进入多模态标注，视觉描述由 Ovis2\.5\-9B 生成而音频描述由 Gemini2\.0\-Flash 生成并一同送入问答合成，最后三阶段质检剔除单模态可解与低分样本。与以往短片段或纯视觉长视频基准的关键机制差异在于同时强制事件内定位与事件间排序演化因果六类任务，并显式要求双模态证据缺一不可。在 1001 个视频与 4781 道题的评测中 Gemini3\-Pro 以 80\.04% 总准确率居首并在跨事件因果上显著领先开源模型。结论仅适用于讲座访谈与旅行记录类英文高语言密度内容，对低语音密度与强动作依赖视频尚未验证。原文未披露训练成本，仅披露本地 16 卡 A800 约 250 GPU 小时与 Gemini2\.5\-Flash 约 700 美元调用费用。

🔗 **开源资源**

- 数据相关资源：<https://huggingface.co/datasets/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 125. [谁在何时说了什么：用双流解耦与数字时间锚做联合识别与 diarization](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1938-aff4cdc5c6/)

> 英文题目：*[TagSpeech: End\-to\-End Multi\-Speaker ASR and Diarization with Fine\-Grained Temporal Grounding](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1938-aff4cdc5c6/)*

标签：#会议转录 #端到端学习 #语音 #语音识别 #说话人分离标注

评分：**6.7/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#说话人分离标注 | 主方法：#端到端学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1938/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1938.pdf)

👥 **作者与机构**

- Mingyue Huo：机构信息未能从会议 PDF 纯文本可靠映射
- Yiwen Shao：机构信息未能从会议 PDF 纯文本可靠映射
- Yuheng Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务输入为会议远场混合波形的80维对数Mel频谱，输出为同时携带转写文本、说话人身份与起止时间戳的结构化序列，难点在于频繁重叠、快速轮次切换以及语义连续性与说话人切换错位。方法先用解耦双流编码器分工：语义流经序列化输出训练学习多说话人轮次动态，说话人流保持内容不变的判别性，两路输出同步送入下一步对齐。接着两路特征经两层投影器映射到大语言模型空间，并按固定8帧间隔交织插入数字时间锚点，将双流同步为带细粒度时间接地的统一输入。然后输入输出均采用XML风格共享标签显式对齐文本通道与说话人通道，冻结Qwen2\.5\-Instruct\-7B主干而仅训练轻量投影器做自回归生成。与依赖外部聚类或仅做说话人归属转写的级联方法不同，该机制直接复用大语言模型已有数字token而无需扩展词表，强制内容、说话人与时间在生成中联合对齐。在AliMeeting基准下，TagSpeech的DER为22\.13%，低于Pyannote 3\.1\+Whisper\-large\-v3级联基线的DER 26\.13%。其适用边界为话轮组切分的中英文会议场景，极短或超长语音及跨语言零样本转写为失败条件，跨数据集外推尚未验证。在H200硬件上仅训练投影器的训练成本约为3小时收敛，但自回归解码的延迟仍高于级联判别系统。

🔗 **开源资源**

- 第三方资源：<https://huggingface.co/Qwen/Qwen2.5-Omni-7B> — 暂时无法访问
- 第三方资源：<https://huggingface.co/Qwen/> — 暂时无法访问
- 第三方资源：<https://huggingface.co/pyannote/> — 暂时无法访问
- 第三方资源：<https://huggingface.co/openai/> — 暂时无法访问
- 第三方资源：<https://huggingface.co/microsoft/wavlm-large> — 暂时无法访问
- 第三方资源：<https://github.com/BYVoid/OpenCC> — 暂时无法访问
- 第三方资源：<https://ai.google.dev/api/generate-content#> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 126. [标准语上文本最强，方言上语音反超：德语意图与话题分类的三路对照](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-309-bc4f3ef185/)

> 英文题目：*[Standard\-to\-Dialect Transfer Trends Differ across Text and Speech: A Case Study on Intent and Topic Classification in German Dialects](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-309-bc4f3ef185/)*

标签：#数据集 #迁移学习 #语音 #口语意图与槽位识别

评分：**6.7/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#口语意图与槽位识别 | 主方法：#迁移学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.309/) · [官方 PDF](https://aclanthology.org/2026.acl-long.309.pdf)

👥 **作者与机构**

- Verena Blaschke：机构信息未能从会议 PDF 纯文本可靠映射
- Miriam Winkler：机构信息未能从会议 PDF 纯文本可靠映射
- Barbara Plank：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究处理以标准德语为训练、方言为零样本测试的意图分类与话题分类，输入为书面查询或朗读语音，输出为10类意图或10类话题标签，难点在于方言缺乏规范拼写致使文本子词切分失效而语音仍保留可辨别的连续音系变异。方法链由三路并行构成：文本支路在德语文本上微调多语言编码器加线性分类头并直接测试方言文本，语音支路在德语语音上微调语音编码器加分类头并直接测试方言语音。级联支路复用已训练文本分类器，测试时先用冻结ASR模型将方言语音转写为文本再送入文本分类器，其转写输出即为下一步分类输入，从而形成转写归一化再分类的两步链条。相对已有方言文本迁移工作，关键差异是引入连续声学表示与ASR隐式方言到标准语归一化机制，其实测意义在于转写质量直接决定级联能否超越纯文本迁移。在xSID巴伐利亚语意图分类测试集下，Whisper smallASR语音模型的准确率为80\.3%，高于mBERT文本模型的62\.8%。该结论适用边界限于德语系亲缘方言的朗读短查询与短句话题，在自发语音、多说话人与远距离方言等条件下尚未验证且级联在差ASR下会失败。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 127. [把 Transformer 换成 Mamba 做语音自监督：长语音更快，但双向扩展仍有代价](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-470-7ff7eb9184/)

> 英文题目：*[An Exploration of Mamba for Speech Self\-Supervised Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-470-7ff7eb9184/)*

标签：#自监督学习 #状态空间模型 #长音频处理 #语音识别

评分：**6.7/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#状态空间模型

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.470/) · [官方 PDF](https://aclanthology.org/2026.acl-long.470.pdf)

👥 **作者与机构**

- Tzu\-Quan Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Heng\-Cheng Kuo：机构信息未能从会议 PDF 纯文本可靠映射
- Tzu\-Chieh Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Hsi\-Chun Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Chun Wei Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Hsien\-Fu Hsiao：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Tsao：机构信息未能从会议 PDF 纯文本可靠映射
- Hung\-yi Lee：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究处理语音自监督表示学习向识别与理解任务迁移的问题，输入为16 kHz原始波形或TEDLIUM3中长达数分钟的连续讲座语音，输出为音素与说话人属性更可分的表示及低词错率转写，难点在于Transformer自注意力的二次复杂度导致长语音显存爆炸，且流式场景只能利用过去信息。方法链条分为三步，首先以7层卷积编码器将波形降采样为20 ms帧序列以保留局部声学结构，其次用Mamba或外部双向Mamba替换Transformer块进行HuBERT式掩码预测预训练以学习上下文表示，最后将学到的深层表示送入冻结骨干加轻量探测头或整体微调加联结时序分类解码器完成识别与SUPERB评估。相对全局成对加权的自注意力，Mamba以输入依赖的离散化步长与状态转移实现内容选择和线性递推，天然因果且计算量随长度线性增长，因而更适配长上下文与实时建模。在TEDLIUM3长上下文ASR评测任务下，ExtBiMamba Base文档级条件的词错率WER为11\.08%，低于话语级条件的13\.37%。该结论的适用边界受限于LibriSpeech 960小时英语朗读预训练与单次训练报告，双向Base规模在完整SUPERB上仍落后Transformer且多语噪声场景尚未验证。预训练在单块NVIDIA V100硬件上以8倍于原HuBERT的单卡批量完成，长序列下Mamba的计算量与实时因子显著低于因果Transformer且后者在80秒以上出现显存不足。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 128. [先对齐再推理：RespiraMFM 用对比投影解决呼吸音与症状文本的语义错位](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-58-edd7e8c5c3/)

> 英文题目：*[RespiraMFM: A Multimodal Foundation Model with Contrastive Audio\-Language Alignment for Respiratory Disease Identification](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-58-edd7e8c5c3/)*

标签：#语音生物标志物 #对比学习 #多模态学习 #零样本 #病理语音评估

评分：**6.7/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#病理语音评估 | 主方法：#对比学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.58/) · [官方 PDF](https://aclanthology.org/2026.acl-long.58.pdf)

👥 **作者与机构**

- Shakhrul Iman Siam：机构信息未能从会议 PDF 纯文本可靠映射
- Tiantian Feng：机构信息未能从会议 PDF 纯文本可靠映射
- Jiankun Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shrikanth Narayanan：机构信息未能从会议 PDF 纯文本可靠映射
- Mi Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

呼吸疾病识别需以呼吸音频与症状病史文本为输入预测疾病类别，难点在于音频编码器与大语言模型语义空间错位、标注稀缺及跨数据集与跨病种泛化差。RespiraMFM第一阶段做模态对齐，用轻量多层感知机投影器将高维音频特征经对比训练映射到Phi\-2语义空间，实现声学特征向症状概念的语义锚定。第二阶段冻结已学投影器，将对齐后音频嵌入与指令提示及病史文本拼接送入大语言模型。模型再经低秩适配微调保留预训练知识并生成最终疾病预测，其训练数据来自T1至T4联合训练集并在T5至T9上做零样本评估。与RespLLM单阶段联合训练线性投影器不同，显式对比对齐使音频簇更可分并改善零样本初始化，推理时即使仅有音频也能受益于已对齐空间。在T1监督评测任务下，RespiraMFM的AUROC为0\.910±0\.002，高于RespLLM的0\.881±0\.005。结论受限于KAUH小样本评估、症状元数据质量依赖及缺失与噪声下的退化，硬件为四个NVIDIA A100\-80GB GPU且训练成本受限于20轮与批量大小16的配置。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/microsoft/phi-2> — 暂时无法访问
- 第三方资源：<https://github.com/QwenLM/Qwen2-Audio> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 129. [噪声不在波形里，而在嵌入的方向上：SEE 量化与 SEEN 中和](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-866-b00a3c29c4/)

> 英文题目：*[SEE: Signal Embedding Energy for Quantifying Noise Interference in Large Audio Language Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-866-b00a3c29c4/)*

标签：#信号处理 #统计分析 #音频大模型 #鲁棒性 #音频问答

评分：**6.7/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#信号处理

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.866/) · [官方 PDF](https://aclanthology.org/2026.acl-long.866.pdf)

👥 **作者与机构**

- Yuanhe Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiayu Tian：机构信息未能从会议 PDF 纯文本可靠映射
- Yibo Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shilinlu Yan：机构信息未能从会议 PDF 纯文本可靠映射
- Liang Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenhong Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Li Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Sen Su：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

大型音频语言模型以连续音频帧为输入生成文本回答，设备与环境噪声会扭曲波形并引发语义幻觉，仅靠任务准确率难以定位干扰来源。离线标定阶段对干净语义集与50段纯噪声集的层级池化激活做奇异值分解并筛选噪声独有方向构建噪声子空间，其基矩阵输出进入下一步。在线评估阶段将输入激活投影到该子空间并按归一化能量计算信号嵌入能量得到SEE，单调反映噪声强度。能量中和阶段由激活减去重构的噪声分量后继续前向推理得到净化输出。与波形级语音增强只优化声学保真不同，该方法直接在嵌入空间度量并消除语义偏置，具有可解释的探针意义。在Music任务SNR=5条件下，SEEN的余弦相似度分数为0\.8636，高于STFT的余弦相似度分数0\.7610。该结论适用边界受限于可采集配对纯噪声的中低多变环境与所测问答转写任务，对强破坏信息缺失与长时非平稳干扰尚未验证。实验部署硬件为配备NVIDIA RTX 5090的服务器并以16kHz单声道输入运行，原文未细化训练成本与延迟差异。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 130. [整句重复又帧内粘连：MelTrim 先按声音粗筛再按梯度细剪做语音分类剪枝](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-672-5a196114a3/)

> 英文题目：*[MelTrim: Coarse\-to\-Fine Data Pruning for Speech Classification](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-672-5a196114a3/)*

标签：#开源工具 #数据集构建 #语音 #语音情感识别 #说话人识别

评分：**6.7/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#数据集构建

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.672/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.672.pdf)

👥 **作者与机构**

- Shaobo Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Tianle Niu：机构信息未能从会议 PDF 纯文本可靠映射
- Xuan Ouyang：机构信息未能从会议 PDF 纯文本可靠映射
- Xintong Li：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengkun Ge：机构信息未能从会议 PDF 纯文本可靠映射
- Yue Min：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoqian Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Hankun Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Linfeng Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音分类输入为可变长波形，输出为情感或说话人等离散标签，难点在于语句间语义重叠与语句内帧连续冗余并存，通用图像剪枝准则难以兼顾两者。先做语句级粗筛，输入为全部语句展平后的梅尔频率倒谱系数向量，职责是经均匀流形近似与投影降维后用基于密度的聚类去噪并按簇内质心距离保留，输出为保留声学多样的语句子集。再将该子集送入帧级细剪，把每条语句切分为候选片段并用冻结的轻量裁判模型以梯度范数近似的效用逐段打分，输出为每句仅保留的最高分片段。最后对所有最高分片段全局取Top\-K，输入为上一步的句级最优片段集合，职责是按效用排序截断，输出为语句级与帧级双压缩的核心集供下游建模。与Herding、K\-Center等直接迁移方法不同，粗筛刻意回避语义不变的深层特征以保全音色韵律覆盖，细剪则依赖任务对齐梯度而非熵或遗忘次数。在VoxCeleb1说话人识别任务下，MelTrim的EER为31\.38±0\.4%，低于Herding的37\.04±0\.5%。结论受限于4类情感与10说话人子集等小划分验证，MELD上计入选择开销后训练成本从3360\.0s降至1313\.9s仍具加速意义。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 131. [两端多学中间少动：按深度分配低秩容量的低资源多语种适配](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-827-5845c869eb/)

> 英文题目：*[Adapting Where It Matters: Depth\-Aware Adaptation for Efficient Multilingual Speech Recognition in Low\-Resource Languages](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-827-5845c869eb/)*

标签：#LoRA #高效推理 #低资源 #多语言 #语音识别

评分：**6.7/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#LoRA

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.827/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.827.pdf)

👥 **作者与机构**

- Yang Xiao：机构信息未能从会议 PDF 纯文本可靠映射
- Eun\-Jung Holden：机构信息未能从会议 PDF 纯文本可靠映射
- Ting Dang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多语言自动语音识别需将语音输入转写为18种低资源语言文本，难点在于每语言标注仅0\.5小时到10小时且全量微调易过拟合与灾难遗忘。深度感知模型自适应先用层级线性探测刻画可塑性，再按U形秩调度为早期与晚期分配高秩而压缩中层，接着对中层低秩增量做奇异值分解尾部子空间初始化以避开语义主方向，最后冻结中层投影下矩阵而仅训练上矩阵以锁定语义谷。与均匀适配的低秩自适应相比，关键差异是以结构先验代替逐层同秩与数据敏感性剪枝，把容量集中于语言相关层而保护语言无关层。在Common Voice与FLEURS的10小时设置下该方法平均词错率为39\.73%，与低秩自适应的39\.71%基本持平而可训练参数从68\.2M降至14\.9M。其适用边界是低资源新语言快速适配与Whisper large v2解码器结构，高资源下放松中层约束可能更优，编码器与其他任务的外推尚未验证。成本方面额外乘加操作约22\.3G，显著低于基线，峰值显存约21\.63GB，较全量微调降低约24%。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 132. [看见消防车、听见警笛才行动：PEAP 要求视觉与音频联合决定动作序列](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1060-2d6fbf1bc2/)

> 英文题目：*[PEAP: Proactive Embodied Action Sequence Planning with Joint Understanding of Vision and Audio Perception](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1060-2d6fbf1bc2/)*

标签：#数据集 #基准设计 #音视频 #音视频交互

评分：**6.6/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频交互 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1060/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1060.pdf)

👥 **作者与机构**

- Tianwei Lan：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaqi Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Zeming Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Zhaoxin Fan：机构信息未能从会议 PDF 纯文本可靠映射
- Haifeng Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhang Guo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为视觉场景V、环境音频A与角色文本T，输出为移动、操作与对话构成的主动协助动作序列，难点在于无显式指令时须从视听联合语义判断是否介入与如何介入。数据构建先按可共现关系将场景图像库与环境声音库配对并混入含声视频，再由图像与音频描述模型在给定真值标签下生成文本描述，经DeepSeek\-V3\.2过滤出具有明确协助方向的样本并标注方向性答案，最后经人工审核形成19963条覆盖122场景的数据。评测链先由人工智能专业学生标注约6000条裁判样本训练评估模型，再用微调后Qwen3\-8B与Llama3\-8B同DeepSeek三路投票加人工仲裁对场景识别、声音事件识别与是否协助三个二值子指标打分，仅三项全过总体才记1分。与单模态级联或仅依赖视觉猜测相比，该设计以模态消融与模态替换分离联合理解与单模态捷径的贡献，迫使规划同时立足于场景与声音事件。在PEAP测试集下，Gemini\-3 Pro的Overall得分为80\.6，高于Qwen3\-omni的Overall得分76\.0。该结论适用边界限于离散视听配对的主动规划，替换视觉或长时序导航等外推尚未验证，且单模态缺失会导致任务失败。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://hf-mirror.com/fancyfeast/> → <https://huggingface.co/fancyfeast/> — 暂时无法访问
- 第三方资源：<https://hf-mirror.com/nvidia/> → <https://huggingface.co/nvidia/> — 暂时无法访问
- 第三方资源：<https://platform.openai.com/docs/models/> → <https://developers.openai.com/api/docs/models> — 链接可访问（HTTP 200）
- 第三方资源：<https://deepmind.google/models/gemini/pro/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 133. [先用口音标签分工，再用转写质量选路：MOE\-CTC 的口音鲁棒识别](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1194-11984b3ac8/)

> 英文题目：*[Mixture\-of\-Experts with Intermediate CTC Supervision for Accented Speech Recognition](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1194-11984b3ac8/)*

标签：#CTC #混合专家模型 #语音 #语音识别

评分：**6.6/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#混合专家模型

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1194/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1194.pdf)

👥 **作者与机构**

- Wonjun Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Hyounghun Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Gary Lee：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

口音鲁棒自动语音识别的输入为带口音的英语语音，输出为文字转写，难点在于训练数据被少数高资源口音主导而未见口音声学偏移大。该方法首先在FastConformer编码器第4、8、12层间插入序列级混合专家模块，以整句路由从上一层表示中分配Top\-K专家进行处理。接着在训练早期加入口音偏置项与口音分类损失，利用口音标签引导路由分布形成专家特化并输出口音感知的中间表示。然后为每个专家配备独立CTC头并以路由加权局部损失将路由与转写质量对齐，再经两阶段训练过渡到无标签的口音无关微调以支持无标签推理。与仅优化口音判别或测试时均匀平均专家的方法不同，该设计让路由目标直接优化识别损失，具有转写导向的实际意义。在MCV\-ACCENT\-TEST测试集下，MOE\-CTC的未见口音平均WER为12\.5%，低于FastConformer基线的17\.3%。该结论适用边界受限于英语5个已见口音与9个未见口音的验证，混合与码切换语音及多语言泛化尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 134. [一个模型管 72 个方向：用源端与目标端双路专家拆开识别与翻译的干扰](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1634-3baf64f70a/)

> 英文题目：*[LCMA\-SRT: Language\-Conditional Mixture\-of\-Experts Adapters for Joint Multilingual Speech Recognition and Translation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1634-3baf64f70a/)*

标签：#混合专家模型 #多语言 #语音识别 #语音翻译

评分：**6.6/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音翻译 | 主方法：#混合专家模型

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1634/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1634.pdf)

👥 **作者与机构**

- Nanjie Li：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoyong Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Hao Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Xu Haihua：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Shi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多对多联合建模需同时从语音输入解码源语言转写并生成目标语言译文，难点在于共享表示在识别侧产生跨语言负迁移，在翻译侧出现目标语言漂移与重排序失配。本文提出语言条件混合专家适配器方法（Language\-Conditional Mixture\-of\-Experts Adapters，LCMA\-SRT），以两阶段分层换能器为骨架，先由语音识别编码器产出语音对齐表示，再经源条件适配器提炼后送入翻译编码器与目标条件适配器完成翻译朝向特化。源条件分支以源语言嵌入控制路由以隔离声学音系差异，目标条件分支以目标语言嵌入控制路由并配合目标前缀约束输出语言。与全共享多对多基线相比，该方法在 Europarl\-ST 测试集72个方向上将平均BLEU从4\.3提升至20\.5，同时将平均词错率从16\.65%降至15\.71%，并超越9模型方向专用基线平均15\.3 BLEU和23\.28%词错率，单模型77M替代总量549M。结论目前仅在离线Europarl\-ST九语言议会演讲场景得到验证，流式、开放域与语言标识缺失或错误时的鲁棒性尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/k2-fsa/icefall> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 135. [把说话声放进场景里：语音与环境为何要分流建模再对齐](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1774-c09a9a7449/)

> 英文题目：*[ImmersiveTTS: Environment\-Aware Text\-to\-Speech with Multimodal Diffusion Transformer and Domain\-Specific Representation Alignment](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1774-c09a9a7449/)*

标签：#流匹配 #多模态学习 #环境声 #语音 #文本到语音

评分：**6.6/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：模型报告 | 主任务：#文本到语音 | 主方法：#流匹配

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1774/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1774.pdf)

👥 **作者与机构**

- Jun\-Hak Yun：机构信息未能从会议 PDF 纯文本可靠映射
- Seung\-Bin Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Seong\-Whan Lee：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

环境感知文本到语音的输入是内容文本 \(y\_\{cont\}\) 与环境描述文本 \(y\_\{env\}\)，输出是语音与环境声融合的单轨 16 kHz波形，难点是语音的音素时序结构与环境声的非平稳纹理差异大且互相掩蔽。ImmersiveTTS 先用冻结的 AudioLDM2 音频变分自编码器（Variational Autoencoder，VAE）把 64维对数梅尔频谱在时频各下采样 4倍得到 8通道潜变量 \(Z\)，再以多模态扩散变换器（Multimodal Diffusion Transformer，MM\-DiT）建模：转录对齐语音流与文本条件环境上下文流在 12个双流块中经联合注意力双向交互，仅语音侧输出再经 18个单流块精炼，最后由 VAE解码器与预训练声码器还原波形。训练另引入域特定表示对齐（Representation Alignment，REPA），从语音流中间层抽特征经多层感知机（Multilayer Perceptron，MLP）投影后与 WavLM（语音教师）及 ATST\-Frame（环境教师）做余弦相似度对齐，以稳定流匹配去噪轨迹。与 VoiceLDM 的 U\-Net交叉注意力注入和 VoiceDiT 的自适应层归一化（Adaptive Layer Normalization，AdaLN）条件相比，该工作把两路当对等模态逐层交互。在 AudioCaps真实含噪测试上 25次函数评估（Number of Function Evaluations，NFEs）取得词错率（Word Error Rate，WER）8\.06%、弗雷歇音频距离（Frechet Audio Distance，FAD）5\.80、对比语言音频预训练（Contrastive Language\-Audio Pretraining，CLAP）得分 0\.308，优于 200步的 VoiceDiT与 VoiceLDM。但在附录的拼装流水线对比中 CosyVoice2加 TangoFlux混合在两套测试上客观指标均更优，统一建模优势仅剩定性相干主张。训练依赖 LibriTTS干净语音与 WavCaps过滤后 34万条环境声在 2至 10 dB信噪比下人工混合，未验证真实野外录音、极低信噪比与韵律情感控制。

🔗 **开源资源**

- 第三方资源：<https://huggingface.co/cvssp/audioldm2> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 136. [不急着融合：用显式动作先决定信谁再转写](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1997-72a690741e/)

> 英文题目：*[Speech\-Hands: A Self\-Reflection Voice Agentic Approach to Speech Recognition and Audio Reasoning with Omni Perception](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1997-72a690741e/)*

标签：#SFT #音频大模型 #语音识别 #音频问答

评分：**6.6/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#SFT

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1997/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1997.pdf)

👥 **作者与机构**

- Zhen Wan：机构信息未能从会议 PDF 纯文本可靠映射
- Chao\-Han Huck Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Jinchuan Tian：机构信息未能从会议 PDF 纯文本可靠映射
- Hanrong Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Ankita Pasad：机构信息未能从会议 PDF 纯文本可靠映射
- Szu\-Wei Fu：机构信息未能从会议 PDF 纯文本可靠映射
- Arushi Goel：机构信息未能从会议 PDF 纯文本可靠映射
- Ryo Hachiuma：机构信息未能从会议 PDF 纯文本可靠映射
- Shizhe Diao：机构信息未能从会议 PDF 纯文本可靠映射
- Kunal Dhawan：机构信息未能从会议 PDF 纯文本可靠映射
- Sreyan Ghosh：机构信息未能从会议 PDF 纯文本可靠映射
- Yusuke Hirota：机构信息未能从会议 PDF 纯文本可靠映射
- Zhehuai Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Rafael Valle：机构信息未能从会议 PDF 纯文本可靠映射
- Chenhui Chu：机构信息未能从会议 PDF 纯文本可靠映射
- Shinji Watanabe：机构信息未能从会议 PDF 纯文本可靠映射
- Boris Ginsburg：机构信息未能从会议 PDF 纯文本可靠映射
- Yu\-Chiang Frank Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为原始音频、可选文本问题、模型自身首遍假设与外部系统假设，输出为转写文本或多选答案，难点在于外部假设可能错误而无仲裁的全模态直接融合会放大幻觉与过度纠正。本文先并行生成内部假设、外部假设与融合重写假设，再按优劣比较构造显式动作标签，接着把动作标记与目标拼接为统一序列做监督微调，最后在推理时先解码动作再按动作生成结果。相比仅操作文本的生成式纠错与无仲裁的全模态拼接，该机制把信任分配显式化，使转写与推理共用同一可控框架。在7个英语语音识别数据集上对接Parakeet时平均词错误率降至5\.69%，优于同期最强基线Parakeet的6\.68%，在音频问答上多数采样版本平均准确率达到77\.37%，高于Audio Flamingo 3的74\.49%。该结论限于英语为主的转写与三类音频问答，跨外部系统迁移与多外部源设置尚未验证，重写动作在稀有类上仍欠触发。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 137. [先标出不流利词，再让大模型学会不说：三语语音纠错的对比调优](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2137-1582f3416c/)

> 英文题目：*[Mind the Pause: Disfluency\-Aware Objective Tuning for Multilingual Speech Correction with LLMs](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2137-1582f3416c/)*

标签：#对比学习 #指令微调 #大语言模型 #多语言 #语音识别

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#对比学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.2137/) · [官方 PDF](https://aclanthology.org/2026.acl-long.2137.pdf)

👥 **作者与机构**

- Deepak Kumar：机构信息未能从会议 PDF 纯文本可靠映射
- Baban Gain：机构信息未能从会议 PDF 纯文本可靠映射
- Asif Ekbal：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为含填充词、重复、误起与自我修复的自动语音识别转写文本，输出为保留原意的流畅文本，难点在于印度语言形态丰富且真实口语噪声与合成训练分布差异大。该方法先以多语言编码器对齐平行语料得到词级流畅与不流畅标签并训练序列标注器，负责为每句提供可信的不流畅位置信号。接着将自然语言指令、不流畅原句、词元与标签序列及不流畅词表拼接为输入送入指令微调的大语言模型，由其负责重写生成流畅参考句。最后以交叉熵对齐流畅目标并附加对比项惩罚生成已知不流畅词元，总目标以权重平衡，促使解码时主动抑制复现而非事后删除。在Hindi真实数据评测设置下，带对比损失方法的BLEU为91\.1，高于多语言指令微调的79\.5。与仅删除标签词元或单纯多语言指令微调不同，该对比项提供了显式负信号从而在解码时抑制复现，实际意义在于保留语法完整性并修复误起与同义改述等复杂现象。其结论适用边界受限于Hindi、Bengali和Marathi三语及数百句规模的真实测试集，跨语域与更大噪声下的外推尚未验证。训练硬件为单块80GB显存的NVIDIA A100，序列长度为512且有效批量为16。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 138. [同时听看读才能判对：Omni\-RewardBench 逼奖励模型做三模态排序](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-636-c4a0a750bb/)

> 英文题目：*[Omni\-RewardBench: Toward a Comprehensive Evaluation of Generative Reward Models Across Modalities](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-636-c4a0a750bb/)*

标签：#基准测试 #基准设计 #音视频 #音视频问答

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频问答 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.636/) · [官方 PDF](https://aclanthology.org/2026.acl-long.636.pdf)

👥 **作者与机构**

- Chi\-Min Chan：机构信息未能从会议 PDF 纯文本可靠映射
- Yujin Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Pengcheng Wen：机构信息未能从会议 PDF 纯文本可靠映射
- Boqin Yin：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaming Ji：机构信息未能从会议 PDF 纯文本可靠映射
- Juntao Dai：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Xue：机构信息未能从会议 PDF 纯文本可靠映射
- Sirui Han：机构信息未能从会议 PDF 纯文本可靠映射
- Yike Guo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为同时包含文本、音频与图像或视频的全模态问题，输出为对选中与拒绝回答的二元偏好判定，难点在于三模态联合感知与推理必须同时成立且任一模态缺失即判错。先从OmniBench等四个开源库汇聚必须三模态协同的多选题，职责是保证输入完备，输出为覆盖8大类的全模态题库。再以该题库为输入，用文本字幕桥接缺失模态并调用8个双模态与全模态模型生成多样回答，职责是构造可比候选，输出为每题多回答集合。最后以回答集合为输入，交由另一组8个不重叠评估器按整合度等五维打分，再经方差过滤的博尔达计数聚合选出首尾回答并经人工核验，职责是消除量纲差异与高分歧噪声，输出为偏好明确的选中拒绝样本。与已有文本或双模态奖励基准相比，该机制首次覆盖三模态输入并以排序聚合代替均值聚合，具有补齐全模态对齐评估的意义。在Omni\-RewardBench基准成对评测设置下，Gemini\-2\.5\-Flash的平均成对准确率为83\.81%，高于Qwen\-Omni\-7B的74\.03%。该结论适用边界仅限多选式成对偏好判别与所覆盖场景，对开放生成与奖励训练优化尚未验证，评估硬件为NVIDIA H800集群且评估温度为0\.0。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 139. [肌电功率为何能对齐自监督语音表示：emg2speech 的无对齐合成路径](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-750-3feadef923/)

> 英文题目：*[emg2speech: synthesizing speech from electromyography using self\-supervised speech models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-750-3feadef923/)*

标签：#CTC #生理信号 #语音 #静默语音接口

评分：**6.6/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#静默语音接口 | 主方法：#CTC

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.750/) · [官方 PDF](https://aclanthology.org/2026.acl-long.750.pdf)

👥 **作者与机构**

- Harshavardhana T Gowda：机构信息未能从会议 PDF 纯文本可靠映射
- Daniel C Comstock：机构信息未能从会议 PDF 纯文本可靠映射
- Lee M\. Miller：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理从口面肌电直接恢复可听语音的静默语音接口问题，输入为颈、下颌、面颊和唇部多部位表面肌电序列，输出为语音波形，难点是训练时无帧级肌电音频对齐且临床场景可能根本没有可靠配对音频。方法先将肌电分段求协方差并向量化为定步长特征序列，保留肌肉功率与通道协同结构以供时序建模。接着时深可分离卷积编码器在CTC准则下预测离散HuBERT自监督单元，输出分布经贪婪搜索解码为单元序列。然后冻结声码器将单元序列合成为波形，同时另设音素头经单元到音素表边缘化施加一致性约束，使单元预测保持音素一致并流入单元头训练。在DATA GENERAL语料评测设置下，音素引导解码的单元错误率（UER）为51\.81±0\.62，低于仅单元CTC基线的56\.08±0\.91。相对依赖时间对齐肌电音频对或需训练声码器与显式构音模型的已有方法，该链条以自监督语音空间为中介实现无对齐端到端肌电到语音，实际意义是单例ALS静默构音也能合成开放词汇音频。结论适用边界受限于单健康被试有声发音加单例硬化症被试静默构音的离线评测，尚未验证电极移位、日间漂移与疾病进展下的纵向稳定性；原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 140. [边说边听不断线：用自动考官逼出多轮全双工对话的掉线与失忆](/posts/conference-acl-2026-conference-paper-id-2026-acl-short-4-75ead66a0e/)

> 英文题目：*[Full\-Duplex\-Bench\-v2: A Multi\-Turn Evaluation Framework for Duplex Dialogue Systems with an Automated Examiner](/posts/conference-acl-2026-conference-paper-id-2026-acl-short-4-75ead66a0e/)*

标签：#基准测试 #基准设计 #人类参与评测 #全双工语音交互

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#全双工语音交互 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-short.4/) · [官方 PDF](https://aclanthology.org/2026.acl-short.4.pdf)

👥 **作者与机构**

- Guan\-Ting Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Shih\-Yun Shan Kuan：机构信息未能从会议 PDF 纯文本可靠映射
- Jiatong Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Kai\-Wei Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Siddhant Arora：机构信息未能从会议 PDF 纯文本可靠映射
- Shinji Watanabe：机构信息未能从会议 PDF 纯文本可靠映射
- Hung\-yi Lee：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

全双工语音交互要求模型在同时听与说中处理重叠打断，并在多轮推进里维持轮次衔接与状态一致，难点在于重叠时序与长程目标、修正采纳与指代累积相互耦合，单轮评测难以暴露状态丢失。方法分三步衔接：首先自动化考官以合成语音驱动分阶段语义目标，并按快慢两种节奏主动推进或等待轮次结束，可打断制造自然重叠。首先考官输出的阶段目标与节奏策略进入实时交互，接着编排器经WebRTC在考官与被测模型间转发规范音频帧形成实时双向闭环，使双方接受相同声学条件并保留重叠时序。最后离线将双通道录音经Parakeet\-TDT转录为带时间戳文本，再由Gemini按考官剧本与阶段目标给出轮次流畅度、指令遵循与任务专项三维评分，转录输出直接进入裁判输入。与单轮脚本或仅测重叠时序评测的关键差异在于将打断处理、修正采纳与实体跟踪放在完整多轮轨迹上检验，因而能暴露快节奏下时序压力与长程一致性的耦合失效，具有可复现的多轮诊断意义。在Fast节奏任务条件下，GPT\-Realtime的修正任务专项分数为4\.02，高于Moshi的2\.88。人类在120会话子集上的验证显示自动裁判与人工评分呈中高度一致，慢节奏下开源模型修正与实体跟踪有所回升但仍落后。结论适用边界限于英语预设剧本与合成考官语音，开放域协商、情感韵律与多语言重叠规范尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://huggingface.co/nvidia/parakeet-tdt-0.6b-v2> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 141. [听声辨物还不够：AUDITA 用人类 trivia 逼出音频问答的推理缺口](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1292-5b7daa0c58/)

> 英文题目：*[AUDITA: A New Dataset to Audit Humans vs\. AI Skill at Audio QA](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1292-5b7daa0c58/)*

标签：#基准测试 #基准设计 #心理测量 #音频问答

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1292/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1292.pdf)

👥 **作者与机构**

- Tasnim Kabir：机构信息未能从会议 PDF 纯文本可靠映射
- Dmytro Kurdydyk：机构信息未能从会议 PDF 纯文本可靠映射
- Aadi Palnitkar：机构信息未能从会议 PDF 纯文本可靠映射
- Liam Dorn：机构信息未能从会议 PDF 纯文本可靠映射
- Ahmed Haj Ahmed：机构信息未能从会议 PDF 纯文本可靠映射
- Jordan Lee Boyd\-Graber：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

AUDITA面对的输入是真实长音频片段加自然语言trivia提问，输出为可验证的开放短语或四选一选项，难点在于线索分散在旋律、音色、语种与文化指称中且需要长程整合。构建链分三步：先从Quizmasters、Pavement\-Music\-Tournaments与Audio\-Packets等来源抓取音频并重对齐问答以保留现实接地，再用规则加GPT\-4o\-mini做字符与格式归一化而不新增接受别名，随后按六大类归类并为每题生成经人工校验的三个强干扰项进入评测。与依赖字幕衍生问答可用文本先验解题不同，该基准强制音频到现实实体的长程接地，并对人类与十八个模型的二值正确矩阵拟合双参数逻辑IRT模型得到能力值theta、难度b与区分度a以摆脱平均准确率掩盖。在自由作答基准评测下，人类的准确率为32\.13%，高于模型均值的8\.86%。类别层面音乐与环境声差距尤为显著，且转录消融显示无音频时性能骤降，证实必须进行真正的听觉理解而非文本推理。结论适用边界限于英语trivia分布与中等规模本地可跑模型，检索增强或指纹工具链能否闭合差距尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 142. [不更新参数如何让阿拉伯方言识别变准：提示、前缀与代理重排的三条推理时通路](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1296-c6108b05b7/)

> 英文题目：*[Zero\-Shot Context\-Aware ASR for Diverse Arabic Varieties](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1296-c6108b05b7/)*

标签：#检索增强 #零样本 #语音 #语音识别

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#检索增强

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1296/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1296.pdf)

👥 **作者与机构**

- Bashar Talafha：机构信息未能从会议 PDF 纯文本可靠映射
- Amin Abu Alhassan：机构信息未能从会议 PDF 纯文本可靠映射
- Muhammad Abdul\-Mageed：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

零样本阿拉伯语识别（zero\-shot Arabic ASR）的输入是带方言口音的语音，输出为规范转写文本，难点在于方言与现代标准阿拉伯语（Modern Standard Arabic，MSA）在音系词汇句法上的偏离、正字法不统一、码切换以及方言标注语音稀缺。该文提出免训练的上下文感知解码（context\-aware decoding）链条：先由辅助系统产生首遍假设并作为查询，其次将该假设或检索到的近邻文本注入 Whisper 解码器提示区以偏置词汇选择，最后对非提示架构改用外部代理假设在 CTC 模型的 N\-best 列表中做文本距离重排。与需微调或学习重排器的方法不同，该链条完全不更新参数，仅靠破坏提示连贯性抑制续写幻觉并靠说话人一致合成减少声学断裂。在 10 个阿拉伯语条件下，最优上下文变体相对基线平均降低词错率（Word Error Rate，WER）22\.29%（MSA）、20\.54%（口音化 MSA）、9\.15%（方言）；CTC 部分在 Common Voice 15\.0 MSA 上相对降低 15\.6%。结论在重度领域失配、未覆盖方言和强码切换下仍不稳定，且长提示受解码器提示预算限制。原文未披露训练成本，仅在附录给出单卡 A10 推理延迟分解。

🔗 **开源资源**

- 第三方资源：<https://alliancecan.ca/> → <https://www.alliancecan.ca/en> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 143. [不靠语义猜声音：用海洋哺乳动物叫声逼模型真正去听](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1562-0870abe2cd/)

> 英文题目：*[WoW\-Bench: Evaluating Fine\-Grained Acoustic Perception in Audio\-Language Models via Marine Mammal Vocalizations](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1562-0870abe2cd/)*

标签：#基准测试 #基准设计 #音频大模型 #生物声学 #音频问答

评分：**6.6/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1562/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1562.pdf)

👥 **作者与机构**

- Jaeyeon Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Heeseung Yun：机构信息未能从会议 PDF 纯文本可靠映射
- Tony Woo：机构信息未能从会议 PDF 纯文本可靠映射
- Chao\-Han Huck Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Gunhee Kim：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该基准输入为海洋哺乳动物发声片段与四选一文本问题，输出为选项字母，要求模型在陌生声学域中完成物种与发声类型判别及细粒度听觉比较，难点在于剥离语义先验后仍需分辨音高、时长与序列转折等低层细节。方法链先从Watkins数据库筛选音频并用大语言模型结合频谱图与元数据生成感知与认知题干，其输出进入三名标注者交叉听辨的质量控制执行接受、修订或丢弃并改写选项以阻断词汇捷径。质控后的题干再按Bloom分类学的记忆、理解、应用与分析组织常规题与反期望干扰题，使同段音频对应相反正确答案以检验推理迁移的失效。相对覆盖日常声音的AIR\-Bench与MMAU等基准，关键机制差异是以分布外海洋哺乳动物声音阻断语义联想，并以相同声音选不可区分等干扰项强制验证真实聆听而非推理迁移。人类与跨基准对比显示MMAU高分并不迁移至WoW\-Bench，而非专家仍在时长比较等认知任务上占优，体现了低层听觉评估的实际意义。在物种分类任务评测下，Qwen2\-Audio\-Instruct在VGGSound条件下的准确率为76%，高于在WoW\-Bench条件下的28\.3%。该结论适用边界受限于单片段多选题与海洋哺乳动物声学域，尚未验证开放式描述、重叠声景及陆地语音音乐的外推性，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/bytedance/SALMONN> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/YuanGongND/ltu> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/Sreyan88/GAMA> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/QwenLM/Qwen-Audio> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/QwenLM/Qwen2-Audio> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 144. [以混合检索补压缩短板：XLSR\-MamBo 如何用 Mamba 与注意力检出伪造语音](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1573-34a32d77c2/)

> 英文题目：*[XLSR\-MamBo: Scaling the Hybrid Mamba\-Attention Backbone for Audio Deepfake Detection](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1573-34a32d77c2/)*

标签：#注意力机制 #状态空间模型 #语音 #音频深度伪造检测

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频深度伪造检测 | 主方法：#状态空间模型

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1573/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1573.pdf)

👥 **作者与机构**

- Kwok\-Ho Ng：机构信息未能从会议 PDF 纯文本可靠映射
- Tingting Song：机构信息未能从会议 PDF 纯文本可靠映射
- Yongdong WU：机构信息未能从会议 PDF 纯文本可靠映射
- Zhihua Xia：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频深度伪造检测以原始波形为输入并输出真伪二分类，难点在于伪造痕迹兼具局部高频时序异常与全局频谱不一致，且压缩传输与未知生成器带来严重域偏移。该方法先由XLSR\-300M前端将16kHz波形编码为高层帧序列，再经RMSNorm与线性下投影压缩至低维后送入混合主干，主干以Mamba类状态空间模型做高效时序压缩与隐式位置建模，并与多头自注意力交替或串联以实现基于内容的全局检索。最后由门控注意力池化将帧级特征聚合为话语级表示，再经线性层完成真伪判决，从而覆盖双重伪造痕迹。相较既有纯因果状态空间模型依赖启发式双分支拼接近似非因果感受野，Hydra以准可分矩阵实现原生双向建模，理论上表达力更强且避免结构冗余。在ASVspoof 2021 LA评测设置下，MamBo\-3\-Hydra\-N3的EER为0\.81%，低于XLSR\-Mamba的0\.93%。该结论适用边界受限于ASVspoof 2019 LA单源训练与英语为主评测，跨语言与大规模混合训练的外推尚未验证。实验硬件为一块RTX 4080 Super与两块RTX 3090，原文未系统报告训练成本与推理开销随深度扩展的变化。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 145. [简单题别啰嗦、难题多想想：让音频大模型的推理长度跟着难度走](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1640-5d68eec915/)

> 英文题目：*[Think Smart, Not Hard: Difficulty Adaptive Reasoning for Large Audio Language Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1640-5d68eec915/)*

标签：#强化学习 #音频大模型 #高效推理 #音频问答

评分：**6.6/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#强化学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1640/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1640.pdf)

👥 **作者与机构**

- Zhichao Sheng：机构信息未能从会议 PDF 纯文本可靠映射
- Shilin Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Chen Gong：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenghua Li：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频问答以音频片段与四选一问题为输入、以选项答案为输出，难点在于简单题冗余长推理易引入错误而难题又需充分链式推理，一刀切推理长度难以兼顾有效性与效率。方法链先对比监督微调与组相对策略优化及显隐式提示，揭示长推理在难易题上的分化表现，其难度分级结论进入奖励设计以确立自适应必要性。再由组采样正确率估计结果导向难度，或由音频注意力熵估计过程导向难度，从而形成分级或连续难度信号并在批次内归一化保持区分度。最后将难度信号映射为长度奖励指数曲线的衰减系数，直接控制随归一化长度衰减的快慢并随训练自适应更新，实现易题从简、难题从繁。相对固定阈值截断奖励与是否推理二分类机制，该设计实现了连续难度到连续长度的动态对齐，避免了易题惩罚过度与难题惩罚不足的失衡，并降低了后期全判为易题导致的奖励黑客风险。在MMAU、MMAU\-v0515与MMAR三数据集平均评测设置下，Ours的平均得分为70\.20，高于GRPO基线的68\.36。结论适用边界受限于四选一音频推理基准与LoRA微调设置，在开放式生成与更强基座下的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/Qwen/Qwen2-Audio-7B-Instruct> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/Qwen/Qwen2.5-Omni-7B> — 暂时无法访问
- 第三方资源：<https://huggingface.co/Qwen/Qwen3-235B-A22B> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 146. [把推理也当训练来扩展：掩码流匹配如何一步步重写音频](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1891-72bc6794bc/)

> 英文题目：*[Masked Text\-to\-Audio Flow\-Matching and Reward Feedback Optimization](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1891-72bc6794bc/)*

标签：#流匹配 #偏好优化 #Transformer #环境声 #音频生成

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#流匹配

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1891/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1891.pdf)

👥 **作者与机构**

- Rongjie Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Dongchao Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Wenxiang Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Huadai Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Xize Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Zehan Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Zhou Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Xixin Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Helen M\. Meng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

文本到音频生成需由自然语言描述合成高保真且语义忠实的声音，难点在于离散码本会损失连续声学细节，而单遍条件流匹配的推理扩展收益很快饱和。该方法先用连续变分自编码器将梅尔频谱压缩为潜表示并以对比语言音频预训练提取文本特征，为流匹配提供连续声学与语义输入。接着带交叉注意力和旋转位置编码的变换器对掩码跨度建模上下文，其输出进入轻量流匹配头以回归连续速度场并计算流匹配目标。推理时经由常微分方程求解器并行预测全部潜标记，再按余弦掩码调度迭代筛选重预测，最后用奖励加权流匹配在高偏好样本上微调以对齐人类偏好。与离散掩码生成和单遍条件流匹配相比，该机制避免了向量量化损失并将推理计算转化为可调节的精炼轮数，具有可扩展推理的实际意义。在AudioCaps测试集下，MaskAudioFlow的FAD指标为1\.10，低于CFM基线的FAD指标1\.22。当前结论适用边界受限于16kHz短时通用音效与LP\-MusicCaps音乐子集，尚未验证长音频时序一致性与开放域鲁棒性。训练成本为4块V100 GPU上训练至100万优化步，推理开销为默认8轮迭代解码配合25步ODE求解。

🔗 **开源资源**

- 演示资源：<https://maskaudio.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 147. [语音自监督表示为何能做音系加减法：方向与尺度的双重证据](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-537-c96e0f802a/)

> 英文题目：*[\[b\] = \[d\] \- \[t\] \+ \[p\]: Self\-supervised Speech Models Discover Phonological Vector Arithmetic](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-537-c96e0f802a/)*

标签：#统计分析 #可解释性 #语音学与音系 #语音 #语音合成

评分：**6.6/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音合成 | 主方法：#统计分析

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.537/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.537.pdf)

👥 **作者与机构**

- Kwanghee Choi：机构信息未能从会议 PDF 纯文本可靠映射
- Eunjung Yeo：机构信息未能从会议 PDF 纯文本可靠映射
- Cheol Jun Cho：机构信息未能从会议 PDF 纯文本可靠映射
- David Harwath：机构信息未能从会议 PDF 纯文本可靠映射
- David R\. Mortensen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务输入是连续语音帧级表征与音段起止时间，输出是形如\[p\]−\[t\]\+\[d\]≈\[b\]的音系类比预测与可连续加减的音系方向，实际难点在于语音时长可变、协同发音混叠且跨语言音位 inventory 差异大，难以分离出线性可加的音位特征方向。该方法先以潘凤特征在英语语料与多语言语料上构造仅差一个特征的四元类比组，为向量算术提供可验证真值。接着对切片后帧表征做音段级平均池化得到单向量，并用余弦排序与配对一致性检验确认类比方向是否存在。然后用类别均值差构造高低、前后、圆展、鼻音等音系向量，并将其按权重叠加回表征后经声码器重合成，以声学测量验证尺度单调性。与既往探针分类只检验是否编码音素信息不同，该工作同时检验方向可加性与尺度可控性，把离散音系特征重释为连续可操控向量，因而能连接标量与多值音系理论并支持跨语言泛化检验。在VoxAngeles语料基准设置下，响音向量与鼻音向量的余弦相似度指标为0\.78，高于响音向量与擦音向量的\-0\.57。该结论的适用边界受限于仅验证三个英语训练的自监督模型与有限可构造特征，且依赖特定声码器与甲状声学代价函数，对其他架构与感知有效性尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 148. [无声时肌肉还在说话：用通道协方差把肌电直接译成音素](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-564-e235c4865f/)

> 英文题目：*[Non\-invasive electromyographic speech neuroprosthesis: a geometric perspective](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-564-e235c4865f/)*

标签：#CTC #RNN #生理信号 #静默语音接口

评分：**6.6/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#静默语音接口 | 主方法：#RNN

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.564/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.564.pdf)

👥 **作者与机构**

- Harshavardhana T Gowda：机构信息未能从会议 PDF 纯文本可靠映射
- Lee M\. Miller：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是从面颈部多通道表面肌电直接解码连续静默语音，输入为无声构音时的肌电波形，输出为音素序列再转写为英文单词，难点在于无可听语音对齐与平行音频监督且容积传导使通道高度相关。方法先对信号带通滤波与逐通道归一化，再按滑动窗估计通道协方差并收缩正则为对称正定矩阵以显式刻画肌肉协同的二阶空间结构。接着以训练集Fréchet均值特征向量构成共享基对矩阵做近似对角化，其对角线即谱特征序列并作为下一步时序模型的输入。谱序列送入双向门控循环单元建模动态并以联结时序分类实现免对齐训练，推理时束搜索输出再经加权有限状态转换器语言模型转为单词。与依赖可听肌电到音频映射的范式不同，该方法将空间解耦与时序建模分离，使普通循环网络无需显式空间建模即可利用跨通道结构先验。在单被试大词表静默语料评测下，本方法的音素错误率为49%，低于随机猜测的98%。其适用边界受限于目前仅单名健康被试离线双向解码，尚未验证跨被试跨天漂移与病理人群的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 149. [平滑偏置之下：用模糊视图逼出瞬态证据的解码修正](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-733-de3cd2b4c5/)

> 英文题目：*[Temporal Contrastive Decoding: A Training\-Free Method for Large Audio\-Language Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-733-de3cd2b4c5/)*

标签：#测试时自适应 #统一音频模型 #语音 #音频问答

评分：**6.6/10** | 创新 1.2/2 | 技术严谨 1.3/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#测试时自适应

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.733/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.733.pdf)

👥 **作者与机构**

- Yanda Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhan Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Zirui Song：机构信息未能从会议 PDF 纯文本可靠映射
- Yunchao Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Martin Takáč：机构信息未能从会议 PDF 纯文本可靠映射
- Salem Lahlou：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

统一大音频语言模型以音频波形与文本问题为输入生成开放式回答，实际难点是自回归解码易被时间平滑上下文与语言先验主导，使短暂瞬态线索在生成全程得不到利用。TCD先用归一化汉宁窗平滑输入波形并保持全局幅度，再重编码得到保留粗粒度上下文的慢路径表示。接着将原始表示与慢路径表示在相同文本前缀下并行计算下一步词元逻辑值，其差值作为瞬态证据信号进入下一步。与无音频分支做全局对比的音频感知解码不同，TCD对比同一解码上下文下原始与时间模糊视图，并经层级稳定性分数设定模糊窗口，再由音频依赖与不确定性门控计算更新强度后，将正向差值稀疏注入小候选集，意义在于只在音频相关且不确定的步骤保守增强瞬态支持。在MMAU test\-mini多选设置下，Qwen2\.5\-Omni\+TCD的准确率为73\.2%，高于基线Qwen2\.5\-Omni的71\.5%。该结论适用边界受限于解码器可见时间对齐音频序列的统一架构，在语义瓶颈或层级压缩架构上变化均在0\.3个百分点以内。推理开销上需额外一次慢路径预填充并维护双分支键值缓存，预填充延迟约为基线的2\.04倍而解码单步开销可忽略。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 150. [先定情绪再说话：Self\-EmoQ 把情绪当作可规划的动作](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-740-4d4ae1320f/)

> 英文题目：*[Self\-EmoQ: Plutchik\-Guided Value\-based Planning to Drive Streaming Emotional TTS](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-740-4d4ae1320f/)*

标签：#强化学习 #大语言模型 #流式处理 #语音 #文本到语音

评分：**6.6/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#文本到语音 | 主方法：#强化学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.740/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.740.pdf)

👥 **作者与机构**

- Yue Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Hongyan Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yong Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Luo Ji：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理多轮对话中系统自我情绪先验决策，输入为对话历史、用户话语与背景描述，输出为离散情绪标签、情绪化文本回复与对应语音，难点在于流式合成要求情绪在文本解码前就绪而传统识别只能事后标注。方法先将对话建模为话语级马尔可夫决策过程，以对话状态为输入、以候选情绪为动作，将情绪选择定义为最大化累积折扣奖励的决策问题。再用混合奖励训练即插即用规划器，模仿项贴合数据集标注而理论项由大模型按普拉切克情绪轮结构打分，学到的Q值排序输出最优情绪。最后以上一步选定的最优情绪同时条件化大语言模型文本生成与情绪语音合成，使部分文本边生成边转为情绪一致语音。与提示先行解码和监督模仿情绪预测相比，关键差异是把情绪当作可优化的长期决策变量并用贝尔曼自举做跨轮规划，因而能超越数据集轨迹优化整轮对话质量。在DailyDialog语料下，Self\-EmoQ的Reward指标为0\.57，高于w/ SFT基线的Reward指标0\.45。该结论适用边界受限于离散情绪集合与四类英文对话语料，尚未验证混合情绪、跨语言与真实打断场景，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 151. [从离散缺失到连续可靠度：QA\-MoE 用质量分数压住不可靠专家的路由](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1461-974a16390a/)

> 英文题目：*[QA\-MoE: Towards a Continuous Reliability Spectrum with Quality\-Aware Mixture of Experts for Robust Multimodal Sentiment Analysis](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1461-974a16390a/)*

标签：#混合专家模型 #多模态学习 #鲁棒性 #语音情感识别

评分：**6.5/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#混合专家模型

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1461/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1461.pdf)

👥 **作者与机构**

- Yitong Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuxuan Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Guanxuan Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Bojing Hou：机构信息未能从会议 PDF 纯文本可靠映射
- Peng Yuan Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Ge Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Yuyang Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多模态情感分析输入为文本、声学与视觉三路信号，输出为情感强度分数与类别，难点在于真实部署中噪声强度与缺失率连续变化并混合出现，离散缺失假设难以适应连续可靠性谱。QA\-MoE先将每模态特征投影为多元高斯分布以分离语义均值与方差，其方差输出进入质量量化步骤。接着由聚合方差导出有界质量分数作为自监督偶然不确定性度量，其分数输出进入路由融合步骤。然后用该分数对语义门控的Top\-k专家加权求和与全局先验向量做插值融合，其融合表示进入双分支预测步骤。最后经预测头与不确定性头同时输出情感值与对数方差，并以异方差负对数似然驱动训练。与纯语义路由的混合专家不同，该机制显式抑制不可靠专家的激活而保留任务相关信息，避免依赖重构缺失模态，具有单检查点适应全谱退化的实际意义。在对齐CMU\-MOSI基准下，QA\-MoE的ACC7指标为53\.6，高于MMA的ACC7指标的46\.9。该结论适用边界限于英文意见视频与特征级高斯加噪、随机缺失率和整模态置零协议，尚未验证真实传感器故障与强域偏移下的外推能力，训练使用六张NVIDIA RTX 4090硬件并配置8专家Top\-3稀疏计算。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 152. [听不见的推理：从基础听觉短板看多模态模型的音画推理上限](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1697-259ce78b93/)

> 英文题目：*[Probing Audio\-Visual Reasoning in Multimodal Language Models through the Lens of Audio](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1697-259ce78b93/)*

标签：#基准测试 #基准设计 #音视频 #音视频问答

评分：**6.5/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频问答 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1697/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1697.pdf)

👥 **作者与机构**

- Kaixiong Gong：机构信息未能从会议 PDF 纯文本可靠映射
- Kaituo Feng：机构信息未能从会议 PDF 纯文本可靠映射
- Bohao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Yibing Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Mofan Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Shijia Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaming Han：机构信息未能从会议 PDF 纯文本可靠映射
- Benyou Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yutong Bai：机构信息未能从会议 PDF 纯文本可靠映射
- Zhuoran Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Xiangyu Yue：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文面向多模态大语言模型需联合短音频与图像视频证据作答的视听推理任务，输入为音频加视觉配对与多选题题干、输出为选项答案，实际难点在于模型虽能识别复杂语音内容却可能在计数与响度音高时长等基础听觉属性上失准并向高层推理传导误差。方法链第一步以极简合成声构建仅含单调声与静音间隔的听觉探针DeafTest，负责隔离测试计数与属性辨别等底层听力。第二步按多模态必要性原则人工策划覆盖音色空间动态与音乐交通等域及时间推理的视听基准AV\-Odyssey，其题面经视觉与音频模型过滤以剔除单模态可解问题，前一步的听力假设由此进入跨基准关联检验。第三步以零样本评测与人工标注误差归因连接底层感知与高层推理，负责判定视听错误是否源于听觉误感知并输出相关性结论。相对已有偏重高层视觉的视听问答基准，关键机制差异在于将低层听觉能力作为显式前置变量并施加单模态可解性过滤，其实际意义是把推理失败定位到感知瓶颈而非融合策略。在DeafTest基准下，Gemini 2\.5 Pro的平均准确率为91\.5，高于Gemini 1\.5 Flash的平均准确率65\.0，且两基准得分Pearson相关系数为0\.945。该结论适用边界限于短音频配对的多选题零样本设置，尚未验证长视频交互与开放生成场景的失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 153. [母语和语音一换就失灵：Afri\-MCQA 拆解非洲文化问答的语言与模态瓶颈](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1869-cc7138425a/)

> 英文题目：*[Afri\-MCQA: Multimodal Cultural Question Answering for African Languages](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1869-cc7138425a/)*

标签：#基准测试 #基准设计 #多语言 #音视频问答

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频问答 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1869/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1869.pdf)

👥 **作者与机构**

- Atnafu Lambebo Tonja：机构信息未能从会议 PDF 纯文本可靠映射
- Srija Anand：机构信息未能从会议 PDF 纯文本可靠映射
- Emilio Villa\-Cueva：机构信息未能从会议 PDF 纯文本可靠映射
- Israel Abebe Azime：机构信息未能从会议 PDF 纯文本可靠映射
- Jesujoba Oluwadara Alabi：机构信息未能从会议 PDF 纯文本可靠映射
- Muhidin A\. Mohamed：机构信息未能从会议 PDF 纯文本可靠映射
- Debela Desalegn Yadeta：机构信息未能从会议 PDF 纯文本可靠映射
- Negasi Haile Abadi：机构信息未能从会议 PDF 纯文本可靠映射
- Abigail Oppong：机构信息未能从会议 PDF 纯文本可靠映射
- Nnaemeka Casmir Obiefuna：机构信息未能从会议 PDF 纯文本可靠映射
- Idris Abdulmumin：机构信息未能从会议 PDF 纯文本可靠映射
- Naome A Etori：机构信息未能从会议 PDF 纯文本可靠映射
- Eric Peter Wairagala：机构信息未能从会议 PDF 纯文本可靠映射
- Kanda Patrick Tshinu：机构信息未能从会议 PDF 纯文本可靠映射
- Imanigirimbabazi Emmanuel：机构信息未能从会议 PDF 纯文本可靠映射
- Gabofetswe Malema：机构信息未能从会议 PDF 纯文本可靠映射
- Alham Fikri Aji：机构信息未能从会议 PDF 纯文本可靠映射
- David Ifeoluwa Adelani：机构信息未能从会议 PDF 纯文本可靠映射
- Thamar Solorio：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为文化相关图像叠加英语或非洲母语的文本或语音问题，输出为四选一选项或简短事实短语，难点在于视觉定位必须结合地域文化常识且多数语言口语为主文本资源稀缺。构建链第一步由居住在当地的母语者按文化类别自采或合规搜集图像并去标识，形成待命题图像池。第二步围绕每张图像撰写需视觉推理的母语与英语平行多选题及干扰项，每图至多三组，使图像成为解题必需输入。第三步由同语言协调员做语言与文化双审并经项目组终审，合格问答对再录制母语与非洲口音英语的问题与选项语音，形成文本语音平行语料。与翻译型或纯文本评测相比，该流程坚持母语者原创、图像必需性与语音并行，兼顾文化有效性与模态覆盖，具有实际意义。在文本视觉问答基准下，Gemini\-2\.5\-Pro的MC\-VQA准确率为78%，高于Open\-VQA的38%。该结论适用边界受限于所覆盖12国15语言静态图像问答场景，尚未验证视频对话、方言连续变体或代际文化流变下的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://commons.wikimedia.org/wiki/Main_Page> — 链接可访问（HTTP 200）
- 第三方资源：<https://unsplash.com/> → <https://unsplash.com/.within.website?redir=%2F> — 链接不可用（HTTP 401）
- 第三方资源：<https://www.gapminder.org/dollar-street> — 链接可访问（HTTP 200）
- 第三方资源：<https://picdefacer.com/en/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 154. [用引导词把视觉听觉拉回同一条推理链：OmniCoT 与动态模态熵](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1044-46f8633f1f/)

> 英文题目：*[Beyond Modality Collapse: Taming Guided Modality Entropy for Omni\-modal Emotion Reasoning](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1044-46f8633f1f/)*

标签：#强化学习 #多模态模型 #音视频 #语音情感识别

评分：**6.5/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#强化学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1044/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1044.pdf)

👥 **作者与机构**

- Xian Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Rui Hu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuxiang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Delai Qiu：机构信息未能从会议 PDF 纯文本可靠映射
- Yining Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Shengping Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Jian Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Jitao Sang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

全模态情感推理需联合对话文本、视觉表情与声学韵律输出情绪标签及可解释推理链，难点在于全模态大模型易坍缩至视觉主导模态而系统性忽视声学与语言互补线索。作者先以OmniCoT流水线用专用模型分别抽取视觉、音频与对话证据并经大语言模型校验合成为带引导词的结构化推理链。接着以有监督微调冷启动使Qwen2\.5\-Omni\-7B内化该格式与引导词调用方式，为后续优化提供稳定策略初始化。然后以DyME\-GRPO在组采样强化学习中联合格式、准确率与动态模态熵奖励来自适应校准模态使用。与无约束自由推理及普通组相对策略优化不同，该方法以显式引导词锚定模态决策点并以不确定性加权探索抑制主导模态垄断，从而实现更均衡的多模态证据整合。在MELD基准下，EmoOmni的UAR指标为36\.64，高于SFT基线的34\.30。该结论适用边界受限于表演式与影视情感语料，极端长尾类别与强模态冲突消解尚未验证，训练成本对应4×NVIDIA A100硬件组成的高性能集群开销。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 155. [从单曲听到两首对比：Jamendo\-MT\-QA 如何把比较式音乐问答做成可测基准](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-125-30dcf31093/)

> 英文题目：*[Jamendo\-MT\-QA: A Benchmark for Multi\-Track Comparative Music Question Answering](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-125-30dcf31093/)*

标签：#基准测试 #数据集 #基准设计 #音乐 #音频问答

评分：**6.5/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.125/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.125.pdf)

👥 **作者与机构**

- Junyoung Koh：机构信息未能从会议 PDF 纯文本可靠映射
- Jaeyun Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Soo Yong Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Gyu Hyeong Choi：机构信息未能从会议 PDF 纯文本可靠映射
- Jung In Koh：机构信息未能从会议 PDF 纯文本可靠映射
- Jordan Phillips：机构信息未能从会议 PDF 纯文本可靠映射
- Yeonjin Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Min Song：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为两个Jamendo共享音乐轨与比较性问题，输出为是非判断、短答案与单句解释三类答案，难点在于跨轨整合曲风、情绪、配器、速度、调式与制作等细粒度感知差异并生成忠实可验证的比较。流水线先由Music Flamingo将每轨音频转写为覆盖曲风、速度、调式、配器、人声、制作与情绪的密集字幕，为后续问答提供统一文本依据。接着GPT\-5\.1基于字幕扩写单轨问答以丰富属性表述，其输出与双轨字幕一同输入GPT\-5 mini，由后者为每对轨生成是非、短答与单句解释三问问答组。最后大语言模型法官按正确性、比较有效性与推理质量打分，仅保留三题均获满分的轨对并经人工抽检后发布，从而保证比较可检查。与单轨标注或通用多音频评测相比，该机制强制每题同时引用两轨并保留推理字段，使比较推理与证据链显式对齐而非仅测单轨理解。在12173个轨对的完整基准评测下，Music Flamingo字幕中介的是非题准确率为77\.4%，高于Qwen2\-Audio字幕基线的37\.4%。其结论适用边界受限于Jamendo共享音频与合成字幕的文本可验证比较，真实难例与长尾风格外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 156. [说了就忘：多轮对话中语音风格为何守不住](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-304-820e19bb59/)

> 英文题目：*[Style Amnesia: Investigating Speaking Style Degradation and Mitigation in Multi\-Turn Spoken Language Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-304-820e19bb59/)*

标签：#评测协议 #语音大模型 #模型评估 #语音 #语音对话系统

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音对话系统 | 主方法：#评测协议

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.304/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.304.pdf)

👥 **作者与机构**

- Yu\-Xiang Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Cheng\-Han Chiang：机构信息未能从会议 PDF 纯文本可靠映射
- Hung\-yi Lee：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入是首轮给定的情感口音音量语速等副语言风格指令与开放域话题，输出是连续四轮的语音回复，难点在于首轮全局风格约束会被后续语义上下文稀释而逐轮失控衰减。方法链分四步：先由话题生成器产生百级话题 opener 以控制内容方差并作为对话起点，其输出直接送入级联用户模拟器与被测口语语言模型展开多轮语音交互。随后按情感口音调用 Emotion2vec\-Large 与 Voxlect 等专用自动裁判对每轮语音逐轮打分，再将逐轮分数汇入首轮指令遵循率与衰减率计算以刻画遗忘曲线并支撑回忆探针分析。与已有单轮风格评测及预设文本多轮评测相比，该工作引入交互式语音多轮与声学语义双通道归因及显式回忆干预，揭示了记得住却执行不了、系统提示弱于用户提示等反直觉机制，具有指导长程风格保持的实际意义。在快速风格用户提示与系统提示对比评测下，用户提示的指令遵循率指标为89\.0，高于系统提示的50\.0。该结论适用边界受限于单风格英语指令与四轮对话，复合风格与动态指令更新仅作补充实验，角色扮演等多轮一致性场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 157. [稀疏度不是越稀越好：六个语音任务在压缩与保留之间的分岔](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1303-77d15a2e14/)

> 英文题目：*[Difference in Task Performance on Sparse Speech Representations](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1303-77d15a2e14/)*

标签：#模型压缩 #自监督学习 #模型评估 #语音 #语音识别

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.6/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.4/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#模型压缩

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1303/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1303.pdf)

👥 **作者与机构**

- Wenjie Peng：机构信息未能从会议 PDF 纯文本可靠映射
- Chen Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Thomas Hain：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

通用语音表示需同时支撑语音增强、说话人辨识、情感识别、音素识别、语音识别与语义理解等任务，各任务对说话人、内容与语义信息的压缩与保留需求相互冲突，单一稠密特征难以兼顾去噪与保真。该方法首先冻结 wav2vec 2\.0、HuBERT 与 WavLM等自监督模型的表征作为输入，其输出的连续特征进入下一步作为稀疏编码的学习对象；接着训练k稀疏自编码器并用TopK算子显式保留每帧前k个激活，其输出的冻结稀疏码进入下一步作为下游评测的输入；然后保持稀疏编码器冻结，仅训练SUPERB轻量下游头完成六项任务评测；最后基于信息瓶颈计算潜变量激活与任务标签间的互信息，以解释不同任务的最优稀疏度 trade\-off。与已有稀疏方法相比，关键机制差异在于用k直接控制L0范数来调节压缩水平，而非用L1正则间接诱导稀疏，其实质意义是使压缩强度可控可比，从而揭示音素与词任务偏好高稀疏、说话人与情感任务偏好低稀疏的分化规律。在电话识别任务评测设置下，阈值τ为0\.9999时的电话错误率Phone Error Rate为9\.98，低于阈值τ为0\.9时的12\.22。其结论适用边界在于仅验证英语及野外采集说话人语料、Base规模编码器首末层与有限维度和k网格，尚未验证大规模模型、多语与流式场景下的外推表现。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/openai/sparse_autoencoder> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/s3prl/s3prl> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 158. [文本为主、音频为辅：用情绪轮约束距离的多模态对话情绪识别](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1875-e9d7cf1f52/)

> 英文题目：*[Emotion\-Wheel\-Guided Audio\-Referred Text Representation for Multimodal Emotion Recognition in Conversation](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1875-e9d7cf1f52/)*

标签：#对比学习 #多模态学习 #语音 #语音情感识别

评分：**6.4/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#对比学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1875/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1875.pdf)

👥 **作者与机构**

- Eunseon Seong：机构信息未能从会议 PDF 纯文本可靠映射
- Harim Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Dahye Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Changhyun Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Dong\-Kyu Chae：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

对话情绪识别以包含N条话语的对话为输入，需结合上下文为每条目标话语预测离散情绪标签，输入为文本与音频，文本承载显式语义而音频提供韵律语调等副语言线索，两者信息容量不对等且情绪标签间存在连续亲疏关系，平等融合易受干扰是实际难点。该方法先用RoBERTa文本编码器与WavLM/Wav2vec音频编码器分别提取表示，并经对齐模块投影到相干空间以缓解模态差异。对齐后音频表示作为交叉注意力的参考融入文本编码器后半部分，得到音频参考文本融合表示，前半层输出直接进入后半层参与跨模态交互。融合表示经单个线性分类头以交叉熵损失预测情绪标签，并与对齐损失及情绪轮引导监督对比损失按阶段联合优化，先实现模态对齐后再引入情绪结构约束。与均匀推开所有负对的监督对比学习不同，该方法按Russell环形模型设定的情绪角度调整负对排斥强度，使相近情绪保持较近而对立情绪被推远，从而显式对齐表征几何与情绪亲疏。在IEMOCAP评测设置下，EMART（WavLM）的准确率为70\.79，高于ECERC的68\.15。其适用边界受限于仅在IEMOCAP与MELD的音频加文本条件下验证，视觉模态尚未融合，跨语种对话与角度映射变更等外推尚未验证。训练成本方面模型在单个NVIDIA GeForce H100硬件上训练，IEMOCAP平均约20分钟而MELD平均约10分钟。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 159. [财报电话会不只看说了什么：FinCall\-Surprise 用文本音频幻灯片三模态重测盈利超预期预测](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-610-623654e9a0/)

> 英文题目：*[FinCall\-Surprise: A Large Scale Multi\-modal Benchmark for Earning Surprise Prediction](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-610-623654e9a0/)*

标签：#基准测试 #数据集 #基准设计 #语音 #音频分类

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频分类 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.610/) · [官方 PDF](https://aclanthology.org/2026.acl-long.610.pdf)

👥 **作者与机构**

- Dong Shu：机构信息未能从会议 PDF 纯文本可靠映射
- Yanguang Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Huopu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Mengnan Du：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为季度电话会议的文字转录、完整语音录音与配套演示幻灯片，输出为下一季度每股收益相对一致预期的正向或负向意外，难点在于需跨季度前瞻预测且真实分布中正样本占优导致多数类偏置。在方法链上，首先按季度报告期对齐三模态并筛选大规模美股电话会议形成2688个完整样本，其次以标准化意外盈余阈值0\.50生成二分类标签并剔除微小意外样本，该标签输出进入统一指令评测。然后针对文本长度与多模态差异设计截断加算子分段摘要与模态定制提示，使26个单模态与多模态大模型在同一协议下生成可解析的正负标签。与已有收费纯文本或不完全开源资源相比，其关键机制差异在于提供可公开获取的逐词对齐多模态同步证据，从而可检验语调与视觉信号的增益与失效。在FinCall\-Surprise基准下，音频文本模型Qwen\-2\.5\-7B的准确率为0\.84，高于通用文本模型Qwen\-2\.5\-14B的0\.80。上述结论适用边界受限于2019年至2021年美国市场与显著意外样本，对小盘股与连续幅度预测尚未验证。全部基线评测的硬件为单张80GB显存的NVIDIA A100 SXM4，推理开销仅以半精度加载官方默认配置完成。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 160. [不训练也能加速语音扩散模型：先标出冗余再逐对校准](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1157-58f9a05fcf/)

> 英文题目：*[DiTReducio: A Training\-Free Acceleration for DiT\-Based TTS via Progressive Calibration](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1157-58f9a05fcf/)*

标签：#扩散模型 #模型剪枝 #高效推理 #语音 #文本到语音

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#文本到语音 | 主方法：#模型剪枝

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1157/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1157.pdf)

👥 **作者与机构**

- Yanru Huo：机构信息未能从会议 PDF 纯文本可靠映射
- Ziyue Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Zuoli Tang：机构信息未能从会议 PDF 纯文本可靠映射
- Qingyang Hong：机构信息未能从会议 PDF 纯文本可靠映射
- Zhou Zhao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

扩散变换器语音合成以文本与参考音频为输入生成目标波形，难点在于多步去噪的二次注意力开销与无分类器引导双分支重复计算叠加导致推理缓慢。DiTReducio先经检查阶段识别呈对角线状注意模式的高时间冗余层步对，输出候选子集进入预校准。预校准仅对该子集逐对试探时间跳过并以均值绝对误差筛选低误差项，将已压缩策略固定后进入校准。校准基于已压缩模型对全层步按深度相关动态阈值逐层试探时间跳过与分支跳过，优先时间跳过并记录每对最优策略供推理复用。与直接替换分支的DiTFastAttn及引入强化学习网络的BlockDance不同，该方法以模式先验缩小搜索空间并以分支残差重构非条件分支，保留文本与音色条件细节以抑制过饱和削波。在LibriSpeech\-PC\-test\-clean跨句复刻评测设置下，F5\-TTS经DiTReducio在T4阈值下的RTF为0\.129，低于未压缩基线T0的0\.178。其适用边界受限于F5\-TTS与MegaTTS 3两类扩散语音模型及英文朗读语料，高阈值下说话人相似度明显下滑且依赖高质量校准音频，尚未验证其他架构与语种的外推。推理开销在单卡Nvidia 3090硬件上测量且压缩后计算量降至基线的45\.58%，训练成本为零因全程免训练仅需三次推理校准。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 161. [出错时才见结构：神经语音模型的音位混淆是局部且不对称的](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1288-fcf726e3b6/)

> 英文题目：*[What Do Neural Speech Models Know About Phonology? Evidence from Structured Phoneme Confusions](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1288-fcf726e3b6/)*

标签：#统计分析 #语音学与音系 #多语言 #语音 #语音识别

评分：**6.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#统计分析

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1288/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1288.pdf)

👥 **作者与机构**

- Eli Stafford：机构信息未能从会议 PDF 纯文本可靠映射
- Aimée Lahaussois：机构信息未能从会议 PDF 纯文本可靠映射
- Guillaume Wisniewski：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为连续语音波形，输出为音位符号序列，难点在于模型仅接受音位标签监督而不获得区别特征结构，却仍可能隐含音系相似性，而传统按符号计错会把细微语音差异与范畴跳变等同处理。方法链由三步构成：先用微调后的Wav2Vec2Phoneme模型转写多语言语音并经编辑对齐抽取替换错误，其输出的错误对直接进入下一步的特征分析；再将音位映射为区别特征向量并用汉明距离比较观测距离与随机基线，以验证错误的音系局部性；最后在给定错误条件下估计特征正负漂移概率，并经随机效应元分析聚合跨语言不对称方向。相对内部探针与最小对立判别范式，该输出中心视角无需访问声学输入或隐藏表示，直接从失败模式反推表征偏置并与人类感知文献对接。跨语言聚合进一步显示粗粒度大类与喉部特征多向正值漂移，而精细部位、方式与次要调音特征多向负值漂移，从而定位弱建模特征子集。在测试集语料的评测设置下，有效观测特征数量指标为33，从定义特征总数的39降至33。该结论的适用边界仅限于替换错误发生后的特征保持与丢失模式，不能外推为正常识别中的特征脆弱性或跨架构普适规律，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://pypi.org/project/soundvectors/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 162. [看着脸听声音：多模态大模型为何在英语里幻听口音、在韩语里加分](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1362-38d9a5b0a5/)

> 英文题目：*[Visual Interference in Speech Evaluation: Cultural Asymmetry and Cross\-Modal Bias in MLLMs](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1362-38d9a5b0a5/)*

标签：#基准设计 #公平性 #多语言 #音视频 #语音属性识别

评分：**6.4/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音属性识别 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1362/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1362.pdf)

👥 **作者与机构**

- Kyusik Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Hyunwoo Yoo：机构信息未能从会议 PDF 纯文本可靠映射
- Jaehoon Choi：机构信息未能从会议 PDF 纯文本可靠映射
- Gail Rosen：机构信息未能从会议 PDF 纯文本可靠映射
- Bongwon Suh：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务以相同母语标准语音为输入，要求端到端多模态大语言模型输出职业能力与母语流利度评价，难点在于视觉人种先验会覆盖客观听觉证据，导致幻觉口音与系统性能力偏移。为此先按刻板印象内容模型构建职业与人际双域平行脚本，形成英韩语义对等的薄片语音内容，再用标准美音与标准首尔音合成960段母语音频并生成韩裔、白人、黑人受控人像。接着以音频单模态评估为基线，对固定音频配对不同视觉人像进行被试内干预，用9个 omni模型的6720次推断分离视觉干扰。相对已有视听冲突研究只关注事实识别退化，本文将机制定位为社会语言学意识形态的跨模态复现，区分英语语境逆向语言刻板印象的降级与韩语语境期望违背理论的溢价。在韩语与英语人际服务评估设置下，Gemini 2\.5 Flash在韩语场景的Sincerity/Warmth得分为Δ\-11\.69，低于英语场景的Δ\-11\.64。该结论适用边界受限于短时薄片判断与三类粗粒度人种原型，尚未验证长对话、真实口音梯度与更多语种外推，且原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 163. [沃洛夫语音查法语文本：把语音拼进冻结文本检索模型为何更稳](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1710-fed1a8e058/)

> 英文题目：*[Cross\-lingual Matryoshka Representation Learning across Speech and Text](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1710-fed1a8e058/)*

标签：#模型压缩 #高效推理 #跨语言 #语音 #音频检索

评分：**6.4/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频检索 | 主方法：#模型压缩

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1710/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1710.pdf)

👥 **作者与机构**

- Yaya SY：机构信息未能从会议 PDF 纯文本可靠映射
- Dioula Doucouré：机构信息未能从会议 PDF 纯文本可靠映射
- Christophe Cerisara：机构信息未能从会议 PDF 纯文本可靠映射
- Irina Illina：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务以沃洛夫语口语语音查询为输入、以法语文本档为输出，实际难点在于沃洛夫语以口语为主而相关知识多为法语文本，级联识别翻译链路成本高且误差累积。方法链分三步：先从原始播客广播经声源分离与语音活动检测过滤得到语音查询并转写翻译成法语，再用Gemini合成故事、对话与博客三类文档从而构成1176908对沃洛夫语查询到法语文档训练对，接着在该文本对上微调Qwen3嵌入模型获得跨语言检索能力。最后冻结文本主干，仅训练卷积降采样与映射层，把HuBERT语音特征拼接到提示后送入同一大模型统一编码。与双编码器对比学习的关键机制差异在于复用冻结大模型的深层上下文与提示路由做融合，而非对语音做浅层池化对齐，因而更适合语义密集的文档检索。在Kallaama\-Retrieval\-Eval评测任务下，Late\-Fusion模型的指标nDCG@5为69\.85，高于流水线基线的57\.09。该结论适用边界受限于沃洛夫语到法语、短语音查询与合成主导文档分布，朗读式低质量语音与更长文档外推尚未验证。文本微调阶段训练成本约为8卡A100上2小时约22\.4美元，语音适配硬件为单卡H100约8小时，推理开销与完整部署成本原文披露不全。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 164. [把主唱和和声分开：VocalRep 用角色一致性重做人声表示](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1785-47af15ca4d/)

> 英文题目：*[VocalRep: Structure\-Aware Vocal Representations for Multimodal Generation](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1785-47af15ca4d/)*

标签：#偏好优化 #音视频 #音乐源分离 #语音转换

评分：**6.4/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐源分离 | 主方法：#偏好优化

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1785/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1785.pdf)

👥 **作者与机构**

- Da Shen：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenqiang Weng：机构信息未能从会议 PDF 纯文本可靠映射
- Tianyu Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Gongyu Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Runhua Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Jiahui Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Chaofan Ding：机构信息未能从会议 PDF 纯文本可靠映射
- Wei\-Qiang Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Zihao Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理包含领唱、和声与伴奏的混音音乐输入并输出领唱、和声、伴奏三路波形以支撑歌声转换与唇形同步，难点在于同歌手领唱与和声旋律高度重叠造成局部角色歧义，以及重建损失对角色置换近似不变导致长时角色漂移。第一步以全局说话人身份向量条件化的Band\-Split Roformer作分离主干，输出三路复数掩码得到初步三干估计。第二步任务感知评论器对自然混音与重组混音排序以约束领唱与伴奏节奏兼容性，其排序损失回传主干以抑制伴奏泄漏。第三步结构感知评论器对纯净人声混合与交叉组合混合排序以强化领唱主导性并惩罚和声压过领唱的错配，推理时丢弃双评论器并以混合音频滑窗嵌入谱聚类提供身份锚点。在PHV\-40三干评测下，VocalRep乐器干的SI\-SDR为15\.70 dB，高于Band\-Roformer的10\.32 dB。相对仅优化信号重建的多干基线，该排序损失近似显式角色分配能量并隐式实现无需基频提取的领唱一致性，因而下游可懂度与同步更稳定。其适用边界受限于单全局身份假设，多主唱对唱等场景尚未验证且二干先分离后求和会累积误差。训练硬件为四块NVIDIA A800 GPU且总批量为4，推理开销仅保留分离主干而丢弃双评论器网络。

🔗 **开源资源**

- 第三方资源：<https://github.com/KimberleyJensen/Mel-Band-Roformer-Vocal-Model> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/playdasegunda/band-split-rope-transformer> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/ZFTurbo/MVSEP-MDX23-music-separation-model> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/starrytong/SCNet> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/ZFTurbo/Music-Source-Separati> — 链接不可用（HTTP 404）
- 第三方资源：<https://github.com/ZFTurbo/Music-Source-Separation-Training> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/svc-develop-team/so-vits-svc> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/Plachtaa/Seed-VC> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/instant-high/wav2lip-onnx-256> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/antgroup/echomimic> — 链接可访问（HTTP 200）
- 第三方资源：<https://huggingface.co/fudan-generative-ai/hallo2> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 165. [不只认出是谁：四种平行音频如何泄露身高体重与生活属性](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-283-d5cbe9a87b/)

> 英文题目：*[AudioPrivacy: Parallel Audio Dataset for Speaker Profiling with Diverse Audio Types and Rich Attributes](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-283-d5cbe9a87b/)*

标签：#数据集 #数据集构建 #评测协议 #隐私保护 #语音属性识别

评分：**6.4/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音属性识别 | 主方法：#数据集构建

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.283/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.283.pdf)

👥 **作者与机构**

- Jiabei He：机构信息未能从会议 PDF 纯文本可靠映射
- Yanzhe Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaming Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Hui Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Haoqin Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Yong Qin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理说话人属性隐私推断，输入为日常室内手机窃听音频，输出为性别年龄身高等11维敏感属性，难点在于属性异构且信号横跨发声与非发声模态并与身份泄漏交织。先由被试自有手机在居家环境采集语音歌唱等四类平行音频并标注生理与社会属性，职责是构建平行语料，输出为227小时千人数据集。再将该数据集输入按多标签分层划分的训练验证评测协议，职责是隔离说话人并保持属性分布，输出为8:1:1的训练验证评测划分。最后将划分结果输入传统声纹模型与多模态大语言模型分别执行的验证与画像流程，前者单音频单属性训练，后者统一输出多维属性，职责是暴露泄漏风险，输出为EER与相对属性泄漏增益统一度量以实现跨属性比较。与仅关注声纹身份的已有语料相比，该工作把脚步拍手等非发声声学信号纳入威胁模型，使隐私评估从身份识别扩展到细粒度属性泄漏。在AudioPrivacy语音验证任务下，ResNet\-TDNN的EER为0\.26，低于ECAPA\-TDNN的0\.82。其结论适用边界受限于中文普通话手机近场室内与单音频单次推断，尚未验证多录音融合与跨设备泛化。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 166. [在野外伪造面前，专用检测器失灵时比较推理如何兜底](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-450-29efe1ab5f/)

> 英文题目：*[ICLAD: In\-Context Learning with Comparison\-Guidance for Audio Deepfake Detection](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-450-29efe1ab5f/)*

标签：#检索增强 #音频大模型 #少样本 #语音 #音频深度伪造检测

评分：**6.4/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频深度伪造检测 | 主方法：#检索增强

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.450/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.450.pdf)

👥 **作者与机构**

- Benjamin Shiue\-Hal Chou：机构信息未能从会议 PDF 纯文本可靠映射
- Yi Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Surya Koppisetti：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频深度伪造检测的输入为含噪声、混响与自发口语的野外语音，输出为真伪二值判定与文本依据，难点是录音室脚本数据训练的专用检测器泛化严重退化，且新攻击不断出现使反复监督微调不可持续。离线阶段对每条入库音频并行生成支持为真与支持为假的两份证据，再以真值标签调和矛盾、过滤深伪无关属性与幻觉描述，形成可检索解释库。在线阶段提取专用检测器嵌入检索声学近邻，并经k近邻分布外检测器分流，其输出直接决定样本走向。分布内样本直接交由专用检测器判定，分布外样本将近邻示例连同三份证据装入上下文提示，由音频大模型复述比较、调和证据后给出判定。相对已有方法的关键差异是以成对比较推理同时呈现正反证据并做调和过滤，而非单边打分，使上下文示例提供可比判据，从而提升野外泛化并附带可读依据。在SpoofCeleb评测下，ICLAD的宏平均F1分数为0\.665，高于Wav2Vec2\-AASIST基线的0\.334。该结论适用边界为含噪野外语音，在ASVspoof 2021与MLAAD脚本录音室场景下仍弱于专用检测器，且真伪线索重叠时过滤过于激进会回退到零样本偏置，跨语种大规模部署效果尚未验证。推理开销方面原文仅披露硬件为NVIDIA A100 40 GB GPU，未报告延迟与吞吐数值。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 167. [声音太杂，一个投影器学不过来：用稀疏专家拆开梯度冲突](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-840-77faf76f54/)

> 英文题目：*[MoE Adapter for Large Audio Language Models: Sparsity, Disentanglement, and Gradient\-Conflict\-Free](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-840-77faf76f54/)*

标签：#混合专家模型 #多模态学习 #音频大模型 #音频理解

评分：**6.4/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频理解 | 主方法：#混合专家模型

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.840/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.840.pdf)

👥 **作者与机构**

- Yishu Lei：机构信息未能从会议 PDF 纯文本可靠映射
- Shuwei He：机构信息未能从会议 PDF 纯文本可靠映射
- Hu Jing：机构信息未能从会议 PDF 纯文本可靠映射
- Dan Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xianlong Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Danxiang Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Shikun Feng：机构信息未能从会议 PDF 纯文本可靠映射
- Rui Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Jingzhou HE：机构信息未能从会议 PDF 纯文本可靠映射
- Yu Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Hua Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Haifeng Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

大型音频语言模型需将语音、音乐、环境声等异质音频映射为大语言模型可理解的词嵌入并做自回归生成，但单一共享稠密投影须同时拟合语义主导与副语言主导分布，导致更新方向对冲与破坏性干扰。该方法先用冻结分词器抽取离散语义标记并用语音编码器抽取连续声学特征，再经特征融合投影为统一音频隐表示。接着稀疏混合专家适配器以门控路由按标记将隐表示分发至互补专家做子空间编码，实现冲突隔离与有限共享。聚合多层感知机将激活专家输出融合对齐至词嵌入维度，并与文本拼接后交由大语言模型做下一标记预测。与固定多层感知机或全局共享压缩的稠密适配器不同，该机制把冲突类别隔离到不同专家而以重叠激活保留共性，将破坏性干扰转为正向迁移并保持推理时稀疏激活。在MMSU基准任务下，本方法的音频准确率为38\.19%，高于稠密基线的35\.03%。其结论适用边界受限于Qwen3\-1\.7B主干与40B标记语料的理解推理验证，尚未验证更大参数、其他模型家族与生成任务的外推。推理开销方面有效激活参数为70\.8M，较稠密基线减少约25%而存储占用保持约94\.5M，延迟基本相当。

🔗 **开源资源**

- 第三方资源：<https://huggingface.co/Qwen/Qwen3-1.7B> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 168. [只看画面能懂笑点吗：v\-HUB 逼模型从视觉和环境声里找幽默](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1785-5af434e415/)

> 英文题目：*[v\-HUB: A Benchmark for Video Humor Understanding from Vision and Sound](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1785-5af434e415/)*

标签：#基准测试 #基准设计 #音视频 #环境声 #音视频理解

评分：**6.3/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频理解 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1785/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1785.pdf)

👥 **作者与机构**

- Zhengpeng Shi：机构信息未能从会议 PDF 纯文本可靠映射
- Yanpeng Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Jianqun Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Yuxuan Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Qinrong Cui：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Bi：机构信息未能从会议 PDF 纯文本可靠映射
- Song\-Chun Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Bo Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Zilong Zheng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该基准输入为可脱离言语理解的搞笑短视频及其非言语声音，输出要求完成标题匹配、幽默解释与开放问答，难点在于笑点散布于视觉动作、画面视觉文本、环境声与背景知识且需自主发现与隐式推理。构建链条先做有害内容过滤与言语依赖剔除，再对当代用户生成视频与62部查理卓别林默片切分片段做三人轮转标注，标注视频描述、幽默解释、是否含视觉文本、声音是否贡献幽默与是否需背景知识，随后用GPT\-4o生成时序、描述、因果三类1218对问答并人工校验，最后在文本、纯视频与视听三种设置下对比评测。与以对白主导或仅7秒惊奇视频为主的既往幽默数据相比，该设计强调纯视觉可理解幽默与环境声贡献，平均时长约为HumorQA两倍，并划分视觉文本与幽默音频子集以支撑归因。在开放问答上Qwen2\.5\-VL语句嵌入相似度从文本输入0\.760跌至纯视频0\.445，幽默解释从0\.543跌至0\.441，增加音频仅回升至0\.424，说明跨模态融合远弱于语言推理。该结论限于英语标注、短视频与所测7个模型，跨语言与长视频泛化尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 169. [笑声不止于好笑：把视频转成文字再让专家模型分工推理](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2023-820ae81b9b/)

> 英文题目：*[SMILE\-Next: Teaching Large Language Models to Detect, Classify, and Reason about Laughter](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-2023-820ae81b9b/)*

标签：#数据集 #混合专家模型 #大语言模型 #音视频 #音视频问答

评分：**6.3/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频问答 | 主方法：#混合专家模型

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.2023/) · [官方 PDF](https://aclanthology.org/2026.acl-long.2023.pdf)

👥 **作者与机构**

- Lee Jung\-Mok：机构信息未能从会议 PDF 纯文本可靠映射
- Kim Sung\-Bin：机构信息未能从会议 PDF 纯文本可靠映射
- Joohyun Chang：机构信息未能从会议 PDF 纯文本可靠映射
- Lee Hyun：机构信息未能从会议 PDF 纯文本可靠映射
- Tae\-Hyun Oh：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

笑声理解的输入是含语音、表情与对话关系的短视频片段，输出需同时给出是否引笑的二分类、愉悦型、礼貌型与讽刺型三类笑声类型，以及不超过30词的因果解释，难点在于幽默、讽刺与尴尬等动机高度纠缠且依赖跨模态社会语境。该工作先用笑声检测与说话人模型切分片段并将话语、韵律数值、面部动作单元与视频描述转为文本，再由GPT\-4生成伪解释并经众包校验形成6386对问答，然后以笑声专用自指令扩展紧张会议与职场层级等社会性笑声场景，最后在冻结大语言模型上训练任务自适应的笑声专家混合。与直接编码原始音视频的Qwen2\.5\-Omni\-7B等基线相比，文本解耦使模型可显式调用常识与因果推理，避免了隐式融合对尴尬与幽默的混淆。在SMILE\-Next测试集上Qwen2\.5方案的笑声检测准确率达96\.52%，显著高于音视频基线的83\.44%，人类评估平均排名1\.69亦最优。结论限于英语脱口秀与双人对话等公开视频，对文化特定与群体复杂笑声及非英语场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 170. [不成对也能对准发音：用对比模型找出关键语音 token 再加权优化](/posts/conference-acl-2026-conference-paper-id-2026-acl-short-59-5360e5a332/)

> 英文题目：*[Data\-efficient Targeted Token\-level Preference Optimization for LLM\-based Text\-to\-Speech](/posts/conference-acl-2026-conference-paper-id-2026-acl-short-59-5360e5a332/)*

标签：#偏好优化 #大语言模型 #语音 #文本到语音

评分：**6.3/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#文本到语音 | 主方法：#偏好优化

会议来源：[官方记录](https://aclanthology.org/2026.acl-short.59/) · [官方 PDF](https://aclanthology.org/2026.acl-short.59.pdf)

👥 **作者与机构**

- Rikuto Kotoge：机构信息未能从会议 PDF 纯文本可靠映射
- Yuichi Sasaki：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

大语言模型文本到语音需由原始文本自回归生成声学词元序列再经声码器成声，难点是日语辛い等多音词读音依赖上下文且成对偏好样本稀少。方法先用原始二值标签训练对比模型π\+并用翻转标签训练π−，分别刻画偏好与反偏好分布。接着将二者词元级对数似然比经上下界截断与指数映射转为重要性权重wt，使目标字符词元自动获得更大权重。最后以wt加权的词元级卡尼曼\-特沃斯基价值函数优化策略模型，只放大关键读音词元奖励并抑制非关键词元干扰。在含辛い的5000句日语评测任务下，TKTO非配对版本的准确率为0\.958，高于基座模型的准确率0\.668。相对整句共享同一效用的KTO与依赖配对的DPO，该词元级加权实现了无需词元标注的细粒度信用分配，可利用6倍非配对数据。该结论适用边界受限于仅在日语辛い与汉语行两个多音现象及CosyVoice2单基座上验证，尚未验证对韵律音色与长文本的泛化。额外对比模型在8×A100硬件上的训练成本约为10分钟，相对数万小时预训练可忽略。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 171. [跨视觉语言视频音频的遗忘：在哪里动手比用什么优化更重要](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1379-88908e0c18/)

> 英文题目：*[Multimodal Unlearning Across Vision, Language, Video, and Audio: Survey of Methods, Datasets, and Benchmarks](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1379-88908e0c18/)*

标签：#文献综述方法 #模型评估 #隐私保护 #音视频理解

评分：**6.3/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：综述 | 主任务：#音视频理解 | 主方法：#文献综述方法

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1379/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1379.pdf)

👥 **作者与机构**

- Nobin Sarwar：机构信息未能从会议 PDF 纯文本可靠映射
- Shubhashis Roy Dipta：机构信息未能从会议 PDF 纯文本可靠映射
- Zheyuan Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Vaidehi Patil：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该综述面向多模态基础模型的目标遗忘，输入为图像文本视频音频及跨模态关联，输出为抹除遗忘集影响且保留保留集效用的模型，难点在于跨模态残留关联易导致单模态遗忘失效且遗忘与效用权衡缺乏统一度量。方法链先按遗忘目标域划分为实例级遗忘与概念级遗忘以界定删除粒度，其输出进入按干预阶段的五路划分，分别负责数据侧扰动与清洗、训练时梯度掩码蒸馏编辑、架构冻结与层域约束、免训练权重空间投影以及解码时引导与条件通路控制。最后汇总身份版权语音安全与类别等多类数据集、统一基准套件与六维评测框架，将遗忘质量安全隐私效用鲁棒性与环境成本映射为可操作指标。与既往按优化目标的算法分类相比，该管线分类强调作用点可逆性延迟与删除强度的工程权衡，对部署选型更直接。在MLLMU\-Bench基准下，虚构名人身份的规模指标为500，高于公开名人身份的153。上述结论适用边界限于文献综合与选型参考，跨模态泛化与对抗条件下的删除强度尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/bedapudi6788/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 172. [听懂古文之声有多难：MCGA 把朗读、翻译、情感与推理放在同一语料里考](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1543-fdd7752dbb/)

> 英文题目：*[MCGA: A Multi\-task Classical Chinese Literary Genre Audio Corpus](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1543-fdd7752dbb/)*

标签：#数据集 #数据集构建 #语音识别 #音频问答 #语音翻译

评分：**6.3/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#数据集构建

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1543/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1543.pdf)

👥 **作者与机构**

- Yexing Du：机构信息未能从会议 PDF 纯文本可靠映射
- Kaiyuan Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Bihe Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Youcheng Pan：机构信息未能从会议 PDF 纯文本可靠映射
- Bo Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Liangyu Huo：机构信息未能从会议 PDF 纯文本可靠映射
- Xiyuan Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Jian Xie：机构信息未能从会议 PDF 纯文本可靠映射
- Daojing He：机构信息未能从会议 PDF 纯文本可靠映射
- Yang Xiang：机构信息未能从会议 PDF 纯文本可靠映射
- Ming Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Bing Qin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该语料输入为带情感的普通话文言朗读，输出覆盖转写、英译、情感描述、开放问答与选择式理解推理，难点在于生僻字与通假字发音、文言歧义、跨朝代跨文体差异与文学情感建模。构建第一步从网络获取公有领域作品与拼音并清洗切分为三十秒内文本片段，为录制提供对齐单元。第二步由二十八名母语志愿者按情感指南录制为人声平行音频，直接形成二万二千条共一百一十九小时语音。第三步以完整篇章为上下文调用DeepSeek\-V3\.2生成译文与问答，再经三模型交叉过滤并对验证集与测试集人工核验后进入六任务评测。相对已有古典文本基准的关键差异在于坚持人声平行语料、五体裁十一时期三十七类覆盖与统一评测，并引入情感保真度与跨模态一致性指标以刻画情感与模态差距。在MCGA测试集下，Qwen3\-Omni\-30B\-A3B\-Instruct的ECF分数为58\.4，高于Gemini\-3\-Flash的54\.0。该结论适用边界受限于朗读式普通话古典文本，无法外推至方言吟诵与噪声场景，微调Qwen2\.5\-Omni\-7B使用四块A100硬件训练三轮的配置亦限制复现成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/modelscope/ms-swift> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/vllm-project/vllm> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/jitsi/jiwer> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 173. [声音对不上长相时，多模态队友先信谁：配对偏置与场景刻板印象的分流](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2057-678e0c8074/)

> 英文题目：*[Whose Voice, Whose Avatar? Gender Matching Bias in Multimodal AI Teammates](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2057-678e0c8074/)*

标签：#游戏音频 #统计分析 #公平性 #音视频 #音视频问答

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音视频问答 | 主方法：#统计分析

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.2057/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.2057.pdf)

👥 **作者与机构**

- Kyusik Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Jaehoon Choi：机构信息未能从会议 PDF 纯文本可靠映射
- Hyunwoo Yoo：机构信息未能从会议 PDF 纯文本可靠映射
- Bongwon Suh：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

合作游戏中多模态大语言模型需同时听取队友语音提议并从男性呈现与女性呈现化身中二选一，难点在于语音性别与视觉性别线索冲突时模型应依据任务内容决策而非身份一致性或角色刻板印象。先以固定文本提议、合成男女语音与三档保真度化身为输入，负责构造仅扰动社会身份线索的反事实材料，输出16化身对与10种语音身份的配对集合。再以该配对集合与高低风险游戏情境文本为输入，负责按化身对、呈现顺序、语音身份与情境展开全因子交叉试验，输出每模型11200次Task1试验与每风格3200次Task2试验的选择记录。最后以选择记录为输入，负责用混合效应模型对每模型独立回归男性化身选择并检验一致性选择与位置效应，输出语音效应、情境效应与交互显著性。与已有单模态或语义冲突评测不同，该设计保持任务证据恒定而仅扰动社会身份线索，因而能区分跨模态一致性强制与情境驱动的男性默认。在跨视觉保真度比较任务下，Gemini 2\.5 Flash在像素风格下的语音效应指标为48\.1 pp，低于写实风格下的73\.6 pp。结论适用边界在于合成美式英语语音与受控化身及合作游戏提示，对自然语音、非二元呈现与其他部署场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 174. [听清不等于推对：口音与领域变化下的音频语义推理评估](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-343-08418c92c6/)

> 英文题目：*[Afrispeech Semantics: Evaluating Audio–Semantic Reasoning in Spoken Language Models Across Domains and Accents](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-343-08418c92c6/)*

标签：#基准设计 #音频大模型 #零样本 #语音 #口语理解

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.6/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#口语理解 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.343/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.343.pdf)

👥 **作者与机构**

- Chibuzor Okocha：机构信息未能从会议 PDF 纯文本可靠映射
- Christan Grant：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务以口语音频为前提、文本假设为待判命题，需输出蕴含、矛盾与中立等语义关系判断，实际难点在于转录无误时模型仍会依赖常识先验过度蕴含，且口音与领域偏移会系统性改变判断。首先从Afrispeech\-200等四类语料选取保留非洲口音变异的音频前提，为后续多域评测提供输入，其输出直接作为假设生成的锚定对象。其次用大语言模型按蕴含、克制、合理性等模板批量生成候选假设，其输出进入人工核验环节。然后由受训标注者听音频核验并改写幻觉表述，清洗后的假设\-音频对进入统一零样本协议评测生成式与对比式音频语言模型。与已有单任务音频蕴含评测相比，关键机制差异是多领域多任务联合诊断过度蕴含与口音敏感性，具有更贴近部署公平性的现实意义。在Afri\-200音频合理性任务零样本评测设置下，Qwen2\.5 Omni的F1为0\.8244，高于Qwen2 Audio 7B的0\.8180。上述结论适用边界限于所覆盖非洲英语口音、临床与朗读会话域及零样本条件，尚未验证微调与其他口音外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://huggingface.co/datasets/intronhealth/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 175. [自然互动与多粒度标注：EmotionTalk 如何让中文情感可训练又可解释](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-440-c94eed5a11/)

> 英文题目：*[EmotionTalk: An Interactive Chinese Multimodal Emotion Dataset With Rich Annotations](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-440-c94eed5a11/)*

标签：#数据集 #数据集构建 #音视频 #语音情感识别

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音情感识别 | 主方法：#数据集构建

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.440/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.440.pdf)

👥 **作者与机构**

- Haoqin Sun：机构信息未能从会议 PDF 纯文本可靠映射
- Jinghua Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Xuechen Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Shiwan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Jiaming Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Hui Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xi Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Yequan Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yonghua Lin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

中文自发对话情感识别以对齐的语音加静音视频加文本为输入，输出离散情绪与连续极性及可解释描述，难点在于中文口语一词多情且跨模态信号经常冲突，单模态感知极易误判。作者以友谊与家庭与职场与医患等主题引导十九名专业演员即兴双人对话，共收集七百四十四段对话与一万九千余条话轮约二十三点六小时，构成表演性中文室内语料。标注按文本到音频到静音视频再到音视频的顺序实施模态隔离标注，再经加权置信聚合与多轮协商统一标签，上一步的离散属性经大语言模型受控改写进入下一步，生成说话人特质与说话方式与情绪语义与整体综合四维描述。相对影视爬取与固定剧本表演，该流程强调自发性与模态独立感知以保留真实分歧，并以四维解耦描述提供可控生成的语义锚点。在跨数据集标注一致性基准下，EmotionTalk的一致性指标Fleiss’Kappa为0\.78，高于M3ED的0\.59。多模态融合利用跨模态注意力对齐互补信号以缓解单模态歧义，但转入全类别细粒度划分后性能仍明显回落，表明中文细粒度情绪极具挑战。该结论适用边界受限于表演性中文双人室内对话，尚未验证自然日常对话与跨库迁移能力，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://huggingface.co/timm/eva02_base_patch14_224.mim_in22k> — 暂时无法访问
- 第三方资源：<https://huggingface.co/Qwen/Qwen2.5-Omni-7B> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 176. [缺模态是因果链断裂：先按历史补锚点，再用超图挖高阶组合](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-813-49805d1fe6/)

> 英文题目：*[CaM\-HG: Causal\-Enhanced MoE and Hypergraphs Network for Incomplete Multimodal Emotion Recognition in Conversations](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-813-49805d1fe6/)*

标签：#图神经网络 #混合专家模型 #多模态学习 #严格因果 #语音情感识别

评分：**6.3/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.4/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#混合专家模型

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.813/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.813.pdf)

👥 **作者与机构**

- Mingjian Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Yong Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Peng Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Wen Yin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

对话多模态情感识别需以每轮话语的文本、声学和视觉特征为输入并输出情感标签，实际难点在于话语级随机缺失会切断细粒度跨模态触发线索，且误差会沿对话历史累积导致后续推理不稳。该文提出的CaM\-HG先做输入预处理，将缺失位置保留为可学习占位并投影到统一隐空间，且叠加说话人嵌入与模态标识以保留结构。接着因果增强混合专家抽取仅依赖当前及历史的因果因子锚点，并以Top\-K门控调度专家生成缺失特征，再经置信门控与原始观测融合为修复节点。最后非对称因果动态超图对修复节点做节点到边再到节点的高阶消息传递并分类，使上一步的修复语义直接进入下一步的高阶聚合。与直接补零、学习模态不变特征或多步扩散补全不同，该方法以因果约束的单遍稀疏路由替代多步采样，在避免未来信息泄露的同时保留历史可解释触发并降低延迟。在CMU\-MOSI情感分析任务评测下，Ours方法的WAF1指标为81\.4，高于FedDISC方法的WAF1指标81\.2。该结论适用边界限于话语级随机缺失且历史上下文尚存的对话场景，在连续极端缺失或无历史可依时恢复受限。推理开销方面原文报告硬件为1×RTX4090时吞吐为2613\.83utt/s且延迟为0\.38ms，显著低于多步扩散基线的耗时。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 177. [单句之内，声音比文字多说多少：讽刺、情感与疑问的信息分工](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1085-d29378054d/)

> 英文题目：*[What Do Prosody and Text Convey? Characterizing How Meaningful Information is Distributed Across Multiple Channels](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1085-d29378054d/)*

标签：#统计分析 #韵律 #语音 #语音情感识别

评分：**6.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#统计分析

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1085/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1085.pdf)

👥 **作者与机构**

- Aditya Yadavalli：机构信息未能从会议 PDF 纯文本可靠映射
- Tiago Pimentel：机构信息未能从会议 PDF 纯文本可靠映射
- Tamar I Regev：机构信息未能从会议 PDF 纯文本可靠映射
- Ethan Gotlieb Wilcox：机构信息未能从会议 PDF 纯文本可靠映射
- Alex Warstadt：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以单句英语语音为输入，预测讽刺、情感与疑问等离散语义特征，难点在于韵律无法作为独立输入建模且连续音频的微分熵难以解释。方法首先在标注数据上用频率插入估计目标无条件熵H\(Y\)，得到互信息分解的基准项。接着分别微调文本GPT\-2与音频Whisper等分类器，以测试集交叉熵上界估计条件熵Hθ\(Y\|X\)，其输出的测试损失直接进入下一步计算。然后用无条件熵减去条件熵得到文本互信息MI\(Y;T\)与音频互信息MI\(Y;A\)，再用音频减文本近似给定文本下韵律的条件互信息MI\(Y;P\|T\)。与直接估计文本与韵律整体冗余MI\(T;P\)的已有方法不同，该框架以离散语义特征Y为目标，避免高斯核密度估计与参数化条件密度导致负互信息的不稳定性，从而能区分何种含义由何种通道承载。在MUStARD讽刺任务下，音频通道的互信息指标为0\.22比特，高于文本通道的0\.016比特。结论的适用边界受限于无长上下文单句、英语电视与播客语音，疑问上韵律增益较小且长上下文与跨语言外推尚未验证。问答与情感分类的训练成本为各模态与尺寸超参扫描在A100与V100硬件上最多运行3天。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 178. [不用每语一个适配器：PUMA 以共享投影加语言令牌做多语 ASR](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-17-6f7e7a00b9/)

> 英文题目：*[PUMA: Projected Universal Multilingual ASR for Low\-Resource Settings\. Application to Diverse African Languages](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-17-6f7e7a00b9/)*

标签：#提示学习 #低资源 #多语言 #语音 #语音识别

评分：**6.2/10** | 创新 1.1/2 | 技术严谨 1.1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#提示学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.17/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.17.pdf)

👥 **作者与机构**

- Ilyes Oukid：机构信息未能从会议 PDF 纯文本可靠映射
- Bilal Faye：机构信息未能从会议 PDF 纯文本可靠映射
- Hanane Azzag：机构信息未能从会议 PDF 纯文本可靠映射
- Mustapha Lebbah：机构信息未能从会议 PDF 纯文本可靠映射
- Said Yacine Boulahia：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为重采样至16 kHz的原始语音波形，输出为统一字符词表上的转写文本，难点是每语平均仅约15小时标注且形态丰富音系差异大，全共享模型易语言间干扰而独立adapter则参数随语言线性增长。冻结的特征抽取器与特征投影先将波形映射为声学序列h，以保留预训练声学表征并降低可训量。通用语言投影将可学习语言token t\_l拼接到h前端，经4层共享Transformer建模后切除首位得到语言偏置u，以单向量路由共享子空间实现语言感知。残差融合h\+u送入冻结的wav2vec 2\.0编码器建模长时上下文，再经可训练线性加softmax头输出z并用CTC损失训练解码。与MMS每语言独立adapter的本质差异是以共享投影加单token替代多套adapter，新增语言仅增加一个向量，总量维持1B而可训量约30M，避免参数线性膨胀。在同步多语言训练设置下，PUMA的WER为0\.314，低于MMS的0\.419。该结论适用边界仅限已见10语及其训练域内跨语料泛化，对未见语言、强口音与域偏移尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 179. [真实现场压垮推理：RSA\-Bench 用声学生态测出音频大模型的感知\-认知断层](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-913-3183d249e2/)

> 英文题目：*[RSA\-Bench: Benchmarking Audio Large Models in Real\-World Acoustic Scenarios](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-913-3183d249e2/)*

标签：#基准测试 #基准设计 #音频大模型 #鲁棒性 #音频理解

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频理解 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.913/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.913.pdf)

👥 **作者与机构**

- Yibo Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Kaiwen Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Liang Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Shilinlu Yan：机构信息未能从会议 PDF 纯文本可靠映射
- Jin Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yaoqi Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Yitian Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Yalan Qin：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenhong Zhou：机构信息未能从会议 PDF 纯文本可靠映射
- Kun Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Li Sun：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该基准输入为叠加真实环境干扰的语音音频，输出覆盖转写、性别与情感识别到数学推理与指令执行的六类答案，难点在于多声源非平稳掩蔽与类人声干扰会同时破坏声学可懂度与语义连贯性。构建先从公开语音库与环境声库采集干净语音与干扰源，再按均方根能量计算自适应缩放因子以对齐噪声与语音能量并控制信噪比，接着线性叠加并截幅生成不同干扰源数量的评测样本，最后用WER、准确率与LLM\-as\-a\-Judge评分同步度量感知与认知退化，其中能量对齐后的样本直接进入叠加步骤形成有效输入。相比高斯噪声或单源干扰，该设计强调声学生态有效性，用连续宽带噪声形成频谱掩蔽、用生物声考验注意分离，实际意义在于暴露认知功能性崩塌并检验增强前端的副作用。在K=1干扰条件ASR任务评测下，Audio\-Denoising处理的WER从基线4\.24%升至5\.62%，高于未增强基线。其结论适用边界受限于所选四类场景与能量对齐区间内的英语语音任务，尚未验证混响、远场采集与多语泛化下的失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 180. [听不清就靠编：用反事实硬负例把音频时间线对齐回声学证据](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1464-8d6581603c/)

> 英文题目：*[AHA: Aligning Large Audio\-Language Models for Reasoning Hallucinations via Counterfactual Hard Negatives](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1464-8d6581603c/)*

标签：#基准测试 #偏好优化 #音频大模型 #音频问答

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频问答 | 主方法：#偏好优化

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1464/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1464.pdf)

👥 **作者与机构**

- Yanxi Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Wenhui Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiwen Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Zhipeng Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xin Li：机构信息未能从会议 PDF 纯文本可靠映射
- Peijie Qiu：机构信息未能从会议 PDF 纯文本可靠映射
- Hao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Xuanzhao Dong：机构信息未能从会议 PDF 纯文本可靠映射
- Yujian Xiong：机构信息未能从会议 PDF 纯文本可靠映射
- Anderson Schneider：机构信息未能从会议 PDF 纯文本可靠映射
- Yuriy Nevmyvaka：机构信息未能从会议 PDF 纯文本可靠映射
- Yalin Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

大音频语言模型需以声学序列与指令为输入生成回答，难点在于声音事件随时间重叠展开，模型易依赖语言先验而虚构时序细节。本文先以事件遗漏、虚假身份、时序关系与定量时序四维分类界定幻觉，为扰动合成与评测提供对齐目标。接着由复杂声景字幕构建共享音频问题池，统一派生对齐与评测两条支路，使监督信号在不同输入模态下保持一致。然后用文本大模型按分类合成语言流畅但时序矛盾的反事实硬负例，经人工筛选与字幕真值配对形成偏好数据。最后以直接偏好优化在Qwen2\.5\-Omni\-7B上做低秩适配后训练，增大真值似然并显式抑制特定幻觉负例。与仅用监督微调的基线相比，关键差异在于用偏好目标惩罚看似合理却违背声学证据的伪造，迫使策略优先声学 grounding 而非语言流畅，从而提升细粒度推理泛化。在AHA\-Eval基准下，Qwen\-Audio\-AHA的定量时序错误率为52\.6%，从基线Qwen2\.5\-Omni的69\.6%降至52\.6%。该结论适用边界受限于字幕衍生问题与短剪辑场景，尚未验证长音频、强重叠与噪声下的外推能力，训练硬件为4张NVIDIA A100 GPU共训练8轮，推理开销与部署延迟尚未验证。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 181. [听不见的音素：极低资源下训练频次如何决定复杂音素能否被识别](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-147-1b6ad65ac2/)

> 英文题目：*[Hard to Be Heard: Phoneme\-Level ASR Analysis of Phonologically Complex, Low\-Resource Endangered Languages](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-147-1b6ad65ac2/)*

标签：#迁移学习 #语音学与音系 #低资源 #语音识别

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音识别 | 主方法：#迁移学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.147/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.147.pdf)

👥 **作者与机构**

- V\.S\.D\.S\.Mahesh Akavarapu：机构信息未能从会议 PDF 纯文本可靠映射
- Michael Daniel：机构信息未能从会议 PDF 纯文本可靠映射
- Gerhard Jäger：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究处理极低资源濒危语言的音素级自动语音识别，输入为野外噪声自发语音与受控朗读语音，输出为国际音标音素序列，难点在于音素库存极大且单音素样本稀少，低频复杂音素几乎无法可靠识别。首先将异构转写统一为国际音标并划分句子级训练测试集，为后续微调提供一致目标。接着以多语言预训练语音编码器为起点，构建语言相关音素词表并用成分符号参数平均初始化复合音素输出层，再以联结时序分类微调得到转写分布。最后对部分系统叠加词级三元语言模型进行束搜索解码以降低词错误率，前一步声学分布直接作为解码输入。与直接微调通用音素模型相比，该平均初始化利用成分共享实现跨音素迁移，因而能以小专用模型匹敌更大通用模型。在Archi测试集下，w2v2l\-custom\-avg的WER为0\.479，低于wav2vec2\-large\-ipa的0\.559。其结论适用边界受限于约1小时量级的东高加索语料与音素级评测，难以直接外推至大语模态与高资源场景。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 182. [情绪神经元是能关掉也能拨动的开关吗：大音频语言模型的因果验证](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-687-bb6f77697c/)

> 英文题目：*[Discovering and Causally Validating Emotion\-Sensitive Neurons in Large Audio\-Language Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-687-bb6f77697c/)*

标签：#评测协议 #音频大模型 #可解释性 #语音 #语音情感识别

评分：**6.0/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#评测协议

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.687/) · [官方 PDF](https://aclanthology.org/2026.acl-long.687.pdf)

👥 **作者与机构**

- Xiutian Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Björn Schuller：机构信息未能从会议 PDF 纯文本可靠映射
- Berrak Sisman：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音情感识别以语音波形为输入并输出离散情感标签，难点在于韵律音高能量等副语言线索弥散且与语义内容混杂，难以定位大音频语言模型内部的决策载体。该文先在正确解码样本上记录解码器门控激活并按情感统计正激活频次得到情感条件发放概率，为后续选择提供充分统计量。接着用随机高频低熵均值偏差与反差四种选择器全局排序并为每种情感选定等预算掩码，使识别池按情感封顶以保证类别可比。然后在推理时对选中神经元做失活与增益式操控，并在自身与跨情感条件下对比持有集评估情感特异性。在IEMOCAP评测下，ConAct选择的准确率变化为\-13\.50，低于随机掩码RND的\-0\.32。反差准则取最高与次高发放概率之差并仅归属最高情感，相比只看高频或低熵更能分离特异通路，因而定向放大可偏置预测而联合放大易干扰。结论适用边界受限于判别式选择题评测与三个开源模型，跨数据集迁移不对称且多情感联合操控尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/Qwen/Qwen2.5-Omni-7B> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/moonshotai/Kimi-Audio-7B-Instruct> — 暂时无法访问
- 模型相关资源：<https://huggingface.co/nvidia/audio-flamingo-3> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 183. [把台词说得像那个人：ActorMind 用看听想说四步做语音角色扮演](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1718-9ffc17556c/)

> 英文题目：*[ActorMind: Emulating Human Actor Reasoning for Speech Role\-Playing](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1718-9ffc17556c/)*

标签：#基准测试 #检索增强 #语音 #语音对话系统

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音对话系统 | 主方法：#检索增强

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1718/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1718.pdf)

👥 **作者与机构**

- Xi Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Xue：机构信息未能从会议 PDF 纯文本可靠映射
- Yike Guo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音角色扮演要求模型以角色档案、场景描述与历史口语对话为输入，用目标角色音色准确说出指定台词并复现原片情感韵律，难点在于语音情感理解、角色一致性与富有表现力合成的联合建模。该框架先由眼智能体读取角色档案、场景描述与上下文文本，再由耳智能体对历史语音做语音识别与情感描述以同时感知语言与情感线索。随后脑智能体以大语言模型综合上述所见所闻推理目标台词的情感状态，其输出的情感描述直接作为下一步检索查询。最后口智能体以该情感状态检索情感最相近的历史语音，并以其作为音色与韵律提示驱动语音合成器生成目标语音。与零样本克隆式语音合成基线及语音大模型直接生成相比，关键差异在于将情感推理显式为文本中间状态并以此检索提示，使韵律选择可解释且可复用现成合成器。在Friends第一季11至14集保留测试的评测下，ActorMind的RP\-MOS平均分为3\.56±0\.27，高于IndexTTS基线的RP\-MOS平均分3\.05±0\.56。该结论适用边界受限于英语情景喜剧6个角色与有限情感分布，Chandler等风格多变角色表现下降，跨语言跨领域与长程多轮外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/Edresson/YourTTS> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/index-tts/index-tts> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 184. [从“是不是自闭”到“在说什么”：ROSCO\-Omni 用标签引导把照护者理解蒸馏进开源全模态模型](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2011-bb5109d370/)

> 英文题目：*[ROSCO\-Omni: Multimodal LLM\-Based Communication Understanding for Non\- and Minimally\-Speaking Autistic Individuals](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2011-bb5109d370/)*

标签：#知识蒸馏 #多模态模型 #音视频 #音视频理解

评分：**6.0/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频理解 | 主方法：#知识蒸馏

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.2011/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.2011.pdf)

👥 **作者与机构**

- Siddhant Bikram Shah：机构信息未能从会议 PDF 纯文本可靠映射
- Kristina T\. Johnson：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为家庭Zoom环境中非口语与极少口语自闭症个体的短视频及其伴随音频，输出为6类沟通动作与6类沟通功能的多标签判别，难点在于行为高度特异且跨个体异质性大，意图需联合视觉、发声与语境才能推断。方法链第一步由教师模型Gemini\-3\-Flash接收视频与源自照护者标注的标签导向提示，生成动作描述、功能描述与联合描述三类合成指令数据。第二步以该合成数据对学生开源全模态模型Qwen3\-Omni做低秩适配微调，使其在无提示条件下直接生成解释与类别，推理时同时预测动作与功能以最大化联合概率。与诊断导向或纯视觉骨架识别方法的关键差异在于以标签约束教师感知以抑制幻觉，并以可观察动作为支架辅助抽象意图推断，使音频模态与动作功能关联得以显式利用。在ROSCO数据集评测下，ROSCO\-Omni的动作准确率为55\.28，高于Gemini\-2\.5\-Flash的48\.49。该结论适用边界受限于仅27人2903个样本且集中于三种综合征的美国英语家庭语料，跨文化与家庭环境外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 185. [声音里有喘息却只听文字说没事：CliniCAST 测音频分诊的文本主导](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2056-abf42f7a45/)

> 英文题目：*[CliniCAST: Benchmarking Acoustic Grounding and Text Dominance in Medical Triage](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2056-abf42f7a45/)*

标签：#医疗音频 #基准测试 #基准设计 #音频大模型 #病理语音评估

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#病理语音评估 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.2056/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.2056.pdf)

👥 **作者与机构**

- Kyusik Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Hyunwoo Yoo：机构信息未能从会议 PDF 纯文本可靠映射
- Jaehoon Choi：机构信息未能从会议 PDF 纯文本可靠映射
- Kitae Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Gail Rosen：机构信息未能从会议 PDF 纯文本可靠映射
- Bongwon Suh：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为患者自述语音，输出为1至5级急诊严重度指数分级或图文一致性标签，难点在于安抚性词汇与喘息咳嗽等高危声学线索冲突时模型须以可听证据为准而非被文本主导。方法先由GPT\-5\.2按教科书症状提示为12病种各生成25条短话语并保留线索弱化改写体，其输出的配对脚本进入下一步声学控制。接着以方括号标签内联注入呼吸与发音事件并形成标签版与去标签版配对文本，再用ElevenLabs v3按性别与年龄合成固定声线音频，使词汇固定而声学实现可变。最后用固定零样本提示要求模型仅依据可听严重度返回ESI等级或一致标签，从而分离声学因果效应并检验矛盾检测能力。与既往偏重转写准确率与公平性的语音研究不同，该设计将文本内容固定而只改变声学实现，直接考验音频原生推理而非转写后文本推理，实际意义在于暴露分诊中的文本主导失效模式。在50个音频样本的提示鲁棒性评测下，Gemini 2\.5 Flash原始提示的平均ESI指标为2\.90，高于改写1提示的2\.72。该结论的适用边界仅限于受控合成语音下的前提能力检验，真实患者音频与完整分诊流程尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 186. [音乐问答为何不能只靠通用多模态：密集音画下的时空与音乐先验设计](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-69-5f778e9a4f/)

> 英文题目：*[Music Audio\-Visual Question Answering Requires Specialized Multimodal Designs](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-69-5f778e9a4f/)*

标签：#文献综述方法 #模型比较 #音视频 #音乐 #音视频问答

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：综述 | 主任务：#音视频问答 | 主方法：#文献综述方法

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.69/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.69.pdf)

👥 **作者与机构**

- Wenhao You：机构信息未能从会议 PDF 纯文本可靠映射
- Xingjian Diao：机构信息未能从会议 PDF 纯文本可靠映射
- Wenjun Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Chunhui Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Keyi Kong：机构信息未能从会议 PDF 纯文本可靠映射
- Weiyi Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Chiyu Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Zhongyu Ouyang：机构信息未能从会议 PDF 纯文本可靠映射
- Tingxuan Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Ming Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Soroush Vosoughi：机构信息未能从会议 PDF 纯文本可靠映射
- Jiang Gui：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音乐音频视觉问答（Music Audio\-Visual Question Answering，Music AVQA）输入为乐队演奏视频、连续复调音频与自然语言问题，输出为存在、计数、定位、比较与时序类答案，难点在于声源重叠、视听时滞与乐理知识依赖。本文按输入处理、空间时间架构与音乐建模三段组织综述，先梳理从 MUSIC\-AVQA 到 MUSIC\-AVQA v2\.0 再到 MUSIC\-AVQA\-R 的数据集演进，再将方法分为基于 Transformer（Transformer\-based）、基于卷积神经网络（Convolutional Neural Network，CNN）与混合三类并标注是否含空间时间（Spatial\-Temporal，S\-T）设计，最后对比分组精度并提炼未来方向。与通用多模态大语言模型（Multimodal Large Language Model，MLLM）直接融合全局特征不同，强调的机制是先选问题相关时间片段、再聚焦发声视觉区域、最后做细粒度跨模态对齐。在 MUSIC\-AVQA 测试集上，带空间时间设计的 AMUSE 总体平均准确率达到 83\.52%，明显高于无该设计的通用基线。该结论主要适用于短时长摆拍式演奏视频与模板化问题，面对长程结构、即兴演奏与开放词汇鲁棒改写仍未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 187. [只动声音就能拖垮三模态推理：SoundBreak 的六路音频攻击](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1275-05df968c9e/)

> 英文题目：*[SoundBreak: A Systematic Study of Audio\-Only Adversarial Attacks on Trimodal Models](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1275-05df968c9e/)*

标签：#评测协议 #多模态模型 #对抗鲁棒性 #音视频 #音视频问答

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频问答 | 主方法：#评测协议

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1275/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1275.pdf)

👥 **作者与机构**

- Aafiya Shamshad Hussain：机构信息未能从会议 PDF 纯文本可靠映射
- Gaurav Srivastava：机构信息未能从会议 PDF 纯文本可靠映射
- Alvi Md Ishmam：机构信息未能从会议 PDF 纯文本可靠映射
- Zaber Ibn Abdul Hakim：机构信息未能从会议 PDF 纯文本可靠映射
- Chris Thomas：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音视频问答以同步音频、视频与文本问题为输入，以答案文本为输出，难点在于攻击者仅能篡改音频却需破坏跨模态推理。SoundBreak先将共享加性扰动循环扩展至干净音频并做峰值归一化，再经梅尔滤波器组提取特征送入冻结的三模态模型。接着其针对编码器表示、跨模态注意力、隐状态与输出似然六类目标反向优化扰动，上一步输出的特征失配直接作为下一步梯度更新的依据。最后同一扰动被复用于新样本的音频通道，实现查询无关的复用攻击。与多通道协同篡改或目标化劫持不同，该机制以非目标化音频独扰方式系统压制正确率，揭示了编码器特征几何脆弱性的实际意义。在AVQA评测设置下，组合攻击的准确率为0\.039，低于干净输入的0\.956。其结论适用边界受限于白盒数字域与房间脉冲响应仿真条件，跨架构与跨声学域迁移显著失效构成失败条件。全部实验在英伟达图形处理器硬件上完成，训练成本约为2500个图形处理器小时，单次攻击训练约为20至25个图形处理器小时。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 188. [用静态先验锚定动态语音：MMSFC 与顺序平滑如何重塑流利度分类](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1551-959c32dab3/)

> 英文题目：*[Synergizing Semantic Anchors and Ordinal Smoothed Cross\-Entropy for Speech Fluency Classification](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1551-959c32dab3/)*

标签：#教育 #注意力机制 #多模态学习 #正则化 #语音属性识别

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音属性识别 | 主方法：#多模态学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1551/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1551.pdf)

👥 **作者与机构**

- Mulati Kahaer：机构信息未能从会议 PDF 纯文本可靠映射
- Sirajahmat Ruzmamat：机构信息未能从会议 PDF 纯文本可靠映射
- XuDong Pang：机构信息未能从会议 PDF 纯文本可靠映射
- Subinuer Maimaitituerxun：机构信息未能从会议 PDF 纯文本可靠映射
- Zaokere Kadeer：机构信息未能从会议 PDF 纯文本可靠映射
- Abudurexiti Reheman：机构信息未能从会议 PDF 纯文本可靠映射
- Wenwen Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Panpan Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Aishan Wumaier：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

口语流利度分类输入为L2学习者朗读语音，输出为四级有序流利度标签，难点在于同时感知宏观语速韵律趋势与微观停顿迟疑异常并保持等级有序性。该工作先构建免对齐专家特征提供全局语言学先验，覆盖流利中断统计与韵律规律性度量，输出静态语义锚点以补充动态声学表示。接着以互交叉注意力让该先验主动查询Whisper编码器时序表示并融合解码器语义上下文，实现全局统计量对局部声学注意的显式引导与双向校准。然后用序数平滑交叉熵构造距离感知幂律软目标，并以置信度自适应平滑与边界增强调节正则强度，将邻近误差优于远离误差的序数约束注入训练。与简单拼接或均匀标签平滑相比，该链条避免了未对齐融合引入噪声与模糊等级边界，保留了更具语义价值的有序监督信号。在SpeechOcean762测试集下，完整系统的准确率为83\.40%，高于标准交叉熵基线的82\.68%。该结论适用边界受限于普通话母语L2人群与冻结声学骨干条件，对重音语调建模与大规模语音大语言模型对比尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/openai/whisper-large-v3> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 189. [先看清频谱能量再迭代：谱重力共振峰估计如何换取带时间的音素切分](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1775-e8707dca20/)

> 英文题目：*[Spectral Gravity Formant Estimation for Phonetic Segmentation](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1775-e8707dca20/)*

标签：#信号处理 #语音学与音系 #多语言 #零样本 #语音识别

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#信号处理

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1775/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1775.pdf)

👥 **作者与机构**

- Michael S\. Yantosca：机构信息未能从会议 PDF 纯文本可靠映射
- Albert M\. K\. Cheng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入原始音频、输出带时间戳的音素切分与标注，难点在于端到端正字法系统丢弃细粒度时间信息且对未见音位分布存在偏置，难以满足语言学级时间保真要求。方法链首先由带估计器滤波生成窄谱图表示以抑制噪声与谐波干扰，其输出的能量点集进入谱引力初始化阶段。初始化把谱能量视为质量并按频率距离平方衰减赋权计算全局竞争力，给出至多4个共振峰高斯混合的均值初值，避免塌缩到基频与第一共振峰区。随后在200微秒级截止约束下运行加权期望最大化精化均值方差与混合权重，再结合改进独热相似度与共振峰校验决定帧间切分边界并输出64位编码标签。相对随机或等距初始化与依赖后验推导时间的Wav2Vec2Phoneme及Allosaurus，该机制保留中高频第二、第三共振峰的竞争力并显式建模时间，使零样本跨语言切分成为可能。在爱尔兰语、契维语和沃提克语语料评测下，Phonotomizer的完整性指标为0\.637±0\.082，高于Allosaurus的0\.388±0\.095。该结论适用边界受限于小规模志愿者语料与单人手标金标，鼻音、颤音与滑音等行波共振峰仍过切分明显且尚未验证大规模多说话人外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 190. [相同文字不同处境，相同处境不同语气：AEQ\-Bench 拆解全模态模型共情](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1813-20100aa18a/)

> 英文题目：*[AEQ\-Bench: Measuring Empathy of Omni\-Modal Large Models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1813-20100aa18a/)*

标签：#基准测试 #基准设计 #人类参与评测 #语音 #语音对话系统

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#语音对话系统 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1813/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1813.pdf)

👥 **作者与机构**

- Xuan Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Lewei Yao：机构信息未能从会议 PDF 纯文本可靠映射
- Lanqing Hong：机构信息未能从会议 PDF 纯文本可靠映射
- Kai Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Dehua Tao：机构信息未能从会议 PDF 纯文本可靠映射
- Daxin Tan：机构信息未能从会议 PDF 纯文本可靠映射
- Yukun Deng：机构信息未能从会议 PDF 纯文本可靠映射
- Ruifeng Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Jing Li：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该基准任务输入为英文语音话语加文本上下文，输出为共情回复或对音频回复的共情评判，难点在于语言内容与韵律语气共同决定共情且高度主观。构建先从三类语料过滤不适与非清晰语音样本以保留可用音频，再由GPT逆向生成可引出同一话语的多样上下文或同一上下文的多语气解释，形成配对实例。随后人工校验上下文连贯与情感可解释性并给出参考解释，校验后实例直接进入语言与副语言两路评测。评测中文本裁判负责模态依赖、自然度与区分度打分，音频裁判与人类负责连贯性、支持性与传递效果对照，并单独考察副语言传递与跨情境区分。与只看转写文本的既有评测相比，该机制同时要求听懂语气并用合适语气回应，因而更贴近真实语音交互。在AEQ\-BENCH基准下，GPT的Naturalness归一化得分为0\.98，高于LLaMA\-Omni的0\.95。该结论适用边界限于英文日常与朗读类语音的粗粒度共情判断，对细粒度情感渲染与跨语言外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 191. [整段对话只有一个标签时，如何让稀疏病症线索被三层粒度共同抓住](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1194-b6130c13c3/)

> 英文题目：*[Semi\-Supervised Diseased Detection from Speech Dialogues with Multi\-Level Data Modeling](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1194-b6130c13c3/)*

标签：#语音生物标志物 #半监督学习 #低资源 #语音 #病理语音评估

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.5/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#病理语音评估 | 主方法：#半监督学习

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1194/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1194.pdf)

👥 **作者与机构**

- Xingyuan Li：机构信息未能从会议 PDF 纯文本可靠映射
- Mengyue Wu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理无切分长程临床对话音频到会话级疾病标签的映射，输入为包含调查者与被试多轮话语的完整录音，输出为抑郁或阿尔茨海默病的二分类判断，难点是标注稀缺且主观、病理线索稀疏非均匀分布而监督远在会话末端。会话级主流水线先将样本切分为多个片段并经预训练音频编码器得到嵌入，再经时序池化与多头注意力聚合为会话表示以产生最终检测结果，其会话预测为后续两级提供监督源。片段级利用主流水线对无标签话语的预测经阈值过滤生成伪标签，回训共享音频编码器以增强句子级判别力，学到的编码器输出又回流到会话聚合中形成闭环。帧级对同一输入施加变速与时域掩码等增强得到双视图，分别送入学生网络与参数以指数滑动平均更新且冻结的教师网络，并以均方误差约束两者嵌入一致，三路损失加权联合单阶段优化且每隔k步在线刷新伪标签。在中文EATD抑郁语料10%标注评测设置下，本方法WavLM版本的宏平均F1分数为59\.62，高于同编码器监督基线的宏平均F1分数53\.37。与将切分片段视为独立同分布样本的已有做法不同，该机制显式建模症状非均匀表达并筛选显著片段，因而能更高效利用无标签数据并保持跨语言与跨病种的模型无关性。该结论适用边界受限于仅在两个小规模音频单模态数据集上验证，对噪声、设备迁移与多病混杂的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 192. [留住语调、抹掉身份：用声门源与对抗损失学隐私韵律表示](/posts/conference-acl-2026-conference-paper-id-2026-acl-short-26-bd1d11aaad/)

> 英文题目：*[Privacy\-preserving Prosody Representation Learning](/posts/conference-acl-2026-conference-paper-id-2026-acl-short-26-bd1d11aaad/)*

标签：#对抗训练 #自监督学习 #隐私保护 #韵律 #语音属性识别

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音属性识别 | 主方法：#自监督学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-short.26/) · [官方 PDF](https://aclanthology.org/2026.acl-short.26.pdf)

👥 **作者与机构**

- Kevin Everson：机构信息未能从会议 PDF 纯文本可靠映射
- Mari Ostendorf：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入为连续语音波形，输出为逐帧韵律表示，要求保留基频动态与重音和短语边界等语言学结构，同时剥离词汇内容与说话人身份，难点在于声学韵律线索天然耦合说话人音色且易泄露词汇信息。方法链分三步：先经16阶线性预测编码逆滤波估计声门源波形以抑制词汇泄露并保留音质信息，再将该波形送入HuBERT\-base卷积加Transformer骨干并对随机采样跨度掩码建模以学习超音段模式，然后以周期性与说话人归一化对数基频及其差分和第一梅尔倒谱系数构造离散目标，并联合掩码预测与跨度边界预测加梯度反转的说话人对抗损失训练，使冻结后的帧特征进入下游任务模型。与直接用原始韵律特征或通用HuBERT\-base相比，关键差异在于输入端内容解耦与目标端归一化加对抗端的双路说话人解耦，其实质是在不损害韵律建模下降低身份可识别性以支撑隐私保护。在BU Radio Corpus语料的短语边界任务下，本方法的F1分数为0\.82，高于HuBERT\-base的0\.79。该结论适用边界受限于仅在英语朗读与LibriTTS音高重建等小规模理解任务上验证，尚未验证情感等超语言任务与语音生成主观评测。其训练成本为在四块A40或L40硬件上以平均每卡约30批量训练500K步所耗费的计算量。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 193. [用已确认的块把下一步拽回来：锚定循环如何抑制长序列符号音乐的误差累积](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1574-1dbb6ae701/)

> 英文题目：*[Anchored Cyclic Generation: A Novel Paradigm for Long\-Sequence Symbolic Music Generation](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1574-1dbb6ae701/)*

标签：#自回归模型 #主观评测 #长音频处理 #音乐 #符号音乐生成

评分：**5.7/10** | 创新 1.3/2 | 技术严谨 0.9/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#符号音乐生成 | 主方法：#自回归模型

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1574/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1574.pdf)

👥 **作者与机构**

- Boyu Cao：机构信息未能从会议 PDF 纯文本可靠映射
- Lekai Qian：机构信息未能从会议 PDF 纯文本可靠映射
- Dehan Li：机构信息未能从会议 PDF 纯文本可靠映射
- Haoyu Gu：机构信息未能从会议 PDF 纯文本可靠映射
- Mingda Xu：机构信息未能从会议 PDF 纯文本可靠映射
- Qi Liu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

长序列符号音乐生成以时长或主题条件为输入，输出数十秒至数分钟的离散音符序列，难点在于自回归迭代中误差累积导致风格漂移与结构断裂。分层锚定循环生成先由草图循环生成全曲粗粒度结构块的语义特征，为长程连贯提供骨架并控制整体时长。接着语义重构模型以当前块语义特征为条件自回归生成块内钢琴令牌序列，将语义信息还原为细节丰富的音符块。已确认的生成块经重嵌入层转回锚特征并与历史锚拼接后回授语义预测模型，用于预测下一块语义特征，形成循环迭代。与直接条件于含噪连续历史的传统自回归不同，该反复投影回确认离散表示的锚定机制把历史偏差约束为量化失配加局部误差，并将复杂度拆分为块级与块内两段。在30秒生成消融评测设置下，Small模型的Pitch指标为2\.45，高于GT的2\.20。该结论的适用边界受限于双轨钢琴与1/16拍分辨率及MuseScore加POP909设定，附录大语言模型打分仅作补充参考而尚未验证为主协议。训练成本方面，原文披露在MuseScore数据上训练30个epoch使用了4块NVIDIA RTX 4090 GPU的硬件。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 194. [音素嵌入为何不公平：偏置与方差两类几何误差的拆分检验](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1678-27ac088d5a/)

> 英文题目：*[Identifying and typifying demographic unfairness in phoneme\-level embeddings of self\-supervised speech recognition models](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-1678-27ac088d5a/)*

标签：#统计分析 #模型评估 #公平性 #语音学与音系 #语音识别

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#统计分析

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.1678/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.1678.pdf)

👥 **作者与机构**

- Felix Herron：机构信息未能从会议 PDF 纯文本可靠映射
- Solange Rossato：机构信息未能从会议 PDF 纯文本可靠映射
- Alexandre Allauzen：机构信息未能从会议 PDF 纯文本可靠映射
- François Portet：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为带性别、年龄、方言和族裔标注的朗读语音，输出为音素级公平性诊断，难点在于区分表征空间中模式偏移与离散度增大这两类误差。该工作先用蒙特利尔强制对齐器（Montreal Forced Aligner，MFA）抽取冻结编码器各层音素嵌入，再训练单说话人群组（Speaker Group，SG）与均衡数据的线性音素探针并比较跨组泛化，随后对同一说话人同音素计算k近邻（k\-Nearest Neighbors，KNN）距离以度量随机误差，最后比较常规自动语音识别（Automatic Speech Recognition，ASR）微调与领域增强/对抗训练（Domain Enhancing / Adversarial Training，DET/DAT）下的两类指标。与把公平性当作黑盒准确率差距处理的研究不同，该框架把偏差归因到几何可检验的偏移与方差机制。在Sonos数据集上WavLM\-large最佳层均衡探针宏平均F1达到0\.91，而方言差距仍有4\.48%，且KNN距离与音素分类准确率在全部模型上呈显著负相关。结论仅适用于受控朗读语音与6个百M量级编码器的音素嵌入层，不涉及解码幻觉与序列建模误差，也未在自发语音或更大模型上验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 195. [人设没崩在哪条路：把说什么和怎么说分开查的语音人设诊断](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-445-8236f3494c/)

> 英文题目：*[PED: Route\-Decoupled Diagnostics for Persona Consistency in Spoken Agents](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-445-8236f3494c/)*

标签：#评测协议 #人类参与评测 #模型比较 #语音 #语音对话系统

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音对话系统 | 主方法：#评测协议

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.445/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.445.pdf)

👥 **作者与机构**

- Weihao Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Junrui Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Zhao Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Ju Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

长时全语音角色扮演的输入是携带人格设定的多轮口语对话历史与当轮合成语音，输出是维持说什么与怎么说一致的人格化回复，实际难点在于破格时难以区分是文本生成漂移还是语音实现坍缩且缺乏轮次级定位信号。为此先为每个人格与路由采集无状态锚样本形成情感指纹以界定可分性上界，其输出的锚向量直接作为后继对齐的参考基准；再用固定的文本与语音情感投影仪将每轮转录与波形映射到同一七维情感单纯形，得到可比的路由级情感向量；最后沿基线\-加压\-恢复轮次计算与锚点的余弦对齐、跨人格收敛与文本\-音频耦合，从而把长程轨迹转为故障定位信号。相对已有语音加角色整体打分，关键差异在于按路由解耦与按轮次追踪而非系统级聚合排名，因而能揭示文本中性坍缩与音频表达坍缩的不对称失效。在基线\-加压\-恢复对话协议评测下，级联管线音频路由的最近锚点准确率为44\.0%，高于端到端模型的30\.7%。该结论适用边界受限于固定脚本、三个人格、两类约3B架构与特定投影仪下的情感切片测量，尚未验证事实一致性与风格方言等非情感维度的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 196. [把整条基频轮廓看成整体：首尔韩语重音短语声调的对比学习分类](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1838-64ad9193d4/)

> 英文题目：*[Deep Supervised Contrastive Learning of Pitch Contours for Robust Pitch Accent Classification in Seoul Korean](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-1838-64ad9193d4/)*

标签：#数据集 #对比学习 #韵律 #语音 #音频分类

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#音频分类 | 主方法：#对比学习

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.1838/) · [官方 PDF](https://aclanthology.org/2026.acl-long.1838.pdf)

👥 **作者与机构**

- Hyunjung Joo：机构信息未能从会议 PDF 纯文本可靠映射
- GyeongTaek Lee：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

首尔韩语需将连续对数F0轮廓映射为16类重音短语调型，难点在于性别音域差异、类别高度不均与基频断裂及追踪噪声造成的整体形状变异。作者先构建10093个重音短语人工标注基准并提取对数F0序列，再以共享卷积编码器加投影头把干净视图与随机抖动缩放掩膜等增强视图映射到归一化隐空间。接着以干净视图有监督对比损失拉紧同类干净样本的类内紧致性，并以增强到干净的有监督对比损失约束跨扰动不变性，两项损失联合训练后冻结编码器接逻辑回归等浅分类器输出类别。相对局部未来预测与统一跨视图对齐，双分支独立监督避免逐帧马尔可夫假设，直接优化整体轮廓结构一致性，因而更能抵抗表面不规则并保持细粒度调型可分性。在5折交叉验证的编码器维度1024设置下，逻辑回归的准确率为0\.7775，高于随机森林的0\.7740。该最优配置下宏平均F1为0\.5154，但尾部低频类召回仍极低且长拖低音持续音易被误判为多低音序列。该结论适用边界受限于广播式清晰朗读语料与纯F0输入，跨语体泛化尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 197. [看得懂却算不对：多模态大模型乘法在算术负载下的计算崩塌](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2025-ec58887f53/)

> 英文题目：*[Multiplication in Multimodal LLMs: Computation with Text, Image, and Audio Inputs](/posts/conference-acl-2026-conference-paper-id-2026-findings-acl-2025-ec58887f53/)*

标签：#基准设计 #多模态模型 #模型评估 #语音 #音频问答

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.3/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：数据集与基准 | 主任务：#音频问答 | 主方法：#基准设计

会议来源：[官方记录](https://aclanthology.org/2026.findings-acl.2025/) · [官方 PDF](https://aclanthology.org/2026.findings-acl.2025.pdf)

👥 **作者与机构**

- Samuel Gideon Balter：机构信息未能从会议 PDF 纯文本可靠映射
- Ethan Jerzak：机构信息未能从会议 PDF 纯文本可靠映射
- Connor Thomas Jerzak：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作研究多模态大语言模型精确乘法，输入为文本数字与数词、渲染图像与语音形式的同一算式，输出为精确乘积，难点在于进位传播与长程数字交互使难度随算术结构迅速上升而感知本身近乎无损。首先模板生成器配对同一算式的三模态实例并计算算术负载C即总位数乘非零位数，其输出的难度标量进入下一步统一回归。其次按模态拟合正确率随C变化的逻辑回归并做感知对照，以分离计算失效与感知误差，随后其失配模式进入策略探针。最后用风格受控的强制续写损失探针比较柱式、分配分解与舍入补偿前缀，并用启发式LoRA适配器几何检验策略是否对应不同参数子空间。与已有视觉数学评测偏重复杂场景不同，该文将模态与算式结构正交控制并以单维负载解释退化，具有更强的可比性与机制指向意义。在平均C为177\.4的测试集下，Qwen3\-VL\-235B文本条件的准确率为57\.6%±4\.1%，高于Qwen3\-VL\-30B的49\.3%±4\.2%。结论适用边界受限于受控渲染的精确乘法，尚未验证加除法、应用题、手写扫描与工具调用智能体流程。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://neuristemic.ai/multiplication-in-multimodal-llms/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 198. [缺音频不靠想象：从真实语义库中检索再净化](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-961-a2e283874b/)

> 英文题目：*[Retrieving to Recover: Towards Incomplete Audio\-Visual Question Answering via Semantic\-consistent Purification](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-961-a2e283874b/)*

标签：#混合专家模型 #检索增强 #鲁棒性 #音视频问答

评分：**5.1/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.6/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#音视频问答 | 主方法：#检索增强

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.961/) · [官方 PDF](https://aclanthology.org/2026.acl-long.961.pdf)

👥 **作者与机构**

- Jiayu Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shuo Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Qilang Ye：机构信息未能从会议 PDF 纯文本可靠映射
- Zihan Song：机构信息未能从会议 PDF 纯文本可靠映射
- Jiajian Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Zitong YU：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音视频问答以视觉帧、音频段与文本问题为输入预测答案，推理期传感器故障或传输丢失会导致音频或视觉缺失，使跨模态对齐断裂而推理脆弱。为此R2ScP先在ImageBind等预训练模型构建的统一语义空间中建立外部记忆库，以可用模态为查询做跨模态检索，输出缺失模态的粗候选特征集。接着上下文感知自适应净化以可用模态与问题语义一致性为准则，对候选集自适应抑制噪声并凸显任务相关线索，输出高保真净化特征。最后两阶段混合专家先独立预训练视觉、音频与文本专家，再冻结专家训练动态门控做加权融合，并以语义排序损失约束恢复特征位于合理流形后解码作答。与以可用模态为条件生成缺失特征的方法不同，该框架复用真实世界特征段而非合成通用嵌入，从而保留特定乐器音色等实例特异细节并减少语义幻觉。在缺失模态设置下，R2ScP在AVQA基准上的准确率为76\.35%，高于其在Music\-AVQA基准上的71\.54%。该结论受限于检索样本质量且尚未验证训练期缺失情形，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 199. [从碎片到谱系：印度语言 NLP 资源为何要按任务重组](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-551-160371c5b6/)

> 英文题目：*[BhashaSutra: A Task\-Centric Unified Survey of Indian NLP Datasets, Corpora, and Resources](/posts/conference-acl-2026-conference-paper-id-2026-acl-long-551-160371c5b6/)*

标签：#文献综述方法 #低资源 #多语言 #语音 #音频理解

评分：**4.9/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：综述 | 主任务：#音频理解 | 主方法：#文献综述方法

会议来源：[官方记录](https://aclanthology.org/2026.acl-long.551/) · [官方 PDF](https://aclanthology.org/2026.acl-long.551.pdf)

👥 **作者与机构**

- Raghvendra Kumar：机构信息未能从会议 PDF 纯文本可靠映射
- Devankar Raj：机构信息未能从会议 PDF 纯文本可靠映射
- Sriparna Saha：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

印度22种预定语言与数百方言的多语系多脚本形态丰富语码混合输入，要求输出覆盖文本语音多模态的统一资源视图，而标注稀缺与覆盖不均使跨语言泛化困难。为此先按六大组十七细粒度任务建立统一分类树，将语言现象领域与模态正交映射到任务节点。再对每个任务系统梳理数据集基准与模型的创建脉络与建模路线，使前步分类输出成为资源归集与比较的骨架。最后从标注评测与文化泛化维度提炼趋势缺口，将归集结果升华为跨任务不均与翻译构造偏差的显性诊断。与以往局限少数高资源语言或泛多语言框架的回顾相比，关键机制差异在于任务树居中组织而非语言罗列，使低资源与文化多样变体得以同尺度比较，具有补齐盲区的实际意义。在Assamese语料任务评测下，Character\-level Bi\-LSTM的准确率为93\.36%，高于LSTM的92\.80%。该结论适用边界仅限公开文献静态快照，对资源许可质量与长期维护尚未验证，不能外推为选型或部署保证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
