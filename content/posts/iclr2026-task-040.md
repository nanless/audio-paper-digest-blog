---
title: "ICLR 2026 - 音乐生成 论文列表"
date: 2026-05-04
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
| 🥇 | [Steering Autoregressive Music Generation with Recursive Feat](/audio-paper-digest-blog/posts/2026-05-04-steering-autoregressive-music-generation-with) | 8.5分 | 前25% |
| 🥈 | [SongEcho: Towards Cover Song Generation via Instance-Adaptiv](/audio-paper-digest-blog/posts/2026-05-04-songecho-towards-cover-song-generation-via) | 8.5分 | 前25% |
| 🥉 | [Latent Fourier Transform](/audio-paper-digest-blog/posts/2026-05-04-latent-fourier-transform) | 8.5分 | 前25% |
| 4. | [Discovering and Steering Interpretable Concepts in Large Gen](/audio-paper-digest-blog/posts/2026-05-04-discovering-and-steering-interpretable-concepts) | 8.0分 | 前25% |
| 5. | [Token-Based Audio Inpainting via Discrete Diffusion](/audio-paper-digest-blog/posts/2026-05-04-token-based-audio-inpainting-via-discrete) | 7.5分 | 前25% |
| 6. | [SyncTrack: Rhythmic Stability and Synchronization in Multi-T](/audio-paper-digest-blog/posts/2026-05-04-synctrack-rhythmic-stability-and-synchronization) | 7.5分 | 前25% |
| 7. | [YuE: Scaling Open Foundation Models for Long-Form Music Gene](/audio-paper-digest-blog/posts/2026-05-04-yue-scaling-open-foundation-models-for-long-form) | 7.5分 | 前25% |
| 8. | [Generative Adversarial Post-Training Mitigates Reward Hackin](/audio-paper-digest-blog/posts/2026-05-04-generative-adversarial-post-training-mitigates) | 7.0分 | 前25% |
| 9. | [Automatic Stage Lighting Control: Is it a Rule-Driven Proces](/audio-paper-digest-blog/posts/2026-05-04-automatic-stage-lighting-control-is-it-a-rule) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [Steering Autoregressive Music Generation with Recursive Feature Machines](/audio-paper-digest-blog/posts/2026-05-04-steering-autoregressive-music-generation-with)

🔥 **8.5/10** | 前25% | #音乐生成 | #自回归模型 #激活干预 | #自回归模型 #激活干预

👥 **作者与机构**

- 第一作者：Daniel Zhao（University of California, San Diego）
- 通讯作者：未说明（从作者列表和邮箱格式推断，第一作者Daniel Zhao可能是主要联系人，但未明确标注）
- 作者列表：Daniel Zhao（University of California, San Diego）、Daniel Beaglehole（University of California, San Diego）、Taylor Berg-Kirkpatrick（University of California, San Diego）、Julian McAuley（University of California, San Diego）、Zachary Novack（University of California, San Diego）

💡 **毒舌点评**

这篇论文的亮点在于它成功地将RFM这一“老”概念嫁接到了音乐生成这个热门但控制困难的任务上，并通过精巧的层/时间调度设计实现了相当不错的控制效果，免去了训练或微调基础模型的巨大开销。不过，其控制能力严重依赖于在高度理想化的合成音乐数据集（SYNTHEORY）上训练的探针，当面对真实世界复杂多变的音乐纹理时，这些探针发现的“方向”是否依然稳健有效，论文并未给出足够有说服力的证据。

🔗 **开源详情**

- 代码：提供GitHub仓库链接：`https://github.com/astradzhao/music-rfm`。
- 模型权重：未提及开源MusicGen-Large或训练好的RFM探针权重。
- 数据集：使用公开数据集SYNTHEORY、SONG-DESCRIBER、MusicBench。论文未提及提供或托管数据集。
- Demo：提供交互式演示项目主页：`https://musicrfm.github.io/controllable-music-rfm/`。
- 复现材料：在论文正文中和附录（A-F节）中提供了详细的技术细节、算法伪代码（算法1）、超参数搜索空间（表8）、消融实验设置和公式。
- 论文中引用的开源项目：MusicGen (Copet et al., 2024), ENCODEC (Défossez et al., 2022), Essentia (Bogdanov et al., 2013), librosa (McFee & et al., 2023), CLAP (Wu et al., 2023)。

📌 **核心摘要**

1.  问题：可控音乐生成极具挑战性，现有方法常需要模型微调或在推理时进行昂贵的优化，且可能引入听觉伪影。实现对生成音乐中精细的音乐理论概念（如特定音符、和弦）进行可解释、实时的控制是主要难题。
2.  核心方法：提出MusicRFM框架，适配递归特征机器（RFM）来控制冻结的预训练音乐模型（MusicGen）。方法分三步：首先，在合成音乐数据集SYNTHEORY上，为模型的每一层训练轻量级RFM探针，通过平均梯度外积（AGOP）发现对应于特定音乐概念（如音符）的“概念方向”；然后，在推理时，通过前向钩子将这些方向注入到模型各层的残差流中，实时引导生成过程。
3.  创新点：相较于现有方法，MusicRFM无需微调基础模型；它引入了层剪枝（Top-K或指数加权选择性能最佳的层进行注入）和时间调度（如线性衰减、正弦波等确定性调度，以及随机概率门控）等机制，以在控制精度和生成质量间取得平衡；同时支持多方向同时控制。
4.  主要实验结果：
    - 在探针分类任务上，MusicRFM（平均池化）在多个音乐概念类别上优于原始SYNTHEORY的FFN探针（见论文表1，平均精度0.942 vs 0.929）。
    - 在单方向控制生成上，对于“音符”类别，控制系数η0从0.15增加到0.60时，目标音符的分类准确率从0.23提升至0.824，而文本提示一致性（CLAP分数）仅下降约0.02（见论文表2）。具体控制结果如下：

