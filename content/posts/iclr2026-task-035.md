---
title: "ICLR 2026 - 音乐生成 论文列表"
date: 2026-05-03
draft: false
tags: ["音乐生成"]
categories: [iclr-2026]
description: "共 9 篇 ICLR 2026 音乐生成 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音乐生成

共 **9** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [Generative Adversarial Post-Training Mitigates Reward Hackin](/audio-paper-digest-blog/posts/2026-05-03-generative-adversarial-post-training-mitigates) | 8.5分 | 前25% |
| 🥈 | [Latent Fourier Transform](/audio-paper-digest-blog/posts/2026-05-03-latent-fourier-transform) | 8.5分 | 前25% |
| 🥉 | [Bridging Piano Transcription and Rendering via Disentangled ](/audio-paper-digest-blog/posts/2026-05-03-bridging-piano-transcription-and-rendering-via) | 8.0分 | 前25% |
| 4. | [SongEcho: Towards Cover Song Generation via Instance-Adaptiv](/audio-paper-digest-blog/posts/2026-05-03-songecho-towards-cover-song-generation-via) | 8.0分 | 前25% |
| 5. | [Automatic Stage Lighting Control: Is it a Rule-Driven Proces](/audio-paper-digest-blog/posts/2026-05-03-automatic-stage-lighting-control-is-it-a-rule) | 8.0分 | 前25% |
| 6. | [YuE: Scaling Open Foundation Models for Long-Form Music Gene](/audio-paper-digest-blog/posts/2026-05-03-yue-scaling-open-foundation-models-for-long-form) | 8.0分 | 前25% |
| 7. | [SyncTrack: Rhythmic Stability and Synchronization in Multi-T](/audio-paper-digest-blog/posts/2026-05-03-synctrack-rhythmic-stability-and-synchronization) | 7.5分 | 前25% |
| 8. | [Steering Autoregressive Music Generation with Recursive Feat](/audio-paper-digest-blog/posts/2026-05-03-steering-autoregressive-music-generation-with) | 7.5分 | 前25% |
| 9. | [Discovering and Steering Interpretable Concepts in Large Gen](/audio-paper-digest-blog/posts/2026-05-03-discovering-and-steering-interpretable-concepts) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Generative Adversarial Post-Training Mitigates Reward Hacking in Live Human-AI Music Interaction](/audio-paper-digest-blog/posts/2026-05-03-generative-adversarial-post-training-mitigates)

🔥 **8.5/10** | 前25% | #音乐生成 | #强化学习 | #生成模型 #实时处理

👥 **作者与机构**

- 第一作者：Yusong Wu（Mila, Quebec Artificial Intelligence Institute, Université de Montréal）
- 通讯作者：论文中声明Natasha Jaques与Cheng-Zhi Anna Huang为等贡献资深作者。
- 作者列表：
    - Yusong Wu（Mila, Université de Montr��al）
    - Stephen Brade（Massachusetts Institute of Technology）
    - Aleksandra Teng Ma（Georgia Institute of Technology）
    - Tia-Jane Fowler（University of Washington）
    - Enning Yang（McGill University）
    - Berker Banar（独立研究者）
    - Aaron Courville（Mila, Université de Montréal, Canada CIFAR AI Chair）
    - Natasha Jaques（University of Washington）
    - Cheng-Zhi Anna Huang（Massachusetts Institute of Technology）

💡 **毒舌点评**

这篇论文精准地“诊断”了强化学习后训练在音乐交互任务中的常见“病症”（多样性崩溃），并开出了一剂融合了对抗训练思想的“药方”（GAPT），在从仿真到真人演奏的全流程实验中均验证了其疗效，堪称扎实的“临床研究”。遗憾的是，其方法更像是将对抗模仿学习（GAIL）思想进行了一次成功的工程化迁移，针对的音乐伴奏任务挑战性和普适性相对有限，离成为通用序列生成模型的“标准疗法”还有距离。

🔗 **开源详情**

- 代码：提供了完整的GitHub仓库链接：https://github.com/lukewys/realchords-pytorch。
- 模型权重：论文中提到开源了模型检查点（“We release training datasets, model checkpoints”）。
- 数据集：使用了多个公开数据集（Hooktheory, Nottingham, POP909, Wikifonia），并提供了获取方式。
- Demo：提供了音频示例页面和实时交互系统的在线演示链接：https://realchords-GAPT.github.io。
- 复现材料：论文附录（Appendix C）提供了极其详尽的模型架构、训练超参数、奖励模型细节等，复现信息充分。
- 引用的开源项目：主要依赖Transformer架构（LLaMA-style, T5），以及Proximal Policy Optimization (PPO) 等标准RL算法。论文未提及其他特定依赖的开源项目。

📌 **核心摘要**

1.  问题：强化学习（RL）后训练能提升生成式序列模型（如音乐生成）的自适应能力，但易导致“奖励黑客”现象，即策略通过生成高度重复、缺乏多样性的输出来“欺骗”奖励模型以获得高分，这在要求动态变化和创造性的实时人机音乐交互（jamming）中尤为有害。
2.  方法：提出生成对抗后训练（GAPT），在RL训练中引入一个与策略协同进化的判别器，用于区分策略生成的轨迹与真实数据轨迹。判别器输出的“真实度”作为对抗奖励信号，与原有的“和谐度”任务奖励相结合，共同引导策略。
3.  创新：采用两阶段自适应判别器更新策略（先固定间隔预热，后基于奖励阈值的置信度门控更新），以稳定对抗训练过程，避免判别器过强导致训练崩溃。这不同于传统GAN，而是借鉴了生成对抗模仿学习（GAIL）的RL框架。
4.  结果：在固定旋律模拟、与学习到的旋律代理交互、以及12位专家音乐家的实时用户研究中，GAPT相比基线（仅RL、仅MLE）显著提升了输出的多样性和和声和谐度，并加快了适应速度，增强了用户的控制感。关键定量结果见下表：

