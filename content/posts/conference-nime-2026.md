---
title: "nime-2026 论文深度解读"
date: 2026-09-14
draft: false
paper_digest_pipeline_owned: true
tags: ["变分自编码器","测试时自适应","大语言模型","端侧运行","多模态学习","多通道","发声与构音","符号音乐生成","高效推理","环境声","集成学习","检索增强","教育","开源工具","可解释性","空间音频","空间音频信号","空间音频渲染","理论分析","流式处理","麦克风阵列","模型比较","脑信号","评测协议","强化学习","人类参与评测","软件工具","生成模型","生理信号","生物声学","生物声学监测","声源定位","时频分析","实时处理","视频到声音生成","数据标注","数据集","数据集构建","提示学习","听觉与音乐认知","统计分析","图神经网络","文本到语音","文献计量分析","文献综述方法","系统综述","心理测量","心理声学实验","信号处理","医疗音频","音高与旋律提取","音乐","音乐理解","音乐生成","音乐信息检索","音乐源分离","音频检索","音频交互","音频理解","音频生成","音频事件检测","音视频","音视频交互","音视频生成","用户研究","游戏音频","语音","语音合成","长音频处理","主观评测","自回归模型","自适应滤波","CNN","RNN","Transformer"]
categories: ["nime-2026 论文"]
description: "共收录 160 篇 nime-2026 会议论文的 Reader 深度解读"
paper_digest_page_type: index
paper_digest_reader_quality: "reader-facing-v3"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_scope: "aggregate-primary-task-counts"
---

# nime-2026 论文深度解读

本汇总收录 authenticated plan 选择集内全部 160 篇已完成分析、重标和单篇 staging 的论文。

🏷️ 标签说明：本期使用新版受控 taxonomy；热门方向只统计主任务。

## ⚡ 今日概览

✅ authenticated plan 入选 160 篇 → 🔬 深度分析、Reader 与页面投影完成

### 🏷️ 热门方向

| 方向（仅主任务） | 数量 |
|---|---:|
| #音频交互 | 61 篇 |
| #音乐生成 | 43 篇 |
| #符号音乐生成 | 12 篇 |
| #音频生成 | 9 篇 |
| #空间音频渲染 | 8 篇 |
| #音乐理解 | 8 篇 |
| #音视频交互 | 7 篇 |
| #音视频生成 | 4 篇 |
| #音频理解 | 2 篇 |
| #语音合成 | 2 篇 |
| #声源定位 | 1 篇 |
| #文本到语音 | 1 篇 |
| #音频检索 | 1 篇 |
| #音频事件检测 | 1 篇 |

## 📊 论文评分排行榜

| 排名 | Reader 中文题目 | 英文题目 | 八维评分 | 分档 | 文档类型 | 主任务 |
|---:|---|---|---|---|---|---|
| 1 | [不断线比对得准更重要：千机用单向广播把数百部手机变成古琴共鸣体](/posts/conference-nime-2026-conference-paper-id-nime2026-25-7dd19a1beb/) | [Qianji: A Resilient Framework for Orchestrating "A Thousand Machines" in Distributed Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-25-7dd19a1beb/) | **8.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.3/1.5 | 前25% | 系统技术报告 | #空间音频渲染 |
| 2 | [链接有了不等于能复现：NIME 开放实践的寻址缺口与够用型归档](/posts/conference-nime-2026-conference-paper-id-nime2026-31-50ab643243/) | ["See Link for More Details": Towards a Pragmatic Open Methodology at NIME\.](/posts/conference-nime-2026-conference-paper-id-nime2026-31-50ab643243/) | **7.8/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 方法研究 | #音乐理解 |
| 3 | [用一块 FPGA 带起 768 个喇叭：高密度扬声器阵列如何做小做模块化](/posts/conference-nime-2026-conference-paper-id-nime2026-107-fa781b831c/) | [Embedded, Modular, and Affordable High\-Density Loudspeaker Arrays\.](/posts/conference-nime-2026-conference-paper-id-nime2026-107-fa781b831c/) | **7.4/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #空间音频渲染 |
| 4 | [把广播档案馆装进乐器：TECHNO\-UTOPIA 如何让交响乐团与嵌入式 AI 互相改写](/posts/conference-nime-2026-conference-paper-id-nime2026-26-36dad124bc/) | [TECHNO\-UTOPIA: Music Emerging from Colliding Embedded AI Instruments with Radio Orchestras and their Archives\.](/posts/conference-nime-2026-conference-paper-id-nime2026-26-36dad124bc/) | **7.3/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.2/1.5 | 前50% | 应用研究 | #音乐生成 |
| 5 | [不断声的文本乐器：用可读参数把语言模型的等待藏进演奏里](/posts/conference-nime-2026-conference-paper-id-nime2026-120-88f948605f/) | [A Text\-Steerable Instrument for Sketching Procedural Soundscapes via Language Models\.](/posts/conference-nime-2026-conference-paper-id-nime2026-120-88f948605f/) | **7.2/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 6 | [不拆琴键也能看清触键：PHOTON 在历史键盘下跟踪键杠杆](/posts/conference-nime-2026-conference-paper-id-nime2026-85-33a6f63a65/) | [PHOTON: Non\-Invasive Optical Tracking of Key\-Lever Motion in Historical Keyboard Instruments\.](/posts/conference-nime-2026-conference-paper-id-nime2026-85-33a6f63a65/) | **7.2/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.1/1.5 | 前50% | 系统技术报告 | #音乐理解 |
| 7 | [把采样做成可抓握的棋子：Turntangilism 如何不打断打碟而加上现场采样与环形步进](/posts/conference-nime-2026-conference-paper-id-nime2026-47-58519ec3c8/) | [Turntangilism: Enhancing traditional Turntable Setups with Tangible Controls for Digital Sequencing and Live Sampling\.](/posts/conference-nime-2026-conference-paper-id-nime2026-47-58519ec3c8/) | **7.1/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 8 | [谱面即乐器：把导航、触摸与信号路由画进同一张可演奏总谱](/posts/conference-nime-2026-conference-paper-id-nime2026-77-4c1adda1c7/) | [Oscilla: The Score as Performable Interface\.](/posts/conference-nime-2026-conference-paper-id-nime2026-77-4c1adda1c7/) | **7.1/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 9 | [共享轨迹与独占声对象：WeSp 如何把协作式空间化拆成可同时编辑的结构](/posts/conference-nime-2026-conference-paper-id-nime2026-141-88eb045202/) | [Shared Agency through Collaborative Trajectory Editing in Immersive Audio \.](/posts/conference-nime-2026-conference-paper-id-nime2026-141-88eb045202/) | **7.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #空间音频渲染 |
| 10 | [把每一步变成声音：智能鞋如何同时处理冻结步的急救与步幅的慢训练](/posts/conference-nime-2026-conference-paper-id-nime2026-161-d206841ae6/) | [A Smart Footwear Platform for Gait Augmentation – Application to Musical Feedback for Improving Gait in Parkinson's Disease–\.](/posts/conference-nime-2026-conference-paper-id-nime2026-161-d206841ae6/) | **7.0/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.1/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 11 | [不逐个试听，如何在 FM 参数海里找到想要的声音：VibeFM 的采样加可视总览](/posts/conference-nime-2026-conference-paper-id-nime2026-90-24996d4782/) | [VibeFM: Visual Exploration of FM Synthesis\.](/posts/conference-nime-2026-conference-paper-id-nime2026-90-24996d4782/) | **7.0/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 12 | [把高维潜轨迹铺成可走的地形：Latent Terrain 如何驯服神经音频自编码器](/posts/conference-nime-2026-conference-paper-id-nime2026-38-6287e9a68b/) | [Latent Terrain: Adapting Neural Audio Autoencoders as Design Materials in NIME\.](/posts/conference-nime-2026-conference-paper-id-nime2026-38-6287e9a68b/) | **6.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频生成 |
| 13 | [把步进音序器当乐器演奏：低维规则如何保住手势与作者权](/posts/conference-nime-2026-conference-paper-id-nime2026-159-f9098797ef/) | [Performing Sequences: Interaction and Instrumentality in the Design of a Performable Sequencing System\.](/posts/conference-nime-2026-conference-paper-id-nime2026-159-f9098797ef/) | **6.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #符号音乐生成 |
| 14 | [不靠语料库的共演：反馈吉他如何边听边学边再注入](/posts/conference-nime-2026-conference-paper-id-nime2026-33-36304f82fd/) | [OTIAC: Co\-Improvising With a Musical Agent in a Feedback\-Based Guitar Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-33-36304f82fd/) | **6.8/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 15 | [不为控制发声：把手部预测失败变成增强现实里的声音材料](/posts/conference-nime-2026-conference-paper-id-nime2026-57-856a0706b6/) | [Sounds from Mismatch: Sensorimotor Prediction Error as Sonic Material in Augmented Reality\.](/posts/conference-nime-2026-conference-paper-id-nime2026-57-856a0706b6/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 16 | [新手用多轨生成作曲工具：易用但控制深度不足](/posts/conference-nime-2026-conference-paper-id-nime2026-128-e4616ba30d/) | [Novice Users' Evaluation of Two Multi\-track Music Machines for AI\-Assisted Music Composition: Usability, User Experience and Acceptance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-128-e4616ba30d/) | **6.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #符号音乐生成 |
| 17 | [肌电难听难看时如何调模型：用音频通道做拐杖的跨模态信号翻译](/posts/conference-nime-2026-conference-paper-id-nime2026-133-99f8f62c6a/) | [Cross\-Modal Sig2Sig Machine Translation with Deep Generative Modeling for NIME Design\.](/posts/conference-nime-2026-conference-paper-id-nime2026-133-99f8f62c6a/) | **6.7/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音乐生成 |
| 18 | [不打断演奏的反馈：用游戏引擎把鼓面击打变成实时可视练习](/posts/conference-nime-2026-conference-paper-id-nime2026-18-fe5b10df14/) | [Exploring Real\-Time Interfaces With Sensory Percussion\.](/posts/conference-nime-2026-conference-paper-id-nime2026-18-fe5b10df14/) | **6.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 19 | [会用控制器还不够：为数字音乐熟手补上原型设计的一整轮](/posts/conference-nime-2026-conference-paper-id-nime2026-83-a3d6c0379e/) | [From Controller User to Instrument Designer: Teaching NIME in a Contemporary Music Context\.](/posts/conference-nime-2026-conference-paper-id-nime2026-83-a3d6c0379e/) | **6.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #音频交互 |
| 20 | [从面包板到舞台：用对齐与独立乐器逼出可演奏的交互音乐系统课](/posts/conference-nime-2026-conference-paper-id-nime2026-84-4bc0b5e358/) | [Teaching Interactive Music Systems: a Research‑Oriented, Project‑Based Graduate Course in a Multidisciplinary Master’s Program\.](/posts/conference-nime-2026-conference-paper-id-nime2026-84-4bc0b5e358/) | **6.7/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #音频交互 |
| 21 | [不想画板子也不想调 USB，也能把传感器变成乐器：Seraph 的省力与代价](/posts/conference-nime-2026-conference-paper-id-nime2026-155-d2f33fed0f/) | [Seraph: An Educational Framework for Building Sensor\-Driven Interactive Art and Music Projects\.](/posts/conference-nime-2026-conference-paper-id-nime2026-155-d2f33fed0f/) | **6.6/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 22 | [不用步进音序器：五个旋钮的差分如何长出切分，三个光敏电阻又如何捏住音色](/posts/conference-nime-2026-conference-paper-id-nime2026-160-8b735ea35b/) | [Algorithmic Drum Machine with Light Dependent Timbre Control\.](/posts/conference-nime-2026-conference-paper-id-nime2026-160-8b735ea35b/) | **6.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 23 | [键盘为何难逃钢琴形：NIME 二十五年键盘界面的惯性与具体化](/posts/conference-nime-2026-conference-paper-id-nime2026-17-d800d4e5ab/) | [Cultural Inertia and Technical Concretisation: A Systematic Review of Keyboard Interfaces at NIME\.](/posts/conference-nime-2026-conference-paper-id-nime2026-17-d800d4e5ab/) | **6.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 综述 | #音频交互 |
| 24 | [把黑盒打开演奏：用网页可视化让 MDRNN 从工具变成应答伙伴](/posts/conference-nime-2026-conference-paper-id-nime2026-102-a0049824b8/) | [A Web Interface for Real\-Time Interaction with Machine Learning in Musical Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-102-a0049824b8/) | **6.5/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 25 | [不用调音台，只看参考录音：笔记本如何告诉吉他手该调大还是调小](/posts/conference-nime-2026-conference-paper-id-nime2026-117-e06e640347/) | [Automatic Live Music Soundchecking with Reference Audio on a Laptop\.](/posts/conference-nime-2026-conference-paper-id-nime2026-117-e06e640347/) | **6.5/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 26 | [不用触摸琴键也能弹和弦：iXeRemin 把双手位置变成可见的复调乐器](/posts/conference-nime-2026-conference-paper-id-nime2026-136-561832249a/) | [iXeRemin: Designing a Polyphonic MR Instrument for Artistic Performance and Interaction\.](/posts/conference-nime-2026-conference-paper-id-nime2026-136-561832249a/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 27 | [骑行发声：在城市里移动演奏如何同时触及个人、群体与环境](/posts/conference-nime-2026-conference-paper-id-nime2026-14-d12af382e0/) | [Sonic Interactions as Situated Urban Practice with BIKES\.](/posts/conference-nime-2026-conference-paper-id-nime2026-14-d12af382e0/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.4/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #音频交互 |
| 28 | [不重训模型也能玩两年：用重映射和小数据打开智能乐器设计空间](/posts/conference-nime-2026-conference-paper-id-nime2026-16-a845098027/) | [Opening the Design Space: Two Years of Performance with Intelligent Musical Instruments\.](/posts/conference-nime-2026-conference-paper-id-nime2026-16-a845098027/) | **6.5/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #符号音乐生成 |
| 29 | [在装置内部做研究：光学声片制作中的内在实践](/posts/conference-nime-2026-conference-paper-id-nime2026-19-567528e5f1/) | [Immanent Practice: Accounts of Optical Sound Filmmaking\.](/posts/conference-nime-2026-conference-paper-id-nime2026-19-567528e5f1/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 应用研究 | #音视频生成 |
| 30 | [把轮廓变成频谱：预置合成如何让日常物件决定音色](/posts/conference-nime-2026-conference-paper-id-nime2026-34-3c3da19b0f/) | [The Readymade Synth: Prepared Synthesis with Everyday Objects\.](/posts/conference-nime-2026-conference-paper-id-nime2026-34-3c3da19b0f/) | **6.5/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 31 | [不用钢琴也能调啸叫：拉森站如何把反馈变成可演奏的室内乐声部](/posts/conference-nime-2026-conference-paper-id-nime2026-35-2d7c1991c0/) | [The Larsen Station: A Customizable Module Setup for Integrating Electroacoustic Feedback in Chamber Music\.](/posts/conference-nime-2026-conference-paper-id-nime2026-35-2d7c1991c0/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 32 | [把 IDE 变成乐器：Coypu 管乐谱分发、Phausto 管合成发声](/posts/conference-nime-2026-conference-paper-id-nime2026-42-8cd543aae1/) | [Coypu and Phausto: accessible live sound coding with Pharo \.](/posts/conference-nime-2026-conference-paper-id-nime2026-42-8cd543aae1/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 33 | [用球腔卡住啸叫：反馈陶笛以被动共振换取可演奏音高](/posts/conference-nime-2026-conference-paper-id-nime2026-53-7f3d3a2ff4/) | [Feedback Ocarina \- a DIY entry level instrument for feedback musicianship\.](/posts/conference-nime-2026-conference-paper-id-nime2026-53-7f3d3a2ff4/) | **6.5/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 34 | [亲密与广袤之间：用骨传导耳机与穹顶扬声器写分层现场](/posts/conference-nime-2026-conference-paper-id-nime2026-72-af38fd5f0b/) | [Between Intimacy and Immensity: Composing Multilayered Immersive Live Music for Bone Conduction Headphones and a Speaker\-Dome Array\.](/posts/conference-nime-2026-conference-paper-id-nime2026-72-af38fd5f0b/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #音乐生成 |
| 35 | [抛球晚两秒才响：音乐杂耍如何记谱与仿真](/posts/conference-nime-2026-conference-paper-id-nime2026-76-75883c3c8f/) | [JuggLing\-a\-Ding: Design and Development of a Musical Juggling Toolkit\.](/posts/conference-nime-2026-conference-paper-id-nime2026-76-75883c3c8f/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #符号音乐生成 |
| 36 | [时隔十二年重启图灵测试：规则与神经网络谁更会弹钢琴](/posts/conference-nime-2026-conference-paper-id-nime2026-79-9dd1d1fe13/) | [RenCon 2025: Revival of Expressive Performance Rendering Competition\.](/posts/conference-nime-2026-conference-paper-id-nime2026-79-9dd1d1fe13/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #符号音乐生成 |
| 37 | [把训练装进乐器里：用演奏手势调映射的 NISPS 与双自述研究](/posts/conference-nime-2026-conference-paper-id-nime2026-59-73cbd5ed18/) | [Tuneable Machine Learning in Musical Instruments: A Duoethnography\.](/posts/conference-nime-2026-conference-paper-id-nime2026-59-73cbd5ed18/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #音频交互 |
| 38 | [把力度、角色与延迟一起改写：jam\_bot 如何实现可接话的音乐对话](/posts/conference-nime-2026-conference-paper-id-nime2026-73-2adcb39c35/) | [Enhancing Expressive Musical Conversation in the jam\_bot\.](/posts/conference-nime-2026-conference-paper-id-nime2026-73-2adcb39c35/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #符号音乐生成 |
| 39 | [把传感与表面分开：为照护合奏重建触感与低延迟的模块乐器](/posts/conference-nime-2026-conference-paper-id-nime2026-145-fd5a494b85/) | [Peripersonal Modular Interfaces for Care Ecologies: Decoupling Sensing and Surface in Accessible Digital Musical Instruments\.](/posts/conference-nime-2026-conference-paper-id-nime2026-145-fd5a494b85/) | **6.3/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 应用研究 | #音乐生成 |
| 40 | [可读脚本做中间层：Satie 让空间生成音频可逐行改](/posts/conference-nime-2026-conference-paper-id-nime2026-157-f0ca598a93/) | [Satie: A Creativity Support Tool for Authoring Spatial Generative Audio\.](/posts/conference-nime-2026-conference-paper-id-nime2026-157-f0ca598a93/) | **6.2/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.1/1.5 | 前50% | 系统技术报告 | #音频生成 |
| 41 | [把身体转成轴心：Ehecatl 如何用方位、倾斜与风车气流驱动合成](/posts/conference-nime-2026-conference-paper-id-nime2026-39-a6316286d1/) | [Ehecatl: A Frugal Digital Wind Instrument Inspired by Aztec Cosmogony\.](/posts/conference-nime-2026-conference-paper-id-nime2026-39-a6316286d1/) | **6.2/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.6/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 42 | [舞者身体如何实时转向音乐 Transformer：Con Moto 的可配置代理](/posts/conference-nime-2026-conference-paper-id-nime2026-7-1ccf03530e/) | [Con Moto: Embodied Steering of Music Transformers for Live Dance Improvisation\.](/posts/conference-nime-2026-conference-paper-id-nime2026-7-1ccf03530e/) | **6.2/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #符号音乐生成 |
| 43 | [按键交给机器呼吸留给人：4 支萨克斯重奏的半自动增强](/posts/conference-nime-2026-conference-paper-id-nime2026-104-5bcb2a0484/) | [Robo\-Sax Quartet: A Semi\-Automatic Robotic Saxophone System for Augmented Ensemble Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-104-5bcb2a0484/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 44 | [三人合奏不散架：受限角色与脚下振动如何托住新手协作](/posts/conference-nime-2026-conference-paper-id-nime2026-138-794157e942/) | [Feeling Connected: Designing Instruments and Haptic Feedback for Collaborative Music Exhibits\.](/posts/conference-nime-2026-conference-paper-id-nime2026-138-794157e942/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #音频交互 |
| 45 | [在电路内部替换元件：用可编程阻抗挪用哇音踏板](/posts/conference-nime-2026-conference-paper-id-nime2026-55-76f760c72a/) | [Z\-Wah: Appropriating the Wah via Digital Impedance Synthesis\.](/posts/conference-nime-2026-conference-paper-id-nime2026-55-76f760c72a/) | **6.1/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 46 | [把潜在空间当作演奏面：一个三维实体控制器如何权衡探索与可复现](/posts/conference-nime-2026-conference-paper-id-nime2026-58-2c538dbc1d/) | [Probing Latent Space Interactions with Real\-time Generative Audio Models Through a Physical Controller\.](/posts/conference-nime-2026-conference-paper-id-nime2026-58-2c538dbc1d/) | **6.1/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 47 | [软硬难两全：用可缝合的柔性基板把压电鼓点穿在身上](/posts/conference-nime-2026-conference-paper-id-nime2026-1-6d037a777f/) | [Body, Bend: Resolving the soft\-rigid paradox using 3D printing innovation\.](/posts/conference-nime-2026-conference-paper-id-nime2026-1-6d037a777f/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 应用研究 | #音频事件检测 |
| 48 | [地图越精确，聆听越缺席：空间音频为何重复作曲家—总谱—指挥家模型](/posts/conference-nime-2026-conference-paper-id-nime2026-147-6ea231bb63/) | [The Aural Cartographer's Dilemma\.](/posts/conference-nime-2026-conference-paper-id-nime2026-147-6ea231bb63/) | **6.0/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.3/1.5 | 前50% | 理论研究 | #空间音频渲染 |
| 49 | [搭积木做乐器：高脚手架保底、中观层放手让创意分叉](/posts/conference-nime-2026-conference-paper-id-nime2026-151-3aeea22cf2/) | [Constructing creativity: secondary school pupils designing and building musical instruments with Lego\.](/posts/conference-nime-2026-conference-paper-id-nime2026-151-3aeea22cf2/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #音乐理解 |
| 50 | [不教复制的手册：用有意的省略让乐器知识活下去](/posts/conference-nime-2026-conference-paper-id-nime2026-52-7e867170aa/) | [The Obstruction Manual: Insights on Sharing Instrument Design Knowledge for Active Learning\.](/posts/conference-nime-2026-conference-paper-id-nime2026-52-7e867170aa/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.4/1.5 | 前50% | 方法研究 | #音频交互 |
| 51 | [皮肤即接口：从旋钮到触碰，残障主导如何重写协作乐器的玩法循环](/posts/conference-nime-2026-conference-paper-id-nime2026-78-bed2bbecca/) | [Crip Design for Collaborative Musical Interfaces: Iterative Development of Bot Party, a Touch\-Based Sonic Game\.](/posts/conference-nime-2026-conference-paper-id-nime2026-78-bed2bbecca/) | **6.0/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 52 | [边听边拧合成器：连续动作强化学习如何做实时音色跟随](/posts/conference-nime-2026-conference-paper-id-nime2026-89-0c46c5ef45/) | [Autonomous Listening\-Based Synthesizer Control with Reinforcement Learning for Live Sound Matching\.](/posts/conference-nime-2026-conference-paper-id-nime2026-89-0c46c5ef45/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.3/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 方法研究 | #音频生成 |
| 53 | [现场演奏里情绪从哪来：同时记录演奏者与听众的身体信号和标注](/posts/conference-nime-2026-conference-paper-id-nime2026-118-7e8c52646a/) | [Emotion and Expressivity in Music Performance: A Multimodal Approach\.](/posts/conference-nime-2026-conference-paper-id-nime2026-118-7e8c52646a/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音乐理解 |
| 54 | [想复刻黑胶手感却发现不是黑胶：S4 Mk3 电机控制的逆向与妥协](/posts/conference-nime-2026-conference-paper-id-nime2026-123-08b15dc1d8/) | [Traktor Kontrol S4 Mk3 Is Not a Turntable No Matter How Bad I Want it To Be: But That's OK Because I Accept It For Who It Is\.](/posts/conference-nime-2026-conference-paper-id-nime2026-123-08b15dc1d8/) | **5.9/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 55 | [把弯音从左手搬到脚下：Robo\-Bend 用琴头顶弦实现约 280 音分的物理推弦](/posts/conference-nime-2026-conference-paper-id-nime2026-125-6a94bed6ce/) | [Robo\-Bend: A Human\-in\-the\-Loop Robotic Interface for Guitar String Bending\.](/posts/conference-nime-2026-conference-paper-id-nime2026-125-6a94bed6ce/) | **5.9/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 56 | [在胶合板上听笔尖位置：小数据声源定位为何不用时延估计](/posts/conference-nime-2026-conference-paper-id-nime2026-166-841cb21820/) | [Deep Drawing: Performance Surface Sound Source Localization\.](/posts/conference-nime-2026-conference-paper-id-nime2026-166-841cb21820/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #声源定位 |
| 57 | [中央声库却低交互：Freesound 创意应用为何守着文本搜索](/posts/conference-nime-2026-conference-paper-id-nime2026-37-42c1c5d4e0/) | [Integration of Freesound content in creative applications and sound interfaces: a survey of use cases\.](/posts/conference-nime-2026-conference-paper-id-nime2026-37-42c1c5d4e0/) | **5.9/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 综述 | #音频检索 |
| 58 | [紧耦合传感与驱动：在同一位置、同一模态上同时收发而不互相淹没](/posts/conference-nime-2026-conference-paper-id-nime2026-50-201eae086d/) | [Techniques for Closely\-Coupled Sensing and Actuation in Digital Musical Instruments\.](/posts/conference-nime-2026-conference-paper-id-nime2026-50-201eae086d/) | **5.9/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 综述 | #音频交互 |
| 59 | [同一根弦又当传感器又当执行器：洛伦兹时分复用如何实现同位自持](/posts/conference-nime-2026-conference-paper-id-nime2026-71-cc5c01cfb8/) | [Sustained Interests: Lorentz Time Division Multiplexing \(LTDM\) for Active Collocated String Control\.](/posts/conference-nime-2026-conference-paper-id-nime2026-71-cc5c01cfb8/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 60 | [被用力拉扯才算过关：触角织物乐器十五年的现场筛选史](/posts/conference-nime-2026-conference-paper-id-nime2026-74-1df155a1a6/) | [Playing Rough: Malleable Tentacle Instruments for Participatory Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-74-1df155a1a6/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.2/1.5 | 前50% | 应用研究 | #音频交互 |
| 61 | [在虚拟现实里一起打拍子：乐器与舞台为什么必须一起设计](/posts/conference-nime-2026-conference-paper-id-nime2026-97-85eac76ba6/) | [Co\-Designing Virtual Reality Musical Instruments and Spatial Layouts for Collaborative Music\-Making\.](/posts/conference-nime-2026-conference-paper-id-nime2026-97-85eac76ba6/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.9/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #音视频交互 |
| 62 | [把循环拍子放回圆上：RhythmTable 如何用位置几何代替直线格子](/posts/conference-nime-2026-conference-paper-id-nime2026-103-3201385dcd/) | [RhythmTable: A Tangible Interface for Cyclic Rhythm Sequencing\.](/posts/conference-nime-2026-conference-paper-id-nime2026-103-3201385dcd/) | **5.8/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 0.5/1.5 · 清晰度 0.9/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 63 | [把交互逻辑搬离琴体：nOdes 用服务器集中映射支撑 24 球合奏](/posts/conference-nime-2026-conference-paper-id-nime2026-105-108df5b8e3/) | [nOdes: A Networked Constellation of Handheld Orbs for Community Music\-Making\.](/posts/conference-nime-2026-conference-paper-id-nime2026-105-108df5b8e3/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 64 | [弦去按音、另一只手去塑形：田进勤 XK 乐器的双手带状交互与可复现重建](/posts/conference-nime-2026-conference-paper-id-nime2026-106-a1de784703/) | [Tian Jinqin’s String\-Controlled Instruments: Formalizing and Reimplementing a Ribbon\-Based Interaction Design Pattern\.](/posts/conference-nime-2026-conference-paper-id-nime2026-106-a1de784703/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 65 | [不对齐就硬解码会塌到同一团声音：舞者用身体投票校准的跨模态对齐](/posts/conference-nime-2026-conference-paper-id-nime2026-113-0e04b8eeb7/) | [Human\-in\-the\-Loop: Crossmodal AI Alignment between Movement and Audio Latent Spaces for Expressive Sonification in Dance Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-113-0e04b8eeb7/) | **5.8/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 66 | [谁来定下第一拍：半自动机器人长笛用头部预备动作决定合奏起始](/posts/conference-nime-2026-conference-paper-id-nime2026-127-b84bbe852e/) | [Playing Together with a Semi\-Automated Robotic Flute Using a Gesture Cue Detection System\.](/posts/conference-nime-2026-conference-paper-id-nime2026-127-b84bbe852e/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音视频交互 |
| 67 | [把合成条件当作曲参数：Orbis 用人工细胞 Min 波的可控涨落驱动光声](/posts/conference-nime-2026-conference-paper-id-nime2026-132-6de2b5b40c/) | [Orbis: Composing a Light\-and\-Sound Installation with Min Waves Generated in Artificial Cells\.](/posts/conference-nime-2026-conference-paper-id-nime2026-132-6de2b5b40c/) | **5.8/10** · 创新 1.5/2 · 技术严谨 0.8/1.5 · 实验充分 0.4/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 68 | [墙上的形状即乐器：用投影几何推断站位并门控离散音高的协作装置](/posts/conference-nime-2026-conference-paper-id-nime2026-139-ca7e9f1e8b/) | [A Collaborative Sound Installation Using Projected Geometry and Spatial Interaction\.](/posts/conference-nime-2026-conference-paper-id-nime2026-139-ca7e9f1e8b/) | **5.8/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音视频交互 |
| 69 | [跟住键盘手而不是固定磁带：Accomplice 如何把跟谱、指挥与播放拆开做现场电子伴奏](/posts/conference-nime-2026-conference-paper-id-nime2026-140-5687554ceb/) | [Accomplice: Computer Accompaniment for Keyboard Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-140-5687554ceb/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 70 | [把机器学习乐器当作会遗忘的档案来演奏](/posts/conference-nime-2026-conference-paper-id-nime2026-164-5512c592b7/) | [Re\-Animating the Archive: Performing a Machine Learning System as Living Memory\.](/posts/conference-nime-2026-conference-paper-id-nime2026-164-5512c592b7/) | **5.8/10** · 创新 1.5/2 · 技术严谨 0.9/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #文本到语音 |
| 71 | [电子萨克布特不是一个人发明的：从脉冲、分频到众人手的电路史](/posts/conference-nime-2026-conference-paper-id-nime2026-23-cf5df267fb/) | [Communal invention in Prehistoric NIMEs: a case study of Hugh Le Caine’s Electronic Sackbut\.](/posts/conference-nime-2026-conference-paper-id-nime2026-23-cf5df267fb/) | **5.8/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 应用研究 | #音乐理解 |
| 72 | [把天花板变成乐器：64 个敲击点如何与网络和校准一起工作](/posts/conference-nime-2026-conference-paper-id-nime2026-28-a72f788001/) | [Modernizing the Machine Lab with Mechatronic Immersive Design and Artificial Intelligence\.](/posts/conference-nime-2026-conference-paper-id-nime2026-28-a72f788001/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #空间音频渲染 |
| 73 | [扎根又漂移：用实时检出的潜在音阶重调混合演出生态](/posts/conference-nime-2026-conference-paper-id-nime2026-48-3de8b24cdb/) | [Grounded Yet Shifting: Shaping Hybrid Performance Ecologies with Dynamic Tonality \.](/posts/conference-nime-2026-conference-paper-id-nime2026-48-3de8b24cdb/) | **5.8/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #音乐生成 |
| 74 | [把预训练音频网络当电路板：实时改权重参数的网络弯曲](/posts/conference-nime-2026-conference-paper-id-nime2026-49-e04ee8d280/) | [Network Bending as Circuit\-Bending Inspired Live Neural Synthesis Hacking\.](/posts/conference-nime-2026-conference-paper-id-nime2026-49-e04ee8d280/) | **5.8/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频生成 |
| 75 | [谁在即兴？当小提琴与单簧管各带一个 AI 同台](/posts/conference-nime-2026-conference-paper-id-nime2026-66-8549945dc2/) | [Distributed Agency in Collaborative Improvisation with Intelligent Instruments: A Phenomenological Inquiry\.](/posts/conference-nime-2026-conference-paper-id-nime2026-66-8549945dc2/) | **5.8/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 0.7/1.5 | 前50% | 应用研究 | #音乐生成 |
| 76 | [用芭蕾姿态导航古筝乐句：分类定锚、回归补间与颗粒重塑的跨文化身体乐器](/posts/conference-nime-2026-conference-paper-id-nime2026-111-50e260ec1b/) | [Navigating a Guzheng Phrase Corpus Through Ballet\-Driven Granular Synthesis\.](/posts/conference-nime-2026-conference-paper-id-nime2026-111-50e260ec1b/) | **5.7/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音视频交互 |
| 77 | [不靠听觉合奏：把振动、触摸和视觉当作音乐材料的即兴装置](/posts/conference-nime-2026-conference-paper-id-nime2026-13-599713a7d4/) | [Audionce: An Audiovisual Improvisation Environment Co\-Designed by Deaf and Hearing Designers\.](/posts/conference-nime-2026-conference-paper-id-nime2026-13-599713a7d4/) | **5.7/10** · 创新 1.3/2 · 技术严谨 0.7/1.5 · 实验充分 0.2/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.9/1.5 | 前50% | 系统技术报告 | #音视频交互 |
| 78 | [当按压力不再等于出声音：用感觉变弱来检验数字乐器的控制感](/posts/conference-nime-2026-conference-paper-id-nime2026-130-15a57c919e/) | [Towards Sensory Attenuation as a Measure of Agency Provided by Digital Musical Instruments\.](/posts/conference-nime-2026-conference-paper-id-nime2026-130-15a57c919e/) | **5.7/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 应用研究 | #音频交互 |
| 79 | [动作生音乐为何先学压缩再学对齐：个性化舞蹈乐器的取舍](/posts/conference-nime-2026-conference-paper-id-nime2026-135-b3c28e2f68/) | [From Improvised Movement to Musical Improvisation \- Using Machine\-Learning to Create Personalized Instruments for Dancers\.](/posts/conference-nime-2026-conference-paper-id-nime2026-135-b3c28e2f68/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 80 | [把错音弹对：用不看键盘的敲击把大模型当成伴奏](/posts/conference-nime-2026-conference-paper-id-nime2026-142-b8dccee957/) | [The Perfect Wrong Note: Vyping and the Keyboard as Musical Interface for Human\-LLM Interaction\.](/posts/conference-nime-2026-conference-paper-id-nime2026-142-b8dccee957/) | **5.7/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 前50% | 应用研究 | #音频交互 |
| 81 | [通用手柄加本地打印件：在预算和人力都受限时如何复制无障碍乐器](/posts/conference-nime-2026-conference-paper-id-nime2026-148-d8bc7fb3d7/) | [Scalable Accessible Music\-Making with Commodity Controllers and Modular Augmentations in Resource\-Constrained Settings\.](/posts/conference-nime-2026-conference-paper-id-nime2026-148-d8bc7fb3d7/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #音乐生成 |
| 82 | [先猜手势再发声：用投机执行把扩散音频生成挤进指挥手势的微观时间](/posts/conference-nime-2026-conference-paper-id-nime2026-153-e1b719ef9e/) | [Shifting Time Scales: Supporting Live Gesture\-Controlled Generative Music with Speculative Execution\.](/posts/conference-nime-2026-conference-paper-id-nime2026-153-e1b719ef9e/) | **5.7/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 83 | [自带弓直接拉：离弓传感实时反推弓压与弓速去驱动摩擦模型](/posts/conference-nime-2026-conference-paper-id-nime2026-99-eabba1794a/) | [Bring Your Own Bow: Real\-Time Bowing Parameter Estimation from String Sensor Data\.](/posts/conference-nime-2026-conference-paper-id-nime2026-99-eabba1794a/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 84 | [不录音的磁带：用纸、磁性墨与播放机把图形变成声音](/posts/conference-nime-2026-conference-paper-id-nime2026-11-3f64a9eddf/) | [Paper Tape — A Cassette Tape without Prior Acoustic Information\.](/posts/conference-nime-2026-conference-paper-id-nime2026-11-3f64a9eddf/) | **5.6/10** · 创新 1.3/2 · 技术严谨 0.8/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #音频生成 |
| 85 | [不用买一柜子硬件：用一对一镜像把跳线手感搬回屏幕里](/posts/conference-nime-2026-conference-paper-id-nime2026-119-767572775e/) | [Umbilical: A Hybrid System for Creating Custom Modular MIDI Controllers \- A Eurorack/VCV Rack Case Study\.](/posts/conference-nime-2026-conference-paper-id-nime2026-119-767572775e/) | **5.6/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 86 | [把节奏写成代码再走成地图：BeatMohan 交响曲如何支架化模式组织](/posts/conference-nime-2026-conference-paper-id-nime2026-149-da88a3ee5b/) | [BeatMohan’s Symphony: Designing a Game Environment to Scaffold Pattern\-Based Musical Organization\.](/posts/conference-nime-2026-conference-paper-id-nime2026-149-da88a3ee5b/) | **5.6/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #符号音乐生成 |
| 87 | [软件即乐器：COMDASUAR 如何把逆行写成可执行的硬件动作](/posts/conference-nime-2026-conference-paper-id-nime2026-15-1b52d83caf/) | [Software as Instrument: COMDASUAR and the Co\-Design of Code and Hardware\.](/posts/conference-nime-2026-conference-paper-id-nime2026-15-1b52d83caf/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #符号音乐生成 |
| 88 | [把效果器参数铺成地图：FXplorer 让找声音先漫游再细调](/posts/conference-nime-2026-conference-paper-id-nime2026-167-3f1d05f68a/) | [FXplorer: A Map\-Based Interface for Exploratory Audio Effects Design\.](/posts/conference-nime-2026-conference-paper-id-nime2026-167-3f1d05f68a/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 89 | [冷启动难不在模型大小：用结构化上下文把语言描述变成可运行的音乐人工生命](/posts/conference-nime-2026-conference-paper-id-nime2026-170-199bf3b839/) | [Accessible Musical ALife Through LLM Co\-Creation\.](/posts/conference-nime-2026-conference-paper-id-nime2026-170-199bf3b839/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 90 | [无障碍不是修好乐器：从一首诗长出的合奏文化](/posts/conference-nime-2026-conference-paper-id-nime2026-24-7d52dd2505/) | [In The Round: Exploring the Cultural Model of Disability in Accessible Music Improvisation\.](/posts/conference-nime-2026-conference-paper-id-nime2026-24-7d52dd2505/) | **5.6/10** · 创新 1.3/2 · 技术严谨 0.9/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #音乐生成 |
| 91 | [扇子为中心、社群为尺度：中越扇舞互动乐器的社区知情设计](/posts/conference-nime-2026-conference-paper-id-nime2026-40-cd20e5ea89/) | [Interactive Fan Dance: Towards a Community\-Informed, Culturally Situated Interactive Dance Instrument \.](/posts/conference-nime-2026-conference-paper-id-nime2026-40-cd20e5ea89/) | **5.6/10** · 创新 1.3/2 · 技术严谨 0.9/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 应用研究 | #音频交互 |
| 92 | [当可穿戴乐器走进弗雷沃：Giromin 驻留中两种乐器观的相遇与摩擦](/posts/conference-nime-2026-conference-paper-id-nime2026-56-761509fc1c/) | [Giromin Residency Report: Creative Exploration by Musicians and Dancers from Frevo and Afro\-Brazilian traditions\.](/posts/conference-nime-2026-conference-paper-id-nime2026-56-761509fc1c/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 0.7/1.5 | 前50% | 应用研究 | #音乐生成 |
| 93 | [不用对钟也能合奏：用空间排布与关系感知组织声音群体](/posts/conference-nime-2026-conference-paper-id-nime2026-122-c4c6ed18a0/) | [Sound Swarm: A Synthetic Ecology of Embodied Mesh Synthesizers for Emergent Soundscapes\.](/posts/conference-nime-2026-conference-paper-id-nime2026-122-c4c6ed18a0/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 94 | [不重放历史声音：用水扰动驱动神经合成的克制式记忆装置](/posts/conference-nime-2026-conference-paper-id-nime2026-126-dbc567c78e/) | [Drifting in Currents of Currents: A Hydro\-Acoustic Interface for Gesture\-Driven Neural Sound Synthesis and Entropic Memory\.](/posts/conference-nime-2026-conference-paper-id-nime2026-126-dbc567c78e/) | **5.5/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 0.4/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频生成 |
| 95 | [独自一人也不独奏：用相似手势召回过去合奏的木板乐器](/posts/conference-nime-2026-conference-paper-id-nime2026-131-e89c416123/) | [Lagu Hantu: Creating computationally\-mediated ensembles across time\.](/posts/conference-nime-2026-conference-paper-id-nime2026-131-e89c416123/) | **5.5/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 96 | [不出错比出彩更难：CamJam 用四个摄像头乐器拼一个协同乐队](/posts/conference-nime-2026-conference-paper-id-nime2026-150-2b82b4f4bb/) | [CamJam: A Modular Collaborative and Accessible Digital Musical Interface\.](/posts/conference-nime-2026-conference-paper-id-nime2026-150-2b82b4f4bb/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 97 | [一部手机如何托住一条嗓音：VoixTenue 的手势音高与力度控制](/posts/conference-nime-2026-conference-paper-id-nime2026-165-fd38df9877/) | [VoixTenue: Exploring Real\-Time Gestural Control of Vocal Synthesis on a Mobile Phone\.](/posts/conference-nime-2026-conference-paper-id-nime2026-165-fd38df9877/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #语音合成 |
| 98 | [NIME 谈触觉时其实在谈实现：119 篇文献的语义编码与三主题证据](/posts/conference-nime-2026-conference-paper-id-nime2026-5-dce23bca96/) | [What NIME talks about when it talks about touch\.](/posts/conference-nime-2026-conference-paper-id-nime2026-5-dce23bca96/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.6/1.5 | 前50% | 综述 | #音乐理解 |
| 99 | [看不见的空气如何被听见：用身体移动演奏污染数据的集体聆听装置](/posts/conference-nime-2026-conference-paper-id-nime2026-70-edba90aeaf/) | [A Community Moving with Air in the immersive Sound Installation HUELLAS DE AIRE \(Traces of Air\)\.](/posts/conference-nime-2026-conference-paper-id-nime2026-70-edba90aeaf/) | **5.5/10** · 创新 1.3/2 · 技术严谨 0.9/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #音频交互 |
| 100 | [手势进机器之后还剩什么：拉美赛博格主义的三次智利实践](/posts/conference-nime-2026-conference-paper-id-nime2026-75-0b2411d2b7/) | [Re‑Embodying, Situating, and Resisting: Creative Strategies for a Latin American Cyborgism\.](/posts/conference-nime-2026-conference-paper-id-nime2026-75-0b2411d2b7/) | **5.5/10** · 创新 1.3/2 · 技术严谨 0.7/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 前50% | 理论研究 | #音频理解 |
| 101 | [不用电也能演奏：气压回路如何同时成为乐器、乐谱与演奏者](/posts/conference-nime-2026-conference-paper-id-nime2026-80-3d42a7289f/) | [The Aerophone Kit: A Toolkit for Pneumatic Musical Instrument Design\.](/posts/conference-nime-2026-conference-paper-id-nime2026-80-3d42a7289f/) | **5.5/10** · 创新 1.3/2 · 技术严谨 0.8/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 102 | [可预测就电一下：用现场学习的惩罚迫使即兴演奏者不断换招](/posts/conference-nime-2026-conference-paper-id-nime2026-110-cf5602fcf2/) | [A Live\-learning Punitive Interface for Improvisational Performance Dynamics\.](/posts/conference-nime-2026-conference-paper-id-nime2026-110-cf5602fcf2/) | **5.4/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 103 | [黑暗不是故障：在夜林里把光同时当作路标、标记和乐器](/posts/conference-nime-2026-conference-paper-id-nime2026-112-befb769348/) | [nocturneAR: An Outdoor AR\-Based Musical Interface in Dark Transitional Landscapes\.](/posts/conference-nime-2026-conference-paper-id-nime2026-112-befb769348/) | **5.4/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 0.4/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 后50% | 应用研究 | #音乐生成 |
| 104 | [喜欢的不一定最有效：标签与情绪类型如何塑造 AI 音乐感知](/posts/conference-nime-2026-conference-paper-id-nime2026-115-8fd8c6fba0/) | [Understanding Listener Perceptions of AI and Human\-Composed Music in Emotional Applications\.](/posts/conference-nime-2026-conference-paper-id-nime2026-115-8fd8c6fba0/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #音乐理解 |
| 105 | [没有演员时，空间如何被声音演奏：五个区域的叙事乐器与教学复盘](/posts/conference-nime-2026-conference-paper-id-nime2026-162-ad8d0c8b93/) | [An Exploratory Educational Drama: Scenographing with Sound in an Immersive Narrative Space\.](/posts/conference-nime-2026-conference-paper-id-nime2026-162-ad8d0c8b93/) | **5.4/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 106 | [把大模型放进共享文本缓冲：可见、可冲突的多智能体现场编程](/posts/conference-nime-2026-conference-paper-id-nime2026-171-2ee6d7ea63/) | [Multi\-Agent Swarm Syntax: An Approach to Live Coding with AI \.](/posts/conference-nime-2026-conference-paper-id-nime2026-171-2ee6d7ea63/) | **5.4/10** · 创新 1.3/2 · 技术严谨 0.9/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音乐生成 |
| 107 | [以笔速问音：书法动作如何外部控制符号音乐生成的时机与织体](/posts/conference-nime-2026-conference-paper-id-nime2026-32-025553056e/) | [Calliphony: A Calligraphy\-Driven Interface for Real\-Time Generative Music Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-32-025553056e/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #符号音乐生成 |
| 108 | [滑板作键档案定音：在内罗毕用废料重建可合奏的恩巴拉](/posts/conference-nime-2026-conference-paper-id-nime2026-4-dc3c3f1be0/) | [The Skateboard Embaire: Reanimating tradition through musical instrument design\.](/posts/conference-nime-2026-conference-paper-id-nime2026-4-dc3c3f1be0/) | **5.4/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 109 | [把通灵板改成合奏乐器：双阶段贡献与拼贴合成如何共建声音](/posts/conference-nime-2026-conference-paper-id-nime2026-6-77742edfb1/) | [Host Your Ghosts: Recontextualizing the Ouija Board as a Communal NIME for Music Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-6-77742edfb1/) | **5.4/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 110 | [把 32 通道空间音频搬进地下商场：共享基建如何撑起五组公共互动作品](/posts/conference-nime-2026-conference-paper-id-nime2026-68-39bd1ad996/) | [Immersive Open Studio: Shared Space, Shared Sound\.](/posts/conference-nime-2026-conference-paper-id-nime2026-68-39bd1ad996/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音视频交互 |
| 111 | [拿掉按钮和屏幕之后：用动作模糊换取可探索性的手持环境声音盒](/posts/conference-nime-2026-conference-paper-id-nime2026-87-011311be35/) | [SonoCube: A Handheld Motion\-Responsive Sound Object\.](/posts/conference-nime-2026-conference-paper-id-nime2026-87-011311be35/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音乐生成 |
| 112 | [让数拍子的手直接发出鼓声：Layika 手套如何把传统计数变成塔布拉伴奏](/posts/conference-nime-2026-conference-paper-id-nime2026-101-957833bf5b/) | [Layika: A Wearable Device Mapping Traditional Hand Gestures to Tabla Sound \.](/posts/conference-nime-2026-conference-paper-id-nime2026-101-957833bf5b/) | **5.3/10** · 创新 1.3/2 · 技术严谨 0.9/1.5 · 实验充分 0.4/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音乐生成 |
| 113 | [让次声自己演奏：CLSTR1 如何把不可控的金属失真养在膜上](/posts/conference-nime-2026-conference-paper-id-nime2026-114-f0a5cda680/) | [Recipe for a ghost catcher: an infrasound\-powered hybrid instrument\-sonic installation\.](/posts/conference-nime-2026-conference-paper-id-nime2026-114-f0a5cda680/) | **5.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 应用研究 | #音频交互 |
| 114 | [把一间 closet 养成三十六年的乐器原型车间：Max Lab 的人、空间与维护](/posts/conference-nime-2026-conference-paper-id-nime2026-124-a0e01f262e/) | [The Story of The Max Lab: A Thirty\-Six\-Year Collaborative Journey\.](/posts/conference-nime-2026-conference-paper-id-nime2026-124-a0e01f262e/) | **5.3/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 应用研究 | #音频交互 |
| 115 | [把门限变成声音：施密特触发器在手工电子乐器中的另类历史](/posts/conference-nime-2026-conference-paper-id-nime2026-152-fbb0ec23f6/) | [Histories of the Schmitt Trigger in Handmade Electronic Instruments for Making Sound in the Arts: A Literature Review \.](/posts/conference-nime-2026-conference-paper-id-nime2026-152-fbb0ec23f6/) | **5.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 综述 | #音频生成 |
| 116 | [把抖动的脑电驯成可演奏的四部和声：采样保持如何让大脑成为乐器](/posts/conference-nime-2026-conference-paper-id-nime2026-169-3b286c310c/) | [Csound’s Brain: A Real\-Time EEG to Harmony, Melody, and Music System for Interactive Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-169-3b286c310c/) | **5.3/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.3/1.5 · 清晰度 0.6/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音乐生成 |
| 117 | [看不见的用力如何变成声音：KinoGroove 把肌肉与位移一起作曲](/posts/conference-nime-2026-conference-paper-id-nime2026-20-d33f672e47/) | [KinoGroove: Composing with Muscle and Motion in Extended Reality\.](/posts/conference-nime-2026-conference-paper-id-nime2026-20-d33f672e47/) | **5.3/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.5/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音乐生成 |
| 118 | [合并交叉才能发声：用两个三端口结点把一个结交叉改写为可调音色的波导环](/posts/conference-nime-2026-conference-paper-id-nime2026-22-1c15b39c2d/) | [Knotty Oscillator: Breaking knot topology for a new physically\-inspired sound generator\.](/posts/conference-nime-2026-conference-paper-id-nime2026-22-1c15b39c2d/) | **5.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 后50% | 应用研究 | #音频生成 |
| 119 | [既在远方又在此处：把延迟当约束的共享控制器工具包](/posts/conference-nime-2026-conference-paper-id-nime2026-3-39578bcf23/) | [Anywhere and here: zcreative a toolkit for distributed control\.](/posts/conference-nime-2026-conference-paper-id-nime2026-3-39578bcf23/) | **5.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 120 | [延迟不是唯一敌人：九位实践者如何把网络音乐做成文化基础设施](/posts/conference-nime-2026-conference-paper-id-nime2026-41-96b5ae86fd/) | [Interviews with Practitioners Shaping Internet\-Based Collaborative Music\-Making\.](/posts/conference-nime-2026-conference-paper-id-nime2026-41-96b5ae86fd/) | **5.3/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 应用研究 | #音频交互 |
| 121 | [把不稳定反馈握在手里：Manubrio 如何用持续身体调节换取乐器透明性](/posts/conference-nime-2026-conference-paper-id-nime2026-43-32027c62d9/) | [Manubrio: Investigating Musical Instrument Embodiment Through a Feedback\-Based New Interface for Musical Expression\.](/posts/conference-nime-2026-conference-paper-id-nime2026-43-32027c62d9/) | **5.3/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #音乐生成 |
| 122 | [摩擦发声不动，身体转动来调音：Hypercuíca 如何把桑巴鼓变成可动的效果器](/posts/conference-nime-2026-conference-paper-id-nime2026-81-3b126b361e/) | [Hypercuica: Augmenting and Performing with an Afro\-Brazilian Friction Drum\.](/posts/conference-nime-2026-conference-paper-id-nime2026-81-3b126b361e/) | **5.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 123 | [先声还是先画：扩展现实视听乐器如何被设计出来](/posts/conference-nime-2026-conference-paper-id-nime2026-93-ae94ee2c30/) | [Extended Reality Audio\-Visual Instruments: Design Framework and Case Study\.](/posts/conference-nime-2026-conference-paper-id-nime2026-93-ae94ee2c30/) | **5.3/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 方法研究 | #音视频生成 |
| 124 | [把超声切面当乐谱：可触摸的明胶幻影如何决定声音](/posts/conference-nime-2026-conference-paper-id-nime2026-109-c3dee7be2c/) | [Ultrasound Probe as Tool for Tangible Sound Performance Using Physically Sculpted Phantoms\.](/posts/conference-nime-2026-conference-paper-id-nime2026-109-c3dee7be2c/) | **5.2/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 应用研究 | #音频生成 |
| 125 | [留住手感再连电脑：MidiMbira 如何把姆比拉调音逻辑搬进 MIDI](/posts/conference-nime-2026-conference-paper-id-nime2026-12-2c79de6db2/) | [The DIY MidiMbira: Bridging Traditional Playability and MIDI Technology forPedagogy, Innovation, and Performative Practice\.](/posts/conference-nime-2026-conference-paper-id-nime2026-12-2c79de6db2/) | **5.2/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 0.4/1.5 · 清晰度 0.6/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 126 | [用可变混响腔做反馈乐器：在不可预测中保留可学控制](/posts/conference-nime-2026-conference-paper-id-nime2026-129-b4e5f5cba5/) | [Rumbler: A Reverb\-Based Feedback Instrument\.](/posts/conference-nime-2026-conference-paper-id-nime2026-129-b4e5f5cba5/) | **5.2/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 127 | [不用直接拖舌头位置：用弹簧力产生平滑的双元音舌轨迹](/posts/conference-nime-2026-conference-paper-id-nime2026-156-6e47670c58/) | [Beyond Direct Geometry: Spring\-Mass Control of Tongue Articulation for Vocal Synthesis\.](/posts/conference-nime-2026-conference-paper-id-nime2026-156-6e47670c58/) | **5.2/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #语音合成 |
| 128 | [把房间本身当乐器：用夸张混响让演出地点被听见](/posts/conference-nime-2026-conference-paper-id-nime2026-36-d453ccd215/) | [Performing Performance Spaces: Amplifying Context in Live Music\.](/posts/conference-nime-2026-conference-paper-id-nime2026-36-d453ccd215/) | **5.2/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.6/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 应用研究 | #空间音频渲染 |
| 129 | [成就越高越心虚：用游戏规则把冒充者体验变成可演奏的失败](/posts/conference-nime-2026-conference-paper-id-nime2026-82-0f8a527841/) | [Where Do I Go?: A Game\-Based Exploration of Failure and Playfulness as Musical Expression\.](/posts/conference-nime-2026-conference-paper-id-nime2026-82-0f8a527841/) | **5.2/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.9/1.5 | 后50% | 应用研究 | #音乐生成 |
| 130 | [不以控制为目标：班多钮琴边缘声响如何成为可演奏的共治线索](/posts/conference-nime-2026-conference-paper-id-nime2026-116-fe4555a7cb/) | [From Control to Co\-Agency: Reframing Instrumentality through Sonic Traces in Augmented Musical Practice\.](/posts/conference-nime-2026-conference-paper-id-nime2026-116-fe4555a7cb/) | **5.1/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 0.5/1.5 · 清晰度 0.6/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.7/1.5 | 后50% | 应用研究 | #音频交互 |
| 131 | [把舒服吹奏对准同一中点：围绕长时舒适的呼吸归一化](/posts/conference-nime-2026-conference-paper-id-nime2026-143-f152eefc91/) | [Accessible Wind Instruments: Normalizing Breath Control Around Comfort\.](/posts/conference-nime-2026-conference-paper-id-nime2026-143-f152eefc91/) | **5.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 应用研究 | #音频交互 |
| 132 | [把效果器从脚下搬到桌上：无输入踏板网络何时从工具变成乐器](/posts/conference-nime-2026-conference-paper-id-nime2026-144-f6939d5e94/) | [The no\-input pedalboard: practice, theory and reflection on the development of a new network\-instrument\.](/posts/conference-nime-2026-conference-paper-id-nime2026-144-f6939d5e94/) | **5.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 应用研究 | #音乐生成 |
| 133 | [演出中途改映射：当跳舞的人不管声音、调声音的人不跳舞](/posts/conference-nime-2026-conference-paper-id-nime2026-146-3e7790a41f/) | [Role\-Separated Live Movement Sonification: Toolkits as Mediators of Distributed Agency in Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-146-3e7790a41f/) | **5.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 应用研究 | #音频交互 |
| 134 | [看不见的呼吸如何被看见：呼吸镜把钢琴演奏的身体感受变成可回看的时间线](/posts/conference-nime-2026-conference-paper-id-nime2026-8-32671161a6/) | [Exploring Breathing\-Music Coupling: Using the Breathing Mirror for Somatic Reflection in Piano Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-8-32671161a6/) | **5.1/10** · 创新 1.1/2 · 技术严谨 1.1/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 后50% | 系统技术报告 | #音乐理解 |
| 135 | [以相位为公共时钟：让声音、图形与颜色共用同一时间基准的音频激光合成](/posts/conference-nime-2026-conference-paper-id-nime2026-121-a824f75e00/) | [A Phase\-Coherent Paradigm for Audio\-Laser Synthesis\.](/posts/conference-nime-2026-conference-paper-id-nime2026-121-a824f75e00/) | **5.0/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #音视频生成 |
| 136 | [不把手势抽象成参数：用鱼线和织物把微分音竖琴连进建筑空间](/posts/conference-nime-2026-conference-paper-id-nime2026-158-0fc3046a85/) | [Extending Instrumentality Through Mechanical Augmentation and Sound Synthesis in a Microtonal Harp\.](/posts/conference-nime-2026-conference-paper-id-nime2026-158-0fc3046a85/) | **5.0/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音视频交互 |
| 137 | [裸板即皮肤：用回写式破坏把循环做成无常的即兴修行](/posts/conference-nime-2026-conference-paper-id-nime2026-168-0e7d8203f9/) | [Zen\-PCB: Material Honesty and Structural Metaphor in a Naked PCB Granular Looper Instrument\.](/posts/conference-nime-2026-conference-paper-id-nime2026-168-0e7d8203f9/) | **5.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 138 | [不用声带唱歌：用声道共鸣从反馈里选出微分音的 Ephemerides](/posts/conference-nime-2026-conference-paper-id-nime2026-29-545e8c6d89/) | [Ephemerides: A Microtonal Feedback Instrument Based On Transgender Voice Training Technique\.](/posts/conference-nime-2026-conference-paper-id-nime2026-29-545e8c6d89/) | **5.0/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音乐生成 |
| 139 | [把削铅笔插进音箱：用不协调让日常动作变成演奏](/posts/conference-nime-2026-conference-paper-id-nime2026-51-3dff6c38b3/) | [Designing Strategic Incongruity: An Audio Device for Sharpening Pencils\.](/posts/conference-nime-2026-conference-paper-id-nime2026-51-3dff6c38b3/) | **5.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 应用研究 | #音频交互 |
| 140 | [不追紧同步的混音台：Mezcal 用浏览器 MCU 把远距离合奏做成电台](/posts/conference-nime-2026-conference-paper-id-nime2026-62-703f71132c/) | [Mezcal: A Collaborative Transmission Art Instrument\.](/posts/conference-nime-2026-conference-paper-id-nime2026-62-703f71132c/) | **5.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 141 | [从触发器到同台者：MAD 单簧管四代迭代中的算法能动性是如何长出来的](/posts/conference-nime-2026-conference-paper-id-nime2026-86-5120d22089/) | [From Passive Agent to Musical Partner: Insights from the MAD Clarinet Project as a Case Study\.](/posts/conference-nime-2026-conference-paper-id-nime2026-86-5120d22089/) | **5.0/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 应用研究 | #音频交互 |
| 142 | [不用存乐谱，只问时间：Uzulangs 把音乐模式写成时间的纯函数](/posts/conference-nime-2026-conference-paper-id-nime2026-9-d10445b1fb/) | [Uzulangs: a Community of Musical Pattern Languages\.](/posts/conference-nime-2026-conference-paper-id-nime2026-9-d10445b1fb/) | **5.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #符号音乐生成 |
| 143 | [在 24 平均律里学恰哈尕：PerFormer 如何把微分音、节拍位置和调式库存一起建模](/posts/conference-nime-2026-conference-paper-id-nime2026-30-ae77fee1df/) | [PerFormer: An AI\-Driven Approach to Melody Generation in Microtonal Persian Music\.](/posts/conference-nime-2026-conference-paper-id-nime2026-30-ae77fee1df/) | **4.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.6/1.5 | 后50% | 方法研究 | #符号音乐生成 |
| 144 | [看不见声像旋钮时，用腰上的振动把环绕声位置找回来](/posts/conference-nime-2026-conference-paper-id-nime2026-61-1597134cd5/) | [Designing a Spatial Vibrotactile Interface for Accessible Spatial Audio Mixing by Blind and Visually Impaired Music Producers\.\.](/posts/conference-nime-2026-conference-paper-id-nime2026-61-1597134cd5/) | **4.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 应用研究 | #空间音频渲染 |
| 145 | [不追求弹准的乐器：当身体、织物与声音互相谈判控制权](/posts/conference-nime-2026-conference-paper-id-nime2026-95-f6e26ac7ee/) | [Negotiating Control and Agency: Somaesthetics and Feminist Perspectives on a Wearable E\-Textile Instrument\.](/posts/conference-nime-2026-conference-paper-id-nime2026-95-f6e26ac7ee/) | **4.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #音频交互 |
| 146 | [不推断情绪，只演奏身体：生物反馈套件如何把映射当作作曲](/posts/conference-nime-2026-conference-paper-id-nime2026-100-6793ef7158/) | [Biofeedback Suite as an Instrument: Emotion Mappings for Musical Practice\.](/posts/conference-nime-2026-conference-paper-id-nime2026-100-6793ef7158/) | **4.8/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #音乐生成 |
| 147 | [把组织当作乐谱：二十年社区工作室如何作曲基础设施](/posts/conference-nime-2026-conference-paper-id-nime2026-137-82dd1caa3c/) | [The Community studio as Score: Composing experimental music infrastructures\.](/posts/conference-nime-2026-conference-paper-id-nime2026-137-82dd1caa3c/) | **4.8/10** · 创新 1.3/2 · 技术严谨 0.7/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.7/1.5 | 后50% | 应用研究 | #空间音频渲染 |
| 148 | [把音色拆成泛音再拼回去：用四件中国乐器做可玩的视听合成器](/posts/conference-nime-2026-conference-paper-id-nime2026-45-9bbb285c15/) | [Cultural Timbre as Unvoiced Knowing: An Audiovisual Spectral Synthesizer That Transforms Chinese Musical Instruments\.](/posts/conference-nime-2026-conference-paper-id-nime2026-45-9bbb285c15/) | **4.8/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音视频生成 |
| 149 | [从外接电脑到装进鼓里：混合鼓如何把合成声再送回木腔](/posts/conference-nime-2026-conference-paper-id-nime2026-46-262309c8e4/) | [Hybrid Drum: Iterative Development Toward Standalone Operation and Physical Feedback\.](/posts/conference-nime-2026-conference-paper-id-nime2026-46-262309c8e4/) | **4.8/10** · 创新 1.1/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.9/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 150 | [把泛音列织进墙面：用走位而非旋钮演奏固定磁场](/posts/conference-nime-2026-conference-paper-id-nime2026-60-3175ad5347/) | [Magnetic Memory Rushnyk\.](/posts/conference-nime-2026-conference-paper-id-nime2026-60-3175ad5347/) | **4.8/10** · 创新 1.3/2 · 技术严谨 0.8/1.5 · 实验充分 0.2/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 151 | [把空间接进电路：可穿戴激光反馈乐器 FO2 如何让身体动作变成声音](/posts/conference-nime-2026-conference-paper-id-nime2026-63-1eeb1bb7f2/) | [FO2 \- Building A Wearable Laser\-Feedback Instrument: Performing body\-space\-technology entanglements\.](/posts/conference-nime-2026-conference-paper-id-nime2026-63-1eeb1bb7f2/) | **4.8/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 152 | [不展示乐器而是与乐器共处：Solstice 如何让空间与声学成为演奏者](/posts/conference-nime-2026-conference-paper-id-nime2026-96-946c00a580/) | [Solstice: A new work centred on music, bridging disciplines and creative freedom with instruments\.](/posts/conference-nime-2026-conference-paper-id-nime2026-96-946c00a580/) | **4.8/10** · 创新 1.3/2 · 技术严谨 0.9/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.7/1.5 | 后50% | 应用研究 | #音频交互 |
| 153 | [把想象的手臂运动听见：用解码速度驱动颗粒合成的声音手势](/posts/conference-nime-2026-conference-paper-id-nime2026-98-88844fe2dd/) | [Imagined Movement as Sonic Gesture: Auditory Expression from a Deep Learning\-Based Motion Decoding BCI\.](/posts/conference-nime-2026-conference-paper-id-nime2026-98-88844fe2dd/) | **4.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 154 | [为全身舞蹈保留发声逻辑：1978 年 Terpsitone 的交互式数字孪生](/posts/conference-nime-2026-conference-paper-id-nime2026-21-68b4f01ea5/) | [A Digital Twin for Theremin’s Terpsitone from 1970s\.](/posts/conference-nime-2026-conference-paper-id-nime2026-21-68b4f01ea5/) | **4.5/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.2/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.7/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 155 | [谁在演奏：当姿态追踪、映射网络与神经音频合成共同分配控制权](/posts/conference-nime-2026-conference-paper-id-nime2026-64-5b8ce0a513/) | [Performing with the inclusive machine: An interdisciplinary roadmap for the design of AI collaborative musical instruments\.](/posts/conference-nime-2026-conference-paper-id-nime2026-64-5b8ce0a513/) | **4.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.6/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.6/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 156 | [看得清反而重建差：Murzinograph 用三维瓶颈把声音画成可走的轨迹](/posts/conference-nime-2026-conference-paper-id-nime2026-154-d467e51695/) | [Murzinograph: Navigating Sound through Latent Space Visualizations\.](/posts/conference-nime-2026-conference-paper-id-nime2026-154-d467e51695/) | **4.4/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 系统技术报告 | #音频理解 |
| 157 | [把混沌当礼物：霍迪克如何用威望代替专利来养活乐器社群](/posts/conference-nime-2026-conference-paper-id-nime2026-91-83c48b4802/) | [The Gift of Chaos: Rob Hordijk's Open Design Philosophy and the Formation of Post\-Digital Instrument Communities\.](/posts/conference-nime-2026-conference-paper-id-nime2026-91-83c48b4802/) | **4.4/10** · 创新 1.1/2 · 技术严谨 0.7/1.5 · 实验充分 0.4/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #音乐生成 |
| 158 | [不模仿鸟叫而是学会鸟的语法：亚马孙 transmorphic 音乐如何重排技术与生态的关系](/posts/conference-nime-2026-conference-paper-id-nime2026-88-b97babd9f0/) | [Listening to Amazônia Verde Viva: Transmorphic Intersections of Ecology and Music Technology in the Global South\.](/posts/conference-nime-2026-conference-paper-id-nime2026-88-b97babd9f0/) | **4.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.4/1.5 | 后50% | 应用研究 | #音乐生成 |
| 159 | [把簇绒动作变成复调激发：柄接式地毯工具如何同时产出织物与声音](/posts/conference-nime-2026-conference-paper-id-nime2026-134-d4892cd50e/) | [The Carpet Maker’s Hafted Tool: A Hackable Instrument for Sonoric Textile Practice\.](/posts/conference-nime-2026-conference-paper-id-nime2026-134-d4892cd50e/) | **4.2/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 160 | [先编织后通电：以安第斯螺旋时间组织声音界面生成的设计过程](/posts/conference-nime-2026-conference-paper-id-nime2026-27-d9aad66db6/) | [Weaving Before Electronics: A Spiral Design Process for Sound\-Interface Making\.](/posts/conference-nime-2026-conference-paper-id-nime2026-27-d9aad66db6/) | **4.2/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 方法研究 | #音频交互 |

---

## 📋 论文列表

### 1. [不断线比对得准更重要：千机用单向广播把数百部手机变成古琴共鸣体](/posts/conference-nime-2026-conference-paper-id-nime2026-25-7dd19a1beb/)

> 英文题目：*[Qianji: A Resilient Framework for Orchestrating "A Thousand Machines" in Distributed Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-25-7dd19a1beb/)*

标签：#自适应滤波 #流式处理 #音乐 #空间音频渲染

评分：**8.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.3/1.5

排名：前25% | 文档类型：系统技术报告 | 主任务：#空间音频渲染 | 主方法：#自适应滤波

会议来源：[官方记录](https://nime.org/proc/nime2026_25/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_25.pdf)

👥 **作者与机构**

- Ruilei Duan：机构信息未能从会议 PDF 纯文本可靠映射
- Zhengyang Ma：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理拥塞蜂窝网络下数百台同地手机作为扬声器阵列的分布式演奏，输入为古琴现场演奏与灰度空间手势视频及场馆座位图，输出为每台观众手机独立的包络化共振声光纹理与前方扩声叠加的厅堂声场，难点是高密度4G/5G抖动丢包与移动系统休眠挂起。离线作曲阶段将座位归一化坐标采样视频亮度并量化为每座二进制包络文件预分发，其输出直接构成运行时待触发的 per\-seat 乐谱。运行时指挥台以发射后不管方式经Server\-Sent Events广播带约2000 ms安全余量的时间戳 cues，无需维持连续控制流即可触发已预载的空间纹理。观众厚客户端扫码自选座位下载对应文件，以无状态HTTP周期校准时钟并经异常剔除与滑动平均多级滤波平滑后本地调度Web Audio回放，浏览器原生重连保障中断恢复。相对维持每客户端双向状态的Soundworks类框架，该设计以无状态扇出和文本纹理相干取代相位精确与逐设备可控，以牺牲双向交互换取拥塞下的稳定。在两次试点测试集下，首次试点的接入规模指标为100，高于第二次试点的接入规模指标50。结论适用边界受限于单向广播式共振，数千阵列声压掩蔽与双向交互外推尚未验证。部署硬件为2核4GB虚拟私有服务器与200Mbps峰值带宽，观众经自有蜂窝网络接入并承受相应延迟与吞吐约束。

🔗 **开源资源**

- 代码相关资源：<https://zmk5566.github.io/qianji/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://zmk5566.github.io/qianji/> — 链接可访问（HTTP 200）
- 复现相关资源：<https://zmk5566.github.io/qianji/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 2. [链接有了不等于能复现：NIME 开放实践的寻址缺口与够用型归档](/posts/conference-nime-2026-conference-paper-id-nime2026-31-50ab643243/)

> 英文题目：*["See Link for More Details": Towards a Pragmatic Open Methodology at NIME\.](/posts/conference-nime-2026-conference-paper-id-nime2026-31-50ab643243/)*

标签：#数据集 #开源工具 #文献计量分析 #音乐理解

评分：**7.8/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音乐理解 | 主方法：#文献计量分析

会议来源：[官方记录](https://nime.org/proc/nime2026_31/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_31.pdf)

👥 **作者与机构**

- Matthew Hamilton：机构信息未能从会议 PDF 纯文本可靠映射
- Michele Ducceschi：机构信息未能从会议 PDF 纯文本可靠映射
- Lucia Michielin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以NIME论文库为输入，输出数字乐器源材料可发现性、可访问性与可引用性的实证诊断，难点在于链接位置异构、仓库失效与外部引用和自身公开混杂难区分。审计第一步针对2017–2025年论文用pdfgrep正则逐年检索git等源仓库统一资源定位符，记录脚注、正文、引用、附录位置并增补缺失类，其分类结果进入跨年趋势统计。第二步将同一检索扩展至2001–2025年全库，区分引用外部开源项目与公开自身源材料并统计GitHub专属比例，以承接前步位置分布并揭示引用与公开缺口演化。第三步以NEMUS历史羽管键琴增强界面为验证，将固件、电子设计与模型拆为三子模块并以元仓库聚合，再经Zenodo独立归档交叉引用数字对象标识符，检验前两步发现的脆弱链接问题的可行修复。在NIME 2025年论文语料统计设置下，意图分享源材料的论文数量指标为37篇，低于该年论文总量数量指标的96篇。相对已有方法关键差异在于不要求可构建可执行、仅以明确分享意图为纳入标准，并以缺失类与子模块独立归档应对链接腐烂与单体仓库不可持续问题，提升长期可重建性。该结论适用边界限于NIME及类似艺术工程会议，外推至一般人文学科尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Nemus-Project/fair-nime-2026> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/Nemus-Project/fair-nime-2026> — 链接可访问（HTTP 200）
- 数据相关资源：<https://doi.org/10.5281/zenodo.19443616> → <https://zenodo.org/doi/10.5281/zenodo.19443616> — 暂时无法访问
- 复现相关资源：<https://github.com/Nemus-Project/fair-nime-2026> — 链接可访问（HTTP 200）
- 复现相关资源：<https://doi.org/10.5281/zenodo.19443616> → <https://zenodo.org/doi/10.5281/zenodo.19443616> — 暂时无法访问
- 第三方资源：<https://gitlab.com/pdfgrep/pdfgrep/-/tags/> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.25495/7GXK-RD71> → <https://zenodo.org/> — 暂时无法访问
- 第三方资源：<https://doi.org/10.5281/zenodo.5171937> → <https://zenodo.org/record/5171937> — 暂时无法访问
- 第三方资源：<https://docs.kicad.org/9.0/en/kicad/kicad.html#> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.5281/zenodo.17811082> → <https://zenodo.org/doi/10.5281/zenodo.17811082> — 暂时无法访问
- 第三方资源：<https://doi.org/10.5334/joh.7> — 暂时无法访问
- 第三方资源：<https://oshwa.org/resources/sharing-best-practices/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 3. [用一块 FPGA 带起 768 个喇叭：高密度扬声器阵列如何做小做模块化](/posts/conference-nime-2026-conference-paper-id-nime2026-107-fa781b831c/)

> 英文题目：*[Embedded, Modular, and Affordable High\-Density Loudspeaker Arrays\.](/posts/conference-nime-2026-conference-paper-id-nime2026-107-fa781b831c/)*

标签：#开源工具 #信号处理 #多通道 #空间音频信号 #空间音频渲染

评分：**7.4/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#空间音频渲染 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_107/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_107.pdf)

👥 **作者与机构**

- Maxime Popoff：机构信息未能从会议 PDF 纯文本可靠映射
- Romain Michon：机构信息未能从会议 PDF 纯文本可靠映射
- Pierre Cochard：机构信息未能从会议 PDF 纯文本可靠映射
- Tanguy Risset：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作针对高密度空间音频难以低成本部署的问题，输入为虚拟声源位置与多通道音频流，输出为驱动数百扬声器的同步模拟信号，难点在于通道间严格同步、布线与功耗约束及几何可重构性。方法链第一步由嵌入式FPGA片上系统完成波场合成与波束控制解算并输出I2S时分复用音频流，其时隙结构直接决定后续扩展方式。第二步菊花链式8扬声器模组经跳线选择所属数据线并经本地缓冲转发共享位时钟与字时钟，提取的本地数据驱动集成DAC功放。第三步控制层经嵌入式Linux将开放声音控制与以太网音频映射为每通道延时与增益参数并回注FPGA流水线。与既有固定32通道条形阵列相比，关键差异在于将地址解码下沉为硬件跳线与片内时隙分配，使凹形与二维矩阵重构无需改动信号架构。在8模组线性阵列评测设置下，24 mm间距配置的空间奈奎斯特频率指标为约7\.1 kHz，从78\.3 mm间距配置的空间奈奎斯特频率指标约2\.2 kHz升至约7\.1 kHz。该结论适用边界受限于小功率演示级器件与152 cm短链验证，尚未验证长链信号完整性与大空间听音效果，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/inria-emeraude/syfala/tree/main/PCB/TheLine> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/inria-emeraude/syfala> — 链接可访问（HTTP 200）
- 第三方资源：<https://faust.grame.fr/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.raspberrypi.com/documentation/computers/compute-module.html> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 4. [把广播档案馆装进乐器：TECHNO\-UTOPIA 如何让交响乐团与嵌入式 AI 互相改写](/posts/conference-nime-2026-conference-paper-id-nime2026-26-36dad124bc/)

> 英文题目：*[TECHNO\-UTOPIA: Music Emerging from Colliding Embedded AI Instruments with Radio Orchestras and their Archives\.](/posts/conference-nime-2026-conference-paper-id-nime2026-26-36dad124bc/)*

标签：#变分自编码器 #音乐 #音频检索 #音乐生成

评分：**7.3/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音乐生成 | 主方法：#变分自编码器

会议来源：[官方记录](https://nime.org/proc/nime2026_26/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_26.pdf)

👥 **作者与机构**

- Robert Laidlow：机构信息未能从会议 PDF 纯文本可靠映射
- Nicola Privato：机构信息未能从会议 PDF 纯文本可靠映射
- Victor Shepardson：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

TECHNO\-UTOPIA要解决非技术背景职业管弦乐手与独奏家如何实时驾驭广播档案声音的难题，输入为英国广播爱乐乐团三十年约2600小时广播档案与现场管弦乐信号及独奏手势，输出为独奏家与乐团共同完成的约35分钟三乐章协奏曲首演与录制，难点在于档案确权、实时可演奏性与排练可信度需同时成立。先由档案治理输入原始立体声混音档案并负责剔除在世作曲家作品与主持人口播，其筛选后语料直接作为模型训练输入，再由实时音频变分自编码器RAVE以迁移学习输入该语料并负责学习潜空间音色流形，其输出的八维潜变量表征直接构成可触摸演奏空间，最后由嵌入式磁控界面Stacco与档案梦境机输入该潜变量与磁体位置、手部压力及钢琴音高并负责映射为潜变量扰动与十秒档案片段触发，输出即舞台声音。与既有演出中机器学习多做固定生成不同，该工作把模型当作可触摸乐器并反向重塑配器与曲式，使档案探索发生在作曲结构层面而非仅音色层面。在BBC爱乐档案语料条件下，全团音频模型Model 1的训练数据量指标为18\.5GB，高于弦乐分组音频模型的训练数据量指标\<1GB。该结论适用边界受限于两支委约广播乐团与特定独奏家组合，换团换人或巡演的外推性尚未验证。训练成本方面原文披露单个模型迁移学习约需3天并获NVIDIA硬件资助且经由Bela嵌入式硬件运行，但端到端延迟与部署人力未量化。

🔗 **开源资源**

- 代码相关资源：<https://github.com/victor-shepardson/RAVE> — 链接可访问（HTTP 200）
- 演示资源：<https://www.cyborgsoloists.com/> — 链接可访问（HTTP 200）
- 演示资源：<https://on.soundcloud.com/7dBc94yMOi0ewbrC7O> — 暂时无法访问
- 第三方资源：<https://datamindaudio.ai/concatenator-v1/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.flucoma.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://onnxruntime.ai/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 5. [不断声的文本乐器：用可读参数把语言模型的等待藏进演奏里](/posts/conference-nime-2026-conference-paper-id-nime2026-120-88f948605f/)

> 英文题目：*[A Text\-Steerable Instrument for Sketching Procedural Soundscapes via Language Models\.](/posts/conference-nime-2026-conference-paper-id-nime2026-120-88f948605f/)*

标签：#开源工具 #检索增强 #大语言模型 #流式处理 #音乐生成

评分：**7.2/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#检索增强

会议来源：[官方记录](https://nime.org/proc/nime2026_120/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_120.pdf)

👥 **作者与机构**

- Prabal Gupta：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该乐器以自然语言场景描述为输入，输出持续演进的过程化音景，难点在于大模型指令解析延迟与现场不间断发声的冲突。先将文本提示输入嵌入检索等三种可互换后端，其职责是把非结构化描述映射为34字段分类配置，输出可读可步进的参数配置。再将该配置与随机种子一并输入确定性过程化合成引擎，其职责是把分类参数渲染为音频流，输出同一配置与种子下相同的可复现声音。最后将音频流输入实时生成器持续播放，其职责是让当前配置不断发声同时在后台解算新指令，就绪后以交叉淡化切入，从而将解析延迟隐藏在连续播放之后。与直接合成整体波形的神经文本到音频相比，关键差异是以可读参数配置替代单体波形，用音色广度换取可控性、可复现性与连续性。在200个留存提示基准下，嵌入检索后端的配置生成延迟指标为∼0\.3 s，低于外部大模型后端的配置生成延迟指标∼5\.6 s。该结论适用边界受限于氛围、电影感与循环类音景的粗粒度情绪调度，流派模仿与音色精细指定效果较差，且感知质量尚未验证。推理开销上嵌入检索后端在运行时无需推理且无网络需求，而外部后端需5–8 s延迟等待并以快速模式兜底。

🔗 **开源资源**

- 代码相关资源：<https://github.com/prabal-rje/latentscore> — 链接可访问（HTTP 200）
- 数据相关资源：<https://zenodo.org/records/19944277> — 链接可访问（HTTP 200）
- 演示资源：<https://latentscore.com/> — 链接可访问（HTTP 200）
- 复现相关资源：<https://zenodo.org/records/19944277> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 6. [不拆琴键也能看清触键：PHOTON 在历史键盘下跟踪键杠杆](/posts/conference-nime-2026-conference-paper-id-nime2026-85-33a6f63a65/)

> 英文题目：*[PHOTON: Non\-Invasive Optical Tracking of Key\-Lever Motion in Historical Keyboard Instruments\.](/posts/conference-nime-2026-conference-paper-id-nime2026-85-33a6f63a65/)*

标签：#开源工具 #信号处理 #实时处理 #音乐 #音乐理解

评分：**7.2/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐理解 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_85/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_85.pdf)

👥 **作者与机构**

- Noah Jaffe：机构信息未能从会议 PDF 纯文本可靠映射
- John Ashley Burgoyne：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

历史键盘研究需以键杆垂直位移为输入，输出实时事件与连续运动轨迹，难点在于键床间隙极小、布局非标且击弦释弦负载时变，通用钢琴传感无法直接移植。PHOTON先由键杆末端下方反射式红外传感将距离反射转为模拟电压，再经板载模数转换与逐键双点标定归一化为位移坐标，最后由分布式板卡本地扫描检测事件并经主控聚合为MIDI与串行位置流。与连续全亮式传感不同，选择性逐个使能与本地阈值检测降低了功耗与总线负载，使双排大键数菊花链部署成为可能。在小批量制造设置下，JLCPCB的组装尺寸指标为400×500 mm，高于PCBWay的组装尺寸指标250×500 mm。在单台双排Franco\-Flemish羽管键琴示波场景下，原型示例了击弦点居中与双排错位等交互过程，但未与现有基线做受控对比。结论适用边界仅限该单琴单演奏者示波案例，向多琴种多演奏者与感知效度的外推尚未验证。硬件方面原文披露了五块传感器板小批量制造的印刷组装费用结构，延迟与吞吐等部署细节仅作架构性说明而无系统性度量。

🔗 **开源资源**

- 代码相关资源：<https://github.com/w4iei/photon> — 链接可访问（HTTP 200）
- 复现相关资源：<https://github.com/w4iei/photon> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/bennymeg/Fabrication-Toolkit> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.sparkfun.com/qwiic> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 7. [把采样做成可抓握的棋子：Turntangilism 如何不打断打碟而加上现场采样与环形步进](/posts/conference-nime-2026-conference-paper-id-nime2026-47-58519ec3c8/)

> 英文题目：*[Turntangilism: Enhancing traditional Turntable Setups with Tangible Controls for Digital Sequencing and Live Sampling\.](/posts/conference-nime-2026-conference-paper-id-nime2026-47-58519ec3c8/)*

标签：#开源工具 #信号处理 #音乐 #音频交互

评分：**7.1/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_47/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_47.pdf)

👥 **作者与机构**

- Thomas Geissl：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

传统双唱盘加混音器以连续混音为输出，输入为以手势和听觉为中心的实时选曲与混音操作，难点在于不引入屏幕而把实时采样与循环时序结构塞进触觉流程。系统先由Tamplifier从混音器耳机cue或aux抓取声音并绑定到颜色实体token即Tample，其输出进入中央主机Tamputer。Tamputer经Bela加多通道扩展与Pure Data补丁完成存储、映射与路由，再分发至八槽Tamplepack8完成试听与到音序环的指派。随后径向Tamphall8r以可转同心环加旋转传感唱片触发时序，手持7英寸Tamplate负责颗粒刮擦与连续调制，最后输出至多8路音频至外部混音器。与屏幕采样器和线性钢琴卷帘不同，该设计把样本句柄与循环时间外化为可抓握颜色圆柱与同心圆环，使刮擦转动偏移直接成为编辑手势并保留原有DJ工作流。在转速调节任务下，变速调节后条件的循环时长指标为3\.6s，高于标准33 1/3 RPM条件的循环时长指标1\.8s。其适用边界受限于仅在Ars Electronica Festival 2025与酒吧DJ场景验证、无标签Tample记忆负担尚未验证长期泛化，且原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/grantler-instruments/ESP-NOW-MIDI> — 链接可访问（HTTP 200）
- 复现相关资源：<https://grantler-instruments.github.io/enomik-app> → <https://grantler-instruments.github.io/enomik-app/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 8. [谱面即乐器：把导航、触摸与信号路由画进同一张可演奏总谱](/posts/conference-nime-2026-conference-paper-id-nime2026-77-4c1adda1c7/)

> 英文题目：*[Oscilla: The Score as Performable Interface\.](/posts/conference-nime-2026-conference-paper-id-nime2026-77-4c1adda1c7/)*

标签：#开源工具 #信号处理 #音乐信息检索 #音乐 #音频交互

评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_77/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_77.pdf)

👥 **作者与机构**

- Rob Canning：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Oscilla针对图形乐谱难以兼顾记谱阅读、实时操控与声音合成的问题，输入为Inkscape绘制的可缩放矢量图形乐谱与触控导航手势，输出为浏览器内音频与开放声音控制协议控制流及跨端同步演奏状态，难点在于同一视觉表面需同时承载表示、交互与发声路由。方法第一步以标识微语法为图形元素声明提示行为，将绘画转为可触发对象并输出带行为的乐谱层进入下一步。方法第二步以连续遍历与翻页导航驱动播放头，使移动本身成为时间手势并输出时空位置进入调制。方法第三步以物体沿路径拖拽与连续控制通道输出高精度控制信号，将归一化位置转为可路由参数流。再经参数总线路由实现跨提示调制与演奏期重构，完成从手势到声音拓扑的闭环。在定时序列设置下，decay段的时长指标为120s，高于peak段的时长指标45s。相对IanniX纯外部控制器与INScore脚本编排方案，关键差异在于行为内嵌于视觉元素且支持演奏期拖拽标注，意义在于免安装的浏览器合奏可直接演奏乐谱本身。适用边界限于浏览器生态与中小规模合奏验证，大规模并发与长时稳定性等外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://oscilla.cc/> — 链接可访问（HTTP 200）
- 复现相关资源：<https://oscilla.cc/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/DigiScore/neoscore> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 9. [共享轨迹与独占声对象：WeSp 如何把协作式空间化拆成可同时编辑的结构](/posts/conference-nime-2026-conference-paper-id-nime2026-141-88eb045202/)

> 英文题目：*[Shared Agency through Collaborative Trajectory Editing in Immersive Audio \.](/posts/conference-nime-2026-conference-paper-id-nime2026-141-88eb045202/)*

标签：#软件工具 #用户研究 #空间音频信号 #空间音频渲染

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#空间音频渲染 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_141/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_141.pdf)

👥 **作者与机构**

- Lennart Sailer：机构信息未能从会议 PDF 纯文本可靠映射
- Henrik von Coler：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

沉浸式音频多人实时协作轨迹编辑面临输入冲突、视听映射失配与协同意图难对齐的难点，单用户时间线自动化难以直接扩展到现场合奏与即兴表演。WeSp以浏览器共享三维场景为输入，先经共享样条轨迹层同步集体空间结构编辑，输出所有用户可见可改的轨迹集合。再经个人声音对象播放头控制，将上一步轨迹集合作为运动约束，实现沿任意轨迹的速度、方向与定位操作。最后经中央服务器双向通信转开放声音控制消息，驱动外部高阶Ambisonics渲染输出。与已有单用户轨迹工具的关键机制差异在于轨迹结构共享而声音对象独占，从而在保持个人演奏连续性的同时实现空间布局的相互可修改性。在平板与笔记本分组比较条件下，Plan Events条目的Mann\-Whitney U指标为8\.50，低于Connected条目的Mann\-Whitney U指标28\.00。该结论适用边界受限于共处协作与视觉主导的即兴场景，难以推广到远程无言语协调或高密度声源下的听觉可分性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/koyi8/WeSp> — 链接可访问（HTTP 200）
- 复现相关资源：<https://github.com/koyi8/WeSp> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.iannix.org/en/> — 链接可访问（HTTP 200）
- 第三方资源：<https://gmem.org/holophon> — 链接可访问（HTTP 200）
- 第三方资源：<https://zkm.de/en/about-the-zkm/organization/hertz-lab/software/zirkonium> — 链接不可用（HTTP 404）
- 第三方资源：<https://grapes-3d.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 10. [把每一步变成声音：智能鞋如何同时处理冻结步的急救与步幅的慢训练](/posts/conference-nime-2026-conference-paper-id-nime2026-161-d206841ae6/)

> 英文题目：*[A Smart Footwear Platform for Gait Augmentation – Application to Musical Feedback for Improving Gait in Parkinson's Disease–\.](/posts/conference-nime-2026-conference-paper-id-nime2026-161-d206841ae6/)*

标签：#医疗音频 #开源工具 #用户研究 #音乐生成

评分：**7.0/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_161/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_161.pdf)

👥 **作者与机构**

- Yuki Uno：机构信息未能从会议 PDF 纯文本可靠映射
- Fushi Sano：机构信息未能从会议 PDF 纯文本可靠映射
- Riki Saito：机构信息未能从会议 PDF 纯文本可靠映射
- Ryo Yumoto：机构信息未能从会议 PDF 纯文本可靠映射
- Tomoya Nakamura：机构信息未能从会议 PDF 纯文本可靠映射
- Tomohiro Samma：机构信息未能从会议 PDF 纯文本可靠映射
- Kenta Tanaka：机构信息未能从会议 PDF 纯文本可靠映射
- Harukaze Yatsugi：机构信息未能从会议 PDF 纯文本可靠映射
- Makoto Sawada：机构信息未能从会议 PDF 纯文本可靠映射
- Yuya Kikukawa：机构信息未能从会议 PDF 纯文本可靠映射
- Shinya Fujii：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

帕金森病步态训练输入为足部惯性信号，输出应为低延迟音乐反馈以抑制冻结步态并维持训练动机，难点在于症状日内波动、转弯诱发冻结与长期依从易衰减。方法链分三步：足戴式ORPHE CORE 3\.0在端侧检测足跟着地与离地事件并估计步长步频与触地离地角度后经低功耗蓝牙发送，浏览器软件开发包ORPHE\-CORE\.js封装连接与步态回调并转为应用可用事件，两个应用分别完成反应式鼓声触发与累积式配器绽放。前者采用一步一声映射在着地瞬间合成鼓声，后者以初始三十秒标定中位步长与节奏再按步长质量逐级叠加音轨并每十秒抬高阈值四厘米。与固定节拍节奏听觉刺激相比，关键机制差异是声音由自身步态驱动或步幅质量解锁音轨，从而将训练重构为奖励性创作以强化自主感与持续参与。在连续行走基线与交互期对比任务下，交互期的左足步长回归拟合指标R²为0\.396，高于基线条件的R² 0\.013。足尖离地角与着地角在交互期亦呈显著正向扩张趋势，同时报告高愉悦与低焦虑。结论适用边界仅限两例个案即时演示，尚未验证长期依从、跨个体泛化与药物波动下的稳定性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Orphe-OSS> — 链接可访问（HTTP 200）
- 数据相关资源：<https://doi.org/10.5281/zenodo.20069107> → <https://zenodo.org/doi/10.5281/zenodo.20069107> — 暂时无法访问
- 复现相关资源：<https://doi.org/10.5281/zenodo.20069107> → <https://zenodo.org/doi/10.5281/zenodo.20069107> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 11. [不逐个试听，如何在 FM 参数海里找到想要的声音：VibeFM 的采样加可视总览](/posts/conference-nime-2026-conference-paper-id-nime2026-90-24996d4782/)

> 英文题目：*[VibeFM: Visual Exploration of FM Synthesis\.](/posts/conference-nime-2026-conference-paper-id-nime2026-90-24996d4782/)*

标签：#用户研究 #音乐 #音频生成 #音频交互

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_90/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_90.pdf)

👥 **作者与机构**

- Simeon Rau：机构信息未能从会议 PDF 纯文本可靠映射
- Finn Tobien：机构信息未能从会议 PDF 纯文本可靠映射
- Michael Sedlmair：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入是Dexed仿真器中144个参数构成的FM合成配置空间，输出是作曲家可直接复用与再采样的音色配置，难点在于参数量巨大且参数变化与听感映射不直观，难以定向寻找新颖音色。方法链分四步：先从专家筛选的38个关键参数随机采样或围绕种子按不同幅度做局部扰动并离线渲染音频，该采样结果直接作为后续分析的样本集合；再用librosa提取包络与亮度等特征并以MFCC欧氏距离度量音色相似度，将音频转化为可比较的特征表示；接着经t\-SNE或MDS降维形成相似度布局，使相似音色在总览中相邻排布；最后以包络、亮度、梅尔频谱图和参数矩阵等字形支持浏览、试听、双点插值与导出，实现从总览到细节的筛选。在局部精调采样任务设置下，全部参数大范围扰动条件的扰动率指标为25%，高于单参数微调条件的扰动率指标5%。相对遗传算法逐轮投票迭代采样与黑盒音色匹配，该设计保留全部手动控制权并以可视化总览支撑听觉意象与意外发现，而非自动排序评分。其实证适用边界受限于单作曲家案例与短时专家试用，尚未验证新手与大规模曲库下的外推效果。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/snrau/VibeFM> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 12. [把高维潜轨迹铺成可走的地形：Latent Terrain 如何驯服神经音频自编码器](/posts/conference-nime-2026-conference-paper-id-nime2026-38-6287e9a68b/)

> 英文题目：*[Latent Terrain: Adapting Neural Audio Autoencoders as Design Materials in NIME\.](/posts/conference-nime-2026-conference-paper-id-nime2026-38-6287e9a68b/)*

标签：#开源工具 #变分自编码器 #实时处理 #音频生成 #音频交互

评分：**6.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频生成 | 主方法：#变分自编码器

会议来源：[官方记录](https://nime.org/proc/nime2026_38/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_38.pdf)

👥 **作者与机构**

- Shuoyang Jasper Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Keigo Yoshida：机构信息未能从会议 PDF 纯文本可靠映射
- Nico García\-Peguinho：机构信息未能从会议 PDF 纯文本可靠映射
- Jiatong Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Dan Hearn：机构信息未能从会议 PDF 纯文本可靠映射
- Anna Xambó Sedó：机构信息未能从会议 PDF 纯文本可靠映射
- Nick Bryan\-Kinns：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本工作处理以神经音频自编码器解码器为乐器时的控制难题，输入是用户在二维控制面上的连续手势，输出是高维潜空间驱动的连续音频，直接回归易因频谱偏置丢失音色细节与快速结构变化。首先用预训练自编码器把用户策划的音频库编码为潜轨迹，保留时序与音色变化；接着将潜轨迹与控制面空间轨迹配对，用带傅里叶特征映射的坐标多层感知机学习连续坐标到潜向量函数，正弦余弦扩展使网络可拟合高频细节；推理时控制坐标经同一扩展进入网络再送入解码器做流式波形重建。与无傅里叶特征的标准多层感知机相比，该机制显式注入高频基，缓解欠拟合导致的平坦插值并保留快速变化。在鼓组音频库映射任务下，带傅里叶特征模型的映射误差指标为2\.387，低于无特征基线的映射误差指标28\.163。该结论适用边界受限于四类自编码器与鼓、弦乐、语音三类音色库的离线回归与短缓冲测试，尚未验证跨风格长时结构与舞台鲁棒性。训练成本方面原文在Apple Silicon M4 Max硬件上测得映射网络1000步训练可在2秒内完成，长时训练约需1\.2分钟，推理开销强调低延迟流式合成。

🔗 **开源资源**

- 代码相关资源：<https://github.com/jasper-zheng/music2latent-scripted> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/jasper-zheng/streamable-stable-audio-open> — 链接可访问（HTTP 200）
- 演示资源：<https://jasper-zheng.github.io/nn_terrain/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/acids-ircam/RAVE> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 13. [把步进音序器当乐器演奏：低维规则如何保住手势与作者权](/posts/conference-nime-2026-conference-paper-id-nime2026-159-f9098797ef/)

> 英文题目：*[Performing Sequences: Interaction and Instrumentality in the Design of a Performable Sequencing System\.](/posts/conference-nime-2026-conference-paper-id-nime2026-159-f9098797ef/)*

标签：#软件工具 #用户研究 #实时处理 #音乐 #符号音乐生成

评分：**6.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#符号音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_159/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_159.pdf)

👥 **作者与机构**

- Roberto Chiurazzi：机构信息未能从会议 PDF 纯文本可靠映射
- Anna Xambó：机构信息未能从会议 PDF 纯文本可靠映射
- Charalampos Saitis：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以旋钮推子手势与速度拍号设置等低维控制为输入，实时生成可驱动软件音源的MIDI音高、力度与时值多声部序列，难点是在即兴中保持手势与结果因果可读并保留演奏者主导权。欧几里得节奏核先按步数与事件数均匀分布发音点并允许偏移，输出节奏骨架进入方向性旋律遍历。该遍历按音阶量化音高数组以上下行、随机与重复方式推进，使同一事件数同时驱动节奏密度与旋律运动，其音高节奏流再进入受约束调制。调制以小节边界定时更新密度、方向与力度，多实例并行层叠为复音复节奏织体以支撑长时变化。在8步长节奏分布设置下，示例b的发音点数量指标为5，高于示例a的发音点数量指标为3。与自主生成式系统相比，该设计以规则约束与可撤回委托替代黑箱自主输出，意义在于用可解释过程控制维持作者身份与可学习性。结论适用边界受限于第一作者本人两场即兴的第一人称反思，尚未验证多人合奏、观众感知因果性与风格泛化表现，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://codeberg.org/Anonymus_Submission/Performing_Sequences.git> → <https://codeberg.org/Roberto_Chiurazzi/Performing_Sequences.git> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/porres/pd-else> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 14. [不靠语料库的共演：反馈吉他如何边听边学边再注入](/posts/conference-nime-2026-conference-paper-id-nime2026-33-36304f82fd/)

> 英文题目：*[OTIAC: Co\-Improvising With a Musical Agent in a Feedback\-Based Guitar Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-33-36304f82fd/)*

标签：#开源工具 #生成模型 #用户研究 #音乐 #音乐生成

评分：**6.8/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#生成模型

会议来源：[官方记录](https://nime.org/proc/nime2026_33/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_33.pdf)

👥 **作者与机构**

- Claudio Panariello：机构信息未能从会议 PDF 纯文本可靠映射
- Ken Déguernel：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理反馈增强古典吉他场景下吉他手、电子演奏者与智能体的实时共即兴，输入为琴头接触麦克风拾取的连续Larsen反馈与噪声演变，输出是经琴体换能器回注并经房间扩声的生成音频，难点在于音色连续无离散音符且调音、摆位与房间时刻改变声音分布。方法链分三步衔接：先以FluCoMa在48kHz采样下提取音频特征并切分为事件片段，形成可学习的离散单元。接着10×10自组织映射将高维音色特征在线聚类为符号词汇，其输出的符号流直接作为下一步的输入。然后因子神谕机学习符号序列的前向转移与后缀链接，在新事件到来时生成后续符号序列并匹配对应录音片段回注吉他，完成聆听与生成闭环。与依赖预存语料库的OMax、Somax2及ImproteK/Dicy2系列不同，该机制完全从当前场次在线建构词汇与转移关系，因而更适配不可预测的反馈材料并形成自指生态。在H\[t\] Duo排练访谈场景设置下，10×10自组织映射条件的数量指标为10×10，高于H\[t\] Duo双乐手条件的数量指标2。其结论适用边界受限于H\[t\] Duo两位职业乐手在特定尼龙弦吉他与硬件摆位下的排练观察与一小时半结构化访谈，换乐器换场地与长时间演出的稳定性尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/claudiopanariello/otiac> — 链接可访问（HTTP 200）
- 代码相关资源：<https://www.algomus.fr/code/> — 链接可访问（HTTP 200）
- 第三方资源：<https://supercollider.github.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://pypi.org/project/PyOracle/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/supercollider/sc3-plugins/tree/main/source/MCLDUGens/sc> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 15. [不为控制发声：把手部预测失败变成增强现实里的声音材料](/posts/conference-nime-2026-conference-paper-id-nime2026-57-856a0706b6/)

> 英文题目：*[Sounds from Mismatch: Sensorimotor Prediction Error as Sonic Material in Augmented Reality\.](/posts/conference-nime-2026-conference-paper-id-nime2026-57-856a0706b6/)*

标签：#信号处理 #实时处理 #音乐 #音频交互

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_57/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_57.pdf)

👥 **作者与机构**

- Domenico Stefani：机构信息未能从会议 PDF 纯文本可靠映射
- Alberto Boem：机构信息未能从会议 PDF 纯文本可靠映射
- Luca Turchet：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Sounds from Mismatch针对增强现实中手部动作缺少具身聆听维度的问题，输入为WebXR手部追踪提供的双手多关节三维位置流，输出为随预测失配连续变化的颗粒合成纹理与幽灵手可视化，难点在于将幅度小且高度相关的关节运动转化为可感知、可探索的声音差异。系统先为每个单轴追踪信号并行挂载多视界算法预测器，以20ms间隔馈入当前采样并按视界步数前滚预测，再将各预测结果推入对应队列缓冲延迟对齐，以得到当前时刻对现在的过去预期。接着计算实际位置与预期位置的误差向量并驱动体素密度与骨骼连接可视化，最后将拇指与食指指尖等部位平均误差映射至颗粒大小、音高与音量等双手独立合成器参数，实现静止即沉默、偏离即发声。与用循环神经网络预测手势并做延续或呼应的EMPI不同，该系统不播放预测内容本身，而是将失配量直接作为首要声音材料，具有探索预测关系而非控制乐器的意义。在手部追踪录制回放评测下，线性外推在\+20ms视界的均方误差指标为3\.9e\-04，低于线性外推在\+1s视界的均方误差指标2\.7e\-02。该结论适用边界限于离线回放与作者内测体验，陌生用户身体图式扰动能否持续尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/domenicostefani/sounds-from-mismatch-xr> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/immersive-web/webxr> — 链接可访问（HTTP 200）
- 第三方资源：<https://threejs.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://immersiveweb.dev/> — 链接可访问（HTTP 200）
- 第三方资源：<https://developer.mozilla.org/en-US/docs/Web/API/XRHand> — 链接可访问（HTTP 200）
- 第三方资源：<https://threejs.org/docs/#XRManager> — 链接可访问（HTTP 200）
- 第三方资源：<https://tonejs.github.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://freesound.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 16. [新手用多轨生成作曲工具：易用但控制深度不足](/posts/conference-nime-2026-conference-paper-id-nime2026-128-e4616ba30d/)

> 英文题目：*[Novice Users' Evaluation of Two Multi\-track Music Machines for AI\-Assisted Music Composition: Usability, User Experience and Acceptance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-128-e4616ba30d/)*

标签：#统计分析 #用户研究 #音乐 #符号音乐生成

评分：**6.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#符号音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_128/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_128.pdf)

👥 **作者与机构**

- Renaud Bougueng Tchemeube：机构信息未能从会议 PDF 纯文本可靠映射
- Jeff Ens：机构信息未能从会议 PDF 纯文本可靠映射
- Keon Ju Maverick Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Philippe Pasquier：机构信息未能从会议 PDF 纯文本可靠映射
- Jean\-Baptiste Rolland：机构信息未能从会议 PDF 纯文本可靠映射
- Yvan Grabit：机构信息未能从会议 PDF 纯文本可靠映射
- Maryam Safi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究处理新手围绕给定16小节节奏轨与指定风格完成多轨编配的任务，输入为已有MIDI上下文、选区小节与风格参数，输出为完整多轨符号音乐，难点在于乐理不足者难以表达意图且难以判断生成质量。方法链由三步构成：首先用户在MMM\-Cubase v2嵌入式插件或Calliope在线独立网页中设置全局与局部参数并发起乐谱修复生成，其次在工作区试听并迭代筛选生成结果，该试听筛选输出直接作为后续问卷评价的对象，最后经由系统可用性量表、创造力支持指数、可控性量表、技术接受模型与主题分析完成混合评估。与既往单专家或四声部钢琴研究相比，关键差异在于同时比较两种部署并区分早期新手与熟练新手，从而分离界面复杂度与经验的影响。在新手多轨编配任务评测下，Calliope的感知易用性分数为3\.91 ± 0\.62，高于MMM\-Cubase v2的感知易用性分数3\.64 ± 0\.84。未来使用意愿上MMM\-Cubase v2组30/39人表示会继续使用而Calliope组43/59人表示会继续使用，可发布评价则分别为59%与44\.1%同意。上述结论适用边界受限于短时编配任务与北美学生为主的98人新手样本，尚未验证其向原创长曲、现场演出或专家持续使用的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://metacreation.net/projects/novice-eval-ai-cac-2026> → <https://www.metacreation.net/projects/novice-eval-ai-cac-2026> — 链接可访问（HTTP 200）
- 复现相关资源：<https://metacreation.net/projects/novice-eval-ai-cac-2026> → <https://www.metacreation.net/projects/novice-eval-ai-cac-2026> — 链接可访问（HTTP 200）
- 第三方资源：<https://metacreation.net/projects/calliope> → <https://www.metacreation.net/projects/calliope> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 17. [肌电难听难看时如何调模型：用音频通道做拐杖的跨模态信号翻译](/posts/conference-nime-2026-conference-paper-id-nime2026-133-99f8f62c6a/)

> 英文题目：*[Cross\-Modal Sig2Sig Machine Translation with Deep Generative Modeling for NIME Design\.](/posts/conference-nime-2026-conference-paper-id-nime2026-133-99f8f62c6a/)*

标签：#Transformer #变分自编码器 #生理信号 #音乐生成

评分：**6.7/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐生成 | 主方法：#变分自编码器

会议来源：[官方记录](https://nime.org/proc/nime2026_133/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_133.pdf)

👥 **作者与机构**

- Lucy Strauss：机构信息未能从会议 PDF 纯文本可靠映射
- Prashanth Thattai Ravikumar：机构信息未能从会议 PDF 纯文本可靠映射
- Matthew Yee\-King：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理6通道表面肌电到中提琴风格单声道波形的跨模态信号到信号翻译，输入为人类不可直接听辨的多通道肌电时域信号，输出为连续音频波形，难点在于多通道建模易坍缩为平均解且需支撑现场交互。方法第一步用残差向量量化变分自编码器分别压缩音频与肌电，学习离散潜表征并以肌电重建损失保留关键特征。第二步以仅解码器变换器在潜空间自回归生成音频潜标记，其输出进入音频解码器重建波形，肌电潜向量作为条件信号持续输入交叉注意力。第三步在推理时以短段音频经音频编码器产生起播标记，结合实时肌电流编码后的潜向量逐标记延续生成，不再使用肌电解码器。与已有音频生成相比关键差异在于自注意力与交叉注意力同时做成因果，使生成不必等待完整调制序列即可流式输出，直接服务低等待的现场演奏触发与元作曲控制。在自采中提琴即兴语料任务下，A RVQ\-VAE 3的MRSTFT指标为0\.620433，低于A RVQ\-VAE 1的MRSTFT指标0\.832627。该结论适用边界受限于单演奏者单乐器小规模录音与6秒短语生成，跨演奏者、跨传感器布局与长时结构外推尚未验证，也未做系统听感对比与翻译条件有效性评估。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/lucystrauss/MLMLMLM> — 链接可访问（HTTP 200）
- 演示资源：<https://lucystrauss.github.io/NIME_2026_examples/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/lucidrains/vector-q> — 链接不可用（HTTP 404）
- 第三方资源：<https://drscotthawley.github.io/blog/posts/2023-06-12-RVQ.html> — 链接可访问（HTTP 200）
- 第三方资源：<https://lucystrauss.com/tech-tea-exchange> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 18. [不打断演奏的反馈：用游戏引擎把鼓面击打变成实时可视练习](/posts/conference-nime-2026-conference-paper-id-nime2026-18-fe5b10df14/)

> 英文题目：*[Exploring Real\-Time Interfaces With Sensory Percussion\.](/posts/conference-nime-2026-conference-paper-id-nime2026-18-fe5b10df14/)*

标签：#教育 #开源工具 #用户研究 #实时处理 #音频交互

评分：**6.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_18/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_18.pdf)

👥 **作者与机构**

- Graham Lazorchak：机构信息未能从会议 PDF 纯文本可靠映射
- Emily Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文针对打击乐声音转瞬即逝、教师同步形成性反馈难以与演奏共存的教学难题，以军鼓混合传感器信号为输入，以Unity实时视觉与附加音频反馈为输出，难点在于反馈须静默共存且保持教学一致性与易读性。先由EHSP传感器接收击打区域与力度输入并负责区分演奏技巧，输出MIDI音符与速度后经OSC/UDP发出，再由Unity独立线程OSC处理器接收该消息输入并负责缓存与记录高精度时间戳，输出带时间戳事件交由GlobalData与场景GameObject分发，最后由三首练习曲接收分发事件输入并分别负责映射为间隔曲线、节奏偏差六边形与爆米花刚体运动，输出可视反馈供练习。相对已有鼓触发器控制灯光视频的表演导向映射，本工作以教学一致性为约束策展相关传感参数并提供同步形成性反馈，提出相关性与易读性准则以支撑练习与表演。在Table of Time练习场景设置下，60 BPM条件下节拍速度指标为60 BPM，高于50 BPM条件下节拍速度指标的50 BPM。结论适用边界受限于单传感器军鼓加笔记本谱架式摆放的个人练习场景，爵士与古典群体或课堂部署的外推效果尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/the-bard-in-the-lab/ehsp-interface-demos> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 19. [会用控制器还不够：为数字音乐熟手补上原型设计的一整轮](/posts/conference-nime-2026-conference-paper-id-nime2026-83-a3d6c0379e/)

> 英文题目：*[From Controller User to Instrument Designer: Teaching NIME in a Contemporary Music Context\.](/posts/conference-nime-2026-conference-paper-id-nime2026-83-a3d6c0379e/)*

标签：#教育 #用户研究 #音乐 #音频交互

评分：**6.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_83/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_83.pdf)

👥 **作者与机构**

- Akito van Troyer：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入是已熟练使用数字音频工作站与商用控制器的高年级本科生，输出是可公开演出的原创数字乐器，难点在于声音设计经验难以迁移为电压分压、传感器调理与嵌入式映射能力。方法链分四步推进：前六周研读五件当代乐器并形成实现路线，为后续设计提供交互概念与技术词汇。第一至五周并行约束工具链实验室补齐版本控制、电子与微控制器短板，其器材词汇与代码模板直接进入第七至九周的概念验证原型。第十至十一周以自有乐器作曲倒逼映射与硬件返工，第十二至十四周以公开演出固化可靠性，全程以GitHub文档收敛为新界面乐器格式论文。相对仅做构建加演示的课程，关键差异是把作曲与公开演出设为强制迭代场，使接口缺陷在长期演奏中暴露而非被一次性演示掩盖，具有促进持续返工的实际意义。在2个学期课程项目成本统计评测下，均值统计的项目成本指标为\(113\.54，高于中位统计的项目成本指标的\)93\.80。该课程2个学期共16名学生中完成全部五阶段并参与演出与论文提交的比例为94%（15/16），而完成者中构建后仍修改硬件的比例为47%。结论适用边界仅限具备先修编程、数字音频工作站基础、小班与电子实验室的当代音乐院校，直接外推至零音乐基础、中学大班或无演出文化场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/EP-361/EP-361> — 链接可访问（HTTP 200）
- 复现相关资源：<https://github.com/EP-361/EP-361> — 链接可访问（HTTP 200）
- 第三方资源：<https://csound.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://bela.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://fritzing.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://processing.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://supercollider.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 20. [从面包板到舞台：用对齐与独立乐器逼出可演奏的交互音乐系统课](/posts/conference-nime-2026-conference-paper-id-nime2026-84-4bc0b5e358/)

> 英文题目：*[Teaching Interactive Music Systems: a Research‑Oriented, Project‑Based Graduate Course in a Multidisciplinary Master’s Program\.](/posts/conference-nime-2026-conference-paper-id-nime2026-84-4bc0b5e358/)*

标签：#教育 #用户研究 #音乐 #音频交互

评分：**6.7/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_84/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_84.pdf)

👥 **作者与机构**

- Stefano Fasciani：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该课程输入为音乐与技术背景高度异质的多学科硕士生，输出为可独立运行、可现场演奏的交互式音乐系统，难点在于电子、映射、合成、评价与舞台可靠性的全链条对齐。教学链先以翻转预习交付视频与文献并以准备度检查校准误解，其输出直接决定工作坊讲解重点与分组节奏。接着11个4小时工作坊从交互设计与电子基础经控制器与信号级Pure Data处理推进到触觉、电容传感、IMU与机器学习映射，其实作产物持续汇入个人项目原型。再经里程碑式作业与同伴用户研究迭代冻结功能，最终以公开博客文档、NIME格式论文与音乐会演出组成作品集接受考试评价。与系留式笔记本方案的关键差异是强制Bela嵌入式单机与连续传感模态并以排练就绪为通过标准，使评价锚定真实演奏可靠性而非屏幕原型演示。在单次4小时工作坊任务设置下，扩展实践环节的时长指标为100–110分钟，高于准备度检查环节的时长指标15–20分钟。该结论适用边界受限于小班、专用makerspace与Bela备件池及替换政策，大班协作或低成本系留替代的可靠性尚未验证，其部署依赖预烧录Bela套件与借用传感器等硬件保障并受益于极低且稳定的端到端延迟。

🔗 **开源资源**

- 代码相关资源：<https://github.com/stefanofasciani/SFApdLib> — 链接可访问（HTTP 200）
- 演示资源：<https://mct-master.github.io/interactive-music/> — 链接可访问（HTTP 200）
- 演示资源：<https://youtu.be/ySrjSWU_Mf8> → <https://www.youtube.com/watch?v=ySrjSWU_Mf8&feature=youtu.be> — 链接可访问（HTTP 200）
- 第三方资源：<https://bela.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://puredata.info/> — 链接可访问（HTTP 200）
- 第三方资源：<https://fritzing.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/porres/pd-else> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/porres/pd-cyclone> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/alexdrymonitis/neuralnet> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.st.com/en/mems-and-sensors/lsm9ds1.html> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 21. [不想画板子也不想调 USB，也能把传感器变成乐器：Seraph 的省力与代价](/posts/conference-nime-2026-conference-paper-id-nime2026-155-d2f33fed0f/)

> 英文题目：*[Seraph: An Educational Framework for Building Sensor\-Driven Interactive Art and Music Projects\.](/posts/conference-nime-2026-conference-paper-id-nime2026-155-d2f33fed0f/)*

标签：#教育 #开源工具 #信号处理 #音乐 #音频交互

评分：**6.6/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_155/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_155.pdf)

👥 **作者与机构**

- Solomon Rosenthal：机构信息未能从会议 PDF 纯文本可靠映射
- Ajay Kapur：机构信息未能从会议 PDF 纯文本可靠映射
- Andrew Piepenbrink：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作面向主技能在音乐与艺术而非工程的师生与创客，解决定制MIDI控制器与传感器驱动交互装置从想法到成品摩擦过大的问题，输入为按钮、编码器、电位器及光敏、距离、颜色等物理信号，输出为免驱动USB\-MIDI类兼容设备及LED、电机、螺线管反馈，难点在于布线路由、功率驱动与库兼容超出初学者工程经验。第一步由双8通道通道条式扩展板负责电源、地与信号路由并提供每引脚独立调理原型区，其整理后的规范I/O作为第二步输入。第二步由插座式ULN2003A达林顿阵列与三组I2C接口负责功率与扩展兼容，其中5路高电流开漏输出驱动大电流负载，默认全接I2C0以兼容硬编码至I2C0的Arduino库，高级用户可经焊锡跳线改接I2C1/I2C2，其硬件就绪信号进入第三步。第三步由单文件示例草图遵循传感器到MIDI管线负责去抖滤波、阈值边沿触发、MIDI映射与LED反馈，并经Teensyduino枚举为USB\-MIDI设备，从而完成从物理信号到音乐行为的闭环。相对MIOS/MIDIbox、HIDUINO、Bela与Teensy多端口MIDI扩展板的关键机制差异在于默认全接I2C0、可更换功率芯片与每引脚独立调理区的初学者容错组合，实际意义是降低布线与库兼容心智负担并支撑快速原型与长期制作。原文未提供可核对的关键定量结果。其结论适用边界受限于加州艺术学院界面设计课中头戴式空间手势乐器、光响应延迟器与颜色传感唱机三例定性原型，尚未验证学习增益与长期可靠性。原文未披露训练、推理或部署成本，本工作不含机器学习训练。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Calarts-Creative-Computing/SERAPH> — 链接可访问（HTTP 200）
- 复现相关资源：<https://creativecomputing.calarts.edu/seraph/> — 链接可访问（HTTP 200）
- 复现相关资源：<https://github.com/Calarts-Creative-Computing/SERAPH> — 链接可访问（HTTP 200）
- 第三方资源：<https://creativecomputing.calarts.edu/lumaphone/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 22. [不用步进音序器：五个旋钮的差分如何长出切分，三个光敏电阻又如何捏住音色](/posts/conference-nime-2026-conference-paper-id-nime2026-160-8b735ea35b/)

> 英文题目：*[Algorithmic Drum Machine with Light Dependent Timbre Control\.](/posts/conference-nime-2026-conference-paper-id-nime2026-160-8b735ea35b/)*

标签：#信号处理 #音乐 #音频交互 #音乐生成

评分：**6.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_160/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_160.pdf)

👥 **作者与机构**

- Nikhil Bullock：机构信息未能从会议 PDF 纯文本可靠映射
- Charalampos Saitis：机构信息未能从会议 PDF 纯文本可靠映射
- Anna Xambó：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

传统步进音序器与数字音频工作站时间线倾向于固定长度循环，使缺乏打击乐技巧的表演者难以实时生成复杂多变的节奏，该文输入为5路旋钮位置与3路光敏电阻信号，输出为连续演化的打击乐音频流。为此方法链分为四步：第一步由Arduino采集旋钮与光照数据并送入SuperCollider，第二步由确定性差分映射算法对旋钮数组取尾段 pairwise绝对差值，其输出同时进入乐器选择与时值映射，第三步将该差值映射为0至4的鼓乐器编号与1至32个十六分音符休止数以驱动循环播放，第四步由双算子频率调制FM鼓组完成音色合成，再经由回声加颗粒延迟效果器进行叙事塑形。与依赖多节奏或概率模型、机器学习插值的已有鼓机不同，该机制用参数间相对差同时驱动音色选择与时值结构，使单次旋钮转动改变整体循环长度并在4/4舞曲语境下保持切分感。原文未提供可核对的关键定量结果，仅以一次双人协作演出与UK Funky和Garage风格相似性作为定性证据。结论适用边界仅限单次合作演出中的即兴舞曲场景，尚未验证多人协作、长时间稳定性与新手可用性等外推范围。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://codeberg.org/nb-nik/fmplex_03> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 23. [键盘为何难逃钢琴形：NIME 二十五年键盘界面的惯性与具体化](/posts/conference-nime-2026-conference-paper-id-nime2026-17-d800d4e5ab/)

> 英文题目：*[Cultural Inertia and Technical Concretisation: A Systematic Review of Keyboard Interfaces at NIME\.](/posts/conference-nime-2026-conference-paper-id-nime2026-17-d800d4e5ab/)*

标签：#数据集 #系统综述 #音乐信息检索 #音乐 #音频交互

评分：**6.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：综述 | 主任务：#音频交互 | 主方法：#系统综述

会议来源：[官方记录](https://nime.org/proc/nime2026_17/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_17.pdf)

👥 **作者与机构**

- Yiming Li：机构信息未能从会议 PDF 纯文本可靠映射
- I\-Chieh Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Fabio Morreale：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以NIME2001至2025年文献为输入，输出键盘接口形态与交互模态演化图谱，难点在于键盘定义被触屏软件、空中手势与跨界挪用稀释且术语多义难以界定纳入边界。三源语料对齐先以官方会议爬虫、Proceedings Analyzer与社区书目库交叉去重构建全库，其输出进入关键词过滤以剔除仅作基线提及者。过滤候选再进入按作者贡献意图的人工纳入判定，形成104篇核心数据集，其输出进入归纳式主题分析划分软硬件形态与十三类功能模态。主题分布最后进入Simondon具体化与后现象学多稳态解释，将形态惯性从习惯论重述为技术个体化与文化沉淀机制。与既有编年计量或单技术个案相比，该链以全库对齐加意图纳入保证覆盖与精度，以模态分类加理论解释连接经验分布与文化机制。在NIME2001至2025语料下，新键盘乐器类别的纳入篇数指标为21篇，高于重构键盘乐器类别的纳入篇数指标5篇。其结论适用边界受限于仅覆盖明确以键盘为贡献的研究且依赖文本描述，未经触感实测与长期可用性验证，对非西方布局存在漏检风险；原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/superbowyiming/NIME-2001-25-Keyboard-Interface-Review> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/superbowyiming/NIME-2001-25-Keyboard-Interface-Review> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/jacksongoode/NIME-proceedings-analyzer> — 链接可访问（HTTP 200）
- 第三方资源：<https://nime-conference.github.io/NIME-bibliography/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 24. [把黑盒打开演奏：用网页可视化让 MDRNN 从工具变成应答伙伴](/posts/conference-nime-2026-conference-paper-id-nime2026-102-a0049824b8/)

> 英文题目：*[A Web Interface for Real\-Time Interaction with Machine Learning in Musical Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-102-a0049824b8/)*

标签：#RNN #用户研究 #实时处理 #音乐 #音乐生成

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#RNN

会议来源：[官方记录](https://nime.org/proc/nime2026_102/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_102.pdf)

👥 **作者与机构**

- Hongzhe Kevin Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Charles Patrick Martin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理呼叫响应式即兴中连续控制流生成，输入为演奏者在MIDI控制器上的短手势乐句与显式时间增量，输出为混合密度循环神经网络生成的延续乐句，难点在于低延迟因果感知缺失与黑盒预测不可解释导致的信任缺失。先由后端MIDI服务接收硬件MIDI消息为输入，负责经单回调完成落盘与入队，输出时间戳文件与模型输入队列，该队列直接作为下一步推理的数据来源。再由生成循环监听该输入队列并调用MDRNN推理为职责，输出按预测时间增量调度的MIDI事件，该事件流随即进入回放与可视化环节。最后由独立回放线程与前端协同消费上述事件流，负责按时间增量合成声音并经WebSocket同步粒子与条形图，输出视听因果一致的合奏呈现，前端另经浏览器Web MIDI直采输入以解耦后端延迟。相比仅提供控件或映射的既有界面，关键机制差异在于解析性条形图加沉浸式粒子的双路径可视化与记录编排训练演奏一体化的全生命周期闭环，其意义在于将操作者转为生成循环中的主动伙伴。在单次约40分钟家庭工作室即兴评测设置下，本系统的SUS得分为62\.50分，低于行业均值的SUS得分68分。结论适用边界限于5名校园参与者的短时小数据即兴，稀疏数据下个性化不足与舞台部署泛化尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/cpmpercussion/impsy> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.ableton.com/en/live/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.apple.com/logic-pro/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.playfullearninglab.org/code-chords> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 25. [不用调音台，只看参考录音：笔记本如何告诉吉他手该调大还是调小](/posts/conference-nime-2026-conference-paper-id-nime2026-117-e06e640347/)

> 英文题目：*[Automatic Live Music Soundchecking with Reference Audio on a Laptop\.](/posts/conference-nime-2026-conference-paper-id-nime2026-117-e06e640347/)*

标签：#时频分析 #用户研究 #音乐 #音频交互 #音乐源分离

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#时频分析

会议来源：[官方记录](https://nime.org/proc/nime2026_117/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_117.pdf)

👥 **作者与机构**

- Matthew Keating：机构信息未能从会议 PDF 纯文本可靠映射
- Michael Casey：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

小型现场演出无调音台与调音师，贴近音箱的吉他手难以感知观众区平衡，个人参考录音中的混音意图也难以落地，系统需在笔记本内置麦克风拾取的混合声中给出可执行建议。SoLAR先以源分离将现场混合与参考录音分解为鼓、吉他、贝斯、人声四轨，再按Bark临界带计算每秒24带的感知乐器主导度以压缩混音摘要。24个频带神经网络以前一秒演奏开关映射参考混音的理想配比，与现场摘要作差得到混音差异，硬编码策略据阈值输出调大、调小或保持并经大图标界面提示吉他手。与已有自动现场混音直接控制调音台不同，该机制指导演奏者转动音箱旋钮或改变演奏力度，并允许即兴而不必复刻参考吉他声部。在60秒仿真片段设置下，\-60dB随机初始条件的增益偏差指标为\-60dB，低于\+60dB随机初始条件的增益偏差指标\+60dB，硬编码策略以总奖励分数显著优于随机游走与保持不动基线并使终态收敛至参考增益附近。该结论适用边界受限于单吉他四件套与响度控制，双吉他并入同一轨、欢呼混入人声及房间声学变化等情形尚未验证。推理开销上Demucs每段处理延迟可达九秒，测试硬件为2019款MacBook Pro笔记本内置麦克风。

🔗 **开源资源**

- 代码相关资源：<https://github.com/mbkeating/SoLAR> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.5281/zenodo.7817838> → <https://zenodo.org/records/7817839> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 26. [不用触摸琴键也能弹和弦：iXeRemin 把双手位置变成可见的复调乐器](/posts/conference-nime-2026-conference-paper-id-nime2026-136-561832249a/)

> 英文题目：*[iXeRemin: Designing a Polyphonic MR Instrument for Artistic Performance and Interaction\.](/posts/conference-nime-2026-conference-paper-id-nime2026-136-561832249a/)*

标签：#软件工具 #信号处理 #音视频 #音乐生成

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_136/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_136.pdf)

👥 **作者与机构**

- Gwangyu Lee：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

iXeRemin面向Apple Vision Pro上的无触摸复调表演，输入为双手空间追踪与捏合状态，输出为连续音频与开放声音控制外部流，难点在于同一表演手势内兼顾音高音色连续调节、和声切换与视觉可核对。手势接口先将右手映射为音高触发与颤音、左手映射为幅度与调频指数并以半透明边界盒划分盒内触发与盒外抑制，其输出进入以Swift与音频引擎实现的调频合成引擎生成连续调制声音。合成与手势参数同步进入开放声音控制网络层转发手位、指尖距离与合成参数至外部平台，指尖悬浮三维标签再回显幅度数值、音符开关与和弦名以闭环校准。相对早期虚拟现实与混合现实特雷门侧重单音教学可视化，该工作以左手食指拇指一至十八厘米六档直接选择单音与三和弦、小指拇指超五厘米扩展为七和弦，把复调选择内嵌于同一空间手势。在左手垂直高度映射条件下，图7示例a的幅度指标为0\.87，高于示例b的幅度指标0\.17。调制器固定二百二十赫兹、调频指数零至二十五连续可调并经包络平滑，正弦锯齿等波形可在设置窗切换以保持音色连续。适用边界受限于苹果头显单设备演示场景，尚未验证学习成本、手势精度与长时间合奏稳定性，遮挡或视场受限下可能显现失败条件。原文未披露训练、推理或部署成本

🔗 **开源资源**

- 代码相关资源：<https://github.com/gwangyu-lee/iXeRemin> — 链接可访问（HTTP 200）
- 演示资源：<https://apps.apple.com/app/ixeremin/id6746877322> → <https://apps.apple.com/cn/iphone/today> — 链接可访问（HTTP 200）
- 复现相关资源：<https://github.com/gwangyu-lee/iXeRemin> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 27. [骑行发声：在城市里移动演奏如何同时触及个人、群体与环境](/posts/conference-nime-2026-conference-paper-id-nime2026-14-d12af382e0/)

> 英文题目：*[Sonic Interactions as Situated Urban Practice with BIKES\.](/posts/conference-nime-2026-conference-paper-id-nime2026-14-d12af382e0/)*

标签：#用户研究 #空间音频 #环境声 #音频交互

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_14/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_14.pdf)

👥 **作者与机构**

- Henrik von Coler：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为亚特兰大汽车主导街区中异质且嘈杂的街道声景与在地骑行社群，输出为可移动的声学干预与集体聆听实践，实际难点在于骑行运动中维持多车声音同步并同时兼顾交通安全与偶遇观众的开放互动。方法链由四步构成：改装电动货运自行车搭载音响与计算触屏单元负责移动发声与现场交互，其状态经无线网状网络以开放声音控制协议汇聚实现去中心化同步，该同步信号再进入合成与界面层驱动多车声景与音乐播放，最后由策划路线串联高架桥隧道与绿道公园完成在地激活。与固定声音装置和单车播放相比，关键机制差异在于将车辆移动速度与轨迹本身作为空间复调与叙事节奏手段，并在个体聆听集体演奏与环境干预之间动态切换，具有揭示噪声污染与交通风险并庆祝地方特质的实际意义。原文未提供可核对的关键定量结果。该结论适用边界受限于一次有社群协作与占道护航的组织化骑行，对无社群支持或交通高风险城市的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/L42i/p2psc> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.pygame.org/> → <https://www.pygame.org/news> — 暂时无法访问（HTTP 502）
- 第三方资源：<https://opencv.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://l42i.music.gatech.edu/bikes> → <https://l42i.music.gatech.edu/bikes/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 28. [不重训模型也能玩两年：用重映射和小数据打开智能乐器设计空间](/posts/conference-nime-2026-conference-paper-id-nime2026-16-a845098027/)

> 英文题目：*[Opening the Design Space: Two Years of Performance with Intelligent Musical Instruments\.](/posts/conference-nime-2026-conference-paper-id-nime2026-16-a845098027/)*

标签：#RNN #端侧运行 #音乐 #符号音乐生成

评分：**6.5/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#符号音乐生成 | 主方法：#RNN

会议来源：[官方记录](https://nime.org/proc/nime2026_16/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_16.pdf)

👥 **作者与机构**

- Charles Patrick Martin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理将生成式人工智能嵌入现场电子乐器以实现人机共演的问题，输入为键盘音符与旋钮滑块等MIDI信号，输出为独立生成的音符与音色控制参数，难点在于低成本硬件上的实时响应与艺术家可控的数据闭环。方法链分三步：首先由树莓派上Python程序监听并记录MIDI输入并形成时间戳日志，其次由混合密度循环网络输出数值与时间增量以调度未来事件，最后经可配置映射发送至合成器或数字音频工作站并支持多设备路由。与大型离线作曲插件相比，关键机制差异在于以可重配的映射层替代重训练来发现交互，其实际意义是将交互设计转移到轻量映射与快速输入交织策略。在速度基准测试设置下，Raspberry Pi Zero 2 W的启动时间指标为114s，高于Raspberry Pi 5的启动时间指标38s。结论的适用边界受限于作者本人两年内15场独奏与合奏即兴场景，尚未验证其他风格乐手与模型长期演化效果。部署上最廉价硬件单价为15美元且可电池供电，推理延迟在小模型下可满足实时演奏但启动延迟仍较高。

🔗 **开源资源**

- 演示资源：<https://doi.org/10.5281/zenodo.19550146> → <https://zenodo.org/doi/10.5281/zenodo.19550146> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 29. [在装置内部做研究：光学声片制作中的内在实践](/posts/conference-nime-2026-conference-paper-id-nime2026-19-567528e5f1/)

> 英文题目：*[Immanent Practice: Accounts of Optical Sound Filmmaking\.](/posts/conference-nime-2026-conference-paper-id-nime2026-19-567528e5f1/)*

标签：#用户研究 #理论分析 #音视频 #音视频生成

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音视频生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_19/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_19.pdf)

👥 **作者与机构**

- Jasmine Butt：机构信息未能从会议 PDF 纯文本可靠映射
- Benedict Gaster：机构信息未能从会议 PDF 纯文本可靠映射
- Nathan Renney：机构信息未能从会议 PDF 纯文本可靠映射
- Tom Mitchell：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入是11位光学声电影人的半结构访谈、第一作者光化学实践与Pattern Organ改装经验，输出是对光声合成如何被做出的物质性解释，难点在于手艺知识缄默且散落在停产设备、改装线路与化学配方中并随暗房尺度与天气变化而变形。方法链分三步：先以附录B访谈指南围绕材料工具过程与失败理解采集叙事，再经手工转录打印剪碎重组与Obsidian编码熟悉数据形成切片标签，前一步叙事直接成为后一步重读素材。最后以转导、画格、差异、重复、化学五个胶片本体透镜作衍射互读，将编码切片与扫描声轨拼贴并置以显现装置内部关系。在闪烁变化速率相同的测试条件下，18 percent gray条件的灰度指标为18 percent，高于15 percent gray条件的灰度指标15 percent。与NIME既有物质转向相比，关键差异在于把意义安置在装置内部关系而非外部设计意图，强调修补与去工业化改装的持续分化，其实质意义是为数字乐器设计提供向内看装置的替代路径。结论适用边界受限于有共享暗房与代际口传的小型实验胶片社群，向数字乐器设计的直接外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://github.com/gguueesstt/OpticalSoundInterviews> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 30. [把轮廓变成频谱：预置合成如何让日常物件决定音色](/posts/conference-nime-2026-conference-paper-id-nime2026-34-3c3da19b0f/)

> 英文题目：*[The Readymade Synth: Prepared Synthesis with Everyday Objects\.](/posts/conference-nime-2026-conference-paper-id-nime2026-34-3c3da19b0f/)*

标签：#开源工具 #信号处理 #用户研究 #音乐 #音乐生成

评分：**6.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_34/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_34.pdf)

👥 **作者与机构**

- Antoni Rayzhekov：机构信息未能从会议 PDF 纯文本可靠映射
- Martin Murer：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入为置于直径40cm圆形传感面的任意日常物体剪影与49键MIDI键盘演奏，输出为复音加法合成声音，难点在于无标记几何到可演奏有音高音色的稳定映射以及开放性与精度的兼顾。方法链首先做视觉预处理，将轮廓质心归一、按尺寸自适应重采样并强制逆时针绕向，其输出的复信号直接进入下一步频谱分解。接着将轮廓横纵坐标视作复信号做傅里叶分解得到双向旋转频谱，再经奈奎斯特阈值交错压缩与响度补偿映射为振荡器频率比与幅度，最后由面积决定包络、极坐标位置决定混合与声像。相比先前将轮廓水平剖切拼接为波表的做法，该机制保留正负频率旋转方向不对称并以压缩而非丢弃保留高音细节，使齿轮听感粗糙而椭圆听感平滑，具有几何结构直接驱动音色的实际意义。在开发工作站24核Windows11、48kHz与256采样缓冲设置下，捕获到音色就绪加发声路径的延迟指标为约94ms，高于音符触发到发声路径的延迟指标约20ms。结论适用边界受限于与外部音乐家约20小时排练、三乐章结构即兴与15人开放排练的质性观察，跨用户学习曲线与感知一致性尚未验证。推理开销方面原文披露开发工作站硬件与最多64分音配置下增加物体约0\.5ms每物体、增加声部约0\.2ms每声部，前者延迟满足键盘实时演奏而后者属旋钮级延迟。

🔗 **开源资源**

- 第三方资源：<https://visualprogramming.net/> → <https://vvvv.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://supercollider.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 31. [不用钢琴也能调啸叫：拉森站如何把反馈变成可演奏的室内乐声部](/posts/conference-nime-2026-conference-paper-id-nime2026-35-2d7c1991c0/)

> 英文题目：*[The Larsen Station: A Customizable Module Setup for Integrating Electroacoustic Feedback in Chamber Music\.](/posts/conference-nime-2026-conference-paper-id-nime2026-35-2d7c1991c0/)*

标签：#信号处理 #音乐 #音频交互

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_35/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_35.pdf)

👥 **作者与机构**

- Maurilio Cacciatore：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该文输入是室内乐中依赖大钢琴共鸣且不稳定难定音的电声反馈，输出是可搬运可定音可记谱并与长笛协同的拉森站点现场系统，难点在于脱离大型声学设施后仍保持音高稳定与室内乐所需声压。先由共振激发步骤接收接触式扬声器与低频鼓单元的驱动信号，以聚苯乙烯板、注水玻璃罐、定音鼓与小鼓膜为谐振体产生可调振动，输出连续的窄带反馈声信号。再由近场拾取调制步骤接收该连续反馈声信号，以微型全向话筒贴边拾音与手势遮挡完成耦合强度与音色调制，输出调制后的连续反馈信号。最后由补偿扩展步骤接收该调制后的连续反馈信号，在Max与MMixte环境中完成均衡补偿、砖墙压缩与路由扩散，并以颗粒合成增厚与十六步音高序列移位，输出与长笛声部对位的合奏织体。在玻璃罐定音条件下，100 cl罐体条件的容量指标为100 cl，高于50 cl罐体条件的容量指标50 cl。相对拉森玻璃琴与钢琴共鸣箱方案，关键差异是以聚苯乙烯板解耦发生与扩散并以注水玻璃亥姆霍兹共鸣器实现可复现定音，使模块可重组搬运并具演奏可操作性。该结论适用边界受限于特定板材密度、摆位与演奏者参与，向多复音分离与低频可控外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://www.mauriliocacciatore.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://shop.bormiolirocco.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.hanatsumiroir.fr/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 32. [把 IDE 变成乐器：Coypu 管乐谱分发、Phausto 管合成发声](/posts/conference-nime-2026-conference-paper-id-nime2026-42-8cd543aae1/)

> 英文题目：*[Coypu and Phausto: accessible live sound coding with Pharo \.](/posts/conference-nime-2026-conference-paper-id-nime2026-42-8cd543aae1/)*

标签：#开源工具 #信号处理 #音乐 #音乐生成

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_42/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_42.pdf)

👥 **作者与机构**

- Domenico Cipriani：机构信息未能从会议 PDF 纯文本可靠映射
- Sebastian Jordan Montaño：机构信息未能从会议 PDF 纯文本可靠映射
- Stéphane Ducasse：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作要解决在Pharo通用集成开发环境内直接进行现场作曲与数字信号处理编程的问题，输入为现场编写的节奏型、旋律与合成器补丁描述，输出为发往外部音频引擎或内嵌数字信号处理的定时开放声音控制与乐器数字接口事件及连续声音，难点在于通用语言延迟调度的定时抖动、音频实时性与初学者可理解性难以兼顾。Coypu先将多种简写记谱与欧几里得、随机游走等变换转换为带门限与参数数组的序列器并由统一演奏时钟调度。演奏对象收到播放消息后委托给演奏器，其分步钩子在不同子类中把事件翻译为开放声音控制、乐器数字接口或内嵌调用并控制哑音独奏与速度，该输出直接进入下一步。Phausto最后把面向对象单元生成器经Faust盒接口组合为信号链并编译为可运行数字信号处理，默认暴露界面控件与参数设置接口供演出时调节。相对SuperCollider与TidalCycles，关键差异在于全反射对象模型允许演出中用检查器、浏览器与实时调试器检查并改写乐器类与方法，使工程工具本身成为乐器界面。在比萨机器人节工作坊评测设置下，最高年龄参与者的年龄指标为60岁，高于最低年龄参与者的年龄指标11岁。其适用边界受限于固定十六分音符公共细分、无每序列器独立细分及尚不支持多音色与控制变化信息的乐器数字接口实现，复杂变换与大规模作品外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/lucretiomsp/Coypu> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/lucretiomsp/phausto> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/lucretiomsp/MasterLu> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/pharo-contributions/pharo-sound> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/pharo-graphics/Bloc> — 链接可访问（HTTP 200）
- 第三方资源：<https://codeberg.org/musikinformatik/SuperDirt> — 链接可访问（HTTP 200）
- 第三方资源：<https://faustlibraries.grame.fr/> — 链接可访问（HTTP 200）
- 第三方资源：<https://mooc.pharo.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://advanced-design-mooc.pharo.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://days.pharo.org/index.html> — 链接可访问（HTTP 200）
- 第三方资源：<https://esug.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://iclc.toplap.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 33. [用球腔卡住啸叫：反馈陶笛以被动共振换取可演奏音高](/posts/conference-nime-2026-conference-paper-id-nime2026-53-7f3d3a2ff4/)

> 英文题目：*[Feedback Ocarina \- a DIY entry level instrument for feedback musicianship\.](/posts/conference-nime-2026-conference-paper-id-nime2026-53-7f3d3a2ff4/)*

标签：#教育 #信号处理 #音乐 #音频交互

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_53/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_53.pdf)

👥 **作者与机构**

- Krzysztof Cybulski：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

反馈陶笛要解决的输入是麦克风与扬声器构成的Larsen效应啸叫，输出是可按指法演奏的乐音，难点在于纯反馈音高极易跳变到高次谐波且受房间与电声链路牵引。方法链首先将动圈麦克风音头置入球形腔体制成可变频率亥姆霍兹共振器，使系统主共振被声学带通约束并输出滤波后信号进入压缩环节。然后手指开合改变等效开口总面积以移动共振频率，该机械控制直接决定反馈锁定点并进入环路增益稳定步骤。最后压缩单块与极性切换将环路增益与相位稳定在可演奏区间并送入有源音箱形成闭环。与管乐器式空气柱管道反馈相比，关键机制差异在于利用空气团共振而非空气柱共振，其基频占优而不易超吹的特性天然抑制了谐波跳变，具有免复杂数字处理的实际意义。在中尺寸陶笛1孔开放测试条件下，反馈模式的峰值频率指标为297 Hz，高于白噪声激励条件的峰值频率指标291 Hz，且1至5孔均随开口单调上升支撑共振主导音高结论。该结论适用边界受限于特定单路密闭音箱近距离条件，换用带倒相孔二分频音箱在高频段即失锁且音高随话筒与音箱距离显著漂移，属尚未验证的外推范围。原文未披露训练、推理或部署成本，本研究无机器学习成分。

🔗 **开源资源**

- 代码相关资源：<https://github.com/HybridInstrumentsLab/FeedbackOcarina> — 链接可访问（HTTP 200）
- 第三方资源：<https://people.cs.vt.edu/sangwonlee/aural-cavity/> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.5281/zenodo.13904810> → <https://zenodo.org/records/13904810> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 34. [亲密与广袤之间：用骨传导耳机与穹顶扬声器写分层现场](/posts/conference-nime-2026-conference-paper-id-nime2026-72-af38fd5f0b/)

> 英文题目：*[Between Intimacy and Immensity: Composing Multilayered Immersive Live Music for Bone Conduction Headphones and a Speaker\-Dome Array\.](/posts/conference-nime-2026-conference-paper-id-nime2026-72-af38fd5f0b/)*

标签：#信号处理 #多通道 #音乐 #空间音频信号 #音乐生成

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_72/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_72.pdf)

👥 **作者与机构**

- Nicola Giannini：机构信息未能从会议 PDF 纯文本可靠映射
- Andrea Gozzi：机构信息未能从会议 PDF 纯文本可靠映射
- Dominic Thibault：机构信息未能从会议 PDF 纯文本可靠映射
- Ana Dall'Ara\-Majek：机构信息未能从会议 PDF 纯文本可靠映射
- Kevin Gironnay：机构信息未能从会议 PDF 纯文本可靠映射
- João Sebastião Lessa Catalão：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究处理在同一音乐厅同时向百人提供亲密内听与共享外放的作曲难题，输入是现场乐器、嗓音与电子声，输出是经骨传导耳机与穹顶扬声器阵列加开放耳道声学声分层扩散的多层聆听体验，难点在于两层频响失配、电平遮蔽与注意力过载。方法链分三步推进：先以覆盖初接触、意图策略、感知发现与限制建议的多作者自我民族志收集五位作曲家反思，其输出的文本反思进入归纳步骤，提炼出亲密至宏大连续体与频带偏好、电平阈值、时间对齐等技术约束。归纳得到的约束再进入转写检验步骤，被写成声部独占、跨层处理、层间轨迹延迟与显微声音增强等作曲策略，并在SAT公演与Zenodo现场录音中检验。在工作室探索与SAT公演验证场景下，Dall’Ara\-Majek报告的BCHs高频指标为15 kHz，高于Giannini个人工作范围的高频指标13 kHz。与既有增强现实音频偏重单层叠加不同，该机制把层间模糊、电平阈值与声源不确定性本身当作对位声部来写作，使内外听觉在可定位与不可定位之间连续移动。其实践结论适用边界受限于配备立体声无线骨传导馈送与大型穹顶阵列的同场音乐会场景，向耳机追踪或个性化分流的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://zenodo.org/records/19826060> — 链接可访问（HTTP 200）
- 数据相关资源：<https://doi.org/10.5281/zenodo.19826060> → <https://zenodo.org/records/19826060> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 35. [抛球晚两秒才响：音乐杂耍如何记谱与仿真](/posts/conference-nime-2026-conference-paper-id-nime2026-76-75883c3c8f/)

> 英文题目：*[JuggLing\-a\-Ding: Design and Development of a Musical Juggling Toolkit\.](/posts/conference-nime-2026-conference-paper-id-nime2026-76-75883c3c8f/)*

标签：#开源工具 #用户研究 #音乐 #符号音乐生成

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#符号音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_76/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_76.pdf)

👥 **作者与机构**

- Léo Kulinski：机构信息未能从会议 PDF 纯文本可靠映射
- Wendy E\. Mackay：机构信息未能从会议 PDF 纯文本可靠映射
- Michel Beaudouin\-Lafon：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolas M\. Thiéry：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理铃球音乐杂耍的创作难题，输入为整场演出的几何布局与音乐性抛接序列，输出为可交互的三维动画与同步声音，难点在于抛与响之间存在秒级延迟且旋律顺序与抛接顺序经常错位，杂耍者难以靠听觉记忆动作。记谱解析先将音乐杂耍Siteswap与局部拍、秒、全局拍与小节等多时间制统一为全局拍，为后续仿真提供统一时钟。状态仿真再逐拍跟踪每球空中、在手与在桌位置并生成梯图，其事件输出直接进入时空实例化以计算真实时间、三维坐标与手部曲线。时空实例化结合演出几何求解抛接时刻与位置并生成手部贝塞尔曲线，渲染播放最后由Three\.js驱动动画并同步外部时钟与回调。在NIME会期日程设置下，闭幕日期的日期指标为26日，高于开幕日期的日期指标23日。相比传统Siteswap只记抛掷高度，本文引入持球、放取桌球、手内倒球、指定抛哪颗球、静音接球与变速轨道机制，使长时非重复旋律可被人类书写与机器仿真。该结论适用边界受限于固定站位与有限球数的铃球场景，尚未验证多节奏与移动走位等外推情形。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/kunchtler/mj-lib> — 链接可访问（HTTP 200）
- 演示资源：<https://leokulinski.fr/juggling-a-ding> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 36. [时隔十二年重启图灵测试：规则与神经网络谁更会弹钢琴](/posts/conference-nime-2026-conference-paper-id-nime2026-79-9dd1d1fe13/)

> 英文题目：*[RenCon 2025: Revival of Expressive Performance Rendering Competition\.](/posts/conference-nime-2026-conference-paper-id-nime2026-79-9dd1d1fe13/)*

标签：#主观评测 #音乐信息检索 #音乐 #符号音乐生成

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#符号音乐生成 | 主方法：#主观评测

会议来源：[官方记录](https://nime.org/proc/nime2026_79/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_79.pdf)

👥 **作者与机构**

- Huan Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Taegyun Kwon：机构信息未能从会议 PDF 纯文本可靠映射
- Anders Freiburg：机构信息未能从会议 PDF 纯文本可靠映射
- Junyan Jiang：机构信息未能从会议 PDF 纯文本可靠映射
- Hayeon Bang：机构信息未能从会议 PDF 纯文本可靠映射
- Hyeyoon Cho：机构信息未能从会议 PDF 纯文本可靠映射
- Gus Xia：机构信息未能从会议 PDF 纯文本可靠映射
- Akira Maezawa：机构信息未能从会议 PDF 纯文本可靠映射
- Simon Dixon：机构信息未能从会议 PDF 纯文本可靠映射
- Dasaem Jeong：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

表情演奏渲染以MusicXML乐谱为输入，输出带有人性化timing、力度与踏板的人性化演奏MIDI或音频，难点在于主观审美难以标准化且MIDI力度无绝对声压含义、不同Disklavier琴响应缺乏校准。先以全部投稿乐谱渲染为输入做线上异步海选，职责是广度筛选并以专长加权投票排序，其输出的入围名单直接作为参赛资格进入现场赛。再以入围系统与48小时限时发放的未见新曲为输入做限时渲染，职责是考验泛化能力并统一物理琴录制以消除乐器差异，其输出的统一琴演奏录音进入最终裁决环节。最后以统一录音为输入做音乐会盲听与计算分析，职责是用5点Likert量表打分并辨认人类基线，随后用DualDTW对齐MIDI提取力度与速度参数以关联评分。相对2002\-2013年多用Chopin与Mozart固定曲目加现场评比的做法，本届新增异步线上平台、匿名随机播放与统一物理琴流程，兼顾跨时区参与广度与现场真实感。在线上预选与现场决赛评测设置下，决赛轮的研究者占比指标为71\.7%，高于预选轮研究者占比指标的54\.5%。人类演奏获4\.40/5\.0且36/48名听众正确辨认人类，力度分布宽度与听众评分呈最清晰正相关而大幅速度波动无稳定收益。结论适用边界受限于西方古典钢琴独奏短时音乐会场景，大规模曲目与长期聆听效果尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ismir-mirex/RenCon2025> — 暂时无法访问
- 演示资源：<https://ren-con2025.vercel.app/> — 暂时无法访问
- 演示资源：<https://ren-con2025-audition-page.vercel.app/> — 暂时无法访问
- 第三方资源：<https://github.com/erwald/midihum> — 链接可访问（HTTP 200）
- 第三方资源：<https://musescore.com/user/> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 37. [把训练装进乐器里：用演奏手势调映射的 NISPS 与双自述研究](/posts/conference-nime-2026-conference-paper-id-nime2026-59-73cbd5ed18/)

> 英文题目：*[Tuneable Machine Learning in Musical Instruments: A Duoethnography\.](/posts/conference-nime-2026-conference-paper-id-nime2026-59-73cbd5ed18/)*

标签：#开源工具 #强化学习 #端侧运行 #音乐 #音频交互

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#强化学习

会议来源：[官方记录](https://nime.org/proc/nime2026_59/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_59.pdf)

👥 **作者与机构**

- Chris Kiefer：机构信息未能从会议 PDF 纯文本可靠映射
- Adam Staff：机构信息未能从会议 PDF 纯文本可靠映射
- Andrea Martelloni：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文针对可调机器学习乐器中演奏控制到多维声音参数的映射设计，输入为双轴操纵杆手势与对输入音频的机器聆听分析特征，输出为饱和、参量均衡、滤波、压缩、延迟与音高变换等合成效果参数，难点在于嵌入式小界面下数据整理断裂、训练与演奏割裂且难以兼顾大空间快速探索与精细校正精度。演奏者边演奏边探索使当前控制与声音参数组合进入交互，演奏者以奖励与惩罚给出偏好反馈并写入回放记忆形成训练信号。记忆采样器从回放记忆抽取小批量样本驱动单步优化，多层感知机据此更新从控制到声音参数的非线性映射并即时可奏。相对先采集整理数据再集中训练的交互式机器学习，该神经交互式参数空间塑造系统把训练推理控制内嵌于乐器并合并为连续对话，以偏好代替数据整理降低对机器学习理论依赖并支撑原型式协同探索。在NIME会期评测设置下，起始会期的日程指标为23日，从23日升至结束会期的日程指标26日。结论适用边界受限于两套MEMLNaut原型与两位研究型使用者的长期磨合，向新手、舞台快速换场与服务型制作的外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/MusicallyEmbodiedML> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 38. [把力度、角色与延迟一起改写：jam\_bot 如何实现可接话的音乐对话](/posts/conference-nime-2026-conference-paper-id-nime2026-73-2adcb39c35/)

> 英文题目：*[Enhancing Expressive Musical Conversation in the jam\_bot\.](/posts/conference-nime-2026-conference-paper-id-nime2026-73-2adcb39c35/)*

标签：#Transformer #高效推理 #实时处理 #音乐 #符号音乐生成

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#符号音乐生成 | 主方法：#Transformer

会议来源：[官方记录](https://nime.org/proc/nime2026_73/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_73.pdf)

👥 **作者与机构**

- Lancelot Blanchard：机构信息未能从会议 PDF 纯文本可靠映射
- Perry Naseck：机构信息未能从会议 PDF 纯文本可靠映射
- Katherine Liang：机构信息未能从会议 PDF 纯文本可靠映射
- Joel Tan：机构信息未能从会议 PDF 纯文本可靠映射
- Heidi Lei：机构信息未能从会议 PDF 纯文本可靠映射
- Cheng\-Zhi Anna Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Joseph Paradiso：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理现场钢琴输入到富有表现力符号音乐响应的实时生成，难点在于原系统缺失力度维度、交互受限于固定速度与固定轮换、外部输出设备延迟破坏节奏连贯性。方法链分四步：先将每音符从起音时长音高三元组扩展为增加力度词元的四元组并微调预训练AMT以获得力度表达，其输出进入基于ggml的手写计算图推理后端以承载更长序列的实时生成。再由脚踏开关连续控制器信号标注的双乐器呼叫响应微调限定演奏者提示与系统回答的角色分工，最后由延迟补偿调度器利用超实时生成换取的提前量将生成音符提前发送以对齐物理发音。相比延续式生成的原系统，新机制在训练时用显式控制信号划分双声部角色，并在输出时区分全局偏移与逐音高逐力度查找表延迟，从而支持无固定速度的自由呼叫响应与可切换设备的节奏对齐。在吞吐评测设置下，416M参数模型在ggml CUDA后端的Tokens/second指标为247\.65，高于ONNX CUDA后端的Tokens/second指标124\.84。该结论适用边界受限于与Jordan Rudess合作录制的约3\.5小时无固定速度独奏语料与特定自动钢琴链路验证，尚未验证跨风格与跨设备泛化。推理开销方面原文以吞吐与延迟形式披露成本，还报告了170M模型与Metal及CPU后端的多档延迟与吞吐实测。

🔗 **开源资源**

- 演示资源：<https://jambot.media.mit.edu/nime2026> — 暂时无法访问
- 第三方资源：<https://ggml.ai/> — 链接可访问（HTTP 200）
- 第三方资源：<https://onnxruntime.ai/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 39. [把传感与表面分开：为照护合奏重建触感与低延迟的模块乐器](/posts/conference-nime-2026-conference-paper-id-nime2026-145-fd5a494b85/)

> 英文题目：*[Peripersonal Modular Interfaces for Care Ecologies: Decoupling Sensing and Surface in Accessible Digital Musical Instruments\.](/posts/conference-nime-2026-conference-paper-id-nime2026-145-fd5a494b85/)*

标签：#医疗音频 #用户研究 #实时处理 #音乐 #音乐生成

评分：**6.3/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_145/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_145.pdf)

👥 **作者与机构**

- Wing Hei Cheryl Hui：机构信息未能从会议 PDF 纯文本可靠映射
- Patrick Hartono：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作面向社区合奏中复杂运动障碍乐手的输入输出难题，输入是按压与触摸等有限手部或足部动作，输出是可即时感知的持续性低音音色与私人触听反馈，难点在于同时满足表达自主性、卫生快装与电缆安全。方法链分四步：先以民族志与访谈确立无线、无缆、可消毒与高灵敏反馈等约束并从导电织物转向材料智能，再以 TPU95 晶格构建被动力对提供本体感觉确认，接着以星型无线传感加混合音频链路分离控制与监听，最后以立方感知映射与加法合成实现安全探索区与持续音床。相比系留式控制器与屏上管理，该机制把合成与力度阈值保留在乐手侧而非主持人后台。在社区工作坊的 50 次端到端示波评测中，平均延迟约为 7 ms 且最大低于 12 ms，参与者报告即时发声与无缆安全感。结论仅适用于 4 块五声音阶的短时个体试奏，尚未验证拥挤频谱下多 tile 合奏与长时参与。原文未披露训练、推理或部署成本，机器学习训练不适用。

🔗 **开源资源**

- 第三方资源：<https://www.ohmi.org.uk/about.html> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 40. [可读脚本做中间层：Satie 让空间生成音频可逐行改](/posts/conference-nime-2026-conference-paper-id-nime2026-157-f0ca598a93/)

> 英文题目：*[Satie: A Creativity Support Tool for Authoring Spatial Generative Audio\.](/posts/conference-nime-2026-conference-paper-id-nime2026-157-f0ca598a93/)*

标签：#软件工具 #检索增强 #空间音频信号 #音频生成

评分：**6.2/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频生成 | 主方法：#检索增强

会议来源：[官方记录](https://nime.org/proc/nime2026_157/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_157.pdf)

👥 **作者与机构**

- Mateo Larrea：机构信息未能从会议 PDF 纯文本可靠映射
- Richard Boulanger：机构信息未能从会议 PDF 纯文本可靠映射
- Yuhao Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Jerry Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Pedro Sodre：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

沉浸空间生成音频需把随机调度、逐事件参数变化与平滑三维运动落成可在浏览器实时运行的实现，在游戏引擎原生音频与数字音频工作站中面临脚本冗长与迭代摩擦大的难点。Satie以音频优先的纯文本领域专用语言为中间表示，先由解析器把脚本转为语句对象并维护实时音轨集合，再由Web Audio引擎解释执行并做采样准确调度与效果链渲染。大语言模型负责把自然语言转为领域专用语言代码与过程化轨迹函数，材料侧按已加载样本、社区库检索、文本到音频合成兜底的级联方式解析，三维视口与头相关传输函数渲染保证所见即所得并支持离线导出。与直接生成不透明应用代码不同，该语言用音量、音高与循环等设计师词汇组织独立属性块，使针对单属性的重提示与局部修改不波及其他元素，保留创作意图与可读性。在3个演示场景任务下，Satie方法的代码行数指标为30，低于C\#基线的代码行数指标141。该差距源于把协程调度、声源池化、平滑噪声运动与淡入淡出逻辑做成一等原语的结构优势，而非基线冗余，因比较时已要求同一大语言模型在相同需求下最小化代码长度。该结论适用边界受限于作者自选的三场景与行数指标，尚未验证任务耗时、输出质量与长期可维护性，且管线延迟与浏览器音频约束带来推理开销，简单与复杂提示的代码生成延迟分别为1600与4200毫秒。

🔗 **开源资源**

- 演示资源：<https://satie.app/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 41. [把身体转成轴心：Ehecatl 如何用方位、倾斜与风车气流驱动合成](/posts/conference-nime-2026-conference-paper-id-nime2026-39-a6316286d1/)

> 英文题目：*[Ehecatl: A Frugal Digital Wind Instrument Inspired by Aztec Cosmogony\.](/posts/conference-nime-2026-conference-paper-id-nime2026-39-a6316286d1/)*

标签：#开源工具 #信号处理 #端侧运行 #音乐 #音乐生成

评分：**6.2/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.6/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_39/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_39.pdf)

👥 **作者与机构**

- Manuel Ruiz：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该文任务是以呼吸气流与身体朝向为输入，在无需外部电脑的独立硬件上实时合成数字风乐器声音输出，难点在于以低延迟维持连续发声的同时让三百六十度方位导航具有可重复的音乐意义。方法链第一步由三维打印风车将气流转为微电压并经十六位模数转换进入微控制器，形成呼吸能量入口。第二步由磁力计与惯性测量单元将绝对罗盘方位与倾斜翻滚转为加法振荡器组的交叉淡化与八度调制，其输出直接进入下一步的谐波控制。第三步由内部合成引擎完成加减法合成滤波与压缩，并经音频接口输出至内置扬声器，形成独立发声。与传统压力传感加相对手势控制器相比，该机制差异在于用机械惯性与绝对方位替代线性压力与相对位置，从而以湍流衰减与神圣地理式和声获得具身仪式感。在方位映射任务下，西向的音程偏移指标为\+28半音，高于东向的音程偏移指标\+12半音。结论适用边界限于单人仪式化即兴表演场景，尚未验证多人合奏与长时间稳定性下的听众可辨识度。部署硬件基于低成本微控制器与现成传感器实现独立供电，延迟表现为无需外部电脑的低延迟独立演奏。

🔗 **开源资源**

- 代码相关资源：<https://github.com/manoxs/Ehecatl> — 链接可访问（HTTP 200）
- 复现相关资源：<https://github.com/manoxs/Ehecatl> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/algomusic/M16> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/algomusic/MultiControl> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 42. [舞者身体如何实时转向音乐 Transformer：Con Moto 的可配置代理](/posts/conference-nime-2026-conference-paper-id-nime2026-7-1ccf03530e/)

> 英文题目：*[Con Moto: Embodied Steering of Music Transformers for Live Dance Improvisation\.](/posts/conference-nime-2026-conference-paper-id-nime2026-7-1ccf03530e/)*

标签：#Transformer #实时处理 #音乐 #符号音乐生成

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#符号音乐生成 | 主方法：#Transformer

会议来源：[官方记录](https://nime.org/proc/nime2026_7/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_7.pdf)

👥 **作者与机构**

- Zhixing Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Heidi Lei：机构信息未能从会议 PDF 纯文本可靠映射
- Cheng\-Zhi Anna Huang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Con Moto面向双人舞蹈即兴，以深度相机估计的舞台位置、活动量与动作模体为输入，输出多声部符号MIDI与八通道空间化音频，难点在于同时维持音乐连贯性、可舞性与低延迟响应。相机分析进程先从关节轨迹提取位置、活动水平与显著运动模式，并经OSC以交互速率发送至中枢；Max/MSP中枢再对特征滤波平滑与量化，转为音高范围、乐器配置与和声等高层控制消息后送入生成模型。微调后的前瞻音乐Transformer负责符号生成与调度，并由Ableton按运动能量渲染力度音色与空间位置后回放给舞者形成闭环，其中解码以舞台位置相关的音高掩码直接限制采样分布，以六个半音以上变化才触发再生并保留未来二百五十毫秒已生成内容抑制抖动，另以色度编码器经交叉注意力注入大小调和声条件使音高选择跟随和声上下文。与离线迭代扩散类动作到音乐方法不同，该工作坚持在MIDI域推理时改写分布而非优化隐空间，从而兼顾可解释控制与实时可舞所需的节奏稳定性。在哈佛音乐厅两幕双人备演评测场景下，现场观众人数指标为约70人，高于自愿问卷受访者人数指标的6人。该结论适用边界受限于哈佛音乐厅约七十人面前的两幕双人备演剧本，尚未验证开放即兴、更多舞者与非西方风格的外推能力，而推理开销与延迟方面古典独奏可在交互速率下连贯生成，三乐器以上合奏需大幅降低输出密度才能维持实时，吞吐与延迟未做数值披露。

🔗 **开源资源**

- 演示资源：<https://con-moto-nime.github.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://openreview.net/forum?id=EBNJ33Fcrl> → <https://openreview.net/challenge?redirect=%2Fforum%3Fid%3DEBNJ33Fcrl> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 43. [按键交给机器呼吸留给人：4 支萨克斯重奏的半自动增强](/posts/conference-nime-2026-conference-paper-id-nime2026-104-5bcb2a0484/)

> 英文题目：*[Robo\-Sax Quartet: A Semi\-Automatic Robotic Saxophone System for Augmented Ensemble Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-104-5bcb2a0484/)*

标签：#教育 #用户研究 #音乐 #音频交互

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_104/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_104.pdf)

👥 **作者与机构**

- Gou Koutaki：机构信息未能从会议 PDF 纯文本可靠映射
- Masatoshi Hamanaka：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为四声部乐曲序列与演奏者的吹气咬合吐音，输出为原声四重奏合奏，难点在于高音中音次中音上低音管体尺寸键阻力持管姿势差异大且合奏对时序同步敏感。方法分三步：先由转换工具把标准MIDI预处理为含吐音替代指法八度键时序的机器人优化序列并编码于正常音域外音符区。接着游戏式界面以60 fps视觉提示加单耳click经ESP\-NOW无线分发到四台乐器实现同步。最后乐器端混合驱动机构拉线闭键靠键簧回弹开键由人类同步供气完成发声。相对全自动吹奏机器人，该划分只接管音高键而保留气息咬合表达，兼顾降低指法负担与维持原声具身性。在高音管按键延迟评测下，机器人系统的延迟指标为约25 ms，低于有经验演奏者手动操作的延迟指标约50 ms。结论适用边界在于固定速度排练曲目稳定，变速跟随与细腻表情协同尚未验证。硬件部署上系统重约2\.1 kg并需腰包式7\.4 V供电，无线通信延迟约5 ms。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 44. [三人合奏不散架：受限角色与脚下振动如何托住新手协作](/posts/conference-nime-2026-conference-paper-id-nime2026-138-794157e942/)

> 英文题目：*[Feeling Connected: Designing Instruments and Haptic Feedback for Collaborative Music Exhibits\.](/posts/conference-nime-2026-conference-paper-id-nime2026-138-794157e942/)*

标签：#用户研究 #音乐 #音频交互

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_138/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_138.pdf)

👥 **作者与机构**

- Paul Preuschoff：机构信息未能从会议 PDF 纯文本可靠映射
- Karl Deilmann：机构信息未能从会议 PDF 纯文本可靠映射
- Lea Schirp：机构信息未能从会议 PDF 纯文本可靠映射
- Jan Borchers：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

无排练陌生三人组走近即玩协作音乐展品的输入是三人同步即兴动作，输出是连贯合奏与社会连接体验，难点在于能动性不清、节奏对齐难与互不知晓对方行为。先以7人参与式设计工作坊确立直观性与平衡性约束及三类声音交互隐喻，其输出的角色划分直接决定三件乐器的分工研制。接着研制鼓触发打击乐、琴键启停管风琴和弦、风箱管连续调制铺底三角色乐器，经Arduino传感与MIDI至Ableton Live合成音频管线实现鲁棒触发与表现力。然后耦合脚下振动地板与乐器内激励器，以节拍脉冲、个体动作与群体混合三种触觉条件进行7组21人60分钟实验室对照评估，使反馈设计进入迭代闭环。相对已有单人新乐器研究，关键差异是将受限音高集与共享鼓贝斯伴奏支架同多感官社会线索绑定，以降低错音焦虑并维持面向同伴的视觉协调。在实验室对照评估条件下，年龄上限参与者的年龄指标为42岁，高于年龄下限参与者的年龄指标20岁。结论适用边界受限于受控室内成人短时演奏，尚未验证博物馆实地、儿童与长期使用外推性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://cdn-shop.adafruit.com/datasheets/MPR121.pdf> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.onsemi.com/download/data-sheet/pdf/qrd1114-d.pdf> — 链接不可用（HTTP 403）
- 第三方资源：<https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 45. [在电路内部替换元件：用可编程阻抗挪用哇音踏板](/posts/conference-nime-2026-conference-paper-id-nime2026-55-76f760c72a/)

> 英文题目：*[Z\-Wah: Appropriating the Wah via Digital Impedance Synthesis\.](/posts/conference-nime-2026-conference-paper-id-nime2026-55-76f760c72a/)*

标签：#信号处理 #实时处理 #音乐 #音频交互

评分：**6.1/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_55/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_55.pdf)

👥 **作者与机构**

- Francisco Bernardo：机构信息未能从会议 PDF 纯文本可靠映射
- Andrew McPherson：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入是吉他经Dunlop Cry Baby GCB\-95谐振网络的模拟电压，输出是经混合谐振与反馈重塑后的音频，难点在于保留踏板加载、谐振峰与非理想饱和等互易动力学而非只做外部参数控制。方法链先以电压控制电流源形式在电感与电阻节点嵌入可编程二端元件，负责感知节点电压并回灌对应电流，形成双向边界。其输出电压进入FPGA单采样嵌入式数字信号处理，负责把连续时间导纳经预畸变双线性变换离散为实时电流指令并经DAC回灌电路。再通过接地与浮地两种边界放置与辅助直流偏置扰动，负责调节耦合强度并在仿真与非物理失稳之间切换演奏材料。在扫频电容改装设置下，0\.022 μF改装方案的电容指标为0\.022 μF，高于0\.015 μF改装方案的电容指标0\.015 μF。与端到端虚拟模拟或数字电位器式增强相比，关键机制差异是边界本身是双向阻抗而非单向映射，电压与电流相互决定因而天然形成反馈，失稳与噪声可成为演奏材料。结论适用边界受限于该款哇音踏板谐振节点的定性探索，跨乐器链、跨温度漂移的可重复性与长期稳定性尚未验证，高频自振荡等失败条件已被观察为材料。硬件实现上以16位转换器与DE10\-Lite FPGA实现706 kHz单采样与约2 us端到端延迟，推理开销仅披露该延迟与采样率，训练成本与功耗吞吐尚未披露。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 46. [把潜在空间当作演奏面：一个三维实体控制器如何权衡探索与可复现](/posts/conference-nime-2026-conference-paper-id-nime2026-58-2c538dbc1d/)

> 英文题目：*[Probing Latent Space Interactions with Real\-time Generative Audio Models Through a Physical Controller\.](/posts/conference-nime-2026-conference-paper-id-nime2026-58-2c538dbc1d/)*

标签：#生成模型 #实时处理 #音乐 #音频交互

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#生成模型

会议来源：[官方记录](https://nime.org/proc/nime2026_58/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_58.pdf)

👥 **作者与机构**

- Domenico Stefani：机构信息未能从会议 PDF 纯文本可靠映射
- Francesco Ardan Dal Rí：机构信息未能从会议 PDF 纯文本可靠映射
- Luca Turchet：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以二维触摸位置与下压深度实时操控生成式音频模型潜在空间，输入为触摸面XY与飞行时间距离构成的三维手势，输出为RAVE连续神经音频与GrooveTransformer鼓组HVO节奏，难点在于潜在维度纠缠且无语义标签，难以兼顾可探索性与可复现性。方法链第一步由弹簧悬浮触摸面与飞行时间传感器经Arduino串口采集三维控制信号并送入上位机。第二步针对三例模型分别处理：RAVE做直接连续映射，MT\-GEN\_DDSP经t\-SNE降维加多层感知机升维实现音色簇连续遍历，GrooveTransformer以密度等语义描述子约束自编码器并做最近邻检索解码。第三步将处理结果回送至16x16 LED矩阵，分别显示访问热图衰减、深度切片音色簇地标与未来小节预览，使上一步的潜在位置进入下一步的视觉预期。与默认旋钮映射相比，关键差异在于把可解释性做成演奏中的 situated视觉反馈而非事后说明，从而让导航与挪用成为一等设计对象。在RAVE潜在压缩评测设置下，8D配置的潜在维度指标为8，高于4D配置的潜在维度指标4。结论适用边界受限于三例模型的探索性演示，尚未验证纵向练习与跨演奏者学习下的鲁棒性与virtuosity外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/domenicostefani/latent-space-audio-controller> — 链接可访问（HTTP 200）
- 模型相关资源：<https://acids-ircam.github.io/rave_models_download> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/acids-ircam/nn_tilde> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 47. [软硬难两全：用可缝合的柔性基板把压电鼓点穿在身上](/posts/conference-nime-2026-conference-paper-id-nime2026-1-6d037a777f/)

> 英文题目：*[Body, Bend: Resolving the soft\-rigid paradox using 3D printing innovation\.](/posts/conference-nime-2026-conference-paper-id-nime2026-1-6d037a777f/)*

标签：#信号处理 #实时处理 #音乐 #音频事件检测

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音频事件检测 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_1/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_1.pdf)

👥 **作者与机构**

- S\. M\. Astrid Bin：机构信息未能从会议 PDF 纯文本可靠映射
- Nyokabi Kyriũki：机构信息未能从会议 PDF 纯文本可靠映射
- Alex Hofman：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理以身体为打击面的可穿戴乐器构建，输入为胸部与手掌的敲击手势，输出为可映射的声音与控制流，难点在于压电传感器需刚性稳定支撑而服装必须柔软贴身并随动。方法先以柔性热塑性聚氨酯打印背面镂空、带超薄缝合边的基底，用局部稳定固定压电体并保持全局柔顺，该稳定基底作为结构层进入服装集成。接着将背心与手套基底缝入皮质服装，并以仿藤编织线缆管理连接，使传感层成为可维护的服装基础设施并向电子系统输送胸部加左右手三路并行信号。最后由背部Bela Mini多通道系统实时提取起音与力度，并输出音频加可自由映射的力度流，供作曲映射完成乐器闭环。在背部Bela Mini多通道组织设置下，系统并行通道组的数量指标为3，高于胸部合并基底片的数量指标2。相对直接贴肤、缝入织物或刚性盒装方案，关键差异在于用镂空TPU同时承担结构层与缝纫接口，使技术约束退为不可见背景而保留开放映射的艺术自由。结论适用边界受限于单名演奏者身体拓扑与皮革服装体系，尚未验证跨体型泛化与长期耐久，单基底硬件成本约0\.30美元，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://mimugloves.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 48. [地图越精确，聆听越缺席：空间音频为何重复作曲家—总谱—指挥家模型](/posts/conference-nime-2026-conference-paper-id-nime2026-147-6ea231bb63/)

> 英文题目：*[The Aural Cartographer's Dilemma\.](/posts/conference-nime-2026-conference-paper-id-nime2026-147-6ea231bb63/)*

标签：#文献综述方法 #理论分析 #空间音频 #空间音频渲染

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.3/1.5

排名：前50% | 文档类型：理论研究 | 主任务：#空间音频渲染 | 主方法：#文献综述方法

会议来源：[官方记录](https://nime.org/proc/nime2026_147/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_147.pdf)

👥 **作者与机构**

- Austin Franklin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是诊断空间音频渲染越精确越背离具身体验的原因，输入为从立体声到MPEG\-I的制式、工具与艺术实践，输出为听觉制图困境这一批判系谱与关系性转向的思辨方向，难点在于把技术连续性与作曲家\-乐谱\-指挥家哲学承诺分开。作者先梳理单元圆立体声像、多声道阵列、波场合成与Ambisonics的编码逻辑，说明每代如何把声音对象化为坐标并把听者预设为甜蜜点的忠实解码者。接着剖析HRTF双耳合成与MPEG\-I的编码器输入格式、比特流与渲染器管线，揭示作者控制权如何在场景图与元数据结构中被制度化，上一阶段的技术谱系输出直接作为本阶段标准批判的分析对象。然后引入关系性声音研究重读聆听位置、时间层积与社会共听，使上一步的技术批判进入具身与集体聆听的解释框架。在多声道阵列设置下，5\.1制式的指标声道表述为5\.1，高于Quadraphonic制式的指标声道表述为four。与强调定位精度进步的常规技术史相比，其机制差异在于不比指标而比控制权如何在接口与标准中被再生产，最后提出放弃单一甜蜜点、拥抱多重时间与协同注意，实际意义在于为生成式系统提供诊断而非新算法。该结论适用边界仅限于批判性解释而不构成可部署系统主张，跨文化聆听与多用户协商等外推尚未验证；原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 49. [搭积木做乐器：高脚手架保底、中观层放手让创意分叉](/posts/conference-nime-2026-conference-paper-id-nime2026-151-3aeea22cf2/)

> 英文题目：*[Constructing creativity: secondary school pupils designing and building musical instruments with Lego\.](/posts/conference-nime-2026-conference-paper-id-nime2026-151-3aeea22cf2/)*

标签：#教育 #用户研究 #音乐 #音乐理解

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音乐理解 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_151/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_151.pdf)

👥 **作者与机构**

- Ross Purves：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolas Gold：机构信息未能从会议 PDF 纯文本可靠映射
- Evangelos Himonides：机构信息未能从会议 PDF 纯文本可靠映射
- Dan Wang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究任务是以纯LEGO零件为输入，在单节限时工作坊内让中学生小组设计并拼搭出可发声、可合奏的声学打击乐器，输出为可演奏实物与终场合奏表演，难点在于ABS塑料声辐射弱、薄壁共鸣与拼插结构强度相互制约，且演奏人机工学进一步限制造型与把持方式。方法链分四步衔接：先布置混合零件库与三档可偏离脚手架说明，为拼搭提供起点与偏离空间；再由学生在限时内自由选用、组合或抛弃说明完成拼搭，其选择结果直接形成留存实物样本。接着对51件留存乐器做宏观类型划分，输出摇奏体、刮奏体与鼓的分布格局；最后抽取30件做中观与微观质性审计并回连问卷，以解释宏观分布的成因与说明偏离机制。与Wendell等人九课时混合材料方案的关键机制差异是单节课纯积木约束与可选层级说明，其实际意义在于分离脚手架供给与零件库存对拼搭自由度与宏观同质性的塑造作用。在4件摇刮混合乐器的说明选择统计场景下，选用灵感类说明的数量占比指标为100%，高于选用逐步指导类说明的数量占比指标的0%。该结论适用边界受限于短时校外工作坊打击乐情境，尚未验证音高乐器、长期学习增益与跨人群外推，薄壁大腔体的耐久性即为潜在失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 50. [不教复制的手册：用有意的省略让乐器知识活下去](/posts/conference-nime-2026-conference-paper-id-nime2026-52-7e867170aa/)

> 英文题目：*[The Obstruction Manual: Insights on Sharing Instrument Design Knowledge for Active Learning\.](/posts/conference-nime-2026-conference-paper-id-nime2026-52-7e867170aa/)*

标签：#教育 #数据集构建 #音乐 #音频交互

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.4/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频交互 | 主方法：#数据集构建

会议来源：[官方记录](https://nime.org/proc/nime2026_52/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_52.pdf)

👥 **作者与机构**

- Nicolò Merendino：机构信息未能从会议 PDF 纯文本可靠映射
- Raul Masu：机构信息未能从会议 PDF 纯文本可靠映射
- Giacomo Lepri：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入是摆锤式数字乐器Chowndolo的既有实物与历史设计文件，输出是由可折叠单页印刷手册与Zenodo在线资源库构成的二层文档生态，难点在于传递难以言说的制作技艺又不扼杀再创作。首先以设计日志、每周会议记录与即时消息为素材进行行动后反思，回溯手册从A到G共7个版本的决策与谈判，其输出的演变谱系进入下一步改写。接着将线性装配说明改写为分解视图与单页单主题结构，明确结构关系与信号链框图，该版式为策略性省略划定保留骨架。然后实施受控省略，隐去装配步骤、加工工艺、电子原理图细节、完整物料清单与FM合成及Pd与Bela教程，仅保留故障排查并用二维码指向外部仓库。与强调完整可复制的复刻认证与仓库模板范式相比，关键差异在于用生产性阻碍迫使读者调动自身经验补全缺口，把可持续性从忠实复刻转向持续再诠释。在手册版本演变过程的迭代设置下，G版的版本序号指标为7，高于A版的版本序号指标1。该结论的适用边界受限于面向资深制琴师的单乐器快照，跨新手与跨乐器的迁移效果尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://doi.org/10.5281/zenodo.19892548> → <https://zenodo.org/records/19892548> — 链接可访问（HTTP 200）
- 复现相关资源：<https://doi.org/10.5281/zenodo.19892548> → <https://zenodo.org/records/19892548> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 51. [皮肤即接口：从旋钮到触碰，残障主导如何重写协作乐器的玩法循环](/posts/conference-nime-2026-conference-paper-id-nime2026-78-bed2bbecca/)

> 英文题目：*[Crip Design for Collaborative Musical Interfaces: Iterative Development of Bot Party, a Touch\-Based Sonic Game\.](/posts/conference-nime-2026-conference-paper-id-nime2026-78-bed2bbecca/)*

标签：#游戏音频 #用户研究 #音乐 #音乐生成

评分：**6.0/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_78/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_78.pdf)

👥 **作者与机构**

- Phoenix Perry：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Bot Party的输入是三只手持控制器的惯性测量单元手势与玩家间皮肤接触，输出是由打击乐、旋律与持续音交织的三重协作声景，难点在于让慢性疼痛与非规范身体可持续合奏，并把社交触碰转化为稳定可感的演奏参数而非偶发干扰。先以研究者身体的疼痛疲劳体验为输入，承担自传式民族志首用户数据源职责，输出编码后的具身数据流；再以该数据流与当版原型为输入，承担十五个公共展览测试修改回路职责，输出经游玩检验的硬件改动并直接进入下版原型；最后以照片视频社交媒体与田野笔记为输入，承担转录开放编码软件细编码聚类校验与跨原型三角验证职责，输出稳定主题并回灌硬件迭代。在版本迭代制作条件设置下，版本4方案的构建耗时指标为1天打印，低于手工组装版本的构建耗时指标约40小时。与追求键位精度与个体炫技的已有数字乐器不同，该工作以相互依赖为架构前提，只有多人同时持握与触碰才能解锁完整声音，使照护与协作成为演奏条件。该结论的适用边界受限于公共展览中陌生人短时合奏，尚未验证家庭长期使用与跨残障泛化。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://miro.com/app/board/uXjVP8fkihE=/> — 链接可访问（HTTP 200）
- 第三方资源：<https://beatsaber.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.fursr.com/projects/painstation-2-5> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 52. [边听边拧合成器：连续动作强化学习如何做实时音色跟随](/posts/conference-nime-2026-conference-paper-id-nime2026-89-0c46c5ef45/)

> 英文题目：*[Autonomous Listening\-Based Synthesizer Control with Reinforcement Learning for Live Sound Matching\.](/posts/conference-nime-2026-conference-paper-id-nime2026-89-0c46c5ef45/)*

标签：#强化学习 #实时处理 #音乐 #音频生成

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.3/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#强化学习

会议来源：[官方记录](https://nime.org/proc/nime2026_89/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_89.pdf)

👥 **作者与机构**

- Vincenzo Madaghiele：机构信息未能从会议 PDF 纯文本可靠映射
- Stefano Fasciani：机构信息未能从会议 PDF 纯文本可靠映射
- Tejaswinee Kelkar：机构信息未能从会议 PDF 纯文本可靠映射
- Çağrı Erdem：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入是现场乐手的连续音频流，输出是对任意合成器参数的逐窗增量调制，难点在于目标持续漂移且域外音色不存在精确参数解，同时必须保持参数与音色轨迹连续并控制延迟。系统先将目标窗与合成器窗编码为音频描述子并拼接历史状态，以刻画运动目标与合成器当前状态的差异。再由柔性演员评论家策略输出有界参数变化并经由合成器渲染下一窗，使动作直接作用于声音生成环路。接着用多分辨率频谱与描述子距离类奖励驱动策略向当前目标靠近，推理时以长短时记忆预测网络补齐未知下一窗以消除累积延迟。相对离线声音匹配与离散步长跟随，关键机制差异在于训练与演出均在合成环路中进行连续控制并显式建模运动目标，实际意义是智能体可在演出中直接响应漂移目标而无需离线搜索。在域外音频语料匹配任务下，鼓组目标由Benjolin跟随时的多尺度频谱距离MSS指标为11\.485±3\.7，高于吉他目标由颗粒合成器跟随时的MSS指标10\.072±3\.2。该结论适用边界受限于所测四种合成器与所选描述子组合，复杂混沌合成器与色度类任务外推尚未验证。训练成本为在高端工作站约需5小时完成强化学习训练，推理开销需预留约10ms预测延迟以避免累积延迟。

🔗 **开源资源**

- 代码相关资源：<https://github.com/vincenzomadaghiele/RL-> — 链接不可用（HTTP 404）
- 第三方资源：<https://signalflow.dev/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 53. [现场演奏里情绪从哪来：同时记录演奏者与听众的身体信号和标注](/posts/conference-nime-2026-conference-paper-id-nime2026-118-7e8c52646a/)

> 英文题目：*[Emotion and Expressivity in Music Performance: A Multimodal Approach\.](/posts/conference-nime-2026-conference-paper-id-nime2026-118-7e8c52646a/)*

标签：#数据集构建 #生理信号 #音乐 #音乐理解

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音乐理解 | 主方法：#数据集构建

会议来源：[官方记录](https://nime.org/proc/nime2026_118/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_118.pdf)

👥 **作者与机构**

- Natalia Kotsani：机构信息未能从会议 PDF 纯文本可靠映射
- Spyros Kantarelis：机构信息未能从会议 PDF 纯文本可靠映射
- Vassilis Lyberatos：机构信息未能从会议 PDF 纯文本可靠映射
- Edmund Dervakos：机构信息未能从会议 PDF 纯文本可靠映射
- Giorgos Stamou：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该协议输入为现场独奏表演的多通道音频与视频、表演者与听众的脑电图、心电、皮肤电等生理信号及效价唤醒连续标注与分类情绪标注，输出为时间对齐的多模态数据集与本体知识图谱，难点在于跨模态同步、表达条件控制与生理噪声抑制。接待校准先采集暗室静息基线与共情问卷并验证传感器，其输出的基线与设备日志进入后续阶段以校正个体差异。随后依次执行基于七种调式的通用练习曲、个人自选曲目非表达与表达对照演奏及自由即兴三阶段，并同步采集生理信号与听众和表演者双侧标注，阶段顺序随机以缓解疲劳与标注漂移。在多模态同步采集设置下，心电与皮肤电传感器的采样指标为500 Hz，高于脑电头带的采样指标250 Hz。最后以GEMS\-9分类标注与表演者访谈补充表达意图，并将分阶段平均后的生理与情绪特征进行描述性比较，其关系仅解读为探索性共变而不作因果推断。与采用预录刺激的已有数据集的关键机制差异在于双侧实时采集与表演者可控表达对照，使意图表达与诱发情绪的不一致可被直接比较，为增强演奏过程的AI应用提供基础。结论适用边界受限于小规模独奏录音室探索性描述，不支持因果推断与跨文化外推，且干电极低频局限与西方调式偏置构成失败条件，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://witheflow.ails.ece.ntua.gr/annotator/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 54. [想复刻黑胶手感却发现不是黑胶：S4 Mk3 电机控制的逆向与妥协](/posts/conference-nime-2026-conference-paper-id-nime2026-123-08b15dc1d8/)

> 英文题目：*[Traktor Kontrol S4 Mk3 Is Not a Turntable No Matter How Bad I Want it To Be: But That's OK Because I Accept It For Who It Is\.](/posts/conference-nime-2026-conference-paper-id-nime2026-123-08b15dc1d8/)*

标签：#开源工具 #信号处理 #音乐 #音频交互

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_123/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_123.pdf)

👥 **作者与机构**

- Joseph Thibodeau：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以开放DJ软件Mixxx驱动S4 Mk3力反馈转轮，输入为转轮双轨编码器位置与触摸位及目标转速，输出为电机扭矩与播放速率，难点在于私有HID协议未知、粘滑摩擦耦合难建模且须满足500Hz双向实时闭环。方法第一步用Wireshark配合usbpcap与usbmon复现并验证私有协议，解析出双路位置流与触摸语义，其输出的位置与速度信号进入第二步。第二步建立粘滞与滑动两态转盘与垫片物理模型，以速度误差驱动静摩擦保持同步、以动摩擦描述打滑后回同步过程，为控制提供目标扭矩依据。第三步将模型转化为带FIR滤波与平滑的实时控制器并耦合至Mixxx播放与点动逻辑，把速度误差与电机输出误差双向映射为搓盘与边圈微调，解决直接映射播放抖动问题。与已有只做按键转发的映射不同，该工作保留仿真手感同时兼容数字演出惯例，复现了官方控制器对触摸扰动的滤波处理思路。在编码器轮盘解析测试任务下，外圈轨道的窗口数指标为360个，高于内圈轨道的窗口数指标10个。其结论适用边界受限于该型号控制器与特定试验分支实现，在提示点急停回弹与反转标定不一致等失败条件下行为尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/jtMUMT/mixxx/tree/fix/s4-motors-chattering-and-cue> — 链接可访问（HTTP 200）
- 第三方资源：<https://mixxx.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 55. [把弯音从左手搬到脚下：Robo\-Bend 用琴头顶弦实现约 280 音分的物理推弦](/posts/conference-nime-2026-conference-paper-id-nime2026-125-6a94bed6ce/)

> 英文题目：*[Robo\-Bend: A Human\-in\-the\-Loop Robotic Interface for Guitar String Bending\.](/posts/conference-nime-2026-conference-paper-id-nime2026-125-6a94bed6ce/)*

标签：#主观评测 #用户研究 #音乐 #音频交互

评分：**5.9/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_125/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_125.pdf)

👥 **作者与机构**

- Harumoto Kaneko：机构信息未能从会议 PDF 纯文本可靠映射
- Gou Koutaki：机构信息未能从会议 PDF 纯文本可靠映射
- Shigeru Kai：机构信息未能从会议 PDF 纯文本可靠映射
- Akira Maezawa：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

电吉他推弦以左手按品位置与手指推拉为输入、以弦张力变化引起的基频连续上滑为输出，难点在于高张力品位下手指力量不足且需兼顾止音与音准保持。新系统先由右脚表情踏板输出MIDI控制变化量并经数字音频工作站路由至微控制器，其输出进入预计算查询表将0\-127映射为脉宽调制占空比以消除运行时运算。查表结果经直接寄存器写入以330Hz高频脉宽调制驱动伺服，再由齿条与小齿轮把旋转转为垂直头弦枕表面的直线顶弦位移，左手仅保留按品与触弦而弯音量交由右脚。与颤音摇把、B\-Bender或数字变调相比，该头弦枕安装式非破坏模块不改琴体且不经过音频信号处理，因而保留原拾音链路与泛音衰减特性。在标准调弦电吉他物理性能评测下，踏板操作的平均最大偏移指标为约280音分，高于新手手指弯音的平均最大偏移指标不足50音分。该结论适用边界受限于所测弦规与样机，非线性踏板映射导致目标音高瞄准困难等尚未验证。系统硬件重345g并存在中位约92ms延迟，快速乐句与长期佩戴平衡仍需优化。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 56. [在胶合板上听笔尖位置：小数据声源定位为何不用时延估计](/posts/conference-nime-2026-conference-paper-id-nime2026-166-841cb21820/)

> 英文题目：*[Deep Drawing: Performance Surface Sound Source Localization\.](/posts/conference-nime-2026-conference-paper-id-nime2026-166-841cb21820/)*

标签：#CNN #Transformer #模型比较 #麦克风阵列 #声源定位

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#声源定位 | 主方法：#CNN

会议来源：[官方记录](https://nime.org/proc/nime2026_166/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_166.pdf)

👥 **作者与机构**

- Lennon Seiders：机构信息未能从会议 PDF 纯文本可靠映射
- Julie Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- John Granzow：机构信息未能从会议 PDF 纯文本可靠映射
- Alex Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Anusha Chinthamaduka：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理表演尺寸胶合板上绘图声源定位，输入为四路接触麦克风信号，输出为笔尖二维坐标，难点在于木材各向异性传播难以解析建模且板中声速快导致到达时差极小，使传统时延估计方法失效。系统先以192kHz多通道同步采集与顶视240fps视频标定构建音频位置对，将每视频帧长度音频转为频谱并对齐对应坐标进入下一步。接着对8帧约33ms短上下文频谱做逐通道归一化与可选高通滤波预处理，为模型提供去量纲的频谱输入。然后分别用从零训练的ResNet\-50回归与带卷积前端的轻量Transformer预测坐标并实时可视化，形成可感知手势轨迹。与显式估计时延的经典方法相比，关键差异是直接从频谱幅度与相位模式学习材料相关传播映射，避免各向异性下的解析声速假设，因而在小数据集低延迟表演场景具有实用意义。在全部录制聚合评测条件下，ResNet50在高通1000条件下的L1误差指标为0\.197，低于Transformer在同条件下的L1误差指标0\.237。结论适用边界限于固定装配与同类圆珠笔摩擦声，换板朝向或重新安装后需重标定，外推到空气传麦克风阵列尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://deepdrawing.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 57. [中央声库却低交互：Freesound 创意应用为何守着文本搜索](/posts/conference-nime-2026-conference-paper-id-nime2026-37-42c1c5d4e0/)

> 英文题目：*[Integration of Freesound content in creative applications and sound interfaces: a survey of use cases\.](/posts/conference-nime-2026-conference-paper-id-nime2026-37-42c1c5d4e0/)*

标签：#文献综述方法 #音乐 #音频交互 #音频检索

评分：**5.9/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：综述 | 主任务：#音频检索 | 主方法：#文献综述方法

会议来源：[官方记录](https://nime.org/proc/nime2026_37/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_37.pdf)

👥 **作者与机构**

- Panagiota Anastasopoulou：机构信息未能从会议 PDF 纯文本可靠映射
- Frederic Font：机构信息未能从会议 PDF 纯文本可靠映射
- Xavier Serra：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以分散的创意应用与声音界面为输入，输出其集成Freesound异构声音库的方式分类与利用格局，难点在于系统形态、交互模态与元数据质量差异大，难以统一比较可达性与探索深度的权衡。方法链分三步：先以Freesound Labs条目、应用程序接口日志与GitHub文档检索汇聚60个符合创意交互标准的系统，再沿中心性、交互性、检索过滤、输入模态与操控类型五轴编码各系统的检索与操控行为，最后汇总分布并结合Web与应用程序接口周查询日志解读基础设施利用不足。编码输出直接进入分布汇总，使生成式集成与探索式集成得以在同一分析框架下比较。与既有孤立案例介绍相比，关键差异在于区分用户可控过滤与预置后台查询，并以共享分析轴揭示趋同的窄交互模型，其意义在于指明未被利用的相似检索与内容描述符能力。在60个系统组成的调查语料任务下，声学检索的应用数量指标为6个，低于相似检索的应用数量指标7个。该结论的适用边界在于样本依赖公开文档与可识别的接口客户端，闭源商用工作站与无密钥调用系统覆盖受限，向全部创意生态外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/overtone/overtone> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/iwkse/freesound> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/charlesneimog/py4pd-freesound> — 链接可访问（HTTP 200）
- 第三方资源：<https://playground.mlalabs.xyz/> — 链接可访问（HTTP 200）
- 第三方资源：<https://hathor.uno/> — 链接可访问（HTTP 200）
- 第三方资源：<https://five23.github.io/plexure.js/index.html> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 58. [紧耦合传感与驱动：在同一位置、同一模态上同时收发而不互相淹没](/posts/conference-nime-2026-conference-paper-id-nime2026-50-201eae086d/)

> 英文题目：*[Techniques for Closely\-Coupled Sensing and Actuation in Digital Musical Instruments\.](/posts/conference-nime-2026-conference-paper-id-nime2026-50-201eae086d/)*

标签：#信号处理 #实时处理 #音乐 #音频交互

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：综述 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_50/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_50.pdf)

👥 **作者与机构**

- Matthew Davison：机构信息未能从会议 PDF 纯文本可靠映射
- Adam Schmidt：机构信息未能从会议 PDF 纯文本可靠映射
- Andrew McPherson：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

混合乐器要求物理振动与数字合成间双向连续能量流动，输入是同点位同模态的传感状态，输出是同频带音频速率驱动力，同点同频同时工作必然引入串扰与啸叫失稳。 作者先以同点位、同时、同模态、同频带四判据定义理想紧耦合，并按违背判据把文献分为分时复用、频带分离、电气机械声学阻抗、不同模态与主动传感七类。 接着分时复用输出的隔离窗口进入频带分离与阻抗建模步骤，由滤波或电—机械阻抗对消分离传感与驱动残留，其输出再进入换能器线性度、效率与带宽选型，形成隔离机制到器件约束的方法链。 相对孤立介绍力反馈或自共振的做法，该文以串扰隔离机制统一跨领域文献，明确每类牺牲同时性还是牺牲同频段，具有选型指导意义。 在占空比受限的分时复用条件下，20%占空比下执行器的有效功率性能为1W，低于满占空比下的有效功率性能5\-Watt。 该结论的适用边界仅限于定性选型指导，在非线性大功率宽带驱动下会因谐波串扰与惯量限制而受限，尚未验证统一声学或触觉指标下的外推。 原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 59. [同一根弦又当传感器又当执行器：洛伦兹时分复用如何实现同位自持](/posts/conference-nime-2026-conference-paper-id-nime2026-71-cc5c01cfb8/)

> 英文题目：*[Sustained Interests: Lorentz Time Division Multiplexing \(LTDM\) for Active Collocated String Control\.](/posts/conference-nime-2026-conference-paper-id-nime2026-71-cc5c01cfb8/)*

标签：#信号处理 #音乐 #音乐生成

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_71/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_71.pdf)

👥 **作者与机构**

- Adam Schmidt：机构信息未能从会议 PDF 纯文本可靠映射
- Andrew McPherson：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

针对导电弦需分离传感与作动而存在串扰延迟与校准负担的问题，本文提出洛伦兹时分复用方案，其输入为永磁场中弦横向速度感生的电动势，输出为经同一根弦回注的脉宽电流产生的洛伦兹力，目标是在不干扰拨奏下实现自激延音。先由感应级接收弦振动电压输入，经前置放大、精密全波整流与钳位输出速度幅值与极性信号，该幅值与极性直接作为调度级的反馈输入。再由固件调度级接收该反馈，以20kHz帧划分传感与作动时隙以隔离串扰，并将采样速度线性映射为作动时隙的选通管与占空比指令，该指令直接进入作动级执行。最后由互补场效应管桥接收占空比指令向弦注入双向电流以补充能量，并叠加与均方根成反比的随机噪声起振与自动增益钳制输出目标响度功率。在20kHz分时设置下，帧周期的持续时间指标为50μS，高于作动窗口的持续时间指标20μS。与分离线圈反馈相比，关键差异是同一物理弦经高速分时交替承担传感与作动而天然同位，省去传递函数补偿且直导线低电感更易触达高频泛音。该结论适用边界受限于非铁磁高电导率弦与单轴横向振动，缠弦在分时频率处啸叫与热致失谐等外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/aschmidt99/LTDM_NIME2026> — 链接不可用（HTTP 404）
- 演示资源：<https://github.com/aschmidt99/LTDM_NIME2026> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 60. [被用力拉扯才算过关：触角织物乐器十五年的现场筛选史](/posts/conference-nime-2026-conference-paper-id-nime2026-74-1df155a1a6/)

> 英文题目：*[Playing Rough: Malleable Tentacle Instruments for Participatory Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-74-1df155a1a6/)*

标签：#用户研究 #音乐 #音频交互

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_74/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_74.pdf)

👥 **作者与机构**

- Tara Pattenden：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文面向无人值守参与式演出中可塑触觉界面的可用性难题，输入是抓握挤压扭曲弯折等无约束触觉动作，输出是可即时理解的声音反馈，难点在于噪声拥挤与短时接触下保持因果可读并承受拉扯悬挂等极端负载。先以十五年制作者档案重建十个版本与两次展览的演化谱系，输出版本谱系进入失效分析。再以破损维修痕迹反推载荷集中点与材料失效模式，输出失效位置与模式进入设计固化。最后将应对策略固化为放置方式与负载路径及模块化维护流程并在后续展览中检验。在两次展览对比场景下，E1的维护干预指标为每日维修，从E1的每日维修降至E2的维护干预指标为三个月接待约85000名访客仅更换8个备用触手。相对既有可塑乐器研究偏重实验室表达性的做法，本文把维修当作纵向评测数据并在两次装置展览中保持声音引擎不变来隔离结构改进效果，具有可部署维护的实际意义。结论适用边界仅限高吞吐无监督触摸场景，对安静聆听或精细演奏的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 61. [在虚拟现实里一起打拍子：乐器与舞台为什么必须一起设计](/posts/conference-nime-2026-conference-paper-id-nime2026-97-85eac76ba6/)

> 英文题目：*[Co\-Designing Virtual Reality Musical Instruments and Spatial Layouts for Collaborative Music\-Making\.](/posts/conference-nime-2026-conference-paper-id-nime2026-97-85eac76ba6/)*

标签：#软件工具 #用户研究 #音乐 #音视频交互

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.9/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音视频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_97/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_97.pdf)

👥 **作者与机构**

- Alberto Boem：机构信息未能从会议 PDF 纯文本可靠映射
- Stavros Skouras：机构信息未能从会议 PDF 纯文本可靠映射
- Gad Baruch Hinkis：机构信息未能从会议 PDF 纯文本可靠映射
- Mélodie Mousset：机构信息未能从会议 PDF 纯文本可靠映射
- Luca Turchet：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

协同虚拟现实合奏的输入是多名远程演奏者的节奏手势与讨论话语，输出是可合奏的节奏声景与容纳混合技能的舞台布局，难点在于网络延迟与触觉缺失叠加多人贡献归属不清导致节奏难以对齐。本研究先以问卷与12场PatchWorld即兴合奏锁定节奏工具、空间布局与情感沟通三类需求，其输出直接确定两场工作坊的主题划分。接着在第一工作坊中以六件原型评估投票收敛出通用节奏盒，其四轴集成控制与双手触发等参数交由研发团队实现。再在第二工作坊中以低保真草图到实尺度占据试验迭代出三区半圆舞台，站位圆圈等反馈直接进入下一轮布局修改。与复刻物理鼓垫的思路不同，该工作将乐器多轴集成控制与半圆互视布局联合设计，使手势意图在发声前即可被看见并归因，视觉反馈从补偿手段变为构成性协作线索。在话语筛选任务下，待分析话语条数指标从初始切分的5,207条降至筛选后的1,956条。该结论适用边界受限于Meta Quest单硬件、9人熟手社区与纯节奏场景，旋律和声、大规模观众与长期技能成长等外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 62. [把循环拍子放回圆上：RhythmTable 如何用位置几何代替直线格子](/posts/conference-nime-2026-conference-paper-id-nime2026-103-3201385dcd/)

> 英文题目：*[RhythmTable: A Tangible Interface for Cyclic Rhythm Sequencing\.](/posts/conference-nime-2026-conference-paper-id-nime2026-103-3201385dcd/)*

标签：#教育 #用户研究 #音乐 #音乐生成

评分：**5.8/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.5/1.5 | 清晰度 0.9/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_103/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_103.pdf)

👥 **作者与机构**

- Allwin Williams：机构信息未能从会议 PDF 纯文本可靠映射
- Tanya Chhabhadiya：机构信息未能从会议 PDF 纯文本可靠映射
- Abhishek Kapahi：机构信息未能从会议 PDF 纯文本可靠映射
- Pravin Kumar Vasveliya：机构信息未能从会议 PDF 纯文本可靠映射
- Abhishek Kashyap：机构信息未能从会议 PDF 纯文本可靠映射
- Leha Chilumuri：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

RhythmTable面向公共科学中心多人共位演奏，输入是86cm圆形桌面上物理令牌的角度位置与旋钮触觉操作，输出是按循环播放逻辑触发的节奏声音，难点在于线性步进将起点与终点分置两端，割裂了塔拉循环中起点即回归点的连续回归结构。先由120cm高处顶部4K相机裁剪1024×1024兴趣区并输入约1000张标注图像训练的定制YOLOv11模型，由其负责识别令牌身份与相对圆心的角度坐标并输出令牌标识加角度流，再将该角度流输入中央Python引擎，由其负责维护0度到360度虚拟循环并在LED光环经过令牌角度时触发采样从而输出时间触发的音频事件，最后将音频事件与触觉控制需求输入双ESP32离线Wi\-Fi架构，由其分别负责经OSC处理速度电位器与jog轮输入和高频LED反馈输出，使视觉延迟不直接进入节奏时序。相对线性网格与普通圆形布局，该设计将2至9分度的Gati细分数表达为同心环上直线、三角至九边形及2:3等多边形几何叠合，使多声部复节奏成为可视干涉图案而非比值计算。在圆形网格节奏任务下，第二触发点的触发角坐标指标为90，高于起点触发点的触发角坐标指标0。当前结论适用边界受限于有引导的短期展厅观察，遮挡时跟踪短暂中断且尚未验证长期学习、复杂塔拉结构与高流量高遮挡下的稳定性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 63. [把交互逻辑搬离琴体：nOdes 用服务器集中映射支撑 24 球合奏](/posts/conference-nime-2026-conference-paper-id-nime2026-105-108df5b8e3/)

> 英文题目：*[nOdes: A Networked Constellation of Handheld Orbs for Community Music\-Making\.](/posts/conference-nime-2026-conference-paper-id-nime2026-105-108df5b8e3/)*

标签：#信号处理 #实时处理 #音乐 #音乐生成

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_105/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_105.pdf)

👥 **作者与机构**

- Thomas Didiot\-Cook：机构信息未能从会议 PDF 纯文本可靠映射
- Simon Jones：机构信息未能从会议 PDF 纯文本可靠映射
- Johanna Blee：机构信息未能从会议 PDF 纯文本可靠映射
- Nadine Meertens：机构信息未能从会议 PDF 纯文本可靠映射
- Razanne Abu\-Aisheh：机构信息未能从会议 PDF 纯文本可靠映射
- Ophelia Deroy：机构信息未能从会议 PDF 纯文本可靠映射
- Sabine Hauert：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

面向便携式多人协作演奏，本文输入为手持球体的加速度与姿态传感流，输出为球载灯光反馈与外部生成系统的和声约束，难点在于多设备低延迟同步、现场快速更换映射与免维护部署。方法链分三步：球端以五十赫兹采集传感并在收到组播帧后经八毫秒定时回传六十四字节单播状态快照，其输出进入服务器聚合。服务器端集中式映射层聚合多球姿态为共享音集与全局节奏场景参数，生成一百二十八字节组播控制帧下发。该控制帧驱动各球灯光与生成参数并写入遥测日志，形成表演与研究闭环。与reacTable等多物体乐器相比，关键差异在于取消共享台面并将音乐语义移出固件，从而实现不刷机即换曲目与跨场地复用。在约40000帧的定时评测条件下，服务端均值统计的抖动为10\.6 μs，低于服务端标准差统计的抖动11\.6 μs。该结论适用边界受限于近距离本地无线局域网内中小规模合奏，远距离、大规模、强干扰与真实用户演奏尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 64. [弦去按音、另一只手去塑形：田进勤 XK 乐器的双手带状交互与可复现重建](/posts/conference-nime-2026-conference-paper-id-nime2026-106-a1de784703/)

> 英文题目：*[Tian Jinqin’s String\-Controlled Instruments: Formalizing and Reimplementing a Ribbon\-Based Interaction Design Pattern\.](/posts/conference-nime-2026-conference-paper-id-nime2026-106-a1de784703/)*

标签：#开源工具 #用户研究 #音乐 #音频交互

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_106/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_106.pdf)

👥 **作者与机构**

- Enrique Tomás：机构信息未能从会议 PDF 纯文本可靠映射
- Boris Shershenkov：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以左手缎带连续位置与右手触按包络为输入，以可演奏滑音、揉弦与装饰音的弦控电子乐器为输出，难点在于原物稀缺且音准同时依赖电阻线性度、机械张力与人体触觉耦合，难以仅靠商用软电位器复现。该工作先经田野访谈与档案梳理形式化XK系列双手分工与触条传感的交互设计模式，其输出的模式定义直接约束复刻选型。再以碳膜条与金属触条重建传感结构并经模数转换与分段线性校准完成映射，其输出的归一化位置进入手势与MIDI映射层。最后经小提琴家试奏与公开演出迭代人体工学与合成器集成。在1979年试产销售基准下，XK\-1的生产数量指标为36台，高于销售数量指标的21台。与软电位器方案的关键机制差异在于将裸金属触条的持续触觉参照与校准张力调整视为音准系统的一部分，从而支撑非视觉肌肉记忆与长期可练习性。该结论适用边界受限于单套XK\-S原型与小规模专家试奏，跨制作者一致性与长期耐久性尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://tamlab.kunstuni-linz.at/projects/tian-jinqin/> — 暂时无法访问
- 复现相关资源：<https://tamlab.kunstuni-linz.at/projects/tian-jinqin/> — 暂时无法访问
- 第三方资源：<https://proto-pasta.com/products/conductive-pla> — 链接可访问（HTTP 200）
- 第三方资源：<https://calorique.info/shopw/?k=267> — 链接可访问（HTTP 200）
- 第三方资源：<https://patents.google.com/patent/US3624583A> — 链接可访问（HTTP 200）
- 第三方资源：<https://patents.google.com/patent/US3626350A> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.soundonsound.com/people/david-vorhaus> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 65. [不对齐就硬解码会塌到同一团声音：舞者用身体投票校准的跨模态对齐](/posts/conference-nime-2026-conference-paper-id-nime2026-113-0e04b8eeb7/)

> 英文题目：*[Human\-in\-the\-Loop: Crossmodal AI Alignment between Movement and Audio Latent Spaces for Expressive Sonification in Dance Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-113-0e04b8eeb7/)*

标签：#多模态学习 #用户研究 #变分自编码器 #音乐生成

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#多模态学习

会议来源：[官方记录](https://nime.org/proc/nime2026_113/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_113.pdf)

👥 **作者与机构**

- Koray Tahiroğlu：机构信息未能从会议 PDF 纯文本可靠映射
- Mikael Hokkanen：机构信息未能从会议 PDF 纯文本可靠映射
- Ariana Marta：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为Xsens可穿戴惯性传感捕捉的舞蹈运动信号，输出为实时合成的音乐纹理波形，实际难点在于运动与音频潜空间维度、结构与时间分辨率失配，且映射需适配舞者个体审美而非固定规则。方法链第一步由轻量因果卷积运动变分自编码器编码器将传感缓冲窗口压缩为8维运动潜向量，以刻画连续 expressive动态轨迹。第二步由对齐模块以单线性层加修正线性单元将8维向量投影为4维音频潜向量，再经插值适配音频解码速率并向所选聚类质心偏移以兼顾稳定与音色多样性。第三步由预训练实时音频变分自编码器解码器将连续潜轨迹合成为波形，并经sounddevice库实时回放。与固定规则映射相比，关键差异在于表演前专用会话中舞者以二元接受反馈做人体在环门控更新并可切换质心探索不同音色区，其实质意义是把审美决策权交还身体判断以支撑共创作者感。在潜空间对齐任务下，运动潜向量的维度指标为8维，高于音频潜向量的维度指标4维。该结论适用边界受限于3名舞者两天探索性会话的定性访谈感知连贯性解释，重音与停顿失配仍常致脱节，尚未验证舞台实时表演与跨风格泛化，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://version.aalto.fi/gitlab/sopi/sonicmove_vae> — 链接可访问（HTTP 200）
- 代码相关资源：<https://tinyurl.com/36425wfx> → <https://version.aalto.fi/gitlab/sopi/sonicmove_vae/-/tree/main/alignment?ref_type=heads> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 66. [谁来定下第一拍：半自动机器人长笛用头部预备动作决定合奏起始](/posts/conference-nime-2026-conference-paper-id-nime2026-127-b84bbe852e/)

> 英文题目：*[Playing Together with a Semi\-Automated Robotic Flute Using a Gesture Cue Detection System\.](/posts/conference-nime-2026-conference-paper-id-nime2026-127-b84bbe852e/)*

标签：#用户研究 #音视频 #音乐 #音视频交互

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音视频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_127/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_127.pdf)

👥 **作者与机构**

- Jaeran Choi：机构信息未能从会议 PDF 纯文本可靠映射
- Juhan Nam：机构信息未能从会议 PDF 纯文本可靠映射
- Hikari Kuriyama：机构信息未能从会议 PDF 纯文本可靠映射
- Gou Koutaki：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究处理半自动长笛合奏的同时起奏同步问题，输入为演奏者起奏前头部预备动作视频与吹奏气流，输出为机器人按键动作与MIDI钢琴伴奏的触发时刻，难点在于音乐意图不可直接观测且约50ms机械延迟会破坏人机同时感。系统先用MediaPipe Face Landmarker以30fps追踪面部垂直速度曲线，顺序检出最大上行峰与随后最大下行峰并将其间隔定义为手势提示时长D。接着按长笛手特定的手势提示起奏比率2\.28由峰值时刻外推意图起奏点，并提前补偿机械延迟后发送MIDI触发。最后由14路SG92R舵机经线驱与齿条齿轮机构执行指法而人同步吹奏。与机器人倒计时主导的定时播放相比，该机制把起奏控制权交还演奏者并保留身体预备动作的自然协商过程。在8名长笛手被试内三条件后测问卷设置下，同伴感条目Q2的得分为6\.50，高于可预测性条目Q3的得分4\.00。该结论适用边界仅为Moon River同时起奏的实验室合奏场景，尚未验证变速、力度变化与长时协同，且部署依赖14路舵机硬件并需补偿约50ms延迟。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 67. [把合成条件当作曲参数：Orbis 用人工细胞 Min 波的可控涨落驱动光声](/posts/conference-nime-2026-conference-paper-id-nime2026-132-6de2b5b40c/)

> 英文题目：*[Orbis: Composing a Light\-and\-Sound Installation with Min Waves Generated in Artificial Cells\.](/posts/conference-nime-2026-conference-paper-id-nime2026-132-6de2b5b40c/)*

标签：#信号处理 #空间音频信号 #音乐生成 #视频到声音生成

评分：**5.8/10** | 创新 1.5/2 | 技术严谨 0.8/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_132/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_132.pdf)

👥 **作者与机构**

- Yukihiro Sugawara：机构信息未能从会议 PDF 纯文本可靠映射
- Kotaro Watanabe：机构信息未能从会议 PDF 纯文本可靠映射
- Shinnosuke Hirose：机构信息未能从会议 PDF 纯文本可靠映射
- Moe Miyake：机构信息未能从会议 PDF 纯文本可靠映射
- Kenshiro Taira：机构信息未能从会议 PDF 纯文本可靠映射
- Sakura Takada：机构信息未能从会议 PDF 纯文本可靠映射
- Ryoho Kobayashi：机构信息未能从会议 PDF 纯文本可靠映射
- Yuta Uozumi：机构信息未能从会议 PDF 纯文本可靠映射
- Kei Fujiwara：机构信息未能从会议 PDF 纯文本可靠映射
- Shinya Fujii：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入为人工细胞内Min波荧光显微延时影像，输出为环形布置的六路空间化声音与十二盏灯泡亮度分布，难点在于反应扩散波兼具合成条件可调的统计倾向与单细胞涨落的不可预测性，需把准生命动力直接转为可作曲的光声结构。方法链分三步衔接：先按设定ATP与dATP配比等合成条件制备人工细胞并以荧光显微镜按5秒间隔记录、转制为10fps视频，为后续检测提供不同周期的波形来源。再经TouchDesigner灰度化与亮度差分提纯波区，并用基于OpenCV的Blob Track实时求取区域质心的二维坐标，归一化至\-1到1后经OSC送入Max。最后在Max中按坐标极角位置驱动邻近扬声器增益与灯泡亮度，重构行波环绕与振荡往复，并以RFID触发的序列切换不同音色实现完成展览呈现。相对直接映射现成生物信号或仿真算法作曲，该文把合成条件本身作为作曲参数，以物理耗散结构的非线性与混沌涨落提供数学模型与现成数据集难以复现的波形来源。原文未提供可核对的关键定量结果。适用边界受限于需纯化蛋白与荧光显微镜的实验室制备与预录视频演示，尚未验证活细胞实时闭环与多细胞复合波形。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://on.soundcloud.com/eFhcgYf6NuYvyyNu6> — 暂时无法访问
- 复现相关资源：<https://www.pssj.jp/archives/files/articles/113.pdf> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 68. [墙上的形状即乐器：用投影几何推断站位并门控离散音高的协作装置](/posts/conference-nime-2026-conference-paper-id-nime2026-139-ca7e9f1e8b/)

> 英文题目：*[A Collaborative Sound Installation Using Projected Geometry and Spatial Interaction\.](/posts/conference-nime-2026-conference-paper-id-nime2026-139-ca7e9f1e8b/)*

标签：#信号处理 #音视频 #音乐 #音视频交互

评分：**5.8/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音视频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_139/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_139.pdf)

👥 **作者与机构**

- Hani Alshamrani：机构信息未能从会议 PDF 纯文本可靠映射
- Sam Ferguson：机构信息未能从会议 PDF 纯文本可靠映射
- Andrew Johnston：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该安装以手持投影机在共享墙面投射的多边形为输入，需同时输出演奏者身份、离散空间交互点对应的音高与连续几何驱动的音色，难点在于自然行走与手持瞄准抖动会持续扰动投影几何并引发误触发。系统先由顶置相机按面积与内角过滤轮廓，并在连续三帧确认后识别三角形至六边形的形状身份，其输出的已接受多边形直接进入下一步特征计算。接着系统提取包含位置、面积与倾斜代理的二十二维几何描述，并经支持向量机估计表演者所处的空间交互点，该离散估计结果再进入门控逻辑做稳定性判断。随后系统以倾斜小于十度、置信度超过零点九零与连续十帧一致门控离散音高切换，同时以原始连续量按约三十帧率直通调制声压、滤波与声像。与把投影仅作视觉反馈而另设身体追踪的既有协作乐器不同，该工作把可见投影本身作为主传感信号，使可感知性与可传感性合一而无需穿戴与地面设施。在单操作者采集的五空间交互点数据集五折交叉验证设置下，六边形的分类准确率为99\.7%，高于五边形的分类准确率98\.6%。该结论适用边界受限于昏暗房间、固定相机与白色墙面下的受控几何，投影重叠、遮挡、大倾斜与多人并发尚未验证，连续参数延迟约为33毫秒、门控离散切换延迟约为0\.33秒而端到端音频延迟未正式测量。

🔗 **开源资源**

- 第三方资源：<https://sonic-pi.net/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 69. [跟住键盘手而不是固定磁带：Accomplice 如何把跟谱、指挥与播放拆开做现场电子伴奏](/posts/conference-nime-2026-conference-paper-id-nime2026-140-5687554ceb/)

> 英文题目：*[Accomplice: Computer Accompaniment for Keyboard Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-140-5687554ceb/)*

标签：#开源工具 #信号处理 #音乐 #音频交互

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_140/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_140.pdf)

👥 **作者与机构**

- Roger Dannenberg：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Accomplice要解决的任务是以键盘MIDI输入为感知、以MIDI与OSC和O2消息为输出，在含停顿、华彩与变速的实验音乐中实时估计总谱位置并驱动电子声部，难点在于和弦内音符乱序、滚奏跨时、错音与临时变速下的鲁棒对齐和跨设备低抖动同步。Conductor模块负责跟随与速度位置估计，用动态分组把无序演奏音符划分到对应总谱和弦并输出乐谱时间映射，其输出进入扁平乐谱秒时间映射。虚拟时间调度器先把本地真实时间对齐到全局秒时间，再经扁平乐谱秒时间与节拍位置两级变换把谱面速度标记编译进播放时钟，形成可平滑收敛的播放映射。Player模块负责按cue语义与每轨微调参数调度合成器与多媒体，并做延迟预补偿与预滚建立控制器状态。与早期动态规划跟随相比，新机制对归入同一和弦的演奏音符施加发音间隔上限并对不匹配的额外音符施加小惩罚，从而抑制跨和弦的贪婪误匹配。在133场钢琴演奏评测任务下，扩展跟随方法的总预测误差指标为不足最优HMM基线系统总预测误差指标的一半，低于最优HMM基线系统的总预测误差指标。该结论适用边界受限于键盘MIDI输入与排练充分的剧目，对声乐直跟、颤音装饰音与左右手严重错位等情况尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 70. [把机器学习乐器当作会遗忘的档案来演奏](/posts/conference-nime-2026-conference-paper-id-nime2026-164-5512c592b7/)

> 英文题目：*[Re\-Animating the Archive: Performing a Machine Learning System as Living Memory\.](/posts/conference-nime-2026-conference-paper-id-nime2026-164-5512c592b7/)*

标签：#数据集构建 #生成模型 #语音 #文本到语音

评分：**5.8/10** | 创新 1.5/2 | 技术严谨 0.9/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#文本到语音 | 主方法：#数据集构建

会议来源：[官方记录](https://nime.org/proc/nime2026_164/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_164.pdf)

👥 **作者与机构**

- Jonathan Reus：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以生成式电台作品In Search of Good Ancestors为案例，任务输入为工作坊捐赠的声音与文本，输出为自2022年至2023年连续公共广播的合成语音，其难点在于记忆不稳定、灾难性遗忘与社会介入难以纳入强调低延迟与透明控制的传统实时乐器评价。先由概率文本生成接收捐赠文本与魔法词指令，负责产出可变短语并经SLOW等后处理形成碎片化脚本，该脚本直接作为输入送入神经语音合成；再由神经语音合成接收上述脚本，负责将其转化为多音色嗓音并允许向歌唱与哭喊漂移，输出合成语音在进入混音前接受生态模拟调制；最后由长时生态模拟与音频编排接收已调制语音，负责以多物种动态驱动遗忘与堆积节奏并决定复调密度后混音，将松散模块绑定为缓慢呼吸的整体。相比已有NIME方法强调即时映射与演奏者控制，该工作把现场性重新定义为跨采集、训练与聆听的分布式重演动画，其意义在于把不稳定与漂移从误差转为美学与伦理资源。在持续一年的公共广播任务下，系统经历的整合期数量指标为4，高于首轮工作坊的数量指标1。该结论适用边界受限于参与式慢周期档案型装置，尚未验证其向需要精确控制或可重复合成任务的外推，失败条件下漂移可能损害可懂度。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://jonathanreus.com/portfolio/in-search-of-good-ancestors/> — 链接可访问（HTTP 200）
- 第三方资源：<https://openaccess.city.ac.uk/id/eprint/2730/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 71. [电子萨克布特不是一个人发明的：从脉冲、分频到众人手的电路史](/posts/conference-nime-2026-conference-paper-id-nime2026-23-cf5df267fb/)

> 英文题目：*[Communal invention in Prehistoric NIMEs: a case study of Hugh Le Caine’s Electronic Sackbut\.](/posts/conference-nime-2026-conference-paper-id-nime2026-23-cf5df267fb/)*

标签：#文献综述方法 #信号处理 #音乐 #音乐理解

评分：**5.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音乐理解 | 主方法：#文献综述方法

会议来源：[官方记录](https://nime.org/proc/nime2026_23/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_23.pdf)

👥 **作者与机构**

- Ezra Teboul：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以残存桌面版电子萨克布特实物与一九四六至一九五五年间散佚图纸档案为输入，重建其信号与控制原理并解释第一电压控制合成器神话难以成立的原因，难点在于实物布满未连接元件与拼凑取值且图纸与实物多处不一致。第一步对真空管实物做逆向工程绘制简化原理与框图，输出阻塞振荡器分频器与鉴频器等子电路划分。第二步将上述子电路回溯到哈蒙德风琴自动频率控制无线电与惠普计数器等谱系，输出各模块知识来源与计算功能判定并输入社群解释。第三步用加拿大国家研究委员会制图室技术员与通信档案还原制作中的分工协作，输出社群劳动证据以支撑共创发明结论。与既有传记只谈电压控制标签不同，本文揭示脉冲整形二进制计数与乘法放大的计算性内核及其左右手分离映射，说明其更接近冷战科学仪器文化而非后期合成器范式。在文献核对设置下，1956年IRE论文结束页的页码指标为478，高于起始页的页码指标457。该结论适用边界仅限现存桌面版残件与一九四五年至一九五八年图纸，尚未验证后期晶体管版与完整演奏性能，推及其他版本将受限。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://archive.org/details/HammondSolovoxModelLTechnicalManual> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 72. [把天花板变成乐器：64 个敲击点如何与网络和校准一起工作](/posts/conference-nime-2026-conference-paper-id-nime2026-28-a72f788001/)

> 英文题目：*[Modernizing the Machine Lab with Mechatronic Immersive Design and Artificial Intelligence\.](/posts/conference-nime-2026-conference-paper-id-nime2026-28-a72f788001/)*

标签：#教育 #集成学习 #音乐 #空间音频渲染

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#空间音频渲染 | 主方法：#集成学习

会议来源：[官方记录](https://nime.org/proc/nime2026_28/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_28.pdf)

👥 **作者与机构**

- Colton Arnold：机构信息未能从会议 PDF 纯文本可靠映射
- Zhaohan Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Ajay Kapur：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作针对笔记本管弦乐队声源不可见、空间感缺失与手势感知不足的问题，输入为作曲者经有线或无线网络发送的乐器名加音符加力度三元组且音符与力度取标准乐器数字接口0至127范围，输出为7件常驻机电乐器特别是64点位天花板声场的声光动作，难点在于大规模螺线管阵列的动态一致性、定时准确性与演出可扩展性。先由指挥者接收合奏规模与配置变更请求，负责动态分配端口并同步多客户端启动，其输出的同步启动指令与端口映射进入中央服务器。再由中央服务器接收开放声音控制消息，负责解析乐器名并路由至串口或乐器数字接口硬件，其输出的硬件控制流进入执行与监视环节，同时演出前完成的握手映射与看门狗配置持续约束转发。最后由基于交互式人工智能库的校准回路接收测试音偏差，负责融合多层感知机泛化预测与K近邻数据锚定预测并迭代修正偏移，其输出的每音偏移量回写为执行参数以闭环校准。相对既有人工逐音调校的主观分散机制，该方法把泛化能力与数据锚定结合为加权集成自动闭环，减少了主观性并保证跨乐器动态响应一致。在天花板阵列扩展基准下，当前阵列的点位指标为64，高于早期设计的点位指标16。该结论适用边界受限于受控实验室内的打击类机电乐器，尚未验证长期漂移、大厅级混响与听感评价下的外推能力，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 73. [扎根又漂移：用实时检出的潜在音阶重调混合演出生态](/posts/conference-nime-2026-conference-paper-id-nime2026-48-3de8b24cdb/)

> 英文题目：*[Grounded Yet Shifting: Shaping Hybrid Performance Ecologies with Dynamic Tonality \.](/posts/conference-nime-2026-conference-paper-id-nime2026-48-3de8b24cdb/)*

标签：#信号处理 #音乐 #音乐生成 #音高与旋律提取

评分：**5.8/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_48/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_48.pdf)

👥 **作者与机构**

- John Bowers：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究输入为混合演出中持续存在的现场声音，输出为随演出演化的十二度动态音阶及其音符到频率映射，直接驱动键盘重调谐与合成处理，其难点在于音高连续漂移且噪声反馈并存时仍需保持可演奏的 grounded 调性感。音高检测步骤利用流体库音高分析逐帧输出音高估计与置信度对，为后续统计提供带不确定性的原始观测。窗口统计步骤在滑动报告窗内累积检测结果并做八度折叠与离散量化，形成频次与置信度直方图，其输出的当前最常见音与前一窗最常见音直接作为音阶生成的输入。音阶生成与映射步骤基于共现排序、置信度排序与跨窗比值迭代构造五类十二度音阶，并统一映射为保持八度为十二半音差的音符到频率表以驱动演奏与生成算法。与以感觉协和度最大化为目标的自适应调音不同，该方法不预设目标音程，而是从正在发生的声音中挖掘潜在调性并回授给演奏者，因而能在稳定与失稳反馈态之间塑造混合生态。在连续共现生成的迭代条件下，三次迭代的音阶度指标为7，高于两次迭代的音阶度指标5。该结论适用边界受限于即兴与反馈主导的混合声学电子场景，向固定调性曲目与大规模受控听感评估的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://unlanded.bandcamp.com/> — 暂时无法访问
- 第三方资源：<https://csound.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://learn.flucoma.org/reference/pitch/> — 链接可访问（HTTP 200）
- 第三方资源：<https://midi.org/midi-1-0> — 链接可访问（HTTP 200）
- 第三方资源：<https://cid.nada.kth.se/pdf/CID-195.pdf> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.adampultz.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 74. [把预训练音频网络当电路板：实时改权重参数的网络弯曲](/posts/conference-nime-2026-conference-paper-id-nime2026-49-e04ee8d280/)

> 英文题目：*[Network Bending as Circuit\-Bending Inspired Live Neural Synthesis Hacking\.](/posts/conference-nime-2026-conference-paper-id-nime2026-49-e04ee8d280/)*

标签：#开源工具 #生成模型 #实时处理 #音频生成

评分：**5.8/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频生成 | 主方法：#生成模型

会议来源：[官方记录](https://nime.org/proc/nime2026_49/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_49.pdf)

👥 **作者与机构**

- Błażej Kotowski：机构信息未能从会议 PDF 纯文本可靠映射
- Frederic Font：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理神经音频合成的现场可演奏性难题，输入为预训练生成模型与实时演奏手势，输出为连续可变的合成声音，难点在于数千万参数不透明且反向传播重训练昂贵而缺乏直观操控点。首先复刻并扩展实时外部nn~以暴露各层权重与偏置的获取与覆写接口，其输出进入Pure Data构建的可视化弯曲界面进行选层与参数显示。其次演奏者通过绘制、偏移、缩放、翻转与循环移位直接改写选定层参数并即时回听，输出进入弯曲日志记录或双模型混合。在自定义DDSP模型弯曲任务设置下，层44权重的指标为44，高于层17偏置的指标17。最后将有效变换记入弯曲日志以复用，或在同构对应层间做线性插值混合以生成中间音色。与Broad等干预推理期中间激活且不改权重不同，本文直接干预参数空间并强调乐器化误用，其意义在于把失稳与崩溃转化为作曲材料与教学探针。适用边界限于与nn~兼容的JIT跟踪模型且同构层才能混合，多数随机扰动只产生静音或无趣噪声，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://network-bending-nime.github.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/acids-ircam/nn_tilde> — 链接可访问（HTTP 200）
- 第三方资源：<https://forum.ircam.fr/article/detail/tutoriel-rave-and-nn/> — 链接可访问（HTTP 200）
- 第三方资源：<https://martstil.de/code/neural-network-bending-in-pure-data> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.5281/zenodo.11189120> → <https://zenodo.org/records/11189120> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 75. [谁在即兴？当小提琴与单簧管各带一个 AI 同台](/posts/conference-nime-2026-conference-paper-id-nime2026-66-8549945dc2/)

> 英文题目：*[Distributed Agency in Collaborative Improvisation with Intelligent Instruments: A Phenomenological Inquiry\.](/posts/conference-nime-2026-conference-paper-id-nime2026-66-8549945dc2/)*

标签：#用户研究 #变分自编码器 #音乐 #音乐生成

评分：**5.8/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_66/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_66.pdf)

👥 **作者与机构**

- Halla Stefánsdóttir：机构信息未能从会议 PDF 纯文本可靠映射
- Robert Ek：机构信息未能从会议 PDF 纯文本可靠映射
- Thor Magnusson：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本任务输入为巴洛克小提琴与传感器增强单簧管的声音与动作信号，输出为实时混合音乐与现象学解释，难点在于人类意图与RAVE神经音频合成及Somax2语料重组的黑箱能动性相互覆盖，且音乐体验与言语缺乏一一对应而实时难以言说。先进行界面相遇，输入Living Looper演示与双人试奏，负责建立演奏默契并形成问题意识，输出磨合经验与选用RAVE与Somax2的决策，该决策直接约束下一步采集何种档案。再进行数据集策展与模型训练，输入精选档案录音，负责将档案压缩为RAVE可导航潜在空间并以Somax2因子神谕重组语料片段，输出可演奏音色引擎与可引用语料体，该引擎与语料体经手势调制直接进入下一步二重奏。接着进行排练演出与回放分析，输入现场音视频与演奏间隙评论，负责经刺激回忆口头报告与MAXQDA编码做主题综合，输出分布能动性解释并指导下一轮采集。与强调大规模数据集与自主生成的主流路径不同，本文坚持艺术家提供的小数据集与原型能动性，把伦理与美学选择前移到数据编辑与参数调节，使乐器成为探测文化关系的媒介。在双乐手协同演奏评测设置下，三接口配置的数量指标为3个，高于双生成方法的数量指标的2个。该结论适用边界受限于两位熟悉彼此美学的职业乐手、特定档案与特定场地的长期磨合，换人、换档案或换美学即可能失效。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://doi.org/10.5281/zenodo.19865482> → <https://zenodo.org/records/19865482> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 76. [用芭蕾姿态导航古筝乐句：分类定锚、回归补间与颗粒重塑的跨文化身体乐器](/posts/conference-nime-2026-conference-paper-id-nime2026-111-50e260ec1b/)

> 英文题目：*[Navigating a Guzheng Phrase Corpus Through Ballet\-Driven Granular Synthesis\.](/posts/conference-nime-2026-conference-paper-id-nime2026-111-50e260ec1b/)*

标签：#信号处理 #音视频 #音乐 #音视频交互

评分：**5.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音视频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_111/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_111.pdf)

👥 **作者与机构**

- Yueshen Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Yuting Xue：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该系统输入为Kinect采集的全身骨骼流，输出为古筝乐句重组的声音纹理与同步水墨剪影可视化，难点在于让无舞蹈与民乐经验的公众也能以可读方式导航文化负载的乐句语料并保持连续表现力。处理链第一步由TouchDesigner接收骨骼原始数据并提取简化关节特征，经OSC分发为学习与渲染共用的中间表示。第二步在Wekinator中并行训练分类器与回归器，前者判别芭蕾姿态锚点以选择语料区，后者编码偏离与中间态以连续控制读取位置。第三步将上述输出回传TouchDesigner再转发至Ableton Live，由Granulator 3执行颗粒缓冲定位与粒度扩展，并经共振延迟混响效果链与视觉反馈完成重塑。相对把语料库当作中性描述符检索库的通用拼接做法，该设计以拉班动作分析为中介，将空间方位对应音区、身体构形对应乐句区、动态质量对应颗粒重塑，形成可解释的双尺度耦合。在语料场景下，最短乐句选段的时长指标为4秒，低于最长乐句选段的时长指标15秒。其可学习性与跨群体可读性主张受限于作者展演与观众即兴体验的定性观察，保持姿态稳定而微动生变的结论尚未验证于结构化任务中。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 77. [不靠听觉合奏：把振动、触摸和视觉当作音乐材料的即兴装置](/posts/conference-nime-2026-conference-paper-id-nime2026-13-599713a7d4/)

> 英文题目：*[Audionce: An Audiovisual Improvisation Environment Co\-Designed by Deaf and Hearing Designers\.](/posts/conference-nime-2026-conference-paper-id-nime2026-13-599713a7d4/)*

标签：#多模态学习 #用户研究 #音乐 #音视频交互

评分：**5.7/10** | 创新 1.3/2 | 技术严谨 0.7/1.5 | 实验充分 0.2/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音视频交互 | 主方法：#多模态学习

会议来源：[官方记录](https://nime.org/proc/nime2026_13/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_13.pdf)

👥 **作者与机构**

- Alon Ilsar：机构信息未能从会议 PDF 纯文本可靠映射
- Matt Hughes：机构信息未能从会议 PDF 纯文本可靠映射
- Yuka Maruyama：机构信息未能从会议 PDF 纯文本可靠映射
- Andrew Johnston：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作旨在让聋人与听人音乐家与非音乐家无需依赖听觉即可共享即兴，输入为参与者在房间中的身体运动与对扬声器表面的直接触摸，输出为同步演化的声音、振动与点云视觉，难点在于传统即兴以听觉正确性为中心易使聋人边缘化，且触觉频率分辨率不足以传达精细音高与旋律差异。系统先由房间三侧高处的多台深度相机经自研引擎重建三维点云并估计多人位置姿态，再经开放声音控制协议将位置包络映射至游戏引擎视觉渲染与工作站声音合成，最后由各乐器轨实时振幅回传驱动视觉脉动形成视听闭环。交互按趋近主扬声器的距离分层展开为静态呼叫、竖琴线触发、持续嗡鸣、节奏固定音型与触摸底鼓五态，分别承担召唤回应、探索、同步与触觉高潮功能，并联动和声从Cm7经Dm7到Gdim7与速度推进。与依赖可穿戴设备的可访问数字乐器不同，该设计以物理扬声器阵列加虚拟镜像构成共享空间场，将振动与触摸作为首要音乐材料而非补偿翻译。原文未提供可核对的关键定量结果。结论适用边界仅限小规模共处演示与两次明确界定为非正式过程展示的公开展示，尚未验证大群体、长期学习与不同听力音乐训练背景的外推效果。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://git.matth.cc/pointcaster> → <https://github.com/matth-av/pointcaster> — 链接可访问（HTTP 200）
- 第三方资源：<https://unity.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.orbbec.com/products/tof-camera/femto-mega/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.ableton.com/en/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 78. [当按压力不再等于出声音：用感觉变弱来检验数字乐器的控制感](/posts/conference-nime-2026-conference-paper-id-nime2026-130-15a57c919e/)

> 英文题目：*[Towards Sensory Attenuation as a Measure of Agency Provided by Digital Musical Instruments\.](/posts/conference-nime-2026-conference-paper-id-nime2026-130-15a57c919e/)*

标签：#心理声学实验 #听觉与音乐认知 #音乐 #音频交互

评分：**5.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#心理声学实验

会议来源：[官方记录](https://nime.org/proc/nime2026_130/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_130.pdf)

👥 **作者与机构**

- Erik Løvaas：机构信息未能从会议 PDF 纯文本可靠映射
- Courtney Reed：机构信息未能从会议 PDF 纯文本可靠映射
- Paul Strohmeier：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入是单路压力手势对合成器音色的连续调制，输出是演奏者对自身发声响度的隐式自归因判断，难点在于连续演奏无法划分离散动作效应间隔且显式报告易受事后合理化污染。方法先由可配置映射引擎将归一化压力流经线性与非线性压力映射及含指数滑动平均能量态的时间映射生成音色变化，以隔离映射复杂度。接着演奏者在固定MIDI旋律上主动调制并以数量估计法报告峰值响度，其估计进入下一步作为主动条件感知强度。然后同一录音在回放时再次估计峰值响度，两者差值经被试内标准化后作为感觉衰减代理并辅以半结构访谈三角验证。与时间绑定依赖离散动作效应间隔不同，该机制直接在持续感觉运动环内检验预测与反馈匹配导致的感知钝化，因而更适配连续乐器交互的体验质量。在人口统计设置下，男性组的人数指标为9，高于女性组的人数指标2。该结论适用边界受限于高音量可感知区与小样本音乐家群体，低音量注意增强与映射交互解释仍尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/openai/whisper> — 链接可访问（HTTP 200）
- 第三方资源：<https://supercollider.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 79. [动作生音乐为何先学压缩再学对齐：个性化舞蹈乐器的取舍](/posts/conference-nime-2026-conference-paper-id-nime2026-135-b3c28e2f68/)

> 英文题目：*[From Improvised Movement to Musical Improvisation \- Using Machine\-Learning to Create Personalized Instruments for Dancers\.](/posts/conference-nime-2026-conference-paper-id-nime2026-135-b3c28e2f68/)*

标签：#开源工具 #Transformer #用户研究 #变分自编码器 #音乐生成

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#Transformer

会议来源：[官方记录](https://nime.org/proc/nime2026_135/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_135.pdf)

👥 **作者与机构**

- Daniel Bisig：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Oknupik：机构信息未能从会议 PDF 纯文本可靠映射
- Johannes Schneider：机构信息未能从会议 PDF 纯文本可靠映射
- Diane Gemsch：机构信息未能从会议 PDF 纯文本可靠映射
- Eleni Mylona：机构信息未能从会议 PDF 纯文本可靠映射
- Tim Winkler：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以舞者动作为输入实时生成个性化音乐，输出为连续可演奏音频，难点在于每位舞者仅有数分钟动作音频训练数据，却需建立稳定可控的动作声音跨模态对应并保证实时可听质量。先由冻结的预训练神经声码器Vocos将48kHz波形转为梅尔频谱并负责逆变换发声，其输出的梅尔频谱作为频域编解码基础进入下一步。再由轻量贝塔变分自编码器对8帧梅尔块学习32维音频潜表示并重建频谱，其输出的按全音频数据集归一化的潜向量进入下一步。最后由定制变换器以60帧相对旋转姿态运动上下文为条件自回归预测下一段音频潜序列，再经变分自编码器解码与Vocos逆变换发声。该组合相对RAVE等大容量模型的关键差异是以频域声码加小潜空间换取快速迭代与实时推理，避免直接波形建模的高成本。在域内重建与域内外分布评测设置下，最大β为0\.1条件的VAE的ms\-STFT指标趋势值并未明确高于或低于最大β为1\.0条件的VAE的ms\-STFT指标趋势值，且原文未提供可核对的关键定量结果。结论适用边界受限于三位合作舞者特定曲目与关注时间关系的即兴会话，向新舞者与强节拍音乐的外推尚未验证，而变分自编码器训练成本在单张NVIDIA RTX 4090硬件上约1小时完成，但推理延迟与吞吐无实测披露。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 80. [把错音弹对：用不看键盘的敲击把大模型当成伴奏](/posts/conference-nime-2026-conference-paper-id-nime2026-142-b8dccee957/)

> 英文题目：*[The Perfect Wrong Note: Vyping and the Keyboard as Musical Interface for Human\-LLM Interaction\.](/posts/conference-nime-2026-conference-paper-id-nime2026-142-b8dccee957/)*

标签：#软件工具 #信号处理 #大语言模型 #音频交互

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_142/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_142.pdf)

👥 **作者与机构**

- Enrique Encinas：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Refsum Jensenius：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理键盘从信息通道重构为音乐实践的问题，输入是无视觉反馈的连续击键流与退化文本，输出是LLM对退化文本的语义续写与可感知的节奏声响，难点在于标准聊天接口只保留最终字符串而丢弃击键时序与身体姿态。以盲打式vyping放弃视觉纠错并累积邻键误触与换位，让身体节奏显形并为后续分析提供退化材料。接着由KeyMeter与clix\-vibe捕获毫秒级击键起始间隔、保持时间与飞行时间并将其可视化与声音化，使时序模式可听可见并进入分析回路。最后由LLM以伴奏式补位吸收退化文本并生成连贯回应，将误读视为连贯意图延续，形成演奏者与伴奏的呼应。在单人英语QWERTY探索性实践评测设置下，已测试原型系统的数量指标为3，高于正式用户研究的数量指标0。与加装传感器增强表现力的既有键盘路线相比，本文主张表现力已内在于普通打字时序而无需外加硬件，意义在于将纠错转向倾听与保留时序信息。该结论适用边界受限于作者自身探索性实践与英语QWERTY单人会话，尚未验证跨打字者、跨语言与跨布局的外推，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/alexarje/keymeter> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/alexarje/web_instruments> — 链接可访问（HTTP 200）
- 演示资源：<https://ll00mtube.pages.dev/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 81. [通用手柄加本地打印件：在预算和人力都受限时如何复制无障碍乐器](/posts/conference-nime-2026-conference-paper-id-nime2026-148-d8bc7fb3d7/)

> 英文题目：*[Scalable Accessible Music\-Making with Commodity Controllers and Modular Augmentations in Resource\-Constrained Settings\.](/posts/conference-nime-2026-conference-paper-id-nime2026-148-d8bc7fb3d7/)*

标签：#开源工具 #用户研究 #端侧运行 #音乐 #音乐生成

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_148/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_148.pdf)

👥 **作者与机构**

- Calvin McCormack：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

可及数字乐器需在器件稀缺、维修链缺失与培训不足下，把运动障碍者的操作意图与文化熟悉曲目转化为可独立完成的混音演奏，其难点在于多数原型走不出初始场景且难以持续使用。为此该框架先以通用游戏手柄经蓝牙或通用串行总线以标准人机接口设备方式直连安卓端免驱动接入，将按键与摇杆信号作为统一输入源送入映射层。其次本地3D打印的单手适配器与摇杆扩展件对该输入硬件做握持改造，使单手与精细控制受限者也能触达全量控件，改造后几何兼容性保留以复用社区模型。然后轻量安卓应用承接改造后硬件的信号做下拉式映射与量程缩放，并以JSON预设保存分发，再交由嵌入式libpd承载的Pure Data补丁实时渲染混音，实现应用逻辑与音频算法解耦与免代码换件。相对专用无障碍手柄加主机封闭生态，该解耦以廉价手柄加共享模型文件加图形界面预设降低工程门槛，并支持远程更新与本地运维。在印度北部农村非营利组织现场部署场景下，二手Redmi 8A高价条件的价格指标为3,500 INR，高于低价条件的价格指标2,500 INR。结论适用边界仅为单站点短期可行性验证，尚未验证多站点与长期持续使用，且流媒体导入与MP3解码受限，现场硬件共用通用手柄、本地打印件与低端安卓手机并留下文档与远程支持。

🔗 **开源资源**

- 第三方资源：<https://p5js.org/reference/p5.sound/> — 链接可访问（HTTP 200）
- 第三方资源：<https://wac.ircam.fr/pdf/wac15_submission_40.pdf> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 82. [先猜手势再发声：用投机执行把扩散音频生成挤进指挥手势的微观时间](/posts/conference-nime-2026-conference-paper-id-nime2026-153-e1b719ef9e/)

> 英文题目：*[Shifting Time Scales: Supporting Live Gesture\-Controlled Generative Music with Speculative Execution\.](/posts/conference-nime-2026-conference-paper-id-nime2026-153-e1b719ef9e/)*

标签：#RNN #实时处理 #音乐 #音乐生成

评分：**5.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#RNN

会议来源：[官方记录](https://nime.org/proc/nime2026_153/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_153.pdf)

👥 **作者与机构**

- Jason Smith：机构信息未能从会议 PDF 纯文本可靠映射
- Bryan Pardo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理摄像头手势到音乐音频的实时映射，输入为手形与运动轨迹视频，输出为文本提示驱动的生成音频，难点在于手势完成识别再加扩散生成带来超过200 ms的感知延迟而无法对齐微观演奏时间尺度。系统先以MediaPipe与手形分类加运动分类将视频降为低维手部位置表征，该表征进入在线学习的长短期记忆网络以预测手部落点分布并按似然排序。排序后的多个候选落点分别映射为4乘4网格对应的乐器文本提示，再送入Stable Audio Open Small预生成对应音频，使生成提前于手势完成开始。播放阶段输出最高似然候选音频，若后续观测证伪则立即切换至次优音频实现回滚，从而把等待转化为命中零等待与失配快速纠正。与直接加速生成器不同，该推测执行把投机点前移至输入识别侧并以多候选覆盖不确定性，其实质是将宏观提示模型的可用性平移至微观控制。在25分钟连续交互评测下，Top\-16全集预生成的感知延迟指标为77 ms，低于无预测基线的感知延迟指标213 ms。该结论适用边界受限于4乘4离散乐器网格与2秒至3秒的受限手势，开放词汇与连续表情控制尚未验证。推理开销上原文报告手部识别平均延迟为25\.4 ms且Stable Audio Open Small在消费级图形处理器上延迟为187 ms，测试硬件为2022款Apple M2笔记本电脑。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/stabilityai/stable-audio-open-small> — 暂时无法访问
- 第三方资源：<https://github.com/magenta/magenta-realtime> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/kinivi/hand-gesture-recognition-mediapipe> — 链接可访问（HTTP 200）
- 第三方资源：<https://docs.pytorch.org/docs/stable/generated/torch.nn.LSTM.html> — 链接可访问（HTTP 200）
- 第三方资源：<https://scipy.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 83. [自带弓直接拉：离弓传感实时反推弓压与弓速去驱动摩擦模型](/posts/conference-nime-2026-conference-paper-id-nime2026-99-eabba1794a/)

> 英文题目：*[Bring Your Own Bow: Real\-Time Bowing Parameter Estimation from String Sensor Data\.](/posts/conference-nime-2026-conference-paper-id-nime2026-99-eabba1794a/)*

标签：#信号处理 #实时处理 #音乐 #音频交互

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_99/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_99.pdf)

👥 **作者与机构**

- Eoghan Ó Néill：机构信息未能从会议 PDF 纯文本可靠映射
- Maarten van Walstijn：机构信息未能从会议 PDF 纯文本可靠映射
- Miguel Ortiz：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是从单根受控弦离弓传感实时估计驱动摩擦物理模型所需的运弓力度与弓速，输入为弦支撑处反作用力与接触点附近局部弦振动感生电压，输出为连续力度与速度信号，难点在于不改动演奏者自有琴弓力学特性且满足舞台实时鲁棒性。力度支路由弦两端支撑下方单轴负载单元经电桥与仪表放大拾取反作用力，再经漂移补偿与音频速率幅度调制传输至Max/MSP并经非线性标定转为物理力度。速度支路由弦下方永磁体电磁感应获得正比于局部弦速度的电压并送入滑动循环直方图分离统计占优的粘滞相，再经邻域加权亚bin细化与一阶低通平滑得到粘滞电压，最后经视频标记跟踪标定映射为弓速。两路估计实时耦合驱动弓质量共振体模型，由位置监督门控实现摩擦激励闭环。与弓上加装传感器方案的关键机制差异在于测量点移至弦与支撑端，用靠近支撑时粘滞相速度代替直接跟踪弓体，从而保留弓的质量平衡与柔量并支持自带弓演奏。在单弦装置校准设置下，本紧凑装置的弦长指标为10 cm，低于先前装置的弦长指标20 cm。适用边界为弦长10 cm且须在磁体与支撑之间及向中点外延约2 cm内运弓，超出则粘滞主导性下降，不同弦长张力与复音外推尚未验证。推理开销上直方图法相对核密度估计计算量更低并逐样本增量更新，力度支路采用10 Hz低通以在降噪与延迟之间折中，硬件基于Bela Mini与Max/MSP部署。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 84. [不录音的磁带：用纸、磁性墨与播放机把图形变成声音](/posts/conference-nime-2026-conference-paper-id-nime2026-11-3f64a9eddf/)

> 英文题目：*[Paper Tape — A Cassette Tape without Prior Acoustic Information\.](/posts/conference-nime-2026-conference-paper-id-nime2026-11-3f64a9eddf/)*

标签：#信号处理 #音乐 #音频生成

评分：**5.6/10** | 创新 1.3/2 | 技术严谨 0.8/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音频生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_11/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_11.pdf)

👥 **作者与机构**

- Kazuhiro Jo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入为手工绘制的黑白条纹位图，输出为标准盒式播放机直接播放的声音，难点在于没有任何录音信号时仍需驱动磁电转换，同时避免油墨接触损伤磁头与走带机构。通过数字丝网制版将条纹位图转化为网版，再以磁性油墨将其转印至薄玻璃纸并手工裁成带条，网版所承载的图案由此进入纸基载体。随后用钕磁体沿纸面描摹为图案赋予磁极性，再将纸条粘接成环并装入标准卡座壳体，磁化纸环在走带时由常规磁头拾取磁场变化并发声。与UPIC与MetaSynth等依赖计算机变换的软件映射类图像到声音转换相比，其关键机制差异在于完全依赖播放机既有磁头与走带功能而不引入专用解码计算，因而可直接作为乐器演奏。在磁性颗粒显微结构对比条件下，磁性油墨的颗粒尺寸指标约为10 μm，高于标准磁带的颗粒尺寸指标约0\.1 μm。该结论适用边界仅限手工制作的短环纸带与特定播放机及多轨展演组合，其跨机型一致性、长期耐久性与可控音高合成能力尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://x.gd/nmPW3> → <https://www.dropbox.com/scl/fo/ruab21zm2ommtokr08e9l/ACq3m8D29x0t8-0YtAiBF2Q?rlkey=6461qzw0wcqbkrgz1g21q3lms> — 链接可访问（HTTP 200）
- 复现相关资源：<https://x.gd/nmPW3> → <https://www.dropbox.com/scl/fo/ruab21zm2ommtokr08e9l/ACq3m8D29x0t8-0YtAiBF2Q?rlkey=6461qzw0wcqbkrgz1g21q3lms> — 链接可访问（HTTP 200）
- 第三方资源：<https://hackaday.com/2011/12/16/> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.5281/zenodo.17084386> → <https://zenodo.org/doi/10.5281/zenodo.17084386> — 暂时无法访问
- 第三方资源：<https://metasynth.com/> → <https://uisoftware.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 85. [不用买一柜子硬件：用一对一镜像把跳线手感搬回屏幕里](/posts/conference-nime-2026-conference-paper-id-nime2026-119-767572775e/)

> 英文题目：*[Umbilical: A Hybrid System for Creating Custom Modular MIDI Controllers \- A Eurorack/VCV Rack Case Study\.](/posts/conference-nime-2026-conference-paper-id-nime2026-119-767572775e/)*

标签：#教育 #信号处理 #实时处理 #音乐 #音频交互

评分：**5.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_119/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_119.pdf)

👥 **作者与机构**

- Celeste Betancur Gutiérrez：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作解决通用MIDI控制器过于抽象、无法复现模块化合成中跳线插拔这一核心具身手势的问题，输入是演奏者在物理面板上的旋钮、开关与跳线拓扑操作，输出是对VCV Rack中对应虚拟参数与虚拟线缆路由的实时双向同步，难点在于以低成本微控制器实现高密度传感与千级跳线检测并稳定映射到屏幕模块图而不引入重映射负担。方法链由三步构成：首先宿主内数字共生体模块拦截VCV Rack内部API并转译为串口、MIDI与OSC消息，其输出进入基于ATmega2560经多路复用器阵列扩展的高密度母板；随后母板以行列扫描检测物理跳线连通并回传旋钮与开关状态；最后宿主端经摆率限制滤波与地址映射将硬件地址平滑写入虚拟控件。与Expert Sleepers ES\-8/ES\-9音频速率电压桥接和Bela等独立数字信号处理盒不同，该系统坚持严格一对一物理镜像并以跳线检测为核心交互，借用宿主算力解耦接口成本与数字信号处理引擎，具有降低教学与演出抽象负担的实际意义。原文未提供可核对的关键定量结果。该结论的适用边界受限于作者迭代演奏与课程非正式反馈的中小规模演示，未验证大规模并发路由、音频速率调制与跨用户可用性等尚未验证的外推范围。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 86. [把节奏写成代码再走成地图：BeatMohan 交响曲如何支架化模式组织](/posts/conference-nime-2026-conference-paper-id-nime2026-149-da88a3ee5b/)

> 英文题目：*[BeatMohan’s Symphony: Designing a Game Environment to Scaffold Pattern\-Based Musical Organization\.](/posts/conference-nime-2026-conference-paper-id-nime2026-149-da88a3ee5b/)*

标签：#教育 #游戏音频 #用户研究 #符号音乐生成

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#符号音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_149/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_149.pdf)

👥 **作者与机构**

- Noel Alben：机构信息未能从会议 PDF 纯文本可靠映射
- Jason Freeman：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入为新手在浏览器控制台编写的多声部鼓机节奏代码，输出为同步声音与二维角色位移，难点在于让无编码与作曲经验者理解时值、重复与分层等抽象组织概念。Strudel模式引擎先解析迷你记谱并调度音频事件，为后续视听同步提供时间基准。随后系统将事件相位映射为类步进音序器网格上的金币与熔岩狮位置及角色移动与碰撞中断，使节奏正误直接可见可听。随后固定关卡序列从单声部位置匹配推进到多声部未知格预判与重复算子抽象，前关形成的检查与推理习惯直接进入后关复杂推理。在单次引导式解谜任务设置下，最长会话的持续时长指标为60分钟，高于最短会话的持续时长指标为45分钟。与开放式EarSketch与Sonic Pi相比，关键差异是将正确节奏编码作为过关必要条件，使试错具有即时中断反馈与可检查符号依据，从而把音乐组织转为目标导向解谜。结论适用边界受限于五名新手单次引导式解谜情境，尚未验证节奏能力提升与向旋律及开放即兴的迁移。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://runme.org/project/+aljazari/index.html> — 链接可访问（HTTP 200）
- 第三方资源：<https://strudel.cc/> — 链接可访问（HTTP 200）
- 第三方资源：<https://shittyrecording.studio/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 87. [软件即乐器：COMDASUAR 如何把逆行写成可执行的硬件动作](/posts/conference-nime-2026-conference-paper-id-nime2026-15-1b52d83caf/)

> 英文题目：*[Software as Instrument: COMDASUAR and the Co\-Design of Code and Hardware\.](/posts/conference-nime-2026-conference-paper-id-nime2026-15-1b52d83caf/)*

标签：#信号处理 #实时处理 #音乐 #符号音乐生成

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#符号音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_15/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_15.pdf)

👥 **作者与机构**

- Rodrigo Cadiz：机构信息未能从会议 PDF 纯文本可靠映射
- Federico Schumacher：机构信息未能从会议 PDF 纯文本可靠映射
- Juan Parra Cancino：机构信息未能从会议 PDF 纯文本可靠映射
- Michel Rozas：机构信息未能从会议 PDF 纯文本可靠映射
- Tomás Koljatic：机构信息未能从会议 PDF 纯文本可靠映射
- Miguel Farias：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

COMDASUAR以Intel 8080为核心经数模转换驱动压控振荡器、滤波器与放大器，输入为键盘键入的字节流符号语音与面板实时控制，难点是在极小内存下同时支撑符号作曲变换与实时演奏。作者先清点硬件链路，明确Intel 2708可擦除可编程只读存储器、Intel 8255外设接口与数模转换级的连接关系，其输出的系统框图为后续代码定位提供地址与信号依据。接着把手写十六进制笔记本机械转译为8080助记符，将CALL、MOV、CMP等操作与FE终止符、F3滑音标记的语义对齐，使字节流可作为乐谱结构被解读。然后以逆行子程序贯通符号编码与执行逻辑，前一步定位的FE终止符与F3标记直接决定后一步双指针原地反转与修正行为，变换结果即时改变下一次播放循环的内存内容。在语音逆行任务设置下，起始指针阶段的计数指标为0，从0升至中点停止阶段的计数指标一半。与把软件视为中性实现层的传统乐器史叙述不同，该工作把逆行、卡农、插值与概率操作论证为常驻内存的可执行乐器功能，滑音方向等音乐语义必须在字节反转后重新对齐。该结论适用边界受限于单台档案乐器与单条逆行路径的解释，尚未验证到复调、即兴调用时延或完整曲目重演的外推范围，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 88. [把效果器参数铺成地图：FXplorer 让找声音先漫游再细调](/posts/conference-nime-2026-conference-paper-id-nime2026-167-3f1d05f68a/)

> 英文题目：*[FXplorer: A Map\-Based Interface for Exploratory Audio Effects Design\.](/posts/conference-nime-2026-conference-paper-id-nime2026-167-3f1d05f68a/)*

标签：#软件工具 #多模态学习 #音频交互 #音频检索

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#多模态学习

会议来源：[官方记录](https://nime.org/proc/nime2026_167/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_167.pdf)

👥 **作者与机构**

- Annie Chu：机构信息未能从会议 PDF 纯文本可靠映射
- Jason Smith：机构信息未能从会议 PDF 纯文本可靠映射
- Bryan Pardo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频效果设计的输入是用户上传的干声与模糊语义意图，输出是可直接使用的效果器链参数，难点在于参数空间高维非线性且链内存在顺序相关，逐个试听回滚成本极高。FXplorer的方法链分为三步：先用Pedalboard对用户勾选模块随机采样参数配置并离线渲染变体，其输出音频进入嵌入与降维步骤。该步骤用AFx\-Rep与CLAP双嵌入编码音色相似与语义关联，再各自经PCA降至2D形成可切换的同一变体集地图。最后浏览器端以悬停即播与点击锁定支持低承诺试听并以参数空间插值实现连续过渡，而Inspector编辑经重嵌入与样本外投影以幽灵点回写地图。相比返回孤立结果的语义检索与固定语料地图乐器，该机制把检索结果置于邻域中并保持参数可解释与空间可回写，使发散探索与收敛精修共处同一工作区。在target\_samples为100且新干声时长为2s的设置下，GPU条件的总耗时指标为30\.89秒，低于CPU条件的总耗时指标36\.95秒。该结论适用边界受限于短采样与离线预生成模式，尚未验证地图邻域感知一致性、长音频与大规模变体可扩展性及真实创作收益，端到端延迟主要来自嵌入阶段且受硬件影响，GPU显著降低该阶段耗时。

🔗 **开源资源**

- 第三方资源：<https://svelte.dev/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/spotify/pedalboard> — 链接可访问（HTTP 200）
- 第三方资源：<https://aimc2023.pubpub.org/pub/zgc5j7ha> — 链接不可用（HTTP 403）
- 第三方资源：<https://experiments.withgoogle.com/ai/drum-machine/> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 89. [冷启动难不在模型大小：用结构化上下文把语言描述变成可运行的音乐人工生命](/posts/conference-nime-2026-conference-paper-id-nime2026-170-199bf3b839/)

> 英文题目：*[Accessible Musical ALife Through LLM Co\-Creation\.](/posts/conference-nime-2026-conference-paper-id-nime2026-170-199bf3b839/)*

标签：#开源工具 #提示学习 #检索增强 #音乐生成

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#提示学习

会议来源：[官方记录](https://nime.org/proc/nime2026_170/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_170.pdf)

👥 **作者与机构**

- Michael Clemens：机构信息未能从会议 PDF 纯文本可靠映射
- Piotr Walas：机构信息未能从会议 PDF 纯文本可靠映射
- Victor Shepardson：机构信息未能从会议 PDF 纯文本可靠映射
- Jack Armitage：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理从自然语言行为与音乐意图描述到可发声人工生命模拟的映射，输入为物种行为与声音意图语句，输出为可执行的Taichi粒子核函数加开放声音控制输出与SuperCollider伴随补丁，难点在于大模型对低资源领域专用语言缺乏数据且GPU内核类型约束极严。首先分解器将描述拆为物种、状态变量与原子行为专家需求，其输出进入上下文选择器按需挑选3至5个领域模块。随后专家合成器在类型规则约束下逐个生成GPU核函数，其多个专家函数再交由模板组合器用Jinja2组装为完整可运行草图并按音乐关键词触发OSC平滑映射。与直接堆放完整代码库文档的做法不同，该管线强调结构化分解与按需检索而非上下文量，具有冷启动出首版可改草图的实际意义。在8提示词三条件对比评测下，Sonnet 4\.5管线条件的执行通过率指标为6/8，高于零样本基线条件的执行通过率指标的0/8。该结论适用边界仅限语法与短时可执行性，行为保真度与音乐效用尚未验证，且本地小模型受限于内核类型约束仍普遍失败。原文披露的推理开销包括重复调用商业托管模型的多次推理与GPU执行Taichi模拟的计算量，单次草图生成尚属适度但多模型多条件迭代评测会累积可观能量消耗。

🔗 **开源资源**

- 第三方资源：<https://jinja.palletsprojects.com/en/stable/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 90. [无障碍不是修好乐器：从一首诗长出的合奏文化](/posts/conference-nime-2026-conference-paper-id-nime2026-24-7d52dd2505/)

> 英文题目：*[In The Round: Exploring the Cultural Model of Disability in Accessible Music Improvisation\.](/posts/conference-nime-2026-conference-paper-id-nime2026-24-7d52dd2505/)*

标签：#用户研究 #音乐 #音频交互 #音乐生成

评分：**5.6/10** | 创新 1.3/2 | 技术严谨 0.9/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_24/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_24.pdf)

👥 **作者与机构**

- Ciaran Frame：机构信息未能从会议 PDF 纯文本可靠映射
- Steph O'Hara：机构信息未能从会议 PDF 纯文本可靠映射
- Alon Ilsar：机构信息未能从会议 PDF 纯文本可靠映射
- Melinda Smith：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理身心障碍与非障碍乐手共演即兴的输入输出问题，输入是差异巨大的运动幅度、言语与扩增替代沟通方式，输出是约50分钟环绕式集体即兴，难点在于即兴可读性与个体演奏自主性难以兼顾。第一步在2024年6月至12月开展11场一对一个体工作坊，负责建立身体映射偏好、接入需求与信任，其记录的映射范围与排练结构偏好进入下一步。第二步以2025年3月检查点开放即兴让全体首次合流试探合奏，其暴露的协作问题进入2025年4月至11月双周固定时段小组排练，通过迭代配器与共享博客日志把偏好固化为社会技术约定。第三步由Melinda Smith创作的诗歌提供七段共享乐谱，负责把文本线索转写为空气鼓棒音色切换与分段时长，再于2025年12月4日墨尔本演奏厅无舞台环绕布局中检验整体。相对只优化映射与合成的思路，关键差异在于把排期弹性、视觉提示与时间仪式视为乐器构成部分，以诗歌作边界对象协调不同经验者，其实质意义是把可及性从技术适配转为文化共创。原文未提供可核对的关键定量结果。该结论适用边界受限于长期共创的小规模社群，直接搬到短期教学或大型音乐厅是否成立尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 91. [扇子为中心、社群为尺度：中越扇舞互动乐器的社区知情设计](/posts/conference-nime-2026-conference-paper-id-nime2026-40-cd20e5ea89/)

> 英文题目：*[Interactive Fan Dance: Towards a Community\-Informed, Culturally Situated Interactive Dance Instrument \.](/posts/conference-nime-2026-conference-paper-id-nime2026-40-cd20e5ea89/)*

标签：#软件工具 #用户研究 #环境声 #音频交互

评分：**5.6/10** | 创新 1.3/2 | 技术严谨 0.9/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_40/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_40.pdf)

👥 **作者与机构**

- Jason Gao：机构信息未能从会议 PDF 纯文本可靠映射
- Shirley Nguyen：机构信息未能从会议 PDF 纯文本可靠映射
- Alexandria Smith：机构信息未能从会议 PDF 纯文本可靠映射
- Brian Magerko：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入是美籍中越离散社群扇舞实践与舞者口述，输出是文化嵌入式交互扇乐器，难点在于传统身份随社群层级与个体记忆漂移且高度具身化，难以用固定动作声音映射固化。首先对18名舞者开展单人半结构化访谈并做主题分析，由204个开放编码收敛为29个轴向编码与4大主题9子主题，输出文化传统社群个体框架进入下一步。接着将以扇为中心等判据转译为单把短尾折扇形态与电位器握力IMU按键选型，使硬件承接道具敬畏与单手多用约束。最后在Max MSP中以线性加速度控水流音量、握力插值溪流湍流音色、按键触发水花声实现叠加伴奏的装饰性发声，并经两名舞者即兴编舞初评迭代。在访谈招募场景下，女性舞者的人数指标为16，高于男性舞者的人数指标2。相较以往以当代舞通用控制器加文化点缀的做法，该工作以道具中心性与社群即时性约束设计，使技术点缀而不取代完整剧目传承。结论适用边界受限于受访美籍中越社群与短尾单扇独舞或中心位场景，尚未验证双扇群舞长尾水袖美学与完整文化表演中介效果。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 92. [当可穿戴乐器走进弗雷沃：Giromin 驻留中两种乐器观的相遇与摩擦](/posts/conference-nime-2026-conference-paper-id-nime2026-56-761509fc1c/)

> 英文题目：*[Giromin Residency Report: Creative Exploration by Musicians and Dancers from Frevo and Afro\-Brazilian traditions\.](/posts/conference-nime-2026-conference-paper-id-nime2026-56-761509fc1c/)*

标签：#用户研究 #音乐 #音乐生成

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_56/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_56.pdf)

👥 **作者与机构**

- João Tragtenberg：机构信息未能从会议 PDF 纯文本可靠映射
- Filipe Calegario：机构信息未能从会议 PDF 纯文本可靠映射
- Eva Rolim Miranda：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以全身动作为输入、以实时声音为输出的可穿戴演奏，难点在于弗雷沃与Afro巴西传统的离散打击性节奏精度与连续传感映射之间存在本体错位，实验室效率度量无法捕捉文化协商过程。惯性传感与姿态融合负责输出连续朝向与离散峰值事件，其中峰值检测通过识别局部最大值将空中打击手势转为离散触发。该输出经无线传输进入可视化编程补丁完成手势到声音参数绑定，补丁中的平滑、阈值与映射范围隐含了何种运动被优先的美学假设。绑定结果再由驻留音乐家与舞者通过具身即兴检验并要求实时改写，改写意见经由反思性主题分析提炼为六个主题以指导下一轮迭代。相比以参数控制为中心的设计，本文把乐器视为文化协商过程，强调高层文化对应而非低层连续调制，其实质意义在于将技术限制转为扩展技巧的表达材料。在两月驻留观察与访谈分析设置下，Tomás Brandão的数字经验指标为8 yrs，高于Henrique Albino的数字经验指标5 yrs。结论适用边界受限于熟悉音乐舞蹈双重具身的表演者与街头集体排练场景，尚未验证无舞蹈训练的纯器乐控制或高精度打击触发下的外推，电池与延迟等结构性约束构成明确失败条件。原文未披露训练、推理或部署成本，本工作不涉及机器学习训练。

🔗 **开源资源**

- 演示资源：<https://pacodofrevo.org.br/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 93. [不用对钟也能合奏：用空间排布与关系感知组织声音群体](/posts/conference-nime-2026-conference-paper-id-nime2026-122-c4c6ed18a0/)

> 英文题目：*[Sound Swarm: A Synthetic Ecology of Embodied Mesh Synthesizers for Emergent Soundscapes\.](/posts/conference-nime-2026-conference-paper-id-nime2026-122-c4c6ed18a0/)*

标签：#软件工具 #图神经网络 #空间音频 #端侧运行 #音乐生成

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#图神经网络

会议来源：[官方记录](https://nime.org/proc/nime2026_122/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_122.pdf)

👥 **作者与机构**

- Mikhail Mansion：机构信息未能从会议 PDF 纯文本可靠映射
- Yasuaki Kakehi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Sound Swarm面向具身声学群体，输入为节点空间排布与共享声场感知，输出为去中心化持续音景，难点在于传播延迟、掩蔽、反射与空间异质性使事件级同步与总谱控制失效。先由感知层输入有序对间射频信号强度与声级观测，负责轮询校准并组装关系张量，经边缘编码器回归输出距离矩阵。再将该距离矩阵输入经典多维缩放，负责解算相对几何并输出幽灵地图。最后将幽灵地图的近邻集合、局部密度与簇结构送入行为与表达层，负责抑制性相位耦合、角色选举与拓扑标量到合成参数的映射，输出持续音色变化。相对虚拟群体音乐，其差异在于把声场本身作为记忆与耦合介质，并以推断邻域结构参数化耦合增益而非指定音符，因而空间排布成为作曲条件。在N=10布局划分合成验证条件下，组合模型的kNN准确率为77\.9% ± 8\.8%，高于RSSI\-only模型的kNN准确率67\.5% ± 13\.8%。该结论适用边界受限于受控合成模型与十节点规模，真实房间多径与大规模稀疏观测尚未验证，而193参数模型的硬件推理开销可兼容ESP32级设备在端侧运行。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 94. [不重放历史声音：用水扰动驱动神经合成的克制式记忆装置](/posts/conference-nime-2026-conference-paper-id-nime2026-126-dbc567c78e/)

> 英文题目：*[Drifting in Currents of Currents: A Hydro\-Acoustic Interface for Gesture\-Driven Neural Sound Synthesis and Entropic Memory\.](/posts/conference-nime-2026-conference-paper-id-nime2026-126-dbc567c78e/)*

标签：#变分自编码器 #环境声 #音频生成 #音频交互

评分：**5.5/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频生成 | 主方法：#变分自编码器

会议来源：[官方记录](https://nime.org/proc/nime2026_126/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_126.pdf)

👥 **作者与机构**

- Tak Cheung Hui：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaoqiao Li：机构信息未能从会议 PDF 纯文本可靠映射
- Chun\-ting Chan：机构信息未能从会议 PDF 纯文本可靠映射
- Cheuk\-Kit Chung：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文针对坦卡船民水上宇宙技术消散后离散记忆难以直接再现、且易被档案化转写简化为静态文物的难题，以单人非接触手势与盐水箱扰动为输入，以神经合成声经由水体与箱体共振辐射的空间化聆听为输出，难点在于记忆只能经由不稳定、延迟与漂移间接感知而不可检索复现。方法链由三步衔接构成：第一步由左右特雷明琴分别映射历史距离与环境湍流的横纵坐标，驱动顶部绘图仪拖动水下水听器产生湍流、空化与共振噪声；第二步以上一步的水声噪声作为激励信号，直接送入在太澳与香港仔海岸声步道语料上训练的神经模型进行环境纹理再合成，同时保留感知可辨的推理延迟作为作曲层。第三步以盐水歌文本残片触发限时幅度包络对神经输出做象征性门控而不发声，并经由贴附于水箱与基座的多个换能器回灌振动形成水声反馈回路，使后一步共振状态持续改变前一步输入条件。相比以水面交互、触觉反馈或潜空间漫游为中心的既有水声乐器与神经合成乐器，该机制把非线性流体与推理延迟本身作为激励层与作曲材料，并以遮蔽与不可重复性强制克制性聆听，具有伦理克制的实际意义。原文未提供可核对的关键定量结果。该结论适用边界受限于单人操作的展览情境，尚未验证多人协作或可复现演奏的外推，且水声反馈存在相同手势不复现的失败条件。系统推理开销体现为约九十至二百五十毫秒的神经推理延迟与双层时间结构。

🔗 **开源资源**

- 第三方资源：<https://doi.org/10.5281/zenodo.15699550> → <https://zenodo.org/records/15699550> — 链接可访问（HTTP 200）
- 第三方资源：<https://ecoartasia.net/BOS/BOS_chi.html> → <https://wedecideca.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 95. [独自一人也不独奏：用相似手势召回过去合奏的木板乐器](/posts/conference-nime-2026-conference-paper-id-nime2026-131-e89c416123/)

> 英文题目：*[Lagu Hantu: Creating computationally\-mediated ensembles across time\.](/posts/conference-nime-2026-conference-paper-id-nime2026-131-e89c416123/)*

标签：#检索增强 #用户研究 #音乐 #音频交互

评分：**5.5/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#检索增强

会议来源：[官方记录](https://nime.org/proc/nime2026_131/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_131.pdf)

👥 **作者与机构**

- Anastasha Rachel Gunawan：机构信息未能从会议 PDF 纯文本可靠映射
- Matthew Caren：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作针对异步参与者如何获得共处合奏感的问题，输入为半圆形布置的五块硬木面板上敲击摩擦描摹等触觉振动，输出为经调音渲染的实时音响与来自过去合奏的伴奏回放及全程持续的背景声床，其难点在于无显式同步下让历史触碰以合奏者身份即时呼应当前手势。先由传感预处理负责隔离有效触碰，其输入为面板背侧压电采集的原始振动，职责是以带通滤波组与包络控制瞬态塑形去除噪声，输出为干净触碰信号并直接送入卷积渲染。再由卷积渲染负责音色转化，其输入为上一步的干净触碰信号，职责是与甘美兰锣脉冲响应卷积为佩洛格五声音阶子集色彩的调性声音，输出的调性声音同时进入直接扩声与实时特征计算。最后由跨时间检索负责伴奏生成，其输入为上一步输出的实时音频特征，职责是以加权欧氏距离在同面板历史嵌入中最近邻搜索最相似时刻，并取出当时其他面板并发快照经同样卷积后回放，从而实现当前手势到历史合奏的映射。相较于OMax Brothers、Continuator等重组或生成新材料的机器即兴，该机制坚持忠实回放历史并发快照，使历史材料作为显性合奏者而非隐性训练数据出现。原文未提供可核对的关键定量结果。该结论适用边界受限于单人触发回放与多人优先实时合奏的公共画廊装置情境，向节奏相似性与对比性伴奏等外推尚未验证。其推理开销方面原文披露数千样本库下线性检索单次查询延迟为亚毫秒级并经中央计算机与多通道扬声器部署，无学习型模型故无训练成本。

🔗 **开源资源**

- 第三方资源：<https://www.gamelatron.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 96. [不出错比出彩更难：CamJam 用四个摄像头乐器拼一个协同乐队](/posts/conference-nime-2026-conference-paper-id-nime2026-150-2b82b4f4bb/)

> 英文题目：*[CamJam: A Modular Collaborative and Accessible Digital Musical Interface\.](/posts/conference-nime-2026-conference-paper-id-nime2026-150-2b82b4f4bb/)*

标签：#用户研究 #音视频 #音乐 #音乐生成

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_150/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_150.pdf)

👥 **作者与机构**

- Frej Lorenzen：机构信息未能从会议 PDF 纯文本可靠映射
- Kevin Hansen：机构信息未能从会议 PDF 纯文本可靠映射
- Emil Zawistowski：机构信息未能从会议 PDF 纯文本可靠映射
- Eirini Liapikou：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

可及合奏要求无训练用户在多人并发演奏中保持音准节奏且不中断参与，而纯相机传感易受光照遮挡与表情误识影响，协作也常退化为各自独奏。CamJam以两台经Ableton Link同步的MacBook为骨干，先由Python结合MediaPipe手部追踪、Mini\-Xception表情识别与OpenCV明暗扫描从视频流抽取手部位姿、表情类别与亮度波形特征，再经开放声音控制协议送入Max/MSP与Max for Live进行映射与时钟对齐，最后由Faust物理建模拨弦、C大调量化与8步鼓循环加4拍和弦循环约束生成鼓、贝斯、拨弦与对比度合成声。相对LoopBoxes按钮音序与Sound Forest预置采样的离散触发机制，差异在于以连续具身手势直接控制生成式合成并用和声约束兜底，从而保留表达连续性又避免无失败参与下的失谐失拍。在36名大学生分组轮换加自由即兴的评测设置下，弦乐模块的直观性得分为4\.28，高于整体易用性得分的3\.4。该结果的适用边界受限于光照良好的实验室短时体验且未在儿童或残障目标群体中直接验证，表情追踪不可靠与协作支架不足仍是主要失败条件。原文未披露训练、推理或部署成本，15 ms延迟仅为设计要求而未实测。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 97. [一部手机如何托住一条嗓音：VoixTenue 的手势音高与力度控制](/posts/conference-nime-2026-conference-paper-id-nime2026-165-fd38df9877/)

> 英文题目：*[VoixTenue: Exploring Real\-Time Gestural Control of Vocal Synthesis on a Mobile Phone\.](/posts/conference-nime-2026-conference-paper-id-nime2026-165-fd38df9877/)*

标签：#信号处理 #端侧运行 #实时处理 #语音 #语音合成

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#语音合成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_165/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_165.pdf)

👥 **作者与机构**

- Adrien Scazzola：机构信息未能从会议 PDF 纯文本可靠映射
- Xiao Xiao：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

VoixTenue面向手机端实时人声乐器场景，输入为触屏纵向滑动或机身俯仰与横滚姿态及晃动，输出为可控基频、响度与颤音轮廓的合成元音或短语嗓音，难点在于小屏幕与抖动传感下兼顾低延迟、直觉映射与可懂发音。手势采集与校准负责记录陀螺仪中立欧拉角并求相对角，对触点高度或倾角做归一化与指数平滑，其输出的目标声学参数进入映射阶段。参数映射负责将俯仰角经对数关系转为E2–E5目标频率、将横滚角经线性关系转为响度，并由角速度峰值触发6Hz颤音，其输出连同音位配置送入合成器。音位内容指定与音频渲染负责在元音模式选择构音配置、在短语模式将文本转写为可编辑音标并叠加自动释放的辅音收缩，再在AudioWorklet高优先级线程中驱动Pink Trombone源\-滤波器模型合成。与既往依赖笔记本完成映射或合成的平板与Theremin系统相比，关键差异是传感、映射与合成全在浏览器端单设备闭环，实际意义是提升便携性与课堂可用性并支持纵向韵律训练探索。在陀螺仪俯仰映射条件下，最小倾角的目标频率指标为82\.41 Hz，低于中立位的目标频率指标233 Hz。该结论适用边界受限于作者演示场景，尚未验证音准精度、延迟分布与学习增益，外推至舞台演出或二语韵律训练仍需实证。原型推理开销依托浏览器AudioWorklet高优先级线程，设计以约16ms周期传输参数以控制延迟。

🔗 **开源资源**

- 第三方资源：<https://imaginary.github.io/pink-trombone/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/zakaton/Pink-Trombone> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 98. [NIME 谈触觉时其实在谈实现：119 篇文献的语义编码与三主题证据](/posts/conference-nime-2026-conference-paper-id-nime2026-5-dce23bca96/)

> 英文题目：*[What NIME talks about when it talks about touch\.](/posts/conference-nime-2026-conference-paper-id-nime2026-5-dce23bca96/)*

标签：#数据标注 #文献综述方法 #音乐 #音乐理解

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：前50% | 文档类型：综述 | 主任务：#音乐理解 | 主方法：#文献综述方法

会议来源：[官方记录](https://nime.org/proc/nime2026_5/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_5.pdf)

👥 **作者与机构**

- S\. M\. Astrid Bin：机构信息未能从会议 PDF 纯文本可靠映射
- maj nikita doehring：机构信息未能从会议 PDF 纯文本可靠映射
- Berit Greinke：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以NIME档案中标题与摘要显式出现touch的论文为输入，输出其触觉概念使用的主题结构，难点在于触觉横跨物理接触、隐喻表达与技术实现且长期缺乏明确定义。方法链分三步：先以通配符touch检索2001–2025年Zenodo完整档案的标题与摘要并经三人独立核验剔除偶发提及以构建候选语料，上步的初筛结果进入正文语境的语义编码环节逐篇检索touch并复制首个代表性实例至表格去重。最后将编码打印剪贴为可移动卡片，经多轮分桶排序与讨论合并为互斥归属的三大主题，上一步的526条编码由此进入主题建构与论文分布统计。相对已有综述多依赖外部触觉或具身框架进行阐释，该文坚持只分析字面表述而不推断潜在意图，从而呈现领域自身的真实词汇并揭示操作性描述主导话语的现状。在119篇论文构成的语料下，应用技术与设计主题的编码占比指标为86\.1%（453/526条），高于历史与语境主题的编码占比指标7\.6%（40条）。结论的适用边界仅限于以touch显式表述为边界的NIME话语，无法外推至触感、体感或手势等相邻概念，且所提追问能否指导新乐器设计尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 99. [看不见的空气如何被听见：用身体移动演奏污染数据的集体聆听装置](/posts/conference-nime-2026-conference-paper-id-nime2026-70-edba90aeaf/)

> 英文题目：*[A Community Moving with Air in the immersive Sound Installation HUELLAS DE AIRE \(Traces of Air\)\.](/posts/conference-nime-2026-conference-paper-id-nime2026-70-edba90aeaf/)*

标签：#信号处理 #用户研究 #空间音频信号 #音频交互

评分：**5.5/10** | 创新 1.3/2 | 技术严谨 0.9/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_70/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_70.pdf)

👥 **作者与机构**

- Ximena Alarcón\-Díaz：机构信息未能从会议 PDF 纯文本可靠映射
- Esteban Henao：机构信息未能从会议 PDF 纯文本可靠映射
- Ron Herrema：机构信息未能从会议 PDF 纯文本可靠映射
- Adriana María Gutiérrez\-Grisales：机构信息未能从会议 PDF 纯文本可靠映射
- Juan Felipe Amaya\-Álvarez：机构信息未能从会议 PDF 纯文本可靠映射
- Jorge Bejarano Barco：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

HUELLAS DE AIRE面对的输入是麦德林不可见的空气与PM2\.5污染数据，期望输出是观众以身体移动即可感知污染与呼吸记忆的沉浸声场，难点在于污染数据时间粒度粗而呼吸体验主观私有，公共展厅还需鲁棒的多人实时交互。方法链第一步以14人3日工作坊通过深度聆听采集个体与集体呼吸声，形成Traces of Air 1至4素材库并直接进入下一步作曲与映射设计。第二步由艺术家把历史污染序列与生成合成映射为连续声层，并绘制声关系图谱以指导传感器映射与扩声实现。第三步用8路超声近距离传感器与拍手检测麦克风驱动Pure Data/BELA CTAG Beast实时引擎，经四声道参数声化层与6声道二阶Ambisonics纪实层输出，随距离改变回放速率与声质密度。在MAMM展厅多人实时交互设置下，超声传感子系统的通道数指标为8路，高于拍手检测麦克风子系统的通道数指标为1路。与已有数据声化作品的关键机制差异在于把均值距离控制数据回放速率与滤波器中心频率的宏观映射，与每路传感器控制正弦振荡器频率并随机触发呼吸采样的微观映射分离到不同扩声子系统，从而兼顾环境可读性与身体演奏性。该结论适用边界限于MAMM展厅特定布设与引导式参观，尚未验证无引导观众自主发现率、长期运行稳定性与跨城市迁移效果，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://intimal.net/> → <https://intimalnet.wordpress.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://blog.bela.io/suspended-circles-tove-grimstad-bang/> — 链接可访问（HTTP 200）
- 第三方资源：<https://participatorymuseum.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://blog.bela.io/rebus/> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.1037/amp0000399> → <https://doi.apa.org/doi/10.1037/amp0000399> — 链接不可用（HTTP 403）
- 第三方资源：<https://doi.org/10.5281/zenodo.1177903> → <https://zenodo.org/records/1177903> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 100. [手势进机器之后还剩什么：拉美赛博格主义的三次智利实践](/posts/conference-nime-2026-conference-paper-id-nime2026-75-0b2411d2b7/)

> 英文题目：*[Re‑Embodying, Situating, and Resisting: Creative Strategies for a Latin American Cyborgism\.](/posts/conference-nime-2026-conference-paper-id-nime2026-75-0b2411d2b7/)*

标签：#生物声学监测 #多模态学习 #环境声 #音频理解

评分：**5.5/10** | 创新 1.3/2 | 技术严谨 0.7/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：理论研究 | 主任务：#音频理解 | 主方法：#多模态学习

会议来源：[官方记录](https://nime.org/proc/nime2026_75/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_75.pdf)

👥 **作者与机构**

- Gustavo Guzmán：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以NIME中被量化为数据与控制参数的手势实践为输入，以具身政治批判与拉丁美洲在地抵抗策略为输出，难点在于手势兼具自然与编码、普遍与地方的双重性而难以被既有参数模型穷尽。接着梳理手势即数据与手势即控制的话语，揭示分类学与映射范式如何窄化关系性，其输出的批判诊断进入下一步重构。然后引入赛博格隐喻并改造为拉丁美洲赛博格主义，把混合性从隐喻转为物质抵抗条件，为案例阐释提供政治与物质锚点。再以三个智利案例承接阐释，分别负责抗议运动分析、远程具身重构与生态公民技术验证，使框架落到具体实践。在田野录音处理条件场景下，压缩后录音的时长尺度指标为1/4，低于原始录音的时长尺度指标1，从时长尺度指标1降至时长尺度指标1/4仅为单一制作参数而非基线对照实验。原文未提供可核对的关键定量结果。相比既有映射与潜在空间研究，其机制差异在于把手势视为技术输入、文化文本与界面抵抗的三重协商而非待优化控制信号，从而保留文化记忆与情感重量并打开公民自主空间。结论适用边界受限于智利语境下的小型艺术行动与工作坊观察，尚未验证跨地域推广与长期社会效果。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 101. [不用电也能演奏：气压回路如何同时成为乐器、乐谱与演奏者](/posts/conference-nime-2026-conference-paper-id-nime2026-80-3d42a7289f/)

> 英文题目：*[The Aerophone Kit: A Toolkit for Pneumatic Musical Instrument Design\.](/posts/conference-nime-2026-conference-paper-id-nime2026-80-3d42a7289f/)*

标签：#用户研究 #音乐 #音频交互 #音乐生成

评分：**5.5/10** | 创新 1.3/2 | 技术严谨 0.8/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_80/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_80.pdf)

👥 **作者与机构**

- Francesco Di Maggio：机构信息未能从会议 PDF 纯文本可靠映射
- Catharina Maria van Riet：机构信息未能从会议 PDF 纯文本可靠映射
- Sergio Picella：机构信息未能从会议 PDF 纯文本可靠映射
- Berry Eggen：机构信息未能从会议 PDF 纯文本可靠映射
- Bart Hengeveld：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务输入为手指封堵触点与电动气泵提供的共享气流，输出为哨声旋律与自主节奏脉冲，难点在于气压耦合、空气可压缩性与硅胶阀膜弹性蠕变使音高与时序随压力漂移且相互牵制。方法链第一步搭建可重构气网，以哨子模块、储气腔、流量控制阀与单向阀对应电压电流与电容逻辑，输出稳定可分配的压力与流量基础。第二步进行声学整定，将管长管径决定的流体电容与鸭嘴硅胶膜时变流阻耦合建模，并以数值积分预测发声频率趋势，其预测结果直接指导管体几何与阀膜选型进入下一步封装。第三步做交互封装，把整定后的哨子分别装配为面包板式键盘旋律界面与储气加节流加单向阀构成的自振荡节奏单元，两者共享单气泵并可叠层组合实现旋律与节奏分层。在以自由探索与访谈评估构成的用户评测设置下，评估阶段的时长指标为15分钟，高于自由探索阶段的时长指标10分钟。与机械自动乐器和电子音序器相比，关键机制差异在于不用机械存储或数字符号序列写入结构，而是让音高音色与时序从流体阻容充放与单向导通动力学中涌现，使系统状态可听且具表现性可变性。结论适用边界受限于实验室电驱气泵短时探索与十人大学便利抽样，尚未验证人吹气或脚踏风箱驱动下的音准稳定性与长时间保持及向更广泛音乐群体的推广。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 102. [可预测就电一下：用现场学习的惩罚迫使即兴演奏者不断换招](/posts/conference-nime-2026-conference-paper-id-nime2026-110-cf5602fcf2/)

> 英文题目：*[A Live\-learning Punitive Interface for Improvisational Performance Dynamics\.](/posts/conference-nime-2026-conference-paper-id-nime2026-110-cf5602fcf2/)*

标签：#测试时自适应 #生理信号 #音乐 #音频交互

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#测试时自适应

会议来源：[官方记录](https://nime.org/proc/nime2026_110/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_110.pdf)

👥 **作者与机构**

- Kevin Blackistone：机构信息未能从会议 PDF 纯文本可靠映射
- Martin Kaltenbrunner：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入为现场乐器音频与单臂肌电信号，输出为可预测性判定与电击惩罚触发，难点在于无预训练条件下对开放风格即兴进行实时建模并实施可穿戴低延迟干预。先进行多路预测，音频链以能量与谱变化检测onset并将时间差对数化后送5阶马尔可夫模型预测节奏时机，同时将音高折叠为音级后送多阶马尔可夫加回归做共识预测，肌电链则经7维MFCC去首系数、PCA降至2维与10类K均值聚类形成姿态序列后送预测，频谱新颖度分支以自相似与自校准阈值输出整体变化量，四路输出一并进入共识比较。再进行共识评估，以多数模型命中且连续三次命中为匹配事件并要求通过新颖度门限，其评估输出进入锁定计时与触发逻辑。最后经约10秒锁定计时器冷却与或逻辑触发TENS电击，避免误罚。与预置曲目跟随式教学不同，该机制不告知正确动作，只以模糊对抗与惩罚威胁迫使演奏者持续改变策略，其实质是将威胁本身作为行为操控手段。在音级与聚类预测验证条件下，聚类分支的随机期望准确率为10%，高于音级分支的随机期望准确率8\.3%，而实际预测约为期望的1\.5至2\.5倍。该结论适用边界受限于作者本人使用鼓机加噪声器的数场演出，尚未验证在其他乐器与演奏者上的泛化，且聚类与姿态的对应关系缺乏直接验证，慢速氛围与极端速度下易出现失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://www.dorftv.at/video/45716> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/irllabs/ml-lib> — 链接可访问（HTTP 200）
- 第三方资源：<https://cycling74.com/products/max> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.flucoma.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 103. [黑暗不是故障：在夜林里把光同时当作路标、标记和乐器](/posts/conference-nime-2026-conference-paper-id-nime2026-112-befb769348/)

> 英文题目：*[nocturneAR: An Outdoor AR\-Based Musical Interface in Dark Transitional Landscapes\.](/posts/conference-nime-2026-conference-paper-id-nime2026-112-befb769348/)*

标签：#信号处理 #用户研究 #音视频 #音乐 #音乐生成

评分：**5.4/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_112/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_112.pdf)

👥 **作者与机构**

- Masami Hirabayashi：机构信息未能从会议 PDF 纯文本可靠映射
- Kakuya Shiraishi：机构信息未能从会议 PDF 纯文本可靠映射
- Scott Allen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

nocturneAR面向夜间森林等弱光户外场景，输入为参与者持智能手机对发光体的指向与漫步轨迹，输出为随空间位置叠加演化的和声织体与极简黑白视觉，其难点在于常规依赖充足光照的视觉跟踪与同时定位与建图在黑暗中失效且环境不确定性极高。方法链第一步由控制器经LoRa私有网络同步分布式发光体并分配身份，各发光体以颜色闪烁序列广播身份编码兼作导航信标，其编码光信号作为下一步的视觉输入。第二步由手机端应用将采集的颜色序列解码为唯一身份，当指向光源时同步触发对应持续音与黑白抽象画面，其触发事件直接进入下一步的空间叠加。第三步经由参与者在光点间停留、漫步与折返，使18个离散MIDI音高中多达四重持续音与钟声点缀叠加为和弦、不协和与起伏织体，和声形态经由路径涌现而非预设进行。与依赖充足光照与稳定跟踪的音乐AR相比，该机制差异在于把光同时用作标记、触发器与乐器，刻意保留模糊性以驱动具身聆听而非精确控制。原文未提供可核对的关键定量结果。该结论适用边界受限于作者组织的2026年2月11日单次夜间林间探索性展演，尚未验证强环境光、多人并发或长期部署下的稳定性与音乐可控性；原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 104. [喜欢的不一定最有效：标签与情绪类型如何塑造 AI 音乐感知](/posts/conference-nime-2026-conference-paper-id-nime2026-115-8fd8c6fba0/)

> 英文题目：*[Understanding Listener Perceptions of AI and Human\-Composed Music in Emotional Applications\.](/posts/conference-nime-2026-conference-paper-id-nime2026-115-8fd8c6fba0/)*

标签：#心理测量 #统计分析 #主观评测 #音乐理解

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音乐理解 | 主方法：#主观评测

会议来源：[官方记录](https://nime.org/proc/nime2026_115/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_115.pdf)

👥 **作者与机构**

- Kimaya Lecamwasam：机构信息未能从会议 PDF 纯文本可靠映射
- Tishya Ray Chaudhuri：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究任务以器乐片段为输入，输出听者在镇静与振奋两类情绪目标下的偏好选择与情绪效能判断，实际难点在于作者身份感知与声学属性相互交织，且审美喜欢易与治疗有效性相混淆。方法链分为三步：先按镇静与振奋提示分别制备人类作曲与SunoAI生成刺激并保持配器方向可比，其输出进入被试分组聆听环节；再将152名被试随机分入正确标记组、错误标记组与无标记自判组逐首聆听，其输出进入逐首测量环节；随后采集日内瓦音乐诱发情感清单强度评分与成对偏好效能选择，并用多项逻辑回归与混合效应模型串联定量与定性证据。与既往仅比较偏好的标签效应研究不同，本研究关键机制差异在于分离审美偏好与功能效能并检验方向一致性与误标预测力，其实质意义在于避免以偏好替代情绪调节效果的评估校准。在情绪条件比较的评测设置下，无标记组的AI偏好率指标从镇静音乐的AI偏好率指标68\.6%降至振奋音乐的AI偏好率指标39\.2%。结论适用边界受限于西方调性氛围器乐、短暂暴露与非临床样本，高唤醒下人类优势与低唤醒下相当的结论尚未验证至多体裁与临床人群。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 复现相关资源：<https://doi.org/10.17605/OSF.IO/62T9E> → <https://osf.io/62t9e/> — 链接可访问（HTTP 200）
- 第三方资源：<https://rvlenth.github.io/emmeans/> — 链接可访问（HTTP 200）
- 第三方资源：<https://biorender.com/> → <https://www.biorender.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.udio.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://newsroom-deezer.com/2025/11/deezer-ipsos-survey-ai-music/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 105. [没有演员时，空间如何被声音演奏：五个区域的叙事乐器与教学复盘](/posts/conference-nime-2026-conference-paper-id-nime2026-162-ad8d0c8b93/)

> 英文题目：*[An Exploratory Educational Drama: Scenographing with Sound in an Immersive Narrative Space\.](/posts/conference-nime-2026-conference-paper-id-nime2026-162-ad8d0c8b93/)*

标签：#教育 #用户研究 #空间音频信号 #音频交互

评分：**5.4/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_162/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_162.pdf)

👥 **作者与机构**

- Lei Li：机构信息未能从会议 PDF 纯文本可靠映射
- Siliang Du：机构信息未能从会议 PDF 纯文本可靠映射
- Duoyi Li：机构信息未能从会议 PDF 纯文本可靠映射
- Wenxuan Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Qihao Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Yulin Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Runhan Liu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本工作输入为观众在地下室连续空间中的行走、触碰与摆放道具等身体动作，输出为多通道声音与可寻址灯带的叙事演进，难点在于无演员条件下仅靠声音维持方向感、情节可懂度与多人自由探索下的系统鲁棒性。方法链第一步由嵌入道具与环境的ESP32微控制器经运动等传感采集身体与物体状态，并经蓝牙或WiFi以MIDI传输至控制端，上一步的传感信号由此进入调度层。第二步由Ableton Live、QLab与Max/MSP分别承担场景推进、四路系统与换能器输出及映射逻辑，将MIDI驱动为多通道音频与灯光，上一步的控制指令由此变为声光领地。第三步由三个控制区分管阈限空间、核心叙事与高潮空间并经监控视频人工补位触发关键对话，使自动流程不死锁且保障安全。相对固定头戴式沉浸声作品，关键机制差异在于共享声场与可导航建筑结合的声学造景与纠缠式互动，使走动与调音本身成为作曲，保留了群体共在与探索自由的实际意义。在地下室五空间连续探索任务的公开演出场景下，叙事侧空间指标为5个展区，高于调度侧空间指标的3个控制区。结论适用边界受限于强布景配合与人工值守的小规模教学制作，尚未验证纯自动化、大客流与跨场地复用的外推能力，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.darkfield.org/arcade> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.darkfield.org/eulogy> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.espressif.com/en/products/socs/esp32> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 106. [把大模型放进共享文本缓冲：可见、可冲突的多智能体现场编程](/posts/conference-nime-2026-conference-paper-id-nime2026-171-2ee6d7ea63/)

> 英文题目：*[Multi\-Agent Swarm Syntax: An Approach to Live Coding with AI \.](/posts/conference-nime-2026-conference-paper-id-nime2026-171-2ee6d7ea63/)*

标签：#开源工具 #检索增强 #大语言模型 #音乐生成

评分：**5.4/10** | 创新 1.3/2 | 技术严谨 0.9/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#检索增强

会议来源：[官方记录](https://nime.org/proc/nime2026_171/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_171.pdf)

👥 **作者与机构**

- Sven Hollowell：机构信息未能从会议 PDF 纯文本可靠映射
- Pete Bennett：机构信息未能从会议 PDF 纯文本可靠映射
- Paul Marshall：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

现场编码以共享文本缓冲区为舞台，输入为人机并发编辑与智能体意图，输出为可听的Strudel声音模式，难点在于并发一致性、领域语法可靠与表演过程可见需同时成立。系统先由行内指令解析智能体角色并为其分配有界文本区与独立可见光标，其区域约束输出直接限定后续编辑的作用范围。再经冲突无关复制数据类型合并人机高频并发操作并以近期编辑记忆维持连贯，该一致文档状态进入下一步生成上下文。随后由检索增强生成按意图与局部上下文召回校验过的Strudel语法片段注入低延迟模型提示，并经语法校验与表演者触发的执行控制决定是否发声。与瞬时整块插入的助手范式相比，该链条把生成延迟转化为逐字可观看的打字表演，并以人工暂停与否决保留策展控制，具有维持观众可读性的实际意义。在NIME'26会议基准评测设置下，会议开始日期指标为23日，低于会议结束日期指标26日。该结论适用边界受限于作者小规模自述表演与文本上下文决策，尚未验证听觉反馈驱动、多人规模化或风格泛化场景。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://codeberg.org/supersational/StrudelMASS> — 链接不可用（HTTP 404）
- 演示资源：<https://strudelmass.sven.zone/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/erl-j/vibejam> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 107. [以笔速问音：书法动作如何外部控制符号音乐生成的时机与织体](/posts/conference-nime-2026-conference-paper-id-nime2026-32-025553056e/)

> 英文题目：*[Calliphony: A Calligraphy\-Driven Interface for Real\-Time Generative Music Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-32-025553056e/)*

标签：#自回归模型 #实时处理 #音乐 #符号音乐生成

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#符号音乐生成 | 主方法：#自回归模型

会议来源：[官方记录](https://nime.org/proc/nime2026_32/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_32.pdf)

👥 **作者与机构**

- Tristan WU：机构信息未能从会议 PDF 纯文本可靠映射
- Ruiji YU：机构信息未能从会议 PDF 纯文本可靠映射
- Gus XIA：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理以书法执笔连续运动为输入、实时多轨符号音乐为输出的跨模态表演任务，难点在于非音乐手势连续多变而符号生成需离散低延迟可控触发，且音高时值力度配器需多声部协同。先在传感层以笔端可拆卸惯性单元采集三轴角速度为输入，职责是累积归一为整体速度标量并连同按键触发经开放声音控制分发，输出的速度信号进入生成层控制查询时机。再在生成层以速度积分为输入，职责是以位移积分达阈触发主旋律查询、以迟滞阈值开关和声层并以音阶过滤去重与寄存器约束生成和弦低音副旋律，输出的多通道乐器数字接口事件进入渲染层。最后在渲染层以多通道事件为输入，职责是路由至数字音频工作站分轨音色渲染与速度映射音量，输出古筝主旋律与铺底和声电子音色转二胡贝斯叠加的现场声音。在重复音控制参数评测设置下，完全排除条件的重复音排除指标为1，高于无限制条件的重复音排除指标0。与文本或音频提示及键盘即兴伴奏范式相比，该机制差异在于不把手势作模型输入特征而作查询时机与候选约束的外部控制层，使书写能量对应音乐密度纹理。结论适用边界受限于单演奏者舞台演示与短时反馈，向合奏长结构与风格化曲库的外推尚未验证，且长程乐句组织缺失与压力笔触感知缺失仍为失败条件，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://opensoundcontrol.stanford.edu/files/1997-ICMC-OSC.pdf> — 链接可访问（HTTP 200）
- 第三方资源：<https://m5stack.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.pygame.org/> → <https://www.pygame.org/news> — 暂时无法访问（HTTP 502）
- 第三方资源：<https://cataudio.cn/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 108. [滑板作键档案定音：在内罗毕用废料重建可合奏的恩巴拉](/posts/conference-nime-2026-conference-paper-id-nime2026-4-dc3c3f1be0/)

> 英文题目：*[The Skateboard Embaire: Reanimating tradition through musical instrument design\.](/posts/conference-nime-2026-conference-paper-id-nime2026-4-dc3c3f1be0/)*

标签：#信号处理 #实时处理 #音乐 #音频交互

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_4/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_4.pdf)

👥 **作者与机构**

- S\. M\. Astrid Bin：机构信息未能从会议 PDF 纯文本可靠映射
- Samuel Karugu：机构信息未能从会议 PDF 纯文本可靠映射
- Basile Huguenin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以当代可演奏形式重现乌干达Basoga传统木琴Embaire，输入是1948年调音叉测量手稿与内罗毕本地可得材料，输出是可供多人合奏的混合声学数字乐器，难点在于传统调律体系不明、材料稀缺与打击乐实时性要求高。方法第一步从档案记录中提取五声音阶频率关系并在Pure Data中重建音高体系，其输出的8个实测频率直接决定后继合成的映射表。第二步以废弃滑板琴键与弹性支撑重构共振结构并在背面布设压电传感网络，其输出的触击信号进入下一步实时检测。第三步经Bela Mini完成触击检测与力度估计并经MIDI驱动频谱合成与现场弯音扩展，形成手势与音色解耦的完整链路。相比直接采样或十二平均律近似，该路径保留原生近等距五声音阶并用传感与合成分离激发与发声，使传统演奏法得以在新材料上延续。在打击乐实时演奏条件下，滑板Embaire的延迟指标为10ms以下，低于设计目标延迟指标的10ms。该结论适用边界受限于特定驻地即兴与闭幕俱乐部演出观察，尚未验证调律准确性、长期耐用性与跨群体可接受性。部署依赖Bela Mini硬件与Pure Data合成且需将总延迟控制在10ms以下，失败条件包括强力演奏下的信号串扰与长期户外使用的耐久失效。

🔗 **开源资源**

- 第三方资源：<https://vital.audio/> — 链接可访问（HTTP 200）
- 第三方资源：<https://nyegenyegetapes.bandcamp.com/album/nakibembe-embaire-group> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 109. [把通灵板改成合奏乐器：双阶段贡献与拼贴合成如何共建声音](/posts/conference-nime-2026-conference-paper-id-nime2026-6-77742edfb1/)

> 英文题目：*[Host Your Ghosts: Recontextualizing the Ouija Board as a Communal NIME for Music Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-6-77742edfb1/)*

标签：#用户研究 #音乐 #语音 #音频交互

评分：**5.4/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_6/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_6.pdf)

👥 **作者与机构**

- Anthony T\. Marasco：机构信息未能从会议 PDF 纯文本可靠映射
- Alexis Bacon：机构信息未能从会议 PDF 纯文本可靠映射
- Sandro Barros：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Host Your Ghosts面向共处一室的群体共奏需求，输入是参与者回答何为萦绕的口语陈述与灵应盘上通灵板的二维位置、朝向与速度手势，输出是经多通道扬声器阵列扩散的不断演化的声音织体，难点在于把私密叙事转化为可被多人直觉操纵且不暴露说话人身份的音乐材料。陈述阶段由采集补丁录音并经噪声门与闪避器清理后上传远端服务器再转交演奏计算机，其输出的长录音直接进入语料构建。语料构建阶段将多段录音拼接为长文件后用梅尔频率倒谱系数与起音分割按不同时长与灵敏度生成四个粒度的样本库，使短促音素碎片与完整词句分别成库并映射到二维绘图器。占卜演奏阶段由群体推动光流追踪通灵板，在节点插值界面上按位置选择语料库拼接合成voices，并用朝向与速度调制共振器、环调与延迟效果量与空间化。与固定映射乐器相比，该机制把每次重分析后的样本空间分布与物理盘面符号绑定，使位置、速度与朝向同时决定选材、空间化与效果量，强化探索与偶然性。在低剖面盘面通行设置下，E\-Q传感器工作高度指标的上限为35毫米，高于E\-Q传感器工作高度指标的下限为15毫米。该结论适用边界受限于小规模共位艺术展演语境，尚未验证远程参与、大规模观众或长期重复演奏的稳定性，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://cycling74.com/products/max> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/zic-95/PAA5100JE/tree/main/src> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/sparkfun/SparkFun_Qwiic_OTOS_Arduino_Library> — 链接可访问（HTTP 200）
- 第三方资源：<https://p5js.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://tonejs.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 110. [把 32 通道空间音频搬进地下商场：共享基建如何撑起五组公共互动作品](/posts/conference-nime-2026-conference-paper-id-nime2026-68-39bd1ad996/)

> 英文题目：*[Immersive Open Studio: Shared Space, Shared Sound\.](/posts/conference-nime-2026-conference-paper-id-nime2026-68-39bd1ad996/)*

标签：#人类参与评测 #音视频 #空间音频信号 #音视频交互

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音视频交互 | 主方法：#人类参与评测

会议来源：[官方记录](https://nime.org/proc/nime2026_68/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_68.pdf)

👥 **作者与机构**

- Sunshiyu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Changda Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Canting Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Gibran Mobarak：机构信息未能从会议 PDF 纯文本可靠映射
- Henrik von Coler：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作针对空间音频多为一次性单作品装置、难以支撑多组创作者与公众反复使用的问题，以多名非专业观众的身体动作与空间位置为输入，以多通道环绕声场与270°投影联动的电子音乐表演为输出，难点在于开放公共隧道空间中多人同时操控时的遮挡、层间掩蔽与感知可分性。方法链分三步衔接：共享基础设施先搭建14英尺宽三层扬声器阵列与MIDAS M32路由及三投影机视觉场，形成可复用的声光底座。基于相机的交互系统再提取人体距相机的距离标量音量与一至四指手势的归一化位置及深度，经OSC/UDP将连续移动与离散手势分流分发至音频与视觉两路客户端。视听合成系统最后在Ableton Live中组织贝斯和弦主奏鼓组四层话语并以手势纵横轴联动滤波与方位角，在Reaper与IEM AllRADecoder中完成方位编码并在Jitter中以幅度数据调制纹理色彩与延迟，实现动作到声音空间化的闭环。与单作品定制装置相比，关键差异在于将基础设施与作品解耦为学期内支撑5个项目的共享课程平台，使学生聚焦交互与作曲而非重复搭建，并以走入式低门槛手势降低音乐参与壁垒。在Qualtrics问卷反馈设置下，关联沉浸感与扬声器阵列条件的反馈人数指标为3，低于总回收样本条件的反馈人数指标的5。该结论适用边界受限于2025年10月至11月的短期公开展示与教学场景，失败条件包括四层同时发声时的层间掩蔽致连续音量与方位控制难以分辨，且尚未验证长期运维声学一致性与跨场地迁移能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 111. [拿掉按钮和屏幕之后：用动作模糊换取可探索性的手持环境声音盒](/posts/conference-nime-2026-conference-paper-id-nime2026-87-011311be35/)

> 英文题目：*[SonoCube: A Handheld Motion\-Responsive Sound Object\.](/posts/conference-nime-2026-conference-paper-id-nime2026-87-011311be35/)*

标签：#用户研究 #端侧运行 #音频交互 #音乐生成

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_87/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_87.pdf)

👥 **作者与机构**

- Szymon Walendowski：机构信息未能从会议 PDF 纯文本可靠映射
- Akito van Troyer：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

手持声音对象需将触摸晃动倾斜与朝向稳定映射为可探索的环境音乐，输入为惯性与电容传感流，输出为无采样氛围纹理，难点在于无屏幕无按钮的70毫米形态下平衡手势歧义性与可发现性。先由QT Py RP2040以104赫兹轮询惯性测量单元与电容触摸，负责重力补偿抖动检测与朝向判别，输出滤波后的离散音高与连续参数状态。再将该滤波状态封装为115200波特率约90字节JSON帧经串行传入Teensy 4\.0，使传感输出直接成为合成输入，避免传感合成耦合干扰。最后由Teensy调用音频库生成双失谐正弦铺底与三角波旋律，并以旋转映射混响与延迟、以晃动映射滤波与和弦切换，形成传感分离而管道贯通的链路。与强调精确击发与复杂参数的已有乐器相比，该工作以慢包络氛围美学包容模糊手势，使近似动作仍产生满足感而降低误触发挫败。在氛围合成连续交互设置下，晃动检测路径的延迟指标为16 ms，低于重力触发路径的延迟指标107 ms。结论适用边界受限于休闲把玩与装置语境，舞台演奏精度、长时间漂移抑制与跨人群可用性尚未验证，6自由度惯性单元漂移构成失败条件。硬件上以3\.7V 350mAh可拆卸锂聚合物电池与40毫米扬声器实现一体机免接线使用，典型电流下续航约45至75分钟，晃动路径延迟约为16 ms。

🔗 **开源资源**

- 演示资源：<https://youtu.be/NoPLpANU6IY> → <https://www.youtube.com/watch?v=NoPLpANU6IY&feature=youtu.be> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 112. [让数拍子的手直接发出鼓声：Layika 手套如何把传统计数变成塔布拉伴奏](/posts/conference-nime-2026-conference-paper-id-nime2026-101-957833bf5b/)

> 英文题目：*[Layika: A Wearable Device Mapping Traditional Hand Gestures to Tabla Sound \.](/posts/conference-nime-2026-conference-paper-id-nime2026-101-957833bf5b/)*

标签：#用户研究 #音乐 #音乐生成

评分：**5.3/10** | 创新 1.3/2 | 技术严谨 0.9/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_101/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_101.pdf)

👥 **作者与机构**

- Prakriti Mukherjee：机构信息未能从会议 PDF 纯文本可靠映射
- Akhilesh Kumar Bhagat：机构信息未能从会议 PDF 纯文本可靠映射
- Kratika Jain：机构信息未能从会议 PDF 纯文本可靠映射
- Vivek Rawat：机构信息未能从会议 PDF 纯文本可靠映射
- Lakshmi Srinath：机构信息未能从会议 PDF 纯文本可靠映射
- Soubhagya K Dev：机构信息未能从会议 PDF 纯文本可靠映射
- Sumit Kumar：机构信息未能从会议 PDF 纯文本可靠映射
- Gowdham Prabhakar：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Layika面向印度斯坦声乐独练场景，输入是歌手为维持塔拉节奏循环而做的拇指触指计数手势，输出是对应节拍位置的塔布拉鼓语音节伴奏，难点在于独练时缺乏响应性伴奏且身体计时与外部播放声源相互分离。先在触点检测阶段，以拇指与指关节处导电纱线接触为输入，经16通道多路复用器扫描与ESP32\-S3高速扫描加软件去抖负责可靠识别快速敲击，输出可靠触点事件。再在无线传输阶段，以触点事件为输入，经ESP\-NOW紧凑数据包发送并转换为标准MIDI消息负责低延迟转发，其输出经USB\-MIDI桥进入外部数字音频工作站。最后在声音触发阶段，以MIDI消息与当前节奏位置为输入，按节拍位置触发对应Bol采样负责发声，触发时刻完全由接触瞬间决定且不做量化，从而保留自然时值与表现变化。在节奏型对照设置下，Teentaal的节拍指标为16拍，高于Ektaal的节拍指标12拍。与预置循环播放的电子塔布拉盒相比，该机制把节奏控制权从外部时钟交还给演唱者的身体计时，使计数手势本身成为可发声的交互过程。其适用边界受限于熟悉指计数法的独练辅助场景，跨节奏型泛化与舞台长周期稳定性尚未验证，硬件上采用手套端ESP32\-S3与外部接收模块分体架构，原文将输出延迟列为影响精确合拍的失败条件并指出由Wi\-Fi切换至ESP\-NOW降低了延迟。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 113. [让次声自己演奏：CLSTR1 如何把不可控的金属失真养在膜上](/posts/conference-nime-2026-conference-paper-id-nime2026-114-f0a5cda680/)

> 英文题目：*[Recipe for a ghost catcher: an infrasound\-powered hybrid instrument\-sonic installation\.](/posts/conference-nime-2026-conference-paper-id-nime2026-114-f0a5cda680/)*

标签：#生成模型 #音视频 #音乐 #音频交互

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#生成模型

会议来源：[官方记录](https://nime.org/proc/nime2026_114/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_114.pdf)

👥 **作者与机构**

- Rubén Bañuelos Preciado：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入为次声与低频振动，输出为金属激励物在膜面高速弹跳与自主爬行产生的非线性失真音景及视觉图案，难点在于该现象对摆放位置与耦合条件极度敏感且高度混沌，难以参数化建模。低频激励先由Lunason Bassnicophone经泡沫垫敲击传导或由Dayton Audio BST\-1 Bass Shaker固定于框架后经数字合成驱动，将振动注入模块本体，其输出直接进入下一步膜体。张紧的不规则纹理塑料膜接着接收振动并放大传递，其张力由调音螺丝与激励物及手压重量共同设定，膜面振动输出驱动顶层金属钵运动。置于膜上的平底日式金属钵受迫高速弹跳发声并以不定步速爬行漂移，自主改变膜张力分布点，进而反向调制失真频谱形成闭环。相比将声音对象乐器化为可演奏音高或参数的思路，该设计刻意保持黑箱并将自主漂移视为能动交互因素，具有从无操作自主装置到多人共演连续切换的实际意义。在触发CLSTR0失真现象的测试条件下，上限激发频率指标为34 Hz，高于下限激发频率指标的9 Hz。当前结论适用边界受限于作者搭建的单模块原型与三件艺术个案，跨场地、跨材料与长期稳定性的失败条件尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://www.rubenbanuelos.com/clstr1/v/los-grandes-vuelos> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.lunason.com/en/bassnicophone-1> → <https://www.lunason.com/en/bassnicophon> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.5281/zenodo.15698994> → <https://zenodo.org/records/15698994> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.5281/zenodo.1176460> → <https://zenodo.org/records/1176460> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 114. [把一间 closet 养成三十六年的乐器原型车间：Max Lab 的人、空间与维护](/posts/conference-nime-2026-conference-paper-id-nime2026-124-a0e01f262e/)

> 英文题目：*[The Story of The Max Lab: A Thirty\-Six\-Year Collaborative Journey\.](/posts/conference-nime-2026-conference-paper-id-nime2026-124-a0e01f262e/)*

标签：#教育 #文献综述方法 #音乐 #音频交互

评分：**5.3/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#文献综述方法

会议来源：[官方记录](https://nime.org/proc/nime2026_124/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_124.pdf)

👥 **作者与机构**

- Sasha Leitman：机构信息未能从会议 PDF 纯文本可靠映射
- Matthew Wright：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以斯坦福CCRMA共享原型实验室三十六年运维为输入，以提炼可持续支撑音乐交互原型与教学的组织经验为输出，难点在于人员高流动、历史建筑改造受限与安全开放难以兼顾。方法链分三步，首先梳理创意空间与学徒制文献以明确空间塑造研究教学的视角，其输出的分析框架进入下一步。其次以自传民族志回溯实验室从个人作坊到双空间体系的演变，其输出的演化叙事进入提炼环节。最后将运维经验凝练为目标原则与整理维护策略并回流指导日常共治。与已有NIME教学工作罗列设备清单不同，本文把空间本身视为记录实践的人工制品，强调组织可读性与社区共治以降低维护负担。在NIME会议组织场景下，会议结束日期的日期指标为26日，高于会议开始日期的日期指标23日。该结论适用边界受限于有驻场维护的小型学术作坊，向大型开放工厂外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 复现相关资源：<https://ccrma.stanford.edu/maxlab> → <https://ccrma.stanford.edu/maxlab/> — 链接可访问（HTTP 200）
- 复现相关资源：<https://ccrma.stanford.edu/maxlab/publications> — 链接不可用（HTTP 404）
- 复现相关资源：<https://ccrma.stanford.edu/maxlab/courses> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 115. [把门限变成声音：施密特触发器在手工电子乐器中的另类历史](/posts/conference-nime-2026-conference-paper-id-nime2026-152-fbb0ec23f6/)

> 英文题目：*[Histories of the Schmitt Trigger in Handmade Electronic Instruments for Making Sound in the Arts: A Literature Review \.](/posts/conference-nime-2026-conference-paper-id-nime2026-152-fbb0ec23f6/)*

标签：#文献综述方法 #音乐 #音频生成

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：综述 | 主任务：#音频生成 | 主方法：#文献综述方法

会议来源：[官方记录](https://nime.org/proc/nime2026_152/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_152.pdf)

👥 **作者与机构**

- Pia van Gelder：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以分散于工程手册与艺术文献中的施密特触发器记载为输入，输出按20世纪编年与21世纪主题组织的手工电子声音艺术历史叙事，难点在于档案横跨工程与艺术且手工实践档案化不足难以定位案例。以施密特触发器、声音、艺术、音乐为检索词限定英语出版物初筛近450篇来源为第一步负责界定语料边界，其输出进入第二步剔除仅作滤波或信号调理用途文献保留以该电路作主动发声或振荡元件的案例。第三步以扎根理论从保留文献中归纳范畴与概念，第四步按20世纪重编年与21世纪重主题组织叙事并标注相关社群，前步分类结果直接构成后步叙事结构。在迟滞阈值控制设置下，高差分条件的差分指标为20 V，高于低差分条件的差分指标0\.1 V。与工程手册只讲信号调理不同，关键机制差异是将迟滞翻转重新解释为把模拟转数字的跨能量转导与仿生隐喻的文化实践，意义在于为NIME与DIY教学提供起源谱系。该结论适用边界受限于仅覆盖书籍与期刊会议论文，专利、商业目录、杂志与论坛博客等档案尚未验证，存在遗漏率与选择偏倚的失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.ralfschreiber.com/solarsound/solarsound.html> — 链接可访问（HTTP 200）
- 第三方资源：<https://musicfromouterspace.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 116. [把抖动的脑电驯成可演奏的四部和声：采样保持如何让大脑成为乐器](/posts/conference-nime-2026-conference-paper-id-nime2026-169-3b286c310c/)

> 英文题目：*[Csound’s Brain: A Real\-Time EEG to Harmony, Melody, and Music System for Interactive Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-169-3b286c310c/)*

标签：#信号处理 #实时处理 #脑信号 #音乐生成

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.3/1.5 | 清晰度 0.6/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_169/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_169.pdf)

👥 **作者与机构**

- Shiying Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Richard Boulanger：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理以Muse S Athena头环四通道脑电频带能量为输入、以四声部和声与旋律合成为输出的实时交互演奏任务，难点在于消费级干电极信号抖动大、接触依赖皮肤贴合且连续生理波动缺乏稳定乐句与调性约束。系统先由Mind Monitor经开放声音控制协议在专用局域网内传输五路连续频带数值至Csound全局变量，完成低延迟采集与传输。接着由MIDI键盘设定的触发脉冲驱动采样保持在触发时刻快照各通道脑电值并缩放取整为和弦索引，再经查表映射到女高音、中音、次中音与低音音高表进入合成。最后由振荡器组按移调系数发声并经混响混合输出，表演者以键盘持续控制移调与触发速率实现手动锚定。在设备配置条件下，Muse S Athena整机的通道数指标为7，高于本系统聚焦使用的通道数指标为4。相比被动可听化与连续映射，该机制用离散保持钳制抖动、用调性查表保证和声稳定，把表达位置从手转移到大脑种子与手的对话，支撑了换脑演奏的生物爵士交互。该结论适用边界限于稳定佩戴、专用网络与有人值守调参的演示场景，跨用户长时佩戴与临床人群外推尚未验证并受限定性描述制约。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://csoundqt.github.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://csound.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://flossmanual.csound.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://openbci.com/index.php/software> — 链接可访问（HTTP 200）
- 第三方资源：<https://openbci.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://cabbageaudio.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 117. [看不见的用力如何变成声音：KinoGroove 把肌肉与位移一起作曲](/posts/conference-nime-2026-conference-paper-id-nime2026-20-d33f672e47/)

> 英文题目：*[KinoGroove: Composing with Muscle and Motion in Extended Reality\.](/posts/conference-nime-2026-conference-paper-id-nime2026-20-d33f672e47/)*

标签：#软件工具 #多模态学习 #生理信号 #音乐 #音乐生成

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.5/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#多模态学习

会议来源：[官方记录](https://nime.org/proc/nime2026_20/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_20.pdf)

👥 **作者与机构**

- Nathan Salin：机构信息未能从会议 PDF 纯文本可靠映射
- Ronan Gaugne：机构信息未能从会议 PDF 纯文本可靠映射
- Diane Haering：机构信息未能从会议 PDF 纯文本可靠映射
- Valérie Gouranton：机构信息未能从会议 PDF 纯文本可靠映射
- Florent Berthaut：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

KinoGroove面向异步舞蹈作曲，输入为预录人体运动与多通道表面肌电，输出为扩展现实中触发与连续调制的音乐事件与音色，难点在于popping式快速收缩隔离与持续紧张几乎不产生空间位移，纯运动学描述子难以表征内部用力与微动作。方法链第一步在实验室体育馆以27台Qualisys光学动捕与多通道肌电同步采集并经标定重建骨骼，使虚拟化身回放与肌肉活动一一对应，其输出直接进入下一步的交互配置。第二步音乐人在扩展现实中布置世界锚定、化身锚定与用户控制器锚定三类交互盒并设置阈值钳制与缩放，空间碰撞负责离散触发而肌电幅值经颜色渐变可视化后负责连续调制。第三步盒输出经开放声音控制送入外部粒状合成器与空间化器，并以触发盒碰撞瞬间采样父级肌电盒当前值的链接机制将节奏精确性与持续用力塑形衔接，在115拍大动作与低幅高用力两类场景中分别实现采样触发与滤波调制。与仅视运动为空间现象的手势触发系统及前作异步协作套件相比，关键差异是将肌肉用力提升为可做主驱动也可做补充层的显式设计维度，支持持续的用力塑形而非仅离散事件检测。在循环回放设置下，循环结束端的时刻指标为55秒，高于循环开始端的时刻指标45秒。该结论适用边界受限于受控实验室录制与离线编排流程，尚未验证实时即兴、低成本惯性或视觉动捕替代与跨舞种泛化。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://www.dailymotion.com/video/x2eg6y4> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 118. [合并交叉才能发声：用两个三端口结点把一个结交叉改写为可调音色的波导环](/posts/conference-nime-2026-conference-paper-id-nime2026-22-1c15b39c2d/)

> 英文题目：*[Knotty Oscillator: Breaking knot topology for a new physically\-inspired sound generator\.](/posts/conference-nime-2026-conference-paper-id-nime2026-22-1c15b39c2d/)*

标签：#软件工具 #信号处理 #实时处理 #音频生成

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_22/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_22.pdf)

👥 **作者与机构**

- Sergey Kasich：机构信息未能从会议 PDF 纯文本可靠映射
- Emir Chacra：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入为脉冲或任意实时音频，输出为经单交叉缠绕共振结构着色的声音，难点在于数学绳结禁止自相交因而无合并交叉等价于直管。方法链分三步推进：先将有限长直管弯折形成交叉并以双二端口并联结保持波导一致性，其输出进入下一步的拓扑处理。再在交叉处打破拓扑合并管壁形成环路，以两个三端口并联结连接三段延迟线，上一步的交叉几何由此转化为可共振的环路连接。最后用输入端反射系数与末端反相构成振荡器并补偿整体延迟长度以分析脉冲响应，与直波导相比该结构不依赖额外滤波器即引入周期性幅度调制与可调共振峰包络。在96 kHz采样率、1\.0 s脉冲响应的评测设置下，中段64采样条件的基频偏移指标为∼25\.0 Hz，高于整体平均条件的基频偏移指标的∼4\.0 Hz。原型还将整体长度、中段比例、反射系数与单极点低通阻尼做成实时可调并支持脉冲触发与外部音频输入，具有实际演奏意义。该结论适用边界受限于单交叉、无损耗建模与脉冲响应试听，尚未验证多交叉、非线性与真实演奏场景的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://khipumantes.github.io/index.html> — 链接可访问（HTTP 200）
- 第三方资源：<https://khipucamayoc.github.io/#about> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 119. [既在远方又在此处：把延迟当约束的共享控制器工具包](/posts/conference-nime-2026-conference-paper-id-nime2026-3-39578bcf23/)

> 英文题目：*[Anywhere and here: zcreative a toolkit for distributed control\.](/posts/conference-nime-2026-conference-paper-id-nime2026-3-39578bcf23/)*

标签：#游戏音频 #软件工具 #用户研究 #音乐 #音频交互

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_3/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_3.pdf)

👥 **作者与机构**

- Benedict Gaster：机构信息未能从会议 PDF 纯文本可靠映射
- Nathan Renney：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文针对异地与同地共享演奏中浏览器缺用户数据报协议支持、集体聆听与故事共创难以兼顾的难题，输入为手机浏览器滑杆、数字杂志画布位置、黏土pebble中六轴惯性测量单元姿态与蓝牙骰子事件等多源控制信号，输出为多通道声音与集体聆听体验。方法第一步由zcreative服务端统一维护通道订阅与读写权限状态并形成有状态路由表，为后续转发提供寻址基础。第二步经webosc桥接层在WebSocket之上双向承载开放声音控制协议语义，将浏览器端控制消息转换为可路由的协议消息后送入服务端。第三步由MaxMSP声音引擎接收开放声音控制协议并完成采样播放与空间渲染，实现从控制到发声的闭环。与传统端到端直连相比，该方法的关键差异在于把开放声音控制协议从传输层提升到应用层网关，用有状态路由替代直连，从而支持无用户数据报协议环境下的共享控制。在Bridge Studios现场演出设置下，主扩声通道的数量指标为24，高于低音炮通道的数量指标的4。结论的适用边界仅限于固定通道、低延迟不敏感的本地共创场景，在大规模并发与广域网抖动下的外推能力尚未验证。原文未披露训练、推理或部署成本，不涉及机器学习训练。

🔗 **开源资源**

- 第三方资源：<https://tonejs.github.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.5281/ZENODO.11189233> → <https://zenodo.org/doi/10.5281/zenodo.11189233> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 120. [延迟不是唯一敌人：九位实践者如何把网络音乐做成文化基础设施](/posts/conference-nime-2026-conference-paper-id-nime2026-41-96b5ae86fd/)

> 英文题目：*[Interviews with Practitioners Shaping Internet\-Based Collaborative Music\-Making\.](/posts/conference-nime-2026-conference-paper-id-nime2026-41-96b5ae86fd/)*

标签：#教育 #用户研究 #音乐 #音频交互

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_41/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_41.pdf)

👥 **作者与机构**

- Jiayue Wu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为异地表演者的实时音频流与合奏协作意图，输出为可长期维持的低延迟高保真协同演奏与教学体验，难点在于延迟抖动丢包与音质可扩展性相互制约，且参与者网络设备与技术素养高度异构。方法链分三步：先以目的性抽样选定横跨开源研究商业平台与艺术组织的9位实践领导者，在2023年至2025年间经视频会议面谈与书面通信完成半结构化访谈并形成转录文本；再将转录文本输入迭代式开放式与主轴式编码提炼技术与社会主题，并与既有文献三角验证以收敛分歧；最后将提炼的主题输入中美三地教学案例检验技术如何转化为协作与跨文化学习。在音频行业劳动力多样性评估设置下，区间上限的女性占比指标为5%，从区间下限女性占比指标的3%升至5%。与按阈值与架构罗列系统的技术综述不同，本文把延迟从待消除的损伤重构为可测量可协商可作曲可教学的中介材料，并论证组织与导师网络才是系统存续的关键。该结论适用边界受限于北美与欧洲建制化精英实践圈，向全球南方与草根欠资源场景的外推尚未验证。原文未披露训练、推理或部署成本，本研究不涉及模型训练。

🔗 **开源资源**

- 第三方资源：<https://www.source-elements.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.soundjack.eu/> — 链接可访问（HTTP 200）
- 第三方资源：<https://lola.conts.it/> — 链接可访问（HTTP 200）
- 第三方资源：<https://ericwhitacre.com/the-virtual-choir/> → <https://ericwhitacre.com/the-virtual-choir> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.cockos.com/ninjam/> — 链接可访问（HTTP 200）
- 第三方资源：<https://jamulus.io/> → <https://jamulus.app/> — 链接可访问（HTTP 200）
- 第三方资源：<https://jamkazam.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.sonobus.net/> — 链接可访问（HTTP 200）
- 第三方资源：<https://msp.ucsd.edu/tools/quacktrip/> — 链接可访问（HTTP 200）
- 第三方资源：<https://nownetarts.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.artsmesh.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://digiscore.github.io/2025-05-22-Netronomia-II/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 121. [把不稳定反馈握在手里：Manubrio 如何用持续身体调节换取乐器透明性](/posts/conference-nime-2026-conference-paper-id-nime2026-43-32027c62d9/)

> 英文题目：*[Manubrio: Investigating Musical Instrument Embodiment Through a Feedback\-Based New Interface for Musical Expression\.](/posts/conference-nime-2026-conference-paper-id-nime2026-43-32027c62d9/)*

标签：#用户研究 #听觉与音乐认知 #音乐 #音乐生成

评分：**5.3/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_43/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_43.pdf)

👥 **作者与机构**

- Sergio Ramos Galindo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Manubrio面向持续身体协商的演奏任务，输入为右手把手两旋转轴与一直线活塞位移及左手七键键盘音高选择，输出为依赖历史与能量的持续声音，难点在于正反馈失稳系统对微小位姿极度敏感且听觉判断必须实时修正动作。把手位姿先经嵌入式传感与微控制器采集为连续控制流并进入改进Karplus\-Strong振荡器调节反馈增益与频谱阻尼，其允许增益大于1以维持自持振荡。振荡器输出再进入延迟线频率调制引擎，以基频固定比例设定调制频率并由活塞位移控制调制深度叠加边带。调制后信号经裁剪与高通滤波稳定并做增益补偿后输出，同时部分能量回注延迟线形成可演奏的不稳定闭环。相对离散触发与增益小于1的拨弦建模，关键差异是把不稳定性与能量轨迹本身作为演奏维度，迫使听觉与本体感觉形成行动感知闭环而非符号控制。在包含自由探索与蒙眼复现任务的用户研究评测条件下，以报告人数为指标，报告遇到操控障碍的人数为4人，高于报告直观易懂的人数的3人。该结论适用边界受限于仅4名乐手的短时实验室探索与自我报告，尚未验证长期练习保持、跨演奏者迁移与舞台鲁棒性，反馈阈值附近精度要求过高时易出现透明性破裂的失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://ccrma.stanford.edu/~jos/pasp/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 122. [摩擦发声不动，身体转动来调音：Hypercuíca 如何把桑巴鼓变成可动的效果器](/posts/conference-nime-2026-conference-paper-id-nime2026-81-3b126b361e/)

> 英文题目：*[Hypercuica: Augmenting and Performing with an Afro\-Brazilian Friction Drum\.](/posts/conference-nime-2026-conference-paper-id-nime2026-81-3b126b361e/)*

标签：#信号处理 #实时处理 #音乐 #音频交互

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_81/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_81.pdf)

👥 **作者与机构**

- Luam Clarindo：机构信息未能从会议 PDF 纯文本可靠映射
- Marcelo Wanderley：机构信息未能从会议 PDF 纯文本可靠映射
- Filipe Lopes：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入是奎卡鼓内竹签摩擦与手指按膜的声学振动及搬运乐器的身体运动，输出是经实时调制的扩声信号，难点在于双手已被摩擦发声与按膜控制音高占用，新增手势不能破坏传统技法与舞台朝向。第一步由夹式电容话筒拾音并经Focusrite音频接口送入MacBook形成可处理声源，保留摩擦音色细节供后续数字信号处理。第二步由固定于鼓体的Android手机重力传感器经加速度计与陀螺仪融合估计姿态，并通过开放声音控制协议实时流式传输至电脑形成连续控制流。第三步在Ableton Live与Max for Live中以宏映射将一路姿态信号一对多路由至多个音频参数，下倾与侧转等离散手势开关延迟与移频等效果链，左右旋转等连续手势调节音色并经扬声器回放。与已有增强打击乐外加控制器相比，该工作把乐器本体作为可穿戴传感载体，使离散倾转开关与连续旋转塑形并行，支撑声学演奏与数字变换在演奏中的持续协商。在左右旋转手势映射任务下，移频器在最大旋转端Pitch Coarse指标为24 st，高于最小旋转端Pitch Coarse指标的\-24 st。结论适用边界受限于第一作者独奏即兴与工作坊演示语境，尚未验证长时间演出稳定性、跨演奏者迁移与听众盲听可辨识性，大角度旋转限制按膜音高控制即为已知失败条件。系统部署硬件包括夹式话筒、小米POCO手机、MacBook Air与Focusrite音频接口，音频与姿态数据均实时传输至宿主处理并经扬声器回放。

🔗 **开源资源**

- 演示资源：<https://youtu.be/Mt5BYjpB4lA> → <https://www.youtube.com/watch?v=Mt5BYjpB4lA&feature=youtu.be> — 链接可访问（HTTP 200）
- 演示资源：<https://www.youtube.com/watch?v=QnesJvhAXYI> — 链接可访问（HTTP 200）
- 演示资源：<https://www.youtube.com/watch?v=6rxqDa6LD-8&t=470s> — 链接可访问（HTTP 200）
- 演示资源：<https://www.youtube.com/watch?v=WzX_Tmsg1ww> — 链接可访问（HTTP 200）
- 演示资源：<https://www.youtube.com/watch?v=KxHihmp11mU> — 链接可访问（HTTP 200）
- 复现相关资源：<https://youtu.be/Mt5BYjpB4lA> → <https://www.youtube.com/watch?v=Mt5BYjpB4lA&feature=youtu.be> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.ableton.com/live> → <https://www.ableton.com/en/live/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.ableton.com/live/max-for-live> → <https://www.ableton.com/en/live/max-for-live> — 链接可访问（HTTP 200）
- 第三方资源：<https://1-10.github.io/zigsim> — 链接不可用（HTTP 404）
- 第三方资源：<https://www.instagram.com/taktopercussao> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 123. [先声还是先画：扩展现实视听乐器如何被设计出来](/posts/conference-nime-2026-conference-paper-id-nime2026-93-ae94ee2c30/)

> 英文题目：*[Extended Reality Audio\-Visual Instruments: Design Framework and Case Study\.](/posts/conference-nime-2026-conference-paper-id-nime2026-93-ae94ee2c30/)*

标签：#信号处理 #音视频 #音乐 #音视频生成

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#音视频生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_93/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_93.pdf)

👥 **作者与机构**

- Esther Gruy：机构信息未能从会议 PDF 纯文本可靠映射
- Florent Berthaut：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文针对扩展现实视听乐器需同时创作空间化声音、图像与三维手势交互，而既有设计难以兼顾表演者沉浸、观众可理解性与协作约束的问题，以头显表演中的模态映射与空间使用为输入，输出可指导分析与创作的统一框架与分化乐器实例。在13件同行评审乐器基准任务下，框架的维度指标为9，高于判据定义的维度指标的4。方法链分三步：先融合视听乐器与扩展现实乐器定义界定扩展现实视听乐器的四条判据，输出明确的系统边界；再从13件乐器归纳表演者与观众视听传输等9维，承接判据形成可比较的分析表；最后以共享MagneTip原型分化出音频优先与视觉优先两件乐器，用协作式自我民族志回填并修订维度张力。相比仅重声音控制的乐器综述或仅重绘画隐喻的视听综述，该工作将模态间映射、传输与空间使用显式建模，使音色谱特征到笔触色相与明度的映射可被追踪复用。音频优先乐器将频谱划分为12频段驱动笔触形态，视觉优先乐器则以视觉笔触引导声音探索，体现了以模态优先级组织设计的实际意义。该结论适用边界受限于仅两名作者的长期实践，观众传输与多用户外放场景尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 124. [把超声切面当乐谱：可触摸的明胶幻影如何决定声音](/posts/conference-nime-2026-conference-paper-id-nime2026-109-c3dee7be2c/)

> 英文题目：*[Ultrasound Probe as Tool for Tangible Sound Performance Using Physically Sculpted Phantoms\.](/posts/conference-nime-2026-conference-paper-id-nime2026-109-c3dee7be2c/)*

标签：#时频分析 #音乐 #音频生成

评分：**5.2/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频生成 | 主方法：#时频分析

会议来源：[官方记录](https://nime.org/proc/nime2026_109/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_109.pdf)

👥 **作者与机构**

- Kevin Blackistone：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务以手持超声探头在可塑幻影体上的接触操作为输入，输出随滑动按压旋转连续变化的多频谱声音流，难点在于超声深层分辨率低且随深度衰减失相，高频过强而低频单薄，难以形成稳定可控的音高结构。方法链分三步：先以高浓度明胶混合豆腐葡萄橙皮等食物材料塑形透明幻影体并固定布局，其多层密度分布作为空间化声源进入成像。其次以线性凸阵与相控阵探头从任意侧面采集深度方向密度图像，以增益降噪与动态范围控制图像输出与频率衰减特性。最后沿扫描线采样像素亮度并重采样为1024点数组，送入带Hann窗的逆离散傅里叶变换做加性正弦合成，并以均衡与多采样线插值补偿。相对固定探头观测舌部的Tongue'n'Groove，本文反转控制关系并将作曲前置到幻影体材料选择与摆放中，使触觉操作直接驱动频谱演进。在实时表演采集设置下，初始图像采集传输阶段的延迟指标为约33ms，低于包含VVVV处理在内的估计最大总延迟指标的70ms。其结论适用边界受限于模具精度不足与低分辨率，不同设计听感趋同且精细频率控制易失败，干燥凹凸与破裂表面会限制平滑运动，身体内部演奏等外推尚未验证。推理开销上仅披露采集链路延迟与总延迟及每频点约46\.9Hz划分，硬件采购受限于医疗资质，原文未披露训练、推理或部署成本的完整核算。

🔗 **开源资源**

- 第三方资源：<https://vvvv.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 125. [留住手感再连电脑：MidiMbira 如何把姆比拉调音逻辑搬进 MIDI](/posts/conference-nime-2026-conference-paper-id-nime2026-12-2c79de6db2/)

> 英文题目：*[The DIY MidiMbira: Bridging Traditional Playability and MIDI Technology forPedagogy, Innovation, and Performative Practice\.](/posts/conference-nime-2026-conference-paper-id-nime2026-12-2c79de6db2/)*

标签：#教育 #用户研究 #听觉与音乐认知 #音乐 #音频交互

评分：**5.2/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.4/1.5 | 清晰度 0.6/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_12/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_12.pdf)

👥 **作者与机构**

- Guillermo de Llera Blanes：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为传统姆比拉双手交错拨奏手势与莫桑比克地区性微音调律制，输出为可驱动软件音源、循环器与舞台媒介的MIDI与OSC控制流，难点在于津巴布韦一带律制非十二平均律且因人而异，常规键盘网格难以保留原有具身记忆与听觉容限。方法分四步：先与莫桑比克制琴师协作采集声学形制与演奏布局，确定触板开孔与琴片保留方式，其输出决定传感器布设；再以压电拾音与触摸开关采集声触信号，其输出进入固件层。然后经兼容MIDI固件与Ableton Live、ClyphX Pro脚本及Max for Live微调装置完成音高与剪辑映射，其输出进入现场迭代；最后在工作坊与Maputo Fast Forward媒体艺术节中验证人体工学与映射并回修硬件。与西方网格控制器相比，关键差异是以mbira dzavadzimu右手布局作为控制拓扑并保留 cent级微调，而非把非洲音阶量化进钢琴卷帘，其实质是将具身演奏逻辑直接作为数字交互逻辑。在双人调律对比任务下，Kunaka调律R4键的音程指标为386音分，高于R3键的音程指标204音分。本结论适用边界受限于特定制式姆比拉与现场循环语境，向科拉琴、西塔琴等乐器与博物馆沉浸式场景的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 126. [用可变混响腔做反馈乐器：在不可预测中保留可学控制](/posts/conference-nime-2026-conference-paper-id-nime2026-129-b4e5f5cba5/)

> 英文题目：*[Rumbler: A Reverb\-Based Feedback Instrument\.](/posts/conference-nime-2026-conference-paper-id-nime2026-129-b4e5f5cba5/)*

标签：#信号处理 #音乐 #空间音频信号 #音频交互

评分：**5.2/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_129/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_129.pdf)

👥 **作者与机构**

- Tae Kyu Kim：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Rumbler的输入是管内环境声与拉伸弯曲扭转手势，输出是麦克风经信号链到扬声器的闭环混响反馈声，难点在于管腔共振随形变连续漂移且瞬态与稳态极不稳定、稍有增益失配便啸叫或熄灭。先由可变声学腔接收双手拉伸弯曲扭转操作并负责产生随长度变化的基频和谐波结构，其输出的管内共振声进入ChucK滤波链。再由ChucK滤波链接收管内共振声并负责延长瞬态或重塑稳态音色，其处理后信号进入手势映射层。最后由手势映射层接收处理后音频与力敏电阻滚轮及9DOF传感信号并负责把大手势配给延迟与移频等高敏感参数而把频谱微调留给手指，其输出增益回送扬声器以维持闭环。在演出映射1的滤波器设置下，带通滤波器7的中心频率指标为4000 Hz，高于带通滤波器1的中心频率指标50 Hz。相比拾音与驱动位置固定的弦激发与管乐增强型反馈乐器，该设计以整体腔体形变直接改变脉冲响应，意义在于演奏的是可变空间本身而非激励源。结论的适用边界受限于特定管体与场地增益条件，无输入自持下易停留在同一音高或消失的失败条件尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://feedback-musicianship.pubpub.org/> — 链接不可用（HTTP 403）
- 第三方资源：<https://nime.pubpub.org/pub/feedback> — 链接不可用（HTTP 403）
- 第三方资源：<https://doi.org/10.1080/14626268.2018.1510841> → <https://www.tandfonline.com/doi/full/10.1080/14626268.2018.1510841> — 链接不可用（HTTP 403）
- 第三方资源：<https://doi.org/10.1145/3544548.3580662> → <https://dl.acm.org/doi/10.1145/3544548.3580662> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 127. [不用直接拖舌头位置：用弹簧力产生平滑的双元音舌轨迹](/posts/conference-nime-2026-conference-paper-id-nime2026-156-6e47670c58/)

> 英文题目：*[Beyond Direct Geometry: Spring\-Mass Control of Tongue Articulation for Vocal Synthesis\.](/posts/conference-nime-2026-conference-paper-id-nime2026-156-6e47670c58/)*

标签：#用户研究 #发声与构音 #语音 #语音合成

评分：**5.2/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#语音合成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_156/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_156.pdf)

👥 **作者与机构**

- Debasish Mohapatra：机构信息未能从会议 PDF 纯文本可靠映射
- Ziyi Xia：机构信息未能从会议 PDF 纯文本可靠映射
- Sidney Fels：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该文处理二维键盘输入驱动元音空间连续发声的任务，输入为W、X、J、L四键的离散方向指令，输出为经声道共振决定的时变元音音色，难点在于直接几何插值难以生成双元音所需的平滑非线性轨迹。方法第一步将按键解释为作用于点质量的外力，经零静长弹簧恢复力与线性阻尼积分出位置与速度。第二步将该位置映射为Pink Trombone合成器的舌位控制参数并实时合成，前一步动力学状态直接决定后一步共振腔形状与声音输出。第三步以相同键盘布局和视觉反馈实现按固定步长直接位移的几何控制器作为对照，其无惯性无阻尼更新与力控形成关键机制差异，使急转弯可借惯性回弹自然过渡而降低多参数独立控制负荷。在10条参考曲线各重复3次的描摹任务下，物理模型的指标归一化弯曲能量为211\.6，低于几何模型的指标归一化弯曲能量1191\.1。结论的适用边界受限于作者小样本预实验的轨迹描摹层面，尚未验证可懂度、音乐表现力与跨用户泛化能力，自由探索阶段结果亦未报告。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://dood.al/pinktrombone/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 128. [把房间本身当乐器：用夸张混响让演出地点被听见](/posts/conference-nime-2026-conference-paper-id-nime2026-36-d453ccd215/)

> 英文题目：*[Performing Performance Spaces: Amplifying Context in Live Music\.](/posts/conference-nime-2026-conference-paper-id-nime2026-36-d453ccd215/)*

标签：#信号处理 #用户研究 #音乐 #空间音频渲染

评分：**5.2/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.6/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#空间音频渲染 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_36/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_36.pdf)

👥 **作者与机构**

- ana schon：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入为现场乐器人声与演出空间自身声学，输出为经夸张放大的空间化扩声，难点在于空间混响特征微妙且反馈啸叫风险高，同时需让非熟练演奏者实时音乐性调用。方法先用指数扫频正弦法在观众区中心采集单声道房间脉冲响应并存入缓冲，为后续夸张提供本场声学基准。再将脉冲响应同时作为输入信号与卷积核做自卷积与多次卷积及逆向变换，生成多级夸张脉冲库并录入缓冲，使原有共振峰谷得以延长强化。演出中乐器信号经对应声道卷积生成湿信号，由表情踏板连续控制干湿混合并由开关选择处理乐器，实现实时变形。相比直接调用外部混响或移植异地空间，该机制始终源于本场空间并可连续变形，因而将声学从背景条件转为可演奏材料。在室内三空间声学测量任务下，多功能厅的混响时间指标为946\.7ms，高于教室341的混响时间指标677ms。结论适用边界受限于小型策划演出与自我选择的高校相关观众，长期社群效应与跨场地可迁移性尚未验证。原文未披露训练、推理或部署成本，本工作不涉及模型训练。

🔗 **开源资源**

- 复现相关资源：<https://pps.media.mit.edu/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 129. [成就越高越心虚：用游戏规则把冒充者体验变成可演奏的失败](/posts/conference-nime-2026-conference-paper-id-nime2026-82-0f8a527841/)

> 英文题目：*[Where Do I Go?: A Game\-Based Exploration of Failure and Playfulness as Musical Expression\.](/posts/conference-nime-2026-conference-paper-id-nime2026-82-0f8a527841/)*

标签：#游戏音频 #软件工具 #信号处理 #音乐 #音乐生成

评分：**5.2/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.9/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_82/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_82.pdf)

👥 **作者与机构**

- Zeynep Özcan：机构信息未能从会议 PDF 纯文本可靠映射
- Mya Gordon：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Where Do I Go?以冒名顶替现象为框架，输入为表演者足部连续位移与观众口头报点0\-24，输出为投影网格进程、自适应声音景观与离网击钹宣告，难点在于将自我怀疑外化为可演奏规则并维持观众可参与性。先由Python接收鞋载惯性传感器的足部位姿流，负责步态校准与位置修正，输出离散化5×5格点坐标。再由Processing接收该格点坐标，负责三关推进、故障激活与成就和信心双指标更新，输出状态变化与视觉计时。最后由Max接收该状态变化，负责多层合成与故障纹理混合生成声音，其按总时长回传的关卡切换信号又进入下一轮Python校准形成闭环。与已有音乐游戏不同，该作在第一二关故意让成功更新提升成就却扰动信心，在末关跳房子中才使二者同步上升，从而把冒名顶替循环机制化为可听矛盾。在足部追踪评测条件下，逐步运动追踪的错误率为1%以下，低于水平定位的错误率为24%以下。结论适用边界受限于单次舞台演示与特定硬件排练环境，向户外复演与跨群体对话的外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.python.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://processing.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://cycling74.com/products/max> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.imuwear.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 130. [不以控制为目标：班多钮琴边缘声响如何成为可演奏的共治线索](/posts/conference-nime-2026-conference-paper-id-nime2026-116-fe4555a7cb/)

> 英文题目：*[From Control to Co\-Agency: Reframing Instrumentality through Sonic Traces in Augmented Musical Practice\.](/posts/conference-nime-2026-conference-paper-id-nime2026-116-fe4555a7cb/)*

标签：#数据集构建 #听觉与音乐认知 #音乐 #音频交互

评分：**5.1/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 0.5/1.5 | 清晰度 0.6/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#数据集构建

会议来源：[官方记录](https://nime.org/proc/nime2026_116/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_116.pdf)

👥 **作者与机构**

- Mercedes Krapovickas：机构信息未能从会议 PDF 纯文本可靠映射
- Jan Schacher：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入是独奏班多钮手风琴的声学演奏、风箱气流与身体动作等微弱非主导声音，输出是经放大、实时分析与空间化延展后的电子响应及后续演奏决策，难点在于此类声音在常规识别流水线中易被当作噪声抑制且难以稳定复现。在音乐会与装置两种表演设置下，本文报告的实践流程指标为4个阶段，高于实验场景指标的2个场景，两种条件均未报告同一识别准确率类指标的可比数值。方法链分为四步：以贴装式拾音与笔记本电脑实时生态采集并路由双通道声场以建立个人化声音库，其输出进入基于FluCoMa与SP\-Tools的特征提取、分割切片与回归分类训练，再由循环录放、门限滤波与空间移动延长手势时间尾巴，最后经两种表演情境的排练反馈回数据集筛选与响应校准。相比以显著音高与大手势为信号的控制式映射，该机制把聆听本身作为导航手段，使系统对微变敏感并反向塑造演奏时机与动作选择。该结论适用边界受限于作者本人的长期熟练实践与特定表演条件，向其他乐器、演奏者与厅堂的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/rconstanzo/sp-tools> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.flucoma.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.ableton.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 131. [把舒服吹奏对准同一中点：围绕长时舒适的呼吸归一化](/posts/conference-nime-2026-conference-paper-id-nime2026-143-f152eefc91/)

> 英文题目：*[Accessible Wind Instruments: Normalizing Breath Control Around Comfort\.](/posts/conference-nime-2026-conference-paper-id-nime2026-143-f152eefc91/)*

标签：#用户研究 #生理信号 #音乐 #音频交互

评分：**5.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_143/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_143.pdf)

👥 **作者与机构**

- Jia Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Tom Mudd：机构信息未能从会议 PDF 纯文本可靠映射
- Una MacGlone：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

数字吹管乐器的核心输入是口部吹气压力，输出为统一控制量与声音，难点在于老年用户呼吸肌力与耐力差异大，峰值压力只反映瞬间可达值，不代表可长时间稳定维持的区间，固定阈值易导致发声闪烁或高负荷操作。本文构建围绕舒适长时控制的归一化空间U\-space（0到100统一量程），校准先通过最大吹气任务估计Pmax与三次舒适吹气均值估计Pcomf，并结合10秒长音与短促吹气任务得到保持准确率、变异系数与疲劳评分以划分呼吸画像与疲劳画像。画像系数决定个性化上边界Pfence，如B2取kB=0\.7而高疲劳F3再下调kF=0\.1，上一步的Pcomf与Pfence直接作为下一步非线性映射的两个锚点。该映射将Pcomf对齐到U=50并将Pfence对齐到U=100，使主要操作区留在可维持负荷附近而非极限附近，同时保留上方表达区间并驱动任务提示与声音。与围绕峰值设定上限的既有校准相比，该机制把同一绝对压力目标转换为可比的相对努力，避免对不同用户代表不同负荷，意义在于更可解释的任务空间。在10秒长音任务下，参与者B的准确率为79%，高于参与者A的准确率为74%。结论适用边界仅限单次会话的两例可行性演示，跨天稳定性与学习效应分离尚未验证，且原文未披露训练、推理或部署成本，不涉及可学习模型。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 132. [把效果器从脚下搬到桌上：无输入踏板网络何时从工具变成乐器](/posts/conference-nime-2026-conference-paper-id-nime2026-144-f6939d5e94/)

> 英文题目：*[The no\-input pedalboard: practice, theory and reflection on the development of a new network\-instrument\.](/posts/conference-nime-2026-conference-paper-id-nime2026-144-f6939d5e94/)*

标签：#信号处理 #理论分析 #音乐 #音乐生成

评分：**5.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_144/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_144.pdf)

👥 **作者与机构**

- Danny Bright：机构信息未能从会议 PDF 纯文本可靠映射
- Lee Westwood：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作以吉他效果器单块为唯一声源，移除吉他与合成器输入，输出桌面双手演奏的可控可重复多声部作曲与双人现场表演，难点在于自振荡不可预测、网状路由心智负担与双人音高节奏同步。方法先以自振荡单块发声，经分路器分为多条离散链，其输出进入下一步整形。接着以非常规效果顺序做音高包络音色时间整形并经吉他音箱扩声，其整形后信号进入下一步组织。然后以MIDI实现参数召回音高校准与时钟同步，以对称双台与多位置循环器组织复调，最后以长期排练沉淀映射与手势固化可重复性。与Tudor式声学反馈、Nakamura式无输入混音台及拥抱失控的Japanoise不同，该系统将开链局部反馈收敛为更大网络乐器中的可控部件并从中写作，具有可召回作曲意义。在文献页码核对设置下，Lachenmann著作起始页码指标为55，高于Lähdeoja等著作起始页码指标37。除此文献信息外原文未提供可核对的关键定量结果。该结论适用边界受限于长期投入的桌面试验吉他文化语境，向通用作曲工具或新手即兴的外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 133. [演出中途改映射：当跳舞的人不管声音、调声音的人不跳舞](/posts/conference-nime-2026-conference-paper-id-nime2026-146-3e7790a41f/)

> 英文题目：*[Role\-Separated Live Movement Sonification: Toolkits as Mediators of Distributed Agency in Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-146-3e7790a41f/)*

标签：#软件工具 #用户研究 #实时处理 #音乐 #音频交互

评分：**5.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_146/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_146.pdf)

👥 **作者与机构**

- Michael Reichmann：机构信息未能从会议 PDF 纯文本可靠映射
- Vincent van Rheden：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Meschtscherjakov：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理现场舞蹈动作声音化中映射需在演出中重构的耦合问题，输入为可穿戴惯性传感与手指弯曲信号，输出为叠加在固定Ableton Live音乐织体上的连续调制与事件触发，难点在于身体变化与映射漂移要求不中断演出地维持可演奏性与协商关系。传感信号先进入以Max开发的Advanced Sonification Toolkit进行滤波与阈值与缩放与插值处理，形成归一化控制流以支撑演出条件下的快速重配置。该控制流再经由矩阵式多对多路由分发至声音模块，操作者mapper在演出中实时调节路由与参数以维持阈值协商与可预测性，其输出直接构成舞者听觉环境。舞者mover则依据预设编舞与固定配乐进行表演，并通过身体调整与聆听反馈反向补偿触发失败与敏感度变化，从而闭合跨角色的适应回路。在以三场景舞台表演为评测场景下，角色分离配置的场景数量指标为3，高于双人乐器先例的场景数量指标2。与事先固定映射的既有舞蹈声音化相比，关键机制差异在于将映射可变性外化为独立mapper角色与可调耦合环境，而非隐藏为预设参数，其实质是将工具包作为中介层重组时机与能动性分配。该结论适用边界受限于有固定配乐与排练磨合的双人艺术场景，尚未验证即兴编舞与多人系统的外推范围。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 134. [看不见的呼吸如何被看见：呼吸镜把钢琴演奏的身体感受变成可回看的时间线](/posts/conference-nime-2026-conference-paper-id-nime2026-8-32671161a6/)

> 英文题目：*[Exploring Breathing\-Music Coupling: Using the Breathing Mirror for Somatic Reflection in Piano Performance\.](/posts/conference-nime-2026-conference-paper-id-nime2026-8-32671161a6/)*

标签：#用户研究 #生理信号 #音乐 #音乐理解

评分：**5.1/10** | 创新 1.1/2 | 技术严谨 1.1/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音乐理解 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_8/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_8.pdf)

👥 **作者与机构**

- Ziyue Piao：机构信息未能从会议 PDF 纯文本可靠映射
- Yohei Wada：机构信息未能从会议 PDF 纯文本可靠映射
- Isabelle Corssette：机构信息未能从会议 PDF 纯文本可靠映射
- Marcelo Wanderley：机构信息未能从会议 PDF 纯文本可靠映射
- Akira Maezawa：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为钢琴演奏中同步采集的胸腹双通道呼吸信号与MIDI和音频，输出为呼吸与音乐结构耦合关系的可解释反思，难点在于演奏高认知负荷遮蔽内感受回忆的时间精度。方法链分三步：先由纺织集成应变传感器腰带与多模态同步录制获得胸腹呼吸信号，再经五阶带通滤波与自适应峰检测加胸腹融合完成呼吸分期初标并经人工精修，最后将信号载入Breathing Mirror界面依次做基线视图导航、第一人称回忆与人际协同标注。与既有钢琴教学界面只纠正外部音高节奏不同，该工作把呼吸当作可观察的内部表达参数，并以多模态回放触发具身回忆而非提供客观真值。在多模态同步录制设置下，音频信号的采样率指标为44\.1 kHz，高于呼吸信号的采样率指标10 kHz。该结论的适用边界受限于单名三十五年经验业余演奏者与久石让Nausicaa开头单曲目的四周纵向研究，尚未验证向专家群体与普适呼吸法则的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 135. [以相位为公共时钟：让声音、图形与颜色共用同一时间基准的音频激光合成](/posts/conference-nime-2026-conference-paper-id-nime2026-121-a824f75e00/)

> 英文题目：*[A Phase\-Coherent Paradigm for Audio\-Laser Synthesis\.](/posts/conference-nime-2026-conference-paper-id-nime2026-121-a824f75e00/)*

标签：#软件工具 #信号处理 #音视频 #音视频生成

评分：**5.0/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音视频生成 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_121/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_121.pdf)

👥 **作者与机构**

- Mike Cassidy：机构信息未能从会议 PDF 纯文本可靠映射
- Kristian North：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频激光合成要求同一组电压同时驱动振镜水平偏转X与垂直偏转Y、扬声器发声与激光二极管调色，同步输出声音、几何轨迹与色彩，三类换能器机械极限与响应速度高度不对称且视觉对时序抖动极为敏感而听觉相对宽容，规模扩大后维持精确相位关系愈发困难。Phosphene先以全局相位器为共享时间基础设施，将主斜坡划分为时钟、门限与包络并以整数比除法建立声部间谐波关系以避免独立振荡器漂移，其输出的统一相位直接进入下一步作为全图的时间基准。几何层将该相位映射为参数轨迹的逐点位置基准或已存完整轨迹的读取指针，使幅度调制、滤波与延迟锚定到图形的确定空间位置，色彩层再以色相映射、强度映射与消隐门限主动跟随同一相位完成声光色统一。相比Pangolin Beyond与Liberation的帧式时间线回放、TouchDesigner经转换层解耦以及封闭式硬件乐器，该范式不封装时间而以可计算的相位偏差作为作曲材料而非不可控漂移。在VCV Rack现场表演验证场景下，大规模典型配置的规模指标模块数为400，高于小规模典型配置的规模指标模块数200。该结论适用边界受限于支持音频速率同步处理的VCV Rack类模块化环境，在Apple M1级别硬件上200至400模块规模已接近CPU上限，尚未验证跨场地激光安全约束与长时间高负载下的定量稳定性，推理部署的计算量与延迟随模块规模显著增长。

🔗 **开源资源**

- 第三方资源：<https://pangolin.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://liberationlaser.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://derivative.ca/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.neoncaptain.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.manifoldresearchcentre.com/lizajuice> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/macumbista/vectorsynthesis> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/mhetrick/hetrickcv> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.21428/108765d1.46efb0a3> → <https://alpaca.pubpub.org/pub/22attpfp> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 136. [不把手势抽象成参数：用鱼线和织物把微分音竖琴连进建筑空间](/posts/conference-nime-2026-conference-paper-id-nime2026-158-0fc3046a85/)

> 英文题目：*[Extending Instrumentality Through Mechanical Augmentation and Sound Synthesis in a Microtonal Harp\.](/posts/conference-nime-2026-conference-paper-id-nime2026-158-0fc3046a85/)*

标签：#信号处理 #音视频 #音乐 #音视频交互

评分：**5.0/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音视频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_158/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_158.pdf)

👥 **作者与机构**

- Han Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Anqi Liu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究输入为竖琴演奏者对 Harp\-E 琴弦、微分音扳手杠杆与外延鱼线的拨奏、持续牵引与弯音手势，输出为延续弦乐发音逻辑的合成声音、织物可视运动与投影变化，难点在于避免手势被抽象为控制参数后丧失材料阻力与因果可读性。方法链分4步：选中杠杆经鱼线外延并以悬挂织物质量作配重维持张力，使位移先在力学域传播；导电墨水印刷柔性传感器捕获织物形变；Arduino MKR WiFi 1010 编码后经开放声音控制协议无线传输至笔记本；Ableton Live 与 Max for Live 按拨奏、类弓持续激励、扳手弯音3类包络触发或调制声音与视觉。与已有增强弦乐器参数映射不同，该系统要求数字响应继承起振、衰减与再触发形态，使合成成为激发的延续而非叠加层。原文未提供可核对的关键定量结果。结论仅适用于单件增强 Harp\-E 装置在 De\-dimension 多媒体即兴与参与式场景中的定性观察，未验证多人干扰下的可控性与长时间结构稳定性。原文未披露训练、推理或部署成本，不涉及学习型模型。

🔗 **开源资源**

- 第三方资源：<https://www.harp-e.com/en-us> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 137. [裸板即皮肤：用回写式破坏把循环做成无常的即兴修行](/posts/conference-nime-2026-conference-paper-id-nime2026-168-0e7d8203f9/)

> 英文题目：*[Zen\-PCB: Material Honesty and Structural Metaphor in a Naked PCB Granular Looper Instrument\.](/posts/conference-nime-2026-conference-paper-id-nime2026-168-0e7d8203f9/)*

标签：#信号处理 #用户研究 #音乐 #音频交互

评分：**5.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_168/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_168.pdf)

👥 **作者与机构**

- Ryoma Okuda：机构信息未能从会议 PDF 纯文本可靠映射
- Julián Villegas：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Zen\-PCB针对过度自动化乐器带来的演奏被动化与声音过度可预测难题，以持续录入的即兴声音与导电触笔桥接裸露矩阵为输入，输出经侵蚀与重写不断演化的低保真循环纹理，难点在于把不稳定触摸与破坏性改写仍保持为可演奏的实时乐器。其方法链分三步：双核嵌入式架构先将音频处理置于Core 0、界面控制置于Core 1以隔离抖动保障低延迟，其输出的稳定缓冲进入暴露式5×3矩阵，矩阵以列切换采样位置、破坏性效果与时间扭曲三组模态并把行列导通直接译为触发，最后颗粒播放器与效果链把处理后音频写回同一循环缓冲的当前记录头形成永久改写。与把效果当作可旁路临时装饰的非破坏性循环器不同，该设计把每次效果执行等同于对历史录音的重写，从而将佛教无常与轮回隐喻落实为信号流。在自由试玩后问卷评测设置下，Zen\-PCB享乐刺激维度的得分为0\.98，高于实用质量维度的得分0\.55。该结论的适用边界受限于15人短时自由试玩与自我报告量表，尚未验证长期演奏、舞台稳定性与听众感知差异。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/boldport/pcbmode> — 链接可访问（HTTP 200）
- 第三方资源：<https://web.archive.org/web/20200513161107/> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 138. [不用声带唱歌：用声道共鸣从反馈里选出微分音的 Ephemerides](/posts/conference-nime-2026-conference-paper-id-nime2026-29-545e8c6d89/)

> 英文题目：*[Ephemerides: A Microtonal Feedback Instrument Based On Transgender Voice Training Technique\.](/posts/conference-nime-2026-conference-paper-id-nime2026-29-545e8c6d89/)*

标签：#用户研究 #发声与构音 #音乐 #音乐生成

评分：**5.0/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_29/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_29.pdf)

👥 **作者与机构**

- June Kuhn：机构信息未能从会议 PDF 纯文本可靠映射
- Andrew McPherson：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Ephemerides的任务是以声道共鸣选择音高并输出微分音音乐，输入为振荡器组经喉部激发的滤波后声音，输出为经反馈放大的演唱式音流，难点在于不使用声带仍要稳定可控地选择微分音程并与发声焦虑共处。先由Max声音程序生成音乐人选定的振荡器组作为输入并负责提供可调微分音源，其输出经voice coil换能器送入喉部进入下一步。再由口腔与声道对喉部输入进行滤波负责形成共振峰结构，其输出的共振信号由头戴麦克风拾取进入下一步。最后由恒定Q变换带通滤波组对麦克风信号进行选频并负责强化最强共振，其输出经前视限幅器放大后返回输出链路形成反馈回路并由音高检测设定参考频率构建可演奏音阶。与共振峰检测或性别分类式嗓音应用不同，该系统不做元音或性别推断而将聆听交还演奏者与观众，代理分布于身体与设备之间。在田野记录设置下，Noticing会话的时长指标为60分钟，高于常规记录的时长指标30分钟。其结论适用边界受限于实验音乐独奏与氛围电子合奏等包容性场景，尚未验证普通演唱者学习曲线与音准稳定性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://instrumentslab.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://subphonics.com/> → <https://www.subphonics.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 139. [把削铅笔插进音箱：用不协调让日常动作变成演奏](/posts/conference-nime-2026-conference-paper-id-nime2026-51-3dff6c38b3/)

> 英文题目：*[Designing Strategic Incongruity: An Audio Device for Sharpening Pencils\.](/posts/conference-nime-2026-conference-paper-id-nime2026-51-3dff6c38b3/)*

标签：#用户研究 #音乐 #音频交互

评分：**5.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_51/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_51.pdf)

👥 **作者与机构**

- Shinnosuke Hirose：机构信息未能从会议 PDF 纯文本可靠映射
- Yuta Uozumi：机构信息未能从会议 PDF 纯文本可靠映射
- Ryoho Kobayashi：机构信息未能从会议 PDF 纯文本可靠映射
- Shinya Fuji：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以削铅笔插入与旋转摩擦振动为输入，以经音响设备放大的可演奏声音为输出，难点在于保留音箱与调音台外观与操作预期同时让日常动作被理解为音乐表演。方法先以卷笔刀插入口替换插孔，利用孔洞插入结构对应在不改外观布局下植入异质功能，其接触位置直接决定后续拾音对象。接着以压电元件直接拾取削笔机构接触摩擦振动而非空气声并送入原输入电路，使动作与声音保持对应并进入熟悉扩声链路。最后完整保留增益与音色调节，使原有操作继续生效并与削笔节奏叠加形成可演奏性。相比抹除原功能的做法，该工作同时保留削笔与扩声功能并以设备外观为解释框架，使错位本身成为引导参与机制。在室内与室外两处展览场景条件下，展览场景的指标数量为2，低于原型设备的指标数量3。原文未提供可核对的关键定量结果。其结论适用边界受限于手摇与电动削笔阻力、孔洞对应与展演语境，换用其他日常物尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://youtu.be/qQnLFyuLugY> → <https://www.youtube.com/watch?v=qQnLFyuLugY&feature=youtu.be> — 链接可访问（HTTP 200）
- 演示资源：<https://youtu.be/-mm4p_hWnlI> → <https://www.youtube.com/watch?v=-mm4p_hWnlI&feature=youtu.be> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 140. [不追紧同步的混音台：Mezcal 用浏览器 MCU 把远距离合奏做成电台](/posts/conference-nime-2026-conference-paper-id-nime2026-62-703f71132c/)

> 英文题目：*[Mezcal: A Collaborative Transmission Art Instrument\.](/posts/conference-nime-2026-conference-paper-id-nime2026-62-703f71132c/)*

标签：#软件工具 #用户研究 #实时处理 #环境声 #音频交互

评分：**5.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_62/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_62.pdf)

👥 **作者与机构**

- August Black：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Mezcal要解决分散参与者在浏览器中以低门槛进行长时即兴广播式声音共创的问题，输入为麦克风、外置声卡、虚拟声卡与档案文件、网络流及内置档案检索等多路音频，输出为每人一路剔除自身的N\-1监听混音与一路可分发的广播混音，难点在于移动弱网与多人数下兼顾可达性与可听性。客户端先将激活轨在浏览器内预混为一路立体声并以Opus编码经单条WebRTC连接上行，以降低上行带宽。服务端Janus网关承接该单流作为多点控制单元集中混音，再向每位参与者分发一路个性化混音，完成上行到监听的衔接。伴随Node\.js进程拉取实时传输协议下混并经FFmpeg转推Icecast实现广播分发，另由Cloudflare Worker统一代理档案检索以绕过跨源与安全源限制，形成协作到播出的闭环。与强调超低延迟紧同步的JackTrip、Sonobus、Jamulus不同，该工作主动拥抱松散延迟，以横向无中心混音与档案活化为差异，意义在于把电台从单向播出变为可步行的协作乐器。在10人实时交互评测场景下，MCU拓扑的单人转发流数指标为发送1路接收1路，低于P2P网状拓扑的单人转发流数指标发送9路接收9路。该结论适用边界限于艺术化、环境化与话语型协作，乐队合奏级同步与上百人并发稳定性尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://antmedia.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://labs.freesound.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.jacktrip.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://janus.conf.meetecho.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://jitsi.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://mediasoup.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://kunstradio.at/> — 链接可访问（HTTP 200）
- 第三方资源：<https://pion.ly/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.sonobus.net/> — 链接可访问（HTTP 200）
- 第三方资源：<https://wavefarm.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 141. [从触发器到同台者：MAD 单簧管四代迭代中的算法能动性是如何长出来的](/posts/conference-nime-2026-conference-paper-id-nime2026-86-5120d22089/)

> 英文题目：*[From Passive Agent to Musical Partner: Insights from the MAD Clarinet Project as a Case Study\.](/posts/conference-nime-2026-conference-paper-id-nime2026-86-5120d22089/)*

标签：#生成模型 #用户研究 #音乐 #音频交互

评分：**5.0/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_86/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_86.pdf)

👥 **作者与机构**

- Rui Travasso：机构信息未能从会议 PDF 纯文本可靠映射
- Enrico Dorigatti：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以原声单簧管实时演奏输入生成扩展声响并与演奏者共同塑造曲式输出，难点在于超越固定触发式映射，在保留标准演奏法与舞台可用性的同时让算法持续干预乐句走向与结构预期。初版以Arduino Uno驱动2个被动红外传感器触发延迟混响并随机重置参数，其输出的舞台位置信号进入2\.1版的Processing 4映射。2\.1版用5个传感器联动预置处理与采样，并以音高分析驱动几何可视化实现旅行叙事，其经验促使3\.0版移除传感器与视觉。3\.0版经喇叭口内换能器的声学界面拾音后转MIDI音高与时值，再喂给两个独立Max/MSP补丁即和声器与随机系统生成，新套件则删除和声器改用ml\.markov马尔可夫链实现更快在线学习回放并叠加采样与操纵。在视觉映射任务设置下，doArc触发的频率指标从501 Hz升至792 Hz。与固定映射相比，关键差异是从单向反应转向基于输入分布的连续再生成，使可控的不可预测性成为延缓终止与制造新方向的曲式动力而非音色点缀。该结论适用边界受限于单演奏者即兴语境并依赖演奏者先行输入与快速适应，双人加算法形态尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://on.soundcloud.com/MqchqRwrcHE3jUdxga> → <https://soundcloud.com/rui-travasso/gres-de-silves?si=404a15e043bd47a5a8fad14de8bfda18&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing> — 链接可访问（HTTP 200）
- 演示资源：<https://on.soundcloud.com/4bflYINbFM0UT9Ssat> → <https://soundcloud.com/rui-travasso/mr-harmonizer?si=7ba72708e8374f9da89ed34eb928d6a2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing> — 链接可访问（HTTP 200）
- 演示资源：<https://on.soundcloud.com/OwPq2xKM0SCopvQMKT> → <https://soundcloud.com/rui-travasso/mr-max?in=rui-travasso/sets/my-bookshelf&si=125bfa1ef88f4682b2951948aeaca419&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing> — 链接可访问（HTTP 200）
- 演示资源：<https://on.soundcloud.com/Eam3WFGJATGZw2EQuy> — 暂时无法访问
- 演示资源：<https://on.soundcloud.com/qVshhvG49uI4lFJZ7z> — 暂时无法访问
- 演示资源：<https://youtu.be/t-mmwOIA60c> → <https://www.youtube.com/watch?v=t-mmwOIA60c&feature=youtu.be> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 142. [不用存乐谱，只问时间：Uzulangs 把音乐模式写成时间的纯函数](/posts/conference-nime-2026-conference-paper-id-nime2026-9-d10445b1fb/)

> 英文题目：*[Uzulangs: a Community of Musical Pattern Languages\.](/posts/conference-nime-2026-conference-paper-id-nime2026-9-d10445b1fb/)*

标签：#教育 #开源工具 #评测协议 #音乐 #符号音乐生成

评分：**5.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#符号音乐生成 | 主方法：#评测协议

会议来源：[官方记录](https://nime.org/proc/nime2026_9/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_9.pdf)

👥 **作者与机构**

- Alex McLean：机构信息未能从会议 PDF 纯文本可靠映射
- Felix Roos：机构信息未能从会议 PDF 纯文本可靠映射
- Matthew Kaney：机构信息未能从会议 PDF 纯文本可靠映射
- Martin Gius：机构信息未能从会议 PDF 纯文本可靠映射
- Diego Villaseñor：机构信息未能从会议 PDF 纯文本可靠映射
- Dagur Kristinn Sigurðsson Björnsson：机构信息未能从会议 PDF 纯文本可靠映射
- Jack Armitage：机构信息未能从会议 PDF 纯文本可靠映射
- Julian Rohrhuber：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文面向现场编码音乐表演，输入为演奏者实时改写的代码与有理数周期时间，输出为可发声的离散事件与连续变化参数，难点在于保持无状态随机访问的同时支持复杂复节奏变换与实时可视反馈。方法链分为三步：先将模式表示为以查询时间跨度为输入的纯函数并返回全事件与片段交集，再以迷你记谱法 Mini\-notation 提供紧凑节奏书写并嵌入宿主语言，最后用函子与单子式连接 Join 与变换组合器完成对位与形变并驱动代码高亮与钢琴卷帘可视化。与步进音序器与状态机式系统相比，关键差异是查询任意过去未来时刻无需累积状态，因此反转、变速与长周期干涉几乎零存储且换稿无需迁移状态。原文未提供可核对的关键定量结果。适用边界限于无状态可表达的模式，有状态马尔可夫链与步进语义尚属实验且常缺步数元数据而受限。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 复现相关资源：<https://garten.salat.dev/059-uzulang-I-s-> — 链接不可用（HTTP 404）
- 复现相关资源：<https://garten.salat.dev/field/idlecycles.html> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.1145/2633638.2633647> → <https://dl.acm.org/doi/10.1145/2633638.2633647> — 链接不可用（HTTP 403）
- 第三方资源：<https://doi.org/10.5281/zenodo.15527772> → <https://zenodo.org/records/15527772> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.5281/zenodo.7383848> → <https://zenodo.org/records/7383848> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 143. [在 24 平均律里学恰哈尕：PerFormer 如何把微分音、节拍位置和调式库存一起建模](/posts/conference-nime-2026-conference-paper-id-nime2026-30-ae77fee1df/)

> 英文题目：*[PerFormer: An AI\-Driven Approach to Melody Generation in Microtonal Persian Music\.](/posts/conference-nime-2026-conference-paper-id-nime2026-30-ae77fee1df/)*

标签：#数据集 #主观评测 #Transformer #音乐 #符号音乐生成

评分：**4.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#符号音乐生成 | 主方法：#Transformer

会议来源：[官方记录](https://nime.org/proc/nime2026_30/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_30.pdf)

👥 **作者与机构**

- Farzad Hosseinabadi：机构信息未能从会议 PDF 纯文本可靠映射
- Ian Gibson：机构信息未能从会议 PDF 纯文本可靠映射
- Christopher Dewey：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务输入为目标调主音语境与种子事件，输出为六八拍单声部微分音旋律，难点在于二十四平均律下四分音离散化与长程调式一致性维持。方法链分三步：先精选三十三首拉迪夫有节拍旋律并经四分音移调增广至五百九十条序列以覆盖全部调中心，再以位置—音高—时值三元事件编码小节内节拍位置与索里、科隆微分音高及时值，随后由六层编码器—解码器Transformer以主音参考序列为条件自回归生成并转MusicXML记谱。相对仅建模局部转移的一阶马尔可夫方法，关键差异在于全局自注意力与主音条件交叉注意力建模长程依赖与相对音高关系，从而维持调式音集与节拍层级。在20首生成旋律评测下，PerFormer的可容许音高准确率为90\.18%，高于一阶马尔可夫基线的可容许音高准确率34\.71%。主观听测整体质量从1\.5升至3\.9，节奏分布向长时值偏移等问题仍待改进。结论适用边界受限于C调Chahargah与Reng等六八拍有节拍体裁，向其他达斯特加与自由节奏即兴的外推尚未验证。训练使用NVIDIA Tesla T4硬件完成批量三十二共一百轮优化，推理以离线Top\-k采样生成，实时交互吞吐尚未验证。

🔗 **开源资源**

- 第三方资源：<https://github.com/Zjy0401/choir-transformer> → <https://github.com/WindSpeaker-music/choir-transformer> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 144. [看不见声像旋钮时，用腰上的振动把环绕声位置找回来](/posts/conference-nime-2026-conference-paper-id-nime2026-61-1597134cd5/)

> 英文题目：*[Designing a Spatial Vibrotactile Interface for Accessible Spatial Audio Mixing by Blind and Visually Impaired Music Producers\.\.](/posts/conference-nime-2026-conference-paper-id-nime2026-61-1597134cd5/)*

标签：#用户研究 #空间音频信号 #声源定位 #空间音频渲染

评分：**4.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#空间音频渲染 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_61/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_61.pdf)

👥 **作者与机构**

- Christina Karpodini：机构信息未能从会议 PDF 纯文本可靠映射
- Tychonas Michailidis：机构信息未能从会议 PDF 纯文本可靠映射
- Richard Davies：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

空间音频混合的输入是多轨声源在环绕声场中的方位意图，输出是对声源轨迹的连续操控，而现有数字音频工作站高度依赖可视化声像插件与屏幕阅读器线性播报，导致盲人与视障制作人难以建立直观方位意象且导航繁琐耗时。方法链由键盘交互复刻、触觉映射生成与音频触觉联合呈现三个步骤构成，键盘交互复刻沿用左右方向键步进移动声源以承接既有屏幕阅读器操作习惯，其输出的位置指令进入触觉映射生成。触觉映射生成将声源空间位置经由躯干周围八马达布局与邻近马达距离加权插值转换为连续幻觉振动点，其输出的振动线索进入联合呈现。联合呈现把Unity空间化音频与背心振动同步交付给居中坐姿的佩戴者，实现双模态校准下的探索式混音任务。与纯音频加语音播报的关键机制差异在于用以身体为中心的触觉空间替代视觉平面隐喻，使方位判断不再依赖记忆百分比与角度数值，从而降低认知负荷并增强任务完成信心。在躯干前后双侧佩戴的硬件配置评测设置下，整机布局的振动点数量指标为40，高于单侧布局的振动点数量指标为20。本结论适用边界受限于水平面环绕方位感知探索，仰角、距离与多轨同时显示等空间音频要素尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://docs.bhaptics.com/sdk/unity/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 145. [不追求弹准的乐器：当身体、织物与声音互相谈判控制权](/posts/conference-nime-2026-conference-paper-id-nime2026-95-f6e26ac7ee/)

> 英文题目：*[Negotiating Control and Agency: Somaesthetics and Feminist Perspectives on a Wearable E\-Textile Instrument\.](/posts/conference-nime-2026-conference-paper-id-nime2026-95-f6e26ac7ee/)*

标签：#用户研究 #音乐 #音频交互

评分：**4.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_95/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_95.pdf)

👥 **作者与机构**

- Qiaosheng Lyu：机构信息未能从会议 PDF 纯文本可靠映射
- Ryo Ikeshiro：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以全身穿戴式可变形电子纺织界面为输入、以连续低频声音纹理为输出的开放式音乐交互，难点在于同一手势无法复现同一声音而不同动作又可能趋同，传统以精准与精通为标准的乐器评价难以适用。先以身体挤压牵拉为输入，由不均匀针织导电纱传感区负责将形变转为电阻波动，非传感针织区经机械牵拉间接调制该波动，输出的电阻变化经Arduino传输进入Max构成下一步输入。再以电阻波动为输入，由最小加工直接可听化负责将其直接采样为波形并在低频段分件播放，使持续按压释放与突发接触呈现为幅度与质感的动态变化，输出的听觉反馈即时返回身体以引导下一步动作。最后以自主起止的录像与半结构访谈为输入，由四阶段渐进约束探索加反思性主题分析负责经ELAN切分为动作事件并提炼为具身协商策略，使材料可供性与情感联想进入结论。与把纺织仅作表达媒介或装饰表皮的已有工作不同，该设计以多对多不稳定映射与穿戴式分布传感主动制造不确定性，使声音成为意图材料与听觉反馈共同涌现的结果而非精确执行的产物。在四阶段渐进约束探索任务条件下，最长阶段持续时长指标为10分钟，高于最短阶段持续时长指标的3分钟。其结论适用边界受限于4名有音乐或身体实践背景的女性参与者在实验室的短期探索，尚未验证舞台表演听众感知与长期学习效应。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://youtu.be/7o3KL1jBKdY> → <https://www.youtube.com/watch?v=7o3KL1jBKdY&feature=youtu.be> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 146. [不推断情绪，只演奏身体：生物反馈套件如何把映射当作作曲](/posts/conference-nime-2026-conference-paper-id-nime2026-100-6793ef7158/)

> 英文题目：*[Biofeedback Suite as an Instrument: Emotion Mappings for Musical Practice\.](/posts/conference-nime-2026-conference-paper-id-nime2026-100-6793ef7158/)*

标签：#用户研究 #生理信号 #音乐 #音乐生成

评分：**4.8/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_100/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_100.pdf)

👥 **作者与机构**

- Lluis Guerra Recas：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理以身体信号驱动音乐的实时交互任务，输入为皮肤电反应、网络摄像头全身运动与面部表情描述符，输出为叠加于键盘与钢琴之上的电子声音层，难点在于生理信号缓慢漂移、语义模糊且须实时可演奏并保持可听因果性。方法链由传感校准、声音合成映射与迭代聆听取舍构成，Python中间件先完成传感接入、基于近期历史的相对校准与带迟滞的离散激活等级划分，其输出的连续值与等级信号直接进入下一步。纯数据声音引擎接着完成合成与映射，皮肤电反应调制正弦层频率而运动调制锯齿层频率，连续频率叠加离散密度控制并在高激活时触发延迟混响增厚，面部表情描述符则不做连续映射而作为和声触发器选择和弦与调式框架。全部映射经反复聆听与演奏测试迭代取舍，演奏评测在独奏、双重奏与交互乐谱场景下以知觉清晰度与语义丰富度为标准而非技术正确性进行。在由独奏、双重奏与交互乐谱场景构成的评测设置下，高变异映射条件的知觉清晰度指标为0个可核对数值，低于约束映射条件的知觉清晰度指标的0个可核对数值所能支撑的有效比较，原文未提供可核对的关键定量结果。与追求情绪推断精度的已有方法不同，该系统以约束设计换取可听因果性、对话感与可学习性，将映射视为作曲行为而非优化问题。其结论适用边界限于作者语境下的独奏纹理增强、双重奏关系中介与交互乐谱Marvila三类键盘实践，跨演奏者泛化与长期稳定性尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 147. [把组织当作乐谱：二十年社区工作室如何作曲基础设施](/posts/conference-nime-2026-conference-paper-id-nime2026-137-82dd1caa3c/)

> 英文题目：*[The Community studio as Score: Composing experimental music infrastructures\.](/posts/conference-nime-2026-conference-paper-id-nime2026-137-82dd1caa3c/)*

标签：#教育 #用户研究 #音乐 #空间音频信号 #空间音频渲染

评分：**4.8/10** | 创新 1.3/2 | 技术严谨 0.7/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#空间音频渲染 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_137/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_137.pdf)

👥 **作者与机构**

- Yashas Shetty：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以班加罗尔社区工作室二十年组织实践为输入，以可持续实验音乐基础设施与情境化知识生产为输出，难点在于长期参与式演化不可控，且慢时间积累的洞见难以被年度发表周期评价。方法分三步衔接：第一步开源作曲逻辑负责知识复刻回流，将电路弯折工作坊沉淀为可分叉改写的公共库存。第二步约束作曲负责将资金设备匮乏转写为低成本乐器路径，其筛选出的社群与技术库存进入第三步。第三步生态时间性负责让三维声场实验室与驻留项目在条件成熟时缓慢生长，并由合作社治理结构承接长期运维。在工作室演化场景下，成熟期实验室的通道数指标为32通道，高于初创期单间的通道数指标1通道。与以新乐器物为创新单元的NIME主流路径不同，该工作把评价单元上移到生态系统的生成能力与可维持性，意义在于为长周期社区实践争取研究合法性。其适用边界在于高度依赖班加罗尔艺术生态与创始人长期在场，资源丰裕或高度科层化机构中的可移植性尚未验证；原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 148. [把音色拆成泛音再拼回去：用四件中国乐器做可玩的视听合成器](/posts/conference-nime-2026-conference-paper-id-nime2026-45-9bbb285c15/)

> 英文题目：*[Cultural Timbre as Unvoiced Knowing: An Audiovisual Spectral Synthesizer That Transforms Chinese Musical Instruments\.](/posts/conference-nime-2026-conference-paper-id-nime2026-45-9bbb285c15/)*

标签：#时频分析 #音视频 #生理信号 #音乐 #音视频生成

评分：**4.8/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音视频生成 | 主方法：#时频分析

会议来源：[官方记录](https://nime.org/proc/nime2026_45/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_45.pdf)

👥 **作者与机构**

- Yong Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Marcel Zaes Sagesser：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

SonoChrom以古筝、二胡、唢呐、唐鼓四种中国乐器的自录音色为输入，输出可连续过渡的混合音色与乐器形态点云可视化，难点在于音色难以形式化描述且其文化联想难以被交互激活。先邀请业余学生乐手录制覆盖单音、揉弦与击奏的113个8秒乐句并降噪归一，输入为现场演奏，职责是提供文化可辨识素材，输出为时间对齐的乐句库。再人工分离每条录音的前8个分音并导出时间对齐声轨，输入为上一步乐句库，职责是解构频谱，输出为904个可循环重组的分音声轨。然后在Max/MSP中按16步预设序列循环增减分音并在跨乐器时保持总数为8，输入为上一步分音声轨，职责是重组出物理不可演奏的中间态，输出为流体音色空间。最后用触摸式心电图估计心率与心率变异性并分别解释为唤醒度与效价值，输入为上一步流体音色空间与生理信号，职责是驱动目标乐器与失谐跳转并同步溶解重组TouchDesigner点云，输出为视听联动的装置状态。在声料构建任务的评测设置下，重组后样本数量指标为904，高于原始录制样本数量指标113。与已有视听装置相比，该机制把音色本身作为第一交互对象而非配乐参数，并用生理信号实现无意识调制而非乐器式操控。该结论适用边界受限于2025年南方科技大学设计学院年终展逾百人次的非结构化观察，跨文化泛化与长期情感效应尚未验证；原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://dataphys.org/list/3d-spectrogram/> — 链接可访问（HTTP 200）
- 第三方资源：<https://bbbryan.com/Evolution> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 149. [从外接电脑到装进鼓里：混合鼓如何把合成声再送回木腔](/posts/conference-nime-2026-conference-paper-id-nime2026-46-262309c8e4/)

> 英文题目：*[Hybrid Drum: Iterative Development Toward Standalone Operation and Physical Feedback\.](/posts/conference-nime-2026-conference-paper-id-nime2026-46-262309c8e4/)*

标签：#信号处理 #端侧运行 #实时处理 #音乐 #音频交互

评分：**4.8/10** | 创新 1.1/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.9/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_46/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_46.pdf)

👥 **作者与机构**

- Casper Preisler：机构信息未能从会议 PDF 纯文本可靠映射
- Dan Overholt：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文解决手持混合打击乐在保留原声共鸣与手触即时性的同时引入实时数字变换，且摆脱外部电脑与电源束缚的难题，输入为鼓面敲击机械振动与旋钮转动手势，输出为外部扩声与鼓体内部机械振动共同构成的混合声场。方法链第一步由两片压电陶瓷经输入缓冲调理拾取振动并送入Daisy Seed，其输出直接以实测敲击激励Karplus\-Strong延迟线生成速度敏感的弦鸣合成。第二步经定制印刷电路板完成双路外部输出、数字音量与三旋钮参数映射，并由锂离子电池管理与升降压稳压实现独立供电与充放电指示。第三步将处理后音频经独立增益数字功放送入内置激励器回灌鼓体，形成传感与作动的物理闭环。与Mandala V3与Korg Wavedrum等触发采样叠加路径不同，该设计让数字处理成为共鸣结构内的主动参与者而非外部效果器，保留了敲击手感与自发性。在典型使用场景下，满电状态的续航指标约为4小时，高于低电量状态的续航指标约2小时。结论的适用边界受限于样机阶段，Iteration 2音频通路与作动已连通但激励器与拾音器结构耦合啸叫尚未抑制，陀螺仪、显示屏与预设系统尚未验证，硬件上Daisy Seed保持了亚10毫秒级低感知延迟而功耗标定仍在进行。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 150. [把泛音列织进墙面：用走位而非旋钮演奏固定磁场](/posts/conference-nime-2026-conference-paper-id-nime2026-60-3175ad5347/)

> 英文题目：*[Magnetic Memory Rushnyk\.](/posts/conference-nime-2026-conference-paper-id-nime2026-60-3175ad5347/)*

标签：#信号处理 #听觉与音乐认知 #音乐 #音频交互

评分：**4.8/10** | 创新 1.3/2 | 技术严谨 0.8/1.5 | 实验充分 0.2/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_60/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_60.pdf)

👥 **作者与机构**

- Sofya Yuditskaya：机构信息未能从会议 PDF 纯文本可靠映射
- Margaret Schedel：机构信息未能从会议 PDF 纯文本可靠映射
- Jocelyn Ho：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

磁记忆罩布要解决表演者不依赖离散旋钮与外部符号乐谱，直接以身体漫游墙面尺度纺织体来发现并形塑声音形式，输入为具身移动与触碰，输出为连续频谱声场，难点在于谐波结构与手势解释须同时被物质化为可学习的地形。先以72Hz基频的奇次谐波系为输入，按除以2的幂折叠进受限音域并按生命之树拓扑分配给44个磁节点，职责是作曲性空间编码，输出一张空间化的作曲地形图。再以该地形图为布线依据，以铁磁带与磁环及导线为输入，用Arduino Uno多路复用以5V电流驱动形成静态电磁场，职责是把谱系固化为可读存储，输出附有连续电磁场的织物，使前步的节点分配直接决定通电位置与寄存器分区。最后以前步电磁织物输出的磁通为输入，以手持感应线圈拾取为职责，把接近度转为强度与亮度、速度转为颗粒密度、朝向转为谐波色彩，输出随寻路变化的声音，使织造存储直接成为演奏读取对象。在基频72Hz倍频折叠设置下，奇次谐波h=3折叠前的频率指标为216\.00Hz，高于折叠后的频率指标108\.00Hz。与参数控制式数字乐器相比，该机制把作曲前移至织造与布线、把演奏后移为寻路与驻留，使同一地点因走法不同而音色各异。该结论适用边界受限于固定拓扑下的慢速具身探索，高速擦扫会故意模糊音高身份，多演奏者协商尚未验证，原型硬件依赖Arduino Uno与5V供电的大尺寸输入，推理开销与延迟未见报告。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 151. [把空间接进电路：可穿戴激光反馈乐器 FO2 如何让身体动作变成声音](/posts/conference-nime-2026-conference-paper-id-nime2026-63-1eeb1bb7f2/)

> 英文题目：*[FO2 \- Building A Wearable Laser\-Feedback Instrument: Performing body\-space\-technology entanglements\.](/posts/conference-nime-2026-conference-paper-id-nime2026-63-1eeb1bb7f2/)*

标签：#信号处理 #端侧运行 #音视频 #音频交互

评分：**4.8/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_63/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_63.pdf)

👥 **作者与机构**

- Nicola Hein：机构信息未能从会议 PDF 纯文本可靠映射
- Viola Yip：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该文面向可穿戴视听表演任务，输入为表演者双手手势与空间反射条件，输出为同步的声音与激光视觉，难点在于身体移动、空间结构与反馈稳定性需实时耦合。先由背负式Bela Gem接收手持控制器按键与霍尔摇杆输入并运行SuperCollider立体声反馈算法生成音频，该音频输出经5V模拟口转换为激光驱动器脉宽调制信号，再用该调制信号驱动110度线激光器将声音编码为线形光面并投射到表演空间，最后由空间中布置的5V太阳能板接收直射或反射光并转回电流经音频电路与扬声器扩声为可听声，该回送声再进入Bela Gem形成光反馈闭环并由控制器双通道参数持续调节。在双手表演任务条件下，每只手控制器的按键数量指标为6，高于每通道合成参数的数量指标2。与麦克风加扬声器反馈相比，光路以光速闭合并在数毫秒内迅速饱和，且天然将距离、反射率与入射角转化为音色控制量，使每个音乐手势同时成为空间手势。该结论适用边界受限于暗环境特定反射空间与双人编制现场表演，尚未验证不同厅堂、光照与长时间演出的外推范围。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 152. [不展示乐器而是与乐器共处：Solstice 如何让空间与声学成为演奏者](/posts/conference-nime-2026-conference-paper-id-nime2026-96-946c00a580/)

> 英文题目：*[Solstice: A new work centred on music, bridging disciplines and creative freedom with instruments\.](/posts/conference-nime-2026-conference-paper-id-nime2026-96-946c00a580/)*

标签：#信号处理 #长音频处理 #音乐 #空间音频信号 #音频交互

评分：**4.8/10** | 创新 1.3/2 | 技术严谨 0.9/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_96/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_96.pdf)

👥 **作者与机构**

- Iran Sanadzadeh：机构信息未能从会议 PDF 纯文本可靠映射
- Luna Valentin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Solstice要处理的输入是双表演者携增强低音提琴与压力感应地板在悬吊绳索和可变混响中共处的长时现场，输出是约四十分钟的连续音乐形态，难点在于不让演示逻辑切割音乐并使声学与身体约束成为可演奏条件。方法链第一步以剧场舞台窗口与日落时刻及环绕式观众布局确立空间戏剧框架，其输出的在场关系直接约束后续发声位置。第二步接入压力感应地板与增强低音提琴及弹簧混响等道具构成发声主体，并将身体重量再分配转化为可演奏的声音手法后送入声学调制。第三步以实时卷积虚拟声学系统统一调制全场混响环境，并经约一周密集即兴与录像复盘将即兴固化为片段式段落衔接。在冲突段落的舞台呈现条件下，有序手势段落的时间指标为22’，低于混乱制造手势段落的时间指标23’。与已有演示导向的新界面工作相比，该机制把声学从单声源效果处理转为主导协商的共享表演生态，使演奏以关系性聆听代替单向控制并支撑长时形式。该结论的适用边界受限于多通道阵列与长时排练条件的特定剧场，换场馆或压缩排练即构成失败条件，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 153. [把想象的手臂运动听见：用解码速度驱动颗粒合成的声音手势](/posts/conference-nime-2026-conference-paper-id-nime2026-98-88844fe2dd/)

> 英文题目：*[Imagined Movement as Sonic Gesture: Auditory Expression from a Deep Learning\-Based Motion Decoding BCI\.](/posts/conference-nime-2026-conference-paper-id-nime2026-98-88844fe2dd/)*

标签：#RNN #实时处理 #脑信号 #音频交互

评分：**4.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#RNN

会议来源：[官方记录](https://nime.org/proc/nime2026_98/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_98.pdf)

👥 **作者与机构**

- Niall McShane：机构信息未能从会议 PDF 纯文本可靠映射
- Karl McCreadie：机构信息未能从会议 PDF 纯文本可靠映射
- Attila Korik：机构信息未能从会议 PDF 纯文本可靠映射
- Damien Coyle：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以17通道非侵入脑电时频特征为输入，输出想象手臂三维连续速度并转为声音与视觉反馈，难点在于脑电噪声大且非平稳时变，而离散分类与纯视觉反馈难以承载方向力度时程的连续表达。先同步采集17通道脑电与Vive腕部运动学并经UDP嵌入试次标记对齐，把想象reaching意图与第一人称虚拟手锚定，输出时间同步的脑电\-运动学监督对。再将同步脑电转为0\-40Hz感觉运动节律事件相关谱扰动谱图并输入卷积长短时记忆解码器，把时变谱特征逐帧估计为x、y、z三轴速度流，输出连续意向运动学。最后将60Hz解码速度经指数滑动平均平滑后送入Unity内MotionToAudio控制器，按颗粒纹理、包络滤波与空间混响三层映射为颗粒密度、截止频率与混响扩散，并同步驱动boid粒子与虚拟肢体。与情感或频带功率声音化不同，该工作直接发声化意向速度与加速度动态，保留方向结构与时间展开，使声音成为主交互模态而非辅助提示。在空间效果映射设置下，持续加速手势条件的混响反馈指标为0\.8，高于弱运动条件的混响反馈指标0\.2。该结论适用边界受限于复用已训练解码器的离线建模概念验证，尚未验证实时闭环下听觉反馈能否改善学习或稳定演奏。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/LibPdIntegration/LibPdIntegration> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 154. [为全身舞蹈保留发声逻辑：1978 年 Terpsitone 的交互式数字孪生](/posts/conference-nime-2026-conference-paper-id-nime2026-21-68b4f01ea5/)

> 英文题目：*[A Digital Twin for Theremin’s Terpsitone from 1970s\.](/posts/conference-nime-2026-conference-paper-id-nime2026-21-68b4f01ea5/)*

标签：#教育 #信号处理 #音乐 #音频交互

评分：**4.5/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.2/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_21/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_21.pdf)

👥 **作者与机构**

- Sergey Kasich：机构信息未能从会议 PDF 纯文本可靠映射
- Breanna Lau：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以全身舞蹈动作驱动单声部连续音高与音色的特普斯特琴为对象，输入为舞者在台面天线上的三维身体位置变化，输出为差频振荡合成的连续音频，难点在于现存仅1978\-1979年为Lydia Kavina制作的最后一台原机且几乎无历史录音与交互标定可考。首先基于46张照片与手工测量在MAYA中重建全尺寸三维模型，输出带定制纹理的外观与空间尺寸存档并作为Unity中虚拟舞台几何。其次基于逆向得到的电子管合成器电路在Pure Data中以范德波尔振荡器对高频差频发声建模，经低通滤波链抑制高频伪像后生成程序化音频引擎。在历史考证任务下，系列考证的数量指标为至少4台，高于早期视觉分析确认的数量指标2台。再次在Unity中以Meta Quest 3头加双手三点质心映射垂直高度变化，经由LibPD驱动音频引擎实现纵向位置到音高的交互耦合。与仅做外观复刻的虚拟现实乐器做法不同，本文提出交互运动学概念，强调身体质心升降控制音高的可迁移类属逻辑而非固定手势复刻。当前结论适用边界受限于外观展示与原理演示，音高稳定性、延迟与演奏可用性尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://yadegari.org/software/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 155. [谁在演奏：当姿态追踪、映射网络与神经音频合成共同分配控制权](/posts/conference-nime-2026-conference-paper-id-nime2026-64-5b8ce0a513/)

> 英文题目：*[Performing with the inclusive machine: An interdisciplinary roadmap for the design of AI collaborative musical instruments\.](/posts/conference-nime-2026-conference-paper-id-nime2026-64-5b8ce0a513/)*

标签：#开源工具 #变分自编码器 #音乐 #空间音频信号 #音频交互

评分：**4.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.6/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.6/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#变分自编码器

会议来源：[官方记录](https://nime.org/proc/nime2026_64/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_64.pdf)

👥 **作者与机构**

- Pablo Mollenhauer：机构信息未能从会议 PDF 纯文本可靠映射
- Alejandra Pérez Núñez：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究处理单目身体运动到神经音频与四声道空间化的实时演奏任务，输入为连续姿态关键点向量，输出为RAVE隐空间驱动的高质量波形及其声像位置，难点在于兼顾非确定性探索趣味与可演奏因果可读性及低延迟体感耦合。姿态追踪阶段用预训练身体追踪模型提取关节点向量并经OSC协议转发，其连续数值流直接作为下一步监督学习的输入。有监督映射阶段用多层感知器将姿态向量回归为77维合成控制参数，训练数据为特定姿态与特定合成器声音的配对点，预测输出进入下一步音频调制。音频合成阶段以该预测调制6个RAVE预训练模型的隐变量以生成波形，并以12对xy坐标控制四声道空间化发声。在姿态维度对比设置下，66维姿态输入配置的输入指标为66，高于8维姿态输入配置的输入指标8。与固定映射乐器相比，该设计把控制权分散到手势、隐空间与空间化构成的反馈装配，设计者以挑选训练配对划定行动场而非精确函数，小数据训练误差小但声音相似可预测，增大数据则易因矛盾配对导致学习破裂。其结论适用边界受限于单表演者艺术探索与微观现象学叙事，尚未验证多人合奏、观众参与与长期演奏学习中的泛化。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://zenodo.org/doi/10.5281/zenodo.14930640> → <https://zenodo.org/records/14930640> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 156. [看得清反而重建差：Murzinograph 用三维瓶颈把声音画成可走的轨迹](/posts/conference-nime-2026-conference-paper-id-nime2026-154-d467e51695/)

> 英文题目：*[Murzinograph: Navigating Sound through Latent Space Visualizations\.](/posts/conference-nime-2026-conference-paper-id-nime2026-154-d467e51695/)*

标签：#生物声学监测 #CNN #可解释性 #音频理解

评分：**4.4/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频理解 | 主方法：#CNN

会议来源：[官方记录](https://nime.org/proc/nime2026_154/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_154.pdf)

👥 **作者与机构**

- Gustavo Guzmán：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为音乐、声景录音与动物发声等音频声谱图，输出为三维空间中可探索并与原音频同步回放的时间轨迹可视化，难点在于高维频谱细节难直解且主成分分析、t分布随机邻域嵌入与均匀流形近似投影等传统降维缺乏时间连贯性。方法链第一步将声谱图沿时间切分为重叠堆叠快照并做频段选择掩蔽与分批乱序加载，增强对非相邻片段结构模式的学习，其输出堆叠快照序列直接送入编码器。第二步由定制卷积自编码器加批归一化并以频谱收敛损失配均方误差重建约束，将每帧压缩为三维确定性潜向量，使重建保真约束转化为紧凑流形表示。第三步在推理期按时间重排序为首尾贯通的轨迹曲线，并以粉色起点与时间色彩映射渲染为可回放的素描式结构，供高层分析与跨模态探查。与变分自编码器及RAVE等高维随机高斯潜空间方案不同，该系统坚持低维确定性编码，以放松重建精度换取轮廓式可读性，揭示重建越松则轨迹语义越显的可视化与重建权衡反比关系。在潜空间可视化任务下，Murzinograph的维度指标为3维，高于二维流形条件的维度指标2维。该结论适用边界受限于定性探索与生态教学场景，在四次三小时约十二人轮换工作坊中观察到对噪声源与物种分布的辨别作用，尚未验证对未见数据的泛化与跨数据集稳定性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://doi.org/10.1145/604045.604056> → <https://dl.acm.org/doi/10.1145/604045.604056> — 链接不可用（HTTP 403）
- 第三方资源：<https://hal.science/hal-01161060> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 157. [把混沌当礼物：霍迪克如何用威望代替专利来养活乐器社群](/posts/conference-nime-2026-conference-paper-id-nime2026-91-83c48b4802/)

> 英文题目：*[The Gift of Chaos: Rob Hordijk's Open Design Philosophy and the Formation of Post\-Digital Instrument Communities\.](/posts/conference-nime-2026-conference-paper-id-nime2026-91-83c48b4802/)*

标签：#教育 #文献综述方法 #音乐 #音乐生成

评分：**4.4/10** | 创新 1.1/2 | 技术严谨 0.7/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音乐生成 | 主方法：#文献综述方法

会议来源：[官方记录](https://nime.org/proc/nime2026_91/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_91.pdf)

👥 **作者与机构**

- Pere Amengual\-Gomila：机构信息未能从会议 PDF 纯文本可靠映射
- Alfredo Sanz\-Hervás：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文针对创始人去世后小众新乐器实践易因克隆冲击与文档缺失而消亡的难题，输入是脆弱的去中心化DIY生态与难以编码的默会知识，输出是可存活的艺术生态与知识托管机制。方法分三步：先以先验技术公开核心电路逻辑阻断专利圈地并确立首创者地位，其公开图档直接成为社区共享的伦理起点；再以威望为核心的社会契约约束复制行为，用手工原作与社区认可替代法律执行，该共识进入下一步的人选与制作环节；最后通过物理飞地长期共创与指定继承人传递调试经验，并演化出兼容现代模块的新乐器。在移位寄存器条件下，完整寄存器路径的位宽指标为8\-bit，高于末三位读取路径的位宽指标的three bits，该8状态步进电压迫使演奏者以倾听手势在有序与崩溃间导航。与采用正式开源许可与法务执行的路径相比，该机制依赖人际信任与小批量手工迭代而非法律文本，其意义在于保持音色活力与伦理凝聚但牺牲可扩展性。该结论适用边界仅限于高威望、低产量、手作校准的精品合成器社群，尚未验证在大规模量产与低成本克隆冲击下的存活边界。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.modwiggler.com/forum/viewtopic.php?t=228721> — 链接不可用（HTTP 403）
- 第三方资源：<https://doi.org/10.5281/zenodo.17811082> — 暂时无法访问
- 第三方资源：<https://doi.org/10.5281/zenodo.1176218> → <https://zenodo.org/records/1176218> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.21428/92fbeb44.dc50e34d> → <https://nime.pubpub.org/pub/czq0nt9i> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 158. [不模仿鸟叫而是学会鸟的语法：亚马孙 transmorphic 音乐如何重排技术与生态的关系](/posts/conference-nime-2026-conference-paper-id-nime2026-88-b97babd9f0/)

> 英文题目：*[Listening to Amazônia Verde Viva: Transmorphic Intersections of Ecology and Music Technology in the Global South\.](/posts/conference-nime-2026-conference-paper-id-nime2026-88-b97babd9f0/)*

标签：#用户研究 #生物声学 #音乐 #音乐生成

评分：**4.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.4/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音乐生成 | 主方法：#用户研究

会议来源：[官方记录](https://nime.org/proc/nime2026_88/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_88.pdf)

👥 **作者与机构**

- Luiz Ribeiro Sales Fonseca：机构信息未能从会议 PDF 纯文本可靠映射
- Thiago Albuquerque：机构信息未能从会议 PDF 纯文本可靠映射
- Albery Albuquerque：机构信息未能从会议 PDF 纯文本可靠映射
- Courtney N\. Reed：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入是亚马逊森林居所录音、博物馆与城市档案及第三方鸟类鸣声等素材，输出是保留物种句法与节奏逻辑的人兽共创专辑《Amazônia Verde Viva》及透形态作曲原则，难点在于既要转译非人类声音的自发语言又不沦为拟态采样或人类和声殖民。方法第一步是田野与档案采集与熟悉，在森林居所、贝伦城区与博物馆中获取uirapuru、sabiá、curió、onça等鸣声并长期聆听其纯粹形态。第二步是频谱与记谱分析解码，将节奏细胞与滑音转写为吉他上可演奏的主题并扩展为管弦配器，使动物句法进入人类作曲语法。第三步是切分覆盖与混音重塑，把真实鸣声逐音切分覆盖到已写声部上，再经均衡与动物基虚拟乐器技术处理并回放给自然检验互动。相比NIME主流的气候数据可听化与实时野外录音映射，该路径关键机制差异在于从动物到人类的逆向作曲与具身调谐，其实质意义是以共创伦理替代提取式技术解决主义并支撑巴西北部生态政治表达。在专辑曲目语料下，Base Rítmica Sabiana的时长指标为4:12，高于A Flauta E O Curió的时长指标2:47。该结论适用边界受限于该组合四十年实践与该专辑语境，向其他物种、实时交互乐器或不同生态系统的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.nime.org/environment/> → <https://nime.org/environment/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.nime.org/web_archive/2022/> → <https://nime.org/web_archive/2022/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.theharrisonstudio.net/making-earth-1970> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 159. [把簇绒动作变成复调激发：柄接式地毯工具如何同时产出织物与声音](/posts/conference-nime-2026-conference-paper-id-nime2026-134-d4892cd50e/)

> 英文题目：*[The Carpet Maker’s Hafted Tool: A Hackable Instrument for Sonoric Textile Practice\.](/posts/conference-nime-2026-conference-paper-id-nime2026-134-d4892cd50e/)*

标签：#开源工具 #信号处理 #音乐 #音频交互

评分：**4.2/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://nime.org/proc/nime2026_134/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_134.pdf)

👥 **作者与机构**

- Joseph Burgess：机构信息未能从会议 PDF 纯文本可靠映射
- Toby Gifford：机构信息未能从会议 PDF 纯文本可靠映射
- Alex Wixted：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该文输入为手工簇绒中双手推刺预拉伸背衬织物的粗糙重复手势、铁磁部件位移磁场与织物膜振动，输出为同步生成的地毯织物纹理、原声摩擦与电声增强的石器声音对象，要求在保留原有工艺动作的同时扩展可演奏性与可魔改复现性。地毯制作者柄装工具 Carpet Maker's Hafted Tool（CMHT）先以整木雕刻柄装铁匠复刻的古董簇绒头形成握持与共鸣腔及底部电子仓，再由模拟与数字霍尔传感器与压电拾音将压缩与伸展转译为采样触发与织物共振增强，最后经板载采样回放与扬声器话筒回路实现声纺同步输出。与既有纺织品触摸传感可穿戴控制器相比，其机制差异在于把工具本身作为激发器与作曲模板而非传感面，从而实现一次动作同时产生织物、原声与合成石器声三重结果。原文未提供可核对的关键定量结果，验证仅依赖V1扎带木柄工作室测试、V2簇绒锤2场演出后报废替换、V3整木CMHT迭代叙事，以及2025年自NIME 2025合奏起针后经多次演出完成的1件地毯成品。该结论仅适用于手工簇绒场景与特定ESP32与Adafruit Sound FX实现，未验证跨工具、跨演奏者与长期稳定演奏的外推能力。原文未披露训练、推理或部署成本，不涉及机器学习训练。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 160. [先编织后通电：以安第斯螺旋时间组织声音界面生成的设计过程](/posts/conference-nime-2026-conference-paper-id-nime2026-27-d9aad66db6/)

> 英文题目：*[Weaving Before Electronics: A Spiral Design Process for Sound\-Interface Making\.](/posts/conference-nime-2026-conference-paper-id-nime2026-27-d9aad66db6/)*

标签：#人类参与评测 #音乐 #音频交互

评分：**4.2/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#音频交互 | 主方法：#人类参与评测

会议来源：[官方记录](https://nime.org/proc/nime2026_27/index.html) · [官方 PDF](https://nime.org/proceedings/2026/nime2026_27.pdf)

👥 **作者与机构**

- Patricia Cadavid Hinojosa：机构信息未能从会议 PDF 纯文本可靠映射
- Nathan Renney：机构信息未能从会议 PDF 纯文本可靠映射
- Judith Aston：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以安第斯螺旋时间观为根基制作可触声音接口，输入为在地纤维与身体编织手势，输出为可持续演奏的连续声音场，难点在于如何让宇宙观、材料阻力与交互映射共同生长而非先定功能再找外壳。方法链条由螺旋时间性、宇宙技术伦理、技术实践研究、线圈编篮工艺学习与声音构想五部分构成，编织学习先建立线圈语法与触觉拓扑并输出物理表面，拾荒与近域选材将该表面约束为可用结构，倾听与记录把摩擦密度转写为声音假设，社群共织对密度与节奏做返回式修正后再进入下一圈编织。与以线性优化与通用可用性为中心的数字乐器设计相比，该工作坚持计算跟随编织，电子只做潜在手势的转译与放大。原文未提供可核对的关键定量结果。结论目前仅适用于作者主导的单件在制品与特定离散社群语境，向他人复用或跨文化迁移尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
