---
title: "ICLR 2026 - 音乐生成 论文列表"
date: 2026-05-03
draft: false
tags: ["音乐生成"]
categories: [iclr-2026]
description: "共 7 篇 ICLR 2026 音乐生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音乐生成

共 **7** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [YuE: Scaling Open Foundation Models for Long-Form Music Gene](/audio-paper-digest-blog/posts/2026-05-03-yue-scaling-open-foundation-models-for-long-form) | 9.0分 | 前10% |
| 🥈 | [Generative Adversarial Post-Training Mitigates Reward Hackin](/audio-paper-digest-blog/posts/2026-05-03-generative-adversarial-post-training-mitigates) | 8.3分 | 前25% |
| 🥉 | [SyncTrack: Rhythmic Stability and Synchronization in Multi-T](/audio-paper-digest-blog/posts/2026-05-03-synctrack-rhythmic-stability-and-synchronization) | 8.0分 | 前25% |
| 4. | [SongEcho: Towards Cover Song Generation via Instance-Adaptiv](/audio-paper-digest-blog/posts/2026-05-03-songecho-towards-cover-song-generation-via) | 8.0分 | 前25% |
| 5. | [Latent Fourier Transform](/audio-paper-digest-blog/posts/2026-05-03-latent-fourier-transform) | 8.0分 | 前25% |
| 6. | [Steering Autoregressive Music Generation with Recursive Feat](/audio-paper-digest-blog/posts/2026-05-03-steering-autoregressive-music-generation-with) | 7.5分 | 前25% |
| 7. | [Discovering and Steering Interpretable Concepts in Large Gen](/audio-paper-digest-blog/posts/2026-05-03-discovering-and-steering-interpretable-concepts) | 6.5分 | 前50% |

---

## 📋 论文详情

### 🥇 [YuE: Scaling Open Foundation Models for Long-Form Music Generation](/audio-paper-digest-blog/posts/2026-05-03-yue-scaling-open-foundation-models-for-long-form)

🔥 **9.0/10** | 前10% | #音乐生成 | #自回归模型 | #歌唱语音合成 #多任务学习

👥 **作者与机构**

- 第一作者：Ruibin Yuan (HKUST, Moonshot.ai, MAP)
- 通讯作者：未说明
- 作者列表：Ruibin Yuan (HKUST, Moonshot.ai, MAP), Hanfeng Lin (HKUST, MAP), Shuyue Guo (MAP), Ge Zhang (MAP, University of Michigan), Jiahao Pan (HKUST, MAP), Yongyi Zang (Independent), Haohe Liu (University Of Surrey, MAP), Yiming Liang (MAP), Wenye Ma (MBZUAI, MAP), Xingjian Du (University of Rochester, MAP), Xeron Du (MAP), Zhen Ye (HKUST), Tianyu Zheng (MAP), Zhengxuan Jiang (MAP), Yinghao Ma (MAP, Queen Mary University of London), Minghao Liu (2077AI, MAP), Zeyue Tian (HKUST, MAP), Ziya Zhou (HKUST, MAP), Liumeng Xue (HKUST, MAP), Xingwei Qu (MAP), Yizhi Li (MAP, University of Manchester), Shangda Wu (Central Conservatory of Music, MAP), Tianhao Shen (MAP), Ziyang Ma (MAP, SJTU, NTU), Jun Zhan (Fudan University), Chunhui Wang (Geely), Yatian Wang (HKUST), Xiaowei Chi (HKUST), Xinyue Zhang (HKUST), Zhenzhu Yang (HKUST), Xiangzhou Wang (MAP), Shansong Liu (Meituan), Lingrui Mei (Meituan), Peng Li (HKUST), Junjie Wang (Tsinghua University), Jianwei Yu (Moonshot.ai), Guojian Pang (MAP), Xu Li (Xiaohongshu), Zihao Wang (Zhejiang University, Carnegie Mellon University), Xiaohuan Zhou (MAP), Lijun Yu (Carnegie Mellon University), Emmanouil Benetos (Queen Mary University of London, MAP), Yong Chen (Geely), Chenghua Lin (University of Manchester, MAP), Xie Chen (Shanghai Jiao Tong University), Gus Xia (MBZUAI, MAP), Zhaoxiang Zhang (Chinese Academy of Sciences), Chao Zhang (Tsinghua University), Wenhu Chen (University of Waterloo, MAP), Xinyu Zhou (Moonshot.ai), Xipeng Qiu (Fudan University), Roger Dannenberg (Carnegie Mellon University, MAP), Jiaheng Liu (Nanjing University, MAP), Jian Yang (MAP), Wenhao Huang (MAP), Wei Xue (HKUST), Xu Tan (Moonshot.ai, MAP), Yike Guo (HKUST)

#

💡 **毒舌点评**

亮点：YuE是首个开源且能生成长达5分钟、歌词连贯的完整歌曲的模型，其Dual-NTP和SPC技术有效解决了长音频建模中的信号干扰和歌词漂移问题，并在与商业系统的对决中展现了强大的竞争力，开源诚意十足。
短板：论文中关于结构化渐进式条件（SPC）如何具体利用音乐结构先验的细节略显不足，且其有效性高度依赖外部结构分析工具，模型的“即兴”生成能力与真正理解音乐深层结构之间仍有一定距离。

#

📌 **核心摘要**

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