| 系统 | 测试集和谐度 | 测试集多样性 | 测试集和谐度 | 多样性（外部数据集） |
| :--- | :--- | :--- | :--- | :--- |
| Online MLE | 0.368 | 29.491 | 0.362 | 16.401 |
| ReaLchords (RL基线) | 0.484 | 20.968 | 0.475 | 8.417 |
| GAPT | 0.497 | 26.645 | 0.470 | 11.295 |
| 真实数据 | 0.727 | 27.922 | 0.784 | 10.962 |

![图3：用户研究评分](icassp-img://FXm5U16vxD/2.png)
图3显示，在用户研究中，GAPT在适应质量、适应速度、控制感和自主性三个主观评价指标上的平均得分均高于ReaLchords和Online MLE，其中适应速度和控制感的提升具有统计显著性。

5.  意义：提供了一种简单有效的技术方案，以缓解RL后训练中的奖励黑客问题，对于需要实时交互、创造性和鲁棒性的生成式AI应用（如人机协作、对话系统）具有参考价值。
6.  局限：方法针对音乐伴奏任务设计，其有效性在其他序列生成任务（如文本生成）中的泛化性有待进一步验证。任务本身相对垂直，不是通用语音/音频处理的核心方向。

---

### 🥈 [Latent Fourier Transform](/audio-paper-digest-blog/posts/2026-05-03-latent-fourier-transform)

🔥 **8.5/10** | 前25% | #音乐生成 | #扩散模型 | #音频生成 #生成模型

👥 **作者与机构**

- 第一作者：Mason Long Wang（MIT CSAIL）
- 通讯作者：未说明（论文中两位作者并列，未明确标注通讯作者）
- 作者列表：Mason Long Wang（MIT CSAIL），Cheng-Zhi Anna Huang（MIT CSAIL）

💡 **毒舌点评**

亮点在于将信号处理中经典的傅里叶变换概念巧妙地“升维”应用到生成模型的潜在表征空间，为音乐生成提供了一个物理意义清晰、用户交互直观的“时间尺度旋钮”。短板是“潜在频率”的语义完全依赖于模型学习到的表示，缺乏理论保证其与音乐属性的对应关系，这使得该控制轴的精确性和泛化性可能受限于训练数据。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/maswang32/latentfouriertransform/
- 模型权重：论文中未提及是否公开预训练模型权重。
- 数据集：使用了公开数据集MTG-Jamendo、GTZAN和Maestro。论文未提供处理后的数据集，但提供了预处理代码（根据论文“代码”部分描述）。
- Demo：论文提到所有定性结果（音频示例）可在其项目网站（https://masonlwang.com/latentfouriertransform/）上访问。
- 复现材料：论文提供了完整的训练细节（附录A.3）、所有模型架构的具体参数（表2-5）、实验设置（附录A.6）和消融实验配置。复现信息非常充分。
- 论文中引用的开源项目：论文在方法部分明确引用了Descript Audio Codec (DAC)（用于音频编码前端）和BigVGAN（用于梅尔频谱到波形的转换）。

📌 **核心摘要**

1. 问题：现有的音乐生成模型控制手段（如文本、音高曲线）难以精确、独立地指定音乐中不同时间尺度（如和弦进行与装饰音）的特征。
2. 方法核心：提出潜在傅里叶变换（LATENTFT）。首先用扩散自编码器将音频编码为潜在时间序列，然后对该序列沿时间轴做DFT，得到“潜在频谱”。训练时，随机遮蔽该频谱的部分频段，迫使解码器从不完整的潜在频谱中重建音乐。
3. 创新性：与之前方法相比，其核心创新在于：a) 将控制轴从信号空间或语义空间转移到了潜在空间的频率域，提供了连续、正交的时间尺度控制；b) 通过训练时的频域掩码策略，使潜在表示在推理时可被稳定、连贯地操作。
4. 实验结果：在条件生成和混合任务中，LATENTFT在保持用户指定时间尺度特征（如响度、节奏、音色、和声相关性）和音频质量（FAD）上均显著优于所有基线（详见表1）。主观听测（图3）也表明其在音频质量和混合效果上更受青睐。可解释性实验（图5，11）显示，不同音乐属性（流派、和弦、速度、音高）在潜在频谱中分布在不同频率区域。
   | 模型 | 条件生成 - 响度↑ | 条件生成 - FAD↓ | 混合 - 响度↑ | 混合 - FAD↓ |
   | :--- | :--- | :--- | :--- | :--- |
   | ILVR | 0.575 | 1.537 | 0.624 | 2.696 |
   | Guidance | 0.529 | 1.061 | 0.557 | 1.466 |
   | DAC | 0.661 | 7.016 | 0.550 | 6.257 |
   | LATENTFT-UNet | 0.834 | 0.348 | 0.686 | 1.357 |
   表1 关键结果摘录（MTG-Jamendo测试集）
5. 实际意义：为音乐创作和混音提供了一种新颖的交互维度，允许用户像使用均衡器一样操作音乐的“结构频率”，有望提升创作效率和可能性。
6. 局限性：潜在频率的语义完全由模型数据驱动，未提供理论解释其与音乐属性的确定性映射关系。此外，模型训练依赖大量音乐数据，其性能可能受限于数据分布。

---

### 🥉 [Bridging Piano Transcription and Rendering via Disentangled Score Content and Style](/audio-paper-digest-blog/posts/2026-05-03-bridging-piano-transcription-and-rendering-via)

🔥 **8.0/10** | 前25% | #音乐生成 | #多任务学习 | #音乐信息检索 #扩散模型

