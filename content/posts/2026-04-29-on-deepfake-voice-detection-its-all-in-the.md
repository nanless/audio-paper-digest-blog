---
title: "On deepfake voice detection - It’s all in the presentation"
date: 2026-04-29
draft: false
tags: [音频深度伪造检测, 数据增强, 自监督学习, 预训练, 鲁棒性]
categories: [icassp-2026]
description: "音频深度伪造检测 | 8.0/10"
hiddenInHomeList: true
---

# 📄 On deepfake voice detection - It’s all in the presentation

#音频深度伪造检测 #数据增强 #自监督学习 #预训练 #鲁棒性

🔥 **8.0/10** | 前25% | #音频深度伪造检测 | #数据增强 | #自监督学习 #预训练

学术质量 6.0/7 | 选题价值 2.0/2 | 复现加成 0.0 | 置信度 高


### 👥 作者与机构

- 第一作者：未说明（作者列表按字母顺序排列）
- 通讯作者：未说明
- 作者列表：Héctor Delgado（Microsoft）、Giorgio Ramondetti（Microsoft）、Emanuele Dalmasso（Microsoft）、Gennady Karvitsky（Microsoft）、Daniele Colibro（Microsoft）、Haydar Talib（Microsoft）

#

### 💡 毒舌点评

论文最大的亮点在于它跳出技术细节，直指领域痛点：当前研究普遍在“无菌实验室”里训练模型，却指望它们能解决“菜市场”里真实发生的诈骗，通过精心设计的实验有力地证明了“数据呈现方式”比“模型规模”更能决定实战效果。但短板也十分明显，作为一个强调“现实世界有效性”的工业界工作，却吝于公开核心代码、模型和训练细节，这极大地削弱了其主张的可复现性和社区推动潜力，让人怀疑其方法论推广的诚意。

#

### 🔗 开源详情

- 代码：论文中未提及代码链接。仅提供了一个用于测试协议的GitHub仓库名称，但未给出具体URL。
- 模型权重：未提及公开任何模型权重。
- 数据集：部分使用了公开数据集（ASVspoof， MLS， Switchboard等），但本文构建的核心新数据集（Presented类别和Realworld的Fraud Academy数据集）未公开。
- Demo：未提供在线演示。
- 复现材料：论文详细描述了训练策略、超参数和硬件配置，提供了Table 1和Table 2的详细数据。然而，缺失模型权重和代码，使得从零复现变得极其困难。
- 引用的开源项目：论文在方法和数据部分引用了多个开源项目，包括：
    - TTS引擎：ElevenLabs， play.ht， OpenAI Voice Engine， Mars5， YourTTS
    - 数据集：ASVspoof 2019/5， MLS English， Switchboard， VoxCeleb， Fisher Spanish等（具体见参考文献）
    - 模型/工具：WavLM (预训练模型)， HIFI-GAN/WaveGrad/WaveNet (声码器)， Encodec/Vocos (编解码器)， RawBoost (数据增强)


### 📌 核心摘要

这篇论文指出，当前深度伪造语音检测领域的研究数据集和方法过于理想化（使用原始纯净音频），导致训练出的模型难以泛化到真实世界通过电话等信道传输的伪造语音。为解决此问题，作者提出了一个完整的“欺骗攻击序列”框架，不仅包含深度伪造语音生成，还关键性地纳入了通过扬声器播放或直接注入电话的“呈现”阶段。基于此，他们构建了包含不同“呈现”方式的新型训练数据集（Presented）和一个完全保留真实场景、未用于训练的“真实世界”测试集（Fraud Academy）。实验表明，在训练中加入“呈现”数据，能显著提升模型在真实场景下的性能：在更稳健的实验室设置中准确率提升39%，在真实世界基准上提升57%。此外，论文证明，优化数据集带来的性能提升，比使用更大、更昂贵的SOTA模型更为重要。主要的局限性是，所提出的轻量级模型在处理扬声器播放场景时性能仍有不足，且整体研究未开源核心代码与权重。

#

### 🏗️ 模型架构