![图3：人类评估热力图](icassp-img://hZy6YG2Ij8/2.png)
图3展示了YuE与四个商业系统在整体人类偏好（左）和音乐性（右）上的胜率对比。YuE在音乐性上与Udio（73:71）和Tiangong（76:76）接近，超越Hailuo（83:17）。

![图5：生成时长分布](icassp-img://hZy6YG2Ij8/4.png)
图5显示了各系统生成歌曲的时长分布。YuE能够生成时长显著更长（中位数及上限均最高）的歌曲，证明其处理长程依赖的能力。

5.  实际意义：YuE作为首个开源的、能与商业系统对标的完整歌曲生成模型，极大降低了AI音乐创作的门槛，将推动音乐创作工具的民主化，并为后续研究提供了强大的基础模型和可复现的范式。
6.  主要局限：依赖外部工具进行音乐结构分析；音频令牌化方法（X-Codec）在声学细节重建上仍有提升空间（见消融分析）；模型性能在顶尖商业系统（Suno V4）面前仍有差距。

---

### 🥈 [Generative Adversarial Post-Training Mitigates Reward Hacking in Live Human-AI Music Interaction](/audio-paper-digest-blog/posts/2026-05-03-generative-adversarial-post-training-mitigates)

🔥 **8.3/10** | 前25% | #音乐生成 | #强化学习 | #音乐交互 #对抗学习

👥 **作者与机构**

- 第一作者：Yusong Wu（Mila - Quebec Artificial Intelligence Institute, Université de Montréal）
- 通讯作者：Natasha Jaques（University of Washington），Cheng-Zhi Anna Huang（Massachusetts Institute of Technology）
- 作者列表：Yusong Wu（Mila, Université de Montréal），Stephen Brade（Massachusetts Institute of Technology），Aleksandra Teng Ma（Georgia Institute of Technology），Tia-Jane Fowler（University of Washington），Enning Yang（McGill University），Berker Banar（Independent Researcher），Aaron Courville（Mila, Université de Montréal， Canada CIFAR AI Chair），Natasha Jaques（University of Washington），Cheng-Zhi Anna Huang（Massachusetts Institute of Technology）

💡 **毒舌点评**

本文精准地瞄准了RL后训练在生成式模型中普遍存在的“奖励黑客”问题，并在一个极具挑战性的实时音乐交互场景中给出了优雅的解决方案和完整的验证闭环。其两阶段自适应判别器更新设计颇具工程巧思，但对抗训练的稳定性本质上仍是经典难题，论文对此的理论剖析稍显不足。最终，它证明了将稍显“过时”的对抗训练思想与现代RL结合，对于解决特定痛点依然有效。

🔗 **开源详情**

- 代码：提供完整代码仓库链接 https://github.com/lukewys/realchords-pytorch。
- 模型权重：论文提到提供了“model checkpoints”，但未明确说明是否公开托管权重文件。
- 数据集：使用了多个公开音乐数据集（Hooktheory, POP909, Nottingham, Wikifonia），论文中说明了获取方式和预处理流程。
- Demo：提供音频示例网站 https://realchords-GAPT.github.io。
- 复现材料：论文附录（C部分）极其详细，涵盖了模型架构、训练细节、超参数、奖励模型性能、消融实验等，复现指南充分。
- 引用的开源项目：基于ReaLchords代码库；使用LLaMA风格的Transformer架构；训练使用PyTorch、Adam优化器等通用框架。

📌 **核心摘要**

1.  问题：实时音乐交互（如即兴合奏）要求AI伴奏模型能快速适应并保持创造性多样性。使用强化学习后训练能提升模型的适应性，但常导致“奖励黑客”现象，即模型为最大化奖励而输出重复、单调、缺乏变化的简单和弦，破坏了协作流程。
2.  方法核心：提出生成对抗后训练（GAPT）。在以一致性为核心奖励的RL后训练中，额外训练一个判别器，用于区分策略生成的轨迹和真实数据轨迹。判别器的输出作为对抗性奖励，激励策略生成更自然、更多样的伴奏。为稳定训练，设计了两阶段自适应更新策略：先固定间隔更新判别器预热，后根据策略性能自适应开启更新。
3.  与已有方法相比新在哪里：与仅用KL散度约束的RL后训练相比，GAPT的对抗性奖励提供了更强的分布匹配信号，能更有效地防止多样性坍塌。与经典GAN或GAIL相比，其创新在于提出了针对序列生成和实时交互场景的两阶段稳定训练机制。
4.  主要实验结果：在固定旋律测试集上，GAPT的和谐度（0.497）接近基线ReaLchords（0.484），但多样性（Vendi Score 26.645）显著高于后者（20.968）。在与学习型旋律代理交互中，GAPT同样保持了和谐度与多样性的平衡。在由12名专业音乐家参与的用户研究中，GAPT在“适应速度”和“控制与主导权”两项评分上显著优于基线（p<0.05），并获得了最高的综合评分。
5.  实际意义：该方法能提升实时人机音乐协作工具的体验，使AI更像一个富有创造力的伙伴而非机械伴奏。其解决奖励黑客的思路对其他序列生成任务（如对话、文本生成）的RL对齐也有参考价值。
6.  主要局限性：方法增加了额外的判别器训练开销。两阶段训练中的超参数（如阈值τ）需要针对任务调整。论文主要验证了单旋律到和弦的伴奏场景，对于更复杂的多声部即兴或结构化音乐生成，其有效性有待进一步研究。

---

### 🥉 [SyncTrack: Rhythmic Stability and Synchronization in Multi-Track Music Generation](/audio-paper-digest-blog/posts/2026-05-03-synctrack-rhythmic-stability-and-synchronization)

🔥 **8.0/10** | 前25% | #音乐生成 | #扩散模型 | #模型评估 #基准测试

👥 **作者与机构**

- 第一作者：Hongrui Wang（香港科技大学数学系）
- 通讯作者：Can Yang（香港科技大学数学系、神经系统疾病国家重点实验室）& Yang Wang（香港大学）
- 作者列表：Hongrui Wang（香港科技大学数学系）、Fan Zhang（香港科技大学数学系）、Zhiyuan Yu（浙江大学CAD&CG国家重点实验室）、Ziya Zhou（香港科技大学交叉学科学院）、Xi Chen（香港科技大学交叉学科学院）、Can Yang（香港科技大学数学系、神经系统疾病国家重点实验室）、Yang Wang（香港大学）

💡 **毒舌点评**

亮点： 论文精准抓住了现有方法“重差异、轻协同”的本质缺陷，提出的“共享节奏-特定音色”分离架构设计巧妙且动机明确，新提出的三个节奏评估指标（IRS， CBS， CBD）填补了该领域客观评价体系的空白，实验结果对比全面且增益显著。
短板： 模型生成长度仅限10秒片段，对于实际音乐制作所需的长程连贯性未做验证；尽管在Slakh2100上效果显著，但该数据集MIDI驱动的特性使其与真实录音音乐存在差距，模型在更复杂、更自由的真实音乐数据上的泛化能力有待进一步考察。

🔗 **开源详情**

- 代码： 论文提供了项目主页链接：`https://synctrack-v1.github.io`，其中包含代码。论文中明确声明“Source code for both the model and evaluation metrics are available on our demo page.”
- 模型权重： 未在论文正文中明确提及是否公开预训练权重，但根据项目主页的声明，通常会提供。
- 数据集： 使用Slakh2100数据集，这是一个公开的MIDI制作的多轨数据集。论文未提及自己发布新数据集。
- Demo： 论文提供了项目主页，通常包含音频样本演示。
- 复现材料： 提供了极其详细的训练配置、模型架构参数表（附录表A3）、超参数设置、评估工具（madmom库）的具体参数和使用方法。
- 论文中引用的开源项目： 依赖madmom库进行节拍跟踪，使用MusicLDM作为预训练权重来源，使用HiFi-GAN作为声码器，基础框架为LDM/DDPM。

📌 **核心摘要**

1.  解决的问题： 现有模型在多轨音乐生成任务中，常常忽略“节奏稳定性”（单轨内）和“同步性”（多轨间）这两个音乐的核心属性，导致生成的各音轨在节奏上各自为政，听感不和谐。传统评估指标（如FAD）也无法有效衡量这些关键特质。
2.  方法核心： 提出SyncTrack模型，其核心在于一种新颖的统一架构，将多轨信息分离处理。模型包含“轨道共享模块”和“轨道特定模块”。前者通过两种跨轨注意力机制（全局和时域特定）强制所有音轨学习共同的节奏框架与细粒度对齐；后者通过可学习的乐器先验向量捕捉各音轨独特的音色与音高特性。
3.  与已有方法的比较： 已有方法（如MSDM， MSG-LD）将多轨生成视为多元时间序列建模，过度强调轨道间的差异。SyncTrack则明确区分了“共享的节奏信息”和“独立的音色信息”，并通过专用模块分别建模，从根本上匹配了音乐生成的固有特性。
4.  主要实验结果： 在Slakh2100数据集上，SyncTrack全面超越基线。在反映整体质量的FAD指标上，混合音乐FAD从基线最优的1.31降至1.26（↓3.8%）；单轨FAD平均降幅约30%。在提出的节奏指标上，IRS（节奏稳定性）显著优于基线（例如鼓轨从0.040降至0.011）；CBS（同步性）提升34.8%，CBD（节拍离散度）降低27.8%，接近真实音乐水平。主观评价得分（3.42）也远高于基线（1.57）。
5.  实际意义： 为专业音乐制作（如混音、重编）提供了更高质量、节奏可靠且各轨独立的生成模型。同时，提出的IRS、CBS、CBD三个新指标为多轨音乐生成的客观评估提供了更精确、更符合音乐学原理的工具。
6.  主要局限性： 当前实验仅限于10秒长度的片段生成，尚未验证模型在长段落（如完整歌曲）中维持节奏一致性和音乐结构的能力。此外，评估指标依赖于节拍跟踪算法的准确性，可能受到算法自身偏差的影响。

---

### 4. [SongEcho: Towards Cover Song Generation via Instance-Adaptive Element-wise Linear Modulation](/audio-paper-digest-blog/posts/2026-05-03-songecho-towards-cover-song-generation-via)

🔥 **8.0/10** | 前25% | #音乐生成 | #扩散模型 | #条件生成 #歌唱语音合成

👥 **作者与机构**

- 第一作者：Sifei Li（中国科学院自动化研究所，中国科学院大学人工智能学院）
- 通讯作者：Weiming Dong（中国科学院自动化研究所）
- 作者列表：Sifei Li（中国科学院自动化研究所，中国科学院大学人工智能学院）、Yang Li（中国科学院自动化研究所，中国科学院大学人工智能学院）、Zizhou Wang（中国科学院软件研究所）、Yuxin Zhang（中国科学院自动化研究所，中国科学院大学人工智能学院）、Fuzhang Wu（中国科学院软件研究所）、Oliver Deussen（康斯坦茨大学）、Tong-Yee Lee（成功大学）、Weiming Dong（中国科学院自动化研究所）

💡 **毒舌点评**

这篇论文的亮点在于它精准地抓住了“翻唱生成”这个新兴且有趣的音乐AI子任务，并提出了一个轻量高效、基于调制的新颖控制框架（IA-EiLM），在多个指标上显著超越了现有的旋律控制基线。然而，其短板也显而易见：论文对“翻唱”的定义（排除局部风格再创作）略显保守，且对生成音频的审美评估部分依赖于自动化指标，缺乏更深入的人类主观评估对比，使得“高质量”的结论略显单薄。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/lsfhuihuiff/SongEcho_ICLR2026
- 模型权重：论文未明确提及是否公开预训练模型权重，但提供了可复现的训练流程。
- 数据集：公开了构建的Suno70k数据集（通过上述GitHub仓库获取）。
- Demo：提供了在线演示页面链接：https://vvanonymousvv.github.io/SongEcho_updated/
- 复现材料：提供了完整的实现细节（第5.1节），包括学习率、优化器、batch size、训练步数、硬件配置等。附录中有更详细的基线设置和数据处理细节。
- 论文中引用的开源项目：
    - 基座模型：ACE-Step (Gong et al., 2025)
    - 评估工具：mir_eval (Raffel et al., 2014), SongEval (Yao et al., 2025), Whisper (Radford et al., 2023), Qwen2-audio (Chu et al., 2024)
    - 音高提取：RVMPE (Wei et al., 2023)
    - 对齐工具：Montreal Forced Aligner (McAuliffe et al., 2017)
    - 基线方法参考：Stable Audio, MuseControlLite, ControlNet

📌 **核心摘要**

1.  解决的问题：现有文本到音乐生成模型缺乏对声乐旋律进行精确时间控制的能力，而专门的歌曲翻唱生成任务（在保留原旋律基础上重新生成人声与伴奏）尚未被充分研究。
2.  方法核心：提出SongEcho框架，其核心是实例自适应元素级线性调制（IA-EiLM）。它由元素级线性调制（EiLM） 和 实例自适应条件细化（IACR） 组成。EiLM扩展了FiLM，为隐藏状态生成时间对齐的调制参数（γ, β）；IACR则让条件特征与生成模型的隐藏状态交互，进行动态适配，以解决静态条件注入的局限性。
3.  与已有方法的创新点：相比基于交叉注意力（如MuseControlLite）或简单逐元素相加（如ControlNet）的方法，IA-EiLM提供了更灵活、时间对齐更精确的条件注入机制，并且通过实例自适应调整，使旋律条件能与生成模型的隐藏状态和谐融合，避免了特征冲突。
4.  主要实验结果：在Suno70k和SongEval数据集上，SongEcho在旋律控制（RPA, RCA）和音频质量（FD, KL）指标上均显著优于基线方法。例如，在Suno70k测试集上，SongEcho的RPA为0.7080，远高于最强基线ACE-Step+SA ControlNet+LoRA的0.6214；FD（Fréchet Distance）从99.19降至42.06。同时，它仅需49.1M可训练参数，远少于基线的189M-1.6B。主观MOS评分也显示其在旋律保真度、文本一致性、音频质量和整体偏好上均获最高分。
5.  实际意义：为音乐创作和文化再诠释提供了新的AI工具，降低了翻唱创作的技术门槛。同时，构建并开源了高质量的Suno70k数据集，缓解了歌曲生成领域数据稀缺和版权问题。
6.  主要局限性：受限于基座模型ACE-Step的文本控制能力，无法对音色进行细粒度控制（如仅支持性别调整）。此外，当前模型排除了人类翻唱中常见的局部风格再创作（如颤音、音符过渡的个性化处理），生成的歌曲缺乏人类演唱的细腻表现力。

---

### 5. [Latent Fourier Transform](/audio-paper-digest-blog/posts/2026-05-03-latent-fourier-transform)

🔥 **8.0/10** | 前25% | #音乐生成 | #扩散模型 | #时频分析 #自监督学习

👥 **作者与机构**

- 第一作者：Mason L. Wang（MIT CSAIL）
- 通讯作者：未明确说明（作者列表为Mason L. Wang, Cheng-Zhi Anna Huang，均为MIT CSAIL）
- 作者列表：Mason L. Wang（MIT CSAIL）、Cheng-Zhi Anna Huang（MIT CSAIL）

💡 **毒舌点评**

亮点在于创新性地将傅里叶变换从音频波形域提升到潜空间，为音乐生成提供了直观的“时间尺度”控制维度，这在当前以音色、音高为主要控制轴的方法中独树一帜。短板在于“潜空间频率”这一核心概念的物理意义与音乐元素的具体对应关系解释得还不够透彻（如图5所示，但规律性有待更强的理论支撑），且方法目前生成时长较短（5.9秒），计算复杂度可能较高。

🔗 **开源详情**

- 代码：论文明确提供了代码仓库链接：https://github.com/maswang32/latentfouriertransform/。
- 模型权重：论文未提及是否公开预训练模型的权重。
- 数据集：MTG-Jamendo、GTZAN、Maestro均为公开数据集，论文提供了获取或处理说明。
- Demo：论文未提及提供在线演示（Demo）。
- 复现材料：论文提供了非常详细的训练细节、配置（附录A）、模型架构、超参数，以及用于评估的实验管线代码，复现支持良好。
- 论文中引用的开源项目：依赖了Descript Audio Codec (DAC)、BigVGAN、librosa、Essentia等开源工具/模型。

📌 **核心摘要**

1.  要解决什么问题：现有的音乐生成模型缺乏对音乐中不同“时间尺度”模式（如缓慢的和弦进行与快速的颤音）进行独立、连续控制的能力，现有控制手段（如文本、音高曲线）无法精确指定时间尺度。
2.  方法核心是什么：提出LATENTFT框架，它结合扩散自编码器和潜空间的离散傅里叶变换（DFT）。模型将音频编码为潜时间序列，并对其计算DFT得到“潜频谱”。训练时，对潜频谱进行随机频域掩蔽，训练解码器从掩蔽后的潜序列中重构音频。推理时，用户可通过指定潜频谱上的掩蔽来生成变体或混合音频。
3.  与已有方法相比新在哪里：首次将频率域控制引入音乐生成的潜空间，提出了“潜频谱”概念，其频率轴（潜频率，单位Hz）直观对应于音乐模式发生的时间尺度。这提供了一个全新的、连续的控制维度，类比于传统均衡器对音色的控制，但操作对象是音乐结构。
4.  主要实验结果如何：在条件生成和混合两个任务上，LATENTFT的所有变体（MLP， UNet， DAC编码器）在条件遵循度（响度、节奏、音色、和声）和音频质量（FAD）上均优于所有基线（Masked Token Model， Guidance， ILVR， DAC， RAVE， Spectrogram）。例如，在条件生成任务中，LATENTFT-MLP的FAD为0.337，远优于次优基线Guidance的1.061。听测实验也显示LATENTFT在音频质量和融合能力上显著更受偏好。
5.  实际意义是什么：为交互式音乐创作和混音提供了新工具。音乐人可以选择性地保留或修改音乐在特定时间尺度上的特征（如只改变节奏但保留和声），或将两首乐曲在不同时间尺度上进行音乐性融合，这扩展了生成式AI在音乐制作中的应用潜力。
6.  主要局限性是什么：目前实验基于较短的音乐片段（约5.9秒）；潜空间频率与音乐属性的映射关系需要更多音乐理论支撑；计算涉及序列DFT，可能增加推理时间；混合和条件生成仍需指定频段，可能对用户有一定学习成本。

---

### 6. [Steering Autoregressive Music Generation with Recursive Feature Machines](/audio-paper-digest-blog/posts/2026-05-03-steering-autoregressive-music-generation-with)

✅ **7.5/10** | 前25% | #音乐生成 | #自回归模型 | #预训练 #音频大模型

👥 **作者与机构**

- 第一作者：Daniel Zhao（加州大学圣迭戈分校）
- 通讯作者：未说明
- 作者列表：Daniel Zhao（加州大学圣迭戈分校）、Daniel Beaglehole（加州大学圣迭戈分校）、Taylor Berg-Kirkpatrick（加州大学圣迭戈分校）、Julian McAuley（加州大学圣迭戈分校）、Zachary Novack（加州大学圣迭戈分校）

💡 **毒舌点评**

亮点在于其“激活空间干预”思路的优雅与完整：通过轻量级探针从冻结模型中提取可解释方向，再实时注入引导生成，避免了昂贵的微调，实现了控制与保真度的精细权衡。短板则源于方法论的根本局限——平均池化特征丢弃了关键的时序信息，导致对节奏、和弦进行等强时序依赖概念的控制效果不佳，暴露了RFM在处理动态序列数据时的潜在天花板。

🔗 **开源详情**

- 代码：提供了GitHub代码仓库链接：https://github.com/astradzhao/music-rfm。
- 模型权重：未提及公开预训练的MusicGen或MusicRFM探针权重。
- 数据集：使用了公开的SYNTHEORY和MusicBench数据集，论文中提供了相关引用和描述。
- Demo：提供了在线交互演示页面：https://musicrfm.github.io/controllable-music-rfm/。
- 复现材料：论文附录提供了详细的超参数搜索空间（表8）、控制调度公式（附录E）、RFM引导伪代码（附录F），以及详细的消融实验设置和结果，复现指导性强。
- 依赖项目：明确依赖MusicGen（Copet et al., 2024）、EnCodec（Défossez et al., 2022）、SYNTHEORY（Wei et al., 2024）、librosa、Essentia等开源项目。

📌 **核心摘要**

1.  问题：可控音乐生成面临挑战，现有方法常需模型重训练或引入可听伪影，难以实现对音符、和弦等细粒度音乐理论属性的精确、实时控制。
2.  方法核心：提出MusicRFM框架，利用递归特征机（RFM）在预训练MusicGen模型的隐藏层激活空间中，为特定音乐概念（如音符、和弦）提取可解释的“概念方向”，并在推理时通过前向钩子将这些方向注入模型残差流，从而实时引导生成过程。
3.  创新点：首次将RFM适配于自回归音乐生成控制；提出了基于探针性能的层级剪枝（Top-K和指数加权）和随机时间调度机制；支持多方向同步或交错控制，以平衡控制强度与生成质量。
4.  主要实验结果：在SYNTHEORY数据集上的实验表明，音乐生成的音符控制准确率可通过调整控制系数η₀从0.23提升至0.82，同时文本提示保真度（CLAP分数）与无控制基线相比损失在0.02以内。消融实验证实了层级剪枝和随机注入概率对改善生成质量至关重要。
5.  实际意义：提供了一个无需微调或推理时优化的高效框架，能对冻结的大型音乐生成模型进行细粒度、可解释的控制，为交互式音乐创作和编辑工具提供了新思路。
6.  主要局限性：探针训练采用平均池化，丢弃了时序信息，限制了对具有强顺序依赖性概念（如和弦进行、节拍）的控制效果；控制效果与基线模型对相应概念的内在编码能力高度相关。

### 01.模型架构
MusicRFM并非一个独立生成模型，而是一个作用于预训练自回归模型（MusicGen-Large）的引导框架。其整体流程分为离线探针训练和在线推理引导两个阶段。

核心流程：
1.  输入：文本提示（如“一首欢快的C大调乐曲”）。
2.  基础模型：MusicGen-Large，一个基于Transformer的自回归模型，包含48个解码块（层），在EnCodec神经音频编解码器的离散标记上进行条件生成。
3.  离线探针训练阶段：
    - 使用SYNTHEORY合成数据集，包含带有精确音乐理论标签的音频。
    - 音频被编码为EnCodec标记并输入MusicGen。
    - 对每一层`ℓ`的隐藏状态`h_t,ℓ`在时间步上进行平均池化，得到片段级向量`x_i,ℓ`。
    - 针对每个音乐概念（如特定音符）`c`和每一层`ℓ`，训练一个轻量级RFM探针。RFM通过迭代计算平均梯度外积（AGOP）矩阵并进行特征更新，最终得到一个特征值排序的正交方向集合`{q_ℓ,j}`。其中，特征值最大的方向`q_ℓ,j*`即为对应概念`c`的最敏感方向。
4.  在线推理引导阶段：
    - 模型接收文本提示，正常进行自回归生成。
    - 在每一时间步`t`，对于选定的层集合`S`中的每一层`ℓ`：
        - 通过前向钩子访问其隐藏状态`h_t,ℓ`。
        - 计算当前层的控制强度：`η_ℓ(t) = η₀  w_ℓ  ϕ(t) * ψ_p(t)`。其中`η₀`是全局控制系数，`w_ℓ`是层权重（由探针性能决定），`ϕ(t)`是时间调度函数，`ψ_p(t)`是伯努利随机门控。
        - 将探针方向`q_ℓ,j`（调整形状以匹配激活维度）乘以控制强度后，加到原始隐藏状态上：`h'_t,ℓ = h_t,ℓ + η_ℓ(t)  q_ℓ,j*`。
    - 修改后的隐藏状态继续参与后续层的计算，最终引导模型采���出符合控制概念的音频标记。

![MusicRFM 整体流程示意图](icassp-img://NaHzPMaCY9/0.png)
图示展示了MusicRFM的核心思想：通过轻量探针从冻结模型中提取概念方向，并在推理时注入激活空间以进行引导。

### 02.核心创新点
1.  激活空间概念方向引导：不同于基于微调或推理时优化的控制方法，MusicRFM直接在预训练模型的激活空间中识别并注入与特定音乐概念（如音符）对齐的方向向量。这实现了不修改模型参数的“外科手术式”干预。
2.  层级感知控制机制：创新性地提出了根据RFM探针在每层的分类性能，对控制强度进行加权。具体包括指数加权和Top-K硬剪枝，有效抑制了在信息量低或噪声大的层中注入方向所带来的负面伪影。
3.  时间动态调度与随机化：引入了可配置的时间调度函数（如线性升降、指数衰减、正弦调制）和伯努利随机注入机制，允许控制强度随时间动态变化，并减少累积偏差，使得生成过程中的属性变化（如音符淡入淡出）成为可能。
4.  多方向同步控制框架：扩展了框架以支持在多个概念方向（例如同时控制音符和和弦）上并行注入，并允许每个方向独立设置控制系数和时间调度，为复杂的多属性联合控制提供了基础。

### 03.细节详述
- 训练数据：
    - 探针训练：使用SYNTHEORY数据集，一个为研究音乐理论表示而设计的合成数据集，包含7类标签：音符、音程、和弦进行、和弦类型、调式、节拍、节拍符号。
    - 评估数据：使用SONG-DESCRIBER数据集（250条提示）进行生成评估；在MusicBench（真实音乐数据集）上进行了迁移性评估。
- 损失函数：RFM探针训练阶段，基础学习器使用核岭回归（KRR）。对于二分类任务，使用AUC作为验证指标；对于回归任务（如速度），使用MSE。最终选择验证指标最佳的RFM迭代结果。
- 训练策略：
    - RFM探针：进行15次RFM迭代（每次包括训练KRR、计算AGOP、特征更新）。使用70/15/15的划分进行训练/验证/测试。
    - 超参数调优：对每个层探针进行100次随机超参数搜索，聚合模型进行300次搜索。调优的超参数包括：核带宽、是否中心化梯度、指数q、核类型（`K_{p,q}`）、正则化强度λ。详见论文附录B和表8。
- 关键超参数：
    - 基础模型：MusicGen-Large，48层Transformer解码器。
    - 探针：使用平均池化特征。
    - 引导：全局控制系数`η₀ ∈ {0.15, 0.30, 0.45, 0.60}`；指数层权重`w_ℓ = w₀ * (ŝ_ℓ)^{1/κ}`，典型设置`w₀=1, κ=0.95`；随机注入概率`p=0.3`。
- 训练硬件：未在正文中明确说明，但附录提及在A6000 GPU上进行超参数搜索和训练。
- 推理细节：使用前向钩子实时修改隐藏状态，无逐步优化。文本提示作为条件输入MusicGen。控制参数（`η₀`, 调度）在生成前设定。
- 正则化/稳定技巧：1) 层级剪枝：避免在所有48层注入方向。2) 随机注入：以概率p在每步注入，减少过拟合和累积误差。3) 梯度中心化：在RFM迭代中可选的技巧，用于去噪高维梯度（见公式6）。