👥 **作者与机构**

- 第一作者：Wei Zeng（新加坡国立大学综合科学与工程计划， 计算学院）
- 通讯作者：Ye Wang（新加坡国立大学计算学院）
- 作者列表：
    - Wei Zeng（新加坡国立大学综合科学与工程计划， 计算学院）
    - Junchuan Zhao（新加坡国立大学计算学院）
    - Ye Wang（新加坡国立大学计算学院）

💡 **毒舌点评**

亮点：该工作巧妙地将钢琴音乐转录（解析）与渲染（合成）两个“逆向”任务统一在一个框架内，通过学习解耦的“内容”和“风格”表示实现了相互监督，并且创新的PSR模块让机器也能“看谱配风格”，迈出了走向智能音乐助手的重要一步。
短板：整个框架目前主要在古典钢琴数据集上验证，其技术路线对风格更加多变、记谱更灵活的流行或爵士乐是否有效，可能需要画个问号；另外，模型参数量达到了1.88亿，对于一个相对垂直的应用来说可能略显“重量级”。

🔗 **开源详情**

- 代码：论文未提供代码仓库链接，但明确指出“代码将在论文被接收后公开”。
- 模型权重：未提及公开预训练模型权重。
- 数据集：使用了公开的ASAP和ATEPP数据集进行评估。非成对数据（MuseScore乐谱， YouTube翻录MIDI）来源已说明，但未提供统一下载包。
- Demo：提供了在线演示页面链接：https://wei-zeng98.github.io/joint-apt-epr/。
- 复现材料：附录提供了大量复现所需细节（模型架构、训练超参数、损失函数、数据处理代码逻辑、主观测试说明）。这是复现的重要基础。
- 论文中引用的开源项目：
    1.  Partitura：用于符号音乐处理的Python包。
    2.  MidiTok：用于MIDI文件分词的Python包。
    3.  Aria-AMT：用于音频转MIDI的模型，作为非成对性能数据的来源。
    4.  MuseScore：非成对乐谱数据的来源。
    5.  GPT-4o mini：用于辅助标注和验证PSR评估数据的时代标签。
- 总体：论文中承诺未来开源，但当前未提供可直接运行的代码和模型。因此，论文中未提及完整的开源代码仓库和模型权重链接。

📌 **核心摘要**

1.  问题：表现性钢琴性能渲染（EPR）和自动钢琴转录（APT）是音乐信息检索中两个基础且互逆的任务。传统方法将它们独立研究，忽略了它们之间固有的联系和相互监督的潜力。此外，现有EPR模型往往需要精细的音符对齐数据或手动控制风格参数，限制了其易用性。
2.  方法核心：本文提出一个基于Transformer的序列到序列（Seq2Seq）统一框架，通过解耦学习“谱面内容”（音符级）和“性能风格”（全局）两种潜在表示，联合训练EPR和APT任务。该框架支持使用成对和非成对数据进行训练，且无需音符级别的精细对齐。此外，引入一个独立的基于扩散模型的性能风格推荐（PSR）模块，可直接从谱面内容生成合适的风格嵌入，以驱动渲染。
3.  新意：1）联合建模：首次尝试将EPR和APT统一建模，利用任务的对偶性实现信息共享与相互监督。2）无对齐Seq2Seq EPR：将EPR表述为Seq2Seq任务，摆脱了对音符对齐数据的依赖，使训练更具扩展性。3）自动风格推荐：提出PSR模块，从谱面自动推断合适的表演风格，使渲染过程更自动化、易于非专家使用。
4.  主要实验结果：
    *   在ASAP数据集上，本方法在APT任务上达到了与最先进方法（如Beyer & Dai, 2024）相当的性能，尤其在Eextra（7.33）、Eonset（16.26）等指标上具有优势（见表1）。
    *   在EPR任务的客观评估中，本方法（Ours-Target）在时值KL散度（5.51）、力度KL散度（1.76）、力度MAE（10.33）等指标上优于大多数基线，表明其生成的表演细节更接近人类分布（见表2）。
    *   主观听测（图2）显示，本方法在动态、节奏、风格和整体人类相似度评分上均接近或超过人类参考和基线系统。
    *   表示解耦验证（表4）表明，从性能中学习到的风格嵌入（zs）在作曲家和演奏家识别任务上的准确率（77.46%， 42.07%）远高于从谱面内容学习到的嵌入（zc），证明了解耦的有效性。
    *   风格迁移实验（图5）显示，在不同乐曲间转移风格时，能在保持质量的同时获得较高的风格相似度。
5.  实际意义：该工作为音乐信息检索提供了一个更统一、更灵活的建模范式。它不仅能提升转录和渲染的性能，还能实现可控的、风格自适应的音乐生成，有望应用于交互式音乐创作、自动编曲和音乐教育等领域。
6.  主要局限性：目前实验主要基于古典钢琴数据集（ASAP, ATEPP），其方法对其他音乐流派（如流行、爵士）和乐器的泛化能力尚未验证。此外，PSR模块的风格生成质量受限于其训练数据中包含的风格多样性。

---

### 4. [SongEcho: Towards Cover Song Generation via Instance-Adaptive Element-wise Linear Modulation](/audio-paper-digest-blog/posts/2026-05-03-songecho-towards-cover-song-generation-via)

🔥 **8.0/10** | 前25% | #音乐生成 | #扩散模型 #条件生成 | #扩散模型 #条件生成

👥 **作者与机构**

