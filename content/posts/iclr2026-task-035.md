---
title: "ICLR 2026 - 音乐生成 论文列表"
date: 2026-05-03
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
| 🥇 | [YuE: Scaling Open Foundation Models for Long-Form Music Gene](/audio-paper-digest-blog/posts/2026-05-03-yue-scaling-open-foundation-models-for-long-form) | 9.5分 | 前10% |
| 🥈 | [SyncTrack: Rhythmic Stability and Synchronization in Multi-T](/audio-paper-digest-blog/posts/2026-05-03-synctrack-rhythmic-stability-and-synchronization) | 8.5分 | 前25% |
| 🥉 | [Generative Adversarial Post-Training Mitigates Reward Hackin](/audio-paper-digest-blog/posts/2026-05-03-generative-adversarial-post-training-mitigates) | 8.0分 | 前25% |
| 4. | [Automatic Stage Lighting Control: Is it a Rule-Driven Proces](/audio-paper-digest-blog/posts/2026-05-03-automatic-stage-lighting-control-is-it-a-rule) | 8.0分 | 前25% |
| 5. | [Discovering and Steering Interpretable Concepts in Large Gen](/audio-paper-digest-blog/posts/2026-05-03-discovering-and-steering-interpretable-concepts) | 8.0分 | 前25% |
| 6. | [Steering Autoregressive Music Generation with Recursive Feat](/audio-paper-digest-blog/posts/2026-05-03-steering-autoregressive-music-generation-with) | 7.5分 | 前25% |
| 7. | [SongEcho: Towards Cover Song Generation via Instance-Adaptiv](/audio-paper-digest-blog/posts/2026-05-03-songecho-towards-cover-song-generation-via) | 7.5分 | 前25% |
| 8. | [Latent Fourier Transform](/audio-paper-digest-blog/posts/2026-05-03-latent-fourier-transform) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [YuE: Scaling Open Foundation Models for Long-Form Music Generation](/audio-paper-digest-blog/posts/2026-05-03-yue-scaling-open-foundation-models-for-long-form)

🔥 **9.5/10** | 前10% | #音乐生成 | #自回归模型 | #音频大模型 #歌唱语音合成

👥 **作者与机构**

- 第一作者：Ruibin Yuan（Multimodal Art Projection, 香港科技大学）
- 通讯作者：论文中提供了多位联系人邮箱（Jiaheng Liu, Jian Yang, Wenhao Huang, Wei Xue, Xu Tan, Yike Guo），但未明确指定一位通讯作者，通常视为共同通讯。
- 作者列表：论文作者众多（超过70位），主要来自 Multimodal Art Projection (MAP) 和 香港科技大学（HKUST），其他机构包括 Moonshot.ai、University of Surrey、Queen Mary University of London、University of Manchester、Central Conservatory of Music、Fudan University、Carnegie Mellon University 等。详细列表见论文“CONTRIBUTIONS AND ACKNOWLEDGMENTS”部分。

💡 **毒舌点评**

亮点：作为首个开源的、能生成长达5分钟完整歌曲（歌词到歌曲）的基础模型，其性能在多项主观评测中已接近甚至匹敌Sunu、Udio等顶尖闭源商业系统，为开源社区和学术研究树立了新的标杆。短板：论文承认模型在人声和伴奏的声学质量（如高保真度、细节丰富度）上仍落后于顶级商业模型，这主要受限于当前音频分词器（X-Codec）的表征能力，是模型迈向更高质量的关键瓶颈。

🔗 **开源详情**

- 代码：提供GitHub仓库链接：`https://github.com/multimodal-art-projection/YuE`
- 模型权重：提供预训练模型权重至HuggingFace：`https://huggingface.co/collections/m-a-p/yue`
- 数据集：论文使用了从网络挖掘的知识共享许可数据。未提及是否会公开发布训练数据集。
- Demo：提供在线演示页面：`https://map-yue.github.io/`
- 复现材料：论文详细说明了预训练设置（数据混合、模型规模、token预算、学习率等）、评估协议、推理策略。附录中提供了分词器、模型架构的更多细节。提供了15个GPT生成的英文评估提示。
- 论文中引用的开源项目：X-Codec (音频分词器)、LLaMA2 (模型架构)、Vocos (上采样器)、Whisper (WER评估)、RMVPE (音高估计)、AudioLDM eval (自动评估)、CLAP / CLaMP 3 (语义对齐评估)、ByteCover2 (记忆化测试)。

