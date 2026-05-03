---
title: "ICLR 2026 - 音乐理解 论文列表"
date: 2026-05-04
draft: false
tags: ["音乐理解"]
categories: [iclr-2026]
description: "共 3 篇 ICLR 2026 音乐理解 方向论文"
hiddenInHomeList: true
---

# ICLR 2026 - 音乐理解

共 **3** 篇论文

[← 返回 ICLR 2026 总览](/audio-paper-digest-blog/posts/iclr2026-summary/)

---

| 排名 | 论文 | 评分 | 分档 |
|------|------|------|------|
| 🥇 | [LadderSym: A Multimodal Interleaved Transformer for Music Pr](/audio-paper-digest-blog/posts/2026-05-04-laddersym-a-multimodal-interleaved-transformer) | 8.5分 | 前10% |
| 🥈 | [Music Flamingo: Scaling Music Understanding in Audio Languag](/audio-paper-digest-blog/posts/2026-05-04-music-flamingo-scaling-music-understanding-in) | 8.0分 | 前25% |
| 🥉 | [LLM2Fx-Tools: Tool Calling for Music Post-Production](/audio-paper-digest-blog/posts/2026-05-04-llm2fx-tools-tool-calling-for-music-post) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [LadderSym: A Multimodal Interleaved Transformer for Music Practice Error Detection](/audio-paper-digest-blog/posts/2026-05-04-laddersym-a-multimodal-interleaved-transformer)

🔥 **8.5/10** | 前10% | #音乐理解 | #多模态模型 | #音频分类 #数据集

👥 **作者与机构**

- 第一作者：Benjamin Shiue-Hal Chou（Purdue University， 根据作者列表顺序和邮箱判断）
- 通讯作者：未明确说明（所有作者邮箱均为`@purdue.edu`或`@cs.luc.edu`，但未明确标注通讯作者。论文首页提供的联系邮箱`chou150@purdue.edu`为第一作者邮箱，可能承担通讯职责，但未正式标注）
- 作者列表：
    - Benjamin Shiue-Hal Chou（Purdue University）
    - Purvish Jajal（Purdue University）
    - Nicholas John Eliopoulos（Purdue University）
    - James C. Davis（Purdue University）
    - George K. Thiruvathukal（Loyola University Chicago）
    - Kristen Yeon-Ji Yun（Purdue University）
    - Yung-Hsiang Lu（Purdue University）

💡 **毒舌点评**

亮点：该工作的动机非常清晰，直指现有SOTA（Polytune）在“流间对齐”和“符号信息利用”上的两个短板，并用精心设计的“Ladder”编码器和“Sym”提示策略有效地解决了它们，在关键指标上实现了倍数级的提升，是问题驱动型创新的典范。
短板：将乐谱的符号信息仅作为解码器提示（Prompt）输入，这种融合方式相对“简单”，论文也承认其改进在部分数据集上存在饱和现象，暗示这种设计可能并非最优解；此外，模型对实时性和大规模实际部署（如移动端应用）的考量较少。

🔗 **开源详情**

- 代码：是，提供了GitHub仓库链接：`https://github.com/ben2002chou/LadderSYM`。
- 模型权重：论文中未明确提及是否公开预训练模型权重。
- 数据集：
    - 合成数据集（MAESTRO-E, CocoChorales-E）：论文指出是公开可用的（`publicly available`）。
    - 真实世界数据集：论文中描述了其构成和收集过程，并称其为“largest publicly available set of authentic beginner errors”，但未明确说明具体的公开获取方式（可能需要联系作者或遵循特定协议）。
- Demo：是，论文提供了演示示例页面（`our demo page`， 但未给出具体URL）。
- 复现材料：非常充分。包括详细的训练配置（表7）、损失函数权重、数据增强方法、硬件环境、评估指标、以及在附录中补充的统计检验结果和种子管理代码。
- 论文中引用的开源项目：
    - MT3 (Gardner et al., 2022)：用于音频tokenization和显式对齐基线。
    - MIDI-DDSP (Wu et al., 2022)：用于从MIDI合成音频。
    - EfficientTTMs (Jajal et al., 2024)：借鉴了部分模型组件代码（MIT协议）。
    - Polytune (Chou et al., 2025)：作为对比基线和部分训练配置的参考（BSD 3-Clause，非商业）。

