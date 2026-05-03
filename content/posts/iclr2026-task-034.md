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
| 🥇 | [LLM2Fx-Tools: Tool Calling for Music Post-Production](/audio-paper-digest-blog/posts/2026-05-03-llm2fx-tools-tool-calling-for-music-post) | 8.0分 | 前25% |
| 🥈 | [Music Flamingo: Scaling Music Understanding in Audio Languag](/audio-paper-digest-blog/posts/2026-05-03-music-flamingo-scaling-music-understanding-in) | 7.5分 | 前25% |
| 🥉 | [LadderSym: A Multimodal Interleaved Transformer for Music Pr](/audio-paper-digest-blog/posts/2026-05-03-laddersym-a-multimodal-interleaved-transformer) | 7.0分 | 前25% |

---

## 📋 论文详情

### 🥇 [LLM2Fx-Tools: Tool Calling for Music Post-Production](/audio-paper-digest-blog/posts/2026-05-03-llm2fx-tools-tool-calling-for-music-post)

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

### 🥈 [Music Flamingo: Scaling Music Understanding in Audio Language Models](/audio-paper-digest-blog/posts/2026-05-03-music-flamingo-scaling-music-understanding-in)

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

### 🥉 [LadderSym: A Multimodal Interleaved Transformer for Music Practice Error Detection](/audio-paper-digest-blog/posts/2026-05-03-laddersym-a-multimodal-interleaved-transformer)

✅ **7.0/10** | 前25% | #音乐理解 | #多模态模型 | #序列到序列学习 #模型评估

👥 **作者与机构**

- 第一作者：Benjamin Shiue-Hal Chou (Purdue University)
- 通讯作者：未明确指定，但 Yung-Hsiang Lu 作为最后作者且提供邮箱，通常为资深作者/负责人。
- 作者列表：Benjamin Shiue-Hal Chou (Purdue University)， Purvish Jajal (Purdue University)， Nicholas John Eliopoulos (Purdue University)， James C. Davis (Purdue University)， George K. Thiruvathukal (Loyola University Chicago)， Kristen Yeon-Ji Yun (Purdue University)， Yung-Hsiang Lu (Purdue University)

#

💡 **毒舌点评**

亮点在于其“Ladder”编码器设计非常巧妙，通过交替的跨注意力模块在特征提取过程中强制进行精细的跨模态对齐，这比单纯的晚期融合有效得多，且提供了可解释的注意力图作为证据。短板是，虽然构建了宝贵的真人初学者数据集，但规模仍较小（20首），且论文中承认“错误累积在片段边界附近”的问题并未得到根本性解决，未来工作可以更深入地探讨实时/流式处理的实用性。

#

🔗 **开源详情**

*   代码：提供了代码仓库链接：`https://github.com/ben2002chou/LadderSYM`。
*   模型权重：论文中未提及是否公开预训练模型权重。
*   数据集：
    *   合成数据集 MAESTRO-E 和 CocoChorales-E 是公开可用的（论文引用 Chou et al., 2025）。
    *   真实世界初学者数据集（20首）已描述创建过程，论文中未明确说明其公开获取方式，但作为验证集，有提及其可用性。
*   Demo：论文提到提供了演示示例（“Demo examples... are available at: our demo page”），但具体链接在提供的文本中未显示。
*   复现材料：提供了详细的训练超参数表（表7）、损失函数说明、数据增强方法、评估指标定义、硬件软件环境以及种子管理代码片段，复现细节较完备。
*   论文中引用的开源项目：依赖于 EfficientTTMs（MIT License）和 Polytune（BSD 3-Clause, 非商业）的代码基础；使用 MT3 进行音频分词；使用 MIDI-DDSP 合成训练音频；评估使用 mir_eval；模型架构基于 Audio Spectrogram Transformer 和 T5。

📌 **核心摘要**

1.  问题：现有音乐练习错误检测方法存在两大局限：晚期融合设计限制了练习音频与参考乐谱之间的跨流对齐能力；仅用音频表示乐谱会在和弦等并发音符处引入频率歧义，影响漏音检测。
2.  方法核心：提出 LadderSym 架构，包含两个核心创新：(1) Ladder 编码器，采用交替��跨注意力对齐模块，在每一层实现音轨流与练习流之间的迭代对齐和信息交换，同时保持流的非对称特征提取能力。(2) 符号乐谱提示，将符号化的乐谱（MIDI）作为提示输入给 T5 解码器，为解码器提供明确、无歧义的参考信息。
3.  新在哪：与之前的 SOTA（Polytune）相比，LadderSym 将对齐操作从编码器末端（晚期融合）移至每一层的交替模块，并引入了符号与音频的多模态策略，从架构和输入表征两个层面进行改进。
4.  主要实验结果：
    *   在合成数据集 MAESTRO-E 上，漏音（Missed）F1 从 26.8% 提升至 56.3%，多音（Extra）F1 从 72.0% 提升至 86.4%。
    *   在合成数据集 CocoChorales-E 上，漏音 F1 从 51.3% 提升至 61.7%，多音 F1 从 46.8% 提升至 61.4%。
    *   在新建的真实世界初学者钢琴数据集（20首）上，LadderSym 在漏音检测（78.5% vs 63.9% F1）和多音检测（81.6% vs 80.6% F1）上均优于 Polytune，展示了泛化能力。
    *   模型参数量（172M）小于 Polytune（192M），且编码器延迟更低。
5.  实际意义：该工具可帮助音乐学习者获得更精确的练习反馈，有望成为高质量数据集的人机协作标注工具，以突破该领域“鸡生蛋，蛋生鸡”的数据瓶颈。其架构思想对其他序列评估任务（如 RL 评估、技能评估）有借鉴意义。
6.  主要局限性：(1) 漏音检测仍是挑战，尤其在密集和弦（MAESTRO-E）中。(2) 延音跨越片段边界时易产生错误标签。(3) 模型对全局节奏大幅偏差（如半速演奏）的处理能力有限，仅适用于局部节奏偏移。

---