### 04.实验结果
论文进行了全面的定量评估、消融实验、外部评估和听者测试。

1. 探针分类性能（表1）
在SYNTHEORY数据集上，MusicRFM（平均池化）的探针在多数任务上优于或接近基线FFN探针，证明了其提取可解释方向的有效性。

| 模型 | 音符 | 音程 | 调式 | 和弦 | 进行 | 节拍符号 | 速度 | 平均 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| MusicRFM (ours) | 0.850 | 0.975 | 0.956 | 0.984 | 0.943 | 0.900 | 0.985 | 0.942 |
| RFM (last token) | 0.734 | 0.743 | 0.546 | 0.866 | 0.811 | 0.771 | 0.959 | 0.776 |
| Linear Probe | 0.761 | 0.618 | 0.158 | 0.834 | 0.725 | 0.729 | 0.972 | 0.685 |
| Syntheory FFN | 0.866 | 0.972 | 0.905 | 0.989 | 0.901 | 0.905 | 0.965 | 0.929 |

MusicRFM在平均池化下表现最佳，尤其在音符、音程、调式、进行和速度任务上。

2. 单方向控制效果（表2）
核心结果。展示了控制系数`η₀`对分布偏移（FD, MMD）、文本保真度（CLAP）和控制准确率（Probe Acc.）的影响。音符控制效果最为显著。

