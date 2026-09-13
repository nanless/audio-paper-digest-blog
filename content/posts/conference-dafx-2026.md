---
title: "dafx-2026 论文深度解读"
date: 2026-09-13
draft: false
paper_digest_pipeline_owned: true
tags: ["半监督学习","变分自编码器","测试时自适应","大语言模型","端侧运行","端到端","端到端学习","多模态学习","多任务学习","多通道","发声与构音","房间脉冲响应估计","符号音乐生成","高效推理","歌唱生成","和弦识别","环境声","基准测试","基准设计","集成学习","检索增强","教育","开源工具","可解释性","课程学习","空间音频","空间音频信号","空间音频渲染","扩散模型","离线推理","理论分析","流匹配","流式处理","鲁棒性","麦克风阵列","模型比较","模型集成","模型剪枝","模型评估","模型融合","评测协议","迁移学习","去混响","去削波","软件工具","少样本","时频分析","实时处理","数据集","数据集构建","数据增强","听觉与音乐认知","统计分析","图神经网络","向量量化","信号处理","形式化分析","音乐","音乐理解","音乐生成","音乐信息检索","音乐源分离","音频分类","音频分离","音频检索","音频交互","音频理解","音频生成","音频事件检测","音频修复","用户研究","语音","语音增强","语音转换","预训练","正则化","知识蒸馏","众包评测","主观评测","状态空间模型","自回归模型","自适应滤波","CNN","RNN","Transformer"]
categories: ["dafx-2026 论文"]
description: "共收录 91 篇 dafx-2026 会议论文的 Reader 深度解读"
paper_digest_page_type: index
paper_digest_reader_quality: "reader-facing-v3"
paper_digest_taxonomy_contract: "paper-taxonomy-flat-tags-compat-v1"
paper_digest_taxonomy_selection_contract: "paper-taxonomy-selection-v1"
paper_digest_taxonomy_registry_version: "paper-taxonomy-v1"
paper_digest_taxonomy_registry_sha256: "15c82a567ce5a55dc1175684ed08b64c158558639d9c8fb822c9587ec32a8778"
paper_digest_taxonomy_scope: "aggregate-primary-task-counts"
---

# dafx-2026 论文深度解读

本汇总收录 authenticated plan 选择集内全部 91 篇已完成分析、重标和单篇 staging 的论文。

🏷️ 标签说明：本期使用新版受控 taxonomy；热门方向只统计主任务。

## ⚡ 今日概览

✅ authenticated plan 入选 91 篇 → 🔬 深度分析、Reader 与页面投影完成

### 🏷️ 热门方向

| 方向（仅主任务） | 数量 |
|---|---:|
| #音频生成 | 21 篇 |
| #音乐生成 | 15 篇 |
| #房间脉冲响应估计 | 13 篇 |
| #空间音频渲染 | 12 篇 |
| #音频理解 | 10 篇 |
| #音频检索 | 3 篇 |
| #音频分类 | 2 篇 |
| #音频交互 | 2 篇 |
| #音频修复 | 2 篇 |
| #符号音乐生成 | 1 篇 |
| #歌唱生成 | 1 篇 |
| #和弦识别 | 1 篇 |
| #去混响 | 1 篇 |
| #去削波 | 1 篇 |
| #音乐理解 | 1 篇 |
| #音乐源分离 | 1 篇 |
| #音频分离 | 1 篇 |
| #音频事件检测 | 1 篇 |
| #语音增强 | 1 篇 |
| #语音转换 | 1 篇 |

## 📊 论文评分排行榜

