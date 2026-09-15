---
title: "icmc-2026 论文深度解读"
date: 2026-09-15
draft: false
paper_digest_pipeline_owned: true
tags: ["变分自编码器","大语言模型","端到端","对比学习","多通道","符号音乐生成","环境声","检索增强","教育","节拍跟踪","开源工具","可解释性","空间音频","空间音频信号","空间音频渲染","扩散模型","理论分析","模型集成","脑信号","偏好优化","评测协议","强制对齐","软件工具","生成模型","生理信号","时频分析","实时处理","数据标注","数据集","数据集构建","数据清洗","听觉与音乐认知","统计分析","文献综述方法","向量量化","信号处理","音乐","音乐检索","音乐理解","音乐生成","音乐推荐","音乐信息检索","音乐源分离","音乐转录","音频分类","音频交互","音频生成","音频事件检测","音频质量评估","音视频","音视频交互","音视频生成","用户研究","游戏音频","语音","语音转换","主观评测","状态空间模型","CNN","CTC","LoRA","RNN","Transformer"]
categories: ["icmc-2026 论文"]
description: "共收录 60 篇 icmc-2026 会议论文的 Reader 深度解读"
paper_digest_page_type: index
paper_digest_reader_quality: "reader-facing-v3"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_scope: "aggregate-primary-task-counts"
---

# icmc-2026 论文深度解读

本汇总收录 authenticated plan 选择集内全部 60 篇已完成分析、重标和单篇 staging 的论文。

🏷️ 标签说明：本期使用新版受控 taxonomy；热门方向只统计主任务。

## ⚡ 今日概览

✅ authenticated plan 入选 60 篇 → 🔬 深度分析、Reader 与页面投影完成

### 🏷️ 热门方向

| 方向（仅主任务） | 数量 |
|---|---:|
| #音乐生成 | 16 篇 |
| #符号音乐生成 | 8 篇 |
| #音频交互 | 8 篇 |
| #音乐理解 | 7 篇 |
| #空间音频渲染 | 5 篇 |
| #节拍跟踪 | 2 篇 |
| #音乐检索 | 2 篇 |
| #音频生成 | 2 篇 |
| #音频质量评估 | 2 篇 |
| #音视频生成 | 2 篇 |
| #强制对齐 | 1 篇 |
| #音乐推荐 | 1 篇 |
| #音乐转录 | 1 篇 |
| #音频事件检测 | 1 篇 |
| #音视频交互 | 1 篇 |
| #语音转换 | 1 篇 |

## 📊 论文评分排行榜