📌 **核心摘要**

这篇论文旨在解决“从歌词生成完整歌曲”这一高难度音乐生成任务，特别是针对长时序（分钟级）、多轨（人声与伴奏）、歌词对齐和音乐结构连贯性等挑战。其核心是提出了一个名为“YuE”的开源基础模型家族。该方法的核心创新包括：1）双轨解耦的下一个词预测，将人声和伴奏视为独立token流联合建模，解决了传统单轨模型在复杂伴奏下歌词清晰度下降的问题；2）结构渐进条件化，利用歌曲固有的分段结构（如主歌、副歌），将长文本条件分段插入音频token序列中，有效解决了标准文本前缀条件在长序列下失效的问题；3）重新设计的音乐上下文学习，支持基于短参考音频的风格克隆、双向生成和可控生成。主要实验结果表明，YuE在人类评估中（图3）与Tiangong、Udio等商业系统表现相当，在音乐性、歌词跟随能力、人声灵活性（图4）和生成时长（图5）上具有竞争力。其实际意义在于打破了商业系统的技术壁垒，提供了一个强大、可扩展且完全开源的音乐生成研究平台。主要局限性在于声学质量有待提升，且训练数据规模和质量仍是限制因素。

| 模型 | KL ↓ | FAD ↓ | CE ↑ | CU ↑ | PC ↑ | PQ ↑ | CLAP ↑ | CLaMP 3 ↑ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Hailuo | 0.756 | 2.080 | 7.350 | 7.737 | 6.793 | 8.132 | 0.265 | 0.106 |
| SunoV4 | 0.620 | 1.544 | 7.474 | 7.813 | 6.601 | 8.120 | 0.265 | 0.160 |
| Tiangong | 0.708 | 2.547 | 7.421 | 7.766 | 6.060 | 8.220 | 0.244 | 0.114 |
| Udio | 0.503 | 1.222 | 7.112 | 7.520 | 6.626 | 7.803 | 0.310 | 0.156 |
| YuE | 0.372 | 1.624 | 7.115 | 7.543 | 6.280 | 7.894 | 0.118 | 0.240 |

表1：YuE与商业系统在自动评估指标上的对比。YuE在分布匹配指标KL和FAD上表现最佳，在内容质量和语义对齐（CLaMP 3）上也具有竞争力。

---

### 🥈 [SyncTrack: Rhythmic Stability and Synchronization in Multi-Track Music Generation](/audio-paper-digest-blog/posts/2026-05-03-synctrack-rhythmic-stability-and-synchronization)

🔥 **8.5/10** | 前25% | #音乐生成 | #扩散模型 | #评估指标 #注意力机制

👥 **作者与机构**

- 第一作者：Hongrui Wang（香港科技大学数学系）
- 通讯作者：Can Yang（香港科技大学数学系、神经系统疾病国家重点实验室），Yang Wang（香港大学）
- 作者列表：Hongrui Wang（香港科技大学数学系），Fan Zhang（香港科技大学数学系），Zhiyuan Yu（浙江大学CAD&CG国家重点实验室），Ziya Zhou（香港科技大学交叉学科研究院），Xi Chen（香港科技大学交叉学科研究院），Can Yang（香港科技大学数学系、神经系统疾病国家重点实验室），Yang Wang（香港大学）

#

💡 **毒舌点评**

这篇论文精准地击中了多轨音乐生成中“节奏同步”这一被忽视但至关重要的痛点，其提出的模块化架构设计与三个针对性评估指标（IRS/CBS/CBD）具有扎实的工程思维和明确的实用价值。然而，当前实验仅在中等规模数据集（Slakh2100）的四轨设置上验证，模型在更复杂的真实音乐风格、可变轨数以及实时交互生成等场景下的泛化能力与实用性仍有待更广泛的检验。

#

🔗 **开源详情**

