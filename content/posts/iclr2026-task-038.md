---
title: "ICLR 2026 - 音乐生成 论文列表"
date: 2026-05-04
draft: false
tags: ["音乐生成"]
categories: [iclr-2026]
description: "共 8 篇 ICLR 2026 音乐生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音乐生成

共 **8** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Generative Adversarial Post-Training Mitigates Reward Hackin](/audio-paper-digest-blog/posts/2026-05-04-generative-adversarial-post-training-mitigates) | 9.0分 | 前25% |
| 🥈 | [SongEcho: Towards Cover Song Generation via Instance-Adaptiv](/audio-paper-digest-blog/posts/2026-05-04-songecho-towards-cover-song-generation-via) | 9.0分 | 前10% |
| 🥉 | [Automatic Stage Lighting Control: Is it a Rule-Driven Proces](/audio-paper-digest-blog/posts/2026-05-04-automatic-stage-lighting-control-is-it-a-rule) | 8.5分 | 前25% |
| 4. | [Steering Autoregressive Music Generation with Recursive Feat](/audio-paper-digest-blog/posts/2026-05-04-steering-autoregressive-music-generation-with) | 8.3分 | 前25% |
| 5. | [Discovering and Steering Interpretable Concepts in Large Gen](/audio-paper-digest-blog/posts/2026-05-04-discovering-and-steering-interpretable-concepts) | 8.0分 | 前25% |
| 6. | [YuE: Scaling Open Foundation Models for Long-Form Music Gene](/audio-paper-digest-blog/posts/2026-05-04-yue-scaling-open-foundation-models-for-long-form) | 7.5分 | 前25% |
| 7. | [SyncTrack: Rhythmic Stability and Synchronization in Multi-T](/audio-paper-digest-blog/posts/2026-05-04-synctrack-rhythmic-stability-and-synchronization) | 7.0分 | 前25% |
| 8. | [Latent Fourier Transform](/audio-paper-digest-blog/posts/2026-05-04-latent-fourier-transform) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Generative Adversarial Post-Training Mitigates Reward Hacking in Live Human-AI Music Interaction](/audio-paper-digest-blog/posts/2026-05-04-generative-adversarial-post-training-mitigates)

🔥 **9.0/10** | 前25% | #音乐生成 | #强化学习 | #对抗训练 #实时处理

👥 **作者与机构**

- 第一作者：Yusong Wu (Mila, Quebec Artificial Intelligence Institute, Université de Montréal; Canada CIFAR AI Chair)
- 通讯作者：Natasha Jaques (University of Washington)， Cheng-Zhi Anna Huang (Massachusetts Institute of Technology)
- 作者列表：Yusong Wu (Mila, Université de Montréal), Stephen Brade (Massachusetts Institute of Technology), Aleksandra Teng Ma (Georgia Institute of Technology), Tia-Jane Fowler (University of Washington), Enning Yang (McGill University), Berker Banar (Independent Researcher), Aaron Courville (Mila, Université de Montréal; Canada CIFAR AI Chair), Natasha Jaques (University of Washington), Cheng-Zhi Anna Huang (Massachusetts Institute of Technology)

💡 **毒舌点评**

亮点在于将经典的对抗训练思想巧妙地“复活”并应用于解决大模型时代棘手的奖励黑客问题，且针对实时交互这一高难度场景设计了稳定的两阶段训练策略，效果显著。短板是方法本身（对抗奖励+自适应更新）的创新粒度不算极大，且论文中提到的与GRPO的对比实验显示，其对抗训练框架的普适性仍有进一步探索的空间。

🔗 **开源详情**

- 代码：提供代码仓库链接 `https://github.com/lukewys/realchords-pytorch`。
- 模型权重：论文中提到了发布“模型检查点”，但未在提供的文本中明确给出具体下载链接或平台。从“我们发布训练数据集、模型检查点和代码”的表述看，应已公开。
- 数据集：论文明确提及发布训练数据集。使用了Hooktheory, Nottingham, POP909, Wikifonia等公开数据集。
- Demo：提供在线音频示例链接 `https://realchords-GAPT.github.io`。
- 复现材料：在附录（§B, §C）中提供了极其详细的训练细节、超参数配置、数据集划分、奖励模型性能数据以及额外的消融实验结果。
- 论文中引用的开源项目：依赖的基础模型架构为LLaMA风格Transformer。未在提供的文本中明确引用其他特定开源工具库。

📌 **核心摘要**