| 类别 (随机基准) | 控制系数 η0 | FD ↓ | MMD ↓ | CLAP ↑ | 探针准确率 ↑ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| 音符 (0.083) | 0.15 | 0.113 | 0.052 | 0.315 | 0.231 |
| | 0.30 | 0.130 | 0.127 | 0.311 | 0.461 |
| | 0.45 | 0.138 | 0.217 | 0.318 | 0.684 |
| | 0.60 | 0.180 | 0.476 | 0.303 | 0.824 |
| 和弦 (0.250) | 0.15 | 0.116 | 0.063 | 0.324 | 0.271 |
| | 0.60 | 0.119 | 0.095 | 0.326 | 0.344 |

    - 听力测试（12名参与者）表明，MusicRFM在音乐属性控制得分上显著优于无控制和朴素RFM（见论文表3，以和弦为例：73.46 vs 59.71 vs 69.21）。
5.  实际意义：为可控音乐生成提供了一个高效、可解释的新范式，仅需训练轻量探针，无需修改或微调庞大的基础生成模型，且支持实时、细粒度的多属性控制，有望应用于音乐制作和游戏音频等场景。
6.  主要局限性：探针训练使用的均值池化丢失了时序信息，限制了其对音阶、和弦进行等强时序概念的控制效果；目前控制的概念局限于SYNTHEORY数据集定义的音乐理论属性，对音色、乐器等感知属性的控制有待拓展。

---

### 🥈 [SongEcho: Towards Cover Song Generation via Instance-Adaptive Element-wise Linear Modulation](/audio-paper-digest-blog/posts/2026-05-04-songecho-towards-cover-song-generation-via)

🔥 **8.5/10** | 前25% | #音乐生成 | #扩散模型 | #数据集 #歌唱语音合成

👥 **作者与机构**

- 第一作者：Sifei Li（中国科学院自动化研究所MAIS、中国科学院大学人工智能学院）
- 通讯作者：Weiming Dong（中国科学院自动化研究所MAIS、中国科学院大学人工智能学院）
- 作者列表：
    - Sifei Li（中国科学院自动化研究所MAIS、中国科学院大学人工智能学院）
    - Yang Li（中国科学院自动化研究所MAIS、中国科学院大学人工智能学院）
    - Zizhou Wang（中国科学院自动化研究所）
    - Yuxin Zhang（中国科学院自动化研究所MAIS、中国科学院大学人工智能学院）
    - Fuzhang Wu（中国科学院软件研究所ISRC）
    - Oliver Deussen（康斯坦茨大学）
    - Tong-Yee Lee（成功大学）
    - Weiming Dong（中国科学院自动化研究所MAIS、中国科学院大学人工智能学院）

💡 **毒舌点评**

这篇论文精准地瞄准了“旋律保持”这一翻唱核心需求，并通过改进条件注入机制（IA-EiLM）和构建高质量数据集（Suno70k）给出了一个参数高效、效果显著的解决方案，理论与实验结合得相当扎实。不过，模型依然受限于底层基础模型（ACE-Step）对音色等细粒度控制的不足，且所用的AI生成数据集Suno70k在风格多样性、情感表达深度上可能与真实人类创作的音乐存在“域差距”，这或许会影响模型泛化到更复杂、更具表现力的真实翻唱场景。

🔗 **开源详情**

- 代码：提供代码仓库链接：https://github.com/lsfhuihuiff/SongEcho_ICLR2026。
- ���型权重：论文中提到“Code, dataset, and demos are available at...”，但未明确说明是否开源经过训练的完整SongEcho模型权重。基于常见实践，可能开源了新增的IA-EiLM模块和旋律编码器权重。
- 数据集：Suno70k 数据集已公开，链接为 https://huggingface.co/datasets/nyuuzyou/suno。
- Demo：提供在线演示页面：https://vvanonymousvv.github.io/SongEcho_updated/。
- 复现材料：提供了详细的训练细节（第5.1节）、评估协议（第5.2节）、基线复现细节（附录C.1）和超参数设置，复现指导充分。
- 论文中引用的开源项目：
    *   骨干模型：ACE-Step (Gong et al., 2025)
    *   评估工具：mir_eval (Raffel et al., 2014), stable-audio-metrics, SongEval (Yao et al., 2025)
    *   特征提取工具：RVMPE (Wei et al., 2023) 用于音高提取, Qwen2-audio (Chu et al., 2024) 用于标签生成, Whisper (Radford et al., 2023) + All-in-One (Kim & Nam, 2023) 用于歌词转录
    *   基线方法：ControlNet (Zhang et al., 2023a), LoRA (Hu et al., 2022), MuseControlLite (Tsai et al., 2025)
- 论文中未提及开源计划：未明确提及开源训练好的完整模型权重和大规模的预训练骨干（ACE-Step）权重（ACE-Step本身可能是开源的）。

📌 **核心摘要**

1.  要解决什么问题：在给定一段人声旋律和文本提示的条件下，生成同时包含新的人声演唱和和谐伴奏的完整歌曲（即翻唱歌曲），这要求模型在保持原旋律轮廓的同时进行风格重新诠释。
2.  方法核心是什么：提出SongEcho框架，核心是实例自适应元素级线性调制。它扩展了FiLM为元素级线性调制，以实现对隐藏状态在时序上的精确对齐调制；同时引入实例自适应条件精炼模块，使旋律条件能根据生成模型当前的隐藏状态进行动态调整，而非静态注入。
3.  与已有方法相比新在哪里：相比于使用交叉注意力（如MuseControlLite）或元素级相加（如ControlNet）的方法，EiLM提供了更灵活、时序对齐更直接的调制能力。IACR解决了传统条件编码与生成模型内部状态不兼容的问题，使条件融合更和谐。此外，论文开源了一个高质量的、带有丰富标注的AI歌曲数据集Suno70k。
4.  主要实验结果如何：在Suno70k测试集上，SongEcho的RPA（0.708）、RCA（0.734） 和CLAP（0.324） 等指标均显著优于基线方法，FD（42.06） 和KL（0.112） 等音质指标也远优于其他方法，且可训练参数量（49.1M）仅为ACE-Step+ControlNet（1.6B）的3.07%。主观听测（MOS）在旋律保真度、文本一致性、音频质量和整体偏好上均获最高分。
5.  实际意义是什么：推动了可控、高质量歌曲生成技术的发展，为音乐创作提供了新的AI辅助工具。所构建的开源数据集有助于解决歌曲AI研究中的数据稀缺和版权问题。
6.  主要局限性是什么：（1）音色控制能力有限，仅支持基于性别调整，无法进行更细粒度的音色模仿或合成。（2）生成的翻唱是全局风格迁移，未模拟人类音乐家在翻唱时可能进行的局部创造性改编（如颤音、滑音、音符时值变化）。（3）训练依赖于AI生成的音乐数据集，可能存在与真实人类音乐在情感、表达力上的差异。