- 代码：论文提供了项目主页链接 `https://synctrack-v1.github.io`，并声明“Audio samples, alongside with the source code for both the model and evaluation metrics, are available on our demo page.”，但未直接给出代码仓库URL。
- 模型权重：论文中未提及是否公开预训练权重。
- 数据集：使用的是公开数据集 Slakh2100，并指明了其常用子集划分。
- Demo：提供了项目主页，推测可能包含在线演示。
- 复现材料：在附录A.5中提供了非常详细的训练配置（优化器、学习率、batch size、迭代次数、硬件、训练时长）和模型架构细节（参数量、网络层结构）。在附录A.1和A.2中详细说明了评估指标（beat tracking）的实现工具（madmom）及超参数敏感性分析。复现信息非常充分。
- 引用的开源项目：论文主要依赖以下开源工具/模型：
    - MusicLDM (Chen et al., 2024)：用于模型初始化。
    - madmom (Böck et al., 2016)：用于节拍检测（RNNDownBeatProcessor, DBNDownBeatTrackingProcessor），是实现IRS/CBS/CBD指标的关键。
    - HiFi-GAN (Kong et al., 2020a)：作为声码器将梅尔频谱图转换为波形。
    - Latent Diffusion Model (LDM) / DDPM：基础框架。
- 论文中未提及开源计划的具体时间表和模型权重获取方式。

📌 **核心摘要**

1.  问题：现有的多轨音乐生成模型常将任务视为多变量时间序列或视频生成，过度关注轨道间的差异性，而忽略了音乐本质要求的节奏稳定性（单轨内拍子稳定）与同步性（多轨间拍子对齐），导致生成音乐在听感上不协调。
2.  方法核心：提出SyncTrack模型，基于潜在扩散模型（LDM）框架，设计了一种新的统一架构，显式地分离了轨道共享模块（用于学习跨轨共同节奏）和轨道特定模块（用于建模各轨独特音色）。
3.  创新点：a) 在轨道共享模块中设计了全局跨轨注意力（确保整体节奏框架一致）与时间特定跨轨注意力（确保细微的拍点对齐）两种机制。b) 在轨道特定模块中引入可学习的乐器先验来表征轨道特性。c) 创新性地提出了三个用于评估多轨音乐节奏质量的客观指标：IRS（单轨节奏稳定性）、CBS（跨轨拍子同步比例）、CBD（跨轨拍子对齐误差）。
4.  实验结果：在Slakh2100数据集上的实验表明，SyncTrack在音频质量（FAD）和节奏一致性（IRS， CBS， CBD）上均显著优于MSDM、MSG-LD等基线模型。例如，混合音轨FAD相比最强基线MSG-LD降低3.82%（从1.31降至1.26），主观平均评分从MSG-LD的1.57分提升至3.42分（总分5分）。关键结果如下：
    | 方法         | 混合音轨FAD↓ | Bass FAD↓ | Drum FAD↓ | Guitar FAD↓ | Piano FAD↓ |
    |--------------|---------------|-----------|-----------|-------------|------------|
    | MSG-LD       | 1.31          | 1.050     | 0.980     | 1.830       | 2.040      |
    | SyncTrack | 1.26      | 0.710 | 0.710 | 1.450   | 1.110  |
    | SyncTrack | CBS↑: 0.5206 | CBD(mean)↓: 0.2681 | IRS(Drum)↓: 0.011 | | |
    | Ground Truth | CBS↑: 0.5740  | CBD(mean)↓: 0.2412 | IRS(Drum)↓: 0.005 | | |
5.  实际意义：为专业音乐制作提供了更高质量的多轨素材，其生成的轨道在节奏上更同步、更稳定，便于后续的混音和编辑。所提出的评估指标为多轨音乐生成研究提供了更全面、客观的评价标准。
6.  主要局限性：a) 模型当前生成长度固定（10.24秒），对长形式音乐生成能力未验证。b) 实验数据集（Slakh2100）是合成MIDI转录的，可能无法完全代表真实录制音乐的复杂性和动态。c) 模型架构相对专用，向更广泛的条件生成（如文本控制风格、情绪）扩展的灵活性有待展示。

#

---

### 🥉 [Generative Adversarial Post-Training Mitigates Reward Hacking in Live Human-AI Music Interaction](/audio-paper-digest-blog/posts/2026-05-03-generative-adversarial-post-training-mitigates)

🔥 **8.0/10** | 前25% | #音乐生成 | #强化学习 | #对抗训练 #生成模型

👥 **作者与机构**