- 第一作者：Sifei Li（中国科学院自动化研究所，中国科学院大学）
- 通讯作者：Weiming Dong（中国科学院自动化研究所）
- 作者列表：Sifei Li（中国科学院自动化研究所，中国科学院大学）、Yang Li（中国科学院自动化研究所，中国科学院大学）、Zizhou Wang（中国科学院自动化研究所）、Yuxin Zhang（中国科学院自动化研究所，中国科学院大学）、Fuzhang Wu（中国科学院软件研究所）、Oliver Deussen（康斯坦茨大学）、Tong-Yee Lee（成功大学）、Weiming Dong（中国科学院自动化研究所）

💡 **毒舌点评**

这篇论文的核心创新——将FiLM扩展为EiLM以实现时序对齐的旋律调制，并引入自适应的条件精炼模块——思路清晰且技术实现扎实，但方法高度依赖特定的基座模型（ACE-Step），其提出的“翻唱生成”任务定义（排除局部艺术改编）也相对保守，限制了问题的挑战性和应用的灵活性。

🔗 **开源详情**

- 代码：提供代码仓库链接：`https://github.com/lsfhuihuiff/SongEcho_ICLR2026`。
- 模型权重：论文未提及是否公开训练好的IA-EiLM模块或完整模型的权重文件。
- 数据集：公开了构建的Suno70k数据集，包含歌曲链接和元数据，可通过Hugging Face（`https://huggingface.co/datasets/nyuuzyou/suno`）获取原始数据，论文附录描述了筛选流程。
- Demo：提供在线演示页面：`https://vvanonymousvv.github.io/SongEcho_updated/` 和 `https://vvanonymousvv.github.io/SongEcho_updated/`。
- 复现材料：提供了详尽的训练细节（学习率、优化器、batch size、训练步数）、评估协议、消融实验设置和附录中的额外结果，复现材料充分。
- 论文中引用的开源项目：
    - 基座模型：ACE-Step (`https://github.com/junyong-gong/acestep`)
    - 音频评估：FDopenl3, KLpasst, CLAP score (`https://github.com/Stability-AI/stable-audio-metrics`)
    - 旋律提取：RVMPE
    - 强制对齐：Montreal Forced Aligner (MFA)
    - 音频质量评估：SongEval (`https://github.com/AI4Music/SongEval`)
    - 数据处理：Qwen2-audio, Whisper
    - 模型微调：LoRA (用于基线对比)

📌 **核心摘要**

1.  问题：现有AI音乐生成模型难以在保留原唱旋律的同时，生成符合新文本提示（如风格、情感）的新的人声和伴奏，即实现高质量的“翻唱歌曲”生成。现有旋律控制方法（如交叉注意力、元素加法）存在时序对齐不精确或调制灵活性不足的问题，且条件特征缺乏与生成器隐状态的自适应交互。
2.  方法核心：提出SongEcho框架，其核心是实例自适应逐元素线性调制（IA-EiLM）模块。该模块包含两个子组件：逐元素线性调制（EiLM） 和 实例自适应条件精炼（IACR）。EiLM扩展了FiLM，能够直接生成与隐状态维度匹配的调制参数（γ, β），进行时序对齐的仿射变换。IACR通过一个门控机制，让旋律条件特征与生成器的隐状态动态交互，从而生成适应当前生成实例的条件。
3.  创新：与现有交叉注意力（间接、冗余）和元素加法（灵活性差）的方法不同，EiLM提供了更直接、灵活的时序调制；IACR则首次实现了条件特征根据生成器内部状态的自适应精炼，解决了静态条件注入可能导致的冲突问题。
4.  主要结果：在自建的Suno70k数据集和增强标注的SongEval基准上进行实验。定量结果表明，SongEcho在旋律控制指标（RPA， RCA）和整体音频质量指标（FD， KL）上全面超越了基于ControlNet和MuseControlLite的基线方法。例如，在Suno70k测试集上，SongEcho的RPA为0.7080（基线最高0.6214），FD为42.06（基线最低72.04）。主观MOS评分也显示其在旋律保真度、文本一致性、音频质量和整体偏好上均获得最高分。消融实验验证了EiLM和IACR各自的有效性。
5.  实际意义：为AI翻唱歌曲生成提供了一个参数高效（仅训练约49M参数，占基线SA ControlNet的3.07%）的解决方案，推动了可控音乐生成技术的发展，并贡献了高质量的开源数据集Suno70k。
6.  局限性：方法依赖于特定的基座模型ACE-Step，其文本控制能力限制了对人声音色等细粒度属性的调控；任务定义排除了人类翻唱中常见的局部艺术改编（如音符时值、颤音变化），简化了问题。

---

### 5. [Automatic Stage Lighting Control: Is it a Rule-Driven Process or Generative Task?](/audio-paper-digest-blog/posts/2026-05-03-automatic-stage-lighting-control-is-it-a-rule)

🔥 **8.0/10** | 前25% | #音乐生成 | #自回归模型 | #数据集 #迁移学习

👥 **作者与机构**

- 第一作者：Zijian Zhao（The Hong Kong University of Science and Technology）
- 通讯作者：Xiaoyu Zhang（City University of Hong Kong）
- 作者列表：Zijian Zhao（The Hong Kong University of Science and Technology）、Dian Jin（The Hong Kong Polytechnic University）、Zijing Zhou（The University of Hong Kong）、Xiaoyu Zhang（City University of Hong Kong）

💡 **毒舌点评**

论文首次将自动舞台灯光控制（ASLC）从传统的分类-映射范式提升为端到端生成任务，并发布了首个专用数据集RPMC-L2，这种“重新定义问题”的勇气值得肯定，且模型在人类评估中与专业灯光师打成平手（p=0.72），实证效果很强。然而，数据集仅包含摇滚/朋克/金属等风格且规模有限，其在更广泛音乐类型上的泛化能力存疑，且目前仅支持单灯光生成，离解决实际演出中多灯、实时控制的核心挑战还有相当距离。

