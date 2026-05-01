---
title: "ICASSP 2026 - 歌唱语音合成 论文列表"
date: 2026-04-29
draft: false
tags: ["歌唱语音合成"]
categories: [icassp-2026]
description: "共 5 篇 ICASSP 2026 歌唱语音合成 方向论文"
hiddenInHomeList: true
---

# ICASSP 2026 - 歌唱语音合成

共 **5** 篇论文

[← 返回 ICASSP 2026 总览](/audio-paper-digest-blog/posts/icassp2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [SingMOS-Pro: An Comprehensive Benchmark For Singing Quality ](/audio-paper-digest-blog/posts/2026-04-29-singmos-pro-an-comprehensive-benchmark-for) | 7.5分 | 前25% |
| 🥈 | [StylePitcher: Generating Style-Following and Expressive Pitc](/audio-paper-digest-blog/posts/2026-04-29-stylepitcher-generating-style-following-and) | 7.5分 | 前25% |
| 🥉 | [DiTSinger: Scaling Singing Voice Synthesis with Diffusion Tr](/audio-paper-digest-blog/posts/2026-04-29-ditsinger-scaling-singing-voice-synthesis-with) | 7.0分 | 前25% |
| 4. | [Learning Vocal-Tract Area And Radiation With A Physics-Infor](/audio-paper-digest-blog/posts/2026-04-29-learning-vocal-tract-area-and-radiation-with-a) | 7.0分 | 前50% |
| 5. | [PerformSinger: Multimodal Singing Voice Synthesis Leveraging](/audio-paper-digest-blog/posts/2026-04-29-performsinger-multimodal-singing-voice-synthesis) | 4.5分 | 后50% |

---

## 📋 论文详情

### 🥇 [SingMOS-Pro: An Comprehensive Benchmark For Singing Quality Assessment](/audio-paper-digest-blog/posts/2026-04-29-singmos-pro-an-comprehensive-benchmark-for)

✅ **7.5/10** | 前25% | #歌唱语音合成 | #基准测试 | #数据集 #模型评估

👥 **作者与机构**

- 第一作者：Yuxun Tang (中国人民大学)
- 通讯作者：Qin Jin (中国人民大学)
- 作者列表：Yuxun Tang (中国人民大学), Lan Liu (Sun Yat-sen University), Wenhao Feng (中国人民大学), Yiwen Zhao (Carnegie Mellon University), Jionghao Han (Carnegie Mellon University), Yifeng Yu (Georgia Institute of Technology), Jiatong Shi (Carnegie Mellon University), Qin Jin (中国人民大学)

💡 **毒舌点评**

亮点：数据集构建工作堪称“基建狂魔”，从任务、语言、模型、标注维度上实现了对SQA领域前所未有的全面覆盖，为后续研究扫清了最大的障碍——数据。短板：在自动评估模型的创新上略显保守，主要是将语音领域的SSL模型和特征“搬”过来验证，缺乏针对歌唱特有属性（如音高、节奏、气息）的深度建模创新。

🔗 **开源详情**

- 代码：论文中未提及自动评估模型的代码仓库链接。
- 模型权重：未提及公开训练好的评估模型权重。
- 数据集：公开，提供HuggingFace链接：`https://huggingface.co/datasets/TangRain/SingMOS-Pro`。
- Demo：未提及在线演示。
- 复现材料：提供了非常详细的训练超参数（学习率、batch size等）、数据集划分比例、以及依赖的骨干模型名称（wav2vec2-large），具有较高的可复现性。关键训练配置在论文中有说明。
- 引用的开源项目：模型部分引用了大量开源歌唱生成系统（如NNSVS, Diffsinger, VISinger等），评估基线引用了UTMOS，DNSMOS， SHEET-ssqa等开源或公开的模型。音频处理依赖了MelBand Roformer进行人声分离。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

本文针对歌唱语音生成（包括合成、转换、重合成）领域缺乏高效、可靠、统一的自动质量评估方法的问题，提出了一个全面的解决方案：SingMOS-Pro数据集及其基准测试。该数据集的核心是构建了一个包含7,981个歌唱片段（来自12个数据集的41个模型）的大规模语料库，这些片段由经验丰富的标注者在三个维度（整体质量、歌词清晰度、旋律自然性）上进行了超过44,000次评分。与已有工作相比，其新在于：1) 首次提供多任务（SVS/SVC/SVR）、多语言（中文/日文）、多维度（整体/歌词/旋律）的细粒度歌唱MOS数据；2) 系统性地将语音质量评估中常用的自监督学习（SSL）模型（如wav2vec2）应用于歌唱任务，并探索了如何有效利用来自不同标注标准（批次）的训练数据，提出了域标识（Domain ID）和多数据集微调（MDF）两种策略。主要实验结果表明：1) 直接将语音MOS模型（UTMOS, DNSMOS）用于歌唱评估效果不佳，证明了领域差距；2) 在统一的16kHz音频上，采用SSL骨干网络并微调后，系统级加权平均SRCC可达0.77（整体MOS预测），优于仅用预训练版本SingMOS训练的模型（SRCC 0.69），表明更广泛的数据能缓解过拟合；3) 融合音高直方图等特征可带来轻微但有限的性能提升。该工作的实际意义是为歌唱生成技术研究提供了一个标准化的评测平台和数据资源。主要局限性是自动评估模型在旋律、歌词等细粒度维度的预测能力仍有待加强，且新提出的评估模型在创新性上有所不足。