| 排名 | Reader 中文题目 | 英文题目 | 八维评分 | 分档 | 文档类型 | 主任务 |
|---:|---|---|---|---|---|---|
| 1 | [去掉运行时抽象的波数字电路仿真：用静态代码生成逼近理论下界](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-23-7c95d4e241/) | [Performance\-Oriented Wave Digital Circuit Emulation](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-23-7c95d4e241/) | **8.4/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 系统技术报告 | #音频生成 |
| 2 | [时变也会稳定吗：用连续域能量函数证明梯形离散虚拟模拟滤波器](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-28-12ca8d129d/) | [Stability Analysis of Time\-Varying Virtual Analog Filters](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-28-12ca8d129d/) | **8.2/10** · 创新 1.5/2 · 技术严谨 1.3/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.5/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前25% | 理论研究 | #音乐生成 |
| 3 | [把接线图学进去：用仿真 FM 信号流的图编码器做音频到预设检索](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-33-dbc3e40111/) | [FM Synthesizer Audio\-Parameter Shared Embeddings](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-33-dbc3e40111/) | **8.1/10** · 创新 1.6/2 · 技术严谨 1.2/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频检索 |
| 4 | [集成显卡跑不动小模型、却能加速大卷积：Snapdragon 流式神经音频的实测边界](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-18-a6bb59d1af/) | [Benchmarking Integrated GPU Acceleration of Real\-Time Neural Audio Inference on Snapdragon](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-18-a6bb59d1af/) | **7.9/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 数据集与基准 | #音频生成 |
| 5 | [标签各说各话时，用工业分类把三个音效库拼成一个可训练语料](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-51-8c8d73febf/) | [Sound Effects Dataset Unification With the Universal Category System](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-51-8c8d73febf/) | **7.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.5/1.5 · 可复现 0.3/0.5 · 工程/实践 1.1/1.5 | 前25% | 数据集与基准 | #音频分类 |
| 6 | [压缩器建模该对准增益轨迹：用控制电压直接评价与训练的新数据集](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-30-6e7624cec7/) | [Evaluating Dynamic Range Compressor Models Using Control\-Voltage Measurements: An Approach and Dataset](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-30-6e7624cec7/) | **7.8/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 数据集与基准 | #音频生成 |
| 7 | [从可微分训练到实时插件：用中间表示锁住反馈延迟网络的等价与稳定](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-61-943e0ebba5/) | [Compiling Differentiable Audio Graphs to Real\-Time DSP](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-61-943e0ebba5/) | **7.7/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.5/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前25% | 系统技术报告 | #空间音频渲染 |
| 8 | [线性插值是瓶颈：用拉格朗日插值加切比雪夫逼近重做抗混叠积分](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-47-94898c0abc/) | [PolyADAA: Improving Aliasing Reduction in Memoryless Nonlinearities Using Lagrange Interpolation and Polynomial Approximation](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-47-94898c0abc/) | **7.7/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频修复 |
| 9 | [CLAP 音频嵌入里藏着混响、响度和音高吗：用轻量探针检验线性与非线性编码](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-19-402e7d9a71/) | [Probing Low\-Level Acoustic Attribute Encoding in CLAP Audio Embeddings](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-19-402e7d9a71/) | **7.6/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前25% | 方法研究 | #音频理解 |
| 10 | [正则约束下把深度换精度：深层条件 LSTM 与听觉滤波损失补回建模质量](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-26-907891f790/) | [Deep Regularized RNNs for Virtual Analog](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-26-907891f790/) | **7.6/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #音频生成 |
| 11 | [一个旋钮管住五种距离线索：把声源推远而不推散的耦合渲染器](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-57-6c4123badb/) | [A Perceptually Inspired Single Parameter Auditory Distance Renderer for Music Production](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-57-6c4123badb/) | **7.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.4/1.5 | 前25% | 系统技术报告 | #空间音频渲染 |
| 12 | [先跟教师学一千小时再用真值纠错：两阶段和弦识别为何能超过教师](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-22-cd22c69f0c/) | [Enhancing Automatic Chord Recognition via Pseudo\-Labeling and Knowledge Distillation](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-22-cd22c69f0c/) | **7.5/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前25% | 方法研究 | #和弦识别 |
| 13 | [把板式混响学成可读模态：对角复数状态空间与矩阵铅笔初始化](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-03-2e04976ccf/) | [Diagonal Complex\-Valued State Space Models for System Identification and Modeling of Metal Plate Reverbs](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-03-2e04976ccf/) | **7.4/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #房间脉冲响应估计 |
| 14 | [用一块入门 FPGA 同时做鼓采样、效果器与 16 轨录音：并行与确定延迟如何压住成本](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-70-8dd4e42c76/) | [FPGA\-Enabled Real\-Time Audio Sampling, Processing, and Recording for an Electronic Drum Set](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-70-8dd4e42c76/) | **7.3/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 15 | [用极值点间距决定拼接长短的关键帧时间拉伸](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-21-16a642d37f/) | [Keyframe Audio via Extrema Sampling](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-21-16a642d37f/) | **7.3/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频生成 |
| 16 | [实测琴体约束显式非线性弦：65 把古典吉他的可复算合成链](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-40-07de707c9d/) | [Measurement\-Informed Nonlinear Modal Synthesis of 65 Classical Guitars](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-40-07de707c9d/) | **7.3/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 17 | [孤立很快不等于混音中不爆音：苹果芯片上神经音频推理的竞争实测](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-16-e5822c79be/) | [Real\-Time Neural Audio on Apple Silicon: Benchmarking Inference Frameworks Under Realistic DAW Contention](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-16-e5822c79be/) | **7.2/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 1.2/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 数据集与基准 | #音频生成 |
| 18 | [时变房间里用音乐做激励：可微分参数均衡为何要换掉时域误差](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-48-550fa52e56/) | [A DDSP Framework for Adaptive Room Equalization](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-48-550fa52e56/) | **7.2/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频修复 |
| 19 | [表现力从哪里来：速度、踏板与节拍标注谁真正改变了钢琴生成](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-64-b4f3a50134/) | [Evaluating Tokenization Strategies for Expressive Classical Piano Performance Generation](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-64-b4f3a50134/) | **7.1/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #符号音乐生成 |
| 20 | [把拾音位置选择推迟到混音阶段：64 通道分弦多点吉他拾音系统](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-73-17b7effcd0/) | [PolyMap: A 64\-Channel Polyphonic Guitar Pickup System](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-73-17b7effcd0/) | **7.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #音乐源分离 |
| 21 | [边界决定音高：从矩形板到克莱因瓶的模态推导与混响合成](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-11-47c8b70ed0/) | [Modal Structure of Plate Boundaries and Klein Bottle Reverberation](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-11-47c8b70ed0/) | **7.1/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 1.5/1.5 · 可复现 0.4/0.5 · 工程/实践 0.5/1.5 | 前50% | 理论研究 | #音频生成 |
| 22 | [不用逐个找峰也能建模琴桥导纳：用脉冲响应直接算出状态空间](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-41-bff3fe8e9f/) | [Eigensystem Realization of Violin Bridge Admittances](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-41-bff3fe8e9f/) | **7.1/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音乐生成 |
| 23 | [九成权重归零仍能弹：稀疏 WaveNet 音箱如何挤进 iPhone 中央处理器](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-67-9459f1d160/) | [WaveNet\-Style Guitar Amplifier Model Pruning for Real\-Time iOS Deployment](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-67-9459f1d160/) | **7.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频生成 |
| 24 | [把同步后的波形算成频谱搬移：加法合成做无混叠振荡器同步](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-49-6ba26843f2/) | [Alias\-Free Oscillator Synchronization via Additive Synthesis](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-49-6ba26843f2/) | **7.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 方法研究 | #音乐生成 |
| 25 | [在真实 DAW 里批量渲染效果图：WildFX 如何把插件链变成可学习数据](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-56-408a419bcc/) | [WildFX: A DAW\-Powered Pipeline for In\-the\-Wild Audio FX Graph Modeling](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-56-408a419bcc/) | **7.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.6/1 · 影响力 0.9/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.3/1.5 | 前50% | 数据集与基准 | #音频理解 |
| 26 | [多轮修音不推倒重来：用大模型定方向、用听觉优化守住上一轮](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-74-e70676b053/) | [InstructFX2FX: A Multi\-Turn Text\-to\-Effect System for Sequential Audio Effect Refinement](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-74-e70676b053/) | **6.9/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频生成 |
| 27 | [多声源共享房间参数时：频谱变准了，混响尾巴为何更难对齐](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-07-66c6af75b4/) | [Multi\-Source Extension and Hyperparameter Optimization of the DiffRIR Framework for Room Impulse Response Synthesis](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-07-66c6af75b4/) | **6.9/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #房间脉冲响应估计 |
| 28 | [把镜像计数折成格点体积：高维房间脉冲响应的几何卷积加速](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-12-7aa399aafc/) | [Gauss Circle Lattices with Geometric Convolutions for Synthesizing High Dimensional Image\-Source Room Impulse Responses](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-12-7aa399aafc/) | **6.9/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #房间脉冲响应估计 |
| 29 | [椰壳共鸣的两根丝弦如何被算出声音：耶胡的刚性弦、弹塑性弓毛与模态琴桥](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-43-26e44c3597/) | [Physical Model of the Chinese Yehu for Sound Synthesis](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-43-26e44c3597/) | **6.9/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音乐生成 |
| 30 | [先数清有多少个模态，再去校准每个模态：密集板混响的计数优先估计](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-90-ae6a495f35/) | [Band\-Count Dense Modal Estimation with Fixed\-Frequency Differentiable Resonator Refinement ★](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-90-ae6a495f35/) | **6.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #房间脉冲响应估计 |
| 31 | [直接在可运行网络上优化混响：模块化反馈延迟网络的实时拆解与调参](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-68-157bee88f1/) | [FDN Sandbox: Real\-Time Experimentation and Analysis of FDNs](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-68-157bee88f1/) | **6.8/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #空间音频渲染 |
| 32 | [用音乐分离模型学生成环绕声：合成主次数据集如何把盲上混变成可训练任务](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-14-eb35bde215/) | [PAEDB: A Synthetic Primary\-Ambient Dataset Generation Pipeline for Automatic Upmixing Using Deep Neural Networks](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-14-eb35bde215/) | **6.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #空间音频渲染 |
| 33 | [板混响能从声音倒推出物理参数吗：一次只用合成数据的参数估计挑战](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-76-f456ab8f39/) | [DAFx Challenge Introduction & Results](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-76-f456ab8f39/) | **6.7/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频理解 |
| 34 | [先对准频率再抠位置：ALAMODE 用三阶段差分进化反演平板混响参数](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-79-dd908ad9bf/) | [ALAMODE: Automated Learning of Acoustical Modal Parameters via Differential Evolution](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-79-dd908ad9bf/) | **6.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.6/1 · 影响力 0.8/1.5 · 开源 1.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #房间脉冲响应估计 |
| 35 | [不用卷积长脉冲：以噪声载波重塑频域混响尾巴](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-66-abb7117e5e/) | [A Frequency\-Domain Reverberator Plug\-In](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-66-abb7117e5e/) | **6.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #空间音频渲染 |
| 36 | [何时才该移动声音对象：SEND 把混音师的克制听感做成双流事件检测](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-09-d99048c999/) | [SEND: A Spatial Event Neural Detector for Intentional Object Motion in Immersive Music Mixing](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-09-d99048c999/) | **6.7/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频事件检测 |
| 37 | [用可微反馈延迟网络拟合实测房间脉冲响应：共享原型均衡如何省参数](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-10-555b9d3190/) | [Gradient Descent Optimization of Room Impulse Responses with Parameter\-Efficient Differentiable Feedback Delay Networks](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-10-555b9d3190/) | **6.7/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.1/1.5 | 前50% | 方法研究 | #房间脉冲响应估计 |
| 38 | [用一次二次规划代替迭代求解：残差驱动的变步长非线性电路仿真](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-31-8af2e64a1f/) | [Residual\-Driven Adaptive Multi\-Rate Quadratic Programming Framework for Nonlinear Analog Audio Circuit Emulation](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-31-8af2e64a1f/) | **6.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频生成 |
| 39 | [一次生成一小段连续潜块：SCAPES 如何用轻量流模型做语义可控的环境声](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-54-43872a3b2c/) | [SCAPES: Semantically Conditioned Autoregressive Prior for Environmental Sounds](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-54-43872a3b2c/) | **6.6/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 模型报告 | #音频生成 |
| 40 | [把拼接输出写进卷积核：单引擎如何在连续换混响时保住能量](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-01-5d52be235c/) | [A Unified Framework for Real\-Time Concatenation\-Driven Convolution](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-01-5d52be235c/) | **6.5/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #空间音频渲染 |
| 41 | [测得的空间房间脉冲响应：先分离早晚反射，再把阵列缺陷一起重建](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-08-a56e2c6d49/) | [Parametric Resynthesis of Measured Spatial Room Impulse Responses](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-08-a56e2c6d49/) | **6.5/10** · 创新 1.4/2 · 技术严谨 1.2/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #空间音频渲染 |
| 42 | [参考引导的音效变体：用同一生产目标比较不同编辑能力的方法](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-52-ba00af32d3/) | [A Production\-Oriented Framework for Evaluation of SFX Generation](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-52-ba00af32d3/) | **6.5/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频生成 |
| 43 | [从参数画形到按顶点走形：等弧长引擎如何统一任意多边形、形变与多面体截面](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-32-397059e397/) | [Arbitrary Polygon Oscillator: Generalizing Polygonal Synthesis to Arbitrary Shapes, Morphing, and Three\-Dimensional Polyhedra](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-32-397059e397/) | **6.3/10** · 创新 1.5/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频生成 |
| 44 | [可微拨弦：当频谱损失推不动起音时刻，参数损失与外部检测器如何分工](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-38-fad3936512/) | [Sound Matching with a Differentiable Karplus\-Strong Algorithm](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-38-fad3936512/) | **6.3/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 1.1/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.9/1.5 | 前50% | 方法研究 | #音乐生成 |
| 45 | [级联不拆相位、并行不抢状态：多级线性相位八度滤波器组的吞吐与能耗折中](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-44-00e398321e/) | [Exploring Parallelism and Energy Efficiency in a Multistage Linear\-Phase Octave Filter Bank](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-44-00e398321e/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频分离 |
| 46 | [FoleySet：用两层动作 taxonomy 把拟音从宽泛标签拉回制作现场](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-55-2e99f5226a/) | [FoleySet: A Multi\-Level Human\-Annotated Foley Sound Dataset](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-55-2e99f5226a/) | **6.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音频分类 |
| 47 | [用可微模态合成反推薄板参数：两阶段梯度搜索如何绕开非凸陷阱](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-77-b104760dd9/) | [Parameter Estimation via Differentiable Modal Plate Synthesis](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-77-b104760dd9/) | **6.2/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.5/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频理解 |
| 48 | [用对数级递归保持无损：可调克罗内克反馈矩阵如何划分混响网络](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-04-d221166712/) | [Fast Parametric Matrices for Lossless Feedback Delay Networks](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-04-d221166712/) | **6.2/10** · 创新 1.3/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #空间音频渲染 |
| 49 | [归一化丢掉响度线索：两阶段进化搜索先定形状再找回面密度](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-83-5901b2be69/) | [Accurate Plate Reverb Parameter Estimation Using Two\-Stage Evolutionary Search](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-83-5901b2be69/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #房间脉冲响应估计 |
| 50 | [从一条脉冲响应反推钢板参数：用仿真样本直接学后验分布](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-84-2de824f3c5/) | [Simulation\-based Inference Plate Reverberation Inverse Problems](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-84-2de824f3c5/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频理解 |
| 51 | [线性看起来一样，失真后为何分叉：Moog 梯子滤波器非线性行为的同基准量化](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-29-b13ac0aad8/) | [Quantifying Nonlinear Behavior in Digital Moog Ladder Filters: Cross\-Implementation Comparison and Common\-Core Ablation](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-29-b13ac0aad8/) | **6.1/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 数据集与基准 | #音乐理解 |
| 52 | [绕一圈回不来：用圆形缓冲器讲清莫比乌斯带的单值性与缠绕数](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-35-d9d8458a7e/) | [Winding Numbers and Monodromy of Vector Bundles over a Circular Buffer](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-35-d9d8458a7e/) | **6.1/10** · 创新 1.3/2 · 技术严谨 0.8/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 1.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 理论研究 | #音频生成 |
| 53 | [把做乐器的扩散模型拿去换嗓：统一条件如何同时管住音高、音素与演唱者](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-42-14075c8f65/) | [Adapting Diffusion\-Based Music Synthesis to Speech and Singing Voice Conversion](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-42-14075c8f65/) | **6.1/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 1.0/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #语音转换 |
| 54 | [不靠模态先验，把波形表征和可算特征拼起来反推薄板参数](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-78-299260c60d/) | [Physics\-Inspired Feature Fusion for Plate Parameter Estimation from Acoustic Impulse Responses ★](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-78-299260c60d/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.4/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频理解 |
| 55 | [把带宽压到低频孤立共振：多分辨率谱图加相位估计板混响参数](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-80-470a75c23f/) | [A Multi\-Resolution Spectrogram Approach for Estimating the Physical Parameters of a Plate Reverb](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-80-470a75c23f/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 应用研究 | #房间脉冲响应估计 |
| 56 | [把中间表示留下来：离线可编辑的分析对象如何成为作曲控制器](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-59-148c0334b2/) | [Praat AudioTools: Analysis Objects as Compositional Controllers for Interpretable Sound Transformation](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-59-148c0334b2/) | **6.0/10** · 创新 1.2/2 · 技术严谨 0.9/1.5 · 实验充分 0.2/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 1.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音乐生成 |
| 57 | [不训练新模型：在编解码器令牌上借音色、保节奏](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-63-2063cc8de8/) | [Neural Morphing: Sequence\-Optimized Token\-Level Morphing in Neural Audio Codecs](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-63-2063cc8de8/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #音频生成 |
| 58 | [在二维平面上连续试听脉冲响应集合：IRIS 用高斯加权与有界卷积做轻量导航](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-71-09e2e74a33/) | [IRIS: Continuous Spatial Navigation of Measured Acoustic Fields via Impulse Response Interpolation](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-71-09e2e74a33/) | **6.0/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.2/1.5 | 前50% | 系统技术报告 | #空间音频渲染 |
| 59 | [六个旋钮如何驱动数千个共振模式：语料库标定的参量模态混响](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-06-95cea726c5/) | [A Corpus\-Driven Parametric Modal Reverberator](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-06-95cea726c5/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.1/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #空间音频渲染 |
| 60 | [有脊的搬土损失：低阶有理比如何卡住双算子 FM 频率估计](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-37-365ae79e59/) | [FM Parameter Estimation with Low\-Order Rational Constraints on Wasserstein Loss Landscape](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-37-365ae79e59/) | **6.0/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.1/1.5 | 前50% | 方法研究 | #音频理解 |
| 61 | [三点脉冲响应如何撑起一条隧道的可走动混响：Bunkervik 共极点模态引擎](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-72-792fb391d2/) | [Bunkervik Spatial Reverb Demo](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-72-792fb391d2/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.6/1.5 · 清晰度 0.9/1 · 影响力 0.7/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #空间音频渲染 |
| 62 | [有输出不等于有证据：把可用性、确认锁定和预测延续分开算的时间码恢复对照](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-17-7bc05b7395/) | [Robust Recovery of Deterministic Timecode Signals Under Analog Degradation](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-17-7bc05b7395/) | **5.9/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频交互 |
| 63 | [把三处非线性压成一处：OCD 非对称削波的显式波数字建模](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-24-cfbf334bad/) | [Explicit Wave Digital Model of the Fulltone OCD Pedal Based on Canonical Piecewise\-Linear Functions](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-24-cfbf334bad/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音频生成 |
| 64 | [帧内也会变化的乐音：用分布导数法估计多项式调幅调频正弦](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-34-b13efcb6cf/) | [Using the Distribution Derivative Method to Model Acoustic Musical Instrument Sounds with Polynomial AM\-FM Sinusoids](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-34-b13efcb6cf/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.7/1 · 影响力 0.9/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音乐生成 |
| 65 | [检索与合成分开做会断流：QuAP 把找声音和造声音放进同一个插件](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-53-bbb212a785/) | [Quality Audio Prototyping: A Prototype System for Unified Sound Retrieval and Procedural Generation](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-53-bbb212a785/) | **5.9/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.9/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频检索 |
| 66 | [双声泛音靠声道形状算出来：可微波导怎样复制 sygyt](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-39-3fae2552c3/) | [Differentiable Articulatory Copy\-Synthesis of Biphonic Singing](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-39-3fae2552c3/) | **5.8/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 1.0/1.5 · 清晰度 0.9/1 · 影响力 0.6/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 前50% | 方法研究 | #歌唱生成 |
| 67 | [不做梯度迭代：用矩阵铅笔定极点、最小二乘定增益恢复平板混响模态](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-86-402a56622f/) | [Non\-iterative Modal Parameter Estimation for Plate Reverbs via Matrix\-Pencil\-Guided State Space Model Initialization](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-86-402a56622f/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #房间脉冲响应估计 |
| 68 | [薄板混响有数千个挤在一起的模态，双流如何同时看全局与局部衰减](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-91-caea976e06/) | [A Dual\-Stream Framework Combining Audio Spectrogram Transformer and Dynamic Mode Decomposition for Plate Modal Parameter Estimation ★](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-91-caea976e06/) | **5.7/10** · 创新 1.3/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #房间脉冲响应估计 |
| 69 | [把采样率换掉而不重训：固定时长帧上的傅里叶神经算子如何做虚拟模拟](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-27-788a513293/) | [Fourier Neural Operators for Sample\-Rate\-Independent Virtual Analog Modeling](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-27-788a513293/) | **5.7/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音频生成 |
| 70 | [先猜五维再对波形：可微合成与粒子群如何把板混响参数推到近乎完全恢复](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-82-199a7be180/) | [Transformer\-Based Plate Parameter Estimation with Differentiable and Particle\-Swarm Refinement](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-82-199a7be180/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.2/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频理解 |
| 71 | [不做频谱，直接读波形：用 CNN\-GRU 从板混响脉冲响应反推六个可辨识物理参数](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-85-7acc754789/) | [Neural Networks for Physical Parameter Estimation of Plate Reverberation from Impulse Responses ★](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-85-7acc754789/) | **5.6/10** · 创新 1.0/2 · 技术严谨 1.2/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频理解 |
| 72 | [在混响房间里保住方向：闭合包络串扰逆解码器的补偿逻辑](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-15-6b593d4396/) | [Ambisonic Decoder Equalization in Reverberant Environments via Closed\-Hull Crosstalk Inversion](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-15-6b593d4396/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #去混响 |
| 73 | [把和声距离写进傅里叶权重：对齐与插值音高分布的可逆工具箱](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-20-b6deb924f7/) | [Perceptually Motivated Alignment and Interpolation of Pitch\-Aligned Time\-Frequency Representations](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-20-b6deb924f7/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #音乐生成 |
| 74 | [把非线性装进波数字滤波器：KAN 以更少参数逼近多二极管散射映射](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-25-a0ef589183/) | [A Comparative Study of Kolmogorov\-Arnold Networks and Multi\-Layer Perceptrons for Virtual Analog Modeling in Wave Digital Filters](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-25-a0ef589183/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 应用研究 | #音频生成 |
| 75 | [时变全通滤波器为何会削波：把系数增量关进阈值笼子](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-45-1d2cf48a9f/) | [A Clipping Prevention Method for All\-Pass Digital Filters with Time\-Varying Coefficients](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-45-1d2cf48a9f/) | **5.6/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #去削波 |
| 76 | [一次仿真、一次回归：用 372 维描述子把单条板混响脉冲反推回六个物理参数](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-81-33c2c50fbe/) | [Simulation\-Based Plate\-Reverb Parameter Estimation from a Single Impulse Response ★](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-81-33c2c50fbe/) | **5.5/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #房间脉冲响应估计 |
| 77 | [保留弹奏、只换效果：Clean2FX 用标签条件让同一段干琴长出十种音色](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-58-2a93f11a8d/) | [CLEAN2FX: Label\-Conditioned Modeling for Clean\-to\-Effect Guitar Audio Transformations](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-58-2a93f11a8d/) | **5.5/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.8/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 方法研究 | #音乐生成 |
| 78 | [手腕不动琴：把传感、映射与效果链收进同一个 Csound 文件的 L\-Bow](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-75-e790200be4/) | [L\-BOW: Gesture\-Driven Digital Audio Effects for Augmented Violin in a Unified Csound Environment](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-75-e790200be4/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 前50% | 系统技术报告 | #音频交互 |
| 79 | [把时间藏进相位的巨型频谱：用群延迟成组搬移保住音符包络](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-02-2f95b723e6/) | [Group Delay Manipulation for Creative Sound Transformation with the Giant FFT](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-02-2f95b723e6/) | **5.5/10** · 创新 1.4/2 · 技术严谨 1.0/1.5 · 实验充分 0.4/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.2/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #音频生成 |
| 80 | [把听觉模型变成可微损失：同一套梯度优化重做声像与甜点](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-13-5c8adcd306/) | [Perceptual Optimisation of Loudspeaker\-Based Reproduction](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-13-5c8adcd306/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 前50% | 方法研究 | #空间音频渲染 |
| 81 | [从噪声中途上车：暖初始化让同一个扩散模型做音色迁移与音频修复](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-50-f3e33564f0/) | [Audio\-to\-Audio via Diffusion Warm Initialization](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-50-f3e33564f0/) | **5.5/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.8/1 · 影响力 0.8/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.7/1.5 | 前50% | 方法研究 | #音乐生成 |
| 82 | [数模态个数再估计参数：计数密度网络如何把板混响脉冲变成模态三元组](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-87-0a1b60acc9/) | [Count\-Density Networks for Modal Plate Parameter Estimation](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-87-0a1b60acc9/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.7/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 方法研究 | #房间脉冲响应估计 |
| 83 | [把非线性放进反馈回路：用反馈延迟网络做可控衰减的微光混响](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-05-b5addafd74/) | [Shimmer Reverberation with Nonlinear Feedback Delay Networks](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-05-b5addafd74/) | **5.4/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.6/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 后50% | 方法研究 | #音频生成 |
| 84 | [极点不动、留数会动：用三视图与饱和分裂收割密集平板模态](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-88-5a75e5b0d2/) | [Multi\-View Subband Autoregressive Pole Harvesting for Modal Plate Identification](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-88-5a75e5b0d2/) | **5.3/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音频理解 |
| 85 | [持续变调装不进环形缓冲：用已知发声频率把线性延迟绕回去](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-36-ad9af1848b/) | [Loopback Frequency Modulation Using a Time\-Varying Delay Line](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-36-ad9af1848b/) | **5.3/10** · 创新 1.3/2 · 技术严谨 1.1/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.7/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.8/1.5 | 后50% | 方法研究 | #音乐生成 |
| 86 | [任意声音如何借到电子舞曲的鼓点：离散节奏原型库的频谱检索](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-65-8533a03c3a/) | [From Arbitrary Audio to EDM: Audio\-Conditioned Retrieval of Discrete Rhythm Archetypes](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-65-8533a03c3a/) | **5.2/10** · 创新 1.1/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #音频检索 |
| 87 | [看得见的峰才计数：峰残差估计把频率支撑、校准与高频补数分开处理](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-89-8226ebe3c5/) | [Peak\-Residual Modal Estimation with Learned Calibration and High\-Band Density Correction ★](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-89-8226ebe3c5/) | **5.0/10** · 创新 1.2/2 · 技术严谨 0.8/1.5 · 实验充分 0.5/1.5 · 清晰度 0.7/1 · 影响力 0.5/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 1.0/1.5 | 后50% | 系统技术报告 | #房间脉冲响应估计 |
| 88 | [当嵌入模型说变好了而听众说没有：VoiceFX 的补救与验证落差](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-62-1d17eb8647/) | [VoiceFX: CLAP\-Based Audio Quality Improvement for Singing and Speech](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-62-1d17eb8647/) | **5.0/10** · 创新 1.0/2 · 技术严谨 0.8/1.5 · 实验充分 1.0/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.3/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #语音增强 |
| 89 | [不做分离而改混合：用可微合成参数与扩散先验实现分声部音乐编辑](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-69-6f5116331a/) | [Diffusion\-Based Music Audio Editing System Using Differentiable Digital Signal Processing Mixture Model](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-69-6f5116331a/) | **4.8/10** · 创新 1.2/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #音乐生成 |
| 90 | [脉冲宽度不变而音高可变：脉冲表如何合成管乐音色](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-60-b85cd95e95/) | [Pulsetable Synthesis of Wind Instrument Tones](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-60-b85cd95e95/) | **4.7/10** · 创新 1.0/2 · 技术严谨 1.0/1.5 · 实验充分 0.3/1.5 · 清晰度 0.6/1 · 影响力 0.7/1.5 · 开源 0.2/1.5 · 可复现 0.1/0.5 · 工程/实践 0.8/1.5 | 后50% | 系统技术报告 | #音乐生成 |
| 91 | [能出声不等于算对了：八份合成器作业里 AI 到底改变了什么](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-46-d91d2631c7/) | [Evaluating AI Coding Assistants in Audio DSP Education: A Small Scale Study](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-46-d91d2631c7/) | **4.6/10** · 创新 1.1/2 · 技术严谨 1.0/1.5 · 实验充分 0.5/1.5 · 清晰度 0.8/1 · 影响力 0.6/1.5 · 开源 0.0/1.5 · 可复现 0.1/0.5 · 工程/实践 0.5/1.5 | 后50% | 应用研究 | #音频生成 |

---

## 📋 论文列表

### 1. [去掉运行时抽象的波数字电路仿真：用静态代码生成逼近理论下界](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-23-7c95d4e241/)

> 英文题目：*[Performance\-Oriented Wave Digital Circuit Emulation](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-23-7c95d4e241/)*

标签：#软件工具 #评测协议 #信号处理 #高效推理 #音频生成

评分：**8.4/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：系统技术报告 | 主任务：#音频生成 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_23.pdf)

👥 **作者与机构**

- Jatin Chowdhury：机构信息未能从会议 PDF 纯文本可靠映射
- Mark Rau：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

虚拟模拟需以音频流、元件参数与采样率为输入逐样本实时计算目标节点电压或电流，通用波数字滤波器库以虚函数分发与分散持久对象组织数据，导致内存搬运与流水线开销显著。该工具链先由声明式领域专用语言解析连接树并做元件合并与拓扑化简，输出精简后的电路描述进入静态编译器。编译器再将常量参数折叠为Params并生成仅含Impedances与State的专用处理代码，State只保留电容电感记忆。极小运行时库最后提供非线性与R型适配器等定制元件并将全函数内联为单函数供编译器做超标量优化。与面向对象复用相比，该链路消除了运行时抽象并将持久状态压缩至记忆量级，同时使数据布局连续而更利于缓存与指令并行。在Apple M1评测设置下，wdf\_compiler的ns/sample指标为1\.37，低于wdmodels的ns/sample指标6\.02。该结论适用边界受限于4类测试电路与两款消费级CPU的单线程单精度比较，非线性电路尚缺乏理论界对照且尚未验证多核与高采样率外推。推理开销在M1上为每样本4\.42周期与12\.00条指令，硬件为Apple M1与AMD Zen 4消费级CPU，原文未披露训练成本而编译耗时仅定性描述为远低于1秒。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Chowdhury-DSP/wdf_compiler> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/xtensor-stack/xsimd> — 链接可访问（HTTP 200）
- 第三方资源：<https://compiler-explorer.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://dougallj.github.io/applecpu> → <https://dougallj.github.io/applecpu/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 2. [时变也会稳定吗：用连续域能量函数证明梯形离散虚拟模拟滤波器](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-28-12ca8d129d/)

> 英文题目：*[Stability Analysis of Time\-Varying Virtual Analog Filters](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-28-12ca8d129d/)*

标签：#形式化分析 #理论分析 #音乐 #音乐生成

评分：**8.2/10** | 创新 1.5/2 | 技术严谨 1.3/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前25% | 文档类型：理论研究 | 主任务：#音乐生成 | 主方法：#形式化分析

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_28.pdf)

👥 **作者与机构**

- Russell McClellan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

时变虚拟模拟滤波器以有界音频输入\(u\[n\]\)与时变截止、共振参数为输入，以滤波器输出\(y\[n\]\)为输出，难点在于时变下无传递函数极点判据且冻结参数处处稳定仍可能整体发散。本文先建立离散公共二次Lyapunov函数与Laroche矩阵范数收缩判据的等价关系，将稳定性转化为单一相似变换下所有状态转移矩阵的严格压缩。再证明连续时间CQLF经梯形积分保持为离散时间CQLF，使离散稳定性可由连续域矩阵不等式直接判定。随后以该连续域不等式统一判定状态变量滤波器、Sallen\-Key滤波器与Moog梯形滤波器等在给定共振上界内的有界输入有界输出稳定性，并自然分离截止调制与共振调制。与直接在离散域凑相似变换的方法相比，该机制把复杂离散矩阵分析降为更简单的连续状态矩阵分析，避免对时变离散矩阵逐点构造变换。在脉冲输入且恒定截止参数的仿真条件下，\(k\[n\]\)在0与2\.89间交替时的输出平方幅值指标增长至1500，高于\(k\[n\]\)在0与2\.88间交替时的输出平方幅值指标的0\.08。该结论适用边界限于梯形离散化线性开关模型与给定共振上界内，慢变参数与非线性饱和等音乐常见情形尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 3. [把接线图学进去：用仿真 FM 信号流的图编码器做音频到预设检索](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-33-dbc3e40111/)

> 英文题目：*[FM Synthesizer Audio\-Parameter Shared Embeddings](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-33-dbc3e40111/)*

标签：#图神经网络 #多模态学习 #音乐 #音频检索

评分：**8.1/10** | 创新 1.6/2 | 技术严谨 1.2/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频检索 | 主方法：#图神经网络

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_33.pdf)

👥 **作者与机构**

- David Braun：机构信息未能从会议 PDF 纯文本可靠映射
- Adam Finkelstein：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

给定目标音频从预设库中找回最匹配的FM合成器预设，输入为音频、输出为预设，难点在于音色由算子路由拓扑与调制交互决定，扁平参数向量会丢弃信号路由结构。FM\-SynAPSE先将DX7预设按算法转成算子为节点、调制与反馈为有向边的图，节点特征融合连续、离散与全局参数并缩放到统一区间。接着音频编码器与图参数编码器经SLAP式非对比多模态目标对齐到共享空间，分别用在线编码器、目标编码器与预测器计算跨模态与模内余弦对齐损失。检索时用音频预测向量与库中参数预测向量的余弦距离返回最近预设，训练中辅以算子交换与参数噪声增强以暴露新算子组合。与把算法作类别嵌入的Transformer及把展平参数送入高速块的Highway基线相比，关键差异是消息沿真实调制边流动并经输出电平门控与FiLM聚合、最后只对载波求和，从而支持未见拓扑零样本编码。在16个算法训练、8个未见算法测试的检索任务下，DX7\-GNN的R@1为52\.2%，高于Transformer的R@1 34\.6%。该增益的适用边界受限于DX7六算子同构结构与单音符C4渲染，多样复音与跨合成器迁移尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/DBraun/SynAPSE> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/DBraun/dexed-py> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/asb2m10/dexed> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 4. [集成显卡跑不动小模型、却能加速大卷积：Snapdragon 流式神经音频的实测边界](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-18-a6bb59d1af/)

> 英文题目：*[Benchmarking Integrated GPU Acceleration of Real\-Time Neural Audio Inference on Snapdragon](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-18-a6bb59d1af/)*

标签：#基准设计 #高效推理 #实时处理 #音频生成

评分：**7.9/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频生成 | 主方法：#基准设计

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_18.pdf)

👥 **作者与机构**

- Avery Huang：机构信息未能从会议 PDF 纯文本可靠映射
- Gautham Srinivasan：机构信息未能从会议 PDF 纯文本可靠映射
- Akito van Troyer：机构信息未能从会议 PDF 纯文本可靠映射
- Victor Zappi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是在集成GPU回调约束下做流式神经音频推理，输入为相位斜坡、吉他干声、梅尔频谱与基频或待变换音色，输出为连续合成或处理音频，难点在于每块64到1024采样在48kHz下仅1\.3到21\.3毫秒预算且单次超时即欠载。方法链先将振荡器、循环放大器、空洞卷积放大器、二维深度可分离声码器与卷积自编码器五类模型统一导出为ONNX并转为高通DLC，其输出直接作为后端输入。接着自研AudioReach引擎以固定缓冲触发单次推理调用并逐回调度量耗时与欠载，其调用记录进入对比分析。最后在RB3 Gen2开发板上对比最优CPU引擎与QNN CPU与QNN GPU，统一内存架构下的实测结果决定何时加速有效。与离散GPU上只报大缓冲吞吐倍率的已有做法相比，关键机制差异在于把原生并行度与每调用开销置于真实回调约束下联合度量，实际意义是揭示靠增大缓冲虚增利用率的虚假收益。在AutoGuitarAmp任务评测下，QNN GPU的每样本推理时间指标为167\.59 µs，高于RTNeural的每样本推理时间指标0\.43 µs。结论适用边界是769参数振荡器与1861参数循环放大器仍由CPU主导，NAM类一维卷积仅大块追平，大模型需足够原生并行度否则受限。硬件上实测使用8核Kryo670与Adreno643统一内存板卡，小块下每调用延迟开销主导，推理开销随块尺寸显著变化。

🔗 **开源资源**

- 代码相关资源：<https://github.com/victorzappi/ar-audioengine> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/microsoft/onnxruntime> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/gpuaudio/gpuaudio-sdk> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 5. [标签各说各话时，用工业分类把三个音效库拼成一个可训练语料](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-51-8c8d73febf/)

> 英文题目：*[Sound Effects Dataset Unification With the Universal Category System](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-51-8c8d73febf/)*

标签：#数据集 #数据集构建 #环境声 #音频分类

评分：**7.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频分类 | 主方法：#数据集构建

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_51.pdf)

👥 **作者与机构**

- Jun Woo Beck：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Lerch：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音效检索与生成受困于各数据集标签体系互不兼容，输入为FSD50K、AudioSet与ESC\-50的异构标签与音频，输出要求统一层级语义与可比划分，难点在于同义异名与单文件多标签指向冲突类别。作者以通用类别系统UCS v8\.2\.1为统一标准，先做标签到UCS的规则级联映射，单个标签匹配成功即为文件生成候选类别。再做文件级冲突消解，依次按多数投票与位置优先级选出唯一类别并记入歧义清单，其输出作为统一标签进入下一步。然后对环境声过滤子集做按源分层切分后合并，保留各源内部分布并形成EnvSound\-UCS统一语料。相对已有扁平映射，该机制保留类别与子类别联合分布并显式处理多标签竞争，更贴合制作端层级检索工作流。在FSD50K基准下，由子类别预测聚合得到的类别级F1分数为\.71，高于直接类别分类器的F1分数的\.52。该结论适用边界受限于环境声子集与文本标签匹配，未做听觉校验且层级路由依赖上游分类精度，跨领域与生成任务外推尚未验证。原文未披露训练、推理或部署成本

🔗 **开源资源**

- 代码相关资源：<https://github.com/JunWooBeck/ucs-sfx-tools> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/JunWooBeck/envsound-ucs> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/JunWooBeck/fsd50k-ucs> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/JunWooBeck/audioset-ucs> — 链接可访问（HTTP 200）
- 数据相关资源：<https://github.com/JunWooBeck/esc50-ucs> — 链接可访问（HTTP 200）
- 复现相关资源：<https://github.com/JunWooBeck/ucs-sfx-datasheets> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 6. [压缩器建模该对准增益轨迹：用控制电压直接评价与训练的新数据集](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-30-6e7624cec7/)

> 英文题目：*[Evaluating Dynamic Range Compressor Models Using Control\-Voltage Measurements: An Approach and Dataset](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-30-6e7624cec7/)*

标签：#数据集 #评测协议 #信号处理 #音频生成

评分：**7.8/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：数据集与基准 | 主任务：#音频生成 | 主方法：#评测协议

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_30.pdf)

👥 **作者与机构**

- Benjamin Thompson：机构信息未能从会议 PDF 纯文本可靠映射
- Michael Heilemann：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

动态范围压缩器建模的输入是立体声混音波形，输出是处理后波形与时变增益轨迹，难点在于硬件滤波、相移与噪声使波形反推增益成为病态逆问题，波形代理指标易受载波幅度加权干扰。本文先形式化波形L1与多分辨率短时能量作为代理指标的偏差机制，明确其对增益误差的加权与失真来源，接着采集SSL Logic FX G384的音频与控制电压配对数据并换算为分贝增益真值，为直接度量提供基准，然后用同一灰盒模型在三种损失下拟合，使代理损失能否还原控制轨迹得以检验。与已有仅含输入输出对的数据集相比，直接在增益域度量消除了载波与滤波噪声干扰，使行为误差可解释且与建模目标对齐。在10个30秒样本的同样本拟合评测设置下，L1代理训练模型的L1增益误差指标为0\.1493 dB，低于MSTE代理训练模型的L1增益误差指标0\.1615 dB。结论仅适用于10:1与固定释放等受限设置，尚未验证跨曲目泛化与AUTO可变释放建模。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://doi.org/10.60593/ur.d.31892026> → <https://rochester.figshare.com/articles/dataset/SSL_Bus_Compressor_Control_Voltage_Dataset/31892026> — 链接可访问（HTTP 202）
- 第三方资源：<https://thatcorp.com/datashts/202data.pdf> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 7. [从可微分训练到实时插件：用中间表示锁住反馈延迟网络的等价与稳定](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-61-943e0ebba5/)

> 英文题目：*[Compiling Differentiable Audio Graphs to Real\-Time DSP](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-61-943e0ebba5/)*

标签：#开源工具 #信号处理 #高效推理 #实时处理 #空间音频渲染

评分：**7.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.5/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前25% | 文档类型：系统技术报告 | 主任务：#空间音频渲染 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_61.pdf)

👥 **作者与机构**

- Facundo Franchino：机构信息未能从会议 PDF 纯文本可靠映射
- Sebastian Jiro Schlecht：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为PyTorch中训练好的可微音频图，输出为可在插件与嵌入式目标实时运行的FAUST程序，难点在于递归拓扑语义保真、参数化空间到音频参数还原以及任意用户调节下的稳定性。先由提取器遍历模型树并将偏置于参数化空间的参数序列化为框架无关的JSON中间表示，该表示携带拓扑与数值参数进入下一步。再由发射器接收该JSON表示并负责结构 lowering，将串并联与递归映射为FAUST组合算子并补偿隐式单采样延迟，通过环内写入与环外补偿还原精确环路周期与绝对到达时间，输出标准FAUST代码。最后由宏控制与证书层接收所生成代码并负责可用化封装，在生成代码上叠加混响时间与干湿比等稳定调节，签发前对发射后单精度参数执行小增益稳定性核验并拒绝不稳定构建。在单核Apple M2上48kHz基准下，32线网络的性能为90倍实时，高于64线网络的性能14倍实时。相对手工重写，该路径解耦前端遍历与后端生成并保留可重建原始权重，新叶类型只需新增发射器即可复用同一流程。结论适用边界限于线性时不变反馈延迟网络与散射延迟网络及整数延迟情形，分数延迟需舍入，非线性与时变扩展尚未验证。在现有硬件上编译插件经Schroeder积分验证衰减准确，重载延迟在毫秒级而模型重发射仅亚毫秒级，完整安装仍需数分钟编译。

🔗 **开源资源**

- 代码相关资源：<https://github.com/cucuwritescode/adac> — 链接可访问（HTTP 200）
- 代码相关资源：<https://adac.readthedocs.io/> → <https://adac.readthedocs.io/en/latest/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 8. [线性插值是瓶颈：用拉格朗日插值加切比雪夫逼近重做抗混叠积分](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-47-94898c0abc/)

> 英文题目：*[PolyADAA: Improving Aliasing Reduction in Memoryless Nonlinearities Using Lagrange Interpolation and Polynomial Approximation](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-47-94898c0abc/)*

标签：#开源工具 #信号处理 #高效推理 #音频修复

评分：**7.7/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频修复 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_47.pdf)

👥 **作者与机构**

- Leonardo Gabrielli：机构信息未能从会议 PDF 纯文本可靠映射
- Stefano Squartini：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

无记忆非线性将连续信号带宽展宽后在离散时间采样，混叠抑制需要在采样点间重建连续波形并做抗混叠滤波，线性插值重建误差已成为传统反导数抗混叠的性能瓶颈。该方法先以2阶或3阶拉格朗日插值由离散样本重建连续输入，其输出进入复合非线性求值环节得到离散余弦变换所需的节点值；再将复合函数在映射区间上展开为K阶第一类切比雪夫多项式并经离散余弦变换求系数；最后将系数与矩形或三角核预计算的切比雪夫矩加权求和得到当前采样输出。与原ADAA经换元只适用于线性斜坡的闭式积分不同，新机制把任意非线性化为多项式积分从而兼容高阶插值，切换核函数只需更换预计算矩而无需改动实时结构。在低于A4音高的测试条件下，PolyADAA查找表方法的SNR指标为120 dB，高于平凡方法的SNR指标92\.2 dB。该结论适用边界受限于稳态单正弦驱动的tanh与硬削波验证，尚未验证含状态系统与无限冲激响应核，低频三角核仍受数值噪声影响。推理开销主要来自每样本K\+1次非线性求值、拉格朗日插值计算量与长度2K快速傅里叶变换实现的离散余弦变换，查找表近似可大幅降低计算量但会引入可测噪声本底。

🔗 **开源资源**

- 代码相关资源：<https://github.com/LOGUNIVPM/PolyADAA> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/mborgerding/kissfft> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 9. [CLAP 音频嵌入里藏着混响、响度和音高吗：用轻量探针检验线性与非线性编码](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-19-402e7d9a71/)

> 英文题目：*[Probing Low\-Level Acoustic Attribute Encoding in CLAP Audio Embeddings](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-19-402e7d9a71/)*

标签：#统计分析 #模型比较 #可解释性 #音频理解

评分：**7.6/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频理解 | 主方法：#统计分析

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_19.pdf)

👥 **作者与机构**

- Hector Martel：机构信息未能从会议 PDF 纯文本可靠映射
- Joe Hennessy\-Priest：机构信息未能从会议 PDF 纯文本可靠映射
- Taemin Cho：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为冻结CLAP音频嵌入，输出为混响时间RT60、响度LUFS、频谱质心与相对音高的标量预测值，难点在于区分属性是线性可解还是需非线性解码，并排除内容与增强流程带来的伪相关。方法链先按属性独立施加混响、增益与音高扰动并计算真值，生成均衡回归数据以切断属性间协变。再用冻结对比语言音频预训练编码器输出512维嵌入作为探针唯一输入，使受控标签与嵌入表示衔接。然后训练线性、双层感知机与核岭回归三种容量递增探针，使线性权重定义特征轴而非线性探针提供性能上界，最后以平均绝对误差、决定系数与相关系数比较线性与非线性差距，并检验线性轴跨域余弦一致性与文本描述投影。与以往定性概念对齐或单域高层属性探测不同，本文以受控扰动加跨域探针分离嵌入结构与数据混杂，并揭示对数音高变换改变线性可解性。在VCTK\-Corpus测试集下，MLP探针的R2指标为0\.94，高于Linear探针的R2指标0\.92。结论适用边界受限于末层嵌入与合成鞋盒房间混响，音乐混音残留混响与关系型文本描述尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://doi.org/10.5281/zenodo.3338373> → <https://zenodo.org/records/3338373> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/LAION-AI/CLAP> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/csteinmetz1/pyloudnorm> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/DavidDiazGuerra/gpuRIR> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/pytorch/audio> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 10. [正则约束下把深度换精度：深层条件 LSTM 与听觉滤波损失补回建模质量](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-26-907891f790/)

> 英文题目：*[Deep Regularized RNNs for Virtual Analog](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-26-907891f790/)*

标签：#正则化 #RNN #音乐 #音频生成

评分：**7.6/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#RNN

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_26.pdf)

👥 **作者与机构**

- Valtteri Kallinen：机构信息未能从会议 PDF 纯文本可靠映射
- Lauri Juvela：机构信息未能从会议 PDF 纯文本可靠映射
- Thom Sherson：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

虚拟模拟需以干声吉他与贝斯演奏为输入实时生成经失真与压缩染色后的湿声输出，难点在于控制参数训练时静态采样而推理时连续变化，未约束循环网络在零输入下会自激产生可闻控制噪声。方法链先对长短期记忆网络施加门与隐矩阵约束并经重参数化强制满足渐近稳定条件，其输出的稳定隐动态直接作为深层堆叠的输入基础。接着将单层拼接调制扩展为逐层拼接的深层条件堆叠，用深度换宽度恢复受约束模型的容量并把各层条件特征送入对应循环层。最后用伽马通滤波器组对目标与预测间误差信号做听觉加权求和形成时频损失，以该感知目标驱动前两步模型训练并兼顾相位对齐与感知质量。相对已有平均绝对误差基线与无约束模型，该链以谱范数放宽与深度扩展加感知损失实现稳定性与精度的折中，实际意义是在抑制控制噪声的同时保持失真建模精度。在RAT数据集评测设置下，LSTM 4×64配置的GFB指标为\-45\.1 dB，低于LSTM∞4×64配置的GFB指标\-42\.4 dB。其结论适用边界受限于仅在RAT、DFZ与Boss CS\-3三类失真压缩单块及静态控制采样与客观指标下验证，压缩器上仍有差距且尚未验证主观听感与连续拧旋钮轨迹外推。成本方面原文以参数量估计计算量，指出参数量随宽度平方增长而随深度线性增长，深窄配置能以更少参数获得更低误差。

🔗 **开源资源**

- 代码相关资源：<https://codeberg.org/rantlivelintkale/dr-rnn-va> — 链接可访问（HTTP 200）
- 数据相关资源：<https://doi.org/10.5281/zenodo.20406285> → <https://zenodo.org/records/20406285> — 链接可访问（HTTP 200）
- 演示资源：<https://rantlivelintkale.codeberg.page/dr-rnn-va/> — 链接可访问（HTTP 200）
- 第三方资源：<https://doi.org/10.5281/zenodo.7970723> → <https://zenodo.org/records/7970723> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 11. [一个旋钮管住五种距离线索：把声源推远而不推散的耦合渲染器](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-57-6c4123badb/)

> 英文题目：*[A Perceptually Inspired Single Parameter Auditory Distance Renderer for Music Production](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-57-6c4123badb/)*

标签：#信号处理 #主观评测 #音乐 #空间音频渲染

评分：**7.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.4/1.5

排名：前25% | 文档类型：系统技术报告 | 主任务：#空间音频渲染 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_57.pdf)

👥 **作者与机构**

- Stefanos Biliousis：机构信息未能从会议 PDF 纯文本可靠映射
- Cumhur Erkut：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音乐制作需将多轨干声置于可信远近位置并输出立体声空间混音，但增益、混响发送、高频滚降与预延迟分散独立调节，极易产生线索冲突与不自然空间感。先将归一化控制d作为输入映射为1至20m物理距离r\(d\)，职责是为全部线索提供统一物理轴，输出连续距离值进入下一步映射。再将该距离值输入五组物理心理声学映射函数，职责是同步计算逆平方律增益、平方根湿声比例、高频搁架增益与拐点、预延迟及低频补偿，输出经平滑的目标参数并实现近处电平主导向远处混响频谱主导的切换。最后将平滑参数与干声一起送入并行干湿链，职责是经恒功率交叉混合与可选双耳外化层合成输出，使自动化扫动无拉链噪声。与分散手工混音的关键机制差异在于线索一致性由构造保证而非依赖工程师判断，单旋钮驱动五线索联动使可视可听的距离扫动成为可能。在共享三音源音乐场景下，耦合渲染器的MAE指标为7\.3，低于手工基线的MAE指标15\.3。结论适用边界限于受控音乐素材与耳机回放的相对排序，扬声器与真实房间外推尚未验证；推理开销在48kHz下无双耳时CPU负载为1\.5%至2\.5%，双耳开启时另有10\.7ms固定延迟。

🔗 **开源资源**

- 代码相关资源：<https://github.com/stefbil/distance-space> — 链接可访问（HTTP 200）
- 复现相关资源：<https://github.com/stefbil/distance-space> — 链接可访问（HTTP 200）
- 第三方资源：<https://juce.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.steinberg.net/press/2025/vst-3-8/> — 链接可访问（HTTP 200）
- 第三方资源：<https://sound.media.mit.edu/resources/KEMAR.html> — 链接可访问（HTTP 200）
- 第三方资源：<https://ccrma.stanford.edu/~jos/pasp/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 12. [先跟教师学一千小时再用真值纠错：两阶段和弦识别为何能超过教师](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-22-cd22c69f0c/)

> 英文题目：*[Enhancing Automatic Chord Recognition via Pseudo\-Labeling and Knowledge Distillation](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-22-cd22c69f0c/)*

标签：#知识蒸馏 #半监督学习 #音乐 #和弦识别

评分：**7.5/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前25% | 文档类型：方法研究 | 主任务：#和弦识别 | 主方法：#知识蒸馏

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_22.pdf)

👥 **作者与机构**

- Nghia Phan：机构信息未能从会议 PDF 纯文本可靠映射
- Rong Jin：机构信息未能从会议 PDF 纯文本可靠映射
- Gang Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Xiao Dong：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

自动和弦识别以音频恒Q变换特征为输入，输出逐帧和弦标签序列，难点在于对齐标注获取昂贵、公开标注集规模与多样性受限且大调与小调帧主导下稀有和弦质量识别困难。该流水线先用预训练双向变换器BTC教师对1000小时以上无标注音频以帧级最大后验生成硬伪标签，为学生提供大规模近似监督。随后轻量双编码器2E1D或BTC学生在仅伪标签上训练至收敛以继承教师分布，其收敛权重直接作为下一阶段持续学习的初始化起点。最后以该学生为起点在人工标注上做数据增量持续学习，并以选择性知识蒸馏锚定教师软分布以防灾难性遗忘并抑制标注噪声过拟合。与单轮混合真伪标签的已有半监督方法不同，解耦设计允许无标签时先行训练、有标签时增量适配而不重训教师，其实测意义在于教师权重可得而私有训练数据不可得时仍能迁移知识。在ground\-truth测试集评测设置下，2E1D\-All配置的Majmin指标为77\.29±1\.1，高于2E1D\-FMA短片段配置的Majmin指标74\.49±1\.2。稀有和弦提升集中但短片段伪标签边界抖动仍存，其适用边界受限于长时谐进行一致性与干净对齐标注的覆盖范围。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ptnghia-j/ChordMiniApp> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/ptnghia-j/ChordMini> — 链接可访问（HTTP 200）
- 模型相关资源：<https://github.com/ptnghia-j/ChordMini> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 13. [把板式混响学成可读模态：对角复数状态空间与矩阵铅笔初始化](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-03-2e04976ccf/)

> 英文题目：*[Diagonal Complex\-Valued State Space Models for System Identification and Modeling of Metal Plate Reverbs](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-03-2e04976ccf/)*

标签：#信号处理 #状态空间模型 #可解释性 #房间脉冲响应估计

评分：**7.4/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#房间脉冲响应估计 | 主方法：#状态空间模型

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_03.pdf)

👥 **作者与机构**

- Matthias Bittner：机构信息未能从会议 PDF 纯文本可靠映射
- Matthias Wess：机构信息未能从会议 PDF 纯文本可靠映射
- Dominik Dallinger：机构信息未能从会议 PDF 纯文本可靠映射
- Daniel Schnöll：机构信息未能从会议 PDF 纯文本可靠映射
- Axel Jantsch：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

金属板混响需从单通道脉冲输入重建长达1秒的密集指数衰减正弦叠加脉冲响应，模态密度高、衰减尺度差异大且相位敏感，黑盒网络难以给出可解释的频率与阻尼。该工作先将受限对角复数状态空间模型写成一阶复共振求和并取虚部，得到与并联二阶全极点模态滤波器严格等价的可微分结构，使学习到的特征值直接映射为模态频率、衰减率与增益。接着用矩阵束方法从目标脉冲响应预估计部分极点并拟合频率衰减多项式，再在20 Hz至10 kHz内对数均匀采样补足隐状态，从而为梯度优化提供物理合理的初值。最后以逐点L2损失对每条目标脉冲响应过拟合训练，并用并行扫描高效更新参数，上一阶段的初始化极点直接进入该优化阶段被精调为最终模态参数。与常规S5初始化相比，该机制把连续时间极点约束在稳定左半平面并保留单边谱先验，避免了高频初始化失配，因而同时改善合成拟合与频率衰减辨识。在50条合成板混响脉冲响应基准下，MP初始化模型的归一化L2误差指标为0\.004，低于S5初始化的归一化L2误差指标0\.034。该结论适用边界受限于线性合成脉冲响应的过拟合辨识，尚未验证真实钢板非线性、噪声鲁棒性与跨采样率泛化。原文未披露训练、推理或部署成本实测。

🔗 **开源资源**

- 数据相关资源：<https://github.com/LOGUNIVPM/1st-DAFx-Challenge> — 链接可访问（HTTP 200）
- 演示资源：<https://platereverb.github.io/platereverb/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 14. [用一块入门 FPGA 同时做鼓采样、效果器与 16 轨录音：并行与确定延迟如何压住成本](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-70-8dd4e42c76/)

> 英文题目：*[FPGA\-Enabled Real\-Time Audio Sampling, Processing, and Recording for an Electronic Drum Set](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-70-8dd4e42c76/)*

标签：#开源工具 #信号处理 #多通道 #实时处理 #音乐生成

评分：**7.3/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_70.pdf)

👥 **作者与机构**

- Matthew Taylor：机构信息未能从会议 PDF 纯文本可靠映射
- Mark Rau：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

电子鼓需同时完成最高16通道打击乐采样、实时效果处理与多轨录音，输入为打击触发与外部音频，输出为立体声监听与计算机端多轨文件，难点在于通用串行调度难以兼顾确定性低延迟与低成本录音。先从动态随机存取存储器读取16位采样并经多速率上采样与4:1下采样重建48 ksps固定采样率声源，输入为触发请求与变速采样，职责是抗混叠重建，输出为固定采样率音频流。再将该声源流送入可用跳线重排的延迟混响失真滤波与比特破碎五种效果链，输入为前一步声源流，职责是音色塑造，输出为处理后立体声。最后将处理立体声与原始声源共同经32样本以太网分组传输至计算机，输入为FPGA音频包，职责是以比例积分控制器维持半满环形缓冲并驱动FPGA端重采样抑制时钟漂移，输出为PipeWire落盘的多轨音频。与通用处理器串行调度和既有以太网音频传输相比，该设计以现场可编程门阵列硬件并行与确定性时序流水执行采样与效果，并以片上重采样闭环替代恒定速率发送以消除累积欠载过载。在以太网音频子系统延迟评测下，512样本环形缓冲的延迟指标为5\.33 ms，高于32样本以太网负载缓冲的延迟指标667 µs。该结论适用边界限于所用开发板与固定效果配置，物理建模合成扩展的资源与稳定性尚未验证，系统硬件成本低于500美元且采样处理通路延迟最大约为1\.33 ms。

🔗 **开源资源**

- 代码相关资源：<https://github.com/MatthewATaylor/DigiDrum3000/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/sinshu/freeverb> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 15. [用极值点间距决定拼接长短的关键帧时间拉伸](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-21-16a642d37f/)

> 英文题目：*[Keyframe Audio via Extrema Sampling](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-21-16a642d37f/)*

标签：#信号处理 #高效推理 #端侧运行 #流式处理 #音频生成

评分：**7.3/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_21.pdf)

👥 **作者与机构**

- Matthew Nielsen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

时间拉伸需在独立改变时长时保持音高与瞬态完整，低功耗嵌入式平台难以承担相位声码器与波形相似重叠相加的频域变换与相关搜索开销。针对该输入输出，该方法先以四抽头B样条导数过零加负六十分贝阈值检测提取非均匀关键帧并做亚样本精化，再以零切矢非均匀三次Hermite样条重建连续波形，最后以参考与播放双游标距离驱动的可变leash拼接实现变速播放。与固定窗长重叠相加不同，其以极值密度同时决定何时拼接与拼接多长，稀疏处长淡化保持连贯而瞬态处短淡化避免时域模糊，从而逐样本输出且无块延迟。在5个片段三种拉伸因子的webMUSHRA评测下，Bongo片段上关键帧方法的MUSHRA分数为51\.1，低于OLA的MUSHRA分数68\.3。直通保真测试亦显示统一重放存在平均约3\.08dB频谱对比度损失与三次样条混叠失真，歌声与钟琴类细腻素材劣化明显。其适用边界受限于人声与高频低电平内容及长静音后瞬态导致的超长拼接重复，0\.5倍压缩时瞬态保持亦弱于基线。推理开销上离线播放每样本约34周期而实时分析加播放约61周期，显著低于相位声码器与快速傅里叶辅助方法的数百至数千周期，且在480MHz微控制器硬件上逐样本运行无帧缓冲延迟。

🔗 **开源资源**

- 代码相关资源：<https://github.com/heavylight-industries/> — 链接可访问（HTTP 200）
- 演示资源：<https://github.com/heavylight-industries/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 16. [实测琴体约束显式非线性弦：65 把古典吉他的可复算合成链](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-40-07de707c9d/)

> 英文题目：*[Measurement\-Informed Nonlinear Modal Synthesis of 65 Classical Guitars](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-40-07de707c9d/)*

标签：#数据集 #信号处理 #音乐 #音乐生成

评分：**7.3/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_40.pdf)

👥 **作者与机构**

- Michele Ducceschi：机构信息未能从会议 PDF 纯文本可靠映射
- Riccardo Russo：机构信息未能从会议 PDF 纯文本可靠映射
- Craig J\. Webb：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为拨弦激励与琴桥处锤击实测脉冲响应，输出为携带琴体共振的立体声拨弦音，难点在于大幅度几何非线性同时引发音高滑动与频谱增生，且每把琴的共振必须来自测量并保持长时间稳定高效合成。方法链第一步由锤击力与加速度计和麦克风通道估计频响函数并拟合桥导纳与桥到空气辐射模态参数，为合成提供乐器专属滤波器组。第二步将几何精确横向势做标量辅助变量二次化并引入伺服修正与非负约束，把非线性势转为单个标量未知量，使耦合系统在未知量上保持线性。第三步用精确离散模态以两次顺序Sherman\-Morrison秩一更新显式推进弦桥耦合状态，再由琴桥力驱动双侧辐射混响器与交感弦组生成立体声。与Kirchhoff\-Carrier平均应变及隐式非线性求解器相比，该机制保留逐点斜率依赖的丰富互调，同时将每步求解降为线性对角系统加两次显式修正，达到与纯线性格式可比的每步线性计算复杂度。在非线性频带截断设置下，截断方法的模式数指标为60，低于全量方法的模式数指标200。结论适用边界受限于单弦拨奏与桥耦合线性琴体假设，尚未验证同时多弦耦合、打品与滑弦等外推情形。单个五秒音符在标准工作站硬件上合成仅需0\.1至0\.5秒，计算量主要来自辐射滤波器组，全库约6240个音符数小时内生成。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Nemus-Project/65_modelled_guitars> — 链接可访问（HTTP 200）
- 演示资源：<https://github.com/Nemus-Project/65_modelled_guitars> — 链接可访问（HTTP 200）
- 第三方资源：<https://nemusproject.eu/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 17. [孤立很快不等于混音中不爆音：苹果芯片上神经音频推理的竞争实测](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-16-e5822c79be/)

> 英文题目：*[Real\-Time Neural Audio on Apple Silicon: Benchmarking Inference Frameworks Under Realistic DAW Contention](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-16-e5822c79be/)*

标签：#基准测试 #基准设计 #高效推理 #实时处理 #音频生成

评分：**7.2/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 1.2/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频生成 | 主方法：#基准设计

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_16.pdf)

👥 **作者与机构**

- Dharanipathi Rathna Kumar Balasubramaniam：机构信息未能从会议 PDF 纯文本可靠映射
- Joseph Timoney：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该研究处理数字音频工作站同步回调内神经音频插件的实时推理，输入为48kHz单声道音频缓冲与同步插件图负载，输出为满足1\.3ms至2\.7ms截止的连续音频，难点在于与数十个传统效果器共享中央处理器核心、缓存与内存带宽时尾延迟剧增易致欠载。先以长短期记忆网络、时序卷积网络与WaveNet三类九种规模拓扑配置为输入，负责构造随机权重模型以固定参数量决定推理负载，输出负载受控的待测模型集合。再将上一步输出的待测模型集合送入七种后端，负责完成缓冲级有状态单次框架调用推理并经实时消毒剂校验实时安全，输出可直接装载的后端模型实现。最后将上一步输出的后端模型实现装入基于Tracktion Engine搭建的混音竞争、实例扩展与串行深度三维会话，以Core Audio回调请求为输入施加真实驱动调度与共存压力，输出回调利用率分位数与硬件及推理欠载计数以判定是否违反截止。与仅报告孤立吞吐的已有基准相比，该工作引入真实负载下尾延迟与截止违反判定，揭示了调度抖动与缓存干扰主导失效而非单纯算力不足。在缓冲128采样48kHz基准下，BNNSGraph的RTF指标为0\.022，低于RTNeural\-XSIMD的RTF指标0\.211。结论适用边界受限于单台M3的macOS Tahoe单声道BlackHole虚拟驱动与轻量串行链测试，立体声分层路由与多代芯片外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/GuitarML/GuitarML> — 链接可访问（HTTP 200）
- 第三方资源：<https://onnxruntime.ai/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 18. [时变房间里用音乐做激励：可微分参数均衡为何要换掉时域误差](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-48-550fa52e56/)

> 英文题目：*[A DDSP Framework for Adaptive Room Equalization](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-48-550fa52e56/)*

标签：#开源工具 #自适应滤波 #音乐 #音频修复

评分：**7.2/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频修复 | 主方法：#自适应滤波

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_48.pdf)

👥 **作者与机构**

- Fernando Marcos Macías：机构信息未能从会议 PDF 纯文本可靠映射
- María Pilar Daza Llin：机构信息未能从会议 PDF 纯文本可靠映射
- Mateo Cámara：机构信息未能从会议 PDF 纯文本可靠映射
- José Luis Blanco Murillo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

自适应房间均衡 Adaptive Room Equalization / ARE 需在音乐激励与时变房间脉冲响应 Room Impulse Response / RIR 下把扬声器\-房间\-麦克风 Loudspeaker\-Enclosure\-Microphone / LEM 系统校准到目标响应，经典时域自适应难以跟踪非平稳信号。所提框架先以可微参量均衡器将参数映射为频响并与输入频谱相乘，再经由在线估计的 LEM 响应传播到测量输出并计算频域均方误差 Frequency\-Domain Mean Squared Error / FD\-MSE，随后经由估计响应的转置卷积回传梯度并用一阶或高阶优化器逐帧更新参量。相对传统有限脉冲响应 Finite Impulse Response / FIR 结构，该设计用少量可解释双二阶节约束解空间，并把滤波器\-x结构统一为自动微分 Automatic Differentiation / AD 的梯度流。在 SoundCam 会议室实测 RIR 与 10 首 MedleyDB 音乐构成的最坏移动听众场景下，相对未均衡房间，系统距离降低 70%且梅尔谱距离 Mel\-Spectral Distance / MSD 降低 13%。结论限于受控线性仿真与特定估计平滑策略，未验证人群噪声、低信噪比、换能器非线性与真实闭环时延下的外推能力。一阶方法单帧计算约 20 ms，高阶牛顿类方法约 140 ms，均在所用 GPU 与 170 ms 帧长下给出，未披露大规模训练成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/fermarcosmac/DDSP-adaptive-EQ-26.git> → <https://github.com/fermarcosmac/DDSP-adaptive-EQ-26> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/ewan-xu/pyaec> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 19. [表现力从哪里来：速度、踏板与节拍标注谁真正改变了钢琴生成](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-64-b4f3a50134/)

> 英文题目：*[Evaluating Tokenization Strategies for Expressive Classical Piano Performance Generation](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-64-b4f3a50134/)*

标签：#数据增强 #Transformer #预训练 #音乐 #符号音乐生成

评分：**7.1/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#符号音乐生成 | 主方法：#Transformer

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_64.pdf)

👥 **作者与机构**

- Qingyang Lyu：机构信息未能从会议 PDF 纯文本可靠映射
- Brian Cruz：机构信息未能从会议 PDF 纯文本可靠映射
- Jeremy Wagner：机构信息未能从会议 PDF 纯文本可靠映射
- Carmine\-Emanuele Cella：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务以作曲家标识与体裁标识为输入，生成富有表现力的古典钢琴演奏符号序列，输出为包含时间、时值、音高、力度、拍点与踏板状态的事件流，难点在于揉弦式速度偏移、力度塑造与踏板交叠衰减无法被固定小节网格量化。方法链第一步用前缀分层词表把连续时间、时值、音高、力度、拍点与踏板离散为统一编号空间，时间以每秒100刻度离散并支持六种模式截断复用。第二步以24层解码器自回归建模事件依赖，并用交叉注意力注入由作曲家与体裁嵌入经双层感知机投影得到的记忆向量，上一步的词表输出直接作为下一步的自回归输入序列。第三步先在MAESTRO上以Note\+Vel\+Pedal模式预训练学习音高、节奏、力度与踏板结构，再到ASAP上按六种模式分别微调以学习拍点感知的表现力。与基于小节与拍细分的REMI相比，该设计保留绝对时间分辨率并允许大词表向小词表截断复用，其实质意义在于联合保留力度攻击与踏板延音交叠的建模能力。在ASAP测试集下，Note\+Vel\+Pedal的FAD分数为1\.76，低于Note基线的FAD分数3\.10。该结论适用边界仅限于经FluidSynth渲染音频的分布相似性比较，尚未验证真实听感偏好与跨音色泛化。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://archives.ismir.net/ismir2020/paper/000127.pdf> — 链接可访问（HTTP 200）
- 第三方资源：<https://openreview.net/forum?id=EBNJ33Fcrl> → <https://openreview.net/challenge?redirect=%2Fforum%3Fid%3DEBNJ33Fcrl> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 20. [把拾音位置选择推迟到混音阶段：64 通道分弦多点吉他拾音系统](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-73-17b7effcd0/)

> 英文题目：*[PolyMap: A 64\-Channel Polyphonic Guitar Pickup System](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-73-17b7effcd0/)*

标签：#开源工具 #信号处理 #多通道 #音乐 #音乐源分离

评分：**7.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐源分离 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_73.pdf)

👥 **作者与机构**

- David Wieland：机构信息未能从会议 PDF 纯文本可靠映射
- Jonas Roth：机构信息未能从会议 PDF 纯文本可靠映射
- Christoph Studer：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作解决电吉他拾音位置在演奏瞬间即被固化的问题，输入为八根琴弦沿琴桥到琴颈方向的机械振动，输出为可在录音软件中独立监听录制的多路数字音频，难点在于微型单元须只感应正上方琴弦且保持多位置间精确时间对齐，同时避免多线模拟输出带来的集成复杂性。先由每弦多个有源拾音单元分区感应各自正上方琴弦振动并经缓冲与限带输出多路模拟信号，再将这些模拟信号送入多片同步采样的转换器进行数字化以输出时间对齐的多通道数字流，最后将该数字流送入现场可编程门阵列组装为单根同轴外送的多通道音频数字接口流并反向供电，再由宿主侧商用接口接入插件做选择混音与滤波降噪。相对跨多弦单点输出的传统拾音器和仅单点分弦的六声道拾音器，该系统同时保留弦间独立性和沿弦位置差异，把位置选择推迟到编辑阶段并支持声像扩展与分弦效果链。插件另以手动模式与虚拟拾音模式实现电平反相声像与位置插值混合，并用谐振带通重塑音色以抑制高频嘶声。原文未提供可核对的关键定量结果。结论的适用边界受限于所展示定制八弦琴与特定录音软件工程，尚未验证其他琴型舞台电磁环境与长期演奏稳定性，部署中宿主缓冲带来主要延迟而琴内数字化与接口转换仅占小部分硬件延迟。

🔗 **开源资源**

- 代码相关资源：<https://github.com/IIP-Group/polymap> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 21. [边界决定音高：从矩形板到克莱因瓶的模态推导与混响合成](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-11-47c8b70ed0/)

> 英文题目：*[Modal Structure of Plate Boundaries and Klein Bottle Reverberation](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-11-47c8b70ed0/)*

标签：#软件工具 #形式化分析 #空间音频 #音频生成

评分：**7.1/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 1.5/1.5 | 可复现 0.4/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：理论研究 | 主任务：#音频生成 | 主方法：#形式化分析

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_11.pdf)