论文评估了三种现有SOTA系统，并未提出全新的端到端模型架构。核心验证的是其数据创建方法论对不同架构的普适性提升。
1.  logmel-ResNet-CoT：使用对数梅尔频谱图作为前端特征。后端是基于残差网络（ResNet）的变体，创新性地在每个残差块末尾融入了上下文变换器（CoT）模块。CoT是一种受视觉识别启发的2D自注意力机制，用于捕获音频频谱中的长程依赖。模型包含四个Stage，每个Stage前有通道自适应器（卷积+BN+ReLU），最后通过注意力统计池化（Att Stats Pooling）和全连接层输出分类结果。参数量3.55M。
2.  WavLM-LLGF：使用预训练的WavLM（Large）作为自监督学习（SSL）前端。它将WavLM各中间层输出（CNN特征编码器及所有24个Transformer层）加权求和后，输入一个由轻量级卷积神经网络（LCNN）、双向LSTM、全局平均池化和全连接层组成的后端进行分类。参数量317.70M。
3.  WavLM-Nes2Net：同样使用冻结的WavLM作为前端。后端采用嵌套的Res2Net结构，通过分层特征聚合来建模不同尺度的特征。参数量316.93M。

所有系统最终输出一个分数s = 0.5(lspoof - lbonafide)，用于判断音频真伪。