实验结果表1：不同训练数据利用策略下的性能对比（SSL模型）
| D.id | MDF | 语句级SRCC | 系统级SRCC |
| :--- | :--- | :--- | :--- |
| 否 | 否 | 0.50 | 0.77 |
| 是 | 否 | 0.50 | 0.74 |
| 否 | 是 | 0.51 | 0.76 |
| 是 | 是 | 0.52 | 0.75 |
(注：数值为test1/2/3的加权平均，最优值加粗)

实验结果表2：不同模型在SingMOS-Pro上的性能对比
| 模型 | 微调 | 语句级SRCC | 系统级SRCC |
| :--- | :--- | :--- | :--- |
| DNSMOS | 否 | 0.33 | 0.41 |
| UTMOS | 否 | 0.36 | 0.54 |
| SingMOS | 否 | 0.53 | 0.69 |
| SHEET-ssqa | 否 | 0.50 | 0.69 |
| SSL | 是 | 0.50 | 0.77 |
| SSL+PM | 是 | 0.50 | 0.76 |
| SSL+PH | 是 | 0.51 | 0.79 |
(注：数值为test1/2/3的加权平均，最优值加粗)

---

### 🥈 [StylePitcher: Generating Style-Following and Expressive Pitch Curves for Versatile Singing Tasks](/audio-paper-digest-blog/posts/2026-04-29-stylepitcher-generating-style-following-and)

✅ **7.5/10** | 前25% | #歌唱语音合成 | #流匹配 | #音频生成 #语音转换

👥 **作者与机构**

- 第一作者：Jingyue Huang (University of California San Diego, Smule Labs)
- 通讯作者：未说明
- 作者列表：Jingyue Huang（△University of California San Diego, ◦Smule Labs）、Qihui Yang（△University of California San Diego, ◦Smule Labs）、Fei-Yueh Chen（†University of Rochester, ◦Smule Labs）、Julian McAuley（△University of California San Diego）、Randal Leistikow（◦Smule Labs）、Perry R. Cook（◦Smule Labs）、Yongyi Zang（◦Smule Labs）

💡 **毒舌点评**