- 第一作者：Yusong Wu（Mila, Quebec AI Institute, Université de Montréal）
- 通讯作者：Cheng-Zhi Anna Huang（Massachusetts Institute of Technology）
- 作者列表：Yusong Wu (Mila, Université de Montréal), Stephen Brade (MIT), Aleksandra Teng Ma (Georgia Institute of Technology), Tia-Jane Fowler (University of Washington), Enning Yang (McGill University), Berker Banar (Independent Researcher), Aaron Courville (Mila, Université de Montréal), Natasha Jaques (University of Washington), Cheng-Zhi Anna Huang (MIT)

#

💡 **毒舌点评**

亮点：巧妙地将对抗训练思想引入到强化学习后训练的奖励函数设计中，以解决音乐生成中“为高分而重复”的奖励黑客问题，方法直观有效。短板：虽然提出了一个优雅的解决方案，但任务（实时旋律-和弦伴奏）本身非常垂直，其影响力主要局限于音乐AI社区，对更广泛的生成模型领域的贡献是启示性的而非根本性的。

#

🔗 **开源详情**

- 代码：提供了代码仓库链接：https://github.com/lukewys/realchords-pytorch
- 模型权重：论文中提及提供了“model checkpoints”，但未明确公开地址，应随代码仓库发布。
- 数据集：使用了公开数据集（Hooktheory, Nottingham, POP909, Wikifonia），并提供了获取链接。
- Demo：提供了音频示例页面：https://realchords-GAPT.github.io。实时交互系统细节有描述，但未提供在线Demo链接。
- 复现材料：附录详细描述了模型架构、训练细节、超参数、奖励模型性能，足以支持复现。

📌 **核心摘要**

本文研究的是实时人机音乐交互中的旋律-和弦伴奏任务。问题核心是：通过强化学习（RL）后训练来提升模型的实时适应性时，模型会“奖励黑客”——为了最大化基于和声连贯性的奖励，而坍缩到重复、简单、缺乏多样性的和弦进行上，损害了创造性交互体验。核心方法是提出“生成对抗后训练（GAPT）”，在RL优化过程中，联合训练一个判别器，用于区分策略生成的轨迹与真实数据轨迹，并将判别器的“真实度”评估作为额外的对抗奖励信号，与原有的连贯性奖励共同作用，防止策略坍缩。新在将GAN的对抗思想应用于RL后训练的奖励正则化，而非直接生成样本。主要实验表明：在固定旋律模拟、与学习到的旋律智能体交互、以及与12位专家音乐家的实时用户研究中，GAPT方法在保持甚至提高和声连贯性的同时，显著恢复了输出多样性。例如，在测试集上，GAPT的和谐度（note-in-chord ratio）为0.497，多样性（Vendi Score）为26.65，而基线RL方法（ReaLchords）分别为0.484和20.97。用户研究也显示GAPT在适应速度和用户控制感上显著优于基线。实际意义是为需要实时、自适应、多样化响应的生成式AI交互（如对话、协作创作）提供了一种缓解奖励黑客的简单有效方法。主要局限是方法针对序列生成的RL后训练，对于非序列或非实时生成任务的普适性有待验证。

#

---

### 4. [Automatic Stage Lighting Control: Is it a Rule-Driven Process or Generative Task?](/audio-paper-digest-blog/posts/2026-05-03-automatic-stage-lighting-control-is-it-a-rule)

🔥 **8.0/10** | 前25% | #音乐生成 | #迁移学习 | #预训练 #自回归模型

👥 **作者与机构**

- 第一作者：Zijian Zhao (香港科技大学)
- 通讯作者：Xiaoyu Zhang (香港城市大学)
- 作者列表：Zijian Zhao (香港科技大学)、Dian Jin (香港理工大学)、Zijing Zhou (香港大学)、Xiaoyu Zhang (香港城市大学)

💡 **毒舌点评**

这篇论文的亮点在于其开创性的问题定义，它勇敢地挑战了该领域长期依赖规则和分类的传统范式，将舞台灯光控制重新定义为一种艺术生成任务，并为此构建了第一个公开数据集，为后续研究铺平了道路。然而，其主要短板在于验证的充分性与泛化性，尽管人工评估显示了其与人类工程师的接近，但评估样本量（38人）和用于评估的音乐片段（仅3首）相对有限，对于证明一个生成模型在真实、复杂多变的现场演出场景中的鲁棒性和普适性而言，证据链条稍显薄弱。

🔗 **开源详情**