👥 **作者与机构**

- Jin Woo Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Mark Rau：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为矩形基本域尺寸\(L\_x,L\_y\)、声速\(c\)与边界辨识类型，输出为二维紧流形上压力场模态形状\(\\phi\_\{mn\}\)与特征频率\(f\_\{mn\}\)，难点在于不可定向拓扑无法嵌入三维欧氏空间且边界翻转改变驻波约束。方法先将狄利克雷、诺伊曼、周期与相位共轭周期边界转化为平面铺砌规则与商空间等价关系，得到容许波矢格点。接着由倒格子与亥姆霍兹圆交集筛选波矢并叠加平面波构造解析模态，其输出直接作为数值验证的对照基准。最后在基本域上运行带鬼单元的均匀网格有限差分时域仿真，对比频谱峰值与简并子空间格林函数幅度以验证频率与模态。与可定向矩形和环面镜像反射相比，关键机制差异是用带方向翻转的辨识代替纯平移或反射，从而产生莫比乌斯奇偶约束与克莱因瓶半整数相移等选择定则，使共谱结构具有不同模态并可听区分。在均匀网格有限差分验证的评测设置下，克莱因瓶的模态置信准则指标为0\.932，高于环面的模态置信准则指标0\.834。结论适用边界仅为均匀介质下理想平面波导的线性波动，曲率、非均匀声速、三维腔体与主观混响质量尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://kleinreverb.github.io/> — 链接可访问（HTTP 200）
- 演示资源：<https://kleinreverb.github.io/> — 链接可访问（HTTP 200）
- 复现相关资源：<https://kleinreverb.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 22. [不用逐个找峰也能建模琴桥导纳：用脉冲响应直接算出状态空间](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-41-bff3fe8e9f/)

> 英文题目：*[Eigensystem Realization of Violin Bridge Admittances](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-41-bff3fe8e9f/)*

标签：#状态空间模型 #高效推理 #音乐 #音乐生成

评分：**7.1/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐生成 | 主方法：#状态空间模型

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_41.pdf)

👥 **作者与机构**

- Riccardo Giampiccolo：机构信息未能从会议 PDF 纯文本可靠映射
- Alessandro Ilic Mezza：机构信息未能从会议 PDF 纯文本可靠映射
- Raffaele Malvermi：机构信息未能从会议 PDF 纯文本可靠映射
- Mirco Pezzoli：机构信息未能从会议 PDF 纯文本可靠映射
- Alberto Bernardini：机构信息未能从会议 PDF 纯文本可靠映射
- Fabio Antonacci：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

小提琴琴码导纳建模需从锤击力到速度脉冲响应中恢复紧凑可合成的降阶共振模型，以支撑静音小提琴与乐器虚拟化，而高模态密度与测量噪声使传统多步模态拟合脆弱。本文先对多次平均后的脉冲响应做最小相位化并裁剪有效段，再由马尔可夫参数构造汉克尔矩阵与平移矩阵并做奇异值分解截断定阶，接着由加权双边投影解析恢复状态矩阵与输入输出向量，并经特征分解转为对角模态形用于合成。与先做频率弯折自回归极点估计再最小二乘求增益的二零二一年方法不同，该方法以一次代数分解统一完成阶数选择与参数估计，避免弯折系数启发式。与峰值初始化加对数幅度非线性优化的二零一三年方法不同，该方法无需峰值检测与半功率带宽初始化及约束优化，降低启发式依赖并保持指数衰减模态和的物理可解释性。在六把小提琴桥导纳数据集评测下，ERA在小提琴ƒ1上的模型阶数指标为48，低于Maestre et al\.（2021）的模型阶数指标50。该结论适用边界受限于单点单轴琴码导纳的同序列重建与能量衰减包络匹配，尚未验证听感、实时合成稳定性、跨琴泛化与方向性辐射。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://museodelviolino.org/en/concorso-triennale-2024/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 23. [九成权重归零仍能弹：稀疏 WaveNet 音箱如何挤进 iPhone 中央处理器](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-67-9459f1d160/)

> 英文题目：*[WaveNet\-Style Guitar Amplifier Model Pruning for Real\-Time iOS Deployment](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-67-9459f1d160/)*

标签：#模型剪枝 #端侧运行 #实时处理 #音频生成

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频生成 | 主方法：#模型剪枝

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_67.pdf)

👥 **作者与机构**

- Ryota Sato：机构信息未能从会议 PDF 纯文本可靠映射
- Eli Silverstein：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文面向吉他放大器虚拟模拟中从原始吉他干声波形\(x\[n\]\)到失真染色波形\(\\hat\{y\}\[n\]\)的波形到波形映射，实际难点在于捕获长时依赖所需的扩张卷积感受野在手机端算力下难以实时运行。方法链第一步训练因果扩张卷积残差网络学习输入到失真输出映射并以预加重均方误差优化，第二步在训练中按指数调度渐进更新二值掩码实现迭代局部幅度剪枝以适应稀疏。第三步将保留非零权重导出为紧凑缓存友好布局的手写稀疏CPU推理引擎并封装为交互应用完成整机验证，上一步的稀疏掩码直接决定下一步只遍历非零权重的计算路径。与依赖稠密推理库的已有方案相比，关键机制差异在于训练期适应稀疏掩码与推理期只遍历非零权重，从而把非结构化稀疏直接转化为计算量下降。在iPhone 16 Pro上256样本块大小的实时评测下，90%剪枝模型的RTF指标为约0\.6，低于稠密模型的RTF指标高于1的不可实时水平。该结果的适用边界受限于所采四类设备与有限失真范围，长混响尾音超出感受野时误差增大且与输入无关的噪声无法重建。稀疏引擎的推理开销在默认块大小下仅约5\.3毫秒延迟且混响约占3%计算量，尚未验证更大失真与跨代硬件的外推性能。

🔗 **开源资源**

- 代码相关资源：<https://github.com/ryos17/wavenet-imp> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 24. [把同步后的波形算成频谱搬移：加法合成做无混叠振荡器同步](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-49-6ba26843f2/)