亮点在于它敏锐地抓住了唱歌音高曲线“既要符合乐谱，又要保留歌手个人风格”这个核心矛盾，并用一个优雅的掩码填充框架将其统一解决，体现了扎实的工程直觉和对音乐的理解。短板是，虽然实验覆盖了多个任务，但其作为“通用模块”的潜力在很大程度上依赖于下游系统本身，论文并未深入探讨在极端风格差异或复杂旋律转移场景下的鲁棒性边界。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：训练数据为DAMP-VSEP和DAMP-VPB，论文未说明其是否公开或获取方式。评测数据集GTSinger, VocalSet等为公开数据集。
- Demo：提供在线演示网站链接：https://stylepitcher.github.io/
- 复现材料：论文提供了详细的模型架构、训练超参数、数据处理步骤和评估方法，复现信息较为充分。
- 论文中引用的开源项目：RMVPE（用于F0估计）、Basic Pitch（用于MIDI提取）、torchdiffeq（用于ODE求解）、FlashAttention-2（用于加速训练）、librosa（用于评估指标计算）。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1.  问题：现有音高曲线生成器存在两大问题：一是忽视了歌手的个人表达风格（如颤音、滑音），导致生成的声音缺乏个性；二是通常为特定任务（如音高校正、歌声合成）设计，作为专用模块，跨任务泛化能力差，需要重新训练。
2.  方法核心：提出StylePitcher，一个通用的风格跟随音高曲线生成器。其核心思想是将音高生成建模为“条件填充”问题：给定周围音高上下文和乐谱符号，模型学习生成缺失的音高片段，使其延续上下文的风格模式。该方法基于校正流匹配（Rectified Flow Matching）架构，使用扩散Transformer（DiT）实现。
3.  新意：它是第一个为多种唱歌任务设计的、通用的风格跟随音高曲线生成模型。创新点在于：首次将流匹配应用于音高生成；引入MIDI平滑算法自动获取可靠乐谱条件；通过掩码填充机制实现零样本风格迁移，无需针对不同任务重新训练。
4.  实验结果：在自动音高校正（APC）、零样本歌声合成（SVS）和歌声转换（SVC）三个任务上进行了评估。
    *   客观评估：在GTSinger数据集上，StylePitcher在风格相似度（LSTM判别器准确率接近随机的50%，为51.85%）和音高准确度（OA为73.04%）上均优于或持平于任务专用基线（Diff-Pitcher: OA 70.30%, Acc. 69.43%）。
    *   主观评估：人类听众评分（MOS）显示，在风格保留/捕捉（MOS-S）和整体质量（MOS-Q）方面，StylePitcher在APC和SVC任务上优于基线；在SVS任务上，其风格捕捉能力（3.33）优于StyleSinger（3.07），质量接近（3.11 vs 3.07）。具体MOS分数见下表。

    | 任务 | 模型 | MOS-P (音高) | MOS-S (风格) | MOS-Q (质量) |
    | :--- | :--- | :--- | :--- | :--- |
    | APC | Diff-Pitcher [4] | 4.18±0.21 | 3.21±0.22 | 3.03±0.22 |
    | | StylePitcher | 3.84±0.22 | 3.64±0.20 | 3.26±0.18 |
    | SVS | StyleSinger [9] | - | 3.07±0.19 | 3.18±0.21 |
    | | StylePitcher | - | 3.33±0.23 | 3.11±0.23 |
    | SVC | In-house SVC | - | 2.62±0.23 | 3.03±0.22 |
    | | StylePitcher | - | 2.95±0.25 | 2.72±0.22 |

5.  实际意义：StylePitcher作为一个即插即用的模块，可以无缝集成到现有的歌声处理系统中，提升其输出的风格表现力和质量，无需为每个新任务或歌手重新训练模型，降低了应用门槛。
6.  主要局限性：在歌声转换（SVC）任务中，由于缺乏对内容（歌词）的显式感知，有时会在转移强烈风格（如颤音）时产生不自然的音频结果（论文中提及）。模型的通用性最终仍受限于其训练数据的覆盖范围。