1. 问题：在需要实时协调与自适应的AI音乐合奏（如旋律-和弦伴奏）任务中，使用强化学习（RL）后训练提升模型适应性时，常导致“奖励黑客”现象——模型为最大化和谐性奖励而输出单调、重复、缺乏创意的简单和弦，严重损害了交互的创造性与用户体验。
2. 方法核心：提出“生成对抗后训练”（GAPT）。在策略模型（生成和弦）进行RL训练的同时，引入一个动态更新的判别器，其目标是区分真实数据中的和弦序列与策略模型当前生成的序列。策略模型除了优化和谐性奖励，还需优化由判别器提供的“真实感”奖励（即鼓励生成的序列更像真实数据）。为稳定训练，采用两阶段自适应更新判别器的策略。
3. 新意：将生成对抗网络的对抗思想，以一种稳定、适配RL框架的方式，应用于序列生成模型的RL后训练中，作为缓解奖励黑客问题的新颖正则化手段。与传统的KL散度约束相比，对抗奖励能更有效地在学习适应性和保持输出真实性与多样性之间取得平衡。
4. 主要实验结果：在固定旋律测试、模型间协作和真人音乐家用户研究三个层级上评估。定量上，GAPT在保持高和谐度（note-in-chord ratio）的同时，显著提升了输出多样性（Vendi Score）。例如，在测试集上，GAPT的和谐度为0.497（接近基线0.484），多样性为26.645（远高于基线的20.968）。用户研究表明，音乐家认为GAPT在“适应速度”和“控制与能动性”上显著优于基线模型（p < 0.05）。
5. 实际意义：为构建更自然、更具创造力、用户体验更好的实时人机音乐交互系统提供了有效的训练方法。该方法思想可推广至其他需要RL后训练且易发生模式崩塌的序列生成任务。
6. 主要局限性：当前工作聚焦于旋律-和弦伴奏这一特定任务。方法中的判别器和奖励模型仍需针对特定任务设计和训练。虽然用户研究包含专家音乐家，但样本量有限（12人），且实验均为受控环境。

---

### 🥈 [SongEcho: Towards Cover Song Generation via Instance-Adaptive Element-wise Linear Modulation](/audio-paper-digest-blog/posts/2026-05-04-songecho-towards-cover-song-generation-via)

🔥 **9.0/10** | 前10% | #音乐生成 | #扩散模型 | #数据集

👥 **作者与机构**

- 第一作者：Sifei Li（MAIS, Institute of Automation, Chinese Academy of Sciences; School of Artificial Intelligence, University of Chinese Academy of Sciences）
- 通讯作者：Weiming Dong（MAIS, Institute of Automation, Chinese Academy of Sciences; School of Artificial Intelligence, University of Chinese Academy of Sciences）
- 作者列表：
    - Sifei Li (1,2)
    - Yang Li (1,2)
    - Zizhou Wang (2)
    - Yuxin Zhang (1,2)
    - Fuzhang Wu (3)
    - Oliver Deussen (4)
    - Tong-Yee Lee (5)
    - Weiming Dong (1,2) ∗
- 机构：
    1. MAIS, Institute of Automation, Chinese Academy of Sciences
    2. School of Artificial Intelligence, University of Chinese Academy of Sciences
    3. ISRC, Institute of Software, Chinese Academy of Sciences
    4. University of Konstanz
    5. National Cheng-Kung University

💡 **毒舌点评**

论文最大的亮点是提出了一个设计精巧且高效的IA-EiLM条件调制机制，通过让条件特征与生成模型的隐藏状态交互（IACR），巧妙地解决了静态条件注入可能导致的“特征冲突”问题，实验也充分证明了其优越性。短板在于，当前框架受限于基座模型（ACE-Step）的文本控制能力，对歌声音色的细粒度控制（如情感、嗓音特质）依然不足，且未能纳入音乐家在翻唱中会做的局部节奏、转音等创造性改编，离“像人一样重新诠释”还有距离。

🔗 **开源详情**

- 代码：是，提供GitHub仓库链接：`https://github.com/lsfhuihuiff/SongEcho_ICLR2026`
- 模型权重：论文中未明确提及是否公开训练好的模型权重，但提供了代码和数据集，因此推断可以训练得到。
- 数据集：是，公开了构建的Suno70k数据集，可通过提供的GitHub仓库链接获取。
- Demo：是，提供了在线演示页面（`https://vvanonymousvv.github.io/SongEcho_updated/`）。
- 复现材料：非常充分。论文详细说明了训练数据处理流程（Section 4）、模型实现细节（超参数、硬件、训练步数等，Section 5.1）、评估指标和协议（Section 5.2）、以及与基线的公平对比设置（Appendix C.1）。
- 论文中引用的开源项目：使用了ACE-Step作为基座模型，并依赖mir_eval库计算旋律指标，使用Whisper进行歌词转录，使用Qwen2-audio生成标签，使用SongEval进行美学评估和部分数据筛选。

📌 **核心摘要**

