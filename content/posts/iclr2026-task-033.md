---
title: "ICLR 2026 - 音乐理解 论文列表"
date: 2026-05-03
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
| 🥇 | [LadderSym: A Multimodal Interleaved Transformer for Music Pr](/audio-paper-digest-blog/posts/2026-05-03-laddersym-a-multimodal-interleaved-transformer) | 8.5分 | 前25% |
| 🥈 | [LLM2Fx-Tools: Tool Calling for Music Post-Production](/audio-paper-digest-blog/posts/2026-05-03-llm2fx-tools-tool-calling-for-music-post) | 8.0分 | 前25% |
| 🥉 | [Music Flamingo: Scaling Music Understanding in Audio Languag](/audio-paper-digest-blog/posts/2026-05-03-music-flamingo-scaling-music-understanding-in) | 7.5分 | 前25% |

---

## 📋 论文详情

### 🥇 [LadderSym: A Multimodal Interleaved Transformer for Music Practice Error Detection](/audio-paper-digest-blog/posts/2026-05-03-laddersym-a-multimodal-interleaved-transformer)

🔥 **8.5/10** | 前25% | #音乐理解 | #多模态模型 | #Transformer #模型评估

👥 **作者与机构**

- 第一作者：Benjamin Shiue-Hal Chou (Purdue University)
- 通讯作者：未明确说明（论文中未明确标注通讯作者）
- 作者列表：Benjamin Shiue-Hal Chou（Purdue University）、Purvish Jajal（Purdue University）、Nick John Eliopoulos（Purdue University）、James C. Davis（Purdue University）、George K. Thiruvathukal（Loyola University Chicago）、Kristen Yeon-Ji Yun（Purdue University）、Yung-Hsiang Lu（Purdue University）

#

💡 **毒舌点评**

亮点：论文巧妙地通过“交错对齐模块”将多模态融合解耦为对齐和特征提取两个清晰任务，这种基于设计原则而非单纯堆叠参数的思路值得称道，其在MAESTRO-E上将漏检音符F1翻倍的实绩也证明了有效性。短板：尽管模型性能提升显著，但核心创新本质上是两个相对“工程化”的模块（交错注意力+符号拼接）的组合，且论文中真实世界数据集的规模与复杂性（仅20首简单曲目）与其宣称的“目前最大”真实数据集之间存在一定反差，说服力打了折扣。

#

🔗 **开源详情**

- 代码：论文中提供了代码仓库链接：`https://github.com/ben2002chou/LadderSYM`。
- 模型权重：论文中未明确提及是否公开预训练模型权重。
- 数据集：论���中提及使用并评估了MAESTRO-E和CocoChorales-E公开数据集（源自Chou et al., 2025）。同时，论文自行收集并标注了一个真实世界初学者钢琴演奏数据集，并在附录A.7中详细描述了其构成，论文暗示该数据集将公开。
- Demo：论文中提到提供了模型输出的演示示例页面（`our demo page`），但未给出具体链接。
- 复现材料：论文附录提供了极其详尽的复现信息，包括：
    - 超参数表（表7）
    - 训练细节（§A.4）
    - 评估指标定义（§A.5）
    - 数据集生成算法（算法1）
    - 种子管理代码片段（§A.12）
- 论文中引用的开源项目：
    - MT3 (Gardner et al., 2022)：用于音频输入和输出的tokenization方案。
    - EfficientTTMs (Jajal et al., 2024)：提供了部分模型组件代码（MIT协议）。
    - Polytune (Chou et al., 2025)：作为基线模型和训练方案的参考（BSD 3-Clause，非商业用途）。
    - MIDI-DDSP (Wu et al., 2022)：用于从MIDI合成音频以创建训练数据。
    - mir_eval (Raffel et al., 2014)：用于计算F1重叠分数。
    - PyTorch Lightning：用于管理训练和设置随机种子。
    - Hugging Face Transformers：模型实现基于T5等组件。
- 其他：论文中未提及开源计划外的其他信息。

📌 **核心摘要**

这篇论文旨在解决音乐练习中自动检测错误（漏音、多音、错音）的难题。其核心是提出LadderSym模型，通过两个关键创新应对现有方法的局限：一是设计“Ladder”交错编码器，在每一层通过交叉注意力模块实现练习音频流与乐谱音频流之间的频繁、细粒度对齐，克服了现有晚期融合方法对齐能力不足的问题；二是引入多模态策略，将符号化的乐谱作为提示输入解码器，为模型提供明确、无歧义的参考信息，从而解决了仅用音频表示乐谱时因音符重叠导致的歧义。在MAESTRO-E数据集上，相比前SOTA模型Polytune，LadderSym将漏检音符的F1分数从26.8%大幅提升至56.3%，额外音符检测F1从72.0%提升至86.4%；在CocoChorales-E数据集上，漏检和额外音符F1分别从51.3%和46.8%提升至61.7%和61.4%。此外，论文还收集了一个小型真实世界初学者演奏数据集进行验证。该工作的实际意义在于为音乐学习者提供了更精准的反馈工具，其提出的跨模态对齐和评估原则也可能启发强化学习奖励建模等其他序列评估任务。主要局限性包括：对密集和声场景下的漏检音符检测仍具挑战；模型对大幅速度偏差的鲁棒性有限；真实世界评估数据集的规模和多样性有待扩展。

