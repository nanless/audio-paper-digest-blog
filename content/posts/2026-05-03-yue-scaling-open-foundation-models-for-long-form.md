---
title: "YuE: Scaling Open Foundation Models for Long-Form Music Generation"
date: 2026-05-03
draft: false
tags: [音乐生成, 歌唱语音合成, 自回归模型, 多任务学习, 预训练]
categories: [iclr-2026]
description: "音乐生成 | 9.0/10"
hiddenInHomeList: true
---

# 📄 YuE: Scaling Open Foundation Models for Long-Form Music Generation

#音乐生成 #歌唱语音合成 #自回归模型 #多任务学习 #预训练

🔥 **9.0/10** | 前10% | #音乐生成 | #自回归模型 | #歌唱语音合成 #多任务学习

学术质量 6.0/7 | 选题价值 2.0/2 | 复现加成 1.0 | 置信度 高


### 👥 作者与机构

- 第一作者：Ruibin Yuan (HKUST, Moonshot.ai, MAP)
- 通讯作者：未说明
- 作者列表：Ruibin Yuan (HKUST, Moonshot.ai, MAP), Hanfeng Lin (HKUST, MAP), Shuyue Guo (MAP), Ge Zhang (MAP, University of Michigan), Jiahao Pan (HKUST, MAP), Yongyi Zang (Independent), Haohe Liu (University Of Surrey, MAP), Yiming Liang (MAP), Wenye Ma (MBZUAI, MAP), Xingjian Du (University of Rochester, MAP), Xeron Du (MAP), Zhen Ye (HKUST), Tianyu Zheng (MAP), Zhengxuan Jiang (MAP), Yinghao Ma (MAP, Queen Mary University of London), Minghao Liu (2077AI, MAP), Zeyue Tian (HKUST, MAP), Ziya Zhou (HKUST, MAP), Liumeng Xue (HKUST, MAP), Xingwei Qu (MAP), Yizhi Li (MAP, University of Manchester), Shangda Wu (Central Conservatory of Music, MAP), Tianhao Shen (MAP), Ziyang Ma (MAP, SJTU, NTU), Jun Zhan (Fudan University), Chunhui Wang (Geely), Yatian Wang (HKUST), Xiaowei Chi (HKUST), Xinyue Zhang (HKUST), Zhenzhu Yang (HKUST), Xiangzhou Wang (MAP), Shansong Liu (Meituan), Lingrui Mei (Meituan), Peng Li (HKUST), Junjie Wang (Tsinghua University), Jianwei Yu (Moonshot.ai), Guojian Pang (MAP), Xu Li (Xiaohongshu), Zihao Wang (Zhejiang University, Carnegie Mellon University), Xiaohuan Zhou (MAP), Lijun Yu (Carnegie Mellon University), Emmanouil Benetos (Queen Mary University of London, MAP), Yong Chen (Geely), Chenghua Lin (University of Manchester, MAP), Xie Chen (Shanghai Jiao Tong University), Gus Xia (MBZUAI, MAP), Zhaoxiang Zhang (Chinese Academy of Sciences), Chao Zhang (Tsinghua University), Wenhu Chen (University of Waterloo, MAP), Xinyu Zhou (Moonshot.ai), Xipeng Qiu (Fudan University), Roger Dannenberg (Carnegie Mellon University, MAP), Jiaheng Liu (Nanjing University, MAP), Jian Yang (MAP), Wenhao Huang (MAP), Wei Xue (HKUST), Xu Tan (Moonshot.ai, MAP), Yike Guo (HKUST)

#

### 💡 毒舌点评

亮点：YuE是首个开源且能生成长达5分钟、歌词连贯的完整歌曲的模型，其Dual-NTP和SPC技术有效解决了长音频建模中的信号干扰和歌词漂移问题，并在与商业系统的对决中展现了强大的竞争力，开源诚意十足。
短板：论文中关于结构化渐进式条件（SPC）如何具体利用音乐结构先验的细节略显不足，且其有效性高度依赖外部结构分析工具，模型的“即兴”生成能力与真正理解音乐深层结构之间仍有一定距离。

#

### 📌 核心摘要