*   代码：提供代码仓库链接 `https://github.com/RS2002/Skip-BART`。
*   模型权重：论文中明确声明提供“trained model parameters”，并可在上述GitHub仓库获取。
*   数据集：公开了自建数据集RPMC-L2，提供“processed dataset”（约40GB的HDF5特征文件），可通过同一GitHub仓库获取。
*   Demo：论文中未提及在线演示。
*   复现材料：论文附录（A、B、C、E）详细说明了预训练细节、实验设置、数据集构建（音频/灯光处理）、模型超参数配置以及人工评估问卷，复现信息极为完整。
*   引用的开源项目：主要依赖OpenL3（用于音频嵌入）、PianoBART（作为迁移学习骨干）、LoRA（用于高效微调）、PyTorch（深度学习框架）以及相关的判别器架构（MidiBERT序列分类器）。

📌 **核心摘要**

本文旨在解决现有自动舞台灯光控制（ASLC）方法因基于有限分类和预定义规则而导致的公式化、单调问题。核心方法是提出了Skip-BART，一个基于BART的端到端深度学习模型，首次将ASLC定义为生成任务而非分类问题。该模型直接以音乐音频序列为输入，自回归地生成对应的灯光色调和强度序列。与已有规则驱动方法相比，其创新点在于跳出了“分类-映射”的框架，实现了“输入-输出”的端到端学习。实验结果显示，Skip-BART在定量指标（如RMSE、MAE）上显著优于规则基线，并在人工评估中获得了与专业灯光工程师无统计显著差异（p=0.72）的评分（整体得分：GT 4.51， Skip-BART 4.35， 规则方法 2.67）。该工作的实际意义在于为低成本、智能化的舞台灯光设计提供了新的技术路径，有望降低行业门槛。主要局限性是模型在长时程节奏稳定性和局部波动控制上仍有提升空间，且其泛化能力在更多样的音乐风格和真实场景中仍有待更大规模验证。

---

### 5. [Discovering and Steering Interpretable Concepts in Large Generative Music Models](/audio-paper-digest-blog/posts/2026-05-03-discovering-and-steering-interpretable-concepts)

🔥 **8.0/10** | 前25% | #音乐生成 | #稀疏自编码器 | #音频大模型 #模型评估

👥 **作者与机构**

- 第一作者：Nikhil Singh（Dartmouth College）、Manuel Cherep（MIT）（共同第一作者）
- 通讯作者：未说明
- 作者列表：Nikhil Singh（Dartmouth College）、Manuel Cherep（MIT）、Pattie Maes（MIT Media Lab）

💡 **毒舌点评**

这篇论文将稀疏自编码器（SAE）成功应用于音乐生成模型（MusicGen）的可解释性分析，并建立了从特征发现、自动标注到生成引导的完整流水线，首次证明了SAE在音频领域的有效性，是一个扎实且具有启发性的工作。然而，论文主要聚焦于无条件生成表征的分析，未能深入探讨文本条件建模下概念如何对应语言指令，这对于实现“可控生成”的实际应用目标而言是一个重要的缺口。

🔗 **开源详情**

- 代码：论文中提供了项目主页 `musicdiscovery.media.mit.edu`，通常此类主页会包含或链接到代码仓库。论文中明确提到了该网站。
- 模型权重：未明确提及是否公开训练好的SAE权重或特征标注结果。
- 数据集：使用公开的MusicSet数据集（结合MTG-Jamendo, MusicCaps, MusicBench）。
- Demo：论文中未提及在线演示。
- 复现材料：提供了训练细节的描述（尽管部分超参数未给出）、SAE架构、过滤阈值、Gemini标注的提示词模板（附录H）和响应模式、人类研究指南（附录F）。附录A-D、G-J提供了大量补充实验细节和分析。
- 引用的开源项目：论文依赖并引用了以下开源项目/模型：MusicGen (Copet et al., 2024), Essentia (Bogdanov et al., 2013; Alonso-Jiménez et al., 2020), CLAP (Wu et al., 2023), Gemini API。

📌 **核心摘要**