🔗 **开源详情**

-   代码： 提供。论文中明确给出了GitHub仓库链接：https://github.com/RS2002/Skip-BART。
-   模型权重： 提供。论文中明确说明“trained model parameters”已开源。
-   数据集： 提供。论文中明确说明“the first stage lighting dataset” RPMC-L2 已开源，以约40GB的HDF5特征文件形式发布（因版权原因未提供原始视频）。
-   Demo： 未提及。
-   复现材料： 非常充分。提供了详细的模型配置表（表4）、预训练与微调的超参数、损失函数权重、训练硬件信息、数据集划分方式以及完整的附录（A-E）来解释数据处理、实验设置和人类研究流程。
-   论文中引用的开源项目： 主要引用并基于了PianoBART（迁移学习来源）、OpenL3（音频特征提取）、PyTorch（深度学习框架）。预训练方法也借鉴了其他工作。

📌 **核心摘要**

1.  要解决什么问题： 现有自动舞台灯光控制（ASLC）方法大多基于将音乐分类到有限类别（如风格、情绪）并映射到预设灯光模式，导致效果公式化、单调且缺乏合理性。
2.  方法核心是什么： 本文首次将ASLC构想为生成任务而非分类问题。提出了端到端模型Skip-BART，以音乐音频为输入，自回归地生成对应的灯光色相（Hue）和亮度（Value）序列。该模型基于BART架构，引入了一个跳跃连接机制以直接对齐音乐与灯光帧的关系，并采用了迁移学习（从PianoBART）和对抗性预训练来应对有限数据。
3.  与已有方法相比新在哪里： 突破了“先分类后映射”的传统规则驱动范式，直接从专业灯光师的真实灯光数据中学习生成连续的灯光序列。模型设计上，提出了处理循环色相数据的嵌入层，并设计了受限的随机温度控制（RSTC）采样策略。
4.  主要实验结果如何：
    *   定量分析（表1）： Skip-BART在色相（Hue）和亮度（Value）的RMSE、MAE指标上均显著优于基于规则的方法和所有消融模型（例如，Hue RMSE: Skip-BART 36.13 vs Rule-based 48.67；Value RMSE: 60.74 vs 93.39）。
    *   人类评估（表2，表3）： 38名参与者的评估显示，Skip-BART的整体得分（M=4.35）与真实灯光师（Ground Truth, M=4.51）无显著差异（p=0.724），但均显著高于基于规则的方法（M=2.67, p<0.001）。在跨领域（民谣、R&B、爵士）评估中，Skip-BART也持续优于规则方法。
    *   模型性能： Skip-BART模型参数量为240M，其中可训练参数为19M（使用LoRA）。训练在2x4090+1xA100 GPU上进行，预训练15小时，微调1.5小时。
5.  实际意义是什么： 为自动化、智能化的舞台灯光设计提供了新的技术路径，有望降低专业灯光设计的门槛和成本，并为现场音乐表演带来更丰富、更贴合音乐的视觉体验。
6.  主要局限性是什么： 生成的灯光序列偶尔出现过强的局部波动，长时节奏稳定性有待提升；数据集RPMC-L2仅涵盖摇滚等特定风格，且规模中等（699样本）；模型目前仅支持离线的、单一主灯光的生成，尚未解决实时控制和多灯光协调的复杂场景。

---

### 6. [YuE: Scaling Open Foundation Models for Long-Form Music Generation](/audio-paper-digest-blog/posts/2026-05-03-yue-scaling-open-foundation-models-for-long-form)

🔥 **8.0/10** | 前25% | #音乐生成 | #自回归模型 | #音频大模型 #长上下文

👥 **作者与机构**

- 第一作者：Ruibin Yuan (香港科技大学, MAP)
- 通讯作者：论文未明确指定单一通讯作者，但提供了多位联系人邮箱（按字母顺序排列）：Jiaheng Liu, Jian Yang, Wenhao Huang, Wei Xue, Xu Tan, Yike Guo。
- 作者列表：Ruibin Yuan (香港科技大学, MAP), Hanfeng Lin (香港科技大学, MAP), Shuyue Guo (MAP), Ge Zhang (MAP, 密歇根大学), Jiahao Pan (香港科技大学, MAP), Yongyi Zang, Haohe Liu (萨里大学, MAP), Yiming Liang (MAP), Wenye Ma (MBZUAI, MAP), Xingjian Du (罗切斯特大学, MAP), Xeron Du (MAP), Zhen Ye (香港科技大学), Tianyu Zheng (MAP), Zhengxuan Jiang (MAP), Yinghao Ma (MAP, 伦敦玛丽女王大学), Minghao Liu (2077AI, MAP), Zeyue Tian (香港科技大学, MAP), Ziya Zhou (香港科技大学, MAP), Liumeng Xue (香港科技大学, MAP), Xingwei Qu (MAP), Yizhi Li (MAP, 曼彻斯特大学), Shangda Wu (中央音乐学院, MAP), Tianhao Shen (MAP), Ziyang Ma (MAP, 上海交通大学, 南洋理工大学), Jun Zhan (复旦大学), Chunhui Wang (吉利), Yatian Wang (香港科技大学), Xiaowei Chi (香港科技大学), Xinyue Zhang (香港科技大学), Zhenzhu Yang (香港科技大学), Xiangzhou Wang (MAP), Shansong Liu (美团), Lingrui Mei (美团), Peng Li (香港科技大学), Junjie Wang (清华大学), Jianwei Yu (月之暗面), Guojian Pang (MAP), Xu Li (小红书), Zihao Wang (浙江大学, 卡内基梅隆大学), Xiaohuan Zhou (MAP), Lijun Yu (卡内基梅隆大学), Emmanouil Benetos (伦敦玛丽女王大学, MAP), Yong Chen (吉利), Chenghua Lin (曼彻斯特大学, MAP), Xie Chen (上海交通大学), Gus Xia (MBZUAI, MAP), Zhaoxiang Zhang (中国科学院), Chao Zhang (清华大学), Wenhu Chen (滑铁卢大学, MAP), Xinyu Zhou (月之暗面), Xipeng Qiu (复旦大学), Roger Dannenberg (卡内基梅隆大学, MAP)。
- 机构：主要来自多模态艺术投射 (Multimodal Art Projection, MAP) 联合体，合作机构包括香港科技大学、滑铁卢大学、卡内基梅隆大学、上海交通大学、清华大学、复旦大学、浙江大学、中国科学院、萨里大学、伦敦玛丽女王大学、曼彻斯特大学、MBZUAI、美团、吉利、月之暗面、小红书等。