---

### 🥉 [Latent Fourier Transform](/audio-paper-digest-blog/posts/2026-05-04-latent-fourier-transform)

🔥 **8.5/10** | 前25% | #音乐生成 | #扩散模型 | #音频生成

👥 **作者与机构**

- 第一作者：Mason Long Wang (MIT CSAIL)
- 通讯作者：未说明
- 作者列表：Mason Long Wang (MIT CSAIL), Cheng-Zhi Anna Huang (MIT CSAIL)

#

💡 **毒舌点评**

亮点在于，它提出了一个优雅且系统性的框架，将傅里叶分析引入生成模型的潜空间，为音乐生成提供了一个全新的、连续的“时间尺度”控制轴，概念上比现有的离散层次控制（如RVQ层）更直观。短板是，虽然实验在MTG-Jamendo等数据集上表现优异，但音乐生成模型的通用评估依然困难，且用户研究规模有限（29人），对“音乐连贯性”等主观感受的量化仍具挑战。

#

🔗 **开源详情**

- 代码：论文中提供了公开的代码仓库链接（https://github.com/maswang32/latentfouriertransform/）。
- 模型权重：论文中未明确提及是否公开预训练模型权重。
- 数据集：主要使用公开数据集MTG-Jamendo、GTZAN、Maestro，论文未提供其私有处理版本。
- Demo：论文中提到提供在线音频演示（https://masonlwang.com/latentfouriertransform/）。
- 复现材料：论文附录（Appendix A）提供了极其详细的实验设置信息，包括：各版本编码器（MLP, U-Net, DAC）的具体架构和超参数、解码器（扩散模型）架构、训练细节（优化器、学习率、batch size、迭代次数、warmup、EMA等）、其他超参数（掩码生成参数、扩散参数）、数据集说明、实验具体设置（频率带划分、用户研究细节）、隔离实验和可解释性实验的方法。这些信息足以支持复现。
- 论文中引用的开源项目：BigVGAN（声码器）、DAC（音频编码器）、Essentia、Librosa、VGGish等。

📌 **核心摘要**

1.  要解决什么问题：现有基于粗到细生成范式的音乐生成模型（如扩散模型、自回归模型）难以对生成过程进行中、小尺度特征的精细控制。用户通常只能控制全局属性（如文本描述）或特定语义属性（如音高、响亮），无法直接指定并控制音乐中不同时间尺度（如和弦进行、颤音）的模式。
2.  方法核心是什么：论文提出了“潜空间傅里叶变换”（LATENTFT）框架。它使用一个扩散自编码器将音频编码为潜向量时间序列，并对该序列进行离散傅里叶变换（DFT），得到“潜频谱”。在训练时，对潜频谱进行随机掩码（保持频带相关性和对数频率轴），然后用掩码后的潜序列作为条件，训练扩散解码器重构音频。
3.  与已有方法相比新在哪里：
    - 控制维度新：首次在生成模型中引入对“潜空间频率”（对应音乐模式的时间尺度）的直接、连续控制，类似于音频均衡器（EQ）在音色上的作用，但作用对象是音乐结构。
    - 训练策略新：核心创新在于训练时的潜频域掩码策略。通过在训练中随机遮蔽潜频谱的不同频段，使模型学会从部分频谱信息中恢复完整音乐，从而支持推理时用户指定的、针对特定时间尺度的控制。
    - 任务定义新：将音乐生成/融合任务从属性条件或简单特征混合，提升到了基于时间尺度的、可解释的条件混合。
4.  主要实验结果如何：论文在条件生成和融合两个任务上，与多种基线（掩码Token模型、引导梯度、ILVR、DAC/RAVE后处理、频谱图滤波、交叉合成）进行了对比。在MTG-Jamendo数据集上的关键结果如下表所示，LATENTFT在各项指标上均显著优于基线，尤其是在音频质量（FAD）和条件遵循（如响度、节奏相关性）方面。

| 方法 | 条件生成 FAD ↓ | 条件生成 节奏相似度 ↑ | 融合 FAD ↓ | 融合 节奏相似度 ↑ |
| :--- | :--- | :--- | :--- | :--- |
| LATENTFT-MLP | 0.337 | 0.963 | 1.387 | 0.873 |
| LATENTFT-UNet | 0.348 | 0.966 | 1.357 | 0.878 |
| ILVR | 1.537 | 0.839 | 2.696 | 0.858 |
| Guidance | 1.061 | 0.813 | 1.466 | 0.832 |
| DAC | 7.016 | 0.838 | 6.257 | 0.792 |

（表1：MTG-Jamendo测试集上的条件生成与融合结果）