本文旨在解决大型自回归音乐生成模型（如MusicGen）内部表征不透明的问题。核心方法是构建一个多阶段流水线，首次将稀疏自编码器（SAE）应用于提取Transformer残差流中的可解释特征，并通过自动标注和验证管道对发现的概念进行规模化评估。与以往主要针对已知概念进行探测的研究不同，该方法是无监督的，旨在发现模型自身学习到的结构。实验结果表明，该方法能够恢复诸如乐器音色、音乐风格等传统音乐概念，也能发现诸如“电子哔啵声”、“单音符纹理”等尚未被理论充分描述的规律性模式。其实际意义在于提供了一种无监督的工具，可以揭示生成模型对音乐结构的理解，从而提升模型透明度并为创造性协作提供新途径。主要局限性在于，当前工作仅分析了无条件激活，未探索文本提示如何与这些发现的特征相互作用，且部分发现的特征可解释性仍依赖主观判断。

---

### 6. [Steering Autoregressive Music Generation with Recursive Feature Machines](/audio-paper-digest-blog/posts/2026-05-03-steering-autoregressive-music-generation-with)

✅ **7.5/10** | 前25% | #音乐生成 | #激活空间干预 | #自回归模型 #可解释性

👥 **作者与机构**

- 第一作者：Daniel Zhao（University of California, San Diego）
- 通讯作者：未明确说明（根据邮箱顺序和论文惯例，可能为Taylor Berg-Kirkpatrick或Zachary Novack，但未明确标注）
- 作者列表：Daniel Zhao（University of California, San Diego）、Daniel Beaglehole（University of California, San Diego）、Taylor Berg-Kirkpatrick（University of California, San Diego）、Julian McAuley（University of California, San Diego）、Zachary Novack（University of California, San Diego）

💡 **毒舌点评**

本文巧妙地将RFM的“概念方向”探测与注入机制移植到音乐生成领域，为“不改模型参数而实现细粒度控制”这一难题提供了新颖的解法，特别是分层加权和时间调度的引入增强了实用性。然而，其控制效果强依赖于在合成数据集上训练的探针，对真实音乐中复杂的时序和和声结构控制力存疑，且多方向控制时保真度下降明显，离“任意属性皆可控”还有距离。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/astradzhao/music-rfm
- 模型权重：未提及。控制对象MusicGen-Large为已有公开模型，本文未发布新训练的模型权重。
- 数据集：探针训练数据SYNTHEORY和评估提示集SONG-DESCRIBER为外部数据集，论文未提供。论文中未提及开源新数据集。
- Demo：提供交互式演示页面：https://musicrfm.github.io/controllable-music-rfm/
- 复现材料：附录中提供了详细的RFM探针超参数搜索空间（带宽、核类型、正则化等）和消融实验设置（层选择、注入概率范围），复现细节较充分。
- 引用的开源项目：MusicGen-Large、EnCodec、SYNTHEORY数据集、SONG-DESCRIBER数据集、Essentia（和弦估计）、librosa（起始点检测）。

📌 **核心摘要**

1. 问题：当前可控音乐生成方法常需微调模型或进行推理时优化，引入伪影或计算成本高，且难以实现细粒度（如具体音符、和弦）的时变控制。
2. 方法：提出MusicRFM框架，在预训练的冻结MusicGen模型上，训练轻量级递归特征机（RFM）探针，从其隐藏状态中提取对应特定音乐概念（如音符、和弦）的可解释“概念方向”向量。在推理时，通过前向钩子将这些向量注入模型的残差流中，实时引导生成过程。
3. 创新：与已有方法相比，新在：(a) 首次将RFM应用于自回归音乐生成的激活空间干预；(b) 提出了基于探针性能的分层剪枝策略（Top-K选择、指数加权）；(c) 引入了时间调度机制（线性/指数衰减、正弦调制、随机门控）实现时变控制；(d) 支持多方向同时控制。
4. 主要结果：在SYNTHEORY合成数据集上，单方向控制可将目标音符的分类准确率从基线的0.23提升至0.82（η0=0.60），同时文本对齐分数（CLAP）仅下降约0.02。在MUSICBENCH真实数据上也验证了迁移性。人工听测表明，MusicRFM在感知控制力和音频质量上均优于无控制基线和朴素RFM控制。
5. 实际意义：为交互式音乐创作和精确音乐生成控制提供了无需微调、计算高效的新工具，且控制方向具有可解释性。
6. 主要局限性：探针训练依赖均值池化，丢弃了时序信息，限制了对强时序依赖概念（如和弦进行、时间签名）的控制效果；多方向控制会显著增加分布偏移并降低文本保真度；控制效果高度依赖于探针在特定模型（MusicGen-Large）上的性能。

---