1.  问题：现有方法在实现精准的“翻唱歌曲生成”（即在保留原歌人声旋律轮廓的同时，根据文本提示生成新的歌声和伴奏）方面存在不足，主要挑战在于如何实现精确的时间对齐旋律控制，并让条件信息与生成模型协调工作。
2.  方法核心：提出了SongEcho框架，其核心是IA-EiLM模块，包含两部分：（1）EiLM（Element-wise Linear Modulation）：将FiLM扩展为元素级别的调制，无需额外学习时间对齐即可实现精确的逐时序旋律注入。（2）IACR（Instance-Adaptive Condition Refinement）：通过门控机制让旋律条件特征与生成模型的隐藏状态交互，动态调整条件以适应当前生成实例。
3.  创新点：相比已有使用交叉注意力（间接、计算冗余）或元素加法（调制不灵活）的方法，IA-EiLM同时改进了条件注入机制（EiLM）和条件表示（IACR），实现了更精准、更和谐的旋律控制。此外，构建了高质量的大规模AI歌曲数据集Suno70k。
4.  主要实验结果：在Suno70k和SongEval数据集上，SongEcho在旋律控制指标（RPA, RCA, OA）、音频质量指标（FD, KL）和人类偏好（MOS）上均显著优于现有最优方法（SA ControlNet, MuseControlLite）。关键数据见下表。
5.  实际意义：为音乐创作和文化再创作提供了一种高效、可控的AI工具，能帮助创作者快速生成不同风格的翻唱作品。
6.  主要局限性：无法实现对歌声音色的细粒度控制（如性别之外的音色特征）；未建模音乐家在翻唱时进行的局部创造性改编（如颤音、时值变化）。

实验结果对比表（主结果，数据来自Suno70k测试集）：

| 方法 | RPA↑ | RCA↑ | OA↑ | CLAP↑ | FD↓ | KL↓ | PER↓ | 可训练参数 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ACE-Step (基座模型) | - | - | - | 0.2930 | 73.53 | 0.2670 | 0.4168 | - |
| ACE-Step+SA ControlNet | 0.6209 | 0.6440 | 0.6858 | 0.2875 | 105.95 | 0.2019 | 0.3714 | 1.6B |
| ACE-Step+SA ControlNet+LoRA | 0.6214 | 0.6431 | 0.6833 | 0.2892 | 99.19 | 0.1850 | 0.3734 | 331M |
| ACE-Step+MuseControlLite | 0.5205 | 0.5346 | 0.5940 | 0.2977 | 72.04 | 0.2151 | 0.4194 | 189M |
| SongEcho (Ours) | 0.7080 | 0.7339 | 0.6952 | 0.3243 | 42.06 | 0.1123 | 0.2951 | 49.1M |

主观评估结果（MOS，1-5分）：

| 方法 | 音乐背景组 | 无音乐背景组 |
| :--- | :--- | :--- |
| | MF↑ TA↑ AQ↑ OP↑ | MF↑ TA↑ AQ↑ OP↑ |
| ACE-Step+SA ControlNet+LoRA | 3.056 3.285 3.085 3.104 | 3.133 3.636 3.182 3.160 |
| ACE-Step+MuseControlLite | 2.630 3.026 2.581 2.622 | 2.689 3.333 2.591 2.622 |
| SongEcho (Ours) | 3.644 3.800 3.756 3.819 | 3.884 4.160 3.916 3.942 |
（MF: 旋律保真度, TA: 文本一致性, AQ: 音频质量, OP: 整体偏好）

---

### 🥉 [Automatic Stage Lighting Control: Is it a Rule-Driven Process or Generative Task?](/audio-paper-digest-blog/posts/2026-05-04-automatic-stage-lighting-control-is-it-a-rule)

🔥 **8.5/10** | 前25% | #音乐生成 | #自回归模型 | #迁移学习 #预训练

👥 **作者与机构**

- 第一作者：Zijian Zhao（香港科技大学）
- 通讯作者：Xiaoyu Zhang（香港城市大学），邮箱在摘要页脚明确标注。
- 作者列表：Zijian Zhao（香港科技大学）、Dian Jin（香港理工大学）、Zijing Zhou（香港大学）、Xiaoyu Zhang（香港城市大学）。

💡 **毒舌点评**

亮点在于首次将“自动舞台灯光控制”这个看似简单的规则映射问题，重新思考并框架化为一个生成任务，并为此设计了有效的Skip-BART模型和首个公开数据集，为小众垂直领域的智能化提供了扎实范本。短板则在于其数据集虽然开创性，但699个样本的规模对于训练一个强大的生成模型仍显单薄，且评估主要局限于摇滚/金属等特定音乐风格，模型在更广泛音乐类型上的鲁棒性有待更大数据集验证。

🔗 **开源详情**