📌 **核心摘要**

本文提出LadderSym，一种用于音乐练习错误检测的多模态Transformer模型。该任务旨在通过对比参考乐谱与练习录音，检测出漏弹、多弹和错弹的音符。针对现有方法（如Polytune）存在的两个关键问题：1）后期融合限制了音频流间的细粒度对齐；2）将乐谱仅表示为音频引入了频率歧义（尤其在和弦处）。LadderSym提出了两个核心改进：1）Ladder编码器：一种双流编码器，在每个Transformer层前插入交叉注意力模块，实现频繁的跨流对齐，同时保持各流特征提取的专一性；2）Sym提示：将符号乐谱（MIDI）作为提示输入解码器，为模型提供无歧义的参考信息。在MAESTRO-E和CocoChorales-E数据集上的实验表明，LadderSym在漏弹和多弹音符的检测F1上大幅超越了先前SOTA，其中在MAESTRO-E上漏弹F1从26.8%提升至56.3%，多弹F1从72.0%提升至86.4%。模型还在作者新构建的真实世界初学者数据集上验证了良好的泛化能力。该工作的架构设计原则可为其他序列对比任务（如强化学习评估）提供借鉴。主要局限性包括对极端节奏变化的适应性有限，以及在极度密集和声中漏检仍是挑战。

#

---

### 🥈 [Music Flamingo: Scaling Music Understanding in Audio Language Models](/audio-paper-digest-blog/posts/2026-05-04-music-flamingo-scaling-music-understanding-in)

🔥 **8.0/10** | 前25% | #音乐理解 | #强化学习 | #音频大模型 #数据集

👥 **作者与机构**

- 第一作者：Sreyan Ghosh（马里兰大学 College Park, NVIDIA）
- 通讯作者：Sreyan Ghosh (sreyang@umd.edu), Arushi Goel (arushig@nvidia.com)
- 作者列表：Sreyan Ghosh¹², Arushi Goel¹, Lasha Koroshinadze²**, Sang-gil Lee¹, Zhifeng Kong¹, Joao Felipe Santos¹, Ramani Duraiswami², Dinesh Manocha², Wei Ping¹, Mohammad Shoeybi¹, Bryan Catanzaro¹
  - ¹ NVIDIA, CA, USA
  - ² University of Maryland, College Park, USA
  -  为共同第一作者，* 表示有重大技术贡献。

💡 **毒舌点评**

亮点：论文直击当前音频语言模型在音乐理解上的“浅尝辄止”问题，通过构建极具深度和音乐理论指导的MF-Skills数据集与MF-Think思维链数据集，系统性地将模型能力从“表面特征识别”推向“分层、推理式”的音乐分析，且最终在多项SOTA上取得了显著提升，证明了数据驱动范式在垂直领域的重要性。
短板：模型核心架构仍是对Audio Flamingo 3的增强和微调，缺乏根本性的架构创新；此外，其强大的表现高度依赖于精心构建的大规模高质量数据集，这在一定程度上限制了其可复现性和在资源受限场景下的应用潜力。

🔗 **开源详情**

- 代码：论文明确声明将在论文被接收后开源所有代码，仓库链接为 https://research.nvidia.com/labs/adlr/MF/。
- 模型权重：论文明确声明将开源训练好的Music Flamingo模型权重。
- 数据集：论文明确声明将开源本文提出的MF-Skills和MF-Think两个数据集。
- Demo：论文中未提及在线演示链接。
- 复现材料：提供了完整的训练配方（各阶段超参数见附录D表3）、数据集详细构成（附录C表2）、评估协议与Prompt（附录E、F、G）、线性探测实验细节（附录G）。
- 引用的开源项目/工具：论文依赖并提到了多个开源工具和模型，包括：madmom（节拍检测）、essentia（调性分析）、Chordino（和弦识别）、NVIDIA Parakeet（歌词转录）、OpenAI的gpt-oss-120b（用于生成标注和推理链）、Whisper（音频编码器基础）、Audio Flamingo系列（架构基础）、GRPO算法（强化学习）。

📌 **核心摘要**