### 7. [SongEcho: Towards Cover Song Generation via Instance-Adaptive Element-wise Linear Modulation](/audio-paper-digest-blog/posts/2026-05-03-songecho-towards-cover-song-generation-via)

✅ **7.5/10** | 前25% | #音乐生成 | #扩散模型 | #条件生成 #音频生成

👥 **作者与机构**

- 第一作者：Sifei Li（中国科学院自动化研究所 MAIS；中国科学院大学 人工智能学院）
- 通讯作者：Weiming Dong（中国科学院自动化研究所 MAIS；中国科学院大学 人工智能学院）
- 作者列表：Sifei Li（中国科学院自动化研究所 MAIS；中国科学院大学 人工智能学院）、Yang Li（中国科学院自动化研究所 MAIS；中国科学院大学 人工智能学院）、Zizhou Wang（中国科学院自动化研究所 MAIS）、Yuxin Zhang（中国科学院自动化研究所 MAIS；中国科学院大学 人工智能学院）、Fuzhang Wu（中国科学院软件研究所 ISRC）、Oliver Deussen（康斯坦茨大学）、Tong-Yee Lee（成功大学）、Weiming Dong（中国科学院自动化研究所 MAIS；中国科学院大学 人工智能学院）

#

💡 **毒舌点评**

本文在“歌曲翻唱”这一细分但有趣的任务上，构建了一个从模型（SongEcho）到数据（Suno70k）的完整技术栈，其提出的IA-EiLM方法在参数效率上相比强基线有明显优势（仅约50M参数），实验指标全面领先。不过，核心创新EiLM（FiLM的序列化扩展）和IACR（基于门控的特征融合）本身并非全新概念，更像是为特定任务量身定制的工程化组合；同时，构建的Suno70k数据集虽详实，但其来源是AI生成音乐，在一定程度上限制了模型学习真实人类音乐演绎中更复杂、微妙的表达。

#

🔗 **开源详情**

-   代码：提供代码仓库链接：https://github.com/lsfhuihuiff/SongEcho_ICLR2026。
-   模型权重：论文中提到“the code, dataset, and demos are available at...”，通常暗示模型权重也可能在仓库中提供或后续发布，但论文正文未明确说明是否公开预训练权重。（论文未明确提及）
-   数据集：数据集Suno70k已公开，并提供了获取方式（来自HuggingFace的Suno数据集链接及后续处理流程）。
-   Demo：提供在线演示页面：https://vvanonymousvv.github.io/SongEcho_updated/ 和 https://github.com/lsfhuihuiff/SongEcho_ICLR2026 中的demos。
-   复现材料：提供了详尽的复现信息，包括：数据集构建流程（第4节）、训练硬件与超参数（第5.1节）、评估指标与协议（第5.2节）、基线模型的具体复现设置（附录C.1）。
-   引用的开源项目：
    -   基座模型：ACE-Step
    -   音频度量库：mir_eval, FDopenl3, KLpasst, CLAP
    -   工具：RVMPE（音高提取）、Qwen2-audio（标签生成）、Whisper（歌词转录）、SongEval（美学评估）
    -   数据集来源：Suno.ai公开数据集

📌 **核心摘要**

1.  问题：现有文本到音乐生成模型缺乏对人声旋律的精确、时序控制能力，无法满足“歌曲翻唱”这一需要保持原曲旋律核心同时进行风格重释的任务需求。
2.  方法核心：提出SongEcho框架，其核心是“实例自适应逐元素线性调制”（IA-EiLM）。该模块包含两部分：逐元素线性调制（EiLM），将特征线性调制（FiLM）扩展为匹配目标维度的逐元素操作，以实现精确的时序对齐旋律注入；实例自适应条件精炼（IACR），通过门控机制让旋律条件特征与生成模型的隐藏状态交互，从而动态适应当前生成实例，避免静态条件导致的特征冲突。
3.  创新点：相比基于交叉注意力（间接且冗余）或元素相加（调制灵活性不足）的已有方法，IA-EiLM实现了更直接、灵活且自适应的条件注入。同时，构建了一个高质量、带丰富标注的AI歌曲数据集Suno70k，缓解了训练数据稀缺问题。
4.  实验结果：在Suno70k和SongEval数据集上，SongEcho在旋律保真度（RPA: 0.7080 vs 最强基线0.6214）、文本一致性（CLAP: 0.3243 vs 0.2977）和音频质量（FD↓: 42.06 vs 99.19）等所有指标上均显著优于对比的SOTA方法（SA ControlNet, MuseControlLite），且仅需约50M可训练参数（约为基线的3%-26%）。主观听感评估（MOS）也全面领先。
5.  实际意义：为AI辅助音乐创作提供了新的工具范式，能够生成保持原旋律的新版本歌曲，有助于音乐文化传承与创新。其提出的轻量级条件控制模块（IA-EiLM）在理论上可推广至其他条件生成任务。
6.  局限性：受限于基座模型（ACE-Step）的文本控制能力，无法进行精细的音色控制（仅支持性别调整）；生成的歌曲缺乏人类演唱的微表情和技巧细节；数据集基于AI生成音乐，与真实人类翻唱的数据分布可能存在差异。