> 英文题目：*[Alias\-Free Oscillator Synchronization via Additive Synthesis](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-49-6ba26843f2/)*

标签：#信号处理 #实时处理 #音乐 #音乐生成

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_49.pdf)

👥 **作者与机构**

- Jonas Roth：机构信息未能从会议 PDF 纯文本可靠映射
- Domenic Keller：机构信息未能从会议 PDF 纯文本可靠映射
- Oscar Castañeda：机构信息未能从会议 PDF 纯文本可靠映射
- Christoph Studer：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

振荡器同步的输入为已带限跟随波形的有限傅里叶系数与周期比P，输出为同步后带限波形的傅里叶系数与96kHz时域音频，直接时域硬复位的不连续点会产生严重混叠，难点在于不修复时域缺口而直接求理想同步波形的带限表示。方法链第一步为预旋转，将跟随波形时移至对称积分窗并按公式旋转复系数与实部虚部，为变周期积分做对齐，其输出系数直接进入第二步。第二步为谱重采样，以sinc核与versinc核的线性P求和映射将跟随周期上的系数变换到主导周期或二倍主导周期上，分别得到硬同步、镜像同步与脉冲同步的系数，其输出系数直接进入第三步。第三步为加法合成，仅累加奈奎斯特频率以下谐波并经I2S输出，复用同一重采样引擎与同一振荡器实现三种模式。在软件基准测试设置下，锯齿波谱变换高负载的计算量指标为5\.8ms，高于锯齿波谱变换低负载的计算量指标2\.7ms。与已有方法仅做硬复位或依赖波表预滤波不同，该路线以显式谱变换代替时域复位，故支持任意周期波形与反射、静音等复位变体。其适用边界是输入必须已带限且P\<1时依赖缺失高次系数会导致精度下滑，整数P对应简单谐波重映射而精度较高。硬件上专用电路为TSMC65nm工艺6mm2单声道设计，N由1024降至512并以24位数据通路运行，时钟满足fclk为2048倍音频采样率以支撑96kHz实时合成且延迟低于五个音频采样。

🔗 **开源资源**

- 代码相关资源：<https://github.com/IIP-Group/hasy-python> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 25. [在真实 DAW 里批量渲染效果图：WildFX 如何把插件链变成可学习数据](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-56-408a419bcc/)

> 英文题目：*[WildFX: A DAW\-Powered Pipeline for In\-the\-Wild Audio FX Graph Modeling](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-56-408a419bcc/)*

标签：#数据集 #开源工具 #数据集构建 #音乐 #音频理解

评分：**7.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.6/1 | 影响力 0.9/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.3/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频理解 | 主方法：#数据集构建

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_56.pdf)

👥 **作者与机构**

- Qihui Yang：机构信息未能从会议 PDF 纯文本可靠映射
- Taylor Berg\-Kirkpatrick：机构信息未能从会议 PDF 纯文本可靠映射
- Julian McAuley：机构信息未能从会议 PDF 纯文本可靠映射
- Zachary Novack：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作建模多轨干声与效果器图规格到数字音频工作站渲染混音的映射，输入为乐器分轨、插件集合与路由增益约束，输出为混音波形及产生它的图结构、插件参数与增益标注，难点在于商用插件行为异构、路由含发送与侧链易成环且缺乏成对标注数据。首先以项目级YAML描述链拓扑与路由增益、以插件级JSON描述参数空间与候选预设并做无环与通道合法性校验。其校验后元数据进入按复杂度与链数采样的有向无环图生成器，生成器的分层任务输出再进入容器内无头REAPER批量渲染与波形、压缩音频与异构图导出。与pedalboard与DawDreamer等程序化宿主方案的关键机制差异在于保留原生数字音频工作站渲染与侧链同步、分频分支的依赖正确调度，因而更接近野外混音行为并支持可学习的图标签导出。在Slakh2100衍生的深浅盲图估计评测设置下，Deep加Decoding条件的PT Loss指标为2\.927，高于Shallow加Autoencoding条件的PT Loss指标2\.335。该结论受限于五插件原理验证库与中小规模合成工程，尚未验证大规模商业插件生态与人声主导混音的外推，单工程渲染延迟量级为浅层12秒与深层15秒。

🔗 **开源资源**

- 代码相关资源：<https://github.com/IsaacYQH/WildFX> — 链接可访问（HTTP 200）
- 第三方资源：<https://riffusion.com/about> → <https://www.flowmusic.app/> — 链接可访问（HTTP 200）
- 第三方资源：<https://ieeexplore.ieee.org/document/10096581> — 链接可访问（HTTP 202）
- 第三方资源：<https://doi.org/10.1145/368996.369025> → <https://dl.acm.org/doi/10.1145/368996.369025> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 26. [多轮修音不推倒重来：用大模型定方向、用听觉优化守住上一轮](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-74-e70676b053/)

> 英文题目：*[InstructFX2FX: A Multi\-Turn Text\-to\-Effect System for Sequential Audio Effect Refinement](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-74-e70676b053/)*

标签：#测试时自适应 #大语言模型 #音乐 #音频生成

评分：**6.9/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频生成 | 主方法：#测试时自适应

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_74.pdf)

👥 **作者与机构**

- Song\-Ze Yu：机构信息未能从会议 PDF 纯文本可靠映射
- Milan Liessens Dujardin：机构信息未能从会议 PDF 纯文本可靠映射
- Yuxuan Cai：机构信息未能从会议 PDF 纯文本可靠映射
- Wantong Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Brian Cruz：机构信息未能从会议 PDF 纯文本可靠映射
- Jeremy Wagner：机构信息未能从会议 PDF 纯文本可靠映射
- Carmine\-Emanuele Cella：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

顺序音效精修以干声、当前效果链与参数状态及历史指令加新自然语言指令为输入，输出更新后的链路与参数，难点在于新指令须相对当前声音解释并累积保留既有音色意图而非从零重做。大语言模型规划器先据会话历史选择效果器并给出合理初始参数，其输出进入路由模块判定复用、新增或联合精修以维持会话状态。随后CLAP引导优化沿语义方向微调可微参数并以定向目标拉近新指令、远离负锚点，系统保存优化轨迹快照并以滑杆交由用户试听定强度。与单轮独立映射文本到效果的方法不同，该混合机制让规划提供起点、听觉校准负责渐进修正，避免重提示扰动无关参数并保留前序指令效果。在SocialFX均衡器词对顺序评测下，InstructFX2FX的DSP\-feature MMD指标为0\.558，低于LLM\+LLM initialize\-then\-reprompt基线的DSP\-feature MMD指标0\.781。轨迹分析显示面向新目标的MMD下降时面向前序词的MMD并未上升，体现向新目标靠近且不丢弃历史的效果。结论适用边界受限于均衡器词对与钢琴小提琴干声验证，对复杂非可微效果与主观偏好的外推尚未验证，且每轮交互优化需要数秒延迟带来推理开销。

🔗 **开源资源**

- 代码相关资源：<https://github.com/vaclisinc/InstructFX2FX> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 27. [多声源共享房间参数时：频谱变准了，混响尾巴为何更难对齐](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-07-66c6af75b4/)

> 英文题目：*[Multi\-Source Extension and Hyperparameter Optimization of the DiffRIR Framework for Room Impulse Response Synthesis](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-07-66c6af75b4/)*

标签：#数据增强 #多任务学习 #鲁棒性 #麦克风阵列 #房间脉冲响应估计

评分：**6.9/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#房间脉冲响应估计 | 主方法：#多任务学习

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_07.pdf)

👥 **作者与机构**

- Luka Fehrmann：机构信息未能从会议 PDF 纯文本可靠映射
- Mason L\. Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Martin Rumori：机构信息未能从会议 PDF 纯文本可靠映射
- Peter Plessas：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

房间脉冲响应合成需从稀疏测量预测任意源\-接收位置波形，难点是早期反射对几何敏感与晚期混响需统计建模难以兼顾。该方法先以可微镜像源法建模早期镜面反射并学习源指向性与表面反射系数，输出确定性早期反射波形。再以空间不变残差张量建模晚期混响，并以可学习样条权重融合前一步早期输出与残差形成混合脉冲响应。最后用多尺度对数谱损失联合优化共享物理参数，使误差回传更新反射系数与残差。与单源DiffRIR相比，关键差异是多源联合训练迫使同一套环境参数同时解释多个分布式几何，形成多任务约束与空间熵增广，促使模型解耦共享材质与源相关几何伪影。在Zhao等人数据库的评测设置下，多源独立方法的MAG指标为2\.10，低于单源基线的MAG指标2\.31。学习率优化至3×10−2后模型快速收敛，训练成本降至原基线约1000轮的23%，缓解了大规模声学建模的迭代瓶颈。但多源共享晚期各向同性残差存在容量瓶颈，时间精度略有损失，其结论适用边界受限于鞋盒房与稀疏采样条件，尚未验证跨房泛化与主观听感。

🔗 **开源资源**

- 代码相关资源：<https://github.com/maswang32/hearinganythinganywhere/> — 链接可访问（HTTP 200）
- 数据相关资源：<https://doi.org/10.5281/zenodo.11195833> → <https://zenodo.org/records/11195833> — 链接可访问（HTTP 200）
- 数据相关资源：<https://doi.org/10.26195/0wx8-v473> → <https://data.research.uts.edu.au/object?id=arcp%3A%2F%2Fname%2Cuts_public_data_repo%2Ffad2f4b0c03d11ec91ce05dbccc55a63&_crateId=arcp%3A%2F%2Fname%2Cuts_public_data_repo%2Ffad2f4b0c03d11ec91ce05dbccc55a63> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 28. [把镜像计数折成格点体积：高维房间脉冲响应的几何卷积加速](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-12-7aa399aafc/)

> 英文题目：*[Gauss Circle Lattices with Geometric Convolutions for Synthesizing High Dimensional Image\-Source Room Impulse Responses](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-12-7aa399aafc/)*

标签：#开源工具 #信号处理 #高效推理 #房间脉冲响应估计

评分：**6.9/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#房间脉冲响应估计 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_12.pdf)

👥 **作者与机构**

- Yuancheng Luo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

矩形房间的房间脉冲响应合成需枚举随距离呈多项式增长的镜像源，直接积分在高维不可行且晚期混响常被截断。本文先将整数坐标下单位房间的镜像源计数归约为高斯圆问题并建立跨维度递推，再引入源与接收机平移、非对称求和界与复反射加权得到体积函数，接着用快速傅里叶变换实现几何卷积并经前向差分或逆插值恢复响应。上一步递推输出的低维子解与记忆化查找表进入下一步卷积复用，前向差分得到的时域包络再进入逆变换与频变反射组装，前后衔接形成维度线性代价链路。与逐源追踪不同，该方法按球壳聚合贡献并复用低维结果，因而维度增长呈线性而非指数代价，并提升高维模态密度与回声密度。在T为0\.5秒的评测设置下，加倍坐标缩放因子后的逆几何卷积方法的归一化均方误差指标低于式3参考镜像源传递函数的归一化均方误差指标约12 dB，同时运行开销增长至4倍以上。高维六维算例显示晚期能量占比与回声密度快速收敛，频变反射组装可控制高频衰减并保持平滑尾部。该结论适用边界仅为整数网格房间、全向换能器与角度无关反射，指向性、双耳线索与连续运动声源尚未验证，且坐标加密会使查找表与重建计算量快速上升并增大推理开销。

🔗 **开源资源**

- 代码相关资源：<https://github.com/yluo1/GCP-ISM> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 29. [椰壳共鸣的两根丝弦如何被算出声音：耶胡的刚性弦、弹塑性弓毛与模态琴桥](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-43-26e44c3597/)

> 英文题目：*[Physical Model of the Chinese Yehu for Sound Synthesis](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-43-26e44c3597/)*

标签：#信号处理 #实时处理 #音乐 #音乐生成

评分：**6.9/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_43.pdf)

👥 **作者与机构**

- Zhen Zheng：机构信息未能从会议 PDF 纯文本可靠映射
- Champ Darabundit：机构信息未能从会议 PDF 纯文本可靠映射
- Gary Scavone：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

耶胡合成需以弓毛运动与手指按弦为输入生成经椰壳琴体辐射的音频输出，难点在于丝弦刚度与损耗、弓弦弹塑性摩擦、经琴码双弦强耦合与无指板按弦碰撞须同时稳定求解。该工作先以刚性弦偏微分方程承载三类作用力并做有限差分能量平衡离散，再以能量二次化非迭代求解手指碰撞并更新弦与手指位移。接着以模态质量弹簧阻尼组描述琴码导纳并刚性约束求解双弦耦合力，最后以弹塑性刷毛模型迭代求解弓弦摩擦并经并联二阶滤波器组施加辐射特性。与静态摩擦曲线或纯波导反射建模相比，关键差异在于刷毛弹塑性迟滞加毛发弹性与非迭代碰撞的组合保证了大范围手势下的无条件耗散稳定。在44\.1kHz采样仿真任务下，20秒输入的计算时间指标为2\.95 seconds，低于30秒输入的计算时间指标4\.5 seconds。该结论适用边界受限于单弓单弦演奏与固定琴体线性辐射假设，尚未验证多指按弦、张力调制揉弦与听感质量的跨乐器外推。推理开销在2020款M1 MacBook Pro硬件上约6\.6倍实时，10秒仿真能量偏差维持在10−15量级。

🔗 **开源资源**

- 代码相关资源：<https://yehudafx26.github.io/> — 链接可访问（HTTP 200）
- 演示资源：<https://yehudafx26.github.io/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 30. [先数清有多少个模态，再去校准每个模态：密集板混响的计数优先估计](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-90-ae6a495f35/)

> 英文题目：*[Band\-Count Dense Modal Estimation with Fixed\-Frequency Differentiable Resonator Refinement ★](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-90-ae6a495f35/)*

标签：#集成学习 #信号处理 #模型比较 #房间脉冲响应估计

评分：**6.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#房间脉冲响应估计 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_90.pdf)

👥 **作者与机构**

- Minhui Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Joshua Reiss：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务输入为单条板混响脉冲响应，输出为包含频率、衰减率、增益与总数的稠密模态集合，难点在于数千个弱模态与重叠模态难以被稀疏峰值检测召回。方法链首先以固定372维描述子提取统计特征并由极端随机树回归器预测四个频带的模态数量，其输出计数经有界取整求和决定集合基数。随后确定性初始化按带计数铺设稠密线性频率网格，并由能量衰减斜率与插值频谱给出衰减与增益初值。最后可微二阶谐振器组在频率固定下以八倍有界乘性因子对衰减与增益做80步校准，保留最低损失迭代结果。与峰值检测加局部拟合相比，关键差异在于用学习到的带密度先验决定可变结构基数而非依赖局部显著性，使严重欠计数得以纠正并保留连续参数的可解释精修。在150响应计数验证集下，ExtraTrees的Band MAE为67\.64，低于随机森林基线的Band MAE75\.11。该结论适用边界受限于同族仿真器生成的小规模自生成验证集与本地贪心单调匹配评估，频率网格错位无法被当前精修纠正，尚未验证官方隐藏标签与真实录音外推。推理开销在无GPU加速的MacBook Pro硬件上平均每条响应精修耗时6\.51秒，16条发布响应端到端耗时105\.64秒。

🔗 **开源资源**

- 数据相关资源：<https://github.com/LOGUNIVPM/1st-DAFx-Challenge> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 31. [直接在可运行网络上优化混响：模块化反馈延迟网络的实时拆解与调参](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-68-157bee88f1/)

> 英文题目：*[FDN Sandbox: Real\-Time Experimentation and Analysis of FDNs](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-68-157bee88f1/)*

标签：#开源工具 #信号处理 #实时处理 #空间音频渲染

评分：**6.8/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#空间音频渲染 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_68.pdf)

👥 **作者与机构**

- Alexandre St\-Onge：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

反馈延迟网络以干声或单位脉冲为输入、人工混响脉冲为输出，难点在于数十个延迟、反馈矩阵与滤波器参数相互耦合，易产生金属染色与非自然衰减且难以对齐目标房间。先由库层以典型反馈延迟结构为输入，负责将其拆分为输入增益、延迟线、反馈矩阵、环路滤波器、输出增益与音色校正等可替换构件并集成滤波器反馈矩阵与丝绒噪声去相关扩展，输出为可实时运行的同一套生产对象。再由应用层以上述实时对象为输入，负责提供音频播放、卷积混响对照试听与随参数动态更新的十余种分析视图，输出为可观测的人工调参状态，该状态直接作为优化层的待优化起点。最后由优化层以该实时对象及其冲激响应为输入，负责用ensmallen九种算法做黑盒优化并在需梯度时以前向或中心有限差分估计梯度，输出为无染色与房间脉冲响应匹配两类任务的优化参数。在Intel Core i9\-12900K处理128采样点的评测设置下，8通道sfFDN的耗时指标为7\.3 µs，低于RTFDN对照的耗时指标15\.0 µs。与紧耦合可微分框架不同，该设计省去可微重实现而复用同一套生产代码做优化，6通道无染色优化实现回声密度更快建立与模态激励分布变窄，房间匹配在展示频带贴合合成目标并改善初始能量偏移。其适用边界受限于展示的合成房间与小规模设置，尚未验证真实测量RIR、多房间统计与主观听感，而推理开销在该硬件上随通道数增长，32通道仍保持低延迟优势。

🔗 **开源资源**

- 代码相关资源：<https://github.com/Segfault1602/sfFDN> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/Segfault1602/FDNSandbox> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 32. [用音乐分离模型学生成环绕声：合成主次数据集如何把盲上混变成可训练任务](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-14-eb35bde215/)

> 英文题目：*[PAEDB: A Synthetic Primary\-Ambient Dataset Generation Pipeline for Automatic Upmixing Using Deep Neural Networks](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-14-eb35bde215/)*

标签：#数据集 #数据集构建 #音乐 #空间音频信号 #空间音频渲染

评分：**6.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#空间音频渲染 | 主方法：#数据集构建

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_14.pdf)

👥 **作者与机构**

- Nicholas Tong：机构信息未能从会议 PDF 纯文本可靠映射
- Tom Collins：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

立体声盲上混需从双声道输入恢复可送往后环绕的去相关环境信号并保留前场直达声定位，难点在于环境成分弥散且与直达声频谱重叠，仅靠短窗相干假设易产生伪像。该方法沿主环境提取框架先用音乐源分离得到鼓、贝斯、人声与其他词干，再对每词干做中心声道导出得到前场左中右，最后用在自建数据集上训练的网络从处理后左右声道预测环绕环境并经延时与滤波生成输出。所提主环境提取数据集由公开音乐数据经可复现处理流水线合成，包含1809对主环境词干共超550小时音频，为监督训练提供标准化目标。与传统逐帧相干判决的环境提取相比，关键差异是用Mel\-RoFormer学习长时上下文多频带掩蔽而非瞬时相关判决，因而能更好保持时频一致性与去相关特性。在客观信号评测设置下，Mel\-RoFormer的SDR为2\.22 ± 2\.21 dB，高于MLP的SDR 0\.89 ± 0\.80 dB。主观5\.1听音显示该系统在包围感与时空质量上接近传统参考系统，而小型感知器则出现可闻伪像与频谱偏离。结论适用边界限于音乐类5\.1上混，尚未验证高空声道、影视对白与真实多轨录音的外推能力。训练成本对应的硬件为2块各23GB显存的NVIDIA A10 GPU，模型均从随机初始化开始按各自文献超参数训练。

🔗 **开源资源**

- 代码相关资源：<https://github.com/nick7ong/paedb> — 链接可访问（HTTP 200）
- 代码相关资源：<https://github.com/nick7ong/YTAudioScraper> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 33. [板混响能从声音倒推出物理参数吗：一次只用合成数据的参数估计挑战](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-76-f456ab8f39/)

> 英文题目：*[DAFx Challenge Introduction & Results](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-76-f456ab8f39/)*

标签：#基准测试 #基准设计 #模型比较 #音频理解

评分：**6.7/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频理解 | 主方法：#基准设计

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_76.pdf)

👥 **作者与机构**

- Leonardo Gabrielli：机构信息未能从会议 PDF 纯文本可靠映射
- Michele Ducceschi \(Challenge Chairs\)：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本挑战以1秒合成位移脉冲响应为输入，需同时估计6维物理几何材料参数与数千阶模态频率衰减增益三元组，实际难点在于密集模态交叠、频率相关阻尼与增益耦合导致的不可唯一性与高频不可分辨性。基准链条先由阻尼Kirchhoff\-Love方程解析生成模态库并负责给出频率衰减与增益的闭式映射，其输出的模态三元组直接进入精确双二阶滤波器组以合成保密测试脉冲响应。合成响应随后进入双轨评分，任务A用归一化均方误差评价物理参数精度，任务B用匈牙利匹配相对误差加频域对数幅度误差评价模态可恢复性，前一阶段的合成输出即为后一阶段的评分输入。区别于既往个案式板建模，该工作统一了可辨识参数化、绝对幅度保留协议与可分辨分界讨论，使22种监督学习、迭代优化与DDSP方法得以同场比较并揭示高频段本质不可辨识。在任务B测试集下，13\-B1的E\{RE\}指标为0\.328，低于2\-B的E\{RE\}指标0\.539。上述结论的适用边界限于同分布线性简支板合成数据，向真实非线性板、空气负载与分布外参数的外推尚未验证。表中报告的推理开销在异构硬件下差异显著，如8\-A仅需0\.006秒而5\-A另含9000秒优化耗时，训练成本与延迟亦随数据量和评估次数大幅变化。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 34. [先对准频率再抠位置：ALAMODE 用三阶段差分进化反演平板混响参数](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-79-dd908ad9bf/)

> 英文题目：*[ALAMODE: Automated Learning of Acoustical Modal Parameters via Differential Evolution](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-79-dd908ad9bf/)*

标签：#课程学习 #信号处理 #高效推理 #房间脉冲响应估计

评分：**6.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.6/1 | 影响力 0.8/1.5 | 开源 1.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#房间脉冲响应估计 | 主方法：#课程学习

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_79.pdf)

👥 **作者与机构**

- Jin Woo Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Jatin Chowdhury：机构信息未能从会议 PDF 纯文本可靠映射
- Facundo Franchino：机构信息未能从会议 PDF 纯文本可靠映射
- Soohyun Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Mark Rau：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为目标平板混响脉冲响应，输出为六维归一化物理几何参数向量，难点在于模态频率偏移数个谱bin即导致尖锐多峰谱损失陷入局部极小。第一阶段仅优化决定模态网格的频率决定参数以粗对齐极点位置，非频率参数锁定中点并采用幅度不变损失。第二阶段以前一阶段最优向量为锚点并以拉丁超立方采样初始化其余种群，在频带由粗到细调度下联合搜索全部六维参数以同时对齐频率与相对幅度分布。第三阶段冻结其余五维参数，仅在一位自由度上单独校准作为全局能量尺度的面密度以修正均方根偏差。与基于粒子群优化的官方基线单次全局搜索不同，该链以无梯度差分进化与频带由粗到细重启替代，使微小频偏可容忍并逐阶段收缩搜索空间。在128条合成IR与16条挑战测试IR构成的评测设置下，挑战测试集条件的SDE指标为0\.09，高于合成数据集条件的SDE指标0\.05。该结论适用边界受限于受控合成平板模型与仿真器一致场景，尚未验证各向异性材料、测量噪声与真实录音的外推能力。推理开销方面原文披露处理全部16条测试IR共耗时50分33秒，其中第二阶段因六维联合搜索使函数评估与耗时成倍增长而成为计算量的瓶颈。

🔗 **开源资源**

- 数据相关资源：<https://github.com/LOGUNIVPM/1st-DAFx-Challenge> — 链接可访问（HTTP 200）
- 第三方资源：<https://ccrma.stanford.edu/~jos/pasp/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 35. [不用卷积长脉冲：以噪声载波重塑频域混响尾巴](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-66-abb7117e5e/)

> 英文题目：*[A Frequency\-Domain Reverberator Plug\-In](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-66-abb7117e5e/)*

标签：#开源工具 #时频分析 #实时处理 #空间音频渲染

评分：**6.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#空间音频渲染 | 主方法：#时频分析

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_66.pdf)

👥 **作者与机构**

- Jonas Roth：机构信息未能从会议 PDF 纯文本可靠映射
- Nishanth Kumar：机构信息未能从会议 PDF 纯文本可靠映射
- Silvan Krebs：机构信息未能从会议 PDF 纯文本可靠映射
- David Wieland：机构信息未能从会议 PDF 纯文本可靠映射
- Christoph Studer：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入单声道与立体声干信号并输出干声加早期反射加混响尾巴的混合信号，难点在于以低延迟实时结构同时获得可定位的早期空间感与无物理对应的创意尾巴音色。方法链分三步推进：早期反射单元先用稀疏时域卷积由干信号生成可定位的前期反射以规避频域块延迟；短时傅里叶变换将输入分块加窗变换到频域并经起音释放平均的包络跟随器提取各频点缓慢变化的幅度包络；频域噪声载波经该包络加权后再经逆变换与重叠相加合成为尾巴并与干声及延迟对齐的尾巴叠加输出。与基于递归频谱幅度衰减的既有频域混响相比，关键差异是用前向包络驱动的新噪声替代反馈衰减旧频谱，从而天然支持冻结、门控与跨频点偏移等非线性创意控制。在MacBook Pro的REAPER实测设置下，最大块尺寸条件的单块处理耗时指标为3\.81 ms，高于最小块尺寸条件的单块处理耗时指标0\.011 ms。大块尺寸下的时间涂抹与音高偏移带来的非谐性尚未验证，适用边界限于演示级创意混响而非精确房间仿真。原文在该硬件上还报告单实例CPU占用低于2\.6%，块处理引入的算法延迟随块长增长，例如块尺寸为8192在48kHz下延迟约85ms。

🔗 **开源资源**

- 代码相关资源：<https://github.com/IIP-Group/FDverb/> — 链接可访问（HTTP 200）
- 复现相关资源：<https://github.com/IIP-Group/FDverb/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/juce-framework/JUCE> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 36. [何时才该移动声音对象：SEND 把混音师的克制听感做成双流事件检测](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-09-d99048c999/)

> 英文题目：*[SEND: A Spatial Event Neural Detector for Intentional Object Motion in Immersive Music Mixing](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-09-d99048c999/)*

标签：#主观评测 #Transformer #音乐 #空间音频信号 #音频事件检测

评分：**6.7/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频事件检测 | 主方法：#Transformer

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_09.pdf)

👥 **作者与机构**

- Xu Gan：机构信息未能从会议 PDF 纯文本可靠映射
- Linhao Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenhai Yan：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

音乐空间事件检测（Musical Spatial Event Detection，MSED）以动态目标对象干声与静态伴奏背景为输入，输出逐帧二值触发序列以标定声像应当移动的离散窗口，难点在于移动稀疏且动机依赖长程结构而非瞬时掩蔽。空间事件神经检测器（Spatial Event Neural Detector，SEND）先用并行残差网络编码器将双流对数梅尔谱映射为时频特征，再经谱时Transformer套Transformer（Spectral\-Temporal Transformer in Transformer，Spec\-TNT）与跨轨门控交互提炼上下文约束表示，随后由并行Spec\-TNT与时序卷积网络（Temporal Convolutional Network，TCN）精修节奏与结构依赖，最后经决策头输出移动概率并阈值化为事件，仅在事件窗口内允许三维声像轨迹同步跃迁。与瞬时频谱解掩蔽和单流卷积循环基线相比，该设计显式建模目标与背景的非对称上下文制约而非被动响应重叠。在20个独立工程测试集上SEND取得帧级F1为0\.7675、事件级交并比为0\.6305，显著高于卷积循环基线并接近人类混音的结构对齐水平。结论限于专业流行类多轨沉浸式混音与离线切窗评测，对连续三维轨迹合成与实时低延迟场景尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://9ime.github.io/projects/send/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 37. [用可微反馈延迟网络拟合实测房间脉冲响应：共享原型均衡如何省参数](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-10-555b9d3190/)

