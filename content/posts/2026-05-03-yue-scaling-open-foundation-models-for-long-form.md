---
title: "YuE: Scaling Open Foundation Models for Long-Form Music Generation"
date: 2026-05-03
draft: false
tags: [音乐生成, 自回归模型, 预训练]
categories: [iclr-2026]
description: "音乐生成 | 8.0/10"
hiddenInHomeList: true
---

# 📄 YuE: Scaling Open Foundation Models for Long-Form Music Generation

#音乐生成 #自回归模型 #预训练

🔥 **8.0/10** | 前25% | #音乐生成 | #自回归模型 | #预训练

学术质量 6.0/7 | 选题价值 1.5/2 | 复现加成 0.5 | 置信度 高


### 👥 作者与机构

- 第一作者：Ruibin Yuan (香港科技大学, Multimodal Art Projection)
- 通讯作者：论文中未明确标注单一通讯作者。在“CONTRIBUTIONS AND ACKNOWLEDGMENTS”部分，列出了多位负责不同工作的作者，但未明确区分通讯作者角色。
- 作者列表：Ruibin Yuan (香港科技大学, Multimodal Art Projection), Hanfeng Lin (香港科技大学, Multimodal Art Projection), Shuyue Guo (Multimodal Art Projection), Ge Zhang (Multimodal Art Projection, University of Michigan), Jiahao Pan (香港科技大学, Multimodal Art Projection), Yongyi Zang (独立), Haohe Liu (University of Surrey, Multimodal Art Projection), Yiming Liang (Multimodal Art Projection), Wenye Ma (MBZUAI, Multimodal Art Projection), Xingjian Du (University of Rochester, Multimodal Art Projection), Xeron Du (Multimodal Art Projection), Zhen Ye (香港科技大学), Tianyu Zheng (Multimodal Art Projection), Zhengxuan Jiang (Multimodal Art Projection), Yinghao Ma (Multimodal Art Projection, Queen Mary University of London), Minghao Liu (2077AI, Multimodal Art Projection), Zeyue Tian (香港科技大学, Multimodal Art Projection), Ziya Zhou (香港科技大学, Multimodal Art Projection), Liumeng Xue (香港科技大学, Multimodal Art Projection), Xingwei Qu (Multimodal Art Projection), Yizhi Li (Multimodal Art Projection, University of Manchester), Shangda Wu (中央音乐学院, Multimodal Art Projection), Tianhao Shen (Multimodal Art Projection), Ziyang Ma (Multimodal Art Projection, 上海交通大学, 南洋理工大学), Jun Zhan (复旦大学), Chunhui Wang (吉利汽车), Yatian Wang (香港科技大学), Xiaowei Chi (香港科技大学), Xinyue Zhang (香港科技大学), Zhenzhu Yang (香港科技大学), Xiangzhou Wang (Multimodal Art Projection), Shansong Liu (美团), Lingrui Mei (美团), Peng Li (香港科技大学), Junjie Wang (清华大学), Jianwei Yu (Moonshot.ai), Guojian Pang (Multimodal Art Projection), Xu Li (小红书), Zihao Wang (浙江大学, 卡内基梅隆大学), Xiaohuan Zhou (Multimodal Art Projection), Lijun Yu (卡内基梅隆大学), Emmanouil Benetos (Queen Mary University of London, Multimodal Art Projection), Yong Chen (吉利汽车), Chenghua Lin (University of Manchester, Multimodal Art Projection), Xie Chen (上海交通大学), Gus Xia (MBZUAI, Multimodal Art Projection), Zhaoxiang Zhang (中国科学院), Chao Zhang (清华大学), Wenhu Chen (University of Waterloo, Multimodal Art Projection), Xinyu Zhou (Moonshot.ai), Xipeng Qiu (复旦大学), Roger Dannenberg (卡内基梅隆大学, Multimodal Art Projection), Jiaheng Liu (南京大学, Multimodal Art Projection), Jian Yang (Multimodal Art Projection), Wenhao Huang (Multimodal Art Projection), Wei Xue (香港科技大学), Xu Tan (Moonshot.ai, Multimodal Art Projection), Yike Guo (香港科技大学)。

### 💡 毒舌点评