此外，消融研究证实了频率掩码、频带相关性掩码和对数频率缩放对性能的关键作用。用户研究显示，LATENTFT在音频质量和融合能力上均显著优于基线。
5.  实际意义是什么：该工作推动了可解释、可控音乐生成的发展，为音乐人提供了一种基于“时间尺度”的新交互范式。它不仅展示了潜空间频域操作的潜力，也为其他序列生成任务（如视频、舞蹈）提供了借鉴。
6.  主要局限性是什么：方法目前主要应用于音乐生成任务。潜频谱中不同频段与具体音乐属性的对应关系（如图5所示）虽然可解释，但仍是数据驱动的，缺乏先验的物理或音乐理论锚定。此外，模型需要针对特定数据集进行训练，其泛化性有待进一步验证。

---

### 4. [Discovering and Steering Interpretable Concepts in Large Generative Music Models](/audio-paper-digest-blog/posts/2026-05-04-discovering-and-steering-interpretable-concepts)

🔥 **8.0/10** | 前25% | #音乐生成 | #稀疏自编码器 | #预训练 #可解释性

👥 **作者与机构**

- 第一作者：Nikhil Singh (Dartmouth College)，Manuel Cherep (MIT) —— 共同第一作者
- 通讯作者：未明确标注，但Pattie Maes (MIT) 可能为项目负责人
- 作者列表：Nikhil Singh (Dartmouth College)，Manuel Cherep (MIT)，Pattie Maes (MIT)

💡 **毒舌点评**

亮点：首次将稀疏自编码器（SAE）技术从大语言模型（LLM）的可解释性研究成功迁移到音频/音乐生成领域，并构建了端到端的自动化发现、标注与验证流水线，方法论上具有清晰的开创性和系统性。  
短板：对于所发现的“概念”的边界（monosemanticity）控制和负样本分析不够深入，且部分自动化标注和评估高度依赖外部模型（如Gemini、CLAP），可能引入偏置；概念引导生成的成功率（约15-35%）虽证明可行性，但作为“强干预”实验，其鲁棒性和泛化性仍有很大提升空间。

🔗 **开源详情**

- 代码：论文中未提供明确的代码仓库链接。
- 模型权重：实验使用了预训练的MusicGen模型（Large和Small版本），以及Essentia和CLAP的预训练模型。论文训练的SAE权重未提及是否公开。
- 数据集：使用了公开的MusicSet数据集。
- Demo：论文中未提及在线演示。
- 复现材料：附录提供了部分技术细节（如Gemini的提示词和响应格式、Essentia使用的标签模型列表、人类验证指南），但核心的SAE训练超参数（学习率、优化器等）未详细说明。
- 依赖的开源项目：论文明确依赖并提及了MusicGen、Essentia、CLAP、Gemini API等开源模型或工具。

📌 **核心摘要**

这篇论文旨在解决大型自回归音乐生成模型（如MusicGen）内部表示不透明、难以与人类音乐概念对齐的问题。核心方法是利用稀疏自编码器（SAE） 对Transformer残差流的激活进行重构，从中提取出稀疏、可解释的潜在特征（概念），并构建了一套自动化标注与评估流程（结合多模态大语言模型和预训练音频分类器）来大规模识别这些概念。与已有工作主要关注“探测已知概念”不同，本文提出了一个无监督的概念发现流水线，能够发现模型隐式学习的、甚至超越现有理论描述的音乐规律。实验结果表明，该方法在两个不同规模的MusicGen模型上都能发现熟悉的音乐概念（如鼓点、流派、乐器音色）和新兴的、难以用现有术语定义的规律（如特定的电子音效、音乐织体单元）。关键量化结果包括：在MusicGen-Large上，过滤后可保留数千个可解释特征；自动化标注质量通过CLAP分数进行评估（详见图4）；通过引入特征进行引导生成，15%-35%的特征能提升生成音频与目标概念的CLAP对齐分数（表2），并且人类听辨实验（66/100的正确率）证实了引导效果的可感知性。该工作为理解生成模型如何组织音乐信息提供了实证工具，并指向了可控生成的可能性。

---

### 5. [Token-Based Audio Inpainting via Discrete Diffusion](/audio-paper-digest-blog/posts/2026-05-04-token-based-audio-inpainting-via-discrete)

✅ **7.5/10** | 前25% | #音乐生成 | #扩散模型 | #预训练 #离散模型

👥 **作者与机构**

- 第一作者：Tali Dror， Iftach Shoham（*为共同第一作者）（Ben-Gurion University of the Negev）
- 通讯作者：未明确标注（从作者列表及邮箱推测，Eliya Nachmani可能是负责人）
- 作者列表：
    - Tali Dror (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)
    - Iftach Shoham (Ben-Gurion University of the Negev, Faculty of Computer and Information Science, Data Science Research Center)
    - Moshe Buchris (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)
    - Oren Gal (University of Haifa)
    - Haim Permuter (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)
    - Gilad Katz (Ben-Gurion University of the Negev, Faculty of Computer and Information Science, Data Science Research Center)
    - Eliya Nachmani (Ben-Gurion University of the Negev, School of Electrical and Computer Engineering)

#

💡 **毒舌点评**

这篇论文的亮点在于它为音频修复这个“老”问题提供了一个“新”且优雅的技术范式——直接在离散token空间用扩散模型“填空”，避开了连续波形或频谱建模的诸多麻烦，并在长间隙修复上证明了其有效性。然而，其理论深度和创新野心略显不足，本质上是现有组件（WavTokenizer, DiT, DWDSE）的巧妙集成与适配，且实验规模（如数据集量级、模型参数）与当前大模型时代的主流工作相比显得较为“迷你”，限制了其更广泛的影响力。

#

🔗 **开源详情**

- 代码：论文中提供了项目页面和代码链接：https://github.com/iftachShoham/AIDD。
- 模型权重：论文中未明确提及是否公开预训练模型权重。
- 数据集：使用的MusicNet和MAESTRO是公开的标准数据集，但论文未说明获取方式或是否需要申请。
- Demo：论文中未提及在线演示。
- 复现材料：提供了详细的超参数配置表（附录表8）、训练环境（单卡NVIDIA A6000）、训练步数与时长等复现所需的关键信息。
- 论文中引用的开源项目：依赖的开源工具/模型包括：WavTokenizer（Ji et al., 2024）、UniCodec（Jiang et al., 2025，作为对比）、Diffusion Transformer (DiT) 架构（Peebles & Xie, 2023）。