#

---

### 🥈 [LLM2Fx-Tools: Tool Calling for Music Post-Production](/audio-paper-digest-blog/posts/2026-05-03-llm2fx-tools-tool-calling-for-music-post)

🔥 **8.0/10** | 前25% | #音乐理解 | #大语言模型 | #音频大模型 #多模态模型

👥 **作者与机构**

- 第一作者：SeungHeon Doh（KAIST，同时曾于Sony AI实习）
- 通讯作者：未说明
- 作者列表：SeungHeon Doh（KAIST；Sony AI），Junghyun Koo（Sony AI），Marco A. Martínez-Ramírez（Sony AI），Woosung Choi（Sony AI），Wei-Hsiang Liao（Sony AI），Qiyu Wu（Sony Group Corporation），Juhan Nam（KAIST），Yuki Mitsufuji（Sony AI；Sony Group Corporation）

💡 **毒舌点评**

亮点在于将LLM强大的指令跟随、链式思维和工具调用能力首次系统性地引入音频效果链生成这一专业领域，实现了从“黑盒”参数预测到“可解释、可控”规划的范式转变，数据集LP-Fx也具备很高价值。短板是验证场景局限于单乐器干湿音频对，且预处理的“伪干音”引入了隐含偏差，距离直接处理真实混音中的复杂信号还有明显差距。

🔗 **开源详情**

- 代码：论文中未提及代码链接。
- 模型权重：未提及。
- 数据集：LP-Fx数据集已公开，论文提供了详细描述和获取信息（但具体链接需查看论文补充材料或作者主页，此处基于论文文本判断为已公开）。
- Demo：论文提供了演示���接：https://seungheondoh.github.io/llm2fx-tools-demo/。
- 复现材料：论文附录包含了详细的任务定义、数据生成流程、评估指标公式、参数采样范围（表6）和评估用的完整提示词（Prompt），为复现提供了详尽指导。
- 论文中引用的开源项目：Pedalboard音频效果库、dasp-pytorch（可微分DSP）、MedleyDB数据集、MoisesDB数据集。

📌 **核心摘要**

本文针对音乐后期处理中，从参考音频反推或生成应用的音频效果链（Fx-chain）这一任务，提出了LLM2Fx-Tools框架。该框架的核心是利用多模态大语言模型（LLM），结合链式思维（CoT）规划，理解音频输入，选择音频效果模块、确定顺序并估计参数，最终输出可执行的工具调用序列。与传统基于回归或可微分优化的固定方法相比，本方法实现了动态的效果选择、顺序确定以及用户可读的推理过程，提供了前所未有的灵活性和可解释性。为支持该框架，作者构建了LP-Fx数据集，包含超过10万条带有结构化CoT标注和工具调用的对话数据。实验表明，在反向工程任务中，LLM2Fx-Tools在效果分类准确率（80%）、顺序相关性（Spearman ρ=0.56）和感知距离（L/R MRS: 3.13）上优于多个基线。在跨数据集的音频效果风格迁移任务中，该方法也取得了最佳的DSP特征距离和嵌入相似度。此外，LLM-as-a-Judge评估显示模型在指令遵循和CoT质量上表现优异。该工作的实际意义在于为音乐制作提供了可解释、可控的AI辅助工具；其主要局限性在于目前验证局限于单乐器源，且预测结果相对于经过预处理（Fx-Removal和Fx-Normalization）的“伪干音”进行解释。

---

### 🥉 [Music Flamingo: Scaling Music Understanding in Audio Language Models](/audio-paper-digest-blog/posts/2026-05-03-music-flamingo-scaling-music-understanding-in)

✅ **7.5/10** | 前25% | #音乐理解 | #强化学习 | #数据集 #音频大模型

👥 **作者与机构**

- 第一作者：Sreyan Ghosh（University of Maryland, College Park 与 NVIDIA 共同贡献）
- 通讯作者：Arushi Goel (arushig@nvidia.com), Sreyan Ghosh (sreyang@umd.edu)
- 作者列表：Sreyan Ghosh（University of Maryland, College Park, NVIDIA）， Arushi Goel（NVIDIA）， Lasha Koroshinadze（University of Maryland, College Park）， Sang-gil Lee（NVIDIA）， Zhifeng Kong（NVIDIA）， Joao Felipe Santos（NVIDIA）， Ramani Duraiswami（University of Maryland, College Park）， Dinesh Manocha（University of Maryland, College Park）， Wei Ping（NVIDIA）， Mohammad Shoeybi（NVIDIA）， Bryan Catanzaro（NVIDIA）

💡 **毒舌点评**