1.  问题：本文旨在解决高质量、长形式的“歌词到歌曲”音乐生成任务，面临长程依赖建模、多声部信号复杂、演唱导致的语言失真以及数据稀缺等核心挑战。
2.  方法核心：提出了YuE模型，采用两阶段自回归生成框架。Stage-1使用轨道解耦的下一令牌预测（Dual-NTP）联合建模人声和伴奏，并结合结构化渐进式条件（SPC）来维持长上下文下的歌词一致性。Stage-2负责基于Stage-1的语义令牌预测残差令牌以恢复音频细节。此外，还重新设计了适用于音乐的上下文学习（ICL）框架。
3.  创新：1）Dual-NTP：通过将每个时间步解耦为人声和伴奏两个令牌，分别建模，避免了混合信号干扰，尤其适用于人声-伴奏比低的复杂音乐流派。2）SPC：将歌曲按结构（如主歌、副歌）分段，在每个段内进行条件生成，解决了标准文本前置条件在长序列下的失效问题。3）重新设计的ICL：无需参考歌词，支持双向内容创作，通过延迟激活策略避免了捷径学习。
4.  主要结果：在人类评估中，YuE在音乐性和整体偏好上超越了Hailuo，与Tiangong和Udio持平，但略逊于Suno V4。在歌唱音域（中位数27半音）和生成时长上表现出色。消融实验证明，Dual-NTP相比标准NTP收敛更快（损失低约0.4），SPC在长音频歌词跟随（WER）上显著优于基线方法。具体数据见下表。

| 模型 | KL↓ | FAD↓ | CE↑ | CU↑ | CLaMP 3↑ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Hailuo | 0.756 | 2.080 | 7.350 | 7.737 | 0.106 |
| SunoV4 | 0.620 | 1.544 | 7.474 | 7.813 | 0.160 |
| Tiangong | 0.708 | 2.547 | 7.421 | 7.766 | 0.114 |
| Udio | 0.503 | 1.222 | 7.112 | 7.520 | 0.156 |
| YuE | 0.372 | 1.624 | 7.115 | 7.543 | 0.240 |

![图3：人类评估热力图](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-2.png)
图3展示了YuE与四个商业系统在整体人类偏好（左）和音乐性（右）上的胜率对比。YuE在音乐性上与Udio（73:71）和Tiangong（76:76）接近，超越Hailuo（83:17）。

![图5：生成时长分布](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-4.png)
图5显示了各系统生成歌曲的时长分布。YuE能够生成时长显著更长（中位数及上限均最高）的歌曲，证明其处理长程依赖的能力。

5.  实际意义：YuE作为首个开源的、能与商业系统对标的完整歌曲生成模型，极大降低了AI音乐创作的门槛，将推动音乐创作工具的民主化，并为后续研究提供了强大的基础模型和可复现的范式。
6.  主要局限：依赖外部工具进行音乐结构分析；音频令牌化方法（X-Codec）在声学细节重建上仍有提升空间（见消融分析）；模型性能在顶尖商业系统（Suno V4）面前仍有差距。

### 🏗️ 模型架构

YuE是一个两阶段的自回归语言模型（LM）框架，基于LLaMA2架构构建，专门针对“歌词到歌曲”生成任务设计。

![图1：YuE两阶段生成概览](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-0.png)
图1展示了YuE的两阶段生成流程。Stage-1（音乐LM）生成语义丰富的codebook-0令牌（蓝色人声+橙色伴奏）。Stage-2（残差建模）基于这些令牌生成残差令牌（灰色），最后通过解码器和上采样模块还原为波形。

![图2：Stage-1框架详情](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-1.png)
图2详细展示了Stage-1的框架。输入为文本（指令、歌词）和参考音频（用于ICL）。核心是采用Dual-NTP（虚线框）和SPC（文本交错格式）的自回归模型，输出交织的人声与伴奏令牌序列。

完整流程：
1.  输入：包含文本指令（如风格、歌词、结构标签）和可选的参考音频（用于ICL）。
2.  令牌化：文本通过LLaMA分词器处理。音频使用X-Codec（一种语义-声学融合编码器）转换为离散令牌序列。X-Codec的codebook-0富含语义信息，是Stage-1的直接输入。
3.  Stage-1 生成：
    *   Dual-NTP：模型以自回归方式，在每个时间步`t`同时预测人声令牌`v_t`和伴奏令牌`a_t`。其联合概率被分解为 `P(v_t | v_{<t}, a_{<t}) × P(a_t | v_{≤t}, a_{<t})`，实现了对双轨道的联合建模，无需串行处理。
    *   SPC：输入序列被组织为文本和音频令牌的交错结构。歌曲先被自动分割为结构段落（如主歌、副歌），每个段落内部的歌词/标签与生成的音频令牌交错排列。这为模型提供了持续的歌词上下文信息，避免了长序列中的遗忘。
    *   ICL激活：在推理时，可以向序列前部插入一段参考音频（如副歌）的令牌，以引导生成在音色、风格上与之相似，但内容（歌词）由新的文本提示控制。论文指出，这通过在训练末期少量引入ICL数据实现。