📌 **核心摘要**

1.  问题：音频修复（Audio Inpainting）旨在恢复音频信号中的缺失或损坏段。现有的基于扩散模型的方法在缺失区域较大时性能会下降。
2.  核心方法：本文提出AIDD（Audio Inpainting via Discrete Diffusion），是首个将离散扩散模型应用于token化音乐表示的方法。该方法首先使用预训练的WavTokenizer将音频波形编码为离散token序列，然后在token空间应用基于Diffusion Transformer（DiT）的离散扩散模型进行修复。关键创新包括：a) Span-based Masking：在扩散前向过程中采用结构化的连续片段遮蔽，模拟从局部损坏到语义扰动的过程；b) Derivative-based Regularization Loss：在训练时引入导数正则化损失，鼓励预测的token嵌入在时间维度上平滑，提升连贯性。
3.  新颖性：与之前在连续波形（如DiffWave）或频谱图（如MAID, CQT-Diff+）上操作的方法不同，AIDD完全在离散token序列上进行建模，这有助于捕捉高层语义结构并避免相位重建等问题。
4.  实验结果：在MusicNet和MAESTRO数据集上，针对150ms至750ms的缺失间隙进行了评估。主要结果如下（关键数据来自论文表1和表2）：
    *   MusicNet（多间隙修复）：在200ms-300ms间隙上，AIDD在FAD和ODG指标上均优于强基线CQT-Diff+。例如在300ms间隙，AIDD的FAD为3.549，而CQT-Diff+为4.652（降低约24%）；ODG（越高越好）AIDD为-3.284，CQT-Diff+为-3.711。
    *   MAESTRO（单间隙修复）：在375ms和750ms的长间隙上，AIDD的ODG（PEA-Q）分数显著优于GACELA、bin2bin等GAN基线。例如在750ms间隙，AIDD的ODG为-2.596 ± 1.300，而最佳基线bin2bin-MIDI为-2.976 ± 0.456。
    *   主观评估（MOS）：在MAESTRO上，AIDD（使用WavTokenizer）获得3.64 ± 1.26的MOS分，略高于CQT-Diff+（3.51 ± 1.34）和GACELA（3.51 ± 1.33）。
5.  实际意义：该方法为音乐音频修复，特别是长间隙修复，提供了一种高效且效果更好的新方案。其token-based离散扩散框架也可为其他序列生成任务（如语言模型）提供借鉴。
6.  主要局限性：修复质量的上限受底层tokenizer（WavTokenizer）的质量和带宽（24kHz）限制；存在训练时（完整音频分词后遮蔽）与推理时（音频含缺失段分词）的不匹配问题；与基于连续表示的基线在评估上存在跨域差异。

---

### 6. [SyncTrack: Rhythmic Stability and Synchronization in Multi-Track Music Generation](/audio-paper-digest-blog/posts/2026-05-04-synctrack-rhythmic-stability-and-synchronization)

✅ **7.5/10** | 前25% | #音乐生成 | #扩散模型 | #模型评估 #多轨音频

👥 **作者与机构**

- 第一作者：Hongrui Wang（香港科技大学数学系，标注为等贡献）
- 通讯作者：Yang Wang（香港大学）；Fan Zhang（香港科技大学，标注为等贡献）；Can Yang（香港科技大学数学系及神经系统疾病国家重点实验室）
- 作者列表：
    - Hongrui Wang（香港科技大学数学系）
    - Fan Zhang（香港科技大学数学系）
    - Zhiyuan Yu（浙江大学CAD&CG国家重点实验室）
    - Ziya Zhou（香港科技大学交叉学科学院）
    - Xi Chen（香港科技大学交叉学科学院）
    - Can Yang（香港科技大学数学系；香港科技大学神经系统疾病国家重点实验室）
    - Yang Wang（香港大学）

#

💡 **毒舌点评**

亮点：架构设计直击痛点，用Track-shared和Track-specific模块清晰解耦了多轨音乐中的“共性节奏”与“个性音色”，逻辑自洽且实验验证有效。短板：所提出的节奏评估指标（IRS， CBS， CBD）高度依赖于外部的预训练节拍检测器（madmom），其性能天花板受限于该工具，且指标定义相对简单，可能无法完全捕捉人类对“好律动”的复杂感知。

#

🔗 **开源详情**

- 代码：论文提供了项目主页链接（https://synctrack-v1.github.io），推测包含代码。论文中明确写道“Audio samples, alongside with the source code for both the model and evaluation metrics, are available on our demo page.”
- 模型权重：论文中未明确提及是否公开预训练模型权重。
- 数据集：使用公开的Slakh2100数据集。论文中未提及是否提供处理后的数据。
- Demo：提供了项目主页作为demo展示。
- 复现材料：提供了极其详细的训练配置（数据集划分、优化器、学习率、硬件、训练时间等）、模型架构细节（表A3）、评估指标的具体实现（附录A.1），以及超参数敏感性分析。复现信息非常充分。
- 依赖的开源项目：论文中提及并依赖了以下开源工具/模型：
    - madmom：用于节拍检测，以计算节奏相关指标。
    - MusicLDM：模型初始化权重来源。
    - HiFi-GAN：作为声码器，将潜在表示解码为波形。
    - RNNDownBeatProcessor & DBNDownBeatTrackingProcessor：来自madmom库，用于节拍提取。

📌 **核心摘要**