---

### 🥉 [DiTSinger: Scaling Singing Voice Synthesis with Diffusion Transformer and Implicit Alignment](/audio-paper-digest-blog/posts/2026-04-29-ditsinger-scaling-singing-voice-synthesis-with)

✅ **7.0/10** | 前25% | #歌唱语音合成 | #扩散模型 | #数据增强 #隐式对齐

👥 **作者与机构**

- 第一作者：Zongcai Du（咪咕音乐，中国移动通信集团公司）
- 通讯作者：未说明
- 作者列表：Zongcai Du（咪咕音乐，中国移动通信集团公司）、Guilin Deng（咪咕音乐，中国移动通信集团公司）、Xiaofeng Guo（咪咕音乐，中国移动通信集团公司）、Xin Gao（咪咕音乐，中国移动通信集团公司）、Linke Li（咪咕音乐，中国移动通信集团公司）、Kaichang Cheng（咪咕音乐，中国移动通信集团公司）、Fubo Han（咪咕音乐，中国移动通信集团公司）、Siyu Yang（咪咕音乐，中国移动通信集团公司）、Peng Liu（咪咕音乐，中国移动通信集团公司）、Pan Zhong（咪咕音乐，中国移动通信集团公司）、Qiang Fu（咪咕音乐，中国移动通信集团公司）

#

💡 **毒舌点评**

亮点： 论文提出了一套精巧的“PseudoSinger”数据构建流程，用“固定旋律+LLM生成歌词”的方式规模化生产高质量训练数据，从根源上缓解了SVS领域的数据饥渴问题。短板： 作为核心模型的DiTSinger，其架构本质是DiT在音频领域的直给式应用，隐式对齐机制是主要的架构创新，但整体模型设计的“性感”程度和理论深度稍显不足，更像是一项扎实的工程优化而非范式突破。

#

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：论文中构建了大规模数据集，但未提及是否公开或如何获取。
- Demo：提供在线演示链接：https://nju-jet.github.io/DiTSinger/。
- 复现材料：论文中给出了主要的训练设置（GPU型号、数量、优化器、学习率、batch size、训练步数、数据比例等），但模型具体配置（如各变体的确切层数、宽度表）和部分训练细节（如学习率调度、精确的推理步数）未完全公开。
- 论文中引用的开源项目：DiffSinger、StyleSinger、TCSinger、M4Singer、HiFi-GAN、DPM-Solver。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

这篇论文旨在解决歌唱语音合成（SVS）领域面临的训练数据稀缺和对齐标签依赖两大挑战。
论文方法的核心包含两部分：1）提出一个两阶段的数据构建管道，通过固定旋律并利用大语言模型（LLM）生成多样歌词，先训练“PseudoSinger”模型，再用其合成大规模（500小时）数据，显著扩充了训练语料。2）设计了DiTSinger模型，一个基于扩散Transformer（DiT）的潜在扩散模型，并引入了一个隐式对齐机制，通过限制音素注意力范围来消除对显式音素时长标注的依赖。
与已有方法相比，新在：a) 首次在SVS领域系统性地构建了用于模型训练的大规模合成数据管道；b) 将可扩展的DiT架构引入SVS，并验证了模型和数据的规模效应；c) 提出了一种不依赖显式时长标签的隐式对齐方法，提升了鲁棒性。
主要实验结果显示，随着模型规模（从Small到Large）和训练数据量（从30h到530h）的增加，合成质量（以MCD衡量）持续提升（见图3）。最终的DiTSinger L2模型在MOS（4.02）上超过了DiffSinger（3.80）、StyleSinger（3.62）和TCSinger（3.89），同时在F0RMSE（11.18 Hz）等客观指标上也取得了最优结果（见表2）。
该工作的实际意义在于提供了一条可扩展的、减少人工标注依赖的高质量歌唱数据合成与模型训练路径。其主要局限性在于：研究仅限于中文数据集，且模型忽略了如演唱技巧等更复杂的风格因素。