- 代码：提供完整代码仓库链接：https://github.com/RS2002/Skip-BART。
- 模型权重：论文在摘要及正文末尾明确声明提供了“trained model parameters”。
- 数据集：论文创建并开源了首个舞台灯光数据集“RPMC-L2”，可通过上述GitHub仓库获取。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详尽的附录（A-E），包括预训练细节、完整的实验设置、数据集构建细节、可视化结果以及人类研究设计问卷和统计分析细节，复现信息极其充���。
- 引用的开源项目：主要依赖PianoBART（用于迁移学习）和OpenL3（用于音频特征提取）。

📌 **核心摘要**

1.  问题：现有自动舞台灯光控制（ASLC）大多基于将音乐分类到有限类别再映射到预设灯光模式，导致结果公式化、单调，缺乏合理性。
2.  方法核心：提出将ASLC视为生成任务而非分类问题。为此，设计了端到端模型Skip-BART，以音乐音频为输入，自回归生成灯光色相（Hue）和亮度（Value）。模型引入跳连接机制以直接增强音乐帧与灯光帧的对应关系，并利用迁移学习（从PianoBART）和掩码语言模型（MLM）预训练来应对数据稀缺问题。
3.  新在哪里：首次概念化ASLC为生成任务；首个提出端到端的深度学习解决方案；创建了首个公开的舞台灯光数据集RPMC-L2（699个样本）。
4.  主要实验结果：
    - 定量分析（Table 1）：Skip-BART在所有评估指标（RMSE, MAE, corr(|Δ|)）上均显著优于消融研究变体和基于规则的基线方法。
    - 人类评估（38名参与者）：Skip-BART的总体评分（M=4.35）与地面真值（M=4.51, p=0.724）无显著差异，但显著高于基于规则的方法（M=2.67, p<0.001）。在跨域（民谣、R&B、爵士）评估中也表现优异。
5.  实际意义：为降低专业灯光设计门槛、实现更生动、人性化的舞台灯光自动化提供了可行的技术路径，证明了生成范式在该任务上的优越性。
6.  主要局限：数据集规模中等，主要覆盖特定音乐风格；模型仅支持离线、单主灯光生成，未解决实时、多灯光控制的实际挑战。

---

### 4. [Steering Autoregressive Music Generation with Recursive Feature Machines](/audio-paper-digest-blog/posts/2026-05-04-steering-autoregressive-music-generation-with)

🔥 **8.3/10** | 前25% | #音乐生成 | #可控生成 | #自回归模型 #特征分析

👥 **作者与机构**

- 第一作者：Daniel Zhao (University of California, San Diego)
- 通讯作者：未明确说明（从作者列表顺序和通讯邮箱列表推测可能为 Taylor Berg-Kirkpatrick 或 Julian McAuley，但未明确标注）
- 作者列表：Daniel Zhao (University of California, San Diego)、Daniel Beaglehole (University of California, San Diego)、Taylor Berg-Kirkpatrick (University of California, San Diego)、Julian McAuley (University of California, San Diego)、Zachary Novack (University of California, San Diego)

#

💡 **毒舌点评**

本文优雅地将“递归特征机”从理论分析工具转变为可控音乐生成的实战利器，实现了不修改原模型的精细控制，这种“四两拨千斤”的思路令人眼前一亮。然而，其方法严重依赖于均值池化来提取特征，对于音乐中至关重要的时序信息处理过于粗糙，这或许解释了其在音阶、和弦进行等时序概念上控制力较弱的短板。

#

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/astradzhao/music-rfm
- 模型权重：未提及公开的MusicRFM探针权重或修改后的MusicGen模型。
- 数据集：使用了公开的SYNTHEORY和MUSICBENCH数据集，并说明了获取方式。评估集从SONG-DESCRIBER采样。
- Demo：提供在线演示页面：https://musicrfm.github.io/controllable-music-rfm/
- 复现材料：论文详细给出了RFM探针训练的迭代次数、数据划分、超参数搜索空间（表8）、层剪枝和随机门控的消融设置（表9, 10, 11），以及控制调度的公式（附录E），复现信息充分。
- 引用的开源项目：论文依赖 MUSICGEN (Meta)、EnCodec (Meta)、Essentia (音乐分析库)、librosa (音频处理库)、CLAP (音频-文本对齐评估) 等开源工具或模型。

📌 **核心摘要**