1. 问题：现有的多轨音乐生成模型（如MSDM， MSG-LD）通常将各轨视为独立变量进行联合建模，忽视了音乐中至关重要的节奏稳定性（单轨内拍子稳定）和同步性（多轨间拍子对齐），导致生成音乐听起来杂乱、不协调。
2. 方法：提出SyncTrack模型，其核心是采用统一的架构包含Track-shared模块（共享）和Track-specific模块（特定）。共享模块内设计了两种跨轨注意力：全局跨轨注意力用于建立全局一致的节奏框架，时间特定跨轨注意力用于对齐同一时刻的音乐事件。特定模块则通过可学习的乐器先验来建模各轨独特的音色等特征。
3. 创新：1) 架构上明确分离处理音乐的共性与个性信息；2) 设计了两种针对性的跨轨注意力机制；3) 创新性地提出了三个用于量化评估多轨音乐节奏一致性（稳定性和同步性）的新指标：IRS（轨内节奏稳定性）、CBS（跨轨拍子同步率）、CBD（跨轨拍子离散度）。
4. 实验结果：在Slakh2100数据集上，SyncTrack在整体FAD指标上显著优于基线（从MSDM的6.55降至1.26）。在节奏一致性指标上，SyncTrack也全面优于基线：例如，CBS从MSG-LD的0.3861提升至0.5206，CBD(mean)从0.3714降低至0.2681。消融研究证明了各模块的有效性。主观评估也显示SyncTrack生成的音乐更受青睐。

| 指标 | Ground Truth | SyncTrack | MSG-LD | MSDM |
| :--- | :--- | :--- | :--- | :--- |
| FAD↓（混合） | - | 1.26 | 1.31 | 6.55 |
| CBS↑ | 0.5740 | 0.5206 | 0.3861 | 0.4694 |
| CBD(mean)↓ | 0.2412 | 0.2681 | 0.3714 | 0.3127 |

5. 实际意义：为多轨音乐生成领域提供了更合理的建模思路和更专业的评估工具，推动了该领域向更符合音乐本质特性的方向发展，对未来音乐制作辅助工具有积极影响。
6. 局限性：模型生成时长目前限于约10秒，论文也提到未来计划扩展至更长片段。新提出的评估指标依赖于第三方节拍检测工具，其准确性和普适性需要进一步验证。

---

### 7. [YuE: Scaling Open Foundation Models for Long-Form Music Generation](/audio-paper-digest-blog/posts/2026-05-04-yue-scaling-open-foundation-models-for-long-form)

✅ **7.5/10** | 前25% | #音乐生成 | #自回归模型 | #歌唱语音合成 #多模态模型

👥 **作者与机构**

- 第一作者：未说明（论文列出了大量作者，但未明确区分第一作者）
- 通讯作者：未说明（论文提供了多位联系人邮箱，但未明确指定通讯作者）
- 作者列表：Ruibin Yuan, Hanfeng Lin, Shuyue Guo, Ge Zhang, Jiahao Pan, Yongyi Zang, Haohe Liu, Yiming Liang, Wenye Ma, Xingjian Du, Xeron Du, Zhen Ye, Tianyu Zheng, Zhengxuan Jiang, Yinghao Ma, Minghao Liu, Zeyue Tian, Ziya Zhou, Liumeng Xue, Xingwei Qu, Yizhi LI, Shangda Wu, Tianhao Shen, Ziyang Ma, Jun Zhan, Chunhui Wang, Yatian Wang, Xiaowei Chi, Xinyue Zhang, Zhenzhu Yang, XiangzhouWang, Shansong Liu, Lingrui Mei, Peng Li, Junjie Wang, Jianwei Yu, Guojian Pang, Xu Li, Zihao Wang, Xiaohuan Zhou, Lijun Yu, Emmanouil Benetos, Yong Chen, Chenghua Lin, Xie Chen, Gus Xia, Zhaoxiang Zhang, Chao Zhang, Wenhu Chen, Xinyu Zhou, Xipeng Qiu, Roger Dannenberg, Jiaheng Liu, Jian Yang, Wenhao Huang, Wei Xue, Xu Tan, Yike Guo（主要隶属机构为：Multimodal Art Projection (MAP), 香港科技大学 (HKUST)；部分作者同时隶属Moonshot.ai, 上海交通大学 (SJTU), 清华大学, CMU, Queen Mary University of London等）。

#

💡 **毒舌点评**

亮点：作为首个在质量上能与Suno、Udio等商业巨头掰手腕的开源歌词到歌曲生成模型，YuE的诞生本身就是对音乐AI民主化的巨大贡献，其系统性技术方案（双轨预测、结构化条件、音乐ICL重设计）为后续研究提供了清晰的蓝图。短板：尽管在“音乐性”和“人声敏捷度”上表现亮眼，但在音质保真度（VocalQual, AccompQual）上与顶级闭源系统仍有可感知的差距，这指向了其语义-声学融合编解码器的根本性局限；此外，对于训练数据版权合规性的说明仍显笼统，这在生成式AI伦理日益受关注的当下是一个隐患。

#

🔗 **开源详情**

- 代码：提供。论文明确指向GitHub仓库：`https://github.com/multimodal-art-projection/YuE`。
- 模型权重：提供。论文明确指向HuggingFace模型库：`https://huggingface.co/collections/m-a-p/yue`。
- 数据集：未完全公开。论文说明数据来源于网络并筛选Creative Commons许可内容，规模为7万小时语音+65万小时音乐，但未提供下载或直接访问方式。
- Demo：提供。在线演示链接：`https://map-yue.github.io/`。
- 复现材料：非常充分。论文附录详细说明了Tokenization（X-Codec细节）、Stage-2架构、评估协议（主观/客观指标定义）、训练数据分布（语言、流派）、测试用prompt列表以及伦理考量。
- 引用的开源项目：论文中提到了多个依赖的开源工具和模型，包括：LLaMA2（架构基础）、X-Codec（音频分词器）、Vocos（上采样）、All-in-one（歌曲结构分析）、Whisper（WER计算）、RMVPE（音高估计）、ByteCover2（记忆化测试）、CLAP与CLaMP3（对齐评估）、audioldm_eval（客观评估）、PaSST（特征提取）等。
- 总结：论文提供了高水平的开源支持，涵盖了从代码、模型到评估的全流程。对于研究社区而言，这是一个可立即使用的强大基线模型。