亮点：它终于让“从歌词直接生成五分钟完整带伴奏歌曲”这件事，在开源世界里变得可能了，Dual-NTP设计巧妙地解决了人声被伴奏“淹没”的经典痛点，且所有技术细节和模型权重近乎“全裸”开源，复现门槛大幅降低。短板：在最考验综合音乐品味的“整体音乐性”主观评测上，它依然不敌Suno V4这个“六边形战士”，而且其音频保真度（如音色质感、乐器细节）受限于当前分阶段建模和tokenizer方案，与顶级商业系统的差距在高保真聆听时较为明显。

### 🔗 开源详情

- 代码：提供GitHub仓库链接：https://github.com/multimodal-art-projection/YuE
- 模型权重：提供HuggingFace模型集合链接：https://huggingface.co/collections/m-a-p/yue，包含预训练的Stage-1和Stage-2模型。
- 数据集：论文使用了从网络挖掘的CC许可音乐和语音，但未提供数据集本身的公开下载链接。语言和流派分布已在附录中提供。
- Demo：提供在线演示网站：https://map-yue.github.io/
- 复现材料：论文详细说明了模型架构（Stage-1 & Stage-2）、训练数据规模与混合比例、训练超参数（学习率、批量大小、训练token数）、分阶段训练流程、评估协议，并提供了消融实验设置。附录C和D进一步详细描述了Tokenizer和Stage-2模型的具体实现。
- 引用的开源项目：论文中依赖的开源项目包括：LLaMA (LLaMA2架构), X-Codec (音频Tokenizer), Whisper (评估用), audioldm_eval (自动评估), CLAP & CLaMP 3 (对齐评估), ByteCover2 (记忆化测试), Vocos (上采样器), Qwen2Audio (生成伪标签，见附录G提及)。

### 📌 核心摘要

1.  解决什么问题：解决从歌词生成完整、高质量、长时长（最长5分钟）歌曲的挑战。现有开源模型在生成时长、歌词对齐、音乐连贯性和人声与伴奏的协调性方面存在严重不足。
2.  方法核心：提出了一个基于自回归语言模型的两阶段生成框架YuE。第一阶段（Stage-1）使用Track-Decoupled Next-Token Prediction (Dual-NTP)，为每个时间步同时生成人声和伴奏两个独立的token，并采用Structural Progressive Conditioning (SPC)，利用歌曲的结构先验（如主歌、副歌）交错排列文本和音频token，以解决长上下文下的歌词跟随问题。第二阶段（Stage-2）使用一个较小的模型预测残差音频token，以提升音质。
3.  新在哪里：相比传统单token混合建模（易导致人声信息丢失）或串行生成（易导致同步问题和误差累积），Dual-NTP实现了对人声和伴奏的联合建模且保持架构简洁。SPC策略通过将长歌曲分解为多个结构段落进行条件化，有效扩展了模型的上下文长度。此外，重新设计了适用于音乐的上下文学习（ICL）框架，支持风格克隆、双向生成等，并采用延迟激活策略避免模型陷入简单的“复制”模式。
4.  主要实验结果：人工评估显示，YuE在多项音乐性指标上与Udio和Tiangong持平，显著优于Hailuo，但在整体上仍稍逊于Suno V4。在歌声灵活性（音域范围约27个半音）和生成时长（可长达数百秒）上，它与顶尖商业系统相当或更优。消融实验表明，Dual-NTP相比标准NTP能更快收敛（损失低约0.4），SPC在长时歌词跟随上（WER）显著优于传统方法（例如在150秒时，SPC-7B的WER约20%，而Vanilla方法已接近100%）。模型缩放（0.5B→7B）带来了音乐性和歌词跟随能力的显著提升。
5.  实际意义：提供了第一个强大的开源音乐生成基础模型，降低了长歌曲生成技术的研究和应用门槛，有望推动音乐创作工具的民主化和相关领域的学术研究。
6.  主要局限性：与最先进的闭源系统（如Suno V4）在整体音乐性和声学细节保真度上仍有差距；训练数据主要为英语歌曲，多语言和多文化音乐的表现有待进一步验证；生成的音频质量受限于两阶段的tokenizer-语言模型框架，可能不如端到端的扩散模型细腻。

### 🏗️ 模型架构