4.  Stage-2 生成：Stage-1输出codebook-0令牌序列。Stage-2（一个2B参数的LM）接收此序列作为固定条件，自回归地预测每个时间步对应的全部8个codebook（0-7）的令牌元组。训练时所有codebook都作为目标；推理时codebook-0被固定，仅生成codebook 1-7（残差令牌），以恢复音频细节。
5.  解码与上采样：完整的8层RVQ令牌序列通过X-Codec解码器重建为16kHz波形，再通过一个基于Vocos的轻量级上采样模块提升至44.1kHz。

### 💡 核心创新点

1.  轨道解耦下一令牌预测（Dual-NTP）：
    *   问题：标准NTP用单个令牌表示混合了人声和伴奏的音频帧，在复杂音乐（如金属乐）中，伴奏会淹没语言信息，导致歌词不清。
    *   方案：显式地将每个时间步分解为人声和伴奏两个独立令牌，分别建模。这引入了源分离先验，使模型能更清晰地学习每条轨道的动态。
    *   收益：在训练损失上收敛更快（见图7），在低人声-伴奏比（VAR）场景下，歌词的词错率（WER）增长更平缓，显著提升了对复杂音乐的建模能力（见图6）。

![图7：训练损失曲线](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-6.jpg)
图7对比了在相同数据量下，Dual-NTP（蓝线）与标准NTP（橙线）的训练损失。Dual-NTP的损失持续更低，证实了其更高的建模效率。

![图6：WER-VAR关系图](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-5.png)
图6分析了混合音轨与分离人声音轨的WER随人声-伴奏能量比（VAR）的变化。在低VAR（伴奏强）时，混合音轨的WER急剧上升，而人声音轨的WER保持稳定，说明源分离先验的有效性。

2.  结构化渐进式条件（SPC）：
    *   问题：将标准文本前置条件用于超过30秒的长序列生成时，歌词遵循能力会严重退化（如生成纯器乐前奏，导致演唱起始点漂移）。
    *   方案：利用音乐的固有结构（主歌、副歌等），将歌词与音频令牌在结构段落内交错排列。模型在每个段落内都能直接“看到”当前歌词。
    *   收益：图8显示，SPC（红线）在长达150秒的生成中，WER始终远低于其他基线方法（Vanilla、Curriculum、ABF），证明了其对长程歌词一致性的卓越维持能力。

![图8：歌词遵循能力消融实验](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-7.jpg)
图8显示了在不同生成时长下的WER。SPC（7B模型，红线）的WER随时间增长缓慢，而其他方法（蓝、绿、黄线）的WER迅速升高。模型扩展到7B参数（深红线）进一步大幅降低了WER。

3.  重新设计的音乐上下文学习（ICL）：
    *   问题：语音ICL的“续写”范式不适用于音乐：要求参考文本冗余、限制单向创作、易导致对参考旋律的抄袭。
    *   方案：直接将一段参考音频（如副歌，约30秒）的令牌序列置于SPC格式数据之前。通过延迟激活策略（仅在训练末期引入少量ICL数据）来防止模型学会简单的“复制捷径”，确保歌词控制与风格参考的解耦。
    *   收益：实现了更灵活的音乐生成，例如用女声日文City Pop作为参考，可以生成英文说唱版本，同时保持相似的歌手音色和风格（论文demo所示）。图9b显示，ICL+CFG在音乐性偏好测试中胜率最高（0.79）。

### 🔬 细节详述

-   训练数据：
    -   语音数据：70k小时。
    -   音乐数据：650k小时，从网络挖掘的Creative Commons许可音乐。
    -   预处理：数据混合比例在预训练和退火阶段有所不同。预训练为条件:无条件=3:1，音乐:语音=10:1。退火阶段仅使用SPC和ICL数据，比例为2:1。