📌 **核心摘要**

1.  问题：论文旨在解决从歌词生成完整歌曲（包含人声与伴奏）的长期、复杂难题，现有开源系统无法在保证质量、结构连贯性和歌词对齐的前提下生成长音乐。
2.  方法：提出了YuE模型家族，采用两阶段自回归语言模型架构。核心创新包括：a) 双轨解耦预测：将每个时间步的人声和伴奏作为两个独立token建模，以应对声学复杂场景（如金属乐）。b) 结构化渐进式条件：利用歌曲固有的段落结构（主歌、副歌等），将文本和音频token交错排列，以实现长上下文歌词对齐。c) 重新设计的音乐ICL：通过延迟激活策略，实现风格迁移、声音克隆和双向创作，避免“捷径学习”。
3.  创新：首次为歌词到歌曲任务提出并实现了可扩展的、基于LLaMA架构的开源基础模型。双轨预测解决了混合信号建模的瓶颈；结构化条件为超长序列生成提供了有效解决方案；音乐ICL框架超越了传统的单向续写模式。
4.  结果：
    *   主观评估（图3）：在“音乐性”上，YuE与Tiangong和Udio打成平手，击败Hailuo，但落后于Suno V4。
    *   人声敏捷度（图4）：YuE的歌曲级音域（中位数约27半音）接近Suno V4，优于Hailuo和Tiangong。
    *   生成时长（图5）：YuE能生成最长的音频，且时长分布范围最广。
    *   客观指标（表1）：在KL散度（0.372， 最优）和CLaMP3分数（0.240， 最优）上领先，显示其音频分布匹配度和语义对齐能力出色。
    *   消融实验：双轨预测（图7）比标准NTP收敛更快（损失低约0.4）；结构化渐进式条件（图8）在长音频（>60秒）下显著降低歌词错误率（WER）。
5.  意义：为音乐生成领域提供了强大的开源基础模型，推动了该领域的透明化和可复现研究，并证明了开源系统可以达到接近商业产品的水平。
6.  局限：音质（尤其是声学保真度）与顶级闭源系统仍有差距；歌词跟随能力在极端风格下可能退化；训练数据集未公开，限制了完全复现；模型的跨文化、跨语言能力虽被评估但仍有提升空间。

#

---

### 8. [Generative Adversarial Post-Training Mitigates Reward Hacking in Live Human-AI Music Interaction](/audio-paper-digest-blog/posts/2026-05-04-generative-adversarial-post-training-mitigates)

✅ **7.0/10** | 前25% | #音乐生成 | #强化学习 | #对抗训练 #实时处理

👥 **作者与机构**

- 第一作者：Yusong Wu (Mila, Quebec Artificial Intelligence Institute, Université de Montréal)
- 通讯作者：Natasha Jaques (University of Washington), Cheng-Zhi Anna Huang (Massachusetts Institute of Technology)
- 作者列表：Yusong Wu (Mila, Université de Montréal), Stephen Brade (Massachusetts Institute of Technology), Aleksandra Teng Ma (Georgia Institute of Technology), Tia-Jane Fowler (University of Washington), Enning Yang (McGill University), Berker Banar (Independent Researcher), Aaron Courville (Mila, Université de Montréal), Natasha Jaques (University of Washington), Cheng-Zhi Anna Huang (Massachusetts Institute of Technology)

#

💡 **毒舌点评**

亮点：在强化学习后训练中巧妙引入对抗训练思想来解决“奖励黑客”问题，特别是通过一个自适应更新的判别器来平衡“真实感”与任务目标，方案设计精巧且有实验验证。短板：方法的核心创新是将GAN和RL思想结合用于序列模型，这并非完全原创；研究场景（实时旋律-和弦伴奏）非常垂直，其影响力可能局限于音乐生成领域，对更广泛的序列生成任务（如对话）的普适性未得到充分论证。

#

🔗 **开源详情**

- ���码：是。论文提供了代码仓库链接：`https://github.com/lukewys/realchords-pytorch`。
- 模型权重：未明确提及是否公开所有训练阶段（如判别器、奖励模型）的权重，仅提供了代码仓库。
- 数据集：训练使用Hooktheory, POP909, Nottingham。论文未明确说明这些数据集的公开获取方式，但根据引用，它们可能是公开或可申请的。评估使用了公开的Wikifonia子集。
- Demo：是。提供了音频示例网页：`https://realchords-GAPT.github.io`。
- 复现材料：论文附录提供了详细的模型架构（层数、维度等）、训练超参数（学习率、batch size等）、奖励模型性能以及消融实验结果。未提供训练脚本或配置文件。
- 引用的开源项目：论文基于并扩展了ReaLchords (`https://github.com/lukewys/realchords-pytorch`) 的代码库，并使用了LLaMA风格的Transformer架构。

📌 **核心摘要**