YuE是一个两阶段的自回归语言模型（LM）框架，架构如图1所示。

![图1：YuE的整体流程图](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-0.png)

整体流程：
- 输入：文本（指令、风格、歌词）和可选的参考音频片段。
- Stage-1 LM：接收文本token和音频tokenizer转换后的码本0（codebook-0） token。其核心是Track-Decoupled Next-Token Prediction，为每个时间步同时预测人声token `v_t` 和伴奏token `a_t`（如图2中虚线token对所示）。
- Stage-2 LM：接收Stage-1生成的码本0 token，作为固定条件，然后自回归地预测剩余码本（1-7）的token，用于重建更高质量的音频波形。
- 输出：经过Stage-2解码和轻量级上采样器（基于Vocos）从16kHz上采样至44.1kHz后的完整歌曲波形。

关键组件详解：
1.  音频Tokenizer (X-Codec)：采用语义-声学融合的神经音频编码器，将波形转换为离散token。它使用HuBERT提取语义信息融合进RVQ码本，帧率50Hz，拥有12层RVQ，每层码本大小1024。论文中实际使用前8层，其中码本0携带了丰富的语义信息（如旋律、人声内容），是Stage-1建模的对象。相比纯声学tokenizer（如Encodec32k），这种融合设计显著提升了语言模型训练的收敛性。
2.  Stage-1 语言模型 (7B参数)：
    - 输入序列构造：采用Structural Progressive Conditioning (SPC)。模型会先接收指令、风格标签和完整歌词，然后以交错的方式处理音乐结构段落（如主歌、副歌）。每个段落包含该段的歌词和对应的音频token序列。这解决了将长音频和歌词一次性放入上下文窗口导致的条件失效问题（常规方法在超过约6K token后失效）。
    - Track-Decoupled NTP (Dual-NTP)：在标准自回归分解 `P(x_1:T)` 的基础上，将每帧 `x_t` 拆分为 `v_t` (人声) 和 `a_t` (伴奏) 两个token。联合概率分解为 `P(v_t, a_t | v_{<t}, a_{<t}) = P(v_t | v_{<t}, a_{<t}) * P(a_t | v_{≤t}, a_{<t})`。这允许在单次前向传播中联合建模两个音轨，避免了串行生成带来的延迟和误差传播，并使人声在嘈杂伴奏下（如金属乐）依然清晰。
    - Music In-Context Learning (ICL)：在SPC数据前拼接一个约30秒的参考音频token序列，形成 `Dicl = A_ref ◦ D_spc`。此设计支持风格克隆、声音转换等。为防止模型“走捷径”直接复制参考音频，采用了延迟激活策略：仅在训练末期的退火阶段引入少量ICL数据。
3.  Stage-2 语言模型 (2B参数)：
    - 任务：给定Stage-1输出的码本0序列 `x_{1:T}^{(0)}`，预测完整的8层码本 `x_{1:T}^{(0:7)}`。
    - 训练：采用时间对齐的自回归分解。输入序列被组织为两部分：首先是所有的码本0 token，然后是为每一帧重复的8个token（0-7）的块。这确保模型在预测残差细节前能看到完整的语义骨架。使用教师forcing训练，最小化负对数似然损失。
    - 推理：码本0 token来自Stage-1并被固定（钳位），模型只自回归生成残差码本1-7，从而在保持语义对齐的同时细化音质。

### 💡 核心创新点

1.  Track-Decoupled Next-Token Prediction (Dual-NTP)：
    - 是什么：一种解耦的双token预测策略，在每个时间步同时生成人声和伴奏两个独立的token。
    - 局限：传统方法用单个token表示混合音频，导致在伴奏复杂（如低人声-伴奏比VAR）时，语音信息严重丢失（论文用ΔWER量化了这一点）。
    - 如何起作用：显式引入源分离先验，将混合信号分解建模。数学上等价于联合分布 `P(v_t, a_t | ...)` 的分解，易于实现。
    - 收益：收敛更快（损失降低约0.4），对低VAR场景鲁棒性强，在单次前向传播中完成联合建模，避免了同步问题。实验表明，即使VAR低至-8dB，人声轨道重建的WER增量也远低于混合轨道重建。