💡 **毒舌点评**

亮点：论文的核心贡献在于系统性地将开源基础模型的能力边界推向了“五分钟完整歌曲生成”，其Dual-NTP和SPC等工程化创新有效解决了长程依赖与多轨混合建模的痛点，并在多项指标上追平了部分商业闭源系统，开源姿态意义重大。短板：尽管整体表现优异，但论文也坦承其在声学保真度（Vocal/Accomp Qual）和精细可控性上仍不及最强商业系统（如Suno V4），且其基于语义-声学融合的Tokenizer在信息保留上存在固有缺陷，可能限制了模型最终的音乐“质感”。

🔗 **开源详情**

- 代码：提供了GitHub仓库链接：`https://github.com/multimodal-art-projection/YuE`。
- 模型权重：在HuggingFace上提供了预训练模型检查点：`https://huggingface.co/collections/m-a-p/yue`。
- 数据集：使用了来自网络的约7万小时语音和65万小时音乐，均基于知识共享许可。论文未提及公开整个训练数据集，也未提供具体获取链接。
- Demo：提供了在线演示网站：`https://map-yue.github.io/`。
- 复现材料：在论文附录和正文（Section 3）中提供了详细的模型架构（附录C、D）、超参数、训练策略、数据混合比例和评估协议，复现信息充分。
- 引用的开源项目/模型：LLaMA2（基础架构），X-Codec（音频分词器），Vocos（上采样声码器），Whisper（评估WER），All-in-one（音乐分段），RMVPE（音高估计），Audioldm-eval、CLAP、CLaMP 3（自动评估指标）。

📌 **核心摘要**

这篇论文介绍了YuE（乐），一个用于长篇歌曲生成（歌词到歌曲）的开源基础模型系列。要解决的核心问题是现有开源模型无法可靠生成长达数分钟的、歌词对齐且音乐连贯的完整歌曲。其方法核心是：1) 轨道解耦下一个词预测：将人声和伴奏作为两个独立的token序列进行联合自回归建模，以克服混合信号中的掩蔽问题；2) 结构渐进条件：利用歌曲的自然段落结构（主歌、副歌等），将长文本与音频分段交错排列，以支持长上下文下的歌词跟随；3) 重新设计的音乐上下文学习：通过延迟激活的ICL策略，支持基于参考音频的风格迁移和双向创作，同时避免捷径学习。与已有方法相比，其新意在于首次在开源框架下，通过上述组合技术实现了时长和质量上接近商业系统的完整歌曲生成。主要实验结果表明，在人工评估中，YuE在平均偏好和音乐性上与Tiangong和Udio持平，优于Hailuo，但落后于Suno V4；它能生成持续时间更长（中位数显著高于其他模型）、人声音域更广（约27个半音，接近Suno V4）的歌曲。其实际意义在于为音乐AI研究和应用提供了一个强大的开源基线与工具。主要局限性在于声学细节质量（如音色、伴奏精细度）与顶尖商业系统仍有差距，且训练数据存在语言（以英语为主）和流派偏见。

---

### 7. [SyncTrack: Rhythmic Stability and Synchronization in Multi-Track Music Generation](/audio-paper-digest-blog/posts/2026-05-03-synctrack-rhythmic-stability-and-synchronization)

✅ **7.5/10** | 前25% | #音乐生成 | #扩散模型 | #跨模态 #基准测试

👥 **作者与机构**

- 第一作者：Hongrui Wang（香港科技大学数学系）
- 通讯作者：Can Yang（香港科技大学数学系，香港科技大学神经系统疾病国家重点实验室）、Yang Wang（香港大学）
- 作者列表：
  - Hongrui Wang（香港科技大学数学系）
  - Fan Zhang（香港科技大学数学系）
  - Zhiyuan Yu（浙江大学CAD&CG国家重点实验室）
  - Ziya Zhou（香港科技大学交叉学科学院）
  - Xi Chen（香港科技大学交叉学科学院）
  - Can Yang（香港科技大学数学系，香港科技大学神经系统疾病国家重点实验室）
  - Yang Wang（香港大学）

💡 **毒舌点评**

亮点：论文精准地瞄准了多轨音乐生成中“节奏同步”这一被忽视但至关重要的痛点，并提出了一个巧妙的解耦架构（轨道共享/特定模块）来分别处理共性与个性，同时设计了三个互补的量化评估指标（IRS, CBS, CBD），填补了该领域评估体系的空白。短板：模型的“生成”能力仍受限于潜在扩散框架的固有局限（如推理速度、长程依赖建模），且论文主要关注10秒左右的短片段，在超长乐曲生成和更复杂的音乐结构（如和声进行、旋律发展）上的表现未得到验证，实际音乐制作应用可能需要更强的可控性和更长的生成能力。

🔗 **开源详情**