| 设置 | 类别 | η₀=0.15 | η₀=0.30 | η₀=0.45 | η₀=0.60 | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| MusicRFM-only | 音符 (随机0.083) | 准确率: 0.231 | 准确率: 0.461 | 准确率: 0.684 | 准确率: 0.824 | FD/MMD随η₀增加，CLAP稳定 |
| Prompt+RFM | 音符 | 准确率: 0.657 | 准确率: 0.826 | 准确率: 0.921 | 准确率: 0.952 | 结合提示效果最强 |
| Prompt-only | 音符 | 准确率: 0.436 | - | - | - | 仅改文本提示，基线 |

3. 层级剪枝与随机注入消融（表9-11）
- 层级加权（表9）：指数加权（`κ=0.95`）在控制准确率(0.961)和保真度(CLAB=0.194)上均优于均匀注入（0.964, 0.155）和线性加权。
- Top-K剪枝（表10）：K=16时平衡较好（准确率0.941， CLAP=0.225）；K=4时保真度高但控制弱；K=48（全层）控制强但伪影多。
- 随机注入概率p（表11）：p=0.3是较优平衡点（准确率0.697， CLAP=0.306）；p=1.0控制最强但分布偏移最大。

4. 时间控制与多方向控制
- 时间调度（图4）：探针softmax概率随调度函数（线性升降、指数衰减等）如实变化，证明了时间控制的精确性。
- 交叉淡化（图5）：音符n1的概率衰减，n2的概率上升，展示了概念间平滑过渡的能力。
- 多方向控制（表6）：同时控制两个概念时，控制强度提升仍能提高准确率，但分布偏移和CLAP下降更明显。