2.  Structural Progressive Conditioning (SPC)：
    - 是什么：一种利用歌曲结构先验的渐进式条件控制策略，将长篇歌词和音频按结构段落交错输入。
    - 局限：将整个歌曲的歌词和音频作为前缀输入，随着音频长度增加（>3K token），条件效果急剧下降，超过6K token后完全失效。简单的增大RoPE基数或课程学习无效。
    - 如何起作用：将歌曲自动分割为多个结构段（如intro, verse, chorus），每个段落内部文本和音频配对输入。整体上，结构标签、歌词和音频token形成交错序列。
    - 收益：有效维持了长达150秒以上的歌词跟随能力。消融实验（图8）显示，SPC方法的WER在各个时长区间都显著优于Vanilla（前缀拼接）、Curriculum（课程学习）和ABF（调整RoPE基数）方法。

3.  Redesigned In-Context Learning (ICL) for Music：
    - 是什么：重新设计的、适用于音乐生成的上下文学习框架，支持风格克隆、双向内容创作等。
    - 局限：传统的基于续写的语音ICL（参考文本+参考音频→生成音频）在音乐场景下存在三个问题：1) 强制需要参考文本（歌词可能不可得）；2) 单向续写假设限制了创作灵活性；3) 风格与内容纠缠，可能引发版权问题。
    - 如何起作用：直接使用参考音频片段（约30秒）的token作为前缀，与SPC数据拼接。采用延迟激活策略（仅在退火阶段引入少量ICL数据）来防止模型陷入简单的捷径学习（直接复制参考音频）。
    - 收益：实现了有效的风格和声音控制，同时保持生成内容的原创性。记忆化测试（图10）表明，生成内容与训练集的余弦相似度远低于已知重复的翻唱歌曲集，主要产生的是重组的新颖内容。

### 🔬 细节详述

- 训练数据：
    - 规模与来源：使用约70k小时的语音和650k小时的创作共用许可（Creative Commons） 音乐，从网络挖掘。数据包含多种语言和流派（流行、摇滚、电子等）。
    - 预处理：歌词通过Google搜索程序化获取。使用字符串匹配过滤掉有明确版权声明的数据。数据被分割为片段进行训练。
    - 数据混合：预训练阶段，条件生成与无条件生成比例为3:1，音乐与语音比例为10:1。退火阶段，仅使用SPC和ICL数据，比例为2:1。
- 损失函数：
    - Stage-1：标准的自回归下一标记预测损失（负对数似然）。
    - Stage-2：同样使用自回归下一标记预测损失，但目标序列扩展为所有8个码本（0-7）的token。
- 训练策略：
    - 优化器与调度：全局批大小768。使用线性预热，最大学习率3e-4，在退火阶段衰减至3e-5。
    - 分阶段训练：
        1.  预训练：Stage-1 7B模型在1.75T token、16K上下文窗口上训练。Stage-2 2B模型在2T token、8K上下文窗口上训练。
        2.  退火：Stage-1进行40B token的退火训练，引入ICL数据。
    - 缩放实验：在0.5B、2B、7B规模上进行了训练，预算从100B token到1.75T token不等。
- 关键超参数：
    - 模型规模：Stage-1最终为7B参数，Stage-2为2B参数。
    - 上下文窗口：Stage-1预训练使用16K，Stage-2使用8K。
    - 音频tokenizer：X-Codec， 50Hz帧率，8层RVQ（实际使用），码本大小1024。
- 训练硬件：论文中未具体说明GPU/TPU型号、数量和训练时长。
- 推理细节：
    - 采样策略：应用采样（如Top-k/Top-p）和Classifier-Free Guidance (CFG) 来提高生成质量和遵循提示的能力。
    - 测试时技巧：使用音乐ICL（以歌曲副歌作为前缀）能显著提升音乐性和稳定性。实验（图9b）表明，ICL+CFG的组合在音乐性上胜率最高（0.79）。
    - 流式设置：论文中未提及。

### 📊 实验结果

主要人工评估结果（与商业系统对比）：

![图3：人工评估结果](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-2.png)