1. 要解决什么问题：现有音频语言模型（ALMs）在音乐理解方面表现肤浅，局限于简短描述和表面问答，缺乏对音乐分层结构（和声、结构、歌词、文化背景）的深度推理能力，主要瓶颈在于高质量、大规模、覆盖多元文化的音乐数据稀缺。
2. 方法核心是什么：提出Music Flamingo模型。其核心方法包含：a) 构建大规模、多层次标注的音乐数据集MF-Skills（400万+样本）；b) 改进Audio Flamingo 3骨干网络，增强其多语言ASR和音频推理能力；c) 引入MF-Think思维链数据集进行推理能力冷启动训练；d) 使用带有自定义奖励函数（格式奖励、准确性奖励、结构化思考奖励）的GRPO强化学习进行后训练，以激发逐步音乐推理能力。
3. 与已有方法相比新在哪里：不同于以往模型使用短小、表面化的音乐数据，本文构建了专注于全曲、多层次（音调、和声、结构、歌词、文化）标注的数据集MF-Skills；不同于常规微调，本文提出了结合思维链（CoT）冷启动与强化学习（GRPO）的“推理后训练”范式，明确鼓励模型生成类似音乐家的分步推理过程。
4. 主要实验结果如何：Music Flamingo在12个音乐理解和推理基准测试上取得SOTA。关键结果包括：在MMAU-Music上准确率达76.83%；在更具挑战的MuChoMusic上达74.58%；在中文歌词转录Opencpop上WER降至12.9%（远低于GPT-4o的53.7%）；其生成的音乐描述在自建SongCaps基准上获得8.3的人工评分（超越Audio Flamingo 3的6.5）。具体结果对比如下表所示：

| 任务 | 数据集 | 模型 | 指标 | 结果 |
| :--- | :--- | :--- | :--- | :--- |
| 音乐问答与推理 | MMAU (Music) | Audio Flamingo 3 | ACC ↑ | 73.95 |
| | | Music Flamingo | | 76.83 |
| | MMAU-Pro-Music | Gemini-2.5 Flash | ACC ↑ | 64.90 |
| | | Music Flamingo | | 65.60 |
| | MuChoMusic | Qwen3-O | ACC ↑ | 52.10 |
| | | Music Flamingo | | 74.58 |
| | MMAR (Music) | Qwen2.5-O | ACC ↑ | 46.12 |
| | | Music Flamingo | | 48.66 |
| 音乐信息检索 | NSynth (Instrument) | Audio Flamingo 3 | ACC ↑ | 78.90 |
| | | Music Flamingo | | 80.76 |
| | GTZAN (Genre) | Pengi | ACC ↑ | 80.00 |
| | | Music Flamingo | | 84.45 |
| | Medley-Solos-DB | Audio Flamingo 2 | ACC ↑ | 85.80 |
| | | Music Flamingo | | 90.86 |
| 歌词转录 | Opencpop (中文) | GPT-4o | WER ↓ | 53.7 |
| | | Music Flamingo | | 12.9 |
| | MUSDB18 (英文) | GPT-4o | WER ↓ | 32.7 |
| | | Music Flamingo | | 19.6 |
| 音乐描述 (SongCaps) | | Audio Flamingo 3 | 人工评分 (1-10) ↑ | 6.5 |
| | | Music Flamingo | | 8.3 |

![音频语言模型音乐描述对比图](icassp-img://RS7T9S16Bl/0.png)
图1：Music Flamingo与Audio Flamingo 3、Qwen3-Omni对两首不同风格歌曲的描述对比。Music Flamingo的描述更详细、多层次，整合了理论分析。

5. 实际意义是什么：推动了音频语言模型从通用音频理解向垂直、深度音乐理解迈进，展示了如何通过专门的数据构建和训练策略让模型产生更像人类音乐家的分析性输出，为音乐教育、推荐、创作辅助等应用提供了更强大的基础模型。
6. 主要局限性：a) 对代表性不足的音乐传统理解仍有不足；b) 在一些专项任务（如精细钢琴技法识别）上存在差距；c) 性能严重依赖大规模高质量标注数据，数据获取与标注成本高昂。

---

### 🥉 [LLM2Fx-Tools: Tool Calling for Music Post-Production](/audio-paper-digest-blog/posts/2026-05-04-llm2fx-tools-tool-calling-for-music-post)