1. 要解决什么问题：在基于强化学习的生成式AI后训练中，模型为了最大化奖励会产生重复、单一的输出（奖励黑客）。这在要求实时协作、多样性和创造性的音乐交互（即兴合奏）场景中尤为有害，会破坏创造性流动和用户控制感。
2. 方法核心是什么：提出生成对抗后训练（GAPT），在原有的基于和谐度的任务奖励之外，引入一个同时训练的判别器，该判别器学习区分策略生成的轨迹和真实数据轨迹。策略的奖励变为最大化判别器输出的“真实感”评分（对抗奖励）与任务奖励之和。为稳定训练，采用两阶段自适应判别器更新策略：先预热，后仅在策略有效提升对抗奖励时更新判别器。
3. 与已有方法相比新在哪里：相比于仅使用KL散度约束或熵正则化来缓解奖励黑客的方法，GAPT通过对抗训练提供了一个数据驱动的、动态的正则化信号，迫使策略在优化任务目标时仍保持输出的自然性。该方法专门针对需要实时适应和多样性的交互式生成场景。
4. 主要实验结果如何：
    - 固定旋律模拟：在测试集上，GAPT的和谐度（note-in-chord ratio）为0.497，多样性（Vendi Score）为26.645，相比基线ReaLchords（0.484， 20.968）在保持高和谐度的同时显著提升了多样性。在留外数据集（Wikifonia）上，GAPT也取得了最佳平衡（0.470， 11.295）。
    - 模型交互：与学习的旋律智能体交互时，GAPT同样取得最佳和谐度（0.648）和多样性（12.914）平衡。
    - 真人用户研究：12名专家音乐家在实时交互中，对GAPT模型的“适应速度”和“控制与代理感”评分显著高于ReaLchords（p < 0.05），定性反馈称赞其适应更快、不无聊。
    - 消融实验：验证了对抗奖励、奖励权重、判别器输入形式以及不同RL优化器（如GRPO）下该方法的有效性和鲁棒性。
5. 实际意义是什么：为实时交互式AI音乐创作系统提供了更实用、更具创造性的伴奏模型，提升了人机协作体验。该方法为解决序列生成模型RL后训练中的奖励黑客问题提供了一种简单有效的范式，可能推广到对话、故事生成等其他需要多样性和适应性的领域。
6. 主要局限性是什么：研究聚焦于特定的旋律-和弦伴奏任务，模型架构和训练针对此场景设计。对于更复杂的音乐交互（如多乐器、自由即兴）或通用的文本生成任务，方法的有效性需要进一步验证。判别器训练引入了额外的复杂性和计算开销。

#

---

### 9. [Automatic Stage Lighting Control: Is it a Rule-Driven Process or Generative Task?](/audio-paper-digest-blog/posts/2026-05-04-automatic-stage-lighting-control-is-it-a-rule)

✅ **7.0/10** | 前25% | #音乐生成 | #端到端 | #预训练 #迁移学习

👥 **作者与机构**

- 第一作者：Zijian Zhao（香港科技大学）
- 通讯作者：Xiaoyu Zhang（香港城市大学）
- 作者列表：Zijian Zhao（香港科技大学）、Dian Jin（香港理工大学）、Zijing Zhou（香港大学）、Xiaoyu Zhang（香港城市大学）

💡 **毒舌点评**

亮点：论文开创性地将自动舞台灯光控制（ASLC）从“规则映射”问题重新定义为“生成任务”，并基于BART设计了端到端的Skip-BART模型，其生成效果在人工评估中已接近专业灯光师水平，概念和方法均有新意。短板：尽管开创了新范式，但其构建的RPMC-L2数据集仅包含约700个摇滚/朋克/金属风格的现场演出片段，规模和多样性有限，这严重制约了模型在更广泛音乐类型和复杂舞台场景下的泛化能力上限。

🔗 **开源详情**

- 代码：是，提供完整代码仓库链接：https://github.com/RS2002/Skip-BART
- 模型权重：是，提供训练好的模型参数供下载。
- 数据集：是，提供了处理后的数据集（RPMC-L2）下载链接。
- Demo：论文中未提及在线演示。
- 复现材料：论文在附录中提供了详细的预训练配置（附录A）、实验设置（附录B）和数据集构建细节（附录C），包括所有超参数、损失函数权重和数据处理流程，复现信息非常充分。
- 引用的开源项目：论文依赖并引用了多个开源工具/模型，包括：PianoBART（用于迁移学习的骨干）、OpenL3（音频特征提取）、PyTorch（深度学习框架），以及用于生成对比歌曲的Suno。

📌 **核心摘要**

1.  问题：现有的自动舞台灯光控制（ASLC）大多依赖将音乐分类到有限类别后映射到预设灯光模式，导致结果公式化、单调且缺乏合理性。作者认为灯光控制本质上是艺术创作过程，而非简单的规则映射。
2.  方法：论文首次提出将ASLC视为一个生成任务，并提出了端到端深度学习模型 Skip-BART。该模型以BART为骨干，使用OpenL3提取音频特征，通过离散嵌入处理灯光数据（HSV色彩空间的色相H和明度V）。其核心创新是引入跳连接机制，显式对齐音乐帧与灯光帧，以增强时序对应关系。训练过程采用掩码语言模型（MLM）预训练和端到端微调，并结合了迁移学习（PianoBART）和受限随机温度控制（RSTC）采样。
3.  创新：与传统分类-映射范式相比，新在：(1) 将ASLC建模为序列到序列的生成问题；(2) 设计了包含跳连接的Skip-BART架构；(3) 构建了首个专门的ASLC数据集RPMC-L2。
4.  实验结果：在自建的RPMC-L2数据集上，Skip-BART在定量指标（RMSE, MAE, corr(|Δ|)）上显著优于规则基线方法（见下表）。人工评估（38名参与者）显示，Skip-BART的总体评分（M=4.35）与真实灯光师（M=4.51）无显著差异（p=0.724），但显著高于规则方法（M=2.67，p<0.001）。

| 方法 | RMSE↓ (Hue) | RMSE↓ (Value) | MAE↓ (Hue) | MAE↓ (Value) | corr(|Δ|)↑ (Hue) | corr(|Δ|)↑ (Value) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Rule-based | 48.67 | 93.39 | 43.43 | 86.55 | 0.50 | 0.58 |
| Skip-BART | 36.13 | 60.74 | 28.72 | 51.27 | 0.88 | 2.94 |

5.  实际意义：为舞台灯光自动化提供了更智能、更人性化的新思路，有望降低专业灯光设计的门槛和成本。
6.  局限性：数据集规模有限且风格集中；模型目前仅支持离线单灯光生成；在音乐的长程节奏稳定性和局部波动控制上仍有不足。

---