- 整体偏好（左图）：YuE在“Overall”上与Udio（胜率47%对47%）和Tiangong（49%对50%）持平，显著优于Hailuo（53%对24%），但落后于Suno V4（76%对29%）。
- 音乐性胜率（右图）：YuE在音乐性上与Udio（41%胜）和Tiangong（37%胜）接近，大幅优于Hailuo（71%胜），但仍不及Suno V4（69%负）。

歌声灵活性（Vocal Agility）：

![图4：不同系统的歌声音域分布](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-3.png)
- YuE的中位音域约为27个半音，与Suno V4（~27半音）相当，显著高于Hailuo和Tiangong（约20个半音）。

生成时长（Duration）：

![图5：不同系统的生成时长分布](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-4.png)
- YuE生成的歌曲时长范围最广，中位数最长，展示了其处理长程依赖的能力。

自动评估结果：

| 指标 | 分布匹配 (越低越好) | 内容基于 (越高越好) | 对齐 (越高越好) |
| :--- | :---: | :---: | :---: |
| 模型 | KL ↓ | FAD ↓ | CE ↑ | CU ↑ | PC ↑ | PQ ↑ | CLAP ↑ | CLaMP 3 ↑ |
| Hailuo | 0.756 | 2.080 | 7.350 | 7.737 | 6.793 | 8.132 | 0.265 | 0.106 |
| SunoV4 | 0.620 | 1.544 | 7.474 | 7.813 | 6.601 | 8.120 | 0.265 | 0.160 |
| Tiangong | 0.708 | 2.547 | 7.421 | 7.766 | 6.060 | 8.220 | 0.244 | 0.114 |
| Udio | 0.503 | 1.222 | 7.112 | 7.520 | 6.626 | 7.803 | 0.310 | 0.156 |
| YuE | 0.372 | 1.624 | 7.115 | 7.543 | 6.280 | 7.894 | 0.118 | 0.240 |

- 分布匹配：YuE的KL散度最低（0.372），表明其生成音频的特征分布与真实数据最接近。
- 内容基于：各项指标与顶尖系统接近，但在生产质量（PQ）上略低于Tiangong。
- 文本-音频对齐：YuE的CLaMP 3分数最高（0.240），表明其语义对齐能力强；但CLAP分数较低（0.118），论文分析这可能是因为CLAP在预训练时接触歌唱/音乐内容不足。

关键消融实验：
1.  Dual-NTP有效性：在相同预算（20B token）下，0.5B模型的Dual-NTP比标准NTP收敛损失低约0.4（图7）。
2.  SPC有效性：在歌词跟随任务上，SPC方法（包括7B缩放版）的WER在所有测试时长上都远优于Vanilla, Curriculum, ABF方法（图8）。例如在150秒时，SPC-7B的WER约20%，而Vanilla方法已接近100%。
3.  模型缩放效果：从0.5B到7B，在音乐性和歌词跟随两个维度上的人工评测胜率均有大幅提升（图9a）。
4.  测试时技巧效果：ICL+CFG的音乐性人工评测胜率最高（0.79），远优于仅使用SPC（0.21）或ICL（0.63）（图9b）。

### ⚖️ 评分理由

- 学术质量：6.0/7
    - 创新性：提出的Dual-NTP和SPC技术有效解决了长篇音乐生成中的核心难题，具有清晰的针对性和创新性。重新设计的音乐ICL也具有实用价值。
    - 技术正确性：架构设计合理，数学描述清晰。消融实验设计严谨，充分验证了每个关键组件的有效性。
    - 实验充分性：评估全面，包含了主观人工评测（对比多个顶级系统）、客观自动指标、以及深入的技术分析实验（如VAR-WER关系、记忆化测试）。数据公开透明。
- 选题价值：1.5/2
    - 前沿性与影响力：长篇歌词到歌曲生成是音乐AI的“圣杯”之一，本工作作为首个高质量的开源解决方案，具有很高的学术和应用价值。
    - 实际应用与读者相关性：直接面向音乐创作，对语音/音频领域的研究者（尤其是在生成、多任务建模、长上下文建模方向）有很强的参考意义。
- 开源与复现加成：+0.5/1
    - 论文提供了完整的代码仓库、预训练模型权重（Stage-1 & Stage-2）、以及详细的训练配置、数据规模和评估方法，开源程度非常高，极大地便利了社区复现和后续研究。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