#

---

### 4. [Learning Vocal-Tract Area And Radiation With A Physics-Informed Webster Model](/audio-paper-digest-blog/posts/2026-04-29-learning-vocal-tract-area-and-radiation-with-a)

✅ **7.0/10** | 前50% | #歌唱语音合成 | #信号处理 | #物理信息神经网络 #语音合成

👥 **作者与机构**

- 第一作者：Minhui Lu（Queen Mary University of London, Centre for Digital Music）
- 通讯作者：未说明（论文中未明确标注通讯作者，但根据常见惯例，第一作者或最后作者可能是。此处严格按论文内容判断，未明确提及。）
- 作者列表：Minhui Lu（Queen Mary University of London, Centre for Digital Music）、Joshua D. Reiss（Queen Mary University of London, Centre for Digital Music）

💡 **毒舌点评**

亮点：论文将经典的Webster声学方程与物理信息神经网络（PINN）结合，不仅学习了声道面积函数，还创新性地引入了可学习的端口辐射边界条件，为语音合成提供了高度可解释的物理控制参数。短板：然而，整个实验建立在合成的、高度理想化的稳态元音数据上，缺乏对真实歌唱语音的验证；其宣称的“物理可解释性”参数（如辐射系数ζ）在实际复杂声源和噪声环境下的鲁棒性与可区分性存疑。

🔗 **开源详情**

- 代码：论文中提及“代码和音频示例可在项目页面获取”，并给出了URL：https://minhuilu.github.io/webster-pinn-svs/。但未明确说明是否包含完整训练和评估代码。
- 模型权重：未提及是否公开。
- 数据集：论文使用的训练数据为作者自己合成的，未说明是否公开合成脚本或数据本身。
- Demo：提供了项目页面链接，可能包含音频示例demo。
- 复现材料：论文中提及“权重调度和归一化细节在发布代码中指定”，表明部分训练细节需要在代码中查找。未提供详细的超参数列表、训练日志等。
- 论文中引用的开源项目：未明确列出依赖的第三方开源项目，但技术栈隐含了使用SIREN、DDSP等已有概念或库。

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

1. 要解决什么问题：现有歌唱语音合成（SVS）的后端渲染器（如神经声码器）参数纠缠、可解释性差，且难以对音色、发音进行精细控制。论文旨在构建一个基于物理模型的渲染器，从音频中反演出可解释的声学控制参数。
2. 方法核心是什么：提出一个基于Webster时域方程的物理信息神经网络（PINN）。该网络（DualNet）同时预测声速势场ψ(x,t)、静态声道面积函数Â(x)和一个可学习的开口端Robin辐射系数ζ。训练时结合PDE/BC残差损失与音频损失，并辅助以一个仅用于训练的轻量级DDSP路径来稳定学习；推理时完全基于物理方程进行渲染。
3. 与已有方法相比新在哪里：1) 联合估计：首次在PINN框架下，同时从音频中反演声道几何形状（A(x)）和显式可学习的边界条件（ζ）。2) 训练-推理分离：训练时可使用神经网络辅助，但推理时是纯粹的、与离散化无关的物理求解器，增强了模型的可解释性和可控性。3) 离图评估：提出使用独立的FDTD求解器对恢复的参数进行后渲染，以验证其作为可迁移物理控制量的有效性，减少了“逆犯罪”风险。
4. 主要实验结果如何：在合成的/a/, /i/, /u/元音上测试。核心结果：将估计的(Â, ζ)导出到独立FDTD求解器后，其渲染波形的频谱包络（LSD）相比DDSP基线在/a/和/u/上降低了6-9 dB，效果接近参考信号。然而，在图PINN渲染的波形周期性（HNR）比参考和后渲染结果低2-4 dB，存在明显的“周期性差距”（breathiness）。恢复的Â(x)捕捉了元音相关的宏观趋势，但细部模糊。
    关键结果表（来自Table 2 & Table 3）：
    | 元音 | PINN (post-render) mSTFT ↓ | DDSP-only mSTFT ↓ | PINN (in-graph) mSTFT ↓ |
    | :--- | :--- | :--- | :--- |
    | /a/ | 1.292 | 2.749 | 6.046 |
    | /i/ | 3.295 | 2.097 | 6.363 |
    | /u/ | 1.846 | 2.988 | 6.413 |

    | 元音 | Ref. HNR | PINN (post-render) HNR | DDSP-only HNR | PINN (in-graph) HNR |
    | :--- | :--- | :--- | :--- | :--- |
    | /a/ | 8.439 | 8.449 | 8.434 | 2.827 |
    | /i/ | 9.225 | 7.806 | 6.833 | 4.243 |
    | /u/ | 7.901 | 7.803 | 7.664 | 2.284 |