> 英文题目：*[Gradient Descent Optimization of Room Impulse Responses with Parameter\-Efficient Differentiable Feedback Delay Networks](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-10-555b9d3190/)*

标签：#端到端学习 #高效推理 #空间音频 #房间脉冲响应估计

评分：**6.7/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#房间脉冲响应估计 | 主方法：#端到端学习

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_10.pdf)

👥 **作者与机构**

- Ilias Ibnyahya：机构信息未能从会议 PDF 纯文本可靠映射
- Joshua Reiss：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为单声道实测房间脉冲响应，输出为48 kHz可实时运行的参数化反馈延迟网络，难点在于递归反馈不可直接微分，且早期稀疏反射与晚期频变衰减需同时拟合。方法先以频率采样将递归系统转为有限长近似，使延迟长度与滤波器可端到端求导，其输出进入可训练衰减估计。接着以单原型参量均衡器按比例条件生成各线衰减并联合优化，其输出与正交混合矩阵整形后的循环混响共同决定晚期包络。然后将稀疏早期反射抽头支路与晚期支路求和，再经环后音色均衡与可训练带通输出残余染色校正。与每线固定网格图形均衡器相比，参量均衡器中心频率与Q值可移动且原型参数跨线共享，因而以更少频带实现连续频率监督并降低乘法量。在九个实测RIR评测条件下，训练混合矩阵与延迟长度模型的T30为0\.261 s，低于固定Hadamard固定延迟模型的T30的0\.315。结论适用边界限于单声道中等混响拟合，立体声与变位置外推尚未验证，可训练延迟可能引入晚期染色。训练成本为短房间单块消费级GPU约1\.6分钟、长混响可超17分钟，推理开销为每样本约1222次乘法与约100\.85 kB状态内存。

🔗 **开源资源**

- 第三方资源：<https://www.w3.org/TR/audio-eq-cookbook/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 38. [用一次二次规划代替迭代求解：残差驱动的变步长非线性电路仿真](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-31-8af2e64a1f/)

> 英文题目：*[Residual\-Driven Adaptive Multi\-Rate Quadratic Programming Framework for Nonlinear Analog Audio Circuit Emulation](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-31-8af2e64a1f/)*

标签：#状态空间模型 #模型比较 #高效推理 #实时处理 #音频生成

评分：**6.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#状态空间模型

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_31.pdf)

👥 **作者与机构**

- Miguel Zea：机构信息未能从会议 PDF 纯文本可靠映射
- Luis A\. Rivera：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

非线性模拟音频电路仿真需由输入电压预测输出波形，每步需求解含刚性动态与二极管三极管强非线性的微分代数方程，传统牛顿迭代解代数方程再积分更新的双循环难以兼顾精度与效率。该方法先将电路写成线性状态空间加非线性器件约束形式，并用后向欧拉或梯形法则离散线性动态，其离散输出进入下一步等式约束二次规划单步求解。其中器件约束被替换为带Hurwitz稳定矩阵的一阶线性代理以组装等式系统，无不等式激活且取单位度量时退化为伪逆最小范数解。求解后以后验非线性残差范数作为缺陷指示器，驱动死拍、PID H321与预测H0211控制器实现自适应多速率步长推进。相对已有固定步长状态空间法，关键差异在于把线性化余量解释为具有正确局部阶的可计算误差并闭环控步，在削波起始处自动收缩因而更贴近SPICE基线且等效伪逆与完整二次规划输出几乎不可区分。在二极管削波器评测设置下，QPDI BE PINV固定步长方法的平均执行时间指标为1\.38 ms，低于SPICE基线的平均执行时间指标80\.70 ms。该结论适用边界受限于三个手工推导电路与短时正弦阶跃输入，尚未验证长时音乐信号与参数调制外推，推理开销以平均执行时间计共射放大器自适应为99\.01 ms仅为SPICE的210\.80 ms约一半。

🔗 **开源资源**

- 代码相关资源：<https://mezea-uvg.github.io/RAMA/#code> — 链接可访问（HTTP 200）
- 演示资源：<https://mezea-uvg.github.io/RAMA/#demo> — 链接可访问（HTTP 200）
- 复现相关资源：<https://mezea-uvg.github.io/RAMA/supplementary/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 39. [一次生成一小段连续潜块：SCAPES 如何用轻量流模型做语义可控的环境声](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-54-43872a3b2c/)

> 英文题目：*[SCAPES: Semantically Conditioned Autoregressive Prior for Environmental Sounds](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-54-43872a3b2c/)*

标签：#自回归模型 #流匹配 #环境声 #音频生成

评分：**6.6/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：模型报告 | 主任务：#音频生成 | 主方法：#自回归模型

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_54.pdf)

👥 **作者与机构**

- Esteban Gutiérrez：机构信息未能从会议 PDF 纯文本可靠映射
- Lonce Wyse：机构信息未能从会议 PDF 纯文本可靠映射
- Frederic Font：机构信息未能从会议 PDF 纯文本可靠映射
- Xavier Serra：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

环境声合成以稀疏CLAP语义描述为输入、以稠密波形长音频为输出，实际难点在于从粗粒度语义映射到细粒度波形高度欠约束且需保持长时纹理一致。SCAPES先将重叠音频片段经冻结EnCodec编码为连续原子，并以扩展上下文窗口计算的CLAP嵌入标注每个原子以提供语义上下文。接着以记忆缓冲中前序原子为交叉注意力检索条件，以CLAP嵌入与流时间为自适应层归一化调制Transformer向量场，经条件流匹配学习直线最优传输路径。推理时从高斯噪声出发以常微分方程求解器逐原子自回归生成，再经重叠相加与交叉淡化拼接为长音频以抑制边界伪影。相对离散词表自回归模型，该连续流先验绕过残差向量量化拓扑约束而保留信号连续性，使语义插值沿光滑轨迹演化并降低量化跳变。在10类Freesound环境声重合成评测任务下，SCAPES的Fréchet Audio Distance指标为1\.05，低于RAVE的Fréchet Audio Distance指标1\.51。125秒冷启动自回归生成在远端分段仍与条件嵌入保持较高CLAP余弦相似，表明漂移较小，但该结论适用边界尚未验证语音与复调音乐等强结构信号。在实验硬件上其训练成本显著降低，仅需不足RAVE一半显存且收敛快约90倍。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 40. [把拼接输出写进卷积核：单引擎如何在连续换混响时保住能量](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-01-5d52be235c/)

> 英文题目：*[A Unified Framework for Real\-Time Concatenation\-Driven Convolution](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-01-5d52be235c/)*

标签：#软件工具 #时频分析 #实时处理 #空间音频渲染

评分：**6.5/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#空间音频渲染 | 主方法：#时频分析

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_01.pdf)

👥 **作者与机构**

- Niccolo Abate：机构信息未能从会议 PDF 纯文本可靠映射
- Brian Hansen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

拼接驱动卷积以实时音频流为输入，以经连续变化脉冲响应卷积后的音频为输出，难点在于传统双引擎交叉淡化需重置内部状态导致能量凹陷，且冗余傅里叶开销随插值占比线性增长。 拼接与脉冲响应生成模块先提取语料颗粒特征并经自组织映射组织为可手势导航的音色空间，其输出的连续脉冲响应流进入实时卷积引擎。 卷积引擎采用非均匀分区卷积降低延迟并以交叠相加恢复时域信号，为时变滤波提供单引擎基础。 单引擎内对当前与目标核的分区快速傅里叶变换做逐块线性插值并覆写频域核，复用同一历史状态实现任意速率连续变形与冻结重定向。 与输出端混合的双引擎及嵌入时变淡入窗的频域滤波器交叉淡化不同，该方法不设独立过渡状态而保持卷积过程不变，因而插值占用从5%到100%时开销几乎平坦且能量稳定。 在三类稠密语料条件下，Struck metal语料的QE指标为0\.031，高于Chimes语料的QE指标0\.022。 在Apple M4 Pro连续插值条件下单引擎每块平均CPU时间保持在∼150 µs以内，约为11\.6 ms块周期的1%，具备充足实时余量。 结论的适用边界受限于客观能量与开销指标，尚未验证正式主观听感，反相抵消与长尾自然度仍受限，推理开销在Apple M4 Pro硬件上已验证而训练成本未见披露。

🔗 **开源资源**

- 第三方资源：<https://juce.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://ccrma.stanford.edu/~jos/pasp/> — 链接可访问（HTTP 200）
- 第三方资源：<https://echobit.myshopify.com/> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 41. [测得的空间房间脉冲响应：先分离早晚反射，再把阵列缺陷一起重建](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-08-a56e2c6d49/)

> 英文题目：*[Parametric Resynthesis of Measured Spatial Room Impulse Responses](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-08-a56e2c6d49/)*

标签：#信号处理 #麦克风阵列 #实时处理 #空间音频信号 #空间音频渲染

评分：**6.5/10** | 创新 1.4/2 | 技术严谨 1.2/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#空间音频渲染 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_08.pdf)

👥 **作者与机构**

- Anthony Gallien：机构信息未能从会议 PDF 纯文本可靠映射
- Benoit Alary：机构信息未能从会议 PDF 纯文本可靠映射
- Markus Noisternig：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为刚性球形麦克风阵列采集并编码至高阶Ambisonics域的长时空间房间脉冲响应，输出为可实时渲染的全参数化高阶响应，难点在于直接高阶长卷积代价过高且早期反射的空间时谱结构难以保真。管线先做高阶编码并去除预延迟使直达声为时间零点，再估计混合时间划分早晚期，使早期离散反射与晚期随机混响进入不同分支处理。早期分支用Herglotz波函数估计到达方向与时间，经变阶超心形波束提取频谱并显式建模残留散射与空间混叠后作为离散滤波平面波重编码，晚期分支则以前支输出衔接能量衰减relief估计的频率相关混响时间与初始功率谱。与忽略测量伪影的直接重合成不同，该框架在合成端复现编码正则化后的低频滚降和阵列几何决定的高频混叠方向，从而缩小仿真到实测的域间隙。在IRCAM Espro hall评测条件下，所提方法在每段FDN使用延迟线长度从30 ms升至70 ms范围内随机选取32条延迟线的设置下，其EDR差异指标的误差低于直接重合成的EDR差异指标的误差，但原文未报告双方可逐字核对的EDR数值故原文未提供可核对的关键定量结果。该结论适用边界为单斜率指数衰减且早期反射数有限可分辨、不超越原始阵列空间分辨率，多斜率耦合房间尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://dafx26-eac.ircam.fr/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 42. [参考引导的音效变体：用同一生产目标比较不同编辑能力的方法](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-52-ba00af32d3/)

> 英文题目：*[A Production\-Oriented Framework for Evaluation of SFX Generation](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-52-ba00af32d3/)*

标签：#评测协议 #主观评测 #少样本 #环境声 #音频生成

评分：**6.5/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频生成 | 主方法：#评测协议

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_52.pdf)

👥 **作者与机构**

- Mélodie Desbos：机构信息未能从会议 PDF 纯文本可靠映射
- Yara Bahram：机构信息未能从会议 PDF 纯文本可靠映射
- Eric Granger：机构信息未能从会议 PDF 纯文本可靠映射
- Mohammadhadi Shateri：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

工业音效生产以少量可复用参考录音为输入，需生成保留事件身份又具可控变化的多个变体，难点在于同时兼顾真实感、身份保持、多样性与工作流可用性，现有文本到音频或无条件评测无法刻画该约束下的权衡。本文框架先定义九条生产需求并映射五种异构基线的能力分工，再执行共享参考引导变体生成以统一比较全量输出，随后将该共享输出输入分布质量、参考对齐与多样性评估，最后对修补、时序控制与音色变换等原生操作做专项诊断以形成能力画像。与按原生任务各自评测相比，关键差异是用ESC\-50参考加类名的统一音频到音频变体任务约束比较口径，同时保留原生编辑能力而不抹平异构控制假设，因而可为工业管线选型提供统一决策依据。在ESC\-50参考引导变体任务评测下，AudioX的FAD为9\.34，低于AudioLDM的FAD 20\.09。在ESC\-50参考引导变体任务评测下，AudioX的S\-MOS为3\.37，高于AudioLDM的S\-MOS 2\.22。该结论适用边界受限于短时环境音效的轻量适配场景，尚未验证长时音乐语音或跨域大规模库的外推。各基线训练成本与硬件开销差异显著，效率仅作诊断参考，选型时需结合推理开销权衡。

🔗 **开源资源**

- 演示资源：<https://melodiedesbos.github.io/sfx-eval-framework> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 43. [从参数画形到按顶点走形：等弧长引擎如何统一任意多边形、形变与多面体截面](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-32-397059e397/)

> 英文题目：*[Arbitrary Polygon Oscillator: Generalizing Polygonal Synthesis to Arbitrary Shapes, Morphing, and Three\-Dimensional Polyhedra](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-32-397059e397/)*

标签：#开源工具 #信号处理 #多通道 #音频生成

评分：**6.3/10** | 创新 1.5/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_32.pdf)

👥 **作者与机构**

- Antonio Argentieri：机构信息未能从会议 PDF 纯文本可靠映射
- Francesco Scagliola：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该振荡器输入为外部顶点缓冲定义的任意闭合多边形或凸多面体截面位姿，输出为以恒定周长速度遍历得到的双通道x与y音频波形，实际难点在于不等边长导致音高漂移、不等顶点对应造成形变跳变以及切割拓扑变化。管线先做去质心旋转挤压与二次贝塞尔边弯曲以重塑对称性与过渡圆滑度，其几何输出进入弧长参数化遍历，按边长占比分配驻留时间并用径向加权逼近目标音色。遍历得到的坐标点再送入四点polyBLAMP校正与自适应过采样环节，利用相邻贝塞尔切向的闭式导数跳变量与分数延迟抑制混叠，仅保留滤波后音频块输出。相对恒定角速度基线，弧长遍历以边长而非张角决定时间分配并以对称阶数M重写谐波格点H\(M\)，其实质意义是将形状从参数变为可绘制与可插值的几何对象。在fs=44100 Hz下400 Hz三角形测试条件下，OS=2加校正组合的SNR指标为85\.1 dB，高于无处理配置的SNR指标58\.8 dB。该结论适用边界受限于凸形与中小顶点数及规则形状感知验证缺失，高阶自交与极端凹形仍可能泄漏而构成失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://www.e-rm.de/polygogo/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 44. [可微拨弦：当频谱损失推不动起音时刻，参数损失与外部检测器如何分工](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-38-fad3936512/)

> 英文题目：*[Sound Matching with a Differentiable Karplus\-Strong Algorithm](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-38-fad3936512/)*

标签：#信号处理 #端到端 #音乐 #音乐生成

评分：**6.3/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 1.1/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.9/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_38.pdf)

👥 **作者与机构**

- Pablo Tablas de Paula：机构信息未能从会议 PDF 纯文本可靠映射
- David Marttila：机构信息未能从会议 PDF 纯文本可靠映射
- Rodrigo Díaz：机构信息未能从会议 PDF 纯文本可靠映射
- Irán Román：机构信息未能从会议 PDF 纯文本可靠映射
- Emmanouil Benetos：机构信息未能从会议 PDF 纯文本可靠映射
- Joshua Reiss：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理单声道拨弦吉他的事件级声音匹配，输入为4秒波形，输出为离散拨弦事件集合的存在性、起音时刻、基频与弦音色参数，难点在于起音与音高的不可微定位及高共振递归的梯度传播。编码器先由梅尔滤波器组与可学习卷积双前端提取谐波与瞬态特征，再经扩张时序卷积网络与集合预测变换器输出固定槽位的事件参数，接着可微分扩展卡普拉斯\-斯特朗 Karplus\-Strong / KSA 解码器将参数渲染为波形以计算音频与参数损失。与频域采样的相位偏移做法不同，时域拉格朗日插值把分数延迟保留在闭环传递函数内并行反传，避免了共振冲激响应超长时的循环卷积混叠。在合成集上仅用参数损失的模型取得15\.14音分的音高误差与0\.92的事件F1，在NSynth真实吉他集上时域音频损失模型的CLAP分布距离为163\.95，优于两个泛音加噪声基线。该结论限于无揉弦与滑音的单声道拨弦音色，尚不能外推至琴体共鸣与手弦交互更强的场景。原文未披露推理与部署成本，训练上限为24小时。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 45. [级联不拆相位、并行不抢状态：多级线性相位八度滤波器组的吞吐与能耗折中](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-44-00e398321e/)

> 英文题目：*[Exploring Parallelism and Energy Efficiency in a Multistage Linear\-Phase Octave Filter Bank](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-44-00e398321e/)*

标签：#信号处理 #高效推理 #端侧运行 #音频分离

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频分离 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_44.pdf)

👥 **作者与机构**

- Jose M\. Badia：机构信息未能从会议 PDF 纯文本可靠映射
- Jose A\. Belloch：机构信息未能从会议 PDF 纯文本可靠映射
- Vesa Välimäki：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文面向边缘片上系统块式音频均衡，输入为分块流入的音频流，输出为经十个八度子带增益加权后对齐叠加的线性相位信号，难点在于拉伸原型滤波的跨块状态依赖、互补支路对齐延迟与片上内存搬运开销。方法第一步以紧凑环形状态实现拉伸半带原型滤波，按块乒乓复用两块缓冲并在块间传递延迟行，避免物化零插值系数。方法第二步将级与块交叉组织为OpenMP任务流水线，以级间数据流依赖保证级联顺序并以状态令牌保护级内可变状态，使多块同时处于不同级。方法第三步采用线程本地累加与分段归约完成全局输出累加，消除多任务对同一输出的竞争。与直接长有限冲激响应或快速傅里叶变换卷积相比，关键差异在于用内插有限冲激响应结构加索引对齐累加替代全长延迟子带存储，并用显式任务依赖替代细粒度同步，其实质意义是把算术量转化为可控的数据局部性与可扩展流水。在Jetson Orin Nano能量性能评测设置下，单核顺序版本的能量指标为0\.43 mJ，低于六核并行版本的能量指标0\.5 mJ。结论适用边界受限于可容忍固定群延迟的块式内核，不适用于超低延迟监听与回调级调度，其顺序基线吞吐超过118万样本每秒而六线程流水线加速比超过4\.5。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 46. [FoleySet：用两层动作 taxonomy 把拟音从宽泛标签拉回制作现场](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-55-2e99f5226a/)

> 英文题目：*[FoleySet: A Multi\-Level Human\-Annotated Foley Sound Dataset](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-55-2e99f5226a/)*

标签：#数据集 #数据集构建 #环境声 #音频分类

评分：**6.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音频分类 | 主方法：#数据集构建

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_55.pdf)

👥 **作者与机构**

- Sunshiyu Wang：机构信息未能从会议 PDF 纯文本可靠映射
- Alexander Lerch：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

影视拟音需将人体动作与材质交互声与画面同步，输入为多样短录音片段，输出为动作与材质级别类别标签，难点在于类别定义分散且细粒度声音高度相似并易受录制条件干扰。作者先从七个商业拟音库提炼关键词并归纳为9大类73子类两级体系，再从Freesound检索候选音频并做人工筛选与格式归一化，随后由单标注者逐条赋予主类别与子类别及单发多发标记，最后按源录音隔离划分训练验证测试集并用冻结PaSST嵌入加线性分类验证。相比通用音频本体，该体系将散落的脚步与门玻璃等事件统一到拟音动作视角，因而更贴合检索与生成等制作流程。在FoleySet测试集下，9类主类别分类的准确率为0\.82，高于73类子类别分类的准确率0\.64。该结论适用边界受限于受控短片段分类，细粒度零召回类显示长尾与声学重叠下仍会失败。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://freesound.org/> — 链接可访问（HTTP 200）
- 第三方资源：<https://sound-effects.bbcrewind.co.uk/> — 链接可访问（HTTP 200）
- 第三方资源：<https://dcase.community/challenge2023/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 47. [用可微模态合成反推薄板参数：两阶段梯度搜索如何绕开非凸陷阱](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-77-b104760dd9/)

> 英文题目：*[Parameter Estimation via Differentiable Modal Plate Synthesis](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-77-b104760dd9/)*

标签：#信号处理 #离线推理 #音频理解

评分：**6.2/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.5/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频理解 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_77.pdf)

👥 **作者与机构**

- Filippo Garofalo：机构信息未能从会议 PDF 纯文本可靠映射
- Alessandro Antonio Lillo：机构信息未能从会议 PDF 纯文本可靠映射
- Alessandro Ilic Mezza：机构信息未能从会议 PDF 纯文本可靠映射
- Riccardo Giampiccolo：机构信息未能从会议 PDF 纯文本可靠映射
- Alberto Bernardini：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务是从单条5秒合成板脉冲响应反推6参数子集\(S=\\\{\\mu, D/\\mu, T\_0/\\mu, L\_y, x\_o, y\_o\\\}\)，其中\(\\mu=\\rho h\)为面密度，难点是模态密集交叠、频率相关阻尼与参数强耦合使损失高度非凸。方法先由可微分模态合成器将6个无约束代理变量经Sigmoid双射映射为物理参数，并行合成全带脉冲以保留物理可解释性并实现端到端反传。再由多尺度频谱损失在7个短时傅里叶变换尺度上计算幅值与对数幅值误差，强调大谱差与低能量晚期衰减，输出标量目标供优化。接着两阶段优化承接该目标：500点拉丁超立方采样多起点在截断时长与低频上限下短跑筛选最优初值，再以时长课程从0\.05秒渐增至3秒精修。与粒子群优化基线的关键差异是用白盒物理梯度替代无梯度种群搜索，直接沿可微分合成器反传更新物理参数。在8条官方生成器合成数据的Task A评测设置下，DMPS的NMSE指标为4\.29 × 10−3，低于PSO基线的NMSE指标3\.98×10−2。该结论适用边界限于无噪声合成、固定边界与已知激励观测，实测失配与噪声鲁棒性尚未验证。其推理开销为单条脉冲平均13\.42分钟，所用硬件为含RTX 5070 Ti显卡的工作站。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 48. [用对数级递归保持无损：可调克罗内克反馈矩阵如何划分混响网络](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-04-d221166712/)

> 英文题目：*[Fast Parametric Matrices for Lossless Feedback Delay Networks](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-04-d221166712/)*

标签：#信号处理 #高效推理 #实时处理 #空间音频渲染

评分：**6.2/10** | 创新 1.3/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#空间音频渲染 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_04.pdf)

👥 **作者与机构**

- Andrea Coppola：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为多通道干声与延迟线状态，输出为具有可控扩散与声像的混响信号，难点在于反馈矩阵需同时保持无损正交、支持连续拓扑变形并满足逐样本实时计算。方法链分三步推进：先以2×2旋转与反射核经递归Kronecker积构造2的幂次阶正交矩阵，使每个核角成为独立参数。接着以原地迭代分治实现反馈向量乘法，将每层成对混合摊薄到对数层级，其输出的块对角与交叉耦合结构直接进入下一步。然后通过置零特定核角划分网络，分别实现立体声交叉耦合、奇偶冻结与时变调制。与固定Hadamard矩阵的关键差异在于每层仍保留自由角度且全程解析保持正交，无需重正交化即可连续变形拓扑，因而能无伪影地调控立体声像并抑制共振染色。在固定矩阵评测设置下，所提算法的耗时指标为58\.4 ns，低于嵌套循环基线的耗时指标1662\.5 ns。该结论适用边界受限于2的幂次规模与正交无损条件，尚未验证非2幂次扩展与感知质量外推，其推理开销在Intel Core Ultra 9 185H硬件上以纳秒级延迟验证。

🔗 **开源资源**

- 第三方资源：<https://ccrma.stanford.edu/~jos/pasp/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 49. [归一化丢掉响度线索：两阶段进化搜索先定形状再找回面密度](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-83-5901b2be69/)

> 英文题目：*[Accurate Plate Reverb Parameter Estimation Using Two\-Stage Evolutionary Search](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-83-5901b2be69/)*

标签：#时频分析 #模型比较 #房间脉冲响应估计

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#房间脉冲响应估计 | 主方法：#时频分析

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_83.pdf)

👥 **作者与机构**

- Byunghoo Park：机构信息未能从会议 PDF 纯文本可靠映射
- Jayeon Yi：机构信息未能从会议 PDF 纯文本可靠映射
- Takyoung Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Minje Kim：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务是从单条仿真金属板混响脉冲响应反推包含尺寸与材料在内的6个物理参数，难点是阻尼Kirchhoff\-Love方程决定的正向映射高度非凸、多峰且病态，梯度优化易发散。第一阶段在7维原始参数空间做多重启协方差矩阵自适应进化策略搜索，对目标与候选峰值归一化后计算单分辨率短时傅里叶幅度L1距离，成功后换算并冻结拾音坐标、板高与弯曲刚度面密度比等5个量。第二阶段固定几何与比值，仅对面密度做50轮三分搜索，目标为取消归一化的同一损失，利用幅度随面密度单调变化恢复绝对增益。相对对数压缩多尺度频谱损失，该设计以无压缩线性幅度保留可优化景观并以归一化解耦幅度歧义，再用单调性补偿可辨识性。在50条生成脉冲响应的验证集下，L1\-STFT的几何平均NMSE为4\.9 × 10−14，低于挑战MSS基线的几何平均NMSE1\.3 × 10−1。其适用边界限于仿真无噪声且远离边界情形，失败条件是输出拾音点极靠近边界时正弦模式幅度整体塌缩导致面密度严重漂移，该外推尚未验证。两阶段后中位归一化均方误差降至1\.34×10−14量级，推理开销为第一阶段中位32\.6秒、均值76\.9秒且离群约640秒，第二阶段平均仅增0\.62秒，硬件使用不超过4GB显存。

🔗 **开源资源**

- 第三方资源：<https://github.com/LOGUNIVPM/1st-DAFx-Challenge> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 50. [从一条脉冲响应反推钢板参数：用仿真样本直接学后验分布](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-84-2de824f3c5/)

> 英文题目：*[Simulation\-based Inference Plate Reverberation Inverse Problems](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-84-2de824f3c5/)*

标签：#CNN #统计分析 #时频分析 #音频理解

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频理解 | 主方法：#统计分析

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_84.pdf)

👥 **作者与机构**

- Dylan Sechet：机构信息未能从会议 PDF 纯文本可靠映射
- Matthieu Kowalski：机构信息未能从会议 PDF 纯文本可靠映射
- Marc Evrard：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务A输入为单条仿真板式混响脉冲响应，需反推归一化至单位超立方体的6维可辨识参数α，难点在于正向模态合成器不可微且似然无法显式求值。离线阶段用模拟器按先验生成60000组参数波形配对，以最大似然训练条件密度模型。摘要网络先将波形转为三种分辨率对数幅度谱并经卷积压缩为256维嵌入，再连同对数均方根幅度一起条件化8变换神经样条流以学习完整后验。测试阶段对每条观测从当前后验采样提案并调用模拟器生成邻域数据，经SNPE\-C序列精修得到专用模型，并以波形重构误差在离线与精修估计间择优以抑制退化。与依赖可微正向或粒子群寻优的点估计思路不同，该方案把模拟器仅作黑盒采样器并直接返回后验分布。在自建50条仿真测试集下，选择式估计器的全局NMSE指标为0\.47 ×10\-3，低于PSO基线的全局NMSE指标50\.56 ×10\-3。该结论适用边界受限于挑战赛固定几何与先验范围内的仿真数据，尚未验证实录混响与失配模型下的表现，而逐观测精修推理开销约2\.5小时、远高于离线不足1秒的推理，训练成本约26小时A100。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 51. [线性看起来一样，失真后为何分叉：Moog 梯子滤波器非线性行为的同基准量化](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-29-b13ac0aad8/)