本文旨在解决大型自回归音乐生成模型中细粒度、可解释控制的难题。现有方法通常需要对模型进行微调或在推理时进行高成本优化，且容易引入音质损失。作者提出了 MusicRFM 框架，核心是利用递归特征机（RFM）分析冻结的 MusicGen 模型内部激活，从中发现对应于音符、和弦等音乐概念的、可解释的“概念方向”。在推理时，通过前向钩子将这些方向注入模型的残流，实时引导生成过程，无需任何训练或优化。该工作扩展了 RFM 的应用，引入了层剪枝（基于探针性能的 Top-K 或指数加权选择）、时间调度（确定性或随机门控）和多方向并行控制等机制。实验表明，在 SYNTHEORY 合成数据集和 MUSICBENCH 真实音乐数据集上，MusicRFM 能有效控制生成内容（例如将目标音符的分类准确率从 0.23 提升至 0.82），同时将文本提示的保真度（CLAP 分数）维持在基线附近（差异约 0.02）。其主要局限性在于使用均值池化会丢失时序信息，影响了对时间敏感概念的控制效果，且当前实验局限于 MusicGen 模型。

---

### 5. [Discovering and Steering Interpretable Concepts in Large Generative Music Models](/audio-paper-digest-blog/posts/2026-05-04-discovering-and-steering-interpretable-concepts)

🔥 **8.0/10** | 前25% | #音乐生成 | #自监督学习 | #可解释性 #音频大模型

👥 **作者与机构**

- 第一作者：Nikhil Singh（Dartmouth College）
- 通讯作者：未说明（论文标注为共同贡献，未明确通讯作者）
- 作者列表：Nikhil Singh（Dartmouth College）、Manuel Cherep（MIT）、Pattie Maes（MIT）

💡 **毒舌点评**

论文构建了一个逻辑严谨、工程化程度高的完整管道，首次将稀疏自编码器成功应用于音乐生成模型的可解释性研究，这是一个坚实的系统性工作。但其核心引导实验的“成功率”（15-35%）在数值上并不亮眼，且整个流程高度依赖特定模型（MusicGen）和预训练分类器，可泛化性存疑。

🔗 **开源详情**

-   代码：论文中提供了项目主页链接 `musicdiscovery.media.mit.edu`，但未明确说明是否提供代码仓库（如GitHub链接）。论文中未提及开源计划。
-   模型权重：论文使用了预训练的MusicGen模型，未提及是否公开其训练的稀疏自编码器（SAE）权重。
-   数据集：使用了公开的MusicSet数据集。
-   Demo：项目主页可能包含演示，但论文正文中未提及。
-   复现材料：论文在附录中提供了Gemini标注的详细提示词（附录H）、Essentia使用的模型标签列表（附录D）、以及人工评估的指导说明（附录F）。然而，关于SAE训练的完整超参数配置、代码实现等关键复现信息未充分提供。
-   引用的开源项目：明确依赖并引用了MusicGen（Copet et al., 2024）、Essentia（Bogdanov et al., 2013）和CLAP（Wu et al., 2023）等开源模型和工具。

📌 **核心摘要**

1.  问题：大型自回归音乐生成模型（如MusicGen）虽然能生成高质量音乐，但其内部如何表示和组织音乐概念仍然是一个黑箱。现有可解释性方法多为有监督的“探测”，无法发现模型自身隐含的、可能超越人类现有理论框架的概念。
2.  方法核心：提出一个多阶段、无监督的概念发现与引导管道。核心是使用稀疏自编码器（SAE） 从MusicGen模型的残差流中提取稀疏的、可解释的特征。随后通过激活过滤、自动化标注（结合Gemini多模态大模型和Essentia音频分类器）和CLAP对齐来大规模评估这些特征。
3.  创新点：与已有方法相比，该工作首次将SAE应用于音频领域，实现完全无监督的“概念发现”而非有监督的“概念探测”。它构建了一个可扩展的自动化评估框架，并证明了发现的特征可用于模型生成引导。
4.  主要实验结果：过滤后，从MusicGen-Large的单层中最多可发现2344个潜在特征（见表1）。自动标注的质量通过CLAP分数评估，Essentia标签的平均CLAP分数高于Gemini（见图4）。人类评估显示，Essentia标注的平均置信度（3.96/5）高于Gemini（3.19/5）。引导实验表明，在测试特征中，15%-35% 在CLAP对齐度上显示正向改善（见表2），且人类听辨实验能清晰感知引导效果（66/100选择正确）。
5.  实际意义：该工作不仅提升了音乐生成模型的透明度，更重要的是提供了一个强大的经验工具，用于发现那些可能被传统音乐理论忽视、但对模型生成至关重要的隐含音乐规律和模式，为未来的AI辅助音乐分析与创作提供了新的可能性。
6.  主要局限性：当前分析仅限于无条件音乐的激活，未探索文本条件如何影响概念表示。发现的特征概念质量高度依赖外部标注模型（Gemini/Essentia）和CLAP评估指标。引导的成功率（15-35%）表明，并非所有发现的特征都易于用于控制生成。

---

### 6. [YuE: Scaling Open Foundation Models for Long-Form Music Generation](/audio-paper-digest-blog/posts/2026-05-04-yue-scaling-open-foundation-models-for-long-form)