5. 实际意义是什么：该研究为语音合成探索了一条“白盒”路径，有望实现对合成声音音色（声道形状）和发音位置（辐射特性）的精细、可解释的控制，对于需要高可控性的专业语音合成（如角色扮演、语音治疗）有潜在价值。
6. 主要局限性是什么：1) 数据局限：仅在合成的、干净的、稳态元音上验证，未涉及真实录音、辅音、动态语流。2) 可辨识性问题：从单通道音频反推声道形状本身是病态问题，恢复的A(x)和ζ可能不唯一，论文也承认其为“频谱等效控制”而非真实解剖结构。3) 周期性缺陷：在图渲染存在系统性问题，表明当前的物理损失与音频损失组合不足以约束出精确的准周期激励。4) 评估不足：未与完整的SVS系统对比，实际应用性能未知。

---

### 5. [PerformSinger: Multimodal Singing Voice Synthesis Leveraging Synchronized Lip Cues from Singing Performance Videos](/audio-paper-digest-blog/posts/2026-04-29-performsinger-multimodal-singing-voice-synthesis)

📝 **4.5/10** | 后50% | #歌唱语音合成 | #多模态模型 | #音视频

👥 **作者与机构**

- 第一作者：未说明
- 通讯作者：未说明
- 作者列表：未说明

💡 **毒舌点评**

用唱歌视频的唇部动态来指导歌唱合成，这个多模态想法确实新颖，理论上能提升口型同步和表现力。但问题在于，仅凭标题我们对方法实现一无所知，更不知道实验效果是否真的‘Perform’了，这种‘黑箱’分析风险很高。

🔗 **开源详情**

代码：论文中未提及代码链接
模型权重：未提及
数据集：未提及
Demo：未提及
复现材料：论文中未提及
论文中引用的开源项目：未说明

---

[← 返回 ICASSP 2026 论文分析](/audio-paper-digest-blog/posts/icassp2026-summary/)

📌 **核心摘要**

这篇论文旨在解决传统歌唱语音合成（SVS）方法大多依赖音频或文本输入，缺乏对真实演唱中视觉动态（如唇部动作）的利用，可能导致合成结果在口型同步和表现力上存在不足的问题。其方法核心是提出一个多模态框架，直接从歌手表演视频中提取并利用同步的唇部线索（Lip Cues）作为条件来引导歌唱语音的生成。与已有方法相比，其新意在于将视觉模态（特别是唇部动态）作为一种强条件信号引入SVS任务，而不仅仅依赖于音频特征或乐谱。论文中未提供具体的实验结果数值和对比数据。该研究的实际意义在于可能为虚拟歌手、数字人演唱、歌曲创作等应用场景提供更自然、更具表现力的合成技术。由于提供的文本信息极其有限，论文的主要局限性完全未知，包括方法细节、实验设计、性能表现、数据规模及通用性等均未说明。

---