> 英文题目：*[Quantifying Nonlinear Behavior in Digital Moog Ladder Filters: Cross\-Implementation Comparison and Common\-Core Ablation](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-29-b13ac0aad8/)*

标签：#基准测试 #基准设计 #模型比较 #音乐 #音乐理解

评分：**6.1/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：数据集与基准 | 主任务：#音乐理解 | 主方法：#基准设计

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_29.pdf)

👥 **作者与机构**

- Hiroyuki Oyama：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为不同驱动电平、截止频率与共振参数下的激励信号，输出为与模拟行为一致的谐波结构、自振荡与截止偏移，难点是线性频响相近的实现会在大信号非线性区显著分叉。先以ngspice 46仿真构建参考电路并重采样到固定均匀网格，为跨实现比较提供统一模拟基线。再经边界归一化把各数字实现的输入输出电平与共振映射对齐到可比工作点，其输出直接进入统一测试条件。最后用谐波反卷积与扫频峰值跟踪分别量化静态谐波、截止偏移与驱动增长三类非线性视图，形成可比误差体系。与已有单模型对SPICE验证相比，关键机制差异是跨实现比较与公共拓扑保持变换核心消融共用同一指标体系，从而分离饱和器形状、非线性位置与级贡献，为保真度与简化代价权衡提供依据。在截止1000 Hz、共振k为4的Spectra评测条件下，Huovilainen 2004的Spectra指标为0\.04% H1，低于JUCE的Spectra指标0\.65% H1。该结论适用边界受限于理想化晶体管核心与静态或准静态条件，尚未验证元件失配、温漂、音频速率调制与感知相关性。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 52. [绕一圈回不来：用圆形缓冲器讲清莫比乌斯带的单值性与缠绕数](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-35-d9d8458a7e/)

> 英文题目：*[Winding Numbers and Monodromy of Vector Bundles over a Circular Buffer](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-35-d9d8458a7e/)*

标签：#形式化分析 #理论分析 #音频生成

评分：**6.1/10** | 创新 1.3/2 | 技术严谨 0.8/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 1.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：理论研究 | 主任务：#音频生成 | 主方法：#形式化分析

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_35.pdf)

👥 **作者与机构**

- Georg Essl：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入为离散圆周上长度为n的循环缓存信号，输出为其整体谱偏移与周期行为的拓扑解释，难点在于相邻样本间的局部位形传递经绕行一周累积后会产生非平凡整体变换。该工作先将每个槽位视为实数或复数纤维并以相邻转移映射刻画数据传递，经典缓存对应全1转移而莫比乌斯缓存引入一处\-1翻转。接着定义绕行n步的单值群以度量一周累积变换，并以绕数刻画回到恒等所需的循环圈数，将r推广至单位复旋转以统一符号翻转与相位调制。然后将单值调制写入谱分析，说明经典零特征值被排除而单值使全部频率上移，莫比乌斯情形经半整数平移呈现奇次谐波与基频减半。在m=7稀疏谐波序列评测设置下，后续谐波的谐波位置指标为8，高于首个谐波的谐波位置指标1。与直接求解差分方程或混合边界条件相比，该方法差异在于以转移映射拓扑分类代替逐波形求解，因而把单反射减半、奇次谐波与混沌周期轨道纳入同一几何语言。其结论适用边界受限于单位转移与有限周期轨道理想情形，非单位增益、噪声与非周期混沌外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 53. [把做乐器的扩散模型拿去换嗓：统一条件如何同时管住音高、音素与演唱者](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-42-14075c8f65/)

> 英文题目：*[Adapting Diffusion\-Based Music Synthesis to Speech and Singing Voice Conversion](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-42-14075c8f65/)*

标签：#扩散模型 #迁移学习 #音乐 #语音 #语音转换

评分：**6.1/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 1.0/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#语音转换 | 主方法：#扩散模型

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_42.pdf)

👥 **作者与机构**

- Ben Maman：机构信息未能从会议 PDF 纯文本可靠映射
- Frank Zalkow：机构信息未能从会议 PDF 纯文本可靠映射
- Hans\-Ulrich Berendes：机构信息未能从会议 PDF 纯文本可靠映射
- Paolo Sani：机构信息未能从会议 PDF 纯文本可靠映射
- Christian Dittmar：机构信息未能从会议 PDF 纯文本可靠映射
- Meinard Müller：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

语音与歌唱转换需在保留音素内容与基频旋律的同时替换说话人或歌手身份并处理带伴奏混合信号，难点是语音与歌唱标注稀缺且难以统一建模人声与乐器。该工作先用现成wav2vec2变体提取音素后验概率并结合人声分离得到基频轮廓，再用TRILL提取表演者嵌入并用多乐器Onsets and Frames扩展估计钢琴卷帘，从而构成大规模伪标注。接着条件编码器将音素后验概率、基频与钢琴卷帘沿通道拼接融合为时变条件，并以音频嵌入经特征线性调制注入全局表演者与声学条件。最后频谱解码器对含噪梅尔谱做扩散去噪并经通用BigVGAN声码器合成波形，条件缺失训练还支持仅由部分条件自由生成。与专用语音转换流水线相比，关键差异是将乐器合成中的乐谱与版本声学条件转义为语音的语言与身份条件，并在编码器与解码器同时施加条件以增强表演者相似性。在语音音高保持评测下，T5\-Voc的RPA准确率为83\.0，高于PAD\-Voc的RPA准确率78\.2。联合引入乐器与混合数据后人声质量下降且音素保真度弱于专用模型，带伴奏歌唱仅做了初步声学转换实验，因而跨域统一建模的适用边界受限。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 54. [不靠模态先验，把波形表征和可算特征拼起来反推薄板参数](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-78-299260c60d/)

> 英文题目：*[Physics\-Inspired Feature Fusion for Plate Parameter Estimation from Acoustic Impulse Responses ★](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-78-299260c60d/)*

标签：#CNN #模型融合 #信号处理 #预训练 #音频理解

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.4/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频理解 | 主方法：#模型融合

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_78.pdf)

👥 **作者与机构**

- Zhenyu Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Yun Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Liangming Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Gongping Huang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务是从单通道位移脉冲响应反推六个可辨识板参数，包括单位面积质量μ、归一化弯曲刚度D/μ、归一化张力T0/μ、板长Ly与观测位置xo、yo，其正演模态密集且幅值尺度与衰减耦合，其中位置参数因空间敏感性最难辨识。方法第一步将同一脉冲响应重采样至三十二千赫后送入AudioSet预训练的CNN14骨干，提取层次声学表征并输出二千零四十八维深度嵌入。第二步按公式从同一波形直接计算十五维物理启发特征，分别刻画对数峰值与能量等幅值尺度、时域衰减与低中高频段谱质心带宽等频谱结构，并用训练集均值方差标准化。第三步将深度嵌入与标准化手工向量拼接为二千零六十三维融合表示，送入多层感知机在归一化目标空间回归六个参数，推理时裁剪至零到一区间再逆归一化回物理尺度。相对纯优化反演与纯骨干回归，该融合的关键差异在于不依赖模态分布先验而显式注入衰减与谱结构线索，使学习表征与物理可解释量互补并改善边界处大偏差。在官方合成验证集下，PIFFN的NMSE指标为0\.00362，低于CNN14基线的NMSE指标0\.00786。该结论适用边界受限于官方合成生成流程，尚未验证真实测量噪声与参数范围外推及位置估计失效条件。训练与评估的硬件为单块二十四吉显存的英伟达RTX3090及配套中央处理器服务器，但原文未给出训练时长与推理开销的量化延迟数据。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 55. [把带宽压到低频孤立共振：多分辨率谱图加相位估计板混响参数](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-80-470a75c23f/)

> 英文题目：*[A Multi\-Resolution Spectrogram Approach for Estimating the Physical Parameters of a Plate Reverb](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-80-470a75c23f/)*

标签：#CNN #时频分析 #房间脉冲响应估计

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#房间脉冲响应估计 | 主方法：#CNN

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_80.pdf)

👥 **作者与机构**

- Jared Lipkin：机构信息未能从会议 PDF 纯文本可靠映射
- Meiying Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Benjamin Thompson：机构信息未能从会议 PDF 纯文本可靠映射
- David Anderson：机构信息未能从会议 PDF 纯文本可靠映射
- Andrea Cogliati：机构信息未能从会议 PDF 纯文本可靠映射
- Michael Heilemann：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为板式混响的脉冲响应波形，输出为板高与输出拾音位置等六个导出物理量，实际难点在于高阶模态节线对称导致同一幅度谱对应多个位置，且高频模态重叠严重而难以分辨孤立共振。方法链第一步按模态重叠将脉冲响应下采样30倍至1470Hz以保留前20个孤立共振并将频率分辨率提升至1\.4355Hz，第二步计算N为256、512、1024的多分辨率幅度谱并叠加N为512的相位谱构成四通道图像。第三步将四通道图像送入随机初始化的ResNet\-18直接回归板长等七个原始物理量，再经解析式换算为密度厚度比与刚度比等导出量。相对全频带幅度谱图的关键机制差异在于用带宽限制换取低频分辨率，并用相位信息打破幅度简并，具有在已知板宽与输入位置条件下提升位置估计的实际意义。在200条5秒IR验证集下，M1\-DsPh的Param\. NMSE指标为0\.0058，低于基线的Param\. NMSE指标的0\.0605。该结论适用边界受限于仿真简支板且板宽、输入位置与泊松比已知，尚未验证真实板混响与噪声失配下的失败条件。训练成本为在Intel i9\-11900K加单张RTX 3090上约63分54秒完成42轮训练，推理开销在M2 MacBook Air上200条集平均延迟约6\.47毫秒。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 56. [把中间表示留下来：离线可编辑的分析对象如何成为作曲控制器](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-59-148c0334b2/)

> 英文题目：*[Praat AudioTools: Analysis Objects as Compositional Controllers for Interpretable Sound Transformation](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-59-148c0334b2/)*

标签：#开源工具 #信号处理 #可解释性 #离线推理 #音乐生成

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 0.9/1.5 | 实验充分 0.2/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 1.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_59.pdf)

👥 **作者与机构**

- Shai Cohen：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入为单段源录音与作曲意图，输出为经重组渲染的新声音，难点在于离线分析与合成之间缺乏可检查、可修改的作曲层，致使中间决策不可见且不可复用。所提链条第一步由Praat脚本将源切分为重叠颗粒、静音事件、循环片段或声层，并提取基频、共振峰、质心等描述子，形成可编辑的特征空间。第二步由聚类、吸引子轨迹、相位漂移或退火采样等过程在该特征空间中导航，从而选出纹理区域、事件路径与变奏计划，并写入颗粒表、边界CSV与渲染计划文件。第三步将上述计划送入重组、变速、交叉淡化与空间化模块离线渲染为音频，使先检查修改中间物再出声成为可能。与常规黑盒效果器及端到端生成器相比，其关键机制差异在于保留中间物作为可复用控制器，从而把效果从信号变换转为可编辑表征，支撑透明创作与可重复制作。原文未提供可核对的关键定量结果。适用边界限于离线或半离线制作与教学演示，受限于单机演示环境，尚未验证实时性能与跨素材泛化等外推范围。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://mashav.com/sha/Praat%20AudioTools/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.fon.hum.uva.nl/praat/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 57. [不训练新模型：在编解码器令牌上借音色、保节奏](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-63-2063cc8de8/)

> 英文题目：*[Neural Morphing: Sequence\-Optimized Token\-Level Morphing in Neural Audio Codecs](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-63-2063cc8de8/)*

标签：#软件工具 #检索增强 #实时处理 #音乐 #音频生成

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频生成 | 主方法：#检索增强

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_63.pdf)

👥 **作者与机构**

- Emmanouil Karystinaios：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为提供节奏手势的源音频与提供音色的调色板音频集合，输出为节奏归源、音色归调色板的混合音频，难点在于离散令牌替换极易产生跨文件跳变与包络破坏。方法链分四步：冻结编解码器将波形转为残差向量量化令牌流并切分为重叠颗粒，编解码器诱导描述子在粗中细分组上检索候选，连续性约束序列优化器选出跨颗粒稳定的调色板路径，分组令牌转移与神经解码器完成渲染。与波形拼接和全层替换相比，该链条只在令牌域编辑并用转移代价抑制抖动，用门控实现结构与细节分离控制。在247个调色板片段与打击乐源组成的确定性评测上，束搜索相对贪婪将原始调色板索引抖动由24660降至11520，包络相关保持在0\.986附近。结论仅适用于打击乐与中等规模调色板，和声人声与长时结构尚未验证。原文未披露训练、推理或部署成本之外的学习开销，系统本身无需训练。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 58. [在二维平面上连续试听脉冲响应集合：IRIS 用高斯加权与有界卷积做轻量导航](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-71-09e2e74a33/)

> 英文题目：*[IRIS: Continuous Spatial Navigation of Measured Acoustic Fields via Impulse Response Interpolation](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-71-09e2e74a33/)*

标签：#软件工具 #信号处理 #实时处理 #空间音频信号 #空间音频渲染

评分：**6.0/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.2/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#空间音频渲染 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_71.pdf)

👥 **作者与机构**

- Luna Valentin：机构信息未能从会议 PDF 纯文本可靠映射
- Celeste Betancur Gutiérrez：机构信息未能从会议 PDF 纯文本可靠映射
- Romain Michon：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作处理离散测量多通道脉冲响应集合在二维归一化平面上的连续导航试听问题，输入为离散IR节点位置与游标位置，输出为实时卷积音频，难点在于离散IR无法直接连续内插且全量并行卷积开销不可承受。方法先由游标与各节点平方距离计算高斯权重并经扩展参数控制局域性，其输出进入有界活跃集筛选，经Top\-k与迟滞门限归一化及一阶平滑得到稳定权重。该权重再经可选起音对齐与均方根归一化及边界遮挡衰减调制后，送入并行卷积引擎按权重求和，多通道IR共享同一套选择与权重以保持声场耦合。与显式分离直达声与混响并重建方向信息的感知插值方法不同，该机制用统一权重耦合处理全部通道以换取轻量实时工作流。在Apple M4 Pro上48 kHz与512采样缓冲的定时评测条件下，4个10 s活跃IR条件的耗时指标为7\.10 ms，低于缓冲时长上限条件的耗时指标10\.67 ms。该结论适用边界限于中等规模探索性试听与工作室流程，超低延迟下长IR与大活跃集会超出预算而触发失败条件，尚未验证感知透明性与高阶Ambisonic视角变换。原文无学习训练，推理部署的延迟即上述并行卷积耗时，随IR长度与活跃集规模增长而增大。

🔗 **开源资源**

- 第三方资源：<https://hal.science/hal-04188949/document> — 链接可访问（HTTP 200）
- 第三方资源：<https://aes.org/publications/elibrary-page/?id=17977> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 59. [六个旋钮如何驱动数千个共振模式：语料库标定的参量模态混响](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-06-95cea726c5/)

> 英文题目：*[A Corpus\-Driven Parametric Modal Reverberator](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-06-95cea726c5/)*

标签：#开源工具 #数据集构建 #统计分析 #空间音频渲染

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.1/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#空间音频渲染 | 主方法：#统计分析

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_06.pdf)

👥 **作者与机构**

- Michele Ducceschi：机构信息未能从会议 PDF 纯文本可靠映射
- Leonardo Gabrielli：机构信息未能从会议 PDF 纯文本可靠映射
- Riccardo Simionato：机构信息未能从会议 PDF 纯文本可靠映射
- Riccardo Russo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文输入六个感知控制量直接输出房间脉冲响应，难点在于高层语义与数千个模态频率、阻尼和留数之间映射缺乏物理先验且高度相关难以解耦校准。方法先对大规模实测语料做子带模态分解并以短有限脉冲响应滤波器补偿直达声与早期反射，重合成信号用于提取声学指标与分频带统计构成每条五十维特征表。接着对六维控制做稳健标准化与主成分分析正交化以消除参数相关，前三主成分解释约百分之九十五方差但保留六维保证可逆。然后以稳健线性回归由正交得分预测五频带阻尼与密度，再由能量均分与清晰度恒等式确定幅度与早期能量并内插阻尼曲线保证正定性。与直接拟合特定房间或可微反馈延迟网络调参不同，该工作不建模几何而学习语料级统计映射并以内插阻尼维持物理一致性。在语料回归评测下，低频bass频带阻尼模型的R2rob指标为0\.937，高于高频brilliance频带的R2rob指标0\.747。合成预设落入语料标准化参数云内部而极端旋钮组合明显外偏，表明内插可靠而外推偏离。结论适用边界限于训练语料覆盖的中小型偏平衡房间，外推至极长混响或强染色空间尚未验证。推理开销为标准笔记本电脑上每条脉冲响应参数生成远低于一秒并在44\.1kHz宿主卷积器中实时运行。

🔗 **开源资源**

- 第三方资源：<https://www.openair.hosted.york.ac.uk/> → <https://www.openair.hosted.york.ac.uk/cgi-sys/suspendedpage.cgi> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 60. [有脊的搬土损失：低阶有理比如何卡住双算子 FM 频率估计](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-37-365ae79e59/)

> 英文题目：*[FM Parameter Estimation with Low\-Order Rational Constraints on Wasserstein Loss Landscape](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-37-365ae79e59/)*

标签：#信号处理 #理论分析 #音乐 #音频理解

评分：**6.0/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.1/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频理解 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_37.pdf)

👥 **作者与机构**

- Ryoya Tabata：机构信息未能从会议 PDF 纯文本可靠映射
- Masaki Iwaya：机构信息未能从会议 PDF 纯文本可靠映射
- Kazunobu Kondo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文面向双算子频率调制合成中由目标幅度谱同时估计载波频率与调制器频率的任务，输出两者取值，不同频率配置可产生相似频谱并形成密集局部极小使无约束优化易陷入伪解。方法先以一维沃瑟斯坦距离刻画归一化功率谱间传输代价，利用累积分布差积分与保序匹配得到分段连续损失并输出其梯度结构供优化使用。接着分析负频率折叠与折叠边带排序翻转，论证其在有理频率比处形成不可微脊线并输出相邻低阶有理边界划分的楔形区间。最后将频率比以Sigmoid重参数化约束在单个楔形内做多起点约束优化，以各区间最低沃瑟斯坦损失对应的估计作为最终输出。相对随机初始化无约束搜索，关键差异在于把竞争极小所在区间在结构上排除在搜索空间之外而非仅改善起点，从而避免跨脊陷入邻区伪解。在90个合成测试用例的评测条件下，Constrained方法的成功率指标为96\.7%，高于Random基线的成功率指标68\.1%。该结论适用边界受限于双算子合成且调制指数已知、显著边带低于奈奎斯特频率的情形，真实音频与边界真值情形尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 61. [三点脉冲响应如何撑起一条隧道的可走动混响：Bunkervik 共极点模态引擎](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-72-792fb391d2/)

> 英文题目：*[Bunkervik Spatial Reverb Demo](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-72-792fb391d2/)*

标签：#软件工具 #信号处理 #实时处理 #空间音频信号 #空间音频渲染

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.6/1.5 | 清晰度 0.9/1 | 影响力 0.7/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#空间音频渲染 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_72.pdf)

👥 **作者与机构**

- Craig Webb：机构信息未能从会议 PDF 纯文本可靠映射
- Michele Ducceschi：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作针对长条拱顶避难空间中接收器沿中轴连续移动时的混响一致性问题，输入为干声信号与目标位置及音色控制参数，输出为具有连续空间演变的立体声湿信号，难点在于各位置独立拟合的模态极点存在频偏与阻尼漂移而无法直接插值复残差。方法先由多位置指数正弦扫频与Wiener/Tikhonov正则化解卷积得到脉冲响应，再经重叠子带峰值拾取与带混响时间估计建立初始极点并辅以全局回退，其输出的频点阻尼与复残差进入下一步的统一处理。接着将三套极点拼接并按频率相关容限聚类，以残差幅度加权平均合并为覆盖70Hz至12kHz的6300个共享极点基，消除跨位置同名模态的失配。然后经交替最小二乘联合重拟合各位置残差与256抽头校正滤波器，运行时插值残差与抽头并经模态合成与分数延迟完成渲染。与独立极点直接插值相比，共享极点机制将空间变化转化为同一基下权重的连续变化，因而支持无跳变的行走式漫游并保留原始模态密度。在三处实测位置的拟合验证设置下，组合IIR/FIR优化的时域归一化均方根误差指标为低于3\.5%，低于纯模态基线的时域归一化均方根误差指标，降低幅度为2到3倍。该结论适用边界限于沿中轴线的一维移动与同一固定声源条件，尚未验证二维或三维布置与插值中间位置的外推能力，在Apple Silicon M2 Pro与M4 Max硬件上单核推理开销低于25%。

🔗 **开源资源**

- 演示资源：<https://nemusproject.eu/resources/software-downloads/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 62. [有输出不等于有证据：把可用性、确认锁定和预测延续分开算的时间码恢复对照](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-17-7bc05b7395/)

> 英文题目：*[Robust Recovery of Deterministic Timecode Signals Under Analog Degradation](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-17-7bc05b7395/)*

标签：#信号处理 #鲁棒性 #实时处理 #音频交互

评分：**5.9/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_17.pdf)

👥 **作者与机构**

- Brady Cruse：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

数字唱机系统需从44\.1kHz立体声时码波形中因果恢复绝对位置、速度与方向的播放控制轨迹，难点在于加性噪声会增删过零点而突发丢失会直接抹除判决事件。先将立体声观测波形输入基线去除与过零检测前端，其职责是消除慢漂并产生候选 crossing 事件，输出的候选事件序列进入自适应迟滞环节。再将候选事件序列输入自适应幅度包络调节的迟滞比较与孤立冲击抑制，其职责是拒绝弱幅与脉冲型误 crossing，输出的可靠 crossing 序列进入位判决与查找环节。最后将可靠 crossing 序列输入互补通道幅值位判决与20位线性反馈移位寄存器查找，其职责是映射绝对位置并经25次连续有效转移确认锁定，输出的确认状态进入时域保持分支在中断后用滤波速度估计在30毫秒内做标记外推。在噪声与信号均方根比为0\.06的10秒片段评测条件下，自适应门限解码器的确认可用率指标为0\.936，高于固定门限解码器的确认可用率指标0\.868。相对固定门限仅依赖固定裕量，自适应包络保留了波形存在但裕量失配时的确认输出，而时域保持把连续性与新证据显式区分，使64采样重复丢失下总可用率提升但确认率不变。上述结论适用边界受限于单profile单向标称速度的合成孤立退化，削波与丢失的共享采集边界及硬件通道效应尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/xwax/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 63. [把三处非线性压成一处：OCD 非对称削波的显式波数字建模](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-24-cfbf334bad/)

> 英文题目：*[Explicit Wave Digital Model of the Fulltone OCD Pedal Based on Canonical Piecewise\-Linear Functions](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-24-cfbf334bad/)*

标签：#信号处理 #高效推理 #实时处理 #音乐 #音频生成

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_24.pdf)

👥 **作者与机构**

- Riccardo Giampiccolo：机构信息未能从会议 PDF 纯文本可靠映射
- Stefano Polimeno：机构信息未能从会议 PDF 纯文本可靠映射
- Carlo Macrì：机构信息未能从会议 PDF 纯文本可靠映射
- Alice Lenoci：机构信息未能从会议 PDF 纯文本可靠映射
- Oliviero Massi：机构信息未能从会议 PDF 纯文本可靠映射
- Alberto Bernardini：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为吉他干声电压\(Vin\)，输出为经三级放大与非对称削波后的\(Vout\)，难点在于两个二极管连接型MOSFET与一个锗二极管构成的并串削波网络在波数字域形成多端口无延迟环，传统迭代求解难以满足实时约束。该工作先按理想运放假设将Fulltone OCD拆为线性输入级、非线性削波级与线性输出级，前者输出为后者提供激励并隔离运放拓扑。接着把图3a并联削波子电路在Simscape中仿真为单端口伏安特性，并以自适应非均匀选点拟合正则分段线性波映射，其输出直接作为根节点非线性块的显式求值输入。最后将线性部分固定散射矩阵与根节点显式求值串成叶到根再折返的前向后向流程，避免每采样点重算散射矩阵与内层不动点迭代。与保留三个非线性端口的散射迭代法相比，关键差异在于用拓扑等效与分段仿射封闭映射消除多环耦合，其实质是将多次迭代收敛转化为一次查表式映射求值。在96 kHz单频正弦测试设置下，显式模型的实时比指标为0\.14，低于迭代模型的实时比指标3\.12。该结论适用边界仅限于单频大信号稳态与Simscape参考比对，扫频、动态拨弦、旋钮全行程与听感外推尚未验证。推理开销在Apple Silicon M1 Pro硬件上经100次重复测量得到上述实时比，显式方法约快22倍并实现超实时。

🔗 **开源资源**

- 第三方资源：<https://generalguitargadgets.com/pdf/ggg_ocdist_sc.pdf> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 64. [帧内也会变化的乐音：用分布导数法估计多项式调幅调频正弦](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-34-b13efcb6cf/)

> 英文题目：*[Using the Distribution Derivative Method to Model Acoustic Musical Instrument Sounds with Polynomial AM\-FM Sinusoids](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-34-b13efcb6cf/)*

标签：#信号处理 #主观评测 #音乐 #音乐生成

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.7/1 | 影响力 0.9/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_34.pdf)

👥 **作者与机构**

- Marcelo Caetano：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为单声道声学乐器波形，输出为多项式调幅调频正弦分量合成波形加建模残差，难点是起振瞬态与强非平稳调制在同一短帧内并存，准平稳正弦假设会丢失帧内时变能量与滑音细节。方法先以加窗傅里叶变换构造紧支撑检验函数及其导数，利用分布理论把对未知信号的求导转移为对已知窗函数的求导，得到关于多项式系数的线性估计方程。该方程在每个谱峰主瓣内取多个离散傅里叶变换频点联立为超定方程组，用伪逆求解高阶调制系数并以最小二乘估计恒定幅度与初相，上一阶段的频点内积直接构成下一阶段线性系统的行。然后按绝对电平、相对电平、平均峰谷差与主瓣带宽阈值筛选可信谱峰，经交叠相加合成时域波形。与仅在合成端做相位插值的标准正弦模型加功率定标和全频带迭代拟合自适应准谐波模型相比，该方法在分析帧内直接估计对数幅度与相位多项式，故能刻画帧内包络起伏与频率滑动而不把高频噪声当作谐波拟合。在MUSHRA评测条件下，eaQHM的指标F为25\.86，高于SM\+的指标F 20\.31。该结论适用边界受限于forte与fortissimo单音样本、固定三阶模型与特定峰值筛选设置，对复调、语音、混响与低动态弱能量帧尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 65. [检索与合成分开做会断流：QuAP 把找声音和造声音放进同一个插件](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-53-bbb212a785/)