这篇论文最亮眼的是它“把音乐当音乐教”的思路：不再满足于给音乐贴标签，而是用包含和弦进行、歌曲结构、歌词主题的“音乐理论课”数据集（MF-Skills）去训练模型，再用强化学习（GRPO）逼它“像音乐家一样思考”，这在任务定义和方法论上都是一次有意义的升级。然而，其宏大的目标（“人类般的感知”）与当前实现之间仍有鸿沟，比如对复杂和弦与细微文化语境的把握仍显稚嫩，且评估高度依赖其自身构建的基准（SongCaps），可能陷入“自己考自己”的循环。

🔗 **开源详情**

- 代码：论文中提供了项目链接 https://research.nvidia.com/labs/adlr/MF/ ，承诺在论文被接受后发布代码。
- 模型权重：论文中未提及是否公开预训练或微调后的模型权重链接，但根据开源承诺推断，应会发布。
- 数据集：承诺发布MF-Skills和MF-Think数据集。
- Demo：论文中未提及在线演示链接。
- 复现材料：在附录D中提供了详细的训练设置（超参数、优化器、硬件），在附录C中列出了所有训练数据集及其组成，复现信息较为充分。
- 引用的开源项目：论文中依赖或对比了大量开源模型/数据集，如Audio Flamingo系列、Qwen-Audio系列、Gemini、GPT-4o、MusicCaps、NSynth、MSD、FMA、MERT、madmom、essentia、Parakeet等。

📌 **核心摘要**

1.  解决的问题：现有音频-语言模型在音乐理解上停留在表面（如粗略的流派、乐器识别），缺乏对音乐多层次结构（和声、结构、歌词、文化背景）的深层、推理式理解。
2.  方法核心：提出Music Flamingo，通过三个阶段构建：a) 改进Audio Flamingo 3基座模型；b) 在大规模、多文化、长时段的音乐数据集MF-Skills上进行监督微调；c) 使用基于链式思考（CoT）的数据集MF-Think进行推理冷启动，再通过GRPO强化学习增强音乐推理能力。
3.  创新点：a) 提出MF-Skills（4M+样本）和MF-Think（176k CoT样本）数据集，提供多层面、理论导向的标注；b) 设计了面向音乐的GRPO奖励函数（格式奖励、准确率奖励、结构化思考奖励）；c) 引入旋转时间嵌入（RoTE）以建模精细时序变化。
4.  实验结果：在12个基准测试（包括音乐问答、推理、信息检索、歌词转写）上取得SOTA。例如，在MMAU-Pro-Music上达到65.60（比Gemini-2.5 Flash高0.7），在MuChoMusic上达到74.58（显著高于Qwen3-Omni的52.10），在自建SongCaps基准的人类评分中得8.3分（Audio Flamingo 3为6.5分）。具体结果见下表。

| 任务 | 数据集 | 模型 | 指标 | 结果 |
| :--- | :--- | :--- | :--- | :--- |
| 音乐问答与推理 | MMAU (Music) | Audio Flamingo 3 | ACC ↑ | 73.95 (full-test) |
| | | Music Flamingo | | 76.83 |
| | MMAU-Pro-Music | Gemini-2.5 Flash | ACC ↑ | 64.90 |
| | | Music Flamingo | | 65.60 |
| | MuChoMusic | Qwen3-Omni | ACC ↑ | 52.10 |
| | | Music Flamingo | | 74.58 |
| | MMAR (Music) | Qwen2.5-Omni | ACC ↑ | 46.12 |
| | | Music Flamingo | | 48.66 |
| | Music Instruct | Audio Flamingo 3 | GPT5 ↑ | 92.7 |
| | | Music Flamingo | | 97.1 |
| 音乐信息检索 | NSynth (Instrument) | Audio Flamingo 3 | ACC ↑ | 78.9 |
| | | Music Flamingo | | 80.76 |
| | GTZAN (Genre) | Pengi | ACC ↑ | 80.00 |
| | | Music Flamingo | | 84.45 |
| | Medley-Solos-DB | Audio Flamingo 2 | ACC ↑ | 85.80 |
| | | Music Flamingo | | 90.86 |
| 歌词转写 | Opencpop (中文) | GPT-4o | WER ↓ | 53.7 |
| | | Music Flamingo | | 12.9 |
| | MUSDB18 (英文) | GPT-4o | WER ↓ | 32.7 |
| | | Music Flamingo | | 19.6 |
| 封面评价 | SongCaps (人类) | Audio Flamingo 3 | Score (1-10) ↑ | 6.5 |
| | | Music Flamingo | | 8.3 |

5.  实际意义：为音乐理解设立了新标杆，展示了模型从识别到推理的潜力，有助于推动音乐生成、推荐、教育等下游应用，并为社区提供了高质量的数据集和基准。
6.  主要局限性：a) 对低资源文化或专业技巧（如特定乐器演奏法）的理解仍有差距；b) 训练成本高昂（128x A100）；c) 模型输出的理论分析（如和弦标注）可能存在错误，需专家验证。

---