✅ **7.5/10** | 前25% | #音乐理解 | #大语言模型 #工具调用 | #大语言模型 #工具调用

👥 **作者与机构**

- 第一作者：SeungHeon Doh (KAIST, Sony AI)
- 通讯作者：未说明（论文未明确指定通讯作者）
- 作者列表：SeungHeon Doh¹², Junghyun Koo², Marco A. Martínez-Ramírez², Woosung Choi², Wei-Hsiang Liao², Qiyu Wu³, Juhan Nam¹, Yuki Mitsufuji²³
- 机构：¹KAIST， ²Sony AI， ³Sony Group Corporation

💡 **毒舌点评**

论文最大的亮点在于首次系统性地将LLM的工具调用（Tool Calling）能力引入到非可微分音频效果链的生成任务中，并为此设计了专门的链式思维（CoT）推理过程和大规模合成数据集，使得黑盒效果器的自动化应用变得可能且可解释。但短板也很明显：它本质上是一个针对特定垂直领域（音乐效果器参数估计）的“应用集成”工作，将LLM当作复杂的映射函数和规划器，并未解决音乐生成或理解中的更根本性问题；此外，整个训练和评估严重依赖于合成数据，其在真实、复杂、多轨混音场景下的有效性存疑。

🔗 **开源详情**

- 代码：论文中未提及代码开源链接。提供了Demo页面：https://seungheondoh.github.io/llm2fx-tools-demo/
- 模型权重：未提及。
- 数据集：公开了LP-Fx数据集的生成流程、统计信息和部分样本，但具体数据集下载方式需查看Demo或项目主页（论文未直接提供链接）。
- Demo：提供了在线演示链接。
- 复现材料：在论文附录中提供了详细的数据生成提示词、评估提示词和参数采样范围，有助于复现数据生成和评估流程。训练超参数在正文中有说明。
- 论文中引用的开源项目：Pedalboard（音频效果器库）、dasp-pytorch（可微分音频效果器，用于基线对比）。

📌 **核心摘要**

1. 解决的问题：音乐后期制作中，从干声（dry）和湿声（wet）反向推导出音频效果链（Fx-chain）及其参数，传统方法缺乏灵活性（依赖可微分模块或固定配置）和可解释性。
2. 方法核心：提出LLM2Fx-Tools，一个多模态大语言模型框架。它接收文本指令、干声和湿声作为输入，通过LLM进行链式思维（CoT）推理，规划出效果器选择、顺序和参数估计，然后生成结构化的工具调用（Tool Calling）序列来执行该效果链。
3. 与已有方法相比新在哪里：a) 首次将LLM工具调用应用于音频效果链生成，能处理非可微分效果器。b) 利用CoT进行分步推理（分析输入->选择效果器->确定顺序->规划参数），提升了可解释性和规划能力。c) 扩展为多模态任务，支持自然语言指令控制（如指定效果器类型）。d) 构建了首个大规模指令跟随数据集LP-Fx（10.1万条）。
4. 主要实验结果：
    - 反向工程任务：在效果器分类准确率上达到80%（最强基线MultiTask为61%），顺序相关系数0.56（MultiTask为0.00），参数MAE为0.23（回归基线为0.20）。在感知距离（MRS）和嵌入相似度上也优于多数基线。
    - 风格迁移任务（盲估计）：在DSP特征距离（AF 7.41）和嵌入相似度上取得最佳结果。
    - 主观评估（MUSHRA）：LLM2Fx-Tools得分（62.8）显著高于DeepAFx-ST（54.8）和Gemini 2.5 Flash（56.5），且p<0.05。
    - 自然语言生成：工具调用成功率99.8%，指令跟随和CoT质量评分（3.50， 3.05）均优于或持平闭源模型Gemini 2.5 Flash。
    - 关键消融实验表明，CoT、NTL损失和多阶段训练（MST）都对性能有显著贡献。
5. 实际意义：为音乐制作人提供了一个可解释、可对话的音频效果处理助手，降低了效果链设计的技术门槛，为生成式音频后期制作提供了新思路。
6. 主要局限性：a) 可解释性依赖于预处理得到的“伪干声”。b) 存在一对多映射的歧义性。c) 实验仅限于单乐器源，未验证多轨复杂场景。d) 对训练分布外的音频效果器模块泛化能力未经测试。

---