| 排名 | Reader 中文题目 | 英文题目 | 八维评分 | 分档 | 文档类型 | 主任务 |
|---:|---|---|---|---|---|---|
| 1 | [留不住的不只是磁带机：用监督标注把哈维的延迟语法写回来](/posts/conference-icmc-2026-conference-paper-id-paper-118-90889508d1/) | [Supervised Memory: How Machines Can Preserve What We Cannot Hold](/posts/conference-icmc-2026-conference-paper-id-paper-118-90889508d1/) | **7.6/10** · 创新 1.5/2 · 技术严谨 0.9/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.5/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前25% | 理论研究 | #音乐理解 |
| 2 | [把乐器搭建和底层数字信号处理放进同一种语言：MMMAudio 的选择与代价](/posts/conference-icmc-2026-conference-paper-id-paper-25-e1bcf7651f/) | [The MMMAudio Computer Music Environment](/posts/conference-icmc-2026-conference-paper-id-paper-25-e1bcf7651f/) | **7.5/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.2/1.5 | 前25% | 系统技术报告 | #音乐生成 |
| 3 | [同一内存里的作曲与发声：Clamps 如何把 DSP 与元层缝在一起](/posts/conference-icmc-2026-conference-paper-id-paper-626-0e41d50f0f/) | [DSP and the Metalevel: Clamps \- an integrated environment for algorithmic composition and interactive realtime performance](/posts/conference-icmc-2026-conference-paper-id-paper-626-0e41d50f0f/) | **7.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 4 | [对不准音高时如何跟谱：用演奏法识别补齐对齐式跟谱](/posts/conference-icmc-2026-conference-paper-id-paper-142-60b4651054/) | [Automatic Hybrid Following in Real\-Time Mixed Music A Case Study with Antescofo and ipt for Flute Playing Techniques](/posts/conference-icmc-2026-conference-paper-id-paper-142-60b4651054/) | **6.9/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频事件检测 |
| 5 | [多人同演不混乱：Gestalt 用分层与加权聚合保住表演者结构](/posts/conference-icmc-2026-conference-paper-id-paper-504-838b3f604e/) | [Gestalt: A Symbiotic Framework for Real\-Time Collaboration between Performers and Mass Audiences](/posts/conference-icmc-2026-conference-paper-id-paper-504-838b3f604e/) | **6.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音视频交互 |
| 6 | [各声部各走各的拍子又能对齐：OrbitScore 如何把多层时间结构写成可演的代码](/posts/conference-icmc-2026-conference-paper-id-paper-721-733f5dc99f/) | [OrbitScore: A Domain\-Specific Language for Polymetric Live Coding Based on Multilayered Temporal Structures](/posts/conference-icmc-2026-conference-paper-id-paper-721-733f5dc99f/) | **6.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 7 | [会自己演奏的图画：把时间、导航和手势写进同一张 SVG 里](/posts/conference-icmc-2026-conference-paper-id-paper-436-2c5cc5ac76/) | [Scores That Run: Graphic Notation with Embedded Performance Semantics](/posts/conference-icmc-2026-conference-paper-id-paper-436-2c5cc5ac76/) | **6.7/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 8 | [没有总谱时如何度量对话：Paredes 人声—吉他合作的共性与偏离分析](/posts/conference-icmc-2026-conference-paper-id-paper-609-64a665d01a/) | [Perpetual Dialogues: A Computational Analysis of Voice–Guitar Interaction in Carlos Paredes’s Discography](/posts/conference-icmc-2026-conference-paper-id-paper-609-64a665d01a/) | **6.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音乐理解 |
| 9 | [把自行车变成可移动合奏：BIKES 如何用联网与制作串起教学](/posts/conference-icmc-2026-conference-paper-id-paper-136-cda1cf9b69/) | [BIKES: A Mobile Networked Music Instrument in Interdisciplinary Research and Education](/posts/conference-icmc-2026-conference-paper-id-paper-136-cda1cf9b69/) | **6.6/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 10 | [几乎但又不是：在文本到音频的潜空间里听见未成形的音乐](/posts/conference-icmc-2026-conference-paper-id-paper-580-7a99b3d9cf/) | [Latent Music: Emergent Sonic Forms and Sonic Liminality in Text\-to\-Audio Systems](/posts/conference-icmc-2026-conference-paper-id-paper-580-7a99b3d9cf/) | **6.6/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.6/1.5 | 前50% | 理论研究 | #音乐生成 |
| 11 | [对齐很粗时更要扣准起音：把 Snapping 做成按音高的全局分配](/posts/conference-icmc-2026-conference-paper-id-paper-195-420d0bfcbb/) | [Snapping Matters: Context\-Aware Onset Refinement for Automatic Music Transcription](/posts/conference-icmc-2026-conference-paper-id-paper-195-420d0bfcbb/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音乐转录 |
| 12 | [总体稳定下的细微伸缩：爱尔兰舞曲速度表情的拍级测量与乐句聚类](/posts/conference-icmc-2026-conference-paper-id-paper-680-695c339ce6/) | [Computational Analysis of Expressive Tempo in Irish Traditional Dance Music](/posts/conference-icmc-2026-conference-paper-id-paper-680-695c339ce6/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 应用研究 | #音乐理解 |
| 13 | [用一个非线性迭代跟住人：IPF 如何把节奏同步做成可复现的响应过程](/posts/conference-icmc-2026-conference-paper-id-paper-686-811869eb41/) | [Designing responsive rhythms utilizing the Impulse Pattern Formulation &\#40;IPF&\#41;](/posts/conference-icmc-2026-conference-paper-id-paper-686-811869eb41/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 应用研究 | #音乐生成 |
| 14 | [先抹掉再贴上：用颤音匹配把齐奏混音藏成一个声源](/posts/conference-icmc-2026-conference-paper-id-paper-137-c056994100/) | [Vibrato Matching for Modulation Control and Blending in Sound Mixtures](/posts/conference-icmc-2026-conference-paper-id-paper-137-c056994100/) | **6.2/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音转换 |
| 15 | [穹顶之上的作曲笔：Zirkonium 如何把 47\.4 通道的空间位置变成可写的参数](/posts/conference-icmc-2026-conference-paper-id-paper-220-737beead29/) | [2](/posts/conference-icmc-2026-conference-paper-id-paper-220-737beead29/) | **6.1/10** · 创新 1.0/2 · 技术严谨 0.8/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #空间音频渲染 |
| 16 | [不用录音棚如何得到可控的管乐四重奏：ChoraleWind 的规则表情与物理建模链路](/posts/conference-icmc-2026-conference-paper-id-paper-152-6db91bd511/) | [ChoraleWind: An Expressive Wind\-Quartet Dataset for End\-to\-End Rendering from the Neues Th¨uringer Choralbuch](/posts/conference-icmc-2026-conference-paper-id-paper-152-6db91bd511/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音乐生成 |
| 17 | [逐样本读相位、自调谐保幅度：跟踪共振器组的实时谱分析](/posts/conference-icmc-2026-conference-paper-id-paper-300-33547b9d64/) | [Real\-Time, Low\-Latency, High Resolution Audio Spectral Analysis: Phase Matters](/posts/conference-icmc-2026-conference-paper-id-paper-300-33547b9d64/) | **5.8/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频生成 |
| 18 | [让电脑跟指挥走：Ponticello 把电子声部绑到弹性拍点上](/posts/conference-icmc-2026-conference-paper-id-paper-453-4bce9b4930/) | [Ponticello: An Interactive Conducting System for Mixed Music Performance](/posts/conference-icmc-2026-conference-paper-id-paper-453-4bce9b4930/) | **5.8/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #节拍跟踪 |
| 19 | [用坐标找配乐：手工聚类守住可解释基线，深度生成模型换来连续检索](/posts/conference-icmc-2026-conference-paper-id-paper-23-dc59223cfb/) | [Emotion\-Based Film Music Retrieval with Handcrafted and Deep Models](/posts/conference-icmc-2026-conference-paper-id-paper-23-dc59223cfb/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.6/1.5 | 前50% | 应用研究 | #音乐检索 |
| 20 | [从一间工作室到松散结构：SARC 二十年如何用空间与制作组织声音研究](/posts/conference-icmc-2026-conference-paper-id-paper-533-fe159d88f0/) | [SARC Studio Report](/posts/conference-icmc-2026-conference-paper-id-paper-533-fe159d88f0/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.6/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #空间音频渲染 |
| 21 | [只在关键帧上加监督：用不同掩码拆开词起点与词终点的对齐误差](/posts/conference-icmc-2026-conference-paper-id-paper-121-c5baceddea/) | [Exploring Masked CE Losses to Enhance Word Offset Estimation in CTC\-based Lyrics\-to\-Audio Alignment](/posts/conference-icmc-2026-conference-paper-id-paper-121-c5baceddea/) | **5.5/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #强制对齐 |
| 22 | [把手的极限写进网络：物理约束如何决定钢琴指法的可弹性](/posts/conference-icmc-2026-conference-paper-id-paper-179-62ca5832ab/) | [CNN\-BiLSTM Hybrid Model with Physical Constraints for Automatic Piano Fingering Generation](/posts/conference-icmc-2026-conference-paper-id-paper-179-62ca5832ab/) | **5.5/10** · 创新 1.1/2 · 技术严谨 0.8/1.5 · 实验充分 1.0/1.5 · 清晰度 0.6/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 方法研究 | #符号音乐生成 |
| 23 | [从执行到不可实现：计算机音乐中声音存在的另一种根据](/posts/conference-icmc-2026-conference-paper-id-paper-199-b83c203711/) | [Beyond Execution: Unrealizability and the Ontology of Sound in Computer Music](/posts/conference-icmc-2026-conference-paper-id-paper-199-b83c203711/) | **5.4/10** · 创新 1.2/2 · 技术严谨 0.6/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 1.5/1.5 · 可复现 0.3/0.5 · 工程/实践 0.0/1.5 | 后50% | 理论研究 | #音乐理解 |
| 24 | [不做成像也能摸：木薯生物塑料薄壳如何变成可分类的触摸声场](/posts/conference-icmc-2026-conference-paper-id-paper-243-c506c06d1d/) | [De/Re:Generation: Exploring DIY Cassava\-Starch Bioplastic Interfaces with EFT\-Based Touch Sensing in an Interactive Sound Installation](/posts/conference-icmc-2026-conference-paper-id-paper-243-c506c06d1d/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 应用研究 | #音频交互 |
| 25 | [稀疏也稳、稠密也准：用距离加权的 KNN 与 MLP 校准机器人乐器](/posts/conference-icmc-2026-conference-paper-id-paper-265-febebaba48/) | [AI Framework for Dynamic Robotic Instrument Calibration](/posts/conference-icmc-2026-conference-paper-id-paper-265-febebaba48/) | **5.4/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 应用研究 | #音频质量评估 |
| 26 | [把作曲拆成共享状态上的分工：BbMuse 的黑板式实时交互框架](/posts/conference-icmc-2026-conference-paper-id-paper-607-d1d15b2044/) | [BbMuse: A Blackboard\-Driven Framework for Real\-Time Interactive Music](/posts/conference-icmc-2026-conference-paper-id-paper-607-d1d15b2044/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音乐生成 |
| 27 | [计算机辅助作曲为何困在纸面记谱里：从音高节奏形式化到多模态工作流的回望](/posts/conference-icmc-2026-conference-paper-id-paper-667-b8ab6eebd9/) | [Computer\-Aided Composition: A Retrospective and Prospective Outlook](/posts/conference-icmc-2026-conference-paper-id-paper-667-b8ab6eebd9/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.9/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.6/1.5 | 后50% | 综述 | #符号音乐生成 |
| 28 | [同一份自然声景为何实验室听得准、博物馆听得散：房间与阵列如何重塑沉浸](/posts/conference-icmc-2026-conference-paper-id-paper-238-1fd2696965/) | [Listening Across Spaces: Perceptual Evaluation of an Ambisonics\-Based Sound Installation](/posts/conference-icmc-2026-conference-paper-id-paper-238-1fd2696965/) | **5.3/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 应用研究 | #音频质量评估 |
| 29 | [同一首交响乐为何听感不同：指挥与乐团谁在主导相似性](/posts/conference-icmc-2026-conference-paper-id-paper-382-8d967fcc39/) | [Factor Analysis of Similarity in the Same Orchestral Piece](/posts/conference-icmc-2026-conference-paper-id-paper-382-8d967fcc39/) | **5.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 后50% | 应用研究 | #音乐推荐 |
| 30 | [不用连线也能发声：把 Pure Data 的波形逻辑搬进 C\+\+ 类](/posts/conference-icmc-2026-conference-paper-id-paper-437-d8a9903101/) | [Pd\+\+: A C\+\+ Library of Pure Data’s DSP Objects](/posts/conference-icmc-2026-conference-paper-id-paper-437-d8a9903101/) | **5.3/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音频生成 |
| 31 | [在数万个无序采样里作曲：用可堆叠查询把声音群体管起来](/posts/conference-icmc-2026-conference-paper-id-paper-538-1cef30d9a1/) | [Data\-driven algorithmic composition with large sample libraries: a modular system for the dynamic formation and control of spatialised sound groups](/posts/conference-icmc-2026-conference-paper-id-paper-538-1cef30d9a1/) | **5.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音乐生成 |
| 32 | [不指挥声音而照料生态：Spores 把黏菌求生逻辑做成可演奏的界面](/posts/conference-icmc-2026-conference-paper-id-paper-577-752a31f0f7/) | [Spores: A Physarum\-Inspired Instrument for Agent\-Based Ecological Interaction](/posts/conference-icmc-2026-conference-paper-id-paper-577-752a31f0f7/) | **5.3/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #音乐生成 |
| 33 | [把声音铺在身体周围：以可导航的语料库建造超环境](/posts/conference-icmc-2026-conference-paper-id-paper-647-cf1704251b/) | [DANCING CABIRIA: AN HYPER\-ENVIRONMENT STUDY THROUGH CORPUS\-BASED TECHNIQUES](/posts/conference-icmc-2026-conference-paper-id-paper-647-cf1704251b/) | **5.3/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 应用研究 | #音频交互 |
| 34 | [用文件名管住调性与速度：MBHD 的四轨循环表演系统](/posts/conference-icmc-2026-conference-paper-id-paper-15-eb82584f19/) | [MBHD: A Modular Audio Playback and Manipulation System for Loop\-Based Performance](/posts/conference-icmc-2026-conference-paper-id-paper-15-eb82584f19/) | **5.2/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 35 | [没有统一风格本身就是线索：以钢琴为绳串起日本电子音乐的媒介系谱](/posts/conference-icmc-2026-conference-paper-id-paper-39-7008bbfba4/) | [The History of Japanese Electroacoustic Music for Piano from the Perspective of Media Genealogy](/posts/conference-icmc-2026-conference-paper-id-paper-39-7008bbfba4/) | **5.2/10** · 创新 1.4/2 · 技术严谨 0.9/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 综述 | #音乐理解 |
| 36 | [不只掷硬币：把占问、解卦与音乐生成连成参与式仪式的易经系统](/posts/conference-icmc-2026-conference-paper-id-paper-450-610f862f36/) | [Music of Changing Lines: Toward a Culturally Situated Approach to the I\-Ching](/posts/conference-icmc-2026-conference-paper-id-paper-450-610f862f36/) | **5.2/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音乐生成 |
| 37 | [二十只音箱包住一个甜点：在教室里装下三阶全球声场](/posts/conference-icmc-2026-conference-paper-id-paper-517-abb2982050/) | [Studio Report: A Third\-Order Periphonic Ambisonics System for Teaching and Research at FEUP and INESC TEC’s SMC Lab](/posts/conference-icmc-2026-conference-paper-id-paper-517-abb2982050/) | **5.2/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #空间音频渲染 |
| 38 | [不学大语料也能变奏：把动机当轨迹、用可控噪声做表情完备的变体](/posts/conference-icmc-2026-conference-paper-id-paper-574-4bca67665c/) | [Composer\-in\-the\-Loop Generation of Motivic Variants Using State\-Space Models and Preference Learning](/posts/conference-icmc-2026-conference-paper-id-paper-574-4bca67665c/) | **5.2/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #符号音乐生成 |
| 39 | [不控参数而控过程：Hyponoia 把脑电状态变成作曲行为](/posts/conference-icmc-2026-conference-paper-id-paper-482-2cb5a62137/) | [Hyponoia: An Affective Computing System for Augmented Musical Performance – A Case Study](/posts/conference-icmc-2026-conference-paper-id-paper-482-2cb5a62137/) | **5.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.6/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音乐生成 |
| 40 | [古典符号混搭为何先对终止式再数对位错误](/posts/conference-icmc-2026-conference-paper-id-paper-546-a9f37058ee/) | [Classical Music Mashup System and Compatibility Heuristics](/posts/conference-icmc-2026-conference-paper-id-paper-546-a9f37058ee/) | **5.1/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #符号音乐生成 |
| 41 | [植物不发声却写谱：生物电与环境数据如何变成可演奏的总谱](/posts/conference-icmc-2026-conference-paper-id-paper-603-c86e15ff86/) | [Co\-Composing with Plants: Early Experiments in Bio\-Responsive Score Design](/posts/conference-icmc-2026-conference-paper-id-paper-603-c86e15ff86/) | **5.1/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #符号音乐生成 |
| 42 | [卡曼恰琴体为何上半球一变就变声：厚度与音孔的振动证据](/posts/conference-icmc-2026-conference-paper-id-paper-211-88f90afd94/) | [Vibrational Analysis of Traditional Persian Kamanche Sound Box: Experimental and Computational Investigation of Structural Modifications](/posts/conference-icmc-2026-conference-paper-id-paper-211-88f90afd94/) | **5.0/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.7/1.5 · 清晰度 0.6/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 后50% | 应用研究 | #音乐理解 |
| 43 | [不戴耳机看 VR 音乐会：MetaConcert 如何把头显画面与穹顶声场锁在一起](/posts/conference-icmc-2026-conference-paper-id-paper-404-f18229a397/) | [MetaConcert: A Shared VR Audio\-Visual Experience Model Reducing User Isolation Through Synchronized](/posts/conference-icmc-2026-conference-paper-id-paper-404-f18229a397/) | **5.0/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #空间音频渲染 |
| 44 | [造循环器学信号处理：把录音、叠加与消咔哒声做成可跟做的课程](/posts/conference-icmc-2026-conference-paper-id-paper-99-c90b29a5ec/) | [Building Loopers](/posts/conference-icmc-2026-conference-paper-id-paper-99-c90b29a5ec/) | **5.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 应用研究 | #音乐生成 |
| 45 | [不改速度也能听出投入度：用相位性皮电把听众变成节奏控制器](/posts/conference-icmc-2026-conference-paper-id-paper-432-01a9243f72/) | [The Singing Skin: An Audience\-Centered Biofeedback System for Musical Interaction Based on Galvanic Skin Response](/posts/conference-icmc-2026-conference-paper-id-paper-432-01a9243f72/) | **4.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.2/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #音乐生成 |
| 46 | [用沙子的形状直接捏声音：连续变形材料如何绕开离散手势识别](/posts/conference-icmc-2026-conference-paper-id-paper-463-1f326f21d2/) | [Acoustic Interactive Sand Tray Therapy System: An Embodied Interface for Multisensory Sound Interaction](/posts/conference-icmc-2026-conference-paper-id-paper-463-1f326f21d2/) | **4.9/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音频交互 |
| 47 | [把建成的馆再唱出来：以直纹面几何逆转从滑音到建筑的单向路径](/posts/conference-icmc-2026-conference-paper-id-paper-410-25266a1da7/) | [Extending Xenakis: From Architectural Geometry to Sonification of the Philips Pavilion](/posts/conference-icmc-2026-conference-paper-id-paper-410-25266a1da7/) | **4.7/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #符号音乐生成 |
| 48 | [在非八度律制里作曲：把微分音高、卡农与实时跟谱装进同一个工作台](/posts/conference-icmc-2026-conference-paper-id-paper-165-c65e912e98/) | [Linear A: A Composer’s Integrated Workspace](/posts/conference-icmc-2026-conference-paper-id-paper-165-c65e912e98/) | **4.6/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #符号音乐生成 |
| 49 | [把语义压缩成卦：用可枚举状态代替声音生成的作曲决策](/posts/conference-icmc-2026-conference-paper-id-paper-723-caff8a5e3f/) | [Hexagram\-Based Semantic Composition: Discretizing Embedding Spaces into Symbolic Compositional States for Improvised Performance](/posts/conference-icmc-2026-conference-paper-id-paper-723-caff8a5e3f/) | **4.6/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.7/1.5 | 后50% | 方法研究 | #符号音乐生成 |
| 50 | [不做提示词混音：在神经音频编解码器的潜空间里直接捏合声音对象](/posts/conference-icmc-2026-conference-paper-id-paper-747-b4e9573781/) | [Beyond Musique Concr\`ete: Perceptual Morphing via Audio Latent Embeddings Manipulation](/posts/conference-icmc-2026-conference-paper-id-paper-747-b4e9573781/) | **4.6/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 方法研究 | #音乐生成 |
| 51 | [静止并不平静：CALM 把身体不稳定翻译成作曲结构](/posts/conference-icmc-2026-conference-paper-id-paper-448-f1121241cb/) | [CALM: Translating Somatic Experience into Compositional Structure as a Trauma\-Informed Methodology](/posts/conference-icmc-2026-conference-paper-id-paper-448-f1121241cb/) | **4.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #音频交互 |
| 52 | [把五间录音棚、一张光纤网和一间能改装的演出厅连成实验室：洗足学园的音乐与技术整合报告](/posts/conference-icmc-2026-conference-paper-id-paper-704-209c1886f0/) | [Studio Report: Laboratory of Advanced Music Production, Senzoku Gakuen College of Music](/posts/conference-icmc-2026-conference-paper-id-paper-704-209c1886f0/) | **4.5/10** · 创新 0.5/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #空间音频渲染 |
| 53 | [以漫游为方法：古琴即兴、混沌空间与图形谱如何并行转化](/posts/conference-icmc-2026-conference-paper-id-paper-217-22b03c0c82/) | [Recursive Radiance: Multimedia Interpretations of Traditional Chinese Aesthetics](/posts/conference-icmc-2026-conference-paper-id-paper-217-22b03c0c82/) | **4.4/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #音视频生成 |
| 54 | [在机房里吹哨：把生成式 AI 的噪音与污染摆到台前的声音宣言](/posts/conference-icmc-2026-conference-paper-id-paper-343-2d286fe7f8/) | [oljud–nq&\#40;n&\#41;: A Sonic Manifesto of Resistance to Generative AI in Music](/posts/conference-icmc-2026-conference-paper-id-paper-343-2d286fe7f8/) | **4.4/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.3/1.5 | 后50% | 应用研究 | #音乐生成 |
| 55 | [年轮作穹顶：把生态录音与语言痕迹做成同心的时间尺度](/posts/conference-icmc-2026-conference-paper-id-paper-467-27ae9499d4/) | [Tree Rings: Ecological Memory and Linguistic Traces in an Immersive Dome Composition](/posts/conference-icmc-2026-conference-paper-id-paper-467-27ae9499d4/) | **4.4/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 应用研究 | #音视频生成 |
| 56 | [把运球变成叙事：篮球身体动作如何被转写为六段式电声音乐](/posts/conference-icmc-2026-conference-paper-id-paper-454-4b2078d4ae/) | [Reimagining Athletic Gesture: Transforming Basketball Sound into Narrative Electroacoustic Music](/posts/conference-icmc-2026-conference-paper-id-paper-454-4b2078d4ae/) | **4.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #音乐生成 |
| 57 | [把仪式刺绣与磁芯编织缝进同一块布：贴身读取的乐谱装置](/posts/conference-icmc-2026-conference-paper-id-paper-676-c029d95617/) | [Magnetic Memory Rushnyk](/posts/conference-icmc-2026-conference-paper-id-paper-676-c029d95617/) | **4.2/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.3/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #音频交互 |
| 58 | [空间聆听作为方法：从听觉定位到生态与参与式声音实践](/posts/conference-icmc-2026-conference-paper-id-paper-153-cc69883926/) | [Sonic Urgency: Exploring Perceptual, Sociopolitical, and Participatory Dimensions of Spatial Listening](/posts/conference-icmc-2026-conference-paper-id-paper-153-cc69883926/) | **4.1/10** · 创新 1.0/2 · 技术严谨 0.6/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.3/1.5 | 后50% | 综述 | #音乐理解 |
| 59 | [存档不是存文件：用对象/事件翻译把作曲过程留下来并放大参与](/posts/conference-icmc-2026-conference-paper-id-paper-438-c5baeeeeda/) | [Amplifying Participation\. The digital Barlow Archive &\#40;dBA&\#41; as an Approach to the Recording of a Digital Computer Music Legacy](/posts/conference-icmc-2026-conference-paper-id-paper-438-c5baeeeeda/) | **3.8/10** · 创新 0.8/2 · 技术严谨 0.9/1.5 · 实验充分 0.2/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #音乐检索 |
| 60 | [作曲家主导与实时约束之间：中心 2025\-2026 四个系统的分工与可复述流程](/posts/conference-icmc-2026-conference-paper-id-paper-373-b94682bedf/) | [Studio Report: Center for Computer Music 2025–2026](/posts/conference-icmc-2026-conference-paper-id-paper-373-b94682bedf/) | **3.1/10** · 创新 0.6/2 · 技术严谨 0.5/1.5 · 实验充分 0.3/1.5 · 清晰度 0.6/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 系统技术报告 | #节拍跟踪 |

---

## 📋 论文列表

### 1. [留不住的不只是磁带机：用监督标注把哈维的延迟语法写回来](/posts/conference-icmc-2026-conference-paper-id-paper-118-90889508d1/)

> 英文题目：*[Supervised Memory: How Machines Can Preserve What We Cannot Hold](/posts/conference-icmc-2026-conference-paper-id-paper-118-90889508d1/)*

标签：#数据标注 #音乐信息检索 #音乐 #音乐理解

评分：**7.6/10** | 创新 1.5/2 | 技术严谨 0.9/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前25% | 文档类型：理论研究 | 主任务：#音乐理解 | 主方法：#数据标注

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Giovanni Roma：机构信息未能从会议 PDF 纯文本可靠映射
- Alba Francesca Battista：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文针对电声音乐因技术过时与表演知识随实践者离场而无法传续的难题，输入为异构乐谱符号与残缺电子系统文档，输出为可在未来技术上重新实现作品的可执行诠释与推理轨迹，其难点在于符号体系混杂且隐含操作逻辑未被显式记录。方法链第一步以哈维《Ricercare una melodia》一九八四年小号版五声部总谱与二〇〇三年中提琴版的对照重建为起点，通过复现磁带延迟架构与声场路由恢复隐含操作逻辑，其输出的约束关系进入下一步的词表划分。第二步区分通用核心词表与作曲家特定词表，将跨作品共享的句法与哈维特有的无符干时值括号及空间路由图示分离，使前者可迁移而后者保留作品特异性，划分结果直接作为多层标注的标签体系。第三步经由人机协同到人工监督的渐进标注流程，在通用标注平台上积累句法语义操作与结构边界等多层标注并保留分歧，形成可追溯推理轨迹的监督记忆。与无监督模式挖掘的关键机制差异在于理解被定义为作品特定的约束网络而非跨作品统计规律，因此必须依赖监督显式教授每部作品的语法，这使机器从被动存档转为主动诠释并维持可执行性。在1984年小号版与2003年中提琴版对照的重建任务下，1984年总谱的记谱声部数量指标为5，高于2003年版本的记谱声部数量指标1。该结论适用边界限于已完成重建的哈维个案，对斯托克豪森独奏的时间多义性与布莱兹第二圣歌的参数化空间尚未验证，且原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 2. [把乐器搭建和底层数字信号处理放进同一种语言：MMMAudio 的选择与代价](/posts/conference-icmc-2026-conference-paper-id-paper-25-e1bcf7651f/)

> 英文题目：*[The MMMAudio Computer Music Environment](/posts/conference-icmc-2026-conference-paper-id-paper-25-e1bcf7651f/)*

标签：#开源工具 #信号处理 #音乐 #音乐生成

评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Sam Pluta：机构信息未能从会议 PDF 纯文本可靠映射
- Ted Moore：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作针对计算机音乐环境中乐器搭建与底层数字信号处理长期割裂的问题，输入为Python侧控制事件、参数与音频文件，输出为Mojo侧逐采样合成的实时音频流与回传Python的分析数组，难点在于兼顾Python生态易用性与单采样反馈精度及高维可控合成。先由Python生态层接收MIDI、OSC、图形界面与PyTorch等包的消息并解析为键值控制消息，再将该控制消息送入Mojo音频引擎作为单元发生器参数与调度输入，实现控制到音频的跨语言衔接。接着Mojo层以带next函数的结构体单元发生器逐采样处理音频流并支持组合嵌套与单指令多数据并行，其输出的采样流直接进入快速傅里叶变换与缓冲处理作为分帧输入。最后变换与分析模块对窗口内采样做快速傅里叶变换、加窗与描述符提取并以float64的Numpy数组回传Python，供建模绘图，保证实时与非实时共用同一套Mojo代码。与Max与SuperCollider将控制图与预编译单元发生器分离且定制须转向C与C\+\+工具链不同，该系统统一用类Python语法的Mojo书写乐器与插件，免除外部构建并允许反馈环内任意嵌套。原文未提供可核对的关键定量结果。该结论适用边界受限于早期原型与特定硬件的非严格对照，尚未验证低延迟稳定性与大规模复调下的抖动行为。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/spluta/MMMAudio> → <https://github.com/mmmaudio/mmmaudio> — 链接可访问（HTTP 200）
- 数据相关资源：<https://doi.org/10.5281/zenodo.6834643> → <https://zenodo.org/records/6834643> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.modular.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.modular.com/max> → <https://max.modular.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://docs.modular.com/mojo/manual/python/> → <https://mojolang.org/docs/manual/python> — 暂时无法访问
- 第三方资源：<https://doc.sccode.org/Guides/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.tensorflow.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://aimc2021.iem.at/papers/> — 链接可访问（HTTP 200）
- 第三方资源：<https://api.semanticscholar.org/CorpusID:30952359> → <https://www.semanticscholar.org/paper/dcafa7517e4cd352c172ab7475243be9ae340c33> — 链接可访问（HTTP 202）
- 第三方资源：<https://api.semanticscholar.org/CorpusID:5976007> → <https://www.semanticscholar.org/paper/5f4c5a25c4547f12752e45ec1c692ff740834606> — 链接可访问（HTTP 202）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 3. [同一内存里的作曲与发声：Clamps 如何把 DSP 与元层缝在一起](/posts/conference-icmc-2026-conference-paper-id-paper-626-0e41d50f0f/)

> 英文题目：*[DSP and the Metalevel: Clamps \- an integrated environment for algorithmic composition and interactive realtime performance](/posts/conference-icmc-2026-conference-paper-id-paper-626-0e41d50f0f/)*

标签：#软件工具 #信号处理 #实时处理 #音乐 #音乐生成

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Orm Finnendahl：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理算法作曲与交互式实时演出的统一问题，输入为符号作曲过程、图形事件与实时控制信号，输出为即时声音合成、符号记谱与可编辑乐谱表示，难点在于高层时间组织与底层采样级处理的语言分裂、编译重启与同步开销。方法第一步以Incudine在同一Lisp映像内以宏定义单元生成器、以函数定义合成器并即时编译运行，生成的音频图与调度器直接作为统一调度基础进入下一步。第二步以扩展后Common Music事件类统一MIDI、SFZ与颗粒事件的实时播放与可缩放矢量图形SVG导出，生成的SVG事件层坐标与透明度映射为音高时值与幅度并进入下一步。第三步以CLOG浏览器界面与Inkscape外部编辑器实现跨设备同步显示与往返编辑，使图形编辑结果回流为可播放与可记谱事件。在预设回放任务条件下，尾段间隔指标为1秒，高于首段间隔指标0\.03秒。相对SuperCollider与Max等系统，其关键机制差异在于取消预编译插件与音频服务器分离，全部调度与合成均为宏与函数并共享内存，从而支持运行中改码即时听觉反馈，实际意义在于同一语言内贯通作曲记谱与演出。该结论适用边界仅限于作者演示的电声与器乐混合场景，尚未验证大规模复调稳定性与跨平台延迟边界，原文未披露训练、推理或部署成本，本工作不涉及神经网络训练。

🔗 **开源资源**

- 代码相关资源：<https://codeberg.org/ormf/clamps> — 链接可访问（HTTP 200）
- 第三方资源：<https://incudine.sourceforge.net/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/rabbibotton/clog> — 链接可访问（HTTP 200）
- 第三方资源：<https://commonmusic.sourceforge.net/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 4. [对不准音高时如何跟谱：用演奏法识别补齐对齐式跟谱](/posts/conference-icmc-2026-conference-paper-id-paper-142-60b4651054/)

> 英文题目：*[Automatic Hybrid Following in Real\-Time Mixed Music A Case Study with Antescofo and ipt for Flute Playing Techniques](/posts/conference-icmc-2026-conference-paper-id-paper-142-60b4651054/)*

标签：#CNN #实时处理 #音乐 #音频分类 #音频事件检测

评分：**6.9/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频事件检测 | 主方法：#CNN

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Nicolas Brochec：机构信息未能从会议 PDF 纯文本可靠映射
- Jean\-Louis Giavitto：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

混合音乐需同步现场长笛与按绝对时间运行的电子声部，输入为连续音频流与增强乐谱，输出为事件触发时刻与速度估计，难点在于气音类与多音类等扩展技法缺乏稳定音高且常含开放段落。系统先由对数梅尔谱模块将原始音频转换为多尺度堆叠时频特征，负责提供对噪声与弱基频鲁棒的信号表示，该特征再进入4层卷积编码器压缩为判别性嵌入。嵌入经3层全连接分类器输出11类长笛演奏技法索引，该索引经setvar消息写入全局变量并由whenever条件语句推进抽象事件，从而衔接识别与记谱导航。与纯音高对齐相比，该机制在技法主导段落暂停跟随以避免误跳、对齐失效时改用技法识别驱动前进，保留了以事件组织电子过程的写法并以确定性换取额外延迟。在包含9个事件的复杂短谱300 ms容差评测条件下，混合系统的误对齐率指标为3\.70%，低于单独Antescofo的误对齐率指标11\.11%。结论的适用边界仅限于短片段与受控技法链，对漏检恢复、长结构与即兴开放形式的推广尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://doi.org/10.5281/zenodo.14712391> → <https://zenodo.org/records/14712391> — 链接可访问（HTTP 200）
- 数据相关资源：<https://doi.org/10.5281/zenodo.5744336> → <https://zenodo.org/records/5744336> — 链接可访问（HTTP 200）
- 第三方资源：<https://antescofo-doc.ircam.fr/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 5. [多人同演不混乱：Gestalt 用分层与加权聚合保住表演者结构](/posts/conference-icmc-2026-conference-paper-id-paper-504-838b3f604e/)

> 英文题目：*[Gestalt: A Symbiotic Framework for Real\-Time Collaboration between Performers and Mass Audiences](/posts/conference-icmc-2026-conference-paper-id-paper-504-838b3f604e/)*

标签：#开源工具 #信号处理 #实时处理 #音视频 #音视频交互

评分：**6.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音视频交互 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Sitong Wu：机构信息未能从会议 PDF 纯文本可靠映射
- Jinshuo Feng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Gestalt面向网络化音乐表演中大众参与门槛高、并发交互延迟大与观众缺乏独立声部的问题，以表演者肢体视频与50至200部手机多点触屏手势为输入，以双路音频合成控制与一对一粒子视觉为输出，难点在于数百路异步微手势聚合与视听一致性难以兼顾。先在边缘交互层处理原始输入，表演者客户端经MediaPipe姿态与手部追踪提取归一化参数并直发，观众手机侧经手势识别与映射输出轻量控制值，其输出均以WebSocket消息进入中间件从而卸载服务端计算。再由中间件做异构路由与聚合，表演者数据直接转发以保留结构主导，观众数据经50ms周期多因子活跃度加权平均与独占式单次触发处理，其聚合结果与直发结果分别进入7400与7402独立端口合成器汇合为可控混音。最后经音视分流完成反馈，服务端透传每用户位置、方向、速度与强度并广播audience\_details，其输出进入监控面板渲染为一对一粒子，使连续调制与离散触发在听觉聚合的同时保持视觉可辨识因果链。与把观众仅作调制量的传统协助式架构不同，该双层异构与音视分流设计赋予观众独立合成器声部，兼顾了表演者主导曲式与群体公平参与。在本地单机与公网隧道两种部署场景下，本地模式80并发的吞吐指标为3,625 msg/s，高于公网隧道模式的吞吐指标3,009 msg/s。该结论的适用边界受限于受控WiFi实验室压力测试与5至10人小规模试用，80人以上公网隧道出现部分连接失败，大规模公演效果尚未验证。部署成本方面原文披露硬件为Intel\-based MacBook Pro单机，服务端聚合固定50ms，本地端到端延迟约60ms而公网为100–260ms，峰值吞吐达7,540 msg/s。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Purest-11/Gestalt> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 6. [各声部各走各的拍子又能对齐：OrbitScore 如何把多层时间结构写成可演的代码](/posts/conference-icmc-2026-conference-paper-id-paper-721-733f5dc99f/)

> 英文题目：*[OrbitScore: A Domain\-Specific Language for Polymetric Live Coding Based on Multilayered Temporal Structures](/posts/conference-icmc-2026-conference-paper-id-paper-721-733f5dc99f/)*

标签：#软件工具 #信号处理 #实时处理 #音乐 #音乐生成

评分：**6.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Hiroshi Yamato：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

OrbitScore面向现场编程中的多节拍表达，输入为文本代码与全局速度、输出为经SuperCollider合成的多层音频，难点是各序列保持独立节拍又在可计算边界周期性对齐，而传统工作站与统一时钟语言难以原生表达该结构。方法链分三步：解析器先将beat&\#40;n by m&\#41;与play嵌套语法转为抽象语法树，解释器承接该树维护序列状态并在参数变化时触发重算。计时引擎按节拍参数生成带起始时间的单小节TimedEvent计划，经开放声音控制协议预发送给音频引擎驱动SuperCollider播放，VS Code插件提供高亮与即时执行以闭环修改。与TidalCycles共用脉冲的拼贴不同，该系统让每层以独立有效速度运行并在最小公倍数边界自然重合，保留可变节拍记谱的独立性。在BaseBPM为120 BPM的设置下，4:&\#40;3/4&\#41;层的速度指标为160 BPM，高于4:&\#40;4/4&\#41;层的速度指标120 BPM。结论适用边界受限于macOS单机采样回放验证，合奏跟随与长期漂移等外推尚未验证。在48kHz与256采样缓冲硬件条件下音频延迟约为5ms，该延迟即主要部署代价。

🔗 **开源资源**

- 代码相关资源：<https://github.com/signalcompose/orbitscore> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 7. [会自己演奏的图画：把时间、导航和手势写进同一张 SVG 里](/posts/conference-icmc-2026-conference-paper-id-paper-436-2c5cc5ac76/)

> 英文题目：*[Scores That Run: Graphic Notation with Embedded Performance Semantics](/posts/conference-icmc-2026-conference-paper-id-paper-436-2c5cc5ac76/)*

标签：#信号处理 #实时处理 #音乐 #音频交互

评分：**6.7/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Rob Canning：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为在Inkscape中绘制的标准SVG图形乐谱，输出为浏览器中同步展开的视觉动画、演奏指示与电子控制流，难点在于图形绘制与演出时间逻辑长期分离，需额外排练解释与外部同步系统才能变为可演出的时间结构。方法链分三步：先在元素标识符中写入轻量提示微语法声明行为，使乐谱成为可读可编辑的图形语义文档，再在浏览器加载时解析提示构建滚动或分页导航结构，形成可进入与停留的节点形态。接着由运行时引擎按轨迹求值运动场并生成OSC与MIDI消息，驱动视觉手势与外部声音引擎，输出的共享时间状态进入协同进程维持多设备同步而将渲染保留本地。与MaxScore依赖补丁逻辑将行为置于谱外不同，该工作把导航、节拍器、媒体触发与手势场同置于同一视觉表面，使谱面即执行环境，显著降低作曲到演出的中介成本。与IanniX以图形层作为电子系统控制器不同，该系统同时面向乐手视读与机器控制，运动可读亦可传输，统一了声学塑形与电子处理的姿态语法。在随机音高生成条件下，irand上限条件的随机整数指标为11，高于irand下限条件的随机整数指标0。该结论适用边界受限于中小规模乐团的浏览器演出场景，在大厅级时钟精度、故障恢复与复杂交互下的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://oscilla.cc/> — 链接可访问（HTTP 200）
- 复现相关资源：<https://oscilla.cc/> — 链接可访问（HTTP 200）
- 第三方资源：<https://neoscore.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 8. [没有总谱时如何度量对话：Paredes 人声—吉他合作的共性与偏离分析](/posts/conference-icmc-2026-conference-paper-id-paper-609-64a665d01a/)

> 英文题目：*[Perpetual Dialogues: A Computational Analysis of Voice–Guitar Interaction in Carlos Paredes’s Discography](/posts/conference-icmc-2026-conference-paper-id-paper-609-64a665d01a/)*

标签：#统计分析 #音乐 #音乐源分离 #音乐理解

评分：**6.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐理解 | 主方法：#统计分析

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Gilberto Bernardes：机构信息未能从会议 PDF 纯文本可靠映射
- N´adia Moura：机构信息未能从会议 PDF 纯文本可靠映射
- Ant´onio S´a Pinto：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为Carlos Paredes与四位歌手的8首合作录音及拍点与曲式等专家标注，输出为声乐与吉他层在旋律和声节奏上的互动模式，难点在于无乐谱蓝图且复音混音遮蔽层间关系，作曲与表演维度不可分。方法链分四步：先用Ht\-Demucs分离人声与吉他并对吉他做谐波敲击分离，其输出进入拍点级描述子提取；再提取响度、节奏密度、旋律轮廓及物理建模色谱衍生的音调张量，得到拍点分辨率时间序列。接着用经验模态分解保留慢变分量并以Fisher z平均聚合相关，前步重构信号直接进入Pearson相关计算；最后对保留关系做稳健线性回归并以中位绝对偏差标准化残差检测多样性事件。与侧重乐谱偏差的传统表演分析不同，该框架把共性建模为多尺度线性相关，把多样性建模为残差离群，从而同时捕捉惯习与结构重组。在Balada do Mar单曲分析任务下，音调不协和度与吉他节奏密度的Pearson相关为\.81，高于吉他响度与人声节奏密度的Pearson相关−\.71。跨合作聚合后全局矩阵无强相关，支撑表达组织以单曲为中心的结论。该结论适用边界限于分离质量可靠且具拍点结构标注的双层口传曲目，致密织体与自动结构切分等外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 9. [把自行车变成可移动合奏：BIKES 如何用联网与制作串起教学](/posts/conference-icmc-2026-conference-paper-id-paper-136-cda1cf9b69/)

> 英文题目：*[BIKES: A Mobile Networked Music Instrument in Interdisciplinary Research and Education](/posts/conference-icmc-2026-conference-paper-id-paper-136-cda1cf9b69/)*

标签：#教育 #信号处理 #音乐 #空间音频信号 #音频交互

评分：**6.6/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Laura Call Gomez：机构信息未能从会议 PDF 纯文本可靠映射
- Gabriel Decker：机构信息未能从会议 PDF 纯文本可靠映射
- Jayson Faupel：机构信息未能从会议 PDF 纯文本可靠映射
- Aditya Rajesh Pawar：机构信息未能从会议 PDF 纯文本可靠映射
- Jacob Westerstahl：机构信息未能从会议 PDF 纯文本可靠映射
- Henrik von Coler：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作要解决把声音艺术带出音乐厅、在城市公共空间实现可移动可参与表演的问题，输入是骑行位置与移动轨迹、触屏触发操作与城市声环境，输出是由多辆电动货运自行车组成的移动式空间声场与公众可参与的骑行展演，难点在于户外移动中的组网鲁棒性、分布式音频同步与非专业观众可理解的交互方式。方法链分三步：先以每辆货运自行车搭载树莓派与触屏、电池供电音箱并运行SuperCollider后端，负责本地音频渲染与触控界面输出单车声音与控制状态；再以开放声音控制协议与p2psc订阅分发加UniFi网状组网承接各单车状态，将分散控制消息交换为合奏级同步与全场触发；最后以音景作曲与定制机壳设计承接技术合奏状态，将其封装为可骑行、可展览、可被公众直接操作的乐器形态。相对前作SPRAWL的有线集中式音频路由，该系统改用无线控制数据交换加分布式本地渲染，实际意义是消除线缆束缚并减少单点故障以支持行进中的空间化表演。在亚特兰大内城骑行评测场景下，移动合奏部署的参试车辆数指标为4辆，高于本科研讨会静态展示条件的参试车辆数指标1辆。该结论的适用边界受限于小规模演示性部署与教学展演，尚未验证大规模节点数量、强电磁干扰与长期户外运行下的同步稳定性与耐久性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/l42i/p2psc> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 10. [几乎但又不是：在文本到音频的潜空间里听见未成形的音乐](/posts/conference-icmc-2026-conference-paper-id-paper-580-7a99b3d9cf/)

> 英文题目：*[Latent Music: Emergent Sonic Forms and Sonic Liminality in Text\-to\-Audio Systems](/posts/conference-icmc-2026-conference-paper-id-paper-580-7a99b3d9cf/)*

标签：#文献综述方法 #听觉与音乐认知 #音乐信息检索 #音乐生成

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：前50% | 文档类型：理论研究 | 主任务：#音乐生成 | 主方法：#文献综述方法

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Guilherme Coelho：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文针对文本到音频系统中语言提示激活高维潜流形所生成偶然且不可重复的声音物身份阈限、持续漂移而难以用复刻引用描述的问题，难点在于输出徘徊于流派音色乐器编码之间并在延续混音重组中不断滑移。将潜伏的哲学虚拟场与计算潜空间双重含义融合，先把潜空间界定为亚稳态前个体储层，说明每次生成都是不可精确重复的单次遍历，其携带生成条件的痕迹进入下一步。接着把提示解析为由关系符号单元构成的提示装配体，阐明词向量间差分关系如何经由跨符号翻译调节生成轨迹并激活流形不稳定区，其单次物化结果进入制图分析。然后以频谱痕、再领土化、梯度身份与无指意断裂为制图工具，对发散矛盾提示下的策展案例做符号制图，揭示残留共存互渗与范畴牵引失效。相对强调直接引用并置的拼贴挪用，该机制强调训练语料溶解为概率分布与向量关系后的统计抽象与涌现重组，其意义在于把聆听导向涌现、符号漂移与尚未形成之张力。在Udio与Suno对比的策展评测设置下，Udio的指标描述高于Suno的指标描述，但原文第122页至第129页未给出可核对的指标数值，原文未提供可核对的关键定量结果。该结论适用边界受限于Udio发散提示策展案例，跨模型跨版本与受控听测外推尚未验证，且原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://www.udio.com/home> — 链接可访问（HTTP 200）
- 复现相关资源：<https://drive.google.com/drive/folders/1eEur_uVxNfuBnw57pcYg> — 暂时无法访问
- 复现相关资源：<https://drive.google.com/file/d/1x9Jy65MFM_IratlHYtZ7bx0z_ydr> — 暂时无法访问
- 复现相关资源：<https://drive.google.com/drive/folders/1uncbX919H1kDoq3vuvsW> — 暂时无法访问
- 复现相关资源：<https://drive.google.com/drive/folders/1jtoBMaX0aLia4oyEHbCO8> — 暂时无法访问
- 复现相关资源：<https://zenodo.org/records/16946623> — 链接可访问（HTTP 200）
- 复现相关资源：<https://doi.org/10.5281/zenodo.16946623> → <https://zenodo.org/records/16946623> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 11. [对齐很粗时更要扣准起音：把 Snapping 做成按音高的全局分配](/posts/conference-icmc-2026-conference-paper-id-paper-195-420d0bfcbb/)

> 英文题目：*[Snapping Matters: Context\-Aware Onset Refinement for Automatic Music Transcription](/posts/conference-icmc-2026-conference-paper-id-paper-195-420d0bfcbb/)*

标签：#数据清洗 #评测协议 #音乐 #音乐转录

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐转录 | 主方法：#数据清洗

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Abhirup Saha：机构信息未能从会议 PDF 纯文本可靠映射
- Hans\-Ulrich Berendes：机构信息未能从会议 PDF 纯文本可靠映射
- Meinard M¨uller：机构信息未能从会议 PDF 纯文本可靠映射
- Ben Maman：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

自动音乐转录（Automatic Music Transcription，AMT）的输入是真实演奏录音，输出是与音高相关的音符起始时间钢琴卷帘，难点在于非钢琴与混合编制缺乏精确标注而只能依赖乐谱与音频的粗对齐。本文方法链包含三步：先用序列级对齐（Sequence\-level Alignment，DTW或线性拉伸）得到粗起始映射，再用预训练转录器生成按音高的起始后验图（Posteriorgram），最后在容许误差窗内将音符事件与音频帧做按音高二部图匹配以最大化后验证据并强制一对一一致。与逐音符贪心峰值拾取（Greedy Snapping）的关键机制差异在于全局最优分配避免重复占用与漏检，在窗口重叠与初始对齐粗糙时仍保持一致性。在MusicNet训练并跨数据集评测时，DTW加二部图在URMP上F1达到89\.3%，相对合成预训练基线的77\.5%提升显著，且在管弦乐BSED上同样优于贪心与直方图方法。该结论适用于室内乐与钢琴的乐器无关起始检测，对偏移时长、乐器标签与密集管弦乐同时同音冲突尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://abhirupsaha8.github.io/> — 链接可访问（HTTP 200）
- 第三方资源：<https://docs.scipy.org/doc/scipy/referenc> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 12. [总体稳定下的细微伸缩：爱尔兰舞曲速度表情的拍级测量与乐句聚类](/posts/conference-icmc-2026-conference-paper-id-paper-680-695c339ce6/)

> 英文题目：*[Computational Analysis of Expressive Tempo in Irish Traditional Dance Music](/posts/conference-icmc-2026-conference-paper-id-paper-680-695c339ce6/)*

标签：#统计分析 #音乐信息检索 #音乐 #音乐理解

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音乐理解 | 主方法：#统计分析

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- M´ario Pereira：机构信息未能从会议 PDF 纯文本可靠映射
- Ant´onio S´a Pinto：机构信息未能从会议 PDF 纯文本可靠映射
- Treasa Harkin：机构信息未能从会议 PDF 纯文本可靠映射
- Gilberto Bernardes：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为爱尔兰传统舞曲reels与jigs录音及手工节拍与乐句标注，输出为全局与乐句级富有表情的速度偏离刻画，难点在于无乐谱参照、反复次数不定且装饰音密集导致起拍模糊。方法先由节拍标注计算拍间间隔并换算为局部速度序列，再用核密度估计取众数得到主导速度并相减形成偏离曲线，前者输出的速度分布直接决定后者参照点。接着按曲种与独奏合奏及乐器分组比较平均偏离分布，然后对基线归零与重采样后的乐句曲线做Ward层次聚类，前者发现的组间差异为后者结构位置解释提供对照。与依赖乐谱对齐的古典表演分析不同，该框架完全基于演奏自身分布定义参照速度并以盲聚类发现结构效应，适用于口传音乐的无谱比较。在136首录音语料聚类评测设置下，强加速簇的平均偏离指标为\+37 BPM，高于轻微减速簇的平均偏离指标\-2\.9 BPM。结论适用边界受限于首个完整乐段且多为八小节AABB结构样本，多轮反复与其他舞曲类型及演奏者个体风格尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://thesession.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 13. [用一个非线性迭代跟住人：IPF 如何把节奏同步做成可复现的响应过程](/posts/conference-icmc-2026-conference-paper-id-paper-686-811869eb41/)

> 英文题目：*[Designing responsive rhythms utilizing the Impulse Pattern Formulation &\#40;IPF&\#41;](/posts/conference-icmc-2026-conference-paper-id-paper-686-811869eb41/)*

标签：#信号处理 #听觉与音乐认知 #音乐 #音乐生成

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Simon Linke：机构信息未能从会议 PDF 纯文本可靠映射
- Rolf Bader：机构信息未能从会议 PDF 纯文本可靠映射
- Robert Mores：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为外部点击音轨的第八音符间隔序列，输出为自适应演奏者的第八音符间隔序列，难点在于同时复现人类跟拍的快速同步、瞬态过冲、拍点预测与多节奏容忍。方法分三步：先以取模误差检测将外部间隔折算到当前周期附近以估计速度偏差，其输出进入脉冲模式公式单反射点递推更新内部周期状态并收敛至目标速度。再经尺度映射将每分钟拍数限制在稳定区间并以第八音符为迭代步长输出，从而衔接前两步的检测与收敛结果。与加1/f噪声的人性化方法和阻尼振子模型相比，该机制以确定性混沌瞬态自然产生过冲与微偏差而非外加随机抖动，其实质意义在于以极低计算量实现可实时部署的音乐化跟拍。在以120 bpm为起点的多节奏阶跃测试设置下，IPF上限条件的最终速度指标为135 bpm，高于下限条件的最终速度指标108 bpm，同设置下收敛至正负2%意识阈值的平均时间为4个节拍。该结论适用边界受限于中等速度附近的1/1同步与有限多节奏比，大阶跃失锁与相位偏移为失败条件，线性与正弦连续变化及噪声场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://zenodo.org/records/5758991> — 链接可访问（HTTP 200）
- 演示资源：<https://zenodo.org/records/5758991> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 14. [先抹掉再贴上：用颤音匹配把齐奏混音藏成一个声源](/posts/conference-icmc-2026-conference-paper-id-paper-137-c056994100/)

> 英文题目：*[Vibrato Matching for Modulation Control and Blending in Sound Mixtures](/posts/conference-icmc-2026-conference-paper-id-paper-137-c056994100/)*

标签：#信号处理 #音乐 #语音 #音乐源分离 #语音转换

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音转换 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Jeremy Hyrkas：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究处理含颤音（Vibrato）的单声源信号，目标是将源信号的颤音模式赋予目标信号。难点在于同时保留目标音色与起音，精确替换频率调制（Frequency Modulation，FM）与幅度调制（Amplitude Modulation，AM），且混音中不同颤音会暴露多声源存在。首先颤音抑制（Vibrato Suppression）环节用零相位低通颤音滤波器（Vibrato Filter）平滑基频与频谱包络，并经时变延迟与频谱平滑去除原有FM与AM，输出无颤音目标信号。然后颤音迁移（Vibrato Transfer）环节从源信号各次谐波提取均方根包络并经低通分离出AM包络施加至目标对应谐波，同时用源FM构造调制延迟函数重塑谐波频率。最后对带阻滤波所得残差（Residual）的短时傅里叶变换（Short\-Time Fourier Transform，STFT）谱按频带提取谱包络AM并回插调制残差，再与已调制谐波相加完成匹配。与既有整体包络迁移相比，按谐波与残差频带分别施加AM更符合自然颤音的频变特性。原文未提供可核对的关键定量结果。作者以人声与萨克斯管等混音示例展示融合效果，但未做听感测试与分离指标量化，外推至听者多源感知仍未经验证。原文未披露训练、推理或部署成本，本方法无需训练。

🔗 **开源资源**

- 代码相关资源：<https://jeremyhyrkas.com/ICMC2026> — 链接可访问（HTTP 200）
- 数据相关资源：<https://jeremyhyrkas.com/ICMC2026> — 链接可访问（HTTP 200）
- 复现相关资源：<https://jeremyhyrkas.com/ICMC2026> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 15. [穹顶之上的作曲笔：Zirkonium 如何把 47\.4 通道的空间位置变成可写的参数](/posts/conference-icmc-2026-conference-paper-id-paper-220-737beead29/)

> 英文题目：*[2](/posts/conference-icmc-2026-conference-paper-id-paper-220-737beead29/)*

标签：#开源工具 #信号处理 #空间音频信号 #空间音频渲染

评分：**6.1/10** | 创新 1.0/2 | 技术严谨 0.8/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#空间音频渲染 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Years Zirkonium：机构信息未能从会议 PDF 纯文本可靠映射
- Klangdom at ZKM \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. \. 59 Ludger Br¨ummer：机构信息未能从会议 PDF 纯文本可靠映射
- G¨otz Dipper：机构信息未能从会议 PDF 纯文本可靠映射
- Dan Wilcox：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理以穹顶扬声器阵列为输出的空间音乐作曲问题，输入为多通道stems、实时音频与外部运动控制消息，输出为ZKM Klangdom穹顶的连续声像定位与运动，难点在于兼顾作曲家可操作性、跨场地可移植复演与长期可归档性。方法链分为三步：先用扬声器配置工具标定几何、硬件路由与延迟补偿并生成三维可视反馈，其输出的几何模型进入下一步约束增益求解。再以基于矢量幅度声像定位与高阶Ambisonics的引擎完成实时渲染，将标定后的声场模型转为多通道馈送。然后通过轨迹绘制与开放声音控制调度驱动事件序列并支持录制回放，以时间轴轨迹直接调制渲染参数。与声学仿真或混音台式空间插件相比，该链条将空间编排从数字音频工作站自动化中解耦为独立可视对象，使运动可脱离特定工作站独立存储复演。在水平与垂直旋转测试条件下，水平旋转的角度指标为360 degrees，高于垂直旋转的角度指标180 degrees。其结论适用边界仅限以艺术生产与现场演出验证的穹顶场景，尚未验证家用消费格式与大样本听感泛化，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/zkmkarlsruhe/ZirkoniumSpatializationServer> — 链接可访问（HTTP 200）
- 第三方资源：<https://zkm.de/de/zirkonium> — 链接可访问（HTTP 200）
- 第三方资源：<https://forum.ircam.fr/projects/detail/spat/> — 链接可访问（HTTP 200）
- 第三方资源：<https://ruipenha.pt/spatium> — 暂时无法访问
- 第三方资源：<https://plugins.iem.at/> — 链接可访问（HTTP 200）
- 第三方资源：<https://en.wikipedia.org/wiki/Lemur_> — 暂时无法访问
- 第三方资源：<https://grapes-3d.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 16. [不用录音棚如何得到可控的管乐四重奏：ChoraleWind 的规则表情与物理建模链路](/posts/conference-icmc-2026-conference-paper-id-paper-152-6db91bd511/)

> 英文题目：*[ChoraleWind: An Expressive Wind\-Quartet Dataset for End\-to\-End Rendering from the Neues Th¨uringer Choralbuch](/posts/conference-icmc-2026-conference-paper-id-paper-152-6db91bd511/)*

标签：#数据集 #数据集构建 #端到端 #音乐 #音乐生成

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音乐生成 | 主方法：#数据集构建

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Axel Berndt：机构信息未能从会议 PDF 纯文本可靠映射
- Aida Amiryan\-Stein：机构信息未能从会议 PDF 纯文本可靠映射
- Manuel Peters：机构信息未能从会议 PDF 纯文本可靠映射
- Meinard M¨uller：机构信息未能从会议 PDF 纯文本可靠映射
- Stefan Balke：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理由新图林根众赞歌集四声部MEI乐谱到管乐四重奏音频的端到端渲染，输入为311首众赞歌的高质量双谱表编码，输出为分声部干声与合奏混音，难点在于管乐标注数据稀缺、真实录音串音严重且表情与音色难以可控复现。渲染链条分三步：符号预处理将上下谱表双层结构拆为高、中、次、低四个独立声部并展开反复、修复断裂小节与呼吸标记，其输出的逐声部编码进入基于规则的表情建模。表情建模生成速度、力度与发音曲线并导出为表情化MIDI，再驱动基于物理建模的合成器逐声部合成干声以保证音符标注对齐。在全库语料场景下，“Herr, du hast alles, Himmel und Erden”的速度指标为207\.55 bpm，高于全库平均的速度指标90\.13 bpm。与纯数据驱动合成相比，该机制差异在于用显式节拍重音、乐句呼吸与人性化随机直接控制演奏，使结果透明可复现，但声学丰富度受限于默认合成器音色。其适用边界限于同质性高的众赞歌管乐四重奏与干声可控评测，浪漫派长线条与真实录音质感的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://audiolabs-erlangen.de/resources/MIR/> — 链接不可用（HTTP 403）
- 第三方资源：<https://github.com/axelberndt/> — 链接可访问（HTTP 200）
- 第三方资源：<https://openmusic.academy/revs/> — 链接可访问（HTTP 200）
- 第三方资源：<https://music-encoding.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://audiomodeling.com/swam-engine/> → <https://audiomodeling.com/products> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.reaper.fm/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 17. [逐样本读相位、自调谐保幅度：跟踪共振器组的实时谱分析](/posts/conference-icmc-2026-conference-paper-id-paper-300-33547b9d64/)

> 英文题目：*[Real\-Time, Low\-Latency, High Resolution Audio Spectral Analysis: Phase Matters](/posts/conference-icmc-2026-conference-paper-id-paper-300-33547b9d64/)*

标签：#时频分析 #实时处理 #音乐 #音频生成

评分：**5.8/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#时频分析

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Alexandre Francois：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为单通道实值音频波形流，输出为每个输入样本对应的变长频率幅度对列表与高分辨跟踪功率谱，难点在于同时要求逐样本实时低延迟、高时间分辨率、高频率分辨率与准确幅度，而固定窗长与固定频带的短时傅里叶变换难以兼顾感知尺度布置与相位连续性。基础谐振器先经外差与指数加权滑动平均累积窄带能量并输出平滑复状态，为后续相位差分提供稳定观测。再由相邻样本共轭乘积的主值辐角估计相位时间导数得到瞬时频率，将频率估计直接作为可观测输出。接着在显著响应时用该估计直接驱动时变谐振角速度实现频率跟踪，并经基于自然频率最近邻的非重叠优选去除冗余，使上一步的连续频率估计进入自调谐与稀疏化输出。与固定频带相位声码器需缓冲与相位展开不同，该链路无需缓冲和谐振频率固定约束，谐振频率可连续漂移且可按感知尺度任意布置，因而能逐样本并行输出任意频率幅度对。在112通道并发的实时推理设置下，SIMD向量化bank的每样本更新时间性能指标为低于650 ns，低于标量参考实现的每样本更新时间性能指标低于2 μs。适用边界为谐波分析与单频主导区域，多分量交叠、噪声混响与快速瞬态下的竞争串扰与相位连续性尚未验证；推理开销已披露，延迟随谐振器数量线性增长且与信号时长无关，并行实现可进一步降低延迟，无训练成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 18. [让电脑跟指挥走：Ponticello 把电子声部绑到弹性拍点上](/posts/conference-icmc-2026-conference-paper-id-paper-453-4bce9b4930/)

> 英文题目：*[Ponticello: An Interactive Conducting System for Mixed Music Performance](/posts/conference-icmc-2026-conference-paper-id-paper-453-4bce9b4930/)*

标签：#RNN #实时处理 #音视频 #音乐 #节拍跟踪

评分：**5.8/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#节拍跟踪 | 主方法：#RNN

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Nikolaus Knop：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理混合音乐演出中声学层与电子层的同步任务，输入为指挥视频流与预置电子乐谱及速度网格参考，输出为随指挥弹性速度连续变速的电子声音，难点在于指挥手势模糊多变且音频拉伸须保持音高与结构不被破坏。先由视觉前端输入连续视频帧，负责用MediaPipe提取身体关键点并计算右手相对躯干的位置、速度与加速度特征，输出适合时序分析的特征序列。再由核心推理层输入约五秒滑动窗口特征，负责用门控循环单元同时预测至下拍的物理时间间隔与当前帧为拍点的概率，输出的下拍间隔与拍点概率进入播放控制层。最后由播放控制层输入预测间隔与当前播放位置到速度网格下拍的乐谱时间距离，负责求两者之比得到变速比并经指数平滑驱动播放指针，输出经颗粒拉伸与现场录音双缓冲映射的不变音高连续音频。与基于音频跟谱的Antescofo不同，该系统仅需拍点与参考速度而直接跟随指挥手势，无需可靠音高与起音检测，因而支持自动化与颗粒过程等连续作曲策略。在30帧每秒USB相机条件下，系统的延迟约为35ms，高于关键点提取与网络推理环节的延迟，该环节的延迟可忽略不计。该结论适用边界受限于约三小时视频覆盖的指挥风格，新风格适应与无指挥密集场景尚未验证，首拍错漏恢复与停止重返手势亦未解决，系统延迟主要取决于视频帧率。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 19. [用坐标找配乐：手工聚类守住可解释基线，深度生成模型换来连续检索](/posts/conference-icmc-2026-conference-paper-id-paper-23-dc59223cfb/)

> 英文题目：*[Emotion\-Based Film Music Retrieval with Handcrafted and Deep Models](/posts/conference-icmc-2026-conference-paper-id-paper-23-dc59223cfb/)*

标签：#对比学习 #用户研究 #变分自编码器 #音乐 #音乐检索

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音乐检索 | 主方法：#变分自编码器

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Lucas Ong：机构信息未能从会议 PDF 纯文本可靠映射
- Ruby Crocker：机构信息未能从会议 PDF 纯文本可靠映射
- George Fazekas：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

影视配乐检索以目标效价\-唤醒坐标为输入，输出情感一致的配乐片段，难点在于声学特征与主观感知的非线性映射及段内情绪时变性。手工路径先将每段十五秒切分为五秒片段并提取音色节奏响度和声共七十二维特征，经低方差与高相关过滤及径向基核主成分分析降至六维后做聚类形成固定簇，再按曲目到簇质心距离排序返回同簇曲目。深度路径将拼接嵌入送入变分深度嵌入以高斯混合为潜先验学习可聚类潜空间，并将二维效价\-唤醒坐标编码后经共享投影头与音频潜表示做温度缩放对比对齐，使查询坐标可直接投影检索。与固定簇只能返回同簇固定曲目不同，深度路径在全潜空间按余弦相似度做任意坐标近邻排序，实现了从离散簇选择到连续情绪插值的机制差异，可在平静与紧张之间平滑过渡。在FME\-24聚类评测任务下，手工模型的Silhouette得分为0\.15，高于VaDE\+CL模型的Silhouette得分0\.09。用户研究进一步显示手工组高相关比例占优而深度组零相关比例更高，且两组约半数认可簇内一致性，表明客观可分性未完全转化为感知相关性。该结论适用边界受限于短片段商业影视配乐的近似匹配，尚不支持极端情绪与长时叙事情绪追踪外推；原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://librosa.org/doc/latest/feature.html> — 链接不可用（HTTP 404）
- 第三方资源：<https://scikit-learn.org/stable/index.html> — 链接可访问（HTTP 200）
- 第三方资源：<https://pypi.org/project/openl3/> — 链接可访问（HTTP 200）
- 第三方资源：<https://pytorch.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://react.dev/> — 链接可访问（HTTP 200）
- 第三方资源：<https://flask.palletsprojects.com/> → <https://flask.palletsprojects.com/en/stable/> — 链接可访问（HTTP 200）
- 第三方资源：<https://firebase.google.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://render.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 20. [从一间工作室到松散结构：SARC 二十年如何用空间与制作组织声音研究](/posts/conference-icmc-2026-conference-paper-id-paper-533-fe159d88f0/)

> 英文题目：*[SARC Studio Report](/posts/conference-icmc-2026-conference-paper-id-paper-533-fe159d88f0/)*

标签：#信号处理 #音视频 #音乐 #空间音频信号 #空间音频渲染

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.6/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#空间音频渲染 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Pedro Rebelo：机构信息未能从会议 PDF 纯文本可靠映射
- Craig Jackson：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本报告的输入是从现场采录、多通道扩声到沉浸式回放的创作研究需求，输出是可支撑作曲、表演、新乐器研究与公开展示的声学空间与工具链，实际难点在于同一建筑内兼顾包围感沉浸、高精度正面定位与灵活布展策展三种相互冲突的重放要求。方法链第一步由Sonic Lab构建可切换重放底座，以多层环绕、五阶Ambisonics与杜比全景声提供漫射声像，以可升降前墙阵列提供波场合成的近距离定位。第二步承接该底座的空间验证需求，由Maker Space承担金属、木工与电路原型加工，由毗邻Interaction Lab承担概念装置的搭建与测试，使新接口在进入大空间前完成迭代。第三步将经测试的作品转入SARC Gallery这一小尺度探针，以四面投影与十六通道顶棚声场检验亲密尺度下的视听交互，再由SARC Mobile把多通道采录与回放带出固定建筑，形成馆内验证向户外与社区场景的外溢。相对追求单一最优制式的已有工作室报告，其关键机制差异是将环绕声场、高阶Ambisonics、波场合成与IKO紧凑球形阵列并置为互补聆听机制，分别对应包围、精确前向定位与物\-like内爆式发声，其实质意义是让创作按题材选择空间语法而非削足适履。在Sonic Lab空间重放设置下，环绕子系统的数量指标为48只，高于波场合成阵列的数量指标42只。该结论的适用边界受限于该中心特定建筑声学、策展语境与听众群体，向其他场地与人群的外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://www.qub.ac.uk/research-centres/sarc/research/SARCx20/> — 链接不可用（HTTP 403）
- 第三方资源：<https://improvfest.ca/home/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 21. [只在关键帧上加监督：用不同掩码拆开词起点与词终点的对齐误差](/posts/conference-icmc-2026-conference-paper-id-paper-121-c5baceddea/)

> 英文题目：*[Exploring Masked CE Losses to Enhance Word Offset Estimation in CTC\-based Lyrics\-to\-Audio Alignment](/posts/conference-icmc-2026-conference-paper-id-paper-121-c5baceddea/)*

标签：#CTC #音乐 #语音 #强制对齐

评分：**5.5/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#强制对齐 | 主方法：#CTC

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Tian Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Tomoyasu Nakano：机构信息未能从会议 PDF 纯文本可靠映射
- Masataka Goto：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

歌词到音频对齐输入为混合音乐音频与已知词序列，输出为每个词起始与结束时间戳，难点在于歌唱发音可变、伴奏干扰强且联结时序分类损失对精确边界不敏感。该方法先用混合Transformer音乐源分离提取人声并计算对数梅尔频谱，再按发音词典将词转为39个音素加空白符与静音标记共41类并由词级标注推导关键帧标签。接着卷积循环神经网络预测逐帧音素概率，最后以掩蔽交叉熵约束掩蔽帧并结合联结时序分类损失训练，再用CTC分割强制对齐得到词级边界。与仅在非词首帧屏蔽空白符的mask p不同，新掩码对比全标注帧、仅词首帧、词首加全部静音帧、词首加静音起始帧，显式加强边界与静音监督以改善偏移估计。在Jamendo测试集下，Proposed方法的MAE指标为0\.213，低于Mask p基线的MAE 0\.220。该改进使偏移估计同步提升并在同为DALI训练的方法中保持可比起始精度，为无既有偏移基线的研究提供新基准。该结论适用边界受限于英文流行歌曲词级评测，尚未验证音素级对齐、多语言泛化与统计显著性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 22. [把手的极限写进网络：物理约束如何决定钢琴指法的可弹性](/posts/conference-icmc-2026-conference-paper-id-paper-179-62ca5832ab/)

> 英文题目：*[CNN\-BiLSTM Hybrid Model with Physical Constraints for Automatic Piano Fingering Generation](/posts/conference-icmc-2026-conference-paper-id-paper-179-62ca5832ab/)*

标签：#CNN #RNN #音乐 #符号音乐生成

评分：**5.5/10** | 创新 1.1/2 | 技术严谨 0.8/1.5 | 实验充分 1.0/1.5 | 清晰度 0.6/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#符号音乐生成 | 主方法：#RNN

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Tianze Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Shingyui He：机构信息未能从会议 PDF 纯文本可靠映射
- Lei Xuan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

自动钢琴指法生成需为长度为T的音符序列逐音预测指号，右手取1至5、左手取\-1至\-5、0表示无标注，需在指数级组合中兼顾乐谱上下文与手部生物力学可行性。该方法先从文本化演奏记录条目提取规整拼写音高、时值与声部通道等基础乐谱特征并检测同手时间重叠和弦，再将伸展率、交叉距离、手位与违例归纳为空间、时间、手部运动与指法历史的物理约束特征并与输入拼接。编码端先用两层卷积网络抽取局部音型与和声纹理，经归一化与激活后送入两层双向长短期记忆网络建模前后向依赖，再由注意力加权得到上下文向量。主分类器与物理约束网络按权重融合输出，并对Top\-k候选做基于物理得分的前向规划重排以保证长程可行性。与纯数据驱动基线的关键差异在于把解剖先验同时注入预处理、加权训练与解码重排，而非仅靠序列模型隐式学习。在PIG数据集测试集评估下，完整模型的Mgen指标为82\.6，高于无物理约束基线的Mgen指标71\.2。该结论适用边界受限于西方古典曲目与标准手型假设，ThumbSet因仅51\.7%音符有标注而整体偏低，小手舒适度与个性化风格尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://doi.org/10.1145/3662739.3672177> → <https://dl.acm.org/doi/10.1145/3662739.3672177> — 链接不可用（HTTP 403）
- 第三方资源：<https://doi.org/10.2307/40285730> → <https://online.ucpress.edu/mp/article/14/4/341/61993/An-Ergonomic-Model-of-Keyboard-Fingering-for> — 链接不可用（HTTP 403）
- 第三方资源：<https://www.mdpi.com/2076-3417/13/20/11321> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 23. [从执行到不可实现：计算机音乐中声音存在的另一种根据](/posts/conference-icmc-2026-conference-paper-id-paper-199-b83c203711/)

> 英文题目：*[Beyond Execution: Unrealizability and the Ontology of Sound in Computer Music](/posts/conference-icmc-2026-conference-paper-id-paper-199-b83c203711/)*

标签：#文献综述方法 #理论分析 #音乐 #音乐理解

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 0.6/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 0.0/1.5

排名：后50% | 文档类型：理论研究 | 主任务：#音乐理解 | 主方法：#文献综述方法

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Paulo C\. Chagas：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入是电声与计算机音乐中以实现、执行和可操作性为声音存在担保的本体论传统，输出是以不可实现性为构成性维度的替代本体论，难点在于将Agamben潜能而不行动的哲学概念转化为可辨识的音乐实践差异而不滑向技术失败论。在理论阐释场景设置下，本文可核对的定量指标得分为0，低于实证基准要求的指标得分1，故原文未提供可核对的关键定量结果。方法链分三步：先重构从GRM与WDR到MUSIC语言、FM合成与DX7的执行谱系，说明可计算实现如何成为声音存在的担保，其输出的价值等级制进入下一步批判；再引入无行动潜能与非运作性框架，把未实现重释为积极存在，为案例解读提供判据；最后以颗粒合成的统计场、现场电子乐的偶发交互与机器学习系统的不透明推理为线索，论证悬置与漂移如何使完全实现落空。与已有技术史相比，关键机制差异在于把判据从精确控制转向悬置、使用与聆听栖居，实际意义是为创作能动性提供政治性重述。该结论适用边界限于概念阐释与作品机制解读，尚未验证其在听觉实验或系统比较中的普适性，不能外推为创作规范或技术优劣判断。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 24. [不做成像也能摸：木薯生物塑料薄壳如何变成可分类的触摸声场](/posts/conference-icmc-2026-conference-paper-id-paper-243-c506c06d1d/)

> 英文题目：*[De/Re:Generation: Exploring DIY Cassava\-Starch Bioplastic Interfaces with EFT\-Based Touch Sensing in an Interactive Sound Installation](/posts/conference-icmc-2026-conference-paper-id-paper-243-c506c06d1d/)*

标签：#信号处理 #空间音频信号 #音频生成 #音频交互

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Adriano C\. Monteiro：机构信息未能从会议 PDF 纯文本可靠映射
- Rafaela B\. Pires：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本任务输入为不规则易变形木薯淀粉生物塑料雕塑表面的触摸扰动，输出为离散触摸手势类别以驱动声音与振动合成，难点在于材料电导率仅兆欧量级且不均匀，加之几何不规则与温湿度漂移导致电场不稳定。方法链第一步由生物塑料成型与边界电极附着负责构建导电场域，在圆盘周边与半球壳内表面布置八电极，其电压扰动直接进入第二步。第二步为基于ESP32的多路复用电流注入与差分放大前端，采用对极注入形成每扫描周期40维差分电压向量，该扫描向量经Wi\-Fi以UDP送入主机。第三步在Max/MSP侧做滑动平均与基线校正得到差分向量，再送入RBF核SVM完成免成像模式分类并经百分比滤波平滑后输出实时手势。与高密度阵列和工业导电弹性体方案的关键机制差异在于仅用边界电极感知全局电场畸变，以材料与几何灵活性换取空间分辨率，适配手工雕塑的低成本集成。在多触点维度独立分类设置下，P=6条件的准确率为~48%（16/33），高于P=8条件的准确率~27%（9/33）。结论的适用边界是对象与任务强相关，换物件需重调负载与增益电阻并重训，高分辨率与长期漂移外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 25. [稀疏也稳、稠密也准：用距离加权的 KNN 与 MLP 校准机器人乐器](/posts/conference-icmc-2026-conference-paper-id-paper-265-febebaba48/)

> 英文题目：*[AI Framework for Dynamic Robotic Instrument Calibration](/posts/conference-icmc-2026-conference-paper-id-paper-265-febebaba48/)*

标签：#模型集成 #音乐信息检索 #音乐 #音频质量评估

评分：**5.4/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频质量评估 | 主方法：#模型集成

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Colton Arnold：机构信息未能从会议 PDF 纯文本可靠映射
- Zhaohan Cheng：机构信息未能从会议 PDF 纯文本可靠映射
- Ajay Kapur：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理机器人乐器的动态校准问题，输入为音符与击打速度组合，输出为敲击响应的均方根能量RMS估计，用于判断实测偏离是否需要机械调整，难点在于机械松动与磨损带来的缓慢非线性漂移以及稀疏采样下的插值不稳定。方法链第一步按乐器独立采集敲击录音并计算RMS构成校准数据集，记录音符、速度与RMS的对应关系，为后续建模提供接地测量。第二步在该数据集上训练多层感知机MLP学习连续非线性映射，以实现跨音符与速度的平滑泛化并抑制房间与麦克风噪声。第三步并行保留K最近邻KNN的局部插值结果，并以测试点到训练样本的距离计算混合权重生成最终校准值，重合时完全信任KNN，远离时提高MLP占比，从而衔接局部保真与全局泛化。与单一模型不同，该距离依赖的平面截顶加权混合在稀疏与稠密采样下均保持稳定而无需预知数据密度，关键设计是峰值权重而非函数形态主导性能。在MalletOTon留音符分组交叉验证设置下，平面截顶加权混合模型的平均绝对误差MAE为1\.3798，低于独立KNN的平均绝对误差MAE 1\.5251。该结论适用边界受限于单台MalletOTon离线RMS预测验证，尚未验证多乐器迁移、长期漂移跟踪与闭环校准改善，且稀疏边界外推与快速变化条件下可能失败。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 26. [把作曲拆成共享状态上的分工：BbMuse 的黑板式实时交互框架](/posts/conference-icmc-2026-conference-paper-id-paper-607-d1d15b2044/)

> 英文题目：*[BbMuse: A Blackboard\-Driven Framework for Real\-Time Interactive Music](/posts/conference-icmc-2026-conference-paper-id-paper-607-d1d15b2044/)*

标签：#开源工具 #生成模型 #实时处理 #音乐 #音乐生成

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#生成模型

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Fabian Ostermann：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理实时交互音乐生成，输入为音频与符号演奏信号及环境变化等异构信息，输出为连续分层音乐决策与高精度播放控制，难点在于多层次异构子任务需在严格时间约束下协同，并保持可解释、可扩展与可复用。方法链第一步将共享状态切分为类型化表征并驻留全局黑板，为后续模块提供统一可读写视图，其输出的黑板状态直接进入下一步的依赖声明。第二步由各模块显式声明需求、供给与使用语义以刻画依赖，使黑板上的表征供给关系直接决定模块可执行性与可替换性，其输出的依赖图进入下一步的调度执行。第三步由控制器经拓扑排序推导执行序并以分组线程支持异速运行，同时以单写者约束与使用语义消解循环依赖，从而实现增量开发与运行时替换。与特设多智能体消息传递和单体深度黑盒相比，其机制差异在于以单写者共享状态替代点对点通信，以声明式依赖与自动调度替代手工连线调度，实际意义在于支持模块级追溯行为与低功耗渐进优化。在示例表征验证条件场景下，示例定义的表征的值指标为5，高于下界检查的值指标0。适用边界限于中小规模Python原型与舞台装置等容忍抖动的场景，尚未验证大规模模块图与高负载音频下的时延稳定性。原文未披露训练、推理或部署成本

🔗 **开源资源**

- 第三方资源：<https://www.comfy.org/> → <https://comfy.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://docs.b-human.de/coderelease2025/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 27. [计算机辅助作曲为何困在纸面记谱里：从音高节奏形式化到多模态工作流的回望](/posts/conference-icmc-2026-conference-paper-id-paper-667-b8ab6eebd9/)

> 英文题目：*[Computer\-Aided Composition: A Retrospective and Prospective Outlook](/posts/conference-icmc-2026-conference-paper-id-paper-667-b8ab6eebd9/)*

标签：#软件工具 #文献综述方法 #音乐 #符号音乐生成

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.9/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.6/1.5

排名：后50% | 文档类型：综述 | 主任务：#符号音乐生成 | 主方法：#文献综述方法

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Andrea Agostini：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以历史文献、系统设计经验与作曲实践为输入，以澄清计算机辅助作曲与广义计算机作曲的混同并展望未来路线为输出，难点在于记谱中心传统与声音实时实践长期割裂且缺乏统一形式化界定。方法先以记谱、声音、语言与模型四轴重构早期理论，阐明音高节奏中心主义与可读记谱要求的形成，其符号形式化界定进入下一步。再以个人计算机与实时音频变革为背景，解释OpenMusic音频扩展与Maquette图形块组织如何承接符号工具并弥合实时与非实时割裂，其弥合经验进入展望。最后提炼多模态枢纽式愿望清单，主张自然语言与代码双重描述、参数化图形记谱与声料生成编辑协同及实时操作与协作编辑。与早期黑盒式频谱工具及通用计算机音乐语言相比，该路线强调作曲家可编程的形式化与模型可生多实例性，保留作曲家对多版本的评估选择权。在历史文献回溯的评测设置下，文献\[5\]的页码得分从169升至185，原文未提供可核对的关键定量结果。该结论适用边界受限于西方记谱传统下的学院派器乐与声乐创作，对流行制作与非五线谱实践的外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 28. [同一份自然声景为何实验室听得准、博物馆听得散：房间与阵列如何重塑沉浸](/posts/conference-icmc-2026-conference-paper-id-paper-238-1fd2696965/)

> 英文题目：*[Listening Across Spaces: Perceptual Evaluation of an Ambisonics\-Based Sound Installation](/posts/conference-icmc-2026-conference-paper-id-paper-238-1fd2696965/)*

标签：#统计分析 #主观评测 #环境声 #空间音频信号 #音频质量评估

评分：**5.3/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频质量评估 | 主方法：#主观评测

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Felipe Otondo：机构信息未能从会议 PDF 纯文本可靠映射
- Leonardo Santos：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以智利南部湿地、海岸带与原生林采集的二阶Ambisonics声场为输入，以听者在不同展演空间对临场感、包围感等五维沉浸得分为输出，难点在于房间混响、扬声器几何与素材内容在真实巡展中耦合变化而无法正交分离。先用Core Sound OctoMic采集并存为Ambix中间格式以解耦声场描述与具体阵列，其输出直接进入适配各场馆的三阶解码矩阵生成扬声器馈给。再将同一批海岸、森林、湿地素材在实验室16\.1三层阵列与博物馆单层16只环形阵列上经均衡与声压校准后渲染播放，其播放条件进入下一步听音评测。最后组织16名声学工程受训听者经属性培训后在1\-10连续量表上即时评分并做方差分析，其均值与显著性结果回流指导装置的材料均衡与空间作曲。与已有受控实验室空间化研究相比，关键差异在于不孤立房间变量而将实验室与展馆作为生态有效的巡回部署情境整体并置，并把沉浸操作化为临场感、包围感、音色清晰度、稳定性、深度五个可分属性，具有展陈指导意义。原文未提供可核对的关键定量结果。该结论适用边界受限于二阶录制上采样至三阶解码、约0\.25秒与1\.2秒混响及三层与单层几何的特定组合，三层缺失时深度与稳定性推论存在失败条件，跨其他混响与阵列的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://soundlapse.net/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 29. [同一首交响乐为何听感不同：指挥与乐团谁在主导相似性](/posts/conference-icmc-2026-conference-paper-id-paper-382-8d967fcc39/)

> 英文题目：*[Factor Analysis of Similarity in the Same Orchestral Piece](/posts/conference-icmc-2026-conference-paper-id-paper-382-8d967fcc39/)*

标签：#统计分析 #可解释性 #音乐信息检索 #音乐 #音乐推荐

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音乐推荐 | 主方法：#统计分析

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Minami Kojima：机构信息未能从会议 PDF 纯文本可靠映射
- Takayuki Itoh：机构信息未能从会议 PDF 纯文本可靠映射
- Rafael Ramirez：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究输入同一管弦乐曲目的数十个商业录音，输出同乐团、同指挥家、乐团所属国、指挥家国籍、指挥家师承五类分组对演奏风格相似性的解释力，难点在于管弦乐缺乏符号对齐基准且音色力度速度被听众复合感知。方法先以Kunstderfuge合成MIDI为参照，用Sync Toolbox多尺度动态时间规整统一各录音时间轴，输出逐帧对齐的能量包络供特征提取直接比较。接着用Librosa提取均方根能量等十九维声学特征并做主成分压缩，同时并行用VGGish提取一百二十八维嵌入经流形投影降维，形成可比的声学表示与高层纹理表示送入聚类。最后按五类元数据分组计算戴维森堡丁指数并用Dash可视化系统核查个体差异，使分组质量直接进入假设检验。与仅比较单一音色或情感相似度的工作不同，该文把手工声学与高层嵌入并行比较并与可解释分组结合，使推荐理由可归因到人或团体。在贝多芬第七交响曲第一乐章评测下，同指挥家分组下音色特征的DBI指标为2\.281，低于同乐团分组下音色特征的DBI指标2\.715。该结论适用边界受限于两千后现代乐器录音与所选两部曲目，跨作曲家与录音环境外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 30. [不用连线也能发声：把 Pure Data 的波形逻辑搬进 C\+\+ 类](/posts/conference-icmc-2026-conference-paper-id-paper-437-d8a9903101/)

> 英文题目：*[Pd\+\+: A C\+\+ Library of Pure Data’s DSP Objects](/posts/conference-icmc-2026-conference-paper-id-paper-437-d8a9903101/)*

标签：#教育 #游戏音频 #开源工具 #信号处理 #音频生成

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频生成 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Robert Esler：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作针对在游戏插件、移动与嵌入式端复用纯数据Pure Data音色逻辑时缺乏轻量文本化方案的问题，输入为振荡频率、MIDI音符与力度、控制参数与传感器值，输出为逐采样音频流与包络控制流，难点在于各平台音频输入输出与调度差异大而补丁难以直接产品化。其方法链第一步由PdMaster超类统一采样率、块长与快速傅里叶变换窗口等全局状态与单位转换，各数字信号处理类继承并共享该状态。第二步将每个波形对象封装为含perform函数的C\+\+类，主入口参数对应补丁主入口而返回值对应插座，并去除阻塞循环与图形依赖以保留原算法代码。第三步用基于采样计数器的Line、Metro与Timer替代原有时钟调度以适配可变帧率宿主，并经Java本地接口与P/Invoke绑定接入Processing与Unity等宿主完成音频回调写入。相比直接嵌入解释器的libpd或编译补丁的hvcc，该库保留原算法代码但去除阻塞循环与图形依赖，更易做面向对象组合与扩展。在单声道三振荡器合成器混音场景下，振荡器osc1通道的混音权重指标为\.5，高于振荡器osc3通道的混音权重指标\.2。该结论的适用边界受限于定性移植与教学原型，其大规模复音与Python封装尚未验证，WebAssembly下约100毫秒延迟的硬件实测表明实时部署仍需优化音频输入输出路径。

🔗 **开源资源**

- 代码相关资源：<https://bitbucket.org/resler/pd> → <https://bitbucket.org/resler/pd/wiki/Home> — 链接不可用（HTTP 404）
- 第三方资源：<https://github.com/pure-data/pure-data> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/robertesler/Pd4P3> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/philburk/portaudio-java> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/robertesler/Pd4Unity> — 链接可访问（HTTP 200）
- 第三方资源：<https://processing.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://openframeworks.cc/> — 链接可访问（HTTP 200）
- 第三方资源：<https://libcinder.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://puredata.info/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.unrealengine.com/> — 链接不可用（HTTP 403）
- 第三方资源：<https://unity.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://ccrma.stanford.edu/software/stk/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 31. [在数万个无序采样里作曲：用可堆叠查询把声音群体管起来](/posts/conference-icmc-2026-conference-paper-id-paper-538-1cef30d9a1/)

> 英文题目：*[Data\-driven algorithmic composition with large sample libraries: a modular system for the dynamic formation and control of spatialised sound groups](/posts/conference-icmc-2026-conference-paper-id-paper-538-1cef30d9a1/)*

标签：#软件工具 #检索增强 #音乐 #音乐生成 #空间音频渲染

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#检索增强

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Nikos Baskozos：机构信息未能从会议 PDF 纯文本可靠映射
- Thanos Polymeneas\-Liontiris：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该系统面向Max/MSP环境下利用大而无组织单发采样库的数据驱动算法作曲，输入为用户硬盘上可载入内存的采样集合，输出为经空间化渲染的多声部固定媒体结构，难点在于无文件夹组织与文件名信息时难以形成可控且随时间演化的声音群体。离线分析先提取响度、频谱质心、频谱平坦度、音高及其置信度、梅尔频率倒谱系数、时长与时间质心并写入JSON，同时驱动音频缓冲与数据集查询，为后续检索提供描述符基础。在线查询以描述符范围、K维树最近邻、K均值聚类与索引列表四种模式形成可堆叠的子语料库容器，其输出的样本索引集合直接作为播放与控制阶段的素材来源。横向序列引擎与纵向声部引擎分别负责节奏旋律与和声频谱的时序控制，并衔接滤波、包络、变速变调及到空间化参数的描述符映射以完成渲染。与依赖实时匹配或可视化浏览的拼接合成工具相比，该设计强调预定义查询的动态召回、预设插值与多分支堆叠，更贴近多群体配器的时间组织。在Remnants作品的语料场景下，四组共享配置的数量指标为150个Spat声源，高于单组节奏稳定配置的数量指标为10个样本。该结论的适用边界受限于固定媒体案例验证，向其他语料规模与实时交互场景的外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://forum.ircam.fr/projects/detail/max-sound-box/> — 链接可访问（HTTP 200）
- 第三方资源：<https://tutschku.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/AlexHarker/AHarker> — 链接不可用（HTTP 404）
- 第三方资源：<https://github.com/rconstanzo/data-> — 链接不可用（HTTP 404）
- 第三方资源：<https://github.com/rconstanzo/SP-> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 32. [不指挥声音而照料生态：Spores 把黏菌求生逻辑做成可演奏的界面](/posts/conference-icmc-2026-conference-paper-id-paper-577-752a31f0f7/)

> 英文题目：*[Spores: A Physarum\-Inspired Instrument for Agent\-Based Ecological Interaction](/posts/conference-icmc-2026-conference-paper-id-paper-577-752a31f0f7/)*

标签：#信号处理 #音乐 #音频交互 #音乐生成

评分：**5.3/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Kyle Smith：机构信息未能从会议 PDF 纯文本可靠映射
- Alexandria Smith：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

触屏觅食发声任务以触摸手势与生态状态为输入，以持续音色与事件性静默为输出，难点在于群落具有自主扩散、竞争与死亡等不可精确指挥的行为，表演者只能照料而无法命令。先由触摸层将播种、养分布置与扰动转译为网格中的群落与资源分布，其输出的粒子位置与食物场直接进入仿真层作为演化初值。再由仿真层以觅食粒子采样与信息素扩散衰减演化出网络与领地，并计算健康、压力等生态度量，其输出的连续度量流进入映射层作为控制信号。最后由映射层把生态度量经全局OSC与每群落MPE转译为合成器与混响参数，并以播种触发音符生、健康耗尽触发音符灭实现可读的生死对应。相对直接声音化或注入随机性，该设计把无食则无声的存活约束本身做成控制面，使约束先于声音被看见并迫使表演者以空间规划与时间预判维持乐句。在压力指标合成设置下，外部扰动条件的权重指标为60%，高于轨迹碎片化条件的权重指标为40%。结论仅在该七分钟六段式即兴流程内成立，长时演奏与多表演者泛化尚未验证，适用边界受限。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 33. [把声音铺在身体周围：以可导航的语料库建造超环境](/posts/conference-icmc-2026-conference-paper-id-paper-647-cf1704251b/)

> 英文题目：*[DANCING CABIRIA: AN HYPER\-ENVIRONMENT STUDY THROUGH CORPUS\-BASED TECHNIQUES](/posts/conference-icmc-2026-conference-paper-id-paper-647-cf1704251b/)*

标签：#信号处理 #音视频 #空间音频信号 #音频交互

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Piero Poli：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入为4名舞者全身动捕轨迹与预录声音语料，输出为虚拟现实中空间化的拼贴声音，难点在于身体自由度远高于描述子导航维度且不可见语料空间难以被本体感知发现。方法链分四步：先以Xsens套装240 fps采集关节位置与朝向并经Unity与OSC送入Max整理为运动数据库，再用FluCoMa新颖性与起音检测切分并提取MFCC、chroma等多维描述子构成500\-2500个语料单元。接着经分位数归一化与插值把单元映射为包围舞者的三维体或二维平面，使空间邻近对应音色相似并以手动传递函数适配表演尺度，随后以关节组均值位置做最近邻检索并用运动速度控制触发与复音。最后用IRCAM SPAT做八声道空间化后转双耳呈现，使表演者与观众共享同一超环境。与传统手势直接控制合成参数不同，该超环境把音色相似性转为空间邻近性，靠身体轨迹揭示结构而非触发预设音符，从而将语料探索变为可导航的作曲与表演行为。在共享平面探索与POV微观探索场景下，共享平面探索的语料规模指标为2420单元，高于POV微观探索的语料规模指标740单元。结论适用边界受限于预编排离线合成的艺术装置，尚未验证实时反馈下的演奏稳定性与观众感知收益。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.flucoma.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.bachproject.net/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/bachfamily/dada> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.bachproject.net/ears/> — 链接可访问（HTTP 200）
- 第三方资源：<https://rodrigoconstanzo.com/sp-tools/> — 链接可访问（HTTP 200）
- 第三方资源：<https://forum.ircam.fr/projects/detail/spat/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.xsens.com/motion-capture/suits> — 链接可访问（HTTP 200）
- 第三方资源：<https://base.xsens.com/s/article/MVN-Unity-Live-Plugin> → <https://base.xsens.com/s/article/MVN-Unity-Live-Plugin?language=en_US> — 链接可访问（HTTP 200）
- 第三方资源：<https://learn.flucoma.org/reference/onsetfeature/> — 链接可访问（HTTP 200）
- 第三方资源：<https://essentia.upf.edu/algorithms> — 暂时无法访问
- 第三方资源：<https://learn.flucoma.org/explore/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 34. [用文件名管住调性与速度：MBHD 的四轨循环表演系统](/posts/conference-icmc-2026-conference-paper-id-paper-15-eb82584f19/)

> 英文题目：*[MBHD: A Modular Audio Playback and Manipulation System for Loop\-Based Performance](/posts/conference-icmc-2026-conference-paper-id-paper-15-eb82584f19/)*

标签：#信号处理 #用户研究 #实时处理 #音乐 #音频交互

评分：**5.2/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Neal Anderson：机构信息未能从会议 PDF 纯文本可靠映射
- Sanjay Majumder：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该系统输入为散乱收集的鼓组贝斯和声与旋律循环音频，输出为锁定全局速度与调性的多路混音，实际难点在于跨曲库循环的节拍与调性难以在演出中同步对齐，人工逐一修改元数据耗时且限制即兴发挥。文件名解析先从结构化命名中抽取速度根音与乐器角色并写入字典映射，字典随即作为中央查找表驱动缓冲加载与声部分流，使后续处理能即时获得音高与速度属性。全局走带与时间伸缩引擎再按速度比调整可变速播放并以小节为单位保持相位对齐，使各层循环跟随统一走带时钟而不互相干扰。谐波一致引擎计算全局调与解析根音之间的半音差并经平滑后送入频域移调与重布线混音，实现变速不变调与变调不变速的独立控制。相比依赖手标元数据与嵌套菜单的数字音频工作站，该机制以命名约定替代人工标注并保持多路并行可重布线，把演出稳定性与细粒度即兴控制结合起来。在文件名解析转调任务下，87 A Synth\.wav对应律动的移调指标Applied Shift为\+5，高于90 C Guitar\.wav对应律动的移调指标Applied Shift\+4。该结论适用边界仅为十二平均律西方电子风格预录制立体声循环，微分音复杂调式功能与大规模曲库鲁棒性尚未验证，高保真切换会增加延迟而标准消费级硬件可支撑低延迟运行。

🔗 **开源资源**

- 第三方资源：<https://www.roland.com/global/products/sp-404mk2/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.rodrigoconstanzo.com/karma/> → <https://rodrigoconstanzo.com/karma/> — 链接可访问（HTTP 200）
- 第三方资源：<https://midi.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 35. [没有统一风格本身就是线索：以钢琴为绳串起日本电子音乐的媒介系谱](/posts/conference-icmc-2026-conference-paper-id-paper-39-7008bbfba4/)

> 英文题目：*[The History of Japanese Electroacoustic Music for Piano from the Perspective of Media Genealogy](/posts/conference-icmc-2026-conference-paper-id-paper-39-7008bbfba4/)*

标签：#文献综述方法 #音乐信息检索 #音乐 #音乐理解

评分：**5.2/10** | 创新 1.4/2 | 技术严谨 0.9/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：综述 | 主任务：#音乐理解 | 主方法：#文献综述方法

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Hyunmook Lim：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是解释日本钢琴与电子声音乐为何长期被认为缺乏统一风格，输入为七十余年间分散且多已散佚的作品、装置与文献，输出为按媒介谱系组织的多线历史叙事，难点在于材料碎片化、原始媒介灭失与既有研究多为编年罗列。作者首先以钢琴为锚定范围，依据演奏者背景与早期经典中钢琴在场确立比较基点，为后续跨媒介梳理提供共同参照。接着按改造琴声、扩展键盘、融合扬声三系划分媒介，将环形调制器、磁带机、计算机、电钢琴、MIDI键盘、自动钢琴与扬声器系统分别归入个案，前一步的范围界定直接进入本步的分类框架。然后以当代重构回看失传或失败媒介，如对多声道钢琴作品的圆形声像重演，检验其功能延续，前一步的个案归档为本步重构提供对象。在键盘触发视听任务下，Etude No\.6的编号指标为6，高于Etude No\.1的编号指标1。与按年代或机构叙述不同，该方法以媒介出现、成熟与衰退解释创作动因，把风格缺失重释为多重技术挑战并存，具有重估边缘实践的意义。结论的适用边界限于日本语境下钢琴与电子声个案梳理，不可外推至其他乐器或跨国比较，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 36. [不只掷硬币：把占问、解卦与音乐生成连成参与式仪式的易经系统](/posts/conference-icmc-2026-conference-paper-id-paper-450-610f862f36/)

> 英文题目：*[Music of Changing Lines: Toward a Culturally Situated Approach to the I\-Ching](/posts/conference-icmc-2026-conference-paper-id-paper-450-610f862f36/)*

标签：#生成模型 #大语言模型 #音乐 #音频交互 #音乐生成

评分：**5.2/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#生成模型

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Ling Qi：机构信息未能从会议 PDF 纯文本可靠映射
- Teng Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Alexandria Smith：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是复现易经文王法占问全过程的交互式仪式：输入为用户占问问题与六次三枚铜钱投掷，输出为本卦与之卦的文本判读及与之呼应的环境音乐，难点在于同时保留仪式偶然性、经传语义约束与沉浸听感。摄入阶段仅收集可选姓名与问题以平衡个性化与隐私，其输出的问题文本将直接作为诠释阶段的个性化条件。投掷阶段以基于规则的概率旋律层伴随成卦并刻意隐去语义解读，每爻映射太鼓、筝、尺八等一种乐器并以五声音阶生成循环叠加，其输出的本卦、动爻与之卦进入下一步。诠释阶段检索本卦卦辞与动爻爻辞及之卦卦辞等上下文无关经文，连同问题经提示工程送入Gemini 2\.5 Flash生成针对性判读与情绪能量动态空间关键词，再组装为Lyria提示JSON生成30秒至60秒环境片段。相对Cage将卦象直接映射为时长力度音色的做法，本文把人工智能定位为诠释中介而非作曲权威，保留投掷偶然性的同时恢复变卦语义与参与性。原文未提供可核对的关键定量结果。该系统结论的适用边界止于单次演示的概念验证，跨用户一致性与音乐和判词对齐度尚未验证，依赖外部闭源接口使长期可用性与可复现性受限。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/gleitz/midi-js-soundfonts> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 37. [二十只音箱包住一个甜点：在教室里装下三阶全球声场](/posts/conference-icmc-2026-conference-paper-id-paper-517-abb2982050/)

> 英文题目：*[Studio Report: A Third\-Order Periphonic Ambisonics System for Teaching and Research at FEUP and INESC TEC’s SMC Lab](/posts/conference-icmc-2026-conference-paper-id-paper-517-abb2982050/)*

标签：#教育 #信号处理 #多通道 #空间音频信号 #空间音频渲染

评分：**5.2/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#空间音频渲染 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Jos´e Ricardo Barboza：机构信息未能从会议 PDF 纯文本可靠映射
- Gilberto Bernardes：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该报告针对教学研究实验室在有限房间与预算内实现全球面空间声再现的问题，输入为三阶高阶Ambisonics内容，输出为环绕中央听音点的二十路扬声器信号，难点在于对称空间采样、便携电脑直连兼容与低成本实施难以兼顾。方法链分三步：先比较全景声与波场合成后选定开放高阶Ambisonics路线以保证全球面表示与灵活解码，前者输出进入几何设计；再按正十二面体顶点规划四层仰角环对称布局并推导各扬声器方位角与仰角，其坐标输出进入物理实施；最后完成同轴音箱与多通道音频接口选型、分层支架机械对准，并用解码器角度增益与距离补偿修正残差并统一声压级。与固定声道制式相比，其关键机制差异在于与通道数解耦的球谐中间表示加任意阵列解码，因而同一母版可在扬声器阵列与耳机等多格式间直接迁移。原文未提供可核对的关键定量结果。结论适用边界受限于所述房间的教学演示与初步研究外推，尚未验证更高阶、更大空间或严格定位精度下的表现。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 38. [不学大语料也能变奏：把动机当轨迹、用可控噪声做表情完备的变体](/posts/conference-icmc-2026-conference-paper-id-paper-574-4bca67665c/)

> 英文题目：*[Composer\-in\-the\-Loop Generation of Motivic Variants Using State\-Space Models and Preference Learning](/posts/conference-icmc-2026-conference-paper-id-paper-574-4bca67665c/)*

标签：#软件工具 #偏好优化 #状态空间模型 #音乐 #符号音乐生成

评分：**5.2/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#符号音乐生成 | 主方法：#状态空间模型

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Rodrigo Cadiz：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理符号动机变奏任务，输入为作曲家以ABC记谱法给出的包含音高、节奏、发音与力度的单声部动机，输出为保留身份又具差异的多个变体，难点在于同时控制四维表情并适配个人审美而无需大规模语料。动机编码将事件映射为音程、对数时值、发音门限与响度的参考轨迹，其输出进入卡尔曼启发采样器叠加高斯扰动以生成连续变形，离散编辑层再执行分裂与合并以改变节奏密度，最后由表情推导与偏好学习将连续量转为连线、强弱发夹与重音并用选择信号收紧方差。与依赖大规模语料建模音高与时值的深度生成模型相比，该机制差异在于以参考轨迹加可控不确定性分离结构与创意，并把神经网络限定为方差控制器，其实质意义在于保持作者控制与可解释的交互作曲。在浏览器变体浏览任务设置下，当前展示序号的数量指标为3，低于总变体池容量的数量指标10。原文未提供可核对的关键定量结果，验证仅为浏览器界面演示与定性讨论，未见基线、消融或用户评分。其适用边界受限于单声部短动机、无和声与复调建模，表情映射依赖启发式规则，外推至长结构与非西方音乐尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://rodrigocadiz.github.io/software/state-space-composer> → <https://rodrigocadiz.github.io/software/state-space-composer/> — 链接可访问（HTTP 200）
- 第三方资源：<https://abcnotation.com/wiki/abc:standard:v2.1> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 39. [不控参数而控过程：Hyponoia 把脑电状态变成作曲行为](/posts/conference-icmc-2026-conference-paper-id-paper-482-2cb5a62137/)

> 英文题目：*[Hyponoia: An Affective Computing System for Augmented Musical Performance – A Case Study](/posts/conference-icmc-2026-conference-paper-id-paper-482-2cb5a62137/)*

标签：#时频分析 #用户研究 #音乐 #脑信号 #音乐生成

评分：**5.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.6/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#时频分析

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Penelope Bekiari：机构信息未能从会议 PDF 纯文本可靠映射
- Anastasia Georgaki：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

Hyponoia要解决开放形式电声即兴中演奏者内在神经与自主神经状态难以成为作曲结构的问题，输入为Muse2头戴四通道脑电与并行心率信号，输出为实时演变的电子声层与声场形态，实际难点在于管乐演奏运动伪迹大且生理推断易快速跳变导致听觉不连续。方法链第一步对信号做带通与工频陷波并以2秒滑动窗估计频带功率再跨电极平均，负责得到theta至gamma的连续神经表征。第二步对上一步频带功率做滚动基线归一化与演奏者个体心率归一化，并施加持续约4秒确认与经中性态过渡的时序平滑，负责将连续表征变为稳定可用的状态与唤醒分区。第三步将推断状态与唤醒值经开放声音控制送入Max/MSP触发中性与共振等过程级映射，并在驱动总谱约束下由演奏者与电子层持续互调形成闭环。与直接映射信号到音高或音量的脑机音乐接口不同，该工作把生理推断提升到时间伸展与混响记忆等作曲行为层，其实质是将身体作为结构化音乐形式的生成性媒介。原文未提供可核对的关键定量结果。该结论适用边界受限于受控排练室无观众的小样本声基实践语境，尚未验证舞台噪声、长时漂移与跨演奏者外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 40. [古典符号混搭为何先对终止式再数对位错误](/posts/conference-icmc-2026-conference-paper-id-paper-546-a9f37058ee/)

> 英文题目：*[Classical Music Mashup System and Compatibility Heuristics](/posts/conference-icmc-2026-conference-paper-id-paper-546-a9f37058ee/)*

标签：#检索增强 #主观评测 #音乐 #符号音乐生成

评分：**5.1/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#符号音乐生成 | 主方法：#检索增强

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Yu Foon Darin Chau：机构信息未能从会议 PDF 纯文本可靠映射
- Andrew Horner：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理符号古典钢琴混搭，输入为用户给定的符号乐段与大型符号语料，输出为可演奏乐谱与受控MIDI演绎，难点在于同时保持两首素材的可辨识性、调性终止逻辑与对位可听性。管线先将语料标准化为统一记谱并消除音色与速度干扰，再并行提取声部与动机及逐时刻和声与调性线索，随后按终止式进行走向过滤候选并以对位规则惩罚挑选可同时呈现的片段。相对音频混搭强调和声相似与频谱平衡，该机制把兼容性重心转向终止功能匹配与声部进行合法性，因而更贴合共同实践期写作规范。原文未提供可核对的关键定量结果。听测显示受控钢琴回放下被试更偏好终止逻辑匹配与复调式同时呈现，专家定性反馈亦认为素材首听可辨但持续复调易造成听觉负荷。适用边界限于短片段巴洛克至早期浪漫风格与均匀钢琴音色，未验证长曲式、多乐器、后调性与跨文化风格的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://doi.org/10.5281/zenodo.1416050> → <https://zenodo.org/records/1416050> — 链接可访问（HTTP 200）
- 第三方资源：<https://archives.ismir.net/ismir2021/paper/000022.pdf> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 41. [植物不发声却写谱：生物电与环境数据如何变成可演奏的总谱](/posts/conference-icmc-2026-conference-paper-id-paper-603-c86e15ff86/)

> 英文题目：*[Co\-Composing with Plants: Early Experiments in Bio\-Responsive Score Design](/posts/conference-icmc-2026-conference-paper-id-paper-603-c86e15ff86/)*

标签：#信号处理 #生理信号 #音乐 #符号音乐生成

评分：**5.1/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#符号音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Solomiya Moroz：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolo Merendino：机构信息未能从会议 PDF 纯文本可靠映射
- Massimo Sterlino：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入为叶片表面生物电位与光照、土壤湿度的多模态连续流，输出为六件乐器可视奏的符号总谱，难点在于微弱非平稳生理信号与可演奏记谱结构之间的鸿沟。先由硬件端以叶面原始微电压与环境模拟量为输入，经AD8232前端放大与4阶RC低通滤波及ESP32以100Hz采样并经FreeRTOS双任务保障时序，输出带时戳的本地CSV流；再由物联网端以该CSV流为输入，经MQTT发布至Mosquitto代理并由Python订阅写入MongoDB，输出可回放与实时双路数据源；最后由作曲端以上述数据库实时流为输入，在Max/MSP与bach环境中经4秒节拍驱动映射为限定音域内音高节奏并经bach\.join合成，再由Mira分发输出六声部可视总谱至演奏者iPad。与PlantWave与MIDISprout等TENS刺激式环境声化不同，本工作坚持被动记录内源电活动并生成结构化记谱而非直接发声，使植物成为可被解读的合创者而非被演奏乐器。在非受控排练观察场景下，大音量噪声与低频音乐条件的电信号指标为1900至2400，高于柔和弦乐条件的电信号指标1600至2000。该结论适用边界受限于单株室内原型与小规模试奏，活体音乐家与植物闭环与户外鲁棒性尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://plantsplay.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 42. [卡曼恰琴体为何上半球一变就变声：厚度与音孔的振动证据](/posts/conference-icmc-2026-conference-paper-id-paper-211-88f90afd94/)

> 英文题目：*[Vibrational Analysis of Traditional Persian Kamanche Sound Box: Experimental and Computational Investigation of Structural Modifications](/posts/conference-icmc-2026-conference-paper-id-paper-211-88f90afd94/)*

标签：#信号处理 #音乐信息检索 #音乐 #音乐理解

评分：**5.0/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.7/1.5 | 清晰度 0.6/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音乐理解 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Amir Abbas Orouji：机构信息未能从会议 PDF 纯文本可靠映射
- Ayoub Banoushi：机构信息未能从会议 PDF 纯文本可靠映射
- Gilberto Bernardes：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文针对封闭背板卡曼切裸木音箱的独立结构振动是否影响整体共鸣，输入为直径17 cm、顶孔直径10 cm的桑木球壳几何与各向异性材料参数，输出为0至3100 Hz内20阶模态频率与振型及其对CGCG定弦谐波的支撑判断，难点在于天然木材离散大且膜腔耦合难以从干结构中分离。方法链分三步：先用弹性绳悬挂近似自由边界并以力锤激励与五加速度计获取频响函数，经稳定图与相干性准则提取模态；再以二维轴对称有限元模型校准桑木弹性常数并建立基准干结构模型，前一步实验模态直接作为校准目标进入仿真；最后在保持内腔体积条件下扰动上下半球厚度与音孔面积，并以完整乐器录音频谱关联模态与弦谐波。与Saati等认为音箱振动可忽略的膜主导假设的关键差异在于聚焦球形木壳自身刚度与开口效应，回应了制琴师关于上半球修薄显著改变音色的经验，明确了结构调控高频的实际意义。在模态\-弦耦合关联评测设置下，第5阶模态的模态频率指标为720 Hz，高于第4阶模态的模态频率指标480 Hz。上半球增厚使中频模态频率指标增加8\-15%，整体减薄使全阶模态频率指标降低15\-30%，音孔面积减半效果与上半球加厚相当。该结论适用边界仅限于单只测试音箱的定性趋势，尚未验证膜腔液固耦合、听感评价与跨个体泛化。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 43. [不戴耳机看 VR 音乐会：MetaConcert 如何把头显画面与穹顶声场锁在一起](/posts/conference-icmc-2026-conference-paper-id-paper-404-f18229a397/)

> 英文题目：*[MetaConcert: A Shared VR Audio\-Visual Experience Model Reducing User Isolation Through Synchronized](/posts/conference-icmc-2026-conference-paper-id-paper-404-f18229a397/)*

标签：#信号处理 #多通道 #音视频 #空间音频信号 #空间音频渲染

评分：**5.0/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#空间音频渲染 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Video on HMDs：机构信息未能从会议 PDF 纯文本可靠映射
- HOA Playback on a Multichannel Dome \. 89 Mauro Cantonetti：机构信息未能从会议 PDF 纯文本可靠映射
- Paolo Malpeli：机构信息未能从会议 PDF 纯文本可靠映射
- Giuseppe Rizzo：机构信息未能从会议 PDF 纯文本可靠映射
- Alessandro Anatrini：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以同期采集的球面视频与高阶Ambisonics加近距离点话筒为输入，输出佩戴HMD观看环绕画面同时由房间穹顶听到方向一致固定声场的共享音乐现场，难点是在无耳机条件下维持音画同步与空间一致并保留同场社交互动。方法链第一步是后期制作，将球面视频制成等距长方投影成品，将一阶Ambisonics上混至三阶并把点话筒按乐手方位以SN3D编码融入，其输出作为母带工程输入。第二步是离线解码，用三阶maxrE加权SN3D解码器按16扬声器穹顶布局渲染为16通道离散音频成品，免去体验时实时解码，输出文件与视频文件一同载入在线系统。第三步是在线同步播放，局域网服务器提供页面与视频并做WebSocket与UDP间OSC代理，浏览器端基于WebXR渲染全景而SuperCollider预载音频等待触发，双向OSC负责播放暂停回到开头与视频时间回传以校正漂移。与耳机双耳渲染相比，该机制把声场锚定于房间坐标系从而允许多人共享同一声像并用HMD复位对齐视频前方与穹顶前方，代价是接受串扰房间声学与中央甜点约束。在局域网OSC信令传输设置下，拥塞时OSC传输延迟为10ms，从空闲时OSC传输延迟5ms升至10ms。该结论适用边界仅限单人居中端坐约10分钟短时演示，多人并发长时漂移与换场地移植尚未验证，系统延迟受网络拥塞影响，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 44. [造循环器学信号处理：把录音、叠加与消咔哒声做成可跟做的课程](/posts/conference-icmc-2026-conference-paper-id-paper-99-c90b29a5ec/)

> 英文题目：*[Building Loopers](/posts/conference-icmc-2026-conference-paper-id-paper-99-c90b29a5ec/)*

标签：#教育 #开源工具 #信号处理 #音乐生成

评分：**5.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Jeff Kaiser：机构信息未能从会议 PDF 纯文本可靠映射
- Gregory Taylor：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文针对音乐技术入门课中信号处理概念抽象脱离听觉、成品循环器遮蔽内部机制的困难，目标是输出可演奏的实时循环乐器与可迁移的编程习惯。首先在Max中以tapin~与tapout~、buffer~搭建固定与可变长度基础循环器，建立录音、叠加、反馈与多轨控制，输出基础演奏原型。其次将同一架构在gen~中重构，把时序与内存逻辑转入采样级代码与codebox，负责暴露信号与消息速率差异、内存访问与去咔哒声处理。最后承接gen~版本在RNBO中封装delay~与feedback~版本并导出为插件或嵌入式目标，负责讨论参数映射、可移植性与个性化界面设计。相比直接讲授理论或使用预制循环器，该设计以迭代建构加红黄蓝灰颜色编码与跨环境重复为认知脚手架，使同一概念在不同执行模型中被重新解释。在单学期入门Max课程的课堂观察设置下，第3阶段的参与度得分未报告可用数值，第1阶段的参与度得分同样未报告可用数值，故无法判定前者高于后者，原文未提供可核对的关键定量结果。其结论适用边界受限于单学期入门Max课程的小规模课堂观察，尚未验证长期保持、跨校迁移及与对照教学法的差异。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 45. [不改速度也能听出投入度：用相位性皮电把听众变成节奏控制器](/posts/conference-icmc-2026-conference-paper-id-paper-432-01a9243f72/)

> 英文题目：*[The Singing Skin: An Audience\-Centered Biofeedback System for Musical Interaction Based on Galvanic Skin Response](/posts/conference-icmc-2026-conference-paper-id-paper-432-01a9243f72/)*

标签：#信号处理 #实时处理 #生理信号 #音乐 #音乐生成

评分：**4.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.2/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Eun Ji Oh：机构信息未能从会议 PDF 纯文本可靠映射
- Jun Woo Beck：机构信息未能从会议 PDF 纯文本可靠映射
- Alexandria Smith：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

现场演出中听众交感唤醒难被演奏者实时感知并用于音乐控制，输入为个体差异大且有延迟的皮肤电信号，输出为不破坏和声与速度连贯性的可听表情变化。先在PC1端以10000Hz经Lab Streaming Layer采集皮肤电并做带通滤波与降采样，职责是抑制噪声得到以相位成分为主的信号，输出20Hz相位主导信号；再以该20Hz信号为输入按30s基线做百分位最小最大归一化并按乐句时长开窗平滑，职责是消除个体差异得到0至1有界控制量，输出与速度对齐的平滑控制特征。最后以该平滑控制特征经开放声音控制协议送至PC2为输入，经延迟缓冲对齐上一乐句感知时延后按可调指数映射为0至127的MIDI连续控制器值并路由至Serum低通滤波器截止频率的低频振荡器速率，职责是将唤醒转为节奏细分密度，输出高唤醒更碎、低唤醒更连绵且不改音高速度的声音。在PC1实时采集与分析设置下，原始采集阶段的采样率指标为10,000 Hz，高于降采样后分析阶段的采样率指标为20 Hz。与既往以演奏者脑电肌电生成新素材或结构指令的做法不同，该工作把听众相位皮肤电作为叠加于固定爵士标准曲与小提琴即兴之上的表情层，保留和声框架与演奏自由。结论适用边界限于单听众、固定曲目与受控监听的探索性演示，尚未验证多人聚合与跨曲风泛化，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://xferrecords.com/products/serum> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 46. [用沙子的形状直接捏声音：连续变形材料如何绕开离散手势识别](/posts/conference-icmc-2026-conference-paper-id-paper-463-1f326f21d2/)

> 英文题目：*[Acoustic Interactive Sand Tray Therapy System: An Embodied Interface for Multisensory Sound Interaction](/posts/conference-icmc-2026-conference-paper-id-paper-463-1f326f21d2/)*

标签：#信号处理 #用户研究 #音乐 #音频交互

评分：**4.9/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Yunze Mu：机构信息未能从会议 PDF 纯文本可靠映射
- Lorna Segall：机构信息未能从会议 PDF 纯文本可靠映射
- Zhixin Xu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该系统以浅盘细沙连续变形与精选小物件摆放为输入，以实时合成与变换的声音纹理为输出，难点在于沙面非刚性、高自由度且压实度变化而难以切分为离散手势，单目顶视还易被用户遮挡致表面数据间歇丢失。传感层由顶置深度相机采集表面几何并以C语言程序处理，经开放声音控制协议送往Max/MSP与Unity，其深度流与图像帧直接进入检测与特征环节。检测与特征步骤基于Darknet框架的YOLO v11识别盘内物件类别并输出类别与置信度，再将全盘深度方差提炼为表面平整度、将中心区域相对高度提炼为中央隆起量，并将物件类别编码为离散控制标记。声音引擎接收上述连续特征与离散标记，以Max/MSP与Unity做实时变换与空间呈现、以RTcmix与云端WebRTcmix做参数驱动合成，实现平整度控音色密度、隆起量控谐波聚焦、物件类别切换声音世界的多对多连续映射。与依赖离散传感器或预定义手势词表的触觉乐器不同，该系统以粗粒度感知显著特征驱动连续映射，刻意保留材料含混性以降低认知负荷。在离散事件触发设置下，触发苹果咬合事件的YOLO v11置信度分数为90%以上，高于未触发时YOLO v11置信度分数的90%以下区间。其适用边界限于开放式探索、教学演示与治疗师协助的声音制作，而非精确演奏或临床疗效验证，细粒度手势丢失与顶视遮挡受限仍是失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 47. [把建成的馆再唱出来：以直纹面几何逆转从滑音到建筑的单向路径](/posts/conference-icmc-2026-conference-paper-id-paper-410-25266a1da7/)

> 英文题目：*[Extending Xenakis: From Architectural Geometry to Sonification of the Philips Pavilion](/posts/conference-icmc-2026-conference-paper-id-paper-410-25266a1da7/)*

标签：#开源工具 #信号处理 #音视频 #音乐 #符号音乐生成

评分：**4.7/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#符号音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Changda Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Sunshiyu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Canting Zhu：机构信息未能从会议 PDF 纯文本可靠映射
- Alexandria Smith：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为基于档案图纸重建的Philips Pavilion九曲面包络几何，输出为多声部MIDI作品与同步三维可视化，难点在于把静态空间结构转成兼具运动、静滞与事件对比的时间形式。系统先在Rhino与Grasshopper中重建直纹曲面并反求生成性直纹线，再在其间插值结构线并沿线均匀采样空间点集，形成统一几何数据源。接着线段层的长度与垂直落差被映射为弦乐持续滑音的时长与弯音走向，点集按高度分五层统计密度并线性映射为能量块时长，稀疏子集则按水平坐标与G大调量化为铜管与木管离散事件的音高与节拍化触发。在Philips Pavilion参数化重建任务下，弦乐声部中小提琴的数量指标为12，高于中提琴的数量指标的8。相对Parthenios立面参数对应与Torresan桥梁振动响应听觉化，该工作直接以可参数化几何拓扑作为生成控制结构，区分连续线驱动运动与离散点驱动事件两层逻辑，使建筑成为主动生成乐器。结论适用边界受限于该馆特定曲面体系与G调弦乐加管乐编制，尚未验证对其他风格建筑与交互导航的外推，也未做感知有效性检验。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 48. [在非八度律制里作曲：把微分音高、卡农与实时跟谱装进同一个工作台](/posts/conference-icmc-2026-conference-paper-id-paper-165-c65e912e98/)

> 英文题目：*[Linear A: A Composer’s Integrated Workspace](/posts/conference-icmc-2026-conference-paper-id-paper-165-c65e912e98/)*

标签：#软件工具 #信号处理 #音乐 #符号音乐生成

评分：**4.6/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#符号音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Christopher Trapani：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是为玻伦\-皮尔斯单簧管与实时电子音乐作品Linear A构建从构思到演出的一体化作曲环境，输入为基于特定指法的非平均律微分音线条与未测量时间结构，输出为定稿乐谱与可驱动Antescofo~跟谱的控制文件，难点在于指法音高与实际发声错位、非节拍时间与卡农变换难以在同一界面中对齐试听。第一步以bach库的音高约束与可视化界定可用调律集合，在bach\.roll中突出3:5:7泛音关系并以bach\.circle生成tritave内的调式子集以供试听筛选。第二步在未测量的bach\.roll中以标记规划卡农进入延迟、速度与移调并叠合多声部预演，其输出直接进入量化环节赋予拍号速度与最小单位并补充力度与发音法后导出为可制谱总谱。第三步将历史乐句经MuBu/CataRT切分与Synchronizer按起音列表重对齐为合唱织体并经SuperVP相位声码器渲染，其音高与起音参数与前两步的卡农标记一同转写为跟谱器可读文本以驱动现场缓冲播放。在奇次泛音关系评估任务下，3:5:7和弦中第一音的泛音序号指标为3，低于第二音的泛音序号指标的5。与已有作曲辅助工具相比，关键差异在于同一bach环境同时承载指法与发声两种音高视图、空间记谱与量化记谱两种时间视图以及符号乐谱与跟谱指令两种输出形态，使构思修改直接传导为演出控制而无需跨软件重建。该结论适用边界受限于单部作品、特定乐器与Max/bach/MuBu/SuperVP软件栈组合，尚未验证向其他调律、编制或风格的外推与感知评估，且未报告失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 49. [把语义压缩成卦：用可枚举状态代替声音生成的作曲决策](/posts/conference-icmc-2026-conference-paper-id-paper-723-caff8a5e3f/)

> 英文题目：*[Hexagram\-Based Semantic Composition: Discretizing Embedding Spaces into Symbolic Compositional States for Improvised Performance](/posts/conference-icmc-2026-conference-paper-id-paper-723-caff8a5e3f/)*

标签：#向量量化 #音乐 #符号音乐生成

评分：**4.6/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#符号音乐生成 | 主方法：#向量量化

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Yuan Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Xinran Zhang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入为作曲家自选的中文文本语料，输出为用于数字乐谱的六爻符号状态，其难点在于连续语义计算与具身即兴演奏之间缺乏可数可命名可重复的中介，难以兼顾演奏者能动性与结构化约束。方法链第一步用语言无关BERT语句嵌入LaBSE将每句编码为高维语义向量，负责保留跨语言语义关系作为计算基础。第二步经t分布随机邻域嵌入t\-SNE降至二维并归一化，再经均匀量化为1至8整数对，负责将连续变化压缩为粗糙可解释语义平面并输出可索引计算令牌。第三步将整数对映射为易经六爻结构并配置为六层乐谱条件交由HTML5 Canvas界面呈现，负责把符号状态转化为固定层与开放层配比及稳定与变化倾向的演奏约束。与直接用连续嵌入驱动声音合成或参数调制的主流做法不同，该方法刻意离散化以换取稳定性可重复性与象征兼容性，使语义计算支持作曲决策而非生成声音材料。在听雨五句语料演示场景下，量化下限条件的量化指标为1，低于量化上限条件的量化指标8。在小规模作曲家在场解释的即兴数字乐谱场景下结论适用边界受限，尚未验证自动作曲质量风格泛化或长期稳定性，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 50. [不做提示词混音：在神经音频编解码器的潜空间里直接捏合声音对象](/posts/conference-icmc-2026-conference-paper-id-paper-747-b4e9573781/)

> 英文题目：*[Beyond Musique Concr\`ete: Perceptual Morphing via Audio Latent Embeddings Manipulation](/posts/conference-icmc-2026-conference-paper-id-paper-747-b4e9573781/)*

标签：#向量量化 #听觉与音乐认知 #音乐 #音乐生成

评分：**4.6/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#音乐生成 | 主方法：#向量量化

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Xiangbin Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Du Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Qi Qian：机构信息未能从会议 PDF 纯文本可靠映射
- Maosong Sun：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为两段异质立体声音频波形，输出为解码重建的感知融合波形，难点在于波形域叠加或交叉淡化只能并置幅度而无法生成任一源都不具备的新混合音色，且端到端生成难以实现细粒度可控编辑。首先描述子音频编解码器将双源分别编码为帧对齐的量化潜嵌入并分通道独立处理，输出的潜张量直接送入潜操控函数。其次潜操控函数按固定混合、线性渐变与双纽线循环三种时变权重对潜嵌入加权求和以设计融合轨迹，混合潜向量直接送入解码器。最后高度非线性解码器将偏流形潜算术映射回波形并调和粗层结构与细层音色细节，重建兼具双方特征的混合声音对象，并以龢之地与天两源案例验证流程。相对波形叠加与文本条件生成编辑，该机制关键差异在于直接在连续向量空间插值并依赖解码器充当调和器以实现感知融合而非幅度叠加，且可分层操控残差量化粗细层。在44\.1kHz立体声重建设置下，本工作配置的维度指标为128，低于默认架构的维度指标1024。该结论适用边界受限于卷积编解码器对偏流形输入的容忍能力，跨编解码器鲁棒性与正式听感定量验证尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 51. [静止并不平静：CALM 把身体不稳定翻译成作曲结构](/posts/conference-icmc-2026-conference-paper-id-paper-448-f1121241cb/)

> 英文题目：*[CALM: Translating Somatic Experience into Compositional Structure as a Trauma\-Informed Methodology](/posts/conference-icmc-2026-conference-paper-id-paper-448-f1121241cb/)*

标签：#信号处理 #音乐 #空间音频信号 #音频交互

评分：**4.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Sophie Rose：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

CALM的任务是以双侧身体运动为输入实时生成空间化声音与音乐形式，输出随静止、激活与用力状态演化的和声密度与空间形态，难点在于静止对部分创伤幸存者可能放大内在噪声而触发冻结回忆而非带来平静。方法链分三步：首先由MiMU手套采集双手偏航角、俯仰角与翻滚角并在Max中计算运动速率与运动量，输出相对而非绝对的运动表征；其次将速率与双侧协调阈值转换为MIDI控制信息送入Ableton Live，按激活程度缩放静止与运动音频层幅度并触发滤波延迟等手势徽标效果；最后通过瑜伽体式编排与六通道圆形布局使和声浮现或碎裂，让双侧平衡塑造密度与混响不对称。在六通道圆形空间化表演设置下，右手混响Dry/Wet指标为0–61%，高于左手混响Dry/Wet指标的0–43%。相比把身体当作叠加在既有音乐逻辑上的手势控制器的做法，该工作把迟滞、阻力与非线性当作创伤调节逻辑的结构特征而非待消除误差，以慢交互与受限参数范围换取身体连贯性。其结论适用边界受限于作者身体与特定软硬件配置的表演语境，换身体、换设备或换运动语汇均需重新设计，跨表演者与跨场景外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://mimugloves.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://flowmovement.net/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.apa.org/topics/stress/body> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 52. [把五间录音棚、一张光纤网和一间能改装的演出厅连成实验室：洗足学园的音乐与技术整合报告](/posts/conference-icmc-2026-conference-paper-id-paper-704-209c1886f0/)

> 英文题目：*[Studio Report: Laboratory of Advanced Music Production, Senzoku Gakuen College of Music](/posts/conference-icmc-2026-conference-paper-id-paper-704-209c1886f0/)*

标签：#教育 #信号处理 #空间音频信号 #空间音频渲染

评分：**4.5/10** | 创新 0.5/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#空间音频渲染 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Takeyoshi Mori：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本报告任务是以2025年新建实验室支撑技术驱动的音乐创作表演与聆听，输入是古典爵士影视游戏音乐等多学科教学与国际合作需求，输出是可运行的沉浸式制作展演体系，难点在于同时协调声学空间视觉系统与网络传输的异构约束。先由设施层负责信号采集与重放，输入多类型声源与表演动作，输出可配置声场与舞台基础，提供SSL Duality主录音室与Avid S6全景声室及M\-Studio七点一点四声道空间与三通道投影灯光。再由网络层承接上一步采集信号负责跨空间分发，输入分散节点音视频流，输出集中可处理信号，通过专用高速光纤与Dante音频双通道SDI视频及以太网控制链路将动捕室音乐厅与排练室接入S\-Studio与M\-Studio。最后由创作教学层承接集中处理后的音视频流负责转化为作品与课程训练，输入集中信号与编程工具，输出沉浸式戏剧与杜比全景声直播等演出并反馈回课程设计，由音乐设计课程学生用Max与TouchDesigner完成空间音频编程与影像生成。在录音室配置场景下，主录音室的输入通道数指标为48通道，高于中型录音室的输入通道数指标24通道。相对已有单体工作室报告强调孤立房间器材升级，本文关键机制差异在于跨楼宇实时互联生产，其实际意义是支撑大规模沉浸式戏剧与远程同期全景声录制混音直播。该结论适用边界受限于该校特定场地课程生态与国际合作网络，向其他院校或通用计算机音乐方法的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://47trees.com/> — 链接可访问（HTTP 200）
- 复现相关资源：<https://www.senzoku.ac.jp/music/en> — 链接可访问（HTTP 200）
- 复现相关资源：<https://www.senzoku.ac.jp/music/laboratory/lamp/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 53. [以漫游为方法：古琴即兴、混沌空间与图形谱如何并行转化](/posts/conference-icmc-2026-conference-paper-id-paper-217-22b03c0c82/)

> 英文题目：*[Recursive Radiance: Multimedia Interpretations of Traditional Chinese Aesthetics](/posts/conference-icmc-2026-conference-paper-id-paper-217-22b03c0c82/)*

标签：#LoRA #音乐 #空间音频信号 #音视频生成

评分：**4.4/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音视频生成 | 主方法：#LoRA

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Juan Carlos Vasquez：机构信息未能从会议 PDF 纯文本可靠映射
- Zhonghao Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究输入为古琴曲采真游的原曲演奏与引导即兴、太湖采集物激发的琴弦素材及环境影像与拓印，输出为四通道电声固定媒介作曲与九幅大型悬挂图形乐谱加碎片星座构成的混合物理数字装置，难点是在保持道家漫游与诠释自由的同时实现声音与视觉跨媒介可理解且避免还原式数字化。录音采集先在沉浸声棚以两支AKG414的A/B制式捕获细腻音色与摩擦等物质性噪声，为后续变换提供素材基础。声音变换经纤制合成与采样插值拉向抽象，再经混沌吸引子驱动四扬声器空间扩散，形成九分钟结构闭环。视觉支路经宣纸水油墨实验与墨斗弹线具身记谱，再经太湖蓝晒、高分辨率摄影与三维扫描建档，形成可操控的田野档案。物理数字物理递归回路将照片与扫描转印至织物纸面经手工干预再数字化，并以流模型工作流与太湖数据训练的专用低秩自适应约束生成，使声像共享同一哲学与田野约束。在沉浸声棚回放设置下，空间扩散的通道数指标为4，高于录音采集的通道数指标2。与通用文生图配图或固定声像自动化相比，该机制以减字谱的开放诠释为纽带，使变换与生成均受道家原则与田野材料制约，因而更具文化延续意义。该结论适用边界受限于特定曲目、单一演奏者与特定展演构想，尚未验证跨曲目迁移与观众感知效果，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://m.guoqinwang.com/qu/2155.html> — 链接可访问（HTTP 200）
- 第三方资源：<https://coe.yzu.edu.cn/en/info/1033/1330.htm> — 链接不可用（HTTP 412）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 54. [在机房里吹哨：把生成式 AI 的噪音与污染摆到台前的声音宣言](/posts/conference-icmc-2026-conference-paper-id-paper-343-2d286fe7f8/)

> 英文题目：*[oljud–nq&\#40;n&\#41;: A Sonic Manifesto of Resistance to Generative AI in Music](/posts/conference-icmc-2026-conference-paper-id-paper-343-2d286fe7f8/)*

标签：#时频分析 #环境声 #音乐 #音乐生成

评分：**4.4/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.3/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音乐生成 | 主方法：#时频分析

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Bob Sturm：机构信息未能从会议 PDF 纯文本可靠映射
- Elin Kanhov：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该文输入是对2025年IEEE Big Data研讨会AI音乐生成竞赛征稿中普遍语言与自然和谐修辞的批判，输出是在大学GPU机房完成的现场声音作品oljud—bruit&\#40;n&\#41;及其投稿被拒的过程记录，难点在于如何以非话语的肉身演奏介入工程主导的音乐评价体系而不被收编为常规参赛作品。方法链分三步：先解构征稿话语并关联生成式AI的环境劳工与话语污染论述形成行动纲领，该纲领直接决定总谱的对抗性约束；再据此编写面向任意人数与吹奏乐器的八阶段总谱，其输出作为演奏指令进入机房现场；最后在GPU集群室中演奏录音并混音提交以触发制度反应，录音声谱分析回证机房噪声的非调性本质。在商业成本披露的统计设置下，Suno计算环节的成本指标为\(32,000,000，高于Suno数据环节的成本指标\)2,000。在机房85 dB&\#40;A&\#41;强噪声条件下两位演奏者以九件哨笛与肺部气息同机柜轰鸣对峙。与已有音乐生成研究相比，该机制差异在于把评价对象从模型输出音频倒置为算力源头的噪声肉身现场，意义在于暴露数据中心劳动与能耗的不可听性。结论的适用边界仅限于特定行动主义与对抗性艺术研究语境，尚未验证对音乐生成方法或评价标准的迁移效果，也未验证不同场地与人员规模下的可重复性。现场使用的硬件包括机房内GPU集群与8块RTX 3090相关的MUSAiC设备及两台相距约6米的Zoom H4录音机，原文未系统核算本次行动的训练成本与推理开销。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 55. [年轮作穹顶：把生态录音与语言痕迹做成同心的时间尺度](/posts/conference-icmc-2026-conference-paper-id-paper-467-27ae9499d4/)

> 英文题目：*[Tree Rings: Ecological Memory and Linguistic Traces in an Immersive Dome Composition](/posts/conference-icmc-2026-conference-paper-id-paper-467-27ae9499d4/)*

标签：#扩散模型 #多通道 #环境声 #音视频生成 #空间音频渲染

评分：**4.4/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音视频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Yu Chia Kuo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本作面向穹顶沉浸生态叙事，输入为北方与魁北克森林录音、枯木检波器振动与树木记忆多语言短语，输出为环绕声场与穹幕三维星座，难点在将微观质感放大至景观尺度而不失连贯。先进行生态材料采集与归一，输入为林冠声景、枯木低频振动与多语言文本，职责是保留生物地理痕迹并经翻译归一语言，输出为可处理的素材库与提示集。再将素材库送入颗粒与频谱处理以完成微观到宏观结构化，输入为前一步素材库短片段，职责是以小粒度高密度云提炼爆裂摩擦敲击并经密度激化与风暴质感重组为宽广环境层，输出为两段式能量演化声流。最后将声流送入空间映射与视听耦合，输入为前一步声流与Shap\-E形体，职责是以SpatGRIS经OSC控制同心半径运动并以Max频谱能量映射视觉密度形变与阈值触发，输出为由内向外扩张的声像与呼吸视觉。相比孤立处理声音或影像的既有穹顶作品，该链路以年轮式时间尺度缩放统一组织声像半径与视觉扩张同向耦合，具有整合生态听觉的隐喻意义。原文未提供可核对的关键定量结果。该结论适用边界受限于Satosphere十八米穹顶九十三扬声器卧姿聆听，仰角感知减弱与三元组切换不连续构成失败条件，跨系统跨文化稳定性尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 56. [把运球变成叙事：篮球身体动作如何被转写为六段式电声音乐](/posts/conference-icmc-2026-conference-paper-id-paper-454-4b2078d4ae/)

> 英文题目：*[Reimagining Athletic Gesture: Transforming Basketball Sound into Narrative Electroacoustic Music](/posts/conference-icmc-2026-conference-paper-id-paper-454-4b2078d4ae/)*

标签：#信号处理 #环境声 #空间音频信号 #音乐生成

评分：**4.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Guanjun Qin：机构信息未能从会议 PDF 纯文本可靠映射
- Yunxuan Jia：机构信息未能从会议 PDF 纯文本可靠映射
- Neal Farwell：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该文输入为室内球馆多话筒位实录的运球、鞋底摩擦、篮板篮筐撞击、脚步呼吸与房间底噪，外加结尾短暂体育解说碎片，输出为48kHz24\-bit立体声固定媒介作品FMVP，难点在于高度具象重复的运动声易沦为纪实拼贴，难以支撑怀疑、挣扎与救赎的连续心理弧线。先以环绕与近距离话筒多高度多视角采集约三小时素材并按清晰度、动态稳定性与频谱丰富度筛选出约十分钟分类入库，该输出进入离线变换阶段经颗粒时间拉伸、频谱形态化、动态滤波、卷积混响、移调瞬态增强与自动化空间化重塑为可延展纹理，最后以六段结构A1\-B1\-A2\-B2\-C\-D组织能量曲线并把低频运球塑造成踢鼓类打击乐实现从反思到决断的功能翻转。与既有环境声作品的关键机制差异在于把准备、内省、转化与竞技的运动员周期直接用作曲式能量模型，以具象与抽象间的往复对应身体行动与内心反思的振荡，其实质意义在于为手势驱动环境向叙事音乐转化提供可复用的结构路径。原文未提供可核对的关键定量结果。该结论适用边界受限于单件作品的艺术自证，尚未验证跨场地、跨听众或多通道扩展下的叙事有效性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 57. [把仪式刺绣与磁芯编织缝进同一块布：贴身读取的乐谱装置](/posts/conference-icmc-2026-conference-paper-id-paper-676-c029d95617/)

> 英文题目：*[Magnetic Memory Rushnyk](/posts/conference-icmc-2026-conference-paper-id-paper-676-c029d95617/)*

标签：#信号处理 #音乐 #音频交互 #音乐生成

评分：**4.2/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.3/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Jocelyn Ho：机构信息未能从会议 PDF 纯文本可靠映射
- Margaret Schedel：机构信息未能从会议 PDF 纯文本可靠映射
- Sofy Yuditskaya：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入为手织仪式布面中的磁环与铁磁线分布及表演者手持线圈的接近手势，输出为随位置与移动连续变化的电子声音纹理，实际难点在于磁信号微弱漂移且仪式符号的意义难以量化转译为声音。先由纺织编码接收磁环与铁磁线并负责将其织入经纬形成密度分区，其输出的磁化空间分布直接作为可导航的乐谱场进入电磁读取。再由电磁读取接收该乐谱场与手持感应线圈的移动并负责经电磁感应把通量与极性变化转为微电流，其输出的电流起伏直接作为映射源进入声音合成。最后由声音合成接收微电流与身体移动速度并负责把感应强度映射为滤波与幅度、把极性与速度映射为和声与颗粒密度，从而将电流起伏转译为可听形态。相对追求干净解码的磁存储读取，该设计刻意保留噪声与漂移并把身体接近度作为发声条件，使记忆呈现为需劳作维持的摩擦式具身遭遇。在分层布线图核对设置下，接线图3的层序号指标为3，高于接线图1的层序号指标1。该结论适用边界限于特定手工装置的现场表演场景，更换织物尺度与磁材配方后的稳定性尚未验证。原文未披露训练、推理或部署成本，本工作不涉及机器学习训练。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 58. [空间聆听作为方法：从听觉定位到生态与参与式声音实践](/posts/conference-icmc-2026-conference-paper-id-paper-153-cc69883926/)

> 英文题目：*[Sonic Urgency: Exploring Perceptual, Sociopolitical, and Participatory Dimensions of Spatial Listening](/posts/conference-icmc-2026-conference-paper-id-paper-153-cc69883926/)*

标签：#文献综述方法 #听觉与音乐认知 #空间音频 #音乐理解

评分：**4.1/10** | 创新 1.0/2 | 技术严谨 0.6/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.3/1.5

排名：后50% | 文档类型：综述 | 主任务：#音乐理解 | 主方法：#文献综述方法

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Teresa Carrasco：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入是在地多通道声场与日常聆听经验，输出是将空间感知、现象学阐释与社会政治干预统一起来的空间聆听论述框架，难点在于心理声学测量语言、哲学思辨与参与式艺术实践分属不同话语体系而难以互译。为此作者先以Dickreiter的空间印象与Blauert定位线索建立感知基础，说明房间几何与反射如何塑造可听性与透明度，该声学描述随即进入Schaeffer简化聆听与Smalley频谱形态学的创作语汇转化。接着Nyström的空间质地将离散声点重构为密度与流动的体积材料，其输出的拓扑式声场进入Schafer声景与Krause生物声学的生态聆听环节，被重新理解为可诊断健康与权力关系的栖息地。随后Voegelin的聆听想象与Oliveros的深聆听把生态声场转写为具身的社会空间实践，上一步的场所录音与漫步总谱成为可即兴、可共居的关系性事件。最后KlimaAlarm等参与式作曲把上述实践输出为公共干预装置，以莫尔斯电码鼓击与实时电子变换动员演奏者与公众共同发声，完成从感知到政治的闭环。与已有技术方法相比，其关键机制差异在于以策展拼贴与自传式创作替代模型与对照实验，以亲历性关联建立跨理论可读性而非提出可证伪因果机制，其实质意义在于为教学与创作提供可直接排演的聆听脚本。原文未提供可核对的关键定量结果。该结论适用边界限于艺术阐释与教学语境，尚未验证跨听众跨场地跨文化的可迁移性，在听者缺乏具身参与或声场被强噪声掩蔽时存在失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://walkingfromscores.org/> — 暂时无法访问
- 第三方资源：<https://dorotheeschabert.de/?page_id=41> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 59. [存档不是存文件：用对象/事件翻译把作曲过程留下来并放大参与](/posts/conference-icmc-2026-conference-paper-id-paper-438-c5baeeeeda/)

> 英文题目：*[Amplifying Participation\. The digital Barlow Archive &\#40;dBA&\#41; as an Approach to the Recording of a Digital Computer Music Legacy](/posts/conference-icmc-2026-conference-paper-id-paper-438-c5baeeeeda/)*

标签：#数据集构建 #音乐信息检索 #音乐 #音乐检索

评分：**3.8/10** | 创新 0.8/2 | 技术严谨 0.9/1.5 | 实验充分 0.2/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音乐检索 | 主方法：#数据集构建

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Fabian Czolbe：机构信息未能从会议 PDF 纯文本可靠映射
- Julian Rohrhuber：机构信息未能从会议 PDF 纯文本可靠映射
- Bernd H¨arpfer：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入为 Clarence Barlow（1945\-2023）遗留的原生数字材料，分布于多个硬盘、总量为多 TB，涵盖多语言源代码、算法生成的中间数据集、写作与教学的文本图形、以及记录模拟合成、排练与演出的音频视频，输出为可互操作、可参与式扩充的存档结构，难点在于过程性、迭代性、软件依赖的程序性知识难以形式化，且同一对象常兼具工具、文档与审美产物三重身份。方法链分为三步：先以 arkumu\.nrw 分类将文件映射为机构、作者与事件三元组并链接 Wikidata、可选链接 GND（规范文档，Integrated Authority File）与 LIDO（博物馆藏品描述规范，Lightweight Information Describing Objects），再用 JHOVE 与 DROID 等工具抽取格式与技术元数据并补充硬件、操作系统与依赖描述，最后以对象/事件框架保留分支与重汇关系并用自由文本容纳未定解释。与既有比特保存相比，其机制差异在于把翻译视为转换而非中性编码，显式保留部分规格化以放大参与。原文未提供可核对的关键定量结果。结论仅适用于单人遗产的初期建档阶段，尚未验证跨机构互操作与长期可复用性。原文未披露训练、推理或部署成本，本工作不涉及模型训练。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 60. [作曲家主导与实时约束之间：中心 2025\-2026 四个系统的分工与可复述流程](/posts/conference-icmc-2026-conference-paper-id-paper-373-b94682bedf/)

> 英文题目：*[Studio Report: Center for Computer Music 2025–2026](/posts/conference-icmc-2026-conference-paper-id-paper-373-b94682bedf/)*

标签：#Transformer #音乐 #节拍跟踪 #音乐生成

评分：**3.1/10** | 创新 0.6/2 | 技术严谨 0.5/1.5 | 实验充分 0.3/1.5 | 清晰度 0.6/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#节拍跟踪 | 主方法：#Transformer

会议来源：[官方记录](https://icmc2026.ligeti-zentrum.de/proceedings/) · [官方 PDF](https://icmc2026.ligeti-zentrum.de/wp-content/uploads/2026/07/ICMC2026_proceedings_V2showcase.pdf)

👥 **作者与机构**

- Hefang Ma：机构信息未能从会议 PDF 纯文本可靠映射
- Jingyu Luo：机构信息未能从会议 PDF 纯文本可靠映射
- Paul Francis：机构信息未能从会议 PDF 纯文本可靠映射
- Mara Helmuth：机构信息未能从会议 PDF 纯文本可靠映射
- Sangbong Nam：机构信息未能从会议 PDF 纯文本可靠映射
- Wei\-Huai Chen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文是辛辛那提大学计算机音乐中心2025至2026年度机构报告，任务输入是算法与人工智能辅助作曲、实时可听化与数据驱动合成、节拍跟踪与表演同步等多源项目进展，输出是系统、作品与教学活动的统一汇总，实际难点在于多项目并存且缺乏统一评测目标与可比口径。方法链以实时节拍跟踪与表演同步为主线，第一步负责分块流式推理，直接对麦克风增量音频做前向处理以消除结构延迟并输出激活函数，其输出进入第二步在线检测。第三步负责前向预测，利用最近拍间期在允许速度波动下构造当前拍、下一拍与下下拍的预测窗，并将矩形速度约束掩膜与指数峰值曲线相乘求和形成连续投影以实现零延迟估计。第二步负责在线检测，将激活送入约5秒短期记忆窗口内的在线动态贝叶斯网络，经子节拍塌缩得到时间一致的干净节拍序列后送入预测。相对已有离线配器与离线节拍跟踪，关键机制差异在于以作曲家可控的概率采样和面向现场的前向预测代替离线全局优化，其实质意义是支撑现场演奏与交互式多媒体的实时同步。在实时节拍跟踪任务下，上边界窗的速度容差指标为40%，高于下边界窗的速度容差指标\-40%。原文未提供可核对的关键定量结果。结论适用边界限于本中心课程、音乐会与驻留场景，尚未验证跨曲目、跨演奏者与跨声学环境的泛化能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