✅ **7.5/10** | 前25% | #音乐生成 | #自回归模型 | #大语言模型 #预训练

👥 **作者与机构**

- 第一作者：未说明（论文标题下列出了多位作者，贡献部分将Ruibin Yuan列为“Lead”，但未明确第一作者身份）
- 通讯作者：未说明（论文中提供了多位联系人的邮箱，但未明确标注通讯作者）
- 作者列表：Ruibin Yuan (HKUST, Moonshot.ai, MAP), Hanfeng Lin (HKUST, MAP), Shuyue Guo (MAP), Ge Zhang (MAP, University of Michigan), Jiahao Pan (HKUST, MAP), Yongyi Zang (Independent), Haohe Liu (University of Surrey, MAP), Yiming Liang (MAP), Wenye Ma (MBZUAI, MAP), Xingjian Du (University of Rochester, MAP), Xeron Du (MAP), Zhen Ye (HKUST), Tianyu Zheng (MAP), Zhengxuan Jiang (MAP), Yinghao Ma (MAP, Queen Mary University of London), Minghao Liu (2077AI, MAP), Zeyue Tian (HKUST, MAP), Ziya Zhou (HKUST, MAP), Liumeng Xue (HKUST, MAP), Xingwei Qu (MAP), Yizhi Li (MAP, University of Manchester), Shangda Wu (Central Conservatory of Music, MAP), Tianhao Shen (MAP), Ziyang Ma (MAP, SJTU, NTU), Jun Zhan (Fudan University), Chunhui Wang (Geely), Yatian Wang (HKUST), Xiaowei Chi (HKUST), Xinyue Zhang (HKUST), Zhenzhu Yang (HKUST), Xiangzhou Wang (MAP), Shansong Liu (Meituan), Lingrui Mei (Meituan), Peng Li (HKUST), Junjie Wang (Tsinghua University), Jianwei Yu (Moonshot.ai), Guojian Pang (MAP), Xu Li (Xiaohongshu), Zihao Wang (Zhejiang University, Carnegie Mellon University)（注：机构信息根据论文“CONTRIBUTIONS AND ACKNOWLEDGMENTS”部分整理，MAP为Multimodal Art Projection的缩写）

#

💡 **毒舌点评**

亮点在于其“系统工程”做得非常扎实：从tokenizer选择、两阶段生成框架到针对音乐特性的三大技术改进（Dual-NTP， SPC， ICL），环环相扣，最终构建了一个可扩展、效果好的开源基础模型，并对社区全面开放，这极大地推动了领域的民主化。短板则是在音频的绝对声学质量（FAD）和自动评估指标与人类感知的对齐上还有提升空间，目前更像是一个强大的“概念验证”和“研究平台”，距离生成完美无瑕的、可直接商用的音乐产品，在音色细节和动态表现上或许还需要进一步的“打磨”。

#

🔗 **开源详情**

- 代码：提供GitHub仓库链接：https://github.com/multimodal-art-projection/YuE
- 模型权重：提供HuggingFace集合链接：https://huggingface.co/collections/m-a-p/yue，包含不同规模的模型。
- 数据集：训练数据为收集的网络数据，论文未提供数据集下载链接，但明确了许可（Creative Commons）和收集方法。
- Demo：提供在线演示页面：https://map-yue.github.io/
- 复现材料：论文附录C、D、F、I详细说明了tokenizer、模型架构、评估协议和测试用prompt。训练超参数、数据配比等在Section 3.1中给出。
- 引用的开源项目：
    - LLaMA2架构（Touvron et al., 2023b）
    - X-Codec（Ye et al., 2024）作为音频tokenizer
    - Vocos（Siuzdak, 2023）用于音频上采样
    - Whisper（用于WER评估）
    - audioldm-eval（用于KL、FAD评估）
    - CLAP, CLaMP 3（用于对齐评估）
    - RMVPE（用于音高估计）
    - All-in-one（Kim & Nam, 2023）用于音乐结构分割
    - ByteCover2（Du et al., 2022）用于记忆化测试
    - PaSST（Koutini et al., 2021）作为自动评估的骨干网络

📌 **核心摘要**