#

---

### 8. [Latent Fourier Transform](/audio-paper-digest-blog/posts/2026-05-03-latent-fourier-transform)

✅ **7.5/10** | 前25% | #音乐生成 | #扩散模型 | #频域分析 #控制生成

👥 **作者与机构**

- 第一作者：Mason Long Wang（MIT CSAIL）
- 通讯作者：未说明
- 作者列表：Mason Long Wang（MIT CSAIL）， Cheng-Zhi Anna Huang（MIT CSAIL）

#

💡 **毒舌点评**

这篇论文巧妙地将传统的“均衡器”概念从音频波形域提升到了生成模型的潜在表示空间，提供了一种直观的、基于赫兹的音乐结构控制新维度，这个类比很精彩且实用。然而，其核心创新（在潜在序列上做DFT）相对直接，且所有实验均局限于音乐生成这一特定场景，对于更广泛的音频或序列建模任务的普适性和影响力尚未验证，略显“小而美”。

#

📌 **核心摘要**

1.  问题：现有的音乐生成模型在控制音乐结构方面存在局限。传统的基于离散令牌（如RVQ）的方法难以独立控制不同时间尺度的特征（如快节奏的装饰音与慢速的和弦进行），而基于文本或特定属性（音高、响度）的控制也无法直接暴露“时间尺度”这一轴。
2.  方法核心：提出Latent Fourier Transform (LATENTFT)，一个结合扩散自编码器和潜在空间傅里叶变换的框架。其核心是在训练时，对编码器输出的潜在时间序列进行离散傅里叶变换(DFT)，并在频域进行随机掩蔽，然后让解码器（扩散模型）从掩蔽后的潜在序列重建原始音频。这迫使模型学习到在潜在频率上可操作且可分离的表示。
3.  与已有方法相比新在哪里：首次将频域操作直接应用于生成模型的潜在表示序列，而非音频波形或频谱图。这创造了“潜在频谱”这一新概念，允许用户在潜在频率（Hz）上进行连续、正交的控制，类似于音频工程师用均衡器操作可听频率。训练时的频率掩蔽策略是关键，使潜在表示在推理时能够被有效地在频域操纵。
4.  主要实验结果：在条件生成和混合任务上，LATENTFT（尤其是MLP和U-Net编码器版本）在多项指标上优于基线方法（如Masked Token Model, Guidance, ILVR, DAC等）。
    *   条件生成：LATENTFT-MLP在响度相关性(0.815)、节奏相似度(0.963)上显著领先，FAD(0.337)也最优。
    *   混合任务：LATENTFT在音频质量（FAD 1.357-1.387）和融合能力上表现最佳。
    *   用户研究：在29名音乐人参与的盲听测试中，LATENTFT在“音频质量”和“融合能力”两项指标上均获得最多胜出次数，且统计显著性优于大部分基线。
5.  实际意义：为生成式音乐模型提供了一种新的、细粒度的交互控制方式，让用户可以像操作混音台一样，在潜在空间中按频率（即时间尺度）保留、混合或突出音乐结构（如节奏、和弦、��格），推动更可解释、更可控的音乐创作工具的发展。
6.  主要局限性：控制维度仅限于时间尺度，无法直接指定语义属性（如“爵士风”）。潜在频率与具体音乐属性的对应关系虽被探讨（图5），但仍需用户通过试错来映射。此外，方法的有效性高度依赖于预训练的扩散自编码器质量，且在音乐生成之外的其他序列任务（如语音、视频）中的潜力未被探索。

---