-   代码：论文提供了项目主页（https://synctrack-v1.github.io），其中应包含代码链接。
-   模型权重：论文中提到代码和权重将在主页开源，但具体是否已发布需查看该链接。
-   数据集：使用的是公开数据集Slakh2100。论文未提及开源新的数据集。
-   Demo：提供了在线演示页面（链接在论文中）。
-   复现材料：在附录A.5中提供了详细的训练配置、模型架构参数表（表A3），并在A.1、A.2中详细说明了评估指标的实现细节和参数敏感性分析，复现信息非常充分。
-   引用的开源项目：论文明确依赖或提及的开源项目包括：MusicLDM（用于初始化）、HiFi-GAN（声码器）、madmom（用于节拍提取评估）。

📌 **核心摘要**

1. 要解决的问题：现有方法在多轨音乐生成中忽视了节奏的稳定性和跨轨同步性，导致生成的音乐各轨独立、缺乏协调，影响听感。
2. 方法核心：提出SyncTrack模型，基于潜在扩散模型，采用统一架构包含轨道共享模块（用于学习共同节奏）和轨道特定模块（用于学习独特音色）。轨道共享模块内设计了两种跨轨道注意力：全局跨轨道注意力（保持全局节拍稳定）和时间特定跨轨道注意力（实现细粒度同步）。
3. 与已有方法的创新：打破了将多轨音乐简单视为多变量时间序列生成或视频生成的思路，明确区分并分离了音乐中的“共享节奏信息”与“特有音色信息”，并针对性设计网络模块。
4. 主要实验结果：
    - 在Slakh2100数据集上，SyncTrack在混合音频FAD指标上显著优于基线方法（如下表所示）。
    - 在新的节奏一致性指标上全面领先（如下表所示）。
    - 消融实验表明，轨道特定模块和两类跨轨道注意力对模型性能均有显著且互补的贡献。

| 模型 | FAD (混合) ↓ |
| :--- | :--- |
| MSDM | 6.55 |
| STEMGEN | 4.30 |
| JEN-1 Composer | 4.04 |
| MSG-LD | 1.31 |
| SyncTrack | 1.26 |

| 指标 | Ground Truth | SyncTrack | MSG-LD | MSDM |
| :--- | :--- | :--- | :--- | :--- |
| CBS ↑ | 0.5740 | 0.5206 | 0.3861 | 0.4694 |
| CBD (mean) ↓ | 0.2412 | 0.2681 | 0.3714 | 0.3127 |
| IRS (Drum) ↓ | 0.005 | 0.011 | 0.040 | 0.036 |

5. 实际意义：为多轨音乐生成建立了更符合音乐感知的评估标准，提出的模型和指标可推动生成音乐在专业编辑、混音等场景的应用。
6. 主要局限性：生成片段长度有限（实验为10.24秒），在更长音乐生成上的节奏稳定性有待验证；模型的可控性（如指定风格、调性）未充分探讨。

---

### 8. [Steering Autoregressive Music Generation with Recursive Feature Machines](/audio-paper-digest-blog/posts/2026-05-03-steering-autoregressive-music-generation-with)

✅ **7.5/10** | 前25% | #音乐生成 | #递归特征机 | #自回归模型 #可控生成

👥 **作者与机构**

- 第一作者：Daniel Zhao（University of California, San Diego）
- 通讯作者：未说明
- 作者列表：Daniel Zhao（University of California, San Diego）、Daniel Beaglehole（University of California, San Diego）、Taylor Berg-Kirkpatrick（University of California, San Diego）、Julian McAuley（University of California, San Diego）、Zachary Novack（University of California, San Diego）

#

💡 **毒舌点评**

本文最大亮点在于工程上的“四两拨千斤”——通过训练轻量级探针和精巧的注入策略，为“冻结”的庞大音乐生成模型（MusicGen）安上了一套灵活且可解释的“方向盘”，实现了无需微调的细粒度控制。但短板在于，其控制的“概念”主要源自简化、符号化的合成音乐理论数据集（SYNTHEORY），在真实音乐复杂语境下的泛化能力和鲁棒性仍有待更充分的验证，且探针依赖的平均池化可能牺牲了关键的时间动态信息。

#

🔗 **开源详情**

- 代码：提供了GitHub仓库链接：`https://github.com/astradzhao/music-rfm`。
- 模型权重：论文中提及了训练RFM探针，但未明确说明是否或如何公开预训练好的探针权重。仅提及发布了代码用于“进一步探索”。
- 数据集：使用了公开数据集SYNTHEORY和MUSICBENCH，并提及了用于评估的SONG-DESCRIBER数据集。论文本身未发布新数据集。
- Demo：提供了交互式演示页面：`https://musicrfm.github.io/controllable-music-rfm/`。
- 复现材料：在附录中详细列出了RFM探针训练的超参数搜索空间（表8）、消融实验设置以及算法伪代码（算法1），提供了充分的复现细节。
- 论文中引用的开源项目：依赖并基于MusicGen（Meta）、EnCodec（Meta）、SYNTHEORY数据集、Librosa（用于评估）、Essentia（用于和弦估计）等开源项目或工具。

📌 **核心摘要**