该论文旨在解决长形式歌词到歌曲生成的挑战，即从歌词直接生成包含人声和伴奏的完整歌曲（最长5分钟）。其核心方法是构建名为YuE（乐）的开源基础模型家族，它基于LLaMA2架构，在数万亿token上进行训练。模型采用两阶段生成：第一阶段使用Track-Decoupled NTP（双token预测）来分别建模人声和伴奏轨道，并采用Structural Progressive Conditioning（结构化渐进条件）来处理长上下文下的歌词对齐；第二阶段使用更小的语言模型预测残差token以提升音质。此外，论文重新设计了适用于音乐的In-Context Learning，支持双向内容创作和风格克隆。与已有方法相比，新在：1）首个能生成完整歌曲的开源模型；2）通过Dual-NTP显式解耦人声/伴奏，提升了复杂音乐场景下的鲁棒性；3）SPC机制有效解决了长序列生成中歌词跟随失败的问题。主要实验结果（表1）显示，YuE在多个自动指标上具有竞争力（如CLaMP 3得分最高），人类评估（图3）表明其在整体偏好和音乐性上超越Hailuo，与Tiangong、Udio相当，并在生成时长（图5）和人声音域范围（图4）上表现突出。该工作的实际意义在于为音乐生成研究和应用提供了强大的开源基座。主要局限性在于：其音频保真度（FAD）并非最优，且自动评估指标（如CLAP）与人类感知的相关性有待提高，表明在声学细节建模上仍有改进空间。

#

---

### 7. [SyncTrack: Rhythmic Stability and Synchronization in Multi-Track Music Generation](/audio-paper-digest-blog/posts/2026-05-04-synctrack-rhythmic-stability-and-synchronization)

✅ **7.0/10** | 前25% | #音乐生成 | #扩散模型 | #模型评估 #节奏同步

👥 **作者与机构**

- 第一作者：Hongrui Wang (香港科技大学数学系)
- 通讯作者：Can Yang (香港科技大学数学系/神经系统疾病国家重点实验室)，Yang Wang (香港大学)
- 作者列表：
    - Hongrui Wang (香港科技大学数学系)
    - Fan Zhang (香港科技大学数学系)
    - Zhiyuan Yu (浙江大学CAD&CG国家重点实验室)
    - Ziya Zhou (香港科技大学交叉学科学院)
    - Xi Chen (香港科技大学交叉学科学院)
    - Can Yang (香港科技大学数学系/香港科技大学神经系统疾病国家重点实验室)
    - Yang Wang (香港大学)

#

💡 **毒舌点评**

亮点：直击现有音乐生成模型在节奏同步性上的短板，并为此提出了“共享模块+专属模块”的对症下药式架构，同时配套了三个细粒度的节奏评估指标，形成了从模型设计到评估的完整闭环，研究思路非常清晰且扎实。短板：模型本身创新（注意力机制的组合）不算颠覆性，更像是对已知组件的巧妙组合与工程化验证，且所有实验仅在单一数据集Slakh2100上进行，其泛化性有待观察。

#

🔗 **开源详情**

*   代码：论文提供了开源代码仓库链接：`https://synctrack-v1.github.io`（指向GitHub）。
*   模型权重：论文提到“音频样本以及用于模型和评估指标的源代码在我们的演示页面上”，推测模型权重可能随代码一同发布。
*   数据集：论文使用Slakh2100数据集，但未提供该数据集的直接链接或说明，需要用户自行遵循原数据集协议获取。
*   Demo：论文提供了演示页面`https://synctrack-v1.github.io`。
*   复现材料：论文在附录A.5中提供了详细的训练配置（优化器、学习率、数据预处理参数）和模型架构表（表A3），复现所需的关键信息基本具备。
*   引用的开源项目：论文依赖并提到了以下开源项目：MusicLDM（预训练权重）、madmom（用于节拍检测）、HiFi-GAN（声码器）、PyTorch等。

📌 **核心摘要**

1.  要解决的问题：现有的多轨音乐生成模型（如MSDM, MSG-LD）未能充分考虑音乐的核心属性——节奏的稳定性和多轨道间的同步性，导致生成的音乐在节奏上不协调、不同步，影响听感。
2.  方法核心：提出SyncTrack模型，采用“轨道共享模块”和“轨道专属模块”的统一架构。共享模块通过全局跨轨注意力和时间特定跨轨注意力来确保所有轨道共享稳定且同步的节奏；专属模块通过可学习的乐器先验来捕捉不同轨道的音色等独特特征。
3.  与已有方法的新颖之处：不同于将多轨音乐视为联合分布学习（如MSDM）或视频生成，SyncTrack显式地将“共同节奏信息”和“轨道特定信息”分离并针对性处理。同时，首次在多轨音乐生成评估中引入三个量化节奏一致性的新指标：轨道内节奏稳定性(IRS)、跨轨节拍同步率(CBS)、跨轨节拍离散度(CBD)。
4.  主要实验结果：在Slakh2100数据集上，SyncTrack的混合音频FAD分数(1.26)相比MSG-LD(1.31)、MSDM(6.55)等基线显著降低。单轨FAD也有大幅提升，例如钢琴轨道FAD相比MSG-LD降低45.59%。在节奏指标上，SyncTrack的CBS(0.5206)高于MSG-LD(0.3861)，CBD(mean)(0.2681)低于MSG-LD(0.3714)，表明其生成的节奏更同步。主观听感评分(3.42)也显著优于MSG-LD(1.57)。
5.  实际意义：提升了多轨音乐生成的实用性和专业性，使生成的伴奏轨道在节奏上更可靠，可用于音乐制作中的混音、编曲等下游任务。提出的评估指标为该领域提供了更全面、更符合音乐感知的评测标准。
6.  主要局限性：研究聚焦于节奏维度，未深入探讨旋律、和声的跨轨一致性。模型和指标在更长片段（>10秒）、更多样乐器组合以及条件生成场景下的表现有待验证。