> 英文题目：*[Quality Audio Prototyping: A Prototype System for Unified Sound Retrieval and Procedural Generation](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-53-bbb212a785/)*

标签：#软件工具 #CNN #用户研究 #音频生成 #音频检索

评分：**5.9/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.9/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频检索 | 主方法：#CNN

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_53.pdf)

👥 **作者与机构**

- Nelly Garcia：机构信息未能从会议 PDF 纯文本可靠映射
- Aditya Bhattacharjee：机构信息未能从会议 PDF 纯文本可靠映射
- Gabryel Mason\-Williams：机构信息未能从会议 PDF 纯文本可靠映射
- Israel Mason\-Williams：机构信息未能从会议 PDF 纯文本可靠映射
- Emmanouil Benetos：机构信息未能从会议 PDF 纯文本可靠映射
- Joshua Reiss：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

影视音效设计需在本地大库中按声学相似快速定位非语音非音乐素材，找不到合适录音时又要面对难调的参数合成，检索与生成割裂打断创意流。QuAP以统一JUCE插件承接混合流程，输入为本地音效库与拖拽音频示例或文本元数据，输出为相似检索排序、可调程序化声音及其叠层混音。离线阶段用AudioSet预训练加FSD50K监督对比微调的MobileNetV3提取全库嵌入并存入FAISS向量库，后台异步建索引以支撑快速查询。在线阶段将查询映射到同一嵌入空间做近邻检索，并行调用Nemisindo引擎中六类加法、模态、物理启发与减法合成器生成变体，再进入混合层叠加。规则式参数助手将特征驱动瓶颈框架验证的感知有效区间与白话解释叠加在合成控件上，保留设计者主导权，这是相对割裂式检索或合成工具的关键机制差异。在FSD50K保留测试集下，MobileNetV3的mAP指标为0\.449，高于ResNet18\-IBN基线的mAP指标0\.412。20人MUSHRA显示火等五类显著改善而火箭未显著、爆炸优化反降，16人研究中75%认为对工作流有用，表明其适用边界受限于六类特定音效的探索性打底与叠层，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://quap.netlify.app/> — 链接可访问（HTTP 200）
- 演示资源：<https://saop-project.netlify.app/> — 链接可访问（HTTP 200）
- 复现相关资源：<https://quap.netlify.app/> — 链接可访问（HTTP 200）
- 第三方资源：<https://juce.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://nemisindo.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://splice.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://krotos.com/> — 链接可访问（HTTP 200）
- 第三方资源：<https://elevenlabs.com/> — 暂时无法访问
- 第三方资源：<https://www.izotope.com/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 66. [双声泛音靠声道形状算出来：可微波导怎样复制 sygyt](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-39-3fae2552c3/)

> 英文题目：*[Differentiable Articulatory Copy\-Synthesis of Biphonic Singing](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-39-3fae2552c3/)*

标签：#信号处理 #主观评测 #发声与构音 #歌唱生成

评分：**5.8/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 1.0/1.5 | 清晰度 0.9/1 | 影响力 0.6/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#歌唱生成 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_39.pdf)

👥 **作者与机构**

- Mateo Cámara：机构信息未能从会议 PDF 纯文本可靠映射
- María Pilar Daza：机构信息未能从会议 PDF 纯文本可靠映射
- Fernando Marcos：机构信息未能从会议 PDF 纯文本可靠映射
- Jose Luis Blanco：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

图瓦sygyt双音歌唱要求在持续低音drone上于1–3kHz内靠声道成形选择性放大单条高次谐波，输入为棚录波形，输出为重合成音频与可解释声道形状，难点是窄带高Q共振对构音微扰极敏感且标准低维参数化难以复现聚焦共振。方法先用YIN估计主基频并在高分辨率谱中检测二次至十次谐波中的激活泛音编号与频率，双轨迹全程固定为后续合成提供激励约束。接着以双Liljencrants\-Fant源驱动口腔加鼻腔加舌下管三耦合波导，主源驱动全管、次源在口腔三通结注入泛音能量，经Kelly\-Lochbaum散射与空间可变乘性阻尼控制共振峰带宽，管径与阻尼由三次B样条控制点保证连续并允许局部窄收缩。最后以多分辨率频谱加Mel加谐波能量加能量加泛音显著性损失联合Adam端到端优化波导参数，使上一步的管形直接拟合目标频谱。在20段录音的消融评测设置下，全量B样条模型的LSD指标为9\.34±0\.49 dB，低于无舌下次源条件的LSD指标10\.32±0\.56 dB。相对逐谐波幅度自由的DDSP谐波加噪声基线，关键差异是以管共振可实现流形约束解空间而非无约束谱控制，相对Pink Trombone式构音链则以B样条柔性表示与次源激励增强泛音区聚焦。该结论适用边界受限于20段棚录sygyt短片段，kargyraa、野外录音与变调滑音联合优化等尚未验证。在AMD Ryzen 7硬件上单段5s约需30min优化，实时推理超出范围。

🔗 **开源资源**

- 演示资源：<https://mateocamara.com/khoomei-supp-materials> → <https://mateocamara.com/khoomei-supp-materials/> — 链接可访问（HTTP 200）
- 第三方资源：<https://dood.al/pinktrombone/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 67. [不做梯度迭代：用矩阵铅笔定极点、最小二乘定增益恢复平板混响模态](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-86-402a56622f/)

> 英文题目：*[Non\-iterative Modal Parameter Estimation for Plate Reverbs via Matrix\-Pencil\-Guided State Space Model Initialization](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-86-402a56622f/)*

标签：#信号处理 #状态空间模型 #可解释性 #房间脉冲响应估计

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#房间脉冲响应估计 | 主方法：#状态空间模型

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_86.pdf)

👥 **作者与机构**

- Matthias Bittner：机构信息未能从会议 PDF 纯文本可靠映射
- Axel Jantsch：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

板式混响建模需从单通道长时脉冲响应中恢复数千模态的频率、衰减与增益，输出为可解释的并联二阶全极点滤波器参数，难点在于高频模态密集交叠且总模型阶数未知。方法分三步：先以频谱丰富度回归估计总模态数以确定模型阶数，其输出直接决定后续需补足的模态数量。再以矩阵铅笔法估计低频子集极点并拟合衰减随频率的多项式关系，在最高估计频率至上限间均匀采样频率并外推衰减得到剩余高频极点。最后将全部极点装入对角复值状态空间模型初始化特征值，以单脉冲激励求状态响应并经最小二乘闭式求解输出权重再换算为模态增益。与需迭代梯度优化的前作及峰值检测基线相比，该方案以线性基展开替代梯度学习，保留频率衰减到复特征值的直接映射并维持可解释表示。在自生成17条脉冲响应评测下，本方法的RE为0\.78，低于基线的RE 1\.96。该结论适用边界受限于合成板数据与匈牙利匹配评测，高频外推依赖衰减随频率光滑变化假设，失配时外推性能下降，尚未验证真实录制板混响的泛化；在硬件为2×Intel Xeon Gold 5118服务器上，16条测试集推理开销约42分钟，单条矩阵铅笔分解约30秒。

🔗 **开源资源**

- 第三方资源：<https://scikit-learn.org/stable/modules/isotonic.html> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 68. [薄板混响有数千个挤在一起的模态，双流如何同时看全局与局部衰减](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-91-caea976e06/)

> 英文题目：*[A Dual\-Stream Framework Combining Audio Spectrogram Transformer and Dynamic Mode Decomposition for Plate Modal Parameter Estimation ★](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-91-caea976e06/)*

标签：#模型融合 #信号处理 #Transformer #预训练 #房间脉冲响应估计

评分：**5.7/10** | 创新 1.3/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#房间脉冲响应估计 | 主方法：#Transformer

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_91.pdf)

👥 **作者与机构**

- Yun Zhang：机构信息未能从会议 PDF 纯文本可靠映射
- Liangming Chen：机构信息未能从会议 PDF 纯文本可靠映射
- Zhenyu Guo：机构信息未能从会议 PDF 纯文本可靠映射
- Wei Liu：机构信息未能从会议 PDF 纯文本可靠映射
- Gongping Huang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

板混响逆问题输入为1秒位移脉冲响应，输出为20Hz至10000Hz带内变长模态集的固有频率、衰减系数与模态增益，难点在于数千密集交叠模态难以分离与计数。方法先将响应映射到10000槽对数频率网格并做衰减与增益压缩归一化，建立统一离散表示与监督目标。全局分支用AudioSet预训练音频谱Transformer提取频谱时序表征，局部分支在短时傅里叶变换邻域做低秩动态模态分解得到衰减与幅值描述子。两路特征在统一网格拼接融合后经卷积共享编码，再由三个并行卷积头分别预测模态存在概率、衰减与增益，经阈值化与反归一化恢复参数。与谱峰拾取基线相比，该设计以全局上下文定位候选结构，以局部指数衰减先验分辨近邻模态，兼顾数据驱动表示与物理可解释性。在官方1000条合成验证集下，所提方法的总体相对误差指标RE为0\.867，低于谱峰拾取基线的RE1\.976。结论适用边界受限于合成板数据与上述评测带，真实板材非线性与噪声外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 69. [把采样率换掉而不重训：固定时长帧上的傅里叶神经算子如何做虚拟模拟](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-27-788a513293/)

> 英文题目：*[Fourier Neural Operators for Sample\-Rate\-Independent Virtual Analog Modeling](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-27-788a513293/)*

标签：#时频分析 #鲁棒性 #音乐 #音频生成

评分：**5.7/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#时频分析

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_27.pdf)

👥 **作者与机构**

- Oliviero Massi：机构信息未能从会议 PDF 纯文本可靠映射
- Alessandro Ilic Mezza：机构信息未能从会议 PDF 纯文本可靠映射
- Alberto Bernardini：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

虚拟模拟需把连续时间非线性电路映射为离散时间模型，输入为吉他干声与扫频信号，输出为经晶体管饱和的波形，难点是训练采样率被隐式编码进参数导致变采样率即变动力学。本文把固定时长区间上的帧映射定义为算子学习问题，先以加窗切帧把长信号转为固定支撑函数，为频域算子提供统一输入。再用改进傅里叶层在频域做带限线性变换并在时域加非线性，细化后特征送入砖墙低通与通道多层感知机投影并下采样回原分辨率。最后以重叠相加合成长信号，实现任意长度音频的连续重建。与延迟线插值的采样率无关循环网络相比，关键差异是谱权重只作用于低频模式且与快速傅里叶变换点数无关，因而同一算子可直接评估于不同密度网格并天然支持下采样。在留出吉他片段评测条件下，LIDL\-RNN在96 kHz场景的指标MAE为2\.333，高于其在48 kHz条件的指标MAE 2\.173。该结论适用边界受限于单级Big Muff Pi输入级仿真数据与客观误差指标，尚未验证多拓扑电路、真实硬件测量与听感偏好；原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 70. [先猜五维再对波形：可微合成与粒子群如何把板混响参数推到近乎完全恢复](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-82-199a7be180/)

> 英文题目：*[Transformer\-Based Plate Parameter Estimation with Differentiable and Particle\-Swarm Refinement](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-82-199a7be180/)*

标签：#开源工具 #流匹配 #时频分析 #Transformer #音频理解

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.2/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频理解 | 主方法：#Transformer

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_82.pdf)

👥 **作者与机构**

- David Marttila：机构信息未能从会议 PDF 纯文本可靠映射
- Rodrigo Diaz：机构信息未能从会议 PDF 纯文本可靠映射
- Pablo Tablas de Paula：机构信息未能从会议 PDF 纯文本可靠映射
- Ilias Ibnyahya：机构信息未能从会议 PDF 纯文本可靠映射
- Chin\-Yun Yu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务以矩形板混响脉冲响应为输入，反推含面密度在内的6维有效物理参数，难点在于模态频率与衰减对刚度张力高度非线性敏感，且峰值归一化会丢失绝对幅度信息。共享编码器先将降采样后IR的全长对数谱、1秒波形、衰减谱图与保留峰值增益分别经卷积茎与嵌入拼成特征标记。回归变换器或条件连续归一化流据此输出五参数点估计或50个候选分布样本，作为初值进入精修阶段。可微合成器以峰值归一化波形L1为目标做梯度下降，或以粒子群全局搜索加梯度抛光闭环提纯，最优候选再按峰值幅度解析恢复面密度。相对纯前向回归，关键差异是将可微物理合成与无梯度全局搜索作为可验证精修层，而非仅依赖回归精度，因而具有闭环可检验的实际意义。在100条合成留存IR评测设置下，PSO加梯度抛光的波形L1指标为6\.84·10−6，低于50个流采样最优候选的波形L1指标2\.13·10−2。该结论适用边界仅限匹配合成器与合成分布，实测IR与模型失配等场景尚未验证。训练成本为单块A100上约20小时与45小时，单条IR精修的推理开销约三至五分钟。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 71. [不做频谱，直接读波形：用 CNN\-GRU 从板混响脉冲响应反推六个可辨识物理参数](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-85-7acc754789/)

> 英文题目：*[Neural Networks for Physical Parameter Estimation of Plate Reverberation from Impulse Responses ★](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-85-7acc754789/)*

标签：#CNN #RNN #高效推理 #音频理解

评分：**5.6/10** | 创新 1.0/2 | 技术严谨 1.2/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频理解 | 主方法：#RNN

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_85.pdf)

👥 **作者与机构**

- Jia\-Chang Yang：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

第1届DAFx参数估计挑战任务A要求从单通道非归一化板混响位移脉冲响应估计6个可辨识物理参数，难点在于模态拍频与长衰减耦合了刚度、张力、几何与拾音位置，且原始材料参数本身不可唯一辨识。一维卷积编码器先将44\.1kHz波形降采样为局部时序特征序列，为长程建模保留振幅尺度。双层双向门控循环单元接着聚合长程模态依赖并经时间平均池化得到定长表示，输入全连接回归头。全连接头经Sigmoid输出归一化参数并经区间逆变换恢复物理量纲，以均方误差在归一化目标上用AdamW优化。与按样本迭代优化的粒子群优化基线相比，该方案以单次前向推理替代反复仿真比对，因而避免推理期迭代优化。在官方ModalPlate生成的150例开发测试集评测下，CNN\-GRU估计器的参数归一化均方误差指标为0\.0499，低于PSO基线的参数归一化均方误差指标0\.0618。结论的适用边界目前仅限1\.0秒合成无噪对齐数据，真实测量、噪声与盲测分布外推能力尚未验证。在单张NVIDIA RTX A6000硬件上平均推理开销从每响应36\.46秒降至1\.10秒，仅为基线约3\.0%运行时。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 72. [在混响房间里保住方向：闭合包络串扰逆解码器的补偿逻辑](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-15-6b593d4396/)

> 英文题目：*[Ambisonic Decoder Equalization in Reverberant Environments via Closed\-Hull Crosstalk Inversion](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-15-6b593d4396/)*

标签：#信号处理 #空间音频信号 #去混响 #空间音频渲染

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#去混响 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_15.pdf)

👥 **作者与机构**

- Alex Tung：机构信息未能从会议 PDF 纯文本可靠映射
- Mark Rau：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务输入为Ambisonics信号向量，输出为26通道扬声器信号，难点在于听音室混响会污染高阶Ambisonics解码后的空间线索，需在混响房间内重建无混响球面包络声压。方法先用常规解码矩阵将信号渲染到25点球面控制点得到中间信号，再将房间脉冲响应经1ms至4ms交叉渐隐与2000Hz低通预处理后按频率做Tikhonov正则化左伪逆求解串扰逆矩阵，最后经矩阵卷积将中间信号映射为扬声器信号。求解时以最大行范数二分搜索选正则系数，并要求控制点球面边界包含于扬声器闭合边界且听音区无挡板，以满足Kirchhoff\-Helmholtz外源条件。与仅用共位点约束混响的已有串扰逆方法不同，该方法以外层扬声器到内层控制点的径向单调空间变换保留完整球面声压分布，具有全周向补偿意义。在仿真房间评测条件下，现解码器单源条件的能量提升指标为约10 dB，高于相干双源条件的能量提升指标约6 dB。结论适用边界受限于单仿真房间、固定阵形与客观能量分析，房间失配、头部转动与主观定位等尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 73. [把和声距离写进傅里叶权重：对齐与插值音高分布的可逆工具箱](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-20-b6deb924f7/)

> 英文题目：*[Perceptually Motivated Alignment and Interpolation of Pitch\-Aligned Time\-Frequency Representations](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-20-b6deb924f7/)*

标签：#时频分析 #听觉与音乐认知 #音乐信息检索 #音乐 #音乐生成

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐生成 | 主方法：#时频分析

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_20.pdf)

👥 **作者与机构**

- Shahan Nercessian：机构信息未能从会议 PDF 纯文本可靠映射
- Jeff Sontag：机构信息未能从会议 PDF 纯文本可靠映射
- Alejandro Koretzky：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理以色谱图与音级分布为输入的音高对齐时频表示对齐与插值，输出保持感知协和性的置换对齐与连续过渡，难点在于欧氏距离不符合听感且调性本身存在模糊性。先以十二维色谱向量为输入，将音调区间向量重构为可逆且可选正交的变换并扩展到多八度表示，输出保留协和加权的音调区间向量。再以该加权向量为输入，经逆变换滤波得到感知平滑且仍对齐音高轴的时频表示，使后续距离更贴合协和感知，该平滑表示直接作为对齐空间进入下一步。最后以平滑空间距离为代价求解置换对齐得到离散对应，并将对齐后的音高分布经四五度圈置换送入圆周最优传输做位移式插值，辅以圆柱形音阶几何表示输出连续过渡。相对直接在色谱上做互相关或线性淡入淡出，感知加权与位移式搬运更贴近声部进行与和声邻近性。在D大调I\-IV\-V\-I与C小调固定旋律合成对齐任务下，argsort\+2\-opt的距离指标为4\.350，低于argsort的距离指标5\.361。该结论适用边界受限于12维色谱与合成扰动，对真实录音、复调织体与跨调式外推尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://tiv-ext.netlify.app/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 74. [把非线性装进波数字滤波器：KAN 以更少参数逼近多二极管散射映射](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-25-a0ef589183/)

> 英文题目：*[A Comparative Study of Kolmogorov\-Arnold Networks and Multi\-Layer Perceptrons for Virtual Analog Modeling in Wave Digital Filters](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-25-a0ef589183/)*

标签：#信号处理 #模型比较 #高效推理 #音频生成

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：应用研究 | 主任务：#音频生成 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_25.pdf)

👥 **作者与机构**

- Riccardo Giampiccolo：机构信息未能从会议 PDF 纯文本可靠映射
- Enrico Torres：机构信息未能从会议 PDF 纯文本可靠映射
- Mauro Giuseppe de Bari：机构信息未能从会议 PDF 纯文本可靠映射
- Samuel Limier：机构信息未能从会议 PDF 纯文本可靠映射
- Alberto Bernardini：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文任务是在波数字滤波器中显式仿真含多个二极管的模拟滤波器，输入为入射波向量\(a\)、输出为反射波向量\(b\)，难点在于多端口非线性散射映射\(b=f(a)\)形成延迟自由环而难以解析求解。方法链第一步在基尔霍夫域按扩展Shockley模型均匀采样二极管电压并计算电流，负责提供覆盖工作区的原始伏安数据。第二步经向量波变换将电压电流对映射到波域构造回归对\((a,b)\)，并按八二比例划分训练与测试集，直接为网络学习提供监督目标。第三步用单隐层多层感知机或柯尔莫哥洛夫\-阿诺德网络学习该映射并以Cauchy损失优化，再将训练好的网络块置于连接树根节点并配合已适配线性元件完成逐采样显式递推。与多层感知机在线性权重矩阵间施加固定激活不同，柯尔莫哥洛夫\-阿诺德网络在边上学习一维B样条函数而在节点仅求和，因而能以更窄宽度刻画组合结构并保留可解释的边函数。在800 Hz方波驱动测试条件下，KAN的NMSE指标为\(6\.6\\times 10^\{\-3\}\)，高于MLP的NMSE指标\(3\.8\\times 10^\{\-3\}\)。该结论适用边界受限于单一Arturia MiniBrute低通电路、单一激励与44\.1 kHz四倍过采样条件，尚未验证多非线性多端口扩展时的优势。原文指出KAN以更高计算量换取约70%参数压缩，其推理开销明显高于多层感知机实现。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 75. [时变全通滤波器为何会削波：把系数增量关进阈值笼子](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-45-1d2cf48a9f/)

> 英文题目：*[A Clipping Prevention Method for All\-Pass Digital Filters with Time\-Varying Coefficients](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-45-1d2cf48a9f/)*

标签：#自适应滤波 #端侧运行 #实时处理 #去削波

评分：**5.6/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#去削波 | 主方法：#自适应滤波

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_45.pdf)

👥 **作者与机构**

- Federico Fontana：机构信息未能从会议 PDF 纯文本可靠映射
- Silvia Pasin：机构信息未能从会议 PDF 纯文本可靠映射
- Alberto Bernardini：机构信息未能从会议 PDF 纯文本可靠映射
- Stefano D’Angelo：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为幅度满足\|x\[n\]\|≤M的音频信号，输出为经一阶或二阶时变全通滤波器后的信号，难点在于系数快速跳变及其后瞬态会使输出冲破阈值M，而传统能量保持结构仍可能削波。该方法先用冻结系数的静态影子结构算出参考输出w\[n\]以分离系数增量的贡献，再由非削波条件\|w\[n\]\+τ\[n\]\|≤M推导系数增量允许区间并在每采样步按区间截断增量，最后用修正系数计算输出，二阶时将总预算对半分给两个系数以保证三角不等式成立。与事后检测修复或压缩限幅不同，该机制直接约束系数动力学且仅在将越界时介入，平时释放系数追踪目标值，因而保留输入完整性与全通数值特性。在十秒音频基准测试设置下，二阶结构的处理时间指标为4\.9ms，高于一阶结构的处理时间指标3\.8ms。该结论适用边界受限于直接I型实现且输入本身不削波的情形，尚未验证其他全通拓扑与内部状态削波。C\+\+实现的推理开销约为标准结构计算量的3倍左右。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 76. [一次仿真、一次回归：用 372 维描述子把单条板混响脉冲反推回六个物理参数](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-81-33c2c50fbe/)

> 英文题目：*[Simulation\-Based Plate\-Reverb Parameter Estimation from a Single Impulse Response ★](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-81-33c2c50fbe/)*

标签：#模型集成 #信号处理 #高效推理 #房间脉冲响应估计

评分：**5.5/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#房间脉冲响应估计 | 主方法：#模型集成

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_81.pdf)

👥 **作者与机构**

- Minhui Lu：机构信息未能从会议 PDF 纯文本可靠映射
- Joshua Reiss：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

第1届DAFx参数估计挑战任务A要求从单条未归一化板混响脉冲响应估计包含表面密度与刚度张力等六维物理与观测参数，密集重叠模态使频率幅值与衰减线索分散且量纲差异大。方法先用公开ModalPlate模拟器按公开范围采样原始参数并合成5秒位移响应以构造训练对，再将每条响应映射为372维涵盖尺度频谱与衰减的描述子。接着对归一化到允许区间的六个目标逐参数训练极端随机树与直方图梯度提升回归器并平均得到物理估计，最后经可行原始参数映射调用模拟器再生响应提交。与逐目标迭代仿真寻优的粒子群优化不同，该方法将仿真调用摊销到离线训练，推理仅需一次特征提取与回归因而无需优化迭代。在Validation 2验证集条件下，最终树集成的NMSE指标为0\.012935，低于官方默认PSO的NMSE指标0\.046023。该结论适用边界受限于模拟器匹配分布，两组独立合成验证集结果相近但16条真实目标因标签隐藏只能做音频侧一致性检查且点估计不带不确定性。在苹果M1 Pro笔记本硬件上验证集推理开销为10\.75秒处理全集，远低于同条件默认PSO的2252\.59秒，但计时不含数据生成与训练成本。

🔗 **开源资源**

- 第三方资源：<https://github.com/LOGUNIVPM/1st-DAFx-Challenge/tree/main/> — 链接可访问（HTTP 200）
- 第三方资源：<https://github.com/LOGUNIVPM/1st-DAFx-Challenge> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 77. [保留弹奏、只换效果：Clean2FX 用标签条件让同一段干琴长出十种音色](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-58-2a93f11a8d/)

> 英文题目：*[CLEAN2FX: Label\-Conditioned Modeling for Clean\-to\-Effect Guitar Audio Transformations](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-58-2a93f11a8d/)*

标签：#CNN #时频分析 #变分自编码器 #音乐 #音乐生成

评分：**5.5/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.8/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐生成 | 主方法：#CNN

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_58.pdf)

👥 **作者与机构**

- Oliverio Bombicci Pontelli：机构信息未能从会议 PDF 纯文本可靠映射
- Iran Roman：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

干净到效果吉他变换以干净吉他录音与十类目标效果标签为输入，输出保留音高节奏与演奏内容但叠加失真调制延迟或混响声学特征的信号，难点在于从宽带谐波重塑到长时混响尾音的异质变换跨度大且需解耦内容与效果。方法链先由EGFxSet真实硬件单音拼装和弦旋律与混合时间线并做共享峰值归一化，得到内容固定而效果为唯一变化轴的配对数据，再将16kHz音频转为257×613幅度谱并以线性或对数压缩表示送入条件网络，最后由五层残差U\-Net预测非负幅度残差并用Griffin\-Lim估计相位合成波形。与仅在潜变量拼接条件的变分自编码器不同，最优U\-Net在瓶颈解码器与跳跃连接三处注入特征线性调制并做条件丢弃，使标签持续控制多尺度重建并保留谐波细节。在EGFxSet配对评测设置下，ConvVAE的MSE为4\.09×10−4，低于未处理输入基线的MSE 5\.16×10−4。该结论适用边界受限于EGFxSet衍生分布与幅度谱客观指标，对真实演奏泛化尚未验证且延迟混响感知增益微弱构成失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 78. [手腕不动琴：把传感、映射与效果链收进同一个 Csound 文件的 L\-Bow](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-75-e790200be4/)

> 英文题目：*[L\-BOW: Gesture\-Driven Digital Audio Effects for Augmented Violin in a Unified Csound Environment](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-75-e790200be4/)*

标签：#软件工具 #信号处理 #实时处理 #音乐 #音频交互

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：前50% | 文档类型：系统技术报告 | 主任务：#音频交互 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_75.pdf)

👥 **作者与机构**

- Jinlan Zhao：机构信息未能从会议 PDF 纯文本可靠映射
- Richard Boulanger：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

增强小提琴任务输入为腕部六自由度惯性测量单元运动流与现场小提琴音频，输出为随弓法手势实时变化的电子化声音，难点在于现场演出不容映射失误且错误会即时可闻。方法链第一步由腕带采集端负责传感量化，惯性测量单元经微控制器将三轴加速度与三轴角速度映射为可直读数值后经串口直传进入采集端。第二步由采集整形端负责接入与平滑，采集单元经原生串口读码读取六通道后做平滑并缩放至物理量程，存入全局变量供全曲调用进入声音生成。第三步由模式调度与共享效果链负责声音生成，调度单元依脚踏切换演奏模式预设，音频路由单元引入现场音频经级联效果与限幅输出。与已有解析加转发中间件方案的关键机制差异是取消外部运行时与网络端口配置，使固件、串口路径与单个乐谱文件构成闭环，从而减少现场故障点与维护负担。在受控触发比较设置下，原文未提供可核对的关键定量结果。该结论适用边界受限于按钮触发的粗粒度比较，连续手势映射精度与跨演奏者泛化等外推范围尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 79. [把时间藏进相位的巨型频谱：用群延迟成组搬移保住音符包络](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-02-2f95b723e6/)

