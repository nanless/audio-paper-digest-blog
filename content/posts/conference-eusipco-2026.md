---
title: "eusipco-2026 论文深度解读"
date: 2026-09-13
draft: false
paper_digest_pipeline_owned: true
tags: ["变分自编码器","病理语音评估","波束成形","持续学习","大语言模型","单通道","低资源","端侧运行","端到端","端到端学习","对比学习","对抗鲁棒性","对抗训练","多模态学习","多任务学习","多通道","多语言","发声与构音","房间脉冲响应估计","符号音乐生成","高效推理","工业应用","公平性","关键词检测","环境声","回声消除","检索增强","教育","静默语音接口","可解释性","课程学习","空间音频","空间音频信号","空间音频渲染","跨语言","扩散模型","理论分析","联合声音事件检测定位","零样本","领域适应","流匹配","鲁棒性","轮次切换","麦克风阵列","模型剪枝","模型评估","模型融合","模型压缩","目标说话人提取","脑信号","评测协议","迁移学习","强制对齐","去混响","去削波","弱监督学习","少样本","生成对抗网络","生理信号","生物声学监测","声场重建","声学场景分类","声源定位","声源追踪","时频分析","实时处理","数据标注","数据集","数据集构建","数据清洗","数据增强","说话人匿名化","说话人识别","听觉与音乐认知","统计分析","图神经网络","文本到语音","无监督学习","向量量化","信号处理","形式化分析","严格因果","言语感知","言语神经解码","言语障碍","医疗音频","异常声音检测","音高与旋律提取","音乐","音乐检索","音乐理解","音乐生成","音乐源分离","音乐转录","音频编码","音频大模型","音频分类","音频分离","音频检索","音频深度伪造检测","音频生成","音频事件检测","音频水印","音频修复","音频质量评估","音频字幕生成","音视频","音视频理解","音视频生成","语音","语音编辑","语音分离","语音合成","语音活动检测","语音可懂度评估","语音情感识别","语音生物标志物","语音识别","语音属性识别","语音伪造检测","语音学与音系","语音增强","预训练","长音频处理","正则化","知识蒸馏","指令微调","智能座舱","主动降噪","主观评测","助听器","注意力机制","状态空间模型","自监督学习","自适应滤波","Adapter","CNN","Conformer","RNN","SFT","Transformer"]
categories: ["eusipco-2026 论文"]
description: "共收录 127 篇 eusipco-2026 会议论文的 Reader 深度解读"
paper_digest_page_type: index
paper_digest_reader_quality: "reader-facing-v3"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_scope: "aggregate-primary-task-counts"
---

# eusipco-2026 论文深度解读

本汇总收录 authenticated plan 选择集内全部 127 篇已完成分析、重标和单篇 staging 的论文。

🏷️ 标签说明：本期使用新版受控 taxonomy；热门方向只统计主任务。

## ⚡ 今日概览

✅ authenticated plan 入选 127 篇 → 🔬 深度分析、Reader 与页面投影完成

### 🏷️ 热门方向

| 方向（仅主任务） | 数量 |
|---|---:|
| #音频分类 | 11 篇 |
| #语音增强 | 9 篇 |
| #语音识别 | 7 篇 |
| #目标说话人提取 | 6 篇 |
| #声源定位 | 6 篇 |
| #异常声音检测 | 6 篇 |
| #病理语音评估 | 4 篇 |
| #声场重建 | 4 篇 |
| #音频生成 | 4 篇 |
| #房间脉冲响应估计 | 3 篇 |
| #空间音频渲染 | 3 篇 |
| #音频编码 | 3 篇 |
| #音频分离 | 3 篇 |
| #音频深度伪造检测 | 3 篇 |
| #音频修复 | 3 篇 |
| #语音分离 | 3 篇 |
| #语音情感识别 | 3 篇 |
| #语音伪造检测 | 3 篇 |
| #主动降噪 | 3 篇 |
| #关键词检测 | 2 篇 |
| #回声消除 | 2 篇 |
| #静默语音接口 | 2 篇 |
| #联合声音事件检测定位 | 2 篇 |
| #去混响 | 2 篇 |
| #声源追踪 | 2 篇 |
| #言语神经解码 | 2 篇 |
| #音频检索 | 2 篇 |
| #音频事件检测 | 2 篇 |
| #音频字幕生成 | 2 篇 |
| #语音合成 | 2 篇 |
| #符号音乐生成 | 1 篇 |
| #去削波 | 1 篇 |
| #说话人匿名化 | 1 篇 |
| #说话人识别 | 1 篇 |
| #文本到语音 | 1 篇 |
| #音高与旋律提取 | 1 篇 |
| #音乐检索 | 1 篇 |
| #音乐理解 | 1 篇 |
| #音乐生成 | 1 篇 |
| #音乐源分离 | 1 篇 |
| #音乐转录 | 1 篇 |
| #音频水印 | 1 篇 |
| #音视频理解 | 1 篇 |
| #音视频生成 | 1 篇 |
| #语音编辑 | 1 篇 |
| #语音活动检测 | 1 篇 |
| #语音可懂度评估 | 1 篇 |
| #语音属性识别 | 1 篇 |

## 📊 论文评分排行榜

| 排名 | Reader 中文题目 | 英文题目 | 八维评分 | 分档 | 文档类型 | 主任务 |
|---:|---|---|---|---|---|---|
| 1 | [把未知系统推出去：用代理锚定学习做语音合成来源归属与开放集检测](/posts/conference-eusipco-2026-conference-paper-id-0000736-0c4b891b88/) | [BForSec\-L1\.2: ANCHORING THE UNKNOWN: OPEN\-SET MODEL ATTRIBUTION VIA PROXY\-ANCHOR LEARNING](/posts/conference-eusipco-2026-conference-paper-id-0000736-0c4b891b88/) | **8.1/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频深度伪造检测 |
| 2 | [不拟合频谱而是重放点火脉冲：脉冲串加共振器的发动机声建模](/posts/conference-eusipco-2026-conference-paper-id-0000076-4e806d6169/) | [PHYSICS\-INFORMED NEURAL ENGINE SOUND MODELING WITH DIFFERENTIABLE PULSE\-TRAIN SYNTHESIS](/posts/conference-eusipco-2026-conference-paper-id-0000076-4e806d6169/) | **7.9/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.5/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频生成 |
| 3 | [看不见的生成器：用通用音频语义加图结构抓环境音伪造痕迹](/posts/conference-eusipco-2026-conference-paper-id-0000226-d36ebaa08b/) | [BEYOND THE SEEN: A GENERALIZED FRAMEWORK FOR ENVIRONMENTAL SOUND DEEPFAKE DETECTION](/posts/conference-eusipco-2026-conference-paper-id-0000226-d36ebaa08b/) | **7.9/10** · 创新 1.1/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.5/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频深度伪造检测 |
| 4 | [不靠攻击仿真堆料：用对抗嵌入与时间无关读出做音频水印](/posts/conference-eusipco-2026-conference-paper-id-0000741-2330ab067a/) | [BForSec\-L1\.3: AWARE: AUDIO WATERMARKING VIA ADVERSARIAL RESISTANCE TO EDITS](/posts/conference-eusipco-2026-conference-paper-id-0000741-2330ab067a/) | **7.9/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频水印 |
| 5 | [字幕能帮耳朵分轨吗：CineSubNet 用文本先验做电影对白音乐音效分离](/posts/conference-eusipco-2026-conference-paper-id-0000371-f105db993f/) | [CINESUBNET: A MULTIMODAL ARCHITECTURE FOR TEXT\-DRIVEN CINEMATIC AUDIO SOURCE SEPARATION](/posts/conference-eusipco-2026-conference-paper-id-0000371-f105db993f/) | **7.8/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 方法研究 | #音频分离 |
| 6 | [先调语言模型还是先调声学解码器：法语德语适配的部件级取舍](/posts/conference-eusipco-2026-conference-paper-id-0000471-6f8a334c7c/) | [EUROPEANIZING MODULAR ZERO\-SHOT TTS: A COMPONENT\-LEVEL ADAPTATION FRAMEWORK FOR FRENCH AND GERMAN](/posts/conference-eusipco-2026-conference-paper-id-0000471-6f8a334c7c/) | **7.8/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 系统技术报告 | #文本到语音 |
| 7 | [在离群点占多数时仍要全局最优：用内点最大化做远场声源方向估计](/posts/conference-eusipco-2026-conference-paper-id-0002166-9553aa9e08/) | [SPMuS\-L2\.5: INLIER MAXIMIZATION FOR ROBUST DIRECTION\-OF\-ARRIVAL ESTIMATION IN AD\-HOC MICROPHONE NETWORKS](/posts/conference-eusipco-2026-conference-paper-id-0002166-9553aa9e08/) | **7.6/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #声源定位 |
| 8 | [不重建整张网格：用分支\-主干算子在连续房间空间中查询声场幅值](/posts/conference-eusipco-2026-conference-paper-id-0000346-081c6802e6/) | [SOUND FIELD RECONSTRUCTION WITH AN ATTENTION\-BASED DEEP OPERATOR NETWORK](/posts/conference-eusipco-2026-conference-paper-id-0000346-081c6802e6/) | **7.5/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 方法研究 | #声场重建 |
| 9 | [只用 64 个像素点的振动，能恢复出可懂的语音吗](/posts/conference-eusipco-2026-conference-paper-id-0000721-bd982fbb12/) | [LEARNING BASED SPEECH RECOVERY USING EVENT CAMERAS](/posts/conference-eusipco-2026-conference-paper-id-0000721-bd982fbb12/) | **7.5/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #静默语音接口 |
| 10 | [循环脉冲网络不必全连接：用一维卷积加可学习轴突延迟做语音建模](/posts/conference-eusipco-2026-conference-paper-id-0001676-70e742e36a/) | [SiG\-DML\-L1\.6: COMBINING CONVOLUTION AND DELAY LEARNING IN RECURRENT SPIKING NEURAL NETWORKS](/posts/conference-eusipco-2026-conference-paper-id-0001676-70e742e36a/) | **7.4/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频分类 |
| 11 | [只用距离回声找墙：三对不够稳时如何用几何约束补齐](/posts/conference-eusipco-2026-conference-paper-id-0000326-cf2e17d6d5/) | [ROBUST AND GEOMETRICALLY CONSISTENT ROOM GEOMETRY ESTIMATION USING DISTANCE MEASUREMENTS](/posts/conference-eusipco-2026-conference-paper-id-0000326-cf2e17d6d5/) | **7.2/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #声源定位 |
| 12 | [把“是什么”和“在哪里”分开学：DISSE 用双头解开空间音频文本表示](/posts/conference-eusipco-2026-conference-paper-id-0002827-e124e8c6f5/) | [DISSE: LEARNING DISENTANGLED SOURCE AND SPATIAL REPRESENTATIONS FROM SPATIAL AUDIO–TEXT CONTRASTIVE LEARNING](/posts/conference-eusipco-2026-conference-paper-id-0002827-e124e8c6f5/) | **7.2/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #音频检索 |
| 13 | [干扰比忽高忽低时，如何既压住间歇干扰又不放大噪声：子空间投影修正黎曼平均 RTF](/posts/conference-eusipco-2026-conference-paper-id-0000091-90e7c28920/) | [SUBSPACE METHOD FOR RTF ESTIMATION AND SPEECH ENHANCEMENT USING RIEMANNIAN GEOMETRY](/posts/conference-eusipco-2026-conference-paper-id-0000091-90e7c28920/) | **7.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音增强 |
| 14 | [先按声音配对再看标签对错：把分离质量和分类错误分开算的 S5 评价](/posts/conference-eusipco-2026-conference-paper-id-0000236-9dc6c65cee/) | [METRIC ANALYSIS FOR SPATIAL SEMANTIC SEGMENTATION OF SOUND SCENES](/posts/conference-eusipco-2026-conference-paper-id-0000236-9dc6c65cee/) | **7.1/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频分离 |
| 15 | [通用音频模型靠什么泛化：类特异神经元的覆盖、共享与因果检验](/posts/conference-eusipco-2026-conference-paper-id-0000071-0d90fc8c3c/) | [WHAT DO NEURONS LISTEN TO? A NEURON\-LEVEL DISSECTION OF A GENERAL\-PURPOSE AUDIO MODEL](/posts/conference-eusipco-2026-conference-paper-id-0000071-0d90fc8c3c/) | **7.0/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #音频分类 |
| 16 | [用生成干净样本教判别器：在 FSD50K 里自动挑出单源声音](/posts/conference-eusipco-2026-conference-paper-id-0000256-896d81e40b/) | [FSD50K\-SOLO: AUTOMATED CURATION OF SINGLE\-SOURCE SOUND EVENTS](/posts/conference-eusipco-2026-conference-paper-id-0000256-896d81e40b/) | **7.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 数据集与基准 | #音频分类 |
| 17 | [只给整段录音一句话标签，如何同时学会判断与定位鲸叫](/posts/conference-eusipco-2026-conference-paper-id-0000306-bdf51efa52/) | [WEAKLY SUPERVISED DETECTION AND TEMPORAL LOCALIZATION OF WHALE CALLS IN LONG\-DURATION BIOACOUSTIC DATA](/posts/conference-eusipco-2026-conference-paper-id-0000306-bdf51efa52/) | **7.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频事件检测 |
| 18 | [盲房间脉冲响应生成：用十指标框架看清滤波器与损失谁更有效](/posts/conference-eusipco-2026-conference-paper-id-0000321-a88f438b4c/) | [IN TUNE WITH THE ROOM: ADVANCING BLIND RIR GENERATION THROUGH A COMPREHENSIVE EVALUATION FRAMEWORK](/posts/conference-eusipco-2026-conference-paper-id-0000321-a88f438b4c/) | **7.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #房间脉冲响应估计 |
| 19 | [只用仿真训练时，如何让跟踪模型不再记住仿真痕迹](/posts/conference-eusipco-2026-conference-paper-id-0000011-e5d40f03fd/) | [DOMAIN\-ROBUST SOUND SOURCE TRACKING USING NUISANCE DISENTANGLEMENT](/posts/conference-eusipco-2026-conference-paper-id-0000011-e5d40f03fd/) | **6.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #声源追踪 |
| 20 | [只用一个旁听麦克风，在放音中追踪声速再补偿声场控制](/posts/conference-eusipco-2026-conference-paper-id-0000021-a4c44098d2/) | [ONLINE SINGLE\-CHANNEL AUDIO\-BASED SOUND SPEED ESTIMATION FOR ROBUST MULTI\-CHANNEL AUDIO CONTROL](/posts/conference-eusipco-2026-conference-paper-id-0000021-a4c44098d2/) | **6.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #空间音频渲染 |
| 21 | [把琴体共振还给滤波器：DDSP\-Violin 用弓弦先验约束谐波源](/posts/conference-eusipco-2026-conference-paper-id-0000051-a146c0032c/) | [DDSP\-VIOLIN: PHYSICALLY\-INFORMED CONSTRAINTS FOR DISENTANGLED SOURCE\-FILTER DECOMPOSITION](/posts/conference-eusipco-2026-conference-paper-id-0000051-a146c0032c/) | **6.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #音乐生成 |
| 22 | [把解码和平滑写进同一个概率模型：MSM 如何做到逐采样点的听觉注意解码](/posts/conference-eusipco-2026-conference-paper-id-0001352-d67883c7e1/) | [SAMPLE\-LEVEL EEG\-BASED SELECTIVE AUDITORY ATTENTION DECODING WITH MARKOV SWITCHING MODELS](/posts/conference-eusipco-2026-conference-paper-id-0001352-d67883c7e1/) | **6.9/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #言语神经解码 |
| 23 | [把听力筛查藏进播客静音里：间歇采集能省多少点击又保住多少精度](/posts/conference-eusipco-2026-conference-paper-id-0001606-b549bb9ee0/) | [TEOAE MEASUREMENT BEYOND CLINICAL SETTINGS: INTERMITTENT ACQUISITION AND COMPUTATION IN EVERYDAY AUDIO](/posts/conference-eusipco-2026-conference-paper-id-0001606-b549bb9ee0/) | **6.9/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #异常声音检测 |
| 24 | [一套参数如何同时装下单声道、立体声和 5\.1 环绕声](/posts/conference-eusipco-2026-conference-paper-id-0000036-a2d0d42614/) | [VCNAC: A VARIABLE\-CHANNEL NEURAL AUDIO CODEC FOR MONO, STEREO, AND SURROUND SOUND](/posts/conference-eusipco-2026-conference-paper-id-0000036-a2d0d42614/) | **6.8/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 模型报告 | #音频编码 |
| 25 | [只用 5 到 10 分钟实录，如何扩出 19 小时还带逐采样标注的引擎声](/posts/conference-eusipco-2026-conference-paper-id-0000221-935ca7e4d3/) | [ANALYSIS\-DRIVEN PROCEDURAL GENERATION OF AN ENGINE SOUND DATASET WITH EMBEDDED CONTROL ANNOTATIONS](/posts/conference-eusipco-2026-conference-paper-id-0000221-935ca7e4d3/) | **6.8/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频生成 |
| 26 | [方向不够用时，用距离与混响把几乎重叠的说话人分开](/posts/conference-eusipco-2026-conference-paper-id-0000381-c384305982/) | [REGION\-CONDITIONED TARGET SPEAKER EXTRACTION VIA REVERBERATION CUES AND GAUSSIAN\-KERNEL DISTANCE ENCODING](/posts/conference-eusipco-2026-conference-paper-id-0000381-c384305982/) | **6.8/10** · 创新 1.4/2 · 技术严谨 1.3/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #目标说话人提取 |
| 27 | [把不可微的维特比变成可微模块：线性链条件随机场如何嵌入端到端流程](/posts/conference-eusipco-2026-conference-paper-id-0000396-73f815aa92/) | [ON THE USE OF DIFFERENTIABLE VITERBI DECODING FOR LINEAR\-CHAIN CRFS](/posts/conference-eusipco-2026-conference-paper-id-0000396-73f815aa92/) | **6.8/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音高与旋律提取 |
| 28 | [少样本下音频语言模型适配：用乘积核同时对齐细节与全局语义](/posts/conference-eusipco-2026-conference-paper-id-0000066-fe873d334f/) | [MUKA: MULTI KERNEL AUDIO ADAPTATION OF AUDIO\-LANGUAGE MODELS](/posts/conference-eusipco-2026-conference-paper-id-0000066-fe873d334f/) | **6.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.1/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.1/1.5 | 前50% | 方法研究 | #音频分类 |
| 29 | [用听者自己的双耳线索抓目标说话人：个性化头相关传输函数做双耳提取](/posts/conference-eusipco-2026-conference-paper-id-0000356-0ad84c94b5/) | [BINAURAL TARGET SPEAKER EXTRACTION USING INDIVIDUALIZED HRTF](/posts/conference-eusipco-2026-conference-paper-id-0000356-0ad84c94b5/) | **6.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #目标说话人提取 |
| 30 | [不用干净语音和 transcript，能否用端到端识别的不确定性估计每个词的可懂度](/posts/conference-eusipco-2026-conference-paper-id-0000161-61eb7cc215/) | [BLIND, MICROSCOPIC METRICS OF HUMAN SPEECH INTELLIGIBILITY USING END\-TO\-END SPEECH RECOGNITION](/posts/conference-eusipco-2026-conference-paper-id-0000161-61eb7cc215/) | **6.6/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音可懂度评估 |
| 31 | [链式推理何时帮倒忙：语音理解与描述中的显式思维链、课程学习与槽填充对照](/posts/conference-eusipco-2026-conference-paper-id-0000446-afe63d3157/) | [BREAKING THE CHAIN: EVALUATING COT AND SLOT FILLING FOR SPEECH CAPTIONING AND UNDERSTANDING AND RELEASING CAPTIONS FOR 5,000 HOURS OF SPEECH](/posts/conference-eusipco-2026-conference-paper-id-0000446-afe63d3157/) | **6.6/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频字幕生成 |
| 32 | [用音素识别度量声道形状合成：当逐点距离看不出时间稳定性时怎么办](/posts/conference-eusipco-2026-conference-paper-id-0000461-b6c3444222/) | [EVALUATING SPEECH ARTICULATION SYNTHESIS WITH ARTICULATORY PHONEME RECOGNITION](/posts/conference-eusipco-2026-conference-paper-id-0000461-b6c3444222/) | **6.6/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #语音识别 |
| 33 | [眼镜框上有麦、耳朵处无麦：辅助滤波器为何在方向偏离时失效](/posts/conference-eusipco-2026-conference-paper-id-0000966-261fd65669/) | [ACTIVE NOISE CONTROL FOR AUGMENTED REALITY GLASSES USING VIRTUAL SENSING WITH DIRECTIONAL ROBUSTNESS](/posts/conference-eusipco-2026-conference-paper-id-0000966-261fd65669/) | **6.6/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 0.8/1.5 · 清晰度 0.6/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #主动降噪 |
| 34 | [剪掉反而更准：解码器自注意力与深层编码器的冗余在哪里](/posts/conference-eusipco-2026-conference-paper-id-0000146-91fba44af9/) | [PRUNING AS REGULARIZATION: SENSITIVITY\-AWARE ONE\-SHOT PRUNING IN ASR](/posts/conference-eusipco-2026-conference-paper-id-0000146-91fba44af9/) | **6.5/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音识别 |
| 35 | [把去噪和去混响写进同一优化展开：多麦克风前向后向网络如何同时用上房间模型与学习先验](/posts/conference-eusipco-2026-conference-paper-id-0000421-5e1da02f88/) | [UNFOLDING FOR AUDIO QUALITY IMPROVEMENT IN THE PRESENCE OF NOISE AND REVERBERATION](/posts/conference-eusipco-2026-conference-paper-id-0000421-5e1da02f88/) | **6.5/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 方法研究 | #语音增强 |
| 36 | [把回授当成晚期混响：去混响滤波器何以同时做声反馈抑制](/posts/conference-eusipco-2026-conference-paper-id-0000191-7b581de4d2/) | [ON THE USE OF DEREVERBERATION FOR ACOUSTIC FEEDBACK CANCELLATION](/posts/conference-eusipco-2026-conference-paper-id-0000191-7b581de4d2/) | **6.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.6/1.5 | 前50% | 方法研究 | #去混响 |
| 37 | [把削波变成可逆折叠：用溢出对抗削波的音频采集](/posts/conference-eusipco-2026-conference-paper-id-0000411-863af83cb5/) | [DIGITAL AUDIO VIA UNLIMITED SENSING: OVERFLOW OVERCOMES CLIPPING AND OVERFLOW](/posts/conference-eusipco-2026-conference-paper-id-0000411-863af83cb5/) | **6.4/10** · 创新 1.5/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.1/1.5 | 前50% | 方法研究 | #去削波 |
| 38 | [把感知显著性压进粗结构：噪声增强自编码器如何对齐音乐表征](/posts/conference-eusipco-2026-conference-paper-id-0000041-7cac7d8d25/) | [PERCEPTUALLY ALIGNING REPRESENTATIONS OF MUSIC VIA NOISE\-AUGMENTED AUTOENCODERS](/posts/conference-eusipco-2026-conference-paper-id-0000041-7cac7d8d25/) | **6.3/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #音频编码 |
| 39 | [噪声下保住机器线索：用保留混合表示做域泛化异常声音检测](/posts/conference-eusipco-2026-conference-paper-id-0000231-44ee26d126/) | [RETAINING MIXTURE REPRESENTATIONS FOR DOMAIN GENERALIZED ANOMALOUS SOUND DETECTION](/posts/conference-eusipco-2026-conference-paper-id-0000231-44ee26d126/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.2/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #异常声音检测 |
| 40 | [双耳定位先选对时频特征：两特征够用域内，多样内容才需通道谱加双耳线索](/posts/conference-eusipco-2026-conference-paper-id-0000266-3b324d10fd/) | [SYSTEMATIC EVALUATION OF TIME\-FREQUENCY FEATURES FOR BINAURAL SOUND SOURCE LOCALIZATION](/posts/conference-eusipco-2026-conference-paper-id-0000266-3b324d10fd/) | **6.3/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #声源定位 |
| 41 | [双模态变差、三模态恢复：用聚合标记锚定含噪转写的流利度评估](/posts/conference-eusipco-2026-conference-paper-id-0000451-ee0be9735a/) | [TRIMODAL FUSION WITH N\-GRAM REPETITION FOR AUTOMATIC FLUENCY ASSESSMENT](/posts/conference-eusipco-2026-conference-paper-id-0000451-ee0be9735a/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音属性识别 |
| 42 | [混响一重噪声一来就失准：用场景嵌入去拨动音频与运动的融合闸门](/posts/conference-eusipco-2026-conference-paper-id-0001207-388f41b492/) | [CONTEXT\-AWARE SENSOR FUSION: ROBUST 6DOF AUDIO TRACKING VIA SOUND SCENE ANALYSIS](/posts/conference-eusipco-2026-conference-paper-id-0001207-388f41b492/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #联合声音事件检测定位 |
| 43 | [带底噪也要无缝改口：先分离再压残留噪声的语音编辑](/posts/conference-eusipco-2026-conference-paper-id-0000476-b53836047e/) | [SEAMLESSEDIT: BACKGROUND NOISE AWARE ZERO\-SHOT SPEECH EDITING WITH IN\-CONTEXT ENHANCEMENT](/posts/conference-eusipco-2026-conference-paper-id-0000476-b53836047e/) | **6.2/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #语音编辑 |
| 44 | [低信噪比下参考信号不可靠、矩阵太大：用主特征向量重建参考并压缩延迟观测的 WPE](/posts/conference-eusipco-2026-conference-paper-id-0000976-e72fc34c1a/) | [ROBUST SPEECH DEREVERBERATION BASED ON SIGNAL COMPRESSION AND REFERENCE SIGNAL RECONSTRUCTION](/posts/conference-eusipco-2026-conference-paper-id-0000976-e72fc34c1a/) | **6.2/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #去混响 |
| 45 | [采集条件会改变声音：用元数据调制音频 Transformer 的内部表示](/posts/conference-eusipco-2026-conference-paper-id-0001322-37d1a79ef4/) | [METADATA\-CONDITIONED AUDIO TRANSFORMERS FOR ADAPTIVE RESPIRATORY SOUND CLASSIFICATION](/posts/conference-eusipco-2026-conference-paper-id-0001322-37d1a79ef4/) | **6.2/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频分类 |
| 46 | [吉他没有力度真值时，如何让转录模型学会力度又不丢掉音高精度](/posts/conference-eusipco-2026-conference-paper-id-0000061-426bd9b3ba/) | [VELOCITY PREDICTION IN AUTOMATIC GUITAR TRANSCRIPTION](/posts/conference-eusipco-2026-conference-paper-id-0000061-426bd9b3ba/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音乐转录 |
| 47 | [只用单阵列相位谱估计说话人朝向：混响为何反而有帮助](/posts/conference-eusipco-2026-conference-paper-id-0000086-d7b2218e61/) | [SPEAKER HEAD ORIENTATION ESTIMATION WITH A SINGLE MICROPHONE ARRAY USING PHASE SPECTROGRAM FEATURES](/posts/conference-eusipco-2026-conference-paper-id-0000086-d7b2218e61/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #声源定位 |
| 48 | [低信噪比谐波噪声下先做循环平稳波束形成再做神经网络去噪](/posts/conference-eusipco-2026-conference-paper-id-0000106-9fbbc28fcc/) | [A TWO\-STEP APPROACH FOR SPEECH ENHANCEMENT IN LOW\-SNR SCENARIOS USING CYCLOSTATIONARY BEAMFORMING AND DNNS](/posts/conference-eusipco-2026-conference-paper-id-0000106-9fbbc28fcc/) | **6.1/10** · 创新 1.4/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音增强 |
| 49 | [小模型留不住背景声：用分块蒸馏把双分支个性化增强做进端侧](/posts/conference-eusipco-2026-conference-paper-id-0000206-4b3a4db097/) | [TOWARDS ON\-EDGE PERSONALIZED SPEECH ENHANCEMENT WITH FEATURE\-BASED KNOWLEDGE DISTILLATION](/posts/conference-eusipco-2026-conference-paper-id-0000206-4b3a4db097/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #目标说话人提取 |
| 50 | [700 个等效源算不动时：用能量加权方向聚类保住早期反射](/posts/conference-eusipco-2026-conference-paper-id-0000331-57abac4c60/) | [CLUSTERING OF TIME\-DOMAIN EQUIVALENT SOURCES FOR EFFICIENT SOUND FIELD REPRODUCTION](/posts/conference-eusipco-2026-conference-paper-id-0000331-57abac4c60/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #声场重建 |
| 51 | [同位置配准的瞬时相对传递函数为何比声纹和波达方向更适合混响多麦提取](/posts/conference-eusipco-2026-conference-paper-id-0000376-119a7e0e9e/) | [END\-TO\-END MULTI\-MICROPHONE SPEAKER EXTRACTION USING RELATIVE TRANSFER FUNCTIONS](/posts/conference-eusipco-2026-conference-paper-id-0000376-119a7e0e9e/) | **6.1/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.6/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #目标说话人提取 |
| 52 | [只用朗读时的停顿和用词，能反推中风病灶在哪、有多大吗](/posts/conference-eusipco-2026-conference-paper-id-0001332-e31288936b/) | [ATTENTION\-BASED FUSION OF SPEECH FLUENCY FEATURES FOR STROKE LESION MAPPING](/posts/conference-eusipco-2026-conference-paper-id-0001332-e31288936b/) | **6.1/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 应用研究 | #病理语音评估 |
| 53 | [移动中不掉对比度：用块矩阵把整段轨迹的滤波器一起算](/posts/conference-eusipco-2026-conference-paper-id-0000026-ffffc31d28/) | [DYNAMIC SOUND ZONE CONTROL CONSIDERING MOVEMENT SMOOTHING BY BLOCK MATRIX](/posts/conference-eusipco-2026-conference-paper-id-0000026-ffffc31d28/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #空间音频渲染 |
| 54 | [先读出发音再写出文字：音素前置如何约束语音大模型的声学对齐](/posts/conference-eusipco-2026-conference-paper-id-0000136-3131d3f04a/) | [PHONEME\-FIRST PREDICTION FOR LLM\-BASED SPEECH RECOGNITION](/posts/conference-eusipco-2026-conference-paper-id-0000136-3131d3f04a/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音识别 |
| 55 | [零样本能认情绪，却认得不公平：Qwen2\-Audio 多类别公平性审计](/posts/conference-eusipco-2026-conference-paper-id-0000176-c5acc51b7a/) | [MULTICLASS FAIRNESS ANALYSIS OF QWEN2\-AUDIO IN SPEECH EMOTION RECOGNITION](/posts/conference-eusipco-2026-conference-paper-id-0000176-c5acc51b7a/) | **6.0/10** · 创新 1.1/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 应用研究 | #语音情感识别 |
| 56 | [把大模型的回声控制能力压缩到小模型：知识蒸馏如何弥补轻量化损失](/posts/conference-eusipco-2026-conference-paper-id-0000181-bed6aed788/) | [KNOWLEDGE DISTILLATION FOR EFFICIENT ACOUSTIC ECHO CONTROL](/posts/conference-eusipco-2026-conference-paper-id-0000181-bed6aed788/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #回声消除 |
| 57 | [实数做幅度掩蔽、复数做残差修正：参数对齐下的混合语音增强](/posts/conference-eusipco-2026-conference-paper-id-0000216-ff771d2e74/) | [HYBRID REAL\- AND COMPLEX\-VALUED NEURAL NETWORK ARCHITECTURE FOR SPEECH ENHANCEMENT](/posts/conference-eusipco-2026-conference-paper-id-0000216-ff771d2e74/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音增强 |
| 58 | [把命名识别改成音频文本配对：CLAP 如何绕开失语症转写的脆弱环节](/posts/conference-eusipco-2026-conference-paper-id-0000296-99d0e6e77e/) | [CLAP\-BASED AUTOMATIC WORD NAMING RECOGNITION IN POST\-STROKE APHASIA](/posts/conference-eusipco-2026-conference-paper-id-0000296-99d0e6e77e/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #关键词检测 |
| 59 | [伪造痕迹不在整段语音里，而在背景、低频与混响中：音频深伪检测的成分拆解](/posts/conference-eusipco-2026-conference-paper-id-0000431-4703a200bd/) | [ON THE TRACES OF AUDIO DEEPFAKES: ANALYSIS OF AUDIO COMPONENTS FOR DETECTION](/posts/conference-eusipco-2026-conference-paper-id-0000431-4703a200bd/) | **6.0/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #音频深度伪造检测 |
| 60 | [没有文字转写时，如何用图像字幕把语音和书面词连起来](/posts/conference-eusipco-2026-conference-paper-id-0000436-d0ff2e1e46/) | [CONNECTING SPEECH TO WORDS THROUGH IMAGES](/posts/conference-eusipco-2026-conference-paper-id-0000436-d0ff2e1e46/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #关键词检测 |
| 61 | [不用重训练也能拧动音高与时值：残差流线性方向与正交解耦](/posts/conference-eusipco-2026-conference-paper-id-0000056-941e8cac8c/) | [LATENT SPACE DISENTANGLEMENT VIA ACTIVATION STEERING FOR INTERPRETABLE ATTRIBUTE CONTROL IN SYMBOLIC MUSIC GENERATION](/posts/conference-eusipco-2026-conference-paper-id-0000056-941e8cac8c/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #符号音乐生成 |
| 62 | [配准耳甲几何能压缩多少个性化 HRTF 信息：30 维 PCA 与多域损失的受控对照](/posts/conference-eusipco-2026-conference-paper-id-0000261-f673605585/) | [REGISTERED 3D EAR GEOMETRY FOR PERSONALIZED HRTF SYNTHESIS: LATENT SHAPE MODELING AND MULTI\-DOMAIN LOSS MODELING](/posts/conference-eusipco-2026-conference-paper-id-0000261-f673605585/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #空间音频渲染 |
| 63 | [房间脉冲响应里自带的噪声底：卷积进语音后为何造成训练与真实录音失配](/posts/conference-eusipco-2026-conference-paper-id-0000316-b87a0bc397/) | [EFFECT OF NOISE MODEL MISMATCH ON ROOM\-IMPULSE\-RESPONSE REPRESENTATION LEARNING](/posts/conference-eusipco-2026-conference-paper-id-0000316-b87a0bc397/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频分类 |
| 64 | [稀疏观测下只保留跨人一致的多尺度结构：掩蔽小波散射神经场做 HRTF 上采样](/posts/conference-eusipco-2026-conference-paper-id-0000341-294fb21642/) | [MASKED WAVELET SCATTERING TRANSFORM NEURAL FIELD FOR SOUND FIELD RECONSTRUCTION](/posts/conference-eusipco-2026-conference-paper-id-0000341-294fb21642/) | **5.9/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #声场重建 |
| 65 | [只共享频谱不共享空间：去中心化 ILRMA 如何在分布式麦克风阵列上分离](/posts/conference-eusipco-2026-conference-paper-id-0000351-c8ee03c3b5/) | [DECENTRALIZED INDEPENDENT LOW\-RANK MATRIX ANALYSIS FOR BLIND SOURCE SEPARATION ON DISTRIBUTED MICROPHONE ARRAYS](/posts/conference-eusipco-2026-conference-paper-id-0000351-c8ee03c3b5/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音分离 |
| 66 | [不用黑盒记频谱：用运动、相位与气流三组物理量做边缘端重放检测](/posts/conference-eusipco-2026-conference-paper-id-0000416-d0e3247dff/) | [LIGHTWEIGHT REPLAY ATTACK DETECTION VIA INTERPRETABLE PHYSICAL DESCRIPTORS](/posts/conference-eusipco-2026-conference-paper-id-0000416-d0e3247dff/) | **5.9/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音伪造检测 |
| 67 | [只重建正常包络：用 LPC 谱加 NMF 记忆约束异常声音检测的重建](/posts/conference-eusipco-2026-conference-paper-id-0001112-99a4015286/) | [MEMNMF: MEMORY\-AUGMENTED NMF ON LPC SPECTRA FOR ANOMALOUS SOUND DETECTION](/posts/conference-eusipco-2026-conference-paper-id-0001112-99a4015286/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #异常声音检测 |
| 68 | [推理时才给方向图：同一网络如何装下多种指向性](/posts/conference-eusipco-2026-conference-paper-id-0000096-ec1952e826/) | [NEURAL DIRECTIONAL FILTERING WITH CONFIGURABLE DIRECTIVITY PATTERN AT INFERENCE](/posts/conference-eusipco-2026-conference-paper-id-0000096-ec1952e826/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.6/1.5 | 前50% | 方法研究 | #音频分离 |
| 69 | [不均匀噪声下同时算出传递函数与各通道噪声：可学习的确定性最大似然波束形成](/posts/conference-eusipco-2026-conference-paper-id-0000101-d0163b12ab/) | [A LEARNABLE MAXIMUM\-LIKELIHOOD MODEL OF AD\-HOC MICROPHONE ARRAYS WITH UNBALANCED NOISE PSDS](/posts/conference-eusipco-2026-conference-paper-id-0000101-d0163b12ab/) | **5.8/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #语音增强 |
| 70 | [看不准也要说准：用不确定性估计误差并挑出难样本做说话人自适应](/posts/conference-eusipco-2026-conference-paper-id-0000131-47f83aecea/) | [LEVERAGING UNCERTAINTY IN VISUAL SPEECH RECOGNITION: ERROR ESTIMATION AND ACTIVE LEARNING FOR SPEAKER ADAPTATION](/posts/conference-eusipco-2026-conference-paper-id-0000131-47f83aecea/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #静默语音接口 |
| 71 | [语系相近是否可迁移：以新拉丁语族检验跨语言语音情感识别的边界](/posts/conference-eusipco-2026-conference-paper-id-0000166-d5a9909951/) | [TACKLING CROSS\-LINGUAL GENERALIZATION IN SPEECH EMOTION RECOGNITION VIA LINGUISTIC GROUPING: A SPOTLIGHT ON NEO\-LATIN LANGUAGES](/posts/conference-eusipco-2026-conference-paper-id-0000166-d5a9909951/) | **5.8/10** · 创新 1.1/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 应用研究 | #语音情感识别 |
| 72 | [用颜色说情绪：把语音情绪变成可回归、可解释的色相、饱和度与明度](/posts/conference-eusipco-2026-conference-paper-id-0000171-740fd3b93c/) | [COLOR\-BASED EMOTION REPRESENTATION FOR SPEECH EMOTION RECOGNITION](/posts/conference-eusipco-2026-conference-paper-id-0000171-740fd3b93c/) | **5.8/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #语音情感识别 |
| 73 | [不改模型也能治啸叫：用啸叫与降噪混合数据微调语音增强网络](/posts/conference-eusipco-2026-conference-paper-id-0000211-619eb38ff4/) | [ACOUSTIC HOWLING SUPPRESSION ENHANCEMENT BY FINE\-TUNING DEEP SPEECH ENHANCEMENT NETWORKS](/posts/conference-eusipco-2026-conference-paper-id-0000211-619eb38ff4/) | **5.8/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音增强 |
| 74 | [只反转波形不删除人声：分段逆放如何同时保住场景与音质](/posts/conference-eusipco-2026-conference-paper-id-0000251-d5a36ad1a4/) | [SPEECH CONTENT PRIVACY IN ENVIRONMENTAL SOUND RECORDINGS USING SEGMENT\-WISE WAVEFORM REVERSAL](/posts/conference-eusipco-2026-conference-paper-id-0000251-d5a36ad1a4/) | **5.8/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #说话人匿名化 |
| 75 | [移动脑电跨被试解码注意说话人：对比学习为何比只重建包络更稳](/posts/conference-eusipco-2026-conference-paper-id-0000276-b371dbf8a6/) | [SUBJECT‑INDEPENDENT AUDITORY ATTENTION DECODING FROM MOBILE EEG VIA CONTRASTIVE LEARNING](/posts/conference-eusipco-2026-conference-paper-id-0000276-b371dbf8a6/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #言语神经解码 |
| 76 | [病理语音不够、又不一样：三类数据增强到底谁能补上增强性能](/posts/conference-eusipco-2026-conference-paper-id-0000291-2ce157aea2/) | [DATA AUGMENTATION FOR PATHOLOGICAL SPEECH ENHANCEMENT](/posts/conference-eusipco-2026-conference-paper-id-0000291-2ce157aea2/) | **5.8/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #语音增强 |
| 77 | [肺音没有干净配对时如何去噪：复数时频 U\-Net 的分层合成与相位重建路线](/posts/conference-eusipco-2026-conference-paper-id-0000301-4cdc28b698/) | [DENOISING OF LUNG SOUND RECORDINGS WITH A TIME\-FREQUENCY U\-NET](/posts/conference-eusipco-2026-conference-paper-id-0000301-4cdc28b698/) | **5.8/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频修复 |
| 78 | [近场麦克风串音：用输入通道随机置换逼模型学空间关系](/posts/conference-eusipco-2026-conference-paper-id-0000366-7bdb1e0f8a/) | [LEARNING INPUT\-CHANNEL PERMUTATION EQUIVARIANCE FOR MULTI\-CHANNEL SOURCE SEPARATION: REDUCING BLEEDING IN SMALL MUSIC ENSEMBLES](/posts/conference-eusipco-2026-conference-paper-id-0000366-7bdb1e0f8a/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音乐源分离 |
| 79 | [场景决定何为噪声：自动上下文去噪如何先判场景再去异物](/posts/conference-eusipco-2026-conference-paper-id-0000426-b3555c1803/) | [AUTOMATIC CONTEXTUAL AUDIO DENOISING](/posts/conference-eusipco-2026-conference-paper-id-0000426-b3555c1803/) | **5.8/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #音频修复 |
| 80 | [帧长跟着声门走：用基音周期对齐傅里叶分析的动态帧谱特征](/posts/conference-eusipco-2026-conference-paper-id-0000441-9970b8e61b/) | [DYNAMIC FRAME LENGTH FOR SPEECH SPECTRAL MAGNITUDE FEATURES](/posts/conference-eusipco-2026-conference-paper-id-0000441-9970b8e61b/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.6/1.5 | 前50% | 方法研究 | #音频分类 |
| 81 | [冻住检测器、只训练回溯翻译器：持续伪造语音检测里的遗忘与适配矛盾](/posts/conference-eusipco-2026-conference-paper-id-0000796-4c518862e6/) | [BForSec\-P1\.9: TRACEBACK TRANSLATORS AGAINST FORGETTING IN CONTINUAL FAKE SPEECH DETECTION](/posts/conference-eusipco-2026-conference-paper-id-0000796-4c518862e6/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音伪造检测 |
| 82 | [测试时不知道机器是谁：异常声音检测的身份依赖与隐式识别](/posts/conference-eusipco-2026-conference-paper-id-0001107-023e779c88/) | [HOW MUCH DOES MACHINE IDENTITY MATTER IN ANOMALOUS SOUND DETECTION AT TEST TIME?](/posts/conference-eusipco-2026-conference-paper-id-0001107-023e779c88/) | **5.8/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #异常声音检测 |
| 83 | [同向干扰难分开时：用跨阵列非目标估计做后置滤波的声点形成](/posts/conference-eusipco-2026-conference-paper-id-0000116-fba08c36f8/) | [AUDIO SPOTFORMING VIA POST\-FILTERING USING CROSS\-ARRAY NON\-TARGET ESTIMATES](/posts/conference-eusipco-2026-conference-paper-id-0000116-fba08c36f8/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #目标说话人提取 |
| 84 | [解码器才是瓶颈：冻结语音编码器与印度大模型做印英混读识别](/posts/conference-eusipco-2026-conference-paper-id-0000156-73ec7af37f/) | [CROSS\-MODAL ALIGNMENT OF SPEECH ENCODERS AND INDIC LLMS FOR HINDI\-ENGLISH CODE\-SWITCHING ASR](/posts/conference-eusipco-2026-conference-paper-id-0000156-73ec7af37f/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.6/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音识别 |
| 85 | [把转录文本连成图：用主体词关系检测阿尔茨海默症](/posts/conference-eusipco-2026-conference-paper-id-0000286-3716e87f61/) | [FROM ASR TO GRAPHS: GRAPH REPRESENTATION LEARNING FOR ALZHEIMER’S DEMENTIA DETECTION FROM SPONTANEOUS SPEECH](/posts/conference-eusipco-2026-conference-paper-id-0000286-3716e87f61/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #病理语音评估 |
| 86 | [简单输入画不准、精细能量难手绘：AudioSketch 如何调制出有语义的时间能量](/posts/conference-eusipco-2026-conference-paper-id-0000391-351a9e0fc9/) | [AUDIOSKETCH: CONTROLLABLE IMAGE\-TO\-AUDIO GENERATION VIA SEMANTIC\-TEMPORAL ENERGY MODULATION](/posts/conference-eusipco-2026-conference-paper-id-0000391-351a9e0fc9/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频生成 |
| 87 | [主噪声关不掉时，如何把扬声器漏进参考麦的声音减掉](/posts/conference-eusipco-2026-conference-paper-id-0000981-8bfe3e2190/) | [ACOUSTIC FEEDBACK PATH MITIGATION FOR MULTICHANNEL ACTIVE NOISE CONTROL](/posts/conference-eusipco-2026-conference-paper-id-0000981-8bfe3e2190/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #主动降噪 |
| 88 | [未见声音总被判成熟悉声音：用属性生成补数据，再用分布检测先分流](/posts/conference-eusipco-2026-conference-paper-id-0001122-5f1863ed21/) | [GENERALIZED ZERO\-SHOT LEARNING OF ACOUSTIC EVENT USING ATTRIBUTE\-CONDITIONED GAN AND OUT\-OF\-DISTRIBUTION DETECTOR](/posts/conference-eusipco-2026-conference-paper-id-0001122-5f1863ed21/) | **5.7/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #音频分类 |
| 89 | [声音太像说不出差别：用两阶段跨音频解码逼出可比的描述](/posts/conference-eusipco-2026-conference-paper-id-0001127-0ea0649235/) | [INTER\-AUDIO DIVERSE DECODING FOR AUDIO DIFFERENCE CAPTIONING IN UNSUPERVISED ANOMALOUS SOUND DETECTION SCENARIOS](/posts/conference-eusipco-2026-conference-paper-id-0001127-0ea0649235/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频字幕生成 |
| 90 | [把得分函数学准：用分数匹配为独立向量抽取训练可解析求导的正弦源模型](/posts/conference-eusipco-2026-conference-paper-id-0001197-eef911707b/) | [LEARNING SOURCE MODEL FOR INDEPENDENT VECTOR EXTRACTION BY SCORE MATCHING](/posts/conference-eusipco-2026-conference-paper-id-0001197-eef911707b/) | **5.7/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #目标说话人提取 |
| 91 | [相位对不准就白做：用极坐标分开调幅度和相位的频域个人声区](/posts/conference-eusipco-2026-conference-paper-id-0000031-237924b825/) | [POLAR COORDINATE SEPARATION LEARNING FOR FREQUENCY\-DOMAIN ADAPTIVE PERSONAL SOUND ZONES](/posts/conference-eusipco-2026-conference-paper-id-0000031-237924b825/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #主动降噪 |
| 92 | [车里噪音太多判不准语音：用音节级对齐重造训练标签的 SylVAD](/posts/conference-eusipco-2026-conference-paper-id-0000081-d70f4b88f1/) | [SYLVAD: IMPROVING IN\-VEHICLE VOICE ACTIVITY DETECTION VIA SYLLABLE\-LEVEL ALIGNMENT](/posts/conference-eusipco-2026-conference-paper-id-0000081-d70f4b88f1/) | **5.6/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #语音活动检测 |
| 93 | [在低频要降噪、高频要保方向时：按频点凸切换松绑双耳约束](/posts/conference-eusipco-2026-conference-paper-id-0000126-f1d032890e/) | [FREQUENCY\-BIN\-WISE CONVEX SWITCHING FOR RELAXED JOINT BINAURAL LCMV BEAMFORMING](/posts/conference-eusipco-2026-conference-paper-id-0000126-f1d032890e/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音增强 |
| 94 | [注意力也会分心：用差分门控让 Conformer 在噪声中保持对比度](/posts/conference-eusipco-2026-conference-paper-id-0000151-0064c2bdc4/) | [DIFFERENTIAL GATED CONFORMER](/posts/conference-eusipco-2026-conference-paper-id-0000151-0064c2bdc4/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.6/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音识别 |
| 95 | [只做整段分类的模型，能否用积分梯度找回声音何时出现](/posts/conference-eusipco-2026-conference-paper-id-0000241-d006b126df/) | [EVALUATING THE TEMPORAL DETECTION CAPABILITY OF INTEGRATED GRADIENTS APPLIED ON SOUND CLASSIFIER](/posts/conference-eusipco-2026-conference-paper-id-0000241-d006b126df/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 应用研究 | #音频事件检测 |
| 96 | [给耳蜗模型装上逆行路：用瞬态诱发耳声发射反推外毛细胞状态](/posts/conference-eusipco-2026-conference-paper-id-0000271-6ff3c436d5/) | [AUDITORY MODEL PERSONALIZATION BASED ON TRANSIENT\-EVOKED OTOACOUSTIC EMISSIONS](/posts/conference-eusipco-2026-conference-paper-id-0000271-6ff3c436d5/) | **5.6/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #音频生成 |
| 97 | [稀疏程度随房间而变：把最小二乘加多重稀疏约束的模型族展开为可学习的 ADMM 网络](/posts/conference-eusipco-2026-conference-paper-id-0000311-1fdf64e97e/) | [A MODEL\-DRIVEN DEEP LEARNING METHOD FOR ACOUSTIC SYSTEM IDENTIFICATION](/posts/conference-eusipco-2026-conference-paper-id-0000311-1fdf64e97e/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #房间脉冲响应估计 |
| 98 | [一个通用扰动为何能在不同 ASR 上都让转写偏向同一目标](/posts/conference-eusipco-2026-conference-paper-id-0000771-39fe112161/) | [BForSec\-P1\.4: TOWARDS UNIVERSAL, TRANSFERABLE, AND TARGETED ACOUSTIC ATTACKS ON ASR SYSTEMS](/posts/conference-eusipco-2026-conference-paper-id-0000771-39fe112161/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #语音识别 |
| 99 | [短录音对不准：用电网频率做时间戳时相似度函数为何是瓶颈](/posts/conference-eusipco-2026-conference-paper-id-0000806-9f756b7bd9/) | [SPMuS\-SS1\.1: AI\-AIDED ENF TIMESTAMPING IN MULTIMEDIA FORENSICS](/posts/conference-eusipco-2026-conference-paper-id-0000806-9f756b7bd9/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频检索 |
| 100 | [真人嘴与扬声器箱体辐射不同：用方向能量声学图做轻量多通道回放检测](/posts/conference-eusipco-2026-conference-paper-id-0001212-58d2b1a9ff/) | [MULTI\-CHANNEL REPLAY SPEECH DETECTION USING ACOUSTIC MAPS](/posts/conference-eusipco-2026-conference-paper-id-0001212-58d2b1a9ff/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #语音伪造检测 |
| 101 | [学新声会改旧解释：类增量音频分类中的解释漂移如何被遗忘与竞争推高](/posts/conference-eusipco-2026-conference-paper-id-0001661-a74f81541d/) | [SiG\-DML\-L1\.3: QUANTIFYING EXPLANATION DRIFT IN AUDIO USING POST\-HOC EXPLAINABLE CONTINUAL LEARNING](/posts/conference-eusipco-2026-conference-paper-id-0001661-a74f81541d/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #音频分类 |
| 102 | [自回归交叉注意力丢了时间因果：用质心右移把对齐拉回来](/posts/conference-eusipco-2026-conference-paper-id-0000141-e24ade5617/) | [CAUSALITY INDUCED TRANSFORMER ATTENTION DECODER FOR IMPROVED ASR](/posts/conference-eusipco-2026-conference-paper-id-0000141-e24ade5617/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #语音识别 |
| 103 | [用电刺激逼近正常听觉神经响应：闭环耳蜗植入框架的概念验证](/posts/conference-eusipco-2026-conference-paper-id-0000281-ad8613b985/) | [END\-TO\-END CLOSED\-LOOP FRAMEWORK FOR COCHLEAR IMPLANT PROCESSING USING AUDITORY MODELS](/posts/conference-eusipco-2026-conference-paper-id-0000281-ad8613b985/) | **5.5/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.6/1.5 | 前50% | 方法研究 | #音频修复 |
| 104 | [既要对齐时间又要能重建细节：SyncStream 在隐空间统一判别与生成](/posts/conference-eusipco-2026-conference-paper-id-0000406-8facedfa15/) | [SYNCSTREAM: UNIFYING AUDIOVISUAL REPRESENTATION LEARNING AND GENERATIVE MODELING IN THE LATENT SPACE](/posts/conference-eusipco-2026-conference-paper-id-0000406-8facedfa15/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音视频理解 |
| 105 | [不用改 vocoder 结构，只换条件特征：群延迟乘积谱能否替代梅尔谱](/posts/conference-eusipco-2026-conference-paper-id-0000481-182df31d98/) | [GROUP DELAY PRODUCT SPECTROGRAMS EMPLOYED AS CONDITIONING IN SPEECH SYNTHESIS](/posts/conference-eusipco-2026-conference-paper-id-0000481-182df31d98/) | **5.5/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #语音合成 |
| 106 | [切分学习传不动 ViT：用注意力先并批再剪令牌的双重压缩](/posts/conference-eusipco-2026-conference-paper-id-0000821-ecf4a891e3/) | [SPMuS\-SS1\.4: COMMUNICATION EFFICIENT SPLIT LEARNING OF VITS WITH ATTENTION\-BASED DOUBLE COMPRESSION](/posts/conference-eusipco-2026-conference-paper-id-0000821-ecf4a891e3/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.3/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频分类 |
| 107 | [复发结构能否并置音乐与抑郁脑电：以缺隙度与局部密度相似性做跨域比较](/posts/conference-eusipco-2026-conference-paper-id-0000941-f02e0c0a51/) | [MUSICAL AND NEUROLOGICAL PATTERNS OF RECURRENCE: AN APPLICATION TO MAJOR DEPRESSIVE DISORDER](/posts/conference-eusipco-2026-conference-paper-id-0000941-f02e0c0a51/) | **5.5/10** · 创新 1.1/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 1.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.6/1.5 | 前50% | 应用研究 | #音乐理解 |
| 108 | [高阶全通 warping 下 DCT 合成滤波器为何能用凸最小二乘做到完全重建](/posts/conference-eusipco-2026-conference-paper-id-0002756-8e63dab13c/) | [CONVEX DESIGN OF HIGHER ORDER ALLPASS TRANSFORMED DCT FILTER BANKS WITH PERFECT AND NEAR\-PERFECT RECONSTRUCTION](/posts/conference-eusipco-2026-conference-paper-id-0002756-8e63dab13c/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #音频编码 |
| 109 | [把谱质心压进全极点模型：用搬运代价对齐频移峰](/posts/conference-eusipco-2026-conference-paper-id-0002761-25642c9e91/) | [ALL\-POLE CENTROIDS IN THE WASSERSTEIN METRIC WITH APPLICATIONS TO CLUSTERING OF SPECTRAL DENSITIES](/posts/conference-eusipco-2026-conference-paper-id-0002761-25642c9e91/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频分类 |
| 110 | [低信噪比下声学无人机检测定位：覆盖保证与误差相关不确定性的互补权衡](/posts/conference-eusipco-2026-conference-paper-id-0000006-8452d10a71/) | [UNCERTAINTY QUANTIFICATION FOR ACOUSTIC\-BASED DRONE DETECTION AND LOCALIZATION UNDER ADVERSE NOISE CONDITIONS](/posts/conference-eusipco-2026-conference-paper-id-0000006-8452d10a71/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.6/1.5 | 后50% | 应用研究 | #声源定位 |
| 111 | [只靠同曲更相似会学偏：用三种信号处理相似度把乐器相似表示拉回跨曲](/posts/conference-eusipco-2026-conference-paper-id-0000046-0c388a0d1b/) | [INCORPORATING SIGNAL PROCESSING\-BASED KNOWLEDGE FOR MUSIC SIMILARITY REPRESENTATION LEARNING BASED ON INDIVIDUAL INSTRUMENT SOUNDS](/posts/conference-eusipco-2026-conference-paper-id-0000046-0c388a0d1b/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 方法研究 | #音乐检索 |
| 112 | [不传原始波形：用物理先验的隐编码在带宽受限下估计声场](/posts/conference-eusipco-2026-conference-paper-id-0000121-33065f1743/) | [PHYSICS\-INFORMED CODING FOR SOUND FIELD ESTIMATION IN WIRELESS ACOUSTIC SENSOR NETWORKS](/posts/conference-eusipco-2026-conference-paper-id-0000121-33065f1743/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.6/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 后50% | 方法研究 | #声场重建 |
| 113 | [大规模与噪声下还要控准基频：VAE\-SiFiGAN 用重合成误差筛掉 F0 提取错误](/posts/conference-eusipco-2026-conference-paper-id-0000466-ef24616a65/) | [EVALUATING VAE\-SIFIGAN UNDER LARGE\-SCALE TRAINING AND NOISY CONDITIONS WITH DATA SELECTION USING F0 EXTRACTION ERROR ESTIMATION](/posts/conference-eusipco-2026-conference-paper-id-0000466-ef24616a65/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 方法研究 | #语音合成 |
| 114 | [只看标签会看错位置：用空间监督把分类依据拉回事件 footprint](/posts/conference-eusipco-2026-conference-paper-id-0000696-b8ef47e23d/) | [CAM\-GUIDED MULTILABEL DEEP LEARNING FOR SPATIOTEMPORAL EVENT LOCALIZATION IN DISTRIBUTED ACOUSTIC SENSING OF WATER PIPELINES](/posts/conference-eusipco-2026-conference-paper-id-0000696-b8ef47e23d/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 后50% | 应用研究 | #联合声音事件检测定位 |
| 115 | [活动范围已知时，把导向矢量更新压进低维子空间做半盲分离](/posts/conference-eusipco-2026-conference-paper-id-0001217-fa81fbe225/) | [SUBSPACE\-CONSTRAINED ITERATIVE SOURCE STEERING FOR MULTICHANNEL SOURCE SEPARATION](/posts/conference-eusipco-2026-conference-paper-id-0001217-fa81fbe225/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 后50% | 方法研究 | #语音分离 |
| 116 | [不用重建声音：用两层可训练多分辨率网络直接在特征空间圈住正常机器声](/posts/conference-eusipco-2026-conference-paper-id-0000246-800f341daa/) | [MULTIRESOLUTION NEURAL NETWORK FOR ONE\-CLASS LEARNING OF MACHINE SOUNDS](/posts/conference-eusipco-2026-conference-paper-id-0000246-800f341daa/) | **5.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.6/1.5 | 后50% | 方法研究 | #异常声音检测 |
| 117 | [缺测房间脉冲响应还能做波束形成吗：扩散修复补齐阵列的可用性检验](/posts/conference-eusipco-2026-conference-paper-id-0001222-50b4fe28a5/) | [ON THE USEFULNESS OF DIFFUSION\-BASED ROOM IMPULSE RESPONSE INTERPOLATION TO MICROPHONE ARRAY PROCESSING](/posts/conference-eusipco-2026-conference-paper-id-0001222-50b4fe28a5/) | **5.3/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.7/1.5 | 后50% | 方法研究 | #房间脉冲响应估计 |
| 118 | [只学风声、不学兽鸣：用脉冲网络把长时生物声学录音先筛一遍](/posts/conference-eusipco-2026-conference-paper-id-0001117-3d9c775ec1/) | [SPIKE BASED APPROACH FOR ANOMALY LOCALIZATION IN LENGTHY BIOACOUSTIC RECORDINGS](/posts/conference-eusipco-2026-conference-paper-id-0001117-3d9c775ec1/) | **5.2/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 后50% | 方法研究 | #异常声音检测 |
| 119 | [欠定下不失真分离：把时频掩蔽写进切换波束形成器的代价函数](/posts/conference-eusipco-2026-conference-paper-id-0001202-a86630f706/) | [INTRODUCTION OF TIME\-FREQUENCY MASKING TO SWITCHING BEAMFORMERS FOR DISTORTIONLESS BLIND SOURCE SEPARATION IN UNDERDETERMINED SITUATIONS](/posts/conference-eusipco-2026-conference-paper-id-0001202-a86630f706/) | **5.2/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 后50% | 方法研究 | #语音分离 |
| 120 | [只定位一次之后直接听麦克风：点神经元嵌入卡尔曼滤波做窄带混响跟踪](/posts/conference-eusipco-2026-conference-paper-id-0000016-af25d9db97/) | [POINT NEURON EMBEDDED KALMAN FILTER FOR NARROWBAND SOUND SOURCE TRACKING](/posts/conference-eusipco-2026-conference-paper-id-0000016-af25d9db97/) | **5.1/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 方法研究 | #声源追踪 |
| 121 | [只用语音活动判断和谁在交谈：多人轮替如何变成可计算的对齐分数](/posts/conference-eusipco-2026-conference-paper-id-0000361-644eb7412d/) | [GENERALIZED TURN\-TAKING–BASED CONVERSATIONAL PARTNER IDENTIFICATION IN MULTI\-TALKER SCENARIOS USING VOICE ACTIVITY](/posts/conference-eusipco-2026-conference-paper-id-0000361-644eb7412d/) | **5.1/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 方法研究 | #说话人识别 |
| 122 | [浊擦音难分时，比值特征为何能拉开齿音与齿龈音的距离](/posts/conference-eusipco-2026-conference-paper-id-0000456-67dbbe2583/) | [FEATURE SELECTION FOR PLACE OF ARTICULATION CLASSIFICATION IN VOICED FRICATIVES PRODUCED BY POLISH CHILDREN](/posts/conference-eusipco-2026-conference-paper-id-0000456-67dbbe2583/) | **5.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.6/1.5 | 后50% | 应用研究 | #病理语音评估 |
| 123 | [麦克风很少、鸟声很多时：用子带频谱特征把时延分给各自声源](/posts/conference-eusipco-2026-conference-paper-id-0000001-5cd8f9667d/) | [LOCALIZING MULTIPLE SOUND SOURCES BY ASSOCIATING SUB\-BAND TDOA FEATURES FOR BIODIVERSITY MONITORING](/posts/conference-eusipco-2026-conference-paper-id-0000001-5cd8f9667d/) | **5.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 方法研究 | #声源定位 |
| 124 | [要在全频段共用同一批传声器：联合稀疏 OLS 如何挑位置又保波束](/posts/conference-eusipco-2026-conference-paper-id-0000111-afee4b3a79/) | [JOINT\-SPARSE OLS MICROPHONE ARRAY DESIGN FOR FREQUENCY\-INVARIANT BEAMFORMING](/posts/conference-eusipco-2026-conference-paper-id-0000111-afee4b3a79/) | **5.0/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 0.4/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.7/1.5 | 后50% | 方法研究 | #语音增强 |
| 125 | [不加参数的融合为什么能抗住坏掉的音频：联合加权平均的可靠性与显著性分工](/posts/conference-eusipco-2026-conference-paper-id-0001522-fc2ee3e56d/) | [JOINT WEIGHTED AVERAGE FUSION METHOD FOR ROBUST MULTIMODAL \(AUDIO VIDEO\) DEPRESSION DETECTION](/posts/conference-eusipco-2026-conference-paper-id-0001522-fc2ee3e56d/) | **5.0/10** · 创新 1.1/2 · 技术严谨 0.9/1.5 · 实验充分 0.9/1.5 · 清晰度 0.6/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.7/1.5 | 后50% | 方法研究 | #病理语音评估 |
| 126 | [长脉冲响应拆成两个短滤波器：RLS\-NKP 如何用两个可变遗忘因子兼顾精度与跟踪](/posts/conference-eusipco-2026-conference-paper-id-0000196-8d3902dbd7/) | [AN RLS ALGORITHM USING IMPULSE RESPONSE DECOMPOSITION AND VARIABLE FORGETTING FACTORS](/posts/conference-eusipco-2026-conference-paper-id-0000196-8d3902dbd7/) | **4.8/10** · 创新 1.0/2 · 技术严谨 0.8/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 后50% | 方法研究 | #回声消除 |
| 127 | [只听声音选画面：声学氛围与歌词语义谁更决定背景视频的自然感](/posts/conference-eusipco-2026-conference-paper-id-0000401-022b500ccd/) | [CONTRASTIVE MUSIC–VIDEO MATCHING FOR AUDIO\-BASED BACKGROUND VIDEO COMPOSITION](/posts/conference-eusipco-2026-conference-paper-id-0000401-022b500ccd/) | **4.8/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 应用研究 | #音视频生成 |

---

## 📋 论文列表

### 1. [把未知系统推出去：用代理锚定学习做语音合成来源归属与开放集检测](/posts/conference-eusipco-2026-conference-paper-id-0000736-0c4b891b88/)

> 英文题目：*[BForSec\-L1\.2: ANCHORING THE UNKNOWN: OPEN\-SET MODEL ATTRIBUTION VIA PROXY\-ANCHOR LEARNING](/posts/conference-eusipco-2026-conference-paper-id-0000736-0c4b891b88/)*

标签：#对比学习 #自监督学习 #多语言 #音频深度伪造检测

评分：**8.1/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频深度伪造检测 | 主方法：#对比学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000736.pdf)

👥 **作者与机构**

- Neamtu, Cristian\-Teodor：机构信息未能从会议 PDF 纯文本可靠映射
- Mihalache, Serban：机构信息未能从会议 PDF 纯文本可靠映射
- Smeu, Stefan：机构信息未能从会议 PDF 纯文本可靠映射
- Oneata, Dan：机构信息未能从会议 PDF 纯文本可靠映射
- Cucu, Horia：机构信息未能从会议 PDF 纯文本可靠映射
- Burileanu, Dragos：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频来源追溯以待测语音为输入，输出其所属文本到语音系统并在开放集中拒绝未见系统，难点在于同架构多版本高度相似且新系统不断涌现。方法先冻结在大量多语无标注语料上预训练的Wav2Vec2\-BERT编码器并取其中间层输出，以保留判别性声学表征并送入后续度量学习。接着单层线性投影头将高维特征映射到同维度量空间并做归一化，将嵌入约束在单位超球面上，为原型比较提供几何基础。然后以代理锚损失学习每类可学习原型，使同源样本向本类原型紧凑聚集而远离异类原型，学到的原型相似性直接支撑后续判断。推理分为分布外检测与分布内归属两阶段，先以最大代理距离等分数判断是否属于已知系统，再对已知样本做最近原型归属，使判别与不确定性估计共享同一原型几何。在MLAAD v9合并架构评测设置下，Proxy\-Anchor方法的准确率为99\.76%，高于Logistic Regression基线的准确率99\.59%。与直接分类相比，关键机制差异在于判别边界与拒绝分数均源于同一原型相似性结构，因而在架构合并后开放集分离更显著，具有取证中降低误报的实际意义。结论适用边界受限于MLAAD采集分布与保留划分，尚未验证野外压缩信道后处理与跨数据集迁移下的稳定性；训练成本涉及在六块NVIDIA Tesla T4硬件上训练100个周期且批量为256的计算量。

🔗 **开源资源**

- 代码相关资源：<https://github.com/neamtucristian26/panda> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 2. [不拟合频谱而是重放点火脉冲：脉冲串加共振器的发动机声建模](/posts/conference-eusipco-2026-conference-paper-id-0000076-4e806d6169/)

> 英文题目：*[PHYSICS\-INFORMED NEURAL ENGINE SOUND MODELING WITH DIFFERENTIABLE PULSE\-TRAIN SYNTHESIS](/posts/conference-eusipco-2026-conference-paper-id-0000076-4e806d6169/)*

标签：#信号处理 #可解释性 #环境声 #音频生成

评分：**7.9/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000076.pdf)

👥 **作者与机构**

- Doerfler, Robin：机构信息未能从会议 PDF 纯文本可靠映射
- Wyse, Lonce：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

发动机声音建模需由转速与扭矩控制信号生成时域波形，难点在于基频低至5 Hz、发火间隔不足2毫秒且加速与减速在相同转速下音色不同，传统谐波加噪声方法只拟合频谱结果而丢失脉冲成因。该工作先将转速扭矩及其一阶二阶差分编码为帧级嵌入并解码为时变合成参数，为后续合成提供方向感知的控制条件。接着由物理脉冲发生器按发火顺序与气缸相位偏置生成带压力释放包络与热力学相位弯曲的多缸脉冲并叠加湍流与气流噪声，将控制参数转化为带随机激励的脉冲串。再将双缸组输出送入可微Karplus\-Strong排气谐振器组渲染管路共振，由脉冲串激励得到最终波形，相对已有方法关键差异在于直接建模脉冲成因而非谱包络。在三个程序化发动机子集验证集下，PTR的总损失指标为0\.949，低于HPN基线的总损失指标1\.006。该脉冲约束对冲击性周期源更具归纳偏置，谐波重建同步改善并保留可解释的阀门定时与共振参数，具有实际可控意义。结论适用边界受限于合成汽油机数据与16 kHz离线重建，尚未验证真实录音、实时性能与主观偏好，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://rdoerfler.github.io/ptr-model-page/> — 链接可访问（HTTP 200）
- 模型相关资源：<https://rdoerfler.github.io/ptr-model-page/> — 链接可访问（HTTP 200）
- 演示资源：<https://rdoerfler.github.io/ptr-model-page/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 3. [看不见的生成器：用通用音频语义加图结构抓环境音伪造痕迹](/posts/conference-eusipco-2026-conference-paper-id-0000226-d36ebaa08b/)

> 英文题目：*[BEYOND THE SEEN: A GENERALIZED FRAMEWORK FOR ENVIRONMENTAL SOUND DEEPFAKE DETECTION](/posts/conference-eusipco-2026-conference-paper-id-0000226-d36ebaa08b/)*

标签：#数据增强 #图神经网络 #迁移学习 #环境声 #音频深度伪造检测

评分：**7.9/10** | 创新 1.1/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频深度伪造检测 | 主方法：#迁移学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000226.pdf)

👥 **作者与机构**

- Naduvathra Revi, Krishna：机构信息未能从会议 PDF 纯文本可靠映射
- Bhattacharya, Mrityunjoy：机构信息未能从会议 PDF 纯文本可靠映射
- Akhthar Shaik Adam, Shuib：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

环境声音伪造检测以4秒16kHz环境录音为输入并输出真伪二分类，难点在于环境声无语言结构且多为多声源叠加，语音反欺骗线索难以迁移，且须泛化到未见文本到音频与音频到音频生成器。第一步预训练EAT前端将对数梅尔谱映射为连续语义嵌入以保留背景一致性与细粒度纹理，其输出经可学习线性投影压缩通道后进入第二步。第二步基于RawNet2的残差编码器将抽象语义特征转化为突出局部伪造痕迹的高分辨率谱时特征图，再送入第三步进行结构判决。第三步AASIST以谱域与时域异构图注意力建模跨域结构异常并经读出层输出二分类对数似然完成判决。与采用离散声学分词器的BEATs路线不同，该方法依赖连续话语帧目标预训练与差分微调保留通用声学知识，并以G\.711编解码模拟与增益归一化迫使模型关注深层结构而非通道指纹。在EnvSDD未见生成器测试集下，EAT\+AASIST的EER为2\.48%，低于BEATs\+AASIST的EER 13\.20%。该结论适用边界受限于EnvSDD固定划分与4秒单片段条件，对更长时长与真实部署噪声尚未验证，而训练成本受限于单块NVIDIA A100 GPU实现的硬件条件，原文未披露推理开销与部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/krishnarevi/EnvSDD-reimagined> — 链接可访问（HTTP 200）
- 模型相关资源：<https://github.com/krishnarevi/EnvSDD-reimagined> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.ijcai.org/proceedings/2024/0421.pdf> — 链接可访问（HTTP 200）
- 第三方资源：<https://proceedings.mlr.press/v202/liu23f.html> — 链接可访问（HTTP 200）
- 第三方资源：<https://proceedings.mlr.press/v202/chen23ag.html> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.5281/zenodo.8091972> — 链接不可用（HTTP 404）
- 第三方资源：<https://doi.org/10.21437/ASVSPOOF.2021-5> → <https://www.isca-archive.org/asvspoof_2021/das21_asvspoof.html> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 4. [不靠攻击仿真堆料：用对抗嵌入与时间无关读出做音频水印](/posts/conference-eusipco-2026-conference-paper-id-0000741-2330ab067a/)

> 英文题目：*[BForSec\-L1\.3: AWARE: AUDIO WATERMARKING VIA ADVERSARIAL RESISTANCE TO EDITS](/posts/conference-eusipco-2026-conference-paper-id-0000741-2330ab067a/)*

标签：#对抗训练 #对抗鲁棒性 #语音 #音频水印

评分：**7.9/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频水印 | 主方法：#对抗训练

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000741.pdf)

👥 **作者与机构**

- Pavlović, Kosta：机构信息未能从会议 PDF 纯文本可靠映射
- Stanarević, Lazar：机构信息未能从会议 PDF 纯文本可靠映射
- Nedić, Petar：机构信息未能从会议 PDF 纯文本可靠映射
- Nešović, Elena：机构信息未能从会议 PDF 纯文本可靠映射
- Kovačević, Slavko：机构信息未能从会议 PDF 纯文本可靠映射
- Djurović, Igor：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频水印任务输入为16 kHz语音波形与16位信息，输出为不可感知且经滤波压缩变速剪切后仍可解码的含水印音频，难点在于时序失配与局部删除会破坏全局同步。方法先在短时傅里叶变换幅度域按响度比例设定逐频点扰动上界，容许在响亮处大改而在安静处小改以兼顾听感。接着以冻结随机检测器为导向用推动损失优化扰动并复用原相位重构，使嵌入信号直接驱动解码输出。随后将含扰动幅度的梅尔特征送入逐帧一维卷积与双滤波器读出头做全局平均判决，将时序证据汇聚为每比特一个与位置无关的分数。相对依赖失真仿真堆栈的WavMark与AudioSeal，鲁棒性主要来自时序无关汇聚而非见过何种攻击，因而对未见编辑更具泛化意义。在LibriSpeech语料评测设置下，AWARE的PESQ为4\.26，高于WavMark的PESQ 4\.20。该结论适用边界限于黑盒信号级编辑，未覆盖增强分离与克隆等语义级变换，且神经音频压缩误码仍较高，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/deepmarkpy/aware> → <https://github.com/deepmark/aware> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 5. [字幕能帮耳朵分轨吗：CineSubNet 用文本先验做电影对白音乐音效分离](/posts/conference-eusipco-2026-conference-paper-id-0000371-f105db993f/)

> 英文题目：*[CINESUBNET: A MULTIMODAL ARCHITECTURE FOR TEXT\-DRIVEN CINEMATIC AUDIO SOURCE SEPARATION](/posts/conference-eusipco-2026-conference-paper-id-0000371-f105db993f/)*

标签：#多模态学习 #Transformer #语音 #音频分离

评分：**7.8/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频分离 | 主方法：#多模态学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000371.pdf)

👥 **作者与机构**

- Negru, Marian：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolae, Ana：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

电影音频源分离（Cinematic Audio Source Separation, CASS）需将电影混合音分解为对白（Dialogue, DX）、音乐（Music, MX）与音效（Effects, FX）三轨，难点在于三者高度相关且对白常被音乐和环境声掩蔽。CineSubNet采用编码器\-融合\-分离\-解码器结构：立体声波形经短时傅里叶变换（Short\-Time Fourier Transform, STFT）得到复数频谱，整片音频经Whisper Large v3自动转写为字幕并用双向编码器（Bidirectional Encoder Representations from Transformers, BERT）编码为384维语义向量，二者在编码器后经多模态融合块完成门控调制与交叉注意，再送入层叠Transformer分离栈与稀疏上采样解码器重建三轨。与手工子带加循环结构相比，该设计以稀疏压缩网络（Sparse Compression Network, SCNet）的自动三带压缩替代手工分带，并以全局语义先验调制时频特征，更贴近真实影院总有字幕的流程。在多语言Divide and Remaster v3测试集上平均信号失真比（Signal\-to\-Distortion Ratio, SDR）为12\.68 dB，超过最强基线BandIt的12\.06 dB，方向为越高越好。该结论目前仅在合成混音的Divide and Remaster系列上验证，对真实电影混音、强重叠下识别错误传播及视觉线索缺失场景尚未验证。论文披露了24\.1M参数量、262 ms延迟与约0\.0238实时因子，表明系统显著快于实时。

🔗 **开源资源**

- 代码相关资源：<https://github.com/marian-negru/cinesubnet> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 6. [先调语言模型还是先调声学解码器：法语德语适配的部件级取舍](/posts/conference-eusipco-2026-conference-paper-id-0000471-6f8a334c7c/)

> 英文题目：*[EUROPEANIZING MODULAR ZERO\-SHOT TTS: A COMPONENT\-LEVEL ADAPTATION FRAMEWORK FOR FRENCH AND GERMAN](/posts/conference-eusipco-2026-conference-paper-id-0000471-6f8a334c7c/)*

标签：#SFT #多语言 #零样本 #文本到语音

评分：**7.8/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：系统技术报告 | 主任务：#文本到语音 | 主方法：#SFT

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000471.pdf)

👥 **作者与机构**

- Horstmann, Tim Luka：机构信息未能从会议 PDF 纯文本可靠映射
- Ould Ouali, Nassima：机构信息未能从会议 PDF 纯文本可靠映射
- Arous, Mohamed Amine：机构信息未能从会议 PDF 纯文本可靠映射
- Sani, Awais Hussain：机构信息未能从会议 PDF 纯文本可靠映射
- Moulines, Eric：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理法语和德语零样本段落级文本到语音（Text\-to\-Speech，TTS）适配，输入为任意文本与数秒未见参考语音，输出为保留说话人音色的连续波形，难点在于仅覆盖英语与中文的预训练表示向新语言韵律和发音迁移不稳定。方法链为冻结语义分词器与说话人编码器先将文本与参考音频转为语义令牌与说话人嵌入，接着微调文本语音语言模型（Text\-Speech Language Model，LM）将文本映射为语言结构正确的令牌序列，再微调流模型（Flow Decoder）把令牌转为梅尔频谱图并由冻结声码器合成波形。与以往整体微调或超低资源外部因素研究不同，该框架固定分词器并系统分离语言模型、流解码器和声码器（HiFi\-GAN）的因果贡献。在域外M\-AILABS 2小时测试集上，以Whisper large\-v3测得的归一化词错率（Word Error Rate，WER）相对原始CosyVoice2下降83%至91%，法语8\.77%、德语6\.03%为开源最优，且法语比较平均意见分（Comparative Mean Opinion Score，CMOS）显著优于商业系统。结论仅适用于中等资源朗读与表现力语音混合场景，冻结分词器限制了母语级保真度与说话人保持上限。原文未披露训练、推理或部署成本，仅报告实时率。

🔗 **开源资源**

- 代码相关资源：<https://github.com/hi-paris/CosyVoice2-EU> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 7. [在离群点占多数时仍要全局最优：用内点最大化做远场声源方向估计](/posts/conference-eusipco-2026-conference-paper-id-0002166-9553aa9e08/)

> 英文题目：*[SPMuS\-L2\.5: INLIER MAXIMIZATION FOR ROBUST DIRECTION\-OF\-ARRIVAL ESTIMATION IN AD\-HOC MICROPHONE NETWORKS](/posts/conference-eusipco-2026-conference-paper-id-0002166-9553aa9e08/)*

标签：#信号处理 #鲁棒性 #麦克风阵列 #声源定位

评分：**7.6/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#声源定位 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002166.pdf)

👥 **作者与机构**

- Flood, Gabrielle：机构信息未能从会议 PDF 纯文本可靠映射
- Åström, Kalle：机构信息未能从会议 PDF 纯文本可靠映射
- Oskarsson, Magnus：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理特设麦克风网络中基于到达时延差测量的远场声源到达方向估计，输入为多对麦克风时延测量与已知相对几何，输出为单位球面上的方向向量，难点在于测量含大量离群点且单位球约束使损失非凸多极值。先以时延残差与方向向量的远场平面波线性关系为输入，将估计转化为残差平方多项式约束与阈值判定的内点最大化问题，输出含多项式目标与球面等式约束的优化形式，该形式作为下一步枚举的求解对象。再以该多项式优化形式为输入，利用内点最大化理论推导两点子集决定的Karush\-Kuhn\-Tucker临界点条件并有限枚举候选解，输出全部临界点集合，该集合直接进入逐个计数选优。最后以临界点集合为输入，逐个统计满足阈值界限的内点数目并选取数目最多者，输出其对应的全局最优方向向量。与依赖离散网格搜索的已有鲁棒方法不同，该机制用连续代数求解替代网格折中，因而在细网格下保持全局性并降低计算量。在合成TDOA离群点鲁棒性场景下，提出方法的容忍离群率指标为80%，高于离散化方法的容忍离群率指标50%。结论的适用边界仅限远场平面波成立且内点阈值可合理设定的情形，近场与强混响下的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://gabrielleflood.github.io/doa-inlier-maximization> → <https://gabrielleflood.github.io/doa-inlier-maximization/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://vision.maths.lth.se/drone> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 8. [不重建整张网格：用分支\-主干算子在连续房间空间中查询声场幅值](/posts/conference-eusipco-2026-conference-paper-id-0000346-081c6802e6/)

> 英文题目：*[SOUND FIELD RECONSTRUCTION WITH AN ATTENTION\-BASED DEEP OPERATOR NETWORK](/posts/conference-eusipco-2026-conference-paper-id-0000346-081c6802e6/)*

标签：#注意力机制 #扩散模型 #空间音频 #声场重建

评分：**7.5/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#声场重建 | 主方法：#注意力机制

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000346.pdf)

👥 **作者与机构**

- Damiano, Stefano：机构信息未能从会议 PDF 纯文本可靠映射
- van Waterschoot, Toon：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

声场重建需从混响房间稀疏麦克风的声压幅值、位置与频率推断连续空间任意查询点的幅值分布，难点是混响复杂且测量极稀疏时固定网格与模型假设失效。先将可变数量的麦克风坐标幅值频率集合经全连接层升维并送入三层四头Transformer编码器捕捉空间关联，输出测量表征。再将任意查询点坐标输入四层多层感知机编码为查询向量，最后以查询向量为交叉注意力的查询、以测量表征为键与值完成交互聚合，并经全连接层映射为查询点幅值预测。相对扩散模型将重建视为固定分辨率图像修复并需全网格估计与多步去噪，该算子直接学习测量函数到连续场的映射，可单点查询且分辨率无关。在32×32网格单房间测试集下，所提方法的推理时间指标为1\.6 ms，低于扩散基线的推理时间指标20\.94 s。该优势在64×64细网格外推与64个和128个麦克风的低测量条件下依然保持，256个测量时基线反超表明方法更适应稀疏重建。上述结论的适用边界受限于T60为0\.6 s的仿真鞋盒房间与30 Hz至300 Hz模态频段，尚未验证真实房间、非鞋盒几何与相位重建的外推能力；原文披露的推理开销显示所提模型参数量为975 k且单次前向即可完成估计，显著小于基线的62\.5 M多步扩散计算量。

🔗 **开源资源**

- 代码相关资源：<https://github.com/steDamiano/sfr-deeponet> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/fmiotello/diff-sfr/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 9. [只用 64 个像素点的振动，能恢复出可懂的语音吗](/posts/conference-eusipco-2026-conference-paper-id-0000721-bd982fbb12/)

> 英文题目：*[LEARNING BASED SPEECH RECOVERY USING EVENT CAMERAS](/posts/conference-eusipco-2026-conference-paper-id-0000721-bd982fbb12/)*

标签：#端到端学习 #生成对抗网络 #音视频 #静默语音接口 #语音增强

评分：**7.5/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#静默语音接口 | 主方法：#端到端学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000721.pdf)

👥 **作者与机构**

- Liu, Haoqi：机构信息未能从会议 PDF 纯文本可靠映射
- Yaghoobi, Mehrdad：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

视觉麦克风需从薯片袋等物体表面微振动反推原始语音，输入为事件相机记录的稀疏异步亮度变化流，输出为8 kHz可懂语音，难点在于振动与语音的非线性耦合未知且事件数据稀疏、预处理降采样带来混叠与欠采样。所提EV2A先以500微秒窗累积事件形成事件帧并计算全时段强度标准差生成振动热图，排序选取8个8×8感兴趣区域拼接为输入，解决原始事件流与常规网络不兼容及空时维度过大问题。该拼接输入进入由一层三维卷积、多层二维卷积与门控循环单元组成的视觉前端，分别负责提取短时空特征、压缩空间维度形成时间序列并建模长时依赖，输出低分辨率中间波形。中间波形再进入借鉴AERO的谱域音频超分增强网络，沿频率轴编解码并以频域变换块建模频带间时序依赖，扩展带宽并去噪，两部分以配对语音与事件帧端到端联合训练。与基于过零迭代重建的eVM相比，该方法以数据驱动的空间聚合与频带生成替代人工对齐平均，具有直接抑制噪声和补全谐波的意义。在真实VCTK配对数据划分12个说话人训练、另6个说话人评测设置的条件下，EV2A的WER为0\.35 ± 0\.27，低于eVM的WER 0\.83 ± 0\.18。该结论适用边界受限于固定扬声器激励薯片袋、EVK4近距离观测条件，尚未验证跨材质、跨距离、环境噪声与实时连续语音的外推能力。原文披露的推理开销为生成器参数量32\.22M、推理延迟538\.27ms，硬件显存占用为1\.6GB。

🔗 **开源资源**

- 数据相关资源：<https://doi.org/10.7488/ds/2645> → <https://datashare.ed.ac.uk/items/30e7453c-9ea8-48b4-8e18-f96d0dc62928> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 10. [循环脉冲网络不必全连接：用一维卷积加可学习轴突延迟做语音建模](/posts/conference-eusipco-2026-conference-paper-id-0001676-70e742e36a/)

> 英文题目：*[SiG\-DML\-L1\.6: COMBINING CONVOLUTION AND DELAY LEARNING IN RECURRENT SPIKING NEURAL NETWORKS](/posts/conference-eusipco-2026-conference-paper-id-0001676-70e742e36a/)*

标签：#CNN #RNN #高效推理 #语音 #音频分类

评分：**7.4/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分类 | 主方法：#CNN

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001676.pdf)

👥 **作者与机构**

- Sanches Zebendo, Lúcio Folly：机构信息未能从会议 PDF 纯文本可靠映射
- Cicciarella, Eleonora：机构信息未能从会议 PDF 纯文本可靠映射
- Rossi, Michele：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为耳蜗编码产生的140通道脉冲频谱流，输出为口语词类别，难点在于长时依赖建模与循环脉冲神经网络中替代梯度下的梯度传播困难，以及稠密循环矩阵随神经元数二次增长的参数开销。前馈线性投影先将上一层脉冲映射为电流，卷积循环延迟单元再把本层脉冲经三角扩散函数写入环形缓冲并沿神经元频率维做局部卷积后调度到未来时刻，泄漏整合发放（Leaky Integrate\-and\-Fire，LIF）神经元最后综合两路电流完成发放与状态更新，无脉冲读出层对末时刻膜电位做Softmax分类。与DelRec的全连接循环加逐神经元延迟相比，关键差异在于空间连接由全局改为局部而时间调度仍保留可学习延迟，从而分离空间冗余与时间记忆的建模职责。在Spiking Heidelberg Digits（SHD）测试集上4层模型取得91\.51%准确率，基本持平2层DelRec复现基线的91\.72%，循环权重由每层65536降至3。结论仅在具有频率局部相关的耳蜗语音脉冲输入与2至4层规模上得到验证，在Spiking Speech Commands（SSC）上落后原文基线约4个百分点，向非局部结构信号与更深网络的外推尚未证明。单样本推理耗时在NVIDIA A40上最高降低约52倍，原文未披露完整训练时长与能耗成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/luciozebendo/delrec-snn> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 11. [只用距离回声找墙：三对不够稳时如何用几何约束补齐](/posts/conference-eusipco-2026-conference-paper-id-0000326-cf2e17d6d5/)

> 英文题目：*[ROBUST AND GEOMETRICALLY CONSISTENT ROOM GEOMETRY ESTIMATION USING DISTANCE MEASUREMENTS](/posts/conference-eusipco-2026-conference-paper-id-0000326-cf2e17d6d5/)*

标签：#数据集 #信号处理 #鲁棒性 #麦克风阵列 #声源定位

评分：**7.2/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#声源定位 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000326.pdf)

👥 **作者与机构**

- Larsson, Malte：机构信息未能从会议 PDF 纯文本可靠映射
- Larsson, Martin：机构信息未能从会议 PDF 纯文本可靠映射
- Larsson, Viktor：机构信息未能从会议 PDF 纯文本可靠映射
- Oskarsson, Magnus：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文针对麦克风与声源位置已知时利用回声距离估计鞋盒房间六面墙平面参数的任务，输入为已知啁啾固定声源接收信号或未知音乐移动声源接收信号，输出为墙体平面法向量与截距，实际难点是回声与墙体对应未知且存在漏检、外点与噪声干扰。方法先用广义互相关相位变换提取到达时延并换算为距离或距离差以获得回声测量。接着用三对距离完整解算器与两对距离正交约束解算器基于镜像声源模型求解候选墙体，并将候选墙体送入局部优化随机抽样一致框架评分与优化。框架迭代剔除已找到墙体对应的内点测量，再利用鞋盒平行正交几何约束经一维网格搜索补全剩余墙体。与依赖欧氏距离矩阵秩约束穷举组合的已有方法相比，该机制允许不同麦克风与声源组合混合求解同一墙体并显式容忍外点，从而在稀疏污染测量下仍能稳定找回后几面墙。在40个随机鞋盒房间仿真评测设置下，w/ Geometry第6面墙的成功率指标为0\.80，高于Single walls的成功率指标0\.15。该结论适用边界受限于近似鞋盒房间与位置先验较准的情形，严重遮挡、非平面结构与声源定位误差较大时为失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://maltelarsson2.github.io/room-geometry-estimation/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://maltelarsson2.github.io/room-geometry-estimation/> — 链接可访问（HTTP 200）
- 复现相关资源：<https://maltelarsson2.github.io/room-geometry-estimation/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 12. [把“是什么”和“在哪里”分开学：DISSE 用双头解开空间音频文本表示](/posts/conference-eusipco-2026-conference-paper-id-0002827-e124e8c6f5/)

> 英文题目：*[DISSE: LEARNING DISENTANGLED SOURCE AND SPATIAL REPRESENTATIONS FROM SPATIAL AUDIO–TEXT CONTRASTIVE LEARNING](/posts/conference-eusipco-2026-conference-paper-id-0002827-e124e8c6f5/)*

标签：#对比学习 #多模态学习 #多通道 #空间音频信号 #音频检索

评分：**7.2/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频检索 | 主方法：#对比学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002827.pdf)

👥 **作者与机构**

- Ueji, Shotaro：机构信息未能从会议 PDF 纯文本可靠映射
- Takamichi, Shinnosuke：机构信息未能从会议 PDF 纯文本可靠映射
- Yamaoka, Kouei：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

空间音频文本检索的输入为4通道一阶Ambisonics音频与同时描述声源内容和空间属性的文本，输出为可按因子检索的向量，难点是单嵌入会把声源与空间纠缠而无法独立控制。所提解耦声源与空间嵌入（Disentangled Source and Spatial Embeddings，DISSE）先用共享音频与文本编码得到归一化共享特征，再经4个轻量投影头分别映射为声源感知与空间感知嵌入，最后用两路有监督对比损失加物理回归联合训练。相对空间语言音频嵌入（Embeddings for Language and Spatial Audio，ELSA）的单向量机制差异在于以空间公共与声源公共配对显式定义正负集，使各头对目标因子敏感而对非目标因子不变。在9216项合成测试集的跨模态在任务声源检索中文本到音频召回率R@1为0\.631，基本持平基线而在任务外检索降至0\.004，显示泄漏被大幅抑制。结论仅适用于合成房间脉冲响应与受控词库构造的弱配对数据，未在真实多通道录音或开放词汇描述上验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/takamichi-lab/disentangle> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 13. [干扰比忽高忽低时，如何既压住间歇干扰又不放大噪声：子空间投影修正黎曼平均 RTF](/posts/conference-eusipco-2026-conference-paper-id-0000091-90e7c28920/)

> 英文题目：*[SUBSPACE METHOD FOR RTF ESTIMATION AND SPEECH ENHANCEMENT USING RIEMANNIAN GEOMETRY](/posts/conference-eusipco-2026-conference-paper-id-0000091-90e7c28920/)*

标签：#波束成形 #麦克风阵列 #语音 #语音增强

评分：**7.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音增强 | 主方法：#波束成形

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000091.pdf)

👥 **作者与机构**

- Ronai, Or：机构信息未能从会议 PDF 纯文本可靠映射
- Bar, Amitay：机构信息未能从会议 PDF 纯文本可靠映射
- Talmon, Ronen：机构信息未能从会议 PDF 纯文本可靠映射
- Cohen, Israel：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为16通道阵列在混响加性噪声下含多个间歇干扰源的观测，输出为参考麦克风处目标语音估计，难点是干扰可能强于目标且其活动模式未知。方法先将接收信号分段估计样本相关矩阵，并用仿射不变度量迭代求黎曼均值以保留共享目标成分而抑制非共享干扰，前一步的黎曼均值与欧氏均值共同进入下一步特征分析。接着求欧氏均值相关矩阵的特征基，并计算黎曼主向量在该基上的展开系数以度量各子空间与目标的相关性，系数输出用于阈值筛选。然后按能量阈值保留相关子空间并投影重构相对传递函数，重构的RTF直接代入MVDR计算权向量并滤波增强。与单主向量法仅用最大特征向量及黎曼法使用全部基向量不同，本方法只保留与黎曼估计相关的子空间，避免小特征值倒数放大噪声的同时保持干扰抑制。在SIR为8dB、SNR为20dB的评测设置下，所提方法的PESQ为3\.19±0\.15，高于传统MVDR的PESQ 2\.93±0\.22。该结论适用边界限于静态声源、目标持续活动、干扰间歇活动及仿真房间脉冲响应，尚未验证真实录音、移动声源与目标间歇情形。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/orronai/SpeechEnhancementSubspaceMethod> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 14. [先按声音配对再看标签对错：把分离质量和分类错误分开算的 S5 评价](/posts/conference-eusipco-2026-conference-paper-id-0000236-9dc6c65cee/)

> 英文题目：*[METRIC ANALYSIS FOR SPATIAL SEMANTIC SEGMENTATION OF SOUND SCENES](/posts/conference-eusipco-2026-conference-paper-id-0000236-9dc6c65cee/)*

标签：#评测协议 #模型评估 #多通道 #音频分类 #音频分离

评分：**7.1/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分离 | 主方法：#评测协议

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000236.pdf)

👥 **作者与机构**

- Mishra, Mayank：机构信息未能从会议 PDF 纯文本可靠映射
- Magron, Paul：机构信息未能从会议 PDF 纯文本可靠映射
- Serizel, Romain：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

空间语义分割要求从5通道混合中同时分离出3个目标源波形并给出声音事件标签，难点在于分离误差与标签错误相互纠缠，单独评价分离与分类难以比较系统，而已有联合指标又难以归因错误来源。该方法先计算全部参考源与估计源对之间的经典SDR并保留置换不变最优匹配，再将同一置换同步作用于预测标签元组以保持源与标签的对应关系。随后基于置换后标签统计真阳性、假阳性与假阴性，仅保留真阳性源的SDR值而对假阳性与假阴性计0 dB，最后按源数或错误数聚合得到CASA\-SDR。与CA\-SDR直接按预测标签硬匹配源不同，CASA\-SDR以分离相似度决定对应后再判定分类对错，从而把标签交换显式暴露为分类错误而非不可解释的低失真值，实现了从分类中心向分离中心评价的转变。在10 dB信噪比标签交换场景下，CASA\-SDR的指标为3\.33 dB，高于CA\-SDR的指标\-0\.68 dB。该结论的适用边界受限于干声近似合成混合与DCASE 2025任务4中可获得输出的子集系统，强混响与开放标签等外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/mishramayank1903/Metric-analysis-for-S5> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 15. [通用音频模型靠什么泛化：类特异神经元的覆盖、共享与因果检验](/posts/conference-eusipco-2026-conference-paper-id-0000071-0d90fc8c3c/)

> 英文题目：*[WHAT DO NEURONS LISTEN TO? A NEURON\-LEVEL DISSECTION OF A GENERAL\-PURPOSE AUDIO MODEL](/posts/conference-eusipco-2026-conference-paper-id-0000071-0d90fc8c3c/)*

标签：#统计分析 #可解释性 #音乐 #语音 #音频分类

评分：**7.0/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分类 | 主方法：#统计分析

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000071.pdf)

👥 **作者与机构**

- Kawamura, Takao：机构信息未能从会议 PDF 纯文本可靠映射
- Niizumi, Daisuke：机构信息未能从会议 PDF 纯文本可靠映射
- Ono, Nobutaka：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文以环境声、语音与音乐对数梅尔频谱图为输入，输出每个变换器编码器神经元的类别选择性判定与跨任务共享关系，难点在于自监督表征泛化能力强但内部声学与语义组织机制不清。以条件激活模式定位属性敏感神经元，方法先统计每层每个神经元在各声音类别上的激活概率，得到跨类别响应分布作为后续熵分析的输入。接着用音频激活概率熵量化神经元跨类别选择性，并经阈值与三重过滤筛选类别特异神经元，将连续熵值转化为可解释的离散神经元集合。然后计算类别与数据集间共享神经元的杰卡德系数以刻画复用结构，并以置零消融在线性评估协议下验证其对分类的功能贡献。与有监督模型受固定训练类别定义约束、难以覆盖未见类别不同，自监督掩码预测迫使模型形成近乎完备且可复用的声学属性编码，因而能涌现性别、语言、情感、音高与声学相似性神经元。在8个数据集任务下，CREMA\-D的平均类别特异神经元数指标为172\.0，高于ESC\-50的平均类别特异神经元数指标37\.9。该结论适用边界受限于单模型掩码建模双子网络与单源短片段分类的十二层视觉变换器设置，尚未验证重叠声、大规模口语或生成任务中的外推性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/onolab-tmu/AAPE> — 链接可访问（HTTP 200）
- 模型相关资源：<https://github.com/nttcslab/m2d> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/nttcslab/eval-audio-repr> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 16. [用生成干净样本教判别器：在 FSD50K 里自动挑出单源声音](/posts/conference-eusipco-2026-conference-paper-id-0000256-896d81e40b/)

> 英文题目：*[FSD50K\-SOLO: AUTOMATED CURATION OF SINGLE\-SOURCE SOUND EVENTS](/posts/conference-eusipco-2026-conference-paper-id-0000256-896d81e40b/)*

标签：#数据集 #数据集构建 #扩散模型 #音频分类

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频分类 | 主方法：#数据集构建

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000256.pdf)

👥 **作者与机构**

- Yang, Ningyuan：机构信息未能从会议 PDF 纯文本可靠映射
- Yin, Sile：机构信息未能从会议 PDF 纯文本可靠映射
- Yang, Li\-Chia：机构信息未能从会议 PDF 纯文本可靠映射
- Irvin, Bryce：机构信息未能从会议 PDF 纯文本可靠映射
- Quan, Xiao：机构信息未能从会议 PDF 纯文本可靠映射
- Stamenovic, Marko：机构信息未能从会议 PDF 纯文本可靠映射
- Zhang, Shuo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

FSD50K以片段级弱标签为主，大量片段混入背景噪声、重叠事件与稀疏目标，难以直接为分离、定位与可控合成提供干净训练单元。本文将任务定义为输入任意时长音频、输出单源single\-source或多源multi\-source二分类，以自动保留单源子集。方法链分四步推进：先以Stable Audio Open 1\.0按单源类生成参考音频并人工剔除劣质样本，再用滑窗最大能量选段并按4种干扰条件以\-10dB至15dB信噪比合成1比1平衡混合数据，接着冻结BEATs编码器提取语义声学特征，最后经Bi\-LSTM聚合与MLP输出二分类。与仅依赖众包PP评级或时长过滤的已有做法不同，该机制用可控合成提供强监督，再迁移到真实语料做内容级过滤。在BSE测试集与生成测试集评估下，BSE条件的准确率为95\.51%，高于生成测试集条件的准确率93\.47%。据此筛选出32880个单源片段构成FSD50K\-Solo，单源样本呈现更低PC与更高PQ的一致模式。该结论适用边界受限于105个单源类与FSD50K分布内验证，对未见事件类的泛化尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://github.com/microsoft/unilm/tree/master/beats> — 链接可访问（HTTP 200）
- 数据相关资源：<https://doi.org/10.5281/zenodo.20403806> → <https://zenodo.org/doi/10.5281/zenodo.20403806> — 暂时无法访问
- 第三方资源：<https://openreview.net/forum?id=14rn7HpKVk> → <https://openreview.net/challenge?redirect=%2Fforum%3Fid%3D14rn7HpKVk> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.5281/zenodo.6337421> → <https://zenodo.org/record/6337421> — 暂时无法访问
- 第三方资源：<https://doi.org/10.1109/ICASSP.2018.8462665> → <https://ieeexplore.ieee.org/document/8462665/> — 链接可访问（HTTP 202）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 17. [只给整段录音一句话标签，如何同时学会判断与定位鲸叫](/posts/conference-eusipco-2026-conference-paper-id-0000306-bdf51efa52/)

> 英文题目：*[WEAKLY SUPERVISED DETECTION AND TEMPORAL LOCALIZATION OF WHALE CALLS IN LONG\-DURATION BIOACOUSTIC DATA](/posts/conference-eusipco-2026-conference-paper-id-0000306-bdf51efa52/)*

标签：#生物声学监测 #弱监督学习 #长音频处理 #音频事件检测

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频事件检测 | 主方法：#弱监督学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000306.pdf)

👥 **作者与机构**

- Nihal, Ragib Amin：机构信息未能从会议 PDF 纯文本可靠映射
- Yen, Benjamin：机构信息未能从会议 PDF 纯文本可靠映射
- Shi, Runwu：机构信息未能从会议 PDF 纯文本可靠映射
- Ashizawa, Takeshi：机构信息未能从会议 PDF 纯文本可靠映射
- Nakadai, Kazuhiro：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

被动声学监测以2分钟至30分钟连续水下录音为输入，需输出整段是否存在鲸类叫声并给出叫声发生时刻，难点在于逐叫声时间戳标注需数小时专家工作而包级二值标签仅需数秒，且背景噪声占比高达73%至99\.9%。所提DSMIL\-LocNet先将长录音层次切分为固定时长实例包并提取梅尔谱图与时域特征，输出实例级频谱\-时域表征。接着双流编码融合得到实例向量并经注意力加权聚合为包级预测，同时以归一化注意力权重直接输出时刻定位。最后用焦点损失加时间平滑、稀疏与实例一致性约束联合训练，使注意力逼近潜在实例标签并保持时序连贯。与固定尺寸卷积网络必须压缩长输入因而丢失定位分辨率不同，该方法无需压缩即可处理变长序列并从弱标签学习定位，具有减少标注依赖的实际意义。在AcousticTrends BlueFinLibrary评测设置下，DSMIL\-LocNet的分类F1分数为0\.91，高于ANIMAL\-SPOT的分类F1分数0\.22。其适用边界是长包分类高精度而短包定位更准，故需长包筛选加短包重分段的两阶段部署，否则600秒附近定位精度会降至0\.5至0\.6而受限；原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Ragib-Amin-Nihal/DSMIL-Loc> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 18. [盲房间脉冲响应生成：用十指标框架看清滤波器与损失谁更有效](/posts/conference-eusipco-2026-conference-paper-id-0000321-a88f438b4c/)

> 英文题目：*[IN TUNE WITH THE ROOM: ADVANCING BLIND RIR GENERATION THROUGH A COMPREHENSIVE EVALUATION FRAMEWORK](/posts/conference-eusipco-2026-conference-paper-id-0000321-a88f438b4c/)*

标签：#评测协议 #统计分析 #时频分析 #房间脉冲响应估计

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#房间脉冲响应估计 | 主方法：#评测协议

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000321.pdf)

👥 **作者与机构**

- Stauß, Sebastian：机构信息未能从会议 PDF 纯文本可靠映射
- Watanabe, Hiroshi：机构信息未能从会议 PDF 纯文本可靠映射
- Schmid, Thomas：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理盲房间脉冲响应生成，输入为单通道混响语音，输出为48kHz单通道1秒RIR，需同时恢复直达声与早期反射及频率相关的晚期混响指数衰减，难点在于仅凭混响语音逆推房间频率峰与衰减结构。先对11500条真实RIR做频谱峰统计分析，以数据驱动方式初始化可学习滤波器组中心频率，为后续合成提供低重叠频谱先验。再由卷积编码器从混响语音提取隐表示，并经由滤波噪声成形解码器合成前50ms直达声加滤波噪声晚期混响，前步优化后的滤波器直接参与该晚期混响成形。最后以多分辨率STFT对数幅度联合能量衰减relief损失约束频谱细节与指数衰减，前步合成的RIR作为该联合损失的优化对象。与原始FiNS相比，关键机制差异是用显式衰减物理偏置替代纯谱收敛，并用统计峰先验替代均匀倍频程初始化，实际意义在于补齐低频主峰偏移等纯谱指标不可见的听感相关缺陷。在11个数据集跨库评测下，MSTFT\+EDR 1k变体的MSTFT损失指标标准差为0\.293，低于基线FiNS的MSTFT损失指标标准差0\.846。适用边界限于单通道固定时长与客观指标评价，尚未验证听感增益与多声源多通道外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/medail/RIRBench> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/medail/RIRBench> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 19. [只用仿真训练时，如何让跟踪模型不再记住仿真痕迹](/posts/conference-eusipco-2026-conference-paper-id-0000011-e5d40f03fd/)

> 英文题目：*[DOMAIN\-ROBUST SOUND SOURCE TRACKING USING NUISANCE DISENTANGLEMENT](/posts/conference-eusipco-2026-conference-paper-id-0000011-e5d40f03fd/)*

标签：#正则化 #鲁棒性 #麦克风阵列 #声源追踪

评分：**6.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#声源追踪 | 主方法：#正则化

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000011.pdf)

👥 **作者与机构**

- Zhong, Bingxiang：机构信息未能从会议 PDF 纯文本可靠映射
- Damiano, Stefano：机构信息未能从会议 PDF 纯文本可靠映射
- Dietzen, Thomas：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文针对单运动声源追踪，输入为5通道阵列STFT实虚部拼接张量，输出为360类方位角逐帧空间似然分布，难点是纯合成训练会过拟合仿真特有混响与噪声模式而产生合成到真实域偏移。编码器以五层卷积块从输入提取混合潜表示并送入解耦模块。解耦模块以两条并行GRU分支分别产生方向相关表示与干扰表示，其输出共同进入共享全连接解码器分别做方向估计与均匀约束检验。CLUB网络估计两分支互信息并最小化其依赖，同时对干扰分支解码输出施加与均匀分布的KL约束，训练后丢弃干扰分支与CLUB模块而推理结构与基线一致。与依赖特定注意力结构的前人解耦相比，关键差异是在表示层施加互信息最小化加均匀约束，迫使干扰分支不可解码出方向结构，从而鼓励模型忽视仿真特有干扰因素。在RealMAN OfficeRoom3真实场景评测设置下，提出方法的MAE为3\.22 ± 0\.35°，低于基线方法的MAE 5\.22 ± 2\.85°。该结论适用边界受限于单声源二维方位角与单一办公室混响条件，多声源与强未知噪声外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/bingxiang-zhong/Nuisance-Disentangled-SST> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 20. [只用一个旁听麦克风，在放音中追踪声速再补偿声场控制](/posts/conference-eusipco-2026-conference-paper-id-0000021-a4c44098d2/)

> 英文题目：*[ONLINE SINGLE\-CHANNEL AUDIO\-BASED SOUND SPEED ESTIMATION FOR ROBUST MULTI\-CHANNEL AUDIO CONTROL](/posts/conference-eusipco-2026-conference-paper-id-0000021-a4c44098d2/)*

标签：#信号处理 #鲁棒性 #多通道 #单通道 #空间音频渲染

评分：**6.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#空间音频渲染 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000021.pdf)

👥 **作者与机构**

- Fuglsig, Andreas Jonas：机构信息未能从会议 PDF 纯文本可靠映射
- Christensen, Mads Græsbøll：机构信息未能从会议 PDF 纯文本可靠映射
- Jensen, Jesper Rindom：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

空间音频控制依赖离线测得的房间脉冲响应计算多通道控制滤波器，输入为已知扬声器驱动信号与单观测传声器实测帧，输出为当前声速估计与按需更新的控制滤波器，难点是温度变化引入系统性传播失配且部署端仅有单传声器可用。方法第一步用Sinc插值压缩扩展重采样将参考声速脉冲响应映射到候选声速并经重叠相加卷积合成预测再现帧，负责建立声速参数化声学模型。第二步逐帧求解使实测帧与预测帧欧氏残差最小的单参数非凸优化得到声速估计以上一步预测帧为比对基准，负责在线跟踪当前声速。第三步当估计值与上次滤波器计算声速之差超过1m/s阈值时以上一步估计值为输入修正亮暗区脉冲响应并重算可变跨度权衡声区控制滤波器，负责补偿传播失配。该机制与温度传感器校准、多传声器到达时差联合定位不同，直接复用播放音频的结构化失配做在线跟踪，无需额外硬件或专用测量，具有实际意义。在4\.5×4\.5×2\.2米短混响仿真评测条件下，步进终点时刻的声速性能指标为353 m/s，高于步进起点时刻的声速性能指标333 m/s。适用边界限于均匀温度、短混响仿真与阶跃变速，窄带低能量音乐帧与满秩预滤波下波动增大，尚未验证实测外推而受限。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/afuglsAAU/EUSIPCO2026SoundSpeedEst> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 21. [把琴体共振还给滤波器：DDSP\-Violin 用弓弦先验约束谐波源](/posts/conference-eusipco-2026-conference-paper-id-0000051-a146c0032c/)

> 英文题目：*[DDSP\-VIOLIN: PHYSICALLY\-INFORMED CONSTRAINTS FOR DISENTANGLED SOURCE\-FILTER DECOMPOSITION](/posts/conference-eusipco-2026-conference-paper-id-0000051-a146c0032c/)*

标签：#数据集 #信号处理 #音乐 #音乐生成

评分：**6.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000051.pdf)

👥 **作者与机构**

- Duarte, João：机构信息未能从会议 PDF 纯文本可靠映射
- Mignot, Rémi：机构信息未能从会议 PDF 纯文本可靠映射
- McDermott, James：机构信息未能从会议 PDF 纯文本可靠映射
- O'Leary, Seán：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

小提琴合成以基频、响度与音色隐变量为输入、以波形为输出，需分离时变弓弦激励源与准静态琴体共振，难点在于标准可微分数字信号处理直接回归高维谐波幅度，源与滤波器可相互补偿导致分离模糊，且滤波器精度长期缺乏量化评估。编码器先从输入解码出亮度指数、弓位置、凹陷深度及低阶残差等低维物理参数，将高自由度谐波回归压缩为可解释控制量并输出给谐波生成步骤。这些参数接着调制亥姆霍兹一比恩分布生成受约束谐波包络，再叠加前十阶残差修正以容纳真实琴弦谱偏差，形成的分布直接进入共振渲染步骤。随后可学习两千零四十八点有限脉冲响应滤波器对谐波分量卷积以刻画琴体响应，再与滤波噪声相加得到最终音频，并以谐波残差损失正则化残差以维持结构约束。与基线逐帧独立回归四十个谐波幅度不同，该方法以持续施加的亮度、弓位置与残差组合约束显式建模谱倾斜，阻止滤波器代偿源特性，因而更易解耦并保持重建质量。在六个琴体脉冲响应合成数据评测设置下，DDSP\-Violin的MC\-LSD指标为3\.79±0\.24dB，低于基线的5\.44±0\.80dB。该结论适用边界仅限合成激励加已知线性时不变滤波器条件，真实琴非线性耦合与时变辐射等外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/JoaoerDuarte/DDSP-Violin-EUSIPCO2026> — 链接可访问（HTTP 200）
- 演示资源：<https://github.com/JoaoerDuarte/DDSP-Violin-EUSIPCO2026> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 22. [把解码和平滑写进同一个概率模型：MSM 如何做到逐采样点的听觉注意解码](/posts/conference-eusipco-2026-conference-paper-id-0001352-d67883c7e1/)

> 英文题目：*[SAMPLE\-LEVEL EEG\-BASED SELECTIVE AUDITORY ATTENTION DECODING WITH MARKOV SWITCHING MODELS](/posts/conference-eusipco-2026-conference-paper-id-0001352-d67883c7e1/)*

标签：#状态空间模型 #脑信号 #语音 #言语神经解码

评分：**6.9/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#言语神经解码 | 主方法：#状态空间模型

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001352.pdf)

👥 **作者与机构**

- Yao, Yuanyuan：机构信息未能从会议 PDF 纯文本可靠映射
- Geirnaert, Simon：机构信息未能从会议 PDF 纯文本可靠映射
- Tuytelaars, Tinne：机构信息未能从会议 PDF 纯文本可靠映射
- Bertrand, Alexander：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

选择性听觉注意解码（Selective Auditory Attention Decoding，sAAD）需从低信噪比脑电（Electroencephalography，EEG）逐时刻判断两路竞争语音（Speech）中当前关注者，短窗分辨率高但相关估计噪声大，长窗稳定却延迟大。本文提出马尔可夫切换模型（Markov Switching Model，MSM），以差分包络 \(y\_t=y\_\{1t\}\-y\_\{2t\}\) 为一维观测建立状态相关线性回归 \(y\_t=\\beta\_\{S\_t\}^T \\hat\{x\}\_t\+e\_t\)，用一阶马尔可夫链约束注意状态持续性，以前向后向算法估计逐点后验，再在期望最大化（Expectation\-Maximization，EM）M步按后验加权更新两套解码器与噪声方差，多轮迭代后直接输出逐采样点判决。与窗级线性相关加隐马尔可夫模型（Hidden Markov Model，HMM）平滑的关键差异是解码与平滑共享同一似然而非两阶段串联，无需预选窗长且可利用未来信息做非因果平滑。在KULeuven双说话人数据集有监督用户相关（Sup\-US）设置下，中位解码准确率77\.3%，与强基线77\.6%相当，中位切换检测延迟由34\.5 s降至22\.2 s。该结论仅适用于双说话人、人工拼接切换和离线非因果推理，未验证多说话人、自然切换、因果实时与跨库泛化。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/YYao-42/MSM> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 23. [把听力筛查藏进播客静音里：间歇采集能省多少点击又保住多少精度](/posts/conference-eusipco-2026-conference-paper-id-0001606-b549bb9ee0/)

> 英文题目：*[TEOAE MEASUREMENT BEYOND CLINICAL SETTINGS: INTERMITTENT ACQUISITION AND COMPUTATION IN EVERYDAY AUDIO](/posts/conference-eusipco-2026-conference-paper-id-0001606-b549bb9ee0/)*

标签：#医疗音频 #信号处理 #主观评测 #生理信号 #异常声音检测

评分：**6.9/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#异常声音检测 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001606.pdf)

👥 **作者与机构**

- Sen, Argha：机构信息未能从会议 PDF 纯文本可靠映射
- Stuchbury\-Wass, Jake：机构信息未能从会议 PDF 纯文本可靠映射
- Liu, Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Al\-Naimi, Khaldoon：机构信息未能从会议 PDF 纯文本可靠映射
- Montanari, Alessandro：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以日常播客为载体输入含嵌入点击的连续音频，输出1 kHz至4 kHz频段的耳蜗外毛细胞功能估计，难点在于静音机会稀疏不规则且语音残留与环境噪声污染严重。方法链分为三步：先对峰值归一化播客波形做静音检测并仅在长静音段插入宽带点击，再按基线窗口与响应窗口对齐分epoch并做质量控制剔除削波与异常epoch，最后用基线方差加权平均与奇偶分解分别估计信号与噪声谱级。相比临床固定间隔高密度平均，该机制以机会式插入换取可听性并以质量感知加权抑制非平稳噪声。在10名正常听力成人20耳数据上，1\.5倍速条件舒适度显著高于常速且中位平均绝对误差（Mean Absolute Error，MAE）约为5 dB，接近无播客标准记录。该结论仅适用于安静受控环境下的正常听力小样本，未验证听损耳、中耳病变、高频损伤与长期佩戴场景。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://github.com/captainredbleach/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 24. [一套参数如何同时装下单声道、立体声和 5\.1 环绕声](/posts/conference-eusipco-2026-conference-paper-id-0000036-a2d0d42614/)

> 英文题目：*[VCNAC: A VARIABLE\-CHANNEL NEURAL AUDIO CODEC FOR MONO, STEREO, AND SURROUND SOUND](/posts/conference-eusipco-2026-conference-paper-id-0000036-a2d0d42614/)*

标签：#向量量化 #多通道 #空间音频信号 #音频编码

评分：**6.8/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：模型报告 | 主任务：#音频编码 | 主方法：#向量量化

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000036.pdf)

👥 **作者与机构**

- Grötschla, Florian：机构信息未能从会议 PDF 纯文本可靠映射
- Sen, Arunasish：机构信息未能从会议 PDF 纯文本可靠映射
- Lombardi, Alessandro：机构信息未能从会议 PDF 纯文本可靠映射
- Cámbara, Guillermo：机构信息未能从会议 PDF 纯文本可靠映射
- Schwarz, Andreas：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

可变通道神经音频编解码要用同一套编码器\-解码器参数原生处理单声道语音、立体声音乐与5\.1环绕声，输出需兼容降通道播放并在独立重建中保留声道身份与空间线索。各输入声道先经共享权重的跨步卷积并行编码并叠加可学习通道嵌入以标识声道身份，其输出进入跨通道注意力交换时域与空间依赖。所有流在编码器深层相加融合成与声道数无关的统一表征并送入残差向量量化器得到共享离散词表。解码端将去量化表征复制为目标声道数并叠加第二组通道嵌入，再经共享转置卷积分别重建各声道波形。与首层拼接固定声道的结构相比，该机制只为真实声道实例化流并避免填充静音声道，使瓶颈语义统一且支持推理时声道数可变。在5\.1环绕声重建评测设置下，VCNAC的前声道SI\-SDR为5\.72，高于VCNAC（concat）基线的前声道SI\-SDR5\.40。该结论受限于合成环绕训练数据的响度配比失真与LFE稀疏导致的指标不可靠，尚未验证真实影院混音与多通道聆听下的空间保真。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 25. [只用 5 到 10 分钟实录，如何扩出 19 小时还带逐采样标注的引擎声](/posts/conference-eusipco-2026-conference-paper-id-0000221-935ca7e4d3/)

> 英文题目：*[ANALYSIS\-DRIVEN PROCEDURAL GENERATION OF AN ENGINE SOUND DATASET WITH EMBEDDED CONTROL ANNOTATIONS](/posts/conference-eusipco-2026-conference-paper-id-0000221-935ca7e4d3/)*

标签：#数据集 #数据增强 #信号处理 #音频生成

评分：**6.8/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频生成 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000221.pdf)

👥 **作者与机构**

- Doerfler, Robin：机构信息未能从会议 PDF 纯文本可靠映射
- Wyse, Lonce：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

发动机声音建模的输入是转速与转矩等工况控制量，输出是干净且与控制样本级对齐的音频，难点在于实车采集成本高、噪声混杂且真值难以同步获取。该框架先对实录做角度域重采样与频率对齐分析，提取各阶次随转速与转矩变化的幅值与位置频偏指纹，为后续合成提供参数表。接着指纹经双线性插值驱动谐波加噪声合成器与共振器组，重构确定性谐波并叠加参数化噪声与排气共振，实现可控音色变化。最后将转速与转矩归一化编码进多通道音频流，使控制真值随音频样本精确重建，无需外部元数据文件。在多样控制轨迹的参数化生成条件下，高扩展轨迹的扩展倍数指标为30×，高于低扩展轨迹的扩展倍数指标15×。与直接录音或无约束过程音频相比，该链条以物理阶次结构约束生成并保留参数化复杂度调节能力，支撑系统化增强与算法评测。该结论适用边界受限于所用性能车动力配置与工况轨迹池，尚未验证向电动车、其他缸数或主观听感的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/rdoerfler/engine-order-analysis> — 链接可访问（HTTP 200）
- 数据相关资源：<https://doi.org/10.5281/zenodo.16883336> → <https://zenodo.org/doi/10.5281/zenodo.16883336> — 暂时无法访问
- 数据相关资源：<https://huggingface.co/datasets/rdoerfler/procedural-engine-sounds> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 26. [方向不够用时，用距离与混响把几乎重叠的说话人分开](/posts/conference-eusipco-2026-conference-paper-id-0000381-c384305982/)

> 英文题目：*[REGION\-CONDITIONED TARGET SPEAKER EXTRACTION VIA REVERBERATION CUES AND GAUSSIAN\-KERNEL DISTANCE ENCODING](/posts/conference-eusipco-2026-conference-paper-id-0000381-c384305982/)*

标签：#CNN #麦克风阵列 #语音 #目标说话人提取

评分：**6.8/10** | 创新 1.4/2 | 技术严谨 1.3/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#目标说话人提取 | 主方法：#CNN

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000381.pdf)

👥 **作者与机构**

- Lu, Shengjie：机构信息未能从会议 PDF 纯文本可靠映射
- Zhou, Xiang：机构信息未能从会议 PDF 纯文本可靠映射
- Yang, Yichen：机构信息未能从会议 PDF 纯文本可靠映射
- Zhu, Bing：机构信息未能从会议 PDF 纯文本可靠映射
- Zhang, Wen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

目标说话人提取需从多通道混响混合中恢复区域约束下的目标语音，同方位干扰与混响拖尾导致方向线索模糊是主要难点。目标方向嵌入生成器先对目标角度窗做方向感知卷积与区域最大池化形成角度初筛，其输出与归一化多通道短时傅里叶特征拼接后送入SpatialNet骨干做跨频带与窄带双路径建模。距离与混响嵌入生成器再将峰值归一化高斯核距离向量与房间声学参数编码，经特征线性调制注入骨干实现近距离二次聚焦，最终经线性映射与逆变换重建波形。相对直接拼接原始距离标量与共享方向滤波的已有条件方法，解耦方向滤波器与高斯软编码更易表达逆平方衰减等非线性关系与区域不确定性，避免将距离退化为全局增益。在无角度限制混合条件测试集下，TDEG\+GK Dist方法的SI\-SDRi指标为17\.90 dB，高于TDEG\+Scale Dist方法的SI\-SDRi指标17\.71 dB。该结论适用边界受限于8 m至12 m仿真房间与给定方位距离区间先验，真实到达方向估计误差与盲混响估计下的外推尚未验证。原文未披露训练、推理或部署成本

🔗 **开源资源**

- 演示资源：<https://mdddjking.github.io/spatial-cues-demo/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 27. [把不可微的维特比变成可微模块：线性链条件随机场如何嵌入端到端流程](/posts/conference-eusipco-2026-conference-paper-id-0000396-73f815aa92/)

> 英文题目：*[ON THE USE OF DIFFERENTIABLE VITERBI DECODING FOR LINEAR\-CHAIN CRFS](/posts/conference-eusipco-2026-conference-paper-id-0000396-73f815aa92/)*

标签：#信号处理 #端到端 #音乐 #音高与旋律提取

评分：**6.8/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音高与旋律提取 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000396.pdf)

👥 **作者与机构**

- Strahl, Sebastian：机构信息未能从会议 PDF 纯文本可靠映射
- Zeitler, Johannes：机构信息未能从会议 PDF 纯文本可靠映射
- Müller, Meinard：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理双声部同时演奏时估计占优声部音高类别的问题，输入为含干扰的音频常数Q变换频谱，输出为逐帧音高类别，难点在于局部频谱在目标与干扰声部之间频繁跳变而导致帧级混淆与预测抖动。所提管线先对常数Q谱做对数压缩与一维卷积以增强基频相关结构，输出频率维局部分数并送入可微条件随机场模块。该dCRF模块以温度平滑最大算子替代硬最大值执行频率域软Viterbi前向与回溯，输出关于局部分数的梯度图以抑制不符合转移先验的局部预测。其转移矩阵作为可训练参数与前后网络端到端联合优化，随后经帧内归一化与半音及八度池化得到音高类别概率。与硬Viterbi不可微只能后处理不同，dCRF既保留动态规划的结构偏置又允许梯度贯穿，因而能显式学习音符间常见音程转移并提升时序稳定性。在ChoraleBricks测试集5 dB条件下，dCRF\-T的音高类别准确率为0\.892 ±0\.016，高于None基线的音高类别准确率0\.819 ±0\.014。该结论适用边界受限于同一合唱数据集的特定混音协议，尚未验证跨乐器与真实舞台混音的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/groupmm/dcrf> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 28. [少样本下音频语言模型适配：用乘积核同时对齐细节与全局语义](/posts/conference-eusipco-2026-conference-paper-id-0000066-fe873d334f/)

> 英文题目：*[MUKA: MULTI KERNEL AUDIO ADAPTATION OF AUDIO\-LANGUAGE MODELS](/posts/conference-eusipco-2026-conference-paper-id-0000066-fe873d334f/)*

标签：#模型融合 #音频大模型 #少样本 #音频分类

评分：**6.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.1/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分类 | 主方法：#模型融合

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000066.pdf)

👥 **作者与机构**

- Bensaid, Reda：机构信息未能从会议 PDF 纯文本可靠映射
- Ouasfi, Amine：机构信息未能从会议 PDF 纯文本可靠映射
- Bendou, Yassir：机构信息未能从会议 PDF 纯文本可靠映射
- Moummad, Ilyass：机构信息未能从会议 PDF 纯文本可靠映射
- Gripon, Vincent：机构信息未能从会议 PDF 纯文本可靠映射
- Leduc\-Primeau, François：机构信息未能从会议 PDF 纯文本可靠映射
- Boukhayma, Adnane：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频\-语言模型（Audio\-Language Models, ALMs）在少样本下适配困难，输入为每类16个带标签音频与类别文本，输出为测试音频的闭集类别，难点在于音频\-文本模态鸿沟大而可用音频\-文本配对远少于视觉领域。MUKA冻结Pengi提取音频嵌入\`x\`与文本分类矩阵\`W\_Pengi\`并计算零样本对数\`x\`转置乘\`W\_Pengi\`作为先验，再并行提取Pengi细粒度嵌入与CLAP全局语义嵌入并分别构造径向基函数（Radial Basis Function, RBF）核，最后将两路核逐对相乘形成乘积核并代入近端核岭回归的闭式缓存解得到适配后分类器。该乘积机制与单特征缓存或提示学习不同，它要求两空间同时同意才算相似，从而抑制细粒度伪相关并保留全局语义。在11个数据集的16样本评测中，MUKA平均准确率达到80\.90%，超越最强训练基线PaLM的76\.58%和线性探测的75\.19%。该结论限于以Pengi为主干的英文提示\`This is a recording of \[CLASS\]\`与闭集分类任务，未验证开放词汇检索、跨语言或强噪声下的外推能力。原文未披露训练、推理或部署成本，仅说明实验在NVIDIA RTX 3090上进行。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 29. [用听者自己的双耳线索抓目标说话人：个性化头相关传输函数做双耳提取](/posts/conference-eusipco-2026-conference-paper-id-0000356-0ad84c94b5/)

> 英文题目：*[BINAURAL TARGET SPEAKER EXTRACTION USING INDIVIDUALIZED HRTF](/posts/conference-eusipco-2026-conference-paper-id-0000356-0ad84c94b5/)*

标签：#CNN #多通道 #空间音频信号 #去混响 #目标说话人提取

评分：**6.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#目标说话人提取 | 主方法：#CNN

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000356.pdf)

👥 **作者与机构**

- Ellinson, Yoav：机构信息未能从会议 PDF 纯文本可靠映射
- Gannot, Sharon：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

双耳目标说话人提取需从双通道混合中恢复目标在左右耳的波形，同时保留耳间电平与时间线索并在混响下仅保留直达声，难点在于左右通道须联合处理且不能依赖说话人注册语音。编码阶段将双通道混合短时傅里叶变换送入复数值U型网络编码器提取时频特征，保留幅度与相位结构并经跳跃连接支撑重建。线索注入阶段在瓶颈处对个体头部相关传输函数线索编码并复制至各时间帧，再与混合编码逐帧逐元素相乘形成目标方向约束。精炼重建阶段将融合张量送入多层自注意力与全连接层精炼，再经解码器重建双耳复频谱，并以尺度不变信号失真比与频域平均绝对误差多阶段加权训练抑制音乐噪声。与依赖说话人嵌入或到达方向独热向量的方法不同，该方法以个体头部相关传输函数同时提供幅度与相位线索，直接锚定双耳结构并使输出主导为直达声。在θd为负60度的评测条件下，Bi\-TSE\-HRTF的ΔITD指标为0\.0 ms，低于BDE\-BiTSE的ΔITD指标1\.0667 ms。该结论适用边界受限于两说话人全重叠、无加性噪声、固定半径与已知目标方向，混响下去混响质量下降且尚未验证多人多噪与头部相关传输函数失配等失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://doi.org/10.35111/ewkm-cg47> → <https://catalog.ldc.upenn.edu/LDC93S6A> — 链接可访问（HTTP 200）
- 演示资源：<https://bi-ctse-hrtf.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 30. [不用干净语音和 transcript，能否用端到端识别的不确定性估计每个词的可懂度](/posts/conference-eusipco-2026-conference-paper-id-0000161-61eb7cc215/)

> 英文题目：*[BLIND, MICROSCOPIC METRICS OF HUMAN SPEECH INTELLIGIBILITY USING END\-TO\-END SPEECH RECOGNITION](/posts/conference-eusipco-2026-conference-paper-id-0000161-61eb7cc215/)*

标签：#Transformer #言语感知 #语音 #语音可懂度评估

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音可懂度评估 | 主方法：#Transformer

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000161.pdf)

👥 **作者与机构**

- Wißmann, Alexander：机构信息未能从会议 PDF 纯文本可靠映射
- Riegel, Jasmin：机构信息未能从会议 PDF 纯文本可靠映射
- Zeiler, Steffen：机构信息未能从会议 PDF 纯文本可靠映射
- Reichenbach, Tobias：机构信息未能从会议 PDF 纯文本可靠映射
- Kolossa, Dorothea：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音可懂度预测需在无干净参考与无转录的盲条件下仅从退化语音估计人耳词识别率，难点是端到端识别缺乏帧级对齐且束搜索引入语言偏置，导致内部不确定性难以定位到词。该方法先在GRID语料上以混合CTC注意力架构训练端到端识别器，并以Musan环境噪声、双人巴布尔噪声与语音形噪声增强训练数据，输出编码后验与解码后验作为后续度量基础。接着从注意力解码步后验、CTC束搜索后验与CTC帧级后验三类内部表示抽取词元分布，前者的分布离散度进入下一步计算，后者的帧级后验保留时间对齐以支持微观切分。然后以熵、平均时间距离与离散度量化分布离散与时序不稳定，并按词或整句平均分别形成微观与宏观指标，直接以不确定性代理听辨难度。相对依赖干净参考的短时客观可懂度类侵入式指标与需转录的识别错误率基线，以及传统深度神经网络隐马尔可夫对齐方法，该差异使端到端模型在保持完全盲估计的同时兼顾开放词表与多语潜力，具有实时优化意义。在GRID语音形噪声任务评测设置下，低信噪比条件的信噪比指标为\-14 dB，从低信噪比条件的信噪比指标\-14 dB升至高信噪比条件的信噪比指标6 dB。该结论适用边界受限于封闭矩阵句、语音形噪声与正常听力受试者，尚未验证开放词表、真实混响与听损人群的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://doi.org/10.1109/TASLP.2018.2856374> → <https://ieeexplore.ieee.org/document/8411476/> — 链接可访问（HTTP 202）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 31. [链式推理何时帮倒忙：语音理解与描述中的显式思维链、课程学习与槽填充对照](/posts/conference-eusipco-2026-conference-paper-id-0000446-afe63d3157/)

> 英文题目：*[BREAKING THE CHAIN: EVALUATING COT AND SLOT FILLING FOR SPEECH CAPTIONING AND UNDERSTANDING AND RELEASING CAPTIONS FOR 5,000 HOURS OF SPEECH](/posts/conference-eusipco-2026-conference-paper-id-0000446-afe63d3157/)*

标签：#数据集 #课程学习 #音频字幕生成 #语音属性识别

评分：**6.6/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频字幕生成 | 主方法：#课程学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000446.pdf)

👥 **作者与机构**

- Bountouridis, Dimitrios：机构信息未能从会议 PDF 纯文本可靠映射
- Packań, Filip：机构信息未能从会议 PDF 纯文本可靠映射
- Amiriparian, Shahin：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作面向情感化英语语音的理解与字幕生成，输入为韵律丰富的语音，输出为性别与音高与语速与能量与情感等离散属性及自然语言字幕，难点在于多韵律维度相互纠缠且长推理链易累积误差。方法先在TextrolSpeech情感子集上微调Qwen2\-Audio基座，固定种子训练2轮并以200步间隔验证选优。接着对比显式思维链按固定顺序生成中间属性再预测目标与经自蒸馏压缩为直接预测的隐式思维链，以及由短到长的从左向右与从右向左课程学习。最后引入无序槽位填充并行预测维度\-值集合再生成字幕，消除强制顺序依赖。与固定顺序显式推理相比，无序建模避免维度间伪依赖传播，隐式与课程变体则缓解长链优化困难，更侧重语义丰富性而非特定顺序。在TextrolSpeech推理路径长度评测任务下，隐式CoT的中位UAR指标为60\.00，高于显式CoT的中位UAR指标47\.50。其结论适用边界受限于单基座与英语情感子集，且除情感外其余维度为自动衍生标签，向真实分布外推尚未验证。训练成本为2张H200上低秩适配微调2轮，显式链推理开销更长而槽位填充与隐式路径更省。

🔗 **开源资源**

- 数据相关资源：<https://zenodo.org/records/17144271> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 32. [用音素识别度量声道形状合成：当逐点距离看不出时间稳定性时怎么办](/posts/conference-eusipco-2026-conference-paper-id-0000461-b6c3444222/)

> 英文题目：*[EVALUATING SPEECH ARTICULATION SYNTHESIS WITH ARTICULATORY PHONEME RECOGNITION](/posts/conference-eusipco-2026-conference-paper-id-0000461-b6c3444222/)*

标签：#评测协议 #发声与构音 #语音 #语音识别

评分：**6.6/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#评测协议

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000461.pdf)

👥 **作者与机构**

- Ribeiro, Vinicius：机构信息未能从会议 PDF 纯文本可靠映射
- Laprie, Yves：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以音素序列为输入合成声道形状并以可懂度评价输出，难点在于点向最近点距离会惩罚合理的说话人内变异，而管腔变量适合辅音收缩度量却难以刻画元音共鸣腔形状。方法链分三步：先从50Hz实时磁共振影像提取十个构音子轮廓并拼接为五百维两通道识别特征，其次以受深度语音2启发的卷积加循环网络训练声学基线与构音音素识别器并以联结时序分类损失优化音素错误率，最后将均值轮廓、无模型与自编码器三种合成特征连同浊音编码送入冻结的构音识别器比较解码性能。上一步输出的合成特征直接作为下一步识别器的输入，因而识别错误率反映合成器保留的发音部位与时序连贯信息。与点向距离无法区分两种神经合成器的现状不同，该机制直接检验合成形状能否被解码为正确音素，更贴近发音可懂性的实际意义。在TIMIT基准下，wav2vec 2\.0的PER为8\.3，低于wav2vec的PER 14\.7。结论适用边界受限于单人法语连续语音与中矢状面轮廓，跨说话人泛化与唇圆展三维信息缺失尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/vribeiro1/artspeech> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 33. [眼镜框上有麦、耳朵处无麦：辅助滤波器为何在方向偏离时失效](/posts/conference-eusipco-2026-conference-paper-id-0000966-261fd65669/)

> 英文题目：*[ACTIVE NOISE CONTROL FOR AUGMENTED REALITY GLASSES USING VIRTUAL SENSING WITH DIRECTIONAL ROBUSTNESS](/posts/conference-eusipco-2026-conference-paper-id-0000966-261fd65669/)*

标签：#自适应滤波 #鲁棒性 #理论分析 #单通道 #主动降噪

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 0.8/1.5 | 清晰度 0.6/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#主动降噪 | 主方法：#自适应滤波

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000966.pdf)

👥 **作者与机构**

- Peled, Nitay：机构信息未能从会议 PDF 纯文本可靠映射
- Rafaely, Boaz：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文面向AR眼镜主动噪声控制，输入为镜架参考传声器与监测传声器信号，输出为耳处虚拟点的反相控制声，难点在于耳处无物理误差传声器而监测点控制不能代表耳处效果，且镜架固定传声器存在因果性约束。先构建参考到次级扬声器的前馈控制通路生成抵消声。接着用离线校准的辅助滤波器把监测误差映射为虚拟误差，其输出进入下一步驱动滤波\-x最小均方自适应更新控制滤波器。最后在控制阶段按噪声到达方向从有限滤波器组中选择最近校准方向的辅助滤波器以避免连续重校准。与固定单辅助滤波器相比，该方向选择机制以离散覆盖换取对角度失配的鲁棒性，理论灵敏度与\|sin\(ϕ−ϕ0\)\|成正比故在参考\-监测轴附近更稳健。在因果角度范围ϕ0±90°自由场仿真评测设置下，5滤波器组方法的平均衰减指标为25\.3 dB，低于逐角度完全校准方法的平均衰减指标29\.1 dB。结论适用边界受限于单通道单点噪声源与自由场条件，当声源偏离参考\-监测轴超过90度进入非因果区时所有方法均显著退化。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://www.chimechallenge.org/challenges/chime8/task3/data> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 34. [剪掉反而更准：解码器自注意力与深层编码器的冗余在哪里](/posts/conference-eusipco-2026-conference-paper-id-0000146-91fba44af9/)

> 英文题目：*[PRUNING AS REGULARIZATION: SENSITIVITY\-AWARE ONE\-SHOT PRUNING IN ASR](/posts/conference-eusipco-2026-conference-paper-id-0000146-91fba44af9/)*

标签：#模型剪枝 #鲁棒性 #语音 #语音识别

评分：**6.5/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#模型剪枝

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000146.pdf)

👥 **作者与机构**

- Irigoyen, Julian：机构信息未能从会议 PDF 纯文本可靠映射
- Söhler, Arthur：机构信息未能从会议 PDF 纯文本可靠映射
- Søeborg Kirkedal, Andreas：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

自动语音识别需将连续声学帧输入映射为离散词序列输出，Whisper\-small类编码器\-解码器Transformer因过参数化易在训练域声学模式上过拟合，导致噪声与口音条件下泛化受损。该方法先在LibriSpeech验证集子集上计算归一化梯度敏感度与对角Fisher敏感度，以量化各组件与各层的剪枝脆弱性与冗余度。再按编码器、解码器及层块独立执行一次性非结构化幅度剪枝，并以词错误率验证各配置的性能变化，从而筛选出冗余位置。随后将LibriSpeech上选定的稀疏掩膜不经重算直接复用于Common Voice与TED\-LIUM，以检验跨语料泛化。与全局均匀剪枝不同，该方法按组件与层分配稀疏度，保护脆弱的解码器前馈网络而集中剪枝冗余的解码器自注意力和末端编码器层。在TED\-LIUM测试集下，Late Enc（9\-12）的WER为5\.86%，低于Baseline的WER 6\.43%。其适用边界受限于Whisper\-small英文朗读与演讲语料的无微调一次剪枝，多模型与多语言外推尚未验证。计算量从4\.55降至2\.77 GFLOPs且所用硬件为NVIDIA H100，而非结构化掩膜未被稠密核加速故推理开销上实时因子不变。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 35. [把去噪和去混响写进同一优化展开：多麦克风前向后向网络如何同时用上房间模型与学习先验](/posts/conference-eusipco-2026-conference-paper-id-0000421-5e1da02f88/)

> 英文题目：*[UNFOLDING FOR AUDIO QUALITY IMPROVEMENT IN THE PRESENCE OF NOISE AND REVERBERATION](/posts/conference-eusipco-2026-conference-paper-id-0000421-5e1da02f88/)*

标签：#信号处理 #麦克风阵列 #音乐 #去混响 #语音增强

评分：**6.5/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音增强 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000421.pdf)

👥 **作者与机构**

- Negru, Marian：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolae, Ana：机构信息未能从会议 PDF 纯文本可靠映射
- Burileanu, Corneliu：机构信息未能从会议 PDF 纯文本可靠映射
- Pesquet, Jean\-Christophe：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为同一声源经不同房间脉冲响应卷积并叠加高斯噪声后由多个麦克风采集的退化信号，输出为干净单声道语音或音乐，难点在于同时逆转卷积混响与加性噪声这一病态逆问题。方法先在频域对加权最小二乘保真项做梯度步实现多通道去混响，再经逆离散傅里叶变换回到时域执行去噪近端步，两步交替构成前向后向迭代。展开后梯度步被重写为权重与偏置由房间频率响应和噪声方差决定的仿射层，步长与正则系数经 Sigmoid 与 Softplus 约束为可学习参数。去噪步则由软阈值或频域 L2 近端算子替换为拼接噪声水平条件的 MP\-SENet 生成器，实现模型与数据混合驱动。与单通道生成增强相比，关键差异在于利用多通道物理模型显式解耦混响反演与学习去噪。在 LibriSpeech 测试集上三麦克风展开 MP\-SENet 取得 12\.375 dB 信噪比与 12\.429 dB SI\-SDR，明显高于单通道 MP\-SENet 的 5\.138 dB 与 3\.338 dB。该结论限于已知或可较准估计脉冲响应与噪声方差的合成高斯噪声场景，未验证真实噪声、移动声源与未知阵列几何的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 36. [把回授当成晚期混响：去混响滤波器何以同时做声反馈抑制](/posts/conference-eusipco-2026-conference-paper-id-0000191-7b581de4d2/)

> 英文题目：*[ON THE USE OF DEREVERBERATION FOR ACOUSTIC FEEDBACK CANCELLATION](/posts/conference-eusipco-2026-conference-paper-id-0000191-7b581de4d2/)*

标签：#自适应滤波 #麦克风阵列 #语音 #去混响

评分：**6.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#去混响 | 主方法：#自适应滤波

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000191.pdf)

👥 **作者与机构**

- Liekens, Basil：机构信息未能从会议 PDF 纯文本可靠映射
- Roebben, Arnout：机构信息未能从会议 PDF 纯文本可靠映射
- van Waterschoot, Toon：机构信息未能从会议 PDF 纯文本可靠映射
- Moonen, Marc：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为含混响与声反馈的4通道麦克风信号，输出为仅保留直达声与早期反射的单通道期望语音，难点在于反馈信号与源语音强相关且闭环增益过高会导致啸叫失稳。首先将麦克风信号建模为源信号经闭环无限冲激响应滤波的自回归滑动平均过程，明确区分早期期望分量与晚期干扰分量。接着论证当回放处理与反馈路径联合延迟足够大且闭环传递函数可被有限冲激响应近似时，反馈分量在时域上落入晚期混响区间。然后在短时傅里叶变换域用带延迟的多通道递归加权预测误差滤波预测当前帧晚期分量并相减，从而同时抑制混响与反馈。与需回放参考信号显式辨识反馈路径的连续自适应滤波器相比，该方法无需参考信号，仅靠延迟线性预测实现联合去混响与反馈消除，避免了相关性导致的估计偏置与欠建模问题。在MYRiAD房间混响语料闭环处理评测场景下，WPE的SIR指标为20dB，高于CAF\-CTF的SIR指标0dB。该结论的适用边界受限于联合延迟充分大、闭环可被有限长逆滤波近似以及单声源无噪声无干扰的实验假设。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/BasilLiekens/integrated-afc-dr> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 37. [把削波变成可逆折叠：用溢出对抗削波的音频采集](/posts/conference-eusipco-2026-conference-paper-id-0000411-863af83cb5/)

> 英文题目：*[DIGITAL AUDIO VIA UNLIMITED SENSING: OVERFLOW OVERCOMES CLIPPING AND OVERFLOW](/posts/conference-eusipco-2026-conference-paper-id-0000411-863af83cb5/)*

标签：#形式化分析 #信号处理 #音乐 #语音 #去削波

评分：**6.4/10** | 创新 1.5/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.1/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#去削波 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000411.pdf)

👥 **作者与机构**

- Guo, Ruiming：机构信息未能从会议 PDF 纯文本可靠映射
- Bhandari, Ayush：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理高动态范围音频超出模数转换器量程后的削波与环绕溢出，输入为折叠或截断观测，输出为恢复的高动态波形，难点在于大幅值信息被永久截断丢失且音频数据规模巨大难以全局组合优化。方法链第一步在模拟前端注入模数折叠，将大幅值映射到有界区间以保留全部幅度信息并避免破坏性饱和，其有界折叠采样进入第二步。第二步利用带限信号高阶差分衰减特性，从折叠差分中滤除平滑分量并以反对差分回推丢失的最高有效位，实现由最低有效位重建缺失位的局部展开，其粗重建进入第三步。第三步对含硬件非理想的实测信号分帧做离散余弦变换稀疏化，并用矩阵束方法估计脉冲位置以完成鲁棒局部拼接与最终波形恢复。与事后修复削波的已有方法相比，关键差异在于把可逆非线性放在采样前并保证过采样下精确可恢复，而非从截断波形猜测缺失峰值，因而把灾难性溢出转化为可解结构并扩展动态范围。在极端削波硬件评测设置下，USF\-Audio的∆SDR为\>25 dB，高于最强去削波基线的∆SDR≈11 dB。该结论适用边界为带限且充分过采样的语音与音乐片段，对强非平稳瞬态与严重噪声折叠等条件尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 38. [把感知显著性压进粗结构：噪声增强自编码器如何对齐音乐表征](/posts/conference-eusipco-2026-conference-paper-id-0000041-7cac7d8d25/)

> 英文题目：*[PERCEPTUALLY ALIGNING REPRESENTATIONS OF MUSIC VIA NOISE\-AUGMENTED AUTOENCODERS](/posts/conference-eusipco-2026-conference-paper-id-0000041-7cac7d8d25/)*

标签：#扩散模型 #听觉与音乐认知 #音乐 #音频编码

评分：**6.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频编码 | 主方法：#扩散模型

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000041.pdf)

👥 **作者与机构**

- Bjare, Mathias Rose：机构信息未能从会议 PDF 纯文本可靠映射
- Cantisani, Giorgia：机构信息未能从会议 PDF 纯文本可靠映射
- Pasini, Marco：机构信息未能从会议 PDF 纯文本可靠映射
- Lattner, Stefan：机构信息未能从会议 PDF 纯文本可靠映射
- Widmer, Gerhard：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理从音乐音频估计感知惊奇度的问题，输入为高维音乐波形压缩后的潜序列，输出为与人类期望一致的信息内容 Information Content / IC 及对脑电响应的预测增量，难点在于常规自编码器潜空间缺乏感知显著性与粗细结构的对应排序。方法链分三步：先以噪声增强潜变量微调一致性自编码器 Consistency Autoencoder / CAE 使粗结构承载感知关键信息，再用因果 Transformer 汇总历史上下文，最后以自回归整流流 Rectified Flow 模型估计下一帧负对数似然作为惊奇度。与冻结表征加扩散不同，该训练迫使同一输入在多信噪比下同时满足感知重建损失。与已有方法相比的关键差异是将扩散的频谱信噪比偏置反向用于表征学习，而非仅用于生成。在合成爱尔兰单声部数据集 SYN 与歌声数据集 VOC 上，对齐空间在中间噪声水平与符号期望模型 IDyOM 的 Spearman 秩相关达到峰值并高于未对齐空间与基线，且在歌声脑电编码中于 \(t\) 为 0\.2 到 0\.6 范围显著更优。结论仅在音高主导的单声部与歌声场景验证，未证明对节奏音色等特征的外推性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 39. [噪声下保住机器线索：用保留混合表示做域泛化异常声音检测](/posts/conference-eusipco-2026-conference-paper-id-0000231-44ee26d126/)

> 英文题目：*[RETAINING MIXTURE REPRESENTATIONS FOR DOMAIN GENERALIZED ANOMALOUS SOUND DETECTION](/posts/conference-eusipco-2026-conference-paper-id-0000231-44ee26d126/)*

标签：#工业应用 #知识蒸馏 #自监督学习 #鲁棒性 #异常声音检测

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.2/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#异常声音检测 | 主方法：#知识蒸馏

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000231.pdf)

👥 **作者与机构**

- Saengthong, Phurich：机构信息未能从会议 PDF 纯文本可靠映射
- Nishida, Tomoya：机构信息未能从会议 PDF 纯文本可靠映射
- Dohi, Kota：机构信息未能从会议 PDF 纯文本可靠映射
- Yamashita, Natsuo：机构信息未能从会议 PDF 纯文本可靠映射
- Kawaguchi, Yohei：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

异常声音检测以正常机器录音为参考、用最近邻匹配为测试片段计算异常分，在低信噪比混合与参考测试噪声失配下通用音频编码器易丢失机器线索，导致匹配不可靠。方法先做神谕诊断，将干净机器与噪声分别经冻结教师编码后平均为神谕嵌入，发现其最近邻性能明显优于直接混合嵌入，从而确认瓶颈在表征缺失。随后按信噪比混合正常机器音与工厂噪声生成训练混合，教师分别编码干净双源并按固定权重合成为混合一致目标，学生编码器接收混合输入学习保留式表征。学生端联合优化机器与噪声多标签标注损失与向神谕嵌入对齐的混合损失，前者保留类别信息，后者约束混合表征不坍缩，对齐后的混合嵌入直接进入后续最近邻检索。与去噪式微调抑制噪声学习不变性不同，该方法明确保留双源信息，避免学到与预训练机噪条件绑定的抑制模式，因而在冻结骨干的免训练部署中更具泛化意义。在Mismatch失配条件评测下，所提对齐方法的得分为64\.2，高于基线的得分60\.4。该结论适用边界受限于六类ToyADMOS\+评估机型与人工信噪比混合，尚未验证双向域失配与大规模多样噪声外推，且神谕增益的机型差异表明线性合成并非对所有机器同样有效。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 40. [双耳定位先选对时频特征：两特征够用域内，多样内容才需通道谱加双耳线索](/posts/conference-eusipco-2026-conference-paper-id-0000266-3b324d10fd/)

> 英文题目：*[SYSTEMATIC EVALUATION OF TIME\-FREQUENCY FEATURES FOR BINAURAL SOUND SOURCE LOCALIZATION](/posts/conference-eusipco-2026-conference-paper-id-0000266-3b324d10fd/)*

标签：#CNN #时频分析 #空间音频信号 #声源定位

评分：**6.3/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#声源定位 | 主方法：#CNN

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000266.pdf)

👥 **作者与机构**

- Shariat Panah, Davoud：机构信息未能从会议 PDF 纯文本可靠映射
- Ragano, Alessandro：机构信息未能从会议 PDF 纯文本可靠映射
- Barry, Dan：机构信息未能从会议 PDF 纯文本可靠映射
- Skoglund, Jan：机构信息未能从会议 PDF 纯文本可靠映射
- Hines, Andrew：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

双耳声源定位需从左右耳信号估计连续方位角，难点在于头相关传输函数个体差异与训练未见音色导致跨域泛化崩塌。该方法先以25ms窗10ms跳的短时傅里叶变换提取幅度谱与相位谱并导出耳间强度差与相位差，再将选定组合堆叠为多通道输入送入三层轻量卷积网络分层提取空间模式，最后用圆周角损失回归方位角并以平均角度误差评估。其中特征构造负责显式注入高低频互补线索，卷积网络负责保持轻量以凸显特征质量，损失负责消除角度周期不连续。相对直接学习谱间关系的FAViT与BAST\-MAMBA等模型，其关键机制差异在于保留原始谱上下文的同时显式提供耳间差，避免从零隐式发现双耳关系，因而更重特征设计而非堆叠复杂度。在SynBAD\-Var零度仰角测试集下，CNN模型的MAE为8\.4°±1\.0°，低于BAST\-MAMBA基线的MAE 11\.0°±0\.9°。该结论适用边界受限于合成全球面单声源方位角任务，纯音等窄带信号仍误差较高且多源场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/dspanah/Binaural> — 链接不可用（HTTP 404）
- 数据相关资源：<https://zenodo.org/records/20355674> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 41. [双模态变差、三模态恢复：用聚合标记锚定含噪转写的流利度评估](/posts/conference-eusipco-2026-conference-paper-id-0000451-ee0be9735a/)

> 英文题目：*[TRIMODAL FUSION WITH N\-GRAM REPETITION FOR AUTOMATIC FLUENCY ASSESSMENT](/posts/conference-eusipco-2026-conference-paper-id-0000451-ee0be9735a/)*

标签：#教育 #多模态学习 #可解释性 #语音 #语音属性识别

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音属性识别 | 主方法：#多模态学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000451.pdf)

👥 **作者与机构**

- Wade, Papa Séga：机构信息未能从会议 PDF 纯文本可靠映射
- Andries, Mihai：机构信息未能从会议 PDF 纯文本可靠映射
- Kanellos, Ioannis：机构信息未能从会议 PDF 纯文本可靠映射
- Moudenc, Thierry：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

第二语言流利度评估以朗读与自发语音为输入，输出低、中、高三级流利度标签，难点在于非母语语音的自动语音识别（Automatic Speech Recognition，ASR）转写噪声与儿童成人变异会污染文本线索。方法链分三步推进：先由微调后的声学编码器与多语言文本编码器分别抽取话语级声学向量与句级语义向量，并同步计算语速与复述统计量；再经可学习投影把异构模态映射到统一共享空间并拼接；最后由双向循环网络完成融合分类。相对已有跨模态注意力方案，差异在于用聚合统计量充当稳定锚而非引入更复杂的对齐机制，意义是抑制孤立转写错误对词元级嵌入的放大。在 Avalinguo 自发语音说话人不重叠分层五折验证下三模态达到 95\.97%准确率与 95\.84% F1，在 Speechocean762 官方说话人不重叠划分下达到 82\.18%准确率与 82\.60% F1，均超越声学单模态与双模态组合。结论仅在英语二语朗读与约 5 秒自发片段三分类内验证，未验证细粒度打分、重度噪声与低资源语言外推。训练采用交叉熵损失与 AdamW，推理直接取 Softmax 最大类别，未报告时延吞吐。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 42. [混响一重噪声一来就失准：用场景嵌入去拨动音频与运动的融合闸门](/posts/conference-eusipco-2026-conference-paper-id-0001207-388f41b492/)

> 英文题目：*[CONTEXT\-AWARE SENSOR FUSION: ROBUST 6DOF AUDIO TRACKING VIA SOUND SCENE ANALYSIS](/posts/conference-eusipco-2026-conference-paper-id-0001207-388f41b492/)*

标签：#多模态学习 #鲁棒性 #麦克风阵列 #联合声音事件检测定位

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#联合声音事件检测定位 | 主方法：#多模态学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001207.pdf)

👥 **作者与机构**

- Yeow, Jun\-Wei：机构信息未能从会议 PDF 纯文本可靠映射
- Tan, Ee\-Leng：机构信息未能从会议 PDF 纯文本可靠映射
- Peksi, Santi：机构信息未能从会议 PDF 纯文本可靠映射
- Gan, Woon\-Seng：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理可穿戴听者视角的联合声音事件检测定位，输入为4通道耳机阵列音频与头部运动速度，输出为活动耦合笛卡尔到达方向向量，难点是噪声与混响破坏空间线索而运动线索相对稳定。方法先由场景分析器从声学特征提取环境嵌入并以信噪比与混响时间分类为辅助监督，得到物理可解释的上下文表示。接着将该嵌入与压缩后音频特征和运动特征拼接构造联合上下文并经全连接层生成双路激励门。然后在因果声学编码器与运动编码器逐层施加门控重校准特征流，再经单向循环网络融合输出定位结果。相比仅依赖特征统计的静态多模态迁移与强制共享表示的多任务学习，该设计把环境智能解耦为门控控制信号，避免空间表示被场景语义干扰，实现按条件动态调制。在6DoF SELD数据集测试集下，SA\-MMTM方法的ESELD指标为0\.265±0\.004，低于Audio\-Motion静态融合基线的ESELD指标0\.281±0\.003。该结论适用边界受限于仅在3种信噪比与3种混响时间的受控组合内验证，尚未验证连续退化与真实噪声外推，额外计算量仅为18\.6K参数和37\.4M MACs，原文称可保持实时推理开销可忽略。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 43. [带底噪也要无缝改口：先分离再压残留噪声的语音编辑](/posts/conference-eusipco-2026-conference-paper-id-0000476-b53836047e/)

> 英文题目：*[SEAMLESSEDIT: BACKGROUND NOISE AWARE ZERO\-SHOT SPEECH EDITING WITH IN\-CONTEXT ENHANCEMENT](/posts/conference-eusipco-2026-conference-paper-id-0000476-b53836047e/)*

标签：#注意力机制 #零样本 #环境声 #语音 #语音编辑

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音编辑 | 主方法：#注意力机制

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000476.pdf)

👥 **作者与机构**

- Chen, Kuan\-Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Li, Jeng\-Lin：机构信息未能从会议 PDF 纯文本可靠映射
- Lu, De\-Yan：机构信息未能从会议 PDF 纯文本可靠映射
- Ding, Jian\-Jiun：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

带噪语音编辑的输入是含环境噪声的连续波形与目标文本，输出是局部插入或替换后仍保留原说话人音色与背景氛围的完整带噪语音，难点是语音与噪声频带交叠时分离后验有偏且编辑边界易产生可闻断裂。无缝编辑先用分数扩散再生模型StoRM将混合波形拆为分离语音Xs与背景噪声Xn，保留高低频谐波以供后续处理。接着用稀疏贝叶斯学习估计语音稀疏频带并配合巴特沃斯零相位前后向滤波得到低频增强信号Xl，压制均匀分布的残留噪声。然后以Xl为键值对Xs做多头注意力上下文精修，再经VoiceCraft编解码器重生成干净编辑语音Xe并与原Xn相加得到最终带噪结果Y。与假设上下文干净的Voicebox、VoiceCraft等方法不同，该路线显式保留并回填环境声而非一味去噪，因而能维持编辑区与非编辑区听感一致。在EARS\-WHAM噪声子集长替换任务评测设置下，Our SeamlessEdit的NMOS得分为3\.65，高于Voicecraft的NMOS得分为2\.93。适用边界为单说话人主导的非强重叠场景，女性高频与动态噪声下仍有残留失真与频谱质心偏低。实现所用硬件为单个NVIDIA A16 GPU并沿用VoiceCraft编解码配置，原文未系统报告训练成本与推理开销的延迟吞吐。

🔗 **开源资源**

- 演示资源：<https://danielchen1128.github.io/SeamlessEdit/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 44. [低信噪比下参考信号不可靠、矩阵太大：用主特征向量重建参考并压缩延迟观测的 WPE](/posts/conference-eusipco-2026-conference-paper-id-0000976-e72fc34c1a/)

> 英文题目：*[ROBUST SPEECH DEREVERBERATION BASED ON SIGNAL COMPRESSION AND REFERENCE SIGNAL RECONSTRUCTION](/posts/conference-eusipco-2026-conference-paper-id-0000976-e72fc34c1a/)*

标签：#自适应滤波 #鲁棒性 #麦克风阵列 #语音 #去混响

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#去混响 | 主方法：#自适应滤波

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000976.pdf)

👥 **作者与机构**

- Chen, Yitong：机构信息未能从会议 PDF 纯文本可靠映射
- Jin, Danqi：机构信息未能从会议 PDF 纯文本可靠映射
- Zhang, Wen：机构信息未能从会议 PDF 纯文本可靠映射
- Chen, Jie：机构信息未能从会议 PDF 纯文本可靠映射
- Chen, Jingdong：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为麦克风阵列采集的带噪混响语音短时傅里叶变换（Short\-Time Fourier Transform，STFT）谱，输出为保留直达声与早期反射并抑制晚期混响的期望信号，难点是低混响信号噪声比（Reverberant\-Signal\-to\-Noise Ratio，RSNR）下加性噪声污染预测且多通道延迟观测导致大矩阵求逆代价高昂。方法链分三步：先对多通道观测协方差矩阵做特征分解得到主特征向量并构造类延迟相加波束成形参考信号，再用前 N 个特征向量构成压缩矩阵将观测降维至压缩域，最后在压缩域迭代估计时变方差与多通道线性预测（Multichannel Linear Prediction，MCLP）滤波器并相减得到去混响输出。与需已知导向矢量的联合波束成形加权预测误差相比，该机制免测向且同时压缩预测维度，具有更低复杂度与噪声鲁棒性。在 13 m × 12 m × 5\.5 m 仿真房间、8 通道阵列与白色噪声 10 dB RSNR 下，自适应压缩变体相对混响信号的感知语音质量评估（Perceptual Evaluation of Speech Quality，PESQ）增益为 0\.2048，明显高于原始 WPE 的 0\.0078。该结论仅在单一混响时间与合成噪声仿真内验证，未覆盖真实房间、移动声源与强干扰说话人等外推场景。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/ehabets/RIR-Generator> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 45. [采集条件会改变声音：用元数据调制音频 Transformer 的内部表示](/posts/conference-eusipco-2026-conference-paper-id-0001322-37d1a79ef4/)

> 英文题目：*[METADATA\-CONDITIONED AUDIO TRANSFORMERS FOR ADAPTIVE RESPIRATORY SOUND CLASSIFICATION](/posts/conference-eusipco-2026-conference-paper-id-0001322-37d1a79ef4/)*

标签：#医疗音频 #Transformer #预训练 #生理信号 #音频分类

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分类 | 主方法：#Transformer

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001322.pdf)

👥 **作者与机构**

- Kontogiannis, George：机构信息未能从会议 PDF 纯文本可靠映射
- Tzamalis, Pantelis：机构信息未能从会议 PDF 纯文本可靠映射
- Nikoletseas, Sotiris：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

呼吸音分类输入为最长10秒呼吸周期音频，输出为爆裂音与哮鸣音多标签判定，难点在于设备频响、听诊部位与患者特征引入的系统性偏移会掩盖病理信号。本文先以按患者聚类的广义估计方程量化上述混杂，确认部位与年龄等因素显著改变分类难度，其输出的偏置结构直接驱动后续调制设计。接着以音频频谱Transformer为声学骨干构建元数据调制链，门控残差融合将拼接元数据仅作用于最终表征以提供基线对照。特征线性调制在各层归一化后注入尺度与偏移，使上下文逐层重塑中间特征，令牌感知变体进一步分离全局与局部令牌的调制，软因子分解变体则为设备、部位与连续变量学习特征维掩码以对齐解耦子空间。与统一拼接或文本化融合相比，该链条让不同来源上下文作用于不同网络深度与不同特征子空间，因而更贴合设备影响频谱而部位决定可闻肺音的物理分工。在ICBHI官方60\-40%划分基准下，SoftFiLM\-AST的Score为72\.40%，高于Fraihi et al\.的Score 70\.08%。该结论适用边界受限于ICBHI已见设备与部位分布，尚未验证对全新听诊器或人群的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 46. [吉他没有力度真值时，如何让转录模型学会力度又不丢掉音高精度](/posts/conference-eusipco-2026-conference-paper-id-0000061-426bd9b3ba/)

> 英文题目：*[VELOCITY PREDICTION IN AUTOMATIC GUITAR TRANSCRIPTION](/posts/conference-eusipco-2026-conference-paper-id-0000061-426bd9b3ba/)*

标签：#数据增强 #迁移学习 #音乐 #音乐转录

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐转录 | 主方法：#迁移学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000061.pdf)

👥 **作者与机构**

- Loth, Jackson：机构信息未能从会议 PDF 纯文本可靠映射
- Riley, Xavier：机构信息未能从会议 PDF 纯文本可靠映射
- Dixon, Simon：机构信息未能从会议 PDF 纯文本可靠映射
- Benetos, Emmanouil：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为吉他独奏音频，输出为带音高与起止时间及力度Velocity的音符级MIDI序列，难点在于吉他缺乏钢琴Disklavier式的真实力度测量且公开数据集均无可信力度标注，力度本身仅为关联音量与音色的抽象强度定义。为此先对FrançoisLeduc对齐MIDI按谐波滤波能量加权估计伪力度并归一化至0至127，再用三种虚拟乐器的五种音色渲染约20小时合成音频以确立虚拟乐器力度曲线为真值定义。接着在合成数据上以高分辨率卷积循环网络的起音偏移帧与力度子模块联合训练学习该力度映射，损失为各子模块二元交叉熵之和。然后将学到的力度子模块参数冻结并迁移至真实数据模型，在GAPS与GOAT上去除力度损失项后继续训练起止帧预测，从而隔离不可信真实力度监督并保留合成域强度映射。与此前直接用常数力度微调同架构的做法不同，该流程以冻结合成力度分支为条件调节帧预测，使低力度处更关注帧激活而非拟合错误标签。在合成FrançoisLeduc歌曲划分测试集下，所提模型的误差指标平均绝对误差为7\.04，低于基线的误差指标平均绝对误差32\.39。该结论适用边界受限于合成力度定义内，对未知音色与真实演奏强度的外推尚未验证，音色划分下误差已升至11\.53且附带力度的F1明显回落。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 47. [只用单阵列相位谱估计说话人朝向：混响为何反而有帮助](/posts/conference-eusipco-2026-conference-paper-id-0000086-d7b2218e61/)

> 英文题目：*[SPEAKER HEAD ORIENTATION ESTIMATION WITH A SINGLE MICROPHONE ARRAY USING PHASE SPECTROGRAM FEATURES](/posts/conference-eusipco-2026-conference-paper-id-0000086-d7b2218e61/)*

标签：#时频分析 #麦克风阵列 #语音 #声源定位

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#声源定位 | 主方法：#时频分析

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000086.pdf)

👥 **作者与机构**

- Turi, Bálint：机构信息未能从会议 PDF 纯文本可靠映射
- Politis, Archontis：机构信息未能从会议 PDF 纯文本可靠映射
- Sudarsanam, Parthasaarathy：机构信息未能从会议 PDF 纯文本可靠映射
- Virtanen, Tuomas：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理单阵列方位角说话人头部朝向估计，输入为单句多通道语音，输出为0到360度连续角度，难点在于语音辐射方向性微弱且易被混响噪声与个体差异淹没。管线先用语音活动检测切除首尾静音，再对各通道做短时傅里叶变换并取相位正余弦构成特征，随后送入卷积循环注意力网络回归正余弦向量并经反正切恢复角度。卷积层压缩时频并保留通道空间结构，双向门控循环单元建模时序依赖，多头自注意力提炼全局方向线索后由自适应池化聚合为 utterance 级表示。与手工互相关特征或原始波形端到端学习不同，该方案直接利用多通道相位差与反射结构，避免手工信息损失也不让网络从零学习滤波器。在仿真集干净条件下，STFT相位方法的平均角度误差为19\.9°，低于原始音频基线的平均角度误差44\.8°。在真实8分类任务条件下，本方法的准确率为73\.2%，高于既有基线的准确率65\.4%，说话人与房间联合个性化后平均角度误差为11\.3°。该结论适用边界限于单说话人静态朝向与固定高度圆阵，动态头部运动与多说话人重叠尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 48. [低信噪比谐波噪声下先做循环平稳波束形成再做神经网络去噪](/posts/conference-eusipco-2026-conference-paper-id-0000106-9fbbc28fcc/)

> 英文题目：*[A TWO\-STEP APPROACH FOR SPEECH ENHANCEMENT IN LOW\-SNR SCENARIOS USING CYCLOSTATIONARY BEAMFORMING AND DNNS](/posts/conference-eusipco-2026-conference-paper-id-0000106-9fbbc28fcc/)*

标签：#信号处理 #单通道 #语音 #语音增强

评分：**6.1/10** | 创新 1.4/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音增强 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000106.pdf)

👥 **作者与机构**

- Bologni, Giovanni：机构信息未能从会议 PDF 纯文本可靠映射
- Larraza, Nicolás Arrieta：机构信息未能从会议 PDF 纯文本可靠映射
- Heusdens, Richard：机构信息未能从会议 PDF 纯文本可靠映射
- Hendriks, Richard C\.：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理单通道低信噪比下的语音增强（speech enhancement），输入为被旋转机械谐波噪声严重掩蔽的含噪语音，输出为目标语音波形，难点在于谐波干扰与语音在时频域高度重叠且信噪比低至负值。方法链分为两步：先经时域调制构造频移增广观测以获得对齐循环频率的虚拟通道，再用循环最小功率无失真响应（cyclic minimum power distortionless response，cMPDR）求解谱波束成形器压制谐波分量，最后将预处理谱送入掩蔽估计深度神经网络（deep neural network，DNN）做残余噪声抑制与幅度或复数掩蔽重构。与直接让网络隐式学习谱耦合的做法不同，该管线用信号处理显式提供跨频统计先验，避免了短时傅里叶变换（short\-time Fourier transform，STFT）网格失配与相位关系破坏问题。在IDMT电机噪声测试集信噪比为\-20至\-10 dB条件下，卷积循环网络（convolutional recurrent neural network，CRNN）加cMPDR达到尺度不变信号失真比（scale\-invariant signal\-to\-distortion ratio，SI\-SDR）为5\.55 dB，显著高于同架构无预处理基线的1\.54 dB。结论仅适用于谐波稳定且循环频率可准确估计的循环平稳噪声，对深度噪声抑制挑战集（Deep Noise Suppression Challenge，DNS）通用噪声增益微弱，时变共振跟踪尚未解决。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/narrietal/cMPDR> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 49. [小模型留不住背景声：用分块蒸馏把双分支个性化增强做进端侧](/posts/conference-eusipco-2026-conference-paper-id-0000206-4b3a4db097/)

> 英文题目：*[TOWARDS ON\-EDGE PERSONALIZED SPEECH ENHANCEMENT WITH FEATURE\-BASED KNOWLEDGE DISTILLATION](/posts/conference-eusipco-2026-conference-paper-id-0000206-4b3a4db097/)*

标签：#知识蒸馏 #高效推理 #端侧运行 #目标说话人提取

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#目标说话人提取 | 主方法：#知识蒸馏

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000206.pdf)

👥 **作者与机构**

- Khodakov, Ivan：机构信息未能从会议 PDF 纯文本可靠映射
- Serre, Thomas：机构信息未能从会议 PDF 纯文本可靠映射
- Fontaine, Mathieu：机构信息未能从会议 PDF 纯文本可靠映射
- Benhaim, Eric：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

个性化语音增强以含噪混合波形与目标说话人注册语音为输入，输出目标说话人干净波形，难点是在强噪声与干扰说话人下同时保留目标音色与抑制背景。所提DualDF先由编码器对输入幅度谱做卷积编码并经FiLM注入192维ECAPA\-TDNN嵌入，输出进入可重复B次的分离器块逐块提纯掩蔽表示，编码器输出经残差与归一化送入解码器预测幅度掩蔽。掩蔽后波形进入深度滤波分支，该分支以前一分支末块隐表示经FiLM条件化，用因果单GRU预测复数滤波系数精修谐波与相位。蒸馏时以12块教师指导因果学生，同时对齐掩蔽logits均方误差、滤波系数均方误差与经线性投影器对齐的编码器加逐块特征均方误差，块数不一致时用均匀映射分散对齐。与仅做粗估计的掩蔽分支相比，每块重复FiLM条件与精修掩蔽设计强化了目标说话人保持，串联先掩蔽后滤波分工使背景抑制与信号保真解耦。在DNS5盲测集Track 1耳机场景下，6块DualDF学生的OVRL指标为3\.16，高于3块学生的OVRL 3\.12。该结论适用边界仅为16kHz单通道电话场景与个性化DNSMOS评价，跨语言、强混响与真实耳机助听设备的泛化尚未验证。学生以0\.89M参数与0\.42G计算量实现40ms延迟，满足端侧推理开销约束。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 50. [700 个等效源算不动时：用能量加权方向聚类保住早期反射](/posts/conference-eusipco-2026-conference-paper-id-0000331-57abac4c60/)

> 英文题目：*[CLUSTERING OF TIME\-DOMAIN EQUIVALENT SOURCES FOR EFFICIENT SOUND FIELD REPRODUCTION](/posts/conference-eusipco-2026-conference-paper-id-0000331-57abac4c60/)*

标签：#主观评测 #无监督学习 #高效推理 #声场重建

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#声场重建 | 主方法：#无监督学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000331.pdf)

👥 **作者与机构**

- Emthyas, Amal：机构信息未能从会议 PDF 纯文本可靠映射
- Neidhardt, Annika：机构信息未能从会议 PDF 纯文本可靠映射
- Amengual Garí, Sebastià V\.：机构信息未能从会议 PDF 纯文本可靠映射
- De Sena, Enzo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

动态双耳重放需以稀疏测量的双耳房间脉冲响应为输入，合成为任意位置姿态的连续声场输出，而全分辨率时域等效声源数达700且每源需双耳卷积，难以装入移动增强现实设备。先经稀疏约束系统反演由稀疏BRIRs估计全分辨率TESs权重信号，得到包围重放区的稠密方向权重。再以能量加权方向K均值对球面TESs做压缩，经归一化能量初始化、弦距离分配与质心迭代后输出少数新质心。最后将同簇权重相加并映射头相关脉冲响应以重建任意位置的BRIRs，完成降量重放。与按能量排序取前K个的基线不同，该方法以弦距离做方向聚类并用归一化能量驱动质心初始化与更新，迫使簇中心分散覆盖早期反射方向而非聚集于直达声源附近。在位置2受限移动听测条件下，所提方向K均值方法在K为30时的准确率为53%，低于能量排序基线在K为20时的准确率70%。结论的适用边界受限于仿真小混响房间早期声场与位置受限偏航移动，长混响、扩散声及真实测量外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 51. [同位置配准的瞬时相对传递函数为何比声纹和波达方向更适合混响多麦提取](/posts/conference-eusipco-2026-conference-paper-id-0000376-119a7e0e9e/)

> 英文题目：*[END\-TO\-END MULTI\-MICROPHONE SPEAKER EXTRACTION USING RELATIVE TRANSFER FUNCTIONS](/posts/conference-eusipco-2026-conference-paper-id-0000376-119a7e0e9e/)*

标签：#端到端学习 #麦克风阵列 #语音 #目标说话人提取

评分：**6.1/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.6/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#目标说话人提取 | 主方法：#端到端学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000376.pdf)

👥 **作者与机构**

- Eisenberg, Aviad：机构信息未能从会议 PDF 纯文本可靠映射
- Gannot, Sharon：机构信息未能从会议 PDF 纯文本可靠映射
- Chazan, Shlomo E\.：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理混响加定向噪声下的双说话人多麦克风混合，输入为4通道混合语音与目标说话人在相同空间位置录制的无噪配准语音，输出为参考麦克风处的目标混响语音，难点在于混响多径使仅靠音色或单一波达方向难以稳定指向目标。方法链第一步由多通道混合编码器将短时傅里叶变换实虚部映射为混合嵌入，保留时频与通道结构供后续融合。第二步由配准编码器将按式估计的瞬时相对传递函数压缩并在时间维平均为单一说话人表示，使可变长配准变为固定空间条件。第三步由解码器将该表示与混合嵌入逐帧相乘融合，再经自注意力与转置卷积重构目标频谱，前两步输出均直接进入瓶颈融合。相对谱嵌入与波达方向条件，该机制直接提供与房间相关的通道间比值结构而非抽象身份或单一角度，因而在强混响及同向不同距离下更具空间选择性。在随机位置仿真测试集下，TSE\-RTF的SI\-SDR为9\.2 dB，高于TSE\-DOA的SI\-SDR 8\.4 dB。其适用边界在于配准需与目标同位置无噪语音且仅验证仿真LibriSpeech混响，同向不同距离外推与真实录音尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/audiolabs/anechoic-noise> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 52. [只用朗读时的停顿和用词，能反推中风病灶在哪、有多大吗](/posts/conference-eusipco-2026-conference-paper-id-0001332-e31288936b/)

> 英文题目：*[ATTENTION\-BASED FUSION OF SPEECH FLUENCY FEATURES FOR STROKE LESION MAPPING](/posts/conference-eusipco-2026-conference-paper-id-0001332-e31288936b/)*

标签：#注意力机制 #多模态学习 #可解释性 #语音 #病理语音评估

评分：**6.1/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#注意力机制

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001332.pdf)

👥 **作者与机构**

- Sanguedolce, Giulia：机构信息未能从会议 PDF 纯文本可靠映射
- Parkinson, Niamh V\.：机构信息未能从会议 PDF 纯文本可靠映射
- Geranmayeh, Fatemeh：机构信息未能从会议 PDF 纯文本可靠映射
- Naylor, Patrick A\.：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为卒中后图片描述的连续语音与人工转录，输出为卒中状态、病灶偏侧、体积三分级与半球脑叶受累，难点在于语音到神经解剖映射高度间接且缺乏大规模语音加磁共振成像（Magnetic Resonance Imaging，MRI）配对数据。方法链分三步：先从每句话抽取可解释的信号流畅度特征与转录流畅度特征，再用两个独立编码器加注意力池化（Attention Pooling）把参与者多句话压缩为域嵌入，最后经可学习晚期融合与多头分类器输出四个目标。相比既往只做病人对照或失语分型的单域研究，该机制显式分离韵律执行与词汇命题两个通道并按任务自适应加权。SONIVA语料的嵌套分组交叉验证显示，双域融合卒中检测的受试者工作特征曲线下面积（Area Under Receiver Operating Characteristic Curve，AUROC）为0\.861，三分类体积严重度的宏平均F1（Macro\-F1）为0\.483，显著高于随机水平。结论仅适用于英语图片描述任务与常见左半球病灶，对右半球、枕叶、小脑及双侧病灶的定位能力弱且未经外部语料验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 53. [移动中不掉对比度：用块矩阵把整段轨迹的滤波器一起算](/posts/conference-eusipco-2026-conference-paper-id-0000026-ffffc31d28/)

> 英文题目：*[DYNAMIC SOUND ZONE CONTROL CONSIDERING MOVEMENT SMOOTHING BY BLOCK MATRIX](/posts/conference-eusipco-2026-conference-paper-id-0000026-ffffc31d28/)*

标签：#正则化 #信号处理 #麦克风阵列 #空间音频信号 #空间音频渲染

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#空间音频渲染 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000026.pdf)

👥 **作者与机构**

- Nishikata, Manami：机构信息未能从会议 PDF 纯文本可靠映射
- Noguchi, Kenichi：机构信息未能从会议 PDF 纯文本可靠映射
- Kozuka, Shihori：机构信息未能从会议 PDF 纯文本可靠映射
- Kako, Tatsuya：机构信息未能从会议 PDF 纯文本可靠映射
- Kamamoto, Yutaka：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理开放空间个人声区重放任务，输入为多扬声器到离散传声器阵列的传递函数与移动用户位置，输出为沿轨迹连续更新的控制滤波器序列，难点在于离散点切换会在控制点之间产生声对比度骤降与系数跳变。首先用选择矩阵对亮区与暗区邻近控制点传声器做位置加权插值，构造随用户位置连续变化的亮区与暗区相关矩阵，其输出直接作为下一步联合优化的相关量输入。接着将整段轨迹多个时刻的滤波器堆叠为块向量并将相关矩阵扩展为块对角矩阵，把逐点瑞利商推广为整段轨迹联合优化目标。然后在分母中加入相邻滤波器差分矩阵的二次型平滑惩罚，联合求解广义特征值问题得到兼顾对比度与连续性的滤波器序列。与字典切换和线性插值相比，该机制用轨迹级联合优化替代逐点独立设计，从原理上抑制了中点性能凹陷。在小尺度三控制点设置下，Block方法的声对比度指标为26\.8 dB，高于Dictionary基线的声对比度指标20\.6 dB。该结论适用边界受限于500 Hz至2000 Hz仿真房间与固定亮区加直线移动暗区，尚未验证复杂轨迹与真实房间的外推。每次滑动更新的计算量为原文给出的O\(KT3L3\)，但原文未实测延迟对应的推理开销。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 54. [先读出发音再写出文字：音素前置如何约束语音大模型的声学对齐](/posts/conference-eusipco-2026-conference-paper-id-0000136-3131d3f04a/)

> 英文题目：*[PHONEME\-FIRST PREDICTION FOR LLM\-BASED SPEECH RECOGNITION](/posts/conference-eusipco-2026-conference-paper-id-0000136-3131d3f04a/)*

标签：#指令微调 #大语言模型 #低资源 #语音 #语音识别

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#指令微调

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000136.pdf)

👥 **作者与机构**

- Poncelet, Jakob：机构信息未能从会议 PDF 纯文本可靠映射
- Van hamme, Hugo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音增强大语言模型以语音编码器输出的连续声学特征为输入、以文本转写为输出，文本嵌入偏向语义概念关联而声学特征偏向发音相似，同音异形词与发音相近词导致声 text 对齐混淆与声学不忠实。冻结的Whisper或HuBERT类语音编码器先将语音转为特征序列并堆叠降采样，再经线性加激活的多层感知投影层映射到Llama类模型的嵌入维度。投影后语音特征与文本指令拼接为提示送入经四比特量化低秩适配微调的大语言模型，以下一词交叉熵联合优化投影层与适配权重。训练时以联合提示随机采用标准转写指令与先预测音素再生成转写的音素优先指令，使音素序列成为后续转写的显式发音条件，解码时可选择直接转写或音素优先解码。与仅用转写目标学习隐式对齐的已有语音大模型不同，该方法用可由词典与强制对齐自动派生的音素目标提供细粒度发音监督，增强可解释性与低资源下的声学忠实度。在LibriSpeech\-960h评测设置下，Joint训练加S2T解码的WER为3\.2%，低于标准S2T训练加S2T解码的WER4\.0%。该结论的适用边界受限于数据规模与领域，千小时大数据与other口音自发语音上提升收窄，且音素质量依赖强制对齐词典与多发音选择，跨语种外推尚未验证。全流程在单张24GB显存的硬件上完成训练，其中堆叠投影层约18\.6M可训练参数，量化低秩适配使大模型侧仅微调千万量级权重。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 55. [零样本能认情绪，却认得不公平：Qwen2\-Audio 多类别公平性审计](/posts/conference-eusipco-2026-conference-paper-id-0000176-c5acc51b7a/)

> 英文题目：*[MULTICLASS FAIRNESS ANALYSIS OF QWEN2\-AUDIO IN SPEECH EMOTION RECOGNITION](/posts/conference-eusipco-2026-conference-paper-id-0000176-c5acc51b7a/)*

标签：#评测协议 #音频大模型 #公平性 #零样本 #语音情感识别

评分：**6.0/10** | 创新 1.1/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音情感识别 | 主方法：#评测协议

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000176.pdf)

👥 **作者与机构**

- D'Asaro, Federico：机构信息未能从会议 PDF 纯文本可靠映射
- Marquez Villacis, Juan Jose：机构信息未能从会议 PDF 纯文本可靠映射
- Bottino, Andrea：机构信息未能从会议 PDF 纯文本可靠映射
- Rizzo, Giuseppe：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音情感识别需从语音声学信号映射到 Happy 与 Sad 等离散情绪类别，难点在于口音与说话风格差异大且性别与年龄和族裔等敏感属性易引入系统性偏差。该工作先用音频编码器与连接器和大语言模型构成的 Qwen2\-Audio 做零样本生成，再由任务提示词限定候选标签集约束输出空间，随后经 Levenshtein 相似度后处理将自由文本归一化为合法标签，最后按类别二值化与组间两两平均计算统计均等与机会均等和总体准确率均等。与已有二分类单属性公平评测相比，关键差异是将每个情绪类转为一对多二值子问题并在类别与多分组上双重平均，从而同时暴露分布平衡与召回公平和精度公平。在 CREMA\-D 上零样本 macro\-F1 达 76\.56%，接近微调 Whisper large v3 的 76\.60%，但 RAVDESS 性别总体准确率均等差距高达 46\.58%，说明高精度并不能保证跨群体可靠。结论仅适用于英文表演类与会话类语料的诊断性审计，未验证缓解方法与跨语言泛化。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/Qwen/Qwen2-Audio-7B-Instruct> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 56. [把大模型的回声控制能力压缩到小模型：知识蒸馏如何弥补轻量化损失](/posts/conference-eusipco-2026-conference-paper-id-0000181-bed6aed788/)

> 英文题目：*[KNOWLEDGE DISTILLATION FOR EFFICIENT ACOUSTIC ECHO CONTROL](/posts/conference-eusipco-2026-conference-paper-id-0000181-bed6aed788/)*

标签：#知识蒸馏 #高效推理 #严格因果 #回声消除

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#回声消除 | 主方法：#知识蒸馏

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000181.pdf)

👥 **作者与机构**

- Seidel, Ernst：机构信息未能从会议 PDF 纯文本可靠映射
- Mowlaee, Pejman：机构信息未能从会议 PDF 纯文本可靠映射
- Fingscheidt, Tim：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

声学回声控制（Acoustic Echo Control，AEC）需从麦克风信号中去除与远端参考相关的回声，同时在双讲时保留近端语音，大模型虽强但难以部署到边缘会议设备。论文先训练大容量卷积分组门控循环网络教师，再以其增强输出作为软目标监督轻量学生，随后用真实干净语音做第二阶段微调，使学生在不增加推理结构的前提下模仿教师的回声抑制与语音保持行为。与直接用干净标签训练相比，该机制差异在于频域蒸馏损失传递了教师对残留回声与语音失真权衡的隐式决策，而非仅惩罚波形误差。在测试集Dtest双讲条件下，两阶段蒸馏的小模型PESQ达到2\.07，相对同结构无蒸馏基线的1\.95有明确提升，同时计算量仅为教师的约百分之二量级。该结论限于模拟SER与SNR网格、特定非线性和混响库构成的评测，未验证真实会议室长时跟踪、双端突变与移动终端部署。原文未披露训练、推理或部署成本的实测耗时与内存占用，仅给出参数量与FLOPS量级对比。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 57. [实数做幅度掩蔽、复数做残差修正：参数对齐下的混合语音增强](/posts/conference-eusipco-2026-conference-paper-id-0000216-ff771d2e74/)

> 英文题目：*[HYBRID REAL\- AND COMPLEX\-VALUED NEURAL NETWORK ARCHITECTURE FOR SPEECH ENHANCEMENT](/posts/conference-eusipco-2026-conference-paper-id-0000216-ff771d2e74/)*

标签：#CNN #高效推理 #单通道 #语音增强

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音增强 | 主方法：#CNN

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000216.pdf)

👥 **作者与机构**

- Fiorio, Luan：机构信息未能从会议 PDF 纯文本可靠映射
- Young, Alex：机构信息未能从会议 PDF 纯文本可靠映射
- Aarts, Ronald：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

单通道语音增强需从单路含噪短时傅里叶变换中同时恢复幅度与相位，小参数量下实数分支难建模相位而纯复数分支计算膨胀且优化困难。混合架构先对输入做域转换，复数谱取幅度送入实数分支而保留完整复数谱送入复数分支，实现幅度去噪与复数建模分工。两分支分别用减半实等效参数的编码器提取潜特征，瓶颈处经笛卡尔域转换与拼接做双向特征融合，使实数结构信息进入复数域参与旋转组合。融合特征分别进入各自解码器，实数解码器输出有界幅度掩蔽，复数解码器输出加性复数残差，再按掩蔽滤波加残差补偿合成增强谱。与单分支复数掩蔽需在单个乘性因子内同时编码抑制与相位旋转不同，该分解将大部分衰减交给实数掩蔽而把残差校正留给复数分支，降低小模型优化负担。在LibriTTS与TAU2019合成的20小时测试集下，hCDAE的STOI为0\.844，高于cCDAE的STOI 0\.836。该结论适用边界受限于小型卷积去噪自编码器与卷积循环网络族及受控合成噪声条件，尚未验证对大模型、混响与真实录音的外推性。在计算量上原文以乘加运算计数披露，hCDAE与hCRN相对纯复数基线分别降低27\.1%与31\.5%，但未给出训练成本与推理开销的延迟与硬件实测。

🔗 **开源资源**

- 第三方资源：<https://doi.org/10.1109/TASLP.2020.2968738> → <https://ieeexplore.ieee.org/document/8966946/> — 链接可访问（HTTP 202）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 58. [把命名识别改成音频文本配对：CLAP 如何绕开失语症转写的脆弱环节](/posts/conference-eusipco-2026-conference-paper-id-0000296-99d0e6e77e/)

> 英文题目：*[CLAP\-BASED AUTOMATIC WORD NAMING RECOGNITION IN POST\-STROKE APHASIA](/posts/conference-eusipco-2026-conference-paper-id-0000296-99d0e6e77e/)*

标签：#对比学习 #多模态学习 #言语障碍 #语音 #关键词检测

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#关键词检测 | 主方法：#对比学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000296.pdf)

👥 **作者与机构**

- Kaloga, Yacouba：机构信息未能从会议 PDF 纯文本可靠映射
- Laganaro, Marina：机构信息未能从会议 PDF 纯文本可靠映射
- Kodrasi, Ina：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

失语症命名任务输入为头戴麦克风采集的单次命名录音，输出为该次尝试是否正确说出目标词，难点在于错语、部分发音、多次尝试与医患交叠语音混杂且无上下文可依。本文将任务重构为音频文本匹配，先用 wav2vec2 编码音频并做时间平均与线性投影得到归一化音频嵌入，再用 DistilRoBERTa\-base 编码正确发音与误发两类自然语言提示得到文本嵌入，随后在共享空间计算双向余弦相似度并用对称对比损失微调，最后在推理时比较音频与全部候选提示的相似度以判定正确词或误发。与转写后关键词匹配相比，该机制以文本锚点吸收发音变异而非要求逐音正确，因此对病理变异更鲁棒且新增目标词无需重训分类头。在包含 34 名患者的首个数据集留一说话人交叉验证下，所提方法准确率达到 0\.90，相对分类基线 0\.85 与语音识别基线 0\.86 形成稳定领先。该结论目前仅限于法语孤立名词、轻度至中度失语人群与小规模说话人集合，重度障碍与跨语言外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 59. [伪造痕迹不在整段语音里，而在背景、低频与混响中：音频深伪检测的成分拆解](/posts/conference-eusipco-2026-conference-paper-id-0000431-4703a200bd/)

> 英文题目：*[ON THE TRACES OF AUDIO DEEPFAKES: ANALYSIS OF AUDIO COMPONENTS FOR DETECTION](/posts/conference-eusipco-2026-conference-paper-id-0000431-4703a200bd/)*

标签：#时频分析 #可解释性 #语音 #音频深度伪造检测

评分：**6.0/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频深度伪造检测 | 主方法：#时频分析

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000431.pdf)

👥 **作者与机构**

- Schäfer, Karla：机构信息未能从会议 PDF 纯文本可靠映射
- Frick, Raphael Antonious：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音频深度伪造检测输入为单说话人波形，输出为真实与伪造二分类，难点在于生成器迭代导致伪影漂移、跨数据集泛化失效且黑盒特征难以解释。本研究先将16 kHz音频转为频谱图、梅尔频谱图与梅尔频率倒谱系数，再并行执行四路成分剖析并分别独立训练测试：前景背景分离剥离语音主体与残留底噪，谐波打击乐分离区分长时 tonal结构与瞬态冲击，频率掩蔽定位有效子带，房间脉冲响应提取与去除检验混响线索。与以往直接使用整段录音或自监督语音表征的做法不同，该工作把可解释性前移到特征工程，通过受控成分消融判断伪影位置。在ASVspoof 2019 LA训练并以野外数据集测试时，加权预测误差去混响结合梅尔频率倒谱系数取得24\.00%等效错误率，优于同设置下原始梅尔频率倒谱系数的69\.08%。结论仅适用于短句单说话人及所测两分类器，在扩散语音等高质量伪造上仍接近失效，且未验证与大规模自监督前端的组合效果。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://mcdermottlab.mit.edu/Reverb/IR> — 链接不可用（HTTP 404）
- 数据相关资源：<https://keithito.com/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://elevenlabs.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 60. [没有文字转写时，如何用图像字幕把语音和书面词连起来](/posts/conference-eusipco-2026-conference-paper-id-0000436-d0ff2e1e46/)

> 英文题目：*[CONNECTING SPEECH TO WORDS THROUGH IMAGES](/posts/conference-eusipco-2026-conference-paper-id-0000436-d0ff2e1e46/)*

标签：#自监督学习 #弱监督学习 #音视频 #语音 #关键词检测

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#关键词检测 | 主方法：#弱监督学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000436.pdf)

👥 **作者与机构**

- Pirlogeanu, Gabriel：机构信息未能从会议 PDF 纯文本可靠映射
- Oneata, Dan：机构信息未能从会议 PDF 纯文本可靠映射
- Cucu, Horia：机构信息未能从会议 PDF 纯文本可靠映射
- Kamper, Herman：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理视觉接地语音的词级关联，输入为图像及其口头描述音频，输出是将词表中每个书面词定位到若干语音片段并给出时间边界，难点在于口头描述与图像字幕内容并不一致且无任何转写监督。词汇构建步骤用Tag2Text、BLIP\-2和GIT三种图像描述模型为每张图像生成字幕，取交集去停用词并词形还原后保留高频100词形成动态词汇表。候选过滤步骤按字幕是否包含目标词选出可能包含该词的话语集合，将上一步的词汇输出转化为待对齐的语音候选集。定位聚合步骤在候选集内对两两话语抽取HuBERT第七层特征并做连续或离散对齐，经区间堆叠聚合选出跨话语最一致的高频公共子序列作为关键词片段。与Olaleye等固定标签器的参数化注意力卷积方法不同，该方法以动态词汇加非参数发现实现开放词检索，并保留可检查的对齐证据以提升可解释性。在MIT Places Audio Captions测试集下，CFA的定位性能下降为24\.6%，高于DFA的定位性能下降20\.2%。该结论适用边界受限于英语名词及高频共现较弱的词汇，对boxing ring类强共现词及字幕召回不足的词会系统性失效，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 61. [不用重训练也能拧动音高与时值：残差流线性方向与正交解耦](/posts/conference-eusipco-2026-conference-paper-id-0000056-941e8cac8c/)

> 英文题目：*[LATENT SPACE DISENTANGLEMENT VIA ACTIVATION STEERING FOR INTERPRETABLE ATTRIBUTE CONTROL IN SYMBOLIC MUSIC GENERATION](/posts/conference-eusipco-2026-conference-paper-id-0000056-941e8cac8c/)*

标签：#Transformer #可解释性 #音乐 #符号音乐生成

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#符号音乐生成 | 主方法：#Transformer

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000056.pdf)

👥 **作者与机构**

- Prokopiou, Ioannis：机构信息未能从会议 PDF 纯文本可靠映射
- Vikatos, Pantelis：机构信息未能从会议 PDF 纯文本可靠映射
- Kaliakatsos\-Papakostas, Maximos：机构信息未能从会议 PDF 纯文本可靠映射
- Giannakopoulos, Theodoros：机构信息未能从会议 PDF 纯文本可靠映射
- Stafylakis, Themos：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理符号音乐中可解释属性控制问题，输入为预训练多轨音乐变换器残差流激活与离散六元组事件序列，输出为按目标方向偏移平均音高与平均时值的延续片段，难点在于自回归先验很强且音高与时值在训练分布中天然纠缠。方法链分三步推进，首先按符号管弦乐语料分位数划分高低概念簇并用均值差提取层相关转向向量，得到音高与时值各自最可分层的方向表示。其次在推理时以系数注入残差流形成全局偏置，使生成分布向目标属性确定性偏移。然后对双属性组合向量做保留主向量的格拉姆施密特正交化，将次向量的主向量投影剥离后再加权组合，以抑制串扰。与简单向量相加及对称正交化相比，该几何解耦保留了主概念完整性并降低了概念干扰与信号退化。在条件双属性转向场景下，上行转向的成功率指标为96\.1%，高于下行转向的成功率指标82\.2%。结论的适用边界仅限于该模型与该语料分布内的音高和时值粗粒度均值控制，尚未验证音色速度结构等抽象概念与跨模型迁移，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 62. [配准耳甲几何能压缩多少个性化 HRTF 信息：30 维 PCA 与多域损失的受控对照](/posts/conference-eusipco-2026-conference-paper-id-0000261-f673605585/)

> 英文题目：*[REGISTERED 3D EAR GEOMETRY FOR PERSONALIZED HRTF SYNTHESIS: LATENT SHAPE MODELING AND MULTI\-DOMAIN LOSS MODELING](/posts/conference-eusipco-2026-conference-paper-id-0000261-f673605585/)*

标签：#CNN #信号处理 #空间音频信号 #空间音频渲染

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#空间音频渲染 | 主方法：#CNN

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000261.pdf)

👥 **作者与机构**

- De Rus Arance, Juan Antonio：机构信息未能从会议 PDF 纯文本可靠映射
- Castorena, Carlos：机构信息未能从会议 PDF 纯文本可靠映射
- Montagud, Mario：机构信息未能从会议 PDF 纯文本可靠映射
- Ferri, Francesc J\.：机构信息未能从会议 PDF 纯文本可靠映射
- Cobos, Maximo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以配准后具有统一拓扑的三维耳廓网格为输入，预测指定方向的头相关脉冲响应及其频谱表示，难点在于跨被试网格顶点无对应且耳廓细微形态决定频谱凹陷。方法链分三步：先将异构耳扫描配准到公共模板获得逐顶点解剖对应并转为定长向量，再用主成分分析压缩几何与声信号为紧凑隐变量并量化压缩本身的重建上限，随后以紧凑几何回归与全分辨率卷积回归对比隐空间到隐空间、隐空间到信号等映射策略。与仅约束单一域的单域均方误差不同，多域几何平均损失同时约束波形、幅度谱、复谱与希尔伯特包络，迫使模型兼顾时域波形一致与频域谱相干，避免迎合单一指标的退化解。在PCA几何输入到全信号预测的评测设置下，时域表示多域模型的LSD为9\.41 dB，低于单域RMSE基线模型的LSD 14\.94 dB。该增益在复谱表示下保持相近趋势，表明联合约束的作用独立于信号编码形式，而全分辨率几何仅在部分配置下额外改善失真。结论的适用边界仅限于受控客观指标下的相对比较，感知听测、空间定位与跨数据集泛化尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.sofaconventions.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.1145/1015706.1015736> → <https://dl.acm.org/doi/10.1145/1015706.1015736> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 63. [房间脉冲响应里自带的噪声底：卷积进语音后为何造成训练与真实录音失配](/posts/conference-eusipco-2026-conference-paper-id-0000316-b87a0bc397/)

> 英文题目：*[EFFECT OF NOISE MODEL MISMATCH ON ROOM\-IMPULSE\-RESPONSE REPRESENTATION LEARNING](/posts/conference-eusipco-2026-conference-paper-id-0000316-b87a0bc397/)*

标签：#数据增强 #对比学习 #鲁棒性 #语音 #音频分类

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分类 | 主方法：#对比学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000316.pdf)

👥 **作者与机构**

- Prawda, Karolina：机构信息未能从会议 PDF 纯文本可靠映射
- Meyer\-Kahlen, Nils：机构信息未能从会议 PDF 纯文本可靠映射
- Schlecht, Sebastian J\.：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为混响语音的梅尔频谱信号，输出为房间可分的声学嵌入与混响时间估计，难点在于实测房间脉冲响应自带背景噪声经卷积形成冻结噪声，而真实录音并不含该卷积噪声项，导致训练与推理噪声模型错配。先用镜像源法合成干净与加噪鞋盒房间脉冲响应集，并以能量交点加延伸时长控制卷积噪声截断，再将房间脉冲响应与LibriSpeech语音卷积并按条件叠加高斯加性噪声构造对比学习样本。接着经六块卷积编码器与投影头以多正对比损失学习嵌入，并冻结编码器训练全连接混响时间回归头，使上游表征进入下游估计。与既有工作混用实测与仿真房间脉冲响应且不区分噪声来源不同，该文显式分离卷积噪声与加性噪声，并以截断时长参数化噪声保留量，具有澄清数据集构建规范的实际意义。在现实推理条件下，Hu0,σ'u模型的PCC为0\.83，高于H0,0模型的PCC为0\.72。结论受限于鞋盒仿真、白高斯噪声假设与单一卷积编码器，尚未验证实测房间脉冲响应、有色噪声与多架构外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 64. [稀疏观测下只保留跨人一致的多尺度结构：掩蔽小波散射神经场做 HRTF 上采样](/posts/conference-eusipco-2026-conference-paper-id-0000341-294fb21642/)

> 英文题目：*[MASKED WAVELET SCATTERING TRANSFORM NEURAL FIELD FOR SOUND FIELD RECONSTRUCTION](/posts/conference-eusipco-2026-conference-paper-id-0000341-294fb21642/)*

标签：#信号处理 #低资源 #空间音频信号 #声场重建

评分：**5.9/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#声场重建 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000341.pdf)

👥 **作者与机构**

- Luan, Xinmeng：机构信息未能从会议 PDF 纯文本可靠映射
- Verburg, Samuel A\.：机构信息未能从会议 PDF 纯文本可靠映射
- Fernandez\-Grande, Efren：机构信息未能从会议 PDF 纯文本可靠映射
- Scavone, Gary：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

声场重建需从7×7稀疏观测恢复1730点连续头相关传输函数幅度场，难点在于可用被试极少而个体差异大，深度模型易过拟合稀疏点并丢失多尺度结构。掩码小波散射神经场第一阶段在10个被试上联合优化预测场与二值加权掩码，筛选跨个体一致的小波散射通道并输出冻结掩码。第二阶段以多层感知机神经场拟合单个目标的稀疏观测，并将冻结掩码后的散射损失与观测损失联合优化以正则化连续重建。与直接约束全部散射系数的方法不同，二值掩码显式阻断向参考个体的复制漂移，仅保留可泛化的统计先验，因而更适配小样本声场外推。在HUTUBS仿真数据集7个频率与Subjects 6\-10双耳平均的评测设置下，MSNF的指标对数谱失真LSD为5\.34 dB，低于NF的指标对数谱失真LSD 6\.10 dB。实验仅建模幅度并将数据重采样至规则网格，球谐基线截断处理也影响对比口径。该结论适用边界受限于单库仿真评估，尚未验证相位建模、外推与跨库泛化，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 65. [只共享频谱不共享空间：去中心化 ILRMA 如何在分布式麦克风阵列上分离](/posts/conference-eusipco-2026-conference-paper-id-0000351-c8ee03c3b5/)

> 英文题目：*[DECENTRALIZED INDEPENDENT LOW\-RANK MATRIX ANALYSIS FOR BLIND SOURCE SEPARATION ON DISTRIBUTED MICROPHONE ARRAYS](/posts/conference-eusipco-2026-conference-paper-id-0000351-c8ee03c3b5/)*

标签：#信号处理 #鲁棒性 #麦克风阵列 #语音 #语音分离

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音分离 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000351.pdf)

👥 **作者与机构**

- Haruyama, Yuta：机构信息未能从会议 PDF 纯文本可靠映射
- Yamaoka, Kouei：机构信息未能从会议 PDF 纯文本可靠映射
- Takamune, Norihiro：机构信息未能从会议 PDF 纯文本可靠映射
- Saruwatari, Hiroshi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

分布式麦克风阵列盲源分离的输入是空间分散的多个子阵短时傅里叶域多通道观测，输出是各声源时频信号与对应解混矩阵，实际难点是集中式传输原始波形通信量大、各子阵间采样时间难以精确同步且阵列规模增大计算负担重。首先各子阵在本地用频域解混矩阵对观测线性分离得到源估计，其输出的分离信号功率谱进入下一步源模型建模。其次对功率谱用非负矩阵分解建模为基底与激活乘积，并按模型共享、激活共享与基底共享三种策略跨子阵约束共用参数，使时间包络或频谱结构在全阵一致。然后基于主最小化推导基底与激活的乘性更新与解混矩阵的迭代投影更新，交替优化两组变量，每轮各子阵只在本地计算充分统计量并跨阵求和聚合后分发。与集中式独立低秩矩阵分析直接汇聚原始多通道信号和分散式独立向量分析仅共享功率和不同，该方法只共享不含空间相位的谱参数，既保留低秩源先验精度又降低通信并保护隐私。在房间仿真评测设置下，D\-ILRMA\-T的SDR改进指标为8\.00dB，高于D\-IVA的SDR改进指标6\.09dB。该结论适用边界受限于每子阵麦克风数等于声源数的确定性时不变混合仿真，采样率偏移、移动声源、加性噪声与真实录音等条件尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 66. [不用黑盒记频谱：用运动、相位与气流三组物理量做边缘端重放检测](/posts/conference-eusipco-2026-conference-paper-id-0000416-d0e3247dff/)

> 英文题目：*[LIGHTWEIGHT REPLAY ATTACK DETECTION VIA INTERPRETABLE PHYSICAL DESCRIPTORS](/posts/conference-eusipco-2026-conference-paper-id-0000416-d0e3247dff/)*

标签：#信号处理 #高效推理 #可解释性 #麦克风阵列 #语音伪造检测

评分：**5.9/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音伪造检测 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000416.pdf)

👥 **作者与机构**

- Nasiri, Saba：机构信息未能从会议 PDF 纯文本可靠映射
- Amirshahi, Alireza：机构信息未能从会议 PDF 纯文本可靠映射
- Cernak, Milos：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

重放攻击检测的输入是多通道阵列采集的1秒语音，输出为真人或重放二分类，难点在于深度黑盒模型易过拟合环境噪声且难以部署于边缘端侧。方法先由相位变换加权广义互相关估计到达时间差轨迹并差分得到速度与加速度以刻画声源运动学，其输出轨迹与原始多通道波形共同进入双耳分析，在语音主频带统计通道间幅度差与相位差及相位速度过零率以刻画声场相干性。接着对低频段提取低通能量比与谱质心并做时空聚合以刻画气流与构音动态，三组描述子拼接为158维向量后送入极端梯度提升分类器完成判定。与学习谱时抽象模式的黑盒路线不同，该路线依赖生物运动与声传播物理不变量，因而可直接溯源到麦克风对与生理现象并抑制对数据集噪声的过拟合。在ReMASC数据集D3六通道标准协议评测设置下，所提方法的等错误率为17\.8%，低于ALRAD基线的等错误率19\.5%。其结论适用边界受限于高密度圆形阵列与近场室内环境，在室外与车载等未见环境及大厅开阔空间下失败条件显著，尚未验证移动阵列外推。该方法在ARM Cortex\-M7硬件上内存为0\.6 MB且处理1秒音频延迟为0\.9秒，满足端侧实时要求。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 67. [只重建正常包络：用 LPC 谱加 NMF 记忆约束异常声音检测的重建](/posts/conference-eusipco-2026-conference-paper-id-0001112-99a4015286/)

> 英文题目：*[MEMNMF: MEMORY\-AUGMENTED NMF ON LPC SPECTRA FOR ANOMALOUS SOUND DETECTION](/posts/conference-eusipco-2026-conference-paper-id-0001112-99a4015286/)*

标签：#注意力机制 #鲁棒性 #环境声 #异常声音检测

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#异常声音检测 | 主方法：#注意力机制

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001112.pdf)

👥 **作者与机构**

- Saengthong, Phurich：机构信息未能从会议 PDF 纯文本可靠映射
- Shinozaki, Takahiro：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

异常声音检测（Anomalous Sound Detection, ASD）仅用正常机器声训练，以重构误差为异常分，难点是工厂噪声下非平稳时频纹理变化大，无约束自编码器（Autoencoder, AE）易拟合 nuisance 变化并泛化到异常。论文先对整段约 10 s 波形用 Burg 法估计 60 阶线性预测编码（Linear Predictive Coding, LPC）系数，在单位圆上 8000 个频点求全极点响应幅度得到包络谱，再以坐标下降在正常 LPC 谱上学习 768 个非负矩阵分解（Non\-negative Matrix Factorization, NMF）基，然后将基与其伪逆固定为记忆的值与键锚点，仅学习轻量投影与 BatchNorm 稀疏检索。相比直接重构 log\-mel 谱图，该方法只允许注意力加权组合正常原型谱重构，从机制上压缩异常样本的低误差通道。在 DCASE 2020 Task 2 sec\-dev 上 MemNMF\+LPC 平均 AUC 为 81\.7%，高于 AE\+Log\-Mel 的 74\.2% 与 AE\+LPC 的 75\.6%；以 AUC 与 pAUC 均值 Amean 计 sec\-dev 为 74\.9%、sec\-eval 为 75\.6%，高于 AE 基线但低于 AudDSR 的 78\.2%。在 MIMII 上 MemNMF\-768 全平均 AUC 为 90\.6%，高于 GRLNet 的 77\.2%。该结论限于 16 kHz 单通道机器声与分 section 独立训练评测，在 Toy\-conveyor 等局部异常或与噪声谱重叠场景失效且未验证域偏移。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 68. [推理时才给方向图：同一网络如何装下多种指向性](/posts/conference-eusipco-2026-conference-paper-id-0000096-ec1952e826/)

> 英文题目：*[NEURAL DIRECTIONAL FILTERING WITH CONFIGURABLE DIRECTIVITY PATTERN AT INFERENCE](/posts/conference-eusipco-2026-conference-paper-id-0000096-ec1952e826/)*

标签：#波束成形 #空间音频 #麦克风阵列 #语音 #音频分离

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分离 | 主方法：#波束成形

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000096.pdf)

👥 **作者与机构**

- Huang, Weilong：机构信息未能从会议 PDF 纯文本可靠映射
- Raj Chetupalli, Srikanth：机构信息未能从会议 PDF 纯文本可靠映射
- Habets, Emanuël A\. P\.：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为紧凑阵列多通道信号与用户在推理时给定的频率无关方向图向量，输出为按角度增益加权混叠声场后在参考麦克风处的目标信号，实际难点在于小孔径难以形成高指向性且固定波束成形更换方向图需重算滤波器。首先将多通道短时傅里叶变换实虚部堆叠为输入并以频率为序列送入双向长短期记忆网络建模空频相关，其输出进入特征线性调制层由方向图生成逐特征仿射参数做缩放平移，调制后特征再送入单向长短期记忆网络生成复数掩膜并作用于参考通道以重建目标信号。与把方向向量映射为双向网络初态的拼接条件方式不同，该方法把方向先验放在深层特征上调制，因而对未见转向和高阶主瓣保持更好。在EARS语料双声源测试集下，FiLM\-JNF的SDR指标为24\.54 dB，高于参数滤波基线的SDR指标20\.37 dB。该结论适用边界受限于零仰角、频率无关方向图和以无混响语音合成为主的验证，对强混响和密集多源尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://www.audiolabs-erlangen.de/resources/2026-EUSIPCO-UNDF> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 69. [不均匀噪声下同时算出传递函数与各通道噪声：可学习的确定性最大似然波束形成](/posts/conference-eusipco-2026-conference-paper-id-0000101-d0163b12ab/)

> 英文题目：*[A LEARNABLE MAXIMUM\-LIKELIHOOD MODEL OF AD\-HOC MICROPHONE ARRAYS WITH UNBALANCED NOISE PSDS](/posts/conference-eusipco-2026-conference-paper-id-0000101-d0163b12ab/)*

标签：#波束成形 #麦克风阵列 #语音 #语音增强

评分：**5.8/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音增强 | 主方法：#波束成形

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000101.pdf)

👥 **作者与机构**

- Ahmad, Hashir：机构信息未能从会议 PDF 纯文本可靠映射
- Enzner, Gerald：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理自组织声传感器网络中4通道非校准麦克风语音增强，输入为位置未知且增益失配的短时傅里叶观测，输出为目标语音与逐通道非均衡噪声功率谱，难点在于声学传递函数未知且噪声在通道间功率差异大。方法先建立以声学传递函数、语音序列与对角噪声协方差为参数的确定性最大似然模型，直接对多通道观测似然建模。接着用最小方差无失真响应闭式解消去语音变量得到仅依赖声学传递函数与噪声协方差的代价，并用广义特征值分解幂迭代与在线样本协方差更新表示声学传递函数估计。最后将该似然作为可微TensorFlow损失，用Adam仅优化逐通道噪声功率谱，其输出回代广义特征值分解与波束成形器得到增强语音。相对假定均匀噪声功率谱的随机最大似然与依赖语音活动检测的传统波束成形，该机制允许每通道独立噪声建模且无需先验噪声知识，具有实际意义。在T60为40ms低混响评测条件下，所提Tensorflow DML\-GEVD的Array\-SNR为21\.18，高于随机麦克风选择的Array\-SNR 14\.74。该结论适用边界受限于白色非相干噪声与单静态声源仿真房间，尚未验证相干噪声、多说话人与真实器件失配下的外推能力。原文披露的计算量为1\.85 M MACs/s，可学习参数量为2052。

🔗 **开源资源**

- 第三方资源：<https://webrtc.googlesource.com/src/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/fgnt/nn-gev/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 70. [看不准也要说准：用不确定性估计误差并挑出难样本做说话人自适应](/posts/conference-eusipco-2026-conference-paper-id-0000131-47f83aecea/)

> 英文题目：*[LEVERAGING UNCERTAINTY IN VISUAL SPEECH RECOGNITION: ERROR ESTIMATION AND ACTIVE LEARNING FOR SPEAKER ADAPTATION](/posts/conference-eusipco-2026-conference-paper-id-0000131-47f83aecea/)*

标签：#SFT #统计分析 #可解释性 #静默语音接口

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#静默语音接口 | 主方法：#统计分析

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000131.pdf)

👥 **作者与机构**

- Yuasa, Hayata：机构信息未能从会议 PDF 纯文本可靠映射
- Tanaka, Keitaro：机构信息未能从会议 PDF 纯文本可靠映射
- Morishima, Shigeo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

视觉语音识别以唇部视频为输入估计词序列，输出可靠性难判断，且未见说话人因外观与发音差异性能波动大。为此先以无dropout预测为参考，对Monte Carlo dropout多次采样预测计算相对参考的词错误率均值，得到贝叶斯不确定性Ub，刻画模型结构扰动下的输出分歧。接着对解码器logits做softmax得词表分布并在全部输出token上平均香农熵，得到熵不确定性Ue，再将二者秩和取负得用于池内排序的相对度量Urel、线性组合得用于单句可靠性估计的绝对度量Uabs。Uabs经目标说话人10分钟标注数据的最小二乘线性映射直接估计词错误率，Urel按高不确定性从未标注池挑选样本标注后微调，使估计输出进入选择再进入自适应。与音频识别中熵与误差弱相关的经验不同，该链条在唇读中发现两类不确定性均与误差强相关且互补，单次前向的熵可作为低成本替代。在VoxLRS\-SA说话人自适应微调任务下，Ue选择的120分钟数据的WER为0\.352，低于随机采样的WER 0\.362。该结论适用边界受限于英语室内语料与合成人脸数据池，尚未验证多语言、强遮挡与真实采集条件下的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 71. [语系相近是否可迁移：以新拉丁语族检验跨语言语音情感识别的边界](/posts/conference-eusipco-2026-conference-paper-id-0000166-d5a9909951/)

> 英文题目：*[TACKLING CROSS\-LINGUAL GENERALIZATION IN SPEECH EMOTION RECOGNITION VIA LINGUISTIC GROUPING: A SPOTLIGHT ON NEO\-LATIN LANGUAGES](/posts/conference-eusipco-2026-conference-paper-id-0000166-d5a9909951/)*

标签：#SFT #跨语言 #多语言 #语音 #语音情感识别

评分：**5.8/10** | 创新 1.1/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音情感识别 | 主方法：#SFT

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000166.pdf)

👥 **作者与机构**

- Dal Ri, Francesco：机构信息未能从会议 PDF 纯文本可靠映射
- Garau, Nicola：机构信息未能从会议 PDF 纯文本可靠映射
- Conci, Nicola：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音情感识别需将16 kHz原始波形映射为愤怒、厌恶、恐惧、快乐、中性与悲伤六类离散情绪，难点在于韵律跨文化共性与语义及发音特异性交织，跨语料与跨语言直接迁移常大幅退化。该方法先由24层XLSR骨干抽取帧级隐状态并均值池化为1024维话语向量，再经线性投影压缩至256维向量并送入分类头输出情绪 logits，随后以加权交叉熵联合监督对比损失优化，其中对比项以温度0\.07拉近同标签、推远异标签。与已有跨语言尝试相比，该研究不追求新结构，而是把语言谱系分组作为实验变量，显式对比单语、族内联合训练与跨族留一迁移，并配合类别与语料两级平衡及增益与噪声增强以抑制大语料主导。在留一跨语言评测设置下，FRE、POR、ROM、SPA联合训练模型在未见意大利语条件下的UAR指标为62\.3%，高于其在阿拉伯语条件下的UAR指标28\.8%。该族内迁移优势表明谱系相近语言共享更多副语言线索，而跨远系泛化仍显著退化。该结论适用边界受限于所选10语种表演类小语料，尚未验证大规模自然语料与未见语系的外推能力，训练在单张NVIDIA GeForce RTX 4090硬件上微调10轮，有效批量为64。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 72. [用颜色说情绪：把语音情绪变成可回归、可解释的色相、饱和度与明度](/posts/conference-eusipco-2026-conference-paper-id-0000171-740fd3b93c/)

> 英文题目：*[COLOR\-BASED EMOTION REPRESENTATION FOR SPEECH EMOTION RECOGNITION](/posts/conference-eusipco-2026-conference-paper-id-0000171-740fd3b93c/)*

标签：#数据标注 #多任务学习 #语音 #语音情感识别

评分：**5.8/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音情感识别 | 主方法：#多任务学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000171.pdf)

👥 **作者与机构**

- Nagase, Ryotaro：机构信息未能从会议 PDF 纯文本可靠映射
- Takashima, Ryoichi：机构信息未能从会议 PDF 纯文本可靠映射
- Yamashita, Yoichi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音情感识别需从语音声学证据输出情感状态，离散类别难以表达混合模糊情感，效价、唤醒度、优势度等维度分数又不够直观。本文先用众包界面为日语JVNV语料1615条语音采集颜色属性标签，每条10人标注，饱和度与明度取算术平均，色相取循环平均作为真值，再用传统声学特征或日语预训练HuBERT嵌入训练颜色回归器，最后以共享HuBERT编码器联合优化三属性回归与6分类情感分类。与类别或维度框架相比，该机制把情感表示为可直接显示为颜色的连续数值，兼顾可计算性与可视化可解释性。在留一说话人交叉验证下，Regular会话训练、Phrase\-free会话验证测试，多任务在权重0\.9时将6分类准确率从88\.3%提升至90\.8%，色相角度误差降至29\.7度，饱和度与明度一致性相关系数分别达0\.560和0\.803。该结论目前仅适用于小规模日语表演语音与特定标注界面，尚未验证自发语音、跨语言与感知一致性。原文未披露训练硬件、推理延迟与部署成本。

🔗 **开源资源**

- 模型相关资源：<https://huggingface.co/yky-h/japanese-hubert-base> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 73. [不改模型也能治啸叫：用啸叫与降噪混合数据微调语音增强网络](/posts/conference-eusipco-2026-conference-paper-id-0000211-619eb38ff4/)

> 英文题目：*[ACOUSTIC HOWLING SUPPRESSION ENHANCEMENT BY FINE\-TUNING DEEP SPEECH ENHANCEMENT NETWORKS](/posts/conference-eusipco-2026-conference-paper-id-0000211-619eb38ff4/)*

标签：#助听器 #SFT #实时处理 #语音 #语音增强

评分：**5.8/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音增强 | 主方法：#SFT

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000211.pdf)

👥 **作者与机构**

- Ashur, Avichay：机构信息未能从会议 PDF 纯文本可靠映射
- Cohen, Israel：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

面向助听器与扩声系统的声啸叫抑制（Acoustic Howling Suppression, AHS）需同时处理环境噪声和麦克风\-扬声器耦合形成的递归反馈，输入为含噪含反馈的麦克风信号，输出为保留语音的干净信号，难点是高增益下窄带 tonal 伪影被反复放大且易损伤语音。该工作以实时降噪网络 Denoiser 为起点，先用镜像法合成房间脉冲响应并叠加硬削波扬声器非线性离线生成啸叫样本，再将其与 Valentini\-Botinhao 噪声抑制数据按比例混合微调，使啸叫样本教会抑制反馈音调而噪声数据锚住原有降噪能力，最后将模型直接放入在线反馈环做流式推理。与专用 AHS 架构或递归训练不同，该策略不改结构、不增加延迟、不做闭环展开，仅靠数据配比实现联合优化。在线评测中 60\-40 模型在增益为 3 时感知语音质量（Perceptual Evaluation of Speech Quality, PESQ）达到 2\.53，信号失真比（Signal\-to\-Distortion Ratio, SDR）为 1\.97 dB，随增益从 1\.5 升至 3 仅下降约 0\.05，而降噪 PESQ 基本维持在 2\.556 附近。该结论限于合成房间与离线固定增益训练条件，对强非线性、移动声源和噪声混响反馈并发场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 74. [只反转波形不删除人声：分段逆放如何同时保住场景与音质](/posts/conference-eusipco-2026-conference-paper-id-0000251-d5a36ad1a4/)

> 英文题目：*[SPEECH CONTENT PRIVACY IN ENVIRONMENTAL SOUND RECORDINGS USING SEGMENT\-WISE WAVEFORM REVERSAL](/posts/conference-eusipco-2026-conference-paper-id-0000251-d5a36ad1a4/)*

标签：#信号处理 #说话人匿名化 #音频质量评估 #语音活动检测

评分：**5.8/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#说话人匿名化 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000251.pdf)

👥 **作者与机构**

- Tailleur, Modan：机构信息未能从会议 PDF 纯文本可靠映射
- Lagrange, Mathieu：机构信息未能从会议 PDF 纯文本可靠映射
- Aumond, Pierre：机构信息未能从会议 PDF 纯文本可靠映射
- Tourre, Vincent：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

环境声录音输入为语音与城市背景混合的单通道波形，输出要求语音不可懂而背景事件可辨且听感自然，难点在于语音与环境时频重叠且直接删除会破坏声场景结构与响度关系。该方法采用四步串行流水线：先用语音活动检测（Voice Activity Detection, VAD）筛出含语音区间以限定处理范围，再用语音分离（Speech Isolation, SI）将语音与背景解耦，随后仅对分离语音做分段波形翻转（Segment\-wise Waveform Reversal, SWR）破坏音素时序，最后将处理语音与保留背景混回。与直接对整段做碎片重排或对分离语音做倒谱模糊相比，该链条把定位、提纯与破坏解耦，减少对无语音片段的误伤并保留音色线索。在自建 CitySpeechMix 混合集上以4种语音识别（Automatic Speech Recognition, ASR）模型平均词错率（Word Error Rate, WER）衡量，该方法达到97\.9%，声源分类精度下降（Source Classification Accuracy\-Drop, SCAD）仅2\.7%，感知距离（Fréchet Audio Distance, FAD）为1\.4，综合权衡优于两种对照。适用边界限于内部共享与听音分析等非对抗场景，作者已指出确定性分割可被二次施加流水线部分逆转，重排序虽能缓解但会损伤音质。流水线本身无需训练，未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://zenodo.org/records/15405950> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 75. [移动脑电跨被试解码注意说话人：对比学习为何比只重建包络更稳](/posts/conference-eusipco-2026-conference-paper-id-0000276-b371dbf8a6/)

> 英文题目：*[SUBJECT‑INDEPENDENT AUDITORY ATTENTION DECODING FROM MOBILE EEG VIA CONTRASTIVE LEARNING](/posts/conference-eusipco-2026-conference-paper-id-0000276-b371dbf8a6/)*

标签：#对比学习 #脑信号 #语音 #言语神经解码

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#言语神经解码 | 主方法：#对比学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000276.pdf)

👥 **作者与机构**

- Tanveer, M\. Asjid：机构信息未能从会议 PDF 纯文本可靠映射
- Jensen, Jesper：机构信息未能从会议 PDF 纯文本可靠映射
- Alickovic, Emina：机构信息未能从会议 PDF 纯文本可靠映射
- Tan, Zheng\-Hua：机构信息未能从会议 PDF 纯文本可靠映射
- Østergaard, Jan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

听觉注意解码需从双人竞争语音场景下的44导移动脑电中判别被试注意的是哪一路说话人，输出为目标语音选择，其难点在于跨被试泛化差，且持续注意、注意切换与自然对话导致神经语音耦合不稳定。方法链第一步由二维卷积脑电编码器将多通道脑电映射为时序脑电嵌入，保留注意相关的神经动态以供后续对齐。第二步由音频编码器将包络、32带梅尔谱与Wav2Vec 2\.0融合特征映射到同一嵌入空间，并计算掩码SigLIP相似度得到匹配分数，其相似度输出直接作为分类判决依据。第三步由扩张卷积重建模块从脑电嵌入重建目标包络，以重建损失约束嵌入保留可解释的语音包络结构并与对比损失联合训练。与传统包络刺激重建相比，关键差异是以判别式脑电语音对齐替代纯信号估计，并用权重矩阵屏蔽同音频跨样本伪负对，其实质是让模型学习注意驱动的跨模态区分特征而非仅拟合波形。在留一组交叉验证协议下，三特征对比学习流水线的准确率为67\.0%，高于仅梅尔谱加包络变体的准确率64\.3%。该结论适用边界受限于丹麦语、正常听力、实验室摆位的三类双人竞争任务，尚未验证耳机式少通道、听损人群与强混响移动条件下的外推性能。原文未披露训练、推理或部署成本

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 76. [病理语音不够、又不一样：三类数据增强到底谁能补上增强性能](/posts/conference-eusipco-2026-conference-paper-id-0000291-2ce157aea2/)

> 英文题目：*[DATA AUGMENTATION FOR PATHOLOGICAL SPEECH ENHANCEMENT](/posts/conference-eusipco-2026-conference-paper-id-0000291-2ce157aea2/)*

标签：#数据增强 #言语障碍 #低资源 #语音 #语音增强

评分：**5.8/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音增强 | 主方法：#数据增强

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000291.pdf)

👥 **作者与机构**

- Hou, Mingchi：机构信息未能从会议 PDF 纯文本可靠映射
- Hermann, Enno：机构信息未能从会议 PDF 纯文本可靠映射
- Kodrasi, Ina：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

病理语音增强需从加性噪声麦克风信号y\(t\)中恢复帕金森病说话人的干净语音x\(t\)，输出增强语音，难点在于病理声学非典型致使常人语音训练模型严重失配且干净病理语料稀少难做监督训练。为此方法链分三步：先用音高偏移、时间拉伸与SpecMix变换扩展韵律与时频多样性并生成新谱图，再用支持西班牙语的YourTTS与XTTS零样本克隆合成新说话人内容以补足说话人覆盖，最后将原干净与合成语音与多噪声类型按\-6至14dB随机信噪比混合生成多条件带噪对并统一送入预测式复谱回归与生成式薛定谔桥模型训练。与以往仅做单预测模型与简单变换不同，本文同时考察增强类型、增强比例与模型目标交互，揭示噪声增强最稳健而生成增强过量会破坏生成路径学习。在PC\-GITA语料评测设置下，CR模型的SpecMix\(100%\)的指标ΔfwSSNR为5\.93，高于基线的指标ΔfwSSNR 5\.73±0\.15。结论适用边界受限于西班牙语PC\-GITA帕金森病语料与10折说话人无关交叉验证，生成增强高比例退化与向其他病种语言外推尚未验证。训练成本方面原文披露CR与SB分别在RTX 3090硬件与H100硬件上以批量4与最多1000轮训练，推理开销随SB的50步采样增加。

🔗 **开源资源**

- 第三方资源：<https://librosa.org/doc/main/generated/librosa.effects.pitch> — 链接不可用（HTTP 404）
- 第三方资源：<https://librosa.org/doc/main/generated/librosa.effects.time> — 链接不可用（HTTP 404）
- 第三方资源：<https://github.com/GT-KIM/specmix> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/idiap/coqui-ai-TTS> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 77. [肺音没有干净配对时如何去噪：复数时频 U\-Net 的分层合成与相位重建路线](/posts/conference-eusipco-2026-conference-paper-id-0000301-4cdc28b698/)

> 英文题目：*[DENOISING OF LUNG SOUND RECORDINGS WITH A TIME\-FREQUENCY U\-NET](/posts/conference-eusipco-2026-conference-paper-id-0000301-4cdc28b698/)*

标签：#医疗音频 #时频分析 #单通道 #生理信号 #音频修复

评分：**5.8/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频修复 | 主方法：#时频分析

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000301.pdf)

👥 **作者与机构**

- Petry, Lisa：机构信息未能从会议 PDF 纯文本可靠映射
- Moliner, Eloi：机构信息未能从会议 PDF 纯文本可靠映射
- Järvensivu, Tuomas：机构信息未能从会议 PDF 纯文本可靠映射
- Välimäki, Vesa：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

肺音去噪输入为单通道听诊波形混合心音摩擦与环境噪声，输出为干净肺音波形，难点在于干扰与肺音频带重叠且呼吸能量起伏导致分段信噪比剧烈波动。所提系统先经短时傅里叶变换将波形映射为复数时频谱并堆叠实虚部，为同时估计幅度与相位提供可学习的实值输入。接着NCSN\+\+型编码解码网络以残差卷积提取局部纹理并以瓶颈自注意力建模呼吸周期上下文，直接预测增强谱的实部与虚部。预测谱重组为复数信号后经逆短时傅里叶变换恢复去噪波形，训练则以干净肺音与心音摩擦粉白噪声按独立信噪比合成的配对数据监督波形均方误差。与仅掩蔽幅度谱保留含噪相位或直接建模波形的方法不同，该复数谱预测兼顾谱细节与长时吸气暂停动态，因而在高噪下残留更少。在16例留存人体模型录音评测下，STFT\-U\-Net的ΔSNR为20\.06 ± 1\.20，高于Autoencoder的ΔSNR 18\.95 ± 0\.58。该结论适用边界限于心音摩擦及粉白噪声三类合成混合，对真实病理杂音与设备差异尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 78. [近场麦克风串音：用输入通道随机置换逼模型学空间关系](/posts/conference-eusipco-2026-conference-paper-id-0000366-7bdb1e0f8a/)

> 英文题目：*[LEARNING INPUT\-CHANNEL PERMUTATION EQUIVARIANCE FOR MULTI\-CHANNEL SOURCE SEPARATION: REDUCING BLEEDING IN SMALL MUSIC ENSEMBLES](/posts/conference-eusipco-2026-conference-paper-id-0000366-7bdb1e0f8a/)*

标签：#数据增强 #鲁棒性 #多通道 #音乐 #音乐源分离

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐源分离 | 主方法：#数据增强

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000366.pdf)

👥 **作者与机构**

- Pandey, Ruchi：机构信息未能从会议 PDF 纯文本可靠映射
- Garcia\-Martinez, Jaime：机构信息未能从会议 PDF 纯文本可靠映射
- Cabañas\-Molero, Pablo：机构信息未能从会议 PDF 纯文本可靠映射
- Diaz\-Guerra, David：机构信息未能从会议 PDF 纯文本可靠映射
- Falcón Pérez, Ricardo：机构信息未能从会议 PDF 纯文本可靠映射
- Virtanen, Tuomas：机构信息未能从会议 PDF 纯文本可靠映射
- Carabias\-Orti, Julio J\.：机构信息未能从会议 PDF 纯文本可靠映射
- Vera\-Candeas, Pedro：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

古典同期录音中5通道近距离麦克风混合信号需还原为同等通道数的去串音干净信号，难点在于混响厅堂下相似音色弦乐的空间着色串音与录音摆位多变导致固定映射失效。先用SynthSOD弦乐音源与PyRoomAcoustics鞋盒模型合成多房间多摆位近距离混合数据，输出逐通道干净参考以提供可控监督并进入模型训练。再将混合Demucs双域U\-Net改编为5通道输入与5通道输出，使时域与频域分支联合处理全部通道上下文以利用频谱与空间线索并产生逐通道估计。训练时对输入与参考目标施加相同随机通道置换以强制置换等变，使同一乐器在不同批次出现在不同通道序号，迫使模型从输入推断通道间声学关系。与固定通道基线不同，该策略不解决输出标签指派歧义而是将输出绑定输入通道，仅用置换防止记忆音色与通道编号，从而提升对未见房间摆位与真实音色的鲁棒性。在URMP弦乐经R6房间与L5摆位渲染的测试条件下，幅度谱置换模型的SDR改善为\+5\.3 dB，高于无置换基线的SDR改善\+0\.3 dB。结论适用边界受限于5通道弦乐小编制与模拟房间脉冲响应加URMP重放评估，尚未验证大编制乐队与真实同期多轨真值下的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://doi.org/10.5281/zenodo.1117372> → <https://zenodo.org/record/1117372> — 暂时无法访问
- 第三方资源：<https://publications.rwth-aachen.de/record/772251> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 79. [场景决定何为噪声：自动上下文去噪如何先判场景再去异物](/posts/conference-eusipco-2026-conference-paper-id-0000426-b3555c1803/)

> 英文题目：*[AUTOMATIC CONTEXTUAL AUDIO DENOISING](/posts/conference-eusipco-2026-conference-paper-id-0000426-b3555c1803/)*

标签：#数据集 #CNN #环境声 #音频修复 #声学场景分类

评分：**5.8/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频修复 | 主方法：#CNN

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000426.pdf)

👥 **作者与机构**

- Luong, Diep：机构信息未能从会议 PDF 纯文本可靠映射
- Drossos, Konstantinos：机构信息未能从会议 PDF 纯文本可靠映射
- Heikkinen, Mikko：机构信息未能从会议 PDF 纯文本可靠映射
- Virtanen, Tuomas：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

自动上下文音频去噪以单通道含噪场景音频为输入，输出去除带外事件后的干净场景信号，难点在于同一声音事件在不同场景下时而为需保留的场景内成分时而为待删的带外噪声。上下文提取器先在干净音频上预训练声学场景分类以获得场景嵌入，随后对含噪输入推断该嵌入并将其作为条件向量输出。去噪器以含噪幅度谱与该嵌入为输入，经特征调制估计上下文去噪掩膜并与含噪谱相乘重构波形。在微调设置下上下文提取器与去噪器以联合损失共同优化，使场景嵌入与掩膜估计更好地对齐，而冻结设置则固定提取器仅训练去噪器。相对固定目标去噪与需外部提示的目标提取，该机制无需人工指定目标而由推断上下文动态定义目标与噪声，从而保留同场景有用成分并抑制跨场景无关成分。在自建6场景配对数据的测试集下，UNetTu\-ASC的SI\-SDR为12\.12 dB，高于UNet的SI\-SDR 10\.16 dB。该结论适用边界受限于合成混合的短时场景与封闭场景集合，跨开放场景与真实录制混合的外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://doi.org/10.5281/zenodo.20287453> → <https://zenodo.org/doi/10.5281/zenodo.20287453> — 暂时无法访问
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 80. [帧长跟着声门走：用基音周期对齐傅里叶分析的动态帧谱特征](/posts/conference-eusipco-2026-conference-paper-id-0000441-9970b8e61b/)

> 英文题目：*[DYNAMIC FRAME LENGTH FOR SPEECH SPECTRAL MAGNITUDE FEATURES](/posts/conference-eusipco-2026-conference-paper-id-0000441-9970b8e61b/)*

标签：#时频分析 #语音学与音系 #语音 #音频分类

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分类 | 主方法：#时频分析

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000441.pdf)

👥 **作者与机构**

- Fang, Guolin：机构信息未能从会议 PDF 纯文本可靠映射
- Brookes, Mike：机构信息未能从会议 PDF 纯文本可靠映射
- Juvela, Lauri：机构信息未能从会议 PDF 纯文本可靠映射
- Gudnason, Jon：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究处理固定帧长与浊音基频周期失配导致的频谱失真问题，输入为16 kHz语音波形，输出为固定时频网格上的对数幅度谱特征，用于音素分类。首先基于声门闭合时刻确定动态帧边界并以偏移参数控制帧相对声门事件的位置，使每帧对齐单个基音周期，随后对每帧直接计算傅里叶系数而不加窗或补零，接着经自然邻居插值（Natural\-Neighbor Interpolation）重采样到统一时频网格，最后经加1取对数与Z分数归一化（Z\-Score Normalization）送入分类器。与固定帧加汉宁窗（Hann Window）的传统短时傅里叶变换（Short\-Time Fourier Transform，STFT）相比，关键差异在于以生理周期对齐替代固定切分，从源头避免非整数周期截断伪影。在TIMIT数据集38类音素加静音任务上，动态帧在6 ms表观支撑双倍分辨率下取得47\.3%测试准确率，高于24 ms固定帧基线的46\.8%。该结论限于无上下文的轻量多层感知机（Multilayer Perceptron，MLP）静态分类，未验证结合上下文建模或完整语音识别及跨语料泛化。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 81. [冻住检测器、只训练回溯翻译器：持续伪造语音检测里的遗忘与适配矛盾](/posts/conference-eusipco-2026-conference-paper-id-0000796-4c518862e6/)

> 英文题目：*[BForSec\-P1\.9: TRACEBACK TRANSLATORS AGAINST FORGETTING IN CONTINUAL FAKE SPEECH DETECTION](/posts/conference-eusipco-2026-conference-paper-id-0000796-4c518862e6/)*

标签：#持续学习 #领域适应 #跨语言 #语音伪造检测

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音伪造检测 | 主方法：#持续学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000796.pdf)

👥 **作者与机构**

- Gottardis, Enrico：机构信息未能从会议 PDF 纯文本可靠映射
- Tamiazzo, Mattia：机构信息未能从会议 PDF 纯文本可靠映射
- Milani, Simone：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为静音到浊音跃变点附近截取的多段语音梅尔频率倒谱系数谱图，输出为真伪二分类的音频级判定，难点在于新生成器与新语言持续到来时微调会引发灾难性遗忘且旧数据常不可复用。先在源域训练定制残差网络得到冻结编码器与分类头，再在嵌入层后插入带瓶颈与残差连接的轻量回溯翻译器以重映射新特征空间到原空间，随后以分类损失联合相关对齐与原型一致约束驱动适配，音频级决策由多谱图多数投票聚合得到。相对全量微调与仅调归一化层的域自适应，冻结主干加翻译保留了源域决策边界而只学习跨域残差映射，因而源域精度完全不变且待训练参数大幅减少。在FakeOrReal评测设置下，域翻译方法在源域ASVspoof 2019测试集上的EER为9\.74%，低于全量微调的EER 43\.2%。该结论适用边界受限于单源到三个单目标的独立适配验证，尚未验证多任务序列累积、开放攻击与强压缩信道下的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 82. [测试时不知道机器是谁：异常声音检测的身份依赖与隐式识别](/posts/conference-eusipco-2026-conference-paper-id-0001107-023e779c88/)

> 英文题目：*[HOW MUCH DOES MACHINE IDENTITY MATTER IN ANOMALOUS SOUND DETECTION AT TEST TIME?](/posts/conference-eusipco-2026-conference-paper-id-0001107-023e779c88/)*

标签：#工业应用 #评测协议 #鲁棒性 #异常声音检测

评分：**5.8/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#异常声音检测 | 主方法：#评测协议

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001107.pdf)

👥 **作者与机构**

- Wilkinghoff, Kevin：机构信息未能从会议 PDF 纯文本可靠映射
- Imoto, Keisuke：机构信息未能从会议 PDF 纯文本可靠映射
- Tan, Zheng\-Hua：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本工作研究测试时无机器身份的异常声音检测，输入为单通道单机录音，输出为异常分数，难点是多机混测时须隐式选对机器特定的正常性模型否则排序错误。先将同一划分内多机测试集合并并在推理时屏蔽身份标签，输入为原机分测试集，职责是构造无身份联合测试流，输出为身份不可用的混合测试集。再对混合集中每条录音计算全部候选机的机器特定分数，输入为混合录音与各机正常性模型，职责是并行打分并取最小值作为联合异常分数，输出为分数及其对应的隐式机型归属，该归属即识别结果。最后将联合分数按原机型划分回算AUC与pAUC并平均，输入为联合分数与事后身份标签，职责是度量检测退化，输出为机会校正的退化与识别准确率，前一步的隐式归属直接进入本步的准确率计算以关联两类性能。在DCASE2020至DCASE2025开发与评估划分平均协议下，Direct\-ACT未知身份条件的AUC为69\.66%，低于已知身份条件的AUC 70\.31%。相对标准机型内评估，该机制差异在于把身份选择误差显式暴露为跨机分数混淆，而非用身份隔离消除歧义，因而能揭示判别式模型更鲁棒的实际意义。结论适用边界受限于已知封闭机型集合与单机单通道假设，尚未验证多机混叠与开放机型的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 83. [同向干扰难分开时：用跨阵列非目标估计做后置滤波的声点形成](/posts/conference-eusipco-2026-conference-paper-id-0000116-fba08c36f8/)

> 英文题目：*[AUDIO SPOTFORMING VIA POST\-FILTERING USING CROSS\-ARRAY NON\-TARGET ESTIMATES](/posts/conference-eusipco-2026-conference-paper-id-0000116-fba08c36f8/)*

标签：#信号处理 #麦克风阵列 #语音 #目标说话人提取

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#目标说话人提取 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000116.pdf)

👥 **作者与机构**

- Ishikawa, Yuto：机构信息未能从会议 PDF 纯文本可靠映射
- Li, Li：机构信息未能从会议 PDF 纯文本可靠映射
- Seki, Shogo：机构信息未能从会议 PDF 纯文本可靠映射
- Yamaoka, Kouei：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

分布式麦克风阵列的目标语音提取以多阵列含噪混合为输入，以增强的目标语音为输出，实际难点是当干扰源在某一阵列视角与目标同向时单阵列线性空域滤波无法分离两者，残留干扰只能靠后级抑制。各阵列先用几何约束独立低秩矩阵分析做空间滤波，输出一路目标向通道与多路非目标通道，其输出进入后置滤波阶段作为可观测方差量。后置滤波将目标向方差建模为目标方差与跨阵列非目标方差的非负线性组合，并对目标方差施加逆伽马稀疏先验，再用大化均衡算法迭代估计方差与组合权重，估计结果用于构造多通道维纳滤波并对各阵列输出同步平均。与用非负矩阵分解或非负张量分解低秩谱模板直接构造后置滤波器不同，该方法用跨视角空间分离量替代难拟合的语音低秩假设，因而降低建模失配与计算复杂度。在3话筒近无混响设置下，所提无先验版本的SDR为22\.68 dB，高于NTF基线的SDR 16\.88 dB。该结论的适用边界是目标方位已知且阵列间残余异步在10个采样内，尚未验证真实录音、移动声源与方位误差下的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 84. [解码器才是瓶颈：冻结语音编码器与印度大模型做印英混读识别](/posts/conference-eusipco-2026-conference-paper-id-0000156-73ec7af37f/)

> 英文题目：*[CROSS\-MODAL ALIGNMENT OF SPEECH ENCODERS AND INDIC LLMS FOR HINDI\-ENGLISH CODE\-SWITCHING ASR](/posts/conference-eusipco-2026-conference-paper-id-0000156-73ec7af37f/)*

标签：#Adapter #大语言模型 #多语言 #语音 #语音识别

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.6/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#Adapter

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000156.pdf)

👥 **作者与机构**

- Singh Bhooi, Puneet：机构信息未能从会议 PDF 纯文本可靠映射
- Abrol, Vinayak：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

印地语英语语码切换语音的输入是技术讲座长音频，输出是天城体与拉丁体混排的转写文本，难点在于句内快速语言切换导致文字体系选错与切换边界不稳。方法链条分为三步：冻结语音编码器先将声学信号压缩为紧凑表征，接着可训练轻量适配器对帧分组下采样并投影到大模型词嵌入空间，最后冻结的印度专用指令微调解码器在提示条件下自回归生成转写。与微调原解码器相比，该机制把声学建模与语言先验解耦，直接借用更强的印度语言先验约束文字选择。在 MUCS 2021 人工清洗盲测集上，最优配置相对解码器微调基线同时降低词错率 Word Error Rate \(WER\) 与音译词错率 Transliterated\-WER \(T\-WER\)，取得 21\.56% WER 与 20\.69% T\-WER，相对差距由约 11\.2% 收窄至约 4\.2%。结论仅在该百小时级讲座语料与冻结 Whisper\-Large\-v3 编码器加 Krutrim\-2 组合下成立，换用其他大模型、解冻编码器或开放域对话尚未验证。原文未披露训练时长、推理延迟与部署成本。

🔗 **开源资源**

- 第三方资源：<https://openreview.net/forum?id=Bkg6RiCqY7> → <https://openreview.net/challenge?redirect=%2Fforum%3Fid%3DBkg6RiCqY7> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.sarvam.ai/blogs/sarvam-1> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.sarvam.ai/blogs/sarvam-m> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 85. [把转录文本连成图：用主体词关系检测阿尔茨海默症](/posts/conference-eusipco-2026-conference-paper-id-0000286-3716e87f61/)

> 英文题目：*[FROM ASR TO GRAPHS: GRAPH REPRESENTATION LEARNING FOR ALZHEIMER’S DEMENTIA DETECTION FROM SPONTANEOUS SPEECH](/posts/conference-eusipco-2026-conference-paper-id-0000286-3716e87f61/)*

标签：#语音生物标志物 #图神经网络 #语音 #病理语音评估

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#病理语音评估 | 主方法：#图神经网络

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000286.pdf)

👥 **作者与机构**

- Battula, Harish：机构信息未能从会议 PDF 纯文本可靠映射
- Deshpande, Gauri：机构信息未能从会议 PDF 纯文本可靠映射
- Kopparapu, Sunil Kumar：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

阿尔茨海默病痴呆自发语音检测输入为饼干失窃图片描述录音转写文本，输出为痴呆与认知正常二分类，难点在于自动转写噪声大、样本量小且语言退化体现在人物指代缺失与主题维持中断等关系结构而非孤立词频。该流水线先用轻量Faster\-Whisper\-Small将语音转写为词元序列，再按场景、主体、动作三类先验从参与者话语构建紧凑词表并剔除 invigilator 重叠词以突出患者语言模式。接着以全文唯一词元为节点、以主体词共现为无向静态边构建单图，并用冻结BERT嵌入拼接词性独热与全局余弦中心性构成772维节点特征矩阵。最后将该图送入两层图卷积网络经注意力池化做图级分类，前一步的邻接矩阵持续约束消息传递的聚合邻域。与把转写视为线性序列的1D\-CNN\-BiLSTM基线不同，该机制把人物共现显式编码为拓扑，使模型能跨距离聚合主体相关证据而非仅依赖词序，从而暴露通用窗口边与语义相似边无法捕捉的指代结构。在ADReSS\-o测试集评估任务下，GCN\+Attn窗口k=3条件的准确率为0\.80，高于GCN\+Attn窗口k=5条件的准确率0\.78。该结论适用边界受限于英语饼干失窃描述任务与ADReSS\-o单语料验证，尚未验证叙事回忆或日常对话等新 elicitation 任务的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 86. [简单输入画不准、精细能量难手绘：AudioSketch 如何调制出有语义的时间能量](/posts/conference-eusipco-2026-conference-paper-id-0000391-351a9e0fc9/)

> 英文题目：*[AUDIOSKETCH: CONTROLLABLE IMAGE\-TO\-AUDIO GENERATION VIA SEMANTIC\-TEMPORAL ENERGY MODULATION](/posts/conference-eusipco-2026-conference-paper-id-0000391-351a9e0fc9/)*

标签：#扩散模型 #多模态学习 #音视频 #音频生成

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#扩散模型

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000391.pdf)

👥 **作者与机构**

- Lee, Jihyun：机构信息未能从会议 PDF 纯文本可靠映射
- Li, Jiahao：机构信息未能从会议 PDF 纯文本可靠映射
- Chung, Woojin：机构信息未能从会议 PDF 纯文本可靠映射
- Lu, Yan：机构信息未能从会议 PDF 纯文本可靠映射
- Kang, Hong\-Goo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

图像到音频（Image\-to\-Audio，I2A）生成需从单帧图像推断语义合理且时序自然的声音，难点是一对多映射与用户时间控制的易用性和表现力难以兼顾。本文提出AudioSketch，三阶段流水线为：图像到音频映射器把剪辑对比预训练（Contrastive Language\-Image Pre\-training，CLIP）图像特征投影到对比语言音频预训练（Contrastive Language\-Audio Pretraining，CLAP）音频嵌入空间以复用预训练音频潜在扩散模型（AudioLDM）；控制网络（ControlNet）分支注入能量轨迹约束响度时序；能量调制器以扩张卷积结合图像语义嵌入把二值时间戳转化为平滑精炼均方根（Root Mean Square，RMS）能量。与直接用粗糙时间戳或频域对数梅尔均值的方法不同，该设计把语义理解放在控制信号整形阶段而非仅放在扩散条件阶段。在视觉声音（VisualSound）评测上，无能量控制版本弗雷歇距离（Fréchet Distance，FD）为16\.21，优于视觉到音频映射器（V2A\-Mapper）的17\.11，同时库尔贝克\-莱布勒散度（Kullback\-Leibler Divergence，KL）为1\.48，感知分数（Inception Score，IS）为12\.41，均居表1最优。该结论仅在10秒开域Foley类片段和单关键帧条件下验证，对长时复杂场景与自由手绘能量的泛化尚未证明。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://audiosketchdemopage.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 87. [主噪声关不掉时，如何把扬声器漏进参考麦的声音减掉](/posts/conference-eusipco-2026-conference-paper-id-0000981-8bfe3e2190/)

> 英文题目：*[ACOUSTIC FEEDBACK PATH MITIGATION FOR MULTICHANNEL ACTIVE NOISE CONTROL](/posts/conference-eusipco-2026-conference-paper-id-0000981-8bfe3e2190/)*

标签：#自适应滤波 #鲁棒性 #多通道 #主动降噪

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#主动降噪 | 主方法：#自适应滤波

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000981.pdf)

👥 **作者与机构**

- Zhang, Yile \(Angela\)：机构信息未能从会议 PDF 纯文本可靠映射
- Abhayapala, Thushara D\.：机构信息未能从会议 PDF 纯文本可靠映射
- Samarasinghe, Prasanga N\.：机构信息未能从会议 PDF 纯文本可靠映射
- Bastine, Amy：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

多通道前馈主动降噪以参考组与反馈组传声器信号为输入，以次级扬声器抗噪信号为输出，难点是扬声器泄漏污染参考信号并在主噪声持续存在时无法单独静音标定反馈路径。本文先在主噪声独存时估计参考组与反馈组的协方差作为本底，再在主噪声叠加次级独立高斯探测信号时估计总协方差并相减得到次级声场协方差，进而估计反馈组到参考组的相对传递矩阵。在线阶段利用该矩阵由反馈组信号预测参考组中的反馈分量并相减，净化后的参考信号仅保留与主源成比例的主噪声分量，再送入归一化频域滤波\-x最小均方控制器更新权值。与直接用总场统计估计矩阵的总场基线相比，该减法机制将估计量与主噪声信号解耦而仅依赖声传递结构，因此在噪声位置与内容变化下更稳定。在6 m×7 m×3 m仿真房间50 Hz至600 Hz评测设置下，所提方法的降噪指标为\-15\.467 dB，低于总场基线的降噪指标\-2\.169 dB。该结论适用边界限于静态房间与已知次级通路的仿真，尚未验证真实混响变化与时变反馈路径下的失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 88. [未见声音总被判成熟悉声音：用属性生成补数据，再用分布检测先分流](/posts/conference-eusipco-2026-conference-paper-id-0001122-5f1863ed21/)

> 英文题目：*[GENERALIZED ZERO\-SHOT LEARNING OF ACOUSTIC EVENT USING ATTRIBUTE\-CONDITIONED GAN AND OUT\-OF\-DISTRIBUTION DETECTOR](/posts/conference-eusipco-2026-conference-paper-id-0001122-5f1863ed21/)*

标签：#生成对抗网络 #零样本 #环境声 #音频分类

评分：**5.7/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分类 | 主方法：#生成对抗网络

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001122.pdf)

👥 **作者与机构**

- Uehara, Kohei：机构信息未能从会议 PDF 纯文本可靠映射
- Takashima, Ryoichi：机构信息未能从会议 PDF 纯文本可靠映射
- Takiguchi, Tetsuya：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

广义零样本声学事件分类输入为已见类音频梅尔频谱与所有类的声音属性向量，输出为同时覆盖已见类与未见类的事件标签，实际难点是分类器将未见类严重偏置判为已见类。先由编码器与回归器将输入频谱映射为隐特征并估计属性向量，其输出的隐特征作为后两步的共享表征与生成训练基础。再由属性条件GAN的生成器以属性向量与高斯噪声为输入合成未见类隐特征，并用真实已见特征与合成未见特征共同训练广义分类器，输出覆盖两域的类别后验。最后由分布外检测器以隐特征为输入学习已见分布的未见得分，其输出的先验经阈值偏置校正后与分类器后验相乘融合完成最终判决。与仅比较属性相似度的旧方法和单独ACGAN相比，该工作显式生成未见分布并用独立检测先验校正已见偏置，从而解耦已见与未见决策。在RWCP\-SSD数据集GZSL任务下，概率系统的调和平均准确率为78\.7%，高于ACGAN基线的调和平均准确率36\.2%。该结论适用边界受限于固定30已见类加6未见类的单次划分，尚未验证属性定义变化与跨数据集迁移及噪声下的稳定性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 89. [声音太像说不出差别：用两阶段跨音频解码逼出可比的描述](/posts/conference-eusipco-2026-conference-paper-id-0001127-0ea0649235/)

> 英文题目：*[INTER\-AUDIO DIVERSE DECODING FOR AUDIO DIFFERENCE CAPTIONING IN UNSUPERVISED ANOMALOUS SOUND DETECTION SCENARIOS](/posts/conference-eusipco-2026-conference-paper-id-0001127-0ea0649235/)*

标签：#检索增强 #主观评测 #大语言模型 #异常声音检测 #音频字幕生成

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频字幕生成 | 主方法：#检索增强

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001127.pdf)

👥 **作者与机构**

- Nishida, Tomoya：机构信息未能从会议 PDF 纯文本可靠映射
- Kanamori, Yusuke：机构信息未能从会议 PDF 纯文本可靠映射
- Purohit, Harsh：机构信息未能从会议 PDF 纯文本可靠映射
- Dohi, Kota：机构信息未能从会议 PDF 纯文本可靠映射
- Endo, Takashi：机构信息未能从会议 PDF 纯文本可靠映射
- Kawaguchi, Yohei：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为无监督异常声音检测（Unsupervised Anomalous Sound Detection，UASD）中检出的异常机器声 \`xa\`与给定单个正常机器声 \`xn\`，输出为一句话自然语言差异描述，难点在于两段同机器同工况音频高度相似，且训练时无异常声、无配对差异标注可用。方法沿用检索增强差异字幕框架：冻结通用音频字幕模型分别描述两段音频，再用大语言模型（Large Language Model，LLM）汇总为差异句，本文只改推理时解码。第一阶段组内多样波束搜索（Diverse Beam Search，DBS）将每路音频波束分为多组，后组叠加与先前组候选的汉明距离惩罚以扩大措辞覆盖；第二阶段跨音频判别搜索额外叠加与对侧音频第一阶段全部候选的相异惩罚，使两路候选集合相互远离；最后将两阶段每路共10条候选送入GPT\-4\.1归纳为一句话。第二段相对第一段的差异由LLM从两组描述的用词差异中推断。主观评测在33对洁净机器声上显示完整方法平均意见分（Mean Opinion Score，MOS）高于单波束基线RAG\-BS和仅第一阶段变体RAG\-DBS，且基线有7对输出无可听差异而完整方法为0对。该结论限于洁净声与单正常样本简化设置，阀门类点击音色微差被直接剔除，音高变化类仍弱于显式训练的ADIFF，噪声与域偏移鲁棒性、多正常样本检索影响均未验证。原文未披露训练与推理成本量化。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 90. [把得分函数学准：用分数匹配为独立向量抽取训练可解析求导的正弦源模型](/posts/conference-eusipco-2026-conference-paper-id-0001197-eef911707b/)

> 英文题目：*[LEARNING SOURCE MODEL FOR INDEPENDENT VECTOR EXTRACTION BY SCORE MATCHING](/posts/conference-eusipco-2026-conference-paper-id-0001197-eef911707b/)*

标签：#信号处理 #可解释性 #麦克风阵列 #语音 #目标说话人提取

评分：**5.7/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#目标说话人提取 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001197.pdf)

👥 **作者与机构**

- Koldovský, Zbyněk：机构信息未能从会议 PDF 纯文本可靠映射
- Navrátil, Matěj：机构信息未能从会议 PDF 纯文本可靠映射
- Málek, Jiří：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作面向频域盲提取，输入为多频点多通道线性瞬时混合观测，输出为感兴趣源在各频点的估计，难点在于跨频点依赖未知带来排列模糊，固定球对称或tanh先验难以匹配真实语音分布。方法先对归一化感兴趣源样本构建由交替线性层与标量正弦非线性组成的SIREN网络以参数化多变量得分函数。接着以许温评分匹配损失训练该网络，使其输出逼近真实对数密度梯度，并可解析求取对复变量经实部虚部分解后的一阶Wirtinger导数。然后将学得非线性及其解析导数直接代入独立向量提取对比函数的二阶FastICE/FastIVE类迭代规则以更新分离向量。相对端到端学习替代函数或固定先验，该机制保留得分函数匹配最优性的可解释性，避免自动微分并实现快速部署，还与噪声活动检测等先验信息互补。在基线目标语音提取场景任务下，配备训练SIREN源模型的iFastIVE的SIR高于传统模型的SIR约0\.3 dB，且其SDR高于传统模型的SDR约0\.8 dB。该结论适用边界受限于中等混响与中等信噪比模拟房间及特定初始化区间，低信噪比与高混响下优势收窄且尚未验证真实录音迁移。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 91. [相位对不准就白做：用极坐标分开调幅度和相位的频域个人声区](/posts/conference-eusipco-2026-conference-paper-id-0000031-237924b825/)

> 英文题目：*[POLAR COORDINATE SEPARATION LEARNING FOR FREQUENCY\-DOMAIN ADAPTIVE PERSONAL SOUND ZONES](/posts/conference-eusipco-2026-conference-paper-id-0000031-237924b825/)*

标签：#自适应滤波 #高效推理 #麦克风阵列 #空间音频信号 #主动降噪

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#主动降噪 | 主方法：#自适应滤波

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000031.pdf)

👥 **作者与机构**

- Gonaikawa, Yutaka：机构信息未能从会议 PDF 纯文本可靠映射
- Sugiura, Yosuke：机构信息未能从会议 PDF 纯文本可靠映射
- Shimamura, Tetsuya：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

个人声区需以10通道扬声器阵列同时在亮区重放目标声并在暗区抑制串扰，听者移动导致传递函数时变、稳态对比度与重收敛速度难以兼顾是实际难点。方法先在频域估计扬声器到亮区与暗区的传递函数，并由亮区误差与暗区加权误差构造代价函数与频点梯度。接着将控制滤波器分解为幅度与相位两支路，分别取梯度实部与虚部并用归一化参考功率求更新。然后由声对比度驱动的Sigmoid相位幅度比率与全局缩放因子动态放大相位步长，使上一步输出的对比度下降直接进入下一步的步长分配以优先纠正相位失配。与时域滤波\-x最小均方加递归最小二乘在线建模相比，该机制以逐频点归一化更新替代矩阵求逆，实现了非稳态下的低复杂度大步长重收敛。在100 s自由场仿真且30 s处声区平移0\.28 m的设置下，提出方法的声对比度AC指标为16\.96 dB，高于常规方法的声对比度AC指标7\.94 dB。该结论适用边界受限于无混响自由场、白噪声带通信号与固定阵列几何，音乐语音与混响真实器件场景尚未验证；原文以每帧浮点运算衡量计算量由844 MFLOPS降至0\.48 MFLOPS，复杂度下降约99\.94%。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 92. [车里噪音太多判不准语音：用音节级对齐重造训练标签的 SylVAD](/posts/conference-eusipco-2026-conference-paper-id-0000081-d70f4b88f1/)

> 英文题目：*[SYLVAD: IMPROVING IN\-VEHICLE VOICE ACTIVITY DETECTION VIA SYLLABLE\-LEVEL ALIGNMENT](/posts/conference-eusipco-2026-conference-paper-id-0000081-d70f4b88f1/)*

标签：#智能座舱 #SFT #强制对齐 #语音活动检测

评分：**5.6/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#语音活动检测 | 主方法：#SFT

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000081.pdf)

👥 **作者与机构**

- Seo, Eunmi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

车载语音活动检测（Voice Activity Detection，VAD）需从发动机振动、路噪、风噪、空调等连续非结构化噪声中切出待识别语音片段，输入为连续车内音频流，输出为语音与非语音的帧级划分，难点是通用预训练模型误触发率高而人工标注车载日志成本巨大。该工作构建离线标注加线上微调链路：先将韩语转写按字符拆分为音节序列，再用蒙特利尔强制对齐器（Montreal Forced Aligner，MFA）估计音节边界并直接转为VAD标签，接着依据对齐似然分数过滤低置信样本，最后用加权损失对Silero VAD微调以压制噪声误检。与词级对齐将停顿与噪声包入同一长单元不同，音节级单元更短更局部，在断续拼读式话语下边界更准且不易引入标签噪声。在包含兴趣点（Points of Interest，POI）与自发对话的实车日志评测中，相对预训练基线，该方法将自发语音测试集F1\-score从0\.9372提升至0\.9556，并将纯非语音段误检数从3243降至1475，错误率从90\.03%降至40\.94%。结论仅在韩语车内场景与同一基线架构下得到验证，未检验跨语言、跨车型、多通道与强混响等外推条件。原文未披露训练与部署资源成本，仅说明推理架构不变而对齐只用于离线建库。

🔗 **开源资源**

- 第三方资源：<https://github.com/snakers4/silero-vad> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 93. [在低频要降噪、高频要保方向时：按频点凸切换松绑双耳约束](/posts/conference-eusipco-2026-conference-paper-id-0000126-f1d032890e/)

> 英文题目：*[FREQUENCY\-BIN\-WISE CONVEX SWITCHING FOR RELAXED JOINT BINAURAL LCMV BEAMFORMING](/posts/conference-eusipco-2026-conference-paper-id-0000126-f1d032890e/)*

标签：#助听器 #波束成形 #麦克风阵列 #语音 #语音增强

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音增强 | 主方法：#波束成形

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000126.pdf)

👥 **作者与机构**

- Gangrade, Himesh：机构信息未能从会议 PDF 纯文本可靠映射
- Pradhan, Somanath：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

双耳助听器需由左右耳麦克风阵列同时输出双耳信号，在压制四个干扰源与背景噪声的同时保留干扰源耳间传递函数以维持空间感知，而严格保真会占用自由度并削弱降噪能力。方法先解析求解保目标耳间传递函数的双耳最小方差无失真响应与附加干扰保真约束的联合双耳线性约束最小方差两组闭式权重，分别负责最大降噪与严格保空间线索，上一输出直接作为下一步凸组合的两个端点。接着以逐频点系数对二者做凸组合，并用网格搜索最小化保真误差与输出功率加权代价，所得最优系数直接给出该频点的切换权重。进一步将该系数作为松弛型联合双耳线性约束最小方差的逐频点松弛量，得到第二变体，使松弛量随频率自适应而非全频带统一。在TIMIT语料的1目标加4干扰评测场景下，CSWITCH在松弛量c为0\.5条件的松弛参数指标为0\.5，高于在松弛量c为0\.08条件的松弛参数指标0\.08。相比固定松弛，这种机制让语音能量集中的低频偏向双耳最小方差无失真响应以增强降噪，让高频偏向联合约束以严格保耳间传递函数，从而在等保真误差下获得更低残留功率。该结论适用边界受限于7米乘5米乘4米合成混响、固定几何与TIMIT语料场景，尚未验证真实双耳录音与多变混响下的外推性。原文以网格搜索代替内点法降低计算量，但高松弛量下延迟仍高于固定松弛方法，须权衡推理开销与降噪收益。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 94. [注意力也会分心：用差分门控让 Conformer 在噪声中保持对比度](/posts/conference-eusipco-2026-conference-paper-id-0000151-0064c2bdc4/)

> 英文题目：*[DIFFERENTIAL GATED CONFORMER](/posts/conference-eusipco-2026-conference-paper-id-0000151-0064c2bdc4/)*

标签：#Conformer #鲁棒性 #语音 #语音识别

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.6/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#Conformer

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000151.pdf)

👥 **作者与机构**

- Acharya, Rajul：机构信息未能从会议 PDF 纯文本可靠映射
- Suryawanshi, Atharva：机构信息未能从会议 PDF 纯文本可靠映射
- Saravane, Yash：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

自动语音识别需将连续声学特征序列映射为字符、子词或词等语言符号序列，Conformer以自注意力建模全局依赖并以卷积建模局部时序结构，但在噪声下注意力头易分散到无关上下文形成注意力噪声，导致上下文建模退化。该方法先以共享键值的两个全维查询分支分别计算兴奋注意力\(A^\{\+\}\)与抑制注意力\(A^\{\-\}\)，得到两路归一化分布以估计共模干扰。接着按逐 token逐头计算输入相关门控\(g\)对两路分布作加权差分融合以相减去噪，随后将该模块与标准多头注意力作交替排布或单层紧耦合，并经前馈适配、可学习前馈贡献因子与有界通道缩放后送入卷积与解码流程。与在降维子空间做差分的差分注意力及视觉差分门控自注意力不同，该设计保持全维度键值共享与细粒度门控，从而保留跨频率跨时间声谱关联并兼顾深浅层表达与去噪。在Librispeech干净测试集条件下，X\-Large变体的WER相对降幅为11\.9%，高于Large变体的WER相对降幅7\.72%。加噪评估将测试集与ESC\-50环境噪声按不同信噪比混合，低信噪比下所提模型退化更慢而优势扩大。其结论适用边界受限于英文朗读语音人工加噪条件，尚未验证真实远场、多语言与流式场景，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/NVIDIA-NeMo/NeMo> → <https://github.com/NVIDIA-NeMo/Speech> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 95. [只做整段分类的模型，能否用积分梯度找回声音何时出现](/posts/conference-eusipco-2026-conference-paper-id-0000241-d006b126df/)

> 英文题目：*[EVALUATING THE TEMPORAL DETECTION CAPABILITY OF INTEGRATED GRADIENTS APPLIED ON SOUND CLASSIFIER](/posts/conference-eusipco-2026-conference-paper-id-0000241-d006b126df/)*

标签：#评测协议 #可解释性 #环境声 #音频事件检测

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音频事件检测 | 主方法：#评测协议

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000241.pdf)

👥 **作者与机构**

- Dumpis, Martynas：机构信息未能从会议 PDF 纯文本可靠映射
- Virtanen, Tuomas：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为10 s家居复调音频，输出为10类 domestic 事件的帧级起止活动，难点是训练只有片段级存在标签，事件时长0\.25 s至4\.2 s且可重叠。方法链分三步：先用冻结的 AudioSet 预训练 PANNs CNN14加全局最大池化训练片段级多标签分类器，只学存在与否；再对预测概率超过0\.5的类别，用积分梯度（Integrated Gradients，IG）以全零波形为基线沿直线路径取50步累积梯度并取绝对值，得到与波形等长的采样点重要性；最后按100 ms窗平均聚合成帧级曲线并做1至99百分位阈值二值化得到检测。相比带帧级预测头的多实例学习弱监督检测，该路线无时间预测头，靠事后归因恢复时间。在合成家居测试集上IG达到平均交并比0\.39、帧级F1 0\.52、Pointing Game准确率82\.6%，接近同骨干弱监督帧级基线FW\-WS的0\.42、0\.55、97\.3%，但峰值定位差距超14个百分点，强监督上限FW\-SS为0\.45、0\.58、97\.9%。结论仅适用于15 dB至25 dB合成清晰声景，对瞬态类与真实低信噪比录音未验证。原文未披露训练推理成本与统计显著性。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 96. [给耳蜗模型装上逆行路：用瞬态诱发耳声发射反推外毛细胞状态](/posts/conference-eusipco-2026-conference-paper-id-0000271-6ff3c436d5/)

> 英文题目：*[AUDITORY MODEL PERSONALIZATION BASED ON TRANSIENT\-EVOKED OTOACOUSTIC EMISSIONS](/posts/conference-eusipco-2026-conference-paper-id-0000271-6ff3c436d5/)*

标签：#医疗音频 #端到端学习 #正则化 #音频生成

评分：**5.6/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#端到端学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000271.pdf)

👥 **作者与机构**

- Xu, Yong\-Yue：机构信息未能从会议 PDF 纯文本可靠映射
- Liu, Yi\-Wen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理以短声点击为输入、以耳道内瞬态诱发性耳声发射波形为输出的听觉模型个性化问题，难点在于耳蜗放大与相干反射高度非线性且个体差异大，直接拟合难以同时保证生理合理与波形保真。方法先由双向级联滤波器结构前向传播点击并经耳蜗基底膜不规则反射系数产生反向散射波，再经中耳反向滤波与衰减合成仿真发射以形成频率依赖延迟。然后以多分辨率频谱与时域波形及频谱包络损失联合平滑与分布约束优化外毛细胞健康向量与反射系数及非线性参数，反向传播贯穿级联递归结构实现端到端可微调参。最后采用多起点与参数分组梯度策略从不同健康初值独立优化并选择最低损失解以缓解非凸局部极小。相对直接拟合传输线模型或不可产生发射的并行卷积近似，该机制差异在于保留纵向耦合与相干反射物理结构的同时获得实时可微调参能力。在传输线模型仿真损伤评测设置下，平坦损伤条件的误差指标为1\.01 dB，低于频谱维度的误差指标的2\.92 dB。结论适用边界仅限仿真验证的平坦与斜坡及陷波损伤和正常耳波形重建，尚未验证多种真实听损耳的外推能力，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 97. [稀疏程度随房间而变：把最小二乘加多重稀疏约束的模型族展开为可学习的 ADMM 网络](/posts/conference-eusipco-2026-conference-paper-id-0000311-1fdf64e97e/)

> 英文题目：*[A MODEL\-DRIVEN DEEP LEARNING METHOD FOR ACOUSTIC SYSTEM IDENTIFICATION](/posts/conference-eusipco-2026-conference-paper-id-0000311-1fdf64e97e/)*

标签：#端到端学习 #鲁棒性 #语音 #房间脉冲响应估计

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#房间脉冲响应估计 | 主方法：#端到端学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000311.pdf)

👥 **作者与机构**

- Meng, Mingming：机构信息未能从会议 PDF 纯文本可靠映射
- He, Hongsen：机构信息未能从会议 PDF 纯文本可靠映射
- Chen, Jingdong：机构信息未能从会议 PDF 纯文本可靠映射
- Benesty, Jacob：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理批量声学系统辨识，输入为语音激励信号与含噪麦克风观测，输出为房间脉冲响应，难点在于语音非平稳、不同混响改变稀疏结构且噪声水平多变时固定正则与阈值迅速失效。方法链第一步构建最小二乘联合多组广义稀疏约束的参数化模型族以覆盖不同稀疏模式，第二步用交替方向乘子法推导对应算法族得到迭代更新形式。第三步将迭代展开为ADMM\-SysIDNet，把惩罚参数、变换矩阵与卷积操作作为可学习网络层，第四步以归一化均方偏差为损失端到端学习变换与分段线性收缩函数。与单ℓ1约束的ADMM\-ℓ1相比，关键差异在于多子滤波器并行加可学习线性与非线性变换，使稀疏先验可随数据自适应而免去人工调参并提升拟合能力。在T60为160 ms且SNR为0 dB的测试条件下，ADMM\-SysIDNet的平均NMSD为\-9\.59 dB，低于ADMM\-ℓ1的平均NMSD \-5\.66 dB。结论适用边界限于单通道离线批量辨识与白高斯噪声验证，尚未验证彩色噪声、移动声源或长时在线跟踪下的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 98. [一个通用扰动为何能在不同 ASR 上都让转写偏向同一目标](/posts/conference-eusipco-2026-conference-paper-id-0000771-39fe112161/)

> 英文题目：*[BForSec\-P1\.4: TOWARDS UNIVERSAL, TRANSFERABLE, AND TARGETED ACOUSTIC ATTACKS ON ASR SYSTEMS](/posts/conference-eusipco-2026-conference-paper-id-0000771-39fe112161/)*

标签：#正则化 #对抗鲁棒性 #语音 #语音识别

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#正则化

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000771.pdf)

👥 **作者与机构**

- Pantelimon, Emanuel：机构信息未能从会议 PDF 纯文本可靠映射
- Vasilescu, Vlad：机构信息未能从会议 PDF 纯文本可靠映射
- Nicolae, Ana：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

自动语音识别需将连续波形映射为离散词序列，自回归解码与共享编码器结构使其对微小加性噪声敏感，单条通用扰动同时适配多条语音并跨模型生效尤为困难。该工作以源 Whisper 模型为代理，最大化固定指令 \`turn off \<EOT\>\` 的条件对数似然期望并约束扰动二范数，在每次迭代对扰动施加由多个随机二值掩码或运算得到的总掩码后再前向计算，梯度仅回传至未被掩蔽位置，最后保留完整解码器梯度以维持目标文本强制生成能力。相对动量法与仅跳过音频编码器注意力权重的已有迁移策略，该掩码机制直接在输入扰动维度引入随机子空间优化，减少对源模型特定时频路径的过拟合。在 LibriSpeech test\-clean 上以 Whisper\-tiny 为源、Whisper\-base 为目标时 MuteOut 的软攻击成功率达到 72\.80%，明显高于基线同期表现。该结论仅在 Whisper 家族内、以 3 秒高能量扰动和非流式贪心解码为前提成立，未验证异构架构与真实播放录音条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 99. [短录音对不准：用电网频率做时间戳时相似度函数为何是瓶颈](/posts/conference-eusipco-2026-conference-paper-id-0000806-9f756b7bd9/)

> 英文题目：*[SPMuS\-SS1\.1: AI\-AIDED ENF TIMESTAMPING IN MULTIMEDIA FORENSICS](/posts/conference-eusipco-2026-conference-paper-id-0000806-9f756b7bd9/)*

标签：#CNN #对比学习 #鲁棒性 #音频检索

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频检索 | 主方法：#对比学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000806.pdf)

👥 **作者与机构**

- Barak, Raz：机构信息未能从会议 PDF 纯文本可靠映射
- Dabush, Lital：机构信息未能从会议 PDF 纯文本可靠映射
- Shlezinger, Nir：机构信息未能从会议 PDF 纯文本可靠映射
- Routtenberg, Tirza：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

电网频率时间戳任务以待查音频中提取的电网频率波动轨迹为输入，输出其在远长于查询的参考时间轴上的起始时刻，查询短于2分钟或信噪比低时波动易被噪声淹没且长参考带来大量误匹配而可靠性骤降。该方法先以短时傅里叶变换从查询音频提取前三谐波轨迹并从参考提取对应轨迹，得到变长多通道频率序列。接着以时域卷积网络编码器将变长轨迹映射为定长判别表征，并在隐空间以余弦相似度度量查询与候选参考段的对齐程度。然后以线性融合层将隐空间余弦分与原始三谐波相关分加权为最终得分，并按最大得分在参考轴上检索时间戳。相对仅用相关系数或归一化错位的传统匹配，其关键差异在于显式学习跨谐波时序结构并以物理相关线索兜底，因而在单谐波微弱或不一致时仍保持鲁棒并可跨电网泛化。在中国ENF\-WHU训练、以色列ENF\-Wavemark测试的跨电网评测下，本方法编码器加融合的准确率为85\.63%，高于基线方法相关系数的准确率74\.28%。该结论适用边界受限于音频载体与15秒容差判定，对视频载体、恶意剪辑对抗与多电网外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 100. [真人嘴与扬声器箱体辐射不同：用方向能量声学图做轻量多通道回放检测](/posts/conference-eusipco-2026-conference-paper-id-0001212-58d2b1a9ff/)

> 英文题目：*[MULTI\-CHANNEL REPLAY SPEECH DETECTION USING ACOUSTIC MAPS](/posts/conference-eusipco-2026-conference-paper-id-0001212-58d2b1a9ff/)*

标签：#波束成形 #CNN #麦克风阵列 #语音伪造检测

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音伪造检测 | 主方法：#波束成形

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001212.pdf)

👥 **作者与机构**

- Neri, Michael：机构信息未能从会议 PDF 纯文本可靠映射
- Virtanen, Tuomas：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

重放攻击检测输入为多通道阵列录音，输出真人发声与扬声器重放的二分类判决，难点在于单通道谱线索易被伪造且混响与噪声干扰空间判断。先对多通道短时傅里叶变换谱在方位角与俯仰角离散网格上做延迟求和波束扫描，得到各方向的波束能量分布。再按频带划分与时间平均压缩为声学图张量，显式编码方向性能量与早期反射结构，该张量进入下一步分类器。轻量卷积神经网络在方位与俯仰维度提取局部方向模式，经下采样与多层感知机输出真伪二分类。与直接学习波束器或单通道倒谱特征相比，该方法将物理空间能量显式成图，使分类器聚焦人声与扬声器辐射体 directivity 差异，具有可解释性与参数效率优势。在ReMASC数据集D3阵列评测设置下，延迟求和声学图方法的等错误率为10\.1±2\.8%，高于MVDR波束成形的等错误率9\.9±2\.7%。该表示依赖固定频带与静态空间网格，在未见声学环境下性能明显退化，故适用边界受限于训练与测试环境接近的多通道场景。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 101. [学新声会改旧解释：类增量音频分类中的解释漂移如何被遗忘与竞争推高](/posts/conference-eusipco-2026-conference-paper-id-0001661-a74f81541d/)

> 英文题目：*[SiG\-DML\-L1\.3: QUANTIFYING EXPLANATION DRIFT IN AUDIO USING POST\-HOC EXPLAINABLE CONTINUAL LEARNING](/posts/conference-eusipco-2026-conference-paper-id-0001661-a74f81541d/)*

标签：#持续学习 #可解释性 #环境声 #音频分类

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分类 | 主方法：#持续学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001661.pdf)

👥 **作者与机构**

- Imbwaga, Joan：机构信息未能从会议 PDF 纯文本可靠映射
- Mulimani, Manjunath：机构信息未能从会议 PDF 纯文本可靠映射
- Räsänen, Okko：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

环境声分类需在类增量学习下逐任务引入不交新类并保持旧类可判，其难点在于灾难性遗忘会同时改变决策依据，而准确率无法反映推理稳定性。该工作先将原始音频转为对数梅尔谱并经冻结的PANNs CNN14得到512维表征，再用线性分类器逐任务学习并以交叉熵及不同持续学习约束更新参数，接着对同一旧任务样本用积分梯度（Integrated Gradients，IG）生成时频归因图并展平为解释向量，最后跨阶段以分布与向量距离量化解释漂移并与准确率和遗忘对照。与仅正则化权重的方法不同，该链条把回放样本与蒸馏一致性同时用于约束旧类预测，从而在保留旧表征使用的同时抑制新旧类竞争导致的特征漂移。在ESC\-50按5个任务增量学习时，结合回放、正则和蒸馏的Hybrid2取得平均准确率0\.44与平均遗忘0\.3896，显著优于基线的0\.1690与0\.8439。该结论仅在50类环境声、小任务划分与冻结卷积主干下验证，未检验开放域噪声、说话人或音乐迁移及内在可解释模型的适用性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 102. [自回归交叉注意力丢了时间因果：用质心右移把对齐拉回来](/posts/conference-eusipco-2026-conference-paper-id-0000141-e24ade5617/)

> 英文题目：*[CAUSALITY INDUCED TRANSFORMER ATTENTION DECODER FOR IMPROVED ASR](/posts/conference-eusipco-2026-conference-paper-id-0000141-e24ade5617/)*

标签：#注意力机制 #Transformer #语音 #语音识别

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音识别 | 主方法：#注意力机制

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000141.pdf)

👥 **作者与机构**

- Tyagi, Vivek：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

自动语音识别以连续语音频谱序列为输入，输出词或子词序列，实际难点是Transformer自回归解码的交叉注意力概率与底层语音信号错位，导致长段漏听与整句复读幻觉。该方法先以编码器经自注意力学习全句语音隐表示序列，再以解码器对历史词做因果自注意力得到查询，并与编码器键值做交叉注意力融合声学与语言表示以预测下一单元。接着跟踪每步交叉注意力概率质量函数质心最大位置的单调性，用以诊断过大前跳与回环复读等失配模式。最后仅在推理时对后三层解码器交叉注意力做因果干预，以固定步长前移质心并保留原分布轮廓，同时对过大跳跃做过去屏蔽以强制时间因果对齐。与降低计算量的单调分块注意力不同，该方法不增加网络参数且不改变训练，而直接修复推理时对齐因果性，因而在保持精度的同时减少删除与插入错误。在LibriSpeech测试集评估设置下， proposed因果交叉注意力解码器第6、5、4层的WER为3\.58%，低于Transformer基线解码器的WER 4\.76%。该结论适用边界受限于英文朗读语音语料与47M参数基线，尚未验证噪声、口语或跨语言外推性，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/openai/whisper/discussions/1059> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 103. [用电刺激逼近正常听觉神经响应：闭环耳蜗植入框架的概念验证](/posts/conference-eusipco-2026-conference-paper-id-0000281-ad8613b985/)

> 英文题目：*[END\-TO\-END CLOSED\-LOOP FRAMEWORK FOR COCHLEAR IMPLANT PROCESSING USING AUDITORY MODELS](/posts/conference-eusipco-2026-conference-paper-id-0000281-ad8613b985/)*

标签：#CNN #端到端学习 #语音 #音频修复

评分：**5.5/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.6/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频修复 | 主方法：#端到端学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000281.pdf)

👥 **作者与机构**

- Van Heghe, Julie：机构信息未能从会议 PDF 纯文本可靠映射
- Torfs, Guy：机构信息未能从会议 PDF 纯文本可靠映射
- Verhulst, Sarah：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

人工耳蜗需将同一声学输入转换为多电极脉冲驱动的螺旋神经节响应，电流沿耳蜗扩散与电诱发非线性使声电神经表征难以对齐。框架先以正常听力通路经基底膜振动、内毛细胞转导、突触与螺旋神经节神经元级联产生参考响应，为闭环提供生理目标。接着可学习刺激网络以双分支分别预测22电极归一化权重分布与全局电流幅度，经降采样对齐脉冲率后送入高斯电流扩散模型形成并行多电极激励。然后同一螺旋神经节模型将扩散后激励转为重建响应，两路包络经1ms最小池化平均绝对误差计算损失并反向传播只更新刺激网络，全部听觉模型参数冻结。与ACE严格交错单电极刺激以回避串扰不同，该方法把电流扩散显式建模进可微闭环，允许同时激活多电极以直接逼近参考神经包络。在5000条TIMIT独立测试集下，DNN\-CI闭环刺激的包络平均绝对误差指标为0\.0934，低于ACE基线的包络平均绝对误差指标0\.6261。该结论适用边界受限于干净英语朗读语音与8kHz以下带宽仿真，尚未验证噪声、多语种、音乐与主观可懂度外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 104. [既要对齐时间又要能重建细节：SyncStream 在隐空间统一判别与生成](/posts/conference-eusipco-2026-conference-paper-id-0000406-8facedfa15/)

> 英文题目：*[SYNCSTREAM: UNIFYING AUDIOVISUAL REPRESENTATION LEARNING AND GENERATIVE MODELING IN THE LATENT SPACE](/posts/conference-eusipco-2026-conference-paper-id-0000406-8facedfa15/)*

标签：#对比学习 #流匹配 #音视频 #音视频理解

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音视频理解 | 主方法：#流匹配

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000406.pdf)

👥 **作者与机构**

- Liang, Jinhua：机构信息未能从会议 PDF 纯文本可靠映射
- Braun, Sebastian：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

视听学习需同时处理同步音频流与完整视频流的语义对齐与细粒度重建，而仅做全局或静态帧对齐的方法常忽视跨模态时间同步，并以判别式掩码重建牺牲重建保真度。SyncStream先以冻结的模态特定变分自编码器将音频与视频分别压缩为紧凑潜序列，以去除原始信号冗余并保留全局上下文。接着潜对比掩码自编码器对该潜序列施加大比例掩码，以单向注意力做对比学习防止跨模态信息泄露，并以双向注意力经联合解码器重建被掩码潜嵌入以学习时间对齐表示。然后条件流匹配头以DiT参数化速度场建模条件分布，将联合解码器输出与噪声潜拼接精炼为连贯潜变量，再经模态特定VAE解码回原始域。与CAV\-MAE等静态帧输入与非对称编解码设计不同，该方法在潜空间统一判别式对比与生成式速度场建模，并以注意力方向隔离两种目标的信息流，具有更强的时间敏感性与重建表达力。在VGGSound测试集下，SyncStreamd=2的准确率为49\.14%，高于CAV\-MAE基线的准确率38\.40%。该结论适用边界受限于短片段分类与音频重建验证，尚未验证长时序合成、可控跨模态生成与视频重建量化，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 105. [不用改 vocoder 结构，只换条件特征：群延迟乘积谱能否替代梅尔谱](/posts/conference-eusipco-2026-conference-paper-id-0000481-182df31d98/)

> 英文题目：*[GROUP DELAY PRODUCT SPECTROGRAMS EMPLOYED AS CONDITIONING IN SPEECH SYNTHESIS](/posts/conference-eusipco-2026-conference-paper-id-0000481-182df31d98/)*

标签：#主观评测 #时频分析 #多语言 #语音 #语音合成

评分：**5.5/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音合成 | 主方法：#时频分析

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000481.pdf)

👥 **作者与机构**

- Sisamaki, Eirini：机构信息未能从会议 PDF 纯文本可靠映射
- Pantazis, Yannis：机构信息未能从会议 PDF 纯文本可靠映射
- Tsiaras, Vassilis：机构信息未能从会议 PDF 纯文本可靠映射
- Stylianou, Yannis：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作针对神经声码器（Neural Vocoder）只用幅度梅尔谱（Magnitude Mel\-Spectrogram）作条件而丢弃相位信息的问题，目标是验证联合幅度相位的群延迟积谱图（Group Delay Product Spectrogram）能否直接作为条件生成高质量语音。方法上先由短时傅里叶变换（Short\-Time Fourier Transform, STFT）计算功率谱与群延迟（Group Delay），经平滑因子 \(\\rho\) 相乘构造积谱（Product Spectrum），再经梅尔滤波压缩为与基线同帧移的二维条件，最后送入Clarinet声码器，以谱能量距离（Spectral Energy Distance）做无蒸馏稳定训练并合成22050 Hz波形。其机制差异在于条件本身已对齐共振峰处的功率峰与群延迟峰，理论上同时携带包络与激励线索。在英语LJSpeech上积谱条件（\(\\rho=10^\{\-6\}\)）平均意见分（Mean Opinion Score, MOS）为3\.22分，低于梅尔基线3\.87分；在希腊语4说话人集上为3\.95分，接近基线4\.13分。客观上积谱条件的梅尔倒谱失真（Mel Cepstral Distortion, MCD）高约1\.1\-1\.3 dB，F0周期性均方根误差（RMSE）希腊语略优、英语略劣。该结论仅适用于Clarinet单架构、朗读式英语单女声与希腊语4人数据，未验证HiFi\-GAN等当代架构、噪声混响与跨说话人外推。原文仅披露batch size为4的单卡GeForce RTX 2080训练，未披露优化器、学习率、步数、训练时长与推理延迟。

🔗 **开源资源**

- 数据相关资源：<https://stoma.iacm.forth.gr/database.html> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.sciencedirect.com/science/article/pii/016763939190011H> — 链接不可用（HTTP 403）
- 第三方资源：<https://doi.org/10.1609/aaai.v37i11.26479> → <https://ojs.aaai.org/index.php/AAAI/article/view/26479> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 106. [切分学习传不动 ViT：用注意力先并批再剪令牌的双重压缩](/posts/conference-eusipco-2026-conference-paper-id-0000821-ecf4a891e3/)

> 英文题目：*[SPMuS\-SS1\.4: COMMUNICATION EFFICIENT SPLIT LEARNING OF VITS WITH ATTENTION\-BASED DOUBLE COMPRESSION](/posts/conference-eusipco-2026-conference-paper-id-0000821-ecf4a891e3/)*

标签：#注意力机制 #模型压缩 #高效推理 #端侧运行 #音频分类

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.3/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分类 | 主方法：#模型压缩

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000821.pdf)

👥 **作者与机构**

- Alvetreti, Federico：机构信息未能从会议 PDF 纯文本可靠映射
- Pomponi, Jary：机构信息未能从会议 PDF 纯文本可靠映射
- Di Lorenzo, Paolo：机构信息未能从会议 PDF 纯文本可靠映射
- Scardapane, Simone：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

分割学习将视觉Transformer在第\(l\)层切开，客户端执行嵌入层与前\(l\)个块得到中间激活并连同标签上传，服务器执行剩余块与分类头并回传输入梯度，输入为图像批量与标签而输出为分类预测，高维令牌表示带来上下行通信瓶颈，而均匀降维或逐值稀疏会无差别丢弃语义重要信息。该工作提出基于注意力的双压缩，先对末端客户端块多头平均后的类令牌注意力分数做K均值聚类，并在簇内平均激活矩阵与独热标签得到更小的合并批量与软多标签，再复用簇质心作为重要性掩码做Top\-K共享令牌剪枝而只传输保留位置，服务器直接在小张量上前后向使回传梯度天然保持压缩形态。与瓶颈自编码器和随机稀疏化相比，关键差异是以语义相似性合并与注意力显著性剪枝代替统一降维或逐值阈值，无需额外可训练编解码器且无需在服务器侧解码回原始维度，因而在降低带宽的同时缩小服务器前后向规模。在DeiT\-T客户端计算量评测设置下，ADC的计算量指标开销为5\.1%，高于C3\-SL的计算量指标开销4\.0%。在CIFAR100与Food101任务上对DeiT\-T与DeiT\-S微调中，相同压缩比下精度带宽权衡更优，低压缩区接近基线而基线急剧退化，中等压缩区收敛更稳定而极端压缩下仍保持可用。适用边界为理想无损信道下的单客户端同分布图像分类微调，噪声无线信道与联邦多客户端协同等现实部署外推尚未验证。客户端因K均值聚类引入额外计算量，服务器侧计算量随压缩比大幅下降，整体训练成本受通信预算约束下的可执行迭代数决定。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 107. [复发结构能否并置音乐与抑郁脑电：以缺隙度与局部密度相似性做跨域比较](/posts/conference-eusipco-2026-conference-paper-id-0000941-f02e0c0a51/)

> 英文题目：*[MUSICAL AND NEUROLOGICAL PATTERNS OF RECURRENCE: AN APPLICATION TO MAJOR DEPRESSIVE DISORDER](/posts/conference-eusipco-2026-conference-paper-id-0000941-f02e0c0a51/)*

标签：#信号处理 #音乐 #脑信号 #音乐理解

评分：**5.5/10** | 创新 1.1/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 1.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.6/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音乐理解 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000941.pdf)

👥 **作者与机构**

- Mannone, Maria：机构信息未能从会议 PDF 纯文本可靠映射
- Ribino, Patrizia：机构信息未能从会议 PDF 纯文本可靠映射
- Fazio, Peppino：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为管弦乐曲首分钟旋律音程序列与任务态脑电额叶导联时间序列，输出为递归量化特征、缺隙度曲线与跨模态局部密度相似度，难点在于音乐与脑电尺度语义迥异却需统一的非线性动力学可比描述。方法链第一步由钢琴卷帘提取每帧主导音高并经去重差分得到音程序列，对脑电则裁剪时间窗并降采样以控制计算量，输出可比的一维序列进入递归分析。第二步以固定阈值构建递归矩阵并计算递归率、层流性与确定性等指标，同时计算缺隙度曲线以刻画多尺度异质性与聚集结构。第三步将递归图分块平均为密度矩阵并向量化，以最大二维互相关作为局部密度相似度，度量粗粒化聚集结构的相似程度。相对需逐点对齐的传统交叉递归做法，该相似度只比较粗粒化密度并允许空间平移，因而能揭示不对齐却结构相似的隐藏关联并提升计算效率。在额叶导联任务态脑电测试条件下，重性抑郁障碍被试的层流性指标为0\.42，高于正常对照的层流性指标0\.34。上述结论适用边界受限于仅两名明确标注被试、六个额叶导联与三首曲目开端，不支持向抑郁诊断与作曲家心境因果解释的外推。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://codeberg.org/medusamedusa/music> — 链接不可用（HTTP 404）
- 数据相关资源：<https://openneuro.org/datasets/ds003478/versions/1.1.0> — 链接可访问（HTTP 200）
- 数据相关资源：<https://openneuro.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.pik-potsdam.de/%E2%88%BCdonges/pyunicorn/> — 链接不可用（HTTP 404）
- 第三方资源：<https://github.com/ToBra> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.kunstderfuge.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 108. [高阶全通 warping 下 DCT 合成滤波器为何能用凸最小二乘做到完全重建](/posts/conference-eusipco-2026-conference-paper-id-0002756-8e63dab13c/)

> 英文题目：*[CONVEX DESIGN OF HIGHER ORDER ALLPASS TRANSFORMED DCT FILTER BANKS WITH PERFECT AND NEAR\-PERFECT RECONSTRUCTION](/posts/conference-eusipco-2026-conference-paper-id-0002756-8e63dab13c/)*

标签：#信号处理 #高效推理 #语音 #音频编码

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频编码 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002756.pdf)

👥 **作者与机构**

- Löllmann, Heinrich：机构信息未能从会议 PDF 纯文本可靠映射
- Kaup, André：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理非均匀DCT分析\-综合滤波器组的重建问题，输入为经高阶全通变换与过采样抽取的子带信号，输出为重建全带信号，难点在于全通引入的附加相位失真与混叠难以仅靠综合原型自由度同时消除。先用多相网络刻画加窗调制与全通链结构，将分析综合关系表示为线性周期时变系统的传输与混叠分量，为后续约束提供显式矩阵形式。接着把综合滤波器表示为余弦调制矩阵与有限冲激响应子滤波器系数向量的线性函数，使上一阶段的频域传输条件转化为关于系数向量的线性方程。然后在频点采样上构建混叠消除与线性传输矩阵方程，分别用无约束最小二乘求解完全重建或用混叠能量阈值约束求解近似完全重建，形成可全局求解的凸二次规划链条。与逐通道抽取加解析相位均衡器的已有方案相比，该机制将综合设计统一为凸优化并显式控制混叠能量与频率选择性折中，其实测意义在于保留多相高效实现的同时获得实值子带的听觉滤波器组。原文未提供可核对的关键定量结果。结论的适用边界仅限所展示的过采样扭曲配置，向临界采样、复调制或实时听觉系统的外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 109. [把谱质心压进全极点模型：用搬运代价对齐频移峰](/posts/conference-eusipco-2026-conference-paper-id-0002761-25642c9e91/)

> 英文题目：*[ALL\-POLE CENTROIDS IN THE WASSERSTEIN METRIC WITH APPLICATIONS TO CLUSTERING OF SPECTRAL DENSITIES](/posts/conference-eusipco-2026-conference-paper-id-0002761-25642c9e91/)*

标签：#信号处理 #语音学与音系 #语音 #音频分类

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频分类 | 主方法：#信号处理

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0002761.pdf)

👥 **作者与机构**

- Pallewela, Rumeshika：机构信息未能从会议 PDF 纯文本可靠映射
- Elvander, Filip：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务输入为多组零均值平稳高斯过程的归一化功率谱密度集合，输出为阶数受限的稳定全极点谱质心，作为该集合的自回归代表谱。难点在于共振峰发生小频移时算术平均会在原位叠加而模糊或分裂尖峰，而非参数最优传输重心随离散网格增大且不具紧凑模型解释。方法先将频率轴均匀离散并以熵正则最优传输代价定义谱间几何距离，用Gibbs核与对数域Sinkhorn迭代求解耦合与对偶势，经零和规范化得到对重心谱的可微梯度方向。再将重心约束到稳定自回归流形，用反射系数加tanh变换保证极点位于单位圆内，经Levinson\-Durbin递推与频率采样合成可微谱并归一化。进一步以非参数重心的逆离散傅里叶变换估计自协方差并解Yule\-Walker方程得到热启动，配合扰动与随机稳定多起点，用带Armijo线搜索的梯度下降最小化平均熵正则传输代价。与算术平均和KL散度相比，关键差异是先在谱域搬运能量对齐频移再投影到低阶自回归模型，因而兼顾移位鲁棒性与紧凑可解释性。在TIMIT五类音素最近质心分类任务下，KL散度的准确率为0\.7068，高于IS的准确率0\.6561。该结论适用边界受限于Burg谱特征与男性测试语音的最近质心协议，尚未验证跨语料、噪声与真实聚类指标下的外推。原文未披露训练、推理或部署成本

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 110. [低信噪比下声学无人机检测定位：覆盖保证与误差相关不确定性的互补权衡](/posts/conference-eusipco-2026-conference-paper-id-0000006-8452d10a71/)

> 英文题目：*[UNCERTAINTY QUANTIFICATION FOR ACOUSTIC\-BASED DRONE DETECTION AND LOCALIZATION UNDER ADVERSE NOISE CONDITIONS](/posts/conference-eusipco-2026-conference-paper-id-0000006-8452d10a71/)*

标签：#统计分析 #鲁棒性 #麦克风阵列 #音频分类 #声源定位

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.6/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#声源定位 | 主方法：#统计分析

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000006.pdf)

👥 **作者与机构**

- Çaylı, Özkan：机构信息未能从会议 PDF 纯文本可靠映射
- Xiao, Pei：机构信息未能从会议 PDF 纯文本可靠映射
- Wang, Wenwu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文面向8通道麦克风阵列采集的含噪短时音频，需同时完成DJI Mini对PRO4二分类与方位距离回归，难点在于低信噪比下信号被环境声淹没且点概率常虚高，导致精度与可信度同步退化。对数梅尔谱先经轻量卷积跨通道融合为紧凑时频表示，再送入结合全局自注意与局部卷积的Conformer块并池化为片段嵌入，为后续不确定性头提供共享输入。分类分支以该嵌入分别驱动共形预测与证据狄利克雷头，前者用校准集构造分布无关预测集，后者单次前向输出狄利克雷参数以分解认知与偶然不确定性，其置信与空虚度直接进入选择性预测与分布外判断。定位分支同样承接该嵌入并行比较异方差高斯、共形区间与正态逆伽马证据回归，分别输出输入相关方差、覆盖可控区间与位置后验分布，从而兼顾点精度与区间校准。在\-5 dB条件下，Conformal的准确率为0\.990，高于Evidential的准确率0\.957，定位上Plain场景异方差欧氏误差更低而共形覆盖仍保持名义水平，说明覆盖保证与误差相关性分属不同优势。纯白噪声异分布检验显示Plain训练模型仍输出0\.992最大概率与0\.015空虚度，暴露无背景类建模时拒识失效的失败条件，其适用边界受限于已知两类无人机与合成信噪比范围，尚未验证开放环境迁移，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 111. [只靠同曲更相似会学偏：用三种信号处理相似度把乐器相似表示拉回跨曲](/posts/conference-eusipco-2026-conference-paper-id-0000046-0c388a0d1b/)

> 英文题目：*[INCORPORATING SIGNAL PROCESSING\-BASED KNOWLEDGE FOR MUSIC SIMILARITY REPRESENTATION LEARNING BASED ON INDIVIDUAL INSTRUMENT SOUNDS](/posts/conference-eusipco-2026-conference-paper-id-0000046-0c388a0d1b/)*

标签：#对比学习 #信号处理 #预训练 #音乐 #音乐检索

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#音乐检索 | 主方法：#对比学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000046.pdf)

👥 **作者与机构**

- Imamura, Takehiro：机构信息未能从会议 PDF 纯文本可靠映射
- Hashizume, Yuka：机构信息未能从会议 PDF 纯文本可靠映射
- Huang, Wen\-Chin：机构信息未能从会议 PDF 纯文本可靠映射
- Toda, Tomoki：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

乐器级相似度学习需对鼓贝斯钢琴吉他等各声部独立输入混合或分离片段并输出跨曲相似嵌入，难点在于同曲内编曲混音与重复动机线索会让仅用轨内假设的模型难以泛化到跨曲音色节奏比较。首先并行计算全局平均音色、局部音色命中与波动节奏三种信号处理相似度，经最小最大归一化到\[0,1\]后求和融合成统一排序依据。接着以该排序在全异曲间构造锚正负三元组并与同曲轨内三元组按等比混合，用间隔三元组损失预训练各乐器嵌入提取器，使其同时吸收互补音色节奏线索。然后用少量高一致ABX人类偏好做感知微调，将嵌入空间对齐人耳判断，并以分离级联流程承接真实检索。与仅用轨内相似的训练相比，关键差异在于引入可解释信号处理知识定义跨曲正负关系而非仅靠同曲假设，因而平衡了嵌入空间并对分离伪影更鲁棒。在Slakh乐器相似度评测任务下，学习型方法在分离场景的平均感知一致率指标为72\.14，高于清洁场景的平均感知一致率指标71\.84。该结论适用边界受限于Slakh合成混合与特定分离流程及有限ABX协议，尚未验证真实商业录音与大规模检索，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 112. [不传原始波形：用物理先验的隐编码在带宽受限下估计声场](/posts/conference-eusipco-2026-conference-paper-id-0000121-33065f1743/)

> 英文题目：*[PHYSICS\-INFORMED CODING FOR SOUND FIELD ESTIMATION IN WIRELESS ACOUSTIC SENSOR NETWORKS](/posts/conference-eusipco-2026-conference-paper-id-0000121-33065f1743/)*

标签：#向量量化 #麦克风阵列 #空间音频信号 #声场重建

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.6/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#声场重建 | 主方法：#向量量化

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000121.pdf)

👥 **作者与机构**

- Blochberger, Matthias：机构信息未能从会议 PDF 纯文本可靠映射
- Østergaard, Jan：机构信息未能从会议 PDF 纯文本可靠映射
- Elvander, Filip：机构信息未能从会议 PDF 纯文本可靠映射
- Moonen, Marc：机构信息未能从会议 PDF 纯文本可靠映射
- van Waterschoot, Toon：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

无线声学传感器网络需在无源感兴趣区内由稀疏带噪麦克风观测重建任意位置声压，难点是亥姆霍兹物理约束与节点间通信预算相互耦合。离线阶段由代表性声场经平面波或边界元亥姆霍兹一致特征算子学习全局潜先验矩阵，确定物理映射维度与正则化解码器。在线阶段各节点用自身编码行将本地复频域测量投影为潜贡献，经分布式平均得到全局潜和后由解码器重建估计点声场。量化方差经线性耦合矩阵映射到估计误差，再由几何规划求每频率方差并以反向注水在频率与模态间分配失真，输出量化步长供节点量化交换。与回传原始波形相比，该方法只交换可加模态坐标而非波形，从而与拓扑解耦并按估计敏感度分配比特。在40节点与80估计点的混响房间仿真评测设置下，高噪声条件的信噪比指标为\-11\.5 dB，低于低噪声条件的信噪比指标28\.5 dB。该结论适用边界受限于单单极子白谱源与单房间仿真，尚未验证多源与强混响下的外推能力，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 113. [大规模与噪声下还要控准基频：VAE\-SiFiGAN 用重合成误差筛掉 F0 提取错误](/posts/conference-eusipco-2026-conference-paper-id-0000466-ef24616a65/)

> 英文题目：*[EVALUATING VAE\-SIFIGAN UNDER LARGE\-SCALE TRAINING AND NOISY CONDITIONS WITH DATA SELECTION USING F0 EXTRACTION ERROR ESTIMATION](/posts/conference-eusipco-2026-conference-paper-id-0000466-ef24616a65/)*

标签：#数据清洗 #变分自编码器 #鲁棒性 #语音 #语音合成

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#语音合成 | 主方法：#变分自编码器

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000466.pdf)

👥 **作者与机构**

- Ogita, Kenichi：机构信息未能从会议 PDF 纯文本可靠映射
- Yoneyama, Reo：机构信息未能从会议 PDF 纯文本可靠映射
- Huang, Wen\-Chin：机构信息未能从会议 PDF 纯文本可靠映射
- Toda, Tomoki：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是以梅尔频谱图与外部给定基频序列为输入、合成可按比例变调的波形，输出需保持清浊与谐波正确，实际难点在于大规模多说话人数据中半频倍频与清浊误判会污染条件，且残留于隐变量的基频线索会与外部基频冲突。方法链分四步：先用Harvest提取基频并在全量未清洗数据上预训练变分自编码器源滤波器HiFi\-GAN，其重合成输出进入下一步；再按原提取基频重合成并计算自然与重合成梅尔谱的帧级L1误差序列；接着由均方根误差、误差标准差、高误差帧占比与最大连续高误差长度排序并人工定阈值剔除可疑片段；最后在清洗后大规模数据上重训并评测变调控制与加噪恢复。与确定性源滤波器HiFi\-GAN的关键机制差异在于以后验编码器学习随机隐变量并用先验编码器正则化去除基频，使推理仅需梅尔谱即可建模随机波动并降低对含噪特征提取的依赖。在噪声鲁棒性评测任务下，VAE\-SiFiGAN的STOI为0\.90，高于SiFi\-GAN的STOI 0\.87。结论适用边界是上变调清浊判决有改善而下变调与高基频外推仍退化，且清洗阈值依赖人工检查而受限。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 114. [只看标签会看错位置：用空间监督把分类依据拉回事件 footprint](/posts/conference-eusipco-2026-conference-paper-id-0000696-b8ef47e23d/)

> 英文题目：*[CAM\-GUIDED MULTILABEL DEEP LEARNING FOR SPATIOTEMPORAL EVENT LOCALIZATION IN DISTRIBUTED ACOUSTIC SENSING OF WATER PIPELINES](/posts/conference-eusipco-2026-conference-paper-id-0000696-b8ef47e23d/)*

标签：#CNN #多任务学习 #可解释性 #联合声音事件检测定位

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#联合声音事件检测定位 | 主方法：#多任务学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000696.pdf)

👥 **作者与机构**

- Cabrera Sánchez, Jorge：机构信息未能从会议 PDF 纯文本可靠映射
- Salces Ortiz, David：机构信息未能从会议 PDF 纯文本可靠映射
- Sanz Latorre, Javier：机构信息未能从会议 PDF 纯文本可靠映射
- Romero Cortés, Luis：机构信息未能从会议 PDF 纯文本可靠映射
- Colomer, Adrian：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

埋地供水管网分布式声学传感需从连续距离—时间相位信号同时判定多类事件是否出现并标定其时空足迹，难点在于仅用图像级标签训练的卷积网络易借助背景相关获得高分类分，而激活区偏离真实扰动位置。方法先按短时窗计算相位时域标准差生成256×512距离—时间伪彩图，再以水平拉长卷积核与各向异性下采样改造VGG16与ResNet34以适配各向异性事件结构。接着从末层卷积以Grad\-CAM\+\+计算类激活图并上采样归一化，用像素级二元交叉熵将其与二值掩膜对齐，再与多标签二元交叉熵分类损失加权联合训练，推理时直接由类激活图输出热图而无需分割解码器。与仅用图像级标签的方法相比，关键机制差异在于强制分类依据的特征激活与物理扰动足迹重合，从而将注意力从偶然相关转向真实事件区并保留可解释定位。在实测埋地管道测试集下，HK ResNet34L的mAP@0\.5为0\.462 ± 0\.042，高于HK ResNet34LBCE的mAP@0\.5 0\.000 ± 0\.000。该结论适用边界仅限同一场地、同一水力与埋设条件的五类实测事件，跨管材、跨土质与长期漂移等外推尚未验证。训练硬件为NVIDIA RTX 4070 Super GPU并采用批量32与早停等设置，原文未报告推理开销与部署延迟，空间权重取值的完整敏感性受限。

🔗 **开源资源**

- 第三方资源：<https://www.artikode.com/es/pixnormous/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 115. [活动范围已知时，把导向矢量更新压进低维子空间做半盲分离](/posts/conference-eusipco-2026-conference-paper-id-0001217-fa81fbe225/)

> 英文题目：*[SUBSPACE\-CONSTRAINED ITERATIVE SOURCE STEERING FOR MULTICHANNEL SOURCE SEPARATION](/posts/conference-eusipco-2026-conference-paper-id-0001217-fa81fbe225/)*

标签：#自适应滤波 #麦克风阵列 #语音 #语音分离

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#语音分离 | 主方法：#自适应滤波

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001217.pdf)

👥 **作者与机构**

- Takeuchi, Yutsuki：机构信息未能从会议 PDF 纯文本可靠映射
- Nakashima, Taishi：机构信息未能从会议 PDF 纯文本可靠映射
- Ono, Nobutaka：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理超定（\(M \\ge K\)）阵列下的半盲语音分离，输入为多通道短时傅里叶变换观测\(x\_\{fn\}\)与限定活动范围内的预测导向矢量，输出为分离信号\(y\_\{fn\}\)与解混矩阵\(W\_f\)，难点在于混响与位置偏移下逐频点直接估计\(M\)维导向矢量自由度过高而难以稳健收敛。方法先在100点网格预测导向矢量上做样本二阶矩特征分解，得到低维子空间基\(U\_\{kf\}\)并将未知导向矢量近似为线性组合\(U\_\{kf\}p\_\{kf\}\)。接着把该表示嵌入混合矩阵更新\(\\tilde\{A\}\_f \\leftarrow \\tilde\{A\}\_f\+U\_\{kf\}p\_\{kf\}e\_k^H\)，借助Sherman\-Morrison公式转化为解混矩阵秩1修正以保持与迭代源转向框架相容。然后经矩阵行列式引理与重参数化\(q\_\{kf\}\)推导系数\(p\_\{kf\}\)闭式最优解，并在分离迭代中交替更新Laplace源模型辅助变量\(V\_\{mf\}\)与\(W\_f\)，其中前\(K\)通道用子空间约束更新而剩余通道沿用标准迭代源转向更新。与直接估计全维导向矢量的盲更新相比，该机制把估计维度从\(M\)压缩到\(D\)并注入位置先验，因而在小范围偏移下更稳健且可按频率灵活选择维度以保留语音谐波结构。在混响时间150ms或300ms且声源含小移动与大移动及随机放置的仿真会议场景评测条件下，灵活变维度方案在失真比改善与字错率指标上被描述为优于标准迭代源转向与均值导向矢量波束成形器，但原文未提供可核对的关键定量结果。该结论适用边界受限于仿真房间、已知移动范围与50次离线批量迭代，大偏移、真实房间与阵列误差下的外推尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 116. [不用重建声音：用两层可训练多分辨率网络直接在特征空间圈住正常机器声](/posts/conference-eusipco-2026-conference-paper-id-0000246-800f341daa/)

> 英文题目：*[MULTIRESOLUTION NEURAL NETWORK FOR ONE\-CLASS LEARNING OF MACHINE SOUNDS](/posts/conference-eusipco-2026-conference-paper-id-0000246-800f341daa/)*

标签：#工业应用 #注意力机制 #CNN #异常声音检测

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.6/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#异常声音检测 | 主方法：#CNN

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000246.pdf)

👥 **作者与机构**

- Zhang, Xiran：机构信息未能从会议 PDF 纯文本可靠映射
- Lostanlen, Vincent：机构信息未能从会议 PDF 纯文本可靠映射
- Lagrange, Mathieu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

异常声音检测以原始波形为输入，输出正常与异常的二值判断分数，难点在于仅用正常样本训练且需同时抵抗背景噪声并捕捉谱时调制异常。本文方法先以非下采样对偶树复小波变换将波形分解到多尺度，再在各尺度上以共享实虚部的扩张卷积学习调制滤波并经取模与低通聚合得到一阶表示。随后该表示经时间自注意力增强后送入第二层MuReNN建模通道内时间演化，并以可学习幂变换压缩动态范围，最终经池化拼接与通道注意力送入深支撑向量数据描述超球面学习。与依赖重构的DeSpaWN不同，本工作完全在特征空间判别而无需逆变换解码器，保留了小波先验的可解释多分辨率结构。在MIMII基准下，本文方法的AUC\-ROC得分为90\.3%，高于DeSpaWN的AUC\-ROC得分88\.6%。然而该结论适用边界受限于噪声水平，在负6dB强噪声条件下本文方法优势消失，说明重构去噪机制在严重噪声下更具鲁棒性，尚未验证向其他机器类型与噪声域外推的效果。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 117. [缺测房间脉冲响应还能做波束形成吗：扩散修复补齐阵列的可用性检验](/posts/conference-eusipco-2026-conference-paper-id-0001222-50b4fe28a5/)

> 英文题目：*[ON THE USEFULNESS OF DIFFUSION\-BASED ROOM IMPULSE RESPONSE INTERPOLATION TO MICROPHONE ARRAY PROCESSING](/posts/conference-eusipco-2026-conference-paper-id-0001222-50b4fe28a5/)*

标签：#波束成形 #扩散模型 #麦克风阵列 #房间脉冲响应估计 #语音增强

评分：**5.3/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#房间脉冲响应估计 | 主方法：#扩散模型

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001222.pdf)

👥 **作者与机构**

- Della Torre, Sagi：机构信息未能从会议 PDF 纯文本可靠映射
- Pezzoli, Mirco：机构信息未能从会议 PDF 纯文本可靠映射
- Antonacci, Fabio：机构信息未能从会议 PDF 纯文本可靠映射
- Gannot, Sharon：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为16元线阵中仅部分测得的房间脉冲响应与全部麦克风采集的含噪语音，输出为补全后的完整脉冲响应矩阵及增强后的目标语音，难点在于密集实测成本过高而仅靠到达方向或相对传递函数难以同时实现空域滤波与解混响。方法先将截断至2048点的脉冲响应矩阵重排为灰度图像并以按列二值掩膜锁定已知通道，仅在缺失列上估计。再以去噪扩散概率模型经重绘策略对64×64重叠归一化图像块迭代去噪并拼回时域矩阵，保持时空一致性。最后由补全响应经傅里叶变换构造导向矢量，结合噪声协方差求解最小方差无失真响应权重并作用于实测多通道信号实现增强，与仅保留混响或合成虚拟麦克风的做法不同，该路线直接恢复完整声学传递函数因而可同时抑制干扰并做解混响。在定向噪声场景下，Inpainted的SI\-SDR为8\.8，高于Missing的SI\-SDR 6\.0。在MeshRIR真实三维网格数据上重建仍优于样条三次插值基线，但高缺失率与测点集中于阵列一侧时对齐误差显著增大，其适用边界受限于缺失几何与混响失配，跨房间与大规模阵列外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/openai/guided-diffusion> — 链接可访问（HTTP 200）
- 第三方资源：<https://pyroomacoustics.readthedocs.io/en/pypi-release/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.audiolabs-erlangen.de/fau/professor/habets/software/> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 118. [只学风声、不学兽鸣：用脉冲网络把长时生物声学录音先筛一遍](/posts/conference-eusipco-2026-conference-paper-id-0001117-3d9c775ec1/)

> 英文题目：*[SPIKE BASED APPROACH FOR ANOMALY LOCALIZATION IN LENGTHY BIOACOUSTIC RECORDINGS](/posts/conference-eusipco-2026-conference-paper-id-0001117-3d9c775ec1/)*

标签：#生物声学监测 #无监督学习 #长音频处理 #异常声音检测

评分：**5.2/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#异常声音检测 | 主方法：#无监督学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001117.pdf)

👥 **作者与机构**

- Raveendranathan, Sarangan：机构信息未能从会议 PDF 纯文本可靠映射
- Samarasinghe, Prasanga N\.：机构信息未能从会议 PDF 纯文本可靠映射
- Abhayapala, Thushara D\.：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

长被动声学监测以小时级连续波形为输入，需输出稀疏动物发声区间的起止位置以供复听，难点在于目标稀疏且风雨车声等背景持续漂移、物种无法预定义。第一步经64通道伽马通变换与速率编码将波形幅度转为脉冲发放概率，形成时序脉冲序列输入两层泄漏积分发放神经元。第二步以突触时序可塑性在风噪声上学习背景表示，再经转置权重重构并结合重构误差、潜变量偏离与放电总数z分数加权得到帧级异常分。第三步依据稳态自适应阈值抑制持续强风雨等缓慢漂移，并以99%与97%双阈值迟滞合并1秒内碎片再扩张为候选区间。相对同数据训练的卷积自编码器重构与能量检测，该脉冲时序累积加阈值缓慢漂移机制更敏感于短促间歇放电而非持续能量，因而在低信噪比下仍能保留事件。在合成数据\-10 dB条件下，SNN的Recall指标为0\.5820，高于CNN\-AE的Recall指标0\.0000。该结论适用边界限于单类风训练与稀疏短事件，对密集短促事件与持续强噪声下文件级自适应阈值的稳定性尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 119. [欠定下不失真分离：把时频掩蔽写进切换波束形成器的代价函数](/posts/conference-eusipco-2026-conference-paper-id-0001202-a86630f706/)

> 英文题目：*[INTRODUCTION OF TIME\-FREQUENCY MASKING TO SWITCHING BEAMFORMERS FOR DISTORTIONLESS BLIND SOURCE SEPARATION IN UNDERDETERMINED SITUATIONS](/posts/conference-eusipco-2026-conference-paper-id-0001202-a86630f706/)*

标签：#波束成形 #时频分析 #麦克风阵列 #语音 #语音分离

评分：**5.2/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#语音分离 | 主方法：#波束成形

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001202.pdf)

👥 **作者与机构**

- Nakane, Atsuhisa：机构信息未能从会议 PDF 纯文本可靠映射
- Yamaoka, Kouei：机构信息未能从会议 PDF 纯文本可靠映射
- Takamune, Norihiro：机构信息未能从会议 PDF 纯文本可靠映射
- Saruwatari, Hiroshi：机构信息未能从会议 PDF 纯文本可靠映射
- Kitamura, Daichi：机构信息未能从会议 PDF 纯文本可靠映射
- Ikeshita, Rintaro：机构信息未能从会议 PDF 纯文本可靠映射
- Nakatani, Tomohiro：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

欠定盲语音分离的输入是麦克风数少于声源数的混响混合短时傅里叶变换观测，输出是各目标语音在参考麦克风处的无失真估计，难点是单波束成形器自由度不足且最小方差无失真响应所需的噪声空间协方差矩阵不可直接获得。该方法先用复角中心高斯混合模型无监督估计满足非负与和为1约束的实值时频掩码，再由掩码加权估计各源空间协方差矩阵并经协方差白化得到相对传递函数，同时以互补最小方差无失真响应滤波器初始化多分支结构。随后交替优化时频组合系数、分支滤波器与掩码，使掩码估计噪声能量最小并满足无失真约束，最终由分支输出的线性组合得到分离谱。与切换型最小功率无失真响应相比，关键差别是以噪声掩码与观测相乘得到的估计噪声代替观测本身，使目标函数具备最小方差形态，掩码均匀时退化为传统形式，理论上对相对传递函数误差更鲁棒。在2麦克风3说话人与2麦克风4说话人混响分离任务评测条件下，所提三变体在源到失真比提升指标上的完整可核对数值对比缺失，原文未提供可核对的关键定量结果。其适用边界是依赖掩码质量与目标是否位于干扰之间，外侧目标优于被干扰夹击的内侧目标，高质量掩码时提升更大，尚未验证oracle掩码之外的外推范围。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 120. [只定位一次之后直接听麦克风：点神经元嵌入卡尔曼滤波做窄带混响跟踪](/posts/conference-eusipco-2026-conference-paper-id-0000016-af25d9db97/)

> 英文题目：*[POINT NEURON EMBEDDED KALMAN FILTER FOR NARROWBAND SOUND SOURCE TRACKING](/posts/conference-eusipco-2026-conference-paper-id-0000016-af25d9db97/)*

标签：#状态空间模型 #麦克风阵列 #声源定位 #声源追踪

评分：**5.1/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#声源追踪 | 主方法：#状态空间模型

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000016.pdf)

👥 **作者与机构**

- Vinod, Vishwanath：机构信息未能从会议 PDF 纯文本可靠映射
- Xu, Shaoheng：机构信息未能从会议 PDF 纯文本可靠映射
- Samarasinghe, Prasanga N\.：机构信息未能从会议 PDF 纯文本可靠映射
- Bastine, Amy：机构信息未能从会议 PDF 纯文本可靠映射
- Abhayapala, Thushara D\.：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

窄带声源追踪的输入为混响房间内多麦克风记录的窄带声压，输出为声源三维位置随时间的连续轨迹，难点在于单频信息有限、镜像源干扰强且逐帧网格定位会引入失配误差。该工作提出点神经元嵌入卡尔曼滤波，先以初始定位估计放置声源点神经元并求解权重，输入首帧声压、输出初始声源位置与权重以确定起点。上一帧位置与速度输入恒速线性模型外推声源与虚源状态，并经点神经元前向模型合成预测声压，实现状态预测到量测预测的传递。预测声压与实测声压输入卡尔曼更新以修正声源点神经元位置并由前后位置差分得到速度，反向传播再以声场重建误差优化混响点神经元权重与位置并进入下一帧。在Q=95个传声器、T=500帧的单声源基准条件下，PNEKF的跟踪误差指标维持近零，低于TDOA\-MMKF基线的跟踪误差指标。与每帧依赖网格定位的基线相比，关键差异在于定位仅用一次、后续直接同化原始声压并在连续域跟踪，同时以边界点神经元显式吸收混响，从而避免网格失配并保持对反射的鲁棒性。结论的适用边界受限于矩形房间图像源法仿真、单频窄带源与已知源数的受控条件，尚未验证宽带、未知源数与真实房间下的外推能力。原文未提供可核对的关键定量结果。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 121. [只用语音活动判断和谁在交谈：多人轮替如何变成可计算的对齐分数](/posts/conference-eusipco-2026-conference-paper-id-0000361-644eb7412d/)

> 英文题目：*[GENERALIZED TURN\-TAKING–BASED CONVERSATIONAL PARTNER IDENTIFICATION IN MULTI\-TALKER SCENARIOS USING VOICE ACTIVITY](/posts/conference-eusipco-2026-conference-paper-id-0000361-644eb7412d/)*

标签：#助听器 #统计分析 #说话人识别 #轮次切换

评分：**5.1/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#说话人识别 | 主方法：#统计分析

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000361.pdf)

👥 **作者与机构**

- Eslami, Leila：机构信息未能从会议 PDF 纯文本可靠映射
- Mosgaard, Lars Dalskov：机构信息未能从会议 PDF 纯文本可靠映射
- Jensen, Jesper Rindom：机构信息未能从会议 PDF 纯文本可靠映射
- Adesokan, Bolaji：机构信息未能从会议 PDF 纯文本可靠映射
- Petersen, Eline Borch：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理多说话人共址场景下基于语音活动的会话伙伴识别，输入为助听器用户与周围各说话人的二值语音活动流，输出为与用户同组伙伴集合，难点在于波束成形与定位无法判断交互意图且群组轮次需高阶协调刻画。该方法先枚举包含用户的全部候选群组并用会话对齐分数CAS量化群内轮次协调，其成对差平方与多人同时激活惩罚项由各时刻联合语音活动状态计算得到。接着在充分观测积分窗口内统计CAS并分别用Beta\-Binomial拟合伙伴组与竞争组分布，上一阶段所得分数直方图进入本阶段参数估计。然后在均匀先验与条件独立假设下计算各候选假设后验并取最大者为识别结果，分布似然直接决定后验排序。与逐对打分再取前M\-1的BMOG\-IR及合并组内活动再打分的BMOG\-GE不同，新分数显式保留组内重叠信息从而刻画群级动态。在真实2、3、4人会话评测条件下，所提MT\-BMOG在2人任务的平均识别准确率为97\.1%，高于3人任务的平均识别准确率90\.1%。该结论适用边界受限于需足够长观测使每位说话人均有充分发言，大群组重叠增多时分布分离度下降且对分离与VAD误差尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 122. [浊擦音难分时，比值特征为何能拉开齿音与齿龈音的距离](/posts/conference-eusipco-2026-conference-paper-id-0000456-67dbbe2583/)

> 英文题目：*[FEATURE SELECTION FOR PLACE OF ARTICULATION CLASSIFICATION IN VOICED FRICATIVES PRODUCED BY POLISH CHILDREN](/posts/conference-eusipco-2026-conference-paper-id-0000456-67dbbe2583/)*

标签：#统计分析 #语音学与音系 #言语障碍 #语音 #病理语音评估

评分：**5.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.6/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#病理语音评估 | 主方法：#统计分析

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000456.pdf)

👥 **作者与机构**

- Skórzewska, Oliwia：机构信息未能从会议 PDF 纯文本可靠映射
- Filipek, Maria：机构信息未能从会议 PDF 纯文本可靠映射
- Pieniążek, Wojciech：机构信息未能从会议 PDF 纯文本可靠映射
- Miodońska, Zuzanna：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究处理波兰学龄前儿童浊卷舌擦音/ʐ/的构音位置二分类，输入为图片命名录音中目标音段中央稳态帧，输出为肺泡音正常与齿音病理的说话人级标签，难点在于浊音周期成分掩盖摩擦噪声、位置线索弱且病理28例对正常119例高度不平衡。方法链首先按20ms帧长10ms交叠分帧并仅保留每对说话人与词中央50%帧以抑制协同构音，前一步输出的稳态帧进入声学特征提取得到127维帧级特征，涵盖梅尔倒谱系数、谱描述子、摩擦噪声特征及谱描述子两两比值。冗余特征向量接着进入特征选择，对比无选择基线与费舍尔判别、最小绝对收缩选择算子、互信息及Mann\-Whitney U筛选，筛选子集再输入按4\.25比1惩罚假阴性的代价敏感径向基支持向量机，调参与约简在轮换优化折完成并在剩余折做留一说话人交叉验证。相对以往仅用倒谱与摩擦噪声绝对能量的方法，新机制以谱峰度与滚降点比值等相对比值刻画谱形状差异而非绝对能量，因而对浊音干扰更稳健并增强类间可分性。在147名儿童语料留一说话人交叉验证任务下，MFCC\+S\+SR配合LASSO的灵敏度指标为0\.72，高于ALL配合FLDA的灵敏度指标0\.71。该结论适用边界受限于受控近距离采集的单音素二分类任务，尚未验证跨音素跨语言与连续自然语音的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 123. [麦克风很少、鸟声很多时：用子带频谱特征把时延分给各自声源](/posts/conference-eusipco-2026-conference-paper-id-0000001-5cd8f9667d/)

> 英文题目：*[LOCALIZING MULTIPLE SOUND SOURCES BY ASSOCIATING SUB\-BAND TDOA FEATURES FOR BIODIVERSITY MONITORING](/posts/conference-eusipco-2026-conference-paper-id-0000001-5cd8f9667d/)*

标签：#生物声学监测 #时频分析 #麦克风阵列 #声源定位

评分：**5.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#声源定位 | 主方法：#时频分析

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000001.pdf)

👥 **作者与机构**

- Jaramillo\-Rodriguez, Manuel Alejandro：机构信息未能从会议 PDF 纯文本可靠映射
- Ali, Randall：机构信息未能从会议 PDF 纯文本可靠映射
- van Waterschoot, Toon：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为已知位置且同步的M个单通道野外录音单元采集的混合声，输出为同时发声的多个声源二维位置，难点在于每对麦克风可估计多个到达时间差但跨对同源对应未知，且野外部署麦克风稀疏使几何约束不足易产生伪源交点。方法首先在短时傅里叶变换域按固定带宽子带区域计算相位归一化广义互相关并取峰得到局部到达时间差，再将连续T帧全部子带的估计累积为直方图并用匹配追踪提取每对S个候选源到达时间差。接着统计各子带局部估计落入以候选值为中心、宽度W邻域内的贡献计数，构成N维谱特征向量，其输出直接作为跨对关联的输入，并以跨对余弦相似度与阈值β做阈值筛选与迭代合并分组，使同组候选对应同一物理源。然后在每个关联组内独立求解单源非线性最小二乘交会得到源位置，从而将多源定位分解为多个单源问题。与依赖空间离散化延迟密度图或仅靠几何代价的多维分配方法不同，该机制用谱时分布相似性补偿空间多样性不足，因而在少麦克风条件下仍可消解伪源。在包含S为2、4和8个同时发声源的仿真评测场景下，高噪声条件的噪声功率指标为60dB，高于低噪声条件的噪声功率指标40dB。该结论适用边界受限于已知源数、二维同步仿真、无实测混响与合成噪声条件，同谱重叠与近时差源仍是失败条件，野外大规模部署尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 124. [要在全频段共用同一批传声器：联合稀疏 OLS 如何挑位置又保波束](/posts/conference-eusipco-2026-conference-paper-id-0000111-afee4b3a79/)

> 英文题目：*[JOINT\-SPARSE OLS MICROPHONE ARRAY DESIGN FOR FREQUENCY\-INVARIANT BEAMFORMING](/posts/conference-eusipco-2026-conference-paper-id-0000111-afee4b3a79/)*

标签：#波束成形 #空间音频 #麦克风阵列 #语音增强

评分：**5.0/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#语音增强 | 主方法：#波束成形

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000111.pdf)

👥 **作者与机构**

- Buchris, Yaakov：机构信息未能从会议 PDF 纯文本可靠映射
- Amar, Alon：机构信息未能从会议 PDF 纯文本可靠映射
- Cohen, Israel：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文针对宽带频率不变波束成形的稀疏阵列设计，输入为\(M\)个候选位置在\(J\)个频点上的导向字典与期望频率不变方向图，输出为跨全频带共享支撑的稀疏索引集及其各频点频变权向量，难点是高频需密排与低频需大孔径的矛盾需求及白噪声增益与无失真响应约束的耦合。首先以对角掩模矩阵抑制已选元邻域重复选择，其权重直接进入后续选择代价以控制孔径与密度。然后对已选集并上每个候选元求伪逆最小二乘拟合，得到多频拟合残差并经补投影计算加权残差和准则以评估新增原子收益。接着用秩一递归由上一轮补投影高效更新当前补投影，选出最优元后对降维支撑求解约束波束成形问题校验失真响应与主旁瓣误差是否停止，上一轮输出即为下一轮输入。在方位离散为\(2^\{\\circ\}\)的评测设置下，主瓣下边界的角度指标为\(\-60^\{\\circ\}\)，低于主瓣上边界的角度指标\(60^\{\\circ\}\)。与逐频正交最小二乘的关键差异是强制全频共享同一支撑并在每次评估时做包含已选集的完全正交投影，与前期联合稀疏正交匹配追踪的关键差异是以最小二乘残差下降代替单步相关匹配做选择，因而更贴合全频拟合误差并保持旋转不变布局。就加权残差之外的波束性能而言，原文未提供可核对的关键定量结果。该结论的适用边界受限于同心圆差分阵几何、三阶超心形期望方向图与\(2^\{\\circ\}\)方位离散等特定设置，尚未验证跨孔径、跨转向角与阵元失配下的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 125. [不加参数的融合为什么能抗住坏掉的音频：联合加权平均的可靠性与显著性分工](/posts/conference-eusipco-2026-conference-paper-id-0001522-fc2ee3e56d/)

> 英文题目：*[JOINT WEIGHTED AVERAGE FUSION METHOD FOR ROBUST MULTIMODAL \(AUDIO VIDEO\) DEPRESSION DETECTION](/posts/conference-eusipco-2026-conference-paper-id-0001522-fc2ee3e56d/)*

标签：#多模态学习 #鲁棒性 #音视频 #病理语音评估

评分：**5.0/10** | 创新 1.1/2 | 技术严谨 0.9/1.5 | 实验充分 0.9/1.5 | 清晰度 0.6/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.7/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#病理语音评估 | 主方法：#多模态学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001522.pdf)

👥 **作者与机构**

- Andini, Dianthika Puteri：机构信息未能从会议 PDF 纯文本可靠映射
- Naqvi, Syed Mohsen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为访谈场景下的同步语音与面部视频，输出为二分类抑郁标签与连续 Beck抑郁量表（Beck Depression Inventory, BDI\-II）分数，难点在于双模态可靠性随噪声、遮挡和被试差异而异质变化。首先用 openSMILE按 eGeMAPS配置提取音频韵律与频谱特征，用 OpenFace提取动作单元、注视与头姿视频特征，经标准化、对齐与定长窗口切分后拼接为多模态向量。接着由信噪比、语音活动与人脸检测成功率等信号质量指标估计模态可靠性并扩展为线性加权平均（Linear Weighted Average, LWA）权重，同时对特征幅值排序并赋予有序加权平均（Ordered Weighted Averaging, OWA）显著性权重。然后将两组权重按排序对齐后逐元相乘并做L1归一化，得到联合加权平均（Joint Weighted Average, JWA）向量并送入固定两层多层感知机（Multilayer Perceptron, MLP）完成分类或回归。与隐式端到端融合不同，该方法不增加可学习融合参数而显式解耦可靠性与显著性。在 AVEC2014上固定 MLP设置下取得分类准确率85\.7%与AUC 0\.88，回归均方根误差（Root Mean Square Error, RMSE）为8\.1，优于早期融合、晚期融合与梯度调制融合基线。结论仅在该数据集与受控白噪声退化音频条件下验证，未验证跨库、真实噪声、缺失模态与重度遮挡的外推能力。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.who.int/news-room/fact-sheets/detail/depression> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 126. [长脉冲响应拆成两个短滤波器：RLS\-NKP 如何用两个可变遗忘因子兼顾精度与跟踪](/posts/conference-eusipco-2026-conference-paper-id-0000196-8d3902dbd7/)

> 英文题目：*[AN RLS ALGORITHM USING IMPULSE RESPONSE DECOMPOSITION AND VARIABLE FORGETTING FACTORS](/posts/conference-eusipco-2026-conference-paper-id-0000196-8d3902dbd7/)*

标签：#自适应滤波 #语音 #回声消除

评分：**4.8/10** | 创新 1.0/2 | 技术严谨 0.8/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#回声消除 | 主方法：#自适应滤波

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000196.pdf)

👥 **作者与机构**

- Otopeleanu, Radu Andrei：机构信息未能从会议 PDF 纯文本可靠映射
- Paleologu, Constantin：机构信息未能从会议 PDF 纯文本可靠映射
- Benesty, Jacob：机构信息未能从会议 PDF 纯文本可靠映射
- Stanciu, Cristian\-Lucian：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入是远端参考语音经长回声路径与加性噪声形成的期望信号，输出是对数百至上千抽头脉冲响应的在线估计，难点在于常规递归最小二乘参数空间庞大导致计算沉重且精度与跟踪难以兼顾。方法链分三步：先将长响应重排为矩阵并用最近克罗内克积近似为P组短滤波器的克罗内克和，使参数量大幅压缩，为双线性优化提供结构，前一步的分解结构直接决定后两步的输入维度。接着基于双线性最小二乘推导基本型RLS\-NKP更新，将遗忘因子显式保留在协方差递推中，输出的先验误差与卡尔曼增益进入可变因子推导。最后令后验误差功率等于噪声功率并引入输入白化与对角近似，解出共用时变参数并映射为两个可变遗忘因子。与固定遗忘因子RLS\-NKP的关键差异是遗忘强度随误差功率比自动调节，稳态时趋近于1保证精度，突变时减小以加速跟踪，无需额外门限控制。在声学回声消除评测设置下，图2\(c\)场景条件的ENR指标为15dB，高于图2\(d\)场景条件的ENR指标的10dB。该结论适用边界受限于低秩稀疏回声路径与单次突变验证，尚未验证双讲、非平稳噪声及满秩通道等失败条件。原文披露的计算量与常规RLS\-NKP同阶，仅额外增加常数级运算，推理开销未显著增加。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 127. [只听声音选画面：声学氛围与歌词语义谁更决定背景视频的自然感](/posts/conference-eusipco-2026-conference-paper-id-0000401-022b500ccd/)

> 英文题目：*[CONTRASTIVE MUSIC–VIDEO MATCHING FOR AUDIO\-BASED BACKGROUND VIDEO COMPOSITION](/posts/conference-eusipco-2026-conference-paper-id-0000401-022b500ccd/)*

标签：#对比学习 #主观评测 #音视频 #音乐 #音视频生成

评分：**4.8/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音视频生成 | 主方法：#对比学习

会议来源：[官方记录](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/HTML/session-index/index.html) · [官方 PDF](https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0000401.pdf)

👥 **作者与机构**

- Taniguchi, Jun：机构信息未能从会议 PDF 纯文本可靠映射
- Abe, Kunihiro：机构信息未能从会议 PDF 纯文本可靠映射
- Shigyo, Rie：机构信息未能从会议 PDF 纯文本可靠映射
- Ogawa, Tetsuji：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务是为给定歌曲从既有主要背景视频素材池中挑选并拼接背景视频，输入为目标歌曲音频与预先给定的各乐段时长，输出为与全曲等长、按乐段顺序拼接且互不重叠的视频组合，难点在于音乐视频兼容性高度主观且声学氛围与歌词语义贡献难以解耦。方法第一步用冻结的CLAP与CLIP ViT\-B/32分别抽取乐段与候选视频特征并经各自变换器编码器映射到联合嵌入空间，以InfoNCE对比损失拉近配对音乐视频。第二步以与乐段等长的滑动窗口在素材源上按1秒步长逐窗编码并计算余弦相似分，上一阶段学到的联合嵌入直接给出每段候选得分。第三步用束搜索在非重叠约束下最大化全曲总分并按乐段顺序拼接，所选每段的起止时间与分数进入全局组合优化而非各段独立取最高。相对基于歌词释义加时刻检索的基线，关键差异是用声学氛围直接驱动视频时刻检索而非依赖大语言模型解读的语义匹配，实际意义是避免随乐段数指数增长的一致性评估并可处理首段之外全曲。在全曲与专家精选比较任务下，音频方法在Q1整体不自然感上排除中性票时双侧二项检验p值指标为0\.000，低于纳入中性票并入音频侧后条件的双侧二项检验p值指标0\.105。结论的适用边界是仅验证了首段与全曲的偏好判断，尚未验证跨语言跨风格外推与长期叙事一致性，且专家版本含额外后期处理而本文仅比选段，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