![实验结果对比图](icassp-img://NaHzPMaCY9/2.png)
论文中的实验结果图，展示了不同调度下音符分类概率随时间步的变化，验证了时间控制的有效性。

![交叉淡化实验结果图](icassp-img://NaHzPMaCY9/3.png)
论文中的实验结果图，展示了两个音符在交叉淡化过程中，探针概率此消彼长的动态过程。

5. 外部评估与听者测试（表3-4）
- 外部评估（表4）：在音符、和弦优势度和速度事件率上，MusicRFM均优于纯提示基线，且结合使用效果更佳。
- 听者测试（表3）：MusicRFM在感知控制准确度上显著优于无控制和朴素RFM，在四个属性（和弦、音程、音符、速度）上获得最高评分（均值约73.4）。

| 方法 / 属性 | 和弦 | 音程 | 音符 | 速度 |
| :--- | :--- | :--- | :--- | :--- |
| 无控制 | 59.71 ± 6.01 | 54.75 ± 5.52 | 57.08 ± 6.37 | 55.75 ± 7.08 |
| 朴素RFM | 69.21 ± 5.25 | 62.58 ± 5.84 | 68.13 ± 5.97 | 73.33 ± 4.35 |
| MusicRFM (最优) | 73.46 ± 4.18 | 70.33 ± 4.02 | 72.88 ± 5.67 | 73.38 ± 4.75 |

### 05.评分理由
- 学术质量：5.5/7。创新性良好，将RFM适配到音乐生成并设计了完整的控制框架。技术实现正确，实验设计全面，涵盖定量指标、消融、外部评估和主观测试，证据链条完整。主要扣分点在于平均池化导致对时序概念控制不足，且探针性能高度依赖预训练模型内生表征。
- 选题价值：1.0/2。解决的是音乐生成领域一个具体但重要的控制问题，方法具有一定的启发性和潜在应用价值，但方向相对垂直，与更广泛的音频/语音社区核心议题关联度一般。
- 开源与复现加成：1.0/1。提供了完整的代码、交互演示，训练细节、超参数搜索空间、评估设置在附录中详尽列出，极大地便利了研究复现。

## 开源详情
- 代码：提供了GitHub代码仓库链接：https://github.com/astradzhao/music-rfm。
- 模型权重：未提及公开预训练的MusicGen或MusicRFM探针权重。
- 数据集：使用了公开的SYNTHEORY和MusicBench数据集，论文中提供了相关引用和描述。
- Demo：提供了在线交互演示页面：https://musicrfm.github.io/controllable-music-rfm/。
- 复现材料：论文附录提供了详细的超参数搜索空间（表8）、控制调度公式（附录E）、RFM引导伪代码（附录F），以及详细的消融实验设置和结果，复现指导性强。
- 依赖项目：明确依赖MusicGen（Copet et al., 2024）、EnCodec（Défossez et al., 2022）、SYNTHEORY（Wei et al., 2024）、librosa、Essentia等开源项目。

---

### 7. [Discovering and Steering Interpretable Concepts in Large Generative Music Models](/audio-paper-digest-blog/posts/2026-05-03-discovering-and-steering-interpretable-concepts)

✅ **6.5/10** | 前50% | #音乐生成 | #稀疏自编码器 | #音乐理解 #特征发现

👥 **作者与机构**

- 第一作者：Nikhil Singh (Dartmouth College)， Manuel Cherep (MIT) （论文明确标注为*Equal contribution， 即共同第一作者）
- 通讯作者：未说明
- 作者列表：Nikhil Singh (Dartmouth College)， Manuel Cherep (MIT)， Pattie Maes (MIT)

💡 **毒舌点评**

这篇论文将稀疏自编码器（SAE）首次应用于音频/音乐模型的可解释性研究，系统地构建了从特征发现到自动标注再到引导生成的全流程，展示了模型内部存在传统理论尚未很好描述的“涌现规律”，这一思路本身很有启发性。但作为一篇ICLR论文，其在关键领域的对比（如与其他可解释性方法的对比）和深入分析略显不足，例如仅用无条件音频进行分析而未能处理文本条件，并且未公开代码和模型权重，使得结论的复现和验证存在门槛。

🔗 **开源详情**

-   代码：论文中未提及提供代码仓库链接或开源计划。
-   模型权重：未提及是否公开训练好的稀疏自编码器权重。
-   数据集：分析使用的激活数据集（从MusicSet提取并处理）未公开。论文中提及的基础数据集MusicSet是公开的。
-   Demo：未提供在线演示。
-   复现材料：论文提供了部分SAE超参数（扩展因子、k值）、特征过滤阈值、引导公式以及Gemini标注的提示词模板（附录H）和结构（附录H）。但关键的训练细节（优化器、学习率、批次大小、训练步数等）未在正文中详细说明。
-   论文中引用的开源项目：明确引用并依赖以下开源项目/工具：MusicGen模型（Copet et al., 2024）， Essentia音频分析库（Bogdanov et al., 2013）， CLAP模型（Wu et al., 2023）， 以及Gemini API。数据集引用了MusicSet（Wei et al., 2024b）， MTG-Jamendo， MusicCaps， MusicBench。

📌 **核心摘要**

这篇论文旨在解决大型自回归音乐生成模型（如MusicGen）内部表征的可解释性问题，即模型在统计学习中隐式学到了哪些音乐概念，这些概念是否与人类理论相符。
1.  方法核心：提出一个多阶段流水线。首先，从大规模音乐数据集（MusicSet）中提取MusicGen模型多个层的残差流激活值。然后，训练稀疏自编码器（SAEs）从这些激活中重构并发现稀疏、可解释的潜在特征。最后，通过一个结合多模态大语言模型（Gemini）和预训练音频分类器（Essentia）的自动标注流水线，并利用CLAP模型进行对齐评估，对发现的特征进行命名和筛选。
2.  创新点：该方法首次将稀疏自编码器应用于音频领域的可解释性分析，扩展了其在文本和视觉领域的应用。与传统的“探针”方法（检测已知概念）不同，该流水线旨在无监督地“发现”模型编码的所有概念。
3.  主要实验结果：论文发现，大型模型（MusicGen-Large）比小型模型（MusicGen-Small）能提取出更多、更具区分性的可解释特征。后期层的特征在CLAP评估中显示出更高的可解释性（图3）。在发现的特征中，既包括“太鼓鼓声”、“巴洛克羽管键琴”等经典音乐概念（图2），也包括“电子哔哔声”、“单音持续”等缺乏明确理论定义的涌现规律。在引导生成实验中，约15%-35%的测试特征可以成功引导生成内容朝向目标概念（表2），人类听测也证实引导效果可被清晰感知。
4.  实际意义：该流水线为理解神经网络如何“理解”音乐提供了一个实证工具，可能揭示传统分析方法遗漏的组织原则，并为可控音乐生成提供新思路。
5.  主要局限性：分析仅基于无条件音乐，未处理文本条件对表征的影响。自动标注依赖CLAP分数作为代理指标，可能不完全反映人类判断。此外，论文未开源代码和模型权重，限制了结果的直接复现与验证。

---