1.  要解决什么问题：现有可控音乐生成方法通常需要模型微调或推理时昂贵的优化，且容易引入音频伪影，难以实现细粒度、可解释的音乐理论概念（如特定音符、和弦）控制。
2.  方法核心是什么：提出MusicRFM框架，分为三个阶段：首先，基于合成音乐理论数据集（SYNTHEORY）训练轻量级递归特征机（RFM）探针，在冻结的MusicGen模型内部发现对应于特定音乐属性的可解释“概念方向”（激活空间中的向量）；然后，在推理时，通过前向钩子将这些方向注入模型的残差流中，直接引导生成过程；最后，引入层感知（选择性层剪枝）和时间感知（动态调度、多方向控制）的机制来平衡控制强度与生成质量。
3.  与已有方法相比新在哪里：a) 首次将RFM应用于音乐生成领域的激活空间干预；b) 提出了一套完整的控制机制，包括基于探针性能的层权重分配、确定性/随机性时间调度以及多方向协同控制；c) 实现了在完全不修改基础模型参数、不依赖推理时优化的前提下，进行多种细粒度音乐属性的实时控制。
4.  主要实验结果如何：
    - 在单一方向控制上，对于“音符”类别，分类准确率随控制系数η₀从0.15增加到0.60，可从0.23提升至0.82；同时，文本提示忠实度（CLAP分数）仅下降约0.02。
    - 听力测试表明，MusicRFM在音符、和弦、音程、节拍控制上的感知评分均优于无控制基线和朴素RFM（见表3）。
    - 外部评估器（色度图、Essentia和声估计）证实了控制的有效性（见表4）。
    - 在MusicBench真实音乐数据集上的迁移实验也显示了控制能力，尽管效果因概念难度而异（见表5）。
    - 时间控制实验证明，生成音频的属性概率变化能忠实跟随预设的调度函数（如线性衰减、正弦波等）（见图1a）。
5.  实际意义是什么：提供了一种高效、灵活的框架，可让开发者和音乐人无需从头训练或微调，就能为现有的大型音乐生成模型快速添加可解释的、细粒度的可控能力，降低了定制化音乐生成的门槛，有望用于音乐创作、游戏音效等领域。
6.  主要局限性是什么：a) 探针使用平均池化，丢失了时间顺序信息，对音阶、和弦进行等强时序概念的控制效果有限；b) 控制强度与生成质量/文本忠实度之间存在权衡，过强的控制会导致分布漂移和伪影；c) 实验主要基于简化的合成音乐理论概念，其在复杂真实音乐中的表现需进一步验证。

---

### 9. [Discovering and Steering Interpretable Concepts in Large Generative Music Models](/audio-paper-digest-blog/posts/2026-05-03-discovering-and-steering-interpretable-concepts)

✅ **7.0/10** | 前25% | #音乐生成 | #模型评估 | #音频大模型 #生成模型

👥 **作者与机构**

- 第一作者：Nikhil Singh（Dartmouth College）
- 通讯作者：未说明
- 作者列表：Nikhil Singh（Dartmouth College）、Manuel Cherep（MIT）、Pattie Maes（MIT）

💡 **毒舌点评**

这篇论文的亮点在于构建了一个从“发现”到“引导”的完整闭环，将LLM可解释性领域的热门工具（SAE）成功移植到音乐生成模型并发现了超出传统理论的“隐秘模式”，堪称音乐AI的“考古学”。但短板也很明显：引导实验的成功率仅约四分之一，且高度依赖特定超参数，这好比你发现了一堆古老的乐器，却只有几把能吹响，离真正组建乐队还差得远。

🔗 **开源详情**

- 代码：论文中未提及代码链接。仅在附录H提供了用于Gemini标注的提示词和响应结构（Python代码片段）。
- 模型权重：未提及公开的SAE训练权重或分析模型权重。使用的基础模型是公开的MusicGen。
- 数据集：使用了公开的MusicSet数据集，但论文本身未提供处理后的激活数据或特征数据集。
- Demo：论文未提及在线演示。
- 复现材料：论文提供了详细的实验设置（如SAE超参数、过滤阈值）、模型选择、评估指标和部分分析图表，为复现主要结论提供了框架。但缺少关键的训练和分析代码。
- 论文中引用的开源项目：依赖的开源工具/模型包括：MusicGen（生成模型）、Gemini（标注）、Essentia（特征提取与分类）、CLAP（对齐评估）。
- 论文中未提及开源计划。

📌 **核心摘要**

1.  要解决的问题：大型音乐生成模型（如MusicGen）通过统计学习生成逼真音乐，但其内部如何表征音乐概念是“黑箱”。传统的人类音乐理论可能无法完全描述模型学到的结构。
2.  方法核心：提出一个多阶段无监督流水线：首先，使用稀疏自编码器从预训练MusicGen模型的残差流中提取可解释特征；然后，通过激活率过滤筛选出有代表性的特征；接着，利用多模态大模型和预训练音频分类器自动为特征生成标签；最后，验证发现的特征能否用于引导生成。
3.  新在哪里：据作者所知，这是首次将稀疏自编码器应用于音频领域进行可解释性研究。该方法无需预先定义概念标签，实现了大规模自动化特征发现与评估，并展示了特征在引导生成中的应用。
4.  主要实验结果：
    - 在MusicGen-Large和MusicGen-Small上，不同配置共发现了4697个通过过滤的特征。更大的模型（MGL）能提取出更多、更具区分度的特征。
    - 自动标注质量评估显示，Essentia分类器标签与Gemini生成的开放式概念在CLAP对齐分数上各有优劣（见图4）。人类评估中，Essentia标签的置信度（3.96/5）高于Gemini（3.19/5）。
    - 引导实验中，测试的特征有15%-35% 在引导后与自身最大激活示例的CLAP对齐分数有所提高（见表2）。10人听辨实验显著表明，SAE引导的效果可被清晰感知（66/100次被选中）。
5.  实际意义：为提高音乐生成模型的透明度提供了新工具，并开辟了利用生成模型本身来“逆向工程”音乐结构和发现新模式的实证路径。
6.  主要局限性：引导实验的成功率有限；自动标注的准确性（尤其对复杂或模糊特征）仍需提升；方法对SAE的超参数（如扩展因子、稀疏度）较为敏感；论文主要分析无文本条件的激活，未涉及条件生成中的概念表示。

---