![图2: 模型架构示意图](http://teb0hdrpn.hd-bkt.clouddn.com/icassp-2026/2026-04-29/11460707-1.jpg)
（图2）左图展示了logmel-ResNet-CoT的整体结构，包括四个Res-CoT阶段、适配器、注意力统计池化层。右图详细说明了残差块（Res-CoT block）的两种内部结构变体。

#

### 💡 核心创新点

1.  提出完整的欺骗攻击序列框架（Holistic Attack Sequence）：超越以往只关注“生成”阶段的研究，首次系统性地将“呈现”阶段（通过扬声器播放或直接注入电话）和“任务”阶段（真实对话交互）纳入数据创建和评估框架。这揭示了实验室性能与现实性能差距的根本原因——信号经过通信信道和声学环境引入的失真。
2.  构建并验证包含“呈现”阶段的新数据集：基于上述框架，作者创建了约7万条包含真实电话网络、扬声器播放和麦克风录制特征的深度伪造音频（Presented类数据）。实验证明，将此类数据加入训练，能极大提升模型在真实世界测试集上的泛化能力。
3.  通过大规模实验论证“数据质量优于模型规模”：在控制变量的实验中，使用完整数据增强的轻量级logmel-ResNet-CoT（3.55M参数）在多数真实场景测试中，性能优于仅使用基础数据训练的大型WavLM模型（317M参数）。这强调了对于工业部署，投资于更真实、更多样的数据收集，比盲目追求更大的模型更具性价比。

#

### 🔬 细节详述

- 训练数据：数据分为四类（详见Table 1）：
    - Base：公开数据集（ASVspoof 2019/5）及使用TTS引擎（ElevenLabs， OpenAI等）在Switchboard、MLS种子上生成的新数据，共约170万样本。
    - Presented：将Base中的部分原始深度伪造音频，通过手机（三星、红米）、扬声器（ESI， JBL）和电话网络进行播放或注入录制，共约7万样本，仅用于训练。
    - Realworld：由80名参与者在模拟电话客服场景中，使用10种TTS引擎生成的深度伪造语音进行的真实对话数据集（Fraud Academy），包含注入和播放两种攻击方式，共2263个通话片段。此数据集完全仅用于测试。
    - Augmented：使用神经声码器（HiFi-GAN等）和编解码器（Encodec等）对真实语音进行处理，生成约47.7万“伪伪造”样本用于增强训练。
- 损失函数：使用标准的交叉熵损失。
- 训练策略：
    - 优化器：AdamW。
    - Batch Size：256。
    - 迭代次数：logmel-ResNet-CoT训练780K步，WavLM-based系统训练29K步。
    - 音频处理：采样率8kHz，使用VAD去除静音帧。训练时采用随机裁剪（0.9-1.2s 或 1.8-2.4s）的可变长度批次。
    - 数据增强：在线增强包括语音/音频编解码、音量变化、RawBoost等。
- 关键超参数：WavLM为Large版本，参数316.62M。logmel-ResNet-CoT使用64维对数梅尔特征。
- 训练硬件：每个模型使用8张NVIDIA A100 GPU中的2张进行训练，服务器配置为96核AMD EPYC vCPU和1800 GiB内存。
- 推理细节：丢弃净语音时长小于0.5秒的片段。对于Realworld测试集，报告在6个不同决策时间点（2, 3, 6, 9, 12, 15秒净语音）的平均性能。
- 正则化/稳定训练：未明确提及除标准数据增强外的其他正则化技巧。

#

### 📊 实验结果

主要发现（基于图3和正文）：
1.  仅使用Base数据训练的模型（蓝色柱）在Realworld测试中性能严重下降，证明了实验室与现实场景的鸿沟。
2.  在训练数据中加入“呈现”数据（灰色柱）是提升Realworld性能的最关键因素，其效果优于单纯的数据增强（橙色柱）。
3.  结合所有方法（Base+Presented+Augmented， 金色柱）通常获得最佳整体性能。
4.  轻量级模型与大型模型的比较：在完整数据增强下，logmel-ResNet-CoT在多数条件下与WavLM模型竞争力相当，甚至在Realworld/Injection场景达到最佳（MDR=10.6%，即检测率89.4%）。

关键性能数据（图3， MDR @ FAR=1%， 越低越好）：

| 模型 | 训练数据 | Base MDR(%) | Realworld/Injection MDR(%) | Realworld/Playback MDR(%) |
| :--- | :--- | :--- | :--- | :--- |
| logmel-ResNet-CoT | Base | 32.8 | 51.6 | 63.9 |
| | Base+Presented+Augmented | 10.6 | 10.6 | 34.0 |
| WavLM-LLGF | Base | 25.2 | 57.6 | - |
| | Base+Presented+Augmented | 11.8 | 11.8 | 23.7 |
| WavLM-Nes2Net | Base | 30.4 | 63.9 | - |
| | Base+Presented+Augmented | 12.0 | 12.0 | 33.9 |

注：原图3中WavLM-LLGF和Nes2Net的“Base”训练数据在Realworld/playback的MDR值未在图中完全显示，故留空。最佳结果（金色柱）对比蓝色柱有巨大提升，例如在Realworld/Injection上，提升幅度（1-MDR）从约36%到89.4%，对应准确率提升57%。

WavLM-LLGF在Base测试集上的详细性能（Table 2）：

| 测试集 | EER(%) | MDR(%) (FAR=1%) |
| :--- | :--- | :--- |
| ASV19LA | 5.1 | 10.5 |
| ASV21LA | 6.4 | 16.6 |
| ASV21LA-HT | 6.5 | 17.5 |
| ASV21DF | 3.3 | 6.7 |
| ASV5 w/o Enc. | 3.8 | 33.8 |
| In-the-wild | 2.8 | 7.3 |
| SpoofCeleb | 5.8 | 17.8 |
| Pool | 4.8 | 15.3 |
| 平均 | 4.8 | 15.7 |

该表展示了使用最完整数据（Base+Presented+Augmented）训练的WavLM-LLGF在各类公开基准上的性能，建立了新的跨数据集基线。

#

### ⚖️ 评分理由

- 学术质量：6.0/7 - 创新在于方法论（数据创建框架）而非底层算法。实验非常充分，设计了严谨的消融对比（不同数据组合、不同模型规模），并引入极具说服力的“真实世界”私有测试集。数据和技术细节描述清晰，结论有强证据支持。扣分点在于所提模型（ResNet-CoT）是现有架构的应用，且未开源核心代码。
- 选题价值：2.0/2 - 直击AI安全领域核心痛点，对语音伪造检测研究向真实世界应用转化具有重要指导意义，应用前景广阔。
- 开源与复现加成：0.0/1 - 论文未提供代码仓库链接、模型权重或完整训练配置。仅提及了测试协议的GitHub仓库（`https://github.com/CavoloFrattale/deepfake-detection-test-protocol`），但未提供具体URL，也未公开训练和测试的核心数据。

#


---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)