> 英文题目：*[Group Delay Manipulation for Creative Sound Transformation with the Giant FFT](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-02-2f95b723e6/)*

标签：#信号处理 #离线推理 #音乐 #音频生成

评分：**5.5/10** | 创新 1.4/2 | 技术严谨 1.0/1.5 | 实验充分 0.4/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.2/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_02.pdf)

👥 **作者与机构**

- Ted Apel：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入为整段音频波形，输出为保持频谱包络与事件内部相干而整体搬移事件时间的重合成音频，难点在于巨型变换相位值不对应可感知的逐点时间量，逐点改相位会破坏同属一事件的多频点相位关系而把离散事件抹成持续嗡鸣。先对整段输入按预期位移量前后补静音再补零至2次幂做单次实数傅里叶变换，职责是获得无循环混叠的巨型表示，输出为幅度谱与解缠相位谱。再将上步解缠相位输入相邻差分求群延迟并按采样率与变换长度换算为秒，职责是把不可读相位转为每频点能量时间重心，输出为聚类于事件时刻的群延迟谱。最后将上步群延迟谱与幅度谱共同输入，职责是以平滑幅度峰为中心划分频段并按重心均值聚组绑定同事件频点，再在组内统一加常数实现时移或加正弦调制产生时间复制，累加积分还原相位后结合原幅度逆变换输出音频。相比Mammut非相干操作与零相位对称化，该机制以整组为单位平移相位斜率从而整体搬运包络而非破坏相干。原文未提供可核对的关键定量结果。适用边界为音高清晰且事件频带少重叠的独奏或琶音片段，持续复调共享频点时群延迟仅为加权平均而受限无法独立搬运，原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://vud.org/giant-fft-group-delay/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 80. [把听觉模型变成可微损失：同一套梯度优化重做声像与甜点](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-13-5c8adcd306/)

> 英文题目：*[Perceptual Optimisation of Loudspeaker\-Based Reproduction](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-13-5c8adcd306/)*

标签：#端到端学习 #空间音频 #空间音频信号 #空间音频渲染

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#空间音频渲染 | 主方法：#端到端学习

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_13.pdf)

👥 **作者与机构**

- Antoine Souchaud：机构信息未能从会议 PDF 纯文本可靠映射
- Llado Pedro：机构信息未能从会议 PDF 纯文本可靠映射
- Rapolas Daugintis：机构信息未能从会议 PDF 纯文本可靠映射
- Annika Neidhardt：机构信息未能从会议 PDF 纯文本可靠映射
- Zoran Cvetkovic：机构信息未能从会议 PDF 纯文本可靠映射
- Enzo De Sena：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作输入单声道虚拟源信号与扬声器到虚拟听者传播配置，输出多通道有限冲激响应滤波器，难点在于物理误差不可避免而传统能量向量类准则无法刻画听者朝向与双耳感知。所提感知优化框架先经渲染阶段由可学习滤波器生成扬声器信号，该扬声器信号进入传播阶段结合距离衰减、整数延迟与头部相关冲激响应合成双耳信号。传播合成的双耳信号再进入损失阶段计算可微定位、音染与不确定性损失并反向传播更新滤波器，从而形成渲染到传播再到损失的闭环优化链。与矩阵求逆或查表增益不同，该方法以可微感知模型直接优化感知属性，并支持多听者多权重联合权衡定位与音染。在多属性权衡评测任务下，定位单独优化条件的定位误差指标ϵloc为3\.43°，低于不确定性单独优化条件的定位误差指标ϵloc 18\.68°。在中央听者立体声定位仿真中优化能量比与矢量基幅度声像定位的决定系数较高，跨度外目标下联合音染与耳间相位差损失可复刻串扰消除滤波器。该结论适用边界受限于自由场点声源仿真与对称化头模条件，尚未验证混响、个性化头部与真实听音下的外推表现。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 代码相关资源：<https://github.com/IoSR-Surrey/POLAR> — 链接不可用（HTTP 404）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 81. [从噪声中途上车：暖初始化让同一个扩散模型做音色迁移与音频修复](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-50-f3e33564f0/)

> 英文题目：*[Audio\-to\-Audio via Diffusion Warm Initialization](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-50-f3e33564f0/)*

标签：#扩散模型 #音乐 #音频修复 #音乐生成

评分：**5.5/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.8/1 | 影响力 0.8/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.7/1.5

排名：前50% | 文档类型：方法研究 | 主任务：#音乐生成 | 主方法：#扩散模型

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_50.pdf)

👥 **作者与机构**

- Cristobal Andrade：机构信息未能从会议 PDF 纯文本可靠映射
- Sebastian Jiro Schlecht：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该任务输入为引导音频\(x^\{(g)\}\)与目标文本提示，输出为保留旋律节奏结构但改变音色或修复退化的波形，难点在于用同一个无条件预训练扩散模型同时实现真实感与忠实度而无需重训。方法链分三步衔接：先由初始化比例\(\\tau\_\{init\}\)确定起始时刻\(t\_\{init\}\)，并将引导信号直接作为中间扩散状态启动逆过程，其输出作为下一步的起点而不额外加噪。接着Stable Audio Open去噪器从\(t\_\{init\}\)起逐步去噪，并以高引导尺度分类器无关引导放大文本条件牵引，使上一步保留的结构向目标分布偏移。最后用音高集合Jaccard距离度量忠实度、Fréchet Audio Distance度量真实感来评估权衡，选出的甜点时刻回用于前两步的启动配置形成闭环。相对为每种音色训练条件模型或桥接源目标模型的做法，关键差异在于零任务训练、无适配器，仅靠选择启动时刻控制改造强度，具有即插即用意义。在双簧管到钢琴音色迁移任务下，\(\\lambda=1\)条件的Jaccard距离高于\(\\lambda=0\)条件的Jaccard距离，甜点\(\\tau\_\{init\}\\approx0\.8\)处Jaccard距离低于0\.6且FAD低于0\.7可作经验阈值参考。该结论适用边界受限于单模型与固定噪声调度，甜点随模型与调度漂移，且在哼唱到钢琴等强外推上存在失败条件。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 数据相关资源：<https://musopen.org/> — 链接不可用（HTTP 403）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 82. [数模态个数再估计参数：计数密度网络如何把板混响脉冲变成模态三元组](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-87-0a1b60acc9/)

> 英文题目：*[Count\-Density Networks for Modal Plate Parameter Estimation](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-87-0a1b60acc9/)*

标签：#CNN #时频分析 #Transformer #模型比较 #房间脉冲响应估计

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.7/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#房间脉冲响应估计 | 主方法：#CNN

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_87.pdf)

👥 **作者与机构**

- Rodrigo Diaz：机构信息未能从会议 PDF 纯文本可靠映射
- Pablo Tablas de Paula：机构信息未能从会议 PDF 纯文本可靠映射
- David Marttila：机构信息未能从会议 PDF 纯文本可靠映射
- Ilias Ibnyahya：机构信息未能从会议 PDF 纯文本可靠映射
- Chin\-Yun Yu：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务B要求从5秒峰值归一化板混响位移脉冲响应直接恢复未知数量的模态频率衰减率增益三元组集合，高频模态密集重叠与峰值归一化丢失幅度尺度使联合计数与回归极为困难。方法先将波形从44\.1 kHz降采样至22\.05 kHz并保留20 Hz至10 kHz频带，增益目标相对峰值表示并在写盘时乘回尺度，B1附加对数尺度条件。随后由计数密度网络在1/20倍频程网格上预测每格模态密度与固定槽位衰减增益，B1用实值U\-Net结合池化幅度相位特征与0\.75秒时域编码，B2用复数卷积加复数Transformer处理全分辨率复频谱。最后经保和分配将全局总数取整并按小数余数分配为整数分格计数，再取前N槽位输出模态频率与属性。与分带子空间与自回归基线相比，密度建模直接联合推断总数与属性，避免了分带极点提取合并与CLEAN链路的脆弱性，因而频率与衰减精度显著提升。在独立生成的100\-IR对比集评测下，B1的相对误差RE指标为0\.3180，低于Fast Burg的相对误差RE指标1\.0984。该结论适用边界受限于合成板模型默认参数分布，尚未验证真实测量板噪声与模型失配下的外推能力，增益误差仍是主要残差来源。训练成本为单块A100上约24小时，B1单条脉冲响应推理开销为0\.0010秒的GPU前向延迟。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 83. [把非线性放进反馈回路：用反馈延迟网络做可控衰减的微光混响](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-05-b5addafd74/)

> 英文题目：*[Shimmer Reverberation with Nonlinear Feedback Delay Networks](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-05-b5addafd74/)*

标签：#信号处理 #音乐 #音频生成

评分：**5.4/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.6/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#音频生成 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_05.pdf)

👥 **作者与机构**

- Gloria Dal Santo：机构信息未能从会议 PDF 纯文本可靠映射
- Xiaojie Pi：机构信息未能从会议 PDF 纯文本可靠映射
- Karolina Prawda：机构信息未能从会议 PDF 纯文本可靠映射
- Sebastian Schlecht：机构信息未能从会议 PDF 纯文本可靠映射
- Vesa Välimäki：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该文处理单声道乐器或人声输入到带音高偏移与泛音扩展的混响输出的映射，难点在于非线性一旦进入递归回路易累积直流、混叠与能量发散并破坏混响时间可控性。方法先在每条延迟线后插入可控全波整流等五选一非线性逐次产生新谐波，其输出进入下一步的正交反馈矩阵在通道间扩散谐波。再由衰减滤波器按频段塑造整体衰减包络，使递归能量衰减仍大致可控。最后经直流阻断与包络补偿维持回路均值稳定，补偿包络跟随输入输出能量比平滑估计以抵消低频损失。在N=8长延迟评测设置下，最长延迟线的延迟指标为400 ms，高于最短延迟线的延迟指标71 ms。与后接失真的串联做法相比，回路内非线性使新生频率被反复再处理从而形成渐进式八度与和声演化，具有乐器化混响的实际意义。结论的适用边界受限于特定长延迟与稀疏或稠密矩阵下的定性音色规律，尚未验证通用音乐素材与主观偏好下的外推，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 84. [极点不动、留数会动：用三视图与饱和分裂收割密集平板模态](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-88-5a75e5b0d2/)

> 英文题目：*[Multi\-View Subband Autoregressive Pole Harvesting for Modal Plate Identification](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-88-5a75e5b0d2/)*

标签：#自回归模型 #时频分析 #音频理解

评分：**5.3/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频理解 | 主方法：#自回归模型

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_88.pdf)

👥 **作者与机构**

- Facundo Franchino：机构信息未能从会议 PDF 纯文本可靠映射
- Jatin Chowdhury：机构信息未能从会议 PDF 纯文本可靠映射
- Jin Woo Lee：机构信息未能从会议 PDF 纯文本可靠映射
- Soohyun Kim：机构信息未能从会议 PDF 纯文本可靠映射
- Mark Rau：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务输入为未归一化Kirchhoff\-Love薄板位移脉冲响应，输出为个数未知M的模态三元组频率、衰减与增益，单板含10^3–10^4个密集重叠模态，高频区快速傅里叶变换峰值拾取与匹配追踪均大量漏检。八轮匹配追踪残差相减先产生数百个锚点，每轮对已拾取原子做岭回归重估再相减，使低显著模态在残差中显形并给出初始计数。原始波形及其一阶、二阶差分随后并行划分为8个对数子带做自回归极点估计，饱和子带递归二分至深度2，利用线性滤波不移动极点但改变残差的性质让弱模态在不同视图中互补显形。跨视图按对数频率间隙去重合并并累计支持度，再由锚点数仿射预测与饱和指示计算目标模态数并以对数间隔占位补足，最后以阻尼双二阶原子做全局岭回归重估增益后输出。在饱和指示评测设置下，高饱和条件ρ\>0\.45的放大指标β为1\.35，高于低饱和条件ρ≤0\.10的放大指标β为1\.05。与直接峰值拾取或单视图高阶拟合相比，关键差异是把自回归容量耗尽当作密度欠估计的显式信号并递归分配容量，而非盲目提高阶数。当多模态间隔不足1Hz时原子近乎线性相关，只能恢复联合幅值而无法分离个体增益，构成明确的失败条件与适用边界。在苹果M2笔记本硬件上以三路并行处理16条剥离集脉冲响应的推理开销约为6h壁时，本方法无需训练成本，计算量随锚点数增长。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 85. [持续变调装不进环形缓冲：用已知发声频率把线性延迟绕回去](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-36-ad9af1848b/)

> 英文题目：*[Loopback Frequency Modulation Using a Time\-Varying Delay Line](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-36-ad9af1848b/)*

标签：#信号处理 #理论分析 #音乐 #音乐生成

评分：**5.3/10** | 创新 1.3/2 | 技术严谨 1.1/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.7/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：方法研究 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_36.pdf)

👥 **作者与机构**

- Tamara Smyth：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

回环频率调制以振荡器输出回授调制自身瞬时频率实现持续移频与非线性音色变换，难点是持续移频对应随时间线性增长的理想延迟，无法直接装入有限长环形延迟线且直接回绕易引入相位不连续。第一步回顾常规频率调制与相位调制的等价性，证明逐样本复数旋转与数值积分频率得到同一输出，从而把问题归结为需要解析积分而非数值累积。第二步用交替闭式解给出解析相位与发声频率，将不可积的回授振荡变为已知函数，其输出的解析相位直接作为下一步推导延迟函数的已知量。第三步由相对频移积分得到延迟函数，常规调制得到有界正弦延迟而持续移频得到线性增长延迟，从而分离出必须回绕的线性分量。第四步利用已知发声频率求出输入输出同值同斜率的回绕周期并取整，再加正延迟偏置保证附加相移为整数倍周期，使回绕后延迟保持因果正值且输出无断裂。与常规有界振荡延迟直接查表不同，该方法用发声频率参数化的解析相位构造可回绕线性延迟，使时变延迟线能承载回授振荡器的持续频偏，其实质是将回环调制从单振荡器合成扩展为可处理外部输入的延迟型处理。在载波频率300Hz的振荡测试设置下，振荡维持条件的反馈系数指标上限值为1，高于振荡维持条件的反馈系数指标下限值\-1。该结论适用边界受限于单振荡器正弦输入与静态反馈系数的推导验证，时变反馈与多振荡器耦合尚未验证，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 86. [任意声音如何借到电子舞曲的鼓点：离散节奏原型库的频谱检索](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-65-8533a03c3a/)

> 英文题目：*[From Arbitrary Audio to EDM: Audio\-Conditioned Retrieval of Discrete Rhythm Archetypes](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-65-8533a03c3a/)*

标签：#向量量化 #环境声 #音乐 #音频检索

评分：**5.2/10** | 创新 1.1/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音频检索 | 主方法：#向量量化

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_65.pdf)

👥 **作者与机构**

- Lindsey Pietrewicz：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

输入任意单声道音频并输出保留源音色的EDM鼓组模式，难点在于跨域映射需同时确定节奏骨架与力度动态。VQ\-VAE在二值鼓谱上学习256个离散节奏原型，并为每个原型预计算音频频谱签名。推理时对输入提取相同频谱特征做最近邻检索，命中原型经重构得到二值节奏网格，再由第二解码器预测每击力度。用户声音切片经聚类映射为鼓声部后按预测力度放置合成，从而完成音色保留的跨域转换。与Han等人纯符号域从零生成不同，该工作以共享频谱空间做音频条件检索并保留输入音色，具有跨域变换的实际意义。在留出验证集条件下，速度解码器的平均绝对误差指标为0\.0845，低于均值预测基线的平均绝对误差指标0\.374。结论的适用边界受限于演示级定性验证，尚未验证听感偏好与律动感知，且启发式映射与重尾码本利用率制约外推。硬件为NVIDIA A10G GPU，训练成本为训练300轮至验证集汉明距离为0\.0064。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 87. [看得见的峰才计数：峰残差估计把频率支撑、校准与高频补数分开处理](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-89-8226ebe3c5/)

> 英文题目：*[Peak\-Residual Modal Estimation with Learned Calibration and High\-Band Density Correction ★](/posts/conference-dafx-2026-conference-paper-id-dafx26-challenge-89-8226ebe3c5/)*

标签：#信号处理 #统计分析 #模型比较 #房间脉冲响应估计

评分：**5.0/10** | 创新 1.2/2 | 技术严谨 0.8/1.5 | 实验充分 0.5/1.5 | 清晰度 0.7/1 | 影响力 0.5/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 1.0/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#房间脉冲响应估计 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_challenge_89.pdf)

👥 **作者与机构**

- Doohyun Jung：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

任务B输入为未归一化板式混响脉冲响应，输出为频率排序的模态频率、衰减常数与增益表，难点在于数千个重叠阻尼正弦在高频坍缩为不可分辨的谱包络。主流程先以显著度分级峰值拾取与多视角残差揭示肩部结构，再由频带预算与岭回归预测的全局计数截断候选，最后用模式级多层感知机只缩放衰减与增益而不移动频率。次版在主表基础上以独立岭模型预测六至十千赫目标数并做有界抖动复制，用于检验隐藏多重度假设。在开发集留出六十样本验证设置下，预测计数的平均计数指标为4557\.2，高于目标真实的平均计数指标4551\.8。与直接联合估计极点的方法不同，该链条将频率支撑、局部偏置校正与高频计数增强解耦，使每行保留可见谱证据并让密度假设可单独归因，其实测意义在于显式暴露精度召回权衡。其适用边界受限于峰中心假设，单峰多模无法分离且宽度估计受重叠污染，存在频带划分版本错配，尚未验证官方评分下的优劣。推理开销方面主流程单文件平均延迟约373\.4秒而密度填充十六文件仅增加约0\.73秒，训练硬件仅披露视窗十一与三点一二环境下中央处理器确定性运行。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 88. [当嵌入模型说变好了而听众说没有：VoiceFX 的补救与验证落差](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-62-1d17eb8647/)

> 英文题目：*[VoiceFX: CLAP\-Based Audio Quality Improvement for Singing and Speech](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-62-1d17eb8647/)*

标签：#众包评测 #多模态学习 #音乐 #语音 #语音增强

评分：**5.0/10** | 创新 1.0/2 | 技术严谨 0.8/1.5 | 实验充分 1.0/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.3/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#语音增强 | 主方法：#多模态学习

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_62.pdf)

👥 **作者与机构**

- Elena Georgieva：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本文处理演唱与朗读录音的自动质量改善，输入为含噪声、齿音、浑浊、低频轰鸣与混响的15秒人声片段，输出为经效果器补救后更接近干净隔离人声的音频，难点在于非专家难以选择合适处理且嵌入指标未必符合听感。方法链第一步由降质构造负责注入5类失真以拉开质量差异，输出1000个原始片段进入嵌入评估。第二步由嵌入评估负责用对比语言音频预训练CLAP计算音频与6条文本提示的相似度，其推荐的补救类型进入补救应用。第三步由补救应用负责对全部文件施加8种中强两档去噪去混响去齿音去轰鸣去闷处理，输出8000个补救片段进入人工验证。第四步由人工验证负责以参考对比打分检验嵌入选择是否成立，从而回判推荐有效性。与依赖工程师试听修音的已有方法相比，该机制差异在于用语义相似度替代人工干预来推荐处理，具有零专家介入即可批量筛选的实际意义。在含234名听众的听感评测任务下，强档去噪条件的听众得分为\-0\.26，高于中档去噪条件的听众得分\-0\.32。结论适用边界仅限人工合成降质与固定参数补救组合，尚未验证真实手机录音、音乐混音与连续参数优化的外推效果。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 第三方资源：<https://sourceforge.net/projects/sox/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.ffmpeg.org/> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 89. [不做分离而改混合：用可微合成参数与扩散先验实现分声部音乐编辑](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-69-6f5116331a/)

> 英文题目：*[Diffusion\-Based Music Audio Editing System Using Differentiable Digital Signal Processing Mixture Model](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-69-6f5116331a/)*

标签：#扩散模型 #信号处理 #音乐 #音乐生成

评分：**4.8/10** | 创新 1.2/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#扩散模型

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_69.pdf)

👥 **作者与机构**

- Kengo Takemoto：机构信息未能从会议 PDF 纯文本可靠映射
- Tomohiko Nakamura：机构信息未能从会议 PDF 纯文本可靠映射
- Hiroshi Saruwatari：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该系统输入为包含两个谐波乐器的混合音频与其乐谱（Musical Instrument Digital Interface，MIDI），输出为分声部合成参数轨迹与重新合成的编辑后混合音频，难点在于无显式声源分离时混合参数估计的欠定性与编辑可控性冲突。流程先由动态时间规整对齐乐谱与演奏，再由合成参数域扩散模型按音符与乐器条件生成参数轨迹，接着由可微分数字信号处理混合模型（Differentiable Digital Signal Processing Mixture Model，DDSPMM）合成混合并计算多尺度频谱损失，最后将该损失作为梯度引导注入逆扩散过程以拟合观测混合。相对黑盒文本生成与仅处理孤立音色的可微分数字信号处理（Differentiable Digital Signal Processing，DDSP）方法，关键差异是把扩散先验放在可解释参数域而非波形域，使编辑直接对应音符块与乐器类型修改。原文未提供可核对的关键定量结果，仅展示双长笛混合中单声部转小提琴与基频（Fundamental Frequency，F0）乐句修改的定性示例。适用边界限于谐波乐器二重奏与有准确乐谱输入的情形，打击乐、人声与无谱混合均未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 90. [脉冲宽度不变而音高可变：脉冲表如何合成管乐音色](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-60-b85cd95e95/)

> 英文题目：*[Pulsetable Synthesis of Wind Instrument Tones](/posts/conference-dafx-2026-conference-paper-id-dafx26-demo-60-b85cd95e95/)*

标签：#信号处理 #高效推理 #音乐 #音乐生成

评分：**4.7/10** | 创新 1.0/2 | 技术严谨 1.0/1.5 | 实验充分 0.3/1.5 | 清晰度 0.6/1 | 影响力 0.7/1.5 | 开源 0.2/1.5 | 可复现 0.1/0.5 | 工程/实践 0.8/1.5

排名：后50% | 文档类型：系统技术报告 | 主任务：#音乐生成 | 主方法：#信号处理

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_demo_60.pdf)

👥 **作者与机构**

- Christian Dittmar：机构信息未能从会议 PDF 纯文本可靠映射
- Simon Schwär：机构信息未能从会议 PDF 纯文本可靠映射
- Manuel Peters：机构信息未能从会议 PDF 纯文本可靠映射
- Stefan Balke：机构信息未能从会议 PDF 纯文本可靠映射
- Meinard Müller：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

该工作针对管乐音色合成中表情控制生硬的问题，输入为基频与力度、亮度演化对应的控制轮廓，输出为具有起振、颤音与粗糙感的连续管乐波形，难点在于以极少参数复现吹奏压力驱动的频谱包络变化与管体共振耦合。首先脉冲表振荡器按目标基频挑选单周期脉冲并以周期重复拼接形成脉冲串，其输出进入时变低通滤波器模拟力度相关的亮度变化，随后叠加与脉冲串同步的带通成形噪声以模拟管内湍流，最后经混响卷积还原空间感。与加法合成式可微分数字信号处理相比，该机制用单脉冲编码谐波包络而非数十个正弦振荡器，故参数更少且与吹奏物理直觉更贴近。在爱荷华大学乐器样本库消声小号语料的评测设置下，B♭3周期的时长指标为约4\.3 ms，高于初始主能量脉冲的时长指标约1\.5 ms，除该时长观察外原文未提供可核对的关键定量结果。当前结论的适用边界受限于单音稳态管乐重合成，混响下脉冲与控制曲线自动提取的失败条件仍未解决，全可微分时变滤波与控制曲线联合学习尚未验证。原文未披露训练、推理或部署成本。

🔗 **开源资源**

- 演示资源：<https://www.audiolabs-erlangen.de/resources/> — 链接不可用（HTTP 403）
- 第三方资源：<https://muwiserver.univie.ac.at/martinetta> → <https://muwiserver.univie.ac.at/martinetta/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.soundonsound.com/reviews/> → <https://www.soundonsound.com/reviews> — 链接可访问（HTTP 200）
- 第三方资源：<https://audiomodeling.com/swam-engine/> → <https://audiomodeling.com/products> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.modartt.com/pianoteq_overview> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.samplemodeling.com/products/> — 链接可访问（HTTP 200）
- 第三方资源：<https://www.acousticsamples.net/Bundles/> — 链接可访问（HTTP 200）
- 第三方资源：<https://lydoel.gumroad.com/> — 暂时无法访问
- 第三方资源：<https://theremin.music.uiowa.edu/MIS.html> — 链接可访问（HTTP 200）
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---

### 91. [能出声不等于算对了：八份合成器作业里 AI 到底改变了什么](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-46-d91d2631c7/)

> 英文题目：*[Evaluating AI Coding Assistants in Audio DSP Education: A Small Scale Study](/posts/conference-dafx-2026-conference-paper-id-dafx26-paper-46-d91d2631c7/)*

标签：#教育 #用户研究 #模型评估 #音频生成

评分：**4.6/10** | 创新 1.1/2 | 技术严谨 1.0/1.5 | 实验充分 0.5/1.5 | 清晰度 0.8/1 | 影响力 0.6/1.5 | 开源 0.0/1.5 | 可复现 0.1/0.5 | 工程/实践 0.5/1.5

排名：后50% | 文档类型：应用研究 | 主任务：#音频生成 | 主方法：#用户研究

会议来源：[官方记录](https://dafx26.mit.edu/program/) · [官方 PDF](https://dafx26.mit.edu/assets/papers/DAFx26_paper_46.pdf)

👥 **作者与机构**

- Leonardo Gabrielli：机构信息未能从会议 PDF 纯文本可靠映射
- Michael Fioretti：机构信息未能从会议 PDF 纯文本可靠映射
- Giuseppe Bergamino：机构信息未能从会议 PDF 纯文本可靠映射

📌 **核心摘要**

本研究处理研究生音乐数字信号处理课程中减法合成器作业的评价问题，输入为文字说明与原理图双通道的欠指定需求，输出为可在VCV Rack中发声的完整插件，难点在于需求歧义与听感合理的参数映射难以从功能跑通中分离。研究先将8名学生按组间对照分配为仅用文档教材论坛的对照组与额外使用GitHub Copilot的辅助组，并统一模板与番茄工作法计时协议以记录编码调试学习过程。接着要求两组实现双振荡器加噪声经共振低通滤波与包络控制放大及低频调制的完整链路，并提交代码与过程报告以保留实现证据。然后由三位教师按规范理解、接口正确性、音乐性参数映射、数字信号处理实现质量与代码组织五类量表定性评议并统一量化，再结合口头答辩检验理解是否来自本人设计。在五类量表评分任务条件下，S2异常区间的LFO率指标为1 kHz，高于S2异常区间的LFO率指标100 Hz。相比通用编程教育研究，该设计以抗混叠振荡器与虚拟模拟滤波器等领域知识为检验核心，更能暴露生成代码表面可用与领域错误。该结论适用边界受限于同类课程、同类作业与8人小样本且未经统计检验，未能外推至不同年龄科目与任务类型，尚未验证大规模课堂下的完整性影响，原文未披露训练、推理或部署成本。

🔗 **开源资源**

本次未形成可展示的已核验资源记录，开放状态尚未核实。
可达状态仅表示本次链接检查结果，不代表许可证、本文权重或运行复现已验证。

---