#

---

### 8. [Latent Fourier Transform](/audio-paper-digest-blog/posts/2026-05-04-latent-fourier-transform)

✅ **7.0/10** | 前25% | #音乐生成 | #扩散模型 | #傅里叶变换 #生成控制

👥 **作者与机构**

- 第一作者：Mason Long Wang (MIT CSAIL)
- 通讯作者：未明确说明（通常导师为通讯作者，论文中未明确标注）
- 作者列表：Mason Long Wang (MIT CSAIL), Cheng-Zhi Anna Huang (MIT CSAIL)

💡 **毒舌点评**

论文巧妙地将经典信号处理工具（傅里叶变换）“下沉”到生成模型的潜空间，为音乐生成提供了类似传统混音“均衡器”的直观控制维度，想法优雅且实验扎实。然而，其“潜频率”的物理意义与可解释性边界尚显模糊，不同音乐风格下潜频谱的泛化性也需更广泛验证，目前更像一个精巧的专用工具而非通用范式。

🔗 **开源详情**

- 代码：提供了公开的GitHub仓库链接：`https://github.com/maswang32/latentfouriertransform/`。仓库包含训练、生成、混合、可解释性实验及所有基线的代码。
- 模型权重：论文中未明确提及公开预训练模型权重。
- 数据集：使用了公开的MTG-Jamendo和GTZAN数据集，并提供了预处理代码。论文中未提及私有数据集。
- Demo：论文未提供在线演示链接，但提及了展示定性结果的网站：`https://masonlwang.com/latentfouriertransform/`。
- 复现材料：论文的附录（A）提供了极其详尽的复现信息，包括所有编码器（MLP, U-Net, DAC）、解码器的完整架构、训练超参数、数据集细节、实验设置（条件生成、混合的频段划分）以及用户研究细节。
- 论文中引用的开源项目：依赖的主要开源工具/模型包括：DAC (Descript Audio Codec)、BigVGAN (声码器)、Librosa (音频分析)、Essentia (音高检测)、VGGish (特征提取) 以及框架如PyTorch。

📌 **核心摘要**

1. 问题：现有音乐生成模型难以精确控制生成音乐中不同“时间尺度”（如缓慢的和弦进行 vs 快速的颤音）的特征，现有控制手段（文本、音高曲线等）在语义上是混合的，无法独立指定。
2. 方法核心：提出LATENTFT框架。首先，用扩散自编码器将音频编码为潜变量时间序列；然后，对该序列进行傅里叶变换得到“潜频谱”；训练时，对潜频谱进行随机频率掩码，让解码器学习从不完整的频率信息中重建音频。推理时，用户通过掩码选择性保留参考音乐的特定“潜频率”成分，作为条件生成变体或混合两段音乐。
3. 新在何处：与已有方法（如在音频谱图或离散token上操作）相比，LATENTFT首次将傅里叶变换直接应用于深度生成模型的“潜空间”，并设计了专门的训练策略（频率掩码）使潜表示在频域可操作、可解释，从而将“时间尺度”作为一条连续、直观的控制轴暴露出来。
4. 实验结果：在MTG-Jamendo数据集的条件生成和混合任务上，LATENTFT（尤其LATENTFT-UNet变体）在条件保持度（响度相关系数0.834，节奏相似度0.966）和音频质量（FAD 0.348）上均显著优于包括Guidance、ILVR、DAC、RAVE在内的多个基线。用户研究也证实了其在音频质量和融合效果上的优势。消融实验（表9，表10）表明，频率掩码、频率相关掩码和对数频率缩放等设计均对性能有显著贡献。
5. 实际意义：为音乐创作者和制作人提供了一种新的、基于潜频率的交互式创作工具，可以像使用均衡器一样，精细地从参考素材中提取或融合特定节奏、和声或织体模式，促进了更可解释、更可控的生成式音乐AI发展。
6. 主要局限性：1) “潜频率”与具体音乐元素的对应关系并非绝对，可解释性分析（图5）显示音乐属性分布有重叠；2) 框架目前主要针对固定时长的音乐片段，未讨论实时交互；3) 混合任务中存在条件保持与音频质量之间的权衡。

---