-   损失函数：标准的自回归语言建模损失（负对数似然），应用于Stage-1和Stage-2的令牌预测。
-   训练策略：
    -   预训练：采用多任务学习，同时包含TTS、歌词到歌曲和无条件音乐生成。
    -   模型规模：核心实验使用0.5B模型，100B token预算。最终扩展到7B模型，使用1.75T token训练，上下文长度16K。
    -   退火：7B模型在1.75T token后，进行40B token的退火训练，数据为SPC和ICL混合。
    -   优化器：未明确说明。学习率策略：全局批大小768，最大学习率3e-4，线性预热，退火阶段降至3e-5。
-   关键超参数：
    -   Stage-1 LM：7B参数，基于LLaMA2架构。
    -   Stage-2 LM：2B参数，8K上下文窗口。
    -   音频tokenizer：X-Codec，50Hz帧率，12层RVQ，码本大小1024（模型使用前8层）。
-   训练硬件：未说明。
-   推理细节：
    -   采样：使用采样和分类器自由引导（CFG）来提升生成成功率。
    -   ICL：在推理时，可将一首歌曲的副歌声频片段作为前缀输入，以增强音乐性和稳定性。
-   正则化/稳定训练技巧：在退火阶段使用延迟激活的ICL数据，以避免捷径学习。上采样模块训练时使用了码本丢弃和少量高斯噪声。

### 📊 实验结果

主要人类评估结果（与商业系统对比）：
如图3和表1所示。在整体偏好上，YuE超越Hailuo，与Tiangong、Udio持平。在音乐性子项上，YuE与Tiangong和Udio的胜负率接近（见图3右）。

歌唱音域（Vocal Agility）：
如图4所示。YuE的歌曲级歌唱音域中位数约为27个半音，接近Suno V4，显著高于Hailuo和Tiangong（约20个半音），表明其生成人声的动态范围和表现力较强。

![图4：歌唱音域分布](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-3.png)
图4展示了各系统生成歌曲的音域范围（半音数）。YuE（红色）的分布最宽，中位数最高，表明其歌唱能力更强。

生成时长：
如图5所示。YuE生成歌曲的时长分布范围最广，上限最高，证明了其建模长程音乐结构的能力。

消融实验 - 歌词跟随能力：
如图8所示。在0.5B模型上，SPC方法在30秒到150秒的生成中，WER始终最低。将模型扩展到7B参数并使用更大训练预算后，WER从0.5B模型的约70%降低至约20%，显示了规模化的巨大收益。

消融实验 - Dual-NTP：
如图7所示，在相同训练预算下，Dual-NTP的训练损失比标准NTP低约0.4，收敛更快。

消融实验 - 测试时技巧：
如图9b所示，在YuE-7B上，ICL（胜率0.63）显著优于SPC（0.21）。结合CFG后，ICL+CFG达到最高音乐性胜率（0.79）。

![图9b：测试时技巧消融](/audio-paper-digest-blog/images/iclr-2026/2026-05-03/hZy6YG2Ij8-8.jpg)
图9b展示了不同推理设置在音乐性上的A/B测试胜率。ICL+CFG组合表现最佳。

自动评估指标：
如表1所示。YuE在分布匹配指标KL上最优（0.372），在FAD上竞争力强（1.624）。在音频-文本对齐指标上，CLaMP 3得分最高（0.240），但CLAP得分较低（0.118），论文解释这可能与CLAP训练数据有关。

### ⚖️ 评分理由

-   学术质量：6.0/7：论文提出了针对长音乐生成的一系列有效且新颖的技术方案（Dual-NTP， SPC， 音乐ICL），并通过详实的消融实验和与商业系统的对比评估验证了其有效性。技术细节完整，实验设计合理，结论可信。主要扣分点在于某些核心机制（如SPC如何精准利用结构先验）的论述可以更深入，且最终性能与Suno V4仍有差距。
-   选题价值：2.0/2：AI音乐生成是当前AIGC领域的热点和前沿，长形式、高质量的歌词到歌曲生成具有极高的实际应用潜力和商业价值。YuE作为首个在该任务上开源的、性能接近商业闭源系统的模型，其价值巨大，对学术界和工业界都有重要影响。
-   开源与复现加成：1.0/1：论文提供了完整的开源代码库（GitHub）、预训练模型权重（HuggingFace）、在线Demo链接，以及非常详细的附录（包括训练数据比例、模型架构、评估协议等），复现信息极为充分，是开源工作的典范。

---

[← 返回 ICLR 2026 论文分析](/audio-paper-digest-blog/posts/iclr2026-summary/)
